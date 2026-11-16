const sd = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn,.tfSeg>button,.tfMoreSwitch>button){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', ld = `#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)){transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}}#app.house #homeView{overflow-anchor:none}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab{display:none}.tfIcon.art{background-size:cover;background-position:center}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}@media (prefers-reduced-motion:reduce){.tfMorePair{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 20px 10px}.tfAreaPanel .workoutPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}@media (max-width:620px){.tfMore.wide{width:100%;padding:20px 16px;gap:20px}}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}#app.house :is(.settingsSelect,.addInput){border:1px solid var(--muted)}#app.house{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%23d9d9d9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house.light{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%2326221e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house select.settingsSelect{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 44px 0 16px;background-image:var(--select-chev);background-repeat:no-repeat;background-position:right 16px center;background-size:16px 16px}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.house :is(.tfIcon,.activityRowIcon,.tfAreaIcon,.tfRoomIcon){--chip-hi:.0375;background-image:linear-gradient(180deg,#ffffff08,#fff0)!important;box-shadow:inset 0 1px rgba(255,255,255,var(--chip-hi)),inset 0 -1px color-mix(in srgb,currentColor 3%,transparent),inset 0 -3px 6px color-mix(in srgb,currentColor 3.5%,transparent)}#app.house :is(.on[data-light] .tfIcon,.tfIcon.on[data-light],.tfACTile .tfIcon[data-light],.on[data-tone=alarm] .tfIcon,.tfIcon[data-light]){--chip-hi:.1375}#app.house #settingsView .toggleList{border-radius:var(--r-card);padding-block:4px}#app.house #settingsView .toggleRow{padding-left:18px;padding-right:18px}#app.house #settingsView .toggleRow:not([hidden])~.toggleRow:before{left:18px}#app.house .view{margin-left:0}#app.house{--font:Geist,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-family:var(--font)}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:inset 0 0 0 1px var(--line)}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(600px,85dvh)}@media (max-width:620px){#app .tfMoreBackdrop{place-items:end center;padding:0 16px max(16px,env(safe-area-inset-bottom,0px))}#app .tfMoreBackdrop .tfMorePair{width:100%;max-height:85dvh}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){width:100%;border-radius:34px;box-shadow:inset 0 0 0 1px var(--line),0 10px 30px #00000047}#app .tfMoreBackdrop .tfMore{padding-top:10px;outline:none}#app .tfMoreBackdrop .tfMore:before{content:"";display:block;position:sticky;top:10px;z-index:2;flex:none;width:36px;height:5px;margin:0 auto;border-radius:3px;background:var(--line)}#app .tfMoreBackdrop .tfMore [data-more-close]{display:none}}#app{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.light{--hc-icon:#e6e6e6}#homeView .activityRowIcon{display:grid;place-items:center;background:var(--hc-icon);color:var(--hc-icon-ink);background-image:linear-gradient(180deg,#ffffff08,#fff0);box-shadow:inset 0 1px #ffffff0a,inset 0 -1px color-mix(in srgb,currentColor 3%,transparent),inset 0 -3px 6px color-mix(in srgb,currentColor 3.5%,transparent)}#homeView .activityRowIcon svg{width:26px;height:26px}#homeView .card .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .card:is(.activityCard,.insightCard){display:flex;flex-direction:column}.maGraph{height:130px;padding:0 var(--inset);margin-bottom:var(--inset)}.maGraph svg{display:block;width:100%;height:100%;overflow:visible}.maGraph text{fill:var(--muted);font:400 11px var(--font-tile)}.maGraph text.today{fill:var(--text);font-weight:600}.maGraph rect{transform-box:fill-box;transform-origin:50% 100%}.maCompare{flex:1;min-height:150px;display:grid;grid-template-columns:minmax(0,1fr) 50%;gap:16px;padding:0 var(--inset);margin-bottom:var(--inset)}.maCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.maCompareNumber{font:500 40px/1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.maCompareWords{color:var(--muted);font:300 16px/1.25 var(--font-tile)}.maCompareSub{margin-top:6px;font:400 12px/1.4 var(--font)}.maTrend{position:relative;min-height:0}.maTrendPlot{position:absolute;top:22px;right:0;bottom:24px;left:0}.maTrendPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.maTrendLine{fill:none;stroke:var(--text);stroke-width:2;stroke-linejoin:round;stroke-linecap:round;opacity:.8}.maAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.maTrendDot{position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:var(--card);box-shadow:0 0 0 2px var(--text)}.maTrendDot.today{width:11px;height:11px;margin:-5.5px 0 0 -5.5px;background:var(--primary);box-shadow:0 0 0 3px var(--card)}.maTrendValue{position:absolute;transform:translate(-50%,calc(-100% - 8px));color:var(--muted);font:400 10px/1 var(--font-tile);white-space:nowrap}.maTrendValue.today{color:var(--text);font-size:12px;font-weight:600}.maTrendAvg{position:absolute;right:0;transform:translateY(4px);color:var(--muted);font:400 10px/1 var(--font-tile)}.maTrendDays{position:absolute;left:0;right:0;bottom:0;height:16px}.maTrendDays span{position:absolute;bottom:0;transform:translate(-50%);color:var(--muted);font:400 11px/16px var(--font-tile)}.maTrendDays span.today{color:var(--text);font-weight:600}@container (width < 420px){.maCompare{grid-template-columns:1fr;grid-template-rows:auto 140px}.maCompareNumber{font-size:32px}}`, dd = '#app .mvPv{position:relative;transform:perspective(var(--pv-persp)) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--sc,1));transition:transform var(--pv-ret) var(--pv-ease)}#app .mvPv.mvMoving{transition:transform 70ms linear}#app .mvPv:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;opacity:0;mix-blend-mode:soft-light;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,var(--pv-shine)),transparent var(--pv-size));transition:opacity var(--pv-ret) ease}#app .mvPv.mvLit:after{opacity:1}#app .tfBar{--mv-c:var(--light-soft,var(--primary));transform-origin:center;transition:box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}#app .tfBar.mvHover{box-shadow:0 0 var(--ab-blur) var(--ab-spread) color-mix(in srgb,var(--mv-c) var(--ab-str),transparent);transition-duration:var(--ab-in)}#app .tfBar.mvHold{box-shadow:0 0 var(--ab-blur2) var(--ab-spread2) color-mix(in srgb,var(--mv-c) var(--ab-str2),transparent);transform:var(--ab-grow);transition-duration:var(--ab-in)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>:is(svg,ha-icon,ha-state-icon,span){transition:scale var(--ih-dur) var(--ih-ease)}@media (hover:hover){#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-s)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover:before{opacity:1}}:where(#app button.tfIcon,#app .tfBack,#app .tfEditChip,#app .tfTrayBtn,#app [data-wb=graph-close]){position:relative}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;background:color-mix(in srgb,currentColor var(--ih-tint),transparent);opacity:0;transition:opacity var(--ih-dur) var(--ih-ease)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):active>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-p)}#app .mvSegInd{position:absolute;z-index:0;pointer-events:none}#app .mvSegMoving>button{position:relative;z-index:1;background-color:transparent!important;box-shadow:none!important;transition:none!important}#app .tfMoreBackdrop{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}#app .toast .mvTick{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--mv-ok);color:#fff}#app .toast .mvTick svg{width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}#app .toast .mvToastText{font-weight:600}#app .toast .toastAction{font-size:16px;margin-left:2px}#app .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}#app{--ol-l:68%;--mv-ok:#4cc38a}#app.light{--ol-l:48%;--mv-ok:#1f7a4d}#app .tfAreaPanel:has(>.mvEdge){isolation:isolate;position:relative}#app .mvEdge,#app .mvEdgeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity var(--ol-in) ease-out}#app .mvEdgeFill{z-index:-1;background:hsl(var(--ol-h) 97% var(--ol-l));mix-blend-mode:soft-light;opacity:clamp(0,calc(var(--ol-fill) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-fill));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app .mvEdge{z-index:5}#app .mvEdge:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l));opacity:clamp(0,calc(var(--ol-border) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-border));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%));mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%))}#app .mvEdge>i{position:absolute;top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;border-radius:inherit;mix-blend-mode:plus-lighter;opacity:clamp(0,calc(var(--ol-glow) * (var(--edge-proximity,0) - var(--ol-esens)) / (100 - var(--ol-esens))),var(--ol-glow));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}#app .mvEdge>i:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;--s:var(--ol-size);box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l) / 60%),inset 0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),inset 0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),inset 0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(22.4px*var(--s)) calc(1.6px*var(--s)) hsl(var(--ol-h) 97% var(--ol-l) / 10%)}#app :not(.mvLitEdge)>:is(.mvEdge,.mvEdgeFill){opacity:0;transition:opacity var(--ol-out) ease-out}@media (prefers-reduced-motion:reduce){#app .mvPv{transform:none!important}#app .mvPv:after{display:none}#app .tfBar.mvHold{transform:none}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>*{scale:none!important}}', cd = `<main id="app"><div class="shell">
<div class="toast" id="toast" aria-live="polite"></div>

<!-- HOME -->
<section class="view active" id="homeView">
  <div class="grid">
    <div class="moveSection">
      <div class="sectionLabel">Today’s movement</div>
      <section class="workoutGallery" id="workoutGallery" aria-label="Move choices">
      <article class="workoutPanel addPanel" id="addWorkoutPanel" tabindex="0" role="button" aria-label="Add move">
        <span class="edgeLight" aria-hidden="true"></span>
        <div class="addPanelPlus" data-icon="add"></div>
        <div class="addPanelLabel">Add move</div>
      </article>
    </section>
    </div>
    <div class="sectionLabel rowLabel" id="movementLabel">Movement &amp; you</div>
    <section class="card activityCard">
      <div class="activityHeader">
        <div class="activityTitle">Activity</div>
      </div>
      <div class="maGraph" id="activityGraph"><svg role="img" aria-label="Activity, last 7 days"></svg></div>
      <div class="activityRows">
        <div class="activityRow tap" id="stepsRow" role="button" tabindex="0" data-pick="steps" aria-pressed="true">
          <div class="activityRowIcon" aria-hidden="true" data-mdi="steps"></div>
          <div><div class="activityRowName">Steps</div><div class="activityRowMeta" id="stepsMeta">Set up in Settings</div></div>
        </div>
        <div class="activityRow tap" id="moodRow" role="button" tabindex="0" data-pick="mood" aria-pressed="false">
          <div class="activityRowIcon" aria-hidden="true" data-mdi="mood"></div>
          <div><div class="activityRowName">Mood</div><div class="activityRowMeta" id="moodMeta">—</div></div>
        </div>
        <div class="activityRow tap" id="energyLevelRow" role="button" tabindex="0" data-pick="energy" aria-pressed="false">
          <div class="activityRowIcon" aria-hidden="true" data-mdi="energy"></div>
          <div><div class="activityRowName">Energy</div><div class="activityRowMeta" id="energyLevelMeta">—</div></div>
        </div>
      </div>
    </section>

    <section class="card insightCard" id="insightCard" aria-label="Movement and you"></section>
    <section class="card weatherCard" id="weatherCard" aria-label="Weather"></section>

    <div class="feelSection">
      <div class="sectionLabel">How you've felt this week</div>
      <section class="card feelCard" id="feelCard"></section>
    </div>


  </div>
</section>

<!-- WORKOUT -->
<section class="view workoutSurface" id="workoutView"><canvas id="pixelTrailCanvas" class="pixelTrailCanvas" aria-hidden="true"></canvas><div class="workoutContent">
  <div class="countdown" id="countdown"><canvas class="pixelCanvas" id="countdownPixelCanvas" aria-hidden="true"></canvas><div class="countNum" id="countNum">5</div></div>
  <div class="sessionHead">
    <div><div class="exerciseTitle" id="exerciseTitle">Standing reach</div><div class="eyebrow" id="stepLabel">Step</div><div class="meta" id="exerciseMeta" hidden>Move finished</div></div>
    <div class="sessionActions">
      <button class="pill" id="restartSegment" type="button">Back</button>
      <button class="pill holdEnd" id="endWorkout" type="button" aria-label="Hold to end move"><span class="holdEndFill" id="holdEndFill"></span><span class="holdEndLabel">End move</span></button>
    </div>
  </div>
  <div class="progress" id="progress"></div>
  <div class="workGrid"><section class="timerCard"><div class="fill" id="fill"></div><div class="digits" id="digits">30</div></section><section class="movementCard"><canvas id="movementRippleCanvas" class="movementRippleCanvas" aria-hidden="true"></canvas><div class="videoStage" id="videoStage"><div class="videoFrame" id="videoFrame"></div><button class="primary videoSound" id="videoSound" type="button" hidden>Turn sound on</button></div></section></div>

  <div class="sessionControlRow">
    <div class="videoClock" id="videoClock" aria-live="off"></div>
    <button class="skipBtn" id="skipExercise" type="button">Skip</button>
    <button class="primary pause" id="pause" type="button">Pause</button>
  </div>

  <div class="nextWrap">
    <div class="nextLabel">Up next</div>
    <section class="nextCard">
      <div class="nextMain">
        <div class="nextIcon" id="nextIcon" aria-hidden="true" data-icon="clock"></div>
        <div>
          <div class="nextName" id="nextName">Arm circles</div>
          <div class="sub" id="nextMeta">Warm-up</div>
        </div>
      </div>
      <button class="skipSessionBtn" id="skipNextSession" type="button">Skip this session</button>
    </section>
    <div class="upcomingList" id="upcomingList" aria-label="Upcoming exercises"></div>
  </div>
</div></section>

<!-- SETTINGS -->
<section class="view" id="settingsView">
  <div class="settingsHeader"><button class="back" id="settingsBack" aria-label="Back" data-icon="back"></button><div class="settingsTitle">Move Assistant</div></div>
  <div class="tabs rubberTabs">
    <div class="rubberIndicator" id="rubberIndicator" aria-hidden="true"></div>
    <button class="tab segBtn active" data-pane="integrationsPane">Integrations</button>
    <button class="tab segBtn" data-pane="dataPane">Data</button>
    <button class="tab segBtn" data-pane="checkinPane">Check-in</button>
    <button class="tab segBtn" data-pane="appearancePane">Appearance</button>
    <button class="tab segBtn" data-pane="helpPane">Help</button>
  </div>

  <div class="settingsPane active" id="integrationsPane">
    <section class="card">
      <h2 class="paneTitle">Connected sources</h2>
      <p class="note">Move Assistant can work on its own. Pick your step sensor so general movement counts alongside your moves.</p>
      <div class="integrationList">
        <div class="integration"><div><strong>Steps</strong><div class="status" id="stepsStatus" data-empty="Your phone's step sensor from the Companion app">Your phone's step sensor from the Companion app</div></div><select class="settingsSelect entitySelect" id="stepsEntity" data-kind="steps" aria-label="Steps sensor"></select></div>
        <div class="integration"><div><strong>Apple Health</strong><div class="status">Use the Home Assistant iPhone app to send your steps</div></div><button class="pill" id="healthHelpOpen" type="button">Help</button></div>
        <div class="integration"><div><strong>Home Assistant</strong><div class="status">Moves send a <code>move_assistant</code> event on start, each step, rest, pause and finish — use it in automations for lights, sound and displays</div></div><button class="pill" type="button" disabled>Connected</button></div>
      </div>
    </section>
  </div>

  <div class="settingsPane" id="dataPane">
    <section class="card">
      <h2 class="paneTitle">What you see</h2>
      <p class="note">Choose what appears in Move Assistant. Turning these off does not affect move playback.</p>
      <div class="toggleList">
        <div class="toggleRow"><div><strong>Steps</strong><div class="status">Daily step count</div></div><button class="switch on" data-toggle="steps"></button></div>
        <div class="toggleRow"><div><strong>Mood</strong><div class="status">Latest mood in the Activity card</div></div><button class="switch on" data-toggle="mood"></button></div>
        <div class="toggleRow"><div><strong>Energy</strong><div class="status">Latest energy in the Activity card</div></div><button class="switch on" data-toggle="energyLevel"></button></div>
        <div class="toggleRow"><div><strong>Reset stats</strong><div class="status">Clears moves done and check-ins. Your moves and settings stay.</div></div><button class="holdDelete" id="resetStats" type="button" aria-label="Hold to reset stats"><span class="holdDeleteFill" id="resetStatsFill"></span><span class="holdDeleteLabel">Hold to reset</span></button></div>
      </div>
    </section>
  </div>

  <div class="settingsPane" id="checkinPane">
    <section class="card">
      <h2 class="paneTitle">Check-in</h2>
      <p class="note">Twice a day, Move Assistant asks how your mood and energy are. When it's time, the check-in tab on the right shows a dot. You can only check in when one is due.</p>
      <div class="toggleList">
        <div class="toggleRow"><div><strong>Morning check-in</strong><div class="status">When the morning check-in becomes due</div></div><input class="settingsSelect timeInput" id="morningTime" type="time" value="08:00" aria-label="Morning check-in time"></div>
        <div class="toggleRow"><div><strong>Evening check-in</strong><div class="status">When the evening check-in becomes due</div></div><input class="settingsSelect timeInput" id="eveningTime" type="time" value="19:00" aria-label="Evening check-in time"></div>
        <div class="toggleRow"><div><strong>Open automatically</strong><div class="status">Show the check-in window when it's due, instead of just the dot</div></div><button class="switch on" id="checkinAutoOpen" aria-label="Open check-in automatically"></button></div>
        <div class="toggleRow"><div><strong>Phone notification</strong><div class="status" id="checkinNotifyStatus">Get a Home Assistant notification when it's time to check in</div></div><button class="switch" id="checkinNotify" aria-label="Send a notification when it's time to check in"></button></div>
        <div class="toggleRow" id="checkinNotifyTargetRow" hidden><div><strong>Send to</strong><div class="status">Your phone from the Companion app</div></div><select class="settingsSelect entitySelect" id="checkinNotifyTarget" aria-label="Notification device"></select></div>
      </div>
    </section>
  </div>

  <div class="settingsPane" id="helpPane">
    <section class="card helpCard">
      <h2 class="paneTitle">Connect Apple Health</h2>
    <p class="note">The Home Assistant app on your iPhone can read Apple Health and send it to Home Assistant. Steps include your Apple Watch.</p>

    <ol class="helpSteps">
      <li>
        <strong>Update the Home Assistant app</strong>
        <span>On your iPhone, update <b>Home Assistant</b> from the App Store. Apple Health needs version <b>2026.9</b> or newer.</span>
      </li>
      <li>
        <strong>Turn on Apple Health</strong>
        <span>In the app: <b>Settings → Companion app → Sensors → Apple Health</b>. Switch it on.</span>
      </li>
      <li>
        <strong>Allow access</strong>
        <span>When iPhone asks, allow Home Assistant to read <b>Steps</b>. Turn on the <b>Steps</b> sensor in the Apple Health list.</span>
      </li>
      <li>
        <strong>Pick it in Move Assistant</strong>
        <span>Settings → Integrations → Steps → choose <b>… Health steps</b>.</span>
      </li>
    </ol>

    <div class="helpNote">
      <strong>When it updates</strong>
      <span>Your phone sends new numbers when the app syncs, for example when you unlock your phone or open Home Assistant. It isn't live to the second.</span>
    </div>
    <div class="helpNote">
      <strong>Not seeing it?</strong>
      <span>Check iPhone <b>Settings → Health → Data Access &amp; Devices → Home Assistant</b> and make sure Steps is allowed.</span>
    </div>
    </section>
  </div>

  <div class="settingsPane" id="appearancePane">
    <section class="card">
      <h2 class="paneTitle">Appearance</h2>
      <p class="note">Choose how Move Assistant looks and which visual effects are enabled.</p>

      <div class="toggleList">
        <div class="toggleRow">
          <div>
            <strong>Theme</strong>
            <div class="status">Choose the app surface treatment.</div>
          </div>
          <div class="themeChoice">
            <button class="themeBtn active" data-theme="dark">Dark</button>
            <button class="themeBtn" data-theme="light">Light</button>
          </div>
        </div>

        <div class="toggleRow">
          <div>
            <strong>Sounds</strong>
            <div class="status">Tones when a move or rest starts, and three ticks before it ends.</div>
          </div>
          <button class="switch on" id="soundsToggle" aria-label="Toggle sounds"></button>
        </div>

        <div class="toggleRow">
          <div>
            <strong>Pixel trail</strong>
            <div class="status">Pointer-reactive pixels across the movement background.</div>
          </div>
          <button class="switch on" id="pixelTrailToggle" aria-label="Toggle pixel trail"></button>
        </div>

        <div class="toggleRow motionControlRow">
          <div>
            <strong>Trail strength</strong>
            <div class="status">Controls how much of the movement surface reacts.</div>
          </div>
          <div class="motionRangeWrap">
            <input id="trailStrength" type="range" min="20" max="100" step="10" value="70" aria-label="Pixel trail strength">
            <span id="trailStrengthValue">70%</span>
          </div>
        </div>

        <div class="toggleRow motionControlRow">
          <div>
            <strong>Trail life</strong>
            <div class="status">How long the pixel trail remains visible.</div>
          </div>
          <div class="motionRangeWrap">
            <input id="trailLife" type="range" min="200" max="1000" step="100" value="600" aria-label="Pixel trail life">
            <span id="trailLifeValue">600 ms</span>
          </div>
        </div>


        <div class="toggleRow">
          <div>
            <strong>Activities ahead</strong>
            <div class="status">Choose how many upcoming activities are visible during a move.</div>
          </div>
          <select class="settingsSelect" id="upcomingCountSetting" aria-label="Number of upcoming activities to show"></select>
        </div>

        <div class="toggleRow">
          <div>
            <strong>Movement ripple</strong>
            <div class="status">Animate the movement card in time with each activity.</div>
          </div>
          <button class="switch on" id="rippleToggle" aria-label="Toggle movement ripple"></button>
        </div>
      </div>
    </section>

    <section class="card metaCard">
      <h2 class="paneTitle">Second line on phones</h2>
      <p class="note">Hide the small line under a step’s name on phones, by type, to fit more on screen.</p>
      <div class="metaFilters">
        <input class="addInput metaSearch" id="metaSearch" type="search" placeholder="Filter types" aria-label="Filter types" autocomplete="off">
        <div class="metaKinds" id="metaKinds" role="group" aria-label="Show kind">
          <button class="kindChip active" type="button" data-kind="all">All</button>
          <button class="kindChip" type="button" data-kind="Warm-up">Warm-up</button>
          <button class="kindChip" type="button" data-kind="Movement">Movements</button>
          <button class="kindChip" type="button" data-kind="Cooldown">Cooldown</button>
          <button class="kindChip" type="button" data-kind="Rest">Rest</button>
          <button class="kindChip" type="button" data-kind="Video">Video</button>
        </div>
      </div>
      <div class="metaTableWrap">
        <table class="metaTable">
          <thead><tr><th scope="col">Type</th><th scope="col" class="metaKindCol">Kind</th><th scope="col" class="metaUsedCol">Used in</th><th scope="col" class="metaSwitchCol">Second line</th></tr></thead>
          <tbody id="metaTableBody"></tbody>
        </table>
      </div>
      <div class="metaBulk">
        <span class="status" id="metaCount"></span>
        <div class="metaBulkActions"><button class="pill" id="metaHideAll" type="button">Hide for these</button><button class="pill" id="metaShowAll" type="button">Show for these</button></div>
      </div>
    </section>
  </div>
</section>

<!-- WEATHER: the bigger view, opened from the weather card -->
<div class="confirmBackdrop wxBackdrop" id="wxDialog" aria-hidden="true">
  <section class="confirmCard wxDialogCard" role="dialog" aria-modal="true" aria-labelledby="wxDialogTitle">
    <div class="wxDialogHead">
      <h2 class="activityTitle" id="wxDialogTitle">Weather</h2>
      <button class="back wxDialogClose" id="wxDialogClose" type="button" aria-label="Close" data-icon="close"></button>
    </div>
    <div class="wxNow wxDialogNow" id="wxDialogNow"></div>
    <div class="wxGraph" id="wxGraph" tabindex="0" role="slider" aria-label="Time in the forecast" aria-valuemin="0" aria-valuemax="143" aria-valuenow="0">
      <div class="wxGraphDays" id="wxGraphDays" aria-hidden="true"></div>
      <div class="wxGraphSky" id="wxGraphWrap">
        <canvas data-wx-strip="dialog" aria-hidden="true"></canvas>
        <svg class="wxGraphLine" id="wxGraphLine" aria-hidden="true"></svg>
      </div>
    </div>
  </section>
</div>

<div class="confirmBackdrop checkinBackdrop" id="checkinModal" aria-hidden="true">
  <section class="confirmCard checkinCard" role="dialog" aria-modal="true" aria-labelledby="checkinTitle">
    <div class="confirmTitle" id="checkinTitle">Morning check-in</div>
    <div class="sub">How are you right now?</div>
    <div class="checkinSliders">
        <section class="tile timeTile checkinTile">
          <div class="timeHeader">
            <div class="timeIcon" aria-hidden="true" data-icon="mood"></div>
            <div class="timeCopy">
              <div class="timeLabel">Mood</div>
            </div>
          </div>
          <div>
            <div class="rangeTrack">
              <div class="rangeFill" id="moodFill"></div>
              <input class="rangeInput" id="moodInput" type="range" min="0" max="100" step="1" value="50" aria-label="Mood, from terrible to great">
            </div>
            <div class="scaleEnds" aria-hidden="true"><span>Terrible</span><span>Great</span></div>
          </div>
        </section>
        <section class="tile timeTile checkinTile">
          <div class="timeHeader">
            <div class="timeIcon" aria-hidden="true" data-icon="energy"></div>
            <div class="timeCopy">
              <div class="timeLabel">Energy</div>
            </div>
          </div>
          <div>
            <div class="rangeTrack">
              <div class="rangeFill" id="energyLevelFill"></div>
              <input class="rangeInput" id="energyLevelInput" type="range" min="0" max="100" step="1" value="50" aria-label="Energy, from terrible to great">
            </div>
            <div class="scaleEnds" aria-hidden="true"><span>Terrible</span><span>Great</span></div>
          </div>
        </section>
    </div>
    <div class="confirmActions">
      <button class="pill" id="checkinLater" type="button">Later</button>
      <button class="primary" id="checkinSave" type="button">Done</button>
    </div>
  </section>
</div>

<button class="checkinTab" id="checkinTab" type="button" aria-label="Open check-in">
  <span class="checkinPeek" id="checkinPeek" aria-live="polite">
    <span class="peekCountdown" id="peekCountdown">0:00:00</span>
    <span class="peekAt" id="peekAt">Available at 19:00</span>
  </span>
  <span class="checkinTabMain">
    <span class="checkinTabIcon" aria-hidden="true" data-icon="mood"></span>
    <span class="checkinTabLabel">Check-in</span>
  </span>
  <span class="checkinBadge" id="checkinBadge" hidden></span>
</button>

<div class="confirmBackdrop" id="deleteMoveConfirm" aria-hidden="true">
  <section class="confirmCard">
    <div>
      <div class="confirmTitle">Are you sure you want to delete the move?</div>
      <div class="sub">This removes it from your movement list.</div>
    </div>
    <div class="confirmActions">
      <button class="pill" id="deleteMoveCancel">Cancel</button>
      <button class="holdDelete" id="deleteMoveYes" type="button" aria-label="Hold to confirm delete">
        <span class="holdDeleteFill" id="deleteMoveFill"></span>
        <span class="holdDeleteLabel">Yes</span>
      </button>
    </div>
  </section>
</div>

<!-- NAV -->
<nav class="bottomNav">
  <button class="navBtn active" id="homeNav" title="Home" aria-label="Home" data-icon="home"></button>
  <button class="navBtn" id="settingsNav" title="Settings" aria-label="Settings" data-icon="settings"></button>
  <button class="navBtn" id="tvNav" title="TV mode (full screen)" aria-label="TV mode (full screen)" data-icon="fullscreen"></button>
</nav>

<!-- CONTROL CENTER MODAL -->
<div class="modalBackdrop" id="workoutModal" aria-hidden="true">
  <section class="modal">
    <div class="modalTop">
      <div class="modalHead">
        <div>
          <h2 id="moveEditorTitle">Edit move</h2>
          <div class="sub" id="moveEditorSubtitle">Adjust timing and choose which movements are included today.</div>
        </div>
        <div class="modalHeaderActions">
          <button class="pill dangerText" id="deleteMoveOpen">Delete</button>
          <button class="pill" id="cancelWorkoutEdit">Cancel</button>
          <button class="primary" id="saveWorkoutEdit">Save</button>
        </div>
      </div>
    </div>
    <div class="modalStatic">

      <div class="editNameRow">
        <label class="editNameLabel" for="workoutNameInput">Move name</label>
        <input id="workoutNameInput" class="editNameInput" type="text" value="Kettlebell full body">
      </div>

      <section class="createMoveOptions" id="createMoveOptions" hidden>
        <div class="createOptionLabel">Preset</div>
        <div class="createPresetChoice" role="group" aria-label="Move preset">
          <button class="createPresetBtn active" data-move-preset="movement" type="button">
            <strong>Movement</strong>
            <span>Seconds-based activity timing</span>
          </button>
          <button class="createPresetBtn" data-move-preset="work" type="button">
            <strong>Work timer</strong>
            <span>Longer focus blocks in minutes or hours</span>
          </button>
        </div>

        <div class="createExtras">
          <label class="createExtraToggle">
            <input type="checkbox" id="includeWarmupPreset">
            <span><strong>Premade warm-up</strong><small>Add a simple warm-up sequence</small></span>
          </label>
          <label class="createExtraToggle">
            <input type="checkbox" id="includeCooldownPreset">
            <span><strong>Premade cooldown</strong><small>Add a simple cooldown sequence</small></span>
          </label>
        </div>
      </section>

      <div class="timeTiles setupBlock">
        <div class="setupCaption">Timing</div>
        <div class="setupGroup">
          <div class="setupRow timeTotal">
            <span class="setupName" id="totalLabel">Total time</span>
            <span class="setupValue" id="totalOut">20 min</span>
            <div class="rangeTrack" hidden>
              <div class="rangeFill" id="totalFill"></div>
              <input class="rangeInput" id="totalTime" type="range" min="3" max="40" step="1" value="20" aria-label="Time per round in minutes" tabindex="-1">
            </div>
          </div>
          <div class="setupRow withSlider">
            <div class="setupRowTop"><span class="setupName">Work</span><span class="setupValue" id="workOut">45 sec</span></div>
            <div class="rangeTrack setupSlider">
              <div class="rangeFill" id="workFill"></div>
              <input class="rangeInput" id="workTime" type="range" min="20" max="60" step="5" value="45" aria-label="Work interval">
            </div>
          </div>
          <div class="setupRow withSlider">
            <div class="setupRowTop"><span class="setupName">Rest</span><span class="setupValue" id="restOut">15 sec</span></div>
            <div class="rangeTrack setupSlider">
              <div class="rangeFill" id="restFill"></div>
              <input class="rangeInput" id="restTime" type="range" min="5" max="30" step="5" value="15" aria-label="Rest interval">
            </div>
          </div>
          <div class="setupRow" id="roundsTile">
            <div class="setupText"><span class="setupName">Rounds</span><span class="setupValue" id="roundsOut">1 round</span></div>
            <div class="stepper" role="group" aria-label="Rounds">
              <button class="stepBtn" type="button" data-rounds-step="-1" aria-label="One round fewer">−</button>
              <span class="stepCount" id="roundsCount" aria-live="polite">1</span>
              <button class="stepBtn" type="button" data-rounds-step="1" aria-label="One more round">+</button>
            </div>
            <div class="rangeTrack" hidden>
              <div class="rangeFill" id="roundsFill"></div>
              <input class="rangeInput" id="roundsInput" type="range" min="1" max="10" step="1" value="1" aria-label="How many times to repeat the move" tabindex="-1">
            </div>
          </div>
          <div class="setupRow" id="warmupRow">
            <span class="setupName">Warm-up</span>
            <button class="switch on" id="warmupSwitch" type="button" role="switch" aria-checked="true" aria-label="Warm-up"></button>
          </div>
        </div>
      </div>

    <div class="routineSummary" id="routineSummaryModal">20 min · 45 / 15 · warm-up + cooldown</div>
    <div class="tempoRevealRow">
      <button class="pill tempoRevealBtn" id="tempoRevealBtn" type="button" aria-expanded="false">Don’t try this!</button>
    </div>

    <section class="tempoExperiment editTempoExperiment testingZone" id="tempoExperiment" hidden>
      <div class="testingZoneInner">
        <div class="testingZoneTitleBlock">
          <div class="testingZoneTitleRow">
            <strong>Quad tempo controller</strong>
            <span id="tempoEstimate" hidden></span>
          </div>
          <p class="testingZoneExplanation">This interaction replaces the need for the three sliders, by allowing the user to choose a tempo by feel. It is not intended to make selection easier, but to make it more natural.</p>
        </div>

        <div class="testingZoneLayout">
          <form class="testingFeedbackForm" id="testingFeedbackForm">
            <div class="testingFeedbackHeading">Feedback</div>

            <label class="testingFeedbackField">
              <span>Do you like eggs?</span>
              <div class="testingRating" role="group" aria-label="Do you like eggs?">
                <button type="button" data-feedback-rating="1">1</button>
                <button type="button" data-feedback-rating="2">2</button>
                <button type="button" data-feedback-rating="3">3</button>
                <button type="button" data-feedback-rating="4">4</button>
                <button type="button" data-feedback-rating="5">5</button>
              </div>
            </label>

            <label class="testingFeedbackField">
              <span>Would you trust a duck with your timing?</span>
              <select id="testingDuckAnswer">
                <option value="">Choose one</option>
                <option>Absolutely</option>
                <option>Maybe</option>
                <option>Never</option>
              </select>
            </label>

            <label class="testingFeedbackField">
              <span>Anything suspiciously egg-related?</span>
              <textarea id="testingFeedbackText" rows="3" placeholder="Optional"></textarea>
            </label>

            <button class="testingFeedbackSubmit" id="testingFeedbackSubmit" type="submit">Submit feedback</button>
          </form>

          <div class="testingFeedbackThanks" id="testingFeedbackThanks" hidden>
            <strong>Thank you!</strong>
            <p>You can give more feedback <a href="#" id="testingFeedbackAgain">here</a>.</p>
          </div>

          <div class="testingZoneControllerWrap">
            <div class="tempoQuadFrame">
              <div class="tempoQuad" id="tempoQuad" role="slider" tabindex="0" aria-label="Quad tempo controller">
                <div class="tempoCross" aria-hidden="true"></div>
                <div class="tempoDot" id="tempoDot" aria-hidden="true"></div>
                <span class="tempoPole tempoFast">Fast</span>
                <span class="tempoPole tempoSlow">Slow</span>
                <span class="tempoPole tempoHard">Hard</span>
                <span class="tempoPole tempoLow">Low</span>
              </div>
            </div>
            <div class="tempoReadout" id="tempoReadout">Balanced tempo</div>
          </div>
        </div>
      </div>
    </section>
    </div>

    <div class="exerciseScroller">
    <button class="setupSummary" id="setupSummary" type="button"><span class="setupSummaryText"><strong id="setupSummaryName">Move</strong><small id="setupSummaryMeta"></small></span><span class="setupSummaryAction">Setup ›</span></button>
    <div class="createFlow" id="createFlow" hidden>
      <section class="createStep active" id="createStepMovements" data-create-step="movements">
        <button class="createStepHeader" type="button" data-open-step="movements">
          <span class="createStepIdentity"><span class="createStepNumber">1</span><strong>Movements</strong></span>
          <span class="createStepSummary" id="movementStepSummary">No movements yet</span>
        </button>
        <div class="createStepBody">
          <div class="createStepSlot" id="createMovementsSlot"></div>
          <div class="createStepFooter">
            <button class="primary" id="continueToTiming" type="button" disabled>Continue to timing</button>
          </div>
        </div>
      </section>

      <section class="createStep" id="createStepTiming" data-create-step="timing">
        <button class="createStepHeader" type="button" data-open-step="timing" disabled>
          <span class="createStepIdentity"><span class="createStepNumber">2</span><strong>Timing</strong></span>
          <span class="createStepSummary" id="timingStepSummary">Add a movement first</span>
        </button>
        <div class="createStepBody">
          <div class="createStepSlot" id="createTimingSlot"></div>
          <div class="createStepFooter">
            <button class="primary" id="continueToFinish" type="button">Continue to finish</button>
          </div>
        </div>
      </section>

      <section class="createStep" id="createStepFinish" data-create-step="finish">
        <button class="createStepHeader" type="button" data-open-step="finish" disabled>
          <span class="createStepIdentity"><span class="createStepNumber">3</span><strong>Finish</strong></span>
          <span class="createStepSummary" id="finishStepSummary">Name and optional extras</span>
        </button>
        <div class="createStepBody">
          <div class="createStepSlot" id="createFinishSlot"></div>
          <div class="createStepFooter">
            <button class="primary" id="finishMoveButton" type="button">Save move</button>
          </div>
        </div>
      </section>
    </div>
    <section>
      <div class="sectionTitle">Stretch to start</div>
      <div class="moveList" id="warmupList"></div>
    </section>


    <div class="movementCreatorLaunch" id="movementCreatorLaunch">
      <button class="addBtn movementCreatorOpen" id="addMovementBtn" type="button">Add movement</button>
      <button class="restAddBtn" id="addRestBtn" type="button">Add rest</button>
      <button class="restAddBtn" id="addVideoBtn" type="button">Add video</button>
    </div>

    <section class="movementCreator" id="movementCreator" hidden aria-label="Create movement">
      <div class="movementCreatorHead">
        <h3 id="movementCreatorHeading">Add movement</h3>
        <button class="pill movementCreatorClose" id="closeMovementCreator" type="button">Cancel</button>
      </div>

      <div class="movementCreatorFields" id="movementFields">
        <label>
          <span>Name</span>
          <input class="addInput" id="addMovementInput" type="text" placeholder="e.g. stair climb, deep work">
        </label>

        <label>
          <span>Type / group</span>
          <input class="addInput" id="addMovementGroup" type="text" placeholder="e.g. Mobility, cardio, work">
        </label>

        <div class="movementTimingRow">
          <label class="durationStack">
            <span>Duration</span>
            <div class="creatorDurationRow">
              <input class="addInput creatorNumber" id="addMovementDuration" type="number" min="1" max="3600" step="1" value="45">
              <select class="creatorUnitSelect" id="addMovementUnit" aria-label="Movement duration unit">
                <option value="sec">seconds</option>
                <option value="min">minutes</option>
                <option value="hour">hours</option>
              </select>
            </div>
          </label>

          <label class="globalTimingToggle">
            <input type="checkbox" id="useGlobalTiming" checked>
            <span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span>
            <span class="toggleLabel" id="globalTimingValue">Use global timing · 45 seconds</span>
          </label>

          <button class="primary creatorAddButton" id="confirmAddMovement" type="button">Add</button>
        </div>
      </div>

      <div class="movementCreatorFields restFields" id="restFields" hidden>
        <label>
          <span>Name</span>
          <input class="addInput" id="addRestTitle" type="text" value="Rest" placeholder="e.g. rest">
        </label>

        <label>
          <span>Type / group</span>
          <input class="addInput" id="addRestGroup" type="text" value="Rest" placeholder="e.g. stand up!">
        </label>

        <div class="movementTimingRow">
          <label class="durationStack">
            <span>Duration</span>
            <div class="creatorDurationRow">
              <input class="addInput creatorNumber" id="addRestDuration" type="number" min="5" max="3600" step="5" value="30">
              <select class="creatorUnitSelect" id="addRestUnit" aria-label="Rest duration unit">
                <option value="sec">seconds</option>
                <option value="min">minutes</option>
                <option value="hour">hours</option>
              </select>
            </div>
          </label>

          <label class="globalTimingToggle">
            <input type="checkbox" id="useGlobalRestTiming">
            <span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span>
            <span class="toggleLabel" id="globalRestTimingValue">Use global timing · 15 seconds</span>
          </label>

          <button class="primary creatorAddButton" id="confirmAddRest" type="button">Add</button>
        </div>
      </div>
    </section>
    <section>
      <div class="sectionTitle">Kettlebell work</div>
      <div class="moveList" id="strengthList"></div>
    </section>

    <section>
      <div class="sectionTitle">Cooldown</div>
      <div class="moveList" id="cooldownList"></div>
    </section>
    </div>

    <!-- phones: add button, and the bottom sheet that edits a step or the setup -->
    <button class="addFab" id="addFab" type="button" aria-label="Add a step" data-icon="add"></button>
    <div class="sheetScrim" id="sheetScrim"></div>
    <section class="sheet" id="sheet" role="dialog" aria-modal="true" aria-labelledby="sheetTitle" aria-hidden="true">
      <div class="sheetGrab" aria-hidden="true"></div>
      <h3 class="sheetTitle" id="sheetTitle">Edit</h3>
      <div class="sheetBody" id="sheetBody"></div>
    </section>
  </section>
</div>
`, rn = {
  skyClearDay: "#03a9f4",
  skyClearNight: "#1d2b4f",
  skyCloudyDay: "#d8d6d6",
  skyCloudyNight: "#363a45",
  skyRainDay: "#969696",
  skyRainNight: "#2d3139",
  skySnowDay: "#d4d8df",
  skySnowNight: "#384055",
  skyFogDay: "#dddcda",
  skyFogNight: "#3d4047",
  sun: "#ffe100",
  sunEdge: "#ffaa00",
  moon: "#f2c95e",
  star: "#ffffff",
  cloudDay: "#f1f1f1",
  cloudNight: "#d8d6d6",
  rain: "#03a9f4",
  snow: "#ffffff",
  dusk: "#d9876b"
}, $e = (r) => r < 0 ? 0 : r > 1 ? 1 : r, hs = (r, d, o) => r + (d - r) * o, wi = (r) => {
  const d = String(r || "#000000").trim().replace("#", ""), o = d.length === 3 ? d.split("").map((y) => y + y).join("") : d;
  return [0, 2, 4].map((y) => parseInt(o.slice(y, y + 2), 16) || 0);
}, pd = (r) => "#" + r.map((d) => Math.round(Math.max(0, Math.min(255, d))).toString(16).padStart(2, "0")).join(""), vs = {}, Ee = (r, d, o) => {
  const y = r + d + o;
  return vs[y] || (vs[y] = pd(wi(r).map((w, S) => w + (wi(d)[S] - w) * o)));
}, fs = {}, io = (r) => fs[r] || (fs[r] = wi(r)), hi = (r, d, o, y) => (w) => {
  if (w <= 0) return 0;
  if (w >= 1) return 1;
  let S = 0, P = 1, D = w;
  for (let I = 0; I < 18; I++)
    D = (S + P) / 2, 3 * (1 - D) * (1 - D) * D * r + 3 * (1 - D) * D * D * o + D * D * D < w ? S = D : P = D;
  return 3 * (1 - D) * (1 - D) * D * d + 3 * (1 - D) * D * D * y + D * D * D;
}, ud = { std: hi(0.2, 0, 0, 1), acc: hi(0.3, 0, 1, 1), dec: hi(0, 0, 0, 1) };
function ks(r, d) {
  const o = String(r || "");
  return (o === "sunny" || o === "clear-night" ? "clear" : o === "partlycloudy" ? "partly" : o === "fog" ? "fog" : o === "lightning" || o === "lightning-rainy" ? "storm" : o === "snowy" || o === "snowy-rainy" ? "snow" : o === "rainy" || o === "pouring" || o === "hail" ? "rain" : "cloudy") + "/" + (o === "clear-night" || d ? "night" : "day");
}
function Cs(r) {
  const d = { clear: [r.skyClearDay, r.skyClearNight], cloudy: [r.skyCloudyDay, r.skyCloudyNight], rain: [r.skyRainDay, r.skyRainNight], snow: [r.skySnowDay, r.skySnowNight], fog: [r.skyFogDay, r.skyFogNight] };
  return d.partly = [Ee(d.clear[0], d.cloudy[0], 0.12), Ee(d.clear[1], d.cloudy[1], 0.12)], d.storm = [Ee(d.rain[0], "#000000", 0.22), Ee(d.rain[1], "#000000", 0.22)], d;
}
const yi = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], ki = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], Ci = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function xs(r, d = rn) {
  const o = { ...rn, ...d }, y = Cs(o), w = String(r).split("/"), S = y[w[0]] ? w[0] : "clear", P = w[1] === "night", D = y[S][P ? 1 : 0], I = {
    night: P,
    clearness: S === "clear" ? 1 : S === "partly" ? 0.7 : 0.25,
    sky: D,
    skyStops: [D],
    skyT: 0,
    sun: { x: 45, y: P ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: P ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: P ? 1 : 0 },
    stars: yi.map(() => ({ o: 0 })),
    rain: ki.map(() => ({ o: 0, dy: -16 })),
    snow: Ci.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, B = (C) => yi.map(() => ({ o: C }));
  return S === "clear" ? P ? (I.moon.o = 1, I.stars = B(1)) : I.sun.o = 1 : S === "partly" ? (I.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: P ? 1 : 0 }, P ? (I.moon = { x: 34, y: 33, d: 48, o: 1 }, I.stars = B(0.7)) : I.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : S === "cloudy" || S === "fog" ? (I.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: P ? 1 : 0 }, P ? I.moon = { x: 40, y: 36, d: 40, o: 0 } : I.sun = { x: 40, y: 36, r: 20, o: 0 }) : (I.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, P ? I.moon = { x: 38, y: 28, d: 36, o: 0 } : I.sun = { x: 38, y: 28, r: 18, o: 0 }, S === "snow" ? I.snow = Ci.map(() => ({ o: 1, dy: 0 })) : I.rain = ki.map((C, h) => ({ o: S === "storm" && h === 1 ? 0 : 1, dy: 0 })), S === "storm" && (I.bolt = { o: 1, dy: 0 })), I;
}
const bs = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function md(r, d, o, y = rn, w = !1) {
  const S = { ...rn, ...y }, P = (v, f) => v > 0.01 && f > 0.01 ? "stay" : v > 0.01 ? "leave" : f > 0.01 ? "enter" : "none", D = (v, f, H, j) => {
    const K = v[0] + f * j, ce = v[1] - (H - 1 - f) * j;
    return ud[v[2]]($e((o - K) / Math.max(1e-3, ce - K)));
  }, I = (v, f, H, j = 0, K = 1, ce = 0) => {
    const $ = P(v.o, f.o);
    if ($ === "none") return { ...f, o: 0 };
    const Y = D(bs[H][$], j, K, ce), te = {};
    for (const ee in f) te[ee] = w && $ !== "stay" && ee !== "o" ? $ === "leave" ? v[ee] : f[ee] : hs(v[ee], f[ee], Y);
    return te;
  }, B = D(bs.sky, 0, 1, 0);
  let C, h;
  if (r.night !== d.night) {
    const v = Math.min(r.clearness, d.clearness), f = Ee(Ee(r.sky, d.sky, 0.5), S.dusk, 0.6 * v);
    C = B < 0.5 ? Ee(r.sky, f, B * 2) : Ee(f, d.sky, B * 2 - 1), h = v > 0.5 ? [r.sky, S.dusk, d.sky] : [r.sky, d.sky];
  } else
    C = Ee(r.sky, d.sky, B), h = [r.sky, d.sky];
  return {
    night: o < 0.5 ? r.night : d.night,
    clearness: hs(r.clearness, d.clearness, o),
    sky: C,
    skyStops: h,
    skyT: B,
    sun: I(r.sun, d.sun, "body"),
    moon: I(r.moon, d.moon, "body"),
    cloud: I(r.cloud, d.cloud, "cloud"),
    stars: d.stars.map((v, f) => I(r.stars[f], v, "fx", f, d.stars.length, 0.05)),
    rain: d.rain.map((v, f) => I(r.rain[f], v, "fx", f, d.rain.length, 0.05)),
    snow: d.snow.map((v, f) => I(r.snow[f], v, "fx", f, d.snow.length, 0.05)),
    bolt: I(r.bolt, d.bolt, "fx")
  };
}
const gd = [
  0,
  32,
  8,
  40,
  2,
  34,
  10,
  42,
  48,
  16,
  56,
  24,
  50,
  18,
  58,
  26,
  12,
  44,
  4,
  36,
  14,
  46,
  6,
  38,
  60,
  28,
  52,
  20,
  62,
  30,
  54,
  22,
  3,
  35,
  11,
  43,
  1,
  33,
  9,
  41,
  51,
  19,
  59,
  27,
  49,
  17,
  57,
  25,
  15,
  47,
  7,
  39,
  13,
  45,
  5,
  37,
  63,
  31,
  55,
  23,
  61,
  29,
  53,
  21
], Xe = (r, d) => (gd[(d & 7) * 8 + (r & 7)] + 0.5) / 64, hd = 0, Si = 1, Mi = 2, Ti = 3, Li = 4, Ke = 5, Dn = 6, Gt = 7, Ei = 8, so = (r, d) => d <= 0.6665 && ((r - 0.5) * (r - 0.5) + (d - 0.2877) * (d - 0.2877) <= 0.0824 || (r - 0.25) * (r - 0.25) + (d - 0.416) * (d - 0.416) <= 0.0625 || (r - 0.791) * (r - 0.791) + (d - 0.458) * (d - 0.458) <= 0.0437 || r >= 0.25 && r <= 0.791 && d >= 0.416), vd = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], fd = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((r) => [r[0] * 13 / 11, r[1] * 28 / 24]), Ss = (r, d, o) => {
  let y = !1;
  for (let w = 0, S = r.length - 1; w < r.length; S = w++) {
    const P = r[w], D = r[S];
    P[1] > o != D[1] > o && d < (D[0] - P[0]) * (o - P[1]) / (D[1] - P[1]) + P[0] && (y = !y);
  }
  return y;
};
function xd(r, { size: d = 90, px: o = 2, oneBit: y = !1, colors: w = rn, ink: S = "#26221e", paper: P = "#fbf9f6", clock: D = 0, idle: I = !1 } = {}) {
  const B = { ...rn, ...w }, C = Math.sin, h = Math.PI * 2, v = Math.max(6, Math.round(d / o)), f = v / 90, H = I ? Math.floor(D / 100) * 100 : 0, j = I ? C(h * H / 3600) : 0, K = I ? 1.8 * C(h * H / 6400) : 0, ce = I ? 0.9 * C(h * H / 4100) : 0, $ = I ? 0.8 * C(h * H / 5200) : 0, Y = H / 3400 % 1, te = I && r.bolt.o > 0.5 && (Y < 0.04 || Y > 0.08 && Y < 0.11), ee = new Array(v * v), ne = new Uint8Array(v * v), Q = (m, x, b, M, _) => {
    b == null || m < 0 || x < 0 || m >= v || x >= v || (M >= 1 || M > Xe(m + 5, x + 3)) && (ee[x * v + m] = b, ne[x * v + m] = _);
  }, Me = (m, x, b, M) => {
    for (let _ = Math.max(0, Math.floor(x - b) - 1); _ <= Math.min(v - 1, x + b + 1); _++) for (let V = Math.max(0, Math.floor(m - b) - 1); V <= Math.min(v - 1, m + b + 1); V++) M(V, _, V + 0.5 - m, _ + 0.5 - x);
  }, qe = r.skyStops || [r.sky], T = r.skyT || 0;
  for (let m = 0; m < v; m++) {
    const x = r.night ? $e(1 - (m + 0.5) / (v * 0.7)) * 0.85 : $e(((m + 0.5) / v - 0.35) / 0.65) * 0.85;
    for (let b = 0; b < v; b++) {
      let M = qe[0];
      if (qe.length > 1) {
        const _ = T * (qe.length - 1), V = Math.min(qe.length - 2, Math.floor(_));
        M = _ - V > Xe(b, m) ? qe[V + 1] : qe[V];
      }
      x > Xe(b + 2, m + 5) && (M = r.night ? Ee(M, "#000000", 0.28) : Ee(M, "#ffffff", 0.2)), ee[m * v + b] = te ? Ee(M, "#ffffff", 0.25) : M;
    }
  }
  if (r.sun.o > 0.01) {
    const m = r.sun.x * f, x = r.sun.y * f, b = Math.max(1, r.sun.r * f);
    if (I) {
      const M = b * (1.45 + 0.06 * j), _ = Ee(B.sun, "#ffffff", 0.55);
      if (Me(m, x, M, (V, z, F, q) => {
        const fe = Math.sqrt(F * F + q * q);
        fe > b && fe < M && Q(V, z, _, 0.26 * (1 - (fe - b) / (M - b)) * r.sun.o, hd);
      }), r.sun.o > 0.5) {
        const V = Math.floor(H / 500) % 2, z = Math.max(1, b * 0.22);
        for (let F = 0; F < 8; F++) if (F % 2 === V) for (let q = b + 1.5; q < b + 1.5 + z; q += 0.7) Q(Math.floor(m + Math.cos(F * Math.PI / 4) * q), Math.floor(x + Math.sin(F * Math.PI / 4) * q), B.sun, r.sun.o, Ei);
      }
    }
    Me(m, x, b, (M, _, V, z) => {
      if (V * V + z * z > b * b) return;
      const F = ((V * 0.643 + z * 0.766) / b + 1) / 2;
      Q(M, _, $e((F - 0.62) / 0.38) > Xe(M, _) ? B.sunEdge : B.sun, r.sun.o, Si);
    });
  }
  if (yi.forEach((m, x) => {
    const b = r.stars[x].o;
    if (b < 0.01) return;
    const M = Math.floor(m[0] * f), _ = Math.floor(m[1] * f), V = I ? (Math.floor(H / 300) + x * 3) % 6 : 0;
    if (V === 5) return;
    const z = Math.round(m[2] * f * (V === 4 ? 0.3 : V < 2 ? 1 : 0.6));
    Q(M, _, B.star, b, Gt);
    for (let F = 1; F <= z; F++) {
      const q = F === z && z > 1 ? Ee(B.star, r.sky, 0.5) : B.star;
      Q(M - F, _, q, b, Gt), Q(M + F, _, q, b, Gt), Q(M, _ - F, q, b, Gt), Q(M, _ + F, q, b, Gt);
    }
  }), r.moon.o > 0.01) {
    const m = Math.max(1.5, r.moon.d * f * 0.37), x = r.moon.x * f, b = r.moon.y * f + (I && $ > 0.4 ? -1 : 0), M = x + 0.547 * m, _ = b - 0.503 * m, V = 0.82 * m, z = Ee(B.moon, "#ffffff", 0.6);
    Me(x, b, m, (F, q, fe, we) => {
      if (fe * fe + we * we > m * m) return;
      const Bt = F + 0.5 - M, Wt = q + 0.5 - _;
      Bt * Bt + Wt * Wt <= V * V || Q(F, q, $e((we + m) / (2 * m) * 1.1 - 0.1) > Xe(F, q) ? B.moon : z, r.moon.o, Mi);
    });
  }
  const pe = Math.max(2, Math.round(15.65 * f)), be = Math.max(1, Math.round(5.87 * f * 0.5));
  ki.forEach((m, x) => {
    const b = r.rain[x];
    let M = b.dy, _ = b.o;
    if (_ < 0.01) return;
    if (I) {
      const F = (H / 950 + x / 3) % 1;
      M += -5 + F * 14, _ *= F < 0.18 ? F / 0.18 : F > 0.72 ? (1 - F) / 0.28 : 1;
    }
    const V = (m[0] + 3 + K) * f, z = (m[1] + M) * f;
    for (let F = 0; F < pe; F++) for (let q = 0; q < be; q++) Q(Math.floor(V - 0.208 * F) + q, Math.floor(z) + F, B.rain, _, Li);
  });
  const Re = Math.max(0, Math.round(7.34 * f / 2.6));
  if (Ci.forEach((m, x) => {
    const b = r.snow[x];
    let M = b.dy, _ = 0, V = b.o;
    if (V < 0.01) return;
    if (I) {
      const q = (H / 3200 + x / 5) % 1;
      M += -6 + q * 14, _ = 1.5 * C(h * (q * 1.5 + x / 5)), V *= q < 0.2 ? q / 0.2 : q > 0.75 ? (1 - q) / 0.25 : 1;
    }
    const z = Math.floor((m[0] + 3.67 + _ + K) * f), F = Math.floor((m[1] + 3.67 + M) * f);
    Q(z, F, B.snow, V, Ke);
    for (let q = 1; q <= Re; q++)
      Q(z - q, F, B.snow, V, Ke), Q(z + q, F, B.snow, V, Ke), Q(z, F - q, B.snow, V, Ke), Q(z, F + q, B.snow, V, Ke), Re > 1 && q < Re && (Q(z - q, F - q, B.snow, V, Ke), Q(z + q, F - q, B.snow, V, Ke), Q(z - q, F + q, B.snow, V, Ke), Q(z + q, F + q, B.snow, V, Ke));
  }), r.bolt.o > 0.01)
    if (v >= 30) {
      const m = 39 + K, x = 50 + r.bolt.dy;
      for (let b = Math.floor(x * f); b <= (x + 28) * f; b++) for (let M = Math.floor(m * f); M <= (m + 13) * f; M++)
        Ss(fd, (M + 0.5) / f - m, (b + 0.5) / f - x) && Q(M, b, B.sun, r.bolt.o, Dn);
    } else {
      const m = v / 18, x = 7, b = 10 + Math.round(r.bolt.dy * 0.2);
      vd.forEach((M, _) => M.split("").forEach((V, z) => {
        if (V !== "#") return;
        const F = Math.floor((x + z) * m), q = Math.floor((b + _) * m);
        for (let fe = q; fe < Math.max(q + 1, Math.floor((b + _ + 1) * m)); fe++) for (let we = F; we < Math.max(F + 1, Math.floor((x + z + 1) * m)); we++) Q(we, fe, B.sun, r.bolt.o, Dn);
      }));
    }
  if (r.cloud.o > 0.01) {
    const m = Math.max(3, r.cloud.w * f), x = m * 0.6665, b = (r.cloud.x + K) * f - m / 2, M = (r.cloud.y + ce) * f - x / 2, _ = Ee(B.cloudDay, B.cloudNight, Math.round(r.cloud.f * 4) / 4), V = Ee(_, "#000000", 0.16);
    for (let z = Math.max(0, Math.floor(M) - 1); z <= Math.min(v - 1, M + x + 1); z++) for (let F = Math.max(0, Math.floor(b) - 1); F <= Math.min(v - 1, b + m + 1); F++) {
      const q = (F + 0.5 - b) / m, fe = (z + 0.5 - M) / m;
      so(q, fe) && Q(F, z, !so(q, fe + 1 / m) || $e((fe - 0.42) / 0.25) * 0.8 > Xe(F, z) ? V : _, r.cloud.o, Ti);
    }
  }
  return Ms(ee, ne, v, v, { oneBit: y, ink: S, paper: P, snowInk: !r.night });
}
function Ms(r, d, o, y, { oneBit: w, ink: S, paper: P, snowInk: D }) {
  const I = new Uint8ClampedArray(o * y * 4), B = io(S), C = io(P);
  for (let h = 0; h < y; h++) for (let v = 0; v < o; v++) {
    const f = h * o + v, H = d[f];
    if (r[f] == null) continue;
    let j = io(r[f]);
    if (w) {
      let K;
      H === Li || H === Ei ? K = !0 : H === Ke ? K = D : H === Gt || H === Dn ? K = !1 : K = Math.round((0.2126 * j[0] + 0.7152 * j[1] + 0.0722 * j[2]) / 255 * 4) / 4 <= Xe(v, h), (H === Si || H === Mi || H === Ti || H === Dn) && (v > 0 && d[f - 1] !== H || v < o - 1 && d[f + 1] !== H || h > 0 && d[f - o] !== H || h < y - 1 && d[f + o] !== H) && (K = !0), j = K ? B : C;
    }
    I[f * 4] = j[0], I[f * 4 + 1] = j[1], I[f * 4 + 2] = j[2], I[f * 4 + 3] = 255;
  }
  return { w: o, h: y, data: I };
}
const bd = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, wd = (r) => ks(r, !1).split("/")[0], vi = (r) => () => {
  r |= 0, r = r + 1831565813 | 0;
  let d = Math.imul(r ^ r >>> 15, 1 | r);
  return d = d + Math.imul(d ^ d >>> 7, 61 | d) ^ d, ((d ^ d >>> 14) >>> 0) / 4294967296;
}, yd = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", kd = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Cd = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Sd = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Md = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Td = [".##", "##.", ".#.", "#.."];
function Ts(r, { width: d, height: o, colors: y, wave: w = 0.38, soft: S = 6, glow: P = 0.6 }) {
  const D = { ...rn, dawn: "#e5a77e", ...y }, I = Cs(D), B = d, C = o, h = B / 6, v = h / 2, f = Math.PI * 2, H = r.length ? r : [{ cond: "cloudy", night: !1 }], j = [...Array(12)].map((Y, te) => {
    const ee = H[Math.min(te, H.length - 1)], ne = wd(ee.cond), Q = te % 2 === 1;
    return { cond: ee.cond, k: ne, night: Q, sky: I[ne][Q ? 1 : 0], cover: bd[ne] };
  }), K = (Y) => C * (0.5 - w * Math.cos(f * (Y / h - 0.25)));
  return { C: D, S: j, W: B, H: C, cw: h, sw: v, TAU: f, yb: K, side: (Y, te, ee) => {
    const ne = (Y ? K(te) - ee : ee - K(te)) / Math.max(3, S * 1.4) + 0.5;
    return ne <= 0 ? 0 : ne >= 1 ? 1 : ne;
  }, glowAt: (Y) => {
    const te = ((Y / h - 0.25) % 1 + 1) % 1, ee = Math.max(0, Math.min(5, Math.round(Y / h - 0.25))), ne = Math.max(0, Math.min(5, Math.round(Y / h - 0.75))), Q = 1 - (j[2 * ee].cover + j[2 * ne + 1].cover) / 2, Me = Math.sin(Math.PI * Math.min(1, Math.max(0, K(Y) / C)));
    return { c: te < 0.5 ? D.dusk : D.dawn, a: P * (0.2 + 0.8 * Q) * Me * Me };
  }, soft: S, tw: h * 0.3, sy: C / 90 };
}
function Ls(r, { clock: d = 0, ambient: o = !1, seed: y = 1 }) {
  const { S: w, sw: S, side: P, C: D, TAU: I, sy: B } = r, C = d, h = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return w.forEach((v, f) => {
    const H = vi(y * 977 + f * 131 + 7), j = (f + 0.5) * S, K = v.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[v.k] : 0;
    for (let ce = 0; ce < K; ce++) {
      const $ = j + (H() - 0.5) * S * 1.6, Y = (6 + H() * 76) * B, te = H() < 0.35, ee = 1.8 + H() * 1.6, ne = P(!0, $, Y) * (te ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(I * C / 2600 + ce * 1.7 + f) : 1);
      ne >= 0.03 && h.stars.push({ x: $, y: Y, big: te, size: ee, o: ne });
    }
    if (!v.night && (v.k === "clear" || v.k === "partly")) {
      const ce = j + (H() - 0.5) * S * 0.3, $ = Math.min(15, S * 0.29);
      h.suns.push({ x: ce, y: 32 * B, rad: $, halo: $ * 2.8 * (o ? 1 + 0.07 * Math.sin(I * C / 3600 + f) : 1) });
    }
    if (v.night && (v.k === "clear" || v.k === "partly")) {
      const ce = Math.min(0.78, S * 0.55 / 34), $ = j - 23 * ce + (H() - 0.5) * S * 0.2;
      h.moons.push({ x: $ + 23 * ce, y: (4 + (o ? 0.8 * Math.sin(I * C / 5200 + f) : 0)) * B + 23 * ce, d: 46 * ce });
    }
  }), w.forEach((v, f) => {
    const H = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[v.k];
    if (!H) return;
    const j = vi(y * 577 + f * 71 + 3), K = (f + 0.5) * S, ce = v.k === "rain" || v.k === "storm" || v.night ? D.cloudNight : D.cloudDay, $ = v.night ? 0.82 : v.k === "storm" ? 0.75 : 1;
    for (let Y = 0; Y < H; Y++) {
      const te = S / 46 * (v.k === "partly" ? 0.85 : 0.75 + j() * 0.55), ee = K + (v.k === "partly" ? S * 0.12 : (j() - 0.5) * S * 1.05), ne = (v.k === "partly" ? 40 : 6 + j() * 26) * B, Q = o ? 2.5 * Math.sin(I * C / 9e3 + f * 1.3 + Y * 2.1) : 0, Me = o ? 0.9 * Math.sin(I * C / 6100 + f + Y) : 0;
      h.clouds.push({ x: ee - 23 * te + Q, y: ne - 15.33 * te + Me, w: 46 * te, h: 30.66 * te, fill: ce, o: $ * (H > 1 && Y === 0 ? 0.85 : 1) });
    }
  }), w.forEach((v, f) => {
    const H = vi(y * 313 + f * 29 + 11), j = (f + 0.5) * S, K = v.cond === "pouring" ? 16 : v.cond === "rainy" || v.cond === "hail" ? 9 : v.cond === "lightning-rainy" ? 12 : v.cond === "snowy-rainy" ? 5 : 0;
    for (let $ = 0; $ < K; $++) {
      let Y = j + (H() - 0.5) * S * 1.05, te = 44 + H() * 36, ee = 1;
      if (o) {
        const Q = ((te - 44 + C * 0.04) % 36 + 36) % 36;
        Y -= 0.21 * (Q - (te - 44)), te = 44 + Q, ee = Math.min(1, Q / 6, (36 - Q) / 6);
      }
      te *= B;
      const ne = P(v.night, Y, te) * ee;
      ne >= 0.05 && h.drops.push({ x: Y, y: te, o: ne });
    }
    const ce = v.cond === "snowy" ? 11 : v.cond === "snowy-rainy" ? 6 : 0;
    for (let $ = 0; $ < ce; $++) {
      let Y = j + (H() - 0.5) * S * 1.05, te = 40 + H() * 44, ee = 1;
      if (o) {
        const Q = ((te - 40 + C * 9e-3) % 44 + 44) % 44;
        te = 40 + Q, Y += 1.6 * Math.sin(I * C / 2800 + $ * 1.9 + f), ee = Math.min(1, Q / 6, (44 - Q) / 6);
      }
      te *= B;
      const ne = P(v.night, Y, te) * ee;
      ne >= 0.05 && h.flakes.push({ x: Y, y: te, o: ne });
    }
    if (v.k === "fog") {
      const $ = v.night ? "#c8ccd6" : "#ffffff", Y = v.night ? 0.28 : 0.62, te = o ? 4 * Math.sin(I * C / 8e3 + f) : 0;
      for (let ee = 0; ee < 4; ee++) h.fogs.push({ x: j - S * 0.75 + ee % 2 * S * 0.18 + (ee % 2 ? te : -te), y: (30 + ee * 13) * B, w: S * 1.3, c: $, a: Y });
    }
    if (v.k === "storm") {
      const $ = (C / 3400 + f * 0.37) % 1;
      h.bolts.push({ x: j + (H() - 0.5) * S * 0.3 - 5, y: 36 * B, o: o && !($ < 0.05 || $ > 0.09 && $ < 0.12) ? 0.8 : 1 });
    }
  }), h;
}
function Ld(r, d, o, y, w, S, P, D) {
  const { S: I, C: B, cw: C, yb: h, glowAt: v, soft: f, tw: H, sy: j } = r, K = new Array(o * y), ce = new Uint8Array(o * y), $ = new Uint8Array(o * y), Y = (m, x, b, M, _) => {
    b == null || m < 0 || x < 0 || m >= o || x >= y || (M >= 1 || M > Xe(m + 5, x + 3)) && (K[x * o + m] = b, ce[x * o + m] = _);
  }, te = (m, x, b, M) => {
    for (let _ = Math.max(0, Math.floor(x - b) - 1); _ <= Math.min(y - 1, x + b + 1); _++) for (let V = Math.max(0, Math.floor(m - b) - 1); V <= Math.min(o - 1, m + b + 1); V++) M(V, _, V + 0.5 - m, _ + 0.5 - x);
  }, ee = (m, x, b) => {
    for (let _ = 0; _ < m.length - 1; _++) {
      const V = (_ + x) * C;
      if (b < V - H / 2) return [m[_], m[_], 0];
      if (b <= V + H / 2) return [m[_], m[_ + 1], (b - V + H / 2) / H];
    }
    const M = m[m.length - 1];
    return [M, M, 0];
  }, ne = I.filter((m) => !m.night).map((m) => m.sky), Q = I.filter((m) => m.night).map((m) => m.sky), Me = f / S, qe = 16 * j / S;
  for (let m = 0; m < o; m++) {
    const x = (m + 0.5) * w, b = h(x) / S, M = ee(ne, 0.75, x), _ = ee(Q, 1.25, x), V = v(x);
    for (let z = 0; z < y; z++) {
      const F = Xe(m, z), q = z + 0.5 - b, fe = (Me > 0.01 ? $e(0.5 + q / Me) : q > 0 ? 1 : 0) > F;
      let we = fe ? M[2] > F ? M[1] : M[0] : _[2] > F ? _[1] : _[0];
      (fe ? $e(((z + 0.5) / y - 0.45) / 0.55) * 0.7 : $e(1 - (z + 0.5) / (y * 0.55)) * 0.7) > Xe(m + 2, z + 5) && (we = fe ? Ee(we, "#ffffff", 0.18) : Ee(we, "#000000", 0.25)), fe && q >= 0 && q < qe && V.a * 1.3 * (1 - q / qe) > Xe(m + 6, z + 1) && (we = V.c), K[z * o + m] = we, $[z * o + m] = fe ? 0 : 1;
    }
  }
  const T = Ee(B.sun, "#ffffff", 0.55), pe = Ee(B.moon, "#ffffff", 0.6);
  d.stars.forEach((m) => {
    const x = Math.floor(m.x / w), b = Math.floor(m.y / S);
    if (x < 0 || b < 0 || x >= o || b >= y || !$[b * o + x] || m.o < 0.15) return;
    const M = m.o > 0.45 ? B.star : Ee(B.star, K[b * o + x], 0.5), _ = m.big && m.o > 0.6 ? Math.floor(m.size / w) : 0;
    Y(x, b, M, 1, Gt);
    for (let V = 1; V <= _; V++) [[x - V, b], [x + V, b], [x, b - V], [x, b + V]].forEach((z) => {
      z[0] >= 0 && z[1] >= 0 && z[0] < o && z[1] < y && $[z[1] * o + z[0]] && Y(z[0], z[1], M, 1, Gt);
    });
  }), d.suns.forEach((m) => {
    const x = Math.max(1.5, m.rad / w), b = m.x / w, M = m.y / S, _ = m.halo / w * 0.85;
    if (te(b, M, _, (V, z, F, q) => {
      const fe = Math.sqrt(F * F + q * q);
      fe > x && fe < _ && !$[z * o + V] && Y(V, z, T, 0.3 * (1 - (fe - x) / (_ - x)), 0);
    }), D) {
      const V = Math.floor(P / 500) % 2, z = Math.max(1, x * 0.3);
      for (let F = 0; F < 8; F++) if (F % 2 === V) for (let q = x + 1.2; q < x + 1.2 + z; q += 0.7) Y(Math.floor(b + Math.cos(F * Math.PI / 4) * q), Math.floor(M + Math.sin(F * Math.PI / 4) * q), B.sun, 1, Ei);
    }
    te(b, M, x, (V, z, F, q) => {
      F * F + q * q <= x * x && Y(V, z, $e(((q / x + 1) / 2 - 0.6) / 0.4) > Xe(V, z) ? B.sunEdge : B.sun, 1, Si);
    });
  }), d.moons.forEach((m) => {
    const x = Math.max(1.5, m.d * 0.37 / w), b = m.x / w, M = m.y / S, _ = b + 0.547 * x, V = M - 0.503 * x, z = 0.82 * x;
    te(b, M, x, (F, q, fe, we) => {
      if (fe * fe + we * we > x * x) return;
      const Bt = F + 0.5 - _, Wt = q + 0.5 - V;
      Bt * Bt + Wt * Wt > z * z && Y(F, q, $e((we + x) / (2 * x) * 1.1 - 0.1) > Xe(F, q) ? B.moon : pe, 1, Mi);
    });
  }), d.clouds.forEach((m) => {
    const x = Math.max(3, m.w / w), b = x * 0.6665, M = m.x / w, _ = m.y / S, V = Ee(m.fill, "#000000", 0.16);
    for (let z = Math.max(0, Math.floor(_) - 1); z <= Math.min(y - 1, _ + b + 1); z++) for (let F = Math.max(0, Math.floor(M) - 1); F <= Math.min(o - 1, M + x + 1); F++) {
      const q = (F + 0.5 - M) / x, fe = (z + 0.5 - _) / x;
      so(q, fe) && Y(F, z, !so(q, fe + 1 / x) || $e((fe - 0.42) / 0.25) * 0.8 > Xe(F, z) ? V : m.fill, m.o, Ti);
    }
  }), d.fogs.forEach((m) => {
    const x = Math.floor(m.y / S), b = Math.max(x, Math.floor((m.y + 6 * j) / S) - 1), M = Math.floor(m.x / w), _ = Math.floor((m.x + m.w) / w);
    for (let V = x; V <= b; V++) for (let z = M; z <= _; z++) {
      const F = (z - M) / Math.max(1, _ - M);
      Y(z, V, m.c, m.a * (F < 0.25 ? F / 0.25 : F > 0.75 ? (1 - F) / 0.25 : 1), 0);
    }
  });
  const be = Math.max(2, Math.round(9 / S));
  d.drops.forEach((m) => {
    const x = m.x / w, b = Math.floor(m.y / S);
    for (let M = 0; M < be; M++) Y(Math.floor(x - 0.208 * M * S / w), b + M, B.rain, m.o, Li);
  });
  const Re = Math.max(0, Math.round(4.4 / w / 2.6));
  return d.flakes.forEach((m) => {
    const x = Math.floor(m.x / w), b = Math.floor(m.y / S);
    Y(x, b, B.snow, m.o, Ke);
    for (let M = 1; M <= Re; M++)
      Y(x - M, b, B.snow, m.o, Ke), Y(x + M, b, B.snow, m.o, Ke), Y(x, b - M, B.snow, m.o, Ke), Y(x, b + M, B.snow, m.o, Ke);
  }), d.bolts.forEach((m) => {
    if (w <= 3.5)
      for (let x = Math.floor(m.y / S); x <= (m.y + 24) / S; x++) for (let b = Math.floor(m.x / w); b <= (m.x + 11) / w; b++)
        Ss(Md, (b + 0.5) * w - m.x, (x + 0.5) * S - m.y) && Y(b, x, B.sun, 1, Dn);
    else {
      const x = Math.round(m.x / w), b = Math.round(m.y / S);
      Td.forEach((M, _) => M.split("").forEach((V, z) => {
        V === "#" && Y(x + z, b + _, B.sun, 1, Dn);
      }));
    }
  }), { col: K, ids: ce };
}
function Ed(r, d) {
  const o = d.px, y = Math.max(6, Math.round(d.width / o)), w = Math.max(6, Math.round(d.height / o)), S = d.width / y, P = d.height / w, D = d.ambient ? Math.floor((d.clock || 0) / 100) * 100 : 0, I = (f) => {
    const H = Ts(f, d);
    return Ld(H, Ls(H, { clock: D, ambient: d.ambient, seed: d.seed }), y, w, S, P, D, d.ambient);
  }, B = I(r), C = d.reveal == null ? 1 : $e(d.reveal);
  let h = B.col, v = B.ids;
  if (C < 1) {
    const f = d.prev ? I(d.prev) : null, H = C * (y + 12);
    h = new Array(y * w), v = new Uint8Array(y * w);
    for (let j = 0; j < y * w; j++) {
      const K = j % y, ce = j / y | 0;
      (d.reduce ? C : $e((H - K) / 12)) > Xe(K, ce) ? (h[j] = B.col[j], v[j] = B.ids[j]) : f ? (h[j] = f.col[j], v[j] = f.ids[j]) : (h[j] = null, v[j] = 255);
    }
  }
  return Ms(h, v, y, w, { oneBit: d.oneBit, ink: d.ink, paper: d.paper, snowInk: !1 });
}
function Rd(r, d, o) {
  const y = o.width, w = o.height, S = o.reveal == null ? 1 : $e(o.reveal), P = (v, f) => {
    const H = Ts(f, o);
    Ad(v, H, Ls(H, o));
  };
  if (r.clearRect(0, 0, y, w), S >= 1) {
    P(r, d);
    return;
  }
  if (o.prev && P(r, o.prev), o.reduce) {
    r.save(), r.globalAlpha = S, P(r, d), r.restore();
    return;
  }
  const D = r.canvas, I = D.__wxOff || (D.__wxOff = document.createElement("canvas"));
  (I.width !== D.width || I.height !== D.height) && (I.width = D.width, I.height = D.height);
  const B = I.getContext("2d");
  B.setTransform(r.getTransform()), B.clearRect(0, 0, y, w), P(B, d);
  const C = S * (y + 64) - 64, h = B.createLinearGradient(C, 0, C + 64, 0);
  h.addColorStop(0, "rgba(0,0,0,1)"), h.addColorStop(1, "rgba(0,0,0,0)"), B.globalCompositeOperation = "destination-in", B.fillStyle = h, B.fillRect(0, 0, y, w), B.globalCompositeOperation = "source-over", r.save(), r.setTransform(1, 0, 0, 1, 0, 0), r.drawImage(I, 0, 0), r.restore();
}
function Ad(r, d, o) {
  const { W: y, H: w, S, C: P, cw: D, yb: I, glowAt: B, soft: C, tw: h, sy: v } = d, f = (T, pe) => {
    const be = io(T);
    return "rgba(" + be[0] + "," + be[1] + "," + be[2] + "," + Math.max(0, Math.min(1, pe)).toFixed(3) + ")";
  }, H = (T, pe) => {
    const be = r.createLinearGradient(0, 0, y, 0);
    be.addColorStop(0, T[0]);
    for (let Re = 0; Re < T.length - 1; Re++) {
      const m = (Re + pe) * D, x = (m - h / 2) / y, b = (m + h / 2) / y;
      x > 0 && x < 1 && be.addColorStop(x, T[Re]), b > 0 && b < 1 && be.addColorStop(b, T[Re + 1]);
    }
    return be.addColorStop(1, T[T.length - 1]), be;
  }, j = Math.max(24, Math.ceil(y / 4)), K = (T, pe) => {
    r.beginPath();
    for (let be = 0; be <= j; be++) {
      const Re = y * be / j, m = T == null ? 0 : I(Re) + T;
      be ? r.lineTo(Re, m) : r.moveTo(Re, m);
    }
    for (let be = j; be >= 0; be--) {
      const Re = y * be / j;
      r.lineTo(Re, I(Re) + pe);
    }
    r.closePath(), r.fill();
  };
  r.save(), r.fillStyle = H(S.filter((T) => !T.night).map((T) => T.sky), 0.75), r.fillRect(0, 0, y, w);
  const ce = r.createLinearGradient(0, 0, y, 0);
  for (let T = 0; T <= 64; T++) {
    const pe = B(y * T / 64);
    ce.addColorStop(T / 64, f(pe.c, Math.min(1, pe.a)));
  }
  r.fillStyle = ce;
  for (let T = 0; T < 8; T++)
    r.globalAlpha = 1 - T / 8, K(T * 2 * v, (T + 1) * 2 * v);
  r.fillStyle = H(S.filter((T) => T.night).map((T) => T.sky), 1.25);
  const $ = Math.max(0.5, C), Y = 6;
  r.globalAlpha = 1, K(null, -$);
  for (let T = 0; T < Y; T++)
    r.globalAlpha = 1 - (T + 0.5) / Y, K(-$ + 2 * $ * T / Y, -$ + 2 * $ * (T + 1) / Y);
  r.globalAlpha = 1;
  const te = new Path2D(Cd), ee = new Path2D(kd), ne = new Path2D(yd), Q = new Path2D(Sd);
  r.fillStyle = P.star, o.stars.forEach((T) => {
    r.globalAlpha = T.o, T.big ? (r.save(), r.translate(T.x, T.y), r.scale(T.size, T.size), r.fill(te), r.restore()) : (r.beginPath(), r.arc(T.x, T.y, 0.8, 0, Math.PI * 2), r.fill());
  }), r.globalAlpha = 1;
  const Me = Ee(P.sun, "#ffffff", 0.55);
  o.suns.forEach((T) => {
    const pe = r.createRadialGradient(T.x, T.y, 0, T.x, T.y, T.halo);
    pe.addColorStop(0, f(Me, 0.42)), pe.addColorStop(0.7, f(Me, 0)), r.fillStyle = pe, r.beginPath(), r.arc(T.x, T.y, T.halo, 0, Math.PI * 2), r.fill();
    const be = r.createLinearGradient(0, T.y - T.rad, 0, T.y + T.rad);
    be.addColorStop(0.6, P.sun), be.addColorStop(1, P.sunEdge), r.fillStyle = be, r.beginPath(), r.arc(T.x, T.y, T.rad, 0, Math.PI * 2), r.fill();
  });
  const qe = Ee(P.moon, "#ffffff", 0.6);
  o.moons.forEach((T) => {
    r.save(), r.translate(T.x - T.d / 2, T.y - T.d / 2), r.scale(T.d / 46, T.d / 46);
    const pe = r.createLinearGradient(0, 6, 0, 40);
    pe.addColorStop(0, qe), pe.addColorStop(1, P.moon), r.fillStyle = pe, r.fill(ee), r.restore();
  }), o.clouds.forEach((T) => {
    r.save(), r.globalAlpha = T.o, r.translate(T.x, T.y), r.scale(T.w / 46, T.h / 30.66), r.translate(-4, -9.67), r.fillStyle = T.fill, r.fill(ne), r.restore();
  }), o.fogs.forEach((T) => {
    const pe = r.createLinearGradient(T.x, 0, T.x + T.w, 0);
    pe.addColorStop(0, f(T.c, 0)), pe.addColorStop(0.25, f(T.c, T.a)), pe.addColorStop(0.75, f(T.c, T.a)), pe.addColorStop(1, f(T.c, 0)), r.fillStyle = pe, r.fillRect(T.x, T.y, T.w, 6 * v);
  }), r.fillStyle = P.rain, o.drops.forEach((T) => {
    r.save(), r.globalAlpha = T.o, r.translate(T.x, T.y), r.rotate(12 * Math.PI / 180), r.fillRect(-1.5, 0, 3, 9), r.restore();
  }), r.fillStyle = P.snow, o.flakes.forEach((T) => {
    r.globalAlpha = T.o, r.beginPath(), r.arc(T.x, T.y, 2.2, 0, Math.PI * 2), r.fill();
  }), r.fillStyle = P.sun, o.bolts.forEach((T) => {
    r.save(), r.globalAlpha = T.o, r.translate(T.x, T.y), r.fill(Q), r.restore();
  }), r.restore();
}
function Nd(r, d) {
  var ls, ds, cs, ps, us, ms, gs;
  const o = (e) => r.getElementById(e), y = o("workoutView"), w = o("workoutNameInput");
  let S = !0;
  const P = o("homeClock");
  function D() {
    P && (P.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  D(), setInterval(D, 15e3);
  const I = o("createFlow"), B = o("createMovementsSlot"), C = o("createTimingSlot"), h = o("createFinishSlot"), v = o("movementStepSummary"), f = o("timingStepSummary"), H = o("finishStepSummary"), j = o("continueToTiming"), K = o("continueToFinish"), ce = o("finishMoveButton");
  let $ = !1, Y = [];
  function te(e) {
    !e || Y.some((t) => t.node === e) || Y.push({ node: e, parent: e.parentNode, next: e.nextSibling });
  }
  function ee(e, t) {
    e && (te(e), t.appendChild(e));
  }
  function ne() {
    [...Y].reverse().forEach(({ node: e, parent: t, next: n }) => {
      t && (n && n.parentNode === t ? t.insertBefore(e, n) : t.appendChild(e));
    }), Y = [];
  }
  function Q(e) {
    r.querySelectorAll(".createStep").forEach((t) => {
      t.classList.toggle("active", t.dataset.createStep === e);
    }), e === "timing" && ($ = !0), Me();
  }
  function Me() {
    var g, k;
    if (!Ae) return;
    ue[ge];
    const e = Je.filter((u) => !u.hidden), t = e.filter((u) => u.kind !== "rest").length, n = e.filter((u) => u.kind === "rest").length;
    v.textContent = t ? t + " movement" + (t === 1 ? "" : "s") + (n ? " · " + n + " rest" + (n === 1 ? "" : "s") : "") : "No movements yet";
    const a = t > 0, i = r.querySelector('[data-open-step="timing"]'), s = r.querySelector('[data-open-step="finish"]');
    i.disabled = !a, j.disabled = !a, f.textContent = a ? Yt(x.value) + " · " + We(b.value) + " movement · " + We(M.value) + " rest" : "Add a movement first", s.disabled = !(a && $);
    const l = ((w == null ? void 0 : w.value) || "").trim(), c = [];
    (g = o("includeWarmupPreset")) != null && g.checked && c.push("warm-up"), (k = o("includeCooldownPreset")) != null && k.checked && c.push("cooldown"), H.textContent = l ? l + (c.length ? " · " + c.join(" + ") : "") : c.length ? c.join(" + ") : "Name and optional extras";
  }
  function qe() {
    var R, U, A;
    I.hidden = !1, $ = !1;
    const e = r.querySelector(".editNameRow"), t = o("createMoveOptions"), n = r.querySelector(".timeTiles"), a = o("routineSummaryModal"), i = r.querySelector(".tempoRevealRow"), s = o("tempoExperiment"), l = (R = o("warmupList")) == null ? void 0 : R.closest("section"), c = o("movementCreatorLaunch"), g = o("movementCreator"), k = (U = o("strengthList")) == null ? void 0 : U.closest("section"), u = (A = o("cooldownList")) == null ? void 0 : A.closest("section");
    [t == null ? void 0 : t.querySelector(".createExtras"), l, c, g, k, u].forEach((L) => L && ee(L, B)), [t, n, a, i, s].forEach((L) => ee(L, C)), ee(e, h), Q("movements"), Me();
  }
  function T() {
    ne(), I.hidden = !0, r.querySelectorAll(".createStep").forEach((e) => e.classList.remove("active"));
  }
  r.querySelectorAll("[data-open-step]").forEach((e) => e.addEventListener("click", () => {
    e.disabled || Q(e.dataset.openStep);
  })), j.addEventListener("click", () => {
    j.disabled || Q("timing");
  }), K.addEventListener("click", () => Q("finish")), ce.addEventListener("click", () => o("saveWorkoutEdit").click());
  const pe = { home: o("homeView"), workout: o("workoutView"), settings: o("settingsView") }, be = o("homeNav"), Re = o("settingsNav");
  function m(e) {
    Object.entries(pe).forEach(([t, n]) => n.classList.toggle("active", t === e)), be.classList.toggle("active", e === "home"), Re.classList.toggle("active", e === "settings"), e === "home" && setTimeout(Lo, 400), e === "settings" && (requestAnimationFrame(() => ca(r.querySelector(".tab.active"), !1)), Ya());
  }
  const x = o("totalTime"), b = o("workTime"), M = o("restTime"), _ = o("totalOut"), V = o("workOut"), z = o("restOut"), F = o("totalFill"), q = o("workFill"), fe = o("restFill"), we = o("roundsInput"), Bt = o("roundsFill"), Wt = o("roundsOut"), Ns = o("totalLabel"), Ri = o("routineSummaryModal"), fa = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let dt = fa.map((e) => ({ ...e })), Je = [
    { id: "goblet-squat", name: "Kettlebell goblet squat", group: "Glutes + legs", kind: "work", hidden: !1 },
    { id: "floor-press", name: "Kettlebell floor press", group: "Chest + triceps", kind: "work", hidden: !1 },
    { id: "one-arm-row", name: "One-arm kettlebell row", group: "Back + arms", kind: "work", hidden: !1 },
    { id: "deadlift", name: "Kettlebell deadlift", group: "Glutes + hamstrings", kind: "work", hidden: !1 },
    { id: "halo", name: "Kettlebell halo", group: "Shoulders + core", kind: "work", hidden: !1 },
    { id: "swing", name: "Kettlebell swing", group: "Glutes + core", kind: "work", hidden: !1 },
    { id: "kneeling-press", name: "Half-kneeling press", group: "Shoulders + core", kind: "work", hidden: !1 },
    { id: "suitcase-march", name: "Suitcase march", group: "Core + grip", kind: "work", hidden: !1 },
    { id: "glute-bridge", name: "Glute bridge with kettlebell", group: "Glutes", kind: "work", hidden: !1 },
    { id: "pullover", name: "Kettlebell pullover", group: "Chest + core", kind: "work", hidden: !1 }
  ];
  const xa = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let ct = xa.map((e) => ({ ...e }));
  const Bs = {
    kettlebell: {
      name: "Kettlebell full body",
      source: "Example imported routine",
      total: 20,
      work: 45,
      rest: 15,
      strength: [
        ["goblet-squat", "Kettlebell goblet squat", "Glutes + legs"],
        ["floor-press", "Kettlebell floor press", "Chest + triceps"],
        ["one-arm-row", "One-arm kettlebell row", "Back + arms"],
        ["deadlift", "Kettlebell deadlift", "Glutes + hamstrings"],
        ["halo", "Kettlebell halo", "Shoulders + core"],
        ["swing", "Kettlebell swing", "Glutes + core"],
        ["kneeling-press", "Half-kneeling press", "Shoulders + core"],
        ["suitcase-march", "Suitcase march", "Core + grip"],
        ["glute-bridge", "Glute bridge with kettlebell", "Glutes"],
        ["pullover", "Kettlebell pullover", "Chest + core"]
      ]
    },
    mobility: {
      name: "Mobility reset",
      source: "Imported mobility routine",
      total: 15,
      work: 40,
      rest: 10,
      strength: [
        ["world-greatest", "World’s greatest stretch", "Mobility"],
        ["thoracic", "Thoracic rotation", "Spine + shoulders"],
        ["cossack", "Cossack squat", "Hips + legs"],
        ["shoulder-flow", "Shoulder flow", "Shoulders"],
        ["deep-squat", "Deep squat hold", "Hips + ankles"]
      ]
    },
    core: {
      name: "Core + carry",
      source: "Imported strength routine",
      total: 20,
      work: 45,
      rest: 15,
      strength: [
        ["suitcase-march", "Suitcase march", "Core + grip"],
        ["deadbug", "Dead bug", "Core"],
        ["halo", "Kettlebell halo", "Shoulders + core"],
        ["plank-pull", "Plank kettlebell pull-through", "Core + shoulders"],
        ["farmer", "Farmer carry", "Grip + core"],
        ["glute-bridge", "Glute bridge with kettlebell", "Glutes + core"]
      ]
    }
  }, he = Ai(d.data), ue = he.profiles;
  let ge = ue[he.selected] ? he.selected : he.order.find((e) => ue[e]) || "kettlebell";
  function Ai(e) {
    const t = e && typeof e == "object" ? JSON.parse(JSON.stringify(e)) : {}, n = t.profiles && Object.keys(t.profiles).length ? t.profiles : JSON.parse(JSON.stringify(Bs)), a = (Array.isArray(t.order) ? t.order : Object.keys(n)).filter((i) => n[i]);
    return Object.keys(n).forEach((i) => {
      a.includes(i) || a.push(i);
    }), {
      v: 1,
      profiles: n,
      order: a,
      selected: t.selected || a[0],
      history: Array.isArray(t.history) ? t.history : [],
      checkins: (Array.isArray(t.checkins) ? t.checkins : Is(t.energy)).map(Ni),
      settings: { ...t.settings || {} }
    };
  }
  function Is(e) {
    if (!Array.isArray(e)) return [];
    const t = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], n = [];
    return e.forEach((a) => {
      const i = new Date(a.at);
      if (isNaN(i)) return;
      const s = i.getFullYear() + "-" + String(i.getMonth() + 1).padStart(2, "0") + "-" + String(i.getDate()).padStart(2, "0"), l = i.getHours() < 14 ? "morning" : "evening";
      if (n.some((g) => g.date === s && g.slot === l)) return;
      const c = t.indexOf(a.value) + 1;
      c > 0 && n.push({ date: s, slot: l, mood: null, energy: c, at: a.at });
    }), n;
  }
  function Ni(e) {
    if (e.scale === 100) return e;
    const t = (n) => n == null ? null : Math.round((Number(n) - 1) / 5 * 100);
    return { ...e, mood: t(e.mood), energy: t(e.energy), scale: 100 };
  }
  function ft() {
    Ae || (he.selected = ge, he.order = he.order.filter((e) => ue[e] && e !== jt), d.save(he));
  }
  function ve() {
    return he.settings;
  }
  function xt(e) {
    const t = ue[e];
    if (!t) return;
    ge = e;
    const n = o("workoutNameInput");
    if (n && (n.value = t.name), x.value = t.total, b.value = t.work, M.value = t.rest, we.value = t.rounds || 1, t.customSequence) {
      const a = (t.sequence || []).map((s) => ({ ...s })), i = (s) => a.filter((l) => l.presetRole === s).map(({ presetRole: l, ...c }) => c);
      dt = (t.warmup || i("warmup")).map((s) => ({ ...s })), ct = (t.cooldown || i("cooldown")).map((s) => ({ ...s })), Je = a.filter((s) => !s.presetRole), uo(t.preset || "movement", !1);
    } else
      x.min = 3, x.max = 40, x.step = 1, b.min = 20, b.max = 60, b.step = 5, M.min = 5, M.max = 30, M.step = 5, dt = (t.warmup || fa).map((a) => ({ ...a })), ct = (t.cooldown || xa).map((a) => ({ ...a })), Je = t.strength.map((a) => Array.isArray(a) ? (([i, s, l, c = !1]) => ({ id: i, name: s, group: l, kind: "work", hidden: !!c }))(a) : { ...a });
    r.querySelectorAll(".workoutPanel[data-workout]").forEach((a) => a.classList.toggle("active", a.dataset.workout === e)), ye();
  }
  function Fs(e, t, n) {
    const a = e.getBoundingClientRect(), i = a.width / 2, s = a.height / 2, l = t - i, c = n - s;
    let g = 1 / 0, k = 1 / 0;
    l !== 0 && (g = i / Math.abs(l)), c !== 0 && (k = s / Math.abs(c));
    const u = Math.min(Math.max(1 / Math.min(g, k), 0), 1);
    let p = Math.atan2(c, l) * (180 / Math.PI) + 90;
    return p < 0 && (p += 360), { edge: u, angle: p };
  }
  function lo(e, t, n = !1) {
    const a = e.getBoundingClientRect(), i = t.clientX - a.left, s = t.clientY - a.top, { edge: l, angle: c } = Fs(e, i, s), g = n ? 100 : l * 100;
    e.style.setProperty("--edge-proximity", g.toFixed(3)), e.style.setProperty("--cursor-angle", c.toFixed(3) + "deg"), e.classList.toggle("borderGlowActive", n || g >= 30);
  }
  function Bi(e) {
    e.addEventListener("pointermove", (n) => lo(e, n, !1)), e.addEventListener("pointerenter", (n) => lo(e, n, !1)), e.addEventListener("pointerdown", (n) => lo(e, n, !0));
    const t = () => {
      e.classList.remove("borderGlowActive"), e.style.setProperty("--edge-proximity", "0");
    };
    e.addEventListener("pointerleave", t), e.addEventListener("pointerup", t), e.addEventListener("pointercancel", t);
  }
  Bi(o("addWorkoutPanel"));
  let Ae = !1, jt = null;
  function J(e) {
    return String(e ?? "").replace(/[&<>"']/g, (t) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[t]);
  }
  function Ps(e) {
    return e.summary ? e.summary : e.customSequence ? Yt(e.total) + " · custom move" : Yt(e.total) + " · " + We(e.work) + " / " + We(e.rest) + " · warm-up + cooldown";
  }
  function co(e, t) {
    var s;
    const n = document.createElement("article");
    n.className = "workoutPanel", n.dataset.workout = e, n.tabIndex = 0;
    const a = t.activityCount ?? (((s = t.sequence) == null ? void 0 : s.length) || 0);
    n.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + J(t.name) + '</div><div class="sub">' + J(Ps(t)) + '</div><span class="sourceTag">' + J(t.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (a ? a + " activities" + ((t.rounds || 1) > 1 ? " × " + t.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + J(t.name) + "</div></div>";
    const i = o("addWorkoutPanel");
    return o("workoutGallery").insertBefore(n, i), Bi(n), n.addEventListener("click", (l) => {
      l.target.closest("button") || xt(e);
    }), n.addEventListener("keydown", (l) => {
      (l.key === "Enter" || l.key === " ") && !l.target.closest("button") && (l.preventDefault(), xt(e));
    }), n.querySelector(".seeWorkoutBtn").addEventListener("click", (l) => {
      l.stopPropagation(), xt(e), lr(!1);
    }), n.querySelector(".startWorkoutBtn").addEventListener("click", (l) => {
      l.stopPropagation(), xt(e), Cl();
    }), n;
  }
  function Ii() {
    r.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.remove()), he.order.forEach((e) => {
      ue[e] && co(e, ue[e]);
    }), r.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.classList.toggle("active", e.dataset.workout === ge));
  }
  Ii(), o("addWorkoutPanel").addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), o("addWorkoutPanel").click());
  }), o("addWorkoutPanel").addEventListener("click", () => {
    Ae = !0, jt = "custom-" + Date.now(), ue[jt] = {
      name: "New move",
      source: "Custom move",
      total: 20,
      work: 45,
      rest: 15,
      customSequence: !0,
      preset: "movement",
      includeWarmup: !1,
      includeCooldown: !1,
      sequence: [],
      strength: []
    }, xt(jt), lr(!0);
  });
  let St = "steps";
  const Vn = { steps: "stepsRow", mood: "moodRow", energy: "energyLevelRow" };
  let Z = [], se = 0, ze = 0, zn = 1, ht = !1, Pe = null, ba = null, Ge = !1, sn = he.settings.upcomingCount ?? "all", Fi = "movement";
  function wa(e, t, n) {
    return (Number(e) - t) / (n - t) * 100;
  }
  function We(e) {
    const t = Math.max(0, Number(e) || 0);
    return t >= 3600 && t % 3600 === 0 ? t / 3600 + " hr" : t >= 60 && t % 60 === 0 ? t / 60 + " min" : t >= 60 ? Math.round(t / 60) + " min" : Math.round(t) + " sec";
  }
  function Yt(e) {
    const t = Math.max(0, Number(e) || 0);
    return t >= 60 && t % 60 === 0 ? t / 60 + " hr" : t >= 60 ? Math.floor(t / 60) + " hr " + t % 60 + " min" : t + " min";
  }
  function ya() {
    F.style.width = wa(x.value, Number(x.min), Number(x.max)) + "%", q.style.width = wa(b.value, Number(b.min), Number(b.max)) + "%", fe.style.width = wa(M.value, Number(M.min), Number(M.max)) + "%", V.textContent = We(b.value), z.textContent = We(M.value);
    const e = Number(we.value) || 1;
    Bt.style.width = wa(e, 1, 10) + "%", Ns.textContent = e > 1 ? "Time per round" : "Total time";
  }
  function po(e) {
    return e.filter((t) => !t.hidden);
  }
  function On(e) {
    const t = Math.max(0, Math.round(Number(e) || 0)), n = Math.floor(t / 3600), a = Math.floor(t % 3600 / 60), i = t % 60;
    return (n ? n + ":" + String(a).padStart(2, "0") : a) + ":" + String(i).padStart(2, "0");
  }
  function Ds(e) {
    let t;
    try {
      t = new URL(String(e || "").trim());
    } catch {
      return null;
    }
    const n = t.hostname.replace(/^(www|m|music)\./, "");
    let a = null;
    if (n === "youtu.be") a = t.pathname.slice(1).split("/")[0];
    else if (/^youtube(-nocookie)?\.com$/.test(n))
      if (t.pathname === "/watch") a = t.searchParams.get("v");
      else {
        const c = t.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        c && (a = c[2]);
      }
    if (!a || !/^[\w-]{11}$/.test(a)) return null;
    const i = (c) => {
      if (!c) return 0;
      if (/^\d+$/.test(c)) return Number(c);
      const g = c.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return g ? (Number(g[1]) || 0) * 3600 + (Number(g[2]) || 0) * 60 + (Number(g[3]) || 0) : 0;
    }, s = i(t.searchParams.get("t") || t.searchParams.get("start")), l = i(t.searchParams.get("end"));
    return { id: a, start: s, end: l > s ? l : null };
  }
  function qn(e, t) {
    if (e.useVideoLength === !1) return Math.max(5, Number(e.duration) || t || 300);
    const n = Number(e.start) || 0, a = Number(e.end) || Number(e.videoDuration) || 0;
    return a > n ? Math.round(a - n) : Number(e.duration) || 300;
  }
  function ka(e, t) {
    const n = Math.max(0, Number(e) || 0);
    return Math.round(t === "hour" ? n * 3600 : t === "min" ? n * 60 : n);
  }
  function uo(e, t = !0) {
    Fi = e, r.querySelectorAll(".createPresetBtn").forEach((a) => a.classList.toggle("active", a.dataset.movePreset === e));
    const n = ue[ge];
    n && (n.preset = e), e === "work" ? (x.min = 30, x.max = 480, x.step = 30, b.min = 300, b.max = 7200, b.step = 300, M.min = 60, M.max = 1800, M.step = 60, t && (x.value = 60, b.value = 1500, M.value = 300), o("addMovementUnit").value = "min", o("addMovementDuration").value = 25, o("addRestUnit").value = "min", o("addRestDuration").value = 5) : (x.min = 3, x.max = 40, x.step = 1, b.min = 20, b.max = 60, b.step = 5, M.min = 5, M.max = 30, M.step = 5, t && (x.value = 20, b.value = 45, M.value = 15), o("addMovementUnit").value = "sec", o("addMovementDuration").value = 45, o("addRestUnit").value = "sec", o("addRestDuration").value = 30), ya();
  }
  function Pi(e, t) {
    const n = Fi === "work";
    return e.map((a, i) => ({ ...a, id: t + "-" + i + "-" + Date.now().toString(36), useGlobalTiming: !n, duration: n ? 60 : Number(b.value) }));
  }
  function mo() {
    const e = ue[ge];
    e != null && e.customSequence && (e.includeWarmup = o("includeWarmupPreset").checked, e.includeCooldown = o("includeCooldownPreset").checked, e.includeWarmup && !dt.length && (dt = Pi(fa, "warm")), e.includeCooldown && !ct.length && (ct = Pi(xa, "cool")), ye());
  }
  function Hs() {
    const e = o("upcomingCountSetting");
    if (!e) return;
    const t = Math.max(1, Z.length - 1), n = sn;
    e.innerHTML = "";
    for (let s = 1; s <= t; s++) {
      const l = document.createElement("option");
      l.value = String(s), l.textContent = String(s), e.appendChild(l);
    }
    const a = document.createElement("option");
    a.value = "all", a.textContent = "All", e.appendChild(a);
    const i = n === "all" ? "all" : String(Math.min(Number(n) || 1, t));
    e.value = i, sn = i === "all" ? "all" : Number(i);
  }
  function ye() {
    Number(x.value) * 60;
    const e = Number(b.value), t = Number(M.value), n = ue[ge], a = !!(n != null && n.customSequence), i = (a ? !n.includeWarmup : n != null && n.warmupOff) ? [] : po(dt), s = po(Je), l = a && !n.includeCooldown ? [] : po(ct);
    if (n && (n.total = Number(x.value), n.work = e, n.rest = t, n.rounds = Number(we.value) || 1, n.customSequence ? (n.sequence = Je.map((N) => ({ ...N })), n.warmup = dt.map((N) => ({ ...N })), n.cooldown = ct.map((N) => ({ ...N }))) : (n.strength = Je.map((N) => ({ ...N })), n.warmup = dt.map((N) => ({ ...N })), n.cooldown = ct.map((N) => ({ ...N })))), n != null && n.customSequence) {
      const N = [...i.map((ie) => ({ ...ie, section: "warmup" })), ...s, ...l.map((ie) => ({ ...ie, section: "cooldown" }))].map((ie) => {
        if (ie.kind === "video") return { ...ie, duration: qn(ie, e), rest: 0 };
        if (ie.kind === "rest") {
          const He = ie.useGlobalTiming === !0 ? t : Number(ie.duration) || t;
          return { ...ie, duration: He, rest: 0 };
        }
        const De = ie.useGlobalTiming === !1 && Number(ie.duration) || e;
        return { ...ie, duration: De, rest: 0 };
      });
      n.autoRest && Number(n.autoRestDuration) > 0 ? (Z = [], N.forEach((ie, De) => {
        Z.push(ie);
        const He = N[De + 1];
        ie.kind !== "rest" && He && He.kind !== "rest" && Z.push({
          id: "auto-rest-" + De,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(n.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : Z = N;
    } else
      Z = [...i.map((N) => ({ ...N, section: "warmup" })), ...s, ...l.map((N) => ({ ...N, section: "cooldown" }))].map((N) => N.kind === "video" ? { ...N, duration: qn(N, e), rest: 0 } : N.kind === "rest" ? { ...N, duration: N.useGlobalTiming === !0 ? t : Number(N.duration) || t, rest: 0 } : { ...N, duration: N.useGlobalTiming === !1 && Number(N.duration) || e, rest: t }), Z.forEach((N, ie) => {
        var De;
        ((De = Z[ie + 1]) == null ? void 0 : De.kind) === "rest" && (N.rest = 0);
      }), Z.length && (Z[Z.length - 1].rest = 0);
    const c = Math.max(1, Math.min(10, Number(we.value) || 1)), g = Z, k = (N) => c <= 1 ? null : N.section === "warmup" || N.presetRole === "warmup" ? "first" : N.section === "cooldown" || N.presetRole === "cooldown" ? "last" : N.kind === "video" && (N.videoRounds === "first" || N.videoRounds === "last") ? N.videoRounds : null, u = (N) => !!k(N), p = g.filter((N) => !u(N)), R = g.filter(u), U = p.length, A = p.reduce((N, ie) => N + ie.duration + ie.rest, 0), L = R.reduce((N, ie) => N + ie.duration + ie.rest, 0), E = [
      R.some((N) => N.section === "warmup" || N.presetRole === "warmup") && "warm-up",
      R.some((N) => N.section === "cooldown" || N.presetRole === "cooldown") && "cooldown",
      R.some((N) => N.kind === "video" && !N.section && !N.presetRole) && "video"
    ].filter(Boolean), oe = E.length > 1 ? E.slice(0, -1).join(", ") + " & " + E[E.length - 1] : E[0] || "";
    Z = [];
    const le = (N, ie) => {
      const De = k(N);
      return !De || (De === "first" ? ie === 1 : ie === c);
    };
    for (let N = 1; N <= c; N++)
      if (g.filter((ie) => le(ie, N)).forEach((ie, De) => Z.push({ ...ie, id: ie.id + (c > 1 ? "-r" + N : ""), round: N, roundIndex: De })), N < c && U)
        if (n != null && n.customSequence)
          Z.push({ id: "round-break-" + N, name: "Rest", group: "Round " + (N + 1) + " next", kind: "rest", hidden: !1, duration: t, rest: 0, round: N, roundIndex: U, roundBreak: !0 });
        else {
          const ie = Z[Z.length - 1];
          ie.rest = t, ie.roundBreakAfter = !0;
        }
    ya();
    const O = Z.reduce((N, ie) => N + ie.duration + ie.rest, 0), de = Math.round(A / 60), G = Math.round(O / 60), W = c > 1 ? Yt(de) + " × " + c + " rounds" + (L ? " + " + We(L) + " " + oe : "") + " (" + Yt(G) + ")" : Yt(G), X = [i.length ? "warm-up" : "", l.length ? "cooldown" : ""].filter(Boolean), Fe = n != null && n.customSequence ? W + " · " + U + " items" + (X.length && !(c > 1 && L) ? " · " + X.join(" + ") : "") : W + " · " + We(e) + " / " + We(t) + (X.length && !(c > 1 && L) ? " · " + X.join(" + ") : "");
    _.textContent = We(A);
    const _e = Z.filter((N) => !N.roundBreak).length, Se = c > 1 ? _e + " activities · " + c + " rounds" : U + " activities";
    Wt.textContent = c > 1 ? c + " rounds · " + Yt(G) + " total" : "1 round", o("roundsCount").textContent = c, r.querySelectorAll("[data-rounds-step]").forEach((N) => {
      N.disabled = Number(N.dataset.roundsStep) < 0 ? c <= 1 : c >= 10;
    }), n && (n.summary = Fe, n.activityCount = U);
    const qt = r.querySelector(".workoutPanel.active .sub");
    qt && (qt.textContent = Fe), Ri.textContent = Fe, wo(), r.querySelectorAll(".workoutPanel.active .activityCount").forEach((N) => N.textContent = Se), ya(), vo(), ko(), Zn(), Hs(), Ae && Me(), pe.workout.classList.contains("active") && !Pe && Go();
  }
  const _n = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', Vs = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', zs = {
    activity: '<path d="M22 12H18L15 21L9 3L6 12H2"/>',
    steps: '<path d="M12 19V5"/><path d="M5 12L12 5L19 12"/>',
    mood: '<path d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22Z"/><path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14"/><path d="M9 9H9.01"/><path d="M15 9H15.01"/>',
    energy: '<path d="M13 2L3 14H12L11 22L21 10H12L13 2Z"/>',
    clock: '<path d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22Z"/><path d="M12 6V12L16 14"/>',
    streak: '<path d="M22 7L13.5 15.5L8.5 10.5L2 17"/><path d="M16 7H22V13"/>',
    calendar: '<path d="M19 4H5C3.9 4 3 4.9 3 6V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4Z"/><path d="M16 2V6"/><path d="M8 2V6"/><path d="M3 10H21"/>',
    home: '<path d="M3 10.5L12 3L21 10.5V21H3V10.5Z"/>',
    settings: '<path d="M21 4H14"/><path d="M10 4H3"/><path d="M21 12H12"/><path d="M8 12H3"/><path d="M21 20H16"/><path d="M12 20H3"/><path d="M14 2V6"/><path d="M8 10V14"/><path d="M16 18V22"/>',
    fullscreen: '<path d="M8 3H5C3.9 3 3 3.9 3 5V8"/><path d="M21 8V5C21 3.9 20.1 3 19 3H16"/><path d="M3 16V19C3 20.1 3.9 21 5 21H8"/><path d="M16 21H19C20.1 21 21 20.1 21 19V16"/>',
    move: '<path d="M7 17L17 7"/><path d="M7 7H17V17"/>',
    check: '<path d="M20 6L9 17L4 12"/>',
    back: '<path d="M15 18L9 12L15 6"/>',
    close: '<path d="M18 6L6 18"/><path d="M6 6L18 18"/>',
    add: '<path d="M5 12H19"/><path d="M12 5V19"/>',
    play: '<path d="M8 5.5V18.5L18.5 12L8 5.5Z"/>',
    pause: '<path d="M9 6V18"/><path d="M15 6V18"/>'
  }, Gn = (e) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (zs[e] || "") + "</svg>";
  r.querySelectorAll("[data-icon]").forEach((e) => {
    e.innerHTML = Gn(e.dataset.icon);
  });
  const Os = {
    steps: "M10.74,11.72C11.21,12.95 11.16,14.23 9.75,14.74C6.85,15.81 6.2,13 6.16,12.86L10.74,11.72M5.71,10.91L10.03,9.84C9.84,8.79 10.13,7.74 10.13,6.5C10.13,4.82 8.8,1.53 6.68,2.06C4.26,2.66 3.91,5.35 4,6.65C4.12,7.95 5.64,10.73 5.71,10.91M17.85,19.85C17.82,20 17.16,22.8 14.26,21.74C12.86,21.22 12.8,19.94 13.27,18.71L17.85,19.85M20,13.65C20.1,12.35 19.76,9.65 17.33,9.05C15.22,8.5 13.89,11.81 13.89,13.5C13.89,14.73 14.17,15.78 14,16.83L18.3,17.9C18.38,17.72 19.89,14.94 20,13.65Z",
    mood: "M12,17.5C14.33,17.5 16.3,16.04 17.11,14H6.89C7.69,16.04 9.67,17.5 12,17.5M8.5,11A1.5,1.5 0 0,0 10,9.5A1.5,1.5 0 0,0 8.5,8A1.5,1.5 0 0,0 7,9.5A1.5,1.5 0 0,0 8.5,11M15.5,11A1.5,1.5 0 0,0 17,9.5A1.5,1.5 0 0,0 15.5,8A1.5,1.5 0 0,0 14,9.5A1.5,1.5 0 0,0 15.5,11M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",
    energy: "M11 15H6L13 1V9H18L11 23V15Z",
    week: "M6 1H8V3H16V1H18V3H19C20.11 3 21 3.9 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.89 3 5 3H6V1M5 8V19H19V8H5M7 10H17V12H7V10Z",
    streak: "M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 9.15 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C18.86 17.66 19.5 15 18.56 12.72L18.43 12.46C18.22 12 17.66 11.2 17.66 11.2M14.5 17.5C14.22 17.74 13.76 18 13.4 18.1C12.28 18.5 11.16 17.94 10.5 17.28C11.69 17 12.4 16.12 12.61 15.23C12.78 14.43 12.46 13.77 12.33 13C12.21 12.26 12.23 11.63 12.5 10.94C12.69 11.32 12.89 11.7 13.13 12C13.9 13 15.11 13.44 15.37 14.8C15.41 14.94 15.43 15.08 15.43 15.23C15.46 16.05 15.1 16.95 14.5 17.5H14.5Z",
    month: "M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z"
  }, Di = (e) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="' + (Os[e] || "") + '"/></svg>';
  r.querySelectorAll("[data-mdi]").forEach((e) => {
    e.innerHTML = Di(e.dataset.mdi);
  });
  let Qe = null, pt = null;
  function qs(e) {
    return e = Math.max(1, Number(e) || 0), e >= 3600 && e % 3600 === 0 ? { value: e / 3600, unit: "hour" } : e >= 60 && e % 60 === 0 ? { value: e / 60, unit: "min" } : { value: e, unit: "sec" };
  }
  function Hi(e = !1) {
    const t = r.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    t && (t.focus({ preventScroll: !0 }), e && t.select());
  }
  function go(e, t, n = {}) {
    const a = e.kind === "rest", i = e.kind === "video", s = i ? e.useVideoLength !== !1 : a ? e.useGlobalTiming === !0 : e.useGlobalTiming !== !1, l = Number(a ? M.value : b.value), c = qs(i ? e.useVideoLength === !1 ? e.duration : qn({ ...e, useVideoLength: !0 }) : s ? l : e.duration || l), g = i && (Number(e.videoDuration) > 0 || Number(e.end) > 0), k = i ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + J(e.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + J(e.autoName ? "" : e.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([O, de]) => '<option value="' + O + '"' + ((e.videoRounds || "every") === O ? " selected" : "") + ">" + de + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + J(e.name) + '" placeholder="' + (a ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + J(e.group) + '" placeholder="' + (a ? "Rest" : "e.g. Glutes + legs") + '"></label>', u = i ? "Play the whole " + (Number(e.start) > 0 || Number(e.end) > 0 ? "clip" : "video") + (g ? " · " + On(qn({ ...e, useVideoLength: !0 })) : "") : "Use global timing · " + We(l), p = document.createElement("div");
    p.className = "moveRow editing" + (n.sheet ? " inSheet" : ""), p.dataset.index = t, p.dataset.id = e.id;
    const R = n.isNew ?? (pt == null ? void 0 : pt.item) === e, U = n.sheet ? '<div class="moveEditActions sheetActions">' + (R ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (e.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + J(e.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (R ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    p.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (i ? " videoFields" : "") + '">' + k + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (s ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + J(u) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + c.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((O) => '<option value="' + O + '"' + (O === c.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[O] + "</option>").join("") + "</select></div></div>" + U + "</div>";
    const A = (O) => p.querySelector("[data-f=" + O + "]"), L = () => {
      const O = A("global").checked;
      A("dur").disabled = O, A("unit").disabled = O, p.querySelector(".creatorDurationRow").classList.toggle("isDisabled", O);
    };
    A("global").addEventListener("change", L), L();
    const E = () => {
      var O;
      if (n.sheet) {
        (O = n.onCancel) == null || O.call(n);
        return;
      }
      R && Sa(), Qe = null, ye();
    }, oe = () => {
      var G;
      if (i) {
        le();
        return;
      }
      const O = A("name").value.trim();
      if (!O) {
        A("name").focus();
        return;
      }
      e.name = O, e.group = A("group").value.trim() || (a ? "Rest" : "Movement");
      const de = A("global").checked;
      if (e.useGlobalTiming = de, de || (e.duration = Math.max(a ? 5 : 1, ka(A("dur").value, A("unit").value))), n.sheet) {
        (G = n.onSaved) == null || G.call(n);
        return;
      }
      R && (pt = null), Qe = null, ye(), Te(R ? a ? "Rest added" : "Movement added" : "Movement updated");
    }, le = () => {
      var X;
      const O = A("url").value.trim(), de = Ds(O);
      if (!de) {
        A("urlError").hidden = !1, A("url").classList.add("invalid"), A("url").focus();
        return;
      }
      const G = de.id !== e.videoId;
      e.url = O, e.videoId = de.id, e.start = de.start, e.end = de.end, G && (e.videoDuration = null, e.videoError = null);
      const W = A("name").value.trim();
      e.autoName = !W, e.name = W || (G ? "" : e.name) || e.videoTitle || "YouTube video", e.group = "Video", e.videoRounds = A("rounds").value, e.useVideoLength = A("global").checked, e.useVideoLength || (e.duration = Math.max(5, ka(A("dur").value, A("unit").value))), n.sheet ? (X = n.onSaved) == null || X.call(n) : (R && (pt = null), Qe = null, ye(), Te(R ? "Video added" : "Video updated")), (G || !e.videoDuration || e.autoName && !e.videoTitle) && Pl(e);
    };
    if (i && A("url").addEventListener("input", () => {
      A("urlError").hidden = !0, A("url").classList.remove("invalid");
    }), p.querySelector("[data-a=cancel]").addEventListener("click", E), p.querySelector("[data-a=save]").addEventListener("click", oe), n.sheet && !R) {
      p.querySelector("[data-a=hide]").addEventListener("click", () => {
        var de;
        return (de = n.onHide) == null ? void 0 : de.call(n);
      });
      const O = p.querySelector("[data-a=remove]");
      da(O, O.querySelector(".removeFill"), 1200, () => {
        var de;
        return (de = n.onRemove) == null ? void 0 : de.call(n);
      });
    }
    return p.addEventListener("keydown", (O) => {
      O.key === "Escape" && (O.preventDefault(), O.stopPropagation(), E()), O.key === "Enter" && O.target.matches("input") && (O.preventDefault(), oe());
    }), p;
  }
  function ho(e, t) {
    const n = o(t);
    n.innerHTML = "", e.forEach((a, i) => {
      if (a === Qe && !Un()) {
        n.appendChild(go(a, i));
        return;
      }
      const s = document.createElement("div");
      s.className = "moveRow" + (a.hidden ? " hidden" : "") + (a.kind === "rest" ? " restItem" : "") + (a.kind === "video" ? " videoItem" : "") + (Ko(a) ? " noMeta" : ""), s.dataset.index = i, s.dataset.id = a.id;
      const l = a.kind === "rest" ? a.useGlobalTiming === !0 ? "Global timing" : We(a.duration) : a.useGlobalTiming === !1 ? We(a.duration) : "Global timing", c = a.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", g = a.kind === "video" ? a.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (a.useVideoLength === !1 ? "stops after " + We(a.duration) : Number(a.videoDuration) > 0 || Number(a.end) > 0 ? On(qn(a)) : "plays to the end") + (a.videoRounds === "first" ? " · first round only" : a.videoRounds === "last" ? " · last round only" : "") : a.group + " · " + l, k = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + J(a.name) + '. Drag, or use the up and down arrow keys">' + _n + "</button>", u = '<div class="moveText"><div class="moveItemName">' + J(a.name) + c + '</div><div class="moveMeta">' + J(g) + "</div></div>", p = (A) => A.addEventListener("keydown", (L) => {
        var le, O;
        if (L.key !== "ArrowUp" && L.key !== "ArrowDown") return;
        L.preventDefault();
        const E = e.indexOf(a), oe = E + (L.key === "ArrowUp" ? -1 : 1);
        oe < 0 || oe >= e.length || (e.splice(E, 1), e.splice(oe, 0, a), ye(), (O = (le = o(t).children[oe]) == null ? void 0 : le.querySelector(".dragHandle")) == null || O.focus());
      });
      if (Un()) {
        s.classList.add("phoneRow"), s.tabIndex = 0, s.setAttribute("role", "button"), s.setAttribute("aria-label", "Edit " + (a.name || "step")), s.innerHTML = k + u + '<span class="rowChevron" aria-hidden="true">›</span>';
        const A = s.querySelector(".dragHandle");
        A.addEventListener("pointerdown", (L) => Vi(L, s, n, e)), p(A), s.addEventListener("click", (L) => {
          L.target.closest(".dragHandle") || Zi(a, e);
        }), s.addEventListener("keydown", (L) => {
          L.key === "Enter" && L.target === s && (L.preventDefault(), Zi(a, e));
        }), n.appendChild(s);
        return;
      }
      s.innerHTML = k + u + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + J(a.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (a.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + J(a.name) + '"><span class="removeFill"></span><span class="removeLabel">' + Vs + "</span></button></div>", s.querySelector(".editBtn").addEventListener("click", () => {
        Sa(), Qe = a, ye(), Hi();
      }), s.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        a.hidden = !a.hidden, ye();
      });
      const R = s.querySelector(".removeBtn");
      da(R, R.querySelector(".removeFill"), 1200, () => {
        const A = e.indexOf(a);
        A < 0 || (e.splice(A, 1), ye(), Te("Removed " + a.name, { label: "Undo", run: () => {
          e.splice(Math.min(A, e.length), 0, a), ye();
        } }));
      });
      const U = s.querySelector(".dragHandle");
      U.addEventListener("pointerdown", (A) => Vi(A, s, n, e)), p(U), n.appendChild(s);
    });
  }
  const at = () => {
    var e;
    return (e = window.matchMedia) == null ? void 0 : e.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, Ca = (e) => {
    var t;
    try {
      (t = navigator.vibrate) == null || t.call(navigator, e);
    } catch {
    }
  };
  function Vi(e, t, n, a) {
    if (e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const i = e.currentTarget, s = e.pointerId, l = !at();
    try {
      i.setPointerCapture(s);
    } catch {
    }
    const c = t.closest(".exerciseScroller") || fo(t), g = n.style.position;
    n.style.position = "relative";
    const k = [...n.children].filter((re) => re.classList.contains("moveRow")), u = k.indexOf(t), p = parseFloat(getComputedStyle(n).rowGap) || 8, R = t.offsetHeight, U = R + p, A = k.map((re) => re.offsetTop), L = k.map((re) => re.offsetHeight), E = () => n.getBoundingClientRect().top, oe = n.getBoundingClientRect().width, le = e.clientY - (E() + A[u]), O = e.clientX;
    let de = e.clientY, G = e.clientX, W = E() + A[u], X = 0, Fe = 0, _e = 0, Se = 1, qt = 0, N = u, ie = !1, De = 0, He = !1, no = !1, Fn = A[u];
    n.classList.add("reordering"), t.classList.add("dragging"), t.style.transition = "none", Ca(8);
    const ao = () => {
      const re = de - le + R / 2 - E();
      let me = 0;
      return k.forEach((ke, Ze) => {
        Ze !== u && re > A[Ze] + L[Ze] / 2 && me++;
      }), me;
    }, oo = () => {
      k.forEach((re, me) => {
        if (me === u) return;
        const ke = u < N && me > u && me <= N ? -U : u > N && me >= N && me < u ? U : 0;
        re.style.transform = ke ? "translateY(" + ke + "px)" : "";
      });
    }, va = () => {
      const re = n.getBoundingClientRect(), me = Math.abs(G - O) > Math.max(80, oe * 0.3) || G < re.left - 24 || G > re.right + 24;
      me !== ie && (ie = me, t.classList.toggle("willReturn", me), Ca(me ? 10 : 4));
      const ke = ie ? u : ao();
      ke !== N && (N = ke, oo(), ie || Ca(4));
    }, _t = () => {
      if (N === u) return A[u];
      const re = k.filter((ke, Ze) => Ze !== u);
      let me = A[0];
      for (let ke = 0; ke < N; ke++) me += re[ke].offsetHeight + p;
      return me;
    }, Pn = () => {
      const re = l ? Math.min(Math.abs(X) / 40, 1) : 0, me = l && !He ? Math.max(-3, Math.min(3, _e * 0.6)) : 0;
      t.style.transform = "translate(" + Fe.toFixed(2) + "px," + (W - (E() + A[u])).toFixed(2) + "px) rotate(" + me.toFixed(2) + "deg) scale(" + (Se * (1 - 0.04 * re)).toFixed(4) + "," + (Se * (1 + 0.06 * re)).toFixed(4) + ")";
    }, ae = () => {
      De = requestAnimationFrame(ae);
      const re = G - O, me = He ? E() + Fn : de - le, ke = He ? 0 : ie ? re * 0.9 : Math.max(-22, Math.min(22, re * 0.22)), Ze = He ? 1 : ie ? 0.97 : 1.035;
      if (!l) {
        W = me, Fe = He ? 0 : ke, Se = 1, Pn(), He && Le();
        return;
      }
      const id = He ? 0.24 : 0.2, rd = He ? 0.62 : 0.68;
      X = (X + (me - W) * id) * rd, W += X, _e = (_e + (ke - Fe) * 0.16) * 0.7, Fe += _e, qt = (qt + (Ze - Se) * 0.22) * 0.6, Se += qt, Pn(), He && Math.abs(X) < 0.15 && Math.abs(me - W) < 0.5 && Math.abs(Fe) < 0.5 && Math.abs(Se - 1) < 3e-3 && Le();
    }, xe = setInterval(() => {
      if (!c || He) return;
      const re = c.getBoundingClientRect(), me = 56, ke = de < re.top + me ? -10 : de > re.bottom - me ? 10 : 0;
      ke && (c.scrollTop += ke, va());
    }, 30);
    function Le() {
      if (no) return;
      no = !0, cancelAnimationFrame(De);
      const re = N !== u, me = t.dataset.id;
      if (n.classList.remove("reordering"), k.forEach((Ze) => {
        Ze.style.transition = "none", Ze.style.transform = "";
      }), t.classList.remove("dragging", "willReturn"), n.style.position = g, re) {
        const [Ze] = a.splice(u, 1);
        a.splice(N, 0, Ze);
      }
      ye();
      const ke = me && n.querySelector('.moveRow[data-id="' + me + '"]');
      ke && l && ke.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), re && Te("Order saved");
    }
    const Ve = (re) => {
      if (re.pointerId === s) {
        if (re.pointerType === "mouse" && re.buttons === 0) {
          lt();
          return;
        }
        de = re.clientY, G = re.clientX, va();
      }
    }, Ue = (re) => {
      re.pointerId === s && lt();
    };
    function lt() {
      He || (window.removeEventListener("pointermove", Ve, !0), window.removeEventListener("pointerup", Ue, !0), window.removeEventListener("pointercancel", Ue, !0), i.removeEventListener("lostpointercapture", lt), clearInterval(xe), ie && N !== u && (N = u, oo()), Fn = _t(), He = !0, Ca(6), setTimeout(Le, 800));
    }
    window.addEventListener("pointermove", Ve, !0), window.addEventListener("pointerup", Ue, !0), window.addEventListener("pointercancel", Ue, !0), i.addEventListener("lostpointercapture", lt), De = requestAnimationFrame(ae), Pn();
  }
  function vo() {
    var i, s, l, c;
    const e = ue[ge], t = (i = o("warmupList")) == null ? void 0 : i.closest("section"), n = (s = o("cooldownList")) == null ? void 0 : s.closest("section"), a = (c = (l = o("strengthList")) == null ? void 0 : l.closest("section")) == null ? void 0 : c.querySelector(".sectionTitle");
    e != null && e.customSequence ? (t && (t.hidden = !e.includeWarmup), n && (n.hidden = !e.includeCooldown), a && (a.textContent = "Move sequence")) : (t && (t.hidden = !!(e != null && e.warmupOff)), n && (n.hidden = !1), a && (a.textContent = "Kettlebell work")), ho(dt, "warmupList"), ho(Je, "strengthList"), ho(ct, "cooldownList");
  }
  function Sa() {
    if (!pt) return;
    const { item: e, arr: t } = pt;
    pt = null;
    const n = t.indexOf(e);
    n >= 0 && t.splice(n, 1), Qe === e && (Qe = null);
  }
  function Wn(e) {
    return e.id === "warmupList" ? { arr: dt, kind: "warmup", group: "Warm-up" } : e.id === "cooldownList" ? { arr: ct, kind: "cooldown", group: "Cooldown" } : { arr: Je, kind: "work", group: "" };
  }
  function zi(e, t) {
    const n = Wn(t), a = Date.now().toString(36);
    return e === "video" ? { id: "video-" + a, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : e === "rest" ? { id: "rest-" + a, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(M.value) } : { id: "movement-" + a, name: "", group: n.group, kind: n.kind, hidden: !1, useGlobalTiming: !0, duration: Number(b.value) };
  }
  const Oi = "cubic-bezier(.34,1.46,.64,1)";
  function qi(e, t) {
    if (at() || !e) {
      t();
      return;
    }
    const n = (s) => {
      var l;
      return ((l = s.dataset) == null ? void 0 : l.id) || s;
    }, a = () => [...e.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], i = new Map(a().map((s) => [n(s), s.getBoundingClientRect().top]));
    t(), a().forEach((s) => {
      const l = i.get(n(s));
      if (l === void 0) return;
      const c = l - s.getBoundingClientRect().top;
      Math.abs(c) < 0.5 || s.animate([{ transform: "translateY(" + c + "px)" }, { transform: "none" }], { duration: 440, easing: Oi });
    });
  }
  function _i(e, t) {
    if (!e || at()) return;
    const n = e.offsetHeight, a = Math.max(0, n - (t || 0));
    e.animate([{ clipPath: "inset(0 0 " + a + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: Oi });
  }
  function Gi(e, t, n, a) {
    const { arr: i } = Wn(t), s = zi(e, t);
    i.splice(Math.max(0, Math.min(n, i.length)), 0, s), pt = { item: s, arr: i }, Qe = s, qi(t.closest(".exerciseScroller,.createStepSlot") || t, () => ye());
    const l = t.querySelector(".moveRow.editing");
    return _i(l, a), Hi(e === "rest"), l;
  }
  function fo(e) {
    for (let t = e; t && t.nodeType === 1; t = t.parentElement) {
      const n = getComputedStyle(t).overflowY;
      if (/(auto|scroll)/.test(n) && t.scrollHeight > t.clientHeight) return t;
    }
    return null;
  }
  const Wi = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function ji(e, t) {
    const n = document.createElement("div");
    return n.className = "addGhost" + (e === "movement" ? "" : " rest"), n.innerHTML = '<span class="addGhostGrip">' + _n + '</span><span class="addGhostText"><strong>' + J(t[0]) + "</strong><small>" + J(t[1]) + "</small></span>", o("workoutModal").appendChild(n), n;
  }
  function jn(e) {
    e.classList.add("leaving"), setTimeout(() => e.remove(), 180);
  }
  function _s(e, t, n, a) {
    (Qe || pt) && (Sa(), Qe = null, ye());
    const i = e.getBoundingClientRect(), s = ji(t, Wi[t]);
    s.setAttribute("aria-hidden", "true"), s.style.width = i.width + "px", s.style.height = i.height + "px", s.style.transform = "translate(" + i.left + "px," + i.top + "px)", e.classList.add("lifting");
    const l = fo(e);
    return Yi({
      ghost: s,
      origin: i,
      sx: n,
      sy: a,
      scroller: l,
      column: e.closest(".exerciseScroller,.createFlow") || l,
      home: () => e.getBoundingClientRect(),
      onDrop: (c, g, k) => {
        jn(s), e.classList.remove("lifting"), Gi(t, c, g, k);
      },
      onReturn: () => {
        jn(s), e.classList.remove("lifting");
      }
    });
  }
  function Yi({ ghost: e, origin: t, sx: n, sy: a, scroller: i, column: s, home: l, onDrop: c, onReturn: g, rowLook: k = !1 }) {
    var Pn;
    const u = !at(), p = ((Pn = r.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : Pn.offsetHeight) || 80, R = n - t.left, U = a - t.top, A = 44;
    let L = n, E = a, oe = t.left, le = t.top, O = 0, de = 0, G = !u, W = null, X = null, Fe = -1, _e = 0, Se = null;
    const qt = () => ["warmupList", "strengthList", "cooldownList"].map((ae) => o(ae)).filter((ae) => ae && ae.getClientRects().length && !ae.closest("[hidden]")), N = (ae) => {
      if (ae === W) return;
      W = ae, e.classList.toggle("overList", !!ae || k);
      const xe = ae ? ae.getBoundingClientRect().width : t.width;
      e.style.width = xe + "px", e.style.height = (ae ? p : t.height) + "px";
    }, ie = (ae) => {
      ae.classList.add("leaving"), ae.style.height = "0px", ae.style.marginTop = "-8px", setTimeout(() => ae.remove(), u ? 320 : 0);
    }, De = (ae, xe, Le) => {
      if (X && X.parentNode === ae && Fe === Le || (X && (ie(X), X = null, Fe = -1), !ae)) return;
      const Ve = document.createElement("div");
      Ve.className = "dropSlot", ae.insertBefore(Ve, xe), X = Ve, Fe = Le, Ve.getBoundingClientRect(), Ve.style.height = p + "px", Ve.style.marginTop = "0px";
    }, He = () => {
      let ae = null, xe = 1 / 0;
      for (const lt of qt()) {
        const re = lt.getBoundingClientRect();
        if (L < re.left - 48 || L > re.right + 48) continue;
        const me = re.top - 28, ke = re.bottom + 28, Ze = E < me ? me - E : E > ke ? E - ke : 0;
        Ze < xe && (xe = Ze, ae = lt);
      }
      const Le = s == null ? void 0 : s.getBoundingClientRect(), Ue = Le && L >= Le.left && L <= Le.right && E >= Le.top && E <= Le.bottom || xe === 0 ? ae : null;
      if (Ue) {
        const lt = [...Ue.children].filter((me) => me.classList.contains("moveRow"));
        let re = lt.findIndex((me) => {
          const ke = me.getBoundingClientRect();
          return E < ke.top + ke.height / 2;
        });
        re < 0 && (re = lt.length), De(Ue, lt[re] || null, re);
      } else De(null);
      N(Ue);
    }, no = () => {
      if (Se) return Se.aim();
      if (W) {
        const ae = W.getBoundingClientRect();
        let xe = E - p / 2;
        return X && (xe = xe * 0.6 + X.getBoundingClientRect().top * 0.4), { x: ae.left, y: xe };
      }
      return { x: L - R, y: E - U };
    }, Fn = (ae, xe, Le, Ve) => {
      e.style.transform = "translate(" + oe + "px," + le + "px) rotate(" + ae + "deg) rotate(" + xe + "rad) scale(" + Le + "," + Ve + ") rotate(" + -xe + "rad)";
    }, ao = () => {
      if (_e = requestAnimationFrame(ao), !G) {
        const re = L - n, me = E - a, ke = Math.min(Math.hypot(re, me) / A, 1);
        oe = t.left + re * 0.35, le = t.top + me * 0.35, Fn(0, Math.atan2(me, re), 1 + 0.155 * ke, 1 - 0.1 * ke);
        return;
      }
      const ae = no();
      if (!u) {
        oe = ae.x, le = ae.y, Fn(0, 0, 1, 1), Se && (cancelAnimationFrame(_e), Se.done());
        return;
      }
      const xe = Se ? Se.k : 0.17, Le = Se ? Se.d : 0.7;
      O = (O + (ae.x - oe) * xe) * Le, de = (de + (ae.y - le) * xe) * Le, oe += O, le += de;
      const Ve = Math.hypot(O, de), Ue = Math.min(Ve / 48, 1), lt = W || Se ? 0 : Math.max(-5, Math.min(5, O * 0.32));
      Fn(lt, Math.atan2(de, O), 1 + 0.1 * Ue, 1 - 0.063 * Ue), Se && Ve < 0.15 && Math.hypot(ae.x - oe, ae.y - le) < 0.6 && (cancelAnimationFrame(_e), Se.done());
    }, oo = setInterval(() => {
      if (!i || Se) return;
      const ae = i.getBoundingClientRect(), xe = 64, Le = E < ae.top + xe ? -(ae.top + xe - E) / 4 : E > ae.bottom - xe ? (E - (ae.bottom - xe)) / 4 : 0;
      Le && (i.scrollTop += Math.max(-18, Math.min(18, Le)), He());
    }, 30);
    _e = requestAnimationFrame(ao);
    let va = !1;
    const _t = (ae, xe) => {
      if (va) return;
      va = !0, cancelAnimationFrame(_e);
      const Le = X ? X.offsetHeight : p;
      !ae && X && (X.remove(), X = null), ae ? c(ae, xe, Le) : g();
    };
    return {
      move(ae, xe) {
        L = ae, E = xe, !G && Math.hypot(L - n, E - a) > A && (G = !0, O = (L - n) * 0.085, de = (E - a) * 0.085), G && He();
      },
      drop(ae) {
        clearInterval(oo);
        const xe = W, Le = Fe;
        if (!ae && xe && X) {
          const Ve = X;
          Se = { k: 0.24, d: 0.62, aim: () => {
            const Ue = Ve.getBoundingClientRect();
            return { x: Ue.left, y: Ue.top };
          }, done: () => _t(xe, Le) }, setTimeout(() => _t(xe, Le), 650), u || (cancelAnimationFrame(_e), _t(xe, Le));
          return;
        }
        De(null), N(null), Se = { k: 0.2, d: 0.66, aim: () => {
          const Ve = l();
          return { x: Ve.left, y: Ve.top };
        }, done: () => _t(null) }, setTimeout(() => _t(null), 650), u || (cancelAnimationFrame(_e), _t(null));
      }
    };
  }
  function xo(e, t) {
    let n = !1;
    e.addEventListener("click", (a) => {
      if (n) {
        n = !1, a.preventDefault();
        return;
      }
      if (Un()) {
        Ki(t);
        return;
      }
      const i = o("strengthList"), s = Gi(t, i, Wn(i).arr.length, 0);
      s == null || s.scrollIntoView({ block: "nearest", behavior: at() ? "auto" : "smooth" });
    }), e.addEventListener("pointerdown", (a) => {
      if (a.button !== void 0 && a.button !== 0) return;
      const i = a.pointerId, s = a.clientX, l = a.clientY;
      let c = null, g = !1;
      try {
        e.setPointerCapture(i);
      } catch {
      }
      const k = (E) => {
        if (E.pointerId === i) {
          if (E.pointerType === "mouse" && E.buttons === 0) {
            L(!1);
            return;
          }
          if (!c) {
            if (Math.hypot(E.clientX - s, E.clientY - l) < 6) return;
            c = _s(e, t, s, l);
          }
          c.move(E.clientX, E.clientY);
        }
      }, u = (E) => {
        E.pointerId === i && L(!1);
      }, p = (E) => {
        E.pointerId === i && L(!0);
      }, R = () => L(!1), U = () => L(!0), A = (E) => {
        E.key === "Escape" && c && (E.preventDefault(), E.stopPropagation(), L(!0));
      };
      function L(E) {
        if (!g && (g = !0, window.removeEventListener("pointermove", k, !0), window.removeEventListener("pointerup", u, !0), window.removeEventListener("pointercancel", p, !0), window.removeEventListener("keydown", A, !0), window.removeEventListener("blur", U), e.removeEventListener("lostpointercapture", R), c)) {
          const oe = c;
          c = null, n = !0, setTimeout(() => {
            n = !1;
          }, 0), oe.drop(E);
        }
      }
      window.addEventListener("pointermove", k, !0), window.addEventListener("pointerup", u, !0), window.addEventListener("pointercancel", p, !0), window.addEventListener("keydown", A, !0), window.addEventListener("blur", U), e.addEventListener("lostpointercapture", R);
    });
  }
  const Yn = (ls = window.matchMedia) == null ? void 0 : ls.call(window, "(max-width: 620px)");
  function Un() {
    var e;
    return !!((e = window.matchMedia) != null && e.call(window, "(max-width: 620px)").matches);
  }
  const Ui = (e) => e.charAt(0).toUpperCase() + e.slice(1), Ma = (e) => e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "movement";
  let bo = null, Ne = null;
  function Ta(e, t, n, a) {
    et(), o("sheetTitle").textContent = e;
    const i = o("sheetBody");
    i.innerHTML = "", i.appendChild(t), bo = n || null, o("sheet").setAttribute("aria-hidden", "false"), o("sheetScrim").classList.add("open"), o("sheet").classList.add("open"), setTimeout(() => {
      if (!o("sheet").classList.contains("open") || !i.contains(t)) return;
      const s = a ? i.querySelector("input[data-f=url],input[data-f=name]") : i.querySelector("button,input,select");
      s == null || s.focus({ preventScroll: !0 });
    }, at() ? 0 : 360);
  }
  function et() {
    const e = o("sheet");
    if (!e.classList.contains("open")) return;
    e.classList.remove("open"), o("sheetScrim").classList.remove("open"), e.setAttribute("aria-hidden", "true"), e.contains(r.activeElement) && r.activeElement.blur();
    const t = bo;
    bo = null, t == null || t(), setTimeout(Ut, 0);
  }
  o("sheetScrim").addEventListener("click", et), o("sheet").addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), et());
  });
  function Zi(e, t) {
    const n = go(e, t.indexOf(e), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        et(), ye(), Te(Ui(Ma(e)) + " updated");
      },
      onCancel: et,
      onHide() {
        e.hidden = !e.hidden, et(), ye(), Te((e.hidden ? "Hidden: " : "Showing: ") + e.name);
      },
      onRemove() {
        et();
        const a = t.indexOf(e);
        a < 0 || (t.splice(a, 1), ye(), Te("Removed " + e.name, { label: "Undo", run: () => {
          t.splice(Math.min(a, t.length), 0, e), ye();
        } }));
      }
    });
    Ta("Edit " + Ma(e), n, null, !1);
  }
  function Gs() {
    const e = document.createElement("div");
    e.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([t, n, a, i]) => {
      const s = document.createElement("button");
      s.type = "button", s.className = "sheetChoice", s.innerHTML = '<span class="timeIcon" aria-hidden="true">' + Gn(n) + "</span><span><strong>" + a + "</strong><small>" + i + "</small></span>", s.addEventListener("click", () => Ki(t)), e.appendChild(s);
    }), Ta("Add to the move", e, null, !1);
  }
  function Ki(e) {
    Ne && Ea();
    const t = zi(e, o("strengthList")), n = go(t, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        et(), js(t, e);
      },
      onCancel: et
    });
    Ta("New " + Ma(t), n, null, !0);
  }
  const La = o("workoutModal").querySelector(".modalStatic"), Xi = { parent: La.parentNode, next: La.nextSibling };
  function Ws() {
    const e = document.createElement("div");
    e.className = "sheetSetup", e.appendChild(La);
    const t = document.createElement("button");
    t.type = "button", t.className = "primary sheetDone", t.textContent = "Done", t.addEventListener("click", et), e.appendChild(t), Ta("Setup", e, () => {
      Xi.parent.insertBefore(La, Xi.next), wo();
    }, !1);
  }
  function wo() {
    var t, n;
    const e = o("setupSummaryName");
    e && (e.textContent = (((t = o("workoutNameInput")) == null ? void 0 : t.value) || "").trim() || ((n = ue[ge]) == null ? void 0 : n.name) || "Move", o("setupSummaryMeta").textContent = Ri.textContent);
  }
  o("setupSummary").addEventListener("click", Ws), o("addFab").addEventListener("click", Gs);
  function $i() {
    const e = o("strengthList");
    return fo(e) || e.closest(".exerciseScroller");
  }
  function yo() {
    const e = o("strengthList").getBoundingClientRect(), t = ($i() || o("strengthList")).getBoundingClientRect(), n = (Ne == null ? void 0 : Ne.ghost.offsetHeight) || 64;
    return { left: e.left, top: Math.max(t.top + 12, Math.min(t.bottom - n - 96, t.top + t.height * 0.55 - n / 2)), width: e.width, height: n };
  }
  function js(e, t) {
    var c;
    const n = ji(t, [e.name || Wi[t][0], "Drag into place"]);
    n.classList.add("overList", "hovering"), n.setAttribute("aria-label", (e.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const a = document.createElement("span");
    a.className = "addGhostActions", a.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + J(e.name) + '">✕</button>', n.appendChild(a), Ne = { item: e, type: t, ghost: n };
    const i = ((c = r.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : c.offsetHeight) || 64;
    n.style.width = o("strengthList").getBoundingClientRect().width + "px", n.style.height = i + "px";
    const s = yo(), l = je.querySelector(".modal").getBoundingClientRect().bottom;
    n.style.transform = "translate(" + s.left + "px," + l + "px)", n.getBoundingClientRect(), at() || (n.classList.add("rising"), setTimeout(() => n.classList.remove("rising"), 650)), n.style.transform = "translate(" + s.left + "px," + s.top + "px)", a.querySelector("[data-a=end]").addEventListener("click", Ea), a.querySelector("[data-a=discard]").addEventListener("click", Us), n.addEventListener("pointerdown", Ys);
  }
  function Ys(e) {
    if (!Ne || e.target.closest("button") || e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const { item: t, ghost: n } = Ne, a = e.pointerId;
    try {
      n.setPointerCapture(a);
    } catch {
    }
    n.classList.remove("hovering", "rising"), n.classList.add("held");
    const i = n.getBoundingClientRect(), s = $i(), l = Yi({
      ghost: n,
      origin: { left: i.left, top: i.top, width: i.width, height: i.height },
      sx: e.clientX,
      sy: e.clientY,
      scroller: s,
      column: o("strengthList").closest(".exerciseScroller,.createFlow") || s,
      rowLook: !0,
      home: yo,
      onDrop: (L, E, oe) => {
        Ne = null, jn(n), Ji(t, L, E, oe);
      },
      onReturn: () => {
        n.classList.remove("held"), n.classList.add("hovering");
      }
    });
    let c = !1;
    const g = (L) => {
      if (L.pointerId === a) {
        if (L.pointerType === "mouse" && L.buttons === 0) {
          A(!1);
          return;
        }
        l.move(L.clientX, L.clientY);
      }
    }, k = (L) => {
      L.pointerId === a && A(!1);
    }, u = (L) => {
      L.pointerId === a && A(!0);
    }, p = () => A(!1), R = () => A(!0), U = (L) => {
      L.key === "Escape" && (L.preventDefault(), A(!0));
    };
    function A(L) {
      c || (c = !0, window.removeEventListener("pointermove", g, !0), window.removeEventListener("pointerup", k, !0), window.removeEventListener("pointercancel", u, !0), window.removeEventListener("keydown", U, !0), window.removeEventListener("blur", R), n.removeEventListener("lostpointercapture", p), l.drop(L));
    }
    window.addEventListener("pointermove", g, !0), window.addEventListener("pointerup", k, !0), window.addEventListener("pointercancel", u, !0), window.addEventListener("keydown", U, !0), window.addEventListener("blur", R), n.addEventListener("lostpointercapture", p);
  }
  function Ji(e, t, n, a) {
    const i = Wn(t);
    e.kind !== "rest" && e.kind !== "video" && (e.kind = i.kind, i.group && (!e.group || e.group === "Movement") && (e.group = i.group)), i.arr.splice(Math.max(0, Math.min(n, i.arr.length)), 0, e), qi(t.closest(".exerciseScroller,.createStepSlot") || t, () => ye()), _i(t.querySelector('.moveRow[data-id="' + e.id + '"]'), a), Te(Ui(Ma(e)) + " added");
  }
  function Ea() {
    var a;
    if (!Ne) return;
    const { item: e, ghost: t } = Ne;
    Ne = null, jn(t);
    const n = o("strengthList");
    Ji(e, n, Wn(n).arr.length, 0), (a = n.querySelector('.moveRow[data-id="' + e.id + '"]')) == null || a.scrollIntoView({ block: "nearest", behavior: at() ? "auto" : "smooth" });
  }
  function Us() {
    if (!Ne) return;
    const e = Ne.ghost;
    Ne = null, jn(e), Te("Discarded");
  }
  function Qi() {
    Ne && (Ne.ghost.remove(), Ne = null);
  }
  window.addEventListener("resize", () => {
    if (Ne != null && Ne.ghost.classList.contains("hovering")) {
      const e = yo();
      Ne.ghost.style.width = e.width + "px", Ne.ghost.style.transform = "translate(" + e.left + "px," + e.top + "px)";
    }
  }), (ds = Yn == null ? void 0 : Yn.addEventListener) == null || ds.call(Yn, "change", () => {
    et(), Ne && !Un() && Ea(), vo();
  });
  {
    const e = o("workoutModal").querySelector(".modal");
    e.addEventListener("scroll", () => {
      (e.scrollTop || e.scrollLeft) && (e.scrollTop = 0, e.scrollLeft = 0);
    });
  }
  function Ut() {
    const e = o("workoutModal"), t = window.visualViewport;
    if (!e.classList.contains("open") || !Un()) {
      er();
      return;
    }
    const n = t ? t.offsetTop : 0, a = t ? t.offsetLeft : 0, i = t ? t.width : window.innerWidth, s = t ? t.height : window.innerHeight;
    Object.assign(e.style, { right: "auto", bottom: "auto", width: i + "px", height: s + "px", top: n + "px", left: a + "px" });
    const l = e.getBoundingClientRect();
    Math.abs(l.top - n) > 0.5 && (e.style.top = 2 * n - l.top + "px"), Math.abs(l.left - a) > 0.5 && (e.style.left = 2 * a - l.left + "px");
  }
  function er() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((e) => o("workoutModal").style.removeProperty(e));
  }
  (cs = window.visualViewport) == null || cs.addEventListener("resize", Ut), (ps = window.visualViewport) == null || ps.addEventListener("scroll", Ut), window.addEventListener("resize", Ut), window.addEventListener("scroll", Ut, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(Ut, 250));
  function ko() {
    Je.length > 0;
    const e = o("addMovementBtn"), t = o("addRestBtn");
    e && (e.innerHTML = _n + "<span>Add movement</span>"), t && (t.innerHTML = _n + "<span>Add rest</span>");
    const n = o("addVideoBtn");
    n && (n.innerHTML = _n + "<span>Add video</span>");
  }
  function Zn() {
    const e = o("useGlobalTiming").checked, t = o("addMovementDuration"), n = o("addMovementUnit");
    t.disabled = e, n.disabled = e, t.parentElement.style.opacity = e ? ".38" : "1", o("globalTimingValue").textContent = "Use global timing · " + We(b.value);
    const a = o("useGlobalRestTiming").checked, i = o("addRestDuration"), s = o("addRestUnit");
    i.disabled = a, s.disabled = a, i.parentElement.style.opacity = a ? ".38" : "1", o("globalRestTimingValue").textContent = "Use global timing · " + We(M.value);
  }
  let tr = "movement";
  function Zs(e) {
    tr = e;
    const t = o("movementFields"), n = o("restFields");
    t.hidden = e !== "movement", n.hidden = e !== "rest", o("movementCreatorHeading").textContent = "Add movement", o("movementCreator").setAttribute("aria-label", "Create movement"), Zn();
  }
  function Co() {
    ue[ge];
    const e = Ae ? !0 : o("useGlobalTiming").checked, t = e ? Number(b.value) : ka(
      o("addMovementDuration").value,
      o("addMovementUnit").value
    ), n = Ae ? !0 : o("useGlobalRestTiming").checked, a = n ? Number(M.value) : ka(
      o("addRestDuration").value,
      o("addRestUnit").value
    );
    if (tr === "rest") {
      const i = o("addRestTitle").value.trim() || "Rest", s = o("addRestGroup").value.trim() || "Rest";
      Je.push({
        id: "rest-" + Date.now(),
        name: i,
        group: s,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: n,
        duration: Math.max(5, a || Number(M.value))
      }), ye(), o("movementCreator").hidden = !0, o("addRestTitle").value = "Rest", o("addRestGroup").value = "Rest", Te("Rest added"), Ae && (Q("movements"), Me());
    } else {
      const i = o("addMovementInput").value.trim();
      if (!i) return;
      const s = o("addMovementGroup").value.trim() || "Movement";
      Je.push({
        id: "movement-" + Date.now(),
        name: i,
        group: s,
        kind: "work",
        hidden: !1,
        useGlobalTiming: e,
        duration: Math.max(5, t || Number(b.value))
      }), o("addMovementInput").value = "", o("addMovementGroup").value = "", ye(), o("movementCreator").hidden = !0, Te("Movement added"), Ae && (Q("movements"), Me());
    }
    ko();
  }
  let So = null;
  function Te(e, t) {
    const n = o("toast");
    n.innerHTML = "";
    const a = document.createElement("span");
    if (a.textContent = e, n.appendChild(a), t) {
      const i = document.createElement("button");
      i.type = "button", i.className = "toastAction", i.textContent = t.label, i.addEventListener("click", () => {
        t.run(), n.classList.remove("show", "withAction"), clearTimeout(So);
      }), n.appendChild(i);
    }
    n.classList.toggle("withAction", !!t), n.classList.add("show"), clearTimeout(So), So = setTimeout(() => n.classList.remove("show", "withAction"), t ? 5e3 : 2200);
  }
  const Ks = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], Xs = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function nr(e) {
    return Math.max(0, Math.min(5, Math.floor(Number(e) / 100 * 6)));
  }
  function Zt(e, t) {
    return Ks[nr(t)];
  }
  function $s(e) {
    return Xs[nr(e)];
  }
  function Be(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  function It() {
    return { morning: ve().morningTime || "08:00", evening: ve().eveningTime || "19:00" };
  }
  function ln(e) {
    const [t, n] = String(e).split(":").map(Number);
    return (t || 0) * 60 + (n || 0);
  }
  function Js(e) {
    const t = It();
    return e.getHours() * 60 + e.getMinutes() >= ln(t.evening) ? "evening" : "morning";
  }
  function Ra(e, t) {
    return he.checkins.find((n) => n.date === e && n.slot === t);
  }
  function Aa(e) {
    return !!(e && e.mood != null && e.energy != null);
  }
  function Na() {
    const e = /* @__PURE__ */ new Date(), t = Be(e), n = Js(e), a = It(), i = e.getHours() * 60 + e.getMinutes();
    return n === "morning" && i < ln(a.morning) || Aa(Ra(t, n)) ? null : n;
  }
  const Ft = o("checkinModal"), Pt = o("checkinTab"), Qs = o("checkinBadge"), Dt = { mood: { input: o("moodInput"), fill: o("moodFill") }, energy: { input: o("energyLevelInput"), fill: o("energyLevelFill") } };
  function ar(e) {
    const { input: t, fill: n } = Dt[e];
    n.style.width = t.value + "%", t.setAttribute("aria-valuetext", Zt(e, t.value));
  }
  Object.keys(Dt).forEach((e) => Dt[e].input.addEventListener("input", () => ar(e)));
  let bt = null;
  function or() {
    const e = It(), t = /* @__PURE__ */ new Date(), n = t.getHours() * 60 + t.getMinutes();
    return n < ln(e.morning) ? "Next check-in at " + e.morning : n < ln(e.evening) ? "Next check-in at " + e.evening : "Next check-in tomorrow at " + e.morning;
  }
  function el() {
    const e = It(), t = /* @__PURE__ */ new Date(), n = t.getHours() * 60 + t.getMinutes(), a = (i, s) => {
      const [l, c] = i.split(":").map(Number);
      return new Date(t.getFullYear(), t.getMonth(), t.getDate() + (s ? 1 : 0), l, c);
    };
    return n < ln(e.morning) ? { date: a(e.morning), time: e.morning } : n < ln(e.evening) ? { date: a(e.evening), time: e.evening } : { date: a(e.morning, !0), time: e.morning };
  }
  let Mo = null, To = null;
  function ir() {
    if (Na()) {
      Ba(), Kt();
      return;
    }
    const e = el(), t = Math.max(0, Math.round((e.date - Date.now()) / 1e3)), n = Math.floor(t / 3600), a = Math.floor(t % 3600 / 60), i = t % 60;
    o("peekCountdown").textContent = n + ":" + String(a).padStart(2, "0") + ":" + String(i).padStart(2, "0"), o("peekAt").textContent = "Available at " + e.time;
  }
  function tl() {
    ir(), Pt.classList.add("peek"), clearInterval(To), To = setInterval(ir, 1e3), clearTimeout(Mo), Mo = setTimeout(Ba, 6e3);
  }
  function Ba() {
    Pt.classList.remove("peek"), clearInterval(To), clearTimeout(Mo);
  }
  function rr() {
    const e = Na();
    if (!e) {
      Pt.classList.contains("peek") ? Ba() : tl();
      return;
    }
    bt = { date: Be(/* @__PURE__ */ new Date()), slot: e };
    const n = Ra(bt.date, e), a = he.checkins.find((i) => Aa(i));
    Object.keys(Dt).forEach((i) => {
      Dt[i].input.value = (n == null ? void 0 : n[i]) ?? (a == null ? void 0 : a[i]) ?? 50, ar(i);
    }), o("checkinTitle").textContent = e === "morning" ? "Morning check-in" : "Evening check-in", Ft.classList.add("open"), Ft.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => Dt.mood.input.focus());
  }
  function Kn() {
    Ft.classList.remove("open"), Ft.setAttribute("aria-hidden", "true"), bt && (Xn = bt.date + "-" + bt.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", Xn);
    } catch {
    }
    bt = null, Kt();
  }
  function nl() {
    if (!bt) return;
    if (Aa(Ra(bt.date, bt.slot))) {
      Kn();
      return;
    }
    const { date: e, slot: t } = bt;
    let n = Ra(e, t);
    n || (n = { date: e, slot: t }, he.checkins.unshift(n), he.checkins = he.checkins.slice(0, 2e3)), n.mood = Number(Dt.mood.input.value), n.energy = Number(Dt.energy.input.value), n.scale = 100, n.at = (/* @__PURE__ */ new Date()).toISOString(), ft(), d.fire("checkin", { slot: t, mood: n.mood, energy: n.energy, mood_label: Zt("mood", n.mood), energy_label: Zt("energy", n.energy) }), Te((t === "morning" ? "Morning" : "Evening") + " check-in saved"), Kn(), Ia(), $n(), tn(), At();
  }
  let Xn = "";
  try {
    Xn = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function Kt() {
    const e = Na();
    Qs.hidden = !e, Pt.hidden = !e, e || Ba(), Pt.classList.toggle("due", !!e), Pt.setAttribute("aria-label", e ? (e === "morning" ? "Morning" : "Evening") + " check-in is due" : or()), Pt.title = e ? "Check in now" : or();
  }
  function Lo() {
    Kt();
    const e = Na();
    !e || Ft.classList.contains("open") || ve().checkinAutoOpen !== !1 && (o("app").classList.contains("house") || !pe.home.classList.contains("active") || je.classList.contains("open") || Xn !== Be(/* @__PURE__ */ new Date()) + "-" + e && rr());
  }
  Pt.addEventListener("click", rr), o("checkinLater").addEventListener("click", Kn), o("checkinSave").addEventListener("click", nl), Ft.addEventListener("click", (e) => {
    e.target === Ft && Kn();
  }), Ft.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), Kn());
  }), setInterval(Lo, 3e4);
  function Ia() {
    const e = Be(/* @__PURE__ */ new Date()), t = (n) => he.checkins.find((a) => a.date === e && a[n] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([n, a]) => {
      const i = t(n);
      o(a).textContent = i ? Zt(n, i[n]) : "—";
    });
  }
  function $n() {
    const e = o("feelCard");
    if (!e) return;
    const t = /* @__PURE__ */ new Date(), n = new Date(t.getFullYear(), t.getMonth(), t.getDate() - (t.getDay() + 6) % 7), a = [...Array(7)].map((k, u) => {
      const p = new Date(n.getFullYear(), n.getMonth(), n.getDate() + u), R = Be(p), U = he.checkins.filter((L) => L.date === R), A = (L) => {
        const E = U.map((oe) => oe[L]).filter((oe) => oe != null);
        return E.length ? E.reduce((oe, le) => oe + le, 0) / E.length : null;
      };
      return { d: p, key: R, mood: A("mood"), energy: A("energy"), count: U.filter(Aa).length, future: p > t && R !== Be(t) };
    }), i = (k) => {
      const u = a.map((p) => p[k]).filter((p) => p != null);
      return u.length ? u.reduce((p, R) => p + R, 0) / u.length : null;
    }, s = i("mood"), l = i("energy"), c = (k, u) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + k + "</span><span>" + (u == null ? "—" : J(Zt("", u))) + '</span></div><div class="feelTrack"><span style="width:' + (u == null ? 0 : Math.max(4, u)) + "%;background:" + (u == null ? "transparent" : $s(u)) + '"></span></div></div>', g = a.filter((k) => k.mood != null && k.energy != null).sort((k, u) => u.mood + u.energy - (k.mood + k.energy))[0];
    e.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (s == null ? "No check-ins yet" : J(Zt("", (s + l) / 2))) + '</div><div class="weekCopy">' + (s == null ? "Your first check-in will appear here." : "on average this week" + (g ? " · best day " + J(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(g.d)) : "")) + '</div></div></div><div class="feelDays">' + a.map(
      (k) => '<div class="weekChip feelDay' + (k.future ? " future" : "") + (k.key === Be(t) ? " today" : "") + '"><div class="weekChipTop"><strong>' + J(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(k.d)) + "</strong>" + (k.count >= 2 ? '<span class="weekTick">' + Gn("check") + "</span>" : '<span class="feelDots">' + "●".repeat(k.count) + "</span>") + "</div>" + c("Mood", k.mood) + c("Energy", k.energy) + "</div>"
    ).join("") + "</div>";
  }
  const Fa = o("upcomingCountSetting");
  Fa.addEventListener("change", () => {
    sn = Fa.value === "all" ? "all" : Number(Fa.value), wr();
  });
  const Jn = o("tempoRevealBtn"), Eo = o("tempoExperiment"), wt = o("tempoQuad"), dn = o("tempoDot"), al = o("tempoEstimate"), ol = o("tempoReadout");
  let cn = { x: 0.5, y: 0.5 }, Qn = !1, Pa = { total: 20, work: 45, rest: 15 };
  function Ro(e, t, n, a) {
    const i = Math.max(t, Math.min(n, e));
    return Math.round((i - t) / a) * a + t;
  }
  function il(e, t) {
    const n = (e - 0.5) * 2, a = (t - 0.5) * 2, i = Ro(
      Pa.total + n * 5 + a * 8,
      Number(x.min),
      Number(x.max),
      Number(x.step)
    ), s = Ro(
      Pa.work + n * 10 + a * 8,
      Number(b.min),
      Number(b.max),
      Number(b.step)
    ), l = Ro(
      Pa.rest + n * 6 + a * 6,
      Number(M.min),
      Number(M.max),
      Number(M.step)
    );
    return x.value = i, b.value = s, M.value = l, V.textContent = s + " sec", z.textContent = l + " sec", ya(), { total: i, work: s, rest: l };
  }
  function Ao(e, t) {
    const n = e < 0.34 ? "Low" : e > 0.66 ? "Hard" : "Medium", a = t < 0.34 ? "Fast" : t > 0.66 ? "Slow" : "Balanced", i = il(e, t);
    ol.textContent = n + " + " + a, al.textContent = i.total + " min", wt.setAttribute("aria-valuetext", n + " and " + a + ", estimated " + i.total + " minutes");
  }
  function No(e) {
    const t = wt.getBoundingClientRect(), n = Math.max(0, Math.min(1, (e.clientX - t.left) / t.width)), a = Math.max(0, Math.min(1, (e.clientY - t.top) / t.height));
    cn = { x: n, y: a }, dn.style.left = n * 100 + "%", dn.style.top = a * 100 + "%", Ao(n, a);
  }
  Jn.addEventListener("click", () => {
    const e = Eo.hidden;
    Eo.hidden = !e, Jn.setAttribute("aria-expanded", e ? "true" : "false"), Jn.textContent = e ? "Now close this" : "Don’t try this!", e && (Pa = {
      total: Number(x.value),
      work: Number(b.value),
      rest: Number(M.value)
    }, cn = { x: 0.5, y: 0.5 }, dn.style.left = "50%", dn.style.top = "50%", Ao(cn.x, cn.y));
  }), r.querySelectorAll("[data-feedback-rating]").forEach((e) => e.addEventListener("click", () => {
    Number(e.dataset.feedbackRating), r.querySelectorAll("[data-feedback-rating]").forEach((t) => t.classList.toggle("selected", t === e));
  }));
  const Da = o("testingFeedbackForm"), sr = o("testingFeedbackThanks"), rl = o("testingFeedbackAgain");
  Da.addEventListener("submit", (e) => {
    e.preventDefault(), Da.hidden = !0, sr.hidden = !1, Te("Feedback captured for prototype");
  }), rl.addEventListener("click", (e) => {
    e.preventDefault(), Da.reset(), r.querySelectorAll("[data-feedback-rating]").forEach((t) => t.classList.remove("selected")), sr.hidden = !0, Da.hidden = !1;
  }), wt.addEventListener("pointerdown", (e) => {
    var t;
    Qn = !0, No(e);
    try {
      (t = wt.setPointerCapture) == null || t.call(wt, e.pointerId);
    } catch {
    }
  }), wt.addEventListener("pointermove", (e) => {
    Qn && No(e);
  }), wt.addEventListener("pointerup", (e) => {
    Qn && (Qn = !1, No(e), ye());
  }), wt.addEventListener("pointercancel", () => Qn = !1), wt.addEventListener("keydown", (e) => {
    let { x: t, y: n } = cn, a = !0;
    e.key === "ArrowLeft" ? t -= 0.05 : e.key === "ArrowRight" ? t += 0.05 : e.key === "ArrowUp" ? n -= 0.05 : e.key === "ArrowDown" ? n += 0.05 : a = !1, a && (e.preventDefault(), t = Math.max(0, Math.min(1, t)), n = Math.max(0, Math.min(1, n)), cn = { x: t, y: n }, dn.style.left = t * 100 + "%", dn.style.top = n * 100 + "%", Ao(t, n), ye());
  });
  const je = o("workoutModal");
  let ea = null;
  function pn(e) {
    return e.map((t) => ({ ...t }));
  }
  function sl() {
    const e = ue[ge];
    return {
      key: ge,
      profile: e ? JSON.parse(JSON.stringify(e)) : null,
      warmup: pn(dt),
      strength: pn(Je),
      cooldown: pn(ct),
      total: Number(x.value),
      work: Number(b.value),
      rest: Number(M.value),
      rounds: Number(we.value) || 1
    };
  }
  function lr(e = !1) {
    Ae = !!e, Qe = null, pt = null, et(), Qi(), ea = sl(), o("moveEditorTitle").textContent = Ae ? "Create new move" : "Edit move", o("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", o("moveEditorSubtitle").hidden = !Ae, o("warmupRow").hidden = Ae, o("deleteMoveOpen").hidden = Ae;
    const t = o("createMoveOptions");
    t.hidden = !Ae;
    {
      const n = ue[ge];
      o("includeWarmupPreset").checked = !!(n != null && n.includeWarmup), o("includeCooldownPreset").checked = !!(n != null && n.includeCooldown);
    }
    if (dr(), Ae) {
      o("useGlobalTiming").checked = !0, o("useGlobalRestTiming").checked = !0;
      const n = ue[ge];
      uo((n == null ? void 0 : n.preset) || "movement", !1);
    }
    o("movementCreator").hidden = !0, Zs("movement"), ko(), Zn(), Eo.hidden = !0, Jn.setAttribute("aria-expanded", "false"), Jn.textContent = "Don’t try this!", je.classList.toggle("createMode", Ae), je.querySelector(".modal").classList.toggle("createMode", Ae), je.classList.add("open"), je.setAttribute("aria-hidden", "false"), Ut(), Ae && qe();
  }
  function ll() {
    const e = ue[ge];
    return e != null && e.customSequence ? !!e.includeWarmup : !(e != null && e.warmupOff);
  }
  function dr() {
    const e = ll(), t = o("warmupSwitch");
    t.classList.toggle("on", e), t.setAttribute("aria-checked", String(e));
  }
  o("warmupSwitch").addEventListener("click", () => {
    const e = ue[ge];
    e && (e.customSequence ? (o("includeWarmupPreset").checked = !e.includeWarmup, mo()) : (e.warmupOff = !e.warmupOff, ye()), dr());
  });
  function Ha() {
    et(), Qi(), er(), pt = null, Qe = null, je.classList.contains("createMode") && T(), je.classList.remove("createMode"), je.querySelector(".modal").classList.remove("createMode"), je.classList.remove("open"), je.setAttribute("aria-hidden", "true");
  }
  function cr() {
    if (!ea) return;
    const e = ea;
    e.profile && (ue[e.key] = JSON.parse(JSON.stringify(e.profile))), ge = e.key, dt = pn(e.warmup), Je = pn(e.strength), ct = pn(e.cooldown), x.value = e.total, b.value = e.work, M.value = e.rest, we.value = e.rounds || 1;
    const t = ue[ge];
    if (t) {
      r.querySelectorAll(".workoutPanel[data-workout]").forEach((a) => a.classList.toggle("active", a.dataset.workout === ge));
      const n = r.querySelector(".workoutPanel.active");
      if (n) {
        const a = n.querySelector(".workoutName");
        a && (a.textContent = t.name);
        const i = n.querySelector(".panelCollapsedText");
        i && (i.textContent = t.name);
        const s = n.querySelector(".sourceTag");
        s && (s.textContent = t.source);
      }
      w.value = t.name;
    }
    ye();
  }
  o("cancelWorkoutEdit").addEventListener("click", () => {
    if (Ae) {
      const e = ge;
      delete ue[e], Ae = !1, jt = null, xt(he.order.find((t) => ue[t]) || Object.keys(ue)[0]);
    } else
      cr();
    Ha();
  }), o("saveWorkoutEdit").addEventListener("click", () => {
    et(), Ne && Ea();
    const e = ue[ge], t = w.value.trim() || "New move";
    if (e && (e.name = t), Sa(), Qe = null, ye(), Ae && e)
      co(ge, e), r.querySelectorAll(".workoutPanel[data-workout]").forEach((n) => n.classList.toggle("active", n.dataset.workout === ge)), Ae = !1, jt = null, he.order.includes(ge) || he.order.push(ge), Te("Move created");
    else {
      const n = r.querySelector(".workoutPanel.active");
      if (n) {
        const a = n.querySelector(".workoutName");
        a && (a.textContent = t);
        const i = n.querySelector(".panelCollapsedText");
        i && (i.textContent = t);
      }
      Te("Move saved");
    }
    ea = null, Ha(), ft();
  }), je.addEventListener("click", (e) => {
    if (e.target === je) {
      if (Ae) {
        const t = ge;
        delete ue[t], Ae = !1, jt = null, xt(he.order.find((n) => ue[n]) || Object.keys(ue)[0]);
      } else
        cr();
      Ha();
    }
  }), xo(o("addMovementBtn"), "movement"), xo(o("addRestBtn"), "rest"), xo(o("addVideoBtn"), "video"), o("closeMovementCreator").addEventListener("click", () => {
    o("movementCreator").hidden = !0;
  }), o("useGlobalTiming").addEventListener("change", Zn), o("useGlobalRestTiming").addEventListener("change", Zn), r.querySelectorAll(".createPresetBtn").forEach((e) => e.addEventListener("click", () => {
    uo(e.dataset.movePreset, !0), ye();
  })), o("includeWarmupPreset").addEventListener("change", mo), o("includeCooldownPreset").addEventListener("change", mo), o("includeWarmupPreset").addEventListener("change", Me), o("includeCooldownPreset").addEventListener("change", Me), w.addEventListener("input", Me), w.addEventListener("input", wo), o("confirmAddMovement").addEventListener("click", Co), o("confirmAddRest").addEventListener("click", Co), o("addMovementInput").addEventListener("keydown", (e) => {
    e.key === "Enter" && Co();
  });
  const ta = o("countdown"), Bo = o("countNum"), Mt = o("countdownPixelCanvas");
  let na = null, Io = "appear";
  class dl {
    constructor(t, n, a, i, s, l, c) {
      this.width = t.width, this.height = t.height, this.ctx = n, this.x = a, this.y = i, this.color = s, this.speed = (Math.random() * 0.8 + 0.1) * l, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = c, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
    }
    draw() {
      const t = this.maxSizeInteger * 0.5 - this.size * 0.5;
      this.ctx.fillStyle = this.color, this.ctx.fillRect(this.x + t, this.y + t, this.size, this.size);
    }
    appear() {
      if (this.isIdle = !1, this.counter <= this.delay) {
        this.counter += this.counterStep;
        return;
      }
      this.size >= this.maxSize && (this.isShimmer = !0), this.isShimmer ? this.shimmer() : this.size += this.sizeStep, this.draw();
    }
    disappear() {
      if (this.isShimmer = !1, this.counter = 0, this.size <= 0) {
        this.isIdle = !0;
        return;
      } else this.size -= 0.1;
      this.draw();
    }
    shimmer() {
      this.size >= this.maxSize ? this.isReverse = !0 : this.size <= this.minSize && (this.isReverse = !1), this.size += this.isReverse ? -this.speed : this.speed;
    }
  }
  let Fo = [], pr = 1, ur = 1;
  function Xt() {
    const e = parseFloat(getComputedStyle(o("app")).zoom);
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  function cl() {
    var k;
    if (!Mt) return;
    const e = Xt(), t = Math.max(1, window.innerWidth / e), n = Math.max(1, window.innerHeight / e);
    pr = t, ur = n;
    const a = Math.min(window.devicePixelRatio || 1, 2);
    Mt.width = Math.floor(t * a), Mt.height = Math.floor(n * a), Mt.style.width = t + "px", Mt.style.height = n + "px";
    const i = Mt.getContext("2d");
    i.setTransform(a, 0, 0, a, 0, 0);
    const s = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], l = 12, c = (k = window.matchMedia) == null ? void 0 : k.call(window, "(prefers-reduced-motion: reduce)").matches, g = c ? 0 : 0.055;
    Fo = [];
    for (let u = 0; u < t; u += l)
      for (let p = 0; p < n; p += l) {
        const R = u - t / 2, U = p - n / 2, A = Math.sqrt(R * R + U * U), L = c ? 0 : Math.random() * 75 + A * 0.05, E = new dl({ width: t, height: n }, i, u, p, s[Math.floor(Math.random() * s.length)], g, L);
        E.maxSizeInteger = 4, E.maxSize = Math.random() * 3.2 + 0.8, E.sizeStep = 0.35 + Math.random() * 0.45, Fo.push(E);
      }
  }
  function mr(e) {
    cancelAnimationFrame(na), Io = e;
    const t = Mt == null ? void 0 : Mt.getContext("2d");
    if (!t) return;
    function n() {
      t.clearRect(0, 0, pr, ur);
      let a = !0;
      Fo.forEach((i) => {
        i[Io](), i.isIdle || (a = !1);
      }), Io === "disappear" && a || (na = requestAnimationFrame(n));
    }
    na = requestAnimationFrame(n);
  }
  function Va() {
    cancelAnimationFrame(na), cl(), mr("appear"), setTimeout(() => mr("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    ta.classList.contains("active") && Va();
  });
  const aa = o("pixelTrailCanvas"), un = aa.getContext("2d");
  let Tt = !0, mn = 0.7, gn = 600, oa = [], hn = null, Ht = { x: 0, y: 0, ready: !1 };
  function gr() {
    const e = y.getBoundingClientRect(), t = Xt(), n = Math.min(window.devicePixelRatio || 1, 2), a = Math.max(1, e.width / t), i = Math.max(1, e.height / t);
    aa.width = Math.max(1, Math.floor(a * n)), aa.height = Math.max(1, Math.floor(i * n)), aa.style.width = a + "px", aa.style.height = i + "px", un.setTransform(n, 0, 0, n, 0, 0);
  }
  function pl(e, t) {
    if (!Tt) return;
    const n = performance.now();
    Ht.ready || (Ht = { x: e, y: t, ready: !0 });
    const a = 7;
    for (let i = 1; i <= a; i++) {
      const s = i / a;
      oa.push({
        x: Ht.x + (e - Ht.x) * s,
        y: Ht.y + (t - Ht.y) * s,
        born: n - (a - i) * 10
      });
    }
    Ht = { x: e, y: t, ready: !0 };
  }
  function za(e) {
    if (hn = null, !S) return;
    if (!pe.workout.classList.contains("active")) {
      hn = requestAnimationFrame(za);
      return;
    }
    const t = y.getBoundingClientRect(), n = Xt();
    un.clearRect(0, 0, t.width / n, t.height / n), Tt && (oa = oa.filter((i) => e - i.born < gn), un.fillStyle = o("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", oa.forEach((i) => {
      const s = (e - i.born) / gn, l = (1 - s) * mn, c = Math.round(i.x / 14) * 14, g = Math.round(i.y / 14) * 14;
      un.globalAlpha = Math.max(0, l);
      const k = 2 + 5 * (1 - s) * mn;
      un.fillRect(c - k / 2, g - k / 2, k, k);
    }), un.globalAlpha = 1), hn = requestAnimationFrame(za);
  }
  y.addEventListener("pointermove", (e) => {
    const t = y.getBoundingClientRect(), n = Xt();
    pl((e.clientX - t.left) / n, (e.clientY - t.top) / n);
  }), y.addEventListener("pointerleave", () => Ht.ready = !1), new ResizeObserver(gr).observe(y), gr(), hn = requestAnimationFrame(za);
  const Vt = o("movementRippleCanvas"), vn = Vt.getContext("2d");
  let $t = !0, fn = null, ul = performance.now();
  function hr() {
    const e = Vt.parentElement.getBoundingClientRect(), t = Xt(), n = Math.max(1, e.width / t), a = Math.max(1, e.height / t), i = Math.min(window.devicePixelRatio || 1, 2);
    Vt.width = Math.max(1, Math.floor(n * i)), Vt.height = Math.max(1, Math.floor(a * i)), Vt.style.width = n + "px", Vt.style.height = a + "px", vn.setTransform(i, 0, 0, i, 0, 0);
  }
  function vr() {
    var e;
    return Ge || ((e = Z[se]) == null ? void 0 : e.kind) === "rest";
  }
  function ml() {
    const e = Z[se];
    return vr() ? 2200 : e ? e.kind === "warmup" || e.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function Oa(e) {
    if (fn = null, !S) return;
    if (!pe.workout.classList.contains("active")) {
      fn = requestAnimationFrame(Oa);
      return;
    }
    const t = Vt.parentElement.getBoundingClientRect(), n = Xt(), a = Math.max(1, t.width / n), i = Math.max(1, t.height / n);
    if (vn.clearRect(0, 0, a, i), $t) {
      const s = ml(), l = (e - ul) % s / s, c = 15, g = Math.max(8, Math.round(c * i / Math.max(1, a))), k = a / (c + 1), u = i / (g + 1), p = a * 0.5, R = i * 0.52, U = Math.hypot(p, R), L = o("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let E = 1; E <= g; E++)
        for (let oe = 1; oe <= c; oe++) {
          const le = oe * k, O = E * u, de = Math.hypot(le - p, O - R) / U, G = vr(), W = G ? Math.exp(-Math.pow((de - (l * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, X = Math.exp(-Math.pow((de - l * 1.25) * 7, 2)), Fe = G ? W : X, _e = G ? 0.5 + 0.5 * Math.sin(l * Math.PI * 2 - de * 3) ** 2 : 0.35 + 0.65 * Math.sin(l * Math.PI * 2 - de * 5) ** 2, Se = G ? 1.4 + Fe * 4.2 * _e : 1.2 + Fe * 5 * _e;
          vn.beginPath(), vn.arc(le, O, Se, 0, Math.PI * 2), vn.fillStyle = `rgba(${L},${G ? 0.08 + Fe * 0.48 : 0.05 + Fe * 0.55})`, vn.fill();
        }
    }
    fn = requestAnimationFrame(Oa);
  }
  new ResizeObserver(hr).observe(Vt.parentElement), hr(), fn = requestAnimationFrame(Oa);
  const ia = o("exerciseTitle"), Lt = o("exerciseMeta"), Po = o("stepLabel"), Do = o("digits"), fr = o("fill"), xn = o("progress"), Ho = o("pause"), gl = o("nextName"), hl = o("nextMeta"), vl = o("nextIcon"), qa = o("skipNextSession");
  let ot = null;
  function it(e) {
    for (let t = Math.max(0, e); t < Z.length; t++)
      if (!Z[t].sessionHidden) return t;
    return -1;
  }
  function fl() {
    const e = Z[se];
    if (!e) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (Ge) {
      const a = it(se + 1), i = a >= 0 ? Z[a] : null;
      return i ? { name: i.name, meta: zo(i), icon: Vo(i) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (e.rest > 0) return { name: "Rest", meta: e.rest + " sec · " + (e.roundBreakAfter ? "round " + (e.round + 1) + " next" : "recovery"), icon: "pause" };
    const t = it(se + 1), n = t >= 0 ? Z[t] : null;
    return n ? { name: n.name, meta: zo(n), icon: Vo(n) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function xl() {
    if (!Z[se]) return Z.length;
    const t = it(se + 1);
    return t < 0 ? Z.length : t + 1;
  }
  function Vo(e) {
    return e.kind === "video" ? "play" : "clock";
  }
  function zo(e) {
    return e.kind === "video" ? "YouTube · " + On(e.duration) : e.group + " · " + e.duration + " sec";
  }
  function _a() {
    return Z.length && Z[Z.length - 1].round || 1;
  }
  function xr(e) {
    const t = Z[e];
    if (!t) return "";
    const n = _a();
    if (n <= 1) return "Step " + (e + 1) + " of " + Z.length;
    if (t.roundBreak) return "Round " + t.round + " of " + n + " · Rest";
    const a = Z.filter((i) => i.round === t.round && !i.roundBreak).length;
    return "Round " + t.round + " of " + n + " · Step " + (t.roundIndex + 1) + " of " + a;
  }
  function br() {
    return xn.querySelector('[data-step="' + se + '"]');
  }
  function bl() {
    Z[se] && Number(xn.dataset.round) !== (Z[se].round || 1) && Go(), [...xn.children].forEach((e) => {
      const t = Number(e.dataset.step);
      e.classList.toggle("done", t < se), e.classList.toggle("active", t === se), e.classList.toggle("rewindable", t <= se), e.disabled = t > se, t === se && e.style.setProperty("--segment-progress", "0%");
    }), Z[se] && (Po.textContent = xr(se), en());
  }
  function wl(e) {
    const t = Z.indexOf(e);
    t < 0 || t <= se || (e.sessionHidden = !e.sessionHidden, Jt(), Te((e.sessionHidden ? "Hidden " : "Included ") + e.name + " for this session"));
  }
  function wr() {
    const e = o("upcomingList");
    if (!e) return;
    e.innerHTML = "";
    const t = xl(), n = Z.slice(t);
    (sn === "all" ? n : n.slice(0, Math.max(1, Number(sn) || 1))).forEach((i) => {
      const s = document.createElement("section");
      s.className = "upcomingCard" + (i.sessionHidden ? " sessionHidden" : "") + (Ko(i) ? " noMeta" : ""), s.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + Gn(Vo(i)) + '</div><div><div class="upcomingName">' + J(i.name) + '</div><div class="upcomingMeta">' + J(zo(i)) + (_a() > 1 ? " · round " + i.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (i.sessionHidden ? "Include this session" : "Skip this session") + "</button>", s.querySelector(".skipSessionBtn").addEventListener("click", () => wl(i)), e.appendChild(s);
    });
  }
  function Jt() {
    var t;
    const e = fl();
    gl.textContent = e.name, hl.textContent = e.meta, vl.innerHTML = Gn(e.icon);
    {
      const n = Ge ? Z[it(se + 1)] : ((t = Z[se]) == null ? void 0 : t.rest) > 0 ? { kind: "rest" } : Z[it(se + 1)];
      r.querySelector(".nextCard").classList.toggle("noMeta", !!(n && Ko(n)));
    }
    if (ot = null, Ge) {
      const n = it(se + 1);
      n >= 0 && (ot = Z[n]);
    } else {
      const n = Z[se];
      if (n && n.rest > 0)
        ot = null;
      else {
        const a = it(se + 1);
        a >= 0 && (ot = Z[a]);
      }
    }
    qa && (qa.hidden = !ot, qa.textContent = ot != null && ot.sessionHidden ? "Include this session" : "Skip this session"), wr();
  }
  qa.addEventListener("click", () => {
    ot && (ot.sessionHidden = !ot.sessionHidden, Te((ot.sessionHidden ? "Hidden " : "Included ") + ot.name + " for this session"), Jt());
  });
  let yt = null, Oo = null;
  function ra(e, t = {}) {
    const n = ue[ge];
    d.fire(e, { move: (n == null ? void 0 : n.name) || "", move_id: ge, ...t });
  }
  function yl() {
    const e = ue[ge];
    yt = { key: ge, name: (e == null ? void 0 : e.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(Oo), Oo = setInterval(() => {
      yt && !ht && yt.active++;
    }, 1e3), ra("started", { steps: Z.length });
  }
  function yr(e) {
    if (clearInterval(Oo), !yt) return;
    const t = yt;
    yt = null, ra(e ? "completed" : "ended", { seconds: t.active }), !(t.active < 30) && (he.history.unshift({ id: "h-" + t.startedAt, move_id: t.key, name: t.name, start: new Date(t.startedAt).toISOString(), seconds: t.active, completed: e }), he.history = he.history.slice(0, 1e3), ft(), tn(), At());
  }
  let ut = null, sa = null, qo = !1;
  function bn() {
    return ve().sounds !== !1;
  }
  function kr() {
    if (bn())
      try {
        navigator.audioSession && (navigator.audioSession.type = "playback"), ut = ut || new (window.AudioContext || window.webkitAudioContext)(), ut.state === "suspended" && ut.resume();
      } catch {
        ut = null;
      }
  }
  function Qt(e, t, n, { to: a = e, vol: i = 0.25, type: s = "sine" } = {}) {
    const l = ut.currentTime + t, c = ut.createOscillator(), g = ut.createGain();
    c.type = s, c.frequency.setValueAtTime(e, l), a !== e && c.frequency.exponentialRampToValueAtTime(a, l + n), g.gain.setValueAtTime(1e-4, l), g.gain.exponentialRampToValueAtTime(i, l + 0.01), g.gain.exponentialRampToValueAtTime(1e-4, l + n), c.connect(g).connect(ut.destination), c.start(l), c.stop(l + n + 0.02);
  }
  const kl = {
    tick: () => Qt(880, 0, 0.07, { vol: 0.18 }),
    move: () => {
      Qt(660, 0, 0.12, { type: "triangle", vol: 0.3 }), Qt(990, 0.13, 0.16, { type: "triangle", vol: 0.3 });
    },
    rest: () => Qt(660, 0, 0.4, { to: 440, vol: 0.22 }),
    done: () => {
      Qt(523, 0, 0.16, { type: "triangle" }), Qt(659, 0.16, 0.16, { type: "triangle" }), Qt(784, 0.32, 0.4, { type: "triangle" });
    }
  };
  function Et(e) {
    if (!(!bn() || !ut))
      try {
        ut.state === "suspended" && ut.resume(), kl[e]();
      } catch {
      }
  }
  function Ga() {
    ze >= 1 && ze <= 3 && ze !== sa && (sa = ze, Et("tick"));
  }
  function Cl() {
    kr(), m("workout"), Sl();
    const e = it(0);
    e >= 0 && Z[e].kind === "video" && Lr(Z[e]);
  }
  function _o() {
    ja(), yr(!1), clearInterval(Pe), clearInterval(ba), Ge = !1, Rt(!1), o("app").classList.remove("resting"), ta.classList.remove("active"), m("home");
  }
  function Sl() {
    ta.classList.add("active");
    let e = 5;
    Bo.textContent = e, Et("tick"), requestAnimationFrame(Va), clearInterval(ba), ba = setInterval(() => {
      e--, e > 0 ? (Bo.textContent = e, Et("tick"), Va()) : (clearInterval(ba), Bo.textContent = "GO", Et("move"), qo = !0, Va(), setTimeout(() => {
        ta.classList.remove("active"), cancelAnimationFrame(na), Tl();
      }, 650));
    }, 1e3);
  }
  function Go() {
    var t;
    xn.innerHTML = "";
    const e = ((t = Z[Math.max(0, se)] || Z[0]) == null ? void 0 : t.round) || 1;
    xn.dataset.round = e, Z.forEach((n, a) => {
      if ((n.round || 1) !== e) return;
      const i = document.createElement("button");
      i.dataset.step = a, i.type = "button", i.className = "progressSegment", i.setAttribute("aria-label", "Go to " + n.name), i.addEventListener("click", () => {
        a <= se && Ml(a);
      }), xn.appendChild(i);
    });
  }
  function Rt(e) {
    e = !!e;
    const t = ht !== e;
    if (ht = e, Ho.textContent = e ? "Resume" : "Pause", o("app").classList.toggle("paused", e), Ye && Ce)
      try {
        e ? Ce.pauseVideo() : Ce.playVideo();
      } catch {
      }
    t && yt && ra(e ? "paused" : "resumed");
  }
  function Ml(e) {
    e < 0 || e >= Z.length || e > se || (clearInterval(Pe), Ge = !1, o("app").classList.remove("resting"), se = e, Rt(!1), Mn(), Pe = setInterval(zt, 1e3));
  }
  function Tl() {
    if (se = it(0), Rt(!1), Go(), se < 0) {
      ia.textContent = "No activities", Lt.textContent = "Open Edit and enable or add a movement", Lt.hidden = !1;
      return;
    }
    yl(), Mn(), clearInterval(Pe), Pe = setInterval(zt, 1e3);
  }
  const Cr = o("videoStage"), wn = o("videoSound"), Ll = 0, yn = 1, El = 2;
  let Sr = 0, kn = null, Cn = null, Ce = null, Sn = null, Wa = 0, Wo = !1, Ye = null, jo = null;
  function Mr() {
    var e;
    return (e = window.YT) != null && e.Player ? Promise.resolve(window.YT) : kn || (kn = new Promise((t, n) => {
      const a = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          a == null || a();
        } catch {
        }
      };
      const i = setInterval(() => {
        var l;
        (l = window.YT) != null && l.Player && (clearInterval(i), clearTimeout(s), t(window.YT));
      }, 100), s = setTimeout(() => {
        clearInterval(i), kn = null, n(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const l = document.createElement("script");
        l.src = "https://www.youtube.com/iframe_api", l.async = !0, l.onerror = () => {
          clearInterval(i), clearTimeout(s), kn = null, n(new Error("YouTube did not load"));
        }, document.head.appendChild(l);
      }
    }), kn);
  }
  function Tr() {
    return Cn || (Cn = Mr().then((e) => new Promise((t) => {
      const n = document.createElement("div");
      o("videoFrame").appendChild(n), Ce = new e.Player(n, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => t(Ce), onStateChange: (a) => Al(a.data), onError: (a) => Nl(a.data) }
      });
    })), Cn.catch(() => {
      Cn = null;
    }), Cn);
  }
  function Lr(e) {
    !(e != null && e.videoId) || e.videoError || Tr().then((t) => {
      Ye || Sn === e.videoId || (Sn = e.videoId, Wa = Number(e.start) || 0, Wo = !1, t.mute(), t.loadVideoById({ videoId: e.videoId, startSeconds: Wa }));
    }).catch(() => {
    });
  }
  function Rl() {
    const e = it(se + 1);
    e >= 0 && Z[e].kind === "video" && Lr(Z[e]);
  }
  function Al(e) {
    if (!Ye) {
      e === yn && !Wo && (Wo = !0, Ce.pauseVideo(), Ce.seekTo(Wa, !0));
      return;
    }
    Cr.classList.toggle("playing", e === yn), Z[se] === Ye && performance.now() > Sr && (e === yn && ht ? Rt(!1) : e === El && !ht && Rt(!0)), e === yn && Ar(Ye.videoId, Ce.getDuration()) && ft(), e === Ll && la();
  }
  function Nl(e) {
    const t = Ye;
    if (!t) {
      Sn = null;
      return;
    }
    e === 101 || e === 150 ? (Fl(t.videoId), Te("That video can’t play outside YouTube, so it was skipped")) : Te("The video couldn’t play, so it was skipped"), la();
  }
  function Bl(e) {
    if (o("app").classList.add("videoStep"), wn.hidden = !0, Ye = e, clearTimeout(jo), !e.videoId) {
      Te("This video step has no link yet, so it was skipped"), setTimeout(() => la(), 0);
      return;
    }
    Tr().then((t) => {
      if (Ye !== e) return;
      Sr = performance.now() + 1500;
      const n = Number(e.start) || 0;
      Sn !== e.videoId ? (Sn = e.videoId, Wa = n, t.loadVideoById({ videoId: e.videoId, startSeconds: n })) : (t.seekTo(n, !0), t.playVideo()), t.unMute(), ht && t.pauseVideo(), jo = setTimeout(() => {
        Ye !== e || ht || (t.getPlayerState() !== yn ? (t.mute(), t.playVideo(), wn.hidden = !1) : t.isMuted() && (wn.hidden = !1));
      }, 1600);
    }).catch(() => {
      Ye === e && (Te("YouTube didn’t load, so the video was skipped"), la());
    });
  }
  function Er() {
    if (!o("app").classList.contains("videoStep")) return;
    const e = r.querySelector(".workGrid"), t = r.querySelector(".sessionControlRow"), n = e.getBoundingClientRect().top, a = (t == null ? void 0 : t.offsetHeight) || 42, i = window.innerHeight - n - 16 - a - 84;
    e.style.setProperty("--theater-h", Math.max(240, Math.round(i)) + "px");
  }
  window.addEventListener("resize", Er);
  function ja() {
    clearTimeout(jo);
    const e = Ye;
    if (Ye = null, o("app").classList.remove("videoStep"), Cr.classList.remove("playing"), wn.hidden = !0, e && Ce) {
      try {
        Ce.pauseVideo();
      } catch {
      }
      Sn = null;
    }
  }
  function la() {
    const e = Ye;
    !e || Z[se] !== e || (ja(), clearInterval(Pe), Tn(), Pe = setInterval(zt, 1e3));
  }
  wn.addEventListener("click", () => {
    Ce && (Ce.unMute(), Ce.playVideo()), wn.hidden = !0;
  });
  function Il(e) {
    var a;
    const t = Number(e.start) || 0;
    if (e.useVideoLength === !1) return t + (Number(e.duration) || 300);
    const n = Ce && Ye === e && Number((a = Ce.getDuration) == null ? void 0 : a.call(Ce)) || 0;
    return Number(e.end) || n || Number(e.videoDuration) || t + (Number(e.duration) || 300);
  }
  function Rr(e, t) {
    const n = ue[ge];
    [dt, Je, ct, n == null ? void 0 : n.warmup, n == null ? void 0 : n.strength, n == null ? void 0 : n.cooldown, n == null ? void 0 : n.sequence].forEach((a) => (Array.isArray(a) ? a : []).forEach((i) => {
      i && i.kind === "video" && i.videoId === e && t(i);
    }));
  }
  function Ar(e, t) {
    t = Math.round(Number(t) || 0);
    let n = !1;
    return e && t > 0 && Rr(e, (a) => {
      a.videoDuration !== t && (a.videoDuration = t, n = !0);
    }), n;
  }
  function Fl(e) {
    Rr(e, (t) => {
      t.videoError = "embed";
    }), ft();
  }
  function Pl(e) {
    const t = e.videoId;
    if (!t) return;
    const n = () => {
      je.classList.contains("open") ? Qe || ye() : (ye(), ft());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + t)).then((a) => a.ok ? a.json() : Promise.reject(a.status)).then((a) => {
      e.videoId === t && (e.videoTitle = a.title || "", e.autoName && a.title && (e.name = a.title), n());
    }).catch((a) => {
      e.videoId === t && a === 401 && (e.videoError = "embed", n());
    }), Dl(t).then((a) => {
      Ar(t, a) && n();
    }).catch((a) => {
      a === "embed" && e.videoId === t && (e.videoError = "embed", n());
    });
  }
  function Dl(e) {
    return Mr().then((t) => new Promise((n, a) => {
      const i = document.createElement("div");
      i.className = "videoProbe", i.setAttribute("aria-hidden", "true");
      const s = document.createElement("div");
      i.appendChild(s), o("app").appendChild(i);
      let l = null, c = !1;
      const g = (p, R) => {
        c || (c = !0, clearTimeout(k), setTimeout(() => {
          try {
            l == null || l.destroy();
          } catch {
          }
          i.remove();
        }, 0), R ? a(R) : n(p));
      }, k = setTimeout(() => g(0), 2e4), u = () => {
        var R;
        const p = Number((R = l == null ? void 0 : l.getDuration) == null ? void 0 : R.call(l)) || 0;
        return p > 0 && g(p), p > 0;
      };
      l = new t.Player(s, {
        width: 320,
        height: 180,
        videoId: e,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            u() || (l.mute(), l.playVideo());
          },
          onStateChange: () => u(),
          onError: (p) => g(0, p.data === 101 || p.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function Mn() {
    Ge = !1;
    const e = Z[se];
    o("app").classList.toggle("resting", e.kind === "rest"), e.kind === "video" ? Bl(e) : ja(), ze = e.duration, zn = e.duration, sa = null, qo ? qo = !1 : Et(e.kind === "rest" ? "rest" : "move"), ia.textContent = e.name, Lt.textContent = e.group, Lt.hidden = !0, Po.textContent = xr(se), yt && ra("step", { name: e.name, group: e.group, kind: e.kind, step: se + 1, of: Z.length, round: e.round || 1, rounds: _a(), duration: e.duration }), Jt(), bl(), Rl(), e.kind === "video" && setTimeout(Er, 0);
  }
  function en() {
    var i;
    const e = ((i = Z[se]) == null ? void 0 : i.kind) === "video" && !Ge, t = e && ze >= 60;
    Do.textContent = t ? On(ze) : ze, Do.classList.toggle("long", t), e && (o("videoClock").textContent = On(ze) + " left");
    const n = ze / zn * 100;
    fr.style.width = n + "%";
    const a = br();
    if (a && !Ge) {
      const s = 100 - n;
      a.style.setProperty("--segment-progress", s + "%");
    }
  }
  function zt() {
    var t, n;
    if (ht) return;
    const e = Z[se];
    if ((e == null ? void 0 : e.kind) === "video" && !Ge && Ye === e) {
      const a = Number((t = Ce == null ? void 0 : Ce.getCurrentTime) == null ? void 0 : t.call(Ce)) || 0, i = Number(e.start) || 0, s = Il(e);
      zn = Math.max(1, s - i), (a > i || ((n = Ce == null ? void 0 : Ce.getPlayerState) == null ? void 0 : n.call(Ce)) === yn) && (ze = Math.max(0, Math.ceil(s - a))), en(), Ga(), a > i && a >= s - 0.25 && la();
      return;
    }
    ze--, en(), Ga(), ze <= 0 && (e.rest > 0 ? Nr(e.rest) : Tn());
  }
  function Nr(e) {
    var n;
    Ge = !0, o("app").classList.add("resting");
    const t = br();
    t && t.style.setProperty("--segment-progress", "100%"), clearInterval(Pe), ze = e, zn = e, sa = null, Et("rest"), yt && ra("rest", { duration: e }), ia.textContent = "Rest", Lt.textContent = (n = Z[se]) != null && n.roundBreakAfter ? "Round " + (Z[se].round + 1) + " next" : "Recovery", Jt(), en(), Pe = setInterval(() => {
      ht || (ze--, en(), Ga(), ze <= 0 && (clearInterval(Pe), Tn(), Pe = setInterval(zt, 1e3)));
    }, 1e3);
  }
  function Tn() {
    Ge = !1;
    const e = it(se + 1);
    if (e >= 0)
      se = e, Mn();
    else {
      clearInterval(Pe), ja(), Rt(!1), o("app").classList.remove("resting"), ia.textContent = "Complete", Lt.textContent = "Move finished", Lt.hidden = !1, Do.textContent = "✓";
      {
        const t = _a();
        Po.textContent = t > 1 ? t + " rounds done" : Z.filter((n) => !n.roundBreak).length + " steps done";
      }
      yr(!0), Et("done");
      {
        const t = ti(7).reduce((n, a) => n + a.minutes, 0);
        Lt.textContent = "Move finished · " + t + " min in the last 7 days";
      }
      fr.style.width = "100%", Jt();
    }
  }
  o("skipExercise").addEventListener("click", () => {
    Hl(), Rt(!1);
  });
  function Hl() {
    clearInterval(Pe);
    const e = Z[se];
    if (Ge) {
      Ge = !1, o("app").classList.remove("resting");
      const n = it(se + 1);
      n >= 0 ? (se = n, Mn(), Pe = setInterval(zt, 1e3)) : Tn();
      return;
    }
    if (e && e.rest > 0) {
      Nr(e.rest);
      return;
    }
    const t = it(se + 1);
    t >= 0 ? (se = t, Mn(), Pe = setInterval(zt, 1e3)) : Tn();
  }
  o("restartSegment").addEventListener("click", () => {
    if (clearInterval(Pe), Rt(!1), Ge) {
      const e = Z[se];
      ze = e.rest, zn = e.rest, sa = null, Et("rest"), ia.textContent = "Rest", Lt.textContent = "Recovery", o("app").classList.add("resting"), Jt(), en();
    } else
      Mn();
    Pe = setInterval(Ge ? () => {
      ht || (ze--, en(), Ga(), ze <= 0 && (clearInterval(Pe), Tn(), Pe = setInterval(zt, 1e3)));
    } : zt, 1e3);
  });
  function da(e, t, n, a) {
    let i = 0, s = null, l = !1;
    function c() {
      s && cancelAnimationFrame(s), s = null, i = 0, l = !1, t.style.width = "0%", e.classList.remove("holding");
    }
    function g(p) {
      if (!l) return;
      i || (i = p);
      const R = Math.min(1, (p - i) / n);
      if (t.style.width = R * 100 + "%", R >= 1) {
        l = !1, s && cancelAnimationFrame(s), s = null, t.style.width = "100%", setTimeout(() => t.style.width = "0%", 90), a();
        return;
      }
      s = requestAnimationFrame(g);
    }
    function k(p) {
      var R;
      if (!(p && p.button !== void 0 && p.button !== 0)) {
        p == null || p.preventDefault(), c(), l = !0, e.classList.add("holding");
        try {
          (R = e.setPointerCapture) == null || R.call(e, p.pointerId);
        } catch {
        }
        s = requestAnimationFrame(g);
      }
    }
    function u() {
      l && c();
    }
    e.addEventListener("pointerdown", k), e.addEventListener("pointerup", u), e.addEventListener("pointercancel", u), e.addEventListener("lostpointercapture", u), e.addEventListener("keydown", (p) => {
      (p.key === " " || p.key === "Enter") && !p.repeat && k(p);
    }), e.addEventListener("keyup", (p) => {
      (p.key === " " || p.key === "Enter") && u();
    });
  }
  const Vl = o("endWorkout");
  da(Vl, o("holdEndFill"), 1500, _o);
  const Ln = o("deleteMoveConfirm");
  o("deleteMoveOpen").addEventListener("click", () => {
    Ln.classList.add("open"), Ln.setAttribute("aria-hidden", "false");
  }), o("deleteMoveCancel").addEventListener("click", () => {
    Ln.classList.remove("open"), Ln.setAttribute("aria-hidden", "true");
  });
  function zl() {
    const e = ge, t = r.querySelector('.workoutPanel[data-workout="' + e + '"]');
    t && t.remove(), delete ue[e], he.order = he.order.filter((a) => a !== e);
    let n = r.querySelector(".workoutPanel[data-workout]");
    if (!n) {
      const a = "custom-" + Date.now();
      ue[a] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, he.order.push(a), n = co(a, ue[a]);
    }
    Ln.classList.remove("open"), Ln.setAttribute("aria-hidden", "true"), ea = null, Ha(), xt(n.dataset.workout), ft(), Te("Move deleted");
  }
  da(o("deleteMoveYes"), o("deleteMoveFill"), 1500, zl);
  const Yo = r.querySelector(".rubberTabs"), En = o("rubberIndicator");
  function ca(e, t = !0) {
    if (!e || !Yo || !En) return;
    const n = Yo.getBoundingClientRect(), a = e.getBoundingClientRect();
    En.style.transition = t ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const i = Xt();
    En.style.left = (a.left - n.left) / i + Yo.scrollLeft + "px", En.style.width = a.width / i + "px", t && (En.style.transform = "scaleX(1.08)", setTimeout(() => En.style.transform = "scaleX(1)", 180));
  }
  r.querySelectorAll(".tab").forEach((e) => e.addEventListener("click", () => {
    e.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), r.querySelectorAll(".tab").forEach((t) => t.classList.remove("active")), r.querySelectorAll(".settingsPane").forEach((t) => t.classList.remove("active")), e.classList.add("active"), o(e.dataset.pane).classList.add("active"), ca(e, !0);
  })), requestAnimationFrame(() => ca(r.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => ca(r.querySelector(".tab.active"), !1));
  const Uo = o("pixelTrailToggle"), Zo = o("rippleToggle"), Rn = o("trailStrength"), An = o("trailLife");
  function rt(e, t) {
    ve()[e] = t, ft();
  }
  const Br = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function Ir(e) {
    return e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "g:" + String(e.group || "").trim().toLowerCase();
  }
  function Ko(e) {
    var t;
    return !!((t = ve().hideMeta) != null && t[Ir(e)]);
  }
  function Ol() {
    const e = /* @__PURE__ */ new Map(), t = (n, a, i) => {
      if (!n) return;
      Array.isArray(n) && (n = { name: n[1], group: n[2], kind: "work" });
      const s = Ir(n);
      let l = e.get(s);
      l || (l = { key: s, label: s === "rest" ? "Rest" : s === "video" ? "Video" : String(n.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, e.set(s, l)), l.kinds.add(s === "rest" ? "Rest" : s === "video" ? "Video" : a), l.moves.add(i), l.count++;
    };
    return Object.values(ue).forEach((n) => {
      const a = n.name || "Move";
      (n.warmup || (n.customSequence ? [] : fa)).forEach((i) => t(i, "Warm-up", a)), (n.customSequence ? n.sequence || [] : n.strength || []).forEach((i) => t(i, i.presetRole === "warmup" ? "Warm-up" : i.presetRole === "cooldown" ? "Cooldown" : "Movement", a)), (n.cooldown || (n.customSequence ? [] : xa)).forEach((i) => t(i, "Cooldown", a));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([n, a]) => {
      e.has(n) || e.set(n, { key: n, label: a, kinds: /* @__PURE__ */ new Set([a]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...e.values()].map((n) => ({ ...n, kind: n.kinds.has("Movement") ? "Movement" : [...n.kinds][0], moves: [...n.moves] })).sort((n, a) => Br.indexOf(n.kind) - Br.indexOf(a.kind) || n.label.localeCompare(a.label));
  }
  let Xo = "all";
  function $o() {
    const e = o("metaSearch").value.trim().toLowerCase();
    return Ol().filter((t) => (Xo === "all" || t.kind === Xo) && (!e || t.label.toLowerCase().includes(e) || t.moves.some((n) => n.toLowerCase().includes(e))));
  }
  function Ya() {
    const e = o("metaTableBody");
    if (!e) return;
    const t = ve().hideMeta || {}, n = $o();
    e.innerHTML = n.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', n.forEach((i) => {
      const s = !t[i.key], l = i.count ? (i.moves.length > 2 ? i.moves.slice(0, 2).join(", ") + " + " + (i.moves.length - 2) + " more" : i.moves.join(", ")) + " · " + i.count + " step" + (i.count === 1 ? "" : "s") : "Not used yet", c = document.createElement("tr");
      c.className = s ? "" : "off", c.innerHTML = '<td><div class="metaType">' + J(i.label) + '</div><div class="metaSub">' + J(i.kind + " · " + l) + '</div></td><td class="metaKindCol">' + J(i.kind) + '</td><td class="metaUsedCol">' + J(l) + '</td><td class="metaSwitchCol"><button class="switch' + (s ? " on" : "") + '" type="button" role="switch" aria-checked="' + s + '" aria-label="Second line for ' + J(i.label) + ' on phones"></button></td>', c.querySelector(".switch").addEventListener("click", () => Jo([i.key], s)), e.appendChild(c);
    });
    const a = n.filter((i) => t[i.key]).length;
    o("metaCount").textContent = n.length ? n.length + " type" + (n.length === 1 ? "" : "s") + (a ? " · " + a + " hidden on phones" : "") : "";
  }
  function Jo(e, t) {
    const n = { ...ve().hideMeta || {} };
    e.forEach((a) => {
      t ? n[a] = !0 : delete n[a];
    }), rt("hideMeta", n), Ya(), vo(), Jt();
  }
  o("metaSearch").addEventListener("input", Ya), o("metaKinds").querySelectorAll(".kindChip").forEach((e) => e.addEventListener("click", () => {
    Xo = e.dataset.kind, o("metaKinds").querySelectorAll(".kindChip").forEach((t) => t.classList.toggle("active", t === e)), Ya();
  })), o("metaHideAll").addEventListener("click", () => Jo($o().map((e) => e.key), !0)), o("metaShowAll").addEventListener("click", () => Jo($o().map((e) => e.key), !1));
  const Nn = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...ve().toggles || {} };
  function Fr() {
    r.querySelectorAll("[data-toggle]").forEach((n) => n.classList.toggle("on", Nn[n.dataset.toggle] !== !1)), r.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([n, a]) => {
      o(a).hidden = Nn[n] === !1;
    });
    const e = ["steps", "mood", "energyLevel"].some((n) => Nn[n] !== !1);
    r.querySelector(".activityCard").hidden = !e, o("weatherCard").hidden = !0;
    const t = r.querySelector("#homeView .grid");
    t.classList.toggle("noActivity", !e), t.classList.toggle("noWeather", !0), queueMicrotask(() => pa());
  }
  r.querySelectorAll("[data-toggle]").forEach((e) => e.addEventListener("click", () => {
    Nn[e.dataset.toggle] = Nn[e.dataset.toggle] === !1, Fr(), rt("toggles", { ...Nn });
  })), Fr();
  function ql() {
    Uo.classList.toggle("on", Tt), Zo.classList.toggle("on", $t), Rn.value = Math.round(mn * 100), o("trailStrengthValue").textContent = Rn.value + "%", An.value = gn, o("trailLifeValue").textContent = An.value + " ms";
  }
  ve().trailEnabled !== void 0 && (Tt = ve().trailEnabled), ve().rippleEnabled !== void 0 && ($t = ve().rippleEnabled), ve().trailStrength !== void 0 && (mn = ve().trailStrength), ve().trailMaxAge !== void 0 && (gn = ve().trailMaxAge), ql();
  const Qo = o("soundsToggle");
  Qo.classList.toggle("on", bn()), Qo.addEventListener("click", () => {
    rt("sounds", !bn()), Qo.classList.toggle("on", bn()), bn() && (kr(), Et("move"));
  }), Uo.addEventListener("click", () => {
    Tt = !Tt, Uo.classList.toggle("on", Tt), Tt || (oa = []), rt("trailEnabled", Tt);
  }), Zo.addEventListener("click", () => {
    $t = !$t, Zo.classList.toggle("on", $t), rt("rippleEnabled", $t);
  }), Rn.addEventListener("input", () => {
    mn = Number(Rn.value) / 100, o("trailStrengthValue").textContent = Rn.value + "%";
  }), Rn.addEventListener("change", () => rt("trailStrength", mn)), An.addEventListener("input", () => {
    gn = Number(An.value), o("trailLifeValue").textContent = An.value + " ms";
  }), An.addEventListener("change", () => rt("trailMaxAge", gn)), Fa.addEventListener("change", () => rt("upcomingCount", sn));
  function Pr(e) {
    r.querySelectorAll(".themeBtn").forEach((n) => n.classList.toggle("active", n.dataset.theme === e));
    const t = e === "light";
    o("app").classList.toggle("light", t), d.setLight(t), nn(r);
  }
  Pr(ve().theme || "dark"), r.querySelectorAll(".themeBtn").forEach((e) => e.addEventListener("click", () => {
    Pr(e.dataset.theme), rt("theme", e.dataset.theme);
  }));
  const tt = { steps: null, weather: null, ...ve().entities || {} };
  let Oe = null, ei = {};
  function _l(e) {
    const t = Object.values(e).filter((c) => c.entity_id.startsWith("sensor.") || c.entity_id.startsWith("input_number.")), n = (c) => c.attributes.friendly_name || c.entity_id, a = t.filter((c) => /step/i.test(c.entity_id) || /step/i.test(n(c)) || ["steps", "step"].includes(String(c.attributes.unit_of_measurement || "").toLowerCase())), i = t.filter((c) => !a.includes(c)), s = (c, g) => n(c).localeCompare(n(g)), l = (c, g) => /health_steps/.test(g.entity_id) - /health_steps/.test(c.entity_id) || s(c, g);
    return { suggested: a.sort(l), rest: i.sort(s), label: n };
  }
  function Dr(e) {
    const t = o("stepsEntity");
    if (!t || t.matches(":focus")) return;
    const { suggested: n, rest: a, label: i } = _l(e), s = (g) => '<option value="' + J(g.entity_id) + '">' + J(i(g)) + "</option>";
    t.innerHTML = '<option value="">Not connected</option>' + (n.length ? '<optgroup label="Suggested">' + n.map(s).join("") + "</optgroup>" : "") + (a.length ? '<optgroup label="All sensors">' + a.map(s).join("") + "</optgroup>" : ""), t.value = tt.steps || "";
    const l = o("stepsStatus"), c = tt.steps && e[tt.steps];
    l.textContent = c ? "Connected · " + i(c) : l.dataset.empty;
  }
  o("stepsEntity").addEventListener("change", () => {
    tt.steps = o("stepsEntity").value || null, rt("entities", { ...tt }), ei = {}, qr(), Oe && (Dr(Oe), zr(Oe));
  });
  function Hr(e, t = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: t }).format(e);
  }
  function Vr() {
    const e = tt.steps && (Oe == null ? void 0 : Oe[tt.steps]), t = Number(e == null ? void 0 : e.state);
    return Number.isFinite(t) ? t : null;
  }
  function zr(e) {
    var a;
    const t = tt.steps, n = t ? Number((a = e[t]) == null ? void 0 : a.state) : NaN;
    o("stepsMeta").textContent = t ? Number.isFinite(n) ? Hr(n) : "—" : "Set up in Settings", pa();
  }
  let Or = 0;
  async function qr() {
    const e = tt.steps;
    if (!e || !d.ws) return;
    Or = Date.now();
    const t = /* @__PURE__ */ new Date(), n = new Date(t.getFullYear(), t.getMonth(), t.getDate() - 30);
    try {
      const a = await d.ws({ type: "recorder/statistics_during_period", start_time: n.toISOString(), end_time: t.toISOString(), statistic_ids: [e], period: "day", types: ["max"] }), i = (a == null ? void 0 : a[e]) || [], s = {};
      if (i.forEach((l) => {
        Number.isFinite(l.max) && (s[Be(new Date(l.start))] = l.max);
      }), !Object.keys(s).length) {
        const l = await d.ws({ type: "history/history_during_period", start_time: n.toISOString(), end_time: t.toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((l == null ? void 0 : l[e]) || []).forEach((c) => {
          const g = Number(c.s ?? c.state), k = c.lu ? c.lu * 1e3 : Date.parse(c.last_updated || c.last_changed);
          if (!Number.isFinite(g) || !k) return;
          const u = Be(new Date(k));
          s[u] = Math.max(s[u] || 0, g);
        });
      }
      ei = s, At();
    } catch {
    }
  }
  function tn() {
    At();
  }
  tn(), setInterval(() => {
    tn(), $n(), Kt();
  }, 10 * 60 * 1e3);
  function ti(e) {
    const t = {}, n = {};
    he.history.forEach((l) => {
      const c = Be(new Date(l.start));
      t[c] = (t[c] || 0) + (l.seconds || 0) / 60, n[c] = (n[c] || 0) + 1;
    });
    const a = /* @__PURE__ */ new Date(), i = Be(a), s = [];
    for (let l = e - 1; l >= 0; l--) {
      const c = new Date(a.getFullYear(), a.getMonth(), a.getDate() - l), g = Be(c), k = he.checkins.filter((p) => p.date === g), u = (p) => {
        const R = k.map((U) => U[p]).filter(Boolean);
        return R.length ? R.reduce((U, A) => U + A, 0) / R.length : null;
      };
      s.push({
        key: g,
        date: c,
        minutes: Math.round(t[g] || 0),
        moves: n[g] || 0,
        steps: g === i && Vr() != null ? Vr() : ei[g] ?? null,
        mood: u("mood"),
        energy: u("energy")
      });
    }
    return s;
  }
  function Gl(e) {
    let t = e.length - 1;
    e[t] && !e[t].minutes && t--;
    let n = 0;
    for (; t >= 0 && e[t].minutes > 0; )
      n++, t--;
    return n;
  }
  function At() {
    const e = o("insightCard");
    if (!e) return;
    const t = ti(30), n = Gl(t), a = t.reduce((A, L) => A + L.minutes, 0), i = /* @__PURE__ */ new Date(), s = Be(i), l = Be(new Date(i.getFullYear(), i.getMonth(), i.getDate() - (i.getDay() + 6) % 7)), c = t.filter((A) => A.key >= l && A.key <= s).reduce((A, L) => A + L.minutes, 0), g = t.slice(-7), k = g.reduce((A, L) => A + L.minutes, 0), u = Math.round(a / 30 * 7), p = k - u, R = a ? p > 0 ? "more than your usual week" : p < 0 ? "less than your usual week" : "the same as your usual week" : "Start a move to see your week", U = (A, L, E) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + Di(A) + '</div><div><div class="activityRowName">' + J(L) + '</div><div class="activityRowMeta">' + J(E) + "</div></div></div>";
    e.innerHTML = '<div class="activityHeader"><div class="activityTitle">Movement</div></div><div class="maCompare"><div class="maCompareText"><div class="maCompareNumber">' + (p > 0 ? "+" : p < 0 ? "−" : "") + Math.abs(p) + ' min</div><div class="maCompareWords">' + J(R) + "</div>" + (a ? '<div class="maCompareSub">Last 7 days ' + k + " min · usual " + u + " min</div>" : "") + "</div>" + Wl(g, a / 30) + '</div><div class="activityRows">' + U("week", "This week", c + " min") + U("streak", "Streak", n + " day" + (n === 1 ? "" : "s")) + U("month", "30 days", a + " min") + "</div>", pa();
  }
  function ni(e) {
    return e.toLocaleDateString(void 0, { weekday: "narrow" });
  }
  function Wl(e, t) {
    const n = e.map((u) => u.minutes), a = Math.max(t, ...n) || 1, i = (u) => (1 - u / a) * 100, s = (u) => (u + 0.5) / e.length * 100, l = e.length - 1, c = n.map((u, p) => [s(p), i(u)]), g = c.map(([u, p], R) => (R ? "L" : "M") + u.toFixed(2) + " " + p.toFixed(2)).join(""), k = e.map((u) => ni(u.date) + " " + u.minutes + " min").join(", ");
    return '<div class="maTrend" role="img" aria-label="' + J("Minutes each day: " + k) + '"><div class="maTrendPlot"><svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="maTrendFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--primary)" stop-opacity=".28"/><stop offset="1" style="stop-color:var(--primary)" stop-opacity="0"/></linearGradient></defs><path d="' + g + "L" + c[l][0].toFixed(2) + " 100L" + c[0][0].toFixed(2) + ' 100Z" fill="url(#maTrendFill)"/><line class="maAvgLine" x1="0" x2="100" y1="' + i(t).toFixed(2) + '" y2="' + i(t).toFixed(2) + '" vector-effect="non-scaling-stroke"/><path class="maTrendLine" d="' + g + '" vector-effect="non-scaling-stroke"/></svg><span class="maTrendAvg" style="top:' + i(t).toFixed(2) + '%">' + Math.round(t) + "</span>" + c.map(([u, p], R) => {
      const U = R === l ? " today" : "", A = "left:" + u.toFixed(2) + "%;top:" + p.toFixed(2) + "%";
      return '<i class="maTrendDot' + U + '" style="' + A + '"></i><span class="maTrendValue' + U + '" style="' + A + '">' + n[R] + "</span>";
    }).join("") + '</div><div class="maTrendDays">' + e.map((u, p) => '<span class="' + (p === l ? "today" : "") + '" style="left:' + s(p).toFixed(2) + '%">' + J(ni(u.date)) + "</span>").join("") + "</div></div>";
  }
  function pa(e = !1) {
    var O, de;
    const t = (O = o("activityGraph")) == null ? void 0 : O.querySelector("svg");
    if (!t) return;
    (de = o(Vn[St])) != null && de.hidden && (St = Object.keys(Vn).find((G) => !o(Vn[G]).hidden) || "steps"), Object.entries(Vn).forEach(([G, W]) => {
      const X = G === St;
      o(W).classList.toggle("picked", X), o(W).setAttribute("aria-pressed", String(X));
    });
    const n = Math.max(140, t.clientWidth || 300), a = Math.max(80, t.clientHeight || 130), i = 18, s = a - 20, l = ti(7), c = l.map((G) => G[St]), g = St === "steps", k = g ? Math.max(0, ...c.map((G) => G || 0)) : 100, u = l.length - 1, p = n / l.length, R = Math.min(p * 0.56, 32), U = (G) => s - (k > 0 ? G / k * (s - i) : 0), A = { steps: "Steps", mood: "Mood", energy: "Energy" }[St], L = (G) => g ? Hr(G) : Zt(St, G), oe = c.map((G, W) => [G, W]).filter(([G]) => G != null && G > 0).reduce((G, W) => W[0] > G[0] ? W : G, [-1, -1]), le = (G) => G.toLocaleDateString(void 0, { weekday: "short" });
    t.setAttribute("viewBox", "0 0 " + n + " " + a), t.setAttribute("aria-label", A + ", last 7 days: " + l.map((G, W) => le(G.date) + " " + (c[W] != null ? L(c[W]) : "none")).join(", ")), t.innerHTML = [i, (i + s) / 2, s].map((G) => '<line x1="0" x2="' + n + '" y1="' + G + '" y2="' + G + '" stroke="var(--line)" stroke-width="1"/>').join("") + c.map((G, W) => G != null && G > 0 ? '<rect x="' + (W * p + (p - R) / 2).toFixed(1) + '" y="' + U(G).toFixed(1) + '" width="' + R.toFixed(1) + '" height="' + (s - U(G)).toFixed(1) + '" rx="4" fill="' + (W === u ? "var(--primary)" : "var(--text)") + '"' + (W === u ? "" : ' fill-opacity=".85"') + "/>" : "").join("") + l.map((G, W) => '<text class="' + (W === u ? "today" : "") + '" x="' + (W * p + p / 2).toFixed(1) + '" y="' + (a - 4) + '" text-anchor="middle">' + J(ni(G.date)) + "</text>").join("") + (oe[1] >= 0 ? '<text x="0" y="11">' + (g ? "Most: " : "Best: ") + J(L(oe[0])) + " on " + J(le(l[oe[1]].date)) + "</text>" : '<text x="0" y="11">' + (g && !tt.steps ? "Pick your step sensor in Settings" : "Nothing yet this week") + "</text>"), e && !at() && t.querySelectorAll("rect").forEach((G, W) => G.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: W * 30, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  Object.entries(Vn).forEach(([e, t]) => {
    const n = o(t), a = () => {
      St !== e && (St = e, pa(!0));
    };
    n.addEventListener("click", a), n.addEventListener("keydown", (i) => {
      (i.key === "Enter" || i.key === " ") && (i.preventDefault(), a());
    });
  });
  {
    const e = o("activityGraph");
    let t = 0;
    new ResizeObserver(() => {
      e.clientWidth !== t && (t = e.clientWidth, pa());
    }).observe(e);
  }
  const ai = {
    sunny: "Sunny",
    "clear-night": "Clear",
    partlycloudy: "Partly cloudy",
    cloudy: "Cloudy",
    fog: "Fog",
    windy: "Windy",
    "windy-variant": "Windy",
    exceptional: "Unusual weather",
    rainy: "Rain",
    pouring: "Heavy rain",
    lightning: "Thunder",
    "lightning-rainy": "Thunderstorms",
    hail: "Hail",
    snowy: "Snow",
    "snowy-rainy": "Sleet"
  }, jl = (e) => e === "sunny" ? "clear" : e === "clear-night" ? "night" : e === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(e) ? "rain" : ["snowy", "snowy-rainy"].includes(e) ? "snow" : "cloudy", Bn = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Ua = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let _r = 0;
  const oi = (e, t) => '<path class="' + t + '" d="' + e + '"/>', Yl = (e, t) => ' style="animation-delay:-' + Math.round(e * 137 % t) + 'ms"', mt = (e, t, n, a) => {
    const i = n * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (a < 1 ? ' opacity="' + a + '"' : "") + Yl(e, 2400) + ' d="M' + e + " " + (t - n) + "L" + (e + i) + " " + (t - i) + "L" + (e + n) + " " + t + "L" + (e + i) + " " + (t + i) + "L" + e + " " + (t + n) + "L" + (e - i) + " " + (t + i) + "L" + (e - n) + " " + t + "L" + (e - i) + " " + (t - i) + 'Z"/>';
  }, Gr = ([e, t, n], a) => '<path class="wxMoonPath" d="' + e + '" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="0" y1="' + t + '" x2="0" y2="' + n + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Ul = (e, t) => t ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Zl = (e) => (e ? ["29.35", "43.04", "56.74"].map((t, n) => '<g class="wxDrop" style="animation-delay:-' + n * 317 + 'ms"><rect class="wxAccent" x="' + t + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + t + ' 60.65)"/></g>') : [19, 26, 33].map((t, n) => '<g class="wxDrop" style="animation-delay:-' + n * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + t + ' 38)"/></g>')).join(""), Kl = (e) => (e ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([t, n], a) => '<circle class="wxFlake" style="animation-delay:-' + a * 640 + 'ms" cx="' + t + '" cy="' + n + '" r="' + (e ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function Wr(e, t, n, a) {
    return e === "clear" ? t ? Gr(n ? Ua.l : Ua.s, a) + (n ? mt(70, 20, 5.83, 1) + mt(78.33, 41.67, 3.75, 0.8) + mt(60, 71.67, 3.33, 0.6) : mt(42, 12, 3.5, 1) + mt(47, 25, 2.25, 0.8) + mt(36, 43, 2, 0.6)) : Ul(a, n) : e === "partly" ? (t ? Gr(n ? Ua.lp : Ua.sp, a) : n ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + oi(n ? Bn.lp : Bn.sp, t ? "wxCloudLight" : "wxBright") + (t ? n ? mt(73.33, 16.67, 4.17, 0.9) : mt(44, 10, 2.5, 0.9) : "") : e === "cloudy" ? oi(n ? Bn.lc : Bn.s, t ? "wxCloudLight" : "wxBright") + (t ? n ? mt(15, 15, 3.75, 0.8) + mt(76.67, 13.33, 2.92, 0.6) : mt(9, 9, 2.25, 0.8) + mt(46, 8, 1.75, 0.6) : "") : oi(n ? Bn.lr : Bn.s, "wxCloudLight") + (e === "rain" ? Zl(n) : Kl(n));
  }
  const Xl = () => {
    var e;
    return ((e = Oe == null ? void 0 : Oe["sun.sun"]) == null ? void 0 : e.state) === "below_horizon";
  };
  let st = ve().weatherStyle || "bitmap", jr = ve().weatherLayout === "strip" ? "strip" : "tiles", $l = ve().weatherMotion !== !1;
  const ua = () => $l && !at(), ma = /* @__PURE__ */ new Map(), ii = 700, Jl = (e) => {
    const [t, n] = e.split("/");
    return { k: t === "fog" ? "cloudy" : t === "storm" ? "rain" : t, night: n === "night" };
  };
  function Za(e, t, n, a = st, i, s) {
    let l = jl(e);
    const c = l === "night" || (s != null ? !!s : !!n && Xl());
    l === "night" && (l = "clear");
    const g = t ? 90 : 54, k = ks(e, c), u = performance.now();
    let p = i ? ma.get(i) : null;
    if (i && !p ? ma.set(i, p = { key: k, t0: -1e9 }) : p && p.key !== k && (p.fromKey = p.key, p.from = p.last || null, p.key = k, p.t0 = u), a !== "smooth") return '<span class="wxIcon pixels' + (t ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + k + '"' + (i ? ' data-wx-slot="' + i + '"' : "") + ' data-wx-style="' + a + '" data-wx-size="' + g + '"></canvas></span>';
    let R = "";
    if (p && u - p.t0 < ii && (ua() || at())) {
      const U = Jl(p.fromKey);
      R = '<span class="wxLayer wxOut ' + U.k + (U.night ? " night" : "") + '" style="animation-delay:' + Math.round(p.t0 - u) + 'ms"><svg viewBox="0 0 ' + g + " " + g + '">' + Wr(U.k, U.night, t, "wxg" + ++_r) + "</svg></span>";
    }
    return '<span class="wxIcon ' + l + (c ? " night" : "") + (t ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + g + " " + g + '">' + Wr(l, c, t, "wxg" + ++_r) + "</svg>" + R + "</span>";
  }
  function Ka() {
    const e = o("app"), t = getComputedStyle(e), n = (c) => t.getPropertyValue(c).trim(), a = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([c, g]) => {
      n(g) && (a[c] = n(g));
    });
    const i = n("--color-text-primary") || "#f1f1f1", s = n("--color-bg-card") || "#222222", l = e.classList.contains("light");
    return { colors: a, ink: l ? i : s, paper: l ? s : i };
  }
  function nn(e, t = performance.now()) {
    const n = e.querySelectorAll("canvas[data-wx]");
    if (!n.length) return;
    const a = Ka(), i = ua(), s = at();
    n.forEach((l) => {
      var p;
      const c = l.dataset.wx, g = l.dataset.wxSlot ? ma.get(l.dataset.wxSlot) : null;
      let k = xs(c, a.colors);
      if (g && g.key === c) {
        const R = (t - g.t0) / ii;
        R < 1 && (i || s) && (k = md(g.from || xs(g.fromKey, a.colors), k, Math.max(0, R), a.colors, s)), g.last = k;
      }
      const u = xd(k, { size: Number(l.dataset.wxSize) || 54, px: 2, oneBit: l.dataset.wxStyle === "onebit", colors: a.colors, ink: a.ink, paper: a.paper, clock: t, idle: i });
      l.width !== u.w && (l.width = u.w), l.height !== u.h && (l.height = u.h), (p = l.getContext("2d")) == null || p.putImageData(new ImageData(u.data, u.w, u.h), 0, 0);
    });
  }
  let Xa = null, Yr = -1;
  function Ur(e) {
    if (Xa = null, !S) return;
    const t = ua(), n = Math.floor(e / 100), a = [...ma.values()].some((g) => e - g.t0 < ii), i = [...$a.values()].some((g) => e - g.t0 < g.dur), s = pe.home.classList.contains("active"), l = nt.classList.contains("open"), c = t && st === "smooth" && (l || s && jr === "strip");
    !document.hidden && (a || i || c || t && n !== Yr) && (Yr = n, s && (nn(o("weatherCard"), e), ga(o("weatherCard"), e)), l && (nn(nt, e), ga(nt, e))), (t || a || i) && (Xa = requestAnimationFrame(Ur));
  }
  function an() {
    o("app").classList.toggle("wxMotion", ua()), !Xa && S && (Xa = requestAnimationFrame(Ur));
  }
  let Zr = [];
  const Ie = 36e5, Ql = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function Nt() {
    const e = /* @__PURE__ */ new Date(), t = (s, l) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + s, l), n = [], a = [], i = [...Array(6)].map((s, l) => {
      const c = t(l, 6), g = t(l, 18), k = t(l + 1, 6), u = Zr.find((R) => Be(new Date(R.datetime)) === Be(c)), p = (R, U, A) => {
        const L = n.filter((le) => le.t >= +R && le.t < +U);
        if (L.length) {
          const le = {};
          return L.forEach((O) => {
            le[O.c] = (le[O.c] || 0) + (Ql.has(O.c) ? 2 : 1);
          }), Object.entries(le).sort((O, de) => de[1] - O[1])[0][0];
        }
        const E = a.find((le) => {
          const O = +new Date(le.datetime);
          return O >= +R - 3 * Ie && O < +U && (le.is_daytime == null || !!le.is_daytime == !A);
        });
        if (E) return E.condition;
        const oe = (u == null ? void 0 : u.condition) || "cloudy";
        return A && oe === "sunny" ? "clear-night" : oe;
      };
      return { start: +c, end: +k, day: p(c, g, !1), night: p(g, k, !0), hi: Number(u == null ? void 0 : u.temperature), lo: Number(u == null ? void 0 : u.templow) };
    });
    return { days: i, hours: n, start: i[0].start, end: i[5].end };
  }
  const Kr = (e, t) => {
    const n = e.days.findIndex((i) => t < i.end);
    if (n < 0) return 1;
    const a = e.days[n];
    return Math.max(0, (n + (t - a.start) / (a.end - a.start)) / 6);
  }, ed = (e, t) => {
    const n = Math.max(0, Math.min(0.99999, t)) * 6, a = Math.floor(n), i = e.days[a];
    return i.start + (n - a) * (i.end - i.start);
  };
  function ri(e, t) {
    const n = Math.max(0, e.days.findIndex((g) => t < g.end)), a = e.days[n], i = (t - a.start) / (a.end - a.start) >= 0.5;
    let s = i ? a.night : a.day, l = NaN;
    const c = e.hours;
    if (c.length && t >= c[0].t - Ie && t <= c[c.length - 1].t + Ie) {
      let g = c.findIndex((p) => p.t > t);
      g < 0 && (g = c.length);
      const k = c[Math.max(0, g - 1)], u = c[Math.min(c.length - 1, g)];
      s = k.c || s, l = u.t > k.t ? k.temp + (u.temp - k.temp) * Math.max(0, Math.min(1, (t - k.t) / (u.t - k.t))) : k.temp;
    }
    if (!Number.isFinite(l)) {
      const g = [];
      if (e.days.forEach((k) => {
        Number.isFinite(k.lo) && g.push([k.start - Ie, k.lo]), Number.isFinite(k.hi) && g.push([k.start + 9 * Ie, k.hi]);
      }), g.length) {
        l = t <= g[0][0] ? g[0][1] : g[g.length - 1][1];
        for (let k = 1; k < g.length; k++) if (t <= g[k][0] && t > g[k - 1][0]) {
          const [u, p] = g[k - 1], [R, U] = g[k];
          l = p + (U - p) * (1 - Math.cos(Math.PI * (t - u) / (R - u))) / 2;
          break;
        }
      }
    }
    return { cond: i && s === "sunny" ? "clear-night" : s, temp: l, night: i, day: a };
  }
  const Xr = (e) => Be(new Date(e)) === Be(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(e)), $a = /* @__PURE__ */ new Map(), td = 900, nd = 700;
  let Ja = null;
  const gt = typeof ResizeObserver == "function" ? new ResizeObserver((e) => e.forEach((t) => {
    ga(t.target.parentElement), t.target.closest("#wxDialog") && ns();
  })) : null;
  function ga(e, t = performance.now()) {
    const n = e.querySelectorAll("canvas[data-wx-strip]");
    if (!n.length) return;
    const a = Nt(), i = a.days.flatMap((p) => [{ cond: p.day, night: !1 }, { cond: p.night, night: !0 }]), s = i.map((p) => p.cond).join(), l = Ka(), c = ua(), g = at(), k = Number(Be(new Date(a.start)).replace(/\D/g, "")) % 9973;
    let u = !1;
    n.forEach((p) => {
      var le;
      const R = p.clientWidth, U = p.clientHeight;
      if (!R || !U) return;
      const A = p.dataset.wxStrip;
      let L = $a.get(A);
      L ? L.sig !== s && (L.prev = L.segs, L.sig = s, L.segs = i, L.t0 = t, L.dur = nd) : $a.set(A, L = { sig: s, segs: i, prev: null, t0: t, dur: td });
      const E = c || g ? Math.min(1, Math.max(0, (t - L.t0) / L.dur)) : 1;
      E < 1 && (u = !0);
      const oe = { width: R, height: U, colors: l.colors, clock: t, ambient: c, seed: k, reveal: g ? E : 1 - Math.pow(1 - E, 3), prev: E < 1 ? L.prev : null, reduce: g };
      if (st === "smooth") {
        const O = Math.min(2, window.devicePixelRatio || 1), de = Math.round(R * O), G = Math.round(U * O);
        p.width !== de && (p.width = de), p.height !== G && (p.height = G);
        const W = p.getContext("2d");
        if (!W) return;
        W.setTransform(O, 0, 0, O, 0, 0), Rd(W, i, oe);
      } else {
        const O = Ed(i, { ...oe, px: 2, oneBit: st === "onebit", ink: l.ink, paper: l.paper });
        p.width !== O.w && (p.width = O.w), p.height !== O.h && (p.height = O.h), (le = p.getContext("2d")) == null || le.putImageData(new ImageData(O.data, O.w, O.h), 0, 0);
      }
    }), u && an();
  }
  function $r() {
    const e = o("weatherCard");
    if (!e || e.hidden) return;
    const t = tt.weather, n = t && (Oe == null ? void 0 : Oe[t]);
    if (!n) {
      e.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + Za("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (t ? "Not available" : "Set up in Settings") + "</div></div></div></div>", nn(e);
      return;
    }
    const a = n.attributes || {}, i = a.temperature_unit || "°", s = (W) => Number.isFinite(Number(W)) ? Math.round(Number(W)) + "°" : "—", l = (a.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", c = ai[n.state] || (n.state ? n.state.charAt(0).toUpperCase() + n.state.slice(1) : "—"), g = Be(/* @__PURE__ */ new Date()), k = Zr.slice(0, 7), u = k.find((W) => Be(new Date(W.datetime)) === g) || null, p = k.filter((W) => Be(new Date(W.datetime)) >= g).slice(0, 6), R = /* @__PURE__ */ new Date(), U = Be(new Date(R.getFullYear(), R.getMonth(), R.getDate() + 1)), A = u ? "H " + s(u.temperature) + "&ensp; L " + s(u.templow) : "", L = (W) => {
      const X = Be(new Date(W.datetime));
      return X === g ? "Today" : X === U ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(W.datetime));
    }, E = Number.isFinite(Number(a.temperature)) ? Math.round(Number(a.temperature)) : "—", oe = (W) => {
      const X = new Date(W.datetime);
      return Math.round((new Date(X.getFullYear(), X.getMonth(), X.getDate()) - new Date(R.getFullYear(), R.getMonth(), R.getDate())) / 864e5);
    }, le = (W) => (ai[W] || W || "").toLowerCase(), O = (W, X) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + oe(W) + '" aria-label="' + J(L(W) + ": " + le(W.condition) + ", " + s(W.temperature) + " / " + s(W.templow) + ". Open the forecast") + '">' + Za(W.condition, !1, !1, st, "day" + X) + '<div><div class="activityRowName">' + J(L(W)) + '</div><div class="activityRowMeta">' + s(W.temperature) + " / " + s(W.templow) + "</div></div></div>", de = () => '<div class="wxStrip"><div class="wxStripDays">' + Nt().days.map((X, Fe) => {
      const Se = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(X.start)) + ": " + le(X.day) + (le(X.day) === le(X.night) ? " all day and night" : ", then " + le(X.night) + " overnight") + (Number.isFinite(X.hi) ? ". High " + s(X.hi) : "") + (Number.isFinite(X.lo) ? ", low " + s(X.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + Fe + '" aria-label="' + J(Se) + '"><span class="wxDayName">' + J(Xr(X.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + s(X.hi) + '</span><span class="wxLow">' + s(X.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    e.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + J("Now in " + l + ": " + E + "°, " + le(n.state) + ". Open the forecast") + '"><div class="wxCurrent">' + Za(n.state, !0, !0, st, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + J(String(E)) + '</span><span class="wxUnit">' + J(i) + '</span></div><div class="wxPlace">' + J(l) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + J(c) + "</div>" + (A ? '<div class="wxRange">' + A + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (p.length ? jr === "strip" ? de() : '<div class="activityRows wxDays">' + p.map(O).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", nn(e);
    const G = e.querySelector("canvas[data-wx-strip]");
    Ja && Ja !== G && (gt == null || gt.unobserve(Ja)), Ja = G, G && (gt == null || gt.observe(G), ga(e)), an(), ts();
  }
  const Jr = o("weatherCard"), Qr = (e) => {
    const t = e.closest("[data-wx-day]");
    if (t) {
      const a = /* @__PURE__ */ new Date();
      es(+new Date(a.getFullYear(), a.getMonth(), a.getDate() + Number(t.dataset.wxDay), 12), t);
      return;
    }
    const n = e.closest("[data-wx-open]");
    n && es(Date.now(), n);
  };
  Jr.addEventListener("click", (e) => Qr(e.target)), Jr.addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && e.target.matches("[data-wx-day],[data-wx-open]") && (e.preventDefault(), Qr(e.target));
  });
  const nt = o("wxDialog"), Ot = o("wxGraph"), ha = o("wxGraphWrap");
  let vt = Date.now(), on = null, si = !1, In = null;
  function es(e, t) {
    const n = Nt();
    on = t || null, vt = Math.max(n.start, Math.min(n.end - Ie, e)), $a.delete("dialog"), ma.delete("scrub"), nt.classList.add("open"), nt.setAttribute("aria-hidden", "false"), ts(), gt == null || gt.observe(nt.querySelector("canvas[data-wx-strip]")), Ot.focus({ preventScroll: !0 }), an();
  }
  function li() {
    var e;
    nt.classList.remove("open"), nt.setAttribute("aria-hidden", "true"), gt == null || gt.unobserve(nt.querySelector("canvas[data-wx-strip]")), (e = on == null ? void 0 : on.focus) == null || e.call(on, { preventScroll: !0 }), on = null;
  }
  function ts() {
    if (!nt.classList.contains("open")) return;
    const e = Nt();
    o("wxGraphDays").innerHTML = e.days.map((t) => "<span>" + J(Xr(t.start)) + "</span>").join(""), ns(e), Qa(e), ga(nt);
  }
  function Qa(e = Nt()) {
    const t = ri(e, vt), n = Oe == null ? void 0 : Oe[tt.weather], a = (n == null ? void 0 : n.attributes) || {}, i = a.temperature_unit || "°", s = Math.abs(vt - Date.now()) < Ie / 2, l = s && n ? n.state : t.cond, c = s && Number.isFinite(Number(a.temperature)) ? Math.round(Number(a.temperature)) : Number.isFinite(t.temp) ? Math.round(t.temp) : "—", g = ai[l] || (l ? l.charAt(0).toUpperCase() + l.slice(1) : "—"), k = s ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(vt / Ie) * Ie)), u = t.day, p = (Number.isFinite(u.hi) ? "H " + Math.round(u.hi) + "°" : "") + (Number.isFinite(u.lo) ? "&ensp; L " + Math.round(u.lo) + "°" : "");
    o("wxDialogNow").innerHTML = '<div class="wxCurrent">' + Za(l, !0, s, st, "scrub", s ? void 0 : t.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + J(String(c)) + '</span><span class="wxUnit">' + J(i) + '</span></div><div class="wxPlace">' + J(k) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + J(g) + "</div>" + (p ? '<div class="wxRange">' + p + "</div>" : "") + "</div>", nn(o("wxDialogNow")), Ot.setAttribute("aria-valuenow", String(Math.round((vt - e.start) / Ie))), Ot.setAttribute("aria-valuetext", k + ", " + g.toLowerCase() + ", " + c + "°"), di(e), an();
  }
  function ns(e = Nt()) {
    const t = o("wxGraphLine"), n = ha.clientWidth, a = ha.clientHeight;
    if (!n || !a) return;
    const i = [];
    for (let E = e.start; E <= e.end; E += Ie) {
      const oe = ri(e, E).temp;
      Number.isFinite(oe) && i.push([Kr(e, E) * n, oe]);
    }
    if (t.setAttribute("viewBox", "0 0 " + n + " " + a), i.length < 2) {
      t.innerHTML = '<g id="wxCursorMark"></g>', In = null, di(e);
      return;
    }
    const s = i.map((E) => E[1]), l = Math.min(...s), c = Math.max(...s), g = Math.max(4, c - l), k = st !== "smooth", u = (E) => k ? Math.round(E / 2) * 2 : Math.round(E * 10) / 10;
    In = (E) => a * 0.84 - (E - l) / g * a * 0.62;
    const p = Ka(), R = st === "onebit" ? p.paper : "#ffffff", U = st === "onebit" ? p.ink : "rgba(0,0,0,.28)", A = "M" + i.map((E) => u(E[0]) + " " + u(In(E[1]))).join(" L"), L = (E, oe) => {
      const le = i.find((O) => O[1] === E);
      return '<text class="wxLineLabel" x="' + u(Math.min(n - 14, Math.max(14, le[0]))) + '" y="' + u(In(E) + (oe ? 18 : -10)) + '" fill="' + R + '" stroke="' + U + '">' + Math.round(E) + "°</text>";
    };
    t.setAttribute("shape-rendering", k ? "crispEdges" : "auto"), t.innerHTML = '<path d="' + A + '" fill="none" stroke="' + U + '" stroke-width="' + (k ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + A + '" fill="none" stroke="' + R + '" stroke-width="2" stroke-linejoin="round"/>' + L(c, !1) + L(l, !0) + '<g id="wxCursorMark"></g>', di(e);
  }
  function di(e = Nt()) {
    const t = o("wxGraphLine").querySelector("#wxCursorMark");
    if (!t) return;
    const n = ha.clientWidth, a = ha.clientHeight, i = st !== "smooth", s = (R) => i ? Math.round(R / 2) * 2 : R, l = s(Kr(e, vt) * n), c = ri(e, vt).temp, g = Ka(), k = st === "onebit" ? g.paper : "#ffffff", u = st === "onebit" ? g.ink : "rgba(0,0,0,.28)", p = In && Number.isFinite(c) ? s(In(c)) : null;
    t.innerHTML = '<rect x="' + (l - 2) + '" y="0" width="4" height="' + a + '" fill="' + u + '"/><rect x="' + (l - 1) + '" y="0" width="2" height="' + a + '" fill="' + k + '"/>' + (p == null ? "" : i ? '<rect x="' + (l - 5) + '" y="' + (p - 5) + '" width="10" height="10" fill="' + k + '" stroke="' + u + '" stroke-width="2"/>' : '<circle cx="' + l + '" cy="' + p + '" r="6" fill="' + k + '" stroke="' + u + '" stroke-width="2"/>');
  }
  const as = (e) => {
    const t = ha.getBoundingClientRect();
    t.width && (vt = ed(Nt(), (e - t.left) / t.width), Qa());
  };
  Ot.addEventListener("pointerdown", (e) => {
    if (e.button === 0) {
      si = !0;
      try {
        Ot.setPointerCapture(e.pointerId);
      } catch {
      }
      as(e.clientX);
    }
  }), Ot.addEventListener("pointermove", (e) => {
    si && as(e.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((e) => Ot.addEventListener(e, () => {
    si = !1;
  })), Ot.addEventListener("keydown", (e) => {
    const t = Nt(), n = { ArrowLeft: -Ie, ArrowRight: Ie, ArrowDown: -Ie, ArrowUp: Ie, PageUp: -24 * Ie, PageDown: 24 * Ie }[e.key];
    n ? (e.preventDefault(), vt = Math.max(t.start, Math.min(t.end - Ie, Math.round(vt / Ie) * Ie + n)), Qa(t)) : (e.key === "Home" || e.key === "End") && (e.preventDefault(), vt = e.key === "Home" ? t.start : t.end - Ie, Qa(t));
  }), o("wxDialogClose").addEventListener("click", li), nt.addEventListener("click", (e) => {
    e.target === nt && li();
  }), nt.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), li());
  }), $r(), (gs = (us = window.matchMedia) == null ? void 0 : (ms = us.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || gs.call(ms, "change", () => {
    an(), nn(r);
  }), an();
  const os = o("tvNav");
  d.fullscreenSupported || (os.hidden = !0), os.addEventListener("click", () => d.toggleFullscreen()), r.addEventListener("keydown", (e) => {
    !pe.workout.classList.contains("active") || ta.classList.contains("active") || e.target.closest("input,select,textarea,.holdEnd") || (e.key === "MediaPlayPause" || e.key === " " && !e.target.closest("button") ? (e.preventDefault(), Ho.click()) : e.key === "MediaTrackNext" ? (e.preventDefault(), o("skipExercise").click()) : e.key === "MediaTrackPrevious" && (e.preventDefault(), o("restartSegment").click()));
  }), r.querySelectorAll("[data-rounds-step]").forEach((e) => e.addEventListener("click", () => {
    const t = Math.max(1, Math.min(10, (Number(we.value) || 1) + Number(e.dataset.roundsStep)));
    String(t) !== we.value && (we.value = t, we.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [x, b, M, we].forEach((e) => e.addEventListener("input", () => {
    const t = ue[ge];
    t && (t.total = Number(x.value), t.work = Number(b.value), t.rest = Number(M.value)), ye();
  })), be.addEventListener("click", _o), Re.addEventListener("click", () => m("settings")), o("settingsBack").addEventListener("click", _o), Ho.addEventListener("click", () => Rt(!ht)), xt(ge), Ia(), $n(), At(), o("healthHelpOpen").addEventListener("click", () => r.querySelector(".tab[data-pane=helpPane]").click()), da(o("resetStats"), o("resetStatsFill"), 1500, () => {
    he.history = [], he.checkins = [], Xn = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    ft(), tn(), $n(), Ia(), At(), Kt(), Te("Stats reset");
  });
  const ci = o("morningTime"), pi = o("eveningTime"), ui = o("checkinAutoOpen");
  ci.value = It().morning, pi.value = It().evening, ui.classList.toggle("on", ve().checkinAutoOpen !== !1), [["morningTime", ci], ["eveningTime", pi]].forEach(([e, t]) => t.addEventListener("change", () => {
    t.value && (rt(e, t.value), Kt());
  })), ui.addEventListener("click", () => {
    const e = ve().checkinAutoOpen === !1;
    ui.classList.toggle("on", e), rt("checkinAutoOpen", e);
  }), setTimeout(Lo, 800);
  const is = o("checkinNotify"), eo = o("checkinNotifyTarget"), rs = o("checkinNotifyStatus"), ad = rs.textContent;
  function ss() {
    const e = d.notifyServices(), t = e.filter((i) => i.startsWith("mobile_app_")), n = t.length ? t : e, a = (i) => i.replace(/^mobile_app_/, "").replace(/_/g, " ");
    eo.innerHTML = n.map((i) => '<option value="' + J(i) + '">' + J(a(i)) + "</option>").join(""), !ve().notifyTarget && n[0] && (ve().notifyTarget = n[0]), eo.value = ve().notifyTarget || "";
  }
  function to() {
    const e = !!ve().notifyOn;
    is.classList.toggle("on", e), o("checkinNotifyTargetRow").hidden = !e;
    const t = It();
    rs.textContent = e ? "Sends at " + t.morning + " and " + t.evening : ad;
  }
  async function mi() {
    const e = !!ve().notifyOn;
    try {
      return await d.setReminderAutomation(e ? { target: ve().notifyTarget, times: It() } : null), !0;
    } catch {
      return Te("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  is.addEventListener("click", async () => {
    const e = !ve().notifyOn;
    if (e && (ss(), !ve().notifyTarget)) {
      Te("Install the Companion app on your phone first");
      return;
    }
    ve().notifyOn = e, to(), await mi() ? (ft(), Te(e ? "Check-in notifications on" : "Check-in notifications off")) : (ve().notifyOn = !e, to());
  }), eo.addEventListener("change", () => {
    rt("notifyTarget", eo.value), ve().notifyOn && mi();
  }), [ci, pi].forEach((e) => e.addEventListener("change", () => {
    to(), ve().notifyOn && mi();
  })), ss(), to();
  let gi = null;
  function od() {
    gi || (gi = setTimeout(() => {
      gi = null, At();
    }, 3e4));
  }
  return {
    updateStates(e) {
      var n, a;
      const t = !Oe || Oe[tt.weather] !== e[tt.weather] || ((n = Oe["sun.sun"]) == null ? void 0 : n.state) !== ((a = e["sun.sun"]) == null ? void 0 : a.state);
      Oe = e, Dr(e), zr(e), t && $r(), Date.now() - Or > 60 * 60 * 1e3 && qr(), od();
    },
    applyRemoteData(e) {
      if (e && (Array.isArray(e.history) && (he.history = e.history, tn()), Array.isArray(e.history) && At(), Array.isArray(e.checkins) && (he.checkins = e.checkins.map(Ni), Kt(), Ia(), $n(), tn(), At()), e.profiles && !je.classList.contains("open") && !yt)) {
        const t = Ai(e);
        Object.keys(ue).forEach((n) => delete ue[n]), Object.assign(ue, t.profiles), he.order = t.order, ue[ge] || (ge = he.order[0]), Ii(), xt(ge);
      }
    },
    suspend() {
      S = !1;
    },
    resume() {
      S || (S = !0, hn || (hn = requestAnimationFrame(za)), fn || (fn = requestAnimationFrame(Oa)), an(), ca(r.querySelector(".tab.active"), !1));
    }
  };
}
const kt = {
  pivot: {
    tilt: 2,
    persp: 220,
    lift: 102.4,
    /* 103 in the lab, its lift 20% less (Matt, 10 Nov) */
    press: 98,
    shine: 10,
    size: 80,
    ret: 210,
    ease: "soft"
  },
  slider: { glow: 6, spread: 1, strength: 14, hold: 5, holdStrength: 42, grow: 101, ein: 140, eout: 520, ease: "soft" },
  iconbtn: {
    scale: 108.4,
    // 107 in the lab, its growth 20% bigger (Matt, 10 Nov)
    press: 90,
    dur: 160,
    ease: "soft"
  },
  warp: { style: "pinch", amount: 60, win: 120, cdelay: 0, cdur: 500, wout: 340, ease: "soft" },
  tabs: { dur: 360, stretch: 56 },
  dialog: { open: 380, ease: "spring", blur: 12, from: 80 },
  outline: { lightAt: 30, glowFrom: 20, colourFrom: 50, cone: 20, glow: 15, border: 49, fill: 15, size: 60, hue: 199, press: 1, fin: 180, fout: 350 }
}, Ct = { standard: "cubic-bezier(.2,0,0,1)", land: "cubic-bezier(.34,1.46,.64,1)", spring: "cubic-bezier(.2,1.2,.4,1)", soft: "cubic-bezier(.4,0,.2,1)", exit: "cubic-bezier(.4,0,1,1)" }, Hn = () => {
  var r;
  return !!((r = window.matchMedia) != null && r.call(window, "(prefers-reduced-motion: reduce)").matches);
};
function Bd() {
  const { pivot: r, slider: d, iconbtn: o, warp: y, outline: w } = kt;
  return [
    ["--pv-persp", r.persp + "px"],
    ["--pv-shine", r.shine / 100],
    ["--pv-size", r.size + "%"],
    ["--pv-ret", r.ret + "ms"],
    ["--pv-ease", Ct[r.ease]],
    ["--ab-blur", d.glow + "px"],
    ["--ab-spread", d.spread + "px"],
    ["--ab-str", d.strength + "%"],
    ["--ab-blur2", d.glow + d.hold + "px"],
    ["--ab-spread2", d.spread + d.hold / 4 + "px"],
    ["--ab-str2", d.holdStrength + "%"],
    ["--ab-grow", "scaleY(" + (1 + (d.grow / 100 - 1) * 3) + ")"],
    ["--ab-in", d.ein + "ms"],
    ["--ab-out", d.eout + "ms"],
    ["--ab-ease", Ct[d.ease]],
    ["--ih-s", o.scale / 100],
    ["--ih-p", o.press / 100],
    ["--ih-dur", o.dur + "ms"],
    ["--ih-ease", Ct[o.ease]],
    ["--ih-tint", "8%"],
    ["--wc-dur", y.cdur + "ms"],
    ["--wc-delay", y.cdelay + "ms"],
    ["--wc-ease", Ct[y.ease]],
    ["--ol-esens", w.glowFrom],
    ["--ol-csens", w.colourFrom],
    ["--ol-cone", w.cone],
    ["--ol-glow", w.glow / 100],
    ["--ol-border", w.border / 100],
    ["--ol-fill", w.fill / 100],
    ["--ol-size", w.size / 100],
    ["--ol-h", w.hue + "deg"],
    ["--ol-in", w.fin + "ms"],
    ["--ol-out", w.fout + "ms"]
  ].map(([S, P]) => S + ":" + P).join(";");
}
const fi = ":is(button.primary,button.pill,.hcBtn,.wbRangeBtn,.activityRow.tap,.hcRow,a.hcRow)", Id = "#homeView .tfAreaPanel", Fd = 300, ro = (r) => Math.min(1, Fd / Math.max(1, r)), xi = (r, d) => 1 + (d / 100 - 1) * ro(r.offsetWidth);
function Pd(r, d) {
  d.style.cssText += ";" + Bd();
  let o = null;
  const y = (C) => {
    C.classList.remove("mvMoving", "mvLit"), C.style.setProperty("--rx", "0deg"), C.style.setProperty("--ry", "0deg"), C.style.setProperty("--sc", 1), C._down = !1;
  };
  r.addEventListener("pointermove", (C) => {
    var ce, $;
    const h = C.pointerType === "touch" || Hn() ? null : ($ = (ce = C.target).closest) == null ? void 0 : $.call(ce, fi);
    if (o && o !== h && y(o), o = h, !h || h.disabled) return;
    const v = kt.pivot, f = h.getBoundingClientRect(), H = (C.clientX - f.left) / f.width, j = (C.clientY - f.top) / f.height, K = 1;
    h.classList.add("mvPv", "mvMoving", "mvLit"), h.style.setProperty("--pv-persp", v.persp / ro(Math.max(h.offsetWidth, h.offsetHeight)) + "px"), h.style.setProperty("--ry", (K * (H - 0.5) * 2 * v.tilt * ro(h.offsetWidth)).toFixed(3) + "deg"), h.style.setProperty("--rx", (K * -(j - 0.5) * 2 * v.tilt * ro(h.offsetHeight)).toFixed(3) + "deg"), h.style.setProperty("--mx", (H * 100).toFixed(1) + "%"), h.style.setProperty("--my", (j * 100).toFixed(1) + "%"), h._down || h.style.setProperty("--sc", xi(h, v.lift));
  }, { passive: !0 }), r.addEventListener("pointerout", (C) => {
    o && !o.contains(C.relatedTarget) && (y(o), o = null);
  }), r.addEventListener("pointerdown", (C) => {
    var v, f;
    const h = Hn() ? null : (f = (v = C.target).closest) == null ? void 0 : f.call(v, fi);
    h && (h._down = !0, h.classList.add("mvPv"), h.classList.remove("mvMoving"), h.style.setProperty("--sc", xi(h, kt.pivot.press)));
  }), r.addEventListener("pointerup", (C) => {
    var v, f;
    const h = (f = (v = C.target).closest) == null ? void 0 : f.call(v, fi);
    h && (h._down = !1, h.style.setProperty("--sc", C.pointerType === "touch" ? 1 : xi(h, kt.pivot.lift)));
  });
  let w = null;
  r.addEventListener("pointerover", (C) => {
    var h, v, f;
    C.pointerType !== "touch" && ((f = (v = (h = C.target).closest) == null ? void 0 : v.call(h, ".tfBar")) == null || f.classList.add("mvHover"));
  }), r.addEventListener("pointerout", (C) => {
    var v, f;
    const h = (f = (v = C.target).closest) == null ? void 0 : f.call(v, ".tfBar");
    h && !h.contains(C.relatedTarget) && h !== w && h.classList.remove("mvHover");
  }), r.addEventListener("pointerdown", (C) => {
    var v, f;
    const h = (f = (v = C.target).closest) == null ? void 0 : f.call(v, ".tfBar");
    h && (w = h, h.classList.add("mvHold"));
  });
  const S = (C) => {
    if (!w) return;
    w.classList.remove("mvHold");
    const h = w.getBoundingClientRect();
    (C.pointerType === "touch" || C.clientX < h.left || C.clientX > h.right || C.clientY < h.top || C.clientY > h.bottom) && w.classList.remove("mvHover"), w = null;
  };
  window.addEventListener("pointerup", S, !0), window.addEventListener("pointercancel", S, !0), r.addEventListener("focusin", (C) => {
    var h, v;
    (v = (h = C.target).matches) != null && v.call(h, ".tfBar:focus-visible") && C.target.classList.add("mvHover");
  }), r.addEventListener("focusout", (C) => {
    var h;
    (h = C.target.classList) == null || h.remove("mvHover", "mvHold");
  }), r.addEventListener("keydown", (C) => {
    var v, f;
    const h = (f = (v = C.target).closest) == null ? void 0 : f.call(v, ".tfBar");
    !h || !["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(C.key) || (h.classList.add("mvHold"), clearTimeout(h._k), h._k = setTimeout(() => h.classList.remove("mvHold"), 350));
  }), r.addEventListener("click", (C) => {
    var v, f;
    const h = (f = (v = C.target).closest) == null ? void 0 : f.call(v, "button.tfIcon[data-act]");
    h && Dd(h);
  });
  let P = null;
  const D = (C, h, v) => {
    C.querySelector(":scope>.mvEdge") || C.insertAdjacentHTML("afterbegin", '<span class="mvEdgeFill" aria-hidden="true"></span><span class="mvEdge" aria-hidden="true"><i></i></span>');
    const f = C.getBoundingClientRect(), H = f.width / 2, j = f.height / 2, K = h.clientX - f.left - H, ce = h.clientY - f.top - j, $ = K ? H / Math.abs(K) : 1 / 0, Y = ce ? j / Math.abs(ce) : 1 / 0, te = Math.min(Math.max(1 / Math.min($, Y), 0), 1);
    let ee = Math.atan2(ce, K) * 180 / Math.PI + 90;
    ee < 0 && (ee += 360);
    const ne = v ? 100 : te * 100;
    C.style.setProperty("--edge-proximity", ne.toFixed(3)), C.style.setProperty("--cursor-angle", ee.toFixed(3) + "deg"), C.classList.toggle("mvLitEdge", v || ne >= kt.outline.lightAt);
  }, I = (C) => {
    C.classList.remove("mvLitEdge"), C.style.setProperty("--edge-proximity", "0"), C._down = !1;
  }, B = (C) => {
    var v;
    const h = (v = C.closest) == null ? void 0 : v.call(C, Id);
    return h && !d.classList.contains("tfEditing") ? h : null;
  };
  r.addEventListener("pointermove", (C) => {
    if (C.pointerType === "touch") return;
    const h = B(C.target);
    P && P !== h && I(P), P = h, h && !h._down && D(h, C, !1);
  }, { passive: !0 }), r.addEventListener("pointerout", (C) => {
    P && !P.contains(C.relatedTarget) && (I(P), P = null);
  }), r.addEventListener("pointerdown", (C) => {
    const h = B(C.target);
    h && kt.outline.press && (h._down = !0, D(h, C, !0));
  }), r.addEventListener("pointerup", (C) => {
    const h = B(C.target);
    h && (h._down = !1, C.pointerType === "touch" ? I(h) : D(h, C, !1));
  }), new MutationObserver((C) => {
    var h;
    for (const v of C) {
      const f = v.target;
      if (v.type === "attributes") {
        (h = f.classList) != null && h.contains("tfMoreBackdrop") && !f.hidden && v.oldValue !== null && ws(f);
        continue;
      }
      v.addedNodes.forEach((H) => {
        H.nodeType === 1 && H.classList.contains("tfMoreBackdrop") && !H.hidden && ws(H);
      });
    }
  }).observe(d, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["hidden"], attributeOldValue: !0 });
}
const Es = (r) => r.closest("[data-k],.tfMore,.tfMorePair") || r.getRootNode();
function Rs(r, d) {
  const o = [];
  for (let y = r; y && y !== d && y.parentNode; y = y.parentNode) o.unshift([...y.parentNode.children].indexOf(y));
  return o;
}
const As = (r, d) => d.reduce((o, y) => o == null ? void 0 : o.children[y], r);
function Dd(r) {
  var f;
  if (Hn() || r._warp) return;
  const d = kt.warp, o = d.amount / 100, y = r.firstElementChild;
  if (!y) return;
  const w = { squash: { scale: 1 + 0.35 * o + " " + (1 - 0.55 * o) }, pinch: { scale: String(1 - 0.5 * o) }, twist: { rotate: 140 * o + "deg", scale: String(1 - 0.35 * o) }, flip: { rotate: "y 90deg" } }[d.style], S = "blur(" + 2 * o + "px)", P = r.getRootNode(), D = Es(r), I = (f = D.dataset) == null ? void 0 : f.k, B = Rs(r, D), C = r.getAttribute("aria-pressed") + "|" + r.dataset.act;
  r._warp = 1;
  const h = y.animate([{ scale: "1", rotate: "none", filter: "blur(0px)" }, { ...w, filter: S }], { duration: d.win, easing: Ct.exit, fill: "forwards" }), v = performance.now();
  h.finished.then(() => {
    const H = () => {
      var te, ee;
      const j = I ? D.isConnected ? D : (te = P.querySelector) == null ? void 0 : te.call(P, '[data-k="' + CSS.escape(I) + '"]') : D, K = j && As(j, B);
      if (K === r && r.getAttribute("aria-pressed") + "|" + r.dataset.act === C && performance.now() - v < 420) {
        requestAnimationFrame(H);
        return;
      }
      (((ee = K == null ? void 0 : K.matches) != null && ee.call(K, "button.tfIcon") ? K : r).firstElementChild || y).animate([{ ...w, filter: S }, { scale: "1", rotate: "none", filter: "blur(0px)" }], { duration: d.wout, easing: Ct[d.ease] }), h.cancel(), r._warp = 0;
    };
    H();
  });
}
function Hd(r, d, o, y, w) {
  if (r.getAnimations().forEach((C) => C.cancel()), r.style.left = y + "px", r.style.width = w + "px", Hn() || d === y && o === w) return;
  const S = kt.tabs, P = S.stretch / 100, D = (C, h) => ({ left: C + "px", width: h + "px" }), B = y > d ? D(d + (y - d) * (0.15 * (1 - P)), y + w - (d + (y - d) * (0.15 * (1 - P)))) : D(y, d + o - y - (d - y) * (0.15 * (1 - P)));
  r.animate([D(d, o), { offset: 0.5, ...B }, D(y, w)], { duration: S.dur, easing: Ct.standard });
}
function Vd(r) {
  const d = ":is(.themeChoice,.wbSegments,.tfHeightTabs,.hcSeg,.tfSeg)", o = (w) => w.querySelector(':scope>[aria-pressed="true"],:scope>[aria-checked="true"],:scope>.active'), y = (w, S) => S ? [...w.children].indexOf(S) : -1;
  r.addEventListener("click", (w) => {
    var $, Y, te;
    const S = (Y = ($ = w.target).closest) == null ? void 0 : Y.call($, d + ">button"), P = S == null ? void 0 : S.parentElement;
    if (!P || Hn() || S.disabled) return;
    const D = o(P);
    if (!D || D === S) return;
    const I = y(P, D), B = P.getBoundingClientRect(), C = D.getBoundingClientRect(), h = getComputedStyle(D).borderRadius, v = P.getRootNode(), f = Es(P), H = (te = f.dataset) == null ? void 0 : te.k, j = Rs(P, f), K = performance.now(), ce = () => {
      var be, Re, m;
      const ee = H && !f.isConnected ? (be = v.querySelector) == null ? void 0 : be.call(v, '[data-k="' + CSS.escape(H) + '"]') : f, ne = ee && As(ee, j), Q = (Re = ne == null ? void 0 : ne.matches) != null && Re.call(ne, d) ? o(ne) : null;
      if (!Q || y(ne, Q) === I) {
        performance.now() - K < 700 && requestAnimationFrame(ce);
        return;
      }
      const Me = ne.getBoundingClientRect(), qe = Q.getBoundingClientRect(), T = getComputedStyle(Q);
      (m = ne.querySelector(":scope>.mvSegInd")) == null || m.remove();
      const pe = document.createElement("span");
      pe.className = "mvSegInd", pe.style.cssText = "top:" + (qe.top - Me.top - ne.clientTop) + "px;height:" + qe.height + "px;border-radius:" + h + ";background:" + T.backgroundColor + ";box-shadow:" + T.boxShadow, getComputedStyle(ne).position === "static" && (ne.style.position = "relative"), ne.prepend(pe), ne.classList.add("mvSegMoving"), Hd(pe, C.left - B.left - ne.clientLeft, C.width, qe.left - Me.left - ne.clientLeft, qe.width), clearTimeout(ne._seg), ne._seg = setTimeout(() => {
        pe.remove(), ne.classList.remove("mvSegMoving");
      }, kt.tabs.dur + 20);
    };
    requestAnimationFrame(ce);
  }, !0);
}
const zd = (r) => getComputedStyle(r).placeItems.startsWith("end");
function ws(r) {
  const d = r.firstElementChild;
  if (Hn() || !d || d.classList.contains("still")) return;
  const o = kt.dialog;
  r.animate([{ opacity: 0, backdropFilter: "blur(0px)" }, { opacity: 1, backdropFilter: "blur(" + o.blur + "px)" }], { duration: o.open, easing: Ct.standard }), d.style.animation = "none", d.animate(zd(r) ? [{ transform: "translateY(100%)" }, { transform: "none" }] : [{ opacity: 0, transform: "scale(" + o.from / 100 + ")" }, { opacity: 1, transform: "none" }], { duration: o.open, easing: Ct[o.ease] }), [...(d.classList.contains("tfMorePair") && d.querySelector(".tfMore") || d).children].forEach((w, S) => w.animate([{ opacity: 0 }, { opacity: 1 }], { duration: o.open * 0.6, delay: o.open * 0.35 + S * 40, easing: Ct.standard, fill: "backwards" }));
}
const Od = "0.94.0", bi = "move_assistant", qd = "move_assistant", ys = "move_assistant_checkin_reminder";
function _d() {
  if (document.getElementById("move-assistant-inter")) return;
  const r = document.createElement("link");
  r.id = "move-assistant-inter", r.rel = "stylesheet", r.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(r);
}
class Gd extends HTMLElement {
  setConfig(d) {
    this._config = d || {};
  }
  static getStubConfig() {
    return {};
  }
  getCardSize() {
    return 12;
  }
  getGridOptions() {
    return { columns: "full", min_columns: 12 };
  }
  set hass(d) {
    const o = !this._hass;
    if (this._hass = d, o) {
      this._init();
      return;
    }
    this._app && d.states !== this._lastStates && (this._lastStates = d.states, this._app.updateStates(d.states));
  }
  connectedCallback() {
    var d;
    (d = this._app) == null || d.resume();
  }
  disconnectedCallback() {
    var d;
    (d = this._app) == null || d.suspend();
  }
  async _init() {
    _d();
    const d = this.shadowRoot || this.attachShadow({ mode: "open" });
    d.innerHTML = `<style>${sd}${ld}${dd}</style>${cd}`;
    const o = d.getElementById("app");
    o.style.opacity = "0";
    let y = null;
    try {
      const w = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: bi
      });
      y = (w == null ? void 0 : w.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(y), this._app = Nd(d, {
      data: y,
      save: (w) => this._save(w),
      fire: (w, S) => this._fire(w, S),
      ws: (w) => this._hass.callWS(w),
      subscribe: (w, S) => {
        var P, D;
        return (D = (P = this._hass) == null ? void 0 : P.connection) != null && D.subscribeMessage ? this._hass.connection.subscribeMessage(S, w) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var w, S;
        return Object.keys(((S = (w = this._hass) == null ? void 0 : w.services) == null ? void 0 : S.notify) || {}).sort();
      },
      setReminderAutomation: (w) => this._setReminderAutomation(w),
      setLight: (w) => this.classList.toggle("lightBody", w),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), Pd(d, o), Vd(d), this.isConnected || this._app.suspend(), o.style.transition = "opacity .2s ease", o.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var o;
    const d = (o = this._hass) == null ? void 0 : o.connection;
    d != null && d.subscribeMessage && d.subscribeMessage(
      (y) => {
        var S;
        const w = JSON.stringify((y == null ? void 0 : y.value) ?? null);
        w === this._lastSaved || w === this._pendingJson || (this._lastSaved = w, (S = this._app) == null || S.applyRemoteData(y.value));
      },
      { type: "frontend/subscribe_user_data", key: bi }
    ).catch(() => {
    });
  }
  _save(d) {
    this._pendingJson = JSON.stringify(d), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const o = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: bi,
          value: JSON.parse(o)
        }), this._lastSaved = o;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(d, o = {}) {
    var y, w;
    ((y = this._config) == null ? void 0 : y.events) !== !1 && ((w = this._hass) == null || w.callWS({
      type: "fire_event",
      event_type: qd,
      event_data: { action: d, ...o }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(d) {
    const o = `config/automation/config/${ys}`;
    if (!d) {
      try {
        await this._hass.callApi("DELETE", o);
      } catch (S) {
        if ((S == null ? void 0 : S.status_code) !== 404 && (S == null ? void 0 : S.status) !== 404) throw S;
      }
      return;
    }
    const y = (S) => `${S}:00`, w = window.location.pathname;
    await this._hass.callApi("POST", o, {
      id: ys,
      alias: "Move Assistant check-in reminder",
      description: "Created by Move Assistant. Change it in Move Assistant → Settings → Check-in.",
      mode: "single",
      triggers: [
        { trigger: "time", at: y(d.times.morning), id: "morning" },
        { trigger: "time", at: y(d.times.evening), id: "evening" }
      ],
      conditions: [],
      actions: [
        {
          action: `notify.${d.target}`,
          data: {
            title: "Move Assistant",
            message: "{{ 'Morning' if trigger.id == 'morning' else 'Evening' }} check-in is ready",
            data: { url: w, clickAction: w }
          }
        }
      ]
    });
  }
  _toggleFullscreen() {
    const d = document;
    if (d.fullscreenElement || d.webkitFullscreenElement) {
      (d.exitFullscreen || d.webkitExitFullscreen).call(d);
      return;
    }
    const o = this.requestFullscreen || this.webkitRequestFullscreen;
    Promise.resolve(o.call(this)).catch(
      () => this._toast("Full screen isn't available here")
    );
  }
  _toast(d) {
    var y;
    const o = (y = this.shadowRoot) == null ? void 0 : y.getElementById("toast");
    o && (o.textContent = d, o.classList.add("show"), setTimeout(() => o.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", Gd), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${Od} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
