# HomeCore

- **HomeCore**: a page for your whole house, to try HomeCore with your own devices. Experiments in a new design language.
- **Move Assistant**: a guided movement timer ([further down](#move-assistant-the-movement-timer)).

## HomeCore

HomeCore is one page for your whole house: your home's name and summaries, the weather, your rooms, favourites, what's just happened, energy, and your lights and heating. The rooms and the weather each open as a page of their own.

### Install HomeCore, step by step

You need Home Assistant with [HACS](https://hacs.xyz) installed, and to be signed in as an admin.

1. **Add the repository to HACS.** Open **HACS**, tap **⋮** (top right) → **Custom repositories**. Paste `https://github.com/mbb365/move-assistant-card`, set the type to **Dashboard**, tap **Add**, then close the window.
2. **Download the card.** In HACS, search for **Move Assistant**, open it and tap **Download** (and **Download** again to confirm).
3. **Reload.** Reload the page in your browser. In the Home Assistant app, close the app completely and open it again.
4. **Add a dashboard.** Go to **Settings → Dashboards**, tap **Add dashboard** and choose **New dashboard from scratch**. Set the title to **HomeCore** and the icon to `mdi:home`, then tap **Create**.
5. **Put HomeCore on it.** Open **HomeCore** from the sidebar. Tap the **pencil** (top right), then **⋮ → Raw configuration editor**. Delete everything there, paste the lines below and tap **Save**. Close the editor with **✕** and tap **Done**.

   ```yaml
   views:
     - title: HomeCore
       type: panel
       cards:
         - type: custom:move-assistant-card
           layout: test-focus
   ```

6. **Make it yours.** Tap **Settings** in HomeCore's bottom bar:
   - **Sources**: pick your weather, the grid's power (for energy) and your alarm.
   - **Summaries**: choose which summaries show at the top.
   - **Appearance**: the theme, and your lights as HomeCore's own tiles or as the [Dual Axis Controller](https://github.com/mbb365/Dual-Axis-Controller-v4). The controller comes with HomeCore, so there's nothing else to install; if you've installed it from HACS yourself, your copy is used.

   Your rooms come from Home Assistant's areas, so put your devices in areas (**Settings → Areas, labels & zones**). Anything your house doesn't have yet is filled in with a made-up device, so the page is complete; made-up devices only work on the page.

On a tablet or computer, the pencil in the bottom bar lets you move and resize the cards. Phones show the same cards in one column, in the same order.

Added the dashboard earlier under another name? A dashboard that holds only HomeCore is named **HomeCore** in the sidebar the first time an admin opens it. That happens once: rename it afterwards and it keeps your name. A dashboard with other cards on it is never renamed.

### Updating

Open **HACS → Move Assistant → ⋮ → Redownload**, then reload the page (or close and reopen the app).

### What's on the page

- **Dashboard** is Home: the HomeCore concept's cards at their drawn sizes, with no labels above anything. Your home's name, the summaries, the weather card and the areas, Favourites and Activity (five rows each, so their tiles line up), Energy today (a graph of the day and its sources in one row; tap a source to see its day, the card never moving), Compared to average, and tiles. The tiles start as the lights and the thermostat (only the living room's, bedroom's and office's lights); add or remove any in edit mode and they're yours. A light that's off keeps a faint line on its bar where it was. The weather card is the now and the days; tap its Now for the Weather page, which adds the condition and today's range. A day opens in the card. A folded area card's reading sits at one height, whatever its icons below. Activity is your devices' latest changes from Home Assistant's logbook, with who did it and when; a leak, smoke, gas, carbon monoxide or safety alarm is its own red row for the day, with when it cleared ("Kitchen leak sensor detected water · 16:20 · dry since 16:40"). Tap a row for that device's popup with its last 24 hours on one track at the top, the moment marked: as many as its card fits (five in a large card), the rest a scroll away, each scroll settling on the next one. Energy today comes from your Energy dashboard, or is made up if it isn't set up; tap a source for its graph.
- **Peg board**: on a tablet and up the dashboard's cards sit on a solid grid of cells from the top left, columns 252 wide and rows 60 tall, 16 apart, under your home's name and the summaries (which keep their own sizes). Every card fills whole cells: a light tile 1 × 2, a Dual Axis Controller 1 × 3 (Make taller in its three dots gives it 1 × 5, and it stays that way; tap its name for more info), a weather data tile 1 × 3, Energy today and Compared to average 2 × 4, and the large cards (the weather, the areas, Favourites and Activity) 2 × 5. The pencil in the bottom bar turns on edit mode, which draws the cells. Tiles side by side are one height: a light beside a Dual Axis Controller grows to its three rows, its slider at the bottom. Drag a card by its grip (or anywhere on it) into any free cell; cards in the way move down. Its three dots make it a tile or a card, a Dual Axis Controller taller or shorter, put Energy today's graph above or below, move it a cell, or hide it; a tile's three dots remove it instead. The pencil also slides in the **edit tray** from the right, over the board: hidden cards wait there (drag one onto the board where it should go, or tap it to put it back); **Add tile** puts any device with controls (lights, thermostats, covers, locks, media players, vacuums, humidifiers, alarms, valves) on the board as its tile, showing its first control, in the first free cell; and your favourites are there too (below). A card or tile stretched taller keeps its content on the bottom edge. Each edit says what it did in a toast at the bottom of the board (with Undo for 5 seconds after a remove or a hide); a tile you add lands in the first free cell you can see, the page scrolls to it and it glows for a moment; Done says Changes saved when anything changed. Its tab tucks it away; Done ends editing. Where everything is saves with the page's settings in Home Assistant; on a narrower board the cards keep that order, top row first, each in the first free cell from the top left. Phones keep one column, in the board's order: its top row first, each row left to right. To give phones an order of their own, press Show the phone in the tray: a mini phone opens beside it with the cards as blocks; drag them (or use the arrow keys) into order. Follow the board puts it back.
- **Rooms** come from your Home Assistant areas. Each has a readings card (tap a reading to see its last 24 hours) and its devices as tiles: lights (brightness, warm to cool, colour), thermostat, humidifier, covers, media, robot vacuum, locks, alarm and watering. The icon turns a device on or off. Rooms with solar get an energy card, and each plant gets a card. Each room has its own page, opened from its area card.
- **Made-up devices** fill in what the house doesn't have yet: thermostat, covers, humidifier, robot vacuum, balcony solar and watering, alarm, doors and windows, plants, and room temperature and humidity. Their ids contain `made_up_`. They work from the page but exist only in this card.
- **Summaries and favourites** sit at the top, as on Home Assistant's home view. Favourites are yours, edited in the edit tray as on Home Assistant's home view: Add favourite (any device, made-up ones too), drag the grip to reorder, the eye to show or hide one on the dashboard, remove, and Show suggestions to fill the card after them. In edit mode each favourite on the card has a hide button; a hidden one waits in the tray until you drag it back into the card, where you drop it. They start as Home Assistant's home favourites plus the made-up thermostat, curtains and watering and a lock; lights can also be starred in Settings → Lights. A summary opens a popup of its devices by room, in one grid: each device as its tile with its controls (lights: brightness, and turn all off or on), and readings as tiles of the same width. **Maintenance** counts what Home Assistant counts (batteries at 20% or under that aren't charging, battery and problem sensors that are on, and any of them that are unavailable) plus plants that need care: what needs attention comes first, in red, then everything else by room, with batteries named by their device and the robot vacuum shown as its battery.
- **Area cards** show one room open: the room's icon and name, its temperature big and up to four controls. The room's icon turns its lights on or off (in a light's colour while one is on), and its name opens the room's page: a big back arrow, its name, and only its devices. Tap a control's icon to turn it on or off, or its name to open what it stands for (the room's lights, covers or plugs, or the one device). The others are folded: the room's icon with its name under it, its main reading, and its control icons; an open door is shown plainly, only a leak in red. An area's icon is the one set on it in Home Assistant.
- **Security** (alarm, locks, doors and windows) opens from its summary as a popup, like the others.
- **Weather** is a bento: now, the next hours, sun, moon, wind, UV, Compared to average, humidity, pressure, rain, visibility and air quality, each at its own size (the squares stay square). Visibility is a ship on the horizon in as much fog as the reading, with the distance put as landmarks for homes in the UK and the Netherlands (from Big Ben, or Dam Square) and as a walk elsewhere; it shows only when your weather reports visibility.
- **Covers** are drawn as curtains, a roller blind or venetian blinds. Drag the drawing, or tap the four blocks for 25, 50, 75 or 100%.
- **More info** opens when you tap a device's name. Settings → Appearance → **More info** shows it as a popup or a sheet; Details rolls out beside it. A device opened from a popup opens in that popup, which keeps its size, with a back arrow and the device's name where the popup's title was.
- **Settings** (HomeCore) has four tabs. **Appearance**: theme, Show density, More info, and lights as this page's tiles or as the [Dual Axis Controller](https://github.com/mbb365/Dual-Axis-Controller-v4) (it comes with HomeCore, fetched the first time a light uses it, unless it's installed from HACS; its pad on temperature or colour). **Lights**: an example table of every light, to star it and pick its own tile and pad. **Sources** picks the weather, the grid's power and the alarm; **Summaries** turns each summary on or off.

Settings → Appearance → **Show density** outlines each card with its height and counts how many readings fit on the screen.

## Move Assistant, the movement timer

A guided movement timer for Home Assistant, built on the HomeCore design language.
Runs as a full-page dashboard card.

- **Moves** you create, edit or delete are saved to your Home Assistant user, and stay in sync live across your phone, Mac and TV.
- **Check-in** twice a day at times you choose (Settings → Check-in). It pops up when due; afterwards it lives in a tab on the right edge that shows a dot when the next one is due. Mood and energy are sliders from Terrible to Great.
- **How you've felt this week** shows your average mood and energy, plus each day's.
- **Movement** shows what you've already done (this week, your streak, the last 30 days) as one set of numbers that belong together.
- **Activity** shows today's steps (pick your step sensor in Settings → Integrations), plus your latest mood and energy.
- **Apple Health**: Settings → Help explains turning on Apple Health sensors in the Home Assistant iPhone app (2026.9+), then picking the Health steps sensor.
- **Rounds**: in Edit move, set how many times to repeat a move (1–10). Only the main section repeats, with a normal rest between rounds; the warm-up plays once at the start and the cooldown once at the end.
- **Editing on a phone**: rows are clean; tap one to edit it in a bottom sheet (Hide, Remove, Save). The setup folds into one line that opens in the sheet. The + button adds a movement, rest or video: name it, press Add, and it floats above the list until you drag it into place (or tap Add at end).
- **Second line on phones**: Settings → Appearance has a table of every step type (your Type / group values, plus Warm-up, Cooldown, Rest and Video). Filter it by kind or by typing, and switch off a type's second line to save space on phones; bigger screens always show it.
- **Video steps**: in Edit move, drag in **Add video** and paste a YouTube link. It plays in theater mode, across the row where the timer and pulse sit, with the time left shown by the controls. A link with a start time (`?t=90`) plays from there; you can also set your own length. With rounds, choose whether it plays every round or only in the first or last. The video loads during the step before it, so it starts straight away. Some videos can't play outside YouTube (their owner turned off embedding), and videos with ads play the ad first.
- **This week** counts minutes from the moves you actually do (30 seconds or more).
- **Halves**: tiles in a card sit two side by side whenever each still has 140 px; narrower than that, one per row. The spacing follows HomeCore FINAL in the Figma file.
- **TV mode** (⛶ button) goes full screen with no HA header or sidebar. Works with a keyboard, TV remote or game controller.

### Install the movement timer

1. HACS → ⋮ → **Custom repositories** → add `https://github.com/mbb365/move-assistant-card`, type **Dashboard**.
2. Install **Move Assistant**, then reload the browser.
3. Settings → Dashboards → **Add dashboard** → "New dashboard from scratch", name it *Move*, icon `mdi:run`.
4. Open it → ✎ → ⋮ **Raw configuration editor**, paste:

```yaml
views:
  - title: Move
    type: panel
    cards:
      - type: custom:move-assistant-card
```

### Automations

Every move sends a `move_assistant` event. `action` is one of
`started`, `step`, `rest`, `paused`, `resumed`, `completed`, `ended`, `checkin`.

```yaml
triggers:
  - trigger: event
    event_type: move_assistant
    event_data:
      action: rest
actions:
  - action: light.turn_on
    target:
      entity_id: light.living_room
    data:
      brightness_pct: 30
```

Step events also include `name`, `group`, `step`, `of`, `round`, `rounds` and `duration`. Set `events: false` on the card to turn events off.

## Development

```bash
npm install
npm run dev     # preview with a fake Home Assistant at http://localhost:5190/dev/
npm run build   # writes dist/move-assistant-card.js
```

`src/styles.css` and `src/template.html` come straight from the v63 prototype. `src/app.js` is the prototype script plus the Home Assistant wiring, and `src/move-assistant-card.js` is the card wrapper.
