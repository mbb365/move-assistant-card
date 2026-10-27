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
  weather: { name: 'Weather', icon: '', colour: '' },
  energy: { name: 'Energy', icon: 'mdi:lightning-bolt', colour: '#ffc107' },
};
const WEATHER_NAMES = { 'clear-night': 'Clear, night', partlycloudy: 'Partly cloudy', 'lightning-rainy': 'Lightning, rainy', 'snowy-rainy': 'Snowy, rainy', 'windy-variant': 'Windy, cloudy' };
const HOUSE_KEY = 'move_assistant_house'; // the house page's own saved data (its favourites), apart from the moves
const USED_KEY = 'move-assistant-house-used'; // how often each device is used here, for suggested favourites
const TOGGLES = ['switch', 'fan', 'input_boolean', 'automation'];
// How more-info opens on the house page (Matt picked these two, 27 Oct): a popup in the middle, or a sheet from the
// bottom, 640 wide. Set in Settings → Appearance → More info and remembered in this browser; both rise from the
// bottom on phones.
const LOOK_KEY = 'move-assistant-house-look';
const MORE_STYLES = [['popup', 'Popup'], ['sheet', 'Sheet']];
const CHEVRON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
// Edit mode (Matt, 27 Oct): the pencil in the bottom bar. What each kind of tile can show, by its sections' names; its
// sizes; and the tools' icons
const PART_NAMES = { art: 'Drawing', bright: 'Brightness', ct: 'Warm to cool', hue: 'Colour', blocks: 'Position', tilt: 'Tilt', buttons: 'Open, stop and close', step: 'Target', modes: 'Modes', playback: 'Playback', volume: 'Volume', controls: 'Buttons', rooms: 'Rooms to clean' };
const SIZES = [['small', 'Small'], ['half', 'Half'], ['full', 'Full']];
const svgIcon = (paths) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + paths.map((d) => '<path d="' + d + '"/>').join('') + '</svg>';
const PENCIL = svgIcon(['M12 20H21', 'M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z']);
const TICK = svgIcon(['M20 6L9 17L4 12']);
const UP = svgIcon(['M12 19V5', 'M5 12L12 5L19 12']);
const DOWN = svgIcon(['M12 5V19', 'M19 12L12 19L5 12']);
const EARLIER = svgIcon(['M15 18L9 12L15 6']);
const LATER = svgIcon(['M9 18L15 12L9 6']);
const GEAR = svgIcon(['M21 4H14', 'M10 4H3', 'M21 12H12', 'M8 12H3', 'M21 20H16', 'M12 20H3', 'M14 2V6', 'M8 10V14', 'M16 18V22']);
const GRIP = '<svg viewBox="0 0 24 24" aria-hidden="true">' + [[9, 6], [15, 6], [9, 12], [15, 12], [9, 18], [15, 18]].map(([x, y]) => '<circle cx="' + x + '" cy="' + y + '" r="1.6" fill="currentColor"/>').join('') + '</svg>';
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
};
const STAR = (on) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (on ? 'currentColor' : 'none') + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>';
// lock: can open the door; alarm: arm home, away, night
const LOCK_OPEN = 1;
const ALARM_MODES = [['disarmed', 'Off', 'alarm_disarm', 0], ['armed_home', 'Home', 'alarm_arm_home', 1], ['armed_away', 'Away', 'alarm_arm_away', 2], ['armed_night', 'Night', 'alarm_arm_night', 4]];
const ALARM_STATE = { disarmed: 'Disarmed', armed_home: 'Armed home', armed_away: 'Armed away', armed_night: 'Armed night', armed_vacation: 'Armed vacation', arming: 'Arming', pending: 'Pending', triggered: 'Triggered', disarming: 'Disarming' };
const COLOUR_MODES = ['hs', 'xy', 'rgb', 'rgbw', 'rgbww'];
const OPEN_CLASSES = ['door', 'window', 'garage_door', 'opening'];
const ACTION_DOMAINS = ['light', 'climate', 'cover', 'humidifier', 'media_player', 'vacuum', 'lock', 'alarm_control_panel', 'valve'];

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
  let more = null; // { id, opener } while the stand-in more-info is open
  const history = new Map(); // entity id → { at, points }
  const dragging = new Map(); // "kind|entity id" → value while a bar is held
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
  // Edit mode's choices, saved with the favourites (prefs, HOUSE_KEY): sections (Matt's own: { id, name }), order
  // ({ sections: [section keys], blocks: { section key: [entity ids] } }), place (entity id → the section it was moved
  // to), hidden (entity ids), hiddenAreas (area ids whose card is hidden), main (area id → the entity its card shows
  // big), show (entity id → { size, hide: [parts], art, graph }). Home Assistant's areas are never changed.
  let editing = false, saveTimer = 0;
  const homeOf = new Map(); // entity id → the section it belongs to before it's moved
  const showOf = (id) => prefs.show?.[id] || {};
  const isHidden = (id) => (prefs.hidden || []).includes(id);
  const hiddenArea = (areaId) => (prefs.hiddenAreas || []).includes(areaId);
  function savePrefs() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => Promise.resolve(callWS({ type: 'frontend/set_user_data', key: HOUSE_KEY, value: prefs })).catch(() => {}), 400);
  }
  const look = (() => { try { return { more: JSON.parse(local.get(LOOK_KEY))?.more === 'sheet' ? 'sheet' : 'popup' }; } catch (_e) { return { more: 'popup' }; } })();
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
      local.set(LOOK_KEY, JSON.stringify(look));
      applyLook();
      $('moreInfoChoice').querySelectorAll('[data-more-style]').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    });
  }
  let model = { rooms: [], vacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const units = new Map(); // card or tile key → the html last drawn
  let signature = '';
  const house = testFocus ? createHouse({ onChange: () => refresh() }) : null;
  if (testFocus) app.classList.add('house');
  // Home's weather is the bento (Figma "Weather bento"), at its drawn sizes; it stays mounted across redraws
  const bentoBox = Object.assign(document.createElement('div'), { className: 'tfBento' });
  let bento = null, suspended = false;
  function placeBento(order) {
    const id = weatherId();
    app.classList.toggle('houseBento', Boolean(id));
    if (!id) return;
    if (!bentoBox.isConnected) grid.append(bentoBox);
    bentoBox.style.order = order;
    if (!bento && !suspended) bento = mountWeatherBento(bentoBox, { getHass, entityId: id, style: 'bitmap' });
  }

  const attr = (id) => states[id]?.attributes || {};
  const nameOf = (id) => attr(id).friendly_name || id;
  const has = (id, bit) => isMadeUp(id) || (Number(attr(id).supported_features) & bit) === bit;
  const cap = (s) => { const t = String(s ?? '').replace(/_/g, ' '); return t.charAt(0).toUpperCase() + t.slice(1); };
  const num = (v, d = 1) => Number(v).toLocaleString(undefined, { minimumFractionDigits: d, maximumFractionDigits: d });
  const brightnessOf = (st) => (st?.state === 'on' ? (st.attributes.brightness != null ? Math.max(1, Math.round(st.attributes.brightness / 2.55)) : 100) : 0);
  const modesOf = (id) => attr(id).supported_color_modes || [];
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
    const tap = graph && !editing, spark = graph && showOf(id).graph;
    return '<div class="activityRow' + (spark ? ' tfGraphRow' : '') + (tap ? ' tap" role="button" tabindex="0" data-open="' + esc(cardKey + '|' + id) + '" aria-label="' + label + '. Show the last 24 hours"' : '" aria-label="' + label + '"') + '>' +
      '<div class="tfIcon" aria-hidden="true"' + iconSlot(id, iconFor(id)) + '></div>' +
      '<div><div class="activityRowName">' + esc(nameOf(id)) + '</div><div class="activityRowMeta">' + esc(valueOf(id)) + '</div></div>' +
      (editing && graph ? tool('data-tile-opts="' + esc(id) + '"', nameOf(id) + ' options', GEAR) : '') +
      (spark ? '<svg class="tfSpark" data-spark="' + esc(id) + '" role="img" aria-label="' + esc(nameOf(id)) + ', last 24 hours"></svg>' : '') + '</div>';
  }
  const sumRow = (name, value, icon) => '<div class="activityRow" aria-label="' + esc(name + ', ' + value) + '"><div class="tfIcon" aria-hidden="true"' + iconSlot('', icon, name) + '></div>' +
    '<div><div class="activityRowName">' + esc(name) + '</div><div class="activityRowMeta">' + esc(value) + '</div></div></div>';
  // a plug: its icon is the button
  function plugRow(id) {
    const on = states[id]?.state === 'on';
    return '<div class="activityRow tfPlug' + (on ? ' on' : '') + '"><button class="tfIcon" type="button" data-act="' + act('switch', 'toggle', id) + '" aria-label="Turn ' + esc(nameOf(id)) + (on ? ' off' : ' on') + '"' + iconSlot(id) + '></button>' +
      '<div><div class="activityRowName">' + esc(nameOf(id)) + '</div><div class="activityRowMeta">' + esc(valueOf(id)) + '</div></div></div>';
  }
  function openTile(id) {
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + iconSlot(id, iconFor(id)) + '></div>' +
      '<div><div class="activityRowName">' + esc(nameOf(id)) + '</div><div class="activityRowMeta">' + esc(valueOf(id)) + '</div></div>' +
      '<button class="tfBack" type="button" data-close aria-label="Close ' + esc(nameOf(id)) + '’s last 24 hours">' + ARROW + '</button></div>' +
      '<svg class="tfGraph" data-graph="' + esc(id) + '" role="img" aria-label="' + esc(nameOf(id)) + ', last 24 hours"></svg></div>';
  }
  // a card of readings; its title can open more-info (a plant)
  function card(key, order, title, rows, extra = '', moreId = null) {
    const isOpen = open && open.key === key;
    return '<section class="card tfCard' + (isOpen ? ' open' : '') + '" data-tf data-k="' + esc(key) + '" style="order:' + order + (isOpen && open.h ? ';min-height:' + open.h + 'px' : '') + '" aria-label="' + esc(title) + '">' +
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
  function bar(kind, id, frac, label, valueText, marker) {
    const f = frac == null ? null : Math.max(0, Math.min(1, frac)), pct = f == null ? 0 : Math.round(f * 100);
    return '<div class="tfBar ' + kind + '" role="slider" tabindex="0" aria-label="' + esc(label) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + pct + '"' + (valueText ? ' aria-valuetext="' + esc(valueText) + '"' : '') + ' data-drag="' + esc(kind + '|' + id) + '">' +
      (marker ? (f == null ? '' : '<b style="left:' + pct + '%"></b>') : '<i style="width:' + pct + '%"></i>') + '</div>';
  }
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
  function actionTile(id) {
    const s = specFor(id), show = showOf(id), size = show.size || 'half', hide = show.hide || [];
    const sections = size === 'small' ? [] : s.sections.map((sec, i) => (sec && !hide.includes((s.parts || [])[i]) ? sec : '')).filter(Boolean);
    const art = size !== 'small' && show.art && id.startsWith('cover.') ? '<div data-cover-art="' + esc(id) + '" data-art-key="tile:' + esc(id) + '"></div>' : '';
    const body = '<div class="tfActionHead">' + iconButton(id, s) + nameButton(id) + '</div>' + art + sections.join('');
    return '<div class="tfAction' + (s.on ? ' on' : '') + (size !== 'half' ? ' ' + size : '') + (isHidden(id) ? ' isHidden' : '') + '" data-k="' + esc(id) + '"' + (s.tone ? ' data-tone="' + s.tone + '"' : '') + '>' +
      (editing ? editBar(id) + '<div class="tfEditBody" inert>' + body + '</div>' : body) + '</div>';
  }
  const tool = (attrs, label, svg, off) => '<button class="tfTool" type="button" ' + attrs + ' aria-label="' + esc(label) + '"' + (off ? ' disabled' : '') + '>' + svg + '</button>';
  const editBar = (id) => '<div class="tfEditBar"><span class="tfTool tfGrip" data-drag-tile="' + esc(id) + '" aria-hidden="true">' + GRIP + '</span><span class="tfSpacer"></span>' +
    tool('data-tile-move="' + esc(id) + '|-1"', 'Move ' + nameOf(id) + ' earlier', EARLIER) + tool('data-tile-move="' + esc(id) + '|1"', 'Move ' + nameOf(id) + ' later', LATER) +
    tool('data-tile-opts="' + esc(id) + '"', nameOf(id) + ' options', GEAR) + '</div>' + (isHidden(id) ? '<span class="tfHiddenTag">Hidden</span>' : '');
  // what a tile can show: its sections that this device has, and a cover's drawing
  function partsFor(id) {
    const s = specFor(id), list = (s.parts || []).filter((p, i) => s.sections[i]);
    return id.startsWith('cover.') ? ['art', ...list] : list;
  }
  const held = (kind, id, fallback) => (dragging.has(kind + '|' + id) ? dragging.get(kind + '|' + id) : fallback);

  // each kind of device: whether it's on, its button, and its sections in order
  function specFor(id) {
    const st = states[id], a = st.attributes, d = id.split('.')[0];
    const toggle = (domain, label) => ({ act: act(domain, 'toggle', id), label });
    if (d === 'light') {
      // brightness, then warm to cool, then colour, each only if the light can do it
      const on = st.state === 'on', modes = modesOf(id), [kMin, kMax] = kelvinRange(id), b = held('bright', id, brightnessOf(st));
      const k = held('ct', id, on && a.color_mode === 'color_temp' ? a.color_temp_kelvin : null);
      const hue = held('hue', id, on && COLOUR_MODES.includes(a.color_mode) && a.hs_color ? a.hs_color[0] : null);
      return { on, button: toggle('light', 'Turn ' + nameOf(id) + (on ? ' off' : ' on')), parts: ['bright', 'ct', 'hue'], sections: [
        dimmable(id) && bar('bright', id, b / 100, nameOf(id) + ' brightness', b + '%'),
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

  /* area cards: one open, the others folded, like the move panels; Go takes you to the room. Open, a card shows the
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
    if (r.lights.length) keys.push({ key: 'lights', kind: 'control', tone: 'light', icon: AREA_ICON.lights, label: 'Lights', value: lit.length ? lit.length + ' of ' + r.lights.length + ' on' : 'All off', short: lit.length ? lit.length + ' on' : 'Off', on: lit.length > 0,
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
    r.alerts.forEach((id) => keys.push({ key: 'alert:' + id, kind: 'alert', icon: AREA_ICON.alert, label: attr(id).device_class === 'moisture' ? 'Water leak' : nameOf(id) + ' ' + valueOf(id).toLowerCase() }));
    return keys;
  }
  const keyButton = (k, cls, inner) => '<button class="' + cls + (k.on ? ' on' : '') + '" type="button" data-tone="' + k.tone + '" data-acts="' + acts(k.acts) + '" aria-label="' + esc(k.aria) + '" aria-pressed="' + k.on + '">' + inner + '</button>';
  const goButton = (r) => '<button class="pill" type="button" data-go="' + esc(r.id) + '" aria-label="Go to ' + esc(r.name) + '">Go</button>';
  const alertTags = (keys) => keys.filter((k) => k.kind === 'alert').map((k) => '<span class="sourceTag">' + esc(k.label) + '</span>').join(' ');
  // what a room's main can be: its readings, then its devices. Its temperature unless Matt picked another (prefs.main)
  const mainChoices = (r) => [...new Set([...r.readings, ...r.solar, ...r.openings, ...r.actions, ...r.plugs])].filter((id) => states[id]);
  function mainOf(r) {
    const ids = mainChoices(r), picked = prefs.main?.[r.id];
    return ids.includes(picked) ? picked : r.readings.find((id) => attr(id).device_class === 'temperature') || ids[0] || null;
  }
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
  // the open card: name, alerts and Go (and in edit mode its options); the main, which opens its more-info; up to four
  // controls as tiles, the icon the button
  function areaBody(r, keys, main) {
    const h = main && headline(main), sub = main ? mainSub(r, main, keys) : '';
    const tiles = keys.filter((k) => k.kind === 'control').slice(0, 4).map((k) => '<div class="tfATile' + (k.on ? ' on' : '') + '" data-tone="' + k.tone + '">' + keyButton(k, 'tfIcon', k.icon) +
      '<div><div class="activityRowName">' + esc(k.label) + '</div><div class="activityRowMeta">' + esc(k.value) + '</div></div></div>');
    return '<div class="workoutPanelTop"><div><div class="tfAName">' + esc(r.name) + '</div>' + alertTags(keys) + '</div><div class="tfATools">' +
      (editing ? tool('data-sec-opts="' + esc('room:' + r.id) + '"', r.name + ' options', GEAR) : '') + goButton(r) + '</div></div>' +
      (main ? '<button class="tfABig" type="button" data-more="' + esc(main) + '" aria-label="' + esc(nameOf(main) + ', ' + valueOf(main) + '. More info') + '">' +
        '<span class="tfABigMain' + (h.text.length > 7 ? ' long' : '') + '">' + esc(h.text) + (h.unit ? '<span class="tfABigUnit">' + esc(h.unit) + '</span>' : '') + '</span>' +
        (sub ? '<span class="tfABigSub">' + esc(sub) + '</span>' : '') + '</button>' : '') +
      (tiles.length ? '<div class="tfATiles">' + tiles.join('') + '</div>' : '');
  }
  function areaPanel(r) {
    const isActive = r.id === activeArea, keys = roomKeys(r), main = mainOf(r), h = main && headline(main);
    // a folded card's content can't be reached until it's open; folded, it shows the main, the name and what's on
    return '<article class="workoutPanel tfAreaPanel' + (isActive ? ' active' : '') + (hiddenArea(r.id) ? ' isHidden' : '') + '" data-area="' + esc(r.id) + '" tabindex="0" aria-expanded="' + isActive + '" aria-label="' + esc(r.name) + '">' +
      '<div class="panelExpanded"' + (isActive ? '' : ' inert') + '>' + areaBody(r, keys, main) + '</div>' +
      '<div class="panelCollapsed tfACollapsed"><span class="tfACMain">' + (h ? esc(h.text + (h.unit ? ' ' + h.unit : '')) : '') + '</span><div class="panelCollapsedText">' + esc(r.name) + '</div>' +
      '<span class="tfACOn">' + keys.filter((k) => k.on || k.kind === 'alert').map((k) => '<span class="tfACDot' + (k.kind === 'alert' ? ' alert' : '') + '" data-tone="' + (k.tone || '') + '">' + k.icon + '</span>').join('') + '</span></div></article>';
  }
  let areaRooms = []; // the rooms with area cards, in Matt's order
  const areasHtml = (order) => '<div class="tfAreas" data-tf data-k="areas" style="order:' + order + '"><div class="sectionLabel tfSideLabel">Areas</div>' +
    '<section class="workoutGallery tfAreaGallery" aria-label="Areas">' + areaRooms.map(areaPanel).join('') + '</section></div>';

  /* sections: Home, Security, each room and Matt's own, in his order, each with its devices in his order */
  function sectionsOf() {
    const natural = [
      { key: 'home', name: 'Home', ids: model.vacuums },
      { key: 'security', name: 'Security', ids: [...model.security.alarms, ...model.security.locks] },
      ...model.rooms.map((r) => ({ key: 'room:' + r.id, name: r.name, room: r, ids: r.actions })),
      ...(prefs.sections || []).map((c) => ({ key: 'sec:' + c.id, name: c.name, custom: c, ids: [] })),
    ];
    const byKey = new Map(natural.map((x) => [x.key, { ...x, ids: [] }]));
    homeOf.clear();
    natural.forEach((x) => x.ids.forEach((id) => {
      homeOf.set(id, x.key);
      byKey.get(byKey.has(prefs.place?.[id]) ? prefs.place[id] : x.key).ids.push(id);
    }));
    byKey.forEach((x) => { const saved = (prefs.order?.blocks?.[x.key] || []).filter((id) => x.ids.includes(id)); x.ids = [...saved, ...x.ids.filter((id) => !saved.includes(id))]; });
    const saved = (prefs.order?.sections || []).filter((k) => byKey.has(k));
    return [...saved, ...[...byKey.keys()].filter((k) => !saved.includes(k))].map((k) => byKey.get(k));
  }
  // a section's label; in edit mode with up, down and (for rooms and Matt's own) options
  function sectionLabel(key, x, i, n, order) {
    const tools = '<div class="tfTools">' + tool('data-sec-move="' + esc(x.key) + '|-1"', 'Move ' + x.name + ' up', UP, i === 0) + tool('data-sec-move="' + esc(x.key) + '|1"', 'Move ' + x.name + ' down', DOWN, i === n - 1) +
      (x.room || x.custom ? tool('data-sec-opts="' + esc(x.key) + '"', x.name + ' options', GEAR) : '') + '</div>';
    return '<div class="sectionLabel rowLabel tfLabel' + (editing ? ' tfEditLabel' : '') + '" data-tf data-k="' + esc(key) + '" tabindex="-1" style="order:' + order + '">' +
      (editing ? '<span>' + esc(x.name) + (x.room && hiddenArea(x.room.id) ? '<small>Area card hidden</small>' : '') + '</span>' + tools : esc(x.name)) + '</div>';
  }
  const editTopHtml = (order) => '<div class="tfEditTop" data-tf data-k="edit" style="order:' + order + '" role="region" aria-label="Editing the page">' +
    '<div class="tfEditTitle">Editing</div><div class="tfEditActions"><button class="pill" type="button" data-add-section>Add section</button><button class="primary" type="button" data-edit-done>Done</button></div></div>';

  /* favourites and summaries, as on Home Assistant's home view */
  const count = (n, one, many) => n + ' ' + (n === 1 ? one : many);
  const starred = () => (prefs.favourites ?? haHome.favorite_entities ?? []).filter((id) => states[id]);
  // starred first, then suggestions up to 8: Home Assistant's, then what's used most here, then what's on
  function favouriteIds() {
    const stars = starred();
    if (haHome.hide_suggested_entities) return stars;
    if (!suggested) {
      const most = Object.entries(used).sort((a, b) => b[1] - a[1]).map(([id]) => id);
      const actions = model.rooms.flatMap((r) => r.actions);
      suggested = [...new Set([...predicted, ...most, ...actions.filter((id) => specFor(id).on), ...actions])];
    }
    const ok = (id) => states[id] && states[id].state !== 'unavailable' && !stars.includes(id);
    return [...stars, ...suggested.filter(ok)].slice(0, Math.max(8, stars.length));
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
    return '<div class="activityRow' + (button ? ' tfPlug' : '') + (on ? ' on' : '') + (star ? ' tfPick' : '') + '" data-k="' + esc((area ? 'fav:' : 'row:') + id) + '" data-tone="' + (d === 'light' ? 'light' : spec?.tone || 'blue') + '">' +
      (button && !star ? '<button class="tfIcon" type="button" data-act="' + button.act + '" aria-label="' + esc(button.label) + '"' + iconSlot(id, icon) + '></button>' : '<div class="tfIcon" aria-hidden="true"' + iconSlot(id, icon) + '></div>') +
      '<button class="tfName" type="button" data-more="' + esc(id) + '" aria-label="' + esc(nameOf(id) + ', ' + meta + '. More info') + '"><span class="activityRowName">' + esc(nameOf(id)) + '</span><span class="activityRowMeta">' + esc(meta) + '</span></button>' +
      (star ? starButton(id) : '') + '</div>';
  }
  const weatherId = () => (states['weather.forecast_home'] ? 'weather.forecast_home' : Object.keys(states).find((x) => x.startsWith('weather.')));
  function weatherText(id) {
    const st = states[id], a = st.attributes, hass = getHass();
    let cond = WEATHER_NAMES[st.state] || cap(st.state);
    if (hass?.formatEntityState) { try { cond = hass.formatEntityState(st); } catch (_e) { /* keep ours */ } }
    return [a.temperature != null ? Math.round(a.temperature) + ' ' + (a.temperature_unit || '°C') : null, cond].filter(Boolean).join(' · ');
  }
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
    const weather = weatherId();
    const solar = rooms.flatMap((r) => r.solar), solarNow = solar.find((id) => id.endsWith('_power'));
    const all = {
      light: lights.length && { value: lit ? lit + ' on' : 'All off', groups: groups((r) => r.lights) },
      climate: temps.length && { value: lo === hi ? lo + '°' : lo + ' - ' + hi + '°', groups: groups((r) => [...r.readings.filter((id) => ['temperature', 'humidity'].includes(attr(id).device_class)), ...of(r, /^(climate|humidifier)\./)]) },
      security: (sec.alarms.length || sec.locks.length) && { value: [warnText, secText].filter(Boolean).join(', '), groups: [{ name: 'Alarm and locks', ids: [...sec.alarms, ...sec.locks] }, { name: 'Doors and windows', ids: sec.openings }].filter((g) => g.ids.length) },
      media_players: players.length && { value: playing ? playing + ' playing' : 'No media playing', groups: groups((r) => of(r, /^media_player\./)) },
      maintenance: (batteries.length || plants.length) && { value: [low.length && count(low.length, 'low battery', 'low batteries'), care.length && count(care.length, 'problem', 'problems')].filter(Boolean).join(', ') || 'All good', groups: [{ name: 'Plants', ids: plants }, { name: 'Batteries', ids: [...model.vacuums, ...batteries] }].filter((g) => g.ids.length) },
      weather: weather && { value: weatherText(weather), id: weather },
      energy: model.grid && { value: watts(Number(states[solarNow]?.state || 0) * 1000 + Number(states[model.grid].state)) + ' now', groups: [{ name: 'Energy', ids: [...solar, model.grid] }] },
    };
    const out = [];
    const active = alerts.filter((x) => x.severity !== 'warning' && x.on);
    if (active.length) out.push({ key: 'alerts', name: 'Alerts', icon: 'mdi:alarm-plus', colour: '#f44336', value: count(active.length, 'active alert', 'active alerts'), groups: [{ name: 'Active', ids: active.map((x) => x.entity) }] });
    shortcutItems().forEach((it) => {
      if (it.type !== 'summary') out.push({ key: 'path:' + it.path, name: it.label || it.path, icon: it.icon || 'mdi:link-variant', colour: '', value: '' });
      else if (!it.hidden && all[it.key]) out.push({ key: it.key, ...SUMMARIES[it.key], ...all[it.key] });
    });
    return out;
  }
  const summaryRow = (s) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + esc(s.key) + '" data-k="sum:' + esc(s.key) + '" aria-label="' + esc(s.name + (s.value ? ', ' + s.value : '')) + '"' + (s.colour ? ' style="--sum:' + s.colour + '"' : '') + '>' +
    '<div class="tfIcon" aria-hidden="true"' + iconSlot(s.id || '', s.icon, s.name) + '></div>' +
    '<div><div class="activityRowName">' + esc(s.name) + '</div>' + (s.value ? '<div class="activityRowMeta">' + esc(s.value) + '</div>' : '') + '</div></div>';
  // favourites lead the page; summaries sit beside them on wide screens and under them on phones
  const sideHtml = (cls, key, label, extra) => (inner, n) => '<div class="tfSide ' + cls + '" data-tf data-k="' + key + '" style="order:' + n.order + '">' +
    '<div class="sectionLabel tfSideLabel">' + label + (extra || '') + '</div><section class="card tfCard" aria-label="' + label + '"><div class="activityRows">' + inner + '</div></section></div>';
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
    if (key === 'weather') { const w = weatherId(); if (w) openMore(w, opener); return; }
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
    prefs = { favourites: null, ...(mine?.value || {}) };
    haHome = home?.value || {};
    haSecurity = security?.value || {};
    predicted = Array.isArray(usage?.entities) ? usage.entities : [];
    suggested = null;
    if (Object.keys(states).length) refresh();
  }

  /* the page: areas, Home (weather, vacuum), Security, then each room: its label, readings, plants and action tiles */
  function layout() {
    model = house.model(getHass());
    states = model.states;
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
    areaRooms = secs.filter((x) => x.room && (editing || !hiddenArea(x.room.id))).map((x) => x.room);
    if (!areaRooms.some((r) => r.id === activeArea)) activeArea = areaRooms[0]?.id || null;
    if (editing) out.push({ key: 'edit', html: editTopHtml(++order) });
    whereIs = new Map();
    model.rooms.forEach((r) => [...r.actions, ...r.plugs, ...r.readings, ...r.openings, ...r.solar, ...r.plants.flatMap((p) => [p.id, ...p.readings])].forEach((id) => whereIs.set(id, r.name)));
    const favs = favouriteIds(), sums = summaryData();
    if (sums.length) out.push({ key: 'sums', order: ++order, wrap: sideHtml('tfSums', 'sums', 'Summaries'), tiles: sums.map((s) => ({ key: 'sum:' + s.key, html: summaryRow(s) })) });
    if (favs.length) out.push({ key: 'favs', order: ++order, wrap: sideHtml('tfFavs', 'favs', 'Favourites', '<button class="pill" type="button" data-favs-edit>Edit</button>'), tiles: favs.map((id) => ({ key: 'fav:' + id, html: deviceRow(id, { area: true }) })) });
    if (areaRooms.length) out.push({ key: 'areas', html: areasHtml(++order) });
    // each section: its label, its cards (Home's weather; a room's energy, readings and plants), then its tiles
    // (in edit mode, hidden ones too, and empty blocks to drop into); Security's doors and windows come last
    secs.forEach((x, i) => {
      const ids = editing ? x.ids : x.ids.filter((id) => !isHidden(id));
      if (x.custom && !ids.length && !editing) return;
      const name = x.room ? x.room.id : x.key, r = x.room;
      out.push({ key: 'label:' + name, html: sectionLabel('label:' + name, x, i, secs.length, ++order) });
      if (x.key === 'home') out.weather = ++order;
      if (r?.solar.length) out.push({ key: 'energy:' + r.id, html: energyCard(r, ++order) });
      if (r && (r.readings.length || r.plugs.length || r.power != null)) out.push({ key: 'readings:' + r.id, html: roomCard(r, ++order) });
      r?.plants.forEach((p) => out.push({ key: 'plant:' + p.id, html: plantCard(p, ++order) }));
      if (ids.length || editing) out.push({ key: 'block:' + name, order: ++order, section: x.key, tiles: ids.map((id) => ({ key: id, html: actionTile(id) })) });
      if (x.key === 'security') out.push({ key: 'openings', html: openingsCard(++order) });
    });
    return out;
  }
  const blockHtml = (n) => (n.wrap ? n.wrap(n.tiles.map((t) => t.html).join(''), n)
    : '<div class="tfBlock" data-tf data-k="' + esc(n.key) + '"' + (n.section ? ' data-block="' + esc(n.section) + '"' : '') + ' style="order:' + n.order + '"><div class="tfActions">' + n.tiles.map((t) => t.html).join('') +
      (editing && n.section ? '<div class="tfDropHint">Drag devices here</div>' : '') + '</div></div>');
  const signOf = (out) => out.map((n) => n.key + (n.tiles ? '(' + n.tiles.map((t) => t.key).join(',') + ')' : '')).join(';');

  function render() {
    if (!testFocus || !grid) return;
    grid.querySelectorAll('[data-tf]').forEach((el) => el.remove());
    const out = layout();
    units.clear();
    const wrap = document.createElement('div');
    wrap.innerHTML = out.map((n) => (n.tiles ? blockHtml(n) : n.html)).join('');
    out.forEach((n) => (n.tiles ? n.tiles.forEach((t) => units.set(t.key, t.html)) : units.set(n.key, n.html)));
    signature = signOf(out);
    grid.append(...wrap.children);
    placeBento(out.weather);
    fillIcons(grid);
    mountArt(grid);
    drawSparks(grid);
    if (open) drawHistory(open.id);
    drawSolar();
    renderMore();
    tidyArts();
    requestAnimationFrame(measureDensity);
  }

  // Redraw only what changed, so a held bar or a focused button isn't replaced under the pointer
  // after a redraw, focus what was: the same label, or else the same action (a toggle's label flips when it's pressed)
  const focusOf = (scope) => { const f = root.activeElement && scope.contains(root.activeElement) ? root.activeElement : null; return f && { label: f.getAttribute('aria-label'), act: f.dataset?.act }; };
  const refocus = (scope, was) => { if (!was) return; ((was.label && scope.querySelector('[aria-label="' + CSS.escape(was.label) + '"]')) || (was.act && scope.querySelector('[data-act="' + CSS.escape(was.act) + '"]')))?.focus(); };
  function replace(el, html) {
    const t = document.createElement('div');
    t.innerHTML = html;
    const next = t.firstElementChild;
    const was = focusOf(el);
    el.replaceWith(next);
    fillIcons(next);
    mountArt(next);
    drawSparks(next);
    refocus(next, was);
  }
  function refresh() {
    if (!testFocus || !grid) return;
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
      if (open && open.key === u.key && el.querySelector('.tfOpen')) { el.querySelector('.tfOpen .activityRowMeta').textContent = valueOf(open.id); return; }
      replace(el, u.html);
      if (open && open.key === u.key) drawHistory(open.id);
      if (u.key.startsWith('energy:')) drawSolar();
    }));
    renderMore();
    tidyArts();
    bento?.update();
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
  // a device's details sit behind a Details button and roll out beside the dialog; where there's no room beside it
  // (under 800 wide for the popup, 1000 for the sheet, so always on phones) they open over the top of it
  function fitDetails() { sheet.querySelector('.tfMorePair')?.classList.toggle('over', window.innerWidth < (look.more === 'sheet' ? 1000 : 800)); }
  window.addEventListener('resize', fitDetails, { passive: true });
  if (testFocus) applyLook();
  // the dialog's parts, one element each. A device: name, state and when it changed, a cover's drawing, the tile's
  // sections, and a Details button (its details and the made-up note open beside it). A summary: its line, then its
  // devices by room. The favourites list (the only place to star, Matt 27 Oct): every device with a star, starred first
  let moreParts = [];
  const special = (id) => id === 'favourites' || /^(summary|opts|sopts):/.test(id);
  function partsOf(id) {
    const head = (title, extra = '') => '<div class="tfMoreHead">' + (more?.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + ARROW + '</button>' : '') +
      '<div class="activityTitle" id="tfMoreTitle">' + esc(title) + '</div>' + extra + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + CLOSE + '</button></div>';
    const now = (text, sub) => '<div class="tfMoreNow"><div class="tfMoreState">' + esc(text) + '</div>' + (sub ? '<div class="tfMoreSub">' + esc(sub) + '</div>' : '') + '</div>';
    const list = listHtml;
    const seg = (label, kind, opts, cur) => '<div class="tfOptGroup"><div class="tfMoreGroupName">' + label + '</div><div class="tfSeg" role="group" aria-label="' + label + '">' +
      opts.map(([v, t]) => '<button type="button" data-opt="' + kind + '|' + v + '" aria-pressed="' + (cur === v) + '" aria-label="' + label + ': ' + t + '">' + t + '</button>').join('') + '</div></div>';
    const sw = (label, kind, value, on) => '<div class="tfOptRow"><span>' + esc(label) + '</span><button class="switch' + (on ? ' on' : '') + '" type="button" role="switch" aria-checked="' + on + '" aria-label="' + esc(label) + '" data-opt="' + kind + '|' + esc(value) + '"></button></div>';
    // edit mode: a tile's options (size, what it shows, its section, hidden) or a reading's (its value or its 24 hours)
    if (id.startsWith('opts:')) {
      const e = id.slice(5), show = showOf(e);
      if (!states[e]) return null;
      if (!ACTION_DOMAINS.includes(e.split('.')[0])) return [head(nameOf(e)), seg('Shows', 'graph', [['0', 'Value'], ['1', '24-hour graph']], show.graph ? '1' : '0')];
      const secs = sectionsOf(), here = secs.find((x) => x.ids.includes(e)), parts = partsFor(e);
      return [
        head(nameOf(e)),
        seg('Size', 'size', SIZES, show.size || 'half'),
        parts.length && '<div class="tfOptGroup"><div class="tfMoreGroupName">Shows</div>' + parts.map((pt) => sw(PART_NAMES[pt], 'part', pt, pt === 'art' ? Boolean(show.art) : !(show.hide || []).includes(pt))).join('') + '</div>',
        '<div class="tfOptGroup"><label class="tfMoreGroupName" for="tfOptPlace">Section</label><select class="settingsSelect tfOptField" id="tfOptPlace" data-opt-place>' +
          secs.map((x) => '<option value="' + esc(x.key) + '"' + (x === here ? ' selected' : '') + '>' + esc(x.name) + '</option>').join('') + '</select></div>',
        sw('Hide on this page', 'hide', '1', isHidden(e)),
      ].filter(Boolean);
    }
    // a section's options: Matt's own can be renamed or deleted; a room's area card can be hidden
    if (id.startsWith('sopts:')) {
      const x = sectionsOf().find((y) => y.key === id.slice(6));
      if (!x) return null;
      if (x.custom) return [head(x.name), '<div class="tfOptGroup"><label class="tfMoreGroupName" for="tfOptName">Name</label><input class="settingsSelect tfOptField" id="tfOptName" type="text" maxlength="40" value="' + esc(x.name) + '" data-opt-name></div>',
        '<button class="pill tfOptDelete" type="button" data-opt="delete|1">Delete section</button>'];
      // a room's: its area card, and what the card shows big
      const ids = mainChoices(x.room), main = mainOf(x.room), devices = ids.filter((e) => ACTION_DOMAINS.includes(e.split('.')[0]) || e.startsWith('switch.'));
      const opt = (e) => '<option value="' + esc(e) + '"' + (e === main ? ' selected' : '') + '>' + esc(inRoom(x.room, e)) + '</option>';
      return [head(x.name), sw('Area card', 'area', x.room.id, !hiddenArea(x.room.id)),
        ids.length && '<div class="tfOptGroup"><label class="tfMoreGroupName" for="tfOptMain">Main</label><select class="settingsSelect tfOptField" id="tfOptMain" data-opt-main="' + esc(x.room.id) + '">' +
          [['Readings', ids.filter((e) => !devices.includes(e))], ['Devices', devices]].filter(([, l]) => l.length).map(([g, l]) => '<optgroup label="' + g + '">' + l.map(opt).join('') + '</optgroup>').join('') + '</select></div>',
      ].filter(Boolean);
    }
    if (id === 'favourites') {
      const stars = starred(), inStars = new Set(stars);
      const groups = [{ name: 'Starred', ids: stars }, { name: 'Home', ids: model.vacuums }, { name: 'Security', ids: [...model.security.alarms, ...model.security.locks] }, ...model.rooms.map((r) => ({ name: r.name, ids: [...r.actions, ...r.plugs] }))]
        .map((g, i) => (i ? { ...g, ids: g.ids.filter((x) => !inStars.has(x)) } : g)).filter((g) => g.ids.length);
      return [head('Favourites'), now(stars.length ? stars.length + ' starred' : 'None starred'), list(groups, { star: true }, true)];
    }
    if (id.startsWith('summary:')) {
      const s = summaryData().find((x) => x.key === id.slice(8));
      return s ? [head(s.name), now(s.value), s.groups?.length && list(s.groups, {})].filter(Boolean) : null;
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
    sheet.querySelector(open ? '[data-details-close]' : '[data-details]')?.focus();
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
    if (sheet.hidden || !box || parts.length !== moreParts.length) {
      // the dialog and, beside it, its details: one dialog for screen readers
      sheet.innerHTML = '<div class="tfMorePair" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore">' + parts.join('') + '</section>' +
        (side ? '<aside class="tfMoreSide" id="tfMoreSide" aria-label="Details"><div class="tfMoreSideInner"><div class="tfMoreHead"><button class="tfBack" type="button" data-details-close aria-label="Back">' + ARROW + '</button>' +
          '<div class="activityTitle">Details</div></div><div class="tfMoreSideBody">' + side + '</div></div></aside>' : '') + '</div>';
      moreSide = side;
      sheet.hidden = false;
      fitDetails();
      mountArt(sheet);
      fillIcons(sheet);
      refocus(sheet, was);
      if (!sheet.contains(root.activeElement)) sheet.querySelector('[data-more-close]')?.focus();
    } else {
      // only the parts that changed, so the drawing and a focused button stay
      parts.forEach((p, i) => {
        if (p === moreParts[i] || p.includes('data-cover-art') || box.children[i].contains(root.activeElement?.matches?.('input,select') ? root.activeElement : null)) return;
        const t = document.createElement('div');
        t.innerHTML = p;
        const next = t.firstElementChild;
        box.children[i].replaceWith(next);
        fillIcons(next);
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
    sheet.hidden = true;
    sheet.innerHTML = '';
    if (opener?.isConnected) opener.focus();
    else if (opener?.dataset?.more) grid.querySelector('[data-more="' + CSS.escape(opener.dataset.more) + '"]')?.focus();
    // an area card's options button or its section's, whichever opened it
    else if (opener?.dataset?.secOpts) grid.querySelector((opener.closest('.tfAreaPanel') ? '.tfAreaPanel' : '.tfLabel') + ' [data-sec-opts="' + CSS.escape(opener.dataset.secOpts) + '"]')?.focus();
    else if (opener?.dataset?.summary) grid.querySelector('[data-summary="' + CSS.escape(opener.dataset.summary) + '"]')?.focus();
    else if (opener?.hasAttribute?.('data-favs-edit')) grid.querySelector('[data-favs-edit]')?.focus();
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
    return [...Array(48)].map((_, i) => [now - (48 - i) * 30 * 60 * 1000, Math.round(v * (0.96 + 0.04 * Math.sin(i / 6)) * 10) / 10]);
  }
  const drawSparks = (scope) => scope.querySelectorAll('[data-spark]').forEach((svg) => drawHistory(svg.dataset.spark, svg));
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
  function send(domain, service, id, data) {
    const d = { entity_id: id, ...(data || {}) };
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
  /* edit mode: Matt's layout. Each change is saved, and the page redrawn */
  function setBlock(key, ids) { prefs = { ...prefs, order: { ...(prefs.order || {}), blocks: { ...(prefs.order?.blocks || {}), [key]: ids } } }; }
  function placeTo(id, key) {
    const place = { ...(prefs.place || {}) };
    if (key === homeOf.get(id)) delete place[id]; else place[id] = key;
    prefs = { ...prefs, place };
  }
  function changed(focusSel) {
    savePrefs();
    render();
    if (focusSel) grid.querySelector(focusSel)?.focus();
  }
  // a tile one place earlier or later; past either end of its section it goes to the next section
  function moveTile(id, dir) {
    const secs = sectionsOf(), si = secs.findIndex((x) => x.ids.includes(id));
    if (si < 0) return;
    const x = secs[si], i = x.ids.indexOf(id), j = i + dir;
    if (j >= 0 && j < x.ids.length) { const ids = x.ids.filter((y) => y !== id); ids.splice(j, 0, id); setBlock(x.key, ids); }
    else {
      const to = secs[si + dir];
      if (!to) return;
      setBlock(x.key, x.ids.filter((y) => y !== id));
      setBlock(to.key, dir < 0 ? [...to.ids, id] : [id, ...to.ids]);
      placeTo(id, to.key);
    }
    changed('[data-tile-move="' + CSS.escape(id + '|' + dir) + '"]');
  }
  function moveToSection(id, key) {
    const secs = sectionsOf(), from = secs.find((x) => x.ids.includes(id)), to = secs.find((x) => x.key === key);
    if (!to || from === to) return;
    if (from) setBlock(from.key, from.ids.filter((y) => y !== id));
    setBlock(key, [...to.ids, id]);
    placeTo(id, key);
    changed();
  }
  function moveSection(key, dir) {
    const keys = sectionsOf().map((x) => x.key), i = keys.indexOf(key), j = i + dir;
    if (i < 0 || j < 0 || j >= keys.length) return;
    keys.splice(i, 1);
    keys.splice(j, 0, key);
    prefs = { ...prefs, order: { ...(prefs.order || {}), sections: keys } };
    changed();
    // the same arrow, or the other one if this section is now at the end
    (grid.querySelector('[data-sec-move="' + CSS.escape(key + '|' + dir) + '"]:not(:disabled)') || grid.querySelector('[data-sec-move="' + CSS.escape(key + '|' + -dir) + '"]'))?.focus();
  }
  function addSection(opener) {
    const id = 's' + Date.now().toString(36);
    prefs = { ...prefs, sections: [...(prefs.sections || []), { id, name: 'New section' }] };
    changed();
    openMore('sopts:sec:' + id, opener);
    const field = sheet.querySelector('[data-opt-name]');
    field?.focus();
    field?.select();
  }
  // a deleted section's devices go back to their rooms
  function deleteSection(key) {
    const place = Object.fromEntries(Object.entries(prefs.place || {}).filter(([, k]) => k !== key));
    const blocks = { ...(prefs.order?.blocks || {}) };
    delete blocks[key];
    prefs = { ...prefs, place, sections: (prefs.sections || []).filter((c) => 'sec:' + c.id !== key), order: { ...(prefs.order || {}), blocks, sections: (prefs.order?.sections || []).filter((k) => k !== key) } };
  }
  // an option in a tile's or section's dialog
  function applyOpt(kind, value) {
    const target = more?.id || '';
    if (target.startsWith('opts:')) {
      const id = target.slice(5), show = { ...showOf(id) };
      if (kind === 'size') show.size = value;
      if (kind === 'graph') show.graph = value === '1';
      if (kind === 'part' && value === 'art') show.art = !show.art;
      else if (kind === 'part') { const hide = new Set(show.hide || []); if (hide.has(value)) hide.delete(value); else hide.add(value); show.hide = [...hide]; }
      prefs = { ...prefs, show: { ...(prefs.show || {}), [id]: show } };
      if (kind === 'hide') prefs = { ...prefs, hidden: isHidden(id) ? prefs.hidden.filter((x) => x !== id) : [...(prefs.hidden || []), id] };
    } else if (target.startsWith('sopts:')) {
      if (kind === 'area') prefs = { ...prefs, hiddenAreas: hiddenArea(value) ? prefs.hiddenAreas.filter((x) => x !== value) : [...(prefs.hiddenAreas || []), value] };
      if (kind === 'delete') { deleteSection(target.slice(6)); closeMore(); }
    }
    changed();
  }
  // drag a tile by its grip: it moves through the page as you go (into other sections too, and empty ones), the page
  // scrolls near the top and bottom, and letting go saves the order
  function dragTile(grip, ev) {
    const tile = grip.closest('.tfAction'), id = tile.dataset.k, r = tile.getBoundingClientRect();
    const ghost = tile.cloneNode(true);
    ghost.classList.add('tfGhost');
    Object.assign(ghost.style, { width: r.width + 'px', height: r.height + 'px', left: r.left + 'px', top: r.top + 'px' });
    app.appendChild(ghost);
    tile.classList.add('tfDragging');
    const dx = ev.clientX - r.left, dy = ev.clientY - r.top;
    let last = ev, raf = 0, spot = '';
    const place = () => {
      ghost.style.left = last.clientX - dx + 'px';
      ghost.style.top = last.clientY - dy + 'px';
      const under = root.elementFromPoint(last.clientX, last.clientY);
      const other = under?.closest('.tfActions > .tfAction');
      if (other && other !== tile) {
        const rr = other.getBoundingClientRect(), wide = rr.width > other.parentElement.clientWidth * 0.75;
        const after = wide ? last.clientY > rr.top + rr.height / 2 : last.clientX > rr.left + rr.width / 2;
        const key = other.dataset.k + (after ? '>' : '<');
        if (key !== spot) { spot = key; other.parentElement.insertBefore(tile, after ? other.nextSibling : other); }
      } else if (!other) {
        const list = under?.closest('.tfBlock[data-block]')?.querySelector('.tfActions');
        if (list && tile.parentElement !== list && !list.querySelector('.tfAction')) { spot = list.parentElement.dataset.block; list.prepend(tile); }
      }
    };
    // near the top or bottom the page scrolls under it, and the place is found again
    const tick = () => {
      const by = last.clientY < 70 ? -14 : last.clientY > window.innerHeight - 70 ? 14 : 0;
      if (by) { window.scrollBy(0, by); place(); }
      raf = requestAnimationFrame(tick);
    };
    const move = (e) => { last = e; place(); };
    const up = (e) => {
      if (e?.type === 'pointerup') { last = e; place(); }
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
      window.removeEventListener('pointercancel', up);
      ghost.remove();
      tile.classList.remove('tfDragging');
      // the order as it now stands on the page, and where the tile ended up
      grid.querySelectorAll('.tfBlock[data-block]').forEach((b) => {
        const ids = [...b.querySelectorAll('.tfAction[data-k]')].map((t) => t.dataset.k);
        setBlock(b.dataset.block, ids);
        if (ids.includes(id)) placeTo(id, b.dataset.block);
      });
      changed();
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    window.addEventListener('pointercancel', up);
    raf = requestAnimationFrame(tick);
  }
  // the pencil in the bottom bar turns edit mode on and off (on Home)
  function setEditing(on) {
    editing = on;
    app.classList.toggle('editing', on);
    const pen = $('editNav');
    if (pen) { pen.classList.toggle('active', on); pen.setAttribute('aria-pressed', String(on)); pen.setAttribute('aria-label', on ? 'Done editing' : 'Edit the page'); pen.title = on ? 'Done' : 'Edit'; pen.innerHTML = on ? TICK : PENCIL; }
    if (more) closeMore();
    if (on && !$('homeView').classList.contains('active')) $('homeNav')?.click();
    render();
    if (on) grid.querySelector('[data-k="edit"] [data-edit-done]')?.focus();
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
    grid.querySelector('.tfOpen [data-close]')?.focus();
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
      const t = ev.target.closest('[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-tile-move],[data-tile-opts],[data-sec-move],[data-sec-opts],[data-opt],[data-add-section],[data-edit-done],.tfAreaPanel');
      if (!t || !el.contains(t) || t.disabled) return;
      if (t.dataset.act) run(t.dataset.act);
      else if (t.dataset.tileMove) { const [id, dir] = t.dataset.tileMove.split('|'); moveTile(id, Number(dir)); }
      else if (t.dataset.tileOpts) openMore('opts:' + t.dataset.tileOpts, t);
      else if (t.dataset.secMove) { const [key, dir] = t.dataset.secMove.split('|'); moveSection(key, Number(dir)); }
      else if (t.dataset.secOpts) openMore('sopts:' + t.dataset.secOpts, t);
      else if (t.dataset.opt) { const [kind, value] = t.dataset.opt.split('|'); applyOpt(kind, value); }
      else if (t.hasAttribute('data-add-section')) addSection(t);
      else if (t.hasAttribute('data-edit-done')) setEditing(false);
      else if (t.hasAttribute('data-details')) toggleDetails(!more?.details);
      else if (t.hasAttribute('data-details-close')) toggleDetails(false);
      else if (t.dataset.summary) openSummary(t.dataset.summary, t);
      else if (t.dataset.star) toggleStar(t.dataset.star);
      else if (t.hasAttribute('data-more-back')) { more = more.back; showMore(); }
      else if (t.hasAttribute('data-favs-edit')) openMore('favourites', t);
      else if (t.dataset.acts) JSON.parse(t.dataset.acts).forEach(([domain, service, id, data]) => send(domain, service, id, data).catch(() => {}));
      else if (t.dataset.more) openMore(t.dataset.more, t);
      else if (t.hasAttribute('data-more-close')) closeMore();
      else if (t.dataset.go) { const l = grid.querySelector('[data-k="label:' + CSS.escape(t.dataset.go) + '"]'); l?.scrollIntoView({ behavior: 'smooth', block: 'start' }); l?.focus({ preventScroll: true }); }
      else if (t.dataset.open) openReading(t);
      else if (t.hasAttribute('data-close')) { const was = open; open = null; units.delete(was.key); refresh(); grid.querySelector('[data-open="' + CSS.escape(was.key + '|' + was.id) + '"]')?.focus(); }
      else if (t.classList.contains('tfAreaPanel') && !t.classList.contains('active')) pickArea(t);
    });
    el.addEventListener('keydown', (ev) => {
      const t = ev.target;
      if (t.dataset?.open && (ev.key === 'Enter' || ev.key === ' ')) { ev.preventDefault(); openReading(t); }
      if (t.classList?.contains('tfAreaPanel') && (ev.key === 'Enter' || ev.key === ' ')) { ev.preventDefault(); pickArea(t); }
      if (t.dataset?.summary && (ev.key === 'Enter' || ev.key === ' ')) { ev.preventDefault(); openSummary(t.dataset.summary, t); }
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
    // bars: press and drag along, set on release
    el.addEventListener('pointerdown', (ev) => {
      const grip = editing && ev.button === 0 && ev.target.closest('[data-drag-tile]');
      if (grip) { ev.preventDefault(); dragTile(grip, ev); return; }
      const blocksEl = ev.target.closest('[data-blocks]');
      if (blocksEl && ev.button === 0) { ev.preventDefault(); holdBlocks(blocksEl, ev); return; }
      const bar = ev.target.closest('[data-drag]');
      if (!bar) return;
      const [kind, id] = bar.dataset.drag.split('|');
      if (kind === 'bright' && !dimmable(id)) { run(act('light', 'toggle', id)); return; }
      ev.preventDefault();
      bar.setPointerCapture?.(ev.pointerId);
      const inset = kind === 'tilt' ? 3 : 0; // the tilt bar's fill sits 3 in
      const at = (e2) => { const r = bar.getBoundingClientRect(); return Math.max(0, Math.min(1, (e2.clientX - r.left - inset) / (r.width - inset * 2))); };
      showDrag(bar, kind, id, at(ev));
      const move = (e2) => showDrag(bar, kind, id, at(e2));
      const up = () => { bar.removeEventListener('pointermove', move); bar.removeEventListener('pointerup', up); bar.removeEventListener('pointercancel', up); commit(kind, id); };
      bar.addEventListener('pointermove', move);
      bar.addEventListener('pointerup', up);
      bar.addEventListener('pointercancel', up);
    });
  }
  if (grid && testFocus) {
    loadPrefs();
    bindControls(grid);
    bindControls(sheet);
    sheet.addEventListener('click', (ev) => { if (ev.target === sheet) closeMore(); });
    // a tile's section, an area card's main, and a section's name (saved as it's typed; the page catches up when the field is left)
    sheet.addEventListener('change', (ev) => {
      const t = ev.target;
      if (t.matches('[data-opt-place]') && more?.id.startsWith('opts:')) moveToSection(more.id.slice(5), t.value);
      if (t.matches('[data-opt-name]')) render();
      if (t.matches('[data-opt-main]')) { prefs = { ...prefs, main: { ...(prefs.main || {}), [t.dataset.optMain]: t.value } }; changed(); }
    });
    sheet.addEventListener('input', (ev) => {
      const t = ev.target;
      if (!t.matches('[data-opt-name]') || !more?.id.startsWith('sopts:sec:')) return;
      const id = more.id.slice(10), name = t.value.trim() || 'New section';
      prefs = { ...prefs, sections: (prefs.sections || []).map((c) => (c.id === id ? { ...c, name } : c)) };
      savePrefs();
    });
    // the pencil, beside Home, Settings and Full screen
    root.querySelector('.bottomNav')?.insertAdjacentHTML('beforeend', '<button class="navBtn" id="editNav" type="button" title="Edit" aria-label="Edit the page" aria-pressed="false">' + PENCIL + '</button>');
    $('editNav')?.addEventListener('click', () => setEditing(!editing));
    // Escape folds the details away first, then closes
    sheet.addEventListener('keydown', (ev) => { if (ev.key === 'Escape') { ev.stopPropagation(); if (more?.details) toggleDetails(false); else closeMore(); } });
  }

  applyDensity();
  return {
    update(next) {
      if (!testFocus) return;
      const first = !Object.keys(states).length;
      states = next || {};
      if (first) render(); else refresh();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() { suspended = true; bento?.destroy(); bento = null; },
    resume() { suspended = false; if (testFocus && grid?.querySelector('[data-tf]')) placeBento(bentoBox.style.order); },
  };
}
