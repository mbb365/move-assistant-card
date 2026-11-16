# Move Assistant

HomeCore has moved to its own card, [HomeCore](https://github.com/mbb365/homecore-card). If a dashboard of yours has `layout: test-focus` on this card, install HomeCore and change that card to `type: custom:homecore-card`.

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
- **Sounds**: so you don't need to watch the screen. Ticks count down to the start, two rising notes start a move, a falling note starts a rest, three ticks warn before a move or rest ends, and a chime plays when the move is finished. Pressing Start move turns sound on; on an iPhone it plays even with the silent switch on. Switch it off in Settings → Appearance → **Sounds**.
- **Video steps**: in Edit move, drag in **Add video** and paste a YouTube link. It plays in theater mode, across the row where the timer and pulse sit, with the time left shown by the controls. A link with a start time (`?t=90`) plays from there; you can also set your own length. With rounds, choose whether it plays every round or only in the first or last. The video loads during the step before it, so it starts straight away. Some videos can't play outside YouTube (their owner turned off embedding), and videos with ads play the ad first.
- **This week** counts minutes from the moves you actually do (30 seconds or more).
- **Halves**: tiles in a card sit two side by side whenever each still has 140 px; narrower than that, one per row. The spacing follows HomeCore FINAL in the Figma file.
- **TV mode** (⛶ button) goes full screen with no HA header or sidebar. Works with a keyboard, TV remote or game controller.

### Install

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

### Updating

Updates appear under **Settings → Updates**. Install, then reload the page (or close and reopen the app).

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
