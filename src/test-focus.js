// Test focus and the density overlay.
// - Test focus (`layout: test-focus` in the YAML): a whole house on Home, built from the HomeCore display pieces so the
//   spacing rules can be pushed with real data. Rooms come from Home Assistant areas; house.js adds made-up devices
//   for what the house doesn't have. Area cards sit where the move panels were (an accordion, like them); the move
//   panels are hidden. Tapping a device's name opens this page's more-info, for real and made-up devices alike: a
//   popup or a sheet (Settings → Appearance → More info), with its details rolling out beside it. Covers follow
//   Claude Design's "Covers design": four blocks, a tilt bar and Open/Stop/Close on the tile, and the cover drawn in
//   its window in more-info. The normal Home never shows any of this.
// - Show density: every display card's height, and how many readings fit on the screen.
import { createHouse, isMadeUp, solarHistory } from './house.js';
import { mountWeatherBento } from './weather-bento.js';
import { createCoverArt, coverKind } from './cover-art.js';

const DENSITY_KEY = 'move-assistant-density';

const local = {
  get(k) { try { return localStorage.getItem(k); } catch (_e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch (_e) { /* private window: just not remembered */ } },
};
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const ARROW = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>';
// Move Assistant's back chevron (its pages' header)
const BACK = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>';
const CLOSE = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>';
const MEDIA = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>',
};
// media_player supported_features bits
const PAUSE = 1, VOLUME_SET = 4, PREVIOUS = 16, NEXT = 32, TURN_ON = 128, TURN_OFF = 256, PLAY = 16384;
// cover supported_features bits
const OPEN = 1, CLOSE_COVER = 2, SET_POSITION = 4, STOP = 8;
// a cover's open, stop and close, and its icon and name for each kind (Claude Design "Covers design")
const COVER_BUTTONS = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>',
};
const COVER_ICON = { curtain: ['mdi:curtains', 'mdi:curtains-closed'], blind: ['mdi:roller-shade', 'mdi:roller-shade-closed'], venetian: ['mdi:blinds-horizontal', 'mdi:blinds-horizontal-closed'] };
const COVER_NOUN = { curtain: 'curtains', blind: 'blind', venetian: 'blinds' };
// the home view's summaries (Home Assistant's home-summaries.ts, with its English names), in its default order. Energy
// shows what the house uses now: this page can't read the energy dashboard's day
const SUMMARIES = {
  light: { name: 'Lights', icon: 'mdi:lamps', colour: '#ffc107' },
  climate: { name: 'Climate', icon: 'mdi:home-thermometer', colour: '#ff5722' },
  security: { name: 'Security', icon: 'mdi:security', colour: '#607d8b' },
  media_players: { name: 'Media players', icon: 'mdi:multimedia', colour: '#2196f3' },
  maintenance: { name: 'Maintenance', icon: 'mdi:wrench', colour: '#9e9e9e' },
  energy: { name: 'Energy', icon: 'mdi:lightning-bolt', colour: '#ffc107' },
};
const HOUSE_KEY = 'move_assistant_house'; // the house page's own saved data (its favourites), apart from the moves
const USED_KEY = 'move-assistant-house-used'; // how often each device is used here, for suggested favourites
const TOGGLES = ['switch', 'fan', 'input_boolean', 'automation'];
// How more-info opens on the house page (Matt picked these two, 27 Oct): a popup in the middle, or a sheet from the
// bottom, 640 wide. Set in Settings → Appearance → More info and remembered in this browser; both rise from the
// bottom on phones.
const LOOK_KEY = 'move-assistant-house-look';
const MORE_STYLES = [['popup', 'Popup'], ['sheet', 'Sheet']];
// the dashboard's edit mode: the pencil and Done in the bottom bar, and each card's grip and options
const GRIP = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>';
const DOTS = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>';
const CHEVRON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
// a stroke icon on the 24 grid
const svgIcon = (paths) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + paths.map((d) => '<path d="' + d + '"/>').join('') + '</svg>';
const PENCIL = svgIcon(['M12 20H21', 'M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z']);
const TICK = svgIcon(['M20 6L9 17L4 12']);
// Area cards: the room's main thing big, then its controls as tiles (Matt, 27 Oct: Big's headline with Tiles)
const AREA_ICON = {
  temp: svgIcon(['M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0Z']),
  hum: svgIcon(['M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0Z']),
  lights: svgIcon(['M9 18h6', 'M10 22h4', 'M12 2a7 7 0 0 0-4 12.74V17h8v-2.26A7 7 0 0 0 12 2Z']),
  covers: svgIcon(['M3 3h18', 'M5 3v18c3-4 4-10 4-18', 'M19 3v18c-3-4-4-10-4-18']),
  climate: svgIcon(['M2 8h20', 'M2 19h20', 'M5 5v17', 'M9.5 5v17', 'M14.5 5v17', 'M19 5v17']),
  humidifier: svgIcon(['M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0Z', 'M9 15a3 3 0 0 0 3 3']),
  media: svgIcon(['M3 6h18v12H3Z', 'M8 21h8']),
  plugs: svgIcon(['M9 2v6', 'M15 2v6', 'M6 8h12v4a6 6 0 0 1-12 0Z', 'M12 18v4']),
  alert: svgIcon(['M12 9v4', 'M12 17h.01', 'M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z']),
  door: svgIcon(['M13 4h5v16h-5', 'M3 20h18', 'M13 4L6 6v14l7 0Z', 'M10.5 12h.01']),
};
const STAR = (on) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (on ? 'currentColor' : 'none') + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>';
// lock: can open the door; alarm: arm home, away, night
const LOCK_OPEN = 1;
const ALARM_MODES = [['disarmed', 'Off', 'alarm_disarm', 0], ['armed_home', 'Home', 'alarm_arm_home', 1], ['armed_away', 'Away', 'alarm_arm_away', 2], ['armed_night', 'Night', 'alarm_arm_night', 4]];
const ALARM_STATE = { disarmed: 'Disarmed', armed_home: 'Armed home', armed_away: 'Armed away', armed_night: 'Armed night', armed_vacation: 'Armed vacation', arming: 'Arming', pending: 'Pending', triggered: 'Triggered', disarming: 'Disarming' };
const COLOUR_MODES = ['hs', 'xy', 'rgb', 'rgbw', 'rgbww'];
const OPEN_CLASSES = ['door', 'window', 'garage_door', 'opening'];
const ACTION_DOMAINS = ['light', 'climate', 'cover', 'humidifier', 'media_player', 'vacuum', 'lock', 'alarm_control_panel', 'valve'];
// The dashboard (Matt, 27 Oct): what its activity card follows, how many changes and favourites it shows, and its
// energy's icons
const ACTIVITY_DOMAINS = ['light', 'switch', 'fan', 'lock', 'cover', 'climate', 'humidifier', 'media_player', 'alarm_control_panel', 'vacuum', 'valve', 'binary_sensor'];
// Favourites: five rows, so beside Activity their tiles line up. Activity: the latest changes, as many as its card fits
// (five in a large card); the rest scroll (Matt, 27 Oct)
const DASH_FAVOURITES = 10, ACTIVITY_MOST = 20;
const ENERGY_ICON = { electricity: 'mdi:lightning-bolt', solar: 'mdi:solar-power-variant', gas: 'mdi:fire', water: 'mdi:water' };
// the bottom row's tiles: a light tile's size, 10 apart (light tiles' rule)
const DASH_TILE_W = 252, DASH_TILE_GAP = 10;
// the rooms whose lights the dashboard shows, in Favourites, Activity and the tiles (Matt, 27 Oct)
const DASH_LIGHT_ROOMS = ['living room', 'bedroom', 'office'];

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

  /* Settings on the house (Matt, 27 Oct): it's "HomeCore" (28 Oct; was "HomeCore test"), with only what the house uses.
     Appearance: theme, Show density, More info and the lights (this page's tiles or the Dual Axis Controller); Sources: which entities feed the
     weather, energy and alarm; Summaries: which show. A table of the lights (Matt, 27 Oct: an example of a table) sets
     each one's favourite, tile and pad. Move Assistant's own settings stay on its page */
  const SOURCES = [
    ['weather', 'Weather', 'The forecast under Home.', (id) => id.startsWith('weather.')],
    ['grid', 'Energy', 'Power from the grid, for Energy.', (id) => id.startsWith('sensor.') && attr(id).device_class === 'power' && /^(W|kW)$/.test(attr(id).unit_of_measurement || '')],
    ['alarm', 'Alarm', 'The alarm on the Security page.', (id) => id.startsWith('alarm_control_panel.')],
  ];
  const seg = (id, label, attrName, opts) => '<div class="themeChoice" id="' + id + '" role="group" aria-label="' + label + '">' +
    opts.map(([v, t]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + attrName + '="' + v + '">' + t + '</button>').join('') + '</div>';
  const settingRow = (title, status, control, id) => '<div class="toggleRow"' + (id ? ' id="' + id + '"' : '') + '><div><strong>' + title + '</strong>' + (status ? '<div class="status">' + status + '</div>' : '') + '</div>' + control + '</div>';
  function houseSettings() {
    if (!testFocus || $('housePane')) return;
    const view = $('settingsView');
    view.querySelector('.settingsTitle').textContent = 'HomeCore';
    // one tab each (Matt, 27 Oct); the tab names the section, so the sections have no heading of their own
    const tabs = [['look', 'Appearance'], ['lights', 'Lights'], ['sources', 'Sources'], ['sums', 'Summaries']];
    const tabPane = (k, html) => '<div class="houseTab' + (k === 'look' ? ' active' : '') + '" data-house-pane="' + k + '"><section class="card">' + html + '</section></div>';
    view.querySelector('.rubberTabs').insertAdjacentHTML('afterend', '<div class="settingsPane active" id="housePane">' +
      '<div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' +
        tabs.map(([k, t]) => '<button class="tab segBtn' + (k === 'look' ? ' active' : '') + '" type="button" data-house-tab="' + k + '">' + t + '</button>').join('') + '</div>' +
      tabPane('look', '<div class="toggleList" id="houseLook"></div>') +
      tabPane('lights', '<p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p>' +
        '<div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead>' +
        '<tbody id="lightRows"></tbody></table></div>') +
      tabPane('sources', '<div class="toggleList">' +
        SOURCES.map(([k, t, s]) => settingRow(t, s, '<select class="settingsSelect" data-source="' + k + '" aria-label="' + t + '"></select>')).join('') + '</div>') +
      tabPane('sums', '<div class="toggleList">' +
        Object.entries(SUMMARIES).map(([k, s]) => settingRow(s.name, '', '<button class="switch" type="button" role="switch" data-sum-toggle="' + k + '" aria-label="' + s.name + ' summary"></button>')).join('') + '</div>') + '</div>');
    const rows = $('houseLook');
    [view.querySelector('.themeBtn')?.closest('.toggleRow'), $('densityToggle')?.closest('.toggleRow'), $('moreInfoChoice')?.closest('.toggleRow')].forEach((row) => row && rows.appendChild(row));
    rows.insertAdjacentHTML('beforeend', settingRow('Lights', 'How lights show on the house page.', seg('lightsChoice', 'Lights', 'data-lights', [['tile', 'HomeCore tile'], ['dac', 'Dual Axis Controller']]), 'lightsRow') +
      settingRow('Pad', 'What the Dual Axis Controller’s pad sets on its tile.', seg('dacPadChoice', 'Pad', 'data-dac-pad', [['temperature', 'Temperature'], ['colour', 'Colour']]), 'dacPadRow'));
    const pane = $('housePane'), bar = pane.querySelector('.houseTabs'), mark = bar.querySelector('.rubberIndicator');
    // the sliding mark under the open tab, as on Move Assistant's settings; placed again whenever the bar shows or resizes
    const placeMark = (animate) => {
      const on = bar.querySelector('.tab.active');
      mark.style.transition = animate ? '' : 'none';
      mark.style.left = on.offsetLeft + 'px';
      mark.style.width = on.offsetWidth + 'px';
      if (animate) { mark.style.transform = 'scaleX(1.08)'; setTimeout(() => (mark.style.transform = ''), 180); }
    };
    new ResizeObserver(() => placeMark(false)).observe(bar);
    pane.addEventListener('click', (ev) => {
      const tab = ev.target.closest('[data-house-tab]');
      if (tab) {
        bar.querySelectorAll('.tab').forEach((t) => t.classList.toggle('active', t === tab));
        pane.querySelectorAll('.houseTab').forEach((p) => p.classList.toggle('active', p.dataset.housePane === tab.dataset.houseTab));
        tab.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'smooth' });
        placeMark(true);
        return;
      }
      const fav = ev.target.closest('[data-light-fav]');
      if (fav) { toggleStar(fav.dataset.lightFav); return; }
      const b = ev.target.closest('[data-lights],[data-dac-pad],[data-sum-toggle]');
      if (!b || b.disabled) return;
      if (b.dataset.lights) look.lights = b.dataset.lights;
      if (b.dataset.dacPad) look.dacPad = b.dataset.dacPad;
      if (b.dataset.lights || b.dataset.dacPad) { saveLook(); dacs.clear(); }
      if (b.dataset.sumToggle) {
        const k = b.dataset.sumToggle, hidden = new Set(prefs.hiddenSums || []);
        if (hidden.has(k)) hidden.delete(k); else hidden.add(k);
        prefs = { ...prefs, hiddenSums: [...hidden] };
        savePrefs();
      }
      render();
    });
    pane.addEventListener('change', (ev) => {
      const t = ev.target;
      if (t.dataset.source) {
        prefs = { ...prefs, sources: { ...(prefs.sources || {}), [t.dataset.source]: t.value || undefined } };
        savePrefs();
      }
      // a light's own tile or pad (Default follows Appearance); its controllers are made again
      const id = t.dataset.lightStyle || t.dataset.lightPad;
      if (id) {
        const field = t.dataset.lightStyle ? 'lightStyles' : 'lightPads', next = { ...look[field] };
        if (t.value) next[id] = t.value; else delete next[id];
        look[field] = next;
        saveLook();
        [...dacs.keys()].filter((k) => k.endsWith(':' + id)).forEach((k) => dacs.delete(k));
      }
      render();
    });
  }
  // the settings as they are now: each choice pressed, the sources' lists, the summaries' switches
  function syncSettings() {
    if (usesDac()) bringDac();
    const pane = $('housePane');
    if (!pane) return;
    const have = Boolean(customElements.get(DAC_TAG));
    pane.querySelectorAll('[data-lights]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lights === look.lights)));
    $('lightsRow').querySelector('.status').textContent = have || !usesDac() ? 'How lights show on the house page.'
      : dacFetch === 'failed' ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : 'Getting the Dual Axis Controller…';
    pane.querySelectorAll('[data-dac-pad]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.dacPad === look.dacPad)));
    $('dacPadRow').hidden = !usesDac();
    for (const sel of pane.querySelectorAll('[data-source]')) {
      if (sel === root.activeElement) continue;
      const [kind] = SOURCES.find(([k]) => k === sel.dataset.source), ids = Object.keys(states).filter(SOURCES.find(([k]) => k === kind)[3]).sort((a, b) => nameOf(a).localeCompare(nameOf(b)));
      if (sel.dataset.sig !== ids.join(',')) { sel.innerHTML = '<option value="">Automatic</option>' + ids.map((x) => '<option value="' + esc(x) + '">' + esc(nameOf(x)) + '</option>').join(''); sel.dataset.sig = ids.join(','); }
      sel.value = ids.includes(prefs.sources?.[kind]) ? prefs.sources[kind] : '';
    }
    pane.querySelectorAll('[data-sum-toggle]').forEach((b) => { const on = !(prefs.hiddenSums || []).includes(b.dataset.sumToggle); b.classList.toggle('on', on); b.setAttribute('aria-checked', String(on)); });
    // the lights table, by room, redrawn when something in it changed (not while one of its lists is open)
    const body = $('lightRows');
    if (!body || body.contains(root.activeElement)) return;
    const stars = new Set(starred()), opt = (v, t, cur, off) => '<option value="' + v + '"' + (v === cur ? ' selected' : '') + (off ? ' disabled' : '') + '>' + t + '</option>';
    const html = Object.keys(states).filter((id) => id.startsWith('light.'))
      .sort((a, b) => !whereIs.get(a) - !whereIs.get(b) || (whereIs.get(a) || '').localeCompare(whereIs.get(b) || '') || nameOf(a).localeCompare(nameOf(b))).map((id) => {
        const style = look.lightStyles[id] || '', pad = look.lightPads[id] || '', fav = stars.has(id), name = esc(nameOf(id));
        return '<tr><td><strong>' + name + '</strong></td><td>' + esc(whereIs.get(id) || '—') + '</td><td>' + esc(valueOf(id)) + '</td>' +
          '<td class="metaSwitchCol"><button class="switch' + (fav ? ' on' : '') + '" type="button" role="switch" aria-checked="' + fav + '" data-light-fav="' + esc(id) + '" aria-label="' + name + ' is a favourite"></button></td>' +
          '<td><select class="settingsSelect" data-light-style="' + esc(id) + '" aria-label="' + name + ' tile">' + opt('', 'Default', style) + opt('tile', 'HomeCore tile', style) + opt('dac', 'Dual Axis Controller', style) + '</select></td>' +
          '<td><select class="settingsSelect" data-light-pad="' + esc(id) + '" aria-label="' + name + ' pad"' + (wantsDac(id) ? '' : ' disabled') + '>' + opt('', 'Default', pad) + opt('temperature', 'Temperature', pad) + opt('colour', 'Colour', pad) + '</select></td></tr>';
      }).join('');
    if (body.dataset.html !== html) { body.innerHTML = html; body.dataset.html = html; }
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
    const readings = [...home.querySelectorAll('.activityRow, .tfAction, .wxNow')].filter(shown);
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

  /* ---------- the house ---------- */
  const grid = root.querySelector('#homeView .grid');
  let open = null; // { key of its card, entity id, card height before it opened }
  let activeArea = null; // the area card that's open in the accordion
  let areaPage = null; // the section whose own page is open (a room's, from its card's Go; Security's, from its summary), or null for the house
  let more = null; // { id, opener } while the stand-in more-info is open
  const history = new Map(); // entity id → { at, points }
  const energyText = new Map(); // the dashboard's energy: statistic id → { name, text, icon } its tile shows
  const dragging = new Map(); // "kind|entity id" → value while a bar is held
  const BAR_HOLD_MS = 350; // how long a finger rests on a bar before it moves it (about a third of a second)
  let heldBar = null; // the bar a finger is moving, if any
  const goals = new Map(); // cover id → { pos, tilt, at }: where it was sent, until it gets there
  const arts = new Map(); // cover id → its drawing in more-info, kept across redraws
  const keyTimers = new Map(); // cover id → the pause before keyed steps are sent
  // favourites: Matt's stars are saved in his Home Assistant user data (HOUSE_KEY). Until he stars something here,
  // they start from Home Assistant's own home view favourites, which this page reads and never writes
  let prefs = { favourites: null };
  let haHome = {}, haSecurity = {}; // Home Assistant's home view and security settings
  let predicted = []; // Home Assistant's suggested devices (usage prediction), if it has them
  let suggested = null; // the suggestions, worked out once a visit so tiles don't move while you use them
  const used = (() => { try { return JSON.parse(local.get(USED_KEY)) || {}; } catch (_e) { return {}; } })();
  let whereIs = new Map(); // entity id → its room's name
  // saved to Home Assistant (prefs, HOUSE_KEY): the favourites, Settings → Sources (sources: { weather, grid, alarm })
  // and the summaries switched off there (hiddenSums). Home Assistant's areas are never changed
  let saveTimer = 0;
  function savePrefs() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => Promise.resolve(callWS({ type: 'frontend/set_user_data', key: HOUSE_KEY, value: prefs })).catch(() => {}), 400);
  }
  // this browser's look for the house: More info as a popup or a sheet, and the lights as this page's tiles or as the
  // Dual Axis Controller (with its pad on temperature or colour), each light able to differ (the lights table)
  const look = (() => {
    let v = {};
    try { v = JSON.parse(local.get(LOOK_KEY)) || {}; } catch (_e) { /* the defaults */ }
    const only = (o, ok) => Object.fromEntries(Object.entries(o || {}).filter(([, x]) => ok.includes(x)));
    return { more: v.more === 'sheet' ? 'sheet' : 'popup', lights: v.lights === 'dac' ? 'dac' : 'tile', dacPad: v.dacPad === 'colour' ? 'colour' : 'temperature',
      lightStyles: only(v.lightStyles, ['tile', 'dac']), lightPads: only(v.lightPads, ['temperature', 'colour']) };
  })();
  const saveLook = () => local.set(LOOK_KEY, JSON.stringify(look));
  const applyLook = () => { app.dataset.more = look.more; fitDetails(); };
  /* Settings → Appearance → More info (the house page): a popup or a sheet */
  if (testFocus && list && !$('moreInfoChoice')) {
    $('densityToggle').closest('.toggleRow').insertAdjacentHTML('afterend',
      '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div>' +
      '<div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' +
      MORE_STYLES.map(([value, text]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (look.more === value) + '" data-more-style="' + value + '">' + text + '</button>').join('') + '</div></div>');
    $('moreInfoChoice').addEventListener('click', (ev) => {
      const b = ev.target.closest('[data-more-style]');
      if (!b) return;
      look.more = b.dataset.moreStyle;
      saveLook();
      applyLook();
      $('moreInfoChoice').querySelectorAll('[data-more-style]').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    });
  }
  houseSettings();
  let model = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const units = new Map(); // card or tile key → the html last drawn
  let signature = '';
  const house = testFocus ? createHouse({ onChange: () => refresh() }) : null;
  if (testFocus) app.classList.add('house');
  // Home's weather is the bento (Figma "Weather bento"), at its drawn sizes; it stays mounted across redraws
  const bentoBox = Object.assign(document.createElement('div'), { className: 'tfBento' });
  let bento = null, bentoId = null, suspended = false;
  function placeBento(order) {
    const id = weatherId();
    app.classList.toggle('houseBento', Boolean(id));
    // a different forecast was picked in Settings → Sources; the dashboard shows it only on its Weather page
    if (bento && (bentoId !== id || order == null)) { bento.destroy(); bento = null; }
    if (!id || order == null) { bentoBox.remove(); return; }
    if (!bentoBox.isConnected) grid.append(bentoBox);
    bentoBox.style.order = order;
    if (!bento && !suspended) { bento = mountWeatherBento(bentoBox, { getHass, entityId: id, style: 'bitmap' }); bentoId = id; }
  }
  // the dashboard's own weather cards (Matt, 27 Oct): the weather card, whose Now opens the Weather page, and Compared
  // to average in the place of the concept's to-do list; each kept mounted across redraws
  const DASH_WEATHER = [['wx', ['current']], ['avg', ['compared_to_average']]];
  const dashBoxes = Object.fromEntries(DASH_WEATHER.map(([k]) => [k, Object.assign(document.createElement('div'), { className: 'tfDashBento tfDash-' + k })]));
  let dashBentos = null, dashBentoId = null;
  function placeDash(on) {
    const id = on ? weatherId() : null;
    if (dashBentos && dashBentoId !== id) { dashBentos.forEach((b) => b.destroy()); dashBentos = null; }
    Object.values(dashBoxes).forEach((box) => (id ? !box.isConnected && grid.append(box) : box.remove()));
    if (id && !dashBentos && !suspended) {
      dashBentos = DASH_WEATHER.map(([k, cards]) => mountWeatherBento(dashBoxes[k], { getHass, entityId: id, style: 'bitmap', cards, onOpen: k === 'wx' ? () => openArea('weather') : undefined }));
      dashBentoId = id;
    }
  }

  const attr = (id) => states[id]?.attributes || {};
  const nameOf = (id) => attr(id).friendly_name || id;
  const has = (id, bit) => isMadeUp(id) || (Number(attr(id).supported_features) & bit) === bit;
  const cap = (s) => { const t = String(s ?? '').replace(/_/g, ' '); return t.charAt(0).toUpperCase() + t.slice(1); };
  const num = (v, d = 1) => Number(v).toLocaleString(undefined, { minimumFractionDigits: d, maximumFractionDigits: d });
  const brightnessOf = (st) => (st?.state === 'on' ? (st.attributes.brightness != null ? Math.max(1, Math.round(st.attributes.brightness / 2.55)) : 100) : 0);
  const modesOf = (id) => attr(id).supported_color_modes || [];
  // a light's colour while it's on, as Home Assistant's tiles show it: its rgb, else its hue, else its warm to cool,
  // else amber; the glyph goes dark on pale colours
  const kelvinRgb = (k) => {
    const t = k / 100;
    return [t <= 66 ? 255 : 329.7 * Math.pow(t - 60, -0.1332), t <= 66 ? 99.47 * Math.log(t) - 161.12 : 288.12 * Math.pow(t - 60, -0.0755), t >= 66 ? 255 : t <= 19 ? 0 : 138.52 * Math.log(t - 10) - 305.04];
  };
  const hueRgb = (h, sat) => [5, 3, 1].map((n) => { const k = (n + h / 60) % 6; return 255 * (1 - (sat / 100) * Math.max(0, Math.min(k, 4 - k, 1))); });
  function lightVars(id) {
    const a = attr(id);
    const rgb = (a.rgb_color || (a.hs_color && a.color_mode !== 'color_temp' ? hueRgb(...a.hs_color) : a.color_temp_kelvin ? kelvinRgb(a.color_temp_kelvin) : [255, 170, 0])).map((v) => Math.round(Math.max(0, Math.min(255, v))));
    const pale = (0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]) / 255 > 0.8;
    return '--light:rgb(' + rgb.join(',') + ');--light-ink:' + (pale ? '#26221e' : '#ffffff');
  }
  const lightAttrs = (id) => (id.startsWith('light.') && states[id]?.state === 'on' ? ' data-light style="' + lightVars(id) + '"' : '');
  const dimmable = (id) => { const m = modesOf(id); return m.length ? m.some((x) => x !== 'onoff') : attr(id).brightness != null; };
  const kelvinRange = (id) => [attr(id).min_color_temp_kelvin || 2000, attr(id).max_color_temp_kelvin || 6500];
  const clock = (t) => new Date(t).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });
  function ago(t) {
    const s = Math.max(1, Math.round((Date.now() - t) / 1000));
    if (s < 10) return 'Just now';
    if (s < 60) return s + ' seconds ago';
    const m = Math.round(s / 60);
    if (m < 60) return m + (m === 1 ? ' minute ago' : ' minutes ago');
    const h = Math.round(m / 60);
    if (h < 24) return h + (h === 1 ? ' hour ago' : ' hours ago');
    const days = Math.round(h / 24);
    return days + (days === 1 ? ' day ago' : ' days ago');
  }
  // covers: where one is (Home Assistant), and where it's heading (held, or sent and not there yet)
  const posOf = (id) => attr(id).current_position ?? (states[id]?.state === 'closed' ? 0 : 100);
  const coverValue = (id) => held('pos', id, goals.get(id)?.pos ?? posOf(id));
  const tiltOf = (id) => held('tilt', id, goals.get(id)?.tilt ?? attr(id).current_tilt_position);

  function valueOf(id) {
    const st = states[id];
    if (!st) return 'Not found';
    if (st.state === 'unavailable') return 'Unavailable';
    const a = st.attributes, d = id.split('.')[0];
    if (d === 'light') {
      if (st.state !== 'on') return 'Off';
      const k = a.color_temp_kelvin;
      return (dimmable(id) ? brightnessOf(st) + '%' : 'On') + (a.color_mode === 'color_temp' && k ? ' · ' + Number(k).toLocaleString() + 'k' : COLOUR_MODES.includes(a.color_mode) ? ' · Colour' : '');
    }
    if (d === 'climate') return (st.state === 'off' ? 'Off' : cap(a.hvac_action || st.state)) + ' · ' + num(a.current_temperature) + ' °C now';
    if (d === 'cover') {
      const p = posOf(id), t = a.current_tilt_position;
      if (st.state === 'opening' || st.state === 'closing') return cap(st.state) + ' - ' + p + '%';
      return (p <= 0 ? 'Closed' : p >= 100 ? 'Open' : 'Partially open') + (t > 0 && t < 100 ? ' · tilted' : '');
    }
    if (d === 'humidifier') return st.state !== 'on' ? 'Off' : cap(a.action || 'on') + ' · ' + a.current_humidity + '% now';
    if (d === 'vacuum') return cap(st.state) + (st.state === 'cleaning' && a.rooms?.length ? ' · ' + a.rooms.join(', ') : '') + (a.battery_level != null ? ' · ' + a.battery_level + '%' : '');
    if (d === 'media_player') return st.state === 'playing' || st.state === 'paused' ? (st.state === 'paused' ? 'Paused · ' : '') + (a.media_title || 'Playing') : cap(st.state);
    if (d === 'alarm_control_panel') return ALARM_STATE[st.state] || cap(st.state);
    if (d === 'lock' || d === 'valve') return cap(st.state);
    if (d === 'switch') return st.state === 'on' ? 'On' : 'Off';
    if (d === 'plant') return st.state === 'ok' ? 'Healthy' : cap(a.problem);
    if (d === 'binary_sensor') {
      if (a.device_class === 'moisture') return st.state === 'on' ? 'Wet' : 'Dry';
      if (OPEN_CLASSES.includes(a.device_class)) return st.state === 'on' ? 'Open' : 'Closed';
      return st.state === 'on' ? 'Detected' : 'Clear';
    }
    if (a.rang) return 'Rang at ' + clock(a.rang);
    const hass = getHass();
    if (hass?.formatEntityState && !isMadeUp(id)) { try { return hass.formatEntityState(st); } catch (_e) { /* fall through */ } }
    const n = Number(st.state);
    if (st.state !== '' && Number.isFinite(n)) {
      const digits = Math.abs(n) >= 100 ? 0 : Math.abs(n) >= 10 ? 1 : 2;
      const unit = a.unit_of_measurement ? (a.unit_of_measurement === '%' ? '%' : ' ' + a.unit_of_measurement) : '';
      return n.toLocaleString(undefined, { maximumFractionDigits: digits }) + unit + (a.plant_low ? ' · Low' : a.plant_high ? ' · High' : '');
    }
    return cap(st.state);
  }
  const watts = (w) => (w >= 1000 ? num(w / 1000, 2) + ' kW' : Math.round(w).toLocaleString() + ' W');

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
        slot.textContent = (slot.dataset.letter || nameOf(slot.dataset.iconFor) || '?').trim().charAt(0).toUpperCase();
      }
    });
  }
  const iconSlot = (id, icon, letter) => ' data-icon-for="' + esc(id) + '"' + (icon ? ' data-icon-name="' + esc(icon) + '"' : '') + (letter ? ' data-letter="' + esc(letter) + '"' : '');
  const iconFor = (id) => (id.endsWith('_solar_power') ? 'mdi:solar-power-variant' : attr(id).rang ? 'mdi:doorbell' : '');
  // a service call on a button: domain|service|entity|data
  const act = (domain, service, id, data) => esc([domain, service, id, data ? JSON.stringify(data) : ''].join('|'));
  // several at once (an area's lights): a JSON list of [domain, service, entity, data]
  const acts = (list) => esc(JSON.stringify(list));

  /* readings: tiles in a card; numbers open to their last 24 hours */
  function readingRow(cardKey, id) {
    const label = esc(nameOf(id) + ', ' + valueOf(id));
    const graph = Number.isFinite(Number(states[id]?.state)) && states[id]?.state !== '';
    return '<div class="activityRow' + (graph ? ' tap" role="button" tabindex="0" data-open="' + esc(cardKey + '|' + id) + '" aria-label="' + label + '. Show the last 24 hours"' : '" aria-label="' + label + '"') + '>' +
      '<div class="tfIcon" aria-hidden="true"' + iconSlot(id, iconFor(id)) + '></div>' +
      '<div><div class="activityRowName">' + esc(nameOf(id)) + '</div><div class="activityRowMeta">' + esc(valueOf(id)) + '</div></div></div>';
  }
  const sumRow = (name, value, icon) => '<div class="activityRow" aria-label="' + esc(name + ', ' + value) + '"><div class="tfIcon" aria-hidden="true"' + iconSlot('', icon, name) + '></div>' +
    '<div><div class="activityRowName">' + esc(name) + '</div><div class="activityRowMeta">' + esc(value) + '</div></div></div>';
  // a plug: its icon is the button
  function plugRow(id) {
    const on = states[id]?.state === 'on';
    return '<div class="activityRow tfPlug' + (on ? ' on' : '') + '"><button class="tfIcon" type="button" data-act="' + act('switch', 'toggle', id) + '" aria-label="Turn ' + esc(nameOf(id)) + (on ? ' off' : ' on') + '"' + iconSlot(id) + '></button>' +
      '<div><div class="activityRowName">' + esc(nameOf(id)) + '</div><div class="activityRowMeta">' + esc(valueOf(id)) + '</div></div></div>';
  }
  // an opened tile shows its reading, or what its card says instead (the dashboard's energy: today's use, by source)
  const openName = (id) => energyText.get(id)?.name ?? nameOf(id);
  const openValue = (id) => energyText.get(id)?.text ?? valueOf(id);
  function openTile(id) {
    const icon = energyText.get(id)?.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (icon ? iconSlot('', icon, openName(id)) : iconSlot(id, iconFor(id))) + '></div>' +
      '<div><div class="activityRowName">' + esc(openName(id)) + '</div><div class="activityRowMeta">' + esc(openValue(id)) + '</div></div>' +
      '<button class="tfBack" type="button" data-close aria-label="Close ' + esc(openName(id)) + '’s last 24 hours">' + ARROW + '</button></div>' +
      '<svg class="tfGraph" data-graph="' + esc(id) + '" role="img" aria-label="' + esc(openName(id)) + ', last 24 hours"></svg></div>';
  }
  // a card of readings; its title can open more-info (a plant)
  function card(key, order, title, rows, extra = '', moreId = null, cls = '') {
    const isOpen = open && open.key === key;
    return '<section class="card tfCard' + (cls ? ' ' + cls : '') + (isOpen ? ' open' : '') + '" data-tf data-k="' + esc(key) + '" style="order:' + order + (isOpen && open.h ? ';min-height:' + open.h + 'px' : '') + '" aria-label="' + esc(title) + '">' +
      '<div class="activityHeader">' + (moreId ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + esc(moreId) + '" aria-label="' + esc(title + ', ' + valueOf(moreId) + '. More info') + '">' + esc(title) + '</button>' : '<div class="activityTitle">' + esc(title) + '</div>') + '</div>' +
      (isOpen ? openTile(open.id) : '<div class="activityRows">' + rows.join('') + '</div>' + extra) + '</section>';
  }
  function roomCard(r, order) {
    const key = 'readings:' + r.id;
    const rows = r.readings.map((id) => readingRow(key, id));
    if (r.power != null) rows.push(sumRow('Power now', watts(r.power), 'mdi:flash'));
    return card(key, order, 'Readings', rows.concat(r.plugs.map(plugRow)));
  }
  function energyCard(r, order) {
    const key = 'energy:' + r.id;
    const [now, today] = [r.solar.find((id) => id.endsWith('_power')), r.solar.find((id) => id.endsWith('_today'))];
    const rows = [now, today].filter(Boolean).map((id) => readingRow(key, id));
    const solarW = Number(states[now]?.state || 0) * 1000;
    if (model.grid) {
      rows.push(readingRow(key, model.grid));
      rows.push(sumRow('House use', watts(solarW + Number(states[model.grid].state)), 'mdi:home-lightning-bolt'));
    }
    return card(key, order, 'Energy', rows, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const plantCard = (p, order) => card('plant:' + p.id, order, nameOf(p.id), p.readings.map((id) => readingRow('plant:' + p.id, id)), '', p.id);
  const openingsCard = (order) => card('openings', order, 'Doors and windows', model.security.openings.map((id) => readingRow('openings', id)));

  /* action tiles: a name row, then sections stacked under it */
  // was: where a light's brightness was before it went off, a faint line on its bar
  function bar(kind, id, frac, label, valueText, marker, was = null) {
    const f = frac == null ? null : Math.max(0, Math.min(1, frac)), pct = f == null ? 0 : Math.round(f * 100);
    return '<div class="tfBar ' + kind + '" role="slider" tabindex="0" aria-label="' + esc(label) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + pct + '"' + (valueText ? ' aria-valuetext="' + esc(valueText) + '"' : '') + ' data-drag="' + esc(kind + '|' + id) + '">' +
      (was != null ? '<span class="was" aria-hidden="true" style="left:' + was + '%"></span>' : '') +
      (marker ? (f == null ? '' : '<b style="left:' + pct + '%"></b>') : '<i style="width:' + pct + '%"></i>') + '</div>';
  }
  // each light's brightness while it was last on, remembered in this browser, for its off line
  const LAST_BRIGHT_KEY = 'move-assistant-house-last-bright';
  const lastBright = (() => { try { return JSON.parse(local.get(LAST_BRIGHT_KEY)) || {}; } catch (_e) { return {}; } })();
  let lastBrightTimer = 0;
  const noteBright = (id, v) => {
    if (!v || lastBright[id] === v) return;
    lastBright[id] = v;
    clearTimeout(lastBrightTimer);
    lastBrightTimer = setTimeout(() => local.set(LAST_BRIGHT_KEY, JSON.stringify(lastBright)), 500);
  };
  const stepper = (label, valueText, down, up) => '<div class="tfStep" role="group" aria-label="' + esc(label) + '">' +
    '<button type="button" data-act="' + down + '" aria-label="Lower ' + esc(label.toLowerCase()) + '">−</button><output>' + esc(valueText) + '</output>' +
    '<button type="button" data-act="' + up + '" aria-label="Raise ' + esc(label.toLowerCase()) + '">+</button></div>';
  const buttons = (cls, label, items) => '<div class="' + cls + '" role="group" aria-label="' + esc(label) + '">' + items.filter(Boolean).map((it) =>
    '<button type="button" data-act="' + it.act + '"' + (it.pressed != null ? ' aria-pressed="' + it.pressed + '"' : '') + (it.disabled ? ' disabled' : '') + (it.aria ? ' aria-label="' + esc(it.aria) + '"' : '') + '>' + (it.html || esc(it.label)) + '</button>').join('') + '</div>';
  // a cover: four blocks for 25, 50, 75 and 100% (tap one for its stop; hold or drag for 1% steps), the slats' tilt
  // from Shut to Open, then open, stop and close; 38 tall with corner 12, as on the covers design
  const blockFill = (v, i) => 'width:' + Math.round(Math.max(0, Math.min(1, (v - i * 25) / 25)) * 1000) / 10 + '%;opacity:' + (0.6 + (0.4 * i) / 3).toFixed(2);
  const tipAt = (v) => 'left:calc(3px + ' + v / 100 + ' * (100% - 6px))';
  const blocks = (id, v) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + esc(nameOf(id)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(v) + '" aria-valuetext="' + Math.round(v) + '% open" data-blocks="' + esc(id) + '">' +
    [0, 1, 2, 3].map((i) => '<span><i style="' + blockFill(v, i) + '"></i><b' + (v >= (i + 1) * 25 - 12 ? ' class="lit"' : '') + '>' + (i + 1) * 25 + '%</b></span>').join('') +
    '<output class="tfTip" aria-hidden="true" style="' + tipAt(v) + '">' + Math.round(v) + '%</output></div>';
  function paintBlocks(el, v) {
    el.querySelectorAll(':scope>span').forEach((c, i) => { c.firstElementChild.setAttribute('style', blockFill(v, i)); c.lastElementChild.classList.toggle('lit', v >= (i + 1) * 25 - 12); });
    const tip = el.querySelector('.tfTip');
    tip.setAttribute('style', tipAt(v));
    tip.textContent = Math.round(v) + '%';
    el.setAttribute('aria-valuenow', String(Math.round(v)));
    el.setAttribute('aria-valuetext', Math.round(v) + '% open');
  }
  const tiltBar = (id, v) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + esc(nameOf(id)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(v) + '" aria-valuetext="' + Math.round(v) + '% open" data-drag="tilt|' + esc(id) + '">' +
    '<i style="width:calc((100% - 6px) * ' + v / 100 + ')"></i><span' + (v > 8 ? ' class="lit"' : '') + '>Shut</span><span' + (v > 92 ? ' class="lit"' : '') + '>Open</span></div>';
  const coverButtons = (id, v, moving) => '<div class="tfCoverBtns" role="group" aria-label="' + esc(nameOf(id)) + '">' + [
    has(id, OPEN) && ['open', 'Open', 'open_cover', v >= 100 && !moving],
    has(id, STOP) && ['stop', 'Stop', 'stop_cover', false],
    has(id, CLOSE_COVER) && ['close', 'Close', 'close_cover', v <= 0 && !moving],
  ].filter(Boolean).map(([icon, label, service, off]) => '<button type="button" data-act="' + act('cover', service, id) + '" aria-label="' + label + '"' + (off ? ' disabled' : '') + '>' + COVER_BUTTONS[icon] + '</button>').join('') + '</div>';
  const iconButton = (id, s) => '<button class="tfIcon' + (s.art ? ' art' : '') + '" type="button" data-act="' + s.button.act + '" aria-label="' + esc(s.button.label) + '"' +
    (s.art ? ' style="background-image:url(&quot;' + esc(s.art) + '&quot;)"' : iconSlot(id, s.icon)) + '></button>';
  // the name and value open more-info
  const nameButton = (id) => '<button class="tfName" type="button" data-more="' + esc(id) + '" aria-label="' + esc(nameOf(id) + ', ' + valueOf(id) + '. More info') + '"><span class="activityRowName">' + esc(nameOf(id)) + '</span><span class="activityRowMeta">' + esc(valueOf(id)) + '</span></button>';
  // a tile shows the sections Matt kept (all but a cover's drawing to start with), at its size; small is the icon and
  // name only. In edit mode its controls rest under a bar of tools
  // in a summary's popup a tile keeps all its controls, except a light, which keeps only its brightness (Matt, 27 Oct:
  // not a barrage of colour; warmth and colour are on the light's own popup)
  // on the dashboard's bottom row (only) a tile keeps just its first control: a light its brightness, a thermostat its target
  function actionTile(id, inDialog = false, only = null) {
    if (id.startsWith('light.') && dacFor(id)) return '<div class="tfDac" data-k="' + esc(id) + '" data-dac="' + (inDialog ? 'more:' : only ? 'dash:' : 'tile:') + esc(id) + '"></div>';
    const s = specFor(id), keep = only || (inDialog && id.startsWith('light.') ? ['bright'] : null);
    const sections = s.sections.map((sec, i) => (sec && (!keep || keep.includes((s.parts || [])[i])) ? sec : '')).filter(Boolean);
    return '<div class="tfAction' + (s.on ? ' on' : '') + '" data-k="' + esc(id) + '"' + (s.tone ? ' data-tone="' + s.tone + '"' : '') + lightAttrs(id) + '>' +
      '<div class="tfActionHead">' + iconButton(id, s) + nameButton(id) + '</div>' + sections.join('') + '</div>';
  }
  /* the Dual Axis Controller (Matt's HACS card, custom:dual-controller-v3): when Settings picks it, every light is its
     tile, with its own pad and controller. It comes with HomeCore (Matt, 28 Oct: people install one thing): the first
     time a light uses it, it's fetched from its GitHub release, unless Home Assistant loads one installed from HACS
     (one of its dashboard resources), which is then used instead */
  const DAC_TAG = 'dual-controller-v3';
  const DAC_URL = 'https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.3/dist/dual-axis-controller-v4.js';
  let dacFetch = null; // null, 'loading' or 'failed'
  async function bringDac() {
    if (dacFetch || customElements.get(DAC_TAG)) return;
    dacFetch = 'loading';
    const resources = await Promise.resolve().then(() => callWS({ type: 'lovelace/resources' })).catch(() => null);
    const installed = Array.isArray(resources) && resources.some((r) => /dual-axis-controller/i.test(r.url || ''));
    // an installed one may still be on its way: it gets a moment first
    await Promise.race([customElements.whenDefined(DAC_TAG), new Promise((done) => setTimeout(done, installed ? 8000 : 0))]);
    if (customElements.get(DAC_TAG)) return;
    const script = Object.assign(document.createElement('script'), { src: DAC_URL });
    script.onerror = () => { dacFetch = 'failed'; syncSettings(); };
    document.head.appendChild(script);
  }
  const dacs = new Map(); // place:light id → its card, kept across redraws
  // a light's tile and pad: its own choice in the lights table, else Appearance's
  const wantsDac = (id) => (look.lightStyles[id] || look.lights) === 'dac';
  const usesDac = () => look.lights === 'dac' || Object.values(look.lightStyles).includes('dac');
  function dacFor(id) { return wantsDac(id) && Boolean(customElements.get(DAC_TAG)); }
  const padOf = (id) => look.lightPads[id] || look.dacPad;
  // the card follows this page's theme rather than Home Assistant's
  const dacHass = () => {
    const h = getHass();
    return h && { ...h, themes: { ...(h.themes || {}), darkMode: !app.classList.contains('light') },
      callService: (domain, service, data, ...rest) => h.callService(domain, ...asLastOn(domain, service, data), ...rest) };
  };
  // on the dashboard its name opens its pad in place (a tap action the page catches, below) rather than the card's own
  // controller, and its pad takes the height its cells leave (--tf-dac-pad, through the card's open shadow root)
  const DAC_FIT = '.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,158px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}';
  // and wherever it is, its dark mode text is this page's grey (Matt, 28 Oct: #d9d9d9; the card's own is #f1f1f1)
  const DAC_TEXT = '.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}';
  const dressDac = (el, onBoard) => {
    if (!el.shadowRoot || el.shadowRoot.querySelector('style[data-tf]')) return;
    el.shadowRoot.appendChild(Object.assign(document.createElement('style'), { textContent: DAC_TEXT + (onBoard ? DAC_FIT : '') })).dataset.tf = '';
  };
  function mountDacs(scope) {
    scope.querySelectorAll('[data-dac]').forEach((slot) => {
      const key = slot.dataset.dac, onBoard = key.startsWith('dash:');
      let el = dacs.get(key);
      if (!el) { const id = key.slice(key.indexOf(':') + 1); el = document.createElement(DAC_TAG); el.setConfig({ type: 'custom:' + DAC_TAG, entity: id, pad: padOf(id), ...(onBoard ? { tap_action: { action: 'none' } } : {}) }); dacs.set(key, el); }
      el.hass = dacHass();
      if (el.parentNode !== slot) slot.replaceChildren(el);
      dressDac(el, onBoard);
    });
  }
  function syncDacs() { const h = dacHass(); dacs.forEach((el, key) => { if (el.isConnected) el.hass = h; else dacs.delete(key); }); }
  // the card can load after this one: draw again once it's there
  customElements.whenDefined(DAC_TAG).then(() => { if (testFocus && grid?.querySelector('[data-tf]')) keepPlace(render); });
  const held = (kind, id, fallback) => (dragging.has(kind + '|' + id) ? dragging.get(kind + '|' + id) : fallback);

  // each kind of device: whether it's on, its button, and its sections in order
  function specFor(id) {
    const st = states[id], a = st.attributes, d = id.split('.')[0];
    const toggle = (domain, label) => ({ act: act(domain, 'toggle', id), label });
    if (d === 'light') {
      // brightness, then warm to cool, then colour, each only if the light can do it
      const on = st.state === 'on', modes = modesOf(id), [kMin, kMax] = kelvinRange(id), b = held('bright', id, brightnessOf(st));
      if (on) noteBright(id, brightnessOf(st));
      const k = held('ct', id, on && a.color_mode === 'color_temp' ? a.color_temp_kelvin : null);
      const hue = held('hue', id, on && COLOUR_MODES.includes(a.color_mode) && a.hs_color ? a.hs_color[0] : null);
      return { on, button: toggle('light', 'Turn ' + nameOf(id) + (on ? ' off' : ' on')), parts: ['bright', 'ct', 'hue'], sections: [
        dimmable(id) && bar('bright', id, b / 100, nameOf(id) + ' brightness', b + '%', false, on ? null : lastBright[id] ?? null),
        modes.includes('color_temp') && bar('ct', id, k == null ? null : (k - kMin) / (kMax - kMin), nameOf(id) + ' warm to cool', k == null ? '' : Math.round(k) + ' kelvin', true),
        modes.some((m) => COLOUR_MODES.includes(m)) && bar('hue', id, hue == null ? null : hue / 360, nameOf(id) + ' colour', '', true),
      ] };
    }
    if (d === 'climate') {
      // the target, then its modes
      const step = a.target_temp_step || 0.5, t = Number(a.temperature);
      return { on: st.state !== 'off', tone: st.state === 'cool' || a.hvac_action === 'cooling' ? 'cool' : 'heat', button: toggle('climate', 'Turn ' + nameOf(id) + (st.state === 'off' ? ' on' : ' off')), parts: ['step', 'modes'], sections: [
        Number.isFinite(t) && stepper('Target temperature', num(t) + ' °C', act('climate', 'set_temperature', id, { temperature: t - step }), act('climate', 'set_temperature', id, { temperature: t + step })),
        buttons('tfSeg', 'Mode', (a.hvac_modes || []).map((m) => ({ label: cap(m), act: act('climate', 'set_hvac_mode', id, { hvac_mode: m }), pressed: st.state === m }))),
      ] };
    }
    if (d === 'cover') {
      // the blocks, the slats' tilt if it has slats, then open, stop and close
      const moving = st.state === 'opening' || st.state === 'closing', closed = st.state === 'closed', v = coverValue(id), tilt = tiltOf(id);
      return { on: !closed, tone: 'blue', icon: COVER_ICON[coverKind(st)][closed ? 1 : 0], button: toggle('cover', (closed ? 'Open ' : 'Close ') + nameOf(id)), parts: ['blocks', 'tilt', 'buttons'], sections: [
        has(id, SET_POSITION) && blocks(id, v),
        tilt != null && tiltBar(id, tilt),
        coverButtons(id, v, moving),
      ] };
    }
    if (d === 'humidifier') {
      // the target, then its modes
      const h = Number(a.humidity);
      return { on: st.state === 'on', tone: 'blue', icon: 'mdi:air-humidifier', button: toggle('humidifier', 'Turn ' + nameOf(id) + (st.state === 'on' ? ' off' : ' on')), parts: ['step', 'modes'], sections: [
        Number.isFinite(h) && stepper('Target humidity', h + '%', act('humidifier', 'set_humidity', id, { humidity: h - 1 }), act('humidifier', 'set_humidity', id, { humidity: h + 1 })),
        a.available_modes?.length && buttons('tfSeg', 'Mode', a.available_modes.map((m) => ({ label: cap(m), act: act('humidifier', 'set_mode', id, { mode: m }), pressed: a.mode === m }))),
      ] };
    }
    if (d === 'media_player') {
      // artwork in the icon room, then playback, then volume; off shows only the button
      const playing = st.state === 'playing', off = st.state === 'off' || st.state === 'standby', vol = held('vol', id, a.volume_level);
      const button = off ? { act: act('media_player', has(id, TURN_ON) ? 'turn_on' : 'toggle', id), label: 'Turn ' + nameOf(id) + ' on' }
        : st.state === 'playing' || st.state === 'paused' ? { act: act('media_player', 'media_play_pause', id), label: (playing ? 'Pause ' : 'Play ') + nameOf(id) }
          : { act: act('media_player', has(id, TURN_OFF) ? 'turn_off' : 'toggle', id), label: 'Turn ' + nameOf(id) + ' off' };
      return { on: !off, tone: 'blue', art: !off && a.entity_picture ? a.entity_picture : null, button, parts: ['playback', 'volume'], sections: off ? [] : [
        (has(id, PREVIOUS) || has(id, NEXT) || has(id, PAUSE) || has(id, PLAY)) && buttons('tfSeg', 'Playback', [
          { html: MEDIA.prev, aria: 'Previous', act: act('media_player', 'media_previous_track', id), disabled: !has(id, PREVIOUS) },
          { html: playing ? MEDIA.pause : MEDIA.play, aria: playing ? 'Pause' : 'Play', act: act('media_player', 'media_play_pause', id), disabled: !(has(id, PAUSE) || has(id, PLAY)) },
          { html: MEDIA.next, aria: 'Next', act: act('media_player', 'media_next_track', id), disabled: !has(id, NEXT) },
        ]),
        has(id, VOLUME_SET) && vol != null && bar('vol', id, vol, nameOf(id) + ' volume', Math.round(vol * 100) + '%'),
      ] };
    }
    if (d === 'vacuum') {
      // start, dock and locate, then which rooms to clean
      const busy = st.state === 'cleaning', picked = a.rooms || [];
      const toggleRoom = (name) => (picked.includes(name) ? picked.filter((x) => x !== name) : picked.concat(name));
      const go = act('vacuum', busy ? 'pause' : 'start', id, isMadeUp(id) ? { rooms: picked } : null);
      return { on: busy || st.state === 'returning', tone: 'blue', button: { act: go, label: (busy ? 'Pause ' : 'Start ') + nameOf(id) }, parts: ['controls', 'rooms'], sections: [
        buttons('tfSeg', nameOf(id), [
          { label: busy ? 'Pause' : 'Start', act: go },
          { label: 'Dock', act: act('vacuum', 'return_to_base', id), disabled: st.state === 'docked' },
          { label: 'Locate', act: act('vacuum', 'locate', id) },
        ]),
        isMadeUp(id) && buttons('tfChips', 'Rooms to clean', model.rooms.filter((r) => r.id !== 'balcony').map((r) => ({ label: r.name, act: act('vacuum', 'set_rooms', id, { rooms: toggleRoom(r.name) }), pressed: picked.includes(r.name) }))),
      ] };
    }
    if (d === 'lock') {
      // lock, unlock and, if the door can, open it
      const locked = st.state === 'locked';
      return { on: !locked, tone: 'heat', button: { act: act('lock', locked ? 'unlock' : 'lock', id), label: (locked ? 'Unlock ' : 'Lock ') + nameOf(id) }, parts: ['controls'], sections: [
        buttons('tfSeg', nameOf(id), [
          { label: 'Lock', act: act('lock', 'lock', id), pressed: locked },
          { label: 'Unlock', act: act('lock', 'unlock', id), pressed: st.state === 'unlocked' },
          has(id, LOCK_OPEN) && { label: 'Open', act: act('lock', 'open', id), pressed: st.state === 'open' },
        ]),
      ] };
    }
    if (d === 'alarm_control_panel') {
      // off, then each way it can arm
      const off = st.state === 'disarmed';
      return { on: !off, tone: st.state === 'triggered' ? 'alarm' : 'blue', button: { act: act('alarm_control_panel', off ? 'alarm_arm_away' : 'alarm_disarm', id), label: off ? 'Arm ' + nameOf(id) + ', away' : 'Disarm ' + nameOf(id) }, parts: ['controls'], sections: [
        buttons('tfSeg', nameOf(id), ALARM_MODES.filter(([, , , bit]) => !bit || has(id, bit)).map(([state, label, service]) => ({ label, act: act('alarm_control_panel', service, id), pressed: st.state === state }))),
      ] };
    }
    if (d === 'valve') {
      const isOpen = st.state === 'open';
      return { on: isOpen, tone: 'blue', icon: 'mdi:sprinkler-variant', button: toggle('valve', (isOpen ? 'Close ' : 'Open ') + nameOf(id)), parts: ['controls'], sections: [
        buttons('tfSeg', nameOf(id), [
          { label: 'Open', act: act('valve', 'open_valve', id), pressed: isOpen },
          { label: 'Close', act: act('valve', 'close_valve', id), pressed: !isOpen },
        ]),
      ] };
    }
    return { on: false, button: { act: '', label: nameOf(id) }, sections: [] };
  }

  /* area cards: one open, the others folded, like the move panels; Go opens the area's own page. Open, a card shows the
     room's main thing big (its temperature, unless Matt picks another in edit mode), then its controls as tiles */
  const deg = (v) => (Number.isInteger(Number(v)) ? String(Number(v)) : num(v)) + '°';
  // a room's key information, each a reading, a control (with what tapping it does) or an alert
  function roomKeys(r) {
    const find = (cls) => r.readings.find((id) => attr(id).device_class === cls);
    const temp = find('temperature'), hum = find('humidity'), num1 = (id) => Number(states[id]?.state);
    const of = (re) => r.actions.filter((id) => re.test(id));
    const lit = r.lights.filter((id) => states[id]?.state === 'on');
    const covers = of(/^cover\./), open = covers.filter((id) => states[id]?.state !== 'closed');
    const kinds = [...new Set(covers.map((id) => coverKind(states[id])))];
    const climate = of(/^climate\./)[0], humidifier = of(/^humidifier\./)[0];
    const players = of(/^media_player\./), playing = players.find((id) => states[id]?.state === 'playing') || players.find((id) => states[id]?.state === 'paused');
    const plugsOn = r.plugs.filter((id) => states[id]?.state === 'on');
    const keys = [];
    if (temp && Number.isFinite(num1(temp))) keys.push({ key: 'temp', id: temp, kind: 'reading', icon: AREA_ICON.temp, label: 'Temperature', value: num(num1(temp)) + '°' });
    if (hum && Number.isFinite(num1(hum))) keys.push({ key: 'hum', id: hum, kind: 'reading', icon: AREA_ICON.hum, label: 'Humidity', value: Math.round(num1(hum)) + '%' });
    if (r.lights.length) keys.push({ key: 'lights', kind: 'control', tone: 'light', icon: AREA_ICON.lights, label: 'Lights', value: lit.length ? lit.length + ' of ' + r.lights.length + ' on' : 'All off', short: lit.length ? lit.length + ' on' : 'Off', on: lit.length > 0, light: lit.length ? lightVars(lit[0]) : '',
      acts: r.lights.map((id) => ['light', lit.length ? 'turn_off' : 'turn_on', id]), aria: (lit.length ? 'Turn off' : 'Turn on') + ' the lights in ' + r.name });
    if (covers.length) {
      const noun = kinds.length === 1 ? COVER_NOUN[kinds[0]] : 'covers', avg = Math.round(covers.reduce((t, id) => t + posOf(id), 0) / covers.length);
      keys.push({ key: 'covers', kind: 'control', tone: 'blue', icon: AREA_ICON.covers, label: cap(noun), value: avg <= 0 ? 'Closed' : avg >= 100 ? 'Open' : avg + '% open', short: avg <= 0 ? 'Closed' : avg + '%', on: open.length > 0,
        acts: covers.map((id) => ['cover', open.length ? 'close_cover' : 'open_cover', id]), aria: (open.length ? 'Close the ' : 'Open the ') + noun + ' in ' + r.name });
    }
    if (climate) {
      const a = attr(climate), off = states[climate].state === 'off';
      keys.push({ key: 'climate', kind: 'control', tone: a.hvac_action === 'cooling' ? 'cool' : 'heat', icon: AREA_ICON.climate, label: nameOf(climate), value: off ? 'Off' : cap(a.hvac_action || states[climate].state) + ' · ' + deg(a.temperature), short: off ? 'Off' : deg(a.temperature), on: !off,
        acts: [['climate', 'toggle', climate]], aria: 'Turn ' + nameOf(climate) + (off ? ' on' : ' off') });
    }
    if (humidifier) {
      const on = states[humidifier].state === 'on';
      keys.push({ key: 'humidifier', kind: 'control', tone: 'blue', icon: AREA_ICON.humidifier, label: nameOf(humidifier), value: on ? 'On · ' + attr(humidifier).humidity + '%' : 'Off', short: on ? attr(humidifier).humidity + '%' : 'Off', on,
        acts: [['humidifier', 'toggle', humidifier]], aria: 'Turn ' + nameOf(humidifier) + (on ? ' off' : ' on') });
    }
    if (players.length) {
      const id = playing || players[0], st = states[id], isOn = st.state === 'playing';
      keys.push({ key: 'media', kind: 'control', tone: 'blue', icon: AREA_ICON.media, label: nameOf(id), value: valueOf(id), short: isOn ? 'Playing' : st.state === 'paused' ? 'Paused' : cap(st.state), on: isOn,
        acts: [['media_player', st.state === 'playing' || st.state === 'paused' ? 'media_play_pause' : 'toggle', id]], aria: (isOn ? 'Pause ' : 'Play ') + nameOf(id) });
    }
    if (r.plugs.length) keys.push({ key: 'plugs', kind: 'control', tone: 'blue', icon: AREA_ICON.plugs, label: 'Plugs', value: plugsOn.length ? plugsOn.length + ' of ' + r.plugs.length + ' on' : 'All off', short: plugsOn.length ? plugsOn.length + ' on' : 'Off', on: plugsOn.length > 0,
      acts: r.plugs.map((id) => ['switch', plugsOn.length ? 'turn_off' : 'turn_on', id]), aria: (plugsOn.length ? 'Turn off' : 'Turn on') + ' the plugs in ' + r.name });
    // a leak is an alert, in red; an open door or window is only worth a note, never red (Matt, 27 Oct: the balcony door)
    r.alerts.forEach((id) => keys.push(attr(id).device_class === 'moisture' ? { key: 'alert:' + id, kind: 'alert', icon: AREA_ICON.alert, label: 'Water leak' }
      : { key: 'note:' + id, kind: 'note', icon: AREA_ICON.door, label: nameOf(id) + ' ' + valueOf(id).toLowerCase() }));
    return keys;
  }
  // the devices a room's key stands for
  const groupIds = (r, key) => {
    const of = (re) => r.actions.filter((id) => re.test(id));
    return ({ lights: r.lights, covers: of(/^cover\./), climate: of(/^climate\./).slice(0, 1), humidifier: of(/^humidifier\./).slice(0, 1), plugs: r.plugs,
      media: (() => { const players = of(/^media_player\./); return [players.find((id) => states[id]?.state === 'playing') || players.find((id) => states[id]?.state === 'paused') || players[0]].filter(Boolean); })() })[key] || [];
  };
  const keyButton = (k, cls, inner) => '<button class="' + cls + (k.on ? ' on' : '') + '" type="button" data-tone="' + k.tone + '" data-acts="' + acts(k.acts) + '" aria-label="' + esc(k.aria) + '" aria-pressed="' + k.on + '">' + inner + '</button>';
  const goButton = (r) => '<button class="pill" type="button" data-go="' + esc(r.id) + '" aria-label="Go to ' + esc(r.name) + '">Go</button>';
  const alertTags = (keys) => keys.filter((k) => k.kind === 'alert' || k.kind === 'note').map((k) => '<span class="sourceTag">' + esc(k.label) + '</span>').join(' ');
  // a room's main: its temperature, else its first reading, else its first device
  const mainOf = (r) => r.readings.find((id) => attr(id).device_class === 'temperature') || [...r.readings, ...r.solar, ...r.openings, ...r.actions, ...r.plugs].find((id) => states[id]) || null;
  // a name without its room's ("Living room humidity" in the living room is "Humidity")
  const inRoom = (r, id) => { const n = nameOf(id); return n.toLowerCase().startsWith(r.name.toLowerCase() + ' ') ? cap(n.slice(r.name.length + 1)) : n; };
  // the main as a headline: a number and its unit, or a word
  function headline(id) {
    const st = states[id], a = attr(id), d = id.split('.')[0], n = Number(st.state);
    if (st.state === 'unavailable') return { text: 'Unavailable' };
    if (d === 'sensor' && Number.isFinite(n)) {
      if (a.device_class === 'temperature') return { text: deg(n) };
      const unit = a.unit_of_measurement || '';
      return unit === '%' ? { text: Math.round(n) + '%' } : { text: num(n, Number.isInteger(n) ? 0 : 1), unit };
    }
    if (d === 'climate' && (a.current_temperature ?? a.temperature) != null) return { text: deg(a.current_temperature ?? a.temperature) };
    if (d === 'light') return { text: st.state !== 'on' ? 'Off' : dimmable(id) ? brightnessOf(st) + '%' : 'On' };
    if (d === 'cover') { const p = posOf(id); return { text: p <= 0 ? 'Closed' : p >= 100 ? 'Open' : p + '%' }; }
    if (d === 'humidifier') return { text: st.state === 'on' ? a.humidity + '%' : 'Off' };
    if (d === 'media_player') return { text: st.state === 'playing' ? 'Playing' : st.state === 'paused' ? 'Paused' : cap(st.state) };
    return { text: valueOf(id) };
  }
  // under the headline: what it is (the temperature needs no name) and the room's other readings; a thermostat's says
  // what it's doing in place of the room's temperature, so there aren't two temperatures
  const mainSub = (r, id, keys) => {
    const t = keys.find((k) => k.key === 'temp'), h = keys.find((k) => k.key === 'hum'), a = attr(id), off = states[id].state === 'off';
    if (id.startsWith('climate.')) return [inRoom(r, id), off ? 'Off' : cap(a.hvac_action || states[id].state) + (a.temperature != null ? ' · ' + deg(a.temperature) : ''), h && h.value + ' humidity'].filter(Boolean).join(' · ');
    return [!(t && t.id === id) && inRoom(r, id), t && t.id !== id && t.value, h && h.id !== id && h.value + ' humidity'].filter(Boolean).join(' · ');
  };
  // the open card: name, alerts and Go; the main, which opens its more-info; up to four
  // controls as tiles, the icon the button
  function areaBody(r, keys, main) {
    const h = main && headline(main), sub = main ? mainSub(r, main, keys) : '';
    // the icon is the button; the name and value open what the tile stands for: a room's lights, covers or plugs as a
    // group, one device as its own more-info (Matt, 27 Oct)
    const opens = (k) => { const ids = groupIds(r, k.key); return ids.length === 1 ? ids[0] : 'group:' + r.id + ':' + k.key; };
    const tiles = keys.filter((k) => k.kind === 'control').slice(0, 4).map((k) => '<div class="tfATile' + (k.on ? ' on' : '') + '" data-tone="' + k.tone + '"' + (k.light ? ' data-light style="' + k.light + '"' : '') + '>' + keyButton(k, 'tfIcon', k.icon) +
      '<button class="tfName" type="button" data-more="' + esc(opens(k)) + '" aria-label="' + esc(r.name + ' ' + k.label.toLowerCase() + ', ' + k.value + '. Open') + '"><span class="activityRowName">' + esc(k.label) + '</span><span class="activityRowMeta">' + esc(k.value) + '</span></button></div>');
    return '<div class="workoutPanelTop"><div><div class="tfAName">' + esc(r.name) + '</div>' + alertTags(keys) + '</div>' + goButton(r) + '</div>' +
      (main ? '<button class="tfABig" type="button" data-more="' + esc(main) + '" aria-label="' + esc(nameOf(main) + ', ' + valueOf(main) + '. More info') + '">' +
        '<span class="tfABigMain' + (h.text.length > 7 ? ' long' : '') + '">' + esc(h.text) + (h.unit ? '<span class="tfABigUnit">' + esc(h.unit) + '</span>' : '') + '</span>' +
        (sub ? '<span class="tfABigSub">' + esc(sub) + '</span>' : '') + '</button>' : '') +
      (tiles.length ? '<div class="tfATiles">' + tiles.join('') + '</div>' : '');
  }
  function areaPanel(r) {
    const isActive = r.id === activeArea, keys = roomKeys(r), main = mainOf(r), h = main && headline(main);
    // a folded card's content can't be reached until it's open. Folded (Matt's Figma "Area card accordions" 490:9283, 27
    // Oct): the main with the name under it, level and cut with "…" when it doesn't fit, then the room's control icons
    // two by two (an alert after them, in red; an open door or window plain); tapping anywhere opens it
    const chips = [...keys.filter((k) => k.kind === 'control'), ...keys.filter((k) => k.kind !== 'control' && k.kind !== 'reading')].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (isActive ? ' active' : '') + '" data-area="' + esc(r.id) + '" tabindex="0" aria-expanded="' + isActive + '" aria-label="' + esc(r.name) + '">' +
      '<div class="panelExpanded"' + (isActive ? '' : ' inert') + '>' + areaBody(r, keys, main) + '</div>' +
      '<div class="panelCollapsed tfACollapsed"><div class="tfACTop"><span class="tfACMain">' + (h ? esc(h.text + (h.unit ? ' ' + h.unit : '')) : '') + '</span><span class="tfACName">' + esc(r.name) + '</span></div>' +
      '<span class="tfACTiles" aria-hidden="true">' + chips.map((k) => '<span class="tfACTile"><span class="tfIcon' + (k.kind === 'alert' ? ' alert' : '') + '"' + (k.on && k.light ? ' data-light style="' + k.light + '"' : '') + '>' + k.icon + '</span></span>').join('') + '</span></div></article>';
  }
  let areaRooms = []; // the rooms with area cards, in Matt's order
  const areasHtml = (order) => '<div class="tfAreas" data-tf data-k="areas" style="order:' + order + '">' +
    '<section class="workoutGallery tfAreaGallery" aria-label="Areas">' + areaRooms.map(areaPanel).join('') + '</section></div>';

  /* sections: Home, Security and each room, with their devices as Home Assistant has them */
  const sectionsOf = () => [
    { key: 'home', name: 'Home', ids: model.homeVacuums },
    { key: 'security', name: 'Security', ids: [...model.security.alarms, ...model.security.locks] },
    ...model.rooms.map((r) => ({ key: 'room:' + r.id, name: r.name, room: r, ids: r.actions })),
  ];

  /* favourites and summaries, as on Home Assistant's home view */
  const count = (n, one, many) => n + ' ' + (n === 1 ? one : many);
  const starred = () => (prefs.favourites ?? haHome.favorite_entities ?? []).filter((id) => states[id]);
  // starred first, then suggestions up to 8: Home Assistant's, then what's used most here, then what's on
  function favouriteIds(most = 8) {
    const stars = starred();
    if (haHome.hide_suggested_entities) return stars;
    if (!suggested) {
      const most = Object.entries(used).sort((a, b) => b[1] - a[1]).map(([id]) => id);
      const actions = model.rooms.flatMap((r) => r.actions);
      suggested = [...new Set([...predicted, ...most, ...actions.filter((id) => specFor(id).on), ...actions])];
    }
    const ok = (id) => states[id] && states[id].state !== 'unavailable' && !stars.includes(id);
    return [...stars, ...suggested.filter(ok)].slice(0, Math.max(most, stars.length));
  }
  const starButton = (id) => {
    const on = starred().includes(id);
    return '<button class="tfStar" type="button" data-star="' + esc(id) + '" aria-pressed="' + on + '" aria-label="Favourite: ' + esc(nameOf(id)) + '">' + STAR(on) + '</button>';
  };
  // a device as a tile in a card: its icon is the button where it has one, and its name opens more-info. Favourites
  // add the room; the favourites list gives a star instead of the button
  function deviceRow(id, { area = false, star = false } = {}) {
    const d = id.split('.')[0], spec = ACTION_DOMAINS.includes(d) ? specFor(id) : null;
    const on = spec ? spec.on : ['on', 'open', 'playing'].includes(states[id]?.state);
    const button = spec ? spec.button
      : TOGGLES.includes(d) ? { act: act(d, 'toggle', id), label: 'Turn ' + nameOf(id) + (on ? ' off' : ' on') }
        : d === 'scene' || d === 'script' ? { act: act(d, 'turn_on', id), label: 'Run ' + nameOf(id) } : null;
    const meta = valueOf(id) + (area && whereIs.get(id) ? ' · ' + whereIs.get(id) : '');
    const icon = spec?.icon || iconFor(id);
    return '<div class="activityRow' + (button ? ' tfPlug' : '') + (on ? ' on' : '') + (star ? ' tfPick' : '') + '" data-k="' + esc((area ? 'fav:' : 'row:') + id) + '" data-tone="' + (d === 'light' ? 'light' : spec?.tone || 'blue') + '"' + lightAttrs(id) + '>' +
      (button && !star ? '<button class="tfIcon" type="button" data-act="' + button.act + '" aria-label="' + esc(button.label) + '"' + iconSlot(id, icon) + '></button>' : '<div class="tfIcon" aria-hidden="true"' + iconSlot(id, icon) + '></div>') +
      '<button class="tfName" type="button" data-more="' + esc(id) + '" aria-label="' + esc(nameOf(id) + ', ' + meta + '. More info') + '"><span class="activityRowName">' + esc(nameOf(id)) + '</span><span class="activityRowMeta">' + esc(meta) + '</span></button>' +
      (star ? starButton(id) : '') + '</div>';
  }
  const weatherId = () => (states[prefs.sources?.weather] ? prefs.sources.weather : states['weather.forecast_home'] ? 'weather.forecast_home' : Object.keys(states).find((x) => x.startsWith('weather.')));
  // the security summary's alerts: Home Assistant's alert sensors, or this page's (leaks and smoke alert; doors and
  // windows warn)
  function alertList() {
    const bin = (classes) => Object.keys(states).filter((id) => id.startsWith('binary_sensor.') && classes.includes(attr(id).device_class));
    const set = haSecurity.alert_entities?.length ? haSecurity.alert_entities
      : [...bin(['moisture', 'smoke', 'gas']).map((entity) => ({ entity, severity: 'alert' })), ...bin(OPEN_CLASSES).map((entity) => ({ entity, severity: 'warning' }))];
    return set.filter((x) => states[x.entity]).map((x) => ({ ...x, on: ['on', 'open', 'unlocked', 'triggered', 'problem'].includes(states[x.entity].state) }));
  }
  // Home Assistant's order for the summaries, and any shortcuts Matt added there (its resolveShortcutItems)
  function shortcutItems() {
    const keys = Object.keys(SUMMARIES), seen = new Set(), out = [];
    (haHome.shortcuts || []).forEach((it) => {
      if (it.type === 'summary') { if (!keys.includes(it.key) || seen.has(it.key)) return; seen.add(it.key); }
      out.push(it);
    });
    keys.forEach((key) => { if (!seen.has(key)) out.push({ type: 'summary', key }); });
    return out;
  }
  // each summary's line, worked out as Home Assistant's summary card does, and the devices it opens to
  function summaryData() {
    const rooms = model.rooms, sec = model.security, of = (r, re) => r.actions.filter((id) => re.test(id));
    const groups = (pick) => rooms.map((r) => ({ name: r.name, ids: pick(r) })).filter((g) => g.ids.length);
    const lights = rooms.flatMap((r) => r.lights), lit = lights.filter((id) => states[id]?.state === 'on').length;
    const temps = rooms.map((r) => r.readings.find((id) => attr(id).device_class === 'temperature')).filter(Boolean).map((id) => Number(states[id].state)).filter(Number.isFinite);
    const [lo, hi] = [num(Math.min(...temps)), num(Math.max(...temps))];
    const players = rooms.flatMap((r) => of(r, /^media_player\./)), playing = players.filter((id) => states[id]?.state === 'playing').length;
    const alerts = alertList(), warnings = alerts.filter((x) => x.severity === 'warning' && x.on).length;
    const unlocked = sec.locks.filter((id) => ['unlocked', 'jammed', 'open'].includes(states[id]?.state)).length;
    const disarmed = sec.alarms.filter((id) => states[id]?.state === 'disarmed').length;
    const warnText = warnings ? count(warnings, 'warning', 'warnings') : null;
    const secText = unlocked ? unlocked + ' unlocked' : disarmed ? disarmed + ' disarmed' : warnText ? null : 'All secure';
    const batteries = Object.keys(states).filter((id) => id.startsWith('sensor.') && attr(id).device_class === 'battery').sort((a, b) => Number(states[a].state) - Number(states[b].state));
    const low = [...batteries.filter((id) => Number(states[id].state) < 20), ...model.vacuums.filter((id) => attr(id).battery_level < 20)];
    const plants = rooms.flatMap((r) => r.plants.map((p) => p.id)).sort((a, b) => (states[b]?.state === 'problem') - (states[a]?.state === 'problem'));
    const care = plants.filter((id) => states[id]?.state === 'problem');
    const solar = rooms.flatMap((r) => r.solar), solarNow = solar.find((id) => id.endsWith('_power'));
    const all = {
      light: lights.length && { value: lit ? lit + ' on' : 'All off', groups: groups((r) => r.lights) },
      climate: temps.length && { value: lo === hi ? lo + '°' : lo + ' - ' + hi + '°', groups: groups((r) => [...r.readings.filter((id) => ['temperature', 'humidity'].includes(attr(id).device_class)), ...of(r, /^(climate|humidifier)\./)]) },
      security: (sec.alarms.length || sec.locks.length) && { value: [warnText, secText].filter(Boolean).join(', '), groups: [{ name: 'Alarm and locks', ids: [...sec.alarms, ...sec.locks] }, { name: 'Doors and windows', ids: sec.openings }].filter((g) => g.ids.length) },
      media_players: players.length && { value: playing ? playing + ' playing' : 'No media playing', groups: groups((r) => of(r, /^media_player\./)) },
      maintenance: (batteries.length || plants.length) && { value: [low.length && count(low.length, 'low battery', 'low batteries'), care.length && count(care.length, 'problem', 'problems')].filter(Boolean).join(', ') || 'All good', groups: [{ name: 'Plants', ids: plants }, { name: 'Batteries', ids: [...model.vacuums, ...batteries] }].filter((g) => g.ids.length) },
      energy: model.grid && { value: watts(Number(states[solarNow]?.state || 0) * 1000 + Number(states[model.grid].state)) + ' now', groups: [{ name: 'Energy', ids: [...solar, model.grid] }] },
    };
    const out = [];
    const active = alerts.filter((x) => x.severity !== 'warning' && x.on);
    if (active.length) out.push({ key: 'alerts', name: 'Alerts', icon: 'mdi:alarm-plus', colour: '#f44336', value: count(active.length, 'active alert', 'active alerts'), groups: [{ name: 'Active', ids: active.map((x) => x.entity) }] });
    shortcutItems().forEach((it) => {
      if (it.type !== 'summary') out.push({ key: 'path:' + it.path, name: it.label || it.path, icon: it.icon || 'mdi:link-variant', colour: '', value: '' });
      else if (!it.hidden && all[it.key] && !(prefs.hiddenSums || []).includes(it.key)) out.push({ key: it.key, ...SUMMARIES[it.key], ...all[it.key] });
    });
    return out;
  }
  const summaryRow = (s) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + esc(s.key) + '" data-k="sum:' + esc(s.key) + '" aria-label="' + esc(s.name + (s.value ? ', ' + s.value : '')) + '"' + (s.key === 'alerts' ? ' style="--sum:' + s.colour + ';--sum-ink:#ffffff"' : '') + '>' +
    '<div class="tfIcon" aria-hidden="true"' + iconSlot(s.id || '', s.icon, s.name) + '></div>' +
    '<div><div class="activityRowName">' + esc(s.name) + '</div>' + (s.value ? '<div class="activityRowMeta">' + esc(s.value) + '</div>' : '') + '</div></div>';
  function toggleStar(id) {
    const list = starred();
    prefs = { ...prefs, favourites: list.includes(id) ? list.filter((x) => x !== id) : [...list, id] };
    savePrefs();
    refresh();
  }
  // a shortcut Matt added on Home Assistant's home view goes where it points
  function go(path) {
    if (!document.querySelector('home-assistant')) return;
    history.pushState(null, '', path);
    window.dispatchEvent(new CustomEvent('location-changed', { detail: { replace: false } }));
  }
  function openSummary(key, opener) {
    if (key.startsWith('path:')) { go(key.slice(5)); return; }
    if (key === 'security') { openArea('security'); return; }
    openMore('summary:' + key, opener);
  }
  // saved favourites, Home Assistant's home view and security settings, and its suggested devices
  async function loadPrefs() {
    const get = (msg) => Promise.resolve().then(() => callWS(msg)).catch(() => null);
    const [mine, home, security, usage] = await Promise.all([
      get({ type: 'frontend/get_user_data', key: HOUSE_KEY }),
      get({ type: 'frontend/get_system_data', key: 'home' }),
      get({ type: 'frontend/get_system_data', key: 'security' }),
      get({ type: 'usage_prediction/common_control' }),
    ]);
    // edit mode's old choices (sections, order, sizes…) are left behind: the page is laid out as Home Assistant has it
    const v = mine?.value || {};
    prefs = { favourites: v.favourites ?? null, sources: v.sources, hiddenSums: v.hiddenSums, dash: v.dash, named: v.named };
    haHome = home?.value || {};
    haSecurity = security?.value || {};
    predicted = Array.isArray(usage?.entities) ? usage.entities : [];
    suggested = null;
    if (Object.keys(states).length) refresh();
    nameDashboard();
  }
  // the sidebar calls this page HomeCore (Matt, 28 Oct). A sidebar entry's name is its dashboard's title, kept in Home
  // Assistant rather than in the card, so the card names its own dashboard: once (a dashboard renamed afterwards is left
  // alone), only a dashboard of just this page, and only for an admin, as Home Assistant allows no one else
  const SIDEBAR_NAME = 'HomeCore';
  async function nameDashboard() {
    const path = location.pathname.split('/')[1], named = prefs.named || [];
    if (!getHass()?.user?.is_admin || !path || named.includes(path)) return;
    const remember = () => { prefs = { ...prefs, named: [...named, path] }; savePrefs(); };
    try {
      const board = (await callWS({ type: 'lovelace/dashboards/list' }))?.find((d) => d.url_path === path);
      if (!board || board.mode === 'yaml') return;
      if (board.title === SIDEBAR_NAME) { remember(); return; }
      const config = await callWS({ type: 'lovelace/config', url_path: path });
      const cards = (config?.views || []).flatMap((v) => [...(v.cards || []), ...(v.sections || []).flatMap((s) => s.cards || [])]);
      if (!cards.length || !cards.every((c) => c?.type === 'custom:move-assistant-card' && c.layout === 'test-focus')) return;
      await callWS({ type: 'lovelace/dashboards/update', dashboard_id: board.id, title: SIDEBAR_NAME });
      remember();
    } catch { /* not allowed, or no such dashboard: its name stays as it is */ }
  }

  /* ---------- the dashboard (Matt, 27 Oct) ----------
     After the HomeCore concept (Figma "Visual Design Language" 1851:906), with this page's parts at their drawn sizes
     (Figma "Spacing rules"), never the concept's spacing: the home's name, the summaries, the weather card and the areas,
     then Favourites, Activity, Energy today and Compared to average, then lights and thermostats. No labels above
     anything; a card has its title inside where the concept has one. Settings → Appearance → Home picks it or the
     house page */
  // Activity: the latest change to each of the house's devices, from Home Assistant's logbook (who did it and when);
  // what changed since then comes from the devices themselves, and without a logbook (the dev preview) everything does
  let logbook = null, logbookAt = 0, logbookBusy = false;
  const followed = (id) => { const d = id.split('.')[0]; return ACTIVITY_DOMAINS.includes(d) && (d !== 'binary_sensor' || OPEN_CLASSES.includes(attr(id).device_class)); };
  async function loadActivity() {
    if (logbookBusy || Date.now() - logbookAt < 30 * 1000) return;
    logbookBusy = true;
    logbookAt = Date.now();
    try {
      const ids = Object.keys(getHass()?.states || {}).filter(followed);
      const res = ids.length ? await callWS({ type: 'logbook/get_events', start_time: new Date(Date.now() - 24 * 3600 * 1000).toISOString(), end_time: new Date().toISOString(), entity_ids: ids }) : null;
      logbook = Array.isArray(res) ? res.filter((e) => e.entity_id && e.state != null && e.when) : null;
    } catch (_e) { logbook = null; }
    logbookBusy = false;
    refresh();
  }
  function activityItems() {
    const latest = new Map();
    const note = (e) => {
      if (!states[e.entity_id] || !followed(e.entity_id) || !dashLight(e.entity_id) || ['unavailable', 'unknown'].includes(e.state)) return;
      const was = latest.get(e.entity_id);
      if (!was || e.when > was.when + 1) latest.set(e.entity_id, e);
    };
    (logbook || []).forEach(note);
    const since = logbook ? logbookAt / 1000 - 5 : 0;
    Object.keys(states).forEach((id) => {
      const st = states[id], when = st.last_changed ? Date.parse(st.last_changed) / 1000 : 0;
      if (when > since) note({ entity_id: id, state: st.state, when, context_user_id: st.context?.user_id });
    });
    return [...latest.values()].sort((a, b) => b.when - a.when).slice(0, ACTIVITY_MOST);
  }
  // who: the person with that user, else the automation or script that did it
  function whoDid(e) {
    const person = e.context_user_id && Object.keys(states).find((id) => id.startsWith('person.') && attr(id).user_id === e.context_user_id);
    if (person) return nameOf(person);
    const user = getHass()?.user;
    if (user && e.context_user_id === user.id) return user.name;
    if (['automation', 'script'].includes(e.context_domain) || e.context_event_type === 'automation_triggered') return e.context_name || 'Home Assistant';
    return '';
  }
  function didWhat(e) {
    const d = e.entity_id.split('.')[0], s = String(e.state);
    if (d === 'lock') return { locked: 'locked', unlocked: 'unlocked', open: 'opened', jammed: 'jammed', locking: 'locking', unlocking: 'unlocking' }[s] || cap(s).toLowerCase();
    if (d === 'cover' || d === 'valve') return { open: 'opened', closed: 'closed', opening: 'opening', closing: 'closing' }[s] || cap(s).toLowerCase();
    if (d === 'binary_sensor') return s === 'on' ? 'opened' : 'closed';
    if (d === 'climate') return s === 'off' ? 'turned off' : 'set to ' + cap(s).toLowerCase();
    if (d === 'media_player') return { playing: 'started playing', paused: 'paused', idle: 'stopped', off: 'turned off', standby: 'turned off', on: 'turned on' }[s] || cap(s).toLowerCase();
    if (d === 'alarm_control_panel') return (ALARM_STATE[s] || cap(s)).toLowerCase();
    if (d === 'vacuum') return { cleaning: 'started cleaning', docked: 'docked', returning: 'went home', paused: 'paused', idle: 'stopped' }[s] || cap(s).toLowerCase();
    return s === 'on' ? 'turned on' : s === 'off' ? 'turned off' : cap(s).toLowerCase();
  }
  function activityRow(e) {
    const id = e.entity_id, what = nameOf(id) + ' ' + didWhat(e), meta = [whoDid(e), clock(e.when * 1000)].filter(Boolean).join(' · ');
    return '<div class="activityRow"><div class="tfIcon" aria-hidden="true"' + iconSlot(id, iconFor(id)) + '></div>' +
      '<button class="tfName" type="button" data-more="' + esc(id) + '" aria-label="' + esc(what + ', ' + meta + '. More info') + '"><span class="activityRowName">' + esc(what) + '</span><span class="activityRowMeta">' + esc(meta) + '</span></button></div>';
  }
  // Energy today: Home Assistant's energy dashboard where it's set up (each source's use since midnight); otherwise
  // made up, as the house makes up what it doesn't have. A tile opens to its graph, like a reading
  let energy = null, energyAt = 0;
  const MADE_UP_ENERGY = [['electricity', 'Electricity', 4.3, 'kWh'], ['gas', 'Gas', 0.21, 'm³'], ['water', 'Water', 0.2, 'm³']];
  async function loadEnergy() {
    if (Date.now() - energyAt < 5 * 60 * 1000) return;
    energyAt = Date.now();
    const list = [];
    try {
      const src = (await callWS({ type: 'energy/get_prefs' }))?.energy_sources || [];
      const statsOf = (type) => src.filter((s) => s.type === type).flatMap((s) => (type === 'grid' ? (s.flow_from || []).map((f) => f.stat_energy_from) : [s.stat_energy_from])).filter(Boolean);
      for (const [key, name, ids] of [['electricity', 'Electricity', statsOf('grid')], ['solar', 'Solar', statsOf('solar')], ['gas', 'Gas', statsOf('gas')], ['water', 'Water', statsOf('water')]]) {
        if (!ids.length) continue;
        const today = await Promise.all(ids.map((id) => Promise.resolve(callWS({ type: 'recorder/statistic_during_period', statistic_id: id, calendar: { period: 'day' }, types: ['change'] })).then((r) => Number(r?.change) || 0, () => 0)));
        list.push({ key, name, id: ids[0], value: today.reduce((t, v) => t + v, 0), unit: attr(ids[0]).unit_of_measurement || (key === 'gas' || key === 'water' ? 'm³' : 'kWh') });
      }
    } catch (_e) { /* no energy dashboard: made up */ }
    energy = list;
    refresh();
  }
  // Energy today's sources are a glance, and tapping one shows its day in the graph, in place: the card never moves
  // (Matt, 27 Oct, as in the HomeCore motion lab: the line draws in)
  let energyPick = null;
  function energyGlance() {
    const tiles = energy?.length ? energy : MADE_UP_ENERGY.map(([key, name, value, unit]) => {
      const id = 'sensor.made_up_energy_' + key;
      states[id] = { entity_id: id, state: String(value), last_changed: new Date().toISOString(), attributes: { friendly_name: name + ' today', unit_of_measurement: unit, state_class: 'total_increasing' } };
      return { key, name, id, value, unit };
    });
    energyText.clear();
    if (!tiles.some((t) => t.id === energyPick)) energyPick = tiles[0].id;
    const rows = tiles.map((t) => {
      const text = Number(t.value).toLocaleString(undefined, { maximumFractionDigits: t.value < 10 ? 2 : 1 }) + ' ' + t.unit, icon = ENERGY_ICON[t.key], on = t.id === energyPick;
      energyText.set(t.id, { name: t.name, text, icon });
      return '<div class="activityRow tap' + (on ? ' picked' : '') + '" role="button" tabindex="0" data-energy-pick="' + esc(t.id) + '" aria-pressed="' + on + '" aria-label="' + esc(t.name + ', ' + text) + '. Show its day in the graph">' +
        '<div class="tfIcon" aria-hidden="true"' + iconSlot('', icon, t.name) + '></div><div><div class="activityRowName">' + esc(t.name) + '</div><div class="activityRowMeta">' + esc(text) + '</div></div></div>';
    });
    // the picked source's day as a graph, above the glance or below it (its ⋯ in edit mode)
    const pick = tiles.find((t) => t.id === energyPick), below = (dashPrefs().opts.energy?.graph || 'above') === 'below';
    const graph = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + esc(pick.id) + '" role="img" aria-label="' + esc(pick.name) + ', last 24 hours"></svg></div>';
    return card('dash:energy', 0, 'Energy today', rows, graph, null, 'tfDashCard tfDash-energy' + (below ? '' : ' graphAbove'));
  }
  // a source picked: its tile marked and its day drawn into the graph; nothing else on the page changes
  function pickEnergy(id) {
    const cardEl = grid.querySelector('.tfDash-energy'), svg = cardEl?.querySelector('.tfDashGraph svg');
    if (!svg || id === energyPick) return;
    energyPick = id;
    cardEl.querySelectorAll('[data-energy-pick]').forEach((t) => { const on = t.dataset.energyPick === id; t.classList.toggle('picked', on); t.setAttribute('aria-pressed', String(on)); });
    svg.dataset.graph = id;
    svg.dataset.drawn = '';
    units.set('dash:energy', energyGlance());
    drawDashGraph(true);
  }
  // the line draws in over 700 and the area under it follows (the motion lab's graphs); not with Reduce motion
  function drawIn(svg) {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const [area, line] = svg.querySelectorAll('path');
    if (!line?.getTotalLength) return;
    const len = line.getTotalLength();
    line.animate([{ strokeDasharray: len, strokeDashoffset: len }, { strokeDasharray: len, strokeDashoffset: 0 }], { duration: 700, easing: 'cubic-bezier(.2,.7,.3,1)' });
    area?.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, delay: 200, easing: 'ease-out', fill: 'backwards' });
  }
  // the bottom row: the lights of the living room, bedroom and office (on first, then the most used) and up to two
  // thermostats, each a light tile (252), as many as
  // fit in one row (two rows of two on phones); worked out once a visit, so tiles don't move while you use them
  let dashPicks = null, dashColsSeen = 0;
  // the dashboard shows only these rooms' lights (anything else passes)
  const dashLight = (id) => !id.startsWith('light.') || DASH_LIGHT_ROOMS.includes((whereIs.get(id) || '').toLowerCase());
  const dashCols = () => Math.max(2, pegsFor(grid?.clientWidth || 0).n);
  function dashTileIds(n) {
    if (!dashPicks) {
      const rank = (id) => (states[id]?.state === 'on' ? 1e6 : 0) + (used[id] || 0);
      dashPicks = {
        lights: model.rooms.flatMap((r) => r.lights).filter((id) => dashLight(id) && states[id]?.state !== 'unavailable').sort((a, b) => rank(b) - rank(a) || nameOf(a).localeCompare(nameOf(b))),
        climates: model.rooms.flatMap((r) => r.actions.filter((id) => id.startsWith('climate.'))),
      };
    }
    const climates = dashPicks.climates.filter((id) => states[id]).slice(0, n > 3 ? 2 : 1);
    return [...dashPicks.lights.filter((id) => states[id]).slice(0, Math.max(0, n - climates.length)), ...climates];
  }
  const dashWrap = (cls, key, label, titled) => (inner) => '<section class="card tfCard tfDashCard ' + cls + '" data-tf data-k="' + key + '" aria-label="' + label + '">' +
    (titled ? '<div class="activityHeader"><div class="activityTitle">' + label + '</div></div>' : '') + '<div class="activityRows">' + inner + '</div></section>';
  function dashboard(out, sums) {
    out.dash = true;
    out.push({ key: 'dash:title', html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + esc(getHass()?.config?.location_name || 'Home') + '</h1>' });
    // the summaries: a row of their own, the bar only as wide as its tiles
    if (sums.length) out.push({ key: 'sums', wrap: (inner) => '<div class="tfDashBarRow" data-tf data-k="sums">' + dashWrap('tfDash-bar', 'sums-bar', 'Summaries', false)(inner).replace(' data-tf', '') + '</div>', tiles: sums.map((s) => ({ key: 'sum:' + s.key, html: summaryRow(s) })) });
    if (areaRooms.length) out.push({ key: 'areas', html: areasHtml(0) });
    const favs = favouriteIds(DASH_FAVOURITES * 3).filter(dashLight).slice(0, DASH_FAVOURITES);
    if (favs.length) out.push({ key: 'favs', wrap: dashWrap('tfDash-favs', 'favs', 'Favourites', true), tiles: favs.map((id) => ({ key: 'fav:' + id, html: deviceRow(id, { area: true }) })) });
    const items = activityItems();
    out.push({ key: 'dash:act', html: card('dash:act', 0, 'Activity', items.length ? items.map(activityRow) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], '', null, 'tfDashCard tfDash-act') });
    out.push({ key: 'dash:energy', html: energyGlance() });
    const cols = dashCols();
    dashColsSeen = cols;
    out.push({ key: 'dash:tiles', wrap: (inner) => '<div class="tfDashTiles" data-tf data-k="dash:tiles">' + inner + '</div>',
      tiles: dashTileIds(cols >= 3 ? cols : cols * 2).map((id) => ({ key: id, html: actionTile(id, false, id.startsWith('climate.') ? ['step'] : ['bright']) })) });
    loadActivity();
    loadEnergy();
    return out;
  }
  /* ---------- the peg board (Matt, 27 Oct) ----------
     The dashboard is a solid grid of cells from the top left: columns 252 wide (on a tablet four narrower ones, down to
     230, so two cards still fit side by side) and rows 60 tall, 16 apart both ways. Every card fills whole cells, so
     everything lines up: a tile is 1 × 2, a card 2 wide; the large cards (the weather, the areas, Favourites and
     Activity) are 5 rows (364, Favourites' and Activity's own height); the others as many rows as they need. A card
     can sit in any free cell; one dropped where others are pushes them down. Edit mode (the pencil in the bottom bar)
     draws the cells: drag a card by its grip (or anywhere on it), or use its ⋯ to size, move or hide it, and Energy
     today's graph above or below. Where everything is goes with the page's settings in Home Assistant (prefs.dash:
     cells, sizes, what's hidden, options). Phones keep one column */
  const PEG = 252, PEG_GAP = 16, PEG_MIN = 230, ROW = 60, ROW_PITCH = ROW + PEG_GAP, LARGE_ROWS = 5, EXTRA_ROWS = 3;
  const BOARD_NAMES = { title: 'The name', sums: 'Summaries', wx: 'Weather', areas: 'Areas', favs: 'Favourites', act: 'Activity', energy: 'Energy today', avg: 'Compared to average' };
  const RESIZABLE = ['wx', 'favs', 'act', 'energy', 'avg'];
  // each card's rows, matched to what it holds (Matt, 27 Oct): large ones 5 (364); Energy today 4 (288); Compared to
  // average 4 (288: its number and words need about 257); a Dual Axis Controller 3 (212), 5 while its pad is open; a
  // light or thermostat tile 2 (136)
  const ROWS = { wx: LARGE_ROWS, areas: LARGE_ROWS, favs: LARGE_ROWS, act: LARGE_ROWS, energy: 4, avg: 4 };
  const DAC_ROWS = 3, DAC_CHROME = 94; // a DAC tile's padding, name row and gap around its pad
  const dacOpen = new Set(); // dashboard DACs whose pad is open
  const boardName = (key) => BOARD_NAMES[key] || nameOf(key);
  const AREA_OPEN = 409, AREA_FOLDED = 128;
  let editing = false, drag = null, boardOpen = null, fitQueued = false, lastPlaced = new Map(), boardRows = 0, boardTop = 0;
  // the page's header, above the grid at its own size (the cards' rules: padding 10, tiles 60, so a bar of summaries is
  // 80 or 140 and never fits the grid's rows; Matt, 27 Oct: "we have rules to follow")
  const HEAD = ['title', 'sums'];
  const pegsFor = (W) => {
    let n = Math.floor((W + PEG_GAP) / (PEG + PEG_GAP)), w = PEG;
    if (n < 4 && W >= 4 * PEG_MIN + 3 * PEG_GAP) { n = 4; w = Math.floor((W - 3 * PEG_GAP) / 4); }
    return { n: Math.max(1, n), w };
  };
  const dashPrefs = () => ({ cells: {}, spans: {}, hidden: [], opts: {}, ...(prefs.dash || {}) });
  function saveDash(next) { prefs = { ...prefs, dash: next }; savePrefs(); }
  // what's on the board: each card's key, its element, its width in pegs ('full' the whole width) and whether it's a tile
  function boardItems() {
    const q = (sel) => grid.querySelector(sel);
    return [['title', q('.tfDashTitle'), 'full'], ['sums', q('.tfDashBarRow'), 'full'], ['wx', dashBoxes.wx, 2], ['areas', q('.tfAreas'), 'areas'],
      ['favs', q('.tfDash-favs'), 2], ['act', q('.tfDash-act'), 2], ['energy', q('.tfDash-energy'), 2], ['avg', dashBoxes.avg, 2],
      ...[...grid.querySelectorAll('.tfDashTiles > [data-k]')].map((el) => [el.dataset.k, el, 1, true])]
      .filter(([, el]) => el?.isConnected).map(([key, el, span, tile = false]) => ({ key, el, span, tile }));
  }
  // a card's width in pegs on a board n pegs wide, each w: 'full' the whole width, the areas as wide as they're drawn
  const colsOf = (it, n, w) => {
    if (it.span === 'full') return n;
    if (it.span === 'areas') return Math.min(n, Math.ceil((AREA_OPEN + Math.max(0, areaRooms.length - 1) * (AREA_FOLDED + PEG_GAP) + PEG_GAP) / (w + PEG_GAP)));
    return Math.min(n, dashPrefs().spans[it.key] ?? it.span);
  };
  // a card's rows, unless they come from its own height (a tile's do)
  const rowsOf = (it) => ROWS[it.key] ?? (it.el.classList.contains('tfDac') ? (dacOpen.has(it.key) ? LARGE_ROWS : DAC_ROWS) : null);
  // each card's cell on a board n pegs wide (the cards know their cols and rows): a dragged card where it would land;
  // then the cards with a saved cell, top to bottom (one in the way goes down to the next free cell); then the rest in
  // the page's order, each in the first cell from the top left it fits.
  // Cells saved on a wider board that don't fit this one would crowd its right edge, so then the cards keep the saved
  // order instead (the top row first, each row left to right), each in the first cell from the top left it fits.
  // Tiles side by side are one height, the tallest's (Matt, 27 Oct: a light beside a Dual Axis Controller grows to its
  // 3 rows, not stacked at different heights); an open pad doesn't count
  function placeCards(cards, n, dragged = null) {
    const cells = dashPrefs().cells, fits = cards.every((it) => !cells[it.key] || cells[it.key].col + it.cols <= n);
    const at = (it) => cells[it.key] || { row: 1e9, col: 0 };
    const place = () => {
      const taken = new Set(), placed = new Map();
      const free = (c, r, cs, rs) => { for (let y = r; y < r + rs; y++) for (let x = c; x < c + cs; x++) if (taken.has(x + ',' + y)) return false; return true; };
      const put = (it, c, r) => {
        for (let y = r; y < r + it.rows; y++) for (let x = c; x < c + it.cols; x++) taken.add(x + ',' + y);
        placed.set(it.key, { col: c, row: r, cols: it.cols, rows: it.rows });
      };
      const near = (it, c, r) => { c = Math.max(0, Math.min(n - it.cols, c)); r = Math.max(0, r); while (!free(c, r, it.cols, it.rows)) r++; put(it, c, r); };
      const first = (it) => { for (let r = 0; ; r++) for (let c = 0; c <= n - it.cols; c++) if (free(c, r, it.cols, it.rows)) { put(it, c, r); return; } };
      if (dragged) near(dragged, drag.col, drag.row);
      const rest = cards.filter((it) => it !== dragged), inOrder = (a, b) => at(a).row - at(b).row || at(a).col - at(b).col;
      if (!fits) { [...rest].sort(inOrder).forEach(first); return placed; }
      rest.filter((it) => cells[it.key]).sort(inOrder).forEach((it) => near(it, cells[it.key].col, cells[it.key].row));
      rest.filter((it) => !cells[it.key]).forEach(first);
      return placed;
    };
    // tiles starting on the same row and touching take the tallest one's rows; once they have, lay out again
    for (let pass = 0; ; pass++) {
      const placed = place();
      if (pass === 3) return placed;
      const tiles = cards.filter((it) => it.tile && !dacOpen.has(it.key)).map((it) => ({ it, p: placed.get(it.key) }))
        .sort((a, b) => a.p.row - b.p.row || a.p.col - b.p.col);
      let grew = false;
      for (let i = 0, j; i < tiles.length; i = j) {
        for (j = i + 1; j < tiles.length && tiles[j].p.row === tiles[i].p.row && tiles[j].p.col === tiles[j - 1].p.col + 1; j++);
        const run = tiles.slice(i, j), rows = Math.max(...run.map((t) => t.it.rows));
        run.forEach((t) => { if (t.it.rows < rows) { t.it.rows = rows; grew = true; } });
      }
      if (!grew) return placed;
    }
  }
  // a phone has no board: its cards run down one column in the board's reading order, the top row first and each row
  // left to right (Matt, 27 Oct). The board is the one last on screen, else the one the cells were saved on (four pegs
  // wide if they never were); hidden cards come last
  function phoneOrder() {
    const dash = dashPrefs(), hidden = new Set(dash.hidden), cards = boardItems().filter((it) => !HEAD.includes(it.key));
    let placed = lastPlaced;
    if (!placed.size) {
      const n = dash.pegs || 4, shown = cards.filter((it) => !hidden.has(it.key));
      shown.forEach((it) => { it.cols = colsOf(it, n, PEG); it.rows = rowsOf(it) ?? 2; });
      placed = placeCards(shown, n);
    }
    const at = (it) => (!hidden.has(it.key) && placed.get(it.key)) || { row: 1e9, col: 0 };
    cards.sort((a, b) => at(a).row - at(b).row || at(a).col - at(b).col).forEach((it, i) => it.el.style.setProperty('--o', String(3 + i)));
  }
  // saves where every card is, with the board's width in pegs so a phone can read them in the same order
  const saveCells = (dash, cells) => saveDash({ ...dash, cells, pegs: pegsFor(grid.clientWidth).n });
  // lays the board out on its cells: the name and the summaries first, then the cards (placeCards)
  function layoutBoard() {
    if (!testFocus || !grid) return;
    const W = grid.clientWidth, { n, w } = pegsFor(W), board = app.classList.contains('tfDash') && n >= 2;
    app.classList.toggle('tfBoard', board);
    app.classList.toggle('tfEditing', board && editing);
    const pen = $('dashEditNav');
    if (pen) { pen.hidden = !board; pen.classList.toggle('active', editing); pen.setAttribute('aria-pressed', String(editing)); pen.setAttribute('aria-label', editing ? 'Done editing' : 'Edit the dashboard'); pen.title = editing ? 'Done' : 'Edit'; pen.innerHTML = editing ? TICK : PENCIL; }
    const items = board ? boardItems() : [];
    if (!board) {
      grid.style.height = '';
      grid.querySelectorAll('.tfBoardItem').forEach((el) => { el.classList.remove('tfBoardItem', 'tfBoardHidden'); el.style.left = el.style.top = el.style.width = el.style.height = ''; });
      grid.querySelector('.tfDash-act > .activityRows')?.style.removeProperty('max-height');
      editTools(false);
      if (app.classList.contains('tfDash')) phoneOrder();
      return;
    }
    grid.style.setProperty('--peg-w', w + 'px');
    const hidden = new Set(dashPrefs().hidden), pitch = w + PEG_GAP;
    items.forEach((it) => it.el.classList.toggle('tfBoardHidden', hidden.has(it.key)));
    const shown = items.filter((it) => !hidden.has(it.key) && getComputedStyle(it.el).display !== 'none');
    // the header: the name and the summaries, the full width, each at its own height, 16 apart
    let top = 0;
    shown.filter((it) => HEAD.includes(it.key)).forEach((it) => {
      it.el.classList.add('tfBoardItem');
      Object.assign(it.el.style, { width: W + 'px', height: '', left: '0px', top: top + 'px' });
      // the summaries in even rows: all in one if they fit, else halves, thirds…, each column as wide as its words
      const bar = it.key === 'sums' && it.el.querySelector('.tfDash-bar'), count = bar ? bar.querySelectorAll('.activityRow').length : 0;
      if (bar) bar.style.maxWidth = 'none';
      for (let rows = 1; bar && rows <= count; rows++) { bar.style.setProperty('--bar-cols', String(Math.ceil(count / rows))); if (bar.offsetWidth <= W) break; }
      if (bar) bar.style.maxWidth = '';
      top += it.el.offsetHeight + PEG_GAP;
    });
    boardTop = top;
    const cards = shown.filter((it) => !HEAD.includes(it.key));
    // each card's cells: its width in pegs, and its rows
    cards.forEach((it) => {
      it.cols = colsOf(it, n, w);
      it.el.classList.add('tfBoardItem');
      it.el.style.width = (it.cols === n ? W : it.cols * w + (it.cols - 1) * PEG_GAP) + 'px';
      it.el.style.height = '';
      it.rows = rowsOf(it) ?? Math.max(1, Math.ceil((it.el.offsetHeight + PEG_GAP - 6) / ROW_PITCH));
    });
    const dragged = drag && cards.find((it) => it.key === drag.key);
    const placed = placeCards(cards, n, dragged);
    placed.forEach((p) => Object.assign(p, { x: p.cols === n ? 0 : p.col * pitch, y: boardTop + p.row * ROW_PITCH, w: p.cols === n ? W : p.cols * w + (p.cols - 1) * PEG_GAP, h: p.rows * ROW_PITCH - PEG_GAP }));
    cards.forEach((it) => {
      const p = placed.get(it.key);
      it.el.style.height = p.h + 'px';
      // a DAC's pad takes what its cells leave under its name
      if (it.el.classList.contains('tfDac')) it.el.style.setProperty('--tf-dac-pad', (p.h - DAC_CHROME) + 'px');
      if (it === dragged) return; // the dragged card follows the pointer; where it lands shows instead
      it.el.style.left = p.x + 'px';
      it.el.style.top = p.y + 'px';
    });
    lastPlaced = placed;
    // Activity shows as many changes as its card fits (under its title, above its 10 of padding), whole tiles only;
    // the rest scroll
    const act = placed.get('act'), list = act && grid.querySelector('.tfDash-act > .activityRows');
    if (list) list.style.maxHeight = Math.max(ROW, Math.floor((act.h - list.offsetTop - 10) / ROW) * ROW) + 'px';
    boardRows = Math.max(0, ...[...placed.values()].map((p) => p.row + p.rows));
    let height = boardTop + boardRows * ROW_PITCH - PEG_GAP;
    height = editTools(editing, cards, placed, height, n, w);
    grid.style.height = height + 'px';
    // cards slide to new places from the second layout on (not as the page first draws)
    requestAnimationFrame(() => app.classList.add('tfBoardReady'));
    items.forEach((it) => itemSizes.observe(it.el));
    drawDashGraph();
  }
  const queueFit = () => { if (fitQueued) return; fitQueued = true; requestAnimationFrame(() => { fitQueued = false; layoutBoard(); }); };
  // a card whose content changes height (a forecast arriving, a reading opening) may need more rows
  const itemSizes = new ResizeObserver(() => { if (!drag) queueFit(); });
  // edit mode's tools: the grid of cells, each card's grip (top middle) and ⋯ (its own controls rest), where a dragged
  // card will land, and the tray of hidden cards under the board; returns the board's height with them
  function editTools(on, shown = [], placed = new Map(), height = 0, n = 1, w = PEG) {
    grid.querySelectorAll('.tfEditChips').forEach((c) => { if (!on || !c.closest('.tfBoardItem')) c.remove(); });
    grid.querySelectorAll('.tfBoardItem').forEach((el) => [...el.children].forEach((c) => { if (!c.classList.contains('tfEditChips')) c.toggleAttribute('inert', on); }));
    let cells = grid.querySelector('.tfBoardCells'), land = grid.querySelector('.tfBoardLand'), tray = grid.querySelector('.tfBoardTray');
    if (!on) { cells?.remove(); land?.remove(); tray?.remove(); closeBoardMenu(); return height; }
    // the cells, with a few spare rows under the cards to drop into
    const rows = boardRows + EXTRA_ROWS;
    if (!cells) { cells = Object.assign(document.createElement('div'), { className: 'tfBoardCells' }); cells.setAttribute('aria-hidden', 'true'); grid.prepend(cells); }
    cells.style.top = boardTop + 'px';
    if (cells.dataset.size !== n + 'x' + rows + 'x' + w) {
      cells.dataset.size = n + 'x' + rows + 'x' + w;
      cells.style.gridTemplateColumns = 'repeat(' + n + ',' + w + 'px)';
      cells.innerHTML = '<i></i>'.repeat(n * rows);
    }
    height = Math.max(height, boardTop + rows * ROW_PITCH - PEG_GAP);
    shown.forEach((it) => {
      const host = it.el;
      if (!host || host.querySelector(':scope > .tfEditChips')) return;
      host.insertAdjacentHTML('beforeend', '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + GRIP + '</span>' +
        '<button class="tfEditChip" type="button" data-board-more="' + esc(it.key) + '" aria-label="' + esc(boardName(it.key)) + ' options" aria-haspopup="menu">' + DOTS + '</button></div>');
    });
    if (drag && placed.has(drag.key)) {
      if (!land) { land = Object.assign(document.createElement('div'), { className: 'tfBoardLand' }); grid.appendChild(land); }
      const p = placed.get(drag.key);
      Object.assign(land.style, { left: p.x + 'px', top: p.y + 'px', width: p.w + 'px', height: p.h + 'px' });
    } else land?.remove();
    const hiddenKeys = dashPrefs().hidden.filter((k) => boardItems().some((it) => it.key === k));
    if (!hiddenKeys.length) { tray?.remove(); return height; }
    if (!tray) { tray = Object.assign(document.createElement('div'), { className: 'tfBoardTray' }); grid.appendChild(tray); }
    tray.innerHTML = hiddenKeys.map((k) => '<button class="pill" type="button" data-board-show="' + esc(k) + '">Show ' + esc(boardName(k)) + '</button>').join('');
    Object.assign(tray.style, { top: (height + PEG_GAP) + 'px', left: '0px', width: grid.clientWidth + 'px' });
    return height + PEG_GAP + tray.offsetHeight;
  }
  function setEditing(on) {
    editing = on;
    if (!on) { drag = null; closeBoardMenu(); }
    layoutBoard();
  }
  // a card's ⋯: its size (a tile or a card), a cell left, right, up or down, Energy today's graph, and hide
  function openBoardMenu(key, opener) {
    closeBoardMenu();
    const p = lastPlaced.get(key), { n } = pegsFor(grid.clientWidth), dash = dashPrefs(), span = dash.spans[key] ?? 2;
    if (!p) return;
    const full = p.cols >= n, item = (act, label, off) => '<button type="button" role="menuitem" data-board-act="' + act + '"' + (off ? ' disabled' : '') + '>' + label + '</button>';
    const menu = Object.assign(document.createElement('div'), { className: 'tfBoardMenu' });
    menu.setAttribute('role', 'menu');
    menu.setAttribute('aria-label', boardName(key) + ' options');
    menu.innerHTML = (RESIZABLE.includes(key) ? item('size', span === 1 ? 'Card size' : 'Tile size') : '') +
      (key === 'energy' ? item('graph', (dash.opts.energy?.graph || 'above') === 'above' ? 'Graph below' : 'Graph above') : '') +
      item('left', 'Move left', full || p.col === 0) + item('right', 'Move right', full || p.col + p.cols >= n) +
      item('up', 'Move up', p.row <= 0) + item('down', 'Move down') + item('hide', 'Hide');
    grid.appendChild(menu);
    const left = Math.min(p.x + p.w - menu.offsetWidth, grid.clientWidth - menu.offsetWidth);
    Object.assign(menu.style, { left: Math.max(0, left) + 'px', top: (p.y + 28) + 'px' });
    boardOpen = { key, menu, opener };
    menu.querySelector('button:not([disabled])')?.focus();
  }
  function closeBoardMenu(refocus) {
    if (!boardOpen) return;
    const { menu, opener } = boardOpen;
    boardOpen = null;
    menu.remove();
    if (refocus) opener?.focus();
  }
  // every card's cell as it is now, so moving one leaves the rest where they are
  const cellsNow = () => Object.fromEntries([...lastPlaced].map(([k, p]) => [k, { col: p.col, row: p.row }]));
  function boardAct(key, act) {
    const dash = dashPrefs(), cells = cellsNow(), here = cells[key] || { col: 0, row: 0 };
    if (act === 'size') dash.spans = { ...dash.spans, [key]: (dash.spans[key] ?? 2) === 1 ? 2 : 1 };
    if (act === 'graph') dash.opts = { ...dash.opts, energy: { ...(dash.opts.energy || {}), graph: (dash.opts.energy?.graph || 'above') === 'above' ? 'below' : 'above' } };
    if (act === 'left') cells[key] = { ...here, col: here.col - 1 };
    if (act === 'right') cells[key] = { ...here, col: here.col + 1 };
    if (act === 'up') cells[key] = { ...here, row: here.row - 1 };
    if (act === 'down') cells[key] = { ...here, row: here.row + 1 };
    if (act === 'hide') dash.hidden = [...new Set([...dash.hidden, key])];
    // a card moved onto others goes first; they make room under it
    if (['left', 'right', 'up', 'down'].includes(act)) drag = { key, col: cells[key].col, row: cells[key].row };
    saveCells(dash, cells);
    if (drag) { layoutBoard(); drag = null; saveCells(dashPrefs(), cellsNow()); }
    closeBoardMenu();
    if (act === 'graph') { units.delete('dash:energy'); refresh(); }
    layoutBoard();
    if (act !== 'hide') grid.querySelector('[data-board-more="' + CSS.escape(key) + '"]')?.focus();
  }
  function showCard(key) {
    const dash = dashPrefs();
    saveDash({ ...dash, hidden: dash.hidden.filter((k) => k !== key) });
    layoutBoard();
  }
  // dragging: the card follows the pointer and lands on the nearest cell; cards in the way move down to make room
  function boardDown(ev) {
    if (!editing || ev.button !== 0 || ev.target.closest('[data-board-more],.tfBoardMenu,.tfBoardTray')) return;
    const el = ev.target.closest('.tfBoardItem');
    const it = el && boardItems().find((x) => x.el === el);
    if (!it || HEAD.includes(it.key)) return;
    const p = lastPlaced.get(it.key), { w } = pegsFor(grid.clientWidth);
    if (!p) return;
    ev.preventDefault();
    closeBoardMenu();
    const x0 = ev.clientX, y0 = ev.clientY;
    let started = false, raf = 0;
    const move = (e) => {
      const dx = e.clientX - x0, dy = e.clientY - y0;
      if (!started) { if (Math.hypot(dx, dy) < 4) return; started = true; drag = { key: it.key, col: p.col, row: p.row }; el.classList.add('tfDragging'); }
      el.style.transform = 'translate(' + dx + 'px,' + dy + 'px)';
      drag.col = Math.round((p.x + dx) / (w + PEG_GAP));
      drag.row = Math.round((p.y + dy - boardTop) / ROW_PITCH);
      if (!raf) raf = requestAnimationFrame(() => { raf = 0; layoutBoard(); });
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      window.removeEventListener('pointercancel', up);
      if (!started) return;
      cancelAnimationFrame(raf);
      layoutBoard();
      el.classList.remove('tfDragging');
      el.style.transform = '';
      drag = null;
      saveCells(dashPrefs(), cellsNow());
      layoutBoard();
      refresh();
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    window.addEventListener('pointercancel', up);
  }
  // Energy today's graph: the picked source's last 24 hours (made-up energy rises from midnight), drawn again only when
  // the source or the graph's size changes; a new pick draws in
  function drawDashGraph(animate = false) {
    const svg = grid?.querySelector('.tfDashGraph svg[data-graph]');
    if (!svg?.clientWidth) return;
    const drawn = svg.dataset.graph + '@' + svg.clientWidth + 'x' + svg.clientHeight;
    if (svg.dataset.drawn === drawn) return;
    svg.dataset.drawn = drawn;
    drawHistory(svg.dataset.graph, svg).then(() => { if (animate) drawIn(svg); });
  }

  /* the page: areas, Home (weather, vacuum), Security, then each room: its label, readings, plants and action tiles */
  function layout() {
    model = house.model(getHass());
    states = model.states;
    // Settings → Sources: the grid's power and the alarm, when picked
    if (states[prefs.sources?.grid]) model.grid = prefs.sources.grid;
    if (states[prefs.sources?.alarm]) model.security.alarms = [prefs.sources.alarm];
    // a cover's goal goes once it's there and still (or after two minutes, if it never says)
    goals.forEach((g, id) => {
      const st = states[id], a = st?.attributes || {};
      if (!st || Date.now() - g.at > 2 * 60 * 1000) { goals.delete(id); return; }
      if (g.pos != null && st.state !== 'opening' && st.state !== 'closing' && Math.abs(posOf(id) - g.pos) < 1) delete g.pos;
      if (g.tilt != null && Math.abs((a.current_tilt_position ?? -1) - g.tilt) < 1) delete g.tilt;
      if (g.pos == null && g.tilt == null) goals.delete(id);
    });
    const out = [];
    let order = 0;
    const secs = sectionsOf();
    areaRooms = secs.filter((x) => x.room).map((x) => x.room);
    if (!areaRooms.some((r) => r.id === activeArea)) activeArea = areaRooms[0]?.id || null;
    // Home is the dashboard (Matt, 27 Oct: no house page any more). A section has its own page: a room's from its area
    // card's Go, Security's from its summary; its header, then only that section. The weather card opens the Weather
    // page: its header and the whole bento
    const page = areaPage === 'weather' ? { key: 'weather', name: 'Weather' } : areaPage && secs.find((x) => x.key === areaPage);
    if (!page) areaPage = null;
    app.classList.toggle('tfAreaOpen', Boolean(page));
    app.classList.toggle('tfWeatherOpen', page?.key === 'weather');
    app.classList.toggle('tfDash', !page);
    whereIs = new Map();
    model.rooms.forEach((r) => [...r.actions, ...r.plugs, ...r.readings, ...r.openings, ...r.solar, ...r.plants.flatMap((p) => [p.id, ...p.readings])].forEach((id) => whereIs.set(id, r.name)));
    if (!page) return dashboard(out, summaryData());
    out.push({ key: 'areahead', html: areaHead(page, ++order) });
    if (page.key === 'weather') { out.weather = ++order; return out; }
    // the section: a room's energy, readings and plants, then its tiles; Security's doors and windows come last
    const ids = page.ids, name = page.room ? page.room.id : page.key, r = page.room;
    if (r?.solar.length) out.push({ key: 'energy:' + r.id, html: energyCard(r, ++order) });
    if (r && (r.readings.length || r.plugs.length || r.power != null)) out.push({ key: 'readings:' + r.id, html: roomCard(r, ++order) });
    r?.plants.forEach((p) => out.push({ key: 'plant:' + p.id, html: plantCard(p, ++order) }));
    if (ids.length) out.push({ key: 'block:' + name, order: ++order, tiles: ids.map((id) => ({ key: id, html: actionTile(id) })) });
    if (page.key === 'security') out.push({ key: 'openings', html: openingsCard(++order) });
    return out;
  }
  // a section's page header, as Move Assistant's pages have: a big back arrow and the section's name
  const areaHead = (x, order) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + order + '">' +
    '<button class="back" type="button" data-area-back aria-label="Back to the house">' + BACK + '</button><div class="settingsTitle">' + esc(x.name) + '</div></div>';
  // a room's Go, or the Security summary, opens its section's page at its top; back returns to the house exactly where
  // you were (Matt, 28 Oct). Scrolling it into view instead would tuck its title under Home Assistant's top bar
  let leftAt = 0; // how far the house was scrolled when a page opened
  function openArea(key) {
    if (!areaPage) leftAt = scroller().scrollTop;
    areaPage = key;
    if (key.startsWith('room:')) activeArea = key.slice(5);
    render();
    scroller().scrollTop = 0;
    grid.querySelector('[data-area-back]')?.focus({ preventScroll: true });
  }
  function closeArea() {
    const key = areaPage;
    areaPage = null;
    render();
    // again a frame later, once the weather and anything else drawn after has its height
    const sc = scroller(), y = leftAt;
    sc.scrollTop = y;
    requestAnimationFrame(() => { sc.scrollTop = y; });
    const panel = key.startsWith('room:') ? grid.querySelector('.tfAreaPanel[data-area="' + CSS.escape(key.slice(5)) + '"]')
      : key === 'weather' ? dashBoxes.wx.querySelector('.wbOpenPage') : grid.querySelector('[data-k="sum:' + CSS.escape(key) + '"]');
    (panel?.querySelector('[data-go]') || panel)?.focus({ preventScroll: true });
  }
  const blockHtml = (n) => (n.wrap ? n.wrap(n.tiles.map((t) => t.html).join(''), n)
    : '<div class="tfBlock" data-tf data-k="' + esc(n.key) + '" style="order:' + n.order + '"><div class="tfActions">' + n.tiles.map((t) => t.html).join('') + '</div></div>');
  const signOf = (out) => out.map((n) => n.key + (n.tiles ? '(' + n.tiles.map((t) => t.key).join(',') + ')' : '')).join(';');

  // what scrolls the page: a scrolling box round the card if there is one, else the window (Home Assistant's
  // dashboards scroll the window, under its fixed top bar)
  function scroller() {
    for (let el = app.parentElement || app.getRootNode().host; el; el = el.parentElement || el.getRootNode().host) {
      const y = getComputedStyle(el).overflowY;
      if ((y === 'auto' || y === 'scroll') && el.scrollHeight > el.clientHeight) return el;
    }
    return document.scrollingElement;
  }
  // a redraw never moves the page (Matt, 28 Oct: "the page jumps to a seemingly random spot"): whatever card is on
  // the screen stays exactly where it was, even when something above it changes height (Safari doesn't do this itself)
  function keepPlace(change) {
    const sc = scroller(), onScreen = (el) => { const r = el.getBoundingClientRect(); return r.height && r.bottom > 0 && r.top < window.innerHeight; };
    const mark = [...grid.children, ...grid.querySelectorAll('.tfDashTiles > *')].find((el) => !el.matches('.tfDashTiles') && onScreen(el));
    const key = mark?.dataset.k, was = mark?.getBoundingClientRect().top;
    change();
    const now = mark?.isConnected ? mark : key && grid.querySelector('[data-k="' + CSS.escape(key) + '"]');
    if (now?.isConnected && was != null) sc.scrollTop += now.getBoundingClientRect().top - was;
  }
  function render() {
    if (!testFocus || !grid) return;
    // the new page is ready before the old one goes, so the page never stands empty (it would lose its scroll)
    const out = layout();
    grid.querySelectorAll('[data-tf]').forEach((el) => el.remove());
    units.clear();
    const wrap = document.createElement('div');
    wrap.innerHTML = out.map((n) => (n.tiles ? blockHtml(n) : n.html)).join('');
    out.forEach((n) => (n.tiles ? n.tiles.forEach((t) => units.set(t.key, t.html)) : units.set(n.key, n.html)));
    signature = signOf(out);
    grid.append(...wrap.children);
    placeBento(out.weather);
    placeDash(true);
    itemSizes.disconnect();
    layoutBoard();
    fillIcons(grid);
    mountArt(grid);
    mountDacs(grid);
    syncSettings();
    if (open) drawHistory(open.id);
    drawSolar();
    renderMore();
    tidyArts();
    requestAnimationFrame(measureDensity);
  }

  // Redraw only what changed, so a held bar or a focused button isn't replaced under the pointer
  // after a redraw, focus what was: the same label, or else the same action (a toggle's label flips when it's pressed)
  const focusOf = (scope) => { const f = root.activeElement && scope.contains(root.activeElement) ? root.activeElement : null; return f && { label: f.getAttribute('aria-label'), act: f.dataset?.act }; };
  const refocus = (scope, was) => { if (!was) return; ((was.label && scope.querySelector('[aria-label="' + CSS.escape(was.label) + '"]')) || (was.act && scope.querySelector('[data-act="' + CSS.escape(was.act) + '"]')))?.focus({ preventScroll: true }); };
  function replace(el, html) {
    const t = document.createElement('div');
    t.innerHTML = html;
    const next = t.firstElementChild;
    const was = focusOf(el);
    el.replaceWith(next);
    fillIcons(next);
    mountArt(next);
    mountDacs(next);
    refocus(next, was);
  }
  function refresh() {
    if (!testFocus || !grid || drag) return;
    keepPlace(redraw);
  }
  function redraw() {
    if (!grid.querySelector('[data-tf]')) { render(); return; }
    const out = layout();
    if (signOf(out) !== signature) { render(); return; }
    // a tile is held while one of its device's bars or drawing is (a favourite holds its device too)
    const isHeld = (key) => [...dragging.keys()].some((k) => {
      const id = k.slice(k.indexOf('|') + 1);
      return key === id || key.endsWith(':' + id);
    });
    out.forEach((n) => (n.tiles || [n]).forEach((u) => {
      if (units.get(u.key) === u.html || isHeld(u.key)) return;
      const el = grid.querySelector('[data-k="' + CSS.escape(u.key) + '"]');
      if (!el) return;
      units.set(u.key, u.html);
      // an open reading keeps its graph; only its value changes
      if (open && open.key === u.key && el.querySelector('.tfOpen')) { el.querySelector('.tfOpen .activityRowMeta').textContent = openValue(open.id); return; }
      replace(el, u.html);
      if (open && open.key === u.key) drawHistory(open.id);
      if (u.key.startsWith('energy:')) drawSolar();
    }));
    renderMore();
    tidyArts();
    syncDacs();
    syncSettings();
    bento?.update();
    dashBentos?.forEach((b) => b.update());
    if (app.classList.contains('tfDash')) queueFit();
    requestAnimationFrame(measureDensity);
  }

  /* more-info: this page's own, for every device, so its layout can be tried with real ones too (Matt, 27 Oct) */
  const DETAILS = {
    light: (a) => [['Brightness', a.brightness != null ? Math.round(a.brightness / 2.55) + '%' : null], ['Colour temperature', a.color_temp_kelvin ? Number(a.color_temp_kelvin).toLocaleString() + ' K' : null], ['Colour mode', a.color_mode && cap(a.color_mode)]],
    climate: (a) => [['Current temperature', num(a.current_temperature) + ' °C'], ['Target', num(a.temperature) + ' °C'], ['Action', cap(a.hvac_action)]],
    cover: (a) => [['Position', a.current_position != null ? a.current_position + '% open' : null], ['Tilt', a.current_tilt_position != null ? a.current_tilt_position + '% open' : null]],
    humidifier: (a) => [['Current humidity', a.current_humidity + '%'], ['Target', a.humidity + '%'], ['Mode', cap(a.mode)]],
    media_player: (a) => [['Title', a.media_title], ['Artist', a.media_artist], ['Volume', a.volume_level != null ? Math.round(a.volume_level * 100) + '%' : null], ['Source', a.source]],
    vacuum: (a) => [['Battery', a.battery_level + '%'], ['Fan speed', cap(a.fan_speed)], ['Rooms', (a.rooms || []).join(', ') || null]],
    lock: (a) => [['Changed by', a.changed_by]],
    alarm_control_panel: (a) => [['Changed by', a.changed_by]],
    valve: () => [],
    plant: (a) => [['Moisture', a.moisture + '%'], ['Light', Number(a.brightness).toLocaleString() + ' lx'], ['Temperature', num(a.temperature) + ' °C'], ['Fertility', a.conductivity + ' µS/cm'], ['Problems', a.problem === 'none' ? 'None' : cap(a.problem)]],
    weather: (a) => [['Temperature', a.temperature != null ? a.temperature + ' ' + (a.temperature_unit || '°C') : null], ['Humidity', a.humidity != null ? a.humidity + '%' : null], ['Wind', a.wind_speed != null ? a.wind_speed + ' ' + (a.wind_speed_unit || 'km/h') : null], ['Pressure', a.pressure != null ? a.pressure + ' ' + (a.pressure_unit || 'hPa') : null]],
  };
  const detailsHtml = (id) => {
    const rows = (DETAILS[id.split('.')[0]]?.(attr(id)) || []).filter(([, v]) => v != null && v !== '');
    return rows.length ? '<div class="tfMoreRows">' + rows.map(([k, v]) => '<div class="tfMoreRow"><span>' + esc(k) + '</span><span>' + esc(v) + '</span></div>').join('') + '</div>' : '';
  };
  const madeUpNote = (id) => (isMadeUp(id) ? '<div class="tfMoreNote">Made up for this page</div>' : '');
  // devices by group, as tiles
  function listHtml(groups, opts = {}, single = false) {
    return '<div class="tfMoreList">' + groups.map((g) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + esc(g.name) + '</div>' +
      '<div class="tfMoreTiles' + (single ? ' single' : '') + '">' + g.ids.map((x) => deviceRow(x, opts)).join('') + '</div></div>').join('') + '</div>';
  }
  const sheet = document.createElement('div');
  sheet.className = 'tfMoreBackdrop';
  sheet.hidden = true;
  app.appendChild(sheet);
  // while a popup is open the page behind it stays still (Matt, 28 Oct): a swipe or wheel only scrolls what's inside
  // the popup, and nothing once that's at its end; on the dark round it, nothing at all. Sideways swipes and the
  // popup's own controls are left alone
  const scrollsInside = (from, dy) => {
    for (let el = from; el && el !== sheet; el = el.parentElement) {
      const y = getComputedStyle(el).overflowY;
      if ((y === 'auto' || y === 'scroll') && el.scrollHeight > el.clientHeight + 1 && (dy < 0 ? el.scrollTop > 0 : el.scrollTop + el.clientHeight < el.scrollHeight - 1)) return true;
    }
    return false;
  };
  let touchAt = null;
  sheet.addEventListener('touchstart', (ev) => { touchAt = { x: ev.touches[0].clientX, y: ev.touches[0].clientY }; }, { passive: true });
  sheet.addEventListener('touchmove', (ev) => {
    if (!touchAt || ev.touches.length > 1 || ev.target.closest?.('input,textarea,select')) return;
    const t = ev.touches[0], dx = touchAt.x - t.clientX, dy = touchAt.y - t.clientY;
    touchAt = { x: t.clientX, y: t.clientY };
    if (Math.abs(dy) >= Math.abs(dx) && !scrollsInside(ev.target, dy)) ev.preventDefault();
  }, { passive: false });
  sheet.addEventListener('wheel', (ev) => { if (!scrollsInside(ev.target, ev.deltaY)) ev.preventDefault(); }, { passive: false });
  // a device's details sit behind a Details button and roll out beside the dialog, which stays where it is (Matt,
  // 27 Oct); where there's no room beside it (always on phones) they open over the top of it
  function fitDetails() {
    const pair = sheet.querySelector('.tfMorePair'), box = sheet.querySelector('.tfMore');
    pair?.classList.toggle('over', window.innerWidth <= 620 || (window.innerWidth - box.offsetWidth) / 2 < 312 + 16);
  }
  window.addEventListener('resize', fitDetails, { passive: true });
  if (testFocus) applyLook();
  // the dialog's parts, one element each. A device: name, state and when it changed, a cover's drawing, the tile's
  // sections, and a Details button (its details and the made-up note open beside it). A summary: its line, then its
  // devices by room. The favourites list (the only place to star, Matt 27 Oct): every device with a star, starred first
  let moreParts = [];
  const special = (id) => id === 'favourites' || id.startsWith('summary:') || id.startsWith('group:');
  function partsOf(id) {
    const head = (title, extra = '') => '<div class="tfMoreHead">' + (more?.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + ARROW + '</button>' : '') +
      '<div class="activityTitle" id="tfMoreTitle">' + esc(title) + '</div>' + extra + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + CLOSE + '</button></div>';
    const now = (text, sub) => '<div class="tfMoreNow"><div class="tfMoreState">' + esc(text) + '</div>' + (sub ? '<div class="tfMoreSub">' + esc(sub) + '</div>' : '') + '</div>';
    const list = listHtml;
    if (id === 'favourites') {
      const stars = starred(), inStars = new Set(stars);
      const groups = [{ name: 'Starred', ids: stars }, { name: 'Home', ids: model.homeVacuums }, { name: 'Security', ids: [...model.security.alarms, ...model.security.locks] }, ...model.rooms.map((r) => ({ name: r.name, ids: [...r.actions, ...r.plugs] }))]
        .map((g, i) => (i ? { ...g, ids: g.ids.filter((x) => !inStars.has(x)) } : g)).filter((g) => g.ids.length);
      return [head('Favourites'), now(stars.length ? stars.length + ' starred' : 'None starred'), list(groups, { star: true }, true)];
    }
    // a summary (Matt, 27 Oct: room to breathe, and more control than opening tiles): its line, with all on or off for
    // the lights, then its devices by room, each as its tile with all its controls; readings stay rows in a card
    if (id.startsWith('summary:')) {
      const s = summaryData().find((x) => x.key === id.slice(8));
      if (!s) return null;
      const lights = s.key === 'light' ? (s.groups || []).flatMap((g) => g.ids) : [], anyOn = lights.some((x) => states[x]?.state === 'on');
      const all = lights.length ? '<button class="primary" type="button" data-acts="' + acts(lights.map((x) => ['light', anyOn ? 'turn_off' : 'turn_on', x])) + '">' + (anyOn ? 'Turn all off' : 'Turn all on') + '</button>' : '';
      return [head(s.name), '<div class="tfMoreNowRow">' + now(s.value) + all + '</div>', ...(s.groups || []).map((g) => {
        const tiles = g.ids.filter((x) => ACTION_DOMAINS.includes(x.split('.')[0])), rows = g.ids.filter((x) => !tiles.includes(x));
        return '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + esc(g.name) + '</div>' +
          (tiles.length ? '<div class="tfMoreActions">' + tiles.map((x) => actionTile(x, true)).join('') + '</div>' : '') +
          (rows.length ? '<div class="tfMoreTiles">' + rows.map((x) => deviceRow(x, {})).join('') + '</div>' : '') + '</div>';
      })];
    }
    // a room's lights, covers or plugs, opened from its area card's tile (Matt, 27 Oct): laid out as a summary, all on or
    // off beside its line
    if (id.startsWith('group:')) {
      const [, roomId, key] = id.split(':'), r = model.rooms.find((x) => x.id === roomId), k = r && roomKeys(r).find((x) => x.key === key);
      if (!k) return null;
      const ids = groupIds(r, key), tiles = ids.filter((x) => ACTION_DOMAINS.includes(x.split('.')[0])), rows = ids.filter((x) => !tiles.includes(x));
      const all = k.acts ? '<button class="primary" type="button" data-acts="' + acts(k.acts) + '">' + (k.on ? 'Turn all off' : 'Turn all on') + '</button>' : '';
      return [head(r.name + ' ' + k.label.toLowerCase()), '<div class="tfMoreNowRow">' + now(k.value) + all + '</div>', '<div class="tfMoreGroup">' +
        (tiles.length ? '<div class="tfMoreActions">' + tiles.map((x) => actionTile(x, true)).join('') + '</div>' : '') +
        (rows.length ? '<div class="tfMoreTiles">' + rows.map((x) => deviceRow(x, {})).join('') + '</div>' : '') + '</div>'];
    }
    const d = id.split('.')[0], st = states[id];
    const s = ACTION_DOMAINS.includes(d) ? specFor(id) : { sections: [] };
    return [
      head(nameOf(id)),
      now(valueOf(id), st.last_changed && ago(Date.parse(st.last_changed))),
      d === 'cover' && '<div data-cover-art="' + esc(id) + '"></div>',
      ...s.sections.filter(Boolean),
      detailsOf(id) && '<button class="tfDetailsBtn" type="button" data-details aria-expanded="' + Boolean(more?.details) + '" aria-controls="tfMoreSide"><span>Details</span>' + CHEVRON + '</button>',
    ].filter(Boolean);
  }
  const detailsOf = (id) => (special(id) ? '' : detailsHtml(id) + madeUpNote(id));
  let moreSide = '';
  function toggleDetails(open) {
    if (!more) return;
    more.details = open;
    renderMore();
    sheet.querySelector(open ? '[data-details-close]' : '[data-details]')?.focus({ preventScroll: true });
  }
  // a cover's drawing in its window: kept across redraws so it can keep moving
  const coverView = (id) => {
    const st = states[id], pos = posOf(id), target = coverValue(id);
    return { kind: coverKind(st), name: nameOf(id), text: valueOf(id), pos, target: Math.abs(target - pos) > 0.5 ? target : null, moving: st.state === 'opening' || st.state === 'closing', tilt: tiltOf(id) ?? 100, canSet: has(id, SET_POSITION) };
  };
  // a cover's drawing in each place it's drawn (its tile, the dialog), kept across redraws so it can keep moving
  function mountArt(scope) {
    scope.querySelectorAll('[data-cover-art]').forEach((slot) => {
      const id = slot.dataset.coverArt, key = slot.dataset.artKey || 'more:' + id;
      let art = arts.get(key);
      if (!art) { art = createCoverArt({ onMove: (v) => holdCover(id, v), onSet: (v) => { holdCover(id, v); commit('pos', id); } }); art.coverId = id; arts.set(key, art); }
      slot.replaceWith(art.el);
      art.update(coverView(id));
    });
  }
  const artsOf = (id) => [...arts.values()].filter((art) => art.coverId === id);
  const syncArts = () => arts.forEach((art) => { if (states[art.coverId]) art.update(coverView(art.coverId)); });
  // a drawing no longer on the page (its dialog closed, or its tile stopped showing it) stops
  const tidyArts = () => { arts.forEach((art, key) => { if (!art.el.isConnected) { art.destroy(); arts.delete(key); } }); syncArts(); };
  function renderMore() {
    if (!more || !(special(more.id) || states[more.id])) { sheet.hidden = true; return; }
    if ([...dragging.keys()].some((k) => k.endsWith('|' + more.id))) { syncArts(); return; }
    const parts = partsOf(more.id), box = sheet.querySelector('.tfMore');
    if (!parts) { closeMore(); return; }
    const was = focusOf(sheet), side = detailsOf(more.id);
    const wide = more.id.startsWith('summary:') || more.id.startsWith('group:');
    if (sheet.hidden || !box || parts.length !== moreParts.length || box.classList.contains('wide') !== wide) {
      // drawn again while open (a light turning off loses its colour): it stays scrolled where it was
      const keep = !sheet.hidden && box ? box.scrollTop : 0;
      // the dialog and, beside it, its details: one dialog for screen readers
      sheet.innerHTML = '<div class="tfMorePair" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (wide ? ' wide' : '') + '">' + parts.join('') + '</section>' +
        (side ? '<aside class="tfMoreSide" id="tfMoreSide" aria-label="Details"><div class="tfMoreSideInner"><div class="tfMoreHead"><button class="tfBack" type="button" data-details-close aria-label="Back">' + ARROW + '</button>' +
          '<div class="activityTitle">Details</div></div><div class="tfMoreSideBody">' + side + '</div></div></aside>' : '') + '</div>';
      moreSide = side;
      sheet.hidden = false;
      fitDetails();
      mountArt(sheet);
      mountDacs(sheet);
      fillIcons(sheet);
      if (keep) sheet.querySelector('.tfMore').scrollTop = keep;
      refocus(sheet, was);
      if (!sheet.contains(root.activeElement)) sheet.querySelector('[data-more-close]')?.focus({ preventScroll: true });
    } else {
      // only the parts that changed, so the drawing and a focused button stay
      parts.forEach((p, i) => {
        if (p === moreParts[i] || p.includes('data-cover-art') || box.children[i].contains(root.activeElement?.matches?.('input,select') ? root.activeElement : null)) return;
        if ([...dragging.keys()].some((k) => box.children[i].querySelector('[data-drag="' + CSS.escape(k) + '"]'))) return;
        const t = document.createElement('div');
        t.innerHTML = p;
        const next = t.firstElementChild;
        box.children[i].replaceWith(next);
        fillIcons(next);
        mountDacs(next);
      });
      if (side !== moreSide) { const body = sheet.querySelector('.tfMoreSideBody'); if (body) body.innerHTML = side; moreSide = side; }
      if (!sheet.contains(root.activeElement)) refocus(sheet, was);
    }
    sheet.querySelector('.tfMorePair')?.classList.toggle('details', Boolean(more.details && side));
    moreParts = parts;
    syncArts();
  }
  // "5 minutes ago" moves on while it's open
  setInterval(() => { if (more) renderMore(); }, 15 * 1000);
  function openMore(id, opener) {
    // opened from inside the dialog (a summary's device): Back returns there
    const inside = Boolean(more && opener && sheet.contains(opener));
    more = { id, opener: inside ? more.opener : opener, back: inside ? more : null };
    showMore();
  }
  function showMore() {
    moreParts = [];
    sheet.hidden = true;
    arts.forEach((art, k) => { if (k !== more.id && sheet.contains(art.el)) { art.destroy(); arts.delete(k); } });
    renderMore();
  }
  function closeMore() {
    const opener = more?.opener;
    more = null;
    arts.forEach((art, k) => { if (sheet.contains(art.el)) { art.destroy(); arts.delete(k); } });
    dacs.forEach((el, k) => { if (k.startsWith('more:')) dacs.delete(k); });
    sheet.hidden = true;
    sheet.innerHTML = '';
    // focus goes back to what opened it, without moving the page
    const quiet = { preventScroll: true };
    if (opener?.isConnected) opener.focus(quiet);
    else if (opener?.dataset?.more) grid.querySelector('[data-more="' + CSS.escape(opener.dataset.more) + '"]')?.focus(quiet);
    else if (opener?.dataset?.summary) grid.querySelector('[data-summary="' + CSS.escape(opener.dataset.summary) + '"]')?.focus(quiet);
    else if (opener?.hasAttribute?.('data-favs-edit')) grid.querySelector('[data-favs-edit]')?.focus(quiet);
  }

  /* graphs: the last 24 hours of an open reading, and the balcony's solar */
  function plot(svg, pts, label, opts = {}) {
    const vals = pts.map((p) => p[1]), min = opts.zero ? 0 : Math.min(...vals), max = Math.max(...vals);
    const W = Math.max(120, svg.clientWidth || 260), H = Math.max(60, svg.clientHeight || 130), top = 8, bottom = H - 20;
    const t0 = Date.now() - 24 * 3600 * 1000, span = 24 * 3600 * 1000;
    const x = (t) => Math.max(0, Math.min(W, ((t - t0) / span) * W));
    const y = (v) => (max === min ? (top + bottom) / 2 : bottom - ((v - min) / (max - min)) * (bottom - top));
    let d = 'M' + x(pts[0][0]).toFixed(1) + ' ' + y(pts[0][1]).toFixed(1);
    for (let i = 1; i < pts.length; i++) d += opts.smooth ? 'L' + x(pts[i][0]).toFixed(1) + ' ' + y(pts[i][1]).toFixed(1) : 'H' + x(pts[i][0]).toFixed(1) + 'V' + y(pts[i][1]).toFixed(1);
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    svg.setAttribute('aria-label', label);
    svg.innerHTML = '<path d="' + d + 'V' + bottom + 'H' + x(pts[0][0]).toFixed(1) + 'Z" fill="' + (opts.colour || 'var(--primary)') + '" fill-opacity=".14"/>' +
      '<path d="' + d + '" fill="none" stroke="' + (opts.colour || 'var(--primary)') + '" stroke-width="2" stroke-linejoin="round"/>' +
      '<text x="0" y="' + (H - 4) + '">24 h ago</text><text x="' + W + '" y="' + (H - 4) + '" text-anchor="end">Now</text>';
  }
  function madeUpHistory(id) {
    const v = Number(states[id]?.state), now = Date.now();
    // a meter that counts up through the day (the made-up energy): from nothing at midnight to now's value
    if (attr(id).state_class === 'total_increasing') {
      const midnight = new Date().setHours(0, 0, 0, 0), span = Math.max(1, now - midnight);
      return [...Array(49)].map((_, i) => midnight + (span * i) / 48).map((t) => [t, Math.round(v * Math.pow((t - midnight) / span, 1.3) * 100) / 100]);
    }
    return [...Array(48)].map((_, i) => [now - (48 - i) * 30 * 60 * 1000, Math.round(v * (0.96 + 0.04 * Math.sin(i / 6)) * 10) / 10]);
  }
  async function drawHistory(id, into) {
    let h = history.get(id);
    if (id.endsWith('_solar_power')) h = { at: Date.now(), points: solarHistory() };
    else if (isMadeUp(id)) h = { at: Date.now(), points: madeUpHistory(id) };
    else if (!h || Date.now() - h.at > 5 * 60 * 1000) {
      try {
        const start = new Date(Date.now() - 24 * 3600 * 1000).toISOString();
        const res = await callWS({ type: 'history/history_during_period', start_time: start, entity_ids: [id], minimal_response: true, no_attributes: true, significant_changes_only: false });
        const points = (res?.[id] || []).map((r) => [r.lu != null ? r.lu * 1000 : Date.parse(r.last_updated || r.last_changed), Number(r.s ?? r.state)]).filter(([t, v]) => Number.isFinite(t) && Number.isFinite(v));
        h = { at: Date.now(), points };
      } catch (_e) { h = { at: Date.now(), points: [] }; }
      history.set(id, h);
    }
    const svg = into || grid.querySelector('[data-graph="' + CSS.escape(id) + '"]');
    if (!svg) return;
    const st = states[id], unit = st?.attributes?.unit_of_measurement || '';
    const pts = h.points.slice();
    const now = Number(st?.state);
    if (Number.isFinite(now) && !id.endsWith('_solar_power')) pts.push([Date.now(), now]);
    if (pts.length < 2) { svg.setAttribute('aria-label', nameOf(id) + ': no history for the last 24 hours'); svg.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>'; return; }
    const vals = pts.map((p) => p[1]), min = Math.min(...vals), max = Math.max(...vals);
    const f = (v) => v.toLocaleString(undefined, { maximumFractionDigits: Math.abs(v) >= 100 ? 0 : 1 });
    const growing = st?.attributes?.state_class === 'total_increasing';
    plot(svg, pts, nameOf(id) + ', last 24 hours: ' + (growing ? '+' + f(vals[vals.length - 1] - vals[0]) : (min === max ? f(min) : f(min) + ' to ' + f(max))) + (unit ? ' ' + unit : ''), { smooth: id.endsWith('_solar_power'), zero: id.endsWith('_solar_power') });
  }
  function drawSolar() {
    const svg = grid?.querySelector('[data-solar]');
    if (!svg) return;
    const pts = solarHistory();
    plot(svg, pts, 'Solar, last 24 hours: up to ' + num(Math.max(...pts.map((p) => p[1])), 1) + ' kW', { smooth: true, zero: true, colour: '#ffaa00' });
  }

  /* interactions */
  // where a cover was sent, until it gets there: its blocks show it, and its drawing's outline waits there
  function noteGoal(service, d) {
    const id = d.entity_id, g = goals.get(id) || {};
    const pos = { open_cover: 100, close_cover: 0, set_cover_position: d.position, toggle: posOf(id) > 0 ? 0 : 100 }[service];
    const tilt = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: d.tilt_position }[service];
    if (pos != null) g.pos = pos;
    if (tilt != null) g.tilt = tilt;
    if (service === 'stop_cover') { delete g.pos; delete g.tilt; }
    if (service === 'stop_cover_tilt') delete g.tilt;
    g.at = Date.now();
    goals.set(id, g);
  }
  // a light turned on without a brightness comes back at its last one (Matt, 28 Oct: some lights come on at 100%
  // otherwise), whether this page or the Dual Axis Controller turns it on; with none remembered yet, the light decides
  function asLastOn(domain, service, data) {
    const id = data?.entity_id;
    if (domain !== 'light' || typeof id !== 'string' || !lastBright[id] || !dimmable(id) || data.brightness_pct != null || data.brightness != null) return [service, data];
    if (service !== 'turn_on' && !(service === 'toggle' && states[id]?.state !== 'on')) return [service, data];
    return ['turn_on', { ...data, brightness_pct: lastBright[id] }];
  }
  function send(domain, service, id, data) {
    let d = { entity_id: id, ...(data || {}) };
    [service, d] = asLastOn(domain, service, d);
    if (domain === 'cover') noteGoal(service, d);
    used[id] = (used[id] || 0) + 1;
    local.set(USED_KEY, JSON.stringify(used));
    if (house.call(domain, service, d)) return Promise.resolve();
    return Promise.resolve(callService(domain, service, d));
  }
  function run(spec) {
    const [domain, service, id, json] = spec.split('|');
    send(domain, service, id, json ? JSON.parse(json) : null).catch(() => {});
  }
  // a cover's target while it's held (its drawing, its blocks or the keys): every view of it follows
  function holdCover(id, v) {
    dragging.set('pos|' + id, v);
    units.delete(id);
    moreParts = moreParts.map(() => '');
    [grid, sheet].forEach((scope) => scope.querySelectorAll('[data-blocks="' + CSS.escape(id) + '"]').forEach((b) => paintBlocks(b, v)));
    const meta = grid.querySelector('.tfAction[data-k="' + CSS.escape(id) + '"] .tfName .activityRowMeta');
    if (meta) meta.textContent = Math.round(v) + '%';
    if (more?.id === id) {
      const st = sheet.querySelector('.tfMoreState'), sub = sheet.querySelector('.tfMoreSub');
      if (st) { st.textContent = Math.round(v) + '%'; st.classList.add('live'); }
      if (sub) sub.textContent = 'Currently ' + posOf(id) + '%';
    }
    artsOf(id).forEach((art) => art.update(coverView(id)));
  }
  const keyStep = (ev, v) => {
    const st = ev.shiftKey ? 10 : 1;
    const n = { ArrowUp: v + st, ArrowRight: v + st, ArrowDown: v - st, ArrowLeft: v - st, PageUp: v + 25, PageDown: v - 25, Home: 0, End: 100 }[ev.key];
    return n == null ? null : Math.max(0, Math.min(100, Math.round(n)));
  };
  // the blocks: a tap goes to that block's stop; holding (350 ms) or dragging makes them a 1% slider that eases after
  // the pointer, with the value over the fill, and lets go there
  function holdBlocks(el, ev) {
    const id = el.dataset.blocks;
    el.setPointerCapture?.(ev.pointerId);
    const at = (e) => { const r = el.getBoundingClientRect(); return Math.max(0, Math.min(100, ((e.clientX - r.left) / r.width) * 100)); };
    const start = at(ev), x0 = ev.clientX;
    let fine = false, live = coverValue(id), tx = start, raf = 0;
    const chase = () => { live = Math.abs(tx - live) < 0.2 ? tx : live + (tx - live) * 0.14; holdCover(id, live); raf = requestAnimationFrame(chase); };
    const goFine = () => { if (fine) return; fine = true; el.classList.add('fine'); raf = requestAnimationFrame(chase); };
    const hold = setTimeout(goFine, 350);
    const move = (e) => { tx = at(e); if (Math.abs(e.clientX - x0) > 6) { clearTimeout(hold); goFine(); } };
    const up = () => {
      clearTimeout(hold);
      cancelAnimationFrame(raf);
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerup', up);
      el.removeEventListener('pointercancel', up);
      el.classList.remove('fine');
      holdCover(id, fine ? Math.round(live) : (Math.min(3, Math.floor(start / 25)) + 1) * 25);
      commit('pos', id);
    };
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerup', up);
    el.addEventListener('pointercancel', up);
  }
  function openReading(el) {
    const [key, id] = el.dataset.open.split('|');
    const c = el.closest('.tfCard');
    open = { key, id, h: c ? Math.round(c.getBoundingClientRect().height) : 0 };
    units.delete(key);
    refresh();
    grid.querySelector('.tfOpen [data-close]')?.focus({ preventScroll: true });
  }
  function pickArea(panel) {
    activeArea = panel.dataset.area;
    // in place, so the accordion slides like the move panels
    grid.querySelectorAll('.tfAreaPanel').forEach((p) => { const on = p === panel; p.classList.toggle('active', on); p.setAttribute('aria-expanded', String(on)); p.querySelector('.panelExpanded')?.toggleAttribute('inert', !on); });
    units.set('areas', areasHtml(grid.querySelector('[data-k="areas"]')?.style.order || 1));
  }
  // what a bar sets, from 0–1 along it
  const DRAG = {
    bright: { value: (id, f) => Math.round(f * 100), text: (id, v) => (v ? v + '%' : 'Off'), send: (id, v) => (v > 0 ? ['light', 'turn_on', { brightness_pct: v }] : ['light', 'turn_off', {}]) },
    ct: { value: (id, f) => { const [lo, hi] = kelvinRange(id); return Math.round(lo + f * (hi - lo)); }, text: (id, v) => v.toLocaleString() + 'k', send: (id, v) => ['light', 'turn_on', { color_temp_kelvin: v }] },
    hue: { value: (id, f) => Math.round(f * 360), text: () => 'Colour', send: (id, v) => ['light', 'turn_on', { hs_color: [v, Math.max(60, attr(id).hs_color?.[1] || 100)] }] },
    pos: { value: (id, f) => Math.round(f * 100), text: (id, v) => Math.round(v) + '%', send: (id, v) => ['cover', 'set_cover_position', { position: Math.round(v) }] },
    tilt: { value: (id, f) => Math.round(f * 100), text: (id, v) => 'Tilt ' + v + '%', send: (id, v) => ['cover', 'set_cover_tilt_position', { tilt_position: v }] },
    vol: { value: (id, f) => Math.round(f * 100) / 100, text: (id, v) => Math.round(v * 100) + '%', send: (id, v) => ['media_player', 'volume_set', { volume_level: v }] },
  };
  function showDrag(bar, kind, id, f) {
    const v = DRAG[kind].value(id, f);
    dragging.set(kind + '|' + id, v);
    const pct = Math.round(f * 100) + '%';
    const i = bar.querySelector('i');
    if (kind === 'tilt') {
      // the tilt bar's fill sits 3 in from its edge; Shut and Open turn white once the fill is under them
      i.style.width = 'calc((100% - 6px) * ' + f + ')';
      const [shut, open] = bar.querySelectorAll('span');
      shut.classList.toggle('lit', f > 0.08);
      open.classList.toggle('lit', f > 0.92);
      units.delete(id);
      moreParts = moreParts.map(() => '');
      artsOf(id).forEach((art) => art.update(coverView(id)));
    } else if (i) i.style.width = pct;
    else { let b = bar.querySelector('b'); if (!b) { b = document.createElement('b'); bar.appendChild(b); } b.style.left = pct; }
    bar.setAttribute('aria-valuenow', String(Math.round(f * 100)));
    const meta = (bar.closest('.tfAction') || bar.closest('.tfMore'))?.querySelector('.tfName .activityRowMeta, .tfMoreState');
    if (meta) meta.textContent = DRAG[kind].text(id, v);
  }
  function commit(kind, id) {
    const v = dragging.get(kind + '|' + id);
    const [domain, service, data] = DRAG[kind].send(id, v);
    const done = () => setTimeout(() => { dragging.delete(kind + '|' + id); refresh(); }, 1500);
    send(domain, service, id, data).then(done, done);
  }
  // the same controls work on the page and in the stand-in more-info
  function bindControls(el) {
    el.addEventListener('click', (ev) => {
      const t = ev.target.closest('[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-energy-pick],.tfAreaPanel');
      if (boardOpen && !ev.target.closest('.tfBoardMenu,[data-board-more]')) closeBoardMenu();
      if (!t || !el.contains(t) || t.disabled) return;
      if (t.dataset.boardMore) { if (boardOpen?.key === t.dataset.boardMore) closeBoardMenu(true); else openBoardMenu(t.dataset.boardMore, t); }
      else if (t.dataset.boardAct) boardAct(boardOpen.key, t.dataset.boardAct);
      else if (t.dataset.boardShow) showCard(t.dataset.boardShow);
      else if (t.dataset.energyPick) pickEnergy(t.dataset.energyPick);
      else if (t.dataset.act) run(t.dataset.act);
      else if (t.hasAttribute('data-details')) toggleDetails(!more?.details);
      else if (t.hasAttribute('data-details-close')) toggleDetails(false);
      else if (t.dataset.summary) openSummary(t.dataset.summary, t);
      else if (t.dataset.star) toggleStar(t.dataset.star);
      else if (t.hasAttribute('data-more-back')) { more = more.back; showMore(); }
      else if (t.hasAttribute('data-favs-edit')) openMore('favourites', t);
      else if (t.dataset.acts) JSON.parse(t.dataset.acts).forEach(([domain, service, id, data]) => send(domain, service, id, data).catch(() => {}));
      else if (t.dataset.more) openMore(t.dataset.more, t);
      else if (t.hasAttribute('data-more-close')) closeMore();
      else if (t.dataset.go) openArea('room:' + t.dataset.go);
      else if (t.hasAttribute('data-area-back')) closeArea();
      else if (t.dataset.open) openReading(t);
      else if (t.hasAttribute('data-close')) { const was = open; open = null; units.delete(was.key); refresh(); grid.querySelector('[data-open="' + CSS.escape(was.key + '|' + was.id) + '"]')?.focus({ preventScroll: true }); }
      else if (t.classList.contains('tfAreaPanel') && !t.classList.contains('active')) pickArea(t);
    });
    el.addEventListener('keydown', (ev) => {
      const t = ev.target;
      if (t.dataset?.open && (ev.key === 'Enter' || ev.key === ' ')) { ev.preventDefault(); openReading(t); }
      if (t.dataset?.energyPick && (ev.key === 'Enter' || ev.key === ' ')) { ev.preventDefault(); pickEnergy(t.dataset.energyPick); }
      if (t.classList?.contains('tfAreaPanel') && (ev.key === 'Enter' || ev.key === ' ')) { ev.preventDefault(); pickArea(t); }
      if (t.dataset?.summary && (ev.key === 'Enter' || ev.key === ' ')) { ev.preventDefault(); openSummary(t.dataset.summary, t); }
      if (ev.key === 'Escape' && boardOpen && el === grid) { ev.preventDefault(); closeBoardMenu(true); return; }
      if (ev.key === 'Escape' && editing && el === grid) { ev.preventDefault(); setEditing(false); $('dashEditNav')?.focus(); return; }
      if (ev.key === 'Escape' && areaPage && el === grid) { ev.preventDefault(); closeArea(); }
      // a cover's blocks: arrows 1 (10 with Shift), Page Up and Down 25, Home closed, End open; sent after a pause
      if (t.dataset?.blocks) {
        const id = t.dataset.blocks, n = keyStep(ev, Math.round(coverValue(id)));
        if (n == null) return;
        ev.preventDefault();
        holdCover(id, n);
        clearTimeout(keyTimers.get(id));
        keyTimers.set(id, setTimeout(() => commit('pos', id), 500));
        return;
      }
      if (t.dataset?.drag && ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(ev.key)) {
        ev.preventDefault();
        const [kind, id] = t.dataset.drag.split('|');
        const now = Number(t.getAttribute('aria-valuenow')) / 100;
        const f = ev.key === 'Home' ? 0 : ev.key === 'End' ? 1 : Math.max(0, Math.min(1, now + (ev.key === 'ArrowLeft' || ev.key === 'ArrowDown' ? -0.05 : 0.05)));
        showDrag(t, kind, id, f);
        commit(kind, id);
      }
    });
    // bars (Matt, 28 Oct): a tap on a light that's off turns it on as it was last (its faint line), never to where the
    // tap landed. A finger only moves a bar after a short hold, and then from where the bar is (a light that's off, from
    // where it last was), so a swipe across it scrolls the page and a quick touch changes nothing; held, it follows the
    // finger and sets on release. A mouse drags straight away, from the pointer
    el.addEventListener('pointerdown', (ev) => {
      const blocksEl = ev.target.closest('[data-blocks]');
      if (blocksEl && ev.button === 0) { ev.preventDefault(); holdBlocks(blocksEl, ev); return; }
      const bar = ev.target.closest('[data-drag]');
      if (!bar || ev.button > 0) return;
      const [kind, id] = bar.dataset.drag.split('|');
      if (kind === 'bright' && !dimmable(id)) { run(act('light', 'toggle', id)); return; }
      const off = kind === 'bright' && states[id]?.state !== 'on', finger = ev.pointerType !== 'mouse';
      const inset = kind === 'tilt' ? 3 : 0; // the tilt bar's fill sits 3 in
      const span = () => bar.getBoundingClientRect().width - inset * 2;
      const at = (e2) => { const r = bar.getBoundingClientRect(); return Math.max(0, Math.min(1, (e2.clientX - r.left - inset) / span())); };
      // waiting: a finger that may yet be a tap, a swipe or a hold; pressed: a mouse on a light that's off, which may
      // yet be a click; held: a finger moving the bar from where it was; dragging: a mouse moving it to the pointer
      let mode = finger ? 'waiting' : off ? 'pressed' : 'dragging', from = 0, fromX = 0;
      const x0 = ev.clientX, y0 = ev.clientY, moved = (e2, by) => Math.hypot(e2.clientX - x0, e2.clientY - y0) > by;
      const capture = () => { try { bar.setPointerCapture(ev.pointerId); } catch { /* a pointer that's already gone */ } };
      if (!finger) { ev.preventDefault(); capture(); }
      if (mode === 'dragging') showDrag(bar, kind, id, at(ev));
      const timer = finger && setTimeout(() => {
        if (mode !== 'waiting') return;
        mode = 'held';
        heldBar = bar;
        bar.classList.add('held');
        capture();
        if (navigator.userActivation?.hasBeenActive) navigator.vibrate?.(8); // a small buzz where phones allow it
        from = off ? (lastBright[id] ?? 100) / 100 : Number(bar.getAttribute('aria-valuenow')) / 100;
        fromX = x0;
        showDrag(bar, kind, id, from);
      }, BAR_HOLD_MS);
      const move = (e2) => {
        if (mode === 'waiting' && moved(e2, 8)) mode = 'gone';
        else if (mode === 'pressed' && moved(e2, 4)) mode = 'dragging';
        if (mode === 'held') showDrag(bar, kind, id, Math.max(0, Math.min(1, from + (e2.clientX - fromX) / span())));
        else if (mode === 'dragging') showDrag(bar, kind, id, at(e2));
      };
      const up = (e2) => {
        clearTimeout(timer);
        ['pointermove', 'pointerup', 'pointercancel'].forEach((t, i) => bar.removeEventListener(t, i ? up : move));
        bar.classList.remove('held');
        if (heldBar === bar) heldBar = null;
        if (mode === 'held' || mode === 'dragging') commit(kind, id);
        else if (e2.type === 'pointerup' && off && (mode === 'waiting' || mode === 'pressed')) send('light', 'turn_on', id).catch(() => {});
      };
      bar.addEventListener('pointermove', move);
      bar.addEventListener('pointerup', up);
      bar.addEventListener('pointercancel', up);
    });
    // once a bar is held, the finger moves it and not the page
    el.addEventListener('touchmove', (ev) => { if (heldBar && ev.cancelable) ev.preventDefault(); }, { passive: false });
  }
  if (grid && testFocus) {
    loadPrefs();
    bindControls(grid);
    bindControls(sheet);
    sheet.addEventListener('click', (ev) => { if (ev.target === sheet) closeMore(); });
    // Home, from an area's page, goes back to the house
    root.getElementById('homeNav')?.addEventListener('click', () => { if (areaPage) closeArea(); });
    // the dashboard's edit mode: the pencil in the bottom bar, and dragging on the board
    root.querySelector('.bottomNav')?.insertAdjacentHTML('beforeend', '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + PENCIL + '</button>');
    $('dashEditNav')?.addEventListener('click', () => setEditing(!editing));
    grid.addEventListener('pointerdown', boardDown);
    // a dashboard DAC's name opens its pad (5 rows) or closes it (3), as a reading opens to its graph
    grid.addEventListener('hass-action', (ev) => {
      const slot = ev.target.closest?.('.tfDac'), key = slot?.dataset.k;
      if (!key || !slot.dataset.dac.startsWith('dash:') || editing) return;
      ev.stopPropagation();
      if (dacOpen.has(key)) dacOpen.delete(key); else dacOpen.add(key);
      layoutBoard();
    });
    // the dashboard's bottom row holds as many tiles as fit, and its rows are measured again as the page changes size
    new ResizeObserver(() => { if (app.classList.contains('tfDash') && dashCols() !== dashColsSeen) refresh(); else queueFit(); }).observe(grid);
    window.addEventListener('resize', queueFit, { passive: true });
    // Escape folds the details away first, then closes
    sheet.addEventListener('keydown', (ev) => { if (ev.key === 'Escape') { ev.stopPropagation(); if (more?.details) toggleDetails(false); else closeMore(); } });
  }

  applyDensity();
  return {
    update(next) {
      if (!testFocus) return;
      const first = !Object.keys(states).length;
      states = next || {};
      // every dimmable light that's on, remembered at its brightness for when it next comes on (not only those drawn)
      for (const id in states) if (id.startsWith('light.') && states[id].state === 'on' && dimmable(id)) noteBright(id, brightnessOf(states[id]));
      if (first) render(); else refresh();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() { suspended = true; bento?.destroy(); bento = null; dashBentos?.forEach((b) => b.destroy()); dashBentos = null; },
    resume() {
      suspended = false;
      if (!testFocus || !grid?.querySelector('[data-tf]')) return;
      if (bentoBox.isConnected) placeBento(bentoBox.style.order);
      placeDash(true);
    },
  };
}
