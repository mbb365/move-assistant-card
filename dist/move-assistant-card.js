const hu = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#f1f1f1;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#fbf9f6;--color-text-on-selected:#26221e;--color-bg-segment-selected:#fbf9f6;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto;border-radius:22.4px;background:var(--raised)}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}#settingsView .metaTableWrap{border-radius:var(--r-tile);background:var(--group-bg)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}#settingsView .toggleRow.wxStyleRow{flex-direction:column;align-items:stretch}.wxStyleChoice{display:grid;grid-template-columns:repeat(auto-fit,minmax(148px,1fr));gap:8px}.wxStyleBtn{display:grid;justify-items:start;gap:var(--inset);padding:var(--inset);border:.8px solid var(--field-line);border-radius:var(--r-tile);background:transparent;color:var(--text);text-align:left;cursor:pointer}.wxStyleBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxStylePreview{display:grid;grid-template-columns:repeat(2,54px);gap:8px}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', gu = '#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}#homeView .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer;transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow.tap:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--primary);color:var(--hc-on-accent)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--tile);color:var(--text);cursor:pointer}.tfAction.on .tfIcon{background:#fa0;color:#fff}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:none}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px;align-items:start}.tfAction{grid-column:span 2}.tfAction.small{grid-column:span 1}.tfAction.small .tfActionHead{flex-direction:column;align-items:flex-start;gap:10px}.tfAction.full{grid-column:1/-1}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction,.tfAction.small{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard){order:900}#app.house #homeView .grid>.feelSection{order:950}#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfAction.on[data-tone=blue] .tfIcon{background:var(--primary);color:#fff}.tfAction.on[data-tone=heat] .tfIcon{background:#ff8100;color:#fff}.tfAction.on[data-tone=cool] .tfIcon{background:#2196f3;color:#fff}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:none;width:46px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);font:400 24px/1 var(--font);cursor:pointer}.tfStep output{flex:1;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--card);color:var(--text);box-shadow:var(--hc-hair)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCard .tfPlug:not(.on) .tfIcon{background:var(--tile);color:var(--text)}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfAreaPanel .sourceTag{margin-right:4px}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:3px;height:38px;padding:3px;border-radius:12px;background:var(--tile);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:9px 4px 4px 9px}.tfBlocks>span:nth-child(4){border-radius:4px 9px 9px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 12px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:38px;border-radius:12px;background:var(--tile);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none}.tfTilt i{position:absolute;top:3px;bottom:3px;left:3px;border-radius:9px;background:var(--primary)}.tfTilt span{position:relative;padding:0 15px;color:var(--text);font:600 12px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns{display:flex;gap:12px}.tfCoverBtns button{flex:1;display:grid;place-items:center;height:38px;min-width:0;min-height:0;padding:0;border:0;border-radius:12px;background:var(--tile);color:var(--text);cursor:pointer}.tfCoverBtns button:disabled{opacity:.38;cursor:default}.tfCoverBtns svg{display:block;width:22px;height:22px}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--primary));color:#fff}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList) .tfPlug.on[data-tone=light] .tfIcon{background:#fa0;color:#fff}:is(.tfCard,.tfMoreList) .tfPlug.on[data-tone=heat] .tfIcon{background:#ff8100;color:#fff}:is(.tfCard,.tfMoreList) .tfPlug.on[data-tone=cool] .tfIcon{background:#2196f3;color:#fff}:is(.tfCard,.tfMoreList) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--primary);color:var(--hc-on-accent)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPlug:not(.on) .tfIcon{background:var(--tile);color:var(--text)}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop[hidden]{display:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:620px){.tfMoreBackdrop{place-items:end stretch;padding:0}.tfMorePair{width:100%;max-height:85vh}.tfMore{width:100%;border-radius:var(--r-card) var(--r-card) 0 0}.tfMore .tfCoverBtns{gap:8px}}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMore{width:640px}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{flex:none;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}.tfEditTop{grid-column:1/-1;display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 10px 10px 20px;border-radius:var(--r-card);outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}.tfEditTitle{font:500 18px/1.2 var(--font-tile)}.tfEditActions{display:flex;align-items:center;gap:16px}.tfEditBar{display:flex;align-items:center;gap:4px;margin:-8px -8px 0}.tfSpacer{flex:1}.tfTool{display:grid;place-items:center;flex:none;width:34px;height:34px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--tile);color:var(--text);cursor:pointer}.tfTool:disabled{opacity:.35;cursor:default}.tfTool svg{width:20px;height:20px}.tfGrip{background:none;cursor:grab;touch-action:none}.tfHiddenTag{align-self:flex-start;padding:2px 8px;border-radius:99px;background:var(--tile);color:var(--muted);font:500 12px/16px var(--font)}.tfEditBody{display:contents}#app.editing .tfEditBody>*{opacity:.55}#app.editing .tfAction.isHidden .tfEditBody>*{opacity:.25}#app.editing .tfAction.isHidden{box-shadow:inset 0 0 0 1px var(--line)}.tfAreaPanel.isHidden{opacity:.45}.tfEditLabel{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-right:22.4px}.tfEditLabel small{margin-left:10px;color:var(--muted);font:400 13px/18px var(--font)}.tfTools{display:flex;gap:4px}.tfGhost{position:fixed;z-index:300;margin:0;pointer-events:none;opacity:.95;transform:scale(1.02);box-shadow:0 14px 40px #0006}.tfDragging{opacity:.3}.tfDropHint{grid-column:1/-1;display:grid;place-items:center;min-height:92px;border-radius:28px;outline:1px dashed color-mix(in srgb,var(--primary) 60%,transparent);outline-offset:-1px;color:var(--muted);font:500 14px/20px var(--font)}.tfActions:has(.tfAction) .tfDropHint{display:none}.tfAction .tfCoverArt{width:min(294px,100%)}#homeView .card .activityRow.tfGraphRow{grid-column:1/-1}.tfSpark{grid-column:1/-1;display:block;width:100%;height:64px}.tfSpark text{fill:var(--muted);font:400 11px var(--font)}#app.editing #homeView .card .activityRow:has(>.tfTool){grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfOptGroup{display:flex;flex-direction:column;gap:6px}.tfOptRow{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:46px;padding:0 4px 0 10px;font:500 15px/20px var(--font)}.tfOptField{width:100%}.tfOptDelete{align-self:flex-start;color:#e53935}.tfAreaPanel [data-tone]{--on:var(--primary)}.tfAreaPanel [data-tone=light]{--on:#ffaa00}.tfAreaPanel [data-tone=heat]{--on:#ff8100}.tfAreaPanel [data-tone=cool]{--on:#2196f3}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfAName{font:500 24px/1.2 var(--font-tile);letter-spacing:-.01em}.tfAreaPanel .workoutPanelTop>.tfATools{display:flex;flex:none;align-items:center;gap:8px}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{color:var(--muted);font:400 16px/1.2 var(--font)}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));margin:0 calc(-1 * var(--inset)) calc(-1 * var(--inset))}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>div:last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--tile);color:var(--text);cursor:pointer}.tfATile.on .tfIcon{background:var(--on);color:#fff}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:20px 0}.tfACMain{max-width:calc(100% - 12px);font:600 14px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACOn{display:flex;flex-direction:column;align-items:center;gap:6px;min-height:30px}.tfACDot{display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:var(--on);color:#fff}.tfACDot .icon{width:16px;height:16px}.tfACDot.alert{background:#e53935}', vu = '.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:clamp(8px,calc(5.6cqw * var(--wb-k,1)),14px);aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:clamp(12px,calc(7.9cqw * var(--wb-k,1)),20px);border-radius:clamp(22px,calc(11.1cqw * var(--wb-k,1)),28px);overflow:hidden}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbHead{gap:clamp(8px,calc(4.8cqw * var(--wb-k,1)),12px)}.wbSquare .wbChip{width:clamp(30px,calc(15.9cqw * var(--wb-k,1)),40px);height:clamp(30px,calc(15.9cqw * var(--wb-k,1)),40px);border-radius:clamp(12px,calc(6.3cqw * var(--wb-k,1)),16px);--wb-icon:clamp(18px,calc(9.5cqw * var(--wb-k,1)),24px)}.wbSquare .wbName{font-size:clamp(12px,calc(5.6cqw * var(--wb-k,1)),14px);line-height:1.4}.wbSquare .wbSub{font-size:clamp(13px,calc(6.3cqw * var(--wb-k,1)),16px)}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:clamp(6px,calc(4cqw * var(--wb-k,1)),10px)}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);opacity:.14}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:20px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 480px){.wbCard.wbWeather{gap:16px;padding:var(--inset)}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumns{display:none}.wbHalves{display:grid}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbStripScroll{min-height:150px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:clamp(12px,6.3cqw,16px);overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}@container wb-card (width < 220px){.wbMoonCaption{display:none}}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbCompareBars{display:block;width:100%;height:100%;min-height:0}.wbAvgValue{fill:var(--muted);font-size:10px;text-anchor:middle}.wbAvgValue.wbToday{fill:var(--text);font-size:12px;font-weight:600}.wbAvgBar{fill:var(--muted);opacity:.45}.wbAvgBar.wbToday{fill:var(--primary);opacity:1}.wbAvgDay{fill:var(--muted);font-size:11px;text-anchor:middle}.wbAvgDay.wbToday{fill:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}', bu = `<main id="app"><div class="shell">
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

        <div class="toggleRow wxStyleRow">
          <div>
            <strong>Weather style</strong>
            <div class="status">How the weather pictures on Home are drawn.</div>
          </div>
          <div class="wxStyleChoice" id="wxStyleChoice" role="group" aria-label="Weather style">
            <button class="wxStyleBtn" type="button" aria-pressed="false" data-wx-style="bitmap"><span class="wxStylePreview"></span><strong>Bitmap</strong></button>
            <button class="wxStyleBtn" type="button" aria-pressed="false" data-wx-style="onebit"><span class="wxStylePreview"></span><strong>1-bit</strong></button>
            <button class="wxStyleBtn" type="button" aria-pressed="false" data-wx-style="smooth"><span class="wxStylePreview"></span><strong>Smooth</strong></button>
          </div>
        </div>

        <div class="toggleRow">
          <div>
            <strong>Weather layout</strong>
            <div class="status">The next six days on Home, as tiles or as a 12-hour sky.</div>
          </div>
          <div class="themeChoice" id="wxLayoutChoice" role="group" aria-label="Weather layout">
            <button class="wxLayoutBtn" type="button" aria-pressed="true" data-wx-layout="tiles">Day tiles</button>
            <button class="wxLayoutBtn" type="button" aria-pressed="false" data-wx-layout="strip">Sky strip</button>
          </div>
        </div>

        <div class="toggleRow">
          <div>
            <strong>Weather motion</strong>
            <div class="status">The weather pictures move, and change shape when the weather changes.</div>
          </div>
          <button class="switch on" id="wxMotionToggle" aria-label="Toggle weather motion"></button>
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
`, Ia = {
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
}, Mn = (n) => n < 0 ? 0 : n > 1 ? 1 : n, od = (n, r, i) => n + (r - n) * i, zs = (n) => {
  const r = String(n || "#000000").trim().replace("#", ""), i = r.length === 3 ? r.split("").map((c) => c + c).join("") : r;
  return [0, 2, 4].map((c) => parseInt(i.slice(c, c + 2), 16) || 0);
}, wu = (n) => "#" + n.map((r) => Math.round(Math.max(0, Math.min(255, r))).toString(16).padStart(2, "0")).join(""), rd = {}, Pt = (n, r, i) => {
  const c = n + r + i;
  return rd[c] || (rd[c] = wu(zs(n).map((f, p) => f + (zs(r)[p] - f) * i)));
}, sd = {}, Fr = (n) => sd[n] || (sd[n] = zs(n)), _s = (n, r, i, c) => (f) => {
  if (f <= 0) return 0;
  if (f >= 1) return 1;
  let p = 0, v = 1, S = f;
  for (let y = 0; y < 18; y++)
    S = (p + v) / 2, 3 * (1 - S) * (1 - S) * S * n + 3 * (1 - S) * S * S * i + S * S * S < f ? p = S : v = S;
  return 3 * (1 - S) * (1 - S) * S * r + 3 * (1 - S) * S * S * c + S * S * S;
}, xu = { std: _s(0.2, 0, 0, 1), acc: _s(0.3, 0, 1, 1), dec: _s(0, 0, 0, 1) };
function Gr(n, r) {
  const i = String(n || "");
  return (i === "sunny" || i === "clear-night" ? "clear" : i === "partlycloudy" ? "partly" : i === "fog" ? "fog" : i === "lightning" || i === "lightning-rainy" ? "storm" : i === "snowy" || i === "snowy-rainy" ? "snow" : i === "rainy" || i === "pouring" || i === "hail" ? "rain" : "cloudy") + "/" + (i === "clear-night" || r ? "night" : "day");
}
function Vd(n) {
  const r = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return r.partly = [Pt(r.clear[0], r.cloudy[0], 0.12), Pt(r.clear[1], r.cloudy[1], 0.12)], r.storm = [Pt(r.rain[0], "#000000", 0.22), Pt(r.rain[1], "#000000", 0.22)], r;
}
const Vs = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], js = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], Gs = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function Us(n, r = Ia) {
  const i = { ...Ia, ...r }, c = Vd(i), f = String(n).split("/"), p = c[f[0]] ? f[0] : "clear", v = f[1] === "night", S = c[p][v ? 1 : 0], y = {
    night: v,
    clearness: p === "clear" ? 1 : p === "partly" ? 0.7 : 0.25,
    sky: S,
    skyStops: [S],
    skyT: 0,
    sun: { x: 45, y: v ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: v ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: v ? 1 : 0 },
    stars: Vs.map(() => ({ o: 0 })),
    rain: js.map(() => ({ o: 0, dy: -16 })),
    snow: Gs.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, B = (ae) => Vs.map(() => ({ o: ae }));
  return p === "clear" ? v ? (y.moon.o = 1, y.stars = B(1)) : y.sun.o = 1 : p === "partly" ? (y.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: v ? 1 : 0 }, v ? (y.moon = { x: 34, y: 33, d: 48, o: 1 }, y.stars = B(0.7)) : y.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : p === "cloudy" || p === "fog" ? (y.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: v ? 1 : 0 }, v ? y.moon = { x: 40, y: 36, d: 40, o: 0 } : y.sun = { x: 40, y: 36, r: 20, o: 0 }) : (y.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, v ? y.moon = { x: 38, y: 28, d: 36, o: 0 } : y.sun = { x: 38, y: 28, r: 18, o: 0 }, p === "snow" ? y.snow = Gs.map(() => ({ o: 1, dy: 0 })) : y.rain = js.map((ae, Z) => ({ o: p === "storm" && Z === 1 ? 0 : 1, dy: 0 })), p === "storm" && (y.bolt = { o: 1, dy: 0 })), y;
}
const ld = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function yu(n, r, i, c = Ia, f = !1) {
  const p = { ...Ia, ...c }, v = (_, R) => _ > 0.01 && R > 0.01 ? "stay" : _ > 0.01 ? "leave" : R > 0.01 ? "enter" : "none", S = (_, R, q, J) => {
    const O = _[0] + R * J, L = _[1] - (q - 1 - R) * J;
    return xu[_[2]](Mn((i - O) / Math.max(1e-3, L - O)));
  }, y = (_, R, q, J = 0, O = 1, L = 0) => {
    const I = v(_.o, R.o);
    if (I === "none") return { ...R, o: 0 };
    const W = S(ld[q][I], J, O, L), H = {};
    for (const Q in R) H[Q] = f && I !== "stay" && Q !== "o" ? I === "leave" ? _[Q] : R[Q] : od(_[Q], R[Q], W);
    return H;
  }, B = S(ld.sky, 0, 1, 0);
  let ae, Z;
  if (n.night !== r.night) {
    const _ = Math.min(n.clearness, r.clearness), R = Pt(Pt(n.sky, r.sky, 0.5), p.dusk, 0.6 * _);
    ae = B < 0.5 ? Pt(n.sky, R, B * 2) : Pt(R, r.sky, B * 2 - 1), Z = _ > 0.5 ? [n.sky, p.dusk, r.sky] : [n.sky, r.sky];
  } else
    ae = Pt(n.sky, r.sky, B), Z = [n.sky, r.sky];
  return {
    night: i < 0.5 ? n.night : r.night,
    clearness: od(n.clearness, r.clearness, i),
    sky: ae,
    skyStops: Z,
    skyT: B,
    sun: y(n.sun, r.sun, "body"),
    moon: y(n.moon, r.moon, "body"),
    cloud: y(n.cloud, r.cloud, "cloud"),
    stars: r.stars.map((_, R) => y(n.stars[R], _, "fx", R, r.stars.length, 0.05)),
    rain: r.rain.map((_, R) => y(n.rain[R], _, "fx", R, r.rain.length, 0.05)),
    snow: r.snow.map((_, R) => y(n.snow[R], _, "fx", R, r.snow.length, 0.05)),
    bolt: y(n.bolt, r.bolt, "fx")
  };
}
const ku = [
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
], kn = (n, r) => (ku[(r & 7) * 8 + (n & 7)] + 0.5) / 64, Mu = 0, Ks = 1, $s = 2, Js = 3, Xs = 4, yn = 5, mo = 6, ii = 7, Qs = 8, qr = (n, r) => r <= 0.6665 && ((n - 0.5) * (n - 0.5) + (r - 0.2877) * (r - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (r - 0.416) * (r - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (r - 0.458) * (r - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && r >= 0.416), Cu = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], Su = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((n) => [n[0] * 13 / 11, n[1] * 28 / 24]), jd = (n, r, i) => {
  let c = !1;
  for (let f = 0, p = n.length - 1; f < n.length; p = f++) {
    const v = n[f], S = n[p];
    v[1] > i != S[1] > i && r < (S[0] - v[0]) * (i - v[1]) / (S[1] - v[1]) + v[0] && (c = !c);
  }
  return c;
};
function Gd(n, { size: r = 90, px: i = 2, oneBit: c = !1, colors: f = Ia, ink: p = "#26221e", paper: v = "#fbf9f6", clock: S = 0, idle: y = !1 } = {}) {
  const B = { ...Ia, ...f }, ae = Math.sin, Z = Math.PI * 2, _ = Math.max(6, Math.round(r / i)), R = _ / 90, q = y ? Math.floor(S / 100) * 100 : 0, J = y ? ae(Z * q / 3600) : 0, O = y ? 1.8 * ae(Z * q / 6400) : 0, L = y ? 0.9 * ae(Z * q / 4100) : 0, I = y ? 0.8 * ae(Z * q / 5200) : 0, W = q / 3400 % 1, H = y && n.bolt.o > 0.5 && (W < 0.04 || W > 0.08 && W < 0.11), Q = new Array(_ * _), z = new Uint8Array(_ * _), F = (w, x, k, E, ne) => {
    k == null || w < 0 || x < 0 || w >= _ || x >= _ || (E >= 1 || E > kn(w + 5, x + 3)) && (Q[x * _ + w] = k, z[x * _ + w] = ne);
  }, de = (w, x, k, E) => {
    for (let ne = Math.max(0, Math.floor(x - k) - 1); ne <= Math.min(_ - 1, x + k + 1); ne++) for (let te = Math.max(0, Math.floor(w - k) - 1); te <= Math.min(_ - 1, w + k + 1); te++) E(te, ne, te + 0.5 - w, ne + 0.5 - x);
  }, Ee = n.skyStops || [n.sky], h = n.skyT || 0;
  for (let w = 0; w < _; w++) {
    const x = n.night ? Mn(1 - (w + 0.5) / (_ * 0.7)) * 0.85 : Mn(((w + 0.5) / _ - 0.35) / 0.65) * 0.85;
    for (let k = 0; k < _; k++) {
      let E = Ee[0];
      if (Ee.length > 1) {
        const ne = h * (Ee.length - 1), te = Math.min(Ee.length - 2, Math.floor(ne));
        E = ne - te > kn(k, w) ? Ee[te + 1] : Ee[te];
      }
      x > kn(k + 2, w + 5) && (E = n.night ? Pt(E, "#000000", 0.28) : Pt(E, "#ffffff", 0.2)), Q[w * _ + k] = H ? Pt(E, "#ffffff", 0.25) : E;
    }
  }
  if (n.sun.o > 0.01) {
    const w = n.sun.x * R, x = n.sun.y * R, k = Math.max(1, n.sun.r * R);
    if (y) {
      const E = k * (1.45 + 0.06 * J), ne = Pt(B.sun, "#ffffff", 0.55);
      if (de(w, x, E, (te, K, X, oe) => {
        const Pe = Math.sqrt(X * X + oe * oe);
        Pe > k && Pe < E && F(te, K, ne, 0.26 * (1 - (Pe - k) / (E - k)) * n.sun.o, Mu);
      }), n.sun.o > 0.5) {
        const te = Math.floor(q / 500) % 2, K = Math.max(1, k * 0.22);
        for (let X = 0; X < 8; X++) if (X % 2 === te) for (let oe = k + 1.5; oe < k + 1.5 + K; oe += 0.7) F(Math.floor(w + Math.cos(X * Math.PI / 4) * oe), Math.floor(x + Math.sin(X * Math.PI / 4) * oe), B.sun, n.sun.o, Qs);
      }
    }
    de(w, x, k, (E, ne, te, K) => {
      if (te * te + K * K > k * k) return;
      const X = ((te * 0.643 + K * 0.766) / k + 1) / 2;
      F(E, ne, Mn((X - 0.62) / 0.38) > kn(E, ne) ? B.sunEdge : B.sun, n.sun.o, Ks);
    });
  }
  if (Vs.forEach((w, x) => {
    const k = n.stars[x].o;
    if (k < 0.01) return;
    const E = Math.floor(w[0] * R), ne = Math.floor(w[1] * R), te = y ? (Math.floor(q / 300) + x * 3) % 6 : 0;
    if (te === 5) return;
    const K = Math.round(w[2] * R * (te === 4 ? 0.3 : te < 2 ? 1 : 0.6));
    F(E, ne, B.star, k, ii);
    for (let X = 1; X <= K; X++) {
      const oe = X === K && K > 1 ? Pt(B.star, n.sky, 0.5) : B.star;
      F(E - X, ne, oe, k, ii), F(E + X, ne, oe, k, ii), F(E, ne - X, oe, k, ii), F(E, ne + X, oe, k, ii);
    }
  }), n.moon.o > 0.01) {
    const w = Math.max(1.5, n.moon.d * R * 0.37), x = n.moon.x * R, k = n.moon.y * R + (y && I > 0.4 ? -1 : 0), E = x + 0.547 * w, ne = k - 0.503 * w, te = 0.82 * w, K = Pt(B.moon, "#ffffff", 0.6);
    de(x, k, w, (X, oe, Pe, Ue) => {
      if (Pe * Pe + Ue * Ue > w * w) return;
      const Ft = X + 0.5 - E, lt = oe + 0.5 - ne;
      Ft * Ft + lt * lt <= te * te || F(X, oe, Mn((Ue + w) / (2 * w) * 1.1 - 0.1) > kn(X, oe) ? B.moon : K, n.moon.o, $s);
    });
  }
  const be = Math.max(2, Math.round(15.65 * R)), ye = Math.max(1, Math.round(5.87 * R * 0.5));
  js.forEach((w, x) => {
    const k = n.rain[x];
    let E = k.dy, ne = k.o;
    if (ne < 0.01) return;
    if (y) {
      const X = (q / 950 + x / 3) % 1;
      E += -5 + X * 14, ne *= X < 0.18 ? X / 0.18 : X > 0.72 ? (1 - X) / 0.28 : 1;
    }
    const te = (w[0] + 3 + O) * R, K = (w[1] + E) * R;
    for (let X = 0; X < be; X++) for (let oe = 0; oe < ye; oe++) F(Math.floor(te - 0.208 * X) + oe, Math.floor(K) + X, B.rain, ne, Xs);
  });
  const He = Math.max(0, Math.round(7.34 * R / 2.6));
  if (Gs.forEach((w, x) => {
    const k = n.snow[x];
    let E = k.dy, ne = 0, te = k.o;
    if (te < 0.01) return;
    if (y) {
      const oe = (q / 3200 + x / 5) % 1;
      E += -6 + oe * 14, ne = 1.5 * ae(Z * (oe * 1.5 + x / 5)), te *= oe < 0.2 ? oe / 0.2 : oe > 0.75 ? (1 - oe) / 0.25 : 1;
    }
    const K = Math.floor((w[0] + 3.67 + ne + O) * R), X = Math.floor((w[1] + 3.67 + E) * R);
    F(K, X, B.snow, te, yn);
    for (let oe = 1; oe <= He; oe++)
      F(K - oe, X, B.snow, te, yn), F(K + oe, X, B.snow, te, yn), F(K, X - oe, B.snow, te, yn), F(K, X + oe, B.snow, te, yn), He > 1 && oe < He && (F(K - oe, X - oe, B.snow, te, yn), F(K + oe, X - oe, B.snow, te, yn), F(K - oe, X + oe, B.snow, te, yn), F(K + oe, X + oe, B.snow, te, yn));
  }), n.bolt.o > 0.01)
    if (_ >= 30) {
      const w = 39 + O, x = 50 + n.bolt.dy;
      for (let k = Math.floor(x * R); k <= (x + 28) * R; k++) for (let E = Math.floor(w * R); E <= (w + 13) * R; E++)
        jd(Su, (E + 0.5) / R - w, (k + 0.5) / R - x) && F(E, k, B.sun, n.bolt.o, mo);
    } else {
      const w = _ / 18, x = 7, k = 10 + Math.round(n.bolt.dy * 0.2);
      Cu.forEach((E, ne) => E.split("").forEach((te, K) => {
        if (te !== "#") return;
        const X = Math.floor((x + K) * w), oe = Math.floor((k + ne) * w);
        for (let Pe = oe; Pe < Math.max(oe + 1, Math.floor((k + ne + 1) * w)); Pe++) for (let Ue = X; Ue < Math.max(X + 1, Math.floor((x + K + 1) * w)); Ue++) F(Ue, Pe, B.sun, n.bolt.o, mo);
      }));
    }
  if (n.cloud.o > 0.01) {
    const w = Math.max(3, n.cloud.w * R), x = w * 0.6665, k = (n.cloud.x + O) * R - w / 2, E = (n.cloud.y + L) * R - x / 2, ne = Pt(B.cloudDay, B.cloudNight, Math.round(n.cloud.f * 4) / 4), te = Pt(ne, "#000000", 0.16);
    for (let K = Math.max(0, Math.floor(E) - 1); K <= Math.min(_ - 1, E + x + 1); K++) for (let X = Math.max(0, Math.floor(k) - 1); X <= Math.min(_ - 1, k + w + 1); X++) {
      const oe = (X + 0.5 - k) / w, Pe = (K + 0.5 - E) / w;
      qr(oe, Pe) && F(X, K, !qr(oe, Pe + 1 / w) || Mn((Pe - 0.42) / 0.25) * 0.8 > kn(X, K) ? te : ne, n.cloud.o, Js);
    }
  }
  return Ud(Q, z, _, _, { oneBit: c, ink: p, paper: v, snowInk: !n.night });
}
function Ud(n, r, i, c, { oneBit: f, ink: p, paper: v, snowInk: S }) {
  const y = new Uint8ClampedArray(i * c * 4), B = Fr(p), ae = Fr(v);
  for (let Z = 0; Z < c; Z++) for (let _ = 0; _ < i; _++) {
    const R = Z * i + _, q = r[R];
    if (n[R] == null) continue;
    let J = Fr(n[R]);
    if (f) {
      let O;
      q === Xs || q === Qs ? O = !0 : q === yn ? O = S : q === ii || q === mo ? O = !1 : O = Math.round((0.2126 * J[0] + 0.7152 * J[1] + 0.0722 * J[2]) / 255 * 4) / 4 <= kn(_, Z), (q === Ks || q === $s || q === Js || q === mo) && (_ > 0 && r[R - 1] !== q || _ < i - 1 && r[R + 1] !== q || Z > 0 && r[R - i] !== q || Z < c - 1 && r[R + i] !== q) && (O = !0), J = O ? B : ae;
    }
    y[R * 4] = J[0], y[R * 4 + 1] = J[1], y[R * 4 + 2] = J[2], y[R * 4 + 3] = 255;
  }
  return { w: i, h: c, data: y };
}
const Lu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Tu = (n) => Gr(n, !1).split("/")[0], Es = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let r = Math.imul(n ^ n >>> 15, 1 | n);
  return r = r + Math.imul(r ^ r >>> 7, 61 | r) ^ r, ((r ^ r >>> 14) >>> 0) / 4294967296;
}, Au = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", _u = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Eu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Du = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Ru = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Nu = [".##", "##.", ".#.", "#.."];
function Yd(n, { width: r, height: i, colors: c, wave: f = 0.38, soft: p = 6, glow: v = 0.6 }) {
  const S = { ...Ia, dawn: "#e5a77e", ...c }, y = Vd(S), B = r, ae = i, Z = B / 6, _ = Z / 2, R = Math.PI * 2, q = n.length ? n : [{ cond: "cloudy", night: !1 }], J = [...Array(12)].map((W, H) => {
    const Q = q[Math.min(H, q.length - 1)], z = Tu(Q.cond), F = H % 2 === 1;
    return { cond: Q.cond, k: z, night: F, sky: y[z][F ? 1 : 0], cover: Lu[z] };
  }), O = (W) => ae * (0.5 - f * Math.cos(R * (W / Z - 0.25)));
  return { C: S, S: J, W: B, H: ae, cw: Z, sw: _, TAU: R, yb: O, side: (W, H, Q) => {
    const z = (W ? O(H) - Q : Q - O(H)) / Math.max(3, p * 1.4) + 0.5;
    return z <= 0 ? 0 : z >= 1 ? 1 : z;
  }, glowAt: (W) => {
    const H = ((W / Z - 0.25) % 1 + 1) % 1, Q = Math.max(0, Math.min(5, Math.round(W / Z - 0.25))), z = Math.max(0, Math.min(5, Math.round(W / Z - 0.75))), F = 1 - (J[2 * Q].cover + J[2 * z + 1].cover) / 2, de = Math.sin(Math.PI * Math.min(1, Math.max(0, O(W) / ae)));
    return { c: H < 0.5 ? S.dusk : S.dawn, a: v * (0.2 + 0.8 * F) * de * de };
  }, soft: p, tw: Z * 0.3, sy: ae / 90 };
}
function Zd(n, { clock: r = 0, ambient: i = !1, seed: c = 1 }) {
  const { S: f, sw: p, side: v, C: S, TAU: y, sy: B } = n, ae = r, Z = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return f.forEach((_, R) => {
    const q = Es(c * 977 + R * 131 + 7), J = (R + 0.5) * p, O = _.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[_.k] : 0;
    for (let L = 0; L < O; L++) {
      const I = J + (q() - 0.5) * p * 1.6, W = (6 + q() * 76) * B, H = q() < 0.35, Q = 1.8 + q() * 1.6, z = v(!0, I, W) * (H ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(y * ae / 2600 + L * 1.7 + R) : 1);
      z >= 0.03 && Z.stars.push({ x: I, y: W, big: H, size: Q, o: z });
    }
    if (!_.night && (_.k === "clear" || _.k === "partly")) {
      const L = J + (q() - 0.5) * p * 0.3, I = Math.min(15, p * 0.29);
      Z.suns.push({ x: L, y: 32 * B, rad: I, halo: I * 2.8 * (i ? 1 + 0.07 * Math.sin(y * ae / 3600 + R) : 1) });
    }
    if (_.night && (_.k === "clear" || _.k === "partly")) {
      const L = Math.min(0.78, p * 0.55 / 34), I = J - 23 * L + (q() - 0.5) * p * 0.2;
      Z.moons.push({ x: I + 23 * L, y: (4 + (i ? 0.8 * Math.sin(y * ae / 5200 + R) : 0)) * B + 23 * L, d: 46 * L });
    }
  }), f.forEach((_, R) => {
    const q = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[_.k];
    if (!q) return;
    const J = Es(c * 577 + R * 71 + 3), O = (R + 0.5) * p, L = _.k === "rain" || _.k === "storm" || _.night ? S.cloudNight : S.cloudDay, I = _.night ? 0.82 : _.k === "storm" ? 0.75 : 1;
    for (let W = 0; W < q; W++) {
      const H = p / 46 * (_.k === "partly" ? 0.85 : 0.75 + J() * 0.55), Q = O + (_.k === "partly" ? p * 0.12 : (J() - 0.5) * p * 1.05), z = (_.k === "partly" ? 40 : 6 + J() * 26) * B, F = i ? 2.5 * Math.sin(y * ae / 9e3 + R * 1.3 + W * 2.1) : 0, de = i ? 0.9 * Math.sin(y * ae / 6100 + R + W) : 0;
      Z.clouds.push({ x: Q - 23 * H + F, y: z - 15.33 * H + de, w: 46 * H, h: 30.66 * H, fill: L, o: I * (q > 1 && W === 0 ? 0.85 : 1) });
    }
  }), f.forEach((_, R) => {
    const q = Es(c * 313 + R * 29 + 11), J = (R + 0.5) * p, O = _.cond === "pouring" ? 16 : _.cond === "rainy" || _.cond === "hail" ? 9 : _.cond === "lightning-rainy" ? 12 : _.cond === "snowy-rainy" ? 5 : 0;
    for (let I = 0; I < O; I++) {
      let W = J + (q() - 0.5) * p * 1.05, H = 44 + q() * 36, Q = 1;
      if (i) {
        const F = ((H - 44 + ae * 0.04) % 36 + 36) % 36;
        W -= 0.21 * (F - (H - 44)), H = 44 + F, Q = Math.min(1, F / 6, (36 - F) / 6);
      }
      H *= B;
      const z = v(_.night, W, H) * Q;
      z >= 0.05 && Z.drops.push({ x: W, y: H, o: z });
    }
    const L = _.cond === "snowy" ? 11 : _.cond === "snowy-rainy" ? 6 : 0;
    for (let I = 0; I < L; I++) {
      let W = J + (q() - 0.5) * p * 1.05, H = 40 + q() * 44, Q = 1;
      if (i) {
        const F = ((H - 40 + ae * 9e-3) % 44 + 44) % 44;
        H = 40 + F, W += 1.6 * Math.sin(y * ae / 2800 + I * 1.9 + R), Q = Math.min(1, F / 6, (44 - F) / 6);
      }
      H *= B;
      const z = v(_.night, W, H) * Q;
      z >= 0.05 && Z.flakes.push({ x: W, y: H, o: z });
    }
    if (_.k === "fog") {
      const I = _.night ? "#c8ccd6" : "#ffffff", W = _.night ? 0.28 : 0.62, H = i ? 4 * Math.sin(y * ae / 8e3 + R) : 0;
      for (let Q = 0; Q < 4; Q++) Z.fogs.push({ x: J - p * 0.75 + Q % 2 * p * 0.18 + (Q % 2 ? H : -H), y: (30 + Q * 13) * B, w: p * 1.3, c: I, a: W });
    }
    if (_.k === "storm") {
      const I = (ae / 3400 + R * 0.37) % 1;
      Z.bolts.push({ x: J + (q() - 0.5) * p * 0.3 - 5, y: 36 * B, o: i && !(I < 0.05 || I > 0.09 && I < 0.12) ? 0.8 : 1 });
    }
  }), Z;
}
function Bu(n, r, i, c, f, p, v, S) {
  const { S: y, C: B, cw: ae, yb: Z, glowAt: _, soft: R, tw: q, sy: J } = n, O = new Array(i * c), L = new Uint8Array(i * c), I = new Uint8Array(i * c), W = (w, x, k, E, ne) => {
    k == null || w < 0 || x < 0 || w >= i || x >= c || (E >= 1 || E > kn(w + 5, x + 3)) && (O[x * i + w] = k, L[x * i + w] = ne);
  }, H = (w, x, k, E) => {
    for (let ne = Math.max(0, Math.floor(x - k) - 1); ne <= Math.min(c - 1, x + k + 1); ne++) for (let te = Math.max(0, Math.floor(w - k) - 1); te <= Math.min(i - 1, w + k + 1); te++) E(te, ne, te + 0.5 - w, ne + 0.5 - x);
  }, Q = (w, x, k) => {
    for (let ne = 0; ne < w.length - 1; ne++) {
      const te = (ne + x) * ae;
      if (k < te - q / 2) return [w[ne], w[ne], 0];
      if (k <= te + q / 2) return [w[ne], w[ne + 1], (k - te + q / 2) / q];
    }
    const E = w[w.length - 1];
    return [E, E, 0];
  }, z = y.filter((w) => !w.night).map((w) => w.sky), F = y.filter((w) => w.night).map((w) => w.sky), de = R / p, Ee = 16 * J / p;
  for (let w = 0; w < i; w++) {
    const x = (w + 0.5) * f, k = Z(x) / p, E = Q(z, 0.75, x), ne = Q(F, 1.25, x), te = _(x);
    for (let K = 0; K < c; K++) {
      const X = kn(w, K), oe = K + 0.5 - k, Pe = (de > 0.01 ? Mn(0.5 + oe / de) : oe > 0 ? 1 : 0) > X;
      let Ue = Pe ? E[2] > X ? E[1] : E[0] : ne[2] > X ? ne[1] : ne[0];
      (Pe ? Mn(((K + 0.5) / c - 0.45) / 0.55) * 0.7 : Mn(1 - (K + 0.5) / (c * 0.55)) * 0.7) > kn(w + 2, K + 5) && (Ue = Pe ? Pt(Ue, "#ffffff", 0.18) : Pt(Ue, "#000000", 0.25)), Pe && oe >= 0 && oe < Ee && te.a * 1.3 * (1 - oe / Ee) > kn(w + 6, K + 1) && (Ue = te.c), O[K * i + w] = Ue, I[K * i + w] = Pe ? 0 : 1;
    }
  }
  const h = Pt(B.sun, "#ffffff", 0.55), be = Pt(B.moon, "#ffffff", 0.6);
  r.stars.forEach((w) => {
    const x = Math.floor(w.x / f), k = Math.floor(w.y / p);
    if (x < 0 || k < 0 || x >= i || k >= c || !I[k * i + x] || w.o < 0.15) return;
    const E = w.o > 0.45 ? B.star : Pt(B.star, O[k * i + x], 0.5), ne = w.big && w.o > 0.6 ? Math.floor(w.size / f) : 0;
    W(x, k, E, 1, ii);
    for (let te = 1; te <= ne; te++) [[x - te, k], [x + te, k], [x, k - te], [x, k + te]].forEach((K) => {
      K[0] >= 0 && K[1] >= 0 && K[0] < i && K[1] < c && I[K[1] * i + K[0]] && W(K[0], K[1], E, 1, ii);
    });
  }), r.suns.forEach((w) => {
    const x = Math.max(1.5, w.rad / f), k = w.x / f, E = w.y / p, ne = w.halo / f * 0.85;
    if (H(k, E, ne, (te, K, X, oe) => {
      const Pe = Math.sqrt(X * X + oe * oe);
      Pe > x && Pe < ne && !I[K * i + te] && W(te, K, h, 0.3 * (1 - (Pe - x) / (ne - x)), 0);
    }), S) {
      const te = Math.floor(v / 500) % 2, K = Math.max(1, x * 0.3);
      for (let X = 0; X < 8; X++) if (X % 2 === te) for (let oe = x + 1.2; oe < x + 1.2 + K; oe += 0.7) W(Math.floor(k + Math.cos(X * Math.PI / 4) * oe), Math.floor(E + Math.sin(X * Math.PI / 4) * oe), B.sun, 1, Qs);
    }
    H(k, E, x, (te, K, X, oe) => {
      X * X + oe * oe <= x * x && W(te, K, Mn(((oe / x + 1) / 2 - 0.6) / 0.4) > kn(te, K) ? B.sunEdge : B.sun, 1, Ks);
    });
  }), r.moons.forEach((w) => {
    const x = Math.max(1.5, w.d * 0.37 / f), k = w.x / f, E = w.y / p, ne = k + 0.547 * x, te = E - 0.503 * x, K = 0.82 * x;
    H(k, E, x, (X, oe, Pe, Ue) => {
      if (Pe * Pe + Ue * Ue > x * x) return;
      const Ft = X + 0.5 - ne, lt = oe + 0.5 - te;
      Ft * Ft + lt * lt > K * K && W(X, oe, Mn((Ue + x) / (2 * x) * 1.1 - 0.1) > kn(X, oe) ? B.moon : be, 1, $s);
    });
  }), r.clouds.forEach((w) => {
    const x = Math.max(3, w.w / f), k = x * 0.6665, E = w.x / f, ne = w.y / p, te = Pt(w.fill, "#000000", 0.16);
    for (let K = Math.max(0, Math.floor(ne) - 1); K <= Math.min(c - 1, ne + k + 1); K++) for (let X = Math.max(0, Math.floor(E) - 1); X <= Math.min(i - 1, E + x + 1); X++) {
      const oe = (X + 0.5 - E) / x, Pe = (K + 0.5 - ne) / x;
      qr(oe, Pe) && W(X, K, !qr(oe, Pe + 1 / x) || Mn((Pe - 0.42) / 0.25) * 0.8 > kn(X, K) ? te : w.fill, w.o, Js);
    }
  }), r.fogs.forEach((w) => {
    const x = Math.floor(w.y / p), k = Math.max(x, Math.floor((w.y + 6 * J) / p) - 1), E = Math.floor(w.x / f), ne = Math.floor((w.x + w.w) / f);
    for (let te = x; te <= k; te++) for (let K = E; K <= ne; K++) {
      const X = (K - E) / Math.max(1, ne - E);
      W(K, te, w.c, w.a * (X < 0.25 ? X / 0.25 : X > 0.75 ? (1 - X) / 0.25 : 1), 0);
    }
  });
  const ye = Math.max(2, Math.round(9 / p));
  r.drops.forEach((w) => {
    const x = w.x / f, k = Math.floor(w.y / p);
    for (let E = 0; E < ye; E++) W(Math.floor(x - 0.208 * E * p / f), k + E, B.rain, w.o, Xs);
  });
  const He = Math.max(0, Math.round(4.4 / f / 2.6));
  return r.flakes.forEach((w) => {
    const x = Math.floor(w.x / f), k = Math.floor(w.y / p);
    W(x, k, B.snow, w.o, yn);
    for (let E = 1; E <= He; E++)
      W(x - E, k, B.snow, w.o, yn), W(x + E, k, B.snow, w.o, yn), W(x, k - E, B.snow, w.o, yn), W(x, k + E, B.snow, w.o, yn);
  }), r.bolts.forEach((w) => {
    if (f <= 3.5)
      for (let x = Math.floor(w.y / p); x <= (w.y + 24) / p; x++) for (let k = Math.floor(w.x / f); k <= (w.x + 11) / f; k++)
        jd(Ru, (k + 0.5) * f - w.x, (x + 0.5) * p - w.y) && W(k, x, B.sun, 1, mo);
    else {
      const x = Math.round(w.x / f), k = Math.round(w.y / p);
      Nu.forEach((E, ne) => E.split("").forEach((te, K) => {
        te === "#" && W(x + K, k + ne, B.sun, 1, mo);
      }));
    }
  }), { col: O, ids: L };
}
function Pu(n, r) {
  const i = r.px, c = Math.max(6, Math.round(r.width / i)), f = Math.max(6, Math.round(r.height / i)), p = r.width / c, v = r.height / f, S = r.ambient ? Math.floor((r.clock || 0) / 100) * 100 : 0, y = (R) => {
    const q = Yd(R, r);
    return Bu(q, Zd(q, { clock: S, ambient: r.ambient, seed: r.seed }), c, f, p, v, S, r.ambient);
  }, B = y(n), ae = r.reveal == null ? 1 : Mn(r.reveal);
  let Z = B.col, _ = B.ids;
  if (ae < 1) {
    const R = r.prev ? y(r.prev) : null, q = ae * (c + 12);
    Z = new Array(c * f), _ = new Uint8Array(c * f);
    for (let J = 0; J < c * f; J++) {
      const O = J % c, L = J / c | 0;
      (r.reduce ? ae : Mn((q - O) / 12)) > kn(O, L) ? (Z[J] = B.col[J], _[J] = B.ids[J]) : R ? (Z[J] = R.col[J], _[J] = R.ids[J]) : (Z[J] = null, _[J] = 255);
    }
  }
  return Ud(Z, _, c, f, { oneBit: r.oneBit, ink: r.ink, paper: r.paper, snowInk: !1 });
}
function Iu(n, r, i) {
  const c = i.width, f = i.height, p = i.reveal == null ? 1 : Mn(i.reveal), v = (_, R) => {
    const q = Yd(R, i);
    Hu(_, q, Zd(q, i));
  };
  if (n.clearRect(0, 0, c, f), p >= 1) {
    v(n, r);
    return;
  }
  if (i.prev && v(n, i.prev), i.reduce) {
    n.save(), n.globalAlpha = p, v(n, r), n.restore();
    return;
  }
  const S = n.canvas, y = S.__wxOff || (S.__wxOff = document.createElement("canvas"));
  (y.width !== S.width || y.height !== S.height) && (y.width = S.width, y.height = S.height);
  const B = y.getContext("2d");
  B.setTransform(n.getTransform()), B.clearRect(0, 0, c, f), v(B, r);
  const ae = p * (c + 64) - 64, Z = B.createLinearGradient(ae, 0, ae + 64, 0);
  Z.addColorStop(0, "rgba(0,0,0,1)"), Z.addColorStop(1, "rgba(0,0,0,0)"), B.globalCompositeOperation = "destination-in", B.fillStyle = Z, B.fillRect(0, 0, c, f), B.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(y, 0, 0), n.restore();
}
function Hu(n, r, i) {
  const { W: c, H: f, S: p, C: v, cw: S, yb: y, glowAt: B, soft: ae, tw: Z, sy: _ } = r, R = (h, be) => {
    const ye = Fr(h);
    return "rgba(" + ye[0] + "," + ye[1] + "," + ye[2] + "," + Math.max(0, Math.min(1, be)).toFixed(3) + ")";
  }, q = (h, be) => {
    const ye = n.createLinearGradient(0, 0, c, 0);
    ye.addColorStop(0, h[0]);
    for (let He = 0; He < h.length - 1; He++) {
      const w = (He + be) * S, x = (w - Z / 2) / c, k = (w + Z / 2) / c;
      x > 0 && x < 1 && ye.addColorStop(x, h[He]), k > 0 && k < 1 && ye.addColorStop(k, h[He + 1]);
    }
    return ye.addColorStop(1, h[h.length - 1]), ye;
  }, J = Math.max(24, Math.ceil(c / 4)), O = (h, be) => {
    n.beginPath();
    for (let ye = 0; ye <= J; ye++) {
      const He = c * ye / J, w = h == null ? 0 : y(He) + h;
      ye ? n.lineTo(He, w) : n.moveTo(He, w);
    }
    for (let ye = J; ye >= 0; ye--) {
      const He = c * ye / J;
      n.lineTo(He, y(He) + be);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = q(p.filter((h) => !h.night).map((h) => h.sky), 0.75), n.fillRect(0, 0, c, f);
  const L = n.createLinearGradient(0, 0, c, 0);
  for (let h = 0; h <= 64; h++) {
    const be = B(c * h / 64);
    L.addColorStop(h / 64, R(be.c, Math.min(1, be.a)));
  }
  n.fillStyle = L;
  for (let h = 0; h < 8; h++)
    n.globalAlpha = 1 - h / 8, O(h * 2 * _, (h + 1) * 2 * _);
  n.fillStyle = q(p.filter((h) => h.night).map((h) => h.sky), 1.25);
  const I = Math.max(0.5, ae), W = 6;
  n.globalAlpha = 1, O(null, -I);
  for (let h = 0; h < W; h++)
    n.globalAlpha = 1 - (h + 0.5) / W, O(-I + 2 * I * h / W, -I + 2 * I * (h + 1) / W);
  n.globalAlpha = 1;
  const H = new Path2D(Eu), Q = new Path2D(_u), z = new Path2D(Au), F = new Path2D(Du);
  n.fillStyle = v.star, i.stars.forEach((h) => {
    n.globalAlpha = h.o, h.big ? (n.save(), n.translate(h.x, h.y), n.scale(h.size, h.size), n.fill(H), n.restore()) : (n.beginPath(), n.arc(h.x, h.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const de = Pt(v.sun, "#ffffff", 0.55);
  i.suns.forEach((h) => {
    const be = n.createRadialGradient(h.x, h.y, 0, h.x, h.y, h.halo);
    be.addColorStop(0, R(de, 0.42)), be.addColorStop(0.7, R(de, 0)), n.fillStyle = be, n.beginPath(), n.arc(h.x, h.y, h.halo, 0, Math.PI * 2), n.fill();
    const ye = n.createLinearGradient(0, h.y - h.rad, 0, h.y + h.rad);
    ye.addColorStop(0.6, v.sun), ye.addColorStop(1, v.sunEdge), n.fillStyle = ye, n.beginPath(), n.arc(h.x, h.y, h.rad, 0, Math.PI * 2), n.fill();
  });
  const Ee = Pt(v.moon, "#ffffff", 0.6);
  i.moons.forEach((h) => {
    n.save(), n.translate(h.x - h.d / 2, h.y - h.d / 2), n.scale(h.d / 46, h.d / 46);
    const be = n.createLinearGradient(0, 6, 0, 40);
    be.addColorStop(0, Ee), be.addColorStop(1, v.moon), n.fillStyle = be, n.fill(Q), n.restore();
  }), i.clouds.forEach((h) => {
    n.save(), n.globalAlpha = h.o, n.translate(h.x, h.y), n.scale(h.w / 46, h.h / 30.66), n.translate(-4, -9.67), n.fillStyle = h.fill, n.fill(z), n.restore();
  }), i.fogs.forEach((h) => {
    const be = n.createLinearGradient(h.x, 0, h.x + h.w, 0);
    be.addColorStop(0, R(h.c, 0)), be.addColorStop(0.25, R(h.c, h.a)), be.addColorStop(0.75, R(h.c, h.a)), be.addColorStop(1, R(h.c, 0)), n.fillStyle = be, n.fillRect(h.x, h.y, h.w, 6 * _);
  }), n.fillStyle = v.rain, i.drops.forEach((h) => {
    n.save(), n.globalAlpha = h.o, n.translate(h.x, h.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = v.snow, i.flakes.forEach((h) => {
    n.globalAlpha = h.o, n.beginPath(), n.arc(h.x, h.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = v.sun, i.bolts.forEach((h) => {
    n.save(), n.globalAlpha = h.o, n.translate(h.x, h.y), n.fill(F), n.restore();
  }), n.restore();
}
function Fu(n, r) {
  var Xl, Ql, ed, td, nd, ad, id;
  const i = (e) => n.getElementById(e), c = i("workoutView"), f = i("workoutNameInput");
  let p = !0;
  const v = i("homeClock");
  function S() {
    v && (v.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  S(), setInterval(S, 15e3);
  const y = i("createFlow"), B = i("createMovementsSlot"), ae = i("createTimingSlot"), Z = i("createFinishSlot"), _ = i("movementStepSummary"), R = i("timingStepSummary"), q = i("finishStepSummary"), J = i("continueToTiming"), O = i("continueToFinish"), L = i("finishMoveButton");
  let I = !1, W = [];
  function H(e) {
    !e || W.some((a) => a.node === e) || W.push({ node: e, parent: e.parentNode, next: e.nextSibling });
  }
  function Q(e, a) {
    e && (H(e), a.appendChild(e));
  }
  function z() {
    [...W].reverse().forEach(({ node: e, parent: a, next: o }) => {
      a && (o && o.parentNode === a ? a.insertBefore(e, o) : a.appendChild(e));
    }), W = [];
  }
  function F(e) {
    n.querySelectorAll(".createStep").forEach((a) => {
      a.classList.toggle("active", a.dataset.createStep === e);
    }), e === "timing" && (I = !0), de();
  }
  function de() {
    var $, ee;
    if (!xt) return;
    Ie[Ne];
    const e = _t.filter((Y) => !Y.hidden), a = e.filter((Y) => Y.kind !== "rest").length, o = e.filter((Y) => Y.kind === "rest").length;
    _.textContent = a ? a + " movement" + (a === 1 ? "" : "s") + (o ? " · " + o + " rest" + (o === 1 ? "" : "s") : "") : "No movements yet";
    const l = a > 0, u = n.querySelector('[data-open-step="timing"]'), b = n.querySelector('[data-open-step="finish"]');
    u.disabled = !l, J.disabled = !l, R.textContent = l ? Dn(x.value) + " · " + It(k.value) + " movement · " + It(E.value) + " rest" : "Add a movement first", b.disabled = !(l && I);
    const C = ((f == null ? void 0 : f.value) || "").trim(), D = [];
    ($ = i("includeWarmupPreset")) != null && $.checked && D.push("warm-up"), (ee = i("includeCooldownPreset")) != null && ee.checked && D.push("cooldown"), q.textContent = C ? C + (D.length ? " · " + D.join(" + ") : "") : D.length ? D.join(" + ") : "Name and optional extras";
  }
  function Ee() {
    var xe, Oe, Ce;
    y.hidden = !1, I = !1;
    const e = n.querySelector(".editNameRow"), a = i("createMoveOptions"), o = n.querySelector(".timeTiles"), l = i("routineSummaryModal"), u = n.querySelector(".tempoRevealRow"), b = i("tempoExperiment"), C = (xe = i("warmupList")) == null ? void 0 : xe.closest("section"), D = i("movementCreatorLaunch"), $ = i("movementCreator"), ee = (Oe = i("strengthList")) == null ? void 0 : Oe.closest("section"), Y = (Ce = i("cooldownList")) == null ? void 0 : Ce.closest("section");
    [a == null ? void 0 : a.querySelector(".createExtras"), C, D, $, ee, Y].forEach((ve) => ve && Q(ve, B)), [a, o, l, u, b].forEach((ve) => Q(ve, ae)), Q(e, Z), F("movements"), de();
  }
  function h() {
    z(), y.hidden = !0, n.querySelectorAll(".createStep").forEach((e) => e.classList.remove("active"));
  }
  n.querySelectorAll("[data-open-step]").forEach((e) => e.addEventListener("click", () => {
    e.disabled || F(e.dataset.openStep);
  })), J.addEventListener("click", () => {
    J.disabled || F("timing");
  }), O.addEventListener("click", () => F("finish")), L.addEventListener("click", () => i("saveWorkoutEdit").click());
  const be = { home: i("homeView"), workout: i("workoutView"), settings: i("settingsView") }, ye = i("homeNav"), He = i("settingsNav");
  function w(e) {
    Object.entries(be).forEach(([a, o]) => o.classList.toggle("active", a === e)), ye.classList.toggle("active", e === "home"), He.classList.toggle("active", e === "settings"), e === "home" && setTimeout(hi, 400), e === "settings" && (requestAnimationFrame(() => Do(n.querySelector(".tab.active"), !1)), pr());
  }
  const x = i("totalTime"), k = i("workTime"), E = i("restTime"), ne = i("totalOut"), te = i("workOut"), K = i("restOut"), X = i("totalFill"), oe = i("workFill"), Pe = i("restFill"), Ue = i("roundsInput"), Ft = i("roundsFill"), lt = i("roundsOut"), nn = i("totalLabel"), et = i("routineSummaryModal"), At = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let jt = At.map((e) => ({ ...e })), _t = [
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
  const sa = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let an = sa.map((e) => ({ ...e }));
  const Ct = {
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
  }, me = on(r.data), Ie = me.profiles;
  let Ne = Ie[me.selected] ? me.selected : me.order.find((e) => Ie[e]) || "kettlebell";
  function on(e) {
    const a = e && typeof e == "object" ? JSON.parse(JSON.stringify(e)) : {}, o = a.profiles && Object.keys(a.profiles).length ? a.profiles : JSON.parse(JSON.stringify(Ct)), l = (Array.isArray(a.order) ? a.order : Object.keys(o)).filter((u) => o[u]);
    return Object.keys(o).forEach((u) => {
      l.includes(u) || l.push(u);
    }), {
      v: 1,
      profiles: o,
      order: l,
      selected: a.selected || l[0],
      history: Array.isArray(a.history) ? a.history : [],
      checkins: (Array.isArray(a.checkins) ? a.checkins : oi(a.energy)).map(ri),
      settings: { ...a.settings || {} }
    };
  }
  function oi(e) {
    if (!Array.isArray(e)) return [];
    const a = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], o = [];
    return e.forEach((l) => {
      const u = new Date(l.at);
      if (isNaN(u)) return;
      const b = u.getFullYear() + "-" + String(u.getMonth() + 1).padStart(2, "0") + "-" + String(u.getDate()).padStart(2, "0"), C = u.getHours() < 14 ? "morning" : "evening";
      if (o.some(($) => $.date === b && $.slot === C)) return;
      const D = a.indexOf(l.value) + 1;
      D > 0 && o.push({ date: b, slot: C, mood: null, energy: D, at: l.at });
    }), o;
  }
  function ri(e) {
    if (e.scale === 100) return e;
    const a = (o) => o == null ? null : Math.round((Number(o) - 1) / 5 * 100);
    return { ...e, mood: a(e.mood), energy: a(e.energy), scale: 100 };
  }
  function rn() {
    xt || (me.selected = Ne, me.order = me.order.filter((e) => Ie[e] && e !== Rt), r.save(me));
  }
  function rt() {
    return me.settings;
  }
  function Cn(e) {
    const a = Ie[e];
    if (!a) return;
    Ne = e;
    const o = i("workoutNameInput");
    if (o && (o.value = a.name), x.value = a.total, k.value = a.work, E.value = a.rest, Ue.value = a.rounds || 1, a.customSequence) {
      const l = (a.sequence || []).map((b) => ({ ...b })), u = (b) => l.filter((C) => C.presetRole === b).map(({ presetRole: C, ...D }) => D);
      jt = (a.warmup || u("warmup")).map((b) => ({ ...b })), an = (a.cooldown || u("cooldown")).map((b) => ({ ...b })), _t = l.filter((b) => !b.presetRole), M(a.preset || "movement", !1);
    } else
      x.min = 3, x.max = 40, x.step = 1, k.min = 20, k.max = 60, k.step = 5, E.min = 5, E.max = 30, E.step = 5, jt = (a.warmup || At).map((l) => ({ ...l })), an = (a.cooldown || sa).map((l) => ({ ...l })), _t = a.strength.map((l) => Array.isArray(l) ? (([u, b, C, D = !1]) => ({ id: u, name: b, group: C, kind: "work", hidden: !!D }))(l) : { ...l });
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((l) => l.classList.toggle("active", l.dataset.workout === e)), G();
  }
  function fo(e, a, o) {
    const l = e.getBoundingClientRect(), u = l.width / 2, b = l.height / 2, C = a - u, D = o - b;
    let $ = 1 / 0, ee = 1 / 0;
    C !== 0 && ($ = u / Math.abs(C)), D !== 0 && (ee = b / Math.abs(D));
    const Y = Math.min(Math.max(1 / Math.min($, ee), 0), 1);
    let j = Math.atan2(D, C) * (180 / Math.PI) + 90;
    return j < 0 && (j += 360), { edge: Y, angle: j };
  }
  function Sn(e, a, o = !1) {
    const l = e.getBoundingClientRect(), u = a.clientX - l.left, b = a.clientY - l.top, { edge: C, angle: D } = fo(e, u, b), $ = o ? 100 : C * 100;
    e.style.setProperty("--edge-proximity", $.toFixed(3)), e.style.setProperty("--cursor-angle", D.toFixed(3) + "deg"), e.classList.toggle("borderGlowActive", o || $ >= 30);
  }
  function xa(e) {
    e.addEventListener("pointermove", (o) => Sn(e, o, !1)), e.addEventListener("pointerenter", (o) => Sn(e, o, !1)), e.addEventListener("pointerdown", (o) => Sn(e, o, !0));
    const a = () => {
      e.classList.remove("borderGlowActive"), e.style.setProperty("--edge-proximity", "0");
    };
    e.addEventListener("pointerleave", a), e.addEventListener("pointerup", a), e.addEventListener("pointercancel", a);
  }
  xa(i("addWorkoutPanel"));
  let xt = !1, Rt = null;
  function Fe(e) {
    return String(e ?? "").replace(/[&<>"']/g, (a) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[a]);
  }
  function Ha(e) {
    return e.summary ? e.summary : e.customSequence ? Dn(e.total) + " · custom move" : Dn(e.total) + " · " + It(e.work) + " / " + It(e.rest) + " · warm-up + cooldown";
  }
  function Ot(e, a) {
    var b;
    const o = document.createElement("article");
    o.className = "workoutPanel", o.dataset.workout = e, o.tabIndex = 0;
    const l = a.activityCount ?? (((b = a.sequence) == null ? void 0 : b.length) || 0);
    o.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + Fe(a.name) + '</div><div class="sub">' + Fe(Ha(a)) + '</div><span class="sourceTag">' + Fe(a.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (l ? l + " activities" + ((a.rounds || 1) > 1 ? " × " + a.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + Fe(a.name) + "</div></div>";
    const u = i("addWorkoutPanel");
    return i("workoutGallery").insertBefore(o, u), xa(o), o.addEventListener("click", (C) => {
      C.target.closest("button") || Cn(e);
    }), o.addEventListener("keydown", (C) => {
      (C.key === "Enter" || C.key === " ") && !C.target.closest("button") && (C.preventDefault(), Cn(e));
    }), o.querySelector(".seeWorkoutBtn").addEventListener("click", (C) => {
      C.stopPropagation(), Cn(e), ft(!1);
    }), o.querySelector(".startWorkoutBtn").addEventListener("click", (C) => {
      C.stopPropagation(), Cn(e), Ec();
    }), o;
  }
  function Hn() {
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.remove()), me.order.forEach((e) => {
      Ie[e] && Ot(e, Ie[e]);
    }), n.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.classList.toggle("active", e.dataset.workout === Ne));
  }
  Hn(), i("addWorkoutPanel").addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), i("addWorkoutPanel").click());
  }), i("addWorkoutPanel").addEventListener("click", () => {
    xt = !0, Rt = "custom-" + Date.now(), Ie[Rt] = {
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
    }, Cn(Rt), ft(!0);
  });
  let pe = [], ze = 0, St = 0, Kn = 1, Qt = !1, Nt = null, En = null, Wt = !1, $n = me.settings.upcomingCount ?? "all", Fn = "movement";
  function ya(e, a, o) {
    return (Number(e) - a) / (o - a) * 100;
  }
  function It(e) {
    const a = Math.max(0, Number(e) || 0);
    return a >= 3600 && a % 3600 === 0 ? a / 3600 + " hr" : a >= 60 && a % 60 === 0 ? a / 60 + " min" : a >= 60 ? Math.round(a / 60) + " min" : Math.round(a) + " sec";
  }
  function Dn(e) {
    const a = Math.max(0, Number(e) || 0);
    return a >= 60 && a % 60 === 0 ? a / 60 + " hr" : a >= 60 ? Math.floor(a / 60) + " hr " + a % 60 + " min" : a + " min";
  }
  function Gt() {
    X.style.width = ya(x.value, Number(x.min), Number(x.max)) + "%", oe.style.width = ya(k.value, Number(k.min), Number(k.max)) + "%", Pe.style.width = ya(E.value, Number(E.min), Number(E.max)) + "%", te.textContent = It(k.value), K.textContent = It(E.value);
    const e = Number(Ue.value) || 1;
    Ft.style.width = ya(e, 1, 10) + "%", nn.textContent = e > 1 ? "Time per round" : "Total time";
  }
  function sn(e) {
    return e.filter((a) => !a.hidden);
  }
  function Jn(e) {
    const a = Math.max(0, Math.round(Number(e) || 0)), o = Math.floor(a / 3600), l = Math.floor(a % 3600 / 60), u = a % 60;
    return (o ? o + ":" + String(l).padStart(2, "0") : l) + ":" + String(u).padStart(2, "0");
  }
  function ho(e) {
    let a;
    try {
      a = new URL(String(e || "").trim());
    } catch {
      return null;
    }
    const o = a.hostname.replace(/^(www|m|music)\./, "");
    let l = null;
    if (o === "youtu.be") l = a.pathname.slice(1).split("/")[0];
    else if (/^youtube(-nocookie)?\.com$/.test(o))
      if (a.pathname === "/watch") l = a.searchParams.get("v");
      else {
        const D = a.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        D && (l = D[2]);
      }
    if (!l || !/^[\w-]{11}$/.test(l)) return null;
    const u = (D) => {
      if (!D) return 0;
      if (/^\d+$/.test(D)) return Number(D);
      const $ = D.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return $ ? (Number($[1]) || 0) * 3600 + (Number($[2]) || 0) * 60 + (Number($[3]) || 0) : 0;
    }, b = u(a.searchParams.get("t") || a.searchParams.get("start")), C = u(a.searchParams.get("end"));
    return { id: l, start: b, end: C > b ? C : null };
  }
  function la(e, a) {
    if (e.useVideoLength === !1) return Math.max(5, Number(e.duration) || a || 300);
    const o = Number(e.start) || 0, l = Number(e.end) || Number(e.videoDuration) || 0;
    return l > o ? Math.round(l - o) : Number(e.duration) || 300;
  }
  function ka(e, a) {
    const o = Math.max(0, Number(e) || 0);
    return Math.round(a === "hour" ? o * 3600 : a === "min" ? o * 60 : o);
  }
  function M(e, a = !0) {
    Fn = e, n.querySelectorAll(".createPresetBtn").forEach((l) => l.classList.toggle("active", l.dataset.movePreset === e));
    const o = Ie[Ne];
    o && (o.preset = e), e === "work" ? (x.min = 30, x.max = 480, x.step = 30, k.min = 300, k.max = 7200, k.step = 300, E.min = 60, E.max = 1800, E.step = 60, a && (x.value = 60, k.value = 1500, E.value = 300), i("addMovementUnit").value = "min", i("addMovementDuration").value = 25, i("addRestUnit").value = "min", i("addRestDuration").value = 5) : (x.min = 3, x.max = 40, x.step = 1, k.min = 20, k.max = 60, k.step = 5, E.min = 5, E.max = 30, E.step = 5, a && (x.value = 20, k.value = 45, E.value = 15), i("addMovementUnit").value = "sec", i("addMovementDuration").value = 45, i("addRestUnit").value = "sec", i("addRestDuration").value = 30), Gt();
  }
  function A(e, a) {
    const o = Fn === "work";
    return e.map((l, u) => ({ ...l, id: a + "-" + u + "-" + Date.now().toString(36), useGlobalTiming: !o, duration: o ? 60 : Number(k.value) }));
  }
  function N() {
    const e = Ie[Ne];
    e != null && e.customSequence && (e.includeWarmup = i("includeWarmupPreset").checked, e.includeCooldown = i("includeCooldownPreset").checked, e.includeWarmup && !jt.length && (jt = A(At, "warm")), e.includeCooldown && !an.length && (an = A(sa, "cool")), G());
  }
  function V() {
    const e = i("upcomingCountSetting");
    if (!e) return;
    const a = Math.max(1, pe.length - 1), o = $n;
    e.innerHTML = "";
    for (let b = 1; b <= a; b++) {
      const C = document.createElement("option");
      C.value = String(b), C.textContent = String(b), e.appendChild(C);
    }
    const l = document.createElement("option");
    l.value = "all", l.textContent = "All", e.appendChild(l);
    const u = o === "all" ? "all" : String(Math.min(Number(o) || 1, a));
    e.value = u, $n = u === "all" ? "all" : Number(u);
  }
  function G() {
    Number(x.value) * 60;
    const e = Number(k.value), a = Number(E.value), o = Ie[Ne], l = !!(o != null && o.customSequence), u = (l ? !o.includeWarmup : o != null && o.warmupOff) ? [] : sn(jt), b = sn(_t), C = l && !o.includeCooldown ? [] : sn(an);
    if (o && (o.total = Number(x.value), o.work = e, o.rest = a, o.rounds = Number(Ue.value) || 1, o.customSequence ? (o.sequence = _t.map((he) => ({ ...he })), o.warmup = jt.map((he) => ({ ...he })), o.cooldown = an.map((he) => ({ ...he }))) : (o.strength = _t.map((he) => ({ ...he })), o.warmup = jt.map((he) => ({ ...he })), o.cooldown = an.map((he) => ({ ...he })))), o != null && o.customSequence) {
      const he = [...u.map((Je) => ({ ...Je, section: "warmup" })), ...b, ...C.map((Je) => ({ ...Je, section: "cooldown" }))].map((Je) => {
        if (Je.kind === "video") return { ...Je, duration: la(Je, e), rest: 0 };
        if (Je.kind === "rest") {
          const Zt = Je.useGlobalTiming === !0 ? a : Number(Je.duration) || a;
          return { ...Je, duration: Zt, rest: 0 };
        }
        const Yt = Je.useGlobalTiming === !1 && Number(Je.duration) || e;
        return { ...Je, duration: Yt, rest: 0 };
      });
      o.autoRest && Number(o.autoRestDuration) > 0 ? (pe = [], he.forEach((Je, Yt) => {
        pe.push(Je);
        const Zt = he[Yt + 1];
        Je.kind !== "rest" && Zt && Zt.kind !== "rest" && pe.push({
          id: "auto-rest-" + Yt,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(o.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : pe = he;
    } else
      pe = [...u.map((he) => ({ ...he, section: "warmup" })), ...b, ...C.map((he) => ({ ...he, section: "cooldown" }))].map((he) => he.kind === "video" ? { ...he, duration: la(he, e), rest: 0 } : he.kind === "rest" ? { ...he, duration: he.useGlobalTiming === !0 ? a : Number(he.duration) || a, rest: 0 } : { ...he, duration: he.useGlobalTiming === !1 && Number(he.duration) || e, rest: a }), pe.forEach((he, Je) => {
        var Yt;
        ((Yt = pe[Je + 1]) == null ? void 0 : Yt.kind) === "rest" && (he.rest = 0);
      }), pe.length && (pe[pe.length - 1].rest = 0);
    const D = Math.max(1, Math.min(10, Number(Ue.value) || 1)), $ = pe, ee = (he) => D <= 1 ? null : he.section === "warmup" || he.presetRole === "warmup" ? "first" : he.section === "cooldown" || he.presetRole === "cooldown" ? "last" : he.kind === "video" && (he.videoRounds === "first" || he.videoRounds === "last") ? he.videoRounds : null, Y = (he) => !!ee(he), j = $.filter((he) => !Y(he)), xe = $.filter(Y), Oe = j.length, Ce = j.reduce((he, Je) => he + Je.duration + Je.rest, 0), ve = xe.reduce((he, Je) => he + Je.duration + Je.rest, 0), fe = [
      xe.some((he) => he.section === "warmup" || he.presetRole === "warmup") && "warm-up",
      xe.some((he) => he.section === "cooldown" || he.presetRole === "cooldown") && "cooldown",
      xe.some((he) => he.kind === "video" && !he.section && !he.presetRole) && "video"
    ].filter(Boolean), nt = fe.length > 1 ? fe.slice(0, -1).join(", ") + " & " + fe[fe.length - 1] : fe[0] || "";
    pe = [];
    const at = (he, Je) => {
      const Yt = ee(he);
      return !Yt || (Yt === "first" ? Je === 1 : Je === D);
    };
    for (let he = 1; he <= D; he++)
      if ($.filter((Je) => at(Je, he)).forEach((Je, Yt) => pe.push({ ...Je, id: Je.id + (D > 1 ? "-r" + he : ""), round: he, roundIndex: Yt })), he < D && Oe)
        if (o != null && o.customSequence)
          pe.push({ id: "round-break-" + he, name: "Rest", group: "Round " + (he + 1) + " next", kind: "rest", hidden: !1, duration: a, rest: 0, round: he, roundIndex: Oe, roundBreak: !0 });
        else {
          const Je = pe[pe.length - 1];
          Je.rest = a, Je.roundBreakAfter = !0;
        }
    Gt();
    const Te = pe.reduce((he, Je) => he + Je.duration + Je.rest, 0), ot = Math.round(Ce / 60), gt = Math.round(Te / 60), $e = D > 1 ? Dn(ot) + " × " + D + " rounds" + (ve ? " + " + It(ve) + " " + nt : "") + " (" + Dn(gt) + ")" : Dn(gt), je = [u.length ? "warm-up" : "", C.length ? "cooldown" : ""].filter(Boolean), Vt = o != null && o.customSequence ? $e + " · " + Oe + " items" + (je.length && !(D > 1 && ve) ? " · " + je.join(" + ") : "") : $e + " · " + It(e) + " / " + It(a) + (je.length && !(D > 1 && ve) ? " · " + je.join(" + ") : "");
    ne.textContent = It(Ce);
    const en = pe.filter((he) => !he.roundBreak).length, Tt = D > 1 ? en + " activities · " + D + " rounds" : Oe + " activities";
    lt.textContent = D > 1 ? D + " rounds · " + Dn(gt) + " total" : "1 round", i("roundsCount").textContent = D, n.querySelectorAll("[data-rounds-step]").forEach((he) => {
      he.disabled = Number(he.dataset.roundsStep) < 0 ? D <= 1 : D >= 10;
    }), o && (o.summary = Vt, o.activityCount = Oe);
    const ti = n.querySelector(".workoutPanel.active .sub");
    ti && (ti.textContent = Vt), et.textContent = Vt, ci(), n.querySelectorAll(".workoutPanel.active .activityCount").forEach((he) => he.textContent = Tt), Gt(), yt(), bo(), Fa(), V(), xt && de(), be.workout.classList.contains("active") && !Nt && is();
  }
  const ue = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', ce = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', we = {
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
  }, le = (e) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (we[e] || "") + "</svg>";
  n.querySelectorAll("[data-icon]").forEach((e) => {
    e.innerHTML = le(e.dataset.icon);
  });
  let Me = null, Re = null;
  function Ke(e) {
    return e = Math.max(1, Number(e) || 0), e >= 3600 && e % 3600 === 0 ? { value: e / 3600, unit: "hour" } : e >= 60 && e % 60 === 0 ? { value: e / 60, unit: "min" } : { value: e, unit: "sec" };
  }
  function Ye(e = !1) {
    const a = n.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    a && (a.focus({ preventScroll: !0 }), e && a.select());
  }
  function Ae(e, a, o = {}) {
    const l = e.kind === "rest", u = e.kind === "video", b = u ? e.useVideoLength !== !1 : l ? e.useGlobalTiming === !0 : e.useGlobalTiming !== !1, C = Number(l ? E.value : k.value), D = Ke(u ? e.useVideoLength === !1 ? e.duration : la({ ...e, useVideoLength: !0 }) : b ? C : e.duration || C), $ = u && (Number(e.videoDuration) > 0 || Number(e.end) > 0), ee = u ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + Fe(e.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Fe(e.autoName ? "" : e.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([Te, ot]) => '<option value="' + Te + '"' + ((e.videoRounds || "every") === Te ? " selected" : "") + ">" + ot + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Fe(e.name) + '" placeholder="' + (l ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + Fe(e.group) + '" placeholder="' + (l ? "Rest" : "e.g. Glutes + legs") + '"></label>', Y = u ? "Play the whole " + (Number(e.start) > 0 || Number(e.end) > 0 ? "clip" : "video") + ($ ? " · " + Jn(la({ ...e, useVideoLength: !0 })) : "") : "Use global timing · " + It(C), j = document.createElement("div");
    j.className = "moveRow editing" + (o.sheet ? " inSheet" : ""), j.dataset.index = a, j.dataset.id = e.id;
    const xe = o.isNew ?? (Re == null ? void 0 : Re.item) === e, Oe = o.sheet ? '<div class="moveEditActions sheetActions">' + (xe ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (e.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + Fe(e.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (xe ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    j.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (u ? " videoFields" : "") + '">' + ee + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (b ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + Fe(Y) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + D.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((Te) => '<option value="' + Te + '"' + (Te === D.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[Te] + "</option>").join("") + "</select></div></div>" + Oe + "</div>";
    const Ce = (Te) => j.querySelector("[data-f=" + Te + "]"), ve = () => {
      const Te = Ce("global").checked;
      Ce("dur").disabled = Te, Ce("unit").disabled = Te, j.querySelector(".creatorDurationRow").classList.toggle("isDisabled", Te);
    };
    Ce("global").addEventListener("change", ve), ve();
    const fe = () => {
      var Te;
      if (o.sheet) {
        (Te = o.onCancel) == null || Te.call(o);
        return;
      }
      xe && mt(), Me = null, G();
    }, nt = () => {
      var gt;
      if (u) {
        at();
        return;
      }
      const Te = Ce("name").value.trim();
      if (!Te) {
        Ce("name").focus();
        return;
      }
      e.name = Te, e.group = Ce("group").value.trim() || (l ? "Rest" : "Movement");
      const ot = Ce("global").checked;
      if (e.useGlobalTiming = ot, ot || (e.duration = Math.max(l ? 5 : 1, ka(Ce("dur").value, Ce("unit").value))), o.sheet) {
        (gt = o.onSaved) == null || gt.call(o);
        return;
      }
      xe && (Re = null), Me = null, G(), kt(xe ? l ? "Rest added" : "Movement added" : "Movement updated");
    }, at = () => {
      var je;
      const Te = Ce("url").value.trim(), ot = ho(Te);
      if (!ot) {
        Ce("urlError").hidden = !1, Ce("url").classList.add("invalid"), Ce("url").focus();
        return;
      }
      const gt = ot.id !== e.videoId;
      e.url = Te, e.videoId = ot.id, e.start = ot.start, e.end = ot.end, gt && (e.videoDuration = null, e.videoError = null);
      const $e = Ce("name").value.trim();
      e.autoName = !$e, e.name = $e || (gt ? "" : e.name) || e.videoTitle || "YouTube video", e.group = "Video", e.videoRounds = Ce("rounds").value, e.useVideoLength = Ce("global").checked, e.useVideoLength || (e.duration = Math.max(5, ka(Ce("dur").value, Ce("unit").value))), o.sheet ? (je = o.onSaved) == null || je.call(o) : (xe && (Re = null), Me = null, G(), kt(xe ? "Video added" : "Video updated")), (gt || !e.videoDuration || e.autoName && !e.videoTitle) && zc(e);
    };
    if (u && Ce("url").addEventListener("input", () => {
      Ce("urlError").hidden = !0, Ce("url").classList.remove("invalid");
    }), j.querySelector("[data-a=cancel]").addEventListener("click", fe), j.querySelector("[data-a=save]").addEventListener("click", nt), o.sheet && !xe) {
      j.querySelector("[data-a=hide]").addEventListener("click", () => {
        var ot;
        return (ot = o.onHide) == null ? void 0 : ot.call(o);
      });
      const Te = j.querySelector("[data-a=remove]");
      Eo(Te, Te.querySelector(".removeFill"), 1200, () => {
        var ot;
        return (ot = o.onRemove) == null ? void 0 : ot.call(o);
      });
    }
    return j.addEventListener("keydown", (Te) => {
      Te.key === "Escape" && (Te.preventDefault(), Te.stopPropagation(), fe()), Te.key === "Enter" && Te.target.matches("input") && (Te.preventDefault(), nt());
    }), j;
  }
  function We(e, a) {
    const o = i(a);
    o.innerHTML = "", e.forEach((l, u) => {
      if (l === Me && !ca()) {
        o.appendChild(Ae(l, u));
        return;
      }
      const b = document.createElement("div");
      b.className = "moveRow" + (l.hidden ? " hidden" : "") + (l.kind === "rest" ? " restItem" : "") + (l.kind === "video" ? " videoItem" : "") + (cs(l) ? " noMeta" : ""), b.dataset.index = u, b.dataset.id = l.id;
      const C = l.kind === "rest" ? l.useGlobalTiming === !0 ? "Global timing" : It(l.duration) : l.useGlobalTiming === !1 ? It(l.duration) : "Global timing", D = l.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", $ = l.kind === "video" ? l.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (l.useVideoLength === !1 ? "stops after " + It(l.duration) : Number(l.videoDuration) > 0 || Number(l.end) > 0 ? Jn(la(l)) : "plays to the end") + (l.videoRounds === "first" ? " · first round only" : l.videoRounds === "last" ? " · last round only" : "") : l.group + " · " + C, ee = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + Fe(l.name) + '. Drag, or use the up and down arrow keys">' + ue + "</button>", Y = '<div class="moveText"><div class="moveItemName">' + Fe(l.name) + D + '</div><div class="moveMeta">' + Fe($) + "</div></div>", j = (Ce) => Ce.addEventListener("keydown", (ve) => {
        var at, Te;
        if (ve.key !== "ArrowUp" && ve.key !== "ArrowDown") return;
        ve.preventDefault();
        const fe = e.indexOf(l), nt = fe + (ve.key === "ArrowUp" ? -1 : 1);
        nt < 0 || nt >= e.length || (e.splice(fe, 1), e.splice(nt, 0, l), G(), (Te = (at = i(a).children[nt]) == null ? void 0 : at.querySelector(".dragHandle")) == null || Te.focus());
      });
      if (ca()) {
        b.classList.add("phoneRow"), b.tabIndex = 0, b.setAttribute("role", "button"), b.setAttribute("aria-label", "Edit " + (l.name || "step")), b.innerHTML = ee + Y + '<span class="rowChevron" aria-hidden="true">›</span>';
        const Ce = b.querySelector(".dragHandle");
        Ce.addEventListener("pointerdown", (ve) => st(ve, b, o, e)), j(Ce), b.addEventListener("click", (ve) => {
          ve.target.closest(".dragHandle") || Zo(l, e);
        }), b.addEventListener("keydown", (ve) => {
          ve.key === "Enter" && ve.target === b && (ve.preventDefault(), Zo(l, e));
        }), o.appendChild(b);
        return;
      }
      b.innerHTML = ee + Y + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + Fe(l.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (l.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + Fe(l.name) + '"><span class="removeFill"></span><span class="removeLabel">' + ce + "</span></button></div>", b.querySelector(".editBtn").addEventListener("click", () => {
        mt(), Me = l, G(), Ye();
      }), b.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        l.hidden = !l.hidden, G();
      });
      const xe = b.querySelector(".removeBtn");
      Eo(xe, xe.querySelector(".removeFill"), 1200, () => {
        const Ce = e.indexOf(l);
        Ce < 0 || (e.splice(Ce, 1), G(), kt("Removed " + l.name, { label: "Undo", run: () => {
          e.splice(Math.min(Ce, e.length), 0, l), G();
        } }));
      });
      const Oe = b.querySelector(".dragHandle");
      Oe.addEventListener("pointerdown", (Ce) => st(Ce, b, o, e)), j(Oe), o.appendChild(b);
    });
  }
  const Se = () => {
    var e;
    return (e = window.matchMedia) == null ? void 0 : e.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, Ge = (e) => {
    var a;
    try {
      (a = navigator.vibrate) == null || a.call(navigator, e);
    } catch {
    }
  };
  function st(e, a, o, l) {
    if (e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const u = e.currentTarget, b = e.pointerId, C = !Se();
    try {
      u.setPointerCapture(b);
    } catch {
    }
    const D = a.closest(".exerciseScroller") || Xn(a), $ = o.style.position;
    o.style.position = "relative";
    const ee = [...o.children].filter((Xe) => Xe.classList.contains("moveRow")), Y = ee.indexOf(a), j = parseFloat(getComputedStyle(o).rowGap) || 8, xe = a.offsetHeight, Oe = xe + j, Ce = ee.map((Xe) => Xe.offsetTop), ve = ee.map((Xe) => Xe.offsetHeight), fe = () => o.getBoundingClientRect().top, nt = o.getBoundingClientRect().width, at = e.clientY - (fe() + Ce[Y]), Te = e.clientX;
    let ot = e.clientY, gt = e.clientX, $e = fe() + Ce[Y], je = 0, Vt = 0, en = 0, Tt = 1, ti = 0, he = Y, Je = !1, Yt = 0, Zt = !1, Sr = !1, ao = Ce[Y];
    o.classList.add("reordering"), a.classList.add("dragging"), a.style.transition = "none", Ge(8);
    const Lr = () => {
      const Xe = ot - at + xe / 2 - fe();
      let dt = 0;
      return ee.forEach((Mt, bn) => {
        bn !== Y && Xe > Ce[bn] + ve[bn] / 2 && dt++;
      }), dt;
    }, Tr = () => {
      ee.forEach((Xe, dt) => {
        if (dt === Y) return;
        const Mt = Y < he && dt > Y && dt <= he ? -Oe : Y > he && dt >= he && dt < Y ? Oe : 0;
        Xe.style.transform = Mt ? "translateY(" + Mt + "px)" : "";
      });
    }, Wo = () => {
      const Xe = o.getBoundingClientRect(), dt = Math.abs(gt - Te) > Math.max(80, nt * 0.3) || gt < Xe.left - 24 || gt > Xe.right + 24;
      dt !== Je && (Je = dt, a.classList.toggle("willReturn", dt), Ge(dt ? 10 : 4));
      const Mt = Je ? Y : Lr();
      Mt !== he && (he = Mt, Tr(), Je || Ge(4));
    }, ni = () => {
      if (he === Y) return Ce[Y];
      const Xe = ee.filter((Mt, bn) => bn !== Y);
      let dt = Ce[0];
      for (let Mt = 0; Mt < he; Mt++) dt += Xe[Mt].offsetHeight + j;
      return dt;
    }, io = () => {
      const Xe = C ? Math.min(Math.abs(je) / 40, 1) : 0, dt = C && !Zt ? Math.max(-3, Math.min(3, en * 0.6)) : 0;
      a.style.transform = "translate(" + Vt.toFixed(2) + "px," + ($e - (fe() + Ce[Y])).toFixed(2) + "px) rotate(" + dt.toFixed(2) + "deg) scale(" + (Tt * (1 - 0.04 * Xe)).toFixed(4) + "," + (Tt * (1 + 0.06 * Xe)).toFixed(4) + ")";
    }, Ze = () => {
      Yt = requestAnimationFrame(Ze);
      const Xe = gt - Te, dt = Zt ? fe() + ao : ot - at, Mt = Zt ? 0 : Je ? Xe * 0.9 : Math.max(-22, Math.min(22, Xe * 0.22)), bn = Zt ? 1 : Je ? 0.97 : 1.035;
      if (!C) {
        $e = dt, Vt = Zt ? 0 : Mt, Tt = 1, io(), Zt && Dt();
        return;
      }
      const mu = Zt ? 0.24 : 0.2, fu = Zt ? 0.62 : 0.68;
      je = (je + (dt - $e) * mu) * fu, $e += je, en = (en + (Mt - Vt) * 0.16) * 0.7, Vt += en, ti = (ti + (bn - Tt) * 0.22) * 0.6, Tt += ti, io(), Zt && Math.abs(je) < 0.15 && Math.abs(dt - $e) < 0.5 && Math.abs(Vt) < 0.5 && Math.abs(Tt - 1) < 3e-3 && Dt();
    }, bt = setInterval(() => {
      if (!D || Zt) return;
      const Xe = D.getBoundingClientRect(), dt = 56, Mt = ot < Xe.top + dt ? -10 : ot > Xe.bottom - dt ? 10 : 0;
      Mt && (D.scrollTop += Mt, Wo());
    }, 30);
    function Dt() {
      if (Sr) return;
      Sr = !0, cancelAnimationFrame(Yt);
      const Xe = he !== Y, dt = a.dataset.id;
      if (o.classList.remove("reordering"), ee.forEach((bn) => {
        bn.style.transition = "none", bn.style.transform = "";
      }), a.classList.remove("dragging", "willReturn"), o.style.position = $, Xe) {
        const [bn] = l.splice(Y, 1);
        l.splice(he, 0, bn);
      }
      G();
      const Mt = dt && o.querySelector('.moveRow[data-id="' + dt + '"]');
      Mt && C && Mt.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), Xe && kt("Order saved");
    }
    const Kt = (Xe) => {
      if (Xe.pointerId === b) {
        if (Xe.pointerType === "mouse" && Xe.buttons === 0) {
          Pn();
          return;
        }
        ot = Xe.clientY, gt = Xe.clientX, Wo();
      }
    }, vn = (Xe) => {
      Xe.pointerId === b && Pn();
    };
    function Pn() {
      Zt || (window.removeEventListener("pointermove", Kt, !0), window.removeEventListener("pointerup", vn, !0), window.removeEventListener("pointercancel", vn, !0), u.removeEventListener("lostpointercapture", Pn), clearInterval(bt), Je && he !== Y && (he = Y, Tr()), ao = ni(), Zt = !0, Ge(6), setTimeout(Dt, 800));
    }
    window.addEventListener("pointermove", Kt, !0), window.addEventListener("pointerup", vn, !0), window.addEventListener("pointercancel", vn, !0), u.addEventListener("lostpointercapture", Pn), Yt = requestAnimationFrame(Ze), io();
  }
  function yt() {
    var u, b, C, D;
    const e = Ie[Ne], a = (u = i("warmupList")) == null ? void 0 : u.closest("section"), o = (b = i("cooldownList")) == null ? void 0 : b.closest("section"), l = (D = (C = i("strengthList")) == null ? void 0 : C.closest("section")) == null ? void 0 : D.querySelector(".sectionTitle");
    e != null && e.customSequence ? (a && (a.hidden = !e.includeWarmup), o && (o.hidden = !e.includeCooldown), l && (l.textContent = "Move sequence")) : (a && (a.hidden = !!(e != null && e.warmupOff)), o && (o.hidden = !1), l && (l.textContent = "Kettlebell work")), We(jt, "warmupList"), We(_t, "strengthList"), We(an, "cooldownList");
  }
  function mt() {
    if (!Re) return;
    const { item: e, arr: a } = Re;
    Re = null;
    const o = a.indexOf(e);
    o >= 0 && a.splice(o, 1), Me === e && (Me = null);
  }
  function Ht(e) {
    return e.id === "warmupList" ? { arr: jt, kind: "warmup", group: "Warm-up" } : e.id === "cooldownList" ? { arr: an, kind: "cooldown", group: "Cooldown" } : { arr: _t, kind: "work", group: "" };
  }
  function Ut(e, a) {
    const o = Ht(a), l = Date.now().toString(36);
    return e === "video" ? { id: "video-" + l, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : e === "rest" ? { id: "rest-" + l, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(E.value) } : { id: "movement-" + l, name: "", group: o.group, kind: o.kind, hidden: !1, useGlobalTiming: !0, duration: Number(k.value) };
  }
  const hn = "cubic-bezier(.34,1.46,.64,1)";
  function ln(e, a) {
    if (Se() || !e) {
      a();
      return;
    }
    const o = (b) => {
      var C;
      return ((C = b.dataset) == null ? void 0 : C.id) || b;
    }, l = () => [...e.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], u = new Map(l().map((b) => [o(b), b.getBoundingClientRect().top]));
    a(), l().forEach((b) => {
      const C = u.get(o(b));
      if (C === void 0) return;
      const D = C - b.getBoundingClientRect().top;
      Math.abs(D) < 0.5 || b.animate([{ transform: "translateY(" + D + "px)" }, { transform: "none" }], { duration: 440, easing: hn });
    });
  }
  function si(e, a) {
    if (!e || Se()) return;
    const o = e.offsetHeight, l = Math.max(0, o - (a || 0));
    e.animate([{ clipPath: "inset(0 0 " + l + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: hn });
  }
  function On(e, a, o, l) {
    const { arr: u } = Ht(a), b = Ut(e, a);
    u.splice(Math.max(0, Math.min(o, u.length)), 0, b), Re = { item: b, arr: u }, Me = b, ln(a.closest(".exerciseScroller,.createStepSlot") || a, () => G());
    const C = a.querySelector(".moveRow.editing");
    return si(C, l), Ye(e === "rest"), C;
  }
  function Xn(e) {
    for (let a = e; a && a.nodeType === 1; a = a.parentElement) {
      const o = getComputedStyle(a).overflowY;
      if (/(auto|scroll)/.test(o) && a.scrollHeight > a.clientHeight) return a;
    }
    return null;
  }
  const Qn = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function li(e, a) {
    const o = document.createElement("div");
    return o.className = "addGhost" + (e === "movement" ? "" : " rest"), o.innerHTML = '<span class="addGhostGrip">' + ue + '</span><span class="addGhostText"><strong>' + Fe(a[0]) + "</strong><small>" + Fe(a[1]) + "</small></span>", i("workoutModal").appendChild(o), o;
  }
  function it(e) {
    e.classList.add("leaving"), setTimeout(() => e.remove(), 180);
  }
  function Wn(e, a, o, l) {
    (Me || Re) && (mt(), Me = null, G());
    const u = e.getBoundingClientRect(), b = li(a, Qn[a]);
    b.setAttribute("aria-hidden", "true"), b.style.width = u.width + "px", b.style.height = u.height + "px", b.style.transform = "translate(" + u.left + "px," + u.top + "px)", e.classList.add("lifting");
    const C = Xn(e);
    return Rn({
      ghost: b,
      origin: u,
      sx: o,
      sy: l,
      scroller: C,
      column: e.closest(".exerciseScroller,.createFlow") || C,
      home: () => e.getBoundingClientRect(),
      onDrop: (D, $, ee) => {
        it(b), e.classList.remove("lifting"), On(a, D, $, ee);
      },
      onReturn: () => {
        it(b), e.classList.remove("lifting");
      }
    });
  }
  function Rn({ ghost: e, origin: a, sx: o, sy: l, scroller: u, column: b, home: C, onDrop: D, onReturn: $, rowLook: ee = !1 }) {
    var io;
    const Y = !Se(), j = ((io = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : io.offsetHeight) || 80, xe = o - a.left, Oe = l - a.top, Ce = 44;
    let ve = o, fe = l, nt = a.left, at = a.top, Te = 0, ot = 0, gt = !Y, $e = null, je = null, Vt = -1, en = 0, Tt = null;
    const ti = () => ["warmupList", "strengthList", "cooldownList"].map((Ze) => i(Ze)).filter((Ze) => Ze && Ze.getClientRects().length && !Ze.closest("[hidden]")), he = (Ze) => {
      if (Ze === $e) return;
      $e = Ze, e.classList.toggle("overList", !!Ze || ee);
      const bt = Ze ? Ze.getBoundingClientRect().width : a.width;
      e.style.width = bt + "px", e.style.height = (Ze ? j : a.height) + "px";
    }, Je = (Ze) => {
      Ze.classList.add("leaving"), Ze.style.height = "0px", Ze.style.marginTop = "-8px", setTimeout(() => Ze.remove(), Y ? 320 : 0);
    }, Yt = (Ze, bt, Dt) => {
      if (je && je.parentNode === Ze && Vt === Dt || (je && (Je(je), je = null, Vt = -1), !Ze)) return;
      const Kt = document.createElement("div");
      Kt.className = "dropSlot", Ze.insertBefore(Kt, bt), je = Kt, Vt = Dt, Kt.getBoundingClientRect(), Kt.style.height = j + "px", Kt.style.marginTop = "0px";
    }, Zt = () => {
      let Ze = null, bt = 1 / 0;
      for (const Pn of ti()) {
        const Xe = Pn.getBoundingClientRect();
        if (ve < Xe.left - 48 || ve > Xe.right + 48) continue;
        const dt = Xe.top - 28, Mt = Xe.bottom + 28, bn = fe < dt ? dt - fe : fe > Mt ? fe - Mt : 0;
        bn < bt && (bt = bn, Ze = Pn);
      }
      const Dt = b == null ? void 0 : b.getBoundingClientRect(), vn = Dt && ve >= Dt.left && ve <= Dt.right && fe >= Dt.top && fe <= Dt.bottom || bt === 0 ? Ze : null;
      if (vn) {
        const Pn = [...vn.children].filter((dt) => dt.classList.contains("moveRow"));
        let Xe = Pn.findIndex((dt) => {
          const Mt = dt.getBoundingClientRect();
          return fe < Mt.top + Mt.height / 2;
        });
        Xe < 0 && (Xe = Pn.length), Yt(vn, Pn[Xe] || null, Xe);
      } else Yt(null);
      he(vn);
    }, Sr = () => {
      if (Tt) return Tt.aim();
      if ($e) {
        const Ze = $e.getBoundingClientRect();
        let bt = fe - j / 2;
        return je && (bt = bt * 0.6 + je.getBoundingClientRect().top * 0.4), { x: Ze.left, y: bt };
      }
      return { x: ve - xe, y: fe - Oe };
    }, ao = (Ze, bt, Dt, Kt) => {
      e.style.transform = "translate(" + nt + "px," + at + "px) rotate(" + Ze + "deg) rotate(" + bt + "rad) scale(" + Dt + "," + Kt + ") rotate(" + -bt + "rad)";
    }, Lr = () => {
      if (en = requestAnimationFrame(Lr), !gt) {
        const Xe = ve - o, dt = fe - l, Mt = Math.min(Math.hypot(Xe, dt) / Ce, 1);
        nt = a.left + Xe * 0.35, at = a.top + dt * 0.35, ao(0, Math.atan2(dt, Xe), 1 + 0.155 * Mt, 1 - 0.1 * Mt);
        return;
      }
      const Ze = Sr();
      if (!Y) {
        nt = Ze.x, at = Ze.y, ao(0, 0, 1, 1), Tt && (cancelAnimationFrame(en), Tt.done());
        return;
      }
      const bt = Tt ? Tt.k : 0.17, Dt = Tt ? Tt.d : 0.7;
      Te = (Te + (Ze.x - nt) * bt) * Dt, ot = (ot + (Ze.y - at) * bt) * Dt, nt += Te, at += ot;
      const Kt = Math.hypot(Te, ot), vn = Math.min(Kt / 48, 1), Pn = $e || Tt ? 0 : Math.max(-5, Math.min(5, Te * 0.32));
      ao(Pn, Math.atan2(ot, Te), 1 + 0.1 * vn, 1 - 0.063 * vn), Tt && Kt < 0.15 && Math.hypot(Ze.x - nt, Ze.y - at) < 0.6 && (cancelAnimationFrame(en), Tt.done());
    }, Tr = setInterval(() => {
      if (!u || Tt) return;
      const Ze = u.getBoundingClientRect(), bt = 64, Dt = fe < Ze.top + bt ? -(Ze.top + bt - fe) / 4 : fe > Ze.bottom - bt ? (fe - (Ze.bottom - bt)) / 4 : 0;
      Dt && (u.scrollTop += Math.max(-18, Math.min(18, Dt)), Zt());
    }, 30);
    en = requestAnimationFrame(Lr);
    let Wo = !1;
    const ni = (Ze, bt) => {
      if (Wo) return;
      Wo = !0, cancelAnimationFrame(en);
      const Dt = je ? je.offsetHeight : j;
      !Ze && je && (je.remove(), je = null), Ze ? D(Ze, bt, Dt) : $();
    };
    return {
      move(Ze, bt) {
        ve = Ze, fe = bt, !gt && Math.hypot(ve - o, fe - l) > Ce && (gt = !0, Te = (ve - o) * 0.085, ot = (fe - l) * 0.085), gt && Zt();
      },
      drop(Ze) {
        clearInterval(Tr);
        const bt = $e, Dt = Vt;
        if (!Ze && bt && je) {
          const Kt = je;
          Tt = { k: 0.24, d: 0.62, aim: () => {
            const vn = Kt.getBoundingClientRect();
            return { x: vn.left, y: vn.top };
          }, done: () => ni(bt, Dt) }, setTimeout(() => ni(bt, Dt), 650), Y || (cancelAnimationFrame(en), ni(bt, Dt));
          return;
        }
        Yt(null), he(null), Tt = { k: 0.2, d: 0.66, aim: () => {
          const Kt = C();
          return { x: Kt.left, y: Kt.top };
        }, done: () => ni(null) }, setTimeout(() => ni(null), 650), Y || (cancelAnimationFrame(en), ni(null));
      }
    };
  }
  function da(e, a) {
    let o = !1;
    e.addEventListener("click", (l) => {
      if (o) {
        o = !1, l.preventDefault();
        return;
      }
      if (ca()) {
        $o(a);
        return;
      }
      const u = i("strengthList"), b = On(a, u, Ht(u).arr.length, 0);
      b == null || b.scrollIntoView({ block: "nearest", behavior: Se() ? "auto" : "smooth" });
    }), e.addEventListener("pointerdown", (l) => {
      if (l.button !== void 0 && l.button !== 0) return;
      const u = l.pointerId, b = l.clientX, C = l.clientY;
      let D = null, $ = !1;
      try {
        e.setPointerCapture(u);
      } catch {
      }
      const ee = (fe) => {
        if (fe.pointerId === u) {
          if (fe.pointerType === "mouse" && fe.buttons === 0) {
            ve(!1);
            return;
          }
          if (!D) {
            if (Math.hypot(fe.clientX - b, fe.clientY - C) < 6) return;
            D = Wn(e, a, b, C);
          }
          D.move(fe.clientX, fe.clientY);
        }
      }, Y = (fe) => {
        fe.pointerId === u && ve(!1);
      }, j = (fe) => {
        fe.pointerId === u && ve(!0);
      }, xe = () => ve(!1), Oe = () => ve(!0), Ce = (fe) => {
        fe.key === "Escape" && D && (fe.preventDefault(), fe.stopPropagation(), ve(!0));
      };
      function ve(fe) {
        if (!$ && ($ = !0, window.removeEventListener("pointermove", ee, !0), window.removeEventListener("pointerup", Y, !0), window.removeEventListener("pointercancel", j, !0), window.removeEventListener("keydown", Ce, !0), window.removeEventListener("blur", Oe), e.removeEventListener("lostpointercapture", xe), D)) {
          const nt = D;
          D = null, o = !0, setTimeout(() => {
            o = !1;
          }, 0), nt.drop(fe);
        }
      }
      window.addEventListener("pointermove", ee, !0), window.addEventListener("pointerup", Y, !0), window.addEventListener("pointercancel", j, !0), window.addEventListener("keydown", Ce, !0), window.addEventListener("blur", Oe), e.addEventListener("lostpointercapture", xe);
    });
  }
  const ea = (Xl = window.matchMedia) == null ? void 0 : Xl.call(window, "(max-width: 620px)");
  function ca() {
    var e;
    return !!((e = window.matchMedia) != null && e.call(window, "(max-width: 620px)").matches);
  }
  const ua = (e) => e.charAt(0).toUpperCase() + e.slice(1), Jt = (e) => e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "movement";
  let Li = null, Et = null;
  function Ti(e, a, o, l) {
    dn(), i("sheetTitle").textContent = e;
    const u = i("sheetBody");
    u.innerHTML = "", u.appendChild(a), Li = o || null, i("sheet").setAttribute("aria-hidden", "false"), i("sheetScrim").classList.add("open"), i("sheet").classList.add("open"), setTimeout(() => {
      if (!i("sheet").classList.contains("open") || !u.contains(a)) return;
      const b = l ? u.querySelector("input[data-f=url],input[data-f=name]") : u.querySelector("button,input,select");
      b == null || b.focus({ preventScroll: !0 });
    }, Se() ? 0 : 360);
  }
  function dn() {
    const e = i("sheet");
    if (!e.classList.contains("open")) return;
    e.classList.remove("open"), i("sheetScrim").classList.remove("open"), e.setAttribute("aria-hidden", "true"), e.contains(n.activeElement) && n.activeElement.blur();
    const a = Li;
    Li = null, a == null || a(), setTimeout(cn, 0);
  }
  i("sheetScrim").addEventListener("click", dn), i("sheet").addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), dn());
  });
  function Zo(e, a) {
    const o = Ae(e, a.indexOf(e), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        dn(), G(), kt(ua(Jt(e)) + " updated");
      },
      onCancel: dn,
      onHide() {
        e.hidden = !e.hidden, dn(), G(), kt((e.hidden ? "Hidden: " : "Showing: ") + e.name);
      },
      onRemove() {
        dn();
        const l = a.indexOf(e);
        l < 0 || (a.splice(l, 1), G(), kt("Removed " + e.name, { label: "Undo", run: () => {
          a.splice(Math.min(l, a.length), 0, e), G();
        } }));
      }
    });
    Ti("Edit " + Jt(e), o, null, !1);
  }
  function Ko() {
    const e = document.createElement("div");
    e.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([a, o, l, u]) => {
      const b = document.createElement("button");
      b.type = "button", b.className = "sheetChoice", b.innerHTML = '<span class="timeIcon" aria-hidden="true">' + le(o) + "</span><span><strong>" + l + "</strong><small>" + u + "</small></span>", b.addEventListener("click", () => $o(a)), e.appendChild(b);
    }), Ti("Add to the move", e, null, !1);
  }
  function $o(e) {
    Et && Ai();
    const a = Ut(e, i("strengthList")), o = Ae(a, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        dn(), go(a, e);
      },
      onCancel: dn
    });
    Ti("New " + Jt(a), o, null, !0);
  }
  const di = i("workoutModal").querySelector(".modalStatic"), Ma = { parent: di.parentNode, next: di.nextSibling };
  function Jo() {
    const e = document.createElement("div");
    e.className = "sheetSetup", e.appendChild(di);
    const a = document.createElement("button");
    a.type = "button", a.className = "primary sheetDone", a.textContent = "Done", a.addEventListener("click", dn), e.appendChild(a), Ti("Setup", e, () => {
      Ma.parent.insertBefore(di, Ma.next), ci();
    }, !1);
  }
  function ci() {
    var a, o;
    const e = i("setupSummaryName");
    e && (e.textContent = (((a = i("workoutNameInput")) == null ? void 0 : a.value) || "").trim() || ((o = Ie[Ne]) == null ? void 0 : o.name) || "Move", i("setupSummaryMeta").textContent = et.textContent);
  }
  i("setupSummary").addEventListener("click", Jo), i("addFab").addEventListener("click", Ko);
  function Xo() {
    const e = i("strengthList");
    return Xn(e) || e.closest(".exerciseScroller");
  }
  function ta() {
    const e = i("strengthList").getBoundingClientRect(), a = (Xo() || i("strengthList")).getBoundingClientRect(), o = (Et == null ? void 0 : Et.ghost.offsetHeight) || 64;
    return { left: e.left, top: Math.max(a.top + 12, Math.min(a.bottom - o - 96, a.top + a.height * 0.55 - o / 2)), width: e.width, height: o };
  }
  function go(e, a) {
    var D;
    const o = li(a, [e.name || Qn[a][0], "Drag into place"]);
    o.classList.add("overList", "hovering"), o.setAttribute("aria-label", (e.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const l = document.createElement("span");
    l.className = "addGhostActions", l.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + Fe(e.name) + '">✕</button>', o.appendChild(l), Et = { item: e, type: a, ghost: o };
    const u = ((D = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : D.offsetHeight) || 64;
    o.style.width = i("strengthList").getBoundingClientRect().width + "px", o.style.height = u + "px";
    const b = ta(), C = Ve.querySelector(".modal").getBoundingClientRect().bottom;
    o.style.transform = "translate(" + b.left + "px," + C + "px)", o.getBoundingClientRect(), Se() || (o.classList.add("rising"), setTimeout(() => o.classList.remove("rising"), 650)), o.style.transform = "translate(" + b.left + "px," + b.top + "px)", l.querySelector("[data-a=end]").addEventListener("click", Ai), l.querySelector("[data-a=discard]").addEventListener("click", ct), o.addEventListener("pointerdown", Yr);
  }
  function Yr(e) {
    if (!Et || e.target.closest("button") || e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const { item: a, ghost: o } = Et, l = e.pointerId;
    try {
      o.setPointerCapture(l);
    } catch {
    }
    o.classList.remove("hovering", "rising"), o.classList.add("held");
    const u = o.getBoundingClientRect(), b = Xo(), C = Rn({
      ghost: o,
      origin: { left: u.left, top: u.top, width: u.width, height: u.height },
      sx: e.clientX,
      sy: e.clientY,
      scroller: b,
      column: i("strengthList").closest(".exerciseScroller,.createFlow") || b,
      rowLook: !0,
      home: ta,
      onDrop: (ve, fe, nt) => {
        Et = null, it(o), Qo(a, ve, fe, nt);
      },
      onReturn: () => {
        o.classList.remove("held"), o.classList.add("hovering");
      }
    });
    let D = !1;
    const $ = (ve) => {
      if (ve.pointerId === l) {
        if (ve.pointerType === "mouse" && ve.buttons === 0) {
          Ce(!1);
          return;
        }
        C.move(ve.clientX, ve.clientY);
      }
    }, ee = (ve) => {
      ve.pointerId === l && Ce(!1);
    }, Y = (ve) => {
      ve.pointerId === l && Ce(!0);
    }, j = () => Ce(!1), xe = () => Ce(!0), Oe = (ve) => {
      ve.key === "Escape" && (ve.preventDefault(), Ce(!0));
    };
    function Ce(ve) {
      D || (D = !0, window.removeEventListener("pointermove", $, !0), window.removeEventListener("pointerup", ee, !0), window.removeEventListener("pointercancel", Y, !0), window.removeEventListener("keydown", Oe, !0), window.removeEventListener("blur", xe), o.removeEventListener("lostpointercapture", j), C.drop(ve));
    }
    window.addEventListener("pointermove", $, !0), window.addEventListener("pointerup", ee, !0), window.addEventListener("pointercancel", Y, !0), window.addEventListener("keydown", Oe, !0), window.addEventListener("blur", xe), o.addEventListener("lostpointercapture", j);
  }
  function Qo(e, a, o, l) {
    const u = Ht(a);
    e.kind !== "rest" && e.kind !== "video" && (e.kind = u.kind, u.group && (!e.group || e.group === "Movement") && (e.group = u.group)), u.arr.splice(Math.max(0, Math.min(o, u.arr.length)), 0, e), ln(a.closest(".exerciseScroller,.createStepSlot") || a, () => G()), si(a.querySelector('.moveRow[data-id="' + e.id + '"]'), l), kt(ua(Jt(e)) + " added");
  }
  function Ai() {
    var l;
    if (!Et) return;
    const { item: e, ghost: a } = Et;
    Et = null, it(a);
    const o = i("strengthList");
    Qo(e, o, Ht(o).arr.length, 0), (l = o.querySelector('.moveRow[data-id="' + e.id + '"]')) == null || l.scrollIntoView({ block: "nearest", behavior: Se() ? "auto" : "smooth" });
  }
  function ct() {
    if (!Et) return;
    const e = Et.ghost;
    Et = null, it(e), kt("Discarded");
  }
  function _i() {
    Et && (Et.ghost.remove(), Et = null);
  }
  window.addEventListener("resize", () => {
    if (Et != null && Et.ghost.classList.contains("hovering")) {
      const e = ta();
      Et.ghost.style.width = e.width + "px", Et.ghost.style.transform = "translate(" + e.left + "px," + e.top + "px)";
    }
  }), (Ql = ea == null ? void 0 : ea.addEventListener) == null || Ql.call(ea, "change", () => {
    dn(), Et && !ca() && Ai(), yt();
  });
  {
    const e = i("workoutModal").querySelector(".modal");
    e.addEventListener("scroll", () => {
      (e.scrollTop || e.scrollLeft) && (e.scrollTop = 0, e.scrollLeft = 0);
    });
  }
  function cn() {
    const e = i("workoutModal"), a = window.visualViewport;
    if (!e.classList.contains("open") || !ca()) {
      vo();
      return;
    }
    const o = a ? a.offsetTop : 0, l = a ? a.offsetLeft : 0, u = a ? a.width : window.innerWidth, b = a ? a.height : window.innerHeight;
    Object.assign(e.style, { right: "auto", bottom: "auto", width: u + "px", height: b + "px", top: o + "px", left: l + "px" });
    const C = e.getBoundingClientRect();
    Math.abs(C.top - o) > 0.5 && (e.style.top = 2 * o - C.top + "px"), Math.abs(C.left - l) > 0.5 && (e.style.left = 2 * l - C.left + "px");
  }
  function vo() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((e) => i("workoutModal").style.removeProperty(e));
  }
  (ed = window.visualViewport) == null || ed.addEventListener("resize", cn), (td = window.visualViewport) == null || td.addEventListener("scroll", cn), window.addEventListener("resize", cn), window.addEventListener("scroll", cn, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(cn, 250));
  function bo() {
    _t.length > 0;
    const e = i("addMovementBtn"), a = i("addRestBtn");
    e && (e.innerHTML = ue + "<span>Add movement</span>"), a && (a.innerHTML = ue + "<span>Add rest</span>");
    const o = i("addVideoBtn");
    o && (o.innerHTML = ue + "<span>Add video</span>");
  }
  function Fa() {
    const e = i("useGlobalTiming").checked, a = i("addMovementDuration"), o = i("addMovementUnit");
    a.disabled = e, o.disabled = e, a.parentElement.style.opacity = e ? ".38" : "1", i("globalTimingValue").textContent = "Use global timing · " + It(k.value);
    const l = i("useGlobalRestTiming").checked, u = i("addRestDuration"), b = i("addRestUnit");
    u.disabled = l, b.disabled = l, u.parentElement.style.opacity = l ? ".38" : "1", i("globalRestTimingValue").textContent = "Use global timing · " + It(E.value);
  }
  let Ei = "movement";
  function wo(e) {
    Ei = e;
    const a = i("movementFields"), o = i("restFields");
    a.hidden = e !== "movement", o.hidden = e !== "rest", i("movementCreatorHeading").textContent = "Add movement", i("movementCreator").setAttribute("aria-label", "Create movement"), Fa();
  }
  function Oa() {
    Ie[Ne];
    const e = xt ? !0 : i("useGlobalTiming").checked, a = e ? Number(k.value) : ka(
      i("addMovementDuration").value,
      i("addMovementUnit").value
    ), o = xt ? !0 : i("useGlobalRestTiming").checked, l = o ? Number(E.value) : ka(
      i("addRestDuration").value,
      i("addRestUnit").value
    );
    if (Ei === "rest") {
      const u = i("addRestTitle").value.trim() || "Rest", b = i("addRestGroup").value.trim() || "Rest";
      _t.push({
        id: "rest-" + Date.now(),
        name: u,
        group: b,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: o,
        duration: Math.max(5, l || Number(E.value))
      }), G(), i("movementCreator").hidden = !0, i("addRestTitle").value = "Rest", i("addRestGroup").value = "Rest", kt("Rest added"), xt && (F("movements"), de());
    } else {
      const u = i("addMovementInput").value.trim();
      if (!u) return;
      const b = i("addMovementGroup").value.trim() || "Movement";
      _t.push({
        id: "movement-" + Date.now(),
        name: u,
        group: b,
        kind: "work",
        hidden: !1,
        useGlobalTiming: e,
        duration: Math.max(5, a || Number(k.value))
      }), i("addMovementInput").value = "", i("addMovementGroup").value = "", G(), i("movementCreator").hidden = !0, kt("Movement added"), xt && (F("movements"), de());
    }
    bo();
  }
  let ui = null;
  function kt(e, a) {
    const o = i("toast");
    o.innerHTML = "";
    const l = document.createElement("span");
    if (l.textContent = e, o.appendChild(l), a) {
      const u = document.createElement("button");
      u.type = "button", u.className = "toastAction", u.textContent = a.label, u.addEventListener("click", () => {
        a.run(), o.classList.remove("show", "withAction"), clearTimeout(ui);
      }), o.appendChild(u);
    }
    o.classList.toggle("withAction", !!a), o.classList.add("show"), clearTimeout(ui), ui = setTimeout(() => o.classList.remove("show", "withAction"), a ? 5e3 : 2200);
  }
  const xo = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], er = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function Wa(e) {
    return Math.max(0, Math.min(5, Math.floor(Number(e) / 100 * 6)));
  }
  function Ln(e, a) {
    return xo[Wa(a)];
  }
  function tr(e) {
    return er[Wa(e)];
  }
  function wt(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  function na() {
    return { morning: rt().morningTime || "08:00", evening: rt().eveningTime || "19:00" };
  }
  function qa(e) {
    const [a, o] = String(e).split(":").map(Number);
    return (a || 0) * 60 + (o || 0);
  }
  function nr(e) {
    const a = na();
    return e.getHours() * 60 + e.getMinutes() >= qa(a.evening) ? "evening" : "morning";
  }
  function za(e, a) {
    return me.checkins.find((o) => o.date === e && o.slot === a);
  }
  function pi(e) {
    return !!(e && e.mood != null && e.energy != null);
  }
  function Di() {
    const e = /* @__PURE__ */ new Date(), a = wt(e), o = nr(e), l = na(), u = e.getHours() * 60 + e.getMinutes();
    return o === "morning" && u < qa(l.morning) || pi(za(a, o)) ? null : o;
  }
  const qn = i("checkinModal"), aa = i("checkinTab"), Va = i("checkinBadge"), zn = { mood: { input: i("moodInput"), fill: i("moodFill") }, energy: { input: i("energyLevelInput"), fill: i("energyLevelFill") } };
  function pa(e) {
    const { input: a, fill: o } = zn[e];
    o.style.width = a.value + "%", a.setAttribute("aria-valuetext", Ln(e, a.value));
  }
  Object.keys(zn).forEach((e) => zn[e].input.addEventListener("input", () => pa(e)));
  let Vn = null;
  function ar() {
    const e = na(), a = /* @__PURE__ */ new Date(), o = a.getHours() * 60 + a.getMinutes();
    return o < qa(e.morning) ? "Next check-in at " + e.morning : o < qa(e.evening) ? "Next check-in at " + e.evening : "Next check-in tomorrow at " + e.morning;
  }
  function Zr() {
    const e = na(), a = /* @__PURE__ */ new Date(), o = a.getHours() * 60 + a.getMinutes(), l = (u, b) => {
      const [C, D] = u.split(":").map(Number);
      return new Date(a.getFullYear(), a.getMonth(), a.getDate() + (b ? 1 : 0), C, D);
    };
    return o < qa(e.morning) ? { date: l(e.morning), time: e.morning } : o < qa(e.evening) ? { date: l(e.evening), time: e.evening } : { date: l(e.morning, !0), time: e.morning };
  }
  let yo = null, ko = null;
  function ir() {
    if (Di()) {
      mi(), ma();
      return;
    }
    const e = Zr(), a = Math.max(0, Math.round((e.date - Date.now()) / 1e3)), o = Math.floor(a / 3600), l = Math.floor(a % 3600 / 60), u = a % 60;
    i("peekCountdown").textContent = o + ":" + String(l).padStart(2, "0") + ":" + String(u).padStart(2, "0"), i("peekAt").textContent = "Available at " + e.time;
  }
  function Kr() {
    ir(), aa.classList.add("peek"), clearInterval(ko), ko = setInterval(ir, 1e3), clearTimeout(yo), yo = setTimeout(mi, 6e3);
  }
  function mi() {
    aa.classList.remove("peek"), clearInterval(ko), clearTimeout(yo);
  }
  function ja() {
    const e = Di();
    if (!e) {
      aa.classList.contains("peek") ? mi() : Kr();
      return;
    }
    Vn = { date: wt(/* @__PURE__ */ new Date()), slot: e };
    const o = za(Vn.date, e), l = me.checkins.find((u) => pi(u));
    Object.keys(zn).forEach((u) => {
      zn[u].input.value = (o == null ? void 0 : o[u]) ?? (l == null ? void 0 : l[u]) ?? 50, pa(u);
    }), i("checkinTitle").textContent = e === "morning" ? "Morning check-in" : "Evening check-in", qn.classList.add("open"), qn.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => zn.mood.input.focus());
  }
  function fi() {
    qn.classList.remove("open"), qn.setAttribute("aria-hidden", "true"), Vn && (Ga = Vn.date + "-" + Vn.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", Ga);
    } catch {
    }
    Vn = null, ma();
  }
  function $r() {
    if (!Vn) return;
    if (pi(za(Vn.date, Vn.slot))) {
      fi();
      return;
    }
    const { date: e, slot: a } = Vn;
    let o = za(e, a);
    o || (o = { date: e, slot: a }, me.checkins.unshift(o), me.checkins = me.checkins.slice(0, 2e3)), o.mood = Number(zn.mood.input.value), o.energy = Number(zn.energy.input.value), o.scale = 100, o.at = (/* @__PURE__ */ new Date()).toISOString(), rn(), r.fire("checkin", { slot: a, mood: o.mood, energy: o.energy, mood_label: Ln("mood", o.mood), energy_label: Ln("energy", o.energy) }), kt((a === "morning" ? "Morning" : "Evening") + " check-in saved"), fi(), Ua(), ia(), Mi(), Aa();
  }
  let Ga = "";
  try {
    Ga = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function ma() {
    const e = Di();
    Va.hidden = !e, aa.hidden = !e, e || mi(), aa.classList.toggle("due", !!e), aa.setAttribute("aria-label", e ? (e === "morning" ? "Morning" : "Evening") + " check-in is due" : ar()), aa.title = e ? "Check in now" : ar();
  }
  function hi() {
    ma();
    const e = Di();
    !e || qn.classList.contains("open") || rt().checkinAutoOpen !== !1 && (!be.home.classList.contains("active") || Ve.classList.contains("open") || Ga !== wt(/* @__PURE__ */ new Date()) + "-" + e && ja());
  }
  aa.addEventListener("click", ja), i("checkinLater").addEventListener("click", fi), i("checkinSave").addEventListener("click", $r), qn.addEventListener("click", (e) => {
    e.target === qn && fi();
  }), qn.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), fi());
  }), setInterval(hi, 3e4);
  function Ua() {
    const e = wt(/* @__PURE__ */ new Date()), a = (o) => me.checkins.find((l) => l.date === e && l[o] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([o, l]) => {
      const u = a(o);
      i(l).textContent = u ? Ln(o, u[o]) : "—";
    });
  }
  function ia() {
    const e = i("feelCard");
    if (!e) return;
    const a = /* @__PURE__ */ new Date(), o = new Date(a.getFullYear(), a.getMonth(), a.getDate() - (a.getDay() + 6) % 7), l = [...Array(7)].map((ee, Y) => {
      const j = new Date(o.getFullYear(), o.getMonth(), o.getDate() + Y), xe = wt(j), Oe = me.checkins.filter((ve) => ve.date === xe), Ce = (ve) => {
        const fe = Oe.map((nt) => nt[ve]).filter((nt) => nt != null);
        return fe.length ? fe.reduce((nt, at) => nt + at, 0) / fe.length : null;
      };
      return { d: j, key: xe, mood: Ce("mood"), energy: Ce("energy"), count: Oe.filter(pi).length, future: j > a && xe !== wt(a) };
    }), u = (ee) => {
      const Y = l.map((j) => j[ee]).filter((j) => j != null);
      return Y.length ? Y.reduce((j, xe) => j + xe, 0) / Y.length : null;
    }, b = u("mood"), C = u("energy"), D = (ee, Y) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + ee + "</span><span>" + (Y == null ? "—" : Fe(Ln("", Y))) + '</span></div><div class="feelTrack"><span style="width:' + (Y == null ? 0 : Math.max(4, Y)) + "%;background:" + (Y == null ? "transparent" : tr(Y)) + '"></span></div></div>', $ = l.filter((ee) => ee.mood != null && ee.energy != null).sort((ee, Y) => Y.mood + Y.energy - (ee.mood + ee.energy))[0];
    e.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (b == null ? "No check-ins yet" : Fe(Ln("", (b + C) / 2))) + '</div><div class="weekCopy">' + (b == null ? "Your first check-in will appear here." : "on average this week" + ($ ? " · best day " + Fe(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format($.d)) : "")) + '</div></div></div><div class="feelDays">' + l.map(
      (ee) => '<div class="weekChip feelDay' + (ee.future ? " future" : "") + (ee.key === wt(a) ? " today" : "") + '"><div class="weekChipTop"><strong>' + Fe(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(ee.d)) + "</strong>" + (ee.count >= 2 ? '<span class="weekTick">' + le("check") + "</span>" : '<span class="feelDots">' + "●".repeat(ee.count) + "</span>") + "</div>" + D("Mood", ee.mood) + D("Energy", ee.energy) + "</div>"
    ).join("") + "</div>";
  }
  const gi = i("upcomingCountSetting");
  gi.addEventListener("change", () => {
    $n = gi.value === "all" ? "all" : Number(gi.value), cl();
  });
  const Ya = i("tempoRevealBtn"), Ri = i("tempoExperiment"), t = i("tempoQuad"), s = i("tempoDot"), d = i("tempoEstimate"), m = i("tempoReadout");
  let g = { x: 0.5, y: 0.5 }, P = !1, T = { total: 20, work: 45, rest: 15 };
  function U(e, a, o, l) {
    const u = Math.max(a, Math.min(o, e));
    return Math.round((u - a) / l) * l + a;
  }
  function re(e, a) {
    const o = (e - 0.5) * 2, l = (a - 0.5) * 2, u = U(
      T.total + o * 5 + l * 8,
      Number(x.min),
      Number(x.max),
      Number(x.step)
    ), b = U(
      T.work + o * 10 + l * 8,
      Number(k.min),
      Number(k.max),
      Number(k.step)
    ), C = U(
      T.rest + o * 6 + l * 6,
      Number(E.min),
      Number(E.max),
      Number(E.step)
    );
    return x.value = u, k.value = b, E.value = C, te.textContent = b + " sec", K.textContent = C + " sec", Gt(), { total: u, work: b, rest: C };
  }
  function _e(e, a) {
    const o = e < 0.34 ? "Low" : e > 0.66 ? "Hard" : "Medium", l = a < 0.34 ? "Fast" : a > 0.66 ? "Slow" : "Balanced", u = re(e, a);
    m.textContent = o + " + " + l, d.textContent = u.total + " min", t.setAttribute("aria-valuetext", o + " and " + l + ", estimated " + u.total + " minutes");
  }
  function ie(e) {
    const a = t.getBoundingClientRect(), o = Math.max(0, Math.min(1, (e.clientX - a.left) / a.width)), l = Math.max(0, Math.min(1, (e.clientY - a.top) / a.height));
    g = { x: o, y: l }, s.style.left = o * 100 + "%", s.style.top = l * 100 + "%", _e(o, l);
  }
  Ya.addEventListener("click", () => {
    const e = Ri.hidden;
    Ri.hidden = !e, Ya.setAttribute("aria-expanded", e ? "true" : "false"), Ya.textContent = e ? "Now close this" : "Don’t try this!", e && (T = {
      total: Number(x.value),
      work: Number(k.value),
      rest: Number(E.value)
    }, g = { x: 0.5, y: 0.5 }, s.style.left = "50%", s.style.top = "50%", _e(g.x, g.y));
  }), n.querySelectorAll("[data-feedback-rating]").forEach((e) => e.addEventListener("click", () => {
    Number(e.dataset.feedbackRating), n.querySelectorAll("[data-feedback-rating]").forEach((a) => a.classList.toggle("selected", a === e));
  }));
  const Le = i("testingFeedbackForm"), ut = i("testingFeedbackThanks"), tt = i("testingFeedbackAgain");
  Le.addEventListener("submit", (e) => {
    e.preventDefault(), Le.hidden = !0, ut.hidden = !1, kt("Feedback captured for prototype");
  }), tt.addEventListener("click", (e) => {
    e.preventDefault(), Le.reset(), n.querySelectorAll("[data-feedback-rating]").forEach((a) => a.classList.remove("selected")), ut.hidden = !0, Le.hidden = !1;
  }), t.addEventListener("pointerdown", (e) => {
    var a;
    P = !0, ie(e);
    try {
      (a = t.setPointerCapture) == null || a.call(t, e.pointerId);
    } catch {
    }
  }), t.addEventListener("pointermove", (e) => {
    P && ie(e);
  }), t.addEventListener("pointerup", (e) => {
    P && (P = !1, ie(e), G());
  }), t.addEventListener("pointercancel", () => P = !1), t.addEventListener("keydown", (e) => {
    let { x: a, y: o } = g, l = !0;
    e.key === "ArrowLeft" ? a -= 0.05 : e.key === "ArrowRight" ? a += 0.05 : e.key === "ArrowUp" ? o -= 0.05 : e.key === "ArrowDown" ? o += 0.05 : l = !1, l && (e.preventDefault(), a = Math.max(0, Math.min(1, a)), o = Math.max(0, Math.min(1, o)), g = { x: a, y: o }, s.style.left = a * 100 + "%", s.style.top = o * 100 + "%", _e(a, o), G());
  });
  const Ve = i("workoutModal");
  let ke = null;
  function ge(e) {
    return e.map((a) => ({ ...a }));
  }
  function qe() {
    const e = Ie[Ne];
    return {
      key: Ne,
      profile: e ? JSON.parse(JSON.stringify(e)) : null,
      warmup: ge(jt),
      strength: ge(_t),
      cooldown: ge(an),
      total: Number(x.value),
      work: Number(k.value),
      rest: Number(E.value),
      rounds: Number(Ue.value) || 1
    };
  }
  function ft(e = !1) {
    xt = !!e, Me = null, Re = null, dn(), _i(), ke = qe(), i("moveEditorTitle").textContent = xt ? "Create new move" : "Edit move", i("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", i("moveEditorSubtitle").hidden = !xt, i("warmupRow").hidden = xt, i("deleteMoveOpen").hidden = xt;
    const a = i("createMoveOptions");
    a.hidden = !xt;
    {
      const o = Ie[Ne];
      i("includeWarmupPreset").checked = !!(o != null && o.includeWarmup), i("includeCooldownPreset").checked = !!(o != null && o.includeCooldown);
    }
    if (Za(), xt) {
      i("useGlobalTiming").checked = !0, i("useGlobalRestTiming").checked = !0;
      const o = Ie[Ne];
      M((o == null ? void 0 : o.preset) || "movement", !1);
    }
    i("movementCreator").hidden = !0, wo("movement"), bo(), Fa(), Ri.hidden = !0, Ya.setAttribute("aria-expanded", "false"), Ya.textContent = "Don’t try this!", Ve.classList.toggle("createMode", xt), Ve.querySelector(".modal").classList.toggle("createMode", xt), Ve.classList.add("open"), Ve.setAttribute("aria-hidden", "false"), cn(), xt && Ee();
  }
  function fa() {
    const e = Ie[Ne];
    return e != null && e.customSequence ? !!e.includeWarmup : !(e != null && e.warmupOff);
  }
  function Za() {
    const e = fa(), a = i("warmupSwitch");
    a.classList.toggle("on", e), a.setAttribute("aria-checked", String(e));
  }
  i("warmupSwitch").addEventListener("click", () => {
    const e = Ie[Ne];
    e && (e.customSequence ? (i("includeWarmupPreset").checked = !e.includeWarmup, N()) : (e.warmupOff = !e.warmupOff, G()), Za());
  });
  function oa() {
    dn(), _i(), vo(), Re = null, Me = null, Ve.classList.contains("createMode") && h(), Ve.classList.remove("createMode"), Ve.querySelector(".modal").classList.remove("createMode"), Ve.classList.remove("open"), Ve.setAttribute("aria-hidden", "true");
  }
  function Mo() {
    if (!ke) return;
    const e = ke;
    e.profile && (Ie[e.key] = JSON.parse(JSON.stringify(e.profile))), Ne = e.key, jt = ge(e.warmup), _t = ge(e.strength), an = ge(e.cooldown), x.value = e.total, k.value = e.work, E.value = e.rest, Ue.value = e.rounds || 1;
    const a = Ie[Ne];
    if (a) {
      n.querySelectorAll(".workoutPanel[data-workout]").forEach((l) => l.classList.toggle("active", l.dataset.workout === Ne));
      const o = n.querySelector(".workoutPanel.active");
      if (o) {
        const l = o.querySelector(".workoutName");
        l && (l.textContent = a.name);
        const u = o.querySelector(".panelCollapsedText");
        u && (u.textContent = a.name);
        const b = o.querySelector(".sourceTag");
        b && (b.textContent = a.source);
      }
      f.value = a.name;
    }
    G();
  }
  i("cancelWorkoutEdit").addEventListener("click", () => {
    if (xt) {
      const e = Ne;
      delete Ie[e], xt = !1, Rt = null, Cn(me.order.find((a) => Ie[a]) || Object.keys(Ie)[0]);
    } else
      Mo();
    oa();
  }), i("saveWorkoutEdit").addEventListener("click", () => {
    dn(), Et && Ai();
    const e = Ie[Ne], a = f.value.trim() || "New move";
    if (e && (e.name = a), mt(), Me = null, G(), xt && e)
      Ot(Ne, e), n.querySelectorAll(".workoutPanel[data-workout]").forEach((o) => o.classList.toggle("active", o.dataset.workout === Ne)), xt = !1, Rt = null, me.order.includes(Ne) || me.order.push(Ne), kt("Move created");
    else {
      const o = n.querySelector(".workoutPanel.active");
      if (o) {
        const l = o.querySelector(".workoutName");
        l && (l.textContent = a);
        const u = o.querySelector(".panelCollapsedText");
        u && (u.textContent = a);
      }
      kt("Move saved");
    }
    ke = null, oa(), rn();
  }), Ve.addEventListener("click", (e) => {
    if (e.target === Ve) {
      if (xt) {
        const a = Ne;
        delete Ie[a], xt = !1, Rt = null, Cn(me.order.find((o) => Ie[o]) || Object.keys(Ie)[0]);
      } else
        Mo();
      oa();
    }
  }), da(i("addMovementBtn"), "movement"), da(i("addRestBtn"), "rest"), da(i("addVideoBtn"), "video"), i("closeMovementCreator").addEventListener("click", () => {
    i("movementCreator").hidden = !0;
  }), i("useGlobalTiming").addEventListener("change", Fa), i("useGlobalRestTiming").addEventListener("change", Fa), n.querySelectorAll(".createPresetBtn").forEach((e) => e.addEventListener("click", () => {
    M(e.dataset.movePreset, !0), G();
  })), i("includeWarmupPreset").addEventListener("change", N), i("includeCooldownPreset").addEventListener("change", N), i("includeWarmupPreset").addEventListener("change", de), i("includeCooldownPreset").addEventListener("change", de), f.addEventListener("input", de), f.addEventListener("input", ci), i("confirmAddMovement").addEventListener("click", Oa), i("confirmAddRest").addEventListener("click", Oa), i("addMovementInput").addEventListener("keydown", (e) => {
    e.key === "Enter" && Oa();
  });
  const vi = i("countdown"), Ni = i("countNum"), Tn = i("countdownPixelCanvas");
  let Ca = null, Bi = "appear";
  class De {
    constructor(a, o, l, u, b, C, D) {
      this.width = a.width, this.height = a.height, this.ctx = o, this.x = l, this.y = u, this.color = b, this.speed = (Math.random() * 0.8 + 0.1) * C, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = D, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
    }
    draw() {
      const a = this.maxSizeInteger * 0.5 - this.size * 0.5;
      this.ctx.fillStyle = this.color, this.ctx.fillRect(this.x + a, this.y + a, this.size, this.size);
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
  let ht = [], bi = 1, Co = 1;
  function wi() {
    const e = parseFloat(getComputedStyle(i("app")).zoom);
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  function bc() {
    var ee;
    if (!Tn) return;
    const e = wi(), a = Math.max(1, window.innerWidth / e), o = Math.max(1, window.innerHeight / e);
    bi = a, Co = o;
    const l = Math.min(window.devicePixelRatio || 1, 2);
    Tn.width = Math.floor(a * l), Tn.height = Math.floor(o * l), Tn.style.width = a + "px", Tn.style.height = o + "px";
    const u = Tn.getContext("2d");
    u.setTransform(l, 0, 0, l, 0, 0);
    const b = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], C = 12, D = (ee = window.matchMedia) == null ? void 0 : ee.call(window, "(prefers-reduced-motion: reduce)").matches, $ = D ? 0 : 0.055;
    ht = [];
    for (let Y = 0; Y < a; Y += C)
      for (let j = 0; j < o; j += C) {
        const xe = Y - a / 2, Oe = j - o / 2, Ce = Math.sqrt(xe * xe + Oe * Oe), ve = D ? 0 : Math.random() * 75 + Ce * 0.05, fe = new De({ width: a, height: o }, u, Y, j, b[Math.floor(Math.random() * b.length)], $, ve);
        fe.maxSizeInteger = 4, fe.maxSize = Math.random() * 3.2 + 0.8, fe.sizeStep = 0.35 + Math.random() * 0.45, ht.push(fe);
      }
  }
  function al(e) {
    cancelAnimationFrame(Ca), Bi = e;
    const a = Tn == null ? void 0 : Tn.getContext("2d");
    if (!a) return;
    function o() {
      a.clearRect(0, 0, bi, Co);
      let l = !0;
      ht.forEach((u) => {
        u[Bi](), u.isIdle || (l = !1);
      }), Bi === "disappear" && l || (Ca = requestAnimationFrame(o));
    }
    Ca = requestAnimationFrame(o);
  }
  function or() {
    cancelAnimationFrame(Ca), bc(), al("appear"), setTimeout(() => al("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    vi.classList.contains("active") && or();
  });
  const So = i("pixelTrailCanvas"), Pi = So.getContext("2d");
  let Sa = !0, Ii = 0.7, Hi = 600, Lo = [], Fi = null, Ka = { x: 0, y: 0, ready: !1 };
  function il() {
    const e = c.getBoundingClientRect(), a = wi(), o = Math.min(window.devicePixelRatio || 1, 2), l = Math.max(1, e.width / a), u = Math.max(1, e.height / a);
    So.width = Math.max(1, Math.floor(l * o)), So.height = Math.max(1, Math.floor(u * o)), So.style.width = l + "px", So.style.height = u + "px", Pi.setTransform(o, 0, 0, o, 0, 0);
  }
  function wc(e, a) {
    if (!Sa) return;
    const o = performance.now();
    Ka.ready || (Ka = { x: e, y: a, ready: !0 });
    const l = 7;
    for (let u = 1; u <= l; u++) {
      const b = u / l;
      Lo.push({
        x: Ka.x + (e - Ka.x) * b,
        y: Ka.y + (a - Ka.y) * b,
        born: o - (l - u) * 10
      });
    }
    Ka = { x: e, y: a, ready: !0 };
  }
  function rr(e) {
    if (Fi = null, !p) return;
    if (!be.workout.classList.contains("active")) {
      Fi = requestAnimationFrame(rr);
      return;
    }
    const a = c.getBoundingClientRect(), o = wi();
    Pi.clearRect(0, 0, a.width / o, a.height / o), Sa && (Lo = Lo.filter((u) => e - u.born < Hi), Pi.fillStyle = i("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", Lo.forEach((u) => {
      const b = (e - u.born) / Hi, C = (1 - b) * Ii, D = Math.round(u.x / 14) * 14, $ = Math.round(u.y / 14) * 14;
      Pi.globalAlpha = Math.max(0, C);
      const ee = 2 + 5 * (1 - b) * Ii;
      Pi.fillRect(D - ee / 2, $ - ee / 2, ee, ee);
    }), Pi.globalAlpha = 1), Fi = requestAnimationFrame(rr);
  }
  c.addEventListener("pointermove", (e) => {
    const a = c.getBoundingClientRect(), o = wi();
    wc((e.clientX - a.left) / o, (e.clientY - a.top) / o);
  }), c.addEventListener("pointerleave", () => Ka.ready = !1), new ResizeObserver(il).observe(c), il(), Fi = requestAnimationFrame(rr);
  const $a = i("movementRippleCanvas"), Oi = $a.getContext("2d");
  let xi = !0, Wi = null, xc = performance.now();
  function ol() {
    const e = $a.parentElement.getBoundingClientRect(), a = wi(), o = Math.max(1, e.width / a), l = Math.max(1, e.height / a), u = Math.min(window.devicePixelRatio || 1, 2);
    $a.width = Math.max(1, Math.floor(o * u)), $a.height = Math.max(1, Math.floor(l * u)), $a.style.width = o + "px", $a.style.height = l + "px", Oi.setTransform(u, 0, 0, u, 0, 0);
  }
  function rl() {
    var e;
    return Wt || ((e = pe[ze]) == null ? void 0 : e.kind) === "rest";
  }
  function yc() {
    const e = pe[ze];
    return rl() ? 2200 : e ? e.kind === "warmup" || e.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function sr(e) {
    if (Wi = null, !p) return;
    if (!be.workout.classList.contains("active")) {
      Wi = requestAnimationFrame(sr);
      return;
    }
    const a = $a.parentElement.getBoundingClientRect(), o = wi(), l = Math.max(1, a.width / o), u = Math.max(1, a.height / o);
    if (Oi.clearRect(0, 0, l, u), xi) {
      const b = yc(), C = (e - xc) % b / b, D = 15, $ = Math.max(8, Math.round(D * u / Math.max(1, l))), ee = l / (D + 1), Y = u / ($ + 1), j = l * 0.5, xe = u * 0.52, Oe = Math.hypot(j, xe), ve = i("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let fe = 1; fe <= $; fe++)
        for (let nt = 1; nt <= D; nt++) {
          const at = nt * ee, Te = fe * Y, ot = Math.hypot(at - j, Te - xe) / Oe, gt = rl(), $e = gt ? Math.exp(-Math.pow((ot - (C * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, je = Math.exp(-Math.pow((ot - C * 1.25) * 7, 2)), Vt = gt ? $e : je, en = gt ? 0.5 + 0.5 * Math.sin(C * Math.PI * 2 - ot * 3) ** 2 : 0.35 + 0.65 * Math.sin(C * Math.PI * 2 - ot * 5) ** 2, Tt = gt ? 1.4 + Vt * 4.2 * en : 1.2 + Vt * 5 * en;
          Oi.beginPath(), Oi.arc(at, Te, Tt, 0, Math.PI * 2), Oi.fillStyle = `rgba(${ve},${gt ? 0.08 + Vt * 0.48 : 0.05 + Vt * 0.55})`, Oi.fill();
        }
    }
    Wi = requestAnimationFrame(sr);
  }
  new ResizeObserver(ol).observe($a.parentElement), ol(), Wi = requestAnimationFrame(sr);
  const To = i("exerciseTitle"), La = i("exerciseMeta"), Jr = i("stepLabel"), Xr = i("digits"), sl = i("fill"), qi = i("progress"), Qr = i("pause"), kc = i("nextName"), Mc = i("nextMeta"), Cc = i("nextIcon"), lr = i("skipNextSession");
  let Nn = null;
  function Bn(e) {
    for (let a = Math.max(0, e); a < pe.length; a++)
      if (!pe[a].sessionHidden) return a;
    return -1;
  }
  function Sc() {
    const e = pe[ze];
    if (!e) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (Wt) {
      const l = Bn(ze + 1), u = l >= 0 ? pe[l] : null;
      return u ? { name: u.name, meta: ts(u), icon: es(u) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (e.rest > 0) return { name: "Rest", meta: e.rest + " sec · " + (e.roundBreakAfter ? "round " + (e.round + 1) + " next" : "recovery"), icon: "pause" };
    const a = Bn(ze + 1), o = a >= 0 ? pe[a] : null;
    return o ? { name: o.name, meta: ts(o), icon: es(o) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function Lc() {
    if (!pe[ze]) return pe.length;
    const a = Bn(ze + 1);
    return a < 0 ? pe.length : a + 1;
  }
  function es(e) {
    return e.kind === "video" ? "play" : "clock";
  }
  function ts(e) {
    return e.kind === "video" ? "YouTube · " + Jn(e.duration) : e.group + " · " + e.duration + " sec";
  }
  function dr() {
    return pe.length && pe[pe.length - 1].round || 1;
  }
  function ll(e) {
    const a = pe[e];
    if (!a) return "";
    const o = dr();
    if (o <= 1) return "Step " + (e + 1) + " of " + pe.length;
    if (a.roundBreak) return "Round " + a.round + " of " + o + " · Rest";
    const l = pe.filter((u) => u.round === a.round && !u.roundBreak).length;
    return "Round " + a.round + " of " + o + " · Step " + (a.roundIndex + 1) + " of " + l;
  }
  function dl() {
    return qi.querySelector('[data-step="' + ze + '"]');
  }
  function Tc() {
    pe[ze] && Number(qi.dataset.round) !== (pe[ze].round || 1) && is(), [...qi.children].forEach((e) => {
      const a = Number(e.dataset.step);
      e.classList.toggle("done", a < ze), e.classList.toggle("active", a === ze), e.classList.toggle("rewindable", a <= ze), e.disabled = a > ze, a === ze && e.style.setProperty("--segment-progress", "0%");
    }), pe[ze] && (Jr.textContent = ll(ze), ki());
  }
  function Ac(e) {
    const a = pe.indexOf(e);
    a < 0 || a <= ze || (e.sessionHidden = !e.sessionHidden, yi(), kt((e.sessionHidden ? "Hidden " : "Included ") + e.name + " for this session"));
  }
  function cl() {
    const e = i("upcomingList");
    if (!e) return;
    e.innerHTML = "";
    const a = Lc(), o = pe.slice(a);
    ($n === "all" ? o : o.slice(0, Math.max(1, Number($n) || 1))).forEach((u) => {
      const b = document.createElement("section");
      b.className = "upcomingCard" + (u.sessionHidden ? " sessionHidden" : "") + (cs(u) ? " noMeta" : ""), b.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + le(es(u)) + '</div><div><div class="upcomingName">' + Fe(u.name) + '</div><div class="upcomingMeta">' + Fe(ts(u)) + (dr() > 1 ? " · round " + u.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (u.sessionHidden ? "Include this session" : "Skip this session") + "</button>", b.querySelector(".skipSessionBtn").addEventListener("click", () => Ac(u)), e.appendChild(b);
    });
  }
  function yi() {
    var a;
    const e = Sc();
    kc.textContent = e.name, Mc.textContent = e.meta, Cc.innerHTML = le(e.icon);
    {
      const o = Wt ? pe[Bn(ze + 1)] : ((a = pe[ze]) == null ? void 0 : a.rest) > 0 ? { kind: "rest" } : pe[Bn(ze + 1)];
      n.querySelector(".nextCard").classList.toggle("noMeta", !!(o && cs(o)));
    }
    if (Nn = null, Wt) {
      const o = Bn(ze + 1);
      o >= 0 && (Nn = pe[o]);
    } else {
      const o = pe[ze];
      if (o && o.rest > 0)
        Nn = null;
      else {
        const l = Bn(ze + 1);
        l >= 0 && (Nn = pe[l]);
      }
    }
    lr && (lr.hidden = !Nn, lr.textContent = Nn != null && Nn.sessionHidden ? "Include this session" : "Skip this session"), cl();
  }
  lr.addEventListener("click", () => {
    Nn && (Nn.sessionHidden = !Nn.sessionHidden, kt((Nn.sessionHidden ? "Hidden " : "Included ") + Nn.name + " for this session"), yi());
  });
  let ha = null, ns = null;
  function Ao(e, a = {}) {
    const o = Ie[Ne];
    r.fire(e, { move: (o == null ? void 0 : o.name) || "", move_id: Ne, ...a });
  }
  function _c() {
    const e = Ie[Ne];
    ha = { key: Ne, name: (e == null ? void 0 : e.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(ns), ns = setInterval(() => {
      ha && !Qt && ha.active++;
    }, 1e3), Ao("started", { steps: pe.length });
  }
  function ul(e) {
    if (clearInterval(ns), !ha) return;
    const a = ha;
    ha = null, Ao(e ? "completed" : "ended", { seconds: a.active }), !(a.active < 30) && (me.history.unshift({ id: "h-" + a.startedAt, move_id: a.key, name: a.name, start: new Date(a.startedAt).toISOString(), seconds: a.active, completed: e }), me.history = me.history.slice(0, 1e3), rn(), Mi(), Aa());
  }
  function Ec() {
    w("workout"), Dc();
    const e = Bn(0);
    e >= 0 && pe[e].kind === "video" && gl(pe[e]);
  }
  function as() {
    ur(), ul(!1), clearInterval(Nt), clearInterval(En), Wt = !1, Ta(!1), i("app").classList.remove("resting"), vi.classList.remove("active"), w("home");
  }
  function Dc() {
    vi.classList.add("active");
    let e = 5;
    Ni.textContent = e, requestAnimationFrame(or), clearInterval(En), En = setInterval(() => {
      e--, e > 0 ? (Ni.textContent = e, or()) : (clearInterval(En), Ni.textContent = "GO", or(), setTimeout(() => {
        vi.classList.remove("active"), cancelAnimationFrame(Ca), Nc();
      }, 650));
    }, 1e3);
  }
  function is() {
    var a;
    qi.innerHTML = "";
    const e = ((a = pe[Math.max(0, ze)] || pe[0]) == null ? void 0 : a.round) || 1;
    qi.dataset.round = e, pe.forEach((o, l) => {
      if ((o.round || 1) !== e) return;
      const u = document.createElement("button");
      u.dataset.step = l, u.type = "button", u.className = "progressSegment", u.setAttribute("aria-label", "Go to " + o.name), u.addEventListener("click", () => {
        l <= ze && Rc(l);
      }), qi.appendChild(u);
    });
  }
  function Ta(e) {
    e = !!e;
    const a = Qt !== e;
    if (Qt = e, Qr.textContent = e ? "Resume" : "Pause", i("app").classList.toggle("paused", e), gn && Lt)
      try {
        e ? Lt.pauseVideo() : Lt.playVideo();
      } catch {
      }
    a && ha && Ao(e ? "paused" : "resumed");
  }
  function Rc(e) {
    e < 0 || e >= pe.length || e > ze || (clearInterval(Nt), Wt = !1, i("app").classList.remove("resting"), ze = e, Ta(!1), Yi(), Nt = setInterval(Ja, 1e3));
  }
  function Nc() {
    if (ze = Bn(0), Ta(!1), is(), ze < 0) {
      To.textContent = "No activities", La.textContent = "Open Edit and enable or add a movement", La.hidden = !1;
      return;
    }
    _c(), Yi(), clearInterval(Nt), Nt = setInterval(Ja, 1e3);
  }
  const pl = i("videoStage"), zi = i("videoSound"), Bc = 0, Vi = 1, Pc = 2;
  let ml = 0, ji = null, Gi = null, Lt = null, Ui = null, cr = 0, os = !1, gn = null, rs = null;
  function fl() {
    var e;
    return (e = window.YT) != null && e.Player ? Promise.resolve(window.YT) : ji || (ji = new Promise((a, o) => {
      const l = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          l == null || l();
        } catch {
        }
      };
      const u = setInterval(() => {
        var C;
        (C = window.YT) != null && C.Player && (clearInterval(u), clearTimeout(b), a(window.YT));
      }, 100), b = setTimeout(() => {
        clearInterval(u), ji = null, o(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const C = document.createElement("script");
        C.src = "https://www.youtube.com/iframe_api", C.async = !0, C.onerror = () => {
          clearInterval(u), clearTimeout(b), ji = null, o(new Error("YouTube did not load"));
        }, document.head.appendChild(C);
      }
    }), ji);
  }
  function hl() {
    return Gi || (Gi = fl().then((e) => new Promise((a) => {
      const o = document.createElement("div");
      i("videoFrame").appendChild(o), Lt = new e.Player(o, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => a(Lt), onStateChange: (l) => Hc(l.data), onError: (l) => Fc(l.data) }
      });
    })), Gi.catch(() => {
      Gi = null;
    }), Gi);
  }
  function gl(e) {
    !(e != null && e.videoId) || e.videoError || hl().then((a) => {
      gn || Ui === e.videoId || (Ui = e.videoId, cr = Number(e.start) || 0, os = !1, a.mute(), a.loadVideoById({ videoId: e.videoId, startSeconds: cr }));
    }).catch(() => {
    });
  }
  function Ic() {
    const e = Bn(ze + 1);
    e >= 0 && pe[e].kind === "video" && gl(pe[e]);
  }
  function Hc(e) {
    if (!gn) {
      e === Vi && !os && (os = !0, Lt.pauseVideo(), Lt.seekTo(cr, !0));
      return;
    }
    pl.classList.toggle("playing", e === Vi), pe[ze] === gn && performance.now() > ml && (e === Vi && Qt ? Ta(!1) : e === Pc && !Qt && Ta(!0)), e === Vi && wl(gn.videoId, Lt.getDuration()) && rn(), e === Bc && _o();
  }
  function Fc(e) {
    const a = gn;
    if (!a) {
      Ui = null;
      return;
    }
    e === 101 || e === 150 ? (qc(a.videoId), kt("That video can’t play outside YouTube, so it was skipped")) : kt("The video couldn’t play, so it was skipped"), _o();
  }
  function Oc(e) {
    if (i("app").classList.add("videoStep"), zi.hidden = !0, gn = e, clearTimeout(rs), !e.videoId) {
      kt("This video step has no link yet, so it was skipped"), setTimeout(() => _o(), 0);
      return;
    }
    hl().then((a) => {
      if (gn !== e) return;
      ml = performance.now() + 1500;
      const o = Number(e.start) || 0;
      Ui !== e.videoId ? (Ui = e.videoId, cr = o, a.loadVideoById({ videoId: e.videoId, startSeconds: o })) : (a.seekTo(o, !0), a.playVideo()), a.unMute(), Qt && a.pauseVideo(), rs = setTimeout(() => {
        gn !== e || Qt || (a.getPlayerState() !== Vi ? (a.mute(), a.playVideo(), zi.hidden = !1) : a.isMuted() && (zi.hidden = !1));
      }, 1600);
    }).catch(() => {
      gn === e && (kt("YouTube didn’t load, so the video was skipped"), _o());
    });
  }
  function vl() {
    if (!i("app").classList.contains("videoStep")) return;
    const e = n.querySelector(".workGrid"), a = n.querySelector(".sessionControlRow"), o = e.getBoundingClientRect().top, l = (a == null ? void 0 : a.offsetHeight) || 42, u = window.innerHeight - o - 16 - l - 84;
    e.style.setProperty("--theater-h", Math.max(240, Math.round(u)) + "px");
  }
  window.addEventListener("resize", vl);
  function ur() {
    clearTimeout(rs);
    const e = gn;
    if (gn = null, i("app").classList.remove("videoStep"), pl.classList.remove("playing"), zi.hidden = !0, e && Lt) {
      try {
        Lt.pauseVideo();
      } catch {
      }
      Ui = null;
    }
  }
  function _o() {
    const e = gn;
    !e || pe[ze] !== e || (ur(), clearInterval(Nt), Zi(), Nt = setInterval(Ja, 1e3));
  }
  zi.addEventListener("click", () => {
    Lt && (Lt.unMute(), Lt.playVideo()), zi.hidden = !0;
  });
  function Wc(e) {
    var l;
    const a = Number(e.start) || 0;
    if (e.useVideoLength === !1) return a + (Number(e.duration) || 300);
    const o = Lt && gn === e && Number((l = Lt.getDuration) == null ? void 0 : l.call(Lt)) || 0;
    return Number(e.end) || o || Number(e.videoDuration) || a + (Number(e.duration) || 300);
  }
  function bl(e, a) {
    const o = Ie[Ne];
    [jt, _t, an, o == null ? void 0 : o.warmup, o == null ? void 0 : o.strength, o == null ? void 0 : o.cooldown, o == null ? void 0 : o.sequence].forEach((l) => (Array.isArray(l) ? l : []).forEach((u) => {
      u && u.kind === "video" && u.videoId === e && a(u);
    }));
  }
  function wl(e, a) {
    a = Math.round(Number(a) || 0);
    let o = !1;
    return e && a > 0 && bl(e, (l) => {
      l.videoDuration !== a && (l.videoDuration = a, o = !0);
    }), o;
  }
  function qc(e) {
    bl(e, (a) => {
      a.videoError = "embed";
    }), rn();
  }
  function zc(e) {
    const a = e.videoId;
    if (!a) return;
    const o = () => {
      Ve.classList.contains("open") ? Me || G() : (G(), rn());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + a)).then((l) => l.ok ? l.json() : Promise.reject(l.status)).then((l) => {
      e.videoId === a && (e.videoTitle = l.title || "", e.autoName && l.title && (e.name = l.title), o());
    }).catch((l) => {
      e.videoId === a && l === 401 && (e.videoError = "embed", o());
    }), Vc(a).then((l) => {
      wl(a, l) && o();
    }).catch((l) => {
      l === "embed" && e.videoId === a && (e.videoError = "embed", o());
    });
  }
  function Vc(e) {
    return fl().then((a) => new Promise((o, l) => {
      const u = document.createElement("div");
      u.className = "videoProbe", u.setAttribute("aria-hidden", "true");
      const b = document.createElement("div");
      u.appendChild(b), i("app").appendChild(u);
      let C = null, D = !1;
      const $ = (j, xe) => {
        D || (D = !0, clearTimeout(ee), setTimeout(() => {
          try {
            C == null || C.destroy();
          } catch {
          }
          u.remove();
        }, 0), xe ? l(xe) : o(j));
      }, ee = setTimeout(() => $(0), 2e4), Y = () => {
        var xe;
        const j = Number((xe = C == null ? void 0 : C.getDuration) == null ? void 0 : xe.call(C)) || 0;
        return j > 0 && $(j), j > 0;
      };
      C = new a.Player(b, {
        width: 320,
        height: 180,
        videoId: e,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            Y() || (C.mute(), C.playVideo());
          },
          onStateChange: () => Y(),
          onError: (j) => $(0, j.data === 101 || j.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function Yi() {
    Wt = !1;
    const e = pe[ze];
    i("app").classList.toggle("resting", e.kind === "rest"), e.kind === "video" ? Oc(e) : ur(), St = e.duration, Kn = e.duration, To.textContent = e.name, La.textContent = e.group, La.hidden = !0, Jr.textContent = ll(ze), ha && Ao("step", { name: e.name, group: e.group, kind: e.kind, step: ze + 1, of: pe.length, round: e.round || 1, rounds: dr(), duration: e.duration }), yi(), Tc(), Ic(), e.kind === "video" && setTimeout(vl, 0);
  }
  function ki() {
    var u;
    const e = ((u = pe[ze]) == null ? void 0 : u.kind) === "video" && !Wt, a = e && St >= 60;
    Xr.textContent = a ? Jn(St) : St, Xr.classList.toggle("long", a), e && (i("videoClock").textContent = Jn(St) + " left");
    const o = St / Kn * 100;
    sl.style.width = o + "%";
    const l = dl();
    if (l && !Wt) {
      const b = 100 - o;
      l.style.setProperty("--segment-progress", b + "%");
    }
  }
  function Ja() {
    var a, o;
    if (Qt) return;
    const e = pe[ze];
    if ((e == null ? void 0 : e.kind) === "video" && !Wt && gn === e) {
      const l = Number((a = Lt == null ? void 0 : Lt.getCurrentTime) == null ? void 0 : a.call(Lt)) || 0, u = Number(e.start) || 0, b = Wc(e);
      Kn = Math.max(1, b - u), (l > u || ((o = Lt == null ? void 0 : Lt.getPlayerState) == null ? void 0 : o.call(Lt)) === Vi) && (St = Math.max(0, Math.ceil(b - l))), ki(), l > u && l >= b - 0.25 && _o();
      return;
    }
    St--, ki(), St <= 0 && (e.rest > 0 ? xl(e.rest) : Zi());
  }
  function xl(e) {
    var o;
    Wt = !0, i("app").classList.add("resting");
    const a = dl();
    a && a.style.setProperty("--segment-progress", "100%"), clearInterval(Nt), St = e, Kn = e, ha && Ao("rest", { duration: e }), To.textContent = "Rest", La.textContent = (o = pe[ze]) != null && o.roundBreakAfter ? "Round " + (pe[ze].round + 1) + " next" : "Recovery", yi(), ki(), Nt = setInterval(() => {
      Qt || (St--, ki(), St <= 0 && (clearInterval(Nt), Zi(), Nt = setInterval(Ja, 1e3)));
    }, 1e3);
  }
  function Zi() {
    Wt = !1;
    const e = Bn(ze + 1);
    if (e >= 0)
      ze = e, Yi();
    else {
      clearInterval(Nt), ur(), Ta(!1), i("app").classList.remove("resting"), To.textContent = "Complete", La.textContent = "Move finished", La.hidden = !1, Xr.textContent = "✓";
      {
        const a = dr();
        Jr.textContent = a > 1 ? a + " rounds done" : pe.filter((o) => !o.roundBreak).length + " steps done";
      }
      ul(!0);
      {
        const a = El(7).reduce((o, l) => o + l.minutes, 0);
        La.textContent = "Move finished · " + a + " min in the last 7 days";
      }
      sl.style.width = "100%", yi();
    }
  }
  i("skipExercise").addEventListener("click", () => {
    jc(), Ta(!1);
  });
  function jc() {
    clearInterval(Nt);
    const e = pe[ze];
    if (Wt) {
      Wt = !1, i("app").classList.remove("resting");
      const o = Bn(ze + 1);
      o >= 0 ? (ze = o, Yi(), Nt = setInterval(Ja, 1e3)) : Zi();
      return;
    }
    if (e && e.rest > 0) {
      xl(e.rest);
      return;
    }
    const a = Bn(ze + 1);
    a >= 0 ? (ze = a, Yi(), Nt = setInterval(Ja, 1e3)) : Zi();
  }
  i("restartSegment").addEventListener("click", () => {
    if (clearInterval(Nt), Ta(!1), Wt) {
      const e = pe[ze];
      St = e.rest, Kn = e.rest, To.textContent = "Rest", La.textContent = "Recovery", i("app").classList.add("resting"), yi(), ki();
    } else
      Yi();
    Nt = setInterval(Wt ? () => {
      Qt || (St--, ki(), St <= 0 && (clearInterval(Nt), Zi(), Nt = setInterval(Ja, 1e3)));
    } : Ja, 1e3);
  });
  function Eo(e, a, o, l) {
    let u = 0, b = null, C = !1;
    function D() {
      b && cancelAnimationFrame(b), b = null, u = 0, C = !1, a.style.width = "0%", e.classList.remove("holding");
    }
    function $(j) {
      if (!C) return;
      u || (u = j);
      const xe = Math.min(1, (j - u) / o);
      if (a.style.width = xe * 100 + "%", xe >= 1) {
        C = !1, b && cancelAnimationFrame(b), b = null, a.style.width = "100%", setTimeout(() => a.style.width = "0%", 90), l();
        return;
      }
      b = requestAnimationFrame($);
    }
    function ee(j) {
      var xe;
      if (!(j && j.button !== void 0 && j.button !== 0)) {
        j == null || j.preventDefault(), D(), C = !0, e.classList.add("holding");
        try {
          (xe = e.setPointerCapture) == null || xe.call(e, j.pointerId);
        } catch {
        }
        b = requestAnimationFrame($);
      }
    }
    function Y() {
      C && D();
    }
    e.addEventListener("pointerdown", ee), e.addEventListener("pointerup", Y), e.addEventListener("pointercancel", Y), e.addEventListener("lostpointercapture", Y), e.addEventListener("keydown", (j) => {
      (j.key === " " || j.key === "Enter") && !j.repeat && ee(j);
    }), e.addEventListener("keyup", (j) => {
      (j.key === " " || j.key === "Enter") && Y();
    });
  }
  const Gc = i("endWorkout");
  Eo(Gc, i("holdEndFill"), 1500, as);
  const Ki = i("deleteMoveConfirm");
  i("deleteMoveOpen").addEventListener("click", () => {
    Ki.classList.add("open"), Ki.setAttribute("aria-hidden", "false");
  }), i("deleteMoveCancel").addEventListener("click", () => {
    Ki.classList.remove("open"), Ki.setAttribute("aria-hidden", "true");
  });
  function Uc() {
    const e = Ne, a = n.querySelector('.workoutPanel[data-workout="' + e + '"]');
    a && a.remove(), delete Ie[e], me.order = me.order.filter((l) => l !== e);
    let o = n.querySelector(".workoutPanel[data-workout]");
    if (!o) {
      const l = "custom-" + Date.now();
      Ie[l] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, me.order.push(l), o = Ot(l, Ie[l]);
    }
    Ki.classList.remove("open"), Ki.setAttribute("aria-hidden", "true"), ke = null, oa(), Cn(o.dataset.workout), rn(), kt("Move deleted");
  }
  Eo(i("deleteMoveYes"), i("deleteMoveFill"), 1500, Uc);
  const ss = n.querySelector(".rubberTabs"), $i = i("rubberIndicator");
  function Do(e, a = !0) {
    if (!e || !ss || !$i) return;
    const o = ss.getBoundingClientRect(), l = e.getBoundingClientRect();
    $i.style.transition = a ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const u = wi();
    $i.style.left = (l.left - o.left) / u + ss.scrollLeft + "px", $i.style.width = l.width / u + "px", a && ($i.style.transform = "scaleX(1.08)", setTimeout(() => $i.style.transform = "scaleX(1)", 180));
  }
  n.querySelectorAll(".tab").forEach((e) => e.addEventListener("click", () => {
    e.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), n.querySelectorAll(".tab").forEach((a) => a.classList.remove("active")), n.querySelectorAll(".settingsPane").forEach((a) => a.classList.remove("active")), e.classList.add("active"), i(e.dataset.pane).classList.add("active"), Do(e, !0);
  })), requestAnimationFrame(() => Do(n.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => Do(n.querySelector(".tab.active"), !1));
  const ls = i("pixelTrailToggle"), ds = i("rippleToggle"), Ji = i("trailStrength"), Xi = i("trailLife");
  function un(e, a) {
    rt()[e] = a, rn();
  }
  const yl = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function kl(e) {
    return e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "g:" + String(e.group || "").trim().toLowerCase();
  }
  function cs(e) {
    var a;
    return !!((a = rt().hideMeta) != null && a[kl(e)]);
  }
  function Yc() {
    const e = /* @__PURE__ */ new Map(), a = (o, l, u) => {
      if (!o) return;
      Array.isArray(o) && (o = { name: o[1], group: o[2], kind: "work" });
      const b = kl(o);
      let C = e.get(b);
      C || (C = { key: b, label: b === "rest" ? "Rest" : b === "video" ? "Video" : String(o.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, e.set(b, C)), C.kinds.add(b === "rest" ? "Rest" : b === "video" ? "Video" : l), C.moves.add(u), C.count++;
    };
    return Object.values(Ie).forEach((o) => {
      const l = o.name || "Move";
      (o.warmup || (o.customSequence ? [] : At)).forEach((u) => a(u, "Warm-up", l)), (o.customSequence ? o.sequence || [] : o.strength || []).forEach((u) => a(u, u.presetRole === "warmup" ? "Warm-up" : u.presetRole === "cooldown" ? "Cooldown" : "Movement", l)), (o.cooldown || (o.customSequence ? [] : sa)).forEach((u) => a(u, "Cooldown", l));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([o, l]) => {
      e.has(o) || e.set(o, { key: o, label: l, kinds: /* @__PURE__ */ new Set([l]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...e.values()].map((o) => ({ ...o, kind: o.kinds.has("Movement") ? "Movement" : [...o.kinds][0], moves: [...o.moves] })).sort((o, l) => yl.indexOf(o.kind) - yl.indexOf(l.kind) || o.label.localeCompare(l.label));
  }
  let us = "all";
  function ps() {
    const e = i("metaSearch").value.trim().toLowerCase();
    return Yc().filter((a) => (us === "all" || a.kind === us) && (!e || a.label.toLowerCase().includes(e) || a.moves.some((o) => o.toLowerCase().includes(e))));
  }
  function pr() {
    const e = i("metaTableBody");
    if (!e) return;
    const a = rt().hideMeta || {}, o = ps();
    e.innerHTML = o.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', o.forEach((u) => {
      const b = !a[u.key], C = u.count ? (u.moves.length > 2 ? u.moves.slice(0, 2).join(", ") + " + " + (u.moves.length - 2) + " more" : u.moves.join(", ")) + " · " + u.count + " step" + (u.count === 1 ? "" : "s") : "Not used yet", D = document.createElement("tr");
      D.className = b ? "" : "off", D.innerHTML = '<td><div class="metaType">' + Fe(u.label) + '</div><div class="metaSub">' + Fe(u.kind + " · " + C) + '</div></td><td class="metaKindCol">' + Fe(u.kind) + '</td><td class="metaUsedCol">' + Fe(C) + '</td><td class="metaSwitchCol"><button class="switch' + (b ? " on" : "") + '" type="button" role="switch" aria-checked="' + b + '" aria-label="Second line for ' + Fe(u.label) + ' on phones"></button></td>', D.querySelector(".switch").addEventListener("click", () => ms([u.key], b)), e.appendChild(D);
    });
    const l = o.filter((u) => a[u.key]).length;
    i("metaCount").textContent = o.length ? o.length + " type" + (o.length === 1 ? "" : "s") + (l ? " · " + l + " hidden on phones" : "") : "";
  }
  function ms(e, a) {
    const o = { ...rt().hideMeta || {} };
    e.forEach((l) => {
      a ? o[l] = !0 : delete o[l];
    }), un("hideMeta", o), pr(), yt(), yi();
  }
  i("metaSearch").addEventListener("input", pr), i("metaKinds").querySelectorAll(".kindChip").forEach((e) => e.addEventListener("click", () => {
    us = e.dataset.kind, i("metaKinds").querySelectorAll(".kindChip").forEach((a) => a.classList.toggle("active", a === e)), pr();
  })), i("metaHideAll").addEventListener("click", () => ms(ps().map((e) => e.key), !0)), i("metaShowAll").addEventListener("click", () => ms(ps().map((e) => e.key), !1));
  const Xa = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...rt().toggles || {} };
  function Ml() {
    n.querySelectorAll("[data-toggle]").forEach((o) => o.classList.toggle("on", Xa[o.dataset.toggle] !== !1)), n.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([o, l]) => {
      i(l).hidden = Xa[o] === !1;
    });
    const e = ["steps", "mood", "energyLevel"].some((o) => Xa[o] !== !1);
    n.querySelector(".activityCard").hidden = !e, i("weatherCard").hidden = Xa.weather === !1;
    const a = n.querySelector("#homeView .grid");
    a.classList.toggle("noActivity", !e), a.classList.toggle("noWeather", Xa.weather === !1);
  }
  n.querySelectorAll("[data-toggle]").forEach((e) => e.addEventListener("click", () => {
    Xa[e.dataset.toggle] = Xa[e.dataset.toggle] === !1, Ml(), un("toggles", { ...Xa });
  })), Ml();
  function Zc() {
    ls.classList.toggle("on", Sa), ds.classList.toggle("on", xi), Ji.value = Math.round(Ii * 100), i("trailStrengthValue").textContent = Ji.value + "%", Xi.value = Hi, i("trailLifeValue").textContent = Xi.value + " ms";
  }
  rt().trailEnabled !== void 0 && (Sa = rt().trailEnabled), rt().rippleEnabled !== void 0 && (xi = rt().rippleEnabled), rt().trailStrength !== void 0 && (Ii = rt().trailStrength), rt().trailMaxAge !== void 0 && (Hi = rt().trailMaxAge), Zc(), ls.addEventListener("click", () => {
    Sa = !Sa, ls.classList.toggle("on", Sa), Sa || (Lo = []), un("trailEnabled", Sa);
  }), ds.addEventListener("click", () => {
    xi = !xi, ds.classList.toggle("on", xi), un("rippleEnabled", xi);
  }), Ji.addEventListener("input", () => {
    Ii = Number(Ji.value) / 100, i("trailStrengthValue").textContent = Ji.value + "%";
  }), Ji.addEventListener("change", () => un("trailStrength", Ii)), Xi.addEventListener("input", () => {
    Hi = Number(Xi.value), i("trailLifeValue").textContent = Xi.value + " ms";
  }), Xi.addEventListener("change", () => un("trailMaxAge", Hi)), gi.addEventListener("change", () => un("upcomingCount", $n));
  function Cl(e) {
    n.querySelectorAll(".themeBtn").forEach((o) => o.classList.toggle("active", o.dataset.theme === e));
    const a = e === "light";
    i("app").classList.toggle("light", a), r.setLight(a), ga(n);
  }
  Cl(rt().theme || "dark"), n.querySelectorAll(".themeBtn").forEach((e) => e.addEventListener("click", () => {
    Cl(e.dataset.theme), un("theme", e.dataset.theme);
  }));
  const Xt = { steps: null, weather: null, ...rt().entities || {} };
  let qt = null, fs = {};
  function Kc(e) {
    const a = Object.values(e).filter((D) => D.entity_id.startsWith("sensor.") || D.entity_id.startsWith("input_number.")), o = (D) => D.attributes.friendly_name || D.entity_id, l = a.filter((D) => /step/i.test(D.entity_id) || /step/i.test(o(D)) || ["steps", "step"].includes(String(D.attributes.unit_of_measurement || "").toLowerCase())), u = a.filter((D) => !l.includes(D)), b = (D, $) => o(D).localeCompare(o($)), C = (D, $) => /health_steps/.test($.entity_id) - /health_steps/.test(D.entity_id) || b(D, $);
    return { suggested: l.sort(C), rest: u.sort(b), label: o };
  }
  function Sl(e) {
    const a = i("stepsEntity");
    if (!a || a.matches(":focus")) return;
    const { suggested: o, rest: l, label: u } = Kc(e), b = ($) => '<option value="' + Fe($.entity_id) + '">' + Fe(u($)) + "</option>";
    a.innerHTML = '<option value="">Not connected</option>' + (o.length ? '<optgroup label="Suggested">' + o.map(b).join("") + "</optgroup>" : "") + (l.length ? '<optgroup label="All sensors">' + l.map(b).join("") + "</optgroup>" : ""), a.value = Xt.steps || "";
    const C = i("stepsStatus"), D = Xt.steps && e[Xt.steps];
    C.textContent = D ? "Connected · " + u(D) : C.dataset.empty;
  }
  i("stepsEntity").addEventListener("change", () => {
    Xt.steps = i("stepsEntity").value || null, un("entities", { ...Xt }), fs = {}, _l(), qt && (Sl(qt), Tl(qt));
  });
  function $c(e, a = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: a }).format(e);
  }
  function Ll() {
    const e = Xt.steps && (qt == null ? void 0 : qt[Xt.steps]), a = Number(e == null ? void 0 : e.state);
    return Number.isFinite(a) ? a : null;
  }
  function Tl(e) {
    var l;
    const a = Xt.steps, o = a ? Number((l = e[a]) == null ? void 0 : l.state) : NaN;
    i("stepsMeta").textContent = a ? Number.isFinite(o) ? $c(o) : "—" : "Set up in Settings";
  }
  let Al = 0;
  async function _l() {
    const e = Xt.steps;
    if (!e || !r.ws) return;
    Al = Date.now();
    const a = /* @__PURE__ */ new Date(), o = new Date(a.getFullYear(), a.getMonth(), a.getDate() - 30);
    try {
      const l = await r.ws({ type: "recorder/statistics_during_period", start_time: o.toISOString(), end_time: a.toISOString(), statistic_ids: [e], period: "day", types: ["max"] }), u = (l == null ? void 0 : l[e]) || [], b = {};
      if (u.forEach((C) => {
        Number.isFinite(C.max) && (b[wt(new Date(C.start))] = C.max);
      }), !Object.keys(b).length) {
        const C = await r.ws({ type: "history/history_during_period", start_time: o.toISOString(), end_time: a.toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((C == null ? void 0 : C[e]) || []).forEach((D) => {
          const $ = Number(D.s ?? D.state), ee = D.lu ? D.lu * 1e3 : Date.parse(D.last_updated || D.last_changed);
          if (!Number.isFinite($) || !ee) return;
          const Y = wt(new Date(ee));
          b[Y] = Math.max(b[Y] || 0, $);
        });
      }
      fs = b, Aa();
    } catch {
    }
  }
  function Mi() {
    Aa();
  }
  Mi(), setInterval(() => {
    Mi(), ia(), ma();
  }, 10 * 60 * 1e3);
  function El(e) {
    const a = {}, o = {};
    me.history.forEach((C) => {
      const D = wt(new Date(C.start));
      a[D] = (a[D] || 0) + (C.seconds || 0) / 60, o[D] = (o[D] || 0) + 1;
    });
    const l = /* @__PURE__ */ new Date(), u = wt(l), b = [];
    for (let C = e - 1; C >= 0; C--) {
      const D = new Date(l.getFullYear(), l.getMonth(), l.getDate() - C), $ = wt(D), ee = me.checkins.filter((j) => j.date === $), Y = (j) => {
        const xe = ee.map((Oe) => Oe[j]).filter(Boolean);
        return xe.length ? xe.reduce((Oe, Ce) => Oe + Ce, 0) / xe.length : null;
      };
      b.push({
        key: $,
        date: D,
        minutes: Math.round(a[$] || 0),
        moves: o[$] || 0,
        steps: $ === u && Ll() != null ? Ll() : fs[$] ?? null,
        mood: Y("mood"),
        energy: Y("energy")
      });
    }
    return b;
  }
  function Jc(e) {
    let a = e.length - 1;
    e[a] && !e[a].minutes && a--;
    let o = 0;
    for (; a >= 0 && e[a].minutes > 0; )
      o++, a--;
    return o;
  }
  function Aa() {
    const e = i("insightCard");
    if (!e) return;
    const a = El(30), o = Jc(a), l = a.reduce((ee, Y) => ee + Y.minutes, 0), u = /* @__PURE__ */ new Date(), b = wt(u), C = wt(new Date(u.getFullYear(), u.getMonth(), u.getDate() - (u.getDay() + 6) % 7)), D = a.filter((ee) => ee.key >= C && ee.key <= b).reduce((ee, Y) => ee + Y.minutes, 0), $ = (ee, Y, j) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + ee + '</div><div><div class="activityRowName">' + Fe(Y) + '</div><div class="activityRowMeta">' + Fe(j) + "</div></div></div>";
    e.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + le("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + $(le("clock"), "This week", D + " min") + $(le("streak"), "Streak", o + " day" + (o === 1 ? "" : "s")) + $(le("calendar"), "30 days", l + " min") + "</div>";
  }
  const hs = {
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
  }, Xc = (e) => e === "sunny" ? "clear" : e === "clear-night" ? "night" : e === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(e) ? "rain" : ["snowy", "snowy-rainy"].includes(e) ? "snow" : "cloudy", Qi = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, mr = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let Dl = 0;
  const gs = (e, a) => '<path class="' + a + '" d="' + e + '"/>', Qc = (e, a) => ' style="animation-delay:-' + Math.round(e * 137 % a) + 'ms"', jn = (e, a, o, l) => {
    const u = o * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (l < 1 ? ' opacity="' + l + '"' : "") + Qc(e, 2400) + ' d="M' + e + " " + (a - o) + "L" + (e + u) + " " + (a - u) + "L" + (e + o) + " " + a + "L" + (e + u) + " " + (a + u) + "L" + e + " " + (a + o) + "L" + (e - u) + " " + (a + u) + "L" + (e - o) + " " + a + "L" + (e - u) + " " + (a - u) + 'Z"/>';
  }, Rl = ([e, a, o], l) => '<path class="wxMoonPath" d="' + e + '" fill="url(#' + l + ')"/><defs><linearGradient id="' + l + '" x1="0" y1="' + a + '" x2="0" y2="' + o + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', eu = (e, a) => a ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', tu = (e) => (e ? ["29.35", "43.04", "56.74"].map((a, o) => '<g class="wxDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wxAccent" x="' + a + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + a + ' 60.65)"/></g>') : [19, 26, 33].map((a, o) => '<g class="wxDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + a + ' 38)"/></g>')).join(""), nu = (e) => (e ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([a, o], l) => '<circle class="wxFlake" style="animation-delay:-' + l * 640 + 'ms" cx="' + a + '" cy="' + o + '" r="' + (e ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function Nl(e, a, o, l) {
    return e === "clear" ? a ? Rl(o ? mr.l : mr.s, l) + (o ? jn(70, 20, 5.83, 1) + jn(78.33, 41.67, 3.75, 0.8) + jn(60, 71.67, 3.33, 0.6) : jn(42, 12, 3.5, 1) + jn(47, 25, 2.25, 0.8) + jn(36, 43, 2, 0.6)) : eu(l, o) : e === "partly" ? (a ? Rl(o ? mr.lp : mr.sp, l) : o ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + gs(o ? Qi.lp : Qi.sp, a ? "wxCloudLight" : "wxBright") + (a ? o ? jn(73.33, 16.67, 4.17, 0.9) : jn(44, 10, 2.5, 0.9) : "") : e === "cloudy" ? gs(o ? Qi.lc : Qi.s, a ? "wxCloudLight" : "wxBright") + (a ? o ? jn(15, 15, 3.75, 0.8) + jn(76.67, 13.33, 2.92, 0.6) : jn(9, 9, 2.25, 0.8) + jn(46, 8, 1.75, 0.6) : "") : gs(o ? Qi.lr : Qi.s, "wxCloudLight") + (e === "rain" ? tu(o) : nu(o));
  }
  const au = () => {
    var e;
    return ((e = qt == null ? void 0 : qt["sun.sun"]) == null ? void 0 : e.state) === "below_horizon";
  };
  let pn = rt().weatherStyle || "bitmap", Ro = rt().weatherLayout === "strip" ? "strip" : "tiles", eo = rt().weatherMotion !== !1;
  const No = () => eo && !Se(), Bo = /* @__PURE__ */ new Map(), vs = 700, iu = (e) => {
    const [a, o] = e.split("/");
    return { k: a === "fog" ? "cloudy" : a === "storm" ? "rain" : a, night: o === "night" };
  };
  function Po(e, a, o, l = pn, u, b) {
    let C = Xc(e);
    const D = C === "night" || (b != null ? !!b : !!o && au());
    C === "night" && (C = "clear");
    const $ = a ? 90 : 54, ee = Gr(e, D), Y = performance.now();
    let j = u ? Bo.get(u) : null;
    if (u && !j ? Bo.set(u, j = { key: ee, t0: -1e9 }) : j && j.key !== ee && (j.fromKey = j.key, j.from = j.last || null, j.key = ee, j.t0 = Y), l !== "smooth") return '<span class="wxIcon pixels' + (a ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + ee + '"' + (u ? ' data-wx-slot="' + u + '"' : "") + ' data-wx-style="' + l + '" data-wx-size="' + $ + '"></canvas></span>';
    let xe = "";
    if (j && Y - j.t0 < vs && (No() || Se())) {
      const Oe = iu(j.fromKey);
      xe = '<span class="wxLayer wxOut ' + Oe.k + (Oe.night ? " night" : "") + '" style="animation-delay:' + Math.round(j.t0 - Y) + 'ms"><svg viewBox="0 0 ' + $ + " " + $ + '">' + Nl(Oe.k, Oe.night, a, "wxg" + ++Dl) + "</svg></span>";
    }
    return '<span class="wxIcon ' + C + (D ? " night" : "") + (a ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + $ + " " + $ + '">' + Nl(C, D, a, "wxg" + ++Dl) + "</svg>" + xe + "</span>";
  }
  function fr() {
    const e = i("app"), a = getComputedStyle(e), o = (D) => a.getPropertyValue(D).trim(), l = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([D, $]) => {
      o($) && (l[D] = o($));
    });
    const u = o("--color-text-primary") || "#f1f1f1", b = o("--color-bg-card") || "#222222", C = e.classList.contains("light");
    return { colors: l, ink: C ? u : b, paper: C ? b : u };
  }
  function ga(e, a = performance.now()) {
    const o = e.querySelectorAll("canvas[data-wx]");
    if (!o.length) return;
    const l = fr(), u = No(), b = Se();
    o.forEach((C) => {
      var j;
      const D = C.dataset.wx, $ = C.dataset.wxSlot ? Bo.get(C.dataset.wxSlot) : null;
      let ee = Us(D, l.colors);
      if ($ && $.key === D) {
        const xe = (a - $.t0) / vs;
        xe < 1 && (u || b) && (ee = yu($.from || Us($.fromKey, l.colors), ee, Math.max(0, xe), l.colors, b)), $.last = ee;
      }
      const Y = Gd(ee, { size: Number(C.dataset.wxSize) || 54, px: 2, oneBit: C.dataset.wxStyle === "onebit", colors: l.colors, ink: l.ink, paper: l.paper, clock: a, idle: u });
      C.width !== Y.w && (C.width = Y.w), C.height !== Y.h && (C.height = Y.h), (j = C.getContext("2d")) == null || j.putImageData(new ImageData(Y.data, Y.w, Y.h), 0, 0);
    });
  }
  let hr = null, Bl = -1;
  function Pl(e) {
    if (hr = null, !p) return;
    const a = No(), o = Math.floor(e / 100), l = [...Bo.values()].some(($) => e - $.t0 < vs), u = [...Io.values()].some(($) => e - $.t0 < $.dur), b = be.home.classList.contains("active"), C = An.classList.contains("open"), D = a && pn === "smooth" && (C || b && Ro === "strip");
    !document.hidden && (l || u || D || a && o !== Bl) && (Bl = o, b && (ga(i("weatherCard"), e), Ho(i("weatherCard"), e)), be.settings.classList.contains("active") && ga(Oo, e), C && (ga(An, e), Ho(An, e))), (a || l || u) && (hr = requestAnimationFrame(Pl));
  }
  function Qa() {
    i("app").classList.toggle("wxMotion", No()), !hr && p && (hr = requestAnimationFrame(Pl));
  }
  let gr = [], to, vr = null, bs = !1;
  const zt = 36e5, ou = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  let br = [], wr = null, xr = null;
  function _a() {
    const e = /* @__PURE__ */ new Date(), a = (b, C) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + b, C), o = wr === "hourly" ? br.map((b) => ({ t: +new Date(b.datetime), c: b.condition, temp: Number(b.temperature) })).filter((b) => Number.isFinite(b.t)).sort((b, C) => b.t - C.t) : [], l = wr === "twice_daily" ? br : [], u = [...Array(6)].map((b, C) => {
      const D = a(C, 6), $ = a(C, 18), ee = a(C + 1, 6), Y = gr.find((xe) => wt(new Date(xe.datetime)) === wt(D)), j = (xe, Oe, Ce) => {
        const ve = o.filter((at) => at.t >= +xe && at.t < +Oe);
        if (ve.length) {
          const at = {};
          return ve.forEach((Te) => {
            at[Te.c] = (at[Te.c] || 0) + (ou.has(Te.c) ? 2 : 1);
          }), Object.entries(at).sort((Te, ot) => ot[1] - Te[1])[0][0];
        }
        const fe = l.find((at) => {
          const Te = +new Date(at.datetime);
          return Te >= +xe - 3 * zt && Te < +Oe && (at.is_daytime == null || !!at.is_daytime == !Ce);
        });
        if (fe) return fe.condition;
        const nt = (Y == null ? void 0 : Y.condition) || "cloudy";
        return Ce && nt === "sunny" ? "clear-night" : nt;
      };
      return { start: +D, end: +ee, day: j(D, $, !1), night: j($, ee, !0), hi: Number(Y == null ? void 0 : Y.temperature), lo: Number(Y == null ? void 0 : Y.templow) };
    });
    return { days: u, hours: o, start: u[0].start, end: u[5].end };
  }
  const Il = (e, a) => {
    const o = e.days.findIndex((u) => a < u.end);
    if (o < 0) return 1;
    const l = e.days[o];
    return Math.max(0, (o + (a - l.start) / (l.end - l.start)) / 6);
  }, ru = (e, a) => {
    const o = Math.max(0, Math.min(0.99999, a)) * 6, l = Math.floor(o), u = e.days[l];
    return u.start + (o - l) * (u.end - u.start);
  };
  function ws(e, a) {
    const o = Math.max(0, e.days.findIndex(($) => a < $.end)), l = e.days[o], u = (a - l.start) / (l.end - l.start) >= 0.5;
    let b = u ? l.night : l.day, C = NaN;
    const D = e.hours;
    if (D.length && a >= D[0].t - zt && a <= D[D.length - 1].t + zt) {
      let $ = D.findIndex((j) => j.t > a);
      $ < 0 && ($ = D.length);
      const ee = D[Math.max(0, $ - 1)], Y = D[Math.min(D.length - 1, $)];
      b = ee.c || b, C = Y.t > ee.t ? ee.temp + (Y.temp - ee.temp) * Math.max(0, Math.min(1, (a - ee.t) / (Y.t - ee.t))) : ee.temp;
    }
    if (!Number.isFinite(C)) {
      const $ = [];
      if (e.days.forEach((ee) => {
        Number.isFinite(ee.lo) && $.push([ee.start - zt, ee.lo]), Number.isFinite(ee.hi) && $.push([ee.start + 9 * zt, ee.hi]);
      }), $.length) {
        C = a <= $[0][0] ? $[0][1] : $[$.length - 1][1];
        for (let ee = 1; ee < $.length; ee++) if (a <= $[ee][0] && a > $[ee - 1][0]) {
          const [Y, j] = $[ee - 1], [xe, Oe] = $[ee];
          C = j + (Oe - j) * (1 - Math.cos(Math.PI * (a - Y) / (xe - Y))) / 2;
          break;
        }
      }
    }
    return { cond: u && b === "sunny" ? "clear-night" : b, temp: C, night: u, day: l };
  }
  const Hl = (e) => wt(new Date(e)) === wt(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(e)), Io = /* @__PURE__ */ new Map(), su = 900, lu = 700;
  let yr = null;
  const Gn = typeof ResizeObserver == "function" ? new ResizeObserver((e) => e.forEach((a) => {
    Ho(a.target.parentElement), a.target.closest("#wxDialog") && jl();
  })) : null;
  function Ho(e, a = performance.now()) {
    const o = e.querySelectorAll("canvas[data-wx-strip]");
    if (!o.length) return;
    const l = _a(), u = l.days.flatMap((j) => [{ cond: j.day, night: !1 }, { cond: j.night, night: !0 }]), b = u.map((j) => j.cond).join(), C = fr(), D = No(), $ = Se(), ee = Number(wt(new Date(l.start)).replace(/\D/g, "")) % 9973;
    let Y = !1;
    o.forEach((j) => {
      var at;
      const xe = j.clientWidth, Oe = j.clientHeight;
      if (!xe || !Oe) return;
      const Ce = j.dataset.wxStrip;
      let ve = Io.get(Ce);
      ve ? ve.sig !== b && (ve.prev = ve.segs, ve.sig = b, ve.segs = u, ve.t0 = a, ve.dur = lu) : Io.set(Ce, ve = { sig: b, segs: u, prev: null, t0: a, dur: su });
      const fe = D || $ ? Math.min(1, Math.max(0, (a - ve.t0) / ve.dur)) : 1;
      fe < 1 && (Y = !0);
      const nt = { width: xe, height: Oe, colors: C.colors, clock: a, ambient: D, seed: ee, reveal: $ ? fe : 1 - Math.pow(1 - fe, 3), prev: fe < 1 ? ve.prev : null, reduce: $ };
      if (pn === "smooth") {
        const Te = Math.min(2, window.devicePixelRatio || 1), ot = Math.round(xe * Te), gt = Math.round(Oe * Te);
        j.width !== ot && (j.width = ot), j.height !== gt && (j.height = gt);
        const $e = j.getContext("2d");
        if (!$e) return;
        $e.setTransform(Te, 0, 0, Te, 0, 0), Iu($e, u, nt);
      } else {
        const Te = Pu(u, { ...nt, px: 2, oneBit: pn === "onebit", ink: C.ink, paper: C.paper });
        j.width !== Te.w && (j.width = Te.w), j.height !== Te.h && (j.height = Te.h), (at = j.getContext("2d")) == null || at.putImageData(new ImageData(Te.data, Te.w, Te.h), 0, 0);
      }
    }), Y && Qa();
  }
  function du(e) {
    return Object.values(e).filter((a) => a.entity_id.startsWith("weather.")).sort((a, o) => (a.attributes.friendly_name || a.entity_id).localeCompare(o.attributes.friendly_name || o.entity_id));
  }
  function Fl(e) {
    const a = i("weatherEntity");
    if (!a || a.matches(":focus")) return;
    const o = du(e);
    a.innerHTML = '<option value="">Not connected</option>' + o.map((u) => '<option value="' + Fe(u.entity_id) + '">' + Fe(u.attributes.friendly_name || u.entity_id) + "</option>").join(""), a.value = Xt.weather || "";
    const l = Xt.weather && e[Xt.weather];
    i("weatherStatus").textContent = l ? "Connected · " + (l.attributes.friendly_name || l.entity_id) : i("weatherStatus").dataset.empty;
  }
  function Ol() {
    const e = Xt.weather || null;
    if (e === to) return;
    if (to = e, gr = [], bs = !1, br = [], wr = null, [vr, xr].forEach((o) => o == null ? void 0 : o.then((l) => typeof l == "function" && l()).catch(() => {
    })), vr = null, xr = null, !e || !r.subscribe) {
      Ea();
      return;
    }
    vr = r.subscribe({ type: "weather/subscribe_forecast", forecast_type: "daily", entity_id: e }, (o) => {
      to === e && (gr = Array.isArray(o == null ? void 0 : o.forecast) ? o.forecast : [], Ea());
    }), vr.catch(() => {
      to === e && (bs = !0, Ea());
    });
    const a = (o) => {
      const l = r.subscribe({ type: "weather/subscribe_forecast", forecast_type: o, entity_id: e }, (u) => {
        to === e && (br = Array.isArray(u == null ? void 0 : u.forecast) ? u.forecast : [], wr = o, Ea());
      });
      return l.catch(() => {
        to === e && o === "hourly" && (xr = a("twice_daily"));
      }), l;
    };
    xr = a("hourly"), Ea();
  }
  i("weatherEntity").addEventListener("change", () => {
    Xt.weather = i("weatherEntity").value || null, un("entities", { ...Xt }), qt && Fl(qt), Ol();
  });
  function Ea() {
    const e = i("weatherCard");
    if (!e) return;
    const a = Xt.weather, o = a && (qt == null ? void 0 : qt[a]);
    if (!o) {
      e.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + Po("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (a ? "Not available" : "Set up in Settings") + "</div></div></div></div>", ga(e);
      return;
    }
    const l = o.attributes || {}, u = l.temperature_unit || "°", b = ($e) => Number.isFinite(Number($e)) ? Math.round(Number($e)) + "°" : "—", C = (l.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", D = hs[o.state] || (o.state ? o.state.charAt(0).toUpperCase() + o.state.slice(1) : "—"), $ = wt(/* @__PURE__ */ new Date()), ee = gr.slice(0, 7), Y = ee.find(($e) => wt(new Date($e.datetime)) === $) || null, j = ee.filter(($e) => wt(new Date($e.datetime)) >= $).slice(0, 6), xe = /* @__PURE__ */ new Date(), Oe = wt(new Date(xe.getFullYear(), xe.getMonth(), xe.getDate() + 1)), Ce = Y ? "H " + b(Y.temperature) + "&ensp; L " + b(Y.templow) : "", ve = ($e) => {
      const je = wt(new Date($e.datetime));
      return je === $ ? "Today" : je === Oe ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date($e.datetime));
    }, fe = Number.isFinite(Number(l.temperature)) ? Math.round(Number(l.temperature)) : "—", nt = ($e) => {
      const je = new Date($e.datetime);
      return Math.round((new Date(je.getFullYear(), je.getMonth(), je.getDate()) - new Date(xe.getFullYear(), xe.getMonth(), xe.getDate())) / 864e5);
    }, at = ($e) => (hs[$e] || $e || "").toLowerCase(), Te = ($e, je) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + nt($e) + '" aria-label="' + Fe(ve($e) + ": " + at($e.condition) + ", " + b($e.temperature) + " / " + b($e.templow) + ". Open the forecast") + '">' + Po($e.condition, !1, !1, pn, "day" + je) + '<div><div class="activityRowName">' + Fe(ve($e)) + '</div><div class="activityRowMeta">' + b($e.temperature) + " / " + b($e.templow) + "</div></div></div>", ot = () => '<div class="wxStrip"><div class="wxStripDays">' + _a().days.map((je, Vt) => {
      const Tt = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(je.start)) + ": " + at(je.day) + (at(je.day) === at(je.night) ? " all day and night" : ", then " + at(je.night) + " overnight") + (Number.isFinite(je.hi) ? ". High " + b(je.hi) : "") + (Number.isFinite(je.lo) ? ", low " + b(je.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + Vt + '" aria-label="' + Fe(Tt) + '"><span class="wxDayName">' + Fe(Hl(je.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + b(je.hi) + '</span><span class="wxLow">' + b(je.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    e.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + Fe("Now in " + C + ": " + fe + "°, " + at(o.state) + ". Open the forecast") + '"><div class="wxCurrent">' + Po(o.state, !0, !0, pn, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Fe(String(fe)) + '</span><span class="wxUnit">' + Fe(u) + '</span></div><div class="wxPlace">' + Fe(C) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Fe(D) + "</div>" + (Ce ? '<div class="wxRange">' + Ce + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (j.length ? Ro === "strip" ? ot() : '<div class="activityRows wxDays">' + j.map(Te).join("") + "</div>" : '<div class="wxNoDays">' + (bs ? "This weather service has no daily forecast" : "Loading the forecast…") + "</div>") + "</div>", ga(e);
    const gt = e.querySelector("canvas[data-wx-strip]");
    yr && yr !== gt && (Gn == null || Gn.unobserve(yr)), yr = gt, gt && (Gn == null || Gn.observe(gt), Ho(e)), Qa(), Vl();
  }
  const Wl = i("weatherCard"), ql = (e) => {
    const a = e.closest("[data-wx-day]");
    if (a) {
      const l = /* @__PURE__ */ new Date();
      zl(+new Date(l.getFullYear(), l.getMonth(), l.getDate() + Number(a.dataset.wxDay), 12), a);
      return;
    }
    const o = e.closest("[data-wx-open]");
    o && zl(Date.now(), o);
  };
  Wl.addEventListener("click", (e) => ql(e.target)), Wl.addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && e.target.matches("[data-wx-day],[data-wx-open]") && (e.preventDefault(), ql(e.target));
  });
  const An = i("wxDialog"), ei = i("wxGraph"), Fo = i("wxGraphWrap");
  let ra = Date.now(), Ci = null, xs = !1, no = null;
  function zl(e, a) {
    const o = _a();
    Ci = a || null, ra = Math.max(o.start, Math.min(o.end - zt, e)), Io.delete("dialog"), Bo.delete("scrub"), An.classList.add("open"), An.setAttribute("aria-hidden", "false"), Vl(), Gn == null || Gn.observe(An.querySelector("canvas[data-wx-strip]")), ei.focus({ preventScroll: !0 }), Qa();
  }
  function ys() {
    var e;
    An.classList.remove("open"), An.setAttribute("aria-hidden", "true"), Gn == null || Gn.unobserve(An.querySelector("canvas[data-wx-strip]")), (e = Ci == null ? void 0 : Ci.focus) == null || e.call(Ci, { preventScroll: !0 }), Ci = null;
  }
  function Vl() {
    if (!An.classList.contains("open")) return;
    const e = _a();
    i("wxGraphDays").innerHTML = e.days.map((a) => "<span>" + Fe(Hl(a.start)) + "</span>").join(""), jl(e), kr(e), Ho(An);
  }
  function kr(e = _a()) {
    const a = ws(e, ra), o = qt == null ? void 0 : qt[Xt.weather], l = (o == null ? void 0 : o.attributes) || {}, u = l.temperature_unit || "°", b = Math.abs(ra - Date.now()) < zt / 2, C = b && o ? o.state : a.cond, D = b && Number.isFinite(Number(l.temperature)) ? Math.round(Number(l.temperature)) : Number.isFinite(a.temp) ? Math.round(a.temp) : "—", $ = hs[C] || (C ? C.charAt(0).toUpperCase() + C.slice(1) : "—"), ee = b ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(ra / zt) * zt)), Y = a.day, j = (Number.isFinite(Y.hi) ? "H " + Math.round(Y.hi) + "°" : "") + (Number.isFinite(Y.lo) ? "&ensp; L " + Math.round(Y.lo) + "°" : "");
    i("wxDialogNow").innerHTML = '<div class="wxCurrent">' + Po(C, !0, b, pn, "scrub", b ? void 0 : a.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Fe(String(D)) + '</span><span class="wxUnit">' + Fe(u) + '</span></div><div class="wxPlace">' + Fe(ee) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Fe($) + "</div>" + (j ? '<div class="wxRange">' + j + "</div>" : "") + "</div>", ga(i("wxDialogNow")), ei.setAttribute("aria-valuenow", String(Math.round((ra - e.start) / zt))), ei.setAttribute("aria-valuetext", ee + ", " + $.toLowerCase() + ", " + D + "°"), ks(e), Qa();
  }
  function jl(e = _a()) {
    const a = i("wxGraphLine"), o = Fo.clientWidth, l = Fo.clientHeight;
    if (!o || !l) return;
    const u = [];
    for (let fe = e.start; fe <= e.end; fe += zt) {
      const nt = ws(e, fe).temp;
      Number.isFinite(nt) && u.push([Il(e, fe) * o, nt]);
    }
    if (a.setAttribute("viewBox", "0 0 " + o + " " + l), u.length < 2) {
      a.innerHTML = '<g id="wxCursorMark"></g>', no = null, ks(e);
      return;
    }
    const b = u.map((fe) => fe[1]), C = Math.min(...b), D = Math.max(...b), $ = Math.max(4, D - C), ee = pn !== "smooth", Y = (fe) => ee ? Math.round(fe / 2) * 2 : Math.round(fe * 10) / 10;
    no = (fe) => l * 0.84 - (fe - C) / $ * l * 0.62;
    const j = fr(), xe = pn === "onebit" ? j.paper : "#ffffff", Oe = pn === "onebit" ? j.ink : "rgba(0,0,0,.28)", Ce = "M" + u.map((fe) => Y(fe[0]) + " " + Y(no(fe[1]))).join(" L"), ve = (fe, nt) => {
      const at = u.find((Te) => Te[1] === fe);
      return '<text class="wxLineLabel" x="' + Y(Math.min(o - 14, Math.max(14, at[0]))) + '" y="' + Y(no(fe) + (nt ? 18 : -10)) + '" fill="' + xe + '" stroke="' + Oe + '">' + Math.round(fe) + "°</text>";
    };
    a.setAttribute("shape-rendering", ee ? "crispEdges" : "auto"), a.innerHTML = '<path d="' + Ce + '" fill="none" stroke="' + Oe + '" stroke-width="' + (ee ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + Ce + '" fill="none" stroke="' + xe + '" stroke-width="2" stroke-linejoin="round"/>' + ve(D, !1) + ve(C, !0) + '<g id="wxCursorMark"></g>', ks(e);
  }
  function ks(e = _a()) {
    const a = i("wxGraphLine").querySelector("#wxCursorMark");
    if (!a) return;
    const o = Fo.clientWidth, l = Fo.clientHeight, u = pn !== "smooth", b = (xe) => u ? Math.round(xe / 2) * 2 : xe, C = b(Il(e, ra) * o), D = ws(e, ra).temp, $ = fr(), ee = pn === "onebit" ? $.paper : "#ffffff", Y = pn === "onebit" ? $.ink : "rgba(0,0,0,.28)", j = no && Number.isFinite(D) ? b(no(D)) : null;
    a.innerHTML = '<rect x="' + (C - 2) + '" y="0" width="4" height="' + l + '" fill="' + Y + '"/><rect x="' + (C - 1) + '" y="0" width="2" height="' + l + '" fill="' + ee + '"/>' + (j == null ? "" : u ? '<rect x="' + (C - 5) + '" y="' + (j - 5) + '" width="10" height="10" fill="' + ee + '" stroke="' + Y + '" stroke-width="2"/>' : '<circle cx="' + C + '" cy="' + j + '" r="6" fill="' + ee + '" stroke="' + Y + '" stroke-width="2"/>');
  }
  const Gl = (e) => {
    const a = Fo.getBoundingClientRect();
    a.width && (ra = ru(_a(), (e - a.left) / a.width), kr());
  };
  ei.addEventListener("pointerdown", (e) => {
    if (e.button === 0) {
      xs = !0;
      try {
        ei.setPointerCapture(e.pointerId);
      } catch {
      }
      Gl(e.clientX);
    }
  }), ei.addEventListener("pointermove", (e) => {
    xs && Gl(e.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((e) => ei.addEventListener(e, () => {
    xs = !1;
  })), ei.addEventListener("keydown", (e) => {
    const a = _a(), o = { ArrowLeft: -zt, ArrowRight: zt, ArrowDown: -zt, ArrowUp: zt, PageUp: -24 * zt, PageDown: 24 * zt }[e.key];
    o ? (e.preventDefault(), ra = Math.max(a.start, Math.min(a.end - zt, Math.round(ra / zt) * zt + o)), kr(a)) : (e.key === "Home" || e.key === "End") && (e.preventDefault(), ra = e.key === "Home" ? a.start : a.end - zt, kr(a));
  }), i("wxDialogClose").addEventListener("click", ys), An.addEventListener("click", (e) => {
    e.target === An && ys();
  }), An.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), ys());
  }), Ea();
  const Oo = i("wxStyleChoice");
  function cu() {
    Oo.querySelectorAll(".wxStyleBtn").forEach((e) => {
      e.setAttribute("aria-pressed", String(e.dataset.wxStyle === pn)), e.querySelector(".wxStylePreview").innerHTML = ["sunny", "partlycloudy", "rainy", "clear-night"].map((a) => Po(a, !1, !1, e.dataset.wxStyle)).join("");
    }), ga(Oo);
  }
  Oo.querySelectorAll(".wxStyleBtn").forEach((e) => e.addEventListener("click", () => {
    pn = e.dataset.wxStyle, un("weatherStyle", pn), Oo.querySelectorAll(".wxStyleBtn").forEach((a) => a.setAttribute("aria-pressed", String(a === e))), Ea();
  })), cu();
  const Ul = i("wxLayoutChoice"), Yl = () => Ul.querySelectorAll(".wxLayoutBtn").forEach((e) => e.setAttribute("aria-pressed", String(e.dataset.wxLayout === Ro)));
  Ul.querySelectorAll(".wxLayoutBtn").forEach((e) => e.addEventListener("click", () => {
    Ro = e.dataset.wxLayout, un("weatherLayout", Ro), Io.delete("inline"), Yl(), Ea();
  })), Yl();
  const Ms = i("wxMotionToggle");
  Ms.classList.toggle("on", eo), Ms.addEventListener("click", () => {
    eo = !eo, Ms.classList.toggle("on", eo), un("weatherMotion", eo), Qa(), ga(n);
  }), (id = (nd = window.matchMedia) == null ? void 0 : (ad = nd.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || id.call(ad, "change", () => {
    Qa(), ga(n);
  }), Qa();
  const Zl = i("tvNav");
  r.fullscreenSupported || (Zl.hidden = !0), Zl.addEventListener("click", () => r.toggleFullscreen()), n.addEventListener("keydown", (e) => {
    !be.workout.classList.contains("active") || vi.classList.contains("active") || e.target.closest("input,select,textarea,.holdEnd") || (e.key === "MediaPlayPause" || e.key === " " && !e.target.closest("button") ? (e.preventDefault(), Qr.click()) : e.key === "MediaTrackNext" ? (e.preventDefault(), i("skipExercise").click()) : e.key === "MediaTrackPrevious" && (e.preventDefault(), i("restartSegment").click()));
  }), n.querySelectorAll("[data-rounds-step]").forEach((e) => e.addEventListener("click", () => {
    const a = Math.max(1, Math.min(10, (Number(Ue.value) || 1) + Number(e.dataset.roundsStep)));
    String(a) !== Ue.value && (Ue.value = a, Ue.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [x, k, E, Ue].forEach((e) => e.addEventListener("input", () => {
    const a = Ie[Ne];
    a && (a.total = Number(x.value), a.work = Number(k.value), a.rest = Number(E.value)), G();
  })), ye.addEventListener("click", as), He.addEventListener("click", () => w("settings")), i("settingsBack").addEventListener("click", as), Qr.addEventListener("click", () => Ta(!Qt)), Cn(Ne), Ua(), ia(), Aa(), i("healthHelpOpen").addEventListener("click", () => n.querySelector(".tab[data-pane=helpPane]").click()), Eo(i("resetStats"), i("resetStatsFill"), 1500, () => {
    me.history = [], me.checkins = [], Ga = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    rn(), Mi(), ia(), Ua(), Aa(), ma(), kt("Stats reset");
  });
  const Cs = i("morningTime"), Ss = i("eveningTime"), Ls = i("checkinAutoOpen");
  Cs.value = na().morning, Ss.value = na().evening, Ls.classList.toggle("on", rt().checkinAutoOpen !== !1), [["morningTime", Cs], ["eveningTime", Ss]].forEach(([e, a]) => a.addEventListener("change", () => {
    a.value && (un(e, a.value), ma());
  })), Ls.addEventListener("click", () => {
    const e = rt().checkinAutoOpen === !1;
    Ls.classList.toggle("on", e), un("checkinAutoOpen", e);
  }), setTimeout(hi, 800);
  const Kl = i("checkinNotify"), Mr = i("checkinNotifyTarget"), $l = i("checkinNotifyStatus"), uu = $l.textContent;
  function Jl() {
    const e = r.notifyServices(), a = e.filter((u) => u.startsWith("mobile_app_")), o = a.length ? a : e, l = (u) => u.replace(/^mobile_app_/, "").replace(/_/g, " ");
    Mr.innerHTML = o.map((u) => '<option value="' + Fe(u) + '">' + Fe(l(u)) + "</option>").join(""), !rt().notifyTarget && o[0] && (rt().notifyTarget = o[0]), Mr.value = rt().notifyTarget || "";
  }
  function Cr() {
    const e = !!rt().notifyOn;
    Kl.classList.toggle("on", e), i("checkinNotifyTargetRow").hidden = !e;
    const a = na();
    $l.textContent = e ? "Sends at " + a.morning + " and " + a.evening : uu;
  }
  async function Ts() {
    const e = !!rt().notifyOn;
    try {
      return await r.setReminderAutomation(e ? { target: rt().notifyTarget, times: na() } : null), !0;
    } catch {
      return kt("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  Kl.addEventListener("click", async () => {
    const e = !rt().notifyOn;
    if (e && (Jl(), !rt().notifyTarget)) {
      kt("Install the Companion app on your phone first");
      return;
    }
    rt().notifyOn = e, Cr(), await Ts() ? (rn(), kt(e ? "Check-in notifications on" : "Check-in notifications off")) : (rt().notifyOn = !e, Cr());
  }), Mr.addEventListener("change", () => {
    un("notifyTarget", Mr.value), rt().notifyOn && Ts();
  }), [Cs, Ss].forEach((e) => e.addEventListener("change", () => {
    Cr(), rt().notifyOn && Ts();
  })), Jl(), Cr();
  let As = null;
  function pu() {
    As || (As = setTimeout(() => {
      As = null, Aa();
    }, 3e4));
  }
  return {
    updateStates(e) {
      var o, l;
      const a = !qt || qt[Xt.weather] !== e[Xt.weather] || ((o = qt["sun.sun"]) == null ? void 0 : o.state) !== ((l = e["sun.sun"]) == null ? void 0 : l.state);
      qt = e, Sl(e), Fl(e), Tl(e), Ol(), a && Ea(), Date.now() - Al > 60 * 60 * 1e3 && _l(), pu();
    },
    applyRemoteData(e) {
      if (e && (Array.isArray(e.history) && (me.history = e.history, Mi()), Array.isArray(e.history) && Aa(), Array.isArray(e.checkins) && (me.checkins = e.checkins.map(ri), ma(), Ua(), ia(), Mi(), Aa()), e.profiles && !Ve.classList.contains("open") && !ha)) {
        const a = on(e);
        Object.keys(Ie).forEach((o) => delete Ie[o]), Object.assign(Ie, a.profiles), me.order = a.order, Ie[Ne] || (Ne = me.order[0]), Hn(), Cn(Ne);
      }
    },
    suspend() {
      p = !1;
    },
    resume() {
      p || (p = !0, Fi || (Fi = requestAnimationFrame(rr)), Wi || (Wi = requestAnimationFrame(sr)), Qa(), Do(n.querySelector(".tab.active"), !1));
    }
  };
}
const Ou = /* @__PURE__ */ new Set(["roaming", "test_area"]), Wu = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window" },
  office: { cover: ["Blinds", "blind", 60, 45], temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62 }
}, qo = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, $t = "made_up_", oo = (n) => {
  var r;
  return (r = String(n).split(".")[1]) == null ? void 0 : r.startsWith($t);
}, Ar = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function el(n) {
  const r = n.getHours() + n.getMinutes() / 60, i = Math.max(0, Math.sin((r - 7) / 13 * Math.PI));
  return 2.4 * i * i;
}
function qu(n) {
  const r = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  let i = 0;
  for (let c = +r; c < +n; c += 10 * 60 * 1e3) i += el(new Date(c)) / 6;
  return i;
}
function dd(n = /* @__PURE__ */ new Date()) {
  const r = [];
  for (let i = 0; i <= 96; i++) {
    const c = +n - (96 - i) * 15 * 60 * 1e3;
    r.push([c, el(new Date(c))]);
  }
  return r;
}
function zu({ onChange: n }) {
  const r = {}, i = {}, c = (O, L, I, W) => {
    r[O] = { entity_id: O, state: I, attributes: W, last_changed: new Date(Date.now() - 18e6).toISOString() }, i[O] = L;
  }, f = (O, L, I) => {
    const W = r[O], H = L ?? W.state;
    r[O] = { ...W, state: H, attributes: { ...W.attributes, ...I }, last_changed: H === W.state ? W.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, p = (O, L, I, W) => c("binary_sensor." + $t + (O ? O + "_" : "") + Ar(L), O, W ? "on" : "off", { friendly_name: L, device_class: I });
  Object.entries(Wu).forEach(([O, L]) => {
    if (L.temperature != null && c("sensor." + $t + O + "_temperature", O, String(L.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), L.humidity != null && c("sensor." + $t + O + "_humidity", O, String(L.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), L.climate && c("climate." + $t + O, O, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: L.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), L.cover) {
      const [I, W, H, Q] = L.cover;
      c("cover." + $t + O + "_" + Ar(I), O, H ? "open" : "closed", { friendly_name: I, device_class: W, current_position: H, ...Q != null ? { current_tilt_position: Q } : {} });
    }
    if (L.humidifier && c("humidifier." + $t + O, O, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: L.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), L.solar && (c("sensor." + $t + O + "_solar_power", O, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), c("sensor." + $t + O + "_solar_today", O, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), L.valve && c("valve." + $t + O + "_" + Ar(L.valve), O, "closed", { friendly_name: L.valve, device_class: "water" }), L.door && p(O, L.door, "door", L.doorOpen), L.window && p(O, L.window, "window", !1), L.motion && p(O, L.motion, "motion", !1), L.plant) {
      const [I, W, H, Q, z] = L.plant, F = $t + Ar(I), de = (h, be, ye, He, w) => c("sensor." + F + "_" + h, O, String(ye), { friendly_name: be, device_class: w, state_class: "measurement", unit_of_measurement: He, plant_low: ye < qo[h][0], plant_high: ye > qo[h][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[h] });
      de("moisture", "Moisture", W, "%", "moisture"), de("light", "Light", H, "lx", "illuminance"), de("temperature", "Temperature", Q, "°C", "temperature"), de("fertility", "Fertility", z, "µS/cm", "conductivity");
      const Ee = Object.entries({ moisture: W, light: H, temperature: Q, fertility: z }).filter(([h, be]) => be < qo[h][0] || be > qo[h][1]).map(([h, be]) => h + (be < qo[h][0] ? " low" : " high"));
      c("plant." + F, O, Ee.length ? "problem" : "ok", { friendly_name: I, moisture: W, brightness: H, temperature: Q, conductivity: z, problem: Ee.join(", ") || "none" });
    }
  }), c("vacuum." + $t + "robot", null, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), c("alarm_control_panel." + $t + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), p(null, "Front door", "door", !1), p(null, "Smoke alarm", "smoke", !1), c("sensor." + $t + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const v = {}, S = {};
  let y = null;
  function B() {
    const O = /* @__PURE__ */ new Date();
    Object.keys(r).forEach((L) => {
      L.endsWith("_solar_power") && (r[L] = { ...r[L], state: el(O).toFixed(2) }), L.endsWith("_solar_today") && (r[L] = { ...r[L], state: qu(O).toFixed(1) });
    });
  }
  B();
  let ae = 0;
  function Z() {
    let O = !1;
    const L = ++ae % 10 === 0, I = (Q, z, F) => {
      f(Q, z, F), O = !0;
    };
    Object.entries(v).forEach(([Q, z]) => {
      const F = r[Q].attributes.current_position, de = F < z ? Math.min(z, F + 10) : Math.max(z, F - 10);
      de === z && delete v[Q], I(Q, de === z ? de === 0 ? "closed" : "open" : z > F ? "opening" : "closing", { current_position: de });
    }), Object.entries(S).forEach(([Q, z]) => {
      const F = r[Q].attributes.current_tilt_position, de = F < z ? Math.min(z, F + 25) : Math.max(z, F - 25);
      de === z && delete S[Q], I(Q, null, { current_tilt_position: de });
    }), Object.keys(r).filter((Q) => Q.startsWith("climate.")).forEach((Q) => {
      const z = r[Q], F = z.attributes, de = F.current_temperature, Ee = (z.state === "heat" || z.state === "auto") && de < F.temperature - 0.05, h = (z.state === "cool" || z.state === "auto") && de > F.temperature + 0.05, be = z.state === "off" ? "off" : Ee ? "heating" : h ? "cooling" : "idle", ye = L ? Math.round((de + (Ee ? 0.1 : h ? -0.1 : 0)) * 10) / 10 : de;
      (ye !== de || be !== F.hvac_action) && I(Q, null, { current_temperature: ye, hvac_action: be });
    }), Object.keys(r).filter((Q) => Q.startsWith("humidifier.")).forEach((Q) => {
      const z = r[Q], F = z.attributes, de = F.current_humidity, Ee = z.state === "on" && de < F.humidity, h = Ee && L ? de + 1 : de, be = z.state !== "on" ? "off" : Ee ? "humidifying" : "idle";
      if (h !== de || be !== F.action) {
        I(Q, null, { current_humidity: h, action: be });
        const ye = "sensor." + $t + i[Q] + "_humidity";
        r[ye] && I(ye, String(h));
      }
    });
    const W = r["vacuum." + $t + "robot"], H = W.attributes;
    W.state === "cleaning" && L && I(W.entity_id, null, { battery_level: Math.max(5, H.battery_level - 1) }), W.state === "returning" && I(W.entity_id, "docked", {}), W.state === "docked" && H.battery_level < 100 && I(W.entity_id, null, { battery_level: Math.min(100, H.battery_level + 2) }), y && Date.now() - y.at > 5e3 && (I("alarm_control_panel." + $t + "house", "armed_" + y.mode, {}), y = null), O && n();
  }
  const _ = setInterval(Z, 1e3), R = setInterval(() => {
    B(), n();
  }, 60 * 1e3);
  function q(O, L, I) {
    const W = I == null ? void 0 : I.entity_id;
    if (!r[W]) return !1;
    const H = r[W], Q = H.attributes, z = (F, de) => f(W, F, de);
    if (O === "climate" && (L === "set_temperature" && z(null, { temperature: Math.max(Q.min_temp, Math.min(Q.max_temp, I.temperature)) }), L === "set_hvac_mode" && z(I.hvac_mode, I.hvac_mode === "off" ? { hvac_action: "off" } : {}), L === "toggle" && z(H.state === "off" ? "heat" : "off", H.state === "off" ? {} : { hvac_action: "off" })), O === "cover") {
      const F = L === "open_cover" ? 100 : L === "close_cover" ? 0 : L === "set_cover_position" ? I.position : L === "toggle" ? Q.current_position > 0 ? 0 : 100 : null;
      L === "stop_cover" && (delete v[W], delete S[W], z(Q.current_position === 0 ? "closed" : "open")), F != null && F !== Q.current_position && (v[W] = F, z(F > Q.current_position ? "opening" : "closing"));
      const de = L === "open_cover_tilt" ? 100 : L === "close_cover_tilt" ? 0 : L === "set_cover_tilt_position" ? I.tilt_position : null;
      L === "stop_cover_tilt" && delete S[W], de != null && Q.current_tilt_position != null && de !== Q.current_tilt_position && (S[W] = de);
    }
    if (O === "humidifier" && (L === "set_humidity" && z(null, { humidity: Math.max(Q.min_humidity, Math.min(Q.max_humidity, I.humidity)) }), L === "set_mode" && z(null, { mode: I.mode }), L === "turn_on" || L === "turn_off" || L === "toggle")) {
      const F = L === "turn_on" || L === "toggle" && H.state !== "on";
      z(F ? "on" : "off", { action: F ? "idle" : "off" });
    }
    if (O === "vacuum" && (L === "start" && z("cleaning", { rooms: I.rooms || Q.rooms }), L === "pause" && z("paused"), L === "return_to_base" && z("returning", { rooms: [] }), L === "locate" && z(null, { located: Date.now() }), L === "set_rooms" && z(null, { rooms: I.rooms })), O === "valve") {
      const F = L === "open_valve" || L === "toggle" && H.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(L) && z(F ? "open" : "closed");
    }
    if (O === "alarm_control_panel") {
      L === "alarm_disarm" && (y = null, z("disarmed", { changed_by: "Matt" }));
      const F = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[L];
      F && (y = { mode: F, at: Date.now() }, z("arming", { changed_by: "Matt" }));
    }
    return n(), !0;
  }
  function J(O) {
    const L = (O == null ? void 0 : O.states) || {}, I = (O == null ? void 0 : O.entities) || {}, W = (O == null ? void 0 : O.devices) || {}, H = (x) => {
      var E;
      const k = I[x];
      return k && (k.area_id || k.device_id && ((E = W[k.device_id]) == null ? void 0 : E.area_id)) || null;
    }, Q = (x) => {
      const k = I[x];
      return L[x] && L[x].state !== "unavailable" && !(k != null && k.hidden) && !(k != null && k.entity_category);
    }, z = {};
    Object.keys(L).forEach((x) => {
      const k = H(x);
      k && Q(x) && (z[k] || (z[k] = [])).push(x);
    });
    const F = { ...L, ...r }, de = (x) => {
      var k, E;
      return (E = (k = F[x]) == null ? void 0 : k.attributes) == null ? void 0 : E.device_class;
    }, Ee = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], h = Object.values((O == null ? void 0 : O.areas) || {}).filter((x) => !Ou.has(x.area_id)).map((x) => {
      const k = x.area_id, E = z[k] || [], ne = (et) => E.filter((At) => At.startsWith(et + ".")), te = (et) => ne("sensor").filter((At) => de(At) === et), K = (et) => Object.keys(r).filter((At) => i[At] === k && et(At)), X = (et, At) => et.length ? et : K(At), oe = X(te("temperature"), (et) => et.endsWith(k + "_temperature")), Pe = X(te("humidity"), (et) => et.endsWith(k + "_humidity")), Ue = te("power").filter((et) => /^(W|kW)$/.test(F[et].attributes.unit_of_measurement || "")), Ft = ne("binary_sensor").filter((et) => de(et) === "moisture"), lt = X(ne("plant"), (et) => et.startsWith("plant.")).map((et) => ({ id: et, readings: K((At) => At.startsWith("sensor." + et.split(".")[1] + "_")) })), nn = [...ne("binary_sensor").filter((et) => Ee.includes(de(et))), ...K((et) => et.startsWith("binary_sensor."))];
      return {
        id: k,
        name: x.name,
        icon: x.icon,
        readings: [...oe.slice(0, 1), ...Pe.slice(0, 1), ...Ft],
        power: Ue.length ? Ue.reduce((et, At) => et + Number(F[At].state) * (F[At].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: ne("switch"),
        lights: ne("light"),
        actions: [...ne("light"), ...X(ne("climate"), (et) => et.startsWith("climate.")), ...X(ne("cover"), (et) => et.startsWith("cover.")), ...X(ne("humidifier"), (et) => et.startsWith("humidifier.")), ...X(ne("valve"), (et) => et.startsWith("valve.")), ...ne("media_player")],
        solar: K((et) => et.includes("_solar_")),
        plants: lt,
        openings: nn,
        alerts: [...Ft, ...nn].filter((et) => {
          var At;
          return ((At = F[et]) == null ? void 0 : At.state) === "on";
        })
      };
    }).filter((x) => x.readings.length || x.plugs.length || x.actions.length || x.solar.length || x.plants.length), be = Object.keys(L).find((x) => /^sensor\..*(p1_meter_power|grid_power)$/.test(x) && L[x].state !== "unavailable") || null, ye = (x) => Object.keys(L).filter((k) => k.startsWith(x + ".") && Q(k)), He = ye("vacuum"), w = ye("alarm_control_panel");
    return {
      states: F,
      rooms: h,
      grid: be,
      vacuums: He.length ? He : ["vacuum." + $t + "robot"],
      security: {
        alarms: w.length ? w : ["alarm_control_panel." + $t + "house"],
        locks: ye("lock"),
        openings: [...Object.keys(r).filter((x) => x.startsWith("binary_sensor.")), "sensor." + $t + "doorbell"]
      }
    };
  }
  return { model: J, call: q, stop() {
    clearInterval(_), clearInterval(R);
  } };
}
const Ba = (n) => n < 0 ? 0 : n > 1 ? 1 : n, Ys = (n) => {
  const r = String(n || "#000000").trim().replace("#", ""), i = r.length === 3 ? r.split("").map((c) => c + c).join("") : r;
  return [0, 2, 4].map((c) => parseInt(i.slice(c, c + 2), 16) || 0);
}, Vu = (n) => "#" + n.map((r) => Math.round(Math.max(0, Math.min(255, r))).toString(16).padStart(2, "0")).join(""), cd = {}, Zn = (n, r, i) => {
  const c = n + r + i;
  return cd[c] || (cd[c] = Vu(Ys(n).map((f, p) => f + (Ys(r)[p] - f) * i)));
}, ud = {}, Or = (n) => ud[n] || (ud[n] = Ys(n));
function ju(n) {
  const r = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return r.partly = [Zn(r.clear[0], r.cloudy[0], 0.12), Zn(r.clear[1], r.cloudy[1], 0.12)], r.storm = [Zn(r.rain[0], "#000000", 0.22), Zn(r.rain[1], "#000000", 0.22)], r;
}
const Gu = [
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
], Na = (n, r) => (Gu[(r & 7) * 8 + (n & 7)] + 0.5) / 64, Kd = 1, $d = 2, Jd = 3, Xd = 4, co = 5, zr = 6, Zs = 7, Qd = 8, pd = (n, r) => r <= 0.6665 && ((n - 0.5) * (n - 0.5) + (r - 0.2877) * (r - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (r - 0.416) * (r - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (r - 0.458) * (r - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && r >= 0.416), Uu = (n, r, i) => {
  let c = !1;
  for (let f = 0, p = n.length - 1; f < n.length; p = f++) {
    const v = n[f], S = n[p];
    v[1] > i != S[1] > i && r < (S[0] - v[0]) * (i - v[1]) / (S[1] - v[1]) + v[0] && (c = !c);
  }
  return c;
};
function Yu(n, r, i, c, { oneBit: f, ink: p, paper: v, snowInk: S }) {
  const y = new Uint8ClampedArray(i * c * 4), B = Or(p), ae = Or(v);
  for (let Z = 0; Z < c; Z++) for (let _ = 0; _ < i; _++) {
    const R = Z * i + _, q = r[R];
    if (n[R] == null) continue;
    let J = Or(n[R]);
    if (f) {
      let O;
      q === Xd || q === Qd ? O = !0 : q === co ? O = S : q === Zs || q === zr ? O = !1 : O = Math.round((0.2126 * J[0] + 0.7152 * J[1] + 0.0722 * J[2]) / 255 * 4) / 4 <= Na(_, Z), (q === Kd || q === $d || q === Jd || q === zr) && (_ > 0 && r[R - 1] !== q || _ < i - 1 && r[R + 1] !== q || Z > 0 && r[R - i] !== q || Z < c - 1 && r[R + i] !== q) && (O = !0), J = O ? B : ae;
    }
    y[R * 4] = J[0], y[R * 4 + 1] = J[1], y[R * 4 + 2] = J[2], y[R * 4 + 3] = 255;
  }
  return { w: i, h: c, data: y };
}
const Zu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Ku = (n) => Gr(n, !1).split("/")[0], Ds = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let r = Math.imul(n ^ n >>> 15, 1 | n);
  return r = r + Math.imul(r ^ r >>> 7, 61 | r) ^ r, ((r ^ r >>> 14) >>> 0) / 4294967296;
}, $u = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Ju = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Xu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Qu = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", ep = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], tp = [".##", "##.", ".#.", "#.."];
function ec(n, { width: r, height: i, colors: c, wave: f = 0.38, soft: p = 6, glow: v = 0.6, columns: S = 6 }) {
  const y = { ...Ia, dawn: "#e5a77e", ...c }, B = ju(y), ae = r, Z = i, _ = ae / S, R = _ / 2, q = Math.PI * 2, J = n.length ? n : [{ cond: "cloudy", night: !1 }], O = [...Array(S * 2)].map((H, Q) => {
    const z = J[Math.min(Q, J.length - 1)], F = Ku(z.cond), de = Q % 2 === 1;
    return { cond: z.cond, k: F, night: de, sky: B[F][de ? 1 : 0], cover: Zu[F] };
  }), L = (H) => Z * (0.5 - f * Math.cos(q * (H / _ - 0.25)));
  return { C: y, S: O, W: ae, H: Z, cw: _, sw: R, TAU: q, yb: L, side: (H, Q, z) => {
    const F = (H ? L(Q) - z : z - L(Q)) / Math.max(3, p * 1.4) + 0.5;
    return F <= 0 ? 0 : F >= 1 ? 1 : F;
  }, glowAt: (H) => {
    const Q = ((H / _ - 0.25) % 1 + 1) % 1, z = Math.max(0, Math.min(S - 1, Math.round(H / _ - 0.25))), F = Math.max(0, Math.min(S - 1, Math.round(H / _ - 0.75))), de = 1 - (O[2 * z].cover + O[2 * F + 1].cover) / 2, Ee = Math.sin(Math.PI * Math.min(1, Math.max(0, L(H) / Z)));
    return { c: Q < 0.5 ? y.dusk : y.dawn, a: v * (0.2 + 0.8 * de) * Ee * Ee };
  }, soft: p, tw: _ * 0.3, sy: Z / 90 };
}
function tc(n, { clock: r = 0, ambient: i = !1, seed: c = 1 }) {
  const { S: f, sw: p, side: v, C: S, TAU: y, sy: B } = n, ae = r, Z = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return f.forEach((_, R) => {
    const q = Ds(c * 977 + R * 131 + 7), J = (R + 0.5) * p, O = _.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[_.k] : 0;
    for (let L = 0; L < O; L++) {
      const I = J + (q() - 0.5) * p * 1.6, W = (6 + q() * 76) * B, H = q() < 0.35, Q = 1.8 + q() * 1.6, z = v(!0, I, W) * (H ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(y * ae / 2600 + L * 1.7 + R) : 1);
      z >= 0.03 && Z.stars.push({ x: I, y: W, big: H, size: Q, o: z });
    }
    if (!_.night && (_.k === "clear" || _.k === "partly")) {
      const L = J + (q() - 0.5) * p * 0.3, I = Math.min(15, p * 0.29);
      Z.suns.push({ x: L, y: 32 * B, rad: I, halo: I * 2.8 * (i ? 1 + 0.07 * Math.sin(y * ae / 3600 + R) : 1) });
    }
    if (_.night && (_.k === "clear" || _.k === "partly")) {
      const L = Math.min(0.78, p * 0.55 / 34), I = J - 23 * L + (q() - 0.5) * p * 0.2;
      Z.moons.push({ x: I + 23 * L, y: (4 + (i ? 0.8 * Math.sin(y * ae / 5200 + R) : 0)) * B + 23 * L, d: 46 * L });
    }
  }), f.forEach((_, R) => {
    const q = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[_.k];
    if (!q) return;
    const J = Ds(c * 577 + R * 71 + 3), O = (R + 0.5) * p, L = _.k === "rain" || _.k === "storm" || _.night ? S.cloudNight : S.cloudDay, I = _.night ? 0.82 : _.k === "storm" ? 0.75 : 1;
    for (let W = 0; W < q; W++) {
      const H = p / 46 * (_.k === "partly" ? 0.85 : 0.75 + J() * 0.55), Q = O + (_.k === "partly" ? p * 0.12 : (J() - 0.5) * p * 1.05), z = (_.k === "partly" ? 40 : 6 + J() * 26) * B, F = i ? 2.5 * Math.sin(y * ae / 9e3 + R * 1.3 + W * 2.1) : 0, de = i ? 0.9 * Math.sin(y * ae / 6100 + R + W) : 0;
      Z.clouds.push({ x: Q - 23 * H + F, y: z - 15.33 * H + de, w: 46 * H, h: 30.66 * H, fill: L, o: I * (q > 1 && W === 0 ? 0.85 : 1) });
    }
  }), f.forEach((_, R) => {
    const q = Ds(c * 313 + R * 29 + 11), J = (R + 0.5) * p, O = _.cond === "pouring" ? 16 : _.cond === "rainy" || _.cond === "hail" ? 9 : _.cond === "lightning-rainy" ? 12 : _.cond === "snowy-rainy" ? 5 : 0;
    for (let I = 0; I < O; I++) {
      let W = J + (q() - 0.5) * p * 1.05, H = 44 + q() * 36, Q = 1;
      if (i) {
        const F = ((H - 44 + ae * 0.04) % 36 + 36) % 36;
        W -= 0.21 * (F - (H - 44)), H = 44 + F, Q = Math.min(1, F / 6, (36 - F) / 6);
      }
      H *= B;
      const z = v(_.night, W, H) * Q;
      z >= 0.05 && Z.drops.push({ x: W, y: H, o: z });
    }
    const L = _.cond === "snowy" ? 11 : _.cond === "snowy-rainy" ? 6 : 0;
    for (let I = 0; I < L; I++) {
      let W = J + (q() - 0.5) * p * 1.05, H = 40 + q() * 44, Q = 1;
      if (i) {
        const F = ((H - 40 + ae * 9e-3) % 44 + 44) % 44;
        H = 40 + F, W += 1.6 * Math.sin(y * ae / 2800 + I * 1.9 + R), Q = Math.min(1, F / 6, (44 - F) / 6);
      }
      H *= B;
      const z = v(_.night, W, H) * Q;
      z >= 0.05 && Z.flakes.push({ x: W, y: H, o: z });
    }
    if (_.k === "fog") {
      const I = _.night ? "#c8ccd6" : "#ffffff", W = _.night ? 0.28 : 0.62, H = i ? 4 * Math.sin(y * ae / 8e3 + R) : 0;
      for (let Q = 0; Q < 4; Q++) Z.fogs.push({ x: J - p * 0.75 + Q % 2 * p * 0.18 + (Q % 2 ? H : -H), y: (30 + Q * 13) * B, w: p * 1.3, c: I, a: W });
    }
    if (_.k === "storm") {
      const I = (ae / 3400 + R * 0.37) % 1;
      Z.bolts.push({ x: J + (q() - 0.5) * p * 0.3 - 5, y: 36 * B, o: i && !(I < 0.05 || I > 0.09 && I < 0.12) ? 0.8 : 1 });
    }
  }), Z;
}
function np(n, r, i, c, f, p, v, S) {
  const { S: y, C: B, cw: ae, yb: Z, glowAt: _, soft: R, tw: q, sy: J } = n, O = new Array(i * c), L = new Uint8Array(i * c), I = new Uint8Array(i * c), W = (w, x, k, E, ne) => {
    k == null || w < 0 || x < 0 || w >= i || x >= c || (E >= 1 || E > Na(w + 5, x + 3)) && (O[x * i + w] = k, L[x * i + w] = ne);
  }, H = (w, x, k, E) => {
    for (let ne = Math.max(0, Math.floor(x - k) - 1); ne <= Math.min(c - 1, x + k + 1); ne++) for (let te = Math.max(0, Math.floor(w - k) - 1); te <= Math.min(i - 1, w + k + 1); te++) E(te, ne, te + 0.5 - w, ne + 0.5 - x);
  }, Q = (w, x, k) => {
    for (let ne = 0; ne < w.length - 1; ne++) {
      const te = (ne + x) * ae;
      if (k < te - q / 2) return [w[ne], w[ne], 0];
      if (k <= te + q / 2) return [w[ne], w[ne + 1], (k - te + q / 2) / q];
    }
    const E = w[w.length - 1];
    return [E, E, 0];
  }, z = y.filter((w) => !w.night).map((w) => w.sky), F = y.filter((w) => w.night).map((w) => w.sky), de = R / p, Ee = 16 * J / p;
  for (let w = 0; w < i; w++) {
    const x = (w + 0.5) * f, k = Z(x) / p, E = Q(z, 0.75, x), ne = Q(F, 1.25, x), te = _(x);
    for (let K = 0; K < c; K++) {
      const X = Na(w, K), oe = K + 0.5 - k, Pe = (de > 0.01 ? Ba(0.5 + oe / de) : oe > 0 ? 1 : 0) > X;
      let Ue = Pe ? E[2] > X ? E[1] : E[0] : ne[2] > X ? ne[1] : ne[0];
      (Pe ? Ba(((K + 0.5) / c - 0.45) / 0.55) * 0.7 : Ba(1 - (K + 0.5) / (c * 0.55)) * 0.7) > Na(w + 2, K + 5) && (Ue = Pe ? Zn(Ue, "#ffffff", 0.18) : Zn(Ue, "#000000", 0.25)), Pe && oe >= 0 && oe < Ee && te.a * 1.3 * (1 - oe / Ee) > Na(w + 6, K + 1) && (Ue = te.c), O[K * i + w] = Ue, I[K * i + w] = Pe ? 0 : 1;
    }
  }
  const h = Zn(B.sun, "#ffffff", 0.55), be = Zn(B.moon, "#ffffff", 0.6);
  r.stars.forEach((w) => {
    const x = Math.floor(w.x / f), k = Math.floor(w.y / p);
    if (x < 0 || k < 0 || x >= i || k >= c || !I[k * i + x] || w.o < 0.15) return;
    const E = w.o > 0.45 ? B.star : Zn(B.star, O[k * i + x], 0.5), ne = w.big && w.o > 0.6 ? Math.floor(w.size / f) : 0;
    W(x, k, E, 1, Zs);
    for (let te = 1; te <= ne; te++) [[x - te, k], [x + te, k], [x, k - te], [x, k + te]].forEach((K) => {
      K[0] >= 0 && K[1] >= 0 && K[0] < i && K[1] < c && I[K[1] * i + K[0]] && W(K[0], K[1], E, 1, Zs);
    });
  }), r.suns.forEach((w) => {
    const x = Math.max(1.5, w.rad / f), k = w.x / f, E = w.y / p, ne = w.halo / f * 0.85;
    if (H(k, E, ne, (te, K, X, oe) => {
      const Pe = Math.sqrt(X * X + oe * oe);
      Pe > x && Pe < ne && !I[K * i + te] && W(te, K, h, 0.3 * (1 - (Pe - x) / (ne - x)), 0);
    }), S) {
      const te = Math.floor(v / 500) % 2, K = Math.max(1, x * 0.3);
      for (let X = 0; X < 8; X++) if (X % 2 === te) for (let oe = x + 1.2; oe < x + 1.2 + K; oe += 0.7) W(Math.floor(k + Math.cos(X * Math.PI / 4) * oe), Math.floor(E + Math.sin(X * Math.PI / 4) * oe), B.sun, 1, Qd);
    }
    H(k, E, x, (te, K, X, oe) => {
      X * X + oe * oe <= x * x && W(te, K, Ba(((oe / x + 1) / 2 - 0.6) / 0.4) > Na(te, K) ? B.sunEdge : B.sun, 1, Kd);
    });
  }), r.moons.forEach((w) => {
    const x = Math.max(1.5, w.d * 0.37 / f), k = w.x / f, E = w.y / p, ne = k + 0.547 * x, te = E - 0.503 * x, K = 0.82 * x;
    H(k, E, x, (X, oe, Pe, Ue) => {
      if (Pe * Pe + Ue * Ue > x * x) return;
      const Ft = X + 0.5 - ne, lt = oe + 0.5 - te;
      Ft * Ft + lt * lt > K * K && W(X, oe, Ba((Ue + x) / (2 * x) * 1.1 - 0.1) > Na(X, oe) ? B.moon : be, 1, $d);
    });
  }), r.clouds.forEach((w) => {
    const x = Math.max(3, w.w / f), k = x * 0.6665, E = w.x / f, ne = w.y / p, te = Zn(w.fill, "#000000", 0.16);
    for (let K = Math.max(0, Math.floor(ne) - 1); K <= Math.min(c - 1, ne + k + 1); K++) for (let X = Math.max(0, Math.floor(E) - 1); X <= Math.min(i - 1, E + x + 1); X++) {
      const oe = (X + 0.5 - E) / x, Pe = (K + 0.5 - ne) / x;
      pd(oe, Pe) && W(X, K, !pd(oe, Pe + 1 / x) || Ba((Pe - 0.42) / 0.25) * 0.8 > Na(X, K) ? te : w.fill, w.o, Jd);
    }
  }), r.fogs.forEach((w) => {
    const x = Math.floor(w.y / p), k = Math.max(x, Math.floor((w.y + 6 * J) / p) - 1), E = Math.floor(w.x / f), ne = Math.floor((w.x + w.w) / f);
    for (let te = x; te <= k; te++) for (let K = E; K <= ne; K++) {
      const X = (K - E) / Math.max(1, ne - E);
      W(K, te, w.c, w.a * (X < 0.25 ? X / 0.25 : X > 0.75 ? (1 - X) / 0.25 : 1), 0);
    }
  });
  const ye = Math.max(2, Math.round(9 / p));
  r.drops.forEach((w) => {
    const x = w.x / f, k = Math.floor(w.y / p);
    for (let E = 0; E < ye; E++) W(Math.floor(x - 0.208 * E * p / f), k + E, B.rain, w.o, Xd);
  });
  const He = Math.max(0, Math.round(4.4 / f / 2.6));
  return r.flakes.forEach((w) => {
    const x = Math.floor(w.x / f), k = Math.floor(w.y / p);
    W(x, k, B.snow, w.o, co);
    for (let E = 1; E <= He; E++)
      W(x - E, k, B.snow, w.o, co), W(x + E, k, B.snow, w.o, co), W(x, k - E, B.snow, w.o, co), W(x, k + E, B.snow, w.o, co);
  }), r.bolts.forEach((w) => {
    if (f <= 3.5)
      for (let x = Math.floor(w.y / p); x <= (w.y + 24) / p; x++) for (let k = Math.floor(w.x / f); k <= (w.x + 11) / f; k++)
        Uu(ep, (k + 0.5) * f - w.x, (x + 0.5) * p - w.y) && W(k, x, B.sun, 1, zr);
    else {
      const x = Math.round(w.x / f), k = Math.round(w.y / p);
      tp.forEach((E, ne) => E.split("").forEach((te, K) => {
        te === "#" && W(x + K, k + ne, B.sun, 1, zr);
      }));
    }
  }), { col: O, ids: L };
}
function ap(n, r) {
  const i = r.px, c = Math.max(6, Math.round(r.width / i)), f = Math.max(6, Math.round(r.height / i)), p = r.width / c, v = r.height / f, S = r.ambient ? Math.floor((r.clock || 0) / 100) * 100 : 0, y = (R) => {
    const q = ec(R, r);
    return np(q, tc(q, { clock: S, ambient: r.ambient, seed: r.seed }), c, f, p, v, S, r.ambient);
  }, B = y(n), ae = r.reveal == null ? 1 : Ba(r.reveal);
  let Z = B.col, _ = B.ids;
  if (ae < 1) {
    const R = r.prev ? y(r.prev) : null, q = ae * (c + 12);
    Z = new Array(c * f), _ = new Uint8Array(c * f);
    for (let J = 0; J < c * f; J++) {
      const O = J % c, L = J / c | 0;
      (r.reduce ? ae : Ba((q - O) / 12)) > Na(O, L) ? (Z[J] = B.col[J], _[J] = B.ids[J]) : R ? (Z[J] = R.col[J], _[J] = R.ids[J]) : (Z[J] = null, _[J] = 255);
    }
  }
  return Yu(Z, _, c, f, { oneBit: r.oneBit, ink: r.ink || "#26221e", paper: r.paper || "#fbf9f6", snowInk: !1 });
}
function ip(n, r, i) {
  const c = i.width, f = i.height, p = i.reveal == null ? 1 : Ba(i.reveal), v = (_, R) => {
    const q = ec(R, i);
    op(_, q, tc(q, i));
  };
  if (n.clearRect(0, 0, c, f), p >= 1) {
    v(n, r);
    return;
  }
  if (i.prev && v(n, i.prev), i.reduce) {
    n.save(), n.globalAlpha = p, v(n, r), n.restore();
    return;
  }
  const S = n.canvas, y = S.__wxOff || (S.__wxOff = document.createElement("canvas"));
  (y.width !== S.width || y.height !== S.height) && (y.width = S.width, y.height = S.height);
  const B = y.getContext("2d");
  B.setTransform(n.getTransform()), B.clearRect(0, 0, c, f), v(B, r);
  const ae = p * (c + 64) - 64, Z = B.createLinearGradient(ae, 0, ae + 64, 0);
  Z.addColorStop(0, "rgba(0,0,0,1)"), Z.addColorStop(1, "rgba(0,0,0,0)"), B.globalCompositeOperation = "destination-in", B.fillStyle = Z, B.fillRect(0, 0, c, f), B.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(y, 0, 0), n.restore();
}
function op(n, r, i) {
  const { W: c, H: f, S: p, C: v, cw: S, yb: y, glowAt: B, soft: ae, tw: Z, sy: _ } = r, R = (h, be) => {
    const ye = Or(h);
    return "rgba(" + ye[0] + "," + ye[1] + "," + ye[2] + "," + Math.max(0, Math.min(1, be)).toFixed(3) + ")";
  }, q = (h, be) => {
    const ye = n.createLinearGradient(0, 0, c, 0);
    ye.addColorStop(0, h[0]);
    for (let He = 0; He < h.length - 1; He++) {
      const w = (He + be) * S, x = (w - Z / 2) / c, k = (w + Z / 2) / c;
      x > 0 && x < 1 && ye.addColorStop(x, h[He]), k > 0 && k < 1 && ye.addColorStop(k, h[He + 1]);
    }
    return ye.addColorStop(1, h[h.length - 1]), ye;
  }, J = Math.max(24, Math.ceil(c / 4)), O = (h, be) => {
    n.beginPath();
    for (let ye = 0; ye <= J; ye++) {
      const He = c * ye / J, w = h == null ? 0 : y(He) + h;
      ye ? n.lineTo(He, w) : n.moveTo(He, w);
    }
    for (let ye = J; ye >= 0; ye--) {
      const He = c * ye / J;
      n.lineTo(He, y(He) + be);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = q(p.filter((h) => !h.night).map((h) => h.sky), 0.75), n.fillRect(0, 0, c, f);
  const L = n.createLinearGradient(0, 0, c, 0);
  for (let h = 0; h <= 64; h++) {
    const be = B(c * h / 64);
    L.addColorStop(h / 64, R(be.c, Math.min(1, be.a)));
  }
  n.fillStyle = L;
  for (let h = 0; h < 8; h++)
    n.globalAlpha = 1 - h / 8, O(h * 2 * _, (h + 1) * 2 * _);
  n.fillStyle = q(p.filter((h) => h.night).map((h) => h.sky), 1.25);
  const I = Math.max(0.5, ae), W = 6;
  n.globalAlpha = 1, O(null, -I);
  for (let h = 0; h < W; h++)
    n.globalAlpha = 1 - (h + 0.5) / W, O(-I + 2 * I * h / W, -I + 2 * I * (h + 1) / W);
  n.globalAlpha = 1;
  const H = new Path2D(Xu), Q = new Path2D(Ju), z = new Path2D($u), F = new Path2D(Qu);
  n.fillStyle = v.star, i.stars.forEach((h) => {
    n.globalAlpha = h.o, h.big ? (n.save(), n.translate(h.x, h.y), n.scale(h.size, h.size), n.fill(H), n.restore()) : (n.beginPath(), n.arc(h.x, h.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const de = Zn(v.sun, "#ffffff", 0.55);
  i.suns.forEach((h) => {
    const be = n.createRadialGradient(h.x, h.y, 0, h.x, h.y, h.halo);
    be.addColorStop(0, R(de, 0.42)), be.addColorStop(0.7, R(de, 0)), n.fillStyle = be, n.beginPath(), n.arc(h.x, h.y, h.halo, 0, Math.PI * 2), n.fill();
    const ye = n.createLinearGradient(0, h.y - h.rad, 0, h.y + h.rad);
    ye.addColorStop(0.6, v.sun), ye.addColorStop(1, v.sunEdge), n.fillStyle = ye, n.beginPath(), n.arc(h.x, h.y, h.rad, 0, Math.PI * 2), n.fill();
  });
  const Ee = Zn(v.moon, "#ffffff", 0.6);
  i.moons.forEach((h) => {
    n.save(), n.translate(h.x - h.d / 2, h.y - h.d / 2), n.scale(h.d / 46, h.d / 46);
    const be = n.createLinearGradient(0, 6, 0, 40);
    be.addColorStop(0, Ee), be.addColorStop(1, v.moon), n.fillStyle = be, n.fill(Q), n.restore();
  }), i.clouds.forEach((h) => {
    n.save(), n.globalAlpha = h.o, n.translate(h.x, h.y), n.scale(h.w / 46, h.h / 30.66), n.translate(-4, -9.67), n.fillStyle = h.fill, n.fill(z), n.restore();
  }), i.fogs.forEach((h) => {
    const be = n.createLinearGradient(h.x, 0, h.x + h.w, 0);
    be.addColorStop(0, R(h.c, 0)), be.addColorStop(0.25, R(h.c, h.a)), be.addColorStop(0.75, R(h.c, h.a)), be.addColorStop(1, R(h.c, 0)), n.fillStyle = be, n.fillRect(h.x, h.y, h.w, 6 * _);
  }), n.fillStyle = v.rain, i.drops.forEach((h) => {
    n.save(), n.globalAlpha = h.o, n.translate(h.x, h.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = v.snow, i.flakes.forEach((h) => {
    n.globalAlpha = h.o, n.beginPath(), n.arc(h.x, h.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = v.sun, i.bolts.forEach((h) => {
    n.save(), n.globalAlpha = h.o, n.translate(h.x, h.y), n.fill(F), n.restore();
  }), n.restore();
}
const rp = (n) => n === "sunny" ? "clear" : n === "clear-night" ? "night" : n === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(n) ? "rain" : ["snowy", "snowy-rainy"].includes(n) ? "snow" : "cloudy", ro = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, _r = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, Rs = (n, r) => '<path class="' + r + '" d="' + n + '"/>', sp = (n, r) => ' style="animation-delay:-' + Math.round(n * 137 % r) + 'ms"', Un = (n, r, i, c) => {
  const f = i * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (c < 1 ? ' opacity="' + c + '"' : "") + sp(n, 2400) + ' d="M' + n + " " + (r - i) + "L" + (n + f) + " " + (r - f) + "L" + (n + i) + " " + r + "L" + (n + f) + " " + (r + f) + "L" + n + " " + (r + i) + "L" + (n - f) + " " + (r + f) + "L" + (n - i) + " " + r + "L" + (n - f) + " " + (r - f) + 'Z"/>';
}, md = ([n, r, i], c) => '<path class="wbMoonPath" d="' + n + '" fill="url(#' + c + ')"/><defs><linearGradient id="' + c + '" x1="0" y1="' + r + '" x2="0" y2="' + i + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', lp = (n, r) => r ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', dp = (n) => (n ? ["29.35", "43.04", "56.74"].map((r, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" x="' + r + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + r + ' 60.65)"/></g>') : [19, 26, 33].map((r, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + r + ' 38)"/></g>')).join(""), cp = (n) => (n ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([r, i], c) => '<circle class="wbFlake" style="animation-delay:-' + c * 640 + 'ms" cx="' + r + '" cy="' + i + '" r="' + (n ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function up(n, r, i, c) {
  return n === "clear" ? r ? md(i ? _r.l : _r.s, c) + (i ? Un(70, 20, 5.83, 1) + Un(78.33, 41.67, 3.75, 0.8) + Un(60, 71.67, 3.33, 0.6) : Un(42, 12, 3.5, 1) + Un(47, 25, 2.25, 0.8) + Un(36, 43, 2, 0.6)) : lp(c, i) : n === "partly" ? (r ? md(i ? _r.lp : _r.sp, c) : i ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + Rs(i ? ro.lp : ro.sp, r ? "wbCloudLight" : "wbBright") + (r ? i ? Un(73.33, 16.67, 4.17, 0.9) : Un(44, 10, 2.5, 0.9) : "") : n === "cloudy" ? Rs(i ? ro.lc : ro.s, r ? "wbCloudLight" : "wbBright") + (r ? i ? Un(15, 15, 3.75, 0.8) + Un(76.67, 13.33, 2.92, 0.6) : Un(9, 9, 2.25, 0.8) + Un(46, 8, 1.75, 0.6) : "") : Rs(i ? ro.lr : ro.s, "wbCloudLight") + (n === "rain" ? dp(i) : cp(i));
}
function pp(n, r, i, c) {
  let f = rp(n);
  const p = f === "night" || !!i;
  f === "night" && (f = "clear");
  const v = r ? 90 : 54;
  return { k: f, night: p, svg: '<svg viewBox="0 0 ' + v + " " + v + '">' + up(f, p, r, c) + "</svg>" };
}
const ba = 6e4, va = 36e5, Si = 864e5, Go = 1440, mp = 6, fp = 10 * ba, Er = 3, Ns = 20, hp = 3, gp = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), vp = 30 * ba, bp = 7, wp = 3, fd = 1, xp = ba, yp = 15 * ba, xn = {
  back: "M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z",
  sunsetUp: "M3,12H7A5,5 0 0,1 12,7A5,5 0 0,1 17,12H21A1,1 0 0,1 22,13A1,1 0 0,1 21,14H3A1,1 0 0,1 2,13A1,1 0 0,1 3,12M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12H15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M12.71,16.3L15.82,19.41C16.21,19.8 16.21,20.43 15.82,20.82C15.43,21.21 14.8,21.21 14.41,20.82L12,18.41L9.59,20.82C9.2,21.21 8.57,21.21 8.18,20.82C7.79,20.43 7.79,19.8 8.18,19.41L11.29,16.3C11.5,16.1 11.74,16 12,16C12.26,16 12.5,16.1 12.71,16.3Z",
  sunsetDown: "M3,12H7A5,5 0 0,1 12,7A5,5 0 0,1 17,12H21A1,1 0 0,1 22,13A1,1 0 0,1 21,14H3A1,1 0 0,1 2,13A1,1 0 0,1 3,12M15,12A3,3 0 0,0 12,9A3,3 0 0,0 9,12H15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M12.71,20.71L15.82,17.6C16.21,17.21 16.21,16.57 15.82,16.18C15.43,15.79 14.8,15.79 14.41,16.18L12,18.59L9.59,16.18C9.2,15.79 8.57,15.79 8.18,16.18C7.79,16.57 7.79,17.21 8.18,17.6L11.29,20.71C11.5,20.9 11.74,21 12,21C12.26,21 12.5,20.9 12.71,20.71Z",
  chartLine: "M16,11.78L20.24,4.45L21.97,5.45L16.74,14.5L10.23,10.75L5.46,19H22V21H2V3H4V17.54L9.5,8L16,11.78Z",
  eye: "M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z",
  gauge: "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12C20,14.4 19,16.5 17.3,18C15.9,16.7 14,16 12,16C10,16 8.2,16.7 6.7,18C5,16.5 4,14.4 4,12A8,8 0 0,1 12,4M14,5.89C13.62,5.9 13.26,6.15 13.1,6.54L11.81,9.77L11.71,10C11,10.13 10.41,10.6 10.14,11.26C9.73,12.29 10.23,13.45 11.26,13.86C12.29,14.27 13.45,13.77 13.86,12.74C14.12,12.08 14,11.32 13.57,10.76L13.67,10.5L14.96,7.29L14.97,7.26C15.17,6.75 14.92,6.17 14.41,5.96C14.28,5.91 14.15,5.89 14,5.89M10,6A1,1 0 0,0 9,7A1,1 0 0,0 10,8A1,1 0 0,0 11,7A1,1 0 0,0 10,6M7,9A1,1 0 0,0 6,10A1,1 0 0,0 7,11A1,1 0 0,0 8,10A1,1 0 0,0 7,9M17,9A1,1 0 0,0 16,10A1,1 0 0,0 17,11A1,1 0 0,0 18,10A1,1 0 0,0 17,9Z",
  waterPercent: "M12,3.25C12,3.25 6,10 6,14C6,17.32 8.69,20 12,20A6,6 0 0,0 18,14C18,10 12,3.25 12,3.25M14.47,9.97L15.53,11.03L9.53,17.03L8.47,15.97M9.75,10A1.25,1.25 0 0,1 11,11.25A1.25,1.25 0 0,1 9.75,12.5A1.25,1.25 0 0,1 8.5,11.25A1.25,1.25 0 0,1 9.75,10M14.25,14.5A1.25,1.25 0 0,1 15.5,15.75A1.25,1.25 0 0,1 14.25,17A1.25,1.25 0 0,1 13,15.75A1.25,1.25 0 0,1 14.25,14.5Z",
  rainy: "M6,14.03A1,1 0 0,1 7,15.03C7,15.58 6.55,16.03 6,16.03C3.24,16.03 1,13.79 1,11.03C1,8.27 3.24,6.03 6,6.03C7,3.68 9.3,2.03 12,2.03C15.43,2.03 18.24,4.69 18.5,8.06L19,8.03A4,4 0 0,1 23,12.03C23,14.23 21.21,16.03 19,16.03H18C17.45,16.03 17,15.58 17,15.03C17,14.47 17.45,14.03 18,14.03H19A2,2 0 0,0 21,12.03A2,2 0 0,0 19,10.03H17V9.03C17,6.27 14.76,4.03 12,4.03C9.5,4.03 7.45,5.84 7.06,8.21C6.73,8.09 6.37,8.03 6,8.03A3,3 0 0,0 3,11.03A3,3 0 0,0 6,14.03M12,14.15C12.18,14.39 12.37,14.66 12.56,14.94C13,15.56 14,17.03 14,18C14,19.11 13.1,20 12,20A2,2 0 0,1 10,18C10,17.03 11,15.56 11.44,14.94C11.63,14.66 11.82,14.4 12,14.15M12,11.03L11.5,11.59C11.5,11.59 10.65,12.55 9.79,13.81C8.93,15.06 8,16.56 8,18A4,4 0 0,0 12,22A4,4 0 0,0 16,18C16,16.56 15.07,15.06 14.21,13.81C13.35,12.55 12.5,11.59 12.5,11.59",
  sunnyAlert: "M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56M19,13V7H21V13H19M19,17V15H21V17",
  night: "M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z",
  sunny: "M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z",
  windy: "M4,10A1,1 0 0,1 3,9A1,1 0 0,1 4,8H12A2,2 0 0,0 14,6A2,2 0 0,0 12,4C11.45,4 10.95,4.22 10.59,4.59C10.2,5 9.56,5 9.17,4.59C8.78,4.2 8.78,3.56 9.17,3.17C9.9,2.45 10.9,2 12,2A4,4 0 0,1 16,6A4,4 0 0,1 12,10H4M19,12A1,1 0 0,0 20,11A1,1 0 0,0 19,10C18.72,10 18.47,10.11 18.29,10.29C17.9,10.68 17.27,10.68 16.88,10.29C16.5,9.9 16.5,9.27 16.88,8.88C17.42,8.34 18.17,8 19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14H5A1,1 0 0,1 4,13A1,1 0 0,1 5,12H19M18,18H4A1,1 0 0,1 3,17A1,1 0 0,1 4,16H18A3,3 0 0,1 21,19A3,3 0 0,1 18,22C17.17,22 16.42,21.66 15.88,21.12C15.5,20.73 15.5,20.1 15.88,19.71C16.27,19.32 16.9,19.32 17.29,19.71C17.47,19.89 17.72,20 18,20A1,1 0 0,0 19,19A1,1 0 0,0 18,18Z",
  airFilter: "M19,18.31V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V16.3C4.54,16.12 3.95,16 3,16A1,1 0 0,1 2,15A1,1 0 0,1 3,14C3.82,14 4.47,14.08 5,14.21V12.3C4.54,12.12 3.95,12 3,12A1,1 0 0,1 2,11A1,1 0 0,1 3,10C3.82,10 4.47,10.08 5,10.21V8.3C4.54,8.12 3.95,8 3,8A1,1 0 0,1 2,7A1,1 0 0,1 3,6C3.82,6 4.47,6.08 5,6.21V4A2,2 0 0,1 7,2H17A2,2 0 0,1 19,4V6.16C20.78,6.47 21.54,7.13 21.71,7.29C22.1,7.68 22.1,8.32 21.71,8.71C21.32,9.1 20.8,9.09 20.29,8.71V8.71C20.29,8.71 19.25,8 17,8C15.74,8 14.91,8.41 13.95,8.9C12.91,9.41 11.74,10 10,10C9.64,10 9.31,10 9,9.96V7.95C9.3,8 9.63,8 10,8C11.26,8 12.09,7.59 13.05,7.11C14.09,6.59 15.27,6 17,6V4H7V20H17V18C18.5,18 18.97,18.29 19,18.31M17,10C15.27,10 14.09,10.59 13.05,11.11C12.09,11.59 11.26,12 10,12C9.63,12 9.3,12 9,11.95V13.96C9.31,14 9.64,14 10,14C11.74,14 12.91,13.41 13.95,12.9C14.91,12.42 15.74,12 17,12C19.25,12 20.29,12.71 20.29,12.71V12.71C20.8,13.1 21.32,13.1 21.71,12.71C22.1,12.32 22.1,11.69 21.71,11.29C21.5,11.08 20.25,10 17,10M17,14C15.27,14 14.09,14.59 13.05,15.11C12.09,15.59 11.26,16 10,16C9.63,16 9.3,16 9,15.95V17.96C9.31,18 9.64,18 10,18C11.74,18 12.91,17.41 13.95,16.9C14.91,16.42 15.74,16 17,16C19.25,16 20.29,16.71 20.29,16.71V16.71C20.8,17.1 21.32,17.1 21.71,16.71C22.1,16.32 22.1,15.69 21.71,15.29C21.5,15.08 20.25,14 17,14Z",
  flower: "M3,13A9,9 0 0,0 12,22C12,17 7.97,13 3,13M12,5.5A2.5,2.5 0 0,1 14.5,8A2.5,2.5 0 0,1 12,10.5A2.5,2.5 0 0,1 9.5,8A2.5,2.5 0 0,1 12,5.5M5.6,10.25A2.5,2.5 0 0,0 8.1,12.75C8.63,12.75 9.12,12.58 9.5,12.31C9.5,12.37 9.5,12.43 9.5,12.5A2.5,2.5 0 0,0 12,15A2.5,2.5 0 0,0 14.5,12.5C14.5,12.43 14.5,12.37 14.5,12.31C14.88,12.58 15.37,12.75 15.9,12.75C17.28,12.75 18.4,11.63 18.4,10.25C18.4,9.25 17.81,8.4 16.97,8C17.81,7.6 18.4,6.74 18.4,5.75C18.4,4.37 17.28,3.25 15.9,3.25C15.37,3.25 14.88,3.41 14.5,3.69C14.5,3.63 14.5,3.56 14.5,3.5A2.5,2.5 0 0,0 12,1A2.5,2.5 0 0,0 9.5,3.5C9.5,3.56 9.5,3.63 9.5,3.69C9.12,3.41 8.63,3.25 8.1,3.25A2.5,2.5 0 0,0 5.6,5.75C5.6,6.74 6.19,7.6 7.03,8C6.19,8.4 5.6,9.25 5.6,10.25M12,22A9,9 0 0,0 21,13C16,13 12,17 12,22Z"
}, Qe = {
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
  metrics: { humidity: "Humidity", pressure: "Pressure", visibility: "Visibility", uv_index: "UV index", precipitation: "Precipitation", compared_to_average: "Compared to average" },
  dewPoint: "Dew point {dew_point}",
  pressure: { rising: "Rising over 3 hours", falling: "Falling over 3 hours", steady: "Steady over 3 hours" },
  uvLevel: { low: "Low", moderate: "Moderate", high: "High", very_high: "Very high", extreme: "Extreme" },
  uvPeak: "{level} · up to {uv_index} at {time}",
  rainExpected: "{amount} in the next 24 hours",
  rainLast24h: "Last 24 hours",
  average: { above: "above the average high", below: "below the average high", same: "same as the average high" },
  highsLastDays: "Highs of the last {days} days",
  todayVsAverage: "Today {today} · average {average}",
  airQuality: "Air quality",
  fineParticles: "fine particles",
  aqLevel: { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }
}, kp = {
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
}, Mp = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], Cp = Object.keys(Qe.phases), Dr = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)" }, Sp = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, nc = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], Rr = 100, hd = "µg/m³", Lp = "weather_alerts.air_quality_pollen", gd = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], Tp = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, Ap = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], _p = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, Ep = { daily: 1, hourly: 2 }, Be = (n) => String(n ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]), Yn = (n, r) => n.replace(/\{(\w+)\}/g, (i, c) => r[c] ?? ""), uo = (n) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + n + '"/></svg>', Dp = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
}, mn = (n) => n != null && n !== "" && Number.isFinite(Number(n)), vd = /* @__PURE__ */ new Map(), bd = /* @__PURE__ */ new Map(), Bs = /* @__PURE__ */ new WeakMap(), Rp = (n) => {
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
function tn(n, r, i) {
  const c = Number(n);
  if (Number.isNaN(c)) return String(n);
  const f = (r == null ? void 0 : r.number_format) === "none", p = { maximumFractionDigits: 2, ...i, ...f ? { useGrouping: !1 } : {} }, v = f ? "en-US" : Rp(r), S = JSON.stringify([v, p]);
  let y = vd.get(S);
  if (!y) {
    try {
      y = new Intl.NumberFormat(v, p);
    } catch {
      y = new Intl.NumberFormat(void 0, p);
    }
    vd.set(S, y);
  }
  return y.format(c);
}
const tl = (n) => {
  var r;
  return ((r = n == null ? void 0 : n.locale) == null ? void 0 : r.language) || (n == null ? void 0 : n.language) || void 0;
};
function Np(n) {
  if (!n) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (Bs.has(n)) return Bs.get(n);
  const r = n.time_format, i = r === "language" || r === "system" || !r ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(r === "language" ? n.language : void 0).includes("10") : r === "12";
  return Bs.set(n, i), i;
}
const ac = (n) => {
  var r, i;
  return ((r = n == null ? void 0 : n.locale) == null ? void 0 : r.time_zone) === "server" && ((i = n == null ? void 0 : n.config) != null && i.time_zone) ? n.config.time_zone : void 0;
};
function ic(n, r) {
  const i = JSON.stringify([n, r]);
  let c = bd.get(i);
  if (!c) {
    try {
      c = new Intl.DateTimeFormat(n, r);
    } catch {
      c = new Intl.DateTimeFormat(void 0, { ...r, timeZone: void 0 });
    }
    bd.set(i, c);
  }
  return c;
}
const so = (n, r) => ic(tl(r), { hour: "numeric", minute: "2-digit", hourCycle: Np(r == null ? void 0 : r.locale) ? "h12" : "h23", timeZone: ac(r) }).format(n), wd = (n, r) => ic(tl(r), { weekday: "short", timeZone: ac(r) }).format(n), Bp = (n, r) => n.toLocaleDateString(tl(r), { weekday: "narrow" }), wn = (n, r) => mn(r) ? tn(Math.round(Number(r)), n.locale) + "°" : "–", po = (n) => {
  const r = new Date(n);
  return r.setHours(0, 0, 0, 0), r;
}, zo = (n, r) => n.getFullYear() === r.getFullYear() && n.getMonth() === r.getMonth() && n.getDate() === r.getDate(), _n = Math.PI / 180, Pp = 2440588, Ip = 2451545, Vr = _n * 23.4397, Hp = 149598e3, Fp = -0.833 * _n, Op = 0.133 * _n, xd = 5 * ba, oc = (n) => n.getTime() / Si - 0.5 + Pp - Ip, rc = (n, r) => Math.atan2(Math.sin(n) * Math.cos(Vr) - Math.tan(r) * Math.sin(Vr), Math.cos(n)), sc = (n, r) => Math.asin(Math.sin(r) * Math.cos(Vr) + Math.cos(r) * Math.sin(Vr) * Math.sin(n)), Wp = (n, r) => _n * (280.16 + 360.9856235 * n) - r, qp = (n, r, i) => Math.asin(Math.sin(r) * Math.sin(i) + Math.cos(r) * Math.cos(i) * Math.cos(n));
function lc(n) {
  const r = _n * (357.5291 + 0.98560028 * n), i = _n * (1.9148 * Math.sin(r) + 0.02 * Math.sin(2 * r) + 3e-4 * Math.sin(3 * r)), c = r + i + _n * 102.9372 + Math.PI;
  return { ra: rc(c, 0), dec: sc(c, 0), dist: Hp };
}
function dc(n) {
  const r = _n * (218.316 + 13.176396 * n), i = _n * (134.963 + 13.064993 * n), c = _n * (93.272 + 13.22935 * n), f = r + _n * 6.289 * Math.sin(i), p = _n * 5.128 * Math.sin(c);
  return { ra: rc(f, p), dec: sc(f, p), dist: 385001 - 20905 * Math.cos(i) };
}
const cc = (n, r, i, c) => {
  const f = oc(r), p = n(f);
  return qp(Wp(f, _n * -c) - p.ra, _n * i, p.dec);
}, nl = (n, r, i) => cc(lc, n, r, i), zp = (n, r, i) => cc(dc, n, r, i);
function uc(n, r, i, c) {
  const f = {};
  let p = i.getTime(), v = n(i) - r;
  for (let S = p + xd; S <= c.getTime(); S += xd) {
    const y = n(new Date(S)) - r;
    if (v < 0 != y < 0) {
      const B = new Date(p + (S - p) * v / (v - y));
      y > 0 ? f.rise ?? (f.rise = B) : f.set ?? (f.set = B);
    }
    p = S, v = y;
  }
  return f;
}
const pc = (n) => {
  const r = po(n);
  return [r, new Date(r.getTime() + Si)];
}, Vp = (n, r, i) => uc((c) => nl(c, r, i), Fp, ...pc(n)), jp = (n, r, i) => uc((c) => zp(c, r, i), Op, ...pc(n));
function Gp(n) {
  const r = oc(n), i = lc(r), c = dc(r), f = Math.acos(Math.sin(i.dec) * Math.sin(c.dec) + Math.cos(i.dec) * Math.cos(c.dec) * Math.cos(i.ra - c.ra)), p = Math.atan2(i.dist * Math.sin(f), c.dist - i.dist * Math.cos(f)), v = Math.atan2(Math.cos(i.dec) * Math.sin(i.ra - c.ra), Math.sin(i.dec) * Math.cos(c.dec) - Math.cos(i.dec) * Math.sin(c.dec) * Math.cos(i.ra - c.ra));
  return { fraction: (1 + Math.cos(p)) / 2, phase: 0.5 + 0.5 * p * (v < 0 ? -1 : 1) / Math.PI };
}
const Up = (n) => {
  const r = n * 28;
  return r < 0.5 || r > 27.5 ? "new_moon" : r < 6.5 ? "waxing_crescent" : r < 7.5 ? "first_quarter" : r < 13.5 ? "waxing_gibbous" : r < 14.5 ? "full_moon" : r < 20.5 ? "waning_gibbous" : r < 21.5 ? "last_quarter" : "waning_crescent";
}, jr = (n) => {
  const r = n == null ? void 0 : n.config;
  return r && mn(r.latitude) && mn(r.longitude) ? { lat: Number(r.latitude), lon: Number(r.longitude) } : null;
};
function yd(n, r) {
  var B, ae, Z;
  const i = jr(n), c = i ? Vp(r, i.lat, i.lon) : {}, f = (B = n == null ? void 0 : n.states) == null ? void 0 : B["sun.sun"], p = po(r).getTime(), v = (_) => {
    const R = _ ? new Date(_) : null;
    return R && Number.isFinite(R.getTime()) && po(R).getTime() === p ? R : null;
  }, S = v((ae = f == null ? void 0 : f.attributes) == null ? void 0 : ae.next_rising), y = v((Z = f == null ? void 0 : f.attributes) == null ? void 0 : Z.next_setting);
  return S && (c.rise = S), y && (c.set = y), c;
}
function Yp(n) {
  var c;
  const r = (c = n == null ? void 0 : n.states) == null ? void 0 : c["sun.sun"];
  if ((r == null ? void 0 : r.state) === "below_horizon" || (r == null ? void 0 : r.state) === "above_horizon") return r.state === "below_horizon";
  const i = jr(n);
  return i ? nl(/* @__PURE__ */ new Date(), i.lat, i.lon) < 0 : !1;
}
const Uo = (n) => !!n && n.state !== "unavailable" && n.state !== "unknown", Ur = (n, r) => {
  var c;
  const i = (c = n.entities) == null ? void 0 : c[r];
  return !i || !i.hidden && !i.entity_category;
}, In = (n, r, i) => {
  var c, f;
  for (const p of r) {
    const v = (c = n.states) == null ? void 0 : c[p];
    if (!Uo(v)) continue;
    const S = (f = v.attributes) == null ? void 0 : f[i];
    if (S != null && S !== "") return { stateObj: v, value: S };
  }
}, Zp = (n, r) => r.map((i) => {
  var c;
  return (c = n.states) == null ? void 0 : c[i];
}).find(Uo), Kp = (n, r, i) => r.map((c) => {
  var f;
  return (f = n.states) == null ? void 0 : f[c];
}).find((c) => {
  var f;
  return Uo(c) && (((f = c.attributes) == null ? void 0 : f.supported_features) == null || Number(c.attributes.supported_features) & Ep[i]);
});
function jo(n, r, i) {
  var p, v, S, y;
  const c = ((v = (p = n.config) == null ? void 0 : p.unit_system) == null ? void 0 : v.length) || "", f = (r == null ? void 0 : r.attributes) || {};
  switch (i) {
    case "visibility":
      return f.visibility_unit || c;
    case "precipitation":
      return f.precipitation_unit || (c === "km" ? "mm" : "in");
    case "pressure":
      return f.pressure_unit || (c === "km" ? "hPa" : "inHg");
    case "wind_speed":
    case "wind_gust_speed":
      return f.wind_speed_unit || c + "/h";
    default:
      return f.temperature_unit || ((y = (S = n.config) == null ? void 0 : S.unit_system) == null ? void 0 : y.temperature) || "";
  }
}
function Wr(n, r, i, c) {
  try {
    if (typeof n.formatEntityAttributeValueToParts == "function") {
      const [f, ...p] = n.formatEntityAttributeValueToParts(r, i, c).map((v) => v.value);
      return { number: f, unit: p.join("").trim() };
    }
  } catch {
  }
  return { number: tn(c, n.locale), unit: jo(n, r, i) };
}
function $p(n, r, i, c) {
  try {
    if (typeof n.formatEntityAttributeValue == "function") return n.formatEntityAttributeValue(r, i, c);
  } catch {
  }
  const f = Wr(n, r, i, c);
  return (f.number + " " + f.unit).trim();
}
function Nr(n, r) {
  var c;
  try {
    if (typeof n.formatEntityState == "function") return n.formatEntityState(r);
  } catch {
  }
  const i = (c = r.attributes) == null ? void 0 : c.unit_of_measurement;
  return kp[r.state] || (i && mn(r.state) ? tn(r.state, n.locale) + " " + i : r.state);
}
function kd(n, r) {
  var i;
  try {
    if (typeof n.formatEntityName == "function") return n.formatEntityName(r, { type: "entity" });
  } catch {
  }
  return ((i = r.attributes) == null ? void 0 : i.friendly_name) || r.entity_id;
}
const Jp = (n) => n < 3 ? "low" : n < 6 ? "moderate" : n < 8 ? "high" : n < 11 ? "very_high" : "extreme", Xp = (n) => nc.find(([, r]) => n <= r)[0];
function Qp(n, r) {
  if (r === "Beaufort") return Math.round(n);
  const i = r ? Tp[r] : void 0;
  if (i === void 0) return;
  const c = Ap.findIndex((f) => n * i < f);
  return c === -1 ? 12 : c;
}
const Md = (n, r) => {
  const i = r ? _p[r] : void 0;
  return i === void 0 ? void 0 : n * i;
}, Cd = (n) => Object.keys(n.states || {}).find((r) => {
  var i, c;
  return r.startsWith("sensor.") && ((c = (i = n.entities) == null ? void 0 : i[r]) == null ? void 0 : c.platform) === "moon";
}), Ps = (n) => Object.values(n.states || {}).filter((r) => {
  var i, c;
  return r.entity_id.startsWith("sensor.") && ((i = r.attributes) == null ? void 0 : i.device_class) === "precipitation" && ["total", "total_increasing"].includes(((c = r.attributes) == null ? void 0 : c.state_class) ?? "") && Ur(n, r.entity_id);
}).map((r) => r.entity_id).sort()[0];
function em(n) {
  var i;
  const r = {};
  for (const [c, f] of Object.entries(((i = n == null ? void 0 : n.core) == null ? void 0 : i.integration) ?? {})) {
    if (f && "integration_type" in f) {
      r[c] = f.categories;
      continue;
    }
    for (const [p, v] of Object.entries((f == null ? void 0 : f.integrations) ?? {})) r[p] = v == null ? void 0 : v.categories;
  }
  return r;
}
const mc = (n, r, i) => {
  var f, p, v;
  const c = (p = (f = n.entities) == null ? void 0 : f[i]) == null ? void 0 : p.platform;
  return !!c && !!((v = r[c]) != null && v.includes(Lp));
};
function tm(n, r) {
  const i = /* @__PURE__ */ new Map();
  return Object.values(n.states || {}).filter((c) => {
    var f;
    return c.entity_id.startsWith("sensor.") && gd.includes(((f = c.attributes) == null ? void 0 : f.device_class) ?? "") && Ur(n, c.entity_id) && mc(n, r, c.entity_id);
  }).sort((c, f) => c.entity_id.localeCompare(f.entity_id)).forEach((c) => {
    i.has(c.attributes.device_class) || i.set(c.attributes.device_class, c.entity_id);
  }), gd.map((c) => i.get(c)).filter(Boolean);
}
const nm = (n, r) => Object.values(n.states || {}).filter((i) => {
  var c, f;
  return i.entity_id.startsWith("sensor.") && Ur(n, i.entity_id) && mc(n, r, i.entity_id) && (((f = (c = n.entities) == null ? void 0 : c[i.entity_id]) == null ? void 0 : f.translation_key) ?? i.entity_id).toLowerCase().includes("pollen");
}).map((i) => i.entity_id).sort();
function Sd(n, r, i) {
  const c = Math.max(r - n, 1e-6), f = i[i.length - 1], p = i.find((B) => c / B <= 4) ?? f * Math.ceil(c / (4 * f)), v = Math.floor(n / p) * p;
  let S = Math.ceil(r / p) * p;
  S === v && (S = v + p);
  const y = [];
  for (let B = v; B <= S + p / 1e3; B += p) y.push(B);
  return { min: v, max: S, ticks: y };
}
const Vo = (n, r, i) => {
  const c = (v) => [1, 3, 5].map((S) => parseInt(v.slice(S, S + 2), 16)), f = c(n), p = c(r);
  return "rgb(" + f.map((v, S) => Math.round(v + (p[S] - v) * i)).join(", ") + ")";
}, am = (n, r, i, c) => {
  const f = i * Math.abs(1 - 2 * c), p = c < 0.5 ? 0 : 1;
  return "M " + n + " " + (r - i) + " A " + i + " " + i + " 0 0 0 " + n + " " + (r + i) + " A " + f + " " + i + " 0 0 " + p + " " + n + " " + (r - i) + " Z";
}, Da = ({ icon: n, name: r, sub: i, visual: c, double: f, backdrop: p, cls: v }) => '<div class="wbCard wbSquare' + (f ? " wbDouble" : "") + (p ? " wbHasBackdrop" : "") + (v ? " " + v : "") + '">' + (p ? '<div class="wbBackdrop" aria-hidden="true">' + p + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + uo(n) + '</div><div class="wbText"><span class="wbName">' + Be(r) + "</span>" + (i ? '<span class="wbSub">' + Be(i) + "</span>" : "") + '</div></div><div class="wbVisual">' + c + "</div></div>", Br = (n, r) => '<div class="wbValue"><span class="wbNum">' + Be(n) + "</span>" + (r ? '<span class="wbUnitV">' + Be(r) + "</span>" : "") + "</div>";
function im(n) {
  const r = n.max - n.min || 1, i = (S) => 100 - (Math.min(n.max, Math.max(n.min, S)) - n.min) / r * 100, c = (S) => S / Go * 100 + "%", f = (S) => S.map((y) => y.t + "," + i(y.v)).join(" "), p = n.kind === "line" ? n.points : [];
  let v = '<div class="wbDayChart"><div class="wbDcSun">' + n.sun.map((S) => '<span class="wbDcSunMark" style="left:' + c(S.t) + '">' + uo(S.rise ? xn.sunsetUp : xn.sunsetDown) + Be(S.label) + "</span>").join("") + "</div>";
  return v += '<div class="wbDcY">' + n.ticks.map((S) => '<span style="top:' + i(S) + '%">' + Be(n.format(S)) + "</span>").join("") + "</div>", v += '<div class="wbDcPlot"><svg viewBox="0 0 ' + Go + ' 100" preserveAspectRatio="none">' + n.night.map(([S, y]) => '<rect class="wbDcNight" x="' + S + '" y="0" width="' + (y - S) + '" height="100"></rect>').join("") + n.ticks.map((S) => '<line class="wbDcGrid" x1="0" x2="' + Go + '" y1="' + i(S) + '" y2="' + i(S) + '" vector-effect="non-scaling-stroke"></line>').join("") + n.sun.map((S) => '<line class="wbDcSunLine" x1="' + S.t + '" x2="' + S.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (n.past && n.past.length > 1 ? '<polyline class="wbDcPast" points="' + f(n.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (p.length > 1 ? '<polygon class="wbDcArea" points="' + p[0].t + ",100 " + f(p) + " " + p[p.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + f(p) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (n.now ? '<line class="wbDcNow" x1="' + n.now.t + '" x2="' + n.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (n.kind === "bars" ? n.points.filter((S) => S.v > 0).map((S) => '<i class="wbDcBar" style="left:' + c(S.t + 12) + ";width:" + c(36) + ";height:" + (100 - i(S.v)) + '%"></i>').join("") : "") + (n.now && n.kind === "line" ? '<i class="wbDcDot" style="left:' + c(n.now.t) + ";top:" + i(n.now.v) + '%"></i>' : "") + (n.peak ? '<span class="wbDcPeak" style="left:' + c(n.peak.t) + ";top:" + i(n.peak.v) + '%">' + Be(n.peak.label) + "</span>" : "") + (n.note ? '<span class="wbDcNote">' + Be(n.note) + "</span>" : "") + "</div>", v += '<div class="wbDcX">' + n.hours.map((S) => '<span class="' + (S.minor ? "wbMinor" : "") + '" style="left:' + c(S.t) + '">' + Be(S.label) + "</span>").join("") + "</div></div>", v;
}
function om(n, r) {
  const v = n.map((O) => O.value), S = Math.min(...v), y = Math.max(...v), B = y - S || 1, ae = (O) => O / (n.length - 1) * 300, Z = (O) => 18 + (1 - (O - S) / B) * 84, _ = n.map((O, L) => ae(L) + "," + Z(O.value)).join(" "), R = v.indexOf(y), q = v.indexOf(S), J = (O) => O === 0 ? "start" : O === n.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true"><polygon class="wbArea" points="0,102 ' + _ + ' 300,102"></polygon><polyline class="wbLine" points="' + _ + '" vector-effect="non-scaling-stroke"></polyline><text x="' + ae(R) + '" y="' + (Z(y) - 6) + '" text-anchor="' + J(R) + '">' + Be(r(y)) + '</text><text x="' + ae(q) + '" y="' + (Z(S) + 14) + '" text-anchor="' + J(q) + '">' + Be(r(S)) + '</text><text x="0" y="120" text-anchor="start">' + Be(n[0].label) + '</text><text x="300" y="120" text-anchor="end">' + Be(n[n.length - 1].label) + "</text></svg>";
}
function rm(n, r) {
  const p = n.map((Z) => Z.value).concat([]), v = Math.min(...p) - 2, S = Math.max(...p) + 1, y = S - v || 1, B = 300 / n.length, ae = (Z) => (1 - (Z - v) / y) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + n.map((Z, _) => '<rect class="wbBar' + (Z.now ? " wbNowBar" : "") + '" x="' + (_ * B + B * 0.2) + '" y="' + ae(Z.value) + '" width="' + B * 0.6 + '" height="' + (104 - ae(Z.value)) + '" rx="6"></rect><text x="' + (_ * B + B / 2) + '" y="120" text-anchor="middle">' + Be(Z.label) + "</text>").join("") + "</svg>";
}
const sm = [
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
], lm = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], Ld = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], dm = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let cm = 0;
function um(n, { getHass: r, entityId: i, style: c = "bitmap", motion: f = !0 } = {}) {
  var la, ka;
  const p = "wb" + ++cm + "-", v = document.createElement("div");
  v.className = "wb";
  const S = document.createElement("div");
  S.className = "wbBento", v.appendChild(S), n.replaceChildren(v);
  const y = ["current", "hourly", "sun", "moon", "wind", "uv_index", "compared_to_average", "humidity", "pressure", "precipitation", "visibility", "air_quality"], B = { current: "wide", hourly: "wide", compared_to_average: "double" }, ae = {};
  y.forEach((M) => {
    const A = document.createElement("div");
    A.className = "wbItem", A.dataset.card = M, A.dataset.size = B[M] || "tile", A.hidden = !0, S.appendChild(A), ae[M] = { el: A, html: null };
  });
  let Z = !1, _ = null, R = 0, q = -1, J = !1, O = null;
  const L = { openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", aq: void 0 }, I = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let W = /* @__PURE__ */ new Date(), H = /* @__PURE__ */ new Date(), Q = null;
  const z = {}, F = {}, de = (M) => {
    var A;
    return ((A = F[M]) == null ? void 0 : A.forecast) ?? [];
  }, Ee = (M, A) => {
    var N;
    return F[A] ? (N = M.states) == null ? void 0 : N[F[A].entityId] : void 0;
  };
  function h(M) {
    const A = z[M];
    A && (A.unsub.then((N) => {
      typeof N == "function" && N();
    }).catch(() => {
    }), delete z[M]), F[M] && delete F[M];
  }
  function be(M, A, N) {
    var G;
    if (typeof ((G = M.connection) == null ? void 0 : G.subscribeMessage) != "function") return;
    const V = { entityId: N };
    try {
      V.unsub = Promise.resolve(M.connection.subscribeMessage((ue) => {
        Z || z[A] !== V || (ue != null && ue.forecast ? F[A] = { entityId: N, forecast: ue.forecast } : delete F[A], Hn());
      }, { type: "weather/subscribe_forecast", forecast_type: A, entity_id: N }));
    } catch (ue) {
      V.unsub = Promise.reject(ue);
    }
    V.unsub.catch(() => {
      z[A] === V && delete z[A];
    }), z[A] = V;
  }
  function ye(M, A) {
    var N;
    for (const V of ["daily", "hourly"]) {
      const G = Kp(M, A, V);
      ((N = z[V]) == null ? void 0 : N.entityId) !== (G == null ? void 0 : G.entity_id) && (h(V), G && be(M, V, G.entity_id));
    }
  }
  const He = (M, A, N, V = !1) => M.callWS({
    type: "history/history_during_period",
    start_time: N.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [A],
    minimal_response: V,
    no_attributes: V,
    significant_changes_only: !1
  });
  async function w(M, A) {
    var ce, we, le;
    const N = In(M, A, "pressure");
    if (!N) return;
    const V = N.stateObj.entity_id, G = await He(M, V, new Date(Date.now() - 3 * va)), ue = (le = (we = (ce = G == null ? void 0 : G[V]) == null ? void 0 : ce.find((Me) => {
      var Re;
      return typeof ((Re = Me.a) == null ? void 0 : Re.pressure) == "number";
    })) == null ? void 0 : we.a) == null ? void 0 : le.pressure;
    I.pressureHistory = typeof ue == "number" ? { entityId: V, value: ue } : void 0;
  }
  async function x(M, A) {
    var we;
    const N = In(M, A, "temperature");
    if (!N) return;
    const V = N.stateObj.entity_id, G = po(/* @__PURE__ */ new Date()), ue = await He(M, V, new Date(G.getTime() - bp * Si)), ce = /* @__PURE__ */ new Map();
    for (const le of (ue == null ? void 0 : ue[V]) ?? []) {
      const Me = (we = le.a) == null ? void 0 : we.temperature, Re = new Date((le.lc ?? le.lu) * 1e3);
      if (typeof Me != "number" || Re >= G) continue;
      const Ke = Re.toDateString();
      ce.set(Ke, Math.max(ce.get(Ke) ?? -1 / 0, Me));
    }
    I.temperatureHistory = { entityId: V, dailyHighs: [...ce.values()], days: [...ce.entries()].map(([le, Me]) => ({ date: new Date(le), high: Me })) };
  }
  async function k(M) {
    const A = Ps(M);
    if (!A) return;
    const N = await M.callWS({ type: "recorder/statistic_during_period", statistic_id: A, rolling_window: { duration: { hours: 24 } } });
    I.rain = { entityId: A, change: (N == null ? void 0 : N.change) ?? void 0 };
  }
  function E() {
    const M = r == null ? void 0 : r();
    if (!M || Z || typeof M.callWS != "function") return;
    const A = X(M);
    I.lastFetch = Date.now(), [w(M, A), x(M, A), k(M)].forEach((N) => N.then(() => Hn(), () => {
    }));
  }
  async function ne() {
    const M = r == null ? void 0 : r();
    if (!M) return;
    const A = In(M, X(M), "temperature");
    if (!A) return;
    const N = A.stateObj.entity_id, V = po(/* @__PURE__ */ new Date());
    try {
      const G = await He(M, N, V), ue = (ce) => ((G == null ? void 0 : G[N]) ?? []).map((we) => {
        var le;
        return { time: we.lu * 1e3, value: (le = we.a) == null ? void 0 : le[ce] };
      }).filter((we) => typeof we.value == "number");
      I.todayHistory = { day: V.toDateString(), fetched: Date.now(), temperature: ue("temperature"), humidity: ue("humidity") }, Hn();
    } catch {
    }
  }
  async function te(M) {
    const A = r == null ? void 0 : r();
    if (A)
      try {
        const N = await He(A, M, new Date(Date.now() - 24 * va), !0), V = ((N == null ? void 0 : N[M]) ?? []).filter((ue) => mn(ue.s)), G = Math.max(1, Math.ceil(V.length / 48));
        I.aqHistory = { entityId: M, points: V.filter((ue, ce) => ce % G === 0).map((ue) => ({ label: so(new Date(ue.lu * 1e3), A), value: Number(ue.s) })) }, Hn();
      } catch {
      }
  }
  function K(M) {
    I.categories === void 0 && (I.categories = null, Promise.resolve().then(() => M.callWS({ type: "integration/descriptions" })).then((A) => {
      I.categories = em(A);
    }, () => {
      I.categories = {};
    }).then(() => Hn()));
  }
  function X(M) {
    var N;
    const A = Object.keys(M.states || {}).filter((V) => V.startsWith("weather.") && Ur(M, V)).sort();
    return i && ((N = M.states) != null && N[i]) ? [i, ...A.filter((V) => V !== i)] : A;
  }
  const oe = (M) => I.categories ? { air: tm(M, I.categories), pollen: nm(M, I.categories) } : { air: [], pollen: [] };
  function Pe(M, A, N, V) {
    if (c === "smooth") {
      const G = pp(M, A === 90, N, p + "g-" + V);
      return '<span class="wbWx wbS' + A + " wb" + G.k[0].toUpperCase() + G.k.slice(1) + (G.night ? " wbNight" : "") + '" aria-hidden="true">' + G.svg + "</span>";
    }
    return '<span class="wbWx wbS' + A + '" aria-hidden="true"><canvas data-wb-wx="' + Be(Gr(M, N)) + '" data-size="' + A + '"></canvas></span>';
  }
  const Ue = () => de("daily").filter((M) => M.templow != null).slice(0, mp);
  function Ft(M, A) {
    const N = new Date(A.datetime), V = /* @__PURE__ */ new Date();
    return zo(N, V) ? Qe.today : zo(N, new Date(V.getTime() + Si)) ? Qe.tomorrow : wd(N, M);
  }
  const lt = (M, A, N) => N === 0 ? Ft(M, A) : wd(new Date(A.datetime), M);
  function nn(M, A) {
    var Re, Ke, Ye, Ae;
    const N = Zp(M, A);
    if (!N) return "";
    const V = Ue(), G = L.openDay !== void 0 ? V[L.openDay] : void 0, ue = In(M, A, "temperature"), ce = V[0], we = ce && zo(new Date(ce.datetime), /* @__PURE__ */ new Date()), le = ((Ke = (Re = M.config) == null ? void 0 : Re.unit_system) == null ? void 0 : Ke.temperature) || ((Ye = N.attributes) == null ? void 0 : Ye.temperature_unit) || "";
    let Me = '<div class="wbCard wbWeather' + (G ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (G ? " inert" : "") + '><div class="wbNow"><div class="wbCurrent">' + Pe(N.state, 90, Yp(M), "now") + '<div class="wbTempBlock">' + (ue && mn(ue.value) ? '<div class="wbTemp"><span class="wbDeg">' + Be(tn(Math.round(Number(ue.value)), M.locale)) + '</span><span class="wbUnit">' + Be(le) + "</span></div>" : "") + '<div class="wbPlace">' + Be(((Ae = M.config) == null ? void 0 : Ae.location_name) ?? "") + '</div></div></div><div class="wbCondition"><div class="wbCondName">' + Be(Nr(M, N)) + "</div>" + (we && ce.templow != null ? '<div class="wbRange">' + Be(Yn(Qe.range, { high: wn(M, ce.temperature), low: wn(M, ce.templow) })) + "</div>" : "") + "</div></div>";
    return V.length && (Me += '<div class="wbColumns" role="list">' + V.map((We, Se) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + Se + '" data-wb-focus="col-' + Se + '"><span class="wbDay">' + Be(lt(M, We, Se)) + "</span>" + Pe(We.condition ?? "cloudy", 60, !1, "col" + Se) + '<span class="wbTemps"><span class="wbHi">' + Be(wn(M, We.temperature)) + '</span><span class="wbLo">' + Be(wn(M, We.templow)) + "</span></span></button>").join("") + "</div>", Me += '<div class="wbHalves" role="list">' + V.map((We, Se) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + Se + '" data-wb-focus="half-' + Se + '">' + Pe(We.condition ?? "cloudy", 40, !1, "half" + Se) + '<span class="wbText"><span class="wbName">' + Be(Ft(M, We)) + '</span><span class="wbSub">' + Be(Yn(Qe.highLow, { high: wn(M, We.temperature), low: wn(M, We.templow) })) + "</span></span></button>").join("") + "</div>"), Me + "</div>" + (G ? jt(M, A, G) : "") + "</div>";
  }
  function et(M) {
    const A = M.getTime(), N = Date.now() - va;
    return de("hourly").filter((V) => {
      const G = new Date(V.datetime).getTime();
      return G >= A && G < A + Si && G > N;
    });
  }
  function At(M) {
    if (!M.length) return ["temperature"];
    const A = ["temperature"];
    return M.some((N) => N.precipitation != null || N.precipitation_probability != null) && A.push("precipitation"), M.some((N) => N.humidity != null) && A.push("humidity"), A;
  }
  function jt(M, A, N) {
    const V = po(new Date(N.datetime)), G = et(V), ue = At(G), ce = ue.includes(L.dayMode) ? L.dayMode : "temperature", we = (le) => le === "humidity" ? Qe.humidity : Qe.modes[le];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + Pe(N.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + Be(Ft(M, N)) + '</span><span class="wbSub">' + Be(Yn(Qe.highLow, { high: wn(M, N.temperature), low: wn(M, N.templow) })) + '</span></div><button class="wbBack" title="' + Be(Qe.back) + '" data-wb="close-day" data-wb-focus="back-day">' + uo(xn.back) + "</button></div>" + (ue.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + ue.map((le) => '<button aria-pressed="' + (le === ce) + '" data-wb="day-mode" data-mode="' + le + '" data-wb-focus="day-mode-' + le + '">' + Be(we(le)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + im(_t(M, A, V, G, ce)) + "</div></div>";
  }
  function _t(M, A, N, V, G) {
    var li;
    const ue = N.getTime(), ce = Date.now(), we = zo(N, /* @__PURE__ */ new Date()), le = (it) => (it - ue) / ba, Me = (it) => so(new Date(it), M), Re = (it) => new Date(it.datetime).getTime(), Ke = [0, 3, 6, 9, 12, 15, 18, 21].map((it) => ({ t: it * 60, label: Me(ue + it * va), minor: it % 6 !== 0 })), { rise: Ye, set: Ae } = yd(M, N), We = [], Se = [];
    Ye && (We.push({ t: le(Ye.getTime()), label: Me(Ye.getTime()), rise: !0 }), Se.push([0, le(Ye.getTime())])), Ae && (We.push({ t: le(Ae.getTime()), label: Me(Ae.getTime()), rise: !1 }), Se.push([le(Ae.getTime()), Go]));
    const Ge = jr(M);
    !Ye && !Ae && Ge && nl(new Date(ue + Si / 2), Ge.lat, Ge.lon) < 0 && Se.push([0, Go]);
    const st = we ? le(ce) : void 0, yt = { hours: Ke, sun: We, night: Se };
    if (!V.length && !we) return { ...yt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Qe.noHourly };
    if (G === "precipitation") {
      const it = V.some((Jt) => Jt.precipitation_probability != null), Wn = V.map((Jt) => ({ t: le(Re(Jt)), v: Number((it ? Jt.precipitation_probability : Jt.precipitation) ?? 0) })), Rn = jo(M, Ee(M, "hourly"), "precipitation"), da = Math.max(0, ...Wn.map((Jt) => Jt.v)), ea = it ? 100 : Sd(0, Math.max(da, 1), [0.5, 1, 2, 5, 10]).max, ca = (Jt) => it ? tn(Jt, M.locale) + "%" : tn(Jt, M.locale, { maximumFractionDigits: 1 }) + " " + Rn, ua = Wn.find((Jt) => Jt.v === da);
      return {
        ...yt,
        kind: "bars",
        points: Wn,
        min: 0,
        max: ea,
        ticks: [0, ea / 2, ea],
        format: ca,
        now: st !== void 0 ? { t: st, v: 0 } : void 0,
        peak: ua && da > 0 ? { t: ua.t + 30, v: ua.v, label: ca(ua.v) } : void 0,
        note: da > 0 ? void 0 : Qe.noRain
      };
    }
    const mt = G === "humidity" ? "humidity" : "temperature", Ht = V.filter((it) => it[mt] != null && (!we || Re(it) >= ce)).map((it) => ({ t: le(Re(it)), v: Number(it[mt]) }));
    let Ut, hn = [];
    if (st !== void 0) {
      const it = In(M, A, mt);
      it && mn(it.value) && (Ut = { t: st, v: Number(it.value) }, Ht.unshift(Ut)), hn = (((li = I.todayHistory) == null ? void 0 : li.day) === N.toDateString() ? I.todayHistory[mt] : []).filter((Rn) => Rn.time <= ce).map((Rn) => ({ t: Math.max(0, le(Rn.time)), v: Rn.value })), Ut && hn.length && hn.push(Ut);
    }
    const ln = [...hn, ...Ht];
    if (!ln.length) return { ...yt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Qe.noHourly };
    const si = ln.map((it) => it.v), On = Sd(Math.min(...si), Math.max(...si), mt === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    mt === "humidity" && (On.min = Math.max(0, On.min), On.max = Math.min(100, On.max), On.ticks = On.ticks.filter((it) => it >= 0 && it <= 100));
    const Xn = mt === "humidity" ? (it) => tn(it, M.locale) + "%" : (it) => wn(M, it), Qn = mt === "temperature" ? ln.reduce((it, Wn) => Wn.v > it.v ? Wn : it) : void 0;
    return { ...yt, kind: "line", points: Ht, past: hn, ...On, format: Xn, now: Ut, peak: Qn ? { ...Qn, label: Xn(Qn.v) } : void 0 };
  }
  function sa(M) {
    const A = ["temperature"];
    return M.some((N) => N.precipitation_probability != null || N.precipitation != null) && A.push("precipitation"), M.some((N) => N.wind_speed != null) && A.push("wind"), A;
  }
  function an() {
    const M = /* @__PURE__ */ new Date();
    return M.setHours(6, 0, 0, 0), M.getTime() > Date.now() && M.setDate(M.getDate() - 1), M;
  }
  function Ct(M, A) {
    var G, ue;
    const N = de("daily"), V = [];
    for (let ce = 0; ce < Er; ce++) for (const we of [!1, !0]) {
      const le = M.getTime() + (ce * 24 + (we ? 12 : 0)) * va, Me = le + 12 * va, Re = {};
      A.forEach((Ye) => {
        const Ae = new Date(Ye.datetime).getTime();
        Ye.condition && Ae >= le && Ae < Me && (Re[Ye.condition] = (Re[Ye.condition] ?? 0) + (gp.has(Ye.condition) ? 2 : 1));
      });
      let Ke = (G = Object.entries(Re).sort((Ye, Ae) => Ae[1] - Ye[1])[0]) == null ? void 0 : G[0];
      if (!Ke) {
        const Ye = new Date(le).toDateString();
        Ke = ((ue = N.find((Ae) => new Date(Ae.datetime).toDateString() === Ye)) == null ? void 0 : ue.condition) ?? "cloudy";
      }
      V.push({ cond: we && Ke === "sunny" ? "clear-night" : Ke, night: we });
    }
    return V;
  }
  function me(M, A, N) {
    const V = Ee(M, "hourly"), G = A.precipitation_probability != null ? tn(A.precipitation_probability, M.locale) + "%" : "", ue = A.precipitation ? tn(A.precipitation, M.locale) + " " + jo(M, V, "precipitation") : "";
    switch (N) {
      case "precipitation":
        return G ? [G, ue] : [ue || "–", ""];
      case "wind":
        return A.wind_speed != null ? [tn(Math.round(A.wind_speed), M.locale), jo(M, V, "wind_speed")] : ["–", ""];
      default:
        return [wn(M, A.temperature), (A.precipitation_probability ?? 0) >= 20 ? G : ""];
    }
  }
  function Ie(M) {
    Q = null;
    const A = de("hourly"), N = Math.floor(Date.now() / ba) * ba, V = A.filter((Ae) => new Date(Ae.datetime).getTime() > N - va);
    if (!V.length) return "";
    const G = sa(V), ue = G.includes(L.hourlyMode) ? L.hourlyMode : "temperature", ce = an(), we = ce.getTime() + Er * 24 * va, le = (N - ce.getTime()) / va * Ns, Me = Er * 24 * Ns, Re = (Ae) => (Ae - N) / va * Ns, Ke = [{ x: 0, label: Qe.now, entry: V[0] }, ...V.filter((Ae) => {
      const We = new Date(Ae.datetime);
      return Re(We.getTime()) >= 48 && We.getTime() < we && We.getHours() % hp === 0;
    }).map((Ae) => {
      const We = new Date(Ae.datetime);
      return { x: Re(We.getTime()), label: so(We, M), entry: Ae };
    })], Ye = (Ae, We, Se) => '<span class="wbMark' + (We === 0 ? " wbFirst" : "") + '" style="left:' + Ae.x + 'px">' + Se + "</span>";
    return Q = { segs: Ct(ce, A), seed: ce.getDate() }, '<div class="wbCard wbHc wbHourly"><div class="wbHeader"><h2 class="wbTitle">' + Be(Qe.nextHours) + "</h2></div>" + (G.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + G.map((Ae) => '<button aria-pressed="' + (Ae === ue) + '" data-wb="hourly-mode" data-mode="' + Ae + '" data-wb-focus="hourly-mode-' + Ae + '">' + Be(Qe.modes[Ae]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll"><div class="wbStrip" style="width:' + (Me - le) + 'px"><div class="wbRow wbTimes">' + Ke.map((Ae, We) => Ye(Ae, We, Be(Ae.label))).join("") + '</div><div class="wbSky"><div class="wbSkyArt" style="left:' + -le + "px;width:" + Me + 'px"><canvas data-wb-strip' + (c === "smooth" ? "" : ' class="wbPixels"') + '></canvas></div></div><div class="wbRow wbValues">' + Ke.map((Ae, We) => {
      if (!Ae.entry) return "";
      const [Se, Ge] = me(M, Ae.entry, ue);
      return Ye(Ae, We, '<span class="wbPrimaryV">' + Be(Se) + '</span><span class="wbSecondary">' + Be(Ge) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function Ne(M) {
    const A = W, { rise: N, set: V } = yd(M, A), G = N && V ? Math.round((V.getTime() - N.getTime()) / ba) : 0, ue = Math.floor(G / 60), ce = G % 60, we = N && V ? (A.getTime() - N.getTime()) / (V.getTime() - N.getTime()) : -1, le = we >= 0 && we <= 1, Me = Math.PI * (1 - Math.min(1, Math.max(0, we))), Re = 100 + 74 * Math.cos(Me), Ke = 100 - 74 * Math.sin(Me), Ye = le ? Math.sin(Math.PI * we) : 0, Ae = le ? Vo("#2e0a0d", "#43180a", Ye) : "#0e0507", We = le ? Vo("#7a1d12", "#8f400f", Ye) : "#1c0709", Se = Vo("#f60c08", "#ff8f00", Ye), Ge = Vo("#fd9b07", "#ffd84a", Ye), st = le ? Vo("#fd9b07", "#ffd84a", Ye) : "#6b3a2a", yt = (Ht) => Ht ? so(Ht, M) : "–", mt = N && V ? new Date((N.getTime() + V.getTime()) / 2) : null;
    return Da({
      icon: xn.sunny,
      name: Qe.sun,
      sub: G ? Yn(Qe.daylightShort, { hours: ue, minutes: ce }) : void 0,
      visual: '<div class="wbSunSky" style="background:linear-gradient(180deg, ' + Ae + ", " + We + ");--wb-sun-line:" + st + '"><svg viewBox="0 0 200 124" aria-hidden="true"><defs><radialGradient id="' + p + 'sun-glow"><stop offset="0" stop-color="' + Se + '"></stop><stop offset="0.45" stop-color="' + Se + '"></stop><stop offset="1" stop-color="' + Ge + '"></stop></radialGradient><clipPath id="' + p + 'above-horizon"><rect x="0" y="0" width="200" height="100"></rect></clipPath></defs><path class="wbSunPath" d="M 26 100 A 74 74 0 0 1 174 100"></path><line class="wbHorizon" x1="0" x2="200" y1="100" y2="100"></line>' + (le ? '<circle cx="' + Re + '" cy="' + Ke + '" r="14" fill="url(#' + p + 'sun-glow)" clip-path="url(#' + p + 'above-horizon)"></circle>' : "") + (mt ? '<text class="wbSunTime wbNoon" x="100" y="1">' + Be(yt(mt)) + "</text>" : "") + '<text class="wbSunTime" x="26" y="117">' + Be(yt(N)) + '</text><text class="wbSunTime" x="174" y="117">' + Be(yt(V)) + "</text></svg></div>"
    });
  }
  function on(M, A, N) {
    const V = (ce) => p + "moon-" + ce, G = M > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + V("terminator") + ')" d="' + am(61, 61, 57.9, M) + '"' + (A ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", ue = (ce, we, le, Me, Re, Ke) => '<filter id="' + V(ce) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + we + '" numOctaves="' + le + '" seed="' + Me + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Ye) => "<feFunc" + Ye + ' type="linear" slope="' + Re + '" intercept="' + Ke + '"></feFunc' + Ye + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + V("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + V("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + V("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + V("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + V("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + ue("mottle", "0.045", 4, 3, 1.8, -0.4) + ue("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + V("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + V("fill") + ')"></circle><g' + (N ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + V("soften") + ')">' + sm.map(([ce, we, le, Me, Re, Ke]) => '<ellipse cx="' + ce + '" cy="' + we + '" rx="' + le + '" ry="' + Me + '" fill-opacity="' + Ke + '" transform="rotate(' + Re + " " + ce + " " + we + ')"></ellipse>').join("") + "</g>" + lm.map(([ce, we, le]) => '<circle class="wbCrater" cx="' + ce + '" cy="' + we + '" r="' + le + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + V("glow") + ')">' + dm.map(([ce, we]) => '<line x1="54.4" y1="95" x2="' + ce + '" y2="' + we + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + V("glow") + ')">' + Ld.map(([ce, we, le]) => '<circle cx="' + ce + '" cy="' + we + '" r="' + le * 2 + '"></circle>').join("") + "</g>" + Ld.map(([ce, we, le]) => '<circle class="wbBrightCenter" cx="' + ce + '" cy="' + we + '" r="' + le + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + V("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + V("grain") + ')"></rect>' + G + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function oi(M) {
    const A = H, N = jr(M), V = (N == null ? void 0 : N.lat) ?? 0, G = Gp(A), ue = Cd(M), ce = ue ? M.states[ue] : void 0, we = Uo(ce) && Cp.includes(ce.state) ? ce.state : Up(G.phase), { rise: le, set: Me } = N ? jp(A, N.lat, N.lon) : {}, Re = G.phase > 0.5 != V < 0, Ke = tn(Math.round(G.fraction * 100), M.locale) + "%", Ye = le ?? Me, Ae = Ye ? so(Ye, M) : void 0;
    return Da({
      icon: xn.night,
      name: Qe.moon,
      sub: Qe.phases[we],
      visual: '<div class="wbMoonBox">' + on(G.fraction, Re, V < 0) + '</div><div class="wbScaleNote wbMoonCaption"><span>' + (Ae ? Be(Yn(le ? Qe.moonriseAt : Qe.moonsetAt, { time: Ae })) : "") + "</span><span>" + Be(Yn(Qe.lit, { illumination: Ke })) + "</span></div>"
    });
  }
  function ri(M, A) {
    var We;
    const N = In(M, A, "wind_speed");
    if (!N || !mn(N.value)) return "";
    const V = In(M, A, "wind_gust_speed"), G = In(M, A, "wind_bearing"), ue = G && mn(G.value) ? Number(G.value) : void 0, ce = Qp(Number(N.value), (We = N.stateObj.attributes) == null ? void 0 : We.wind_speed_unit), we = Wr(M, N.stateObj, "wind_speed", N.value), le = ue !== void 0 ? Qe.cardinal[Mp[((ue + 11.25) / 22.5 | 0) % 16]] : void 0, Me = V ? $p(M, V.stateObj, "wind_gust_speed", V.value) : void 0, Re = [le ? Yn(Qe.windFrom, { direction: le }) : void 0, ce !== void 0 ? ce + " " + Qe.beaufort : void 0].filter(Boolean).join(" · ") || Me, Ke = (Se, Ge) => {
      const st = (Se - 90) * Math.PI / 180;
      return [100 + Ge * Math.cos(st), 100 + Ge * Math.sin(st)];
    }, Ye = Array.from({ length: 36 }, (Se, Ge) => Ge * 10).map((Se) => {
      const Ge = Se % 90 === 0, [st, yt] = Ke(Se, 97), [mt, Ht] = Ke(Se, Ge ? 83 : 89);
      return '<line class="wbTick' + (Ge ? " wbMajor" : "") + '" x1="' + st + '" y1="' + yt + '" x2="' + mt + '" y2="' + Ht + '"></line>';
    }).join(""), Ae = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([Se, Ge]) => {
      const [st, yt] = Ke(Ge, 64);
      return '<text class="wbLetter' + (Se === "n" ? " wbNorth" : "") + '" x="' + st + '" y="' + yt + '">' + Be(Qe.cardinal[Se]) + "</text>";
    }).join("");
    return Da({ icon: xn.windy, name: Qe.wind, sub: Re, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Ye + Ae + (ue !== void 0 ? '<path class="wbMarker" transform="rotate(' + ue + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + Be(we.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + Be(we.unit) + "</text></svg>" });
  }
  function rn(M, A) {
    const N = In(M, A, "uv_index");
    if (!N || !mn(N.value)) return "";
    const V = Number(N.value), G = Qe.uvLevel[Jp(V)], ue = /* @__PURE__ */ new Date();
    ue.setHours(23, 59, 59, 999);
    const ce = de("hourly").filter((Se) => Se.uv_index != null && new Date(Se.datetime) > /* @__PURE__ */ new Date() && new Date(Se.datetime) <= ue).reduce((Se, Ge) => !Se || Ge.uv_index > Se.uv ? { uv: Ge.uv_index, time: new Date(Ge.datetime) } : Se, void 0), we = 48, le = 100, Me = 130, Re = (Se) => -we + Math.min(Se, 11) / 11 * 2 * we, Ke = (Se, Ge) => {
      const st = Se * Math.PI / 180;
      return [le + Ge * Math.sin(st), Me - Ge * Math.cos(st)];
    }, Ye = (Se, Ge, st) => {
      const [yt, mt] = Ke(Re(Se), st), [Ht, Ut] = Ke(Re(Ge), st);
      return "M " + yt + " " + mt + " A " + st + " " + st + " 0 0 1 " + Ht + " " + Ut;
    }, We = '<svg class="wbVu" viewBox="0 0 200 134" preserveAspectRatio="xMidYMax meet" aria-hidden="true">' + [[0, 3, Dr.low], [3, 6, Dr.moderate], [6, 8, Dr.high], [8, 11, Dr.very_high]].map(([Se, Ge, st]) => '<path class="wbVuZone" d="' + Ye(Se, Ge, 96) + '" style="stroke:' + st + '"></path>').join("") + Array.from({ length: 21 }, (Se, Ge) => ({ angle: -we + Ge * (2 * we / 20), major: Ge % 2 === 0 })).map(({ angle: Se, major: Ge }) => {
      const [st, yt] = Ke(Se, 102), [mt, Ht] = Ke(Se, Ge ? 114 : 108);
      return '<line class="wbVuTick' + (Ge ? " wbMajor" : "") + '" x1="' + st + '" y1="' + yt + '" x2="' + mt + '" y2="' + Ht + '"></line>';
    }).join("") + '<text class="wbVuLabel" x="100" y="70.1">UV</text><g class="wbVuNeedle" style="--wb-angle:' + Re(V) + 'deg"><line x1="' + le + '" y1="' + Me + '" x2="' + le + '" y2="' + (Me - 116) + '"></line></g><path class="wbVuHousing" d="M 64 134 L 64 128 A 36 36 0 0 1 136 128 L 136 134 Z"></path><text class="wbVuValue" x="100" y="114.9">' + Be(tn(Math.round(V), M.locale)) + "</text></svg>";
    return Da({
      icon: xn.sunnyAlert,
      name: Qe.metrics.uv_index,
      sub: ce && ce.uv > V ? Yn(Qe.uvPeak, { level: G, uv_index: tn(Math.round(ce.uv), M.locale), time: so(ce.time, M) }) : G,
      visual: We
    });
  }
  function rt(M) {
    const A = de("daily")[0], N = I.temperatureHistory;
    if (!A || new Date(A.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !mn(A.temperature) || !N || N.dailyHighs.length < wp) return "";
    const V = Number(A.temperature), G = N.dailyHighs.reduce((mt, Ht) => mt + Ht, 0) / N.dailyHighs.length, ue = Math.round(V - G) || 0, ce = ue > 0 ? "above" : ue < 0 ? "below" : "same", we = [...N.days, { date: /* @__PURE__ */ new Date(), high: V, today: !0 }], le = 220, Me = 158, Re = 22, Ke = 20, Ye = we.map((mt) => mt.high).concat(G), Ae = Math.min(...Ye) - 3, We = Math.max(...Ye) + 1, Se = (mt) => Re + (1 - (mt - Ae) / (We - Ae)) * (Me - Re - Ke), Ge = le / we.length, st = Math.min(18, Ge * 0.6), yt = '<svg class="wbCompareBars" viewBox="0 0 ' + le + " " + Me + '" aria-hidden="true"><line class="wbAvgLine" x1="0" x2="' + le + '" y1="' + Se(G) + '" y2="' + Se(G) + '"></line>' + we.map((mt, Ht) => {
      const Ut = Ht * Ge + Ge / 2, hn = Se(mt.high), ln = mt.today ? " wbToday" : "";
      return '<rect class="wbAvgBar' + ln + '" x="' + (Ut - st / 2) + '" y="' + hn + '" width="' + st + '" height="' + (Me - Ke - hn) + '" rx="5"></rect><text class="wbAvgValue' + ln + '" x="' + Ut + '" y="' + (hn - 6) + '">' + Be(wn(M, mt.high)) + '</text><text class="wbAvgDay' + ln + '" x="' + Ut + '" y="' + (Me - 4) + '">' + Be(Bp(mt.date, M)) + "</text>";
    }).join("") + "</svg>";
    return Da({
      icon: xn.chartLine,
      name: Qe.metrics.compared_to_average,
      double: !0,
      sub: Yn(Qe.highsLastDays, { days: N.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (ue > 0 ? "+" : "") + Be(wn(M, ue)) + '</div><div class="wbCompareWords">' + Be(Qe.average[ce]) + '</div><div class="wbCompareTemps">' + Be(Yn(Qe.todayVsAverage, { today: wn(M, V), average: wn(M, G) })) + "</div></div>" + yt + "</div>"
    });
  }
  function Cn(M, A) {
    const N = In(M, A, "humidity");
    if (!N || !mn(N.value)) return "";
    const V = In(M, A, "dew_point"), G = Math.max(0, Math.min(100, Number(N.value)));
    return Da({
      icon: xn.waterPercent,
      name: Qe.metrics.humidity,
      sub: V && mn(V.value) ? Yn(Qe.dewPoint, { dew_point: wn(M, V.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + G + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + Br(tn(Math.round(Number(N.value)), M.locale), "%") + "</div>"
    });
  }
  function fo(M, A) {
    var Me, Re;
    const N = In(M, A, "pressure");
    if (!N || !mn(N.value)) return "";
    const V = Number(N.value), G = (Me = N.stateObj.attributes) == null ? void 0 : Me.pressure_unit, ue = Md(V, G), ce = ((Re = I.pressureHistory) == null ? void 0 : Re.entityId) === N.stateObj.entity_id ? Md(I.pressureHistory.value, G) : void 0;
    let we;
    if (ue !== void 0 && ce !== void 0) {
      const Ke = ue - ce;
      we = Ke >= fd ? "rising" : Ke <= -fd ? "falling" : "steady";
    }
    const le = Wr(M, N.stateObj, "pressure", Math.round(V));
    return Da({
      icon: xn.gauge,
      name: Qe.metrics.pressure,
      sub: we ? Qe.pressure[we] : void 0,
      visual: '<div class="wbTapeRow"><div class="wbTapeValue">' + Br(le.number) + '<span class="wbTapeUnit">' + Be(le.unit) + "</span></div>" + (ue !== void 0 ? Sn(M, ue) : "") + "</div>"
    });
  }
  function Sn(M, A) {
    const G = Math.floor(A) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (ue, ce) => G + ce).map((ue) => {
      const ce = 100 - (ue - A) * 9;
      if (ce < 22 || ce > 178) return "";
      const we = ue % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(ce - 100) / 100) + '"><line class="wbTapeTick" x1="' + (we ? 2 : 8) + '" x2="26" y1="' + ce + '" y2="' + ce + '"></line>' + (we ? '<text class="wbTapeLabel" x="33" y="' + ce + '">' + Be(tn(ue, M.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + Be(Qe.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + Be(Qe.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function xa(M) {
    var le, Me;
    const A = Ps(M), N = A ? M.states[A] : void 0;
    if (!N || ((le = I.rain) == null ? void 0 : le.entityId) !== A || !mn(I.rain.change)) return "";
    const V = ((Me = N.attributes) == null ? void 0 : Me.unit_of_measurement) ?? "", G = Ee(M, "hourly"), ue = Date.now() + Si, ce = de("hourly").filter((Re) => Re.precipitation != null && new Date(Re.datetime).getTime() <= ue), we = ce.reduce((Re, Ke) => Re + Number(Ke.precipitation), 0);
    return Da({
      icon: xn.rainy,
      name: Qe.metrics.precipitation,
      sub: G && ce.length ? Yn(Qe.rainExpected, { amount: tn(we, M.locale, { maximumFractionDigits: 1 }) + " " + jo(M, G, "precipitation") }) : Qe.rainLast24h,
      visual: Br(tn(I.rain.change, M.locale, { maximumFractionDigits: 1 }), V) + (ce.length > 1 ? rm(ce.map((Re) => ({ label: "", value: Number(Re.precipitation) }))) : "")
    });
  }
  function xt(M, A) {
    const N = In(M, A, "visibility");
    if (!N) return "";
    const V = Wr(M, N.stateObj, "visibility", N.value);
    return Da({ icon: xn.eye, name: Qe.metrics.visibility, visual: Br(V.number, V.unit) });
  }
  function Rt(M) {
    I.categories === void 0 && K(M);
    const A = oe(M), N = (le) => le.map((Me) => M.states[Me]).filter(Uo), V = N(A.air), G = N(A.pollen);
    if (!V.length && !G.length) return "";
    const ue = [...V, ...G], ce = (le) => G.includes(le) ? xn.flower : xn.airFilter, we = ue.find((le) => le.entity_id === L.aq);
    return we ? Fe(M, we, ce(we)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + Be(Qe.airQuality) + '</h2></div><div class="wbAqTiles">' + ue.map((le) => '<button class="wbTile" data-wb="aq-open" data-entity="' + Be(le.entity_id) + '"><span class="wbChip">' + uo(ce(le)) + '</span><span class="wbText"><span class="wbName">' + Be(kd(M, le)) + '</span><span class="wbSub">' + Be(Nr(M, le)) + "</span></span></button>").join("") + "</div></div>";
  }
  function Fe(M, A, N) {
    var Re, Ke, Ye;
    const V = ((Re = A.attributes) == null ? void 0 : Re.unit_of_measurement) ?? "", G = ((Ke = A.attributes) == null ? void 0 : Ke.device_class) === "pm25" && V === hd && mn(A.state), ue = Number(A.state), ce = G ? Xp(ue) : void 0, we = ((Ye = I.aqHistory) == null ? void 0 : Ye.entityId) === A.entity_id ? I.aqHistory.points : void 0, le = (Ae) => Math.min(100, Math.max(0, Ae / Rr * 100));
    let Me;
    if (we && we.length > 1) Me = om(we, (Ae) => (tn(Ae, M.locale, { maximumFractionDigits: 1 }) + " " + V).trim());
    else if (ce) {
      let Ae = 0;
      const We = nc.map(([Se, Ge]) => {
        const st = le(Math.min(Ge, Rr)), yt = Sp[Se] + " " + Ae + "% " + st + "%";
        return Ae = st, yt;
      });
      Me = '<div class="wbScale" role="meter" aria-label="' + Be(Qe.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + Rr + '" aria-valuenow="' + ue + '" style="background:linear-gradient(to right, ' + We.join(", ") + ')"><i style="left:' + le(ue) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + Rr + " " + hd + "</span></div>";
    } else Me = '<span class="wbGraphNote"><span>' + Be(Nr(M, A)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + uo(N) + '</span><span class="wbText"><span class="wbName">' + Be(kd(M, A)) + '</span><span class="wbSub">' + Be(Nr(M, A)) + (ce ? " · " + Be(Qe.aqLevel[ce]) : "") + '</span></span><button class="wbBack" title="' + Be(Qe.back) + '" data-wb="aq-close">' + uo(xn.back) + '</button></div><div class="wbGraph">' + Me + "</div></div></div>";
  }
  const Ha = {
    current: nn,
    hourly: Ie,
    sun: Ne,
    moon: oi,
    wind: ri,
    uv_index: rn,
    compared_to_average: rt,
    humidity: Cn,
    pressure: fo,
    precipitation: xa,
    visibility: xt,
    air_quality: Rt
  };
  function Ot(M) {
    var Me, Re, Ke, Ye;
    const A = r == null ? void 0 : r();
    if (!A || Z) return;
    const N = X(A);
    ye(A, N), I.lastFetch || E();
    const V = oe(A), G = Cd(A), ue = Ps(A), ce = [
      ...N.map((Ae) => A.states[Ae]),
      A.states["sun.sun"],
      G && A.states[G],
      ue && A.states[ue],
      ...V.air.map((Ae) => A.states[Ae]),
      ...V.pollen.map((Ae) => A.states[Ae]),
      A.locale,
      A.config,
      A.entities,
      Math.floor(Date.now() / ba)
    ];
    if (!M && _ && ce.length === _.length && ce.every((Ae, We) => Ae === _[We])) return;
    _ = ce;
    const we = v.getRootNode(), le = we.activeElement || document.activeElement;
    for (const Ae of y) {
      const We = ae[Ae];
      let Se = "";
      try {
        Se = Ha[Ae](A, N) || "";
      } catch {
        Se = "";
      }
      if (Se === We.html) continue;
      const Ge = le && We.el.contains(le) ? (Me = le.dataset) == null ? void 0 : Me.wbFocus : void 0, st = We.el.querySelector(".wbStripScroll"), yt = st ? st.scrollLeft : 0;
      We.html = Se, We.el.hidden = !Se, We.el.innerHTML = Se, yt && ((Re = We.el.querySelector(".wbStripScroll")) == null || Re.scrollTo({ left: yt })), Ge && !O && ((Ke = We.el.querySelector('[data-wb-focus="' + Ge + '"]')) == null || Ke.focus());
    }
    O && ((Ye = v.querySelector('[data-wb-focus="' + O + '"]')) == null || Ye.focus(), O = null), Qt(performance.now());
  }
  function Hn() {
    J || Z || (J = !0, queueMicrotask(() => {
      J = !1, Ot(!0);
    }));
  }
  function pe() {
    const M = getComputedStyle(v), A = (ce) => M.getPropertyValue(ce).trim(), N = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([ce, we]) => {
      A(we) && (N[ce] = A(we));
    });
    const V = A("--color-text-primary") || "#f1f1f1", G = A("--color-bg-card") || "#222222", ue = !!v.closest(".light");
    return { colors: { ...Ia, ...N }, ink: ue ? V : G, paper: ue ? G : V };
  }
  const ze = (M, A) => {
    var N;
    M.width !== A.w && (M.width = A.w), M.height !== A.h && (M.height = A.h), (N = M.getContext("2d")) == null || N.putImageData(new ImageData(A.data, A.w, A.h), 0, 0);
  }, St = () => f && !Dp();
  function Kn(M, A) {
    const N = v.querySelector("canvas[data-wb-strip]");
    if (!N || !Q || !N.getClientRects().length) return;
    const V = N.clientWidth, G = N.clientHeight;
    if (!V || !G) return;
    const ue = { width: V, height: G, columns: Er, colors: A.colors, clock: M, ambient: St(), seed: Q.seed };
    if (c === "smooth") {
      const ce = Math.min(2, window.devicePixelRatio || 1), we = Math.round(V * ce), le = Math.round(G * ce);
      N.width !== we && (N.width = we), N.height !== le && (N.height = le);
      const Me = N.getContext("2d");
      if (!Me) return;
      Me.setTransform(ce, 0, 0, ce, 0, 0), ip(Me, Q.segs, ue);
    } else ze(N, ap(Q.segs, { ...ue, px: 2, oneBit: c === "onebit", ink: A.ink, paper: A.paper }));
  }
  function Qt(M) {
    if (Z) return;
    const A = pe();
    if (c !== "smooth") {
      const N = St();
      v.querySelectorAll("canvas[data-wb-wx]").forEach((V) => {
        V.getClientRects().length && ze(V, Gd(Us(V.dataset.wbWx, A.colors), { size: Number(V.dataset.size) || 40, px: 2, oneBit: c === "onebit", colors: A.colors, ink: A.ink, paper: A.paper, clock: M, idle: N }));
      });
    }
    Kn(M, A);
  }
  function Nt(M) {
    if (R = 0, !(Z || !St())) {
      if (!document.hidden)
        if (c === "smooth") Kn(M, pe());
        else {
          const A = Math.floor(M / 100);
          A !== q && (q = A, Qt(M));
        }
      R = requestAnimationFrame(Nt);
    }
  }
  function En() {
    v.classList.toggle("wbMotion", St()), !R && !Z && St() && (R = requestAnimationFrame(Nt));
  }
  function Wt(M) {
    var N, V;
    const A = (V = (N = M.target).closest) == null ? void 0 : V.call(N, "[data-wb]");
    if (!(!A || !v.contains(A))) {
      switch (A.dataset.wb) {
        case "day": {
          L.openDay = Number(A.dataset.index), L.opener = A.dataset.wbFocus, O = "back-day";
          const G = Ue()[L.openDay], ue = !I.todayHistory || I.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - I.todayHistory.fetched > fp;
          G && zo(new Date(G.datetime), /* @__PURE__ */ new Date()) && ue && ne();
          break;
        }
        case "close-day":
          L.openDay = void 0, O = L.opener, L.opener = void 0;
          break;
        case "day-mode":
          L.dayMode = A.dataset.mode;
          break;
        case "hourly-mode":
          L.hourlyMode = A.dataset.mode;
          break;
        case "aq-open":
          L.aq = A.dataset.entity, te(L.aq);
          break;
        case "aq-close":
          L.aq = void 0;
          break;
        default:
          return;
      }
      Ot(!0);
    }
  }
  function $n(M) {
    var A, N;
    M.key === "Escape" && L.openDay !== void 0 && ((N = (A = M.target).closest) != null && N.call(A, '[data-wb-open="day"]')) && (L.openDay = void 0, O = L.opener, L.opener = void 0, Ot(!0));
  }
  let Fn = null;
  function ya(M) {
    var N, V;
    const A = (V = (N = M.target).closest) == null ? void 0 : V.call(N, ".wbStripScroll");
    !A || M.button !== 0 || (Fn = { startX: M.pageX, left: A.scrollLeft, moved: !1 }, window.addEventListener("mousemove", It), window.addEventListener("mouseup", Dn, { once: !0 }));
  }
  function It(M) {
    const A = v.querySelector(".wbStripScroll");
    if (!Fn || !A) return;
    const N = M.pageX - Fn.startX;
    !Fn.moved && Math.abs(N) > 1 && (Fn.moved = !0, A.classList.add("wbDragging")), A.scrollLeft = Fn.left - N;
  }
  function Dn() {
    var M;
    Fn = null, window.removeEventListener("mousemove", It), (M = v.querySelector(".wbStripScroll")) == null || M.classList.remove("wbDragging");
  }
  v.addEventListener("click", Wt), v.addEventListener("keydown", $n), v.addEventListener("mousedown", ya);
  const Gt = typeof ResizeObserver == "function" ? new ResizeObserver(() => Qt(performance.now())) : null;
  Gt == null || Gt.observe(v);
  const sn = (la = window.matchMedia) == null ? void 0 : la.call(window, "(prefers-reduced-motion: reduce)"), Jn = () => {
    En(), Qt(performance.now());
  };
  (ka = sn == null ? void 0 : sn.addEventListener) == null || ka.call(sn, "change", Jn);
  const ho = [
    setInterval(() => {
      W = /* @__PURE__ */ new Date(), Ot(!0);
    }, xp),
    setInterval(() => {
      H = /* @__PURE__ */ new Date(), Ot(!0);
    }, yp),
    setInterval(E, vp)
  ];
  return Ot(!0), En(), {
    update() {
      Ot(!1);
    },
    setStyle(M) {
      !M || M === c || (c = M, Ot(!0), En());
    },
    destroy() {
      var M;
      Z = !0, ho.forEach(clearInterval), R && cancelAnimationFrame(R), R = 0, Gt == null || Gt.disconnect(), (M = sn == null ? void 0 : sn.removeEventListener) == null || M.call(sn, "change", Jn), Dn(), v.removeEventListener("click", Wt), v.removeEventListener("keydown", $n), v.removeEventListener("mousedown", ya), ["daily", "hourly"].forEach(h), v.remove();
    }
  };
}
const Yo = "#E1E1E1", Td = "#F7F4F0", Is = "#03a9f4", pt = 14, vt = 172;
let pm = 0;
const Bt = (n) => Math.round(n * 100) / 100, wa = (n, r, i) => Math.max(r, Math.min(i, n)), Pa = (n, r, i, c, f, p) => '<rect x="' + Bt(n) + '" y="' + Bt(r) + '" width="' + Bt(i) + '" height="' + Bt(c) + '" fill="' + f + '"' + (p != null ? ' opacity="' + p + '"' : "") + "/>", Hs = (n) => n.map((r, i) => (i ? "L" : "M") + Bt(r[0]) + " " + Bt(r[1])).join("");
function Fs(n) {
  const r = (n == null ? void 0 : n.attributes) || {};
  return r.device_class === "curtain" ? "curtain" : r.device_class === "blind" || r.current_tilt_position != null ? "venetian" : "blind";
}
const ai = [
  [2, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]],
  [6.5, ["#0B0F1C", "#2E7FD6", "#F2743B", "#F1B6C8", 0.95]],
  [9.5, ["#8FC4EC", "#4DA3E8", "#F4FAFF", "#2F7FCF", 0.7]],
  [13, ["#9ED3F6", "#3F97E6", "#FFFFFF", "#2B86D9", 0.65]],
  [17, ["#9FC2E4", "#4A8ED4", "#FFD9B8", "#5E8FD6", 0.75]],
  [19, ["#4B5E86", "#3B86E0", "#FF6A3D", "#B07CE8", 0.95]],
  [21.5, ["#1A2140", "#1F3F7A", "#B4506E", "#3E59A6", 0.8]],
  [26, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]]
];
function mm(n) {
  const r = n < 2 ? n + 24 : n;
  let i = ai[0], c = ai[ai.length - 1];
  for (let S = 0; S < ai.length - 1; S++) if (r >= ai[S][0] && r <= ai[S + 1][0]) {
    i = ai[S], c = ai[S + 1];
    break;
  }
  const f = (r - i[0]) / (c[0] - i[0]), p = f * f * (3 - 2 * f), v = (S, y) => {
    const B = parseInt(S.slice(1), 16), ae = parseInt(y.slice(1), 16);
    return "#" + [16, 8, 0].map((Z) => Math.round((B >> Z & 255) + ((ae >> Z & 255) - (B >> Z & 255)) * p).toString(16).padStart(2, "0")).join("");
  };
  return { top: v(i[1][0], c[1][0]), bot: v(i[1][1], c[1][1]), warm: v(i[1][2], c[1][2]), cool: v(i[1][3], c[1][3]), op: i[1][4] + (c[1][4] - i[1][4]) * p, t: r };
}
function fm(n) {
  const r = parseInt(n.slice(1), 16), i = (r >> 16 & 255) / 255, c = (r >> 8 & 255) / 255, f = (r & 255) / 255, p = Math.max(i, c, f), v = Math.min(i, c, f);
  let S = 0, y = 0;
  const B = (p + v) / 2;
  if (p !== v) {
    const ae = p - v;
    y = B > 0.5 ? ae / (2 - p - v) : ae / (p + v), S = (p === i ? (c - f) / ae + (c < f ? 6 : 0) : p === c ? (f - i) / ae + 2 : (i - c) / ae + 4) / 6;
  }
  return [S * 360, y * 100, B * 100];
}
function fc(n, r, i) {
  r = wa(r, 0, 100) / 100, i = wa(i, 0, 100) / 100;
  const c = (v) => (v + n / 30) % 12, f = r * Math.min(i, 1 - i), p = (v) => i - f * Math.max(-1, Math.min(c(v) - 3, Math.min(9 - c(v), 1)));
  return "#" + [p(0), p(8), p(4)].map((v) => Math.round(v * 255).toString(16).padStart(2, "0")).join("");
}
const [hc, gc, vc] = fm(Yo), Ad = fc(hc, gc, Math.max(6, vc - 14)), hm = fc(hc, gc, Math.min(96, vc + 16));
function gm(n, r, i, c, f) {
  const p = vt / 2, v = vt * 0.12, S = p - (p - v) * n, y = (q) => q ** 1.3, B = wa(i, -1.5, 1.5), ae = (q) => -(Math.abs(B) * 4.6 * q ** 1.5) * Math.sign(B), Z = n * 1.4, _ = (q, J) => {
    const O = Math.min(4.8, Math.abs(i) * 2.6) * (J ? 1 : -1) * Math.sign(i || 1), L = J ? q + S : q, I = J ? q : q + S, W = (Ee) => L + ae(Ee) + O * Math.sin(Ee * Math.PI * 1.2 + c) * y(Ee) * 1.4 + Z * Math.sin(Ee * Math.PI * 2 + c * 0.6) * y(Ee) * (J ? 1 : -1), H = [[I, pt]];
    for (let Ee = 0; Ee <= 12; Ee++) H.push([W(Ee / 12), pt + vt * Ee / 12]);
    H.push([I, pt + vt]);
    let Q = '<path d="' + Hs(H) + 'Z" fill="' + Yo + '"/>';
    if (f) return Q;
    const z = 1.35 + ((J ? i > 0 : i < 0) ? 0.35 : 0), F = (Ee) => {
      const h = Ee / 7, be = J ? 1 - h : h, ye = (1 - be) ** 1.3, He = q + S * h;
      return Array.from({ length: 13 }, (w, x) => {
        const k = x / 12;
        return [He + ae(k) * ye + O * z * Math.sin(k * Math.PI * 1.2 + c - be * 3.2) * y(k) * 1.4 * ye + Z * 1.6 * Math.sin(k * Math.PI * 2 + c * 0.6 - be * 2.5) * y(k) * n * (0.4 + 0.6 * ye), pt + vt * k];
      });
    }, de = [1, 2, 3, 4, 5, 6].map(F);
    for (let Ee = 0; Ee < 6; Ee += 2) Q += '<path d="' + Hs(de[Ee]) + Hs(de[Ee + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return Q;
  }, R = p - (p - v) * r;
  return { body: _(pt, !0) + _(pt + vt - S, !1), rails: [{ x: pt + R - 4, y: pt, w: 4, h: vt }, { x: pt + vt - R, y: pt, w: 4, h: vt }], head: 6.4 };
}
function vm(n, r, i) {
  const c = vt * (1 - n);
  let f = "";
  if (c > 1 && (f += Pa(pt, pt, vt, c, Yo), !i))
    for (let p = 1; p < 7; p += 2) f += Pa(pt + vt * p / 7, pt, vt / 7, c, "#fff");
  return { body: f, rails: [{ x: pt, y: pt + vt * (1 - r) - 7, w: vt, h: 11 }], head: 10.4 };
}
function bm(n, r, i, c) {
  const f = 9 - 7 * (i / 100), p = pt + vt * (1 - n), v = Math.ceil(vt / 10) + 1, S = pt + f / 2, y = (pt + vt - f / 2 - S) / (v - 1), B = 0.8, ae = 0.6, Z = Array.from({ length: v }, (q, J) => Math.max(S + J * ae, Math.min(S + J * y, p - f / 2 - (v - 1 - J) * ae))), _ = Z.slice(0, -1).map((q, J) => wa((Z[J + 1] - q - ae) / (y - ae), 0, 1));
  _.push(_[v - 2]);
  let R = "";
  return Z.forEach((q, J) => {
    const O = B + (f - B) * _[J], L = Math.max(0.5, O / 2), I = Math.max(0.4, O * 0.114);
    R += Pa(pt, q - L, vt, Math.max(1, O), Yo), !c && O > 2.2 && (R += Pa(pt, q + L - I, vt, I, Ad) + Pa(pt, q - L, vt, I * 0.55, hm, 0.75));
  }), c || [0.22, 0.78].forEach((q) => {
    R += Pa(pt + vt * q - 0.7, pt, 1.4, Math.max(0, Z[v - 1] + 1 - pt), Ad, 0.85);
  }), { body: R, rails: [{ x: pt, y: pt + vt * (1 - r) - 8, w: vt, h: 8 }], head: 8.8 };
}
const _d = (n, r, i, c, f, p, v) => n === "curtain" ? gm(r, i, f, p, v) : n === "venetian" ? bm(r, i, c, v) : vm(r, i, v);
function wm(n, r) {
  let i = "", c = "";
  return r.forEach((f) => {
    const p = f.w > f.h, v = wa(p ? pt + vt / 2 : f.x + f.w / 2, 17, 183), S = wa(p ? f.y + f.h / 2 : pt + vt / 2, 17, 183);
    i += p ? Pa(pt, wa(f.y + f.h / 2, pt, pt + vt) - 1, vt, 2, Is) : Pa(wa(f.x + f.w / 2, pt, pt + vt) - 1, pt, 2, vt, Is);
    const y = p ? "M" + Bt(v - 4) + " " + Bt(S - 3) + "l4 -3l4 3M" + Bt(v - 4) + " " + Bt(S + 3) + "l4 3l4 -3" : "M" + Bt(v - 3) + " " + Bt(S - 4) + "l-3 4l3 4M" + Bt(v + 3) + " " + Bt(S - 4) + "l3 4l-3 4";
    c += '<circle cx="' + Bt(v) + '" cy="' + Bt(S) + '" r="11" fill="' + Is + '" filter="url(#' + n + 's)"/><path d="' + y + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: i, knobs: c };
}
function xm(n, r) {
  const i = /* @__PURE__ */ new Date(), c = mm(i.getHours() + i.getMinutes() / 60), f = 42 + 18 * Math.sin(c.t * 0.5), p = c.t >= 5 && c.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (c.t - 5) / 15) : 80, v = _d(r.kind, r.pos / 100, r.bar / 100, r.tilt, r.vel, r.ph, !1), S = r.ghostAlpha > 4e-3 && r.ghost != null ? _d(r.kind, r.ghost / 100, r.ghost / 100, r.tilt, 0, 0, !0).body : "", y = r.grip > 4e-3 ? wm(n, v.rails) : null, B = (ae) => Pa(pt, pt, vt, vt, ae);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + n + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + n + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + c.top + '"/><stop offset="1" stop-color="' + c.bot + '"/></linearGradient><radialGradient id="' + n + 'w" cx="' + Bt(f) + '%" cy="' + Bt(p) + '%" r="58%"><stop offset="0" stop-color="' + c.warm + '" stop-opacity="' + Bt(c.op * 0.8) + '"/><stop offset="1" stop-color="' + c.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + n + 'k" cx="' + Bt(100 - f * 0.8) + '%" cy="' + Bt(100 - p * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + c.cool + '" stop-opacity="' + Bt(c.op * 0.64) + '"/><stop offset="1" stop-color="' + c.cool + '" stop-opacity="0"/></radialGradient><filter id="' + n + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + Td + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + n + 'c)">' + B("url(#" + n + "l)") + B("url(#" + n + "w)") + B("url(#" + n + "k)") + (S ? '<g opacity="' + Bt(r.ghostAlpha) + '">' + S + "</g>" : "") + v.body + '<rect x="14" y="14" width="172" height="' + v.head + '" fill="' + Yo + '" filter="url(#' + n + 's)"/></g>' + (y ? '<g clip-path="url(#' + n + 'c)" opacity="' + Bt(r.grip) + '">' + y.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + Td + '" stroke-width="3"/>' + (y ? '<g opacity="' + Bt(r.grip) + '">' + y.knobs + "</g>" : "") + "</svg>";
}
function ym({ onMove: n, onSet: r }) {
  var Q;
  const i = "cv" + ++pm, c = document.createElement("div");
  c.className = "tfCoverArt";
  const f = (Q = window.matchMedia) == null ? void 0 : Q.call(window, "(pointer: coarse)").matches;
  let p = null;
  const v = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let S = 0, y = !1, B = !1, ae = null, Z = 0, _ = 0;
  const R = () => (p == null ? void 0 : p.kind) === "curtain" ? "x" : "y", q = () => ae || y || B || p.moving || p.target != null ? 1 : f ? performance.now() < _ ? 1 : 0.4 : 0, J = () => {
    c.innerHTML = xm(i, { kind: p.kind, pos: v.pos, bar: p.target ?? v.pos, tilt: v.tilt, vel: v.vel, ph: v.ph, ghost: v.gpos, ghostAlpha: v.ghost, grip: v.grip });
  };
  function O(z) {
    S = 0;
    const F = v.last ? Math.min(0.064, (z - v.last) / 1e3) : 1 / 60, de = F * 60;
    v.last = z;
    const Ee = p.pos - v.pos, h = v.pos;
    v.pos += Math.sign(Ee) * Math.min(Math.abs(Ee), Math.max(10.5, Math.abs(Ee) * 1.4) * F), Math.abs(p.pos - v.pos) < 0.03 && (v.pos = p.pos), v.vel = v.vel * 0.86 + (v.pos - h) / de * 0.14, Math.abs(v.vel) < 0.015 && v.pos === p.pos && (v.vel = 0), (v.pos !== h || v.vel) && (v.ph += (0.06 + Math.abs(v.vel) * 0.03) * de);
    const be = p.tilt - v.tilt;
    v.tilt += Math.sign(be) * Math.min(Math.abs(be), Math.max(60, Math.abs(be) * 4) * F);
    const ye = q();
    v.grip += (ye - v.grip) * Math.min(1, F * (ye > v.grip ? 11 : 3.5)), Math.abs(ye - v.grip) < 0.01 && (v.grip = ye);
    const He = p.target != null && Math.abs(p.target - v.pos) > 0.5 ? 0.22 : 0;
    p.target != null && (v.gpos = p.target), v.ghost += (He - v.ghost) * Math.min(1, F * (He > v.ghost ? 16 : 3)), Math.abs(He - v.ghost) < 4e-3 && (v.ghost = He), J(), v.pos !== p.pos || v.vel || v.tilt !== p.tilt || v.grip !== ye || v.ghost !== He ? S = requestAnimationFrame(O) : v.last = 0;
  }
  const L = () => {
    p && !S && (S = requestAnimationFrame(O));
  }, I = setInterval(() => {
    p && !S && J();
  }, 60 * 1e3), W = (z) => {
    const F = c.getBoundingClientRect();
    return R() === "x" ? (z.clientX - F.left) / F.width : (z.clientY - F.top) / F.height;
  };
  c.addEventListener("pointerdown", (z) => {
    var Ee;
    if (!(p != null && p.canSet) || z.button > 0) return;
    z.preventDefault(), (Ee = c.setPointerCapture) == null || Ee.call(c, z.pointerId);
    const F = p.target ?? p.pos, de = c.getBoundingClientRect();
    ae = { p0: W(z), from: F, x0: z.clientX, value: null, side: null }, p.kind === "curtain" && F > 0 && (ae.side = (z.clientX - de.left) / de.width < 0.5 ? "L" : "R"), L();
  }), c.addEventListener("pointermove", (z) => {
    if (!ae) return;
    let F;
    if (p.kind === "curtain") {
      if (!ae.side) {
        const Ee = z.clientX - ae.x0;
        if (Math.abs(Ee) < 4) return;
        ae.side = Ee < 0 ? "L" : "R";
      }
      const de = (vt / 2 - vt * 0.12) / 200;
      F = ae.from + (ae.side === "L" ? -1 : 1) * ((W(z) - ae.p0) / de) * 100;
    } else F = ae.from - (W(z) - ae.p0) / (vt / 200) * 100;
    ae.value = wa(F, 0, 100), n(ae.value);
  });
  const H = () => {
    if (!ae) return;
    const z = ae.value;
    ae = null, z != null && r(Math.round(z)), L();
  };
  return c.addEventListener("pointerup", H), c.addEventListener("pointercancel", H), c.addEventListener("lostpointercapture", H), c.addEventListener("pointerenter", () => {
    y = !0, L();
  }), c.addEventListener("pointerleave", () => {
    y = !1, L();
  }), c.addEventListener("focus", () => {
    B = c.matches(":focus-visible"), L();
  }), c.addEventListener("blur", () => {
    B = !1, L();
  }), c.addEventListener("keydown", (z) => {
    if (!(p != null && p.canSet)) return;
    const F = Math.round(p.target ?? p.pos), de = z.shiftKey ? 10 : 1, Ee = { ArrowUp: F + de, ArrowRight: F + de, ArrowDown: F - de, ArrowLeft: F - de, PageUp: F + 25, PageDown: F - 25, Home: 0, End: 100 }[z.key];
    if (Ee == null) return;
    z.preventDefault();
    const h = wa(Ee, 0, 100);
    n(h), clearTimeout(Z), Z = setTimeout(() => r(h), 500);
  }), {
    el: c,
    update(z) {
      const F = !p;
      p = z, F && (v.pos = p.pos, v.tilt = p.tilt, _ = performance.now() + 1500, f && setTimeout(L, 1600)), c.classList.toggle("x", R() === "x"), c.classList.toggle("y", R() === "y"), p.canSet ? (c.tabIndex = 0, c.setAttribute("role", "slider"), c.setAttribute("aria-valuemin", "0"), c.setAttribute("aria-valuemax", "100"), c.setAttribute("aria-valuenow", String(Math.round(p.target ?? p.pos))), c.setAttribute("aria-orientation", R() === "x" ? "horizontal" : "vertical")) : c.setAttribute("role", "img"), c.setAttribute("aria-label", p.name + (p.canSet ? " position" : "")), c.setAttribute("aria-valuetext", p.text), L();
    },
    destroy() {
      cancelAnimationFrame(S), S = 0, clearInterval(I), clearTimeout(Z), c.remove();
    }
  };
}
const Ed = "move-assistant-density", lo = {
  get(n) {
    try {
      return localStorage.getItem(n);
    } catch {
      return null;
    }
  },
  set(n, r) {
    try {
      localStorage.setItem(n, r);
    } catch {
    }
  }
}, se = (n) => String(n ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]), Os = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', km = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', Pr = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, Dd = 1, Mm = 4, Rd = 16, Nd = 32, Cm = 128, Sm = 256, Bd = 16384, Lm = 1, Tm = 2, Pd = 4, Am = 8, _m = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, Em = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, Dm = { curtain: "curtains", blind: "blind", venetian: "blinds" }, Id = {
  light: { name: "Lights", icon: "mdi:lamps", colour: "#ffc107" },
  climate: { name: "Climate", icon: "mdi:home-thermometer", colour: "#ff5722" },
  security: { name: "Security", icon: "mdi:security", colour: "#607d8b" },
  media_players: { name: "Media players", icon: "mdi:multimedia", colour: "#2196f3" },
  maintenance: { name: "Maintenance", icon: "mdi:wrench", colour: "#9e9e9e" },
  weather: { name: "Weather", icon: "", colour: "" },
  energy: { name: "Energy", icon: "mdi:lightning-bolt", colour: "#ffc107" }
}, Rm = { "clear-night": "Clear, night", partlycloudy: "Partly cloudy", "lightning-rainy": "Lightning, rainy", "snowy-rainy": "Snowy, rainy", "windy-variant": "Windy, cloudy" }, Hd = "move_assistant_house", Fd = "move-assistant-house-used", Nm = ["switch", "fan", "input_boolean", "automation"], Od = "move-assistant-house-look", Bm = [["popup", "Popup"], ["sheet", "Sheet"]], Pm = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', Im = { art: "Drawing", bright: "Brightness", ct: "Warm to cool", hue: "Colour", blocks: "Position", tilt: "Tilt", buttons: "Open, stop and close", step: "Target", modes: "Modes", playback: "Playback", volume: "Volume", controls: "Buttons", rooms: "Rooms to clean" }, Hm = [["small", "Small"], ["half", "Half"], ["full", "Full"]], fn = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + n.map((r) => '<path d="' + r + '"/>').join("") + "</svg>", Wd = fn(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), Fm = fn(["M20 6L9 17L4 12"]), Om = fn(["M12 19V5", "M5 12L12 5L19 12"]), Wm = fn(["M12 5V19", "M19 12L12 19L5 12"]), qm = fn(["M15 18L9 12L15 6"]), zm = fn(["M9 18L15 12L9 6"]), Ir = fn(["M21 4H14", "M10 4H3", "M21 12H12", "M8 12H3", "M21 20H16", "M12 20H3", "M14 2V6", "M8 10V14", "M16 18V22"]), Vm = '<svg viewBox="0 0 24 24" aria-hidden="true">' + [[9, 6], [15, 6], [9, 12], [15, 12], [9, 18], [15, 18]].map(([n, r]) => '<circle cx="' + n + '" cy="' + r + '" r="1.6" fill="currentColor"/>').join("") + "</svg>", Ra = {
  temp: fn(["M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0Z"]),
  hum: fn(["M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0Z"]),
  lights: fn(["M9 18h6", "M10 22h4", "M12 2a7 7 0 0 0-4 12.74V17h8v-2.26A7 7 0 0 0 12 2Z"]),
  covers: fn(["M3 3h18", "M5 3v18c3-4 4-10 4-18", "M19 3v18c-3-4-4-10-4-18"]),
  climate: fn(["M2 8h20", "M2 19h20", "M5 5v17", "M9.5 5v17", "M14.5 5v17", "M19 5v17"]),
  humidifier: fn(["M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0Z", "M9 15a3 3 0 0 0 3 3"]),
  media: fn(["M3 6h18v12H3Z", "M8 21h8"]),
  plugs: fn(["M9 2v6", "M15 2v6", "M6 8h12v4a6 6 0 0 1-12 0Z", "M12 18v4"]),
  alert: fn(["M12 9v4", "M12 17h.01", "M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"])
}, jm = (n) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (n ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', Gm = 1, Um = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], Ym = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, Ws = ["hs", "xy", "rgb", "rgbw", "rgbww"], qd = ["door", "window", "garage_door", "opening"], Hr = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"];
function Zm(n, { config: r, getHass: i }) {
  var Ya, Ri;
  const c = (t) => n.getElementById(t), f = c("app"), v = String((r || {}).layout || "").toLowerCase().replace("_", "-") === "test-focus";
  let S = lo.get(Ed) === "1", y = {};
  const B = (t) => {
    var s;
    return (s = i()) == null ? void 0 : s.callWS(t);
  }, ae = (t, s, d) => B({ type: "call_service", domain: t, service: s, service_data: d }), Z = n.querySelector("#appearancePane .toggleList");
  Z && !c("densityToggle") && (Z.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), c("densityToggle").addEventListener("click", () => {
    S = !S, lo.set(Ed, S ? "1" : "0"), O();
  }));
  const _ = document.createElement("div");
  _.className = "densityBadge", _.setAttribute("aria-live", "polite"), _.hidden = !0, f.appendChild(_);
  let R = 0;
  function q() {
    if (!S) return;
    const t = c("homeView"), s = (P) => P.offsetParent !== null && !P.closest("[hidden]");
    t.querySelectorAll(":scope .card, :scope .tfAction").forEach((P) => {
      s(P) && (P.dataset.h = Math.round(P.getBoundingClientRect().height) + " px");
    });
    const d = [...t.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(s), m = window.innerHeight, g = d.filter((P) => {
      const T = P.getBoundingClientRect();
      return T.height > 0 && T.top >= 0 && T.bottom <= m + 0.5;
    }).length;
    _.hidden = !t.classList.contains("active"), _.innerHTML = "<b>" + g + "</b><small>of " + d.length + " readings on screen</small>";
  }
  const J = () => {
    S && requestAnimationFrame(q);
  };
  function O() {
    var t;
    f.classList.toggle("showDensity", S), (t = c("densityToggle")) == null || t.classList.toggle("on", S), _.hidden = !S, clearInterval(R), S && (R = setInterval(q, 1e3), q());
  }
  window.addEventListener("scroll", J, { capture: !0, passive: !0 }), window.addEventListener("resize", J, { passive: !0 });
  const L = n.querySelector("#homeView .grid");
  let I = null, W = null, H = null;
  const Q = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), F = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), Ee = /* @__PURE__ */ new Map();
  let h = { favourites: null }, be = {}, ye = {}, He = [], w = null;
  const x = (() => {
    try {
      return JSON.parse(lo.get(Fd)) || {};
    } catch {
      return {};
    }
  })();
  let k = /* @__PURE__ */ new Map(), E = !1, ne = 0;
  const te = /* @__PURE__ */ new Map(), K = (t) => {
    var s;
    return ((s = h.show) == null ? void 0 : s[t]) || {};
  }, X = (t) => (h.hidden || []).includes(t), oe = (t) => (h.hiddenAreas || []).includes(t);
  function Pe() {
    clearTimeout(ne), ne = setTimeout(() => Promise.resolve(B({ type: "frontend/set_user_data", key: Hd, value: h })).catch(() => {
    }), 400);
  }
  const Ue = (() => {
    var t;
    try {
      return { more: ((t = JSON.parse(lo.get(Od))) == null ? void 0 : t.more) === "sheet" ? "sheet" : "popup" };
    } catch {
      return { more: "popup" };
    }
  })(), Ft = () => {
    f.dataset.more = Ue.more, _i();
  };
  v && Z && !c("moreInfoChoice") && (c("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + Bm.map(([t, s]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Ue.more === t) + '" data-more-style="' + t + '">' + s + "</button>").join("") + "</div></div>"
  ), c("moreInfoChoice").addEventListener("click", (t) => {
    const s = t.target.closest("[data-more-style]");
    s && (Ue.more = s.dataset.moreStyle, lo.set(Od, JSON.stringify(Ue)), Ft(), c("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((d) => d.setAttribute("aria-pressed", String(d === s))));
  }));
  let lt = { rooms: [], vacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const nn = /* @__PURE__ */ new Map();
  let et = "";
  const At = v ? zu({ onChange: () => ta() }) : null;
  v && f.classList.add("house");
  const jt = Object.assign(document.createElement("div"), { className: "tfBento" });
  let _t = null, sa = !1;
  function an(t) {
    const s = Rn();
    f.classList.toggle("houseBento", !!s), s && (jt.isConnected || L.append(jt), jt.style.order = t, !_t && !sa && (_t = um(jt, { getHass: i, entityId: s, style: "bitmap" })));
  }
  const Ct = (t) => {
    var s;
    return ((s = y[t]) == null ? void 0 : s.attributes) || {};
  }, me = (t) => Ct(t).friendly_name || t, Ie = (t, s) => oo(t) || (Number(Ct(t).supported_features) & s) === s, Ne = (t) => {
    const s = String(t ?? "").replace(/_/g, " ");
    return s.charAt(0).toUpperCase() + s.slice(1);
  }, on = (t, s = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: s, maximumFractionDigits: s }), oi = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, ri = (t) => Ct(t).supported_color_modes || [], rn = (t) => {
    const s = ri(t);
    return s.length ? s.some((d) => d !== "onoff") : Ct(t).brightness != null;
  }, rt = (t) => [Ct(t).min_color_temp_kelvin || 2e3, Ct(t).max_color_temp_kelvin || 6500], Cn = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function fo(t) {
    const s = Math.max(1, Math.round((Date.now() - t) / 1e3));
    if (s < 10) return "Just now";
    if (s < 60) return s + " seconds ago";
    const d = Math.round(s / 60);
    if (d < 60) return d + (d === 1 ? " minute ago" : " minutes ago");
    const m = Math.round(d / 60);
    if (m < 24) return m + (m === 1 ? " hour ago" : " hours ago");
    const g = Math.round(m / 24);
    return g + (g === 1 ? " day ago" : " days ago");
  }
  const Sn = (t) => {
    var s;
    return Ct(t).current_position ?? (((s = y[t]) == null ? void 0 : s.state) === "closed" ? 0 : 100);
  }, xa = (t) => {
    var s;
    return we("pos", t, ((s = F.get(t)) == null ? void 0 : s.pos) ?? Sn(t));
  }, xt = (t) => {
    var s;
    return we("tilt", t, ((s = F.get(t)) == null ? void 0 : s.tilt) ?? Ct(t).current_tilt_position);
  };
  function Rt(t) {
    var T;
    const s = y[t];
    if (!s) return "Not found";
    if (s.state === "unavailable") return "Unavailable";
    const d = s.attributes, m = t.split(".")[0];
    if (m === "light") {
      if (s.state !== "on") return "Off";
      const U = d.color_temp_kelvin;
      return (rn(t) ? oi(s) + "%" : "On") + (d.color_mode === "color_temp" && U ? " · " + Number(U).toLocaleString() + "k" : Ws.includes(d.color_mode) ? " · Colour" : "");
    }
    if (m === "climate") return (s.state === "off" ? "Off" : Ne(d.hvac_action || s.state)) + " · " + on(d.current_temperature) + " °C now";
    if (m === "cover") {
      const U = Sn(t), re = d.current_tilt_position;
      return s.state === "opening" || s.state === "closing" ? Ne(s.state) + " - " + U + "%" : (U <= 0 ? "Closed" : U >= 100 ? "Open" : "Partially open") + (re > 0 && re < 100 ? " · tilted" : "");
    }
    if (m === "humidifier") return s.state !== "on" ? "Off" : Ne(d.action || "on") + " · " + d.current_humidity + "% now";
    if (m === "vacuum") return Ne(s.state) + (s.state === "cleaning" && ((T = d.rooms) != null && T.length) ? " · " + d.rooms.join(", ") : "") + (d.battery_level != null ? " · " + d.battery_level + "%" : "");
    if (m === "media_player") return s.state === "playing" || s.state === "paused" ? (s.state === "paused" ? "Paused · " : "") + (d.media_title || "Playing") : Ne(s.state);
    if (m === "alarm_control_panel") return Ym[s.state] || Ne(s.state);
    if (m === "lock" || m === "valve") return Ne(s.state);
    if (m === "switch") return s.state === "on" ? "On" : "Off";
    if (m === "plant") return s.state === "ok" ? "Healthy" : Ne(d.problem);
    if (m === "binary_sensor")
      return d.device_class === "moisture" ? s.state === "on" ? "Wet" : "Dry" : qd.includes(d.device_class) ? s.state === "on" ? "Open" : "Closed" : s.state === "on" ? "Detected" : "Clear";
    if (d.rang) return "Rang at " + Cn(d.rang);
    const g = i();
    if (g != null && g.formatEntityState && !oo(t))
      try {
        return g.formatEntityState(s);
      } catch {
      }
    const P = Number(s.state);
    if (s.state !== "" && Number.isFinite(P)) {
      const U = Math.abs(P) >= 100 ? 0 : Math.abs(P) >= 10 ? 1 : 2, re = d.unit_of_measurement ? d.unit_of_measurement === "%" ? "%" : " " + d.unit_of_measurement : "";
      return P.toLocaleString(void 0, { maximumFractionDigits: U }) + re + (d.plant_low ? " · Low" : d.plant_high ? " · High" : "");
    }
    return Ne(s.state);
  }
  const Fe = (t) => t >= 1e3 ? on(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W";
  function Ha(t) {
    const s = i();
    t.querySelectorAll("[data-icon-for]").forEach((d) => {
      var P;
      const m = y[d.dataset.iconFor], g = d.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && m && !g) {
        let T = d.firstElementChild;
        (!T || T.localName !== "ha-state-icon") && (d.textContent = "", T = document.createElement("ha-state-icon"), d.appendChild(T)), T.hass = s, T.stateObj = m;
      } else if (customElements.get("ha-icon")) {
        let T = d.firstElementChild;
        (!T || T.localName !== "ha-icon") && (d.textContent = "", T = document.createElement("ha-icon"), d.appendChild(T)), T.icon = g || ((P = m == null ? void 0 : m.attributes) == null ? void 0 : P.icon) || "mdi:circle-medium";
      } else d.textContent || (d.textContent = (d.dataset.letter || me(d.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    });
  }
  const Ot = (t, s, d) => ' data-icon-for="' + se(t) + '"' + (s ? ' data-icon-name="' + se(s) + '"' : "") + (d ? ' data-letter="' + se(d) + '"' : ""), Hn = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : Ct(t).rang ? "mdi:doorbell" : "", pe = (t, s, d, m) => se([t, s, d, m ? JSON.stringify(m) : ""].join("|")), ze = (t) => se(JSON.stringify(t));
  function St(t, s) {
    var T, U;
    const d = se(me(s) + ", " + Rt(s)), m = Number.isFinite(Number((T = y[s]) == null ? void 0 : T.state)) && ((U = y[s]) == null ? void 0 : U.state) !== "", g = m && !E, P = m && K(s).graph;
    return '<div class="activityRow' + (P ? " tfGraphRow" : "") + (g ? ' tap" role="button" tabindex="0" data-open="' + se(t + "|" + s) + '" aria-label="' + d + '. Show the last 24 hours"' : '" aria-label="' + d + '"') + '><div class="tfIcon" aria-hidden="true"' + Ot(s, Hn(s)) + '></div><div><div class="activityRowName">' + se(me(s)) + '</div><div class="activityRowMeta">' + se(Rt(s)) + "</div></div>" + (E && m ? G('data-tile-opts="' + se(s) + '"', me(s) + " options", Ir) : "") + (P ? '<svg class="tfSpark" data-spark="' + se(s) + '" role="img" aria-label="' + se(me(s)) + ', last 24 hours"></svg>' : "") + "</div>";
  }
  const Kn = (t, s, d) => '<div class="activityRow" aria-label="' + se(t + ", " + s) + '"><div class="tfIcon" aria-hidden="true"' + Ot("", d, t) + '></div><div><div class="activityRowName">' + se(t) + '</div><div class="activityRowMeta">' + se(s) + "</div></div></div>";
  function Qt(t) {
    var d;
    const s = ((d = y[t]) == null ? void 0 : d.state) === "on";
    return '<div class="activityRow tfPlug' + (s ? " on" : "") + '"><button class="tfIcon" type="button" data-act="' + pe("switch", "toggle", t) + '" aria-label="Turn ' + se(me(t)) + (s ? " off" : " on") + '"' + Ot(t) + '></button><div><div class="activityRowName">' + se(me(t)) + '</div><div class="activityRowMeta">' + se(Rt(t)) + "</div></div></div>";
  }
  function Nt(t) {
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + Ot(t, Hn(t)) + '></div><div><div class="activityRowName">' + se(me(t)) + '</div><div class="activityRowMeta">' + se(Rt(t)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + se(me(t)) + '’s last 24 hours">' + Os + '</button></div><svg class="tfGraph" data-graph="' + se(t) + '" role="img" aria-label="' + se(me(t)) + ', last 24 hours"></svg></div>';
  }
  function En(t, s, d, m, g = "", P = null) {
    const T = I && I.key === t;
    return '<section class="card tfCard' + (T ? " open" : "") + '" data-tf data-k="' + se(t) + '" style="order:' + s + (T && I.h ? ";min-height:" + I.h + "px" : "") + '" aria-label="' + se(d) + '"><div class="activityHeader">' + (P ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + se(P) + '" aria-label="' + se(d + ", " + Rt(P) + ". More info") + '">' + se(d) + "</button>" : '<div class="activityTitle">' + se(d) + "</div>") + "</div>" + (T ? Nt(I.id) : '<div class="activityRows">' + m.join("") + "</div>" + g) + "</section>";
  }
  function Wt(t, s) {
    const d = "readings:" + t.id, m = t.readings.map((g) => St(d, g));
    return t.power != null && m.push(Kn("Power now", Fe(t.power), "mdi:flash")), En(d, s, "Readings", m.concat(t.plugs.map(Qt)));
  }
  function $n(t, s) {
    var U;
    const d = "energy:" + t.id, [m, g] = [t.solar.find((re) => re.endsWith("_power")), t.solar.find((re) => re.endsWith("_today"))], P = [m, g].filter(Boolean).map((re) => St(d, re)), T = Number(((U = y[m]) == null ? void 0 : U.state) || 0) * 1e3;
    return lt.grid && (P.push(St(d, lt.grid)), P.push(Kn("House use", Fe(T + Number(y[lt.grid].state)), "mdi:home-lightning-bolt"))), En(d, s, "Energy", P, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const Fn = (t, s) => En("plant:" + t.id, s, me(t.id), t.readings.map((d) => St("plant:" + t.id, d)), "", t.id), ya = (t) => En("openings", t, "Doors and windows", lt.security.openings.map((s) => St("openings", s)));
  function It(t, s, d, m, g, P) {
    const T = d == null ? null : Math.max(0, Math.min(1, d)), U = T == null ? 0 : Math.round(T * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + se(m) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + U + '"' + (g ? ' aria-valuetext="' + se(g) + '"' : "") + ' data-drag="' + se(t + "|" + s) + '">' + (P ? T == null ? "" : '<b style="left:' + U + '%"></b>' : '<i style="width:' + U + '%"></i>') + "</div>";
  }
  const Dn = (t, s, d, m) => '<div class="tfStep" role="group" aria-label="' + se(t) + '"><button type="button" data-act="' + d + '" aria-label="Lower ' + se(t.toLowerCase()) + '">−</button><output>' + se(s) + '</output><button type="button" data-act="' + m + '" aria-label="Raise ' + se(t.toLowerCase()) + '">+</button></div>', Gt = (t, s, d) => '<div class="' + t + '" role="group" aria-label="' + se(s) + '">' + d.filter(Boolean).map((m) => '<button type="button" data-act="' + m.act + '"' + (m.pressed != null ? ' aria-pressed="' + m.pressed + '"' : "") + (m.disabled ? " disabled" : "") + (m.aria ? ' aria-label="' + se(m.aria) + '"' : "") + ">" + (m.html || se(m.label)) + "</button>").join("") + "</div>", sn = (t, s) => "width:" + Math.round(Math.max(0, Math.min(1, (t - s * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * s / 3).toFixed(2), Jn = (t) => "left:calc(3px + " + t / 100 + " * (100% - 6px))", ho = (t, s) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + se(me(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(s) + '" aria-valuetext="' + Math.round(s) + '% open" data-blocks="' + se(t) + '">' + [0, 1, 2, 3].map((d) => '<span><i style="' + sn(s, d) + '"></i><b' + (s >= (d + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (d + 1) * 25 + "%</b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + Jn(s) + '">' + Math.round(s) + "%</output></div>";
  function la(t, s) {
    t.querySelectorAll(":scope>span").forEach((m, g) => {
      m.firstElementChild.setAttribute("style", sn(s, g)), m.lastElementChild.classList.toggle("lit", s >= (g + 1) * 25 - 12);
    });
    const d = t.querySelector(".tfTip");
    d.setAttribute("style", Jn(s)), d.textContent = Math.round(s) + "%", t.setAttribute("aria-valuenow", String(Math.round(s))), t.setAttribute("aria-valuetext", Math.round(s) + "% open");
  }
  const ka = (t, s) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + se(me(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(s) + '" aria-valuetext="' + Math.round(s) + '% open" data-drag="tilt|' + se(t) + '"><i style="width:calc((100% - 6px) * ' + s / 100 + ')"></i><span' + (s > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (s > 92 ? ' class="lit"' : "") + ">Open</span></div>", M = (t, s, d) => '<div class="tfCoverBtns" role="group" aria-label="' + se(me(t)) + '">' + [
    Ie(t, Lm) && ["open", "Open", "open_cover", s >= 100 && !d],
    Ie(t, Am) && ["stop", "Stop", "stop_cover", !1],
    Ie(t, Tm) && ["close", "Close", "close_cover", s <= 0 && !d]
  ].filter(Boolean).map(([m, g, P, T]) => '<button type="button" data-act="' + pe("cover", P, t) + '" aria-label="' + g + '"' + (T ? " disabled" : "") + ">" + _m[m] + "</button>").join("") + "</div>", A = (t, s) => '<button class="tfIcon' + (s.art ? " art" : "") + '" type="button" data-act="' + s.button.act + '" aria-label="' + se(s.button.label) + '"' + (s.art ? ' style="background-image:url(&quot;' + se(s.art) + '&quot;)"' : Ot(t, s.icon)) + "></button>", N = (t) => '<button class="tfName" type="button" data-more="' + se(t) + '" aria-label="' + se(me(t) + ", " + Rt(t) + ". More info") + '"><span class="activityRowName">' + se(me(t)) + '</span><span class="activityRowMeta">' + se(Rt(t)) + "</span></button>";
  function V(t) {
    const s = le(t), d = K(t), m = d.size || "half", g = d.hide || [], P = m === "small" ? [] : s.sections.map((re, _e) => re && !g.includes((s.parts || [])[_e]) ? re : "").filter(Boolean), T = m !== "small" && d.art && t.startsWith("cover.") ? '<div data-cover-art="' + se(t) + '" data-art-key="tile:' + se(t) + '"></div>' : "", U = '<div class="tfActionHead">' + A(t, s) + N(t) + "</div>" + T + P.join("");
    return '<div class="tfAction' + (s.on ? " on" : "") + (m !== "half" ? " " + m : "") + (X(t) ? " isHidden" : "") + '" data-k="' + se(t) + '"' + (s.tone ? ' data-tone="' + s.tone + '"' : "") + ">" + (E ? ue(t) + '<div class="tfEditBody" inert>' + U + "</div>" : U) + "</div>";
  }
  const G = (t, s, d, m) => '<button class="tfTool" type="button" ' + t + ' aria-label="' + se(s) + '"' + (m ? " disabled" : "") + ">" + d + "</button>", ue = (t) => '<div class="tfEditBar"><span class="tfTool tfGrip" data-drag-tile="' + se(t) + '" aria-hidden="true">' + Vm + '</span><span class="tfSpacer"></span>' + G('data-tile-move="' + se(t) + '|-1"', "Move " + me(t) + " earlier", qm) + G('data-tile-move="' + se(t) + '|1"', "Move " + me(t) + " later", zm) + G('data-tile-opts="' + se(t) + '"', me(t) + " options", Ir) + "</div>" + (X(t) ? '<span class="tfHiddenTag">Hidden</span>' : "");
  function ce(t) {
    const s = le(t), d = (s.parts || []).filter((m, g) => s.sections[g]);
    return t.startsWith("cover.") ? ["art", ...d] : d;
  }
  const we = (t, s, d) => z.has(t + "|" + s) ? z.get(t + "|" + s) : d;
  function le(t) {
    var P;
    const s = y[t], d = s.attributes, m = t.split(".")[0], g = (T, U) => ({ act: pe(T, "toggle", t), label: U });
    if (m === "light") {
      const T = s.state === "on", U = ri(t), [re, _e] = rt(t), ie = we("bright", t, oi(s)), Le = we("ct", t, T && d.color_mode === "color_temp" ? d.color_temp_kelvin : null), ut = we("hue", t, T && Ws.includes(d.color_mode) && d.hs_color ? d.hs_color[0] : null);
      return { on: T, button: g("light", "Turn " + me(t) + (T ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        rn(t) && It("bright", t, ie / 100, me(t) + " brightness", ie + "%"),
        U.includes("color_temp") && It("ct", t, Le == null ? null : (Le - re) / (_e - re), me(t) + " warm to cool", Le == null ? "" : Math.round(Le) + " kelvin", !0),
        U.some((tt) => Ws.includes(tt)) && It("hue", t, ut == null ? null : ut / 360, me(t) + " colour", "", !0)
      ] };
    }
    if (m === "climate") {
      const T = d.target_temp_step || 0.5, U = Number(d.temperature);
      return { on: s.state !== "off", tone: s.state === "cool" || d.hvac_action === "cooling" ? "cool" : "heat", button: g("climate", "Turn " + me(t) + (s.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(U) && Dn("Target temperature", on(U) + " °C", pe("climate", "set_temperature", t, { temperature: U - T }), pe("climate", "set_temperature", t, { temperature: U + T })),
        Gt("tfSeg", "Mode", (d.hvac_modes || []).map((re) => ({ label: Ne(re), act: pe("climate", "set_hvac_mode", t, { hvac_mode: re }), pressed: s.state === re })))
      ] };
    }
    if (m === "cover") {
      const T = s.state === "opening" || s.state === "closing", U = s.state === "closed", re = xa(t), _e = xt(t);
      return { on: !U, tone: "blue", icon: Em[Fs(s)][U ? 1 : 0], button: g("cover", (U ? "Open " : "Close ") + me(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        Ie(t, Pd) && ho(t, re),
        _e != null && ka(t, _e),
        M(t, re, T)
      ] };
    }
    if (m === "humidifier") {
      const T = Number(d.humidity);
      return { on: s.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: g("humidifier", "Turn " + me(t) + (s.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(T) && Dn("Target humidity", T + "%", pe("humidifier", "set_humidity", t, { humidity: T - 1 }), pe("humidifier", "set_humidity", t, { humidity: T + 1 })),
        ((P = d.available_modes) == null ? void 0 : P.length) && Gt("tfSeg", "Mode", d.available_modes.map((U) => ({ label: Ne(U), act: pe("humidifier", "set_mode", t, { mode: U }), pressed: d.mode === U })))
      ] };
    }
    if (m === "media_player") {
      const T = s.state === "playing", U = s.state === "off" || s.state === "standby", re = we("vol", t, d.volume_level), _e = U ? { act: pe("media_player", Ie(t, Cm) ? "turn_on" : "toggle", t), label: "Turn " + me(t) + " on" } : s.state === "playing" || s.state === "paused" ? { act: pe("media_player", "media_play_pause", t), label: (T ? "Pause " : "Play ") + me(t) } : { act: pe("media_player", Ie(t, Sm) ? "turn_off" : "toggle", t), label: "Turn " + me(t) + " off" };
      return { on: !U, tone: "blue", art: !U && d.entity_picture ? d.entity_picture : null, button: _e, parts: ["playback", "volume"], sections: U ? [] : [
        (Ie(t, Rd) || Ie(t, Nd) || Ie(t, Dd) || Ie(t, Bd)) && Gt("tfSeg", "Playback", [
          { html: Pr.prev, aria: "Previous", act: pe("media_player", "media_previous_track", t), disabled: !Ie(t, Rd) },
          { html: T ? Pr.pause : Pr.play, aria: T ? "Pause" : "Play", act: pe("media_player", "media_play_pause", t), disabled: !(Ie(t, Dd) || Ie(t, Bd)) },
          { html: Pr.next, aria: "Next", act: pe("media_player", "media_next_track", t), disabled: !Ie(t, Nd) }
        ]),
        Ie(t, Mm) && re != null && It("vol", t, re, me(t) + " volume", Math.round(re * 100) + "%")
      ] };
    }
    if (m === "vacuum") {
      const T = s.state === "cleaning", U = d.rooms || [], re = (ie) => U.includes(ie) ? U.filter((Le) => Le !== ie) : U.concat(ie), _e = pe("vacuum", T ? "pause" : "start", t, oo(t) ? { rooms: U } : null);
      return { on: T || s.state === "returning", tone: "blue", button: { act: _e, label: (T ? "Pause " : "Start ") + me(t) }, parts: ["controls", "rooms"], sections: [
        Gt("tfSeg", me(t), [
          { label: T ? "Pause" : "Start", act: _e },
          { label: "Dock", act: pe("vacuum", "return_to_base", t), disabled: s.state === "docked" },
          { label: "Locate", act: pe("vacuum", "locate", t) }
        ]),
        oo(t) && Gt("tfChips", "Rooms to clean", lt.rooms.filter((ie) => ie.id !== "balcony").map((ie) => ({ label: ie.name, act: pe("vacuum", "set_rooms", t, { rooms: re(ie.name) }), pressed: U.includes(ie.name) })))
      ] };
    }
    if (m === "lock") {
      const T = s.state === "locked";
      return { on: !T, tone: "heat", button: { act: pe("lock", T ? "unlock" : "lock", t), label: (T ? "Unlock " : "Lock ") + me(t) }, parts: ["controls"], sections: [
        Gt("tfSeg", me(t), [
          { label: "Lock", act: pe("lock", "lock", t), pressed: T },
          { label: "Unlock", act: pe("lock", "unlock", t), pressed: s.state === "unlocked" },
          Ie(t, Gm) && { label: "Open", act: pe("lock", "open", t), pressed: s.state === "open" }
        ])
      ] };
    }
    if (m === "alarm_control_panel") {
      const T = s.state === "disarmed";
      return { on: !T, tone: s.state === "triggered" ? "alarm" : "blue", button: { act: pe("alarm_control_panel", T ? "alarm_arm_away" : "alarm_disarm", t), label: T ? "Arm " + me(t) + ", away" : "Disarm " + me(t) }, parts: ["controls"], sections: [
        Gt("tfSeg", me(t), Um.filter(([, , , U]) => !U || Ie(t, U)).map(([U, re, _e]) => ({ label: re, act: pe("alarm_control_panel", _e, t), pressed: s.state === U })))
      ] };
    }
    if (m === "valve") {
      const T = s.state === "open";
      return { on: T, tone: "blue", icon: "mdi:sprinkler-variant", button: g("valve", (T ? "Close " : "Open ") + me(t)), parts: ["controls"], sections: [
        Gt("tfSeg", me(t), [
          { label: "Open", act: pe("valve", "open_valve", t), pressed: T },
          { label: "Close", act: pe("valve", "close_valve", t), pressed: !T }
        ])
      ] };
    }
    return { on: !1, button: { act: "", label: me(t) }, sections: [] };
  }
  const Me = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : on(t)) + "°";
  function Re(t) {
    const s = (ge) => t.readings.find((qe) => Ct(qe).device_class === ge), d = s("temperature"), m = s("humidity"), g = (ge) => {
      var qe;
      return Number((qe = y[ge]) == null ? void 0 : qe.state);
    }, P = (ge) => t.actions.filter((qe) => ge.test(qe)), T = t.lights.filter((ge) => {
      var qe;
      return ((qe = y[ge]) == null ? void 0 : qe.state) === "on";
    }), U = P(/^cover\./), re = U.filter((ge) => {
      var qe;
      return ((qe = y[ge]) == null ? void 0 : qe.state) !== "closed";
    }), _e = [...new Set(U.map((ge) => Fs(y[ge])))], ie = P(/^climate\./)[0], Le = P(/^humidifier\./)[0], ut = P(/^media_player\./), tt = ut.find((ge) => {
      var qe;
      return ((qe = y[ge]) == null ? void 0 : qe.state) === "playing";
    }) || ut.find((ge) => {
      var qe;
      return ((qe = y[ge]) == null ? void 0 : qe.state) === "paused";
    }), Ve = t.plugs.filter((ge) => {
      var qe;
      return ((qe = y[ge]) == null ? void 0 : qe.state) === "on";
    }), ke = [];
    if (d && Number.isFinite(g(d)) && ke.push({ key: "temp", id: d, kind: "reading", icon: Ra.temp, label: "Temperature", value: on(g(d)) + "°" }), m && Number.isFinite(g(m)) && ke.push({ key: "hum", id: m, kind: "reading", icon: Ra.hum, label: "Humidity", value: Math.round(g(m)) + "%" }), t.lights.length && ke.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: Ra.lights,
      label: "Lights",
      value: T.length ? T.length + " of " + t.lights.length + " on" : "All off",
      short: T.length ? T.length + " on" : "Off",
      on: T.length > 0,
      acts: t.lights.map((ge) => ["light", T.length ? "turn_off" : "turn_on", ge]),
      aria: (T.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), U.length) {
      const ge = _e.length === 1 ? Dm[_e[0]] : "covers", qe = Math.round(U.reduce((ft, fa) => ft + Sn(fa), 0) / U.length);
      ke.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        icon: Ra.covers,
        label: Ne(ge),
        value: qe <= 0 ? "Closed" : qe >= 100 ? "Open" : qe + "% open",
        short: qe <= 0 ? "Closed" : qe + "%",
        on: re.length > 0,
        acts: U.map((ft) => ["cover", re.length ? "close_cover" : "open_cover", ft]),
        aria: (re.length ? "Close the " : "Open the ") + ge + " in " + t.name
      });
    }
    if (ie) {
      const ge = Ct(ie), qe = y[ie].state === "off";
      ke.push({
        key: "climate",
        kind: "control",
        tone: ge.hvac_action === "cooling" ? "cool" : "heat",
        icon: Ra.climate,
        label: me(ie),
        value: qe ? "Off" : Ne(ge.hvac_action || y[ie].state) + " · " + Me(ge.temperature),
        short: qe ? "Off" : Me(ge.temperature),
        on: !qe,
        acts: [["climate", "toggle", ie]],
        aria: "Turn " + me(ie) + (qe ? " on" : " off")
      });
    }
    if (Le) {
      const ge = y[Le].state === "on";
      ke.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        icon: Ra.humidifier,
        label: me(Le),
        value: ge ? "On · " + Ct(Le).humidity + "%" : "Off",
        short: ge ? Ct(Le).humidity + "%" : "Off",
        on: ge,
        acts: [["humidifier", "toggle", Le]],
        aria: "Turn " + me(Le) + (ge ? " off" : " on")
      });
    }
    if (ut.length) {
      const ge = tt || ut[0], qe = y[ge], ft = qe.state === "playing";
      ke.push({
        key: "media",
        kind: "control",
        tone: "blue",
        icon: Ra.media,
        label: me(ge),
        value: Rt(ge),
        short: ft ? "Playing" : qe.state === "paused" ? "Paused" : Ne(qe.state),
        on: ft,
        acts: [["media_player", qe.state === "playing" || qe.state === "paused" ? "media_play_pause" : "toggle", ge]],
        aria: (ft ? "Pause " : "Play ") + me(ge)
      });
    }
    return t.plugs.length && ke.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      icon: Ra.plugs,
      label: "Plugs",
      value: Ve.length ? Ve.length + " of " + t.plugs.length + " on" : "All off",
      short: Ve.length ? Ve.length + " on" : "Off",
      on: Ve.length > 0,
      acts: t.plugs.map((ge) => ["switch", Ve.length ? "turn_off" : "turn_on", ge]),
      aria: (Ve.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((ge) => ke.push({ key: "alert:" + ge, kind: "alert", icon: Ra.alert, label: Ct(ge).device_class === "moisture" ? "Water leak" : me(ge) + " " + Rt(ge).toLowerCase() })), ke;
  }
  const Ke = (t, s, d) => '<button class="' + s + (t.on ? " on" : "") + '" type="button" data-tone="' + t.tone + '" data-acts="' + ze(t.acts) + '" aria-label="' + se(t.aria) + '" aria-pressed="' + t.on + '">' + d + "</button>", Ye = (t) => '<button class="pill" type="button" data-go="' + se(t.id) + '" aria-label="Go to ' + se(t.name) + '">Go</button>', Ae = (t) => t.filter((s) => s.kind === "alert").map((s) => '<span class="sourceTag">' + se(s.label) + "</span>").join(" "), We = (t) => [.../* @__PURE__ */ new Set([...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs])].filter((s) => y[s]);
  function Se(t) {
    var m;
    const s = We(t), d = (m = h.main) == null ? void 0 : m[t.id];
    return s.includes(d) ? d : t.readings.find((g) => Ct(g).device_class === "temperature") || s[0] || null;
  }
  const Ge = (t, s) => {
    const d = me(s);
    return d.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? Ne(d.slice(t.name.length + 1)) : d;
  };
  function st(t) {
    const s = y[t], d = Ct(t), m = t.split(".")[0], g = Number(s.state);
    if (s.state === "unavailable") return { text: "Unavailable" };
    if (m === "sensor" && Number.isFinite(g)) {
      if (d.device_class === "temperature") return { text: Me(g) };
      const P = d.unit_of_measurement || "";
      return P === "%" ? { text: Math.round(g) + "%" } : { text: on(g, Number.isInteger(g) ? 0 : 1), unit: P };
    }
    if (m === "climate" && (d.current_temperature ?? d.temperature) != null) return { text: Me(d.current_temperature ?? d.temperature) };
    if (m === "light") return { text: s.state !== "on" ? "Off" : rn(t) ? oi(s) + "%" : "On" };
    if (m === "cover") {
      const P = Sn(t);
      return { text: P <= 0 ? "Closed" : P >= 100 ? "Open" : P + "%" };
    }
    return m === "humidifier" ? { text: s.state === "on" ? d.humidity + "%" : "Off" } : m === "media_player" ? { text: s.state === "playing" ? "Playing" : s.state === "paused" ? "Paused" : Ne(s.state) } : { text: Rt(t) };
  }
  const yt = (t, s, d) => {
    const m = d.find((U) => U.key === "temp"), g = d.find((U) => U.key === "hum"), P = Ct(s), T = y[s].state === "off";
    return s.startsWith("climate.") ? [Ge(t, s), T ? "Off" : Ne(P.hvac_action || y[s].state) + (P.temperature != null ? " · " + Me(P.temperature) : ""), g && g.value + " humidity"].filter(Boolean).join(" · ") : [!(m && m.id === s) && Ge(t, s), m && m.id !== s && m.value, g && g.id !== s && g.value + " humidity"].filter(Boolean).join(" · ");
  };
  function mt(t, s, d) {
    const m = d && st(d), g = d ? yt(t, d, s) : "", P = s.filter((T) => T.kind === "control").slice(0, 4).map((T) => '<div class="tfATile' + (T.on ? " on" : "") + '" data-tone="' + T.tone + '">' + Ke(T, "tfIcon", T.icon) + '<div><div class="activityRowName">' + se(T.label) + '</div><div class="activityRowMeta">' + se(T.value) + "</div></div></div>");
    return '<div class="workoutPanelTop"><div><div class="tfAName">' + se(t.name) + "</div>" + Ae(s) + '</div><div class="tfATools">' + (E ? G('data-sec-opts="' + se("room:" + t.id) + '"', t.name + " options", Ir) : "") + Ye(t) + "</div></div>" + (d ? '<button class="tfABig" type="button" data-more="' + se(d) + '" aria-label="' + se(me(d) + ", " + Rt(d) + ". More info") + '"><span class="tfABigMain' + (m.text.length > 7 ? " long" : "") + '">' + se(m.text) + (m.unit ? '<span class="tfABigUnit">' + se(m.unit) + "</span>" : "") + "</span>" + (g ? '<span class="tfABigSub">' + se(g) + "</span>" : "") + "</button>" : "") + (P.length ? '<div class="tfATiles">' + P.join("") + "</div>" : "");
  }
  function Ht(t) {
    const s = t.id === W, d = Re(t), m = Se(t), g = m && st(m);
    return '<article class="workoutPanel tfAreaPanel' + (s ? " active" : "") + (oe(t.id) ? " isHidden" : "") + '" data-area="' + se(t.id) + '" tabindex="0" aria-expanded="' + s + '" aria-label="' + se(t.name) + '"><div class="panelExpanded"' + (s ? "" : " inert") + ">" + mt(t, d, m) + '</div><div class="panelCollapsed tfACollapsed"><span class="tfACMain">' + (g ? se(g.text + (g.unit ? " " + g.unit : "")) : "") + '</span><div class="panelCollapsedText">' + se(t.name) + '</div><span class="tfACOn">' + d.filter((P) => P.on || P.kind === "alert").map((P) => '<span class="tfACDot' + (P.kind === "alert" ? " alert" : "") + '" data-tone="' + (P.tone || "") + '">' + P.icon + "</span>").join("") + "</span></div></article>";
  }
  let Ut = [];
  const hn = (t) => '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><div class="sectionLabel tfSideLabel">Areas</div><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + Ut.map(Ht).join("") + "</section></div>";
  function ln() {
    var m;
    const t = [
      { key: "home", name: "Home", ids: lt.vacuums },
      { key: "security", name: "Security", ids: [...lt.security.alarms, ...lt.security.locks] },
      ...lt.rooms.map((g) => ({ key: "room:" + g.id, name: g.name, room: g, ids: g.actions })),
      ...(h.sections || []).map((g) => ({ key: "sec:" + g.id, name: g.name, custom: g, ids: [] }))
    ], s = new Map(t.map((g) => [g.key, { ...g, ids: [] }]));
    te.clear(), t.forEach((g) => g.ids.forEach((P) => {
      var T;
      te.set(P, g.key), s.get(s.has((T = h.place) == null ? void 0 : T[P]) ? h.place[P] : g.key).ids.push(P);
    })), s.forEach((g) => {
      var T, U;
      const P = (((U = (T = h.order) == null ? void 0 : T.blocks) == null ? void 0 : U[g.key]) || []).filter((re) => g.ids.includes(re));
      g.ids = [...P, ...g.ids.filter((re) => !P.includes(re))];
    });
    const d = (((m = h.order) == null ? void 0 : m.sections) || []).filter((g) => s.has(g));
    return [...d, ...[...s.keys()].filter((g) => !d.includes(g))].map((g) => s.get(g));
  }
  function si(t, s, d, m, g) {
    const P = '<div class="tfTools">' + G('data-sec-move="' + se(s.key) + '|-1"', "Move " + s.name + " up", Om, d === 0) + G('data-sec-move="' + se(s.key) + '|1"', "Move " + s.name + " down", Wm, d === m - 1) + (s.room || s.custom ? G('data-sec-opts="' + se(s.key) + '"', s.name + " options", Ir) : "") + "</div>";
    return '<div class="sectionLabel rowLabel tfLabel' + (E ? " tfEditLabel" : "") + '" data-tf data-k="' + se(t) + '" tabindex="-1" style="order:' + g + '">' + (E ? "<span>" + se(s.name) + (s.room && oe(s.room.id) ? "<small>Area card hidden</small>" : "") + "</span>" + P : se(s.name)) + "</div>";
  }
  const On = (t) => '<div class="tfEditTop" data-tf data-k="edit" style="order:' + t + '" role="region" aria-label="Editing the page"><div class="tfEditTitle">Editing</div><div class="tfEditActions"><button class="pill" type="button" data-add-section>Add section</button><button class="primary" type="button" data-edit-done>Done</button></div></div>', Xn = (t, s, d) => t + " " + (t === 1 ? s : d), Qn = () => (h.favourites ?? be.favorite_entities ?? []).filter((t) => y[t]);
  function li() {
    const t = Qn();
    if (be.hide_suggested_entities) return t;
    if (!w) {
      const d = Object.entries(x).sort((g, P) => P[1] - g[1]).map(([g]) => g), m = lt.rooms.flatMap((g) => g.actions);
      w = [.../* @__PURE__ */ new Set([...He, ...d, ...m.filter((g) => le(g).on), ...m])];
    }
    const s = (d) => y[d] && y[d].state !== "unavailable" && !t.includes(d);
    return [...t, ...w.filter(s)].slice(0, Math.max(8, t.length));
  }
  const it = (t) => {
    const s = Qn().includes(t);
    return '<button class="tfStar" type="button" data-star="' + se(t) + '" aria-pressed="' + s + '" aria-label="Favourite: ' + se(me(t)) + '">' + jm(s) + "</button>";
  };
  function Wn(t, { area: s = !1, star: d = !1 } = {}) {
    var _e;
    const m = t.split(".")[0], g = Hr.includes(m) ? le(t) : null, P = g ? g.on : ["on", "open", "playing"].includes((_e = y[t]) == null ? void 0 : _e.state), T = g ? g.button : Nm.includes(m) ? { act: pe(m, "toggle", t), label: "Turn " + me(t) + (P ? " off" : " on") } : m === "scene" || m === "script" ? { act: pe(m, "turn_on", t), label: "Run " + me(t) } : null, U = Rt(t) + (s && k.get(t) ? " · " + k.get(t) : ""), re = (g == null ? void 0 : g.icon) || Hn(t);
    return '<div class="activityRow' + (T ? " tfPlug" : "") + (P ? " on" : "") + (d ? " tfPick" : "") + '" data-k="' + se((s ? "fav:" : "row:") + t) + '" data-tone="' + (m === "light" ? "light" : (g == null ? void 0 : g.tone) || "blue") + '">' + (T && !d ? '<button class="tfIcon" type="button" data-act="' + T.act + '" aria-label="' + se(T.label) + '"' + Ot(t, re) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + Ot(t, re) + "></div>") + '<button class="tfName" type="button" data-more="' + se(t) + '" aria-label="' + se(me(t) + ", " + U + ". More info") + '"><span class="activityRowName">' + se(me(t)) + '</span><span class="activityRowMeta">' + se(U) + "</span></button>" + (d ? it(t) : "") + "</div>";
  }
  const Rn = () => y["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(y).find((t) => t.startsWith("weather."));
  function da(t) {
    const s = y[t], d = s.attributes, m = i();
    let g = Rm[s.state] || Ne(s.state);
    if (m != null && m.formatEntityState)
      try {
        g = m.formatEntityState(s);
      } catch {
      }
    return [d.temperature != null ? Math.round(d.temperature) + " " + (d.temperature_unit || "°C") : null, g].filter(Boolean).join(" · ");
  }
  function ea() {
    var d;
    const t = (m) => Object.keys(y).filter((g) => g.startsWith("binary_sensor.") && m.includes(Ct(g).device_class));
    return ((d = ye.alert_entities) != null && d.length ? ye.alert_entities : [...t(["moisture", "smoke", "gas"]).map((m) => ({ entity: m, severity: "alert" })), ...t(qd).map((m) => ({ entity: m, severity: "warning" }))]).filter((m) => y[m.entity]).map((m) => ({ ...m, on: ["on", "open", "unlocked", "triggered", "problem"].includes(y[m.entity].state) }));
  }
  function ca() {
    const t = Object.keys(Id), s = /* @__PURE__ */ new Set(), d = [];
    return (be.shortcuts || []).forEach((m) => {
      if (m.type === "summary") {
        if (!t.includes(m.key) || s.has(m.key)) return;
        s.add(m.key);
      }
      d.push(m);
    }), t.forEach((m) => {
      s.has(m) || d.push({ type: "summary", key: m });
    }), d;
  }
  function ua() {
    var Bi;
    const t = lt.rooms, s = lt.security, d = (De, ht) => De.actions.filter((bi) => ht.test(bi)), m = (De) => t.map((ht) => ({ name: ht.name, ids: De(ht) })).filter((ht) => ht.ids.length), g = t.flatMap((De) => De.lights), P = g.filter((De) => {
      var ht;
      return ((ht = y[De]) == null ? void 0 : ht.state) === "on";
    }).length, T = t.map((De) => De.readings.find((ht) => Ct(ht).device_class === "temperature")).filter(Boolean).map((De) => Number(y[De].state)).filter(Number.isFinite), [U, re] = [on(Math.min(...T)), on(Math.max(...T))], _e = t.flatMap((De) => d(De, /^media_player\./)), ie = _e.filter((De) => {
      var ht;
      return ((ht = y[De]) == null ? void 0 : ht.state) === "playing";
    }).length, Le = ea(), ut = Le.filter((De) => De.severity === "warning" && De.on).length, tt = s.locks.filter((De) => {
      var ht;
      return ["unlocked", "jammed", "open"].includes((ht = y[De]) == null ? void 0 : ht.state);
    }).length, Ve = s.alarms.filter((De) => {
      var ht;
      return ((ht = y[De]) == null ? void 0 : ht.state) === "disarmed";
    }).length, ke = ut ? Xn(ut, "warning", "warnings") : null, ge = tt ? tt + " unlocked" : Ve ? Ve + " disarmed" : ke ? null : "All secure", qe = Object.keys(y).filter((De) => De.startsWith("sensor.") && Ct(De).device_class === "battery").sort((De, ht) => Number(y[De].state) - Number(y[ht].state)), ft = [...qe.filter((De) => Number(y[De].state) < 20), ...lt.vacuums.filter((De) => Ct(De).battery_level < 20)], fa = t.flatMap((De) => De.plants.map((ht) => ht.id)).sort((De, ht) => {
      var bi, Co;
      return (((bi = y[ht]) == null ? void 0 : bi.state) === "problem") - (((Co = y[De]) == null ? void 0 : Co.state) === "problem");
    }), Za = fa.filter((De) => {
      var ht;
      return ((ht = y[De]) == null ? void 0 : ht.state) === "problem";
    }), oa = Rn(), Mo = t.flatMap((De) => De.solar), vi = Mo.find((De) => De.endsWith("_power")), Ni = {
      light: g.length && { value: P ? P + " on" : "All off", groups: m((De) => De.lights) },
      climate: T.length && { value: U === re ? U + "°" : U + " - " + re + "°", groups: m((De) => [...De.readings.filter((ht) => ["temperature", "humidity"].includes(Ct(ht).device_class)), ...d(De, /^(climate|humidifier)\./)]) },
      security: (s.alarms.length || s.locks.length) && { value: [ke, ge].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...s.alarms, ...s.locks] }, { name: "Doors and windows", ids: s.openings }].filter((De) => De.ids.length) },
      media_players: _e.length && { value: ie ? ie + " playing" : "No media playing", groups: m((De) => d(De, /^media_player\./)) },
      maintenance: (qe.length || fa.length) && { value: [ft.length && Xn(ft.length, "low battery", "low batteries"), Za.length && Xn(Za.length, "problem", "problems")].filter(Boolean).join(", ") || "All good", groups: [{ name: "Plants", ids: fa }, { name: "Batteries", ids: [...lt.vacuums, ...qe] }].filter((De) => De.ids.length) },
      weather: oa && { value: da(oa), id: oa },
      energy: lt.grid && { value: Fe(Number(((Bi = y[vi]) == null ? void 0 : Bi.state) || 0) * 1e3 + Number(y[lt.grid].state)) + " now", groups: [{ name: "Energy", ids: [...Mo, lt.grid] }] }
    }, Tn = [], Ca = Le.filter((De) => De.severity !== "warning" && De.on);
    return Ca.length && Tn.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: Xn(Ca.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: Ca.map((De) => De.entity) }] }), ca().forEach((De) => {
      De.type !== "summary" ? Tn.push({ key: "path:" + De.path, name: De.label || De.path, icon: De.icon || "mdi:link-variant", colour: "", value: "" }) : !De.hidden && Ni[De.key] && Tn.push({ key: De.key, ...Id[De.key], ...Ni[De.key] });
    }), Tn;
  }
  const Jt = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + se(t.key) + '" data-k="sum:' + se(t.key) + '" aria-label="' + se(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.colour ? ' style="--sum:' + t.colour + '"' : "") + '><div class="tfIcon" aria-hidden="true"' + Ot(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + se(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + se(t.value) + "</div>" : "") + "</div></div>", Li = (t, s, d, m) => (g, P) => '<div class="tfSide ' + t + '" data-tf data-k="' + s + '" style="order:' + P.order + '"><div class="sectionLabel tfSideLabel">' + d + (m || "") + '</div><section class="card tfCard" aria-label="' + d + '"><div class="activityRows">' + g + "</div></section></div>";
  function Et(t) {
    const s = Qn();
    h = { ...h, favourites: s.includes(t) ? s.filter((d) => d !== t) : [...s, t] }, Pe(), ta();
  }
  function Ti(t) {
    document.querySelector("home-assistant") && (Q.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function dn(t, s) {
    if (t.startsWith("path:")) {
      Ti(t.slice(5));
      return;
    }
    if (t === "weather") {
      const d = Rn();
      d && Ln(d, s);
      return;
    }
    Ln("summary:" + t, s);
  }
  async function Zo() {
    const t = (P) => Promise.resolve().then(() => B(P)).catch(() => null), [s, d, m, g] = await Promise.all([
      t({ type: "frontend/get_user_data", key: Hd }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]);
    h = { favourites: null, ...(s == null ? void 0 : s.value) || {} }, be = (d == null ? void 0 : d.value) || {}, ye = (m == null ? void 0 : m.value) || {}, He = Array.isArray(g == null ? void 0 : g.entities) ? g.entities : [], w = null, Object.keys(y).length && ta();
  }
  function Ko() {
    var P;
    lt = At.model(i()), y = lt.states, F.forEach((T, U) => {
      const re = y[U], _e = (re == null ? void 0 : re.attributes) || {};
      if (!re || Date.now() - T.at > 2 * 60 * 1e3) {
        F.delete(U);
        return;
      }
      T.pos != null && re.state !== "opening" && re.state !== "closing" && Math.abs(Sn(U) - T.pos) < 1 && delete T.pos, T.tilt != null && Math.abs((_e.current_tilt_position ?? -1) - T.tilt) < 1 && delete T.tilt, T.pos == null && T.tilt == null && F.delete(U);
    });
    const t = [];
    let s = 0;
    const d = ln();
    Ut = d.filter((T) => T.room && (E || !oe(T.room.id))).map((T) => T.room), Ut.some((T) => T.id === W) || (W = ((P = Ut[0]) == null ? void 0 : P.id) || null), E && t.push({ key: "edit", html: On(++s) }), k = /* @__PURE__ */ new Map(), lt.rooms.forEach((T) => [...T.actions, ...T.plugs, ...T.readings, ...T.openings, ...T.solar, ...T.plants.flatMap((U) => [U.id, ...U.readings])].forEach((U) => k.set(U, T.name)));
    const m = li(), g = ua();
    return g.length && t.push({ key: "sums", order: ++s, wrap: Li("tfSums", "sums", "Summaries"), tiles: g.map((T) => ({ key: "sum:" + T.key, html: Jt(T) })) }), m.length && t.push({ key: "favs", order: ++s, wrap: Li("tfFavs", "favs", "Favourites", '<button class="pill" type="button" data-favs-edit>Edit</button>'), tiles: m.map((T) => ({ key: "fav:" + T, html: Wn(T, { area: !0 }) })) }), Ut.length && t.push({ key: "areas", html: hn(++s) }), d.forEach((T, U) => {
      const re = E ? T.ids : T.ids.filter((Le) => !X(Le));
      if (T.custom && !re.length && !E) return;
      const _e = T.room ? T.room.id : T.key, ie = T.room;
      t.push({ key: "label:" + _e, html: si("label:" + _e, T, U, d.length, ++s) }), T.key === "home" && (t.weather = ++s), ie != null && ie.solar.length && t.push({ key: "energy:" + ie.id, html: $n(ie, ++s) }), ie && (ie.readings.length || ie.plugs.length || ie.power != null) && t.push({ key: "readings:" + ie.id, html: Wt(ie, ++s) }), ie == null || ie.plants.forEach((Le) => t.push({ key: "plant:" + Le.id, html: Fn(Le, ++s) })), (re.length || E) && t.push({ key: "block:" + _e, order: ++s, section: T.key, tiles: re.map((Le) => ({ key: Le, html: V(Le) })) }), T.key === "security" && t.push({ key: "openings", html: ya(++s) });
    }), t;
  }
  const $o = (t) => t.wrap ? t.wrap(t.tiles.map((s) => s.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + se(t.key) + '"' + (t.section ? ' data-block="' + se(t.section) + '"' : "") + ' style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((s) => s.html).join("") + (E && t.section ? '<div class="tfDropHint">Drag devices here</div>' : "") + "</div></div>", di = (t) => t.map((s) => s.key + (s.tiles ? "(" + s.tiles.map((d) => d.key).join(",") + ")" : "")).join(";");
  function Ma() {
    if (!v || !L) return;
    L.querySelectorAll("[data-tf]").forEach((d) => d.remove());
    const t = Ko();
    nn.clear();
    const s = document.createElement("div");
    s.innerHTML = t.map((d) => d.tiles ? $o(d) : d.html).join(""), t.forEach((d) => d.tiles ? d.tiles.forEach((m) => nn.set(m.key, m.html)) : nn.set(d.key, d.html)), et = di(t), L.append(...s.children), an(t.weather), Ha(L), ui(L), nr(L), I && za(I.id), pi(), Wa(), er(), requestAnimationFrame(q);
  }
  const Jo = (t) => {
    var d;
    const s = n.activeElement && t.contains(n.activeElement) ? n.activeElement : null;
    return s && { label: s.getAttribute("aria-label"), act: (d = s.dataset) == null ? void 0 : d.act };
  }, ci = (t, s) => {
    var d;
    s && ((d = s.label && t.querySelector('[aria-label="' + CSS.escape(s.label) + '"]') || s.act && t.querySelector('[data-act="' + CSS.escape(s.act) + '"]')) == null || d.focus());
  };
  function Xo(t, s) {
    const d = document.createElement("div");
    d.innerHTML = s;
    const m = d.firstElementChild, g = Jo(t);
    t.replaceWith(m), Ha(m), ui(m), nr(m), ci(m, g);
  }
  function ta() {
    if (!v || !L) return;
    if (!L.querySelector("[data-tf]")) {
      Ma();
      return;
    }
    const t = Ko();
    if (di(t) !== et) {
      Ma();
      return;
    }
    const s = (d) => [...z.keys()].some((m) => {
      const g = m.slice(m.indexOf("|") + 1);
      return d === g || d.endsWith(":" + g);
    });
    t.forEach((d) => (d.tiles || [d]).forEach((m) => {
      if (nn.get(m.key) === m.html || s(m.key)) return;
      const g = L.querySelector('[data-k="' + CSS.escape(m.key) + '"]');
      if (g) {
        if (nn.set(m.key, m.html), I && I.key === m.key && g.querySelector(".tfOpen")) {
          g.querySelector(".tfOpen .activityRowMeta").textContent = Rt(I.id);
          return;
        }
        Xo(g, m.html), I && I.key === m.key && za(I.id), m.key.startsWith("energy:") && pi();
      }
    })), Wa(), er(), _t == null || _t.update(), requestAnimationFrame(q);
  }
  const go = {
    light: (t) => [["Brightness", t.brightness != null ? Math.round(t.brightness / 2.55) + "%" : null], ["Colour temperature", t.color_temp_kelvin ? Number(t.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", t.color_mode && Ne(t.color_mode)]],
    climate: (t) => [["Current temperature", on(t.current_temperature) + " °C"], ["Target", on(t.temperature) + " °C"], ["Action", Ne(t.hvac_action)]],
    cover: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null], ["Tilt", t.current_tilt_position != null ? t.current_tilt_position + "% open" : null]],
    humidifier: (t) => [["Current humidity", t.current_humidity + "%"], ["Target", t.humidity + "%"], ["Mode", Ne(t.mode)]],
    media_player: (t) => [["Title", t.media_title], ["Artist", t.media_artist], ["Volume", t.volume_level != null ? Math.round(t.volume_level * 100) + "%" : null], ["Source", t.source]],
    vacuum: (t) => [["Battery", t.battery_level + "%"], ["Fan speed", Ne(t.fan_speed)], ["Rooms", (t.rooms || []).join(", ") || null]],
    lock: (t) => [["Changed by", t.changed_by]],
    alarm_control_panel: (t) => [["Changed by", t.changed_by]],
    valve: () => [],
    plant: (t) => [["Moisture", t.moisture + "%"], ["Light", Number(t.brightness).toLocaleString() + " lx"], ["Temperature", on(t.temperature) + " °C"], ["Fertility", t.conductivity + " µS/cm"], ["Problems", t.problem === "none" ? "None" : Ne(t.problem)]],
    weather: (t) => [["Temperature", t.temperature != null ? t.temperature + " " + (t.temperature_unit || "°C") : null], ["Humidity", t.humidity != null ? t.humidity + "%" : null], ["Wind", t.wind_speed != null ? t.wind_speed + " " + (t.wind_speed_unit || "km/h") : null], ["Pressure", t.pressure != null ? t.pressure + " " + (t.pressure_unit || "hPa") : null]]
  }, Yr = (t) => {
    var d;
    const s = (((d = go[t.split(".")[0]]) == null ? void 0 : d.call(go, Ct(t))) || []).filter(([, m]) => m != null && m !== "");
    return s.length ? '<div class="tfMoreRows">' + s.map(([m, g]) => '<div class="tfMoreRow"><span>' + se(m) + "</span><span>" + se(g) + "</span></div>").join("") + "</div>" : "";
  }, Qo = (t) => oo(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function Ai(t, s = {}, d = !1) {
    return '<div class="tfMoreList">' + t.map((m) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + se(m.name) + '</div><div class="tfMoreTiles' + (d ? " single" : "") + '">' + m.ids.map((g) => Wn(g, s)).join("") + "</div></div>").join("") + "</div>";
  }
  const ct = document.createElement("div");
  ct.className = "tfMoreBackdrop", ct.hidden = !0, f.appendChild(ct);
  function _i() {
    var t;
    (t = ct.querySelector(".tfMorePair")) == null || t.classList.toggle("over", window.innerWidth < (Ue.more === "sheet" ? 1e3 : 800));
  }
  window.addEventListener("resize", _i, { passive: !0 }), v && Ft();
  let cn = [];
  const vo = (t) => t === "favourites" || /^(summary|opts|sopts):/.test(t);
  function bo(t) {
    var _e;
    const s = (ie, Le = "") => '<div class="tfMoreHead">' + (H != null && H.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + Os + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + se(ie) + "</div>" + Le + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + km + "</button></div>", d = (ie, Le) => '<div class="tfMoreNow"><div class="tfMoreState">' + se(ie) + "</div>" + (Le ? '<div class="tfMoreSub">' + se(Le) + "</div>" : "") + "</div>", m = Ai, g = (ie, Le, ut, tt) => '<div class="tfOptGroup"><div class="tfMoreGroupName">' + ie + '</div><div class="tfSeg" role="group" aria-label="' + ie + '">' + ut.map(([Ve, ke]) => '<button type="button" data-opt="' + Le + "|" + Ve + '" aria-pressed="' + (tt === Ve) + '" aria-label="' + ie + ": " + ke + '">' + ke + "</button>").join("") + "</div></div>", P = (ie, Le, ut, tt) => '<div class="tfOptRow"><span>' + se(ie) + '</span><button class="switch' + (tt ? " on" : "") + '" type="button" role="switch" aria-checked="' + tt + '" aria-label="' + se(ie) + '" data-opt="' + Le + "|" + se(ut) + '"></button></div>';
    if (t.startsWith("opts:")) {
      const ie = t.slice(5), Le = K(ie);
      if (!y[ie]) return null;
      if (!Hr.includes(ie.split(".")[0])) return [s(me(ie)), g("Shows", "graph", [["0", "Value"], ["1", "24-hour graph"]], Le.graph ? "1" : "0")];
      const ut = ln(), tt = ut.find((ke) => ke.ids.includes(ie)), Ve = ce(ie);
      return [
        s(me(ie)),
        g("Size", "size", Hm, Le.size || "half"),
        Ve.length && '<div class="tfOptGroup"><div class="tfMoreGroupName">Shows</div>' + Ve.map((ke) => P(Im[ke], "part", ke, ke === "art" ? !!Le.art : !(Le.hide || []).includes(ke))).join("") + "</div>",
        '<div class="tfOptGroup"><label class="tfMoreGroupName" for="tfOptPlace">Section</label><select class="settingsSelect tfOptField" id="tfOptPlace" data-opt-place>' + ut.map((ke) => '<option value="' + se(ke.key) + '"' + (ke === tt ? " selected" : "") + ">" + se(ke.name) + "</option>").join("") + "</select></div>",
        P("Hide on this page", "hide", "1", X(ie))
      ].filter(Boolean);
    }
    if (t.startsWith("sopts:")) {
      const ie = ln().find((ke) => ke.key === t.slice(6));
      if (!ie) return null;
      if (ie.custom) return [
        s(ie.name),
        '<div class="tfOptGroup"><label class="tfMoreGroupName" for="tfOptName">Name</label><input class="settingsSelect tfOptField" id="tfOptName" type="text" maxlength="40" value="' + se(ie.name) + '" data-opt-name></div>',
        '<button class="pill tfOptDelete" type="button" data-opt="delete|1">Delete section</button>'
      ];
      const Le = We(ie.room), ut = Se(ie.room), tt = Le.filter((ke) => Hr.includes(ke.split(".")[0]) || ke.startsWith("switch.")), Ve = (ke) => '<option value="' + se(ke) + '"' + (ke === ut ? " selected" : "") + ">" + se(Ge(ie.room, ke)) + "</option>";
      return [
        s(ie.name),
        P("Area card", "area", ie.room.id, !oe(ie.room.id)),
        Le.length && '<div class="tfOptGroup"><label class="tfMoreGroupName" for="tfOptMain">Main</label><select class="settingsSelect tfOptField" id="tfOptMain" data-opt-main="' + se(ie.room.id) + '">' + [["Readings", Le.filter((ke) => !tt.includes(ke))], ["Devices", tt]].filter(([, ke]) => ke.length).map(([ke, ge]) => '<optgroup label="' + ke + '">' + ge.map(Ve).join("") + "</optgroup>").join("") + "</select></div>"
      ].filter(Boolean);
    }
    if (t === "favourites") {
      const ie = Qn(), Le = new Set(ie), ut = [{ name: "Starred", ids: ie }, { name: "Home", ids: lt.vacuums }, { name: "Security", ids: [...lt.security.alarms, ...lt.security.locks] }, ...lt.rooms.map((tt) => ({ name: tt.name, ids: [...tt.actions, ...tt.plugs] }))].map((tt, Ve) => Ve ? { ...tt, ids: tt.ids.filter((ke) => !Le.has(ke)) } : tt).filter((tt) => tt.ids.length);
      return [s("Favourites"), d(ie.length ? ie.length + " starred" : "None starred"), m(ut, { star: !0 }, !0)];
    }
    if (t.startsWith("summary:")) {
      const ie = ua().find((Le) => Le.key === t.slice(8));
      return ie ? [s(ie.name), d(ie.value), ((_e = ie.groups) == null ? void 0 : _e.length) && m(ie.groups, {})].filter(Boolean) : null;
    }
    const T = t.split(".")[0], U = y[t], re = Hr.includes(T) ? le(t) : { sections: [] };
    return [
      s(me(t)),
      d(Rt(t), U.last_changed && fo(Date.parse(U.last_changed))),
      T === "cover" && '<div data-cover-art="' + se(t) + '"></div>',
      ...re.sections.filter(Boolean),
      Fa(t) && '<button class="tfDetailsBtn" type="button" data-details aria-expanded="' + !!(H != null && H.details) + '" aria-controls="tfMoreSide"><span>Details</span>' + Pm + "</button>"
    ].filter(Boolean);
  }
  const Fa = (t) => vo(t) ? "" : Yr(t) + Qo(t);
  let Ei = "";
  function wo(t) {
    var s;
    H && (H.details = t, Wa(), (s = ct.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || s.focus());
  }
  const Oa = (t) => {
    const s = y[t], d = Sn(t), m = xa(t);
    return { kind: Fs(s), name: me(t), text: Rt(t), pos: d, target: Math.abs(m - d) > 0.5 ? m : null, moving: s.state === "opening" || s.state === "closing", tilt: xt(t) ?? 100, canSet: Ie(t, Pd) };
  };
  function ui(t) {
    t.querySelectorAll("[data-cover-art]").forEach((s) => {
      const d = s.dataset.coverArt, m = s.dataset.artKey || "more:" + d;
      let g = de.get(m);
      g || (g = ym({ onMove: (P) => ja(d, P), onSet: (P) => {
        ja(d, P), ia("pos", d);
      } }), g.coverId = d, de.set(m, g)), s.replaceWith(g.el), g.update(Oa(d));
    });
  }
  const kt = (t) => [...de.values()].filter((s) => s.coverId === t), xo = () => de.forEach((t) => {
    y[t.coverId] && t.update(Oa(t.coverId));
  }), er = () => {
    de.forEach((t, s) => {
      t.el.isConnected || (t.destroy(), de.delete(s));
    }), xo();
  };
  function Wa() {
    var g, P;
    if (!H || !(vo(H.id) || y[H.id])) {
      ct.hidden = !0;
      return;
    }
    if ([...z.keys()].some((T) => T.endsWith("|" + H.id))) {
      xo();
      return;
    }
    const t = bo(H.id), s = ct.querySelector(".tfMore");
    if (!t) {
      wt();
      return;
    }
    const d = Jo(ct), m = Fa(H.id);
    if (ct.hidden || !s || t.length !== cn.length)
      ct.innerHTML = '<div class="tfMorePair" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore">' + t.join("") + "</section>" + (m ? '<aside class="tfMoreSide" id="tfMoreSide" aria-label="Details"><div class="tfMoreSideInner"><div class="tfMoreHead"><button class="tfBack" type="button" data-details-close aria-label="Back">' + Os + '</button><div class="activityTitle">Details</div></div><div class="tfMoreSideBody">' + m + "</div></div></aside>" : "") + "</div>", Ei = m, ct.hidden = !1, _i(), ui(ct), Ha(ct), ci(ct, d), ct.contains(n.activeElement) || (g = ct.querySelector("[data-more-close]")) == null || g.focus();
    else {
      if (t.forEach((T, U) => {
        var ie, Le;
        if (T === cn[U] || T.includes("data-cover-art") || s.children[U].contains((Le = (ie = n.activeElement) == null ? void 0 : ie.matches) != null && Le.call(ie, "input,select") ? n.activeElement : null)) return;
        const re = document.createElement("div");
        re.innerHTML = T;
        const _e = re.firstElementChild;
        s.children[U].replaceWith(_e), Ha(_e);
      }), m !== Ei) {
        const T = ct.querySelector(".tfMoreSideBody");
        T && (T.innerHTML = m), Ei = m;
      }
      ct.contains(n.activeElement) || ci(ct, d);
    }
    (P = ct.querySelector(".tfMorePair")) == null || P.classList.toggle("details", !!(H.details && m)), cn = t, xo();
  }
  setInterval(() => {
    H && Wa();
  }, 15 * 1e3);
  function Ln(t, s) {
    const d = !!(H && s && ct.contains(s));
    H = { id: t, opener: d ? H.opener : s, back: d ? H : null }, tr();
  }
  function tr() {
    cn = [], ct.hidden = !0, de.forEach((t, s) => {
      s !== H.id && ct.contains(t.el) && (t.destroy(), de.delete(s));
    }), Wa();
  }
  function wt() {
    var s, d, m, g, P, T, U, re;
    const t = H == null ? void 0 : H.opener;
    H = null, de.forEach((_e, ie) => {
      ct.contains(_e.el) && (_e.destroy(), de.delete(ie));
    }), ct.hidden = !0, ct.innerHTML = "", t != null && t.isConnected ? t.focus() : (s = t == null ? void 0 : t.dataset) != null && s.more ? (d = L.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || d.focus() : (m = t == null ? void 0 : t.dataset) != null && m.secOpts ? (g = L.querySelector((t.closest(".tfAreaPanel") ? ".tfAreaPanel" : ".tfLabel") + ' [data-sec-opts="' + CSS.escape(t.dataset.secOpts) + '"]')) == null || g.focus() : (P = t == null ? void 0 : t.dataset) != null && P.summary ? (T = L.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || T.focus() : (U = t == null ? void 0 : t.hasAttribute) != null && U.call(t, "data-favs-edit") && ((re = L.querySelector("[data-favs-edit]")) == null || re.focus());
  }
  function na(t, s, d, m = {}) {
    const g = s.map((ge) => ge[1]), P = m.zero ? 0 : Math.min(...g), T = Math.max(...g), U = Math.max(120, t.clientWidth || 260), re = Math.max(60, t.clientHeight || 130), _e = 8, ie = re - 20, Le = Date.now() - 24 * 3600 * 1e3, ut = 24 * 3600 * 1e3, tt = (ge) => Math.max(0, Math.min(U, (ge - Le) / ut * U)), Ve = (ge) => T === P ? (_e + ie) / 2 : ie - (ge - P) / (T - P) * (ie - _e);
    let ke = "M" + tt(s[0][0]).toFixed(1) + " " + Ve(s[0][1]).toFixed(1);
    for (let ge = 1; ge < s.length; ge++) ke += m.smooth ? "L" + tt(s[ge][0]).toFixed(1) + " " + Ve(s[ge][1]).toFixed(1) : "H" + tt(s[ge][0]).toFixed(1) + "V" + Ve(s[ge][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + U + " " + re), t.setAttribute("aria-label", d), t.innerHTML = '<path d="' + ke + "V" + ie + "H" + tt(s[0][0]).toFixed(1) + 'Z" fill="' + (m.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + ke + '" fill="none" stroke="' + (m.colour || "var(--primary)") + '" stroke-width="2" stroke-linejoin="round"/><text x="0" y="' + (re - 4) + '">24 h ago</text><text x="' + U + '" y="' + (re - 4) + '" text-anchor="end">Now</text>';
  }
  function qa(t) {
    var m;
    const s = Number((m = y[t]) == null ? void 0 : m.state), d = Date.now();
    return [...Array(48)].map((g, P) => [d - (48 - P) * 30 * 60 * 1e3, Math.round(s * (0.96 + 0.04 * Math.sin(P / 6)) * 10) / 10]);
  }
  const nr = (t) => t.querySelectorAll("[data-spark]").forEach((s) => za(s.dataset.spark, s));
  async function za(t, s) {
    var tt, Ve;
    let d = Q.get(t);
    if (t.endsWith("_solar_power")) d = { at: Date.now(), points: dd() };
    else if (oo(t)) d = { at: Date.now(), points: qa(t) };
    else if (!d || Date.now() - d.at > 5 * 60 * 1e3) {
      try {
        const ke = new Date(Date.now() - 864e5).toISOString(), ge = await B({ type: "history/history_during_period", start_time: ke, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), qe = ((ge == null ? void 0 : ge[t]) || []).map((ft) => [ft.lu != null ? ft.lu * 1e3 : Date.parse(ft.last_updated || ft.last_changed), Number(ft.s ?? ft.state)]).filter(([ft, fa]) => Number.isFinite(ft) && Number.isFinite(fa));
        d = { at: Date.now(), points: qe };
      } catch {
        d = { at: Date.now(), points: [] };
      }
      Q.set(t, d);
    }
    const m = s || L.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!m) return;
    const g = y[t], P = ((tt = g == null ? void 0 : g.attributes) == null ? void 0 : tt.unit_of_measurement) || "", T = d.points.slice(), U = Number(g == null ? void 0 : g.state);
    if (Number.isFinite(U) && !t.endsWith("_solar_power") && T.push([Date.now(), U]), T.length < 2) {
      m.setAttribute("aria-label", me(t) + ": no history for the last 24 hours"), m.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const re = T.map((ke) => ke[1]), _e = Math.min(...re), ie = Math.max(...re), Le = (ke) => ke.toLocaleString(void 0, { maximumFractionDigits: Math.abs(ke) >= 100 ? 0 : 1 }), ut = ((Ve = g == null ? void 0 : g.attributes) == null ? void 0 : Ve.state_class) === "total_increasing";
    na(m, T, me(t) + ", last 24 hours: " + (ut ? "+" + Le(re[re.length - 1] - re[0]) : _e === ie ? Le(_e) : Le(_e) + " to " + Le(ie)) + (P ? " " + P : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power") });
  }
  function pi() {
    const t = L == null ? void 0 : L.querySelector("[data-solar]");
    if (!t) return;
    const s = dd();
    na(t, s, "Solar, last 24 hours: up to " + on(Math.max(...s.map((d) => d[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function Di(t, s) {
    const d = s.entity_id, m = F.get(d) || {}, g = { open_cover: 100, close_cover: 0, set_cover_position: s.position, toggle: Sn(d) > 0 ? 0 : 100 }[t], P = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: s.tilt_position }[t];
    g != null && (m.pos = g), P != null && (m.tilt = P), t === "stop_cover" && (delete m.pos, delete m.tilt), t === "stop_cover_tilt" && delete m.tilt, m.at = Date.now(), F.set(d, m);
  }
  function qn(t, s, d, m) {
    const g = { entity_id: d, ...m || {} };
    return t === "cover" && Di(s, g), x[d] = (x[d] || 0) + 1, lo.set(Fd, JSON.stringify(x)), At.call(t, s, g) ? Promise.resolve() : Promise.resolve(ae(t, s, g));
  }
  function aa(t) {
    const [s, d, m, g] = t.split("|");
    qn(s, d, m, g ? JSON.parse(g) : null).catch(() => {
    });
  }
  function Va(t, s) {
    var d;
    h = { ...h, order: { ...h.order || {}, blocks: { ...((d = h.order) == null ? void 0 : d.blocks) || {}, [t]: s } } };
  }
  function zn(t, s) {
    const d = { ...h.place || {} };
    s === te.get(t) ? delete d[t] : d[t] = s, h = { ...h, place: d };
  }
  function pa(t) {
    var s;
    Pe(), Ma(), t && ((s = L.querySelector(t)) == null || s.focus());
  }
  function Vn(t, s) {
    const d = ln(), m = d.findIndex((U) => U.ids.includes(t));
    if (m < 0) return;
    const g = d[m], P = g.ids.indexOf(t), T = P + s;
    if (T >= 0 && T < g.ids.length) {
      const U = g.ids.filter((re) => re !== t);
      U.splice(T, 0, t), Va(g.key, U);
    } else {
      const U = d[m + s];
      if (!U) return;
      Va(g.key, g.ids.filter((re) => re !== t)), Va(U.key, s < 0 ? [...U.ids, t] : [t, ...U.ids]), zn(t, U.key);
    }
    pa('[data-tile-move="' + CSS.escape(t + "|" + s) + '"]');
  }
  function ar(t, s) {
    const d = ln(), m = d.find((P) => P.ids.includes(t)), g = d.find((P) => P.key === s);
    !g || m === g || (m && Va(m.key, m.ids.filter((P) => P !== t)), Va(s, [...g.ids, t]), zn(t, s), pa());
  }
  function Zr(t, s) {
    var P;
    const d = ln().map((T) => T.key), m = d.indexOf(t), g = m + s;
    m < 0 || g < 0 || g >= d.length || (d.splice(m, 1), d.splice(g, 0, t), h = { ...h, order: { ...h.order || {}, sections: d } }, pa(), (P = L.querySelector('[data-sec-move="' + CSS.escape(t + "|" + s) + '"]:not(:disabled)') || L.querySelector('[data-sec-move="' + CSS.escape(t + "|" + -s) + '"]')) == null || P.focus());
  }
  function yo(t) {
    const s = "s" + Date.now().toString(36);
    h = { ...h, sections: [...h.sections || [], { id: s, name: "New section" }] }, pa(), Ln("sopts:sec:" + s, t);
    const d = ct.querySelector("[data-opt-name]");
    d == null || d.focus(), d == null || d.select();
  }
  function ko(t) {
    var m, g;
    const s = Object.fromEntries(Object.entries(h.place || {}).filter(([, P]) => P !== t)), d = { ...((m = h.order) == null ? void 0 : m.blocks) || {} };
    delete d[t], h = { ...h, place: s, sections: (h.sections || []).filter((P) => "sec:" + P.id !== t), order: { ...h.order || {}, blocks: d, sections: (((g = h.order) == null ? void 0 : g.sections) || []).filter((P) => P !== t) } };
  }
  function ir(t, s) {
    const d = (H == null ? void 0 : H.id) || "";
    if (d.startsWith("opts:")) {
      const m = d.slice(5), g = { ...K(m) };
      if (t === "size" && (g.size = s), t === "graph" && (g.graph = s === "1"), t === "part" && s === "art") g.art = !g.art;
      else if (t === "part") {
        const P = new Set(g.hide || []);
        P.has(s) ? P.delete(s) : P.add(s), g.hide = [...P];
      }
      h = { ...h, show: { ...h.show || {}, [m]: g } }, t === "hide" && (h = { ...h, hidden: X(m) ? h.hidden.filter((P) => P !== m) : [...h.hidden || [], m] });
    } else d.startsWith("sopts:") && (t === "area" && (h = { ...h, hiddenAreas: oe(s) ? h.hiddenAreas.filter((m) => m !== s) : [...h.hiddenAreas || [], s] }), t === "delete" && (ko(d.slice(6)), wt()));
    pa();
  }
  function Kr(t, s) {
    const d = t.closest(".tfAction"), m = d.dataset.k, g = d.getBoundingClientRect(), P = d.cloneNode(!0);
    P.classList.add("tfGhost"), Object.assign(P.style, { width: g.width + "px", height: g.height + "px", left: g.left + "px", top: g.top + "px" }), f.appendChild(P), d.classList.add("tfDragging");
    const T = s.clientX - g.left, U = s.clientY - g.top;
    let re = s, _e = 0, ie = "";
    const Le = () => {
      var qe;
      P.style.left = re.clientX - T + "px", P.style.top = re.clientY - U + "px";
      const ke = n.elementFromPoint(re.clientX, re.clientY), ge = ke == null ? void 0 : ke.closest(".tfActions > .tfAction");
      if (ge && ge !== d) {
        const ft = ge.getBoundingClientRect(), Za = ft.width > ge.parentElement.clientWidth * 0.75 ? re.clientY > ft.top + ft.height / 2 : re.clientX > ft.left + ft.width / 2, oa = ge.dataset.k + (Za ? ">" : "<");
        oa !== ie && (ie = oa, ge.parentElement.insertBefore(d, Za ? ge.nextSibling : ge));
      } else if (!ge) {
        const ft = (qe = ke == null ? void 0 : ke.closest(".tfBlock[data-block]")) == null ? void 0 : qe.querySelector(".tfActions");
        ft && d.parentElement !== ft && !ft.querySelector(".tfAction") && (ie = ft.parentElement.dataset.block, ft.prepend(d));
      }
    }, ut = () => {
      const ke = re.clientY < 70 ? -14 : re.clientY > window.innerHeight - 70 ? 14 : 0;
      ke && (window.scrollBy(0, ke), Le()), _e = requestAnimationFrame(ut);
    }, tt = (ke) => {
      re = ke, Le();
    }, Ve = (ke) => {
      (ke == null ? void 0 : ke.type) === "pointerup" && (re = ke, Le()), cancelAnimationFrame(_e), window.removeEventListener("pointermove", tt), window.removeEventListener("pointerup", Ve), window.removeEventListener("pointercancel", Ve), P.remove(), d.classList.remove("tfDragging"), L.querySelectorAll(".tfBlock[data-block]").forEach((ge) => {
        const qe = [...ge.querySelectorAll(".tfAction[data-k]")].map((ft) => ft.dataset.k);
        Va(ge.dataset.block, qe), qe.includes(m) && zn(m, ge.dataset.block);
      }), pa();
    };
    window.addEventListener("pointermove", tt), window.addEventListener("pointerup", Ve), window.addEventListener("pointercancel", Ve), _e = requestAnimationFrame(ut);
  }
  function mi(t) {
    var d, m;
    E = t, f.classList.toggle("editing", t);
    const s = c("editNav");
    s && (s.classList.toggle("active", t), s.setAttribute("aria-pressed", String(t)), s.setAttribute("aria-label", t ? "Done editing" : "Edit the page"), s.title = t ? "Done" : "Edit", s.innerHTML = t ? Fm : Wd), H && wt(), t && !c("homeView").classList.contains("active") && ((d = c("homeNav")) == null || d.click()), Ma(), t && ((m = L.querySelector('[data-k="edit"] [data-edit-done]')) == null || m.focus());
  }
  function ja(t, s) {
    z.set("pos|" + t, s), nn.delete(t), cn = cn.map(() => ""), [L, ct].forEach((m) => m.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((g) => la(g, s)));
    const d = L.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (d && (d.textContent = Math.round(s) + "%"), (H == null ? void 0 : H.id) === t) {
      const m = ct.querySelector(".tfMoreState"), g = ct.querySelector(".tfMoreSub");
      m && (m.textContent = Math.round(s) + "%", m.classList.add("live")), g && (g.textContent = "Currently " + Sn(t) + "%");
    }
    kt(t).forEach((m) => m.update(Oa(t)));
  }
  const fi = (t, s) => {
    const d = t.shiftKey ? 10 : 1, m = { ArrowUp: s + d, ArrowRight: s + d, ArrowDown: s - d, ArrowLeft: s - d, PageUp: s + 25, PageDown: s - 25, Home: 0, End: 100 }[t.key];
    return m == null ? null : Math.max(0, Math.min(100, Math.round(m)));
  };
  function $r(t, s) {
    var ke;
    const d = t.dataset.blocks;
    (ke = t.setPointerCapture) == null || ke.call(t, s.pointerId);
    const m = (ge) => {
      const qe = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (ge.clientX - qe.left) / qe.width * 100));
    }, g = m(s), P = s.clientX;
    let T = !1, U = xa(d), re = g, _e = 0;
    const ie = () => {
      U = Math.abs(re - U) < 0.2 ? re : U + (re - U) * 0.14, ja(d, U), _e = requestAnimationFrame(ie);
    }, Le = () => {
      T || (T = !0, t.classList.add("fine"), _e = requestAnimationFrame(ie));
    }, ut = setTimeout(Le, 350), tt = (ge) => {
      re = m(ge), Math.abs(ge.clientX - P) > 6 && (clearTimeout(ut), Le());
    }, Ve = () => {
      clearTimeout(ut), cancelAnimationFrame(_e), t.removeEventListener("pointermove", tt), t.removeEventListener("pointerup", Ve), t.removeEventListener("pointercancel", Ve), t.classList.remove("fine"), ja(d, T ? Math.round(U) : (Math.min(3, Math.floor(g / 25)) + 1) * 25), ia("pos", d);
    };
    t.addEventListener("pointermove", tt), t.addEventListener("pointerup", Ve), t.addEventListener("pointercancel", Ve);
  }
  function Ga(t) {
    var g;
    const [s, d] = t.dataset.open.split("|"), m = t.closest(".tfCard");
    I = { key: s, id: d, h: m ? Math.round(m.getBoundingClientRect().height) : 0 }, nn.delete(s), ta(), (g = L.querySelector(".tfOpen [data-close]")) == null || g.focus();
  }
  function ma(t) {
    var s;
    W = t.dataset.area, L.querySelectorAll(".tfAreaPanel").forEach((d) => {
      var g;
      const m = d === t;
      d.classList.toggle("active", m), d.setAttribute("aria-expanded", String(m)), (g = d.querySelector(".panelExpanded")) == null || g.toggleAttribute("inert", !m);
    }), nn.set("areas", hn(((s = L.querySelector('[data-k="areas"]')) == null ? void 0 : s.style.order) || 1));
  }
  const hi = {
    bright: { value: (t, s) => Math.round(s * 100), text: (t, s) => s ? s + "%" : "Off", send: (t, s) => s > 0 ? ["light", "turn_on", { brightness_pct: s }] : ["light", "turn_off", {}] },
    ct: { value: (t, s) => {
      const [d, m] = rt(t);
      return Math.round(d + s * (m - d));
    }, text: (t, s) => s.toLocaleString() + "k", send: (t, s) => ["light", "turn_on", { color_temp_kelvin: s }] },
    hue: { value: (t, s) => Math.round(s * 360), text: () => "Colour", send: (t, s) => {
      var d;
      return ["light", "turn_on", { hs_color: [s, Math.max(60, ((d = Ct(t).hs_color) == null ? void 0 : d[1]) || 100)] }];
    } },
    pos: { value: (t, s) => Math.round(s * 100), text: (t, s) => Math.round(s) + "%", send: (t, s) => ["cover", "set_cover_position", { position: Math.round(s) }] },
    tilt: { value: (t, s) => Math.round(s * 100), text: (t, s) => "Tilt " + s + "%", send: (t, s) => ["cover", "set_cover_tilt_position", { tilt_position: s }] },
    vol: { value: (t, s) => Math.round(s * 100) / 100, text: (t, s) => Math.round(s * 100) + "%", send: (t, s) => ["media_player", "volume_set", { volume_level: s }] }
  };
  function Ua(t, s, d, m) {
    var re;
    const g = hi[s].value(d, m);
    z.set(s + "|" + d, g);
    const P = Math.round(m * 100) + "%", T = t.querySelector("i");
    if (s === "tilt") {
      T.style.width = "calc((100% - 6px) * " + m + ")";
      const [_e, ie] = t.querySelectorAll("span");
      _e.classList.toggle("lit", m > 0.08), ie.classList.toggle("lit", m > 0.92), nn.delete(d), cn = cn.map(() => ""), kt(d).forEach((Le) => Le.update(Oa(d)));
    } else if (T) T.style.width = P;
    else {
      let _e = t.querySelector("b");
      _e || (_e = document.createElement("b"), t.appendChild(_e)), _e.style.left = P;
    }
    t.setAttribute("aria-valuenow", String(Math.round(m * 100)));
    const U = (re = t.closest(".tfAction") || t.closest(".tfMore")) == null ? void 0 : re.querySelector(".tfName .activityRowMeta, .tfMoreState");
    U && (U.textContent = hi[s].text(d, g));
  }
  function ia(t, s) {
    const d = z.get(t + "|" + s), [m, g, P] = hi[t].send(s, d), T = () => setTimeout(() => {
      z.delete(t + "|" + s), ta();
    }, 1500);
    qn(m, g, s, P).then(T, T);
  }
  function gi(t) {
    t.addEventListener("click", (s) => {
      var m;
      const d = s.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-tile-move],[data-tile-opts],[data-sec-move],[data-sec-opts],[data-opt],[data-add-section],[data-edit-done],.tfAreaPanel");
      if (!(!d || !t.contains(d) || d.disabled))
        if (d.dataset.act) aa(d.dataset.act);
        else if (d.dataset.tileMove) {
          const [g, P] = d.dataset.tileMove.split("|");
          Vn(g, Number(P));
        } else if (d.dataset.tileOpts) Ln("opts:" + d.dataset.tileOpts, d);
        else if (d.dataset.secMove) {
          const [g, P] = d.dataset.secMove.split("|");
          Zr(g, Number(P));
        } else if (d.dataset.secOpts) Ln("sopts:" + d.dataset.secOpts, d);
        else if (d.dataset.opt) {
          const [g, P] = d.dataset.opt.split("|");
          ir(g, P);
        } else if (d.hasAttribute("data-add-section")) yo(d);
        else if (d.hasAttribute("data-edit-done")) mi(!1);
        else if (d.hasAttribute("data-details")) wo(!(H != null && H.details));
        else if (d.hasAttribute("data-details-close")) wo(!1);
        else if (d.dataset.summary) dn(d.dataset.summary, d);
        else if (d.dataset.star) Et(d.dataset.star);
        else if (d.hasAttribute("data-more-back"))
          H = H.back, tr();
        else if (d.hasAttribute("data-favs-edit")) Ln("favourites", d);
        else if (d.dataset.acts) JSON.parse(d.dataset.acts).forEach(([g, P, T, U]) => qn(g, P, T, U).catch(() => {
        }));
        else if (d.dataset.more) Ln(d.dataset.more, d);
        else if (d.hasAttribute("data-more-close")) wt();
        else if (d.dataset.go) {
          const g = L.querySelector('[data-k="label:' + CSS.escape(d.dataset.go) + '"]');
          g == null || g.scrollIntoView({ behavior: "smooth", block: "start" }), g == null || g.focus({ preventScroll: !0 });
        } else if (d.dataset.open) Ga(d);
        else if (d.hasAttribute("data-close")) {
          const g = I;
          I = null, nn.delete(g.key), ta(), (m = L.querySelector('[data-open="' + CSS.escape(g.key + "|" + g.id) + '"]')) == null || m.focus();
        } else d.classList.contains("tfAreaPanel") && !d.classList.contains("active") && ma(d);
    }), t.addEventListener("keydown", (s) => {
      var m, g, P, T, U;
      const d = s.target;
      if ((m = d.dataset) != null && m.open && (s.key === "Enter" || s.key === " ") && (s.preventDefault(), Ga(d)), (g = d.classList) != null && g.contains("tfAreaPanel") && (s.key === "Enter" || s.key === " ") && (s.preventDefault(), ma(d)), (P = d.dataset) != null && P.summary && (s.key === "Enter" || s.key === " ") && (s.preventDefault(), dn(d.dataset.summary, d)), (T = d.dataset) != null && T.blocks) {
        const re = d.dataset.blocks, _e = fi(s, Math.round(xa(re)));
        if (_e == null) return;
        s.preventDefault(), ja(re, _e), clearTimeout(Ee.get(re)), Ee.set(re, setTimeout(() => ia("pos", re), 500));
        return;
      }
      if ((U = d.dataset) != null && U.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(s.key)) {
        s.preventDefault();
        const [re, _e] = d.dataset.drag.split("|"), ie = Number(d.getAttribute("aria-valuenow")) / 100, Le = s.key === "Home" ? 0 : s.key === "End" ? 1 : Math.max(0, Math.min(1, ie + (s.key === "ArrowLeft" || s.key === "ArrowDown" ? -0.05 : 0.05)));
        Ua(d, re, _e, Le), ia(re, _e);
      }
    }), t.addEventListener("pointerdown", (s) => {
      var Le;
      const d = E && s.button === 0 && s.target.closest("[data-drag-tile]");
      if (d) {
        s.preventDefault(), Kr(d, s);
        return;
      }
      const m = s.target.closest("[data-blocks]");
      if (m && s.button === 0) {
        s.preventDefault(), $r(m, s);
        return;
      }
      const g = s.target.closest("[data-drag]");
      if (!g) return;
      const [P, T] = g.dataset.drag.split("|");
      if (P === "bright" && !rn(T)) {
        aa(pe("light", "toggle", T));
        return;
      }
      s.preventDefault(), (Le = g.setPointerCapture) == null || Le.call(g, s.pointerId);
      const U = P === "tilt" ? 3 : 0, re = (ut) => {
        const tt = g.getBoundingClientRect();
        return Math.max(0, Math.min(1, (ut.clientX - tt.left - U) / (tt.width - U * 2)));
      };
      Ua(g, P, T, re(s));
      const _e = (ut) => Ua(g, P, T, re(ut)), ie = () => {
        g.removeEventListener("pointermove", _e), g.removeEventListener("pointerup", ie), g.removeEventListener("pointercancel", ie), ia(P, T);
      };
      g.addEventListener("pointermove", _e), g.addEventListener("pointerup", ie), g.addEventListener("pointercancel", ie);
    });
  }
  return L && v && (Zo(), gi(L), gi(ct), ct.addEventListener("click", (t) => {
    t.target === ct && wt();
  }), ct.addEventListener("change", (t) => {
    const s = t.target;
    s.matches("[data-opt-place]") && (H != null && H.id.startsWith("opts:")) && ar(H.id.slice(5), s.value), s.matches("[data-opt-name]") && Ma(), s.matches("[data-opt-main]") && (h = { ...h, main: { ...h.main || {}, [s.dataset.optMain]: s.value } }, pa());
  }), ct.addEventListener("input", (t) => {
    const s = t.target;
    if (!s.matches("[data-opt-name]") || !(H != null && H.id.startsWith("sopts:sec:"))) return;
    const d = H.id.slice(10), m = s.value.trim() || "New section";
    h = { ...h, sections: (h.sections || []).map((g) => g.id === d ? { ...g, name: m } : g) }, Pe();
  }), (Ya = n.querySelector(".bottomNav")) == null || Ya.insertAdjacentHTML("beforeend", '<button class="navBtn" id="editNav" type="button" title="Edit" aria-label="Edit the page" aria-pressed="false">' + Wd + "</button>"), (Ri = c("editNav")) == null || Ri.addEventListener("click", () => mi(!E)), ct.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.stopPropagation(), H != null && H.details ? wo(!1) : wt());
  })), O(), {
    update(t) {
      if (!v) return;
      const s = !Object.keys(y).length;
      y = t || {}, s ? Ma() : ta();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      sa = !0, _t == null || _t.destroy(), _t = null;
    },
    resume() {
      sa = !1, v && (L != null && L.querySelector("[data-tf]")) && an(jt.style.order);
    }
  };
}
const Km = "0.42.0", qs = "move_assistant", $m = "move_assistant", zd = "move_assistant_checkin_reminder";
function Jm() {
  if (document.getElementById("move-assistant-inter")) return;
  const n = document.createElement("link");
  n.id = "move-assistant-inter", n.rel = "stylesheet", n.href = "https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(n);
}
class Xm extends HTMLElement {
  setConfig(r) {
    this._config = r || {};
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
  set hass(r) {
    var c;
    const i = !this._hass;
    if (this._hass = r, i) {
      this._init();
      return;
    }
    this._app && r.states !== this._lastStates && (this._lastStates = r.states, this._app.updateStates(r.states), (c = this._test) == null || c.update(r.states));
  }
  connectedCallback() {
    var r, i;
    (r = this._app) == null || r.resume(), (i = this._test) == null || i.resume();
  }
  disconnectedCallback() {
    var r, i;
    (r = this._app) == null || r.suspend(), (i = this._test) == null || i.suspend();
  }
  async _init() {
    Jm();
    const r = this.shadowRoot || this.attachShadow({ mode: "open" });
    r.innerHTML = `<style>${hu}${gu}${vu}</style>${bu}`;
    const i = r.getElementById("app");
    i.style.opacity = "0";
    let c = null;
    try {
      const f = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: qs
      });
      c = (f == null ? void 0 : f.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(c), this._app = Fu(r, {
      data: c,
      save: (f) => this._save(f),
      fire: (f, p) => this._fire(f, p),
      ws: (f) => this._hass.callWS(f),
      subscribe: (f, p) => {
        var v, S;
        return (S = (v = this._hass) == null ? void 0 : v.connection) != null && S.subscribeMessage ? this._hass.connection.subscribeMessage(p, f) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var f, p;
        return Object.keys(((p = (f = this._hass) == null ? void 0 : f.services) == null ? void 0 : p.notify) || {}).sort();
      },
      setReminderAutomation: (f) => this._setReminderAutomation(f),
      setLight: (f) => this.classList.toggle("lightBody", f),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this._test = Zm(r, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), this.isConnected || (this._app.suspend(), this._test.suspend()), i.style.transition = "opacity .2s ease", i.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var i;
    const r = (i = this._hass) == null ? void 0 : i.connection;
    r != null && r.subscribeMessage && r.subscribeMessage(
      (c) => {
        var p;
        const f = JSON.stringify((c == null ? void 0 : c.value) ?? null);
        f === this._lastSaved || f === this._pendingJson || (this._lastSaved = f, (p = this._app) == null || p.applyRemoteData(c.value));
      },
      { type: "frontend/subscribe_user_data", key: qs }
    ).catch(() => {
    });
  }
  _save(r) {
    this._pendingJson = JSON.stringify(r), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const i = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: qs,
          value: JSON.parse(i)
        }), this._lastSaved = i;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(r, i = {}) {
    var c, f;
    ((c = this._config) == null ? void 0 : c.events) !== !1 && ((f = this._hass) == null || f.callWS({
      type: "fire_event",
      event_type: $m,
      event_data: { action: r, ...i }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(r) {
    const i = `config/automation/config/${zd}`;
    if (!r) {
      try {
        await this._hass.callApi("DELETE", i);
      } catch (p) {
        if ((p == null ? void 0 : p.status_code) !== 404 && (p == null ? void 0 : p.status) !== 404) throw p;
      }
      return;
    }
    const c = (p) => `${p}:00`, f = window.location.pathname;
    await this._hass.callApi("POST", i, {
      id: zd,
      alias: "Move Assistant check-in reminder",
      description: "Created by Move Assistant. Change it in Move Assistant → Settings → Check-in.",
      mode: "single",
      triggers: [
        { trigger: "time", at: c(r.times.morning), id: "morning" },
        { trigger: "time", at: c(r.times.evening), id: "evening" }
      ],
      conditions: [],
      actions: [
        {
          action: `notify.${r.target}`,
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
    const r = document;
    if (r.fullscreenElement || r.webkitFullscreenElement) {
      (r.exitFullscreen || r.webkitExitFullscreen).call(r);
      return;
    }
    const i = this.requestFullscreen || this.webkitRequestFullscreen;
    Promise.resolve(i.call(this)).catch(
      () => this._toast("Full screen isn't available here")
    );
  }
  _toast(r) {
    var c;
    const i = (c = this.shadowRoot) == null ? void 0 : c.getElementById("toast");
    i && (i.textContent = r, i.classList.add("show"), setTimeout(() => i.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", Xm), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${Km} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
