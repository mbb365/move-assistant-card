# Move Assistant

A guided movement timer for Home Assistant, built on the HomeCore design language.
Runs as a full-page dashboard card.

- **Moves** you create, edit or delete are saved to your Home Assistant user, and stay in sync live across your phone, Mac and TV.
- **Check-in** twice a day at times you choose (Settings → Check-in). It pops up when due; afterwards it lives in a tab on the right edge that shows a dot when the next one is due. Mood and energy are sliders from Terrible to Great.
- **How you've felt this week** shows your average mood and energy, plus each day's.
- **Movement** shows what you've already done (this week, your streak, the last 30 days) as one set of numbers that belong together.
- **Weather** shows the weather now, then the next six days as tiles two to a row. On wide screens it sits under Activity and Movement, which share the row. Pick any Home Assistant weather entity in Settings → Integrations; turn it off in Settings → Data. Settings → Appearance → **Weather style** draws the pictures as Bitmap (pixel art, the default), 1-bit (ink and paper) or Smooth. The pictures move and change shape when the weather changes (Weather motion turns that off). **Weather layout** → Sky strip shows the six days as a 12-hour sky instead of tiles. Tap Now or a day to open the bigger view: the sky with the temperature drawn across it, which you drag along to see the weather at any hour. The rules are in [docs/weather-styles.md](docs/weather-styles.md).
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

To try the layout with more of your Home Assistant entities, set `layout: test-focus` and list them. Readings go in a card (tap one to see its last 24 hours); lights are tiles with an on/off button and a brightness bar. Your normal Home never shows them.

```yaml
- type: custom:move-assistant-card
  layout: test-focus
  test_focus:
    - title: Status
      entities: [sensor.house_power, sensor.energy_today]
    - type: lights
      entities: [light.floor_lamp, light.kitchen]
```

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
