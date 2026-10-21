const fs = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#f1f1f1;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-tile);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,white)}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#c62f2f;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#fbf9f6;--color-text-on-selected:#26221e;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:#090909!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#ffffff38}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{background:var(--primary);box-shadow:0 0 0 2.4px #fff,0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:22.4px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:16px;--r-card:48px;--r-tile:32px;--r-inner:16px;--r-fine:12px;--tile-min:78px;--chip-size:46px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}#app.light .digits{mix-blend-mode:normal;color:var(--text)}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#222222;--muted:rgba(34,34,34,.85);--accent-text:#222222;--line:rgba(34,34,34,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto;border-radius:22.4px;background:var(--raised)}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}#settingsView .metaTableWrap{border-radius:var(--r-tile);background:var(--group-bg)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:0;border-radius:var(--r-tile);background:var(--tile);overflow:hidden}.wxDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0}.wxTemps{display:grid;justify-items:center;gap:8px}.wxLow{color:var(--muted)}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxCompact{display:none}@media (max-width:620px){.wxWide{display:none}.wxCompact{display:grid;gap:var(--inset)}}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg:only-child{display:block;width:100%;height:100%}.wxIcon.clear,.wxIcon.partly{background:var(--wx-clear)}.wxIcon.cloudy{background:var(--wx-cloudy)}.wxIcon.rain,.wxIcon.snow{background:var(--color-text-muted)}.wxIcon.night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--color-fill-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName,.wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxDayName,.wxHigh,.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright)}', bs = `<main id="app"><div class="shell">
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
        <div class="integration"><div><strong>Weather</strong><div class="status" id="weatherStatus" data-empty="The forecast on Home, from a Home Assistant weather entity">The forecast on Home, from a Home Assistant weather entity</div></div><select class="settingsSelect entitySelect" id="weatherEntity" aria-label="Weather entity"></select></div>
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
        <div class="toggleRow"><div><strong>Weather</strong><div class="status">Today and the next days, beside Movement</div></div><button class="switch on" data-toggle="weather"></button></div>
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
`;
function xs(x, w) {
  var Co, So, To, Lo;
  const o = (e) => x.getElementById(e), U = o("workoutView"), N = o("workoutNameInput");
  let Z = !0;
  const zt = o("homeClock");
  function qt() {
    zt && (zt.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  qt(), setInterval(qt, 15e3);
  const Qi = o("createFlow"), Eo = o("createMovementsSlot"), Ro = o("createTimingSlot"), Ao = o("createFinishSlot"), No = o("movementStepSummary"), Fo = o("timingStepSummary"), Bo = o("finishStepSummary"), Xn = o("continueToTiming"), Io = o("continueToFinish"), Po = o("finishMoveButton");
  let Jn = !1, un = [];
  function Ho(e) {
    !e || un.some((t) => t.node === e) || un.push({ node: e, parent: e.parentNode, next: e.nextSibling });
  }
  function $n(e, t) {
    e && (Ho(e), t.appendChild(e));
  }
  function Do() {
    [...un].reverse().forEach(({ node: e, parent: t, next: n }) => {
      t && (n && n.parentNode === t ? t.insertBefore(e, n) : t.appendChild(e));
    }), un = [];
  }
  function st(e) {
    x.querySelectorAll(".createStep").forEach((t) => {
      t.classList.toggle("active", t.dataset.createStep === e);
    }), e === "timing" && (Jn = !0), _e();
  }
  function _e() {
    var m, u;
    if (!X) return;
    R[F];
    const e = he.filter((l) => !l.hidden), t = e.filter((l) => l.kind !== "rest").length, n = e.filter((l) => l.kind === "rest").length;
    No.textContent = t ? t + " movement" + (t === 1 ? "" : "s") + (n ? " · " + n + " rest" + (n === 1 ? "" : "s") : "") : "No movements yet";
    const i = t > 0, a = x.querySelector('[data-open-step="timing"]'), r = x.querySelector('[data-open-step="finish"]');
    a.disabled = !i, Xn.disabled = !i, Fo.textContent = i ? Qe(G.value) + " · " + ce(P.value) + " movement · " + ce(D.value) + " rest" : "Add a movement first", r.disabled = !(i && Jn);
    const s = ((N == null ? void 0 : N.value) || "").trim(), d = [];
    (m = o("includeWarmupPreset")) != null && m.checked && d.push("warm-up"), (u = o("includeCooldownPreset")) != null && u.checked && d.push("cooldown"), Bo.textContent = s ? s + (d.length ? " · " + d.join(" + ") : "") : d.length ? d.join(" + ") : "Name and optional extras";
  }
  function zo() {
    var b, E, h;
    Qi.hidden = !1, Jn = !1;
    const e = x.querySelector(".editNameRow"), t = o("createMoveOptions"), n = x.querySelector(".timeTiles"), i = o("routineSummaryModal"), a = x.querySelector(".tempoRevealRow"), r = o("tempoExperiment"), s = (b = o("warmupList")) == null ? void 0 : b.closest("section"), d = o("movementCreatorLaunch"), m = o("movementCreator"), u = (E = o("strengthList")) == null ? void 0 : E.closest("section"), l = (h = o("cooldownList")) == null ? void 0 : h.closest("section");
    [t == null ? void 0 : t.querySelector(".createExtras"), s, d, m, u, l].forEach((g) => g && $n(g, Eo)), [t, n, i, a, r].forEach((g) => $n(g, Ro)), $n(e, Ao), st("movements"), _e();
  }
  function qo() {
    Do(), Qi.hidden = !0, x.querySelectorAll(".createStep").forEach((e) => e.classList.remove("active"));
  }
  x.querySelectorAll("[data-open-step]").forEach((e) => e.addEventListener("click", () => {
    e.disabled || st(e.dataset.openStep);
  })), Xn.addEventListener("click", () => {
    Xn.disabled || st("timing");
  }), Io.addEventListener("click", () => st("finish")), Po.addEventListener("click", () => o("saveWorkoutEdit").click());
  const dt = { home: o("homeView"), workout: o("workoutView"), settings: o("settingsView") }, ea = o("homeNav"), ta = o("settingsNav");
  function Qn(e) {
    Object.entries(dt).forEach(([t, n]) => n.classList.toggle("active", t === e)), ea.classList.toggle("active", e === "home"), ta.classList.toggle("active", e === "settings"), e === "home" && setTimeout(bi, 400), e === "settings" && (requestAnimationFrame(() => cn(x.querySelector(".tab.active"), !1)), On());
  }
  const G = o("totalTime"), P = o("workTime"), D = o("restTime"), _o = o("totalOut"), na = o("workOut"), ia = o("restOut"), Oo = o("totalFill"), Go = o("workFill"), Vo = o("restFill"), Me = o("roundsInput"), Wo = o("roundsFill"), jo = o("roundsOut"), Yo = o("totalLabel"), aa = o("routineSummaryModal"), mn = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let Ce = mn.map((e) => ({ ...e })), he = [
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
  const gn = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let Se = gn.map((e) => ({ ...e }));
  const Uo = {
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
  }, B = oa(w.data), R = B.profiles;
  let F = R[B.selected] ? B.selected : B.order.find((e) => R[e]) || "kettlebell";
  function oa(e) {
    const t = e && typeof e == "object" ? JSON.parse(JSON.stringify(e)) : {}, n = t.profiles && Object.keys(t.profiles).length ? t.profiles : JSON.parse(JSON.stringify(Uo)), i = (Array.isArray(t.order) ? t.order : Object.keys(n)).filter((a) => n[a]);
    return Object.keys(n).forEach((a) => {
      i.includes(a) || i.push(a);
    }), {
      v: 1,
      profiles: n,
      order: i,
      selected: t.selected || i[0],
      history: Array.isArray(t.history) ? t.history : [],
      checkins: (Array.isArray(t.checkins) ? t.checkins : Zo(t.energy)).map(ra),
      settings: { ...t.settings || {} }
    };
  }
  function Zo(e) {
    if (!Array.isArray(e)) return [];
    const t = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], n = [];
    return e.forEach((i) => {
      const a = new Date(i.at);
      if (isNaN(a)) return;
      const r = a.getFullYear() + "-" + String(a.getMonth() + 1).padStart(2, "0") + "-" + String(a.getDate()).padStart(2, "0"), s = a.getHours() < 14 ? "morning" : "evening";
      if (n.some((m) => m.date === r && m.slot === s)) return;
      const d = t.indexOf(i.value) + 1;
      d > 0 && n.push({ date: r, slot: s, mood: null, energy: d, at: i.at });
    }), n;
  }
  function ra(e) {
    if (e.scale === 100) return e;
    const t = (n) => n == null ? null : Math.round((Number(n) - 1) / 5 * 100);
    return { ...e, mood: t(e.mood), energy: t(e.energy), scale: 100 };
  }
  function Re() {
    X || (B.selected = F, B.order = B.order.filter((e) => R[e] && e !== $e), w.save(B));
  }
  function z() {
    return B.settings;
  }
  function Ae(e) {
    const t = R[e];
    if (!t) return;
    F = e;
    const n = o("workoutNameInput");
    if (n && (n.value = t.name), G.value = t.total, P.value = t.work, D.value = t.rest, Me.value = t.rounds || 1, t.customSequence) {
      const i = (t.sequence || []).map((r) => ({ ...r })), a = (r) => i.filter((s) => s.presetRole === r).map(({ presetRole: s, ...d }) => d);
      Ce = (t.warmup || a("warmup")).map((r) => ({ ...r })), Se = (t.cooldown || a("cooldown")).map((r) => ({ ...r })), he = i.filter((r) => !r.presetRole), ii(t.preset || "movement", !1);
    } else
      G.min = 3, G.max = 40, G.step = 1, P.min = 20, P.max = 60, P.step = 5, D.min = 5, D.max = 30, D.step = 5, Ce = (t.warmup || mn).map((i) => ({ ...i })), Se = (t.cooldown || gn).map((i) => ({ ...i })), he = t.strength.map((i) => Array.isArray(i) ? (([a, r, s, d = !1]) => ({ id: a, name: r, group: s, kind: "work", hidden: !!d }))(i) : { ...i });
    x.querySelectorAll(".workoutPanel[data-workout]").forEach((i) => i.classList.toggle("active", i.dataset.workout === e)), _();
  }
  function Ko(e, t, n) {
    const i = e.getBoundingClientRect(), a = i.width / 2, r = i.height / 2, s = t - a, d = n - r;
    let m = 1 / 0, u = 1 / 0;
    s !== 0 && (m = a / Math.abs(s)), d !== 0 && (u = r / Math.abs(d));
    const l = Math.min(Math.max(1 / Math.min(m, u), 0), 1);
    let p = Math.atan2(d, s) * (180 / Math.PI) + 90;
    return p < 0 && (p += 360), { edge: l, angle: p };
  }
  function ei(e, t, n = !1) {
    const i = e.getBoundingClientRect(), a = t.clientX - i.left, r = t.clientY - i.top, { edge: s, angle: d } = Ko(e, a, r), m = n ? 100 : s * 100;
    e.style.setProperty("--edge-proximity", m.toFixed(3)), e.style.setProperty("--cursor-angle", d.toFixed(3) + "deg"), e.classList.toggle("borderGlowActive", n || m >= 30);
  }
  function sa(e) {
    e.addEventListener("pointermove", (n) => ei(e, n, !1)), e.addEventListener("pointerenter", (n) => ei(e, n, !1)), e.addEventListener("pointerdown", (n) => ei(e, n, !0));
    const t = () => {
      e.classList.remove("borderGlowActive"), e.style.setProperty("--edge-proximity", "0");
    };
    e.addEventListener("pointerleave", t), e.addEventListener("pointerup", t), e.addEventListener("pointercancel", t);
  }
  sa(o("addWorkoutPanel"));
  let X = !1, $e = null;
  function M(e) {
    return String(e ?? "").replace(/[&<>"']/g, (t) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[t]);
  }
  function Xo(e) {
    return e.summary ? e.summary : e.customSequence ? Qe(e.total) + " · custom move" : Qe(e.total) + " · " + ce(e.work) + " / " + ce(e.rest) + " · warm-up + cooldown";
  }
  function ti(e, t) {
    var r;
    const n = document.createElement("article");
    n.className = "workoutPanel", n.dataset.workout = e, n.tabIndex = 0;
    const i = t.activityCount ?? (((r = t.sequence) == null ? void 0 : r.length) || 0);
    n.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + M(t.name) + '</div><div class="sub">' + M(Xo(t)) + '</div><span class="sourceTag">' + M(t.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (i ? i + " activities" + ((t.rounds || 1) > 1 ? " × " + t.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + M(t.name) + "</div></div>";
    const a = o("addWorkoutPanel");
    return o("workoutGallery").insertBefore(n, a), sa(n), n.addEventListener("click", (s) => {
      s.target.closest("button") || Ae(e);
    }), n.addEventListener("keydown", (s) => {
      (s.key === "Enter" || s.key === " ") && !s.target.closest("button") && (s.preventDefault(), Ae(e));
    }), n.querySelector(".seeWorkoutBtn").addEventListener("click", (s) => {
      s.stopPropagation(), Ae(e), Ha(!1);
    }), n.querySelector(".startWorkoutBtn").addEventListener("click", (s) => {
      s.stopPropagation(), Ae(e), Hr();
    }), n;
  }
  function da() {
    x.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.remove()), B.order.forEach((e) => {
      R[e] && ti(e, R[e]);
    }), x.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.classList.toggle("active", e.dataset.workout === F));
  }
  da(), o("addWorkoutPanel").addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), o("addWorkoutPanel").click());
  }), o("addWorkoutPanel").addEventListener("click", () => {
    X = !0, $e = "custom-" + Date.now(), R[$e] = {
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
    }, Ae($e), Ha(!0);
  });
  let f = [], L = 0, pe = 0, _t = 1, Ee = !1, Q = null, vn = null, le = !1, lt = B.settings.upcomingCount ?? "all", la = "movement";
  function hn(e, t, n) {
    return (Number(e) - t) / (n - t) * 100;
  }
  function ce(e) {
    const t = Math.max(0, Number(e) || 0);
    return t >= 3600 && t % 3600 === 0 ? t / 3600 + " hr" : t >= 60 && t % 60 === 0 ? t / 60 + " min" : t >= 60 ? Math.round(t / 60) + " min" : Math.round(t) + " sec";
  }
  function Qe(e) {
    const t = Math.max(0, Number(e) || 0);
    return t >= 60 && t % 60 === 0 ? t / 60 + " hr" : t >= 60 ? Math.floor(t / 60) + " hr " + t % 60 + " min" : t + " min";
  }
  function fn() {
    Oo.style.width = hn(G.value, Number(G.min), Number(G.max)) + "%", Go.style.width = hn(P.value, Number(P.min), Number(P.max)) + "%", Vo.style.width = hn(D.value, Number(D.min), Number(D.max)) + "%", na.textContent = ce(P.value), ia.textContent = ce(D.value);
    const e = Number(Me.value) || 1;
    Wo.style.width = hn(e, 1, 10) + "%", Yo.textContent = e > 1 ? "Time per round" : "Total time";
  }
  function ni(e) {
    return e.filter((t) => !t.hidden);
  }
  function Ot(e) {
    const t = Math.max(0, Math.round(Number(e) || 0)), n = Math.floor(t / 3600), i = Math.floor(t % 3600 / 60), a = t % 60;
    return (n ? n + ":" + String(i).padStart(2, "0") : i) + ":" + String(a).padStart(2, "0");
  }
  function Jo(e) {
    let t;
    try {
      t = new URL(String(e || "").trim());
    } catch {
      return null;
    }
    const n = t.hostname.replace(/^(www|m|music)\./, "");
    let i = null;
    if (n === "youtu.be") i = t.pathname.slice(1).split("/")[0];
    else if (/^youtube(-nocookie)?\.com$/.test(n))
      if (t.pathname === "/watch") i = t.searchParams.get("v");
      else {
        const d = t.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        d && (i = d[2]);
      }
    if (!i || !/^[\w-]{11}$/.test(i)) return null;
    const a = (d) => {
      if (!d) return 0;
      if (/^\d+$/.test(d)) return Number(d);
      const m = d.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return m ? (Number(m[1]) || 0) * 3600 + (Number(m[2]) || 0) * 60 + (Number(m[3]) || 0) : 0;
    }, r = a(t.searchParams.get("t") || t.searchParams.get("start")), s = a(t.searchParams.get("end"));
    return { id: i, start: r, end: s > r ? s : null };
  }
  function Gt(e, t) {
    if (e.useVideoLength === !1) return Math.max(5, Number(e.duration) || t || 300);
    const n = Number(e.start) || 0, i = Number(e.end) || Number(e.videoDuration) || 0;
    return i > n ? Math.round(i - n) : Number(e.duration) || 300;
  }
  function bn(e, t) {
    const n = Math.max(0, Number(e) || 0);
    return Math.round(t === "hour" ? n * 3600 : t === "min" ? n * 60 : n);
  }
  function ii(e, t = !0) {
    la = e, x.querySelectorAll(".createPresetBtn").forEach((i) => i.classList.toggle("active", i.dataset.movePreset === e));
    const n = R[F];
    n && (n.preset = e), e === "work" ? (G.min = 30, G.max = 480, G.step = 30, P.min = 300, P.max = 7200, P.step = 300, D.min = 60, D.max = 1800, D.step = 60, t && (G.value = 60, P.value = 1500, D.value = 300), o("addMovementUnit").value = "min", o("addMovementDuration").value = 25, o("addRestUnit").value = "min", o("addRestDuration").value = 5) : (G.min = 3, G.max = 40, G.step = 1, P.min = 20, P.max = 60, P.step = 5, D.min = 5, D.max = 30, D.step = 5, t && (G.value = 20, P.value = 45, D.value = 15), o("addMovementUnit").value = "sec", o("addMovementDuration").value = 45, o("addRestUnit").value = "sec", o("addRestDuration").value = 30), fn();
  }
  function ca(e, t) {
    const n = la === "work";
    return e.map((i, a) => ({ ...i, id: t + "-" + a + "-" + Date.now().toString(36), useGlobalTiming: !n, duration: n ? 60 : Number(P.value) }));
  }
  function ai() {
    const e = R[F];
    e != null && e.customSequence && (e.includeWarmup = o("includeWarmupPreset").checked, e.includeCooldown = o("includeCooldownPreset").checked, e.includeWarmup && !Ce.length && (Ce = ca(mn, "warm")), e.includeCooldown && !Se.length && (Se = ca(gn, "cool")), _());
  }
  function $o() {
    const e = o("upcomingCountSetting");
    if (!e) return;
    const t = Math.max(1, f.length - 1), n = lt;
    e.innerHTML = "";
    for (let r = 1; r <= t; r++) {
      const s = document.createElement("option");
      s.value = String(r), s.textContent = String(r), e.appendChild(s);
    }
    const i = document.createElement("option");
    i.value = "all", i.textContent = "All", e.appendChild(i);
    const a = n === "all" ? "all" : String(Math.min(Number(n) || 1, t));
    e.value = a, lt = a === "all" ? "all" : Number(a);
  }
  function _() {
    Number(G.value) * 60;
    const e = Number(P.value), t = Number(D.value), n = R[F], i = !!(n != null && n.customSequence), a = (i ? !n.includeWarmup : n != null && n.warmupOff) ? [] : ni(Ce), r = ni(he), s = i && !n.includeCooldown ? [] : ni(Se);
    if (n && (n.total = Number(G.value), n.work = e, n.rest = t, n.rounds = Number(Me.value) || 1, n.customSequence ? (n.sequence = he.map((c) => ({ ...c })), n.warmup = Ce.map((c) => ({ ...c })), n.cooldown = Se.map((c) => ({ ...c }))) : (n.strength = he.map((c) => ({ ...c })), n.warmup = Ce.map((c) => ({ ...c })), n.cooldown = Se.map((c) => ({ ...c })))), n != null && n.customSequence) {
      const c = [...a.map((S) => ({ ...S, section: "warmup" })), ...r, ...s.map((S) => ({ ...S, section: "cooldown" }))].map((S) => {
        if (S.kind === "video") return { ...S, duration: Gt(S, e), rest: 0 };
        if (S.kind === "rest") {
          const ne = S.useGlobalTiming === !0 ? t : Number(S.duration) || t;
          return { ...S, duration: ne, rest: 0 };
        }
        const te = S.useGlobalTiming === !1 && Number(S.duration) || e;
        return { ...S, duration: te, rest: 0 };
      });
      n.autoRest && Number(n.autoRestDuration) > 0 ? (f = [], c.forEach((S, te) => {
        f.push(S);
        const ne = c[te + 1];
        S.kind !== "rest" && ne && ne.kind !== "rest" && f.push({
          id: "auto-rest-" + te,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(n.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : f = c;
    } else
      f = [...a.map((c) => ({ ...c, section: "warmup" })), ...r, ...s.map((c) => ({ ...c, section: "cooldown" }))].map((c) => c.kind === "video" ? { ...c, duration: Gt(c, e), rest: 0 } : c.kind === "rest" ? { ...c, duration: c.useGlobalTiming === !0 ? t : Number(c.duration) || t, rest: 0 } : { ...c, duration: c.useGlobalTiming === !1 && Number(c.duration) || e, rest: t }), f.forEach((c, S) => {
        var te;
        ((te = f[S + 1]) == null ? void 0 : te.kind) === "rest" && (c.rest = 0);
      }), f.length && (f[f.length - 1].rest = 0);
    const d = Math.max(1, Math.min(10, Number(Me.value) || 1)), m = f, u = (c) => d <= 1 ? null : c.section === "warmup" || c.presetRole === "warmup" ? "first" : c.section === "cooldown" || c.presetRole === "cooldown" ? "last" : c.kind === "video" && (c.videoRounds === "first" || c.videoRounds === "last") ? c.videoRounds : null, l = (c) => !!u(c), p = m.filter((c) => !l(c)), b = m.filter(l), E = p.length, h = p.reduce((c, S) => c + S.duration + S.rest, 0), g = b.reduce((c, S) => c + S.duration + S.rest, 0), v = [
      b.some((c) => c.section === "warmup" || c.presetRole === "warmup") && "warm-up",
      b.some((c) => c.section === "cooldown" || c.presetRole === "cooldown") && "cooldown",
      b.some((c) => c.kind === "video" && !c.section && !c.presetRole) && "video"
    ].filter(Boolean), C = v.length > 1 ? v.slice(0, -1).join(", ") + " & " + v[v.length - 1] : v[0] || "";
    f = [];
    const $ = (c, S) => {
      const te = u(c);
      return !te || (te === "first" ? S === 1 : S === d);
    };
    for (let c = 1; c <= d; c++)
      if (m.filter((S) => $(S, c)).forEach((S, te) => f.push({ ...S, id: S.id + (d > 1 ? "-r" + c : ""), round: c, roundIndex: te })), c < d && E)
        if (n != null && n.customSequence)
          f.push({ id: "round-break-" + c, name: "Rest", group: "Round " + (c + 1) + " next", kind: "rest", hidden: !1, duration: t, rest: 0, round: c, roundIndex: E, roundBreak: !0 });
        else {
          const S = f[f.length - 1];
          S.rest = t, S.roundBreakAfter = !0;
        }
    fn();
    const y = f.reduce((c, S) => c + S.duration + S.rest, 0), I = Math.round(h / 60), W = Math.round(y / 60), ee = d > 1 ? Qe(I) + " × " + d + " rounds" + (g ? " + " + ce(g) + " " + C : "") + " (" + Qe(W) + ")" : Qe(W), q = [a.length ? "warm-up" : "", s.length ? "cooldown" : ""].filter(Boolean), ae = n != null && n.customSequence ? ee + " · " + E + " items" + (q.length && !(d > 1 && g) ? " · " + q.join(" + ") : "") : ee + " · " + ce(e) + " / " + ce(t) + (q.length && !(d > 1 && g) ? " · " + q.join(" + ") : "");
    _o.textContent = ce(h);
    const de = f.filter((c) => !c.roundBreak).length, K = d > 1 ? de + " activities · " + d + " rounds" : E + " activities";
    jo.textContent = d > 1 ? d + " rounds · " + Qe(W) + " total" : "1 round", o("roundsCount").textContent = d, x.querySelectorAll("[data-rounds-step]").forEach((c) => {
      c.disabled = Number(c.dataset.roundsStep) < 0 ? d <= 1 : d >= 10;
    }), n && (n.summary = ae, n.activityCount = E);
    const Xe = x.querySelector(".workoutPanel.active .sub");
    Xe && (Xe.textContent = ae), aa.textContent = ae, pi(), x.querySelectorAll(".workoutPanel.active .activityCount").forEach((c) => c.textContent = K), fn(), si(), mi(), Zt(), $o(), X && _e(), dt.workout.classList.contains("active") && !Q && Bi();
  }
  const Vt = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', Qo = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', er = {
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
    add: '<path d="M5 12H19"/><path d="M12 5V19"/>',
    play: '<path d="M8 5.5V18.5L18.5 12L8 5.5Z"/>',
    pause: '<path d="M9 6V18"/><path d="M15 6V18"/>'
  }, Ie = (e) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (er[e] || "") + "</svg>";
  x.querySelectorAll("[data-icon]").forEach((e) => {
    e.innerHTML = Ie(e.dataset.icon);
  });
  let fe = null, Te = null;
  function tr(e) {
    return e = Math.max(1, Number(e) || 0), e >= 3600 && e % 3600 === 0 ? { value: e / 3600, unit: "hour" } : e >= 60 && e % 60 === 0 ? { value: e / 60, unit: "min" } : { value: e, unit: "sec" };
  }
  function pa(e = !1) {
    const t = x.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    t && (t.focus({ preventScroll: !0 }), e && t.select());
  }
  function oi(e, t, n = {}) {
    const i = e.kind === "rest", a = e.kind === "video", r = a ? e.useVideoLength !== !1 : i ? e.useGlobalTiming === !0 : e.useGlobalTiming !== !1, s = Number(i ? D.value : P.value), d = tr(a ? e.useVideoLength === !1 ? e.duration : Gt({ ...e, useVideoLength: !0 }) : r ? s : e.duration || s), m = a && (Number(e.videoDuration) > 0 || Number(e.end) > 0), u = a ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + M(e.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + M(e.autoName ? "" : e.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([y, I]) => '<option value="' + y + '"' + ((e.videoRounds || "every") === y ? " selected" : "") + ">" + I + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + M(e.name) + '" placeholder="' + (i ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + M(e.group) + '" placeholder="' + (i ? "Rest" : "e.g. Glutes + legs") + '"></label>', l = a ? "Play the whole " + (Number(e.start) > 0 || Number(e.end) > 0 ? "clip" : "video") + (m ? " · " + Ot(Gt({ ...e, useVideoLength: !0 })) : "") : "Use global timing · " + ce(s), p = document.createElement("div");
    p.className = "moveRow editing" + (n.sheet ? " inSheet" : ""), p.dataset.index = t, p.dataset.id = e.id;
    const b = n.isNew ?? (Te == null ? void 0 : Te.item) === e, E = n.sheet ? '<div class="moveEditActions sheetActions">' + (b ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (e.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + M(e.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (b ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    p.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (a ? " videoFields" : "") + '">' + u + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (r ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + M(l) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + d.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((y) => '<option value="' + y + '"' + (y === d.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[y] + "</option>").join("") + "</select></div></div>" + E + "</div>";
    const h = (y) => p.querySelector("[data-f=" + y + "]"), g = () => {
      const y = h("global").checked;
      h("dur").disabled = y, h("unit").disabled = y, p.querySelector(".creatorDurationRow").classList.toggle("isDisabled", y);
    };
    h("global").addEventListener("change", g), g();
    const v = () => {
      var y;
      if (n.sheet) {
        (y = n.onCancel) == null || y.call(n);
        return;
      }
      b && wn(), fe = null, _();
    }, C = () => {
      var W;
      if (a) {
        $();
        return;
      }
      const y = h("name").value.trim();
      if (!y) {
        h("name").focus();
        return;
      }
      e.name = y, e.group = h("group").value.trim() || (i ? "Rest" : "Movement");
      const I = h("global").checked;
      if (e.useGlobalTiming = I, I || (e.duration = Math.max(i ? 5 : 1, bn(h("dur").value, h("unit").value))), n.sheet) {
        (W = n.onSaved) == null || W.call(n);
        return;
      }
      b && (Te = null), fe = null, _(), j(b ? i ? "Rest added" : "Movement added" : "Movement updated");
    }, $ = () => {
      var q;
      const y = h("url").value.trim(), I = Jo(y);
      if (!I) {
        h("urlError").hidden = !1, h("url").classList.add("invalid"), h("url").focus();
        return;
      }
      const W = I.id !== e.videoId;
      e.url = y, e.videoId = I.id, e.start = I.start, e.end = I.end, W && (e.videoDuration = null, e.videoError = null);
      const ee = h("name").value.trim();
      e.autoName = !ee, e.name = ee || (W ? "" : e.name) || e.videoTitle || "YouTube video", e.group = "Video", e.videoRounds = h("rounds").value, e.useVideoLength = h("global").checked, e.useVideoLength || (e.duration = Math.max(5, bn(h("dur").value, h("unit").value))), n.sheet ? (q = n.onSaved) == null || q.call(n) : (b && (Te = null), fe = null, _(), j(b ? "Video added" : "Video updated")), (W || !e.videoDuration || e.autoName && !e.videoTitle) && Zr(e);
    };
    if (a && h("url").addEventListener("input", () => {
      h("urlError").hidden = !0, h("url").classList.remove("invalid");
    }), p.querySelector("[data-a=cancel]").addEventListener("click", v), p.querySelector("[data-a=save]").addEventListener("click", C), n.sheet && !b) {
      p.querySelector("[data-a=hide]").addEventListener("click", () => {
        var I;
        return (I = n.onHide) == null ? void 0 : I.call(n);
      });
      const y = p.querySelector("[data-a=remove]");
      ln(y, y.querySelector(".removeFill"), 1200, () => {
        var I;
        return (I = n.onRemove) == null ? void 0 : I.call(n);
      });
    }
    return p.addEventListener("keydown", (y) => {
      y.key === "Escape" && (y.preventDefault(), y.stopPropagation(), v()), y.key === "Enter" && y.target.matches("input") && (y.preventDefault(), C());
    }), p;
  }
  function ri(e, t) {
    const n = o(t);
    n.innerHTML = "", e.forEach((i, a) => {
      if (i === fe && !Ut()) {
        n.appendChild(oi(i, a));
        return;
      }
      const r = document.createElement("div");
      r.className = "moveRow" + (i.hidden ? " hidden" : "") + (i.kind === "rest" ? " restItem" : "") + (i.kind === "video" ? " videoItem" : "") + (qi(i) ? " noMeta" : ""), r.dataset.index = a, r.dataset.id = i.id;
      const s = i.kind === "rest" ? i.useGlobalTiming === !0 ? "Global timing" : ce(i.duration) : i.useGlobalTiming === !1 ? ce(i.duration) : "Global timing", d = i.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", m = i.kind === "video" ? i.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (i.useVideoLength === !1 ? "stops after " + ce(i.duration) : Number(i.videoDuration) > 0 || Number(i.end) > 0 ? Ot(Gt(i)) : "plays to the end") + (i.videoRounds === "first" ? " · first round only" : i.videoRounds === "last" ? " · last round only" : "") : i.group + " · " + s, u = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + M(i.name) + '. Drag, or use the up and down arrow keys">' + Vt + "</button>", l = '<div class="moveText"><div class="moveItemName">' + M(i.name) + d + '</div><div class="moveMeta">' + M(m) + "</div></div>", p = (h) => h.addEventListener("keydown", (g) => {
        var $, y;
        if (g.key !== "ArrowUp" && g.key !== "ArrowDown") return;
        g.preventDefault();
        const v = e.indexOf(i), C = v + (g.key === "ArrowUp" ? -1 : 1);
        C < 0 || C >= e.length || (e.splice(v, 1), e.splice(C, 0, i), _(), (y = ($ = o(t).children[C]) == null ? void 0 : $.querySelector(".dragHandle")) == null || y.focus());
      });
      if (Ut()) {
        r.classList.add("phoneRow"), r.tabIndex = 0, r.setAttribute("role", "button"), r.setAttribute("aria-label", "Edit " + (i.name || "step")), r.innerHTML = u + l + '<span class="rowChevron" aria-hidden="true">›</span>';
        const h = r.querySelector(".dragHandle");
        h.addEventListener("pointerdown", (g) => ua(g, r, n, e)), p(h), r.addEventListener("click", (g) => {
          g.target.closest(".dragHandle") || ka(i, e);
        }), r.addEventListener("keydown", (g) => {
          g.key === "Enter" && g.target === r && (g.preventDefault(), ka(i, e));
        }), n.appendChild(r);
        return;
      }
      r.innerHTML = u + l + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + M(i.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (i.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + M(i.name) + '"><span class="removeFill"></span><span class="removeLabel">' + Qo + "</span></button></div>", r.querySelector(".editBtn").addEventListener("click", () => {
        wn(), fe = i, _(), pa();
      }), r.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        i.hidden = !i.hidden, _();
      });
      const b = r.querySelector(".removeBtn");
      ln(b, b.querySelector(".removeFill"), 1200, () => {
        const h = e.indexOf(i);
        h < 0 || (e.splice(h, 1), _(), j("Removed " + i.name, { label: "Undo", run: () => {
          e.splice(Math.min(h, e.length), 0, i), _();
        } }));
      });
      const E = r.querySelector(".dragHandle");
      E.addEventListener("pointerdown", (h) => ua(h, r, n, e)), p(E), n.appendChild(r);
    });
  }
  const Oe = () => {
    var e;
    return (e = window.matchMedia) == null ? void 0 : e.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, xn = (e) => {
    var t;
    try {
      (t = navigator.vibrate) == null || t.call(navigator, e);
    } catch {
    }
  };
  function ua(e, t, n, i) {
    if (e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const a = e.currentTarget, r = e.pointerId, s = !Oe();
    try {
      a.setPointerCapture(r);
    } catch {
    }
    const d = t.closest(".exerciseScroller") || di(t), m = n.style.position;
    n.style.position = "relative";
    const u = [...n.children].filter((T) => T.classList.contains("moveRow")), l = u.indexOf(t), p = parseFloat(getComputedStyle(n).rowGap) || 8, b = t.offsetHeight, E = b + p, h = u.map((T) => T.offsetTop), g = u.map((T) => T.offsetHeight), v = () => n.getBoundingClientRect().top, C = n.getBoundingClientRect().width, $ = e.clientY - (v() + h[l]), y = e.clientX;
    let I = e.clientY, W = e.clientX, ee = v() + h[l], q = 0, ae = 0, de = 0, K = 1, Xe = 0, c = l, S = !1, te = 0, ne = !1, Un = !1, Ht = h[l];
    n.classList.add("reordering"), t.classList.add("dragging"), t.style.transition = "none", xn(8);
    const Zn = () => {
      const T = I - $ + b / 2 - v();
      let A = 0;
      return u.forEach((O, ve) => {
        ve !== l && T > h[ve] + g[ve] / 2 && A++;
      }), A;
    }, Kn = () => {
      u.forEach((T, A) => {
        if (A === l) return;
        const O = l < c && A > l && A <= c ? -E : l > c && A >= c && A < l ? E : 0;
        T.style.transform = O ? "translateY(" + O + "px)" : "";
      });
    }, pn = () => {
      const T = n.getBoundingClientRect(), A = Math.abs(W - y) > Math.max(80, C * 0.3) || W < T.left - 24 || W > T.right + 24;
      A !== S && (S = A, t.classList.toggle("willReturn", A), xn(A ? 10 : 4));
      const O = S ? l : Zn();
      O !== c && (c = O, Kn(), S || xn(4));
    }, Je = () => {
      if (c === l) return h[l];
      const T = u.filter((O, ve) => ve !== l);
      let A = h[0];
      for (let O = 0; O < c; O++) A += T[O].offsetHeight + p;
      return A;
    }, Dt = () => {
      const T = s ? Math.min(Math.abs(q) / 40, 1) : 0, A = s && !ne ? Math.max(-3, Math.min(3, de * 0.6)) : 0;
      t.style.transform = "translate(" + ae.toFixed(2) + "px," + (ee - (v() + h[l])).toFixed(2) + "px) rotate(" + A.toFixed(2) + "deg) scale(" + (K * (1 - 0.04 * T)).toFixed(4) + "," + (K * (1 + 0.06 * T)).toFixed(4) + ")";
    }, k = () => {
      te = requestAnimationFrame(k);
      const T = W - y, A = ne ? v() + Ht : I - $, O = ne ? 0 : S ? T * 0.9 : Math.max(-22, Math.min(22, T * 0.22)), ve = ne ? 1 : S ? 0.97 : 1.035;
      if (!s) {
        ee = A, ae = ne ? 0 : O, K = 1, Dt(), ne && Y();
        return;
      }
      const vs = ne ? 0.24 : 0.2, hs = ne ? 0.62 : 0.68;
      q = (q + (A - ee) * vs) * hs, ee += q, de = (de + (O - ae) * 0.16) * 0.7, ae += de, Xe = (Xe + (ve - K) * 0.22) * 0.6, K += Xe, Dt(), ne && Math.abs(q) < 0.15 && Math.abs(A - ee) < 0.5 && Math.abs(ae) < 0.5 && Math.abs(K - 1) < 3e-3 && Y();
    }, H = setInterval(() => {
      if (!d || ne) return;
      const T = d.getBoundingClientRect(), A = 56, O = I < T.top + A ? -10 : I > T.bottom - A ? 10 : 0;
      O && (d.scrollTop += O, pn());
    }, 30);
    function Y() {
      if (Un) return;
      Un = !0, cancelAnimationFrame(te);
      const T = c !== l, A = t.dataset.id;
      if (n.classList.remove("reordering"), u.forEach((ve) => {
        ve.style.transition = "none", ve.style.transform = "";
      }), t.classList.remove("dragging", "willReturn"), n.style.position = m, T) {
        const [ve] = i.splice(l, 1);
        i.splice(c, 0, ve);
      }
      _();
      const O = A && n.querySelector('.moveRow[data-id="' + A + '"]');
      O && s && O.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), T && j("Order saved");
    }
    const ie = (T) => {
      if (T.pointerId === r) {
        if (T.pointerType === "mouse" && T.buttons === 0) {
          ke();
          return;
        }
        I = T.clientY, W = T.clientX, pn();
      }
    }, ge = (T) => {
      T.pointerId === r && ke();
    };
    function ke() {
      ne || (window.removeEventListener("pointermove", ie, !0), window.removeEventListener("pointerup", ge, !0), window.removeEventListener("pointercancel", ge, !0), a.removeEventListener("lostpointercapture", ke), clearInterval(H), S && c !== l && (c = l, Kn()), Ht = Je(), ne = !0, xn(6), setTimeout(Y, 800));
    }
    window.addEventListener("pointermove", ie, !0), window.addEventListener("pointerup", ge, !0), window.addEventListener("pointercancel", ge, !0), a.addEventListener("lostpointercapture", ke), te = requestAnimationFrame(k), Dt();
  }
  function si() {
    var a, r, s, d;
    const e = R[F], t = (a = o("warmupList")) == null ? void 0 : a.closest("section"), n = (r = o("cooldownList")) == null ? void 0 : r.closest("section"), i = (d = (s = o("strengthList")) == null ? void 0 : s.closest("section")) == null ? void 0 : d.querySelector(".sectionTitle");
    e != null && e.customSequence ? (t && (t.hidden = !e.includeWarmup), n && (n.hidden = !e.includeCooldown), i && (i.textContent = "Move sequence")) : (t && (t.hidden = !!(e != null && e.warmupOff)), n && (n.hidden = !1), i && (i.textContent = "Kettlebell work")), ri(Ce, "warmupList"), ri(he, "strengthList"), ri(Se, "cooldownList");
  }
  function wn() {
    if (!Te) return;
    const { item: e, arr: t } = Te;
    Te = null;
    const n = t.indexOf(e);
    n >= 0 && t.splice(n, 1), fe === e && (fe = null);
  }
  function Wt(e) {
    return e.id === "warmupList" ? { arr: Ce, kind: "warmup", group: "Warm-up" } : e.id === "cooldownList" ? { arr: Se, kind: "cooldown", group: "Cooldown" } : { arr: he, kind: "work", group: "" };
  }
  function ma(e, t) {
    const n = Wt(t), i = Date.now().toString(36);
    return e === "video" ? { id: "video-" + i, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : e === "rest" ? { id: "rest-" + i, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(D.value) } : { id: "movement-" + i, name: "", group: n.group, kind: n.kind, hidden: !1, useGlobalTiming: !0, duration: Number(P.value) };
  }
  const ga = "cubic-bezier(.34,1.46,.64,1)";
  function va(e, t) {
    if (Oe() || !e) {
      t();
      return;
    }
    const n = (r) => {
      var s;
      return ((s = r.dataset) == null ? void 0 : s.id) || r;
    }, i = () => [...e.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], a = new Map(i().map((r) => [n(r), r.getBoundingClientRect().top]));
    t(), i().forEach((r) => {
      const s = a.get(n(r));
      if (s === void 0) return;
      const d = s - r.getBoundingClientRect().top;
      Math.abs(d) < 0.5 || r.animate([{ transform: "translateY(" + d + "px)" }, { transform: "none" }], { duration: 440, easing: ga });
    });
  }
  function ha(e, t) {
    if (!e || Oe()) return;
    const n = e.offsetHeight, i = Math.max(0, n - (t || 0));
    e.animate([{ clipPath: "inset(0 0 " + i + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: ga });
  }
  function fa(e, t, n, i) {
    const { arr: a } = Wt(t), r = ma(e, t);
    a.splice(Math.max(0, Math.min(n, a.length)), 0, r), Te = { item: r, arr: a }, fe = r, va(t.closest(".exerciseScroller,.createStepSlot") || t, () => _());
    const s = t.querySelector(".moveRow.editing");
    return ha(s, i), pa(e === "rest"), s;
  }
  function di(e) {
    for (let t = e; t && t.nodeType === 1; t = t.parentElement) {
      const n = getComputedStyle(t).overflowY;
      if (/(auto|scroll)/.test(n) && t.scrollHeight > t.clientHeight) return t;
    }
    return null;
  }
  const ba = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function xa(e, t) {
    const n = document.createElement("div");
    return n.className = "addGhost" + (e === "movement" ? "" : " rest"), n.innerHTML = '<span class="addGhostGrip">' + Vt + '</span><span class="addGhostText"><strong>' + M(t[0]) + "</strong><small>" + M(t[1]) + "</small></span>", o("workoutModal").appendChild(n), n;
  }
  function jt(e) {
    e.classList.add("leaving"), setTimeout(() => e.remove(), 180);
  }
  function nr(e, t, n, i) {
    (fe || Te) && (wn(), fe = null, _());
    const a = e.getBoundingClientRect(), r = xa(t, ba[t]);
    r.setAttribute("aria-hidden", "true"), r.style.width = a.width + "px", r.style.height = a.height + "px", r.style.transform = "translate(" + a.left + "px," + a.top + "px)", e.classList.add("lifting");
    const s = di(e);
    return wa({
      ghost: r,
      origin: a,
      sx: n,
      sy: i,
      scroller: s,
      column: e.closest(".exerciseScroller,.createFlow") || s,
      home: () => e.getBoundingClientRect(),
      onDrop: (d, m, u) => {
        jt(r), e.classList.remove("lifting"), fa(t, d, m, u);
      },
      onReturn: () => {
        jt(r), e.classList.remove("lifting");
      }
    });
  }
  function wa({ ghost: e, origin: t, sx: n, sy: i, scroller: a, column: r, home: s, onDrop: d, onReturn: m, rowLook: u = !1 }) {
    var Dt;
    const l = !Oe(), p = ((Dt = x.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : Dt.offsetHeight) || 80, b = n - t.left, E = i - t.top, h = 44;
    let g = n, v = i, C = t.left, $ = t.top, y = 0, I = 0, W = !l, ee = null, q = null, ae = -1, de = 0, K = null;
    const Xe = () => ["warmupList", "strengthList", "cooldownList"].map((k) => o(k)).filter((k) => k && k.getClientRects().length && !k.closest("[hidden]")), c = (k) => {
      if (k === ee) return;
      ee = k, e.classList.toggle("overList", !!k || u);
      const H = k ? k.getBoundingClientRect().width : t.width;
      e.style.width = H + "px", e.style.height = (k ? p : t.height) + "px";
    }, S = (k) => {
      k.classList.add("leaving"), k.style.height = "0px", k.style.marginTop = "-8px", setTimeout(() => k.remove(), l ? 320 : 0);
    }, te = (k, H, Y) => {
      if (q && q.parentNode === k && ae === Y || (q && (S(q), q = null, ae = -1), !k)) return;
      const ie = document.createElement("div");
      ie.className = "dropSlot", k.insertBefore(ie, H), q = ie, ae = Y, ie.getBoundingClientRect(), ie.style.height = p + "px", ie.style.marginTop = "0px";
    }, ne = () => {
      let k = null, H = 1 / 0;
      for (const ke of Xe()) {
        const T = ke.getBoundingClientRect();
        if (g < T.left - 48 || g > T.right + 48) continue;
        const A = T.top - 28, O = T.bottom + 28, ve = v < A ? A - v : v > O ? v - O : 0;
        ve < H && (H = ve, k = ke);
      }
      const Y = r == null ? void 0 : r.getBoundingClientRect(), ge = Y && g >= Y.left && g <= Y.right && v >= Y.top && v <= Y.bottom || H === 0 ? k : null;
      if (ge) {
        const ke = [...ge.children].filter((A) => A.classList.contains("moveRow"));
        let T = ke.findIndex((A) => {
          const O = A.getBoundingClientRect();
          return v < O.top + O.height / 2;
        });
        T < 0 && (T = ke.length), te(ge, ke[T] || null, T);
      } else te(null);
      c(ge);
    }, Un = () => {
      if (K) return K.aim();
      if (ee) {
        const k = ee.getBoundingClientRect();
        let H = v - p / 2;
        return q && (H = H * 0.6 + q.getBoundingClientRect().top * 0.4), { x: k.left, y: H };
      }
      return { x: g - b, y: v - E };
    }, Ht = (k, H, Y, ie) => {
      e.style.transform = "translate(" + C + "px," + $ + "px) rotate(" + k + "deg) rotate(" + H + "rad) scale(" + Y + "," + ie + ") rotate(" + -H + "rad)";
    }, Zn = () => {
      if (de = requestAnimationFrame(Zn), !W) {
        const T = g - n, A = v - i, O = Math.min(Math.hypot(T, A) / h, 1);
        C = t.left + T * 0.35, $ = t.top + A * 0.35, Ht(0, Math.atan2(A, T), 1 + 0.155 * O, 1 - 0.1 * O);
        return;
      }
      const k = Un();
      if (!l) {
        C = k.x, $ = k.y, Ht(0, 0, 1, 1), K && (cancelAnimationFrame(de), K.done());
        return;
      }
      const H = K ? K.k : 0.17, Y = K ? K.d : 0.7;
      y = (y + (k.x - C) * H) * Y, I = (I + (k.y - $) * H) * Y, C += y, $ += I;
      const ie = Math.hypot(y, I), ge = Math.min(ie / 48, 1), ke = ee || K ? 0 : Math.max(-5, Math.min(5, y * 0.32));
      Ht(ke, Math.atan2(I, y), 1 + 0.1 * ge, 1 - 0.063 * ge), K && ie < 0.15 && Math.hypot(k.x - C, k.y - $) < 0.6 && (cancelAnimationFrame(de), K.done());
    }, Kn = setInterval(() => {
      if (!a || K) return;
      const k = a.getBoundingClientRect(), H = 64, Y = v < k.top + H ? -(k.top + H - v) / 4 : v > k.bottom - H ? (v - (k.bottom - H)) / 4 : 0;
      Y && (a.scrollTop += Math.max(-18, Math.min(18, Y)), ne());
    }, 30);
    de = requestAnimationFrame(Zn);
    let pn = !1;
    const Je = (k, H) => {
      if (pn) return;
      pn = !0, cancelAnimationFrame(de);
      const Y = q ? q.offsetHeight : p;
      !k && q && (q.remove(), q = null), k ? d(k, H, Y) : m();
    };
    return {
      move(k, H) {
        g = k, v = H, !W && Math.hypot(g - n, v - i) > h && (W = !0, y = (g - n) * 0.085, I = (v - i) * 0.085), W && ne();
      },
      drop(k) {
        clearInterval(Kn);
        const H = ee, Y = ae;
        if (!k && H && q) {
          const ie = q;
          K = { k: 0.24, d: 0.62, aim: () => {
            const ge = ie.getBoundingClientRect();
            return { x: ge.left, y: ge.top };
          }, done: () => Je(H, Y) }, setTimeout(() => Je(H, Y), 650), l || (cancelAnimationFrame(de), Je(H, Y));
          return;
        }
        te(null), c(null), K = { k: 0.2, d: 0.66, aim: () => {
          const ie = s();
          return { x: ie.left, y: ie.top };
        }, done: () => Je(null) }, setTimeout(() => Je(null), 650), l || (cancelAnimationFrame(de), Je(null));
      }
    };
  }
  function li(e, t) {
    let n = !1;
    e.addEventListener("click", (i) => {
      if (n) {
        n = !1, i.preventDefault();
        return;
      }
      if (Ut()) {
        Ca(t);
        return;
      }
      const a = o("strengthList"), r = fa(t, a, Wt(a).arr.length, 0);
      r == null || r.scrollIntoView({ block: "nearest", behavior: Oe() ? "auto" : "smooth" });
    }), e.addEventListener("pointerdown", (i) => {
      if (i.button !== void 0 && i.button !== 0) return;
      const a = i.pointerId, r = i.clientX, s = i.clientY;
      let d = null, m = !1;
      try {
        e.setPointerCapture(a);
      } catch {
      }
      const u = (v) => {
        if (v.pointerId === a) {
          if (v.pointerType === "mouse" && v.buttons === 0) {
            g(!1);
            return;
          }
          if (!d) {
            if (Math.hypot(v.clientX - r, v.clientY - s) < 6) return;
            d = nr(e, t, r, s);
          }
          d.move(v.clientX, v.clientY);
        }
      }, l = (v) => {
        v.pointerId === a && g(!1);
      }, p = (v) => {
        v.pointerId === a && g(!0);
      }, b = () => g(!1), E = () => g(!0), h = (v) => {
        v.key === "Escape" && d && (v.preventDefault(), v.stopPropagation(), g(!0));
      };
      function g(v) {
        if (!m && (m = !0, window.removeEventListener("pointermove", u, !0), window.removeEventListener("pointerup", l, !0), window.removeEventListener("pointercancel", p, !0), window.removeEventListener("keydown", h, !0), window.removeEventListener("blur", E), e.removeEventListener("lostpointercapture", b), d)) {
          const C = d;
          d = null, n = !0, setTimeout(() => {
            n = !1;
          }, 0), C.drop(v);
        }
      }
      window.addEventListener("pointermove", u, !0), window.addEventListener("pointerup", l, !0), window.addEventListener("pointercancel", p, !0), window.addEventListener("keydown", h, !0), window.addEventListener("blur", E), e.addEventListener("lostpointercapture", b);
    });
  }
  const Yt = (Co = window.matchMedia) == null ? void 0 : Co.call(window, "(max-width: 620px)");
  function Ut() {
    var e;
    return !!((e = window.matchMedia) != null && e.call(window, "(max-width: 620px)").matches);
  }
  const ya = (e) => e.charAt(0).toUpperCase() + e.slice(1), yn = (e) => e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "movement";
  let ci = null, J = null;
  function kn(e, t, n, i) {
    be(), o("sheetTitle").textContent = e;
    const a = o("sheetBody");
    a.innerHTML = "", a.appendChild(t), ci = n || null, o("sheet").setAttribute("aria-hidden", "false"), o("sheetScrim").classList.add("open"), o("sheet").classList.add("open"), setTimeout(() => {
      if (!o("sheet").classList.contains("open") || !a.contains(t)) return;
      const r = i ? a.querySelector("input[data-f=url],input[data-f=name]") : a.querySelector("button,input,select");
      r == null || r.focus({ preventScroll: !0 });
    }, Oe() ? 0 : 360);
  }
  function be() {
    const e = o("sheet");
    if (!e.classList.contains("open")) return;
    e.classList.remove("open"), o("sheetScrim").classList.remove("open"), e.setAttribute("aria-hidden", "true"), e.contains(x.activeElement) && x.activeElement.blur();
    const t = ci;
    ci = null, t == null || t(), setTimeout(et, 0);
  }
  o("sheetScrim").addEventListener("click", be), o("sheet").addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), be());
  });
  function ka(e, t) {
    const n = oi(e, t.indexOf(e), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        be(), _(), j(ya(yn(e)) + " updated");
      },
      onCancel: be,
      onHide() {
        e.hidden = !e.hidden, be(), _(), j((e.hidden ? "Hidden: " : "Showing: ") + e.name);
      },
      onRemove() {
        be();
        const i = t.indexOf(e);
        i < 0 || (t.splice(i, 1), _(), j("Removed " + e.name, { label: "Undo", run: () => {
          t.splice(Math.min(i, t.length), 0, e), _();
        } }));
      }
    });
    kn("Edit " + yn(e), n, null, !1);
  }
  function ir() {
    const e = document.createElement("div");
    e.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([t, n, i, a]) => {
      const r = document.createElement("button");
      r.type = "button", r.className = "sheetChoice", r.innerHTML = '<span class="timeIcon" aria-hidden="true">' + Ie(n) + "</span><span><strong>" + i + "</strong><small>" + a + "</small></span>", r.addEventListener("click", () => Ca(t)), e.appendChild(r);
    }), kn("Add to the move", e, null, !1);
  }
  function Ca(e) {
    J && Sn();
    const t = ma(e, o("strengthList")), n = oi(t, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        be(), or(t, e);
      },
      onCancel: be
    });
    kn("New " + yn(t), n, null, !0);
  }
  const Cn = o("workoutModal").querySelector(".modalStatic"), Sa = { parent: Cn.parentNode, next: Cn.nextSibling };
  function ar() {
    const e = document.createElement("div");
    e.className = "sheetSetup", e.appendChild(Cn);
    const t = document.createElement("button");
    t.type = "button", t.className = "primary sheetDone", t.textContent = "Done", t.addEventListener("click", be), e.appendChild(t), kn("Setup", e, () => {
      Sa.parent.insertBefore(Cn, Sa.next), pi();
    }, !1);
  }
  function pi() {
    var t, n;
    const e = o("setupSummaryName");
    e && (e.textContent = (((t = o("workoutNameInput")) == null ? void 0 : t.value) || "").trim() || ((n = R[F]) == null ? void 0 : n.name) || "Move", o("setupSummaryMeta").textContent = aa.textContent);
  }
  o("setupSummary").addEventListener("click", ar), o("addFab").addEventListener("click", ir);
  function Ta() {
    const e = o("strengthList");
    return di(e) || e.closest(".exerciseScroller");
  }
  function ui() {
    const e = o("strengthList").getBoundingClientRect(), t = (Ta() || o("strengthList")).getBoundingClientRect(), n = (J == null ? void 0 : J.ghost.offsetHeight) || 64;
    return { left: e.left, top: Math.max(t.top + 12, Math.min(t.bottom - n - 96, t.top + t.height * 0.55 - n / 2)), width: e.width, height: n };
  }
  function or(e, t) {
    var d;
    const n = xa(t, [e.name || ba[t][0], "Drag into place"]);
    n.classList.add("overList", "hovering"), n.setAttribute("aria-label", (e.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const i = document.createElement("span");
    i.className = "addGhostActions", i.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + M(e.name) + '">✕</button>', n.appendChild(i), J = { item: e, type: t, ghost: n };
    const a = ((d = x.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : d.offsetHeight) || 64;
    n.style.width = o("strengthList").getBoundingClientRect().width + "px", n.style.height = a + "px";
    const r = ui(), s = ue.querySelector(".modal").getBoundingClientRect().bottom;
    n.style.transform = "translate(" + r.left + "px," + s + "px)", n.getBoundingClientRect(), Oe() || (n.classList.add("rising"), setTimeout(() => n.classList.remove("rising"), 650)), n.style.transform = "translate(" + r.left + "px," + r.top + "px)", i.querySelector("[data-a=end]").addEventListener("click", Sn), i.querySelector("[data-a=discard]").addEventListener("click", sr), n.addEventListener("pointerdown", rr);
  }
  function rr(e) {
    if (!J || e.target.closest("button") || e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const { item: t, ghost: n } = J, i = e.pointerId;
    try {
      n.setPointerCapture(i);
    } catch {
    }
    n.classList.remove("hovering", "rising"), n.classList.add("held");
    const a = n.getBoundingClientRect(), r = Ta(), s = wa({
      ghost: n,
      origin: { left: a.left, top: a.top, width: a.width, height: a.height },
      sx: e.clientX,
      sy: e.clientY,
      scroller: r,
      column: o("strengthList").closest(".exerciseScroller,.createFlow") || r,
      rowLook: !0,
      home: ui,
      onDrop: (g, v, C) => {
        J = null, jt(n), La(t, g, v, C);
      },
      onReturn: () => {
        n.classList.remove("held"), n.classList.add("hovering");
      }
    });
    let d = !1;
    const m = (g) => {
      if (g.pointerId === i) {
        if (g.pointerType === "mouse" && g.buttons === 0) {
          h(!1);
          return;
        }
        s.move(g.clientX, g.clientY);
      }
    }, u = (g) => {
      g.pointerId === i && h(!1);
    }, l = (g) => {
      g.pointerId === i && h(!0);
    }, p = () => h(!1), b = () => h(!0), E = (g) => {
      g.key === "Escape" && (g.preventDefault(), h(!0));
    };
    function h(g) {
      d || (d = !0, window.removeEventListener("pointermove", m, !0), window.removeEventListener("pointerup", u, !0), window.removeEventListener("pointercancel", l, !0), window.removeEventListener("keydown", E, !0), window.removeEventListener("blur", b), n.removeEventListener("lostpointercapture", p), s.drop(g));
    }
    window.addEventListener("pointermove", m, !0), window.addEventListener("pointerup", u, !0), window.addEventListener("pointercancel", l, !0), window.addEventListener("keydown", E, !0), window.addEventListener("blur", b), n.addEventListener("lostpointercapture", p);
  }
  function La(e, t, n, i) {
    const a = Wt(t);
    e.kind !== "rest" && e.kind !== "video" && (e.kind = a.kind, a.group && (!e.group || e.group === "Movement") && (e.group = a.group)), a.arr.splice(Math.max(0, Math.min(n, a.arr.length)), 0, e), va(t.closest(".exerciseScroller,.createStepSlot") || t, () => _()), ha(t.querySelector('.moveRow[data-id="' + e.id + '"]'), i), j(ya(yn(e)) + " added");
  }
  function Sn() {
    var i;
    if (!J) return;
    const { item: e, ghost: t } = J;
    J = null, jt(t);
    const n = o("strengthList");
    La(e, n, Wt(n).arr.length, 0), (i = n.querySelector('.moveRow[data-id="' + e.id + '"]')) == null || i.scrollIntoView({ block: "nearest", behavior: Oe() ? "auto" : "smooth" });
  }
  function sr() {
    if (!J) return;
    const e = J.ghost;
    J = null, jt(e), j("Discarded");
  }
  function Ma() {
    J && (J.ghost.remove(), J = null);
  }
  window.addEventListener("resize", () => {
    if (J != null && J.ghost.classList.contains("hovering")) {
      const e = ui();
      J.ghost.style.width = e.width + "px", J.ghost.style.transform = "translate(" + e.left + "px," + e.top + "px)";
    }
  }), (So = Yt == null ? void 0 : Yt.addEventListener) == null || So.call(Yt, "change", () => {
    be(), J && !Ut() && Sn(), si();
  });
  {
    const e = o("workoutModal").querySelector(".modal");
    e.addEventListener("scroll", () => {
      (e.scrollTop || e.scrollLeft) && (e.scrollTop = 0, e.scrollLeft = 0);
    });
  }
  function et() {
    const e = o("workoutModal"), t = window.visualViewport;
    if (!e.classList.contains("open") || !Ut()) {
      Ea();
      return;
    }
    const n = t ? t.offsetTop : 0, i = t ? t.offsetLeft : 0, a = t ? t.width : window.innerWidth, r = t ? t.height : window.innerHeight;
    Object.assign(e.style, { right: "auto", bottom: "auto", width: a + "px", height: r + "px", top: n + "px", left: i + "px" });
    const s = e.getBoundingClientRect();
    Math.abs(s.top - n) > 0.5 && (e.style.top = 2 * n - s.top + "px"), Math.abs(s.left - i) > 0.5 && (e.style.left = 2 * i - s.left + "px");
  }
  function Ea() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((e) => o("workoutModal").style.removeProperty(e));
  }
  (To = window.visualViewport) == null || To.addEventListener("resize", et), (Lo = window.visualViewport) == null || Lo.addEventListener("scroll", et), window.addEventListener("resize", et), window.addEventListener("scroll", et, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(et, 250));
  function mi() {
    he.length > 0;
    const e = o("addMovementBtn"), t = o("addRestBtn");
    e && (e.innerHTML = Vt + "<span>Add movement</span>"), t && (t.innerHTML = Vt + "<span>Add rest</span>");
    const n = o("addVideoBtn");
    n && (n.innerHTML = Vt + "<span>Add video</span>");
  }
  function Zt() {
    const e = o("useGlobalTiming").checked, t = o("addMovementDuration"), n = o("addMovementUnit");
    t.disabled = e, n.disabled = e, t.parentElement.style.opacity = e ? ".38" : "1", o("globalTimingValue").textContent = "Use global timing · " + ce(P.value);
    const i = o("useGlobalRestTiming").checked, a = o("addRestDuration"), r = o("addRestUnit");
    a.disabled = i, r.disabled = i, a.parentElement.style.opacity = i ? ".38" : "1", o("globalRestTimingValue").textContent = "Use global timing · " + ce(D.value);
  }
  let Ra = "movement";
  function dr(e) {
    Ra = e;
    const t = o("movementFields"), n = o("restFields");
    t.hidden = e !== "movement", n.hidden = e !== "rest", o("movementCreatorHeading").textContent = "Add movement", o("movementCreator").setAttribute("aria-label", "Create movement"), Zt();
  }
  function gi() {
    R[F];
    const e = X ? !0 : o("useGlobalTiming").checked, t = e ? Number(P.value) : bn(
      o("addMovementDuration").value,
      o("addMovementUnit").value
    ), n = X ? !0 : o("useGlobalRestTiming").checked, i = n ? Number(D.value) : bn(
      o("addRestDuration").value,
      o("addRestUnit").value
    );
    if (Ra === "rest") {
      const a = o("addRestTitle").value.trim() || "Rest", r = o("addRestGroup").value.trim() || "Rest";
      he.push({
        id: "rest-" + Date.now(),
        name: a,
        group: r,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: n,
        duration: Math.max(5, i || Number(D.value))
      }), _(), o("movementCreator").hidden = !0, o("addRestTitle").value = "Rest", o("addRestGroup").value = "Rest", j("Rest added"), X && (st("movements"), _e());
    } else {
      const a = o("addMovementInput").value.trim();
      if (!a) return;
      const r = o("addMovementGroup").value.trim() || "Movement";
      he.push({
        id: "movement-" + Date.now(),
        name: a,
        group: r,
        kind: "work",
        hidden: !1,
        useGlobalTiming: e,
        duration: Math.max(5, t || Number(P.value))
      }), o("addMovementInput").value = "", o("addMovementGroup").value = "", _(), o("movementCreator").hidden = !0, j("Movement added"), X && (st("movements"), _e());
    }
    mi();
  }
  let vi = null;
  function j(e, t) {
    const n = o("toast");
    n.innerHTML = "";
    const i = document.createElement("span");
    if (i.textContent = e, n.appendChild(i), t) {
      const a = document.createElement("button");
      a.type = "button", a.className = "toastAction", a.textContent = t.label, a.addEventListener("click", () => {
        t.run(), n.classList.remove("show", "withAction"), clearTimeout(vi);
      }), n.appendChild(a);
    }
    n.classList.toggle("withAction", !!t), n.classList.add("show"), clearTimeout(vi), vi = setTimeout(() => n.classList.remove("show", "withAction"), t ? 5e3 : 2200);
  }
  const lr = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], cr = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function Aa(e) {
    return Math.max(0, Math.min(5, Math.floor(Number(e) / 100 * 6)));
  }
  function ct(e, t) {
    return lr[Aa(t)];
  }
  function pr(e) {
    return cr[Aa(e)];
  }
  function oe(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  function Ge() {
    return { morning: z().morningTime || "08:00", evening: z().eveningTime || "19:00" };
  }
  function pt(e) {
    const [t, n] = String(e).split(":").map(Number);
    return (t || 0) * 60 + (n || 0);
  }
  function ur(e) {
    const t = Ge();
    return e.getHours() * 60 + e.getMinutes() >= pt(t.evening) ? "evening" : "morning";
  }
  function Tn(e, t) {
    return B.checkins.find((n) => n.date === e && n.slot === t);
  }
  function Ln(e) {
    return !!(e && e.mood != null && e.energy != null);
  }
  function Mn() {
    const e = /* @__PURE__ */ new Date(), t = oe(e), n = ur(e), i = Ge(), a = e.getHours() * 60 + e.getMinutes();
    return n === "morning" && a < pt(i.morning) || Ln(Tn(t, n)) ? null : n;
  }
  const Ve = o("checkinModal"), We = o("checkinTab"), mr = o("checkinBadge"), je = { mood: { input: o("moodInput"), fill: o("moodFill") }, energy: { input: o("energyLevelInput"), fill: o("energyLevelFill") } };
  function Na(e) {
    const { input: t, fill: n } = je[e];
    n.style.width = t.value + "%", t.setAttribute("aria-valuetext", ct(e, t.value));
  }
  Object.keys(je).forEach((e) => je[e].input.addEventListener("input", () => Na(e)));
  let Ne = null;
  function Fa() {
    const e = Ge(), t = /* @__PURE__ */ new Date(), n = t.getHours() * 60 + t.getMinutes();
    return n < pt(e.morning) ? "Next check-in at " + e.morning : n < pt(e.evening) ? "Next check-in at " + e.evening : "Next check-in tomorrow at " + e.morning;
  }
  function gr() {
    const e = Ge(), t = /* @__PURE__ */ new Date(), n = t.getHours() * 60 + t.getMinutes(), i = (a, r) => {
      const [s, d] = a.split(":").map(Number);
      return new Date(t.getFullYear(), t.getMonth(), t.getDate() + (r ? 1 : 0), s, d);
    };
    return n < pt(e.morning) ? { date: i(e.morning), time: e.morning } : n < pt(e.evening) ? { date: i(e.evening), time: e.evening } : { date: i(e.morning, !0), time: e.morning };
  }
  let hi = null, fi = null;
  function Ba() {
    if (Mn()) {
      En(), tt();
      return;
    }
    const e = gr(), t = Math.max(0, Math.round((e.date - Date.now()) / 1e3)), n = Math.floor(t / 3600), i = Math.floor(t % 3600 / 60), a = t % 60;
    o("peekCountdown").textContent = n + ":" + String(i).padStart(2, "0") + ":" + String(a).padStart(2, "0"), o("peekAt").textContent = "Available at " + e.time;
  }
  function vr() {
    Ba(), We.classList.add("peek"), clearInterval(fi), fi = setInterval(Ba, 1e3), clearTimeout(hi), hi = setTimeout(En, 6e3);
  }
  function En() {
    We.classList.remove("peek"), clearInterval(fi), clearTimeout(hi);
  }
  function Ia() {
    const e = Mn();
    if (!e) {
      We.classList.contains("peek") ? En() : vr();
      return;
    }
    Ne = { date: oe(/* @__PURE__ */ new Date()), slot: e };
    const n = Tn(Ne.date, e), i = B.checkins.find((a) => Ln(a));
    Object.keys(je).forEach((a) => {
      je[a].input.value = (n == null ? void 0 : n[a]) ?? (i == null ? void 0 : i[a]) ?? 50, Na(a);
    }), o("checkinTitle").textContent = e === "morning" ? "Morning check-in" : "Evening check-in", Ve.classList.add("open"), Ve.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => je.mood.input.focus());
  }
  function Kt() {
    Ve.classList.remove("open"), Ve.setAttribute("aria-hidden", "true"), Ne && (Xt = Ne.date + "-" + Ne.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", Xt);
    } catch {
    }
    Ne = null, tt();
  }
  function hr() {
    if (!Ne) return;
    if (Ln(Tn(Ne.date, Ne.slot))) {
      Kt();
      return;
    }
    const { date: e, slot: t } = Ne;
    let n = Tn(e, t);
    n || (n = { date: e, slot: t }, B.checkins.unshift(n), B.checkins = B.checkins.slice(0, 2e3)), n.mood = Number(je.mood.input.value), n.energy = Number(je.energy.input.value), n.scale = 100, n.at = (/* @__PURE__ */ new Date()).toISOString(), Re(), w.fire("checkin", { slot: t, mood: n.mood, energy: n.energy, mood_label: ct("mood", n.mood), energy_label: ct("energy", n.energy) }), j((t === "morning" ? "Morning" : "Evening") + " check-in saved"), Kt(), Rn(), Jt(), rt(), qe();
  }
  let Xt = "";
  try {
    Xt = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function tt() {
    const e = Mn();
    mr.hidden = !e, We.hidden = !e, e || En(), We.classList.toggle("due", !!e), We.setAttribute("aria-label", e ? (e === "morning" ? "Morning" : "Evening") + " check-in is due" : Fa()), We.title = e ? "Check in now" : Fa();
  }
  function bi() {
    tt();
    const e = Mn();
    !e || Ve.classList.contains("open") || z().checkinAutoOpen !== !1 && (!dt.home.classList.contains("active") || ue.classList.contains("open") || Xt !== oe(/* @__PURE__ */ new Date()) + "-" + e && Ia());
  }
  We.addEventListener("click", Ia), o("checkinLater").addEventListener("click", Kt), o("checkinSave").addEventListener("click", hr), Ve.addEventListener("click", (e) => {
    e.target === Ve && Kt();
  }), Ve.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), Kt());
  }), setInterval(bi, 3e4);
  function Rn() {
    const e = oe(/* @__PURE__ */ new Date()), t = (n) => B.checkins.find((i) => i.date === e && i[n] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([n, i]) => {
      const a = t(n);
      o(i).textContent = a ? ct(n, a[n]) : "—";
    });
  }
  function Jt() {
    const e = o("feelCard");
    if (!e) return;
    const t = /* @__PURE__ */ new Date(), n = new Date(t.getFullYear(), t.getMonth(), t.getDate() - (t.getDay() + 6) % 7), i = [...Array(7)].map((u, l) => {
      const p = new Date(n.getFullYear(), n.getMonth(), n.getDate() + l), b = oe(p), E = B.checkins.filter((g) => g.date === b), h = (g) => {
        const v = E.map((C) => C[g]).filter((C) => C != null);
        return v.length ? v.reduce((C, $) => C + $, 0) / v.length : null;
      };
      return { d: p, key: b, mood: h("mood"), energy: h("energy"), count: E.filter(Ln).length, future: p > t && b !== oe(t) };
    }), a = (u) => {
      const l = i.map((p) => p[u]).filter((p) => p != null);
      return l.length ? l.reduce((p, b) => p + b, 0) / l.length : null;
    }, r = a("mood"), s = a("energy"), d = (u, l) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + u + "</span><span>" + (l == null ? "—" : M(ct("", l))) + '</span></div><div class="feelTrack"><span style="width:' + (l == null ? 0 : Math.max(4, l)) + "%;background:" + (l == null ? "transparent" : pr(l)) + '"></span></div></div>', m = i.filter((u) => u.mood != null && u.energy != null).sort((u, l) => l.mood + l.energy - (u.mood + u.energy))[0];
    e.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (r == null ? "No check-ins yet" : M(ct("", (r + s) / 2))) + '</div><div class="weekCopy">' + (r == null ? "Your first check-in will appear here." : "on average this week" + (m ? " · best day " + M(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(m.d)) : "")) + '</div></div></div><div class="feelDays">' + i.map(
      (u) => '<div class="weekChip feelDay' + (u.future ? " future" : "") + (u.key === oe(t) ? " today" : "") + '"><div class="weekChipTop"><strong>' + M(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(u.d)) + "</strong>" + (u.count >= 2 ? '<span class="weekTick">' + Ie("check") + "</span>" : '<span class="feelDots">' + "●".repeat(u.count) + "</span>") + "</div>" + d("Mood", u.mood) + d("Energy", u.energy) + "</div>"
    ).join("") + "</div>";
  }
  const An = o("upcomingCountSetting");
  An.addEventListener("change", () => {
    lt = An.value === "all" ? "all" : Number(An.value), Za();
  });
  const $t = o("tempoRevealBtn"), xi = o("tempoExperiment"), Fe = o("tempoQuad"), ut = o("tempoDot"), fr = o("tempoEstimate"), br = o("tempoReadout");
  let mt = { x: 0.5, y: 0.5 }, Qt = !1, Nn = { total: 20, work: 45, rest: 15 };
  function wi(e, t, n, i) {
    const a = Math.max(t, Math.min(n, e));
    return Math.round((a - t) / i) * i + t;
  }
  function xr(e, t) {
    const n = (e - 0.5) * 2, i = (t - 0.5) * 2, a = wi(
      Nn.total + n * 5 + i * 8,
      Number(G.min),
      Number(G.max),
      Number(G.step)
    ), r = wi(
      Nn.work + n * 10 + i * 8,
      Number(P.min),
      Number(P.max),
      Number(P.step)
    ), s = wi(
      Nn.rest + n * 6 + i * 6,
      Number(D.min),
      Number(D.max),
      Number(D.step)
    );
    return G.value = a, P.value = r, D.value = s, na.textContent = r + " sec", ia.textContent = s + " sec", fn(), { total: a, work: r, rest: s };
  }
  function yi(e, t) {
    const n = e < 0.34 ? "Low" : e > 0.66 ? "Hard" : "Medium", i = t < 0.34 ? "Fast" : t > 0.66 ? "Slow" : "Balanced", a = xr(e, t);
    br.textContent = n + " + " + i, fr.textContent = a.total + " min", Fe.setAttribute("aria-valuetext", n + " and " + i + ", estimated " + a.total + " minutes");
  }
  function ki(e) {
    const t = Fe.getBoundingClientRect(), n = Math.max(0, Math.min(1, (e.clientX - t.left) / t.width)), i = Math.max(0, Math.min(1, (e.clientY - t.top) / t.height));
    mt = { x: n, y: i }, ut.style.left = n * 100 + "%", ut.style.top = i * 100 + "%", yi(n, i);
  }
  $t.addEventListener("click", () => {
    const e = xi.hidden;
    xi.hidden = !e, $t.setAttribute("aria-expanded", e ? "true" : "false"), $t.textContent = e ? "Now close this" : "Don’t try this!", e && (Nn = {
      total: Number(G.value),
      work: Number(P.value),
      rest: Number(D.value)
    }, mt = { x: 0.5, y: 0.5 }, ut.style.left = "50%", ut.style.top = "50%", yi(mt.x, mt.y));
  }), x.querySelectorAll("[data-feedback-rating]").forEach((e) => e.addEventListener("click", () => {
    Number(e.dataset.feedbackRating), x.querySelectorAll("[data-feedback-rating]").forEach((t) => t.classList.toggle("selected", t === e));
  }));
  const Fn = o("testingFeedbackForm"), Pa = o("testingFeedbackThanks"), wr = o("testingFeedbackAgain");
  Fn.addEventListener("submit", (e) => {
    e.preventDefault(), Fn.hidden = !0, Pa.hidden = !1, j("Feedback captured for prototype");
  }), wr.addEventListener("click", (e) => {
    e.preventDefault(), Fn.reset(), x.querySelectorAll("[data-feedback-rating]").forEach((t) => t.classList.remove("selected")), Pa.hidden = !0, Fn.hidden = !1;
  }), Fe.addEventListener("pointerdown", (e) => {
    var t;
    Qt = !0, ki(e);
    try {
      (t = Fe.setPointerCapture) == null || t.call(Fe, e.pointerId);
    } catch {
    }
  }), Fe.addEventListener("pointermove", (e) => {
    Qt && ki(e);
  }), Fe.addEventListener("pointerup", (e) => {
    Qt && (Qt = !1, ki(e), _());
  }), Fe.addEventListener("pointercancel", () => Qt = !1), Fe.addEventListener("keydown", (e) => {
    let { x: t, y: n } = mt, i = !0;
    e.key === "ArrowLeft" ? t -= 0.05 : e.key === "ArrowRight" ? t += 0.05 : e.key === "ArrowUp" ? n -= 0.05 : e.key === "ArrowDown" ? n += 0.05 : i = !1, i && (e.preventDefault(), t = Math.max(0, Math.min(1, t)), n = Math.max(0, Math.min(1, n)), mt = { x: t, y: n }, ut.style.left = t * 100 + "%", ut.style.top = n * 100 + "%", yi(t, n), _());
  });
  const ue = o("workoutModal");
  let en = null;
  function gt(e) {
    return e.map((t) => ({ ...t }));
  }
  function yr() {
    const e = R[F];
    return {
      key: F,
      profile: e ? JSON.parse(JSON.stringify(e)) : null,
      warmup: gt(Ce),
      strength: gt(he),
      cooldown: gt(Se),
      total: Number(G.value),
      work: Number(P.value),
      rest: Number(D.value),
      rounds: Number(Me.value) || 1
    };
  }
  function Ha(e = !1) {
    X = !!e, fe = null, Te = null, be(), Ma(), en = yr(), o("moveEditorTitle").textContent = X ? "Create new move" : "Edit move", o("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", o("moveEditorSubtitle").hidden = !X, o("warmupRow").hidden = X, o("deleteMoveOpen").hidden = X;
    const t = o("createMoveOptions");
    t.hidden = !X;
    {
      const n = R[F];
      o("includeWarmupPreset").checked = !!(n != null && n.includeWarmup), o("includeCooldownPreset").checked = !!(n != null && n.includeCooldown);
    }
    if (Da(), X) {
      o("useGlobalTiming").checked = !0, o("useGlobalRestTiming").checked = !0;
      const n = R[F];
      ii((n == null ? void 0 : n.preset) || "movement", !1);
    }
    o("movementCreator").hidden = !0, dr("movement"), mi(), Zt(), xi.hidden = !0, $t.setAttribute("aria-expanded", "false"), $t.textContent = "Don’t try this!", ue.classList.toggle("createMode", X), ue.querySelector(".modal").classList.toggle("createMode", X), ue.classList.add("open"), ue.setAttribute("aria-hidden", "false"), et(), X && zo();
  }
  function kr() {
    const e = R[F];
    return e != null && e.customSequence ? !!e.includeWarmup : !(e != null && e.warmupOff);
  }
  function Da() {
    const e = kr(), t = o("warmupSwitch");
    t.classList.toggle("on", e), t.setAttribute("aria-checked", String(e));
  }
  o("warmupSwitch").addEventListener("click", () => {
    const e = R[F];
    e && (e.customSequence ? (o("includeWarmupPreset").checked = !e.includeWarmup, ai()) : (e.warmupOff = !e.warmupOff, _()), Da());
  });
  function Bn() {
    be(), Ma(), Ea(), Te = null, fe = null, ue.classList.contains("createMode") && qo(), ue.classList.remove("createMode"), ue.querySelector(".modal").classList.remove("createMode"), ue.classList.remove("open"), ue.setAttribute("aria-hidden", "true");
  }
  function za() {
    if (!en) return;
    const e = en;
    e.profile && (R[e.key] = JSON.parse(JSON.stringify(e.profile))), F = e.key, Ce = gt(e.warmup), he = gt(e.strength), Se = gt(e.cooldown), G.value = e.total, P.value = e.work, D.value = e.rest, Me.value = e.rounds || 1;
    const t = R[F];
    if (t) {
      x.querySelectorAll(".workoutPanel[data-workout]").forEach((i) => i.classList.toggle("active", i.dataset.workout === F));
      const n = x.querySelector(".workoutPanel.active");
      if (n) {
        const i = n.querySelector(".workoutName");
        i && (i.textContent = t.name);
        const a = n.querySelector(".panelCollapsedText");
        a && (a.textContent = t.name);
        const r = n.querySelector(".sourceTag");
        r && (r.textContent = t.source);
      }
      N.value = t.name;
    }
    _();
  }
  o("cancelWorkoutEdit").addEventListener("click", () => {
    if (X) {
      const e = F;
      delete R[e], X = !1, $e = null, Ae(B.order.find((t) => R[t]) || Object.keys(R)[0]);
    } else
      za();
    Bn();
  }), o("saveWorkoutEdit").addEventListener("click", () => {
    be(), J && Sn();
    const e = R[F], t = N.value.trim() || "New move";
    if (e && (e.name = t), wn(), fe = null, _(), X && e)
      ti(F, e), x.querySelectorAll(".workoutPanel[data-workout]").forEach((n) => n.classList.toggle("active", n.dataset.workout === F)), X = !1, $e = null, B.order.includes(F) || B.order.push(F), j("Move created");
    else {
      const n = x.querySelector(".workoutPanel.active");
      if (n) {
        const i = n.querySelector(".workoutName");
        i && (i.textContent = t);
        const a = n.querySelector(".panelCollapsedText");
        a && (a.textContent = t);
      }
      j("Move saved");
    }
    en = null, Bn(), Re();
  }), ue.addEventListener("click", (e) => {
    if (e.target === ue) {
      if (X) {
        const t = F;
        delete R[t], X = !1, $e = null, Ae(B.order.find((n) => R[n]) || Object.keys(R)[0]);
      } else
        za();
      Bn();
    }
  }), li(o("addMovementBtn"), "movement"), li(o("addRestBtn"), "rest"), li(o("addVideoBtn"), "video"), o("closeMovementCreator").addEventListener("click", () => {
    o("movementCreator").hidden = !0;
  }), o("useGlobalTiming").addEventListener("change", Zt), o("useGlobalRestTiming").addEventListener("change", Zt), x.querySelectorAll(".createPresetBtn").forEach((e) => e.addEventListener("click", () => {
    ii(e.dataset.movePreset, !0), _();
  })), o("includeWarmupPreset").addEventListener("change", ai), o("includeCooldownPreset").addEventListener("change", ai), o("includeWarmupPreset").addEventListener("change", _e), o("includeCooldownPreset").addEventListener("change", _e), N.addEventListener("input", _e), N.addEventListener("input", pi), o("confirmAddMovement").addEventListener("click", gi), o("confirmAddRest").addEventListener("click", gi), o("addMovementInput").addEventListener("keydown", (e) => {
    e.key === "Enter" && gi();
  });
  const tn = o("countdown"), Ci = o("countNum"), Pe = o("countdownPixelCanvas");
  let nn = null, Si = "appear";
  class Cr {
    constructor(t, n, i, a, r, s, d) {
      this.width = t.width, this.height = t.height, this.ctx = n, this.x = i, this.y = a, this.color = r, this.speed = (Math.random() * 0.8 + 0.1) * s, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = d, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let Ti = [], qa = 1, _a = 1;
  function nt() {
    const e = parseFloat(getComputedStyle(o("app")).zoom);
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  function Sr() {
    var u;
    if (!Pe) return;
    const e = nt(), t = Math.max(1, window.innerWidth / e), n = Math.max(1, window.innerHeight / e);
    qa = t, _a = n;
    const i = Math.min(window.devicePixelRatio || 1, 2);
    Pe.width = Math.floor(t * i), Pe.height = Math.floor(n * i), Pe.style.width = t + "px", Pe.style.height = n + "px";
    const a = Pe.getContext("2d");
    a.setTransform(i, 0, 0, i, 0, 0);
    const r = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], s = 12, d = (u = window.matchMedia) == null ? void 0 : u.call(window, "(prefers-reduced-motion: reduce)").matches, m = d ? 0 : 0.055;
    Ti = [];
    for (let l = 0; l < t; l += s)
      for (let p = 0; p < n; p += s) {
        const b = l - t / 2, E = p - n / 2, h = Math.sqrt(b * b + E * E), g = d ? 0 : Math.random() * 75 + h * 0.05, v = new Cr({ width: t, height: n }, a, l, p, r[Math.floor(Math.random() * r.length)], m, g);
        v.maxSizeInteger = 4, v.maxSize = Math.random() * 3.2 + 0.8, v.sizeStep = 0.35 + Math.random() * 0.45, Ti.push(v);
      }
  }
  function Oa(e) {
    cancelAnimationFrame(nn), Si = e;
    const t = Pe == null ? void 0 : Pe.getContext("2d");
    if (!t) return;
    function n() {
      t.clearRect(0, 0, qa, _a);
      let i = !0;
      Ti.forEach((a) => {
        a[Si](), a.isIdle || (i = !1);
      }), Si === "disappear" && i || (nn = requestAnimationFrame(n));
    }
    nn = requestAnimationFrame(n);
  }
  function In() {
    cancelAnimationFrame(nn), Sr(), Oa("appear"), setTimeout(() => Oa("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    tn.classList.contains("active") && In();
  });
  const an = o("pixelTrailCanvas"), vt = an.getContext("2d");
  let He = !0, ht = 0.7, ft = 600, on = [], bt = null, Ye = { x: 0, y: 0, ready: !1 };
  function Ga() {
    const e = U.getBoundingClientRect(), t = nt(), n = Math.min(window.devicePixelRatio || 1, 2), i = Math.max(1, e.width / t), a = Math.max(1, e.height / t);
    an.width = Math.max(1, Math.floor(i * n)), an.height = Math.max(1, Math.floor(a * n)), an.style.width = i + "px", an.style.height = a + "px", vt.setTransform(n, 0, 0, n, 0, 0);
  }
  function Tr(e, t) {
    if (!He) return;
    const n = performance.now();
    Ye.ready || (Ye = { x: e, y: t, ready: !0 });
    const i = 7;
    for (let a = 1; a <= i; a++) {
      const r = a / i;
      on.push({
        x: Ye.x + (e - Ye.x) * r,
        y: Ye.y + (t - Ye.y) * r,
        born: n - (i - a) * 10
      });
    }
    Ye = { x: e, y: t, ready: !0 };
  }
  function Pn(e) {
    if (bt = null, !Z) return;
    if (!dt.workout.classList.contains("active")) {
      bt = requestAnimationFrame(Pn);
      return;
    }
    const t = U.getBoundingClientRect(), n = nt();
    vt.clearRect(0, 0, t.width / n, t.height / n), He && (on = on.filter((a) => e - a.born < ft), vt.fillStyle = o("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", on.forEach((a) => {
      const r = (e - a.born) / ft, s = (1 - r) * ht, d = Math.round(a.x / 14) * 14, m = Math.round(a.y / 14) * 14;
      vt.globalAlpha = Math.max(0, s);
      const u = 2 + 5 * (1 - r) * ht;
      vt.fillRect(d - u / 2, m - u / 2, u, u);
    }), vt.globalAlpha = 1), bt = requestAnimationFrame(Pn);
  }
  U.addEventListener("pointermove", (e) => {
    const t = U.getBoundingClientRect(), n = nt();
    Tr((e.clientX - t.left) / n, (e.clientY - t.top) / n);
  }), U.addEventListener("pointerleave", () => Ye.ready = !1), new ResizeObserver(Ga).observe(U), Ga(), bt = requestAnimationFrame(Pn);
  const Ue = o("movementRippleCanvas"), xt = Ue.getContext("2d");
  let it = !0, wt = null, Lr = performance.now();
  function Va() {
    const e = Ue.parentElement.getBoundingClientRect(), t = nt(), n = Math.max(1, e.width / t), i = Math.max(1, e.height / t), a = Math.min(window.devicePixelRatio || 1, 2);
    Ue.width = Math.max(1, Math.floor(n * a)), Ue.height = Math.max(1, Math.floor(i * a)), Ue.style.width = n + "px", Ue.style.height = i + "px", xt.setTransform(a, 0, 0, a, 0, 0);
  }
  function Wa() {
    var e;
    return le || ((e = f[L]) == null ? void 0 : e.kind) === "rest";
  }
  function Mr() {
    const e = f[L];
    return Wa() ? 2200 : e ? e.kind === "warmup" || e.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function Hn(e) {
    if (wt = null, !Z) return;
    if (!dt.workout.classList.contains("active")) {
      wt = requestAnimationFrame(Hn);
      return;
    }
    const t = Ue.parentElement.getBoundingClientRect(), n = nt(), i = Math.max(1, t.width / n), a = Math.max(1, t.height / n);
    if (xt.clearRect(0, 0, i, a), it) {
      const r = Mr(), s = (e - Lr) % r / r, d = 15, m = Math.max(8, Math.round(d * a / Math.max(1, i))), u = i / (d + 1), l = a / (m + 1), p = i * 0.5, b = a * 0.52, E = Math.hypot(p, b), g = o("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let v = 1; v <= m; v++)
        for (let C = 1; C <= d; C++) {
          const $ = C * u, y = v * l, I = Math.hypot($ - p, y - b) / E, W = Wa(), ee = W ? Math.exp(-Math.pow((I - (s * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, q = Math.exp(-Math.pow((I - s * 1.25) * 7, 2)), ae = W ? ee : q, de = W ? 0.5 + 0.5 * Math.sin(s * Math.PI * 2 - I * 3) ** 2 : 0.35 + 0.65 * Math.sin(s * Math.PI * 2 - I * 5) ** 2, K = W ? 1.4 + ae * 4.2 * de : 1.2 + ae * 5 * de;
          xt.beginPath(), xt.arc($, y, K, 0, Math.PI * 2), xt.fillStyle = `rgba(${g},${W ? 0.08 + ae * 0.48 : 0.05 + ae * 0.55})`, xt.fill();
        }
    }
    wt = requestAnimationFrame(Hn);
  }
  new ResizeObserver(Va).observe(Ue.parentElement), Va(), wt = requestAnimationFrame(Hn);
  const rn = o("exerciseTitle"), De = o("exerciseMeta"), Li = o("stepLabel"), Mi = o("digits"), ja = o("fill"), yt = o("progress"), Ei = o("pause"), Er = o("nextName"), Rr = o("nextMeta"), Ar = o("nextIcon"), Dn = o("skipNextSession");
  let xe = null;
  function we(e) {
    for (let t = Math.max(0, e); t < f.length; t++)
      if (!f[t].sessionHidden) return t;
    return -1;
  }
  function Nr() {
    const e = f[L];
    if (!e) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (le) {
      const i = we(L + 1), a = i >= 0 ? f[i] : null;
      return a ? { name: a.name, meta: Ai(a), icon: Ri(a) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (e.rest > 0) return { name: "Rest", meta: e.rest + " sec · " + (e.roundBreakAfter ? "round " + (e.round + 1) + " next" : "recovery"), icon: "pause" };
    const t = we(L + 1), n = t >= 0 ? f[t] : null;
    return n ? { name: n.name, meta: Ai(n), icon: Ri(n) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function Fr() {
    if (!f[L]) return f.length;
    const t = we(L + 1);
    return t < 0 ? f.length : t + 1;
  }
  function Ri(e) {
    return e.kind === "video" ? "play" : "clock";
  }
  function Ai(e) {
    return e.kind === "video" ? "YouTube · " + Ot(e.duration) : e.group + " · " + e.duration + " sec";
  }
  function zn() {
    return f.length && f[f.length - 1].round || 1;
  }
  function Ya(e) {
    const t = f[e];
    if (!t) return "";
    const n = zn();
    if (n <= 1) return "Step " + (e + 1) + " of " + f.length;
    if (t.roundBreak) return "Round " + t.round + " of " + n + " · Rest";
    const i = f.filter((a) => a.round === t.round && !a.roundBreak).length;
    return "Round " + t.round + " of " + n + " · Step " + (t.roundIndex + 1) + " of " + i;
  }
  function Ua() {
    return yt.querySelector('[data-step="' + L + '"]');
  }
  function Br() {
    f[L] && Number(yt.dataset.round) !== (f[L].round || 1) && Bi(), [...yt.children].forEach((e) => {
      const t = Number(e.dataset.step);
      e.classList.toggle("done", t < L), e.classList.toggle("active", t === L), e.classList.toggle("rewindable", t <= L), e.disabled = t > L, t === L && e.style.setProperty("--segment-progress", "0%");
    }), f[L] && (Li.textContent = Ya(L), ot());
  }
  function Ir(e) {
    const t = f.indexOf(e);
    t < 0 || t <= L || (e.sessionHidden = !e.sessionHidden, at(), j((e.sessionHidden ? "Hidden " : "Included ") + e.name + " for this session"));
  }
  function Za() {
    const e = o("upcomingList");
    if (!e) return;
    e.innerHTML = "";
    const t = Fr(), n = f.slice(t);
    (lt === "all" ? n : n.slice(0, Math.max(1, Number(lt) || 1))).forEach((a) => {
      const r = document.createElement("section");
      r.className = "upcomingCard" + (a.sessionHidden ? " sessionHidden" : "") + (qi(a) ? " noMeta" : ""), r.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + Ie(Ri(a)) + '</div><div><div class="upcomingName">' + M(a.name) + '</div><div class="upcomingMeta">' + M(Ai(a)) + (zn() > 1 ? " · round " + a.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (a.sessionHidden ? "Include this session" : "Skip this session") + "</button>", r.querySelector(".skipSessionBtn").addEventListener("click", () => Ir(a)), e.appendChild(r);
    });
  }
  function at() {
    var t;
    const e = Nr();
    Er.textContent = e.name, Rr.textContent = e.meta, Ar.innerHTML = Ie(e.icon);
    {
      const n = le ? f[we(L + 1)] : ((t = f[L]) == null ? void 0 : t.rest) > 0 ? { kind: "rest" } : f[we(L + 1)];
      x.querySelector(".nextCard").classList.toggle("noMeta", !!(n && qi(n)));
    }
    if (xe = null, le) {
      const n = we(L + 1);
      n >= 0 && (xe = f[n]);
    } else {
      const n = f[L];
      if (n && n.rest > 0)
        xe = null;
      else {
        const i = we(L + 1);
        i >= 0 && (xe = f[i]);
      }
    }
    Dn && (Dn.hidden = !xe, Dn.textContent = xe != null && xe.sessionHidden ? "Include this session" : "Skip this session"), Za();
  }
  Dn.addEventListener("click", () => {
    xe && (xe.sessionHidden = !xe.sessionHidden, j((xe.sessionHidden ? "Hidden " : "Included ") + xe.name + " for this session"), at());
  });
  let Be = null, Ni = null;
  function sn(e, t = {}) {
    const n = R[F];
    w.fire(e, { move: (n == null ? void 0 : n.name) || "", move_id: F, ...t });
  }
  function Pr() {
    const e = R[F];
    Be = { key: F, name: (e == null ? void 0 : e.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(Ni), Ni = setInterval(() => {
      Be && !Ee && Be.active++;
    }, 1e3), sn("started", { steps: f.length });
  }
  function Ka(e) {
    if (clearInterval(Ni), !Be) return;
    const t = Be;
    Be = null, sn(e ? "completed" : "ended", { seconds: t.active }), !(t.active < 30) && (B.history.unshift({ id: "h-" + t.startedAt, move_id: t.key, name: t.name, start: new Date(t.startedAt).toISOString(), seconds: t.active, completed: e }), B.history = B.history.slice(0, 1e3), Re(), rt(), qe());
  }
  function Hr() {
    Qn("workout"), Dr();
    const e = we(0);
    e >= 0 && f[e].kind === "video" && eo(f[e]);
  }
  function Fi() {
    _n(), Ka(!1), clearInterval(Q), clearInterval(vn), le = !1, ze(!1), o("app").classList.remove("resting"), tn.classList.remove("active"), Qn("home");
  }
  function Dr() {
    tn.classList.add("active");
    let e = 5;
    Ci.textContent = e, requestAnimationFrame(In), clearInterval(vn), vn = setInterval(() => {
      e--, e > 0 ? (Ci.textContent = e, In()) : (clearInterval(vn), Ci.textContent = "GO", In(), setTimeout(() => {
        tn.classList.remove("active"), cancelAnimationFrame(nn), qr();
      }, 650));
    }, 1e3);
  }
  function Bi() {
    var t;
    yt.innerHTML = "";
    const e = ((t = f[Math.max(0, L)] || f[0]) == null ? void 0 : t.round) || 1;
    yt.dataset.round = e, f.forEach((n, i) => {
      if ((n.round || 1) !== e) return;
      const a = document.createElement("button");
      a.dataset.step = i, a.type = "button", a.className = "progressSegment", a.setAttribute("aria-label", "Go to " + n.name), a.addEventListener("click", () => {
        i <= L && zr(i);
      }), yt.appendChild(a);
    });
  }
  function ze(e) {
    e = !!e;
    const t = Ee !== e;
    if (Ee = e, Ei.textContent = e ? "Resume" : "Pause", o("app").classList.toggle("paused", e), me && V)
      try {
        e ? V.pauseVideo() : V.playVideo();
      } catch {
      }
    t && Be && sn(e ? "paused" : "resumed");
  }
  function zr(e) {
    e < 0 || e >= f.length || e > L || (clearInterval(Q), le = !1, o("app").classList.remove("resting"), L = e, ze(!1), Mt(), Q = setInterval(Ze, 1e3));
  }
  function qr() {
    if (L = we(0), ze(!1), Bi(), L < 0) {
      rn.textContent = "No activities", De.textContent = "Open Edit and enable or add a movement", De.hidden = !1;
      return;
    }
    Pr(), Mt(), clearInterval(Q), Q = setInterval(Ze, 1e3);
  }
  const Xa = o("videoStage"), kt = o("videoSound"), _r = 0, Ct = 1, Or = 2;
  let Ja = 0, St = null, Tt = null, V = null, Lt = null, qn = 0, Ii = !1, me = null, Pi = null;
  function $a() {
    var e;
    return (e = window.YT) != null && e.Player ? Promise.resolve(window.YT) : St || (St = new Promise((t, n) => {
      const i = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          i == null || i();
        } catch {
        }
      };
      const a = setInterval(() => {
        var s;
        (s = window.YT) != null && s.Player && (clearInterval(a), clearTimeout(r), t(window.YT));
      }, 100), r = setTimeout(() => {
        clearInterval(a), St = null, n(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const s = document.createElement("script");
        s.src = "https://www.youtube.com/iframe_api", s.async = !0, s.onerror = () => {
          clearInterval(a), clearTimeout(r), St = null, n(new Error("YouTube did not load"));
        }, document.head.appendChild(s);
      }
    }), St);
  }
  function Qa() {
    return Tt || (Tt = $a().then((e) => new Promise((t) => {
      const n = document.createElement("div");
      o("videoFrame").appendChild(n), V = new e.Player(n, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => t(V), onStateChange: (i) => Vr(i.data), onError: (i) => Wr(i.data) }
      });
    })), Tt.catch(() => {
      Tt = null;
    }), Tt);
  }
  function eo(e) {
    !(e != null && e.videoId) || e.videoError || Qa().then((t) => {
      me || Lt === e.videoId || (Lt = e.videoId, qn = Number(e.start) || 0, Ii = !1, t.mute(), t.loadVideoById({ videoId: e.videoId, startSeconds: qn }));
    }).catch(() => {
    });
  }
  function Gr() {
    const e = we(L + 1);
    e >= 0 && f[e].kind === "video" && eo(f[e]);
  }
  function Vr(e) {
    if (!me) {
      e === Ct && !Ii && (Ii = !0, V.pauseVideo(), V.seekTo(qn, !0));
      return;
    }
    Xa.classList.toggle("playing", e === Ct), f[L] === me && performance.now() > Ja && (e === Ct && Ee ? ze(!1) : e === Or && !Ee && ze(!0)), e === Ct && io(me.videoId, V.getDuration()) && Re(), e === _r && dn();
  }
  function Wr(e) {
    const t = me;
    if (!t) {
      Lt = null;
      return;
    }
    e === 101 || e === 150 ? (Ur(t.videoId), j("That video can’t play outside YouTube, so it was skipped")) : j("The video couldn’t play, so it was skipped"), dn();
  }
  function jr(e) {
    if (o("app").classList.add("videoStep"), kt.hidden = !0, me = e, clearTimeout(Pi), !e.videoId) {
      j("This video step has no link yet, so it was skipped"), setTimeout(() => dn(), 0);
      return;
    }
    Qa().then((t) => {
      if (me !== e) return;
      Ja = performance.now() + 1500;
      const n = Number(e.start) || 0;
      Lt !== e.videoId ? (Lt = e.videoId, qn = n, t.loadVideoById({ videoId: e.videoId, startSeconds: n })) : (t.seekTo(n, !0), t.playVideo()), t.unMute(), Ee && t.pauseVideo(), Pi = setTimeout(() => {
        me !== e || Ee || (t.getPlayerState() !== Ct ? (t.mute(), t.playVideo(), kt.hidden = !1) : t.isMuted() && (kt.hidden = !1));
      }, 1600);
    }).catch(() => {
      me === e && (j("YouTube didn’t load, so the video was skipped"), dn());
    });
  }
  function to() {
    if (!o("app").classList.contains("videoStep")) return;
    const e = x.querySelector(".workGrid"), t = x.querySelector(".sessionControlRow"), n = e.getBoundingClientRect().top, i = (t == null ? void 0 : t.offsetHeight) || 42, a = window.innerHeight - n - 16 - i - 84;
    e.style.setProperty("--theater-h", Math.max(240, Math.round(a)) + "px");
  }
  window.addEventListener("resize", to);
  function _n() {
    clearTimeout(Pi);
    const e = me;
    if (me = null, o("app").classList.remove("videoStep"), Xa.classList.remove("playing"), kt.hidden = !0, e && V) {
      try {
        V.pauseVideo();
      } catch {
      }
      Lt = null;
    }
  }
  function dn() {
    const e = me;
    !e || f[L] !== e || (_n(), clearInterval(Q), Et(), Q = setInterval(Ze, 1e3));
  }
  kt.addEventListener("click", () => {
    V && (V.unMute(), V.playVideo()), kt.hidden = !0;
  });
  function Yr(e) {
    var i;
    const t = Number(e.start) || 0;
    if (e.useVideoLength === !1) return t + (Number(e.duration) || 300);
    const n = V && me === e && Number((i = V.getDuration) == null ? void 0 : i.call(V)) || 0;
    return Number(e.end) || n || Number(e.videoDuration) || t + (Number(e.duration) || 300);
  }
  function no(e, t) {
    const n = R[F];
    [Ce, he, Se, n == null ? void 0 : n.warmup, n == null ? void 0 : n.strength, n == null ? void 0 : n.cooldown, n == null ? void 0 : n.sequence].forEach((i) => (Array.isArray(i) ? i : []).forEach((a) => {
      a && a.kind === "video" && a.videoId === e && t(a);
    }));
  }
  function io(e, t) {
    t = Math.round(Number(t) || 0);
    let n = !1;
    return e && t > 0 && no(e, (i) => {
      i.videoDuration !== t && (i.videoDuration = t, n = !0);
    }), n;
  }
  function Ur(e) {
    no(e, (t) => {
      t.videoError = "embed";
    }), Re();
  }
  function Zr(e) {
    const t = e.videoId;
    if (!t) return;
    const n = () => {
      ue.classList.contains("open") ? fe || _() : (_(), Re());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + t)).then((i) => i.ok ? i.json() : Promise.reject(i.status)).then((i) => {
      e.videoId === t && (e.videoTitle = i.title || "", e.autoName && i.title && (e.name = i.title), n());
    }).catch((i) => {
      e.videoId === t && i === 401 && (e.videoError = "embed", n());
    }), Kr(t).then((i) => {
      io(t, i) && n();
    }).catch((i) => {
      i === "embed" && e.videoId === t && (e.videoError = "embed", n());
    });
  }
  function Kr(e) {
    return $a().then((t) => new Promise((n, i) => {
      const a = document.createElement("div");
      a.className = "videoProbe", a.setAttribute("aria-hidden", "true");
      const r = document.createElement("div");
      a.appendChild(r), o("app").appendChild(a);
      let s = null, d = !1;
      const m = (p, b) => {
        d || (d = !0, clearTimeout(u), setTimeout(() => {
          try {
            s == null || s.destroy();
          } catch {
          }
          a.remove();
        }, 0), b ? i(b) : n(p));
      }, u = setTimeout(() => m(0), 2e4), l = () => {
        var b;
        const p = Number((b = s == null ? void 0 : s.getDuration) == null ? void 0 : b.call(s)) || 0;
        return p > 0 && m(p), p > 0;
      };
      s = new t.Player(r, {
        width: 320,
        height: 180,
        videoId: e,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            l() || (s.mute(), s.playVideo());
          },
          onStateChange: () => l(),
          onError: (p) => m(0, p.data === 101 || p.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function Mt() {
    le = !1;
    const e = f[L];
    o("app").classList.toggle("resting", e.kind === "rest"), e.kind === "video" ? jr(e) : _n(), pe = e.duration, _t = e.duration, rn.textContent = e.name, De.textContent = e.group, De.hidden = !0, Li.textContent = Ya(L), Be && sn("step", { name: e.name, group: e.group, kind: e.kind, step: L + 1, of: f.length, round: e.round || 1, rounds: zn(), duration: e.duration }), at(), Br(), Gr(), e.kind === "video" && setTimeout(to, 0);
  }
  function ot() {
    var a;
    const e = ((a = f[L]) == null ? void 0 : a.kind) === "video" && !le, t = e && pe >= 60;
    Mi.textContent = t ? Ot(pe) : pe, Mi.classList.toggle("long", t), e && (o("videoClock").textContent = Ot(pe) + " left");
    const n = pe / _t * 100;
    ja.style.width = n + "%";
    const i = Ua();
    if (i && !le) {
      const r = 100 - n;
      i.style.setProperty("--segment-progress", r + "%");
    }
  }
  function Ze() {
    var t, n;
    if (Ee) return;
    const e = f[L];
    if ((e == null ? void 0 : e.kind) === "video" && !le && me === e) {
      const i = Number((t = V == null ? void 0 : V.getCurrentTime) == null ? void 0 : t.call(V)) || 0, a = Number(e.start) || 0, r = Yr(e);
      _t = Math.max(1, r - a), (i > a || ((n = V == null ? void 0 : V.getPlayerState) == null ? void 0 : n.call(V)) === Ct) && (pe = Math.max(0, Math.ceil(r - i))), ot(), i > a && i >= r - 0.25 && dn();
      return;
    }
    pe--, ot(), pe <= 0 && (e.rest > 0 ? ao(e.rest) : Et());
  }
  function ao(e) {
    var n;
    le = !0, o("app").classList.add("resting");
    const t = Ua();
    t && t.style.setProperty("--segment-progress", "100%"), clearInterval(Q), pe = e, _t = e, Be && sn("rest", { duration: e }), rn.textContent = "Rest", De.textContent = (n = f[L]) != null && n.roundBreakAfter ? "Round " + (f[L].round + 1) + " next" : "Recovery", at(), ot(), Q = setInterval(() => {
      Ee || (pe--, ot(), pe <= 0 && (clearInterval(Q), Et(), Q = setInterval(Ze, 1e3)));
    }, 1e3);
  }
  function Et() {
    le = !1;
    const e = we(L + 1);
    if (e >= 0)
      L = e, Mt();
    else {
      clearInterval(Q), _n(), ze(!1), o("app").classList.remove("resting"), rn.textContent = "Complete", De.textContent = "Move finished", De.hidden = !1, Mi.textContent = "✓";
      {
        const t = zn();
        Li.textContent = t > 1 ? t + " rounds done" : f.filter((n) => !n.roundBreak).length + " steps done";
      }
      Ka(!0);
      {
        const t = vo(7).reduce((n, i) => n + i.minutes, 0);
        De.textContent = "Move finished · " + t + " min in the last 7 days";
      }
      ja.style.width = "100%", at();
    }
  }
  o("skipExercise").addEventListener("click", () => {
    Xr(), ze(!1);
  });
  function Xr() {
    clearInterval(Q);
    const e = f[L];
    if (le) {
      le = !1, o("app").classList.remove("resting");
      const n = we(L + 1);
      n >= 0 ? (L = n, Mt(), Q = setInterval(Ze, 1e3)) : Et();
      return;
    }
    if (e && e.rest > 0) {
      ao(e.rest);
      return;
    }
    const t = we(L + 1);
    t >= 0 ? (L = t, Mt(), Q = setInterval(Ze, 1e3)) : Et();
  }
  o("restartSegment").addEventListener("click", () => {
    if (clearInterval(Q), ze(!1), le) {
      const e = f[L];
      pe = e.rest, _t = e.rest, rn.textContent = "Rest", De.textContent = "Recovery", o("app").classList.add("resting"), at(), ot();
    } else
      Mt();
    Q = setInterval(le ? () => {
      Ee || (pe--, ot(), pe <= 0 && (clearInterval(Q), Et(), Q = setInterval(Ze, 1e3)));
    } : Ze, 1e3);
  });
  function ln(e, t, n, i) {
    let a = 0, r = null, s = !1;
    function d() {
      r && cancelAnimationFrame(r), r = null, a = 0, s = !1, t.style.width = "0%", e.classList.remove("holding");
    }
    function m(p) {
      if (!s) return;
      a || (a = p);
      const b = Math.min(1, (p - a) / n);
      if (t.style.width = b * 100 + "%", b >= 1) {
        s = !1, r && cancelAnimationFrame(r), r = null, t.style.width = "100%", setTimeout(() => t.style.width = "0%", 90), i();
        return;
      }
      r = requestAnimationFrame(m);
    }
    function u(p) {
      var b;
      if (!(p && p.button !== void 0 && p.button !== 0)) {
        p == null || p.preventDefault(), d(), s = !0, e.classList.add("holding");
        try {
          (b = e.setPointerCapture) == null || b.call(e, p.pointerId);
        } catch {
        }
        r = requestAnimationFrame(m);
      }
    }
    function l() {
      s && d();
    }
    e.addEventListener("pointerdown", u), e.addEventListener("pointerup", l), e.addEventListener("pointercancel", l), e.addEventListener("lostpointercapture", l), e.addEventListener("keydown", (p) => {
      (p.key === " " || p.key === "Enter") && !p.repeat && u(p);
    }), e.addEventListener("keyup", (p) => {
      (p.key === " " || p.key === "Enter") && l();
    });
  }
  const Jr = o("endWorkout");
  ln(Jr, o("holdEndFill"), 1500, Fi);
  const Rt = o("deleteMoveConfirm");
  o("deleteMoveOpen").addEventListener("click", () => {
    Rt.classList.add("open"), Rt.setAttribute("aria-hidden", "false");
  }), o("deleteMoveCancel").addEventListener("click", () => {
    Rt.classList.remove("open"), Rt.setAttribute("aria-hidden", "true");
  });
  function $r() {
    const e = F, t = x.querySelector('.workoutPanel[data-workout="' + e + '"]');
    t && t.remove(), delete R[e], B.order = B.order.filter((i) => i !== e);
    let n = x.querySelector(".workoutPanel[data-workout]");
    if (!n) {
      const i = "custom-" + Date.now();
      R[i] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, B.order.push(i), n = ti(i, R[i]);
    }
    Rt.classList.remove("open"), Rt.setAttribute("aria-hidden", "true"), en = null, Bn(), Ae(n.dataset.workout), Re(), j("Move deleted");
  }
  ln(o("deleteMoveYes"), o("deleteMoveFill"), 1500, $r);
  const Hi = x.querySelector(".rubberTabs"), At = o("rubberIndicator");
  function cn(e, t = !0) {
    if (!e || !Hi || !At) return;
    const n = Hi.getBoundingClientRect(), i = e.getBoundingClientRect();
    At.style.transition = t ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const a = nt();
    At.style.left = (i.left - n.left) / a + Hi.scrollLeft + "px", At.style.width = i.width / a + "px", t && (At.style.transform = "scaleX(1.08)", setTimeout(() => At.style.transform = "scaleX(1)", 180));
  }
  x.querySelectorAll(".tab").forEach((e) => e.addEventListener("click", () => {
    e.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), x.querySelectorAll(".tab").forEach((t) => t.classList.remove("active")), x.querySelectorAll(".settingsPane").forEach((t) => t.classList.remove("active")), e.classList.add("active"), o(e.dataset.pane).classList.add("active"), cn(e, !0);
  })), requestAnimationFrame(() => cn(x.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => cn(x.querySelector(".tab.active"), !1));
  const Di = o("pixelTrailToggle"), zi = o("rippleToggle"), Nt = o("trailStrength"), Ft = o("trailLife");
  function ye(e, t) {
    z()[e] = t, Re();
  }
  const oo = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function ro(e) {
    return e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "g:" + String(e.group || "").trim().toLowerCase();
  }
  function qi(e) {
    var t;
    return !!((t = z().hideMeta) != null && t[ro(e)]);
  }
  function Qr() {
    const e = /* @__PURE__ */ new Map(), t = (n, i, a) => {
      if (!n) return;
      Array.isArray(n) && (n = { name: n[1], group: n[2], kind: "work" });
      const r = ro(n);
      let s = e.get(r);
      s || (s = { key: r, label: r === "rest" ? "Rest" : r === "video" ? "Video" : String(n.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, e.set(r, s)), s.kinds.add(r === "rest" ? "Rest" : r === "video" ? "Video" : i), s.moves.add(a), s.count++;
    };
    return Object.values(R).forEach((n) => {
      const i = n.name || "Move";
      (n.warmup || (n.customSequence ? [] : mn)).forEach((a) => t(a, "Warm-up", i)), (n.customSequence ? n.sequence || [] : n.strength || []).forEach((a) => t(a, a.presetRole === "warmup" ? "Warm-up" : a.presetRole === "cooldown" ? "Cooldown" : "Movement", i)), (n.cooldown || (n.customSequence ? [] : gn)).forEach((a) => t(a, "Cooldown", i));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([n, i]) => {
      e.has(n) || e.set(n, { key: n, label: i, kinds: /* @__PURE__ */ new Set([i]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...e.values()].map((n) => ({ ...n, kind: n.kinds.has("Movement") ? "Movement" : [...n.kinds][0], moves: [...n.moves] })).sort((n, i) => oo.indexOf(n.kind) - oo.indexOf(i.kind) || n.label.localeCompare(i.label));
  }
  let _i = "all";
  function Oi() {
    const e = o("metaSearch").value.trim().toLowerCase();
    return Qr().filter((t) => (_i === "all" || t.kind === _i) && (!e || t.label.toLowerCase().includes(e) || t.moves.some((n) => n.toLowerCase().includes(e))));
  }
  function On() {
    const e = o("metaTableBody");
    if (!e) return;
    const t = z().hideMeta || {}, n = Oi();
    e.innerHTML = n.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', n.forEach((a) => {
      const r = !t[a.key], s = a.count ? (a.moves.length > 2 ? a.moves.slice(0, 2).join(", ") + " + " + (a.moves.length - 2) + " more" : a.moves.join(", ")) + " · " + a.count + " step" + (a.count === 1 ? "" : "s") : "Not used yet", d = document.createElement("tr");
      d.className = r ? "" : "off", d.innerHTML = '<td><div class="metaType">' + M(a.label) + '</div><div class="metaSub">' + M(a.kind + " · " + s) + '</div></td><td class="metaKindCol">' + M(a.kind) + '</td><td class="metaUsedCol">' + M(s) + '</td><td class="metaSwitchCol"><button class="switch' + (r ? " on" : "") + '" type="button" role="switch" aria-checked="' + r + '" aria-label="Second line for ' + M(a.label) + ' on phones"></button></td>', d.querySelector(".switch").addEventListener("click", () => Gi([a.key], r)), e.appendChild(d);
    });
    const i = n.filter((a) => t[a.key]).length;
    o("metaCount").textContent = n.length ? n.length + " type" + (n.length === 1 ? "" : "s") + (i ? " · " + i + " hidden on phones" : "") : "";
  }
  function Gi(e, t) {
    const n = { ...z().hideMeta || {} };
    e.forEach((i) => {
      t ? n[i] = !0 : delete n[i];
    }), ye("hideMeta", n), On(), si(), at();
  }
  o("metaSearch").addEventListener("input", On), o("metaKinds").querySelectorAll(".kindChip").forEach((e) => e.addEventListener("click", () => {
    _i = e.dataset.kind, o("metaKinds").querySelectorAll(".kindChip").forEach((t) => t.classList.toggle("active", t === e)), On();
  })), o("metaHideAll").addEventListener("click", () => Gi(Oi().map((e) => e.key), !0)), o("metaShowAll").addEventListener("click", () => Gi(Oi().map((e) => e.key), !1));
  const Ke = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...z().toggles || {} };
  function so() {
    x.querySelectorAll("[data-toggle]").forEach((n) => n.classList.toggle("on", Ke[n.dataset.toggle] !== !1)), x.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([n, i]) => {
      o(i).hidden = Ke[n] === !1;
    });
    const e = ["steps", "mood", "energyLevel"].some((n) => Ke[n] !== !1);
    x.querySelector(".activityCard").hidden = !e, o("weatherCard").hidden = Ke.weather === !1;
    const t = x.querySelector("#homeView .grid");
    t.classList.toggle("noActivity", !e), t.classList.toggle("noWeather", Ke.weather === !1);
  }
  x.querySelectorAll("[data-toggle]").forEach((e) => e.addEventListener("click", () => {
    Ke[e.dataset.toggle] = Ke[e.dataset.toggle] === !1, so(), ye("toggles", { ...Ke });
  })), so();
  function es() {
    Di.classList.toggle("on", He), zi.classList.toggle("on", it), Nt.value = Math.round(ht * 100), o("trailStrengthValue").textContent = Nt.value + "%", Ft.value = ft, o("trailLifeValue").textContent = Ft.value + " ms";
  }
  z().trailEnabled !== void 0 && (He = z().trailEnabled), z().rippleEnabled !== void 0 && (it = z().rippleEnabled), z().trailStrength !== void 0 && (ht = z().trailStrength), z().trailMaxAge !== void 0 && (ft = z().trailMaxAge), es(), Di.addEventListener("click", () => {
    He = !He, Di.classList.toggle("on", He), He || (on = []), ye("trailEnabled", He);
  }), zi.addEventListener("click", () => {
    it = !it, zi.classList.toggle("on", it), ye("rippleEnabled", it);
  }), Nt.addEventListener("input", () => {
    ht = Number(Nt.value) / 100, o("trailStrengthValue").textContent = Nt.value + "%";
  }), Nt.addEventListener("change", () => ye("trailStrength", ht)), Ft.addEventListener("input", () => {
    ft = Number(Ft.value), o("trailLifeValue").textContent = Ft.value + " ms";
  }), Ft.addEventListener("change", () => ye("trailMaxAge", ft)), An.addEventListener("change", () => ye("upcomingCount", lt));
  function lo(e) {
    x.querySelectorAll(".themeBtn").forEach((n) => n.classList.toggle("active", n.dataset.theme === e));
    const t = e === "light";
    o("app").classList.toggle("light", t), w.setLight(t);
  }
  lo(z().theme || "dark"), x.querySelectorAll(".themeBtn").forEach((e) => e.addEventListener("click", () => {
    lo(e.dataset.theme), ye("theme", e.dataset.theme);
  }));
  const re = { steps: null, weather: null, ...z().entities || {} };
  let se = null, Vi = {};
  function ts(e) {
    const t = Object.values(e).filter((d) => d.entity_id.startsWith("sensor.") || d.entity_id.startsWith("input_number.")), n = (d) => d.attributes.friendly_name || d.entity_id, i = t.filter((d) => /step/i.test(d.entity_id) || /step/i.test(n(d)) || ["steps", "step"].includes(String(d.attributes.unit_of_measurement || "").toLowerCase())), a = t.filter((d) => !i.includes(d)), r = (d, m) => n(d).localeCompare(n(m)), s = (d, m) => /health_steps/.test(m.entity_id) - /health_steps/.test(d.entity_id) || r(d, m);
    return { suggested: i.sort(s), rest: a.sort(r), label: n };
  }
  function co(e) {
    const t = o("stepsEntity");
    if (!t || t.matches(":focus")) return;
    const { suggested: n, rest: i, label: a } = ts(e), r = (m) => '<option value="' + M(m.entity_id) + '">' + M(a(m)) + "</option>";
    t.innerHTML = '<option value="">Not connected</option>' + (n.length ? '<optgroup label="Suggested">' + n.map(r).join("") + "</optgroup>" : "") + (i.length ? '<optgroup label="All sensors">' + i.map(r).join("") + "</optgroup>" : ""), t.value = re.steps || "";
    const s = o("stepsStatus"), d = re.steps && e[re.steps];
    s.textContent = d ? "Connected · " + a(d) : s.dataset.empty;
  }
  o("stepsEntity").addEventListener("change", () => {
    re.steps = o("stepsEntity").value || null, ye("entities", { ...re }), Vi = {}, go(), se && (co(se), uo(se));
  });
  function ns(e, t = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: t }).format(e);
  }
  function po() {
    const e = re.steps && (se == null ? void 0 : se[re.steps]), t = Number(e == null ? void 0 : e.state);
    return Number.isFinite(t) ? t : null;
  }
  function uo(e) {
    var i;
    const t = re.steps, n = t ? Number((i = e[t]) == null ? void 0 : i.state) : NaN;
    o("stepsMeta").textContent = t ? Number.isFinite(n) ? ns(n) : "—" : "Set up in Settings";
  }
  let mo = 0;
  async function go() {
    const e = re.steps;
    if (!e || !w.ws) return;
    mo = Date.now();
    const t = /* @__PURE__ */ new Date(), n = new Date(t.getFullYear(), t.getMonth(), t.getDate() - 30);
    try {
      const i = await w.ws({ type: "recorder/statistics_during_period", start_time: n.toISOString(), end_time: t.toISOString(), statistic_ids: [e], period: "day", types: ["max"] }), a = (i == null ? void 0 : i[e]) || [], r = {};
      if (a.forEach((s) => {
        Number.isFinite(s.max) && (r[oe(new Date(s.start))] = s.max);
      }), !Object.keys(r).length) {
        const s = await w.ws({ type: "history/history_during_period", start_time: n.toISOString(), end_time: t.toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((s == null ? void 0 : s[e]) || []).forEach((d) => {
          const m = Number(d.s ?? d.state), u = d.lu ? d.lu * 1e3 : Date.parse(d.last_updated || d.last_changed);
          if (!Number.isFinite(m) || !u) return;
          const l = oe(new Date(u));
          r[l] = Math.max(r[l] || 0, m);
        });
      }
      Vi = r, qe();
    } catch {
    }
  }
  function rt() {
    qe();
  }
  rt(), setInterval(() => {
    rt(), Jt(), tt();
  }, 10 * 60 * 1e3);
  function vo(e) {
    const t = {}, n = {};
    B.history.forEach((s) => {
      const d = oe(new Date(s.start));
      t[d] = (t[d] || 0) + (s.seconds || 0) / 60, n[d] = (n[d] || 0) + 1;
    });
    const i = /* @__PURE__ */ new Date(), a = oe(i), r = [];
    for (let s = e - 1; s >= 0; s--) {
      const d = new Date(i.getFullYear(), i.getMonth(), i.getDate() - s), m = oe(d), u = B.checkins.filter((p) => p.date === m), l = (p) => {
        const b = u.map((E) => E[p]).filter(Boolean);
        return b.length ? b.reduce((E, h) => E + h, 0) / b.length : null;
      };
      r.push({
        key: m,
        date: d,
        minutes: Math.round(t[m] || 0),
        moves: n[m] || 0,
        steps: m === a && po() != null ? po() : Vi[m] ?? null,
        mood: l("mood"),
        energy: l("energy")
      });
    }
    return r;
  }
  function is(e) {
    let t = e.length - 1;
    e[t] && !e[t].minutes && t--;
    let n = 0;
    for (; t >= 0 && e[t].minutes > 0; )
      n++, t--;
    return n;
  }
  function qe() {
    const e = o("insightCard");
    if (!e) return;
    const t = vo(30), n = is(t), i = t.reduce((u, l) => u + l.minutes, 0), a = /* @__PURE__ */ new Date(), r = oe(a), s = oe(new Date(a.getFullYear(), a.getMonth(), a.getDate() - (a.getDay() + 6) % 7)), d = t.filter((u) => u.key >= s && u.key <= r).reduce((u, l) => u + l.minutes, 0), m = (u, l, p) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + u + '</div><div><div class="activityRowName">' + M(l) + '</div><div class="activityRowMeta">' + M(p) + "</div></div></div>";
    e.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + Ie("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + m(Ie("clock"), "This week", d + " min") + m(Ie("streak"), "Streak", n + " day" + (n === 1 ? "" : "s")) + m(Ie("calendar"), "30 days", i + " min") + "</div>";
  }
  const as = {
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
  }, os = (e) => e === "sunny" ? "clear" : e === "clear-night" ? "night" : e === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(e) ? "rain" : ["snowy", "snowy-rainy"].includes(e) ? "snow" : "cloudy", Bt = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Gn = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let rs = 0;
  const Wi = (e, t) => '<path class="' + t + '" d="' + e + '"/>', Le = (e, t, n, i) => {
    const a = n * 0.2687;
    return '<path fill="#fff"' + (i < 1 ? ' opacity="' + i + '"' : "") + ' d="M' + e + " " + (t - n) + "L" + (e + a) + " " + (t - a) + "L" + (e + n) + " " + t + "L" + (e + a) + " " + (t + a) + "L" + e + " " + (t + n) + "L" + (e - a) + " " + (t + a) + "L" + (e - n) + " " + t + "L" + (e - a) + " " + (t - a) + 'Z"/>';
  }, ho = ([e, t, n], i) => '<path d="' + e + '" fill="url(#' + i + ')"/><defs><linearGradient id="' + i + '" x1="0" y1="' + t + '" x2="0" y2="' + n + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', ss = (e, t) => t ? '<circle cx="45" cy="45" r="33.26" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle cx="23" cy="23" r="17" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', ds = (e) => (e ? ["29.35", "43.04", "56.74"].map((t) => '<rect class="wxAccent" x="' + t + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + t + ' 60.65)"/>') : [19, 26, 33].map((t) => '<rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + t + ' 38)"/>')).join(""), ls = (e) => (e ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([t, n]) => '<circle cx="' + t + '" cy="' + n + '" r="' + (e ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function cs(e, t, n, i) {
    return e === "clear" ? t ? ho(n ? Gn.l : Gn.s, i) + (n ? Le(70, 20, 5.83, 1) + Le(78.33, 41.67, 3.75, 0.8) + Le(60, 71.67, 3.33, 0.6) : Le(42, 12, 3.5, 1) + Le(47, 25, 2.25, 0.8) + Le(36, 43, 2, 0.6)) : ss(i, n) : e === "partly" ? (t ? ho(n ? Gn.lp : Gn.sp, i) : n ? '<circle cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle cx="18" cy="17" r="12" fill="#FFE100"/>') + Wi(n ? Bt.lp : Bt.sp, t ? "wxCloudLight" : "wxBright") + (t ? n ? Le(73.33, 16.67, 4.17, 0.9) : Le(44, 10, 2.5, 0.9) : "") : e === "cloudy" ? Wi(n ? Bt.lc : Bt.s, t ? "wxCloudLight" : "wxBright") + (t ? n ? Le(15, 15, 3.75, 0.8) + Le(76.67, 13.33, 2.92, 0.6) : Le(9, 9, 2.25, 0.8) + Le(46, 8, 1.75, 0.6) : "") : Wi(n ? Bt.lr : Bt.s, "wxCloudLight") + (e === "rain" ? ds(n) : ls(n));
  }
  const ps = () => {
    var e;
    return ((e = se == null ? void 0 : se["sun.sun"]) == null ? void 0 : e.state) === "below_horizon";
  };
  function It(e, t, n) {
    let i = os(e);
    const a = i === "night" || !!n && ps();
    i === "night" && (i = "clear");
    const r = t ? 90 : 54;
    return '<span class="wxIcon ' + i + (a ? " night" : "") + (t ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + r + " " + r + '">' + cs(i, a, t, "wxg" + ++rs) + "</svg></span>";
  }
  let ji = [], Vn, Wn = null, Yi = !1;
  function us(e) {
    return Object.values(e).filter((t) => t.entity_id.startsWith("weather.")).sort((t, n) => (t.attributes.friendly_name || t.entity_id).localeCompare(n.attributes.friendly_name || n.entity_id));
  }
  function fo(e) {
    const t = o("weatherEntity");
    if (!t || t.matches(":focus")) return;
    const n = us(e);
    t.innerHTML = '<option value="">Not connected</option>' + n.map((a) => '<option value="' + M(a.entity_id) + '">' + M(a.attributes.friendly_name || a.entity_id) + "</option>").join(""), t.value = re.weather || "";
    const i = re.weather && e[re.weather];
    o("weatherStatus").textContent = i ? "Connected · " + (i.attributes.friendly_name || i.entity_id) : o("weatherStatus").dataset.empty;
  }
  function bo() {
    const e = re.weather || null;
    if (e === Vn) return;
    Vn = e, ji = [], Yi = !1;
    const t = Wn;
    if (Wn = null, t == null || t.then((n) => typeof n == "function" && n()).catch(() => {
    }), !e || !w.subscribe) {
      Pt();
      return;
    }
    Wn = w.subscribe({ type: "weather/subscribe_forecast", forecast_type: "daily", entity_id: e }, (n) => {
      Vn === e && (ji = Array.isArray(n == null ? void 0 : n.forecast) ? n.forecast : [], Pt());
    }), Wn.catch(() => {
      Vn === e && (Yi = !0, Pt());
    }), Pt();
  }
  o("weatherEntity").addEventListener("change", () => {
    re.weather = o("weatherEntity").value || null, ye("entities", { ...re }), se && fo(se), bo();
  });
  function Pt() {
    const e = o("weatherCard");
    if (!e) return;
    const t = re.weather, n = t && (se == null ? void 0 : se[t]);
    if (!n) {
      e.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + It("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (t ? "Not available" : "Set up in Settings") + "</div></div></div></div>";
      return;
    }
    const i = n.attributes || {}, a = i.temperature_unit || "°", r = (C) => Number.isFinite(Number(C)) ? Math.round(Number(C)) + "°" : "—", s = (i.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", d = as[n.state] || (n.state ? n.state.charAt(0).toUpperCase() + n.state.slice(1) : "—"), m = oe(/* @__PURE__ */ new Date()), u = ji.slice(0, 7), l = u.find((C) => oe(new Date(C.datetime)) === m) || null, p = u.filter((C) => oe(new Date(C.datetime)) >= m).slice(0, 6), b = p.find((C) => oe(new Date(C.datetime)) > m), E = l ? "H " + r(l.temperature) + "&ensp; L " + r(l.templow) : "", h = (C) => new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(C.datetime)), g = Number.isFinite(Number(i.temperature)) ? Math.round(Number(i.temperature)) : "—", v = (C, $, y) => '<div class="activityRow">' + C + '<div><div class="activityRowName">' + M($) + '</div><div class="activityRowMeta">' + y + "</div></div></div>";
    e.innerHTML = '<div class="wxWide"><div class="wxNow"><div class="wxCurrent">' + It(n.state, !0, !0) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + M(String(g)) + '</span><span class="wxUnit">' + M(a) + '</span></div><div class="wxPlace">' + M(s) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + M(d) + "</div>" + (E ? '<div class="wxRange">' + E + "</div>" : "") + "</div></div>" + (p.length ? '<div class="wxDays">' + p.map((C) => '<div class="wxDay"><div class="wxDayName">' + M(h(C)) + "</div>" + It(C.condition) + '<div class="wxTemps"><div class="wxHigh">' + r(C.temperature) + '</div><div class="wxLow">' + r(C.templow) + "</div></div></div>").join("") + "</div>" : '<div class="wxNoDays">' + (Yi ? "This weather service has no daily forecast" : "Loading the forecast…") + "</div>") + '</div><div class="wxCompact"><div class="activityRows">' + v(It(n.state, !1, !0), "Now · " + s, M(g + "° " + d)) + (l ? v(It(l.condition), "Today", r(l.temperature) + " / " + r(l.templow)) : "") + (b ? v(It(b.condition), "Tomorrow", r(b.temperature) + " / " + r(b.templow)) : "") + "</div></div>";
  }
  Pt();
  const xo = o("tvNav");
  w.fullscreenSupported || (xo.hidden = !0), xo.addEventListener("click", () => w.toggleFullscreen()), x.addEventListener("keydown", (e) => {
    !dt.workout.classList.contains("active") || tn.classList.contains("active") || e.target.closest("input,select,textarea,.holdEnd") || (e.key === "MediaPlayPause" || e.key === " " && !e.target.closest("button") ? (e.preventDefault(), Ei.click()) : e.key === "MediaTrackNext" ? (e.preventDefault(), o("skipExercise").click()) : e.key === "MediaTrackPrevious" && (e.preventDefault(), o("restartSegment").click()));
  }), x.querySelectorAll("[data-rounds-step]").forEach((e) => e.addEventListener("click", () => {
    const t = Math.max(1, Math.min(10, (Number(Me.value) || 1) + Number(e.dataset.roundsStep)));
    String(t) !== Me.value && (Me.value = t, Me.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [G, P, D, Me].forEach((e) => e.addEventListener("input", () => {
    const t = R[F];
    t && (t.total = Number(G.value), t.work = Number(P.value), t.rest = Number(D.value)), _();
  })), ea.addEventListener("click", Fi), ta.addEventListener("click", () => Qn("settings")), o("settingsBack").addEventListener("click", Fi), Ei.addEventListener("click", () => ze(!Ee)), Ae(F), Rn(), Jt(), qe(), o("healthHelpOpen").addEventListener("click", () => x.querySelector(".tab[data-pane=helpPane]").click()), ln(o("resetStats"), o("resetStatsFill"), 1500, () => {
    B.history = [], B.checkins = [], Xt = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    Re(), rt(), Jt(), Rn(), qe(), tt(), j("Stats reset");
  });
  const Ui = o("morningTime"), Zi = o("eveningTime"), Ki = o("checkinAutoOpen");
  Ui.value = Ge().morning, Zi.value = Ge().evening, Ki.classList.toggle("on", z().checkinAutoOpen !== !1), [["morningTime", Ui], ["eveningTime", Zi]].forEach(([e, t]) => t.addEventListener("change", () => {
    t.value && (ye(e, t.value), tt());
  })), Ki.addEventListener("click", () => {
    const e = z().checkinAutoOpen === !1;
    Ki.classList.toggle("on", e), ye("checkinAutoOpen", e);
  }), setTimeout(bi, 800);
  const wo = o("checkinNotify"), jn = o("checkinNotifyTarget"), yo = o("checkinNotifyStatus"), ms = yo.textContent;
  function ko() {
    const e = w.notifyServices(), t = e.filter((a) => a.startsWith("mobile_app_")), n = t.length ? t : e, i = (a) => a.replace(/^mobile_app_/, "").replace(/_/g, " ");
    jn.innerHTML = n.map((a) => '<option value="' + M(a) + '">' + M(i(a)) + "</option>").join(""), !z().notifyTarget && n[0] && (z().notifyTarget = n[0]), jn.value = z().notifyTarget || "";
  }
  function Yn() {
    const e = !!z().notifyOn;
    wo.classList.toggle("on", e), o("checkinNotifyTargetRow").hidden = !e;
    const t = Ge();
    yo.textContent = e ? "Sends at " + t.morning + " and " + t.evening : ms;
  }
  async function Xi() {
    const e = !!z().notifyOn;
    try {
      return await w.setReminderAutomation(e ? { target: z().notifyTarget, times: Ge() } : null), !0;
    } catch {
      return j("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  wo.addEventListener("click", async () => {
    const e = !z().notifyOn;
    if (e && (ko(), !z().notifyTarget)) {
      j("Install the Companion app on your phone first");
      return;
    }
    z().notifyOn = e, Yn(), await Xi() ? (Re(), j(e ? "Check-in notifications on" : "Check-in notifications off")) : (z().notifyOn = !e, Yn());
  }), jn.addEventListener("change", () => {
    ye("notifyTarget", jn.value), z().notifyOn && Xi();
  }), [Ui, Zi].forEach((e) => e.addEventListener("change", () => {
    Yn(), z().notifyOn && Xi();
  })), ko(), Yn();
  let Ji = null;
  function gs() {
    Ji || (Ji = setTimeout(() => {
      Ji = null, qe();
    }, 3e4));
  }
  return {
    updateStates(e) {
      var n, i;
      const t = !se || se[re.weather] !== e[re.weather] || ((n = se["sun.sun"]) == null ? void 0 : n.state) !== ((i = e["sun.sun"]) == null ? void 0 : i.state);
      se = e, co(e), fo(e), uo(e), bo(), t && Pt(), Date.now() - mo > 60 * 60 * 1e3 && go(), gs();
    },
    applyRemoteData(e) {
      if (e && (Array.isArray(e.history) && (B.history = e.history, rt()), Array.isArray(e.history) && qe(), Array.isArray(e.checkins) && (B.checkins = e.checkins.map(ra), tt(), Rn(), Jt(), rt(), qe()), e.profiles && !ue.classList.contains("open") && !Be)) {
        const t = oa(e);
        Object.keys(R).forEach((n) => delete R[n]), Object.assign(R, t.profiles), B.order = t.order, R[F] || (F = B.order[0]), da(), Ae(F);
      }
    },
    suspend() {
      Z = !1;
    },
    resume() {
      Z || (Z = !0, bt || (bt = requestAnimationFrame(Pn)), wt || (wt = requestAnimationFrame(Hn)), cn(x.querySelector(".tab.active"), !1));
    }
  };
}
const ws = "0.37.0", $i = "move_assistant", ys = "move_assistant", Mo = "move_assistant_checkin_reminder";
function ks() {
  if (document.getElementById("move-assistant-inter")) return;
  const x = document.createElement("link");
  x.id = "move-assistant-inter", x.rel = "stylesheet", x.href = "https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(x);
}
class Cs extends HTMLElement {
  setConfig(w) {
    this._config = w || {};
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
  set hass(w) {
    const o = !this._hass;
    if (this._hass = w, o) {
      this._init();
      return;
    }
    this._app && w.states !== this._lastStates && (this._lastStates = w.states, this._app.updateStates(w.states));
  }
  connectedCallback() {
    var w;
    (w = this._app) == null || w.resume();
  }
  disconnectedCallback() {
    var w;
    (w = this._app) == null || w.suspend();
  }
  async _init() {
    ks();
    const w = this.shadowRoot || this.attachShadow({ mode: "open" });
    w.innerHTML = `<style>${fs}</style>${bs}`;
    const o = w.getElementById("app");
    o.style.opacity = "0";
    let U = null;
    try {
      const N = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: $i
      });
      U = (N == null ? void 0 : N.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(U), this._app = xs(w, {
      data: U,
      save: (N) => this._save(N),
      fire: (N, Z) => this._fire(N, Z),
      ws: (N) => this._hass.callWS(N),
      subscribe: (N, Z) => {
        var zt, qt;
        return (qt = (zt = this._hass) == null ? void 0 : zt.connection) != null && qt.subscribeMessage ? this._hass.connection.subscribeMessage(Z, N) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var N, Z;
        return Object.keys(((Z = (N = this._hass) == null ? void 0 : N.services) == null ? void 0 : Z.notify) || {}).sort();
      },
      setReminderAutomation: (N) => this._setReminderAutomation(N),
      setLight: (N) => this.classList.toggle("lightBody", N),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this.isConnected || this._app.suspend(), o.style.transition = "opacity .2s ease", o.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var o;
    const w = (o = this._hass) == null ? void 0 : o.connection;
    w != null && w.subscribeMessage && w.subscribeMessage(
      (U) => {
        var Z;
        const N = JSON.stringify((U == null ? void 0 : U.value) ?? null);
        N === this._lastSaved || N === this._pendingJson || (this._lastSaved = N, (Z = this._app) == null || Z.applyRemoteData(U.value));
      },
      { type: "frontend/subscribe_user_data", key: $i }
    ).catch(() => {
    });
  }
  _save(w) {
    this._pendingJson = JSON.stringify(w), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const o = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: $i,
          value: JSON.parse(o)
        }), this._lastSaved = o;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(w, o = {}) {
    var U, N;
    ((U = this._config) == null ? void 0 : U.events) !== !1 && ((N = this._hass) == null || N.callWS({
      type: "fire_event",
      event_type: ys,
      event_data: { action: w, ...o }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(w) {
    const o = `config/automation/config/${Mo}`;
    if (!w) {
      try {
        await this._hass.callApi("DELETE", o);
      } catch (Z) {
        if ((Z == null ? void 0 : Z.status_code) !== 404 && (Z == null ? void 0 : Z.status) !== 404) throw Z;
      }
      return;
    }
    const U = (Z) => `${Z}:00`, N = window.location.pathname;
    await this._hass.callApi("POST", o, {
      id: Mo,
      alias: "Move Assistant check-in reminder",
      description: "Created by Move Assistant. Change it in Move Assistant → Settings → Check-in.",
      mode: "single",
      triggers: [
        { trigger: "time", at: U(w.times.morning), id: "morning" },
        { trigger: "time", at: U(w.times.evening), id: "evening" }
      ],
      conditions: [],
      actions: [
        {
          action: `notify.${w.target}`,
          data: {
            title: "Move Assistant",
            message: "{{ 'Morning' if trigger.id == 'morning' else 'Evening' }} check-in is ready",
            data: { url: N, clickAction: N }
          }
        }
      ]
    });
  }
  _toggleFullscreen() {
    const w = document;
    if (w.fullscreenElement || w.webkitFullscreenElement) {
      (w.exitFullscreen || w.webkitExitFullscreen).call(w);
      return;
    }
    const o = this.requestFullscreen || this.webkitRequestFullscreen;
    Promise.resolve(o.call(this)).catch(
      () => this._toast("Full screen isn't available here")
    );
  }
  _toast(w) {
    var U;
    const o = (U = this.shadowRoot) == null ? void 0 : U.getElementById("toast");
    o && (o.textContent = w, o.classList.add("show"), setTimeout(() => o.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", Cs), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${ws} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
