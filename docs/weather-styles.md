# Weather styles

The weather pictures come in three styles. People choose one in **Settings → Appearance → Weather style**; it is saved as `settings.weatherStyle`.

| Style | Value | What it is |
|---|---|---|
| Bitmap | `bitmap` (default) | Colour pixel art at 2 px per pixel, shaded with dither patterns. Decided on 22 Oct 2026. |
| 1-bit | `onebit` | The same drawing in two colours only, ink and paper, with outlines. |
| Smooth | `smooth` | The Figma "Weather icon" component artwork (vector). |

Anything new that shows weather (the 12-hour sky, motion, new conditions) has to work in all three styles and follow the choice.

The reference is the **Weather card motion** Design canvas: https://claude.ai/artifact/BeBeZ36yjFMYQMFW5nh45E. Every artboard has a Look switch (Bitmap, 1-bit, Smooth). The 12-hour sky card from before is on https://claude.ai/artifact/Y5yuauvuYhWuTQYzqBvTq8.

## Where it lives

- `src/weather-art.js`: poses, condition changes and the bitmap renderer. Bitmap and 1-bit both come from here.
- `src/app.js`: `wxIcon()` picks the style; Bitmap and 1-bit icons are canvases, which `paintWx()` fills after the markup is in place and again when the theme changes. Smooth is `wxArt()`.
- `src/styles.css`: `.wxIcon > canvas` and the picker (`.wxStyleChoice`, `.wxStyleBtn`).

## One icon, many poses

Every condition is the same seven parts in different places: sun, moon, cloud, stars, rain, snow, lightning. Poses are drawn in a 90 × 90 box whatever the icon size, so the 54 px icons are the same drawing, smaller.

A part that isn't in a pose still has a place: where it goes when it leaves and where it comes from when it arrives. The sun sets below the box at night and hides behind the cloud when it rains. Clouds wait off to the right. Rain and snow wait inside the cloud.

| Condition (Home Assistant) | Pose |
|---|---|
| `sunny`, `clear-night` | clear |
| `partlycloudy` | partly |
| `cloudy`, `windy`, `exceptional` | cloudy |
| `fog` | fog (cloudy pose, fog sky) |
| `rainy`, `pouring`, `hail` | rain |
| `lightning`, `lightning-rainy` | storm (rain, a bolt, one drop fewer) |
| `snowy`, `snowy-rainy` | snow |

Night comes from `clear-night`, or from `sun.sun` being below the horizon for the weather now.

## Bitmap rules

- **Grid:** 2 px per pixel, so a 90 px icon is 45 × 45 and a 54 px icon is 27 × 27. Drawn on a canvas and scaled with `image-rendering: pixelated`.
- **No blends:** shading is 8 × 8 ordered (Bayer) dither between two colours. Fades are dithered dissolves.
- **Sky:** day skies get lighter toward the horizon and night skies darker toward the top. When the sky changes colour, the two colours dither into each other.
- **Sun:** an orange edge dithered along the Figma gradient (140°, from 65% to the edge).
- **Moon:** a disc with a bite out of it, dithered from pale at the top to gold.
- **Cloud:** a dithered shade on its underside and a solid bottom row.
- **Rain:** thin streaks at 12°.
- **Snow:** small crosses, with diagonals once there's room.
- **Lightning:** drawn from the Figma bolt shape; a hand-placed sprite on coarse grids.
- **Colours:** the canvas palette, with the card's `--wx-clear`, `--wx-night`, `--wx-cloudy`, `--wx-cloud-bright` and `--color-accent-primary` passed over it, so a Figma colour sync reaches the pixels too.

## 1-bit rules

- Every pixel is ink or paper. Light theme: ink is `--color-text-primary` and paper is `--color-bg-card`. Dark theme: ink is the card colour and paper is the text colour.
- Brightness snaps to five levels before dithering, so each area gets one clean pattern instead of noise.
- Sun, moon, cloud and lightning get an ink outline. Rain and sun rays are ink. Snow is ink by day and paper at night. Stars are paper.

## Motion (on the canvas, not built yet)

When the motion is built it has to keep these rules in every style. In Bitmap and 1-bit, parts move in whole pixels and idle loops step at 10 frames a second. `wxMorph()` and the `clock` and `idle` options of `wxBitmap()` are already there for it.

- **Changing condition:** the timings are fractions of a 700 ms change.

  | Part | Arrives | Leaves |
  |---|---|---|
  | Cloud | 0–55%, decelerate | 25–80%, accelerate |
  | Sun and moon | 35–90%, decelerate | 15–65%, accelerate |
  | Rain, snow and stars | 55–100%, one at a time, decelerate | 0–35%, accelerate |

  The sky turns from 10% to 80%, and goes through dusk when day turns to night.
- **Idle loops:**
  - Sun rays take turns, 1 s.
  - Stars blink, 1.8 s.
  - Clouds drift, 6.4 s.
  - Rain falls, 0.95 s.
  - Snow falls, 3.2 s.
  - Lightning flashes, 3.4 s.
- **The card:**
  - Tapping a day dims the others, shows that day in the top of the card, and rolls the numbers.
  - On entrance the sky paints in from left to right.
  - A new forecast paints across the old one.
- **Reduced motion:** nothing travels and there are no idle loops. Changes dissolve in place.
