const ku = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#fbf9f6;--color-text-on-selected:#26221e;--color-bg-segment-selected:#fbf9f6;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', Mu = '#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)){transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;align-items:start}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .settingsSelect{flex:none;width:220px}@media (max-width:620px){#housePane .settingsSelect{width:150px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDac{grid-column:span 2;min-width:0}.tfDac>dual-controller-v3{display:block}.tfMoreActions .tfDac{grid-column:auto}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);font:400 24px/1 var(--font);cursor:pointer}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--card);color:var(--text);box-shadow:var(--hc-hair)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfAreaPanel .sourceTag{margin-right:4px}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:3px;height:38px;padding:3px;border-radius:12px;background:var(--tile);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:9px 4px 4px 9px}.tfBlocks>span:nth-child(4){border-radius:4px 9px 9px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 12px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:38px;border-radius:12px;background:var(--tile);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:3px;bottom:3px;left:3px;border-radius:9px;background:var(--primary)}.tfTilt span{position:relative;padding:0 15px;color:var(--text);font:600 12px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns{display:flex;gap:12px}.tfCoverBtns button{flex:1;display:grid;place-items:center;height:38px;min-width:0;min-height:0;padding:0;border:0;border-radius:12px;background:var(--tile);color:var(--text);cursor:pointer}.tfCoverBtns button:disabled{opacity:.38;cursor:default}.tfCoverBtns svg{display:block;width:22px;height:22px}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:620px){.tfMoreBackdrop{place-items:end stretch;padding:0}.tfMorePair{width:100%;max-height:85vh}.tfMore{width:100%;border-radius:var(--r-card) var(--r-card) 0 0}.tfMore .tfCoverBtns{gap:8px}}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:640px}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 18px 10px}.tfAreaPanel .workoutPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaIcon[data-light]{background:var(--light);color:var(--light-ink)}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{color:var(--muted);font:400 16px/1.2 var(--font)}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px)}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px;align-items:start}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{display:flex;align-items:center;gap:12px;min-width:0;padding:20px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}.tfDashTiles>.tfAction{justify-content:space-between}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%}#app.tfBoard .tfDashTiles>.tfAction{padding-block:18px}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;display:grid;grid-auto-rows:60px;gap:16px;pointer-events:none}.tfBoardCells i{border-radius:var(--r-inner);background:color-mix(in srgb,var(--text) 7%,transparent)}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:360px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-40px;display:grid;place-items:center;width:40px;height:56px;min-height:0;padding:0;border:0;border-radius:16px 0 0 16px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(360px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}', Cu = '.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:clamp(8px,calc(5.6cqw * var(--wb-k,1)),14px);aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:clamp(12px,calc(7.9cqw * var(--wb-k,1)),20px);border-radius:clamp(22px,calc(11.1cqw * var(--wb-k,1)),28px);overflow:hidden}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbHead{gap:clamp(8px,calc(4.8cqw * var(--wb-k,1)),12px)}.wbSquare .wbChip{width:clamp(30px,calc(15.9cqw * var(--wb-k,1)),40px);height:clamp(30px,calc(15.9cqw * var(--wb-k,1)),40px);border-radius:clamp(12px,calc(6.3cqw * var(--wb-k,1)),16px);--wb-icon:clamp(18px,calc(9.5cqw * var(--wb-k,1)),24px)}.wbSquare .wbName{font-size:clamp(12px,calc(5.6cqw * var(--wb-k,1)),14px);line-height:1.4}.wbSquare .wbSub{font-size:clamp(13px,calc(6.3cqw * var(--wb-k,1)),16px)}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:clamp(6px,calc(4cqw * var(--wb-k,1)),10px)}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);opacity:.14}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:20px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 480px){.wbCard.wbWeather{gap:16px;padding:var(--inset)}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumns{display:none}.wbHalves{display:grid}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbStripScroll{min-height:150px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:clamp(12px,6.3cqw,16px);overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}@container wb-card (width < 220px){.wbMoonCaption{display:none}}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:clamp(12px,6.3cqw,16px);overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbCompareBars{display:block;width:100%;height:100%;min-height:0}.wbAvgValue{fill:var(--muted);font-size:10px;text-anchor:middle}.wbAvgValue.wbToday{fill:var(--text);font-size:12px;font-weight:600}.wbAvgBar{fill:var(--muted);opacity:.45}.wbAvgBar.wbToday{fill:var(--primary);opacity:1}.wbAvgDay{fill:var(--muted);font-size:11px;text-anchor:middle}.wbAvgDay.wbToday{fill:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}', Su = `<main id="app"><div class="shell">
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
`, Jn = {
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
}, Xn = (a) => a < 0 ? 0 : a > 1 ? 1 : a, qd = (a, l, o) => a + (l - a) * o, Jl = (a) => {
  const l = String(a || "#000000").trim().replace("#", ""), o = l.length === 3 ? l.split("").map((c) => c + c).join("") : l;
  return [0, 2, 4].map((c) => parseInt(o.slice(c, c + 2), 16) || 0);
}, Tu = (a) => "#" + a.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), Wd = {}, zt = (a, l, o) => {
  const c = a + l + o;
  return Wd[c] || (Wd[c] = Tu(Jl(a).map((f, m) => f + (Jl(l)[m] - f) * o)));
}, Vd = {}, zs = (a) => Vd[a] || (Vd[a] = Jl(a)), Rl = (a, l, o, c) => (f) => {
  if (f <= 0) return 0;
  if (f >= 1) return 1;
  let m = 0, v = 1, T = f;
  for (let b = 0; b < 18; b++)
    T = (m + v) / 2, 3 * (1 - T) * (1 - T) * T * a + 3 * (1 - T) * T * T * o + T * T * T < f ? m = T : v = T;
  return 3 * (1 - T) * (1 - T) * T * l + 3 * (1 - T) * T * T * c + T * T * T;
}, Lu = { std: Rl(0.2, 0, 0, 1), acc: Rl(0.3, 0, 1, 1), dec: Rl(0, 0, 0, 1) };
function $s(a, l) {
  const o = String(a || "");
  return (o === "sunny" || o === "clear-night" ? "clear" : o === "partlycloudy" ? "partly" : o === "fog" ? "fog" : o === "lightning" || o === "lightning-rainy" ? "storm" : o === "snowy" || o === "snowy-rainy" ? "snow" : o === "rainy" || o === "pouring" || o === "hail" ? "rain" : "cloudy") + "/" + (o === "clear-night" || l ? "night" : "day");
}
function Dc(a) {
  const l = { clear: [a.skyClearDay, a.skyClearNight], cloudy: [a.skyCloudyDay, a.skyCloudyNight], rain: [a.skyRainDay, a.skyRainNight], snow: [a.skySnowDay, a.skySnowNight], fog: [a.skyFogDay, a.skyFogNight] };
  return l.partly = [zt(l.clear[0], l.cloudy[0], 0.12), zt(l.clear[1], l.cloudy[1], 0.12)], l.storm = [zt(l.rain[0], "#000000", 0.22), zt(l.rain[1], "#000000", 0.22)], l;
}
const Ql = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], ed = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], td = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function nd(a, l = Jn) {
  const o = { ...Jn, ...l }, c = Dc(o), f = String(a).split("/"), m = c[f[0]] ? f[0] : "clear", v = f[1] === "night", T = c[m][v ? 1 : 0], b = {
    night: v,
    clearness: m === "clear" ? 1 : m === "partly" ? 0.7 : 0.25,
    sky: T,
    skyStops: [T],
    skyT: 0,
    sun: { x: 45, y: v ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: v ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: v ? 1 : 0 },
    stars: Ql.map(() => ({ o: 0 })),
    rain: ed.map(() => ({ o: 0, dy: -16 })),
    snow: td.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, P = (ie) => Ql.map(() => ({ o: ie }));
  return m === "clear" ? v ? (b.moon.o = 1, b.stars = P(1)) : b.sun.o = 1 : m === "partly" ? (b.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: v ? 1 : 0 }, v ? (b.moon = { x: 34, y: 33, d: 48, o: 1 }, b.stars = P(0.7)) : b.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : m === "cloudy" || m === "fog" ? (b.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: v ? 1 : 0 }, v ? b.moon = { x: 40, y: 36, d: 40, o: 0 } : b.sun = { x: 40, y: 36, r: 20, o: 0 }) : (b.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, v ? b.moon = { x: 38, y: 28, d: 36, o: 0 } : b.sun = { x: 38, y: 28, r: 18, o: 0 }, m === "snow" ? b.snow = td.map(() => ({ o: 1, dy: 0 })) : b.rain = ed.map((ie, ne) => ({ o: m === "storm" && ne === 1 ? 0 : 1, dy: 0 })), m === "storm" && (b.bolt = { o: 1, dy: 0 })), b;
}
const zd = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function Au(a, l, o, c = Jn, f = !1) {
  const m = { ...Jn, ...c }, v = (I, O) => I > 0.01 && O > 0.01 ? "stay" : I > 0.01 ? "leave" : O > 0.01 ? "enter" : "none", T = (I, O, $, te) => {
    const Y = I[0] + O * te, q = I[1] - ($ - 1 - O) * te;
    return Lu[I[2]](Xn((o - Y) / Math.max(1e-3, q - Y)));
  }, b = (I, O, $, te = 0, Y = 1, q = 0) => {
    const X = v(I.o, O.o);
    if (X === "none") return { ...O, o: 0 };
    const j = T(zd[$][X], te, Y, q), Z = {};
    for (const Q in O) Z[Q] = f && X !== "stay" && Q !== "o" ? X === "leave" ? I[Q] : O[Q] : qd(I[Q], O[Q], j);
    return Z;
  }, P = T(zd.sky, 0, 1, 0);
  let ie, ne;
  if (a.night !== l.night) {
    const I = Math.min(a.clearness, l.clearness), O = zt(zt(a.sky, l.sky, 0.5), m.dusk, 0.6 * I);
    ie = P < 0.5 ? zt(a.sky, O, P * 2) : zt(O, l.sky, P * 2 - 1), ne = I > 0.5 ? [a.sky, m.dusk, l.sky] : [a.sky, l.sky];
  } else
    ie = zt(a.sky, l.sky, P), ne = [a.sky, l.sky];
  return {
    night: o < 0.5 ? a.night : l.night,
    clearness: qd(a.clearness, l.clearness, o),
    sky: ie,
    skyStops: ne,
    skyT: P,
    sun: b(a.sun, l.sun, "body"),
    moon: b(a.moon, l.moon, "body"),
    cloud: b(a.cloud, l.cloud, "cloud"),
    stars: l.stars.map((I, O) => b(a.stars[O], I, "fx", O, l.stars.length, 0.05)),
    rain: l.rain.map((I, O) => b(a.rain[O], I, "fx", O, l.rain.length, 0.05)),
    snow: l.snow.map((I, O) => b(a.snow[O], I, "fx", O, l.snow.length, 0.05)),
    bolt: b(a.bolt, l.bolt, "fx")
  };
}
const _u = [
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
], $n = (a, l) => (_u[(l & 7) * 8 + (a & 7)] + 0.5) / 64, Eu = 0, id = 1, rd = 2, sd = 3, ld = 4, Kn = 5, vr = 6, ni = 7, dd = 8, Us = (a, l) => l <= 0.6665 && ((a - 0.5) * (a - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (a - 0.25) * (a - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (a - 0.791) * (a - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || a >= 0.25 && a <= 0.791 && l >= 0.416), Du = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], Ru = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((a) => [a[0] * 13 / 11, a[1] * 28 / 24]), Rc = (a, l, o) => {
  let c = !1;
  for (let f = 0, m = a.length - 1; f < a.length; m = f++) {
    const v = a[f], T = a[m];
    v[1] > o != T[1] > o && l < (T[0] - v[0]) * (o - v[1]) / (T[1] - v[1]) + v[0] && (c = !c);
  }
  return c;
};
function Nc(a, { size: l = 90, px: o = 2, oneBit: c = !1, colors: f = Jn, ink: m = "#26221e", paper: v = "#fbf9f6", clock: T = 0, idle: b = !1 } = {}) {
  const P = { ...Jn, ...f }, ie = Math.sin, ne = Math.PI * 2, I = Math.max(6, Math.round(l / o)), O = I / 90, $ = b ? Math.floor(T / 100) * 100 : 0, te = b ? ie(ne * $ / 3600) : 0, Y = b ? 1.8 * ie(ne * $ / 6400) : 0, q = b ? 0.9 * ie(ne * $ / 4100) : 0, X = b ? 0.8 * ie(ne * $ / 5200) : 0, j = $ / 3400 % 1, Z = b && a.bolt.o > 0.5 && (j < 0.04 || j > 0.08 && j < 0.11), Q = new Array(I * I), _ = new Uint8Array(I * I), V = (y, A, M, R, de) => {
    M == null || y < 0 || A < 0 || y >= I || A >= I || (R >= 1 || R > $n(y + 5, A + 3)) && (Q[A * I + y] = M, _[A * I + y] = de);
  }, ge = (y, A, M, R) => {
    for (let de = Math.max(0, Math.floor(A - M) - 1); de <= Math.min(I - 1, A + M + 1); de++) for (let G = Math.max(0, Math.floor(y - M) - 1); G <= Math.min(I - 1, y + M + 1); G++) R(G, de, G + 0.5 - y, de + 0.5 - A);
  }, Te = a.skyStops || [a.sky], w = a.skyT || 0;
  for (let y = 0; y < I; y++) {
    const A = a.night ? Xn(1 - (y + 0.5) / (I * 0.7)) * 0.85 : Xn(((y + 0.5) / I - 0.35) / 0.65) * 0.85;
    for (let M = 0; M < I; M++) {
      let R = Te[0];
      if (Te.length > 1) {
        const de = w * (Te.length - 1), G = Math.min(Te.length - 2, Math.floor(de));
        R = de - G > $n(M, y) ? Te[G + 1] : Te[G];
      }
      A > $n(M + 2, y + 5) && (R = a.night ? zt(R, "#000000", 0.28) : zt(R, "#ffffff", 0.2)), Q[y * I + M] = Z ? zt(R, "#ffffff", 0.25) : R;
    }
  }
  if (a.sun.o > 0.01) {
    const y = a.sun.x * O, A = a.sun.y * O, M = Math.max(1, a.sun.r * O);
    if (b) {
      const R = M * (1.45 + 0.06 * te), de = zt(P.sun, "#ffffff", 0.55);
      if (ge(y, A, R, (G, ae, le, me) => {
        const We = Math.sqrt(le * le + me * me);
        We > M && We < R && V(G, ae, de, 0.26 * (1 - (We - M) / (R - M)) * a.sun.o, Eu);
      }), a.sun.o > 0.5) {
        const G = Math.floor($ / 500) % 2, ae = Math.max(1, M * 0.22);
        for (let le = 0; le < 8; le++) if (le % 2 === G) for (let me = M + 1.5; me < M + 1.5 + ae; me += 0.7) V(Math.floor(y + Math.cos(le * Math.PI / 4) * me), Math.floor(A + Math.sin(le * Math.PI / 4) * me), P.sun, a.sun.o, dd);
      }
    }
    ge(y, A, M, (R, de, G, ae) => {
      if (G * G + ae * ae > M * M) return;
      const le = ((G * 0.643 + ae * 0.766) / M + 1) / 2;
      V(R, de, Xn((le - 0.62) / 0.38) > $n(R, de) ? P.sunEdge : P.sun, a.sun.o, id);
    });
  }
  if (Ql.forEach((y, A) => {
    const M = a.stars[A].o;
    if (M < 0.01) return;
    const R = Math.floor(y[0] * O), de = Math.floor(y[1] * O), G = b ? (Math.floor($ / 300) + A * 3) % 6 : 0;
    if (G === 5) return;
    const ae = Math.round(y[2] * O * (G === 4 ? 0.3 : G < 2 ? 1 : 0.6));
    V(R, de, P.star, M, ni);
    for (let le = 1; le <= ae; le++) {
      const me = le === ae && ae > 1 ? zt(P.star, a.sky, 0.5) : P.star;
      V(R - le, de, me, M, ni), V(R + le, de, me, M, ni), V(R, de - le, me, M, ni), V(R, de + le, me, M, ni);
    }
  }), a.moon.o > 0.01) {
    const y = Math.max(1.5, a.moon.d * O * 0.37), A = a.moon.x * O, M = a.moon.y * O + (b && X > 0.4 ? -1 : 0), R = A + 0.547 * y, de = M - 0.503 * y, G = 0.82 * y, ae = zt(P.moon, "#ffffff", 0.6);
    ge(A, M, y, (le, me, We, et) => {
      if (We * We + et * et > y * y) return;
      const wt = le + 0.5 - R, pn = me + 0.5 - de;
      wt * wt + pn * pn <= G * G || V(le, me, Xn((et + y) / (2 * y) * 1.1 - 0.1) > $n(le, me) ? P.moon : ae, a.moon.o, rd);
    });
  }
  const be = Math.max(2, Math.round(15.65 * O)), Ce = Math.max(1, Math.round(5.87 * O * 0.5));
  ed.forEach((y, A) => {
    const M = a.rain[A];
    let R = M.dy, de = M.o;
    if (de < 0.01) return;
    if (b) {
      const le = ($ / 950 + A / 3) % 1;
      R += -5 + le * 14, de *= le < 0.18 ? le / 0.18 : le > 0.72 ? (1 - le) / 0.28 : 1;
    }
    const G = (y[0] + 3 + Y) * O, ae = (y[1] + R) * O;
    for (let le = 0; le < be; le++) for (let me = 0; me < Ce; me++) V(Math.floor(G - 0.208 * le) + me, Math.floor(ae) + le, P.rain, de, ld);
  });
  const Oe = Math.max(0, Math.round(7.34 * O / 2.6));
  if (td.forEach((y, A) => {
    const M = a.snow[A];
    let R = M.dy, de = 0, G = M.o;
    if (G < 0.01) return;
    if (b) {
      const me = ($ / 3200 + A / 5) % 1;
      R += -6 + me * 14, de = 1.5 * ie(ne * (me * 1.5 + A / 5)), G *= me < 0.2 ? me / 0.2 : me > 0.75 ? (1 - me) / 0.25 : 1;
    }
    const ae = Math.floor((y[0] + 3.67 + de + Y) * O), le = Math.floor((y[1] + 3.67 + R) * O);
    V(ae, le, P.snow, G, Kn);
    for (let me = 1; me <= Oe; me++)
      V(ae - me, le, P.snow, G, Kn), V(ae + me, le, P.snow, G, Kn), V(ae, le - me, P.snow, G, Kn), V(ae, le + me, P.snow, G, Kn), Oe > 1 && me < Oe && (V(ae - me, le - me, P.snow, G, Kn), V(ae + me, le - me, P.snow, G, Kn), V(ae - me, le + me, P.snow, G, Kn), V(ae + me, le + me, P.snow, G, Kn));
  }), a.bolt.o > 0.01)
    if (I >= 30) {
      const y = 39 + Y, A = 50 + a.bolt.dy;
      for (let M = Math.floor(A * O); M <= (A + 28) * O; M++) for (let R = Math.floor(y * O); R <= (y + 13) * O; R++)
        Rc(Ru, (R + 0.5) / O - y, (M + 0.5) / O - A) && V(R, M, P.sun, a.bolt.o, vr);
    } else {
      const y = I / 18, A = 7, M = 10 + Math.round(a.bolt.dy * 0.2);
      Du.forEach((R, de) => R.split("").forEach((G, ae) => {
        if (G !== "#") return;
        const le = Math.floor((A + ae) * y), me = Math.floor((M + de) * y);
        for (let We = me; We < Math.max(me + 1, Math.floor((M + de + 1) * y)); We++) for (let et = le; et < Math.max(le + 1, Math.floor((A + ae + 1) * y)); et++) V(et, We, P.sun, a.bolt.o, vr);
      }));
    }
  if (a.cloud.o > 0.01) {
    const y = Math.max(3, a.cloud.w * O), A = y * 0.6665, M = (a.cloud.x + Y) * O - y / 2, R = (a.cloud.y + q) * O - A / 2, de = zt(P.cloudDay, P.cloudNight, Math.round(a.cloud.f * 4) / 4), G = zt(de, "#000000", 0.16);
    for (let ae = Math.max(0, Math.floor(R) - 1); ae <= Math.min(I - 1, R + A + 1); ae++) for (let le = Math.max(0, Math.floor(M) - 1); le <= Math.min(I - 1, M + y + 1); le++) {
      const me = (le + 0.5 - M) / y, We = (ae + 0.5 - R) / y;
      Us(me, We) && V(le, ae, !Us(me, We + 1 / y) || Xn((We - 0.42) / 0.25) * 0.8 > $n(le, ae) ? G : de, a.cloud.o, sd);
    }
  }
  return Bc(Q, _, I, I, { oneBit: c, ink: m, paper: v, snowInk: !a.night });
}
function Bc(a, l, o, c, { oneBit: f, ink: m, paper: v, snowInk: T }) {
  const b = new Uint8ClampedArray(o * c * 4), P = zs(m), ie = zs(v);
  for (let ne = 0; ne < c; ne++) for (let I = 0; I < o; I++) {
    const O = ne * o + I, $ = l[O];
    if (a[O] == null) continue;
    let te = zs(a[O]);
    if (f) {
      let Y;
      $ === ld || $ === dd ? Y = !0 : $ === Kn ? Y = T : $ === ni || $ === vr ? Y = !1 : Y = Math.round((0.2126 * te[0] + 0.7152 * te[1] + 0.0722 * te[2]) / 255 * 4) / 4 <= $n(I, ne), ($ === id || $ === rd || $ === sd || $ === vr) && (I > 0 && l[O - 1] !== $ || I < o - 1 && l[O + 1] !== $ || ne > 0 && l[O - o] !== $ || ne < c - 1 && l[O + o] !== $) && (Y = !0), te = Y ? P : ie;
    }
    b[O * 4] = te[0], b[O * 4 + 1] = te[1], b[O * 4 + 2] = te[2], b[O * 4 + 3] = 255;
  }
  return { w: o, h: c, data: b };
}
const Nu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Bu = (a) => $s(a, !1).split("/")[0], Nl = (a) => () => {
  a |= 0, a = a + 1831565813 | 0;
  let l = Math.imul(a ^ a >>> 15, 1 | a);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, Pu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Iu = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Hu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Fu = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Ou = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], qu = [".##", "##.", ".#.", "#.."];
function Pc(a, { width: l, height: o, colors: c, wave: f = 0.38, soft: m = 6, glow: v = 0.6 }) {
  const T = { ...Jn, dawn: "#e5a77e", ...c }, b = Dc(T), P = l, ie = o, ne = P / 6, I = ne / 2, O = Math.PI * 2, $ = a.length ? a : [{ cond: "cloudy", night: !1 }], te = [...Array(12)].map((j, Z) => {
    const Q = $[Math.min(Z, $.length - 1)], _ = Bu(Q.cond), V = Z % 2 === 1;
    return { cond: Q.cond, k: _, night: V, sky: b[_][V ? 1 : 0], cover: Nu[_] };
  }), Y = (j) => ie * (0.5 - f * Math.cos(O * (j / ne - 0.25)));
  return { C: T, S: te, W: P, H: ie, cw: ne, sw: I, TAU: O, yb: Y, side: (j, Z, Q) => {
    const _ = (j ? Y(Z) - Q : Q - Y(Z)) / Math.max(3, m * 1.4) + 0.5;
    return _ <= 0 ? 0 : _ >= 1 ? 1 : _;
  }, glowAt: (j) => {
    const Z = ((j / ne - 0.25) % 1 + 1) % 1, Q = Math.max(0, Math.min(5, Math.round(j / ne - 0.25))), _ = Math.max(0, Math.min(5, Math.round(j / ne - 0.75))), V = 1 - (te[2 * Q].cover + te[2 * _ + 1].cover) / 2, ge = Math.sin(Math.PI * Math.min(1, Math.max(0, Y(j) / ie)));
    return { c: Z < 0.5 ? T.dusk : T.dawn, a: v * (0.2 + 0.8 * V) * ge * ge };
  }, soft: m, tw: ne * 0.3, sy: ie / 90 };
}
function Ic(a, { clock: l = 0, ambient: o = !1, seed: c = 1 }) {
  const { S: f, sw: m, side: v, C: T, TAU: b, sy: P } = a, ie = l, ne = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return f.forEach((I, O) => {
    const $ = Nl(c * 977 + O * 131 + 7), te = (O + 0.5) * m, Y = I.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[I.k] : 0;
    for (let q = 0; q < Y; q++) {
      const X = te + ($() - 0.5) * m * 1.6, j = (6 + $() * 76) * P, Z = $() < 0.35, Q = 1.8 + $() * 1.6, _ = v(!0, X, j) * (Z ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(b * ie / 2600 + q * 1.7 + O) : 1);
      _ >= 0.03 && ne.stars.push({ x: X, y: j, big: Z, size: Q, o: _ });
    }
    if (!I.night && (I.k === "clear" || I.k === "partly")) {
      const q = te + ($() - 0.5) * m * 0.3, X = Math.min(15, m * 0.29);
      ne.suns.push({ x: q, y: 32 * P, rad: X, halo: X * 2.8 * (o ? 1 + 0.07 * Math.sin(b * ie / 3600 + O) : 1) });
    }
    if (I.night && (I.k === "clear" || I.k === "partly")) {
      const q = Math.min(0.78, m * 0.55 / 34), X = te - 23 * q + ($() - 0.5) * m * 0.2;
      ne.moons.push({ x: X + 23 * q, y: (4 + (o ? 0.8 * Math.sin(b * ie / 5200 + O) : 0)) * P + 23 * q, d: 46 * q });
    }
  }), f.forEach((I, O) => {
    const $ = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[I.k];
    if (!$) return;
    const te = Nl(c * 577 + O * 71 + 3), Y = (O + 0.5) * m, q = I.k === "rain" || I.k === "storm" || I.night ? T.cloudNight : T.cloudDay, X = I.night ? 0.82 : I.k === "storm" ? 0.75 : 1;
    for (let j = 0; j < $; j++) {
      const Z = m / 46 * (I.k === "partly" ? 0.85 : 0.75 + te() * 0.55), Q = Y + (I.k === "partly" ? m * 0.12 : (te() - 0.5) * m * 1.05), _ = (I.k === "partly" ? 40 : 6 + te() * 26) * P, V = o ? 2.5 * Math.sin(b * ie / 9e3 + O * 1.3 + j * 2.1) : 0, ge = o ? 0.9 * Math.sin(b * ie / 6100 + O + j) : 0;
      ne.clouds.push({ x: Q - 23 * Z + V, y: _ - 15.33 * Z + ge, w: 46 * Z, h: 30.66 * Z, fill: q, o: X * ($ > 1 && j === 0 ? 0.85 : 1) });
    }
  }), f.forEach((I, O) => {
    const $ = Nl(c * 313 + O * 29 + 11), te = (O + 0.5) * m, Y = I.cond === "pouring" ? 16 : I.cond === "rainy" || I.cond === "hail" ? 9 : I.cond === "lightning-rainy" ? 12 : I.cond === "snowy-rainy" ? 5 : 0;
    for (let X = 0; X < Y; X++) {
      let j = te + ($() - 0.5) * m * 1.05, Z = 44 + $() * 36, Q = 1;
      if (o) {
        const V = ((Z - 44 + ie * 0.04) % 36 + 36) % 36;
        j -= 0.21 * (V - (Z - 44)), Z = 44 + V, Q = Math.min(1, V / 6, (36 - V) / 6);
      }
      Z *= P;
      const _ = v(I.night, j, Z) * Q;
      _ >= 0.05 && ne.drops.push({ x: j, y: Z, o: _ });
    }
    const q = I.cond === "snowy" ? 11 : I.cond === "snowy-rainy" ? 6 : 0;
    for (let X = 0; X < q; X++) {
      let j = te + ($() - 0.5) * m * 1.05, Z = 40 + $() * 44, Q = 1;
      if (o) {
        const V = ((Z - 40 + ie * 9e-3) % 44 + 44) % 44;
        Z = 40 + V, j += 1.6 * Math.sin(b * ie / 2800 + X * 1.9 + O), Q = Math.min(1, V / 6, (44 - V) / 6);
      }
      Z *= P;
      const _ = v(I.night, j, Z) * Q;
      _ >= 0.05 && ne.flakes.push({ x: j, y: Z, o: _ });
    }
    if (I.k === "fog") {
      const X = I.night ? "#c8ccd6" : "#ffffff", j = I.night ? 0.28 : 0.62, Z = o ? 4 * Math.sin(b * ie / 8e3 + O) : 0;
      for (let Q = 0; Q < 4; Q++) ne.fogs.push({ x: te - m * 0.75 + Q % 2 * m * 0.18 + (Q % 2 ? Z : -Z), y: (30 + Q * 13) * P, w: m * 1.3, c: X, a: j });
    }
    if (I.k === "storm") {
      const X = (ie / 3400 + O * 0.37) % 1;
      ne.bolts.push({ x: te + ($() - 0.5) * m * 0.3 - 5, y: 36 * P, o: o && !(X < 0.05 || X > 0.09 && X < 0.12) ? 0.8 : 1 });
    }
  }), ne;
}
function Wu(a, l, o, c, f, m, v, T) {
  const { S: b, C: P, cw: ie, yb: ne, glowAt: I, soft: O, tw: $, sy: te } = a, Y = new Array(o * c), q = new Uint8Array(o * c), X = new Uint8Array(o * c), j = (y, A, M, R, de) => {
    M == null || y < 0 || A < 0 || y >= o || A >= c || (R >= 1 || R > $n(y + 5, A + 3)) && (Y[A * o + y] = M, q[A * o + y] = de);
  }, Z = (y, A, M, R) => {
    for (let de = Math.max(0, Math.floor(A - M) - 1); de <= Math.min(c - 1, A + M + 1); de++) for (let G = Math.max(0, Math.floor(y - M) - 1); G <= Math.min(o - 1, y + M + 1); G++) R(G, de, G + 0.5 - y, de + 0.5 - A);
  }, Q = (y, A, M) => {
    for (let de = 0; de < y.length - 1; de++) {
      const G = (de + A) * ie;
      if (M < G - $ / 2) return [y[de], y[de], 0];
      if (M <= G + $ / 2) return [y[de], y[de + 1], (M - G + $ / 2) / $];
    }
    const R = y[y.length - 1];
    return [R, R, 0];
  }, _ = b.filter((y) => !y.night).map((y) => y.sky), V = b.filter((y) => y.night).map((y) => y.sky), ge = O / m, Te = 16 * te / m;
  for (let y = 0; y < o; y++) {
    const A = (y + 0.5) * f, M = ne(A) / m, R = Q(_, 0.75, A), de = Q(V, 1.25, A), G = I(A);
    for (let ae = 0; ae < c; ae++) {
      const le = $n(y, ae), me = ae + 0.5 - M, We = (ge > 0.01 ? Xn(0.5 + me / ge) : me > 0 ? 1 : 0) > le;
      let et = We ? R[2] > le ? R[1] : R[0] : de[2] > le ? de[1] : de[0];
      (We ? Xn(((ae + 0.5) / c - 0.45) / 0.55) * 0.7 : Xn(1 - (ae + 0.5) / (c * 0.55)) * 0.7) > $n(y + 2, ae + 5) && (et = We ? zt(et, "#ffffff", 0.18) : zt(et, "#000000", 0.25)), We && me >= 0 && me < Te && G.a * 1.3 * (1 - me / Te) > $n(y + 6, ae + 1) && (et = G.c), Y[ae * o + y] = et, X[ae * o + y] = We ? 0 : 1;
    }
  }
  const w = zt(P.sun, "#ffffff", 0.55), be = zt(P.moon, "#ffffff", 0.6);
  l.stars.forEach((y) => {
    const A = Math.floor(y.x / f), M = Math.floor(y.y / m);
    if (A < 0 || M < 0 || A >= o || M >= c || !X[M * o + A] || y.o < 0.15) return;
    const R = y.o > 0.45 ? P.star : zt(P.star, Y[M * o + A], 0.5), de = y.big && y.o > 0.6 ? Math.floor(y.size / f) : 0;
    j(A, M, R, 1, ni);
    for (let G = 1; G <= de; G++) [[A - G, M], [A + G, M], [A, M - G], [A, M + G]].forEach((ae) => {
      ae[0] >= 0 && ae[1] >= 0 && ae[0] < o && ae[1] < c && X[ae[1] * o + ae[0]] && j(ae[0], ae[1], R, 1, ni);
    });
  }), l.suns.forEach((y) => {
    const A = Math.max(1.5, y.rad / f), M = y.x / f, R = y.y / m, de = y.halo / f * 0.85;
    if (Z(M, R, de, (G, ae, le, me) => {
      const We = Math.sqrt(le * le + me * me);
      We > A && We < de && !X[ae * o + G] && j(G, ae, w, 0.3 * (1 - (We - A) / (de - A)), 0);
    }), T) {
      const G = Math.floor(v / 500) % 2, ae = Math.max(1, A * 0.3);
      for (let le = 0; le < 8; le++) if (le % 2 === G) for (let me = A + 1.2; me < A + 1.2 + ae; me += 0.7) j(Math.floor(M + Math.cos(le * Math.PI / 4) * me), Math.floor(R + Math.sin(le * Math.PI / 4) * me), P.sun, 1, dd);
    }
    Z(M, R, A, (G, ae, le, me) => {
      le * le + me * me <= A * A && j(G, ae, Xn(((me / A + 1) / 2 - 0.6) / 0.4) > $n(G, ae) ? P.sunEdge : P.sun, 1, id);
    });
  }), l.moons.forEach((y) => {
    const A = Math.max(1.5, y.d * 0.37 / f), M = y.x / f, R = y.y / m, de = M + 0.547 * A, G = R - 0.503 * A, ae = 0.82 * A;
    Z(M, R, A, (le, me, We, et) => {
      if (We * We + et * et > A * A) return;
      const wt = le + 0.5 - de, pn = me + 0.5 - G;
      wt * wt + pn * pn > ae * ae && j(le, me, Xn((et + A) / (2 * A) * 1.1 - 0.1) > $n(le, me) ? P.moon : be, 1, rd);
    });
  }), l.clouds.forEach((y) => {
    const A = Math.max(3, y.w / f), M = A * 0.6665, R = y.x / f, de = y.y / m, G = zt(y.fill, "#000000", 0.16);
    for (let ae = Math.max(0, Math.floor(de) - 1); ae <= Math.min(c - 1, de + M + 1); ae++) for (let le = Math.max(0, Math.floor(R) - 1); le <= Math.min(o - 1, R + A + 1); le++) {
      const me = (le + 0.5 - R) / A, We = (ae + 0.5 - de) / A;
      Us(me, We) && j(le, ae, !Us(me, We + 1 / A) || Xn((We - 0.42) / 0.25) * 0.8 > $n(le, ae) ? G : y.fill, y.o, sd);
    }
  }), l.fogs.forEach((y) => {
    const A = Math.floor(y.y / m), M = Math.max(A, Math.floor((y.y + 6 * te) / m) - 1), R = Math.floor(y.x / f), de = Math.floor((y.x + y.w) / f);
    for (let G = A; G <= M; G++) for (let ae = R; ae <= de; ae++) {
      const le = (ae - R) / Math.max(1, de - R);
      j(ae, G, y.c, y.a * (le < 0.25 ? le / 0.25 : le > 0.75 ? (1 - le) / 0.25 : 1), 0);
    }
  });
  const Ce = Math.max(2, Math.round(9 / m));
  l.drops.forEach((y) => {
    const A = y.x / f, M = Math.floor(y.y / m);
    for (let R = 0; R < Ce; R++) j(Math.floor(A - 0.208 * R * m / f), M + R, P.rain, y.o, ld);
  });
  const Oe = Math.max(0, Math.round(4.4 / f / 2.6));
  return l.flakes.forEach((y) => {
    const A = Math.floor(y.x / f), M = Math.floor(y.y / m);
    j(A, M, P.snow, y.o, Kn);
    for (let R = 1; R <= Oe; R++)
      j(A - R, M, P.snow, y.o, Kn), j(A + R, M, P.snow, y.o, Kn), j(A, M - R, P.snow, y.o, Kn), j(A, M + R, P.snow, y.o, Kn);
  }), l.bolts.forEach((y) => {
    if (f <= 3.5)
      for (let A = Math.floor(y.y / m); A <= (y.y + 24) / m; A++) for (let M = Math.floor(y.x / f); M <= (y.x + 11) / f; M++)
        Rc(Ou, (M + 0.5) * f - y.x, (A + 0.5) * m - y.y) && j(M, A, P.sun, 1, vr);
    else {
      const A = Math.round(y.x / f), M = Math.round(y.y / m);
      qu.forEach((R, de) => R.split("").forEach((G, ae) => {
        G === "#" && j(A + ae, M + de, P.sun, 1, vr);
      }));
    }
  }), { col: Y, ids: q };
}
function Vu(a, l) {
  const o = l.px, c = Math.max(6, Math.round(l.width / o)), f = Math.max(6, Math.round(l.height / o)), m = l.width / c, v = l.height / f, T = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, b = (O) => {
    const $ = Pc(O, l);
    return Wu($, Ic($, { clock: T, ambient: l.ambient, seed: l.seed }), c, f, m, v, T, l.ambient);
  }, P = b(a), ie = l.reveal == null ? 1 : Xn(l.reveal);
  let ne = P.col, I = P.ids;
  if (ie < 1) {
    const O = l.prev ? b(l.prev) : null, $ = ie * (c + 12);
    ne = new Array(c * f), I = new Uint8Array(c * f);
    for (let te = 0; te < c * f; te++) {
      const Y = te % c, q = te / c | 0;
      (l.reduce ? ie : Xn(($ - Y) / 12)) > $n(Y, q) ? (ne[te] = P.col[te], I[te] = P.ids[te]) : O ? (ne[te] = O.col[te], I[te] = O.ids[te]) : (ne[te] = null, I[te] = 255);
    }
  }
  return Bc(ne, I, c, f, { oneBit: l.oneBit, ink: l.ink, paper: l.paper, snowInk: !1 });
}
function zu(a, l, o) {
  const c = o.width, f = o.height, m = o.reveal == null ? 1 : Xn(o.reveal), v = (I, O) => {
    const $ = Pc(O, o);
    ju(I, $, Ic($, o));
  };
  if (a.clearRect(0, 0, c, f), m >= 1) {
    v(a, l);
    return;
  }
  if (o.prev && v(a, o.prev), o.reduce) {
    a.save(), a.globalAlpha = m, v(a, l), a.restore();
    return;
  }
  const T = a.canvas, b = T.__wxOff || (T.__wxOff = document.createElement("canvas"));
  (b.width !== T.width || b.height !== T.height) && (b.width = T.width, b.height = T.height);
  const P = b.getContext("2d");
  P.setTransform(a.getTransform()), P.clearRect(0, 0, c, f), v(P, l);
  const ie = m * (c + 64) - 64, ne = P.createLinearGradient(ie, 0, ie + 64, 0);
  ne.addColorStop(0, "rgba(0,0,0,1)"), ne.addColorStop(1, "rgba(0,0,0,0)"), P.globalCompositeOperation = "destination-in", P.fillStyle = ne, P.fillRect(0, 0, c, f), P.globalCompositeOperation = "source-over", a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.drawImage(b, 0, 0), a.restore();
}
function ju(a, l, o) {
  const { W: c, H: f, S: m, C: v, cw: T, yb: b, glowAt: P, soft: ie, tw: ne, sy: I } = l, O = (w, be) => {
    const Ce = zs(w);
    return "rgba(" + Ce[0] + "," + Ce[1] + "," + Ce[2] + "," + Math.max(0, Math.min(1, be)).toFixed(3) + ")";
  }, $ = (w, be) => {
    const Ce = a.createLinearGradient(0, 0, c, 0);
    Ce.addColorStop(0, w[0]);
    for (let Oe = 0; Oe < w.length - 1; Oe++) {
      const y = (Oe + be) * T, A = (y - ne / 2) / c, M = (y + ne / 2) / c;
      A > 0 && A < 1 && Ce.addColorStop(A, w[Oe]), M > 0 && M < 1 && Ce.addColorStop(M, w[Oe + 1]);
    }
    return Ce.addColorStop(1, w[w.length - 1]), Ce;
  }, te = Math.max(24, Math.ceil(c / 4)), Y = (w, be) => {
    a.beginPath();
    for (let Ce = 0; Ce <= te; Ce++) {
      const Oe = c * Ce / te, y = w == null ? 0 : b(Oe) + w;
      Ce ? a.lineTo(Oe, y) : a.moveTo(Oe, y);
    }
    for (let Ce = te; Ce >= 0; Ce--) {
      const Oe = c * Ce / te;
      a.lineTo(Oe, b(Oe) + be);
    }
    a.closePath(), a.fill();
  };
  a.save(), a.fillStyle = $(m.filter((w) => !w.night).map((w) => w.sky), 0.75), a.fillRect(0, 0, c, f);
  const q = a.createLinearGradient(0, 0, c, 0);
  for (let w = 0; w <= 64; w++) {
    const be = P(c * w / 64);
    q.addColorStop(w / 64, O(be.c, Math.min(1, be.a)));
  }
  a.fillStyle = q;
  for (let w = 0; w < 8; w++)
    a.globalAlpha = 1 - w / 8, Y(w * 2 * I, (w + 1) * 2 * I);
  a.fillStyle = $(m.filter((w) => w.night).map((w) => w.sky), 1.25);
  const X = Math.max(0.5, ie), j = 6;
  a.globalAlpha = 1, Y(null, -X);
  for (let w = 0; w < j; w++)
    a.globalAlpha = 1 - (w + 0.5) / j, Y(-X + 2 * X * w / j, -X + 2 * X * (w + 1) / j);
  a.globalAlpha = 1;
  const Z = new Path2D(Hu), Q = new Path2D(Iu), _ = new Path2D(Pu), V = new Path2D(Fu);
  a.fillStyle = v.star, o.stars.forEach((w) => {
    a.globalAlpha = w.o, w.big ? (a.save(), a.translate(w.x, w.y), a.scale(w.size, w.size), a.fill(Z), a.restore()) : (a.beginPath(), a.arc(w.x, w.y, 0.8, 0, Math.PI * 2), a.fill());
  }), a.globalAlpha = 1;
  const ge = zt(v.sun, "#ffffff", 0.55);
  o.suns.forEach((w) => {
    const be = a.createRadialGradient(w.x, w.y, 0, w.x, w.y, w.halo);
    be.addColorStop(0, O(ge, 0.42)), be.addColorStop(0.7, O(ge, 0)), a.fillStyle = be, a.beginPath(), a.arc(w.x, w.y, w.halo, 0, Math.PI * 2), a.fill();
    const Ce = a.createLinearGradient(0, w.y - w.rad, 0, w.y + w.rad);
    Ce.addColorStop(0.6, v.sun), Ce.addColorStop(1, v.sunEdge), a.fillStyle = Ce, a.beginPath(), a.arc(w.x, w.y, w.rad, 0, Math.PI * 2), a.fill();
  });
  const Te = zt(v.moon, "#ffffff", 0.6);
  o.moons.forEach((w) => {
    a.save(), a.translate(w.x - w.d / 2, w.y - w.d / 2), a.scale(w.d / 46, w.d / 46);
    const be = a.createLinearGradient(0, 6, 0, 40);
    be.addColorStop(0, Te), be.addColorStop(1, v.moon), a.fillStyle = be, a.fill(Q), a.restore();
  }), o.clouds.forEach((w) => {
    a.save(), a.globalAlpha = w.o, a.translate(w.x, w.y), a.scale(w.w / 46, w.h / 30.66), a.translate(-4, -9.67), a.fillStyle = w.fill, a.fill(_), a.restore();
  }), o.fogs.forEach((w) => {
    const be = a.createLinearGradient(w.x, 0, w.x + w.w, 0);
    be.addColorStop(0, O(w.c, 0)), be.addColorStop(0.25, O(w.c, w.a)), be.addColorStop(0.75, O(w.c, w.a)), be.addColorStop(1, O(w.c, 0)), a.fillStyle = be, a.fillRect(w.x, w.y, w.w, 6 * I);
  }), a.fillStyle = v.rain, o.drops.forEach((w) => {
    a.save(), a.globalAlpha = w.o, a.translate(w.x, w.y), a.rotate(12 * Math.PI / 180), a.fillRect(-1.5, 0, 3, 9), a.restore();
  }), a.fillStyle = v.snow, o.flakes.forEach((w) => {
    a.globalAlpha = w.o, a.beginPath(), a.arc(w.x, w.y, 2.2, 0, Math.PI * 2), a.fill();
  }), a.fillStyle = v.sun, o.bolts.forEach((w) => {
    a.save(), a.globalAlpha = w.o, a.translate(w.x, w.y), a.fill(V), a.restore();
  }), a.restore();
}
function Gu(a, l) {
  var Nd, Bd, Pd, Id, Hd, Fd, Od;
  const o = (e) => a.getElementById(e), c = o("workoutView"), f = o("workoutNameInput");
  let m = !0;
  const v = o("homeClock");
  function T() {
    v && (v.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  T(), setInterval(T, 15e3);
  const b = o("createFlow"), P = o("createMovementsSlot"), ie = o("createTimingSlot"), ne = o("createFinishSlot"), I = o("movementStepSummary"), O = o("timingStepSummary"), $ = o("finishStepSummary"), te = o("continueToTiming"), Y = o("continueToFinish"), q = o("finishMoveButton");
  let X = !1, j = [];
  function Z(e) {
    !e || j.some((i) => i.node === e) || j.push({ node: e, parent: e.parentNode, next: e.nextSibling });
  }
  function Q(e, i) {
    e && (Z(e), i.appendChild(e));
  }
  function _() {
    [...j].reverse().forEach(({ node: e, parent: i, next: s }) => {
      i && (s && s.parentNode === i ? i.insertBefore(e, s) : i.appendChild(e));
    }), j = [];
  }
  function V(e) {
    a.querySelectorAll(".createStep").forEach((i) => {
      i.classList.toggle("active", i.dataset.createStep === e);
    }), e === "timing" && (X = !0), ge();
  }
  function ge() {
    var oe, re;
    if (!st) return;
    Ue[ut];
    const e = Xe.filter((ee) => !ee.hidden), i = e.filter((ee) => ee.kind !== "rest").length, s = e.filter((ee) => ee.kind === "rest").length;
    I.textContent = i ? i + " movement" + (i === 1 ? "" : "s") + (s ? " · " + s + " rest" + (s === 1 ? "" : "s") : "") : "No movements yet";
    const u = i > 0, h = a.querySelector('[data-open-step="timing"]'), k = a.querySelector('[data-open-step="finish"]');
    h.disabled = !u, te.disabled = !u, O.textContent = u ? Xt(A.value) + " · " + Yt(M.value) + " movement · " + Yt(R.value) + " rest" : "Add a movement first", k.disabled = !(u && X);
    const D = ((f == null ? void 0 : f.value) || "").trim(), W = [];
    (oe = o("includeWarmupPreset")) != null && oe.checked && W.push("warm-up"), (re = o("includeCooldownPreset")) != null && re.checked && W.push("cooldown"), $.textContent = D ? D + (W.length ? " · " + W.join(" + ") : "") : W.length ? W.join(" + ") : "Name and optional extras";
  }
  function Te() {
    var Se, Ge, Ae;
    b.hidden = !1, X = !1;
    const e = a.querySelector(".editNameRow"), i = o("createMoveOptions"), s = a.querySelector(".timeTiles"), u = o("routineSummaryModal"), h = a.querySelector(".tempoRevealRow"), k = o("tempoExperiment"), D = (Se = o("warmupList")) == null ? void 0 : Se.closest("section"), W = o("movementCreatorLaunch"), oe = o("movementCreator"), re = (Ge = o("strengthList")) == null ? void 0 : Ge.closest("section"), ee = (Ae = o("cooldownList")) == null ? void 0 : Ae.closest("section");
    [i == null ? void 0 : i.querySelector(".createExtras"), D, W, oe, re, ee].forEach((Me) => Me && Q(Me, P)), [i, s, u, h, k].forEach((Me) => Q(Me, ie)), Q(e, ne), V("movements"), ge();
  }
  function w() {
    _(), b.hidden = !0, a.querySelectorAll(".createStep").forEach((e) => e.classList.remove("active"));
  }
  a.querySelectorAll("[data-open-step]").forEach((e) => e.addEventListener("click", () => {
    e.disabled || V(e.dataset.openStep);
  })), te.addEventListener("click", () => {
    te.disabled || V("timing");
  }), Y.addEventListener("click", () => V("finish")), q.addEventListener("click", () => o("saveWorkoutEdit").click());
  const be = { home: o("homeView"), workout: o("workoutView"), settings: o("settingsView") }, Ce = o("homeNav"), Oe = o("settingsNav");
  function y(e) {
    Object.entries(be).forEach(([i, s]) => s.classList.toggle("active", i === e)), Ce.classList.toggle("active", e === "home"), Oe.classList.toggle("active", e === "settings"), e === "home" && setTimeout(Vi, 400), e === "settings" && (requestAnimationFrame(() => Co(a.querySelector(".tab.active"), !1)), S());
  }
  const A = o("totalTime"), M = o("workTime"), R = o("restTime"), de = o("totalOut"), G = o("workOut"), ae = o("restOut"), le = o("totalFill"), me = o("workFill"), We = o("restFill"), et = o("roundsInput"), wt = o("roundsFill"), pn = o("roundsOut"), Bn = o("totalLabel"), It = o("routineSummaryModal"), $e = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let Mt = $e.map((e) => ({ ...e })), Xe = [
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
  const hn = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let yn = hn.map((e) => ({ ...e }));
  const Di = {
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
  }, rt = ao(l.data), Ue = rt.profiles;
  let ut = Ue[rt.selected] ? rt.selected : rt.order.find((e) => Ue[e]) || "kettlebell";
  function ao(e) {
    const i = e && typeof e == "object" ? JSON.parse(JSON.stringify(e)) : {}, s = i.profiles && Object.keys(i.profiles).length ? i.profiles : JSON.parse(JSON.stringify(Di)), u = (Array.isArray(i.order) ? i.order : Object.keys(s)).filter((h) => s[h]);
    return Object.keys(s).forEach((h) => {
      u.includes(h) || u.push(h);
    }), {
      v: 1,
      profiles: s,
      order: u,
      selected: i.selected || u[0],
      history: Array.isArray(i.history) ? i.history : [],
      checkins: (Array.isArray(i.checkins) ? i.checkins : Ri(i.energy)).map(ai),
      settings: { ...i.settings || {} }
    };
  }
  function Ri(e) {
    if (!Array.isArray(e)) return [];
    const i = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], s = [];
    return e.forEach((u) => {
      const h = new Date(u.at);
      if (isNaN(h)) return;
      const k = h.getFullYear() + "-" + String(h.getMonth() + 1).padStart(2, "0") + "-" + String(h.getDate()).padStart(2, "0"), D = h.getHours() < 14 ? "morning" : "evening";
      if (s.some((oe) => oe.date === k && oe.slot === D)) return;
      const W = i.indexOf(u.value) + 1;
      W > 0 && s.push({ date: k, slot: D, mood: null, energy: W, at: u.at });
    }), s;
  }
  function ai(e) {
    if (e.scale === 100) return e;
    const i = (s) => s == null ? null : Math.round((Number(s) - 1) / 5 * 100);
    return { ...e, mood: i(e.mood), energy: i(e.energy), scale: 100 };
  }
  function fn() {
    st || (rt.selected = ut, rt.order = rt.order.filter((e) => Ue[e] && e !== mt), l.save(rt));
  }
  function tt() {
    return rt.settings;
  }
  function Pn(e) {
    const i = Ue[e];
    if (!i) return;
    ut = e;
    const s = o("workoutNameInput");
    if (s && (s.value = i.name), A.value = i.total, M.value = i.work, R.value = i.rest, et.value = i.rounds || 1, i.customSequence) {
      const u = (i.sequence || []).map((k) => ({ ...k })), h = (k) => u.filter((D) => D.presetRole === k).map(({ presetRole: D, ...W }) => W);
      Mt = (i.warmup || h("warmup")).map((k) => ({ ...k })), yn = (i.cooldown || h("cooldown")).map((k) => ({ ...k })), Xe = u.filter((k) => !k.presetRole), oi(i.preset || "movement", !1);
    } else
      A.min = 3, A.max = 40, A.step = 1, M.min = 20, M.max = 60, M.step = 5, R.min = 5, R.max = 30, R.step = 5, Mt = (i.warmup || $e).map((u) => ({ ...u })), yn = (i.cooldown || hn).map((u) => ({ ...u })), Xe = i.strength.map((u) => Array.isArray(u) ? (([h, k, D, W = !1]) => ({ id: h, name: k, group: D, kind: "work", hidden: !!W }))(u) : { ...u });
    a.querySelectorAll(".workoutPanel[data-workout]").forEach((u) => u.classList.toggle("active", u.dataset.workout === e)), C();
  }
  function Ni(e, i, s) {
    const u = e.getBoundingClientRect(), h = u.width / 2, k = u.height / 2, D = i - h, W = s - k;
    let oe = 1 / 0, re = 1 / 0;
    D !== 0 && (oe = h / Math.abs(D)), W !== 0 && (re = k / Math.abs(W));
    const ee = Math.min(Math.max(1 / Math.min(oe, re), 0), 1);
    let J = Math.atan2(W, D) * (180 / Math.PI) + 90;
    return J < 0 && (J += 360), { edge: ee, angle: J };
  }
  function ft(e, i, s = !1) {
    const u = e.getBoundingClientRect(), h = i.clientX - u.left, k = i.clientY - u.top, { edge: D, angle: W } = Ni(e, h, k), oe = s ? 100 : D * 100;
    e.style.setProperty("--edge-proximity", oe.toFixed(3)), e.style.setProperty("--cursor-angle", W.toFixed(3) + "deg"), e.classList.toggle("borderGlowActive", s || oe >= 30);
  }
  function De(e) {
    e.addEventListener("pointermove", (s) => ft(e, s, !1)), e.addEventListener("pointerenter", (s) => ft(e, s, !1)), e.addEventListener("pointerdown", (s) => ft(e, s, !0));
    const i = () => {
      e.classList.remove("borderGlowActive"), e.style.setProperty("--edge-proximity", "0");
    };
    e.addEventListener("pointerleave", i), e.addEventListener("pointerup", i), e.addEventListener("pointercancel", i);
  }
  De(o("addWorkoutPanel"));
  let st = !1, mt = null;
  function Ie(e) {
    return String(e ?? "").replace(/[&<>"']/g, (i) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[i]);
  }
  function oo(e) {
    return e.summary ? e.summary : e.customSequence ? Xt(e.total) + " · custom move" : Xt(e.total) + " · " + Yt(e.work) + " / " + Yt(e.rest) + " · warm-up + cooldown";
  }
  function Po(e, i) {
    var k;
    const s = document.createElement("article");
    s.className = "workoutPanel", s.dataset.workout = e, s.tabIndex = 0;
    const u = i.activityCount ?? (((k = i.sequence) == null ? void 0 : k.length) || 0);
    s.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + Ie(i.name) + '</div><div class="sub">' + Ie(oo(i)) + '</div><span class="sourceTag">' + Ie(i.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (u ? u + " activities" + ((i.rounds || 1) > 1 ? " × " + i.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + Ie(i.name) + "</div></div>";
    const h = o("addWorkoutPanel");
    return o("workoutGallery").insertBefore(s, h), De(s), s.addEventListener("click", (D) => {
      D.target.closest("button") || Pn(e);
    }), s.addEventListener("keydown", (D) => {
      (D.key === "Enter" || D.key === " ") && !D.target.closest("button") && (D.preventDefault(), Pn(e));
    }), s.querySelector(".seeWorkoutBtn").addEventListener("click", (D) => {
      D.stopPropagation(), Pn(e), ss(!1);
    }), s.querySelector(".startWorkoutBtn").addEventListener("click", (D) => {
      D.stopPropagation(), Pn(e), ml();
    }), s;
  }
  function Bi() {
    a.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.remove()), rt.order.forEach((e) => {
      Ue[e] && Po(e, Ue[e]);
    }), a.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.classList.toggle("active", e.dataset.workout === ut));
  }
  Bi(), o("addWorkoutPanel").addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), o("addWorkoutPanel").click());
  }), o("addWorkoutPanel").addEventListener("click", () => {
    st = !0, mt = "custom-" + Date.now(), Ue[mt] = {
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
    }, Pn(mt), ss(!0);
  });
  let Re = [], Ve = 0, jt = 0, In = 1, vn = !1, Et = null, io = null, _t = !1, Qn = rt.settings.upcomingCount ?? "all", ro = "movement";
  function Gt(e, i, s) {
    return (Number(e) - i) / (s - i) * 100;
  }
  function Yt(e) {
    const i = Math.max(0, Number(e) || 0);
    return i >= 3600 && i % 3600 === 0 ? i / 3600 + " hr" : i >= 60 && i % 60 === 0 ? i / 60 + " min" : i >= 60 ? Math.round(i / 60) + " min" : Math.round(i) + " sec";
  }
  function Xt(e) {
    const i = Math.max(0, Number(e) || 0);
    return i >= 60 && i % 60 === 0 ? i / 60 + " hr" : i >= 60 ? Math.floor(i / 60) + " hr " + i % 60 + " min" : i + " min";
  }
  function Ut() {
    le.style.width = Gt(A.value, Number(A.min), Number(A.max)) + "%", me.style.width = Gt(M.value, Number(M.min), Number(M.max)) + "%", We.style.width = Gt(R.value, Number(R.min), Number(R.max)) + "%", G.textContent = Yt(M.value), ae.textContent = Yt(R.value);
    const e = Number(et.value) || 1;
    wt.style.width = Gt(e, 1, 10) + "%", Bn.textContent = e > 1 ? "Time per round" : "Total time";
  }
  function ea(e) {
    return e.filter((i) => !i.hidden);
  }
  function gt(e) {
    const i = Math.max(0, Math.round(Number(e) || 0)), s = Math.floor(i / 3600), u = Math.floor(i % 3600 / 60), h = i % 60;
    return (s ? s + ":" + String(u).padStart(2, "0") : u) + ":" + String(h).padStart(2, "0");
  }
  function da(e) {
    let i;
    try {
      i = new URL(String(e || "").trim());
    } catch {
      return null;
    }
    const s = i.hostname.replace(/^(www|m|music)\./, "");
    let u = null;
    if (s === "youtu.be") u = i.pathname.slice(1).split("/")[0];
    else if (/^youtube(-nocookie)?\.com$/.test(s))
      if (i.pathname === "/watch") u = i.searchParams.get("v");
      else {
        const W = i.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        W && (u = W[2]);
      }
    if (!u || !/^[\w-]{11}$/.test(u)) return null;
    const h = (W) => {
      if (!W) return 0;
      if (/^\d+$/.test(W)) return Number(W);
      const oe = W.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return oe ? (Number(oe[1]) || 0) * 3600 + (Number(oe[2]) || 0) * 60 + (Number(oe[3]) || 0) : 0;
    }, k = h(i.searchParams.get("t") || i.searchParams.get("start")), D = h(i.searchParams.get("end"));
    return { id: u, start: k, end: D > k ? D : null };
  }
  function Qt(e, i) {
    if (e.useVideoLength === !1) return Math.max(5, Number(e.duration) || i || 300);
    const s = Number(e.start) || 0, u = Number(e.end) || Number(e.videoDuration) || 0;
    return u > s ? Math.round(u - s) : Number(e.duration) || 300;
  }
  function Pa(e, i) {
    const s = Math.max(0, Number(e) || 0);
    return Math.round(i === "hour" ? s * 3600 : i === "min" ? s * 60 : s);
  }
  function oi(e, i = !0) {
    ro = e, a.querySelectorAll(".createPresetBtn").forEach((u) => u.classList.toggle("active", u.dataset.movePreset === e));
    const s = Ue[ut];
    s && (s.preset = e), e === "work" ? (A.min = 30, A.max = 480, A.step = 30, M.min = 300, M.max = 7200, M.step = 300, R.min = 60, R.max = 1800, R.step = 60, i && (A.value = 60, M.value = 1500, R.value = 300), o("addMovementUnit").value = "min", o("addMovementDuration").value = 25, o("addRestUnit").value = "min", o("addRestDuration").value = 5) : (A.min = 3, A.max = 40, A.step = 1, M.min = 20, M.max = 60, M.step = 5, R.min = 5, R.max = 30, R.step = 5, i && (A.value = 20, M.value = 45, R.value = 15), o("addMovementUnit").value = "sec", o("addMovementDuration").value = 45, o("addRestUnit").value = "sec", o("addRestDuration").value = 30), Ut();
  }
  function Ia(e, i) {
    const s = ro === "work";
    return e.map((u, h) => ({ ...u, id: i + "-" + h + "-" + Date.now().toString(36), useGlobalTiming: !s, duration: s ? 60 : Number(M.value) }));
  }
  function so() {
    const e = Ue[ut];
    e != null && e.customSequence && (e.includeWarmup = o("includeWarmupPreset").checked, e.includeCooldown = o("includeCooldownPreset").checked, e.includeWarmup && !Mt.length && (Mt = Ia($e, "warm")), e.includeCooldown && !yn.length && (yn = Ia(hn, "cool")), C());
  }
  function L() {
    const e = o("upcomingCountSetting");
    if (!e) return;
    const i = Math.max(1, Re.length - 1), s = Qn;
    e.innerHTML = "";
    for (let k = 1; k <= i; k++) {
      const D = document.createElement("option");
      D.value = String(k), D.textContent = String(k), e.appendChild(D);
    }
    const u = document.createElement("option");
    u.value = "all", u.textContent = "All", e.appendChild(u);
    const h = s === "all" ? "all" : String(Math.min(Number(s) || 1, i));
    e.value = h, Qn = h === "all" ? "all" : Number(h);
  }
  function C() {
    Number(A.value) * 60;
    const e = Number(M.value), i = Number(R.value), s = Ue[ut], u = !!(s != null && s.customSequence), h = (u ? !s.includeWarmup : s != null && s.warmupOff) ? [] : ea(Mt), k = ea(Xe), D = u && !s.includeCooldown ? [] : ea(yn);
    if (s && (s.total = Number(A.value), s.work = e, s.rest = i, s.rounds = Number(et.value) || 1, s.customSequence ? (s.sequence = Xe.map((ke) => ({ ...ke })), s.warmup = Mt.map((ke) => ({ ...ke })), s.cooldown = yn.map((ke) => ({ ...ke }))) : (s.strength = Xe.map((ke) => ({ ...ke })), s.warmup = Mt.map((ke) => ({ ...ke })), s.cooldown = yn.map((ke) => ({ ...ke })))), s != null && s.customSequence) {
      const ke = [...h.map((ot) => ({ ...ot, section: "warmup" })), ...k, ...D.map((ot) => ({ ...ot, section: "cooldown" }))].map((ot) => {
        if (ot.kind === "video") return { ...ot, duration: Qt(ot, e), rest: 0 };
        if (ot.kind === "rest") {
          const ln = ot.useGlobalTiming === !0 ? i : Number(ot.duration) || i;
          return { ...ot, duration: ln, rest: 0 };
        }
        const sn = ot.useGlobalTiming === !1 && Number(ot.duration) || e;
        return { ...ot, duration: sn, rest: 0 };
      });
      s.autoRest && Number(s.autoRestDuration) > 0 ? (Re = [], ke.forEach((ot, sn) => {
        Re.push(ot);
        const ln = ke[sn + 1];
        ot.kind !== "rest" && ln && ln.kind !== "rest" && Re.push({
          id: "auto-rest-" + sn,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(s.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : Re = ke;
    } else
      Re = [...h.map((ke) => ({ ...ke, section: "warmup" })), ...k, ...D.map((ke) => ({ ...ke, section: "cooldown" }))].map((ke) => ke.kind === "video" ? { ...ke, duration: Qt(ke, e), rest: 0 } : ke.kind === "rest" ? { ...ke, duration: ke.useGlobalTiming === !0 ? i : Number(ke.duration) || i, rest: 0 } : { ...ke, duration: ke.useGlobalTiming === !1 && Number(ke.duration) || e, rest: i }), Re.forEach((ke, ot) => {
        var sn;
        ((sn = Re[ot + 1]) == null ? void 0 : sn.kind) === "rest" && (ke.rest = 0);
      }), Re.length && (Re[Re.length - 1].rest = 0);
    const W = Math.max(1, Math.min(10, Number(et.value) || 1)), oe = Re, re = (ke) => W <= 1 ? null : ke.section === "warmup" || ke.presetRole === "warmup" ? "first" : ke.section === "cooldown" || ke.presetRole === "cooldown" ? "last" : ke.kind === "video" && (ke.videoRounds === "first" || ke.videoRounds === "last") ? ke.videoRounds : null, ee = (ke) => !!re(ke), J = oe.filter((ke) => !ee(ke)), Se = oe.filter(ee), Ge = J.length, Ae = J.reduce((ke, ot) => ke + ot.duration + ot.rest, 0), Me = Se.reduce((ke, ot) => ke + ot.duration + ot.rest, 0), xe = [
      Se.some((ke) => ke.section === "warmup" || ke.presetRole === "warmup") && "warm-up",
      Se.some((ke) => ke.section === "cooldown" || ke.presetRole === "cooldown") && "cooldown",
      Se.some((ke) => ke.kind === "video" && !ke.section && !ke.presetRole) && "video"
    ].filter(Boolean), lt = xe.length > 1 ? xe.slice(0, -1).join(", ") + " & " + xe[xe.length - 1] : xe[0] || "";
    Re = [];
    const dt = (ke, ot) => {
      const sn = re(ke);
      return !sn || (sn === "first" ? ot === 1 : ot === W);
    };
    for (let ke = 1; ke <= W; ke++)
      if (oe.filter((ot) => dt(ot, ke)).forEach((ot, sn) => Re.push({ ...ot, id: ot.id + (W > 1 ? "-r" + ke : ""), round: ke, roundIndex: sn })), ke < W && Ge)
        if (s != null && s.customSequence)
          Re.push({ id: "round-break-" + ke, name: "Rest", group: "Round " + (ke + 1) + " next", kind: "rest", hidden: !1, duration: i, rest: 0, round: ke, roundIndex: Ge, roundBreak: !0 });
        else {
          const ot = Re[Re.length - 1];
          ot.rest = i, ot.roundBreakAfter = !0;
        }
    Ut();
    const _e = Re.reduce((ke, ot) => ke + ot.duration + ot.rest, 0), ct = Math.round(Ae / 60), yt = Math.round(_e / 60), at = W > 1 ? Xt(ct) + " × " + W + " rounds" + (Me ? " + " + Yt(Me) + " " + lt : "") + " (" + Xt(yt) + ")" : Xt(yt), Ke = [h.length ? "warm-up" : "", D.length ? "cooldown" : ""].filter(Boolean), an = s != null && s.customSequence ? at + " · " + Ge + " items" + (Ke.length && !(W > 1 && Me) ? " · " + Ke.join(" + ") : "") : at + " · " + Yt(e) + " / " + Yt(i) + (Ke.length && !(W > 1 && Me) ? " · " + Ke.join(" + ") : "");
    de.textContent = Yt(Ae);
    const xn = Re.filter((ke) => !ke.roundBreak).length, Pt = W > 1 ? xn + " activities · " + W + " rounds" : Ge + " activities";
    pn.textContent = W > 1 ? W + " rounds · " + Xt(yt) + " total" : "1 round", o("roundsCount").textContent = W, a.querySelectorAll("[data-rounds-step]").forEach((ke) => {
      ke.disabled = Number(ke.dataset.roundsStep) < 0 ? W <= 1 : W >= 10;
    }), s && (s.summary = an, s.activityCount = Ge);
    const Jo = a.querySelector(".workoutPanel.active .sub");
    Jo && (Jo.textContent = an), It.textContent = an, wr(), a.querySelectorAll(".workoutPanel.active .activityCount").forEach((ke) => ke.textContent = Pt), Ut(), Be(), Cr(), Ta(), L(), st && ge(), be.workout.classList.contains("active") && !Et && er();
  }
  const B = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', K = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', pe = {
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
  }, fe = (e) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (pe[e] || "") + "</svg>";
  a.querySelectorAll("[data-icon]").forEach((e) => {
    e.innerHTML = fe(e.dataset.icon);
  });
  let ce = null, ve = null;
  function we(e) {
    return e = Math.max(1, Number(e) || 0), e >= 3600 && e % 3600 === 0 ? { value: e / 3600, unit: "hour" } : e >= 60 && e % 60 === 0 ? { value: e / 60, unit: "min" } : { value: e, unit: "sec" };
  }
  function Pe(e = !1) {
    const i = a.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    i && (i.focus({ preventScroll: !0 }), e && i.select());
  }
  function ze(e, i, s = {}) {
    const u = e.kind === "rest", h = e.kind === "video", k = h ? e.useVideoLength !== !1 : u ? e.useGlobalTiming === !0 : e.useGlobalTiming !== !1, D = Number(u ? R.value : M.value), W = we(h ? e.useVideoLength === !1 ? e.duration : Qt({ ...e, useVideoLength: !0 }) : k ? D : e.duration || D), oe = h && (Number(e.videoDuration) > 0 || Number(e.end) > 0), re = h ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + Ie(e.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Ie(e.autoName ? "" : e.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([_e, ct]) => '<option value="' + _e + '"' + ((e.videoRounds || "every") === _e ? " selected" : "") + ">" + ct + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Ie(e.name) + '" placeholder="' + (u ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + Ie(e.group) + '" placeholder="' + (u ? "Rest" : "e.g. Glutes + legs") + '"></label>', ee = h ? "Play the whole " + (Number(e.start) > 0 || Number(e.end) > 0 ? "clip" : "video") + (oe ? " · " + gt(Qt({ ...e, useVideoLength: !0 })) : "") : "Use global timing · " + Yt(D), J = document.createElement("div");
    J.className = "moveRow editing" + (s.sheet ? " inSheet" : ""), J.dataset.index = i, J.dataset.id = e.id;
    const Se = s.isNew ?? (ve == null ? void 0 : ve.item) === e, Ge = s.sheet ? '<div class="moveEditActions sheetActions">' + (Se ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (e.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + Ie(e.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (Se ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    J.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (h ? " videoFields" : "") + '">' + re + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (k ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + Ie(ee) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + W.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((_e) => '<option value="' + _e + '"' + (_e === W.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[_e] + "</option>").join("") + "</select></div></div>" + Ge + "</div>";
    const Ae = (_e) => J.querySelector("[data-f=" + _e + "]"), Me = () => {
      const _e = Ae("global").checked;
      Ae("dur").disabled = _e, Ae("unit").disabled = _e, J.querySelector(".creatorDurationRow").classList.toggle("isDisabled", _e);
    };
    Ae("global").addEventListener("change", Me), Me();
    const xe = () => {
      var _e;
      if (s.sheet) {
        (_e = s.onCancel) == null || _e.call(s);
        return;
      }
      Se && nt(), ce = null, C();
    }, lt = () => {
      var yt;
      if (h) {
        dt();
        return;
      }
      const _e = Ae("name").value.trim();
      if (!_e) {
        Ae("name").focus();
        return;
      }
      e.name = _e, e.group = Ae("group").value.trim() || (u ? "Rest" : "Movement");
      const ct = Ae("global").checked;
      if (e.useGlobalTiming = ct, ct || (e.duration = Math.max(u ? 5 : 1, Pa(Ae("dur").value, Ae("unit").value))), s.sheet) {
        (yt = s.onSaved) == null || yt.call(s);
        return;
      }
      Se && (ve = null), ce = null, C(), Lt(Se ? u ? "Rest added" : "Movement added" : "Movement updated");
    }, dt = () => {
      var Ke;
      const _e = Ae("url").value.trim(), ct = da(_e);
      if (!ct) {
        Ae("urlError").hidden = !1, Ae("url").classList.add("invalid"), Ae("url").focus();
        return;
      }
      const yt = ct.id !== e.videoId;
      e.url = _e, e.videoId = ct.id, e.start = ct.start, e.end = ct.end, yt && (e.videoDuration = null, e.videoError = null);
      const at = Ae("name").value.trim();
      e.autoName = !at, e.name = at || (yt ? "" : e.name) || e.videoTitle || "YouTube video", e.group = "Video", e.videoRounds = Ae("rounds").value, e.useVideoLength = Ae("global").checked, e.useVideoLength || (e.duration = Math.max(5, Pa(Ae("dur").value, Ae("unit").value))), s.sheet ? (Ke = s.onSaved) == null || Ke.call(s) : (Se && (ve = null), ce = null, C(), Lt(Se ? "Video added" : "Video updated")), (yt || !e.videoDuration || e.autoName && !e.videoTitle) && or(e);
    };
    if (h && Ae("url").addEventListener("input", () => {
      Ae("urlError").hidden = !0, Ae("url").classList.remove("invalid");
    }), J.querySelector("[data-a=cancel]").addEventListener("click", xe), J.querySelector("[data-a=save]").addEventListener("click", lt), s.sheet && !Se) {
      J.querySelector("[data-a=hide]").addEventListener("click", () => {
        var ct;
        return (ct = s.onHide) == null ? void 0 : ct.call(s);
      });
      const _e = J.querySelector("[data-a=remove]");
      Ko(_e, _e.querySelector(".removeFill"), 1200, () => {
        var ct;
        return (ct = s.onRemove) == null ? void 0 : ct.call(s);
      });
    }
    return J.addEventListener("keydown", (_e) => {
      _e.key === "Escape" && (_e.preventDefault(), _e.stopPropagation(), xe()), _e.key === "Enter" && _e.target.matches("input") && (_e.preventDefault(), lt());
    }), J;
  }
  function je(e, i) {
    const s = o(i);
    s.innerHTML = "", e.forEach((u, h) => {
      if (u === ce && !na()) {
        s.appendChild(ze(u, h));
        return;
      }
      const k = document.createElement("div");
      k.className = "moveRow" + (u.hidden ? " hidden" : "") + (u.kind === "rest" ? " restItem" : "") + (u.kind === "video" ? " videoItem" : "") + (n(u) ? " noMeta" : ""), k.dataset.index = h, k.dataset.id = u.id;
      const D = u.kind === "rest" ? u.useGlobalTiming === !0 ? "Global timing" : Yt(u.duration) : u.useGlobalTiming === !1 ? Yt(u.duration) : "Global timing", W = u.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", oe = u.kind === "video" ? u.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (u.useVideoLength === !1 ? "stops after " + Yt(u.duration) : Number(u.videoDuration) > 0 || Number(u.end) > 0 ? gt(Qt(u)) : "plays to the end") + (u.videoRounds === "first" ? " · first round only" : u.videoRounds === "last" ? " · last round only" : "") : u.group + " · " + D, re = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + Ie(u.name) + '. Drag, or use the up and down arrow keys">' + B + "</button>", ee = '<div class="moveText"><div class="moveItemName">' + Ie(u.name) + W + '</div><div class="moveMeta">' + Ie(oe) + "</div></div>", J = (Ae) => Ae.addEventListener("keydown", (Me) => {
        var dt, _e;
        if (Me.key !== "ArrowUp" && Me.key !== "ArrowDown") return;
        Me.preventDefault();
        const xe = e.indexOf(u), lt = xe + (Me.key === "ArrowUp" ? -1 : 1);
        lt < 0 || lt >= e.length || (e.splice(xe, 1), e.splice(lt, 0, u), C(), (_e = (dt = o(i).children[lt]) == null ? void 0 : dt.querySelector(".dragHandle")) == null || _e.focus());
      });
      if (na()) {
        k.classList.add("phoneRow"), k.tabIndex = 0, k.setAttribute("role", "button"), k.setAttribute("aria-label", "Edit " + (u.name || "step")), k.innerHTML = re + ee + '<span class="rowChevron" aria-hidden="true">›</span>';
        const Ae = k.querySelector(".dragHandle");
        Ae.addEventListener("pointerdown", (Me) => Ze(Me, k, s, e)), J(Ae), k.addEventListener("click", (Me) => {
          Me.target.closest(".dragHandle") || uo(u, e);
        }), k.addEventListener("keydown", (Me) => {
          Me.key === "Enter" && Me.target === k && (Me.preventDefault(), uo(u, e));
        }), s.appendChild(k);
        return;
      }
      k.innerHTML = re + ee + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + Ie(u.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (u.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + Ie(u.name) + '"><span class="removeFill"></span><span class="removeLabel">' + K + "</span></button></div>", k.querySelector(".editBtn").addEventListener("click", () => {
        nt(), ce = u, C(), Pe();
      }), k.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        u.hidden = !u.hidden, C();
      });
      const Se = k.querySelector(".removeBtn");
      Ko(Se, Se.querySelector(".removeFill"), 1200, () => {
        const Ae = e.indexOf(u);
        Ae < 0 || (e.splice(Ae, 1), C(), Lt("Removed " + u.name, { label: "Undo", run: () => {
          e.splice(Math.min(Ae, e.length), 0, u), C();
        } }));
      });
      const Ge = k.querySelector(".dragHandle");
      Ge.addEventListener("pointerdown", (Ae) => Ze(Ae, k, s, e)), J(Ge), s.appendChild(k);
    });
  }
  const qe = () => {
    var e;
    return (e = window.matchMedia) == null ? void 0 : e.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, Ee = (e) => {
    var i;
    try {
      (i = navigator.vibrate) == null || i.call(navigator, e);
    } catch {
    }
  };
  function Ze(e, i, s, u) {
    if (e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const h = e.currentTarget, k = e.pointerId, D = !qe();
    try {
      h.setPointerCapture(k);
    } catch {
    }
    const W = i.closest(".exerciseScroller") || Tn(i), oe = s.style.position;
    s.style.position = "relative";
    const re = [...s.children].filter((it) => it.classList.contains("moveRow")), ee = re.indexOf(i), J = parseFloat(getComputedStyle(s).rowGap) || 8, Se = i.offsetHeight, Ge = Se + J, Ae = re.map((it) => it.offsetTop), Me = re.map((it) => it.offsetHeight), xe = () => s.getBoundingClientRect().top, lt = s.getBoundingClientRect().width, dt = e.clientY - (xe() + Ae[ee]), _e = e.clientX;
    let ct = e.clientY, yt = e.clientX, at = xe() + Ae[ee], Ke = 0, an = 0, xn = 0, Pt = 1, Jo = 0, ke = ee, ot = !1, sn = 0, ln = !1, Es = !1, dr = Ae[ee];
    s.classList.add("reordering"), i.classList.add("dragging"), i.style.transition = "none", Ee(8);
    const Ds = () => {
      const it = ct - dt + Se / 2 - xe();
      let bt = 0;
      return re.forEach((Rt, jn) => {
        jn !== ee && it > Ae[jn] + Me[jn] / 2 && bt++;
      }), bt;
    }, Rs = () => {
      re.forEach((it, bt) => {
        if (bt === ee) return;
        const Rt = ee < ke && bt > ee && bt <= ke ? -Ge : ee > ke && bt >= ke && bt < ee ? Ge : 0;
        it.style.transform = Rt ? "translateY(" + Rt + "px)" : "";
      });
    }, Kr = () => {
      const it = s.getBoundingClientRect(), bt = Math.abs(yt - _e) > Math.max(80, lt * 0.3) || yt < it.left - 24 || yt > it.right + 24;
      bt !== ot && (ot = bt, i.classList.toggle("willReturn", bt), Ee(bt ? 10 : 4));
      const Rt = ot ? ee : Ds();
      Rt !== ke && (ke = Rt, Rs(), ot || Ee(4));
    }, Qo = () => {
      if (ke === ee) return Ae[ee];
      const it = re.filter((Rt, jn) => jn !== ee);
      let bt = Ae[0];
      for (let Rt = 0; Rt < ke; Rt++) bt += it[Rt].offsetHeight + J;
      return bt;
    }, cr = () => {
      const it = D ? Math.min(Math.abs(Ke) / 40, 1) : 0, bt = D && !ln ? Math.max(-3, Math.min(3, xn * 0.6)) : 0;
      i.style.transform = "translate(" + an.toFixed(2) + "px," + (at - (xe() + Ae[ee])).toFixed(2) + "px) rotate(" + bt.toFixed(2) + "deg) scale(" + (Pt * (1 - 0.04 * it)).toFixed(4) + "," + (Pt * (1 + 0.06 * it)).toFixed(4) + ")";
    }, Qe = () => {
      sn = requestAnimationFrame(Qe);
      const it = yt - _e, bt = ln ? xe() + dr : ct - dt, Rt = ln ? 0 : ot ? it * 0.9 : Math.max(-22, Math.min(22, it * 0.22)), jn = ln ? 1 : ot ? 0.97 : 1.035;
      if (!D) {
        at = bt, an = ln ? 0 : Rt, Pt = 1, cr(), ln && Ot();
        return;
      }
      const xu = ln ? 0.24 : 0.2, yu = ln ? 0.62 : 0.68;
      Ke = (Ke + (bt - at) * xu) * yu, at += Ke, xn = (xn + (Rt - an) * 0.16) * 0.7, an += xn, Jo = (Jo + (jn - Pt) * 0.22) * 0.6, Pt += Jo, cr(), ln && Math.abs(Ke) < 0.15 && Math.abs(bt - at) < 0.5 && Math.abs(an) < 0.5 && Math.abs(Pt - 1) < 3e-3 && Ot();
    }, St = setInterval(() => {
      if (!W || ln) return;
      const it = W.getBoundingClientRect(), bt = 56, Rt = ct < it.top + bt ? -10 : ct > it.bottom - bt ? 10 : 0;
      Rt && (W.scrollTop += Rt, Kr());
    }, 30);
    function Ot() {
      if (Es) return;
      Es = !0, cancelAnimationFrame(sn);
      const it = ke !== ee, bt = i.dataset.id;
      if (s.classList.remove("reordering"), re.forEach((jn) => {
        jn.style.transition = "none", jn.style.transform = "";
      }), i.classList.remove("dragging", "willReturn"), s.style.position = oe, it) {
        const [jn] = u.splice(ee, 1);
        u.splice(ke, 0, jn);
      }
      C();
      const Rt = bt && s.querySelector('.moveRow[data-id="' + bt + '"]');
      Rt && D && Rt.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), it && Lt("Order saved");
    }
    const dn = (it) => {
      if (it.pointerId === k) {
        if (it.pointerType === "mouse" && it.buttons === 0) {
          fa();
          return;
        }
        ct = it.clientY, yt = it.clientX, Kr();
      }
    }, zn = (it) => {
      it.pointerId === k && fa();
    };
    function fa() {
      ln || (window.removeEventListener("pointermove", dn, !0), window.removeEventListener("pointerup", zn, !0), window.removeEventListener("pointercancel", zn, !0), h.removeEventListener("lostpointercapture", fa), clearInterval(St), ot && ke !== ee && (ke = ee, Rs()), dr = Qo(), ln = !0, Ee(6), setTimeout(Ot, 800));
    }
    window.addEventListener("pointermove", dn, !0), window.addEventListener("pointerup", zn, !0), window.addEventListener("pointercancel", zn, !0), h.addEventListener("lostpointercapture", fa), sn = requestAnimationFrame(Qe), cr();
  }
  function Be() {
    var h, k, D, W;
    const e = Ue[ut], i = (h = o("warmupList")) == null ? void 0 : h.closest("section"), s = (k = o("cooldownList")) == null ? void 0 : k.closest("section"), u = (W = (D = o("strengthList")) == null ? void 0 : D.closest("section")) == null ? void 0 : W.querySelector(".sectionTitle");
    e != null && e.customSequence ? (i && (i.hidden = !e.includeWarmup), s && (s.hidden = !e.includeCooldown), u && (u.textContent = "Move sequence")) : (i && (i.hidden = !!(e != null && e.warmupOff)), s && (s.hidden = !1), u && (u.textContent = "Kettlebell work")), je(Mt, "warmupList"), je(Xe, "strengthList"), je(yn, "cooldownList");
  }
  function nt() {
    if (!ve) return;
    const { item: e, arr: i } = ve;
    ve = null;
    const s = i.indexOf(e);
    s >= 0 && i.splice(s, 1), ce === e && (ce = null);
  }
  function pt(e) {
    return e.id === "warmupList" ? { arr: Mt, kind: "warmup", group: "Warm-up" } : e.id === "cooldownList" ? { arr: yn, kind: "cooldown", group: "Cooldown" } : { arr: Xe, kind: "work", group: "" };
  }
  function Nt(e, i) {
    const s = pt(i), u = Date.now().toString(36);
    return e === "video" ? { id: "video-" + u, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : e === "rest" ? { id: "rest-" + u, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(R.value) } : { id: "movement-" + u, name: "", group: s.group, kind: s.kind, hidden: !1, useGlobalTiming: !0, duration: Number(M.value) };
  }
  const Ct = "cubic-bezier(.34,1.46,.64,1)";
  function Zt(e, i) {
    if (qe() || !e) {
      i();
      return;
    }
    const s = (k) => {
      var D;
      return ((D = k.dataset) == null ? void 0 : D.id) || k;
    }, u = () => [...e.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], h = new Map(u().map((k) => [s(k), k.getBoundingClientRect().top]));
    i(), u().forEach((k) => {
      const D = h.get(s(k));
      if (D === void 0) return;
      const W = D - k.getBoundingClientRect().top;
      Math.abs(W) < 0.5 || k.animate([{ transform: "translateY(" + W + "px)" }, { transform: "none" }], { duration: 440, easing: Ct });
    });
  }
  function Kt(e, i) {
    if (!e || qe()) return;
    const s = e.offsetHeight, u = Math.max(0, s - (i || 0));
    e.animate([{ clipPath: "inset(0 0 " + u + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: Ct });
  }
  function ta(e, i, s, u) {
    const { arr: h } = pt(i), k = Nt(e, i);
    h.splice(Math.max(0, Math.min(s, h.length)), 0, k), ve = { item: k, arr: h }, ce = k, Zt(i.closest(".exerciseScroller,.createStepSlot") || i, () => C());
    const D = i.querySelector(".moveRow.editing");
    return Kt(D, u), Pe(e === "rest"), D;
  }
  function Tn(e) {
    for (let i = e; i && i.nodeType === 1; i = i.parentElement) {
      const s = getComputedStyle(i).overflowY;
      if (/(auto|scroll)/.test(s) && i.scrollHeight > i.clientHeight) return i;
    }
    return null;
  }
  const ii = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function on(e, i) {
    const s = document.createElement("div");
    return s.className = "addGhost" + (e === "movement" ? "" : " rest"), s.innerHTML = '<span class="addGhostGrip">' + B + '</span><span class="addGhostText"><strong>' + Ie(i[0]) + "</strong><small>" + Ie(i[1]) + "</small></span>", o("workoutModal").appendChild(s), s;
  }
  function Sa(e) {
    e.classList.add("leaving"), setTimeout(() => e.remove(), 180);
  }
  function lo(e, i, s, u) {
    (ce || ve) && (nt(), ce = null, C());
    const h = e.getBoundingClientRect(), k = on(i, ii[i]);
    k.setAttribute("aria-hidden", "true"), k.style.width = h.width + "px", k.style.height = h.height + "px", k.style.transform = "translate(" + h.left + "px," + h.top + "px)", e.classList.add("lifting");
    const D = Tn(e);
    return ri({
      ghost: k,
      origin: h,
      sx: s,
      sy: u,
      scroller: D,
      column: e.closest(".exerciseScroller,.createFlow") || D,
      home: () => e.getBoundingClientRect(),
      onDrop: (W, oe, re) => {
        Sa(k), e.classList.remove("lifting"), ta(i, W, oe, re);
      },
      onReturn: () => {
        Sa(k), e.classList.remove("lifting");
      }
    });
  }
  function ri({ ghost: e, origin: i, sx: s, sy: u, scroller: h, column: k, home: D, onDrop: W, onReturn: oe, rowLook: re = !1 }) {
    var cr;
    const ee = !qe(), J = ((cr = a.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : cr.offsetHeight) || 80, Se = s - i.left, Ge = u - i.top, Ae = 44;
    let Me = s, xe = u, lt = i.left, dt = i.top, _e = 0, ct = 0, yt = !ee, at = null, Ke = null, an = -1, xn = 0, Pt = null;
    const Jo = () => ["warmupList", "strengthList", "cooldownList"].map((Qe) => o(Qe)).filter((Qe) => Qe && Qe.getClientRects().length && !Qe.closest("[hidden]")), ke = (Qe) => {
      if (Qe === at) return;
      at = Qe, e.classList.toggle("overList", !!Qe || re);
      const St = Qe ? Qe.getBoundingClientRect().width : i.width;
      e.style.width = St + "px", e.style.height = (Qe ? J : i.height) + "px";
    }, ot = (Qe) => {
      Qe.classList.add("leaving"), Qe.style.height = "0px", Qe.style.marginTop = "-8px", setTimeout(() => Qe.remove(), ee ? 320 : 0);
    }, sn = (Qe, St, Ot) => {
      if (Ke && Ke.parentNode === Qe && an === Ot || (Ke && (ot(Ke), Ke = null, an = -1), !Qe)) return;
      const dn = document.createElement("div");
      dn.className = "dropSlot", Qe.insertBefore(dn, St), Ke = dn, an = Ot, dn.getBoundingClientRect(), dn.style.height = J + "px", dn.style.marginTop = "0px";
    }, ln = () => {
      let Qe = null, St = 1 / 0;
      for (const fa of Jo()) {
        const it = fa.getBoundingClientRect();
        if (Me < it.left - 48 || Me > it.right + 48) continue;
        const bt = it.top - 28, Rt = it.bottom + 28, jn = xe < bt ? bt - xe : xe > Rt ? xe - Rt : 0;
        jn < St && (St = jn, Qe = fa);
      }
      const Ot = k == null ? void 0 : k.getBoundingClientRect(), zn = Ot && Me >= Ot.left && Me <= Ot.right && xe >= Ot.top && xe <= Ot.bottom || St === 0 ? Qe : null;
      if (zn) {
        const fa = [...zn.children].filter((bt) => bt.classList.contains("moveRow"));
        let it = fa.findIndex((bt) => {
          const Rt = bt.getBoundingClientRect();
          return xe < Rt.top + Rt.height / 2;
        });
        it < 0 && (it = fa.length), sn(zn, fa[it] || null, it);
      } else sn(null);
      ke(zn);
    }, Es = () => {
      if (Pt) return Pt.aim();
      if (at) {
        const Qe = at.getBoundingClientRect();
        let St = xe - J / 2;
        return Ke && (St = St * 0.6 + Ke.getBoundingClientRect().top * 0.4), { x: Qe.left, y: St };
      }
      return { x: Me - Se, y: xe - Ge };
    }, dr = (Qe, St, Ot, dn) => {
      e.style.transform = "translate(" + lt + "px," + dt + "px) rotate(" + Qe + "deg) rotate(" + St + "rad) scale(" + Ot + "," + dn + ") rotate(" + -St + "rad)";
    }, Ds = () => {
      if (xn = requestAnimationFrame(Ds), !yt) {
        const it = Me - s, bt = xe - u, Rt = Math.min(Math.hypot(it, bt) / Ae, 1);
        lt = i.left + it * 0.35, dt = i.top + bt * 0.35, dr(0, Math.atan2(bt, it), 1 + 0.155 * Rt, 1 - 0.1 * Rt);
        return;
      }
      const Qe = Es();
      if (!ee) {
        lt = Qe.x, dt = Qe.y, dr(0, 0, 1, 1), Pt && (cancelAnimationFrame(xn), Pt.done());
        return;
      }
      const St = Pt ? Pt.k : 0.17, Ot = Pt ? Pt.d : 0.7;
      _e = (_e + (Qe.x - lt) * St) * Ot, ct = (ct + (Qe.y - dt) * St) * Ot, lt += _e, dt += ct;
      const dn = Math.hypot(_e, ct), zn = Math.min(dn / 48, 1), fa = at || Pt ? 0 : Math.max(-5, Math.min(5, _e * 0.32));
      dr(fa, Math.atan2(ct, _e), 1 + 0.1 * zn, 1 - 0.063 * zn), Pt && dn < 0.15 && Math.hypot(Qe.x - lt, Qe.y - dt) < 0.6 && (cancelAnimationFrame(xn), Pt.done());
    }, Rs = setInterval(() => {
      if (!h || Pt) return;
      const Qe = h.getBoundingClientRect(), St = 64, Ot = xe < Qe.top + St ? -(Qe.top + St - xe) / 4 : xe > Qe.bottom - St ? (xe - (Qe.bottom - St)) / 4 : 0;
      Ot && (h.scrollTop += Math.max(-18, Math.min(18, Ot)), ln());
    }, 30);
    xn = requestAnimationFrame(Ds);
    let Kr = !1;
    const Qo = (Qe, St) => {
      if (Kr) return;
      Kr = !0, cancelAnimationFrame(xn);
      const Ot = Ke ? Ke.offsetHeight : J;
      !Qe && Ke && (Ke.remove(), Ke = null), Qe ? W(Qe, St, Ot) : oe();
    };
    return {
      move(Qe, St) {
        Me = Qe, xe = St, !yt && Math.hypot(Me - s, xe - u) > Ae && (yt = !0, _e = (Me - s) * 0.085, ct = (xe - u) * 0.085), yt && ln();
      },
      drop(Qe) {
        clearInterval(Rs);
        const St = at, Ot = an;
        if (!Qe && St && Ke) {
          const dn = Ke;
          Pt = { k: 0.24, d: 0.62, aim: () => {
            const zn = dn.getBoundingClientRect();
            return { x: zn.left, y: zn.top };
          }, done: () => Qo(St, Ot) }, setTimeout(() => Qo(St, Ot), 650), ee || (cancelAnimationFrame(xn), Qo(St, Ot));
          return;
        }
        sn(null), ke(null), Pt = { k: 0.2, d: 0.66, aim: () => {
          const dn = D();
          return { x: dn.left, y: dn.top };
        }, done: () => Qo(null) }, setTimeout(() => Qo(null), 650), ee || (cancelAnimationFrame(xn), Qo(null));
      }
    };
  }
  function ht(e, i) {
    let s = !1;
    e.addEventListener("click", (u) => {
      if (s) {
        s = !1, u.preventDefault();
        return;
      }
      if (na()) {
        Io(i);
        return;
      }
      const h = o("strengthList"), k = ta(i, h, pt(h).arr.length, 0);
      k == null || k.scrollIntoView({ block: "nearest", behavior: qe() ? "auto" : "smooth" });
    }), e.addEventListener("pointerdown", (u) => {
      if (u.button !== void 0 && u.button !== 0) return;
      const h = u.pointerId, k = u.clientX, D = u.clientY;
      let W = null, oe = !1;
      try {
        e.setPointerCapture(h);
      } catch {
      }
      const re = (xe) => {
        if (xe.pointerId === h) {
          if (xe.pointerType === "mouse" && xe.buttons === 0) {
            Me(!1);
            return;
          }
          if (!W) {
            if (Math.hypot(xe.clientX - k, xe.clientY - D) < 6) return;
            W = lo(e, i, k, D);
          }
          W.move(xe.clientX, xe.clientY);
        }
      }, ee = (xe) => {
        xe.pointerId === h && Me(!1);
      }, J = (xe) => {
        xe.pointerId === h && Me(!0);
      }, Se = () => Me(!1), Ge = () => Me(!0), Ae = (xe) => {
        xe.key === "Escape" && W && (xe.preventDefault(), xe.stopPropagation(), Me(!0));
      };
      function Me(xe) {
        if (!oe && (oe = !0, window.removeEventListener("pointermove", re, !0), window.removeEventListener("pointerup", ee, !0), window.removeEventListener("pointercancel", J, !0), window.removeEventListener("keydown", Ae, !0), window.removeEventListener("blur", Ge), e.removeEventListener("lostpointercapture", Se), W)) {
          const lt = W;
          W = null, s = !0, setTimeout(() => {
            s = !1;
          }, 0), lt.drop(xe);
        }
      }
      window.addEventListener("pointermove", re, !0), window.addEventListener("pointerup", ee, !0), window.addEventListener("pointercancel", J, !0), window.addEventListener("keydown", Ae, !0), window.addEventListener("blur", Ge), e.addEventListener("lostpointercapture", Se);
    });
  }
  const Ln = (Nd = window.matchMedia) == null ? void 0 : Nd.call(window, "(max-width: 620px)");
  function na() {
    var e;
    return !!((e = window.matchMedia) != null && e.call(window, "(max-width: 620px)").matches);
  }
  const co = (e) => e.charAt(0).toUpperCase() + e.slice(1), Ha = (e) => e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "movement";
  let Fa = null, Tt = null;
  function Jt(e, i, s, u) {
    An(), o("sheetTitle").textContent = e;
    const h = o("sheetBody");
    h.innerHTML = "", h.appendChild(i), Fa = s || null, o("sheet").setAttribute("aria-hidden", "false"), o("sheetScrim").classList.add("open"), o("sheet").classList.add("open"), setTimeout(() => {
      if (!o("sheet").classList.contains("open") || !h.contains(i)) return;
      const k = u ? h.querySelector("input[data-f=url],input[data-f=name]") : h.querySelector("button,input,select");
      k == null || k.focus({ preventScroll: !0 });
    }, qe() ? 0 : 360);
  }
  function An() {
    const e = o("sheet");
    if (!e.classList.contains("open")) return;
    e.classList.remove("open"), o("sheetScrim").classList.remove("open"), e.setAttribute("aria-hidden", "true"), e.contains(a.activeElement) && a.activeElement.blur();
    const i = Fa;
    Fa = null, i == null || i(), setTimeout(aa, 0);
  }
  o("sheetScrim").addEventListener("click", An), o("sheet").addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), An());
  });
  function uo(e, i) {
    const s = ze(e, i.indexOf(e), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        An(), C(), Lt(co(Ha(e)) + " updated");
      },
      onCancel: An,
      onHide() {
        e.hidden = !e.hidden, An(), C(), Lt((e.hidden ? "Hidden: " : "Showing: ") + e.name);
      },
      onRemove() {
        An();
        const u = i.indexOf(e);
        u < 0 || (i.splice(u, 1), C(), Lt("Removed " + e.name, { label: "Undo", run: () => {
          i.splice(Math.min(u, i.length), 0, e), C();
        } }));
      }
    });
    Jt("Edit " + Ha(e), s, null, !1);
  }
  function Pi() {
    const e = document.createElement("div");
    e.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([i, s, u, h]) => {
      const k = document.createElement("button");
      k.type = "button", k.className = "sheetChoice", k.innerHTML = '<span class="timeIcon" aria-hidden="true">' + fe(s) + "</span><span><strong>" + u + "</strong><small>" + h + "</small></span>", k.addEventListener("click", () => Io(i)), e.appendChild(k);
    }), Jt("Add to the move", e, null, !1);
  }
  function Io(e) {
    Tt && Ii();
    const i = Nt(e, o("strengthList")), s = ze(i, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        An(), Qs(i, e);
      },
      onCancel: An
    });
    Jt("New " + Ha(i), s, null, !0);
  }
  const si = o("workoutModal").querySelector(".modalStatic"), br = { parent: si.parentNode, next: si.nextSibling };
  function Js() {
    const e = document.createElement("div");
    e.className = "sheetSetup", e.appendChild(si);
    const i = document.createElement("button");
    i.type = "button", i.className = "primary sheetDone", i.textContent = "Done", i.addEventListener("click", An), e.appendChild(i), Jt("Setup", e, () => {
      br.parent.insertBefore(si, br.next), wr();
    }, !1);
  }
  function wr() {
    var i, s;
    const e = o("setupSummaryName");
    e && (e.textContent = (((i = o("workoutNameInput")) == null ? void 0 : i.value) || "").trim() || ((s = Ue[ut]) == null ? void 0 : s.name) || "Move", o("setupSummaryMeta").textContent = It.textContent);
  }
  o("setupSummary").addEventListener("click", Js), o("addFab").addEventListener("click", Pi);
  function xr() {
    const e = o("strengthList");
    return Tn(e) || e.closest(".exerciseScroller");
  }
  function yr() {
    const e = o("strengthList").getBoundingClientRect(), i = (xr() || o("strengthList")).getBoundingClientRect(), s = (Tt == null ? void 0 : Tt.ghost.offsetHeight) || 64;
    return { left: e.left, top: Math.max(i.top + 12, Math.min(i.bottom - s - 96, i.top + i.height * 0.55 - s / 2)), width: e.width, height: s };
  }
  function Qs(e, i) {
    var W;
    const s = on(i, [e.name || ii[i][0], "Drag into place"]);
    s.classList.add("overList", "hovering"), s.setAttribute("aria-label", (e.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const u = document.createElement("span");
    u.className = "addGhostActions", u.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + Ie(e.name) + '">✕</button>', s.appendChild(u), Tt = { item: e, type: i, ghost: s };
    const h = ((W = a.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : W.offsetHeight) || 64;
    s.style.width = o("strengthList").getBoundingClientRect().width + "px", s.style.height = h + "px";
    const k = yr(), D = kn.querySelector(".modal").getBoundingClientRect().bottom;
    s.style.transform = "translate(" + k.left + "px," + D + "px)", s.getBoundingClientRect(), qe() || (s.classList.add("rising"), setTimeout(() => s.classList.remove("rising"), 650)), s.style.transform = "translate(" + k.left + "px," + k.top + "px)", u.querySelector("[data-a=end]").addEventListener("click", Ii), u.querySelector("[data-a=discard]").addEventListener("click", el), s.addEventListener("pointerdown", as);
  }
  function as(e) {
    if (!Tt || e.target.closest("button") || e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const { item: i, ghost: s } = Tt, u = e.pointerId;
    try {
      s.setPointerCapture(u);
    } catch {
    }
    s.classList.remove("hovering", "rising"), s.classList.add("held");
    const h = s.getBoundingClientRect(), k = xr(), D = ri({
      ghost: s,
      origin: { left: h.left, top: h.top, width: h.width, height: h.height },
      sx: e.clientX,
      sy: e.clientY,
      scroller: k,
      column: o("strengthList").closest(".exerciseScroller,.createFlow") || k,
      rowLook: !0,
      home: yr,
      onDrop: (Me, xe, lt) => {
        Tt = null, Sa(s), kr(i, Me, xe, lt);
      },
      onReturn: () => {
        s.classList.remove("held"), s.classList.add("hovering");
      }
    });
    let W = !1;
    const oe = (Me) => {
      if (Me.pointerId === u) {
        if (Me.pointerType === "mouse" && Me.buttons === 0) {
          Ae(!1);
          return;
        }
        D.move(Me.clientX, Me.clientY);
      }
    }, re = (Me) => {
      Me.pointerId === u && Ae(!1);
    }, ee = (Me) => {
      Me.pointerId === u && Ae(!0);
    }, J = () => Ae(!1), Se = () => Ae(!0), Ge = (Me) => {
      Me.key === "Escape" && (Me.preventDefault(), Ae(!0));
    };
    function Ae(Me) {
      W || (W = !0, window.removeEventListener("pointermove", oe, !0), window.removeEventListener("pointerup", re, !0), window.removeEventListener("pointercancel", ee, !0), window.removeEventListener("keydown", Ge, !0), window.removeEventListener("blur", Se), s.removeEventListener("lostpointercapture", J), D.drop(Me));
    }
    window.addEventListener("pointermove", oe, !0), window.addEventListener("pointerup", re, !0), window.addEventListener("pointercancel", ee, !0), window.addEventListener("keydown", Ge, !0), window.addEventListener("blur", Se), s.addEventListener("lostpointercapture", J);
  }
  function kr(e, i, s, u) {
    const h = pt(i);
    e.kind !== "rest" && e.kind !== "video" && (e.kind = h.kind, h.group && (!e.group || e.group === "Movement") && (e.group = h.group)), h.arr.splice(Math.max(0, Math.min(s, h.arr.length)), 0, e), Zt(i.closest(".exerciseScroller,.createStepSlot") || i, () => C()), Kt(i.querySelector('.moveRow[data-id="' + e.id + '"]'), u), Lt(co(Ha(e)) + " added");
  }
  function Ii() {
    var u;
    if (!Tt) return;
    const { item: e, ghost: i } = Tt;
    Tt = null, Sa(i);
    const s = o("strengthList");
    kr(e, s, pt(s).arr.length, 0), (u = s.querySelector('.moveRow[data-id="' + e.id + '"]')) == null || u.scrollIntoView({ block: "nearest", behavior: qe() ? "auto" : "smooth" });
  }
  function el() {
    if (!Tt) return;
    const e = Tt.ghost;
    Tt = null, Sa(e), Lt("Discarded");
  }
  function os() {
    Tt && (Tt.ghost.remove(), Tt = null);
  }
  window.addEventListener("resize", () => {
    if (Tt != null && Tt.ghost.classList.contains("hovering")) {
      const e = yr();
      Tt.ghost.style.width = e.width + "px", Tt.ghost.style.transform = "translate(" + e.left + "px," + e.top + "px)";
    }
  }), (Bd = Ln == null ? void 0 : Ln.addEventListener) == null || Bd.call(Ln, "change", () => {
    An(), Tt && !na() && Ii(), Be();
  });
  {
    const e = o("workoutModal").querySelector(".modal");
    e.addEventListener("scroll", () => {
      (e.scrollTop || e.scrollLeft) && (e.scrollTop = 0, e.scrollLeft = 0);
    });
  }
  function aa() {
    const e = o("workoutModal"), i = window.visualViewport;
    if (!e.classList.contains("open") || !na()) {
      Mr();
      return;
    }
    const s = i ? i.offsetTop : 0, u = i ? i.offsetLeft : 0, h = i ? i.width : window.innerWidth, k = i ? i.height : window.innerHeight;
    Object.assign(e.style, { right: "auto", bottom: "auto", width: h + "px", height: k + "px", top: s + "px", left: u + "px" });
    const D = e.getBoundingClientRect();
    Math.abs(D.top - s) > 0.5 && (e.style.top = 2 * s - D.top + "px"), Math.abs(D.left - u) > 0.5 && (e.style.left = 2 * u - D.left + "px");
  }
  function Mr() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((e) => o("workoutModal").style.removeProperty(e));
  }
  (Pd = window.visualViewport) == null || Pd.addEventListener("resize", aa), (Id = window.visualViewport) == null || Id.addEventListener("scroll", aa), window.addEventListener("resize", aa), window.addEventListener("scroll", aa, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(aa, 250));
  function Cr() {
    Xe.length > 0;
    const e = o("addMovementBtn"), i = o("addRestBtn");
    e && (e.innerHTML = B + "<span>Add movement</span>"), i && (i.innerHTML = B + "<span>Add rest</span>");
    const s = o("addVideoBtn");
    s && (s.innerHTML = B + "<span>Add video</span>");
  }
  function Ta() {
    const e = o("useGlobalTiming").checked, i = o("addMovementDuration"), s = o("addMovementUnit");
    i.disabled = e, s.disabled = e, i.parentElement.style.opacity = e ? ".38" : "1", o("globalTimingValue").textContent = "Use global timing · " + Yt(M.value);
    const u = o("useGlobalRestTiming").checked, h = o("addRestDuration"), k = o("addRestUnit");
    h.disabled = u, k.disabled = u, h.parentElement.style.opacity = u ? ".38" : "1", o("globalRestTimingValue").textContent = "Use global timing · " + Yt(R.value);
  }
  let Hn = "movement";
  function tl(e) {
    Hn = e;
    const i = o("movementFields"), s = o("restFields");
    i.hidden = e !== "movement", s.hidden = e !== "rest", o("movementCreatorHeading").textContent = "Add movement", o("movementCreator").setAttribute("aria-label", "Create movement"), Ta();
  }
  function Hi() {
    Ue[ut];
    const e = st ? !0 : o("useGlobalTiming").checked, i = e ? Number(M.value) : Pa(
      o("addMovementDuration").value,
      o("addMovementUnit").value
    ), s = st ? !0 : o("useGlobalRestTiming").checked, u = s ? Number(R.value) : Pa(
      o("addRestDuration").value,
      o("addRestUnit").value
    );
    if (Hn === "rest") {
      const h = o("addRestTitle").value.trim() || "Rest", k = o("addRestGroup").value.trim() || "Rest";
      Xe.push({
        id: "rest-" + Date.now(),
        name: h,
        group: k,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: s,
        duration: Math.max(5, u || Number(R.value))
      }), C(), o("movementCreator").hidden = !0, o("addRestTitle").value = "Rest", o("addRestGroup").value = "Rest", Lt("Rest added"), st && (V("movements"), ge());
    } else {
      const h = o("addMovementInput").value.trim();
      if (!h) return;
      const k = o("addMovementGroup").value.trim() || "Movement";
      Xe.push({
        id: "movement-" + Date.now(),
        name: h,
        group: k,
        kind: "work",
        hidden: !1,
        useGlobalTiming: e,
        duration: Math.max(5, i || Number(M.value))
      }), o("addMovementInput").value = "", o("addMovementGroup").value = "", C(), o("movementCreator").hidden = !0, Lt("Movement added"), st && (V("movements"), ge());
    }
    Cr();
  }
  let Fi = null;
  function Lt(e, i) {
    const s = o("toast");
    s.innerHTML = "";
    const u = document.createElement("span");
    if (u.textContent = e, s.appendChild(u), i) {
      const h = document.createElement("button");
      h.type = "button", h.className = "toastAction", h.textContent = i.label, h.addEventListener("click", () => {
        i.run(), s.classList.remove("show", "withAction"), clearTimeout(Fi);
      }), s.appendChild(h);
    }
    s.classList.toggle("withAction", !!i), s.classList.add("show"), clearTimeout(Fi), Fi = setTimeout(() => s.classList.remove("show", "withAction"), i ? 5e3 : 2200);
  }
  const nl = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], al = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function Oi(e) {
    return Math.max(0, Math.min(5, Math.floor(Number(e) / 100 * 6)));
  }
  function po(e, i) {
    return nl[Oi(i)];
  }
  function ol(e) {
    return al[Oi(e)];
  }
  function Ht(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  function Oa() {
    return { morning: tt().morningTime || "08:00", evening: tt().eveningTime || "19:00" };
  }
  function ho(e) {
    const [i, s] = String(e).split(":").map(Number);
    return (i || 0) * 60 + (s || 0);
  }
  function il(e) {
    const i = Oa();
    return e.getHours() * 60 + e.getMinutes() >= ho(i.evening) ? "evening" : "morning";
  }
  function li(e, i) {
    return rt.checkins.find((s) => s.date === e && s.slot === i);
  }
  function qi(e) {
    return !!(e && e.mood != null && e.energy != null);
  }
  function di() {
    const e = /* @__PURE__ */ new Date(), i = Ht(e), s = il(e), u = Oa(), h = e.getHours() * 60 + e.getMinutes();
    return s === "morning" && h < ho(u.morning) || qi(li(i, s)) ? null : s;
  }
  const qa = o("checkinModal"), La = o("checkinTab"), rl = o("checkinBadge"), ca = { mood: { input: o("moodInput"), fill: o("moodFill") }, energy: { input: o("energyLevelInput"), fill: o("energyLevelFill") } };
  function Wi(e) {
    const { input: i, fill: s } = ca[e];
    s.style.width = i.value + "%", i.setAttribute("aria-valuetext", po(e, i.value));
  }
  Object.keys(ca).forEach((e) => ca[e].input.addEventListener("input", () => Wi(e)));
  let oa = null;
  function Sr() {
    const e = Oa(), i = /* @__PURE__ */ new Date(), s = i.getHours() * 60 + i.getMinutes();
    return s < ho(e.morning) ? "Next check-in at " + e.morning : s < ho(e.evening) ? "Next check-in at " + e.evening : "Next check-in tomorrow at " + e.morning;
  }
  function sl() {
    const e = Oa(), i = /* @__PURE__ */ new Date(), s = i.getHours() * 60 + i.getMinutes(), u = (h, k) => {
      const [D, W] = h.split(":").map(Number);
      return new Date(i.getFullYear(), i.getMonth(), i.getDate() + (k ? 1 : 0), D, W);
    };
    return s < ho(e.morning) ? { date: u(e.morning), time: e.morning } : s < ho(e.evening) ? { date: u(e.evening), time: e.evening } : { date: u(e.morning, !0), time: e.morning };
  }
  let Tr = null, Lr = null;
  function is() {
    if (di()) {
      Wa(), Va();
      return;
    }
    const e = sl(), i = Math.max(0, Math.round((e.date - Date.now()) / 1e3)), s = Math.floor(i / 3600), u = Math.floor(i % 3600 / 60), h = i % 60;
    o("peekCountdown").textContent = s + ":" + String(u).padStart(2, "0") + ":" + String(h).padStart(2, "0"), o("peekAt").textContent = "Available at " + e.time;
  }
  function ll() {
    is(), La.classList.add("peek"), clearInterval(Lr), Lr = setInterval(is, 1e3), clearTimeout(Tr), Tr = setTimeout(Wa, 6e3);
  }
  function Wa() {
    La.classList.remove("peek"), clearInterval(Lr), clearTimeout(Tr);
  }
  function Ar() {
    const e = di();
    if (!e) {
      La.classList.contains("peek") ? Wa() : ll();
      return;
    }
    oa = { date: Ht(/* @__PURE__ */ new Date()), slot: e };
    const s = li(oa.date, e), u = rt.checkins.find((h) => qi(h));
    Object.keys(ca).forEach((h) => {
      ca[h].input.value = (s == null ? void 0 : s[h]) ?? (u == null ? void 0 : u[h]) ?? 50, Wi(h);
    }), o("checkinTitle").textContent = e === "morning" ? "Morning check-in" : "Evening check-in", qa.classList.add("open"), qa.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => ca.mood.input.focus());
  }
  function ci() {
    qa.classList.remove("open"), qa.setAttribute("aria-hidden", "true"), oa && (ga = oa.date + "-" + oa.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", ga);
    } catch {
    }
    oa = null, Va();
  }
  function dl() {
    if (!oa) return;
    if (qi(li(oa.date, oa.slot))) {
      ci();
      return;
    }
    const { date: e, slot: i } = oa;
    let s = li(e, i);
    s || (s = { date: e, slot: i }, rt.checkins.unshift(s), rt.checkins = rt.checkins.slice(0, 2e3)), s.mood = Number(ca.mood.input.value), s.energy = Number(ca.energy.input.value), s.scale = 100, s.at = (/* @__PURE__ */ new Date()).toISOString(), fn(), l.fire("checkin", { slot: i, mood: s.mood, energy: s.energy, mood_label: po("mood", s.mood), energy_label: po("energy", s.energy) }), Lt((i === "morning" ? "Morning" : "Evening") + " check-in saved"), ci(), zi(), za(), tn(), He();
  }
  let ga = "";
  try {
    ga = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function Va() {
    const e = di();
    rl.hidden = !e, La.hidden = !e, e || Wa(), La.classList.toggle("due", !!e), La.setAttribute("aria-label", e ? (e === "morning" ? "Morning" : "Evening") + " check-in is due" : Sr()), La.title = e ? "Check in now" : Sr();
  }
  function Vi() {
    Va();
    const e = di();
    !e || qa.classList.contains("open") || tt().checkinAutoOpen !== !1 && (o("app").classList.contains("house") || !be.home.classList.contains("active") || kn.classList.contains("open") || ga !== Ht(/* @__PURE__ */ new Date()) + "-" + e && Ar());
  }
  La.addEventListener("click", Ar), o("checkinLater").addEventListener("click", ci), o("checkinSave").addEventListener("click", dl), qa.addEventListener("click", (e) => {
    e.target === qa && ci();
  }), qa.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), ci());
  }), setInterval(Vi, 3e4);
  function zi() {
    const e = Ht(/* @__PURE__ */ new Date()), i = (s) => rt.checkins.find((u) => u.date === e && u[s] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([s, u]) => {
      const h = i(s);
      o(u).textContent = h ? po(s, h[s]) : "—";
    });
  }
  function za() {
    const e = o("feelCard");
    if (!e) return;
    const i = /* @__PURE__ */ new Date(), s = new Date(i.getFullYear(), i.getMonth(), i.getDate() - (i.getDay() + 6) % 7), u = [...Array(7)].map((re, ee) => {
      const J = new Date(s.getFullYear(), s.getMonth(), s.getDate() + ee), Se = Ht(J), Ge = rt.checkins.filter((Me) => Me.date === Se), Ae = (Me) => {
        const xe = Ge.map((lt) => lt[Me]).filter((lt) => lt != null);
        return xe.length ? xe.reduce((lt, dt) => lt + dt, 0) / xe.length : null;
      };
      return { d: J, key: Se, mood: Ae("mood"), energy: Ae("energy"), count: Ge.filter(qi).length, future: J > i && Se !== Ht(i) };
    }), h = (re) => {
      const ee = u.map((J) => J[re]).filter((J) => J != null);
      return ee.length ? ee.reduce((J, Se) => J + Se, 0) / ee.length : null;
    }, k = h("mood"), D = h("energy"), W = (re, ee) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + re + "</span><span>" + (ee == null ? "—" : Ie(po("", ee))) + '</span></div><div class="feelTrack"><span style="width:' + (ee == null ? 0 : Math.max(4, ee)) + "%;background:" + (ee == null ? "transparent" : ol(ee)) + '"></span></div></div>', oe = u.filter((re) => re.mood != null && re.energy != null).sort((re, ee) => ee.mood + ee.energy - (re.mood + re.energy))[0];
    e.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (k == null ? "No check-ins yet" : Ie(po("", (k + D) / 2))) + '</div><div class="weekCopy">' + (k == null ? "Your first check-in will appear here." : "on average this week" + (oe ? " · best day " + Ie(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(oe.d)) : "")) + '</div></div></div><div class="feelDays">' + u.map(
      (re) => '<div class="weekChip feelDay' + (re.future ? " future" : "") + (re.key === Ht(i) ? " today" : "") + '"><div class="weekChipTop"><strong>' + Ie(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(re.d)) + "</strong>" + (re.count >= 2 ? '<span class="weekTick">' + fe("check") + "</span>" : '<span class="feelDots">' + "●".repeat(re.count) + "</span>") + "</div>" + W("Mood", re.mood) + W("Energy", re.energy) + "</div>"
    ).join("") + "</div>";
  }
  const ui = o("upcomingCountSetting");
  ui.addEventListener("change", () => {
    Qn = ui.value === "all" ? "all" : Number(ui.value), Ir();
  });
  const fo = o("tempoRevealBtn"), ji = o("tempoExperiment"), va = o("tempoQuad"), mo = o("tempoDot"), cl = o("tempoEstimate"), Gi = o("tempoReadout");
  let qt = { x: 0.5, y: 0.5 }, pi = !1, go = { total: 20, work: 45, rest: 15 };
  function Aa(e, i, s, u) {
    const h = Math.max(i, Math.min(s, e));
    return Math.round((h - i) / u) * u + i;
  }
  function hi(e, i) {
    const s = (e - 0.5) * 2, u = (i - 0.5) * 2, h = Aa(
      go.total + s * 5 + u * 8,
      Number(A.min),
      Number(A.max),
      Number(A.step)
    ), k = Aa(
      go.work + s * 10 + u * 8,
      Number(M.min),
      Number(M.max),
      Number(M.step)
    ), D = Aa(
      go.rest + s * 6 + u * 6,
      Number(R.min),
      Number(R.max),
      Number(R.step)
    );
    return A.value = h, M.value = k, R.value = D, G.textContent = k + " sec", ae.textContent = D + " sec", Ut(), { total: h, work: k, rest: D };
  }
  function _r(e, i) {
    const s = e < 0.34 ? "Low" : e > 0.66 ? "Hard" : "Medium", u = i < 0.34 ? "Fast" : i > 0.66 ? "Slow" : "Balanced", h = hi(e, i);
    Gi.textContent = s + " + " + u, cl.textContent = h.total + " min", va.setAttribute("aria-valuetext", s + " and " + u + ", estimated " + h.total + " minutes");
  }
  function Er(e) {
    const i = va.getBoundingClientRect(), s = Math.max(0, Math.min(1, (e.clientX - i.left) / i.width)), u = Math.max(0, Math.min(1, (e.clientY - i.top) / i.height));
    qt = { x: s, y: u }, mo.style.left = s * 100 + "%", mo.style.top = u * 100 + "%", _r(s, u);
  }
  fo.addEventListener("click", () => {
    const e = ji.hidden;
    ji.hidden = !e, fo.setAttribute("aria-expanded", e ? "true" : "false"), fo.textContent = e ? "Now close this" : "Don’t try this!", e && (go = {
      total: Number(A.value),
      work: Number(M.value),
      rest: Number(R.value)
    }, qt = { x: 0.5, y: 0.5 }, mo.style.left = "50%", mo.style.top = "50%", _r(qt.x, qt.y));
  }), a.querySelectorAll("[data-feedback-rating]").forEach((e) => e.addEventListener("click", () => {
    Number(e.dataset.feedbackRating), a.querySelectorAll("[data-feedback-rating]").forEach((i) => i.classList.toggle("selected", i === e));
  }));
  const Ui = o("testingFeedbackForm"), rs = o("testingFeedbackThanks"), ul = o("testingFeedbackAgain");
  Ui.addEventListener("submit", (e) => {
    e.preventDefault(), Ui.hidden = !0, rs.hidden = !1, Lt("Feedback captured for prototype");
  }), ul.addEventListener("click", (e) => {
    e.preventDefault(), Ui.reset(), a.querySelectorAll("[data-feedback-rating]").forEach((i) => i.classList.remove("selected")), rs.hidden = !0, Ui.hidden = !1;
  }), va.addEventListener("pointerdown", (e) => {
    var i;
    pi = !0, Er(e);
    try {
      (i = va.setPointerCapture) == null || i.call(va, e.pointerId);
    } catch {
    }
  }), va.addEventListener("pointermove", (e) => {
    pi && Er(e);
  }), va.addEventListener("pointerup", (e) => {
    pi && (pi = !1, Er(e), C());
  }), va.addEventListener("pointercancel", () => pi = !1), va.addEventListener("keydown", (e) => {
    let { x: i, y: s } = qt, u = !0;
    e.key === "ArrowLeft" ? i -= 0.05 : e.key === "ArrowRight" ? i += 0.05 : e.key === "ArrowUp" ? s -= 0.05 : e.key === "ArrowDown" ? s += 0.05 : u = !1, u && (e.preventDefault(), i = Math.max(0, Math.min(1, i)), s = Math.max(0, Math.min(1, s)), qt = { x: i, y: s }, mo.style.left = i * 100 + "%", mo.style.top = s * 100 + "%", _r(i, s), C());
  });
  const kn = o("workoutModal");
  let ja = null;
  function ia(e) {
    return e.map((i) => ({ ...i }));
  }
  function pl() {
    const e = Ue[ut];
    return {
      key: ut,
      profile: e ? JSON.parse(JSON.stringify(e)) : null,
      warmup: ia(Mt),
      strength: ia(Xe),
      cooldown: ia(yn),
      total: Number(A.value),
      work: Number(M.value),
      rest: Number(R.value),
      rounds: Number(et.value) || 1
    };
  }
  function ss(e = !1) {
    st = !!e, ce = null, ve = null, An(), os(), ja = pl(), o("moveEditorTitle").textContent = st ? "Create new move" : "Edit move", o("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", o("moveEditorSubtitle").hidden = !st, o("warmupRow").hidden = st, o("deleteMoveOpen").hidden = st;
    const i = o("createMoveOptions");
    i.hidden = !st;
    {
      const s = Ue[ut];
      o("includeWarmupPreset").checked = !!(s != null && s.includeWarmup), o("includeCooldownPreset").checked = !!(s != null && s.includeCooldown);
    }
    if (At(), st) {
      o("useGlobalTiming").checked = !0, o("useGlobalRestTiming").checked = !0;
      const s = Ue[ut];
      oi((s == null ? void 0 : s.preset) || "movement", !1);
    }
    o("movementCreator").hidden = !0, tl("movement"), Cr(), Ta(), ji.hidden = !0, fo.setAttribute("aria-expanded", "false"), fo.textContent = "Don’t try this!", kn.classList.toggle("createMode", st), kn.querySelector(".modal").classList.toggle("createMode", st), kn.classList.add("open"), kn.setAttribute("aria-hidden", "false"), aa(), st && Te();
  }
  function _n() {
    const e = Ue[ut];
    return e != null && e.customSequence ? !!e.includeWarmup : !(e != null && e.warmupOff);
  }
  function At() {
    const e = _n(), i = o("warmupSwitch");
    i.classList.toggle("on", e), i.setAttribute("aria-checked", String(e));
  }
  o("warmupSwitch").addEventListener("click", () => {
    const e = Ue[ut];
    e && (e.customSequence ? (o("includeWarmupPreset").checked = !e.includeWarmup, so()) : (e.warmupOff = !e.warmupOff, C()), At());
  });
  function Fn() {
    An(), os(), Mr(), ve = null, ce = null, kn.classList.contains("createMode") && w(), kn.classList.remove("createMode"), kn.querySelector(".modal").classList.remove("createMode"), kn.classList.remove("open"), kn.setAttribute("aria-hidden", "true");
  }
  function Yi() {
    if (!ja) return;
    const e = ja;
    e.profile && (Ue[e.key] = JSON.parse(JSON.stringify(e.profile))), ut = e.key, Mt = ia(e.warmup), Xe = ia(e.strength), yn = ia(e.cooldown), A.value = e.total, M.value = e.work, R.value = e.rest, et.value = e.rounds || 1;
    const i = Ue[ut];
    if (i) {
      a.querySelectorAll(".workoutPanel[data-workout]").forEach((u) => u.classList.toggle("active", u.dataset.workout === ut));
      const s = a.querySelector(".workoutPanel.active");
      if (s) {
        const u = s.querySelector(".workoutName");
        u && (u.textContent = i.name);
        const h = s.querySelector(".panelCollapsedText");
        h && (h.textContent = i.name);
        const k = s.querySelector(".sourceTag");
        k && (k.textContent = i.source);
      }
      f.value = i.name;
    }
    C();
  }
  o("cancelWorkoutEdit").addEventListener("click", () => {
    if (st) {
      const e = ut;
      delete Ue[e], st = !1, mt = null, Pn(rt.order.find((i) => Ue[i]) || Object.keys(Ue)[0]);
    } else
      Yi();
    Fn();
  }), o("saveWorkoutEdit").addEventListener("click", () => {
    An(), Tt && Ii();
    const e = Ue[ut], i = f.value.trim() || "New move";
    if (e && (e.name = i), nt(), ce = null, C(), st && e)
      Po(ut, e), a.querySelectorAll(".workoutPanel[data-workout]").forEach((s) => s.classList.toggle("active", s.dataset.workout === ut)), st = !1, mt = null, rt.order.includes(ut) || rt.order.push(ut), Lt("Move created");
    else {
      const s = a.querySelector(".workoutPanel.active");
      if (s) {
        const u = s.querySelector(".workoutName");
        u && (u.textContent = i);
        const h = s.querySelector(".panelCollapsedText");
        h && (h.textContent = i);
      }
      Lt("Move saved");
    }
    ja = null, Fn(), fn();
  }), kn.addEventListener("click", (e) => {
    if (e.target === kn) {
      if (st) {
        const i = ut;
        delete Ue[i], st = !1, mt = null, Pn(rt.order.find((s) => Ue[s]) || Object.keys(Ue)[0]);
      } else
        Yi();
      Fn();
    }
  }), ht(o("addMovementBtn"), "movement"), ht(o("addRestBtn"), "rest"), ht(o("addVideoBtn"), "video"), o("closeMovementCreator").addEventListener("click", () => {
    o("movementCreator").hidden = !0;
  }), o("useGlobalTiming").addEventListener("change", Ta), o("useGlobalRestTiming").addEventListener("change", Ta), a.querySelectorAll(".createPresetBtn").forEach((e) => e.addEventListener("click", () => {
    oi(e.dataset.movePreset, !0), C();
  })), o("includeWarmupPreset").addEventListener("change", so), o("includeCooldownPreset").addEventListener("change", so), o("includeWarmupPreset").addEventListener("change", ge), o("includeCooldownPreset").addEventListener("change", ge), f.addEventListener("input", ge), f.addEventListener("input", wr), o("confirmAddMovement").addEventListener("click", Hi), o("confirmAddRest").addEventListener("click", Hi), o("addMovementInput").addEventListener("keydown", (e) => {
    e.key === "Enter" && Hi();
  });
  const _a = o("countdown"), fi = o("countNum"), bn = o("countdownPixelCanvas");
  let Ga = null, Ua = "appear";
  class rn {
    constructor(i, s, u, h, k, D, W) {
      this.width = i.width, this.height = i.height, this.ctx = s, this.x = u, this.y = h, this.color = k, this.speed = (Math.random() * 0.8 + 0.1) * D, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = W, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
    }
    draw() {
      const i = this.maxSizeInteger * 0.5 - this.size * 0.5;
      this.ctx.fillStyle = this.color, this.ctx.fillRect(this.x + i, this.y + i, this.size, this.size);
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
  let Ho = [], mi = 1, Dr = 1;
  function Ya() {
    const e = parseFloat(getComputedStyle(o("app")).zoom);
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  function ls() {
    var re;
    if (!bn) return;
    const e = Ya(), i = Math.max(1, window.innerWidth / e), s = Math.max(1, window.innerHeight / e);
    mi = i, Dr = s;
    const u = Math.min(window.devicePixelRatio || 1, 2);
    bn.width = Math.floor(i * u), bn.height = Math.floor(s * u), bn.style.width = i + "px", bn.style.height = s + "px";
    const h = bn.getContext("2d");
    h.setTransform(u, 0, 0, u, 0, 0);
    const k = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], D = 12, W = (re = window.matchMedia) == null ? void 0 : re.call(window, "(prefers-reduced-motion: reduce)").matches, oe = W ? 0 : 0.055;
    Ho = [];
    for (let ee = 0; ee < i; ee += D)
      for (let J = 0; J < s; J += D) {
        const Se = ee - i / 2, Ge = J - s / 2, Ae = Math.sqrt(Se * Se + Ge * Ge), Me = W ? 0 : Math.random() * 75 + Ae * 0.05, xe = new rn({ width: i, height: s }, h, ee, J, k[Math.floor(Math.random() * k.length)], oe, Me);
        xe.maxSizeInteger = 4, xe.maxSize = Math.random() * 3.2 + 0.8, xe.sizeStep = 0.35 + Math.random() * 0.45, Ho.push(xe);
      }
  }
  function Rr(e) {
    cancelAnimationFrame(Ga), Ua = e;
    const i = bn == null ? void 0 : bn.getContext("2d");
    if (!i) return;
    function s() {
      i.clearRect(0, 0, mi, Dr);
      let u = !0;
      Ho.forEach((h) => {
        h[Ua](), h.isIdle || (u = !1);
      }), Ua === "disappear" && u || (Ga = requestAnimationFrame(s));
    }
    Ga = requestAnimationFrame(s);
  }
  function Zi() {
    cancelAnimationFrame(Ga), ls(), Rr("appear"), setTimeout(() => Rr("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    _a.classList.contains("active") && Zi();
  });
  const Za = o("pixelTrailCanvas"), mn = Za.getContext("2d");
  let ra = !0, vo = 0.7, bo = 600, wo = [], Fo = null, Mn = { x: 0, y: 0, ready: !1 };
  function gi() {
    const e = c.getBoundingClientRect(), i = Ya(), s = Math.min(window.devicePixelRatio || 1, 2), u = Math.max(1, e.width / i), h = Math.max(1, e.height / i);
    Za.width = Math.max(1, Math.floor(u * s)), Za.height = Math.max(1, Math.floor(h * s)), Za.style.width = u + "px", Za.style.height = h + "px", mn.setTransform(s, 0, 0, s, 0, 0);
  }
  function hl(e, i) {
    if (!ra) return;
    const s = performance.now();
    Mn.ready || (Mn = { x: e, y: i, ready: !0 });
    const u = 7;
    for (let h = 1; h <= u; h++) {
      const k = h / u;
      wo.push({
        x: Mn.x + (e - Mn.x) * k,
        y: Mn.y + (i - Mn.y) * k,
        born: s - (u - h) * 10
      });
    }
    Mn = { x: e, y: i, ready: !0 };
  }
  function Oo(e) {
    if (Fo = null, !m) return;
    if (!be.workout.classList.contains("active")) {
      Fo = requestAnimationFrame(Oo);
      return;
    }
    const i = c.getBoundingClientRect(), s = Ya();
    mn.clearRect(0, 0, i.width / s, i.height / s), ra && (wo = wo.filter((h) => e - h.born < bo), mn.fillStyle = o("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", wo.forEach((h) => {
      const k = (e - h.born) / bo, D = (1 - k) * vo, W = Math.round(h.x / 14) * 14, oe = Math.round(h.y / 14) * 14;
      mn.globalAlpha = Math.max(0, D);
      const re = 2 + 5 * (1 - k) * vo;
      mn.fillRect(W - re / 2, oe - re / 2, re, re);
    }), mn.globalAlpha = 1), Fo = requestAnimationFrame(Oo);
  }
  c.addEventListener("pointermove", (e) => {
    const i = c.getBoundingClientRect(), s = Ya();
    hl((e.clientX - i.left) / s, (e.clientY - i.top) / s);
  }), c.addEventListener("pointerleave", () => Mn.ready = !1), new ResizeObserver(gi).observe(c), gi(), Fo = requestAnimationFrame(Oo);
  const Ka = o("movementRippleCanvas"), Bt = Ka.getContext("2d");
  let En = !0, Dn = null, Cn = performance.now();
  function ba() {
    const e = Ka.parentElement.getBoundingClientRect(), i = Ya(), s = Math.max(1, e.width / i), u = Math.max(1, e.height / i), h = Math.min(window.devicePixelRatio || 1, 2);
    Ka.width = Math.max(1, Math.floor(s * h)), Ka.height = Math.max(1, Math.floor(u * h)), Ka.style.width = s + "px", Ka.style.height = u + "px", Bt.setTransform(h, 0, 0, h, 0, 0);
  }
  function Ki() {
    var e;
    return _t || ((e = Re[Ve]) == null ? void 0 : e.kind) === "rest";
  }
  function vi() {
    const e = Re[Ve];
    return Ki() ? 2200 : e ? e.kind === "warmup" || e.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function bi(e) {
    if (Dn = null, !m) return;
    if (!be.workout.classList.contains("active")) {
      Dn = requestAnimationFrame(bi);
      return;
    }
    const i = Ka.parentElement.getBoundingClientRect(), s = Ya(), u = Math.max(1, i.width / s), h = Math.max(1, i.height / s);
    if (Bt.clearRect(0, 0, u, h), En) {
      const k = vi(), D = (e - Cn) % k / k, W = 15, oe = Math.max(8, Math.round(W * h / Math.max(1, u))), re = u / (W + 1), ee = h / (oe + 1), J = u * 0.5, Se = h * 0.52, Ge = Math.hypot(J, Se), Me = o("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let xe = 1; xe <= oe; xe++)
        for (let lt = 1; lt <= W; lt++) {
          const dt = lt * re, _e = xe * ee, ct = Math.hypot(dt - J, _e - Se) / Ge, yt = Ki(), at = yt ? Math.exp(-Math.pow((ct - (D * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, Ke = Math.exp(-Math.pow((ct - D * 1.25) * 7, 2)), an = yt ? at : Ke, xn = yt ? 0.5 + 0.5 * Math.sin(D * Math.PI * 2 - ct * 3) ** 2 : 0.35 + 0.65 * Math.sin(D * Math.PI * 2 - ct * 5) ** 2, Pt = yt ? 1.4 + an * 4.2 * xn : 1.2 + an * 5 * xn;
          Bt.beginPath(), Bt.arc(dt, _e, Pt, 0, Math.PI * 2), Bt.fillStyle = `rgba(${Me},${yt ? 0.08 + an * 0.48 : 0.05 + an * 0.55})`, Bt.fill();
        }
    }
    Dn = requestAnimationFrame(bi);
  }
  new ResizeObserver(ba).observe(Ka.parentElement), ba(), Dn = requestAnimationFrame(bi);
  const wi = o("exerciseTitle"), Ea = o("exerciseMeta"), wn = o("stepLabel"), $a = o("digits"), Nr = o("fill"), qo = o("progress"), Br = o("pause"), ds = o("nextName"), cs = o("nextMeta"), us = o("nextIcon"), $i = o("skipNextSession");
  let On = null;
  function qn(e) {
    for (let i = Math.max(0, e); i < Re.length; i++)
      if (!Re[i].sessionHidden) return i;
    return -1;
  }
  function Rn() {
    const e = Re[Ve];
    if (!e) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (_t) {
      const u = qn(Ve + 1), h = u >= 0 ? Re[u] : null;
      return h ? { name: h.name, meta: Ji(h), icon: Xi(h) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (e.rest > 0) return { name: "Rest", meta: e.rest + " sec · " + (e.roundBreakAfter ? "round " + (e.round + 1) + " next" : "recovery"), icon: "pause" };
    const i = qn(Ve + 1), s = i >= 0 ? Re[i] : null;
    return s ? { name: s.name, meta: Ji(s), icon: Xi(s) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function Pr() {
    if (!Re[Ve]) return Re.length;
    const i = qn(Ve + 1);
    return i < 0 ? Re.length : i + 1;
  }
  function Xi(e) {
    return e.kind === "video" ? "play" : "clock";
  }
  function Ji(e) {
    return e.kind === "video" ? "YouTube · " + gt(e.duration) : e.group + " · " + e.duration + " sec";
  }
  function Wo() {
    return Re.length && Re[Re.length - 1].round || 1;
  }
  function ps(e) {
    const i = Re[e];
    if (!i) return "";
    const s = Wo();
    if (s <= 1) return "Step " + (e + 1) + " of " + Re.length;
    if (i.roundBreak) return "Round " + i.round + " of " + s + " · Rest";
    const u = Re.filter((h) => h.round === i.round && !h.roundBreak).length;
    return "Round " + i.round + " of " + s + " · Step " + (i.roundIndex + 1) + " of " + u;
  }
  function hs() {
    return qo.querySelector('[data-step="' + Ve + '"]');
  }
  function fl() {
    Re[Ve] && Number(qo.dataset.round) !== (Re[Ve].round || 1) && er(), [...qo.children].forEach((e) => {
      const i = Number(e.dataset.step);
      e.classList.toggle("done", i < Ve), e.classList.toggle("active", i === Ve), e.classList.toggle("rewindable", i <= Ve), e.disabled = i > Ve, i === Ve && e.style.setProperty("--segment-progress", "0%");
    }), Re[Ve] && (wn.textContent = ps(Ve), Da());
  }
  function fs(e) {
    const i = Re.indexOf(e);
    i < 0 || i <= Ve || (e.sessionHidden = !e.sessionHidden, xo(), Lt((e.sessionHidden ? "Hidden " : "Included ") + e.name + " for this session"));
  }
  function Ir() {
    const e = o("upcomingList");
    if (!e) return;
    e.innerHTML = "";
    const i = Pr(), s = Re.slice(i);
    (Qn === "all" ? s : s.slice(0, Math.max(1, Number(Qn) || 1))).forEach((h) => {
      const k = document.createElement("section");
      k.className = "upcomingCard" + (h.sessionHidden ? " sessionHidden" : "") + (n(h) ? " noMeta" : ""), k.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + fe(Xi(h)) + '</div><div><div class="upcomingName">' + Ie(h.name) + '</div><div class="upcomingMeta">' + Ie(Ji(h)) + (Wo() > 1 ? " · round " + h.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (h.sessionHidden ? "Include this session" : "Skip this session") + "</button>", k.querySelector(".skipSessionBtn").addEventListener("click", () => fs(h)), e.appendChild(k);
    });
  }
  function xo() {
    var i;
    const e = Rn();
    ds.textContent = e.name, cs.textContent = e.meta, us.innerHTML = fe(e.icon);
    {
      const s = _t ? Re[qn(Ve + 1)] : ((i = Re[Ve]) == null ? void 0 : i.rest) > 0 ? { kind: "rest" } : Re[qn(Ve + 1)];
      a.querySelector(".nextCard").classList.toggle("noMeta", !!(s && n(s)));
    }
    if (On = null, _t) {
      const s = qn(Ve + 1);
      s >= 0 && (On = Re[s]);
    } else {
      const s = Re[Ve];
      if (s && s.rest > 0)
        On = null;
      else {
        const u = qn(Ve + 1);
        u >= 0 && (On = Re[u]);
      }
    }
    $i && ($i.hidden = !On, $i.textContent = On != null && On.sessionHidden ? "Include this session" : "Skip this session"), Ir();
  }
  $i.addEventListener("click", () => {
    On && (On.sessionHidden = !On.sessionHidden, Lt((On.sessionHidden ? "Hidden " : "Included ") + On.name + " for this session"), xo());
  });
  let ua = null, Qi = null;
  function Vo(e, i = {}) {
    const s = Ue[ut];
    l.fire(e, { move: (s == null ? void 0 : s.name) || "", move_id: ut, ...i });
  }
  function ms() {
    const e = Ue[ut];
    ua = { key: ut, name: (e == null ? void 0 : e.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(Qi), Qi = setInterval(() => {
      ua && !vn && ua.active++;
    }, 1e3), Vo("started", { steps: Re.length });
  }
  function zo(e) {
    if (clearInterval(Qi), !ua) return;
    const i = ua;
    ua = null, Vo(e ? "completed" : "ended", { seconds: i.active }), !(i.active < 30) && (rt.history.unshift({ id: "h-" + i.startedAt, move_id: i.key, name: i.name, start: new Date(i.startedAt).toISOString(), seconds: i.active, completed: e }), rt.history = rt.history.slice(0, 1e3), fn(), tn(), He());
  }
  function ml() {
    y("workout"), gl();
    const e = qn(0);
    e >= 0 && Re[e].kind === "video" && Or(Re[e]);
  }
  function xi() {
    Uo(), zo(!1), clearInterval(Et), clearInterval(io), _t = !1, Wn(!1), o("app").classList.remove("resting"), _a.classList.remove("active"), y("home");
  }
  function gl() {
    _a.classList.add("active");
    let e = 5;
    fi.textContent = e, requestAnimationFrame(Zi), clearInterval(io), io = setInterval(() => {
      e--, e > 0 ? (fi.textContent = e, Zi()) : (clearInterval(io), fi.textContent = "GO", Zi(), setTimeout(() => {
        _a.classList.remove("active"), cancelAnimationFrame(Ga), Xa();
      }, 650));
    }, 1e3);
  }
  function er() {
    var i;
    qo.innerHTML = "";
    const e = ((i = Re[Math.max(0, Ve)] || Re[0]) == null ? void 0 : i.round) || 1;
    qo.dataset.round = e, Re.forEach((s, u) => {
      if ((s.round || 1) !== e) return;
      const h = document.createElement("button");
      h.dataset.step = u, h.type = "button", h.className = "progressSegment", h.setAttribute("aria-label", "Go to " + s.name), h.addEventListener("click", () => {
        u <= Ve && gs(u);
      }), qo.appendChild(h);
    });
  }
  function Wn(e) {
    e = !!e;
    const i = vn !== e;
    if (vn = e, Br.textContent = e ? "Resume" : "Pause", o("app").classList.toggle("paused", e), gn && Dt)
      try {
        e ? Dt.pauseVideo() : Dt.playVideo();
      } catch {
      }
    i && ua && Vo(e ? "paused" : "resumed");
  }
  function gs(e) {
    e < 0 || e >= Re.length || e > Ve || (clearInterval(Et), _t = !1, o("app").classList.remove("resting"), Ve = e, Wn(!1), Zo(), Et = setInterval(Ra, 1e3));
  }
  function Xa() {
    if (Ve = qn(0), Wn(!1), er(), Ve < 0) {
      wi.textContent = "No activities", Ea.textContent = "Open Edit and enable or add a movement", Ea.hidden = !1;
      return;
    }
    ms(), Zo(), clearInterval(Et), Et = setInterval(Ra, 1e3);
  }
  const Hr = o("videoStage"), Ja = o("videoSound"), vl = 0, en = 1, bl = 2;
  let tr = 0, jo = null, Go = null, Dt = null, Je = null, yi = 0, yo = !1, gn = null, wa = null;
  function Fr() {
    var e;
    return (e = window.YT) != null && e.Player ? Promise.resolve(window.YT) : jo || (jo = new Promise((i, s) => {
      const u = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          u == null || u();
        } catch {
        }
      };
      const h = setInterval(() => {
        var D;
        (D = window.YT) != null && D.Player && (clearInterval(h), clearTimeout(k), i(window.YT));
      }, 100), k = setTimeout(() => {
        clearInterval(h), jo = null, s(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const D = document.createElement("script");
        D.src = "https://www.youtube.com/iframe_api", D.async = !0, D.onerror = () => {
          clearInterval(h), clearTimeout(k), jo = null, s(new Error("YouTube did not load"));
        }, document.head.appendChild(D);
      }
    }), jo);
  }
  function vs() {
    return Go || (Go = Fr().then((e) => new Promise((i) => {
      const s = document.createElement("div");
      o("videoFrame").appendChild(s), Dt = new e.Player(s, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => i(Dt), onStateChange: (u) => Wr(u.data), onError: (u) => nr(u.data) }
      });
    })), Go.catch(() => {
      Go = null;
    }), Go);
  }
  function Or(e) {
    !(e != null && e.videoId) || e.videoError || vs().then((i) => {
      gn || Je === e.videoId || (Je = e.videoId, yi = Number(e.start) || 0, yo = !1, i.mute(), i.loadVideoById({ videoId: e.videoId, startSeconds: yi }));
    }).catch(() => {
    });
  }
  function qr() {
    const e = qn(Ve + 1);
    e >= 0 && Re[e].kind === "video" && Or(Re[e]);
  }
  function Wr(e) {
    if (!gn) {
      e === en && !yo && (yo = !0, Dt.pauseVideo(), Dt.seekTo(yi, !0));
      return;
    }
    Hr.classList.toggle("playing", e === en), Re[Ve] === gn && performance.now() > tr && (e === en && vn ? Wn(!1) : e === bl && !vn && Wn(!0)), e === en && ar(gn.videoId, Dt.getDuration()) && fn(), e === vl && Yo();
  }
  function nr(e) {
    const i = gn;
    if (!i) {
      Je = null;
      return;
    }
    e === 101 || e === 150 ? (bs(i.videoId), Lt("That video can’t play outside YouTube, so it was skipped")) : Lt("The video couldn’t play, so it was skipped"), Yo();
  }
  function Vr(e) {
    if (o("app").classList.add("videoStep"), Ja.hidden = !0, gn = e, clearTimeout(wa), !e.videoId) {
      Lt("This video step has no link yet, so it was skipped"), setTimeout(() => Yo(), 0);
      return;
    }
    vs().then((i) => {
      if (gn !== e) return;
      tr = performance.now() + 1500;
      const s = Number(e.start) || 0;
      Je !== e.videoId ? (Je = e.videoId, yi = s, i.loadVideoById({ videoId: e.videoId, startSeconds: s })) : (i.seekTo(s, !0), i.playVideo()), i.unMute(), vn && i.pauseVideo(), wa = setTimeout(() => {
        gn !== e || vn || (i.getPlayerState() !== en ? (i.mute(), i.playVideo(), Ja.hidden = !1) : i.isMuted() && (Ja.hidden = !1));
      }, 1600);
    }).catch(() => {
      gn === e && (Lt("YouTube didn’t load, so the video was skipped"), Yo());
    });
  }
  function zr() {
    if (!o("app").classList.contains("videoStep")) return;
    const e = a.querySelector(".workGrid"), i = a.querySelector(".sessionControlRow"), s = e.getBoundingClientRect().top, u = (i == null ? void 0 : i.offsetHeight) || 42, h = window.innerHeight - s - 16 - u - 84;
    e.style.setProperty("--theater-h", Math.max(240, Math.round(h)) + "px");
  }
  window.addEventListener("resize", zr);
  function Uo() {
    clearTimeout(wa);
    const e = gn;
    if (gn = null, o("app").classList.remove("videoStep"), Hr.classList.remove("playing"), Ja.hidden = !0, e && Dt) {
      try {
        Dt.pauseVideo();
      } catch {
      }
      Je = null;
    }
  }
  function Yo() {
    const e = gn;
    !e || Re[Ve] !== e || (Uo(), clearInterval(Et), ko(), Et = setInterval(Ra, 1e3));
  }
  Ja.addEventListener("click", () => {
    Dt && (Dt.unMute(), Dt.playVideo()), Ja.hidden = !0;
  });
  function ki(e) {
    var u;
    const i = Number(e.start) || 0;
    if (e.useVideoLength === !1) return i + (Number(e.duration) || 300);
    const s = Dt && gn === e && Number((u = Dt.getDuration) == null ? void 0 : u.call(Dt)) || 0;
    return Number(e.end) || s || Number(e.videoDuration) || i + (Number(e.duration) || 300);
  }
  function Mi(e, i) {
    const s = Ue[ut];
    [Mt, Xe, yn, s == null ? void 0 : s.warmup, s == null ? void 0 : s.strength, s == null ? void 0 : s.cooldown, s == null ? void 0 : s.sequence].forEach((u) => (Array.isArray(u) ? u : []).forEach((h) => {
      h && h.kind === "video" && h.videoId === e && i(h);
    }));
  }
  function ar(e, i) {
    i = Math.round(Number(i) || 0);
    let s = !1;
    return e && i > 0 && Mi(e, (u) => {
      u.videoDuration !== i && (u.videoDuration = i, s = !0);
    }), s;
  }
  function bs(e) {
    Mi(e, (i) => {
      i.videoError = "embed";
    }), fn();
  }
  function or(e) {
    const i = e.videoId;
    if (!i) return;
    const s = () => {
      kn.classList.contains("open") ? ce || C() : (C(), fn());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + i)).then((u) => u.ok ? u.json() : Promise.reject(u.status)).then((u) => {
      e.videoId === i && (e.videoTitle = u.title || "", e.autoName && u.title && (e.name = u.title), s());
    }).catch((u) => {
      e.videoId === i && u === 401 && (e.videoError = "embed", s());
    }), ws(i).then((u) => {
      ar(i, u) && s();
    }).catch((u) => {
      u === "embed" && e.videoId === i && (e.videoError = "embed", s());
    });
  }
  function ws(e) {
    return Fr().then((i) => new Promise((s, u) => {
      const h = document.createElement("div");
      h.className = "videoProbe", h.setAttribute("aria-hidden", "true");
      const k = document.createElement("div");
      h.appendChild(k), o("app").appendChild(h);
      let D = null, W = !1;
      const oe = (J, Se) => {
        W || (W = !0, clearTimeout(re), setTimeout(() => {
          try {
            D == null || D.destroy();
          } catch {
          }
          h.remove();
        }, 0), Se ? u(Se) : s(J));
      }, re = setTimeout(() => oe(0), 2e4), ee = () => {
        var Se;
        const J = Number((Se = D == null ? void 0 : D.getDuration) == null ? void 0 : Se.call(D)) || 0;
        return J > 0 && oe(J), J > 0;
      };
      D = new i.Player(k, {
        width: 320,
        height: 180,
        videoId: e,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            ee() || (D.mute(), D.playVideo());
          },
          onStateChange: () => ee(),
          onError: (J) => oe(0, J.data === 101 || J.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function Zo() {
    _t = !1;
    const e = Re[Ve];
    o("app").classList.toggle("resting", e.kind === "rest"), e.kind === "video" ? Vr(e) : Uo(), jt = e.duration, In = e.duration, wi.textContent = e.name, Ea.textContent = e.group, Ea.hidden = !0, wn.textContent = ps(Ve), ua && Vo("step", { name: e.name, group: e.group, kind: e.kind, step: Ve + 1, of: Re.length, round: e.round || 1, rounds: Wo(), duration: e.duration }), xo(), fl(), qr(), e.kind === "video" && setTimeout(zr, 0);
  }
  function Da() {
    var h;
    const e = ((h = Re[Ve]) == null ? void 0 : h.kind) === "video" && !_t, i = e && jt >= 60;
    $a.textContent = i ? gt(jt) : jt, $a.classList.toggle("long", i), e && (o("videoClock").textContent = gt(jt) + " left");
    const s = jt / In * 100;
    Nr.style.width = s + "%";
    const u = hs();
    if (u && !_t) {
      const k = 100 - s;
      u.style.setProperty("--segment-progress", k + "%");
    }
  }
  function Ra() {
    var i, s;
    if (vn) return;
    const e = Re[Ve];
    if ((e == null ? void 0 : e.kind) === "video" && !_t && gn === e) {
      const u = Number((i = Dt == null ? void 0 : Dt.getCurrentTime) == null ? void 0 : i.call(Dt)) || 0, h = Number(e.start) || 0, k = ki(e);
      In = Math.max(1, k - h), (u > h || ((s = Dt == null ? void 0 : Dt.getPlayerState) == null ? void 0 : s.call(Dt)) === en) && (jt = Math.max(0, Math.ceil(k - u))), Da(), u > h && u >= k - 0.25 && Yo();
      return;
    }
    jt--, Da(), jt <= 0 && (e.rest > 0 ? xs(e.rest) : ko());
  }
  function xs(e) {
    var s;
    _t = !0, o("app").classList.add("resting");
    const i = hs();
    i && i.style.setProperty("--segment-progress", "100%"), clearInterval(Et), jt = e, In = e, ua && Vo("rest", { duration: e }), wi.textContent = "Rest", Ea.textContent = (s = Re[Ve]) != null && s.roundBreakAfter ? "Round " + (Re[Ve].round + 1) + " next" : "Recovery", xo(), Da(), Et = setInterval(() => {
      vn || (jt--, Da(), jt <= 0 && (clearInterval(Et), ko(), Et = setInterval(Ra, 1e3)));
    }, 1e3);
  }
  function ko() {
    _t = !1;
    const e = qn(Ve + 1);
    if (e >= 0)
      Ve = e, Zo();
    else {
      clearInterval(Et), Uo(), Wn(!1), o("app").classList.remove("resting"), wi.textContent = "Complete", Ea.textContent = "Move finished", Ea.hidden = !1, $a.textContent = "✓";
      {
        const i = Wo();
        wn.textContent = i > 1 ? i + " rounds done" : Re.filter((s) => !s.roundBreak).length + " steps done";
      }
      zo(!0);
      {
        const i = $t(7).reduce((s, u) => s + u.minutes, 0);
        Ea.textContent = "Move finished · " + i + " min in the last 7 days";
      }
      Nr.style.width = "100%", xo();
    }
  }
  o("skipExercise").addEventListener("click", () => {
    ir(), Wn(!1);
  });
  function ir() {
    clearInterval(Et);
    const e = Re[Ve];
    if (_t) {
      _t = !1, o("app").classList.remove("resting");
      const s = qn(Ve + 1);
      s >= 0 ? (Ve = s, Zo(), Et = setInterval(Ra, 1e3)) : ko();
      return;
    }
    if (e && e.rest > 0) {
      xs(e.rest);
      return;
    }
    const i = qn(Ve + 1);
    i >= 0 ? (Ve = i, Zo(), Et = setInterval(Ra, 1e3)) : ko();
  }
  o("restartSegment").addEventListener("click", () => {
    if (clearInterval(Et), Wn(!1), _t) {
      const e = Re[Ve];
      jt = e.rest, In = e.rest, wi.textContent = "Rest", Ea.textContent = "Recovery", o("app").classList.add("resting"), xo(), Da();
    } else
      Zo();
    Et = setInterval(_t ? () => {
      vn || (jt--, Da(), jt <= 0 && (clearInterval(Et), ko(), Et = setInterval(Ra, 1e3)));
    } : Ra, 1e3);
  });
  function Ko(e, i, s, u) {
    let h = 0, k = null, D = !1;
    function W() {
      k && cancelAnimationFrame(k), k = null, h = 0, D = !1, i.style.width = "0%", e.classList.remove("holding");
    }
    function oe(J) {
      if (!D) return;
      h || (h = J);
      const Se = Math.min(1, (J - h) / s);
      if (i.style.width = Se * 100 + "%", Se >= 1) {
        D = !1, k && cancelAnimationFrame(k), k = null, i.style.width = "100%", setTimeout(() => i.style.width = "0%", 90), u();
        return;
      }
      k = requestAnimationFrame(oe);
    }
    function re(J) {
      var Se;
      if (!(J && J.button !== void 0 && J.button !== 0)) {
        J == null || J.preventDefault(), W(), D = !0, e.classList.add("holding");
        try {
          (Se = e.setPointerCapture) == null || Se.call(e, J.pointerId);
        } catch {
        }
        k = requestAnimationFrame(oe);
      }
    }
    function ee() {
      D && W();
    }
    e.addEventListener("pointerdown", re), e.addEventListener("pointerup", ee), e.addEventListener("pointercancel", ee), e.addEventListener("lostpointercapture", ee), e.addEventListener("keydown", (J) => {
      (J.key === " " || J.key === "Enter") && !J.repeat && re(J);
    }), e.addEventListener("keyup", (J) => {
      (J.key === " " || J.key === "Enter") && ee();
    });
  }
  const Ci = o("endWorkout");
  Ko(Ci, o("holdEndFill"), 1500, xi);
  const $o = o("deleteMoveConfirm");
  o("deleteMoveOpen").addEventListener("click", () => {
    $o.classList.add("open"), $o.setAttribute("aria-hidden", "false");
  }), o("deleteMoveCancel").addEventListener("click", () => {
    $o.classList.remove("open"), $o.setAttribute("aria-hidden", "true");
  });
  function wl() {
    const e = ut, i = a.querySelector('.workoutPanel[data-workout="' + e + '"]');
    i && i.remove(), delete Ue[e], rt.order = rt.order.filter((u) => u !== e);
    let s = a.querySelector(".workoutPanel[data-workout]");
    if (!s) {
      const u = "custom-" + Date.now();
      Ue[u] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, rt.order.push(u), s = Po(u, Ue[u]);
    }
    $o.classList.remove("open"), $o.setAttribute("aria-hidden", "true"), ja = null, Fn(), Pn(s.dataset.workout), fn(), Lt("Move deleted");
  }
  Ko(o("deleteMoveYes"), o("deleteMoveFill"), 1500, wl);
  const rr = a.querySelector(".rubberTabs"), Mo = o("rubberIndicator");
  function Co(e, i = !0) {
    if (!e || !rr || !Mo) return;
    const s = rr.getBoundingClientRect(), u = e.getBoundingClientRect();
    Mo.style.transition = i ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const h = Ya();
    Mo.style.left = (u.left - s.left) / h + rr.scrollLeft + "px", Mo.style.width = u.width / h + "px", i && (Mo.style.transform = "scaleX(1.08)", setTimeout(() => Mo.style.transform = "scaleX(1)", 180));
  }
  a.querySelectorAll(".tab").forEach((e) => e.addEventListener("click", () => {
    e.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), a.querySelectorAll(".tab").forEach((i) => i.classList.remove("active")), a.querySelectorAll(".settingsPane").forEach((i) => i.classList.remove("active")), e.classList.add("active"), o(e.dataset.pane).classList.add("active"), Co(e, !0);
  })), requestAnimationFrame(() => Co(a.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => Co(a.querySelector(".tab.active"), !1));
  const So = o("pixelTrailToggle"), To = o("rippleToggle"), Lo = o("trailStrength"), Ao = o("trailLife");
  function Vn(e, i) {
    tt()[e] = i, fn();
  }
  const jr = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function t(e) {
    return e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "g:" + String(e.group || "").trim().toLowerCase();
  }
  function n(e) {
    var i;
    return !!((i = tt().hideMeta) != null && i[t(e)]);
  }
  function r() {
    const e = /* @__PURE__ */ new Map(), i = (s, u, h) => {
      if (!s) return;
      Array.isArray(s) && (s = { name: s[1], group: s[2], kind: "work" });
      const k = t(s);
      let D = e.get(k);
      D || (D = { key: k, label: k === "rest" ? "Rest" : k === "video" ? "Video" : String(s.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, e.set(k, D)), D.kinds.add(k === "rest" ? "Rest" : k === "video" ? "Video" : u), D.moves.add(h), D.count++;
    };
    return Object.values(Ue).forEach((s) => {
      const u = s.name || "Move";
      (s.warmup || (s.customSequence ? [] : $e)).forEach((h) => i(h, "Warm-up", u)), (s.customSequence ? s.sequence || [] : s.strength || []).forEach((h) => i(h, h.presetRole === "warmup" ? "Warm-up" : h.presetRole === "cooldown" ? "Cooldown" : "Movement", u)), (s.cooldown || (s.customSequence ? [] : hn)).forEach((h) => i(h, "Cooldown", u));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([s, u]) => {
      e.has(s) || e.set(s, { key: s, label: u, kinds: /* @__PURE__ */ new Set([u]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...e.values()].map((s) => ({ ...s, kind: s.kinds.has("Movement") ? "Movement" : [...s.kinds][0], moves: [...s.moves] })).sort((s, u) => jr.indexOf(s.kind) - jr.indexOf(u.kind) || s.label.localeCompare(u.label));
  }
  let d = "all";
  function p() {
    const e = o("metaSearch").value.trim().toLowerCase();
    return r().filter((i) => (d === "all" || i.kind === d) && (!e || i.label.toLowerCase().includes(e) || i.moves.some((s) => s.toLowerCase().includes(e))));
  }
  function S() {
    const e = o("metaTableBody");
    if (!e) return;
    const i = tt().hideMeta || {}, s = p();
    e.innerHTML = s.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', s.forEach((h) => {
      const k = !i[h.key], D = h.count ? (h.moves.length > 2 ? h.moves.slice(0, 2).join(", ") + " + " + (h.moves.length - 2) + " more" : h.moves.join(", ")) + " · " + h.count + " step" + (h.count === 1 ? "" : "s") : "Not used yet", W = document.createElement("tr");
      W.className = k ? "" : "off", W.innerHTML = '<td><div class="metaType">' + Ie(h.label) + '</div><div class="metaSub">' + Ie(h.kind + " · " + D) + '</div></td><td class="metaKindCol">' + Ie(h.kind) + '</td><td class="metaUsedCol">' + Ie(D) + '</td><td class="metaSwitchCol"><button class="switch' + (k ? " on" : "") + '" type="button" role="switch" aria-checked="' + k + '" aria-label="Second line for ' + Ie(h.label) + ' on phones"></button></td>', W.querySelector(".switch").addEventListener("click", () => g([h.key], k)), e.appendChild(W);
    });
    const u = s.filter((h) => i[h.key]).length;
    o("metaCount").textContent = s.length ? s.length + " type" + (s.length === 1 ? "" : "s") + (u ? " · " + u + " hidden on phones" : "") : "";
  }
  function g(e, i) {
    const s = { ...tt().hideMeta || {} };
    e.forEach((u) => {
      i ? s[u] = !0 : delete s[u];
    }), Vn("hideMeta", s), S(), Be(), xo();
  }
  o("metaSearch").addEventListener("input", S), o("metaKinds").querySelectorAll(".kindChip").forEach((e) => e.addEventListener("click", () => {
    d = e.dataset.kind, o("metaKinds").querySelectorAll(".kindChip").forEach((i) => i.classList.toggle("active", i === e)), S();
  })), o("metaHideAll").addEventListener("click", () => g(p().map((e) => e.key), !0)), o("metaShowAll").addEventListener("click", () => g(p().map((e) => e.key), !1));
  const x = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...tt().toggles || {} };
  function E() {
    a.querySelectorAll("[data-toggle]").forEach((s) => s.classList.toggle("on", x[s.dataset.toggle] !== !1)), a.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([s, u]) => {
      o(u).hidden = x[s] === !1;
    });
    const e = ["steps", "mood", "energyLevel"].some((s) => x[s] !== !1);
    a.querySelector(".activityCard").hidden = !e, o("weatherCard").hidden = !0;
    const i = a.querySelector("#homeView .grid");
    i.classList.toggle("noActivity", !e), i.classList.toggle("noWeather", !0);
  }
  a.querySelectorAll("[data-toggle]").forEach((e) => e.addEventListener("click", () => {
    x[e.dataset.toggle] = x[e.dataset.toggle] === !1, E(), Vn("toggles", { ...x });
  })), E();
  function H() {
    So.classList.toggle("on", ra), To.classList.toggle("on", En), Lo.value = Math.round(vo * 100), o("trailStrengthValue").textContent = Lo.value + "%", Ao.value = bo, o("trailLifeValue").textContent = Ao.value + " ms";
  }
  tt().trailEnabled !== void 0 && (ra = tt().trailEnabled), tt().rippleEnabled !== void 0 && (En = tt().rippleEnabled), tt().trailStrength !== void 0 && (vo = tt().trailStrength), tt().trailMaxAge !== void 0 && (bo = tt().trailMaxAge), H(), So.addEventListener("click", () => {
    ra = !ra, So.classList.toggle("on", ra), ra || (wo = []), Vn("trailEnabled", ra);
  }), To.addEventListener("click", () => {
    En = !En, To.classList.toggle("on", En), Vn("rippleEnabled", En);
  }), Lo.addEventListener("input", () => {
    vo = Number(Lo.value) / 100, o("trailStrengthValue").textContent = Lo.value + "%";
  }), Lo.addEventListener("change", () => Vn("trailStrength", vo)), Ao.addEventListener("input", () => {
    bo = Number(Ao.value), o("trailLifeValue").textContent = Ao.value + " ms";
  }), Ao.addEventListener("change", () => Vn("trailMaxAge", bo)), ui.addEventListener("change", () => Vn("upcomingCount", Qn));
  function z(e) {
    a.querySelectorAll(".themeBtn").forEach((s) => s.classList.toggle("active", s.dataset.theme === e));
    const i = e === "light";
    o("app").classList.toggle("light", i), l.setLight(i), Si(a);
  }
  z(tt().theme || "dark"), a.querySelectorAll(".themeBtn").forEach((e) => e.addEventListener("click", () => {
    z(e.dataset.theme), Vn("theme", e.dataset.theme);
  }));
  const N = { steps: null, weather: null, ...tt().entities || {} };
  let U = null, ye = {};
  function Ne(e) {
    const i = Object.values(e).filter((W) => W.entity_id.startsWith("sensor.") || W.entity_id.startsWith("input_number.")), s = (W) => W.attributes.friendly_name || W.entity_id, u = i.filter((W) => /step/i.test(W.entity_id) || /step/i.test(s(W)) || ["steps", "step"].includes(String(W.attributes.unit_of_measurement || "").toLowerCase())), h = i.filter((W) => !u.includes(W)), k = (W, oe) => s(W).localeCompare(s(oe)), D = (W, oe) => /health_steps/.test(oe.entity_id) - /health_steps/.test(W.entity_id) || k(W, oe);
    return { suggested: u.sort(D), rest: h.sort(k), label: s };
  }
  function ue(e) {
    const i = o("stepsEntity");
    if (!i || i.matches(":focus")) return;
    const { suggested: s, rest: u, label: h } = Ne(e), k = (oe) => '<option value="' + Ie(oe.entity_id) + '">' + Ie(h(oe)) + "</option>";
    i.innerHTML = '<option value="">Not connected</option>' + (s.length ? '<optgroup label="Suggested">' + s.map(k).join("") + "</optgroup>" : "") + (u.length ? '<optgroup label="All sensors">' + u.map(k).join("") + "</optgroup>" : ""), i.value = N.steps || "";
    const D = o("stepsStatus"), W = N.steps && e[N.steps];
    D.textContent = W ? "Connected · " + h(W) : D.dataset.empty;
  }
  o("stepsEntity").addEventListener("change", () => {
    N.steps = o("stepsEntity").value || null, Vn("entities", { ...N }), ye = {}, Wt(), U && (ue(U), Le(U));
  });
  function he(e, i = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: i }).format(e);
  }
  function F() {
    const e = N.steps && (U == null ? void 0 : U[N.steps]), i = Number(e == null ? void 0 : e.state);
    return Number.isFinite(i) ? i : null;
  }
  function Le(e) {
    var u;
    const i = N.steps, s = i ? Number((u = e[i]) == null ? void 0 : u.state) : NaN;
    o("stepsMeta").textContent = i ? Number.isFinite(s) ? he(s) : "—" : "Set up in Settings";
  }
  let vt = 0;
  async function Wt() {
    const e = N.steps;
    if (!e || !l.ws) return;
    vt = Date.now();
    const i = /* @__PURE__ */ new Date(), s = new Date(i.getFullYear(), i.getMonth(), i.getDate() - 30);
    try {
      const u = await l.ws({ type: "recorder/statistics_during_period", start_time: s.toISOString(), end_time: i.toISOString(), statistic_ids: [e], period: "day", types: ["max"] }), h = (u == null ? void 0 : u[e]) || [], k = {};
      if (h.forEach((D) => {
        Number.isFinite(D.max) && (k[Ht(new Date(D.start))] = D.max);
      }), !Object.keys(k).length) {
        const D = await l.ws({ type: "history/history_during_period", start_time: s.toISOString(), end_time: i.toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((D == null ? void 0 : D[e]) || []).forEach((W) => {
          const oe = Number(W.s ?? W.state), re = W.lu ? W.lu * 1e3 : Date.parse(W.last_updated || W.last_changed);
          if (!Number.isFinite(oe) || !re) return;
          const ee = Ht(new Date(re));
          k[ee] = Math.max(k[ee] || 0, oe);
        });
      }
      ye = k, He();
    } catch {
    }
  }
  function tn() {
    He();
  }
  tn(), setInterval(() => {
    tn(), za(), Va();
  }, 10 * 60 * 1e3);
  function $t(e) {
    const i = {}, s = {};
    rt.history.forEach((D) => {
      const W = Ht(new Date(D.start));
      i[W] = (i[W] || 0) + (D.seconds || 0) / 60, s[W] = (s[W] || 0) + 1;
    });
    const u = /* @__PURE__ */ new Date(), h = Ht(u), k = [];
    for (let D = e - 1; D >= 0; D--) {
      const W = new Date(u.getFullYear(), u.getMonth(), u.getDate() - D), oe = Ht(W), re = rt.checkins.filter((J) => J.date === oe), ee = (J) => {
        const Se = re.map((Ge) => Ge[J]).filter(Boolean);
        return Se.length ? Se.reduce((Ge, Ae) => Ge + Ae, 0) / Se.length : null;
      };
      k.push({
        key: oe,
        date: W,
        minutes: Math.round(i[oe] || 0),
        moves: s[oe] || 0,
        steps: oe === h && F() != null ? F() : ye[oe] ?? null,
        mood: ee("mood"),
        energy: ee("energy")
      });
    }
    return k;
  }
  function pa(e) {
    let i = e.length - 1;
    e[i] && !e[i].minutes && i--;
    let s = 0;
    for (; i >= 0 && e[i].minutes > 0; )
      s++, i--;
    return s;
  }
  function He() {
    const e = o("insightCard");
    if (!e) return;
    const i = $t(30), s = pa(i), u = i.reduce((re, ee) => re + ee.minutes, 0), h = /* @__PURE__ */ new Date(), k = Ht(h), D = Ht(new Date(h.getFullYear(), h.getMonth(), h.getDate() - (h.getDay() + 6) % 7)), W = i.filter((re) => re.key >= D && re.key <= k).reduce((re, ee) => re + ee.minutes, 0), oe = (re, ee, J) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + re + '</div><div><div class="activityRowName">' + Ie(ee) + '</div><div class="activityRowMeta">' + Ie(J) + "</div></div></div>";
    e.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + fe("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + oe(fe("clock"), "This week", W + " min") + oe(fe("streak"), "Streak", s + " day" + (s === 1 ? "" : "s")) + oe(fe("calendar"), "30 days", u + " min") + "</div>";
  }
  const Ft = {
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
  }, xl = (e) => e === "sunny" ? "clear" : e === "clear-night" ? "night" : e === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(e) ? "rain" : ["snowy", "snowy-rainy"].includes(e) ? "snow" : "cloudy", sr = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, ys = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let hd = 0;
  const yl = (e, i) => '<path class="' + i + '" d="' + e + '"/>', su = (e, i) => ' style="animation-delay:-' + Math.round(e * 137 % i) + 'ms"', xa = (e, i, s, u) => {
    const h = s * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (u < 1 ? ' opacity="' + u + '"' : "") + su(e, 2400) + ' d="M' + e + " " + (i - s) + "L" + (e + h) + " " + (i - h) + "L" + (e + s) + " " + i + "L" + (e + h) + " " + (i + h) + "L" + e + " " + (i + s) + "L" + (e - h) + " " + (i + h) + "L" + (e - s) + " " + i + "L" + (e - h) + " " + (i - h) + 'Z"/>';
  }, fd = ([e, i, s], u) => '<path class="wxMoonPath" d="' + e + '" fill="url(#' + u + ')"/><defs><linearGradient id="' + u + '" x1="0" y1="' + i + '" x2="0" y2="' + s + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', lu = (e, i) => i ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', du = (e) => (e ? ["29.35", "43.04", "56.74"].map((i, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" x="' + i + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + i + ' 60.65)"/></g>') : [19, 26, 33].map((i, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + i + ' 38)"/></g>')).join(""), cu = (e) => (e ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([i, s], u) => '<circle class="wxFlake" style="animation-delay:-' + u * 640 + 'ms" cx="' + i + '" cy="' + s + '" r="' + (e ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function md(e, i, s, u) {
    return e === "clear" ? i ? fd(s ? ys.l : ys.s, u) + (s ? xa(70, 20, 5.83, 1) + xa(78.33, 41.67, 3.75, 0.8) + xa(60, 71.67, 3.33, 0.6) : xa(42, 12, 3.5, 1) + xa(47, 25, 2.25, 0.8) + xa(36, 43, 2, 0.6)) : lu(u, s) : e === "partly" ? (i ? fd(s ? ys.lp : ys.sp, u) : s ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + yl(s ? sr.lp : sr.sp, i ? "wxCloudLight" : "wxBright") + (i ? s ? xa(73.33, 16.67, 4.17, 0.9) : xa(44, 10, 2.5, 0.9) : "") : e === "cloudy" ? yl(s ? sr.lc : sr.s, i ? "wxCloudLight" : "wxBright") + (i ? s ? xa(15, 15, 3.75, 0.8) + xa(76.67, 13.33, 2.92, 0.6) : xa(9, 9, 2.25, 0.8) + xa(46, 8, 1.75, 0.6) : "") : yl(s ? sr.lr : sr.s, "wxCloudLight") + (e === "rain" ? du(s) : cu(s));
  }
  const uu = () => {
    var e;
    return ((e = U == null ? void 0 : U["sun.sun"]) == null ? void 0 : e.state) === "below_horizon";
  };
  let ha = tt().weatherStyle || "bitmap", gd = tt().weatherLayout === "strip" ? "strip" : "tiles", pu = tt().weatherMotion !== !1;
  const Gr = () => pu && !qe(), Ur = /* @__PURE__ */ new Map(), kl = 700, hu = (e) => {
    const [i, s] = e.split("/");
    return { k: i === "fog" ? "cloudy" : i === "storm" ? "rain" : i, night: s === "night" };
  };
  function ks(e, i, s, u = ha, h, k) {
    let D = xl(e);
    const W = D === "night" || (k != null ? !!k : !!s && uu());
    D === "night" && (D = "clear");
    const oe = i ? 90 : 54, re = $s(e, W), ee = performance.now();
    let J = h ? Ur.get(h) : null;
    if (h && !J ? Ur.set(h, J = { key: re, t0: -1e9 }) : J && J.key !== re && (J.fromKey = J.key, J.from = J.last || null, J.key = re, J.t0 = ee), u !== "smooth") return '<span class="wxIcon pixels' + (i ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + re + '"' + (h ? ' data-wx-slot="' + h + '"' : "") + ' data-wx-style="' + u + '" data-wx-size="' + oe + '"></canvas></span>';
    let Se = "";
    if (J && ee - J.t0 < kl && (Gr() || qe())) {
      const Ge = hu(J.fromKey);
      Se = '<span class="wxLayer wxOut ' + Ge.k + (Ge.night ? " night" : "") + '" style="animation-delay:' + Math.round(J.t0 - ee) + 'ms"><svg viewBox="0 0 ' + oe + " " + oe + '">' + md(Ge.k, Ge.night, i, "wxg" + ++hd) + "</svg></span>";
    }
    return '<span class="wxIcon ' + D + (W ? " night" : "") + (i ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + oe + " " + oe + '">' + md(D, W, i, "wxg" + ++hd) + "</svg>" + Se + "</span>";
  }
  function Ms() {
    const e = o("app"), i = getComputedStyle(e), s = (W) => i.getPropertyValue(W).trim(), u = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([W, oe]) => {
      s(oe) && (u[W] = s(oe));
    });
    const h = s("--color-text-primary") || "#f1f1f1", k = s("--color-bg-card") || "#222222", D = e.classList.contains("light");
    return { colors: u, ink: D ? h : k, paper: D ? k : h };
  }
  function Si(e, i = performance.now()) {
    const s = e.querySelectorAll("canvas[data-wx]");
    if (!s.length) return;
    const u = Ms(), h = Gr(), k = qe();
    s.forEach((D) => {
      var J;
      const W = D.dataset.wx, oe = D.dataset.wxSlot ? Ur.get(D.dataset.wxSlot) : null;
      let re = nd(W, u.colors);
      if (oe && oe.key === W) {
        const Se = (i - oe.t0) / kl;
        Se < 1 && (h || k) && (re = Au(oe.from || nd(oe.fromKey, u.colors), re, Math.max(0, Se), u.colors, k)), oe.last = re;
      }
      const ee = Nc(re, { size: Number(D.dataset.wxSize) || 54, px: 2, oneBit: D.dataset.wxStyle === "onebit", colors: u.colors, ink: u.ink, paper: u.paper, clock: i, idle: h });
      D.width !== ee.w && (D.width = ee.w), D.height !== ee.h && (D.height = ee.h), (J = D.getContext("2d")) == null || J.putImageData(new ImageData(ee.data, ee.w, ee.h), 0, 0);
    });
  }
  let Cs = null, vd = -1;
  function bd(e) {
    if (Cs = null, !m) return;
    const i = Gr(), s = Math.floor(e / 100), u = [...Ur.values()].some((oe) => e - oe.t0 < kl), h = [...Ss.values()].some((oe) => e - oe.t0 < oe.dur), k = be.home.classList.contains("active"), D = sa.classList.contains("open"), W = i && ha === "smooth" && (D || k && gd === "strip");
    !document.hidden && (u || h || W || i && s !== vd) && (vd = s, k && (Si(o("weatherCard"), e), Yr(o("weatherCard"), e)), D && (Si(sa, e), Yr(sa, e))), (i || u || h) && (Cs = requestAnimationFrame(bd));
  }
  function Ti() {
    o("app").classList.toggle("wxMotion", Gr()), !Cs && m && (Cs = requestAnimationFrame(bd));
  }
  let wd = [];
  const nn = 36e5, fu = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function _o() {
    const e = /* @__PURE__ */ new Date(), i = (k, D) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + k, D), s = [], u = [], h = [...Array(6)].map((k, D) => {
      const W = i(D, 6), oe = i(D, 18), re = i(D + 1, 6), ee = wd.find((Se) => Ht(new Date(Se.datetime)) === Ht(W)), J = (Se, Ge, Ae) => {
        const Me = s.filter((dt) => dt.t >= +Se && dt.t < +Ge);
        if (Me.length) {
          const dt = {};
          return Me.forEach((_e) => {
            dt[_e.c] = (dt[_e.c] || 0) + (fu.has(_e.c) ? 2 : 1);
          }), Object.entries(dt).sort((_e, ct) => ct[1] - _e[1])[0][0];
        }
        const xe = u.find((dt) => {
          const _e = +new Date(dt.datetime);
          return _e >= +Se - 3 * nn && _e < +Ge && (dt.is_daytime == null || !!dt.is_daytime == !Ae);
        });
        if (xe) return xe.condition;
        const lt = (ee == null ? void 0 : ee.condition) || "cloudy";
        return Ae && lt === "sunny" ? "clear-night" : lt;
      };
      return { start: +W, end: +re, day: J(W, oe, !1), night: J(oe, re, !0), hi: Number(ee == null ? void 0 : ee.temperature), lo: Number(ee == null ? void 0 : ee.templow) };
    });
    return { days: h, hours: s, start: h[0].start, end: h[5].end };
  }
  const xd = (e, i) => {
    const s = e.days.findIndex((h) => i < h.end);
    if (s < 0) return 1;
    const u = e.days[s];
    return Math.max(0, (s + (i - u.start) / (u.end - u.start)) / 6);
  }, mu = (e, i) => {
    const s = Math.max(0, Math.min(0.99999, i)) * 6, u = Math.floor(s), h = e.days[u];
    return h.start + (s - u) * (h.end - h.start);
  };
  function Ml(e, i) {
    const s = Math.max(0, e.days.findIndex((oe) => i < oe.end)), u = e.days[s], h = (i - u.start) / (u.end - u.start) >= 0.5;
    let k = h ? u.night : u.day, D = NaN;
    const W = e.hours;
    if (W.length && i >= W[0].t - nn && i <= W[W.length - 1].t + nn) {
      let oe = W.findIndex((J) => J.t > i);
      oe < 0 && (oe = W.length);
      const re = W[Math.max(0, oe - 1)], ee = W[Math.min(W.length - 1, oe)];
      k = re.c || k, D = ee.t > re.t ? re.temp + (ee.temp - re.temp) * Math.max(0, Math.min(1, (i - re.t) / (ee.t - re.t))) : re.temp;
    }
    if (!Number.isFinite(D)) {
      const oe = [];
      if (e.days.forEach((re) => {
        Number.isFinite(re.lo) && oe.push([re.start - nn, re.lo]), Number.isFinite(re.hi) && oe.push([re.start + 9 * nn, re.hi]);
      }), oe.length) {
        D = i <= oe[0][0] ? oe[0][1] : oe[oe.length - 1][1];
        for (let re = 1; re < oe.length; re++) if (i <= oe[re][0] && i > oe[re - 1][0]) {
          const [ee, J] = oe[re - 1], [Se, Ge] = oe[re];
          D = J + (Ge - J) * (1 - Math.cos(Math.PI * (i - ee) / (Se - ee))) / 2;
          break;
        }
      }
    }
    return { cond: h && k === "sunny" ? "clear-night" : k, temp: D, night: h, day: u };
  }
  const yd = (e) => Ht(new Date(e)) === Ht(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(e)), Ss = /* @__PURE__ */ new Map(), gu = 900, vu = 700;
  let Ts = null;
  const ya = typeof ResizeObserver == "function" ? new ResizeObserver((e) => e.forEach((i) => {
    Yr(i.target.parentElement), i.target.closest("#wxDialog") && Ld();
  })) : null;
  function Yr(e, i = performance.now()) {
    const s = e.querySelectorAll("canvas[data-wx-strip]");
    if (!s.length) return;
    const u = _o(), h = u.days.flatMap((J) => [{ cond: J.day, night: !1 }, { cond: J.night, night: !0 }]), k = h.map((J) => J.cond).join(), D = Ms(), W = Gr(), oe = qe(), re = Number(Ht(new Date(u.start)).replace(/\D/g, "")) % 9973;
    let ee = !1;
    s.forEach((J) => {
      var dt;
      const Se = J.clientWidth, Ge = J.clientHeight;
      if (!Se || !Ge) return;
      const Ae = J.dataset.wxStrip;
      let Me = Ss.get(Ae);
      Me ? Me.sig !== k && (Me.prev = Me.segs, Me.sig = k, Me.segs = h, Me.t0 = i, Me.dur = vu) : Ss.set(Ae, Me = { sig: k, segs: h, prev: null, t0: i, dur: gu });
      const xe = W || oe ? Math.min(1, Math.max(0, (i - Me.t0) / Me.dur)) : 1;
      xe < 1 && (ee = !0);
      const lt = { width: Se, height: Ge, colors: D.colors, clock: i, ambient: W, seed: re, reveal: oe ? xe : 1 - Math.pow(1 - xe, 3), prev: xe < 1 ? Me.prev : null, reduce: oe };
      if (ha === "smooth") {
        const _e = Math.min(2, window.devicePixelRatio || 1), ct = Math.round(Se * _e), yt = Math.round(Ge * _e);
        J.width !== ct && (J.width = ct), J.height !== yt && (J.height = yt);
        const at = J.getContext("2d");
        if (!at) return;
        at.setTransform(_e, 0, 0, _e, 0, 0), zu(at, h, lt);
      } else {
        const _e = Vu(h, { ...lt, px: 2, oneBit: ha === "onebit", ink: D.ink, paper: D.paper });
        J.width !== _e.w && (J.width = _e.w), J.height !== _e.h && (J.height = _e.h), (dt = J.getContext("2d")) == null || dt.putImageData(new ImageData(_e.data, _e.w, _e.h), 0, 0);
      }
    }), ee && Ti();
  }
  function kd() {
    const e = o("weatherCard");
    if (!e || e.hidden) return;
    const i = N.weather, s = i && (U == null ? void 0 : U[i]);
    if (!s) {
      e.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + ks("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (i ? "Not available" : "Set up in Settings") + "</div></div></div></div>", Si(e);
      return;
    }
    const u = s.attributes || {}, h = u.temperature_unit || "°", k = (at) => Number.isFinite(Number(at)) ? Math.round(Number(at)) + "°" : "—", D = (u.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", W = Ft[s.state] || (s.state ? s.state.charAt(0).toUpperCase() + s.state.slice(1) : "—"), oe = Ht(/* @__PURE__ */ new Date()), re = wd.slice(0, 7), ee = re.find((at) => Ht(new Date(at.datetime)) === oe) || null, J = re.filter((at) => Ht(new Date(at.datetime)) >= oe).slice(0, 6), Se = /* @__PURE__ */ new Date(), Ge = Ht(new Date(Se.getFullYear(), Se.getMonth(), Se.getDate() + 1)), Ae = ee ? "H " + k(ee.temperature) + "&ensp; L " + k(ee.templow) : "", Me = (at) => {
      const Ke = Ht(new Date(at.datetime));
      return Ke === oe ? "Today" : Ke === Ge ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(at.datetime));
    }, xe = Number.isFinite(Number(u.temperature)) ? Math.round(Number(u.temperature)) : "—", lt = (at) => {
      const Ke = new Date(at.datetime);
      return Math.round((new Date(Ke.getFullYear(), Ke.getMonth(), Ke.getDate()) - new Date(Se.getFullYear(), Se.getMonth(), Se.getDate())) / 864e5);
    }, dt = (at) => (Ft[at] || at || "").toLowerCase(), _e = (at, Ke) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + lt(at) + '" aria-label="' + Ie(Me(at) + ": " + dt(at.condition) + ", " + k(at.temperature) + " / " + k(at.templow) + ". Open the forecast") + '">' + ks(at.condition, !1, !1, ha, "day" + Ke) + '<div><div class="activityRowName">' + Ie(Me(at)) + '</div><div class="activityRowMeta">' + k(at.temperature) + " / " + k(at.templow) + "</div></div></div>", ct = () => '<div class="wxStrip"><div class="wxStripDays">' + _o().days.map((Ke, an) => {
      const Pt = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(Ke.start)) + ": " + dt(Ke.day) + (dt(Ke.day) === dt(Ke.night) ? " all day and night" : ", then " + dt(Ke.night) + " overnight") + (Number.isFinite(Ke.hi) ? ". High " + k(Ke.hi) : "") + (Number.isFinite(Ke.lo) ? ", low " + k(Ke.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + an + '" aria-label="' + Ie(Pt) + '"><span class="wxDayName">' + Ie(yd(Ke.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + k(Ke.hi) + '</span><span class="wxLow">' + k(Ke.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    e.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + Ie("Now in " + D + ": " + xe + "°, " + dt(s.state) + ". Open the forecast") + '"><div class="wxCurrent">' + ks(s.state, !0, !0, ha, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Ie(String(xe)) + '</span><span class="wxUnit">' + Ie(h) + '</span></div><div class="wxPlace">' + Ie(D) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Ie(W) + "</div>" + (Ae ? '<div class="wxRange">' + Ae + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (J.length ? gd === "strip" ? ct() : '<div class="activityRows wxDays">' + J.map(_e).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", Si(e);
    const yt = e.querySelector("canvas[data-wx-strip]");
    Ts && Ts !== yt && (ya == null || ya.unobserve(Ts)), Ts = yt, yt && (ya == null || ya.observe(yt), Yr(e)), Ti(), Td();
  }
  const Md = o("weatherCard"), Cd = (e) => {
    const i = e.closest("[data-wx-day]");
    if (i) {
      const u = /* @__PURE__ */ new Date();
      Sd(+new Date(u.getFullYear(), u.getMonth(), u.getDate() + Number(i.dataset.wxDay), 12), i);
      return;
    }
    const s = e.closest("[data-wx-open]");
    s && Sd(Date.now(), s);
  };
  Md.addEventListener("click", (e) => Cd(e.target)), Md.addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && e.target.matches("[data-wx-day],[data-wx-open]") && (e.preventDefault(), Cd(e.target));
  });
  const sa = o("wxDialog"), Xo = o("wxGraph"), Zr = o("wxGraphWrap");
  let Na = Date.now(), Li = null, Cl = !1, lr = null;
  function Sd(e, i) {
    const s = _o();
    Li = i || null, Na = Math.max(s.start, Math.min(s.end - nn, e)), Ss.delete("dialog"), Ur.delete("scrub"), sa.classList.add("open"), sa.setAttribute("aria-hidden", "false"), Td(), ya == null || ya.observe(sa.querySelector("canvas[data-wx-strip]")), Xo.focus({ preventScroll: !0 }), Ti();
  }
  function Sl() {
    var e;
    sa.classList.remove("open"), sa.setAttribute("aria-hidden", "true"), ya == null || ya.unobserve(sa.querySelector("canvas[data-wx-strip]")), (e = Li == null ? void 0 : Li.focus) == null || e.call(Li, { preventScroll: !0 }), Li = null;
  }
  function Td() {
    if (!sa.classList.contains("open")) return;
    const e = _o();
    o("wxGraphDays").innerHTML = e.days.map((i) => "<span>" + Ie(yd(i.start)) + "</span>").join(""), Ld(e), Ls(e), Yr(sa);
  }
  function Ls(e = _o()) {
    const i = Ml(e, Na), s = U == null ? void 0 : U[N.weather], u = (s == null ? void 0 : s.attributes) || {}, h = u.temperature_unit || "°", k = Math.abs(Na - Date.now()) < nn / 2, D = k && s ? s.state : i.cond, W = k && Number.isFinite(Number(u.temperature)) ? Math.round(Number(u.temperature)) : Number.isFinite(i.temp) ? Math.round(i.temp) : "—", oe = Ft[D] || (D ? D.charAt(0).toUpperCase() + D.slice(1) : "—"), re = k ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(Na / nn) * nn)), ee = i.day, J = (Number.isFinite(ee.hi) ? "H " + Math.round(ee.hi) + "°" : "") + (Number.isFinite(ee.lo) ? "&ensp; L " + Math.round(ee.lo) + "°" : "");
    o("wxDialogNow").innerHTML = '<div class="wxCurrent">' + ks(D, !0, k, ha, "scrub", k ? void 0 : i.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Ie(String(W)) + '</span><span class="wxUnit">' + Ie(h) + '</span></div><div class="wxPlace">' + Ie(re) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Ie(oe) + "</div>" + (J ? '<div class="wxRange">' + J + "</div>" : "") + "</div>", Si(o("wxDialogNow")), Xo.setAttribute("aria-valuenow", String(Math.round((Na - e.start) / nn))), Xo.setAttribute("aria-valuetext", re + ", " + oe.toLowerCase() + ", " + W + "°"), Tl(e), Ti();
  }
  function Ld(e = _o()) {
    const i = o("wxGraphLine"), s = Zr.clientWidth, u = Zr.clientHeight;
    if (!s || !u) return;
    const h = [];
    for (let xe = e.start; xe <= e.end; xe += nn) {
      const lt = Ml(e, xe).temp;
      Number.isFinite(lt) && h.push([xd(e, xe) * s, lt]);
    }
    if (i.setAttribute("viewBox", "0 0 " + s + " " + u), h.length < 2) {
      i.innerHTML = '<g id="wxCursorMark"></g>', lr = null, Tl(e);
      return;
    }
    const k = h.map((xe) => xe[1]), D = Math.min(...k), W = Math.max(...k), oe = Math.max(4, W - D), re = ha !== "smooth", ee = (xe) => re ? Math.round(xe / 2) * 2 : Math.round(xe * 10) / 10;
    lr = (xe) => u * 0.84 - (xe - D) / oe * u * 0.62;
    const J = Ms(), Se = ha === "onebit" ? J.paper : "#ffffff", Ge = ha === "onebit" ? J.ink : "rgba(0,0,0,.28)", Ae = "M" + h.map((xe) => ee(xe[0]) + " " + ee(lr(xe[1]))).join(" L"), Me = (xe, lt) => {
      const dt = h.find((_e) => _e[1] === xe);
      return '<text class="wxLineLabel" x="' + ee(Math.min(s - 14, Math.max(14, dt[0]))) + '" y="' + ee(lr(xe) + (lt ? 18 : -10)) + '" fill="' + Se + '" stroke="' + Ge + '">' + Math.round(xe) + "°</text>";
    };
    i.setAttribute("shape-rendering", re ? "crispEdges" : "auto"), i.innerHTML = '<path d="' + Ae + '" fill="none" stroke="' + Ge + '" stroke-width="' + (re ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + Ae + '" fill="none" stroke="' + Se + '" stroke-width="2" stroke-linejoin="round"/>' + Me(W, !1) + Me(D, !0) + '<g id="wxCursorMark"></g>', Tl(e);
  }
  function Tl(e = _o()) {
    const i = o("wxGraphLine").querySelector("#wxCursorMark");
    if (!i) return;
    const s = Zr.clientWidth, u = Zr.clientHeight, h = ha !== "smooth", k = (Se) => h ? Math.round(Se / 2) * 2 : Se, D = k(xd(e, Na) * s), W = Ml(e, Na).temp, oe = Ms(), re = ha === "onebit" ? oe.paper : "#ffffff", ee = ha === "onebit" ? oe.ink : "rgba(0,0,0,.28)", J = lr && Number.isFinite(W) ? k(lr(W)) : null;
    i.innerHTML = '<rect x="' + (D - 2) + '" y="0" width="4" height="' + u + '" fill="' + ee + '"/><rect x="' + (D - 1) + '" y="0" width="2" height="' + u + '" fill="' + re + '"/>' + (J == null ? "" : h ? '<rect x="' + (D - 5) + '" y="' + (J - 5) + '" width="10" height="10" fill="' + re + '" stroke="' + ee + '" stroke-width="2"/>' : '<circle cx="' + D + '" cy="' + J + '" r="6" fill="' + re + '" stroke="' + ee + '" stroke-width="2"/>');
  }
  const Ad = (e) => {
    const i = Zr.getBoundingClientRect();
    i.width && (Na = mu(_o(), (e - i.left) / i.width), Ls());
  };
  Xo.addEventListener("pointerdown", (e) => {
    if (e.button === 0) {
      Cl = !0;
      try {
        Xo.setPointerCapture(e.pointerId);
      } catch {
      }
      Ad(e.clientX);
    }
  }), Xo.addEventListener("pointermove", (e) => {
    Cl && Ad(e.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((e) => Xo.addEventListener(e, () => {
    Cl = !1;
  })), Xo.addEventListener("keydown", (e) => {
    const i = _o(), s = { ArrowLeft: -nn, ArrowRight: nn, ArrowDown: -nn, ArrowUp: nn, PageUp: -24 * nn, PageDown: 24 * nn }[e.key];
    s ? (e.preventDefault(), Na = Math.max(i.start, Math.min(i.end - nn, Math.round(Na / nn) * nn + s)), Ls(i)) : (e.key === "Home" || e.key === "End") && (e.preventDefault(), Na = e.key === "Home" ? i.start : i.end - nn, Ls(i));
  }), o("wxDialogClose").addEventListener("click", Sl), sa.addEventListener("click", (e) => {
    e.target === sa && Sl();
  }), sa.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), Sl());
  }), kd(), (Od = (Hd = window.matchMedia) == null ? void 0 : (Fd = Hd.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || Od.call(Fd, "change", () => {
    Ti(), Si(a);
  }), Ti();
  const _d = o("tvNav");
  l.fullscreenSupported || (_d.hidden = !0), _d.addEventListener("click", () => l.toggleFullscreen()), a.addEventListener("keydown", (e) => {
    !be.workout.classList.contains("active") || _a.classList.contains("active") || e.target.closest("input,select,textarea,.holdEnd") || (e.key === "MediaPlayPause" || e.key === " " && !e.target.closest("button") ? (e.preventDefault(), Br.click()) : e.key === "MediaTrackNext" ? (e.preventDefault(), o("skipExercise").click()) : e.key === "MediaTrackPrevious" && (e.preventDefault(), o("restartSegment").click()));
  }), a.querySelectorAll("[data-rounds-step]").forEach((e) => e.addEventListener("click", () => {
    const i = Math.max(1, Math.min(10, (Number(et.value) || 1) + Number(e.dataset.roundsStep)));
    String(i) !== et.value && (et.value = i, et.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [A, M, R, et].forEach((e) => e.addEventListener("input", () => {
    const i = Ue[ut];
    i && (i.total = Number(A.value), i.work = Number(M.value), i.rest = Number(R.value)), C();
  })), Ce.addEventListener("click", xi), Oe.addEventListener("click", () => y("settings")), o("settingsBack").addEventListener("click", xi), Br.addEventListener("click", () => Wn(!vn)), Pn(ut), zi(), za(), He(), o("healthHelpOpen").addEventListener("click", () => a.querySelector(".tab[data-pane=helpPane]").click()), Ko(o("resetStats"), o("resetStatsFill"), 1500, () => {
    rt.history = [], rt.checkins = [], ga = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    fn(), tn(), za(), zi(), He(), Va(), Lt("Stats reset");
  });
  const Ll = o("morningTime"), Al = o("eveningTime"), _l = o("checkinAutoOpen");
  Ll.value = Oa().morning, Al.value = Oa().evening, _l.classList.toggle("on", tt().checkinAutoOpen !== !1), [["morningTime", Ll], ["eveningTime", Al]].forEach(([e, i]) => i.addEventListener("change", () => {
    i.value && (Vn(e, i.value), Va());
  })), _l.addEventListener("click", () => {
    const e = tt().checkinAutoOpen === !1;
    _l.classList.toggle("on", e), Vn("checkinAutoOpen", e);
  }), setTimeout(Vi, 800);
  const Ed = o("checkinNotify"), As = o("checkinNotifyTarget"), Dd = o("checkinNotifyStatus"), bu = Dd.textContent;
  function Rd() {
    const e = l.notifyServices(), i = e.filter((h) => h.startsWith("mobile_app_")), s = i.length ? i : e, u = (h) => h.replace(/^mobile_app_/, "").replace(/_/g, " ");
    As.innerHTML = s.map((h) => '<option value="' + Ie(h) + '">' + Ie(u(h)) + "</option>").join(""), !tt().notifyTarget && s[0] && (tt().notifyTarget = s[0]), As.value = tt().notifyTarget || "";
  }
  function _s() {
    const e = !!tt().notifyOn;
    Ed.classList.toggle("on", e), o("checkinNotifyTargetRow").hidden = !e;
    const i = Oa();
    Dd.textContent = e ? "Sends at " + i.morning + " and " + i.evening : bu;
  }
  async function El() {
    const e = !!tt().notifyOn;
    try {
      return await l.setReminderAutomation(e ? { target: tt().notifyTarget, times: Oa() } : null), !0;
    } catch {
      return Lt("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  Ed.addEventListener("click", async () => {
    const e = !tt().notifyOn;
    if (e && (Rd(), !tt().notifyTarget)) {
      Lt("Install the Companion app on your phone first");
      return;
    }
    tt().notifyOn = e, _s(), await El() ? (fn(), Lt(e ? "Check-in notifications on" : "Check-in notifications off")) : (tt().notifyOn = !e, _s());
  }), As.addEventListener("change", () => {
    Vn("notifyTarget", As.value), tt().notifyOn && El();
  }), [Ll, Al].forEach((e) => e.addEventListener("change", () => {
    _s(), tt().notifyOn && El();
  })), Rd(), _s();
  let Dl = null;
  function wu() {
    Dl || (Dl = setTimeout(() => {
      Dl = null, He();
    }, 3e4));
  }
  return {
    updateStates(e) {
      var s, u;
      const i = !U || U[N.weather] !== e[N.weather] || ((s = U["sun.sun"]) == null ? void 0 : s.state) !== ((u = e["sun.sun"]) == null ? void 0 : u.state);
      U = e, ue(e), Le(e), i && kd(), Date.now() - vt > 60 * 60 * 1e3 && Wt(), wu();
    },
    applyRemoteData(e) {
      if (e && (Array.isArray(e.history) && (rt.history = e.history, tn()), Array.isArray(e.history) && He(), Array.isArray(e.checkins) && (rt.checkins = e.checkins.map(ai), Va(), zi(), za(), tn(), He()), e.profiles && !kn.classList.contains("open") && !ua)) {
        const i = ao(e);
        Object.keys(Ue).forEach((s) => delete Ue[s]), Object.assign(Ue, i.profiles), rt.order = i.order, Ue[ut] || (ut = rt.order[0]), Bi(), Pn(ut);
      }
    },
    suspend() {
      m = !1;
    },
    resume() {
      m || (m = !0, Fo || (Fo = requestAnimationFrame(Oo)), Dn || (Dn = requestAnimationFrame(bi)), Ti(), Co(a.querySelector(".tab.active"), !1));
    }
  };
}
const Uu = /* @__PURE__ */ new Set(["roaming", "test_area"]), Yu = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window" },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62 }
}, $r = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, cn = "made_up_", Ai = (a) => {
  var l;
  return (l = String(a).split(".")[1]) == null ? void 0 : l.startsWith(cn);
}, Ns = (a) => a.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function cd(a) {
  const l = a.getHours() + a.getMinutes() / 60, o = Math.max(0, Math.sin((l - 7) / 13 * Math.PI));
  return 2.4 * o * o;
}
function Zu(a) {
  const l = new Date(a.getFullYear(), a.getMonth(), a.getDate());
  let o = 0;
  for (let c = +l; c < +a; c += 10 * 60 * 1e3) o += cd(new Date(c)) / 6;
  return o;
}
function jd(a = /* @__PURE__ */ new Date()) {
  const l = [];
  for (let o = 0; o <= 96; o++) {
    const c = +a - (96 - o) * 15 * 60 * 1e3;
    l.push([c, cd(new Date(c))]);
  }
  return l;
}
function Ku({ onChange: a }) {
  const l = {}, o = {}, c = (Y, q, X, j) => {
    l[Y] = { entity_id: Y, state: X, attributes: j, last_changed: new Date(Date.now() - 18e6).toISOString() }, o[Y] = q;
  }, f = (Y, q, X) => {
    const j = l[Y], Z = q ?? j.state;
    l[Y] = { ...j, state: Z, attributes: { ...j.attributes, ...X }, last_changed: Z === j.state ? j.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, m = (Y, q, X, j) => c("binary_sensor." + cn + (Y ? Y + "_" : "") + Ns(q), Y, j ? "on" : "off", { friendly_name: q, device_class: X });
  Object.entries(Yu).forEach(([Y, q]) => {
    if (q.temperature != null && c("sensor." + cn + Y + "_temperature", Y, String(q.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), q.humidity != null && c("sensor." + cn + Y + "_humidity", Y, String(q.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), q.vacuum && c("vacuum." + cn + "robot", Y, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), q.climate && c("climate." + cn + Y, Y, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: q.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), q.cover) {
      const [X, j, Z, Q] = q.cover;
      c("cover." + cn + Y + "_" + Ns(X), Y, Z ? "open" : "closed", { friendly_name: X, device_class: j, current_position: Z, ...Q != null ? { current_tilt_position: Q } : {} });
    }
    if (q.humidifier && c("humidifier." + cn + Y, Y, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: q.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), q.solar && (c("sensor." + cn + Y + "_solar_power", Y, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), c("sensor." + cn + Y + "_solar_today", Y, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), q.valve && c("valve." + cn + Y + "_" + Ns(q.valve), Y, "closed", { friendly_name: q.valve, device_class: "water" }), q.door && m(Y, q.door, "door", q.doorOpen), q.window && m(Y, q.window, "window", !1), q.motion && m(Y, q.motion, "motion", !1), q.plant) {
      const [X, j, Z, Q, _] = q.plant, V = cn + Ns(X), ge = (w, be, Ce, Oe, y) => c("sensor." + V + "_" + w, Y, String(Ce), { friendly_name: be, device_class: y, state_class: "measurement", unit_of_measurement: Oe, plant_low: Ce < $r[w][0], plant_high: Ce > $r[w][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[w] });
      ge("moisture", "Moisture", j, "%", "moisture"), ge("light", "Light", Z, "lx", "illuminance"), ge("temperature", "Temperature", Q, "°C", "temperature"), ge("fertility", "Fertility", _, "µS/cm", "conductivity");
      const Te = Object.entries({ moisture: j, light: Z, temperature: Q, fertility: _ }).filter(([w, be]) => be < $r[w][0] || be > $r[w][1]).map(([w, be]) => w + (be < $r[w][0] ? " low" : " high"));
      c("plant." + V, Y, Te.length ? "problem" : "ok", { friendly_name: X, moisture: j, brightness: Z, temperature: Q, conductivity: _, problem: Te.join(", ") || "none" });
    }
  }), c("alarm_control_panel." + cn + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), m(null, "Front door", "door", !1), m(null, "Smoke alarm", "smoke", !1), c("sensor." + cn + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const v = {}, T = {};
  let b = null;
  function P() {
    const Y = /* @__PURE__ */ new Date();
    Object.keys(l).forEach((q) => {
      q.endsWith("_solar_power") && (l[q] = { ...l[q], state: cd(Y).toFixed(2) }), q.endsWith("_solar_today") && (l[q] = { ...l[q], state: Zu(Y).toFixed(1) });
    });
  }
  P();
  let ie = 0;
  function ne() {
    let Y = !1;
    const q = ++ie % 10 === 0, X = (Q, _, V) => {
      f(Q, _, V), Y = !0;
    };
    Object.entries(v).forEach(([Q, _]) => {
      const V = l[Q].attributes.current_position, ge = V < _ ? Math.min(_, V + 10) : Math.max(_, V - 10);
      ge === _ && delete v[Q], X(Q, ge === _ ? ge === 0 ? "closed" : "open" : _ > V ? "opening" : "closing", { current_position: ge });
    }), Object.entries(T).forEach(([Q, _]) => {
      const V = l[Q].attributes.current_tilt_position, ge = V < _ ? Math.min(_, V + 25) : Math.max(_, V - 25);
      ge === _ && delete T[Q], X(Q, null, { current_tilt_position: ge });
    }), Object.keys(l).filter((Q) => Q.startsWith("climate.")).forEach((Q) => {
      const _ = l[Q], V = _.attributes, ge = V.current_temperature, Te = (_.state === "heat" || _.state === "auto") && ge < V.temperature - 0.05, w = (_.state === "cool" || _.state === "auto") && ge > V.temperature + 0.05, be = _.state === "off" ? "off" : Te ? "heating" : w ? "cooling" : "idle", Ce = q ? Math.round((ge + (Te ? 0.1 : w ? -0.1 : 0)) * 10) / 10 : ge;
      (Ce !== ge || be !== V.hvac_action) && X(Q, null, { current_temperature: Ce, hvac_action: be });
    }), Object.keys(l).filter((Q) => Q.startsWith("humidifier.")).forEach((Q) => {
      const _ = l[Q], V = _.attributes, ge = V.current_humidity, Te = _.state === "on" && ge < V.humidity, w = Te && q ? ge + 1 : ge, be = _.state !== "on" ? "off" : Te ? "humidifying" : "idle";
      if (w !== ge || be !== V.action) {
        X(Q, null, { current_humidity: w, action: be });
        const Ce = "sensor." + cn + o[Q] + "_humidity";
        l[Ce] && X(Ce, String(w));
      }
    });
    const j = l["vacuum." + cn + "robot"], Z = j.attributes;
    j.state === "cleaning" && q && X(j.entity_id, null, { battery_level: Math.max(5, Z.battery_level - 1) }), j.state === "returning" && X(j.entity_id, "docked", {}), j.state === "docked" && Z.battery_level < 100 && X(j.entity_id, null, { battery_level: Math.min(100, Z.battery_level + 2) }), b && Date.now() - b.at > 5e3 && (X("alarm_control_panel." + cn + "house", "armed_" + b.mode, {}), b = null), Y && a();
  }
  const I = setInterval(ne, 1e3), O = setInterval(() => {
    P(), a();
  }, 60 * 1e3);
  function $(Y, q, X) {
    const j = X == null ? void 0 : X.entity_id;
    if (!l[j]) return !1;
    const Z = l[j], Q = Z.attributes, _ = (V, ge) => f(j, V, ge);
    if (Y === "climate" && (q === "set_temperature" && _(null, { temperature: Math.max(Q.min_temp, Math.min(Q.max_temp, X.temperature)) }), q === "set_hvac_mode" && _(X.hvac_mode, X.hvac_mode === "off" ? { hvac_action: "off" } : {}), q === "toggle" && _(Z.state === "off" ? "heat" : "off", Z.state === "off" ? {} : { hvac_action: "off" })), Y === "cover") {
      const V = q === "open_cover" ? 100 : q === "close_cover" ? 0 : q === "set_cover_position" ? X.position : q === "toggle" ? Q.current_position > 0 ? 0 : 100 : null;
      q === "stop_cover" && (delete v[j], delete T[j], _(Q.current_position === 0 ? "closed" : "open")), V != null && V !== Q.current_position && (v[j] = V, _(V > Q.current_position ? "opening" : "closing"));
      const ge = q === "open_cover_tilt" ? 100 : q === "close_cover_tilt" ? 0 : q === "set_cover_tilt_position" ? X.tilt_position : null;
      q === "stop_cover_tilt" && delete T[j], ge != null && Q.current_tilt_position != null && ge !== Q.current_tilt_position && (T[j] = ge);
    }
    if (Y === "humidifier" && (q === "set_humidity" && _(null, { humidity: Math.max(Q.min_humidity, Math.min(Q.max_humidity, X.humidity)) }), q === "set_mode" && _(null, { mode: X.mode }), q === "turn_on" || q === "turn_off" || q === "toggle")) {
      const V = q === "turn_on" || q === "toggle" && Z.state !== "on";
      _(V ? "on" : "off", { action: V ? "idle" : "off" });
    }
    if (Y === "vacuum" && (q === "start" && _("cleaning", { rooms: X.rooms || Q.rooms }), q === "pause" && _("paused"), q === "return_to_base" && _("returning", { rooms: [] }), q === "locate" && _(null, { located: Date.now() }), q === "set_rooms" && _(null, { rooms: X.rooms })), Y === "valve") {
      const V = q === "open_valve" || q === "toggle" && Z.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(q) && _(V ? "open" : "closed");
    }
    if (Y === "alarm_control_panel") {
      q === "alarm_disarm" && (b = null, _("disarmed", { changed_by: "Matt" }));
      const V = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[q];
      V && (b = { mode: V, at: Date.now() }, _("arming", { changed_by: "Matt" }));
    }
    return a(), !0;
  }
  function te(Y) {
    const q = (Y == null ? void 0 : Y.states) || {}, X = (Y == null ? void 0 : Y.entities) || {}, j = (Y == null ? void 0 : Y.devices) || {}, Z = (M) => {
      var de;
      const R = X[M];
      return R && (R.area_id || R.device_id && ((de = j[R.device_id]) == null ? void 0 : de.area_id)) || null;
    }, Q = (M) => {
      const R = X[M];
      return q[M] && q[M].state !== "unavailable" && !(R != null && R.hidden) && !(R != null && R.entity_category);
    }, _ = {};
    Object.keys(q).forEach((M) => {
      const R = Z(M);
      R && Q(M) && (_[R] || (_[R] = [])).push(M);
    });
    const V = { ...q, ...l }, ge = (M) => {
      var R, de;
      return (de = (R = V[M]) == null ? void 0 : R.attributes) == null ? void 0 : de.device_class;
    }, Te = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], w = Object.keys(q).filter((M) => M.startsWith("vacuum.") && Q(M)), be = Object.values((Y == null ? void 0 : Y.areas) || {}).filter((M) => !Uu.has(M.area_id)).map((M) => {
      const R = M.area_id, de = _[R] || [], G = ($e) => de.filter((Mt) => Mt.startsWith($e + ".")), ae = ($e) => G("sensor").filter((Mt) => ge(Mt) === $e), le = ($e) => Object.keys(l).filter((Mt) => o[Mt] === R && $e(Mt)), me = ($e, Mt) => $e.length ? $e : le(Mt), We = me(ae("temperature"), ($e) => $e.endsWith(R + "_temperature")), et = me(ae("humidity"), ($e) => $e.endsWith(R + "_humidity")), wt = ae("power").filter(($e) => /^(W|kW)$/.test(V[$e].attributes.unit_of_measurement || "")), pn = G("binary_sensor").filter(($e) => ge($e) === "moisture"), Bn = me(G("plant"), ($e) => $e.startsWith("plant.")).map(($e) => ({ id: $e, readings: le((Mt) => Mt.startsWith("sensor." + $e.split(".")[1] + "_")) })), It = [...G("binary_sensor").filter(($e) => Te.includes(ge($e))), ...le(($e) => $e.startsWith("binary_sensor."))];
      return {
        id: R,
        name: M.name,
        icon: M.icon,
        readings: [...We.slice(0, 1), ...et.slice(0, 1), ...pn],
        power: wt.length ? wt.reduce(($e, Mt) => $e + Number(V[Mt].state) * (V[Mt].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: G("switch"),
        lights: G("light"),
        actions: [...G("light"), ...me(G("climate"), ($e) => $e.startsWith("climate.")), ...me(G("cover"), ($e) => $e.startsWith("cover.")), ...me(G("humidifier"), ($e) => $e.startsWith("humidifier.")), ...me(G("valve"), ($e) => $e.startsWith("valve.")), ...G("media_player"), ...G("vacuum"), ...w.length ? [] : le(($e) => $e.startsWith("vacuum."))],
        solar: le(($e) => $e.includes("_solar_")),
        plants: Bn,
        openings: It,
        alerts: [...pn, ...It].filter(($e) => {
          var Mt;
          return ((Mt = V[$e]) == null ? void 0 : Mt.state) === "on";
        })
      };
    }).filter((M) => M.readings.length || M.plugs.length || M.actions.length || M.solar.length || M.plants.length), Ce = Object.keys(q).find((M) => /^sensor\..*(p1_meter_power|grid_power)$/.test(M) && q[M].state !== "unavailable") || null, Oe = (M) => Object.keys(q).filter((R) => R.startsWith(M + ".") && Q(R)), y = Oe("alarm_control_panel"), A = w.length ? w : ["vacuum." + cn + "robot"];
    return {
      states: V,
      rooms: be,
      grid: Ce,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (M) => l[M] ? o[M] : Z(M),
      vacuums: A,
      homeVacuums: A.filter((M) => !be.some((R) => R.actions.includes(M))),
      security: {
        alarms: y.length ? y : ["alarm_control_panel." + cn + "house"],
        locks: Oe("lock"),
        openings: [...Object.keys(l).filter((M) => M.startsWith("binary_sensor.")), "sensor." + cn + "doorbell"]
      }
    };
  }
  return { model: te, call: $, stop() {
    clearInterval(I), clearInterval(O);
  } };
}
const Ro = (a) => a < 0 ? 0 : a > 1 ? 1 : a, ad = (a) => {
  const l = String(a || "#000000").trim().replace("#", ""), o = l.length === 3 ? l.split("").map((c) => c + c).join("") : l;
  return [0, 2, 4].map((c) => parseInt(o.slice(c, c + 2), 16) || 0);
}, $u = (a) => "#" + a.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), Gd = {}, Ca = (a, l, o) => {
  const c = a + l + o;
  return Gd[c] || (Gd[c] = $u(ad(a).map((f, m) => f + (ad(l)[m] - f) * o)));
}, Ud = {}, js = (a) => Ud[a] || (Ud[a] = ad(a));
function Xu(a) {
  const l = { clear: [a.skyClearDay, a.skyClearNight], cloudy: [a.skyCloudyDay, a.skyCloudyNight], rain: [a.skyRainDay, a.skyRainNight], snow: [a.skySnowDay, a.skySnowNight], fog: [a.skyFogDay, a.skyFogNight] };
  return l.partly = [Ca(l.clear[0], l.cloudy[0], 0.12), Ca(l.clear[1], l.cloudy[1], 0.12)], l.storm = [Ca(l.rain[0], "#000000", 0.22), Ca(l.rain[1], "#000000", 0.22)], l;
}
const Ju = [
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
], Do = (a, l) => (Ju[(l & 7) * 8 + (a & 7)] + 0.5) / 64, Hc = 1, Fc = 2, Oc = 3, qc = 4, hr = 5, Ys = 6, od = 7, Wc = 8, Yd = (a, l) => l <= 0.6665 && ((a - 0.5) * (a - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (a - 0.25) * (a - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (a - 0.791) * (a - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || a >= 0.25 && a <= 0.791 && l >= 0.416), Qu = (a, l, o) => {
  let c = !1;
  for (let f = 0, m = a.length - 1; f < a.length; m = f++) {
    const v = a[f], T = a[m];
    v[1] > o != T[1] > o && l < (T[0] - v[0]) * (o - v[1]) / (T[1] - v[1]) + v[0] && (c = !c);
  }
  return c;
};
function ep(a, l, o, c, { oneBit: f, ink: m, paper: v, snowInk: T }) {
  const b = new Uint8ClampedArray(o * c * 4), P = js(m), ie = js(v);
  for (let ne = 0; ne < c; ne++) for (let I = 0; I < o; I++) {
    const O = ne * o + I, $ = l[O];
    if (a[O] == null) continue;
    let te = js(a[O]);
    if (f) {
      let Y;
      $ === qc || $ === Wc ? Y = !0 : $ === hr ? Y = T : $ === od || $ === Ys ? Y = !1 : Y = Math.round((0.2126 * te[0] + 0.7152 * te[1] + 0.0722 * te[2]) / 255 * 4) / 4 <= Do(I, ne), ($ === Hc || $ === Fc || $ === Oc || $ === Ys) && (I > 0 && l[O - 1] !== $ || I < o - 1 && l[O + 1] !== $ || ne > 0 && l[O - o] !== $ || ne < c - 1 && l[O + o] !== $) && (Y = !0), te = Y ? P : ie;
    }
    b[O * 4] = te[0], b[O * 4 + 1] = te[1], b[O * 4 + 2] = te[2], b[O * 4 + 3] = 255;
  }
  return { w: o, h: c, data: b };
}
const tp = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, np = (a) => $s(a, !1).split("/")[0], Bl = (a) => () => {
  a |= 0, a = a + 1831565813 | 0;
  let l = Math.imul(a ^ a >>> 15, 1 | a);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, ap = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", op = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", ip = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", rp = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", sp = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], lp = [".##", "##.", ".#.", "#.."];
function Vc(a, { width: l, height: o, colors: c, wave: f = 0.38, soft: m = 6, glow: v = 0.6, columns: T = 6 }) {
  const b = { ...Jn, dawn: "#e5a77e", ...c }, P = Xu(b), ie = l, ne = o, I = ie / T, O = I / 2, $ = Math.PI * 2, te = a.length ? a : [{ cond: "cloudy", night: !1 }], Y = [...Array(T * 2)].map((Z, Q) => {
    const _ = te[Math.min(Q, te.length - 1)], V = np(_.cond), ge = Q % 2 === 1;
    return { cond: _.cond, k: V, night: ge, sky: P[V][ge ? 1 : 0], cover: tp[V] };
  }), q = (Z) => ne * (0.5 - f * Math.cos($ * (Z / I - 0.25)));
  return { C: b, S: Y, W: ie, H: ne, cw: I, sw: O, TAU: $, yb: q, side: (Z, Q, _) => {
    const V = (Z ? q(Q) - _ : _ - q(Q)) / Math.max(3, m * 1.4) + 0.5;
    return V <= 0 ? 0 : V >= 1 ? 1 : V;
  }, glowAt: (Z) => {
    const Q = ((Z / I - 0.25) % 1 + 1) % 1, _ = Math.max(0, Math.min(T - 1, Math.round(Z / I - 0.25))), V = Math.max(0, Math.min(T - 1, Math.round(Z / I - 0.75))), ge = 1 - (Y[2 * _].cover + Y[2 * V + 1].cover) / 2, Te = Math.sin(Math.PI * Math.min(1, Math.max(0, q(Z) / ne)));
    return { c: Q < 0.5 ? b.dusk : b.dawn, a: v * (0.2 + 0.8 * ge) * Te * Te };
  }, soft: m, tw: I * 0.3, sy: ne / 90 };
}
function zc(a, { clock: l = 0, ambient: o = !1, seed: c = 1 }) {
  const { S: f, sw: m, side: v, C: T, TAU: b, sy: P } = a, ie = l, ne = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return f.forEach((I, O) => {
    const $ = Bl(c * 977 + O * 131 + 7), te = (O + 0.5) * m, Y = I.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[I.k] : 0;
    for (let q = 0; q < Y; q++) {
      const X = te + ($() - 0.5) * m * 1.6, j = (6 + $() * 76) * P, Z = $() < 0.35, Q = 1.8 + $() * 1.6, _ = v(!0, X, j) * (Z ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(b * ie / 2600 + q * 1.7 + O) : 1);
      _ >= 0.03 && ne.stars.push({ x: X, y: j, big: Z, size: Q, o: _ });
    }
    if (!I.night && (I.k === "clear" || I.k === "partly")) {
      const q = te + ($() - 0.5) * m * 0.3, X = Math.min(15, m * 0.29);
      ne.suns.push({ x: q, y: 32 * P, rad: X, halo: X * 2.8 * (o ? 1 + 0.07 * Math.sin(b * ie / 3600 + O) : 1) });
    }
    if (I.night && (I.k === "clear" || I.k === "partly")) {
      const q = Math.min(0.78, m * 0.55 / 34), X = te - 23 * q + ($() - 0.5) * m * 0.2;
      ne.moons.push({ x: X + 23 * q, y: (4 + (o ? 0.8 * Math.sin(b * ie / 5200 + O) : 0)) * P + 23 * q, d: 46 * q });
    }
  }), f.forEach((I, O) => {
    const $ = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[I.k];
    if (!$) return;
    const te = Bl(c * 577 + O * 71 + 3), Y = (O + 0.5) * m, q = I.k === "rain" || I.k === "storm" || I.night ? T.cloudNight : T.cloudDay, X = I.night ? 0.82 : I.k === "storm" ? 0.75 : 1;
    for (let j = 0; j < $; j++) {
      const Z = m / 46 * (I.k === "partly" ? 0.85 : 0.75 + te() * 0.55), Q = Y + (I.k === "partly" ? m * 0.12 : (te() - 0.5) * m * 1.05), _ = (I.k === "partly" ? 40 : 6 + te() * 26) * P, V = o ? 2.5 * Math.sin(b * ie / 9e3 + O * 1.3 + j * 2.1) : 0, ge = o ? 0.9 * Math.sin(b * ie / 6100 + O + j) : 0;
      ne.clouds.push({ x: Q - 23 * Z + V, y: _ - 15.33 * Z + ge, w: 46 * Z, h: 30.66 * Z, fill: q, o: X * ($ > 1 && j === 0 ? 0.85 : 1) });
    }
  }), f.forEach((I, O) => {
    const $ = Bl(c * 313 + O * 29 + 11), te = (O + 0.5) * m, Y = I.cond === "pouring" ? 16 : I.cond === "rainy" || I.cond === "hail" ? 9 : I.cond === "lightning-rainy" ? 12 : I.cond === "snowy-rainy" ? 5 : 0;
    for (let X = 0; X < Y; X++) {
      let j = te + ($() - 0.5) * m * 1.05, Z = 44 + $() * 36, Q = 1;
      if (o) {
        const V = ((Z - 44 + ie * 0.04) % 36 + 36) % 36;
        j -= 0.21 * (V - (Z - 44)), Z = 44 + V, Q = Math.min(1, V / 6, (36 - V) / 6);
      }
      Z *= P;
      const _ = v(I.night, j, Z) * Q;
      _ >= 0.05 && ne.drops.push({ x: j, y: Z, o: _ });
    }
    const q = I.cond === "snowy" ? 11 : I.cond === "snowy-rainy" ? 6 : 0;
    for (let X = 0; X < q; X++) {
      let j = te + ($() - 0.5) * m * 1.05, Z = 40 + $() * 44, Q = 1;
      if (o) {
        const V = ((Z - 40 + ie * 9e-3) % 44 + 44) % 44;
        Z = 40 + V, j += 1.6 * Math.sin(b * ie / 2800 + X * 1.9 + O), Q = Math.min(1, V / 6, (44 - V) / 6);
      }
      Z *= P;
      const _ = v(I.night, j, Z) * Q;
      _ >= 0.05 && ne.flakes.push({ x: j, y: Z, o: _ });
    }
    if (I.k === "fog") {
      const X = I.night ? "#c8ccd6" : "#ffffff", j = I.night ? 0.28 : 0.62, Z = o ? 4 * Math.sin(b * ie / 8e3 + O) : 0;
      for (let Q = 0; Q < 4; Q++) ne.fogs.push({ x: te - m * 0.75 + Q % 2 * m * 0.18 + (Q % 2 ? Z : -Z), y: (30 + Q * 13) * P, w: m * 1.3, c: X, a: j });
    }
    if (I.k === "storm") {
      const X = (ie / 3400 + O * 0.37) % 1;
      ne.bolts.push({ x: te + ($() - 0.5) * m * 0.3 - 5, y: 36 * P, o: o && !(X < 0.05 || X > 0.09 && X < 0.12) ? 0.8 : 1 });
    }
  }), ne;
}
function dp(a, l, o, c, f, m, v, T) {
  const { S: b, C: P, cw: ie, yb: ne, glowAt: I, soft: O, tw: $, sy: te } = a, Y = new Array(o * c), q = new Uint8Array(o * c), X = new Uint8Array(o * c), j = (y, A, M, R, de) => {
    M == null || y < 0 || A < 0 || y >= o || A >= c || (R >= 1 || R > Do(y + 5, A + 3)) && (Y[A * o + y] = M, q[A * o + y] = de);
  }, Z = (y, A, M, R) => {
    for (let de = Math.max(0, Math.floor(A - M) - 1); de <= Math.min(c - 1, A + M + 1); de++) for (let G = Math.max(0, Math.floor(y - M) - 1); G <= Math.min(o - 1, y + M + 1); G++) R(G, de, G + 0.5 - y, de + 0.5 - A);
  }, Q = (y, A, M) => {
    for (let de = 0; de < y.length - 1; de++) {
      const G = (de + A) * ie;
      if (M < G - $ / 2) return [y[de], y[de], 0];
      if (M <= G + $ / 2) return [y[de], y[de + 1], (M - G + $ / 2) / $];
    }
    const R = y[y.length - 1];
    return [R, R, 0];
  }, _ = b.filter((y) => !y.night).map((y) => y.sky), V = b.filter((y) => y.night).map((y) => y.sky), ge = O / m, Te = 16 * te / m;
  for (let y = 0; y < o; y++) {
    const A = (y + 0.5) * f, M = ne(A) / m, R = Q(_, 0.75, A), de = Q(V, 1.25, A), G = I(A);
    for (let ae = 0; ae < c; ae++) {
      const le = Do(y, ae), me = ae + 0.5 - M, We = (ge > 0.01 ? Ro(0.5 + me / ge) : me > 0 ? 1 : 0) > le;
      let et = We ? R[2] > le ? R[1] : R[0] : de[2] > le ? de[1] : de[0];
      (We ? Ro(((ae + 0.5) / c - 0.45) / 0.55) * 0.7 : Ro(1 - (ae + 0.5) / (c * 0.55)) * 0.7) > Do(y + 2, ae + 5) && (et = We ? Ca(et, "#ffffff", 0.18) : Ca(et, "#000000", 0.25)), We && me >= 0 && me < Te && G.a * 1.3 * (1 - me / Te) > Do(y + 6, ae + 1) && (et = G.c), Y[ae * o + y] = et, X[ae * o + y] = We ? 0 : 1;
    }
  }
  const w = Ca(P.sun, "#ffffff", 0.55), be = Ca(P.moon, "#ffffff", 0.6);
  l.stars.forEach((y) => {
    const A = Math.floor(y.x / f), M = Math.floor(y.y / m);
    if (A < 0 || M < 0 || A >= o || M >= c || !X[M * o + A] || y.o < 0.15) return;
    const R = y.o > 0.45 ? P.star : Ca(P.star, Y[M * o + A], 0.5), de = y.big && y.o > 0.6 ? Math.floor(y.size / f) : 0;
    j(A, M, R, 1, od);
    for (let G = 1; G <= de; G++) [[A - G, M], [A + G, M], [A, M - G], [A, M + G]].forEach((ae) => {
      ae[0] >= 0 && ae[1] >= 0 && ae[0] < o && ae[1] < c && X[ae[1] * o + ae[0]] && j(ae[0], ae[1], R, 1, od);
    });
  }), l.suns.forEach((y) => {
    const A = Math.max(1.5, y.rad / f), M = y.x / f, R = y.y / m, de = y.halo / f * 0.85;
    if (Z(M, R, de, (G, ae, le, me) => {
      const We = Math.sqrt(le * le + me * me);
      We > A && We < de && !X[ae * o + G] && j(G, ae, w, 0.3 * (1 - (We - A) / (de - A)), 0);
    }), T) {
      const G = Math.floor(v / 500) % 2, ae = Math.max(1, A * 0.3);
      for (let le = 0; le < 8; le++) if (le % 2 === G) for (let me = A + 1.2; me < A + 1.2 + ae; me += 0.7) j(Math.floor(M + Math.cos(le * Math.PI / 4) * me), Math.floor(R + Math.sin(le * Math.PI / 4) * me), P.sun, 1, Wc);
    }
    Z(M, R, A, (G, ae, le, me) => {
      le * le + me * me <= A * A && j(G, ae, Ro(((me / A + 1) / 2 - 0.6) / 0.4) > Do(G, ae) ? P.sunEdge : P.sun, 1, Hc);
    });
  }), l.moons.forEach((y) => {
    const A = Math.max(1.5, y.d * 0.37 / f), M = y.x / f, R = y.y / m, de = M + 0.547 * A, G = R - 0.503 * A, ae = 0.82 * A;
    Z(M, R, A, (le, me, We, et) => {
      if (We * We + et * et > A * A) return;
      const wt = le + 0.5 - de, pn = me + 0.5 - G;
      wt * wt + pn * pn > ae * ae && j(le, me, Ro((et + A) / (2 * A) * 1.1 - 0.1) > Do(le, me) ? P.moon : be, 1, Fc);
    });
  }), l.clouds.forEach((y) => {
    const A = Math.max(3, y.w / f), M = A * 0.6665, R = y.x / f, de = y.y / m, G = Ca(y.fill, "#000000", 0.16);
    for (let ae = Math.max(0, Math.floor(de) - 1); ae <= Math.min(c - 1, de + M + 1); ae++) for (let le = Math.max(0, Math.floor(R) - 1); le <= Math.min(o - 1, R + A + 1); le++) {
      const me = (le + 0.5 - R) / A, We = (ae + 0.5 - de) / A;
      Yd(me, We) && j(le, ae, !Yd(me, We + 1 / A) || Ro((We - 0.42) / 0.25) * 0.8 > Do(le, ae) ? G : y.fill, y.o, Oc);
    }
  }), l.fogs.forEach((y) => {
    const A = Math.floor(y.y / m), M = Math.max(A, Math.floor((y.y + 6 * te) / m) - 1), R = Math.floor(y.x / f), de = Math.floor((y.x + y.w) / f);
    for (let G = A; G <= M; G++) for (let ae = R; ae <= de; ae++) {
      const le = (ae - R) / Math.max(1, de - R);
      j(ae, G, y.c, y.a * (le < 0.25 ? le / 0.25 : le > 0.75 ? (1 - le) / 0.25 : 1), 0);
    }
  });
  const Ce = Math.max(2, Math.round(9 / m));
  l.drops.forEach((y) => {
    const A = y.x / f, M = Math.floor(y.y / m);
    for (let R = 0; R < Ce; R++) j(Math.floor(A - 0.208 * R * m / f), M + R, P.rain, y.o, qc);
  });
  const Oe = Math.max(0, Math.round(4.4 / f / 2.6));
  return l.flakes.forEach((y) => {
    const A = Math.floor(y.x / f), M = Math.floor(y.y / m);
    j(A, M, P.snow, y.o, hr);
    for (let R = 1; R <= Oe; R++)
      j(A - R, M, P.snow, y.o, hr), j(A + R, M, P.snow, y.o, hr), j(A, M - R, P.snow, y.o, hr), j(A, M + R, P.snow, y.o, hr);
  }), l.bolts.forEach((y) => {
    if (f <= 3.5)
      for (let A = Math.floor(y.y / m); A <= (y.y + 24) / m; A++) for (let M = Math.floor(y.x / f); M <= (y.x + 11) / f; M++)
        Qu(sp, (M + 0.5) * f - y.x, (A + 0.5) * m - y.y) && j(M, A, P.sun, 1, Ys);
    else {
      const A = Math.round(y.x / f), M = Math.round(y.y / m);
      lp.forEach((R, de) => R.split("").forEach((G, ae) => {
        G === "#" && j(A + ae, M + de, P.sun, 1, Ys);
      }));
    }
  }), { col: Y, ids: q };
}
function cp(a, l) {
  const o = l.px, c = Math.max(6, Math.round(l.width / o)), f = Math.max(6, Math.round(l.height / o)), m = l.width / c, v = l.height / f, T = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, b = (O) => {
    const $ = Vc(O, l);
    return dp($, zc($, { clock: T, ambient: l.ambient, seed: l.seed }), c, f, m, v, T, l.ambient);
  }, P = b(a), ie = l.reveal == null ? 1 : Ro(l.reveal);
  let ne = P.col, I = P.ids;
  if (ie < 1) {
    const O = l.prev ? b(l.prev) : null, $ = ie * (c + 12);
    ne = new Array(c * f), I = new Uint8Array(c * f);
    for (let te = 0; te < c * f; te++) {
      const Y = te % c, q = te / c | 0;
      (l.reduce ? ie : Ro(($ - Y) / 12)) > Do(Y, q) ? (ne[te] = P.col[te], I[te] = P.ids[te]) : O ? (ne[te] = O.col[te], I[te] = O.ids[te]) : (ne[te] = null, I[te] = 255);
    }
  }
  return ep(ne, I, c, f, { oneBit: l.oneBit, ink: l.ink || "#26221e", paper: l.paper || "#fbf9f6", snowInk: !1 });
}
function up(a, l, o) {
  const c = o.width, f = o.height, m = o.reveal == null ? 1 : Ro(o.reveal), v = (I, O) => {
    const $ = Vc(O, o);
    pp(I, $, zc($, o));
  };
  if (a.clearRect(0, 0, c, f), m >= 1) {
    v(a, l);
    return;
  }
  if (o.prev && v(a, o.prev), o.reduce) {
    a.save(), a.globalAlpha = m, v(a, l), a.restore();
    return;
  }
  const T = a.canvas, b = T.__wxOff || (T.__wxOff = document.createElement("canvas"));
  (b.width !== T.width || b.height !== T.height) && (b.width = T.width, b.height = T.height);
  const P = b.getContext("2d");
  P.setTransform(a.getTransform()), P.clearRect(0, 0, c, f), v(P, l);
  const ie = m * (c + 64) - 64, ne = P.createLinearGradient(ie, 0, ie + 64, 0);
  ne.addColorStop(0, "rgba(0,0,0,1)"), ne.addColorStop(1, "rgba(0,0,0,0)"), P.globalCompositeOperation = "destination-in", P.fillStyle = ne, P.fillRect(0, 0, c, f), P.globalCompositeOperation = "source-over", a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.drawImage(b, 0, 0), a.restore();
}
function pp(a, l, o) {
  const { W: c, H: f, S: m, C: v, cw: T, yb: b, glowAt: P, soft: ie, tw: ne, sy: I } = l, O = (w, be) => {
    const Ce = js(w);
    return "rgba(" + Ce[0] + "," + Ce[1] + "," + Ce[2] + "," + Math.max(0, Math.min(1, be)).toFixed(3) + ")";
  }, $ = (w, be) => {
    const Ce = a.createLinearGradient(0, 0, c, 0);
    Ce.addColorStop(0, w[0]);
    for (let Oe = 0; Oe < w.length - 1; Oe++) {
      const y = (Oe + be) * T, A = (y - ne / 2) / c, M = (y + ne / 2) / c;
      A > 0 && A < 1 && Ce.addColorStop(A, w[Oe]), M > 0 && M < 1 && Ce.addColorStop(M, w[Oe + 1]);
    }
    return Ce.addColorStop(1, w[w.length - 1]), Ce;
  }, te = Math.max(24, Math.ceil(c / 4)), Y = (w, be) => {
    a.beginPath();
    for (let Ce = 0; Ce <= te; Ce++) {
      const Oe = c * Ce / te, y = w == null ? 0 : b(Oe) + w;
      Ce ? a.lineTo(Oe, y) : a.moveTo(Oe, y);
    }
    for (let Ce = te; Ce >= 0; Ce--) {
      const Oe = c * Ce / te;
      a.lineTo(Oe, b(Oe) + be);
    }
    a.closePath(), a.fill();
  };
  a.save(), a.fillStyle = $(m.filter((w) => !w.night).map((w) => w.sky), 0.75), a.fillRect(0, 0, c, f);
  const q = a.createLinearGradient(0, 0, c, 0);
  for (let w = 0; w <= 64; w++) {
    const be = P(c * w / 64);
    q.addColorStop(w / 64, O(be.c, Math.min(1, be.a)));
  }
  a.fillStyle = q;
  for (let w = 0; w < 8; w++)
    a.globalAlpha = 1 - w / 8, Y(w * 2 * I, (w + 1) * 2 * I);
  a.fillStyle = $(m.filter((w) => w.night).map((w) => w.sky), 1.25);
  const X = Math.max(0.5, ie), j = 6;
  a.globalAlpha = 1, Y(null, -X);
  for (let w = 0; w < j; w++)
    a.globalAlpha = 1 - (w + 0.5) / j, Y(-X + 2 * X * w / j, -X + 2 * X * (w + 1) / j);
  a.globalAlpha = 1;
  const Z = new Path2D(ip), Q = new Path2D(op), _ = new Path2D(ap), V = new Path2D(rp);
  a.fillStyle = v.star, o.stars.forEach((w) => {
    a.globalAlpha = w.o, w.big ? (a.save(), a.translate(w.x, w.y), a.scale(w.size, w.size), a.fill(Z), a.restore()) : (a.beginPath(), a.arc(w.x, w.y, 0.8, 0, Math.PI * 2), a.fill());
  }), a.globalAlpha = 1;
  const ge = Ca(v.sun, "#ffffff", 0.55);
  o.suns.forEach((w) => {
    const be = a.createRadialGradient(w.x, w.y, 0, w.x, w.y, w.halo);
    be.addColorStop(0, O(ge, 0.42)), be.addColorStop(0.7, O(ge, 0)), a.fillStyle = be, a.beginPath(), a.arc(w.x, w.y, w.halo, 0, Math.PI * 2), a.fill();
    const Ce = a.createLinearGradient(0, w.y - w.rad, 0, w.y + w.rad);
    Ce.addColorStop(0.6, v.sun), Ce.addColorStop(1, v.sunEdge), a.fillStyle = Ce, a.beginPath(), a.arc(w.x, w.y, w.rad, 0, Math.PI * 2), a.fill();
  });
  const Te = Ca(v.moon, "#ffffff", 0.6);
  o.moons.forEach((w) => {
    a.save(), a.translate(w.x - w.d / 2, w.y - w.d / 2), a.scale(w.d / 46, w.d / 46);
    const be = a.createLinearGradient(0, 6, 0, 40);
    be.addColorStop(0, Te), be.addColorStop(1, v.moon), a.fillStyle = be, a.fill(Q), a.restore();
  }), o.clouds.forEach((w) => {
    a.save(), a.globalAlpha = w.o, a.translate(w.x, w.y), a.scale(w.w / 46, w.h / 30.66), a.translate(-4, -9.67), a.fillStyle = w.fill, a.fill(_), a.restore();
  }), o.fogs.forEach((w) => {
    const be = a.createLinearGradient(w.x, 0, w.x + w.w, 0);
    be.addColorStop(0, O(w.c, 0)), be.addColorStop(0.25, O(w.c, w.a)), be.addColorStop(0.75, O(w.c, w.a)), be.addColorStop(1, O(w.c, 0)), a.fillStyle = be, a.fillRect(w.x, w.y, w.w, 6 * I);
  }), a.fillStyle = v.rain, o.drops.forEach((w) => {
    a.save(), a.globalAlpha = w.o, a.translate(w.x, w.y), a.rotate(12 * Math.PI / 180), a.fillRect(-1.5, 0, 3, 9), a.restore();
  }), a.fillStyle = v.snow, o.flakes.forEach((w) => {
    a.globalAlpha = w.o, a.beginPath(), a.arc(w.x, w.y, 2.2, 0, Math.PI * 2), a.fill();
  }), a.fillStyle = v.sun, o.bolts.forEach((w) => {
    a.save(), a.globalAlpha = w.o, a.translate(w.x, w.y), a.fill(V), a.restore();
  }), a.restore();
}
const hp = (a) => a === "sunny" ? "clear" : a === "clear-night" ? "night" : a === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(a) ? "rain" : ["snowy", "snowy-rainy"].includes(a) ? "snow" : "cloudy", ur = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Bs = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, Pl = (a, l) => '<path class="' + l + '" d="' + a + '"/>', fp = (a, l) => ' style="animation-delay:-' + Math.round(a * 137 % l) + 'ms"', ka = (a, l, o, c) => {
  const f = o * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (c < 1 ? ' opacity="' + c + '"' : "") + fp(a, 2400) + ' d="M' + a + " " + (l - o) + "L" + (a + f) + " " + (l - f) + "L" + (a + o) + " " + l + "L" + (a + f) + " " + (l + f) + "L" + a + " " + (l + o) + "L" + (a - f) + " " + (l + f) + "L" + (a - o) + " " + l + "L" + (a - f) + " " + (l - f) + 'Z"/>';
}, Zd = ([a, l, o], c) => '<path class="wbMoonPath" d="' + a + '" fill="url(#' + c + ')"/><defs><linearGradient id="' + c + '" x1="0" y1="' + l + '" x2="0" y2="' + o + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', mp = (a, l) => l ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', gp = (a) => (a ? ["29.35", "43.04", "56.74"].map((l, o) => '<g class="wbDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wbAccent" x="' + l + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + l + ' 60.65)"/></g>') : [19, 26, 33].map((l, o) => '<g class="wbDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + l + ' 38)"/></g>')).join(""), vp = (a) => (a ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([l, o], c) => '<circle class="wbFlake" style="animation-delay:-' + c * 640 + 'ms" cx="' + l + '" cy="' + o + '" r="' + (a ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function bp(a, l, o, c) {
  return a === "clear" ? l ? Zd(o ? Bs.l : Bs.s, c) + (o ? ka(70, 20, 5.83, 1) + ka(78.33, 41.67, 3.75, 0.8) + ka(60, 71.67, 3.33, 0.6) : ka(42, 12, 3.5, 1) + ka(47, 25, 2.25, 0.8) + ka(36, 43, 2, 0.6)) : mp(c, o) : a === "partly" ? (l ? Zd(o ? Bs.lp : Bs.sp, c) : o ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + Pl(o ? ur.lp : ur.sp, l ? "wbCloudLight" : "wbBright") + (l ? o ? ka(73.33, 16.67, 4.17, 0.9) : ka(44, 10, 2.5, 0.9) : "") : a === "cloudy" ? Pl(o ? ur.lc : ur.s, l ? "wbCloudLight" : "wbBright") + (l ? o ? ka(15, 15, 3.75, 0.8) + ka(76.67, 13.33, 2.92, 0.6) : ka(9, 9, 2.25, 0.8) + ka(46, 8, 1.75, 0.6) : "") : Pl(o ? ur.lr : ur.s, "wbCloudLight") + (a === "rain" ? gp(o) : vp(o));
}
function wp(a, l, o, c) {
  let f = hp(a);
  const m = f === "night" || !!o;
  f === "night" && (f = "clear");
  const v = l ? 90 : 54;
  return { k: f, night: m, svg: '<svg viewBox="0 0 ' + v + " " + v + '">' + bp(f, m, l, c) + "</svg>" };
}
const xp = [
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
], Ps = (a, l) => (xp[l % 8 * 8 + a % 8] + 0.5) / 64, Ba = (a) => [parseInt(a.slice(1, 3), 16), parseInt(a.slice(3, 5), 16), parseInt(a.slice(5, 7), 16)], Nn = (a, l, o) => [Math.round(a[0] + (l[0] - a[0]) * o), Math.round(a[1] + (l[1] - a[1]) * o), Math.round(a[2] + (l[2] - a[2]) * o)], Xr = (a) => a < 0 ? 0 : a > 1 ? 1 : a, Kd = (a, l) => {
  let o = a * 374761393 + l * 668265263 ^ 1540483477;
  return o = Math.imul(o ^ o >>> 13, 1274126177), ((o ^ o >>> 16) >>> 0) / 4294967296;
}, _i = [255, 255, 255], Yn = Ba("#26221e"), $d = Ba("#0288d1"), yp = Ba("#01579b"), Il = Ba(Jn.cloudDay), Hl = Ba(Jn.cloudNight), Is = Ba(Jn.dusk), Fl = Ba(Jn.sunEdge), kp = Ba(Jn.sun), Mp = 10, Xd = 0.3, No = 56, jc = 21;
function Cp(a) {
  const l = Array.from({ length: jc }, () => new Array(No).fill(void 0)), o = (v, T, b) => {
    l[T][v] = b;
  }, c = Nn(Is, Yn, 0.35), f = Nn(Yn, _i, 0.22);
  for (let v = 0; v <= 6; v++) {
    const T = v < 2 ? No - 2 : No - 1;
    for (let b = 6 - v; b <= T; b++) o(b, v, v < 2 ? c : v === 6 ? f : Yn);
  }
  const m = [Is, Fl, Hl, Ba(Jn.skyRainDay), Nn(Is, Yn, 0.2), Nn(a, Yn, 0.35)];
  [2, 3, 2, 3, 3].forEach((v, T) => {
    const b = 9 + T * 6;
    for (let P = 0; P < v; P++) {
      const ie = m[(T * 2 + P * 3) % m.length];
      for (let ne = b; ne < b + 5; ne++)
        o(ne, 7 + P * 2, Nn(ie, Yn, 0.12)), o(ne, 8 + P * 2, P === v - 1 ? Nn(ie, _i, 0.3) : ie);
      o(b + 5, 7 + P * 2, Yn), o(b + 5, 8 + P * 2, Yn);
    }
  });
  for (let v = 7; v <= 12; v++) o(5, v, Yn);
  o(5, 13, Fl);
  for (let v = 7; v <= 14; v++) for (let T = 42; T <= 51; T++) o(T, v, T === 51 ? Hl : Il);
  for (let v = 43; v <= 50; v += 2)
    o(v, 12, Yn), o(v, 9, Nn(Yn, Il, 0.4));
  for (let v = 40; v <= 53; v++) o(v, 14, v === 40 || v === 53 ? Hl : Il);
  for (let v = 15; v <= 18; v++) for (let T = 46; T <= 49; T++) o(T, v, v === 18 ? Yn : v === 16 ? Fl : Is);
  for (let v = 15; v <= 19; v++) o(44, v, Yn);
  return o(44, 20, kp), l;
}
function Sp(a, l, o, c) {
  const f = Math.max(1, Math.round(a)), m = Math.max(1, Math.round(l)), v = new Uint8ClampedArray(f * m * 4), T = Ba(c.skyClearDay), b = Ba(c.skyFogDay), P = Cp(T), ie = Math.round(m * 0.55), ne = Xr(1 - Math.log(o / Xd) / Math.log(Mp / Xd)), I = Nn(T, b, ne), O = (q) => Xr((q - 0.1) / 0.9), $ = Xr((1 - Math.exp(-2 / o) - 0.2) / 0.8), te = Math.round(f / 2 - No / 2), Y = ie + 3;
  for (let q = 0; q < m; q++) {
    const X = Y - 1 - q, j = q - Y;
    for (let Z = 0; Z < f; Z++) {
      const Q = Z - te;
      let _, V;
      const ge = X >= 0 && X < jc && Q >= 0 && Q < No ? P[X][Q] : void 0;
      if (ge)
        _ = ge, V = $;
      else if (X >= 0 && X <= 1 && Q >= 4 - X && Q <= 5 - X)
        _ = Nn(_i, $d, 0.15), V = $;
      else if (q < ie) {
        const be = Xr(((q + 0.5) / ie - 0.15) / 0.85) * 3, Ce = Math.min(3, Math.floor(be + Ps(Z + 2, q + 5)));
        _ = Nn(I, _i, Ce * 0.1), V = ne * 0.95;
      } else {
        const be = (q - ie + 0.5) / (m - ie), Ce = Math.min(1.5, 6e-3 / (be * be)), Oe = Xr(be * 1.4) * 3, y = Math.min(3, Math.floor(Oe + Ps(Z + 1, q + 6)));
        _ = Nn($d, yp, y / 3);
        const A = 1 + Math.round(be * 7), M = Math.floor(Z / (A * 3)), R = 0.06 + 0.16 * be, de = Z % (A * 3) < A;
        de && Kd(M, q) < R ? _ = Nn(_, _i, 0.18 + 0.1 * (1 - be)) : de && be > 0.5 && Kd(M, q - 1) < R && (_ = Nn(_, Yn, 0.12)), V = O(1 - Math.exp(-Ce / o)), j === 0 && Q >= 3 && Q <= 8 ? (_ = Nn(_, _i, Q < 6 ? 0.8 : 0.45), V = $) : j >= 0 && j <= 2 && Q >= No && Q < No + 40 ? ((1 - (Q - No) / 40) * (j === 1 ? 0.9 : 0.5) > Ps(Z, q + 3) && (_ = Nn(_, _i, 0.5)), V = $) : j === 0 && Q >= 6 && Q < No && (_ = Nn(_, Yn, Q % 2 === 0 ? 0.35 : 0.2), V = $);
      }
      const Te = V > Ps(Z, q) ? b : _, w = (q * f + Z) * 4;
      v[w] = Te[0], v[w + 1] = Te[1], v[w + 2] = Te[2], v[w + 3] = 255;
    }
  }
  return { data: v, w: f, h: m };
}
const Tp = {
  GB: [
    ["Big Ben", "the London Eye", 0.46],
    ["Big Ben", "Trafalgar Square", 0.85],
    ["the London Eye", "Buckingham Palace", 1.58],
    ["Big Ben", "the Shard", 2.66],
    ["Big Ben", "Tower Bridge", 3.45],
    ["Buckingham Palace", "Tower Bridge", 4.64],
    ["Big Ben", "Hampstead Heath", 7.09],
    ["Buckingham Palace", "Canary Wharf", 8.48],
    ["Big Ben", "Wembley Stadium", 12.33],
    ["Big Ben", "Heathrow Airport", 23.47],
    ["Big Ben", "Brighton Palace Pier", 76.25]
  ],
  NL: [
    ["the Rijksmuseum", "the Van Gogh Museum", 0.34],
    ["Dam Square", "the Anne Frank House", 0.64],
    ["Dam Square", "Amsterdam Centraal", 0.83],
    ["Dam Square", "the Rijksmuseum", 1.54],
    ["Dam Square", "the Vondelpark", 2.37],
    ["Dam Square", "the Olympic Stadium", 4.22],
    ["Dam Square", "the Johan Cruyff Arena", 7.35],
    ["Dam Square", "Schiphol Airport", 11.34],
    ["Dam Square", "the Grote Kerk in Haarlem", 17.33],
    ["Dam Square", "Keukenhof", 26.12],
    ["Dam Square", "the Dom Tower in Utrecht", 35.05],
    ["Dam Square", "the Erasmus Bridge in Rotterdam", 58.61]
  ]
}, Lp = 1.6;
function Ap(a, l) {
  const o = a ? Tp[String(a).toUpperCase()] : void 0;
  if (!o || !(l > 0)) return;
  const c = (m) => Math.abs(Math.log(m[2] / l)), f = o.reduce((m, v) => c(v) < c(m) ? v : m);
  return c(f) <= Math.log(Lp) ? { from: f[0], to: f[1], km: f[2] } : void 0;
}
const _p = (a, l) => l === "mi" ? a * 1.609344 : l === "m" ? a / 1e3 : l === "ft" ? a * 3048e-7 : l === "yd" ? a * 9144e-7 : a, Ep = (a) => a < 1 ? "very_poor" : a < 4 ? "poor" : a < 10 ? "moderate" : a < 20 ? "good" : a < 40 ? "very_good" : "excellent", to = 6e4, Qa = 36e5, Ei = 864e5, es = 1440, Dp = 6, Rp = 10 * to, Hs = 3, Ol = 20, Np = 3, Bp = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), Pp = 30 * to, Ip = 7, Hp = 3, Jd = 1, Fp = to, Op = 15 * to, qp = 5, Zn = {
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
  eyeOutline: "M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z",
  flower: "M3,13A9,9 0 0,0 12,22C12,17 7.97,13 3,13M12,5.5A2.5,2.5 0 0,1 14.5,8A2.5,2.5 0 0,1 12,10.5A2.5,2.5 0 0,1 9.5,8A2.5,2.5 0 0,1 12,5.5M5.6,10.25A2.5,2.5 0 0,0 8.1,12.75C8.63,12.75 9.12,12.58 9.5,12.31C9.5,12.37 9.5,12.43 9.5,12.5A2.5,2.5 0 0,0 12,15A2.5,2.5 0 0,0 14.5,12.5C14.5,12.43 14.5,12.37 14.5,12.31C14.88,12.58 15.37,12.75 15.9,12.75C17.28,12.75 18.4,11.63 18.4,10.25C18.4,9.25 17.81,8.4 16.97,8C17.81,7.6 18.4,6.74 18.4,5.75C18.4,4.37 17.28,3.25 15.9,3.25C15.37,3.25 14.88,3.41 14.5,3.69C14.5,3.63 14.5,3.56 14.5,3.5A2.5,2.5 0 0,0 12,1A2.5,2.5 0 0,0 9.5,3.5C9.5,3.56 9.5,3.63 9.5,3.69C9.12,3.41 8.63,3.25 8.1,3.25A2.5,2.5 0 0,0 5.6,5.75C5.6,6.74 6.19,7.6 7.03,8C6.19,8.4 5.6,9.25 5.6,10.25M12,22A9,9 0 0,0 21,13C16,13 12,17 12,22Z"
}, Ye = {
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
  metrics: { humidity: "Humidity", pressure: "Pressure", uv_index: "UV index", precipitation: "Precipitation", compared_to_average: "Compared to average", visibility: "Visibility" },
  dewPoint: "Dew point {dew_point}",
  pressure: { rising: "Rising over 3 hours", falling: "Falling over 3 hours", steady: "Steady over 3 hours" },
  uvLevel: { low: "Low", moderate: "Moderate", high: "High", very_high: "Very high", extreme: "Extreme" },
  visibilityLevel: { very_poor: "Very poor", poor: "Poor", moderate: "Moderate", good: "Good", very_good: "Very good", excellent: "Excellent" },
  visibilityLandmarks: "As far as {from} is from {to}",
  walkMinutes: "A {minutes}-minute walk",
  walkHours: "A {hours}-hour walk",
  walkDay: "A day's walk",
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
}, Wp = {
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
}, Vp = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], zp = Object.keys(Ye.phases), Fs = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)" }, jp = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, Gc = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], Os = 100, Qd = "µg/m³", Gp = "weather_alerts.air_quality_pollen", ec = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], Up = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, Yp = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], Zp = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, Kp = { daily: 1, hourly: 2 }, Fe = (a) => String(a ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), Gn = (a, l) => a.replace(/\{(\w+)\}/g, (o, c) => l[c] ?? ""), mr = (a) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + a + '"/></svg>', $p = () => {
  var a;
  return !!((a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches);
}, Sn = (a) => a != null && a !== "" && Number.isFinite(Number(a)), tc = /* @__PURE__ */ new Map(), nc = /* @__PURE__ */ new Map(), ql = /* @__PURE__ */ new WeakMap(), Xp = (a) => {
  switch (a == null ? void 0 : a.number_format) {
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
      return a == null ? void 0 : a.language;
  }
};
function un(a, l, o) {
  const c = Number(a);
  if (Number.isNaN(c)) return String(a);
  const f = (l == null ? void 0 : l.number_format) === "none", m = { maximumFractionDigits: 2, ...o, ...f ? { useGrouping: !1 } : {} }, v = f ? "en-US" : Xp(l), T = JSON.stringify([v, m]);
  let b = tc.get(T);
  if (!b) {
    try {
      b = new Intl.NumberFormat(v, m);
    } catch {
      b = new Intl.NumberFormat(void 0, m);
    }
    tc.set(T, b);
  }
  return b.format(c);
}
const ud = (a) => {
  var l;
  return ((l = a == null ? void 0 : a.locale) == null ? void 0 : l.language) || (a == null ? void 0 : a.language) || void 0;
};
function Jp(a) {
  if (!a) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (ql.has(a)) return ql.get(a);
  const l = a.time_format, o = l === "language" || l === "system" || !l ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(l === "language" ? a.language : void 0).includes("10") : l === "12";
  return ql.set(a, o), o;
}
const Uc = (a) => {
  var l, o;
  return ((l = a == null ? void 0 : a.locale) == null ? void 0 : l.time_zone) === "server" && ((o = a == null ? void 0 : a.config) != null && o.time_zone) ? a.config.time_zone : void 0;
};
function Yc(a, l) {
  const o = JSON.stringify([a, l]);
  let c = nc.get(o);
  if (!c) {
    try {
      c = new Intl.DateTimeFormat(a, l);
    } catch {
      c = new Intl.DateTimeFormat(void 0, { ...l, timeZone: void 0 });
    }
    nc.set(o, c);
  }
  return c;
}
const pr = (a, l) => Yc(ud(l), { hour: "numeric", minute: "2-digit", hourCycle: Jp(l == null ? void 0 : l.locale) ? "h12" : "h23", timeZone: Uc(l) }).format(a), ac = (a, l) => Yc(ud(l), { weekday: "short", timeZone: Uc(l) }).format(a), Qp = (a, l) => a.toLocaleDateString(ud(l), { weekday: "narrow" }), Un = (a, l) => Sn(l) ? un(Math.round(Number(l)), a.locale) + "°" : "–", gr = (a) => {
  const l = new Date(a);
  return l.setHours(0, 0, 0, 0), l;
}, Jr = (a, l) => a.getFullYear() === l.getFullYear() && a.getMonth() === l.getMonth() && a.getDate() === l.getDate(), la = Math.PI / 180, eh = 2440588, th = 2451545, Zs = la * 23.4397, nh = 149598e3, ah = -0.833 * la, oh = 0.133 * la, oc = 5 * to, Zc = (a) => a.getTime() / Ei - 0.5 + eh - th, Kc = (a, l) => Math.atan2(Math.sin(a) * Math.cos(Zs) - Math.tan(l) * Math.sin(Zs), Math.cos(a)), $c = (a, l) => Math.asin(Math.sin(l) * Math.cos(Zs) + Math.cos(l) * Math.sin(Zs) * Math.sin(a)), ih = (a, l) => la * (280.16 + 360.9856235 * a) - l, rh = (a, l, o) => Math.asin(Math.sin(l) * Math.sin(o) + Math.cos(l) * Math.cos(o) * Math.cos(a));
function Xc(a) {
  const l = la * (357.5291 + 0.98560028 * a), o = la * (1.9148 * Math.sin(l) + 0.02 * Math.sin(2 * l) + 3e-4 * Math.sin(3 * l)), c = l + o + la * 102.9372 + Math.PI;
  return { ra: Kc(c, 0), dec: $c(c, 0), dist: nh };
}
function Jc(a) {
  const l = la * (218.316 + 13.176396 * a), o = la * (134.963 + 13.064993 * a), c = la * (93.272 + 13.22935 * a), f = l + la * 6.289 * Math.sin(o), m = la * 5.128 * Math.sin(c);
  return { ra: Kc(f, m), dec: $c(f, m), dist: 385001 - 20905 * Math.cos(o) };
}
const Qc = (a, l, o, c) => {
  const f = Zc(l), m = a(f);
  return rh(ih(f, la * -c) - m.ra, la * o, m.dec);
}, pd = (a, l, o) => Qc(Xc, a, l, o), sh = (a, l, o) => Qc(Jc, a, l, o);
function eu(a, l, o, c) {
  const f = {};
  let m = o.getTime(), v = a(o) - l;
  for (let T = m + oc; T <= c.getTime(); T += oc) {
    const b = a(new Date(T)) - l;
    if (v < 0 != b < 0) {
      const P = new Date(m + (T - m) * v / (v - b));
      b > 0 ? f.rise ?? (f.rise = P) : f.set ?? (f.set = P);
    }
    m = T, v = b;
  }
  return f;
}
const tu = (a) => {
  const l = gr(a);
  return [l, new Date(l.getTime() + Ei)];
}, lh = (a, l, o) => eu((c) => pd(c, l, o), ah, ...tu(a)), dh = (a, l, o) => eu((c) => sh(c, l, o), oh, ...tu(a));
function ch(a) {
  const l = Zc(a), o = Xc(l), c = Jc(l), f = Math.acos(Math.sin(o.dec) * Math.sin(c.dec) + Math.cos(o.dec) * Math.cos(c.dec) * Math.cos(o.ra - c.ra)), m = Math.atan2(o.dist * Math.sin(f), c.dist - o.dist * Math.cos(f)), v = Math.atan2(Math.cos(o.dec) * Math.sin(o.ra - c.ra), Math.sin(o.dec) * Math.cos(c.dec) - Math.cos(o.dec) * Math.sin(c.dec) * Math.cos(o.ra - c.ra));
  return { fraction: (1 + Math.cos(m)) / 2, phase: 0.5 + 0.5 * m * (v < 0 ? -1 : 1) / Math.PI };
}
const uh = (a) => {
  const l = a * 28;
  return l < 0.5 || l > 27.5 ? "new_moon" : l < 6.5 ? "waxing_crescent" : l < 7.5 ? "first_quarter" : l < 13.5 ? "waxing_gibbous" : l < 14.5 ? "full_moon" : l < 20.5 ? "waning_gibbous" : l < 21.5 ? "last_quarter" : "waning_crescent";
}, Ks = (a) => {
  const l = a == null ? void 0 : a.config;
  return l && Sn(l.latitude) && Sn(l.longitude) ? { lat: Number(l.latitude), lon: Number(l.longitude) } : null;
};
function ic(a, l) {
  var P, ie, ne;
  const o = Ks(a), c = o ? lh(l, o.lat, o.lon) : {}, f = (P = a == null ? void 0 : a.states) == null ? void 0 : P["sun.sun"], m = gr(l).getTime(), v = (I) => {
    const O = I ? new Date(I) : null;
    return O && Number.isFinite(O.getTime()) && gr(O).getTime() === m ? O : null;
  }, T = v((ie = f == null ? void 0 : f.attributes) == null ? void 0 : ie.next_rising), b = v((ne = f == null ? void 0 : f.attributes) == null ? void 0 : ne.next_setting);
  return T && (c.rise = T), b && (c.set = b), c;
}
function ph(a) {
  var c;
  const l = (c = a == null ? void 0 : a.states) == null ? void 0 : c["sun.sun"];
  if ((l == null ? void 0 : l.state) === "below_horizon" || (l == null ? void 0 : l.state) === "above_horizon") return l.state === "below_horizon";
  const o = Ks(a);
  return o ? pd(/* @__PURE__ */ new Date(), o.lat, o.lon) < 0 : !1;
}
const ts = (a) => !!a && a.state !== "unavailable" && a.state !== "unknown", Xs = (a, l) => {
  var c;
  const o = (c = a.entities) == null ? void 0 : c[l];
  return !o || !o.hidden && !o.entity_category;
}, ma = (a, l, o) => {
  var c, f;
  for (const m of l) {
    const v = (c = a.states) == null ? void 0 : c[m];
    if (!ts(v)) continue;
    const T = (f = v.attributes) == null ? void 0 : f[o];
    if (T != null && T !== "") return { stateObj: v, value: T };
  }
}, hh = (a, l) => l.map((o) => {
  var c;
  return (c = a.states) == null ? void 0 : c[o];
}).find(ts), fh = (a, l, o) => l.map((c) => {
  var f;
  return (f = a.states) == null ? void 0 : f[c];
}).find((c) => {
  var f;
  return ts(c) && (((f = c.attributes) == null ? void 0 : f.supported_features) == null || Number(c.attributes.supported_features) & Kp[o]);
});
function fr(a, l, o) {
  var m, v, T, b;
  const c = ((v = (m = a.config) == null ? void 0 : m.unit_system) == null ? void 0 : v.length) || "", f = (l == null ? void 0 : l.attributes) || {};
  switch (o) {
    case "precipitation":
      return f.precipitation_unit || (c === "km" ? "mm" : "in");
    case "pressure":
      return f.pressure_unit || (c === "km" ? "hPa" : "inHg");
    case "wind_speed":
    case "wind_gust_speed":
      return f.wind_speed_unit || c + "/h";
    case "visibility":
      return f.visibility_unit || c;
    default:
      return f.temperature_unit || ((b = (T = a.config) == null ? void 0 : T.unit_system) == null ? void 0 : b.temperature) || "";
  }
}
function Gs(a, l, o, c) {
  try {
    if (typeof a.formatEntityAttributeValueToParts == "function") {
      const [f, ...m] = a.formatEntityAttributeValueToParts(l, o, c).map((v) => v.value);
      return { number: f, unit: m.join("").trim() };
    }
  } catch {
  }
  return { number: un(c, a.locale), unit: fr(a, l, o) };
}
function mh(a, l, o, c) {
  try {
    if (typeof a.formatEntityAttributeValue == "function") return a.formatEntityAttributeValue(l, o, c);
  } catch {
  }
  const f = Gs(a, l, o, c);
  return (f.number + " " + f.unit).trim();
}
function qs(a, l) {
  var c;
  try {
    if (typeof a.formatEntityState == "function") return a.formatEntityState(l);
  } catch {
  }
  const o = (c = l.attributes) == null ? void 0 : c.unit_of_measurement;
  return Wp[l.state] || (o && Sn(l.state) ? un(l.state, a.locale) + " " + o : l.state);
}
function rc(a, l) {
  var o;
  try {
    if (typeof a.formatEntityName == "function") return a.formatEntityName(l, { type: "entity" });
  } catch {
  }
  return ((o = l.attributes) == null ? void 0 : o.friendly_name) || l.entity_id;
}
const gh = (a) => a < 3 ? "low" : a < 6 ? "moderate" : a < 8 ? "high" : a < 11 ? "very_high" : "extreme", vh = (a) => Gc.find(([, l]) => a <= l)[0];
function bh(a, l) {
  if (l === "Beaufort") return Math.round(a);
  const o = l ? Up[l] : void 0;
  if (o === void 0) return;
  const c = Yp.findIndex((f) => a * o < f);
  return c === -1 ? 12 : c;
}
const sc = (a, l) => {
  const o = l ? Zp[l] : void 0;
  return o === void 0 ? void 0 : a * o;
}, lc = (a) => Object.keys(a.states || {}).find((l) => {
  var o, c;
  return l.startsWith("sensor.") && ((c = (o = a.entities) == null ? void 0 : o[l]) == null ? void 0 : c.platform) === "moon";
}), Wl = (a) => Object.values(a.states || {}).filter((l) => {
  var o, c;
  return l.entity_id.startsWith("sensor.") && ((o = l.attributes) == null ? void 0 : o.device_class) === "precipitation" && ["total", "total_increasing"].includes(((c = l.attributes) == null ? void 0 : c.state_class) ?? "") && Xs(a, l.entity_id);
}).map((l) => l.entity_id).sort()[0];
function wh(a) {
  var o;
  const l = {};
  for (const [c, f] of Object.entries(((o = a == null ? void 0 : a.core) == null ? void 0 : o.integration) ?? {})) {
    if (f && "integration_type" in f) {
      l[c] = f.categories;
      continue;
    }
    for (const [m, v] of Object.entries((f == null ? void 0 : f.integrations) ?? {})) l[m] = v == null ? void 0 : v.categories;
  }
  return l;
}
const nu = (a, l, o) => {
  var f, m, v;
  const c = (m = (f = a.entities) == null ? void 0 : f[o]) == null ? void 0 : m.platform;
  return !!c && !!((v = l[c]) != null && v.includes(Gp));
};
function xh(a, l) {
  const o = /* @__PURE__ */ new Map();
  return Object.values(a.states || {}).filter((c) => {
    var f;
    return c.entity_id.startsWith("sensor.") && ec.includes(((f = c.attributes) == null ? void 0 : f.device_class) ?? "") && Xs(a, c.entity_id) && nu(a, l, c.entity_id);
  }).sort((c, f) => c.entity_id.localeCompare(f.entity_id)).forEach((c) => {
    o.has(c.attributes.device_class) || o.set(c.attributes.device_class, c.entity_id);
  }), ec.map((c) => o.get(c)).filter(Boolean);
}
const yh = (a, l) => Object.values(a.states || {}).filter((o) => {
  var c, f;
  return o.entity_id.startsWith("sensor.") && Xs(a, o.entity_id) && nu(a, l, o.entity_id) && (((f = (c = a.entities) == null ? void 0 : c[o.entity_id]) == null ? void 0 : f.translation_key) ?? o.entity_id).toLowerCase().includes("pollen");
}).map((o) => o.entity_id).sort();
function dc(a, l, o) {
  const c = Math.max(l - a, 1e-6), f = o[o.length - 1], m = o.find((P) => c / P <= 4) ?? f * Math.ceil(c / (4 * f)), v = Math.floor(a / m) * m;
  let T = Math.ceil(l / m) * m;
  T === v && (T = v + m);
  const b = [];
  for (let P = v; P <= T + m / 1e3; P += m) b.push(P);
  return { min: v, max: T, ticks: b };
}
const Qr = (a, l, o) => {
  const c = (v) => [1, 3, 5].map((T) => parseInt(v.slice(T, T + 2), 16)), f = c(a), m = c(l);
  return "rgb(" + f.map((v, T) => Math.round(v + (m[T] - v) * o)).join(", ") + ")";
}, kh = (a, l, o, c) => {
  const f = o * Math.abs(1 - 2 * c), m = c < 0.5 ? 0 : 1;
  return "M " + a + " " + (l - o) + " A " + o + " " + o + " 0 0 0 " + a + " " + (l + o) + " A " + f + " " + o + " 0 0 " + m + " " + a + " " + (l - o) + " Z";
}, Eo = ({ icon: a, name: l, sub: o, visual: c, double: f, backdrop: m, cls: v }) => '<div class="wbCard wbSquare' + (f ? " wbDouble" : "") + (m ? " wbHasBackdrop" : "") + (v ? " " + v : "") + '">' + (m ? '<div class="wbBackdrop" aria-hidden="true">' + m + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + mr(a) + '</div><div class="wbText"><span class="wbName">' + Fe(l) + "</span>" + (o ? '<span class="wbSub">' + Fe(o) + "</span>" : "") + '</div></div><div class="wbVisual">' + c + "</div></div>", Ws = (a, l) => '<div class="wbValue"><span class="wbNum">' + Fe(a) + "</span>" + (l ? '<span class="wbUnitV">' + Fe(l) + "</span>" : "") + "</div>";
function Mh(a) {
  const l = a.max - a.min || 1, o = (T) => 100 - (Math.min(a.max, Math.max(a.min, T)) - a.min) / l * 100, c = (T) => T / es * 100 + "%", f = (T) => T.map((b) => b.t + "," + o(b.v)).join(" "), m = a.kind === "line" ? a.points : [];
  let v = '<div class="wbDayChart"><div class="wbDcSun">' + a.sun.map((T) => '<span class="wbDcSunMark" style="left:' + c(T.t) + '">' + mr(T.rise ? Zn.sunsetUp : Zn.sunsetDown) + Fe(T.label) + "</span>").join("") + "</div>";
  return v += '<div class="wbDcY">' + a.ticks.map((T) => '<span style="top:' + o(T) + '%">' + Fe(a.format(T)) + "</span>").join("") + "</div>", v += '<div class="wbDcPlot"><svg viewBox="0 0 ' + es + ' 100" preserveAspectRatio="none">' + a.night.map(([T, b]) => '<rect class="wbDcNight" x="' + T + '" y="0" width="' + (b - T) + '" height="100"></rect>').join("") + a.ticks.map((T) => '<line class="wbDcGrid" x1="0" x2="' + es + '" y1="' + o(T) + '" y2="' + o(T) + '" vector-effect="non-scaling-stroke"></line>').join("") + a.sun.map((T) => '<line class="wbDcSunLine" x1="' + T.t + '" x2="' + T.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (a.past && a.past.length > 1 ? '<polyline class="wbDcPast" points="' + f(a.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (m.length > 1 ? '<polygon class="wbDcArea" points="' + m[0].t + ",100 " + f(m) + " " + m[m.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + f(m) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (a.now ? '<line class="wbDcNow" x1="' + a.now.t + '" x2="' + a.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (a.kind === "bars" ? a.points.filter((T) => T.v > 0).map((T) => '<i class="wbDcBar" style="left:' + c(T.t + 12) + ";width:" + c(36) + ";height:" + (100 - o(T.v)) + '%"></i>').join("") : "") + (a.now && a.kind === "line" ? '<i class="wbDcDot" style="left:' + c(a.now.t) + ";top:" + o(a.now.v) + '%"></i>' : "") + (a.peak ? '<span class="wbDcPeak" style="left:' + c(a.peak.t) + ";top:" + o(a.peak.v) + '%">' + Fe(a.peak.label) + "</span>" : "") + (a.note ? '<span class="wbDcNote">' + Fe(a.note) + "</span>" : "") + "</div>", v += '<div class="wbDcX">' + a.hours.map((T) => '<span class="' + (T.minor ? "wbMinor" : "") + '" style="left:' + c(T.t) + '">' + Fe(T.label) + "</span>").join("") + "</div></div>", v;
}
function Ch(a, l) {
  const v = a.map((Y) => Y.value), T = Math.min(...v), b = Math.max(...v), P = b - T || 1, ie = (Y) => Y / (a.length - 1) * 300, ne = (Y) => 18 + (1 - (Y - T) / P) * 84, I = a.map((Y, q) => ie(q) + "," + ne(Y.value)).join(" "), O = v.indexOf(b), $ = v.indexOf(T), te = (Y) => Y === 0 ? "start" : Y === a.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true"><polygon class="wbArea" points="0,102 ' + I + ' 300,102"></polygon><polyline class="wbLine" points="' + I + '" vector-effect="non-scaling-stroke"></polyline><text x="' + ie(O) + '" y="' + (ne(b) - 6) + '" text-anchor="' + te(O) + '">' + Fe(l(b)) + '</text><text x="' + ie($) + '" y="' + (ne(T) + 14) + '" text-anchor="' + te($) + '">' + Fe(l(T)) + '</text><text x="0" y="120" text-anchor="start">' + Fe(a[0].label) + '</text><text x="300" y="120" text-anchor="end">' + Fe(a[a.length - 1].label) + "</text></svg>";
}
function Sh(a, l) {
  const m = a.map((ne) => ne.value).concat([]), v = Math.min(...m) - 2, T = Math.max(...m) + 1, b = T - v || 1, P = 300 / a.length, ie = (ne) => (1 - (ne - v) / b) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + a.map((ne, I) => '<rect class="wbBar' + (ne.now ? " wbNowBar" : "") + '" x="' + (I * P + P * 0.2) + '" y="' + ie(ne.value) + '" width="' + P * 0.6 + '" height="' + (104 - ie(ne.value)) + '" rx="6"></rect><text x="' + (I * P + P / 2) + '" y="120" text-anchor="middle">' + Fe(ne.label) + "</text>").join("") + "</svg>";
}
const Th = [
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
], Lh = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], cc = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], Ah = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let _h = 0;
function uc(a, { getHass: l, entityId: o, style: c = "bitmap", motion: f = !0, cards: m, onOpen: v } = {}) {
  var Ia, so;
  const T = "wb" + ++_h + "-", b = document.createElement("div");
  b.className = "wb";
  const P = document.createElement("div");
  P.className = "wbBento", b.appendChild(P), a.replaceChildren(b);
  const ie = ["current", "hourly", "sun", "moon", "wind", "uv_index", "compared_to_average", "humidity", "pressure", "precipitation", "visibility", "air_quality"].filter((L) => !m || m.includes(L)), ne = { current: "wide", hourly: "wide", compared_to_average: "double" }, I = {};
  ie.forEach((L) => {
    const C = document.createElement("div");
    C.className = "wbItem", C.dataset.card = L, C.dataset.size = ne[L] || "tile", C.hidden = !0, P.appendChild(C), I[L] = { el: C, html: null };
  });
  let O = !1, $ = null, te = 0, Y = -1, q = !1, X = null;
  const j = { openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", aq: void 0 }, Z = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let Q = /* @__PURE__ */ new Date(), _ = /* @__PURE__ */ new Date(), V = null;
  const ge = {}, Te = {}, w = (L) => {
    var C;
    return ((C = Te[L]) == null ? void 0 : C.forecast) ?? [];
  }, be = (L, C) => {
    var B;
    return Te[C] ? (B = L.states) == null ? void 0 : B[Te[C].entityId] : void 0;
  };
  function Ce(L) {
    const C = ge[L];
    C && (C.unsub.then((B) => {
      typeof B == "function" && B();
    }).catch(() => {
    }), delete ge[L]), Te[L] && delete Te[L];
  }
  function Oe(L, C, B) {
    var pe;
    if (typeof ((pe = L.connection) == null ? void 0 : pe.subscribeMessage) != "function") return;
    const K = { entityId: B };
    try {
      K.unsub = Promise.resolve(L.connection.subscribeMessage((fe) => {
        O || ge[C] !== K || (fe != null && fe.forecast ? Te[C] = { entityId: B, forecast: fe.forecast } : delete Te[C], jt());
      }, { type: "weather/subscribe_forecast", forecast_type: C, entity_id: B }));
    } catch (fe) {
      K.unsub = Promise.reject(fe);
    }
    K.unsub.catch(() => {
      ge[C] === K && delete ge[C];
    }), ge[C] = K;
  }
  function y(L, C) {
    var B;
    for (const K of ["daily", "hourly"]) {
      const pe = fh(L, C, K);
      ((B = ge[K]) == null ? void 0 : B.entityId) !== (pe == null ? void 0 : pe.entity_id) && (Ce(K), pe && Oe(L, K, pe.entity_id));
    }
  }
  const A = (L, C, B, K = !1) => L.callWS({
    type: "history/history_during_period",
    start_time: B.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [C],
    minimal_response: K,
    no_attributes: K,
    significant_changes_only: !1
  });
  async function M(L, C) {
    var ce, ve, we;
    const B = ma(L, C, "pressure");
    if (!B) return;
    const K = B.stateObj.entity_id, pe = await A(L, K, new Date(Date.now() - 3 * Qa)), fe = (we = (ve = (ce = pe == null ? void 0 : pe[K]) == null ? void 0 : ce.find((Pe) => {
      var ze;
      return typeof ((ze = Pe.a) == null ? void 0 : ze.pressure) == "number";
    })) == null ? void 0 : ve.a) == null ? void 0 : we.pressure;
    Z.pressureHistory = typeof fe == "number" ? { entityId: K, value: fe } : void 0;
  }
  async function R(L, C) {
    var ve;
    const B = ma(L, C, "temperature");
    if (!B) return;
    const K = B.stateObj.entity_id, pe = gr(/* @__PURE__ */ new Date()), fe = await A(L, K, new Date(pe.getTime() - Ip * Ei)), ce = /* @__PURE__ */ new Map();
    for (const we of (fe == null ? void 0 : fe[K]) ?? []) {
      const Pe = (ve = we.a) == null ? void 0 : ve.temperature, ze = new Date((we.lc ?? we.lu) * 1e3);
      if (typeof Pe != "number" || ze >= pe) continue;
      const je = ze.toDateString();
      ce.set(je, Math.max(ce.get(je) ?? -1 / 0, Pe));
    }
    Z.temperatureHistory = { entityId: K, dailyHighs: [...ce.values()], days: [...ce.entries()].map(([we, Pe]) => ({ date: new Date(we), high: Pe })) };
  }
  async function de(L) {
    const C = Wl(L);
    if (!C) return;
    const B = await L.callWS({ type: "recorder/statistic_during_period", statistic_id: C, rolling_window: { duration: { hours: 24 } } });
    Z.rain = { entityId: C, change: (B == null ? void 0 : B.change) ?? void 0 };
  }
  function G() {
    const L = l == null ? void 0 : l();
    if (!L || O || typeof L.callWS != "function") return;
    const C = We(L);
    Z.lastFetch = Date.now(), [M(L, C), R(L, C), de(L)].forEach((B) => B.then(() => jt(), () => {
    }));
  }
  async function ae() {
    const L = l == null ? void 0 : l();
    if (!L) return;
    const C = ma(L, We(L), "temperature");
    if (!C) return;
    const B = C.stateObj.entity_id, K = gr(/* @__PURE__ */ new Date());
    try {
      const pe = await A(L, B, K), fe = (ce) => ((pe == null ? void 0 : pe[B]) ?? []).map((ve) => {
        var we;
        return { time: ve.lu * 1e3, value: (we = ve.a) == null ? void 0 : we[ce] };
      }).filter((ve) => typeof ve.value == "number");
      Z.todayHistory = { day: K.toDateString(), fetched: Date.now(), temperature: fe("temperature"), humidity: fe("humidity") }, jt();
    } catch {
    }
  }
  async function le(L) {
    const C = l == null ? void 0 : l();
    if (C)
      try {
        const B = await A(C, L, new Date(Date.now() - 24 * Qa), !0), K = ((B == null ? void 0 : B[L]) ?? []).filter((fe) => Sn(fe.s)), pe = Math.max(1, Math.ceil(K.length / 48));
        Z.aqHistory = { entityId: L, points: K.filter((fe, ce) => ce % pe === 0).map((fe) => ({ label: pr(new Date(fe.lu * 1e3), C), value: Number(fe.s) })) }, jt();
      } catch {
      }
  }
  function me(L) {
    Z.categories === void 0 && (Z.categories = null, Promise.resolve().then(() => L.callWS({ type: "integration/descriptions" })).then((C) => {
      Z.categories = wh(C);
    }, () => {
      Z.categories = {};
    }).then(() => jt()));
  }
  function We(L) {
    var B;
    const C = Object.keys(L.states || {}).filter((K) => K.startsWith("weather.") && Xs(L, K)).sort();
    return o && ((B = L.states) != null && B[o]) ? [o, ...C.filter((K) => K !== o)] : C;
  }
  const et = (L) => Z.categories ? { air: xh(L, Z.categories), pollen: yh(L, Z.categories) } : { air: [], pollen: [] };
  function wt(L, C, B, K) {
    if (c === "smooth") {
      const pe = wp(L, C === 90, B, T + "g-" + K);
      return '<span class="wbWx wbS' + C + " wb" + pe.k[0].toUpperCase() + pe.k.slice(1) + (pe.night ? " wbNight" : "") + '" aria-hidden="true">' + pe.svg + "</span>";
    }
    return '<span class="wbWx wbS' + C + '" aria-hidden="true"><canvas data-wb-wx="' + Fe($s(L, B)) + '" data-size="' + C + '"></canvas></span>';
  }
  const pn = () => w("daily").filter((L) => L.templow != null).slice(0, Dp);
  function Bn(L, C) {
    const B = new Date(C.datetime), K = /* @__PURE__ */ new Date();
    return Jr(B, K) ? Ye.today : Jr(B, new Date(K.getTime() + Ei)) ? Ye.tomorrow : ac(B, L);
  }
  const It = (L, C, B) => B === 0 ? Bn(L, C) : ac(new Date(C.datetime), L);
  function $e(L, C) {
    var ze, je, qe, Ee;
    const B = hh(L, C);
    if (!B) return "";
    const K = pn(), pe = j.openDay !== void 0 ? K[j.openDay] : void 0, fe = ma(L, C, "temperature"), ce = K[0], ve = ce && Jr(new Date(ce.datetime), /* @__PURE__ */ new Date()), we = ((je = (ze = L.config) == null ? void 0 : ze.unit_system) == null ? void 0 : je.temperature) || ((qe = B.attributes) == null ? void 0 : qe.temperature_unit) || "";
    let Pe = '<div class="wbCard wbWeather' + (pe ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (pe ? " inert" : "") + '><div class="wbNow">' + (v ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + Fe(Ye.openPage) + '">' : '<div class="wbCurrent">') + wt(B.state, 90, ph(L), "now") + '<div class="wbTempBlock">' + (fe && Sn(fe.value) ? '<div class="wbTemp"><span class="wbDeg">' + Fe(un(Math.round(Number(fe.value)), L.locale)) + '</span><span class="wbUnit">' + Fe(we) + "</span></div>" : "") + '<div class="wbPlace">' + Fe(((Ee = L.config) == null ? void 0 : Ee.location_name) ?? "") + "</div></div>" + (v ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + Fe(qs(L, B)) + "</div>" + (ve && ce.templow != null ? '<div class="wbRange">' + Fe(Gn(Ye.range, { high: Un(L, ce.temperature), low: Un(L, ce.templow) })) + "</div>" : "") + "</div></div>";
    return K.length && (Pe += '<div class="wbColumns" role="list">' + K.map((Ze, Be) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + Be + '" data-wb-focus="col-' + Be + '"><span class="wbDay">' + Fe(It(L, Ze, Be)) + "</span>" + wt(Ze.condition ?? "cloudy", 60, !1, "col" + Be) + '<span class="wbTemps"><span class="wbHi">' + Fe(Un(L, Ze.temperature)) + '</span><span class="wbLo">' + Fe(Un(L, Ze.templow)) + "</span></span></button>").join("") + "</div>", Pe += '<div class="wbHalves" role="list">' + K.map((Ze, Be) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + Be + '" data-wb-focus="half-' + Be + '">' + wt(Ze.condition ?? "cloudy", 40, !1, "half" + Be) + '<span class="wbText"><span class="wbName">' + Fe(Bn(L, Ze)) + '</span><span class="wbSub">' + Fe(Gn(Ye.highLow, { high: Un(L, Ze.temperature), low: Un(L, Ze.templow) })) + "</span></span></button>").join("") + "</div>"), Pe + "</div>" + (pe ? hn(L, C, pe) : "") + "</div>";
  }
  function Mt(L) {
    const C = L.getTime(), B = Date.now() - Qa;
    return w("hourly").filter((K) => {
      const pe = new Date(K.datetime).getTime();
      return pe >= C && pe < C + Ei && pe > B;
    });
  }
  function Xe(L) {
    if (!L.length) return ["temperature"];
    const C = ["temperature"];
    return L.some((B) => B.precipitation != null || B.precipitation_probability != null) && C.push("precipitation"), L.some((B) => B.humidity != null) && C.push("humidity"), C;
  }
  function hn(L, C, B) {
    const K = gr(new Date(B.datetime)), pe = Mt(K), fe = Xe(pe), ce = fe.includes(j.dayMode) ? j.dayMode : "temperature", ve = (we) => we === "humidity" ? Ye.humidity : Ye.modes[we];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + wt(B.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + Fe(Bn(L, B)) + '</span><span class="wbSub">' + Fe(Gn(Ye.highLow, { high: Un(L, B.temperature), low: Un(L, B.templow) })) + '</span></div><button class="wbBack" title="' + Fe(Ye.back) + '" data-wb="close-day" data-wb-focus="back-day">' + mr(Zn.back) + "</button></div>" + (fe.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + fe.map((we) => '<button aria-pressed="' + (we === ce) + '" data-wb="day-mode" data-mode="' + we + '" data-wb-focus="day-mode-' + we + '">' + Fe(ve(we)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Mh(yn(L, C, K, pe, ce)) + "</div></div>";
  }
  function yn(L, C, B, K, pe) {
    var ri;
    const fe = B.getTime(), ce = Date.now(), ve = Jr(B, /* @__PURE__ */ new Date()), we = (ht) => (ht - fe) / to, Pe = (ht) => pr(new Date(ht), L), ze = (ht) => new Date(ht.datetime).getTime(), je = [0, 3, 6, 9, 12, 15, 18, 21].map((ht) => ({ t: ht * 60, label: Pe(fe + ht * Qa), minor: ht % 6 !== 0 })), { rise: qe, set: Ee } = ic(L, B), Ze = [], Be = [];
    qe && (Ze.push({ t: we(qe.getTime()), label: Pe(qe.getTime()), rise: !0 }), Be.push([0, we(qe.getTime())])), Ee && (Ze.push({ t: we(Ee.getTime()), label: Pe(Ee.getTime()), rise: !1 }), Be.push([we(Ee.getTime()), es]));
    const nt = Ks(L);
    !qe && !Ee && nt && pd(new Date(fe + Ei / 2), nt.lat, nt.lon) < 0 && Be.push([0, es]);
    const pt = ve ? we(ce) : void 0, Nt = { hours: je, sun: Ze, night: Be };
    if (!K.length && !ve) return { ...Nt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Ye.noHourly };
    if (pe === "precipitation") {
      const ht = K.some((Jt) => Jt.precipitation_probability != null), Ln = K.map((Jt) => ({ t: we(ze(Jt)), v: Number((ht ? Jt.precipitation_probability : Jt.precipitation) ?? 0) })), na = fr(L, be(L, "hourly"), "precipitation"), co = Math.max(0, ...Ln.map((Jt) => Jt.v)), Ha = ht ? 100 : dc(0, Math.max(co, 1), [0.5, 1, 2, 5, 10]).max, Fa = (Jt) => ht ? un(Jt, L.locale) + "%" : un(Jt, L.locale, { maximumFractionDigits: 1 }) + " " + na, Tt = Ln.find((Jt) => Jt.v === co);
      return {
        ...Nt,
        kind: "bars",
        points: Ln,
        min: 0,
        max: Ha,
        ticks: [0, Ha / 2, Ha],
        format: Fa,
        now: pt !== void 0 ? { t: pt, v: 0 } : void 0,
        peak: Tt && co > 0 ? { t: Tt.t + 30, v: Tt.v, label: Fa(Tt.v) } : void 0,
        note: co > 0 ? void 0 : Ye.noRain
      };
    }
    const Ct = pe === "humidity" ? "humidity" : "temperature", Zt = K.filter((ht) => ht[Ct] != null && (!ve || ze(ht) >= ce)).map((ht) => ({ t: we(ze(ht)), v: Number(ht[Ct]) }));
    let Kt, ta = [];
    if (pt !== void 0) {
      const ht = ma(L, C, Ct);
      ht && Sn(ht.value) && (Kt = { t: pt, v: Number(ht.value) }, Zt.unshift(Kt)), ta = (((ri = Z.todayHistory) == null ? void 0 : ri.day) === B.toDateString() ? Z.todayHistory[Ct] : []).filter((na) => na.time <= ce).map((na) => ({ t: Math.max(0, we(na.time)), v: na.value })), Kt && ta.length && ta.push(Kt);
    }
    const Tn = [...ta, ...Zt];
    if (!Tn.length) return { ...Nt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Ye.noHourly };
    const ii = Tn.map((ht) => ht.v), on = dc(Math.min(...ii), Math.max(...ii), Ct === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    Ct === "humidity" && (on.min = Math.max(0, on.min), on.max = Math.min(100, on.max), on.ticks = on.ticks.filter((ht) => ht >= 0 && ht <= 100));
    const Sa = Ct === "humidity" ? (ht) => un(ht, L.locale) + "%" : (ht) => Un(L, ht), lo = Ct === "temperature" ? Tn.reduce((ht, Ln) => Ln.v > ht.v ? Ln : ht) : void 0;
    return { ...Nt, kind: "line", points: Zt, past: ta, ...on, format: Sa, now: Kt, peak: lo ? { ...lo, label: Sa(lo.v) } : void 0 };
  }
  function Di(L) {
    const C = ["temperature"];
    return L.some((B) => B.precipitation_probability != null || B.precipitation != null) && C.push("precipitation"), L.some((B) => B.wind_speed != null) && C.push("wind"), C;
  }
  function rt() {
    const L = /* @__PURE__ */ new Date();
    return L.setHours(6, 0, 0, 0), L.getTime() > Date.now() && L.setDate(L.getDate() - 1), L;
  }
  function Ue(L, C) {
    var pe, fe;
    const B = w("daily"), K = [];
    for (let ce = 0; ce < Hs; ce++) for (const ve of [!1, !0]) {
      const we = L.getTime() + (ce * 24 + (ve ? 12 : 0)) * Qa, Pe = we + 12 * Qa, ze = {};
      C.forEach((qe) => {
        const Ee = new Date(qe.datetime).getTime();
        qe.condition && Ee >= we && Ee < Pe && (ze[qe.condition] = (ze[qe.condition] ?? 0) + (Bp.has(qe.condition) ? 2 : 1));
      });
      let je = (pe = Object.entries(ze).sort((qe, Ee) => Ee[1] - qe[1])[0]) == null ? void 0 : pe[0];
      if (!je) {
        const qe = new Date(we).toDateString();
        je = ((fe = B.find((Ee) => new Date(Ee.datetime).toDateString() === qe)) == null ? void 0 : fe.condition) ?? "cloudy";
      }
      K.push({ cond: ve && je === "sunny" ? "clear-night" : je, night: ve });
    }
    return K;
  }
  function ut(L, C, B) {
    const K = be(L, "hourly"), pe = C.precipitation_probability != null ? un(C.precipitation_probability, L.locale) + "%" : "", fe = C.precipitation ? un(C.precipitation, L.locale) + " " + fr(L, K, "precipitation") : "";
    switch (B) {
      case "precipitation":
        return pe ? [pe, fe] : [fe || "–", ""];
      case "wind":
        return C.wind_speed != null ? [un(Math.round(C.wind_speed), L.locale), fr(L, K, "wind_speed")] : ["–", ""];
      default:
        return [Un(L, C.temperature), (C.precipitation_probability ?? 0) >= 20 ? pe : ""];
    }
  }
  function ao(L) {
    V = null;
    const C = w("hourly"), B = Math.floor(Date.now() / to) * to, K = C.filter((Ee) => new Date(Ee.datetime).getTime() > B - Qa);
    if (!K.length) return "";
    const pe = Di(K), fe = pe.includes(j.hourlyMode) ? j.hourlyMode : "temperature", ce = rt(), ve = ce.getTime() + Hs * 24 * Qa, we = (B - ce.getTime()) / Qa * Ol, Pe = Hs * 24 * Ol, ze = (Ee) => (Ee - B) / Qa * Ol, je = [{ x: 0, label: Ye.now, entry: K[0] }, ...K.filter((Ee) => {
      const Ze = new Date(Ee.datetime);
      return ze(Ze.getTime()) >= 48 && Ze.getTime() < ve && Ze.getHours() % Np === 0;
    }).map((Ee) => {
      const Ze = new Date(Ee.datetime);
      return { x: ze(Ze.getTime()), label: pr(Ze, L), entry: Ee };
    })], qe = (Ee, Ze, Be) => '<span class="wbMark' + (Ze === 0 ? " wbFirst" : "") + '" style="left:' + Ee.x + 'px">' + Be + "</span>";
    return V = { segs: Ue(ce, C), seed: ce.getDate() }, '<div class="wbCard wbHc wbHourly"><div class="wbHeader"><h2 class="wbTitle">' + Fe(Ye.nextHours) + "</h2></div>" + (pe.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + pe.map((Ee) => '<button aria-pressed="' + (Ee === fe) + '" data-wb="hourly-mode" data-mode="' + Ee + '" data-wb-focus="hourly-mode-' + Ee + '">' + Fe(Ye.modes[Ee]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll"><div class="wbStrip" style="width:' + (Pe - we) + 'px"><div class="wbRow wbTimes">' + je.map((Ee, Ze) => qe(Ee, Ze, Fe(Ee.label))).join("") + '</div><div class="wbSky"><div class="wbSkyArt" style="left:' + -we + "px;width:" + Pe + 'px"><canvas data-wb-strip' + (c === "smooth" ? "" : ' class="wbPixels"') + '></canvas></div></div><div class="wbRow wbValues">' + je.map((Ee, Ze) => {
      if (!Ee.entry) return "";
      const [Be, nt] = ut(L, Ee.entry, fe);
      return qe(Ee, Ze, '<span class="wbPrimaryV">' + Fe(Be) + '</span><span class="wbSecondary">' + Fe(nt) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function Ri(L) {
    const C = Q, { rise: B, set: K } = ic(L, C), pe = B && K ? Math.round((K.getTime() - B.getTime()) / to) : 0, fe = Math.floor(pe / 60), ce = pe % 60, ve = B && K ? (C.getTime() - B.getTime()) / (K.getTime() - B.getTime()) : -1, we = ve >= 0 && ve <= 1, Pe = Math.PI * (1 - Math.min(1, Math.max(0, ve))), ze = 100 + 74 * Math.cos(Pe), je = 100 - 74 * Math.sin(Pe), qe = we ? Math.sin(Math.PI * ve) : 0, Ee = we ? Qr("#2e0a0d", "#43180a", qe) : "#0e0507", Ze = we ? Qr("#7a1d12", "#8f400f", qe) : "#1c0709", Be = Qr("#f60c08", "#ff8f00", qe), nt = Qr("#fd9b07", "#ffd84a", qe), pt = we ? Qr("#fd9b07", "#ffd84a", qe) : "#6b3a2a", Nt = (Zt) => Zt ? pr(Zt, L) : "–", Ct = B && K ? new Date((B.getTime() + K.getTime()) / 2) : null;
    return Eo({
      icon: Zn.sunny,
      name: Ye.sun,
      sub: pe ? Gn(Ye.daylightShort, { hours: fe, minutes: ce }) : void 0,
      visual: '<div class="wbSunSky" style="background:linear-gradient(180deg, ' + Ee + ", " + Ze + ");--wb-sun-line:" + pt + '"><svg viewBox="0 0 200 124" aria-hidden="true"><defs><radialGradient id="' + T + 'sun-glow"><stop offset="0" stop-color="' + Be + '"></stop><stop offset="0.45" stop-color="' + Be + '"></stop><stop offset="1" stop-color="' + nt + '"></stop></radialGradient><clipPath id="' + T + 'above-horizon"><rect x="0" y="0" width="200" height="100"></rect></clipPath></defs><path class="wbSunPath" d="M 26 100 A 74 74 0 0 1 174 100"></path><line class="wbHorizon" x1="0" x2="200" y1="100" y2="100"></line>' + (we ? '<circle cx="' + ze + '" cy="' + je + '" r="14" fill="url(#' + T + 'sun-glow)" clip-path="url(#' + T + 'above-horizon)"></circle>' : "") + (Ct ? '<text class="wbSunTime wbNoon" x="100" y="1">' + Fe(Nt(Ct)) + "</text>" : "") + '<text class="wbSunTime" x="26" y="117">' + Fe(Nt(B)) + '</text><text class="wbSunTime" x="174" y="117">' + Fe(Nt(K)) + "</text></svg></div>"
    });
  }
  function ai(L, C, B) {
    const K = (ce) => T + "moon-" + ce, pe = L > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + K("terminator") + ')" d="' + kh(61, 61, 57.9, L) + '"' + (C ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", fe = (ce, ve, we, Pe, ze, je) => '<filter id="' + K(ce) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + ve + '" numOctaves="' + we + '" seed="' + Pe + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((qe) => "<feFunc" + qe + ' type="linear" slope="' + ze + '" intercept="' + je + '"></feFunc' + qe + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + K("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + K("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + K("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + K("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + K("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + fe("mottle", "0.045", 4, 3, 1.8, -0.4) + fe("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + K("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + K("fill") + ')"></circle><g' + (B ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + K("soften") + ')">' + Th.map(([ce, ve, we, Pe, ze, je]) => '<ellipse cx="' + ce + '" cy="' + ve + '" rx="' + we + '" ry="' + Pe + '" fill-opacity="' + je + '" transform="rotate(' + ze + " " + ce + " " + ve + ')"></ellipse>').join("") + "</g>" + Lh.map(([ce, ve, we]) => '<circle class="wbCrater" cx="' + ce + '" cy="' + ve + '" r="' + we + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + K("glow") + ')">' + Ah.map(([ce, ve]) => '<line x1="54.4" y1="95" x2="' + ce + '" y2="' + ve + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + K("glow") + ')">' + cc.map(([ce, ve, we]) => '<circle cx="' + ce + '" cy="' + ve + '" r="' + we * 2 + '"></circle>').join("") + "</g>" + cc.map(([ce, ve, we]) => '<circle class="wbBrightCenter" cx="' + ce + '" cy="' + ve + '" r="' + we + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + K("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + K("grain") + ')"></rect>' + pe + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function fn(L) {
    const C = _, B = Ks(L), K = (B == null ? void 0 : B.lat) ?? 0, pe = ch(C), fe = lc(L), ce = fe ? L.states[fe] : void 0, ve = ts(ce) && zp.includes(ce.state) ? ce.state : uh(pe.phase), { rise: we, set: Pe } = B ? dh(C, B.lat, B.lon) : {}, ze = pe.phase > 0.5 != K < 0, je = un(Math.round(pe.fraction * 100), L.locale) + "%", qe = we ?? Pe, Ee = qe ? pr(qe, L) : void 0;
    return Eo({
      icon: Zn.night,
      name: Ye.moon,
      sub: Ye.phases[ve],
      visual: '<div class="wbMoonBox">' + ai(pe.fraction, ze, K < 0) + '</div><div class="wbScaleNote wbMoonCaption"><span>' + (Ee ? Fe(Gn(we ? Ye.moonriseAt : Ye.moonsetAt, { time: Ee })) : "") + "</span><span>" + Fe(Gn(Ye.lit, { illumination: je })) + "</span></div>"
    });
  }
  function tt(L, C) {
    var Ze;
    const B = ma(L, C, "wind_speed");
    if (!B || !Sn(B.value)) return "";
    const K = ma(L, C, "wind_gust_speed"), pe = ma(L, C, "wind_bearing"), fe = pe && Sn(pe.value) ? Number(pe.value) : void 0, ce = bh(Number(B.value), (Ze = B.stateObj.attributes) == null ? void 0 : Ze.wind_speed_unit), ve = Gs(L, B.stateObj, "wind_speed", B.value), we = fe !== void 0 ? Ye.cardinal[Vp[((fe + 11.25) / 22.5 | 0) % 16]] : void 0, Pe = K ? mh(L, K.stateObj, "wind_gust_speed", K.value) : void 0, ze = [we ? Gn(Ye.windFrom, { direction: we }) : void 0, ce !== void 0 ? ce + " " + Ye.beaufort : void 0].filter(Boolean).join(" · ") || Pe, je = (Be, nt) => {
      const pt = (Be - 90) * Math.PI / 180;
      return [100 + nt * Math.cos(pt), 100 + nt * Math.sin(pt)];
    }, qe = Array.from({ length: 36 }, (Be, nt) => nt * 10).map((Be) => {
      const nt = Be % 90 === 0, [pt, Nt] = je(Be, 97), [Ct, Zt] = je(Be, nt ? 83 : 89);
      return '<line class="wbTick' + (nt ? " wbMajor" : "") + '" x1="' + pt + '" y1="' + Nt + '" x2="' + Ct + '" y2="' + Zt + '"></line>';
    }).join(""), Ee = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([Be, nt]) => {
      const [pt, Nt] = je(nt, 64);
      return '<text class="wbLetter' + (Be === "n" ? " wbNorth" : "") + '" x="' + pt + '" y="' + Nt + '">' + Fe(Ye.cardinal[Be]) + "</text>";
    }).join("");
    return Eo({ icon: Zn.windy, name: Ye.wind, sub: ze, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + qe + Ee + (fe !== void 0 ? '<path class="wbMarker" transform="rotate(' + fe + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + Fe(ve.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + Fe(ve.unit) + "</text></svg>" });
  }
  function Pn(L, C) {
    const B = ma(L, C, "uv_index");
    if (!B || !Sn(B.value)) return "";
    const K = Number(B.value), pe = Ye.uvLevel[gh(K)], fe = /* @__PURE__ */ new Date();
    fe.setHours(23, 59, 59, 999);
    const ce = w("hourly").filter((Be) => Be.uv_index != null && new Date(Be.datetime) > /* @__PURE__ */ new Date() && new Date(Be.datetime) <= fe).reduce((Be, nt) => !Be || nt.uv_index > Be.uv ? { uv: nt.uv_index, time: new Date(nt.datetime) } : Be, void 0), ve = 48, we = 100, Pe = 130, ze = (Be) => -ve + Math.min(Be, 11) / 11 * 2 * ve, je = (Be, nt) => {
      const pt = Be * Math.PI / 180;
      return [we + nt * Math.sin(pt), Pe - nt * Math.cos(pt)];
    }, qe = (Be, nt, pt) => {
      const [Nt, Ct] = je(ze(Be), pt), [Zt, Kt] = je(ze(nt), pt);
      return "M " + Nt + " " + Ct + " A " + pt + " " + pt + " 0 0 1 " + Zt + " " + Kt;
    }, Ze = '<svg class="wbVu" viewBox="0 0 200 134" preserveAspectRatio="xMidYMax meet" aria-hidden="true">' + [[0, 3, Fs.low], [3, 6, Fs.moderate], [6, 8, Fs.high], [8, 11, Fs.very_high]].map(([Be, nt, pt]) => '<path class="wbVuZone" d="' + qe(Be, nt, 96) + '" style="stroke:' + pt + '"></path>').join("") + Array.from({ length: 21 }, (Be, nt) => ({ angle: -ve + nt * (2 * ve / 20), major: nt % 2 === 0 })).map(({ angle: Be, major: nt }) => {
      const [pt, Nt] = je(Be, 102), [Ct, Zt] = je(Be, nt ? 114 : 108);
      return '<line class="wbVuTick' + (nt ? " wbMajor" : "") + '" x1="' + pt + '" y1="' + Nt + '" x2="' + Ct + '" y2="' + Zt + '"></line>';
    }).join("") + '<text class="wbVuLabel" x="100" y="70.1">UV</text><g class="wbVuNeedle" style="--wb-angle:' + ze(K) + 'deg"><line x1="' + we + '" y1="' + Pe + '" x2="' + we + '" y2="' + (Pe - 116) + '"></line></g><path class="wbVuHousing" d="M 64 134 L 64 128 A 36 36 0 0 1 136 128 L 136 134 Z"></path><text class="wbVuValue" x="100" y="114.9">' + Fe(un(Math.round(K), L.locale)) + "</text></svg>";
    return Eo({
      icon: Zn.sunnyAlert,
      name: Ye.metrics.uv_index,
      sub: ce && ce.uv > K ? Gn(Ye.uvPeak, { level: pe, uv_index: un(Math.round(ce.uv), L.locale), time: pr(ce.time, L) }) : pe,
      visual: Ze
    });
  }
  function Ni(L) {
    const C = w("daily")[0], B = Z.temperatureHistory;
    if (!C || new Date(C.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !Sn(C.temperature) || !B || B.dailyHighs.length < Hp) return "";
    const K = Number(C.temperature), pe = B.dailyHighs.reduce((Ct, Zt) => Ct + Zt, 0) / B.dailyHighs.length, fe = Math.round(K - pe) || 0, ce = fe > 0 ? "above" : fe < 0 ? "below" : "same", ve = [...B.days, { date: /* @__PURE__ */ new Date(), high: K, today: !0 }], we = 220, Pe = 158, ze = 22, je = 20, qe = ve.map((Ct) => Ct.high).concat(pe), Ee = Math.min(...qe) - 3, Ze = Math.max(...qe) + 1, Be = (Ct) => ze + (1 - (Ct - Ee) / (Ze - Ee)) * (Pe - ze - je), nt = we / ve.length, pt = Math.min(18, nt * 0.6), Nt = '<svg class="wbCompareBars" viewBox="0 0 ' + we + " " + Pe + '" aria-hidden="true"><line class="wbAvgLine" x1="0" x2="' + we + '" y1="' + Be(pe) + '" y2="' + Be(pe) + '"></line>' + ve.map((Ct, Zt) => {
      const Kt = Zt * nt + nt / 2, ta = Be(Ct.high), Tn = Ct.today ? " wbToday" : "";
      return '<rect class="wbAvgBar' + Tn + '" x="' + (Kt - pt / 2) + '" y="' + ta + '" width="' + pt + '" height="' + (Pe - je - ta) + '" rx="5"></rect><text class="wbAvgValue' + Tn + '" x="' + Kt + '" y="' + (ta - 6) + '">' + Fe(Un(L, Ct.high)) + '</text><text class="wbAvgDay' + Tn + '" x="' + Kt + '" y="' + (Pe - 4) + '">' + Fe(Qp(Ct.date, L)) + "</text>";
    }).join("") + "</svg>";
    return Eo({
      icon: Zn.chartLine,
      name: Ye.metrics.compared_to_average,
      double: !0,
      sub: Gn(Ye.highsLastDays, { days: B.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (fe > 0 ? "+" : "") + Fe(Un(L, fe)) + '</div><div class="wbCompareWords">' + Fe(Ye.average[ce]) + '</div><div class="wbCompareTemps">' + Fe(Gn(Ye.todayVsAverage, { today: Un(L, K), average: Un(L, pe) })) + "</div></div>" + Nt + "</div>"
    });
  }
  function ft(L, C) {
    const B = ma(L, C, "humidity");
    if (!B || !Sn(B.value)) return "";
    const K = ma(L, C, "dew_point"), pe = Math.max(0, Math.min(100, Number(B.value)));
    return Eo({
      icon: Zn.waterPercent,
      name: Ye.metrics.humidity,
      sub: K && Sn(K.value) ? Gn(Ye.dewPoint, { dew_point: Un(L, K.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + pe + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + Ws(un(Math.round(Number(B.value)), L.locale), "%") + "</div>"
    });
  }
  function De(L, C) {
    var Pe, ze;
    const B = ma(L, C, "pressure");
    if (!B || !Sn(B.value)) return "";
    const K = Number(B.value), pe = (Pe = B.stateObj.attributes) == null ? void 0 : Pe.pressure_unit, fe = sc(K, pe), ce = ((ze = Z.pressureHistory) == null ? void 0 : ze.entityId) === B.stateObj.entity_id ? sc(Z.pressureHistory.value, pe) : void 0;
    let ve;
    if (fe !== void 0 && ce !== void 0) {
      const je = fe - ce;
      ve = je >= Jd ? "rising" : je <= -Jd ? "falling" : "steady";
    }
    const we = Gs(L, B.stateObj, "pressure", Math.round(K));
    return Eo({
      icon: Zn.gauge,
      name: Ye.metrics.pressure,
      sub: ve ? Ye.pressure[ve] : void 0,
      visual: '<div class="wbTapeRow"><div class="wbTapeValue">' + Ws(we.number) + '<span class="wbTapeUnit">' + Fe(we.unit) + "</span></div>" + (fe !== void 0 ? st(L, fe) : "") + "</div>"
    });
  }
  function st(L, C) {
    const pe = Math.floor(C) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (fe, ce) => pe + ce).map((fe) => {
      const ce = 100 - (fe - C) * 9;
      if (ce < 22 || ce > 178) return "";
      const ve = fe % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(ce - 100) / 100) + '"><line class="wbTapeTick" x1="' + (ve ? 2 : 8) + '" x2="26" y1="' + ce + '" y2="' + ce + '"></line>' + (ve ? '<text class="wbTapeLabel" x="33" y="' + ce + '">' + Fe(un(fe, L.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + Fe(Ye.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + Fe(Ye.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function mt(L) {
    var we, Pe;
    const C = Wl(L), B = C ? L.states[C] : void 0;
    if (!B || ((we = Z.rain) == null ? void 0 : we.entityId) !== C || !Sn(Z.rain.change)) return "";
    const K = ((Pe = B.attributes) == null ? void 0 : Pe.unit_of_measurement) ?? "", pe = be(L, "hourly"), fe = Date.now() + Ei, ce = w("hourly").filter((ze) => ze.precipitation != null && new Date(ze.datetime).getTime() <= fe), ve = ce.reduce((ze, je) => ze + Number(je.precipitation), 0);
    return Eo({
      icon: Zn.rainy,
      name: Ye.metrics.precipitation,
      sub: pe && ce.length ? Gn(Ye.rainExpected, { amount: un(ve, L.locale, { maximumFractionDigits: 1 }) + " " + fr(L, pe, "precipitation") }) : Ye.rainLast24h,
      visual: Ws(un(Z.rain.change, L.locale, { maximumFractionDigits: 1 }), K) + (ce.length > 1 ? Sh(ce.map((ze) => ({ label: "", value: Number(ze.precipitation) }))) : "")
    });
  }
  function Ie(L, C) {
    const B = ma(L, C, "visibility");
    if (!B || !Sn(B.value)) return "";
    const K = Gs(L, B.stateObj, "visibility", B.value), pe = _p(Number(B.value), fr(L, B.stateObj, "visibility"));
    return Eo({
      icon: Zn.eyeOutline,
      name: Ye.metrics.visibility,
      sub: Ye.visibilityLevel[Ep(pe)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + pe + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + Fe(oo(L, pe)) + '</div><div class="wbSeaValue">' + Ws(K.number, K.unit) + "</div></div>"
    });
  }
  function oo(L, C) {
    var fe;
    const B = Ap((fe = L.config) == null ? void 0 : fe.country, C);
    if (B) return Gn(Ye.visibilityLandmarks, { from: B.from, to: B.to });
    const K = C / qp * 60;
    if (K < 60) {
      const ce = K < 5 ? Math.max(1, Math.round(K)) : 5 * Math.round(K / 5);
      if (ce < 60) return Gn(Ye.walkMinutes, { minutes: un(ce, L.locale) });
    }
    const pe = Math.max(1, Math.round(K / 30) / 2);
    return pe < 8 ? Gn(Ye.walkHours, { hours: un(pe, L.locale) }) : Ye.walkDay;
  }
  function Po(L) {
    Z.categories === void 0 && me(L);
    const C = et(L), B = (we) => we.map((Pe) => L.states[Pe]).filter(ts), K = B(C.air), pe = B(C.pollen);
    if (!K.length && !pe.length) return "";
    const fe = [...K, ...pe], ce = (we) => pe.includes(we) ? Zn.flower : Zn.airFilter, ve = fe.find((we) => we.entity_id === j.aq);
    return ve ? Bi(L, ve, ce(ve)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + Fe(Ye.airQuality) + '</h2></div><div class="wbAqTiles">' + fe.map((we) => '<button class="wbTile" data-wb="aq-open" data-entity="' + Fe(we.entity_id) + '"><span class="wbChip">' + mr(ce(we)) + '</span><span class="wbText"><span class="wbName">' + Fe(rc(L, we)) + '</span><span class="wbSub">' + Fe(qs(L, we)) + "</span></span></button>").join("") + "</div></div>";
  }
  function Bi(L, C, B) {
    var ze, je, qe;
    const K = ((ze = C.attributes) == null ? void 0 : ze.unit_of_measurement) ?? "", pe = ((je = C.attributes) == null ? void 0 : je.device_class) === "pm25" && K === Qd && Sn(C.state), fe = Number(C.state), ce = pe ? vh(fe) : void 0, ve = ((qe = Z.aqHistory) == null ? void 0 : qe.entityId) === C.entity_id ? Z.aqHistory.points : void 0, we = (Ee) => Math.min(100, Math.max(0, Ee / Os * 100));
    let Pe;
    if (ve && ve.length > 1) Pe = Ch(ve, (Ee) => (un(Ee, L.locale, { maximumFractionDigits: 1 }) + " " + K).trim());
    else if (ce) {
      let Ee = 0;
      const Ze = Gc.map(([Be, nt]) => {
        const pt = we(Math.min(nt, Os)), Nt = jp[Be] + " " + Ee + "% " + pt + "%";
        return Ee = pt, Nt;
      });
      Pe = '<div class="wbScale" role="meter" aria-label="' + Fe(Ye.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + Os + '" aria-valuenow="' + fe + '" style="background:linear-gradient(to right, ' + Ze.join(", ") + ')"><i style="left:' + we(fe) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + Os + " " + Qd + "</span></div>";
    } else Pe = '<span class="wbGraphNote"><span>' + Fe(qs(L, C)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + mr(B) + '</span><span class="wbText"><span class="wbName">' + Fe(rc(L, C)) + '</span><span class="wbSub">' + Fe(qs(L, C)) + (ce ? " · " + Fe(Ye.aqLevel[ce]) : "") + '</span></span><button class="wbBack" title="' + Fe(Ye.back) + '" data-wb="aq-close">' + mr(Zn.back) + '</button></div><div class="wbGraph">' + Pe + "</div></div></div>";
  }
  const Re = {
    current: $e,
    hourly: ao,
    sun: Ri,
    moon: fn,
    wind: tt,
    uv_index: Pn,
    compared_to_average: Ni,
    humidity: ft,
    pressure: De,
    precipitation: mt,
    visibility: Ie,
    air_quality: Po
  };
  function Ve(L) {
    var Pe, ze, je, qe;
    const C = l == null ? void 0 : l();
    if (!C || O) return;
    const B = We(C);
    y(C, B), Z.lastFetch || G();
    const K = et(C), pe = lc(C), fe = Wl(C), ce = [
      ...B.map((Ee) => C.states[Ee]),
      C.states["sun.sun"],
      pe && C.states[pe],
      fe && C.states[fe],
      ...K.air.map((Ee) => C.states[Ee]),
      ...K.pollen.map((Ee) => C.states[Ee]),
      C.locale,
      C.config,
      C.entities,
      Math.floor(Date.now() / to)
    ];
    if (!L && $ && ce.length === $.length && ce.every((Ee, Ze) => Ee === $[Ze])) return;
    $ = ce;
    const ve = b.getRootNode(), we = ve.activeElement || document.activeElement;
    for (const Ee of ie) {
      const Ze = I[Ee];
      let Be = "";
      try {
        Be = Re[Ee](C, B) || "";
      } catch {
        Be = "";
      }
      if (Be === Ze.html) continue;
      const nt = we && Ze.el.contains(we) ? (Pe = we.dataset) == null ? void 0 : Pe.wbFocus : void 0, pt = Ze.el.querySelector(".wbStripScroll"), Nt = pt ? pt.scrollLeft : 0;
      Ze.html = Be, Ze.el.hidden = !Be, Ze.el.innerHTML = Be, Nt && ((ze = Ze.el.querySelector(".wbStripScroll")) == null || ze.scrollTo({ left: Nt })), nt && !X && ((je = Ze.el.querySelector('[data-wb-focus="' + nt + '"]')) == null || je.focus());
    }
    X && ((qe = b.querySelector('[data-wb-focus="' + X + '"]')) == null || qe.focus(), X = null), _t(performance.now());
  }
  function jt() {
    q || O || (q = !0, queueMicrotask(() => {
      q = !1, Ve(!0);
    }));
  }
  function In() {
    const L = getComputedStyle(b), C = (ce) => L.getPropertyValue(ce).trim(), B = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([ce, ve]) => {
      C(ve) && (B[ce] = C(ve));
    });
    const K = C("--color-text-primary") || "#f1f1f1", pe = C("--color-bg-card") || "#222222", fe = !!b.closest(".light");
    return { colors: { ...Jn, ...B }, ink: fe ? K : pe, paper: fe ? pe : K };
  }
  const vn = (L, C) => {
    var B;
    L.width !== C.w && (L.width = C.w), L.height !== C.h && (L.height = C.h), (B = L.getContext("2d")) == null || B.putImageData(new ImageData(C.data, C.w, C.h), 0, 0);
  }, Et = () => f && !$p();
  function io(L, C) {
    const B = b.querySelector("canvas[data-wb-strip]");
    if (!B || !V || !B.getClientRects().length) return;
    const K = B.clientWidth, pe = B.clientHeight;
    if (!K || !pe) return;
    const fe = { width: K, height: pe, columns: Hs, colors: C.colors, clock: L, ambient: Et(), seed: V.seed };
    if (c === "smooth") {
      const ce = Math.min(2, window.devicePixelRatio || 1), ve = Math.round(K * ce), we = Math.round(pe * ce);
      B.width !== ve && (B.width = ve), B.height !== we && (B.height = we);
      const Pe = B.getContext("2d");
      if (!Pe) return;
      Pe.setTransform(ce, 0, 0, ce, 0, 0), up(Pe, V.segs, fe);
    } else vn(B, cp(V.segs, { ...fe, px: 2, oneBit: c === "onebit", ink: C.ink, paper: C.paper }));
  }
  function _t(L) {
    if (O) return;
    const C = In();
    if (c !== "smooth") {
      const B = Et();
      b.querySelectorAll("canvas[data-wb-wx]").forEach((K) => {
        K.getClientRects().length && vn(K, Nc(nd(K.dataset.wbWx, C.colors), { size: Number(K.dataset.size) || 40, px: 2, oneBit: c === "onebit", colors: C.colors, ink: C.ink, paper: C.paper, clock: L, idle: B }));
      });
    }
    b.querySelectorAll("canvas[data-wb-sea]").forEach((B) => {
      const K = B.clientWidth, pe = B.clientHeight, fe = Number(B.dataset.wbSea), ce = K + "x" + pe + ":" + fe + ":" + C.colors.skyClearDay;
      !K || !pe || !(fe > 0) || B.dataset.painted === ce || (B.dataset.painted = ce, vn(B, Sp(K, pe, fe, C.colors)));
    }), io(L, C);
  }
  function Qn(L) {
    if (te = 0, !(O || !Et())) {
      if (!document.hidden)
        if (c === "smooth") io(L, In());
        else {
          const C = Math.floor(L / 100);
          C !== Y && (Y = C, _t(L));
        }
      te = requestAnimationFrame(Qn);
    }
  }
  function ro() {
    b.classList.toggle("wbMotion", Et()), !te && !O && Et() && (te = requestAnimationFrame(Qn));
  }
  function Gt(L) {
    var B, K;
    const C = (K = (B = L.target).closest) == null ? void 0 : K.call(B, "[data-wb]");
    if (!(!C || !b.contains(C))) {
      switch (C.dataset.wb) {
        case "day": {
          j.openDay = Number(C.dataset.index), j.opener = C.dataset.wbFocus, X = "back-day";
          const pe = pn()[j.openDay], fe = !Z.todayHistory || Z.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - Z.todayHistory.fetched > Rp;
          pe && Jr(new Date(pe.datetime), /* @__PURE__ */ new Date()) && fe && ae();
          break;
        }
        case "close-day":
          j.openDay = void 0, X = j.opener, j.opener = void 0;
          break;
        case "open-page":
          v == null || v();
          return;
        case "day-mode":
          j.dayMode = C.dataset.mode;
          break;
        case "hourly-mode":
          j.hourlyMode = C.dataset.mode;
          break;
        case "aq-open":
          j.aq = C.dataset.entity, le(j.aq);
          break;
        case "aq-close":
          j.aq = void 0;
          break;
        default:
          return;
      }
      Ve(!0);
    }
  }
  function Yt(L) {
    var C, B;
    L.key === "Escape" && j.openDay !== void 0 && ((B = (C = L.target).closest) != null && B.call(C, '[data-wb-open="day"]')) && (j.openDay = void 0, X = j.opener, j.opener = void 0, Ve(!0));
  }
  let Xt = null;
  function Ut(L) {
    var B, K;
    const C = (K = (B = L.target).closest) == null ? void 0 : K.call(B, ".wbStripScroll");
    !C || L.button !== 0 || (Xt = { startX: L.pageX, left: C.scrollLeft, moved: !1 }, window.addEventListener("mousemove", ea), window.addEventListener("mouseup", gt, { once: !0 }));
  }
  function ea(L) {
    const C = b.querySelector(".wbStripScroll");
    if (!Xt || !C) return;
    const B = L.pageX - Xt.startX;
    !Xt.moved && Math.abs(B) > 1 && (Xt.moved = !0, C.classList.add("wbDragging")), C.scrollLeft = Xt.left - B;
  }
  function gt() {
    var L;
    Xt = null, window.removeEventListener("mousemove", ea), (L = b.querySelector(".wbStripScroll")) == null || L.classList.remove("wbDragging");
  }
  b.addEventListener("click", Gt), b.addEventListener("keydown", Yt), b.addEventListener("mousedown", Ut);
  const da = typeof ResizeObserver == "function" ? new ResizeObserver(() => _t(performance.now())) : null;
  da == null || da.observe(b);
  const Qt = (Ia = window.matchMedia) == null ? void 0 : Ia.call(window, "(prefers-reduced-motion: reduce)"), Pa = () => {
    ro(), _t(performance.now());
  };
  (so = Qt == null ? void 0 : Qt.addEventListener) == null || so.call(Qt, "change", Pa);
  const oi = [
    setInterval(() => {
      Q = /* @__PURE__ */ new Date(), Ve(!0);
    }, Fp),
    setInterval(() => {
      _ = /* @__PURE__ */ new Date(), Ve(!0);
    }, Op),
    setInterval(G, Pp)
  ];
  return Ve(!0), ro(), {
    update() {
      Ve(!1);
    },
    setStyle(L) {
      !L || L === c || (c = L, Ve(!0), ro());
    },
    destroy() {
      var L;
      O = !0, oi.forEach(clearInterval), te && cancelAnimationFrame(te), te = 0, da == null || da.disconnect(), (L = Qt == null ? void 0 : Qt.removeEventListener) == null || L.call(Qt, "change", Pa), gt(), b.removeEventListener("click", Gt), b.removeEventListener("keydown", Yt), b.removeEventListener("mousedown", Ut), ["daily", "hourly"].forEach(Ce), b.remove();
    }
  };
}
const ns = "#E1E1E1", pc = "#F7F4F0", Vl = "#03a9f4", xt = 14, kt = 172;
let Eh = 0;
const Vt = (a) => Math.round(a * 100) / 100, no = (a, l, o) => Math.max(l, Math.min(o, a)), Bo = (a, l, o, c, f, m) => '<rect x="' + Vt(a) + '" y="' + Vt(l) + '" width="' + Vt(o) + '" height="' + Vt(c) + '" fill="' + f + '"' + (m != null ? ' opacity="' + m + '"' : "") + "/>", zl = (a) => a.map((l, o) => (o ? "L" : "M") + Vt(l[0]) + " " + Vt(l[1])).join("");
function jl(a) {
  const l = (a == null ? void 0 : a.attributes) || {};
  return l.device_class === "curtain" ? "curtain" : l.device_class === "blind" || l.current_tilt_position != null ? "venetian" : "blind";
}
const ei = [
  [2, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]],
  [6.5, ["#0B0F1C", "#2E7FD6", "#F2743B", "#F1B6C8", 0.95]],
  [9.5, ["#8FC4EC", "#4DA3E8", "#F4FAFF", "#2F7FCF", 0.7]],
  [13, ["#9ED3F6", "#3F97E6", "#FFFFFF", "#2B86D9", 0.65]],
  [17, ["#9FC2E4", "#4A8ED4", "#FFD9B8", "#5E8FD6", 0.75]],
  [19, ["#4B5E86", "#3B86E0", "#FF6A3D", "#B07CE8", 0.95]],
  [21.5, ["#1A2140", "#1F3F7A", "#B4506E", "#3E59A6", 0.8]],
  [26, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]]
];
function Dh(a) {
  const l = a < 2 ? a + 24 : a;
  let o = ei[0], c = ei[ei.length - 1];
  for (let T = 0; T < ei.length - 1; T++) if (l >= ei[T][0] && l <= ei[T + 1][0]) {
    o = ei[T], c = ei[T + 1];
    break;
  }
  const f = (l - o[0]) / (c[0] - o[0]), m = f * f * (3 - 2 * f), v = (T, b) => {
    const P = parseInt(T.slice(1), 16), ie = parseInt(b.slice(1), 16);
    return "#" + [16, 8, 0].map((ne) => Math.round((P >> ne & 255) + ((ie >> ne & 255) - (P >> ne & 255)) * m).toString(16).padStart(2, "0")).join("");
  };
  return { top: v(o[1][0], c[1][0]), bot: v(o[1][1], c[1][1]), warm: v(o[1][2], c[1][2]), cool: v(o[1][3], c[1][3]), op: o[1][4] + (c[1][4] - o[1][4]) * m, t: l };
}
function Rh(a) {
  const l = parseInt(a.slice(1), 16), o = (l >> 16 & 255) / 255, c = (l >> 8 & 255) / 255, f = (l & 255) / 255, m = Math.max(o, c, f), v = Math.min(o, c, f);
  let T = 0, b = 0;
  const P = (m + v) / 2;
  if (m !== v) {
    const ie = m - v;
    b = P > 0.5 ? ie / (2 - m - v) : ie / (m + v), T = (m === o ? (c - f) / ie + (c < f ? 6 : 0) : m === c ? (f - o) / ie + 2 : (o - c) / ie + 4) / 6;
  }
  return [T * 360, b * 100, P * 100];
}
function au(a, l, o) {
  l = no(l, 0, 100) / 100, o = no(o, 0, 100) / 100;
  const c = (v) => (v + a / 30) % 12, f = l * Math.min(o, 1 - o), m = (v) => o - f * Math.max(-1, Math.min(c(v) - 3, Math.min(9 - c(v), 1)));
  return "#" + [m(0), m(8), m(4)].map((v) => Math.round(v * 255).toString(16).padStart(2, "0")).join("");
}
const [ou, iu, ru] = Rh(ns), hc = au(ou, iu, Math.max(6, ru - 14)), Nh = au(ou, iu, Math.min(96, ru + 16));
function Bh(a, l, o, c, f) {
  const m = kt / 2, v = kt * 0.12, T = m - (m - v) * a, b = ($) => $ ** 1.3, P = no(o, -1.5, 1.5), ie = ($) => -(Math.abs(P) * 4.6 * $ ** 1.5) * Math.sign(P), ne = a * 1.4, I = ($, te) => {
    const Y = Math.min(4.8, Math.abs(o) * 2.6) * (te ? 1 : -1) * Math.sign(o || 1), q = te ? $ + T : $, X = te ? $ : $ + T, j = (Te) => q + ie(Te) + Y * Math.sin(Te * Math.PI * 1.2 + c) * b(Te) * 1.4 + ne * Math.sin(Te * Math.PI * 2 + c * 0.6) * b(Te) * (te ? 1 : -1), Z = [[X, xt]];
    for (let Te = 0; Te <= 12; Te++) Z.push([j(Te / 12), xt + kt * Te / 12]);
    Z.push([X, xt + kt]);
    let Q = '<path d="' + zl(Z) + 'Z" fill="' + ns + '"/>';
    if (f) return Q;
    const _ = 1.35 + ((te ? o > 0 : o < 0) ? 0.35 : 0), V = (Te) => {
      const w = Te / 7, be = te ? 1 - w : w, Ce = (1 - be) ** 1.3, Oe = $ + T * w;
      return Array.from({ length: 13 }, (y, A) => {
        const M = A / 12;
        return [Oe + ie(M) * Ce + Y * _ * Math.sin(M * Math.PI * 1.2 + c - be * 3.2) * b(M) * 1.4 * Ce + ne * 1.6 * Math.sin(M * Math.PI * 2 + c * 0.6 - be * 2.5) * b(M) * a * (0.4 + 0.6 * Ce), xt + kt * M];
      });
    }, ge = [1, 2, 3, 4, 5, 6].map(V);
    for (let Te = 0; Te < 6; Te += 2) Q += '<path d="' + zl(ge[Te]) + zl(ge[Te + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return Q;
  }, O = m - (m - v) * l;
  return { body: I(xt, !0) + I(xt + kt - T, !1), rails: [{ x: xt + O - 4, y: xt, w: 4, h: kt }, { x: xt + kt - O, y: xt, w: 4, h: kt }], head: 6.4 };
}
function Ph(a, l, o) {
  const c = kt * (1 - a);
  let f = "";
  if (c > 1 && (f += Bo(xt, xt, kt, c, ns), !o))
    for (let m = 1; m < 7; m += 2) f += Bo(xt + kt * m / 7, xt, kt / 7, c, "#fff");
  return { body: f, rails: [{ x: xt, y: xt + kt * (1 - l) - 7, w: kt, h: 11 }], head: 10.4 };
}
function Ih(a, l, o, c) {
  const f = 9 - 7 * (o / 100), m = xt + kt * (1 - a), v = Math.ceil(kt / 10) + 1, T = xt + f / 2, b = (xt + kt - f / 2 - T) / (v - 1), P = 0.8, ie = 0.6, ne = Array.from({ length: v }, ($, te) => Math.max(T + te * ie, Math.min(T + te * b, m - f / 2 - (v - 1 - te) * ie))), I = ne.slice(0, -1).map(($, te) => no((ne[te + 1] - $ - ie) / (b - ie), 0, 1));
  I.push(I[v - 2]);
  let O = "";
  return ne.forEach(($, te) => {
    const Y = P + (f - P) * I[te], q = Math.max(0.5, Y / 2), X = Math.max(0.4, Y * 0.114);
    O += Bo(xt, $ - q, kt, Math.max(1, Y), ns), !c && Y > 2.2 && (O += Bo(xt, $ + q - X, kt, X, hc) + Bo(xt, $ - q, kt, X * 0.55, Nh, 0.75));
  }), c || [0.22, 0.78].forEach(($) => {
    O += Bo(xt + kt * $ - 0.7, xt, 1.4, Math.max(0, ne[v - 1] + 1 - xt), hc, 0.85);
  }), { body: O, rails: [{ x: xt, y: xt + kt * (1 - l) - 8, w: kt, h: 8 }], head: 8.8 };
}
const fc = (a, l, o, c, f, m, v) => a === "curtain" ? Bh(l, o, f, m, v) : a === "venetian" ? Ih(l, o, c, v) : Ph(l, o, v);
function Hh(a, l) {
  let o = "", c = "";
  return l.forEach((f) => {
    const m = f.w > f.h, v = no(m ? xt + kt / 2 : f.x + f.w / 2, 17, 183), T = no(m ? f.y + f.h / 2 : xt + kt / 2, 17, 183);
    o += m ? Bo(xt, no(f.y + f.h / 2, xt, xt + kt) - 1, kt, 2, Vl) : Bo(no(f.x + f.w / 2, xt, xt + kt) - 1, xt, 2, kt, Vl);
    const b = m ? "M" + Vt(v - 4) + " " + Vt(T - 3) + "l4 -3l4 3M" + Vt(v - 4) + " " + Vt(T + 3) + "l4 3l4 -3" : "M" + Vt(v - 3) + " " + Vt(T - 4) + "l-3 4l3 4M" + Vt(v + 3) + " " + Vt(T - 4) + "l3 4l-3 4";
    c += '<circle cx="' + Vt(v) + '" cy="' + Vt(T) + '" r="11" fill="' + Vl + '" filter="url(#' + a + 's)"/><path d="' + b + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: o, knobs: c };
}
function Fh(a, l) {
  const o = /* @__PURE__ */ new Date(), c = Dh(o.getHours() + o.getMinutes() / 60), f = 42 + 18 * Math.sin(c.t * 0.5), m = c.t >= 5 && c.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (c.t - 5) / 15) : 80, v = fc(l.kind, l.pos / 100, l.bar / 100, l.tilt, l.vel, l.ph, !1), T = l.ghostAlpha > 4e-3 && l.ghost != null ? fc(l.kind, l.ghost / 100, l.ghost / 100, l.tilt, 0, 0, !0).body : "", b = l.grip > 4e-3 ? Hh(a, v.rails) : null, P = (ie) => Bo(xt, xt, kt, kt, ie);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + a + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + a + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + c.top + '"/><stop offset="1" stop-color="' + c.bot + '"/></linearGradient><radialGradient id="' + a + 'w" cx="' + Vt(f) + '%" cy="' + Vt(m) + '%" r="58%"><stop offset="0" stop-color="' + c.warm + '" stop-opacity="' + Vt(c.op * 0.8) + '"/><stop offset="1" stop-color="' + c.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + a + 'k" cx="' + Vt(100 - f * 0.8) + '%" cy="' + Vt(100 - m * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + c.cool + '" stop-opacity="' + Vt(c.op * 0.64) + '"/><stop offset="1" stop-color="' + c.cool + '" stop-opacity="0"/></radialGradient><filter id="' + a + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + pc + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + a + 'c)">' + P("url(#" + a + "l)") + P("url(#" + a + "w)") + P("url(#" + a + "k)") + (T ? '<g opacity="' + Vt(l.ghostAlpha) + '">' + T + "</g>" : "") + v.body + '<rect x="14" y="14" width="172" height="' + v.head + '" fill="' + ns + '" filter="url(#' + a + 's)"/></g>' + (b ? '<g clip-path="url(#' + a + 'c)" opacity="' + Vt(l.grip) + '">' + b.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + pc + '" stroke-width="3"/>' + (b ? '<g opacity="' + Vt(l.grip) + '">' + b.knobs + "</g>" : "") + "</svg>";
}
function Oh({ onMove: a, onSet: l }) {
  var Q;
  const o = "cv" + ++Eh, c = document.createElement("div");
  c.className = "tfCoverArt";
  const f = (Q = window.matchMedia) == null ? void 0 : Q.call(window, "(pointer: coarse)").matches;
  let m = null;
  const v = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let T = 0, b = !1, P = !1, ie = null, ne = 0, I = 0;
  const O = () => (m == null ? void 0 : m.kind) === "curtain" ? "x" : "y", $ = () => ie || b || P || m.moving || m.target != null ? 1 : f ? performance.now() < I ? 1 : 0.4 : 0, te = () => {
    c.innerHTML = Fh(o, { kind: m.kind, pos: v.pos, bar: m.target ?? v.pos, tilt: v.tilt, vel: v.vel, ph: v.ph, ghost: v.gpos, ghostAlpha: v.ghost, grip: v.grip });
  };
  function Y(_) {
    T = 0;
    const V = v.last ? Math.min(0.064, (_ - v.last) / 1e3) : 1 / 60, ge = V * 60;
    v.last = _;
    const Te = m.pos - v.pos, w = v.pos;
    v.pos += Math.sign(Te) * Math.min(Math.abs(Te), Math.max(10.5, Math.abs(Te) * 1.4) * V), Math.abs(m.pos - v.pos) < 0.03 && (v.pos = m.pos), v.vel = v.vel * 0.86 + (v.pos - w) / ge * 0.14, Math.abs(v.vel) < 0.015 && v.pos === m.pos && (v.vel = 0), (v.pos !== w || v.vel) && (v.ph += (0.06 + Math.abs(v.vel) * 0.03) * ge);
    const be = m.tilt - v.tilt;
    v.tilt += Math.sign(be) * Math.min(Math.abs(be), Math.max(60, Math.abs(be) * 4) * V);
    const Ce = $();
    v.grip += (Ce - v.grip) * Math.min(1, V * (Ce > v.grip ? 11 : 3.5)), Math.abs(Ce - v.grip) < 0.01 && (v.grip = Ce);
    const Oe = m.target != null && Math.abs(m.target - v.pos) > 0.5 ? 0.22 : 0;
    m.target != null && (v.gpos = m.target), v.ghost += (Oe - v.ghost) * Math.min(1, V * (Oe > v.ghost ? 16 : 3)), Math.abs(Oe - v.ghost) < 4e-3 && (v.ghost = Oe), te(), v.pos !== m.pos || v.vel || v.tilt !== m.tilt || v.grip !== Ce || v.ghost !== Oe ? T = requestAnimationFrame(Y) : v.last = 0;
  }
  const q = () => {
    m && !T && (T = requestAnimationFrame(Y));
  }, X = setInterval(() => {
    m && !T && te();
  }, 60 * 1e3), j = (_) => {
    const V = c.getBoundingClientRect();
    return O() === "x" ? (_.clientX - V.left) / V.width : (_.clientY - V.top) / V.height;
  };
  c.addEventListener("pointerdown", (_) => {
    var Te;
    if (!(m != null && m.canSet) || _.button > 0) return;
    _.preventDefault(), (Te = c.setPointerCapture) == null || Te.call(c, _.pointerId);
    const V = m.target ?? m.pos, ge = c.getBoundingClientRect();
    ie = { p0: j(_), from: V, x0: _.clientX, value: null, side: null }, m.kind === "curtain" && V > 0 && (ie.side = (_.clientX - ge.left) / ge.width < 0.5 ? "L" : "R"), q();
  }), c.addEventListener("pointermove", (_) => {
    if (!ie) return;
    let V;
    if (m.kind === "curtain") {
      if (!ie.side) {
        const Te = _.clientX - ie.x0;
        if (Math.abs(Te) < 4) return;
        ie.side = Te < 0 ? "L" : "R";
      }
      const ge = (kt / 2 - kt * 0.12) / 200;
      V = ie.from + (ie.side === "L" ? -1 : 1) * ((j(_) - ie.p0) / ge) * 100;
    } else V = ie.from - (j(_) - ie.p0) / (kt / 200) * 100;
    ie.value = no(V, 0, 100), a(ie.value);
  });
  const Z = () => {
    if (!ie) return;
    const _ = ie.value;
    ie = null, _ != null && l(Math.round(_)), q();
  };
  return c.addEventListener("pointerup", Z), c.addEventListener("pointercancel", Z), c.addEventListener("lostpointercapture", Z), c.addEventListener("pointerenter", () => {
    b = !0, q();
  }), c.addEventListener("pointerleave", () => {
    b = !1, q();
  }), c.addEventListener("focus", () => {
    P = c.matches(":focus-visible"), q();
  }), c.addEventListener("blur", () => {
    P = !1, q();
  }), c.addEventListener("keydown", (_) => {
    if (!(m != null && m.canSet)) return;
    const V = Math.round(m.target ?? m.pos), ge = _.shiftKey ? 10 : 1, Te = { ArrowUp: V + ge, ArrowRight: V + ge, ArrowDown: V - ge, ArrowLeft: V - ge, PageUp: V + 25, PageDown: V - 25, Home: 0, End: 100 }[_.key];
    if (Te == null) return;
    _.preventDefault();
    const w = no(Te, 0, 100);
    a(w), clearTimeout(ne), ne = setTimeout(() => l(w), 500);
  }), {
    el: c,
    update(_) {
      const V = !m;
      m = _, V && (v.pos = m.pos, v.tilt = m.tilt, I = performance.now() + 1500, f && setTimeout(q, 1600)), c.classList.toggle("x", O() === "x"), c.classList.toggle("y", O() === "y"), m.canSet ? (c.tabIndex = 0, c.setAttribute("role", "slider"), c.setAttribute("aria-valuemin", "0"), c.setAttribute("aria-valuemax", "100"), c.setAttribute("aria-valuenow", String(Math.round(m.target ?? m.pos))), c.setAttribute("aria-orientation", O() === "x" ? "horizontal" : "vertical")) : c.setAttribute("role", "img"), c.setAttribute("aria-label", m.name + (m.canSet ? " position" : "")), c.setAttribute("aria-valuetext", m.text), q();
    },
    destroy() {
      cancelAnimationFrame(T), T = 0, clearInterval(X), clearTimeout(ne), c.remove();
    }
  };
}
const mc = "move-assistant-density", ti = {
  get(a) {
    try {
      return localStorage.getItem(a);
    } catch {
      return null;
    }
  },
  set(a, l) {
    try {
      localStorage.setItem(a, l);
    } catch {
    }
  }
}, se = (a) => String(a ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), Gl = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', gc = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', qh = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', Vs = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, vc = 1, Wh = 4, bc = 16, wc = 32, Vh = 128, zh = 256, xc = 16384, jh = 1, Gh = 2, yc = 4, Uh = 8, Yh = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, Zh = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, Kh = { curtain: "curtains", blind: "blind", venetian: "blinds" }, Ul = {
  light: { name: "Lights", icon: "mdi:lamps", colour: "#ffc107" },
  climate: { name: "Climate", icon: "mdi:home-thermometer", colour: "#ff5722" },
  security: { name: "Security", icon: "mdi:security", colour: "#607d8b" },
  media_players: { name: "Media players", icon: "mdi:multimedia", colour: "#2196f3" },
  maintenance: { name: "Maintenance", icon: "mdi:wrench", colour: "#9e9e9e" },
  energy: { name: "Energy", icon: "mdi:lightning-bolt", colour: "#ffc107" }
}, kc = "move_assistant_house", Mc = "move-assistant-house-used", $h = ["switch", "fan", "input_boolean", "automation"], Cc = "move-assistant-house-look", Xh = [["popup", "Popup"], ["sheet", "Sheet"]], Yl = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', Jh = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', Qh = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', Sc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', Tc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', Lc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', Ma = (a) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + a.map((l) => '<path d="' + l + '"/>').join("") + "</svg>", Ac = Ma(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), ef = Ma(["M20 6L9 17L4 12"]), eo = {
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
}, tf = (a) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (a ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', nf = 1, af = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], _c = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, Zl = ["hs", "xy", "rgb", "rgbw", "rgbww"], Kl = ["door", "window", "garage_door", "opening"], $l = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], of = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], rf = 10, sf = 20, lf = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, df = ["living room", "bedroom", "office"];
function cf(a, { config: l, getHass: o }) {
  var Ao, Vn, jr;
  const c = (t) => a.getElementById(t), f = c("app"), v = String((l || {}).layout || "").toLowerCase().replace("_", "-") === "test-focus";
  let T = ti.get(mc) === "1", b = {};
  const P = (t) => {
    var n;
    return (n = o()) == null ? void 0 : n.callWS(t);
  }, ie = (t, n, r) => P({ type: "call_service", domain: t, service: n, service_data: r }), ne = a.querySelector("#appearancePane .toggleList");
  ne && !c("densityToggle") && (ne.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), c("densityToggle").addEventListener("click", () => {
    T = !T, ti.set(mc, T ? "1" : "0"), Q();
  }));
  const I = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && ft(t).device_class === "power" && /^(W|kW)$/.test(ft(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (t) => t.startsWith("alarm_control_panel.")]
  ], O = (t, n, r, d) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + n + '">' + d.map(([p, S]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + r + '="' + p + '">' + S + "</button>").join("") + "</div>", $ = (t, n, r, d) => '<div class="toggleRow"' + (d ? ' id="' + d + '"' : "") + "><div><strong>" + t + "</strong>" + (n ? '<div class="status">' + n + "</div>" : "") + "</div>" + r + "</div>";
  function te() {
    var E, H, z;
    if (!v || c("housePane")) return;
    const t = c("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore";
    const n = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], r = (N, U) => '<div class="houseTab' + (N === "look" ? " active" : "") + '" data-house-pane="' + N + '"><section class="card">' + U + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + n.map(([N, U]) => '<button class="tab segBtn' + (N === "look" ? " active" : "") + '" type="button" data-house-tab="' + N + '">' + U + "</button>").join("") + "</div>" + r("look", '<div class="toggleList" id="houseLook"></div>') + r("lights", '<p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div>') + r("sources", '<div class="toggleList">' + I.map(([N, U, ye]) => $(U, ye, '<select class="settingsSelect" data-source="' + N + '" aria-label="' + U + '"></select>')).join("") + "</div>") + r("sums", '<div class="toggleList">' + Object.entries(Ul).map(([N, U]) => $(U.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + N + '" aria-label="' + U.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const d = c("houseLook");
    [(E = t.querySelector(".themeBtn")) == null ? void 0 : E.closest(".toggleRow"), (H = c("densityToggle")) == null ? void 0 : H.closest(".toggleRow"), (z = c("moreInfoChoice")) == null ? void 0 : z.closest(".toggleRow")].forEach((N) => N && d.appendChild(N)), d.insertAdjacentHTML("beforeend", $("Lights", "How lights show on the house page.", O("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + $("Pad", "What the Dual Axis Controller’s pad sets on its tile.", O("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow"));
    const p = c("housePane"), S = p.querySelector(".houseTabs"), g = S.querySelector(".rubberIndicator"), x = (N) => {
      const U = S.querySelector(".tab.active");
      g.style.transition = N ? "" : "none", g.style.left = U.offsetLeft + "px", g.style.width = U.offsetWidth + "px", N && (g.style.transform = "scaleX(1.08)", setTimeout(() => g.style.transform = "", 180));
    };
    new ResizeObserver(() => x(!1)).observe(S), p.addEventListener("click", (N) => {
      const U = N.target.closest("[data-house-tab]");
      if (U) {
        S.querySelectorAll(".tab").forEach((ue) => ue.classList.toggle("active", ue === U)), p.querySelectorAll(".houseTab").forEach((ue) => ue.classList.toggle("active", ue.dataset.housePane === U.dataset.houseTab)), U.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), x(!0);
        return;
      }
      const ye = N.target.closest("[data-light-fav]");
      if (ye) {
        li(ye.dataset.lightFav);
        return;
      }
      const Ne = N.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!Ne || Ne.disabled)) {
        if (Ne.dataset.lights && (It.lights = Ne.dataset.lights), Ne.dataset.dacPad && (It.dacPad = Ne.dataset.dacPad), (Ne.dataset.lights || Ne.dataset.dacPad) && ($e(), on.clear()), Ne.dataset.sumToggle) {
          const ue = Ne.dataset.sumToggle, he = new Set(G.hiddenSums || []);
          he.has(ue) ? he.delete(ue) : he.add(ue), G = { ...G, hiddenSums: [...he] }, Bn();
        }
        Xa();
      }
    }), p.addEventListener("change", (N) => {
      const U = N.target;
      U.dataset.source && (G = { ...G, sources: { ...G.sources || {}, [U.dataset.source]: U.value || void 0 } }, Bn());
      const ye = U.dataset.lightStyle || U.dataset.lightPad;
      if (ye) {
        const Ne = U.dataset.lightStyle ? "lightStyles" : "lightPads", ue = { ...It[Ne] };
        U.value ? ue[ye] = U.value : delete ue[ye], It[Ne] = ue, $e(), [...on.keys()].filter((he) => he.endsWith(":" + ye)).forEach((he) => on.delete(he));
      }
      Xa();
    });
  }
  function Y() {
    var x, E;
    lo() && ii();
    const t = c("housePane");
    if (!t) return;
    const n = !!customElements.get(Kt);
    t.querySelectorAll("[data-lights]").forEach((H) => H.setAttribute("aria-pressed", String(H.dataset.lights === It.lights))), c("lightsRow").querySelector(".status").textContent = n || !lo() ? "How lights show on the house page." : Tn === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((H) => H.setAttribute("aria-pressed", String(H.dataset.dacPad === It.dacPad))), c("dacPadRow").hidden = !lo();
    for (const H of t.querySelectorAll("[data-source]")) {
      if (H === a.activeElement) continue;
      const [z] = I.find(([U]) => U === H.dataset.source), N = Object.keys(b).filter(I.find(([U]) => U === z)[3]).sort((U, ye) => De(U).localeCompare(De(ye)));
      H.dataset.sig !== N.join(",") && (H.innerHTML = '<option value="">Automatic</option>' + N.map((U) => '<option value="' + se(U) + '">' + se(De(U)) + "</option>").join(""), H.dataset.sig = N.join(",")), H.value = N.includes((x = G.sources) == null ? void 0 : x[z]) ? G.sources[z] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((H) => {
      const z = !(G.hiddenSums || []).includes(H.dataset.sumToggle);
      H.classList.toggle("on", z), H.setAttribute("aria-checked", String(z));
    });
    const r = c("lightRows"), d = r != null && r.contains(a.activeElement) ? a.activeElement : null;
    if (!r || d != null && d.matches("select")) return;
    const p = new Set(Hn()), S = (H, z, N, U) => '<option value="' + H + '"' + (H === N ? " selected" : "") + ">" + z + "</option>", g = Object.keys(b).filter((H) => H.startsWith("light.")).sort((H, z) => !wt.get(H) - !wt.get(z) || (wt.get(H) || "").localeCompare(wt.get(z) || "") || De(H).localeCompare(De(z))).map((H) => {
      const z = It.lightStyles[H] || "", N = It.lightPads[H] || "", U = p.has(H), ye = se(De(H));
      return "<tr><td><strong>" + ye + "</strong></td><td>" + se(wt.get(H) || "—") + "</td><td>" + se(Gt(H)) + '</td><td class="metaSwitchCol"><button class="switch' + (U ? " on" : "") + '" type="button" role="switch" aria-checked="' + U + '" data-light-fav="' + se(H) + '" aria-label="' + ye + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + se(H) + '" aria-label="' + ye + ' tile">' + S("", "Default", z) + S("tile", "HomeCore tile", z) + S("dac", "Dual Axis Controller", z) + '</select></td><td><select class="settingsSelect" data-light-pad="' + se(H) + '" aria-label="' + ye + ' pad"' + (Sa(H) ? "" : " disabled") + ">" + S("", "Default", N) + S("temperature", "Temperature", N) + S("colour", "Colour", N) + "</select></td></tr>";
    }).join("");
    r.dataset.html !== g && (r.innerHTML = g, r.dataset.html = g, d != null && d.dataset.lightFav && ((E = r.querySelector('[data-light-fav="' + CSS.escape(d.dataset.lightFav) + '"]')) == null || E.focus({ preventScroll: !0 })));
  }
  const q = document.createElement("div");
  q.className = "densityBadge", q.setAttribute("aria-live", "polite"), q.hidden = !0, f.appendChild(q);
  let X = 0;
  function j() {
    if (!T) return;
    const t = c("homeView"), n = (S) => S.offsetParent !== null && !S.closest("[hidden]");
    t.querySelectorAll(":scope .card, :scope .tfAction").forEach((S) => {
      n(S) && (S.dataset.h = Math.round(S.getBoundingClientRect().height) + " px");
    });
    const r = [...t.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(n), d = window.innerHeight, p = r.filter((S) => {
      const g = S.getBoundingClientRect();
      return g.height > 0 && g.top >= 0 && g.bottom <= d + 0.5;
    }).length;
    q.hidden = !t.classList.contains("active"), q.innerHTML = "<b>" + p + "</b><small>of " + r.length + " readings on screen</small>";
  }
  const Z = () => {
    T && requestAnimationFrame(j);
  };
  function Q() {
    var t;
    f.classList.toggle("showDensity", T), (t = c("densityToggle")) == null || t.classList.toggle("on", T), q.hidden = !T, clearInterval(X), T && (X = setInterval(j, 1e3), j());
  }
  window.addEventListener("scroll", Z, { capture: !0, passive: !0 }), window.addEventListener("resize", Z, { passive: !0 });
  const _ = a.querySelector("#homeView .grid");
  let V = null, ge = null, Te = null, w = null;
  const be = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Map(), Oe = /* @__PURE__ */ new Map(), y = 350;
  let A = null;
  const M = /* @__PURE__ */ new Map(), R = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map();
  let G = { favourites: null }, ae = {}, le = {}, me = [], We = null;
  const et = (() => {
    try {
      return JSON.parse(ti.get(Mc)) || {};
    } catch {
      return {};
    }
  })();
  let wt = /* @__PURE__ */ new Map(), pn = 0;
  function Bn() {
    clearTimeout(pn), pn = setTimeout(() => Promise.resolve(P({ type: "frontend/set_user_data", key: kc, value: G })).catch(() => {
    }), 400);
  }
  const It = (() => {
    let t = {};
    try {
      t = JSON.parse(ti.get(Cc)) || {};
    } catch {
    }
    const n = (r, d) => Object.fromEntries(Object.entries(r || {}).filter(([, p]) => d.includes(p)));
    return {
      more: t.more === "sheet" ? "sheet" : "popup",
      lights: t.lights === "dac" ? "dac" : "tile",
      dacPad: t.dacPad === "colour" ? "colour" : "temperature",
      lightStyles: n(t.lightStyles, ["tile", "dac"]),
      lightPads: n(t.lightPads, ["temperature", "colour"])
    };
  })(), $e = () => ti.set(Cc, JSON.stringify(It)), Mt = () => {
    f.dataset.more = It.more, gn();
  };
  v && ne && !c("moreInfoChoice") && (c("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + Xh.map(([t, n]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (It.more === t) + '" data-more-style="' + t + '">' + n + "</button>").join("") + "</div></div>"
  ), c("moreInfoChoice").addEventListener("click", (t) => {
    const n = t.target.closest("[data-more-style]");
    n && (It.more = n.dataset.moreStyle, $e(), Mt(), c("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((r) => r.setAttribute("aria-pressed", String(r === n))));
  })), te();
  let Xe = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const hn = /* @__PURE__ */ new Map();
  let yn = "";
  const Di = v ? Ku({ onChange: () => en() }) : null;
  v && f.classList.add("house");
  const rt = Object.assign(document.createElement("div"), { className: "tfBento" });
  let Ue = null, ut = null, ao = !1;
  function Ri(t) {
    const n = po();
    if (f.classList.toggle("houseBento", !!n), Ue && (ut !== n || t == null) && (Ue.destroy(), Ue = null), !n || t == null) {
      rt.remove();
      return;
    }
    rt.isConnected || _.append(rt), rt.style.order = t, !Ue && !ao && (Ue = uc(rt, { getHass: o, entityId: n, style: "bitmap" }), ut = n);
  }
  const ai = [["wx", ["current"]], ["avg", ["compared_to_average"]]], fn = Object.fromEntries(ai.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let tt = null, Pn = null;
  function Ni(t) {
    const n = po();
    tt && Pn !== n && (tt.forEach((r) => r.destroy()), tt = null), Object.values(fn).forEach((r) => n ? !r.isConnected && _.append(r) : r.remove()), n && !tt && !ao && (tt = ai.map(([r, d]) => uc(fn[r], { getHass: o, entityId: n, style: "bitmap", cards: d, onOpen: r === "wx" ? () => ms("weather") : void 0 })), Pn = n);
  }
  const ft = (t) => {
    var n;
    return ((n = b[t]) == null ? void 0 : n.attributes) || {};
  }, De = (t) => ft(t).friendly_name || t, st = (t, n) => Ai(t) || (Number(ft(t).supported_features) & n) === n, mt = (t) => {
    const n = String(t ?? "").replace(/_/g, " ");
    return n.charAt(0).toUpperCase() + n.slice(1);
  }, Ie = (t, n = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: n, maximumFractionDigits: n }), oo = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, Po = (t) => ft(t).supported_color_modes || [], Bi = (t) => {
    const n = t / 100;
    return [n <= 66 ? 255 : 329.7 * Math.pow(n - 60, -0.1332), n <= 66 ? 99.47 * Math.log(n) - 161.12 : 288.12 * Math.pow(n - 60, -0.0755), n >= 66 ? 255 : n <= 19 ? 0 : 138.52 * Math.log(n - 10) - 305.04];
  }, Re = (t, n) => [5, 3, 1].map((r) => {
    const d = (r + t / 60) % 6;
    return 255 * (1 - n / 100 * Math.max(0, Math.min(d, 4 - d, 1)));
  });
  function Ve(t) {
    const n = ft(t), r = (n.rgb_color || (n.hs_color && n.color_mode !== "color_temp" ? Re(...n.hs_color) : n.color_temp_kelvin ? Bi(n.color_temp_kelvin) : [255, 170, 0])).map((p) => Math.round(Math.max(0, Math.min(255, p)))), d = (0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]) / 255 > 0.8;
    return "--light:rgb(" + r.join(",") + ");--light-ink:" + (d ? "#26221e" : "#ffffff");
  }
  const jt = (t) => {
    var n;
    return t.startsWith("light.") && ((n = b[t]) == null ? void 0 : n.state) === "on" ? ' data-light style="' + Ve(t) + '"' : "";
  }, In = (t) => {
    const n = Po(t);
    return n.length ? n.some((r) => r !== "onoff") : ft(t).brightness != null;
  }, vn = (t) => [ft(t).min_color_temp_kelvin || 2e3, ft(t).max_color_temp_kelvin || 6500], Et = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function io(t) {
    const n = Math.max(1, Math.round((Date.now() - t) / 1e3));
    if (n < 10) return "Just now";
    if (n < 60) return n + " seconds ago";
    const r = Math.round(n / 60);
    if (r < 60) return r + (r === 1 ? " minute ago" : " minutes ago");
    const d = Math.round(r / 60);
    if (d < 24) return d + (d === 1 ? " hour ago" : " hours ago");
    const p = Math.round(d / 24);
    return p + (p === 1 ? " day ago" : " days ago");
  }
  const _t = (t) => {
    var n;
    return ft(t).current_position ?? (((n = b[t]) == null ? void 0 : n.state) === "closed" ? 0 : 100);
  }, Qn = (t) => {
    var n;
    return uo("pos", t, ((n = M.get(t)) == null ? void 0 : n.pos) ?? _t(t));
  }, ro = (t) => {
    var n;
    return uo("tilt", t, ((n = M.get(t)) == null ? void 0 : n.tilt) ?? ft(t).current_tilt_position);
  };
  function Gt(t) {
    var g;
    const n = b[t];
    if (!n) return "Not found";
    if (n.state === "unavailable") return "Unavailable";
    const r = n.attributes, d = t.split(".")[0];
    if (d === "light") {
      if (n.state !== "on") return "Off";
      const x = r.color_temp_kelvin;
      return (In(t) ? oo(n) + "%" : "On") + (r.color_mode === "color_temp" && x ? " · " + Number(x).toLocaleString() + "k" : Zl.includes(r.color_mode) ? " · Colour" : "");
    }
    if (d === "climate") return (n.state === "off" ? "Off" : mt(r.hvac_action || n.state)) + " · " + Ie(r.current_temperature) + " °C now";
    if (d === "cover") {
      const x = _t(t), E = r.current_tilt_position;
      return n.state === "opening" || n.state === "closing" ? mt(n.state) + " - " + x + "%" : (x <= 0 ? "Closed" : x >= 100 ? "Open" : "Partially open") + (E > 0 && E < 100 ? " · tilted" : "");
    }
    if (d === "humidifier") return n.state !== "on" ? "Off" : mt(r.action || "on") + " · " + r.current_humidity + "% now";
    if (d === "vacuum") return mt(n.state) + (n.state === "cleaning" && ((g = r.rooms) != null && g.length) ? " · " + r.rooms.join(", ") : "") + (r.battery_level != null ? " · " + r.battery_level + "%" : "");
    if (d === "media_player") return n.state === "playing" || n.state === "paused" ? (n.state === "paused" ? "Paused · " : "") + (r.media_title || "Playing") : mt(n.state);
    if (d === "alarm_control_panel") return _c[n.state] || mt(n.state);
    if (d === "lock" || d === "valve") return mt(n.state);
    if (d === "switch") return n.state === "on" ? "On" : "Off";
    if (d === "plant") return n.state === "ok" ? "Healthy" : mt(r.problem);
    if (d === "binary_sensor")
      return r.device_class === "battery" ? n.state === "on" ? "Low" : "Normal" : r.device_class === "problem" ? n.state === "on" ? "Problem" : "OK" : r.device_class === "moisture" ? n.state === "on" ? "Wet" : "Dry" : Kl.includes(r.device_class) ? n.state === "on" ? "Open" : "Closed" : n.state === "on" ? "Detected" : "Clear";
    if (r.rang) return "Rang at " + Et(r.rang);
    const p = o();
    if (p != null && p.formatEntityState && !Ai(t))
      try {
        return p.formatEntityState(n);
      } catch {
      }
    const S = Number(n.state);
    if (n.state !== "" && Number.isFinite(S)) {
      const x = Math.abs(S) >= 100 ? 0 : Math.abs(S) >= 10 ? 1 : 2, E = r.unit_of_measurement ? r.unit_of_measurement === "%" ? "%" : " " + r.unit_of_measurement : "";
      return S.toLocaleString(void 0, { maximumFractionDigits: x }) + E + (r.plant_low ? " · Low" : r.plant_high ? " · High" : "");
    }
    return mt(n.state);
  }
  const Yt = (t) => t >= 1e3 ? Ie(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W";
  function Xt(t) {
    const n = o();
    t.querySelectorAll("[data-icon-for]").forEach((r) => {
      var S;
      const d = b[r.dataset.iconFor], p = r.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && d && !p) {
        let g = r.firstElementChild;
        (!g || g.localName !== "ha-state-icon") && (r.textContent = "", g = document.createElement("ha-state-icon"), r.appendChild(g)), g.hass = n, g.stateObj = d;
      } else if (customElements.get("ha-icon")) {
        let g = r.firstElementChild;
        (!g || g.localName !== "ha-icon") && (r.textContent = "", g = document.createElement("ha-icon"), r.appendChild(g)), g.icon = p || ((S = d == null ? void 0 : d.attributes) == null ? void 0 : S.icon) || "mdi:circle-medium";
      } else r.textContent || (r.textContent = (r.dataset.letter || De(r.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    });
  }
  const Ut = (t, n, r) => ' data-icon-for="' + se(t) + '"' + (n ? ' data-icon-name="' + se(n) + '"' : "") + (r ? ' data-letter="' + se(r) + '"' : ""), ea = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : ft(t).rang ? "mdi:doorbell" : "", gt = (t, n, r, d) => se([t, n, r, d ? JSON.stringify(d) : ""].join("|")), da = (t) => se(JSON.stringify(t));
  function Qt(t, n) {
    var p, S;
    const r = se(De(n) + ", " + Gt(n));
    return '<div class="activityRow' + (Number.isFinite(Number((p = b[n]) == null ? void 0 : p.state)) && ((S = b[n]) == null ? void 0 : S.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + se(t + "|" + n) + '" aria-label="' + r + '. Show the last 24 hours"' : '" aria-label="' + r + '"') + '><div class="tfIcon" aria-hidden="true"' + Ut(n, ea(n)) + '></div><div><div class="activityRowName">' + se(De(n)) + '</div><div class="activityRowMeta">' + se(Gt(n)) + "</div></div></div>";
  }
  const Pa = (t, n, r) => '<div class="activityRow" aria-label="' + se(t + ", " + n) + '"><div class="tfIcon" aria-hidden="true"' + Ut("", r, t) + '></div><div><div class="activityRowName">' + se(t) + '</div><div class="activityRowMeta">' + se(n) + "</div></div></div>";
  function oi(t) {
    var r;
    const n = ((r = b[t]) == null ? void 0 : r.state) === "on";
    return '<div class="activityRow tfPlug' + (n ? " on" : "") + '"><button class="tfIcon" type="button" data-act="' + gt("switch", "toggle", t) + '" aria-label="Turn ' + se(De(t)) + (n ? " off" : " on") + '"' + Ut(t) + '></button><div><div class="activityRowName">' + se(De(t)) + '</div><div class="activityRowMeta">' + se(Gt(t)) + "</div></div></div>";
  }
  const Ia = (t) => {
    var n;
    return ((n = Ce.get(t)) == null ? void 0 : n.name) ?? De(t);
  }, so = (t) => {
    var n;
    return ((n = Ce.get(t)) == null ? void 0 : n.text) ?? Gt(t);
  };
  function L(t) {
    var r;
    const n = (r = Ce.get(t)) == null ? void 0 : r.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (n ? Ut("", n, Ia(t)) : Ut(t, ea(t))) + '></div><div><div class="activityRowName">' + se(Ia(t)) + '</div><div class="activityRowMeta">' + se(so(t)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + se(Ia(t)) + '’s last 24 hours">' + Gl + '</button></div><svg class="tfGraph" data-graph="' + se(t) + '" role="img" aria-label="' + se(Ia(t)) + ', last 24 hours"></svg></div>';
  }
  function C(t, n, r, d, p = "", S = null, g = "") {
    const x = V && V.key === t;
    return '<section class="card tfCard' + (g ? " " + g : "") + (x ? " open" : "") + '" data-tf data-k="' + se(t) + '" style="order:' + n + (x && V.h ? ";min-height:" + V.h + "px" : "") + '" aria-label="' + se(r) + '"><div class="activityHeader">' + (S ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + se(S) + '" aria-label="' + se(r + ", " + Gt(S) + ". More info") + '">' + se(r) + "</button>" : '<div class="activityTitle">' + se(r) + "</div>") + "</div>" + (x ? L(V.id) : '<div class="activityRows">' + d.join("") + "</div>" + p) + "</section>";
  }
  function B(t, n) {
    const r = "readings:" + t.id, d = t.readings.map((p) => Qt(r, p));
    return t.power != null && d.push(Pa("Power now", Yt(t.power), "mdi:flash")), C(r, n, "Readings", d.concat(t.plugs.map(oi)));
  }
  function K(t, n) {
    var x;
    const r = "energy:" + t.id, [d, p] = [t.solar.find((E) => E.endsWith("_power")), t.solar.find((E) => E.endsWith("_today"))], S = [d, p].filter(Boolean).map((E) => Qt(r, E)), g = Number(((x = b[d]) == null ? void 0 : x.state) || 0) * 1e3;
    return Xe.grid && (S.push(Qt(r, Xe.grid)), S.push(Pa("House use", Yt(g + Number(b[Xe.grid].state)), "mdi:home-lightning-bolt"))), C(r, n, "Energy", S, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const pe = (t, n) => C("plant:" + t.id, n, De(t.id), t.readings.map((r) => Qt("plant:" + t.id, r)), "", t.id);
  function fe(t, n, r, d, p, S, g = null) {
    const x = r == null ? null : Math.max(0, Math.min(1, r)), E = x == null ? 0 : Math.round(x * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + se(d) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + E + '"' + (p ? ' aria-valuetext="' + se(p) + '"' : "") + ' data-drag="' + se(t + "|" + n) + '">' + (g != null ? '<span class="was" aria-hidden="true" style="left:' + g + '%"></span>' : "") + (S ? x == null ? "" : '<b style="left:' + E + '%"></b>' : '<i style="width:' + E + '%"></i>') + "</div>";
  }
  const ce = "move-assistant-house-last-bright", ve = (() => {
    try {
      return JSON.parse(ti.get(ce)) || {};
    } catch {
      return {};
    }
  })();
  let we = 0;
  const Pe = (t, n) => {
    !n || ve[t] === n || (ve[t] = n, clearTimeout(we), we = setTimeout(() => ti.set(ce, JSON.stringify(ve)), 500));
  }, ze = (t, n, r, d) => '<div class="tfStep" role="group" aria-label="' + se(t) + '"><button type="button" data-act="' + r + '" aria-label="Lower ' + se(t.toLowerCase()) + '">−</button><output>' + se(n) + '</output><button type="button" data-act="' + d + '" aria-label="Raise ' + se(t.toLowerCase()) + '">+</button></div>', je = (t, n, r) => '<div class="' + t + '" role="group" aria-label="' + se(n) + '">' + r.filter(Boolean).map((d) => '<button type="button" data-act="' + d.act + '"' + (d.pressed != null ? ' aria-pressed="' + d.pressed + '"' : "") + (d.disabled ? " disabled" : "") + (d.aria ? ' aria-label="' + se(d.aria) + '"' : "") + ">" + (d.html || se(d.label)) + "</button>").join("") + "</div>", qe = (t, n) => "width:" + Math.round(Math.max(0, Math.min(1, (t - n * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * n / 3).toFixed(2), Ee = (t) => "left:calc(3px + " + t / 100 + " * (100% - 6px))", Ze = (t, n) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + se(De(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(n) + '" aria-valuetext="' + Math.round(n) + '% open" data-blocks="' + se(t) + '">' + [0, 1, 2, 3].map((r) => '<span><i style="' + qe(n, r) + '"></i><b' + (n >= (r + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (r + 1) * 25 + "%</b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + Ee(n) + '">' + Math.round(n) + "%</output></div>";
  function Be(t, n) {
    t.querySelectorAll(":scope>span").forEach((d, p) => {
      d.firstElementChild.setAttribute("style", qe(n, p)), d.lastElementChild.classList.toggle("lit", n >= (p + 1) * 25 - 12);
    });
    const r = t.querySelector(".tfTip");
    r.setAttribute("style", Ee(n)), r.textContent = Math.round(n) + "%", t.setAttribute("aria-valuenow", String(Math.round(n))), t.setAttribute("aria-valuetext", Math.round(n) + "% open");
  }
  const nt = (t, n) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + se(De(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(n) + '" aria-valuetext="' + Math.round(n) + '% open" data-drag="tilt|' + se(t) + '"><i style="width:calc((100% - 6px) * ' + n / 100 + ')"></i><span' + (n > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (n > 92 ? ' class="lit"' : "") + ">Open</span></div>", pt = (t, n, r) => '<div class="tfCoverBtns" role="group" aria-label="' + se(De(t)) + '">' + [
    st(t, jh) && ["open", "Open", "open_cover", n >= 100 && !r],
    st(t, Uh) && ["stop", "Stop", "stop_cover", !1],
    st(t, Gh) && ["close", "Close", "close_cover", n <= 0 && !r]
  ].filter(Boolean).map(([d, p, S, g]) => '<button type="button" data-act="' + gt("cover", S, t) + '" aria-label="' + p + '"' + (g ? " disabled" : "") + ">" + Yh[d] + "</button>").join("") + "</div>", Nt = (t, n) => '<button class="tfIcon' + (n.art ? " art" : "") + '" type="button" data-act="' + n.button.act + '" aria-label="' + se(n.button.label) + '"' + (n.art ? ' style="background-image:url(&quot;' + se(n.art) + '&quot;)"' : Ut(t, n.icon)) + "></button>", Ct = (t) => '<button class="tfName" type="button" data-more="' + se(t) + '" aria-label="' + se(De(t) + ", " + Gt(t) + ". More info") + '"><span class="activityRowName">' + se(De(t)) + '</span><span class="activityRowMeta">' + se(Gt(t)) + "</span></button>";
  function Zt(t, n = !1, r = null) {
    if (t.startsWith("light.") && ri(t)) return '<div class="tfDac" data-k="' + se(t) + '" data-dac="' + (n ? "more:" : r ? "dash:" : "tile:") + se(t) + '"></div>';
    const d = Pi(t), p = r || (n && t.startsWith("light.") ? ["bright"] : null), S = d.sections.map((g, x) => g && (!p || p.includes((d.parts || [])[x])) ? g : "").filter(Boolean);
    return '<div class="tfAction' + (d.on ? " on" : "") + '" data-k="' + se(t) + '"' + (d.tone ? ' data-tone="' + d.tone + '"' : "") + jt(t) + '><div class="tfActionHead">' + Nt(t, d) + Ct(t) + "</div>" + S.join("") + "</div>";
  }
  const Kt = "dual-controller-v3", ta = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.4/dist/dual-axis-controller-v4.js";
  let Tn = null;
  async function ii() {
    if (Tn || customElements.get(Kt)) return;
    Tn = "loading";
    const t = await Promise.resolve().then(() => P({ type: "lovelace/resources" })).catch(() => null), n = Array.isArray(t) && t.some((d) => /dual-axis-controller/i.test(d.url || ""));
    if (await Promise.race([customElements.whenDefined(Kt), new Promise((d) => setTimeout(d, n ? 8e3 : 0))]), customElements.get(Kt)) return;
    const r = Object.assign(document.createElement("script"), { src: ta });
    r.onerror = () => {
      Tn = "failed", Y();
    }, document.head.appendChild(r);
  }
  const on = /* @__PURE__ */ new Map(), Sa = (t) => (It.lightStyles[t] || It.lights) === "dac", lo = () => It.lights === "dac" || Object.values(It.lightStyles).includes("dac");
  function ri(t) {
    return Sa(t) && !!customElements.get(Kt);
  }
  const ht = (t) => It.lightPads[t] || It.dacPad, Ln = () => {
    const t = o();
    return t && {
      ...t,
      themes: { ...t.themes || {}, darkMode: !f.classList.contains("light") },
      callService: (n, r, d, ...p) => t.callService(n, ...ko(n, r, d), ...p)
    };
  }, na = ".halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,158px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", co = ".hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}", Ha = (t, n) => {
    !t.shadowRoot || t.shadowRoot.querySelector("style[data-tf]") || (t.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: co + (n ? na : "") })).dataset.tf = "");
  }, Fa = /* @__PURE__ */ new Map(), Tt = new ResizeObserver((t) => t.forEach(({ target: n }) => {
    const r = n.parentElement;
    !r || !n.offsetHeight || (r.style.removeProperty("min-height"), Fa.set(r.dataset.dac, r.offsetHeight));
  }));
  function Jt(t) {
    t.querySelectorAll("[data-dac]").forEach((n) => {
      const r = n.dataset.dac, d = r.startsWith("dash:");
      let p = on.get(r);
      if (!p) {
        const S = r.slice(r.indexOf(":") + 1);
        p = document.createElement(Kt), p.setConfig({ type: "custom:" + Kt, entity: S, pad: ht(S), ...d ? { tap_action: { action: "none" } } : {} }), on.set(r, p);
      }
      p.hass = Ln(), p.parentNode !== n && n.replaceChildren(p, ...n.querySelectorAll(":scope > .tfEditChips")), !p.offsetHeight && Fa.has(r) && (n.style.minHeight = Fa.get(r) + "px"), Tt.observe(p), Ha(p, d);
    });
  }
  function An() {
    const t = Ln();
    on.forEach((n, r) => {
      n.isConnected ? n.hass = t : on.delete(r);
    });
  }
  customElements.whenDefined(Kt).then(() => {
    v && (_ != null && _.querySelector("[data-tf]")) && gs(Xa);
  });
  const uo = (t, n, r) => Oe.has(t + "|" + n) ? Oe.get(t + "|" + n) : r;
  function Pi(t) {
    var S;
    const n = b[t], r = n.attributes, d = t.split(".")[0], p = (g, x) => ({ act: gt(g, "toggle", t), label: x });
    if (d === "light") {
      const g = n.state === "on", x = Po(t), [E, H] = vn(t), z = uo("bright", t, oo(n));
      g && Pe(t, oo(n));
      const N = uo("ct", t, g && r.color_mode === "color_temp" ? r.color_temp_kelvin : null), U = uo("hue", t, g && Zl.includes(r.color_mode) && r.hs_color ? r.hs_color[0] : null);
      return { on: g, button: p("light", "Turn " + De(t) + (g ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        In(t) && fe("bright", t, z / 100, De(t) + " brightness", z + "%", !1, g ? null : ve[t] ?? null),
        x.includes("color_temp") && fe("ct", t, N == null ? null : (N - E) / (H - E), De(t) + " warm to cool", N == null ? "" : Math.round(N) + " kelvin", !0),
        x.some((ye) => Zl.includes(ye)) && fe("hue", t, U == null ? null : U / 360, De(t) + " colour", "", !0)
      ] };
    }
    if (d === "climate") {
      const g = r.target_temp_step || 0.5, x = Number(r.temperature);
      return { on: n.state !== "off", tone: n.state === "cool" || r.hvac_action === "cooling" ? "cool" : "heat", button: p("climate", "Turn " + De(t) + (n.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(x) && ze("Target temperature", Ie(x) + " °C", gt("climate", "set_temperature", t, { temperature: x - g }), gt("climate", "set_temperature", t, { temperature: x + g })),
        je("tfSeg", "Mode", (r.hvac_modes || []).map((E) => ({ label: mt(E), act: gt("climate", "set_hvac_mode", t, { hvac_mode: E }), pressed: n.state === E })))
      ] };
    }
    if (d === "cover") {
      const g = n.state === "opening" || n.state === "closing", x = n.state === "closed", E = Qn(t), H = ro(t);
      return { on: !x, tone: "blue", icon: Zh[jl(n)][x ? 1 : 0], button: p("cover", (x ? "Open " : "Close ") + De(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        st(t, yc) && Ze(t, E),
        H != null && nt(t, H),
        pt(t, E, g)
      ] };
    }
    if (d === "humidifier") {
      const g = Number(r.humidity);
      return { on: n.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: p("humidifier", "Turn " + De(t) + (n.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(g) && ze("Target humidity", g + "%", gt("humidifier", "set_humidity", t, { humidity: g - 1 }), gt("humidifier", "set_humidity", t, { humidity: g + 1 })),
        ((S = r.available_modes) == null ? void 0 : S.length) && je("tfSeg", "Mode", r.available_modes.map((x) => ({ label: mt(x), act: gt("humidifier", "set_mode", t, { mode: x }), pressed: r.mode === x })))
      ] };
    }
    if (d === "media_player") {
      const g = n.state === "playing", x = n.state === "off" || n.state === "standby", E = uo("vol", t, r.volume_level), H = x ? { act: gt("media_player", st(t, Vh) ? "turn_on" : "toggle", t), label: "Turn " + De(t) + " on" } : n.state === "playing" || n.state === "paused" ? { act: gt("media_player", "media_play_pause", t), label: (g ? "Pause " : "Play ") + De(t) } : { act: gt("media_player", st(t, zh) ? "turn_off" : "toggle", t), label: "Turn " + De(t) + " off" };
      return { on: !x, tone: "blue", art: !x && r.entity_picture ? r.entity_picture : null, button: H, parts: ["playback", "volume"], sections: x ? [] : [
        (st(t, bc) || st(t, wc) || st(t, vc) || st(t, xc)) && je("tfSeg", "Playback", [
          { html: Vs.prev, aria: "Previous", act: gt("media_player", "media_previous_track", t), disabled: !st(t, bc) },
          { html: g ? Vs.pause : Vs.play, aria: g ? "Pause" : "Play", act: gt("media_player", "media_play_pause", t), disabled: !(st(t, vc) || st(t, xc)) },
          { html: Vs.next, aria: "Next", act: gt("media_player", "media_next_track", t), disabled: !st(t, wc) }
        ]),
        st(t, Wh) && E != null && fe("vol", t, E, De(t) + " volume", Math.round(E * 100) + "%")
      ] };
    }
    if (d === "vacuum") {
      const g = n.state === "cleaning", x = r.rooms || [], E = (z) => x.includes(z) ? x.filter((N) => N !== z) : x.concat(z), H = gt("vacuum", g ? "pause" : "start", t, Ai(t) ? { rooms: x } : null);
      return { on: g || n.state === "returning", tone: "blue", button: { act: H, label: (g ? "Pause " : "Start ") + De(t) }, parts: ["controls", "rooms"], sections: [
        je("tfSeg", De(t), [
          { label: g ? "Pause" : "Start", act: H },
          { label: "Dock", act: gt("vacuum", "return_to_base", t), disabled: n.state === "docked" },
          { label: "Locate", act: gt("vacuum", "locate", t) }
        ]),
        Ai(t) && je("tfChips", "Rooms to clean", Xe.rooms.filter((z) => z.id !== "balcony").map((z) => ({ label: z.name, act: gt("vacuum", "set_rooms", t, { rooms: E(z.name) }), pressed: x.includes(z.name) })))
      ] };
    }
    if (d === "lock") {
      const g = n.state === "locked";
      return { on: !g, tone: "heat", button: { act: gt("lock", g ? "unlock" : "lock", t), label: (g ? "Unlock " : "Lock ") + De(t) }, parts: ["controls"], sections: [
        je("tfSeg", De(t), [
          { label: "Lock", act: gt("lock", "lock", t), pressed: g },
          { label: "Unlock", act: gt("lock", "unlock", t), pressed: n.state === "unlocked" },
          st(t, nf) && { label: "Open", act: gt("lock", "open", t), pressed: n.state === "open" }
        ])
      ] };
    }
    if (d === "alarm_control_panel") {
      const g = n.state === "disarmed";
      return { on: !g, tone: n.state === "triggered" ? "alarm" : "blue", button: { act: gt("alarm_control_panel", g ? "alarm_arm_away" : "alarm_disarm", t), label: g ? "Arm " + De(t) + ", away" : "Disarm " + De(t) }, parts: ["controls"], sections: [
        je("tfSeg", De(t), af.filter(([, , , x]) => !x || st(t, x)).map(([x, E, H]) => ({ label: E, act: gt("alarm_control_panel", H, t), pressed: n.state === x })))
      ] };
    }
    if (d === "valve") {
      const g = n.state === "open";
      return { on: g, tone: "blue", icon: "mdi:sprinkler-variant", button: p("valve", (g ? "Close " : "Open ") + De(t)), parts: ["controls"], sections: [
        je("tfSeg", De(t), [
          { label: "Open", act: gt("valve", "open_valve", t), pressed: g },
          { label: "Close", act: gt("valve", "close_valve", t), pressed: !g }
        ])
      ] };
    }
    return { on: !1, button: { act: "", label: De(t) }, sections: [] };
  }
  const Io = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : Ie(t)) + "°";
  function si(t) {
    const n = (he) => t.readings.find((F) => ft(F).device_class === he), r = n("temperature"), d = n("humidity"), p = (he) => {
      var F;
      return Number((F = b[he]) == null ? void 0 : F.state);
    }, S = (he) => t.actions.filter((F) => he.test(F)), g = t.lights.filter((he) => {
      var F;
      return ((F = b[he]) == null ? void 0 : F.state) === "on";
    }), x = S(/^cover\./), E = x.filter((he) => {
      var F;
      return ((F = b[he]) == null ? void 0 : F.state) !== "closed";
    }), H = [...new Set(x.map((he) => jl(b[he])))], z = S(/^climate\./)[0], N = S(/^humidifier\./)[0], U = S(/^media_player\./), ye = U.find((he) => {
      var F;
      return ((F = b[he]) == null ? void 0 : F.state) === "playing";
    }) || U.find((he) => {
      var F;
      return ((F = b[he]) == null ? void 0 : F.state) === "paused";
    }), Ne = t.plugs.filter((he) => {
      var F;
      return ((F = b[he]) == null ? void 0 : F.state) === "on";
    }), ue = [];
    if (r && Number.isFinite(p(r)) && ue.push({ key: "temp", id: r, kind: "reading", icon: eo.temp, label: "Temperature", value: Ie(p(r)) + "°" }), d && Number.isFinite(p(d)) && ue.push({ key: "hum", id: d, kind: "reading", icon: eo.hum, label: "Humidity", value: Math.round(p(d)) + "%" }), t.lights.length && ue.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: eo.lights,
      label: "Lights",
      value: g.length ? g.length + " of " + t.lights.length + " on" : "All off",
      short: g.length ? g.length + " on" : "Off",
      on: g.length > 0,
      light: g.length ? Ve(g[0]) : "",
      acts: t.lights.map((he) => ["light", g.length ? "turn_off" : "turn_on", he]),
      aria: (g.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), x.length) {
      const he = H.length === 1 ? Kh[H[0]] : "covers", F = Math.round(x.reduce((Le, vt) => Le + _t(vt), 0) / x.length);
      ue.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        icon: eo.covers,
        label: mt(he),
        value: F <= 0 ? "Closed" : F >= 100 ? "Open" : F + "% open",
        short: F <= 0 ? "Closed" : F + "%",
        on: E.length > 0,
        acts: x.map((Le) => ["cover", E.length ? "close_cover" : "open_cover", Le]),
        aria: (E.length ? "Close the " : "Open the ") + he + " in " + t.name
      });
    }
    if (z) {
      const he = ft(z), F = b[z].state === "off";
      ue.push({
        key: "climate",
        kind: "control",
        tone: he.hvac_action === "cooling" ? "cool" : "heat",
        icon: eo.climate,
        label: De(z),
        value: F ? "Off" : mt(he.hvac_action || b[z].state) + " · " + Io(he.temperature),
        short: F ? "Off" : Io(he.temperature),
        on: !F,
        acts: [["climate", "toggle", z]],
        aria: "Turn " + De(z) + (F ? " on" : " off")
      });
    }
    if (N) {
      const he = b[N].state === "on";
      ue.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        icon: eo.humidifier,
        label: De(N),
        value: he ? "On · " + ft(N).humidity + "%" : "Off",
        short: he ? ft(N).humidity + "%" : "Off",
        on: he,
        acts: [["humidifier", "toggle", N]],
        aria: "Turn " + De(N) + (he ? " off" : " on")
      });
    }
    if (U.length) {
      const he = ye || U[0], F = b[he], Le = F.state === "playing";
      ue.push({
        key: "media",
        kind: "control",
        tone: "blue",
        icon: eo.media,
        label: De(he),
        value: Gt(he),
        short: Le ? "Playing" : F.state === "paused" ? "Paused" : mt(F.state),
        on: Le,
        acts: [["media_player", F.state === "playing" || F.state === "paused" ? "media_play_pause" : "toggle", he]],
        aria: (Le ? "Pause " : "Play ") + De(he)
      });
    }
    return t.plugs.length && ue.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      icon: eo.plugs,
      label: "Plugs",
      value: Ne.length ? Ne.length + " of " + t.plugs.length + " on" : "All off",
      short: Ne.length ? Ne.length + " on" : "Off",
      on: Ne.length > 0,
      acts: t.plugs.map((he) => ["switch", Ne.length ? "turn_off" : "turn_on", he]),
      aria: (Ne.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((he) => ue.push(ft(he).device_class === "moisture" ? { key: "alert:" + he, kind: "alert", icon: eo.alert, label: "Water leak" } : { key: "note:" + he, kind: "note", icon: eo.door, label: De(he) + " " + Gt(he).toLowerCase() })), ue;
  }
  const br = (t, n) => {
    const r = (d) => t.actions.filter((p) => d.test(p));
    return {
      lights: t.lights,
      covers: r(/^cover\./),
      climate: r(/^climate\./).slice(0, 1),
      humidifier: r(/^humidifier\./).slice(0, 1),
      plugs: t.plugs,
      media: (() => {
        const d = r(/^media_player\./);
        return [d.find((p) => {
          var S;
          return ((S = b[p]) == null ? void 0 : S.state) === "playing";
        }) || d.find((p) => {
          var S;
          return ((S = b[p]) == null ? void 0 : S.state) === "paused";
        }) || d[0]].filter(Boolean);
      })()
    }[n] || [];
  }, Js = (t, n, r) => '<button class="' + n + (t.on ? " on" : "") + '" type="button" data-tone="' + t.tone + '" data-acts="' + da(t.acts) + '" aria-label="' + se(t.aria) + '" aria-pressed="' + t.on + '">' + r + "</button>", wr = (t) => '<button class="tfAName" type="button" data-go="' + se(t.id) + '" aria-label="Open ' + se(t.name) + '">' + se(t.name) + "</button>";
  function xr(t, n, r = !1) {
    const d = n.find((x) => x.key === "lights"), p = !!(d != null && d.on), S = p && d.light ? ' data-light style="' + d.light + '"' : "", g = '<span class="tfAreaGlyph"' + Ut("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>";
    return r || !d ? '<span class="tfIcon tfAreaIcon' + (p ? " on" : "") + '"' + S + ' aria-hidden="true">' + g + "</span>" : '<button class="tfIcon tfAreaIcon' + (p ? " on" : "") + '" type="button"' + S + ' data-acts="' + da(d.acts) + '" aria-label="' + se(d.aria) + '" aria-pressed="' + p + '">' + g + "</button>";
  }
  const yr = (t) => t.filter((n) => n.kind === "alert" || n.kind === "note").map((n) => '<span class="sourceTag">' + se(n.label) + "</span>").join(" "), Qs = (t) => t.readings.find((n) => ft(n).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((n) => b[n]) || null, as = (t, n) => {
    const r = De(n);
    return r.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? mt(r.slice(t.name.length + 1)) : r;
  };
  function kr(t) {
    const n = b[t], r = ft(t), d = t.split(".")[0], p = Number(n.state);
    if (n.state === "unavailable") return { text: "Unavailable" };
    if (d === "sensor" && Number.isFinite(p)) {
      if (r.device_class === "temperature") return { text: Io(p) };
      const S = r.unit_of_measurement || "";
      return S === "%" ? { text: Math.round(p) + "%" } : { text: Ie(p, Number.isInteger(p) ? 0 : 1), unit: S };
    }
    if (d === "climate" && (r.current_temperature ?? r.temperature) != null) return { text: Io(r.current_temperature ?? r.temperature) };
    if (d === "light") return { text: n.state !== "on" ? "Off" : In(t) ? oo(n) + "%" : "On" };
    if (d === "cover") {
      const S = _t(t);
      return { text: S <= 0 ? "Closed" : S >= 100 ? "Open" : S + "%" };
    }
    return d === "humidifier" ? { text: n.state === "on" ? r.humidity + "%" : "Off" } : d === "media_player" ? { text: n.state === "playing" ? "Playing" : n.state === "paused" ? "Paused" : mt(n.state) } : { text: Gt(t) };
  }
  const Ii = (t, n, r) => {
    const d = r.find((x) => x.key === "temp"), p = r.find((x) => x.key === "hum"), S = ft(n), g = b[n].state === "off";
    return n.startsWith("climate.") ? [as(t, n), g ? "Off" : mt(S.hvac_action || b[n].state) + (S.temperature != null ? " · " + Io(S.temperature) : ""), p && p.value + " humidity"].filter(Boolean).join(" · ") : [!(d && d.id === n) && as(t, n), d && d.id !== n && d.value, p && p.id !== n && p.value + " humidity"].filter(Boolean).join(" · ");
  };
  function el(t, n, r) {
    const d = r && kr(r), p = r ? Ii(t, r, n) : "", S = (x) => {
      const E = br(t, x.key);
      return E.length === 1 ? E[0] : "group:" + t.id + ":" + x.key;
    }, g = n.filter((x) => x.kind === "control").slice(0, 4).map((x) => '<div class="tfATile' + (x.on ? " on" : "") + '" data-tone="' + x.tone + '"' + (x.light ? ' data-light style="' + x.light + '"' : "") + ">" + Js(x, "tfIcon", x.icon) + '<button class="tfName" type="button" data-more="' + se(S(x)) + '" aria-label="' + se(t.name + " " + x.label.toLowerCase() + ", " + x.value + ". Open") + '"><span class="activityRowName">' + se(x.label) + '</span><span class="activityRowMeta">' + se(x.value) + "</span></button></div>");
    return '<div class="workoutPanelTop">' + xr(t, n) + '<div class="tfATitle">' + wr(t) + yr(n) + "</div></div>" + (r ? '<button class="tfABig" type="button" data-more="' + se(r) + '" aria-label="' + se(De(r) + ", " + Gt(r) + ". More info") + '"><span class="tfABigMain' + (d.text.length > 7 ? " long" : "") + '">' + se(d.text) + (d.unit ? '<span class="tfABigUnit">' + se(d.unit) + "</span>" : "") + "</span>" + (p ? '<span class="tfABigSub">' + se(p) + "</span>" : "") + "</button>" : "") + (g.length ? '<div class="tfATiles">' + g.join("") + "</div>" : "");
  }
  function os(t) {
    const n = t.id === ge, r = si(t), d = Qs(t), p = d && kr(d), S = [...r.filter((g) => g.kind === "control"), ...r.filter((g) => g.kind !== "control" && g.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (n ? " active" : "") + '" data-area="' + se(t.id) + '" tabindex="0" aria-expanded="' + n + '" aria-label="' + se(t.name) + '"><div class="panelExpanded"' + (n ? "" : " inert") + ">" + el(t, r, d) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + xr(t, r, !0) + '<span class="tfACName">' + se(t.name) + '</span></div><span class="tfACMain">' + (p ? se(p.text + (p.unit ? " " + p.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + S.map((g) => '<span class="tfACTile"><span class="tfIcon' + (g.kind === "alert" ? " alert" : "") + '"' + (g.on && g.light ? ' data-light style="' + g.light + '"' : "") + ">" + g.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let aa = [];
  const Mr = (t) => '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + aa.map(os).join("") + "</section></div>", Cr = () => [
    { key: "home", name: "Home", ids: Xe.homeVacuums },
    ...Xe.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], Ta = (t, n, r) => t + " " + (t === 1 ? n : r), Hn = () => (G.favourites ?? ae.favorite_entities ?? []).filter((t) => b[t]);
  function tl() {
    if (!We) {
      const n = Object.entries(et).sort((d, p) => p[1] - d[1]).map(([d]) => d), r = Xe.rooms.flatMap((d) => d.actions);
      We = [.../* @__PURE__ */ new Set([...me, ...n, ...r.filter((d) => Pi(d).on), ...r])];
    }
    const t = Hn();
    return We.filter((n) => b[n] && b[n].state !== "unavailable" && !t.includes(n));
  }
  let Hi = !1;
  function Fi() {
    if (!Hi || G.favSeeded || !Xe.rooms.length) return;
    const t = (r) => Object.keys(b).find((d) => Ai(d) && r(d)), n = [t((r) => r.startsWith("climate.")), t((r) => r.startsWith("cover.") && /curtain/.test(r)), t((r) => r.startsWith("valve.")), Xe.security.locks[0]];
    G = { ...G, favourites: [.../* @__PURE__ */ new Set([...G.favourites ?? ae.favorite_entities ?? [], ...n.filter(Boolean)])], favSeeded: !0 }, Bn();
  }
  const Lt = () => G.suggest ?? !ae.hide_suggested_entities;
  function nl() {
    const t = new Set(G.favHidden || []), n = Hn().filter((d) => !t.has(d)), r = Lt() ? tl().filter((d) => !t.has(d) && fo(d)) : [];
    return [...n, ...r].slice(0, rf);
  }
  const al = (t) => {
    const n = Hn().includes(t);
    return '<button class="tfStar" type="button" data-star="' + se(t) + '" aria-pressed="' + n + '" aria-label="Favourite: ' + se(De(t)) + '">' + tf(n) + "</button>";
  };
  function Oi(t, { area: n = !1, star: r = !1, plain: d = !1, say: p = null, alert: S = !1 } = {}) {
    var Ne, ue, he, F, Le, vt;
    const g = d && ((Le = (Ne = o()) == null ? void 0 : Ne.devices) == null ? void 0 : Le[(F = (he = (ue = o()) == null ? void 0 : ue.entities) == null ? void 0 : he[t]) == null ? void 0 : F.device_id]), x = g && (g.name_by_user || g.name) || De(t), E = t.split(".")[0], H = !d && $l.includes(E) ? Pi(t) : null, z = H ? H.on : ["on", "open", "playing"].includes((vt = b[t]) == null ? void 0 : vt.state), N = d ? null : H ? H.button : $h.includes(E) ? { act: gt(E, "toggle", t), label: "Turn " + De(t) + (z ? " off" : " on") } : E === "scene" || E === "script" ? { act: gt(E, "turn_on", t), label: "Run " + De(t) } : null, U = (p ?? Gt(t)) + (n && wt.get(t) ? " · " + wt.get(t) : ""), ye = (H == null ? void 0 : H.icon) || ea(t);
    return '<div class="activityRow' + (N ? " tfPlug" : "") + (z ? " on" : "") + (r ? " tfPick" : "") + (S ? " alert" : "") + '" data-k="' + se((n ? "fav:" : "row:") + t) + '" data-tone="' + (E === "light" ? "light" : (H == null ? void 0 : H.tone) || "blue") + '"' + jt(t) + ">" + (N && !r ? '<button class="tfIcon" type="button" data-act="' + N.act + '" aria-label="' + se(N.label) + '"' + Ut(t, ye) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + Ut(t, ye) + "></div>") + '<button class="tfName" type="button" data-more="' + se(t) + '" aria-label="' + se(x + ", " + U + ". More info") + '"><span class="activityRowName">' + se(x) + '</span><span class="activityRowMeta">' + se(U) + "</span></button>" + (r ? al(t) : "") + "</div>";
  }
  const po = () => {
    var t;
    return b[(t = G.sources) == null ? void 0 : t.weather] ? G.sources.weather : b["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(b).find((n) => n.startsWith("weather."));
  };
  function ol() {
    var r;
    const t = (d) => Object.keys(b).filter((p) => p.startsWith("binary_sensor.") && d.includes(ft(p).device_class));
    return ((r = le.alert_entities) != null && r.length ? le.alert_entities : [...t(["moisture", "smoke", "gas"]).map((d) => ({ entity: d, severity: "alert" })), ...t(Kl).map((d) => ({ entity: d, severity: "warning" }))]).filter((d) => b[d.entity]).map((d) => ({ ...d, on: ["on", "open", "unlocked", "triggered", "problem"].includes(b[d.entity].state) }));
  }
  function Ht() {
    const t = Object.keys(Ul), n = /* @__PURE__ */ new Set(), r = [];
    return (ae.shortcuts || []).forEach((d) => {
      if (d.type === "summary") {
        if (!t.includes(d.key) || n.has(d.key)) return;
        n.add(d.key);
      }
      r.push(d);
    }), t.forEach((d) => {
      n.has(d) || r.push({ type: "summary", key: d });
    }), r;
  }
  function Oa() {
    var he;
    const t = ((he = o()) == null ? void 0 : he.entities) || {}, n = (F) => ft(F).device_class, r = Object.keys(b).filter((F) => F.startsWith("sensor.") && n(F) === "battery" || F.startsWith("binary_sensor.") && ["battery", "problem"].includes(n(F))), d = Xe.rooms.flatMap((F) => F.plants.map((Le) => Le.id));
    if (!r.length && !d.length) return null;
    const p = (F) => {
      var vt;
      const Le = (vt = t[F]) == null ? void 0 : vt.device_id;
      return !!Le && Object.keys(b).some((Wt) => {
        var tn;
        return Wt.startsWith("binary_sensor.") && ((tn = t[Wt]) == null ? void 0 : tn.device_id) === Le && n(Wt) === "battery_charging" && b[Wt].state === "on";
      });
    }, S = (F) => F.startsWith("vacuum.") ? ft(F).battery_level <= 20 && b[F].state !== "docked" : F.startsWith("binary_sensor.") ? n(F) === "battery" && b[F].state === "on" : parseFloat(b[F].state) <= 20 && !p(F), g = [...r, ...Xe.vacuums].filter((F) => b[F] && S(F)), x = [...r.filter((F) => n(F) === "problem" && b[F].state === "on"), ...d.filter((F) => {
      var Le;
      return ((Le = b[F]) == null ? void 0 : Le.state) === "problem";
    })], E = r.filter((F) => b[F].state === "unavailable"), H = [.../* @__PURE__ */ new Set([...g, ...x, ...E])], z = (F) => {
      const Le = parseFloat(b[F].state);
      return n(F) === "battery" && Number.isFinite(Le) ? Le : 101;
    }, N = [...d, ...Xe.vacuums, ...[...r].sort((F, Le) => z(F) - z(Le))].filter((F) => b[F] && !H.includes(F)), U = /* @__PURE__ */ new Map();
    N.forEach((F) => {
      var vt;
      const Le = ((vt = Xe.areaOf) == null ? void 0 : vt.call(Xe, F)) || "";
      U.set(Le, [...U.get(Le) || [], F]);
    });
    const ye = (F) => {
      const Le = Xe.rooms.findIndex((vt) => vt.id === F);
      return F === "" ? 1 / 0 : Le < 0 ? Xe.rooms.length : Le;
    }, Ne = [...U.keys()].sort((F, Le) => ye(F) - ye(Le)), ue = (F) => {
      var Le, vt, Wt, tn;
      return ((Le = Xe.rooms.find(($t) => $t.id === F)) == null ? void 0 : Le.name) || ((tn = (Wt = (vt = o()) == null ? void 0 : vt.areas) == null ? void 0 : Wt[F]) == null ? void 0 : tn.name) || F;
    };
    return {
      value: [g.length && Ta(g.length, "low battery", "low batteries"), x.length && Ta(x.length, "problem", "problems"), E.length && Ta(E.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: H, alert: !0 }, ...Ne.map((F) => ({ name: F ? ue(F) : Ne.length > 1 ? "Other devices" : "Devices", ids: U.get(F) }))].filter((F) => F.ids.length)
    };
  }
  function ho() {
    var pa;
    const t = Xe.rooms, n = Xe.security, r = (He, Ft) => He.actions.filter((xl) => Ft.test(xl)), d = (He) => t.map((Ft) => ({ name: Ft.name, ids: He(Ft) })).filter((Ft) => Ft.ids.length), p = t.flatMap((He) => He.lights), S = p.filter((He) => {
      var Ft;
      return ((Ft = b[He]) == null ? void 0 : Ft.state) === "on";
    }).length, g = t.map((He) => He.readings.find((Ft) => ft(Ft).device_class === "temperature")).filter(Boolean).map((He) => Number(b[He].state)).filter(Number.isFinite), [x, E] = [Ie(Math.min(...g)), Ie(Math.max(...g))], H = t.flatMap((He) => r(He, /^media_player\./)), z = H.filter((He) => {
      var Ft;
      return ((Ft = b[He]) == null ? void 0 : Ft.state) === "playing";
    }).length, N = ol(), U = N.filter((He) => He.severity === "warning" && He.on).length, ye = n.locks.filter((He) => {
      var Ft;
      return ["unlocked", "jammed", "open"].includes((Ft = b[He]) == null ? void 0 : Ft.state);
    }).length, Ne = n.alarms.filter((He) => {
      var Ft;
      return ((Ft = b[He]) == null ? void 0 : Ft.state) === "disarmed";
    }).length, ue = U ? Ta(U, "warning", "warnings") : null, he = ye ? ye + " unlocked" : Ne ? Ne + " disarmed" : ue ? null : "All secure", F = Oa(), Le = t.flatMap((He) => He.solar), vt = Le.find((He) => He.endsWith("_power")), Wt = {
      light: p.length && { value: S ? S + " on" : "All off", groups: d((He) => He.lights) },
      climate: g.length && { value: x === E ? x + "°" : x + " - " + E + "°", groups: d((He) => [...He.readings.filter((Ft) => ["temperature", "humidity"].includes(ft(Ft).device_class)), ...r(He, /^(climate|humidifier)\./)]) },
      security: (n.alarms.length || n.locks.length) && { value: [ue, he].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...n.alarms, ...n.locks] }, { name: "Doors and windows", ids: n.openings }].filter((He) => He.ids.length) },
      media_players: H.length && { value: z ? z + " playing" : "No media playing", groups: d((He) => r(He, /^media_player\./)) },
      maintenance: F,
      energy: Xe.grid && { value: Yt(Number(((pa = b[vt]) == null ? void 0 : pa.state) || 0) * 1e3 + Number(b[Xe.grid].state)) + " now", groups: [{ name: "Energy", ids: [...Le, Xe.grid] }] }
    }, tn = [], $t = N.filter((He) => He.severity !== "warning" && He.on);
    return $t.length && tn.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: Ta($t.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: $t.map((He) => He.entity) }] }), Ht().forEach((He) => {
      He.type !== "summary" ? tn.push({ key: "path:" + He.path, name: He.label || He.path, icon: He.icon || "mdi:link-variant", colour: "", value: "" }) : !He.hidden && Wt[He.key] && !(G.hiddenSums || []).includes(He.key) && tn.push({ key: He.key, ...Ul[He.key], ...Wt[He.key] });
    }), tn;
  }
  const il = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + se(t.key) + '" data-k="sum:' + se(t.key) + '" aria-label="' + se(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : "") + '><div class="tfIcon" aria-hidden="true"' + Ut(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + se(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + se(t.value) + "</div>" : "") + "</div></div>";
  function li(t) {
    const n = Hn();
    G = { ...G, favourites: n.includes(t) ? n.filter((r) => r !== t) : [...n, t], favHidden: (G.favHidden || []).filter((r) => r !== t) }, Bn(), en();
  }
  function qi(t) {
    document.querySelector("home-assistant") && (be.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function di(t, n) {
    if (t.startsWith("path:")) {
      qi(t.slice(5));
      return;
    }
    Mi("summary:" + t, n);
  }
  async function qa() {
    const t = (g) => Promise.resolve().then(() => P(g)).catch(() => null), [n, r, d, p] = await Promise.all([
      t({ type: "frontend/get_user_data", key: kc }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), S = (n == null ? void 0 : n.value) || {};
    G = { favourites: S.favourites ?? null, sources: S.sources, hiddenSums: S.hiddenSums, dash: S.dash, named: S.named, favHidden: S.favHidden, suggest: S.suggest, favSeeded: S.favSeeded }, ae = (r == null ? void 0 : r.value) || {}, le = (d == null ? void 0 : d.value) || {}, me = Array.isArray(p == null ? void 0 : p.entities) ? p.entities : [], We = null, Object.keys(b).length && en(), rl(), Hi = !0, Fi();
  }
  const La = "HomeCore";
  async function rl() {
    var d, p, S;
    const t = location.pathname.split("/")[1], n = G.named || [];
    if (!((p = (d = o()) == null ? void 0 : d.user) != null && p.is_admin) || !t || n.includes(t)) return;
    const r = () => {
      G = { ...G, named: [...n, t] }, Bn();
    };
    try {
      const g = (S = await P({ type: "lovelace/dashboards/list" })) == null ? void 0 : S.find((H) => H.url_path === t);
      if (!g || g.mode === "yaml") return;
      if (g.title === La) {
        r();
        return;
      }
      const x = await P({ type: "lovelace/config", url_path: t }), E = ((x == null ? void 0 : x.views) || []).flatMap((H) => [...H.cards || [], ...(H.sections || []).flatMap((z) => z.cards || [])]);
      if (!E.length || !E.every((H) => (H == null ? void 0 : H.type) === "custom:move-assistant-card" && H.layout === "test-focus")) return;
      await P({ type: "lovelace/dashboards/update", dashboard_id: g.id, title: La }), r();
    } catch {
    }
  }
  let ca = null, Wi = 0, oa = !1;
  const Sr = (t) => {
    const n = t.split(".")[0];
    return of.includes(n) && (n !== "binary_sensor" || Kl.includes(ft(t).device_class));
  };
  async function sl() {
    var t;
    if (!(oa || Date.now() - Wi < 30 * 1e3)) {
      oa = !0, Wi = Date.now();
      try {
        const n = Object.keys(((t = o()) == null ? void 0 : t.states) || {}).filter(Sr), r = n.length ? await P({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: n }) : null;
        ca = Array.isArray(r) ? r.filter((d) => d.entity_id && d.state != null && d.when) : null;
      } catch {
        ca = null;
      }
      oa = !1, en();
    }
  }
  function Tr() {
    const t = /* @__PURE__ */ new Map(), n = (d) => {
      if (!b[d.entity_id] || !Sr(d.entity_id) || !fo(d.entity_id) || ["unavailable", "unknown"].includes(d.state)) return;
      const p = t.get(d.entity_id);
      (!p || d.when > p.when + 1) && t.set(d.entity_id, d);
    };
    (ca || []).forEach(n);
    const r = ca ? Wi / 1e3 - 5 : 0;
    return Object.keys(b).forEach((d) => {
      var g;
      const p = b[d], S = p.last_changed ? Date.parse(p.last_changed) / 1e3 : 0;
      S > r && n({ entity_id: d, state: p.state, when: S, context_user_id: (g = p.context) == null ? void 0 : g.user_id });
    }), [...t.values()].sort((d, p) => p.when - d.when).slice(0, sf);
  }
  function Lr(t) {
    var d;
    const n = t.context_user_id && Object.keys(b).find((p) => p.startsWith("person.") && ft(p).user_id === t.context_user_id);
    if (n) return De(n);
    const r = (d = o()) == null ? void 0 : d.user;
    return r && t.context_user_id === r.id ? r.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function is(t) {
    const n = t.entity_id.split(".")[0], r = String(t.state);
    return n === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[r] || mt(r).toLowerCase() : n === "cover" || n === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[r] || mt(r).toLowerCase() : n === "binary_sensor" ? r === "on" ? "opened" : "closed" : n === "climate" ? r === "off" ? "turned off" : "set to " + mt(r).toLowerCase() : n === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[r] || mt(r).toLowerCase() : n === "alarm_control_panel" ? (_c[r] || mt(r)).toLowerCase() : n === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[r] || mt(r).toLowerCase() : r === "on" ? "turned on" : r === "off" ? "turned off" : mt(r).toLowerCase();
  }
  function ll(t) {
    const n = t.entity_id, r = De(n) + " " + is(t), d = [Lr(t), Et(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow"><div class="tfIcon" aria-hidden="true"' + Ut(n, ea(n)) + '></div><button class="tfName" type="button" data-more="' + se(n) + '" aria-label="' + se(r + ", " + d + ". More info") + '"><span class="activityRowName">' + se(r) + '</span><span class="activityRowMeta">' + se(d) + "</span></button></div>";
  }
  let Wa = null, Ar = 0;
  const ci = [["electricity", "Electricity", 4.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function dl() {
    var n;
    if (Date.now() - Ar < 5 * 60 * 1e3) return;
    Ar = Date.now();
    const t = [];
    try {
      const r = ((n = await P({ type: "energy/get_prefs" })) == null ? void 0 : n.energy_sources) || [], d = (p) => r.filter((S) => S.type === p).flatMap((S) => p === "grid" ? (S.flow_from || []).map((g) => g.stat_energy_from) : [S.stat_energy_from]).filter(Boolean);
      for (const [p, S, g] of [["electricity", "Electricity", d("grid")], ["solar", "Solar", d("solar")], ["gas", "Gas", d("gas")], ["water", "Water", d("water")]]) {
        if (!g.length) continue;
        const x = await Promise.all(g.map((E) => Promise.resolve(P({ type: "recorder/statistic_during_period", statistic_id: E, calendar: { period: "day" }, types: ["change"] })).then((H) => Number(H == null ? void 0 : H.change) || 0, () => 0)));
        t.push({ key: p, name: S, id: g[0], value: x.reduce((E, H) => E + H, 0), unit: ft(g[0]).unit_of_measurement || (p === "gas" || p === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    Wa = t, en();
  }
  let ga = null;
  function Va() {
    var S;
    const t = Wa != null && Wa.length ? Wa : ci.map(([g, x, E, H]) => {
      const z = "sensor.made_up_energy_" + g;
      return b[z] = { entity_id: z, state: String(E), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: x + " today", unit_of_measurement: H, state_class: "total_increasing" } }, { key: g, name: x, id: z, value: E, unit: H };
    });
    Ce.clear(), t.some((g) => g.id === ga) || (ga = t[0].id);
    const n = t.map((g) => {
      const x = Number(g.value).toLocaleString(void 0, { maximumFractionDigits: g.value < 10 ? 2 : 1 }) + " " + g.unit, E = lf[g.key], H = g.id === ga;
      return Ce.set(g.id, { name: g.name, text: x, icon: E }), '<div class="activityRow tap' + (H ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + se(g.id) + '" aria-pressed="' + H + '" aria-label="' + se(g.name + ", " + x) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + Ut("", E, g.name) + '></div><div><div class="activityRowName">' + se(g.name) + '</div><div class="activityRowMeta">' + se(x) + "</div></div></div>";
    }), r = t.find((g) => g.id === ga), d = (((S = rn().opts.energy) == null ? void 0 : S.graph) || "above") === "below", p = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + se(r.id) + '" role="img" aria-label="' + se(r.name) + ', last 24 hours"></svg></div>';
    return C("dash:energy", 0, "Energy today", n, p, null, "tfDashCard tfDash-energy" + (d ? "" : " graphAbove"));
  }
  function Vi(t) {
    const n = _.querySelector(".tfDash-energy"), r = n == null ? void 0 : n.querySelector(".tfDashGraph svg");
    !r || t === ga || (ga = t, n.querySelectorAll("[data-energy-pick]").forEach((d) => {
      const p = d.dataset.energyPick === t;
      d.classList.toggle("picked", p), d.setAttribute("aria-pressed", String(p));
    }), r.dataset.graph = t, r.dataset.drawn = "", hn.set("dash:energy", Va()), fs(!0));
  }
  function zi(t) {
    var p;
    if ((p = window.matchMedia) != null && p.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [n, r] = t.querySelectorAll("path");
    if (!(r != null && r.getTotalLength)) return;
    const d = r.getTotalLength();
    r.animate([{ strokeDasharray: d, strokeDashoffset: d }, { strokeDasharray: d, strokeDashoffset: 0 }], { duration: 700, easing: "cubic-bezier(.2,.7,.3,1)" }), n == null || n.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, delay: 200, easing: "ease-out", fill: "backwards" });
  }
  let za = null, ui = 0;
  const fo = (t) => !t.startsWith("light.") || df.includes((wt.get(t) || "").toLowerCase()), ji = () => Math.max(2, Ua((_ == null ? void 0 : _.clientWidth) || 0).n);
  function va(t) {
    if (!za) {
      const r = (d) => {
        var p;
        return (((p = b[d]) == null ? void 0 : p.state) === "on" ? 1e6 : 0) + (et[d] || 0);
      };
      za = {
        lights: Xe.rooms.flatMap((d) => d.lights).filter((d) => {
          var p;
          return fo(d) && ((p = b[d]) == null ? void 0 : p.state) !== "unavailable";
        }).sort((d, p) => r(p) - r(d) || De(d).localeCompare(De(p))),
        climates: Xe.rooms.flatMap((d) => d.actions.filter((p) => p.startsWith("climate.")))
      };
    }
    const n = za.climates.filter((r) => b[r]).slice(0, t > 3 ? 2 : 1);
    return [...za.lights.filter((r) => b[r]).slice(0, Math.max(0, t - n.length)), ...n];
  }
  const mo = (t, n, r, d) => (p) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + n + '" aria-label="' + r + '">' + (d ? '<div class="activityHeader"><div class="activityTitle">' + r + "</div></div>" : "") + '<div class="activityRows">' + p + "</div></section>";
  function cl(t, n) {
    var S, g;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + se(((g = (S = o()) == null ? void 0 : S.config) == null ? void 0 : g.location_name) || "Home") + "</h1>" }), n.length && t.push({ key: "sums", wrap: (x) => '<div class="tfDashBarRow" data-tf data-k="sums">' + mo("tfDash-bar", "sums-bar", "Summaries", !1)(x).replace(" data-tf", "") + "</div>", tiles: n.map((x) => ({ key: "sum:" + x.key, html: il(x) })) }), aa.length && t.push({ key: "areas", html: Mr(0) });
    const r = nl();
    r.length && t.push({ key: "favs", wrap: mo("tfDash-favs", "favs", "Favourites", !0), tiles: r.map((x) => ({ key: "fav:" + x, html: Oi(x, { area: !0 }) })) });
    const d = Tr();
    t.push({ key: "dash:act", html: C("dash:act", 0, "Activity", d.length ? d.map(ll) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: Va() });
    const p = ji();
    return ui = p, t.push({
      key: "dash:tiles",
      wrap: (x) => '<div class="tfDashTiles" data-tf data-k="dash:tiles">' + x + "</div>",
      tiles: va(p >= 3 ? p : p * 2).map((x) => ({ key: x, html: Zt(x, !1, x.startsWith("climate.") ? ["step"] : ["bright"]) }))
    }), sl(), dl(), t;
  }
  const Gi = 252, qt = 16, pi = 230, go = 60, Aa = go + qt, hi = 5, _r = 3, Er = { title: "The name", sums: "Summaries", wx: "Weather", areas: "Areas", favs: "Favourites", act: "Activity", energy: "Energy today", avg: "Compared to average" }, Ui = ["wx", "favs", "act", "energy", "avg"], rs = { wx: hi, areas: hi, favs: hi, act: hi, energy: 4, avg: 4 }, ul = 3, kn = 94, ja = (t) => {
    var n;
    return !!((n = rn().opts[t]) != null && n.tall);
  }, ia = (t) => Er[t] || De(t), pl = 409, ss = 128;
  let _n = !1, At = null, Fn = null, Yi = !1, _a = /* @__PURE__ */ new Map(), fi = 0, bn = 0;
  const Ga = ["title", "sums"], Ua = (t) => {
    let n = Math.floor((t + qt) / (Gi + qt)), r = Gi;
    return n < 4 && t >= 4 * pi + 3 * qt && (n = 4, r = Math.floor((t - 3 * qt) / 4)), { n: Math.max(1, n), w: r };
  }, rn = () => ({ cells: {}, spans: {}, hidden: [], opts: {}, ...G.dash || {} });
  function Ho(t) {
    G = { ...G, dash: t }, Bn();
  }
  function mi() {
    const t = (n) => _.querySelector(n);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", fn.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", fn.avg, 2],
      ...[..._.querySelectorAll(".tfDashTiles > [data-k]")].map((n) => [n.dataset.k, n, 1, !0])
    ].filter(([, n]) => n == null ? void 0 : n.isConnected).map(([n, r, d, p = !1]) => ({ key: n, el: r, span: d, tile: p }));
  }
  const Dr = (t, n, r) => t.span === "full" ? n : t.span === "areas" ? Math.min(n, Math.ceil((pl + Math.max(0, aa.length - 1) * (ss + qt) + qt) / (r + qt))) : Math.min(n, rn().spans[t.key] ?? t.span), Ya = (t) => rs[t.key] ?? (t.el.classList.contains("tfDac") ? ja(t.key) ? hi : ul : null);
  function ls(t, n, r = null) {
    const d = rn().cells, p = t.every((x) => !d[x.key] || d[x.key].col + x.cols <= n), S = (x) => d[x.key] || { row: 1e9, col: 0 }, g = () => {
      const x = /* @__PURE__ */ new Set(), E = /* @__PURE__ */ new Map(), H = (ue, he, F, Le) => {
        for (let vt = he; vt < he + Le; vt++) for (let Wt = ue; Wt < ue + F; Wt++) if (x.has(Wt + "," + vt)) return !1;
        return !0;
      }, z = (ue, he, F) => {
        for (let Le = F; Le < F + ue.rows; Le++) for (let vt = he; vt < he + ue.cols; vt++) x.add(vt + "," + Le);
        E.set(ue.key, { col: he, row: F, cols: ue.cols, rows: ue.rows });
      }, N = (ue, he, F) => {
        for (he = Math.max(0, Math.min(n - ue.cols, he)), F = Math.max(0, F); !H(he, F, ue.cols, ue.rows); ) F++;
        z(ue, he, F);
      }, U = (ue) => {
        for (let he = 0; ; he++) for (let F = 0; F <= n - ue.cols; F++) if (H(F, he, ue.cols, ue.rows)) {
          z(ue, F, he);
          return;
        }
      };
      r && N(r, At.col, At.row);
      const ye = t.filter((ue) => ue !== r), Ne = (ue, he) => S(ue).row - S(he).row || S(ue).col - S(he).col;
      return p ? (ye.filter((ue) => d[ue.key]).sort(Ne).forEach((ue) => N(ue, d[ue.key].col, d[ue.key].row)), ye.filter((ue) => !d[ue.key]).forEach(U), E) : ([...ye].sort(Ne).forEach(U), E);
    };
    for (let x = 0; ; x++) {
      const E = g();
      if (x === 3) return E;
      const H = t.filter((N) => N.tile && !ja(N.key)).map((N) => ({ it: N, p: E.get(N.key) })).sort((N, U) => N.p.row - U.p.row || N.p.col - U.p.col);
      let z = !1;
      for (let N = 0, U; N < H.length; N = U) {
        for (U = N + 1; U < H.length && H[U].p.row === H[N].p.row && H[U].p.col === H[U - 1].p.col + 1; U++) ;
        const ye = H.slice(N, U), Ne = Math.max(...ye.map((ue) => ue.it.rows));
        ye.forEach((ue) => {
          ue.it.rows < Ne && (ue.it.rows = Ne, z = !0);
        });
      }
      if (!z) return E;
    }
  }
  function Rr() {
    const t = rn(), n = new Set(t.hidden), r = mi().filter((g) => !Ga.includes(g.key));
    let d = _a;
    if (!d.size) {
      const g = t.pegs || 4, x = r.filter((E) => !n.has(E.key));
      x.forEach((E) => {
        E.cols = Dr(E, g, Gi), E.rows = Ya(E) ?? 2;
      }), d = ls(x, g);
    }
    const p = (g) => !n.has(g.key) && d.get(g.key) || { row: 1e9, col: 0 };
    r.sort((g, x) => p(g).row - p(x).row || p(g).col - p(x).col);
    const S = (t.phone || []).map((g) => r.find((x) => x.key === g && !n.has(g))).filter(Boolean);
    return [...S, ...r.filter((g) => !S.includes(g))];
  }
  const Zi = () => Rr().forEach((t, n) => t.el.style.setProperty("--o", String(3 + n))), Za = (t, n) => Ho({ ...t, cells: n, pegs: Ua(_.clientWidth).n });
  function mn() {
    var he;
    if (!v || !_) return;
    const t = _.clientWidth, { n, w: r } = Ua(t), d = f.classList.contains("tfDash") && n >= 2;
    f.classList.toggle("tfBoard", d), f.classList.toggle("tfEditing", d && _n);
    const p = c("dashEditNav");
    p && (p.hidden = !d, p.classList.toggle("active", _n), p.setAttribute("aria-pressed", String(_n)), p.setAttribute("aria-label", _n ? "Done editing" : "Edit the dashboard"), p.title = _n ? "Done" : "Edit", p.innerHTML = _n ? ef : Ac);
    const S = d ? mi() : [];
    if (!d) {
      _.style.height = "", _.querySelectorAll(".tfBoardItem").forEach((F) => {
        F.classList.remove("tfBoardItem", "tfBoardHidden"), F.style.left = F.style.top = F.style.width = F.style.height = "";
      }), (he = _.querySelector(".tfDash-act > .activityRows")) == null || he.style.removeProperty("max-height"), bo(!1), f.classList.contains("tfDash") && Zi(), wn();
      return;
    }
    _.style.setProperty("--peg-w", r + "px");
    const g = new Set(rn().hidden), x = r + qt;
    At != null && At.fromTray && g.delete(At.key), S.forEach((F) => F.el.classList.toggle("tfBoardHidden", g.has(F.key)));
    const E = S.filter((F) => !g.has(F.key) && getComputedStyle(F.el).display !== "none");
    let H = 0;
    E.filter((F) => Ga.includes(F.key)).forEach((F) => {
      F.el.classList.add("tfBoardItem"), Object.assign(F.el.style, { width: t + "px", height: "", left: "0px", top: H + "px" });
      const Le = F.key === "sums" && F.el.querySelector(".tfDash-bar"), vt = Le ? Le.querySelectorAll(".activityRow").length : 0;
      Le && (Le.style.maxWidth = "none");
      for (let Wt = 1; Le && Wt <= vt && (Le.style.setProperty("--bar-cols", String(Math.ceil(vt / Wt))), !(Le.offsetWidth <= t)); Wt++)
        ;
      Le && (Le.style.maxWidth = ""), H += F.el.offsetHeight + qt;
    }), bn = H;
    const z = E.filter((F) => !Ga.includes(F.key));
    z.forEach((F) => {
      F.cols = Dr(F, n, r), F.el.classList.add("tfBoardItem"), F.el.style.width = (F.cols === n ? t : F.cols * r + (F.cols - 1) * qt) + "px", F.el.style.height = "", F.rows = Ya(F) ?? Math.max(1, Math.ceil((F.el.offsetHeight + qt - 6) / Aa));
    });
    const N = At && z.find((F) => F.key === At.key), U = ls(z, n, N);
    U.forEach((F) => Object.assign(F, { x: F.cols === n ? 0 : F.col * x, y: bn + F.row * Aa, w: F.cols === n ? t : F.cols * r + (F.cols - 1) * qt, h: F.rows * Aa - qt })), z.forEach((F) => {
      const Le = U.get(F.key);
      F.el.style.height = Le.h + "px", F.el.classList.contains("tfDac") && F.el.style.setProperty("--tf-dac-pad", Le.h - kn + "px"), !(F === N && !At.fromTray) && (F.el.style.left = Le.x + "px", F.el.style.top = Le.y + "px");
    }), _a = U;
    const ye = U.get("act"), Ne = ye && _.querySelector(".tfDash-act > .activityRows");
    Ne && (Ne.style.maxHeight = Math.max(go, Math.floor((ye.h - Ne.offsetTop - 10) / go) * go) + "px"), fi = Math.max(0, ...[...U.values()].map((F) => F.row + F.rows));
    let ue = bn + fi * Aa - qt;
    ue = bo(_n, z, U, ue, n, r), _.style.height = ue + "px", requestAnimationFrame(() => f.classList.add("tfBoardReady")), S.forEach((F) => vo.observe(F.el)), fs(), wn();
  }
  const ra = () => {
    Yi || (Yi = !0, requestAnimationFrame(() => {
      Yi = !1, mn();
    }));
  }, vo = new ResizeObserver(() => {
    At || ra();
  });
  function bo(t, n = [], r = /* @__PURE__ */ new Map(), d = 0, p = 1, S = Gi) {
    _.querySelectorAll(".tfEditChips").forEach((z) => {
      (!t || !z.closest(".tfBoardItem")) && z.remove();
    }), _.querySelectorAll(".tfFavHides").forEach((z) => z.remove()), _.querySelectorAll(".tfBoardItem").forEach((z) => [...z.children].forEach((N) => {
      N.classList.contains("tfEditChips") || N.toggleAttribute("inert", t);
    }));
    let g = _.querySelector(".tfBoardCells"), x = _.querySelector(".tfBoardLand");
    if (!t)
      return g == null || g.remove(), x == null || x.remove(), Mn(), d;
    const E = fi + _r;
    if (g || (g = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), g.setAttribute("aria-hidden", "true"), _.prepend(g)), g.style.top = bn + "px", g.dataset.size !== p + "x" + E + "x" + S && (g.dataset.size = p + "x" + E + "x" + S, g.style.gridTemplateColumns = "repeat(" + p + "," + S + "px)", g.innerHTML = "<i></i>".repeat(p * E)), d = Math.max(d, bn + E * Aa - qt), n.forEach((z) => {
      const N = z.el;
      !N || N.querySelector(":scope > .tfEditChips") || N.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + Yl + '</span><button class="tfEditChip" type="button" data-board-more="' + se(z.key) + '" aria-label="' + se(ia(z.key)) + ' options" aria-haspopup="menu">' + Jh + "</button></div>");
    }), At && r.has(At.key)) {
      x || (x = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), _.appendChild(x));
      const z = r.get(At.key);
      Object.assign(x.style, { left: z.x + "px", top: z.y + "px", width: z.w + "px", height: z.h + "px" });
    } else x == null || x.remove();
    const H = _.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (H) {
      const z = H.getBoundingClientRect();
      H.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...H.querySelectorAll('[data-k^="fav:"]')].map((N) => {
        const U = N.getBoundingClientRect(), ye = N.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + se(ye) + '" aria-label="Hide ' + se(De(ye)) + ' from the dashboard" style="left:' + Math.round(U.right - z.left - 42) + "px;top:" + Math.round(U.top - z.top + (U.height - 32) / 2) + 'px">' + Sc + "</button>";
      }).join("") + "</div>");
    }
    return d;
  }
  function wo(t) {
    _n = t, t || (At = null, Dn = !1, Mn()), mn();
  }
  function Fo(t, n) {
    var N, U;
    Mn();
    const r = _a.get(t), { n: d } = Ua(_.clientWidth), p = rn(), S = p.spans[t] ?? 2;
    if (!r) return;
    const g = r.cols >= d, x = (ye, Ne, ue) => '<button type="button" role="menuitem" data-board-act="' + ye + '"' + (ue ? " disabled" : "") + ">" + Ne + "</button>", E = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    E.setAttribute("role", "menu"), E.setAttribute("aria-label", ia(t) + " options");
    const H = _.querySelector('.tfDashTiles > .tfDac[data-k="' + CSS.escape(t) + '"]');
    E.innerHTML = (Ui.includes(t) ? x("size", S === 1 ? "Card size" : "Tile size") : "") + (H ? x("tall", ja(t) ? "Make shorter" : "Make taller") : "") + (t === "energy" ? x("graph", (((N = p.opts.energy) == null ? void 0 : N.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + x("left", "Move left", g || r.col === 0) + x("right", "Move right", g || r.col + r.cols >= d) + x("up", "Move up", r.row <= 0) + x("down", "Move down") + x("hide", "Hide"), _.appendChild(E);
    const z = Math.min(r.x + r.w - E.offsetWidth, _.clientWidth - E.offsetWidth);
    Object.assign(E.style, { left: Math.max(0, z) + "px", top: r.y + 28 + "px" }), Fn = { key: t, menu: E, opener: n }, (U = E.querySelector("button:not([disabled])")) == null || U.focus();
  }
  function Mn(t) {
    if (!Fn) return;
    const { menu: n, opener: r } = Fn;
    Fn = null, n.remove(), t && (r == null || r.focus());
  }
  const gi = () => Object.fromEntries([..._a].map(([t, n]) => [t, { col: n.col, row: n.row }]));
  function hl(t, n) {
    var S, g;
    const r = rn(), d = gi(), p = d[t] || { col: 0, row: 0 };
    n === "size" && (r.spans = { ...r.spans, [t]: (r.spans[t] ?? 2) === 1 ? 2 : 1 }), n === "tall" && (r.opts = { ...r.opts, [t]: { ...r.opts[t] || {}, tall: !ja(t) } }), n === "graph" && (r.opts = { ...r.opts, energy: { ...r.opts.energy || {}, graph: (((S = r.opts.energy) == null ? void 0 : S.graph) || "above") === "above" ? "below" : "above" } }), n === "left" && (d[t] = { ...p, col: p.col - 1 }), n === "right" && (d[t] = { ...p, col: p.col + 1 }), n === "up" && (d[t] = { ...p, row: p.row - 1 }), n === "down" && (d[t] = { ...p, row: p.row + 1 }), n === "hide" && (r.hidden = [.../* @__PURE__ */ new Set([...r.hidden, t])]), ["left", "right", "up", "down"].includes(n) && (At = { key: t, col: d[t].col, row: d[t].row }), Za(r, d), At && (mn(), At = null, Za(rn(), gi())), Mn(), n === "graph" && (hn.delete("dash:energy"), en()), mn(), n !== "hide" && ((g = _.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || g.focus());
  }
  function Oo(t) {
    const n = rn();
    Ho({ ...n, hidden: n.hidden.filter((r) => r !== t) }), mn();
  }
  const Ka = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, Bt = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Bt.setAttribute("aria-label", "Edit the dashboard"), Bt.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd" type="button" data-fav-add aria-expanded="false">Add favourite</button><div class="tfTrayPick" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', f.appendChild(Bt);
  let En = !1, Dn = !1, Cn = null, ba = !1;
  const Ki = {}, vi = (t, n) => {
    if (Ki[t] === n) return;
    Ki[t] = n;
    const r = Bt.querySelector('[data-tray="' + t + '"]');
    r.innerHTML = n, Xt(r);
  }, bi = (t, n) => '<span class="tfTrayName"><span class="activityRowName">' + se(De(t)) + '</span><span class="activityRowMeta">' + se(n) + "</span></span>", wi = (t, n, r) => '<li class="tfTrayFav' + (n ? " off" : "") + '" data-tray-fav="' + se(t) + '"><span class="tfTrayGrip" aria-hidden="true">' + Yl + '</span><span class="tfIcon"' + Ut(t, ea(t)) + "></span>" + bi(t, n ? "Hidden" + (wt.get(t) ? " · " + wt.get(t) : "") : wt.get(t) || Gt(t)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + se(t) + '" aria-pressed="' + !n + '" aria-label="' + (n ? "Show " : "Hide ") + se(De(t)) + ' on the dashboard">' + (n ? Sc : Qh) + "</button>" + (r ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + se(t) + '" aria-label="Remove ' + se(De(t)) + ' from favourites">' + Tc + "</button>" : "<span></span>") + "</li>";
  function Ea(t) {
    const n = new Set(Hn()), r = t.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(b).filter((p) => Ka.test(p) && !n.has(p) && b[p].state !== "unavailable").filter((p) => {
      const S = (De(p) + " " + (wt.get(p) || "") + " " + p).toLowerCase();
      return r.every((g) => S.includes(g));
    }).sort((p, S) => (wt.get(p) || "~").localeCompare(wt.get(S) || "~") || De(p).localeCompare(De(S))).slice(0, 40).map((p) => '<li><button class="tfTrayPickItem" type="button" data-fav-pick="' + se(p) + '"><span class="tfIcon"' + Ut(p, ea(p)) + "></span>" + bi(p, wt.get(p) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  function wn() {
    const t = _n && f.classList.contains("tfBoard");
    if (Bt.classList.toggle("open", t), Bt.classList.toggle("tucked", t && En), Bt.toggleAttribute("inert", !t), t || (ba = !1), Xi(), !t) return;
    const n = Bt.querySelector("[data-tray-tuck]");
    n.innerHTML = En ? gc : Lc, n.setAttribute("aria-expanded", String(!En)), n.setAttribute("aria-label", En ? "Show the edit tray" : "Tuck the edit tray away");
    const r = rn().hidden.filter((g) => mi().some((x) => x.key === g));
    vi("cards", '<div class="sectionLabel">Hidden cards</div>' + (r.length ? '<div class="tfTrayCards">' + r.map((g) => '<button class="tfTrayCard" type="button" data-tray-card="' + se(g) + '" aria-label="' + se(ia(g)) + ': drag it onto the board, or press to put it back"><span class="tfTrayGrip" aria-hidden="true">' + Yl + "</span>" + se(ia(g)) + "</button>").join("") + "</div>" : '<p class="tfTrayNote">Cards you hide wait here.</p>')), vi("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (rn().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + ba + '">' + (ba ? "Hide the phone" : "Show the phone") + "</button>");
    const d = new Set(G.favHidden || []), p = Hn(), S = [...p, ...[...d].filter((g) => !p.includes(g) && b[g])];
    vi("favs", S.map((g) => wi(g, d.has(g), p.includes(g))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Bt.querySelector(".tfTrayPick").hidden = !Dn, Bt.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(Dn)), Dn && vi("pick", Ea(Bt.querySelector("[data-fav-search]").value)), vi("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (Lt() ? " on" : "") + '" type="button" role="switch" aria-checked="' + Lt() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const $a = (t) => {
    G = { ...G, ...t }, Bn(), en(), wn();
  };
  function Nr(t, n) {
    const r = new Set(G.favHidden || []);
    n ? r.delete(t) : r.add(t), $a({ favHidden: [...r] });
  }
  const qo = (t) => $a({ favourites: Hn().filter((n) => n !== t), favHidden: (G.favHidden || []).filter((n) => n !== t) }), Br = (t) => $a({ favourites: [...Hn().filter((n) => n !== t), t], favHidden: (G.favHidden || []).filter((n) => n !== t) });
  Bt.addEventListener("click", (t) => {
    var r;
    const n = t.target.closest("button");
    n && (n.hasAttribute("data-tray-done") ? wo(!1) : n.hasAttribute("data-tray-tuck") ? (En = !En, wn()) : n.hasAttribute("data-phone-toggle") ? (ba = !ba, wn(), ba && ((r = Rn.querySelector("[data-phone-key]")) == null || r.focus({ preventScroll: !0 }))) : n.dataset.trayCard ? t.detail === 0 && (Oo(n.dataset.trayCard), wn()) : n.dataset.favEye ? Nr(n.dataset.favEye, n.getAttribute("aria-pressed") !== "true") : n.dataset.favRemove ? qo(n.dataset.favRemove) : n.hasAttribute("data-fav-add") ? (Dn = !Dn, wn(), Dn && Bt.querySelector("[data-fav-search]").focus({ preventScroll: !0 })) : n.dataset.favPick ? Br(n.dataset.favPick) : n.hasAttribute("data-fav-suggest") && $a({ suggest: !Lt() }));
  }), Bt.addEventListener("input", (t) => {
    t.target.matches("[data-fav-search]") && wn();
  }), Bt.addEventListener("keydown", (t) => {
    t.key !== "Escape" || !Dn || (t.stopPropagation(), Dn = !1, wn(), Bt.querySelector("[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function ds(t, n, r, d) {
    t.preventDefault();
    const p = t.clientX, S = t.clientY;
    let g = null, x = 0;
    const E = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), H = (N) => {
      if (!g) {
        if (Math.hypot(N.clientX - p, N.clientY - S) < 4) return;
        g = n.cloneNode(!0), g.classList.add("tfTrayGhost"), g.style.width = n.offsetWidth + "px", f.appendChild(g);
      }
      g.style.transform = "translate(" + (N.clientX - 24) + "px," + (N.clientY - 24) + "px)";
      const U = !En && N.clientX >= Bt.getBoundingClientRect().left;
      if (r === "card") {
        const ue = _.getBoundingClientRect(), { w: he } = Ua(_.clientWidth);
        At = !U && N.clientX >= ue.left && N.clientX <= ue.right && N.clientY >= ue.top + bn ? { key: d, col: Math.max(0, Math.floor((N.clientX - ue.left) / (he + qt))), row: Math.max(0, Math.floor((N.clientY - ue.top - bn) / Aa)), fromTray: !0 } : null, x || (x = requestAnimationFrame(() => {
          x = 0, mn();
        }));
        return;
      }
      const ye = _.querySelector(".tfDash-favs"), Ne = ye == null ? void 0 : ye.getBoundingClientRect();
      if (Cn = null, Ne && !U && N.clientX >= Ne.left && N.clientX <= Ne.right && N.clientY >= Ne.top && N.clientY <= Ne.bottom) {
        let ue = 1 / 0;
        ye.querySelectorAll('[data-k^="fav:"]').forEach((he, F) => {
          const Le = he.getBoundingClientRect(), vt = Math.hypot(N.clientX - (Le.left + Le.width / 2), N.clientY - (Le.top + Le.height / 2));
          vt < ue && (ue = vt, Cn = { i: F, r: Le, after: N.clientX > Le.left + Le.width / 2 });
        }), Cn || (Cn = { i: 0, r: null, after: !1 });
      }
      Cn != null && Cn.r ? (E.isConnected || f.appendChild(E), Object.assign(E.style, { left: (Cn.after ? Cn.r.right : Cn.r.left) - 2 + "px", top: Cn.r.top + 8 + "px", height: Cn.r.height - 16 + "px" })) : E.remove();
    }, z = () => {
      if (window.removeEventListener("pointermove", H), window.removeEventListener("pointerup", z), window.removeEventListener("pointercancel", z), cancelAnimationFrame(x), g == null || g.remove(), E.remove(), r === "card") {
        if (!g) Oo(d);
        else if (At != null && At.fromTray) {
          mn();
          const ue = rn(), he = gi();
          At = null, Za({ ...ue, hidden: ue.hidden.filter((F) => F !== d) }, he);
        }
        At = null, mn(), en(), wn();
        return;
      }
      if (!Cn) return;
      const N = new Set(G.favHidden || []);
      N.delete(d);
      const U = Hn().filter((ue) => ue !== d), ye = U.filter((ue) => !N.has(ue)), Ne = ye[Math.min(Cn.i + (Cn.after ? 1 : 0), ye.length)];
      U.splice(Ne ? U.indexOf(Ne) : U.length, 0, d), Cn = null, $a({ favourites: U, favHidden: [...N] });
    };
    window.addEventListener("pointermove", H), window.addEventListener("pointerup", z), window.addEventListener("pointercancel", z);
  }
  const cs = { sums: 201, wx: 286, favs: 363, areas: 323, act: 363, energy: 301, avg: 182 }, us = 140, $i = 252, On = 0.8, qn = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line" }, Rn = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  Rn.setAttribute("aria-label", "Phone order"), Rn.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + Tc + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', f.appendChild(Rn);
  let Pr = "";
  function Xi() {
    var x;
    const t = ba && _n && f.classList.contains("tfBoard") && !En;
    if (Rn.classList.toggle("open", t), Rn.toggleAttribute("inert", !t), !t) return;
    const n = Rr().filter((E) => !rn().hidden.includes(E.key)), r = n.length, d = (E) => Math.round(E * On * 10) / 10 + "px", p = (E, H) => {
      const z = E.el.classList.contains("tfDac"), N = E.tile ? z ? $i : us : cs[E.key] || us;
      return '<button class="tfPhoneBlock' + (E.tile ? " tile" : "") + '" type="button" data-phone-key="' + se(E.key) + '" style="min-height:' + d(N) + '" aria-label="' + se(ia(E.key) + ", " + (H + 1) + " of " + r + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (E.tile ? Ut(E.key, ea(E.key)) : Ut(E.key, qn[E.key])) + '></span><span class="tfPhoneName">' + se(ia(E.key)) + "</span></button>";
    }, S = '<div class="tfPhoneTitle">' + se(((x = _.querySelector(".tfDashTitle")) == null ? void 0 : x.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + d(cs.sums) + '"><span class="tfPhoneName">' + se(ia("sums")) + "</span></div>" + n.map(p).join("");
    if (Rn.querySelector('[data-phone="note"]').innerHTML = rn().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", S === Pr) return;
    Pr = S;
    const g = Rn.querySelector('[data-phone="list"]');
    g.innerHTML = S, Xt(g);
  }
  function Ji(t, n) {
    var r;
    Ho({ ...rn(), phone: t }), wn(), n && ((r = Rn.querySelector('[data-phone-key="' + CSS.escape(n) + '"]')) == null || r.focus({ preventScroll: !0 }));
  }
  const Wo = () => [...Rn.querySelectorAll("[data-phone-key]")].map((t) => t.dataset.phoneKey);
  function ps(t, n) {
    t.preventDefault();
    const r = n.parentElement, d = Rn.querySelector(".tfPhoneScreen"), p = Wo().join();
    n.classList.add("moving");
    const S = (x) => {
      const E = d.getBoundingClientRect();
      x.clientY > E.bottom - 40 ? d.scrollTop += 12 : x.clientY < E.top + 40 && (d.scrollTop -= 12);
      const H = [...r.querySelectorAll("[data-phone-key]")].find((U) => {
        const ye = U.getBoundingClientRect();
        return U !== n && x.clientX >= ye.left && x.clientX <= ye.right && x.clientY >= ye.top && x.clientY <= ye.bottom;
      });
      if (!H) return;
      const z = H.getBoundingClientRect(), N = H.classList.contains("tile") ? x.clientX < z.left + z.width / 2 : x.clientY < z.top + z.height / 2;
      r.insertBefore(n, N ? H : H.nextSibling);
    }, g = () => {
      window.removeEventListener("pointermove", S), window.removeEventListener("pointerup", g), window.removeEventListener("pointercancel", g), n.classList.remove("moving");
      const x = Wo();
      Pr = "", x.join() !== p ? Ji(x) : Xi();
    };
    window.addEventListener("pointermove", S), window.addEventListener("pointerup", g), window.addEventListener("pointercancel", g);
  }
  Rn.addEventListener("pointerdown", (t) => {
    const n = t.target.closest("[data-phone-key]");
    n && t.button <= 0 && ps(t, n);
  }), Rn.addEventListener("click", (t) => {
    var r;
    const n = t.target.closest("button");
    if (n != null && n.hasAttribute("data-phone-close"))
      ba = !1, wn(), (r = Bt.querySelector("[data-phone-toggle]")) == null || r.focus({ preventScroll: !0 });
    else if (n != null && n.hasAttribute("data-phone-reset")) {
      const { phone: d, ...p } = rn();
      Ho(p), wn();
    }
  }), Rn.addEventListener("keydown", (t) => {
    var g, x, E, H;
    if (t.key === "Escape") {
      t.stopPropagation(), ba = !1, wn(), (g = Bt.querySelector("[data-phone-toggle]")) == null || g.focus({ preventScroll: !0 });
      return;
    }
    const n = (H = (E = (x = t.target).closest) == null ? void 0 : E.call(x, "[data-phone-key]")) == null ? void 0 : H.dataset.phoneKey, r = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[t.key];
    if (!n || !r) return;
    t.preventDefault();
    const d = Wo(), p = d.indexOf(n), S = p + r;
    S < 0 || S >= d.length || ([d[p], d[S]] = [d[S], d[p]], Ji(d, n));
  });
  function hs(t, n) {
    t.preventDefault();
    const r = n.parentElement;
    n.classList.add("moving");
    const d = (S) => {
      const g = [...r.children].find((x) => {
        const E = x.getBoundingClientRect();
        return x !== n && S.clientY >= E.top && S.clientY <= E.bottom;
      });
      if (g) {
        const x = g.getBoundingClientRect();
        r.insertBefore(n, S.clientY < x.top + x.height / 2 ? g : g.nextSibling);
      }
    }, p = () => {
      window.removeEventListener("pointermove", d), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p), n.classList.remove("moving");
      const S = new Set(Hn());
      Ki.favs = null, $a({ favourites: [...r.children].map((g) => g.dataset.trayFav).filter((g) => S.has(g)) });
    };
    window.addEventListener("pointermove", d), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  }
  Bt.addEventListener("pointerdown", (t) => {
    if (t.button > 0) return;
    const n = t.target.closest("[data-tray-card]"), r = t.target.closest(".tfTrayFav");
    n ? ds(t, n, "card", n.dataset.trayCard) : r && t.target.closest(".tfTrayGrip") ? hs(t, r) : r != null && r.classList.contains("off") && !t.target.closest("button") && ds(t, r, "fav", r.dataset.trayFav);
  });
  function fl(t) {
    if (!_n || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const n = t.target.closest(".tfBoardItem"), r = n && mi().find((N) => N.el === n);
    if (!r || Ga.includes(r.key)) return;
    const d = _a.get(r.key), { w: p } = Ua(_.clientWidth);
    if (!d) return;
    t.preventDefault(), Mn();
    const S = t.clientX, g = t.clientY;
    let x = !1, E = 0;
    const H = (N) => {
      const U = N.clientX - S, ye = N.clientY - g;
      if (!x) {
        if (Math.hypot(U, ye) < 4) return;
        x = !0, At = { key: r.key, col: d.col, row: d.row }, n.classList.add("tfDragging");
      }
      n.style.transform = "translate(" + U + "px," + ye + "px)", At.col = Math.round((d.x + U) / (p + qt)), At.row = Math.round((d.y + ye - bn) / Aa), E || (E = requestAnimationFrame(() => {
        E = 0, mn();
      }));
    }, z = () => {
      window.removeEventListener("pointermove", H), window.removeEventListener("pointerup", z), window.removeEventListener("pointercancel", z), x && (cancelAnimationFrame(E), mn(), n.classList.remove("tfDragging"), n.style.transform = "", At = null, Za(rn(), gi()), mn(), en());
    };
    window.addEventListener("pointermove", H), window.addEventListener("pointerup", z), window.addEventListener("pointercancel", z);
  }
  function fs(t = !1) {
    const n = _ == null ? void 0 : _.querySelector(".tfDashGraph svg[data-graph]");
    if (!(n != null && n.clientWidth)) return;
    const r = n.dataset.graph + "@" + n.clientWidth + "x" + n.clientHeight;
    n.dataset.drawn !== r && (n.dataset.drawn = r, Da(n.dataset.graph, n).then(() => {
      t && zi(n);
    }));
  }
  function Ir() {
    var x, E, H;
    Xe = Di.model(o()), Fi(), b = Xe.states, b[(x = G.sources) == null ? void 0 : x.grid] && (Xe.grid = G.sources.grid), b[(E = G.sources) == null ? void 0 : E.alarm] && (Xe.security.alarms = [G.sources.alarm]), M.forEach((z, N) => {
      const U = b[N], ye = (U == null ? void 0 : U.attributes) || {};
      if (!U || Date.now() - z.at > 2 * 60 * 1e3) {
        M.delete(N);
        return;
      }
      z.pos != null && U.state !== "opening" && U.state !== "closing" && Math.abs(_t(N) - z.pos) < 1 && delete z.pos, z.tilt != null && Math.abs((ye.current_tilt_position ?? -1) - z.tilt) < 1 && delete z.tilt, z.pos == null && z.tilt == null && M.delete(N);
    });
    const t = [];
    let n = 0;
    const r = Cr();
    aa = r.filter((z) => z.room).map((z) => z.room), aa.some((z) => z.id === ge) || (ge = ((H = aa[0]) == null ? void 0 : H.id) || null);
    const d = Te === "weather" ? { key: "weather", name: "Weather" } : Te && r.find((z) => z.key === Te);
    if (d || (Te = null), f.classList.toggle("tfAreaOpen", !!d), f.classList.toggle("tfWeatherOpen", (d == null ? void 0 : d.key) === "weather"), f.classList.toggle("tfDash", !d), wt = /* @__PURE__ */ new Map(), Xe.rooms.forEach((z) => [...z.actions, ...z.plugs, ...z.readings, ...z.openings, ...z.solar, ...z.plants.flatMap((N) => [N.id, ...N.readings])].forEach((N) => wt.set(N, z.name))), !d) return cl(t, ho());
    if (t.push({ key: "areahead", html: xo(d, ++n) }), d.key === "weather")
      return t.weather = ++n, t;
    const p = d.ids, S = d.room ? d.room.id : d.key, g = d.room;
    return g != null && g.solar.length && t.push({ key: "energy:" + g.id, html: K(g, ++n) }), g && (g.readings.length || g.plugs.length || g.power != null) && t.push({ key: "readings:" + g.id, html: B(g, ++n) }), g == null || g.plants.forEach((z) => t.push({ key: "plant:" + z.id, html: pe(z, ++n) })), p.length && t.push({ key: "block:" + S, order: ++n, tiles: p.map((z) => ({ key: z, html: Zt(z) })) }), t;
  }
  const xo = (t, n) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + n + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + gc + '</button><div class="settingsTitle">' + se(t.name) + "</div></div>";
  let ua = 0, Qi = null;
  const Vo = (t) => t === "weather" ? fn.wx : _.querySelector(".tfAreas");
  function ms(t) {
    var n, r;
    Te || (ua = Wn().scrollTop, Qi = ((n = Vo(t)) == null ? void 0 : n.getBoundingClientRect().top) ?? null), Te = t, t.startsWith("room:") && (ge = t.slice(5)), Xa(), Wn().scrollTop = 0, (r = _.querySelector("[data-area-back]")) == null || r.focus({ preventScroll: !0 });
  }
  let zo = null;
  function ml(t, n) {
    if (zo == null || zo(), n == null) return;
    const r = Wn(), d = performance.now() + 1500, p = ["wheel", "touchstart", "pointerdown", "keydown"];
    let S = 0;
    const g = () => {
      cancelAnimationFrame(S), p.forEach((E) => window.removeEventListener(E, g, !0)), zo = null;
    }, x = () => {
      const E = t();
      if (E != null && E.isConnected) {
        const H = E.getBoundingClientRect().top - n;
        Math.abs(H) > 0.5 && (r.scrollTop += H);
      }
      performance.now() < d ? S = requestAnimationFrame(x) : g();
    };
    p.forEach((E) => window.addEventListener(E, g, { capture: !0, passive: !0 })), zo = g, x();
  }
  function xi() {
    var r;
    const t = Te;
    Te = null, Xa(), Wn().scrollTop = ua, ml(() => Vo(t), Qi);
    const n = t.startsWith("room:") ? _.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? fn.wx.querySelector(".wbOpenPage") : _.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (r = (n == null ? void 0 : n.querySelector("[data-go]")) || n) == null || r.focus({ preventScroll: !0 });
  }
  const gl = (t) => t.wrap ? t.wrap(t.tiles.map((n) => n.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + se(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((n) => n.html).join("") + "</div></div>", er = (t) => t.map((n) => n.key + (n.tiles ? "(" + n.tiles.map((r) => r.key).join(",") + ")" : "")).join(";");
  function Wn() {
    for (let t = f.parentElement || f.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const n = getComputedStyle(t).overflowY;
      if ((n === "auto" || n === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function gs(t) {
    const n = Wn(), r = (x) => {
      const E = x.getBoundingClientRect();
      return E.height && E.bottom > 0 && E.top < window.innerHeight;
    }, d = [..._.children, ..._.querySelectorAll(".tfDashTiles > *")].find((x) => !x.matches(".tfDashTiles") && r(x)), p = d == null ? void 0 : d.dataset.k, S = d == null ? void 0 : d.getBoundingClientRect().top;
    t();
    const g = d != null && d.isConnected ? d : p && _.querySelector('[data-k="' + CSS.escape(p) + '"]');
    g != null && g.isConnected && S != null && (n.scrollTop += g.getBoundingClientRect().top - S);
  }
  function Xa() {
    if (!v || !_) return;
    const t = Ir();
    _.querySelectorAll("[data-tf]").forEach((r) => r.remove()), hn.clear();
    const n = document.createElement("div");
    n.innerHTML = t.map((r) => r.tiles ? gl(r) : r.html).join(""), t.forEach((r) => r.tiles ? r.tiles.forEach((d) => hn.set(d.key, d.html)) : hn.set(r.key, r.html)), yn = er(t), _.append(...n.children), Ri(t.weather), Ni(), vo.disconnect(), mn(), Xt(_), Vr(_), Jt(_), Y(), V && Da(V.id), Ra(), ki(), Yo(), requestAnimationFrame(j);
  }
  const Hr = (t) => {
    var r;
    const n = a.activeElement && t.contains(a.activeElement) ? a.activeElement : null;
    return n && { label: n.getAttribute("aria-label"), act: (r = n.dataset) == null ? void 0 : r.act };
  }, Ja = (t, n) => {
    var r;
    n && ((r = n.label && t.querySelector('[aria-label="' + CSS.escape(n.label) + '"]') || n.act && t.querySelector('[data-act="' + CSS.escape(n.act) + '"]')) == null || r.focus({ preventScroll: !0 }));
  };
  function vl(t, n) {
    const r = document.createElement("div");
    r.innerHTML = n;
    const d = r.firstElementChild, p = Hr(t);
    t.replaceWith(d), Xt(d), Vr(d), Jt(d), Ja(d, p);
  }
  function en() {
    !v || !_ || At || gs(bl);
  }
  function bl() {
    if (!_.querySelector("[data-tf]")) {
      Xa();
      return;
    }
    const t = Ir();
    if (er(t) !== yn) {
      Xa();
      return;
    }
    const n = (r) => [...Oe.keys()].some((d) => {
      const p = d.slice(d.indexOf("|") + 1);
      return r === p || r.endsWith(":" + p);
    });
    t.forEach((r) => (r.tiles || [r]).forEach((d) => {
      if (hn.get(d.key) === d.html || n(d.key)) return;
      const p = _.querySelector('[data-k="' + CSS.escape(d.key) + '"]');
      if (p) {
        if (hn.set(d.key, d.html), V && V.key === d.key && p.querySelector(".tfOpen")) {
          p.querySelector(".tfOpen .activityRowMeta").textContent = so(V.id);
          return;
        }
        vl(p, d.html), V && V.key === d.key && Da(V.id), d.key.startsWith("energy:") && Ra();
      }
    })), ki(), Yo(), An(), Y(), Ue == null || Ue.update(), tt == null || tt.forEach((r) => r.update()), f.classList.contains("tfDash") && ra(), requestAnimationFrame(j);
  }
  const tr = {
    light: (t) => [["Brightness", t.brightness != null ? Math.round(t.brightness / 2.55) + "%" : null], ["Colour temperature", t.color_temp_kelvin ? Number(t.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", t.color_mode && mt(t.color_mode)]],
    climate: (t) => [["Current temperature", Ie(t.current_temperature) + " °C"], ["Target", Ie(t.temperature) + " °C"], ["Action", mt(t.hvac_action)]],
    cover: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null], ["Tilt", t.current_tilt_position != null ? t.current_tilt_position + "% open" : null]],
    humidifier: (t) => [["Current humidity", t.current_humidity + "%"], ["Target", t.humidity + "%"], ["Mode", mt(t.mode)]],
    media_player: (t) => [["Title", t.media_title], ["Artist", t.media_artist], ["Volume", t.volume_level != null ? Math.round(t.volume_level * 100) + "%" : null], ["Source", t.source]],
    vacuum: (t) => [["Battery", t.battery_level + "%"], ["Fan speed", mt(t.fan_speed)], ["Rooms", (t.rooms || []).join(", ") || null]],
    lock: (t) => [["Changed by", t.changed_by]],
    alarm_control_panel: (t) => [["Changed by", t.changed_by]],
    valve: () => [],
    plant: (t) => [["Moisture", t.moisture + "%"], ["Light", Number(t.brightness).toLocaleString() + " lx"], ["Temperature", Ie(t.temperature) + " °C"], ["Fertility", t.conductivity + " µS/cm"], ["Problems", t.problem === "none" ? "None" : mt(t.problem)]],
    weather: (t) => [["Temperature", t.temperature != null ? t.temperature + " " + (t.temperature_unit || "°C") : null], ["Humidity", t.humidity != null ? t.humidity + "%" : null], ["Wind", t.wind_speed != null ? t.wind_speed + " " + (t.wind_speed_unit || "km/h") : null], ["Pressure", t.pressure != null ? t.pressure + " " + (t.pressure_unit || "hPa") : null]]
  }, jo = (t) => {
    var r;
    const n = (((r = tr[t.split(".")[0]]) == null ? void 0 : r.call(tr, ft(t))) || []).filter(([, d]) => d != null && d !== "");
    return n.length ? '<div class="tfMoreRows">' + n.map(([d, p]) => '<div class="tfMoreRow"><span>' + se(d) + "</span><span>" + se(p) + "</span></div>").join("") + "</div>" : "";
  }, Go = (t) => Ai(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function Dt(t, n = {}, r = !1) {
    return '<div class="tfMoreList">' + t.map((d) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + se(d.name) + '</div><div class="tfMoreTiles' + (r ? " single" : "") + '">' + d.ids.map((p) => Oi(p, n)).join("") + "</div></div>").join("") + "</div>";
  }
  const Je = document.createElement("div");
  Je.className = "tfMoreBackdrop", Je.hidden = !0, f.appendChild(Je);
  const yi = (t, n) => {
    for (let r = t; r && r !== Je; r = r.parentElement) {
      const d = getComputedStyle(r).overflowY;
      if ((d === "auto" || d === "scroll") && r.scrollHeight > r.clientHeight + 1 && (n < 0 ? r.scrollTop > 0 : r.scrollTop + r.clientHeight < r.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let yo = null;
  Je.addEventListener("touchstart", (t) => {
    yo = { x: t.touches[0].clientX, y: t.touches[0].clientY };
  }, { passive: !0 }), Je.addEventListener("touchmove", (t) => {
    var p, S;
    if (!yo || t.touches.length > 1 || (S = (p = t.target).closest) != null && S.call(p, "input,textarea,select")) return;
    const n = t.touches[0], r = yo.x - n.clientX, d = yo.y - n.clientY;
    yo = { x: n.clientX, y: n.clientY }, Math.abs(d) >= Math.abs(r) && !yi(t.target, d) && t.preventDefault();
  }, { passive: !1 }), Je.addEventListener("wheel", (t) => {
    yi(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  function gn() {
    const t = Je.querySelector(".tfMorePair"), n = Je.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - n.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", gn, { passive: !0 }), v && Mt();
  let wa = [];
  const Fr = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function vs(t) {
    const n = (E, H = "") => '<div class="tfMoreHead">' + (w != null && w.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + Gl + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + se(E) + "</div>" + H + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + qh + "</button></div>", r = (E, H) => '<div class="tfMoreNow"><div class="tfMoreState">' + se(E) + "</div>" + (H ? '<div class="tfMoreSub">' + se(H) + "</div>" : "") + "</div>", d = Dt;
    if (t === "favourites") {
      const E = Hn(), H = new Set(E), z = [{ name: "Starred", ids: E }, { name: "Home", ids: Xe.homeVacuums }, { name: "Security", ids: [...Xe.security.alarms, ...Xe.security.locks] }, ...Xe.rooms.map((N) => ({ name: N.name, ids: [...N.actions, ...N.plugs] }))].map((N, U) => U ? { ...N, ids: N.ids.filter((ye) => !H.has(ye)) } : N).filter((N) => N.ids.length);
      return [n("Favourites"), r(E.length ? E.length + " starred" : "None starred"), d(z, { star: !0 }, !0)];
    }
    const p = (E, { name: H = "", alert: z = !1, plain: N = !1 } = {}) => {
      const U = N ? [] : E.filter((ue) => $l.includes(ue.split(".")[0])), ye = E.filter((ue) => !U.includes(ue)), Ne = (ue) => ue.startsWith("vacuum.") && ft(ue).battery_level != null ? ft(ue).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (H ? '<div class="tfMoreGroupName">' + se(H) + "</div>" : "") + '<div class="tfMoreActions">' + U.map((ue) => Zt(ue, !0)).join("") + ye.map((ue) => Oi(ue, { plain: N, alert: z, say: N ? Ne(ue) : null })).join("") + "</div></div>";
    };
    if (t.startsWith("summary:")) {
      const E = ho().find((U) => U.key === t.slice(8));
      if (!E) return null;
      const H = E.key === "light" ? (E.groups || []).flatMap((U) => U.ids) : [], z = H.some((U) => {
        var ye;
        return ((ye = b[U]) == null ? void 0 : ye.state) === "on";
      }), N = H.length ? '<button class="primary" type="button" data-acts="' + da(H.map((U) => ["light", z ? "turn_off" : "turn_on", U])) + '">' + (z ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [n(E.name), '<div class="tfMoreNowRow">' + r(E.value) + N + "</div>", ...(E.groups || []).map((U) => p(U.ids, { name: U.name === E.name ? "" : U.name, alert: U.alert, plain: E.plain }))];
    }
    if (t.startsWith("group:")) {
      const [, E, H] = t.split(":"), z = Xe.rooms.find((ye) => ye.id === E), N = z && si(z).find((ye) => ye.key === H);
      if (!N) return null;
      const U = N.acts ? '<button class="primary" type="button" data-acts="' + da(N.acts) + '">' + (N.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [n(z.name + " " + N.label.toLowerCase()), '<div class="tfMoreNowRow">' + r(N.value) + U + "</div>", p(br(z, H))];
    }
    const S = t.split(".")[0], g = b[t], x = $l.includes(S) ? Pi(t) : { sections: [] };
    return [
      n(De(t)),
      r(Gt(t), g.last_changed && io(Date.parse(g.last_changed))),
      S === "cover" && '<div data-cover-art="' + se(t) + '"></div>',
      ...x.sections.filter(Boolean),
      Or(t) && '<button class="tfDetailsBtn" type="button" data-details aria-expanded="' + !!(w != null && w.details) + '" aria-controls="tfMoreSide"><span>Details</span>' + Lc + "</button>"
    ].filter(Boolean);
  }
  const Or = (t) => Fr(t) ? "" : jo(t) + Go(t);
  let qr = "";
  function Wr(t) {
    var n;
    w && (w.details = t, ki(), (n = Je.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || n.focus({ preventScroll: !0 }));
  }
  const nr = (t) => {
    const n = b[t], r = _t(t), d = Qn(t);
    return { kind: jl(n), name: De(t), text: Gt(t), pos: r, target: Math.abs(d - r) > 0.5 ? d : null, moving: n.state === "opening" || n.state === "closing", tilt: ro(t) ?? 100, canSet: st(t, yc) };
  };
  function Vr(t) {
    t.querySelectorAll("[data-cover-art]").forEach((n) => {
      const r = n.dataset.coverArt, d = n.dataset.artKey || "more:" + r;
      let p = R.get(d);
      p || (p = Oh({ onMove: (S) => Ci(r, S), onSet: (S) => {
        Ci(r, S), To("pos", r);
      } }), p.coverId = r, R.set(d, p)), n.replaceWith(p.el), p.update(nr(r));
    });
  }
  const zr = (t) => [...R.values()].filter((n) => n.coverId === t), Uo = () => R.forEach((t) => {
    b[t.coverId] && t.update(nr(t.coverId));
  }), Yo = () => {
    R.forEach((t, n) => {
      t.el.isConnected || (t.destroy(), R.delete(n));
    }), Uo();
  };
  function ki() {
    var S, g;
    if (!w || !(Fr(w.id) || b[w.id])) {
      Je.hidden = !0;
      return;
    }
    if ([...Oe.keys()].some((x) => x.endsWith("|" + w.id))) {
      Uo();
      return;
    }
    const t = vs(w.id), n = Je.querySelector(".tfMore");
    if (!t) {
      or();
      return;
    }
    const r = Hr(Je), d = Or(w.id), p = w.frame ? w.frame.wide : w.id.startsWith("summary:") || w.id.startsWith("group:");
    if (Je.hidden || !n || t.length !== wa.length || n.classList.contains("wide") !== p) {
      const x = ar ? w.scroll || 0 : !Je.hidden && n ? n.scrollTop : 0;
      Je.innerHTML = '<div class="tfMorePair' + (Je.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (p ? " wide" : "") + '"' + (w.frame ? ' style="height:' + w.frame.h + 'px"' : "") + ">" + t.join("") + "</section>" + (d ? '<aside class="tfMoreSide" id="tfMoreSide" aria-label="Details"><div class="tfMoreSideInner"><div class="tfMoreHead"><button class="tfBack" type="button" data-details-close aria-label="Back">' + Gl + '</button><div class="activityTitle">Details</div></div><div class="tfMoreSideBody">' + d + "</div></div></aside>" : "") + "</div>", qr = d, Je.classList.toggle("wide", p), Je.hidden = !1, gn(), Vr(Je), Jt(Je), Xt(Je), x && (Je.querySelector(".tfMore").scrollTop = x), Ja(Je, r), Je.contains(a.activeElement) || (S = Je.querySelector("[data-more-close]")) == null || S.focus({ preventScroll: !0 });
    } else {
      if (t.forEach((x, E) => {
        var N, U;
        if (x === wa[E] || x.includes("data-cover-art") || n.children[E].contains((U = (N = a.activeElement) == null ? void 0 : N.matches) != null && U.call(N, "input,select") ? a.activeElement : null) || [...Oe.keys()].some((ye) => n.children[E].querySelector('[data-drag="' + CSS.escape(ye) + '"]'))) return;
        const H = document.createElement("div");
        H.innerHTML = x;
        const z = H.firstElementChild;
        n.children[E].replaceWith(z), Xt(z), Jt(z);
      }), d !== qr) {
        const x = Je.querySelector(".tfMoreSideBody");
        x && (x.innerHTML = d), qr = d;
      }
      Je.contains(a.activeElement) || Ja(Je, r);
    }
    (g = Je.querySelector(".tfMorePair")) == null || g.classList.toggle("details", !!(w.details && d)), wa = t, Uo();
  }
  setInterval(() => {
    w && ki();
  }, 15 * 1e3);
  function Mi(t, n) {
    const r = !!(w && n && Je.contains(n)), d = r && Je.querySelector(".tfMore");
    r && (w.scroll = d.scrollTop), w = { id: t, opener: r ? w.opener : n, back: r ? w : null, frame: r ? w.frame || { wide: d.classList.contains("wide"), h: d.offsetHeight } : null }, bs();
  }
  let ar = !1;
  function bs() {
    wa = [], ar = !Je.hidden, R.forEach((t, n) => {
      n !== w.id && Je.contains(t.el) && (t.destroy(), R.delete(n));
    }), ki(), ar = !1;
  }
  function or() {
    var r, d, p, S, g, x;
    const t = w == null ? void 0 : w.opener;
    w = null, R.forEach((E, H) => {
      Je.contains(E.el) && (E.destroy(), R.delete(H));
    }), on.forEach((E, H) => {
      H.startsWith("more:") && on.delete(H);
    }), Je.hidden = !0, Je.innerHTML = "";
    const n = { preventScroll: !0 };
    t != null && t.isConnected ? t.focus(n) : (r = t == null ? void 0 : t.dataset) != null && r.more ? (d = _.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || d.focus(n) : (p = t == null ? void 0 : t.dataset) != null && p.summary ? (S = _.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || S.focus(n) : (g = t == null ? void 0 : t.hasAttribute) != null && g.call(t, "data-favs-edit") && ((x = _.querySelector("[data-favs-edit]")) == null || x.focus(n));
  }
  function ws(t, n, r, d = {}) {
    const p = n.map((he) => he[1]), S = d.zero ? 0 : Math.min(...p), g = Math.max(...p), x = Math.max(120, t.clientWidth || 260), E = Math.max(60, t.clientHeight || 130), H = 8, z = E - 20, N = Date.now() - 24 * 3600 * 1e3, U = 24 * 3600 * 1e3, ye = (he) => Math.max(0, Math.min(x, (he - N) / U * x)), Ne = (he) => g === S ? (H + z) / 2 : z - (he - S) / (g - S) * (z - H);
    let ue = "M" + ye(n[0][0]).toFixed(1) + " " + Ne(n[0][1]).toFixed(1);
    for (let he = 1; he < n.length; he++) ue += d.smooth ? "L" + ye(n[he][0]).toFixed(1) + " " + Ne(n[he][1]).toFixed(1) : "H" + ye(n[he][0]).toFixed(1) + "V" + Ne(n[he][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + x + " " + E), t.setAttribute("aria-label", r), t.innerHTML = '<path d="' + ue + "V" + z + "H" + ye(n[0][0]).toFixed(1) + 'Z" fill="' + (d.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + ue + '" fill="none" stroke="' + (d.colour || "var(--primary)") + '" stroke-width="2" stroke-linejoin="round"/><text x="0" y="' + (E - 4) + '">24 h ago</text><text x="' + x + '" y="' + (E - 4) + '" text-anchor="end">Now</text>';
  }
  function Zo(t) {
    var d;
    const n = Number((d = b[t]) == null ? void 0 : d.state), r = Date.now();
    if (ft(t).state_class === "total_increasing") {
      const p = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), S = Math.max(1, r - p);
      return [...Array(49)].map((g, x) => p + S * x / 48).map((g) => [g, Math.round(n * Math.pow((g - p) / S, 1.3) * 100) / 100]);
    }
    return [...Array(48)].map((p, S) => [r - (48 - S) * 30 * 60 * 1e3, Math.round(n * (0.96 + 0.04 * Math.sin(S / 6)) * 10) / 10]);
  }
  async function Da(t, n) {
    var ye, Ne;
    let r = be.get(t);
    if (t.endsWith("_solar_power")) r = { at: Date.now(), points: jd() };
    else if (Ai(t)) r = { at: Date.now(), points: Zo(t) };
    else if (!r || Date.now() - r.at > 5 * 60 * 1e3) {
      try {
        const ue = new Date(Date.now() - 864e5).toISOString(), he = await P({ type: "history/history_during_period", start_time: ue, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), F = ((he == null ? void 0 : he[t]) || []).map((Le) => [Le.lu != null ? Le.lu * 1e3 : Date.parse(Le.last_updated || Le.last_changed), Number(Le.s ?? Le.state)]).filter(([Le, vt]) => Number.isFinite(Le) && Number.isFinite(vt));
        r = { at: Date.now(), points: F };
      } catch {
        r = { at: Date.now(), points: [] };
      }
      be.set(t, r);
    }
    const d = n || _.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!d) return;
    const p = b[t], S = ((ye = p == null ? void 0 : p.attributes) == null ? void 0 : ye.unit_of_measurement) || "", g = r.points.slice(), x = Number(p == null ? void 0 : p.state);
    if (Number.isFinite(x) && !t.endsWith("_solar_power") && g.push([Date.now(), x]), g.length < 2) {
      d.setAttribute("aria-label", De(t) + ": no history for the last 24 hours"), d.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const E = g.map((ue) => ue[1]), H = Math.min(...E), z = Math.max(...E), N = (ue) => ue.toLocaleString(void 0, { maximumFractionDigits: Math.abs(ue) >= 100 ? 0 : 1 }), U = ((Ne = p == null ? void 0 : p.attributes) == null ? void 0 : Ne.state_class) === "total_increasing";
    ws(d, g, De(t) + ", last 24 hours: " + (U ? "+" + N(E[E.length - 1] - E[0]) : H === z ? N(H) : N(H) + " to " + N(z)) + (S ? " " + S : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power") });
  }
  function Ra() {
    const t = _ == null ? void 0 : _.querySelector("[data-solar]");
    if (!t) return;
    const n = jd();
    ws(t, n, "Solar, last 24 hours: up to " + Ie(Math.max(...n.map((r) => r[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function xs(t, n) {
    const r = n.entity_id, d = M.get(r) || {}, p = { open_cover: 100, close_cover: 0, set_cover_position: n.position, toggle: _t(r) > 0 ? 0 : 100 }[t], S = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: n.tilt_position }[t];
    p != null && (d.pos = p), S != null && (d.tilt = S), t === "stop_cover" && (delete d.pos, delete d.tilt), t === "stop_cover_tilt" && delete d.tilt, d.at = Date.now(), M.set(r, d);
  }
  function ko(t, n, r) {
    var p;
    const d = r == null ? void 0 : r.entity_id;
    return t !== "light" || typeof d != "string" || !ve[d] || !In(d) || r.brightness_pct != null || r.brightness != null ? [n, r] : n !== "turn_on" && !(n === "toggle" && ((p = b[d]) == null ? void 0 : p.state) !== "on") ? [n, r] : ["turn_on", { ...r, brightness_pct: ve[d] }];
  }
  function ir(t, n, r, d) {
    let p = { entity_id: r, ...d || {} };
    return [n, p] = ko(t, n, p), t === "cover" && xs(n, p), et[r] = (et[r] || 0) + 1, ti.set(Mc, JSON.stringify(et)), Di.call(t, n, p) ? Promise.resolve() : Promise.resolve(ie(t, n, p));
  }
  function Ko(t) {
    const [n, r, d, p] = t.split("|");
    ir(n, r, d, p ? JSON.parse(p) : null).catch(() => {
    });
  }
  function Ci(t, n) {
    Oe.set("pos|" + t, n), hn.delete(t), wa = wa.map(() => ""), [_, Je].forEach((d) => d.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((p) => Be(p, n)));
    const r = _.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (r && (r.textContent = Math.round(n) + "%"), (w == null ? void 0 : w.id) === t) {
      const d = Je.querySelector(".tfMoreState"), p = Je.querySelector(".tfMoreSub");
      d && (d.textContent = Math.round(n) + "%", d.classList.add("live")), p && (p.textContent = "Currently " + _t(t) + "%");
    }
    zr(t).forEach((d) => d.update(nr(t)));
  }
  const $o = (t, n) => {
    const r = t.shiftKey ? 10 : 1, d = { ArrowUp: n + r, ArrowRight: n + r, ArrowDown: n - r, ArrowLeft: n - r, PageUp: n + 25, PageDown: n - 25, Home: 0, End: 100 }[t.key];
    return d == null ? null : Math.max(0, Math.min(100, Math.round(d)));
  };
  function wl(t, n) {
    var ue;
    const r = t.dataset.blocks;
    (ue = t.setPointerCapture) == null || ue.call(t, n.pointerId);
    const d = (he) => {
      const F = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (he.clientX - F.left) / F.width * 100));
    }, p = d(n), S = n.clientX;
    let g = !1, x = Qn(r), E = p, H = 0;
    const z = () => {
      x = Math.abs(E - x) < 0.2 ? E : x + (E - x) * 0.14, Ci(r, x), H = requestAnimationFrame(z);
    }, N = () => {
      g || (g = !0, t.classList.add("fine"), H = requestAnimationFrame(z));
    }, U = setTimeout(N, 350), ye = (he) => {
      E = d(he), Math.abs(he.clientX - S) > 6 && (clearTimeout(U), N());
    }, Ne = () => {
      clearTimeout(U), cancelAnimationFrame(H), t.removeEventListener("pointermove", ye), t.removeEventListener("pointerup", Ne), t.removeEventListener("pointercancel", Ne), t.classList.remove("fine"), Ci(r, g ? Math.round(x) : (Math.min(3, Math.floor(p / 25)) + 1) * 25), To("pos", r);
    };
    t.addEventListener("pointermove", ye), t.addEventListener("pointerup", Ne), t.addEventListener("pointercancel", Ne);
  }
  function rr(t) {
    var p;
    const [n, r] = t.dataset.open.split("|"), d = t.closest(".tfCard");
    V = { key: n, id: r, h: d ? Math.round(d.getBoundingClientRect().height) : 0 }, hn.delete(n), en(), (p = _.querySelector(".tfOpen [data-close]")) == null || p.focus({ preventScroll: !0 });
  }
  function Mo(t) {
    var n;
    ge = t.dataset.area, _.querySelectorAll(".tfAreaPanel").forEach((r) => {
      var p;
      const d = r === t;
      r.classList.toggle("active", d), r.setAttribute("aria-expanded", String(d)), (p = r.querySelector(".panelExpanded")) == null || p.toggleAttribute("inert", !d);
    }), hn.set("areas", Mr(((n = _.querySelector('[data-k="areas"]')) == null ? void 0 : n.style.order) || 1));
  }
  const Co = {
    bright: { value: (t, n) => Math.round(n * 100), text: (t, n) => n ? n + "%" : "Off", send: (t, n) => n > 0 ? ["light", "turn_on", { brightness_pct: n }] : ["light", "turn_off", {}] },
    ct: { value: (t, n) => {
      const [r, d] = vn(t);
      return Math.round(r + n * (d - r));
    }, text: (t, n) => n.toLocaleString() + "k", send: (t, n) => ["light", "turn_on", { color_temp_kelvin: n }] },
    hue: { value: (t, n) => Math.round(n * 360), text: () => "Colour", send: (t, n) => {
      var r;
      return ["light", "turn_on", { hs_color: [n, Math.max(60, ((r = ft(t).hs_color) == null ? void 0 : r[1]) || 100)] }];
    } },
    pos: { value: (t, n) => Math.round(n * 100), text: (t, n) => Math.round(n) + "%", send: (t, n) => ["cover", "set_cover_position", { position: Math.round(n) }] },
    tilt: { value: (t, n) => Math.round(n * 100), text: (t, n) => "Tilt " + n + "%", send: (t, n) => ["cover", "set_cover_tilt_position", { tilt_position: n }] },
    vol: { value: (t, n) => Math.round(n * 100) / 100, text: (t, n) => Math.round(n * 100) + "%", send: (t, n) => ["media_player", "volume_set", { volume_level: n }] }
  };
  function So(t, n, r, d) {
    var E;
    const p = Co[n].value(r, d);
    Oe.set(n + "|" + r, p);
    const S = Math.round(d * 100) + "%", g = t.querySelector("i");
    if (n === "tilt") {
      g.style.width = "calc((100% - 6px) * " + d + ")";
      const [H, z] = t.querySelectorAll("span");
      H.classList.toggle("lit", d > 0.08), z.classList.toggle("lit", d > 0.92), hn.delete(r), wa = wa.map(() => ""), zr(r).forEach((N) => N.update(nr(r)));
    } else if (g) g.style.width = S;
    else {
      let H = t.querySelector("b");
      H || (H = document.createElement("b"), t.appendChild(H)), H.style.left = S;
    }
    t.setAttribute("aria-valuenow", String(Math.round(d * 100)));
    const x = (E = t.closest(".tfAction") || t.closest(".tfMore")) == null ? void 0 : E.querySelector(".tfName .activityRowMeta, .tfMoreState");
    x && (x.textContent = Co[n].text(r, p));
  }
  function To(t, n) {
    const r = Oe.get(t + "|" + n), [d, p, S] = Co[t].send(n, r), g = () => setTimeout(() => {
      Oe.delete(t + "|" + n), en();
    }, 1500);
    ir(d, p, n, S).then(g, g);
  }
  function Lo(t) {
    t.addEventListener("click", (n) => {
      var d, p;
      const r = n.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],.tfAreaPanel");
      if (Fn && !n.target.closest(".tfBoardMenu,[data-board-more]") && Mn(), !(!r || !t.contains(r) || r.disabled))
        if (r.dataset.boardMore)
          (Fn == null ? void 0 : Fn.key) === r.dataset.boardMore ? Mn(!0) : Fo(r.dataset.boardMore, r);
        else if (r.dataset.boardAct) hl(Fn.key, r.dataset.boardAct);
        else if (r.dataset.boardShow) Oo(r.dataset.boardShow);
        else if (r.dataset.favHide) Nr(r.dataset.favHide, !1);
        else if (r.dataset.energyPick) Vi(r.dataset.energyPick);
        else if (r.dataset.act) Ko(r.dataset.act);
        else if (r.hasAttribute("data-details")) Wr(!(w != null && w.details));
        else if (r.hasAttribute("data-details-close")) Wr(!1);
        else if (r.dataset.summary) di(r.dataset.summary, r);
        else if (r.dataset.star) li(r.dataset.star);
        else if (r.hasAttribute("data-more-back")) {
          const S = w.id;
          w = w.back, bs(), (d = Je.querySelector('.tfMore [data-more="' + CSS.escape(S) + '"]')) == null || d.focus({ preventScroll: !0 });
        } else if (r.hasAttribute("data-favs-edit")) Mi("favourites", r);
        else if (r.dataset.acts) JSON.parse(r.dataset.acts).forEach(([S, g, x, E]) => ir(S, g, x, E).catch(() => {
        }));
        else if (r.dataset.more) Mi(r.dataset.more, r);
        else if (r.hasAttribute("data-more-close")) or();
        else if (r.dataset.go) ms("room:" + r.dataset.go);
        else if (r.hasAttribute("data-area-back")) xi();
        else if (r.dataset.open) rr(r);
        else if (r.hasAttribute("data-close")) {
          const S = V;
          V = null, hn.delete(S.key), en(), (p = _.querySelector('[data-open="' + CSS.escape(S.key + "|" + S.id) + '"]')) == null || p.focus({ preventScroll: !0 });
        } else r.classList.contains("tfAreaPanel") && !r.classList.contains("active") && Mo(r);
    }), t.addEventListener("keydown", (n) => {
      var d, p, S, g, x, E, H;
      const r = n.target;
      if ((d = r.dataset) != null && d.open && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), rr(r)), (p = r.dataset) != null && p.energyPick && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), Vi(r.dataset.energyPick)), (S = r.classList) != null && S.contains("tfAreaPanel") && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), Mo(r)), (g = r.dataset) != null && g.summary && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), di(r.dataset.summary, r)), n.key === "Escape" && Fn && t === _) {
        n.preventDefault(), Mn(!0);
        return;
      }
      if (n.key === "Escape" && _n && t === _) {
        n.preventDefault(), wo(!1), (x = c("dashEditNav")) == null || x.focus();
        return;
      }
      if (n.key === "Escape" && Te && t === _ && (n.preventDefault(), xi()), (E = r.dataset) != null && E.blocks) {
        const z = r.dataset.blocks, N = $o(n, Math.round(Qn(z)));
        if (N == null) return;
        n.preventDefault(), Ci(z, N), clearTimeout(de.get(z)), de.set(z, setTimeout(() => To("pos", z), 500));
        return;
      }
      if ((H = r.dataset) != null && H.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(n.key)) {
        n.preventDefault();
        const [z, N] = r.dataset.drag.split("|"), U = Number(r.getAttribute("aria-valuenow")) / 100, ye = n.key === "Home" ? 0 : n.key === "End" ? 1 : Math.max(0, Math.min(1, U + (n.key === "ArrowLeft" || n.key === "ArrowDown" ? -0.05 : 0.05)));
        So(r, z, N, ye), To(z, N);
      }
    }), t.addEventListener("pointerdown", (n) => {
      var tn;
      const r = n.target.closest("[data-blocks]");
      if (r && n.button === 0) {
        n.preventDefault(), wl(r, n);
        return;
      }
      const d = n.target.closest("[data-drag]");
      if (!d || n.button > 0) return;
      const [p, S] = d.dataset.drag.split("|");
      if (p === "bright" && !In(S)) {
        Ko(gt("light", "toggle", S));
        return;
      }
      const g = p === "bright" && ((tn = b[S]) == null ? void 0 : tn.state) !== "on", x = n.pointerType !== "mouse", E = p === "tilt" ? 3 : 0, H = () => d.getBoundingClientRect().width - E * 2, z = ($t) => {
        const pa = d.getBoundingClientRect();
        return Math.max(0, Math.min(1, ($t.clientX - pa.left - E) / H()));
      };
      let N = x ? "waiting" : g ? "pressed" : "dragging", U = 0, ye = 0;
      const Ne = n.clientX, ue = n.clientY, he = ($t, pa) => Math.hypot($t.clientX - Ne, $t.clientY - ue) > pa, F = () => {
        try {
          d.setPointerCapture(n.pointerId);
        } catch {
        }
      };
      x || (n.preventDefault(), F()), N === "dragging" && So(d, p, S, z(n));
      const Le = x && setTimeout(() => {
        var $t, pa;
        N === "waiting" && (N = "held", A = d, d.classList.add("held"), F(), ($t = navigator.userActivation) != null && $t.hasBeenActive && ((pa = navigator.vibrate) == null || pa.call(navigator, 8)), U = g ? (ve[S] ?? 100) / 100 : Number(d.getAttribute("aria-valuenow")) / 100, ye = Ne, So(d, p, S, U));
      }, y), vt = ($t) => {
        N === "waiting" && he($t, 8) ? N = "gone" : N === "pressed" && he($t, 4) && (N = "dragging"), N === "held" ? So(d, p, S, Math.max(0, Math.min(1, U + ($t.clientX - ye) / H()))) : N === "dragging" && So(d, p, S, z($t));
      }, Wt = ($t) => {
        clearTimeout(Le), ["pointermove", "pointerup", "pointercancel"].forEach((pa, He) => d.removeEventListener(pa, He ? Wt : vt)), d.classList.remove("held"), A === d && (A = null), N === "held" || N === "dragging" ? To(p, S) : $t.type === "pointerup" && g && (N === "waiting" || N === "pressed") && ir("light", "turn_on", S).catch(() => {
        });
      };
      d.addEventListener("pointermove", vt), d.addEventListener("pointerup", Wt), d.addEventListener("pointercancel", Wt);
    }), t.addEventListener("touchmove", (n) => {
      A && n.cancelable && n.preventDefault();
    }, { passive: !1 });
  }
  return _ && v && (qa(), Lo(_), Lo(Je), Je.addEventListener("click", (t) => {
    t.target === Je && or();
  }), (Ao = a.getElementById("homeNav")) == null || Ao.addEventListener("click", () => {
    Te && xi();
  }), (Vn = a.querySelector(".bottomNav")) == null || Vn.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + Ac + "</button>"), (jr = c("dashEditNav")) == null || jr.addEventListener("click", () => wo(!_n)), _.addEventListener("pointerdown", fl), _.addEventListener("hass-action", (t) => {
    var d, p;
    const n = (p = (d = t.target).closest) == null ? void 0 : p.call(d, ".tfDac"), r = n == null ? void 0 : n.dataset.k;
    !r || !n.dataset.dac.startsWith("dash:") || _n || (t.stopPropagation(), Mi(r, n));
  }), new ResizeObserver(() => {
    f.classList.contains("tfDash") && ji() !== ui ? en() : ra();
  }).observe(_), window.addEventListener("resize", ra, { passive: !0 }), Je.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.stopPropagation(), w != null && w.details ? Wr(!1) : or());
  })), Q(), {
    update(t) {
      if (!v) return;
      const n = !Object.keys(b).length;
      b = t || {};
      for (const r in b) r.startsWith("light.") && b[r].state === "on" && In(r) && Pe(r, oo(b[r]));
      n ? Xa() : en();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      ao = !0, Ue == null || Ue.destroy(), Ue = null, tt == null || tt.forEach((t) => t.destroy()), tt = null;
    },
    resume() {
      ao = !1, !(!v || !(_ != null && _.querySelector("[data-tf]"))) && (rt.isConnected && Ri(rt.style.order), Ni());
    }
  };
}
const uf = "0.48.0", Xl = "move_assistant", pf = "move_assistant", Ec = "move_assistant_checkin_reminder";
function hf() {
  if (document.getElementById("move-assistant-inter")) return;
  const a = document.createElement("link");
  a.id = "move-assistant-inter", a.rel = "stylesheet", a.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(a);
}
class ff extends HTMLElement {
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
    var c;
    const o = !this._hass;
    if (this._hass = l, o) {
      this._init();
      return;
    }
    this._app && l.states !== this._lastStates && (this._lastStates = l.states, this._app.updateStates(l.states), (c = this._test) == null || c.update(l.states));
  }
  connectedCallback() {
    var l, o;
    (l = this._app) == null || l.resume(), (o = this._test) == null || o.resume();
  }
  disconnectedCallback() {
    var l, o;
    (l = this._app) == null || l.suspend(), (o = this._test) == null || o.suspend();
  }
  async _init() {
    hf();
    const l = this.shadowRoot || this.attachShadow({ mode: "open" });
    l.innerHTML = `<style>${ku}${Mu}${Cu}</style>${Su}`;
    const o = l.getElementById("app");
    o.style.opacity = "0";
    let c = null;
    try {
      const f = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: Xl
      });
      c = (f == null ? void 0 : f.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(c), this._app = Gu(l, {
      data: c,
      save: (f) => this._save(f),
      fire: (f, m) => this._fire(f, m),
      ws: (f) => this._hass.callWS(f),
      subscribe: (f, m) => {
        var v, T;
        return (T = (v = this._hass) == null ? void 0 : v.connection) != null && T.subscribeMessage ? this._hass.connection.subscribeMessage(m, f) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var f, m;
        return Object.keys(((m = (f = this._hass) == null ? void 0 : f.services) == null ? void 0 : m.notify) || {}).sort();
      },
      setReminderAutomation: (f) => this._setReminderAutomation(f),
      setLight: (f) => this.classList.toggle("lightBody", f),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this._test = cf(l, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), this.isConnected || (this._app.suspend(), this._test.suspend()), o.style.transition = "opacity .2s ease", o.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var o;
    const l = (o = this._hass) == null ? void 0 : o.connection;
    l != null && l.subscribeMessage && l.subscribeMessage(
      (c) => {
        var m;
        const f = JSON.stringify((c == null ? void 0 : c.value) ?? null);
        f === this._lastSaved || f === this._pendingJson || (this._lastSaved = f, (m = this._app) == null || m.applyRemoteData(c.value));
      },
      { type: "frontend/subscribe_user_data", key: Xl }
    ).catch(() => {
    });
  }
  _save(l) {
    this._pendingJson = JSON.stringify(l), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const o = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: Xl,
          value: JSON.parse(o)
        }), this._lastSaved = o;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(l, o = {}) {
    var c, f;
    ((c = this._config) == null ? void 0 : c.events) !== !1 && ((f = this._hass) == null || f.callWS({
      type: "fire_event",
      event_type: pf,
      event_data: { action: l, ...o }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(l) {
    const o = `config/automation/config/${Ec}`;
    if (!l) {
      try {
        await this._hass.callApi("DELETE", o);
      } catch (m) {
        if ((m == null ? void 0 : m.status_code) !== 404 && (m == null ? void 0 : m.status) !== 404) throw m;
      }
      return;
    }
    const c = (m) => `${m}:00`, f = window.location.pathname;
    await this._hass.callApi("POST", o, {
      id: Ec,
      alias: "Move Assistant check-in reminder",
      description: "Created by Move Assistant. Change it in Move Assistant → Settings → Check-in.",
      mode: "single",
      triggers: [
        { trigger: "time", at: c(l.times.morning), id: "morning" },
        { trigger: "time", at: c(l.times.evening), id: "evening" }
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
    const o = this.requestFullscreen || this.webkitRequestFullscreen;
    Promise.resolve(o.call(this)).catch(
      () => this._toast("Full screen isn't available here")
    );
  }
  _toast(l) {
    var c;
    const o = (c = this.shadowRoot) == null ? void 0 : c.getElementById("toast");
    o && (o.textContent = l, o.classList.add("show"), setTimeout(() => o.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", ff), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${uf} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
