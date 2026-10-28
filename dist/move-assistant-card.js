const ru = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#fbf9f6;--color-text-on-selected:#26221e;--color-bg-segment-selected:#fbf9f6;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', su = '#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)){transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;align-items:start}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .settingsSelect{flex:none;width:220px}@media (max-width:620px){#housePane .settingsSelect{width:150px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDac{grid-column:span 2;min-width:0}.tfMoreActions .tfDac{grid-column:auto}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);font:400 24px/1 var(--font);cursor:pointer}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--card);color:var(--text);box-shadow:var(--hc-hair)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfAreaPanel .sourceTag{margin-right:4px}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:3px;height:38px;padding:3px;border-radius:12px;background:var(--tile);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:9px 4px 4px 9px}.tfBlocks>span:nth-child(4){border-radius:4px 9px 9px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 12px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:38px;border-radius:12px;background:var(--tile);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:3px;bottom:3px;left:3px;border-radius:9px;background:var(--primary)}.tfTilt span{position:relative;padding:0 15px;color:var(--text);font:600 12px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns{display:flex;gap:12px}.tfCoverBtns button{flex:1;display:grid;place-items:center;height:38px;min-width:0;min-height:0;padding:0;border:0;border-radius:12px;background:var(--tile);color:var(--text);cursor:pointer}.tfCoverBtns button:disabled{opacity:.38;cursor:default}.tfCoverBtns svg{display:block;width:22px;height:22px}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList) .tfPlug.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}:is(.tfCard,.tfMoreList) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:620px){.tfMoreBackdrop{place-items:end stretch;padding:0}.tfMorePair{width:100%;max-height:85vh}.tfMore{width:100%;border-radius:var(--r-card) var(--r-card) 0 0}.tfMore .tfCoverBtns{gap:8px}}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMore{width:640px}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 18px 10px}.tfAreaPanel .workoutPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaIcon[data-light]{background:var(--light);color:var(--light-ink)}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{color:var(--muted);font:400 16px/1.2 var(--font)}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px)}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px;align-items:start}.tfMoreActions .tfAction{grid-column:auto}.tfMore.wide .tfMoreTiles{grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));padding:var(--inset);border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}@media (max-width:620px){.tfMore.wide{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}.tfDashTiles>.tfAction{justify-content:space-between}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%}#app.tfBoard .tfDashTiles>.tfAction{padding-block:18px}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;display:grid;grid-auto-rows:60px;gap:16px;pointer-events:none}.tfBoardCells i{border-radius:var(--r-inner);background:color-mix(in srgb,var(--text) 7%,transparent)}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:360px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-40px;display:grid;place-items:center;width:40px;height:56px;min-height:0;padding:0;border:0;border-radius:16px 0 0 16px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}', lu = '.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:clamp(8px,calc(5.6cqw * var(--wb-k,1)),14px);aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:clamp(12px,calc(7.9cqw * var(--wb-k,1)),20px);border-radius:clamp(22px,calc(11.1cqw * var(--wb-k,1)),28px);overflow:hidden}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbHead{gap:clamp(8px,calc(4.8cqw * var(--wb-k,1)),12px)}.wbSquare .wbChip{width:clamp(30px,calc(15.9cqw * var(--wb-k,1)),40px);height:clamp(30px,calc(15.9cqw * var(--wb-k,1)),40px);border-radius:clamp(12px,calc(6.3cqw * var(--wb-k,1)),16px);--wb-icon:clamp(18px,calc(9.5cqw * var(--wb-k,1)),24px)}.wbSquare .wbName{font-size:clamp(12px,calc(5.6cqw * var(--wb-k,1)),14px);line-height:1.4}.wbSquare .wbSub{font-size:clamp(13px,calc(6.3cqw * var(--wb-k,1)),16px)}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:clamp(6px,calc(4cqw * var(--wb-k,1)),10px)}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);opacity:.14}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:20px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 480px){.wbCard.wbWeather{gap:16px;padding:var(--inset)}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumns{display:none}.wbHalves{display:grid}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbStripScroll{min-height:150px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:clamp(12px,6.3cqw,16px);overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}@container wb-card (width < 220px){.wbMoonCaption{display:none}}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbCompareBars{display:block;width:100%;height:100%;min-height:0}.wbAvgValue{fill:var(--muted);font-size:10px;text-anchor:middle}.wbAvgValue.wbToday{fill:var(--text);font-size:12px;font-weight:600}.wbAvgBar{fill:var(--muted);opacity:.45}.wbAvgBar.wbToday{fill:var(--primary);opacity:1}.wbAvgDay{fill:var(--muted);font-size:11px;text-anchor:middle}.wbAvgDay.wbToday{fill:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}', du = `<main id="app"><div class="shell">
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
`, Eo = {
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
}, zn = (n) => n < 0 ? 0 : n > 1 ? 1 : n, Ld = (n, l, i) => n + (l - n) * i, Nl = (n) => {
  const l = String(n || "#000000").trim().replace("#", ""), i = l.length === 3 ? l.split("").map((u) => u + u).join("") : l;
  return [0, 2, 4].map((u) => parseInt(i.slice(u, u + 2), 16) || 0);
}, cu = (n) => "#" + n.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), Ad = {}, Vt = (n, l, i) => {
  const u = n + l + i;
  return Ad[u] || (Ad[u] = cu(Nl(n).map((f, m) => f + (Nl(l)[m] - f) * i)));
}, _d = {}, Es = (n) => _d[n] || (_d[n] = Nl(n)), gl = (n, l, i, u) => (f) => {
  if (f <= 0) return 0;
  if (f >= 1) return 1;
  let m = 0, w = 1, L = f;
  for (let b = 0; b < 18; b++)
    L = (m + w) / 2, 3 * (1 - L) * (1 - L) * L * n + 3 * (1 - L) * L * L * i + L * L * L < f ? m = L : w = L;
  return 3 * (1 - L) * (1 - L) * L * l + 3 * (1 - L) * L * L * u + L * L * L;
}, uu = { std: gl(0.2, 0, 0, 1), acc: gl(0.3, 0, 1, 1), dec: gl(0, 0, 0, 1) };
function Is(n, l) {
  const i = String(n || "");
  return (i === "sunny" || i === "clear-night" ? "clear" : i === "partlycloudy" ? "partly" : i === "fog" ? "fog" : i === "lightning" || i === "lightning-rainy" ? "storm" : i === "snowy" || i === "snowy-rainy" ? "snow" : i === "rainy" || i === "pouring" || i === "hail" ? "rain" : "cloudy") + "/" + (i === "clear-night" || l ? "night" : "day");
}
function fc(n) {
  const l = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return l.partly = [Vt(l.clear[0], l.cloudy[0], 0.12), Vt(l.clear[1], l.cloudy[1], 0.12)], l.storm = [Vt(l.rain[0], "#000000", 0.22), Vt(l.rain[1], "#000000", 0.22)], l;
}
const Bl = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], Pl = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], Il = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function Hl(n, l = Eo) {
  const i = { ...Eo, ...l }, u = fc(i), f = String(n).split("/"), m = u[f[0]] ? f[0] : "clear", w = f[1] === "night", L = u[m][w ? 1 : 0], b = {
    night: w,
    clearness: m === "clear" ? 1 : m === "partly" ? 0.7 : 0.25,
    sky: L,
    skyStops: [L],
    skyT: 0,
    sun: { x: 45, y: w ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: w ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: w ? 1 : 0 },
    stars: Bl.map(() => ({ o: 0 })),
    rain: Pl.map(() => ({ o: 0, dy: -16 })),
    snow: Il.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, N = (le) => Bl.map(() => ({ o: le }));
  return m === "clear" ? w ? (b.moon.o = 1, b.stars = N(1)) : b.sun.o = 1 : m === "partly" ? (b.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: w ? 1 : 0 }, w ? (b.moon = { x: 34, y: 33, d: 48, o: 1 }, b.stars = N(0.7)) : b.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : m === "cloudy" || m === "fog" ? (b.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: w ? 1 : 0 }, w ? b.moon = { x: 40, y: 36, d: 40, o: 0 } : b.sun = { x: 40, y: 36, r: 20, o: 0 }) : (b.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, w ? b.moon = { x: 38, y: 28, d: 36, o: 0 } : b.sun = { x: 38, y: 28, r: 18, o: 0 }, m === "snow" ? b.snow = Il.map(() => ({ o: 1, dy: 0 })) : b.rain = Pl.map((le, oe) => ({ o: m === "storm" && oe === 1 ? 0 : 1, dy: 0 })), m === "storm" && (b.bolt = { o: 1, dy: 0 })), b;
}
const Ed = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function pu(n, l, i, u = Eo, f = !1) {
  const m = { ...Eo, ...u }, w = (R, B) => R > 0.01 && B > 0.01 ? "stay" : R > 0.01 ? "leave" : B > 0.01 ? "enter" : "none", L = (R, B, Y, Q) => {
    const U = R[0] + B * Q, j = R[1] - (Y - 1 - B) * Q;
    return uu[R[2]](zn((i - U) / Math.max(1e-3, j - U)));
  }, b = (R, B, Y, Q = 0, U = 1, j = 0) => {
    const X = w(R.o, B.o);
    if (X === "none") return { ...B, o: 0 };
    const W = L(Ed[Y][X], Q, U, j), K = {};
    for (const ie in B) K[ie] = f && X !== "stay" && ie !== "o" ? X === "leave" ? R[ie] : B[ie] : Ld(R[ie], B[ie], W);
    return K;
  }, N = L(Ed.sky, 0, 1, 0);
  let le, oe;
  if (n.night !== l.night) {
    const R = Math.min(n.clearness, l.clearness), B = Vt(Vt(n.sky, l.sky, 0.5), m.dusk, 0.6 * R);
    le = N < 0.5 ? Vt(n.sky, B, N * 2) : Vt(B, l.sky, N * 2 - 1), oe = R > 0.5 ? [n.sky, m.dusk, l.sky] : [n.sky, l.sky];
  } else
    le = Vt(n.sky, l.sky, N), oe = [n.sky, l.sky];
  return {
    night: i < 0.5 ? n.night : l.night,
    clearness: Ld(n.clearness, l.clearness, i),
    sky: le,
    skyStops: oe,
    skyT: N,
    sun: b(n.sun, l.sun, "body"),
    moon: b(n.moon, l.moon, "body"),
    cloud: b(n.cloud, l.cloud, "cloud"),
    stars: l.stars.map((R, B) => b(n.stars[B], R, "fx", B, l.stars.length, 0.05)),
    rain: l.rain.map((R, B) => b(n.rain[B], R, "fx", B, l.rain.length, 0.05)),
    snow: l.snow.map((R, B) => b(n.snow[B], R, "fx", B, l.snow.length, 0.05)),
    bolt: b(n.bolt, l.bolt, "fx")
  };
}
const hu = [
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
], Wn = (n, l) => (hu[(l & 7) * 8 + (n & 7)] + 0.5) / 64, fu = 0, Wl = 1, zl = 2, Vl = 3, jl = 4, qn = 5, Qi = 6, Vo = 7, Gl = 8, Rs = (n, l) => l <= 0.6665 && ((n - 0.5) * (n - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && l >= 0.416), mu = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], gu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((n) => [n[0] * 13 / 11, n[1] * 28 / 24]), mc = (n, l, i) => {
  let u = !1;
  for (let f = 0, m = n.length - 1; f < n.length; m = f++) {
    const w = n[f], L = n[m];
    w[1] > i != L[1] > i && l < (L[0] - w[0]) * (i - w[1]) / (L[1] - w[1]) + w[0] && (u = !u);
  }
  return u;
};
function gc(n, { size: l = 90, px: i = 2, oneBit: u = !1, colors: f = Eo, ink: m = "#26221e", paper: w = "#fbf9f6", clock: L = 0, idle: b = !1 } = {}) {
  const N = { ...Eo, ...f }, le = Math.sin, oe = Math.PI * 2, R = Math.max(6, Math.round(l / i)), B = R / 90, Y = b ? Math.floor(L / 100) * 100 : 0, Q = b ? le(oe * Y / 3600) : 0, U = b ? 1.8 * le(oe * Y / 6400) : 0, j = b ? 0.9 * le(oe * Y / 4100) : 0, X = b ? 0.8 * le(oe * Y / 5200) : 0, W = Y / 3400 % 1, K = b && n.bolt.o > 0.5 && (W < 0.04 || W > 0.08 && W < 0.11), ie = new Array(R * R), _ = new Uint8Array(R * R), z = (y, S, M, E, de) => {
    M == null || y < 0 || S < 0 || y >= R || S >= R || (E >= 1 || E > Wn(y + 5, S + 3)) && (ie[S * R + y] = M, _[S * R + y] = de);
  }, ge = (y, S, M, E) => {
    for (let de = Math.max(0, Math.floor(S - M) - 1); de <= Math.min(R - 1, S + M + 1); de++) for (let q = Math.max(0, Math.floor(y - M) - 1); q <= Math.min(R - 1, y + M + 1); q++) E(q, de, q + 0.5 - y, de + 0.5 - S);
  }, Se = n.skyStops || [n.sky], v = n.skyT || 0;
  for (let y = 0; y < R; y++) {
    const S = n.night ? zn(1 - (y + 0.5) / (R * 0.7)) * 0.85 : zn(((y + 0.5) / R - 0.35) / 0.65) * 0.85;
    for (let M = 0; M < R; M++) {
      let E = Se[0];
      if (Se.length > 1) {
        const de = v * (Se.length - 1), q = Math.min(Se.length - 2, Math.floor(de));
        E = de - q > Wn(M, y) ? Se[q + 1] : Se[q];
      }
      S > Wn(M + 2, y + 5) && (E = n.night ? Vt(E, "#000000", 0.28) : Vt(E, "#ffffff", 0.2)), ie[y * R + M] = K ? Vt(E, "#ffffff", 0.25) : E;
    }
  }
  if (n.sun.o > 0.01) {
    const y = n.sun.x * B, S = n.sun.y * B, M = Math.max(1, n.sun.r * B);
    if (b) {
      const E = M * (1.45 + 0.06 * Q), de = Vt(N.sun, "#ffffff", 0.55);
      if (ge(y, S, E, (q, ee, re, pe) => {
        const We = Math.sqrt(re * re + pe * pe);
        We > M && We < E && z(q, ee, de, 0.26 * (1 - (We - M) / (E - M)) * n.sun.o, fu);
      }), n.sun.o > 0.5) {
        const q = Math.floor(Y / 500) % 2, ee = Math.max(1, M * 0.22);
        for (let re = 0; re < 8; re++) if (re % 2 === q) for (let pe = M + 1.5; pe < M + 1.5 + ee; pe += 0.7) z(Math.floor(y + Math.cos(re * Math.PI / 4) * pe), Math.floor(S + Math.sin(re * Math.PI / 4) * pe), N.sun, n.sun.o, Gl);
      }
    }
    ge(y, S, M, (E, de, q, ee) => {
      if (q * q + ee * ee > M * M) return;
      const re = ((q * 0.643 + ee * 0.766) / M + 1) / 2;
      z(E, de, zn((re - 0.62) / 0.38) > Wn(E, de) ? N.sunEdge : N.sun, n.sun.o, Wl);
    });
  }
  if (Bl.forEach((y, S) => {
    const M = n.stars[S].o;
    if (M < 0.01) return;
    const E = Math.floor(y[0] * B), de = Math.floor(y[1] * B), q = b ? (Math.floor(Y / 300) + S * 3) % 6 : 0;
    if (q === 5) return;
    const ee = Math.round(y[2] * B * (q === 4 ? 0.3 : q < 2 ? 1 : 0.6));
    z(E, de, N.star, M, Vo);
    for (let re = 1; re <= ee; re++) {
      const pe = re === ee && ee > 1 ? Vt(N.star, n.sky, 0.5) : N.star;
      z(E - re, de, pe, M, Vo), z(E + re, de, pe, M, Vo), z(E, de - re, pe, M, Vo), z(E, de + re, pe, M, Vo);
    }
  }), n.moon.o > 0.01) {
    const y = Math.max(1.5, n.moon.d * B * 0.37), S = n.moon.x * B, M = n.moon.y * B + (b && X > 0.4 ? -1 : 0), E = S + 0.547 * y, de = M - 0.503 * y, q = 0.82 * y, ee = Vt(N.moon, "#ffffff", 0.6);
    ge(S, M, y, (re, pe, We, Xe) => {
      if (We * We + Xe * Xe > y * y) return;
      const vt = re + 0.5 - E, an = pe + 0.5 - de;
      vt * vt + an * an <= q * q || z(re, pe, zn((Xe + y) / (2 * y) * 1.1 - 0.1) > Wn(re, pe) ? N.moon : ee, n.moon.o, zl);
    });
  }
  const ke = Math.max(2, Math.round(15.65 * B)), Ce = Math.max(1, Math.round(5.87 * B * 0.5));
  Pl.forEach((y, S) => {
    const M = n.rain[S];
    let E = M.dy, de = M.o;
    if (de < 0.01) return;
    if (b) {
      const re = (Y / 950 + S / 3) % 1;
      E += -5 + re * 14, de *= re < 0.18 ? re / 0.18 : re > 0.72 ? (1 - re) / 0.28 : 1;
    }
    const q = (y[0] + 3 + U) * B, ee = (y[1] + E) * B;
    for (let re = 0; re < ke; re++) for (let pe = 0; pe < Ce; pe++) z(Math.floor(q - 0.208 * re) + pe, Math.floor(ee) + re, N.rain, de, jl);
  });
  const qe = Math.max(0, Math.round(7.34 * B / 2.6));
  if (Il.forEach((y, S) => {
    const M = n.snow[S];
    let E = M.dy, de = 0, q = M.o;
    if (q < 0.01) return;
    if (b) {
      const pe = (Y / 3200 + S / 5) % 1;
      E += -6 + pe * 14, de = 1.5 * le(oe * (pe * 1.5 + S / 5)), q *= pe < 0.2 ? pe / 0.2 : pe > 0.75 ? (1 - pe) / 0.25 : 1;
    }
    const ee = Math.floor((y[0] + 3.67 + de + U) * B), re = Math.floor((y[1] + 3.67 + E) * B);
    z(ee, re, N.snow, q, qn);
    for (let pe = 1; pe <= qe; pe++)
      z(ee - pe, re, N.snow, q, qn), z(ee + pe, re, N.snow, q, qn), z(ee, re - pe, N.snow, q, qn), z(ee, re + pe, N.snow, q, qn), qe > 1 && pe < qe && (z(ee - pe, re - pe, N.snow, q, qn), z(ee + pe, re - pe, N.snow, q, qn), z(ee - pe, re + pe, N.snow, q, qn), z(ee + pe, re + pe, N.snow, q, qn));
  }), n.bolt.o > 0.01)
    if (R >= 30) {
      const y = 39 + U, S = 50 + n.bolt.dy;
      for (let M = Math.floor(S * B); M <= (S + 28) * B; M++) for (let E = Math.floor(y * B); E <= (y + 13) * B; E++)
        mc(gu, (E + 0.5) / B - y, (M + 0.5) / B - S) && z(E, M, N.sun, n.bolt.o, Qi);
    } else {
      const y = R / 18, S = 7, M = 10 + Math.round(n.bolt.dy * 0.2);
      mu.forEach((E, de) => E.split("").forEach((q, ee) => {
        if (q !== "#") return;
        const re = Math.floor((S + ee) * y), pe = Math.floor((M + de) * y);
        for (let We = pe; We < Math.max(pe + 1, Math.floor((M + de + 1) * y)); We++) for (let Xe = re; Xe < Math.max(re + 1, Math.floor((S + ee + 1) * y)); Xe++) z(Xe, We, N.sun, n.bolt.o, Qi);
      }));
    }
  if (n.cloud.o > 0.01) {
    const y = Math.max(3, n.cloud.w * B), S = y * 0.6665, M = (n.cloud.x + U) * B - y / 2, E = (n.cloud.y + j) * B - S / 2, de = Vt(N.cloudDay, N.cloudNight, Math.round(n.cloud.f * 4) / 4), q = Vt(de, "#000000", 0.16);
    for (let ee = Math.max(0, Math.floor(E) - 1); ee <= Math.min(R - 1, E + S + 1); ee++) for (let re = Math.max(0, Math.floor(M) - 1); re <= Math.min(R - 1, M + y + 1); re++) {
      const pe = (re + 0.5 - M) / y, We = (ee + 0.5 - E) / y;
      Rs(pe, We) && z(re, ee, !Rs(pe, We + 1 / y) || zn((We - 0.42) / 0.25) * 0.8 > Wn(re, ee) ? q : de, n.cloud.o, Vl);
    }
  }
  return vc(ie, _, R, R, { oneBit: u, ink: m, paper: w, snowInk: !n.night });
}
function vc(n, l, i, u, { oneBit: f, ink: m, paper: w, snowInk: L }) {
  const b = new Uint8ClampedArray(i * u * 4), N = Es(m), le = Es(w);
  for (let oe = 0; oe < u; oe++) for (let R = 0; R < i; R++) {
    const B = oe * i + R, Y = l[B];
    if (n[B] == null) continue;
    let Q = Es(n[B]);
    if (f) {
      let U;
      Y === jl || Y === Gl ? U = !0 : Y === qn ? U = L : Y === Vo || Y === Qi ? U = !1 : U = Math.round((0.2126 * Q[0] + 0.7152 * Q[1] + 0.0722 * Q[2]) / 255 * 4) / 4 <= Wn(R, oe), (Y === Wl || Y === zl || Y === Vl || Y === Qi) && (R > 0 && l[B - 1] !== Y || R < i - 1 && l[B + 1] !== Y || oe > 0 && l[B - i] !== Y || oe < u - 1 && l[B + i] !== Y) && (U = !0), Q = U ? N : le;
    }
    b[B * 4] = Q[0], b[B * 4 + 1] = Q[1], b[B * 4 + 2] = Q[2], b[B * 4 + 3] = 255;
  }
  return { w: i, h: u, data: b };
}
const vu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, bu = (n) => Is(n, !1).split("/")[0], vl = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let l = Math.imul(n ^ n >>> 15, 1 | n);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, wu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", xu = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", yu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", ku = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Mu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Cu = [".##", "##.", ".#.", "#.."];
function bc(n, { width: l, height: i, colors: u, wave: f = 0.38, soft: m = 6, glow: w = 0.6 }) {
  const L = { ...Eo, dawn: "#e5a77e", ...u }, b = fc(L), N = l, le = i, oe = N / 6, R = oe / 2, B = Math.PI * 2, Y = n.length ? n : [{ cond: "cloudy", night: !1 }], Q = [...Array(12)].map((W, K) => {
    const ie = Y[Math.min(K, Y.length - 1)], _ = bu(ie.cond), z = K % 2 === 1;
    return { cond: ie.cond, k: _, night: z, sky: b[_][z ? 1 : 0], cover: vu[_] };
  }), U = (W) => le * (0.5 - f * Math.cos(B * (W / oe - 0.25)));
  return { C: L, S: Q, W: N, H: le, cw: oe, sw: R, TAU: B, yb: U, side: (W, K, ie) => {
    const _ = (W ? U(K) - ie : ie - U(K)) / Math.max(3, m * 1.4) + 0.5;
    return _ <= 0 ? 0 : _ >= 1 ? 1 : _;
  }, glowAt: (W) => {
    const K = ((W / oe - 0.25) % 1 + 1) % 1, ie = Math.max(0, Math.min(5, Math.round(W / oe - 0.25))), _ = Math.max(0, Math.min(5, Math.round(W / oe - 0.75))), z = 1 - (Q[2 * ie].cover + Q[2 * _ + 1].cover) / 2, ge = Math.sin(Math.PI * Math.min(1, Math.max(0, U(W) / le)));
    return { c: K < 0.5 ? L.dusk : L.dawn, a: w * (0.2 + 0.8 * z) * ge * ge };
  }, soft: m, tw: oe * 0.3, sy: le / 90 };
}
function wc(n, { clock: l = 0, ambient: i = !1, seed: u = 1 }) {
  const { S: f, sw: m, side: w, C: L, TAU: b, sy: N } = n, le = l, oe = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return f.forEach((R, B) => {
    const Y = vl(u * 977 + B * 131 + 7), Q = (B + 0.5) * m, U = R.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[R.k] : 0;
    for (let j = 0; j < U; j++) {
      const X = Q + (Y() - 0.5) * m * 1.6, W = (6 + Y() * 76) * N, K = Y() < 0.35, ie = 1.8 + Y() * 1.6, _ = w(!0, X, W) * (K ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(b * le / 2600 + j * 1.7 + B) : 1);
      _ >= 0.03 && oe.stars.push({ x: X, y: W, big: K, size: ie, o: _ });
    }
    if (!R.night && (R.k === "clear" || R.k === "partly")) {
      const j = Q + (Y() - 0.5) * m * 0.3, X = Math.min(15, m * 0.29);
      oe.suns.push({ x: j, y: 32 * N, rad: X, halo: X * 2.8 * (i ? 1 + 0.07 * Math.sin(b * le / 3600 + B) : 1) });
    }
    if (R.night && (R.k === "clear" || R.k === "partly")) {
      const j = Math.min(0.78, m * 0.55 / 34), X = Q - 23 * j + (Y() - 0.5) * m * 0.2;
      oe.moons.push({ x: X + 23 * j, y: (4 + (i ? 0.8 * Math.sin(b * le / 5200 + B) : 0)) * N + 23 * j, d: 46 * j });
    }
  }), f.forEach((R, B) => {
    const Y = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[R.k];
    if (!Y) return;
    const Q = vl(u * 577 + B * 71 + 3), U = (B + 0.5) * m, j = R.k === "rain" || R.k === "storm" || R.night ? L.cloudNight : L.cloudDay, X = R.night ? 0.82 : R.k === "storm" ? 0.75 : 1;
    for (let W = 0; W < Y; W++) {
      const K = m / 46 * (R.k === "partly" ? 0.85 : 0.75 + Q() * 0.55), ie = U + (R.k === "partly" ? m * 0.12 : (Q() - 0.5) * m * 1.05), _ = (R.k === "partly" ? 40 : 6 + Q() * 26) * N, z = i ? 2.5 * Math.sin(b * le / 9e3 + B * 1.3 + W * 2.1) : 0, ge = i ? 0.9 * Math.sin(b * le / 6100 + B + W) : 0;
      oe.clouds.push({ x: ie - 23 * K + z, y: _ - 15.33 * K + ge, w: 46 * K, h: 30.66 * K, fill: j, o: X * (Y > 1 && W === 0 ? 0.85 : 1) });
    }
  }), f.forEach((R, B) => {
    const Y = vl(u * 313 + B * 29 + 11), Q = (B + 0.5) * m, U = R.cond === "pouring" ? 16 : R.cond === "rainy" || R.cond === "hail" ? 9 : R.cond === "lightning-rainy" ? 12 : R.cond === "snowy-rainy" ? 5 : 0;
    for (let X = 0; X < U; X++) {
      let W = Q + (Y() - 0.5) * m * 1.05, K = 44 + Y() * 36, ie = 1;
      if (i) {
        const z = ((K - 44 + le * 0.04) % 36 + 36) % 36;
        W -= 0.21 * (z - (K - 44)), K = 44 + z, ie = Math.min(1, z / 6, (36 - z) / 6);
      }
      K *= N;
      const _ = w(R.night, W, K) * ie;
      _ >= 0.05 && oe.drops.push({ x: W, y: K, o: _ });
    }
    const j = R.cond === "snowy" ? 11 : R.cond === "snowy-rainy" ? 6 : 0;
    for (let X = 0; X < j; X++) {
      let W = Q + (Y() - 0.5) * m * 1.05, K = 40 + Y() * 44, ie = 1;
      if (i) {
        const z = ((K - 40 + le * 9e-3) % 44 + 44) % 44;
        K = 40 + z, W += 1.6 * Math.sin(b * le / 2800 + X * 1.9 + B), ie = Math.min(1, z / 6, (44 - z) / 6);
      }
      K *= N;
      const _ = w(R.night, W, K) * ie;
      _ >= 0.05 && oe.flakes.push({ x: W, y: K, o: _ });
    }
    if (R.k === "fog") {
      const X = R.night ? "#c8ccd6" : "#ffffff", W = R.night ? 0.28 : 0.62, K = i ? 4 * Math.sin(b * le / 8e3 + B) : 0;
      for (let ie = 0; ie < 4; ie++) oe.fogs.push({ x: Q - m * 0.75 + ie % 2 * m * 0.18 + (ie % 2 ? K : -K), y: (30 + ie * 13) * N, w: m * 1.3, c: X, a: W });
    }
    if (R.k === "storm") {
      const X = (le / 3400 + B * 0.37) % 1;
      oe.bolts.push({ x: Q + (Y() - 0.5) * m * 0.3 - 5, y: 36 * N, o: i && !(X < 0.05 || X > 0.09 && X < 0.12) ? 0.8 : 1 });
    }
  }), oe;
}
function Su(n, l, i, u, f, m, w, L) {
  const { S: b, C: N, cw: le, yb: oe, glowAt: R, soft: B, tw: Y, sy: Q } = n, U = new Array(i * u), j = new Uint8Array(i * u), X = new Uint8Array(i * u), W = (y, S, M, E, de) => {
    M == null || y < 0 || S < 0 || y >= i || S >= u || (E >= 1 || E > Wn(y + 5, S + 3)) && (U[S * i + y] = M, j[S * i + y] = de);
  }, K = (y, S, M, E) => {
    for (let de = Math.max(0, Math.floor(S - M) - 1); de <= Math.min(u - 1, S + M + 1); de++) for (let q = Math.max(0, Math.floor(y - M) - 1); q <= Math.min(i - 1, y + M + 1); q++) E(q, de, q + 0.5 - y, de + 0.5 - S);
  }, ie = (y, S, M) => {
    for (let de = 0; de < y.length - 1; de++) {
      const q = (de + S) * le;
      if (M < q - Y / 2) return [y[de], y[de], 0];
      if (M <= q + Y / 2) return [y[de], y[de + 1], (M - q + Y / 2) / Y];
    }
    const E = y[y.length - 1];
    return [E, E, 0];
  }, _ = b.filter((y) => !y.night).map((y) => y.sky), z = b.filter((y) => y.night).map((y) => y.sky), ge = B / m, Se = 16 * Q / m;
  for (let y = 0; y < i; y++) {
    const S = (y + 0.5) * f, M = oe(S) / m, E = ie(_, 0.75, S), de = ie(z, 1.25, S), q = R(S);
    for (let ee = 0; ee < u; ee++) {
      const re = Wn(y, ee), pe = ee + 0.5 - M, We = (ge > 0.01 ? zn(0.5 + pe / ge) : pe > 0 ? 1 : 0) > re;
      let Xe = We ? E[2] > re ? E[1] : E[0] : de[2] > re ? de[1] : de[0];
      (We ? zn(((ee + 0.5) / u - 0.45) / 0.55) * 0.7 : zn(1 - (ee + 0.5) / (u * 0.55)) * 0.7) > Wn(y + 2, ee + 5) && (Xe = We ? Vt(Xe, "#ffffff", 0.18) : Vt(Xe, "#000000", 0.25)), We && pe >= 0 && pe < Se && q.a * 1.3 * (1 - pe / Se) > Wn(y + 6, ee + 1) && (Xe = q.c), U[ee * i + y] = Xe, X[ee * i + y] = We ? 0 : 1;
    }
  }
  const v = Vt(N.sun, "#ffffff", 0.55), ke = Vt(N.moon, "#ffffff", 0.6);
  l.stars.forEach((y) => {
    const S = Math.floor(y.x / f), M = Math.floor(y.y / m);
    if (S < 0 || M < 0 || S >= i || M >= u || !X[M * i + S] || y.o < 0.15) return;
    const E = y.o > 0.45 ? N.star : Vt(N.star, U[M * i + S], 0.5), de = y.big && y.o > 0.6 ? Math.floor(y.size / f) : 0;
    W(S, M, E, 1, Vo);
    for (let q = 1; q <= de; q++) [[S - q, M], [S + q, M], [S, M - q], [S, M + q]].forEach((ee) => {
      ee[0] >= 0 && ee[1] >= 0 && ee[0] < i && ee[1] < u && X[ee[1] * i + ee[0]] && W(ee[0], ee[1], E, 1, Vo);
    });
  }), l.suns.forEach((y) => {
    const S = Math.max(1.5, y.rad / f), M = y.x / f, E = y.y / m, de = y.halo / f * 0.85;
    if (K(M, E, de, (q, ee, re, pe) => {
      const We = Math.sqrt(re * re + pe * pe);
      We > S && We < de && !X[ee * i + q] && W(q, ee, v, 0.3 * (1 - (We - S) / (de - S)), 0);
    }), L) {
      const q = Math.floor(w / 500) % 2, ee = Math.max(1, S * 0.3);
      for (let re = 0; re < 8; re++) if (re % 2 === q) for (let pe = S + 1.2; pe < S + 1.2 + ee; pe += 0.7) W(Math.floor(M + Math.cos(re * Math.PI / 4) * pe), Math.floor(E + Math.sin(re * Math.PI / 4) * pe), N.sun, 1, Gl);
    }
    K(M, E, S, (q, ee, re, pe) => {
      re * re + pe * pe <= S * S && W(q, ee, zn(((pe / S + 1) / 2 - 0.6) / 0.4) > Wn(q, ee) ? N.sunEdge : N.sun, 1, Wl);
    });
  }), l.moons.forEach((y) => {
    const S = Math.max(1.5, y.d * 0.37 / f), M = y.x / f, E = y.y / m, de = M + 0.547 * S, q = E - 0.503 * S, ee = 0.82 * S;
    K(M, E, S, (re, pe, We, Xe) => {
      if (We * We + Xe * Xe > S * S) return;
      const vt = re + 0.5 - de, an = pe + 0.5 - q;
      vt * vt + an * an > ee * ee && W(re, pe, zn((Xe + S) / (2 * S) * 1.1 - 0.1) > Wn(re, pe) ? N.moon : ke, 1, zl);
    });
  }), l.clouds.forEach((y) => {
    const S = Math.max(3, y.w / f), M = S * 0.6665, E = y.x / f, de = y.y / m, q = Vt(y.fill, "#000000", 0.16);
    for (let ee = Math.max(0, Math.floor(de) - 1); ee <= Math.min(u - 1, de + M + 1); ee++) for (let re = Math.max(0, Math.floor(E) - 1); re <= Math.min(i - 1, E + S + 1); re++) {
      const pe = (re + 0.5 - E) / S, We = (ee + 0.5 - de) / S;
      Rs(pe, We) && W(re, ee, !Rs(pe, We + 1 / S) || zn((We - 0.42) / 0.25) * 0.8 > Wn(re, ee) ? q : y.fill, y.o, Vl);
    }
  }), l.fogs.forEach((y) => {
    const S = Math.floor(y.y / m), M = Math.max(S, Math.floor((y.y + 6 * Q) / m) - 1), E = Math.floor(y.x / f), de = Math.floor((y.x + y.w) / f);
    for (let q = S; q <= M; q++) for (let ee = E; ee <= de; ee++) {
      const re = (ee - E) / Math.max(1, de - E);
      W(ee, q, y.c, y.a * (re < 0.25 ? re / 0.25 : re > 0.75 ? (1 - re) / 0.25 : 1), 0);
    }
  });
  const Ce = Math.max(2, Math.round(9 / m));
  l.drops.forEach((y) => {
    const S = y.x / f, M = Math.floor(y.y / m);
    for (let E = 0; E < Ce; E++) W(Math.floor(S - 0.208 * E * m / f), M + E, N.rain, y.o, jl);
  });
  const qe = Math.max(0, Math.round(4.4 / f / 2.6));
  return l.flakes.forEach((y) => {
    const S = Math.floor(y.x / f), M = Math.floor(y.y / m);
    W(S, M, N.snow, y.o, qn);
    for (let E = 1; E <= qe; E++)
      W(S - E, M, N.snow, y.o, qn), W(S + E, M, N.snow, y.o, qn), W(S, M - E, N.snow, y.o, qn), W(S, M + E, N.snow, y.o, qn);
  }), l.bolts.forEach((y) => {
    if (f <= 3.5)
      for (let S = Math.floor(y.y / m); S <= (y.y + 24) / m; S++) for (let M = Math.floor(y.x / f); M <= (y.x + 11) / f; M++)
        mc(Mu, (M + 0.5) * f - y.x, (S + 0.5) * m - y.y) && W(M, S, N.sun, 1, Qi);
    else {
      const S = Math.round(y.x / f), M = Math.round(y.y / m);
      Cu.forEach((E, de) => E.split("").forEach((q, ee) => {
        q === "#" && W(S + ee, M + de, N.sun, 1, Qi);
      }));
    }
  }), { col: U, ids: j };
}
function Tu(n, l) {
  const i = l.px, u = Math.max(6, Math.round(l.width / i)), f = Math.max(6, Math.round(l.height / i)), m = l.width / u, w = l.height / f, L = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, b = (B) => {
    const Y = bc(B, l);
    return Su(Y, wc(Y, { clock: L, ambient: l.ambient, seed: l.seed }), u, f, m, w, L, l.ambient);
  }, N = b(n), le = l.reveal == null ? 1 : zn(l.reveal);
  let oe = N.col, R = N.ids;
  if (le < 1) {
    const B = l.prev ? b(l.prev) : null, Y = le * (u + 12);
    oe = new Array(u * f), R = new Uint8Array(u * f);
    for (let Q = 0; Q < u * f; Q++) {
      const U = Q % u, j = Q / u | 0;
      (l.reduce ? le : zn((Y - U) / 12)) > Wn(U, j) ? (oe[Q] = N.col[Q], R[Q] = N.ids[Q]) : B ? (oe[Q] = B.col[Q], R[Q] = B.ids[Q]) : (oe[Q] = null, R[Q] = 255);
    }
  }
  return vc(oe, R, u, f, { oneBit: l.oneBit, ink: l.ink, paper: l.paper, snowInk: !1 });
}
function Lu(n, l, i) {
  const u = i.width, f = i.height, m = i.reveal == null ? 1 : zn(i.reveal), w = (R, B) => {
    const Y = bc(B, i);
    Au(R, Y, wc(Y, i));
  };
  if (n.clearRect(0, 0, u, f), m >= 1) {
    w(n, l);
    return;
  }
  if (i.prev && w(n, i.prev), i.reduce) {
    n.save(), n.globalAlpha = m, w(n, l), n.restore();
    return;
  }
  const L = n.canvas, b = L.__wxOff || (L.__wxOff = document.createElement("canvas"));
  (b.width !== L.width || b.height !== L.height) && (b.width = L.width, b.height = L.height);
  const N = b.getContext("2d");
  N.setTransform(n.getTransform()), N.clearRect(0, 0, u, f), w(N, l);
  const le = m * (u + 64) - 64, oe = N.createLinearGradient(le, 0, le + 64, 0);
  oe.addColorStop(0, "rgba(0,0,0,1)"), oe.addColorStop(1, "rgba(0,0,0,0)"), N.globalCompositeOperation = "destination-in", N.fillStyle = oe, N.fillRect(0, 0, u, f), N.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(b, 0, 0), n.restore();
}
function Au(n, l, i) {
  const { W: u, H: f, S: m, C: w, cw: L, yb: b, glowAt: N, soft: le, tw: oe, sy: R } = l, B = (v, ke) => {
    const Ce = Es(v);
    return "rgba(" + Ce[0] + "," + Ce[1] + "," + Ce[2] + "," + Math.max(0, Math.min(1, ke)).toFixed(3) + ")";
  }, Y = (v, ke) => {
    const Ce = n.createLinearGradient(0, 0, u, 0);
    Ce.addColorStop(0, v[0]);
    for (let qe = 0; qe < v.length - 1; qe++) {
      const y = (qe + ke) * L, S = (y - oe / 2) / u, M = (y + oe / 2) / u;
      S > 0 && S < 1 && Ce.addColorStop(S, v[qe]), M > 0 && M < 1 && Ce.addColorStop(M, v[qe + 1]);
    }
    return Ce.addColorStop(1, v[v.length - 1]), Ce;
  }, Q = Math.max(24, Math.ceil(u / 4)), U = (v, ke) => {
    n.beginPath();
    for (let Ce = 0; Ce <= Q; Ce++) {
      const qe = u * Ce / Q, y = v == null ? 0 : b(qe) + v;
      Ce ? n.lineTo(qe, y) : n.moveTo(qe, y);
    }
    for (let Ce = Q; Ce >= 0; Ce--) {
      const qe = u * Ce / Q;
      n.lineTo(qe, b(qe) + ke);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = Y(m.filter((v) => !v.night).map((v) => v.sky), 0.75), n.fillRect(0, 0, u, f);
  const j = n.createLinearGradient(0, 0, u, 0);
  for (let v = 0; v <= 64; v++) {
    const ke = N(u * v / 64);
    j.addColorStop(v / 64, B(ke.c, Math.min(1, ke.a)));
  }
  n.fillStyle = j;
  for (let v = 0; v < 8; v++)
    n.globalAlpha = 1 - v / 8, U(v * 2 * R, (v + 1) * 2 * R);
  n.fillStyle = Y(m.filter((v) => v.night).map((v) => v.sky), 1.25);
  const X = Math.max(0.5, le), W = 6;
  n.globalAlpha = 1, U(null, -X);
  for (let v = 0; v < W; v++)
    n.globalAlpha = 1 - (v + 0.5) / W, U(-X + 2 * X * v / W, -X + 2 * X * (v + 1) / W);
  n.globalAlpha = 1;
  const K = new Path2D(yu), ie = new Path2D(xu), _ = new Path2D(wu), z = new Path2D(ku);
  n.fillStyle = w.star, i.stars.forEach((v) => {
    n.globalAlpha = v.o, v.big ? (n.save(), n.translate(v.x, v.y), n.scale(v.size, v.size), n.fill(K), n.restore()) : (n.beginPath(), n.arc(v.x, v.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const ge = Vt(w.sun, "#ffffff", 0.55);
  i.suns.forEach((v) => {
    const ke = n.createRadialGradient(v.x, v.y, 0, v.x, v.y, v.halo);
    ke.addColorStop(0, B(ge, 0.42)), ke.addColorStop(0.7, B(ge, 0)), n.fillStyle = ke, n.beginPath(), n.arc(v.x, v.y, v.halo, 0, Math.PI * 2), n.fill();
    const Ce = n.createLinearGradient(0, v.y - v.rad, 0, v.y + v.rad);
    Ce.addColorStop(0.6, w.sun), Ce.addColorStop(1, w.sunEdge), n.fillStyle = Ce, n.beginPath(), n.arc(v.x, v.y, v.rad, 0, Math.PI * 2), n.fill();
  });
  const Se = Vt(w.moon, "#ffffff", 0.6);
  i.moons.forEach((v) => {
    n.save(), n.translate(v.x - v.d / 2, v.y - v.d / 2), n.scale(v.d / 46, v.d / 46);
    const ke = n.createLinearGradient(0, 6, 0, 40);
    ke.addColorStop(0, Se), ke.addColorStop(1, w.moon), n.fillStyle = ke, n.fill(ie), n.restore();
  }), i.clouds.forEach((v) => {
    n.save(), n.globalAlpha = v.o, n.translate(v.x, v.y), n.scale(v.w / 46, v.h / 30.66), n.translate(-4, -9.67), n.fillStyle = v.fill, n.fill(_), n.restore();
  }), i.fogs.forEach((v) => {
    const ke = n.createLinearGradient(v.x, 0, v.x + v.w, 0);
    ke.addColorStop(0, B(v.c, 0)), ke.addColorStop(0.25, B(v.c, v.a)), ke.addColorStop(0.75, B(v.c, v.a)), ke.addColorStop(1, B(v.c, 0)), n.fillStyle = ke, n.fillRect(v.x, v.y, v.w, 6 * R);
  }), n.fillStyle = w.rain, i.drops.forEach((v) => {
    n.save(), n.globalAlpha = v.o, n.translate(v.x, v.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = w.snow, i.flakes.forEach((v) => {
    n.globalAlpha = v.o, n.beginPath(), n.arc(v.x, v.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = w.sun, i.bolts.forEach((v) => {
    n.save(), n.globalAlpha = v.o, n.translate(v.x, v.y), n.fill(z), n.restore();
  }), n.restore();
}
function _u(n, l) {
  var xd, yd, kd, Md, Cd, Sd, Td;
  const i = (e) => n.getElementById(e), u = i("workoutView"), f = i("workoutNameInput");
  let m = !0;
  const w = i("homeClock");
  function L() {
    w && (w.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  L(), setInterval(L, 15e3);
  const b = i("createFlow"), N = i("createMovementsSlot"), le = i("createTimingSlot"), oe = i("createFinishSlot"), R = i("movementStepSummary"), B = i("timingStepSummary"), Y = i("finishStepSummary"), Q = i("continueToTiming"), U = i("continueToFinish"), j = i("finishMoveButton");
  let X = !1, W = [];
  function K(e) {
    !e || W.some((o) => o.node === e) || W.push({ node: e, parent: e.parentNode, next: e.nextSibling });
  }
  function ie(e, o) {
    e && (K(e), o.appendChild(e));
  }
  function _() {
    [...W].reverse().forEach(({ node: e, parent: o, next: r }) => {
      o && (r && r.parentNode === o ? o.insertBefore(e, r) : o.appendChild(e));
    }), W = [];
  }
  function z(e) {
    n.querySelectorAll(".createStep").forEach((o) => {
      o.classList.toggle("active", o.dataset.createStep === e);
    }), e === "timing" && (X = !0), ge();
  }
  function ge() {
    var te, ae;
    if (!st) return;
    Ve[pt];
    const e = at.filter(($) => !$.hidden), o = e.filter(($) => $.kind !== "rest").length, r = e.filter(($) => $.kind === "rest").length;
    R.textContent = o ? o + " movement" + (o === 1 ? "" : "s") + (r ? " · " + r + " rest" + (r === 1 ? "" : "s") : "") : "No movements yet";
    const c = o > 0, h = n.querySelector('[data-open-step="timing"]'), k = n.querySelector('[data-open-step="finish"]');
    h.disabled = !c, Q.disabled = !c, B.textContent = c ? Cn(S.value) + " · " + jt(M.value) + " movement · " + jt(E.value) + " rest" : "Add a movement first", k.disabled = !(c && X);
    const A = ((f == null ? void 0 : f.value) || "").trim(), P = [];
    (te = i("includeWarmupPreset")) != null && te.checked && P.push("warm-up"), (ae = i("includeCooldownPreset")) != null && ae.checked && P.push("cooldown"), Y.textContent = A ? A + (P.length ? " · " + P.join(" + ") : "") : P.length ? P.join(" + ") : "Name and optional extras";
  }
  function Se() {
    var Me, ze, Te;
    b.hidden = !1, X = !1;
    const e = n.querySelector(".editNameRow"), o = i("createMoveOptions"), r = n.querySelector(".timeTiles"), c = i("routineSummaryModal"), h = n.querySelector(".tempoRevealRow"), k = i("tempoExperiment"), A = (Me = i("warmupList")) == null ? void 0 : Me.closest("section"), P = i("movementCreatorLaunch"), te = i("movementCreator"), ae = (ze = i("strengthList")) == null ? void 0 : ze.closest("section"), $ = (Te = i("cooldownList")) == null ? void 0 : Te.closest("section");
    [o == null ? void 0 : o.querySelector(".createExtras"), A, P, te, ae, $].forEach((ye) => ye && ie(ye, N)), [o, r, c, h, k].forEach((ye) => ie(ye, le)), ie(e, oe), z("movements"), ge();
  }
  function v() {
    _(), b.hidden = !0, n.querySelectorAll(".createStep").forEach((e) => e.classList.remove("active"));
  }
  n.querySelectorAll("[data-open-step]").forEach((e) => e.addEventListener("click", () => {
    e.disabled || z(e.dataset.openStep);
  })), Q.addEventListener("click", () => {
    Q.disabled || z("timing");
  }), U.addEventListener("click", () => z("finish")), j.addEventListener("click", () => i("saveWorkoutEdit").click());
  const ke = { home: i("homeView"), workout: i("workoutView"), settings: i("settingsView") }, Ce = i("homeNav"), qe = i("settingsNav");
  function y(e) {
    Object.entries(ke).forEach(([o, r]) => r.classList.toggle("active", o === e)), Ce.classList.toggle("active", e === "home"), qe.classList.toggle("active", e === "settings"), e === "home" && setTimeout(Ei, 400), e === "settings" && (requestAnimationFrame(() => x(n.querySelector(".tab.active"), !1)), Rt());
  }
  const S = i("totalTime"), M = i("workTime"), E = i("restTime"), de = i("totalOut"), q = i("workOut"), ee = i("restOut"), re = i("totalFill"), pe = i("workFill"), We = i("restFill"), Xe = i("roundsInput"), vt = i("roundsFill"), an = i("roundsOut"), En = i("totalLabel"), Ft = i("routineSummaryModal"), Ze = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let Mt = Ze.map((e) => ({ ...e })), at = [
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
  const on = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let bn = on.map((e) => ({ ...e }));
  const xi = {
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
  }, rt = io(l.data), Ve = rt.profiles;
  let pt = Ve[rt.selected] ? rt.selected : rt.order.find((e) => Ve[e]) || "kettlebell";
  function io(e) {
    const o = e && typeof e == "object" ? JSON.parse(JSON.stringify(e)) : {}, r = o.profiles && Object.keys(o.profiles).length ? o.profiles : JSON.parse(JSON.stringify(xi)), c = (Array.isArray(o.order) ? o.order : Object.keys(r)).filter((h) => r[h]);
    return Object.keys(r).forEach((h) => {
      c.includes(h) || c.push(h);
    }), {
      v: 1,
      profiles: r,
      order: c,
      selected: o.selected || c[0],
      history: Array.isArray(o.history) ? o.history : [],
      checkins: (Array.isArray(o.checkins) ? o.checkins : yi(o.energy)).map(jo),
      settings: { ...o.settings || {} }
    };
  }
  function yi(e) {
    if (!Array.isArray(e)) return [];
    const o = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], r = [];
    return e.forEach((c) => {
      const h = new Date(c.at);
      if (isNaN(h)) return;
      const k = h.getFullYear() + "-" + String(h.getMonth() + 1).padStart(2, "0") + "-" + String(h.getDate()).padStart(2, "0"), A = h.getHours() < 14 ? "morning" : "evening";
      if (r.some((te) => te.date === k && te.slot === A)) return;
      const P = o.indexOf(c.value) + 1;
      P > 0 && r.push({ date: k, slot: A, mood: null, energy: P, at: c.at });
    }), r;
  }
  function jo(e) {
    if (e.scale === 100) return e;
    const o = (r) => r == null ? null : Math.round((Number(r) - 1) / 5 * 100);
    return { ...e, mood: o(e.mood), energy: o(e.energy), scale: 100 };
  }
  function rn() {
    st || (rt.selected = pt, rt.order = rt.order.filter((e) => Ve[e] && e !== mt), l.save(rt));
  }
  function Je() {
    return rt.settings;
  }
  function Dn(e) {
    const o = Ve[e];
    if (!o) return;
    pt = e;
    const r = i("workoutNameInput");
    if (r && (r.value = o.name), S.value = o.total, M.value = o.work, E.value = o.rest, Xe.value = o.rounds || 1, o.customSequence) {
      const c = (o.sequence || []).map((k) => ({ ...k })), h = (k) => c.filter((A) => A.presetRole === k).map(({ presetRole: A, ...P }) => P);
      Mt = (o.warmup || h("warmup")).map((k) => ({ ...k })), bn = (o.cooldown || h("cooldown")).map((k) => ({ ...k })), at = c.filter((k) => !k.presetRole), No(o.preset || "movement", !1);
    } else
      S.min = 3, S.max = 40, S.step = 1, M.min = 20, M.max = 60, M.step = 5, E.min = 5, E.max = 30, E.step = 5, Mt = (o.warmup || Ze).map((c) => ({ ...c })), bn = (o.cooldown || on).map((c) => ({ ...c })), at = o.strength.map((c) => Array.isArray(c) ? (([h, k, A, P = !1]) => ({ id: h, name: k, group: A, kind: "work", hidden: !!P }))(c) : { ...c });
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((c) => c.classList.toggle("active", c.dataset.workout === e)), O();
  }
  function ki(e, o, r) {
    const c = e.getBoundingClientRect(), h = c.width / 2, k = c.height / 2, A = o - h, P = r - k;
    let te = 1 / 0, ae = 1 / 0;
    A !== 0 && (te = h / Math.abs(A)), P !== 0 && (ae = k / Math.abs(P));
    const $ = Math.min(Math.max(1 / Math.min(te, ae), 0), 1);
    let Z = Math.atan2(P, A) * (180 / Math.PI) + 90;
    return Z < 0 && (Z += 360), { edge: $, angle: Z };
  }
  function bt(e, o, r = !1) {
    const c = e.getBoundingClientRect(), h = o.clientX - c.left, k = o.clientY - c.top, { edge: A, angle: P } = ki(e, h, k), te = r ? 100 : A * 100;
    e.style.setProperty("--edge-proximity", te.toFixed(3)), e.style.setProperty("--cursor-angle", P.toFixed(3) + "deg"), e.classList.toggle("borderGlowActive", r || te >= 30);
  }
  function Ee(e) {
    e.addEventListener("pointermove", (r) => bt(e, r, !1)), e.addEventListener("pointerenter", (r) => bt(e, r, !1)), e.addEventListener("pointerdown", (r) => bt(e, r, !0));
    const o = () => {
      e.classList.remove("borderGlowActive"), e.style.setProperty("--edge-proximity", "0");
    };
    e.addEventListener("pointerleave", o), e.addEventListener("pointerup", o), e.addEventListener("pointercancel", o);
  }
  Ee(i("addWorkoutPanel"));
  let st = !1, mt = null;
  function He(e) {
    return String(e ?? "").replace(/[&<>"']/g, (o) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[o]);
  }
  function ro(e) {
    return e.summary ? e.summary : e.customSequence ? Cn(e.total) + " · custom move" : Cn(e.total) + " · " + jt(e.work) + " / " + jt(e.rest) + " · warm-up + cooldown";
  }
  function Do(e, o) {
    var k;
    const r = document.createElement("article");
    r.className = "workoutPanel", r.dataset.workout = e, r.tabIndex = 0;
    const c = o.activityCount ?? (((k = o.sequence) == null ? void 0 : k.length) || 0);
    r.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + He(o.name) + '</div><div class="sub">' + He(ro(o)) + '</div><span class="sourceTag">' + He(o.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (c ? c + " activities" + ((o.rounds || 1) > 1 ? " × " + o.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + He(o.name) + "</div></div>";
    const h = i("addWorkoutPanel");
    return i("workoutGallery").insertBefore(r, h), Ee(r), r.addEventListener("click", (A) => {
      A.target.closest("button") || Dn(e);
    }), r.addEventListener("keydown", (A) => {
      (A.key === "Enter" || A.key === " ") && !A.target.closest("button") && (A.preventDefault(), Dn(e));
    }), r.querySelector(".seeWorkoutBtn").addEventListener("click", (A) => {
      A.stopPropagation(), Dn(e), Zr(!1);
    }), r.querySelector(".startWorkoutBtn").addEventListener("click", (A) => {
      A.stopPropagation(), Dn(e), Qs();
    }), r;
  }
  function ta() {
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.remove()), rt.order.forEach((e) => {
      Ve[e] && Do(e, Ve[e]);
    }), n.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.classList.toggle("active", e.dataset.workout === pt));
  }
  ta(), i("addWorkoutPanel").addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), i("addWorkoutPanel").click());
  }), i("addWorkoutPanel").addEventListener("click", () => {
    st = !0, mt = "custom-" + Date.now(), Ve[mt] = {
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
    }, Dn(mt), Zr(!0);
  });
  let De = [], je = 0, Zt = 0, un = 1, wn = !1, Bt = null, so = null, _t = !1, Vn = rt.settings.upcomingCount ?? "all", Ro = "movement";
  function Et(e, o, r) {
    return (Number(e) - o) / (r - o) * 100;
  }
  function jt(e) {
    const o = Math.max(0, Number(e) || 0);
    return o >= 3600 && o % 3600 === 0 ? o / 3600 + " hr" : o >= 60 && o % 60 === 0 ? o / 60 + " min" : o >= 60 ? Math.round(o / 60) + " min" : Math.round(o) + " sec";
  }
  function Cn(e) {
    const o = Math.max(0, Number(e) || 0);
    return o >= 60 && o % 60 === 0 ? o / 60 + " hr" : o >= 60 ? Math.floor(o / 60) + " hr " + o % 60 + " min" : o + " min";
  }
  function Gt() {
    re.style.width = Et(S.value, Number(S.min), Number(S.max)) + "%", pe.style.width = Et(M.value, Number(M.min), Number(M.max)) + "%", We.style.width = Et(E.value, Number(E.min), Number(E.max)) + "%", q.textContent = jt(M.value), ee.textContent = jt(E.value);
    const e = Number(Xe.value) || 1;
    vt.style.width = Et(e, 1, 10) + "%", En.textContent = e > 1 ? "Time per round" : "Total time";
  }
  function xn(e) {
    return e.filter((o) => !o.hidden);
  }
  function it(e) {
    const o = Math.max(0, Math.round(Number(e) || 0)), r = Math.floor(o / 3600), c = Math.floor(o % 3600 / 60), h = o % 60;
    return (r ? r + ":" + String(c).padStart(2, "0") : c) + ":" + String(h).padStart(2, "0");
  }
  function lo(e) {
    let o;
    try {
      o = new URL(String(e || "").trim());
    } catch {
      return null;
    }
    const r = o.hostname.replace(/^(www|m|music)\./, "");
    let c = null;
    if (r === "youtu.be") c = o.pathname.slice(1).split("/")[0];
    else if (/^youtube(-nocookie)?\.com$/.test(r))
      if (o.pathname === "/watch") c = o.searchParams.get("v");
      else {
        const P = o.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        P && (c = P[2]);
      }
    if (!c || !/^[\w-]{11}$/.test(c)) return null;
    const h = (P) => {
      if (!P) return 0;
      if (/^\d+$/.test(P)) return Number(P);
      const te = P.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return te ? (Number(te[1]) || 0) * 3600 + (Number(te[2]) || 0) * 60 + (Number(te[3]) || 0) : 0;
    }, k = h(o.searchParams.get("t") || o.searchParams.get("start")), A = h(o.searchParams.get("end"));
    return { id: c, start: k, end: A > k ? A : null };
  }
  function na(e, o) {
    if (e.useVideoLength === !1) return Math.max(5, Number(e.duration) || o || 300);
    const r = Number(e.start) || 0, c = Number(e.end) || Number(e.videoDuration) || 0;
    return c > r ? Math.round(c - r) : Number(e.duration) || 300;
  }
  function Oa(e, o) {
    const r = Math.max(0, Number(e) || 0);
    return Math.round(o === "hour" ? r * 3600 : o === "min" ? r * 60 : r);
  }
  function No(e, o = !0) {
    Ro = e, n.querySelectorAll(".createPresetBtn").forEach((c) => c.classList.toggle("active", c.dataset.movePreset === e));
    const r = Ve[pt];
    r && (r.preset = e), e === "work" ? (S.min = 30, S.max = 480, S.step = 30, M.min = 300, M.max = 7200, M.step = 300, E.min = 60, E.max = 1800, E.step = 60, o && (S.value = 60, M.value = 1500, E.value = 300), i("addMovementUnit").value = "min", i("addMovementDuration").value = 25, i("addRestUnit").value = "min", i("addRestDuration").value = 5) : (S.min = 3, S.max = 40, S.step = 1, M.min = 20, M.max = 60, M.step = 5, E.min = 5, E.max = 30, E.step = 5, o && (S.value = 20, M.value = 45, E.value = 15), i("addMovementUnit").value = "sec", i("addMovementDuration").value = 45, i("addRestUnit").value = "sec", i("addRestDuration").value = 30), Gt();
  }
  function C(e, o) {
    const r = Ro === "work";
    return e.map((c, h) => ({ ...c, id: o + "-" + h + "-" + Date.now().toString(36), useGlobalTiming: !r, duration: r ? 60 : Number(M.value) }));
  }
  function D() {
    const e = Ve[pt];
    e != null && e.customSequence && (e.includeWarmup = i("includeWarmupPreset").checked, e.includeCooldown = i("includeCooldownPreset").checked, e.includeWarmup && !Mt.length && (Mt = C(Ze, "warm")), e.includeCooldown && !bn.length && (bn = C(on, "cool")), O());
  }
  function F() {
    const e = i("upcomingCountSetting");
    if (!e) return;
    const o = Math.max(1, De.length - 1), r = Vn;
    e.innerHTML = "";
    for (let k = 1; k <= o; k++) {
      const A = document.createElement("option");
      A.value = String(k), A.textContent = String(k), e.appendChild(A);
    }
    const c = document.createElement("option");
    c.value = "all", c.textContent = "All", e.appendChild(c);
    const h = r === "all" ? "all" : String(Math.min(Number(r) || 1, o));
    e.value = h, Vn = h === "all" ? "all" : Number(h);
  }
  function O() {
    Number(S.value) * 60;
    const e = Number(M.value), o = Number(E.value), r = Ve[pt], c = !!(r != null && r.customSequence), h = (c ? !r.includeWarmup : r != null && r.warmupOff) ? [] : xn(Mt), k = xn(at), A = c && !r.includeCooldown ? [] : xn(bn);
    if (r && (r.total = Number(S.value), r.work = e, r.rest = o, r.rounds = Number(Xe.value) || 1, r.customSequence ? (r.sequence = at.map((we) => ({ ...we })), r.warmup = Mt.map((we) => ({ ...we })), r.cooldown = bn.map((we) => ({ ...we }))) : (r.strength = at.map((we) => ({ ...we })), r.warmup = Mt.map((we) => ({ ...we })), r.cooldown = bn.map((we) => ({ ...we })))), r != null && r.customSequence) {
      const we = [...h.map((tt) => ({ ...tt, section: "warmup" })), ...k, ...A.map((tt) => ({ ...tt, section: "cooldown" }))].map((tt) => {
        if (tt.kind === "video") return { ...tt, duration: na(tt, e), rest: 0 };
        if (tt.kind === "rest") {
          const en = tt.useGlobalTiming === !0 ? o : Number(tt.duration) || o;
          return { ...tt, duration: en, rest: 0 };
        }
        const Qt = tt.useGlobalTiming === !1 && Number(tt.duration) || e;
        return { ...tt, duration: Qt, rest: 0 };
      });
      r.autoRest && Number(r.autoRestDuration) > 0 ? (De = [], we.forEach((tt, Qt) => {
        De.push(tt);
        const en = we[Qt + 1];
        tt.kind !== "rest" && en && en.kind !== "rest" && De.push({
          id: "auto-rest-" + Qt,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(r.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : De = we;
    } else
      De = [...h.map((we) => ({ ...we, section: "warmup" })), ...k, ...A.map((we) => ({ ...we, section: "cooldown" }))].map((we) => we.kind === "video" ? { ...we, duration: na(we, e), rest: 0 } : we.kind === "rest" ? { ...we, duration: we.useGlobalTiming === !0 ? o : Number(we.duration) || o, rest: 0 } : { ...we, duration: we.useGlobalTiming === !1 && Number(we.duration) || e, rest: o }), De.forEach((we, tt) => {
        var Qt;
        ((Qt = De[tt + 1]) == null ? void 0 : Qt.kind) === "rest" && (we.rest = 0);
      }), De.length && (De[De.length - 1].rest = 0);
    const P = Math.max(1, Math.min(10, Number(Xe.value) || 1)), te = De, ae = (we) => P <= 1 ? null : we.section === "warmup" || we.presetRole === "warmup" ? "first" : we.section === "cooldown" || we.presetRole === "cooldown" ? "last" : we.kind === "video" && (we.videoRounds === "first" || we.videoRounds === "last") ? we.videoRounds : null, $ = (we) => !!ae(we), Z = te.filter((we) => !$(we)), Me = te.filter($), ze = Z.length, Te = Z.reduce((we, tt) => we + tt.duration + tt.rest, 0), ye = Me.reduce((we, tt) => we + tt.duration + tt.rest, 0), ve = [
      Me.some((we) => we.section === "warmup" || we.presetRole === "warmup") && "warm-up",
      Me.some((we) => we.section === "cooldown" || we.presetRole === "cooldown") && "cooldown",
      Me.some((we) => we.kind === "video" && !we.section && !we.presetRole) && "video"
    ].filter(Boolean), dt = ve.length > 1 ? ve.slice(0, -1).join(", ") + " & " + ve[ve.length - 1] : ve[0] || "";
    De = [];
    const ct = (we, tt) => {
      const Qt = ae(we);
      return !Qt || (Qt === "first" ? tt === 1 : tt === P);
    };
    for (let we = 1; we <= P; we++)
      if (te.filter((tt) => ct(tt, we)).forEach((tt, Qt) => De.push({ ...tt, id: tt.id + (P > 1 ? "-r" + we : ""), round: we, roundIndex: Qt })), we < P && ze)
        if (r != null && r.customSequence)
          De.push({ id: "round-break-" + we, name: "Rest", group: "Round " + (we + 1) + " next", kind: "rest", hidden: !1, duration: o, rest: 0, round: we, roundIndex: ze, roundBreak: !0 });
        else {
          const tt = De[De.length - 1];
          tt.rest = o, tt.roundBreakAfter = !0;
        }
    Gt();
    const Ae = De.reduce((we, tt) => we + tt.duration + tt.rest, 0), ut = Math.round(Te / 60), yt = Math.round(Ae / 60), Qe = P > 1 ? Cn(ut) + " × " + P + " rounds" + (ye ? " + " + jt(ye) + " " + dt : "") + " (" + Cn(yt) + ")" : Cn(yt), Ye = [h.length ? "warm-up" : "", A.length ? "cooldown" : ""].filter(Boolean), Xt = r != null && r.customSequence ? Qe + " · " + ze + " items" + (Ye.length && !(P > 1 && ye) ? " · " + Ye.join(" + ") : "") : Qe + " · " + jt(e) + " / " + jt(o) + (Ye.length && !(P > 1 && ye) ? " · " + Ye.join(" + ") : "");
    de.textContent = jt(Te);
    const gn = De.filter((we) => !we.roundBreak).length, Ht = P > 1 ? gn + " activities · " + P + " rounds" : ze + " activities";
    an.textContent = P > 1 ? P + " rounds · " + Cn(yt) + " total" : "1 round", i("roundsCount").textContent = P, n.querySelectorAll("[data-rounds-step]").forEach((we) => {
      we.disabled = Number(we.dataset.roundsStep) < 0 ? P <= 1 : P >= 10;
    }), r && (r.summary = Xt, r.activityCount = ze);
    const Fo = n.querySelector(".workoutPanel.active .sub");
    Fo && (Fo.textContent = Xt), Ft.textContent = Xt, tr(), n.querySelectorAll(".workoutPanel.active .activityCount").forEach((we) => we.textContent = Ht), Gt(), ht(), Si(), Zo(), F(), st && ge(), ke.workout.classList.contains("active") && !Bt && lt();
  }
  const he = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', be = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', me = {
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
  }, xe = (e) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (me[e] || "") + "</svg>";
  n.querySelectorAll("[data-icon]").forEach((e) => {
    e.innerHTML = xe(e.dataset.icon);
  });
  let ue = null, _e = null;
  function Oe(e) {
    return e = Math.max(1, Number(e) || 0), e >= 3600 && e % 3600 === 0 ? { value: e / 3600, unit: "hour" } : e >= 60 && e % 60 === 0 ? { value: e / 60, unit: "min" } : { value: e, unit: "sec" };
  }
  function Ke(e = !1) {
    const o = n.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    o && (o.focus({ preventScroll: !0 }), e && o.select());
  }
  function Ue(e, o, r = {}) {
    const c = e.kind === "rest", h = e.kind === "video", k = h ? e.useVideoLength !== !1 : c ? e.useGlobalTiming === !0 : e.useGlobalTiming !== !1, A = Number(c ? E.value : M.value), P = Oe(h ? e.useVideoLength === !1 ? e.duration : na({ ...e, useVideoLength: !0 }) : k ? A : e.duration || A), te = h && (Number(e.videoDuration) > 0 || Number(e.end) > 0), ae = h ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + He(e.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + He(e.autoName ? "" : e.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([Ae, ut]) => '<option value="' + Ae + '"' + ((e.videoRounds || "every") === Ae ? " selected" : "") + ">" + ut + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + He(e.name) + '" placeholder="' + (c ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + He(e.group) + '" placeholder="' + (c ? "Rest" : "e.g. Glutes + legs") + '"></label>', $ = h ? "Play the whole " + (Number(e.start) > 0 || Number(e.end) > 0 ? "clip" : "video") + (te ? " · " + it(na({ ...e, useVideoLength: !0 })) : "") : "Use global timing · " + jt(A), Z = document.createElement("div");
    Z.className = "moveRow editing" + (r.sheet ? " inSheet" : ""), Z.dataset.index = o, Z.dataset.id = e.id;
    const Me = r.isNew ?? (_e == null ? void 0 : _e.item) === e, ze = r.sheet ? '<div class="moveEditActions sheetActions">' + (Me ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (e.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + He(e.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (Me ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    Z.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (h ? " videoFields" : "") + '">' + ae + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (k ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + He($) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + P.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((Ae) => '<option value="' + Ae + '"' + (Ae === P.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[Ae] + "</option>").join("") + "</select></div></div>" + ze + "</div>";
    const Te = (Ae) => Z.querySelector("[data-f=" + Ae + "]"), ye = () => {
      const Ae = Te("global").checked;
      Te("dur").disabled = Ae, Te("unit").disabled = Ae, Z.querySelector(".creatorDurationRow").classList.toggle("isDisabled", Ae);
    };
    Te("global").addEventListener("change", ye), ye();
    const ve = () => {
      var Ae;
      if (r.sheet) {
        (Ae = r.onCancel) == null || Ae.call(r);
        return;
      }
      Me && Lt(), ue = null, O();
    }, dt = () => {
      var yt;
      if (h) {
        ct();
        return;
      }
      const Ae = Te("name").value.trim();
      if (!Ae) {
        Te("name").focus();
        return;
      }
      e.name = Ae, e.group = Te("group").value.trim() || (c ? "Rest" : "Movement");
      const ut = Te("global").checked;
      if (e.useGlobalTiming = ut, ut || (e.duration = Math.max(c ? 5 : 1, Oa(Te("dur").value, Te("unit").value))), r.sheet) {
        (yt = r.onSaved) == null || yt.call(r);
        return;
      }
      Me && (_e = null), ue = null, O(), Dt(Me ? c ? "Rest added" : "Movement added" : "Movement updated");
    }, ct = () => {
      var Ye;
      const Ae = Te("url").value.trim(), ut = lo(Ae);
      if (!ut) {
        Te("urlError").hidden = !1, Te("url").classList.add("invalid"), Te("url").focus();
        return;
      }
      const yt = ut.id !== e.videoId;
      e.url = Ae, e.videoId = ut.id, e.start = ut.start, e.end = ut.end, yt && (e.videoDuration = null, e.videoError = null);
      const Qe = Te("name").value.trim();
      e.autoName = !Qe, e.name = Qe || (yt ? "" : e.name) || e.videoTitle || "YouTube video", e.group = "Video", e.videoRounds = Te("rounds").value, e.useVideoLength = Te("global").checked, e.useVideoLength || (e.duration = Math.max(5, Oa(Te("dur").value, Te("unit").value))), r.sheet ? (Ye = r.onSaved) == null || Ye.call(r) : (Me && (_e = null), ue = null, O(), Dt(Me ? "Video added" : "Video updated")), (yt || !e.videoDuration || e.autoName && !e.videoTitle) && Tr(e);
    };
    if (h && Te("url").addEventListener("input", () => {
      Te("urlError").hidden = !0, Te("url").classList.remove("invalid");
    }), Z.querySelector("[data-a=cancel]").addEventListener("click", ve), Z.querySelector("[data-a=save]").addEventListener("click", dt), r.sheet && !Me) {
      Z.querySelector("[data-a=hide]").addEventListener("click", () => {
        var ut;
        return (ut = r.onHide) == null ? void 0 : ut.call(r);
      });
      const Ae = Z.querySelector("[data-a=remove]");
      a(Ae, Ae.querySelector(".removeFill"), 1200, () => {
        var ut;
        return (ut = r.onRemove) == null ? void 0 : ut.call(r);
      });
    }
    return Z.addEventListener("keydown", (Ae) => {
      Ae.key === "Escape" && (Ae.preventDefault(), Ae.stopPropagation(), ve()), Ae.key === "Enter" && Ae.target.matches("input") && (Ae.preventDefault(), dt());
    }), Z;
  }
  function Re(e, o) {
    const r = i(o);
    r.innerHTML = "", e.forEach((c, h) => {
      if (c === ue && !ua()) {
        r.appendChild(Ue(c, h));
        return;
      }
      const k = document.createElement("div");
      k.className = "moveRow" + (c.hidden ? " hidden" : "") + (c.kind === "rest" ? " restItem" : "") + (c.kind === "video" ? " videoItem" : "") + (ce(c) ? " noMeta" : ""), k.dataset.index = h, k.dataset.id = c.id;
      const A = c.kind === "rest" ? c.useGlobalTiming === !0 ? "Global timing" : jt(c.duration) : c.useGlobalTiming === !1 ? jt(c.duration) : "Global timing", P = c.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", te = c.kind === "video" ? c.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (c.useVideoLength === !1 ? "stops after " + jt(c.duration) : Number(c.videoDuration) > 0 || Number(c.end) > 0 ? it(na(c)) : "plays to the end") + (c.videoRounds === "first" ? " · first round only" : c.videoRounds === "last" ? " · last round only" : "") : c.group + " · " + A, ae = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + He(c.name) + '. Drag, or use the up and down arrow keys">' + he + "</button>", $ = '<div class="moveText"><div class="moveItemName">' + He(c.name) + P + '</div><div class="moveMeta">' + He(te) + "</div></div>", Z = (Te) => Te.addEventListener("keydown", (ye) => {
        var ct, Ae;
        if (ye.key !== "ArrowUp" && ye.key !== "ArrowDown") return;
        ye.preventDefault();
        const ve = e.indexOf(c), dt = ve + (ye.key === "ArrowUp" ? -1 : 1);
        dt < 0 || dt >= e.length || (e.splice(ve, 1), e.splice(dt, 0, c), O(), (Ae = (ct = i(o).children[dt]) == null ? void 0 : ct.querySelector(".dragHandle")) == null || Ae.focus());
      });
      if (ua()) {
        k.classList.add("phoneRow"), k.tabIndex = 0, k.setAttribute("role", "button"), k.setAttribute("aria-label", "Edit " + (c.name || "step")), k.innerHTML = ae + $ + '<span class="rowChevron" aria-hidden="true">›</span>';
        const Te = k.querySelector(".dragHandle");
        Te.addEventListener("pointerdown", (ye) => et(ye, k, r, e)), Z(Te), k.addEventListener("click", (ye) => {
          ye.target.closest(".dragHandle") || qr(c, e);
        }), k.addEventListener("keydown", (ye) => {
          ye.key === "Enter" && ye.target === k && (ye.preventDefault(), qr(c, e));
        }), r.appendChild(k);
        return;
      }
      k.innerHTML = ae + $ + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + He(c.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (c.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + He(c.name) + '"><span class="removeFill"></span><span class="removeLabel">' + be + "</span></button></div>", k.querySelector(".editBtn").addEventListener("click", () => {
        Lt(), ue = c, O(), Ke();
      }), k.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        c.hidden = !c.hidden, O();
      });
      const Me = k.querySelector(".removeBtn");
      a(Me, Me.querySelector(".removeFill"), 1200, () => {
        const Te = e.indexOf(c);
        Te < 0 || (e.splice(Te, 1), O(), Dt("Removed " + c.name, { label: "Undo", run: () => {
          e.splice(Math.min(Te, e.length), 0, c), O();
        } }));
      });
      const ze = k.querySelector(".dragHandle");
      ze.addEventListener("pointerdown", (Te) => et(Te, k, r, e)), Z(ze), r.appendChild(k);
    });
  }
  const Ie = () => {
    var e;
    return (e = window.matchMedia) == null ? void 0 : e.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, Pe = (e) => {
    var o;
    try {
      (o = navigator.vibrate) == null || o.call(navigator, e);
    } catch {
    }
  };
  function et(e, o, r, c) {
    if (e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const h = e.currentTarget, k = e.pointerId, A = !Ie();
    try {
      h.setPointerCapture(k);
    } catch {
    }
    const P = o.closest(".exerciseScroller") || aa(o), te = r.style.position;
    r.style.position = "relative";
    const ae = [...r.children].filter((nt) => nt.classList.contains("moveRow")), $ = ae.indexOf(o), Z = parseFloat(getComputedStyle(r).rowGap) || 8, Me = o.offsetHeight, ze = Me + Z, Te = ae.map((nt) => nt.offsetTop), ye = ae.map((nt) => nt.offsetHeight), ve = () => r.getBoundingClientRect().top, dt = r.getBoundingClientRect().width, ct = e.clientY - (ve() + Te[$]), Ae = e.clientX;
    let ut = e.clientY, yt = e.clientX, Qe = ve() + Te[$], Ye = 0, Xt = 0, gn = 0, Ht = 1, Fo = 0, we = $, tt = !1, Qt = 0, en = !1, ws = !1, Ui = Te[$];
    r.classList.add("reordering"), o.classList.add("dragging"), o.style.transition = "none", Pe(8);
    const xs = () => {
      const nt = ut - ct + Me / 2 - ve();
      let gt = 0;
      return ae.forEach((Nt, Fn) => {
        Fn !== $ && nt > Te[Fn] + ye[Fn] / 2 && gt++;
      }), gt;
    }, ys = () => {
      ae.forEach((nt, gt) => {
        if (gt === $) return;
        const Nt = $ < we && gt > $ && gt <= we ? -ze : $ > we && gt >= we && gt < $ ? ze : 0;
        nt.style.transform = Nt ? "translateY(" + Nt + "px)" : "";
      });
    }, Rr = () => {
      const nt = r.getBoundingClientRect(), gt = Math.abs(yt - Ae) > Math.max(80, dt * 0.3) || yt < nt.left - 24 || yt > nt.right + 24;
      gt !== tt && (tt = gt, o.classList.toggle("willReturn", gt), Pe(gt ? 10 : 4));
      const Nt = tt ? $ : xs();
      Nt !== we && (we = Nt, ys(), tt || Pe(4));
    }, Oo = () => {
      if (we === $) return Te[$];
      const nt = ae.filter((Nt, Fn) => Fn !== $);
      let gt = Te[0];
      for (let Nt = 0; Nt < we; Nt++) gt += nt[Nt].offsetHeight + Z;
      return gt;
    }, Yi = () => {
      const nt = A ? Math.min(Math.abs(Ye) / 40, 1) : 0, gt = A && !en ? Math.max(-3, Math.min(3, gn * 0.6)) : 0;
      o.style.transform = "translate(" + Xt.toFixed(2) + "px," + (Qe - (ve() + Te[$])).toFixed(2) + "px) rotate(" + gt.toFixed(2) + "deg) scale(" + (Ht * (1 - 0.04 * nt)).toFixed(4) + "," + (Ht * (1 + 0.06 * nt)).toFixed(4) + ")";
    }, $e = () => {
      Qt = requestAnimationFrame($e);
      const nt = yt - Ae, gt = en ? ve() + Ui : ut - ct, Nt = en ? 0 : tt ? nt * 0.9 : Math.max(-22, Math.min(22, nt * 0.22)), Fn = en ? 1 : tt ? 0.97 : 1.035;
      if (!A) {
        Qe = gt, Xt = en ? 0 : Nt, Ht = 1, Yi(), en && qt();
        return;
      }
      const ou = en ? 0.24 : 0.2, iu = en ? 0.62 : 0.68;
      Ye = (Ye + (gt - Qe) * ou) * iu, Qe += Ye, gn = (gn + (Nt - Xt) * 0.16) * 0.7, Xt += gn, Fo = (Fo + (Fn - Ht) * 0.22) * 0.6, Ht += Fo, Yi(), en && Math.abs(Ye) < 0.15 && Math.abs(gt - Qe) < 0.5 && Math.abs(Xt) < 0.5 && Math.abs(Ht - 1) < 3e-3 && qt();
    }, St = setInterval(() => {
      if (!P || en) return;
      const nt = P.getBoundingClientRect(), gt = 56, Nt = ut < nt.top + gt ? -10 : ut > nt.bottom - gt ? 10 : 0;
      Nt && (P.scrollTop += Nt, Rr());
    }, 30);
    function qt() {
      if (ws) return;
      ws = !0, cancelAnimationFrame(Qt);
      const nt = we !== $, gt = o.dataset.id;
      if (r.classList.remove("reordering"), ae.forEach((Fn) => {
        Fn.style.transition = "none", Fn.style.transform = "";
      }), o.classList.remove("dragging", "willReturn"), r.style.position = te, nt) {
        const [Fn] = c.splice($, 1);
        c.splice(we, 0, Fn);
      }
      O();
      const Nt = gt && r.querySelector('.moveRow[data-id="' + gt + '"]');
      Nt && A && Nt.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), nt && Dt("Order saved");
    }
    const tn = (nt) => {
      if (nt.pointerId === k) {
        if (nt.pointerType === "mouse" && nt.buttons === 0) {
          la();
          return;
        }
        ut = nt.clientY, yt = nt.clientX, Rr();
      }
    }, Hn = (nt) => {
      nt.pointerId === k && la();
    };
    function la() {
      en || (window.removeEventListener("pointermove", tn, !0), window.removeEventListener("pointerup", Hn, !0), window.removeEventListener("pointercancel", Hn, !0), h.removeEventListener("lostpointercapture", la), clearInterval(St), tt && we !== $ && (we = $, ys()), Ui = Oo(), en = !0, Pe(6), setTimeout(qt, 800));
    }
    window.addEventListener("pointermove", tn, !0), window.addEventListener("pointerup", Hn, !0), window.addEventListener("pointercancel", Hn, !0), h.addEventListener("lostpointercapture", la), Qt = requestAnimationFrame($e), Yi();
  }
  function ht() {
    var h, k, A, P;
    const e = Ve[pt], o = (h = i("warmupList")) == null ? void 0 : h.closest("section"), r = (k = i("cooldownList")) == null ? void 0 : k.closest("section"), c = (P = (A = i("strengthList")) == null ? void 0 : A.closest("section")) == null ? void 0 : P.querySelector(".sectionTitle");
    e != null && e.customSequence ? (o && (o.hidden = !e.includeWarmup), r && (r.hidden = !e.includeCooldown), c && (c.textContent = "Move sequence")) : (o && (o.hidden = !!(e != null && e.warmupOff)), r && (r.hidden = !1), c && (c.textContent = "Kettlebell work")), Re(Mt, "warmupList"), Re(at, "strengthList"), Re(bn, "cooldownList");
  }
  function Lt() {
    if (!_e) return;
    const { item: e, arr: o } = _e;
    _e = null;
    const r = o.indexOf(e);
    r >= 0 && o.splice(r, 1), ue === e && (ue = null);
  }
  function wt(e) {
    return e.id === "warmupList" ? { arr: Mt, kind: "warmup", group: "Warm-up" } : e.id === "cooldownList" ? { arr: bn, kind: "cooldown", group: "Cooldown" } : { arr: at, kind: "work", group: "" };
  }
  function Kt(e, o) {
    const r = wt(o), c = Date.now().toString(36);
    return e === "video" ? { id: "video-" + c, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : e === "rest" ? { id: "rest-" + c, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(E.value) } : { id: "movement-" + c, name: "", group: r.group, kind: r.kind, hidden: !1, useGlobalTiming: !0, duration: Number(M.value) };
  }
  const Sn = "cubic-bezier(.34,1.46,.64,1)";
  function jn(e, o) {
    if (Ie() || !e) {
      o();
      return;
    }
    const r = (k) => {
      var A;
      return ((A = k.dataset) == null ? void 0 : A.id) || k;
    }, c = () => [...e.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], h = new Map(c().map((k) => [r(k), k.getBoundingClientRect().top]));
    o(), c().forEach((k) => {
      const A = h.get(r(k));
      if (A === void 0) return;
      const P = A - k.getBoundingClientRect().top;
      Math.abs(P) < 0.5 || k.animate([{ transform: "translateY(" + P + "px)" }, { transform: "none" }], { duration: 440, easing: Sn });
    });
  }
  function Rn(e, o) {
    if (!e || Ie()) return;
    const r = e.offsetHeight, c = Math.max(0, r - (o || 0));
    e.animate([{ clipPath: "inset(0 0 " + c + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: Sn });
  }
  function Gn(e, o, r, c) {
    const { arr: h } = wt(o), k = Kt(e, o);
    h.splice(Math.max(0, Math.min(r, h.length)), 0, k), _e = { item: k, arr: h }, ue = k, jn(o.closest(".exerciseScroller,.createStepSlot") || o, () => O());
    const A = o.querySelector(".moveRow.editing");
    return Rn(A, c), Ke(e === "rest"), A;
  }
  function aa(e) {
    for (let o = e; o && o.nodeType === 1; o = o.parentElement) {
      const r = getComputedStyle(o).overflowY;
      if (/(auto|scroll)/.test(r) && o.scrollHeight > o.clientHeight) return o;
    }
    return null;
  }
  const qa = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function Bo(e, o) {
    const r = document.createElement("div");
    return r.className = "addGhost" + (e === "movement" ? "" : " rest"), r.innerHTML = '<span class="addGhostGrip">' + he + '</span><span class="addGhostText"><strong>' + He(o[0]) + "</strong><small>" + He(o[1]) + "</small></span>", i("workoutModal").appendChild(r), r;
  }
  function pn(e) {
    e.classList.add("leaving"), setTimeout(() => e.remove(), 180);
  }
  function ft(e, o, r, c) {
    (ue || _e) && (Lt(), ue = null, O());
    const h = e.getBoundingClientRect(), k = Bo(o, qa[o]);
    k.setAttribute("aria-hidden", "true"), k.style.width = h.width + "px", k.style.height = h.height + "px", k.style.transform = "translate(" + h.left + "px," + h.top + "px)", e.classList.add("lifting");
    const A = aa(e);
    return Un({
      ghost: k,
      origin: h,
      sx: r,
      sy: c,
      scroller: A,
      column: e.closest(".exerciseScroller,.createFlow") || A,
      home: () => e.getBoundingClientRect(),
      onDrop: (P, te, ae) => {
        pn(k), e.classList.remove("lifting"), Gn(o, P, te, ae);
      },
      onReturn: () => {
        pn(k), e.classList.remove("lifting");
      }
    });
  }
  function Un({ ghost: e, origin: o, sx: r, sy: c, scroller: h, column: k, home: A, onDrop: P, onReturn: te, rowLook: ae = !1 }) {
    var Yi;
    const $ = !Ie(), Z = ((Yi = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : Yi.offsetHeight) || 80, Me = r - o.left, ze = c - o.top, Te = 44;
    let ye = r, ve = c, dt = o.left, ct = o.top, Ae = 0, ut = 0, yt = !$, Qe = null, Ye = null, Xt = -1, gn = 0, Ht = null;
    const Fo = () => ["warmupList", "strengthList", "cooldownList"].map(($e) => i($e)).filter(($e) => $e && $e.getClientRects().length && !$e.closest("[hidden]")), we = ($e) => {
      if ($e === Qe) return;
      Qe = $e, e.classList.toggle("overList", !!$e || ae);
      const St = $e ? $e.getBoundingClientRect().width : o.width;
      e.style.width = St + "px", e.style.height = ($e ? Z : o.height) + "px";
    }, tt = ($e) => {
      $e.classList.add("leaving"), $e.style.height = "0px", $e.style.marginTop = "-8px", setTimeout(() => $e.remove(), $ ? 320 : 0);
    }, Qt = ($e, St, qt) => {
      if (Ye && Ye.parentNode === $e && Xt === qt || (Ye && (tt(Ye), Ye = null, Xt = -1), !$e)) return;
      const tn = document.createElement("div");
      tn.className = "dropSlot", $e.insertBefore(tn, St), Ye = tn, Xt = qt, tn.getBoundingClientRect(), tn.style.height = Z + "px", tn.style.marginTop = "0px";
    }, en = () => {
      let $e = null, St = 1 / 0;
      for (const la of Fo()) {
        const nt = la.getBoundingClientRect();
        if (ye < nt.left - 48 || ye > nt.right + 48) continue;
        const gt = nt.top - 28, Nt = nt.bottom + 28, Fn = ve < gt ? gt - ve : ve > Nt ? ve - Nt : 0;
        Fn < St && (St = Fn, $e = la);
      }
      const qt = k == null ? void 0 : k.getBoundingClientRect(), Hn = qt && ye >= qt.left && ye <= qt.right && ve >= qt.top && ve <= qt.bottom || St === 0 ? $e : null;
      if (Hn) {
        const la = [...Hn.children].filter((gt) => gt.classList.contains("moveRow"));
        let nt = la.findIndex((gt) => {
          const Nt = gt.getBoundingClientRect();
          return ve < Nt.top + Nt.height / 2;
        });
        nt < 0 && (nt = la.length), Qt(Hn, la[nt] || null, nt);
      } else Qt(null);
      we(Hn);
    }, ws = () => {
      if (Ht) return Ht.aim();
      if (Qe) {
        const $e = Qe.getBoundingClientRect();
        let St = ve - Z / 2;
        return Ye && (St = St * 0.6 + Ye.getBoundingClientRect().top * 0.4), { x: $e.left, y: St };
      }
      return { x: ye - Me, y: ve - ze };
    }, Ui = ($e, St, qt, tn) => {
      e.style.transform = "translate(" + dt + "px," + ct + "px) rotate(" + $e + "deg) rotate(" + St + "rad) scale(" + qt + "," + tn + ") rotate(" + -St + "rad)";
    }, xs = () => {
      if (gn = requestAnimationFrame(xs), !yt) {
        const nt = ye - r, gt = ve - c, Nt = Math.min(Math.hypot(nt, gt) / Te, 1);
        dt = o.left + nt * 0.35, ct = o.top + gt * 0.35, Ui(0, Math.atan2(gt, nt), 1 + 0.155 * Nt, 1 - 0.1 * Nt);
        return;
      }
      const $e = ws();
      if (!$) {
        dt = $e.x, ct = $e.y, Ui(0, 0, 1, 1), Ht && (cancelAnimationFrame(gn), Ht.done());
        return;
      }
      const St = Ht ? Ht.k : 0.17, qt = Ht ? Ht.d : 0.7;
      Ae = (Ae + ($e.x - dt) * St) * qt, ut = (ut + ($e.y - ct) * St) * qt, dt += Ae, ct += ut;
      const tn = Math.hypot(Ae, ut), Hn = Math.min(tn / 48, 1), la = Qe || Ht ? 0 : Math.max(-5, Math.min(5, Ae * 0.32));
      Ui(la, Math.atan2(ut, Ae), 1 + 0.1 * Hn, 1 - 0.063 * Hn), Ht && tn < 0.15 && Math.hypot($e.x - dt, $e.y - ct) < 0.6 && (cancelAnimationFrame(gn), Ht.done());
    }, ys = setInterval(() => {
      if (!h || Ht) return;
      const $e = h.getBoundingClientRect(), St = 64, qt = ve < $e.top + St ? -($e.top + St - ve) / 4 : ve > $e.bottom - St ? (ve - ($e.bottom - St)) / 4 : 0;
      qt && (h.scrollTop += Math.max(-18, Math.min(18, qt)), en());
    }, 30);
    gn = requestAnimationFrame(xs);
    let Rr = !1;
    const Oo = ($e, St) => {
      if (Rr) return;
      Rr = !0, cancelAnimationFrame(gn);
      const qt = Ye ? Ye.offsetHeight : Z;
      !$e && Ye && (Ye.remove(), Ye = null), $e ? P($e, St, qt) : te();
    };
    return {
      move($e, St) {
        ye = $e, ve = St, !yt && Math.hypot(ye - r, ve - c) > Te && (yt = !0, Ae = (ye - r) * 0.085, ut = (ve - c) * 0.085), yt && en();
      },
      drop($e) {
        clearInterval(ys);
        const St = Qe, qt = Xt;
        if (!$e && St && Ye) {
          const tn = Ye;
          Ht = { k: 0.24, d: 0.62, aim: () => {
            const Hn = tn.getBoundingClientRect();
            return { x: Hn.left, y: Hn.top };
          }, done: () => Oo(St, qt) }, setTimeout(() => Oo(St, qt), 650), $ || (cancelAnimationFrame(gn), Oo(St, qt));
          return;
        }
        Qt(null), we(null), Ht = { k: 0.2, d: 0.66, aim: () => {
          const tn = A();
          return { x: tn.left, y: tn.top };
        }, done: () => Oo(null) }, setTimeout(() => Oo(null), 650), $ || (cancelAnimationFrame(gn), Oo(null));
      }
    };
  }
  function da(e, o) {
    let r = !1;
    e.addEventListener("click", (c) => {
      if (r) {
        r = !1, c.preventDefault();
        return;
      }
      if (ua()) {
        Uo(o);
        return;
      }
      const h = i("strengthList"), k = Gn(o, h, wt(h).arr.length, 0);
      k == null || k.scrollIntoView({ block: "nearest", behavior: Ie() ? "auto" : "smooth" });
    }), e.addEventListener("pointerdown", (c) => {
      if (c.button !== void 0 && c.button !== 0) return;
      const h = c.pointerId, k = c.clientX, A = c.clientY;
      let P = null, te = !1;
      try {
        e.setPointerCapture(h);
      } catch {
      }
      const ae = (ve) => {
        if (ve.pointerId === h) {
          if (ve.pointerType === "mouse" && ve.buttons === 0) {
            ye(!1);
            return;
          }
          if (!P) {
            if (Math.hypot(ve.clientX - k, ve.clientY - A) < 6) return;
            P = ft(e, o, k, A);
          }
          P.move(ve.clientX, ve.clientY);
        }
      }, $ = (ve) => {
        ve.pointerId === h && ye(!1);
      }, Z = (ve) => {
        ve.pointerId === h && ye(!0);
      }, Me = () => ye(!1), ze = () => ye(!0), Te = (ve) => {
        ve.key === "Escape" && P && (ve.preventDefault(), ve.stopPropagation(), ye(!0));
      };
      function ye(ve) {
        if (!te && (te = !0, window.removeEventListener("pointermove", ae, !0), window.removeEventListener("pointerup", $, !0), window.removeEventListener("pointercancel", Z, !0), window.removeEventListener("keydown", Te, !0), window.removeEventListener("blur", ze), e.removeEventListener("lostpointercapture", Me), P)) {
          const dt = P;
          P = null, r = !0, setTimeout(() => {
            r = !1;
          }, 0), dt.drop(ve);
        }
      }
      window.addEventListener("pointermove", ae, !0), window.addEventListener("pointerup", $, !0), window.addEventListener("pointercancel", Z, !0), window.addEventListener("keydown", Te, !0), window.addEventListener("blur", ze), e.addEventListener("lostpointercapture", Me);
    });
  }
  const ca = (xd = window.matchMedia) == null ? void 0 : xd.call(window, "(max-width: 620px)");
  function ua() {
    var e;
    return !!((e = window.matchMedia) != null && e.call(window, "(max-width: 620px)").matches);
  }
  const Go = (e) => e.charAt(0).toUpperCase() + e.slice(1), Sa = (e) => e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "movement";
  let hn = null, Pt = null;
  function Mi(e, o, r, c) {
    sn(), i("sheetTitle").textContent = e;
    const h = i("sheetBody");
    h.innerHTML = "", h.appendChild(o), hn = r || null, i("sheet").setAttribute("aria-hidden", "false"), i("sheetScrim").classList.add("open"), i("sheet").classList.add("open"), setTimeout(() => {
      if (!i("sheet").classList.contains("open") || !h.contains(o)) return;
      const k = c ? h.querySelector("input[data-f=url],input[data-f=name]") : h.querySelector("button,input,select");
      k == null || k.focus({ preventScroll: !0 });
    }, Ie() ? 0 : 360);
  }
  function sn() {
    const e = i("sheet");
    if (!e.classList.contains("open")) return;
    e.classList.remove("open"), i("sheetScrim").classList.remove("open"), e.setAttribute("aria-hidden", "true"), e.contains(n.activeElement) && n.activeElement.blur();
    const o = hn;
    hn = null, o == null || o(), setTimeout(co, 0);
  }
  i("sheetScrim").addEventListener("click", sn), i("sheet").addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), sn());
  });
  function qr(e, o) {
    const r = Ue(e, o.indexOf(e), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        sn(), O(), Dt(Go(Sa(e)) + " updated");
      },
      onCancel: sn,
      onHide() {
        e.hidden = !e.hidden, sn(), O(), Dt((e.hidden ? "Hidden: " : "Showing: ") + e.name);
      },
      onRemove() {
        sn();
        const c = o.indexOf(e);
        c < 0 || (o.splice(c, 1), O(), Dt("Removed " + e.name, { label: "Undo", run: () => {
          o.splice(Math.min(c, o.length), 0, e), O();
        } }));
      }
    });
    Mi("Edit " + Sa(e), r, null, !1);
  }
  function Po() {
    const e = document.createElement("div");
    e.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([o, r, c, h]) => {
      const k = document.createElement("button");
      k.type = "button", k.className = "sheetChoice", k.innerHTML = '<span class="timeIcon" aria-hidden="true">' + xe(r) + "</span><span><strong>" + c + "</strong><small>" + h + "</small></span>", k.addEventListener("click", () => Uo(o)), e.appendChild(k);
    }), Mi("Add to the move", e, null, !1);
  }
  function Uo(e) {
    Pt && Yo();
    const o = Kt(e, i("strengthList")), r = Ue(o, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        sn(), Fs(o, e);
      },
      onCancel: sn
    });
    Mi("New " + Sa(o), r, null, !0);
  }
  const Wa = i("workoutModal").querySelector(".modalStatic"), er = { parent: Wa.parentNode, next: Wa.nextSibling };
  function Wr() {
    const e = document.createElement("div");
    e.className = "sheetSetup", e.appendChild(Wa);
    const o = document.createElement("button");
    o.type = "button", o.className = "primary sheetDone", o.textContent = "Done", o.addEventListener("click", sn), e.appendChild(o), Mi("Setup", e, () => {
      er.parent.insertBefore(Wa, er.next), tr();
    }, !1);
  }
  function tr() {
    var o, r;
    const e = i("setupSummaryName");
    e && (e.textContent = (((o = i("workoutNameInput")) == null ? void 0 : o.value) || "").trim() || ((r = Ve[pt]) == null ? void 0 : r.name) || "Move", i("setupSummaryMeta").textContent = Ft.textContent);
  }
  i("setupSummary").addEventListener("click", Wr), i("addFab").addEventListener("click", Po);
  function zr() {
    const e = i("strengthList");
    return aa(e) || e.closest(".exerciseScroller");
  }
  function Ci() {
    const e = i("strengthList").getBoundingClientRect(), o = (zr() || i("strengthList")).getBoundingClientRect(), r = (Pt == null ? void 0 : Pt.ghost.offsetHeight) || 64;
    return { left: e.left, top: Math.max(o.top + 12, Math.min(o.bottom - r - 96, o.top + o.height * 0.55 - r / 2)), width: e.width, height: r };
  }
  function Fs(e, o) {
    var P;
    const r = Bo(o, [e.name || qa[o][0], "Drag into place"]);
    r.classList.add("overList", "hovering"), r.setAttribute("aria-label", (e.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const c = document.createElement("span");
    c.className = "addGhostActions", c.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + He(e.name) + '">✕</button>', r.appendChild(c), Pt = { item: e, type: o, ghost: r };
    const h = ((P = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : P.offsetHeight) || 64;
    r.style.width = i("strengthList").getBoundingClientRect().width + "px", r.style.height = h + "px";
    const k = Ci(), A = yn.querySelector(".modal").getBoundingClientRect().bottom;
    r.style.transform = "translate(" + k.left + "px," + A + "px)", r.getBoundingClientRect(), Ie() || (r.classList.add("rising"), setTimeout(() => r.classList.remove("rising"), 650)), r.style.transform = "translate(" + k.left + "px," + k.top + "px)", c.querySelector("[data-a=end]").addEventListener("click", Yo), c.querySelector("[data-a=discard]").addEventListener("click", qs), r.addEventListener("pointerdown", Os);
  }
  function Os(e) {
    if (!Pt || e.target.closest("button") || e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const { item: o, ghost: r } = Pt, c = e.pointerId;
    try {
      r.setPointerCapture(c);
    } catch {
    }
    r.classList.remove("hovering", "rising"), r.classList.add("held");
    const h = r.getBoundingClientRect(), k = zr(), A = Un({
      ghost: r,
      origin: { left: h.left, top: h.top, width: h.width, height: h.height },
      sx: e.clientX,
      sy: e.clientY,
      scroller: k,
      column: i("strengthList").closest(".exerciseScroller,.createFlow") || k,
      rowLook: !0,
      home: Ci,
      onDrop: (ye, ve, dt) => {
        Pt = null, pn(r), nr(o, ye, ve, dt);
      },
      onReturn: () => {
        r.classList.remove("held"), r.classList.add("hovering");
      }
    });
    let P = !1;
    const te = (ye) => {
      if (ye.pointerId === c) {
        if (ye.pointerType === "mouse" && ye.buttons === 0) {
          Te(!1);
          return;
        }
        A.move(ye.clientX, ye.clientY);
      }
    }, ae = (ye) => {
      ye.pointerId === c && Te(!1);
    }, $ = (ye) => {
      ye.pointerId === c && Te(!0);
    }, Z = () => Te(!1), Me = () => Te(!0), ze = (ye) => {
      ye.key === "Escape" && (ye.preventDefault(), Te(!0));
    };
    function Te(ye) {
      P || (P = !0, window.removeEventListener("pointermove", te, !0), window.removeEventListener("pointerup", ae, !0), window.removeEventListener("pointercancel", $, !0), window.removeEventListener("keydown", ze, !0), window.removeEventListener("blur", Me), r.removeEventListener("lostpointercapture", Z), A.drop(ye));
    }
    window.addEventListener("pointermove", te, !0), window.addEventListener("pointerup", ae, !0), window.addEventListener("pointercancel", $, !0), window.addEventListener("keydown", ze, !0), window.addEventListener("blur", Me), r.addEventListener("lostpointercapture", Z);
  }
  function nr(e, o, r, c) {
    const h = wt(o);
    e.kind !== "rest" && e.kind !== "video" && (e.kind = h.kind, h.group && (!e.group || e.group === "Movement") && (e.group = h.group)), h.arr.splice(Math.max(0, Math.min(r, h.arr.length)), 0, e), jn(o.closest(".exerciseScroller,.createStepSlot") || o, () => O()), Rn(o.querySelector('.moveRow[data-id="' + e.id + '"]'), c), Dt(Go(Sa(e)) + " added");
  }
  function Yo() {
    var c;
    if (!Pt) return;
    const { item: e, ghost: o } = Pt;
    Pt = null, pn(o);
    const r = i("strengthList");
    nr(e, r, wt(r).arr.length, 0), (c = r.querySelector('.moveRow[data-id="' + e.id + '"]')) == null || c.scrollIntoView({ block: "nearest", behavior: Ie() ? "auto" : "smooth" });
  }
  function qs() {
    if (!Pt) return;
    const e = Pt.ghost;
    Pt = null, pn(e), Dt("Discarded");
  }
  function Vr() {
    Pt && (Pt.ghost.remove(), Pt = null);
  }
  window.addEventListener("resize", () => {
    if (Pt != null && Pt.ghost.classList.contains("hovering")) {
      const e = Ci();
      Pt.ghost.style.width = e.width + "px", Pt.ghost.style.transform = "translate(" + e.left + "px," + e.top + "px)";
    }
  }), (yd = ca == null ? void 0 : ca.addEventListener) == null || yd.call(ca, "change", () => {
    sn(), Pt && !ua() && Yo(), ht();
  });
  {
    const e = i("workoutModal").querySelector(".modal");
    e.addEventListener("scroll", () => {
      (e.scrollTop || e.scrollLeft) && (e.scrollTop = 0, e.scrollLeft = 0);
    });
  }
  function co() {
    const e = i("workoutModal"), o = window.visualViewport;
    if (!e.classList.contains("open") || !ua()) {
      uo();
      return;
    }
    const r = o ? o.offsetTop : 0, c = o ? o.offsetLeft : 0, h = o ? o.width : window.innerWidth, k = o ? o.height : window.innerHeight;
    Object.assign(e.style, { right: "auto", bottom: "auto", width: h + "px", height: k + "px", top: r + "px", left: c + "px" });
    const A = e.getBoundingClientRect();
    Math.abs(A.top - r) > 0.5 && (e.style.top = 2 * r - A.top + "px"), Math.abs(A.left - c) > 0.5 && (e.style.left = 2 * c - A.left + "px");
  }
  function uo() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((e) => i("workoutModal").style.removeProperty(e));
  }
  (kd = window.visualViewport) == null || kd.addEventListener("resize", co), (Md = window.visualViewport) == null || Md.addEventListener("scroll", co), window.addEventListener("resize", co), window.addEventListener("scroll", co, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(co, 250));
  function Si() {
    at.length > 0;
    const e = i("addMovementBtn"), o = i("addRestBtn");
    e && (e.innerHTML = he + "<span>Add movement</span>"), o && (o.innerHTML = he + "<span>Add rest</span>");
    const r = i("addVideoBtn");
    r && (r.innerHTML = he + "<span>Add video</span>");
  }
  function Zo() {
    const e = i("useGlobalTiming").checked, o = i("addMovementDuration"), r = i("addMovementUnit");
    o.disabled = e, r.disabled = e, o.parentElement.style.opacity = e ? ".38" : "1", i("globalTimingValue").textContent = "Use global timing · " + jt(M.value);
    const c = i("useGlobalRestTiming").checked, h = i("addRestDuration"), k = i("addRestUnit");
    h.disabled = c, k.disabled = c, h.parentElement.style.opacity = c ? ".38" : "1", i("globalRestTimingValue").textContent = "Use global timing · " + jt(E.value);
  }
  let Ko = "movement";
  function Yn(e) {
    Ko = e;
    const o = i("movementFields"), r = i("restFields");
    o.hidden = e !== "movement", r.hidden = e !== "rest", i("movementCreatorHeading").textContent = "Add movement", i("movementCreator").setAttribute("aria-label", "Create movement"), Zo();
  }
  function ar() {
    Ve[pt];
    const e = st ? !0 : i("useGlobalTiming").checked, o = e ? Number(M.value) : Oa(
      i("addMovementDuration").value,
      i("addMovementUnit").value
    ), r = st ? !0 : i("useGlobalRestTiming").checked, c = r ? Number(E.value) : Oa(
      i("addRestDuration").value,
      i("addRestUnit").value
    );
    if (Ko === "rest") {
      const h = i("addRestTitle").value.trim() || "Rest", k = i("addRestGroup").value.trim() || "Rest";
      at.push({
        id: "rest-" + Date.now(),
        name: h,
        group: k,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: r,
        duration: Math.max(5, c || Number(E.value))
      }), O(), i("movementCreator").hidden = !0, i("addRestTitle").value = "Rest", i("addRestGroup").value = "Rest", Dt("Rest added"), st && (z("movements"), ge());
    } else {
      const h = i("addMovementInput").value.trim();
      if (!h) return;
      const k = i("addMovementGroup").value.trim() || "Movement";
      at.push({
        id: "movement-" + Date.now(),
        name: h,
        group: k,
        kind: "work",
        hidden: !1,
        useGlobalTiming: e,
        duration: Math.max(5, o || Number(M.value))
      }), i("addMovementInput").value = "", i("addMovementGroup").value = "", O(), i("movementCreator").hidden = !0, Dt("Movement added"), st && (z("movements"), ge());
    }
    Si();
  }
  let Ti = null;
  function Dt(e, o) {
    const r = i("toast");
    r.innerHTML = "";
    const c = document.createElement("span");
    if (c.textContent = e, r.appendChild(c), o) {
      const h = document.createElement("button");
      h.type = "button", h.className = "toastAction", h.textContent = o.label, h.addEventListener("click", () => {
        o.run(), r.classList.remove("show", "withAction"), clearTimeout(Ti);
      }), r.appendChild(h);
    }
    r.classList.toggle("withAction", !!o), r.classList.add("show"), clearTimeout(Ti), Ti = setTimeout(() => r.classList.remove("show", "withAction"), o ? 5e3 : 2200);
  }
  const Li = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], Ws = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function jr(e) {
    return Math.max(0, Math.min(5, Math.floor(Number(e) / 100 * 6)));
  }
  function Ta(e, o) {
    return Li[jr(o)];
  }
  function Gr(e) {
    return Ws[jr(e)];
  }
  function Ot(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  function za() {
    return { morning: Je().morningTime || "08:00", evening: Je().eveningTime || "19:00" };
  }
  function po(e) {
    const [o, r] = String(e).split(":").map(Number);
    return (o || 0) * 60 + (r || 0);
  }
  function zs(e) {
    const o = za();
    return e.getHours() * 60 + e.getMinutes() >= po(o.evening) ? "evening" : "morning";
  }
  function $o(e, o) {
    return rt.checkins.find((r) => r.date === e && r.slot === o);
  }
  function Ai(e) {
    return !!(e && e.mood != null && e.energy != null);
  }
  function Xo() {
    const e = /* @__PURE__ */ new Date(), o = Ot(e), r = zs(e), c = za(), h = e.getHours() * 60 + e.getMinutes();
    return r === "morning" && h < po(c.morning) || Ai($o(o, r)) ? null : r;
  }
  const Va = i("checkinModal"), La = i("checkinTab"), Vs = i("checkinBadge"), oa = { mood: { input: i("moodInput"), fill: i("moodFill") }, energy: { input: i("energyLevelInput"), fill: i("energyLevelFill") } };
  function _i(e) {
    const { input: o, fill: r } = oa[e];
    r.style.width = o.value + "%", o.setAttribute("aria-valuetext", Ta(e, o.value));
  }
  Object.keys(oa).forEach((e) => oa[e].input.addEventListener("input", () => _i(e)));
  let Zn = null;
  function or() {
    const e = za(), o = /* @__PURE__ */ new Date(), r = o.getHours() * 60 + o.getMinutes();
    return r < po(e.morning) ? "Next check-in at " + e.morning : r < po(e.evening) ? "Next check-in at " + e.evening : "Next check-in tomorrow at " + e.morning;
  }
  function js() {
    const e = za(), o = /* @__PURE__ */ new Date(), r = o.getHours() * 60 + o.getMinutes(), c = (h, k) => {
      const [A, P] = h.split(":").map(Number);
      return new Date(o.getFullYear(), o.getMonth(), o.getDate() + (k ? 1 : 0), A, P);
    };
    return r < po(e.morning) ? { date: c(e.morning), time: e.morning } : r < po(e.evening) ? { date: c(e.evening), time: e.evening } : { date: c(e.morning, !0), time: e.morning };
  }
  let ir = null, rr = null;
  function Ur() {
    if (Xo()) {
      ja(), Ga();
      return;
    }
    const e = js(), o = Math.max(0, Math.round((e.date - Date.now()) / 1e3)), r = Math.floor(o / 3600), c = Math.floor(o % 3600 / 60), h = o % 60;
    i("peekCountdown").textContent = r + ":" + String(c).padStart(2, "0") + ":" + String(h).padStart(2, "0"), i("peekAt").textContent = "Available at " + e.time;
  }
  function Gs() {
    Ur(), La.classList.add("peek"), clearInterval(rr), rr = setInterval(Ur, 1e3), clearTimeout(ir), ir = setTimeout(ja, 6e3);
  }
  function ja() {
    La.classList.remove("peek"), clearInterval(rr), clearTimeout(ir);
  }
  function sr() {
    const e = Xo();
    if (!e) {
      La.classList.contains("peek") ? ja() : Gs();
      return;
    }
    Zn = { date: Ot(/* @__PURE__ */ new Date()), slot: e };
    const r = $o(Zn.date, e), c = rt.checkins.find((h) => Ai(h));
    Object.keys(oa).forEach((h) => {
      oa[h].input.value = (r == null ? void 0 : r[h]) ?? (c == null ? void 0 : c[h]) ?? 50, _i(h);
    }), i("checkinTitle").textContent = e === "morning" ? "Morning check-in" : "Evening check-in", Va.classList.add("open"), Va.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => oa.mood.input.focus());
  }
  function Jo() {
    Va.classList.remove("open"), Va.setAttribute("aria-hidden", "true"), Zn && (pa = Zn.date + "-" + Zn.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", pa);
    } catch {
    }
    Zn = null, Ga();
  }
  function Us() {
    if (!Zn) return;
    if (Ai($o(Zn.date, Zn.slot))) {
      Jo();
      return;
    }
    const { date: e, slot: o } = Zn;
    let r = $o(e, o);
    r || (r = { date: e, slot: o }, rt.checkins.unshift(r), rt.checkins = rt.checkins.slice(0, 2e3)), r.mood = Number(oa.mood.input.value), r.energy = Number(oa.energy.input.value), r.scale = 100, r.at = (/* @__PURE__ */ new Date()).toISOString(), rn(), l.fire("checkin", { slot: o, mood: r.mood, energy: r.energy, mood_label: Ta("mood", r.mood), energy_label: Ta("energy", r.energy) }), Dt((o === "morning" ? "Morning" : "Evening") + " check-in saved"), Jo(), Di(), Ua(), fi(), So();
  }
  let pa = "";
  try {
    pa = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function Ga() {
    const e = Xo();
    Vs.hidden = !e, La.hidden = !e, e || ja(), La.classList.toggle("due", !!e), La.setAttribute("aria-label", e ? (e === "morning" ? "Morning" : "Evening") + " check-in is due" : or()), La.title = e ? "Check in now" : or();
  }
  function Ei() {
    Ga();
    const e = Xo();
    !e || Va.classList.contains("open") || Je().checkinAutoOpen !== !1 && (i("app").classList.contains("house") || !ke.home.classList.contains("active") || yn.classList.contains("open") || pa !== Ot(/* @__PURE__ */ new Date()) + "-" + e && sr());
  }
  La.addEventListener("click", sr), i("checkinLater").addEventListener("click", Jo), i("checkinSave").addEventListener("click", Us), Va.addEventListener("click", (e) => {
    e.target === Va && Jo();
  }), Va.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), Jo());
  }), setInterval(Ei, 3e4);
  function Di() {
    const e = Ot(/* @__PURE__ */ new Date()), o = (r) => rt.checkins.find((c) => c.date === e && c[r] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([r, c]) => {
      const h = o(r);
      i(c).textContent = h ? Ta(r, h[r]) : "—";
    });
  }
  function Ua() {
    const e = i("feelCard");
    if (!e) return;
    const o = /* @__PURE__ */ new Date(), r = new Date(o.getFullYear(), o.getMonth(), o.getDate() - (o.getDay() + 6) % 7), c = [...Array(7)].map((ae, $) => {
      const Z = new Date(r.getFullYear(), r.getMonth(), r.getDate() + $), Me = Ot(Z), ze = rt.checkins.filter((ye) => ye.date === Me), Te = (ye) => {
        const ve = ze.map((dt) => dt[ye]).filter((dt) => dt != null);
        return ve.length ? ve.reduce((dt, ct) => dt + ct, 0) / ve.length : null;
      };
      return { d: Z, key: Me, mood: Te("mood"), energy: Te("energy"), count: ze.filter(Ai).length, future: Z > o && Me !== Ot(o) };
    }), h = (ae) => {
      const $ = c.map((Z) => Z[ae]).filter((Z) => Z != null);
      return $.length ? $.reduce((Z, Me) => Z + Me, 0) / $.length : null;
    }, k = h("mood"), A = h("energy"), P = (ae, $) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + ae + "</span><span>" + ($ == null ? "—" : He(Ta("", $))) + '</span></div><div class="feelTrack"><span style="width:' + ($ == null ? 0 : Math.max(4, $)) + "%;background:" + ($ == null ? "transparent" : Gr($)) + '"></span></div></div>', te = c.filter((ae) => ae.mood != null && ae.energy != null).sort((ae, $) => $.mood + $.energy - (ae.mood + ae.energy))[0];
    e.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (k == null ? "No check-ins yet" : He(Ta("", (k + A) / 2))) + '</div><div class="weekCopy">' + (k == null ? "Your first check-in will appear here." : "on average this week" + (te ? " · best day " + He(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(te.d)) : "")) + '</div></div></div><div class="feelDays">' + c.map(
      (ae) => '<div class="weekChip feelDay' + (ae.future ? " future" : "") + (ae.key === Ot(o) ? " today" : "") + '"><div class="weekChipTop"><strong>' + He(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(ae.d)) + "</strong>" + (ae.count >= 2 ? '<span class="weekTick">' + xe("check") + "</span>" : '<span class="feelDots">' + "●".repeat(ae.count) + "</span>") + "</div>" + P("Mood", ae.mood) + P("Energy", ae.energy) + "</div>"
    ).join("") + "</div>";
  }
  const Qo = i("upcomingCountSetting");
  Qo.addEventListener("change", () => {
    Vn = Qo.value === "all" ? "all" : Number(Qo.value), Na();
  });
  const ho = i("tempoRevealBtn"), Ri = i("tempoExperiment"), ha = i("tempoQuad"), fo = i("tempoDot"), Ys = i("tempoEstimate"), Ni = i("tempoReadout");
  let Wt = { x: 0.5, y: 0.5 }, ei = !1, mo = { total: 20, work: 45, rest: 15 };
  function Aa(e, o, r, c) {
    const h = Math.max(o, Math.min(r, e));
    return Math.round((h - o) / c) * c + o;
  }
  function ti(e, o) {
    const r = (e - 0.5) * 2, c = (o - 0.5) * 2, h = Aa(
      mo.total + r * 5 + c * 8,
      Number(S.min),
      Number(S.max),
      Number(S.step)
    ), k = Aa(
      mo.work + r * 10 + c * 8,
      Number(M.min),
      Number(M.max),
      Number(M.step)
    ), A = Aa(
      mo.rest + r * 6 + c * 6,
      Number(E.min),
      Number(E.max),
      Number(E.step)
    );
    return S.value = h, M.value = k, E.value = A, q.textContent = k + " sec", ee.textContent = A + " sec", Gt(), { total: h, work: k, rest: A };
  }
  function lr(e, o) {
    const r = e < 0.34 ? "Low" : e > 0.66 ? "Hard" : "Medium", c = o < 0.34 ? "Fast" : o > 0.66 ? "Slow" : "Balanced", h = ti(e, o);
    Ni.textContent = r + " + " + c, Ys.textContent = h.total + " min", ha.setAttribute("aria-valuetext", r + " and " + c + ", estimated " + h.total + " minutes");
  }
  function dr(e) {
    const o = ha.getBoundingClientRect(), r = Math.max(0, Math.min(1, (e.clientX - o.left) / o.width)), c = Math.max(0, Math.min(1, (e.clientY - o.top) / o.height));
    Wt = { x: r, y: c }, fo.style.left = r * 100 + "%", fo.style.top = c * 100 + "%", lr(r, c);
  }
  ho.addEventListener("click", () => {
    const e = Ri.hidden;
    Ri.hidden = !e, ho.setAttribute("aria-expanded", e ? "true" : "false"), ho.textContent = e ? "Now close this" : "Don’t try this!", e && (mo = {
      total: Number(S.value),
      work: Number(M.value),
      rest: Number(E.value)
    }, Wt = { x: 0.5, y: 0.5 }, fo.style.left = "50%", fo.style.top = "50%", lr(Wt.x, Wt.y));
  }), n.querySelectorAll("[data-feedback-rating]").forEach((e) => e.addEventListener("click", () => {
    Number(e.dataset.feedbackRating), n.querySelectorAll("[data-feedback-rating]").forEach((o) => o.classList.toggle("selected", o === e));
  }));
  const Bi = i("testingFeedbackForm"), Yr = i("testingFeedbackThanks"), Zs = i("testingFeedbackAgain");
  Bi.addEventListener("submit", (e) => {
    e.preventDefault(), Bi.hidden = !0, Yr.hidden = !1, Dt("Feedback captured for prototype");
  }), Zs.addEventListener("click", (e) => {
    e.preventDefault(), Bi.reset(), n.querySelectorAll("[data-feedback-rating]").forEach((o) => o.classList.remove("selected")), Yr.hidden = !0, Bi.hidden = !1;
  }), ha.addEventListener("pointerdown", (e) => {
    var o;
    ei = !0, dr(e);
    try {
      (o = ha.setPointerCapture) == null || o.call(ha, e.pointerId);
    } catch {
    }
  }), ha.addEventListener("pointermove", (e) => {
    ei && dr(e);
  }), ha.addEventListener("pointerup", (e) => {
    ei && (ei = !1, dr(e), O());
  }), ha.addEventListener("pointercancel", () => ei = !1), ha.addEventListener("keydown", (e) => {
    let { x: o, y: r } = Wt, c = !0;
    e.key === "ArrowLeft" ? o -= 0.05 : e.key === "ArrowRight" ? o += 0.05 : e.key === "ArrowUp" ? r -= 0.05 : e.key === "ArrowDown" ? r += 0.05 : c = !1, c && (e.preventDefault(), o = Math.max(0, Math.min(1, o)), r = Math.max(0, Math.min(1, r)), Wt = { x: o, y: r }, fo.style.left = o * 100 + "%", fo.style.top = r * 100 + "%", lr(o, r), O());
  });
  const yn = i("workoutModal");
  let _a = null;
  function Ea(e) {
    return e.map((o) => ({ ...o }));
  }
  function Ks() {
    const e = Ve[pt];
    return {
      key: pt,
      profile: e ? JSON.parse(JSON.stringify(e)) : null,
      warmup: Ea(Mt),
      strength: Ea(at),
      cooldown: Ea(bn),
      total: Number(S.value),
      work: Number(M.value),
      rest: Number(E.value),
      rounds: Number(Xe.value) || 1
    };
  }
  function Zr(e = !1) {
    st = !!e, ue = null, _e = null, sn(), Vr(), _a = Ks(), i("moveEditorTitle").textContent = st ? "Create new move" : "Edit move", i("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", i("moveEditorSubtitle").hidden = !st, i("warmupRow").hidden = st, i("deleteMoveOpen").hidden = st;
    const o = i("createMoveOptions");
    o.hidden = !st;
    {
      const r = Ve[pt];
      i("includeWarmupPreset").checked = !!(r != null && r.includeWarmup), i("includeCooldownPreset").checked = !!(r != null && r.includeCooldown);
    }
    if (Tt(), st) {
      i("useGlobalTiming").checked = !0, i("useGlobalRestTiming").checked = !0;
      const r = Ve[pt];
      No((r == null ? void 0 : r.preset) || "movement", !1);
    }
    i("movementCreator").hidden = !0, Yn("movement"), Si(), Zo(), Ri.hidden = !0, ho.setAttribute("aria-expanded", "false"), ho.textContent = "Don’t try this!", yn.classList.toggle("createMode", st), yn.querySelector(".modal").classList.toggle("createMode", st), yn.classList.add("open"), yn.setAttribute("aria-hidden", "false"), co(), st && Se();
  }
  function Nn() {
    const e = Ve[pt];
    return e != null && e.customSequence ? !!e.includeWarmup : !(e != null && e.warmupOff);
  }
  function Tt() {
    const e = Nn(), o = i("warmupSwitch");
    o.classList.toggle("on", e), o.setAttribute("aria-checked", String(e));
  }
  i("warmupSwitch").addEventListener("click", () => {
    const e = Ve[pt];
    e && (e.customSequence ? (i("includeWarmupPreset").checked = !e.includeWarmup, D()) : (e.warmupOff = !e.warmupOff, O()), Tt());
  });
  function Bn() {
    sn(), Vr(), uo(), _e = null, ue = null, yn.classList.contains("createMode") && v(), yn.classList.remove("createMode"), yn.querySelector(".modal").classList.remove("createMode"), yn.classList.remove("open"), yn.setAttribute("aria-hidden", "true");
  }
  function Pi() {
    if (!_a) return;
    const e = _a;
    e.profile && (Ve[e.key] = JSON.parse(JSON.stringify(e.profile))), pt = e.key, Mt = Ea(e.warmup), at = Ea(e.strength), bn = Ea(e.cooldown), S.value = e.total, M.value = e.work, E.value = e.rest, Xe.value = e.rounds || 1;
    const o = Ve[pt];
    if (o) {
      n.querySelectorAll(".workoutPanel[data-workout]").forEach((c) => c.classList.toggle("active", c.dataset.workout === pt));
      const r = n.querySelector(".workoutPanel.active");
      if (r) {
        const c = r.querySelector(".workoutName");
        c && (c.textContent = o.name);
        const h = r.querySelector(".panelCollapsedText");
        h && (h.textContent = o.name);
        const k = r.querySelector(".sourceTag");
        k && (k.textContent = o.source);
      }
      f.value = o.name;
    }
    O();
  }
  i("cancelWorkoutEdit").addEventListener("click", () => {
    if (st) {
      const e = pt;
      delete Ve[e], st = !1, mt = null, Dn(rt.order.find((o) => Ve[o]) || Object.keys(Ve)[0]);
    } else
      Pi();
    Bn();
  }), i("saveWorkoutEdit").addEventListener("click", () => {
    sn(), Pt && Yo();
    const e = Ve[pt], o = f.value.trim() || "New move";
    if (e && (e.name = o), Lt(), ue = null, O(), st && e)
      Do(pt, e), n.querySelectorAll(".workoutPanel[data-workout]").forEach((r) => r.classList.toggle("active", r.dataset.workout === pt)), st = !1, mt = null, rt.order.includes(pt) || rt.order.push(pt), Dt("Move created");
    else {
      const r = n.querySelector(".workoutPanel.active");
      if (r) {
        const c = r.querySelector(".workoutName");
        c && (c.textContent = o);
        const h = r.querySelector(".panelCollapsedText");
        h && (h.textContent = o);
      }
      Dt("Move saved");
    }
    _a = null, Bn(), rn();
  }), yn.addEventListener("click", (e) => {
    if (e.target === yn) {
      if (st) {
        const o = pt;
        delete Ve[o], st = !1, mt = null, Dn(rt.order.find((r) => Ve[r]) || Object.keys(Ve)[0]);
      } else
        Pi();
      Bn();
    }
  }), da(i("addMovementBtn"), "movement"), da(i("addRestBtn"), "rest"), da(i("addVideoBtn"), "video"), i("closeMovementCreator").addEventListener("click", () => {
    i("movementCreator").hidden = !0;
  }), i("useGlobalTiming").addEventListener("change", Zo), i("useGlobalRestTiming").addEventListener("change", Zo), n.querySelectorAll(".createPresetBtn").forEach((e) => e.addEventListener("click", () => {
    No(e.dataset.movePreset, !0), O();
  })), i("includeWarmupPreset").addEventListener("change", D), i("includeCooldownPreset").addEventListener("change", D), i("includeWarmupPreset").addEventListener("change", ge), i("includeCooldownPreset").addEventListener("change", ge), f.addEventListener("input", ge), f.addEventListener("input", tr), i("confirmAddMovement").addEventListener("click", ar), i("confirmAddRest").addEventListener("click", ar), i("addMovementInput").addEventListener("keydown", (e) => {
    e.key === "Enter" && ar();
  });
  const Da = i("countdown"), ni = i("countNum"), fn = i("countdownPixelCanvas");
  let Ya = null, Za = "appear";
  class Kn {
    constructor(o, r, c, h, k, A, P) {
      this.width = o.width, this.height = o.height, this.ctx = r, this.x = c, this.y = h, this.color = k, this.speed = (Math.random() * 0.8 + 0.1) * A, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = P, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
    }
    draw() {
      const o = this.maxSizeInteger * 0.5 - this.size * 0.5;
      this.ctx.fillStyle = this.color, this.ctx.fillRect(this.x + o, this.y + o, this.size, this.size);
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
  let Ii = [], ai = 1, cr = 1;
  function Ka() {
    const e = parseFloat(getComputedStyle(i("app")).zoom);
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  function Kr() {
    var ae;
    if (!fn) return;
    const e = Ka(), o = Math.max(1, window.innerWidth / e), r = Math.max(1, window.innerHeight / e);
    ai = o, cr = r;
    const c = Math.min(window.devicePixelRatio || 1, 2);
    fn.width = Math.floor(o * c), fn.height = Math.floor(r * c), fn.style.width = o + "px", fn.style.height = r + "px";
    const h = fn.getContext("2d");
    h.setTransform(c, 0, 0, c, 0, 0);
    const k = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], A = 12, P = (ae = window.matchMedia) == null ? void 0 : ae.call(window, "(prefers-reduced-motion: reduce)").matches, te = P ? 0 : 0.055;
    Ii = [];
    for (let $ = 0; $ < o; $ += A)
      for (let Z = 0; Z < r; Z += A) {
        const Me = $ - o / 2, ze = Z - r / 2, Te = Math.sqrt(Me * Me + ze * ze), ye = P ? 0 : Math.random() * 75 + Te * 0.05, ve = new Kn({ width: o, height: r }, h, $, Z, k[Math.floor(Math.random() * k.length)], te, ye);
        ve.maxSizeInteger = 4, ve.maxSize = Math.random() * 3.2 + 0.8, ve.sizeStep = 0.35 + Math.random() * 0.45, Ii.push(ve);
      }
  }
  function $r(e) {
    cancelAnimationFrame(Ya), Za = e;
    const o = fn == null ? void 0 : fn.getContext("2d");
    if (!o) return;
    function r() {
      o.clearRect(0, 0, ai, cr);
      let c = !0;
      Ii.forEach((h) => {
        h[Za](), h.isIdle || (c = !1);
      }), Za === "disappear" && c || (Ya = requestAnimationFrame(r));
    }
    Ya = requestAnimationFrame(r);
  }
  function go() {
    cancelAnimationFrame(Ya), Kr(), $r("appear"), setTimeout(() => $r("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    Da.classList.contains("active") && go();
  });
  const ln = i("pixelTrailCanvas"), Ra = ln.getContext("2d");
  let fa = !0, vo = 0.7, $a = 600, oi = [], Pn = null, ia = { x: 0, y: 0, ready: !1 };
  function Xr() {
    const e = u.getBoundingClientRect(), o = Ka(), r = Math.min(window.devicePixelRatio || 1, 2), c = Math.max(1, e.width / o), h = Math.max(1, e.height / o);
    ln.width = Math.max(1, Math.floor(c * r)), ln.height = Math.max(1, Math.floor(h * r)), ln.style.width = c + "px", ln.style.height = h + "px", Ra.setTransform(r, 0, 0, r, 0, 0);
  }
  function ur(e, o) {
    if (!fa) return;
    const r = performance.now();
    ia.ready || (ia = { x: e, y: o, ready: !0 });
    const c = 7;
    for (let h = 1; h <= c; h++) {
      const k = h / c;
      oi.push({
        x: ia.x + (e - ia.x) * k,
        y: ia.y + (o - ia.y) * k,
        born: r - (c - h) * 10
      });
    }
    ia = { x: e, y: o, ready: !0 };
  }
  function Hi(e) {
    if (Pn = null, !m) return;
    if (!ke.workout.classList.contains("active")) {
      Pn = requestAnimationFrame(Hi);
      return;
    }
    const o = u.getBoundingClientRect(), r = Ka();
    Ra.clearRect(0, 0, o.width / r, o.height / r), fa && (oi = oi.filter((h) => e - h.born < $a), Ra.fillStyle = i("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", oi.forEach((h) => {
      const k = (e - h.born) / $a, A = (1 - k) * vo, P = Math.round(h.x / 14) * 14, te = Math.round(h.y / 14) * 14;
      Ra.globalAlpha = Math.max(0, A);
      const ae = 2 + 5 * (1 - k) * vo;
      Ra.fillRect(P - ae / 2, te - ae / 2, ae, ae);
    }), Ra.globalAlpha = 1), Pn = requestAnimationFrame(Hi);
  }
  u.addEventListener("pointermove", (e) => {
    const o = u.getBoundingClientRect(), r = Ka();
    ur((e.clientX - o.left) / r, (e.clientY - o.top) / r);
  }), u.addEventListener("pointerleave", () => ia.ready = !1), new ResizeObserver(Xr).observe(u), Xr(), Pn = requestAnimationFrame(Hi);
  const It = i("movementRippleCanvas"), $n = It.getContext("2d");
  let kn = !0, Ut = null, pr = performance.now();
  function ii() {
    const e = It.parentElement.getBoundingClientRect(), o = Ka(), r = Math.max(1, e.width / o), c = Math.max(1, e.height / o), h = Math.min(window.devicePixelRatio || 1, 2);
    It.width = Math.max(1, Math.floor(r * h)), It.height = Math.max(1, Math.floor(c * h)), It.style.width = r + "px", It.style.height = c + "px", $n.setTransform(h, 0, 0, h, 0, 0);
  }
  function hr() {
    var e;
    return _t || ((e = De[je]) == null ? void 0 : e.kind) === "rest";
  }
  function $s() {
    const e = De[je];
    return hr() ? 2200 : e ? e.kind === "warmup" || e.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function Fi(e) {
    if (Ut = null, !m) return;
    if (!ke.workout.classList.contains("active")) {
      Ut = requestAnimationFrame(Fi);
      return;
    }
    const o = It.parentElement.getBoundingClientRect(), r = Ka(), c = Math.max(1, o.width / r), h = Math.max(1, o.height / r);
    if ($n.clearRect(0, 0, c, h), kn) {
      const k = $s(), A = (e - pr) % k / k, P = 15, te = Math.max(8, Math.round(P * h / Math.max(1, c))), ae = c / (P + 1), $ = h / (te + 1), Z = c * 0.5, Me = h * 0.52, ze = Math.hypot(Z, Me), ye = i("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let ve = 1; ve <= te; ve++)
        for (let dt = 1; dt <= P; dt++) {
          const ct = dt * ae, Ae = ve * $, ut = Math.hypot(ct - Z, Ae - Me) / ze, yt = hr(), Qe = yt ? Math.exp(-Math.pow((ut - (A * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, Ye = Math.exp(-Math.pow((ut - A * 1.25) * 7, 2)), Xt = yt ? Qe : Ye, gn = yt ? 0.5 + 0.5 * Math.sin(A * Math.PI * 2 - ut * 3) ** 2 : 0.35 + 0.65 * Math.sin(A * Math.PI * 2 - ut * 5) ** 2, Ht = yt ? 1.4 + Xt * 4.2 * gn : 1.2 + Xt * 5 * gn;
          $n.beginPath(), $n.arc(ct, Ae, Ht, 0, Math.PI * 2), $n.fillStyle = `rgba(${ye},${yt ? 0.08 + Xt * 0.48 : 0.05 + Xt * 0.55})`, $n.fill();
        }
    }
    Ut = requestAnimationFrame(Fi);
  }
  new ResizeObserver(ii).observe(It.parentElement), ii(), Ut = requestAnimationFrame(Fi);
  const In = i("exerciseTitle"), Tn = i("exerciseMeta"), Oi = i("stepLabel"), fr = i("digits"), Jr = i("fill"), bo = i("progress"), mr = i("pause"), Xs = i("nextName"), Qr = i("nextMeta"), es = i("nextIcon"), qi = i("skipNextSession");
  let Ln = null;
  function An(e) {
    for (let o = Math.max(0, e); o < De.length; o++)
      if (!De[o].sessionHidden) return o;
    return -1;
  }
  function ts() {
    const e = De[je];
    if (!e) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (_t) {
      const c = An(je + 1), h = c >= 0 ? De[c] : null;
      return h ? { name: h.name, meta: vr(h), icon: wo(h) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (e.rest > 0) return { name: "Rest", meta: e.rest + " sec · " + (e.roundBreakAfter ? "round " + (e.round + 1) + " next" : "recovery"), icon: "pause" };
    const o = An(je + 1), r = o >= 0 ? De[o] : null;
    return r ? { name: r.name, meta: vr(r), icon: wo(r) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function gr() {
    if (!De[je]) return De.length;
    const o = An(je + 1);
    return o < 0 ? De.length : o + 1;
  }
  function wo(e) {
    return e.kind === "video" ? "play" : "clock";
  }
  function vr(e) {
    return e.kind === "video" ? "YouTube · " + it(e.duration) : e.group + " · " + e.duration + " sec";
  }
  function Io() {
    return De.length && De[De.length - 1].round || 1;
  }
  function ns(e) {
    const o = De[e];
    if (!o) return "";
    const r = Io();
    if (r <= 1) return "Step " + (e + 1) + " of " + De.length;
    if (o.roundBreak) return "Round " + o.round + " of " + r + " · Rest";
    const c = De.filter((h) => h.round === o.round && !h.roundBreak).length;
    return "Round " + o.round + " of " + r + " · Step " + (o.roundIndex + 1) + " of " + c;
  }
  function br() {
    return bo.querySelector('[data-step="' + je + '"]');
  }
  function ri() {
    De[je] && Number(bo.dataset.round) !== (De[je].round || 1) && lt(), [...bo.children].forEach((e) => {
      const o = Number(e.dataset.step);
      e.classList.toggle("done", o < je), e.classList.toggle("active", o === je), e.classList.toggle("rewindable", o <= je), e.disabled = o > je, o === je && e.style.setProperty("--segment-progress", "0%");
    }), De[je] && (Oi.textContent = ns(je), eo());
  }
  function as(e) {
    const o = De.indexOf(e);
    o < 0 || o <= je || (e.sessionHidden = !e.sessionHidden, Xa(), Dt((e.sessionHidden ? "Hidden " : "Included ") + e.name + " for this session"));
  }
  function Na() {
    const e = i("upcomingList");
    if (!e) return;
    e.innerHTML = "";
    const o = gr(), r = De.slice(o);
    (Vn === "all" ? r : r.slice(0, Math.max(1, Number(Vn) || 1))).forEach((h) => {
      const k = document.createElement("section");
      k.className = "upcomingCard" + (h.sessionHidden ? " sessionHidden" : "") + (ce(h) ? " noMeta" : ""), k.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + xe(wo(h)) + '</div><div><div class="upcomingName">' + He(h.name) + '</div><div class="upcomingMeta">' + He(vr(h)) + (Io() > 1 ? " · round " + h.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (h.sessionHidden ? "Include this session" : "Skip this session") + "</button>", k.querySelector(".skipSessionBtn").addEventListener("click", () => as(h)), e.appendChild(k);
    });
  }
  function Xa() {
    var o;
    const e = ts();
    Xs.textContent = e.name, Qr.textContent = e.meta, es.innerHTML = xe(e.icon);
    {
      const r = _t ? De[An(je + 1)] : ((o = De[je]) == null ? void 0 : o.rest) > 0 ? { kind: "rest" } : De[An(je + 1)];
      n.querySelector(".nextCard").classList.toggle("noMeta", !!(r && ce(r)));
    }
    if (Ln = null, _t) {
      const r = An(je + 1);
      r >= 0 && (Ln = De[r]);
    } else {
      const r = De[je];
      if (r && r.rest > 0)
        Ln = null;
      else {
        const c = An(je + 1);
        c >= 0 && (Ln = De[c]);
      }
    }
    qi && (qi.hidden = !Ln, qi.textContent = Ln != null && Ln.sessionHidden ? "Include this session" : "Skip this session"), Na();
  }
  qi.addEventListener("click", () => {
    Ln && (Ln.sessionHidden = !Ln.sessionHidden, Dt((Ln.sessionHidden ? "Hidden " : "Included ") + Ln.name + " for this session"), Xa());
  });
  let Xn = null, wr = null;
  function Jt(e, o = {}) {
    const r = Ve[pt];
    l.fire(e, { move: (r == null ? void 0 : r.name) || "", move_id: pt, ...o });
  }
  function Js() {
    const e = Ve[pt];
    Xn = { key: pt, name: (e == null ? void 0 : e.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(wr), wr = setInterval(() => {
      Xn && !wn && Xn.active++;
    }, 1e3), Jt("started", { steps: De.length });
  }
  function Wi(e) {
    if (clearInterval(wr), !Xn) return;
    const o = Xn;
    Xn = null, Jt(e ? "completed" : "ended", { seconds: o.active }), !(o.active < 30) && (rt.history.unshift({ id: "h-" + o.startedAt, move_id: o.key, name: o.name, start: new Date(o.startedAt).toISOString(), seconds: o.active, completed: e }), rt.history = rt.history.slice(0, 1e3), rn(), fi(), So());
  }
  function Qs() {
    y("workout"), el();
    const e = An(0);
    e >= 0 && De[e].kind === "video" && os(De[e]);
  }
  function xr() {
    ui(), Wi(!1), clearInterval(Bt), clearInterval(so), _t = !1, ma(!1), i("app").classList.remove("resting"), Da.classList.remove("active"), y("home");
  }
  function el() {
    Da.classList.add("active");
    let e = 5;
    ni.textContent = e, requestAnimationFrame(go), clearInterval(so), so = setInterval(() => {
      e--, e > 0 ? (ni.textContent = e, go()) : (clearInterval(so), ni.textContent = "GO", go(), setTimeout(() => {
        Da.classList.remove("active"), cancelAnimationFrame(Ya), yr();
      }, 650));
    }, 1e3);
  }
  function lt() {
    var o;
    bo.innerHTML = "";
    const e = ((o = De[Math.max(0, je)] || De[0]) == null ? void 0 : o.round) || 1;
    bo.dataset.round = e, De.forEach((r, c) => {
      if ((r.round || 1) !== e) return;
      const h = document.createElement("button");
      h.dataset.step = c, h.type = "button", h.className = "progressSegment", h.setAttribute("aria-label", "Go to " + r.name), h.addEventListener("click", () => {
        c <= je && si(c);
      }), bo.appendChild(h);
    });
  }
  function ma(e) {
    e = !!e;
    const o = wn !== e;
    if (wn = e, mr.textContent = e ? "Resume" : "Pause", i("app").classList.toggle("paused", e), dn && At)
      try {
        e ? At.pauseVideo() : At.playVideo();
      } catch {
      }
    o && Xn && Jt(e ? "paused" : "resumed");
  }
  function si(e) {
    e < 0 || e >= De.length || e > je || (clearInterval(Bt), _t = !1, i("app").classList.remove("resting"), je = e, ma(!1), ga(), Bt = setInterval(Ha, 1e3));
  }
  function yr() {
    if (je = An(0), ma(!1), lt(), je < 0) {
      In.textContent = "No activities", Tn.textContent = "Open Edit and enable or add a movement", Tn.hidden = !1;
      return;
    }
    Js(), ga(), clearInterval(Bt), Bt = setInterval(Ha, 1e3);
  }
  const Ba = i("videoStage"), xo = i("videoSound"), tl = 0, yo = 1, kr = 2;
  let zi = 0, Pa = null, Ja = null, At = null, Qa = null, li = 0, ko = !1, dn = null, Vi = null;
  function di() {
    var e;
    return (e = window.YT) != null && e.Player ? Promise.resolve(window.YT) : Pa || (Pa = new Promise((o, r) => {
      const c = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          c == null || c();
        } catch {
        }
      };
      const h = setInterval(() => {
        var A;
        (A = window.YT) != null && A.Player && (clearInterval(h), clearTimeout(k), o(window.YT));
      }, 100), k = setTimeout(() => {
        clearInterval(h), Pa = null, r(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const A = document.createElement("script");
        A.src = "https://www.youtube.com/iframe_api", A.async = !0, A.onerror = () => {
          clearInterval(h), clearTimeout(k), Pa = null, r(new Error("YouTube did not load"));
        }, document.head.appendChild(A);
      }
    }), Pa);
  }
  function Mr() {
    return Ja || (Ja = di().then((e) => new Promise((o) => {
      const r = document.createElement("div");
      i("videoFrame").appendChild(r), At = new e.Player(r, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => o(At), onStateChange: (c) => is(c.data), onError: (c) => nl(c.data) }
      });
    })), Ja.catch(() => {
      Ja = null;
    }), Ja);
  }
  function os(e) {
    !(e != null && e.videoId) || e.videoError || Mr().then((o) => {
      dn || Qa === e.videoId || (Qa = e.videoId, li = Number(e.start) || 0, ko = !1, o.mute(), o.loadVideoById({ videoId: e.videoId, startSeconds: li }));
    }).catch(() => {
    });
  }
  function Cr() {
    const e = An(je + 1);
    e >= 0 && De[e].kind === "video" && os(De[e]);
  }
  function is(e) {
    if (!dn) {
      e === yo && !ko && (ko = !0, At.pauseVideo(), At.seekTo(li, !0));
      return;
    }
    Ba.classList.toggle("playing", e === yo), De[je] === dn && performance.now() > zi && (e === yo && wn ? ma(!1) : e === kr && !wn && ma(!0)), e === yo && Sr(dn.videoId, At.getDuration()) && rn(), e === tl && Ia();
  }
  function nl(e) {
    const o = dn;
    if (!o) {
      Qa = null;
      return;
    }
    e === 101 || e === 150 ? (ls(o.videoId), Dt("That video can’t play outside YouTube, so it was skipped")) : Dt("The video couldn’t play, so it was skipped"), Ia();
  }
  function rs(e) {
    if (i("app").classList.add("videoStep"), xo.hidden = !0, dn = e, clearTimeout(Vi), !e.videoId) {
      Dt("This video step has no link yet, so it was skipped"), setTimeout(() => Ia(), 0);
      return;
    }
    Mr().then((o) => {
      if (dn !== e) return;
      zi = performance.now() + 1500;
      const r = Number(e.start) || 0;
      Qa !== e.videoId ? (Qa = e.videoId, li = r, o.loadVideoById({ videoId: e.videoId, startSeconds: r })) : (o.seekTo(r, !0), o.playVideo()), o.unMute(), wn && o.pauseVideo(), Vi = setTimeout(() => {
        dn !== e || wn || (o.getPlayerState() !== yo ? (o.mute(), o.playVideo(), xo.hidden = !1) : o.isMuted() && (xo.hidden = !1));
      }, 1600);
    }).catch(() => {
      dn === e && (Dt("YouTube didn’t load, so the video was skipped"), Ia());
    });
  }
  function ci() {
    if (!i("app").classList.contains("videoStep")) return;
    const e = n.querySelector(".workGrid"), o = n.querySelector(".sessionControlRow"), r = e.getBoundingClientRect().top, c = (o == null ? void 0 : o.offsetHeight) || 42, h = window.innerHeight - r - 16 - c - 84;
    e.style.setProperty("--theater-h", Math.max(240, Math.round(h)) + "px");
  }
  window.addEventListener("resize", ci);
  function ui() {
    clearTimeout(Vi);
    const e = dn;
    if (dn = null, i("app").classList.remove("videoStep"), Ba.classList.remove("playing"), xo.hidden = !0, e && At) {
      try {
        At.pauseVideo();
      } catch {
      }
      Qa = null;
    }
  }
  function Ia() {
    const e = dn;
    !e || De[je] !== e || (ui(), clearInterval(Bt), Mo(), Bt = setInterval(Ha, 1e3));
  }
  xo.addEventListener("click", () => {
    At && (At.unMute(), At.playVideo()), xo.hidden = !0;
  });
  function al(e) {
    var c;
    const o = Number(e.start) || 0;
    if (e.useVideoLength === !1) return o + (Number(e.duration) || 300);
    const r = At && dn === e && Number((c = At.getDuration) == null ? void 0 : c.call(At)) || 0;
    return Number(e.end) || r || Number(e.videoDuration) || o + (Number(e.duration) || 300);
  }
  function ss(e, o) {
    const r = Ve[pt];
    [Mt, at, bn, r == null ? void 0 : r.warmup, r == null ? void 0 : r.strength, r == null ? void 0 : r.cooldown, r == null ? void 0 : r.sequence].forEach((c) => (Array.isArray(c) ? c : []).forEach((h) => {
      h && h.kind === "video" && h.videoId === e && o(h);
    }));
  }
  function Sr(e, o) {
    o = Math.round(Number(o) || 0);
    let r = !1;
    return e && o > 0 && ss(e, (c) => {
      c.videoDuration !== o && (c.videoDuration = o, r = !0);
    }), r;
  }
  function ls(e) {
    ss(e, (o) => {
      o.videoError = "embed";
    }), rn();
  }
  function Tr(e) {
    const o = e.videoId;
    if (!o) return;
    const r = () => {
      yn.classList.contains("open") ? ue || O() : (O(), rn());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + o)).then((c) => c.ok ? c.json() : Promise.reject(c.status)).then((c) => {
      e.videoId === o && (e.videoTitle = c.title || "", e.autoName && c.title && (e.name = c.title), r());
    }).catch((c) => {
      e.videoId === o && c === 401 && (e.videoError = "embed", r());
    }), pi(o).then((c) => {
      Sr(o, c) && r();
    }).catch((c) => {
      c === "embed" && e.videoId === o && (e.videoError = "embed", r());
    });
  }
  function pi(e) {
    return di().then((o) => new Promise((r, c) => {
      const h = document.createElement("div");
      h.className = "videoProbe", h.setAttribute("aria-hidden", "true");
      const k = document.createElement("div");
      h.appendChild(k), i("app").appendChild(h);
      let A = null, P = !1;
      const te = (Z, Me) => {
        P || (P = !0, clearTimeout(ae), setTimeout(() => {
          try {
            A == null || A.destroy();
          } catch {
          }
          h.remove();
        }, 0), Me ? c(Me) : r(Z));
      }, ae = setTimeout(() => te(0), 2e4), $ = () => {
        var Me;
        const Z = Number((Me = A == null ? void 0 : A.getDuration) == null ? void 0 : Me.call(A)) || 0;
        return Z > 0 && te(Z), Z > 0;
      };
      A = new o.Player(k, {
        width: 320,
        height: 180,
        videoId: e,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            $() || (A.mute(), A.playVideo());
          },
          onStateChange: () => $(),
          onError: (Z) => te(0, Z.data === 101 || Z.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function ga() {
    _t = !1;
    const e = De[je];
    i("app").classList.toggle("resting", e.kind === "rest"), e.kind === "video" ? rs(e) : ui(), Zt = e.duration, un = e.duration, In.textContent = e.name, Tn.textContent = e.group, Tn.hidden = !0, Oi.textContent = ns(je), Xn && Jt("step", { name: e.name, group: e.group, kind: e.kind, step: je + 1, of: De.length, round: e.round || 1, rounds: Io(), duration: e.duration }), Xa(), ri(), Cr(), e.kind === "video" && setTimeout(ci, 0);
  }
  function eo() {
    var h;
    const e = ((h = De[je]) == null ? void 0 : h.kind) === "video" && !_t, o = e && Zt >= 60;
    fr.textContent = o ? it(Zt) : Zt, fr.classList.toggle("long", o), e && (i("videoClock").textContent = it(Zt) + " left");
    const r = Zt / un * 100;
    Jr.style.width = r + "%";
    const c = br();
    if (c && !_t) {
      const k = 100 - r;
      c.style.setProperty("--segment-progress", k + "%");
    }
  }
  function Ha() {
    var o, r;
    if (wn) return;
    const e = De[je];
    if ((e == null ? void 0 : e.kind) === "video" && !_t && dn === e) {
      const c = Number((o = At == null ? void 0 : At.getCurrentTime) == null ? void 0 : o.call(At)) || 0, h = Number(e.start) || 0, k = al(e);
      un = Math.max(1, k - h), (c > h || ((r = At == null ? void 0 : At.getPlayerState) == null ? void 0 : r.call(At)) === yo) && (Zt = Math.max(0, Math.ceil(k - c))), eo(), c > h && c >= k - 0.25 && Ia();
      return;
    }
    Zt--, eo(), Zt <= 0 && (e.rest > 0 ? Lr(e.rest) : Mo());
  }
  function Lr(e) {
    var r;
    _t = !0, i("app").classList.add("resting");
    const o = br();
    o && o.style.setProperty("--segment-progress", "100%"), clearInterval(Bt), Zt = e, un = e, Xn && Jt("rest", { duration: e }), In.textContent = "Rest", Tn.textContent = (r = De[je]) != null && r.roundBreakAfter ? "Round " + (De[je].round + 1) + " next" : "Recovery", Xa(), eo(), Bt = setInterval(() => {
      wn || (Zt--, eo(), Zt <= 0 && (clearInterval(Bt), Mo(), Bt = setInterval(Ha, 1e3)));
    }, 1e3);
  }
  function Mo() {
    _t = !1;
    const e = An(je + 1);
    if (e >= 0)
      je = e, ga();
    else {
      clearInterval(Bt), ui(), ma(!1), i("app").classList.remove("resting"), In.textContent = "Complete", Tn.textContent = "Move finished", Tn.hidden = !1, fr.textContent = "✓";
      {
        const o = Io();
        Oi.textContent = o > 1 ? o + " rounds done" : De.filter((r) => !r.roundBreak).length + " steps done";
      }
      Wi(!0);
      {
        const o = Ql(7).reduce((r, c) => r + c.minutes, 0);
        Tn.textContent = "Move finished · " + o + " min in the last 7 days";
      }
      Jr.style.width = "100%", Xa();
    }
  }
  i("skipExercise").addEventListener("click", () => {
    t(), ma(!1);
  });
  function t() {
    clearInterval(Bt);
    const e = De[je];
    if (_t) {
      _t = !1, i("app").classList.remove("resting");
      const r = An(je + 1);
      r >= 0 ? (je = r, ga(), Bt = setInterval(Ha, 1e3)) : Mo();
      return;
    }
    if (e && e.rest > 0) {
      Lr(e.rest);
      return;
    }
    const o = An(je + 1);
    o >= 0 ? (je = o, ga(), Bt = setInterval(Ha, 1e3)) : Mo();
  }
  i("restartSegment").addEventListener("click", () => {
    if (clearInterval(Bt), ma(!1), _t) {
      const e = De[je];
      Zt = e.rest, un = e.rest, In.textContent = "Rest", Tn.textContent = "Recovery", i("app").classList.add("resting"), Xa(), eo();
    } else
      ga();
    Bt = setInterval(_t ? () => {
      wn || (Zt--, eo(), Zt <= 0 && (clearInterval(Bt), Mo(), Bt = setInterval(Ha, 1e3)));
    } : Ha, 1e3);
  });
  function a(e, o, r, c) {
    let h = 0, k = null, A = !1;
    function P() {
      k && cancelAnimationFrame(k), k = null, h = 0, A = !1, o.style.width = "0%", e.classList.remove("holding");
    }
    function te(Z) {
      if (!A) return;
      h || (h = Z);
      const Me = Math.min(1, (Z - h) / r);
      if (o.style.width = Me * 100 + "%", Me >= 1) {
        A = !1, k && cancelAnimationFrame(k), k = null, o.style.width = "100%", setTimeout(() => o.style.width = "0%", 90), c();
        return;
      }
      k = requestAnimationFrame(te);
    }
    function ae(Z) {
      var Me;
      if (!(Z && Z.button !== void 0 && Z.button !== 0)) {
        Z == null || Z.preventDefault(), P(), A = !0, e.classList.add("holding");
        try {
          (Me = e.setPointerCapture) == null || Me.call(e, Z.pointerId);
        } catch {
        }
        k = requestAnimationFrame(te);
      }
    }
    function $() {
      A && P();
    }
    e.addEventListener("pointerdown", ae), e.addEventListener("pointerup", $), e.addEventListener("pointercancel", $), e.addEventListener("lostpointercapture", $), e.addEventListener("keydown", (Z) => {
      (Z.key === " " || Z.key === "Enter") && !Z.repeat && ae(Z);
    }), e.addEventListener("keyup", (Z) => {
      (Z.key === " " || Z.key === "Enter") && $();
    });
  }
  const s = i("endWorkout");
  a(s, i("holdEndFill"), 1500, xr);
  const d = i("deleteMoveConfirm");
  i("deleteMoveOpen").addEventListener("click", () => {
    d.classList.add("open"), d.setAttribute("aria-hidden", "false");
  }), i("deleteMoveCancel").addEventListener("click", () => {
    d.classList.remove("open"), d.setAttribute("aria-hidden", "true");
  });
  function p() {
    const e = pt, o = n.querySelector('.workoutPanel[data-workout="' + e + '"]');
    o && o.remove(), delete Ve[e], rt.order = rt.order.filter((c) => c !== e);
    let r = n.querySelector(".workoutPanel[data-workout]");
    if (!r) {
      const c = "custom-" + Date.now();
      Ve[c] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, rt.order.push(c), r = Do(c, Ve[c]);
    }
    d.classList.remove("open"), d.setAttribute("aria-hidden", "true"), _a = null, Bn(), Dn(r.dataset.workout), rn(), Dt("Move deleted");
  }
  a(i("deleteMoveYes"), i("deleteMoveFill"), 1500, p);
  const T = n.querySelector(".rubberTabs"), g = i("rubberIndicator");
  function x(e, o = !0) {
    if (!e || !T || !g) return;
    const r = T.getBoundingClientRect(), c = e.getBoundingClientRect();
    g.style.transition = o ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const h = Ka();
    g.style.left = (c.left - r.left) / h + T.scrollLeft + "px", g.style.width = c.width / h + "px", o && (g.style.transform = "scaleX(1.08)", setTimeout(() => g.style.transform = "scaleX(1)", 180));
  }
  n.querySelectorAll(".tab").forEach((e) => e.addEventListener("click", () => {
    e.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), n.querySelectorAll(".tab").forEach((o) => o.classList.remove("active")), n.querySelectorAll(".settingsPane").forEach((o) => o.classList.remove("active")), e.classList.add("active"), i(e.dataset.pane).classList.add("active"), x(e, !0);
  })), requestAnimationFrame(() => x(n.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => x(n.querySelector(".tab.active"), !1));
  const V = i("pixelTrailToggle"), G = i("rippleToggle"), H = i("trailStrength"), I = i("trailLife");
  function J(e, o) {
    Je()[e] = o, rn();
  }
  const Le = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function Ne(e) {
    return e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "g:" + String(e.group || "").trim().toLowerCase();
  }
  function ce(e) {
    var o;
    return !!((o = Je().hideMeta) != null && o[Ne(e)]);
  }
  function fe() {
    const e = /* @__PURE__ */ new Map(), o = (r, c, h) => {
      if (!r) return;
      Array.isArray(r) && (r = { name: r[1], group: r[2], kind: "work" });
      const k = Ne(r);
      let A = e.get(k);
      A || (A = { key: k, label: k === "rest" ? "Rest" : k === "video" ? "Video" : String(r.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, e.set(k, A)), A.kinds.add(k === "rest" ? "Rest" : k === "video" ? "Video" : c), A.moves.add(h), A.count++;
    };
    return Object.values(Ve).forEach((r) => {
      const c = r.name || "Move";
      (r.warmup || (r.customSequence ? [] : Ze)).forEach((h) => o(h, "Warm-up", c)), (r.customSequence ? r.sequence || [] : r.strength || []).forEach((h) => o(h, h.presetRole === "warmup" ? "Warm-up" : h.presetRole === "cooldown" ? "Cooldown" : "Movement", c)), (r.cooldown || (r.customSequence ? [] : on)).forEach((h) => o(h, "Cooldown", c));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([r, c]) => {
      e.has(r) || e.set(r, { key: r, label: c, kinds: /* @__PURE__ */ new Set([c]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...e.values()].map((r) => ({ ...r, kind: r.kinds.has("Movement") ? "Movement" : [...r.kinds][0], moves: [...r.moves] })).sort((r, c) => Le.indexOf(r.kind) - Le.indexOf(c.kind) || r.label.localeCompare(c.label));
  }
  let ne = "all";
  function Ge() {
    const e = i("metaSearch").value.trim().toLowerCase();
    return fe().filter((o) => (ne === "all" || o.kind === ne) && (!e || o.label.toLowerCase().includes(e) || o.moves.some((r) => r.toLowerCase().includes(e))));
  }
  function Rt() {
    const e = i("metaTableBody");
    if (!e) return;
    const o = Je().hideMeta || {}, r = Ge();
    e.innerHTML = r.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', r.forEach((h) => {
      const k = !o[h.key], A = h.count ? (h.moves.length > 2 ? h.moves.slice(0, 2).join(", ") + " + " + (h.moves.length - 2) + " more" : h.moves.join(", ")) + " · " + h.count + " step" + (h.count === 1 ? "" : "s") : "Not used yet", P = document.createElement("tr");
      P.className = k ? "" : "off", P.innerHTML = '<td><div class="metaType">' + He(h.label) + '</div><div class="metaSub">' + He(h.kind + " · " + A) + '</div></td><td class="metaKindCol">' + He(h.kind) + '</td><td class="metaUsedCol">' + He(A) + '</td><td class="metaSwitchCol"><button class="switch' + (k ? " on" : "") + '" type="button" role="switch" aria-checked="' + k + '" aria-label="Second line for ' + He(h.label) + ' on phones"></button></td>', P.querySelector(".switch").addEventListener("click", () => mn([h.key], k)), e.appendChild(P);
    });
    const c = r.filter((h) => o[h.key]).length;
    i("metaCount").textContent = r.length ? r.length + " type" + (r.length === 1 ? "" : "s") + (c ? " · " + c + " hidden on phones" : "") : "";
  }
  function mn(e, o) {
    const r = { ...Je().hideMeta || {} };
    e.forEach((c) => {
      o ? r[c] = !0 : delete r[c];
    }), J("hideMeta", r), Rt(), ht(), Xa();
  }
  i("metaSearch").addEventListener("input", Rt), i("metaKinds").querySelectorAll(".kindChip").forEach((e) => e.addEventListener("click", () => {
    ne = e.dataset.kind, i("metaKinds").querySelectorAll(".kindChip").forEach((o) => o.classList.toggle("active", o === e)), Rt();
  })), i("metaHideAll").addEventListener("click", () => mn(Ge().map((e) => e.key), !0)), i("metaShowAll").addEventListener("click", () => mn(Ge().map((e) => e.key), !1));
  const va = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...Je().toggles || {} };
  function cn() {
    n.querySelectorAll("[data-toggle]").forEach((r) => r.classList.toggle("on", va[r.dataset.toggle] !== !1)), n.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([r, c]) => {
      i(c).hidden = va[r] === !1;
    });
    const e = ["steps", "mood", "energyLevel"].some((r) => va[r] !== !1);
    n.querySelector(".activityCard").hidden = !e, i("weatherCard").hidden = !0;
    const o = n.querySelector("#homeView .grid");
    o.classList.toggle("noActivity", !e), o.classList.toggle("noWeather", !0);
  }
  n.querySelectorAll("[data-toggle]").forEach((e) => e.addEventListener("click", () => {
    va[e.dataset.toggle] = va[e.dataset.toggle] === !1, cn(), J("toggles", { ...va });
  })), cn();
  function ra() {
    V.classList.toggle("on", fa), G.classList.toggle("on", kn), H.value = Math.round(vo * 100), i("trailStrengthValue").textContent = H.value + "%", I.value = $a, i("trailLifeValue").textContent = I.value + " ms";
  }
  Je().trailEnabled !== void 0 && (fa = Je().trailEnabled), Je().rippleEnabled !== void 0 && (kn = Je().rippleEnabled), Je().trailStrength !== void 0 && (vo = Je().trailStrength), Je().trailMaxAge !== void 0 && ($a = Je().trailMaxAge), ra(), V.addEventListener("click", () => {
    fa = !fa, V.classList.toggle("on", fa), fa || (oi = []), J("trailEnabled", fa);
  }), G.addEventListener("click", () => {
    kn = !kn, G.classList.toggle("on", kn), J("rippleEnabled", kn);
  }), H.addEventListener("input", () => {
    vo = Number(H.value) / 100, i("trailStrengthValue").textContent = H.value + "%";
  }), H.addEventListener("change", () => J("trailStrength", vo)), I.addEventListener("input", () => {
    $a = Number(I.value), i("trailLifeValue").textContent = I.value + " ms";
  }), I.addEventListener("change", () => J("trailMaxAge", $a)), Qo.addEventListener("change", () => J("upcomingCount", Vn));
  function Co(e) {
    n.querySelectorAll(".themeBtn").forEach((r) => r.classList.toggle("active", r.dataset.theme === e));
    const o = e === "light";
    i("app").classList.toggle("light", o), l.setLight(o), mi(n);
  }
  Co(Je().theme || "dark"), n.querySelectorAll(".themeBtn").forEach((e) => e.addEventListener("click", () => {
    Co(e.dataset.theme), J("theme", e.dataset.theme);
  }));
  const Mn = { steps: null, weather: null, ...Je().entities || {} };
  let Yt = null, Be = {};
  function Ct(e) {
    const o = Object.values(e).filter((P) => P.entity_id.startsWith("sensor.") || P.entity_id.startsWith("input_number.")), r = (P) => P.attributes.friendly_name || P.entity_id, c = o.filter((P) => /step/i.test(P.entity_id) || /step/i.test(r(P)) || ["steps", "step"].includes(String(P.attributes.unit_of_measurement || "").toLowerCase())), h = o.filter((P) => !c.includes(P)), k = (P, te) => r(P).localeCompare(r(te)), A = (P, te) => /health_steps/.test(te.entity_id) - /health_steps/.test(P.entity_id) || k(P, te);
    return { suggested: c.sort(A), rest: h.sort(k), label: r };
  }
  function hi(e) {
    const o = i("stepsEntity");
    if (!o || o.matches(":focus")) return;
    const { suggested: r, rest: c, label: h } = Ct(e), k = (te) => '<option value="' + He(te.entity_id) + '">' + He(h(te)) + "</option>";
    o.innerHTML = '<option value="">Not connected</option>' + (r.length ? '<optgroup label="Suggested">' + r.map(k).join("") + "</optgroup>" : "") + (c.length ? '<optgroup label="All sensors">' + c.map(k).join("") + "</optgroup>" : ""), o.value = Mn.steps || "";
    const A = i("stepsStatus"), P = Mn.steps && e[Mn.steps];
    A.textContent = P ? "Connected · " + h(P) : A.dataset.empty;
  }
  i("stepsEntity").addEventListener("change", () => {
    Mn.steps = i("stepsEntity").value || null, J("entities", { ...Mn }), Be = {}, Jl(), Yt && (hi(Yt), $l(Yt));
  });
  function ds(e, o = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: o }).format(e);
  }
  function Kl() {
    const e = Mn.steps && (Yt == null ? void 0 : Yt[Mn.steps]), o = Number(e == null ? void 0 : e.state);
    return Number.isFinite(o) ? o : null;
  }
  function $l(e) {
    var c;
    const o = Mn.steps, r = o ? Number((c = e[o]) == null ? void 0 : c.state) : NaN;
    i("stepsMeta").textContent = o ? Number.isFinite(r) ? ds(r) : "—" : "Set up in Settings";
  }
  let Xl = 0;
  async function Jl() {
    const e = Mn.steps;
    if (!e || !l.ws) return;
    Xl = Date.now();
    const o = /* @__PURE__ */ new Date(), r = new Date(o.getFullYear(), o.getMonth(), o.getDate() - 30);
    try {
      const c = await l.ws({ type: "recorder/statistics_during_period", start_time: r.toISOString(), end_time: o.toISOString(), statistic_ids: [e], period: "day", types: ["max"] }), h = (c == null ? void 0 : c[e]) || [], k = {};
      if (h.forEach((A) => {
        Number.isFinite(A.max) && (k[Ot(new Date(A.start))] = A.max);
      }), !Object.keys(k).length) {
        const A = await l.ws({ type: "history/history_during_period", start_time: r.toISOString(), end_time: o.toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((A == null ? void 0 : A[e]) || []).forEach((P) => {
          const te = Number(P.s ?? P.state), ae = P.lu ? P.lu * 1e3 : Date.parse(P.last_updated || P.last_changed);
          if (!Number.isFinite(te) || !ae) return;
          const $ = Ot(new Date(ae));
          k[$] = Math.max(k[$] || 0, te);
        });
      }
      Be = k, So();
    } catch {
    }
  }
  function fi() {
    So();
  }
  fi(), setInterval(() => {
    fi(), Ua(), Ga();
  }, 10 * 60 * 1e3);
  function Ql(e) {
    const o = {}, r = {};
    rt.history.forEach((A) => {
      const P = Ot(new Date(A.start));
      o[P] = (o[P] || 0) + (A.seconds || 0) / 60, r[P] = (r[P] || 0) + 1;
    });
    const c = /* @__PURE__ */ new Date(), h = Ot(c), k = [];
    for (let A = e - 1; A >= 0; A--) {
      const P = new Date(c.getFullYear(), c.getMonth(), c.getDate() - A), te = Ot(P), ae = rt.checkins.filter((Z) => Z.date === te), $ = (Z) => {
        const Me = ae.map((ze) => ze[Z]).filter(Boolean);
        return Me.length ? Me.reduce((ze, Te) => ze + Te, 0) / Me.length : null;
      };
      k.push({
        key: te,
        date: P,
        minutes: Math.round(o[te] || 0),
        moves: r[te] || 0,
        steps: te === h && Kl() != null ? Kl() : Be[te] ?? null,
        mood: $("mood"),
        energy: $("energy")
      });
    }
    return k;
  }
  function Vc(e) {
    let o = e.length - 1;
    e[o] && !e[o].minutes && o--;
    let r = 0;
    for (; o >= 0 && e[o].minutes > 0; )
      r++, o--;
    return r;
  }
  function So() {
    const e = i("insightCard");
    if (!e) return;
    const o = Ql(30), r = Vc(o), c = o.reduce((ae, $) => ae + $.minutes, 0), h = /* @__PURE__ */ new Date(), k = Ot(h), A = Ot(new Date(h.getFullYear(), h.getMonth(), h.getDate() - (h.getDay() + 6) % 7)), P = o.filter((ae) => ae.key >= A && ae.key <= k).reduce((ae, $) => ae + $.minutes, 0), te = (ae, $, Z) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + ae + '</div><div><div class="activityRowName">' + He($) + '</div><div class="activityRowMeta">' + He(Z) + "</div></div></div>";
    e.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + xe("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + te(xe("clock"), "This week", P + " min") + te(xe("streak"), "Streak", r + " day" + (r === 1 ? "" : "s")) + te(xe("calendar"), "30 days", c + " min") + "</div>";
  }
  const ol = {
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
  }, jc = (e) => e === "sunny" ? "clear" : e === "clear-night" ? "night" : e === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(e) ? "rain" : ["snowy", "snowy-rainy"].includes(e) ? "snow" : "cloudy", ji = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, cs = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let ed = 0;
  const il = (e, o) => '<path class="' + o + '" d="' + e + '"/>', Gc = (e, o) => ' style="animation-delay:-' + Math.round(e * 137 % o) + 'ms"', ba = (e, o, r, c) => {
    const h = r * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (c < 1 ? ' opacity="' + c + '"' : "") + Gc(e, 2400) + ' d="M' + e + " " + (o - r) + "L" + (e + h) + " " + (o - h) + "L" + (e + r) + " " + o + "L" + (e + h) + " " + (o + h) + "L" + e + " " + (o + r) + "L" + (e - h) + " " + (o + h) + "L" + (e - r) + " " + o + "L" + (e - h) + " " + (o - h) + 'Z"/>';
  }, td = ([e, o, r], c) => '<path class="wxMoonPath" d="' + e + '" fill="url(#' + c + ')"/><defs><linearGradient id="' + c + '" x1="0" y1="' + o + '" x2="0" y2="' + r + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Uc = (e, o) => o ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Yc = (e) => (e ? ["29.35", "43.04", "56.74"].map((o, r) => '<g class="wxDrop" style="animation-delay:-' + r * 317 + 'ms"><rect class="wxAccent" x="' + o + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + o + ' 60.65)"/></g>') : [19, 26, 33].map((o, r) => '<g class="wxDrop" style="animation-delay:-' + r * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + o + ' 38)"/></g>')).join(""), Zc = (e) => (e ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([o, r], c) => '<circle class="wxFlake" style="animation-delay:-' + c * 640 + 'ms" cx="' + o + '" cy="' + r + '" r="' + (e ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function nd(e, o, r, c) {
    return e === "clear" ? o ? td(r ? cs.l : cs.s, c) + (r ? ba(70, 20, 5.83, 1) + ba(78.33, 41.67, 3.75, 0.8) + ba(60, 71.67, 3.33, 0.6) : ba(42, 12, 3.5, 1) + ba(47, 25, 2.25, 0.8) + ba(36, 43, 2, 0.6)) : Uc(c, r) : e === "partly" ? (o ? td(r ? cs.lp : cs.sp, c) : r ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + il(r ? ji.lp : ji.sp, o ? "wxCloudLight" : "wxBright") + (o ? r ? ba(73.33, 16.67, 4.17, 0.9) : ba(44, 10, 2.5, 0.9) : "") : e === "cloudy" ? il(r ? ji.lc : ji.s, o ? "wxCloudLight" : "wxBright") + (o ? r ? ba(15, 15, 3.75, 0.8) + ba(76.67, 13.33, 2.92, 0.6) : ba(9, 9, 2.25, 0.8) + ba(46, 8, 1.75, 0.6) : "") : il(r ? ji.lr : ji.s, "wxCloudLight") + (e === "rain" ? Yc(r) : Zc(r));
  }
  const Kc = () => {
    var e;
    return ((e = Yt == null ? void 0 : Yt["sun.sun"]) == null ? void 0 : e.state) === "below_horizon";
  };
  let sa = Je().weatherStyle || "bitmap", ad = Je().weatherLayout === "strip" ? "strip" : "tiles", $c = Je().weatherMotion !== !1;
  const Ar = () => $c && !Ie(), _r = /* @__PURE__ */ new Map(), rl = 700, Xc = (e) => {
    const [o, r] = e.split("/");
    return { k: o === "fog" ? "cloudy" : o === "storm" ? "rain" : o, night: r === "night" };
  };
  function us(e, o, r, c = sa, h, k) {
    let A = jc(e);
    const P = A === "night" || (k != null ? !!k : !!r && Kc());
    A === "night" && (A = "clear");
    const te = o ? 90 : 54, ae = Is(e, P), $ = performance.now();
    let Z = h ? _r.get(h) : null;
    if (h && !Z ? _r.set(h, Z = { key: ae, t0: -1e9 }) : Z && Z.key !== ae && (Z.fromKey = Z.key, Z.from = Z.last || null, Z.key = ae, Z.t0 = $), c !== "smooth") return '<span class="wxIcon pixels' + (o ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + ae + '"' + (h ? ' data-wx-slot="' + h + '"' : "") + ' data-wx-style="' + c + '" data-wx-size="' + te + '"></canvas></span>';
    let Me = "";
    if (Z && $ - Z.t0 < rl && (Ar() || Ie())) {
      const ze = Xc(Z.fromKey);
      Me = '<span class="wxLayer wxOut ' + ze.k + (ze.night ? " night" : "") + '" style="animation-delay:' + Math.round(Z.t0 - $) + 'ms"><svg viewBox="0 0 ' + te + " " + te + '">' + nd(ze.k, ze.night, o, "wxg" + ++ed) + "</svg></span>";
    }
    return '<span class="wxIcon ' + A + (P ? " night" : "") + (o ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + te + " " + te + '">' + nd(A, P, o, "wxg" + ++ed) + "</svg>" + Me + "</span>";
  }
  function ps() {
    const e = i("app"), o = getComputedStyle(e), r = (P) => o.getPropertyValue(P).trim(), c = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([P, te]) => {
      r(te) && (c[P] = r(te));
    });
    const h = r("--color-text-primary") || "#f1f1f1", k = r("--color-bg-card") || "#222222", A = e.classList.contains("light");
    return { colors: c, ink: A ? h : k, paper: A ? k : h };
  }
  function mi(e, o = performance.now()) {
    const r = e.querySelectorAll("canvas[data-wx]");
    if (!r.length) return;
    const c = ps(), h = Ar(), k = Ie();
    r.forEach((A) => {
      var Z;
      const P = A.dataset.wx, te = A.dataset.wxSlot ? _r.get(A.dataset.wxSlot) : null;
      let ae = Hl(P, c.colors);
      if (te && te.key === P) {
        const Me = (o - te.t0) / rl;
        Me < 1 && (h || k) && (ae = pu(te.from || Hl(te.fromKey, c.colors), ae, Math.max(0, Me), c.colors, k)), te.last = ae;
      }
      const $ = gc(ae, { size: Number(A.dataset.wxSize) || 54, px: 2, oneBit: A.dataset.wxStyle === "onebit", colors: c.colors, ink: c.ink, paper: c.paper, clock: o, idle: h });
      A.width !== $.w && (A.width = $.w), A.height !== $.h && (A.height = $.h), (Z = A.getContext("2d")) == null || Z.putImageData(new ImageData($.data, $.w, $.h), 0, 0);
    });
  }
  let hs = null, od = -1;
  function id(e) {
    if (hs = null, !m) return;
    const o = Ar(), r = Math.floor(e / 100), c = [..._r.values()].some((te) => e - te.t0 < rl), h = [...fs.values()].some((te) => e - te.t0 < te.dur), k = ke.home.classList.contains("active"), A = Jn.classList.contains("open"), P = o && sa === "smooth" && (A || k && ad === "strip");
    !document.hidden && (c || h || P || o && r !== od) && (od = r, k && (mi(i("weatherCard"), e), Er(i("weatherCard"), e)), A && (mi(Jn, e), Er(Jn, e))), (o || c || h) && (hs = requestAnimationFrame(id));
  }
  function gi() {
    i("app").classList.toggle("wxMotion", Ar()), !hs && m && (hs = requestAnimationFrame(id));
  }
  let rd = [];
  const $t = 36e5, Jc = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function To() {
    const e = /* @__PURE__ */ new Date(), o = (k, A) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + k, A), r = [], c = [], h = [...Array(6)].map((k, A) => {
      const P = o(A, 6), te = o(A, 18), ae = o(A + 1, 6), $ = rd.find((Me) => Ot(new Date(Me.datetime)) === Ot(P)), Z = (Me, ze, Te) => {
        const ye = r.filter((ct) => ct.t >= +Me && ct.t < +ze);
        if (ye.length) {
          const ct = {};
          return ye.forEach((Ae) => {
            ct[Ae.c] = (ct[Ae.c] || 0) + (Jc.has(Ae.c) ? 2 : 1);
          }), Object.entries(ct).sort((Ae, ut) => ut[1] - Ae[1])[0][0];
        }
        const ve = c.find((ct) => {
          const Ae = +new Date(ct.datetime);
          return Ae >= +Me - 3 * $t && Ae < +ze && (ct.is_daytime == null || !!ct.is_daytime == !Te);
        });
        if (ve) return ve.condition;
        const dt = ($ == null ? void 0 : $.condition) || "cloudy";
        return Te && dt === "sunny" ? "clear-night" : dt;
      };
      return { start: +P, end: +ae, day: Z(P, te, !1), night: Z(te, ae, !0), hi: Number($ == null ? void 0 : $.temperature), lo: Number($ == null ? void 0 : $.templow) };
    });
    return { days: h, hours: r, start: h[0].start, end: h[5].end };
  }
  const sd = (e, o) => {
    const r = e.days.findIndex((h) => o < h.end);
    if (r < 0) return 1;
    const c = e.days[r];
    return Math.max(0, (r + (o - c.start) / (c.end - c.start)) / 6);
  }, Qc = (e, o) => {
    const r = Math.max(0, Math.min(0.99999, o)) * 6, c = Math.floor(r), h = e.days[c];
    return h.start + (r - c) * (h.end - h.start);
  };
  function sl(e, o) {
    const r = Math.max(0, e.days.findIndex((te) => o < te.end)), c = e.days[r], h = (o - c.start) / (c.end - c.start) >= 0.5;
    let k = h ? c.night : c.day, A = NaN;
    const P = e.hours;
    if (P.length && o >= P[0].t - $t && o <= P[P.length - 1].t + $t) {
      let te = P.findIndex((Z) => Z.t > o);
      te < 0 && (te = P.length);
      const ae = P[Math.max(0, te - 1)], $ = P[Math.min(P.length - 1, te)];
      k = ae.c || k, A = $.t > ae.t ? ae.temp + ($.temp - ae.temp) * Math.max(0, Math.min(1, (o - ae.t) / ($.t - ae.t))) : ae.temp;
    }
    if (!Number.isFinite(A)) {
      const te = [];
      if (e.days.forEach((ae) => {
        Number.isFinite(ae.lo) && te.push([ae.start - $t, ae.lo]), Number.isFinite(ae.hi) && te.push([ae.start + 9 * $t, ae.hi]);
      }), te.length) {
        A = o <= te[0][0] ? te[0][1] : te[te.length - 1][1];
        for (let ae = 1; ae < te.length; ae++) if (o <= te[ae][0] && o > te[ae - 1][0]) {
          const [$, Z] = te[ae - 1], [Me, ze] = te[ae];
          A = Z + (ze - Z) * (1 - Math.cos(Math.PI * (o - $) / (Me - $))) / 2;
          break;
        }
      }
    }
    return { cond: h && k === "sunny" ? "clear-night" : k, temp: A, night: h, day: c };
  }
  const ld = (e) => Ot(new Date(e)) === Ot(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(e)), fs = /* @__PURE__ */ new Map(), eu = 900, tu = 700;
  let ms = null;
  const wa = typeof ResizeObserver == "function" ? new ResizeObserver((e) => e.forEach((o) => {
    Er(o.target.parentElement), o.target.closest("#wxDialog") && fd();
  })) : null;
  function Er(e, o = performance.now()) {
    const r = e.querySelectorAll("canvas[data-wx-strip]");
    if (!r.length) return;
    const c = To(), h = c.days.flatMap((Z) => [{ cond: Z.day, night: !1 }, { cond: Z.night, night: !0 }]), k = h.map((Z) => Z.cond).join(), A = ps(), P = Ar(), te = Ie(), ae = Number(Ot(new Date(c.start)).replace(/\D/g, "")) % 9973;
    let $ = !1;
    r.forEach((Z) => {
      var ct;
      const Me = Z.clientWidth, ze = Z.clientHeight;
      if (!Me || !ze) return;
      const Te = Z.dataset.wxStrip;
      let ye = fs.get(Te);
      ye ? ye.sig !== k && (ye.prev = ye.segs, ye.sig = k, ye.segs = h, ye.t0 = o, ye.dur = tu) : fs.set(Te, ye = { sig: k, segs: h, prev: null, t0: o, dur: eu });
      const ve = P || te ? Math.min(1, Math.max(0, (o - ye.t0) / ye.dur)) : 1;
      ve < 1 && ($ = !0);
      const dt = { width: Me, height: ze, colors: A.colors, clock: o, ambient: P, seed: ae, reveal: te ? ve : 1 - Math.pow(1 - ve, 3), prev: ve < 1 ? ye.prev : null, reduce: te };
      if (sa === "smooth") {
        const Ae = Math.min(2, window.devicePixelRatio || 1), ut = Math.round(Me * Ae), yt = Math.round(ze * Ae);
        Z.width !== ut && (Z.width = ut), Z.height !== yt && (Z.height = yt);
        const Qe = Z.getContext("2d");
        if (!Qe) return;
        Qe.setTransform(Ae, 0, 0, Ae, 0, 0), Lu(Qe, h, dt);
      } else {
        const Ae = Tu(h, { ...dt, px: 2, oneBit: sa === "onebit", ink: A.ink, paper: A.paper });
        Z.width !== Ae.w && (Z.width = Ae.w), Z.height !== Ae.h && (Z.height = Ae.h), (ct = Z.getContext("2d")) == null || ct.putImageData(new ImageData(Ae.data, Ae.w, Ae.h), 0, 0);
      }
    }), $ && gi();
  }
  function dd() {
    const e = i("weatherCard");
    if (!e || e.hidden) return;
    const o = Mn.weather, r = o && (Yt == null ? void 0 : Yt[o]);
    if (!r) {
      e.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + us("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (o ? "Not available" : "Set up in Settings") + "</div></div></div></div>", mi(e);
      return;
    }
    const c = r.attributes || {}, h = c.temperature_unit || "°", k = (Qe) => Number.isFinite(Number(Qe)) ? Math.round(Number(Qe)) + "°" : "—", A = (c.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", P = ol[r.state] || (r.state ? r.state.charAt(0).toUpperCase() + r.state.slice(1) : "—"), te = Ot(/* @__PURE__ */ new Date()), ae = rd.slice(0, 7), $ = ae.find((Qe) => Ot(new Date(Qe.datetime)) === te) || null, Z = ae.filter((Qe) => Ot(new Date(Qe.datetime)) >= te).slice(0, 6), Me = /* @__PURE__ */ new Date(), ze = Ot(new Date(Me.getFullYear(), Me.getMonth(), Me.getDate() + 1)), Te = $ ? "H " + k($.temperature) + "&ensp; L " + k($.templow) : "", ye = (Qe) => {
      const Ye = Ot(new Date(Qe.datetime));
      return Ye === te ? "Today" : Ye === ze ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(Qe.datetime));
    }, ve = Number.isFinite(Number(c.temperature)) ? Math.round(Number(c.temperature)) : "—", dt = (Qe) => {
      const Ye = new Date(Qe.datetime);
      return Math.round((new Date(Ye.getFullYear(), Ye.getMonth(), Ye.getDate()) - new Date(Me.getFullYear(), Me.getMonth(), Me.getDate())) / 864e5);
    }, ct = (Qe) => (ol[Qe] || Qe || "").toLowerCase(), Ae = (Qe, Ye) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + dt(Qe) + '" aria-label="' + He(ye(Qe) + ": " + ct(Qe.condition) + ", " + k(Qe.temperature) + " / " + k(Qe.templow) + ". Open the forecast") + '">' + us(Qe.condition, !1, !1, sa, "day" + Ye) + '<div><div class="activityRowName">' + He(ye(Qe)) + '</div><div class="activityRowMeta">' + k(Qe.temperature) + " / " + k(Qe.templow) + "</div></div></div>", ut = () => '<div class="wxStrip"><div class="wxStripDays">' + To().days.map((Ye, Xt) => {
      const Ht = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(Ye.start)) + ": " + ct(Ye.day) + (ct(Ye.day) === ct(Ye.night) ? " all day and night" : ", then " + ct(Ye.night) + " overnight") + (Number.isFinite(Ye.hi) ? ". High " + k(Ye.hi) : "") + (Number.isFinite(Ye.lo) ? ", low " + k(Ye.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + Xt + '" aria-label="' + He(Ht) + '"><span class="wxDayName">' + He(ld(Ye.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + k(Ye.hi) + '</span><span class="wxLow">' + k(Ye.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    e.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + He("Now in " + A + ": " + ve + "°, " + ct(r.state) + ". Open the forecast") + '"><div class="wxCurrent">' + us(r.state, !0, !0, sa, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + He(String(ve)) + '</span><span class="wxUnit">' + He(h) + '</span></div><div class="wxPlace">' + He(A) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + He(P) + "</div>" + (Te ? '<div class="wxRange">' + Te + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (Z.length ? ad === "strip" ? ut() : '<div class="activityRows wxDays">' + Z.map(Ae).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", mi(e);
    const yt = e.querySelector("canvas[data-wx-strip]");
    ms && ms !== yt && (wa == null || wa.unobserve(ms)), ms = yt, yt && (wa == null || wa.observe(yt), Er(e)), gi(), hd();
  }
  const cd = i("weatherCard"), ud = (e) => {
    const o = e.closest("[data-wx-day]");
    if (o) {
      const c = /* @__PURE__ */ new Date();
      pd(+new Date(c.getFullYear(), c.getMonth(), c.getDate() + Number(o.dataset.wxDay), 12), o);
      return;
    }
    const r = e.closest("[data-wx-open]");
    r && pd(Date.now(), r);
  };
  cd.addEventListener("click", (e) => ud(e.target)), cd.addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && e.target.matches("[data-wx-day],[data-wx-open]") && (e.preventDefault(), ud(e.target));
  });
  const Jn = i("wxDialog"), Ho = i("wxGraph"), Dr = i("wxGraphWrap");
  let Fa = Date.now(), vi = null, ll = !1, Gi = null;
  function pd(e, o) {
    const r = To();
    vi = o || null, Fa = Math.max(r.start, Math.min(r.end - $t, e)), fs.delete("dialog"), _r.delete("scrub"), Jn.classList.add("open"), Jn.setAttribute("aria-hidden", "false"), hd(), wa == null || wa.observe(Jn.querySelector("canvas[data-wx-strip]")), Ho.focus({ preventScroll: !0 }), gi();
  }
  function dl() {
    var e;
    Jn.classList.remove("open"), Jn.setAttribute("aria-hidden", "true"), wa == null || wa.unobserve(Jn.querySelector("canvas[data-wx-strip]")), (e = vi == null ? void 0 : vi.focus) == null || e.call(vi, { preventScroll: !0 }), vi = null;
  }
  function hd() {
    if (!Jn.classList.contains("open")) return;
    const e = To();
    i("wxGraphDays").innerHTML = e.days.map((o) => "<span>" + He(ld(o.start)) + "</span>").join(""), fd(e), gs(e), Er(Jn);
  }
  function gs(e = To()) {
    const o = sl(e, Fa), r = Yt == null ? void 0 : Yt[Mn.weather], c = (r == null ? void 0 : r.attributes) || {}, h = c.temperature_unit || "°", k = Math.abs(Fa - Date.now()) < $t / 2, A = k && r ? r.state : o.cond, P = k && Number.isFinite(Number(c.temperature)) ? Math.round(Number(c.temperature)) : Number.isFinite(o.temp) ? Math.round(o.temp) : "—", te = ol[A] || (A ? A.charAt(0).toUpperCase() + A.slice(1) : "—"), ae = k ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(Fa / $t) * $t)), $ = o.day, Z = (Number.isFinite($.hi) ? "H " + Math.round($.hi) + "°" : "") + (Number.isFinite($.lo) ? "&ensp; L " + Math.round($.lo) + "°" : "");
    i("wxDialogNow").innerHTML = '<div class="wxCurrent">' + us(A, !0, k, sa, "scrub", k ? void 0 : o.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + He(String(P)) + '</span><span class="wxUnit">' + He(h) + '</span></div><div class="wxPlace">' + He(ae) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + He(te) + "</div>" + (Z ? '<div class="wxRange">' + Z + "</div>" : "") + "</div>", mi(i("wxDialogNow")), Ho.setAttribute("aria-valuenow", String(Math.round((Fa - e.start) / $t))), Ho.setAttribute("aria-valuetext", ae + ", " + te.toLowerCase() + ", " + P + "°"), cl(e), gi();
  }
  function fd(e = To()) {
    const o = i("wxGraphLine"), r = Dr.clientWidth, c = Dr.clientHeight;
    if (!r || !c) return;
    const h = [];
    for (let ve = e.start; ve <= e.end; ve += $t) {
      const dt = sl(e, ve).temp;
      Number.isFinite(dt) && h.push([sd(e, ve) * r, dt]);
    }
    if (o.setAttribute("viewBox", "0 0 " + r + " " + c), h.length < 2) {
      o.innerHTML = '<g id="wxCursorMark"></g>', Gi = null, cl(e);
      return;
    }
    const k = h.map((ve) => ve[1]), A = Math.min(...k), P = Math.max(...k), te = Math.max(4, P - A), ae = sa !== "smooth", $ = (ve) => ae ? Math.round(ve / 2) * 2 : Math.round(ve * 10) / 10;
    Gi = (ve) => c * 0.84 - (ve - A) / te * c * 0.62;
    const Z = ps(), Me = sa === "onebit" ? Z.paper : "#ffffff", ze = sa === "onebit" ? Z.ink : "rgba(0,0,0,.28)", Te = "M" + h.map((ve) => $(ve[0]) + " " + $(Gi(ve[1]))).join(" L"), ye = (ve, dt) => {
      const ct = h.find((Ae) => Ae[1] === ve);
      return '<text class="wxLineLabel" x="' + $(Math.min(r - 14, Math.max(14, ct[0]))) + '" y="' + $(Gi(ve) + (dt ? 18 : -10)) + '" fill="' + Me + '" stroke="' + ze + '">' + Math.round(ve) + "°</text>";
    };
    o.setAttribute("shape-rendering", ae ? "crispEdges" : "auto"), o.innerHTML = '<path d="' + Te + '" fill="none" stroke="' + ze + '" stroke-width="' + (ae ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + Te + '" fill="none" stroke="' + Me + '" stroke-width="2" stroke-linejoin="round"/>' + ye(P, !1) + ye(A, !0) + '<g id="wxCursorMark"></g>', cl(e);
  }
  function cl(e = To()) {
    const o = i("wxGraphLine").querySelector("#wxCursorMark");
    if (!o) return;
    const r = Dr.clientWidth, c = Dr.clientHeight, h = sa !== "smooth", k = (Me) => h ? Math.round(Me / 2) * 2 : Me, A = k(sd(e, Fa) * r), P = sl(e, Fa).temp, te = ps(), ae = sa === "onebit" ? te.paper : "#ffffff", $ = sa === "onebit" ? te.ink : "rgba(0,0,0,.28)", Z = Gi && Number.isFinite(P) ? k(Gi(P)) : null;
    o.innerHTML = '<rect x="' + (A - 2) + '" y="0" width="4" height="' + c + '" fill="' + $ + '"/><rect x="' + (A - 1) + '" y="0" width="2" height="' + c + '" fill="' + ae + '"/>' + (Z == null ? "" : h ? '<rect x="' + (A - 5) + '" y="' + (Z - 5) + '" width="10" height="10" fill="' + ae + '" stroke="' + $ + '" stroke-width="2"/>' : '<circle cx="' + A + '" cy="' + Z + '" r="6" fill="' + ae + '" stroke="' + $ + '" stroke-width="2"/>');
  }
  const md = (e) => {
    const o = Dr.getBoundingClientRect();
    o.width && (Fa = Qc(To(), (e - o.left) / o.width), gs());
  };
  Ho.addEventListener("pointerdown", (e) => {
    if (e.button === 0) {
      ll = !0;
      try {
        Ho.setPointerCapture(e.pointerId);
      } catch {
      }
      md(e.clientX);
    }
  }), Ho.addEventListener("pointermove", (e) => {
    ll && md(e.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((e) => Ho.addEventListener(e, () => {
    ll = !1;
  })), Ho.addEventListener("keydown", (e) => {
    const o = To(), r = { ArrowLeft: -$t, ArrowRight: $t, ArrowDown: -$t, ArrowUp: $t, PageUp: -24 * $t, PageDown: 24 * $t }[e.key];
    r ? (e.preventDefault(), Fa = Math.max(o.start, Math.min(o.end - $t, Math.round(Fa / $t) * $t + r)), gs(o)) : (e.key === "Home" || e.key === "End") && (e.preventDefault(), Fa = e.key === "Home" ? o.start : o.end - $t, gs(o));
  }), i("wxDialogClose").addEventListener("click", dl), Jn.addEventListener("click", (e) => {
    e.target === Jn && dl();
  }), Jn.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), dl());
  }), dd(), (Td = (Cd = window.matchMedia) == null ? void 0 : (Sd = Cd.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || Td.call(Sd, "change", () => {
    gi(), mi(n);
  }), gi();
  const gd = i("tvNav");
  l.fullscreenSupported || (gd.hidden = !0), gd.addEventListener("click", () => l.toggleFullscreen()), n.addEventListener("keydown", (e) => {
    !ke.workout.classList.contains("active") || Da.classList.contains("active") || e.target.closest("input,select,textarea,.holdEnd") || (e.key === "MediaPlayPause" || e.key === " " && !e.target.closest("button") ? (e.preventDefault(), mr.click()) : e.key === "MediaTrackNext" ? (e.preventDefault(), i("skipExercise").click()) : e.key === "MediaTrackPrevious" && (e.preventDefault(), i("restartSegment").click()));
  }), n.querySelectorAll("[data-rounds-step]").forEach((e) => e.addEventListener("click", () => {
    const o = Math.max(1, Math.min(10, (Number(Xe.value) || 1) + Number(e.dataset.roundsStep)));
    String(o) !== Xe.value && (Xe.value = o, Xe.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [S, M, E, Xe].forEach((e) => e.addEventListener("input", () => {
    const o = Ve[pt];
    o && (o.total = Number(S.value), o.work = Number(M.value), o.rest = Number(E.value)), O();
  })), Ce.addEventListener("click", xr), qe.addEventListener("click", () => y("settings")), i("settingsBack").addEventListener("click", xr), mr.addEventListener("click", () => ma(!wn)), Dn(pt), Di(), Ua(), So(), i("healthHelpOpen").addEventListener("click", () => n.querySelector(".tab[data-pane=helpPane]").click()), a(i("resetStats"), i("resetStatsFill"), 1500, () => {
    rt.history = [], rt.checkins = [], pa = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    rn(), fi(), Ua(), Di(), So(), Ga(), Dt("Stats reset");
  });
  const ul = i("morningTime"), pl = i("eveningTime"), hl = i("checkinAutoOpen");
  ul.value = za().morning, pl.value = za().evening, hl.classList.toggle("on", Je().checkinAutoOpen !== !1), [["morningTime", ul], ["eveningTime", pl]].forEach(([e, o]) => o.addEventListener("change", () => {
    o.value && (J(e, o.value), Ga());
  })), hl.addEventListener("click", () => {
    const e = Je().checkinAutoOpen === !1;
    hl.classList.toggle("on", e), J("checkinAutoOpen", e);
  }), setTimeout(Ei, 800);
  const vd = i("checkinNotify"), vs = i("checkinNotifyTarget"), bd = i("checkinNotifyStatus"), nu = bd.textContent;
  function wd() {
    const e = l.notifyServices(), o = e.filter((h) => h.startsWith("mobile_app_")), r = o.length ? o : e, c = (h) => h.replace(/^mobile_app_/, "").replace(/_/g, " ");
    vs.innerHTML = r.map((h) => '<option value="' + He(h) + '">' + He(c(h)) + "</option>").join(""), !Je().notifyTarget && r[0] && (Je().notifyTarget = r[0]), vs.value = Je().notifyTarget || "";
  }
  function bs() {
    const e = !!Je().notifyOn;
    vd.classList.toggle("on", e), i("checkinNotifyTargetRow").hidden = !e;
    const o = za();
    bd.textContent = e ? "Sends at " + o.morning + " and " + o.evening : nu;
  }
  async function fl() {
    const e = !!Je().notifyOn;
    try {
      return await l.setReminderAutomation(e ? { target: Je().notifyTarget, times: za() } : null), !0;
    } catch {
      return Dt("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  vd.addEventListener("click", async () => {
    const e = !Je().notifyOn;
    if (e && (wd(), !Je().notifyTarget)) {
      Dt("Install the Companion app on your phone first");
      return;
    }
    Je().notifyOn = e, bs(), await fl() ? (rn(), Dt(e ? "Check-in notifications on" : "Check-in notifications off")) : (Je().notifyOn = !e, bs());
  }), vs.addEventListener("change", () => {
    J("notifyTarget", vs.value), Je().notifyOn && fl();
  }), [ul, pl].forEach((e) => e.addEventListener("change", () => {
    bs(), Je().notifyOn && fl();
  })), wd(), bs();
  let ml = null;
  function au() {
    ml || (ml = setTimeout(() => {
      ml = null, So();
    }, 3e4));
  }
  return {
    updateStates(e) {
      var r, c;
      const o = !Yt || Yt[Mn.weather] !== e[Mn.weather] || ((r = Yt["sun.sun"]) == null ? void 0 : r.state) !== ((c = e["sun.sun"]) == null ? void 0 : c.state);
      Yt = e, hi(e), $l(e), o && dd(), Date.now() - Xl > 60 * 60 * 1e3 && Jl(), au();
    },
    applyRemoteData(e) {
      if (e && (Array.isArray(e.history) && (rt.history = e.history, fi()), Array.isArray(e.history) && So(), Array.isArray(e.checkins) && (rt.checkins = e.checkins.map(jo), Ga(), Di(), Ua(), fi(), So()), e.profiles && !yn.classList.contains("open") && !Xn)) {
        const o = io(e);
        Object.keys(Ve).forEach((r) => delete Ve[r]), Object.assign(Ve, o.profiles), rt.order = o.order, Ve[pt] || (pt = rt.order[0]), ta(), Dn(pt);
      }
    },
    suspend() {
      m = !1;
    },
    resume() {
      m || (m = !0, Pn || (Pn = requestAnimationFrame(Hi)), Ut || (Ut = requestAnimationFrame(Fi)), gi(), x(n.querySelector(".tab.active"), !1));
    }
  };
}
const Eu = /* @__PURE__ */ new Set(["roaming", "test_area"]), Du = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window" },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62 }
}, Nr = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, nn = "made_up_", bi = (n) => {
  var l;
  return (l = String(n).split(".")[1]) == null ? void 0 : l.startsWith(nn);
}, ks = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function Ul(n) {
  const l = n.getHours() + n.getMinutes() / 60, i = Math.max(0, Math.sin((l - 7) / 13 * Math.PI));
  return 2.4 * i * i;
}
function Ru(n) {
  const l = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  let i = 0;
  for (let u = +l; u < +n; u += 10 * 60 * 1e3) i += Ul(new Date(u)) / 6;
  return i;
}
function Dd(n = /* @__PURE__ */ new Date()) {
  const l = [];
  for (let i = 0; i <= 96; i++) {
    const u = +n - (96 - i) * 15 * 60 * 1e3;
    l.push([u, Ul(new Date(u))]);
  }
  return l;
}
function Nu({ onChange: n }) {
  const l = {}, i = {}, u = (U, j, X, W) => {
    l[U] = { entity_id: U, state: X, attributes: W, last_changed: new Date(Date.now() - 18e6).toISOString() }, i[U] = j;
  }, f = (U, j, X) => {
    const W = l[U], K = j ?? W.state;
    l[U] = { ...W, state: K, attributes: { ...W.attributes, ...X }, last_changed: K === W.state ? W.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, m = (U, j, X, W) => u("binary_sensor." + nn + (U ? U + "_" : "") + ks(j), U, W ? "on" : "off", { friendly_name: j, device_class: X });
  Object.entries(Du).forEach(([U, j]) => {
    if (j.temperature != null && u("sensor." + nn + U + "_temperature", U, String(j.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), j.humidity != null && u("sensor." + nn + U + "_humidity", U, String(j.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), j.vacuum && u("vacuum." + nn + "robot", U, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), j.climate && u("climate." + nn + U, U, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: j.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), j.cover) {
      const [X, W, K, ie] = j.cover;
      u("cover." + nn + U + "_" + ks(X), U, K ? "open" : "closed", { friendly_name: X, device_class: W, current_position: K, ...ie != null ? { current_tilt_position: ie } : {} });
    }
    if (j.humidifier && u("humidifier." + nn + U, U, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: j.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), j.solar && (u("sensor." + nn + U + "_solar_power", U, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), u("sensor." + nn + U + "_solar_today", U, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), j.valve && u("valve." + nn + U + "_" + ks(j.valve), U, "closed", { friendly_name: j.valve, device_class: "water" }), j.door && m(U, j.door, "door", j.doorOpen), j.window && m(U, j.window, "window", !1), j.motion && m(U, j.motion, "motion", !1), j.plant) {
      const [X, W, K, ie, _] = j.plant, z = nn + ks(X), ge = (v, ke, Ce, qe, y) => u("sensor." + z + "_" + v, U, String(Ce), { friendly_name: ke, device_class: y, state_class: "measurement", unit_of_measurement: qe, plant_low: Ce < Nr[v][0], plant_high: Ce > Nr[v][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[v] });
      ge("moisture", "Moisture", W, "%", "moisture"), ge("light", "Light", K, "lx", "illuminance"), ge("temperature", "Temperature", ie, "°C", "temperature"), ge("fertility", "Fertility", _, "µS/cm", "conductivity");
      const Se = Object.entries({ moisture: W, light: K, temperature: ie, fertility: _ }).filter(([v, ke]) => ke < Nr[v][0] || ke > Nr[v][1]).map(([v, ke]) => v + (ke < Nr[v][0] ? " low" : " high"));
      u("plant." + z, U, Se.length ? "problem" : "ok", { friendly_name: X, moisture: W, brightness: K, temperature: ie, conductivity: _, problem: Se.join(", ") || "none" });
    }
  }), u("alarm_control_panel." + nn + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), m(null, "Front door", "door", !1), m(null, "Smoke alarm", "smoke", !1), u("sensor." + nn + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const w = {}, L = {};
  let b = null;
  function N() {
    const U = /* @__PURE__ */ new Date();
    Object.keys(l).forEach((j) => {
      j.endsWith("_solar_power") && (l[j] = { ...l[j], state: Ul(U).toFixed(2) }), j.endsWith("_solar_today") && (l[j] = { ...l[j], state: Ru(U).toFixed(1) });
    });
  }
  N();
  let le = 0;
  function oe() {
    let U = !1;
    const j = ++le % 10 === 0, X = (ie, _, z) => {
      f(ie, _, z), U = !0;
    };
    Object.entries(w).forEach(([ie, _]) => {
      const z = l[ie].attributes.current_position, ge = z < _ ? Math.min(_, z + 10) : Math.max(_, z - 10);
      ge === _ && delete w[ie], X(ie, ge === _ ? ge === 0 ? "closed" : "open" : _ > z ? "opening" : "closing", { current_position: ge });
    }), Object.entries(L).forEach(([ie, _]) => {
      const z = l[ie].attributes.current_tilt_position, ge = z < _ ? Math.min(_, z + 25) : Math.max(_, z - 25);
      ge === _ && delete L[ie], X(ie, null, { current_tilt_position: ge });
    }), Object.keys(l).filter((ie) => ie.startsWith("climate.")).forEach((ie) => {
      const _ = l[ie], z = _.attributes, ge = z.current_temperature, Se = (_.state === "heat" || _.state === "auto") && ge < z.temperature - 0.05, v = (_.state === "cool" || _.state === "auto") && ge > z.temperature + 0.05, ke = _.state === "off" ? "off" : Se ? "heating" : v ? "cooling" : "idle", Ce = j ? Math.round((ge + (Se ? 0.1 : v ? -0.1 : 0)) * 10) / 10 : ge;
      (Ce !== ge || ke !== z.hvac_action) && X(ie, null, { current_temperature: Ce, hvac_action: ke });
    }), Object.keys(l).filter((ie) => ie.startsWith("humidifier.")).forEach((ie) => {
      const _ = l[ie], z = _.attributes, ge = z.current_humidity, Se = _.state === "on" && ge < z.humidity, v = Se && j ? ge + 1 : ge, ke = _.state !== "on" ? "off" : Se ? "humidifying" : "idle";
      if (v !== ge || ke !== z.action) {
        X(ie, null, { current_humidity: v, action: ke });
        const Ce = "sensor." + nn + i[ie] + "_humidity";
        l[Ce] && X(Ce, String(v));
      }
    });
    const W = l["vacuum." + nn + "robot"], K = W.attributes;
    W.state === "cleaning" && j && X(W.entity_id, null, { battery_level: Math.max(5, K.battery_level - 1) }), W.state === "returning" && X(W.entity_id, "docked", {}), W.state === "docked" && K.battery_level < 100 && X(W.entity_id, null, { battery_level: Math.min(100, K.battery_level + 2) }), b && Date.now() - b.at > 5e3 && (X("alarm_control_panel." + nn + "house", "armed_" + b.mode, {}), b = null), U && n();
  }
  const R = setInterval(oe, 1e3), B = setInterval(() => {
    N(), n();
  }, 60 * 1e3);
  function Y(U, j, X) {
    const W = X == null ? void 0 : X.entity_id;
    if (!l[W]) return !1;
    const K = l[W], ie = K.attributes, _ = (z, ge) => f(W, z, ge);
    if (U === "climate" && (j === "set_temperature" && _(null, { temperature: Math.max(ie.min_temp, Math.min(ie.max_temp, X.temperature)) }), j === "set_hvac_mode" && _(X.hvac_mode, X.hvac_mode === "off" ? { hvac_action: "off" } : {}), j === "toggle" && _(K.state === "off" ? "heat" : "off", K.state === "off" ? {} : { hvac_action: "off" })), U === "cover") {
      const z = j === "open_cover" ? 100 : j === "close_cover" ? 0 : j === "set_cover_position" ? X.position : j === "toggle" ? ie.current_position > 0 ? 0 : 100 : null;
      j === "stop_cover" && (delete w[W], delete L[W], _(ie.current_position === 0 ? "closed" : "open")), z != null && z !== ie.current_position && (w[W] = z, _(z > ie.current_position ? "opening" : "closing"));
      const ge = j === "open_cover_tilt" ? 100 : j === "close_cover_tilt" ? 0 : j === "set_cover_tilt_position" ? X.tilt_position : null;
      j === "stop_cover_tilt" && delete L[W], ge != null && ie.current_tilt_position != null && ge !== ie.current_tilt_position && (L[W] = ge);
    }
    if (U === "humidifier" && (j === "set_humidity" && _(null, { humidity: Math.max(ie.min_humidity, Math.min(ie.max_humidity, X.humidity)) }), j === "set_mode" && _(null, { mode: X.mode }), j === "turn_on" || j === "turn_off" || j === "toggle")) {
      const z = j === "turn_on" || j === "toggle" && K.state !== "on";
      _(z ? "on" : "off", { action: z ? "idle" : "off" });
    }
    if (U === "vacuum" && (j === "start" && _("cleaning", { rooms: X.rooms || ie.rooms }), j === "pause" && _("paused"), j === "return_to_base" && _("returning", { rooms: [] }), j === "locate" && _(null, { located: Date.now() }), j === "set_rooms" && _(null, { rooms: X.rooms })), U === "valve") {
      const z = j === "open_valve" || j === "toggle" && K.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(j) && _(z ? "open" : "closed");
    }
    if (U === "alarm_control_panel") {
      j === "alarm_disarm" && (b = null, _("disarmed", { changed_by: "Matt" }));
      const z = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[j];
      z && (b = { mode: z, at: Date.now() }, _("arming", { changed_by: "Matt" }));
    }
    return n(), !0;
  }
  function Q(U) {
    const j = (U == null ? void 0 : U.states) || {}, X = (U == null ? void 0 : U.entities) || {}, W = (U == null ? void 0 : U.devices) || {}, K = (M) => {
      var de;
      const E = X[M];
      return E && (E.area_id || E.device_id && ((de = W[E.device_id]) == null ? void 0 : de.area_id)) || null;
    }, ie = (M) => {
      const E = X[M];
      return j[M] && j[M].state !== "unavailable" && !(E != null && E.hidden) && !(E != null && E.entity_category);
    }, _ = {};
    Object.keys(j).forEach((M) => {
      const E = K(M);
      E && ie(M) && (_[E] || (_[E] = [])).push(M);
    });
    const z = { ...j, ...l }, ge = (M) => {
      var E, de;
      return (de = (E = z[M]) == null ? void 0 : E.attributes) == null ? void 0 : de.device_class;
    }, Se = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], v = Object.keys(j).filter((M) => M.startsWith("vacuum.") && ie(M)), ke = Object.values((U == null ? void 0 : U.areas) || {}).filter((M) => !Eu.has(M.area_id)).map((M) => {
      const E = M.area_id, de = _[E] || [], q = (Ze) => de.filter((Mt) => Mt.startsWith(Ze + ".")), ee = (Ze) => q("sensor").filter((Mt) => ge(Mt) === Ze), re = (Ze) => Object.keys(l).filter((Mt) => i[Mt] === E && Ze(Mt)), pe = (Ze, Mt) => Ze.length ? Ze : re(Mt), We = pe(ee("temperature"), (Ze) => Ze.endsWith(E + "_temperature")), Xe = pe(ee("humidity"), (Ze) => Ze.endsWith(E + "_humidity")), vt = ee("power").filter((Ze) => /^(W|kW)$/.test(z[Ze].attributes.unit_of_measurement || "")), an = q("binary_sensor").filter((Ze) => ge(Ze) === "moisture"), En = pe(q("plant"), (Ze) => Ze.startsWith("plant.")).map((Ze) => ({ id: Ze, readings: re((Mt) => Mt.startsWith("sensor." + Ze.split(".")[1] + "_")) })), Ft = [...q("binary_sensor").filter((Ze) => Se.includes(ge(Ze))), ...re((Ze) => Ze.startsWith("binary_sensor."))];
      return {
        id: E,
        name: M.name,
        icon: M.icon,
        readings: [...We.slice(0, 1), ...Xe.slice(0, 1), ...an],
        power: vt.length ? vt.reduce((Ze, Mt) => Ze + Number(z[Mt].state) * (z[Mt].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: q("switch"),
        lights: q("light"),
        actions: [...q("light"), ...pe(q("climate"), (Ze) => Ze.startsWith("climate.")), ...pe(q("cover"), (Ze) => Ze.startsWith("cover.")), ...pe(q("humidifier"), (Ze) => Ze.startsWith("humidifier.")), ...pe(q("valve"), (Ze) => Ze.startsWith("valve.")), ...q("media_player"), ...q("vacuum"), ...v.length ? [] : re((Ze) => Ze.startsWith("vacuum."))],
        solar: re((Ze) => Ze.includes("_solar_")),
        plants: En,
        openings: Ft,
        alerts: [...an, ...Ft].filter((Ze) => {
          var Mt;
          return ((Mt = z[Ze]) == null ? void 0 : Mt.state) === "on";
        })
      };
    }).filter((M) => M.readings.length || M.plugs.length || M.actions.length || M.solar.length || M.plants.length), Ce = Object.keys(j).find((M) => /^sensor\..*(p1_meter_power|grid_power)$/.test(M) && j[M].state !== "unavailable") || null, qe = (M) => Object.keys(j).filter((E) => E.startsWith(M + ".") && ie(E)), y = qe("alarm_control_panel"), S = v.length ? v : ["vacuum." + nn + "robot"];
    return {
      states: z,
      rooms: ke,
      grid: Ce,
      vacuums: S,
      homeVacuums: S.filter((M) => !ke.some((E) => E.actions.includes(M))),
      security: {
        alarms: y.length ? y : ["alarm_control_panel." + nn + "house"],
        locks: qe("lock"),
        openings: [...Object.keys(l).filter((M) => M.startsWith("binary_sensor.")), "sensor." + nn + "doorbell"]
      }
    };
  }
  return { model: Q, call: Y, stop() {
    clearInterval(R), clearInterval(B);
  } };
}
const Ao = (n) => n < 0 ? 0 : n > 1 ? 1 : n, Fl = (n) => {
  const l = String(n || "#000000").trim().replace("#", ""), i = l.length === 3 ? l.split("").map((u) => u + u).join("") : l;
  return [0, 2, 4].map((u) => parseInt(i.slice(u, u + 2), 16) || 0);
}, Bu = (n) => "#" + n.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), Rd = {}, Ca = (n, l, i) => {
  const u = n + l + i;
  return Rd[u] || (Rd[u] = Bu(Fl(n).map((f, m) => f + (Fl(l)[m] - f) * i)));
}, Nd = {}, Ds = (n) => Nd[n] || (Nd[n] = Fl(n));
function Pu(n) {
  const l = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return l.partly = [Ca(l.clear[0], l.cloudy[0], 0.12), Ca(l.clear[1], l.cloudy[1], 0.12)], l.storm = [Ca(l.rain[0], "#000000", 0.22), Ca(l.rain[1], "#000000", 0.22)], l;
}
const Iu = [
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
], Lo = (n, l) => (Iu[(l & 7) * 8 + (n & 7)] + 0.5) / 64, xc = 1, yc = 2, kc = 3, Mc = 4, $i = 5, Ns = 6, Ol = 7, Cc = 8, Bd = (n, l) => l <= 0.6665 && ((n - 0.5) * (n - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && l >= 0.416), Hu = (n, l, i) => {
  let u = !1;
  for (let f = 0, m = n.length - 1; f < n.length; m = f++) {
    const w = n[f], L = n[m];
    w[1] > i != L[1] > i && l < (L[0] - w[0]) * (i - w[1]) / (L[1] - w[1]) + w[0] && (u = !u);
  }
  return u;
};
function Fu(n, l, i, u, { oneBit: f, ink: m, paper: w, snowInk: L }) {
  const b = new Uint8ClampedArray(i * u * 4), N = Ds(m), le = Ds(w);
  for (let oe = 0; oe < u; oe++) for (let R = 0; R < i; R++) {
    const B = oe * i + R, Y = l[B];
    if (n[B] == null) continue;
    let Q = Ds(n[B]);
    if (f) {
      let U;
      Y === Mc || Y === Cc ? U = !0 : Y === $i ? U = L : Y === Ol || Y === Ns ? U = !1 : U = Math.round((0.2126 * Q[0] + 0.7152 * Q[1] + 0.0722 * Q[2]) / 255 * 4) / 4 <= Lo(R, oe), (Y === xc || Y === yc || Y === kc || Y === Ns) && (R > 0 && l[B - 1] !== Y || R < i - 1 && l[B + 1] !== Y || oe > 0 && l[B - i] !== Y || oe < u - 1 && l[B + i] !== Y) && (U = !0), Q = U ? N : le;
    }
    b[B * 4] = Q[0], b[B * 4 + 1] = Q[1], b[B * 4 + 2] = Q[2], b[B * 4 + 3] = 255;
  }
  return { w: i, h: u, data: b };
}
const Ou = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, qu = (n) => Is(n, !1).split("/")[0], bl = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let l = Math.imul(n ^ n >>> 15, 1 | n);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, Wu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", zu = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Vu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", ju = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Gu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Uu = [".##", "##.", ".#.", "#.."];
function Sc(n, { width: l, height: i, colors: u, wave: f = 0.38, soft: m = 6, glow: w = 0.6, columns: L = 6 }) {
  const b = { ...Eo, dawn: "#e5a77e", ...u }, N = Pu(b), le = l, oe = i, R = le / L, B = R / 2, Y = Math.PI * 2, Q = n.length ? n : [{ cond: "cloudy", night: !1 }], U = [...Array(L * 2)].map((K, ie) => {
    const _ = Q[Math.min(ie, Q.length - 1)], z = qu(_.cond), ge = ie % 2 === 1;
    return { cond: _.cond, k: z, night: ge, sky: N[z][ge ? 1 : 0], cover: Ou[z] };
  }), j = (K) => oe * (0.5 - f * Math.cos(Y * (K / R - 0.25)));
  return { C: b, S: U, W: le, H: oe, cw: R, sw: B, TAU: Y, yb: j, side: (K, ie, _) => {
    const z = (K ? j(ie) - _ : _ - j(ie)) / Math.max(3, m * 1.4) + 0.5;
    return z <= 0 ? 0 : z >= 1 ? 1 : z;
  }, glowAt: (K) => {
    const ie = ((K / R - 0.25) % 1 + 1) % 1, _ = Math.max(0, Math.min(L - 1, Math.round(K / R - 0.25))), z = Math.max(0, Math.min(L - 1, Math.round(K / R - 0.75))), ge = 1 - (U[2 * _].cover + U[2 * z + 1].cover) / 2, Se = Math.sin(Math.PI * Math.min(1, Math.max(0, j(K) / oe)));
    return { c: ie < 0.5 ? b.dusk : b.dawn, a: w * (0.2 + 0.8 * ge) * Se * Se };
  }, soft: m, tw: R * 0.3, sy: oe / 90 };
}
function Tc(n, { clock: l = 0, ambient: i = !1, seed: u = 1 }) {
  const { S: f, sw: m, side: w, C: L, TAU: b, sy: N } = n, le = l, oe = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return f.forEach((R, B) => {
    const Y = bl(u * 977 + B * 131 + 7), Q = (B + 0.5) * m, U = R.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[R.k] : 0;
    for (let j = 0; j < U; j++) {
      const X = Q + (Y() - 0.5) * m * 1.6, W = (6 + Y() * 76) * N, K = Y() < 0.35, ie = 1.8 + Y() * 1.6, _ = w(!0, X, W) * (K ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(b * le / 2600 + j * 1.7 + B) : 1);
      _ >= 0.03 && oe.stars.push({ x: X, y: W, big: K, size: ie, o: _ });
    }
    if (!R.night && (R.k === "clear" || R.k === "partly")) {
      const j = Q + (Y() - 0.5) * m * 0.3, X = Math.min(15, m * 0.29);
      oe.suns.push({ x: j, y: 32 * N, rad: X, halo: X * 2.8 * (i ? 1 + 0.07 * Math.sin(b * le / 3600 + B) : 1) });
    }
    if (R.night && (R.k === "clear" || R.k === "partly")) {
      const j = Math.min(0.78, m * 0.55 / 34), X = Q - 23 * j + (Y() - 0.5) * m * 0.2;
      oe.moons.push({ x: X + 23 * j, y: (4 + (i ? 0.8 * Math.sin(b * le / 5200 + B) : 0)) * N + 23 * j, d: 46 * j });
    }
  }), f.forEach((R, B) => {
    const Y = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[R.k];
    if (!Y) return;
    const Q = bl(u * 577 + B * 71 + 3), U = (B + 0.5) * m, j = R.k === "rain" || R.k === "storm" || R.night ? L.cloudNight : L.cloudDay, X = R.night ? 0.82 : R.k === "storm" ? 0.75 : 1;
    for (let W = 0; W < Y; W++) {
      const K = m / 46 * (R.k === "partly" ? 0.85 : 0.75 + Q() * 0.55), ie = U + (R.k === "partly" ? m * 0.12 : (Q() - 0.5) * m * 1.05), _ = (R.k === "partly" ? 40 : 6 + Q() * 26) * N, z = i ? 2.5 * Math.sin(b * le / 9e3 + B * 1.3 + W * 2.1) : 0, ge = i ? 0.9 * Math.sin(b * le / 6100 + B + W) : 0;
      oe.clouds.push({ x: ie - 23 * K + z, y: _ - 15.33 * K + ge, w: 46 * K, h: 30.66 * K, fill: j, o: X * (Y > 1 && W === 0 ? 0.85 : 1) });
    }
  }), f.forEach((R, B) => {
    const Y = bl(u * 313 + B * 29 + 11), Q = (B + 0.5) * m, U = R.cond === "pouring" ? 16 : R.cond === "rainy" || R.cond === "hail" ? 9 : R.cond === "lightning-rainy" ? 12 : R.cond === "snowy-rainy" ? 5 : 0;
    for (let X = 0; X < U; X++) {
      let W = Q + (Y() - 0.5) * m * 1.05, K = 44 + Y() * 36, ie = 1;
      if (i) {
        const z = ((K - 44 + le * 0.04) % 36 + 36) % 36;
        W -= 0.21 * (z - (K - 44)), K = 44 + z, ie = Math.min(1, z / 6, (36 - z) / 6);
      }
      K *= N;
      const _ = w(R.night, W, K) * ie;
      _ >= 0.05 && oe.drops.push({ x: W, y: K, o: _ });
    }
    const j = R.cond === "snowy" ? 11 : R.cond === "snowy-rainy" ? 6 : 0;
    for (let X = 0; X < j; X++) {
      let W = Q + (Y() - 0.5) * m * 1.05, K = 40 + Y() * 44, ie = 1;
      if (i) {
        const z = ((K - 40 + le * 9e-3) % 44 + 44) % 44;
        K = 40 + z, W += 1.6 * Math.sin(b * le / 2800 + X * 1.9 + B), ie = Math.min(1, z / 6, (44 - z) / 6);
      }
      K *= N;
      const _ = w(R.night, W, K) * ie;
      _ >= 0.05 && oe.flakes.push({ x: W, y: K, o: _ });
    }
    if (R.k === "fog") {
      const X = R.night ? "#c8ccd6" : "#ffffff", W = R.night ? 0.28 : 0.62, K = i ? 4 * Math.sin(b * le / 8e3 + B) : 0;
      for (let ie = 0; ie < 4; ie++) oe.fogs.push({ x: Q - m * 0.75 + ie % 2 * m * 0.18 + (ie % 2 ? K : -K), y: (30 + ie * 13) * N, w: m * 1.3, c: X, a: W });
    }
    if (R.k === "storm") {
      const X = (le / 3400 + B * 0.37) % 1;
      oe.bolts.push({ x: Q + (Y() - 0.5) * m * 0.3 - 5, y: 36 * N, o: i && !(X < 0.05 || X > 0.09 && X < 0.12) ? 0.8 : 1 });
    }
  }), oe;
}
function Yu(n, l, i, u, f, m, w, L) {
  const { S: b, C: N, cw: le, yb: oe, glowAt: R, soft: B, tw: Y, sy: Q } = n, U = new Array(i * u), j = new Uint8Array(i * u), X = new Uint8Array(i * u), W = (y, S, M, E, de) => {
    M == null || y < 0 || S < 0 || y >= i || S >= u || (E >= 1 || E > Lo(y + 5, S + 3)) && (U[S * i + y] = M, j[S * i + y] = de);
  }, K = (y, S, M, E) => {
    for (let de = Math.max(0, Math.floor(S - M) - 1); de <= Math.min(u - 1, S + M + 1); de++) for (let q = Math.max(0, Math.floor(y - M) - 1); q <= Math.min(i - 1, y + M + 1); q++) E(q, de, q + 0.5 - y, de + 0.5 - S);
  }, ie = (y, S, M) => {
    for (let de = 0; de < y.length - 1; de++) {
      const q = (de + S) * le;
      if (M < q - Y / 2) return [y[de], y[de], 0];
      if (M <= q + Y / 2) return [y[de], y[de + 1], (M - q + Y / 2) / Y];
    }
    const E = y[y.length - 1];
    return [E, E, 0];
  }, _ = b.filter((y) => !y.night).map((y) => y.sky), z = b.filter((y) => y.night).map((y) => y.sky), ge = B / m, Se = 16 * Q / m;
  for (let y = 0; y < i; y++) {
    const S = (y + 0.5) * f, M = oe(S) / m, E = ie(_, 0.75, S), de = ie(z, 1.25, S), q = R(S);
    for (let ee = 0; ee < u; ee++) {
      const re = Lo(y, ee), pe = ee + 0.5 - M, We = (ge > 0.01 ? Ao(0.5 + pe / ge) : pe > 0 ? 1 : 0) > re;
      let Xe = We ? E[2] > re ? E[1] : E[0] : de[2] > re ? de[1] : de[0];
      (We ? Ao(((ee + 0.5) / u - 0.45) / 0.55) * 0.7 : Ao(1 - (ee + 0.5) / (u * 0.55)) * 0.7) > Lo(y + 2, ee + 5) && (Xe = We ? Ca(Xe, "#ffffff", 0.18) : Ca(Xe, "#000000", 0.25)), We && pe >= 0 && pe < Se && q.a * 1.3 * (1 - pe / Se) > Lo(y + 6, ee + 1) && (Xe = q.c), U[ee * i + y] = Xe, X[ee * i + y] = We ? 0 : 1;
    }
  }
  const v = Ca(N.sun, "#ffffff", 0.55), ke = Ca(N.moon, "#ffffff", 0.6);
  l.stars.forEach((y) => {
    const S = Math.floor(y.x / f), M = Math.floor(y.y / m);
    if (S < 0 || M < 0 || S >= i || M >= u || !X[M * i + S] || y.o < 0.15) return;
    const E = y.o > 0.45 ? N.star : Ca(N.star, U[M * i + S], 0.5), de = y.big && y.o > 0.6 ? Math.floor(y.size / f) : 0;
    W(S, M, E, 1, Ol);
    for (let q = 1; q <= de; q++) [[S - q, M], [S + q, M], [S, M - q], [S, M + q]].forEach((ee) => {
      ee[0] >= 0 && ee[1] >= 0 && ee[0] < i && ee[1] < u && X[ee[1] * i + ee[0]] && W(ee[0], ee[1], E, 1, Ol);
    });
  }), l.suns.forEach((y) => {
    const S = Math.max(1.5, y.rad / f), M = y.x / f, E = y.y / m, de = y.halo / f * 0.85;
    if (K(M, E, de, (q, ee, re, pe) => {
      const We = Math.sqrt(re * re + pe * pe);
      We > S && We < de && !X[ee * i + q] && W(q, ee, v, 0.3 * (1 - (We - S) / (de - S)), 0);
    }), L) {
      const q = Math.floor(w / 500) % 2, ee = Math.max(1, S * 0.3);
      for (let re = 0; re < 8; re++) if (re % 2 === q) for (let pe = S + 1.2; pe < S + 1.2 + ee; pe += 0.7) W(Math.floor(M + Math.cos(re * Math.PI / 4) * pe), Math.floor(E + Math.sin(re * Math.PI / 4) * pe), N.sun, 1, Cc);
    }
    K(M, E, S, (q, ee, re, pe) => {
      re * re + pe * pe <= S * S && W(q, ee, Ao(((pe / S + 1) / 2 - 0.6) / 0.4) > Lo(q, ee) ? N.sunEdge : N.sun, 1, xc);
    });
  }), l.moons.forEach((y) => {
    const S = Math.max(1.5, y.d * 0.37 / f), M = y.x / f, E = y.y / m, de = M + 0.547 * S, q = E - 0.503 * S, ee = 0.82 * S;
    K(M, E, S, (re, pe, We, Xe) => {
      if (We * We + Xe * Xe > S * S) return;
      const vt = re + 0.5 - de, an = pe + 0.5 - q;
      vt * vt + an * an > ee * ee && W(re, pe, Ao((Xe + S) / (2 * S) * 1.1 - 0.1) > Lo(re, pe) ? N.moon : ke, 1, yc);
    });
  }), l.clouds.forEach((y) => {
    const S = Math.max(3, y.w / f), M = S * 0.6665, E = y.x / f, de = y.y / m, q = Ca(y.fill, "#000000", 0.16);
    for (let ee = Math.max(0, Math.floor(de) - 1); ee <= Math.min(u - 1, de + M + 1); ee++) for (let re = Math.max(0, Math.floor(E) - 1); re <= Math.min(i - 1, E + S + 1); re++) {
      const pe = (re + 0.5 - E) / S, We = (ee + 0.5 - de) / S;
      Bd(pe, We) && W(re, ee, !Bd(pe, We + 1 / S) || Ao((We - 0.42) / 0.25) * 0.8 > Lo(re, ee) ? q : y.fill, y.o, kc);
    }
  }), l.fogs.forEach((y) => {
    const S = Math.floor(y.y / m), M = Math.max(S, Math.floor((y.y + 6 * Q) / m) - 1), E = Math.floor(y.x / f), de = Math.floor((y.x + y.w) / f);
    for (let q = S; q <= M; q++) for (let ee = E; ee <= de; ee++) {
      const re = (ee - E) / Math.max(1, de - E);
      W(ee, q, y.c, y.a * (re < 0.25 ? re / 0.25 : re > 0.75 ? (1 - re) / 0.25 : 1), 0);
    }
  });
  const Ce = Math.max(2, Math.round(9 / m));
  l.drops.forEach((y) => {
    const S = y.x / f, M = Math.floor(y.y / m);
    for (let E = 0; E < Ce; E++) W(Math.floor(S - 0.208 * E * m / f), M + E, N.rain, y.o, Mc);
  });
  const qe = Math.max(0, Math.round(4.4 / f / 2.6));
  return l.flakes.forEach((y) => {
    const S = Math.floor(y.x / f), M = Math.floor(y.y / m);
    W(S, M, N.snow, y.o, $i);
    for (let E = 1; E <= qe; E++)
      W(S - E, M, N.snow, y.o, $i), W(S + E, M, N.snow, y.o, $i), W(S, M - E, N.snow, y.o, $i), W(S, M + E, N.snow, y.o, $i);
  }), l.bolts.forEach((y) => {
    if (f <= 3.5)
      for (let S = Math.floor(y.y / m); S <= (y.y + 24) / m; S++) for (let M = Math.floor(y.x / f); M <= (y.x + 11) / f; M++)
        Hu(Gu, (M + 0.5) * f - y.x, (S + 0.5) * m - y.y) && W(M, S, N.sun, 1, Ns);
    else {
      const S = Math.round(y.x / f), M = Math.round(y.y / m);
      Uu.forEach((E, de) => E.split("").forEach((q, ee) => {
        q === "#" && W(S + ee, M + de, N.sun, 1, Ns);
      }));
    }
  }), { col: U, ids: j };
}
function Zu(n, l) {
  const i = l.px, u = Math.max(6, Math.round(l.width / i)), f = Math.max(6, Math.round(l.height / i)), m = l.width / u, w = l.height / f, L = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, b = (B) => {
    const Y = Sc(B, l);
    return Yu(Y, Tc(Y, { clock: L, ambient: l.ambient, seed: l.seed }), u, f, m, w, L, l.ambient);
  }, N = b(n), le = l.reveal == null ? 1 : Ao(l.reveal);
  let oe = N.col, R = N.ids;
  if (le < 1) {
    const B = l.prev ? b(l.prev) : null, Y = le * (u + 12);
    oe = new Array(u * f), R = new Uint8Array(u * f);
    for (let Q = 0; Q < u * f; Q++) {
      const U = Q % u, j = Q / u | 0;
      (l.reduce ? le : Ao((Y - U) / 12)) > Lo(U, j) ? (oe[Q] = N.col[Q], R[Q] = N.ids[Q]) : B ? (oe[Q] = B.col[Q], R[Q] = B.ids[Q]) : (oe[Q] = null, R[Q] = 255);
    }
  }
  return Fu(oe, R, u, f, { oneBit: l.oneBit, ink: l.ink || "#26221e", paper: l.paper || "#fbf9f6", snowInk: !1 });
}
function Ku(n, l, i) {
  const u = i.width, f = i.height, m = i.reveal == null ? 1 : Ao(i.reveal), w = (R, B) => {
    const Y = Sc(B, i);
    $u(R, Y, Tc(Y, i));
  };
  if (n.clearRect(0, 0, u, f), m >= 1) {
    w(n, l);
    return;
  }
  if (i.prev && w(n, i.prev), i.reduce) {
    n.save(), n.globalAlpha = m, w(n, l), n.restore();
    return;
  }
  const L = n.canvas, b = L.__wxOff || (L.__wxOff = document.createElement("canvas"));
  (b.width !== L.width || b.height !== L.height) && (b.width = L.width, b.height = L.height);
  const N = b.getContext("2d");
  N.setTransform(n.getTransform()), N.clearRect(0, 0, u, f), w(N, l);
  const le = m * (u + 64) - 64, oe = N.createLinearGradient(le, 0, le + 64, 0);
  oe.addColorStop(0, "rgba(0,0,0,1)"), oe.addColorStop(1, "rgba(0,0,0,0)"), N.globalCompositeOperation = "destination-in", N.fillStyle = oe, N.fillRect(0, 0, u, f), N.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(b, 0, 0), n.restore();
}
function $u(n, l, i) {
  const { W: u, H: f, S: m, C: w, cw: L, yb: b, glowAt: N, soft: le, tw: oe, sy: R } = l, B = (v, ke) => {
    const Ce = Ds(v);
    return "rgba(" + Ce[0] + "," + Ce[1] + "," + Ce[2] + "," + Math.max(0, Math.min(1, ke)).toFixed(3) + ")";
  }, Y = (v, ke) => {
    const Ce = n.createLinearGradient(0, 0, u, 0);
    Ce.addColorStop(0, v[0]);
    for (let qe = 0; qe < v.length - 1; qe++) {
      const y = (qe + ke) * L, S = (y - oe / 2) / u, M = (y + oe / 2) / u;
      S > 0 && S < 1 && Ce.addColorStop(S, v[qe]), M > 0 && M < 1 && Ce.addColorStop(M, v[qe + 1]);
    }
    return Ce.addColorStop(1, v[v.length - 1]), Ce;
  }, Q = Math.max(24, Math.ceil(u / 4)), U = (v, ke) => {
    n.beginPath();
    for (let Ce = 0; Ce <= Q; Ce++) {
      const qe = u * Ce / Q, y = v == null ? 0 : b(qe) + v;
      Ce ? n.lineTo(qe, y) : n.moveTo(qe, y);
    }
    for (let Ce = Q; Ce >= 0; Ce--) {
      const qe = u * Ce / Q;
      n.lineTo(qe, b(qe) + ke);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = Y(m.filter((v) => !v.night).map((v) => v.sky), 0.75), n.fillRect(0, 0, u, f);
  const j = n.createLinearGradient(0, 0, u, 0);
  for (let v = 0; v <= 64; v++) {
    const ke = N(u * v / 64);
    j.addColorStop(v / 64, B(ke.c, Math.min(1, ke.a)));
  }
  n.fillStyle = j;
  for (let v = 0; v < 8; v++)
    n.globalAlpha = 1 - v / 8, U(v * 2 * R, (v + 1) * 2 * R);
  n.fillStyle = Y(m.filter((v) => v.night).map((v) => v.sky), 1.25);
  const X = Math.max(0.5, le), W = 6;
  n.globalAlpha = 1, U(null, -X);
  for (let v = 0; v < W; v++)
    n.globalAlpha = 1 - (v + 0.5) / W, U(-X + 2 * X * v / W, -X + 2 * X * (v + 1) / W);
  n.globalAlpha = 1;
  const K = new Path2D(Vu), ie = new Path2D(zu), _ = new Path2D(Wu), z = new Path2D(ju);
  n.fillStyle = w.star, i.stars.forEach((v) => {
    n.globalAlpha = v.o, v.big ? (n.save(), n.translate(v.x, v.y), n.scale(v.size, v.size), n.fill(K), n.restore()) : (n.beginPath(), n.arc(v.x, v.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const ge = Ca(w.sun, "#ffffff", 0.55);
  i.suns.forEach((v) => {
    const ke = n.createRadialGradient(v.x, v.y, 0, v.x, v.y, v.halo);
    ke.addColorStop(0, B(ge, 0.42)), ke.addColorStop(0.7, B(ge, 0)), n.fillStyle = ke, n.beginPath(), n.arc(v.x, v.y, v.halo, 0, Math.PI * 2), n.fill();
    const Ce = n.createLinearGradient(0, v.y - v.rad, 0, v.y + v.rad);
    Ce.addColorStop(0.6, w.sun), Ce.addColorStop(1, w.sunEdge), n.fillStyle = Ce, n.beginPath(), n.arc(v.x, v.y, v.rad, 0, Math.PI * 2), n.fill();
  });
  const Se = Ca(w.moon, "#ffffff", 0.6);
  i.moons.forEach((v) => {
    n.save(), n.translate(v.x - v.d / 2, v.y - v.d / 2), n.scale(v.d / 46, v.d / 46);
    const ke = n.createLinearGradient(0, 6, 0, 40);
    ke.addColorStop(0, Se), ke.addColorStop(1, w.moon), n.fillStyle = ke, n.fill(ie), n.restore();
  }), i.clouds.forEach((v) => {
    n.save(), n.globalAlpha = v.o, n.translate(v.x, v.y), n.scale(v.w / 46, v.h / 30.66), n.translate(-4, -9.67), n.fillStyle = v.fill, n.fill(_), n.restore();
  }), i.fogs.forEach((v) => {
    const ke = n.createLinearGradient(v.x, 0, v.x + v.w, 0);
    ke.addColorStop(0, B(v.c, 0)), ke.addColorStop(0.25, B(v.c, v.a)), ke.addColorStop(0.75, B(v.c, v.a)), ke.addColorStop(1, B(v.c, 0)), n.fillStyle = ke, n.fillRect(v.x, v.y, v.w, 6 * R);
  }), n.fillStyle = w.rain, i.drops.forEach((v) => {
    n.save(), n.globalAlpha = v.o, n.translate(v.x, v.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = w.snow, i.flakes.forEach((v) => {
    n.globalAlpha = v.o, n.beginPath(), n.arc(v.x, v.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = w.sun, i.bolts.forEach((v) => {
    n.save(), n.globalAlpha = v.o, n.translate(v.x, v.y), n.fill(z), n.restore();
  }), n.restore();
}
const Xu = (n) => n === "sunny" ? "clear" : n === "clear-night" ? "night" : n === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(n) ? "rain" : ["snowy", "snowy-rainy"].includes(n) ? "snow" : "cloudy", Zi = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Ms = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, wl = (n, l) => '<path class="' + l + '" d="' + n + '"/>', Ju = (n, l) => ' style="animation-delay:-' + Math.round(n * 137 % l) + 'ms"', xa = (n, l, i, u) => {
  const f = i * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (u < 1 ? ' opacity="' + u + '"' : "") + Ju(n, 2400) + ' d="M' + n + " " + (l - i) + "L" + (n + f) + " " + (l - f) + "L" + (n + i) + " " + l + "L" + (n + f) + " " + (l + f) + "L" + n + " " + (l + i) + "L" + (n - f) + " " + (l + f) + "L" + (n - i) + " " + l + "L" + (n - f) + " " + (l - f) + 'Z"/>';
}, Pd = ([n, l, i], u) => '<path class="wbMoonPath" d="' + n + '" fill="url(#' + u + ')"/><defs><linearGradient id="' + u + '" x1="0" y1="' + l + '" x2="0" y2="' + i + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Qu = (n, l) => l ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', ep = (n) => (n ? ["29.35", "43.04", "56.74"].map((l, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" x="' + l + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + l + ' 60.65)"/></g>') : [19, 26, 33].map((l, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + l + ' 38)"/></g>')).join(""), tp = (n) => (n ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([l, i], u) => '<circle class="wbFlake" style="animation-delay:-' + u * 640 + 'ms" cx="' + l + '" cy="' + i + '" r="' + (n ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function np(n, l, i, u) {
  return n === "clear" ? l ? Pd(i ? Ms.l : Ms.s, u) + (i ? xa(70, 20, 5.83, 1) + xa(78.33, 41.67, 3.75, 0.8) + xa(60, 71.67, 3.33, 0.6) : xa(42, 12, 3.5, 1) + xa(47, 25, 2.25, 0.8) + xa(36, 43, 2, 0.6)) : Qu(u, i) : n === "partly" ? (l ? Pd(i ? Ms.lp : Ms.sp, u) : i ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + wl(i ? Zi.lp : Zi.sp, l ? "wbCloudLight" : "wbBright") + (l ? i ? xa(73.33, 16.67, 4.17, 0.9) : xa(44, 10, 2.5, 0.9) : "") : n === "cloudy" ? wl(i ? Zi.lc : Zi.s, l ? "wbCloudLight" : "wbBright") + (l ? i ? xa(15, 15, 3.75, 0.8) + xa(76.67, 13.33, 2.92, 0.6) : xa(9, 9, 2.25, 0.8) + xa(46, 8, 1.75, 0.6) : "") : wl(i ? Zi.lr : Zi.s, "wbCloudLight") + (n === "rain" ? ep(i) : tp(i));
}
function ap(n, l, i, u) {
  let f = Xu(n);
  const m = f === "night" || !!i;
  f === "night" && (f = "clear");
  const w = l ? 90 : 54;
  return { k: f, night: m, svg: '<svg viewBox="0 0 ' + w + " " + w + '">' + np(f, m, l, u) + "</svg>" };
}
const ao = 6e4, to = 36e5, wi = 864e5, Hr = 1440, op = 6, ip = 10 * ao, Cs = 3, xl = 20, rp = 3, sp = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), lp = 30 * ao, dp = 7, cp = 3, Id = 1, up = ao, pp = 15 * ao, Qn = {
  back: "M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z",
  sunsetUp: "M3,12H7A5,5 0 0,1 12,7A5,5 0 0,1 17,12H21A1,1 0 0,1 22,13A1,1 0 0,1 21,14H3A1,1 0 0,1 2,13A1,1 0 0,1 3,12M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12H15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M12.71,16.3L15.82,19.41C16.21,19.8 16.21,20.43 15.82,20.82C15.43,21.21 14.8,21.21 14.41,20.82L12,18.41L9.59,20.82C9.2,21.21 8.57,21.21 8.18,20.82C7.79,20.43 7.79,19.8 8.18,19.41L11.29,16.3C11.5,16.1 11.74,16 12,16C12.26,16 12.5,16.1 12.71,16.3Z",
  sunsetDown: "M3,12H7A5,5 0 0,1 12,7A5,5 0 0,1 17,12H21A1,1 0 0,1 22,13A1,1 0 0,1 21,14H3A1,1 0 0,1 2,13A1,1 0 0,1 3,12M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12H15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M12.71,20.71L15.82,17.6C16.21,17.21 16.21,16.57 15.82,16.18C15.43,15.79 14.8,15.79 14.41,16.18L12,18.59L9.59,16.18C9.2,15.79 8.57,15.79 8.18,16.18C7.79,16.57 7.79,17.21 8.18,17.6L11.29,20.71C11.5,20.9 11.74,21 12,21C12.26,21 12.5,20.9 12.71,20.71Z",
  chartLine: "M16,11.78L20.24,4.45L21.97,5.45L16.74,14.5L10.23,10.75L5.46,19H22V21H2V3H4V17.54L9.5,8L16,11.78Z",
  gauge: "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12C20,14.4 19,16.5 17.3,18C15.9,16.7 14,16 12,16C10,16 8.2,16.7 6.7,18C5,16.5 4,14.4 4,12A8,8 0 0,1 12,4M14,5.89C13.62,5.9 13.26,6.15 13.1,6.54L11.81,9.77L11.71,10C11,10.13 10.41,10.6 10.14,11.26C9.73,12.29 10.23,13.45 11.26,13.86C12.29,14.27 13.45,13.77 13.86,12.74C14.12,12.08 14,11.32 13.57,10.76L13.67,10.5L14.96,7.29L14.97,7.26C15.17,6.75 14.92,6.17 14.41,5.96C14.28,5.91 14.15,5.89 14,5.89M10,6A1,1 0 0,0 9,7A1,1 0 0,0 10,8A1,1 0 0,0 11,7A1,1 0 0,0 10,6M7,9A1,1 0 0,0 6,10A1,1 0 0,0 7,11A1,1 0 0,0 8,10A1,1 0 0,0 7,9M17,9A1,1 0 0,0 16,10A1,1 0 0,0 17,11A1,1 0 0,0 18,10A1,1 0 0,0 17,9Z",
  waterPercent: "M12,3.25C12,3.25 6,10 6,14C6,17.32 8.69,20 12,20A6,6 0 0,0 18,14C18,10 12,3.25 12,3.25M14.47,9.97L15.53,11.03L9.53,17.03L8.47,15.97M9.75,10A1.25,1.25 0 0,1 11,11.25A1.25,1.25 0 0,1 9.75,12.5A1.25,1.25 0 0,1 8.5,11.25A1.25,1.25 0 0,1 9.75,10M14.25,14.5A1.25,1.25 0 0,1 15.5,15.75A1.25,1.25 0 0,1 14.25,17A1.25,1.25 0 0,1 13,15.75A1.25,1.25 0 0,1 14.25,14.5Z",
  rainy: "M6,14.03A1,1 0 0,1 7,15.03C7,15.58 6.55,16.03 6,16.03C3.24,16.03 1,13.79 1,11.03C1,8.27 3.24,6.03 6,6.03C7,3.68 9.3,2.03 12,2.03C15.43,2.03 18.24,4.69 18.5,8.06L19,8.03A4,4 0 0,1 23,12.03C23,14.23 21.21,16.03 19,16.03H18C17.45,16.03 17,15.58 17,15.03C17,14.47 17.45,14.03 18,14.03H19A2,2 0 0,0 21,12.03A2,2 0 0,0 19,10.03H17V9.03C17,6.27 14.76,4.03 12,4.03C9.5,4.03 7.45,5.84 7.06,8.21C6.73,8.09 6.37,8.03 6,8.03A3,3 0 0,0 3,11.03A3,3 0 0,0 6,14.03M12,14.15C12.18,14.39 12.37,14.66 12.56,14.94C13,15.56 14,17.03 14,18C14,19.11 13.1,20 12,20A2,2 0 0,1 10,18C10,17.03 11,15.56 11.44,14.94C11.63,14.66 11.82,14.4 12,14.15M12,11.03L11.5,11.59C11.5,11.59 10.65,12.55 9.79,13.81C8.93,15.06 8,16.56 8,18A4,4 0 0,0 12,22A4,4 0 0,0 16,18C16,16.56 15.07,15.06 14.21,13.81C13.35,12.55 12.5,11.59 12.5,11.59",
  sunnyAlert: "M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56M19,13V7H21V13H19M19,17V15H21V17",
  night: "M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z",
  sunny: "M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z",
  windy: "M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z",
  airFilter: "M19,18.31V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V16.3C4.54,16.12 3.95,16 3,16A1,1 0 0,1 2,15A1,1 0 0,1 3,14C3.82,14 4.47,14.08 5,14.21V12.3C4.54,12.12 3.95,12 3,12A1,1 0 0,1 2,11A1,1 0 0,1 3,10C3.82,10 4.47,10.08 5,10.21V8.3C4.54,8.12 3.95,8 3,8A1,1 0 0,1 2,7A1,1 0 0,1 3,6C3.82,6 4.47,6.08 5,6.21V4A2,2 0 0,1 7,2H17A2,2 0 0,1 19,4V6.16C20.78,6.47 21.54,7.13 21.71,7.29C22.1,7.68 22.1,8.32 21.71,8.71C21.32,9.1 20.8,9.09 20.29,8.71V8.71C20.29,8.71 19.25,8 17,8C15.74,8 14.91,8.41 13.95,8.9C12.91,9.41 11.74,10 10,10C9.64,10 9.31,10 9,9.96V7.95C9.3,8 9.63,8 10,8C11.26,8 12.09,7.59 13.05,7.11C14.09,6.59 15.27,6 17,6V4H7V20H17V18C18.5,18 18.97,18.29 19,18.31M17,10C15.27,10 14.09,10.59 13.05,11.11C12.09,11.59 11.26,12 10,12C9.63,12 9.3,12 9,11.95V13.96C9.31,14 9.64,14 10,14C11.74,14 12.91,13.41 13.95,12.9C14.91,12.42 15.74,12 17,12C19.25,12 20.29,12.71 20.29,12.71V12.71C20.8,13.1 21.32,13.1 21.71,12.71C22.1,12.32 22.1,11.69 21.71,11.29C21.5,11.08 20.25,10 17,10M17,14C15.27,14 14.09,14.59 13.05,15.11C12.09,15.59 11.26,16 10,16C9.63,16 9.3,16 9,15.95V17.96C9.31,18 9.64,18 10,18C11.74,18 12.91,17.41 13.95,16.9C14.91,16.42 15.74,16 17,16C19.25,16 20.29,16.71 20.29,16.71V16.71C20.8,17.1 21.32,17.1 21.71,16.71C22.1,16.32 22.1,15.69 21.71,15.29C21.5,15.08 20.25,14 17,14Z",
  flower: "M3,13A9,9 0 0,0 12,22C12,17 7.97,13 3,13M12,5.5A2.5,2.5 0 0,1 14.5,8A2.5,2.5 0 0,1 12,10.5A2.5,2.5 0 0,1 9.5,8A2.5,2.5 0 0,1 12,5.5M5.6,10.25A2.5,2.5 0 0,0 8.1,12.75C8.63,12.75 9.12,12.58 9.5,12.31C9.5,12.37 9.5,12.43 9.5,12.5A2.5,2.5 0 0,0 12,15A2.5,2.5 0 0,0 14.5,12.5C14.5,12.43 14.5,12.37 14.5,12.31C14.88,12.58 15.37,12.75 15.9,12.75C17.28,12.75 18.4,11.63 18.4,10.25C18.4,9.25 17.81,8.4 16.97,8C17.81,7.6 18.4,6.74 18.4,5.75C18.4,4.37 17.28,3.25 15.9,3.25C15.37,3.25 14.88,3.41 14.5,3.69C14.5,3.63 14.5,3.56 14.5,3.5A2.5,2.5 0 0,0 12,1A2.5,2.5 0 0,0 9.5,3.5C9.5,3.56 9.5,3.63 9.5,3.69C9.12,3.41 8.63,3.25 8.1,3.25A2.5,2.5 0 0,0 5.6,5.75C5.6,6.74 6.19,7.6 7.03,8C6.19,8.4 5.6,9.25 5.6,10.25M12,22A9,9 0 0,0 21,13C16,13 12,17 12,22Z"
}, ot = {
  now: "Now",
  today: "Today",
  tomorrow: "Tomorrow",
  back: "Back",
  nextHours: "Next hours",
  humidity: "Humidity",
  high: "High",
  low: "Low",
  modes: { temperature: "Temperature", precipitation: "Rain", wind: "Wind" },
  range: "H {high}   L {low}",
  highLow: "{high} / {low}",
  noHourly: "No hourly forecast for this day",
  noRain: "No rain expected",
  sun: "Sun",
  daylightShort: "{hours}h {minutes}m daylight",
  moon: "Moon",
  moonriseAt: "Moonrise {time}",
  moonsetAt: "Moonset {time}",
  lit: "{illumination} lit",
  phases: { new_moon: "New moon", waxing_crescent: "Waxing crescent", first_quarter: "First quarter", waxing_gibbous: "Waxing gibbous", full_moon: "Full moon", waning_gibbous: "Waning gibbous", last_quarter: "Last quarter", waning_crescent: "Waning crescent" },
  wind: "Wind",
  windFrom: "From {direction}",
  beaufort: "Bft",
  cardinal: { n: "N", nne: "NNE", ne: "NE", ene: "ENE", e: "E", ese: "ESE", se: "SE", sse: "SSE", s: "S", ssw: "SSW", sw: "SW", wsw: "WSW", w: "W", wnw: "WNW", nw: "NW", nnw: "NNW" },
  metrics: { humidity: "Humidity", pressure: "Pressure", uv_index: "UV index", precipitation: "Precipitation", compared_to_average: "Compared to average" },
  dewPoint: "Dew point {dew_point}",
  pressure: { rising: "Rising over 3 hours", falling: "Falling over 3 hours", steady: "Steady over 3 hours" },
  uvLevel: { low: "Low", moderate: "Moderate", high: "High", very_high: "Very high", extreme: "Extreme" },
  uvPeak: "{level} · up to {uv_index} at {time}",
  rainExpected: "{amount} in the next 24 hours",
  rainLast24h: "Last 24 hours",
  average: { above: "above the average high", below: "below the average high", same: "same as the average high" },
  highsLastDays: "Highs of the last {days} days",
  openPage: "Open the weather page",
  todayVsAverage: "Today {today} · average {average}",
  airQuality: "Air quality",
  fineParticles: "fine particles",
  aqLevel: { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }
}, hp = {
  "clear-night": "Clear, night",
  cloudy: "Cloudy",
  exceptional: "Exceptional",
  fog: "Fog",
  hail: "Hail",
  lightning: "Lightning",
  "lightning-rainy": "Lightning, rainy",
  partlycloudy: "Partly cloudy",
  pouring: "Pouring",
  rainy: "Rainy",
  snowy: "Snowy",
  "snowy-rainy": "Snowy, rainy",
  sunny: "Sunny",
  windy: "Windy",
  "windy-variant": "Windy, cloudy"
}, fp = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], mp = Object.keys(ot.phases), Ss = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)" }, gp = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, Lc = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], Ts = 100, Hd = "µg/m³", vp = "weather_alerts.air_quality_pollen", Fd = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], bp = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, wp = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], xp = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, yp = { daily: 1, hourly: 2 }, Fe = (n) => String(n ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), ya = (n, l) => n.replace(/\{(\w+)\}/g, (i, u) => l[u] ?? ""), Xi = (n) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + n + '"/></svg>', kp = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
}, _n = (n) => n != null && n !== "" && Number.isFinite(Number(n)), Od = /* @__PURE__ */ new Map(), qd = /* @__PURE__ */ new Map(), yl = /* @__PURE__ */ new WeakMap(), Mp = (n) => {
  switch (n == null ? void 0 : n.number_format) {
    case "comma_decimal":
      return ["en-US", "en"];
    case "decimal_comma":
      return ["de", "es", "it"];
    case "space_comma":
      return ["fr", "sv", "cs"];
    case "quote_decimal":
      return ["de-CH"];
    case "system":
      return;
    default:
      return n == null ? void 0 : n.language;
  }
};
function vn(n, l, i) {
  const u = Number(n);
  if (Number.isNaN(u)) return String(n);
  const f = (l == null ? void 0 : l.number_format) === "none", m = { maximumFractionDigits: 2, ...i, ...f ? { useGrouping: !1 } : {} }, w = f ? "en-US" : Mp(l), L = JSON.stringify([w, m]);
  let b = Od.get(L);
  if (!b) {
    try {
      b = new Intl.NumberFormat(w, m);
    } catch {
      b = new Intl.NumberFormat(void 0, m);
    }
    Od.set(L, b);
  }
  return b.format(u);
}
const Yl = (n) => {
  var l;
  return ((l = n == null ? void 0 : n.locale) == null ? void 0 : l.language) || (n == null ? void 0 : n.language) || void 0;
};
function Cp(n) {
  if (!n) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (yl.has(n)) return yl.get(n);
  const l = n.time_format, i = l === "language" || l === "system" || !l ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(l === "language" ? n.language : void 0).includes("10") : l === "12";
  return yl.set(n, i), i;
}
const Ac = (n) => {
  var l, i;
  return ((l = n == null ? void 0 : n.locale) == null ? void 0 : l.time_zone) === "server" && ((i = n == null ? void 0 : n.config) != null && i.time_zone) ? n.config.time_zone : void 0;
};
function _c(n, l) {
  const i = JSON.stringify([n, l]);
  let u = qd.get(i);
  if (!u) {
    try {
      u = new Intl.DateTimeFormat(n, l);
    } catch {
      u = new Intl.DateTimeFormat(void 0, { ...l, timeZone: void 0 });
    }
    qd.set(i, u);
  }
  return u;
}
const Ki = (n, l) => _c(Yl(l), { hour: "numeric", minute: "2-digit", hourCycle: Cp(l == null ? void 0 : l.locale) ? "h12" : "h23", timeZone: Ac(l) }).format(n), Wd = (n, l) => _c(Yl(l), { weekday: "short", timeZone: Ac(l) }).format(n), Sp = (n, l) => n.toLocaleDateString(Yl(l), { weekday: "narrow" }), On = (n, l) => _n(l) ? vn(Math.round(Number(l)), n.locale) + "°" : "–", Ji = (n) => {
  const l = new Date(n);
  return l.setHours(0, 0, 0, 0), l;
}, Br = (n, l) => n.getFullYear() === l.getFullYear() && n.getMonth() === l.getMonth() && n.getDate() === l.getDate(), ea = Math.PI / 180, Tp = 2440588, Lp = 2451545, Bs = ea * 23.4397, Ap = 149598e3, _p = -0.833 * ea, Ep = 0.133 * ea, zd = 5 * ao, Ec = (n) => n.getTime() / wi - 0.5 + Tp - Lp, Dc = (n, l) => Math.atan2(Math.sin(n) * Math.cos(Bs) - Math.tan(l) * Math.sin(Bs), Math.cos(n)), Rc = (n, l) => Math.asin(Math.sin(l) * Math.cos(Bs) + Math.cos(l) * Math.sin(Bs) * Math.sin(n)), Dp = (n, l) => ea * (280.16 + 360.9856235 * n) - l, Rp = (n, l, i) => Math.asin(Math.sin(l) * Math.sin(i) + Math.cos(l) * Math.cos(i) * Math.cos(n));
function Nc(n) {
  const l = ea * (357.5291 + 0.98560028 * n), i = ea * (1.9148 * Math.sin(l) + 0.02 * Math.sin(2 * l) + 3e-4 * Math.sin(3 * l)), u = l + i + ea * 102.9372 + Math.PI;
  return { ra: Dc(u, 0), dec: Rc(u, 0), dist: Ap };
}
function Bc(n) {
  const l = ea * (218.316 + 13.176396 * n), i = ea * (134.963 + 13.064993 * n), u = ea * (93.272 + 13.22935 * n), f = l + ea * 6.289 * Math.sin(i), m = ea * 5.128 * Math.sin(u);
  return { ra: Dc(f, m), dec: Rc(f, m), dist: 385001 - 20905 * Math.cos(i) };
}
const Pc = (n, l, i, u) => {
  const f = Ec(l), m = n(f);
  return Rp(Dp(f, ea * -u) - m.ra, ea * i, m.dec);
}, Zl = (n, l, i) => Pc(Nc, n, l, i), Np = (n, l, i) => Pc(Bc, n, l, i);
function Ic(n, l, i, u) {
  const f = {};
  let m = i.getTime(), w = n(i) - l;
  for (let L = m + zd; L <= u.getTime(); L += zd) {
    const b = n(new Date(L)) - l;
    if (w < 0 != b < 0) {
      const N = new Date(m + (L - m) * w / (w - b));
      b > 0 ? f.rise ?? (f.rise = N) : f.set ?? (f.set = N);
    }
    m = L, w = b;
  }
  return f;
}
const Hc = (n) => {
  const l = Ji(n);
  return [l, new Date(l.getTime() + wi)];
}, Bp = (n, l, i) => Ic((u) => Zl(u, l, i), _p, ...Hc(n)), Pp = (n, l, i) => Ic((u) => Np(u, l, i), Ep, ...Hc(n));
function Ip(n) {
  const l = Ec(n), i = Nc(l), u = Bc(l), f = Math.acos(Math.sin(i.dec) * Math.sin(u.dec) + Math.cos(i.dec) * Math.cos(u.dec) * Math.cos(i.ra - u.ra)), m = Math.atan2(i.dist * Math.sin(f), u.dist - i.dist * Math.cos(f)), w = Math.atan2(Math.cos(i.dec) * Math.sin(i.ra - u.ra), Math.sin(i.dec) * Math.cos(u.dec) - Math.cos(i.dec) * Math.sin(u.dec) * Math.cos(i.ra - u.ra));
  return { fraction: (1 + Math.cos(m)) / 2, phase: 0.5 + 0.5 * m * (w < 0 ? -1 : 1) / Math.PI };
}
const Hp = (n) => {
  const l = n * 28;
  return l < 0.5 || l > 27.5 ? "new_moon" : l < 6.5 ? "waxing_crescent" : l < 7.5 ? "first_quarter" : l < 13.5 ? "waxing_gibbous" : l < 14.5 ? "full_moon" : l < 20.5 ? "waning_gibbous" : l < 21.5 ? "last_quarter" : "waning_crescent";
}, Ps = (n) => {
  const l = n == null ? void 0 : n.config;
  return l && _n(l.latitude) && _n(l.longitude) ? { lat: Number(l.latitude), lon: Number(l.longitude) } : null;
};
function Vd(n, l) {
  var N, le, oe;
  const i = Ps(n), u = i ? Bp(l, i.lat, i.lon) : {}, f = (N = n == null ? void 0 : n.states) == null ? void 0 : N["sun.sun"], m = Ji(l).getTime(), w = (R) => {
    const B = R ? new Date(R) : null;
    return B && Number.isFinite(B.getTime()) && Ji(B).getTime() === m ? B : null;
  }, L = w((le = f == null ? void 0 : f.attributes) == null ? void 0 : le.next_rising), b = w((oe = f == null ? void 0 : f.attributes) == null ? void 0 : oe.next_setting);
  return L && (u.rise = L), b && (u.set = b), u;
}
function Fp(n) {
  var u;
  const l = (u = n == null ? void 0 : n.states) == null ? void 0 : u["sun.sun"];
  if ((l == null ? void 0 : l.state) === "below_horizon" || (l == null ? void 0 : l.state) === "above_horizon") return l.state === "below_horizon";
  const i = Ps(n);
  return i ? Zl(/* @__PURE__ */ new Date(), i.lat, i.lon) < 0 : !1;
}
const Fr = (n) => !!n && n.state !== "unavailable" && n.state !== "unknown", Hs = (n, l) => {
  var u;
  const i = (u = n.entities) == null ? void 0 : u[l];
  return !i || !i.hidden && !i.entity_category;
}, ka = (n, l, i) => {
  var u, f;
  for (const m of l) {
    const w = (u = n.states) == null ? void 0 : u[m];
    if (!Fr(w)) continue;
    const L = (f = w.attributes) == null ? void 0 : f[i];
    if (L != null && L !== "") return { stateObj: w, value: L };
  }
}, Op = (n, l) => l.map((i) => {
  var u;
  return (u = n.states) == null ? void 0 : u[i];
}).find(Fr), qp = (n, l, i) => l.map((u) => {
  var f;
  return (f = n.states) == null ? void 0 : f[u];
}).find((u) => {
  var f;
  return Fr(u) && (((f = u.attributes) == null ? void 0 : f.supported_features) == null || Number(u.attributes.supported_features) & yp[i]);
});
function Ir(n, l, i) {
  var m, w, L, b;
  const u = ((w = (m = n.config) == null ? void 0 : m.unit_system) == null ? void 0 : w.length) || "", f = (l == null ? void 0 : l.attributes) || {};
  switch (i) {
    case "precipitation":
      return f.precipitation_unit || (u === "km" ? "mm" : "in");
    case "pressure":
      return f.pressure_unit || (u === "km" ? "hPa" : "inHg");
    case "wind_speed":
    case "wind_gust_speed":
      return f.wind_speed_unit || u + "/h";
    default:
      return f.temperature_unit || ((b = (L = n.config) == null ? void 0 : L.unit_system) == null ? void 0 : b.temperature) || "";
  }
}
function ql(n, l, i, u) {
  try {
    if (typeof n.formatEntityAttributeValueToParts == "function") {
      const [f, ...m] = n.formatEntityAttributeValueToParts(l, i, u).map((w) => w.value);
      return { number: f, unit: m.join("").trim() };
    }
  } catch {
  }
  return { number: vn(u, n.locale), unit: Ir(n, l, i) };
}
function Wp(n, l, i, u) {
  try {
    if (typeof n.formatEntityAttributeValue == "function") return n.formatEntityAttributeValue(l, i, u);
  } catch {
  }
  const f = ql(n, l, i, u);
  return (f.number + " " + f.unit).trim();
}
function Ls(n, l) {
  var u;
  try {
    if (typeof n.formatEntityState == "function") return n.formatEntityState(l);
  } catch {
  }
  const i = (u = l.attributes) == null ? void 0 : u.unit_of_measurement;
  return hp[l.state] || (i && _n(l.state) ? vn(l.state, n.locale) + " " + i : l.state);
}
function jd(n, l) {
  var i;
  try {
    if (typeof n.formatEntityName == "function") return n.formatEntityName(l, { type: "entity" });
  } catch {
  }
  return ((i = l.attributes) == null ? void 0 : i.friendly_name) || l.entity_id;
}
const zp = (n) => n < 3 ? "low" : n < 6 ? "moderate" : n < 8 ? "high" : n < 11 ? "very_high" : "extreme", Vp = (n) => Lc.find(([, l]) => n <= l)[0];
function jp(n, l) {
  if (l === "Beaufort") return Math.round(n);
  const i = l ? bp[l] : void 0;
  if (i === void 0) return;
  const u = wp.findIndex((f) => n * i < f);
  return u === -1 ? 12 : u;
}
const Gd = (n, l) => {
  const i = l ? xp[l] : void 0;
  return i === void 0 ? void 0 : n * i;
}, Ud = (n) => Object.keys(n.states || {}).find((l) => {
  var i, u;
  return l.startsWith("sensor.") && ((u = (i = n.entities) == null ? void 0 : i[l]) == null ? void 0 : u.platform) === "moon";
}), kl = (n) => Object.values(n.states || {}).filter((l) => {
  var i, u;
  return l.entity_id.startsWith("sensor.") && ((i = l.attributes) == null ? void 0 : i.device_class) === "precipitation" && ["total", "total_increasing"].includes(((u = l.attributes) == null ? void 0 : u.state_class) ?? "") && Hs(n, l.entity_id);
}).map((l) => l.entity_id).sort()[0];
function Gp(n) {
  var i;
  const l = {};
  for (const [u, f] of Object.entries(((i = n == null ? void 0 : n.core) == null ? void 0 : i.integration) ?? {})) {
    if (f && "integration_type" in f) {
      l[u] = f.categories;
      continue;
    }
    for (const [m, w] of Object.entries((f == null ? void 0 : f.integrations) ?? {})) l[m] = w == null ? void 0 : w.categories;
  }
  return l;
}
const Fc = (n, l, i) => {
  var f, m, w;
  const u = (m = (f = n.entities) == null ? void 0 : f[i]) == null ? void 0 : m.platform;
  return !!u && !!((w = l[u]) != null && w.includes(vp));
};
function Up(n, l) {
  const i = /* @__PURE__ */ new Map();
  return Object.values(n.states || {}).filter((u) => {
    var f;
    return u.entity_id.startsWith("sensor.") && Fd.includes(((f = u.attributes) == null ? void 0 : f.device_class) ?? "") && Hs(n, u.entity_id) && Fc(n, l, u.entity_id);
  }).sort((u, f) => u.entity_id.localeCompare(f.entity_id)).forEach((u) => {
    i.has(u.attributes.device_class) || i.set(u.attributes.device_class, u.entity_id);
  }), Fd.map((u) => i.get(u)).filter(Boolean);
}
const Yp = (n, l) => Object.values(n.states || {}).filter((i) => {
  var u, f;
  return i.entity_id.startsWith("sensor.") && Hs(n, i.entity_id) && Fc(n, l, i.entity_id) && (((f = (u = n.entities) == null ? void 0 : u[i.entity_id]) == null ? void 0 : f.translation_key) ?? i.entity_id).toLowerCase().includes("pollen");
}).map((i) => i.entity_id).sort();
function Yd(n, l, i) {
  const u = Math.max(l - n, 1e-6), f = i[i.length - 1], m = i.find((N) => u / N <= 4) ?? f * Math.ceil(u / (4 * f)), w = Math.floor(n / m) * m;
  let L = Math.ceil(l / m) * m;
  L === w && (L = w + m);
  const b = [];
  for (let N = w; N <= L + m / 1e3; N += m) b.push(N);
  return { min: w, max: L, ticks: b };
}
const Pr = (n, l, i) => {
  const u = (w) => [1, 3, 5].map((L) => parseInt(w.slice(L, L + 2), 16)), f = u(n), m = u(l);
  return "rgb(" + f.map((w, L) => Math.round(w + (m[L] - w) * i)).join(", ") + ")";
}, Zp = (n, l, i, u) => {
  const f = i * Math.abs(1 - 2 * u), m = u < 0.5 ? 0 : 1;
  return "M " + n + " " + (l - i) + " A " + i + " " + i + " 0 0 0 " + n + " " + (l + i) + " A " + f + " " + i + " 0 0 " + m + " " + n + " " + (l - i) + " Z";
}, qo = ({ icon: n, name: l, sub: i, visual: u, double: f, backdrop: m, cls: w }) => '<div class="wbCard wbSquare' + (f ? " wbDouble" : "") + (m ? " wbHasBackdrop" : "") + (w ? " " + w : "") + '">' + (m ? '<div class="wbBackdrop" aria-hidden="true">' + m + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + Xi(n) + '</div><div class="wbText"><span class="wbName">' + Fe(l) + "</span>" + (i ? '<span class="wbSub">' + Fe(i) + "</span>" : "") + '</div></div><div class="wbVisual">' + u + "</div></div>", Ml = (n, l) => '<div class="wbValue"><span class="wbNum">' + Fe(n) + "</span>" + (l ? '<span class="wbUnitV">' + Fe(l) + "</span>" : "") + "</div>";
function Kp(n) {
  const l = n.max - n.min || 1, i = (L) => 100 - (Math.min(n.max, Math.max(n.min, L)) - n.min) / l * 100, u = (L) => L / Hr * 100 + "%", f = (L) => L.map((b) => b.t + "," + i(b.v)).join(" "), m = n.kind === "line" ? n.points : [];
  let w = '<div class="wbDayChart"><div class="wbDcSun">' + n.sun.map((L) => '<span class="wbDcSunMark" style="left:' + u(L.t) + '">' + Xi(L.rise ? Qn.sunsetUp : Qn.sunsetDown) + Fe(L.label) + "</span>").join("") + "</div>";
  return w += '<div class="wbDcY">' + n.ticks.map((L) => '<span style="top:' + i(L) + '%">' + Fe(n.format(L)) + "</span>").join("") + "</div>", w += '<div class="wbDcPlot"><svg viewBox="0 0 ' + Hr + ' 100" preserveAspectRatio="none">' + n.night.map(([L, b]) => '<rect class="wbDcNight" x="' + L + '" y="0" width="' + (b - L) + '" height="100"></rect>').join("") + n.ticks.map((L) => '<line class="wbDcGrid" x1="0" x2="' + Hr + '" y1="' + i(L) + '" y2="' + i(L) + '" vector-effect="non-scaling-stroke"></line>').join("") + n.sun.map((L) => '<line class="wbDcSunLine" x1="' + L.t + '" x2="' + L.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (n.past && n.past.length > 1 ? '<polyline class="wbDcPast" points="' + f(n.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (m.length > 1 ? '<polygon class="wbDcArea" points="' + m[0].t + ",100 " + f(m) + " " + m[m.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + f(m) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (n.now ? '<line class="wbDcNow" x1="' + n.now.t + '" x2="' + n.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (n.kind === "bars" ? n.points.filter((L) => L.v > 0).map((L) => '<i class="wbDcBar" style="left:' + u(L.t + 12) + ";width:" + u(36) + ";height:" + (100 - i(L.v)) + '%"></i>').join("") : "") + (n.now && n.kind === "line" ? '<i class="wbDcDot" style="left:' + u(n.now.t) + ";top:" + i(n.now.v) + '%"></i>' : "") + (n.peak ? '<span class="wbDcPeak" style="left:' + u(n.peak.t) + ";top:" + i(n.peak.v) + '%">' + Fe(n.peak.label) + "</span>" : "") + (n.note ? '<span class="wbDcNote">' + Fe(n.note) + "</span>" : "") + "</div>", w += '<div class="wbDcX">' + n.hours.map((L) => '<span class="' + (L.minor ? "wbMinor" : "") + '" style="left:' + u(L.t) + '">' + Fe(L.label) + "</span>").join("") + "</div></div>", w;
}
function $p(n, l) {
  const w = n.map((U) => U.value), L = Math.min(...w), b = Math.max(...w), N = b - L || 1, le = (U) => U / (n.length - 1) * 300, oe = (U) => 18 + (1 - (U - L) / N) * 84, R = n.map((U, j) => le(j) + "," + oe(U.value)).join(" "), B = w.indexOf(b), Y = w.indexOf(L), Q = (U) => U === 0 ? "start" : U === n.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true"><polygon class="wbArea" points="0,102 ' + R + ' 300,102"></polygon><polyline class="wbLine" points="' + R + '" vector-effect="non-scaling-stroke"></polyline><text x="' + le(B) + '" y="' + (oe(b) - 6) + '" text-anchor="' + Q(B) + '">' + Fe(l(b)) + '</text><text x="' + le(Y) + '" y="' + (oe(L) + 14) + '" text-anchor="' + Q(Y) + '">' + Fe(l(L)) + '</text><text x="0" y="120" text-anchor="start">' + Fe(n[0].label) + '</text><text x="300" y="120" text-anchor="end">' + Fe(n[n.length - 1].label) + "</text></svg>";
}
function Xp(n, l) {
  const m = n.map((oe) => oe.value).concat([]), w = Math.min(...m) - 2, L = Math.max(...m) + 1, b = L - w || 1, N = 300 / n.length, le = (oe) => (1 - (oe - w) / b) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + n.map((oe, R) => '<rect class="wbBar' + (oe.now ? " wbNowBar" : "") + '" x="' + (R * N + N * 0.2) + '" y="' + le(oe.value) + '" width="' + N * 0.6 + '" height="' + (104 - le(oe.value)) + '" rx="6"></rect><text x="' + (R * N + N / 2) + '" y="120" text-anchor="middle">' + Fe(oe.label) + "</text>").join("") + "</svg>";
}
const Jp = [
  [44.5, 40.1, 16.5, 13.2, -15, 0.7],
  [70.9, 41.2, 8.8, 8.2, 0, 0.75],
  [77.5, 56.6, 12.1, 9.3, 20, 0.7],
  [97.2, 44.5, 6.6, 5.2, 0, 0.8],
  [89.5, 67.6, 6.6, 9.9, 10, 0.55],
  [80.8, 75.3, 4.9, 4.9, 0, 0.6],
  [29.2, 59.9, 14.3, 23.1, 10, 0.45],
  [51.1, 76.4, 9.9, 7.1, -10, 0.5],
  [34.6, 78.6, 5.2, 5.2, 0, 0.6],
  [58.3, 23.7, 22, 3.8, -5, 0.4],
  [61, 53.3, 5, 4, 0, 0.55],
  [44.5, 68.7, 6, 5, 0, 0.45]
], Qp = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], Zd = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], eh = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let th = 0;
function Kd(n, { getHass: l, entityId: i, style: u = "bitmap", motion: f = !0, cards: m, onOpen: w } = {}) {
  var Oa, No;
  const L = "wb" + ++th + "-", b = document.createElement("div");
  b.className = "wb";
  const N = document.createElement("div");
  N.className = "wbBento", b.appendChild(N), n.replaceChildren(b);
  const le = ["current", "hourly", "sun", "moon", "wind", "uv_index", "compared_to_average", "humidity", "pressure", "precipitation", "air_quality"].filter((C) => !m || m.includes(C)), oe = { current: "wide", hourly: "wide", compared_to_average: "double" }, R = {};
  le.forEach((C) => {
    const D = document.createElement("div");
    D.className = "wbItem", D.dataset.card = C, D.dataset.size = oe[C] || "tile", D.hidden = !0, N.appendChild(D), R[C] = { el: D, html: null };
  });
  let B = !1, Y = null, Q = 0, U = -1, j = !1, X = null;
  const W = { openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", aq: void 0 }, K = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let ie = /* @__PURE__ */ new Date(), _ = /* @__PURE__ */ new Date(), z = null;
  const ge = {}, Se = {}, v = (C) => {
    var D;
    return ((D = Se[C]) == null ? void 0 : D.forecast) ?? [];
  }, ke = (C, D) => {
    var F;
    return Se[D] ? (F = C.states) == null ? void 0 : F[Se[D].entityId] : void 0;
  };
  function Ce(C) {
    const D = ge[C];
    D && (D.unsub.then((F) => {
      typeof F == "function" && F();
    }).catch(() => {
    }), delete ge[C]), Se[C] && delete Se[C];
  }
  function qe(C, D, F) {
    var he;
    if (typeof ((he = C.connection) == null ? void 0 : he.subscribeMessage) != "function") return;
    const O = { entityId: F };
    try {
      O.unsub = Promise.resolve(C.connection.subscribeMessage((be) => {
        B || ge[D] !== O || (be != null && be.forecast ? Se[D] = { entityId: F, forecast: be.forecast } : delete Se[D], De());
      }, { type: "weather/subscribe_forecast", forecast_type: D, entity_id: F }));
    } catch (be) {
      O.unsub = Promise.reject(be);
    }
    O.unsub.catch(() => {
      ge[D] === O && delete ge[D];
    }), ge[D] = O;
  }
  function y(C, D) {
    var F;
    for (const O of ["daily", "hourly"]) {
      const he = qp(C, D, O);
      ((F = ge[O]) == null ? void 0 : F.entityId) !== (he == null ? void 0 : he.entity_id) && (Ce(O), he && qe(C, O, he.entity_id));
    }
  }
  const S = (C, D, F, O = !1) => C.callWS({
    type: "history/history_during_period",
    start_time: F.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [D],
    minimal_response: O,
    no_attributes: O,
    significant_changes_only: !1
  });
  async function M(C, D) {
    var me, xe, ue;
    const F = ka(C, D, "pressure");
    if (!F) return;
    const O = F.stateObj.entity_id, he = await S(C, O, new Date(Date.now() - 3 * to)), be = (ue = (xe = (me = he == null ? void 0 : he[O]) == null ? void 0 : me.find((_e) => {
      var Oe;
      return typeof ((Oe = _e.a) == null ? void 0 : Oe.pressure) == "number";
    })) == null ? void 0 : xe.a) == null ? void 0 : ue.pressure;
    K.pressureHistory = typeof be == "number" ? { entityId: O, value: be } : void 0;
  }
  async function E(C, D) {
    var xe;
    const F = ka(C, D, "temperature");
    if (!F) return;
    const O = F.stateObj.entity_id, he = Ji(/* @__PURE__ */ new Date()), be = await S(C, O, new Date(he.getTime() - dp * wi)), me = /* @__PURE__ */ new Map();
    for (const ue of (be == null ? void 0 : be[O]) ?? []) {
      const _e = (xe = ue.a) == null ? void 0 : xe.temperature, Oe = new Date((ue.lc ?? ue.lu) * 1e3);
      if (typeof _e != "number" || Oe >= he) continue;
      const Ke = Oe.toDateString();
      me.set(Ke, Math.max(me.get(Ke) ?? -1 / 0, _e));
    }
    K.temperatureHistory = { entityId: O, dailyHighs: [...me.values()], days: [...me.entries()].map(([ue, _e]) => ({ date: new Date(ue), high: _e })) };
  }
  async function de(C) {
    const D = kl(C);
    if (!D) return;
    const F = await C.callWS({ type: "recorder/statistic_during_period", statistic_id: D, rolling_window: { duration: { hours: 24 } } });
    K.rain = { entityId: D, change: (F == null ? void 0 : F.change) ?? void 0 };
  }
  function q() {
    const C = l == null ? void 0 : l();
    if (!C || B || typeof C.callWS != "function") return;
    const D = We(C);
    K.lastFetch = Date.now(), [M(C, D), E(C, D), de(C)].forEach((F) => F.then(() => De(), () => {
    }));
  }
  async function ee() {
    const C = l == null ? void 0 : l();
    if (!C) return;
    const D = ka(C, We(C), "temperature");
    if (!D) return;
    const F = D.stateObj.entity_id, O = Ji(/* @__PURE__ */ new Date());
    try {
      const he = await S(C, F, O), be = (me) => ((he == null ? void 0 : he[F]) ?? []).map((xe) => {
        var ue;
        return { time: xe.lu * 1e3, value: (ue = xe.a) == null ? void 0 : ue[me] };
      }).filter((xe) => typeof xe.value == "number");
      K.todayHistory = { day: O.toDateString(), fetched: Date.now(), temperature: be("temperature"), humidity: be("humidity") }, De();
    } catch {
    }
  }
  async function re(C) {
    const D = l == null ? void 0 : l();
    if (D)
      try {
        const F = await S(D, C, new Date(Date.now() - 24 * to), !0), O = ((F == null ? void 0 : F[C]) ?? []).filter((be) => _n(be.s)), he = Math.max(1, Math.ceil(O.length / 48));
        K.aqHistory = { entityId: C, points: O.filter((be, me) => me % he === 0).map((be) => ({ label: Ki(new Date(be.lu * 1e3), D), value: Number(be.s) })) }, De();
      } catch {
      }
  }
  function pe(C) {
    K.categories === void 0 && (K.categories = null, Promise.resolve().then(() => C.callWS({ type: "integration/descriptions" })).then((D) => {
      K.categories = Gp(D);
    }, () => {
      K.categories = {};
    }).then(() => De()));
  }
  function We(C) {
    var F;
    const D = Object.keys(C.states || {}).filter((O) => O.startsWith("weather.") && Hs(C, O)).sort();
    return i && ((F = C.states) != null && F[i]) ? [i, ...D.filter((O) => O !== i)] : D;
  }
  const Xe = (C) => K.categories ? { air: Up(C, K.categories), pollen: Yp(C, K.categories) } : { air: [], pollen: [] };
  function vt(C, D, F, O) {
    if (u === "smooth") {
      const he = ap(C, D === 90, F, L + "g-" + O);
      return '<span class="wbWx wbS' + D + " wb" + he.k[0].toUpperCase() + he.k.slice(1) + (he.night ? " wbNight" : "") + '" aria-hidden="true">' + he.svg + "</span>";
    }
    return '<span class="wbWx wbS' + D + '" aria-hidden="true"><canvas data-wb-wx="' + Fe(Is(C, F)) + '" data-size="' + D + '"></canvas></span>';
  }
  const an = () => v("daily").filter((C) => C.templow != null).slice(0, op);
  function En(C, D) {
    const F = new Date(D.datetime), O = /* @__PURE__ */ new Date();
    return Br(F, O) ? ot.today : Br(F, new Date(O.getTime() + wi)) ? ot.tomorrow : Wd(F, C);
  }
  const Ft = (C, D, F) => F === 0 ? En(C, D) : Wd(new Date(D.datetime), C);
  function Ze(C, D) {
    var Oe, Ke, Ue, Re;
    const F = Op(C, D);
    if (!F) return "";
    const O = an(), he = W.openDay !== void 0 ? O[W.openDay] : void 0, be = ka(C, D, "temperature"), me = O[0], xe = me && Br(new Date(me.datetime), /* @__PURE__ */ new Date()), ue = ((Ke = (Oe = C.config) == null ? void 0 : Oe.unit_system) == null ? void 0 : Ke.temperature) || ((Ue = F.attributes) == null ? void 0 : Ue.temperature_unit) || "";
    let _e = '<div class="wbCard wbWeather' + (he ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (he ? " inert" : "") + '><div class="wbNow">' + (w ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + Fe(ot.openPage) + '">' : '<div class="wbCurrent">') + vt(F.state, 90, Fp(C), "now") + '<div class="wbTempBlock">' + (be && _n(be.value) ? '<div class="wbTemp"><span class="wbDeg">' + Fe(vn(Math.round(Number(be.value)), C.locale)) + '</span><span class="wbUnit">' + Fe(ue) + "</span></div>" : "") + '<div class="wbPlace">' + Fe(((Re = C.config) == null ? void 0 : Re.location_name) ?? "") + "</div></div>" + (w ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + Fe(Ls(C, F)) + "</div>" + (xe && me.templow != null ? '<div class="wbRange">' + Fe(ya(ot.range, { high: On(C, me.temperature), low: On(C, me.templow) })) + "</div>" : "") + "</div></div>";
    return O.length && (_e += '<div class="wbColumns" role="list">' + O.map((Ie, Pe) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + Pe + '" data-wb-focus="col-' + Pe + '"><span class="wbDay">' + Fe(Ft(C, Ie, Pe)) + "</span>" + vt(Ie.condition ?? "cloudy", 60, !1, "col" + Pe) + '<span class="wbTemps"><span class="wbHi">' + Fe(On(C, Ie.temperature)) + '</span><span class="wbLo">' + Fe(On(C, Ie.templow)) + "</span></span></button>").join("") + "</div>", _e += '<div class="wbHalves" role="list">' + O.map((Ie, Pe) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + Pe + '" data-wb-focus="half-' + Pe + '">' + vt(Ie.condition ?? "cloudy", 40, !1, "half" + Pe) + '<span class="wbText"><span class="wbName">' + Fe(En(C, Ie)) + '</span><span class="wbSub">' + Fe(ya(ot.highLow, { high: On(C, Ie.temperature), low: On(C, Ie.templow) })) + "</span></span></button>").join("") + "</div>"), _e + "</div>" + (he ? on(C, D, he) : "") + "</div>";
  }
  function Mt(C) {
    const D = C.getTime(), F = Date.now() - to;
    return v("hourly").filter((O) => {
      const he = new Date(O.datetime).getTime();
      return he >= D && he < D + wi && he > F;
    });
  }
  function at(C) {
    if (!C.length) return ["temperature"];
    const D = ["temperature"];
    return C.some((F) => F.precipitation != null || F.precipitation_probability != null) && D.push("precipitation"), C.some((F) => F.humidity != null) && D.push("humidity"), D;
  }
  function on(C, D, F) {
    const O = Ji(new Date(F.datetime)), he = Mt(O), be = at(he), me = be.includes(W.dayMode) ? W.dayMode : "temperature", xe = (ue) => ue === "humidity" ? ot.humidity : ot.modes[ue];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + vt(F.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + Fe(En(C, F)) + '</span><span class="wbSub">' + Fe(ya(ot.highLow, { high: On(C, F.temperature), low: On(C, F.templow) })) + '</span></div><button class="wbBack" title="' + Fe(ot.back) + '" data-wb="close-day" data-wb-focus="back-day">' + Xi(Qn.back) + "</button></div>" + (be.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + be.map((ue) => '<button aria-pressed="' + (ue === me) + '" data-wb="day-mode" data-mode="' + ue + '" data-wb-focus="day-mode-' + ue + '">' + Fe(xe(ue)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Kp(bn(C, D, O, he, me)) + "</div></div>";
  }
  function bn(C, D, F, O, he) {
    var pn;
    const be = F.getTime(), me = Date.now(), xe = Br(F, /* @__PURE__ */ new Date()), ue = (ft) => (ft - be) / ao, _e = (ft) => Ki(new Date(ft), C), Oe = (ft) => new Date(ft.datetime).getTime(), Ke = [0, 3, 6, 9, 12, 15, 18, 21].map((ft) => ({ t: ft * 60, label: _e(be + ft * to), minor: ft % 6 !== 0 })), { rise: Ue, set: Re } = Vd(C, F), Ie = [], Pe = [];
    Ue && (Ie.push({ t: ue(Ue.getTime()), label: _e(Ue.getTime()), rise: !0 }), Pe.push([0, ue(Ue.getTime())])), Re && (Ie.push({ t: ue(Re.getTime()), label: _e(Re.getTime()), rise: !1 }), Pe.push([ue(Re.getTime()), Hr]));
    const et = Ps(C);
    !Ue && !Re && et && Zl(new Date(be + wi / 2), et.lat, et.lon) < 0 && Pe.push([0, Hr]);
    const ht = xe ? ue(me) : void 0, Lt = { hours: Ke, sun: Ie, night: Pe };
    if (!O.length && !xe) return { ...Lt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: ot.noHourly };
    if (he === "precipitation") {
      const ft = O.some((hn) => hn.precipitation_probability != null), Un = O.map((hn) => ({ t: ue(Oe(hn)), v: Number((ft ? hn.precipitation_probability : hn.precipitation) ?? 0) })), da = Ir(C, ke(C, "hourly"), "precipitation"), ca = Math.max(0, ...Un.map((hn) => hn.v)), ua = ft ? 100 : Yd(0, Math.max(ca, 1), [0.5, 1, 2, 5, 10]).max, Go = (hn) => ft ? vn(hn, C.locale) + "%" : vn(hn, C.locale, { maximumFractionDigits: 1 }) + " " + da, Sa = Un.find((hn) => hn.v === ca);
      return {
        ...Lt,
        kind: "bars",
        points: Un,
        min: 0,
        max: ua,
        ticks: [0, ua / 2, ua],
        format: Go,
        now: ht !== void 0 ? { t: ht, v: 0 } : void 0,
        peak: Sa && ca > 0 ? { t: Sa.t + 30, v: Sa.v, label: Go(Sa.v) } : void 0,
        note: ca > 0 ? void 0 : ot.noRain
      };
    }
    const wt = he === "humidity" ? "humidity" : "temperature", Kt = O.filter((ft) => ft[wt] != null && (!xe || Oe(ft) >= me)).map((ft) => ({ t: ue(Oe(ft)), v: Number(ft[wt]) }));
    let Sn, jn = [];
    if (ht !== void 0) {
      const ft = ka(C, D, wt);
      ft && _n(ft.value) && (Sn = { t: ht, v: Number(ft.value) }, Kt.unshift(Sn)), jn = (((pn = K.todayHistory) == null ? void 0 : pn.day) === F.toDateString() ? K.todayHistory[wt] : []).filter((da) => da.time <= me).map((da) => ({ t: Math.max(0, ue(da.time)), v: da.value })), Sn && jn.length && jn.push(Sn);
    }
    const Rn = [...jn, ...Kt];
    if (!Rn.length) return { ...Lt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: ot.noHourly };
    const Gn = Rn.map((ft) => ft.v), aa = Yd(Math.min(...Gn), Math.max(...Gn), wt === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    wt === "humidity" && (aa.min = Math.max(0, aa.min), aa.max = Math.min(100, aa.max), aa.ticks = aa.ticks.filter((ft) => ft >= 0 && ft <= 100));
    const qa = wt === "humidity" ? (ft) => vn(ft, C.locale) + "%" : (ft) => On(C, ft), Bo = wt === "temperature" ? Rn.reduce((ft, Un) => Un.v > ft.v ? Un : ft) : void 0;
    return { ...Lt, kind: "line", points: Kt, past: jn, ...aa, format: qa, now: Sn, peak: Bo ? { ...Bo, label: qa(Bo.v) } : void 0 };
  }
  function xi(C) {
    const D = ["temperature"];
    return C.some((F) => F.precipitation_probability != null || F.precipitation != null) && D.push("precipitation"), C.some((F) => F.wind_speed != null) && D.push("wind"), D;
  }
  function rt() {
    const C = /* @__PURE__ */ new Date();
    return C.setHours(6, 0, 0, 0), C.getTime() > Date.now() && C.setDate(C.getDate() - 1), C;
  }
  function Ve(C, D) {
    var he, be;
    const F = v("daily"), O = [];
    for (let me = 0; me < Cs; me++) for (const xe of [!1, !0]) {
      const ue = C.getTime() + (me * 24 + (xe ? 12 : 0)) * to, _e = ue + 12 * to, Oe = {};
      D.forEach((Ue) => {
        const Re = new Date(Ue.datetime).getTime();
        Ue.condition && Re >= ue && Re < _e && (Oe[Ue.condition] = (Oe[Ue.condition] ?? 0) + (sp.has(Ue.condition) ? 2 : 1));
      });
      let Ke = (he = Object.entries(Oe).sort((Ue, Re) => Re[1] - Ue[1])[0]) == null ? void 0 : he[0];
      if (!Ke) {
        const Ue = new Date(ue).toDateString();
        Ke = ((be = F.find((Re) => new Date(Re.datetime).toDateString() === Ue)) == null ? void 0 : be.condition) ?? "cloudy";
      }
      O.push({ cond: xe && Ke === "sunny" ? "clear-night" : Ke, night: xe });
    }
    return O;
  }
  function pt(C, D, F) {
    const O = ke(C, "hourly"), he = D.precipitation_probability != null ? vn(D.precipitation_probability, C.locale) + "%" : "", be = D.precipitation ? vn(D.precipitation, C.locale) + " " + Ir(C, O, "precipitation") : "";
    switch (F) {
      case "precipitation":
        return he ? [he, be] : [be || "–", ""];
      case "wind":
        return D.wind_speed != null ? [vn(Math.round(D.wind_speed), C.locale), Ir(C, O, "wind_speed")] : ["–", ""];
      default:
        return [On(C, D.temperature), (D.precipitation_probability ?? 0) >= 20 ? he : ""];
    }
  }
  function io(C) {
    z = null;
    const D = v("hourly"), F = Math.floor(Date.now() / ao) * ao, O = D.filter((Re) => new Date(Re.datetime).getTime() > F - to);
    if (!O.length) return "";
    const he = xi(O), be = he.includes(W.hourlyMode) ? W.hourlyMode : "temperature", me = rt(), xe = me.getTime() + Cs * 24 * to, ue = (F - me.getTime()) / to * xl, _e = Cs * 24 * xl, Oe = (Re) => (Re - F) / to * xl, Ke = [{ x: 0, label: ot.now, entry: O[0] }, ...O.filter((Re) => {
      const Ie = new Date(Re.datetime);
      return Oe(Ie.getTime()) >= 48 && Ie.getTime() < xe && Ie.getHours() % rp === 0;
    }).map((Re) => {
      const Ie = new Date(Re.datetime);
      return { x: Oe(Ie.getTime()), label: Ki(Ie, C), entry: Re };
    })], Ue = (Re, Ie, Pe) => '<span class="wbMark' + (Ie === 0 ? " wbFirst" : "") + '" style="left:' + Re.x + 'px">' + Pe + "</span>";
    return z = { segs: Ve(me, D), seed: me.getDate() }, '<div class="wbCard wbHc wbHourly"><div class="wbHeader"><h2 class="wbTitle">' + Fe(ot.nextHours) + "</h2></div>" + (he.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + he.map((Re) => '<button aria-pressed="' + (Re === be) + '" data-wb="hourly-mode" data-mode="' + Re + '" data-wb-focus="hourly-mode-' + Re + '">' + Fe(ot.modes[Re]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll"><div class="wbStrip" style="width:' + (_e - ue) + 'px"><div class="wbRow wbTimes">' + Ke.map((Re, Ie) => Ue(Re, Ie, Fe(Re.label))).join("") + '</div><div class="wbSky"><div class="wbSkyArt" style="left:' + -ue + "px;width:" + _e + 'px"><canvas data-wb-strip' + (u === "smooth" ? "" : ' class="wbPixels"') + '></canvas></div></div><div class="wbRow wbValues">' + Ke.map((Re, Ie) => {
      if (!Re.entry) return "";
      const [Pe, et] = pt(C, Re.entry, be);
      return Ue(Re, Ie, '<span class="wbPrimaryV">' + Fe(Pe) + '</span><span class="wbSecondary">' + Fe(et) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function yi(C) {
    const D = ie, { rise: F, set: O } = Vd(C, D), he = F && O ? Math.round((O.getTime() - F.getTime()) / ao) : 0, be = Math.floor(he / 60), me = he % 60, xe = F && O ? (D.getTime() - F.getTime()) / (O.getTime() - F.getTime()) : -1, ue = xe >= 0 && xe <= 1, _e = Math.PI * (1 - Math.min(1, Math.max(0, xe))), Oe = 100 + 74 * Math.cos(_e), Ke = 100 - 74 * Math.sin(_e), Ue = ue ? Math.sin(Math.PI * xe) : 0, Re = ue ? Pr("#2e0a0d", "#43180a", Ue) : "#0e0507", Ie = ue ? Pr("#7a1d12", "#8f400f", Ue) : "#1c0709", Pe = Pr("#f60c08", "#ff8f00", Ue), et = Pr("#fd9b07", "#ffd84a", Ue), ht = ue ? Pr("#fd9b07", "#ffd84a", Ue) : "#6b3a2a", Lt = (Kt) => Kt ? Ki(Kt, C) : "–", wt = F && O ? new Date((F.getTime() + O.getTime()) / 2) : null;
    return qo({
      icon: Qn.sunny,
      name: ot.sun,
      sub: he ? ya(ot.daylightShort, { hours: be, minutes: me }) : void 0,
      visual: '<div class="wbSunSky" style="background:linear-gradient(180deg, ' + Re + ", " + Ie + ");--wb-sun-line:" + ht + '"><svg viewBox="0 0 200 124" aria-hidden="true"><defs><radialGradient id="' + L + 'sun-glow"><stop offset="0" stop-color="' + Pe + '"></stop><stop offset="0.45" stop-color="' + Pe + '"></stop><stop offset="1" stop-color="' + et + '"></stop></radialGradient><clipPath id="' + L + 'above-horizon"><rect x="0" y="0" width="200" height="100"></rect></clipPath></defs><path class="wbSunPath" d="M 26 100 A 74 74 0 0 1 174 100"></path><line class="wbHorizon" x1="0" x2="200" y1="100" y2="100"></line>' + (ue ? '<circle cx="' + Oe + '" cy="' + Ke + '" r="14" fill="url(#' + L + 'sun-glow)" clip-path="url(#' + L + 'above-horizon)"></circle>' : "") + (wt ? '<text class="wbSunTime wbNoon" x="100" y="1">' + Fe(Lt(wt)) + "</text>" : "") + '<text class="wbSunTime" x="26" y="117">' + Fe(Lt(F)) + '</text><text class="wbSunTime" x="174" y="117">' + Fe(Lt(O)) + "</text></svg></div>"
    });
  }
  function jo(C, D, F) {
    const O = (me) => L + "moon-" + me, he = C > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + O("terminator") + ')" d="' + Zp(61, 61, 57.9, C) + '"' + (D ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", be = (me, xe, ue, _e, Oe, Ke) => '<filter id="' + O(me) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + xe + '" numOctaves="' + ue + '" seed="' + _e + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Ue) => "<feFunc" + Ue + ' type="linear" slope="' + Oe + '" intercept="' + Ke + '"></feFunc' + Ue + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + O("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + O("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + O("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + O("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + O("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + be("mottle", "0.045", 4, 3, 1.8, -0.4) + be("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + O("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + O("fill") + ')"></circle><g' + (F ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + O("soften") + ')">' + Jp.map(([me, xe, ue, _e, Oe, Ke]) => '<ellipse cx="' + me + '" cy="' + xe + '" rx="' + ue + '" ry="' + _e + '" fill-opacity="' + Ke + '" transform="rotate(' + Oe + " " + me + " " + xe + ')"></ellipse>').join("") + "</g>" + Qp.map(([me, xe, ue]) => '<circle class="wbCrater" cx="' + me + '" cy="' + xe + '" r="' + ue + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + O("glow") + ')">' + eh.map(([me, xe]) => '<line x1="54.4" y1="95" x2="' + me + '" y2="' + xe + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + O("glow") + ')">' + Zd.map(([me, xe, ue]) => '<circle cx="' + me + '" cy="' + xe + '" r="' + ue * 2 + '"></circle>').join("") + "</g>" + Zd.map(([me, xe, ue]) => '<circle class="wbBrightCenter" cx="' + me + '" cy="' + xe + '" r="' + ue + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + O("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + O("grain") + ')"></rect>' + he + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function rn(C) {
    const D = _, F = Ps(C), O = (F == null ? void 0 : F.lat) ?? 0, he = Ip(D), be = Ud(C), me = be ? C.states[be] : void 0, xe = Fr(me) && mp.includes(me.state) ? me.state : Hp(he.phase), { rise: ue, set: _e } = F ? Pp(D, F.lat, F.lon) : {}, Oe = he.phase > 0.5 != O < 0, Ke = vn(Math.round(he.fraction * 100), C.locale) + "%", Ue = ue ?? _e, Re = Ue ? Ki(Ue, C) : void 0;
    return qo({
      icon: Qn.night,
      name: ot.moon,
      sub: ot.phases[xe],
      visual: '<div class="wbMoonBox">' + jo(he.fraction, Oe, O < 0) + '</div><div class="wbScaleNote wbMoonCaption"><span>' + (Re ? Fe(ya(ue ? ot.moonriseAt : ot.moonsetAt, { time: Re })) : "") + "</span><span>" + Fe(ya(ot.lit, { illumination: Ke })) + "</span></div>"
    });
  }
  function Je(C, D) {
    var Ie;
    const F = ka(C, D, "wind_speed");
    if (!F || !_n(F.value)) return "";
    const O = ka(C, D, "wind_gust_speed"), he = ka(C, D, "wind_bearing"), be = he && _n(he.value) ? Number(he.value) : void 0, me = jp(Number(F.value), (Ie = F.stateObj.attributes) == null ? void 0 : Ie.wind_speed_unit), xe = ql(C, F.stateObj, "wind_speed", F.value), ue = be !== void 0 ? ot.cardinal[fp[((be + 11.25) / 22.5 | 0) % 16]] : void 0, _e = O ? Wp(C, O.stateObj, "wind_gust_speed", O.value) : void 0, Oe = [ue ? ya(ot.windFrom, { direction: ue }) : void 0, me !== void 0 ? me + " " + ot.beaufort : void 0].filter(Boolean).join(" · ") || _e, Ke = (Pe, et) => {
      const ht = (Pe - 90) * Math.PI / 180;
      return [100 + et * Math.cos(ht), 100 + et * Math.sin(ht)];
    }, Ue = Array.from({ length: 36 }, (Pe, et) => et * 10).map((Pe) => {
      const et = Pe % 90 === 0, [ht, Lt] = Ke(Pe, 97), [wt, Kt] = Ke(Pe, et ? 83 : 89);
      return '<line class="wbTick' + (et ? " wbMajor" : "") + '" x1="' + ht + '" y1="' + Lt + '" x2="' + wt + '" y2="' + Kt + '"></line>';
    }).join(""), Re = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([Pe, et]) => {
      const [ht, Lt] = Ke(et, 64);
      return '<text class="wbLetter' + (Pe === "n" ? " wbNorth" : "") + '" x="' + ht + '" y="' + Lt + '">' + Fe(ot.cardinal[Pe]) + "</text>";
    }).join("");
    return qo({ icon: Qn.windy, name: ot.wind, sub: Oe, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Ue + Re + (be !== void 0 ? '<path class="wbMarker" transform="rotate(' + be + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + Fe(xe.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + Fe(xe.unit) + "</text></svg>" });
  }
  function Dn(C, D) {
    const F = ka(C, D, "uv_index");
    if (!F || !_n(F.value)) return "";
    const O = Number(F.value), he = ot.uvLevel[zp(O)], be = /* @__PURE__ */ new Date();
    be.setHours(23, 59, 59, 999);
    const me = v("hourly").filter((Pe) => Pe.uv_index != null && new Date(Pe.datetime) > /* @__PURE__ */ new Date() && new Date(Pe.datetime) <= be).reduce((Pe, et) => !Pe || et.uv_index > Pe.uv ? { uv: et.uv_index, time: new Date(et.datetime) } : Pe, void 0), xe = 48, ue = 100, _e = 130, Oe = (Pe) => -xe + Math.min(Pe, 11) / 11 * 2 * xe, Ke = (Pe, et) => {
      const ht = Pe * Math.PI / 180;
      return [ue + et * Math.sin(ht), _e - et * Math.cos(ht)];
    }, Ue = (Pe, et, ht) => {
      const [Lt, wt] = Ke(Oe(Pe), ht), [Kt, Sn] = Ke(Oe(et), ht);
      return "M " + Lt + " " + wt + " A " + ht + " " + ht + " 0 0 1 " + Kt + " " + Sn;
    }, Ie = '<svg class="wbVu" viewBox="0 0 200 134" preserveAspectRatio="xMidYMax meet" aria-hidden="true">' + [[0, 3, Ss.low], [3, 6, Ss.moderate], [6, 8, Ss.high], [8, 11, Ss.very_high]].map(([Pe, et, ht]) => '<path class="wbVuZone" d="' + Ue(Pe, et, 96) + '" style="stroke:' + ht + '"></path>').join("") + Array.from({ length: 21 }, (Pe, et) => ({ angle: -xe + et * (2 * xe / 20), major: et % 2 === 0 })).map(({ angle: Pe, major: et }) => {
      const [ht, Lt] = Ke(Pe, 102), [wt, Kt] = Ke(Pe, et ? 114 : 108);
      return '<line class="wbVuTick' + (et ? " wbMajor" : "") + '" x1="' + ht + '" y1="' + Lt + '" x2="' + wt + '" y2="' + Kt + '"></line>';
    }).join("") + '<text class="wbVuLabel" x="100" y="70.1">UV</text><g class="wbVuNeedle" style="--wb-angle:' + Oe(O) + 'deg"><line x1="' + ue + '" y1="' + _e + '" x2="' + ue + '" y2="' + (_e - 116) + '"></line></g><path class="wbVuHousing" d="M 64 134 L 64 128 A 36 36 0 0 1 136 128 L 136 134 Z"></path><text class="wbVuValue" x="100" y="114.9">' + Fe(vn(Math.round(O), C.locale)) + "</text></svg>";
    return qo({
      icon: Qn.sunnyAlert,
      name: ot.metrics.uv_index,
      sub: me && me.uv > O ? ya(ot.uvPeak, { level: he, uv_index: vn(Math.round(me.uv), C.locale), time: Ki(me.time, C) }) : he,
      visual: Ie
    });
  }
  function ki(C) {
    const D = v("daily")[0], F = K.temperatureHistory;
    if (!D || new Date(D.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !_n(D.temperature) || !F || F.dailyHighs.length < cp) return "";
    const O = Number(D.temperature), he = F.dailyHighs.reduce((wt, Kt) => wt + Kt, 0) / F.dailyHighs.length, be = Math.round(O - he) || 0, me = be > 0 ? "above" : be < 0 ? "below" : "same", xe = [...F.days, { date: /* @__PURE__ */ new Date(), high: O, today: !0 }], ue = 220, _e = 158, Oe = 22, Ke = 20, Ue = xe.map((wt) => wt.high).concat(he), Re = Math.min(...Ue) - 3, Ie = Math.max(...Ue) + 1, Pe = (wt) => Oe + (1 - (wt - Re) / (Ie - Re)) * (_e - Oe - Ke), et = ue / xe.length, ht = Math.min(18, et * 0.6), Lt = '<svg class="wbCompareBars" viewBox="0 0 ' + ue + " " + _e + '" aria-hidden="true"><line class="wbAvgLine" x1="0" x2="' + ue + '" y1="' + Pe(he) + '" y2="' + Pe(he) + '"></line>' + xe.map((wt, Kt) => {
      const Sn = Kt * et + et / 2, jn = Pe(wt.high), Rn = wt.today ? " wbToday" : "";
      return '<rect class="wbAvgBar' + Rn + '" x="' + (Sn - ht / 2) + '" y="' + jn + '" width="' + ht + '" height="' + (_e - Ke - jn) + '" rx="5"></rect><text class="wbAvgValue' + Rn + '" x="' + Sn + '" y="' + (jn - 6) + '">' + Fe(On(C, wt.high)) + '</text><text class="wbAvgDay' + Rn + '" x="' + Sn + '" y="' + (_e - 4) + '">' + Fe(Sp(wt.date, C)) + "</text>";
    }).join("") + "</svg>";
    return qo({
      icon: Qn.chartLine,
      name: ot.metrics.compared_to_average,
      double: !0,
      sub: ya(ot.highsLastDays, { days: F.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (be > 0 ? "+" : "") + Fe(On(C, be)) + '</div><div class="wbCompareWords">' + Fe(ot.average[me]) + '</div><div class="wbCompareTemps">' + Fe(ya(ot.todayVsAverage, { today: On(C, O), average: On(C, he) })) + "</div></div>" + Lt + "</div>"
    });
  }
  function bt(C, D) {
    const F = ka(C, D, "humidity");
    if (!F || !_n(F.value)) return "";
    const O = ka(C, D, "dew_point"), he = Math.max(0, Math.min(100, Number(F.value)));
    return qo({
      icon: Qn.waterPercent,
      name: ot.metrics.humidity,
      sub: O && _n(O.value) ? ya(ot.dewPoint, { dew_point: On(C, O.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + he + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + Ml(vn(Math.round(Number(F.value)), C.locale), "%") + "</div>"
    });
  }
  function Ee(C, D) {
    var _e, Oe;
    const F = ka(C, D, "pressure");
    if (!F || !_n(F.value)) return "";
    const O = Number(F.value), he = (_e = F.stateObj.attributes) == null ? void 0 : _e.pressure_unit, be = Gd(O, he), me = ((Oe = K.pressureHistory) == null ? void 0 : Oe.entityId) === F.stateObj.entity_id ? Gd(K.pressureHistory.value, he) : void 0;
    let xe;
    if (be !== void 0 && me !== void 0) {
      const Ke = be - me;
      xe = Ke >= Id ? "rising" : Ke <= -Id ? "falling" : "steady";
    }
    const ue = ql(C, F.stateObj, "pressure", Math.round(O));
    return qo({
      icon: Qn.gauge,
      name: ot.metrics.pressure,
      sub: xe ? ot.pressure[xe] : void 0,
      visual: '<div class="wbTapeRow"><div class="wbTapeValue">' + Ml(ue.number) + '<span class="wbTapeUnit">' + Fe(ue.unit) + "</span></div>" + (be !== void 0 ? st(C, be) : "") + "</div>"
    });
  }
  function st(C, D) {
    const he = Math.floor(D) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (be, me) => he + me).map((be) => {
      const me = 100 - (be - D) * 9;
      if (me < 22 || me > 178) return "";
      const xe = be % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(me - 100) / 100) + '"><line class="wbTapeTick" x1="' + (xe ? 2 : 8) + '" x2="26" y1="' + me + '" y2="' + me + '"></line>' + (xe ? '<text class="wbTapeLabel" x="33" y="' + me + '">' + Fe(vn(be, C.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + Fe(ot.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + Fe(ot.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function mt(C) {
    var ue, _e;
    const D = kl(C), F = D ? C.states[D] : void 0;
    if (!F || ((ue = K.rain) == null ? void 0 : ue.entityId) !== D || !_n(K.rain.change)) return "";
    const O = ((_e = F.attributes) == null ? void 0 : _e.unit_of_measurement) ?? "", he = ke(C, "hourly"), be = Date.now() + wi, me = v("hourly").filter((Oe) => Oe.precipitation != null && new Date(Oe.datetime).getTime() <= be), xe = me.reduce((Oe, Ke) => Oe + Number(Ke.precipitation), 0);
    return qo({
      icon: Qn.rainy,
      name: ot.metrics.precipitation,
      sub: he && me.length ? ya(ot.rainExpected, { amount: vn(xe, C.locale, { maximumFractionDigits: 1 }) + " " + Ir(C, he, "precipitation") }) : ot.rainLast24h,
      visual: Ml(vn(K.rain.change, C.locale, { maximumFractionDigits: 1 }), O) + (me.length > 1 ? Xp(me.map((Oe) => ({ label: "", value: Number(Oe.precipitation) }))) : "")
    });
  }
  function He(C) {
    K.categories === void 0 && pe(C);
    const D = Xe(C), F = (ue) => ue.map((_e) => C.states[_e]).filter(Fr), O = F(D.air), he = F(D.pollen);
    if (!O.length && !he.length) return "";
    const be = [...O, ...he], me = (ue) => he.includes(ue) ? Qn.flower : Qn.airFilter, xe = be.find((ue) => ue.entity_id === W.aq);
    return xe ? ro(C, xe, me(xe)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + Fe(ot.airQuality) + '</h2></div><div class="wbAqTiles">' + be.map((ue) => '<button class="wbTile" data-wb="aq-open" data-entity="' + Fe(ue.entity_id) + '"><span class="wbChip">' + Xi(me(ue)) + '</span><span class="wbText"><span class="wbName">' + Fe(jd(C, ue)) + '</span><span class="wbSub">' + Fe(Ls(C, ue)) + "</span></span></button>").join("") + "</div></div>";
  }
  function ro(C, D, F) {
    var Oe, Ke, Ue;
    const O = ((Oe = D.attributes) == null ? void 0 : Oe.unit_of_measurement) ?? "", he = ((Ke = D.attributes) == null ? void 0 : Ke.device_class) === "pm25" && O === Hd && _n(D.state), be = Number(D.state), me = he ? Vp(be) : void 0, xe = ((Ue = K.aqHistory) == null ? void 0 : Ue.entityId) === D.entity_id ? K.aqHistory.points : void 0, ue = (Re) => Math.min(100, Math.max(0, Re / Ts * 100));
    let _e;
    if (xe && xe.length > 1) _e = $p(xe, (Re) => (vn(Re, C.locale, { maximumFractionDigits: 1 }) + " " + O).trim());
    else if (me) {
      let Re = 0;
      const Ie = Lc.map(([Pe, et]) => {
        const ht = ue(Math.min(et, Ts)), Lt = gp[Pe] + " " + Re + "% " + ht + "%";
        return Re = ht, Lt;
      });
      _e = '<div class="wbScale" role="meter" aria-label="' + Fe(ot.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + Ts + '" aria-valuenow="' + be + '" style="background:linear-gradient(to right, ' + Ie.join(", ") + ')"><i style="left:' + ue(be) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + Ts + " " + Hd + "</span></div>";
    } else _e = '<span class="wbGraphNote"><span>' + Fe(Ls(C, D)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + Xi(F) + '</span><span class="wbText"><span class="wbName">' + Fe(jd(C, D)) + '</span><span class="wbSub">' + Fe(Ls(C, D)) + (me ? " · " + Fe(ot.aqLevel[me]) : "") + '</span></span><button class="wbBack" title="' + Fe(ot.back) + '" data-wb="aq-close">' + Xi(Qn.back) + '</button></div><div class="wbGraph">' + _e + "</div></div></div>";
  }
  const Do = {
    current: Ze,
    hourly: io,
    sun: yi,
    moon: rn,
    wind: Je,
    uv_index: Dn,
    compared_to_average: ki,
    humidity: bt,
    pressure: Ee,
    precipitation: mt,
    air_quality: He
  };
  function ta(C) {
    var _e, Oe, Ke, Ue;
    const D = l == null ? void 0 : l();
    if (!D || B) return;
    const F = We(D);
    y(D, F), K.lastFetch || q();
    const O = Xe(D), he = Ud(D), be = kl(D), me = [
      ...F.map((Re) => D.states[Re]),
      D.states["sun.sun"],
      he && D.states[he],
      be && D.states[be],
      ...O.air.map((Re) => D.states[Re]),
      ...O.pollen.map((Re) => D.states[Re]),
      D.locale,
      D.config,
      D.entities,
      Math.floor(Date.now() / ao)
    ];
    if (!C && Y && me.length === Y.length && me.every((Re, Ie) => Re === Y[Ie])) return;
    Y = me;
    const xe = b.getRootNode(), ue = xe.activeElement || document.activeElement;
    for (const Re of le) {
      const Ie = R[Re];
      let Pe = "";
      try {
        Pe = Do[Re](D, F) || "";
      } catch {
        Pe = "";
      }
      if (Pe === Ie.html) continue;
      const et = ue && Ie.el.contains(ue) ? (_e = ue.dataset) == null ? void 0 : _e.wbFocus : void 0, ht = Ie.el.querySelector(".wbStripScroll"), Lt = ht ? ht.scrollLeft : 0;
      Ie.html = Pe, Ie.el.hidden = !Pe, Ie.el.innerHTML = Pe, Lt && ((Oe = Ie.el.querySelector(".wbStripScroll")) == null || Oe.scrollTo({ left: Lt })), et && !X && ((Ke = Ie.el.querySelector('[data-wb-focus="' + et + '"]')) == null || Ke.focus());
    }
    X && ((Ue = b.querySelector('[data-wb-focus="' + X + '"]')) == null || Ue.focus(), X = null), Bt(performance.now());
  }
  function De() {
    j || B || (j = !0, queueMicrotask(() => {
      j = !1, ta(!0);
    }));
  }
  function je() {
    const C = getComputedStyle(b), D = (me) => C.getPropertyValue(me).trim(), F = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([me, xe]) => {
      D(xe) && (F[me] = D(xe));
    });
    const O = D("--color-text-primary") || "#f1f1f1", he = D("--color-bg-card") || "#222222", be = !!b.closest(".light");
    return { colors: { ...Eo, ...F }, ink: be ? O : he, paper: be ? he : O };
  }
  const Zt = (C, D) => {
    var F;
    C.width !== D.w && (C.width = D.w), C.height !== D.h && (C.height = D.h), (F = C.getContext("2d")) == null || F.putImageData(new ImageData(D.data, D.w, D.h), 0, 0);
  }, un = () => f && !kp();
  function wn(C, D) {
    const F = b.querySelector("canvas[data-wb-strip]");
    if (!F || !z || !F.getClientRects().length) return;
    const O = F.clientWidth, he = F.clientHeight;
    if (!O || !he) return;
    const be = { width: O, height: he, columns: Cs, colors: D.colors, clock: C, ambient: un(), seed: z.seed };
    if (u === "smooth") {
      const me = Math.min(2, window.devicePixelRatio || 1), xe = Math.round(O * me), ue = Math.round(he * me);
      F.width !== xe && (F.width = xe), F.height !== ue && (F.height = ue);
      const _e = F.getContext("2d");
      if (!_e) return;
      _e.setTransform(me, 0, 0, me, 0, 0), Ku(_e, z.segs, be);
    } else Zt(F, Zu(z.segs, { ...be, px: 2, oneBit: u === "onebit", ink: D.ink, paper: D.paper }));
  }
  function Bt(C) {
    if (B) return;
    const D = je();
    if (u !== "smooth") {
      const F = un();
      b.querySelectorAll("canvas[data-wb-wx]").forEach((O) => {
        O.getClientRects().length && Zt(O, gc(Hl(O.dataset.wbWx, D.colors), { size: Number(O.dataset.size) || 40, px: 2, oneBit: u === "onebit", colors: D.colors, ink: D.ink, paper: D.paper, clock: C, idle: F }));
      });
    }
    wn(C, D);
  }
  function so(C) {
    if (Q = 0, !(B || !un())) {
      if (!document.hidden)
        if (u === "smooth") wn(C, je());
        else {
          const D = Math.floor(C / 100);
          D !== U && (U = D, Bt(C));
        }
      Q = requestAnimationFrame(so);
    }
  }
  function _t() {
    b.classList.toggle("wbMotion", un()), !Q && !B && un() && (Q = requestAnimationFrame(so));
  }
  function Vn(C) {
    var F, O;
    const D = (O = (F = C.target).closest) == null ? void 0 : O.call(F, "[data-wb]");
    if (!(!D || !b.contains(D))) {
      switch (D.dataset.wb) {
        case "day": {
          W.openDay = Number(D.dataset.index), W.opener = D.dataset.wbFocus, X = "back-day";
          const he = an()[W.openDay], be = !K.todayHistory || K.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - K.todayHistory.fetched > ip;
          he && Br(new Date(he.datetime), /* @__PURE__ */ new Date()) && be && ee();
          break;
        }
        case "close-day":
          W.openDay = void 0, X = W.opener, W.opener = void 0;
          break;
        case "open-page":
          w == null || w();
          return;
        case "day-mode":
          W.dayMode = D.dataset.mode;
          break;
        case "hourly-mode":
          W.hourlyMode = D.dataset.mode;
          break;
        case "aq-open":
          W.aq = D.dataset.entity, re(W.aq);
          break;
        case "aq-close":
          W.aq = void 0;
          break;
        default:
          return;
      }
      ta(!0);
    }
  }
  function Ro(C) {
    var D, F;
    C.key === "Escape" && W.openDay !== void 0 && ((F = (D = C.target).closest) != null && F.call(D, '[data-wb-open="day"]')) && (W.openDay = void 0, X = W.opener, W.opener = void 0, ta(!0));
  }
  let Et = null;
  function jt(C) {
    var F, O;
    const D = (O = (F = C.target).closest) == null ? void 0 : O.call(F, ".wbStripScroll");
    !D || C.button !== 0 || (Et = { startX: C.pageX, left: D.scrollLeft, moved: !1 }, window.addEventListener("mousemove", Cn), window.addEventListener("mouseup", Gt, { once: !0 }));
  }
  function Cn(C) {
    const D = b.querySelector(".wbStripScroll");
    if (!Et || !D) return;
    const F = C.pageX - Et.startX;
    !Et.moved && Math.abs(F) > 1 && (Et.moved = !0, D.classList.add("wbDragging")), D.scrollLeft = Et.left - F;
  }
  function Gt() {
    var C;
    Et = null, window.removeEventListener("mousemove", Cn), (C = b.querySelector(".wbStripScroll")) == null || C.classList.remove("wbDragging");
  }
  b.addEventListener("click", Vn), b.addEventListener("keydown", Ro), b.addEventListener("mousedown", jt);
  const xn = typeof ResizeObserver == "function" ? new ResizeObserver(() => Bt(performance.now())) : null;
  xn == null || xn.observe(b);
  const it = (Oa = window.matchMedia) == null ? void 0 : Oa.call(window, "(prefers-reduced-motion: reduce)"), lo = () => {
    _t(), Bt(performance.now());
  };
  (No = it == null ? void 0 : it.addEventListener) == null || No.call(it, "change", lo);
  const na = [
    setInterval(() => {
      ie = /* @__PURE__ */ new Date(), ta(!0);
    }, up),
    setInterval(() => {
      _ = /* @__PURE__ */ new Date(), ta(!0);
    }, pp),
    setInterval(q, lp)
  ];
  return ta(!0), _t(), {
    update() {
      ta(!1);
    },
    setStyle(C) {
      !C || C === u || (u = C, ta(!0), _t());
    },
    destroy() {
      var C;
      B = !0, na.forEach(clearInterval), Q && cancelAnimationFrame(Q), Q = 0, xn == null || xn.disconnect(), (C = it == null ? void 0 : it.removeEventListener) == null || C.call(it, "change", lo), Gt(), b.removeEventListener("click", Vn), b.removeEventListener("keydown", Ro), b.removeEventListener("mousedown", jt), ["daily", "hourly"].forEach(Ce), b.remove();
    }
  };
}
const Or = "#E1E1E1", $d = "#F7F4F0", Cl = "#03a9f4", xt = 14, kt = 172;
let nh = 0;
const zt = (n) => Math.round(n * 100) / 100, oo = (n, l, i) => Math.max(l, Math.min(i, n)), _o = (n, l, i, u, f, m) => '<rect x="' + zt(n) + '" y="' + zt(l) + '" width="' + zt(i) + '" height="' + zt(u) + '" fill="' + f + '"' + (m != null ? ' opacity="' + m + '"' : "") + "/>", Sl = (n) => n.map((l, i) => (i ? "L" : "M") + zt(l[0]) + " " + zt(l[1])).join("");
function Tl(n) {
  const l = (n == null ? void 0 : n.attributes) || {};
  return l.device_class === "curtain" ? "curtain" : l.device_class === "blind" || l.current_tilt_position != null ? "venetian" : "blind";
}
const Wo = [
  [2, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]],
  [6.5, ["#0B0F1C", "#2E7FD6", "#F2743B", "#F1B6C8", 0.95]],
  [9.5, ["#8FC4EC", "#4DA3E8", "#F4FAFF", "#2F7FCF", 0.7]],
  [13, ["#9ED3F6", "#3F97E6", "#FFFFFF", "#2B86D9", 0.65]],
  [17, ["#9FC2E4", "#4A8ED4", "#FFD9B8", "#5E8FD6", 0.75]],
  [19, ["#4B5E86", "#3B86E0", "#FF6A3D", "#B07CE8", 0.95]],
  [21.5, ["#1A2140", "#1F3F7A", "#B4506E", "#3E59A6", 0.8]],
  [26, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]]
];
function ah(n) {
  const l = n < 2 ? n + 24 : n;
  let i = Wo[0], u = Wo[Wo.length - 1];
  for (let L = 0; L < Wo.length - 1; L++) if (l >= Wo[L][0] && l <= Wo[L + 1][0]) {
    i = Wo[L], u = Wo[L + 1];
    break;
  }
  const f = (l - i[0]) / (u[0] - i[0]), m = f * f * (3 - 2 * f), w = (L, b) => {
    const N = parseInt(L.slice(1), 16), le = parseInt(b.slice(1), 16);
    return "#" + [16, 8, 0].map((oe) => Math.round((N >> oe & 255) + ((le >> oe & 255) - (N >> oe & 255)) * m).toString(16).padStart(2, "0")).join("");
  };
  return { top: w(i[1][0], u[1][0]), bot: w(i[1][1], u[1][1]), warm: w(i[1][2], u[1][2]), cool: w(i[1][3], u[1][3]), op: i[1][4] + (u[1][4] - i[1][4]) * m, t: l };
}
function oh(n) {
  const l = parseInt(n.slice(1), 16), i = (l >> 16 & 255) / 255, u = (l >> 8 & 255) / 255, f = (l & 255) / 255, m = Math.max(i, u, f), w = Math.min(i, u, f);
  let L = 0, b = 0;
  const N = (m + w) / 2;
  if (m !== w) {
    const le = m - w;
    b = N > 0.5 ? le / (2 - m - w) : le / (m + w), L = (m === i ? (u - f) / le + (u < f ? 6 : 0) : m === u ? (f - i) / le + 2 : (i - u) / le + 4) / 6;
  }
  return [L * 360, b * 100, N * 100];
}
function Oc(n, l, i) {
  l = oo(l, 0, 100) / 100, i = oo(i, 0, 100) / 100;
  const u = (w) => (w + n / 30) % 12, f = l * Math.min(i, 1 - i), m = (w) => i - f * Math.max(-1, Math.min(u(w) - 3, Math.min(9 - u(w), 1)));
  return "#" + [m(0), m(8), m(4)].map((w) => Math.round(w * 255).toString(16).padStart(2, "0")).join("");
}
const [qc, Wc, zc] = oh(Or), Xd = Oc(qc, Wc, Math.max(6, zc - 14)), ih = Oc(qc, Wc, Math.min(96, zc + 16));
function rh(n, l, i, u, f) {
  const m = kt / 2, w = kt * 0.12, L = m - (m - w) * n, b = (Y) => Y ** 1.3, N = oo(i, -1.5, 1.5), le = (Y) => -(Math.abs(N) * 4.6 * Y ** 1.5) * Math.sign(N), oe = n * 1.4, R = (Y, Q) => {
    const U = Math.min(4.8, Math.abs(i) * 2.6) * (Q ? 1 : -1) * Math.sign(i || 1), j = Q ? Y + L : Y, X = Q ? Y : Y + L, W = (Se) => j + le(Se) + U * Math.sin(Se * Math.PI * 1.2 + u) * b(Se) * 1.4 + oe * Math.sin(Se * Math.PI * 2 + u * 0.6) * b(Se) * (Q ? 1 : -1), K = [[X, xt]];
    for (let Se = 0; Se <= 12; Se++) K.push([W(Se / 12), xt + kt * Se / 12]);
    K.push([X, xt + kt]);
    let ie = '<path d="' + Sl(K) + 'Z" fill="' + Or + '"/>';
    if (f) return ie;
    const _ = 1.35 + ((Q ? i > 0 : i < 0) ? 0.35 : 0), z = (Se) => {
      const v = Se / 7, ke = Q ? 1 - v : v, Ce = (1 - ke) ** 1.3, qe = Y + L * v;
      return Array.from({ length: 13 }, (y, S) => {
        const M = S / 12;
        return [qe + le(M) * Ce + U * _ * Math.sin(M * Math.PI * 1.2 + u - ke * 3.2) * b(M) * 1.4 * Ce + oe * 1.6 * Math.sin(M * Math.PI * 2 + u * 0.6 - ke * 2.5) * b(M) * n * (0.4 + 0.6 * Ce), xt + kt * M];
      });
    }, ge = [1, 2, 3, 4, 5, 6].map(z);
    for (let Se = 0; Se < 6; Se += 2) ie += '<path d="' + Sl(ge[Se]) + Sl(ge[Se + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return ie;
  }, B = m - (m - w) * l;
  return { body: R(xt, !0) + R(xt + kt - L, !1), rails: [{ x: xt + B - 4, y: xt, w: 4, h: kt }, { x: xt + kt - B, y: xt, w: 4, h: kt }], head: 6.4 };
}
function sh(n, l, i) {
  const u = kt * (1 - n);
  let f = "";
  if (u > 1 && (f += _o(xt, xt, kt, u, Or), !i))
    for (let m = 1; m < 7; m += 2) f += _o(xt + kt * m / 7, xt, kt / 7, u, "#fff");
  return { body: f, rails: [{ x: xt, y: xt + kt * (1 - l) - 7, w: kt, h: 11 }], head: 10.4 };
}
function lh(n, l, i, u) {
  const f = 9 - 7 * (i / 100), m = xt + kt * (1 - n), w = Math.ceil(kt / 10) + 1, L = xt + f / 2, b = (xt + kt - f / 2 - L) / (w - 1), N = 0.8, le = 0.6, oe = Array.from({ length: w }, (Y, Q) => Math.max(L + Q * le, Math.min(L + Q * b, m - f / 2 - (w - 1 - Q) * le))), R = oe.slice(0, -1).map((Y, Q) => oo((oe[Q + 1] - Y - le) / (b - le), 0, 1));
  R.push(R[w - 2]);
  let B = "";
  return oe.forEach((Y, Q) => {
    const U = N + (f - N) * R[Q], j = Math.max(0.5, U / 2), X = Math.max(0.4, U * 0.114);
    B += _o(xt, Y - j, kt, Math.max(1, U), Or), !u && U > 2.2 && (B += _o(xt, Y + j - X, kt, X, Xd) + _o(xt, Y - j, kt, X * 0.55, ih, 0.75));
  }), u || [0.22, 0.78].forEach((Y) => {
    B += _o(xt + kt * Y - 0.7, xt, 1.4, Math.max(0, oe[w - 1] + 1 - xt), Xd, 0.85);
  }), { body: B, rails: [{ x: xt, y: xt + kt * (1 - l) - 8, w: kt, h: 8 }], head: 8.8 };
}
const Jd = (n, l, i, u, f, m, w) => n === "curtain" ? rh(l, i, f, m, w) : n === "venetian" ? lh(l, i, u, w) : sh(l, i, w);
function dh(n, l) {
  let i = "", u = "";
  return l.forEach((f) => {
    const m = f.w > f.h, w = oo(m ? xt + kt / 2 : f.x + f.w / 2, 17, 183), L = oo(m ? f.y + f.h / 2 : xt + kt / 2, 17, 183);
    i += m ? _o(xt, oo(f.y + f.h / 2, xt, xt + kt) - 1, kt, 2, Cl) : _o(oo(f.x + f.w / 2, xt, xt + kt) - 1, xt, 2, kt, Cl);
    const b = m ? "M" + zt(w - 4) + " " + zt(L - 3) + "l4 -3l4 3M" + zt(w - 4) + " " + zt(L + 3) + "l4 3l4 -3" : "M" + zt(w - 3) + " " + zt(L - 4) + "l-3 4l3 4M" + zt(w + 3) + " " + zt(L - 4) + "l3 4l-3 4";
    u += '<circle cx="' + zt(w) + '" cy="' + zt(L) + '" r="11" fill="' + Cl + '" filter="url(#' + n + 's)"/><path d="' + b + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: i, knobs: u };
}
function ch(n, l) {
  const i = /* @__PURE__ */ new Date(), u = ah(i.getHours() + i.getMinutes() / 60), f = 42 + 18 * Math.sin(u.t * 0.5), m = u.t >= 5 && u.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (u.t - 5) / 15) : 80, w = Jd(l.kind, l.pos / 100, l.bar / 100, l.tilt, l.vel, l.ph, !1), L = l.ghostAlpha > 4e-3 && l.ghost != null ? Jd(l.kind, l.ghost / 100, l.ghost / 100, l.tilt, 0, 0, !0).body : "", b = l.grip > 4e-3 ? dh(n, w.rails) : null, N = (le) => _o(xt, xt, kt, kt, le);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + n + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + n + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + u.top + '"/><stop offset="1" stop-color="' + u.bot + '"/></linearGradient><radialGradient id="' + n + 'w" cx="' + zt(f) + '%" cy="' + zt(m) + '%" r="58%"><stop offset="0" stop-color="' + u.warm + '" stop-opacity="' + zt(u.op * 0.8) + '"/><stop offset="1" stop-color="' + u.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + n + 'k" cx="' + zt(100 - f * 0.8) + '%" cy="' + zt(100 - m * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + u.cool + '" stop-opacity="' + zt(u.op * 0.64) + '"/><stop offset="1" stop-color="' + u.cool + '" stop-opacity="0"/></radialGradient><filter id="' + n + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + $d + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + n + 'c)">' + N("url(#" + n + "l)") + N("url(#" + n + "w)") + N("url(#" + n + "k)") + (L ? '<g opacity="' + zt(l.ghostAlpha) + '">' + L + "</g>" : "") + w.body + '<rect x="14" y="14" width="172" height="' + w.head + '" fill="' + Or + '" filter="url(#' + n + 's)"/></g>' + (b ? '<g clip-path="url(#' + n + 'c)" opacity="' + zt(l.grip) + '">' + b.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + $d + '" stroke-width="3"/>' + (b ? '<g opacity="' + zt(l.grip) + '">' + b.knobs + "</g>" : "") + "</svg>";
}
function uh({ onMove: n, onSet: l }) {
  var ie;
  const i = "cv" + ++nh, u = document.createElement("div");
  u.className = "tfCoverArt";
  const f = (ie = window.matchMedia) == null ? void 0 : ie.call(window, "(pointer: coarse)").matches;
  let m = null;
  const w = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let L = 0, b = !1, N = !1, le = null, oe = 0, R = 0;
  const B = () => (m == null ? void 0 : m.kind) === "curtain" ? "x" : "y", Y = () => le || b || N || m.moving || m.target != null ? 1 : f ? performance.now() < R ? 1 : 0.4 : 0, Q = () => {
    u.innerHTML = ch(i, { kind: m.kind, pos: w.pos, bar: m.target ?? w.pos, tilt: w.tilt, vel: w.vel, ph: w.ph, ghost: w.gpos, ghostAlpha: w.ghost, grip: w.grip });
  };
  function U(_) {
    L = 0;
    const z = w.last ? Math.min(0.064, (_ - w.last) / 1e3) : 1 / 60, ge = z * 60;
    w.last = _;
    const Se = m.pos - w.pos, v = w.pos;
    w.pos += Math.sign(Se) * Math.min(Math.abs(Se), Math.max(10.5, Math.abs(Se) * 1.4) * z), Math.abs(m.pos - w.pos) < 0.03 && (w.pos = m.pos), w.vel = w.vel * 0.86 + (w.pos - v) / ge * 0.14, Math.abs(w.vel) < 0.015 && w.pos === m.pos && (w.vel = 0), (w.pos !== v || w.vel) && (w.ph += (0.06 + Math.abs(w.vel) * 0.03) * ge);
    const ke = m.tilt - w.tilt;
    w.tilt += Math.sign(ke) * Math.min(Math.abs(ke), Math.max(60, Math.abs(ke) * 4) * z);
    const Ce = Y();
    w.grip += (Ce - w.grip) * Math.min(1, z * (Ce > w.grip ? 11 : 3.5)), Math.abs(Ce - w.grip) < 0.01 && (w.grip = Ce);
    const qe = m.target != null && Math.abs(m.target - w.pos) > 0.5 ? 0.22 : 0;
    m.target != null && (w.gpos = m.target), w.ghost += (qe - w.ghost) * Math.min(1, z * (qe > w.ghost ? 16 : 3)), Math.abs(qe - w.ghost) < 4e-3 && (w.ghost = qe), Q(), w.pos !== m.pos || w.vel || w.tilt !== m.tilt || w.grip !== Ce || w.ghost !== qe ? L = requestAnimationFrame(U) : w.last = 0;
  }
  const j = () => {
    m && !L && (L = requestAnimationFrame(U));
  }, X = setInterval(() => {
    m && !L && Q();
  }, 60 * 1e3), W = (_) => {
    const z = u.getBoundingClientRect();
    return B() === "x" ? (_.clientX - z.left) / z.width : (_.clientY - z.top) / z.height;
  };
  u.addEventListener("pointerdown", (_) => {
    var Se;
    if (!(m != null && m.canSet) || _.button > 0) return;
    _.preventDefault(), (Se = u.setPointerCapture) == null || Se.call(u, _.pointerId);
    const z = m.target ?? m.pos, ge = u.getBoundingClientRect();
    le = { p0: W(_), from: z, x0: _.clientX, value: null, side: null }, m.kind === "curtain" && z > 0 && (le.side = (_.clientX - ge.left) / ge.width < 0.5 ? "L" : "R"), j();
  }), u.addEventListener("pointermove", (_) => {
    if (!le) return;
    let z;
    if (m.kind === "curtain") {
      if (!le.side) {
        const Se = _.clientX - le.x0;
        if (Math.abs(Se) < 4) return;
        le.side = Se < 0 ? "L" : "R";
      }
      const ge = (kt / 2 - kt * 0.12) / 200;
      z = le.from + (le.side === "L" ? -1 : 1) * ((W(_) - le.p0) / ge) * 100;
    } else z = le.from - (W(_) - le.p0) / (kt / 200) * 100;
    le.value = oo(z, 0, 100), n(le.value);
  });
  const K = () => {
    if (!le) return;
    const _ = le.value;
    le = null, _ != null && l(Math.round(_)), j();
  };
  return u.addEventListener("pointerup", K), u.addEventListener("pointercancel", K), u.addEventListener("lostpointercapture", K), u.addEventListener("pointerenter", () => {
    b = !0, j();
  }), u.addEventListener("pointerleave", () => {
    b = !1, j();
  }), u.addEventListener("focus", () => {
    N = u.matches(":focus-visible"), j();
  }), u.addEventListener("blur", () => {
    N = !1, j();
  }), u.addEventListener("keydown", (_) => {
    if (!(m != null && m.canSet)) return;
    const z = Math.round(m.target ?? m.pos), ge = _.shiftKey ? 10 : 1, Se = { ArrowUp: z + ge, ArrowRight: z + ge, ArrowDown: z - ge, ArrowLeft: z - ge, PageUp: z + 25, PageDown: z - 25, Home: 0, End: 100 }[_.key];
    if (Se == null) return;
    _.preventDefault();
    const v = oo(Se, 0, 100);
    n(v), clearTimeout(oe), oe = setTimeout(() => l(v), 500);
  }), {
    el: u,
    update(_) {
      const z = !m;
      m = _, z && (w.pos = m.pos, w.tilt = m.tilt, R = performance.now() + 1500, f && setTimeout(j, 1600)), u.classList.toggle("x", B() === "x"), u.classList.toggle("y", B() === "y"), m.canSet ? (u.tabIndex = 0, u.setAttribute("role", "slider"), u.setAttribute("aria-valuemin", "0"), u.setAttribute("aria-valuemax", "100"), u.setAttribute("aria-valuenow", String(Math.round(m.target ?? m.pos))), u.setAttribute("aria-orientation", B() === "x" ? "horizontal" : "vertical")) : u.setAttribute("role", "img"), u.setAttribute("aria-label", m.name + (m.canSet ? " position" : "")), u.setAttribute("aria-valuetext", m.text), j();
    },
    destroy() {
      cancelAnimationFrame(L), L = 0, clearInterval(X), clearTimeout(oe), u.remove();
    }
  };
}
const Qd = "move-assistant-density", zo = {
  get(n) {
    try {
      return localStorage.getItem(n);
    } catch {
      return null;
    }
  },
  set(n, l) {
    try {
      localStorage.setItem(n, l);
    } catch {
    }
  }
}, se = (n) => String(n ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), Ll = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', ec = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', ph = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', As = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, tc = 1, hh = 4, nc = 16, ac = 32, fh = 128, mh = 256, oc = 16384, gh = 1, vh = 2, ic = 4, bh = 8, wh = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, xh = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, yh = { curtain: "curtains", blind: "blind", venetian: "blinds" }, Al = {
  light: { name: "Lights", icon: "mdi:lamps", colour: "#ffc107" },
  climate: { name: "Climate", icon: "mdi:home-thermometer", colour: "#ff5722" },
  security: { name: "Security", icon: "mdi:security", colour: "#607d8b" },
  media_players: { name: "Media players", icon: "mdi:multimedia", colour: "#2196f3" },
  maintenance: { name: "Maintenance", icon: "mdi:wrench", colour: "#9e9e9e" },
  energy: { name: "Energy", icon: "mdi:lightning-bolt", colour: "#ffc107" }
}, rc = "move_assistant_house", sc = "move-assistant-house-used", kh = ["switch", "fan", "input_boolean", "automation"], lc = "move-assistant-house-look", Mh = [["popup", "Popup"], ["sheet", "Sheet"]], _l = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', Ch = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', Sh = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', dc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', Th = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', cc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', Ma = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + n.map((l) => '<path d="' + l + '"/>').join("") + "</svg>", uc = Ma(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), Lh = Ma(["M20 6L9 17L4 12"]), no = {
  temp: Ma(["M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0Z"]),
  hum: Ma(["M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0Z"]),
  lights: Ma(["M9 18h6", "M10 22h4", "M12 2a7 7 0 0 0-4 12.74V17h8v-2.26A7 7 0 0 0 12 2Z"]),
  covers: Ma(["M3 3h18", "M5 3v18c3-4 4-10 4-18", "M19 3v18c-3-4-4-10-4-18"]),
  climate: Ma(["M2 8h20", "M2 19h20", "M5 5v17", "M9.5 5v17", "M14.5 5v17", "M19 5v17"]),
  humidifier: Ma(["M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0Z", "M9 15a3 3 0 0 0 3 3"]),
  media: Ma(["M3 6h18v12H3Z", "M8 21h8"]),
  plugs: Ma(["M9 2v6", "M15 2v6", "M6 8h12v4a6 6 0 0 1-12 0Z", "M12 18v4"]),
  alert: Ma(["M12 9v4", "M12 17h.01", "M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"]),
  door: Ma(["M13 4h5v16h-5", "M3 20h18", "M13 4L6 6v14l7 0Z", "M10.5 12h.01"])
}, Ah = (n) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (n ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', _h = 1, Eh = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], pc = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, El = ["hs", "xy", "rgb", "rgbw", "rgbww"], Dl = ["door", "window", "garage_door", "opening"], _s = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], Dh = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], Rh = 10, Nh = 20, Bh = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, Ph = ["living room", "bedroom", "office"];
function Ih(n, { config: l, getHass: i }) {
  var Ha, Lr, Mo;
  const u = (t) => n.getElementById(t), f = u("app"), w = String((l || {}).layout || "").toLowerCase().replace("_", "-") === "test-focus";
  let L = zo.get(Qd) === "1", b = {};
  const N = (t) => {
    var a;
    return (a = i()) == null ? void 0 : a.callWS(t);
  }, le = (t, a, s) => N({ type: "call_service", domain: t, service: a, service_data: s }), oe = n.querySelector("#appearancePane .toggleList");
  oe && !u("densityToggle") && (oe.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), u("densityToggle").addEventListener("click", () => {
    L = !L, zo.set(Qd, L ? "1" : "0"), ie();
  }));
  const R = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && bt(t).device_class === "power" && /^(W|kW)$/.test(bt(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm on the Security page.", (t) => t.startsWith("alarm_control_panel.")]
  ], B = (t, a, s, d) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + a + '">' + d.map(([p, T]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + s + '="' + p + '">' + T + "</button>").join("") + "</div>", Y = (t, a, s, d) => '<div class="toggleRow"' + (d ? ' id="' + d + '"' : "") + "><div><strong>" + t + "</strong>" + (a ? '<div class="status">' + a + "</div>" : "") + "</div>" + s + "</div>";
  function Q() {
    var V, G, H;
    if (!w || u("housePane")) return;
    const t = u("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore";
    const a = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], s = (I, J) => '<div class="houseTab' + (I === "look" ? " active" : "") + '" data-house-pane="' + I + '"><section class="card">' + J + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + a.map(([I, J]) => '<button class="tab segBtn' + (I === "look" ? " active" : "") + '" type="button" data-house-tab="' + I + '">' + J + "</button>").join("") + "</div>" + s("look", '<div class="toggleList" id="houseLook"></div>') + s("lights", '<p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div>') + s("sources", '<div class="toggleList">' + R.map(([I, J, Le]) => Y(J, Le, '<select class="settingsSelect" data-source="' + I + '" aria-label="' + J + '"></select>')).join("") + "</div>") + s("sums", '<div class="toggleList">' + Object.entries(Al).map(([I, J]) => Y(J.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + I + '" aria-label="' + J.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const d = u("houseLook");
    [(V = t.querySelector(".themeBtn")) == null ? void 0 : V.closest(".toggleRow"), (G = u("densityToggle")) == null ? void 0 : G.closest(".toggleRow"), (H = u("moreInfoChoice")) == null ? void 0 : H.closest(".toggleRow")].forEach((I) => I && d.appendChild(I)), d.insertAdjacentHTML("beforeend", Y("Lights", "How lights show on the house page.", B("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + Y("Pad", "What the Dual Axis Controller’s pad sets on its tile.", B("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow"));
    const p = u("housePane"), T = p.querySelector(".houseTabs"), g = T.querySelector(".rubberIndicator"), x = (I) => {
      const J = T.querySelector(".tab.active");
      g.style.transition = I ? "" : "none", g.style.left = J.offsetLeft + "px", g.style.width = J.offsetWidth + "px", I && (g.style.transform = "scaleX(1.08)", setTimeout(() => g.style.transform = "", 180));
    };
    new ResizeObserver(() => x(!1)).observe(T), p.addEventListener("click", (I) => {
      const J = I.target.closest("[data-house-tab]");
      if (J) {
        T.querySelectorAll(".tab").forEach((ce) => ce.classList.toggle("active", ce === J)), p.querySelectorAll(".houseTab").forEach((ce) => ce.classList.toggle("active", ce.dataset.housePane === J.dataset.houseTab)), J.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), x(!0);
        return;
      }
      const Le = I.target.closest("[data-light-fav]");
      if (Le) {
        $o(Le.dataset.lightFav);
        return;
      }
      const Ne = I.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!Ne || Ne.disabled)) {
        if (Ne.dataset.lights && (Ft.lights = Ne.dataset.lights), Ne.dataset.dacPad && (Ft.dacPad = Ne.dataset.dacPad), (Ne.dataset.lights || Ne.dataset.dacPad) && (Ze(), pn.clear()), Ne.dataset.sumToggle) {
          const ce = Ne.dataset.sumToggle, fe = new Set(q.hiddenSums || []);
          fe.has(ce) ? fe.delete(ce) : fe.add(ce), q = { ...q, hiddenSums: [...fe] }, En();
        }
        Na();
      }
    }), p.addEventListener("change", (I) => {
      const J = I.target;
      J.dataset.source && (q = { ...q, sources: { ...q.sources || {}, [J.dataset.source]: J.value || void 0 } }, En());
      const Le = J.dataset.lightStyle || J.dataset.lightPad;
      if (Le) {
        const Ne = J.dataset.lightStyle ? "lightStyles" : "lightPads", ce = { ...Ft[Ne] };
        J.value ? ce[Le] = J.value : delete ce[Le], Ft[Ne] = ce, Ze(), [...pn.keys()].filter((fe) => fe.endsWith(":" + Le)).forEach((fe) => pn.delete(fe));
      }
      Na();
    });
  }
  function U() {
    var x, V;
    Un() && Bo();
    const t = u("housePane");
    if (!t) return;
    const a = !!customElements.get(Gn);
    t.querySelectorAll("[data-lights]").forEach((G) => G.setAttribute("aria-pressed", String(G.dataset.lights === Ft.lights))), u("lightsRow").querySelector(".status").textContent = a || !Un() ? "How lights show on the house page." : qa === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((G) => G.setAttribute("aria-pressed", String(G.dataset.dacPad === Ft.dacPad))), u("dacPadRow").hidden = !Un();
    for (const G of t.querySelectorAll("[data-source]")) {
      if (G === n.activeElement) continue;
      const [H] = R.find(([J]) => J === G.dataset.source), I = Object.keys(b).filter(R.find(([J]) => J === H)[3]).sort((J, Le) => Ee(J).localeCompare(Ee(Le)));
      G.dataset.sig !== I.join(",") && (G.innerHTML = '<option value="">Automatic</option>' + I.map((J) => '<option value="' + se(J) + '">' + se(Ee(J)) + "</option>").join(""), G.dataset.sig = I.join(",")), G.value = I.includes((x = q.sources) == null ? void 0 : x[H]) ? q.sources[H] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((G) => {
      const H = !(q.hiddenSums || []).includes(G.dataset.sumToggle);
      G.classList.toggle("on", H), G.setAttribute("aria-checked", String(H));
    });
    const s = u("lightRows"), d = s != null && s.contains(n.activeElement) ? n.activeElement : null;
    if (!s || d != null && d.matches("select")) return;
    const p = new Set(Yn()), T = (G, H, I, J) => '<option value="' + G + '"' + (G === I ? " selected" : "") + ">" + H + "</option>", g = Object.keys(b).filter((G) => G.startsWith("light.")).sort((G, H) => !vt.get(G) - !vt.get(H) || (vt.get(G) || "").localeCompare(vt.get(H) || "") || Ee(G).localeCompare(Ee(H))).map((G) => {
      const H = Ft.lightStyles[G] || "", I = Ft.lightPads[G] || "", J = p.has(G), Le = se(Ee(G));
      return "<tr><td><strong>" + Le + "</strong></td><td>" + se(vt.get(G) || "—") + "</td><td>" + se(Et(G)) + '</td><td class="metaSwitchCol"><button class="switch' + (J ? " on" : "") + '" type="button" role="switch" aria-checked="' + J + '" data-light-fav="' + se(G) + '" aria-label="' + Le + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + se(G) + '" aria-label="' + Le + ' tile">' + T("", "Default", H) + T("tile", "HomeCore tile", H) + T("dac", "Dual Axis Controller", H) + '</select></td><td><select class="settingsSelect" data-light-pad="' + se(G) + '" aria-label="' + Le + ' pad"' + (ft(G) ? "" : " disabled") + ">" + T("", "Default", I) + T("temperature", "Temperature", I) + T("colour", "Colour", I) + "</select></td></tr>";
    }).join("");
    s.dataset.html !== g && (s.innerHTML = g, s.dataset.html = g, d != null && d.dataset.lightFav && ((V = s.querySelector('[data-light-fav="' + CSS.escape(d.dataset.lightFav) + '"]')) == null || V.focus({ preventScroll: !0 })));
  }
  const j = document.createElement("div");
  j.className = "densityBadge", j.setAttribute("aria-live", "polite"), j.hidden = !0, f.appendChild(j);
  let X = 0;
  function W() {
    if (!L) return;
    const t = u("homeView"), a = (T) => T.offsetParent !== null && !T.closest("[hidden]");
    t.querySelectorAll(":scope .card, :scope .tfAction").forEach((T) => {
      a(T) && (T.dataset.h = Math.round(T.getBoundingClientRect().height) + " px");
    });
    const s = [...t.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(a), d = window.innerHeight, p = s.filter((T) => {
      const g = T.getBoundingClientRect();
      return g.height > 0 && g.top >= 0 && g.bottom <= d + 0.5;
    }).length;
    j.hidden = !t.classList.contains("active"), j.innerHTML = "<b>" + p + "</b><small>of " + s.length + " readings on screen</small>";
  }
  const K = () => {
    L && requestAnimationFrame(W);
  };
  function ie() {
    var t;
    f.classList.toggle("showDensity", L), (t = u("densityToggle")) == null || t.classList.toggle("on", L), j.hidden = !L, clearInterval(X), L && (X = setInterval(W, 1e3), W());
  }
  window.addEventListener("scroll", K, { capture: !0, passive: !0 }), window.addEventListener("resize", K, { passive: !0 });
  const _ = n.querySelector("#homeView .grid");
  let z = null, ge = null, Se = null, v = null;
  const ke = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Map(), qe = /* @__PURE__ */ new Map(), y = 350;
  let S = null;
  const M = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map();
  let q = { favourites: null }, ee = {}, re = {}, pe = [], We = null;
  const Xe = (() => {
    try {
      return JSON.parse(zo.get(sc)) || {};
    } catch {
      return {};
    }
  })();
  let vt = /* @__PURE__ */ new Map(), an = 0;
  function En() {
    clearTimeout(an), an = setTimeout(() => Promise.resolve(N({ type: "frontend/set_user_data", key: rc, value: q })).catch(() => {
    }), 400);
  }
  const Ft = (() => {
    let t = {};
    try {
      t = JSON.parse(zo.get(lc)) || {};
    } catch {
    }
    const a = (s, d) => Object.fromEntries(Object.entries(s || {}).filter(([, p]) => d.includes(p)));
    return {
      more: t.more === "sheet" ? "sheet" : "popup",
      lights: t.lights === "dac" ? "dac" : "tile",
      dacPad: t.dacPad === "colour" ? "colour" : "temperature",
      lightStyles: a(t.lightStyles, ["tile", "dac"]),
      lightPads: a(t.lightPads, ["temperature", "colour"])
    };
  })(), Ze = () => zo.set(lc, JSON.stringify(Ft)), Mt = () => {
    f.dataset.more = Ft.more, yr();
  };
  w && oe && !u("moreInfoChoice") && (u("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + Mh.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Ft.more === t) + '" data-more-style="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), u("moreInfoChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-more-style]");
    a && (Ft.more = a.dataset.moreStyle, Ze(), Mt(), u("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((s) => s.setAttribute("aria-pressed", String(s === a))));
  })), Q();
  let at = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const on = /* @__PURE__ */ new Map();
  let bn = "";
  const xi = w ? Nu({ onChange: () => Jt() }) : null;
  w && f.classList.add("house");
  const rt = Object.assign(document.createElement("div"), { className: "tfBento" });
  let Ve = null, pt = null, io = !1;
  function yi(t) {
    const a = Gr();
    if (f.classList.toggle("houseBento", !!a), Ve && (pt !== a || t == null) && (Ve.destroy(), Ve = null), !a || t == null) {
      rt.remove();
      return;
    }
    rt.isConnected || _.append(rt), rt.style.order = t, !Ve && !io && (Ve = Kd(rt, { getHass: i, entityId: a, style: "bitmap" }), pt = a);
  }
  const jo = [["wx", ["current"]], ["avg", ["compared_to_average"]]], rn = Object.fromEntries(jo.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let Je = null, Dn = null;
  function ki(t) {
    const a = Gr();
    Je && Dn !== a && (Je.forEach((s) => s.destroy()), Je = null), Object.values(rn).forEach((s) => a ? !s.isConnected && _.append(s) : s.remove()), a && !Je && !io && (Je = jo.map(([s, d]) => Kd(rn[s], { getHass: i, entityId: a, style: "bitmap", cards: d, onOpen: s === "wx" ? () => gr("weather") : void 0 })), Dn = a);
  }
  const bt = (t) => {
    var a;
    return ((a = b[t]) == null ? void 0 : a.attributes) || {};
  }, Ee = (t) => bt(t).friendly_name || t, st = (t, a) => bi(t) || (Number(bt(t).supported_features) & a) === a, mt = (t) => {
    const a = String(t ?? "").replace(/_/g, " ");
    return a.charAt(0).toUpperCase() + a.slice(1);
  }, He = (t, a = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: a, maximumFractionDigits: a }), ro = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, Do = (t) => bt(t).supported_color_modes || [], ta = (t) => {
    const a = t / 100;
    return [a <= 66 ? 255 : 329.7 * Math.pow(a - 60, -0.1332), a <= 66 ? 99.47 * Math.log(a) - 161.12 : 288.12 * Math.pow(a - 60, -0.0755), a >= 66 ? 255 : a <= 19 ? 0 : 138.52 * Math.log(a - 10) - 305.04];
  }, De = (t, a) => [5, 3, 1].map((s) => {
    const d = (s + t / 60) % 6;
    return 255 * (1 - a / 100 * Math.max(0, Math.min(d, 4 - d, 1)));
  });
  function je(t) {
    const a = bt(t), s = (a.rgb_color || (a.hs_color && a.color_mode !== "color_temp" ? De(...a.hs_color) : a.color_temp_kelvin ? ta(a.color_temp_kelvin) : [255, 170, 0])).map((p) => Math.round(Math.max(0, Math.min(255, p)))), d = (0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2]) / 255 > 0.8;
    return "--light:rgb(" + s.join(",") + ");--light-ink:" + (d ? "#26221e" : "#ffffff");
  }
  const Zt = (t) => {
    var a;
    return t.startsWith("light.") && ((a = b[t]) == null ? void 0 : a.state) === "on" ? ' data-light style="' + je(t) + '"' : "";
  }, un = (t) => {
    const a = Do(t);
    return a.length ? a.some((s) => s !== "onoff") : bt(t).brightness != null;
  }, wn = (t) => [bt(t).min_color_temp_kelvin || 2e3, bt(t).max_color_temp_kelvin || 6500], Bt = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function so(t) {
    const a = Math.max(1, Math.round((Date.now() - t) / 1e3));
    if (a < 10) return "Just now";
    if (a < 60) return a + " seconds ago";
    const s = Math.round(a / 60);
    if (s < 60) return s + (s === 1 ? " minute ago" : " minutes ago");
    const d = Math.round(s / 60);
    if (d < 24) return d + (d === 1 ? " hour ago" : " hours ago");
    const p = Math.round(d / 24);
    return p + (p === 1 ? " day ago" : " days ago");
  }
  const _t = (t) => {
    var a;
    return bt(t).current_position ?? (((a = b[t]) == null ? void 0 : a.state) === "closed" ? 0 : 100);
  }, Vn = (t) => {
    var a;
    return Po("pos", t, ((a = M.get(t)) == null ? void 0 : a.pos) ?? _t(t));
  }, Ro = (t) => {
    var a;
    return Po("tilt", t, ((a = M.get(t)) == null ? void 0 : a.tilt) ?? bt(t).current_tilt_position);
  };
  function Et(t) {
    var g;
    const a = b[t];
    if (!a) return "Not found";
    if (a.state === "unavailable") return "Unavailable";
    const s = a.attributes, d = t.split(".")[0];
    if (d === "light") {
      if (a.state !== "on") return "Off";
      const x = s.color_temp_kelvin;
      return (un(t) ? ro(a) + "%" : "On") + (s.color_mode === "color_temp" && x ? " · " + Number(x).toLocaleString() + "k" : El.includes(s.color_mode) ? " · Colour" : "");
    }
    if (d === "climate") return (a.state === "off" ? "Off" : mt(s.hvac_action || a.state)) + " · " + He(s.current_temperature) + " °C now";
    if (d === "cover") {
      const x = _t(t), V = s.current_tilt_position;
      return a.state === "opening" || a.state === "closing" ? mt(a.state) + " - " + x + "%" : (x <= 0 ? "Closed" : x >= 100 ? "Open" : "Partially open") + (V > 0 && V < 100 ? " · tilted" : "");
    }
    if (d === "humidifier") return a.state !== "on" ? "Off" : mt(s.action || "on") + " · " + s.current_humidity + "% now";
    if (d === "vacuum") return mt(a.state) + (a.state === "cleaning" && ((g = s.rooms) != null && g.length) ? " · " + s.rooms.join(", ") : "") + (s.battery_level != null ? " · " + s.battery_level + "%" : "");
    if (d === "media_player") return a.state === "playing" || a.state === "paused" ? (a.state === "paused" ? "Paused · " : "") + (s.media_title || "Playing") : mt(a.state);
    if (d === "alarm_control_panel") return pc[a.state] || mt(a.state);
    if (d === "lock" || d === "valve") return mt(a.state);
    if (d === "switch") return a.state === "on" ? "On" : "Off";
    if (d === "plant") return a.state === "ok" ? "Healthy" : mt(s.problem);
    if (d === "binary_sensor")
      return s.device_class === "moisture" ? a.state === "on" ? "Wet" : "Dry" : Dl.includes(s.device_class) ? a.state === "on" ? "Open" : "Closed" : a.state === "on" ? "Detected" : "Clear";
    if (s.rang) return "Rang at " + Bt(s.rang);
    const p = i();
    if (p != null && p.formatEntityState && !bi(t))
      try {
        return p.formatEntityState(a);
      } catch {
      }
    const T = Number(a.state);
    if (a.state !== "" && Number.isFinite(T)) {
      const x = Math.abs(T) >= 100 ? 0 : Math.abs(T) >= 10 ? 1 : 2, V = s.unit_of_measurement ? s.unit_of_measurement === "%" ? "%" : " " + s.unit_of_measurement : "";
      return T.toLocaleString(void 0, { maximumFractionDigits: x }) + V + (s.plant_low ? " · Low" : s.plant_high ? " · High" : "");
    }
    return mt(a.state);
  }
  const jt = (t) => t >= 1e3 ? He(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W";
  function Cn(t) {
    const a = i();
    t.querySelectorAll("[data-icon-for]").forEach((s) => {
      var T;
      const d = b[s.dataset.iconFor], p = s.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && d && !p) {
        let g = s.firstElementChild;
        (!g || g.localName !== "ha-state-icon") && (s.textContent = "", g = document.createElement("ha-state-icon"), s.appendChild(g)), g.hass = a, g.stateObj = d;
      } else if (customElements.get("ha-icon")) {
        let g = s.firstElementChild;
        (!g || g.localName !== "ha-icon") && (s.textContent = "", g = document.createElement("ha-icon"), s.appendChild(g)), g.icon = p || ((T = d == null ? void 0 : d.attributes) == null ? void 0 : T.icon) || "mdi:circle-medium";
      } else s.textContent || (s.textContent = (s.dataset.letter || Ee(s.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    });
  }
  const Gt = (t, a, s) => ' data-icon-for="' + se(t) + '"' + (a ? ' data-icon-name="' + se(a) + '"' : "") + (s ? ' data-letter="' + se(s) + '"' : ""), xn = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : bt(t).rang ? "mdi:doorbell" : "", it = (t, a, s, d) => se([t, a, s, d ? JSON.stringify(d) : ""].join("|")), lo = (t) => se(JSON.stringify(t));
  function na(t, a) {
    var p, T;
    const s = se(Ee(a) + ", " + Et(a));
    return '<div class="activityRow' + (Number.isFinite(Number((p = b[a]) == null ? void 0 : p.state)) && ((T = b[a]) == null ? void 0 : T.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + se(t + "|" + a) + '" aria-label="' + s + '. Show the last 24 hours"' : '" aria-label="' + s + '"') + '><div class="tfIcon" aria-hidden="true"' + Gt(a, xn(a)) + '></div><div><div class="activityRowName">' + se(Ee(a)) + '</div><div class="activityRowMeta">' + se(Et(a)) + "</div></div></div>";
  }
  const Oa = (t, a, s) => '<div class="activityRow" aria-label="' + se(t + ", " + a) + '"><div class="tfIcon" aria-hidden="true"' + Gt("", s, t) + '></div><div><div class="activityRowName">' + se(t) + '</div><div class="activityRowMeta">' + se(a) + "</div></div></div>";
  function No(t) {
    var s;
    const a = ((s = b[t]) == null ? void 0 : s.state) === "on";
    return '<div class="activityRow tfPlug' + (a ? " on" : "") + '"><button class="tfIcon" type="button" data-act="' + it("switch", "toggle", t) + '" aria-label="Turn ' + se(Ee(t)) + (a ? " off" : " on") + '"' + Gt(t) + '></button><div><div class="activityRowName">' + se(Ee(t)) + '</div><div class="activityRowMeta">' + se(Et(t)) + "</div></div></div>";
  }
  const C = (t) => {
    var a;
    return ((a = Ce.get(t)) == null ? void 0 : a.name) ?? Ee(t);
  }, D = (t) => {
    var a;
    return ((a = Ce.get(t)) == null ? void 0 : a.text) ?? Et(t);
  };
  function F(t) {
    var s;
    const a = (s = Ce.get(t)) == null ? void 0 : s.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (a ? Gt("", a, C(t)) : Gt(t, xn(t))) + '></div><div><div class="activityRowName">' + se(C(t)) + '</div><div class="activityRowMeta">' + se(D(t)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + se(C(t)) + '’s last 24 hours">' + Ll + '</button></div><svg class="tfGraph" data-graph="' + se(t) + '" role="img" aria-label="' + se(C(t)) + ', last 24 hours"></svg></div>';
  }
  function O(t, a, s, d, p = "", T = null, g = "") {
    const x = z && z.key === t;
    return '<section class="card tfCard' + (g ? " " + g : "") + (x ? " open" : "") + '" data-tf data-k="' + se(t) + '" style="order:' + a + (x && z.h ? ";min-height:" + z.h + "px" : "") + '" aria-label="' + se(s) + '"><div class="activityHeader">' + (T ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + se(T) + '" aria-label="' + se(s + ", " + Et(T) + ". More info") + '">' + se(s) + "</button>" : '<div class="activityTitle">' + se(s) + "</div>") + "</div>" + (x ? F(z.id) : '<div class="activityRows">' + d.join("") + "</div>" + p) + "</section>";
  }
  function he(t, a) {
    const s = "readings:" + t.id, d = t.readings.map((p) => na(s, p));
    return t.power != null && d.push(Oa("Power now", jt(t.power), "mdi:flash")), O(s, a, "Readings", d.concat(t.plugs.map(No)));
  }
  function be(t, a) {
    var x;
    const s = "energy:" + t.id, [d, p] = [t.solar.find((V) => V.endsWith("_power")), t.solar.find((V) => V.endsWith("_today"))], T = [d, p].filter(Boolean).map((V) => na(s, V)), g = Number(((x = b[d]) == null ? void 0 : x.state) || 0) * 1e3;
    return at.grid && (T.push(na(s, at.grid)), T.push(Oa("House use", jt(g + Number(b[at.grid].state)), "mdi:home-lightning-bolt"))), O(s, a, "Energy", T, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const me = (t, a) => O("plant:" + t.id, a, Ee(t.id), t.readings.map((s) => na("plant:" + t.id, s)), "", t.id), xe = (t) => O("openings", t, "Doors and windows", at.security.openings.map((a) => na("openings", a)));
  function ue(t, a, s, d, p, T, g = null) {
    const x = s == null ? null : Math.max(0, Math.min(1, s)), V = x == null ? 0 : Math.round(x * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + se(d) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + V + '"' + (p ? ' aria-valuetext="' + se(p) + '"' : "") + ' data-drag="' + se(t + "|" + a) + '">' + (g != null ? '<span class="was" aria-hidden="true" style="left:' + g + '%"></span>' : "") + (T ? x == null ? "" : '<b style="left:' + V + '%"></b>' : '<i style="width:' + V + '%"></i>') + "</div>";
  }
  const _e = "move-assistant-house-last-bright", Oe = (() => {
    try {
      return JSON.parse(zo.get(_e)) || {};
    } catch {
      return {};
    }
  })();
  let Ke = 0;
  const Ue = (t, a) => {
    !a || Oe[t] === a || (Oe[t] = a, clearTimeout(Ke), Ke = setTimeout(() => zo.set(_e, JSON.stringify(Oe)), 500));
  }, Re = (t, a, s, d) => '<div class="tfStep" role="group" aria-label="' + se(t) + '"><button type="button" data-act="' + s + '" aria-label="Lower ' + se(t.toLowerCase()) + '">−</button><output>' + se(a) + '</output><button type="button" data-act="' + d + '" aria-label="Raise ' + se(t.toLowerCase()) + '">+</button></div>', Ie = (t, a, s) => '<div class="' + t + '" role="group" aria-label="' + se(a) + '">' + s.filter(Boolean).map((d) => '<button type="button" data-act="' + d.act + '"' + (d.pressed != null ? ' aria-pressed="' + d.pressed + '"' : "") + (d.disabled ? " disabled" : "") + (d.aria ? ' aria-label="' + se(d.aria) + '"' : "") + ">" + (d.html || se(d.label)) + "</button>").join("") + "</div>", Pe = (t, a) => "width:" + Math.round(Math.max(0, Math.min(1, (t - a * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * a / 3).toFixed(2), et = (t) => "left:calc(3px + " + t / 100 + " * (100% - 6px))", ht = (t, a) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + se(Ee(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + Math.round(a) + '% open" data-blocks="' + se(t) + '">' + [0, 1, 2, 3].map((s) => '<span><i style="' + Pe(a, s) + '"></i><b' + (a >= (s + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (s + 1) * 25 + "%</b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + et(a) + '">' + Math.round(a) + "%</output></div>";
  function Lt(t, a) {
    t.querySelectorAll(":scope>span").forEach((d, p) => {
      d.firstElementChild.setAttribute("style", Pe(a, p)), d.lastElementChild.classList.toggle("lit", a >= (p + 1) * 25 - 12);
    });
    const s = t.querySelector(".tfTip");
    s.setAttribute("style", et(a)), s.textContent = Math.round(a) + "%", t.setAttribute("aria-valuenow", String(Math.round(a))), t.setAttribute("aria-valuetext", Math.round(a) + "% open");
  }
  const wt = (t, a) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + se(Ee(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + Math.round(a) + '% open" data-drag="tilt|' + se(t) + '"><i style="width:calc((100% - 6px) * ' + a / 100 + ')"></i><span' + (a > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (a > 92 ? ' class="lit"' : "") + ">Open</span></div>", Kt = (t, a, s) => '<div class="tfCoverBtns" role="group" aria-label="' + se(Ee(t)) + '">' + [
    st(t, gh) && ["open", "Open", "open_cover", a >= 100 && !s],
    st(t, bh) && ["stop", "Stop", "stop_cover", !1],
    st(t, vh) && ["close", "Close", "close_cover", a <= 0 && !s]
  ].filter(Boolean).map(([d, p, T, g]) => '<button type="button" data-act="' + it("cover", T, t) + '" aria-label="' + p + '"' + (g ? " disabled" : "") + ">" + wh[d] + "</button>").join("") + "</div>", Sn = (t, a) => '<button class="tfIcon' + (a.art ? " art" : "") + '" type="button" data-act="' + a.button.act + '" aria-label="' + se(a.button.label) + '"' + (a.art ? ' style="background-image:url(&quot;' + se(a.art) + '&quot;)"' : Gt(t, a.icon)) + "></button>", jn = (t) => '<button class="tfName" type="button" data-more="' + se(t) + '" aria-label="' + se(Ee(t) + ", " + Et(t) + ". More info") + '"><span class="activityRowName">' + se(Ee(t)) + '</span><span class="activityRowMeta">' + se(Et(t)) + "</span></button>";
  function Rn(t, a = !1, s = null) {
    if (t.startsWith("light.") && da(t)) return '<div class="tfDac" data-k="' + se(t) + '" data-dac="' + (a ? "more:" : s ? "dash:" : "tile:") + se(t) + '"></div>';
    const d = Uo(t), p = s || (a && t.startsWith("light.") ? ["bright"] : null), T = d.sections.map((g, x) => g && (!p || p.includes((d.parts || [])[x])) ? g : "").filter(Boolean);
    return '<div class="tfAction' + (d.on ? " on" : "") + '" data-k="' + se(t) + '"' + (d.tone ? ' data-tone="' + d.tone + '"' : "") + Zt(t) + '><div class="tfActionHead">' + Sn(t, d) + jn(t) + "</div>" + T.join("") + "</div>";
  }
  const Gn = "dual-controller-v3", aa = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.4/dist/dual-axis-controller-v4.js";
  let qa = null;
  async function Bo() {
    if (qa || customElements.get(Gn)) return;
    qa = "loading";
    const t = await Promise.resolve().then(() => N({ type: "lovelace/resources" })).catch(() => null), a = Array.isArray(t) && t.some((d) => /dual-axis-controller/i.test(d.url || ""));
    if (await Promise.race([customElements.whenDefined(Gn), new Promise((d) => setTimeout(d, a ? 8e3 : 0))]), customElements.get(Gn)) return;
    const s = Object.assign(document.createElement("script"), { src: aa });
    s.onerror = () => {
      qa = "failed", U();
    }, document.head.appendChild(s);
  }
  const pn = /* @__PURE__ */ new Map(), ft = (t) => (Ft.lightStyles[t] || Ft.lights) === "dac", Un = () => Ft.lights === "dac" || Object.values(Ft.lightStyles).includes("dac");
  function da(t) {
    return ft(t) && !!customElements.get(Gn);
  }
  const ca = (t) => Ft.lightPads[t] || Ft.dacPad, ua = () => {
    const t = i();
    return t && {
      ...t,
      themes: { ...t.themes || {}, darkMode: !f.classList.contains("light") },
      callService: (a, s, d, ...p) => t.callService(a, ...rs(a, s, d), ...p)
    };
  }, Go = ".halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,158px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", Sa = ".hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}", hn = (t, a) => {
    !t.shadowRoot || t.shadowRoot.querySelector("style[data-tf]") || (t.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: Sa + (a ? Go : "") })).dataset.tf = "");
  }, Pt = /* @__PURE__ */ new Map(), Mi = new ResizeObserver((t) => t.forEach(({ target: a }) => {
    const s = a.parentElement;
    !s || !a.offsetHeight || (s.style.removeProperty("min-height"), Pt.set(s.dataset.dac, s.offsetHeight));
  }));
  function sn(t) {
    t.querySelectorAll("[data-dac]").forEach((a) => {
      const s = a.dataset.dac, d = s.startsWith("dash:");
      let p = pn.get(s);
      if (!p) {
        const T = s.slice(s.indexOf(":") + 1);
        p = document.createElement(Gn), p.setConfig({ type: "custom:" + Gn, entity: T, pad: ca(T), ...d ? { tap_action: { action: "none" } } : {} }), pn.set(s, p);
      }
      p.hass = ua(), p.parentNode !== a && a.replaceChildren(p), !p.offsetHeight && Pt.has(s) && (a.style.minHeight = Pt.get(s) + "px"), Mi.observe(p), hn(p, d);
    });
  }
  function qr() {
    const t = ua();
    pn.forEach((a, s) => {
      a.isConnected ? a.hass = t : pn.delete(s);
    });
  }
  customElements.whenDefined(Gn).then(() => {
    w && (_ != null && _.querySelector("[data-tf]")) && as(Na);
  });
  const Po = (t, a, s) => qe.has(t + "|" + a) ? qe.get(t + "|" + a) : s;
  function Uo(t) {
    var T;
    const a = b[t], s = a.attributes, d = t.split(".")[0], p = (g, x) => ({ act: it(g, "toggle", t), label: x });
    if (d === "light") {
      const g = a.state === "on", x = Do(t), [V, G] = wn(t), H = Po("bright", t, ro(a));
      g && Ue(t, ro(a));
      const I = Po("ct", t, g && s.color_mode === "color_temp" ? s.color_temp_kelvin : null), J = Po("hue", t, g && El.includes(s.color_mode) && s.hs_color ? s.hs_color[0] : null);
      return { on: g, button: p("light", "Turn " + Ee(t) + (g ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        un(t) && ue("bright", t, H / 100, Ee(t) + " brightness", H + "%", !1, g ? null : Oe[t] ?? null),
        x.includes("color_temp") && ue("ct", t, I == null ? null : (I - V) / (G - V), Ee(t) + " warm to cool", I == null ? "" : Math.round(I) + " kelvin", !0),
        x.some((Le) => El.includes(Le)) && ue("hue", t, J == null ? null : J / 360, Ee(t) + " colour", "", !0)
      ] };
    }
    if (d === "climate") {
      const g = s.target_temp_step || 0.5, x = Number(s.temperature);
      return { on: a.state !== "off", tone: a.state === "cool" || s.hvac_action === "cooling" ? "cool" : "heat", button: p("climate", "Turn " + Ee(t) + (a.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(x) && Re("Target temperature", He(x) + " °C", it("climate", "set_temperature", t, { temperature: x - g }), it("climate", "set_temperature", t, { temperature: x + g })),
        Ie("tfSeg", "Mode", (s.hvac_modes || []).map((V) => ({ label: mt(V), act: it("climate", "set_hvac_mode", t, { hvac_mode: V }), pressed: a.state === V })))
      ] };
    }
    if (d === "cover") {
      const g = a.state === "opening" || a.state === "closing", x = a.state === "closed", V = Vn(t), G = Ro(t);
      return { on: !x, tone: "blue", icon: xh[Tl(a)][x ? 1 : 0], button: p("cover", (x ? "Open " : "Close ") + Ee(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        st(t, ic) && ht(t, V),
        G != null && wt(t, G),
        Kt(t, V, g)
      ] };
    }
    if (d === "humidifier") {
      const g = Number(s.humidity);
      return { on: a.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: p("humidifier", "Turn " + Ee(t) + (a.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(g) && Re("Target humidity", g + "%", it("humidifier", "set_humidity", t, { humidity: g - 1 }), it("humidifier", "set_humidity", t, { humidity: g + 1 })),
        ((T = s.available_modes) == null ? void 0 : T.length) && Ie("tfSeg", "Mode", s.available_modes.map((x) => ({ label: mt(x), act: it("humidifier", "set_mode", t, { mode: x }), pressed: s.mode === x })))
      ] };
    }
    if (d === "media_player") {
      const g = a.state === "playing", x = a.state === "off" || a.state === "standby", V = Po("vol", t, s.volume_level), G = x ? { act: it("media_player", st(t, fh) ? "turn_on" : "toggle", t), label: "Turn " + Ee(t) + " on" } : a.state === "playing" || a.state === "paused" ? { act: it("media_player", "media_play_pause", t), label: (g ? "Pause " : "Play ") + Ee(t) } : { act: it("media_player", st(t, mh) ? "turn_off" : "toggle", t), label: "Turn " + Ee(t) + " off" };
      return { on: !x, tone: "blue", art: !x && s.entity_picture ? s.entity_picture : null, button: G, parts: ["playback", "volume"], sections: x ? [] : [
        (st(t, nc) || st(t, ac) || st(t, tc) || st(t, oc)) && Ie("tfSeg", "Playback", [
          { html: As.prev, aria: "Previous", act: it("media_player", "media_previous_track", t), disabled: !st(t, nc) },
          { html: g ? As.pause : As.play, aria: g ? "Pause" : "Play", act: it("media_player", "media_play_pause", t), disabled: !(st(t, tc) || st(t, oc)) },
          { html: As.next, aria: "Next", act: it("media_player", "media_next_track", t), disabled: !st(t, ac) }
        ]),
        st(t, hh) && V != null && ue("vol", t, V, Ee(t) + " volume", Math.round(V * 100) + "%")
      ] };
    }
    if (d === "vacuum") {
      const g = a.state === "cleaning", x = s.rooms || [], V = (H) => x.includes(H) ? x.filter((I) => I !== H) : x.concat(H), G = it("vacuum", g ? "pause" : "start", t, bi(t) ? { rooms: x } : null);
      return { on: g || a.state === "returning", tone: "blue", button: { act: G, label: (g ? "Pause " : "Start ") + Ee(t) }, parts: ["controls", "rooms"], sections: [
        Ie("tfSeg", Ee(t), [
          { label: g ? "Pause" : "Start", act: G },
          { label: "Dock", act: it("vacuum", "return_to_base", t), disabled: a.state === "docked" },
          { label: "Locate", act: it("vacuum", "locate", t) }
        ]),
        bi(t) && Ie("tfChips", "Rooms to clean", at.rooms.filter((H) => H.id !== "balcony").map((H) => ({ label: H.name, act: it("vacuum", "set_rooms", t, { rooms: V(H.name) }), pressed: x.includes(H.name) })))
      ] };
    }
    if (d === "lock") {
      const g = a.state === "locked";
      return { on: !g, tone: "heat", button: { act: it("lock", g ? "unlock" : "lock", t), label: (g ? "Unlock " : "Lock ") + Ee(t) }, parts: ["controls"], sections: [
        Ie("tfSeg", Ee(t), [
          { label: "Lock", act: it("lock", "lock", t), pressed: g },
          { label: "Unlock", act: it("lock", "unlock", t), pressed: a.state === "unlocked" },
          st(t, _h) && { label: "Open", act: it("lock", "open", t), pressed: a.state === "open" }
        ])
      ] };
    }
    if (d === "alarm_control_panel") {
      const g = a.state === "disarmed";
      return { on: !g, tone: a.state === "triggered" ? "alarm" : "blue", button: { act: it("alarm_control_panel", g ? "alarm_arm_away" : "alarm_disarm", t), label: g ? "Arm " + Ee(t) + ", away" : "Disarm " + Ee(t) }, parts: ["controls"], sections: [
        Ie("tfSeg", Ee(t), Eh.filter(([, , , x]) => !x || st(t, x)).map(([x, V, G]) => ({ label: V, act: it("alarm_control_panel", G, t), pressed: a.state === x })))
      ] };
    }
    if (d === "valve") {
      const g = a.state === "open";
      return { on: g, tone: "blue", icon: "mdi:sprinkler-variant", button: p("valve", (g ? "Close " : "Open ") + Ee(t)), parts: ["controls"], sections: [
        Ie("tfSeg", Ee(t), [
          { label: "Open", act: it("valve", "open_valve", t), pressed: g },
          { label: "Close", act: it("valve", "close_valve", t), pressed: !g }
        ])
      ] };
    }
    return { on: !1, button: { act: "", label: Ee(t) }, sections: [] };
  }
  const Wa = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : He(t)) + "°";
  function er(t) {
    const a = (fe) => t.readings.find((ne) => bt(ne).device_class === fe), s = a("temperature"), d = a("humidity"), p = (fe) => {
      var ne;
      return Number((ne = b[fe]) == null ? void 0 : ne.state);
    }, T = (fe) => t.actions.filter((ne) => fe.test(ne)), g = t.lights.filter((fe) => {
      var ne;
      return ((ne = b[fe]) == null ? void 0 : ne.state) === "on";
    }), x = T(/^cover\./), V = x.filter((fe) => {
      var ne;
      return ((ne = b[fe]) == null ? void 0 : ne.state) !== "closed";
    }), G = [...new Set(x.map((fe) => Tl(b[fe])))], H = T(/^climate\./)[0], I = T(/^humidifier\./)[0], J = T(/^media_player\./), Le = J.find((fe) => {
      var ne;
      return ((ne = b[fe]) == null ? void 0 : ne.state) === "playing";
    }) || J.find((fe) => {
      var ne;
      return ((ne = b[fe]) == null ? void 0 : ne.state) === "paused";
    }), Ne = t.plugs.filter((fe) => {
      var ne;
      return ((ne = b[fe]) == null ? void 0 : ne.state) === "on";
    }), ce = [];
    if (s && Number.isFinite(p(s)) && ce.push({ key: "temp", id: s, kind: "reading", icon: no.temp, label: "Temperature", value: He(p(s)) + "°" }), d && Number.isFinite(p(d)) && ce.push({ key: "hum", id: d, kind: "reading", icon: no.hum, label: "Humidity", value: Math.round(p(d)) + "%" }), t.lights.length && ce.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: no.lights,
      label: "Lights",
      value: g.length ? g.length + " of " + t.lights.length + " on" : "All off",
      short: g.length ? g.length + " on" : "Off",
      on: g.length > 0,
      light: g.length ? je(g[0]) : "",
      acts: t.lights.map((fe) => ["light", g.length ? "turn_off" : "turn_on", fe]),
      aria: (g.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), x.length) {
      const fe = G.length === 1 ? yh[G[0]] : "covers", ne = Math.round(x.reduce((Ge, Rt) => Ge + _t(Rt), 0) / x.length);
      ce.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        icon: no.covers,
        label: mt(fe),
        value: ne <= 0 ? "Closed" : ne >= 100 ? "Open" : ne + "% open",
        short: ne <= 0 ? "Closed" : ne + "%",
        on: V.length > 0,
        acts: x.map((Ge) => ["cover", V.length ? "close_cover" : "open_cover", Ge]),
        aria: (V.length ? "Close the " : "Open the ") + fe + " in " + t.name
      });
    }
    if (H) {
      const fe = bt(H), ne = b[H].state === "off";
      ce.push({
        key: "climate",
        kind: "control",
        tone: fe.hvac_action === "cooling" ? "cool" : "heat",
        icon: no.climate,
        label: Ee(H),
        value: ne ? "Off" : mt(fe.hvac_action || b[H].state) + " · " + Wa(fe.temperature),
        short: ne ? "Off" : Wa(fe.temperature),
        on: !ne,
        acts: [["climate", "toggle", H]],
        aria: "Turn " + Ee(H) + (ne ? " on" : " off")
      });
    }
    if (I) {
      const fe = b[I].state === "on";
      ce.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        icon: no.humidifier,
        label: Ee(I),
        value: fe ? "On · " + bt(I).humidity + "%" : "Off",
        short: fe ? bt(I).humidity + "%" : "Off",
        on: fe,
        acts: [["humidifier", "toggle", I]],
        aria: "Turn " + Ee(I) + (fe ? " off" : " on")
      });
    }
    if (J.length) {
      const fe = Le || J[0], ne = b[fe], Ge = ne.state === "playing";
      ce.push({
        key: "media",
        kind: "control",
        tone: "blue",
        icon: no.media,
        label: Ee(fe),
        value: Et(fe),
        short: Ge ? "Playing" : ne.state === "paused" ? "Paused" : mt(ne.state),
        on: Ge,
        acts: [["media_player", ne.state === "playing" || ne.state === "paused" ? "media_play_pause" : "toggle", fe]],
        aria: (Ge ? "Pause " : "Play ") + Ee(fe)
      });
    }
    return t.plugs.length && ce.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      icon: no.plugs,
      label: "Plugs",
      value: Ne.length ? Ne.length + " of " + t.plugs.length + " on" : "All off",
      short: Ne.length ? Ne.length + " on" : "Off",
      on: Ne.length > 0,
      acts: t.plugs.map((fe) => ["switch", Ne.length ? "turn_off" : "turn_on", fe]),
      aria: (Ne.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((fe) => ce.push(bt(fe).device_class === "moisture" ? { key: "alert:" + fe, kind: "alert", icon: no.alert, label: "Water leak" } : { key: "note:" + fe, kind: "note", icon: no.door, label: Ee(fe) + " " + Et(fe).toLowerCase() })), ce;
  }
  const Wr = (t, a) => {
    const s = (d) => t.actions.filter((p) => d.test(p));
    return {
      lights: t.lights,
      covers: s(/^cover\./),
      climate: s(/^climate\./).slice(0, 1),
      humidifier: s(/^humidifier\./).slice(0, 1),
      plugs: t.plugs,
      media: (() => {
        const d = s(/^media_player\./);
        return [d.find((p) => {
          var T;
          return ((T = b[p]) == null ? void 0 : T.state) === "playing";
        }) || d.find((p) => {
          var T;
          return ((T = b[p]) == null ? void 0 : T.state) === "paused";
        }) || d[0]].filter(Boolean);
      })()
    }[a] || [];
  }, tr = (t, a, s) => '<button class="' + a + (t.on ? " on" : "") + '" type="button" data-tone="' + t.tone + '" data-acts="' + lo(t.acts) + '" aria-label="' + se(t.aria) + '" aria-pressed="' + t.on + '">' + s + "</button>", zr = (t) => '<button class="tfAName" type="button" data-go="' + se(t.id) + '" aria-label="Open ' + se(t.name) + '">' + se(t.name) + "</button>";
  function Ci(t, a, s = !1) {
    const d = a.find((x) => x.key === "lights"), p = !!(d != null && d.on), T = p && d.light ? ' data-light style="' + d.light + '"' : "", g = '<span class="tfAreaGlyph"' + Gt("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>";
    return s || !d ? '<span class="tfIcon tfAreaIcon' + (p ? " on" : "") + '"' + T + ' aria-hidden="true">' + g + "</span>" : '<button class="tfIcon tfAreaIcon' + (p ? " on" : "") + '" type="button"' + T + ' data-acts="' + lo(d.acts) + '" aria-label="' + se(d.aria) + '" aria-pressed="' + p + '">' + g + "</button>";
  }
  const Fs = (t) => t.filter((a) => a.kind === "alert" || a.kind === "note").map((a) => '<span class="sourceTag">' + se(a.label) + "</span>").join(" "), Os = (t) => t.readings.find((a) => bt(a).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((a) => b[a]) || null, nr = (t, a) => {
    const s = Ee(a);
    return s.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? mt(s.slice(t.name.length + 1)) : s;
  };
  function Yo(t) {
    const a = b[t], s = bt(t), d = t.split(".")[0], p = Number(a.state);
    if (a.state === "unavailable") return { text: "Unavailable" };
    if (d === "sensor" && Number.isFinite(p)) {
      if (s.device_class === "temperature") return { text: Wa(p) };
      const T = s.unit_of_measurement || "";
      return T === "%" ? { text: Math.round(p) + "%" } : { text: He(p, Number.isInteger(p) ? 0 : 1), unit: T };
    }
    if (d === "climate" && (s.current_temperature ?? s.temperature) != null) return { text: Wa(s.current_temperature ?? s.temperature) };
    if (d === "light") return { text: a.state !== "on" ? "Off" : un(t) ? ro(a) + "%" : "On" };
    if (d === "cover") {
      const T = _t(t);
      return { text: T <= 0 ? "Closed" : T >= 100 ? "Open" : T + "%" };
    }
    return d === "humidifier" ? { text: a.state === "on" ? s.humidity + "%" : "Off" } : d === "media_player" ? { text: a.state === "playing" ? "Playing" : a.state === "paused" ? "Paused" : mt(a.state) } : { text: Et(t) };
  }
  const qs = (t, a, s) => {
    const d = s.find((x) => x.key === "temp"), p = s.find((x) => x.key === "hum"), T = bt(a), g = b[a].state === "off";
    return a.startsWith("climate.") ? [nr(t, a), g ? "Off" : mt(T.hvac_action || b[a].state) + (T.temperature != null ? " · " + Wa(T.temperature) : ""), p && p.value + " humidity"].filter(Boolean).join(" · ") : [!(d && d.id === a) && nr(t, a), d && d.id !== a && d.value, p && p.id !== a && p.value + " humidity"].filter(Boolean).join(" · ");
  };
  function Vr(t, a, s) {
    const d = s && Yo(s), p = s ? qs(t, s, a) : "", T = (x) => {
      const V = Wr(t, x.key);
      return V.length === 1 ? V[0] : "group:" + t.id + ":" + x.key;
    }, g = a.filter((x) => x.kind === "control").slice(0, 4).map((x) => '<div class="tfATile' + (x.on ? " on" : "") + '" data-tone="' + x.tone + '"' + (x.light ? ' data-light style="' + x.light + '"' : "") + ">" + tr(x, "tfIcon", x.icon) + '<button class="tfName" type="button" data-more="' + se(T(x)) + '" aria-label="' + se(t.name + " " + x.label.toLowerCase() + ", " + x.value + ". Open") + '"><span class="activityRowName">' + se(x.label) + '</span><span class="activityRowMeta">' + se(x.value) + "</span></button></div>");
    return '<div class="workoutPanelTop">' + Ci(t, a) + '<div class="tfATitle">' + zr(t) + Fs(a) + "</div></div>" + (s ? '<button class="tfABig" type="button" data-more="' + se(s) + '" aria-label="' + se(Ee(s) + ", " + Et(s) + ". More info") + '"><span class="tfABigMain' + (d.text.length > 7 ? " long" : "") + '">' + se(d.text) + (d.unit ? '<span class="tfABigUnit">' + se(d.unit) + "</span>" : "") + "</span>" + (p ? '<span class="tfABigSub">' + se(p) + "</span>" : "") + "</button>" : "") + (g.length ? '<div class="tfATiles">' + g.join("") + "</div>" : "");
  }
  function co(t) {
    const a = t.id === ge, s = er(t), d = Os(t), p = d && Yo(d), T = [...s.filter((g) => g.kind === "control"), ...s.filter((g) => g.kind !== "control" && g.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (a ? " active" : "") + '" data-area="' + se(t.id) + '" tabindex="0" aria-expanded="' + a + '" aria-label="' + se(t.name) + '"><div class="panelExpanded"' + (a ? "" : " inert") + ">" + Vr(t, s, d) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + Ci(t, s, !0) + '<span class="tfACName">' + se(t.name) + '</span></div><span class="tfACMain">' + (p ? se(p.text + (p.unit ? " " + p.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + T.map((g) => '<span class="tfACTile"><span class="tfIcon' + (g.kind === "alert" ? " alert" : "") + '"' + (g.on && g.light ? ' data-light style="' + g.light + '"' : "") + ">" + g.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let uo = [];
  const Si = (t) => '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + uo.map(co).join("") + "</section></div>", Zo = () => [
    { key: "home", name: "Home", ids: at.homeVacuums },
    { key: "security", name: "Security", ids: [...at.security.alarms, ...at.security.locks] },
    ...at.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], Ko = (t, a, s) => t + " " + (t === 1 ? a : s), Yn = () => (q.favourites ?? ee.favorite_entities ?? []).filter((t) => b[t]);
  function ar() {
    if (!We) {
      const a = Object.entries(Xe).sort((d, p) => p[1] - d[1]).map(([d]) => d), s = at.rooms.flatMap((d) => d.actions);
      We = [.../* @__PURE__ */ new Set([...pe, ...a, ...s.filter((d) => Uo(d).on), ...s])];
    }
    const t = Yn();
    return We.filter((a) => b[a] && b[a].state !== "unavailable" && !t.includes(a));
  }
  let Ti = !1;
  function Dt() {
    if (!Ti || q.favSeeded || !at.rooms.length) return;
    const t = (s) => Object.keys(b).find((d) => bi(d) && s(d)), a = [t((s) => s.startsWith("climate.")), t((s) => s.startsWith("cover.") && /curtain/.test(s)), t((s) => s.startsWith("valve.")), at.security.locks[0]];
    q = { ...q, favourites: [.../* @__PURE__ */ new Set([...q.favourites ?? ee.favorite_entities ?? [], ...a.filter(Boolean)])], favSeeded: !0 }, En();
  }
  const Li = () => q.suggest ?? !ee.hide_suggested_entities;
  function Ws() {
    const t = new Set(q.favHidden || []), a = Yn().filter((d) => !t.has(d)), s = Li() ? ar().filter((d) => !t.has(d) && ho(d)) : [];
    return [...a, ...s].slice(0, Rh);
  }
  const jr = (t) => {
    const a = Yn().includes(t);
    return '<button class="tfStar" type="button" data-star="' + se(t) + '" aria-pressed="' + a + '" aria-label="Favourite: ' + se(Ee(t)) + '">' + Ah(a) + "</button>";
  };
  function Ta(t, { area: a = !1, star: s = !1 } = {}) {
    var G;
    const d = t.split(".")[0], p = _s.includes(d) ? Uo(t) : null, T = p ? p.on : ["on", "open", "playing"].includes((G = b[t]) == null ? void 0 : G.state), g = p ? p.button : kh.includes(d) ? { act: it(d, "toggle", t), label: "Turn " + Ee(t) + (T ? " off" : " on") } : d === "scene" || d === "script" ? { act: it(d, "turn_on", t), label: "Run " + Ee(t) } : null, x = Et(t) + (a && vt.get(t) ? " · " + vt.get(t) : ""), V = (p == null ? void 0 : p.icon) || xn(t);
    return '<div class="activityRow' + (g ? " tfPlug" : "") + (T ? " on" : "") + (s ? " tfPick" : "") + '" data-k="' + se((a ? "fav:" : "row:") + t) + '" data-tone="' + (d === "light" ? "light" : (p == null ? void 0 : p.tone) || "blue") + '"' + Zt(t) + ">" + (g && !s ? '<button class="tfIcon" type="button" data-act="' + g.act + '" aria-label="' + se(g.label) + '"' + Gt(t, V) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + Gt(t, V) + "></div>") + '<button class="tfName" type="button" data-more="' + se(t) + '" aria-label="' + se(Ee(t) + ", " + x + ". More info") + '"><span class="activityRowName">' + se(Ee(t)) + '</span><span class="activityRowMeta">' + se(x) + "</span></button>" + (s ? jr(t) : "") + "</div>";
  }
  const Gr = () => {
    var t;
    return b[(t = q.sources) == null ? void 0 : t.weather] ? q.sources.weather : b["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(b).find((a) => a.startsWith("weather."));
  };
  function Ot() {
    var s;
    const t = (d) => Object.keys(b).filter((p) => p.startsWith("binary_sensor.") && d.includes(bt(p).device_class));
    return ((s = re.alert_entities) != null && s.length ? re.alert_entities : [...t(["moisture", "smoke", "gas"]).map((d) => ({ entity: d, severity: "alert" })), ...t(Dl).map((d) => ({ entity: d, severity: "warning" }))]).filter((d) => b[d.entity]).map((d) => ({ ...d, on: ["on", "open", "unlocked", "triggered", "problem"].includes(b[d.entity].state) }));
  }
  function za() {
    const t = Object.keys(Al), a = /* @__PURE__ */ new Set(), s = [];
    return (ee.shortcuts || []).forEach((d) => {
      if (d.type === "summary") {
        if (!t.includes(d.key) || a.has(d.key)) return;
        a.add(d.key);
      }
      s.push(d);
    }), t.forEach((d) => {
      a.has(d) || s.push({ type: "summary", key: d });
    }), s;
  }
  function po() {
    var Yt;
    const t = at.rooms, a = at.security, s = (Be, Ct) => Be.actions.filter((hi) => Ct.test(hi)), d = (Be) => t.map((Ct) => ({ name: Ct.name, ids: Be(Ct) })).filter((Ct) => Ct.ids.length), p = t.flatMap((Be) => Be.lights), T = p.filter((Be) => {
      var Ct;
      return ((Ct = b[Be]) == null ? void 0 : Ct.state) === "on";
    }).length, g = t.map((Be) => Be.readings.find((Ct) => bt(Ct).device_class === "temperature")).filter(Boolean).map((Be) => Number(b[Be].state)).filter(Number.isFinite), [x, V] = [He(Math.min(...g)), He(Math.max(...g))], G = t.flatMap((Be) => s(Be, /^media_player\./)), H = G.filter((Be) => {
      var Ct;
      return ((Ct = b[Be]) == null ? void 0 : Ct.state) === "playing";
    }).length, I = Ot(), J = I.filter((Be) => Be.severity === "warning" && Be.on).length, Le = a.locks.filter((Be) => {
      var Ct;
      return ["unlocked", "jammed", "open"].includes((Ct = b[Be]) == null ? void 0 : Ct.state);
    }).length, Ne = a.alarms.filter((Be) => {
      var Ct;
      return ((Ct = b[Be]) == null ? void 0 : Ct.state) === "disarmed";
    }).length, ce = J ? Ko(J, "warning", "warnings") : null, fe = Le ? Le + " unlocked" : Ne ? Ne + " disarmed" : ce ? null : "All secure", ne = Object.keys(b).filter((Be) => Be.startsWith("sensor.") && bt(Be).device_class === "battery").sort((Be, Ct) => Number(b[Be].state) - Number(b[Ct].state)), Ge = [...ne.filter((Be) => Number(b[Be].state) < 20), ...at.vacuums.filter((Be) => bt(Be).battery_level < 20)], Rt = t.flatMap((Be) => Be.plants.map((Ct) => Ct.id)).sort((Be, Ct) => {
      var hi, ds;
      return (((hi = b[Ct]) == null ? void 0 : hi.state) === "problem") - (((ds = b[Be]) == null ? void 0 : ds.state) === "problem");
    }), mn = Rt.filter((Be) => {
      var Ct;
      return ((Ct = b[Be]) == null ? void 0 : Ct.state) === "problem";
    }), va = t.flatMap((Be) => Be.solar), cn = va.find((Be) => Be.endsWith("_power")), ra = {
      light: p.length && { value: T ? T + " on" : "All off", groups: d((Be) => Be.lights) },
      climate: g.length && { value: x === V ? x + "°" : x + " - " + V + "°", groups: d((Be) => [...Be.readings.filter((Ct) => ["temperature", "humidity"].includes(bt(Ct).device_class)), ...s(Be, /^(climate|humidifier)\./)]) },
      security: (a.alarms.length || a.locks.length) && { value: [ce, fe].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...a.alarms, ...a.locks] }, { name: "Doors and windows", ids: a.openings }].filter((Be) => Be.ids.length) },
      media_players: G.length && { value: H ? H + " playing" : "No media playing", groups: d((Be) => s(Be, /^media_player\./)) },
      maintenance: (ne.length || Rt.length) && { value: [Ge.length && Ko(Ge.length, "low battery", "low batteries"), mn.length && Ko(mn.length, "problem", "problems")].filter(Boolean).join(", ") || "All good", groups: [{ name: "Plants", ids: Rt }, { name: "Batteries", ids: [...at.vacuums, ...ne] }].filter((Be) => Be.ids.length) },
      energy: at.grid && { value: jt(Number(((Yt = b[cn]) == null ? void 0 : Yt.state) || 0) * 1e3 + Number(b[at.grid].state)) + " now", groups: [{ name: "Energy", ids: [...va, at.grid] }] }
    }, Co = [], Mn = I.filter((Be) => Be.severity !== "warning" && Be.on);
    return Mn.length && Co.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: Ko(Mn.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: Mn.map((Be) => Be.entity) }] }), za().forEach((Be) => {
      Be.type !== "summary" ? Co.push({ key: "path:" + Be.path, name: Be.label || Be.path, icon: Be.icon || "mdi:link-variant", colour: "", value: "" }) : !Be.hidden && ra[Be.key] && !(q.hiddenSums || []).includes(Be.key) && Co.push({ key: Be.key, ...Al[Be.key], ...ra[Be.key] });
    }), Co;
  }
  const zs = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + se(t.key) + '" data-k="sum:' + se(t.key) + '" aria-label="' + se(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : "") + '><div class="tfIcon" aria-hidden="true"' + Gt(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + se(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + se(t.value) + "</div>" : "") + "</div></div>";
  function $o(t) {
    const a = Yn();
    q = { ...q, favourites: a.includes(t) ? a.filter((s) => s !== t) : [...a, t], favHidden: (q.favHidden || []).filter((s) => s !== t) }, En(), Jt();
  }
  function Ai(t) {
    document.querySelector("home-assistant") && (ke.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function Xo(t, a) {
    if (t.startsWith("path:")) {
      Ai(t.slice(5));
      return;
    }
    if (t === "security") {
      gr("security");
      return;
    }
    dn("summary:" + t, a);
  }
  async function Va() {
    const t = (g) => Promise.resolve().then(() => N(g)).catch(() => null), [a, s, d, p] = await Promise.all([
      t({ type: "frontend/get_user_data", key: rc }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), T = (a == null ? void 0 : a.value) || {};
    q = { favourites: T.favourites ?? null, sources: T.sources, hiddenSums: T.hiddenSums, dash: T.dash, named: T.named, favHidden: T.favHidden, suggest: T.suggest, favSeeded: T.favSeeded }, ee = (s == null ? void 0 : s.value) || {}, re = (d == null ? void 0 : d.value) || {}, pe = Array.isArray(p == null ? void 0 : p.entities) ? p.entities : [], We = null, Object.keys(b).length && Jt(), Vs(), Ti = !0, Dt();
  }
  const La = "HomeCore";
  async function Vs() {
    var d, p, T;
    const t = location.pathname.split("/")[1], a = q.named || [];
    if (!((p = (d = i()) == null ? void 0 : d.user) != null && p.is_admin) || !t || a.includes(t)) return;
    const s = () => {
      q = { ...q, named: [...a, t] }, En();
    };
    try {
      const g = (T = await N({ type: "lovelace/dashboards/list" })) == null ? void 0 : T.find((G) => G.url_path === t);
      if (!g || g.mode === "yaml") return;
      if (g.title === La) {
        s();
        return;
      }
      const x = await N({ type: "lovelace/config", url_path: t }), V = ((x == null ? void 0 : x.views) || []).flatMap((G) => [...G.cards || [], ...(G.sections || []).flatMap((H) => H.cards || [])]);
      if (!V.length || !V.every((G) => (G == null ? void 0 : G.type) === "custom:move-assistant-card" && G.layout === "test-focus")) return;
      await N({ type: "lovelace/dashboards/update", dashboard_id: g.id, title: La }), s();
    } catch {
    }
  }
  let oa = null, _i = 0, Zn = !1;
  const or = (t) => {
    const a = t.split(".")[0];
    return Dh.includes(a) && (a !== "binary_sensor" || Dl.includes(bt(t).device_class));
  };
  async function js() {
    var t;
    if (!(Zn || Date.now() - _i < 30 * 1e3)) {
      Zn = !0, _i = Date.now();
      try {
        const a = Object.keys(((t = i()) == null ? void 0 : t.states) || {}).filter(or), s = a.length ? await N({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: a }) : null;
        oa = Array.isArray(s) ? s.filter((d) => d.entity_id && d.state != null && d.when) : null;
      } catch {
        oa = null;
      }
      Zn = !1, Jt();
    }
  }
  function ir() {
    const t = /* @__PURE__ */ new Map(), a = (d) => {
      if (!b[d.entity_id] || !or(d.entity_id) || !ho(d.entity_id) || ["unavailable", "unknown"].includes(d.state)) return;
      const p = t.get(d.entity_id);
      (!p || d.when > p.when + 1) && t.set(d.entity_id, d);
    };
    (oa || []).forEach(a);
    const s = oa ? _i / 1e3 - 5 : 0;
    return Object.keys(b).forEach((d) => {
      var g;
      const p = b[d], T = p.last_changed ? Date.parse(p.last_changed) / 1e3 : 0;
      T > s && a({ entity_id: d, state: p.state, when: T, context_user_id: (g = p.context) == null ? void 0 : g.user_id });
    }), [...t.values()].sort((d, p) => p.when - d.when).slice(0, Nh);
  }
  function rr(t) {
    var d;
    const a = t.context_user_id && Object.keys(b).find((p) => p.startsWith("person.") && bt(p).user_id === t.context_user_id);
    if (a) return Ee(a);
    const s = (d = i()) == null ? void 0 : d.user;
    return s && t.context_user_id === s.id ? s.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function Ur(t) {
    const a = t.entity_id.split(".")[0], s = String(t.state);
    return a === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[s] || mt(s).toLowerCase() : a === "cover" || a === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[s] || mt(s).toLowerCase() : a === "binary_sensor" ? s === "on" ? "opened" : "closed" : a === "climate" ? s === "off" ? "turned off" : "set to " + mt(s).toLowerCase() : a === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[s] || mt(s).toLowerCase() : a === "alarm_control_panel" ? (pc[s] || mt(s)).toLowerCase() : a === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[s] || mt(s).toLowerCase() : s === "on" ? "turned on" : s === "off" ? "turned off" : mt(s).toLowerCase();
  }
  function Gs(t) {
    const a = t.entity_id, s = Ee(a) + " " + Ur(t), d = [rr(t), Bt(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow"><div class="tfIcon" aria-hidden="true"' + Gt(a, xn(a)) + '></div><button class="tfName" type="button" data-more="' + se(a) + '" aria-label="' + se(s + ", " + d + ". More info") + '"><span class="activityRowName">' + se(s) + '</span><span class="activityRowMeta">' + se(d) + "</span></button></div>";
  }
  let ja = null, sr = 0;
  const Jo = [["electricity", "Electricity", 4.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function Us() {
    var a;
    if (Date.now() - sr < 5 * 60 * 1e3) return;
    sr = Date.now();
    const t = [];
    try {
      const s = ((a = await N({ type: "energy/get_prefs" })) == null ? void 0 : a.energy_sources) || [], d = (p) => s.filter((T) => T.type === p).flatMap((T) => p === "grid" ? (T.flow_from || []).map((g) => g.stat_energy_from) : [T.stat_energy_from]).filter(Boolean);
      for (const [p, T, g] of [["electricity", "Electricity", d("grid")], ["solar", "Solar", d("solar")], ["gas", "Gas", d("gas")], ["water", "Water", d("water")]]) {
        if (!g.length) continue;
        const x = await Promise.all(g.map((V) => Promise.resolve(N({ type: "recorder/statistic_during_period", statistic_id: V, calendar: { period: "day" }, types: ["change"] })).then((G) => Number(G == null ? void 0 : G.change) || 0, () => 0)));
        t.push({ key: p, name: T, id: g[0], value: x.reduce((V, G) => V + G, 0), unit: bt(g[0]).unit_of_measurement || (p === "gas" || p === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    ja = t, Jt();
  }
  let pa = null;
  function Ga() {
    var T;
    const t = ja != null && ja.length ? ja : Jo.map(([g, x, V, G]) => {
      const H = "sensor.made_up_energy_" + g;
      return b[H] = { entity_id: H, state: String(V), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: x + " today", unit_of_measurement: G, state_class: "total_increasing" } }, { key: g, name: x, id: H, value: V, unit: G };
    });
    Ce.clear(), t.some((g) => g.id === pa) || (pa = t[0].id);
    const a = t.map((g) => {
      const x = Number(g.value).toLocaleString(void 0, { maximumFractionDigits: g.value < 10 ? 2 : 1 }) + " " + g.unit, V = Bh[g.key], G = g.id === pa;
      return Ce.set(g.id, { name: g.name, text: x, icon: V }), '<div class="activityRow tap' + (G ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + se(g.id) + '" aria-pressed="' + G + '" aria-label="' + se(g.name + ", " + x) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + Gt("", V, g.name) + '></div><div><div class="activityRowName">' + se(g.name) + '</div><div class="activityRowMeta">' + se(x) + "</div></div></div>";
    }), s = t.find((g) => g.id === pa), d = (((T = Kn().opts.energy) == null ? void 0 : T.graph) || "above") === "below", p = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + se(s.id) + '" role="img" aria-label="' + se(s.name) + ', last 24 hours"></svg></div>';
    return O("dash:energy", 0, "Energy today", a, p, null, "tfDashCard tfDash-energy" + (d ? "" : " graphAbove"));
  }
  function Ei(t) {
    const a = _.querySelector(".tfDash-energy"), s = a == null ? void 0 : a.querySelector(".tfDashGraph svg");
    !s || t === pa || (pa = t, a.querySelectorAll("[data-energy-pick]").forEach((d) => {
      const p = d.dataset.energyPick === t;
      d.classList.toggle("picked", p), d.setAttribute("aria-pressed", String(p));
    }), s.dataset.graph = t, s.dataset.drawn = "", on.set("dash:energy", Ga()), Qr(!0));
  }
  function Di(t) {
    var p;
    if ((p = window.matchMedia) != null && p.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [a, s] = t.querySelectorAll("path");
    if (!(s != null && s.getTotalLength)) return;
    const d = s.getTotalLength();
    s.animate([{ strokeDasharray: d, strokeDashoffset: d }, { strokeDasharray: d, strokeDashoffset: 0 }], { duration: 700, easing: "cubic-bezier(.2,.7,.3,1)" }), a == null || a.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, delay: 200, easing: "ease-out", fill: "backwards" });
  }
  let Ua = null, Qo = 0;
  const ho = (t) => !t.startsWith("light.") || Ph.includes((vt.get(t) || "").toLowerCase()), Ri = () => Math.max(2, Za((_ == null ? void 0 : _.clientWidth) || 0).n);
  function ha(t) {
    if (!Ua) {
      const s = (d) => {
        var p;
        return (((p = b[d]) == null ? void 0 : p.state) === "on" ? 1e6 : 0) + (Xe[d] || 0);
      };
      Ua = {
        lights: at.rooms.flatMap((d) => d.lights).filter((d) => {
          var p;
          return ho(d) && ((p = b[d]) == null ? void 0 : p.state) !== "unavailable";
        }).sort((d, p) => s(p) - s(d) || Ee(d).localeCompare(Ee(p))),
        climates: at.rooms.flatMap((d) => d.actions.filter((p) => p.startsWith("climate.")))
      };
    }
    const a = Ua.climates.filter((s) => b[s]).slice(0, t > 3 ? 2 : 1);
    return [...Ua.lights.filter((s) => b[s]).slice(0, Math.max(0, t - a.length)), ...a];
  }
  const fo = (t, a, s, d) => (p) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + a + '" aria-label="' + s + '">' + (d ? '<div class="activityHeader"><div class="activityTitle">' + s + "</div></div>" : "") + '<div class="activityRows">' + p + "</div></section>";
  function Ys(t, a) {
    var T, g;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + se(((g = (T = i()) == null ? void 0 : T.config) == null ? void 0 : g.location_name) || "Home") + "</h1>" }), a.length && t.push({ key: "sums", wrap: (x) => '<div class="tfDashBarRow" data-tf data-k="sums">' + fo("tfDash-bar", "sums-bar", "Summaries", !1)(x).replace(" data-tf", "") + "</div>", tiles: a.map((x) => ({ key: "sum:" + x.key, html: zs(x) })) }), uo.length && t.push({ key: "areas", html: Si(0) });
    const s = Ws();
    s.length && t.push({ key: "favs", wrap: fo("tfDash-favs", "favs", "Favourites", !0), tiles: s.map((x) => ({ key: "fav:" + x, html: Ta(x, { area: !0 }) })) });
    const d = ir();
    t.push({ key: "dash:act", html: O("dash:act", 0, "Activity", d.length ? d.map(Gs) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: Ga() });
    const p = Ri();
    return Qo = p, t.push({
      key: "dash:tiles",
      wrap: (x) => '<div class="tfDashTiles" data-tf data-k="dash:tiles">' + x + "</div>",
      tiles: ha(p >= 3 ? p : p * 2).map((x) => ({ key: x, html: Rn(x, !1, x.startsWith("climate.") ? ["step"] : ["bright"]) }))
    }), js(), Us(), t;
  }
  const Ni = 252, Wt = 16, ei = 230, mo = 60, Aa = mo + Wt, ti = 5, lr = 3, dr = { title: "The name", sums: "Summaries", wx: "Weather", areas: "Areas", favs: "Favourites", act: "Activity", energy: "Energy today", avg: "Compared to average" }, Bi = ["wx", "favs", "act", "energy", "avg"], Yr = { wx: ti, areas: ti, favs: ti, act: ti, energy: 4, avg: 4 }, Zs = 3, yn = 94, _a = /* @__PURE__ */ new Set(), Ea = (t) => dr[t] || Ee(t), Ks = 409, Zr = 128;
  let Nn = !1, Tt = null, Bn = null, Pi = !1, Da = /* @__PURE__ */ new Map(), ni = 0, fn = 0;
  const Ya = ["title", "sums"], Za = (t) => {
    let a = Math.floor((t + Wt) / (Ni + Wt)), s = Ni;
    return a < 4 && t >= 4 * ei + 3 * Wt && (a = 4, s = Math.floor((t - 3 * Wt) / 4)), { n: Math.max(1, a), w: s };
  }, Kn = () => ({ cells: {}, spans: {}, hidden: [], opts: {}, ...q.dash || {} });
  function Ii(t) {
    q = { ...q, dash: t }, En();
  }
  function ai() {
    const t = (a) => _.querySelector(a);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", rn.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", rn.avg, 2],
      ...[..._.querySelectorAll(".tfDashTiles > [data-k]")].map((a) => [a.dataset.k, a, 1, !0])
    ].filter(([, a]) => a == null ? void 0 : a.isConnected).map(([a, s, d, p = !1]) => ({ key: a, el: s, span: d, tile: p }));
  }
  const cr = (t, a, s) => t.span === "full" ? a : t.span === "areas" ? Math.min(a, Math.ceil((Ks + Math.max(0, uo.length - 1) * (Zr + Wt) + Wt) / (s + Wt))) : Math.min(a, Kn().spans[t.key] ?? t.span), Ka = (t) => Yr[t.key] ?? (t.el.classList.contains("tfDac") ? _a.has(t.key) ? ti : Zs : null);
  function Kr(t, a, s = null) {
    const d = Kn().cells, p = t.every((x) => !d[x.key] || d[x.key].col + x.cols <= a), T = (x) => d[x.key] || { row: 1e9, col: 0 }, g = () => {
      const x = /* @__PURE__ */ new Set(), V = /* @__PURE__ */ new Map(), G = (ce, fe, ne, Ge) => {
        for (let Rt = fe; Rt < fe + Ge; Rt++) for (let mn = ce; mn < ce + ne; mn++) if (x.has(mn + "," + Rt)) return !1;
        return !0;
      }, H = (ce, fe, ne) => {
        for (let Ge = ne; Ge < ne + ce.rows; Ge++) for (let Rt = fe; Rt < fe + ce.cols; Rt++) x.add(Rt + "," + Ge);
        V.set(ce.key, { col: fe, row: ne, cols: ce.cols, rows: ce.rows });
      }, I = (ce, fe, ne) => {
        for (fe = Math.max(0, Math.min(a - ce.cols, fe)), ne = Math.max(0, ne); !G(fe, ne, ce.cols, ce.rows); ) ne++;
        H(ce, fe, ne);
      }, J = (ce) => {
        for (let fe = 0; ; fe++) for (let ne = 0; ne <= a - ce.cols; ne++) if (G(ne, fe, ce.cols, ce.rows)) {
          H(ce, ne, fe);
          return;
        }
      };
      s && I(s, Tt.col, Tt.row);
      const Le = t.filter((ce) => ce !== s), Ne = (ce, fe) => T(ce).row - T(fe).row || T(ce).col - T(fe).col;
      return p ? (Le.filter((ce) => d[ce.key]).sort(Ne).forEach((ce) => I(ce, d[ce.key].col, d[ce.key].row)), Le.filter((ce) => !d[ce.key]).forEach(J), V) : ([...Le].sort(Ne).forEach(J), V);
    };
    for (let x = 0; ; x++) {
      const V = g();
      if (x === 3) return V;
      const G = t.filter((I) => I.tile && !_a.has(I.key)).map((I) => ({ it: I, p: V.get(I.key) })).sort((I, J) => I.p.row - J.p.row || I.p.col - J.p.col);
      let H = !1;
      for (let I = 0, J; I < G.length; I = J) {
        for (J = I + 1; J < G.length && G[J].p.row === G[I].p.row && G[J].p.col === G[J - 1].p.col + 1; J++) ;
        const Le = G.slice(I, J), Ne = Math.max(...Le.map((ce) => ce.it.rows));
        Le.forEach((ce) => {
          ce.it.rows < Ne && (ce.it.rows = Ne, H = !0);
        });
      }
      if (!H) return V;
    }
  }
  function $r() {
    const t = Kn(), a = new Set(t.hidden), s = ai().filter((T) => !Ya.includes(T.key));
    let d = Da;
    if (!d.size) {
      const T = t.pegs || 4, g = s.filter((x) => !a.has(x.key));
      g.forEach((x) => {
        x.cols = cr(x, T, Ni), x.rows = Ka(x) ?? 2;
      }), d = Kr(g, T);
    }
    const p = (T) => !a.has(T.key) && d.get(T.key) || { row: 1e9, col: 0 };
    s.sort((T, g) => p(T).row - p(g).row || p(T).col - p(g).col).forEach((T, g) => T.el.style.setProperty("--o", String(3 + g)));
  }
  const go = (t, a) => Ii({ ...t, cells: a, pegs: Za(_.clientWidth).n });
  function ln() {
    var fe;
    if (!w || !_) return;
    const t = _.clientWidth, { n: a, w: s } = Za(t), d = f.classList.contains("tfDash") && a >= 2;
    f.classList.toggle("tfBoard", d), f.classList.toggle("tfEditing", d && Nn);
    const p = u("dashEditNav");
    p && (p.hidden = !d, p.classList.toggle("active", Nn), p.setAttribute("aria-pressed", String(Nn)), p.setAttribute("aria-label", Nn ? "Done editing" : "Edit the dashboard"), p.title = Nn ? "Done" : "Edit", p.innerHTML = Nn ? Lh : uc);
    const T = d ? ai() : [];
    if (!d) {
      _.style.height = "", _.querySelectorAll(".tfBoardItem").forEach((ne) => {
        ne.classList.remove("tfBoardItem", "tfBoardHidden"), ne.style.left = ne.style.top = ne.style.width = ne.style.height = "";
      }), (fe = _.querySelector(".tfDash-act > .activityRows")) == null || fe.style.removeProperty("max-height"), vo(!1), f.classList.contains("tfDash") && $r(), In();
      return;
    }
    _.style.setProperty("--peg-w", s + "px");
    const g = new Set(Kn().hidden), x = s + Wt;
    Tt != null && Tt.fromTray && g.delete(Tt.key), T.forEach((ne) => ne.el.classList.toggle("tfBoardHidden", g.has(ne.key)));
    const V = T.filter((ne) => !g.has(ne.key) && getComputedStyle(ne.el).display !== "none");
    let G = 0;
    V.filter((ne) => Ya.includes(ne.key)).forEach((ne) => {
      ne.el.classList.add("tfBoardItem"), Object.assign(ne.el.style, { width: t + "px", height: "", left: "0px", top: G + "px" });
      const Ge = ne.key === "sums" && ne.el.querySelector(".tfDash-bar"), Rt = Ge ? Ge.querySelectorAll(".activityRow").length : 0;
      Ge && (Ge.style.maxWidth = "none");
      for (let mn = 1; Ge && mn <= Rt && (Ge.style.setProperty("--bar-cols", String(Math.ceil(Rt / mn))), !(Ge.offsetWidth <= t)); mn++)
        ;
      Ge && (Ge.style.maxWidth = ""), G += ne.el.offsetHeight + Wt;
    }), fn = G;
    const H = V.filter((ne) => !Ya.includes(ne.key));
    H.forEach((ne) => {
      ne.cols = cr(ne, a, s), ne.el.classList.add("tfBoardItem"), ne.el.style.width = (ne.cols === a ? t : ne.cols * s + (ne.cols - 1) * Wt) + "px", ne.el.style.height = "", ne.rows = Ka(ne) ?? Math.max(1, Math.ceil((ne.el.offsetHeight + Wt - 6) / Aa));
    });
    const I = Tt && H.find((ne) => ne.key === Tt.key), J = Kr(H, a, I);
    J.forEach((ne) => Object.assign(ne, { x: ne.cols === a ? 0 : ne.col * x, y: fn + ne.row * Aa, w: ne.cols === a ? t : ne.cols * s + (ne.cols - 1) * Wt, h: ne.rows * Aa - Wt })), H.forEach((ne) => {
      const Ge = J.get(ne.key);
      ne.el.style.height = Ge.h + "px", ne.el.classList.contains("tfDac") && ne.el.style.setProperty("--tf-dac-pad", Ge.h - yn + "px"), !(ne === I && !Tt.fromTray) && (ne.el.style.left = Ge.x + "px", ne.el.style.top = Ge.y + "px");
    }), Da = J;
    const Le = J.get("act"), Ne = Le && _.querySelector(".tfDash-act > .activityRows");
    Ne && (Ne.style.maxHeight = Math.max(mo, Math.floor((Le.h - Ne.offsetTop - 10) / mo) * mo) + "px"), ni = Math.max(0, ...[...J.values()].map((ne) => ne.row + ne.rows));
    let ce = fn + ni * Aa - Wt;
    ce = vo(Nn, H, J, ce, a, s), _.style.height = ce + "px", requestAnimationFrame(() => f.classList.add("tfBoardReady")), T.forEach((ne) => fa.observe(ne.el)), Qr(), In();
  }
  const Ra = () => {
    Pi || (Pi = !0, requestAnimationFrame(() => {
      Pi = !1, ln();
    }));
  }, fa = new ResizeObserver(() => {
    Tt || Ra();
  });
  function vo(t, a = [], s = /* @__PURE__ */ new Map(), d = 0, p = 1, T = Ni) {
    _.querySelectorAll(".tfEditChips").forEach((H) => {
      (!t || !H.closest(".tfBoardItem")) && H.remove();
    }), _.querySelectorAll(".tfFavHides").forEach((H) => H.remove()), _.querySelectorAll(".tfBoardItem").forEach((H) => [...H.children].forEach((I) => {
      I.classList.contains("tfEditChips") || I.toggleAttribute("inert", t);
    }));
    let g = _.querySelector(".tfBoardCells"), x = _.querySelector(".tfBoardLand");
    if (!t)
      return g == null || g.remove(), x == null || x.remove(), Pn(), d;
    const V = ni + lr;
    if (g || (g = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), g.setAttribute("aria-hidden", "true"), _.prepend(g)), g.style.top = fn + "px", g.dataset.size !== p + "x" + V + "x" + T && (g.dataset.size = p + "x" + V + "x" + T, g.style.gridTemplateColumns = "repeat(" + p + "," + T + "px)", g.innerHTML = "<i></i>".repeat(p * V)), d = Math.max(d, fn + V * Aa - Wt), a.forEach((H) => {
      const I = H.el;
      !I || I.querySelector(":scope > .tfEditChips") || I.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + _l + '</span><button class="tfEditChip" type="button" data-board-more="' + se(H.key) + '" aria-label="' + se(Ea(H.key)) + ' options" aria-haspopup="menu">' + Ch + "</button></div>");
    }), Tt && s.has(Tt.key)) {
      x || (x = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), _.appendChild(x));
      const H = s.get(Tt.key);
      Object.assign(x.style, { left: H.x + "px", top: H.y + "px", width: H.w + "px", height: H.h + "px" });
    } else x == null || x.remove();
    const G = _.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (G) {
      const H = G.getBoundingClientRect();
      G.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...G.querySelectorAll('[data-k^="fav:"]')].map((I) => {
        const J = I.getBoundingClientRect(), Le = I.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + se(Le) + '" aria-label="Hide ' + se(Ee(Le)) + ' from the dashboard" style="left:' + Math.round(J.right - H.left - 42) + "px;top:" + Math.round(J.top - H.top + (J.height - 32) / 2) + 'px">' + dc + "</button>";
      }).join("") + "</div>");
    }
    return d;
  }
  function $a(t) {
    Nn = t, t || (Tt = null, kn = !1, Pn()), ln();
  }
  function oi(t, a) {
    var H, I;
    Pn();
    const s = Da.get(t), { n: d } = Za(_.clientWidth), p = Kn(), T = p.spans[t] ?? 2;
    if (!s) return;
    const g = s.cols >= d, x = (J, Le, Ne) => '<button type="button" role="menuitem" data-board-act="' + J + '"' + (Ne ? " disabled" : "") + ">" + Le + "</button>", V = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    V.setAttribute("role", "menu"), V.setAttribute("aria-label", Ea(t) + " options"), V.innerHTML = (Bi.includes(t) ? x("size", T === 1 ? "Card size" : "Tile size") : "") + (t === "energy" ? x("graph", (((H = p.opts.energy) == null ? void 0 : H.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + x("left", "Move left", g || s.col === 0) + x("right", "Move right", g || s.col + s.cols >= d) + x("up", "Move up", s.row <= 0) + x("down", "Move down") + x("hide", "Hide"), _.appendChild(V);
    const G = Math.min(s.x + s.w - V.offsetWidth, _.clientWidth - V.offsetWidth);
    Object.assign(V.style, { left: Math.max(0, G) + "px", top: s.y + 28 + "px" }), Bn = { key: t, menu: V, opener: a }, (I = V.querySelector("button:not([disabled])")) == null || I.focus();
  }
  function Pn(t) {
    if (!Bn) return;
    const { menu: a, opener: s } = Bn;
    Bn = null, a.remove(), t && (s == null || s.focus());
  }
  const ia = () => Object.fromEntries([...Da].map(([t, a]) => [t, { col: a.col, row: a.row }]));
  function Xr(t, a) {
    var T, g;
    const s = Kn(), d = ia(), p = d[t] || { col: 0, row: 0 };
    a === "size" && (s.spans = { ...s.spans, [t]: (s.spans[t] ?? 2) === 1 ? 2 : 1 }), a === "graph" && (s.opts = { ...s.opts, energy: { ...s.opts.energy || {}, graph: (((T = s.opts.energy) == null ? void 0 : T.graph) || "above") === "above" ? "below" : "above" } }), a === "left" && (d[t] = { ...p, col: p.col - 1 }), a === "right" && (d[t] = { ...p, col: p.col + 1 }), a === "up" && (d[t] = { ...p, row: p.row - 1 }), a === "down" && (d[t] = { ...p, row: p.row + 1 }), a === "hide" && (s.hidden = [.../* @__PURE__ */ new Set([...s.hidden, t])]), ["left", "right", "up", "down"].includes(a) && (Tt = { key: t, col: d[t].col, row: d[t].row }), go(s, d), Tt && (ln(), Tt = null, go(Kn(), ia())), Pn(), a === "graph" && (on.delete("dash:energy"), Jt()), ln(), a !== "hide" && ((g = _.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || g.focus());
  }
  function ur(t) {
    const a = Kn();
    Ii({ ...a, hidden: a.hidden.filter((s) => s !== t) }), ln();
  }
  const Hi = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, It = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  It.setAttribute("aria-label", "Edit the dashboard"), It.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd" type="button" data-fav-add aria-expanded="false">Add favourite</button><div class="tfTrayPick" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', f.appendChild(It);
  let $n = !1, kn = !1, Ut = null;
  const pr = {}, ii = (t, a) => {
    if (pr[t] === a) return;
    pr[t] = a;
    const s = It.querySelector('[data-tray="' + t + '"]');
    s.innerHTML = a, Cn(s);
  }, hr = (t, a) => '<span class="tfTrayName"><span class="activityRowName">' + se(Ee(t)) + '</span><span class="activityRowMeta">' + se(a) + "</span></span>", $s = (t, a, s) => '<li class="tfTrayFav' + (a ? " off" : "") + '" data-tray-fav="' + se(t) + '"><span class="tfTrayGrip" aria-hidden="true">' + _l + '</span><span class="tfIcon"' + Gt(t, xn(t)) + "></span>" + hr(t, a ? "Hidden" + (vt.get(t) ? " · " + vt.get(t) : "") : vt.get(t) || Et(t)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + se(t) + '" aria-pressed="' + !a + '" aria-label="' + (a ? "Show " : "Hide ") + se(Ee(t)) + ' on the dashboard">' + (a ? dc : Sh) + "</button>" + (s ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + se(t) + '" aria-label="Remove ' + se(Ee(t)) + ' from favourites">' + Th + "</button>" : "<span></span>") + "</li>";
  function Fi(t) {
    const a = new Set(Yn()), s = t.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(b).filter((p) => Hi.test(p) && !a.has(p) && b[p].state !== "unavailable").filter((p) => {
      const T = (Ee(p) + " " + (vt.get(p) || "") + " " + p).toLowerCase();
      return s.every((g) => T.includes(g));
    }).sort((p, T) => (vt.get(p) || "~").localeCompare(vt.get(T) || "~") || Ee(p).localeCompare(Ee(T))).slice(0, 40).map((p) => '<li><button class="tfTrayPickItem" type="button" data-fav-pick="' + se(p) + '"><span class="tfIcon"' + Gt(p, xn(p)) + "></span>" + hr(p, vt.get(p) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  function In() {
    const t = Nn && f.classList.contains("tfBoard");
    if (It.classList.toggle("open", t), It.classList.toggle("tucked", t && $n), It.toggleAttribute("inert", !t), !t) return;
    const a = It.querySelector("[data-tray-tuck]");
    a.innerHTML = $n ? ec : cc, a.setAttribute("aria-expanded", String(!$n)), a.setAttribute("aria-label", $n ? "Show the edit tray" : "Tuck the edit tray away");
    const s = Kn().hidden.filter((g) => ai().some((x) => x.key === g));
    ii("cards", '<div class="sectionLabel">Hidden cards</div>' + (s.length ? '<div class="tfTrayCards">' + s.map((g) => '<button class="tfTrayCard" type="button" data-tray-card="' + se(g) + '" aria-label="' + se(Ea(g)) + ': drag it onto the board, or press to put it back"><span class="tfTrayGrip" aria-hidden="true">' + _l + "</span>" + se(Ea(g)) + "</button>").join("") + "</div>" : '<p class="tfTrayNote">Cards you hide wait here.</p>'));
    const d = new Set(q.favHidden || []), p = Yn(), T = [...p, ...[...d].filter((g) => !p.includes(g) && b[g])];
    ii("favs", T.map((g) => $s(g, d.has(g), p.includes(g))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), It.querySelector(".tfTrayPick").hidden = !kn, It.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(kn)), kn && ii("pick", Fi(It.querySelector("[data-fav-search]").value)), ii("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (Li() ? " on" : "") + '" type="button" role="switch" aria-checked="' + Li() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const Tn = (t) => {
    q = { ...q, ...t }, En(), Jt(), In();
  };
  function Oi(t, a) {
    const s = new Set(q.favHidden || []);
    a ? s.delete(t) : s.add(t), Tn({ favHidden: [...s] });
  }
  const fr = (t) => Tn({ favourites: Yn().filter((a) => a !== t), favHidden: (q.favHidden || []).filter((a) => a !== t) }), Jr = (t) => Tn({ favourites: [...Yn().filter((a) => a !== t), t], favHidden: (q.favHidden || []).filter((a) => a !== t) });
  It.addEventListener("click", (t) => {
    const a = t.target.closest("button");
    a && (a.hasAttribute("data-tray-done") ? $a(!1) : a.hasAttribute("data-tray-tuck") ? ($n = !$n, In()) : a.dataset.trayCard ? t.detail === 0 && (ur(a.dataset.trayCard), In()) : a.dataset.favEye ? Oi(a.dataset.favEye, a.getAttribute("aria-pressed") !== "true") : a.dataset.favRemove ? fr(a.dataset.favRemove) : a.hasAttribute("data-fav-add") ? (kn = !kn, In(), kn && It.querySelector("[data-fav-search]").focus({ preventScroll: !0 })) : a.dataset.favPick ? Jr(a.dataset.favPick) : a.hasAttribute("data-fav-suggest") && Tn({ suggest: !Li() }));
  }), It.addEventListener("input", (t) => {
    t.target.matches("[data-fav-search]") && In();
  }), It.addEventListener("keydown", (t) => {
    t.key !== "Escape" || !kn || (t.stopPropagation(), kn = !1, In(), It.querySelector("[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function bo(t, a, s, d) {
    t.preventDefault();
    const p = t.clientX, T = t.clientY;
    let g = null, x = 0;
    const V = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), G = (I) => {
      if (!g) {
        if (Math.hypot(I.clientX - p, I.clientY - T) < 4) return;
        g = a.cloneNode(!0), g.classList.add("tfTrayGhost"), g.style.width = a.offsetWidth + "px", f.appendChild(g);
      }
      g.style.transform = "translate(" + (I.clientX - 24) + "px," + (I.clientY - 24) + "px)";
      const J = !$n && I.clientX >= It.getBoundingClientRect().left;
      if (s === "card") {
        const ce = _.getBoundingClientRect(), { w: fe } = Za(_.clientWidth);
        Tt = !J && I.clientX >= ce.left && I.clientX <= ce.right && I.clientY >= ce.top + fn ? { key: d, col: Math.max(0, Math.floor((I.clientX - ce.left) / (fe + Wt))), row: Math.max(0, Math.floor((I.clientY - ce.top - fn) / Aa)), fromTray: !0 } : null, x || (x = requestAnimationFrame(() => {
          x = 0, ln();
        }));
        return;
      }
      const Le = _.querySelector(".tfDash-favs"), Ne = Le == null ? void 0 : Le.getBoundingClientRect();
      if (Ut = null, Ne && !J && I.clientX >= Ne.left && I.clientX <= Ne.right && I.clientY >= Ne.top && I.clientY <= Ne.bottom) {
        let ce = 1 / 0;
        Le.querySelectorAll('[data-k^="fav:"]').forEach((fe, ne) => {
          const Ge = fe.getBoundingClientRect(), Rt = Math.hypot(I.clientX - (Ge.left + Ge.width / 2), I.clientY - (Ge.top + Ge.height / 2));
          Rt < ce && (ce = Rt, Ut = { i: ne, r: Ge, after: I.clientX > Ge.left + Ge.width / 2 });
        }), Ut || (Ut = { i: 0, r: null, after: !1 });
      }
      Ut != null && Ut.r ? (V.isConnected || f.appendChild(V), Object.assign(V.style, { left: (Ut.after ? Ut.r.right : Ut.r.left) - 2 + "px", top: Ut.r.top + 8 + "px", height: Ut.r.height - 16 + "px" })) : V.remove();
    }, H = () => {
      if (window.removeEventListener("pointermove", G), window.removeEventListener("pointerup", H), window.removeEventListener("pointercancel", H), cancelAnimationFrame(x), g == null || g.remove(), V.remove(), s === "card") {
        if (!g) ur(d);
        else if (Tt != null && Tt.fromTray) {
          ln();
          const ce = Kn(), fe = ia();
          Tt = null, go({ ...ce, hidden: ce.hidden.filter((ne) => ne !== d) }, fe);
        }
        Tt = null, ln(), Jt(), In();
        return;
      }
      if (!Ut) return;
      const I = new Set(q.favHidden || []);
      I.delete(d);
      const J = Yn().filter((ce) => ce !== d), Le = J.filter((ce) => !I.has(ce)), Ne = Le[Math.min(Ut.i + (Ut.after ? 1 : 0), Le.length)];
      J.splice(Ne ? J.indexOf(Ne) : J.length, 0, d), Ut = null, Tn({ favourites: J, favHidden: [...I] });
    };
    window.addEventListener("pointermove", G), window.addEventListener("pointerup", H), window.addEventListener("pointercancel", H);
  }
  function mr(t, a) {
    t.preventDefault();
    const s = a.parentElement;
    a.classList.add("moving");
    const d = (T) => {
      const g = [...s.children].find((x) => {
        const V = x.getBoundingClientRect();
        return x !== a && T.clientY >= V.top && T.clientY <= V.bottom;
      });
      if (g) {
        const x = g.getBoundingClientRect();
        s.insertBefore(a, T.clientY < x.top + x.height / 2 ? g : g.nextSibling);
      }
    }, p = () => {
      window.removeEventListener("pointermove", d), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p), a.classList.remove("moving");
      const T = new Set(Yn());
      pr.favs = null, Tn({ favourites: [...s.children].map((g) => g.dataset.trayFav).filter((g) => T.has(g)) });
    };
    window.addEventListener("pointermove", d), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  }
  It.addEventListener("pointerdown", (t) => {
    if (t.button > 0) return;
    const a = t.target.closest("[data-tray-card]"), s = t.target.closest(".tfTrayFav");
    a ? bo(t, a, "card", a.dataset.trayCard) : s && t.target.closest(".tfTrayGrip") ? mr(t, s) : s != null && s.classList.contains("off") && !t.target.closest("button") && bo(t, s, "fav", s.dataset.trayFav);
  });
  function Xs(t) {
    if (!Nn || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const a = t.target.closest(".tfBoardItem"), s = a && ai().find((I) => I.el === a);
    if (!s || Ya.includes(s.key)) return;
    const d = Da.get(s.key), { w: p } = Za(_.clientWidth);
    if (!d) return;
    t.preventDefault(), Pn();
    const T = t.clientX, g = t.clientY;
    let x = !1, V = 0;
    const G = (I) => {
      const J = I.clientX - T, Le = I.clientY - g;
      if (!x) {
        if (Math.hypot(J, Le) < 4) return;
        x = !0, Tt = { key: s.key, col: d.col, row: d.row }, a.classList.add("tfDragging");
      }
      a.style.transform = "translate(" + J + "px," + Le + "px)", Tt.col = Math.round((d.x + J) / (p + Wt)), Tt.row = Math.round((d.y + Le - fn) / Aa), V || (V = requestAnimationFrame(() => {
        V = 0, ln();
      }));
    }, H = () => {
      window.removeEventListener("pointermove", G), window.removeEventListener("pointerup", H), window.removeEventListener("pointercancel", H), x && (cancelAnimationFrame(V), ln(), a.classList.remove("tfDragging"), a.style.transform = "", Tt = null, go(Kn(), ia()), ln(), Jt());
    };
    window.addEventListener("pointermove", G), window.addEventListener("pointerup", H), window.addEventListener("pointercancel", H);
  }
  function Qr(t = !1) {
    const a = _ == null ? void 0 : _.querySelector(".tfDashGraph svg[data-graph]");
    if (!(a != null && a.clientWidth)) return;
    const s = a.dataset.graph + "@" + a.clientWidth + "x" + a.clientHeight;
    a.dataset.drawn !== s && (a.dataset.drawn = s, Cr(a.dataset.graph, a).then(() => {
      t && Di(a);
    }));
  }
  function es() {
    var x, V, G;
    at = xi.model(i()), Dt(), b = at.states, b[(x = q.sources) == null ? void 0 : x.grid] && (at.grid = q.sources.grid), b[(V = q.sources) == null ? void 0 : V.alarm] && (at.security.alarms = [q.sources.alarm]), M.forEach((H, I) => {
      const J = b[I], Le = (J == null ? void 0 : J.attributes) || {};
      if (!J || Date.now() - H.at > 2 * 60 * 1e3) {
        M.delete(I);
        return;
      }
      H.pos != null && J.state !== "opening" && J.state !== "closing" && Math.abs(_t(I) - H.pos) < 1 && delete H.pos, H.tilt != null && Math.abs((Le.current_tilt_position ?? -1) - H.tilt) < 1 && delete H.tilt, H.pos == null && H.tilt == null && M.delete(I);
    });
    const t = [];
    let a = 0;
    const s = Zo();
    uo = s.filter((H) => H.room).map((H) => H.room), uo.some((H) => H.id === ge) || (ge = ((G = uo[0]) == null ? void 0 : G.id) || null);
    const d = Se === "weather" ? { key: "weather", name: "Weather" } : Se && s.find((H) => H.key === Se);
    if (d || (Se = null), f.classList.toggle("tfAreaOpen", !!d), f.classList.toggle("tfWeatherOpen", (d == null ? void 0 : d.key) === "weather"), f.classList.toggle("tfDash", !d), vt = /* @__PURE__ */ new Map(), at.rooms.forEach((H) => [...H.actions, ...H.plugs, ...H.readings, ...H.openings, ...H.solar, ...H.plants.flatMap((I) => [I.id, ...I.readings])].forEach((I) => vt.set(I, H.name))), !d) return Ys(t, po());
    if (t.push({ key: "areahead", html: qi(d, ++a) }), d.key === "weather")
      return t.weather = ++a, t;
    const p = d.ids, T = d.room ? d.room.id : d.key, g = d.room;
    return g != null && g.solar.length && t.push({ key: "energy:" + g.id, html: be(g, ++a) }), g && (g.readings.length || g.plugs.length || g.power != null) && t.push({ key: "readings:" + g.id, html: he(g, ++a) }), g == null || g.plants.forEach((H) => t.push({ key: "plant:" + H.id, html: me(H, ++a) })), p.length && t.push({ key: "block:" + T, order: ++a, tiles: p.map((H) => ({ key: H, html: Rn(H) })) }), d.key === "security" && t.push({ key: "openings", html: xe(++a) }), t;
  }
  const qi = (t, a) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + a + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + ec + '</button><div class="settingsTitle">' + se(t.name) + "</div></div>";
  let Ln = 0, An = null;
  const ts = (t) => t === "weather" ? rn.wx : t.startsWith("room:") ? _.querySelector(".tfAreas") : _.querySelector(".tfDashBarRow");
  function gr(t) {
    var a, s;
    Se || (Ln = ri().scrollTop, An = ((a = ts(t)) == null ? void 0 : a.getBoundingClientRect().top) ?? null), Se = t, t.startsWith("room:") && (ge = t.slice(5)), Na(), ri().scrollTop = 0, (s = _.querySelector("[data-area-back]")) == null || s.focus({ preventScroll: !0 });
  }
  let wo = null;
  function vr(t, a) {
    if (wo == null || wo(), a == null) return;
    const s = ri(), d = performance.now() + 1500, p = ["wheel", "touchstart", "pointerdown", "keydown"];
    let T = 0;
    const g = () => {
      cancelAnimationFrame(T), p.forEach((V) => window.removeEventListener(V, g, !0)), wo = null;
    }, x = () => {
      const V = t();
      if (V != null && V.isConnected) {
        const G = V.getBoundingClientRect().top - a;
        Math.abs(G) > 0.5 && (s.scrollTop += G);
      }
      performance.now() < d ? T = requestAnimationFrame(x) : g();
    };
    p.forEach((V) => window.addEventListener(V, g, { capture: !0, passive: !0 })), wo = g, x();
  }
  function Io() {
    var s;
    const t = Se;
    Se = null, Na(), ri().scrollTop = Ln, vr(() => ts(t), An);
    const a = t.startsWith("room:") ? _.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? rn.wx.querySelector(".wbOpenPage") : _.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (s = (a == null ? void 0 : a.querySelector("[data-go]")) || a) == null || s.focus({ preventScroll: !0 });
  }
  const ns = (t) => t.wrap ? t.wrap(t.tiles.map((a) => a.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + se(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((a) => a.html).join("") + "</div></div>", br = (t) => t.map((a) => a.key + (a.tiles ? "(" + a.tiles.map((s) => s.key).join(",") + ")" : "")).join(";");
  function ri() {
    for (let t = f.parentElement || f.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const a = getComputedStyle(t).overflowY;
      if ((a === "auto" || a === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function as(t) {
    const a = ri(), s = (x) => {
      const V = x.getBoundingClientRect();
      return V.height && V.bottom > 0 && V.top < window.innerHeight;
    }, d = [..._.children, ..._.querySelectorAll(".tfDashTiles > *")].find((x) => !x.matches(".tfDashTiles") && s(x)), p = d == null ? void 0 : d.dataset.k, T = d == null ? void 0 : d.getBoundingClientRect().top;
    t();
    const g = d != null && d.isConnected ? d : p && _.querySelector('[data-k="' + CSS.escape(p) + '"]');
    g != null && g.isConnected && T != null && (a.scrollTop += g.getBoundingClientRect().top - T);
  }
  function Na() {
    if (!w || !_) return;
    const t = es();
    _.querySelectorAll("[data-tf]").forEach((s) => s.remove()), on.clear();
    const a = document.createElement("div");
    a.innerHTML = t.map((s) => s.tiles ? ns(s) : s.html).join(""), t.forEach((s) => s.tiles ? s.tiles.forEach((d) => on.set(d.key, d.html)) : on.set(s.key, s.html)), bn = br(t), _.append(...a.children), yi(t.weather), ki(), fa.disconnect(), ln(), Cn(_), Ja(_), sn(_), U(), z && Cr(z.id), is(), ko(), li(), requestAnimationFrame(W);
  }
  const Xa = (t) => {
    var s;
    const a = n.activeElement && t.contains(n.activeElement) ? n.activeElement : null;
    return a && { label: a.getAttribute("aria-label"), act: (s = a.dataset) == null ? void 0 : s.act };
  }, Xn = (t, a) => {
    var s;
    a && ((s = a.label && t.querySelector('[aria-label="' + CSS.escape(a.label) + '"]') || a.act && t.querySelector('[data-act="' + CSS.escape(a.act) + '"]')) == null || s.focus({ preventScroll: !0 }));
  };
  function wr(t, a) {
    const s = document.createElement("div");
    s.innerHTML = a;
    const d = s.firstElementChild, p = Xa(t);
    t.replaceWith(d), Cn(d), Ja(d), sn(d), Xn(d, p);
  }
  function Jt() {
    !w || !_ || Tt || as(Js);
  }
  function Js() {
    if (!_.querySelector("[data-tf]")) {
      Na();
      return;
    }
    const t = es();
    if (br(t) !== bn) {
      Na();
      return;
    }
    const a = (s) => [...qe.keys()].some((d) => {
      const p = d.slice(d.indexOf("|") + 1);
      return s === p || s.endsWith(":" + p);
    });
    t.forEach((s) => (s.tiles || [s]).forEach((d) => {
      if (on.get(d.key) === d.html || a(d.key)) return;
      const p = _.querySelector('[data-k="' + CSS.escape(d.key) + '"]');
      if (p) {
        if (on.set(d.key, d.html), z && z.key === d.key && p.querySelector(".tfOpen")) {
          p.querySelector(".tfOpen .activityRowMeta").textContent = D(z.id);
          return;
        }
        wr(p, d.html), z && z.key === d.key && Cr(z.id), d.key.startsWith("energy:") && is();
      }
    })), ko(), li(), qr(), U(), Ve == null || Ve.update(), Je == null || Je.forEach((s) => s.update()), f.classList.contains("tfDash") && Ra(), requestAnimationFrame(W);
  }
  const Wi = {
    light: (t) => [["Brightness", t.brightness != null ? Math.round(t.brightness / 2.55) + "%" : null], ["Colour temperature", t.color_temp_kelvin ? Number(t.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", t.color_mode && mt(t.color_mode)]],
    climate: (t) => [["Current temperature", He(t.current_temperature) + " °C"], ["Target", He(t.temperature) + " °C"], ["Action", mt(t.hvac_action)]],
    cover: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null], ["Tilt", t.current_tilt_position != null ? t.current_tilt_position + "% open" : null]],
    humidifier: (t) => [["Current humidity", t.current_humidity + "%"], ["Target", t.humidity + "%"], ["Mode", mt(t.mode)]],
    media_player: (t) => [["Title", t.media_title], ["Artist", t.media_artist], ["Volume", t.volume_level != null ? Math.round(t.volume_level * 100) + "%" : null], ["Source", t.source]],
    vacuum: (t) => [["Battery", t.battery_level + "%"], ["Fan speed", mt(t.fan_speed)], ["Rooms", (t.rooms || []).join(", ") || null]],
    lock: (t) => [["Changed by", t.changed_by]],
    alarm_control_panel: (t) => [["Changed by", t.changed_by]],
    valve: () => [],
    plant: (t) => [["Moisture", t.moisture + "%"], ["Light", Number(t.brightness).toLocaleString() + " lx"], ["Temperature", He(t.temperature) + " °C"], ["Fertility", t.conductivity + " µS/cm"], ["Problems", t.problem === "none" ? "None" : mt(t.problem)]],
    weather: (t) => [["Temperature", t.temperature != null ? t.temperature + " " + (t.temperature_unit || "°C") : null], ["Humidity", t.humidity != null ? t.humidity + "%" : null], ["Wind", t.wind_speed != null ? t.wind_speed + " " + (t.wind_speed_unit || "km/h") : null], ["Pressure", t.pressure != null ? t.pressure + " " + (t.pressure_unit || "hPa") : null]]
  }, Qs = (t) => {
    var s;
    const a = (((s = Wi[t.split(".")[0]]) == null ? void 0 : s.call(Wi, bt(t))) || []).filter(([, d]) => d != null && d !== "");
    return a.length ? '<div class="tfMoreRows">' + a.map(([d, p]) => '<div class="tfMoreRow"><span>' + se(d) + "</span><span>" + se(p) + "</span></div>").join("") + "</div>" : "";
  }, xr = (t) => bi(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function el(t, a = {}, s = !1) {
    return '<div class="tfMoreList">' + t.map((d) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + se(d.name) + '</div><div class="tfMoreTiles' + (s ? " single" : "") + '">' + d.ids.map((p) => Ta(p, a)).join("") + "</div></div>").join("") + "</div>";
  }
  const lt = document.createElement("div");
  lt.className = "tfMoreBackdrop", lt.hidden = !0, f.appendChild(lt);
  const ma = (t, a) => {
    for (let s = t; s && s !== lt; s = s.parentElement) {
      const d = getComputedStyle(s).overflowY;
      if ((d === "auto" || d === "scroll") && s.scrollHeight > s.clientHeight + 1 && (a < 0 ? s.scrollTop > 0 : s.scrollTop + s.clientHeight < s.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let si = null;
  lt.addEventListener("touchstart", (t) => {
    si = { x: t.touches[0].clientX, y: t.touches[0].clientY };
  }, { passive: !0 }), lt.addEventListener("touchmove", (t) => {
    var p, T;
    if (!si || t.touches.length > 1 || (T = (p = t.target).closest) != null && T.call(p, "input,textarea,select")) return;
    const a = t.touches[0], s = si.x - a.clientX, d = si.y - a.clientY;
    si = { x: a.clientX, y: a.clientY }, Math.abs(d) >= Math.abs(s) && !ma(t.target, d) && t.preventDefault();
  }, { passive: !1 }), lt.addEventListener("wheel", (t) => {
    ma(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  function yr() {
    const t = lt.querySelector(".tfMorePair"), a = lt.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - a.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", yr, { passive: !0 }), w && Mt();
  let Ba = [];
  const xo = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function tl(t) {
    const a = (x, V = "") => '<div class="tfMoreHead">' + (v != null && v.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + Ll + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + se(x) + "</div>" + V + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + ph + "</button></div>", s = (x, V) => '<div class="tfMoreNow"><div class="tfMoreState">' + se(x) + "</div>" + (V ? '<div class="tfMoreSub">' + se(V) + "</div>" : "") + "</div>", d = el;
    if (t === "favourites") {
      const x = Yn(), V = new Set(x), G = [{ name: "Starred", ids: x }, { name: "Home", ids: at.homeVacuums }, { name: "Security", ids: [...at.security.alarms, ...at.security.locks] }, ...at.rooms.map((H) => ({ name: H.name, ids: [...H.actions, ...H.plugs] }))].map((H, I) => I ? { ...H, ids: H.ids.filter((J) => !V.has(J)) } : H).filter((H) => H.ids.length);
      return [a("Favourites"), s(x.length ? x.length + " starred" : "None starred"), d(G, { star: !0 }, !0)];
    }
    if (t.startsWith("summary:")) {
      const x = po().find((I) => I.key === t.slice(8));
      if (!x) return null;
      const V = x.key === "light" ? (x.groups || []).flatMap((I) => I.ids) : [], G = V.some((I) => {
        var J;
        return ((J = b[I]) == null ? void 0 : J.state) === "on";
      }), H = V.length ? '<button class="primary" type="button" data-acts="' + lo(V.map((I) => ["light", G ? "turn_off" : "turn_on", I])) + '">' + (G ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [a(x.name), '<div class="tfMoreNowRow">' + s(x.value) + H + "</div>", ...(x.groups || []).map((I) => {
        const J = I.ids.filter((Ne) => _s.includes(Ne.split(".")[0])), Le = I.ids.filter((Ne) => !J.includes(Ne));
        return '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + se(I.name) + "</div>" + (J.length ? '<div class="tfMoreActions">' + J.map((Ne) => Rn(Ne, !0)).join("") + "</div>" : "") + (Le.length ? '<div class="tfMoreTiles">' + Le.map((Ne) => Ta(Ne, {})).join("") + "</div>" : "") + "</div>";
      })];
    }
    if (t.startsWith("group:")) {
      const [, x, V] = t.split(":"), G = at.rooms.find((ce) => ce.id === x), H = G && er(G).find((ce) => ce.key === V);
      if (!H) return null;
      const I = Wr(G, V), J = I.filter((ce) => _s.includes(ce.split(".")[0])), Le = I.filter((ce) => !J.includes(ce)), Ne = H.acts ? '<button class="primary" type="button" data-acts="' + lo(H.acts) + '">' + (H.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [a(G.name + " " + H.label.toLowerCase()), '<div class="tfMoreNowRow">' + s(H.value) + Ne + "</div>", '<div class="tfMoreGroup">' + (J.length ? '<div class="tfMoreActions">' + J.map((ce) => Rn(ce, !0)).join("") + "</div>" : "") + (Le.length ? '<div class="tfMoreTiles">' + Le.map((ce) => Ta(ce, {})).join("") + "</div>" : "") + "</div>"];
    }
    const p = t.split(".")[0], T = b[t], g = _s.includes(p) ? Uo(t) : { sections: [] };
    return [
      a(Ee(t)),
      s(Et(t), T.last_changed && so(Date.parse(T.last_changed))),
      p === "cover" && '<div data-cover-art="' + se(t) + '"></div>',
      ...g.sections.filter(Boolean),
      yo(t) && '<button class="tfDetailsBtn" type="button" data-details aria-expanded="' + !!(v != null && v.details) + '" aria-controls="tfMoreSide"><span>Details</span>' + cc + "</button>"
    ].filter(Boolean);
  }
  const yo = (t) => xo(t) ? "" : Qs(t) + xr(t);
  let kr = "";
  function zi(t) {
    var a;
    v && (v.details = t, ko(), (a = lt.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || a.focus({ preventScroll: !0 }));
  }
  const Pa = (t) => {
    const a = b[t], s = _t(t), d = Vn(t);
    return { kind: Tl(a), name: Ee(t), text: Et(t), pos: s, target: Math.abs(d - s) > 0.5 ? d : null, moving: a.state === "opening" || a.state === "closing", tilt: Ro(t) ?? 100, canSet: st(t, ic) };
  };
  function Ja(t) {
    t.querySelectorAll("[data-cover-art]").forEach((a) => {
      const s = a.dataset.coverArt, d = a.dataset.artKey || "more:" + s;
      let p = E.get(d);
      p || (p = uh({ onMove: (T) => Ia(s, T), onSet: (T) => {
        Ia(s, T), ga("pos", s);
      } }), p.coverId = s, E.set(d, p)), a.replaceWith(p.el), p.update(Pa(s));
    });
  }
  const At = (t) => [...E.values()].filter((a) => a.coverId === t), Qa = () => E.forEach((t) => {
    b[t.coverId] && t.update(Pa(t.coverId));
  }), li = () => {
    E.forEach((t, a) => {
      t.el.isConnected || (t.destroy(), E.delete(a));
    }), Qa();
  };
  function ko() {
    var T, g;
    if (!v || !(xo(v.id) || b[v.id])) {
      lt.hidden = !0;
      return;
    }
    if ([...qe.keys()].some((x) => x.endsWith("|" + v.id))) {
      Qa();
      return;
    }
    const t = tl(v.id), a = lt.querySelector(".tfMore");
    if (!t) {
      di();
      return;
    }
    const s = Xa(lt), d = yo(v.id), p = v.id.startsWith("summary:") || v.id.startsWith("group:");
    if (lt.hidden || !a || t.length !== Ba.length || a.classList.contains("wide") !== p) {
      const x = !lt.hidden && a ? a.scrollTop : 0;
      lt.innerHTML = '<div class="tfMorePair" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (p ? " wide" : "") + '">' + t.join("") + "</section>" + (d ? '<aside class="tfMoreSide" id="tfMoreSide" aria-label="Details"><div class="tfMoreSideInner"><div class="tfMoreHead"><button class="tfBack" type="button" data-details-close aria-label="Back">' + Ll + '</button><div class="activityTitle">Details</div></div><div class="tfMoreSideBody">' + d + "</div></div></aside>" : "") + "</div>", kr = d, lt.hidden = !1, yr(), Ja(lt), sn(lt), Cn(lt), x && (lt.querySelector(".tfMore").scrollTop = x), Xn(lt, s), lt.contains(n.activeElement) || (T = lt.querySelector("[data-more-close]")) == null || T.focus({ preventScroll: !0 });
    } else {
      if (t.forEach((x, V) => {
        var I, J;
        if (x === Ba[V] || x.includes("data-cover-art") || a.children[V].contains((J = (I = n.activeElement) == null ? void 0 : I.matches) != null && J.call(I, "input,select") ? n.activeElement : null) || [...qe.keys()].some((Le) => a.children[V].querySelector('[data-drag="' + CSS.escape(Le) + '"]'))) return;
        const G = document.createElement("div");
        G.innerHTML = x;
        const H = G.firstElementChild;
        a.children[V].replaceWith(H), Cn(H), sn(H);
      }), d !== kr) {
        const x = lt.querySelector(".tfMoreSideBody");
        x && (x.innerHTML = d), kr = d;
      }
      lt.contains(n.activeElement) || Xn(lt, s);
    }
    (g = lt.querySelector(".tfMorePair")) == null || g.classList.toggle("details", !!(v.details && d)), Ba = t, Qa();
  }
  setInterval(() => {
    v && ko();
  }, 15 * 1e3);
  function dn(t, a) {
    const s = !!(v && a && lt.contains(a));
    v = { id: t, opener: s ? v.opener : a, back: s ? v : null }, Vi();
  }
  function Vi() {
    Ba = [], lt.hidden = !0, E.forEach((t, a) => {
      a !== v.id && lt.contains(t.el) && (t.destroy(), E.delete(a));
    }), ko();
  }
  function di() {
    var s, d, p, T, g, x;
    const t = v == null ? void 0 : v.opener;
    v = null, E.forEach((V, G) => {
      lt.contains(V.el) && (V.destroy(), E.delete(G));
    }), pn.forEach((V, G) => {
      G.startsWith("more:") && pn.delete(G);
    }), lt.hidden = !0, lt.innerHTML = "";
    const a = { preventScroll: !0 };
    t != null && t.isConnected ? t.focus(a) : (s = t == null ? void 0 : t.dataset) != null && s.more ? (d = _.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || d.focus(a) : (p = t == null ? void 0 : t.dataset) != null && p.summary ? (T = _.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || T.focus(a) : (g = t == null ? void 0 : t.hasAttribute) != null && g.call(t, "data-favs-edit") && ((x = _.querySelector("[data-favs-edit]")) == null || x.focus(a));
  }
  function Mr(t, a, s, d = {}) {
    const p = a.map((fe) => fe[1]), T = d.zero ? 0 : Math.min(...p), g = Math.max(...p), x = Math.max(120, t.clientWidth || 260), V = Math.max(60, t.clientHeight || 130), G = 8, H = V - 20, I = Date.now() - 24 * 3600 * 1e3, J = 24 * 3600 * 1e3, Le = (fe) => Math.max(0, Math.min(x, (fe - I) / J * x)), Ne = (fe) => g === T ? (G + H) / 2 : H - (fe - T) / (g - T) * (H - G);
    let ce = "M" + Le(a[0][0]).toFixed(1) + " " + Ne(a[0][1]).toFixed(1);
    for (let fe = 1; fe < a.length; fe++) ce += d.smooth ? "L" + Le(a[fe][0]).toFixed(1) + " " + Ne(a[fe][1]).toFixed(1) : "H" + Le(a[fe][0]).toFixed(1) + "V" + Ne(a[fe][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + x + " " + V), t.setAttribute("aria-label", s), t.innerHTML = '<path d="' + ce + "V" + H + "H" + Le(a[0][0]).toFixed(1) + 'Z" fill="' + (d.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + ce + '" fill="none" stroke="' + (d.colour || "var(--primary)") + '" stroke-width="2" stroke-linejoin="round"/><text x="0" y="' + (V - 4) + '">24 h ago</text><text x="' + x + '" y="' + (V - 4) + '" text-anchor="end">Now</text>';
  }
  function os(t) {
    var d;
    const a = Number((d = b[t]) == null ? void 0 : d.state), s = Date.now();
    if (bt(t).state_class === "total_increasing") {
      const p = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), T = Math.max(1, s - p);
      return [...Array(49)].map((g, x) => p + T * x / 48).map((g) => [g, Math.round(a * Math.pow((g - p) / T, 1.3) * 100) / 100]);
    }
    return [...Array(48)].map((p, T) => [s - (48 - T) * 30 * 60 * 1e3, Math.round(a * (0.96 + 0.04 * Math.sin(T / 6)) * 10) / 10]);
  }
  async function Cr(t, a) {
    var Le, Ne;
    let s = ke.get(t);
    if (t.endsWith("_solar_power")) s = { at: Date.now(), points: Dd() };
    else if (bi(t)) s = { at: Date.now(), points: os(t) };
    else if (!s || Date.now() - s.at > 5 * 60 * 1e3) {
      try {
        const ce = new Date(Date.now() - 864e5).toISOString(), fe = await N({ type: "history/history_during_period", start_time: ce, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), ne = ((fe == null ? void 0 : fe[t]) || []).map((Ge) => [Ge.lu != null ? Ge.lu * 1e3 : Date.parse(Ge.last_updated || Ge.last_changed), Number(Ge.s ?? Ge.state)]).filter(([Ge, Rt]) => Number.isFinite(Ge) && Number.isFinite(Rt));
        s = { at: Date.now(), points: ne };
      } catch {
        s = { at: Date.now(), points: [] };
      }
      ke.set(t, s);
    }
    const d = a || _.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!d) return;
    const p = b[t], T = ((Le = p == null ? void 0 : p.attributes) == null ? void 0 : Le.unit_of_measurement) || "", g = s.points.slice(), x = Number(p == null ? void 0 : p.state);
    if (Number.isFinite(x) && !t.endsWith("_solar_power") && g.push([Date.now(), x]), g.length < 2) {
      d.setAttribute("aria-label", Ee(t) + ": no history for the last 24 hours"), d.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const V = g.map((ce) => ce[1]), G = Math.min(...V), H = Math.max(...V), I = (ce) => ce.toLocaleString(void 0, { maximumFractionDigits: Math.abs(ce) >= 100 ? 0 : 1 }), J = ((Ne = p == null ? void 0 : p.attributes) == null ? void 0 : Ne.state_class) === "total_increasing";
    Mr(d, g, Ee(t) + ", last 24 hours: " + (J ? "+" + I(V[V.length - 1] - V[0]) : G === H ? I(G) : I(G) + " to " + I(H)) + (T ? " " + T : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power") });
  }
  function is() {
    const t = _ == null ? void 0 : _.querySelector("[data-solar]");
    if (!t) return;
    const a = Dd();
    Mr(t, a, "Solar, last 24 hours: up to " + He(Math.max(...a.map((s) => s[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function nl(t, a) {
    const s = a.entity_id, d = M.get(s) || {}, p = { open_cover: 100, close_cover: 0, set_cover_position: a.position, toggle: _t(s) > 0 ? 0 : 100 }[t], T = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: a.tilt_position }[t];
    p != null && (d.pos = p), T != null && (d.tilt = T), t === "stop_cover" && (delete d.pos, delete d.tilt), t === "stop_cover_tilt" && delete d.tilt, d.at = Date.now(), M.set(s, d);
  }
  function rs(t, a, s) {
    var p;
    const d = s == null ? void 0 : s.entity_id;
    return t !== "light" || typeof d != "string" || !Oe[d] || !un(d) || s.brightness_pct != null || s.brightness != null ? [a, s] : a !== "turn_on" && !(a === "toggle" && ((p = b[d]) == null ? void 0 : p.state) !== "on") ? [a, s] : ["turn_on", { ...s, brightness_pct: Oe[d] }];
  }
  function ci(t, a, s, d) {
    let p = { entity_id: s, ...d || {} };
    return [a, p] = rs(t, a, p), t === "cover" && nl(a, p), Xe[s] = (Xe[s] || 0) + 1, zo.set(sc, JSON.stringify(Xe)), xi.call(t, a, p) ? Promise.resolve() : Promise.resolve(le(t, a, p));
  }
  function ui(t) {
    const [a, s, d, p] = t.split("|");
    ci(a, s, d, p ? JSON.parse(p) : null).catch(() => {
    });
  }
  function Ia(t, a) {
    qe.set("pos|" + t, a), on.delete(t), Ba = Ba.map(() => ""), [_, lt].forEach((d) => d.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((p) => Lt(p, a)));
    const s = _.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (s && (s.textContent = Math.round(a) + "%"), (v == null ? void 0 : v.id) === t) {
      const d = lt.querySelector(".tfMoreState"), p = lt.querySelector(".tfMoreSub");
      d && (d.textContent = Math.round(a) + "%", d.classList.add("live")), p && (p.textContent = "Currently " + _t(t) + "%");
    }
    At(t).forEach((d) => d.update(Pa(t)));
  }
  const al = (t, a) => {
    const s = t.shiftKey ? 10 : 1, d = { ArrowUp: a + s, ArrowRight: a + s, ArrowDown: a - s, ArrowLeft: a - s, PageUp: a + 25, PageDown: a - 25, Home: 0, End: 100 }[t.key];
    return d == null ? null : Math.max(0, Math.min(100, Math.round(d)));
  };
  function ss(t, a) {
    var ce;
    const s = t.dataset.blocks;
    (ce = t.setPointerCapture) == null || ce.call(t, a.pointerId);
    const d = (fe) => {
      const ne = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (fe.clientX - ne.left) / ne.width * 100));
    }, p = d(a), T = a.clientX;
    let g = !1, x = Vn(s), V = p, G = 0;
    const H = () => {
      x = Math.abs(V - x) < 0.2 ? V : x + (V - x) * 0.14, Ia(s, x), G = requestAnimationFrame(H);
    }, I = () => {
      g || (g = !0, t.classList.add("fine"), G = requestAnimationFrame(H));
    }, J = setTimeout(I, 350), Le = (fe) => {
      V = d(fe), Math.abs(fe.clientX - T) > 6 && (clearTimeout(J), I());
    }, Ne = () => {
      clearTimeout(J), cancelAnimationFrame(G), t.removeEventListener("pointermove", Le), t.removeEventListener("pointerup", Ne), t.removeEventListener("pointercancel", Ne), t.classList.remove("fine"), Ia(s, g ? Math.round(x) : (Math.min(3, Math.floor(p / 25)) + 1) * 25), ga("pos", s);
    };
    t.addEventListener("pointermove", Le), t.addEventListener("pointerup", Ne), t.addEventListener("pointercancel", Ne);
  }
  function Sr(t) {
    var p;
    const [a, s] = t.dataset.open.split("|"), d = t.closest(".tfCard");
    z = { key: a, id: s, h: d ? Math.round(d.getBoundingClientRect().height) : 0 }, on.delete(a), Jt(), (p = _.querySelector(".tfOpen [data-close]")) == null || p.focus({ preventScroll: !0 });
  }
  function ls(t) {
    var a;
    ge = t.dataset.area, _.querySelectorAll(".tfAreaPanel").forEach((s) => {
      var p;
      const d = s === t;
      s.classList.toggle("active", d), s.setAttribute("aria-expanded", String(d)), (p = s.querySelector(".panelExpanded")) == null || p.toggleAttribute("inert", !d);
    }), on.set("areas", Si(((a = _.querySelector('[data-k="areas"]')) == null ? void 0 : a.style.order) || 1));
  }
  const Tr = {
    bright: { value: (t, a) => Math.round(a * 100), text: (t, a) => a ? a + "%" : "Off", send: (t, a) => a > 0 ? ["light", "turn_on", { brightness_pct: a }] : ["light", "turn_off", {}] },
    ct: { value: (t, a) => {
      const [s, d] = wn(t);
      return Math.round(s + a * (d - s));
    }, text: (t, a) => a.toLocaleString() + "k", send: (t, a) => ["light", "turn_on", { color_temp_kelvin: a }] },
    hue: { value: (t, a) => Math.round(a * 360), text: () => "Colour", send: (t, a) => {
      var s;
      return ["light", "turn_on", { hs_color: [a, Math.max(60, ((s = bt(t).hs_color) == null ? void 0 : s[1]) || 100)] }];
    } },
    pos: { value: (t, a) => Math.round(a * 100), text: (t, a) => Math.round(a) + "%", send: (t, a) => ["cover", "set_cover_position", { position: Math.round(a) }] },
    tilt: { value: (t, a) => Math.round(a * 100), text: (t, a) => "Tilt " + a + "%", send: (t, a) => ["cover", "set_cover_tilt_position", { tilt_position: a }] },
    vol: { value: (t, a) => Math.round(a * 100) / 100, text: (t, a) => Math.round(a * 100) + "%", send: (t, a) => ["media_player", "volume_set", { volume_level: a }] }
  };
  function pi(t, a, s, d) {
    var V;
    const p = Tr[a].value(s, d);
    qe.set(a + "|" + s, p);
    const T = Math.round(d * 100) + "%", g = t.querySelector("i");
    if (a === "tilt") {
      g.style.width = "calc((100% - 6px) * " + d + ")";
      const [G, H] = t.querySelectorAll("span");
      G.classList.toggle("lit", d > 0.08), H.classList.toggle("lit", d > 0.92), on.delete(s), Ba = Ba.map(() => ""), At(s).forEach((I) => I.update(Pa(s)));
    } else if (g) g.style.width = T;
    else {
      let G = t.querySelector("b");
      G || (G = document.createElement("b"), t.appendChild(G)), G.style.left = T;
    }
    t.setAttribute("aria-valuenow", String(Math.round(d * 100)));
    const x = (V = t.closest(".tfAction") || t.closest(".tfMore")) == null ? void 0 : V.querySelector(".tfName .activityRowMeta, .tfMoreState");
    x && (x.textContent = Tr[a].text(s, p));
  }
  function ga(t, a) {
    const s = qe.get(t + "|" + a), [d, p, T] = Tr[t].send(a, s), g = () => setTimeout(() => {
      qe.delete(t + "|" + a), Jt();
    }, 1500);
    ci(d, p, a, T).then(g, g);
  }
  function eo(t) {
    t.addEventListener("click", (a) => {
      var d;
      const s = a.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],.tfAreaPanel");
      if (Bn && !a.target.closest(".tfBoardMenu,[data-board-more]") && Pn(), !(!s || !t.contains(s) || s.disabled))
        if (s.dataset.boardMore)
          (Bn == null ? void 0 : Bn.key) === s.dataset.boardMore ? Pn(!0) : oi(s.dataset.boardMore, s);
        else if (s.dataset.boardAct) Xr(Bn.key, s.dataset.boardAct);
        else if (s.dataset.boardShow) ur(s.dataset.boardShow);
        else if (s.dataset.favHide) Oi(s.dataset.favHide, !1);
        else if (s.dataset.energyPick) Ei(s.dataset.energyPick);
        else if (s.dataset.act) ui(s.dataset.act);
        else if (s.hasAttribute("data-details")) zi(!(v != null && v.details));
        else if (s.hasAttribute("data-details-close")) zi(!1);
        else if (s.dataset.summary) Xo(s.dataset.summary, s);
        else if (s.dataset.star) $o(s.dataset.star);
        else if (s.hasAttribute("data-more-back"))
          v = v.back, Vi();
        else if (s.hasAttribute("data-favs-edit")) dn("favourites", s);
        else if (s.dataset.acts) JSON.parse(s.dataset.acts).forEach(([p, T, g, x]) => ci(p, T, g, x).catch(() => {
        }));
        else if (s.dataset.more) dn(s.dataset.more, s);
        else if (s.hasAttribute("data-more-close")) di();
        else if (s.dataset.go) gr("room:" + s.dataset.go);
        else if (s.hasAttribute("data-area-back")) Io();
        else if (s.dataset.open) Sr(s);
        else if (s.hasAttribute("data-close")) {
          const p = z;
          z = null, on.delete(p.key), Jt(), (d = _.querySelector('[data-open="' + CSS.escape(p.key + "|" + p.id) + '"]')) == null || d.focus({ preventScroll: !0 });
        } else s.classList.contains("tfAreaPanel") && !s.classList.contains("active") && ls(s);
    }), t.addEventListener("keydown", (a) => {
      var d, p, T, g, x, V, G;
      const s = a.target;
      if ((d = s.dataset) != null && d.open && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), Sr(s)), (p = s.dataset) != null && p.energyPick && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), Ei(s.dataset.energyPick)), (T = s.classList) != null && T.contains("tfAreaPanel") && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), ls(s)), (g = s.dataset) != null && g.summary && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), Xo(s.dataset.summary, s)), a.key === "Escape" && Bn && t === _) {
        a.preventDefault(), Pn(!0);
        return;
      }
      if (a.key === "Escape" && Nn && t === _) {
        a.preventDefault(), $a(!1), (x = u("dashEditNav")) == null || x.focus();
        return;
      }
      if (a.key === "Escape" && Se && t === _ && (a.preventDefault(), Io()), (V = s.dataset) != null && V.blocks) {
        const H = s.dataset.blocks, I = al(a, Math.round(Vn(H)));
        if (I == null) return;
        a.preventDefault(), Ia(H, I), clearTimeout(de.get(H)), de.set(H, setTimeout(() => ga("pos", H), 500));
        return;
      }
      if ((G = s.dataset) != null && G.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(a.key)) {
        a.preventDefault();
        const [H, I] = s.dataset.drag.split("|"), J = Number(s.getAttribute("aria-valuenow")) / 100, Le = a.key === "Home" ? 0 : a.key === "End" ? 1 : Math.max(0, Math.min(1, J + (a.key === "ArrowLeft" || a.key === "ArrowDown" ? -0.05 : 0.05)));
        pi(s, H, I, Le), ga(H, I);
      }
    }), t.addEventListener("pointerdown", (a) => {
      var va;
      const s = a.target.closest("[data-blocks]");
      if (s && a.button === 0) {
        a.preventDefault(), ss(s, a);
        return;
      }
      const d = a.target.closest("[data-drag]");
      if (!d || a.button > 0) return;
      const [p, T] = d.dataset.drag.split("|");
      if (p === "bright" && !un(T)) {
        ui(it("light", "toggle", T));
        return;
      }
      const g = p === "bright" && ((va = b[T]) == null ? void 0 : va.state) !== "on", x = a.pointerType !== "mouse", V = p === "tilt" ? 3 : 0, G = () => d.getBoundingClientRect().width - V * 2, H = (cn) => {
        const ra = d.getBoundingClientRect();
        return Math.max(0, Math.min(1, (cn.clientX - ra.left - V) / G()));
      };
      let I = x ? "waiting" : g ? "pressed" : "dragging", J = 0, Le = 0;
      const Ne = a.clientX, ce = a.clientY, fe = (cn, ra) => Math.hypot(cn.clientX - Ne, cn.clientY - ce) > ra, ne = () => {
        try {
          d.setPointerCapture(a.pointerId);
        } catch {
        }
      };
      x || (a.preventDefault(), ne()), I === "dragging" && pi(d, p, T, H(a));
      const Ge = x && setTimeout(() => {
        var cn, ra;
        I === "waiting" && (I = "held", S = d, d.classList.add("held"), ne(), (cn = navigator.userActivation) != null && cn.hasBeenActive && ((ra = navigator.vibrate) == null || ra.call(navigator, 8)), J = g ? (Oe[T] ?? 100) / 100 : Number(d.getAttribute("aria-valuenow")) / 100, Le = Ne, pi(d, p, T, J));
      }, y), Rt = (cn) => {
        I === "waiting" && fe(cn, 8) ? I = "gone" : I === "pressed" && fe(cn, 4) && (I = "dragging"), I === "held" ? pi(d, p, T, Math.max(0, Math.min(1, J + (cn.clientX - Le) / G()))) : I === "dragging" && pi(d, p, T, H(cn));
      }, mn = (cn) => {
        clearTimeout(Ge), ["pointermove", "pointerup", "pointercancel"].forEach((ra, Co) => d.removeEventListener(ra, Co ? mn : Rt)), d.classList.remove("held"), S === d && (S = null), I === "held" || I === "dragging" ? ga(p, T) : cn.type === "pointerup" && g && (I === "waiting" || I === "pressed") && ci("light", "turn_on", T).catch(() => {
        });
      };
      d.addEventListener("pointermove", Rt), d.addEventListener("pointerup", mn), d.addEventListener("pointercancel", mn);
    }), t.addEventListener("touchmove", (a) => {
      S && a.cancelable && a.preventDefault();
    }, { passive: !1 });
  }
  return _ && w && (Va(), eo(_), eo(lt), lt.addEventListener("click", (t) => {
    t.target === lt && di();
  }), (Ha = n.getElementById("homeNav")) == null || Ha.addEventListener("click", () => {
    Se && Io();
  }), (Lr = n.querySelector(".bottomNav")) == null || Lr.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + uc + "</button>"), (Mo = u("dashEditNav")) == null || Mo.addEventListener("click", () => $a(!Nn)), _.addEventListener("pointerdown", Xs), _.addEventListener("hass-action", (t) => {
    var d, p;
    const a = (p = (d = t.target).closest) == null ? void 0 : p.call(d, ".tfDac"), s = a == null ? void 0 : a.dataset.k;
    !s || !a.dataset.dac.startsWith("dash:") || Nn || (t.stopPropagation(), _a.has(s) ? _a.delete(s) : _a.add(s), ln());
  }), new ResizeObserver(() => {
    f.classList.contains("tfDash") && Ri() !== Qo ? Jt() : Ra();
  }).observe(_), window.addEventListener("resize", Ra, { passive: !0 }), lt.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.stopPropagation(), v != null && v.details ? zi(!1) : di());
  })), ie(), {
    update(t) {
      if (!w) return;
      const a = !Object.keys(b).length;
      b = t || {};
      for (const s in b) s.startsWith("light.") && b[s].state === "on" && un(s) && Ue(s, ro(b[s]));
      a ? Na() : Jt();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      io = !0, Ve == null || Ve.destroy(), Ve = null, Je == null || Je.forEach((t) => t.destroy()), Je = null;
    },
    resume() {
      io = !1, !(!w || !(_ != null && _.querySelector("[data-tf]"))) && (rt.isConnected && yi(rt.style.order), ki());
    }
  };
}
const Hh = "0.46.1", Rl = "move_assistant", Fh = "move_assistant", hc = "move_assistant_checkin_reminder";
function Oh() {
  if (document.getElementById("move-assistant-inter")) return;
  const n = document.createElement("link");
  n.id = "move-assistant-inter", n.rel = "stylesheet", n.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(n);
}
class qh extends HTMLElement {
  setConfig(l) {
    this._config = l || {};
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
  set hass(l) {
    var u;
    const i = !this._hass;
    if (this._hass = l, i) {
      this._init();
      return;
    }
    this._app && l.states !== this._lastStates && (this._lastStates = l.states, this._app.updateStates(l.states), (u = this._test) == null || u.update(l.states));
  }
  connectedCallback() {
    var l, i;
    (l = this._app) == null || l.resume(), (i = this._test) == null || i.resume();
  }
  disconnectedCallback() {
    var l, i;
    (l = this._app) == null || l.suspend(), (i = this._test) == null || i.suspend();
  }
  async _init() {
    Oh();
    const l = this.shadowRoot || this.attachShadow({ mode: "open" });
    l.innerHTML = `<style>${ru}${su}${lu}</style>${du}`;
    const i = l.getElementById("app");
    i.style.opacity = "0";
    let u = null;
    try {
      const f = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: Rl
      });
      u = (f == null ? void 0 : f.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(u), this._app = _u(l, {
      data: u,
      save: (f) => this._save(f),
      fire: (f, m) => this._fire(f, m),
      ws: (f) => this._hass.callWS(f),
      subscribe: (f, m) => {
        var w, L;
        return (L = (w = this._hass) == null ? void 0 : w.connection) != null && L.subscribeMessage ? this._hass.connection.subscribeMessage(m, f) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var f, m;
        return Object.keys(((m = (f = this._hass) == null ? void 0 : f.services) == null ? void 0 : m.notify) || {}).sort();
      },
      setReminderAutomation: (f) => this._setReminderAutomation(f),
      setLight: (f) => this.classList.toggle("lightBody", f),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this._test = Ih(l, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), this.isConnected || (this._app.suspend(), this._test.suspend()), i.style.transition = "opacity .2s ease", i.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var i;
    const l = (i = this._hass) == null ? void 0 : i.connection;
    l != null && l.subscribeMessage && l.subscribeMessage(
      (u) => {
        var m;
        const f = JSON.stringify((u == null ? void 0 : u.value) ?? null);
        f === this._lastSaved || f === this._pendingJson || (this._lastSaved = f, (m = this._app) == null || m.applyRemoteData(u.value));
      },
      { type: "frontend/subscribe_user_data", key: Rl }
    ).catch(() => {
    });
  }
  _save(l) {
    this._pendingJson = JSON.stringify(l), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const i = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: Rl,
          value: JSON.parse(i)
        }), this._lastSaved = i;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(l, i = {}) {
    var u, f;
    ((u = this._config) == null ? void 0 : u.events) !== !1 && ((f = this._hass) == null || f.callWS({
      type: "fire_event",
      event_type: Fh,
      event_data: { action: l, ...i }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(l) {
    const i = `config/automation/config/${hc}`;
    if (!l) {
      try {
        await this._hass.callApi("DELETE", i);
      } catch (m) {
        if ((m == null ? void 0 : m.status_code) !== 404 && (m == null ? void 0 : m.status) !== 404) throw m;
      }
      return;
    }
    const u = (m) => `${m}:00`, f = window.location.pathname;
    await this._hass.callApi("POST", i, {
      id: hc,
      alias: "Move Assistant check-in reminder",
      description: "Created by Move Assistant. Change it in Move Assistant → Settings → Check-in.",
      mode: "single",
      triggers: [
        { trigger: "time", at: u(l.times.morning), id: "morning" },
        { trigger: "time", at: u(l.times.evening), id: "evening" }
      ],
      conditions: [],
      actions: [
        {
          action: `notify.${l.target}`,
          data: {
            title: "Move Assistant",
            message: "{{ 'Morning' if trigger.id == 'morning' else 'Evening' }} check-in is ready",
            data: { url: f, clickAction: f }
          }
        }
      ]
    });
  }
  _toggleFullscreen() {
    const l = document;
    if (l.fullscreenElement || l.webkitFullscreenElement) {
      (l.exitFullscreen || l.webkitExitFullscreen).call(l);
      return;
    }
    const i = this.requestFullscreen || this.webkitRequestFullscreen;
    Promise.resolve(i.call(this)).catch(
      () => this._toast("Full screen isn't available here")
    );
  }
  _toast(l) {
    var u;
    const i = (u = this.shadowRoot) == null ? void 0 : u.getElementById("toast");
    i && (i.textContent = l, i.classList.add("show"), setTimeout(() => i.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", qh), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${Hh} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
