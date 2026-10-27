# Move Assistant

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

## Install (HACS)

1. HACS → ⋮ → **Custom repositories** → add this repo's URL, type **Dashboard**.
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

## Test focus layout

`layout: test-focus` turns Home into a page for your house, to try HomeCore with real devices. Your normal Home never shows it.

```yaml
- type: custom:move-assistant-card
  layout: test-focus
```

- **Dashboard** is Home: the HomeCore concept's cards at their drawn sizes, with no labels above anything. Your home's name, the summaries, the weather card and the areas, Favourites and Activity (five rows each, so their tiles line up), Energy today (a graph of the day and its sources in one row; tap a source to see its day, the card never moving), Compared to average, and tiles for the lights and the thermostat. The dashboard shows only the living room's, bedroom's and office's lights. A light that's off keeps a faint line on its bar where it was. Tap the weather card's Now for the Weather page; a day opens in the card. Activity is your devices' latest changes from Home Assistant's logbook, with who did it and when: as many as its card fits (five in a large card), the rest a scroll away, each scroll settling on the next one. Energy today comes from your Energy dashboard, or is made up if it isn't set up; tap a source for its graph.
- **Peg board**: on a tablet and up the dashboard's cards sit on a solid grid of cells from the top left, columns 252 wide and rows 60 tall, 16 apart, under your home's name and the summaries (which keep their own sizes). Every card fills whole cells: a light tile 1 × 2, a Dual Axis Controller 1 × 3 (tap its name and its pad opens to 1 × 5), a weather data tile 1 × 3, Energy today and Compared to average 2 × 4, and the large cards (the weather, the areas, Favourites and Activity) 2 × 5. The pencil in the bottom bar turns on edit mode, which draws the cells. Tiles side by side are one height: a light beside a Dual Axis Controller grows to its three rows, its slider at the bottom. Drag a card by its grip (or anywhere on it) into any free cell; cards in the way move down. Its three dots make it a tile or a card, put Energy today's graph above or below, move it a cell, or hide it (hidden cards wait under the board). Where everything is saves with the page's settings in Home Assistant; on a narrower board the cards keep that order, top row first, each in the first free cell from the top left. Phones keep one column, in the board's order: its top row first, each row left to right.
- **Rooms** come from your Home Assistant areas. Each has a readings card (tap a reading to see its last 24 hours) and its devices as tiles: lights (brightness, warm to cool, colour), thermostat, humidifier, covers, media, robot vacuum, locks, alarm and watering. The icon turns a device on or off. Rooms with solar get an energy card, and each plant gets a card. Each room has its own page, opened from its area card.
- **Made-up devices** fill in what the house doesn't have yet: thermostat, covers, humidifier, robot vacuum, balcony solar and watering, alarm, doors and windows, plants, and room temperature and humidity. Their ids contain `made_up_`. They work from the page but exist only in this card.
- **Summaries and favourites** sit at the top, as on Home Assistant's home view. Favourites are your starred devices, then suggestions; star them in Favourites → Edit. A summary opens a popup of its devices with their controls (lights: brightness, and turn all off or on).
- **Area cards** show one room open: its temperature big and up to four controls. Tap a control's icon to turn it on or off, or its name to open what it stands for (the room's lights, covers or plugs, or the one device). The others are folded: their main reading with the name under it, and their control icons; an open door is shown plainly, only a leak in red. Go opens the room's page: a big back arrow, its name, and only its devices.
- **Security** (alarm, locks, doors and windows) opens from its summary as a page of its own.
- **Weather** is a bento: now, the next hours, sun, moon, wind, UV, Compared to average, humidity, pressure, rain and air quality, each at its own size (the squares stay square).
- **Covers** are drawn as curtains, a roller blind or venetian blinds. Drag the drawing, or tap the four blocks for 25, 50, 75 or 100%.
- **More info** opens when you tap a device's name. Settings → Appearance → **More info** shows it as a popup or a sheet; Details rolls out beside it.
- **Settings** (HomeCore test) has four tabs. **Appearance**: theme, Show density, More info, and lights as this page's tiles or as the [Dual Axis Controller](https://github.com/mbb365/Dual-Axis-Controller-v4) (install it from HACS; its pad on temperature or colour). **Lights**: an example table of every light, to star it and pick its own tile and pad. **Sources** picks the weather, the grid's power and the alarm; **Summaries** turns each summary on or off.

Settings → Appearance → **Show density** outlines each card with its height and counts how many readings fit on the screen.

## Automations

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
