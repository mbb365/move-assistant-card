// Test focus and the density overlay.
// - Test focus (`layout: test-focus` in the YAML): more Home Assistant entities on Home (lights and readings),
//   built from the same display pieces, so the versions can be tried with real data. The normal Home never shows them.
// - Show density: every display card's height, and how many readings fit on the screen.

const DENSITY_KEY = 'move-assistant-density';

const local = {
  get(k) { try { return localStorage.getItem(k); } catch (_e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (_e) { /* private window: just not remembered */ } },
};
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const ARROW = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>';

// Which card a sensor goes in when the YAML only lists entities
const ENERGY = ['power', 'energy', 'voltage', 'current', 'gas', 'water', 'monetary', 'apparent_power', 'reactive_power', 'power_factor', 'battery', 'energy_storage'];
const CLIMATE = ['temperature', 'humidity', 'pressure', 'atmospheric_pressure', 'illuminance', 'carbon_dioxide', 'pm25', 'pm10', 'volatile_organic_compounds', 'moisture', 'wind_speed', 'precipitation'];
const GROUP_META = {
  lights: { title: 'Lights' },
  energy: { title: 'Energy', icon: 'mdi:lightning-bolt' },
  climate: { title: 'Climate', icon: 'mdi:thermometer' },
  readings: { title: 'Readings', icon: 'mdi:gauge' },
};

export function mountTestFocus(root, { config, getHass }) {
  const $ = (id) => root.getElementById(id);
  const app = $('app');
  const cfg = config || {};
  const testFocus = String(cfg.layout || '').toLowerCase().replace('_', '-') === 'test-focus';
  let densityOn = local.get(DENSITY_KEY) === '1';
  let states = {};
  const callWS = (msg) => getHass()?.callWS(msg);
  const callService = (domain, service, data) => callWS({ type: 'call_service', domain, service, service_data: data });

  /* ---------- Settings → Appearance → Show density ---------- */
  const list = root.querySelector('#appearancePane .toggleList');
  if (list && !$('densityToggle')) {
    list.insertAdjacentHTML('afterbegin',
      '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div>' +
      '<button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>');
    $('densityToggle').addEventListener('click', () => { densityOn = !densityOn; local.set(DENSITY_KEY, densityOn ? '1' : '0'); applyDensity(); });
  }

  /* ---------- density overlay ---------- */
  const badge = document.createElement('div');
  badge.className = 'densityBadge';
  badge.setAttribute('aria-live', 'polite');
  badge.hidden = true;
  app.appendChild(badge);
  let densityTimer = 0;
  function measureDensity() {
    if (!densityOn) return;
    const home = $('homeView');
    const shown = (el) => el.offsetParent !== null && !el.closest('[hidden]');
    home.querySelectorAll(':scope .card, :scope .tfAction').forEach((el) => { if (shown(el)) el.dataset.h = Math.round(el.getBoundingClientRect().height) + ' px'; });
    const readings = [...home.querySelectorAll('.activityRow, .tfAction, .tfHalf, .wxNow')].filter(shown);
    const vh = window.innerHeight;
    const vis = readings.filter((el) => { const r = el.getBoundingClientRect(); return r.height > 0 && r.top >= 0 && r.bottom <= vh + 0.5; }).length;
    badge.hidden = !home.classList.contains('active');
    badge.innerHTML = '<b>' + vis + '</b><small>of ' + readings.length + ' readings on screen</small>';
  }
  const onScroll = () => { if (densityOn) requestAnimationFrame(measureDensity); };
  function applyDensity() {
    app.classList.toggle('showDensity', densityOn);
    $('densityToggle')?.classList.toggle('on', densityOn);
    badge.hidden = !densityOn;
    clearInterval(densityTimer);
    if (densityOn) { densityTimer = setInterval(measureDensity, 1000); measureDensity(); }
  }
  window.addEventListener('scroll', onScroll, { capture: true, passive: true });
  window.addEventListener('resize', onScroll, { passive: true });

  /* ---------- test focus ---------- */
  const grid = root.querySelector('#homeView .grid');
  const anchor = root.querySelector('#homeView .feelSection');
  let groups = [];
  let open = null; // { card index, entity id }
  const history = new Map(); // entity id → { at, points }
  const dragging = new Map(); // light id → brightness while the bar is held

  function readGroups() {
    if (Array.isArray(cfg.test_focus) && cfg.test_focus.length) {
      return cfg.test_focus.map((g) => ({ type: g.type || 'readings', title: g.title, icon: g.icon, entities: (g.entities || []).map((e) => (typeof e === 'string' ? { entity: e } : e)).filter((e, i, all) => all.findIndex((x) => x.entity === e.entity) === i) }));
    }
    const auto = { lights: [], energy: [], climate: [], readings: [] };
    (cfg.entities || []).map((e) => (typeof e === 'string' ? { entity: e } : e)).forEach((e) => {
      const domain = String(e.entity).split('.')[0];
      const dc = states[e.entity]?.attributes?.device_class;
      if (domain === 'light') auto.lights.push(e);
      else if (domain === 'weather') return; // the weather card on Home already shows it
      else if (ENERGY.includes(dc)) auto.energy.push(e);
      else if (CLIMATE.includes(dc)) auto.climate.push(e);
      else auto.readings.push(e);
    });
    return Object.entries(auto).filter(([, list]) => list.length).map(([k, list]) => ({ type: k === 'lights' ? 'lights' : 'readings', title: GROUP_META[k].title, icon: GROUP_META[k].icon, entities: list }));
  }

  const nameOf = (e) => e.name || states[e.entity]?.attributes?.friendly_name || e.entity;
  const brightnessOf = (st) => (st?.state === 'on' ? (st.attributes.brightness != null ? Math.max(1, Math.round(st.attributes.brightness / 2.55)) : 100) : 0);
  const dimmable = (st) => { const modes = st?.attributes?.supported_color_modes; return Array.isArray(modes) ? modes.some((m) => m !== 'onoff') : st?.attributes?.brightness != null; };
  function valueOf(e) {
    const st = states[e.entity];
    if (!st) return 'Not found';
    if (st.state === 'unavailable') return 'Unavailable';
    if (st.entity_id.startsWith('light.')) {
      if (st.state !== 'on') return 'Off';
      const k = st.attributes.color_temp_kelvin;
      return (dimmable(st) ? brightnessOf(st) + '%' : 'On') + (st.attributes.color_mode === 'color_temp' && k ? ' · ' + Number(k).toLocaleString() + 'k' : '');
    }
    const hass = getHass();
    if (hass?.formatEntityState) { try { return hass.formatEntityState(st); } catch (_e) { /* fall through */ } }
    const n = Number(st.state);
    if (st.state !== '' && Number.isFinite(n)) {
      const digits = Math.abs(n) >= 100 ? 0 : Math.abs(n) >= 10 ? 1 : 2;
      return n.toLocaleString(undefined, { maximumFractionDigits: digits }) + (st.attributes.unit_of_measurement ? ' ' + st.attributes.unit_of_measurement : '');
    }
    return st.state.charAt(0).toUpperCase() + st.state.slice(1);
  }

  // Entity icons come from Home Assistant (ha-state-icon), so they match the rest of the dashboard
  function fillIcons(scope) {
    const hass = getHass();
    scope.querySelectorAll('[data-icon-for]').forEach((slot) => {
      const st = states[slot.dataset.iconFor];
      const want = slot.dataset.iconName || '';
      if (customElements.get('ha-state-icon') && st && !want) {
        let el = slot.firstElementChild;
        if (!el || el.localName !== 'ha-state-icon') { slot.textContent = ''; el = document.createElement('ha-state-icon'); slot.appendChild(el); }
        el.hass = hass; el.stateObj = st;
      } else if (customElements.get('ha-icon')) {
        let el = slot.firstElementChild;
        if (!el || el.localName !== 'ha-icon') { slot.textContent = ''; el = document.createElement('ha-icon'); slot.appendChild(el); }
        el.icon = want || st?.attributes?.icon || 'mdi:circle-medium';
      } else if (!slot.textContent) {
        slot.textContent = (nameOf({ entity: slot.dataset.iconFor }) || '?').trim().charAt(0).toUpperCase();
      }
    });
  }

  function tileRow(e, gi) {
    return '<div class="activityRow tap" role="button" tabindex="0" data-open="' + gi + '|' + esc(e.entity) + '" aria-label="' + esc(nameOf(e)) + ', ' + esc(valueOf(e)) + '. Show the last 24 hours">' +
      '<div class="tfIcon" aria-hidden="true" data-icon-for="' + esc(e.entity) + '"' + (e.icon ? ' data-icon-name="' + esc(e.icon) + '"' : '') + '></div>' +
      '<div><div class="activityRowName">' + esc(nameOf(e)) + '</div><div class="activityRowMeta">' + esc(valueOf(e)) + '</div></div></div>';
  }
  function openTile(e) {
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true" data-icon-for="' + esc(e.entity) + '"' + (e.icon ? ' data-icon-name="' + esc(e.icon) + '"' : '') + '></div>' +
      '<div><div class="activityRowName">' + esc(nameOf(e)) + '</div><div class="activityRowMeta">' + esc(valueOf(e)) + '</div></div>' +
      '<button class="tfBack" type="button" data-close aria-label="Close ' + esc(nameOf(e)) + '’s last 24 hours">' + ARROW + '</button></div>' +
      '<svg class="tfGraph" data-graph="' + esc(e.entity) + '" role="img" aria-label="' + esc(nameOf(e)) + ', last 24 hours"></svg></div>';
  }
  function lightTile(e) {
    const st = states[e.entity], b = dragging.has(e.entity) ? dragging.get(e.entity) : brightnessOf(st), on = st?.state === 'on';
    return '<div class="tfAction' + (on ? ' on' : '') + '" data-light="' + esc(e.entity) + '">' +
      '<div class="tfActionHead"><button class="tfIcon" type="button" data-toggle-light="' + esc(e.entity) + '" aria-label="Turn ' + esc(nameOf(e)) + (on ? ' off' : ' on') + '" data-icon-for="' + esc(e.entity) + '"' + (e.icon ? ' data-icon-name="' + esc(e.icon) + '"' : '') + '></button>' +
      '<div><div class="activityRowName">' + esc(nameOf(e)) + '</div><div class="activityRowMeta">' + esc(dragging.has(e.entity) ? b + '%' : valueOf(e)) + '</div></div></div>' +
      '<div class="tfBar" role="slider" tabindex="0" aria-label="' + esc(nameOf(e)) + ' brightness" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + b + '" data-bar="' + esc(e.entity) + '"><i style="width:' + b + '%"></i></div></div>';
  }
  function halfTile(e, gi) {
    return '<div class="tfHalf tap" role="button" tabindex="0" data-open="' + gi + '|' + esc(e.entity) + '" aria-label="' + esc(nameOf(e)) + ', ' + esc(valueOf(e)) + '. Show the last 24 hours">' +
      '<div class="tfIcon" aria-hidden="true" data-icon-for="' + esc(e.entity) + '"' + (e.icon ? ' data-icon-name="' + esc(e.icon) + '"' : '') + '></div>' +
      '<div><div class="activityRowName">' + esc(nameOf(e)) + '</div><div class="activityRowMeta">' + esc(valueOf(e)) + '</div></div></div>';
  }

  function render() {
    if (!testFocus || !grid) return;
    grid.querySelectorAll('[data-tf]').forEach((el) => el.remove());
    groups = readGroups();
    if (!groups.length) {
      grid.insertBefore(Object.assign(document.createElement('div'), { className: 'sectionLabel rowLabel tfLabel', textContent: 'Test focus: add entities to this card’s YAML' }), anchor);
      grid.lastElementChild.dataset.tf = '';
      return;
    }
    // a section label above each group (HomeCore: labels sit above, never inside)
    const block = (label, inner, cls) => '<div class="tfBlock' + (cls ? ' ' + cls : '') + '"><div class="sectionLabel tfGroupLabel">' + esc(label) + '</div>' + inner + '</div>';
    const html = groups.map((g, gi) => {
      if (g.type === 'lights') return block(g.title || 'Lights', '<div class="tfLights" role="group" aria-label="' + esc(g.title || 'Lights') + '">' + g.entities.map(lightTile).join('') + '</div>', 'tfLightsBlock');
      const isOpen = open && open.gi === gi;
      const e = isOpen && g.entities.find((x) => x.entity === open.entity);
      // readings stay in their card; the card puts them two side by side when there's room (display.css)
      return '<section class="card tfCard' + (e ? ' open' : '') + '"' + (e && open.h ? ' style="min-height:' + open.h + 'px"' : '') + ' aria-label="' + esc(g.title || 'Readings') + '">' +
        '<div class="activityHeader"><div class="activityIcon tfHeadIcon" aria-hidden="true" data-icon-for="' + esc(g.entities[0]?.entity) + '"' + (g.icon ? ' data-icon-name="' + esc(g.icon) + '"' : '') + '></div><div class="activityTitle">' + esc(g.title || 'Readings') + '</div></div>' +
        (e ? openTile(e) : '<div class="activityRows">' + g.entities.map((x) => tileRow(x, gi)).join('') + '</div>') + '</section>';
    }).join('');
    const wrap = document.createElement('div');
    wrap.innerHTML = html;
    [...wrap.children].forEach((el) => { el.dataset.tf = ''; grid.insertBefore(el, anchor); });
    fillIcons(grid);
    if (open) drawHistory(open.entity);
    requestAnimationFrame(measureDensity);
  }

  // Update values in place, so an open tile or a held brightness bar isn't redrawn under the pointer
  function refresh() {
    if (!testFocus || !grid) return;
    if (!grid.querySelector('[data-tf]') || groups.length !== readGroups().length) { render(); return; }
    groups.forEach((g, gi) => g.entities.forEach((e) => {
      const v = valueOf(e);
      grid.querySelectorAll('[data-open="' + gi + '|' + CSS.escape(e.entity) + '"] .activityRowMeta, .tfHalf [data-icon-for="' + CSS.escape(e.entity) + '"] + div .activityRowMeta').forEach((m) => { m.textContent = v; });
      const light = grid.querySelector('[data-light="' + CSS.escape(e.entity) + '"]');
      if (light && !dragging.has(e.entity)) {
        const st = states[e.entity], b = brightnessOf(st);
        light.classList.toggle('on', st?.state === 'on');
        light.querySelector('.activityRowMeta').textContent = v;
        light.querySelector('.tfBar i').style.width = b + '%';
        light.querySelector('.tfBar').setAttribute('aria-valuenow', String(b));
        light.querySelector('[data-toggle-light]').setAttribute('aria-label', 'Turn ' + nameOf(e) + (st?.state === 'on' ? ' off' : ' on'));
      }
    }));
    if (open) { const m = grid.querySelector('.tfOpen .activityRowMeta'); const g = groups[open.gi]; const e = g?.entities.find((x) => x.entity === open.entity); if (m && e) m.textContent = valueOf(e); }
    fillIcons(grid);
  }

  /* the last 24 hours, for an open tile */
  async function drawHistory(id) {
    let h = history.get(id);
    if (!h || Date.now() - h.at > 5 * 60 * 1000) {
      try {
        const start = new Date(Date.now() - 24 * 3600 * 1000).toISOString();
        const res = await callWS({ type: 'history/history_during_period', start_time: start, entity_ids: [id], minimal_response: true, no_attributes: true, significant_changes_only: false });
        const points = (res?.[id] || []).map((r) => [r.lu != null ? r.lu * 1000 : Date.parse(r.last_updated || r.last_changed), Number(r.s ?? r.state)]).filter(([t, v]) => Number.isFinite(t) && Number.isFinite(v));
        h = { at: Date.now(), points };
      } catch (_e) { h = { at: Date.now(), points: [] }; }
      history.set(id, h);
    }
    const svg = grid.querySelector('[data-graph="' + CSS.escape(id) + '"]');
    if (!svg) return;
    const st = states[id], unit = st?.attributes?.unit_of_measurement || '';
    const pts = h.points.slice();
    const now = Number(st?.state);
    if (Number.isFinite(now)) pts.push([Date.now(), now]);
    if (pts.length < 2) { svg.setAttribute('aria-label', nameOf({ entity: id }) + ': no history for the last 24 hours'); svg.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>'; return; }
    const vals = pts.map((p) => p[1]), min = Math.min(...vals), max = Math.max(...vals);
    const f = (v) => v.toLocaleString(undefined, { maximumFractionDigits: Math.abs(v) >= 100 ? 0 : 1 });
    const growing = st?.attributes?.state_class === 'total_increasing';
    svg.setAttribute('aria-label', nameOf({ entity: id }) + ', last 24 hours: ' + (growing ? '+' + f(vals[vals.length - 1] - vals[0]) : (min === max ? f(min) : f(min) + ' to ' + f(max))) + (unit ? ' ' + unit : ''));
    const W = Math.max(120, svg.clientWidth || 260), H = Math.max(80, svg.clientHeight || 130), top = 8, bottom = H - 20;
    const t0 = Date.now() - 24 * 3600 * 1000, span = 24 * 3600 * 1000;
    const x = (t) => Math.max(0, Math.min(W, ((t - t0) / span) * W));
    const y = (v) => (max === min ? (top + bottom) / 2 : bottom - ((v - min) / (max - min)) * (bottom - top));
    // a reading holds its value until the next one, so draw steps
    let d = 'M' + x(pts[0][0]).toFixed(1) + ' ' + y(pts[0][1]).toFixed(1);
    for (let i = 1; i < pts.length; i++) d += 'H' + x(pts[i][0]).toFixed(1) + 'V' + y(pts[i][1]).toFixed(1);
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    svg.innerHTML = '<path d="' + d + 'V' + bottom + 'H' + x(pts[0][0]).toFixed(1) + 'Z" fill="var(--primary)" fill-opacity=".14"/>' +
      '<path d="' + d + '" fill="none" stroke="var(--primary)" stroke-width="2" stroke-linejoin="round"/>' +
      '<text x="0" y="' + (H - 4) + '">24 h ago</text><text x="' + W + '" y="' + (H - 4) + '" text-anchor="end">Now</text>';
  }

  /* interactions */
  function openReading(el) {
    const [gi, id] = el.dataset.open.split('|');
    const card = el.closest('.tfCard');
    open = { gi: Number(gi), entity: id, h: card ? Math.round(card.getBoundingClientRect().height) : 0 };
    render();
    grid.querySelector('.tfOpen [data-close]')?.focus();
  }
  if (grid && testFocus) {
    grid.addEventListener('click', (ev) => {
      const t = ev.target.closest('[data-open],[data-close],[data-toggle-light]');
      if (!t || !grid.contains(t)) return;
      if (t.dataset.open) openReading(t);
      else if (t.hasAttribute('data-close')) { const gi = open?.gi, id = open?.entity; open = null; render(); grid.querySelector('[data-open="' + gi + '|' + CSS.escape(id || '') + '"]')?.focus(); }
      else if (t.dataset.toggleLight) callService('light', 'toggle', { entity_id: t.dataset.toggleLight });
    });
    grid.addEventListener('keydown', (ev) => {
      const t = ev.target;
      if (t.dataset?.open && (ev.key === 'Enter' || ev.key === ' ')) { ev.preventDefault(); openReading(t); }
      if (t.dataset?.bar && ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(ev.key)) {
        ev.preventDefault();
        const st = states[t.dataset.bar], b = brightnessOf(st);
        const next = ev.key === 'Home' ? 0 : ev.key === 'End' ? 100 : Math.max(0, Math.min(100, b + (ev.key === 'ArrowLeft' || ev.key === 'ArrowDown' ? -10 : 10)));
        setBrightness(t.dataset.bar, next);
      }
    });
    // brightness: press and drag along the bar, set on release
    grid.addEventListener('pointerdown', (ev) => {
      const bar = ev.target.closest('[data-bar]');
      if (!bar) return;
      const id = bar.dataset.bar, st = states[id];
      if (!dimmable(st)) { callService('light', 'toggle', { entity_id: id }); return; }
      ev.preventDefault();
      bar.setPointerCapture?.(ev.pointerId);
      const at = (e2) => { const r = bar.getBoundingClientRect(); return Math.round(Math.max(0, Math.min(1, (e2.clientX - r.left) / r.width)) * 100); };
      const show = (b) => { dragging.set(id, b); bar.querySelector('i').style.width = b + '%'; bar.setAttribute('aria-valuenow', String(b)); bar.closest('.tfAction').querySelector('.activityRowMeta').textContent = b ? b + '%' : 'Off'; };
      show(at(ev));
      const move = (e2) => show(at(e2));
      const up = () => { bar.removeEventListener('pointermove', move); bar.removeEventListener('pointerup', up); bar.removeEventListener('pointercancel', up); const b = dragging.get(id); setBrightness(id, b); };
      bar.addEventListener('pointermove', move);
      bar.addEventListener('pointerup', up);
      bar.addEventListener('pointercancel', up);
    });
  }
  function setBrightness(id, b) {
    dragging.set(id, b);
    const done = () => setTimeout(() => { dragging.delete(id); refresh(); }, 1500);
    (b > 0 ? callService('light', 'turn_on', { entity_id: id, brightness_pct: b }) : callService('light', 'turn_off', { entity_id: id }))?.then(done, done);
  }

  applyDensity();
  return {
    update(next) {
      const first = !Object.keys(states).length;
      states = next || {};
      if (first) render(); else refresh();
    },
  };
}
