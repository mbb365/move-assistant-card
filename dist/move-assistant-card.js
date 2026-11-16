const ed = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn,.tfSeg>button,.tfMoreSwitch>button){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', td = `#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)){transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}}#app.house #homeView{overflow-anchor:none}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab{display:none}.tfIcon.art{background-size:cover;background-position:center}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}@media (prefers-reduced-motion:reduce){.tfMorePair{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 20px 10px}.tfAreaPanel .workoutPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}@media (max-width:620px){.tfMore.wide{width:100%;padding:20px 16px;gap:20px}}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}#app.house :is(.settingsSelect,.addInput){border:1px solid var(--muted)}#app.house{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%23d9d9d9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house.light{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%2326221e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house select.settingsSelect{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 44px 0 16px;background-image:var(--select-chev);background-repeat:no-repeat;background-position:right 16px center;background-size:16px 16px}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.house :is(.tfIcon,.activityRowIcon,.tfAreaIcon,.tfRoomIcon){--chip-hi:.0375;background-image:linear-gradient(180deg,#ffffff08,#fff0)!important;box-shadow:inset 0 1px rgba(255,255,255,var(--chip-hi)),inset 0 -1px color-mix(in srgb,currentColor 3%,transparent),inset 0 -3px 6px color-mix(in srgb,currentColor 3.5%,transparent)}#app.house :is(.on[data-light] .tfIcon,.tfIcon.on[data-light],.tfACTile .tfIcon[data-light],.on[data-tone=alarm] .tfIcon,.tfIcon[data-light]){--chip-hi:.1375}#app.house #settingsView .toggleList{border-radius:var(--r-card);padding-block:4px}#app.house #settingsView .toggleRow{padding-left:18px;padding-right:18px}#app.house #settingsView .toggleRow:not([hidden])~.toggleRow:before{left:18px}#app.house .view{margin-left:0}#app.house{--font:Geist,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-family:var(--font)}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:inset 0 0 0 1px var(--line)}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(600px,85dvh)}@media (max-width:620px){#app .tfMoreBackdrop{place-items:end center;padding:0 16px max(16px,env(safe-area-inset-bottom,0px))}#app .tfMoreBackdrop .tfMorePair{width:100%;max-height:85dvh}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){width:100%;border-radius:34px;box-shadow:inset 0 0 0 1px var(--line),0 10px 30px #00000047}#app .tfMoreBackdrop .tfMore{padding-top:10px;outline:none}#app .tfMoreBackdrop .tfMore:before{content:"";display:block;position:sticky;top:10px;z-index:2;flex:none;width:36px;height:5px;margin:0 auto;border-radius:3px;background:var(--line)}#app .tfMoreBackdrop .tfMore [data-more-close]{display:none}}`, nd = '#app .mvPv{position:relative;transform:perspective(var(--pv-persp)) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--sc,1));transition:transform var(--pv-ret) var(--pv-ease)}#app .mvPv.mvMoving{transition:transform 70ms linear}#app .mvPv:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;opacity:0;mix-blend-mode:soft-light;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,var(--pv-shine)),transparent var(--pv-size));transition:opacity var(--pv-ret) ease}#app .mvPv.mvLit:after{opacity:1}#app .tfBar{--mv-c:var(--light-soft,var(--primary));transform-origin:center;transition:box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}#app .tfBar.mvHover{box-shadow:0 0 var(--ab-blur) var(--ab-spread) color-mix(in srgb,var(--mv-c) var(--ab-str),transparent);transition-duration:var(--ab-in)}#app .tfBar.mvHold{box-shadow:0 0 var(--ab-blur2) var(--ab-spread2) color-mix(in srgb,var(--mv-c) var(--ab-str2),transparent);transform:var(--ab-grow);transition-duration:var(--ab-in)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>:is(svg,ha-icon,ha-state-icon,span){transition:scale var(--ih-dur) var(--ih-ease)}@media (hover:hover){#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-s)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover:before{opacity:1}}:where(#app button.tfIcon,#app .tfBack,#app .tfEditChip,#app .tfTrayBtn,#app [data-wb=graph-close]){position:relative}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;background:color-mix(in srgb,currentColor var(--ih-tint),transparent);opacity:0;transition:opacity var(--ih-dur) var(--ih-ease)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):active>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-p)}#app .mvSegInd{position:absolute;z-index:0;pointer-events:none}#app .mvSegMoving>button{position:relative;z-index:1;background-color:transparent!important;box-shadow:none!important;transition:none!important}#app .tfMoreBackdrop{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}#app .toast .mvTick{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--mv-ok);color:#fff}#app .toast .mvTick svg{width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}#app .toast .mvToastText{font-weight:600}#app .toast .toastAction{font-size:16px;margin-left:2px}#app .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}#app{--ol-l:68%;--mv-ok:#4cc38a}#app.light{--ol-l:48%;--mv-ok:#1f7a4d}#app .tfAreaPanel:has(>.mvEdge){isolation:isolate;position:relative}#app .mvEdge,#app .mvEdgeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity var(--ol-in) ease-out}#app .mvEdgeFill{z-index:-1;background:hsl(var(--ol-h) 97% var(--ol-l));mix-blend-mode:soft-light;opacity:clamp(0,calc(var(--ol-fill) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-fill));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app .mvEdge{z-index:5}#app .mvEdge:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l));opacity:clamp(0,calc(var(--ol-border) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-border));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%));mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%))}#app .mvEdge>i{position:absolute;top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;border-radius:inherit;mix-blend-mode:plus-lighter;opacity:clamp(0,calc(var(--ol-glow) * (var(--edge-proximity,0) - var(--ol-esens)) / (100 - var(--ol-esens))),var(--ol-glow));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}#app .mvEdge>i:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;--s:var(--ol-size);box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l) / 60%),inset 0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),inset 0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),inset 0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(22.4px*var(--s)) calc(1.6px*var(--s)) hsl(var(--ol-h) 97% var(--ol-l) / 10%)}#app :not(.mvLitEdge)>:is(.mvEdge,.mvEdgeFill){opacity:0;transition:opacity var(--ol-out) ease-out}@media (prefers-reduced-motion:reduce){#app .mvPv{transform:none!important}#app .mvPv:after{display:none}#app .tfBar.mvHold{transform:none}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>*{scale:none!important}}', ad = `<main id="app"><div class="shell">
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
        <div class="activityIcon" aria-hidden="true" data-icon="activity"></div>
        <div class="activityTitle">Activity</div>
      </div>
      <div class="activityRows">
        <div class="activityRow" id="stepsRow">
          <div class="activityRowIcon" aria-hidden="true" data-icon="steps"></div>
          <div><div class="activityRowName">Steps</div><div class="activityRowMeta" id="stepsMeta">Set up in Settings</div></div>
        </div>
        <div class="activityRow" id="moodRow">
          <div class="activityRowIcon" aria-hidden="true" data-icon="mood"></div>
          <div><div class="activityRowName">Mood</div><div class="activityRowMeta" id="moodMeta">—</div></div>
        </div>
        <div class="activityRow" id="energyLevelRow">
          <div class="activityRowIcon" aria-hidden="true" data-icon="energy"></div>
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
`, on = {
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
}, $e = (r) => r < 0 ? 0 : r > 1 ? 1 : r, ds = (r, d, a) => r + (d - r) * a, hi = (r) => {
  const d = String(r || "#000000").trim().replace("#", ""), a = d.length === 3 ? d.split("").map((y) => y + y).join("") : d;
  return [0, 2, 4].map((y) => parseInt(a.slice(y, y + 2), 16) || 0);
}, od = (r) => "#" + r.map((d) => Math.round(Math.max(0, Math.min(255, d))).toString(16).padStart(2, "0")).join(""), cs = {}, Ee = (r, d, a) => {
  const y = r + d + a;
  return cs[y] || (cs[y] = od(hi(r).map((w, C) => w + (hi(d)[C] - w) * a)));
}, ps = {}, no = (r) => ps[r] || (ps[r] = hi(r)), ci = (r, d, a, y) => (w) => {
  if (w <= 0) return 0;
  if (w >= 1) return 1;
  let C = 0, P = 1, F = w;
  for (let I = 0; I < 18; I++)
    F = (C + P) / 2, 3 * (1 - F) * (1 - F) * F * r + 3 * (1 - F) * F * F * a + F * F * F < w ? C = F : P = F;
  return 3 * (1 - F) * (1 - F) * F * d + 3 * (1 - F) * F * F * y + F * F * F;
}, id = { std: ci(0.2, 0, 0, 1), acc: ci(0.3, 0, 1, 1), dec: ci(0, 0, 0, 1) };
function vs(r, d) {
  const a = String(r || "");
  return (a === "sunny" || a === "clear-night" ? "clear" : a === "partlycloudy" ? "partly" : a === "fog" ? "fog" : a === "lightning" || a === "lightning-rainy" ? "storm" : a === "snowy" || a === "snowy-rainy" ? "snow" : a === "rainy" || a === "pouring" || a === "hail" ? "rain" : "cloudy") + "/" + (a === "clear-night" || d ? "night" : "day");
}
function fs(r) {
  const d = { clear: [r.skyClearDay, r.skyClearNight], cloudy: [r.skyCloudyDay, r.skyCloudyNight], rain: [r.skyRainDay, r.skyRainNight], snow: [r.skySnowDay, r.skySnowNight], fog: [r.skyFogDay, r.skyFogNight] };
  return d.partly = [Ee(d.clear[0], d.cloudy[0], 0.12), Ee(d.clear[1], d.cloudy[1], 0.12)], d.storm = [Ee(d.rain[0], "#000000", 0.22), Ee(d.rain[1], "#000000", 0.22)], d;
}
const vi = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], fi = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], xi = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function us(r, d = on) {
  const a = { ...on, ...d }, y = fs(a), w = String(r).split("/"), C = y[w[0]] ? w[0] : "clear", P = w[1] === "night", F = y[C][P ? 1 : 0], I = {
    night: P,
    clearness: C === "clear" ? 1 : C === "partly" ? 0.7 : 0.25,
    sky: F,
    skyStops: [F],
    skyT: 0,
    sun: { x: 45, y: P ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: P ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: P ? 1 : 0 },
    stars: vi.map(() => ({ o: 0 })),
    rain: fi.map(() => ({ o: 0, dy: -16 })),
    snow: xi.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, R = (S) => vi.map(() => ({ o: S }));
  return C === "clear" ? P ? (I.moon.o = 1, I.stars = R(1)) : I.sun.o = 1 : C === "partly" ? (I.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: P ? 1 : 0 }, P ? (I.moon = { x: 34, y: 33, d: 48, o: 1 }, I.stars = R(0.7)) : I.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : C === "cloudy" || C === "fog" ? (I.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: P ? 1 : 0 }, P ? I.moon = { x: 40, y: 36, d: 40, o: 0 } : I.sun = { x: 40, y: 36, r: 20, o: 0 }) : (I.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, P ? I.moon = { x: 38, y: 28, d: 36, o: 0 } : I.sun = { x: 38, y: 28, r: 18, o: 0 }, C === "snow" ? I.snow = xi.map(() => ({ o: 1, dy: 0 })) : I.rain = fi.map((S, u) => ({ o: C === "storm" && u === 1 ? 0 : 1, dy: 0 })), C === "storm" && (I.bolt = { o: 1, dy: 0 })), I;
}
const ms = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function rd(r, d, a, y = on, w = !1) {
  const C = { ...on, ...y }, P = (g, h) => g > 0.01 && h > 0.01 ? "stay" : g > 0.01 ? "leave" : h > 0.01 ? "enter" : "none", F = (g, h, D, G) => {
    const Y = g[0] + h * G, de = g[1] - (D - 1 - h) * G;
    return id[g[2]]($e((a - Y) / Math.max(1e-3, de - Y)));
  }, I = (g, h, D, G = 0, Y = 1, de = 0) => {
    const K = P(g.o, h.o);
    if (K === "none") return { ...h, o: 0 };
    const W = F(ms[D][K], G, Y, de), J = {};
    for (const X in h) J[X] = w && K !== "stay" && X !== "o" ? K === "leave" ? g[X] : h[X] : ds(g[X], h[X], W);
    return J;
  }, R = F(ms.sky, 0, 1, 0);
  let S, u;
  if (r.night !== d.night) {
    const g = Math.min(r.clearness, d.clearness), h = Ee(Ee(r.sky, d.sky, 0.5), C.dusk, 0.6 * g);
    S = R < 0.5 ? Ee(r.sky, h, R * 2) : Ee(h, d.sky, R * 2 - 1), u = g > 0.5 ? [r.sky, C.dusk, d.sky] : [r.sky, d.sky];
  } else
    S = Ee(r.sky, d.sky, R), u = [r.sky, d.sky];
  return {
    night: a < 0.5 ? r.night : d.night,
    clearness: ds(r.clearness, d.clearness, a),
    sky: S,
    skyStops: u,
    skyT: R,
    sun: I(r.sun, d.sun, "body"),
    moon: I(r.moon, d.moon, "body"),
    cloud: I(r.cloud, d.cloud, "cloud"),
    stars: d.stars.map((g, h) => I(r.stars[h], g, "fx", h, d.stars.length, 0.05)),
    rain: d.rain.map((g, h) => I(r.rain[h], g, "fx", h, d.rain.length, 0.05)),
    snow: d.snow.map((g, h) => I(r.snow[h], g, "fx", h, d.snow.length, 0.05)),
    bolt: I(r.bolt, d.bolt, "fx")
  };
}
const sd = [
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
], Xe = (r, d) => (sd[(d & 7) * 8 + (r & 7)] + 0.5) / 64, ld = 0, bi = 1, wi = 2, yi = 3, ki = 4, Ze = 5, Dn = 6, Gt = 7, Si = 8, oo = (r, d) => d <= 0.6665 && ((r - 0.5) * (r - 0.5) + (d - 0.2877) * (d - 0.2877) <= 0.0824 || (r - 0.25) * (r - 0.25) + (d - 0.416) * (d - 0.416) <= 0.0625 || (r - 0.791) * (r - 0.791) + (d - 0.458) * (d - 0.458) <= 0.0437 || r >= 0.25 && r <= 0.791 && d >= 0.416), dd = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], cd = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((r) => [r[0] * 13 / 11, r[1] * 28 / 24]), xs = (r, d, a) => {
  let y = !1;
  for (let w = 0, C = r.length - 1; w < r.length; C = w++) {
    const P = r[w], F = r[C];
    P[1] > a != F[1] > a && d < (F[0] - P[0]) * (a - P[1]) / (F[1] - P[1]) + P[0] && (y = !y);
  }
  return y;
};
function pd(r, { size: d = 90, px: a = 2, oneBit: y = !1, colors: w = on, ink: C = "#26221e", paper: P = "#fbf9f6", clock: F = 0, idle: I = !1 } = {}) {
  const R = { ...on, ...w }, S = Math.sin, u = Math.PI * 2, g = Math.max(6, Math.round(d / a)), h = g / 90, D = I ? Math.floor(F / 100) * 100 : 0, G = I ? S(u * D / 3600) : 0, Y = I ? 1.8 * S(u * D / 6400) : 0, de = I ? 0.9 * S(u * D / 4100) : 0, K = I ? 0.8 * S(u * D / 5200) : 0, W = D / 3400 % 1, J = I && r.bolt.o > 0.5 && (W < 0.04 || W > 0.08 && W < 0.11), X = new Array(g * g), Q = new Uint8Array(g * g), Z = (p, x, b, M, _) => {
    b == null || p < 0 || x < 0 || p >= g || x >= g || (M >= 1 || M > Xe(p + 5, x + 3)) && (X[x * g + p] = b, Q[x * g + p] = _);
  }, Me = (p, x, b, M) => {
    for (let _ = Math.max(0, Math.floor(x - b) - 1); _ <= Math.min(g - 1, x + b + 1); _++) for (let H = Math.max(0, Math.floor(p - b) - 1); H <= Math.min(g - 1, p + b + 1); H++) M(H, _, H + 0.5 - p, _ + 0.5 - x);
  }, Oe = r.skyStops || [r.sky], T = r.skyT || 0;
  for (let p = 0; p < g; p++) {
    const x = r.night ? $e(1 - (p + 0.5) / (g * 0.7)) * 0.85 : $e(((p + 0.5) / g - 0.35) / 0.65) * 0.85;
    for (let b = 0; b < g; b++) {
      let M = Oe[0];
      if (Oe.length > 1) {
        const _ = T * (Oe.length - 1), H = Math.min(Oe.length - 2, Math.floor(_));
        M = _ - H > Xe(b, p) ? Oe[H + 1] : Oe[H];
      }
      x > Xe(b + 2, p + 5) && (M = r.night ? Ee(M, "#000000", 0.28) : Ee(M, "#ffffff", 0.2)), X[p * g + b] = J ? Ee(M, "#ffffff", 0.25) : M;
    }
  }
  if (r.sun.o > 0.01) {
    const p = r.sun.x * h, x = r.sun.y * h, b = Math.max(1, r.sun.r * h);
    if (I) {
      const M = b * (1.45 + 0.06 * G), _ = Ee(R.sun, "#ffffff", 0.55);
      if (Me(p, x, M, (H, z, B, q) => {
        const fe = Math.sqrt(B * B + q * q);
        fe > b && fe < M && Z(H, z, _, 0.26 * (1 - (fe - b) / (M - b)) * r.sun.o, ld);
      }), r.sun.o > 0.5) {
        const H = Math.floor(D / 500) % 2, z = Math.max(1, b * 0.22);
        for (let B = 0; B < 8; B++) if (B % 2 === H) for (let q = b + 1.5; q < b + 1.5 + z; q += 0.7) Z(Math.floor(p + Math.cos(B * Math.PI / 4) * q), Math.floor(x + Math.sin(B * Math.PI / 4) * q), R.sun, r.sun.o, Si);
      }
    }
    Me(p, x, b, (M, _, H, z) => {
      if (H * H + z * z > b * b) return;
      const B = ((H * 0.643 + z * 0.766) / b + 1) / 2;
      Z(M, _, $e((B - 0.62) / 0.38) > Xe(M, _) ? R.sunEdge : R.sun, r.sun.o, bi);
    });
  }
  if (vi.forEach((p, x) => {
    const b = r.stars[x].o;
    if (b < 0.01) return;
    const M = Math.floor(p[0] * h), _ = Math.floor(p[1] * h), H = I ? (Math.floor(D / 300) + x * 3) % 6 : 0;
    if (H === 5) return;
    const z = Math.round(p[2] * h * (H === 4 ? 0.3 : H < 2 ? 1 : 0.6));
    Z(M, _, R.star, b, Gt);
    for (let B = 1; B <= z; B++) {
      const q = B === z && z > 1 ? Ee(R.star, r.sky, 0.5) : R.star;
      Z(M - B, _, q, b, Gt), Z(M + B, _, q, b, Gt), Z(M, _ - B, q, b, Gt), Z(M, _ + B, q, b, Gt);
    }
  }), r.moon.o > 0.01) {
    const p = Math.max(1.5, r.moon.d * h * 0.37), x = r.moon.x * h, b = r.moon.y * h + (I && K > 0.4 ? -1 : 0), M = x + 0.547 * p, _ = b - 0.503 * p, H = 0.82 * p, z = Ee(R.moon, "#ffffff", 0.6);
    Me(x, b, p, (B, q, fe, we) => {
      if (fe * fe + we * we > p * p) return;
      const It = B + 0.5 - M, Wt = q + 0.5 - _;
      It * It + Wt * Wt <= H * H || Z(B, q, $e((we + p) / (2 * p) * 1.1 - 0.1) > Xe(B, q) ? R.moon : z, r.moon.o, wi);
    });
  }
  const ce = Math.max(2, Math.round(15.65 * h)), be = Math.max(1, Math.round(5.87 * h * 0.5));
  fi.forEach((p, x) => {
    const b = r.rain[x];
    let M = b.dy, _ = b.o;
    if (_ < 0.01) return;
    if (I) {
      const B = (D / 950 + x / 3) % 1;
      M += -5 + B * 14, _ *= B < 0.18 ? B / 0.18 : B > 0.72 ? (1 - B) / 0.28 : 1;
    }
    const H = (p[0] + 3 + Y) * h, z = (p[1] + M) * h;
    for (let B = 0; B < ce; B++) for (let q = 0; q < be; q++) Z(Math.floor(H - 0.208 * B) + q, Math.floor(z) + B, R.rain, _, ki);
  });
  const Re = Math.max(0, Math.round(7.34 * h / 2.6));
  if (xi.forEach((p, x) => {
    const b = r.snow[x];
    let M = b.dy, _ = 0, H = b.o;
    if (H < 0.01) return;
    if (I) {
      const q = (D / 3200 + x / 5) % 1;
      M += -6 + q * 14, _ = 1.5 * S(u * (q * 1.5 + x / 5)), H *= q < 0.2 ? q / 0.2 : q > 0.75 ? (1 - q) / 0.25 : 1;
    }
    const z = Math.floor((p[0] + 3.67 + _ + Y) * h), B = Math.floor((p[1] + 3.67 + M) * h);
    Z(z, B, R.snow, H, Ze);
    for (let q = 1; q <= Re; q++)
      Z(z - q, B, R.snow, H, Ze), Z(z + q, B, R.snow, H, Ze), Z(z, B - q, R.snow, H, Ze), Z(z, B + q, R.snow, H, Ze), Re > 1 && q < Re && (Z(z - q, B - q, R.snow, H, Ze), Z(z + q, B - q, R.snow, H, Ze), Z(z - q, B + q, R.snow, H, Ze), Z(z + q, B + q, R.snow, H, Ze));
  }), r.bolt.o > 0.01)
    if (g >= 30) {
      const p = 39 + Y, x = 50 + r.bolt.dy;
      for (let b = Math.floor(x * h); b <= (x + 28) * h; b++) for (let M = Math.floor(p * h); M <= (p + 13) * h; M++)
        xs(cd, (M + 0.5) / h - p, (b + 0.5) / h - x) && Z(M, b, R.sun, r.bolt.o, Dn);
    } else {
      const p = g / 18, x = 7, b = 10 + Math.round(r.bolt.dy * 0.2);
      dd.forEach((M, _) => M.split("").forEach((H, z) => {
        if (H !== "#") return;
        const B = Math.floor((x + z) * p), q = Math.floor((b + _) * p);
        for (let fe = q; fe < Math.max(q + 1, Math.floor((b + _ + 1) * p)); fe++) for (let we = B; we < Math.max(B + 1, Math.floor((x + z + 1) * p)); we++) Z(we, fe, R.sun, r.bolt.o, Dn);
      }));
    }
  if (r.cloud.o > 0.01) {
    const p = Math.max(3, r.cloud.w * h), x = p * 0.6665, b = (r.cloud.x + Y) * h - p / 2, M = (r.cloud.y + de) * h - x / 2, _ = Ee(R.cloudDay, R.cloudNight, Math.round(r.cloud.f * 4) / 4), H = Ee(_, "#000000", 0.16);
    for (let z = Math.max(0, Math.floor(M) - 1); z <= Math.min(g - 1, M + x + 1); z++) for (let B = Math.max(0, Math.floor(b) - 1); B <= Math.min(g - 1, b + p + 1); B++) {
      const q = (B + 0.5 - b) / p, fe = (z + 0.5 - M) / p;
      oo(q, fe) && Z(B, z, !oo(q, fe + 1 / p) || $e((fe - 0.42) / 0.25) * 0.8 > Xe(B, z) ? H : _, r.cloud.o, yi);
    }
  }
  return bs(X, Q, g, g, { oneBit: y, ink: C, paper: P, snowInk: !r.night });
}
function bs(r, d, a, y, { oneBit: w, ink: C, paper: P, snowInk: F }) {
  const I = new Uint8ClampedArray(a * y * 4), R = no(C), S = no(P);
  for (let u = 0; u < y; u++) for (let g = 0; g < a; g++) {
    const h = u * a + g, D = d[h];
    if (r[h] == null) continue;
    let G = no(r[h]);
    if (w) {
      let Y;
      D === ki || D === Si ? Y = !0 : D === Ze ? Y = F : D === Gt || D === Dn ? Y = !1 : Y = Math.round((0.2126 * G[0] + 0.7152 * G[1] + 0.0722 * G[2]) / 255 * 4) / 4 <= Xe(g, u), (D === bi || D === wi || D === yi || D === Dn) && (g > 0 && d[h - 1] !== D || g < a - 1 && d[h + 1] !== D || u > 0 && d[h - a] !== D || u < y - 1 && d[h + a] !== D) && (Y = !0), G = Y ? R : S;
    }
    I[h * 4] = G[0], I[h * 4 + 1] = G[1], I[h * 4 + 2] = G[2], I[h * 4 + 3] = 255;
  }
  return { w: a, h: y, data: I };
}
const ud = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, md = (r) => vs(r, !1).split("/")[0], pi = (r) => () => {
  r |= 0, r = r + 1831565813 | 0;
  let d = Math.imul(r ^ r >>> 15, 1 | r);
  return d = d + Math.imul(d ^ d >>> 7, 61 | d) ^ d, ((d ^ d >>> 14) >>> 0) / 4294967296;
}, gd = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", hd = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", vd = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", fd = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", xd = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], bd = [".##", "##.", ".#.", "#.."];
function ws(r, { width: d, height: a, colors: y, wave: w = 0.38, soft: C = 6, glow: P = 0.6 }) {
  const F = { ...on, dawn: "#e5a77e", ...y }, I = fs(F), R = d, S = a, u = R / 6, g = u / 2, h = Math.PI * 2, D = r.length ? r : [{ cond: "cloudy", night: !1 }], G = [...Array(12)].map((W, J) => {
    const X = D[Math.min(J, D.length - 1)], Q = md(X.cond), Z = J % 2 === 1;
    return { cond: X.cond, k: Q, night: Z, sky: I[Q][Z ? 1 : 0], cover: ud[Q] };
  }), Y = (W) => S * (0.5 - w * Math.cos(h * (W / u - 0.25)));
  return { C: F, S: G, W: R, H: S, cw: u, sw: g, TAU: h, yb: Y, side: (W, J, X) => {
    const Q = (W ? Y(J) - X : X - Y(J)) / Math.max(3, C * 1.4) + 0.5;
    return Q <= 0 ? 0 : Q >= 1 ? 1 : Q;
  }, glowAt: (W) => {
    const J = ((W / u - 0.25) % 1 + 1) % 1, X = Math.max(0, Math.min(5, Math.round(W / u - 0.25))), Q = Math.max(0, Math.min(5, Math.round(W / u - 0.75))), Z = 1 - (G[2 * X].cover + G[2 * Q + 1].cover) / 2, Me = Math.sin(Math.PI * Math.min(1, Math.max(0, Y(W) / S)));
    return { c: J < 0.5 ? F.dusk : F.dawn, a: P * (0.2 + 0.8 * Z) * Me * Me };
  }, soft: C, tw: u * 0.3, sy: S / 90 };
}
function ys(r, { clock: d = 0, ambient: a = !1, seed: y = 1 }) {
  const { S: w, sw: C, side: P, C: F, TAU: I, sy: R } = r, S = d, u = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return w.forEach((g, h) => {
    const D = pi(y * 977 + h * 131 + 7), G = (h + 0.5) * C, Y = g.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[g.k] : 0;
    for (let de = 0; de < Y; de++) {
      const K = G + (D() - 0.5) * C * 1.6, W = (6 + D() * 76) * R, J = D() < 0.35, X = 1.8 + D() * 1.6, Q = P(!0, K, W) * (J ? 0.95 : 0.7) * (a ? 0.6 + 0.4 * Math.sin(I * S / 2600 + de * 1.7 + h) : 1);
      Q >= 0.03 && u.stars.push({ x: K, y: W, big: J, size: X, o: Q });
    }
    if (!g.night && (g.k === "clear" || g.k === "partly")) {
      const de = G + (D() - 0.5) * C * 0.3, K = Math.min(15, C * 0.29);
      u.suns.push({ x: de, y: 32 * R, rad: K, halo: K * 2.8 * (a ? 1 + 0.07 * Math.sin(I * S / 3600 + h) : 1) });
    }
    if (g.night && (g.k === "clear" || g.k === "partly")) {
      const de = Math.min(0.78, C * 0.55 / 34), K = G - 23 * de + (D() - 0.5) * C * 0.2;
      u.moons.push({ x: K + 23 * de, y: (4 + (a ? 0.8 * Math.sin(I * S / 5200 + h) : 0)) * R + 23 * de, d: 46 * de });
    }
  }), w.forEach((g, h) => {
    const D = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[g.k];
    if (!D) return;
    const G = pi(y * 577 + h * 71 + 3), Y = (h + 0.5) * C, de = g.k === "rain" || g.k === "storm" || g.night ? F.cloudNight : F.cloudDay, K = g.night ? 0.82 : g.k === "storm" ? 0.75 : 1;
    for (let W = 0; W < D; W++) {
      const J = C / 46 * (g.k === "partly" ? 0.85 : 0.75 + G() * 0.55), X = Y + (g.k === "partly" ? C * 0.12 : (G() - 0.5) * C * 1.05), Q = (g.k === "partly" ? 40 : 6 + G() * 26) * R, Z = a ? 2.5 * Math.sin(I * S / 9e3 + h * 1.3 + W * 2.1) : 0, Me = a ? 0.9 * Math.sin(I * S / 6100 + h + W) : 0;
      u.clouds.push({ x: X - 23 * J + Z, y: Q - 15.33 * J + Me, w: 46 * J, h: 30.66 * J, fill: de, o: K * (D > 1 && W === 0 ? 0.85 : 1) });
    }
  }), w.forEach((g, h) => {
    const D = pi(y * 313 + h * 29 + 11), G = (h + 0.5) * C, Y = g.cond === "pouring" ? 16 : g.cond === "rainy" || g.cond === "hail" ? 9 : g.cond === "lightning-rainy" ? 12 : g.cond === "snowy-rainy" ? 5 : 0;
    for (let K = 0; K < Y; K++) {
      let W = G + (D() - 0.5) * C * 1.05, J = 44 + D() * 36, X = 1;
      if (a) {
        const Z = ((J - 44 + S * 0.04) % 36 + 36) % 36;
        W -= 0.21 * (Z - (J - 44)), J = 44 + Z, X = Math.min(1, Z / 6, (36 - Z) / 6);
      }
      J *= R;
      const Q = P(g.night, W, J) * X;
      Q >= 0.05 && u.drops.push({ x: W, y: J, o: Q });
    }
    const de = g.cond === "snowy" ? 11 : g.cond === "snowy-rainy" ? 6 : 0;
    for (let K = 0; K < de; K++) {
      let W = G + (D() - 0.5) * C * 1.05, J = 40 + D() * 44, X = 1;
      if (a) {
        const Z = ((J - 40 + S * 9e-3) % 44 + 44) % 44;
        J = 40 + Z, W += 1.6 * Math.sin(I * S / 2800 + K * 1.9 + h), X = Math.min(1, Z / 6, (44 - Z) / 6);
      }
      J *= R;
      const Q = P(g.night, W, J) * X;
      Q >= 0.05 && u.flakes.push({ x: W, y: J, o: Q });
    }
    if (g.k === "fog") {
      const K = g.night ? "#c8ccd6" : "#ffffff", W = g.night ? 0.28 : 0.62, J = a ? 4 * Math.sin(I * S / 8e3 + h) : 0;
      for (let X = 0; X < 4; X++) u.fogs.push({ x: G - C * 0.75 + X % 2 * C * 0.18 + (X % 2 ? J : -J), y: (30 + X * 13) * R, w: C * 1.3, c: K, a: W });
    }
    if (g.k === "storm") {
      const K = (S / 3400 + h * 0.37) % 1;
      u.bolts.push({ x: G + (D() - 0.5) * C * 0.3 - 5, y: 36 * R, o: a && !(K < 0.05 || K > 0.09 && K < 0.12) ? 0.8 : 1 });
    }
  }), u;
}
function wd(r, d, a, y, w, C, P, F) {
  const { S: I, C: R, cw: S, yb: u, glowAt: g, soft: h, tw: D, sy: G } = r, Y = new Array(a * y), de = new Uint8Array(a * y), K = new Uint8Array(a * y), W = (p, x, b, M, _) => {
    b == null || p < 0 || x < 0 || p >= a || x >= y || (M >= 1 || M > Xe(p + 5, x + 3)) && (Y[x * a + p] = b, de[x * a + p] = _);
  }, J = (p, x, b, M) => {
    for (let _ = Math.max(0, Math.floor(x - b) - 1); _ <= Math.min(y - 1, x + b + 1); _++) for (let H = Math.max(0, Math.floor(p - b) - 1); H <= Math.min(a - 1, p + b + 1); H++) M(H, _, H + 0.5 - p, _ + 0.5 - x);
  }, X = (p, x, b) => {
    for (let _ = 0; _ < p.length - 1; _++) {
      const H = (_ + x) * S;
      if (b < H - D / 2) return [p[_], p[_], 0];
      if (b <= H + D / 2) return [p[_], p[_ + 1], (b - H + D / 2) / D];
    }
    const M = p[p.length - 1];
    return [M, M, 0];
  }, Q = I.filter((p) => !p.night).map((p) => p.sky), Z = I.filter((p) => p.night).map((p) => p.sky), Me = h / C, Oe = 16 * G / C;
  for (let p = 0; p < a; p++) {
    const x = (p + 0.5) * w, b = u(x) / C, M = X(Q, 0.75, x), _ = X(Z, 1.25, x), H = g(x);
    for (let z = 0; z < y; z++) {
      const B = Xe(p, z), q = z + 0.5 - b, fe = (Me > 0.01 ? $e(0.5 + q / Me) : q > 0 ? 1 : 0) > B;
      let we = fe ? M[2] > B ? M[1] : M[0] : _[2] > B ? _[1] : _[0];
      (fe ? $e(((z + 0.5) / y - 0.45) / 0.55) * 0.7 : $e(1 - (z + 0.5) / (y * 0.55)) * 0.7) > Xe(p + 2, z + 5) && (we = fe ? Ee(we, "#ffffff", 0.18) : Ee(we, "#000000", 0.25)), fe && q >= 0 && q < Oe && H.a * 1.3 * (1 - q / Oe) > Xe(p + 6, z + 1) && (we = H.c), Y[z * a + p] = we, K[z * a + p] = fe ? 0 : 1;
    }
  }
  const T = Ee(R.sun, "#ffffff", 0.55), ce = Ee(R.moon, "#ffffff", 0.6);
  d.stars.forEach((p) => {
    const x = Math.floor(p.x / w), b = Math.floor(p.y / C);
    if (x < 0 || b < 0 || x >= a || b >= y || !K[b * a + x] || p.o < 0.15) return;
    const M = p.o > 0.45 ? R.star : Ee(R.star, Y[b * a + x], 0.5), _ = p.big && p.o > 0.6 ? Math.floor(p.size / w) : 0;
    W(x, b, M, 1, Gt);
    for (let H = 1; H <= _; H++) [[x - H, b], [x + H, b], [x, b - H], [x, b + H]].forEach((z) => {
      z[0] >= 0 && z[1] >= 0 && z[0] < a && z[1] < y && K[z[1] * a + z[0]] && W(z[0], z[1], M, 1, Gt);
    });
  }), d.suns.forEach((p) => {
    const x = Math.max(1.5, p.rad / w), b = p.x / w, M = p.y / C, _ = p.halo / w * 0.85;
    if (J(b, M, _, (H, z, B, q) => {
      const fe = Math.sqrt(B * B + q * q);
      fe > x && fe < _ && !K[z * a + H] && W(H, z, T, 0.3 * (1 - (fe - x) / (_ - x)), 0);
    }), F) {
      const H = Math.floor(P / 500) % 2, z = Math.max(1, x * 0.3);
      for (let B = 0; B < 8; B++) if (B % 2 === H) for (let q = x + 1.2; q < x + 1.2 + z; q += 0.7) W(Math.floor(b + Math.cos(B * Math.PI / 4) * q), Math.floor(M + Math.sin(B * Math.PI / 4) * q), R.sun, 1, Si);
    }
    J(b, M, x, (H, z, B, q) => {
      B * B + q * q <= x * x && W(H, z, $e(((q / x + 1) / 2 - 0.6) / 0.4) > Xe(H, z) ? R.sunEdge : R.sun, 1, bi);
    });
  }), d.moons.forEach((p) => {
    const x = Math.max(1.5, p.d * 0.37 / w), b = p.x / w, M = p.y / C, _ = b + 0.547 * x, H = M - 0.503 * x, z = 0.82 * x;
    J(b, M, x, (B, q, fe, we) => {
      if (fe * fe + we * we > x * x) return;
      const It = B + 0.5 - _, Wt = q + 0.5 - H;
      It * It + Wt * Wt > z * z && W(B, q, $e((we + x) / (2 * x) * 1.1 - 0.1) > Xe(B, q) ? R.moon : ce, 1, wi);
    });
  }), d.clouds.forEach((p) => {
    const x = Math.max(3, p.w / w), b = x * 0.6665, M = p.x / w, _ = p.y / C, H = Ee(p.fill, "#000000", 0.16);
    for (let z = Math.max(0, Math.floor(_) - 1); z <= Math.min(y - 1, _ + b + 1); z++) for (let B = Math.max(0, Math.floor(M) - 1); B <= Math.min(a - 1, M + x + 1); B++) {
      const q = (B + 0.5 - M) / x, fe = (z + 0.5 - _) / x;
      oo(q, fe) && W(B, z, !oo(q, fe + 1 / x) || $e((fe - 0.42) / 0.25) * 0.8 > Xe(B, z) ? H : p.fill, p.o, yi);
    }
  }), d.fogs.forEach((p) => {
    const x = Math.floor(p.y / C), b = Math.max(x, Math.floor((p.y + 6 * G) / C) - 1), M = Math.floor(p.x / w), _ = Math.floor((p.x + p.w) / w);
    for (let H = x; H <= b; H++) for (let z = M; z <= _; z++) {
      const B = (z - M) / Math.max(1, _ - M);
      W(z, H, p.c, p.a * (B < 0.25 ? B / 0.25 : B > 0.75 ? (1 - B) / 0.25 : 1), 0);
    }
  });
  const be = Math.max(2, Math.round(9 / C));
  d.drops.forEach((p) => {
    const x = p.x / w, b = Math.floor(p.y / C);
    for (let M = 0; M < be; M++) W(Math.floor(x - 0.208 * M * C / w), b + M, R.rain, p.o, ki);
  });
  const Re = Math.max(0, Math.round(4.4 / w / 2.6));
  return d.flakes.forEach((p) => {
    const x = Math.floor(p.x / w), b = Math.floor(p.y / C);
    W(x, b, R.snow, p.o, Ze);
    for (let M = 1; M <= Re; M++)
      W(x - M, b, R.snow, p.o, Ze), W(x + M, b, R.snow, p.o, Ze), W(x, b - M, R.snow, p.o, Ze), W(x, b + M, R.snow, p.o, Ze);
  }), d.bolts.forEach((p) => {
    if (w <= 3.5)
      for (let x = Math.floor(p.y / C); x <= (p.y + 24) / C; x++) for (let b = Math.floor(p.x / w); b <= (p.x + 11) / w; b++)
        xs(xd, (b + 0.5) * w - p.x, (x + 0.5) * C - p.y) && W(b, x, R.sun, 1, Dn);
    else {
      const x = Math.round(p.x / w), b = Math.round(p.y / C);
      bd.forEach((M, _) => M.split("").forEach((H, z) => {
        H === "#" && W(x + z, b + _, R.sun, 1, Dn);
      }));
    }
  }), { col: Y, ids: de };
}
function yd(r, d) {
  const a = d.px, y = Math.max(6, Math.round(d.width / a)), w = Math.max(6, Math.round(d.height / a)), C = d.width / y, P = d.height / w, F = d.ambient ? Math.floor((d.clock || 0) / 100) * 100 : 0, I = (h) => {
    const D = ws(h, d);
    return wd(D, ys(D, { clock: F, ambient: d.ambient, seed: d.seed }), y, w, C, P, F, d.ambient);
  }, R = I(r), S = d.reveal == null ? 1 : $e(d.reveal);
  let u = R.col, g = R.ids;
  if (S < 1) {
    const h = d.prev ? I(d.prev) : null, D = S * (y + 12);
    u = new Array(y * w), g = new Uint8Array(y * w);
    for (let G = 0; G < y * w; G++) {
      const Y = G % y, de = G / y | 0;
      (d.reduce ? S : $e((D - Y) / 12)) > Xe(Y, de) ? (u[G] = R.col[G], g[G] = R.ids[G]) : h ? (u[G] = h.col[G], g[G] = h.ids[G]) : (u[G] = null, g[G] = 255);
    }
  }
  return bs(u, g, y, w, { oneBit: d.oneBit, ink: d.ink, paper: d.paper, snowInk: !1 });
}
function kd(r, d, a) {
  const y = a.width, w = a.height, C = a.reveal == null ? 1 : $e(a.reveal), P = (g, h) => {
    const D = ws(h, a);
    Sd(g, D, ys(D, a));
  };
  if (r.clearRect(0, 0, y, w), C >= 1) {
    P(r, d);
    return;
  }
  if (a.prev && P(r, a.prev), a.reduce) {
    r.save(), r.globalAlpha = C, P(r, d), r.restore();
    return;
  }
  const F = r.canvas, I = F.__wxOff || (F.__wxOff = document.createElement("canvas"));
  (I.width !== F.width || I.height !== F.height) && (I.width = F.width, I.height = F.height);
  const R = I.getContext("2d");
  R.setTransform(r.getTransform()), R.clearRect(0, 0, y, w), P(R, d);
  const S = C * (y + 64) - 64, u = R.createLinearGradient(S, 0, S + 64, 0);
  u.addColorStop(0, "rgba(0,0,0,1)"), u.addColorStop(1, "rgba(0,0,0,0)"), R.globalCompositeOperation = "destination-in", R.fillStyle = u, R.fillRect(0, 0, y, w), R.globalCompositeOperation = "source-over", r.save(), r.setTransform(1, 0, 0, 1, 0, 0), r.drawImage(I, 0, 0), r.restore();
}
function Sd(r, d, a) {
  const { W: y, H: w, S: C, C: P, cw: F, yb: I, glowAt: R, soft: S, tw: u, sy: g } = d, h = (T, ce) => {
    const be = no(T);
    return "rgba(" + be[0] + "," + be[1] + "," + be[2] + "," + Math.max(0, Math.min(1, ce)).toFixed(3) + ")";
  }, D = (T, ce) => {
    const be = r.createLinearGradient(0, 0, y, 0);
    be.addColorStop(0, T[0]);
    for (let Re = 0; Re < T.length - 1; Re++) {
      const p = (Re + ce) * F, x = (p - u / 2) / y, b = (p + u / 2) / y;
      x > 0 && x < 1 && be.addColorStop(x, T[Re]), b > 0 && b < 1 && be.addColorStop(b, T[Re + 1]);
    }
    return be.addColorStop(1, T[T.length - 1]), be;
  }, G = Math.max(24, Math.ceil(y / 4)), Y = (T, ce) => {
    r.beginPath();
    for (let be = 0; be <= G; be++) {
      const Re = y * be / G, p = T == null ? 0 : I(Re) + T;
      be ? r.lineTo(Re, p) : r.moveTo(Re, p);
    }
    for (let be = G; be >= 0; be--) {
      const Re = y * be / G;
      r.lineTo(Re, I(Re) + ce);
    }
    r.closePath(), r.fill();
  };
  r.save(), r.fillStyle = D(C.filter((T) => !T.night).map((T) => T.sky), 0.75), r.fillRect(0, 0, y, w);
  const de = r.createLinearGradient(0, 0, y, 0);
  for (let T = 0; T <= 64; T++) {
    const ce = R(y * T / 64);
    de.addColorStop(T / 64, h(ce.c, Math.min(1, ce.a)));
  }
  r.fillStyle = de;
  for (let T = 0; T < 8; T++)
    r.globalAlpha = 1 - T / 8, Y(T * 2 * g, (T + 1) * 2 * g);
  r.fillStyle = D(C.filter((T) => T.night).map((T) => T.sky), 1.25);
  const K = Math.max(0.5, S), W = 6;
  r.globalAlpha = 1, Y(null, -K);
  for (let T = 0; T < W; T++)
    r.globalAlpha = 1 - (T + 0.5) / W, Y(-K + 2 * K * T / W, -K + 2 * K * (T + 1) / W);
  r.globalAlpha = 1;
  const J = new Path2D(vd), X = new Path2D(hd), Q = new Path2D(gd), Z = new Path2D(fd);
  r.fillStyle = P.star, a.stars.forEach((T) => {
    r.globalAlpha = T.o, T.big ? (r.save(), r.translate(T.x, T.y), r.scale(T.size, T.size), r.fill(J), r.restore()) : (r.beginPath(), r.arc(T.x, T.y, 0.8, 0, Math.PI * 2), r.fill());
  }), r.globalAlpha = 1;
  const Me = Ee(P.sun, "#ffffff", 0.55);
  a.suns.forEach((T) => {
    const ce = r.createRadialGradient(T.x, T.y, 0, T.x, T.y, T.halo);
    ce.addColorStop(0, h(Me, 0.42)), ce.addColorStop(0.7, h(Me, 0)), r.fillStyle = ce, r.beginPath(), r.arc(T.x, T.y, T.halo, 0, Math.PI * 2), r.fill();
    const be = r.createLinearGradient(0, T.y - T.rad, 0, T.y + T.rad);
    be.addColorStop(0.6, P.sun), be.addColorStop(1, P.sunEdge), r.fillStyle = be, r.beginPath(), r.arc(T.x, T.y, T.rad, 0, Math.PI * 2), r.fill();
  });
  const Oe = Ee(P.moon, "#ffffff", 0.6);
  a.moons.forEach((T) => {
    r.save(), r.translate(T.x - T.d / 2, T.y - T.d / 2), r.scale(T.d / 46, T.d / 46);
    const ce = r.createLinearGradient(0, 6, 0, 40);
    ce.addColorStop(0, Oe), ce.addColorStop(1, P.moon), r.fillStyle = ce, r.fill(X), r.restore();
  }), a.clouds.forEach((T) => {
    r.save(), r.globalAlpha = T.o, r.translate(T.x, T.y), r.scale(T.w / 46, T.h / 30.66), r.translate(-4, -9.67), r.fillStyle = T.fill, r.fill(Q), r.restore();
  }), a.fogs.forEach((T) => {
    const ce = r.createLinearGradient(T.x, 0, T.x + T.w, 0);
    ce.addColorStop(0, h(T.c, 0)), ce.addColorStop(0.25, h(T.c, T.a)), ce.addColorStop(0.75, h(T.c, T.a)), ce.addColorStop(1, h(T.c, 0)), r.fillStyle = ce, r.fillRect(T.x, T.y, T.w, 6 * g);
  }), r.fillStyle = P.rain, a.drops.forEach((T) => {
    r.save(), r.globalAlpha = T.o, r.translate(T.x, T.y), r.rotate(12 * Math.PI / 180), r.fillRect(-1.5, 0, 3, 9), r.restore();
  }), r.fillStyle = P.snow, a.flakes.forEach((T) => {
    r.globalAlpha = T.o, r.beginPath(), r.arc(T.x, T.y, 2.2, 0, Math.PI * 2), r.fill();
  }), r.fillStyle = P.sun, a.bolts.forEach((T) => {
    r.save(), r.globalAlpha = T.o, r.translate(T.x, T.y), r.fill(Z), r.restore();
  }), r.restore();
}
function Cd(r, d) {
  var ns, as, os, is, rs, ss, ls;
  const a = (e) => r.getElementById(e), y = a("workoutView"), w = a("workoutNameInput");
  let C = !0;
  const P = a("homeClock");
  function F() {
    P && (P.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  F(), setInterval(F, 15e3);
  const I = a("createFlow"), R = a("createMovementsSlot"), S = a("createTimingSlot"), u = a("createFinishSlot"), g = a("movementStepSummary"), h = a("timingStepSummary"), D = a("finishStepSummary"), G = a("continueToTiming"), Y = a("continueToFinish"), de = a("finishMoveButton");
  let K = !1, W = [];
  function J(e) {
    !e || W.some((t) => t.node === e) || W.push({ node: e, parent: e.parentNode, next: e.nextSibling });
  }
  function X(e, t) {
    e && (J(e), t.appendChild(e));
  }
  function Q() {
    [...W].reverse().forEach(({ node: e, parent: t, next: n }) => {
      t && (n && n.parentNode === t ? t.insertBefore(e, n) : t.appendChild(e));
    }), W = [];
  }
  function Z(e) {
    r.querySelectorAll(".createStep").forEach((t) => {
      t.classList.toggle("active", t.dataset.createStep === e);
    }), e === "timing" && (K = !0), Me();
  }
  function Me() {
    var v, k;
    if (!Ae) return;
    pe[me];
    const e = Je.filter((f) => !f.hidden), t = e.filter((f) => f.kind !== "rest").length, n = e.filter((f) => f.kind === "rest").length;
    g.textContent = t ? t + " movement" + (t === 1 ? "" : "s") + (n ? " · " + n + " rest" + (n === 1 ? "" : "s") : "") : "No movements yet";
    const o = t > 0, i = r.querySelector('[data-open-step="timing"]'), s = r.querySelector('[data-open-step="finish"]');
    i.disabled = !o, G.disabled = !o, h.textContent = o ? Yt(x.value) + " · " + We(b.value) + " movement · " + We(M.value) + " rest" : "Add a movement first", s.disabled = !(o && K);
    const l = ((w == null ? void 0 : w.value) || "").trim(), c = [];
    (v = a("includeWarmupPreset")) != null && v.checked && c.push("warm-up"), (k = a("includeCooldownPreset")) != null && k.checked && c.push("cooldown"), D.textContent = l ? l + (c.length ? " · " + c.join(" + ") : "") : c.length ? c.join(" + ") : "Name and optional extras";
  }
  function Oe() {
    var N, U, V;
    I.hidden = !1, K = !1;
    const e = r.querySelector(".editNameRow"), t = a("createMoveOptions"), n = r.querySelector(".timeTiles"), o = a("routineSummaryModal"), i = r.querySelector(".tempoRevealRow"), s = a("tempoExperiment"), l = (N = a("warmupList")) == null ? void 0 : N.closest("section"), c = a("movementCreatorLaunch"), v = a("movementCreator"), k = (U = a("strengthList")) == null ? void 0 : U.closest("section"), f = (V = a("cooldownList")) == null ? void 0 : V.closest("section");
    [t == null ? void 0 : t.querySelector(".createExtras"), l, c, v, k, f].forEach((A) => A && X(A, R)), [t, n, o, i, s].forEach((A) => X(A, S)), X(e, u), Z("movements"), Me();
  }
  function T() {
    Q(), I.hidden = !0, r.querySelectorAll(".createStep").forEach((e) => e.classList.remove("active"));
  }
  r.querySelectorAll("[data-open-step]").forEach((e) => e.addEventListener("click", () => {
    e.disabled || Z(e.dataset.openStep);
  })), G.addEventListener("click", () => {
    G.disabled || Z("timing");
  }), Y.addEventListener("click", () => Z("finish")), de.addEventListener("click", () => a("saveWorkoutEdit").click());
  const ce = { home: a("homeView"), workout: a("workoutView"), settings: a("settingsView") }, be = a("homeNav"), Re = a("settingsNav");
  function p(e) {
    Object.entries(ce).forEach(([t, n]) => n.classList.toggle("active", t === e)), be.classList.toggle("active", e === "home"), Re.classList.toggle("active", e === "settings"), e === "home" && setTimeout(Co, 400), e === "settings" && (requestAnimationFrame(() => la(r.querySelector(".tab.active"), !1)), Ga());
  }
  const x = a("totalTime"), b = a("workTime"), M = a("restTime"), _ = a("totalOut"), H = a("workOut"), z = a("restOut"), B = a("totalFill"), q = a("workFill"), fe = a("restFill"), we = a("roundsInput"), It = a("roundsFill"), Wt = a("roundsOut"), Ms = a("totalLabel"), Ci = a("routineSummaryModal"), ga = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let lt = ga.map((e) => ({ ...e })), Je = [
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
  const ha = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let dt = ha.map((e) => ({ ...e }));
  const Ts = {
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
  }, ge = Mi(d.data), pe = ge.profiles;
  let me = pe[ge.selected] ? ge.selected : ge.order.find((e) => pe[e]) || "kettlebell";
  function Mi(e) {
    const t = e && typeof e == "object" ? JSON.parse(JSON.stringify(e)) : {}, n = t.profiles && Object.keys(t.profiles).length ? t.profiles : JSON.parse(JSON.stringify(Ts)), o = (Array.isArray(t.order) ? t.order : Object.keys(n)).filter((i) => n[i]);
    return Object.keys(n).forEach((i) => {
      o.includes(i) || o.push(i);
    }), {
      v: 1,
      profiles: n,
      order: o,
      selected: t.selected || o[0],
      history: Array.isArray(t.history) ? t.history : [],
      checkins: (Array.isArray(t.checkins) ? t.checkins : Ls(t.energy)).map(Ti),
      settings: { ...t.settings || {} }
    };
  }
  function Ls(e) {
    if (!Array.isArray(e)) return [];
    const t = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], n = [];
    return e.forEach((o) => {
      const i = new Date(o.at);
      if (isNaN(i)) return;
      const s = i.getFullYear() + "-" + String(i.getMonth() + 1).padStart(2, "0") + "-" + String(i.getDate()).padStart(2, "0"), l = i.getHours() < 14 ? "morning" : "evening";
      if (n.some((v) => v.date === s && v.slot === l)) return;
      const c = t.indexOf(o.value) + 1;
      c > 0 && n.push({ date: s, slot: l, mood: null, energy: c, at: o.at });
    }), n;
  }
  function Ti(e) {
    if (e.scale === 100) return e;
    const t = (n) => n == null ? null : Math.round((Number(n) - 1) / 5 * 100);
    return { ...e, mood: t(e.mood), energy: t(e.energy), scale: 100 };
  }
  function ft() {
    Ae || (ge.selected = me, ge.order = ge.order.filter((e) => pe[e] && e !== jt), d.save(ge));
  }
  function he() {
    return ge.settings;
  }
  function xt(e) {
    const t = pe[e];
    if (!t) return;
    me = e;
    const n = a("workoutNameInput");
    if (n && (n.value = t.name), x.value = t.total, b.value = t.work, M.value = t.rest, we.value = t.rounds || 1, t.customSequence) {
      const o = (t.sequence || []).map((s) => ({ ...s })), i = (s) => o.filter((l) => l.presetRole === s).map(({ presetRole: l, ...c }) => c);
      lt = (t.warmup || i("warmup")).map((s) => ({ ...s })), dt = (t.cooldown || i("cooldown")).map((s) => ({ ...s })), Je = o.filter((s) => !s.presetRole), lo(t.preset || "movement", !1);
    } else
      x.min = 3, x.max = 40, x.step = 1, b.min = 20, b.max = 60, b.step = 5, M.min = 5, M.max = 30, M.step = 5, lt = (t.warmup || ga).map((o) => ({ ...o })), dt = (t.cooldown || ha).map((o) => ({ ...o })), Je = t.strength.map((o) => Array.isArray(o) ? (([i, s, l, c = !1]) => ({ id: i, name: s, group: l, kind: "work", hidden: !!c }))(o) : { ...o });
    r.querySelectorAll(".workoutPanel[data-workout]").forEach((o) => o.classList.toggle("active", o.dataset.workout === e)), ye();
  }
  function Es(e, t, n) {
    const o = e.getBoundingClientRect(), i = o.width / 2, s = o.height / 2, l = t - i, c = n - s;
    let v = 1 / 0, k = 1 / 0;
    l !== 0 && (v = i / Math.abs(l)), c !== 0 && (k = s / Math.abs(c));
    const f = Math.min(Math.max(1 / Math.min(v, k), 0), 1);
    let m = Math.atan2(c, l) * (180 / Math.PI) + 90;
    return m < 0 && (m += 360), { edge: f, angle: m };
  }
  function io(e, t, n = !1) {
    const o = e.getBoundingClientRect(), i = t.clientX - o.left, s = t.clientY - o.top, { edge: l, angle: c } = Es(e, i, s), v = n ? 100 : l * 100;
    e.style.setProperty("--edge-proximity", v.toFixed(3)), e.style.setProperty("--cursor-angle", c.toFixed(3) + "deg"), e.classList.toggle("borderGlowActive", n || v >= 30);
  }
  function Li(e) {
    e.addEventListener("pointermove", (n) => io(e, n, !1)), e.addEventListener("pointerenter", (n) => io(e, n, !1)), e.addEventListener("pointerdown", (n) => io(e, n, !0));
    const t = () => {
      e.classList.remove("borderGlowActive"), e.style.setProperty("--edge-proximity", "0");
    };
    e.addEventListener("pointerleave", t), e.addEventListener("pointerup", t), e.addEventListener("pointercancel", t);
  }
  Li(a("addWorkoutPanel"));
  let Ae = !1, jt = null;
  function ne(e) {
    return String(e ?? "").replace(/[&<>"']/g, (t) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[t]);
  }
  function Rs(e) {
    return e.summary ? e.summary : e.customSequence ? Yt(e.total) + " · custom move" : Yt(e.total) + " · " + We(e.work) + " / " + We(e.rest) + " · warm-up + cooldown";
  }
  function ro(e, t) {
    var s;
    const n = document.createElement("article");
    n.className = "workoutPanel", n.dataset.workout = e, n.tabIndex = 0;
    const o = t.activityCount ?? (((s = t.sequence) == null ? void 0 : s.length) || 0);
    n.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + ne(t.name) + '</div><div class="sub">' + ne(Rs(t)) + '</div><span class="sourceTag">' + ne(t.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (o ? o + " activities" + ((t.rounds || 1) > 1 ? " × " + t.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + ne(t.name) + "</div></div>";
    const i = a("addWorkoutPanel");
    return a("workoutGallery").insertBefore(n, i), Li(n), n.addEventListener("click", (l) => {
      l.target.closest("button") || xt(e);
    }), n.addEventListener("keydown", (l) => {
      (l.key === "Enter" || l.key === " ") && !l.target.closest("button") && (l.preventDefault(), xt(e));
    }), n.querySelector(".seeWorkoutBtn").addEventListener("click", (l) => {
      l.stopPropagation(), xt(e), nr(!1);
    }), n.querySelector(".startWorkoutBtn").addEventListener("click", (l) => {
      l.stopPropagation(), xt(e), vl();
    }), n;
  }
  function Ei() {
    r.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.remove()), ge.order.forEach((e) => {
      pe[e] && ro(e, pe[e]);
    }), r.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.classList.toggle("active", e.dataset.workout === me));
  }
  Ei(), a("addWorkoutPanel").addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), a("addWorkoutPanel").click());
  }), a("addWorkoutPanel").addEventListener("click", () => {
    Ae = !0, jt = "custom-" + Date.now(), pe[jt] = {
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
    }, xt(jt), nr(!0);
  });
  let j = [], ie = 0, Ve = 0, zn = 1, ht = !1, Fe = null, va = null, Ge = !1, rn = ge.settings.upcomingCount ?? "all", Ri = "movement";
  function fa(e, t, n) {
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
  function xa() {
    B.style.width = fa(x.value, Number(x.min), Number(x.max)) + "%", q.style.width = fa(b.value, Number(b.min), Number(b.max)) + "%", fe.style.width = fa(M.value, Number(M.min), Number(M.max)) + "%", H.textContent = We(b.value), z.textContent = We(M.value);
    const e = Number(we.value) || 1;
    It.style.width = fa(e, 1, 10) + "%", Ms.textContent = e > 1 ? "Time per round" : "Total time";
  }
  function so(e) {
    return e.filter((t) => !t.hidden);
  }
  function Vn(e) {
    const t = Math.max(0, Math.round(Number(e) || 0)), n = Math.floor(t / 3600), o = Math.floor(t % 3600 / 60), i = t % 60;
    return (n ? n + ":" + String(o).padStart(2, "0") : o) + ":" + String(i).padStart(2, "0");
  }
  function As(e) {
    let t;
    try {
      t = new URL(String(e || "").trim());
    } catch {
      return null;
    }
    const n = t.hostname.replace(/^(www|m|music)\./, "");
    let o = null;
    if (n === "youtu.be") o = t.pathname.slice(1).split("/")[0];
    else if (/^youtube(-nocookie)?\.com$/.test(n))
      if (t.pathname === "/watch") o = t.searchParams.get("v");
      else {
        const c = t.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        c && (o = c[2]);
      }
    if (!o || !/^[\w-]{11}$/.test(o)) return null;
    const i = (c) => {
      if (!c) return 0;
      if (/^\d+$/.test(c)) return Number(c);
      const v = c.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return v ? (Number(v[1]) || 0) * 3600 + (Number(v[2]) || 0) * 60 + (Number(v[3]) || 0) : 0;
    }, s = i(t.searchParams.get("t") || t.searchParams.get("start")), l = i(t.searchParams.get("end"));
    return { id: o, start: s, end: l > s ? l : null };
  }
  function qn(e, t) {
    if (e.useVideoLength === !1) return Math.max(5, Number(e.duration) || t || 300);
    const n = Number(e.start) || 0, o = Number(e.end) || Number(e.videoDuration) || 0;
    return o > n ? Math.round(o - n) : Number(e.duration) || 300;
  }
  function ba(e, t) {
    const n = Math.max(0, Number(e) || 0);
    return Math.round(t === "hour" ? n * 3600 : t === "min" ? n * 60 : n);
  }
  function lo(e, t = !0) {
    Ri = e, r.querySelectorAll(".createPresetBtn").forEach((o) => o.classList.toggle("active", o.dataset.movePreset === e));
    const n = pe[me];
    n && (n.preset = e), e === "work" ? (x.min = 30, x.max = 480, x.step = 30, b.min = 300, b.max = 7200, b.step = 300, M.min = 60, M.max = 1800, M.step = 60, t && (x.value = 60, b.value = 1500, M.value = 300), a("addMovementUnit").value = "min", a("addMovementDuration").value = 25, a("addRestUnit").value = "min", a("addRestDuration").value = 5) : (x.min = 3, x.max = 40, x.step = 1, b.min = 20, b.max = 60, b.step = 5, M.min = 5, M.max = 30, M.step = 5, t && (x.value = 20, b.value = 45, M.value = 15), a("addMovementUnit").value = "sec", a("addMovementDuration").value = 45, a("addRestUnit").value = "sec", a("addRestDuration").value = 30), xa();
  }
  function Ai(e, t) {
    const n = Ri === "work";
    return e.map((o, i) => ({ ...o, id: t + "-" + i + "-" + Date.now().toString(36), useGlobalTiming: !n, duration: n ? 60 : Number(b.value) }));
  }
  function co() {
    const e = pe[me];
    e != null && e.customSequence && (e.includeWarmup = a("includeWarmupPreset").checked, e.includeCooldown = a("includeCooldownPreset").checked, e.includeWarmup && !lt.length && (lt = Ai(ga, "warm")), e.includeCooldown && !dt.length && (dt = Ai(ha, "cool")), ye());
  }
  function Ns() {
    const e = a("upcomingCountSetting");
    if (!e) return;
    const t = Math.max(1, j.length - 1), n = rn;
    e.innerHTML = "";
    for (let s = 1; s <= t; s++) {
      const l = document.createElement("option");
      l.value = String(s), l.textContent = String(s), e.appendChild(l);
    }
    const o = document.createElement("option");
    o.value = "all", o.textContent = "All", e.appendChild(o);
    const i = n === "all" ? "all" : String(Math.min(Number(n) || 1, t));
    e.value = i, rn = i === "all" ? "all" : Number(i);
  }
  function ye() {
    Number(x.value) * 60;
    const e = Number(b.value), t = Number(M.value), n = pe[me], o = !!(n != null && n.customSequence), i = (o ? !n.includeWarmup : n != null && n.warmupOff) ? [] : so(lt), s = so(Je), l = o && !n.includeCooldown ? [] : so(dt);
    if (n && (n.total = Number(x.value), n.work = e, n.rest = t, n.rounds = Number(we.value) || 1, n.customSequence ? (n.sequence = Je.map((E) => ({ ...E })), n.warmup = lt.map((E) => ({ ...E })), n.cooldown = dt.map((E) => ({ ...E }))) : (n.strength = Je.map((E) => ({ ...E })), n.warmup = lt.map((E) => ({ ...E })), n.cooldown = dt.map((E) => ({ ...E })))), n != null && n.customSequence) {
      const E = [...i.map((ae) => ({ ...ae, section: "warmup" })), ...s, ...l.map((ae) => ({ ...ae, section: "cooldown" }))].map((ae) => {
        if (ae.kind === "video") return { ...ae, duration: qn(ae, e), rest: 0 };
        if (ae.kind === "rest") {
          const He = ae.useGlobalTiming === !0 ? t : Number(ae.duration) || t;
          return { ...ae, duration: He, rest: 0 };
        }
        const De = ae.useGlobalTiming === !1 && Number(ae.duration) || e;
        return { ...ae, duration: De, rest: 0 };
      });
      n.autoRest && Number(n.autoRestDuration) > 0 ? (j = [], E.forEach((ae, De) => {
        j.push(ae);
        const He = E[De + 1];
        ae.kind !== "rest" && He && He.kind !== "rest" && j.push({
          id: "auto-rest-" + De,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(n.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : j = E;
    } else
      j = [...i.map((E) => ({ ...E, section: "warmup" })), ...s, ...l.map((E) => ({ ...E, section: "cooldown" }))].map((E) => E.kind === "video" ? { ...E, duration: qn(E, e), rest: 0 } : E.kind === "rest" ? { ...E, duration: E.useGlobalTiming === !0 ? t : Number(E.duration) || t, rest: 0 } : { ...E, duration: E.useGlobalTiming === !1 && Number(E.duration) || e, rest: t }), j.forEach((E, ae) => {
        var De;
        ((De = j[ae + 1]) == null ? void 0 : De.kind) === "rest" && (E.rest = 0);
      }), j.length && (j[j.length - 1].rest = 0);
    const c = Math.max(1, Math.min(10, Number(we.value) || 1)), v = j, k = (E) => c <= 1 ? null : E.section === "warmup" || E.presetRole === "warmup" ? "first" : E.section === "cooldown" || E.presetRole === "cooldown" ? "last" : E.kind === "video" && (E.videoRounds === "first" || E.videoRounds === "last") ? E.videoRounds : null, f = (E) => !!k(E), m = v.filter((E) => !f(E)), N = v.filter(f), U = m.length, V = m.reduce((E, ae) => E + ae.duration + ae.rest, 0), A = N.reduce((E, ae) => E + ae.duration + ae.rest, 0), L = [
      N.some((E) => E.section === "warmup" || E.presetRole === "warmup") && "warm-up",
      N.some((E) => E.section === "cooldown" || E.presetRole === "cooldown") && "cooldown",
      N.some((E) => E.kind === "video" && !E.section && !E.presetRole) && "video"
    ].filter(Boolean), re = L.length > 1 ? L.slice(0, -1).join(", ") + " & " + L[L.length - 1] : L[0] || "";
    j = [];
    const se = (E, ae) => {
      const De = k(E);
      return !De || (De === "first" ? ae === 1 : ae === c);
    };
    for (let E = 1; E <= c; E++)
      if (v.filter((ae) => se(ae, E)).forEach((ae, De) => j.push({ ...ae, id: ae.id + (c > 1 ? "-r" + E : ""), round: E, roundIndex: De })), E < c && U)
        if (n != null && n.customSequence)
          j.push({ id: "round-break-" + E, name: "Rest", group: "Round " + (E + 1) + " next", kind: "rest", hidden: !1, duration: t, rest: 0, round: E, roundIndex: U, roundBreak: !0 });
        else {
          const ae = j[j.length - 1];
          ae.rest = t, ae.roundBreakAfter = !0;
        }
    xa();
    const O = j.reduce((E, ae) => E + ae.duration + ae.rest, 0), le = Math.round(V / 60), ve = Math.round(O / 60), te = c > 1 ? Yt(le) + " × " + c + " rounds" + (A ? " + " + We(A) + " " + re : "") + " (" + Yt(ve) + ")" : Yt(ve), $ = [i.length ? "warm-up" : "", l.length ? "cooldown" : ""].filter(Boolean), Pe = n != null && n.customSequence ? te + " · " + U + " items" + ($.length && !(c > 1 && A) ? " · " + $.join(" + ") : "") : te + " · " + We(e) + " / " + We(t) + ($.length && !(c > 1 && A) ? " · " + $.join(" + ") : "");
    _.textContent = We(V);
    const _e = j.filter((E) => !E.roundBreak).length, Ce = c > 1 ? _e + " activities · " + c + " rounds" : U + " activities";
    Wt.textContent = c > 1 ? c + " rounds · " + Yt(ve) + " total" : "1 round", a("roundsCount").textContent = c, r.querySelectorAll("[data-rounds-step]").forEach((E) => {
      E.disabled = Number(E.dataset.roundsStep) < 0 ? c <= 1 : c >= 10;
    }), n && (n.summary = Pe, n.activityCount = U);
    const Ot = r.querySelector(".workoutPanel.active .sub");
    Ot && (Ot.textContent = Pe), Ci.textContent = Pe, fo(), r.querySelectorAll(".workoutPanel.active .activityCount").forEach((E) => E.textContent = Ce), xa(), mo(), bo(), Yn(), Ns(), Ae && Me(), ce.workout.classList.contains("active") && !Fe && qo();
  }
  const On = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', Is = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', Bs = {
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
  }, Ct = (e) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (Bs[e] || "") + "</svg>";
  r.querySelectorAll("[data-icon]").forEach((e) => {
    e.innerHTML = Ct(e.dataset.icon);
  });
  let Qe = null, ct = null;
  function Ps(e) {
    return e = Math.max(1, Number(e) || 0), e >= 3600 && e % 3600 === 0 ? { value: e / 3600, unit: "hour" } : e >= 60 && e % 60 === 0 ? { value: e / 60, unit: "min" } : { value: e, unit: "sec" };
  }
  function Ni(e = !1) {
    const t = r.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    t && (t.focus({ preventScroll: !0 }), e && t.select());
  }
  function po(e, t, n = {}) {
    const o = e.kind === "rest", i = e.kind === "video", s = i ? e.useVideoLength !== !1 : o ? e.useGlobalTiming === !0 : e.useGlobalTiming !== !1, l = Number(o ? M.value : b.value), c = Ps(i ? e.useVideoLength === !1 ? e.duration : qn({ ...e, useVideoLength: !0 }) : s ? l : e.duration || l), v = i && (Number(e.videoDuration) > 0 || Number(e.end) > 0), k = i ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + ne(e.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + ne(e.autoName ? "" : e.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([O, le]) => '<option value="' + O + '"' + ((e.videoRounds || "every") === O ? " selected" : "") + ">" + le + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + ne(e.name) + '" placeholder="' + (o ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + ne(e.group) + '" placeholder="' + (o ? "Rest" : "e.g. Glutes + legs") + '"></label>', f = i ? "Play the whole " + (Number(e.start) > 0 || Number(e.end) > 0 ? "clip" : "video") + (v ? " · " + Vn(qn({ ...e, useVideoLength: !0 })) : "") : "Use global timing · " + We(l), m = document.createElement("div");
    m.className = "moveRow editing" + (n.sheet ? " inSheet" : ""), m.dataset.index = t, m.dataset.id = e.id;
    const N = n.isNew ?? (ct == null ? void 0 : ct.item) === e, U = n.sheet ? '<div class="moveEditActions sheetActions">' + (N ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (e.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + ne(e.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (N ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    m.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (i ? " videoFields" : "") + '">' + k + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (s ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + ne(f) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + c.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((O) => '<option value="' + O + '"' + (O === c.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[O] + "</option>").join("") + "</select></div></div>" + U + "</div>";
    const V = (O) => m.querySelector("[data-f=" + O + "]"), A = () => {
      const O = V("global").checked;
      V("dur").disabled = O, V("unit").disabled = O, m.querySelector(".creatorDurationRow").classList.toggle("isDisabled", O);
    };
    V("global").addEventListener("change", A), A();
    const L = () => {
      var O;
      if (n.sheet) {
        (O = n.onCancel) == null || O.call(n);
        return;
      }
      N && ya(), Qe = null, ye();
    }, re = () => {
      var ve;
      if (i) {
        se();
        return;
      }
      const O = V("name").value.trim();
      if (!O) {
        V("name").focus();
        return;
      }
      e.name = O, e.group = V("group").value.trim() || (o ? "Rest" : "Movement");
      const le = V("global").checked;
      if (e.useGlobalTiming = le, le || (e.duration = Math.max(o ? 5 : 1, ba(V("dur").value, V("unit").value))), n.sheet) {
        (ve = n.onSaved) == null || ve.call(n);
        return;
      }
      N && (ct = null), Qe = null, ye(), Te(N ? o ? "Rest added" : "Movement added" : "Movement updated");
    }, se = () => {
      var $;
      const O = V("url").value.trim(), le = As(O);
      if (!le) {
        V("urlError").hidden = !1, V("url").classList.add("invalid"), V("url").focus();
        return;
      }
      const ve = le.id !== e.videoId;
      e.url = O, e.videoId = le.id, e.start = le.start, e.end = le.end, ve && (e.videoDuration = null, e.videoError = null);
      const te = V("name").value.trim();
      e.autoName = !te, e.name = te || (ve ? "" : e.name) || e.videoTitle || "YouTube video", e.group = "Video", e.videoRounds = V("rounds").value, e.useVideoLength = V("global").checked, e.useVideoLength || (e.duration = Math.max(5, ba(V("dur").value, V("unit").value))), n.sheet ? ($ = n.onSaved) == null || $.call(n) : (N && (ct = null), Qe = null, ye(), Te(N ? "Video added" : "Video updated")), (ve || !e.videoDuration || e.autoName && !e.videoTitle) && El(e);
    };
    if (i && V("url").addEventListener("input", () => {
      V("urlError").hidden = !0, V("url").classList.remove("invalid");
    }), m.querySelector("[data-a=cancel]").addEventListener("click", L), m.querySelector("[data-a=save]").addEventListener("click", re), n.sheet && !N) {
      m.querySelector("[data-a=hide]").addEventListener("click", () => {
        var le;
        return (le = n.onHide) == null ? void 0 : le.call(n);
      });
      const O = m.querySelector("[data-a=remove]");
      sa(O, O.querySelector(".removeFill"), 1200, () => {
        var le;
        return (le = n.onRemove) == null ? void 0 : le.call(n);
      });
    }
    return m.addEventListener("keydown", (O) => {
      O.key === "Escape" && (O.preventDefault(), O.stopPropagation(), L()), O.key === "Enter" && O.target.matches("input") && (O.preventDefault(), re());
    }), m;
  }
  function uo(e, t) {
    const n = a(t);
    n.innerHTML = "", e.forEach((o, i) => {
      if (o === Qe && !jn()) {
        n.appendChild(po(o, i));
        return;
      }
      const s = document.createElement("div");
      s.className = "moveRow" + (o.hidden ? " hidden" : "") + (o.kind === "rest" ? " restItem" : "") + (o.kind === "video" ? " videoItem" : "") + (Yo(o) ? " noMeta" : ""), s.dataset.index = i, s.dataset.id = o.id;
      const l = o.kind === "rest" ? o.useGlobalTiming === !0 ? "Global timing" : We(o.duration) : o.useGlobalTiming === !1 ? We(o.duration) : "Global timing", c = o.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", v = o.kind === "video" ? o.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (o.useVideoLength === !1 ? "stops after " + We(o.duration) : Number(o.videoDuration) > 0 || Number(o.end) > 0 ? Vn(qn(o)) : "plays to the end") + (o.videoRounds === "first" ? " · first round only" : o.videoRounds === "last" ? " · last round only" : "") : o.group + " · " + l, k = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + ne(o.name) + '. Drag, or use the up and down arrow keys">' + On + "</button>", f = '<div class="moveText"><div class="moveItemName">' + ne(o.name) + c + '</div><div class="moveMeta">' + ne(v) + "</div></div>", m = (V) => V.addEventListener("keydown", (A) => {
        var se, O;
        if (A.key !== "ArrowUp" && A.key !== "ArrowDown") return;
        A.preventDefault();
        const L = e.indexOf(o), re = L + (A.key === "ArrowUp" ? -1 : 1);
        re < 0 || re >= e.length || (e.splice(L, 1), e.splice(re, 0, o), ye(), (O = (se = a(t).children[re]) == null ? void 0 : se.querySelector(".dragHandle")) == null || O.focus());
      });
      if (jn()) {
        s.classList.add("phoneRow"), s.tabIndex = 0, s.setAttribute("role", "button"), s.setAttribute("aria-label", "Edit " + (o.name || "step")), s.innerHTML = k + f + '<span class="rowChevron" aria-hidden="true">›</span>';
        const V = s.querySelector(".dragHandle");
        V.addEventListener("pointerdown", (A) => Ii(A, s, n, e)), m(V), s.addEventListener("click", (A) => {
          A.target.closest(".dragHandle") || _i(o, e);
        }), s.addEventListener("keydown", (A) => {
          A.key === "Enter" && A.target === s && (A.preventDefault(), _i(o, e));
        }), n.appendChild(s);
        return;
      }
      s.innerHTML = k + f + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + ne(o.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (o.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + ne(o.name) + '"><span class="removeFill"></span><span class="removeLabel">' + Is + "</span></button></div>", s.querySelector(".editBtn").addEventListener("click", () => {
        ya(), Qe = o, ye(), Ni();
      }), s.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        o.hidden = !o.hidden, ye();
      });
      const N = s.querySelector(".removeBtn");
      sa(N, N.querySelector(".removeFill"), 1200, () => {
        const V = e.indexOf(o);
        V < 0 || (e.splice(V, 1), ye(), Te("Removed " + o.name, { label: "Undo", run: () => {
          e.splice(Math.min(V, e.length), 0, o), ye();
        } }));
      });
      const U = s.querySelector(".dragHandle");
      U.addEventListener("pointerdown", (V) => Ii(V, s, n, e)), m(U), n.appendChild(s);
    });
  }
  const pt = () => {
    var e;
    return (e = window.matchMedia) == null ? void 0 : e.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, wa = (e) => {
    var t;
    try {
      (t = navigator.vibrate) == null || t.call(navigator, e);
    } catch {
    }
  };
  function Ii(e, t, n, o) {
    if (e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const i = e.currentTarget, s = e.pointerId, l = !pt();
    try {
      i.setPointerCapture(s);
    } catch {
    }
    const c = t.closest(".exerciseScroller") || go(t), v = n.style.position;
    n.style.position = "relative";
    const k = [...n.children].filter((oe) => oe.classList.contains("moveRow")), f = k.indexOf(t), m = parseFloat(getComputedStyle(n).rowGap) || 8, N = t.offsetHeight, U = N + m, V = k.map((oe) => oe.offsetTop), A = k.map((oe) => oe.offsetHeight), L = () => n.getBoundingClientRect().top, re = n.getBoundingClientRect().width, se = e.clientY - (L() + V[f]), O = e.clientX;
    let le = e.clientY, ve = e.clientX, te = L() + V[f], $ = 0, Pe = 0, _e = 0, Ce = 1, Ot = 0, E = f, ae = !1, De = 0, He = !1, Qa = !1, Pn = V[f];
    n.classList.add("reordering"), t.classList.add("dragging"), t.style.transition = "none", wa(8);
    const eo = () => {
      const oe = le - se + N / 2 - L();
      let ue = 0;
      return k.forEach((ke, Ke) => {
        Ke !== f && oe > V[Ke] + A[Ke] / 2 && ue++;
      }), ue;
    }, to = () => {
      k.forEach((oe, ue) => {
        if (ue === f) return;
        const ke = f < E && ue > f && ue <= E ? -U : f > E && ue >= E && ue < f ? U : 0;
        oe.style.transform = ke ? "translateY(" + ke + "px)" : "";
      });
    }, ma = () => {
      const oe = n.getBoundingClientRect(), ue = Math.abs(ve - O) > Math.max(80, re * 0.3) || ve < oe.left - 24 || ve > oe.right + 24;
      ue !== ae && (ae = ue, t.classList.toggle("willReturn", ue), wa(ue ? 10 : 4));
      const ke = ae ? f : eo();
      ke !== E && (E = ke, to(), ae || wa(4));
    }, _t = () => {
      if (E === f) return V[f];
      const oe = k.filter((ke, Ke) => Ke !== f);
      let ue = V[0];
      for (let ke = 0; ke < E; ke++) ue += oe[ke].offsetHeight + m;
      return ue;
    }, Fn = () => {
      const oe = l ? Math.min(Math.abs($) / 40, 1) : 0, ue = l && !He ? Math.max(-3, Math.min(3, _e * 0.6)) : 0;
      t.style.transform = "translate(" + Pe.toFixed(2) + "px," + (te - (L() + V[f])).toFixed(2) + "px) rotate(" + ue.toFixed(2) + "deg) scale(" + (Ce * (1 - 0.04 * oe)).toFixed(4) + "," + (Ce * (1 + 0.06 * oe)).toFixed(4) + ")";
    }, ee = () => {
      De = requestAnimationFrame(ee);
      const oe = ve - O, ue = He ? L() + Pn : le - se, ke = He ? 0 : ae ? oe * 0.9 : Math.max(-22, Math.min(22, oe * 0.22)), Ke = He ? 1 : ae ? 0.97 : 1.035;
      if (!l) {
        te = ue, Pe = He ? 0 : ke, Ce = 1, Fn(), He && Le();
        return;
      }
      const Jl = He ? 0.24 : 0.2, Ql = He ? 0.62 : 0.68;
      $ = ($ + (ue - te) * Jl) * Ql, te += $, _e = (_e + (ke - Pe) * 0.16) * 0.7, Pe += _e, Ot = (Ot + (Ke - Ce) * 0.22) * 0.6, Ce += Ot, Fn(), He && Math.abs($) < 0.15 && Math.abs(ue - te) < 0.5 && Math.abs(Pe) < 0.5 && Math.abs(Ce - 1) < 3e-3 && Le();
    }, xe = setInterval(() => {
      if (!c || He) return;
      const oe = c.getBoundingClientRect(), ue = 56, ke = le < oe.top + ue ? -10 : le > oe.bottom - ue ? 10 : 0;
      ke && (c.scrollTop += ke, ma());
    }, 30);
    function Le() {
      if (Qa) return;
      Qa = !0, cancelAnimationFrame(De);
      const oe = E !== f, ue = t.dataset.id;
      if (n.classList.remove("reordering"), k.forEach((Ke) => {
        Ke.style.transition = "none", Ke.style.transform = "";
      }), t.classList.remove("dragging", "willReturn"), n.style.position = v, oe) {
        const [Ke] = o.splice(f, 1);
        o.splice(E, 0, Ke);
      }
      ye();
      const ke = ue && n.querySelector('.moveRow[data-id="' + ue + '"]');
      ke && l && ke.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), oe && Te("Order saved");
    }
    const ze = (oe) => {
      if (oe.pointerId === s) {
        if (oe.pointerType === "mouse" && oe.buttons === 0) {
          st();
          return;
        }
        le = oe.clientY, ve = oe.clientX, ma();
      }
    }, Ue = (oe) => {
      oe.pointerId === s && st();
    };
    function st() {
      He || (window.removeEventListener("pointermove", ze, !0), window.removeEventListener("pointerup", Ue, !0), window.removeEventListener("pointercancel", Ue, !0), i.removeEventListener("lostpointercapture", st), clearInterval(xe), ae && E !== f && (E = f, to()), Pn = _t(), He = !0, wa(6), setTimeout(Le, 800));
    }
    window.addEventListener("pointermove", ze, !0), window.addEventListener("pointerup", Ue, !0), window.addEventListener("pointercancel", Ue, !0), i.addEventListener("lostpointercapture", st), De = requestAnimationFrame(ee), Fn();
  }
  function mo() {
    var i, s, l, c;
    const e = pe[me], t = (i = a("warmupList")) == null ? void 0 : i.closest("section"), n = (s = a("cooldownList")) == null ? void 0 : s.closest("section"), o = (c = (l = a("strengthList")) == null ? void 0 : l.closest("section")) == null ? void 0 : c.querySelector(".sectionTitle");
    e != null && e.customSequence ? (t && (t.hidden = !e.includeWarmup), n && (n.hidden = !e.includeCooldown), o && (o.textContent = "Move sequence")) : (t && (t.hidden = !!(e != null && e.warmupOff)), n && (n.hidden = !1), o && (o.textContent = "Kettlebell work")), uo(lt, "warmupList"), uo(Je, "strengthList"), uo(dt, "cooldownList");
  }
  function ya() {
    if (!ct) return;
    const { item: e, arr: t } = ct;
    ct = null;
    const n = t.indexOf(e);
    n >= 0 && t.splice(n, 1), Qe === e && (Qe = null);
  }
  function _n(e) {
    return e.id === "warmupList" ? { arr: lt, kind: "warmup", group: "Warm-up" } : e.id === "cooldownList" ? { arr: dt, kind: "cooldown", group: "Cooldown" } : { arr: Je, kind: "work", group: "" };
  }
  function Bi(e, t) {
    const n = _n(t), o = Date.now().toString(36);
    return e === "video" ? { id: "video-" + o, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : e === "rest" ? { id: "rest-" + o, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(M.value) } : { id: "movement-" + o, name: "", group: n.group, kind: n.kind, hidden: !1, useGlobalTiming: !0, duration: Number(b.value) };
  }
  const Pi = "cubic-bezier(.34,1.46,.64,1)";
  function Fi(e, t) {
    if (pt() || !e) {
      t();
      return;
    }
    const n = (s) => {
      var l;
      return ((l = s.dataset) == null ? void 0 : l.id) || s;
    }, o = () => [...e.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], i = new Map(o().map((s) => [n(s), s.getBoundingClientRect().top]));
    t(), o().forEach((s) => {
      const l = i.get(n(s));
      if (l === void 0) return;
      const c = l - s.getBoundingClientRect().top;
      Math.abs(c) < 0.5 || s.animate([{ transform: "translateY(" + c + "px)" }, { transform: "none" }], { duration: 440, easing: Pi });
    });
  }
  function Di(e, t) {
    if (!e || pt()) return;
    const n = e.offsetHeight, o = Math.max(0, n - (t || 0));
    e.animate([{ clipPath: "inset(0 0 " + o + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: Pi });
  }
  function Hi(e, t, n, o) {
    const { arr: i } = _n(t), s = Bi(e, t);
    i.splice(Math.max(0, Math.min(n, i.length)), 0, s), ct = { item: s, arr: i }, Qe = s, Fi(t.closest(".exerciseScroller,.createStepSlot") || t, () => ye());
    const l = t.querySelector(".moveRow.editing");
    return Di(l, o), Ni(e === "rest"), l;
  }
  function go(e) {
    for (let t = e; t && t.nodeType === 1; t = t.parentElement) {
      const n = getComputedStyle(t).overflowY;
      if (/(auto|scroll)/.test(n) && t.scrollHeight > t.clientHeight) return t;
    }
    return null;
  }
  const zi = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function Vi(e, t) {
    const n = document.createElement("div");
    return n.className = "addGhost" + (e === "movement" ? "" : " rest"), n.innerHTML = '<span class="addGhostGrip">' + On + '</span><span class="addGhostText"><strong>' + ne(t[0]) + "</strong><small>" + ne(t[1]) + "</small></span>", a("workoutModal").appendChild(n), n;
  }
  function Gn(e) {
    e.classList.add("leaving"), setTimeout(() => e.remove(), 180);
  }
  function Fs(e, t, n, o) {
    (Qe || ct) && (ya(), Qe = null, ye());
    const i = e.getBoundingClientRect(), s = Vi(t, zi[t]);
    s.setAttribute("aria-hidden", "true"), s.style.width = i.width + "px", s.style.height = i.height + "px", s.style.transform = "translate(" + i.left + "px," + i.top + "px)", e.classList.add("lifting");
    const l = go(e);
    return qi({
      ghost: s,
      origin: i,
      sx: n,
      sy: o,
      scroller: l,
      column: e.closest(".exerciseScroller,.createFlow") || l,
      home: () => e.getBoundingClientRect(),
      onDrop: (c, v, k) => {
        Gn(s), e.classList.remove("lifting"), Hi(t, c, v, k);
      },
      onReturn: () => {
        Gn(s), e.classList.remove("lifting");
      }
    });
  }
  function qi({ ghost: e, origin: t, sx: n, sy: o, scroller: i, column: s, home: l, onDrop: c, onReturn: v, rowLook: k = !1 }) {
    var Fn;
    const f = !pt(), m = ((Fn = r.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : Fn.offsetHeight) || 80, N = n - t.left, U = o - t.top, V = 44;
    let A = n, L = o, re = t.left, se = t.top, O = 0, le = 0, ve = !f, te = null, $ = null, Pe = -1, _e = 0, Ce = null;
    const Ot = () => ["warmupList", "strengthList", "cooldownList"].map((ee) => a(ee)).filter((ee) => ee && ee.getClientRects().length && !ee.closest("[hidden]")), E = (ee) => {
      if (ee === te) return;
      te = ee, e.classList.toggle("overList", !!ee || k);
      const xe = ee ? ee.getBoundingClientRect().width : t.width;
      e.style.width = xe + "px", e.style.height = (ee ? m : t.height) + "px";
    }, ae = (ee) => {
      ee.classList.add("leaving"), ee.style.height = "0px", ee.style.marginTop = "-8px", setTimeout(() => ee.remove(), f ? 320 : 0);
    }, De = (ee, xe, Le) => {
      if ($ && $.parentNode === ee && Pe === Le || ($ && (ae($), $ = null, Pe = -1), !ee)) return;
      const ze = document.createElement("div");
      ze.className = "dropSlot", ee.insertBefore(ze, xe), $ = ze, Pe = Le, ze.getBoundingClientRect(), ze.style.height = m + "px", ze.style.marginTop = "0px";
    }, He = () => {
      let ee = null, xe = 1 / 0;
      for (const st of Ot()) {
        const oe = st.getBoundingClientRect();
        if (A < oe.left - 48 || A > oe.right + 48) continue;
        const ue = oe.top - 28, ke = oe.bottom + 28, Ke = L < ue ? ue - L : L > ke ? L - ke : 0;
        Ke < xe && (xe = Ke, ee = st);
      }
      const Le = s == null ? void 0 : s.getBoundingClientRect(), Ue = Le && A >= Le.left && A <= Le.right && L >= Le.top && L <= Le.bottom || xe === 0 ? ee : null;
      if (Ue) {
        const st = [...Ue.children].filter((ue) => ue.classList.contains("moveRow"));
        let oe = st.findIndex((ue) => {
          const ke = ue.getBoundingClientRect();
          return L < ke.top + ke.height / 2;
        });
        oe < 0 && (oe = st.length), De(Ue, st[oe] || null, oe);
      } else De(null);
      E(Ue);
    }, Qa = () => {
      if (Ce) return Ce.aim();
      if (te) {
        const ee = te.getBoundingClientRect();
        let xe = L - m / 2;
        return $ && (xe = xe * 0.6 + $.getBoundingClientRect().top * 0.4), { x: ee.left, y: xe };
      }
      return { x: A - N, y: L - U };
    }, Pn = (ee, xe, Le, ze) => {
      e.style.transform = "translate(" + re + "px," + se + "px) rotate(" + ee + "deg) rotate(" + xe + "rad) scale(" + Le + "," + ze + ") rotate(" + -xe + "rad)";
    }, eo = () => {
      if (_e = requestAnimationFrame(eo), !ve) {
        const oe = A - n, ue = L - o, ke = Math.min(Math.hypot(oe, ue) / V, 1);
        re = t.left + oe * 0.35, se = t.top + ue * 0.35, Pn(0, Math.atan2(ue, oe), 1 + 0.155 * ke, 1 - 0.1 * ke);
        return;
      }
      const ee = Qa();
      if (!f) {
        re = ee.x, se = ee.y, Pn(0, 0, 1, 1), Ce && (cancelAnimationFrame(_e), Ce.done());
        return;
      }
      const xe = Ce ? Ce.k : 0.17, Le = Ce ? Ce.d : 0.7;
      O = (O + (ee.x - re) * xe) * Le, le = (le + (ee.y - se) * xe) * Le, re += O, se += le;
      const ze = Math.hypot(O, le), Ue = Math.min(ze / 48, 1), st = te || Ce ? 0 : Math.max(-5, Math.min(5, O * 0.32));
      Pn(st, Math.atan2(le, O), 1 + 0.1 * Ue, 1 - 0.063 * Ue), Ce && ze < 0.15 && Math.hypot(ee.x - re, ee.y - se) < 0.6 && (cancelAnimationFrame(_e), Ce.done());
    }, to = setInterval(() => {
      if (!i || Ce) return;
      const ee = i.getBoundingClientRect(), xe = 64, Le = L < ee.top + xe ? -(ee.top + xe - L) / 4 : L > ee.bottom - xe ? (L - (ee.bottom - xe)) / 4 : 0;
      Le && (i.scrollTop += Math.max(-18, Math.min(18, Le)), He());
    }, 30);
    _e = requestAnimationFrame(eo);
    let ma = !1;
    const _t = (ee, xe) => {
      if (ma) return;
      ma = !0, cancelAnimationFrame(_e);
      const Le = $ ? $.offsetHeight : m;
      !ee && $ && ($.remove(), $ = null), ee ? c(ee, xe, Le) : v();
    };
    return {
      move(ee, xe) {
        A = ee, L = xe, !ve && Math.hypot(A - n, L - o) > V && (ve = !0, O = (A - n) * 0.085, le = (L - o) * 0.085), ve && He();
      },
      drop(ee) {
        clearInterval(to);
        const xe = te, Le = Pe;
        if (!ee && xe && $) {
          const ze = $;
          Ce = { k: 0.24, d: 0.62, aim: () => {
            const Ue = ze.getBoundingClientRect();
            return { x: Ue.left, y: Ue.top };
          }, done: () => _t(xe, Le) }, setTimeout(() => _t(xe, Le), 650), f || (cancelAnimationFrame(_e), _t(xe, Le));
          return;
        }
        De(null), E(null), Ce = { k: 0.2, d: 0.66, aim: () => {
          const ze = l();
          return { x: ze.left, y: ze.top };
        }, done: () => _t(null) }, setTimeout(() => _t(null), 650), f || (cancelAnimationFrame(_e), _t(null));
      }
    };
  }
  function ho(e, t) {
    let n = !1;
    e.addEventListener("click", (o) => {
      if (n) {
        n = !1, o.preventDefault();
        return;
      }
      if (jn()) {
        Gi(t);
        return;
      }
      const i = a("strengthList"), s = Hi(t, i, _n(i).arr.length, 0);
      s == null || s.scrollIntoView({ block: "nearest", behavior: pt() ? "auto" : "smooth" });
    }), e.addEventListener("pointerdown", (o) => {
      if (o.button !== void 0 && o.button !== 0) return;
      const i = o.pointerId, s = o.clientX, l = o.clientY;
      let c = null, v = !1;
      try {
        e.setPointerCapture(i);
      } catch {
      }
      const k = (L) => {
        if (L.pointerId === i) {
          if (L.pointerType === "mouse" && L.buttons === 0) {
            A(!1);
            return;
          }
          if (!c) {
            if (Math.hypot(L.clientX - s, L.clientY - l) < 6) return;
            c = Fs(e, t, s, l);
          }
          c.move(L.clientX, L.clientY);
        }
      }, f = (L) => {
        L.pointerId === i && A(!1);
      }, m = (L) => {
        L.pointerId === i && A(!0);
      }, N = () => A(!1), U = () => A(!0), V = (L) => {
        L.key === "Escape" && c && (L.preventDefault(), L.stopPropagation(), A(!0));
      };
      function A(L) {
        if (!v && (v = !0, window.removeEventListener("pointermove", k, !0), window.removeEventListener("pointerup", f, !0), window.removeEventListener("pointercancel", m, !0), window.removeEventListener("keydown", V, !0), window.removeEventListener("blur", U), e.removeEventListener("lostpointercapture", N), c)) {
          const re = c;
          c = null, n = !0, setTimeout(() => {
            n = !1;
          }, 0), re.drop(L);
        }
      }
      window.addEventListener("pointermove", k, !0), window.addEventListener("pointerup", f, !0), window.addEventListener("pointercancel", m, !0), window.addEventListener("keydown", V, !0), window.addEventListener("blur", U), e.addEventListener("lostpointercapture", N);
    });
  }
  const Wn = (ns = window.matchMedia) == null ? void 0 : ns.call(window, "(max-width: 620px)");
  function jn() {
    var e;
    return !!((e = window.matchMedia) != null && e.call(window, "(max-width: 620px)").matches);
  }
  const Oi = (e) => e.charAt(0).toUpperCase() + e.slice(1), ka = (e) => e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "movement";
  let vo = null, Ne = null;
  function Sa(e, t, n, o) {
    et(), a("sheetTitle").textContent = e;
    const i = a("sheetBody");
    i.innerHTML = "", i.appendChild(t), vo = n || null, a("sheet").setAttribute("aria-hidden", "false"), a("sheetScrim").classList.add("open"), a("sheet").classList.add("open"), setTimeout(() => {
      if (!a("sheet").classList.contains("open") || !i.contains(t)) return;
      const s = o ? i.querySelector("input[data-f=url],input[data-f=name]") : i.querySelector("button,input,select");
      s == null || s.focus({ preventScroll: !0 });
    }, pt() ? 0 : 360);
  }
  function et() {
    const e = a("sheet");
    if (!e.classList.contains("open")) return;
    e.classList.remove("open"), a("sheetScrim").classList.remove("open"), e.setAttribute("aria-hidden", "true"), e.contains(r.activeElement) && r.activeElement.blur();
    const t = vo;
    vo = null, t == null || t(), setTimeout(Ut, 0);
  }
  a("sheetScrim").addEventListener("click", et), a("sheet").addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), et());
  });
  function _i(e, t) {
    const n = po(e, t.indexOf(e), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        et(), ye(), Te(Oi(ka(e)) + " updated");
      },
      onCancel: et,
      onHide() {
        e.hidden = !e.hidden, et(), ye(), Te((e.hidden ? "Hidden: " : "Showing: ") + e.name);
      },
      onRemove() {
        et();
        const o = t.indexOf(e);
        o < 0 || (t.splice(o, 1), ye(), Te("Removed " + e.name, { label: "Undo", run: () => {
          t.splice(Math.min(o, t.length), 0, e), ye();
        } }));
      }
    });
    Sa("Edit " + ka(e), n, null, !1);
  }
  function Ds() {
    const e = document.createElement("div");
    e.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([t, n, o, i]) => {
      const s = document.createElement("button");
      s.type = "button", s.className = "sheetChoice", s.innerHTML = '<span class="timeIcon" aria-hidden="true">' + Ct(n) + "</span><span><strong>" + o + "</strong><small>" + i + "</small></span>", s.addEventListener("click", () => Gi(t)), e.appendChild(s);
    }), Sa("Add to the move", e, null, !1);
  }
  function Gi(e) {
    Ne && Ma();
    const t = Bi(e, a("strengthList")), n = po(t, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        et(), zs(t, e);
      },
      onCancel: et
    });
    Sa("New " + ka(t), n, null, !0);
  }
  const Ca = a("workoutModal").querySelector(".modalStatic"), Wi = { parent: Ca.parentNode, next: Ca.nextSibling };
  function Hs() {
    const e = document.createElement("div");
    e.className = "sheetSetup", e.appendChild(Ca);
    const t = document.createElement("button");
    t.type = "button", t.className = "primary sheetDone", t.textContent = "Done", t.addEventListener("click", et), e.appendChild(t), Sa("Setup", e, () => {
      Wi.parent.insertBefore(Ca, Wi.next), fo();
    }, !1);
  }
  function fo() {
    var t, n;
    const e = a("setupSummaryName");
    e && (e.textContent = (((t = a("workoutNameInput")) == null ? void 0 : t.value) || "").trim() || ((n = pe[me]) == null ? void 0 : n.name) || "Move", a("setupSummaryMeta").textContent = Ci.textContent);
  }
  a("setupSummary").addEventListener("click", Hs), a("addFab").addEventListener("click", Ds);
  function ji() {
    const e = a("strengthList");
    return go(e) || e.closest(".exerciseScroller");
  }
  function xo() {
    const e = a("strengthList").getBoundingClientRect(), t = (ji() || a("strengthList")).getBoundingClientRect(), n = (Ne == null ? void 0 : Ne.ghost.offsetHeight) || 64;
    return { left: e.left, top: Math.max(t.top + 12, Math.min(t.bottom - n - 96, t.top + t.height * 0.55 - n / 2)), width: e.width, height: n };
  }
  function zs(e, t) {
    var c;
    const n = Vi(t, [e.name || zi[t][0], "Drag into place"]);
    n.classList.add("overList", "hovering"), n.setAttribute("aria-label", (e.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const o = document.createElement("span");
    o.className = "addGhostActions", o.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + ne(e.name) + '">✕</button>', n.appendChild(o), Ne = { item: e, type: t, ghost: n };
    const i = ((c = r.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : c.offsetHeight) || 64;
    n.style.width = a("strengthList").getBoundingClientRect().width + "px", n.style.height = i + "px";
    const s = xo(), l = je.querySelector(".modal").getBoundingClientRect().bottom;
    n.style.transform = "translate(" + s.left + "px," + l + "px)", n.getBoundingClientRect(), pt() || (n.classList.add("rising"), setTimeout(() => n.classList.remove("rising"), 650)), n.style.transform = "translate(" + s.left + "px," + s.top + "px)", o.querySelector("[data-a=end]").addEventListener("click", Ma), o.querySelector("[data-a=discard]").addEventListener("click", qs), n.addEventListener("pointerdown", Vs);
  }
  function Vs(e) {
    if (!Ne || e.target.closest("button") || e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const { item: t, ghost: n } = Ne, o = e.pointerId;
    try {
      n.setPointerCapture(o);
    } catch {
    }
    n.classList.remove("hovering", "rising"), n.classList.add("held");
    const i = n.getBoundingClientRect(), s = ji(), l = qi({
      ghost: n,
      origin: { left: i.left, top: i.top, width: i.width, height: i.height },
      sx: e.clientX,
      sy: e.clientY,
      scroller: s,
      column: a("strengthList").closest(".exerciseScroller,.createFlow") || s,
      rowLook: !0,
      home: xo,
      onDrop: (A, L, re) => {
        Ne = null, Gn(n), Yi(t, A, L, re);
      },
      onReturn: () => {
        n.classList.remove("held"), n.classList.add("hovering");
      }
    });
    let c = !1;
    const v = (A) => {
      if (A.pointerId === o) {
        if (A.pointerType === "mouse" && A.buttons === 0) {
          V(!1);
          return;
        }
        l.move(A.clientX, A.clientY);
      }
    }, k = (A) => {
      A.pointerId === o && V(!1);
    }, f = (A) => {
      A.pointerId === o && V(!0);
    }, m = () => V(!1), N = () => V(!0), U = (A) => {
      A.key === "Escape" && (A.preventDefault(), V(!0));
    };
    function V(A) {
      c || (c = !0, window.removeEventListener("pointermove", v, !0), window.removeEventListener("pointerup", k, !0), window.removeEventListener("pointercancel", f, !0), window.removeEventListener("keydown", U, !0), window.removeEventListener("blur", N), n.removeEventListener("lostpointercapture", m), l.drop(A));
    }
    window.addEventListener("pointermove", v, !0), window.addEventListener("pointerup", k, !0), window.addEventListener("pointercancel", f, !0), window.addEventListener("keydown", U, !0), window.addEventListener("blur", N), n.addEventListener("lostpointercapture", m);
  }
  function Yi(e, t, n, o) {
    const i = _n(t);
    e.kind !== "rest" && e.kind !== "video" && (e.kind = i.kind, i.group && (!e.group || e.group === "Movement") && (e.group = i.group)), i.arr.splice(Math.max(0, Math.min(n, i.arr.length)), 0, e), Fi(t.closest(".exerciseScroller,.createStepSlot") || t, () => ye()), Di(t.querySelector('.moveRow[data-id="' + e.id + '"]'), o), Te(Oi(ka(e)) + " added");
  }
  function Ma() {
    var o;
    if (!Ne) return;
    const { item: e, ghost: t } = Ne;
    Ne = null, Gn(t);
    const n = a("strengthList");
    Yi(e, n, _n(n).arr.length, 0), (o = n.querySelector('.moveRow[data-id="' + e.id + '"]')) == null || o.scrollIntoView({ block: "nearest", behavior: pt() ? "auto" : "smooth" });
  }
  function qs() {
    if (!Ne) return;
    const e = Ne.ghost;
    Ne = null, Gn(e), Te("Discarded");
  }
  function Ui() {
    Ne && (Ne.ghost.remove(), Ne = null);
  }
  window.addEventListener("resize", () => {
    if (Ne != null && Ne.ghost.classList.contains("hovering")) {
      const e = xo();
      Ne.ghost.style.width = e.width + "px", Ne.ghost.style.transform = "translate(" + e.left + "px," + e.top + "px)";
    }
  }), (as = Wn == null ? void 0 : Wn.addEventListener) == null || as.call(Wn, "change", () => {
    et(), Ne && !jn() && Ma(), mo();
  });
  {
    const e = a("workoutModal").querySelector(".modal");
    e.addEventListener("scroll", () => {
      (e.scrollTop || e.scrollLeft) && (e.scrollTop = 0, e.scrollLeft = 0);
    });
  }
  function Ut() {
    const e = a("workoutModal"), t = window.visualViewport;
    if (!e.classList.contains("open") || !jn()) {
      Ki();
      return;
    }
    const n = t ? t.offsetTop : 0, o = t ? t.offsetLeft : 0, i = t ? t.width : window.innerWidth, s = t ? t.height : window.innerHeight;
    Object.assign(e.style, { right: "auto", bottom: "auto", width: i + "px", height: s + "px", top: n + "px", left: o + "px" });
    const l = e.getBoundingClientRect();
    Math.abs(l.top - n) > 0.5 && (e.style.top = 2 * n - l.top + "px"), Math.abs(l.left - o) > 0.5 && (e.style.left = 2 * o - l.left + "px");
  }
  function Ki() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((e) => a("workoutModal").style.removeProperty(e));
  }
  (os = window.visualViewport) == null || os.addEventListener("resize", Ut), (is = window.visualViewport) == null || is.addEventListener("scroll", Ut), window.addEventListener("resize", Ut), window.addEventListener("scroll", Ut, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(Ut, 250));
  function bo() {
    Je.length > 0;
    const e = a("addMovementBtn"), t = a("addRestBtn");
    e && (e.innerHTML = On + "<span>Add movement</span>"), t && (t.innerHTML = On + "<span>Add rest</span>");
    const n = a("addVideoBtn");
    n && (n.innerHTML = On + "<span>Add video</span>");
  }
  function Yn() {
    const e = a("useGlobalTiming").checked, t = a("addMovementDuration"), n = a("addMovementUnit");
    t.disabled = e, n.disabled = e, t.parentElement.style.opacity = e ? ".38" : "1", a("globalTimingValue").textContent = "Use global timing · " + We(b.value);
    const o = a("useGlobalRestTiming").checked, i = a("addRestDuration"), s = a("addRestUnit");
    i.disabled = o, s.disabled = o, i.parentElement.style.opacity = o ? ".38" : "1", a("globalRestTimingValue").textContent = "Use global timing · " + We(M.value);
  }
  let Zi = "movement";
  function Os(e) {
    Zi = e;
    const t = a("movementFields"), n = a("restFields");
    t.hidden = e !== "movement", n.hidden = e !== "rest", a("movementCreatorHeading").textContent = "Add movement", a("movementCreator").setAttribute("aria-label", "Create movement"), Yn();
  }
  function wo() {
    pe[me];
    const e = Ae ? !0 : a("useGlobalTiming").checked, t = e ? Number(b.value) : ba(
      a("addMovementDuration").value,
      a("addMovementUnit").value
    ), n = Ae ? !0 : a("useGlobalRestTiming").checked, o = n ? Number(M.value) : ba(
      a("addRestDuration").value,
      a("addRestUnit").value
    );
    if (Zi === "rest") {
      const i = a("addRestTitle").value.trim() || "Rest", s = a("addRestGroup").value.trim() || "Rest";
      Je.push({
        id: "rest-" + Date.now(),
        name: i,
        group: s,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: n,
        duration: Math.max(5, o || Number(M.value))
      }), ye(), a("movementCreator").hidden = !0, a("addRestTitle").value = "Rest", a("addRestGroup").value = "Rest", Te("Rest added"), Ae && (Z("movements"), Me());
    } else {
      const i = a("addMovementInput").value.trim();
      if (!i) return;
      const s = a("addMovementGroup").value.trim() || "Movement";
      Je.push({
        id: "movement-" + Date.now(),
        name: i,
        group: s,
        kind: "work",
        hidden: !1,
        useGlobalTiming: e,
        duration: Math.max(5, t || Number(b.value))
      }), a("addMovementInput").value = "", a("addMovementGroup").value = "", ye(), a("movementCreator").hidden = !0, Te("Movement added"), Ae && (Z("movements"), Me());
    }
    bo();
  }
  let yo = null;
  function Te(e, t) {
    const n = a("toast");
    n.innerHTML = "";
    const o = document.createElement("span");
    if (o.textContent = e, n.appendChild(o), t) {
      const i = document.createElement("button");
      i.type = "button", i.className = "toastAction", i.textContent = t.label, i.addEventListener("click", () => {
        t.run(), n.classList.remove("show", "withAction"), clearTimeout(yo);
      }), n.appendChild(i);
    }
    n.classList.toggle("withAction", !!t), n.classList.add("show"), clearTimeout(yo), yo = setTimeout(() => n.classList.remove("show", "withAction"), t ? 5e3 : 2200);
  }
  const _s = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], Gs = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function Xi(e) {
    return Math.max(0, Math.min(5, Math.floor(Number(e) / 100 * 6)));
  }
  function sn(e, t) {
    return _s[Xi(t)];
  }
  function Ws(e) {
    return Gs[Xi(e)];
  }
  function Ie(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  function Bt() {
    return { morning: he().morningTime || "08:00", evening: he().eveningTime || "19:00" };
  }
  function ln(e) {
    const [t, n] = String(e).split(":").map(Number);
    return (t || 0) * 60 + (n || 0);
  }
  function js(e) {
    const t = Bt();
    return e.getHours() * 60 + e.getMinutes() >= ln(t.evening) ? "evening" : "morning";
  }
  function Ta(e, t) {
    return ge.checkins.find((n) => n.date === e && n.slot === t);
  }
  function La(e) {
    return !!(e && e.mood != null && e.energy != null);
  }
  function Ea() {
    const e = /* @__PURE__ */ new Date(), t = Ie(e), n = js(e), o = Bt(), i = e.getHours() * 60 + e.getMinutes();
    return n === "morning" && i < ln(o.morning) || La(Ta(t, n)) ? null : n;
  }
  const Pt = a("checkinModal"), Ft = a("checkinTab"), Ys = a("checkinBadge"), Dt = { mood: { input: a("moodInput"), fill: a("moodFill") }, energy: { input: a("energyLevelInput"), fill: a("energyLevelFill") } };
  function $i(e) {
    const { input: t, fill: n } = Dt[e];
    n.style.width = t.value + "%", t.setAttribute("aria-valuetext", sn(e, t.value));
  }
  Object.keys(Dt).forEach((e) => Dt[e].input.addEventListener("input", () => $i(e)));
  let bt = null;
  function Ji() {
    const e = Bt(), t = /* @__PURE__ */ new Date(), n = t.getHours() * 60 + t.getMinutes();
    return n < ln(e.morning) ? "Next check-in at " + e.morning : n < ln(e.evening) ? "Next check-in at " + e.evening : "Next check-in tomorrow at " + e.morning;
  }
  function Us() {
    const e = Bt(), t = /* @__PURE__ */ new Date(), n = t.getHours() * 60 + t.getMinutes(), o = (i, s) => {
      const [l, c] = i.split(":").map(Number);
      return new Date(t.getFullYear(), t.getMonth(), t.getDate() + (s ? 1 : 0), l, c);
    };
    return n < ln(e.morning) ? { date: o(e.morning), time: e.morning } : n < ln(e.evening) ? { date: o(e.evening), time: e.evening } : { date: o(e.morning, !0), time: e.morning };
  }
  let ko = null, So = null;
  function Qi() {
    if (Ea()) {
      Ra(), Kt();
      return;
    }
    const e = Us(), t = Math.max(0, Math.round((e.date - Date.now()) / 1e3)), n = Math.floor(t / 3600), o = Math.floor(t % 3600 / 60), i = t % 60;
    a("peekCountdown").textContent = n + ":" + String(o).padStart(2, "0") + ":" + String(i).padStart(2, "0"), a("peekAt").textContent = "Available at " + e.time;
  }
  function Ks() {
    Qi(), Ft.classList.add("peek"), clearInterval(So), So = setInterval(Qi, 1e3), clearTimeout(ko), ko = setTimeout(Ra, 6e3);
  }
  function Ra() {
    Ft.classList.remove("peek"), clearInterval(So), clearTimeout(ko);
  }
  function er() {
    const e = Ea();
    if (!e) {
      Ft.classList.contains("peek") ? Ra() : Ks();
      return;
    }
    bt = { date: Ie(/* @__PURE__ */ new Date()), slot: e };
    const n = Ta(bt.date, e), o = ge.checkins.find((i) => La(i));
    Object.keys(Dt).forEach((i) => {
      Dt[i].input.value = (n == null ? void 0 : n[i]) ?? (o == null ? void 0 : o[i]) ?? 50, $i(i);
    }), a("checkinTitle").textContent = e === "morning" ? "Morning check-in" : "Evening check-in", Pt.classList.add("open"), Pt.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => Dt.mood.input.focus());
  }
  function Un() {
    Pt.classList.remove("open"), Pt.setAttribute("aria-hidden", "true"), bt && (Kn = bt.date + "-" + bt.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", Kn);
    } catch {
    }
    bt = null, Kt();
  }
  function Zs() {
    if (!bt) return;
    if (La(Ta(bt.date, bt.slot))) {
      Un();
      return;
    }
    const { date: e, slot: t } = bt;
    let n = Ta(e, t);
    n || (n = { date: e, slot: t }, ge.checkins.unshift(n), ge.checkins = ge.checkins.slice(0, 2e3)), n.mood = Number(Dt.mood.input.value), n.energy = Number(Dt.energy.input.value), n.scale = 100, n.at = (/* @__PURE__ */ new Date()).toISOString(), ft(), d.fire("checkin", { slot: t, mood: n.mood, energy: n.energy, mood_label: sn("mood", n.mood), energy_label: sn("energy", n.energy) }), Te((t === "morning" ? "Morning" : "Evening") + " check-in saved"), Un(), Aa(), Zn(), en(), At();
  }
  let Kn = "";
  try {
    Kn = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function Kt() {
    const e = Ea();
    Ys.hidden = !e, Ft.hidden = !e, e || Ra(), Ft.classList.toggle("due", !!e), Ft.setAttribute("aria-label", e ? (e === "morning" ? "Morning" : "Evening") + " check-in is due" : Ji()), Ft.title = e ? "Check in now" : Ji();
  }
  function Co() {
    Kt();
    const e = Ea();
    !e || Pt.classList.contains("open") || he().checkinAutoOpen !== !1 && (a("app").classList.contains("house") || !ce.home.classList.contains("active") || je.classList.contains("open") || Kn !== Ie(/* @__PURE__ */ new Date()) + "-" + e && er());
  }
  Ft.addEventListener("click", er), a("checkinLater").addEventListener("click", Un), a("checkinSave").addEventListener("click", Zs), Pt.addEventListener("click", (e) => {
    e.target === Pt && Un();
  }), Pt.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), Un());
  }), setInterval(Co, 3e4);
  function Aa() {
    const e = Ie(/* @__PURE__ */ new Date()), t = (n) => ge.checkins.find((o) => o.date === e && o[n] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([n, o]) => {
      const i = t(n);
      a(o).textContent = i ? sn(n, i[n]) : "—";
    });
  }
  function Zn() {
    const e = a("feelCard");
    if (!e) return;
    const t = /* @__PURE__ */ new Date(), n = new Date(t.getFullYear(), t.getMonth(), t.getDate() - (t.getDay() + 6) % 7), o = [...Array(7)].map((k, f) => {
      const m = new Date(n.getFullYear(), n.getMonth(), n.getDate() + f), N = Ie(m), U = ge.checkins.filter((A) => A.date === N), V = (A) => {
        const L = U.map((re) => re[A]).filter((re) => re != null);
        return L.length ? L.reduce((re, se) => re + se, 0) / L.length : null;
      };
      return { d: m, key: N, mood: V("mood"), energy: V("energy"), count: U.filter(La).length, future: m > t && N !== Ie(t) };
    }), i = (k) => {
      const f = o.map((m) => m[k]).filter((m) => m != null);
      return f.length ? f.reduce((m, N) => m + N, 0) / f.length : null;
    }, s = i("mood"), l = i("energy"), c = (k, f) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + k + "</span><span>" + (f == null ? "—" : ne(sn("", f))) + '</span></div><div class="feelTrack"><span style="width:' + (f == null ? 0 : Math.max(4, f)) + "%;background:" + (f == null ? "transparent" : Ws(f)) + '"></span></div></div>', v = o.filter((k) => k.mood != null && k.energy != null).sort((k, f) => f.mood + f.energy - (k.mood + k.energy))[0];
    e.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (s == null ? "No check-ins yet" : ne(sn("", (s + l) / 2))) + '</div><div class="weekCopy">' + (s == null ? "Your first check-in will appear here." : "on average this week" + (v ? " · best day " + ne(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(v.d)) : "")) + '</div></div></div><div class="feelDays">' + o.map(
      (k) => '<div class="weekChip feelDay' + (k.future ? " future" : "") + (k.key === Ie(t) ? " today" : "") + '"><div class="weekChipTop"><strong>' + ne(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(k.d)) + "</strong>" + (k.count >= 2 ? '<span class="weekTick">' + Ct("check") + "</span>" : '<span class="feelDots">' + "●".repeat(k.count) + "</span>") + "</div>" + c("Mood", k.mood) + c("Energy", k.energy) + "</div>"
    ).join("") + "</div>";
  }
  const Na = a("upcomingCountSetting");
  Na.addEventListener("change", () => {
    rn = Na.value === "all" ? "all" : Number(Na.value), gr();
  });
  const Xn = a("tempoRevealBtn"), Mo = a("tempoExperiment"), wt = a("tempoQuad"), dn = a("tempoDot"), Xs = a("tempoEstimate"), $s = a("tempoReadout");
  let cn = { x: 0.5, y: 0.5 }, $n = !1, Ia = { total: 20, work: 45, rest: 15 };
  function To(e, t, n, o) {
    const i = Math.max(t, Math.min(n, e));
    return Math.round((i - t) / o) * o + t;
  }
  function Js(e, t) {
    const n = (e - 0.5) * 2, o = (t - 0.5) * 2, i = To(
      Ia.total + n * 5 + o * 8,
      Number(x.min),
      Number(x.max),
      Number(x.step)
    ), s = To(
      Ia.work + n * 10 + o * 8,
      Number(b.min),
      Number(b.max),
      Number(b.step)
    ), l = To(
      Ia.rest + n * 6 + o * 6,
      Number(M.min),
      Number(M.max),
      Number(M.step)
    );
    return x.value = i, b.value = s, M.value = l, H.textContent = s + " sec", z.textContent = l + " sec", xa(), { total: i, work: s, rest: l };
  }
  function Lo(e, t) {
    const n = e < 0.34 ? "Low" : e > 0.66 ? "Hard" : "Medium", o = t < 0.34 ? "Fast" : t > 0.66 ? "Slow" : "Balanced", i = Js(e, t);
    $s.textContent = n + " + " + o, Xs.textContent = i.total + " min", wt.setAttribute("aria-valuetext", n + " and " + o + ", estimated " + i.total + " minutes");
  }
  function Eo(e) {
    const t = wt.getBoundingClientRect(), n = Math.max(0, Math.min(1, (e.clientX - t.left) / t.width)), o = Math.max(0, Math.min(1, (e.clientY - t.top) / t.height));
    cn = { x: n, y: o }, dn.style.left = n * 100 + "%", dn.style.top = o * 100 + "%", Lo(n, o);
  }
  Xn.addEventListener("click", () => {
    const e = Mo.hidden;
    Mo.hidden = !e, Xn.setAttribute("aria-expanded", e ? "true" : "false"), Xn.textContent = e ? "Now close this" : "Don’t try this!", e && (Ia = {
      total: Number(x.value),
      work: Number(b.value),
      rest: Number(M.value)
    }, cn = { x: 0.5, y: 0.5 }, dn.style.left = "50%", dn.style.top = "50%", Lo(cn.x, cn.y));
  }), r.querySelectorAll("[data-feedback-rating]").forEach((e) => e.addEventListener("click", () => {
    Number(e.dataset.feedbackRating), r.querySelectorAll("[data-feedback-rating]").forEach((t) => t.classList.toggle("selected", t === e));
  }));
  const Ba = a("testingFeedbackForm"), tr = a("testingFeedbackThanks"), Qs = a("testingFeedbackAgain");
  Ba.addEventListener("submit", (e) => {
    e.preventDefault(), Ba.hidden = !0, tr.hidden = !1, Te("Feedback captured for prototype");
  }), Qs.addEventListener("click", (e) => {
    e.preventDefault(), Ba.reset(), r.querySelectorAll("[data-feedback-rating]").forEach((t) => t.classList.remove("selected")), tr.hidden = !0, Ba.hidden = !1;
  }), wt.addEventListener("pointerdown", (e) => {
    var t;
    $n = !0, Eo(e);
    try {
      (t = wt.setPointerCapture) == null || t.call(wt, e.pointerId);
    } catch {
    }
  }), wt.addEventListener("pointermove", (e) => {
    $n && Eo(e);
  }), wt.addEventListener("pointerup", (e) => {
    $n && ($n = !1, Eo(e), ye());
  }), wt.addEventListener("pointercancel", () => $n = !1), wt.addEventListener("keydown", (e) => {
    let { x: t, y: n } = cn, o = !0;
    e.key === "ArrowLeft" ? t -= 0.05 : e.key === "ArrowRight" ? t += 0.05 : e.key === "ArrowUp" ? n -= 0.05 : e.key === "ArrowDown" ? n += 0.05 : o = !1, o && (e.preventDefault(), t = Math.max(0, Math.min(1, t)), n = Math.max(0, Math.min(1, n)), cn = { x: t, y: n }, dn.style.left = t * 100 + "%", dn.style.top = n * 100 + "%", Lo(t, n), ye());
  });
  const je = a("workoutModal");
  let Jn = null;
  function pn(e) {
    return e.map((t) => ({ ...t }));
  }
  function el() {
    const e = pe[me];
    return {
      key: me,
      profile: e ? JSON.parse(JSON.stringify(e)) : null,
      warmup: pn(lt),
      strength: pn(Je),
      cooldown: pn(dt),
      total: Number(x.value),
      work: Number(b.value),
      rest: Number(M.value),
      rounds: Number(we.value) || 1
    };
  }
  function nr(e = !1) {
    Ae = !!e, Qe = null, ct = null, et(), Ui(), Jn = el(), a("moveEditorTitle").textContent = Ae ? "Create new move" : "Edit move", a("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", a("moveEditorSubtitle").hidden = !Ae, a("warmupRow").hidden = Ae, a("deleteMoveOpen").hidden = Ae;
    const t = a("createMoveOptions");
    t.hidden = !Ae;
    {
      const n = pe[me];
      a("includeWarmupPreset").checked = !!(n != null && n.includeWarmup), a("includeCooldownPreset").checked = !!(n != null && n.includeCooldown);
    }
    if (ar(), Ae) {
      a("useGlobalTiming").checked = !0, a("useGlobalRestTiming").checked = !0;
      const n = pe[me];
      lo((n == null ? void 0 : n.preset) || "movement", !1);
    }
    a("movementCreator").hidden = !0, Os("movement"), bo(), Yn(), Mo.hidden = !0, Xn.setAttribute("aria-expanded", "false"), Xn.textContent = "Don’t try this!", je.classList.toggle("createMode", Ae), je.querySelector(".modal").classList.toggle("createMode", Ae), je.classList.add("open"), je.setAttribute("aria-hidden", "false"), Ut(), Ae && Oe();
  }
  function tl() {
    const e = pe[me];
    return e != null && e.customSequence ? !!e.includeWarmup : !(e != null && e.warmupOff);
  }
  function ar() {
    const e = tl(), t = a("warmupSwitch");
    t.classList.toggle("on", e), t.setAttribute("aria-checked", String(e));
  }
  a("warmupSwitch").addEventListener("click", () => {
    const e = pe[me];
    e && (e.customSequence ? (a("includeWarmupPreset").checked = !e.includeWarmup, co()) : (e.warmupOff = !e.warmupOff, ye()), ar());
  });
  function Pa() {
    et(), Ui(), Ki(), ct = null, Qe = null, je.classList.contains("createMode") && T(), je.classList.remove("createMode"), je.querySelector(".modal").classList.remove("createMode"), je.classList.remove("open"), je.setAttribute("aria-hidden", "true");
  }
  function or() {
    if (!Jn) return;
    const e = Jn;
    e.profile && (pe[e.key] = JSON.parse(JSON.stringify(e.profile))), me = e.key, lt = pn(e.warmup), Je = pn(e.strength), dt = pn(e.cooldown), x.value = e.total, b.value = e.work, M.value = e.rest, we.value = e.rounds || 1;
    const t = pe[me];
    if (t) {
      r.querySelectorAll(".workoutPanel[data-workout]").forEach((o) => o.classList.toggle("active", o.dataset.workout === me));
      const n = r.querySelector(".workoutPanel.active");
      if (n) {
        const o = n.querySelector(".workoutName");
        o && (o.textContent = t.name);
        const i = n.querySelector(".panelCollapsedText");
        i && (i.textContent = t.name);
        const s = n.querySelector(".sourceTag");
        s && (s.textContent = t.source);
      }
      w.value = t.name;
    }
    ye();
  }
  a("cancelWorkoutEdit").addEventListener("click", () => {
    if (Ae) {
      const e = me;
      delete pe[e], Ae = !1, jt = null, xt(ge.order.find((t) => pe[t]) || Object.keys(pe)[0]);
    } else
      or();
    Pa();
  }), a("saveWorkoutEdit").addEventListener("click", () => {
    et(), Ne && Ma();
    const e = pe[me], t = w.value.trim() || "New move";
    if (e && (e.name = t), ya(), Qe = null, ye(), Ae && e)
      ro(me, e), r.querySelectorAll(".workoutPanel[data-workout]").forEach((n) => n.classList.toggle("active", n.dataset.workout === me)), Ae = !1, jt = null, ge.order.includes(me) || ge.order.push(me), Te("Move created");
    else {
      const n = r.querySelector(".workoutPanel.active");
      if (n) {
        const o = n.querySelector(".workoutName");
        o && (o.textContent = t);
        const i = n.querySelector(".panelCollapsedText");
        i && (i.textContent = t);
      }
      Te("Move saved");
    }
    Jn = null, Pa(), ft();
  }), je.addEventListener("click", (e) => {
    if (e.target === je) {
      if (Ae) {
        const t = me;
        delete pe[t], Ae = !1, jt = null, xt(ge.order.find((n) => pe[n]) || Object.keys(pe)[0]);
      } else
        or();
      Pa();
    }
  }), ho(a("addMovementBtn"), "movement"), ho(a("addRestBtn"), "rest"), ho(a("addVideoBtn"), "video"), a("closeMovementCreator").addEventListener("click", () => {
    a("movementCreator").hidden = !0;
  }), a("useGlobalTiming").addEventListener("change", Yn), a("useGlobalRestTiming").addEventListener("change", Yn), r.querySelectorAll(".createPresetBtn").forEach((e) => e.addEventListener("click", () => {
    lo(e.dataset.movePreset, !0), ye();
  })), a("includeWarmupPreset").addEventListener("change", co), a("includeCooldownPreset").addEventListener("change", co), a("includeWarmupPreset").addEventListener("change", Me), a("includeCooldownPreset").addEventListener("change", Me), w.addEventListener("input", Me), w.addEventListener("input", fo), a("confirmAddMovement").addEventListener("click", wo), a("confirmAddRest").addEventListener("click", wo), a("addMovementInput").addEventListener("keydown", (e) => {
    e.key === "Enter" && wo();
  });
  const Qn = a("countdown"), Ro = a("countNum"), Mt = a("countdownPixelCanvas");
  let ea = null, Ao = "appear";
  class nl {
    constructor(t, n, o, i, s, l, c) {
      this.width = t.width, this.height = t.height, this.ctx = n, this.x = o, this.y = i, this.color = s, this.speed = (Math.random() * 0.8 + 0.1) * l, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = c, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let No = [], ir = 1, rr = 1;
  function Zt() {
    const e = parseFloat(getComputedStyle(a("app")).zoom);
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  function al() {
    var k;
    if (!Mt) return;
    const e = Zt(), t = Math.max(1, window.innerWidth / e), n = Math.max(1, window.innerHeight / e);
    ir = t, rr = n;
    const o = Math.min(window.devicePixelRatio || 1, 2);
    Mt.width = Math.floor(t * o), Mt.height = Math.floor(n * o), Mt.style.width = t + "px", Mt.style.height = n + "px";
    const i = Mt.getContext("2d");
    i.setTransform(o, 0, 0, o, 0, 0);
    const s = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], l = 12, c = (k = window.matchMedia) == null ? void 0 : k.call(window, "(prefers-reduced-motion: reduce)").matches, v = c ? 0 : 0.055;
    No = [];
    for (let f = 0; f < t; f += l)
      for (let m = 0; m < n; m += l) {
        const N = f - t / 2, U = m - n / 2, V = Math.sqrt(N * N + U * U), A = c ? 0 : Math.random() * 75 + V * 0.05, L = new nl({ width: t, height: n }, i, f, m, s[Math.floor(Math.random() * s.length)], v, A);
        L.maxSizeInteger = 4, L.maxSize = Math.random() * 3.2 + 0.8, L.sizeStep = 0.35 + Math.random() * 0.45, No.push(L);
      }
  }
  function sr(e) {
    cancelAnimationFrame(ea), Ao = e;
    const t = Mt == null ? void 0 : Mt.getContext("2d");
    if (!t) return;
    function n() {
      t.clearRect(0, 0, ir, rr);
      let o = !0;
      No.forEach((i) => {
        i[Ao](), i.isIdle || (o = !1);
      }), Ao === "disappear" && o || (ea = requestAnimationFrame(n));
    }
    ea = requestAnimationFrame(n);
  }
  function Fa() {
    cancelAnimationFrame(ea), al(), sr("appear"), setTimeout(() => sr("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    Qn.classList.contains("active") && Fa();
  });
  const ta = a("pixelTrailCanvas"), un = ta.getContext("2d");
  let Tt = !0, mn = 0.7, gn = 600, na = [], hn = null, Ht = { x: 0, y: 0, ready: !1 };
  function lr() {
    const e = y.getBoundingClientRect(), t = Zt(), n = Math.min(window.devicePixelRatio || 1, 2), o = Math.max(1, e.width / t), i = Math.max(1, e.height / t);
    ta.width = Math.max(1, Math.floor(o * n)), ta.height = Math.max(1, Math.floor(i * n)), ta.style.width = o + "px", ta.style.height = i + "px", un.setTransform(n, 0, 0, n, 0, 0);
  }
  function ol(e, t) {
    if (!Tt) return;
    const n = performance.now();
    Ht.ready || (Ht = { x: e, y: t, ready: !0 });
    const o = 7;
    for (let i = 1; i <= o; i++) {
      const s = i / o;
      na.push({
        x: Ht.x + (e - Ht.x) * s,
        y: Ht.y + (t - Ht.y) * s,
        born: n - (o - i) * 10
      });
    }
    Ht = { x: e, y: t, ready: !0 };
  }
  function Da(e) {
    if (hn = null, !C) return;
    if (!ce.workout.classList.contains("active")) {
      hn = requestAnimationFrame(Da);
      return;
    }
    const t = y.getBoundingClientRect(), n = Zt();
    un.clearRect(0, 0, t.width / n, t.height / n), Tt && (na = na.filter((i) => e - i.born < gn), un.fillStyle = a("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", na.forEach((i) => {
      const s = (e - i.born) / gn, l = (1 - s) * mn, c = Math.round(i.x / 14) * 14, v = Math.round(i.y / 14) * 14;
      un.globalAlpha = Math.max(0, l);
      const k = 2 + 5 * (1 - s) * mn;
      un.fillRect(c - k / 2, v - k / 2, k, k);
    }), un.globalAlpha = 1), hn = requestAnimationFrame(Da);
  }
  y.addEventListener("pointermove", (e) => {
    const t = y.getBoundingClientRect(), n = Zt();
    ol((e.clientX - t.left) / n, (e.clientY - t.top) / n);
  }), y.addEventListener("pointerleave", () => Ht.ready = !1), new ResizeObserver(lr).observe(y), lr(), hn = requestAnimationFrame(Da);
  const zt = a("movementRippleCanvas"), vn = zt.getContext("2d");
  let Xt = !0, fn = null, il = performance.now();
  function dr() {
    const e = zt.parentElement.getBoundingClientRect(), t = Zt(), n = Math.max(1, e.width / t), o = Math.max(1, e.height / t), i = Math.min(window.devicePixelRatio || 1, 2);
    zt.width = Math.max(1, Math.floor(n * i)), zt.height = Math.max(1, Math.floor(o * i)), zt.style.width = n + "px", zt.style.height = o + "px", vn.setTransform(i, 0, 0, i, 0, 0);
  }
  function cr() {
    var e;
    return Ge || ((e = j[ie]) == null ? void 0 : e.kind) === "rest";
  }
  function rl() {
    const e = j[ie];
    return cr() ? 2200 : e ? e.kind === "warmup" || e.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function Ha(e) {
    if (fn = null, !C) return;
    if (!ce.workout.classList.contains("active")) {
      fn = requestAnimationFrame(Ha);
      return;
    }
    const t = zt.parentElement.getBoundingClientRect(), n = Zt(), o = Math.max(1, t.width / n), i = Math.max(1, t.height / n);
    if (vn.clearRect(0, 0, o, i), Xt) {
      const s = rl(), l = (e - il) % s / s, c = 15, v = Math.max(8, Math.round(c * i / Math.max(1, o))), k = o / (c + 1), f = i / (v + 1), m = o * 0.5, N = i * 0.52, U = Math.hypot(m, N), A = a("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let L = 1; L <= v; L++)
        for (let re = 1; re <= c; re++) {
          const se = re * k, O = L * f, le = Math.hypot(se - m, O - N) / U, ve = cr(), te = ve ? Math.exp(-Math.pow((le - (l * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, $ = Math.exp(-Math.pow((le - l * 1.25) * 7, 2)), Pe = ve ? te : $, _e = ve ? 0.5 + 0.5 * Math.sin(l * Math.PI * 2 - le * 3) ** 2 : 0.35 + 0.65 * Math.sin(l * Math.PI * 2 - le * 5) ** 2, Ce = ve ? 1.4 + Pe * 4.2 * _e : 1.2 + Pe * 5 * _e;
          vn.beginPath(), vn.arc(se, O, Ce, 0, Math.PI * 2), vn.fillStyle = `rgba(${A},${ve ? 0.08 + Pe * 0.48 : 0.05 + Pe * 0.55})`, vn.fill();
        }
    }
    fn = requestAnimationFrame(Ha);
  }
  new ResizeObserver(dr).observe(zt.parentElement), dr(), fn = requestAnimationFrame(Ha);
  const aa = a("exerciseTitle"), Lt = a("exerciseMeta"), Io = a("stepLabel"), Bo = a("digits"), pr = a("fill"), xn = a("progress"), Po = a("pause"), sl = a("nextName"), ll = a("nextMeta"), dl = a("nextIcon"), za = a("skipNextSession");
  let nt = null;
  function at(e) {
    for (let t = Math.max(0, e); t < j.length; t++)
      if (!j[t].sessionHidden) return t;
    return -1;
  }
  function cl() {
    const e = j[ie];
    if (!e) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (Ge) {
      const o = at(ie + 1), i = o >= 0 ? j[o] : null;
      return i ? { name: i.name, meta: Do(i), icon: Fo(i) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (e.rest > 0) return { name: "Rest", meta: e.rest + " sec · " + (e.roundBreakAfter ? "round " + (e.round + 1) + " next" : "recovery"), icon: "pause" };
    const t = at(ie + 1), n = t >= 0 ? j[t] : null;
    return n ? { name: n.name, meta: Do(n), icon: Fo(n) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function pl() {
    if (!j[ie]) return j.length;
    const t = at(ie + 1);
    return t < 0 ? j.length : t + 1;
  }
  function Fo(e) {
    return e.kind === "video" ? "play" : "clock";
  }
  function Do(e) {
    return e.kind === "video" ? "YouTube · " + Vn(e.duration) : e.group + " · " + e.duration + " sec";
  }
  function Va() {
    return j.length && j[j.length - 1].round || 1;
  }
  function ur(e) {
    const t = j[e];
    if (!t) return "";
    const n = Va();
    if (n <= 1) return "Step " + (e + 1) + " of " + j.length;
    if (t.roundBreak) return "Round " + t.round + " of " + n + " · Rest";
    const o = j.filter((i) => i.round === t.round && !i.roundBreak).length;
    return "Round " + t.round + " of " + n + " · Step " + (t.roundIndex + 1) + " of " + o;
  }
  function mr() {
    return xn.querySelector('[data-step="' + ie + '"]');
  }
  function ul() {
    j[ie] && Number(xn.dataset.round) !== (j[ie].round || 1) && qo(), [...xn.children].forEach((e) => {
      const t = Number(e.dataset.step);
      e.classList.toggle("done", t < ie), e.classList.toggle("active", t === ie), e.classList.toggle("rewindable", t <= ie), e.disabled = t > ie, t === ie && e.style.setProperty("--segment-progress", "0%");
    }), j[ie] && (Io.textContent = ur(ie), Qt());
  }
  function ml(e) {
    const t = j.indexOf(e);
    t < 0 || t <= ie || (e.sessionHidden = !e.sessionHidden, $t(), Te((e.sessionHidden ? "Hidden " : "Included ") + e.name + " for this session"));
  }
  function gr() {
    const e = a("upcomingList");
    if (!e) return;
    e.innerHTML = "";
    const t = pl(), n = j.slice(t);
    (rn === "all" ? n : n.slice(0, Math.max(1, Number(rn) || 1))).forEach((i) => {
      const s = document.createElement("section");
      s.className = "upcomingCard" + (i.sessionHidden ? " sessionHidden" : "") + (Yo(i) ? " noMeta" : ""), s.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + Ct(Fo(i)) + '</div><div><div class="upcomingName">' + ne(i.name) + '</div><div class="upcomingMeta">' + ne(Do(i)) + (Va() > 1 ? " · round " + i.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (i.sessionHidden ? "Include this session" : "Skip this session") + "</button>", s.querySelector(".skipSessionBtn").addEventListener("click", () => ml(i)), e.appendChild(s);
    });
  }
  function $t() {
    var t;
    const e = cl();
    sl.textContent = e.name, ll.textContent = e.meta, dl.innerHTML = Ct(e.icon);
    {
      const n = Ge ? j[at(ie + 1)] : ((t = j[ie]) == null ? void 0 : t.rest) > 0 ? { kind: "rest" } : j[at(ie + 1)];
      r.querySelector(".nextCard").classList.toggle("noMeta", !!(n && Yo(n)));
    }
    if (nt = null, Ge) {
      const n = at(ie + 1);
      n >= 0 && (nt = j[n]);
    } else {
      const n = j[ie];
      if (n && n.rest > 0)
        nt = null;
      else {
        const o = at(ie + 1);
        o >= 0 && (nt = j[o]);
      }
    }
    za && (za.hidden = !nt, za.textContent = nt != null && nt.sessionHidden ? "Include this session" : "Skip this session"), gr();
  }
  za.addEventListener("click", () => {
    nt && (nt.sessionHidden = !nt.sessionHidden, Te((nt.sessionHidden ? "Hidden " : "Included ") + nt.name + " for this session"), $t());
  });
  let yt = null, Ho = null;
  function oa(e, t = {}) {
    const n = pe[me];
    d.fire(e, { move: (n == null ? void 0 : n.name) || "", move_id: me, ...t });
  }
  function gl() {
    const e = pe[me];
    yt = { key: me, name: (e == null ? void 0 : e.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(Ho), Ho = setInterval(() => {
      yt && !ht && yt.active++;
    }, 1e3), oa("started", { steps: j.length });
  }
  function hr(e) {
    if (clearInterval(Ho), !yt) return;
    const t = yt;
    yt = null, oa(e ? "completed" : "ended", { seconds: t.active }), !(t.active < 30) && (ge.history.unshift({ id: "h-" + t.startedAt, move_id: t.key, name: t.name, start: new Date(t.startedAt).toISOString(), seconds: t.active, completed: e }), ge.history = ge.history.slice(0, 1e3), ft(), en(), At());
  }
  let ut = null, ia = null, zo = !1;
  function bn() {
    return he().sounds !== !1;
  }
  function vr() {
    if (bn())
      try {
        navigator.audioSession && (navigator.audioSession.type = "playback"), ut = ut || new (window.AudioContext || window.webkitAudioContext)(), ut.state === "suspended" && ut.resume();
      } catch {
        ut = null;
      }
  }
  function Jt(e, t, n, { to: o = e, vol: i = 0.25, type: s = "sine" } = {}) {
    const l = ut.currentTime + t, c = ut.createOscillator(), v = ut.createGain();
    c.type = s, c.frequency.setValueAtTime(e, l), o !== e && c.frequency.exponentialRampToValueAtTime(o, l + n), v.gain.setValueAtTime(1e-4, l), v.gain.exponentialRampToValueAtTime(i, l + 0.01), v.gain.exponentialRampToValueAtTime(1e-4, l + n), c.connect(v).connect(ut.destination), c.start(l), c.stop(l + n + 0.02);
  }
  const hl = {
    tick: () => Jt(880, 0, 0.07, { vol: 0.18 }),
    move: () => {
      Jt(660, 0, 0.12, { type: "triangle", vol: 0.3 }), Jt(990, 0.13, 0.16, { type: "triangle", vol: 0.3 });
    },
    rest: () => Jt(660, 0, 0.4, { to: 440, vol: 0.22 }),
    done: () => {
      Jt(523, 0, 0.16, { type: "triangle" }), Jt(659, 0.16, 0.16, { type: "triangle" }), Jt(784, 0.32, 0.4, { type: "triangle" });
    }
  };
  function Et(e) {
    if (!(!bn() || !ut))
      try {
        ut.state === "suspended" && ut.resume(), hl[e]();
      } catch {
      }
  }
  function qa() {
    Ve >= 1 && Ve <= 3 && Ve !== ia && (ia = Ve, Et("tick"));
  }
  function vl() {
    vr(), p("workout"), fl();
    const e = at(0);
    e >= 0 && j[e].kind === "video" && yr(j[e]);
  }
  function Vo() {
    _a(), hr(!1), clearInterval(Fe), clearInterval(va), Ge = !1, Rt(!1), a("app").classList.remove("resting"), Qn.classList.remove("active"), p("home");
  }
  function fl() {
    Qn.classList.add("active");
    let e = 5;
    Ro.textContent = e, Et("tick"), requestAnimationFrame(Fa), clearInterval(va), va = setInterval(() => {
      e--, e > 0 ? (Ro.textContent = e, Et("tick"), Fa()) : (clearInterval(va), Ro.textContent = "GO", Et("move"), zo = !0, Fa(), setTimeout(() => {
        Qn.classList.remove("active"), cancelAnimationFrame(ea), bl();
      }, 650));
    }, 1e3);
  }
  function qo() {
    var t;
    xn.innerHTML = "";
    const e = ((t = j[Math.max(0, ie)] || j[0]) == null ? void 0 : t.round) || 1;
    xn.dataset.round = e, j.forEach((n, o) => {
      if ((n.round || 1) !== e) return;
      const i = document.createElement("button");
      i.dataset.step = o, i.type = "button", i.className = "progressSegment", i.setAttribute("aria-label", "Go to " + n.name), i.addEventListener("click", () => {
        o <= ie && xl(o);
      }), xn.appendChild(i);
    });
  }
  function Rt(e) {
    e = !!e;
    const t = ht !== e;
    if (ht = e, Po.textContent = e ? "Resume" : "Pause", a("app").classList.toggle("paused", e), Ye && Se)
      try {
        e ? Se.pauseVideo() : Se.playVideo();
      } catch {
      }
    t && yt && oa(e ? "paused" : "resumed");
  }
  function xl(e) {
    e < 0 || e >= j.length || e > ie || (clearInterval(Fe), Ge = !1, a("app").classList.remove("resting"), ie = e, Rt(!1), Mn(), Fe = setInterval(Vt, 1e3));
  }
  function bl() {
    if (ie = at(0), Rt(!1), qo(), ie < 0) {
      aa.textContent = "No activities", Lt.textContent = "Open Edit and enable or add a movement", Lt.hidden = !1;
      return;
    }
    gl(), Mn(), clearInterval(Fe), Fe = setInterval(Vt, 1e3);
  }
  const fr = a("videoStage"), wn = a("videoSound"), wl = 0, yn = 1, yl = 2;
  let xr = 0, kn = null, Sn = null, Se = null, Cn = null, Oa = 0, Oo = !1, Ye = null, _o = null;
  function br() {
    var e;
    return (e = window.YT) != null && e.Player ? Promise.resolve(window.YT) : kn || (kn = new Promise((t, n) => {
      const o = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          o == null || o();
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
  function wr() {
    return Sn || (Sn = br().then((e) => new Promise((t) => {
      const n = document.createElement("div");
      a("videoFrame").appendChild(n), Se = new e.Player(n, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => t(Se), onStateChange: (o) => Sl(o.data), onError: (o) => Cl(o.data) }
      });
    })), Sn.catch(() => {
      Sn = null;
    }), Sn);
  }
  function yr(e) {
    !(e != null && e.videoId) || e.videoError || wr().then((t) => {
      Ye || Cn === e.videoId || (Cn = e.videoId, Oa = Number(e.start) || 0, Oo = !1, t.mute(), t.loadVideoById({ videoId: e.videoId, startSeconds: Oa }));
    }).catch(() => {
    });
  }
  function kl() {
    const e = at(ie + 1);
    e >= 0 && j[e].kind === "video" && yr(j[e]);
  }
  function Sl(e) {
    if (!Ye) {
      e === yn && !Oo && (Oo = !0, Se.pauseVideo(), Se.seekTo(Oa, !0));
      return;
    }
    fr.classList.toggle("playing", e === yn), j[ie] === Ye && performance.now() > xr && (e === yn && ht ? Rt(!1) : e === yl && !ht && Rt(!0)), e === yn && Cr(Ye.videoId, Se.getDuration()) && ft(), e === wl && ra();
  }
  function Cl(e) {
    const t = Ye;
    if (!t) {
      Cn = null;
      return;
    }
    e === 101 || e === 150 ? (Ll(t.videoId), Te("That video can’t play outside YouTube, so it was skipped")) : Te("The video couldn’t play, so it was skipped"), ra();
  }
  function Ml(e) {
    if (a("app").classList.add("videoStep"), wn.hidden = !0, Ye = e, clearTimeout(_o), !e.videoId) {
      Te("This video step has no link yet, so it was skipped"), setTimeout(() => ra(), 0);
      return;
    }
    wr().then((t) => {
      if (Ye !== e) return;
      xr = performance.now() + 1500;
      const n = Number(e.start) || 0;
      Cn !== e.videoId ? (Cn = e.videoId, Oa = n, t.loadVideoById({ videoId: e.videoId, startSeconds: n })) : (t.seekTo(n, !0), t.playVideo()), t.unMute(), ht && t.pauseVideo(), _o = setTimeout(() => {
        Ye !== e || ht || (t.getPlayerState() !== yn ? (t.mute(), t.playVideo(), wn.hidden = !1) : t.isMuted() && (wn.hidden = !1));
      }, 1600);
    }).catch(() => {
      Ye === e && (Te("YouTube didn’t load, so the video was skipped"), ra());
    });
  }
  function kr() {
    if (!a("app").classList.contains("videoStep")) return;
    const e = r.querySelector(".workGrid"), t = r.querySelector(".sessionControlRow"), n = e.getBoundingClientRect().top, o = (t == null ? void 0 : t.offsetHeight) || 42, i = window.innerHeight - n - 16 - o - 84;
    e.style.setProperty("--theater-h", Math.max(240, Math.round(i)) + "px");
  }
  window.addEventListener("resize", kr);
  function _a() {
    clearTimeout(_o);
    const e = Ye;
    if (Ye = null, a("app").classList.remove("videoStep"), fr.classList.remove("playing"), wn.hidden = !0, e && Se) {
      try {
        Se.pauseVideo();
      } catch {
      }
      Cn = null;
    }
  }
  function ra() {
    const e = Ye;
    !e || j[ie] !== e || (_a(), clearInterval(Fe), Tn(), Fe = setInterval(Vt, 1e3));
  }
  wn.addEventListener("click", () => {
    Se && (Se.unMute(), Se.playVideo()), wn.hidden = !0;
  });
  function Tl(e) {
    var o;
    const t = Number(e.start) || 0;
    if (e.useVideoLength === !1) return t + (Number(e.duration) || 300);
    const n = Se && Ye === e && Number((o = Se.getDuration) == null ? void 0 : o.call(Se)) || 0;
    return Number(e.end) || n || Number(e.videoDuration) || t + (Number(e.duration) || 300);
  }
  function Sr(e, t) {
    const n = pe[me];
    [lt, Je, dt, n == null ? void 0 : n.warmup, n == null ? void 0 : n.strength, n == null ? void 0 : n.cooldown, n == null ? void 0 : n.sequence].forEach((o) => (Array.isArray(o) ? o : []).forEach((i) => {
      i && i.kind === "video" && i.videoId === e && t(i);
    }));
  }
  function Cr(e, t) {
    t = Math.round(Number(t) || 0);
    let n = !1;
    return e && t > 0 && Sr(e, (o) => {
      o.videoDuration !== t && (o.videoDuration = t, n = !0);
    }), n;
  }
  function Ll(e) {
    Sr(e, (t) => {
      t.videoError = "embed";
    }), ft();
  }
  function El(e) {
    const t = e.videoId;
    if (!t) return;
    const n = () => {
      je.classList.contains("open") ? Qe || ye() : (ye(), ft());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + t)).then((o) => o.ok ? o.json() : Promise.reject(o.status)).then((o) => {
      e.videoId === t && (e.videoTitle = o.title || "", e.autoName && o.title && (e.name = o.title), n());
    }).catch((o) => {
      e.videoId === t && o === 401 && (e.videoError = "embed", n());
    }), Rl(t).then((o) => {
      Cr(t, o) && n();
    }).catch((o) => {
      o === "embed" && e.videoId === t && (e.videoError = "embed", n());
    });
  }
  function Rl(e) {
    return br().then((t) => new Promise((n, o) => {
      const i = document.createElement("div");
      i.className = "videoProbe", i.setAttribute("aria-hidden", "true");
      const s = document.createElement("div");
      i.appendChild(s), a("app").appendChild(i);
      let l = null, c = !1;
      const v = (m, N) => {
        c || (c = !0, clearTimeout(k), setTimeout(() => {
          try {
            l == null || l.destroy();
          } catch {
          }
          i.remove();
        }, 0), N ? o(N) : n(m));
      }, k = setTimeout(() => v(0), 2e4), f = () => {
        var N;
        const m = Number((N = l == null ? void 0 : l.getDuration) == null ? void 0 : N.call(l)) || 0;
        return m > 0 && v(m), m > 0;
      };
      l = new t.Player(s, {
        width: 320,
        height: 180,
        videoId: e,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            f() || (l.mute(), l.playVideo());
          },
          onStateChange: () => f(),
          onError: (m) => v(0, m.data === 101 || m.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function Mn() {
    Ge = !1;
    const e = j[ie];
    a("app").classList.toggle("resting", e.kind === "rest"), e.kind === "video" ? Ml(e) : _a(), Ve = e.duration, zn = e.duration, ia = null, zo ? zo = !1 : Et(e.kind === "rest" ? "rest" : "move"), aa.textContent = e.name, Lt.textContent = e.group, Lt.hidden = !0, Io.textContent = ur(ie), yt && oa("step", { name: e.name, group: e.group, kind: e.kind, step: ie + 1, of: j.length, round: e.round || 1, rounds: Va(), duration: e.duration }), $t(), ul(), kl(), e.kind === "video" && setTimeout(kr, 0);
  }
  function Qt() {
    var i;
    const e = ((i = j[ie]) == null ? void 0 : i.kind) === "video" && !Ge, t = e && Ve >= 60;
    Bo.textContent = t ? Vn(Ve) : Ve, Bo.classList.toggle("long", t), e && (a("videoClock").textContent = Vn(Ve) + " left");
    const n = Ve / zn * 100;
    pr.style.width = n + "%";
    const o = mr();
    if (o && !Ge) {
      const s = 100 - n;
      o.style.setProperty("--segment-progress", s + "%");
    }
  }
  function Vt() {
    var t, n;
    if (ht) return;
    const e = j[ie];
    if ((e == null ? void 0 : e.kind) === "video" && !Ge && Ye === e) {
      const o = Number((t = Se == null ? void 0 : Se.getCurrentTime) == null ? void 0 : t.call(Se)) || 0, i = Number(e.start) || 0, s = Tl(e);
      zn = Math.max(1, s - i), (o > i || ((n = Se == null ? void 0 : Se.getPlayerState) == null ? void 0 : n.call(Se)) === yn) && (Ve = Math.max(0, Math.ceil(s - o))), Qt(), qa(), o > i && o >= s - 0.25 && ra();
      return;
    }
    Ve--, Qt(), qa(), Ve <= 0 && (e.rest > 0 ? Mr(e.rest) : Tn());
  }
  function Mr(e) {
    var n;
    Ge = !0, a("app").classList.add("resting");
    const t = mr();
    t && t.style.setProperty("--segment-progress", "100%"), clearInterval(Fe), Ve = e, zn = e, ia = null, Et("rest"), yt && oa("rest", { duration: e }), aa.textContent = "Rest", Lt.textContent = (n = j[ie]) != null && n.roundBreakAfter ? "Round " + (j[ie].round + 1) + " next" : "Recovery", $t(), Qt(), Fe = setInterval(() => {
      ht || (Ve--, Qt(), qa(), Ve <= 0 && (clearInterval(Fe), Tn(), Fe = setInterval(Vt, 1e3)));
    }, 1e3);
  }
  function Tn() {
    Ge = !1;
    const e = at(ie + 1);
    if (e >= 0)
      ie = e, Mn();
    else {
      clearInterval(Fe), _a(), Rt(!1), a("app").classList.remove("resting"), aa.textContent = "Complete", Lt.textContent = "Move finished", Lt.hidden = !1, Bo.textContent = "✓";
      {
        const t = Va();
        Io.textContent = t > 1 ? t + " rounds done" : j.filter((n) => !n.roundBreak).length + " steps done";
      }
      hr(!0), Et("done");
      {
        const t = Fr(7).reduce((n, o) => n + o.minutes, 0);
        Lt.textContent = "Move finished · " + t + " min in the last 7 days";
      }
      pr.style.width = "100%", $t();
    }
  }
  a("skipExercise").addEventListener("click", () => {
    Al(), Rt(!1);
  });
  function Al() {
    clearInterval(Fe);
    const e = j[ie];
    if (Ge) {
      Ge = !1, a("app").classList.remove("resting");
      const n = at(ie + 1);
      n >= 0 ? (ie = n, Mn(), Fe = setInterval(Vt, 1e3)) : Tn();
      return;
    }
    if (e && e.rest > 0) {
      Mr(e.rest);
      return;
    }
    const t = at(ie + 1);
    t >= 0 ? (ie = t, Mn(), Fe = setInterval(Vt, 1e3)) : Tn();
  }
  a("restartSegment").addEventListener("click", () => {
    if (clearInterval(Fe), Rt(!1), Ge) {
      const e = j[ie];
      Ve = e.rest, zn = e.rest, ia = null, Et("rest"), aa.textContent = "Rest", Lt.textContent = "Recovery", a("app").classList.add("resting"), $t(), Qt();
    } else
      Mn();
    Fe = setInterval(Ge ? () => {
      ht || (Ve--, Qt(), qa(), Ve <= 0 && (clearInterval(Fe), Tn(), Fe = setInterval(Vt, 1e3)));
    } : Vt, 1e3);
  });
  function sa(e, t, n, o) {
    let i = 0, s = null, l = !1;
    function c() {
      s && cancelAnimationFrame(s), s = null, i = 0, l = !1, t.style.width = "0%", e.classList.remove("holding");
    }
    function v(m) {
      if (!l) return;
      i || (i = m);
      const N = Math.min(1, (m - i) / n);
      if (t.style.width = N * 100 + "%", N >= 1) {
        l = !1, s && cancelAnimationFrame(s), s = null, t.style.width = "100%", setTimeout(() => t.style.width = "0%", 90), o();
        return;
      }
      s = requestAnimationFrame(v);
    }
    function k(m) {
      var N;
      if (!(m && m.button !== void 0 && m.button !== 0)) {
        m == null || m.preventDefault(), c(), l = !0, e.classList.add("holding");
        try {
          (N = e.setPointerCapture) == null || N.call(e, m.pointerId);
        } catch {
        }
        s = requestAnimationFrame(v);
      }
    }
    function f() {
      l && c();
    }
    e.addEventListener("pointerdown", k), e.addEventListener("pointerup", f), e.addEventListener("pointercancel", f), e.addEventListener("lostpointercapture", f), e.addEventListener("keydown", (m) => {
      (m.key === " " || m.key === "Enter") && !m.repeat && k(m);
    }), e.addEventListener("keyup", (m) => {
      (m.key === " " || m.key === "Enter") && f();
    });
  }
  const Nl = a("endWorkout");
  sa(Nl, a("holdEndFill"), 1500, Vo);
  const Ln = a("deleteMoveConfirm");
  a("deleteMoveOpen").addEventListener("click", () => {
    Ln.classList.add("open"), Ln.setAttribute("aria-hidden", "false");
  }), a("deleteMoveCancel").addEventListener("click", () => {
    Ln.classList.remove("open"), Ln.setAttribute("aria-hidden", "true");
  });
  function Il() {
    const e = me, t = r.querySelector('.workoutPanel[data-workout="' + e + '"]');
    t && t.remove(), delete pe[e], ge.order = ge.order.filter((o) => o !== e);
    let n = r.querySelector(".workoutPanel[data-workout]");
    if (!n) {
      const o = "custom-" + Date.now();
      pe[o] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, ge.order.push(o), n = ro(o, pe[o]);
    }
    Ln.classList.remove("open"), Ln.setAttribute("aria-hidden", "true"), Jn = null, Pa(), xt(n.dataset.workout), ft(), Te("Move deleted");
  }
  sa(a("deleteMoveYes"), a("deleteMoveFill"), 1500, Il);
  const Go = r.querySelector(".rubberTabs"), En = a("rubberIndicator");
  function la(e, t = !0) {
    if (!e || !Go || !En) return;
    const n = Go.getBoundingClientRect(), o = e.getBoundingClientRect();
    En.style.transition = t ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const i = Zt();
    En.style.left = (o.left - n.left) / i + Go.scrollLeft + "px", En.style.width = o.width / i + "px", t && (En.style.transform = "scaleX(1.08)", setTimeout(() => En.style.transform = "scaleX(1)", 180));
  }
  r.querySelectorAll(".tab").forEach((e) => e.addEventListener("click", () => {
    e.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), r.querySelectorAll(".tab").forEach((t) => t.classList.remove("active")), r.querySelectorAll(".settingsPane").forEach((t) => t.classList.remove("active")), e.classList.add("active"), a(e.dataset.pane).classList.add("active"), la(e, !0);
  })), requestAnimationFrame(() => la(r.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => la(r.querySelector(".tab.active"), !1));
  const Wo = a("pixelTrailToggle"), jo = a("rippleToggle"), Rn = a("trailStrength"), An = a("trailLife");
  function ot(e, t) {
    he()[e] = t, ft();
  }
  const Tr = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function Lr(e) {
    return e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "g:" + String(e.group || "").trim().toLowerCase();
  }
  function Yo(e) {
    var t;
    return !!((t = he().hideMeta) != null && t[Lr(e)]);
  }
  function Bl() {
    const e = /* @__PURE__ */ new Map(), t = (n, o, i) => {
      if (!n) return;
      Array.isArray(n) && (n = { name: n[1], group: n[2], kind: "work" });
      const s = Lr(n);
      let l = e.get(s);
      l || (l = { key: s, label: s === "rest" ? "Rest" : s === "video" ? "Video" : String(n.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, e.set(s, l)), l.kinds.add(s === "rest" ? "Rest" : s === "video" ? "Video" : o), l.moves.add(i), l.count++;
    };
    return Object.values(pe).forEach((n) => {
      const o = n.name || "Move";
      (n.warmup || (n.customSequence ? [] : ga)).forEach((i) => t(i, "Warm-up", o)), (n.customSequence ? n.sequence || [] : n.strength || []).forEach((i) => t(i, i.presetRole === "warmup" ? "Warm-up" : i.presetRole === "cooldown" ? "Cooldown" : "Movement", o)), (n.cooldown || (n.customSequence ? [] : ha)).forEach((i) => t(i, "Cooldown", o));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([n, o]) => {
      e.has(n) || e.set(n, { key: n, label: o, kinds: /* @__PURE__ */ new Set([o]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...e.values()].map((n) => ({ ...n, kind: n.kinds.has("Movement") ? "Movement" : [...n.kinds][0], moves: [...n.moves] })).sort((n, o) => Tr.indexOf(n.kind) - Tr.indexOf(o.kind) || n.label.localeCompare(o.label));
  }
  let Uo = "all";
  function Ko() {
    const e = a("metaSearch").value.trim().toLowerCase();
    return Bl().filter((t) => (Uo === "all" || t.kind === Uo) && (!e || t.label.toLowerCase().includes(e) || t.moves.some((n) => n.toLowerCase().includes(e))));
  }
  function Ga() {
    const e = a("metaTableBody");
    if (!e) return;
    const t = he().hideMeta || {}, n = Ko();
    e.innerHTML = n.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', n.forEach((i) => {
      const s = !t[i.key], l = i.count ? (i.moves.length > 2 ? i.moves.slice(0, 2).join(", ") + " + " + (i.moves.length - 2) + " more" : i.moves.join(", ")) + " · " + i.count + " step" + (i.count === 1 ? "" : "s") : "Not used yet", c = document.createElement("tr");
      c.className = s ? "" : "off", c.innerHTML = '<td><div class="metaType">' + ne(i.label) + '</div><div class="metaSub">' + ne(i.kind + " · " + l) + '</div></td><td class="metaKindCol">' + ne(i.kind) + '</td><td class="metaUsedCol">' + ne(l) + '</td><td class="metaSwitchCol"><button class="switch' + (s ? " on" : "") + '" type="button" role="switch" aria-checked="' + s + '" aria-label="Second line for ' + ne(i.label) + ' on phones"></button></td>', c.querySelector(".switch").addEventListener("click", () => Zo([i.key], s)), e.appendChild(c);
    });
    const o = n.filter((i) => t[i.key]).length;
    a("metaCount").textContent = n.length ? n.length + " type" + (n.length === 1 ? "" : "s") + (o ? " · " + o + " hidden on phones" : "") : "";
  }
  function Zo(e, t) {
    const n = { ...he().hideMeta || {} };
    e.forEach((o) => {
      t ? n[o] = !0 : delete n[o];
    }), ot("hideMeta", n), Ga(), mo(), $t();
  }
  a("metaSearch").addEventListener("input", Ga), a("metaKinds").querySelectorAll(".kindChip").forEach((e) => e.addEventListener("click", () => {
    Uo = e.dataset.kind, a("metaKinds").querySelectorAll(".kindChip").forEach((t) => t.classList.toggle("active", t === e)), Ga();
  })), a("metaHideAll").addEventListener("click", () => Zo(Ko().map((e) => e.key), !0)), a("metaShowAll").addEventListener("click", () => Zo(Ko().map((e) => e.key), !1));
  const Nn = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...he().toggles || {} };
  function Er() {
    r.querySelectorAll("[data-toggle]").forEach((n) => n.classList.toggle("on", Nn[n.dataset.toggle] !== !1)), r.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([n, o]) => {
      a(o).hidden = Nn[n] === !1;
    });
    const e = ["steps", "mood", "energyLevel"].some((n) => Nn[n] !== !1);
    r.querySelector(".activityCard").hidden = !e, a("weatherCard").hidden = !0;
    const t = r.querySelector("#homeView .grid");
    t.classList.toggle("noActivity", !e), t.classList.toggle("noWeather", !0);
  }
  r.querySelectorAll("[data-toggle]").forEach((e) => e.addEventListener("click", () => {
    Nn[e.dataset.toggle] = Nn[e.dataset.toggle] === !1, Er(), ot("toggles", { ...Nn });
  })), Er();
  function Pl() {
    Wo.classList.toggle("on", Tt), jo.classList.toggle("on", Xt), Rn.value = Math.round(mn * 100), a("trailStrengthValue").textContent = Rn.value + "%", An.value = gn, a("trailLifeValue").textContent = An.value + " ms";
  }
  he().trailEnabled !== void 0 && (Tt = he().trailEnabled), he().rippleEnabled !== void 0 && (Xt = he().rippleEnabled), he().trailStrength !== void 0 && (mn = he().trailStrength), he().trailMaxAge !== void 0 && (gn = he().trailMaxAge), Pl();
  const Xo = a("soundsToggle");
  Xo.classList.toggle("on", bn()), Xo.addEventListener("click", () => {
    ot("sounds", !bn()), Xo.classList.toggle("on", bn()), bn() && (vr(), Et("move"));
  }), Wo.addEventListener("click", () => {
    Tt = !Tt, Wo.classList.toggle("on", Tt), Tt || (na = []), ot("trailEnabled", Tt);
  }), jo.addEventListener("click", () => {
    Xt = !Xt, jo.classList.toggle("on", Xt), ot("rippleEnabled", Xt);
  }), Rn.addEventListener("input", () => {
    mn = Number(Rn.value) / 100, a("trailStrengthValue").textContent = Rn.value + "%";
  }), Rn.addEventListener("change", () => ot("trailStrength", mn)), An.addEventListener("input", () => {
    gn = Number(An.value), a("trailLifeValue").textContent = An.value + " ms";
  }), An.addEventListener("change", () => ot("trailMaxAge", gn)), Na.addEventListener("change", () => ot("upcomingCount", rn));
  function Rr(e) {
    r.querySelectorAll(".themeBtn").forEach((n) => n.classList.toggle("active", n.dataset.theme === e));
    const t = e === "light";
    a("app").classList.toggle("light", t), d.setLight(t), tn(r);
  }
  Rr(he().theme || "dark"), r.querySelectorAll(".themeBtn").forEach((e) => e.addEventListener("click", () => {
    Rr(e.dataset.theme), ot("theme", e.dataset.theme);
  }));
  const it = { steps: null, weather: null, ...he().entities || {} };
  let qe = null, $o = {};
  function Fl(e) {
    const t = Object.values(e).filter((c) => c.entity_id.startsWith("sensor.") || c.entity_id.startsWith("input_number.")), n = (c) => c.attributes.friendly_name || c.entity_id, o = t.filter((c) => /step/i.test(c.entity_id) || /step/i.test(n(c)) || ["steps", "step"].includes(String(c.attributes.unit_of_measurement || "").toLowerCase())), i = t.filter((c) => !o.includes(c)), s = (c, v) => n(c).localeCompare(n(v)), l = (c, v) => /health_steps/.test(v.entity_id) - /health_steps/.test(c.entity_id) || s(c, v);
    return { suggested: o.sort(l), rest: i.sort(s), label: n };
  }
  function Ar(e) {
    const t = a("stepsEntity");
    if (!t || t.matches(":focus")) return;
    const { suggested: n, rest: o, label: i } = Fl(e), s = (v) => '<option value="' + ne(v.entity_id) + '">' + ne(i(v)) + "</option>";
    t.innerHTML = '<option value="">Not connected</option>' + (n.length ? '<optgroup label="Suggested">' + n.map(s).join("") + "</optgroup>" : "") + (o.length ? '<optgroup label="All sensors">' + o.map(s).join("") + "</optgroup>" : ""), t.value = it.steps || "";
    const l = a("stepsStatus"), c = it.steps && e[it.steps];
    l.textContent = c ? "Connected · " + i(c) : l.dataset.empty;
  }
  a("stepsEntity").addEventListener("change", () => {
    it.steps = a("stepsEntity").value || null, ot("entities", { ...it }), $o = {}, Pr(), qe && (Ar(qe), Ir(qe));
  });
  function Dl(e, t = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: t }).format(e);
  }
  function Nr() {
    const e = it.steps && (qe == null ? void 0 : qe[it.steps]), t = Number(e == null ? void 0 : e.state);
    return Number.isFinite(t) ? t : null;
  }
  function Ir(e) {
    var o;
    const t = it.steps, n = t ? Number((o = e[t]) == null ? void 0 : o.state) : NaN;
    a("stepsMeta").textContent = t ? Number.isFinite(n) ? Dl(n) : "—" : "Set up in Settings";
  }
  let Br = 0;
  async function Pr() {
    const e = it.steps;
    if (!e || !d.ws) return;
    Br = Date.now();
    const t = /* @__PURE__ */ new Date(), n = new Date(t.getFullYear(), t.getMonth(), t.getDate() - 30);
    try {
      const o = await d.ws({ type: "recorder/statistics_during_period", start_time: n.toISOString(), end_time: t.toISOString(), statistic_ids: [e], period: "day", types: ["max"] }), i = (o == null ? void 0 : o[e]) || [], s = {};
      if (i.forEach((l) => {
        Number.isFinite(l.max) && (s[Ie(new Date(l.start))] = l.max);
      }), !Object.keys(s).length) {
        const l = await d.ws({ type: "history/history_during_period", start_time: n.toISOString(), end_time: t.toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((l == null ? void 0 : l[e]) || []).forEach((c) => {
          const v = Number(c.s ?? c.state), k = c.lu ? c.lu * 1e3 : Date.parse(c.last_updated || c.last_changed);
          if (!Number.isFinite(v) || !k) return;
          const f = Ie(new Date(k));
          s[f] = Math.max(s[f] || 0, v);
        });
      }
      $o = s, At();
    } catch {
    }
  }
  function en() {
    At();
  }
  en(), setInterval(() => {
    en(), Zn(), Kt();
  }, 10 * 60 * 1e3);
  function Fr(e) {
    const t = {}, n = {};
    ge.history.forEach((l) => {
      const c = Ie(new Date(l.start));
      t[c] = (t[c] || 0) + (l.seconds || 0) / 60, n[c] = (n[c] || 0) + 1;
    });
    const o = /* @__PURE__ */ new Date(), i = Ie(o), s = [];
    for (let l = e - 1; l >= 0; l--) {
      const c = new Date(o.getFullYear(), o.getMonth(), o.getDate() - l), v = Ie(c), k = ge.checkins.filter((m) => m.date === v), f = (m) => {
        const N = k.map((U) => U[m]).filter(Boolean);
        return N.length ? N.reduce((U, V) => U + V, 0) / N.length : null;
      };
      s.push({
        key: v,
        date: c,
        minutes: Math.round(t[v] || 0),
        moves: n[v] || 0,
        steps: v === i && Nr() != null ? Nr() : $o[v] ?? null,
        mood: f("mood"),
        energy: f("energy")
      });
    }
    return s;
  }
  function Hl(e) {
    let t = e.length - 1;
    e[t] && !e[t].minutes && t--;
    let n = 0;
    for (; t >= 0 && e[t].minutes > 0; )
      n++, t--;
    return n;
  }
  function At() {
    const e = a("insightCard");
    if (!e) return;
    const t = Fr(30), n = Hl(t), o = t.reduce((k, f) => k + f.minutes, 0), i = /* @__PURE__ */ new Date(), s = Ie(i), l = Ie(new Date(i.getFullYear(), i.getMonth(), i.getDate() - (i.getDay() + 6) % 7)), c = t.filter((k) => k.key >= l && k.key <= s).reduce((k, f) => k + f.minutes, 0), v = (k, f, m) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + k + '</div><div><div class="activityRowName">' + ne(f) + '</div><div class="activityRowMeta">' + ne(m) + "</div></div></div>";
    e.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + Ct("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + v(Ct("clock"), "This week", c + " min") + v(Ct("streak"), "Streak", n + " day" + (n === 1 ? "" : "s")) + v(Ct("calendar"), "30 days", o + " min") + "</div>";
  }
  const Jo = {
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
  }, zl = (e) => e === "sunny" ? "clear" : e === "clear-night" ? "night" : e === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(e) ? "rain" : ["snowy", "snowy-rainy"].includes(e) ? "snow" : "cloudy", In = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Wa = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let Dr = 0;
  const Qo = (e, t) => '<path class="' + t + '" d="' + e + '"/>', Vl = (e, t) => ' style="animation-delay:-' + Math.round(e * 137 % t) + 'ms"', mt = (e, t, n, o) => {
    const i = n * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (o < 1 ? ' opacity="' + o + '"' : "") + Vl(e, 2400) + ' d="M' + e + " " + (t - n) + "L" + (e + i) + " " + (t - i) + "L" + (e + n) + " " + t + "L" + (e + i) + " " + (t + i) + "L" + e + " " + (t + n) + "L" + (e - i) + " " + (t + i) + "L" + (e - n) + " " + t + "L" + (e - i) + " " + (t - i) + 'Z"/>';
  }, Hr = ([e, t, n], o) => '<path class="wxMoonPath" d="' + e + '" fill="url(#' + o + ')"/><defs><linearGradient id="' + o + '" x1="0" y1="' + t + '" x2="0" y2="' + n + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', ql = (e, t) => t ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Ol = (e) => (e ? ["29.35", "43.04", "56.74"].map((t, n) => '<g class="wxDrop" style="animation-delay:-' + n * 317 + 'ms"><rect class="wxAccent" x="' + t + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + t + ' 60.65)"/></g>') : [19, 26, 33].map((t, n) => '<g class="wxDrop" style="animation-delay:-' + n * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + t + ' 38)"/></g>')).join(""), _l = (e) => (e ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([t, n], o) => '<circle class="wxFlake" style="animation-delay:-' + o * 640 + 'ms" cx="' + t + '" cy="' + n + '" r="' + (e ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function zr(e, t, n, o) {
    return e === "clear" ? t ? Hr(n ? Wa.l : Wa.s, o) + (n ? mt(70, 20, 5.83, 1) + mt(78.33, 41.67, 3.75, 0.8) + mt(60, 71.67, 3.33, 0.6) : mt(42, 12, 3.5, 1) + mt(47, 25, 2.25, 0.8) + mt(36, 43, 2, 0.6)) : ql(o, n) : e === "partly" ? (t ? Hr(n ? Wa.lp : Wa.sp, o) : n ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + Qo(n ? In.lp : In.sp, t ? "wxCloudLight" : "wxBright") + (t ? n ? mt(73.33, 16.67, 4.17, 0.9) : mt(44, 10, 2.5, 0.9) : "") : e === "cloudy" ? Qo(n ? In.lc : In.s, t ? "wxCloudLight" : "wxBright") + (t ? n ? mt(15, 15, 3.75, 0.8) + mt(76.67, 13.33, 2.92, 0.6) : mt(9, 9, 2.25, 0.8) + mt(46, 8, 1.75, 0.6) : "") : Qo(n ? In.lr : In.s, "wxCloudLight") + (e === "rain" ? Ol(n) : _l(n));
  }
  const Gl = () => {
    var e;
    return ((e = qe == null ? void 0 : qe["sun.sun"]) == null ? void 0 : e.state) === "below_horizon";
  };
  let rt = he().weatherStyle || "bitmap", Vr = he().weatherLayout === "strip" ? "strip" : "tiles", Wl = he().weatherMotion !== !1;
  const da = () => Wl && !pt(), ca = /* @__PURE__ */ new Map(), ei = 700, jl = (e) => {
    const [t, n] = e.split("/");
    return { k: t === "fog" ? "cloudy" : t === "storm" ? "rain" : t, night: n === "night" };
  };
  function ja(e, t, n, o = rt, i, s) {
    let l = zl(e);
    const c = l === "night" || (s != null ? !!s : !!n && Gl());
    l === "night" && (l = "clear");
    const v = t ? 90 : 54, k = vs(e, c), f = performance.now();
    let m = i ? ca.get(i) : null;
    if (i && !m ? ca.set(i, m = { key: k, t0: -1e9 }) : m && m.key !== k && (m.fromKey = m.key, m.from = m.last || null, m.key = k, m.t0 = f), o !== "smooth") return '<span class="wxIcon pixels' + (t ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + k + '"' + (i ? ' data-wx-slot="' + i + '"' : "") + ' data-wx-style="' + o + '" data-wx-size="' + v + '"></canvas></span>';
    let N = "";
    if (m && f - m.t0 < ei && (da() || pt())) {
      const U = jl(m.fromKey);
      N = '<span class="wxLayer wxOut ' + U.k + (U.night ? " night" : "") + '" style="animation-delay:' + Math.round(m.t0 - f) + 'ms"><svg viewBox="0 0 ' + v + " " + v + '">' + zr(U.k, U.night, t, "wxg" + ++Dr) + "</svg></span>";
    }
    return '<span class="wxIcon ' + l + (c ? " night" : "") + (t ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + v + " " + v + '">' + zr(l, c, t, "wxg" + ++Dr) + "</svg>" + N + "</span>";
  }
  function Ya() {
    const e = a("app"), t = getComputedStyle(e), n = (c) => t.getPropertyValue(c).trim(), o = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([c, v]) => {
      n(v) && (o[c] = n(v));
    });
    const i = n("--color-text-primary") || "#f1f1f1", s = n("--color-bg-card") || "#222222", l = e.classList.contains("light");
    return { colors: o, ink: l ? i : s, paper: l ? s : i };
  }
  function tn(e, t = performance.now()) {
    const n = e.querySelectorAll("canvas[data-wx]");
    if (!n.length) return;
    const o = Ya(), i = da(), s = pt();
    n.forEach((l) => {
      var m;
      const c = l.dataset.wx, v = l.dataset.wxSlot ? ca.get(l.dataset.wxSlot) : null;
      let k = us(c, o.colors);
      if (v && v.key === c) {
        const N = (t - v.t0) / ei;
        N < 1 && (i || s) && (k = rd(v.from || us(v.fromKey, o.colors), k, Math.max(0, N), o.colors, s)), v.last = k;
      }
      const f = pd(k, { size: Number(l.dataset.wxSize) || 54, px: 2, oneBit: l.dataset.wxStyle === "onebit", colors: o.colors, ink: o.ink, paper: o.paper, clock: t, idle: i });
      l.width !== f.w && (l.width = f.w), l.height !== f.h && (l.height = f.h), (m = l.getContext("2d")) == null || m.putImageData(new ImageData(f.data, f.w, f.h), 0, 0);
    });
  }
  let Ua = null, qr = -1;
  function Or(e) {
    if (Ua = null, !C) return;
    const t = da(), n = Math.floor(e / 100), o = [...ca.values()].some((v) => e - v.t0 < ei), i = [...Ka.values()].some((v) => e - v.t0 < v.dur), s = ce.home.classList.contains("active"), l = tt.classList.contains("open"), c = t && rt === "smooth" && (l || s && Vr === "strip");
    !document.hidden && (o || i || c || t && n !== qr) && (qr = n, s && (tn(a("weatherCard"), e), pa(a("weatherCard"), e)), l && (tn(tt, e), pa(tt, e))), (t || o || i) && (Ua = requestAnimationFrame(Or));
  }
  function nn() {
    a("app").classList.toggle("wxMotion", da()), !Ua && C && (Ua = requestAnimationFrame(Or));
  }
  let _r = [];
  const Be = 36e5, Yl = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function Nt() {
    const e = /* @__PURE__ */ new Date(), t = (s, l) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + s, l), n = [], o = [], i = [...Array(6)].map((s, l) => {
      const c = t(l, 6), v = t(l, 18), k = t(l + 1, 6), f = _r.find((N) => Ie(new Date(N.datetime)) === Ie(c)), m = (N, U, V) => {
        const A = n.filter((se) => se.t >= +N && se.t < +U);
        if (A.length) {
          const se = {};
          return A.forEach((O) => {
            se[O.c] = (se[O.c] || 0) + (Yl.has(O.c) ? 2 : 1);
          }), Object.entries(se).sort((O, le) => le[1] - O[1])[0][0];
        }
        const L = o.find((se) => {
          const O = +new Date(se.datetime);
          return O >= +N - 3 * Be && O < +U && (se.is_daytime == null || !!se.is_daytime == !V);
        });
        if (L) return L.condition;
        const re = (f == null ? void 0 : f.condition) || "cloudy";
        return V && re === "sunny" ? "clear-night" : re;
      };
      return { start: +c, end: +k, day: m(c, v, !1), night: m(v, k, !0), hi: Number(f == null ? void 0 : f.temperature), lo: Number(f == null ? void 0 : f.templow) };
    });
    return { days: i, hours: n, start: i[0].start, end: i[5].end };
  }
  const Gr = (e, t) => {
    const n = e.days.findIndex((i) => t < i.end);
    if (n < 0) return 1;
    const o = e.days[n];
    return Math.max(0, (n + (t - o.start) / (o.end - o.start)) / 6);
  }, Ul = (e, t) => {
    const n = Math.max(0, Math.min(0.99999, t)) * 6, o = Math.floor(n), i = e.days[o];
    return i.start + (n - o) * (i.end - i.start);
  };
  function ti(e, t) {
    const n = Math.max(0, e.days.findIndex((v) => t < v.end)), o = e.days[n], i = (t - o.start) / (o.end - o.start) >= 0.5;
    let s = i ? o.night : o.day, l = NaN;
    const c = e.hours;
    if (c.length && t >= c[0].t - Be && t <= c[c.length - 1].t + Be) {
      let v = c.findIndex((m) => m.t > t);
      v < 0 && (v = c.length);
      const k = c[Math.max(0, v - 1)], f = c[Math.min(c.length - 1, v)];
      s = k.c || s, l = f.t > k.t ? k.temp + (f.temp - k.temp) * Math.max(0, Math.min(1, (t - k.t) / (f.t - k.t))) : k.temp;
    }
    if (!Number.isFinite(l)) {
      const v = [];
      if (e.days.forEach((k) => {
        Number.isFinite(k.lo) && v.push([k.start - Be, k.lo]), Number.isFinite(k.hi) && v.push([k.start + 9 * Be, k.hi]);
      }), v.length) {
        l = t <= v[0][0] ? v[0][1] : v[v.length - 1][1];
        for (let k = 1; k < v.length; k++) if (t <= v[k][0] && t > v[k - 1][0]) {
          const [f, m] = v[k - 1], [N, U] = v[k];
          l = m + (U - m) * (1 - Math.cos(Math.PI * (t - f) / (N - f))) / 2;
          break;
        }
      }
    }
    return { cond: i && s === "sunny" ? "clear-night" : s, temp: l, night: i, day: o };
  }
  const Wr = (e) => Ie(new Date(e)) === Ie(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(e)), Ka = /* @__PURE__ */ new Map(), Kl = 900, Zl = 700;
  let Za = null;
  const gt = typeof ResizeObserver == "function" ? new ResizeObserver((e) => e.forEach((t) => {
    pa(t.target.parentElement), t.target.closest("#wxDialog") && Xr();
  })) : null;
  function pa(e, t = performance.now()) {
    const n = e.querySelectorAll("canvas[data-wx-strip]");
    if (!n.length) return;
    const o = Nt(), i = o.days.flatMap((m) => [{ cond: m.day, night: !1 }, { cond: m.night, night: !0 }]), s = i.map((m) => m.cond).join(), l = Ya(), c = da(), v = pt(), k = Number(Ie(new Date(o.start)).replace(/\D/g, "")) % 9973;
    let f = !1;
    n.forEach((m) => {
      var se;
      const N = m.clientWidth, U = m.clientHeight;
      if (!N || !U) return;
      const V = m.dataset.wxStrip;
      let A = Ka.get(V);
      A ? A.sig !== s && (A.prev = A.segs, A.sig = s, A.segs = i, A.t0 = t, A.dur = Zl) : Ka.set(V, A = { sig: s, segs: i, prev: null, t0: t, dur: Kl });
      const L = c || v ? Math.min(1, Math.max(0, (t - A.t0) / A.dur)) : 1;
      L < 1 && (f = !0);
      const re = { width: N, height: U, colors: l.colors, clock: t, ambient: c, seed: k, reveal: v ? L : 1 - Math.pow(1 - L, 3), prev: L < 1 ? A.prev : null, reduce: v };
      if (rt === "smooth") {
        const O = Math.min(2, window.devicePixelRatio || 1), le = Math.round(N * O), ve = Math.round(U * O);
        m.width !== le && (m.width = le), m.height !== ve && (m.height = ve);
        const te = m.getContext("2d");
        if (!te) return;
        te.setTransform(O, 0, 0, O, 0, 0), kd(te, i, re);
      } else {
        const O = yd(i, { ...re, px: 2, oneBit: rt === "onebit", ink: l.ink, paper: l.paper });
        m.width !== O.w && (m.width = O.w), m.height !== O.h && (m.height = O.h), (se = m.getContext("2d")) == null || se.putImageData(new ImageData(O.data, O.w, O.h), 0, 0);
      }
    }), f && nn();
  }
  function jr() {
    const e = a("weatherCard");
    if (!e || e.hidden) return;
    const t = it.weather, n = t && (qe == null ? void 0 : qe[t]);
    if (!n) {
      e.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + ja("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (t ? "Not available" : "Set up in Settings") + "</div></div></div></div>", tn(e);
      return;
    }
    const o = n.attributes || {}, i = o.temperature_unit || "°", s = (te) => Number.isFinite(Number(te)) ? Math.round(Number(te)) + "°" : "—", l = (o.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", c = Jo[n.state] || (n.state ? n.state.charAt(0).toUpperCase() + n.state.slice(1) : "—"), v = Ie(/* @__PURE__ */ new Date()), k = _r.slice(0, 7), f = k.find((te) => Ie(new Date(te.datetime)) === v) || null, m = k.filter((te) => Ie(new Date(te.datetime)) >= v).slice(0, 6), N = /* @__PURE__ */ new Date(), U = Ie(new Date(N.getFullYear(), N.getMonth(), N.getDate() + 1)), V = f ? "H " + s(f.temperature) + "&ensp; L " + s(f.templow) : "", A = (te) => {
      const $ = Ie(new Date(te.datetime));
      return $ === v ? "Today" : $ === U ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(te.datetime));
    }, L = Number.isFinite(Number(o.temperature)) ? Math.round(Number(o.temperature)) : "—", re = (te) => {
      const $ = new Date(te.datetime);
      return Math.round((new Date($.getFullYear(), $.getMonth(), $.getDate()) - new Date(N.getFullYear(), N.getMonth(), N.getDate())) / 864e5);
    }, se = (te) => (Jo[te] || te || "").toLowerCase(), O = (te, $) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + re(te) + '" aria-label="' + ne(A(te) + ": " + se(te.condition) + ", " + s(te.temperature) + " / " + s(te.templow) + ". Open the forecast") + '">' + ja(te.condition, !1, !1, rt, "day" + $) + '<div><div class="activityRowName">' + ne(A(te)) + '</div><div class="activityRowMeta">' + s(te.temperature) + " / " + s(te.templow) + "</div></div></div>", le = () => '<div class="wxStrip"><div class="wxStripDays">' + Nt().days.map(($, Pe) => {
      const Ce = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date($.start)) + ": " + se($.day) + (se($.day) === se($.night) ? " all day and night" : ", then " + se($.night) + " overnight") + (Number.isFinite($.hi) ? ". High " + s($.hi) : "") + (Number.isFinite($.lo) ? ", low " + s($.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + Pe + '" aria-label="' + ne(Ce) + '"><span class="wxDayName">' + ne(Wr($.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + s($.hi) + '</span><span class="wxLow">' + s($.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    e.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + ne("Now in " + l + ": " + L + "°, " + se(n.state) + ". Open the forecast") + '"><div class="wxCurrent">' + ja(n.state, !0, !0, rt, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + ne(String(L)) + '</span><span class="wxUnit">' + ne(i) + '</span></div><div class="wxPlace">' + ne(l) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + ne(c) + "</div>" + (V ? '<div class="wxRange">' + V + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (m.length ? Vr === "strip" ? le() : '<div class="activityRows wxDays">' + m.map(O).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", tn(e);
    const ve = e.querySelector("canvas[data-wx-strip]");
    Za && Za !== ve && (gt == null || gt.unobserve(Za)), Za = ve, ve && (gt == null || gt.observe(ve), pa(e)), nn(), Zr();
  }
  const Yr = a("weatherCard"), Ur = (e) => {
    const t = e.closest("[data-wx-day]");
    if (t) {
      const o = /* @__PURE__ */ new Date();
      Kr(+new Date(o.getFullYear(), o.getMonth(), o.getDate() + Number(t.dataset.wxDay), 12), t);
      return;
    }
    const n = e.closest("[data-wx-open]");
    n && Kr(Date.now(), n);
  };
  Yr.addEventListener("click", (e) => Ur(e.target)), Yr.addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && e.target.matches("[data-wx-day],[data-wx-open]") && (e.preventDefault(), Ur(e.target));
  });
  const tt = a("wxDialog"), qt = a("wxGraph"), ua = a("wxGraphWrap");
  let vt = Date.now(), an = null, ni = !1, Bn = null;
  function Kr(e, t) {
    const n = Nt();
    an = t || null, vt = Math.max(n.start, Math.min(n.end - Be, e)), Ka.delete("dialog"), ca.delete("scrub"), tt.classList.add("open"), tt.setAttribute("aria-hidden", "false"), Zr(), gt == null || gt.observe(tt.querySelector("canvas[data-wx-strip]")), qt.focus({ preventScroll: !0 }), nn();
  }
  function ai() {
    var e;
    tt.classList.remove("open"), tt.setAttribute("aria-hidden", "true"), gt == null || gt.unobserve(tt.querySelector("canvas[data-wx-strip]")), (e = an == null ? void 0 : an.focus) == null || e.call(an, { preventScroll: !0 }), an = null;
  }
  function Zr() {
    if (!tt.classList.contains("open")) return;
    const e = Nt();
    a("wxGraphDays").innerHTML = e.days.map((t) => "<span>" + ne(Wr(t.start)) + "</span>").join(""), Xr(e), Xa(e), pa(tt);
  }
  function Xa(e = Nt()) {
    const t = ti(e, vt), n = qe == null ? void 0 : qe[it.weather], o = (n == null ? void 0 : n.attributes) || {}, i = o.temperature_unit || "°", s = Math.abs(vt - Date.now()) < Be / 2, l = s && n ? n.state : t.cond, c = s && Number.isFinite(Number(o.temperature)) ? Math.round(Number(o.temperature)) : Number.isFinite(t.temp) ? Math.round(t.temp) : "—", v = Jo[l] || (l ? l.charAt(0).toUpperCase() + l.slice(1) : "—"), k = s ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(vt / Be) * Be)), f = t.day, m = (Number.isFinite(f.hi) ? "H " + Math.round(f.hi) + "°" : "") + (Number.isFinite(f.lo) ? "&ensp; L " + Math.round(f.lo) + "°" : "");
    a("wxDialogNow").innerHTML = '<div class="wxCurrent">' + ja(l, !0, s, rt, "scrub", s ? void 0 : t.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + ne(String(c)) + '</span><span class="wxUnit">' + ne(i) + '</span></div><div class="wxPlace">' + ne(k) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + ne(v) + "</div>" + (m ? '<div class="wxRange">' + m + "</div>" : "") + "</div>", tn(a("wxDialogNow")), qt.setAttribute("aria-valuenow", String(Math.round((vt - e.start) / Be))), qt.setAttribute("aria-valuetext", k + ", " + v.toLowerCase() + ", " + c + "°"), oi(e), nn();
  }
  function Xr(e = Nt()) {
    const t = a("wxGraphLine"), n = ua.clientWidth, o = ua.clientHeight;
    if (!n || !o) return;
    const i = [];
    for (let L = e.start; L <= e.end; L += Be) {
      const re = ti(e, L).temp;
      Number.isFinite(re) && i.push([Gr(e, L) * n, re]);
    }
    if (t.setAttribute("viewBox", "0 0 " + n + " " + o), i.length < 2) {
      t.innerHTML = '<g id="wxCursorMark"></g>', Bn = null, oi(e);
      return;
    }
    const s = i.map((L) => L[1]), l = Math.min(...s), c = Math.max(...s), v = Math.max(4, c - l), k = rt !== "smooth", f = (L) => k ? Math.round(L / 2) * 2 : Math.round(L * 10) / 10;
    Bn = (L) => o * 0.84 - (L - l) / v * o * 0.62;
    const m = Ya(), N = rt === "onebit" ? m.paper : "#ffffff", U = rt === "onebit" ? m.ink : "rgba(0,0,0,.28)", V = "M" + i.map((L) => f(L[0]) + " " + f(Bn(L[1]))).join(" L"), A = (L, re) => {
      const se = i.find((O) => O[1] === L);
      return '<text class="wxLineLabel" x="' + f(Math.min(n - 14, Math.max(14, se[0]))) + '" y="' + f(Bn(L) + (re ? 18 : -10)) + '" fill="' + N + '" stroke="' + U + '">' + Math.round(L) + "°</text>";
    };
    t.setAttribute("shape-rendering", k ? "crispEdges" : "auto"), t.innerHTML = '<path d="' + V + '" fill="none" stroke="' + U + '" stroke-width="' + (k ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + V + '" fill="none" stroke="' + N + '" stroke-width="2" stroke-linejoin="round"/>' + A(c, !1) + A(l, !0) + '<g id="wxCursorMark"></g>', oi(e);
  }
  function oi(e = Nt()) {
    const t = a("wxGraphLine").querySelector("#wxCursorMark");
    if (!t) return;
    const n = ua.clientWidth, o = ua.clientHeight, i = rt !== "smooth", s = (N) => i ? Math.round(N / 2) * 2 : N, l = s(Gr(e, vt) * n), c = ti(e, vt).temp, v = Ya(), k = rt === "onebit" ? v.paper : "#ffffff", f = rt === "onebit" ? v.ink : "rgba(0,0,0,.28)", m = Bn && Number.isFinite(c) ? s(Bn(c)) : null;
    t.innerHTML = '<rect x="' + (l - 2) + '" y="0" width="4" height="' + o + '" fill="' + f + '"/><rect x="' + (l - 1) + '" y="0" width="2" height="' + o + '" fill="' + k + '"/>' + (m == null ? "" : i ? '<rect x="' + (l - 5) + '" y="' + (m - 5) + '" width="10" height="10" fill="' + k + '" stroke="' + f + '" stroke-width="2"/>' : '<circle cx="' + l + '" cy="' + m + '" r="6" fill="' + k + '" stroke="' + f + '" stroke-width="2"/>');
  }
  const $r = (e) => {
    const t = ua.getBoundingClientRect();
    t.width && (vt = Ul(Nt(), (e - t.left) / t.width), Xa());
  };
  qt.addEventListener("pointerdown", (e) => {
    if (e.button === 0) {
      ni = !0;
      try {
        qt.setPointerCapture(e.pointerId);
      } catch {
      }
      $r(e.clientX);
    }
  }), qt.addEventListener("pointermove", (e) => {
    ni && $r(e.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((e) => qt.addEventListener(e, () => {
    ni = !1;
  })), qt.addEventListener("keydown", (e) => {
    const t = Nt(), n = { ArrowLeft: -Be, ArrowRight: Be, ArrowDown: -Be, ArrowUp: Be, PageUp: -24 * Be, PageDown: 24 * Be }[e.key];
    n ? (e.preventDefault(), vt = Math.max(t.start, Math.min(t.end - Be, Math.round(vt / Be) * Be + n)), Xa(t)) : (e.key === "Home" || e.key === "End") && (e.preventDefault(), vt = e.key === "Home" ? t.start : t.end - Be, Xa(t));
  }), a("wxDialogClose").addEventListener("click", ai), tt.addEventListener("click", (e) => {
    e.target === tt && ai();
  }), tt.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), ai());
  }), jr(), (ls = (rs = window.matchMedia) == null ? void 0 : (ss = rs.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || ls.call(ss, "change", () => {
    nn(), tn(r);
  }), nn();
  const Jr = a("tvNav");
  d.fullscreenSupported || (Jr.hidden = !0), Jr.addEventListener("click", () => d.toggleFullscreen()), r.addEventListener("keydown", (e) => {
    !ce.workout.classList.contains("active") || Qn.classList.contains("active") || e.target.closest("input,select,textarea,.holdEnd") || (e.key === "MediaPlayPause" || e.key === " " && !e.target.closest("button") ? (e.preventDefault(), Po.click()) : e.key === "MediaTrackNext" ? (e.preventDefault(), a("skipExercise").click()) : e.key === "MediaTrackPrevious" && (e.preventDefault(), a("restartSegment").click()));
  }), r.querySelectorAll("[data-rounds-step]").forEach((e) => e.addEventListener("click", () => {
    const t = Math.max(1, Math.min(10, (Number(we.value) || 1) + Number(e.dataset.roundsStep)));
    String(t) !== we.value && (we.value = t, we.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [x, b, M, we].forEach((e) => e.addEventListener("input", () => {
    const t = pe[me];
    t && (t.total = Number(x.value), t.work = Number(b.value), t.rest = Number(M.value)), ye();
  })), be.addEventListener("click", Vo), Re.addEventListener("click", () => p("settings")), a("settingsBack").addEventListener("click", Vo), Po.addEventListener("click", () => Rt(!ht)), xt(me), Aa(), Zn(), At(), a("healthHelpOpen").addEventListener("click", () => r.querySelector(".tab[data-pane=helpPane]").click()), sa(a("resetStats"), a("resetStatsFill"), 1500, () => {
    ge.history = [], ge.checkins = [], Kn = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    ft(), en(), Zn(), Aa(), At(), Kt(), Te("Stats reset");
  });
  const ii = a("morningTime"), ri = a("eveningTime"), si = a("checkinAutoOpen");
  ii.value = Bt().morning, ri.value = Bt().evening, si.classList.toggle("on", he().checkinAutoOpen !== !1), [["morningTime", ii], ["eveningTime", ri]].forEach(([e, t]) => t.addEventListener("change", () => {
    t.value && (ot(e, t.value), Kt());
  })), si.addEventListener("click", () => {
    const e = he().checkinAutoOpen === !1;
    si.classList.toggle("on", e), ot("checkinAutoOpen", e);
  }), setTimeout(Co, 800);
  const Qr = a("checkinNotify"), $a = a("checkinNotifyTarget"), es = a("checkinNotifyStatus"), Xl = es.textContent;
  function ts() {
    const e = d.notifyServices(), t = e.filter((i) => i.startsWith("mobile_app_")), n = t.length ? t : e, o = (i) => i.replace(/^mobile_app_/, "").replace(/_/g, " ");
    $a.innerHTML = n.map((i) => '<option value="' + ne(i) + '">' + ne(o(i)) + "</option>").join(""), !he().notifyTarget && n[0] && (he().notifyTarget = n[0]), $a.value = he().notifyTarget || "";
  }
  function Ja() {
    const e = !!he().notifyOn;
    Qr.classList.toggle("on", e), a("checkinNotifyTargetRow").hidden = !e;
    const t = Bt();
    es.textContent = e ? "Sends at " + t.morning + " and " + t.evening : Xl;
  }
  async function li() {
    const e = !!he().notifyOn;
    try {
      return await d.setReminderAutomation(e ? { target: he().notifyTarget, times: Bt() } : null), !0;
    } catch {
      return Te("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  Qr.addEventListener("click", async () => {
    const e = !he().notifyOn;
    if (e && (ts(), !he().notifyTarget)) {
      Te("Install the Companion app on your phone first");
      return;
    }
    he().notifyOn = e, Ja(), await li() ? (ft(), Te(e ? "Check-in notifications on" : "Check-in notifications off")) : (he().notifyOn = !e, Ja());
  }), $a.addEventListener("change", () => {
    ot("notifyTarget", $a.value), he().notifyOn && li();
  }), [ii, ri].forEach((e) => e.addEventListener("change", () => {
    Ja(), he().notifyOn && li();
  })), ts(), Ja();
  let di = null;
  function $l() {
    di || (di = setTimeout(() => {
      di = null, At();
    }, 3e4));
  }
  return {
    updateStates(e) {
      var n, o;
      const t = !qe || qe[it.weather] !== e[it.weather] || ((n = qe["sun.sun"]) == null ? void 0 : n.state) !== ((o = e["sun.sun"]) == null ? void 0 : o.state);
      qe = e, Ar(e), Ir(e), t && jr(), Date.now() - Br > 60 * 60 * 1e3 && Pr(), $l();
    },
    applyRemoteData(e) {
      if (e && (Array.isArray(e.history) && (ge.history = e.history, en()), Array.isArray(e.history) && At(), Array.isArray(e.checkins) && (ge.checkins = e.checkins.map(Ti), Kt(), Aa(), Zn(), en(), At()), e.profiles && !je.classList.contains("open") && !yt)) {
        const t = Mi(e);
        Object.keys(pe).forEach((n) => delete pe[n]), Object.assign(pe, t.profiles), ge.order = t.order, pe[me] || (me = ge.order[0]), Ei(), xt(me);
      }
    },
    suspend() {
      C = !1;
    },
    resume() {
      C || (C = !0, hn || (hn = requestAnimationFrame(Da)), fn || (fn = requestAnimationFrame(Ha)), nn(), la(r.querySelector(".tab.active"), !1));
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
}, St = { standard: "cubic-bezier(.2,0,0,1)", land: "cubic-bezier(.34,1.46,.64,1)", spring: "cubic-bezier(.2,1.2,.4,1)", soft: "cubic-bezier(.4,0,.2,1)", exit: "cubic-bezier(.4,0,1,1)" }, Hn = () => {
  var r;
  return !!((r = window.matchMedia) != null && r.call(window, "(prefers-reduced-motion: reduce)").matches);
};
function Md() {
  const { pivot: r, slider: d, iconbtn: a, warp: y, outline: w } = kt;
  return [
    ["--pv-persp", r.persp + "px"],
    ["--pv-shine", r.shine / 100],
    ["--pv-size", r.size + "%"],
    ["--pv-ret", r.ret + "ms"],
    ["--pv-ease", St[r.ease]],
    ["--ab-blur", d.glow + "px"],
    ["--ab-spread", d.spread + "px"],
    ["--ab-str", d.strength + "%"],
    ["--ab-blur2", d.glow + d.hold + "px"],
    ["--ab-spread2", d.spread + d.hold / 4 + "px"],
    ["--ab-str2", d.holdStrength + "%"],
    ["--ab-grow", "scaleY(" + (1 + (d.grow / 100 - 1) * 3) + ")"],
    ["--ab-in", d.ein + "ms"],
    ["--ab-out", d.eout + "ms"],
    ["--ab-ease", St[d.ease]],
    ["--ih-s", a.scale / 100],
    ["--ih-p", a.press / 100],
    ["--ih-dur", a.dur + "ms"],
    ["--ih-ease", St[a.ease]],
    ["--ih-tint", "8%"],
    ["--wc-dur", y.cdur + "ms"],
    ["--wc-delay", y.cdelay + "ms"],
    ["--wc-ease", St[y.ease]],
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
  ].map(([C, P]) => C + ":" + P).join(";");
}
const ui = ":is(button.primary,button.pill,.hcBtn,.wbRangeBtn,.activityRow.tap,.hcRow,a.hcRow)", Td = "#homeView .tfAreaPanel", Ld = 300, ao = (r) => Math.min(1, Ld / Math.max(1, r)), mi = (r, d) => 1 + (d / 100 - 1) * ao(r.offsetWidth);
function Ed(r, d) {
  d.style.cssText += ";" + Md();
  let a = null;
  const y = (S) => {
    S.classList.remove("mvMoving", "mvLit"), S.style.setProperty("--rx", "0deg"), S.style.setProperty("--ry", "0deg"), S.style.setProperty("--sc", 1), S._down = !1;
  };
  r.addEventListener("pointermove", (S) => {
    var de, K;
    const u = S.pointerType === "touch" || Hn() ? null : (K = (de = S.target).closest) == null ? void 0 : K.call(de, ui);
    if (a && a !== u && y(a), a = u, !u || u.disabled) return;
    const g = kt.pivot, h = u.getBoundingClientRect(), D = (S.clientX - h.left) / h.width, G = (S.clientY - h.top) / h.height, Y = 1;
    u.classList.add("mvPv", "mvMoving", "mvLit"), u.style.setProperty("--pv-persp", g.persp / ao(Math.max(u.offsetWidth, u.offsetHeight)) + "px"), u.style.setProperty("--ry", (Y * (D - 0.5) * 2 * g.tilt * ao(u.offsetWidth)).toFixed(3) + "deg"), u.style.setProperty("--rx", (Y * -(G - 0.5) * 2 * g.tilt * ao(u.offsetHeight)).toFixed(3) + "deg"), u.style.setProperty("--mx", (D * 100).toFixed(1) + "%"), u.style.setProperty("--my", (G * 100).toFixed(1) + "%"), u._down || u.style.setProperty("--sc", mi(u, g.lift));
  }, { passive: !0 }), r.addEventListener("pointerout", (S) => {
    a && !a.contains(S.relatedTarget) && (y(a), a = null);
  }), r.addEventListener("pointerdown", (S) => {
    var g, h;
    const u = Hn() ? null : (h = (g = S.target).closest) == null ? void 0 : h.call(g, ui);
    u && (u._down = !0, u.classList.add("mvPv"), u.classList.remove("mvMoving"), u.style.setProperty("--sc", mi(u, kt.pivot.press)));
  }), r.addEventListener("pointerup", (S) => {
    var g, h;
    const u = (h = (g = S.target).closest) == null ? void 0 : h.call(g, ui);
    u && (u._down = !1, u.style.setProperty("--sc", S.pointerType === "touch" ? 1 : mi(u, kt.pivot.lift)));
  });
  let w = null;
  r.addEventListener("pointerover", (S) => {
    var u, g, h;
    S.pointerType !== "touch" && ((h = (g = (u = S.target).closest) == null ? void 0 : g.call(u, ".tfBar")) == null || h.classList.add("mvHover"));
  }), r.addEventListener("pointerout", (S) => {
    var g, h;
    const u = (h = (g = S.target).closest) == null ? void 0 : h.call(g, ".tfBar");
    u && !u.contains(S.relatedTarget) && u !== w && u.classList.remove("mvHover");
  }), r.addEventListener("pointerdown", (S) => {
    var g, h;
    const u = (h = (g = S.target).closest) == null ? void 0 : h.call(g, ".tfBar");
    u && (w = u, u.classList.add("mvHold"));
  });
  const C = (S) => {
    if (!w) return;
    w.classList.remove("mvHold");
    const u = w.getBoundingClientRect();
    (S.pointerType === "touch" || S.clientX < u.left || S.clientX > u.right || S.clientY < u.top || S.clientY > u.bottom) && w.classList.remove("mvHover"), w = null;
  };
  window.addEventListener("pointerup", C, !0), window.addEventListener("pointercancel", C, !0), r.addEventListener("focusin", (S) => {
    var u, g;
    (g = (u = S.target).matches) != null && g.call(u, ".tfBar:focus-visible") && S.target.classList.add("mvHover");
  }), r.addEventListener("focusout", (S) => {
    var u;
    (u = S.target.classList) == null || u.remove("mvHover", "mvHold");
  }), r.addEventListener("keydown", (S) => {
    var g, h;
    const u = (h = (g = S.target).closest) == null ? void 0 : h.call(g, ".tfBar");
    !u || !["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(S.key) || (u.classList.add("mvHold"), clearTimeout(u._k), u._k = setTimeout(() => u.classList.remove("mvHold"), 350));
  }), r.addEventListener("click", (S) => {
    var g, h;
    const u = (h = (g = S.target).closest) == null ? void 0 : h.call(g, "button.tfIcon[data-act]");
    u && Rd(u);
  });
  let P = null;
  const F = (S, u, g) => {
    S.querySelector(":scope>.mvEdge") || S.insertAdjacentHTML("afterbegin", '<span class="mvEdgeFill" aria-hidden="true"></span><span class="mvEdge" aria-hidden="true"><i></i></span>');
    const h = S.getBoundingClientRect(), D = h.width / 2, G = h.height / 2, Y = u.clientX - h.left - D, de = u.clientY - h.top - G, K = Y ? D / Math.abs(Y) : 1 / 0, W = de ? G / Math.abs(de) : 1 / 0, J = Math.min(Math.max(1 / Math.min(K, W), 0), 1);
    let X = Math.atan2(de, Y) * 180 / Math.PI + 90;
    X < 0 && (X += 360);
    const Q = g ? 100 : J * 100;
    S.style.setProperty("--edge-proximity", Q.toFixed(3)), S.style.setProperty("--cursor-angle", X.toFixed(3) + "deg"), S.classList.toggle("mvLitEdge", g || Q >= kt.outline.lightAt);
  }, I = (S) => {
    S.classList.remove("mvLitEdge"), S.style.setProperty("--edge-proximity", "0"), S._down = !1;
  }, R = (S) => {
    var g;
    const u = (g = S.closest) == null ? void 0 : g.call(S, Td);
    return u && !d.classList.contains("tfEditing") ? u : null;
  };
  r.addEventListener("pointermove", (S) => {
    if (S.pointerType === "touch") return;
    const u = R(S.target);
    P && P !== u && I(P), P = u, u && !u._down && F(u, S, !1);
  }, { passive: !0 }), r.addEventListener("pointerout", (S) => {
    P && !P.contains(S.relatedTarget) && (I(P), P = null);
  }), r.addEventListener("pointerdown", (S) => {
    const u = R(S.target);
    u && kt.outline.press && (u._down = !0, F(u, S, !0));
  }), r.addEventListener("pointerup", (S) => {
    const u = R(S.target);
    u && (u._down = !1, S.pointerType === "touch" ? I(u) : F(u, S, !1));
  }), new MutationObserver((S) => {
    var u;
    for (const g of S) {
      const h = g.target;
      if (g.type === "attributes") {
        (u = h.classList) != null && u.contains("tfMoreBackdrop") && !h.hidden && g.oldValue !== null && gs(h);
        continue;
      }
      g.addedNodes.forEach((D) => {
        D.nodeType === 1 && D.classList.contains("tfMoreBackdrop") && !D.hidden && gs(D);
      });
    }
  }).observe(d, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["hidden"], attributeOldValue: !0 });
}
const ks = (r) => r.closest("[data-k],.tfMore,.tfMorePair") || r.getRootNode();
function Ss(r, d) {
  const a = [];
  for (let y = r; y && y !== d && y.parentNode; y = y.parentNode) a.unshift([...y.parentNode.children].indexOf(y));
  return a;
}
const Cs = (r, d) => d.reduce((a, y) => a == null ? void 0 : a.children[y], r);
function Rd(r) {
  var h;
  if (Hn() || r._warp) return;
  const d = kt.warp, a = d.amount / 100, y = r.firstElementChild;
  if (!y) return;
  const w = { squash: { scale: 1 + 0.35 * a + " " + (1 - 0.55 * a) }, pinch: { scale: String(1 - 0.5 * a) }, twist: { rotate: 140 * a + "deg", scale: String(1 - 0.35 * a) }, flip: { rotate: "y 90deg" } }[d.style], C = "blur(" + 2 * a + "px)", P = r.getRootNode(), F = ks(r), I = (h = F.dataset) == null ? void 0 : h.k, R = Ss(r, F), S = r.getAttribute("aria-pressed") + "|" + r.dataset.act;
  r._warp = 1;
  const u = y.animate([{ scale: "1", rotate: "none", filter: "blur(0px)" }, { ...w, filter: C }], { duration: d.win, easing: St.exit, fill: "forwards" }), g = performance.now();
  u.finished.then(() => {
    const D = () => {
      var J, X;
      const G = I ? F.isConnected ? F : (J = P.querySelector) == null ? void 0 : J.call(P, '[data-k="' + CSS.escape(I) + '"]') : F, Y = G && Cs(G, R);
      if (Y === r && r.getAttribute("aria-pressed") + "|" + r.dataset.act === S && performance.now() - g < 420) {
        requestAnimationFrame(D);
        return;
      }
      (((X = Y == null ? void 0 : Y.matches) != null && X.call(Y, "button.tfIcon") ? Y : r).firstElementChild || y).animate([{ ...w, filter: C }, { scale: "1", rotate: "none", filter: "blur(0px)" }], { duration: d.wout, easing: St[d.ease] }), u.cancel(), r._warp = 0;
    };
    D();
  });
}
function Ad(r, d, a, y, w) {
  if (r.getAnimations().forEach((S) => S.cancel()), r.style.left = y + "px", r.style.width = w + "px", Hn() || d === y && a === w) return;
  const C = kt.tabs, P = C.stretch / 100, F = (S, u) => ({ left: S + "px", width: u + "px" }), R = y > d ? F(d + (y - d) * (0.15 * (1 - P)), y + w - (d + (y - d) * (0.15 * (1 - P)))) : F(y, d + a - y - (d - y) * (0.15 * (1 - P)));
  r.animate([F(d, a), { offset: 0.5, ...R }, F(y, w)], { duration: C.dur, easing: St.standard });
}
function Nd(r) {
  const d = ":is(.themeChoice,.wbSegments,.tfHeightTabs,.hcSeg,.tfSeg)", a = (w) => w.querySelector(':scope>[aria-pressed="true"],:scope>[aria-checked="true"],:scope>.active'), y = (w, C) => C ? [...w.children].indexOf(C) : -1;
  r.addEventListener("click", (w) => {
    var K, W, J;
    const C = (W = (K = w.target).closest) == null ? void 0 : W.call(K, d + ">button"), P = C == null ? void 0 : C.parentElement;
    if (!P || Hn() || C.disabled) return;
    const F = a(P);
    if (!F || F === C) return;
    const I = y(P, F), R = P.getBoundingClientRect(), S = F.getBoundingClientRect(), u = getComputedStyle(F).borderRadius, g = P.getRootNode(), h = ks(P), D = (J = h.dataset) == null ? void 0 : J.k, G = Ss(P, h), Y = performance.now(), de = () => {
      var be, Re, p;
      const X = D && !h.isConnected ? (be = g.querySelector) == null ? void 0 : be.call(g, '[data-k="' + CSS.escape(D) + '"]') : h, Q = X && Cs(X, G), Z = (Re = Q == null ? void 0 : Q.matches) != null && Re.call(Q, d) ? a(Q) : null;
      if (!Z || y(Q, Z) === I) {
        performance.now() - Y < 700 && requestAnimationFrame(de);
        return;
      }
      const Me = Q.getBoundingClientRect(), Oe = Z.getBoundingClientRect(), T = getComputedStyle(Z);
      (p = Q.querySelector(":scope>.mvSegInd")) == null || p.remove();
      const ce = document.createElement("span");
      ce.className = "mvSegInd", ce.style.cssText = "top:" + (Oe.top - Me.top - Q.clientTop) + "px;height:" + Oe.height + "px;border-radius:" + u + ";background:" + T.backgroundColor + ";box-shadow:" + T.boxShadow, getComputedStyle(Q).position === "static" && (Q.style.position = "relative"), Q.prepend(ce), Q.classList.add("mvSegMoving"), Ad(ce, S.left - R.left - Q.clientLeft, S.width, Oe.left - Me.left - Q.clientLeft, Oe.width), clearTimeout(Q._seg), Q._seg = setTimeout(() => {
        ce.remove(), Q.classList.remove("mvSegMoving");
      }, kt.tabs.dur + 20);
    };
    requestAnimationFrame(de);
  }, !0);
}
const Id = (r) => getComputedStyle(r).placeItems.startsWith("end");
function gs(r) {
  const d = r.firstElementChild;
  if (Hn() || !d || d.classList.contains("still")) return;
  const a = kt.dialog;
  r.animate([{ opacity: 0, backdropFilter: "blur(0px)" }, { opacity: 1, backdropFilter: "blur(" + a.blur + "px)" }], { duration: a.open, easing: St.standard }), d.style.animation = "none", d.animate(Id(r) ? [{ transform: "translateY(100%)" }, { transform: "none" }] : [{ opacity: 0, transform: "scale(" + a.from / 100 + ")" }, { opacity: 1, transform: "none" }], { duration: a.open, easing: St[a.ease] }), [...(d.classList.contains("tfMorePair") && d.querySelector(".tfMore") || d).children].forEach((w, C) => w.animate([{ opacity: 0 }, { opacity: 1 }], { duration: a.open * 0.6, delay: a.open * 0.35 + C * 40, easing: St.standard, fill: "backwards" }));
}
const Bd = "0.93.0", gi = "move_assistant", Pd = "move_assistant", hs = "move_assistant_checkin_reminder";
function Fd() {
  if (document.getElementById("move-assistant-inter")) return;
  const r = document.createElement("link");
  r.id = "move-assistant-inter", r.rel = "stylesheet", r.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(r);
}
class Dd extends HTMLElement {
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
    const a = !this._hass;
    if (this._hass = d, a) {
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
    Fd();
    const d = this.shadowRoot || this.attachShadow({ mode: "open" });
    d.innerHTML = `<style>${ed}${td}${nd}</style>${ad}`;
    const a = d.getElementById("app");
    a.style.opacity = "0";
    let y = null;
    try {
      const w = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: gi
      });
      y = (w == null ? void 0 : w.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(y), this._app = Cd(d, {
      data: y,
      save: (w) => this._save(w),
      fire: (w, C) => this._fire(w, C),
      ws: (w) => this._hass.callWS(w),
      subscribe: (w, C) => {
        var P, F;
        return (F = (P = this._hass) == null ? void 0 : P.connection) != null && F.subscribeMessage ? this._hass.connection.subscribeMessage(C, w) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var w, C;
        return Object.keys(((C = (w = this._hass) == null ? void 0 : w.services) == null ? void 0 : C.notify) || {}).sort();
      },
      setReminderAutomation: (w) => this._setReminderAutomation(w),
      setLight: (w) => this.classList.toggle("lightBody", w),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), Ed(d, a), Nd(d), this.isConnected || this._app.suspend(), a.style.transition = "opacity .2s ease", a.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var a;
    const d = (a = this._hass) == null ? void 0 : a.connection;
    d != null && d.subscribeMessage && d.subscribeMessage(
      (y) => {
        var C;
        const w = JSON.stringify((y == null ? void 0 : y.value) ?? null);
        w === this._lastSaved || w === this._pendingJson || (this._lastSaved = w, (C = this._app) == null || C.applyRemoteData(y.value));
      },
      { type: "frontend/subscribe_user_data", key: gi }
    ).catch(() => {
    });
  }
  _save(d) {
    this._pendingJson = JSON.stringify(d), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const a = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: gi,
          value: JSON.parse(a)
        }), this._lastSaved = a;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(d, a = {}) {
    var y, w;
    ((y = this._config) == null ? void 0 : y.events) !== !1 && ((w = this._hass) == null || w.callWS({
      type: "fire_event",
      event_type: Pd,
      event_data: { action: d, ...a }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(d) {
    const a = `config/automation/config/${hs}`;
    if (!d) {
      try {
        await this._hass.callApi("DELETE", a);
      } catch (C) {
        if ((C == null ? void 0 : C.status_code) !== 404 && (C == null ? void 0 : C.status) !== 404) throw C;
      }
      return;
    }
    const y = (C) => `${C}:00`, w = window.location.pathname;
    await this._hass.callApi("POST", a, {
      id: hs,
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
    const a = this.requestFullscreen || this.webkitRequestFullscreen;
    Promise.resolve(a.call(this)).catch(
      () => this._toast("Full screen isn't available here")
    );
  }
  _toast(d) {
    var y;
    const a = (y = this.shadowRoot) == null ? void 0 : y.getElementById("toast");
    a && (a.textContent = d, a.classList.add("show"), setTimeout(() => a.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", Dd), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${Bd} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
