const pu = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn,.tfSeg>button,.tfMoreSwitch>button){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', uu = `#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)),#homeView .tfATile{transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover,#homeView .tfATile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .toggleRow:has(>.themeChoice,>.settingsSelect){flex-direction:column;align-items:stretch;gap:12px}#housePane .toggleRow>.settingsSelect{width:100%}#housePane .themeChoice[hidden]{display:none}#housePane .houseTab>.card:has(>.tfSetGroup){gap:24px}#housePane .tfSetGroup{display:grid;gap:8px}#housePane .tfSetGroup>.sectionLabel{margin:0 16px}#housePane{container:housepane/inline-size}#housePane .tfLightCards{display:none}@container housepane (width < 720px){#housePane .houseTab .metaTableWrap{display:none}#housePane .tfLightCards{display:grid;gap:8px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}#housePane .themeChoice,.tfBoardMenu .tfHeightTabs,.wb .wbSegments{gap:4px;padding:4px;border:0;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}#housePane .themeChoice{display:flex;flex-wrap:nowrap;width:100%}#housePane .themeChoice>button{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button){height:38px;min-width:0;min-height:0;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile)!important;white-space:nowrap;cursor:pointer}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button):hover:not(:disabled):not([aria-pressed=true]):not([aria-checked=true]):not(.active){background:transparent;color:var(--text)}:is(#housePane .themeChoice :is(.wxLayoutBtn[aria-pressed=true],.themeBtn.active),.tfBoardMenu .tfHeightTabs button[aria-checked=true],.wb .wbSegments button[aria-pressed=true]){background:var(--bright);color:var(--on-bright)}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfATags{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:4px;margin-left:auto;min-width:0}.tfATags .sourceTag{display:block;margin:0;max-width:100%;padding:6px 12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}#app.house .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}#app.house .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-l);--g1:var(--g1-l);--g2:var(--g2-l)}#app.house .tfSum[data-summary=climate] .tfIcon svg path{fill:url(#hcClimateGrad)}.tfGradDefs{position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMoreBackdrop.tfMoreUnder{z-index:179;pointer-events:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}.tfMoreTileHead .tfName{display:grid;flex:1;min-width:0;cursor:default}.tfMoreTileHead :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreTileHead .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfMoreTileHead div.tfIcon{cursor:default}.tfMoreTileHead.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreTileHead.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMorePages{display:grid;grid-auto-flow:column;grid-auto-columns:100%;align-items:start;gap:20px;flex:none;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;transition:height .25s cubic-bezier(.2,.7,.3,1)}@media (prefers-reduced-motion:reduce){.tfMorePages{transition:none}}.tfMorePages::-webkit-scrollbar{display:none}.tfMorePage{display:flex;flex-direction:column;gap:14px;min-width:0;scroll-snap-align:start;scroll-snap-stop:always}.tfMoreSpace{flex:none;display:flex;flex-direction:column;justify-content:space-between;gap:12px;height:224px;padding:18px;border-radius:16px;background:var(--tile);overflow:hidden}.tfMoreSpace.tfMoreFill{justify-content:center;align-items:center;height:auto;padding:0;background:none;border-radius:0}.tfMoreSpace.tfMoreFill>.tfCoverArt{width:100%;height:auto;max-width:none;align-self:center}.tfMoreSpace.tfMoreFill>.tfDacPad{width:100%;height:100%}.tfMoreBig{display:flex;align-items:baseline;min-width:0;font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfMoreBig.live{color:var(--primary)}.tfMoreNum{overflow:hidden;text-overflow:ellipsis}.tfMoreUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfMoreFacts{display:flex;flex:1;flex-direction:column;justify-content:space-evenly;min-height:0}.tfMoreFact{display:flex;justify-content:space-between;gap:16px;font:400 14px/20px var(--font)}.tfMoreFact span:first-child{color:var(--muted)}.tfMoreFact span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreGraph{display:flex;flex:none;flex-direction:column;gap:6px}.tfMoreGraph .tfMoreGroupName{margin:0}.tfMoreGraph .tfGraph.tfDay{width:100%}.tfMoreDots{display:flex;flex:none;justify-content:center;gap:4px;margin-top:-4px}.tfMoreDots button{display:grid;place-items:center;width:24px;height:24px;min-height:0;padding:0;border:0;background:none;cursor:pointer}.tfMoreDots button:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--muted);opacity:.45;transition:opacity .15s ease,background .15s ease}.tfMoreDots button[aria-selected=true]:before{background:var(--text);opacity:1}.tfMoreLink{margin-top:auto}.tfMoreLink svg{transform:none!important}.tfMorePage .tfMoreRows{flex:none}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 20px 10px}.tfAreaPanel .tfATiles{margin-inline:-10px}.tfAreaPanel .workoutPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{max-width:100%;overflow:hidden;color:var(--muted);font:400 16px/1.2 var(--font);white-space:nowrap;text-overflow:ellipsis}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));min-height:calc(2 * var(--tile-min));align-content:end}.tfABig{max-width:100%}.panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 16px)}#app.tfBoard .tfAreas[data-rows="5"] .tfACMain{position:absolute;left:10px;right:10px;bottom:170.3px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .tfACMain{position:absolute;left:10px;right:10px;bottom:164.1px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 12px)}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{align-self:start;display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;pointer-events:none;color:var(--text)}.tfBoardCells svg{display:block;overflow:visible}.tfBoardCells pattern circle{fill:currentColor;fill-opacity:.16}.tfBoardCells .tfGridCross{fill:none;stroke:currentColor;stroke-opacity:.45;stroke-width:1.5;stroke-linecap:round}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}.tfBoardMenu .tfHeightTabs button{justify-content:center}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}.tfWidth{padding-top:0}.tfWidth .tfHeightTabs{grid-template-columns:repeat(3,auto)}.tfBoardMenu .tfWidth .tfHeightTabs button{white-space:nowrap}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:var(--fill-row,60px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:var(--fill-row,60px);box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"]{padding:10px;border-radius:24px}.tfRoomTile{cursor:pointer}.tfRoomTile .tfRoomIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomInline,.tfRoomSub{display:none}.tfRoomReading{display:flex;flex-direction:column;gap:4px;min-width:0}.tfRoomBig{overflow:hidden;color:var(--text);font:500 46px/46px var(--font-tile);letter-spacing:-.92px;white-space:nowrap;text-overflow:ellipsis}.tfRoomSub{overflow:hidden;color:var(--muted);font:400 16px/19px var(--font);white-space:nowrap;text-overflow:ellipsis}.tfRoomDevices{display:flex;gap:12px}.tfRoomDevices .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDevices .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}#app.tfBoard .tfRoomTile[data-rows="1"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-rows="1"] :is(.tfRoomReading,.tfRoomDevices),#app.tfBoard .tfRoomTile[data-rows="2"] .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfActionHead .activityRowMeta{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfRoomSub{display:block}#app.tfBoard .tfRoomTile[data-rows="4"] .tfRoomBig{font-size:52px;line-height:52px;letter-spacing:-1.92px}#app.tfBoard .tfRoomTile[data-rows="5"] .tfRoomBig{font-size:64px;line-height:64px;letter-spacing:-1.92px}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="3"],[data-rows="4"],[data-rows="5"]) .tfRoomDevices{display:grid;grid-template-columns:repeat(2,max-content)}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"]:has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"]:has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="4"],[data-rows="5"]) .tfRoomDevices{min-height:calc(2 * var(--chip-size) + 12px);align-content:start}.tfRoomHeads{display:none;gap:12px 16px}.tfRoomDev{display:flex;align-items:center;gap:12px;min-width:0;padding:0;border:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfRoomDev .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomDev .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfRoomDevName{display:flex;flex-direction:column;min-width:0}.tfRoomDevName>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]){flex-direction:row;align-items:center;gap:12px}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"])>.tfActionHead{flex:1;margin-bottom:0}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]) .tfRoomDevices{display:flex}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-cols="2"]):not([data-rows="1"]) .tfRoomHeads{grid-template-columns:repeat(4,minmax(0,1fr))}#app.tfBoard .tfRoomTile[data-cols="2"][data-rows="2"] .tfRoomDev:nth-child(n+3){display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbWx.wbS90{width:100px;height:100px;border-radius:31px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbDeg{font-size:80px;line-height:80px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbUnit{font-size:30px;line-height:38px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbWeather{flex-direction:row;align-items:center;gap:16px}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNow{flex:none}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNextHours{display:flex;flex:1 1 0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbWeather{justify-content:center;padding-top:0;padding-bottom:0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) :is(.wbNow,.wbSummary){display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbColumns{display:flex;flex:none;height:185px}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsDay{display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsNow{display:inline}#app.tfBoard .tfDash-wx[data-narrow] .wbCard.wbWeather{gap:12px;padding:18px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbWx.wbS90{width:64px;height:64px;border-radius:20px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbDeg{font-size:46px;line-height:46px;letter-spacing:-.92px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbUnit{font-size:20px;line-height:26px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-narrow] .wbHalves{display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="3"] .wbNextHours{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow] .wbHour:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;flex:none;height:auto;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumn:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbHalves{display:none}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx:not([data-narrow])[data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:0}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn{justify-content:flex-start;gap:8px;padding:12px 0 16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn .wbWx{width:40px;height:40px;border-radius:16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbTemps{gap:4px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .workoutPanel.tfAreaPanel{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded{display:grid;grid-template-columns:40px minmax(0,1fr);gap:0 12px;align-content:center}#app.tfBoard .tfAreas[data-rows="1"] :is(.panelExpanded>.workoutPanelTop,.tfACTop){display:contents}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] .tfATitle .tfAName{font-size:14px;line-height:20px;height:auto}#app.tfBoard .tfAreas[data-rows="1"] .tfABig{margin:0;flex-direction:row}#app.tfBoard .tfAreas[data-rows="1"] .tfABigMain{font-size:14px;line-height:18px;letter-spacing:0}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigUnit){font-size:14px}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigSub,.tfATiles,.tfACTiles,.sourceTag){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"]) .tfABig{display:none}#app.tfBoard .tfAreas[data-rows="4"] .tfABig{flex:none;margin-top:auto;margin-bottom:auto}#app.tfBoard .tfAreas[data-rows="4"] .tfATiles{margin-top:0}#app.tfBoard .tfAreas[data-rows="4"] .tfABigMain{font-size:52px}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded{row-gap:12px}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"],[data-rows="4"]) .tfATiles{margin-top:auto}#app.tfBoard .tfAreas[data-rows="2"] .tfATile:nth-child(n+3),#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfATile:nth-child(n+5){display:none}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:360px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-52px;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border:0;border-radius:var(--r-inner);background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(360px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.house :is(.settingsSelect,.addInput){border:1px solid var(--muted)}#app.house{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%23d9d9d9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house.light{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%2326221e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house select.settingsSelect{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 44px 0 16px;background-image:var(--select-chev);background-repeat:no-repeat;background-position:right 16px center;background-size:16px 16px}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}#app.house :is(.tfIcon,.activityRowIcon,.tfAreaIcon,.tfRoomIcon){--chip-hi:.0375;background-image:linear-gradient(180deg,#ffffff08,#fff0)!important;box-shadow:inset 0 1px rgba(255,255,255,var(--chip-hi)),inset 0 -1px color-mix(in srgb,currentColor 3%,transparent),inset 0 -3px 6px color-mix(in srgb,currentColor 3.5%,transparent)}#app.house :is(.on[data-light] .tfIcon,.tfIcon.on[data-light],.tfACTile .tfIcon[data-light],.on[data-tone=alarm] .tfIcon,.tfIcon[data-light]){--chip-hi:.1375}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-xl]{grid-row:span 5}#app.tfBoard .tfDashBento:not([data-rows="5"]) .wbItem[data-xl] .wbCallouts{display:none}#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]) .wbZone{flex:1;height:auto;background:none;box-shadow:none;padding:0;align-items:flex-start}#app.tfBoard .tfDashBento[data-rows="3"] .wbItem[data-xl] .wbCallouts{display:flex;margin-top:0}#app.tfBoard .tfDashBento[data-rows="1"] :is(.wbZone,.wbCallouts){display:none}#app .wbZoneM{display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM){display:flex;align-items:flex-start;justify-content:flex-start}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM)>:not(.wbZoneM){display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZoneM{display:flex}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{grid-auto-flow:row}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-break]{grid-column-start:1}#app.house.tfWeatherOpen #homeView{max-width:none}#app.house #settingsView .toggleList{border-radius:var(--r-card);padding-block:4px}#app.house #settingsView .toggleRow{padding-left:18px;padding-right:18px}#app.house #settingsView .toggleRow:not([hidden])~.toggleRow:before{left:18px}#app.house .view{margin-left:0}#app.house #settingsView .toggleList>.tfCardTitle{display:flex;align-items:center;min-height:28px;padding:14px 18px 2px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfLightView{display:flex;padding:4px 0 14px}#housePane.tfLightCardsOn .houseTab .metaTableWrap,#housePane.tfLightCardsOn .houseTab .tfTableNote{display:none}#housePane.tfLightCardsOn .tfLightCards{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:8px}#housePane:not(.tfLightCardsOn) .tfLightCards{display:none}@container housepane (width < 720px){#housePane:not(.tfLightCardsOn) .houseTab .metaTableWrap{display:none}#housePane:not(.tfLightCardsOn) .tfLightCards{display:grid}}#app.house.light .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house .tfTrayInner{gap:32px}#app.house .tfTraySection{gap:12px}#app.house{--font:Geist,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-family:var(--font)}#app.house #housePane .toggleRow>:is(.themeChoice,.settingsSelect){align-self:flex-start;width:auto;max-width:100%}#app.house #housePane .themeChoice{display:inline-flex}#app.house #housePane .themeChoice>button{flex:0 1 auto;min-width:0;padding:0 16px;overflow:hidden;text-overflow:ellipsis}#app.house #housePane .toggleRow{min-width:0}#app.house #housePane .toggleRow>.settingsSelect{min-width:200px}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments){display:inline-flex;width:auto;align-self:flex-start}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments) button{flex:0 0 auto;padding:0 16px}@media (max-width:620px){#app.house.tfDash:not(.tfEditing) #homeView>.grid{display:flex!important;flex-wrap:wrap;align-items:flex-start;gap:var(--grid-gap);height:auto!important}#app.house.tfDash:not(.tfEditing) #homeView>.grid .tfBoardItem{position:relative!important;left:auto!important;top:auto!important}#app.house.tfDash:not(.tfEditing) #homeView>.grid>.tfBoardItem:not(.tfDash-favs){height:auto!important}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummary{flex:none;margin-top:0;container-type:normal}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummaryText{position:static}}#app.house :is(#housePane .themeChoice,.wb .wbSegments,.tfBoardMenu .tfHeightTabs){height:32px;padding:3px;gap:3px;box-sizing:border-box}#app.house :is(#housePane .themeChoice>button,.wb .wbSegments button,.tfBoardMenu .tfHeightTabs button){height:26px!important;padding:0 12px;border-radius:13px!important;font:600 12px/16px var(--font-tile)!important}.tfPlantProblem{flex:1 1 0;min-height:184px;flex-direction:column}.tfGraph.tfPlantGraph{flex:1 1 0;width:calc(100% - 20px);height:auto;min-height:160px;margin:0 10px}.tfGraph .tfGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:3 4;vector-effect:non-scaling-stroke}.tfGraph .tfGuideWord{font-size:11px}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:inset 0 0 0 1px var(--line)}.tfDashTitle .tfGreeting{display:block;margin-bottom:6px;font:500 20px/1.2 var(--font-tile);letter-spacing:0;color:var(--muted)}#app.tfOverview.tfDash #homeView .tfSum:not([data-summary=alerts]) .tfIcon{background:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar{width:100%;max-width:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:flex;justify-content:space-between}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRow{flex:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows>.activityRow{min-width:0}@media (max-width:620px){#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}}#app.tfOverview.tfDash #homeView .tfDash-favs{padding:10px;border-radius:var(--r-card)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityHeader{display:none}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:60px;row-gap:25px;max-height:100%;margin:0;overflow-y:auto;scrollbar-width:none}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows::-webkit-scrollbar{display:none}.hcFadeList.hcMore{-webkit-mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent);mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{height:60px;min-height:0;padding:10px;box-sizing:border-box}#app.tfOverview.tfDash #homeView .tfRoomTile{padding:18px;gap:0;border-radius:28px}#app.tfOverview.tfDash #homeView .tfRoomTile>.tfActionHead{margin-bottom:0}#app.tfOverview.tfDash #homeView .tfRoomTile .tfActionHead .activityRowMeta{display:none}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomReading{margin-top:35px;gap:0}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomBig{font:400 48px/64px var(--font-tile);letter-spacing:-1.92px}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomSub{display:block;margin-top:-7px;font:400 16px/19px var(--font)}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomDevices{display:flex;justify-content:space-between;min-height:0;margin-top:auto;padding-top:16px}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomHeads{display:none}#app.tfOverview.tfDash #homeView .tfRoomTile:not(:has(.tfRoomDevices :nth-child(4))) .tfRoomDevices{justify-content:flex-start;gap:18.67px}#app.light.tfOverview.tfDash #homeView .tfRoomTile .tfRoomIcon{background-color:#acacac;color:#fff}@media (max-width:620px){#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomDevices{display:grid;grid-template-columns:repeat(2,max-content);gap:12px;justify-content:start}}#homeView .grid.tfStack{grid-auto-rows:1px;row-gap:0}#homeView .grid.tfStack>*{align-self:start}.tfTrayPop{position:fixed;z-index:260;right:calc(min(360px,100vw - 56px) + 12px);width:300px;max-width:calc(100vw - 80px);display:grid;gap:2px;padding:10px!important;background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfTrayPop[hidden]{display:none}.tfTrayPopTitle{padding:4px 8px 8px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfTrayPopRow{display:flex;align-items:center;gap:12px;min-height:var(--tile-min);padding:0 8px}.tfTrayPopRow .tfIcon{background-color:var(--hc-icon)}.tfTrayPopName{flex:1;min-width:0;font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(600px,85dvh)}#app .tfMoreBackdrop:not(.wide) .tfMorePages{flex:1 1 auto;min-height:0;height:auto!important;align-items:stretch}#app .tfMoreBackdrop:not(.wide) .tfMorePage{overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}#app .tfMoreBackdrop:not(.wide) .tfMorePage[aria-label=Control]>:first-child{margin-top:auto}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace{flex:1 1 auto;height:auto;min-height:224px}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill{min-height:0;container-type:size}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill>.tfCoverArt{width:min(100%,100cqh);height:auto}.tfMorePage[aria-label=Control]>:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink)+:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink){margin-top:14px}.tfMoreSwitch{display:flex;align-items:center;justify-content:center;min-height:0;padding:0;border-radius:0;background:none}.tfMoreSwitch .tfIcon{width:min(240px,100%);height:min(240px,100%);aspect-ratio:1;min-height:0;border:0;padding:0;border-radius:40%;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer;--mdc-icon-size:204px}.tfMoreSwitch.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreSwitch.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}@media (max-width:620px){#app .tfMoreBackdrop{place-items:end center;padding:0 16px max(16px,env(safe-area-inset-bottom,0px))}#app .tfMoreBackdrop .tfMorePair{width:100%;max-height:85dvh}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){width:100%;border-radius:34px;box-shadow:inset 0 0 0 1px var(--line),0 10px 30px #00000047}#app .tfMoreBackdrop .tfMore{padding-top:10px;outline:none}#app .tfMoreBackdrop .tfMore:before{content:"";display:block;position:sticky;top:10px;z-index:2;flex:none;width:36px;height:5px;margin:0 auto;border-radius:3px;background:var(--line)}#app .tfMoreBackdrop .tfMore [data-more-close]{display:none}}`, fu = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);fill-opacity:.14}.wbChart .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbAsNow{display:none}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbNextHours{display:none;justify-content:space-between;align-items:center;gap:8px;min-width:0}.wbHour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}.wbHourTime{color:var(--muted);font:400 14px/20px var(--font);white-space:nowrap}.wbHourTemp{font:400 18px/20px var(--font-tile);white-space:nowrap}.wbHour .wbWx.wbS40{width:40px;height:40px;border-radius:16px}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumn .wbWx.wbS60{width:40px;height:40px;border-radius:14px}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbSunTile .wbZone{display:block}.wbSunZone{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff;transition:background 1s ease}.wbSunTrack{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbSunBand{fill:#fff;fill-opacity:.1}.wbSunBand.wbSunDay{fill-opacity:.14}.wbSunBand.wbSunDone{fill-opacity:.85}.wbSunDot{fill:#ffd84a}.wbSunDot.wbSunNight{fill:#9aa3c7}.wbSunCount{position:absolute;top:22px;right:22px;bottom:22px;left:22px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding-bottom:14px}.wbSunLeft{font:500 clamp(28px,calc(16cqw * var(--wb-k,1)),36px)/1.1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums;white-space:nowrap}.wbSunWord{font:400 13px/18px var(--font);opacity:.85}.wbSunAt{position:absolute;bottom:32px;font:500 12px/16px var(--font);opacity:.85;font-variant-numeric:tabular-nums}.wbSunRise{left:32px}.wbSunSet{right:32px}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbTrend{position:relative;width:100%;height:100%;min-height:0}.wbTrendPlot{position:absolute;top:22px;right:0;bottom:24px;left:0}.wbTrendPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbTrendLine{fill:none;stroke:var(--text);stroke-width:2;stroke-linejoin:round;stroke-linecap:round;opacity:.8}.wbTrendDot{position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:var(--card);box-shadow:0 0 0 2px var(--text)}.wbTrendDot.wbToday{width:11px;height:11px;margin:-5.5px 0 0 -5.5px;background:var(--primary);box-shadow:0 0 0 3px var(--card)}.wbAvgValue{position:absolute;transform:translate(-50%,calc(-100% - 8px));color:var(--muted);font:400 10px/1 var(--font-tile);white-space:nowrap}.wbAvgValue.wbToday{color:var(--text);font-size:12px;font-weight:600}.wbTrendAvg{position:absolute;right:0;transform:translateY(4px);color:var(--muted);font:400 10px/1 var(--font-tile)}.wbTrendDays{position:absolute;left:0;right:0;bottom:0;height:16px}.wbAvgDay{position:absolute;bottom:0;transform:translate(-50%);color:var(--muted);font:400 11px/16px var(--font-tile)}.wbAvgDay.wbToday{color:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}.wbZoned{gap:14px}.wbZone{position:relative;flex:none;height:198px;display:flex;align-items:center;justify-content:center;border-radius:16px;overflow:hidden}.wbCallouts{display:none;flex-direction:column;gap:4px;margin-top:-6px}.wbCallout{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbCallout>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbCallout>span:last-child{flex:none;color:var(--text);white-space:nowrap}.wbZone>.wbSunSky{flex:1;align-self:stretch;border-radius:0}.wbZone>.wbMoonBox{flex:none;height:150px}.wbBase .wbZone{align-items:flex-end;justify-content:flex-start}.wbZone>.wbTapeRow{align-self:stretch;height:100%}.wbItem[data-xl] .wbCallouts{display:flex}.wbUv .wbZone{display:block}.wbUvArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbUvBig{position:absolute;right:0;bottom:0;display:flex;flex-direction:column;align-items:flex-end}.wbUvNum{font:500 64px/.9 var(--font-tile);letter-spacing:-.03em;color:var(--text);font-variant-numeric:tabular-nums}.wbUvWord{margin-top:6px;font:400 14px/20px var(--font);color:var(--muted)}.wbAqSmile .wbZone{display:block}.wbAqFill{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff}.wbAqFace{position:absolute;left:12px;top:12px;width:min(140px,calc(100% - 60px));height:auto;aspect-ratio:1;fill:none;stroke:currentColor;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round}.wbAqFace .wbAqEyes{stroke-width:5}.wbAqBig{position:absolute;right:14px;bottom:12px;display:flex;flex-direction:column;align-items:flex-end}.wbAqNum{font:500 56px/.9 var(--font-tile);letter-spacing:-.03em;font-variant-numeric:tabular-nums}.wbAqUnit{margin-top:4px;font:500 14px/20px var(--font)}.wbPollenAir{position:absolute;top:0;right:0;bottom:62px;left:0;overflow:hidden;pointer-events:none}.wbFloat{position:absolute;left:-12%;animation:wbFloat linear infinite}.wbBob{display:block;animation:wbBob ease-in-out infinite alternate}@keyframes wbFloat{0%{left:-12%}to{left:106%}}@keyframes wbBob{0%{transform:translateY(-6px) rotate(-14deg)}to{transform:translateY(8px) rotate(16deg)}}.wbFloat svg{display:block}.wbSeed svg{width:calc(20px * var(--s));height:calc(28px * var(--s))}.wbGrain svg{width:calc(10px * var(--s));height:calc(10px * var(--s))}.wbStem svg{width:calc(9px * var(--s));height:calc(26px * var(--s))}.wbSeed{color:var(--text);opacity:.7}.wbGrain{color:#e9c46a;opacity:.85}.wbStem{color:#a3b18a;opacity:.75}#app.light .wbGrain{color:#c99a1e}#app.light .wbStem{color:#7d8c5f}@media (prefers-reduced-motion:reduce){.wbFloat,.wbBob{animation:none}.wbFloat{left:var(--x)}}.wbPush{display:block;transition:transform .35s cubic-bezier(.2,.8,.3,1)}.wbCallout.wbAdvice>span:first-child{color:var(--text)}.wbCard.wbSquare.wbGraphCard{height:100%;min-height:0}.wbGraphCard .wbHead .wbBack{margin:-4px -6px 0 auto}.wbGraphCard .wbRangeBtn{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;max-width:100%;height:32px;padding:0 8px 0 10px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:600 12px/16px var(--font-tile);cursor:pointer}.wb button.wbRangeBtn{border-radius:12px!important}.wbRangeBtn>span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRangeBtn .wbIcon{flex:none;width:16px;height:16px;fill:currentColor}.wbRangeBtn[aria-expanded=true]{background:var(--bright);color:var(--on-bright)}.wbItem:has(.wbRangePick){position:relative;z-index:30}.wbRangePick{position:absolute;top:116px;left:18px;z-index:30;display:flex;flex-direction:column;gap:12px;width:248px;box-sizing:border-box;padding:12px;border-radius:24px;background:var(--card);box-shadow:var(--hc-hair-all),0 18px 40px #00000059}.wbRangePick.wbPickRight{left:auto;right:18px}.wbRangePresets{display:flex;flex-direction:column;gap:2px}.wb .wbRangePreset{height:32px;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--text);font:400 14px/20px var(--font);text-align:left;cursor:pointer}.wb .wbRangePreset:hover{background:var(--tile)}.wb .wbRangePreset[aria-pressed=true]{background:var(--bright);color:var(--on-bright);font-weight:600}.wbRangeDates{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:12px;box-shadow:inset 0 .4px 0 var(--line)}.wbRangeDates label{display:grid;gap:4px;min-width:0;color:var(--muted);font:400 12px/16px var(--font)}.wbRangeDates input{width:100%;min-width:0;height:32px;box-sizing:border-box;padding:0 6px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 12px/16px var(--font);color-scheme:inherit}.wb .wbRangeApply{height:32px;padding:0 14px;border:0;border-radius:999px!important;background:var(--bright);color:var(--on-bright);font:600 12px/16px var(--font-tile);cursor:pointer}.wbGraphCard .wbGraph{flex:1;height:auto;min-height:0}`, hu = '#app .mvPv{position:relative;transform:perspective(var(--pv-persp)) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--sc,1));transition:transform var(--pv-ret) var(--pv-ease)}#app .mvPv.mvMoving{transition:transform 70ms linear}#app .mvPv:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;opacity:0;mix-blend-mode:soft-light;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,var(--pv-shine)),transparent var(--pv-size));transition:opacity var(--pv-ret) ease}#app .mvPv.mvLit:after{opacity:1}#app .tfBar{--mv-c:var(--light-soft,var(--primary));transform-origin:center;transition:box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}#app .tfBar.mvHover{box-shadow:0 0 var(--ab-blur) var(--ab-spread) color-mix(in srgb,var(--mv-c) var(--ab-str),transparent);transition-duration:var(--ab-in)}#app .tfBar.mvHold{box-shadow:0 0 var(--ab-blur2) var(--ab-spread2) color-mix(in srgb,var(--mv-c) var(--ab-str2),transparent);transform:var(--ab-grow);transition-duration:var(--ab-in)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>:is(svg,ha-icon,ha-state-icon,span){transition:scale var(--ih-dur) var(--ih-ease)}@media (hover:hover){#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-s)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover:before{opacity:1}}:where(#app button.tfIcon,#app .tfBack,#app .tfEditChip,#app .tfTrayBtn,#app [data-wb=graph-close]){position:relative}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;background:color-mix(in srgb,currentColor var(--ih-tint),transparent);opacity:0;transition:opacity var(--ih-dur) var(--ih-ease)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):active>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-p)}#app .mvSegInd{position:absolute;z-index:0;pointer-events:none}#app .mvSegMoving>button{position:relative;z-index:1;background-color:transparent!important;box-shadow:none!important;transition:none!important}#app .tfMoreBackdrop{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}#app .toast.tfToast{min-height:58px;box-sizing:border-box;padding:9px 18px 9px 9px;gap:14px;border-radius:29px;font-size:18px;line-height:1.2}#app .toast .mvTick{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--mv-ok);color:#fff}#app .toast .mvTick svg{width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}#app .toast .mvToastText{font-weight:600}#app .toast .toastAction{font-size:16px;margin-left:2px}#app .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}#app{--ol-l:68%;--mv-ok:#4cc38a}#app.light{--ol-l:48%;--mv-ok:#1f7a4d}#app .tfAreaPanel:has(>.mvEdge){isolation:isolate;position:relative}#app .mvEdge,#app .mvEdgeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity var(--ol-in) ease-out}#app .mvEdgeFill{z-index:-1;background:hsl(var(--ol-h) 97% var(--ol-l));mix-blend-mode:soft-light;opacity:clamp(0,calc(var(--ol-fill) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-fill));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app .mvEdge{z-index:5}#app .mvEdge:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l));opacity:clamp(0,calc(var(--ol-border) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-border));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%));mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%))}#app .mvEdge>i{position:absolute;top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;border-radius:inherit;mix-blend-mode:plus-lighter;opacity:clamp(0,calc(var(--ol-glow) * (var(--edge-proximity,0) - var(--ol-esens)) / (100 - var(--ol-esens))),var(--ol-glow));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}#app .mvEdge>i:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;--s:var(--ol-size);box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l) / 60%),inset 0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),inset 0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),inset 0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(22.4px*var(--s)) calc(1.6px*var(--s)) hsl(var(--ol-h) 97% var(--ol-l) / 10%)}#app :not(.mvLitEdge)>:is(.mvEdge,.mvEdgeFill){opacity:0;transition:opacity var(--ol-out) ease-out}@media (prefers-reduced-motion:reduce){#app .mvPv{transform:none!important}#app .mvPv:after{display:none}#app .tfBar.mvHold{transform:none}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>*{scale:none!important}}#app .tfBoardItem.mvDrag{scale:none}#app.tfEditing.tfBoardReady .tfBoardItem:not(.tfDragging){transition:left .42s cubic-bezier(.34,1.46,.64,1),top .42s cubic-bezier(.34,1.46,.64,1),height .42s cubic-bezier(.34,1.46,.64,1)}', mu = `<main id="app"><div class="shell">
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
`, fn = {
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
}, pn = (n) => n < 0 ? 0 : n > 1 ? 1 : n, xc = (n, l, i) => n + (l - n) * i, rc = (n) => {
  const l = String(n || "#000000").trim().replace("#", ""), i = l.length === 3 ? l.split("").map((u) => u + u).join("") : l;
  return [0, 2, 4].map((u) => parseInt(i.slice(u, u + 2), 16) || 0);
}, gu = (n) => "#" + n.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), yc = {}, ze = (n, l, i) => {
  const u = n + l + i;
  return yc[u] || (yc[u] = gu(rc(n).map((b, x) => b + (rc(l)[x] - b) * i)));
}, kc = {}, vd = (n) => kc[n] || (kc[n] = rc(n)), Od = (n, l, i, u) => (b) => {
  if (b <= 0) return 0;
  if (b >= 1) return 1;
  let x = 0, k = 1, E = b;
  for (let F = 0; F < 18; F++)
    E = (x + k) / 2, 3 * (1 - E) * (1 - E) * E * n + 3 * (1 - E) * E * E * i + E * E * E < b ? x = E : k = E;
  return 3 * (1 - E) * (1 - E) * E * l + 3 * (1 - E) * E * E * u + E * E * E;
}, vu = { std: Od(0.2, 0, 0, 1), acc: Od(0.3, 0, 1, 1), dec: Od(0, 0, 0, 1) };
function Td(n, l) {
  const i = String(n || "");
  return (i === "sunny" || i === "clear-night" ? "clear" : i === "partlycloudy" ? "partly" : i === "fog" ? "fog" : i === "lightning" || i === "lightning-rainy" ? "storm" : i === "snowy" || i === "snowy-rainy" ? "snow" : i === "rainy" || i === "pouring" || i === "hail" ? "rain" : "cloudy") + "/" + (i === "clear-night" || l ? "night" : "day");
}
function Mp(n) {
  const l = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return l.partly = [ze(l.clear[0], l.cloudy[0], 0.12), ze(l.clear[1], l.cloudy[1], 0.12)], l.storm = [ze(l.rain[0], "#000000", 0.22), ze(l.rain[1], "#000000", 0.22)], l;
}
const sc = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], lc = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], dc = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function cc(n, l = fn) {
  const i = { ...fn, ...l }, u = Mp(i), b = String(n).split("/"), x = u[b[0]] ? b[0] : "clear", k = b[1] === "night", E = u[x][k ? 1 : 0], F = {
    night: k,
    clearness: x === "clear" ? 1 : x === "partly" ? 0.7 : 0.25,
    sky: E,
    skyStops: [E],
    skyT: 0,
    sun: { x: 45, y: k ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: k ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: k ? 1 : 0 },
    stars: sc.map(() => ({ o: 0 })),
    rain: lc.map(() => ({ o: 0, dy: -16 })),
    snow: dc.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, S = (V) => sc.map(() => ({ o: V }));
  return x === "clear" ? k ? (F.moon.o = 1, F.stars = S(1)) : F.sun.o = 1 : x === "partly" ? (F.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: k ? 1 : 0 }, k ? (F.moon = { x: 34, y: 33, d: 48, o: 1 }, F.stars = S(0.7)) : F.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : x === "cloudy" || x === "fog" ? (F.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: k ? 1 : 0 }, k ? F.moon = { x: 40, y: 36, d: 40, o: 0 } : F.sun = { x: 40, y: 36, r: 20, o: 0 }) : (F.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, k ? F.moon = { x: 38, y: 28, d: 36, o: 0 } : F.sun = { x: 38, y: 28, r: 18, o: 0 }, x === "snow" ? F.snow = dc.map(() => ({ o: 1, dy: 0 })) : F.rain = lc.map((V, O) => ({ o: x === "storm" && O === 1 ? 0 : 1, dy: 0 })), x === "storm" && (F.bolt = { o: 1, dy: 0 })), F;
}
const Mc = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function bu(n, l, i, u = fn, b = !1) {
  const x = { ...fn, ...u }, k = (z, Z) => z > 0.01 && Z > 0.01 ? "stay" : z > 0.01 ? "leave" : Z > 0.01 ? "enter" : "none", E = (z, Z, pt, et) => {
    const Q = z[0] + Z * et, K = z[1] - (pt - 1 - Z) * et;
    return vu[z[2]](pn((i - Q) / Math.max(1e-3, K - Q)));
  }, F = (z, Z, pt, et = 0, Q = 1, K = 0) => {
    const mt = k(z.o, Z.o);
    if (mt === "none") return { ...Z, o: 0 };
    const dt = E(Mc[pt][mt], et, Q, K), wt = {};
    for (const it in Z) wt[it] = b && mt !== "stay" && it !== "o" ? mt === "leave" ? z[it] : Z[it] : xc(z[it], Z[it], dt);
    return wt;
  }, S = E(Mc.sky, 0, 1, 0);
  let V, O;
  if (n.night !== l.night) {
    const z = Math.min(n.clearness, l.clearness), Z = ze(ze(n.sky, l.sky, 0.5), x.dusk, 0.6 * z);
    V = S < 0.5 ? ze(n.sky, Z, S * 2) : ze(Z, l.sky, S * 2 - 1), O = z > 0.5 ? [n.sky, x.dusk, l.sky] : [n.sky, l.sky];
  } else
    V = ze(n.sky, l.sky, S), O = [n.sky, l.sky];
  return {
    night: i < 0.5 ? n.night : l.night,
    clearness: xc(n.clearness, l.clearness, i),
    sky: V,
    skyStops: O,
    skyT: S,
    sun: F(n.sun, l.sun, "body"),
    moon: F(n.moon, l.moon, "body"),
    cloud: F(n.cloud, l.cloud, "cloud"),
    stars: l.stars.map((z, Z) => F(n.stars[Z], z, "fx", Z, l.stars.length, 0.05)),
    rain: l.rain.map((z, Z) => F(n.rain[Z], z, "fx", Z, l.rain.length, 0.05)),
    snow: l.snow.map((z, Z) => F(n.snow[Z], z, "fx", Z, l.snow.length, 0.05)),
    bolt: F(n.bolt, l.bolt, "fx")
  };
}
const wu = [
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
], cn = (n, l) => (wu[(l & 7) * 8 + (n & 7)] + 0.5) / 64, xu = 0, fc = 1, hc = 2, mc = 3, gc = 4, dn = 5, Ts = 6, rr = 7, vc = 8, yd = (n, l) => l <= 0.6665 && ((n - 0.5) * (n - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && l >= 0.416), yu = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], ku = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((n) => [n[0] * 13 / 11, n[1] * 28 / 24]), Sp = (n, l, i) => {
  let u = !1;
  for (let b = 0, x = n.length - 1; b < n.length; x = b++) {
    const k = n[b], E = n[x];
    k[1] > i != E[1] > i && l < (E[0] - k[0]) * (i - k[1]) / (E[1] - k[1]) + k[0] && (u = !u);
  }
  return u;
};
function Cp(n, { size: l = 90, px: i = 2, oneBit: u = !1, colors: b = fn, ink: x = "#26221e", paper: k = "#fbf9f6", clock: E = 0, idle: F = !1 } = {}) {
  const S = { ...fn, ...b }, V = Math.sin, O = Math.PI * 2, z = Math.max(6, Math.round(l / i)), Z = z / 90, pt = F ? Math.floor(E / 100) * 100 : 0, et = F ? V(O * pt / 3600) : 0, Q = F ? 1.8 * V(O * pt / 6400) : 0, K = F ? 0.9 * V(O * pt / 4100) : 0, mt = F ? 0.8 * V(O * pt / 5200) : 0, dt = pt / 3400 % 1, wt = F && n.bolt.o > 0.5 && (dt < 0.04 || dt > 0.08 && dt < 0.11), it = new Array(z * z), nt = new Uint8Array(z * z), at = (L, N, W, P, lt) => {
    W == null || L < 0 || N < 0 || L >= z || N >= z || (P >= 1 || P > cn(L + 5, N + 3)) && (it[N * z + L] = W, nt[N * z + L] = lt);
  }, D = (L, N, W, P) => {
    for (let lt = Math.max(0, Math.floor(N - W) - 1); lt <= Math.min(z - 1, N + W + 1); lt++) for (let ut = Math.max(0, Math.floor(L - W) - 1); ut <= Math.min(z - 1, L + W + 1); ut++) P(ut, lt, ut + 0.5 - L, lt + 0.5 - N);
  }, kt = n.skyStops || [n.sky], st = n.skyT || 0;
  for (let L = 0; L < z; L++) {
    const N = n.night ? pn(1 - (L + 0.5) / (z * 0.7)) * 0.85 : pn(((L + 0.5) / z - 0.35) / 0.65) * 0.85;
    for (let W = 0; W < z; W++) {
      let P = kt[0];
      if (kt.length > 1) {
        const lt = st * (kt.length - 1), ut = Math.min(kt.length - 2, Math.floor(lt));
        P = lt - ut > cn(W, L) ? kt[ut + 1] : kt[ut];
      }
      N > cn(W + 2, L + 5) && (P = n.night ? ze(P, "#000000", 0.28) : ze(P, "#ffffff", 0.2)), it[L * z + W] = wt ? ze(P, "#ffffff", 0.25) : P;
    }
  }
  if (n.sun.o > 0.01) {
    const L = n.sun.x * Z, N = n.sun.y * Z, W = Math.max(1, n.sun.r * Z);
    if (F) {
      const P = W * (1.45 + 0.06 * et), lt = ze(S.sun, "#ffffff", 0.55);
      if (D(L, N, P, (ut, gt, yt, Mt) => {
        const Wt = Math.sqrt(yt * yt + Mt * Mt);
        Wt > W && Wt < P && at(ut, gt, lt, 0.26 * (1 - (Wt - W) / (P - W)) * n.sun.o, xu);
      }), n.sun.o > 0.5) {
        const ut = Math.floor(pt / 500) % 2, gt = Math.max(1, W * 0.22);
        for (let yt = 0; yt < 8; yt++) if (yt % 2 === ut) for (let Mt = W + 1.5; Mt < W + 1.5 + gt; Mt += 0.7) at(Math.floor(L + Math.cos(yt * Math.PI / 4) * Mt), Math.floor(N + Math.sin(yt * Math.PI / 4) * Mt), S.sun, n.sun.o, vc);
      }
    }
    D(L, N, W, (P, lt, ut, gt) => {
      if (ut * ut + gt * gt > W * W) return;
      const yt = ((ut * 0.643 + gt * 0.766) / W + 1) / 2;
      at(P, lt, pn((yt - 0.62) / 0.38) > cn(P, lt) ? S.sunEdge : S.sun, n.sun.o, fc);
    });
  }
  if (sc.forEach((L, N) => {
    const W = n.stars[N].o;
    if (W < 0.01) return;
    const P = Math.floor(L[0] * Z), lt = Math.floor(L[1] * Z), ut = F ? (Math.floor(pt / 300) + N * 3) % 6 : 0;
    if (ut === 5) return;
    const gt = Math.round(L[2] * Z * (ut === 4 ? 0.3 : ut < 2 ? 1 : 0.6));
    at(P, lt, S.star, W, rr);
    for (let yt = 1; yt <= gt; yt++) {
      const Mt = yt === gt && gt > 1 ? ze(S.star, n.sky, 0.5) : S.star;
      at(P - yt, lt, Mt, W, rr), at(P + yt, lt, Mt, W, rr), at(P, lt - yt, Mt, W, rr), at(P, lt + yt, Mt, W, rr);
    }
  }), n.moon.o > 0.01) {
    const L = Math.max(1.5, n.moon.d * Z * 0.37), N = n.moon.x * Z, W = n.moon.y * Z + (F && mt > 0.4 ? -1 : 0), P = N + 0.547 * L, lt = W - 0.503 * L, ut = 0.82 * L, gt = ze(S.moon, "#ffffff", 0.6);
    D(N, W, L, (yt, Mt, Wt, Ut) => {
      if (Wt * Wt + Ut * Ut > L * L) return;
      const pa = yt + 0.5 - P, jt = Mt + 0.5 - lt;
      pa * pa + jt * jt <= ut * ut || at(yt, Mt, pn((Ut + L) / (2 * L) * 1.1 - 0.1) > cn(yt, Mt) ? S.moon : gt, n.moon.o, hc);
    });
  }
  const Bt = Math.max(2, Math.round(15.65 * Z)), rt = Math.max(1, Math.round(5.87 * Z * 0.5));
  lc.forEach((L, N) => {
    const W = n.rain[N];
    let P = W.dy, lt = W.o;
    if (lt < 0.01) return;
    if (F) {
      const yt = (pt / 950 + N / 3) % 1;
      P += -5 + yt * 14, lt *= yt < 0.18 ? yt / 0.18 : yt > 0.72 ? (1 - yt) / 0.28 : 1;
    }
    const ut = (L[0] + 3 + Q) * Z, gt = (L[1] + P) * Z;
    for (let yt = 0; yt < Bt; yt++) for (let Mt = 0; Mt < rt; Mt++) at(Math.floor(ut - 0.208 * yt) + Mt, Math.floor(gt) + yt, S.rain, lt, gc);
  });
  const Ft = Math.max(0, Math.round(7.34 * Z / 2.6));
  if (dc.forEach((L, N) => {
    const W = n.snow[N];
    let P = W.dy, lt = 0, ut = W.o;
    if (ut < 0.01) return;
    if (F) {
      const Mt = (pt / 3200 + N / 5) % 1;
      P += -6 + Mt * 14, lt = 1.5 * V(O * (Mt * 1.5 + N / 5)), ut *= Mt < 0.2 ? Mt / 0.2 : Mt > 0.75 ? (1 - Mt) / 0.25 : 1;
    }
    const gt = Math.floor((L[0] + 3.67 + lt + Q) * Z), yt = Math.floor((L[1] + 3.67 + P) * Z);
    at(gt, yt, S.snow, ut, dn);
    for (let Mt = 1; Mt <= Ft; Mt++)
      at(gt - Mt, yt, S.snow, ut, dn), at(gt + Mt, yt, S.snow, ut, dn), at(gt, yt - Mt, S.snow, ut, dn), at(gt, yt + Mt, S.snow, ut, dn), Ft > 1 && Mt < Ft && (at(gt - Mt, yt - Mt, S.snow, ut, dn), at(gt + Mt, yt - Mt, S.snow, ut, dn), at(gt - Mt, yt + Mt, S.snow, ut, dn), at(gt + Mt, yt + Mt, S.snow, ut, dn));
  }), n.bolt.o > 0.01)
    if (z >= 30) {
      const L = 39 + Q, N = 50 + n.bolt.dy;
      for (let W = Math.floor(N * Z); W <= (N + 28) * Z; W++) for (let P = Math.floor(L * Z); P <= (L + 13) * Z; P++)
        Sp(ku, (P + 0.5) / Z - L, (W + 0.5) / Z - N) && at(P, W, S.sun, n.bolt.o, Ts);
    } else {
      const L = z / 18, N = 7, W = 10 + Math.round(n.bolt.dy * 0.2);
      yu.forEach((P, lt) => P.split("").forEach((ut, gt) => {
        if (ut !== "#") return;
        const yt = Math.floor((N + gt) * L), Mt = Math.floor((W + lt) * L);
        for (let Wt = Mt; Wt < Math.max(Mt + 1, Math.floor((W + lt + 1) * L)); Wt++) for (let Ut = yt; Ut < Math.max(yt + 1, Math.floor((N + gt + 1) * L)); Ut++) at(Ut, Wt, S.sun, n.bolt.o, Ts);
      }));
    }
  if (n.cloud.o > 0.01) {
    const L = Math.max(3, n.cloud.w * Z), N = L * 0.6665, W = (n.cloud.x + Q) * Z - L / 2, P = (n.cloud.y + K) * Z - N / 2, lt = ze(S.cloudDay, S.cloudNight, Math.round(n.cloud.f * 4) / 4), ut = ze(lt, "#000000", 0.16);
    for (let gt = Math.max(0, Math.floor(P) - 1); gt <= Math.min(z - 1, P + N + 1); gt++) for (let yt = Math.max(0, Math.floor(W) - 1); yt <= Math.min(z - 1, W + L + 1); yt++) {
      const Mt = (yt + 0.5 - W) / L, Wt = (gt + 0.5 - P) / L;
      yd(Mt, Wt) && at(yt, gt, !yd(Mt, Wt + 1 / L) || pn((Wt - 0.42) / 0.25) * 0.8 > cn(yt, gt) ? ut : lt, n.cloud.o, mc);
    }
  }
  return Tp(it, nt, z, z, { oneBit: u, ink: x, paper: k, snowInk: !n.night });
}
function Tp(n, l, i, u, { oneBit: b, ink: x, paper: k, snowInk: E }) {
  const F = new Uint8ClampedArray(i * u * 4), S = vd(x), V = vd(k);
  for (let O = 0; O < u; O++) for (let z = 0; z < i; z++) {
    const Z = O * i + z, pt = l[Z];
    if (n[Z] == null) continue;
    let et = vd(n[Z]);
    if (b) {
      let Q;
      pt === gc || pt === vc ? Q = !0 : pt === dn ? Q = E : pt === rr || pt === Ts ? Q = !1 : Q = Math.round((0.2126 * et[0] + 0.7152 * et[1] + 0.0722 * et[2]) / 255 * 4) / 4 <= cn(z, O), (pt === fc || pt === hc || pt === mc || pt === Ts) && (z > 0 && l[Z - 1] !== pt || z < i - 1 && l[Z + 1] !== pt || O > 0 && l[Z - i] !== pt || O < u - 1 && l[Z + i] !== pt) && (Q = !0), et = Q ? S : V;
    }
    F[Z * 4] = et[0], F[Z * 4 + 1] = et[1], F[Z * 4 + 2] = et[2], F[Z * 4 + 3] = 255;
  }
  return { w: i, h: u, data: F };
}
const Mu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Su = (n) => Td(n, !1).split("/")[0], qd = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let l = Math.imul(n ^ n >>> 15, 1 | n);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, Cu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Tu = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Lu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Au = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Eu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], _u = [".##", "##.", ".#.", "#.."];
function Lp(n, { width: l, height: i, colors: u, wave: b = 0.38, soft: x = 6, glow: k = 0.6 }) {
  const E = { ...fn, dawn: "#e5a77e", ...u }, F = Mp(E), S = l, V = i, O = S / 6, z = O / 2, Z = Math.PI * 2, pt = n.length ? n : [{ cond: "cloudy", night: !1 }], et = [...Array(12)].map((dt, wt) => {
    const it = pt[Math.min(wt, pt.length - 1)], nt = Su(it.cond), at = wt % 2 === 1;
    return { cond: it.cond, k: nt, night: at, sky: F[nt][at ? 1 : 0], cover: Mu[nt] };
  }), Q = (dt) => V * (0.5 - b * Math.cos(Z * (dt / O - 0.25)));
  return { C: E, S: et, W: S, H: V, cw: O, sw: z, TAU: Z, yb: Q, side: (dt, wt, it) => {
    const nt = (dt ? Q(wt) - it : it - Q(wt)) / Math.max(3, x * 1.4) + 0.5;
    return nt <= 0 ? 0 : nt >= 1 ? 1 : nt;
  }, glowAt: (dt) => {
    const wt = ((dt / O - 0.25) % 1 + 1) % 1, it = Math.max(0, Math.min(5, Math.round(dt / O - 0.25))), nt = Math.max(0, Math.min(5, Math.round(dt / O - 0.75))), at = 1 - (et[2 * it].cover + et[2 * nt + 1].cover) / 2, D = Math.sin(Math.PI * Math.min(1, Math.max(0, Q(dt) / V)));
    return { c: wt < 0.5 ? E.dusk : E.dawn, a: k * (0.2 + 0.8 * at) * D * D };
  }, soft: x, tw: O * 0.3, sy: V / 90 };
}
function Ap(n, { clock: l = 0, ambient: i = !1, seed: u = 1 }) {
  const { S: b, sw: x, side: k, C: E, TAU: F, sy: S } = n, V = l, O = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return b.forEach((z, Z) => {
    const pt = qd(u * 977 + Z * 131 + 7), et = (Z + 0.5) * x, Q = z.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[z.k] : 0;
    for (let K = 0; K < Q; K++) {
      const mt = et + (pt() - 0.5) * x * 1.6, dt = (6 + pt() * 76) * S, wt = pt() < 0.35, it = 1.8 + pt() * 1.6, nt = k(!0, mt, dt) * (wt ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(F * V / 2600 + K * 1.7 + Z) : 1);
      nt >= 0.03 && O.stars.push({ x: mt, y: dt, big: wt, size: it, o: nt });
    }
    if (!z.night && (z.k === "clear" || z.k === "partly")) {
      const K = et + (pt() - 0.5) * x * 0.3, mt = Math.min(15, x * 0.29);
      O.suns.push({ x: K, y: 32 * S, rad: mt, halo: mt * 2.8 * (i ? 1 + 0.07 * Math.sin(F * V / 3600 + Z) : 1) });
    }
    if (z.night && (z.k === "clear" || z.k === "partly")) {
      const K = Math.min(0.78, x * 0.55 / 34), mt = et - 23 * K + (pt() - 0.5) * x * 0.2;
      O.moons.push({ x: mt + 23 * K, y: (4 + (i ? 0.8 * Math.sin(F * V / 5200 + Z) : 0)) * S + 23 * K, d: 46 * K });
    }
  }), b.forEach((z, Z) => {
    const pt = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[z.k];
    if (!pt) return;
    const et = qd(u * 577 + Z * 71 + 3), Q = (Z + 0.5) * x, K = z.k === "rain" || z.k === "storm" || z.night ? E.cloudNight : E.cloudDay, mt = z.night ? 0.82 : z.k === "storm" ? 0.75 : 1;
    for (let dt = 0; dt < pt; dt++) {
      const wt = x / 46 * (z.k === "partly" ? 0.85 : 0.75 + et() * 0.55), it = Q + (z.k === "partly" ? x * 0.12 : (et() - 0.5) * x * 1.05), nt = (z.k === "partly" ? 40 : 6 + et() * 26) * S, at = i ? 2.5 * Math.sin(F * V / 9e3 + Z * 1.3 + dt * 2.1) : 0, D = i ? 0.9 * Math.sin(F * V / 6100 + Z + dt) : 0;
      O.clouds.push({ x: it - 23 * wt + at, y: nt - 15.33 * wt + D, w: 46 * wt, h: 30.66 * wt, fill: K, o: mt * (pt > 1 && dt === 0 ? 0.85 : 1) });
    }
  }), b.forEach((z, Z) => {
    const pt = qd(u * 313 + Z * 29 + 11), et = (Z + 0.5) * x, Q = z.cond === "pouring" ? 16 : z.cond === "rainy" || z.cond === "hail" ? 9 : z.cond === "lightning-rainy" ? 12 : z.cond === "snowy-rainy" ? 5 : 0;
    for (let mt = 0; mt < Q; mt++) {
      let dt = et + (pt() - 0.5) * x * 1.05, wt = 44 + pt() * 36, it = 1;
      if (i) {
        const at = ((wt - 44 + V * 0.04) % 36 + 36) % 36;
        dt -= 0.21 * (at - (wt - 44)), wt = 44 + at, it = Math.min(1, at / 6, (36 - at) / 6);
      }
      wt *= S;
      const nt = k(z.night, dt, wt) * it;
      nt >= 0.05 && O.drops.push({ x: dt, y: wt, o: nt });
    }
    const K = z.cond === "snowy" ? 11 : z.cond === "snowy-rainy" ? 6 : 0;
    for (let mt = 0; mt < K; mt++) {
      let dt = et + (pt() - 0.5) * x * 1.05, wt = 40 + pt() * 44, it = 1;
      if (i) {
        const at = ((wt - 40 + V * 9e-3) % 44 + 44) % 44;
        wt = 40 + at, dt += 1.6 * Math.sin(F * V / 2800 + mt * 1.9 + Z), it = Math.min(1, at / 6, (44 - at) / 6);
      }
      wt *= S;
      const nt = k(z.night, dt, wt) * it;
      nt >= 0.05 && O.flakes.push({ x: dt, y: wt, o: nt });
    }
    if (z.k === "fog") {
      const mt = z.night ? "#c8ccd6" : "#ffffff", dt = z.night ? 0.28 : 0.62, wt = i ? 4 * Math.sin(F * V / 8e3 + Z) : 0;
      for (let it = 0; it < 4; it++) O.fogs.push({ x: et - x * 0.75 + it % 2 * x * 0.18 + (it % 2 ? wt : -wt), y: (30 + it * 13) * S, w: x * 1.3, c: mt, a: dt });
    }
    if (z.k === "storm") {
      const mt = (V / 3400 + Z * 0.37) % 1;
      O.bolts.push({ x: et + (pt() - 0.5) * x * 0.3 - 5, y: 36 * S, o: i && !(mt < 0.05 || mt > 0.09 && mt < 0.12) ? 0.8 : 1 });
    }
  }), O;
}
function Du(n, l, i, u, b, x, k, E) {
  const { S: F, C: S, cw: V, yb: O, glowAt: z, soft: Z, tw: pt, sy: et } = n, Q = new Array(i * u), K = new Uint8Array(i * u), mt = new Uint8Array(i * u), dt = (L, N, W, P, lt) => {
    W == null || L < 0 || N < 0 || L >= i || N >= u || (P >= 1 || P > cn(L + 5, N + 3)) && (Q[N * i + L] = W, K[N * i + L] = lt);
  }, wt = (L, N, W, P) => {
    for (let lt = Math.max(0, Math.floor(N - W) - 1); lt <= Math.min(u - 1, N + W + 1); lt++) for (let ut = Math.max(0, Math.floor(L - W) - 1); ut <= Math.min(i - 1, L + W + 1); ut++) P(ut, lt, ut + 0.5 - L, lt + 0.5 - N);
  }, it = (L, N, W) => {
    for (let lt = 0; lt < L.length - 1; lt++) {
      const ut = (lt + N) * V;
      if (W < ut - pt / 2) return [L[lt], L[lt], 0];
      if (W <= ut + pt / 2) return [L[lt], L[lt + 1], (W - ut + pt / 2) / pt];
    }
    const P = L[L.length - 1];
    return [P, P, 0];
  }, nt = F.filter((L) => !L.night).map((L) => L.sky), at = F.filter((L) => L.night).map((L) => L.sky), D = Z / x, kt = 16 * et / x;
  for (let L = 0; L < i; L++) {
    const N = (L + 0.5) * b, W = O(N) / x, P = it(nt, 0.75, N), lt = it(at, 1.25, N), ut = z(N);
    for (let gt = 0; gt < u; gt++) {
      const yt = cn(L, gt), Mt = gt + 0.5 - W, Wt = (D > 0.01 ? pn(0.5 + Mt / D) : Mt > 0 ? 1 : 0) > yt;
      let Ut = Wt ? P[2] > yt ? P[1] : P[0] : lt[2] > yt ? lt[1] : lt[0];
      (Wt ? pn(((gt + 0.5) / u - 0.45) / 0.55) * 0.7 : pn(1 - (gt + 0.5) / (u * 0.55)) * 0.7) > cn(L + 2, gt + 5) && (Ut = Wt ? ze(Ut, "#ffffff", 0.18) : ze(Ut, "#000000", 0.25)), Wt && Mt >= 0 && Mt < kt && ut.a * 1.3 * (1 - Mt / kt) > cn(L + 6, gt + 1) && (Ut = ut.c), Q[gt * i + L] = Ut, mt[gt * i + L] = Wt ? 0 : 1;
    }
  }
  const st = ze(S.sun, "#ffffff", 0.55), Bt = ze(S.moon, "#ffffff", 0.6);
  l.stars.forEach((L) => {
    const N = Math.floor(L.x / b), W = Math.floor(L.y / x);
    if (N < 0 || W < 0 || N >= i || W >= u || !mt[W * i + N] || L.o < 0.15) return;
    const P = L.o > 0.45 ? S.star : ze(S.star, Q[W * i + N], 0.5), lt = L.big && L.o > 0.6 ? Math.floor(L.size / b) : 0;
    dt(N, W, P, 1, rr);
    for (let ut = 1; ut <= lt; ut++) [[N - ut, W], [N + ut, W], [N, W - ut], [N, W + ut]].forEach((gt) => {
      gt[0] >= 0 && gt[1] >= 0 && gt[0] < i && gt[1] < u && mt[gt[1] * i + gt[0]] && dt(gt[0], gt[1], P, 1, rr);
    });
  }), l.suns.forEach((L) => {
    const N = Math.max(1.5, L.rad / b), W = L.x / b, P = L.y / x, lt = L.halo / b * 0.85;
    if (wt(W, P, lt, (ut, gt, yt, Mt) => {
      const Wt = Math.sqrt(yt * yt + Mt * Mt);
      Wt > N && Wt < lt && !mt[gt * i + ut] && dt(ut, gt, st, 0.3 * (1 - (Wt - N) / (lt - N)), 0);
    }), E) {
      const ut = Math.floor(k / 500) % 2, gt = Math.max(1, N * 0.3);
      for (let yt = 0; yt < 8; yt++) if (yt % 2 === ut) for (let Mt = N + 1.2; Mt < N + 1.2 + gt; Mt += 0.7) dt(Math.floor(W + Math.cos(yt * Math.PI / 4) * Mt), Math.floor(P + Math.sin(yt * Math.PI / 4) * Mt), S.sun, 1, vc);
    }
    wt(W, P, N, (ut, gt, yt, Mt) => {
      yt * yt + Mt * Mt <= N * N && dt(ut, gt, pn(((Mt / N + 1) / 2 - 0.6) / 0.4) > cn(ut, gt) ? S.sunEdge : S.sun, 1, fc);
    });
  }), l.moons.forEach((L) => {
    const N = Math.max(1.5, L.d * 0.37 / b), W = L.x / b, P = L.y / x, lt = W + 0.547 * N, ut = P - 0.503 * N, gt = 0.82 * N;
    wt(W, P, N, (yt, Mt, Wt, Ut) => {
      if (Wt * Wt + Ut * Ut > N * N) return;
      const pa = yt + 0.5 - lt, jt = Mt + 0.5 - ut;
      pa * pa + jt * jt > gt * gt && dt(yt, Mt, pn((Ut + N) / (2 * N) * 1.1 - 0.1) > cn(yt, Mt) ? S.moon : Bt, 1, hc);
    });
  }), l.clouds.forEach((L) => {
    const N = Math.max(3, L.w / b), W = N * 0.6665, P = L.x / b, lt = L.y / x, ut = ze(L.fill, "#000000", 0.16);
    for (let gt = Math.max(0, Math.floor(lt) - 1); gt <= Math.min(u - 1, lt + W + 1); gt++) for (let yt = Math.max(0, Math.floor(P) - 1); yt <= Math.min(i - 1, P + N + 1); yt++) {
      const Mt = (yt + 0.5 - P) / N, Wt = (gt + 0.5 - lt) / N;
      yd(Mt, Wt) && dt(yt, gt, !yd(Mt, Wt + 1 / N) || pn((Wt - 0.42) / 0.25) * 0.8 > cn(yt, gt) ? ut : L.fill, L.o, mc);
    }
  }), l.fogs.forEach((L) => {
    const N = Math.floor(L.y / x), W = Math.max(N, Math.floor((L.y + 6 * et) / x) - 1), P = Math.floor(L.x / b), lt = Math.floor((L.x + L.w) / b);
    for (let ut = N; ut <= W; ut++) for (let gt = P; gt <= lt; gt++) {
      const yt = (gt - P) / Math.max(1, lt - P);
      dt(gt, ut, L.c, L.a * (yt < 0.25 ? yt / 0.25 : yt > 0.75 ? (1 - yt) / 0.25 : 1), 0);
    }
  });
  const rt = Math.max(2, Math.round(9 / x));
  l.drops.forEach((L) => {
    const N = L.x / b, W = Math.floor(L.y / x);
    for (let P = 0; P < rt; P++) dt(Math.floor(N - 0.208 * P * x / b), W + P, S.rain, L.o, gc);
  });
  const Ft = Math.max(0, Math.round(4.4 / b / 2.6));
  return l.flakes.forEach((L) => {
    const N = Math.floor(L.x / b), W = Math.floor(L.y / x);
    dt(N, W, S.snow, L.o, dn);
    for (let P = 1; P <= Ft; P++)
      dt(N - P, W, S.snow, L.o, dn), dt(N + P, W, S.snow, L.o, dn), dt(N, W - P, S.snow, L.o, dn), dt(N, W + P, S.snow, L.o, dn);
  }), l.bolts.forEach((L) => {
    if (b <= 3.5)
      for (let N = Math.floor(L.y / x); N <= (L.y + 24) / x; N++) for (let W = Math.floor(L.x / b); W <= (L.x + 11) / b; W++)
        Sp(Eu, (W + 0.5) * b - L.x, (N + 0.5) * x - L.y) && dt(W, N, S.sun, 1, Ts);
    else {
      const N = Math.round(L.x / b), W = Math.round(L.y / x);
      _u.forEach((P, lt) => P.split("").forEach((ut, gt) => {
        ut === "#" && dt(N + gt, W + lt, S.sun, 1, Ts);
      }));
    }
  }), { col: Q, ids: K };
}
function Bu(n, l) {
  const i = l.px, u = Math.max(6, Math.round(l.width / i)), b = Math.max(6, Math.round(l.height / i)), x = l.width / u, k = l.height / b, E = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, F = (Z) => {
    const pt = Lp(Z, l);
    return Du(pt, Ap(pt, { clock: E, ambient: l.ambient, seed: l.seed }), u, b, x, k, E, l.ambient);
  }, S = F(n), V = l.reveal == null ? 1 : pn(l.reveal);
  let O = S.col, z = S.ids;
  if (V < 1) {
    const Z = l.prev ? F(l.prev) : null, pt = V * (u + 12);
    O = new Array(u * b), z = new Uint8Array(u * b);
    for (let et = 0; et < u * b; et++) {
      const Q = et % u, K = et / u | 0;
      (l.reduce ? V : pn((pt - Q) / 12)) > cn(Q, K) ? (O[et] = S.col[et], z[et] = S.ids[et]) : Z ? (O[et] = Z.col[et], z[et] = Z.ids[et]) : (O[et] = null, z[et] = 255);
    }
  }
  return Tp(O, z, u, b, { oneBit: l.oneBit, ink: l.ink, paper: l.paper, snowInk: !1 });
}
function Ru(n, l, i) {
  const u = i.width, b = i.height, x = i.reveal == null ? 1 : pn(i.reveal), k = (z, Z) => {
    const pt = Lp(Z, i);
    Pu(z, pt, Ap(pt, i));
  };
  if (n.clearRect(0, 0, u, b), x >= 1) {
    k(n, l);
    return;
  }
  if (i.prev && k(n, i.prev), i.reduce) {
    n.save(), n.globalAlpha = x, k(n, l), n.restore();
    return;
  }
  const E = n.canvas, F = E.__wxOff || (E.__wxOff = document.createElement("canvas"));
  (F.width !== E.width || F.height !== E.height) && (F.width = E.width, F.height = E.height);
  const S = F.getContext("2d");
  S.setTransform(n.getTransform()), S.clearRect(0, 0, u, b), k(S, l);
  const V = x * (u + 64) - 64, O = S.createLinearGradient(V, 0, V + 64, 0);
  O.addColorStop(0, "rgba(0,0,0,1)"), O.addColorStop(1, "rgba(0,0,0,0)"), S.globalCompositeOperation = "destination-in", S.fillStyle = O, S.fillRect(0, 0, u, b), S.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(F, 0, 0), n.restore();
}
function Pu(n, l, i) {
  const { W: u, H: b, S: x, C: k, cw: E, yb: F, glowAt: S, soft: V, tw: O, sy: z } = l, Z = (st, Bt) => {
    const rt = vd(st);
    return "rgba(" + rt[0] + "," + rt[1] + "," + rt[2] + "," + Math.max(0, Math.min(1, Bt)).toFixed(3) + ")";
  }, pt = (st, Bt) => {
    const rt = n.createLinearGradient(0, 0, u, 0);
    rt.addColorStop(0, st[0]);
    for (let Ft = 0; Ft < st.length - 1; Ft++) {
      const L = (Ft + Bt) * E, N = (L - O / 2) / u, W = (L + O / 2) / u;
      N > 0 && N < 1 && rt.addColorStop(N, st[Ft]), W > 0 && W < 1 && rt.addColorStop(W, st[Ft + 1]);
    }
    return rt.addColorStop(1, st[st.length - 1]), rt;
  }, et = Math.max(24, Math.ceil(u / 4)), Q = (st, Bt) => {
    n.beginPath();
    for (let rt = 0; rt <= et; rt++) {
      const Ft = u * rt / et, L = st == null ? 0 : F(Ft) + st;
      rt ? n.lineTo(Ft, L) : n.moveTo(Ft, L);
    }
    for (let rt = et; rt >= 0; rt--) {
      const Ft = u * rt / et;
      n.lineTo(Ft, F(Ft) + Bt);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = pt(x.filter((st) => !st.night).map((st) => st.sky), 0.75), n.fillRect(0, 0, u, b);
  const K = n.createLinearGradient(0, 0, u, 0);
  for (let st = 0; st <= 64; st++) {
    const Bt = S(u * st / 64);
    K.addColorStop(st / 64, Z(Bt.c, Math.min(1, Bt.a)));
  }
  n.fillStyle = K;
  for (let st = 0; st < 8; st++)
    n.globalAlpha = 1 - st / 8, Q(st * 2 * z, (st + 1) * 2 * z);
  n.fillStyle = pt(x.filter((st) => st.night).map((st) => st.sky), 1.25);
  const mt = Math.max(0.5, V), dt = 6;
  n.globalAlpha = 1, Q(null, -mt);
  for (let st = 0; st < dt; st++)
    n.globalAlpha = 1 - (st + 0.5) / dt, Q(-mt + 2 * mt * st / dt, -mt + 2 * mt * (st + 1) / dt);
  n.globalAlpha = 1;
  const wt = new Path2D(Lu), it = new Path2D(Tu), nt = new Path2D(Cu), at = new Path2D(Au);
  n.fillStyle = k.star, i.stars.forEach((st) => {
    n.globalAlpha = st.o, st.big ? (n.save(), n.translate(st.x, st.y), n.scale(st.size, st.size), n.fill(wt), n.restore()) : (n.beginPath(), n.arc(st.x, st.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const D = ze(k.sun, "#ffffff", 0.55);
  i.suns.forEach((st) => {
    const Bt = n.createRadialGradient(st.x, st.y, 0, st.x, st.y, st.halo);
    Bt.addColorStop(0, Z(D, 0.42)), Bt.addColorStop(0.7, Z(D, 0)), n.fillStyle = Bt, n.beginPath(), n.arc(st.x, st.y, st.halo, 0, Math.PI * 2), n.fill();
    const rt = n.createLinearGradient(0, st.y - st.rad, 0, st.y + st.rad);
    rt.addColorStop(0.6, k.sun), rt.addColorStop(1, k.sunEdge), n.fillStyle = rt, n.beginPath(), n.arc(st.x, st.y, st.rad, 0, Math.PI * 2), n.fill();
  });
  const kt = ze(k.moon, "#ffffff", 0.6);
  i.moons.forEach((st) => {
    n.save(), n.translate(st.x - st.d / 2, st.y - st.d / 2), n.scale(st.d / 46, st.d / 46);
    const Bt = n.createLinearGradient(0, 6, 0, 40);
    Bt.addColorStop(0, kt), Bt.addColorStop(1, k.moon), n.fillStyle = Bt, n.fill(it), n.restore();
  }), i.clouds.forEach((st) => {
    n.save(), n.globalAlpha = st.o, n.translate(st.x, st.y), n.scale(st.w / 46, st.h / 30.66), n.translate(-4, -9.67), n.fillStyle = st.fill, n.fill(nt), n.restore();
  }), i.fogs.forEach((st) => {
    const Bt = n.createLinearGradient(st.x, 0, st.x + st.w, 0);
    Bt.addColorStop(0, Z(st.c, 0)), Bt.addColorStop(0.25, Z(st.c, st.a)), Bt.addColorStop(0.75, Z(st.c, st.a)), Bt.addColorStop(1, Z(st.c, 0)), n.fillStyle = Bt, n.fillRect(st.x, st.y, st.w, 6 * z);
  }), n.fillStyle = k.rain, i.drops.forEach((st) => {
    n.save(), n.globalAlpha = st.o, n.translate(st.x, st.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = k.snow, i.flakes.forEach((st) => {
    n.globalAlpha = st.o, n.beginPath(), n.arc(st.x, st.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = k.sun, i.bolts.forEach((st) => {
    n.save(), n.globalAlpha = st.o, n.translate(st.x, st.y), n.fill(at), n.restore();
  }), n.restore();
}
function Nu(n, l) {
  var Ir, ws, ar, id, rd, ml, gl;
  const i = (a) => n.getElementById(a), u = i("workoutView"), b = i("workoutNameInput");
  let x = !0;
  const k = i("homeClock");
  function E() {
    k && (k.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  E(), setInterval(E, 15e3);
  const F = i("createFlow"), S = i("createMovementsSlot"), V = i("createTimingSlot"), O = i("createFinishSlot"), z = i("movementStepSummary"), Z = i("timingStepSummary"), pt = i("finishStepSummary"), et = i("continueToTiming"), Q = i("continueToFinish"), K = i("finishMoveButton");
  let mt = !1, dt = [];
  function wt(a) {
    !a || dt.some((s) => s.node === a) || dt.push({ node: a, parent: a.parentNode, next: a.nextSibling });
  }
  function it(a, s) {
    a && (wt(a), s.appendChild(a));
  }
  function nt() {
    [...dt].reverse().forEach(({ node: a, parent: s, next: c }) => {
      s && (c && c.parentNode === s ? s.insertBefore(a, c) : s.appendChild(a));
    }), dt = [];
  }
  function at(a) {
    n.querySelectorAll(".createStep").forEach((s) => {
      s.classList.toggle("active", s.dataset.createStep === a);
    }), a === "timing" && (mt = !0), D();
  }
  function D() {
    var e, o;
    if (!_e) return;
    Qt[oe];
    const a = Vt.filter((r) => !r.hidden), s = a.filter((r) => r.kind !== "rest").length, c = a.filter((r) => r.kind === "rest").length;
    z.textContent = s ? s + " movement" + (s === 1 ? "" : "s") + (c ? " · " + c + " rest" + (c === 1 ? "" : "s") : "") : "No movements yet";
    const v = s > 0, C = n.querySelector('[data-open-step="timing"]'), R = n.querySelector('[data-open-step="finish"]');
    C.disabled = !v, et.disabled = !v, Z.textContent = v ? Hn(N.value) + " · " + Je(W.value) + " movement · " + Je(P.value) + " rest" : "Add a movement first", R.disabled = !(v && mt);
    const q = ((b == null ? void 0 : b.value) || "").trim(), t = [];
    (e = i("includeWarmupPreset")) != null && e.checked && t.push("warm-up"), (o = i("includeCooldownPreset")) != null && o.checked && t.push("cooldown"), pt.textContent = q ? q + (t.length ? " · " + t.join(" + ") : "") : t.length ? t.join(" + ") : "Name and optional extras";
  }
  function kt() {
    var h, p, m;
    F.hidden = !1, mt = !1;
    const a = n.querySelector(".editNameRow"), s = i("createMoveOptions"), c = n.querySelector(".timeTiles"), v = i("routineSummaryModal"), C = n.querySelector(".tempoRevealRow"), R = i("tempoExperiment"), q = (h = i("warmupList")) == null ? void 0 : h.closest("section"), t = i("movementCreatorLaunch"), e = i("movementCreator"), o = (p = i("strengthList")) == null ? void 0 : p.closest("section"), r = (m = i("cooldownList")) == null ? void 0 : m.closest("section");
    [s == null ? void 0 : s.querySelector(".createExtras"), q, t, e, o, r].forEach((g) => g && it(g, S)), [s, c, v, C, R].forEach((g) => it(g, V)), it(a, O), at("movements"), D();
  }
  function st() {
    nt(), F.hidden = !0, n.querySelectorAll(".createStep").forEach((a) => a.classList.remove("active"));
  }
  n.querySelectorAll("[data-open-step]").forEach((a) => a.addEventListener("click", () => {
    a.disabled || at(a.dataset.openStep);
  })), et.addEventListener("click", () => {
    et.disabled || at("timing");
  }), Q.addEventListener("click", () => at("finish")), K.addEventListener("click", () => i("saveWorkoutEdit").click());
  const Bt = { home: i("homeView"), workout: i("workoutView"), settings: i("settingsView") }, rt = i("homeNav"), Ft = i("settingsNav");
  function L(a) {
    Object.entries(Bt).forEach(([s, c]) => c.classList.toggle("active", s === a)), rt.classList.toggle("active", a === "home"), Ft.classList.toggle("active", a === "settings"), a === "home" && setTimeout(Rt, 400), a === "settings" && (requestAnimationFrame(() => Qa(n.querySelector(".tab.active"), !1)), Dr());
  }
  const N = i("totalTime"), W = i("workTime"), P = i("restTime"), lt = i("totalOut"), ut = i("workOut"), gt = i("restOut"), yt = i("totalFill"), Mt = i("workFill"), Wt = i("restFill"), Ut = i("roundsInput"), pa = i("roundsFill"), jt = i("roundsOut"), Rn = i("totalLabel"), hn = i("routineSummaryModal"), Pn = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let Ne = Pn.map((a) => ({ ...a })), Vt = [
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
  const Xt = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let wa = Xt.map((a) => ({ ...a }));
  const Nn = {
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
  }, It = ae(l.data), Qt = It.profiles;
  let oe = Qt[It.selected] ? It.selected : It.order.find((a) => Qt[a]) || "kettlebell";
  function ae(a) {
    const s = a && typeof a == "object" ? JSON.parse(JSON.stringify(a)) : {}, c = s.profiles && Object.keys(s.profiles).length ? s.profiles : JSON.parse(JSON.stringify(Nn)), v = (Array.isArray(s.order) ? s.order : Object.keys(c)).filter((C) => c[C]);
    return Object.keys(c).forEach((C) => {
      v.includes(C) || v.push(C);
    }), {
      v: 1,
      profiles: c,
      order: v,
      selected: s.selected || v[0],
      history: Array.isArray(s.history) ? s.history : [],
      checkins: (Array.isArray(s.checkins) ? s.checkins : La(s.energy)).map(lr),
      settings: { ...s.settings || {} }
    };
  }
  function La(a) {
    if (!Array.isArray(a)) return [];
    const s = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], c = [];
    return a.forEach((v) => {
      const C = new Date(v.at);
      if (isNaN(C)) return;
      const R = C.getFullYear() + "-" + String(C.getMonth() + 1).padStart(2, "0") + "-" + String(C.getDate()).padStart(2, "0"), q = C.getHours() < 14 ? "morning" : "evening";
      if (c.some((e) => e.date === R && e.slot === q)) return;
      const t = s.indexOf(v.value) + 1;
      t > 0 && c.push({ date: R, slot: q, mood: null, energy: t, at: v.at });
    }), c;
  }
  function lr(a) {
    if (a.scale === 100) return a;
    const s = (c) => c == null ? null : Math.round((Number(c) - 1) / 5 * 100);
    return { ...a, mood: s(a.mood), energy: s(a.energy), scale: 100 };
  }
  function za() {
    _e || (It.selected = oe, It.order = It.order.filter((a) => Qt[a] && a !== In), l.save(It));
  }
  function te() {
    return It.settings;
  }
  function Le(a) {
    const s = Qt[a];
    if (!s) return;
    oe = a;
    const c = i("workoutNameInput");
    if (c && (c.value = s.name), N.value = s.total, W.value = s.work, P.value = s.rest, Ut.value = s.rounds || 1, s.customSequence) {
      const v = (s.sequence || []).map((R) => ({ ...R })), C = (R) => v.filter((q) => q.presetRole === R).map(({ presetRole: q, ...t }) => t);
      Ne = (s.warmup || C("warmup")).map((R) => ({ ...R })), wa = (s.cooldown || C("cooldown")).map((R) => ({ ...R })), Vt = v.filter((R) => !R.presetRole), ni(s.preset || "movement", !1);
    } else
      N.min = 3, N.max = 40, N.step = 1, W.min = 20, W.max = 60, W.step = 5, P.min = 5, P.max = 30, P.step = 5, Ne = (s.warmup || Pn).map((v) => ({ ...v })), wa = (s.cooldown || Xt).map((v) => ({ ...v })), Vt = s.strength.map((v) => Array.isArray(v) ? (([C, R, q, t = !1]) => ({ id: C, name: R, group: q, kind: "work", hidden: !!t }))(v) : { ...v });
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((v) => v.classList.toggle("active", v.dataset.workout === a)), Me();
  }
  function dr(a, s, c) {
    const v = a.getBoundingClientRect(), C = v.width / 2, R = v.height / 2, q = s - C, t = c - R;
    let e = 1 / 0, o = 1 / 0;
    q !== 0 && (e = C / Math.abs(q)), t !== 0 && (o = R / Math.abs(t));
    const r = Math.min(Math.max(1 / Math.min(e, o), 0), 1);
    let d = Math.atan2(t, q) * (180 / Math.PI) + 90;
    return d < 0 && (d += 360), { edge: r, angle: d };
  }
  function to(a, s, c = !1) {
    const v = a.getBoundingClientRect(), C = s.clientX - v.left, R = s.clientY - v.top, { edge: q, angle: t } = dr(a, C, R), e = c ? 100 : q * 100;
    a.style.setProperty("--edge-proximity", e.toFixed(3)), a.style.setProperty("--cursor-angle", t.toFixed(3) + "deg"), a.classList.toggle("borderGlowActive", c || e >= 30);
  }
  function cr(a) {
    a.addEventListener("pointermove", (c) => to(a, c, !1)), a.addEventListener("pointerenter", (c) => to(a, c, !1)), a.addEventListener("pointerdown", (c) => to(a, c, !0));
    const s = () => {
      a.classList.remove("borderGlowActive"), a.style.setProperty("--edge-proximity", "0");
    };
    a.addEventListener("pointerleave", s), a.addEventListener("pointerup", s), a.addEventListener("pointercancel", s);
  }
  cr(i("addWorkoutPanel"));
  let _e = !1, In = null;
  function Zt(a) {
    return String(a ?? "").replace(/[&<>"']/g, (s) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[s]);
  }
  function Ls(a) {
    return a.summary ? a.summary : a.customSequence ? Hn(a.total) + " · custom move" : Hn(a.total) + " · " + Je(a.work) + " / " + Je(a.rest) + " · warm-up + cooldown";
  }
  function mn(a, s) {
    var R;
    const c = document.createElement("article");
    c.className = "workoutPanel", c.dataset.workout = a, c.tabIndex = 0;
    const v = s.activityCount ?? (((R = s.sequence) == null ? void 0 : R.length) || 0);
    c.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + Zt(s.name) + '</div><div class="sub">' + Zt(Ls(s)) + '</div><span class="sourceTag">' + Zt(s.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (v ? v + " activities" + ((s.rounds || 1) > 1 ? " × " + s.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + Zt(s.name) + "</div></div>";
    const C = i("addWorkoutPanel");
    return i("workoutGallery").insertBefore(c, C), cr(c), c.addEventListener("click", (q) => {
      q.target.closest("button") || Le(a);
    }), c.addEventListener("keydown", (q) => {
      (q.key === "Enter" || q.key === " ") && !q.target.closest("button") && (q.preventDefault(), Le(a));
    }), c.querySelector(".seeWorkoutBtn").addEventListener("click", (q) => {
      q.stopPropagation(), Le(a), Ds(!1);
    }), c.querySelector(".startWorkoutBtn").addEventListener("click", (q) => {
      q.stopPropagation(), Le(a), Na();
    }), c;
  }
  function Ge() {
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((a) => a.remove()), It.order.forEach((a) => {
      Qt[a] && mn(a, Qt[a]);
    }), n.querySelectorAll(".workoutPanel[data-workout]").forEach((a) => a.classList.toggle("active", a.dataset.workout === oe));
  }
  Ge(), i("addWorkoutPanel").addEventListener("keydown", (a) => {
    (a.key === "Enter" || a.key === " ") && (a.preventDefault(), i("addWorkoutPanel").click());
  }), i("addWorkoutPanel").addEventListener("click", () => {
    _e = !0, In = "custom-" + Date.now(), Qt[In] = {
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
    }, Le(In), Ds(!0);
  });
  let Ot = [], $t = 0, Ue = 0, ne = 1, At = !1, se = null, ue = null, me = !1, Ga = It.settings.upcomingCount ?? "all", pr = "movement";
  function Ei(a, s, c) {
    return (Number(a) - s) / (c - s) * 100;
  }
  function Je(a) {
    const s = Math.max(0, Number(a) || 0);
    return s >= 3600 && s % 3600 === 0 ? s / 3600 + " hr" : s >= 60 && s % 60 === 0 ? s / 60 + " min" : s >= 60 ? Math.round(s / 60) + " min" : Math.round(s) + " sec";
  }
  function Hn(a) {
    const s = Math.max(0, Number(a) || 0);
    return s >= 60 && s % 60 === 0 ? s / 60 + " hr" : s >= 60 ? Math.floor(s / 60) + " hr " + s % 60 + " min" : s + " min";
  }
  function _i() {
    yt.style.width = Ei(N.value, Number(N.min), Number(N.max)) + "%", Mt.style.width = Ei(W.value, Number(W.min), Number(W.max)) + "%", Wt.style.width = Ei(P.value, Number(P.min), Number(P.max)) + "%", ut.textContent = Je(W.value), gt.textContent = Je(P.value);
    const a = Number(Ut.value) || 1;
    pa.style.width = Ei(a, 1, 10) + "%", Rn.textContent = a > 1 ? "Time per round" : "Total time";
  }
  function ur(a) {
    return a.filter((s) => !s.hidden);
  }
  function Fn(a) {
    const s = Math.max(0, Math.round(Number(a) || 0)), c = Math.floor(s / 3600), v = Math.floor(s % 3600 / 60), C = s % 60;
    return (c ? c + ":" + String(v).padStart(2, "0") : v) + ":" + String(C).padStart(2, "0");
  }
  function Wr(a) {
    let s;
    try {
      s = new URL(String(a || "").trim());
    } catch {
      return null;
    }
    const c = s.hostname.replace(/^(www|m|music)\./, "");
    let v = null;
    if (c === "youtu.be") v = s.pathname.slice(1).split("/")[0];
    else if (/^youtube(-nocookie)?\.com$/.test(c))
      if (s.pathname === "/watch") v = s.searchParams.get("v");
      else {
        const t = s.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        t && (v = t[2]);
      }
    if (!v || !/^[\w-]{11}$/.test(v)) return null;
    const C = (t) => {
      if (!t) return 0;
      if (/^\d+$/.test(t)) return Number(t);
      const e = t.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return e ? (Number(e[1]) || 0) * 3600 + (Number(e[2]) || 0) * 60 + (Number(e[3]) || 0) : 0;
    }, R = C(s.searchParams.get("t") || s.searchParams.get("start")), q = C(s.searchParams.get("end"));
    return { id: v, start: R, end: q > R ? q : null };
  }
  function ai(a, s) {
    if (a.useVideoLength === !1) return Math.max(5, Number(a.duration) || s || 300);
    const c = Number(a.start) || 0, v = Number(a.end) || Number(a.videoDuration) || 0;
    return v > c ? Math.round(v - c) : Number(a.duration) || 300;
  }
  function On(a, s) {
    const c = Math.max(0, Number(a) || 0);
    return Math.round(s === "hour" ? c * 3600 : s === "min" ? c * 60 : c);
  }
  function ni(a, s = !0) {
    pr = a, n.querySelectorAll(".createPresetBtn").forEach((v) => v.classList.toggle("active", v.dataset.movePreset === a));
    const c = Qt[oe];
    c && (c.preset = a), a === "work" ? (N.min = 30, N.max = 480, N.step = 30, W.min = 300, W.max = 7200, W.step = 300, P.min = 60, P.max = 1800, P.step = 60, s && (N.value = 60, W.value = 1500, P.value = 300), i("addMovementUnit").value = "min", i("addMovementDuration").value = 25, i("addRestUnit").value = "min", i("addRestDuration").value = 5) : (N.min = 3, N.max = 40, N.step = 1, W.min = 20, W.max = 60, W.step = 5, P.min = 5, P.max = 30, P.step = 5, s && (N.value = 20, W.value = 45, P.value = 15), i("addMovementUnit").value = "sec", i("addMovementDuration").value = 45, i("addRestUnit").value = "sec", i("addRestDuration").value = 30), _i();
  }
  function fr(a, s) {
    const c = pr === "work";
    return a.map((v, C) => ({ ...v, id: s + "-" + C + "-" + Date.now().toString(36), useGlobalTiming: !c, duration: c ? 60 : Number(W.value) }));
  }
  function Di() {
    const a = Qt[oe];
    a != null && a.customSequence && (a.includeWarmup = i("includeWarmupPreset").checked, a.includeCooldown = i("includeCooldownPreset").checked, a.includeWarmup && !Ne.length && (Ne = fr(Pn, "warm")), a.includeCooldown && !wa.length && (wa = fr(Xt, "cool")), Me());
  }
  function As() {
    const a = i("upcomingCountSetting");
    if (!a) return;
    const s = Math.max(1, Ot.length - 1), c = Ga;
    a.innerHTML = "";
    for (let R = 1; R <= s; R++) {
      const q = document.createElement("option");
      q.value = String(R), q.textContent = String(R), a.appendChild(q);
    }
    const v = document.createElement("option");
    v.value = "all", v.textContent = "All", a.appendChild(v);
    const C = c === "all" ? "all" : String(Math.min(Number(c) || 1, s));
    a.value = C, Ga = C === "all" ? "all" : Number(C);
  }
  function Me() {
    Number(N.value) * 60;
    const a = Number(W.value), s = Number(P.value), c = Qt[oe], v = !!(c != null && c.customSequence), C = (v ? !c.includeWarmup : c != null && c.warmupOff) ? [] : ur(Ne), R = ur(Vt), q = v && !c.includeCooldown ? [] : ur(wa);
    if (c && (c.total = Number(N.value), c.work = a, c.rest = s, c.rounds = Number(Ut.value) || 1, c.customSequence ? (c.sequence = Vt.map((xt) => ({ ...xt })), c.warmup = Ne.map((xt) => ({ ...xt })), c.cooldown = wa.map((xt) => ({ ...xt }))) : (c.strength = Vt.map((xt) => ({ ...xt })), c.warmup = Ne.map((xt) => ({ ...xt })), c.cooldown = wa.map((xt) => ({ ...xt })))), c != null && c.customSequence) {
      const xt = [...C.map((ct) => ({ ...ct, section: "warmup" })), ...R, ...q.map((ct) => ({ ...ct, section: "cooldown" }))].map((ct) => {
        if (ct.kind === "video") return { ...ct, duration: ai(ct, a), rest: 0 };
        if (ct.kind === "rest") {
          const Et = ct.useGlobalTiming === !0 ? s : Number(ct.duration) || s;
          return { ...ct, duration: Et, rest: 0 };
        }
        const Pt = ct.useGlobalTiming === !1 && Number(ct.duration) || a;
        return { ...ct, duration: Pt, rest: 0 };
      });
      c.autoRest && Number(c.autoRestDuration) > 0 ? (Ot = [], xt.forEach((ct, Pt) => {
        Ot.push(ct);
        const Et = xt[Pt + 1];
        ct.kind !== "rest" && Et && Et.kind !== "rest" && Ot.push({
          id: "auto-rest-" + Pt,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(c.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : Ot = xt;
    } else
      Ot = [...C.map((xt) => ({ ...xt, section: "warmup" })), ...R, ...q.map((xt) => ({ ...xt, section: "cooldown" }))].map((xt) => xt.kind === "video" ? { ...xt, duration: ai(xt, a), rest: 0 } : xt.kind === "rest" ? { ...xt, duration: xt.useGlobalTiming === !0 ? s : Number(xt.duration) || s, rest: 0 } : { ...xt, duration: xt.useGlobalTiming === !1 && Number(xt.duration) || a, rest: s }), Ot.forEach((xt, ct) => {
        var Pt;
        ((Pt = Ot[ct + 1]) == null ? void 0 : Pt.kind) === "rest" && (xt.rest = 0);
      }), Ot.length && (Ot[Ot.length - 1].rest = 0);
    const t = Math.max(1, Math.min(10, Number(Ut.value) || 1)), e = Ot, o = (xt) => t <= 1 ? null : xt.section === "warmup" || xt.presetRole === "warmup" ? "first" : xt.section === "cooldown" || xt.presetRole === "cooldown" ? "last" : xt.kind === "video" && (xt.videoRounds === "first" || xt.videoRounds === "last") ? xt.videoRounds : null, r = (xt) => !!o(xt), d = e.filter((xt) => !r(xt)), h = e.filter(r), p = d.length, m = d.reduce((xt, ct) => xt + ct.duration + ct.rest, 0), g = h.reduce((xt, ct) => xt + ct.duration + ct.rest, 0), M = [
      h.some((xt) => xt.section === "warmup" || xt.presetRole === "warmup") && "warm-up",
      h.some((xt) => xt.section === "cooldown" || xt.presetRole === "cooldown") && "cooldown",
      h.some((xt) => xt.kind === "video" && !xt.section && !xt.presetRole) && "video"
    ].filter(Boolean), A = M.length > 1 ? M.slice(0, -1).join(", ") + " & " + M[M.length - 1] : M[0] || "";
    Ot = [];
    const _ = (xt, ct) => {
      const Pt = o(xt);
      return !Pt || (Pt === "first" ? ct === 1 : ct === t);
    };
    for (let xt = 1; xt <= t; xt++)
      if (e.filter((ct) => _(ct, xt)).forEach((ct, Pt) => Ot.push({ ...ct, id: ct.id + (t > 1 ? "-r" + xt : ""), round: xt, roundIndex: Pt })), xt < t && p)
        if (c != null && c.customSequence)
          Ot.push({ id: "round-break-" + xt, name: "Rest", group: "Round " + (xt + 1) + " next", kind: "rest", hidden: !1, duration: s, rest: 0, round: xt, roundIndex: p, roundBreak: !0 });
        else {
          const ct = Ot[Ot.length - 1];
          ct.rest = s, ct.roundBreakAfter = !0;
        }
    _i();
    const B = Ot.reduce((xt, ct) => xt + ct.duration + ct.rest, 0), Y = Math.round(m / 60), $ = Math.round(B / 60), H = t > 1 ? Hn(Y) + " × " + t + " rounds" + (g ? " + " + Je(g) + " " + A : "") + " (" + Hn($) + ")" : Hn($), G = [C.length ? "warm-up" : "", q.length ? "cooldown" : ""].filter(Boolean), j = c != null && c.customSequence ? H + " · " + p + " items" + (G.length && !(t > 1 && g) ? " · " + G.join(" + ") : "") : H + " · " + Je(a) + " / " + Je(s) + (G.length && !(t > 1 && g) ? " · " + G.join(" + ") : "");
    lt.textContent = Je(m);
    const ft = Ot.filter((xt) => !xt.roundBreak).length, U = t > 1 ? ft + " activities · " + t + " rounds" : p + " activities";
    jt.textContent = t > 1 ? t + " rounds · " + Hn($) + " total" : "1 round", i("roundsCount").textContent = t, n.querySelectorAll("[data-rounds-step]").forEach((xt) => {
      xt.disabled = Number(xt.dataset.roundsStep) < 0 ? t <= 1 : t >= 10;
    }), c && (c.summary = j, c.activityCount = p);
    const _t = n.querySelector(".workoutPanel.active .sub");
    _t && (_t.textContent = j), hn.textContent = j, Ea(), n.querySelectorAll(".workoutPanel.active .activityCount").forEach((xt) => xt.textContent = U), _i(), Bi(), Hi(), Cn(), As(), _e && D(), Bt.workout.classList.contains("active") && !se && js();
  }
  const Ua = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', eo = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', Lo = {
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
  }, ia = (a) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (Lo[a] || "") + "</svg>";
  n.querySelectorAll("[data-icon]").forEach((a) => {
    a.innerHTML = ia(a.dataset.icon);
  });
  let Ye = null, We = null;
  function jr(a) {
    return a = Math.max(1, Number(a) || 0), a >= 3600 && a % 3600 === 0 ? { value: a / 3600, unit: "hour" } : a >= 60 && a % 60 === 0 ? { value: a / 60, unit: "min" } : { value: a, unit: "sec" };
  }
  function gn(a = !1) {
    const s = n.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    s && (s.focus({ preventScroll: !0 }), a && s.select());
  }
  function Ao(a, s, c = {}) {
    const v = a.kind === "rest", C = a.kind === "video", R = C ? a.useVideoLength !== !1 : v ? a.useGlobalTiming === !0 : a.useGlobalTiming !== !1, q = Number(v ? P.value : W.value), t = jr(C ? a.useVideoLength === !1 ? a.duration : ai({ ...a, useVideoLength: !0 }) : R ? q : a.duration || q), e = C && (Number(a.videoDuration) > 0 || Number(a.end) > 0), o = C ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + Zt(a.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Zt(a.autoName ? "" : a.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([B, Y]) => '<option value="' + B + '"' + ((a.videoRounds || "every") === B ? " selected" : "") + ">" + Y + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Zt(a.name) + '" placeholder="' + (v ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + Zt(a.group) + '" placeholder="' + (v ? "Rest" : "e.g. Glutes + legs") + '"></label>', r = C ? "Play the whole " + (Number(a.start) > 0 || Number(a.end) > 0 ? "clip" : "video") + (e ? " · " + Fn(ai({ ...a, useVideoLength: !0 })) : "") : "Use global timing · " + Je(q), d = document.createElement("div");
    d.className = "moveRow editing" + (c.sheet ? " inSheet" : ""), d.dataset.index = s, d.dataset.id = a.id;
    const h = c.isNew ?? (We == null ? void 0 : We.item) === a, p = c.sheet ? '<div class="moveEditActions sheetActions">' + (h ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (a.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + Zt(a.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (h ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    d.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (C ? " videoFields" : "") + '">' + o + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (R ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + Zt(r) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + t.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((B) => '<option value="' + B + '"' + (B === t.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[B] + "</option>").join("") + "</select></div></div>" + p + "</div>";
    const m = (B) => d.querySelector("[data-f=" + B + "]"), g = () => {
      const B = m("global").checked;
      m("dur").disabled = B, m("unit").disabled = B, d.querySelector(".creatorDurationRow").classList.toggle("isDisabled", B);
    };
    m("global").addEventListener("change", g), g();
    const M = () => {
      var B;
      if (c.sheet) {
        (B = c.onCancel) == null || B.call(c);
        return;
      }
      h && oi(), Ye = null, Me();
    }, A = () => {
      var $;
      if (C) {
        _();
        return;
      }
      const B = m("name").value.trim();
      if (!B) {
        m("name").focus();
        return;
      }
      a.name = B, a.group = m("group").value.trim() || (v ? "Rest" : "Movement");
      const Y = m("global").checked;
      if (a.useGlobalTiming = Y, Y || (a.duration = Math.max(v ? 5 : 1, On(m("dur").value, m("unit").value))), c.sheet) {
        ($ = c.onSaved) == null || $.call(c);
        return;
      }
      h && (We = null), Ye = null, Me(), ce(h ? v ? "Rest added" : "Movement added" : "Movement updated");
    }, _ = () => {
      var G;
      const B = m("url").value.trim(), Y = Wr(B);
      if (!Y) {
        m("urlError").hidden = !1, m("url").classList.add("invalid"), m("url").focus();
        return;
      }
      const $ = Y.id !== a.videoId;
      a.url = B, a.videoId = Y.id, a.start = Y.start, a.end = Y.end, $ && (a.videoDuration = null, a.videoError = null);
      const H = m("name").value.trim();
      a.autoName = !H, a.name = H || ($ ? "" : a.name) || a.videoTitle || "YouTube video", a.group = "Video", a.videoRounds = m("rounds").value, a.useVideoLength = m("global").checked, a.useVideoLength || (a.duration = Math.max(5, On(m("dur").value, m("unit").value))), c.sheet ? (G = c.onSaved) == null || G.call(c) : (h && (We = null), Ye = null, Me(), ce(h ? "Video added" : "Video updated")), ($ || !a.videoDuration || a.autoName && !a.videoTitle) && Us(a);
    };
    if (C && m("url").addEventListener("input", () => {
      m("urlError").hidden = !0, m("url").classList.remove("invalid");
    }), d.querySelector("[data-a=cancel]").addEventListener("click", M), d.querySelector("[data-a=save]").addEventListener("click", A), c.sheet && !h) {
      d.querySelector("[data-a=hide]").addEventListener("click", () => {
        var Y;
        return (Y = c.onHide) == null ? void 0 : Y.call(c);
      });
      const B = d.querySelector("[data-a=remove]");
      la(B, B.querySelector(".removeFill"), 1200, () => {
        var Y;
        return (Y = c.onRemove) == null ? void 0 : Y.call(c);
      });
    }
    return d.addEventListener("keydown", (B) => {
      B.key === "Escape" && (B.preventDefault(), B.stopPropagation(), M()), B.key === "Enter" && B.target.matches("input") && (B.preventDefault(), A());
    }), d;
  }
  function ao(a, s) {
    const c = i(s);
    c.innerHTML = "", a.forEach((v, C) => {
      if (v === Ye && !Sn()) {
        c.appendChild(Ao(v, C));
        return;
      }
      const R = document.createElement("div");
      R.className = "moveRow" + (v.hidden ? " hidden" : "") + (v.kind === "rest" ? " restItem" : "") + (v.kind === "video" ? " videoItem" : "") + ($s(v) ? " noMeta" : ""), R.dataset.index = C, R.dataset.id = v.id;
      const q = v.kind === "rest" ? v.useGlobalTiming === !0 ? "Global timing" : Je(v.duration) : v.useGlobalTiming === !1 ? Je(v.duration) : "Global timing", t = v.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", e = v.kind === "video" ? v.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (v.useVideoLength === !1 ? "stops after " + Je(v.duration) : Number(v.videoDuration) > 0 || Number(v.end) > 0 ? Fn(ai(v)) : "plays to the end") + (v.videoRounds === "first" ? " · first round only" : v.videoRounds === "last" ? " · last round only" : "") : v.group + " · " + q, o = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + Zt(v.name) + '. Drag, or use the up and down arrow keys">' + Ua + "</button>", r = '<div class="moveText"><div class="moveItemName">' + Zt(v.name) + t + '</div><div class="moveMeta">' + Zt(e) + "</div></div>", d = (m) => m.addEventListener("keydown", (g) => {
        var _, B;
        if (g.key !== "ArrowUp" && g.key !== "ArrowDown") return;
        g.preventDefault();
        const M = a.indexOf(v), A = M + (g.key === "ArrowUp" ? -1 : 1);
        A < 0 || A >= a.length || (a.splice(M, 1), a.splice(A, 0, v), Me(), (B = (_ = i(s).children[A]) == null ? void 0 : _.querySelector(".dragHandle")) == null || B.focus());
      });
      if (Sn()) {
        R.classList.add("phoneRow"), R.tabIndex = 0, R.setAttribute("role", "button"), R.setAttribute("aria-label", "Edit " + (v.name || "step")), R.innerHTML = o + r + '<span class="rowChevron" aria-hidden="true">›</span>';
        const m = R.querySelector(".dragHandle");
        m.addEventListener("pointerdown", (g) => qn(g, R, c, a)), d(m), R.addEventListener("click", (g) => {
          g.target.closest(".dragHandle") || so(v, a);
        }), R.addEventListener("keydown", (g) => {
          g.key === "Enter" && g.target === R && (g.preventDefault(), so(v, a));
        }), c.appendChild(R);
        return;
      }
      R.innerHTML = o + r + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + Zt(v.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (v.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + Zt(v.name) + '"><span class="removeFill"></span><span class="removeLabel">' + eo + "</span></button></div>", R.querySelector(".editBtn").addEventListener("click", () => {
        oi(), Ye = v, Me(), gn();
      }), R.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        v.hidden = !v.hidden, Me();
      });
      const h = R.querySelector(".removeBtn");
      la(h, h.querySelector(".removeFill"), 1200, () => {
        const m = a.indexOf(v);
        m < 0 || (a.splice(m, 1), Me(), ce("Removed " + v.name, { label: "Undo", run: () => {
          a.splice(Math.min(m, a.length), 0, v), Me();
        } }));
      });
      const p = R.querySelector(".dragHandle");
      p.addEventListener("pointerdown", (m) => qn(m, R, c, a)), d(p), c.appendChild(R);
    });
  }
  const be = () => {
    var a;
    return (a = window.matchMedia) == null ? void 0 : a.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, Eo = (a) => {
    var s;
    try {
      (s = navigator.vibrate) == null || s.call(navigator, a);
    } catch {
    }
  };
  function qn(a, s, c, v) {
    if (a.button !== void 0 && a.button !== 0) return;
    a.preventDefault();
    const C = a.currentTarget, R = a.pointerId, q = !be();
    try {
      C.setPointerCapture(R);
    } catch {
    }
    const t = s.closest(".exerciseScroller") || _o(s), e = c.style.position;
    c.style.position = "relative";
    const o = [...c.children].filter((ee) => ee.classList.contains("moveRow")), r = o.indexOf(s), d = parseFloat(getComputedStyle(c).rowGap) || 8, h = s.offsetHeight, p = h + d, m = o.map((ee) => ee.offsetTop), g = o.map((ee) => ee.offsetHeight), M = () => c.getBoundingClientRect().top, A = c.getBoundingClientRect().width, _ = a.clientY - (M() + m[r]), B = a.clientX;
    let Y = a.clientY, $ = a.clientX, H = M() + m[r], G = 0, j = 0, ft = 0, U = 1, _t = 0, xt = r, ct = !1, Pt = 0, Et = !1, ie = !1, Te = m[r];
    c.classList.add("reordering"), s.classList.add("dragging"), s.style.transition = "none", Eo(8);
    const Oa = () => {
      const ee = Y - _ + h / 2 - M();
      let fe = 0;
      return o.forEach((Pe, rn) => {
        rn !== r && ee > m[rn] + g[rn] / 2 && fe++;
      }), fe;
    }, xs = () => {
      o.forEach((ee, fe) => {
        if (fe === r) return;
        const Pe = r < xt && fe > r && fe <= xt ? -p : r > xt && fe >= xt && fe < r ? p : 0;
        ee.style.transform = Pe ? "translateY(" + Pe + "px)" : "";
      });
    }, Hr = () => {
      const ee = c.getBoundingClientRect(), fe = Math.abs($ - B) > Math.max(80, A * 0.3) || $ < ee.left - 24 || $ > ee.right + 24;
      fe !== ct && (ct = fe, s.classList.toggle("willReturn", fe), Eo(fe ? 10 : 4));
      const Pe = ct ? r : Oa();
      Pe !== xt && (xt = Pe, xs(), ct || Eo(4));
    }, wi = () => {
      if (xt === r) return m[r];
      const ee = o.filter((Pe, rn) => rn !== r);
      let fe = m[0];
      for (let Pe = 0; Pe < xt; Pe++) fe += ee[Pe].offsetHeight + d;
      return fe;
    }, xi = () => {
      const ee = q ? Math.min(Math.abs(G) / 40, 1) : 0, fe = q && !Et ? Math.max(-3, Math.min(3, ft * 0.6)) : 0;
      s.style.transform = "translate(" + j.toFixed(2) + "px," + (H - (M() + m[r])).toFixed(2) + "px) rotate(" + fe.toFixed(2) + "deg) scale(" + (U * (1 - 0.04 * ee)).toFixed(4) + "," + (U * (1 + 0.06 * ee)).toFixed(4) + ")";
    }, Kt = () => {
      Pt = requestAnimationFrame(Kt);
      const ee = $ - B, fe = Et ? M() + Te : Y - _, Pe = Et ? 0 : ct ? ee * 0.9 : Math.max(-22, Math.min(22, ee * 0.22)), rn = Et ? 1 : ct ? 0.97 : 1.035;
      if (!q) {
        H = fe, j = Et ? 0 : Pe, U = 1, xi(), Et && Oe();
        return;
      }
      const du = Et ? 0.24 : 0.2, cu = Et ? 0.62 : 0.68;
      G = (G + (fe - H) * du) * cu, H += G, ft = (ft + (Pe - j) * 0.16) * 0.7, j += ft, _t = (_t + (rn - U) * 0.22) * 0.6, U += _t, xi(), Et && Math.abs(G) < 0.15 && Math.abs(fe - H) < 0.5 && Math.abs(j) < 0.5 && Math.abs(U - 1) < 3e-3 && Oe();
    }, Ce = setInterval(() => {
      if (!t || Et) return;
      const ee = t.getBoundingClientRect(), fe = 56, Pe = Y < ee.top + fe ? -10 : Y > ee.bottom - fe ? 10 : 0;
      Pe && (t.scrollTop += Pe, Hr());
    }, 30);
    function Oe() {
      if (ie) return;
      ie = !0, cancelAnimationFrame(Pt);
      const ee = xt !== r, fe = s.dataset.id;
      if (c.classList.remove("reordering"), o.forEach((rn) => {
        rn.style.transition = "none", rn.style.transform = "";
      }), s.classList.remove("dragging", "willReturn"), c.style.position = e, ee) {
        const [rn] = v.splice(r, 1);
        v.splice(xt, 0, rn);
      }
      Me();
      const Pe = fe && c.querySelector('.moveRow[data-id="' + fe + '"]');
      Pe && q && Pe.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), ee && ce("Order saved");
    }
    const da = (ee) => {
      if (ee.pointerId === R) {
        if (ee.pointerType === "mouse" && ee.buttons === 0) {
          Bn();
          return;
        }
        Y = ee.clientY, $ = ee.clientX, Hr();
      }
    }, on = (ee) => {
      ee.pointerId === R && Bn();
    };
    function Bn() {
      Et || (window.removeEventListener("pointermove", da, !0), window.removeEventListener("pointerup", on, !0), window.removeEventListener("pointercancel", on, !0), C.removeEventListener("lostpointercapture", Bn), clearInterval(Ce), ct && xt !== r && (xt = r, xs()), Te = wi(), Et = !0, Eo(6), setTimeout(Oe, 800));
    }
    window.addEventListener("pointermove", da, !0), window.addEventListener("pointerup", on, !0), window.addEventListener("pointercancel", on, !0), C.addEventListener("lostpointercapture", Bn), Pt = requestAnimationFrame(Kt), xi();
  }
  function Bi() {
    var C, R, q, t;
    const a = Qt[oe], s = (C = i("warmupList")) == null ? void 0 : C.closest("section"), c = (R = i("cooldownList")) == null ? void 0 : R.closest("section"), v = (t = (q = i("strengthList")) == null ? void 0 : q.closest("section")) == null ? void 0 : t.querySelector(".sectionTitle");
    a != null && a.customSequence ? (s && (s.hidden = !a.includeWarmup), c && (c.hidden = !a.includeCooldown), v && (v.textContent = "Move sequence")) : (s && (s.hidden = !!(a != null && a.warmupOff)), c && (c.hidden = !1), v && (v.textContent = "Kettlebell work")), ao(Ne, "warmupList"), ao(Vt, "strengthList"), ao(wa, "cooldownList");
  }
  function oi() {
    if (!We) return;
    const { item: a, arr: s } = We;
    We = null;
    const c = s.indexOf(a);
    c >= 0 && s.splice(c, 1), Ye === a && (Ye = null);
  }
  function ii(a) {
    return a.id === "warmupList" ? { arr: Ne, kind: "warmup", group: "Warm-up" } : a.id === "cooldownList" ? { arr: wa, kind: "cooldown", group: "Cooldown" } : { arr: Vt, kind: "work", group: "" };
  }
  function Vr(a, s) {
    const c = ii(s), v = Date.now().toString(36);
    return a === "video" ? { id: "video-" + v, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : a === "rest" ? { id: "rest-" + v, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(P.value) } : { id: "movement-" + v, name: "", group: c.group, kind: c.kind, hidden: !1, useGlobalTiming: !0, duration: Number(W.value) };
  }
  const zr = "cubic-bezier(.34,1.46,.64,1)";
  function no(a, s) {
    if (be() || !a) {
      s();
      return;
    }
    const c = (R) => {
      var q;
      return ((q = R.dataset) == null ? void 0 : q.id) || R;
    }, v = () => [...a.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], C = new Map(v().map((R) => [c(R), R.getBoundingClientRect().top]));
    s(), v().forEach((R) => {
      const q = C.get(c(R));
      if (q === void 0) return;
      const t = q - R.getBoundingClientRect().top;
      Math.abs(t) < 0.5 || R.animate([{ transform: "translateY(" + t + "px)" }, { transform: "none" }], { duration: 440, easing: zr });
    });
  }
  function oo(a, s) {
    if (!a || be()) return;
    const c = a.offsetHeight, v = Math.max(0, c - (s || 0));
    a.animate([{ clipPath: "inset(0 0 " + v + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: zr });
  }
  function Ri(a, s, c, v) {
    const { arr: C } = ii(s), R = Vr(a, s);
    C.splice(Math.max(0, Math.min(c, C.length)), 0, R), We = { item: R, arr: C }, Ye = R, no(s.closest(".exerciseScroller,.createStepSlot") || s, () => Me());
    const q = s.querySelector(".moveRow.editing");
    return oo(q, v), gn(a === "rest"), q;
  }
  function _o(a) {
    for (let s = a; s && s.nodeType === 1; s = s.parentElement) {
      const c = getComputedStyle(s).overflowY;
      if (/(auto|scroll)/.test(c) && s.scrollHeight > s.clientHeight) return s;
    }
    return null;
  }
  const je = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function vn(a, s) {
    const c = document.createElement("div");
    return c.className = "addGhost" + (a === "movement" ? "" : " rest"), c.innerHTML = '<span class="addGhostGrip">' + Ua + '</span><span class="addGhostText"><strong>' + Zt(s[0]) + "</strong><small>" + Zt(s[1]) + "</small></span>", i("workoutModal").appendChild(c), c;
  }
  function re(a) {
    a.classList.add("leaving"), setTimeout(() => a.remove(), 180);
  }
  function ri(a, s, c, v) {
    (Ye || We) && (oi(), Ye = null, Me());
    const C = a.getBoundingClientRect(), R = vn(s, je[s]);
    R.setAttribute("aria-hidden", "true"), R.style.width = C.width + "px", R.style.height = C.height + "px", R.style.transform = "translate(" + C.left + "px," + C.top + "px)", a.classList.add("lifting");
    const q = _o(a);
    return io({
      ghost: R,
      origin: C,
      sx: c,
      sy: v,
      scroller: q,
      column: a.closest(".exerciseScroller,.createFlow") || q,
      home: () => a.getBoundingClientRect(),
      onDrop: (t, e, o) => {
        re(R), a.classList.remove("lifting"), Ri(s, t, e, o);
      },
      onReturn: () => {
        re(R), a.classList.remove("lifting");
      }
    });
  }
  function io({ ghost: a, origin: s, sx: c, sy: v, scroller: C, column: R, home: q, onDrop: t, onReturn: e, rowLook: o = !1 }) {
    var xi;
    const r = !be(), d = ((xi = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : xi.offsetHeight) || 80, h = c - s.left, p = v - s.top, m = 44;
    let g = c, M = v, A = s.left, _ = s.top, B = 0, Y = 0, $ = !r, H = null, G = null, j = -1, ft = 0, U = null;
    const _t = () => ["warmupList", "strengthList", "cooldownList"].map((Kt) => i(Kt)).filter((Kt) => Kt && Kt.getClientRects().length && !Kt.closest("[hidden]")), xt = (Kt) => {
      if (Kt === H) return;
      H = Kt, a.classList.toggle("overList", !!Kt || o);
      const Ce = Kt ? Kt.getBoundingClientRect().width : s.width;
      a.style.width = Ce + "px", a.style.height = (Kt ? d : s.height) + "px";
    }, ct = (Kt) => {
      Kt.classList.add("leaving"), Kt.style.height = "0px", Kt.style.marginTop = "-8px", setTimeout(() => Kt.remove(), r ? 320 : 0);
    }, Pt = (Kt, Ce, Oe) => {
      if (G && G.parentNode === Kt && j === Oe || (G && (ct(G), G = null, j = -1), !Kt)) return;
      const da = document.createElement("div");
      da.className = "dropSlot", Kt.insertBefore(da, Ce), G = da, j = Oe, da.getBoundingClientRect(), da.style.height = d + "px", da.style.marginTop = "0px";
    }, Et = () => {
      let Kt = null, Ce = 1 / 0;
      for (const Bn of _t()) {
        const ee = Bn.getBoundingClientRect();
        if (g < ee.left - 48 || g > ee.right + 48) continue;
        const fe = ee.top - 28, Pe = ee.bottom + 28, rn = M < fe ? fe - M : M > Pe ? M - Pe : 0;
        rn < Ce && (Ce = rn, Kt = Bn);
      }
      const Oe = R == null ? void 0 : R.getBoundingClientRect(), on = Oe && g >= Oe.left && g <= Oe.right && M >= Oe.top && M <= Oe.bottom || Ce === 0 ? Kt : null;
      if (on) {
        const Bn = [...on.children].filter((fe) => fe.classList.contains("moveRow"));
        let ee = Bn.findIndex((fe) => {
          const Pe = fe.getBoundingClientRect();
          return M < Pe.top + Pe.height / 2;
        });
        ee < 0 && (ee = Bn.length), Pt(on, Bn[ee] || null, ee);
      } else Pt(null);
      xt(on);
    }, ie = () => {
      if (U) return U.aim();
      if (H) {
        const Kt = H.getBoundingClientRect();
        let Ce = M - d / 2;
        return G && (Ce = Ce * 0.6 + G.getBoundingClientRect().top * 0.4), { x: Kt.left, y: Ce };
      }
      return { x: g - h, y: M - p };
    }, Te = (Kt, Ce, Oe, da) => {
      a.style.transform = "translate(" + A + "px," + _ + "px) rotate(" + Kt + "deg) rotate(" + Ce + "rad) scale(" + Oe + "," + da + ") rotate(" + -Ce + "rad)";
    }, Oa = () => {
      if (ft = requestAnimationFrame(Oa), !$) {
        const ee = g - c, fe = M - v, Pe = Math.min(Math.hypot(ee, fe) / m, 1);
        A = s.left + ee * 0.35, _ = s.top + fe * 0.35, Te(0, Math.atan2(fe, ee), 1 + 0.155 * Pe, 1 - 0.1 * Pe);
        return;
      }
      const Kt = ie();
      if (!r) {
        A = Kt.x, _ = Kt.y, Te(0, 0, 1, 1), U && (cancelAnimationFrame(ft), U.done());
        return;
      }
      const Ce = U ? U.k : 0.17, Oe = U ? U.d : 0.7;
      B = (B + (Kt.x - A) * Ce) * Oe, Y = (Y + (Kt.y - _) * Ce) * Oe, A += B, _ += Y;
      const da = Math.hypot(B, Y), on = Math.min(da / 48, 1), Bn = H || U ? 0 : Math.max(-5, Math.min(5, B * 0.32));
      Te(Bn, Math.atan2(Y, B), 1 + 0.1 * on, 1 - 0.063 * on), U && da < 0.15 && Math.hypot(Kt.x - A, Kt.y - _) < 0.6 && (cancelAnimationFrame(ft), U.done());
    }, xs = setInterval(() => {
      if (!C || U) return;
      const Kt = C.getBoundingClientRect(), Ce = 64, Oe = M < Kt.top + Ce ? -(Kt.top + Ce - M) / 4 : M > Kt.bottom - Ce ? (M - (Kt.bottom - Ce)) / 4 : 0;
      Oe && (C.scrollTop += Math.max(-18, Math.min(18, Oe)), Et());
    }, 30);
    ft = requestAnimationFrame(Oa);
    let Hr = !1;
    const wi = (Kt, Ce) => {
      if (Hr) return;
      Hr = !0, cancelAnimationFrame(ft);
      const Oe = G ? G.offsetHeight : d;
      !Kt && G && (G.remove(), G = null), Kt ? t(Kt, Ce, Oe) : e();
    };
    return {
      move(Kt, Ce) {
        g = Kt, M = Ce, !$ && Math.hypot(g - c, M - v) > m && ($ = !0, B = (g - c) * 0.085, Y = (M - v) * 0.085), $ && Et();
      },
      drop(Kt) {
        clearInterval(xs);
        const Ce = H, Oe = j;
        if (!Kt && Ce && G) {
          const da = G;
          U = { k: 0.24, d: 0.62, aim: () => {
            const on = da.getBoundingClientRect();
            return { x: on.left, y: on.top };
          }, done: () => wi(Ce, Oe) }, setTimeout(() => wi(Ce, Oe), 650), r || (cancelAnimationFrame(ft), wi(Ce, Oe));
          return;
        }
        Pt(null), xt(null), U = { k: 0.2, d: 0.66, aim: () => {
          const da = q();
          return { x: da.left, y: da.top };
        }, done: () => wi(null) }, setTimeout(() => wi(null), 650), r || (cancelAnimationFrame(ft), wi(null));
      }
    };
  }
  function si(a, s) {
    let c = !1;
    a.addEventListener("click", (v) => {
      if (c) {
        c = !1, v.preventDefault();
        return;
      }
      if (Sn()) {
        Wn(s);
        return;
      }
      const C = i("strengthList"), R = Ri(s, C, ii(C).arr.length, 0);
      R == null || R.scrollIntoView({ block: "nearest", behavior: be() ? "auto" : "smooth" });
    }), a.addEventListener("pointerdown", (v) => {
      if (v.button !== void 0 && v.button !== 0) return;
      const C = v.pointerId, R = v.clientX, q = v.clientY;
      let t = null, e = !1;
      try {
        a.setPointerCapture(C);
      } catch {
      }
      const o = (M) => {
        if (M.pointerId === C) {
          if (M.pointerType === "mouse" && M.buttons === 0) {
            g(!1);
            return;
          }
          if (!t) {
            if (Math.hypot(M.clientX - R, M.clientY - q) < 6) return;
            t = ri(a, s, R, q);
          }
          t.move(M.clientX, M.clientY);
        }
      }, r = (M) => {
        M.pointerId === C && g(!1);
      }, d = (M) => {
        M.pointerId === C && g(!0);
      }, h = () => g(!1), p = () => g(!0), m = (M) => {
        M.key === "Escape" && t && (M.preventDefault(), M.stopPropagation(), g(!0));
      };
      function g(M) {
        if (!e && (e = !0, window.removeEventListener("pointermove", o, !0), window.removeEventListener("pointerup", r, !0), window.removeEventListener("pointercancel", d, !0), window.removeEventListener("keydown", m, !0), window.removeEventListener("blur", p), a.removeEventListener("lostpointercapture", h), t)) {
          const A = t;
          t = null, c = !0, setTimeout(() => {
            c = !1;
          }, 0), A.drop(M);
        }
      }
      window.addEventListener("pointermove", o, !0), window.addEventListener("pointerup", r, !0), window.addEventListener("pointercancel", d, !0), window.addEventListener("keydown", m, !0), window.addEventListener("blur", p), a.addEventListener("lostpointercapture", h);
    });
  }
  const bn = (Ir = window.matchMedia) == null ? void 0 : Ir.call(window, "(max-width: 620px)");
  function Sn() {
    var a;
    return !!((a = window.matchMedia) != null && a.call(window, "(max-width: 620px)").matches);
  }
  const Pi = (a) => a.charAt(0).toUpperCase() + a.slice(1), ro = (a) => a.kind === "rest" ? "rest" : a.kind === "video" ? "video" : "movement";
  let Aa = null, Ae = null;
  function wn(a, s, c, v) {
    ra(), i("sheetTitle").textContent = a;
    const C = i("sheetBody");
    C.innerHTML = "", C.appendChild(s), Aa = c || null, i("sheet").setAttribute("aria-hidden", "false"), i("sheetScrim").classList.add("open"), i("sheet").classList.add("open"), setTimeout(() => {
      if (!i("sheet").classList.contains("open") || !C.contains(s)) return;
      const R = v ? C.querySelector("input[data-f=url],input[data-f=name]") : C.querySelector("button,input,select");
      R == null || R.focus({ preventScroll: !0 });
    }, be() ? 0 : 360);
  }
  function ra() {
    const a = i("sheet");
    if (!a.classList.contains("open")) return;
    a.classList.remove("open"), i("sheetScrim").classList.remove("open"), a.setAttribute("aria-hidden", "true"), a.contains(n.activeElement) && n.activeElement.blur();
    const s = Aa;
    Aa = null, s == null || s(), setTimeout(ua, 0);
  }
  i("sheetScrim").addEventListener("click", ra), i("sheet").addEventListener("keydown", (a) => {
    a.key === "Escape" && (a.preventDefault(), ra());
  });
  function so(a, s) {
    const c = Ao(a, s.indexOf(a), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        ra(), Me(), ce(Pi(ro(a)) + " updated");
      },
      onCancel: ra,
      onHide() {
        a.hidden = !a.hidden, ra(), Me(), ce((a.hidden ? "Hidden: " : "Showing: ") + a.name);
      },
      onRemove() {
        ra();
        const v = s.indexOf(a);
        v < 0 || (s.splice(v, 1), Me(), ce("Removed " + a.name, { label: "Undo", run: () => {
          s.splice(Math.min(v, s.length), 0, a), Me();
        } }));
      }
    });
    wn("Edit " + ro(a), c, null, !1);
  }
  function Gr() {
    const a = document.createElement("div");
    a.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([s, c, v, C]) => {
      const R = document.createElement("button");
      R.type = "button", R.className = "sheetChoice", R.innerHTML = '<span class="timeIcon" aria-hidden="true">' + ia(c) + "</span><span><strong>" + v + "</strong><small>" + C + "</small></span>", R.addEventListener("click", () => Wn(s)), a.appendChild(R);
    }), wn("Add to the move", a, null, !1);
  }
  function Wn(a) {
    Ae && Do();
    const s = Vr(a, i("strengthList")), c = Ao(s, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        ra(), Es(s, a);
      },
      onCancel: ra
    });
    wn("New " + ro(s), c, null, !0);
  }
  const Ke = i("workoutModal").querySelector(".modalStatic"), lo = { parent: Ke.parentNode, next: Ke.nextSibling };
  function hr() {
    const a = document.createElement("div");
    a.className = "sheetSetup", a.appendChild(Ke);
    const s = document.createElement("button");
    s.type = "button", s.className = "primary sheetDone", s.textContent = "Done", s.addEventListener("click", ra), a.appendChild(s), wn("Setup", a, () => {
      lo.parent.insertBefore(Ke, lo.next), Ea();
    }, !1);
  }
  function Ea() {
    var s, c;
    const a = i("setupSummaryName");
    a && (a.textContent = (((s = i("workoutNameInput")) == null ? void 0 : s.value) || "").trim() || ((c = Qt[oe]) == null ? void 0 : c.name) || "Move", i("setupSummaryMeta").textContent = hn.textContent);
  }
  i("setupSummary").addEventListener("click", hr), i("addFab").addEventListener("click", Gr);
  function co() {
    const a = i("strengthList");
    return _o(a) || a.closest(".exerciseScroller");
  }
  function li() {
    const a = i("strengthList").getBoundingClientRect(), s = (co() || i("strengthList")).getBoundingClientRect(), c = (Ae == null ? void 0 : Ae.ghost.offsetHeight) || 64;
    return { left: a.left, top: Math.max(s.top + 12, Math.min(s.bottom - c - 96, s.top + s.height * 0.55 - c / 2)), width: a.width, height: c };
  }
  function Es(a, s) {
    var t;
    const c = vn(s, [a.name || je[s][0], "Drag into place"]);
    c.classList.add("overList", "hovering"), c.setAttribute("aria-label", (a.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const v = document.createElement("span");
    v.className = "addGhostActions", v.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + Zt(a.name) + '">✕</button>', c.appendChild(v), Ae = { item: a, type: s, ghost: c };
    const C = ((t = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : t.offsetHeight) || 64;
    c.style.width = i("strengthList").getBoundingClientRect().width + "px", c.style.height = C + "px";
    const R = li(), q = xa.querySelector(".modal").getBoundingClientRect().bottom;
    c.style.transform = "translate(" + R.left + "px," + q + "px)", c.getBoundingClientRect(), be() || (c.classList.add("rising"), setTimeout(() => c.classList.remove("rising"), 650)), c.style.transform = "translate(" + R.left + "px," + R.top + "px)", v.querySelector("[data-a=end]").addEventListener("click", Do), v.querySelector("[data-a=discard]").addEventListener("click", Ii), c.addEventListener("pointerdown", Ni);
  }
  function Ni(a) {
    if (!Ae || a.target.closest("button") || a.button !== void 0 && a.button !== 0) return;
    a.preventDefault();
    const { item: s, ghost: c } = Ae, v = a.pointerId;
    try {
      c.setPointerCapture(v);
    } catch {
    }
    c.classList.remove("hovering", "rising"), c.classList.add("held");
    const C = c.getBoundingClientRect(), R = co(), q = io({
      ghost: c,
      origin: { left: C.left, top: C.top, width: C.width, height: C.height },
      sx: a.clientX,
      sy: a.clientY,
      scroller: R,
      column: i("strengthList").closest(".exerciseScroller,.createFlow") || R,
      rowLook: !0,
      home: li,
      onDrop: (g, M, A) => {
        Ae = null, re(c), mr(s, g, M, A);
      },
      onReturn: () => {
        c.classList.remove("held"), c.classList.add("hovering");
      }
    });
    let t = !1;
    const e = (g) => {
      if (g.pointerId === v) {
        if (g.pointerType === "mouse" && g.buttons === 0) {
          m(!1);
          return;
        }
        q.move(g.clientX, g.clientY);
      }
    }, o = (g) => {
      g.pointerId === v && m(!1);
    }, r = (g) => {
      g.pointerId === v && m(!0);
    }, d = () => m(!1), h = () => m(!0), p = (g) => {
      g.key === "Escape" && (g.preventDefault(), m(!0));
    };
    function m(g) {
      t || (t = !0, window.removeEventListener("pointermove", e, !0), window.removeEventListener("pointerup", o, !0), window.removeEventListener("pointercancel", r, !0), window.removeEventListener("keydown", p, !0), window.removeEventListener("blur", h), c.removeEventListener("lostpointercapture", d), q.drop(g));
    }
    window.addEventListener("pointermove", e, !0), window.addEventListener("pointerup", o, !0), window.addEventListener("pointercancel", r, !0), window.addEventListener("keydown", p, !0), window.addEventListener("blur", h), c.addEventListener("lostpointercapture", d);
  }
  function mr(a, s, c, v) {
    const C = ii(s);
    a.kind !== "rest" && a.kind !== "video" && (a.kind = C.kind, C.group && (!a.group || a.group === "Movement") && (a.group = C.group)), C.arr.splice(Math.max(0, Math.min(c, C.arr.length)), 0, a), no(s.closest(".exerciseScroller,.createStepSlot") || s, () => Me()), oo(s.querySelector('.moveRow[data-id="' + a.id + '"]'), v), ce(Pi(ro(a)) + " added");
  }
  function Do() {
    var v;
    if (!Ae) return;
    const { item: a, ghost: s } = Ae;
    Ae = null, re(s);
    const c = i("strengthList");
    mr(a, c, ii(c).arr.length, 0), (v = c.querySelector('.moveRow[data-id="' + a.id + '"]')) == null || v.scrollIntoView({ block: "nearest", behavior: be() ? "auto" : "smooth" });
  }
  function Ii() {
    if (!Ae) return;
    const a = Ae.ghost;
    Ae = null, re(a), ce("Discarded");
  }
  function gr() {
    Ae && (Ae.ghost.remove(), Ae = null);
  }
  window.addEventListener("resize", () => {
    if (Ae != null && Ae.ghost.classList.contains("hovering")) {
      const a = li();
      Ae.ghost.style.width = a.width + "px", Ae.ghost.style.transform = "translate(" + a.left + "px," + a.top + "px)";
    }
  }), (ws = bn == null ? void 0 : bn.addEventListener) == null || ws.call(bn, "change", () => {
    ra(), Ae && !Sn() && Do(), Bi();
  });
  {
    const a = i("workoutModal").querySelector(".modal");
    a.addEventListener("scroll", () => {
      (a.scrollTop || a.scrollLeft) && (a.scrollTop = 0, a.scrollLeft = 0);
    });
  }
  function ua() {
    const a = i("workoutModal"), s = window.visualViewport;
    if (!a.classList.contains("open") || !Sn()) {
      xn();
      return;
    }
    const c = s ? s.offsetTop : 0, v = s ? s.offsetLeft : 0, C = s ? s.width : window.innerWidth, R = s ? s.height : window.innerHeight;
    Object.assign(a.style, { right: "auto", bottom: "auto", width: C + "px", height: R + "px", top: c + "px", left: v + "px" });
    const q = a.getBoundingClientRect();
    Math.abs(q.top - c) > 0.5 && (a.style.top = 2 * c - q.top + "px"), Math.abs(q.left - v) > 0.5 && (a.style.left = 2 * v - q.left + "px");
  }
  function xn() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((a) => i("workoutModal").style.removeProperty(a));
  }
  (ar = window.visualViewport) == null || ar.addEventListener("resize", ua), (id = window.visualViewport) == null || id.addEventListener("scroll", ua), window.addEventListener("resize", ua), window.addEventListener("scroll", ua, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(ua, 250));
  function Hi() {
    Vt.length > 0;
    const a = i("addMovementBtn"), s = i("addRestBtn");
    a && (a.innerHTML = Ua + "<span>Add movement</span>"), s && (s.innerHTML = Ua + "<span>Add rest</span>");
    const c = i("addVideoBtn");
    c && (c.innerHTML = Ua + "<span>Add video</span>");
  }
  function Cn() {
    const a = i("useGlobalTiming").checked, s = i("addMovementDuration"), c = i("addMovementUnit");
    s.disabled = a, c.disabled = a, s.parentElement.style.opacity = a ? ".38" : "1", i("globalTimingValue").textContent = "Use global timing · " + Je(W.value);
    const v = i("useGlobalRestTiming").checked, C = i("addRestDuration"), R = i("addRestUnit");
    C.disabled = v, R.disabled = v, C.parentElement.style.opacity = v ? ".38" : "1", i("globalRestTimingValue").textContent = "Use global timing · " + Je(P.value);
  }
  let vr = "movement";
  function _a(a) {
    vr = a;
    const s = i("movementFields"), c = i("restFields");
    s.hidden = a !== "movement", c.hidden = a !== "rest", i("movementCreatorHeading").textContent = "Add movement", i("movementCreator").setAttribute("aria-label", "Create movement"), Cn();
  }
  function Bo() {
    Qt[oe];
    const a = _e ? !0 : i("useGlobalTiming").checked, s = a ? Number(W.value) : On(
      i("addMovementDuration").value,
      i("addMovementUnit").value
    ), c = _e ? !0 : i("useGlobalRestTiming").checked, v = c ? Number(P.value) : On(
      i("addRestDuration").value,
      i("addRestUnit").value
    );
    if (vr === "rest") {
      const C = i("addRestTitle").value.trim() || "Rest", R = i("addRestGroup").value.trim() || "Rest";
      Vt.push({
        id: "rest-" + Date.now(),
        name: C,
        group: R,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: c,
        duration: Math.max(5, v || Number(P.value))
      }), Me(), i("movementCreator").hidden = !0, i("addRestTitle").value = "Rest", i("addRestGroup").value = "Rest", ce("Rest added"), _e && (at("movements"), D());
    } else {
      const C = i("addMovementInput").value.trim();
      if (!C) return;
      const R = i("addMovementGroup").value.trim() || "Movement";
      Vt.push({
        id: "movement-" + Date.now(),
        name: C,
        group: R,
        kind: "work",
        hidden: !1,
        useGlobalTiming: a,
        duration: Math.max(5, s || Number(W.value))
      }), i("addMovementInput").value = "", i("addMovementGroup").value = "", Me(), i("movementCreator").hidden = !0, ce("Movement added"), _e && (at("movements"), D());
    }
    Hi();
  }
  let Da = null;
  function ce(a, s) {
    const c = i("toast");
    c.innerHTML = "";
    const v = document.createElement("span");
    if (v.textContent = a, c.appendChild(v), s) {
      const C = document.createElement("button");
      C.type = "button", C.className = "toastAction", C.textContent = s.label, C.addEventListener("click", () => {
        s.run(), c.classList.remove("show", "withAction"), clearTimeout(Da);
      }), c.appendChild(C);
    }
    c.classList.toggle("withAction", !!s), c.classList.add("show"), clearTimeout(Da), Da = setTimeout(() => c.classList.remove("show", "withAction"), s ? 5e3 : 2200);
  }
  const Fi = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], br = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function wr(a) {
    return Math.max(0, Math.min(5, Math.floor(Number(a) / 100 * 6)));
  }
  function Ya(a, s) {
    return Fi[wr(s)];
  }
  function fa(a) {
    return br[wr(a)];
  }
  function Be(a) {
    return a.getFullYear() + "-" + String(a.getMonth() + 1).padStart(2, "0") + "-" + String(a.getDate()).padStart(2, "0");
  }
  function Za() {
    return { morning: te().morningTime || "08:00", evening: te().eveningTime || "19:00" };
  }
  function po(a) {
    const [s, c] = String(a).split(":").map(Number);
    return (s || 0) * 60 + (c || 0);
  }
  function jn(a) {
    const s = Za();
    return a.getHours() * 60 + a.getMinutes() >= po(s.evening) ? "evening" : "morning";
  }
  function f(a, s) {
    return It.checkins.find((c) => c.date === a && c.slot === s);
  }
  function w(a) {
    return !!(a && a.mood != null && a.energy != null);
  }
  function y() {
    const a = /* @__PURE__ */ new Date(), s = Be(a), c = jn(a), v = Za(), C = a.getHours() * 60 + a.getMinutes();
    return c === "morning" && C < po(v.morning) || w(f(s, c)) ? null : c;
  }
  const T = i("checkinModal"), I = i("checkinTab"), X = i("checkinBadge"), J = { mood: { input: i("moodInput"), fill: i("moodFill") }, energy: { input: i("energyLevelInput"), fill: i("energyLevelFill") } };
  function ht(a) {
    const { input: s, fill: c } = J[a];
    c.style.width = s.value + "%", s.setAttribute("aria-valuetext", Ya(a, s.value));
  }
  Object.keys(J).forEach((a) => J[a].input.addEventListener("input", () => ht(a)));
  let tt = null;
  function vt() {
    const a = Za(), s = /* @__PURE__ */ new Date(), c = s.getHours() * 60 + s.getMinutes();
    return c < po(a.morning) ? "Next check-in at " + a.morning : c < po(a.evening) ? "Next check-in at " + a.evening : "Next check-in tomorrow at " + a.morning;
  }
  function bt() {
    const a = Za(), s = /* @__PURE__ */ new Date(), c = s.getHours() * 60 + s.getMinutes(), v = (C, R) => {
      const [q, t] = C.split(":").map(Number);
      return new Date(s.getFullYear(), s.getMonth(), s.getDate() + (R ? 1 : 0), q, t);
    };
    return c < po(a.morning) ? { date: v(a.morning), time: a.morning } : c < po(a.evening) ? { date: v(a.evening), time: a.evening } : { date: v(a.morning, !0), time: a.morning };
  }
  let St = null, Gt = null;
  function qt() {
    if (y()) {
      zt(), we();
      return;
    }
    const a = bt(), s = Math.max(0, Math.round((a.date - Date.now()) / 1e3)), c = Math.floor(s / 3600), v = Math.floor(s % 3600 / 60), C = s % 60;
    i("peekCountdown").textContent = c + ":" + String(v).padStart(2, "0") + ":" + String(C).padStart(2, "0"), i("peekAt").textContent = "Available at " + a.time;
  }
  function Ct() {
    qt(), I.classList.add("peek"), clearInterval(Gt), Gt = setInterval(qt, 1e3), clearTimeout(St), St = setTimeout(zt, 6e3);
  }
  function zt() {
    I.classList.remove("peek"), clearInterval(Gt), clearTimeout(St);
  }
  function Ht() {
    const a = y();
    if (!a) {
      I.classList.contains("peek") ? zt() : Ct();
      return;
    }
    tt = { date: Be(/* @__PURE__ */ new Date()), slot: a };
    const c = f(tt.date, a), v = It.checkins.find((C) => w(C));
    Object.keys(J).forEach((C) => {
      J[C].input.value = (c == null ? void 0 : c[C]) ?? (v == null ? void 0 : v[C]) ?? 50, ht(C);
    }), i("checkinTitle").textContent = a === "morning" ? "Morning check-in" : "Evening check-in", T.classList.add("open"), T.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => J.mood.input.focus());
  }
  function Tt() {
    T.classList.remove("open"), T.setAttribute("aria-hidden", "true"), tt && (Yt = tt.date + "-" + tt.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", Yt);
    } catch {
    }
    tt = null, we();
  }
  function Jt() {
    if (!tt) return;
    if (w(f(tt.date, tt.slot))) {
      Tt();
      return;
    }
    const { date: a, slot: s } = tt;
    let c = f(a, s);
    c || (c = { date: a, slot: s }, It.checkins.unshift(c), It.checkins = It.checkins.slice(0, 2e3)), c.mood = Number(J.mood.input.value), c.energy = Number(J.energy.input.value), c.scale = 100, c.at = (/* @__PURE__ */ new Date()).toISOString(), za(), l.fire("checkin", { slot: s, mood: c.mood, energy: c.energy, mood_label: Ya("mood", c.mood), energy_label: Ya("energy", c.energy) }), ce((s === "morning" ? "Morning" : "Evening") + " check-in saved"), Tt(), pe(), He(), Zo(), Kn();
  }
  let Yt = "";
  try {
    Yt = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function we() {
    const a = y();
    X.hidden = !a, I.hidden = !a, a || zt(), I.classList.toggle("due", !!a), I.setAttribute("aria-label", a ? (a === "morning" ? "Morning" : "Evening") + " check-in is due" : vt()), I.title = a ? "Check in now" : vt();
  }
  function Rt() {
    we();
    const a = y();
    !a || T.classList.contains("open") || te().checkinAutoOpen !== !1 && (i("app").classList.contains("house") || !Bt.home.classList.contains("active") || xa.classList.contains("open") || Yt !== Be(/* @__PURE__ */ new Date()) + "-" + a && Ht());
  }
  I.addEventListener("click", Ht), i("checkinLater").addEventListener("click", Tt), i("checkinSave").addEventListener("click", Jt), T.addEventListener("click", (a) => {
    a.target === T && Tt();
  }), T.addEventListener("keydown", (a) => {
    a.key === "Escape" && (a.preventDefault(), Tt());
  }), setInterval(Rt, 3e4);
  function pe() {
    const a = Be(/* @__PURE__ */ new Date()), s = (c) => It.checkins.find((v) => v.date === a && v[c] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([c, v]) => {
      const C = s(c);
      i(v).textContent = C ? Ya(c, C[c]) : "—";
    });
  }
  function He() {
    const a = i("feelCard");
    if (!a) return;
    const s = /* @__PURE__ */ new Date(), c = new Date(s.getFullYear(), s.getMonth(), s.getDate() - (s.getDay() + 6) % 7), v = [...Array(7)].map((o, r) => {
      const d = new Date(c.getFullYear(), c.getMonth(), c.getDate() + r), h = Be(d), p = It.checkins.filter((g) => g.date === h), m = (g) => {
        const M = p.map((A) => A[g]).filter((A) => A != null);
        return M.length ? M.reduce((A, _) => A + _, 0) / M.length : null;
      };
      return { d, key: h, mood: m("mood"), energy: m("energy"), count: p.filter(w).length, future: d > s && h !== Be(s) };
    }), C = (o) => {
      const r = v.map((d) => d[o]).filter((d) => d != null);
      return r.length ? r.reduce((d, h) => d + h, 0) / r.length : null;
    }, R = C("mood"), q = C("energy"), t = (o, r) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + o + "</span><span>" + (r == null ? "—" : Zt(Ya("", r))) + '</span></div><div class="feelTrack"><span style="width:' + (r == null ? 0 : Math.max(4, r)) + "%;background:" + (r == null ? "transparent" : fa(r)) + '"></span></div></div>', e = v.filter((o) => o.mood != null && o.energy != null).sort((o, r) => r.mood + r.energy - (o.mood + o.energy))[0];
    a.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (R == null ? "No check-ins yet" : Zt(Ya("", (R + q) / 2))) + '</div><div class="weekCopy">' + (R == null ? "Your first check-in will appear here." : "on average this week" + (e ? " · best day " + Zt(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(e.d)) : "")) + '</div></div></div><div class="feelDays">' + v.map(
      (o) => '<div class="weekChip feelDay' + (o.future ? " future" : "") + (o.key === Be(s) ? " today" : "") + '"><div class="weekChipTop"><strong>' + Zt(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(o.d)) + "</strong>" + (o.count >= 2 ? '<span class="weekTick">' + ia("check") + "</span>" : '<span class="feelDots">' + "●".repeat(o.count) + "</span>") + "</div>" + t("Mood", o.mood) + t("Energy", o.energy) + "</div>"
    ).join("") + "</div>";
  }
  const ga = i("upcomingCountSetting");
  ga.addEventListener("change", () => {
    Ga = ga.value === "all" ? "all" : Number(ga.value), Tn();
  });
  const Ba = i("tempoRevealBtn"), uo = i("tempoExperiment"), Ra = i("tempoQuad"), fo = i("tempoDot"), le = i("tempoEstimate"), Vn = i("tempoReadout");
  let Ka = { x: 0.5, y: 0.5 }, zn = !1, Ro = { total: 20, work: 45, rest: 15 };
  function Po(a, s, c, v) {
    const C = Math.max(s, Math.min(c, a));
    return Math.round((C - s) / v) * v + s;
  }
  function Oi(a, s) {
    const c = (a - 0.5) * 2, v = (s - 0.5) * 2, C = Po(
      Ro.total + c * 5 + v * 8,
      Number(N.min),
      Number(N.max),
      Number(N.step)
    ), R = Po(
      Ro.work + c * 10 + v * 8,
      Number(W.min),
      Number(W.max),
      Number(W.step)
    ), q = Po(
      Ro.rest + c * 6 + v * 6,
      Number(P.min),
      Number(P.max),
      Number(P.step)
    );
    return N.value = C, W.value = R, P.value = q, ut.textContent = R + " sec", gt.textContent = q + " sec", _i(), { total: C, work: R, rest: q };
  }
  function ha(a, s) {
    const c = a < 0.34 ? "Low" : a > 0.66 ? "Hard" : "Medium", v = s < 0.34 ? "Fast" : s > 0.66 ? "Slow" : "Balanced", C = Oi(a, s);
    Vn.textContent = c + " + " + v, le.textContent = C.total + " min", Ra.setAttribute("aria-valuetext", c + " and " + v + ", estimated " + C.total + " minutes");
  }
  function Ur(a) {
    const s = Ra.getBoundingClientRect(), c = Math.max(0, Math.min(1, (a.clientX - s.left) / s.width)), v = Math.max(0, Math.min(1, (a.clientY - s.top) / s.height));
    Ka = { x: c, y: v }, fo.style.left = c * 100 + "%", fo.style.top = v * 100 + "%", ha(c, v);
  }
  Ba.addEventListener("click", () => {
    const a = uo.hidden;
    uo.hidden = !a, Ba.setAttribute("aria-expanded", a ? "true" : "false"), Ba.textContent = a ? "Now close this" : "Don’t try this!", a && (Ro = {
      total: Number(N.value),
      work: Number(W.value),
      rest: Number(P.value)
    }, Ka = { x: 0.5, y: 0.5 }, fo.style.left = "50%", fo.style.top = "50%", ha(Ka.x, Ka.y));
  }), n.querySelectorAll("[data-feedback-rating]").forEach((a) => a.addEventListener("click", () => {
    Number(a.dataset.feedbackRating), n.querySelectorAll("[data-feedback-rating]").forEach((s) => s.classList.toggle("selected", s === a));
  }));
  const xr = i("testingFeedbackForm"), kl = i("testingFeedbackThanks"), Ml = i("testingFeedbackAgain");
  xr.addEventListener("submit", (a) => {
    a.preventDefault(), xr.hidden = !0, kl.hidden = !1, ce("Feedback captured for prototype");
  }), Ml.addEventListener("click", (a) => {
    a.preventDefault(), xr.reset(), n.querySelectorAll("[data-feedback-rating]").forEach((s) => s.classList.remove("selected")), kl.hidden = !0, xr.hidden = !1;
  }), Ra.addEventListener("pointerdown", (a) => {
    var s;
    zn = !0, Ur(a);
    try {
      (s = Ra.setPointerCapture) == null || s.call(Ra, a.pointerId);
    } catch {
    }
  }), Ra.addEventListener("pointermove", (a) => {
    zn && Ur(a);
  }), Ra.addEventListener("pointerup", (a) => {
    zn && (zn = !1, Ur(a), Me());
  }), Ra.addEventListener("pointercancel", () => zn = !1), Ra.addEventListener("keydown", (a) => {
    let { x: s, y: c } = Ka, v = !0;
    a.key === "ArrowLeft" ? s -= 0.05 : a.key === "ArrowRight" ? s += 0.05 : a.key === "ArrowUp" ? c -= 0.05 : a.key === "ArrowDown" ? c += 0.05 : v = !1, v && (a.preventDefault(), s = Math.max(0, Math.min(1, s)), c = Math.max(0, Math.min(1, c)), Ka = { x: s, y: c }, fo.style.left = s * 100 + "%", fo.style.top = c * 100 + "%", ha(s, c), Me());
  });
  const xa = i("workoutModal");
  let ho = null;
  function No(a) {
    return a.map((s) => ({ ...s }));
  }
  function _s() {
    const a = Qt[oe];
    return {
      key: oe,
      profile: a ? JSON.parse(JSON.stringify(a)) : null,
      warmup: No(Ne),
      strength: No(Vt),
      cooldown: No(wa),
      total: Number(N.value),
      work: Number(W.value),
      rest: Number(P.value),
      rounds: Number(Ut.value) || 1
    };
  }
  function Ds(a = !1) {
    _e = !!a, Ye = null, We = null, ra(), gr(), ho = _s(), i("moveEditorTitle").textContent = _e ? "Create new move" : "Edit move", i("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", i("moveEditorSubtitle").hidden = !_e, i("warmupRow").hidden = _e, i("deleteMoveOpen").hidden = _e;
    const s = i("createMoveOptions");
    s.hidden = !_e;
    {
      const c = Qt[oe];
      i("includeWarmupPreset").checked = !!(c != null && c.includeWarmup), i("includeCooldownPreset").checked = !!(c != null && c.includeCooldown);
    }
    if (Sl(), _e) {
      i("useGlobalTiming").checked = !0, i("useGlobalRestTiming").checked = !0;
      const c = Qt[oe];
      ni((c == null ? void 0 : c.preset) || "movement", !1);
    }
    i("movementCreator").hidden = !0, _a("movement"), Hi(), Cn(), uo.hidden = !0, Ba.setAttribute("aria-expanded", "false"), Ba.textContent = "Don’t try this!", xa.classList.toggle("createMode", _e), xa.querySelector(".modal").classList.toggle("createMode", _e), xa.classList.add("open"), xa.setAttribute("aria-hidden", "false"), ua(), _e && kt();
  }
  function Bs() {
    const a = Qt[oe];
    return a != null && a.customSequence ? !!a.includeWarmup : !(a != null && a.warmupOff);
  }
  function Sl() {
    const a = Bs(), s = i("warmupSwitch");
    s.classList.toggle("on", a), s.setAttribute("aria-checked", String(a));
  }
  i("warmupSwitch").addEventListener("click", () => {
    const a = Qt[oe];
    a && (a.customSequence ? (i("includeWarmupPreset").checked = !a.includeWarmup, Di()) : (a.warmupOff = !a.warmupOff, Me()), Sl());
  });
  function Yr() {
    ra(), gr(), xn(), We = null, Ye = null, xa.classList.contains("createMode") && st(), xa.classList.remove("createMode"), xa.querySelector(".modal").classList.remove("createMode"), xa.classList.remove("open"), xa.setAttribute("aria-hidden", "true");
  }
  function Cl() {
    if (!ho) return;
    const a = ho;
    a.profile && (Qt[a.key] = JSON.parse(JSON.stringify(a.profile))), oe = a.key, Ne = No(a.warmup), Vt = No(a.strength), wa = No(a.cooldown), N.value = a.total, W.value = a.work, P.value = a.rest, Ut.value = a.rounds || 1;
    const s = Qt[oe];
    if (s) {
      n.querySelectorAll(".workoutPanel[data-workout]").forEach((v) => v.classList.toggle("active", v.dataset.workout === oe));
      const c = n.querySelector(".workoutPanel.active");
      if (c) {
        const v = c.querySelector(".workoutName");
        v && (v.textContent = s.name);
        const C = c.querySelector(".panelCollapsedText");
        C && (C.textContent = s.name);
        const R = c.querySelector(".sourceTag");
        R && (R.textContent = s.source);
      }
      b.value = s.name;
    }
    Me();
  }
  i("cancelWorkoutEdit").addEventListener("click", () => {
    if (_e) {
      const a = oe;
      delete Qt[a], _e = !1, In = null, Le(It.order.find((s) => Qt[s]) || Object.keys(Qt)[0]);
    } else
      Cl();
    Yr();
  }), i("saveWorkoutEdit").addEventListener("click", () => {
    ra(), Ae && Do();
    const a = Qt[oe], s = b.value.trim() || "New move";
    if (a && (a.name = s), oi(), Ye = null, Me(), _e && a)
      mn(oe, a), n.querySelectorAll(".workoutPanel[data-workout]").forEach((c) => c.classList.toggle("active", c.dataset.workout === oe)), _e = !1, In = null, It.order.includes(oe) || It.order.push(oe), ce("Move created");
    else {
      const c = n.querySelector(".workoutPanel.active");
      if (c) {
        const v = c.querySelector(".workoutName");
        v && (v.textContent = s);
        const C = c.querySelector(".panelCollapsedText");
        C && (C.textContent = s);
      }
      ce("Move saved");
    }
    ho = null, Yr(), za();
  }), xa.addEventListener("click", (a) => {
    if (a.target === xa) {
      if (_e) {
        const s = oe;
        delete Qt[s], _e = !1, In = null, Le(It.order.find((c) => Qt[c]) || Object.keys(Qt)[0]);
      } else
        Cl();
      Yr();
    }
  }), si(i("addMovementBtn"), "movement"), si(i("addRestBtn"), "rest"), si(i("addVideoBtn"), "video"), i("closeMovementCreator").addEventListener("click", () => {
    i("movementCreator").hidden = !0;
  }), i("useGlobalTiming").addEventListener("change", Cn), i("useGlobalRestTiming").addEventListener("change", Cn), n.querySelectorAll(".createPresetBtn").forEach((a) => a.addEventListener("click", () => {
    ni(a.dataset.movePreset, !0), Me();
  })), i("includeWarmupPreset").addEventListener("change", Di), i("includeCooldownPreset").addEventListener("change", Di), i("includeWarmupPreset").addEventListener("change", D), i("includeCooldownPreset").addEventListener("change", D), b.addEventListener("input", D), b.addEventListener("input", Ea), i("confirmAddMovement").addEventListener("click", Bo), i("confirmAddRest").addEventListener("click", Bo), i("addMovementInput").addEventListener("keydown", (a) => {
    a.key === "Enter" && Bo();
  });
  const yr = i("countdown"), Rs = i("countNum"), $a = i("countdownPixelCanvas");
  let qi = null, Ps = "appear";
  class Ld {
    constructor(s, c, v, C, R, q, t) {
      this.width = s.width, this.height = s.height, this.ctx = c, this.x = v, this.y = C, this.color = R, this.speed = (Math.random() * 0.8 + 0.1) * q, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = t, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
    }
    draw() {
      const s = this.maxSizeInteger * 0.5 - this.size * 0.5;
      this.ctx.fillStyle = this.color, this.ctx.fillRect(this.x + s, this.y + s, this.size, this.size);
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
  let Io = [], Ns = 1, Is = 1;
  function Ho() {
    const a = parseFloat(getComputedStyle(i("app")).zoom);
    return Number.isFinite(a) && a > 0 ? a : 1;
  }
  function Tl() {
    var o;
    if (!$a) return;
    const a = Ho(), s = Math.max(1, window.innerWidth / a), c = Math.max(1, window.innerHeight / a);
    Ns = s, Is = c;
    const v = Math.min(window.devicePixelRatio || 1, 2);
    $a.width = Math.floor(s * v), $a.height = Math.floor(c * v), $a.style.width = s + "px", $a.style.height = c + "px";
    const C = $a.getContext("2d");
    C.setTransform(v, 0, 0, v, 0, 0);
    const R = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], q = 12, t = (o = window.matchMedia) == null ? void 0 : o.call(window, "(prefers-reduced-motion: reduce)").matches, e = t ? 0 : 0.055;
    Io = [];
    for (let r = 0; r < s; r += q)
      for (let d = 0; d < c; d += q) {
        const h = r - s / 2, p = d - c / 2, m = Math.sqrt(h * h + p * p), g = t ? 0 : Math.random() * 75 + m * 0.05, M = new Ld({ width: s, height: c }, C, r, d, R[Math.floor(Math.random() * R.length)], e, g);
        M.maxSizeInteger = 4, M.maxSize = Math.random() * 3.2 + 0.8, M.sizeStep = 0.35 + Math.random() * 0.45, Io.push(M);
      }
  }
  function Hs(a) {
    cancelAnimationFrame(qi), Ps = a;
    const s = $a == null ? void 0 : $a.getContext("2d");
    if (!s) return;
    function c() {
      s.clearRect(0, 0, Ns, Is);
      let v = !0;
      Io.forEach((C) => {
        C[Ps](), C.isIdle || (v = !1);
      }), Ps === "disappear" && v || (qi = requestAnimationFrame(c));
    }
    qi = requestAnimationFrame(c);
  }
  function Zr() {
    cancelAnimationFrame(qi), Tl(), Hs("appear"), setTimeout(() => Hs("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    yr.classList.contains("active") && Zr();
  });
  const kr = i("pixelTrailCanvas"), Wi = kr.getContext("2d");
  let Gn = !0, mo = 0.7, Fo = 600, di = [], Oo = null, go = { x: 0, y: 0, ready: !1 };
  function Ll() {
    const a = u.getBoundingClientRect(), s = Ho(), c = Math.min(window.devicePixelRatio || 1, 2), v = Math.max(1, a.width / s), C = Math.max(1, a.height / s);
    kr.width = Math.max(1, Math.floor(v * c)), kr.height = Math.max(1, Math.floor(C * c)), kr.style.width = v + "px", kr.style.height = C + "px", Wi.setTransform(c, 0, 0, c, 0, 0);
  }
  function Al(a, s) {
    if (!Gn) return;
    const c = performance.now();
    go.ready || (go = { x: a, y: s, ready: !0 });
    const v = 7;
    for (let C = 1; C <= v; C++) {
      const R = C / v;
      di.push({
        x: go.x + (a - go.x) * R,
        y: go.y + (s - go.y) * R,
        born: c - (v - C) * 10
      });
    }
    go = { x: a, y: s, ready: !0 };
  }
  function Kr(a) {
    if (Oo = null, !x) return;
    if (!Bt.workout.classList.contains("active")) {
      Oo = requestAnimationFrame(Kr);
      return;
    }
    const s = u.getBoundingClientRect(), c = Ho();
    Wi.clearRect(0, 0, s.width / c, s.height / c), Gn && (di = di.filter((C) => a - C.born < Fo), Wi.fillStyle = i("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", di.forEach((C) => {
      const R = (a - C.born) / Fo, q = (1 - R) * mo, t = Math.round(C.x / 14) * 14, e = Math.round(C.y / 14) * 14;
      Wi.globalAlpha = Math.max(0, q);
      const o = 2 + 5 * (1 - R) * mo;
      Wi.fillRect(t - o / 2, e - o / 2, o, o);
    }), Wi.globalAlpha = 1), Oo = requestAnimationFrame(Kr);
  }
  u.addEventListener("pointermove", (a) => {
    const s = u.getBoundingClientRect(), c = Ho();
    Al((a.clientX - s.left) / c, (a.clientY - s.top) / c);
  }), u.addEventListener("pointerleave", () => go.ready = !1), new ResizeObserver(Ll).observe(u), Ll(), Oo = requestAnimationFrame(Kr);
  const qo = i("movementRippleCanvas"), ci = qo.getContext("2d");
  let pi = !0, vo = null, Re = performance.now();
  function El() {
    const a = qo.parentElement.getBoundingClientRect(), s = Ho(), c = Math.max(1, a.width / s), v = Math.max(1, a.height / s), C = Math.min(window.devicePixelRatio || 1, 2);
    qo.width = Math.max(1, Math.floor(c * C)), qo.height = Math.max(1, Math.floor(v * C)), qo.style.width = c + "px", qo.style.height = v + "px", ci.setTransform(C, 0, 0, C, 0, 0);
  }
  function _l() {
    var a;
    return me || ((a = Ot[$t]) == null ? void 0 : a.kind) === "rest";
  }
  function Ad() {
    const a = Ot[$t];
    return _l() ? 2200 : a ? a.kind === "warmup" || a.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function Pa(a) {
    if (vo = null, !x) return;
    if (!Bt.workout.classList.contains("active")) {
      vo = requestAnimationFrame(Pa);
      return;
    }
    const s = qo.parentElement.getBoundingClientRect(), c = Ho(), v = Math.max(1, s.width / c), C = Math.max(1, s.height / c);
    if (ci.clearRect(0, 0, v, C), pi) {
      const R = Ad(), q = (a - Re) % R / R, t = 15, e = Math.max(8, Math.round(t * C / Math.max(1, v))), o = v / (t + 1), r = C / (e + 1), d = v * 0.5, h = C * 0.52, p = Math.hypot(d, h), g = i("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let M = 1; M <= e; M++)
        for (let A = 1; A <= t; A++) {
          const _ = A * o, B = M * r, Y = Math.hypot(_ - d, B - h) / p, $ = _l(), H = $ ? Math.exp(-Math.pow((Y - (q * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, G = Math.exp(-Math.pow((Y - q * 1.25) * 7, 2)), j = $ ? H : G, ft = $ ? 0.5 + 0.5 * Math.sin(q * Math.PI * 2 - Y * 3) ** 2 : 0.35 + 0.65 * Math.sin(q * Math.PI * 2 - Y * 5) ** 2, U = $ ? 1.4 + j * 4.2 * ft : 1.2 + j * 5 * ft;
          ci.beginPath(), ci.arc(_, B, U, 0, Math.PI * 2), ci.fillStyle = `rgba(${g},${$ ? 0.08 + j * 0.48 : 0.05 + j * 0.55})`, ci.fill();
        }
    }
    vo = requestAnimationFrame(Pa);
  }
  new ResizeObserver(El).observe(qo.parentElement), El(), vo = requestAnimationFrame(Pa);
  const Mr = i("exerciseTitle"), Un = i("exerciseMeta"), Fs = i("stepLabel"), $r = i("digits"), Os = i("fill"), ji = i("progress"), qs = i("pause"), Dl = i("nextName"), Sr = i("nextMeta"), Bl = i("nextIcon"), Xr = i("skipNextSession");
  let Xa = null;
  function Fe(a) {
    for (let s = Math.max(0, a); s < Ot.length; s++)
      if (!Ot[s].sessionHidden) return s;
    return -1;
  }
  function Ed() {
    const a = Ot[$t];
    if (!a) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (me) {
      const v = Fe($t + 1), C = v >= 0 ? Ot[v] : null;
      return C ? { name: C.name, meta: de(C), icon: va(C) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (a.rest > 0) return { name: "Rest", meta: a.rest + " sec · " + (a.roundBreakAfter ? "round " + (a.round + 1) + " next" : "recovery"), icon: "pause" };
    const s = Fe($t + 1), c = s >= 0 ? Ot[s] : null;
    return c ? { name: c.name, meta: de(c), icon: va(c) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function _d() {
    if (!Ot[$t]) return Ot.length;
    const s = Fe($t + 1);
    return s < 0 ? Ot.length : s + 1;
  }
  function va(a) {
    return a.kind === "video" ? "play" : "clock";
  }
  function de(a) {
    return a.kind === "video" ? "YouTube · " + Fn(a.duration) : a.group + " · " + a.duration + " sec";
  }
  function sa() {
    return Ot.length && Ot[Ot.length - 1].round || 1;
  }
  function Jr(a) {
    const s = Ot[a];
    if (!s) return "";
    const c = sa();
    if (c <= 1) return "Step " + (a + 1) + " of " + Ot.length;
    if (s.roundBreak) return "Round " + s.round + " of " + c + " · Rest";
    const v = Ot.filter((C) => C.round === s.round && !C.roundBreak).length;
    return "Round " + s.round + " of " + c + " · Step " + (s.roundIndex + 1) + " of " + v;
  }
  function Wo() {
    return ji.querySelector('[data-step="' + $t + '"]');
  }
  function Qr() {
    Ot[$t] && Number(ji.dataset.round) !== (Ot[$t].round || 1) && js(), [...ji.children].forEach((a) => {
      const s = Number(a.dataset.step);
      a.classList.toggle("done", s < $t), a.classList.toggle("active", s === $t), a.classList.toggle("rewindable", s <= $t), a.disabled = s > $t, s === $t && a.style.setProperty("--segment-progress", "0%");
    }), Ot[$t] && (Fs.textContent = Jr($t), Zn());
  }
  function jo(a) {
    const s = Ot.indexOf(a);
    s < 0 || s <= $t || (a.sessionHidden = !a.sessionHidden, Ja(), ce((a.sessionHidden ? "Hidden " : "Included ") + a.name + " for this session"));
  }
  function Tn() {
    const a = i("upcomingList");
    if (!a) return;
    a.innerHTML = "";
    const s = _d(), c = Ot.slice(s);
    (Ga === "all" ? c : c.slice(0, Math.max(1, Number(Ga) || 1))).forEach((C) => {
      const R = document.createElement("section");
      R.className = "upcomingCard" + (C.sessionHidden ? " sessionHidden" : "") + ($s(C) ? " noMeta" : ""), R.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + ia(va(C)) + '</div><div><div class="upcomingName">' + Zt(C.name) + '</div><div class="upcomingMeta">' + Zt(de(C)) + (sa() > 1 ? " · round " + C.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (C.sessionHidden ? "Include this session" : "Skip this session") + "</button>", R.querySelector(".skipSessionBtn").addEventListener("click", () => jo(C)), a.appendChild(R);
    });
  }
  function Ja() {
    var s;
    const a = Ed();
    Dl.textContent = a.name, Sr.textContent = a.meta, Bl.innerHTML = ia(a.icon);
    {
      const c = me ? Ot[Fe($t + 1)] : ((s = Ot[$t]) == null ? void 0 : s.rest) > 0 ? { kind: "rest" } : Ot[Fe($t + 1)];
      n.querySelector(".nextCard").classList.toggle("noMeta", !!(c && $s(c)));
    }
    if (Xa = null, me) {
      const c = Fe($t + 1);
      c >= 0 && (Xa = Ot[c]);
    } else {
      const c = Ot[$t];
      if (c && c.rest > 0)
        Xa = null;
      else {
        const v = Fe($t + 1);
        v >= 0 && (Xa = Ot[v]);
      }
    }
    Xr && (Xr.hidden = !Xa, Xr.textContent = Xa != null && Xa.sessionHidden ? "Include this session" : "Skip this session"), Tn();
  }
  Xr.addEventListener("click", () => {
    Xa && (Xa.sessionHidden = !Xa.sessionHidden, ce((Xa.sessionHidden ? "Hidden " : "Included ") + Xa.name + " for this session"), Ja());
  });
  let Ln = null, Ws = null;
  function xe(a, s = {}) {
    const c = Qt[oe];
    l.fire(a, { move: (c == null ? void 0 : c.name) || "", move_id: oe, ...s });
  }
  function Dd() {
    const a = Qt[oe];
    Ln = { key: oe, name: (a == null ? void 0 : a.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(Ws), Ws = setInterval(() => {
      Ln && !At && Ln.active++;
    }, 1e3), xe("started", { steps: Ot.length });
  }
  function Vi(a) {
    if (clearInterval(Ws), !Ln) return;
    const s = Ln;
    Ln = null, xe(a ? "completed" : "ended", { seconds: s.active }), !(s.active < 30) && (It.history.unshift({ id: "h-" + s.startedAt, move_id: s.key, name: s.name, start: new Date(s.startedAt).toISOString(), seconds: s.active, completed: a }), It.history = It.history.slice(0, 1e3), za(), Zo(), Kn());
  }
  let ma = null, zi = null, ts = !1;
  function ui() {
    return te().sounds !== !1;
  }
  function Rl() {
    if (ui())
      try {
        navigator.audioSession && (navigator.audioSession.type = "playback"), ma = ma || new (window.AudioContext || window.webkitAudioContext)(), ma.state === "suspended" && ma.resume();
      } catch {
        ma = null;
      }
  }
  function bo(a, s, c, { to: v = a, vol: C = 0.25, type: R = "sine" } = {}) {
    const q = ma.currentTime + s, t = ma.createOscillator(), e = ma.createGain();
    t.type = R, t.frequency.setValueAtTime(a, q), v !== a && t.frequency.exponentialRampToValueAtTime(v, q + c), e.gain.setValueAtTime(1e-4, q), e.gain.exponentialRampToValueAtTime(C, q + 0.01), e.gain.exponentialRampToValueAtTime(1e-4, q + c), t.connect(e).connect(ma.destination), t.start(q), t.stop(q + c + 0.02);
  }
  const Bd = {
    tick: () => bo(880, 0, 0.07, { vol: 0.18 }),
    move: () => {
      bo(660, 0, 0.12, { type: "triangle", vol: 0.3 }), bo(990, 0.13, 0.16, { type: "triangle", vol: 0.3 });
    },
    rest: () => bo(660, 0, 0.4, { to: 440, vol: 0.22 }),
    done: () => {
      bo(523, 0, 0.16, { type: "triangle" }), bo(659, 0.16, 0.16, { type: "triangle" }), bo(784, 0.32, 0.4, { type: "triangle" });
    }
  };
  function An(a) {
    if (!(!ui() || !ma))
      try {
        ma.state === "suspended" && ma.resume(), Bd[a]();
      } catch {
      }
  }
  function wo() {
    Ue >= 1 && Ue <= 3 && Ue !== zi && (zi = Ue, An("tick"));
  }
  function Na() {
    Rl(), L("workout"), Pl();
    const a = Fe(0);
    a >= 0 && Ot[a].kind === "video" && Il(Ot[a]);
  }
  function ya() {
    Zi(), Vi(!1), clearInterval(se), clearInterval(ue), me = !1, yn(!1), i("app").classList.remove("resting"), yr.classList.remove("active"), L("home");
  }
  function Pl() {
    yr.classList.add("active");
    let a = 5;
    Rs.textContent = a, An("tick"), requestAnimationFrame(Zr), clearInterval(ue), ue = setInterval(() => {
      a--, a > 0 ? (Rs.textContent = a, An("tick"), Zr()) : (clearInterval(ue), Rs.textContent = "GO", An("move"), ts = !0, Zr(), setTimeout(() => {
        yr.classList.remove("active"), cancelAnimationFrame(qi), Rd();
      }, 650));
    }, 1e3);
  }
  function js() {
    var s;
    ji.innerHTML = "";
    const a = ((s = Ot[Math.max(0, $t)] || Ot[0]) == null ? void 0 : s.round) || 1;
    ji.dataset.round = a, Ot.forEach((c, v) => {
      if ((c.round || 1) !== a) return;
      const C = document.createElement("button");
      C.dataset.step = v, C.type = "button", C.className = "progressSegment", C.setAttribute("aria-label", "Go to " + c.name), C.addEventListener("click", () => {
        v <= $t && Vs(v);
      }), ji.appendChild(C);
    });
  }
  function yn(a) {
    a = !!a;
    const s = At !== a;
    if (At = a, qs.textContent = a ? "Resume" : "Pause", i("app").classList.toggle("paused", a), ka && Ee)
      try {
        a ? Ee.pauseVideo() : Ee.playVideo();
      } catch {
      }
    s && Ln && xe(a ? "paused" : "resumed");
  }
  function Vs(a) {
    a < 0 || a >= Ot.length || a > $t || (clearInterval(se), me = !1, i("app").classList.remove("resting"), $t = a, yn(!1), Go(), se = setInterval(Uo, 1e3));
  }
  function Rd() {
    if ($t = Fe(0), yn(!1), js(), $t < 0) {
      Mr.textContent = "No activities", Un.textContent = "Open Edit and enable or add a movement", Un.hidden = !1;
      return;
    }
    Dd(), Go(), clearInterval(se), se = setInterval(Uo, 1e3);
  }
  const es = i("videoStage"), Vo = i("videoSound"), zs = 0, Gi = 1, Yn = 2;
  let zo = 0, Ui = null, fi = null, Ee = null, xo = null, Cr = 0, as = !1, ka = null, Tr = null;
  function kn() {
    var a;
    return (a = window.YT) != null && a.Player ? Promise.resolve(window.YT) : Ui || (Ui = new Promise((s, c) => {
      const v = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          v == null || v();
        } catch {
        }
      };
      const C = setInterval(() => {
        var q;
        (q = window.YT) != null && q.Player && (clearInterval(C), clearTimeout(R), s(window.YT));
      }, 100), R = setTimeout(() => {
        clearInterval(C), Ui = null, c(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const q = document.createElement("script");
        q.src = "https://www.youtube.com/iframe_api", q.async = !0, q.onerror = () => {
          clearInterval(C), clearTimeout(R), Ui = null, c(new Error("YouTube did not load"));
        }, document.head.appendChild(q);
      }
    }), Ui);
  }
  function Nl() {
    return fi || (fi = kn().then((a) => new Promise((s) => {
      const c = document.createElement("div");
      i("videoFrame").appendChild(c), Ee = new a.Player(c, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => s(Ee), onStateChange: (v) => ns(v.data), onError: (v) => Lr(v.data) }
      });
    })), fi.catch(() => {
      fi = null;
    }), fi);
  }
  function Il(a) {
    !(a != null && a.videoId) || a.videoError || Nl().then((s) => {
      ka || xo === a.videoId || (xo = a.videoId, Cr = Number(a.start) || 0, as = !1, s.mute(), s.loadVideoById({ videoId: a.videoId, startSeconds: Cr }));
    }).catch(() => {
    });
  }
  function Ia() {
    const a = Fe($t + 1);
    a >= 0 && Ot[a].kind === "video" && Il(Ot[a]);
  }
  function ns(a) {
    if (!ka) {
      a === Gi && !as && (as = !0, Ee.pauseVideo(), Ee.seekTo(Cr, !0));
      return;
    }
    es.classList.toggle("playing", a === Gi), Ot[$t] === ka && performance.now() > zo && (a === Gi && At ? yn(!1) : a === Yn && !At && yn(!0)), a === Gi && _r(ka.videoId, Ee.getDuration()) && za(), a === zs && Ar();
  }
  function Lr(a) {
    const s = ka;
    if (!s) {
      xo = null;
      return;
    }
    a === 101 || a === 150 ? (os(s.videoId), ce("That video can’t play outside YouTube, so it was skipped")) : ce("The video couldn’t play, so it was skipped"), Ar();
  }
  function Yi(a) {
    if (i("app").classList.add("videoStep"), Vo.hidden = !0, ka = a, clearTimeout(Tr), !a.videoId) {
      ce("This video step has no link yet, so it was skipped"), setTimeout(() => Ar(), 0);
      return;
    }
    Nl().then((s) => {
      if (ka !== a) return;
      zo = performance.now() + 1500;
      const c = Number(a.start) || 0;
      xo !== a.videoId ? (xo = a.videoId, Cr = c, s.loadVideoById({ videoId: a.videoId, startSeconds: c })) : (s.seekTo(c, !0), s.playVideo()), s.unMute(), At && s.pauseVideo(), Tr = setTimeout(() => {
        ka !== a || At || (s.getPlayerState() !== Gi ? (s.mute(), s.playVideo(), Vo.hidden = !1) : s.isMuted() && (Vo.hidden = !1));
      }, 1600);
    }).catch(() => {
      ka === a && (ce("YouTube didn’t load, so the video was skipped"), Ar());
    });
  }
  function Gs() {
    if (!i("app").classList.contains("videoStep")) return;
    const a = n.querySelector(".workGrid"), s = n.querySelector(".sessionControlRow"), c = a.getBoundingClientRect().top, v = (s == null ? void 0 : s.offsetHeight) || 42, C = window.innerHeight - c - 16 - v - 84;
    a.style.setProperty("--theater-h", Math.max(240, Math.round(C)) + "px");
  }
  window.addEventListener("resize", Gs);
  function Zi() {
    clearTimeout(Tr);
    const a = ka;
    if (ka = null, i("app").classList.remove("videoStep"), es.classList.remove("playing"), Vo.hidden = !0, a && Ee) {
      try {
        Ee.pauseVideo();
      } catch {
      }
      xo = null;
    }
  }
  function Ar() {
    const a = ka;
    !a || Ot[$t] !== a || (Zi(), clearInterval(se), Ki(), se = setInterval(Uo, 1e3));
  }
  Vo.addEventListener("click", () => {
    Ee && (Ee.unMute(), Ee.playVideo()), Vo.hidden = !0;
  });
  function Hl(a) {
    var v;
    const s = Number(a.start) || 0;
    if (a.useVideoLength === !1) return s + (Number(a.duration) || 300);
    const c = Ee && ka === a && Number((v = Ee.getDuration) == null ? void 0 : v.call(Ee)) || 0;
    return Number(a.end) || c || Number(a.videoDuration) || s + (Number(a.duration) || 300);
  }
  function Er(a, s) {
    const c = Qt[oe];
    [Ne, Vt, wa, c == null ? void 0 : c.warmup, c == null ? void 0 : c.strength, c == null ? void 0 : c.cooldown, c == null ? void 0 : c.sequence].forEach((v) => (Array.isArray(v) ? v : []).forEach((C) => {
      C && C.kind === "video" && C.videoId === a && s(C);
    }));
  }
  function _r(a, s) {
    s = Math.round(Number(s) || 0);
    let c = !1;
    return a && s > 0 && Er(a, (v) => {
      v.videoDuration !== s && (v.videoDuration = s, c = !0);
    }), c;
  }
  function os(a) {
    Er(a, (s) => {
      s.videoError = "embed";
    }), za();
  }
  function Us(a) {
    const s = a.videoId;
    if (!s) return;
    const c = () => {
      xa.classList.contains("open") ? Ye || Me() : (Me(), za());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + s)).then((v) => v.ok ? v.json() : Promise.reject(v.status)).then((v) => {
      a.videoId === s && (a.videoTitle = v.title || "", a.autoName && v.title && (a.name = v.title), c());
    }).catch((v) => {
      a.videoId === s && v === 401 && (a.videoError = "embed", c());
    }), Fl(s).then((v) => {
      _r(s, v) && c();
    }).catch((v) => {
      v === "embed" && a.videoId === s && (a.videoError = "embed", c());
    });
  }
  function Fl(a) {
    return kn().then((s) => new Promise((c, v) => {
      const C = document.createElement("div");
      C.className = "videoProbe", C.setAttribute("aria-hidden", "true");
      const R = document.createElement("div");
      C.appendChild(R), i("app").appendChild(C);
      let q = null, t = !1;
      const e = (d, h) => {
        t || (t = !0, clearTimeout(o), setTimeout(() => {
          try {
            q == null || q.destroy();
          } catch {
          }
          C.remove();
        }, 0), h ? v(h) : c(d));
      }, o = setTimeout(() => e(0), 2e4), r = () => {
        var h;
        const d = Number((h = q == null ? void 0 : q.getDuration) == null ? void 0 : h.call(q)) || 0;
        return d > 0 && e(d), d > 0;
      };
      q = new s.Player(R, {
        width: 320,
        height: 180,
        videoId: a,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            r() || (q.mute(), q.playVideo());
          },
          onStateChange: () => r(),
          onError: (d) => e(0, d.data === 101 || d.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function Go() {
    me = !1;
    const a = Ot[$t];
    i("app").classList.toggle("resting", a.kind === "rest"), a.kind === "video" ? Yi(a) : Zi(), Ue = a.duration, ne = a.duration, zi = null, ts ? ts = !1 : An(a.kind === "rest" ? "rest" : "move"), Mr.textContent = a.name, Un.textContent = a.group, Un.hidden = !0, Fs.textContent = Jr($t), Ln && xe("step", { name: a.name, group: a.group, kind: a.kind, step: $t + 1, of: Ot.length, round: a.round || 1, rounds: sa(), duration: a.duration }), Ja(), Qr(), Ia(), a.kind === "video" && setTimeout(Gs, 0);
  }
  function Zn() {
    var C;
    const a = ((C = Ot[$t]) == null ? void 0 : C.kind) === "video" && !me, s = a && Ue >= 60;
    $r.textContent = s ? Fn(Ue) : Ue, $r.classList.toggle("long", s), a && (i("videoClock").textContent = Fn(Ue) + " left");
    const c = Ue / ne * 100;
    Os.style.width = c + "%";
    const v = Wo();
    if (v && !me) {
      const R = 100 - c;
      v.style.setProperty("--segment-progress", R + "%");
    }
  }
  function Uo() {
    var s, c;
    if (At) return;
    const a = Ot[$t];
    if ((a == null ? void 0 : a.kind) === "video" && !me && ka === a) {
      const v = Number((s = Ee == null ? void 0 : Ee.getCurrentTime) == null ? void 0 : s.call(Ee)) || 0, C = Number(a.start) || 0, R = Hl(a);
      ne = Math.max(1, R - C), (v > C || ((c = Ee == null ? void 0 : Ee.getPlayerState) == null ? void 0 : c.call(Ee)) === Gi) && (Ue = Math.max(0, Math.ceil(R - v))), Zn(), wo(), v > C && v >= R - 0.25 && Ar();
      return;
    }
    Ue--, Zn(), wo(), Ue <= 0 && (a.rest > 0 ? Ol(a.rest) : Ki());
  }
  function Ol(a) {
    var c;
    me = !0, i("app").classList.add("resting");
    const s = Wo();
    s && s.style.setProperty("--segment-progress", "100%"), clearInterval(se), Ue = a, ne = a, zi = null, An("rest"), Ln && xe("rest", { duration: a }), Mr.textContent = "Rest", Un.textContent = (c = Ot[$t]) != null && c.roundBreakAfter ? "Round " + (Ot[$t].round + 1) + " next" : "Recovery", Ja(), Zn(), se = setInterval(() => {
      At || (Ue--, Zn(), wo(), Ue <= 0 && (clearInterval(se), Ki(), se = setInterval(Uo, 1e3)));
    }, 1e3);
  }
  function Ki() {
    me = !1;
    const a = Fe($t + 1);
    if (a >= 0)
      $t = a, Go();
    else {
      clearInterval(se), Zi(), yn(!1), i("app").classList.remove("resting"), Mr.textContent = "Complete", Un.textContent = "Move finished", Un.hidden = !1, $r.textContent = "✓";
      {
        const s = sa();
        Fs.textContent = s > 1 ? s + " rounds done" : Ot.filter((c) => !c.roundBreak).length + " steps done";
      }
      Vi(!0), An("done");
      {
        const s = el(7).reduce((c, v) => c + v.minutes, 0);
        Un.textContent = "Move finished · " + s + " min in the last 7 days";
      }
      Os.style.width = "100%", Ja();
    }
  }
  i("skipExercise").addEventListener("click", () => {
    Se(), yn(!1);
  });
  function Se() {
    clearInterval(se);
    const a = Ot[$t];
    if (me) {
      me = !1, i("app").classList.remove("resting");
      const c = Fe($t + 1);
      c >= 0 ? ($t = c, Go(), se = setInterval(Uo, 1e3)) : Ki();
      return;
    }
    if (a && a.rest > 0) {
      Ol(a.rest);
      return;
    }
    const s = Fe($t + 1);
    s >= 0 ? ($t = s, Go(), se = setInterval(Uo, 1e3)) : Ki();
  }
  i("restartSegment").addEventListener("click", () => {
    if (clearInterval(se), yn(!1), me) {
      const a = Ot[$t];
      Ue = a.rest, ne = a.rest, zi = null, An("rest"), Mr.textContent = "Rest", Un.textContent = "Recovery", i("app").classList.add("resting"), Ja(), Zn();
    } else
      Go();
    se = setInterval(me ? () => {
      At || (Ue--, Zn(), wo(), Ue <= 0 && (clearInterval(se), Ki(), se = setInterval(Uo, 1e3)));
    } : Uo, 1e3);
  });
  function la(a, s, c, v) {
    let C = 0, R = null, q = !1;
    function t() {
      R && cancelAnimationFrame(R), R = null, C = 0, q = !1, s.style.width = "0%", a.classList.remove("holding");
    }
    function e(d) {
      if (!q) return;
      C || (C = d);
      const h = Math.min(1, (d - C) / c);
      if (s.style.width = h * 100 + "%", h >= 1) {
        q = !1, R && cancelAnimationFrame(R), R = null, s.style.width = "100%", setTimeout(() => s.style.width = "0%", 90), v();
        return;
      }
      R = requestAnimationFrame(e);
    }
    function o(d) {
      var h;
      if (!(d && d.button !== void 0 && d.button !== 0)) {
        d == null || d.preventDefault(), t(), q = !0, a.classList.add("holding");
        try {
          (h = a.setPointerCapture) == null || h.call(a, d.pointerId);
        } catch {
        }
        R = requestAnimationFrame(e);
      }
    }
    function r() {
      q && t();
    }
    a.addEventListener("pointerdown", o), a.addEventListener("pointerup", r), a.addEventListener("pointercancel", r), a.addEventListener("lostpointercapture", r), a.addEventListener("keydown", (d) => {
      (d.key === " " || d.key === "Enter") && !d.repeat && o(d);
    }), a.addEventListener("keyup", (d) => {
      (d.key === " " || d.key === "Enter") && r();
    });
  }
  const is = i("endWorkout");
  la(is, i("holdEndFill"), 1500, ya);
  const $i = i("deleteMoveConfirm");
  i("deleteMoveOpen").addEventListener("click", () => {
    $i.classList.add("open"), $i.setAttribute("aria-hidden", "false");
  }), i("deleteMoveCancel").addEventListener("click", () => {
    $i.classList.remove("open"), $i.setAttribute("aria-hidden", "true");
  });
  function Ys() {
    const a = oe, s = n.querySelector('.workoutPanel[data-workout="' + a + '"]');
    s && s.remove(), delete Qt[a], It.order = It.order.filter((v) => v !== a);
    let c = n.querySelector(".workoutPanel[data-workout]");
    if (!c) {
      const v = "custom-" + Date.now();
      Qt[v] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, It.order.push(v), c = mn(v, Qt[v]);
    }
    $i.classList.remove("open"), $i.setAttribute("aria-hidden", "true"), ho = null, Yr(), Le(c.dataset.workout), za(), ce("Move deleted");
  }
  la(i("deleteMoveYes"), i("deleteMoveFill"), 1500, Ys);
  const Zs = n.querySelector(".rubberTabs"), Ma = i("rubberIndicator");
  function Qa(a, s = !0) {
    if (!a || !Zs || !Ma) return;
    const c = Zs.getBoundingClientRect(), v = a.getBoundingClientRect();
    Ma.style.transition = s ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const C = Ho();
    Ma.style.left = (v.left - c.left) / C + Zs.scrollLeft + "px", Ma.style.width = v.width / C + "px", s && (Ma.style.transform = "scaleX(1.08)", setTimeout(() => Ma.style.transform = "scaleX(1)", 180));
  }
  n.querySelectorAll(".tab").forEach((a) => a.addEventListener("click", () => {
    a.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), n.querySelectorAll(".tab").forEach((s) => s.classList.remove("active")), n.querySelectorAll(".settingsPane").forEach((s) => s.classList.remove("active")), a.classList.add("active"), i(a.dataset.pane).classList.add("active"), Qa(a, !0);
  })), requestAnimationFrame(() => Qa(n.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => Qa(n.querySelector(".tab.active"), !1));
  const En = i("pixelTrailToggle"), hi = i("rippleToggle"), Qe = i("trailStrength"), Ha = i("trailLife");
  function Sa(a, s) {
    te()[a] = s, za();
  }
  const yo = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function Ks(a) {
    return a.kind === "rest" ? "rest" : a.kind === "video" ? "video" : "g:" + String(a.group || "").trim().toLowerCase();
  }
  function $s(a) {
    var s;
    return !!((s = te().hideMeta) != null && s[Ks(a)]);
  }
  function ql() {
    const a = /* @__PURE__ */ new Map(), s = (c, v, C) => {
      if (!c) return;
      Array.isArray(c) && (c = { name: c[1], group: c[2], kind: "work" });
      const R = Ks(c);
      let q = a.get(R);
      q || (q = { key: R, label: R === "rest" ? "Rest" : R === "video" ? "Video" : String(c.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, a.set(R, q)), q.kinds.add(R === "rest" ? "Rest" : R === "video" ? "Video" : v), q.moves.add(C), q.count++;
    };
    return Object.values(Qt).forEach((c) => {
      const v = c.name || "Move";
      (c.warmup || (c.customSequence ? [] : Pn)).forEach((C) => s(C, "Warm-up", v)), (c.customSequence ? c.sequence || [] : c.strength || []).forEach((C) => s(C, C.presetRole === "warmup" ? "Warm-up" : C.presetRole === "cooldown" ? "Cooldown" : "Movement", v)), (c.cooldown || (c.customSequence ? [] : Xt)).forEach((C) => s(C, "Cooldown", v));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([c, v]) => {
      a.has(c) || a.set(c, { key: c, label: v, kinds: /* @__PURE__ */ new Set([v]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...a.values()].map((c) => ({ ...c, kind: c.kinds.has("Movement") ? "Movement" : [...c.kinds][0], moves: [...c.moves] })).sort((c, v) => yo.indexOf(c.kind) - yo.indexOf(v.kind) || c.label.localeCompare(v.label));
  }
  let $e = "all";
  function Yo() {
    const a = i("metaSearch").value.trim().toLowerCase();
    return ql().filter((s) => ($e === "all" || s.kind === $e) && (!a || s.label.toLowerCase().includes(a) || s.moves.some((c) => c.toLowerCase().includes(a))));
  }
  function Dr() {
    const a = i("metaTableBody");
    if (!a) return;
    const s = te().hideMeta || {}, c = Yo();
    a.innerHTML = c.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', c.forEach((C) => {
      const R = !s[C.key], q = C.count ? (C.moves.length > 2 ? C.moves.slice(0, 2).join(", ") + " + " + (C.moves.length - 2) + " more" : C.moves.join(", ")) + " · " + C.count + " step" + (C.count === 1 ? "" : "s") : "Not used yet", t = document.createElement("tr");
      t.className = R ? "" : "off", t.innerHTML = '<td><div class="metaType">' + Zt(C.label) + '</div><div class="metaSub">' + Zt(C.kind + " · " + q) + '</div></td><td class="metaKindCol">' + Zt(C.kind) + '</td><td class="metaUsedCol">' + Zt(q) + '</td><td class="metaSwitchCol"><button class="switch' + (R ? " on" : "") + '" type="button" role="switch" aria-checked="' + R + '" aria-label="Second line for ' + Zt(C.label) + ' on phones"></button></td>', t.querySelector(".switch").addEventListener("click", () => Xs([C.key], R)), a.appendChild(t);
    });
    const v = c.filter((C) => s[C.key]).length;
    i("metaCount").textContent = c.length ? c.length + " type" + (c.length === 1 ? "" : "s") + (v ? " · " + v + " hidden on phones" : "") : "";
  }
  function Xs(a, s) {
    const c = { ...te().hideMeta || {} };
    a.forEach((v) => {
      s ? c[v] = !0 : delete c[v];
    }), Sa("hideMeta", c), Dr(), Bi(), Ja();
  }
  i("metaSearch").addEventListener("input", Dr), i("metaKinds").querySelectorAll(".kindChip").forEach((a) => a.addEventListener("click", () => {
    $e = a.dataset.kind, i("metaKinds").querySelectorAll(".kindChip").forEach((s) => s.classList.toggle("active", s === a)), Dr();
  })), i("metaHideAll").addEventListener("click", () => Xs(Yo().map((a) => a.key), !0)), i("metaShowAll").addEventListener("click", () => Xs(Yo().map((a) => a.key), !1));
  const Xi = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...te().toggles || {} };
  function Js() {
    n.querySelectorAll("[data-toggle]").forEach((c) => c.classList.toggle("on", Xi[c.dataset.toggle] !== !1)), n.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([c, v]) => {
      i(v).hidden = Xi[c] === !1;
    });
    const a = ["steps", "mood", "energyLevel"].some((c) => Xi[c] !== !1);
    n.querySelector(".activityCard").hidden = !a, i("weatherCard").hidden = !0;
    const s = n.querySelector("#homeView .grid");
    s.classList.toggle("noActivity", !a), s.classList.toggle("noWeather", !0);
  }
  n.querySelectorAll("[data-toggle]").forEach((a) => a.addEventListener("click", () => {
    Xi[a.dataset.toggle] = Xi[a.dataset.toggle] === !1, Js(), Sa("toggles", { ...Xi });
  })), Js();
  function Wl() {
    En.classList.toggle("on", Gn), hi.classList.toggle("on", pi), Qe.value = Math.round(mo * 100), i("trailStrengthValue").textContent = Qe.value + "%", Ha.value = Fo, i("trailLifeValue").textContent = Ha.value + " ms";
  }
  te().trailEnabled !== void 0 && (Gn = te().trailEnabled), te().rippleEnabled !== void 0 && (pi = te().rippleEnabled), te().trailStrength !== void 0 && (mo = te().trailStrength), te().trailMaxAge !== void 0 && (Fo = te().trailMaxAge), Wl();
  const rs = i("soundsToggle");
  rs.classList.toggle("on", ui()), rs.addEventListener("click", () => {
    Sa("sounds", !ui()), rs.classList.toggle("on", ui()), ui() && (Rl(), An("move"));
  }), En.addEventListener("click", () => {
    Gn = !Gn, En.classList.toggle("on", Gn), Gn || (di = []), Sa("trailEnabled", Gn);
  }), hi.addEventListener("click", () => {
    pi = !pi, hi.classList.toggle("on", pi), Sa("rippleEnabled", pi);
  }), Qe.addEventListener("input", () => {
    mo = Number(Qe.value) / 100, i("trailStrengthValue").textContent = Qe.value + "%";
  }), Qe.addEventListener("change", () => Sa("trailStrength", mo)), Ha.addEventListener("input", () => {
    Fo = Number(Ha.value), i("trailLifeValue").textContent = Ha.value + " ms";
  }), Ha.addEventListener("change", () => Sa("trailMaxAge", Fo)), ga.addEventListener("change", () => Sa("upcomingCount", Ga));
  function jl(a) {
    n.querySelectorAll(".themeBtn").forEach((c) => c.classList.toggle("active", c.dataset.theme === a));
    const s = a === "light";
    i("app").classList.toggle("light", s), l.setLight(s), _n(n);
  }
  jl(te().theme || "dark"), n.querySelectorAll(".themeBtn").forEach((a) => a.addEventListener("click", () => {
    jl(a.dataset.theme), Sa("theme", a.dataset.theme);
  }));
  const tn = { steps: null, weather: null, ...te().entities || {} };
  let ea = null, ba = {};
  function Qs(a) {
    const s = Object.values(a).filter((t) => t.entity_id.startsWith("sensor.") || t.entity_id.startsWith("input_number.")), c = (t) => t.attributes.friendly_name || t.entity_id, v = s.filter((t) => /step/i.test(t.entity_id) || /step/i.test(c(t)) || ["steps", "step"].includes(String(t.attributes.unit_of_measurement || "").toLowerCase())), C = s.filter((t) => !v.includes(t)), R = (t, e) => c(t).localeCompare(c(e)), q = (t, e) => /health_steps/.test(e.entity_id) - /health_steps/.test(t.entity_id) || R(t, e);
    return { suggested: v.sort(q), rest: C.sort(R), label: c };
  }
  function tl(a) {
    const s = i("stepsEntity");
    if (!s || s.matches(":focus")) return;
    const { suggested: c, rest: v, label: C } = Qs(a), R = (e) => '<option value="' + Zt(e.entity_id) + '">' + Zt(C(e)) + "</option>";
    s.innerHTML = '<option value="">Not connected</option>' + (c.length ? '<optgroup label="Suggested">' + c.map(R).join("") + "</optgroup>" : "") + (v.length ? '<optgroup label="All sensors">' + v.map(R).join("") + "</optgroup>" : ""), s.value = tn.steps || "";
    const q = i("stepsStatus"), t = tn.steps && a[tn.steps];
    q.textContent = t ? "Connected · " + C(t) : q.dataset.empty;
  }
  i("stepsEntity").addEventListener("change", () => {
    tn.steps = i("stepsEntity").value || null, Sa("entities", { ...tn }), ba = {}, Ul(), ea && (tl(ea), zl(ea));
  });
  function Vl(a, s = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: s }).format(a);
  }
  function ss() {
    const a = tn.steps && (ea == null ? void 0 : ea[tn.steps]), s = Number(a == null ? void 0 : a.state);
    return Number.isFinite(s) ? s : null;
  }
  function zl(a) {
    var v;
    const s = tn.steps, c = s ? Number((v = a[s]) == null ? void 0 : v.state) : NaN;
    i("stepsMeta").textContent = s ? Number.isFinite(c) ? Vl(c) : "—" : "Set up in Settings";
  }
  let Gl = 0;
  async function Ul() {
    const a = tn.steps;
    if (!a || !l.ws) return;
    Gl = Date.now();
    const s = /* @__PURE__ */ new Date(), c = new Date(s.getFullYear(), s.getMonth(), s.getDate() - 30);
    try {
      const v = await l.ws({ type: "recorder/statistics_during_period", start_time: c.toISOString(), end_time: s.toISOString(), statistic_ids: [a], period: "day", types: ["max"] }), C = (v == null ? void 0 : v[a]) || [], R = {};
      if (C.forEach((q) => {
        Number.isFinite(q.max) && (R[Be(new Date(q.start))] = q.max);
      }), !Object.keys(R).length) {
        const q = await l.ws({ type: "history/history_during_period", start_time: c.toISOString(), end_time: s.toISOString(), entity_ids: [a], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((q == null ? void 0 : q[a]) || []).forEach((t) => {
          const e = Number(t.s ?? t.state), o = t.lu ? t.lu * 1e3 : Date.parse(t.last_updated || t.last_changed);
          if (!Number.isFinite(e) || !o) return;
          const r = Be(new Date(o));
          R[r] = Math.max(R[r] || 0, e);
        });
      }
      ba = R, Kn();
    } catch {
    }
  }
  function Zo() {
    Kn();
  }
  Zo(), setInterval(() => {
    Zo(), He(), we();
  }, 10 * 60 * 1e3);
  function el(a) {
    const s = {}, c = {};
    It.history.forEach((q) => {
      const t = Be(new Date(q.start));
      s[t] = (s[t] || 0) + (q.seconds || 0) / 60, c[t] = (c[t] || 0) + 1;
    });
    const v = /* @__PURE__ */ new Date(), C = Be(v), R = [];
    for (let q = a - 1; q >= 0; q--) {
      const t = new Date(v.getFullYear(), v.getMonth(), v.getDate() - q), e = Be(t), o = It.checkins.filter((d) => d.date === e), r = (d) => {
        const h = o.map((p) => p[d]).filter(Boolean);
        return h.length ? h.reduce((p, m) => p + m, 0) / h.length : null;
      };
      R.push({
        key: e,
        date: t,
        minutes: Math.round(s[e] || 0),
        moves: c[e] || 0,
        steps: e === C && ss() != null ? ss() : ba[e] ?? null,
        mood: r("mood"),
        energy: r("energy")
      });
    }
    return R;
  }
  function Pd(a) {
    let s = a.length - 1;
    a[s] && !a[s].minutes && s--;
    let c = 0;
    for (; s >= 0 && a[s].minutes > 0; )
      c++, s--;
    return c;
  }
  function Kn() {
    const a = i("insightCard");
    if (!a) return;
    const s = el(30), c = Pd(s), v = s.reduce((o, r) => o + r.minutes, 0), C = /* @__PURE__ */ new Date(), R = Be(C), q = Be(new Date(C.getFullYear(), C.getMonth(), C.getDate() - (C.getDay() + 6) % 7)), t = s.filter((o) => o.key >= q && o.key <= R).reduce((o, r) => o + r.minutes, 0), e = (o, r, d) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + o + '</div><div><div class="activityRowName">' + Zt(r) + '</div><div class="activityRowMeta">' + Zt(d) + "</div></div></div>";
    a.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + ia("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + e(ia("clock"), "This week", t + " min") + e(ia("streak"), "Streak", c + " day" + (c === 1 ? "" : "s")) + e(ia("calendar"), "30 days", v + " min") + "</div>";
  }
  const ls = {
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
  }, Yl = (a) => a === "sunny" ? "clear" : a === "clear-night" ? "night" : a === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(a) ? "rain" : ["snowy", "snowy-rainy"].includes(a) ? "snow" : "cloudy", mi = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Ko = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let Zl = 0;
  const Br = (a, s) => '<path class="' + s + '" d="' + a + '"/>', Nd = (a, s) => ' style="animation-delay:-' + Math.round(a * 137 % s) + 'ms"', en = (a, s, c, v) => {
    const C = c * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (v < 1 ? ' opacity="' + v + '"' : "") + Nd(a, 2400) + ' d="M' + a + " " + (s - c) + "L" + (a + C) + " " + (s - C) + "L" + (a + c) + " " + s + "L" + (a + C) + " " + (s + C) + "L" + a + " " + (s + c) + "L" + (a - C) + " " + (s + C) + "L" + (a - c) + " " + s + "L" + (a - C) + " " + (s - C) + 'Z"/>';
  }, Ji = ([a, s, c], v) => '<path class="wxMoonPath" d="' + a + '" fill="url(#' + v + ')"/><defs><linearGradient id="' + v + '" x1="0" y1="' + s + '" x2="0" y2="' + c + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Kl = (a, s) => s ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', ko = (a) => (a ? ["29.35", "43.04", "56.74"].map((s, c) => '<g class="wxDrop" style="animation-delay:-' + c * 317 + 'ms"><rect class="wxAccent" x="' + s + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + s + ' 60.65)"/></g>') : [19, 26, 33].map((s, c) => '<g class="wxDrop" style="animation-delay:-' + c * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + s + ' 38)"/></g>')).join(""), $l = (a) => (a ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([s, c], v) => '<circle class="wxFlake" style="animation-delay:-' + v * 640 + 'ms" cx="' + s + '" cy="' + c + '" r="' + (a ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function ds(a, s, c, v) {
    return a === "clear" ? s ? Ji(c ? Ko.l : Ko.s, v) + (c ? en(70, 20, 5.83, 1) + en(78.33, 41.67, 3.75, 0.8) + en(60, 71.67, 3.33, 0.6) : en(42, 12, 3.5, 1) + en(47, 25, 2.25, 0.8) + en(36, 43, 2, 0.6)) : Kl(v, c) : a === "partly" ? (s ? Ji(c ? Ko.lp : Ko.sp, v) : c ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + Br(c ? mi.lp : mi.sp, s ? "wxCloudLight" : "wxBright") + (s ? c ? en(73.33, 16.67, 4.17, 0.9) : en(44, 10, 2.5, 0.9) : "") : a === "cloudy" ? Br(c ? mi.lc : mi.s, s ? "wxCloudLight" : "wxBright") + (s ? c ? en(15, 15, 3.75, 0.8) + en(76.67, 13.33, 2.92, 0.6) : en(9, 9, 2.25, 0.8) + en(46, 8, 1.75, 0.6) : "") : Br(c ? mi.lr : mi.s, "wxCloudLight") + (a === "rain" ? ko(c) : $l(c));
  }
  const al = () => {
    var a;
    return ((a = ea == null ? void 0 : ea["sun.sun"]) == null ? void 0 : a.state) === "below_horizon";
  };
  let an = te().weatherStyle || "bitmap", aa = te().weatherLayout === "strip" ? "strip" : "tiles", Id = te().weatherMotion !== !1;
  const $n = () => Id && !be(), Rr = /* @__PURE__ */ new Map(), nl = 700, Nt = (a) => {
    const [s, c] = a.split("/");
    return { k: s === "fog" ? "cloudy" : s === "storm" ? "rain" : s, night: c === "night" };
  };
  function Fa(a, s, c, v = an, C, R) {
    let q = Yl(a);
    const t = q === "night" || (R != null ? !!R : !!c && al());
    q === "night" && (q = "clear");
    const e = s ? 90 : 54, o = Td(a, t), r = performance.now();
    let d = C ? Rr.get(C) : null;
    if (C && !d ? Rr.set(C, d = { key: o, t0: -1e9 }) : d && d.key !== o && (d.fromKey = d.key, d.from = d.last || null, d.key = o, d.t0 = r), v !== "smooth") return '<span class="wxIcon pixels' + (s ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + o + '"' + (C ? ' data-wx-slot="' + C + '"' : "") + ' data-wx-style="' + v + '" data-wx-size="' + e + '"></canvas></span>';
    let h = "";
    if (d && r - d.t0 < nl && ($n() || be())) {
      const p = Nt(d.fromKey);
      h = '<span class="wxLayer wxOut ' + p.k + (p.night ? " night" : "") + '" style="animation-delay:' + Math.round(d.t0 - r) + 'ms"><svg viewBox="0 0 ' + e + " " + e + '">' + ds(p.k, p.night, s, "wxg" + ++Zl) + "</svg></span>";
    }
    return '<span class="wxIcon ' + q + (t ? " night" : "") + (s ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + e + " " + e + '">' + ds(q, t, s, "wxg" + ++Zl) + "</svg>" + h + "</span>";
  }
  function Qi() {
    const a = i("app"), s = getComputedStyle(a), c = (t) => s.getPropertyValue(t).trim(), v = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([t, e]) => {
      c(e) && (v[t] = c(e));
    });
    const C = c("--color-text-primary") || "#f1f1f1", R = c("--color-bg-card") || "#222222", q = a.classList.contains("light");
    return { colors: v, ink: q ? C : R, paper: q ? R : C };
  }
  function _n(a, s = performance.now()) {
    const c = a.querySelectorAll("canvas[data-wx]");
    if (!c.length) return;
    const v = Qi(), C = $n(), R = be();
    c.forEach((q) => {
      var d;
      const t = q.dataset.wx, e = q.dataset.wxSlot ? Rr.get(q.dataset.wxSlot) : null;
      let o = cc(t, v.colors);
      if (e && e.key === t) {
        const h = (s - e.t0) / nl;
        h < 1 && (C || R) && (o = bu(e.from || cc(e.fromKey, v.colors), o, Math.max(0, h), v.colors, R)), e.last = o;
      }
      const r = Cp(o, { size: Number(q.dataset.wxSize) || 54, px: 2, oneBit: q.dataset.wxStyle === "onebit", colors: v.colors, ink: v.ink, paper: v.paper, clock: s, idle: C });
      q.width !== r.w && (q.width = r.w), q.height !== r.h && (q.height = r.h), (d = q.getContext("2d")) == null || d.putImageData(new ImageData(r.data, r.w, r.h), 0, 0);
    });
  }
  let cs = null, na = -1;
  function ol(a) {
    if (cs = null, !x) return;
    const s = $n(), c = Math.floor(a / 100), v = [...Rr.values()].some((e) => a - e.t0 < nl), C = [...ps.values()].some((e) => a - e.t0 < e.dur), R = Bt.home.classList.contains("active"), q = oa.classList.contains("open"), t = s && an === "smooth" && (q || R && aa === "strip");
    !document.hidden && (v || C || t || s && c !== na) && (na = c, R && (_n(i("weatherCard"), a), gi(i("weatherCard"), a)), q && (_n(oa, a), gi(oa, a))), (s || v || C) && (cs = requestAnimationFrame(ol));
  }
  function Mo() {
    i("app").classList.toggle("wxMotion", $n()), !cs && x && (cs = requestAnimationFrame(ol));
  }
  let Dn = [];
  const Xe = 36e5, Hd = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function So() {
    const a = /* @__PURE__ */ new Date(), s = (R, q) => new Date(a.getFullYear(), a.getMonth(), a.getDate() + R, q), c = [], v = [], C = [...Array(6)].map((R, q) => {
      const t = s(q, 6), e = s(q, 18), o = s(q + 1, 6), r = Dn.find((h) => Be(new Date(h.datetime)) === Be(t)), d = (h, p, m) => {
        const g = c.filter((_) => _.t >= +h && _.t < +p);
        if (g.length) {
          const _ = {};
          return g.forEach((B) => {
            _[B.c] = (_[B.c] || 0) + (Hd.has(B.c) ? 2 : 1);
          }), Object.entries(_).sort((B, Y) => Y[1] - B[1])[0][0];
        }
        const M = v.find((_) => {
          const B = +new Date(_.datetime);
          return B >= +h - 3 * Xe && B < +p && (_.is_daytime == null || !!_.is_daytime == !m);
        });
        if (M) return M.condition;
        const A = (r == null ? void 0 : r.condition) || "cloudy";
        return m && A === "sunny" ? "clear-night" : A;
      };
      return { start: +t, end: +o, day: d(t, e, !1), night: d(e, o, !0), hi: Number(r == null ? void 0 : r.temperature), lo: Number(r == null ? void 0 : r.templow) };
    });
    return { days: C, hours: c, start: C[0].start, end: C[5].end };
  }
  const Xl = (a, s) => {
    const c = a.days.findIndex((C) => s < C.end);
    if (c < 0) return 1;
    const v = a.days[c];
    return Math.max(0, (c + (s - v.start) / (v.end - v.start)) / 6);
  }, Jl = (a, s) => {
    const c = Math.max(0, Math.min(0.99999, s)) * 6, v = Math.floor(c), C = a.days[v];
    return C.start + (c - v) * (C.end - C.start);
  };
  function il(a, s) {
    const c = Math.max(0, a.days.findIndex((e) => s < e.end)), v = a.days[c], C = (s - v.start) / (v.end - v.start) >= 0.5;
    let R = C ? v.night : v.day, q = NaN;
    const t = a.hours;
    if (t.length && s >= t[0].t - Xe && s <= t[t.length - 1].t + Xe) {
      let e = t.findIndex((d) => d.t > s);
      e < 0 && (e = t.length);
      const o = t[Math.max(0, e - 1)], r = t[Math.min(t.length - 1, e)];
      R = o.c || R, q = r.t > o.t ? o.temp + (r.temp - o.temp) * Math.max(0, Math.min(1, (s - o.t) / (r.t - o.t))) : o.temp;
    }
    if (!Number.isFinite(q)) {
      const e = [];
      if (a.days.forEach((o) => {
        Number.isFinite(o.lo) && e.push([o.start - Xe, o.lo]), Number.isFinite(o.hi) && e.push([o.start + 9 * Xe, o.hi]);
      }), e.length) {
        q = s <= e[0][0] ? e[0][1] : e[e.length - 1][1];
        for (let o = 1; o < e.length; o++) if (s <= e[o][0] && s > e[o - 1][0]) {
          const [r, d] = e[o - 1], [h, p] = e[o];
          q = d + (p - d) * (1 - Math.cos(Math.PI * (s - r) / (h - r))) / 2;
          break;
        }
      }
    }
    return { cond: C && R === "sunny" ? "clear-night" : R, temp: q, night: C, day: v };
  }
  const Ql = (a) => Be(new Date(a)) === Be(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(a)), ps = /* @__PURE__ */ new Map(), Fd = 900, rl = 700;
  let tr = null;
  const Ca = typeof ResizeObserver == "function" ? new ResizeObserver((a) => a.forEach((s) => {
    gi(s.target.parentElement), s.target.closest("#wxDialog") && td();
  })) : null;
  function gi(a, s = performance.now()) {
    const c = a.querySelectorAll("canvas[data-wx-strip]");
    if (!c.length) return;
    const v = So(), C = v.days.flatMap((d) => [{ cond: d.day, night: !1 }, { cond: d.night, night: !0 }]), R = C.map((d) => d.cond).join(), q = Qi(), t = $n(), e = be(), o = Number(Be(new Date(v.start)).replace(/\D/g, "")) % 9973;
    let r = !1;
    c.forEach((d) => {
      var _;
      const h = d.clientWidth, p = d.clientHeight;
      if (!h || !p) return;
      const m = d.dataset.wxStrip;
      let g = ps.get(m);
      g ? g.sig !== R && (g.prev = g.segs, g.sig = R, g.segs = C, g.t0 = s, g.dur = rl) : ps.set(m, g = { sig: R, segs: C, prev: null, t0: s, dur: Fd });
      const M = t || e ? Math.min(1, Math.max(0, (s - g.t0) / g.dur)) : 1;
      M < 1 && (r = !0);
      const A = { width: h, height: p, colors: q.colors, clock: s, ambient: t, seed: o, reveal: e ? M : 1 - Math.pow(1 - M, 3), prev: M < 1 ? g.prev : null, reduce: e };
      if (an === "smooth") {
        const B = Math.min(2, window.devicePixelRatio || 1), Y = Math.round(h * B), $ = Math.round(p * B);
        d.width !== Y && (d.width = Y), d.height !== $ && (d.height = $);
        const H = d.getContext("2d");
        if (!H) return;
        H.setTransform(B, 0, 0, B, 0, 0), Ru(H, C, A);
      } else {
        const B = Bu(C, { ...A, px: 2, oneBit: an === "onebit", ink: q.ink, paper: q.paper });
        d.width !== B.w && (d.width = B.w), d.height !== B.h && (d.height = B.h), (_ = d.getContext("2d")) == null || _.putImageData(new ImageData(B.data, B.w, B.h), 0, 0);
      }
    }), r && Mo();
  }
  function sl() {
    const a = i("weatherCard");
    if (!a || a.hidden) return;
    const s = tn.weather, c = s && (ea == null ? void 0 : ea[s]);
    if (!c) {
      a.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + Fa("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (s ? "Not available" : "Set up in Settings") + "</div></div></div></div>", _n(a);
      return;
    }
    const v = c.attributes || {}, C = v.temperature_unit || "°", R = (H) => Number.isFinite(Number(H)) ? Math.round(Number(H)) + "°" : "—", q = (v.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", t = ls[c.state] || (c.state ? c.state.charAt(0).toUpperCase() + c.state.slice(1) : "—"), e = Be(/* @__PURE__ */ new Date()), o = Dn.slice(0, 7), r = o.find((H) => Be(new Date(H.datetime)) === e) || null, d = o.filter((H) => Be(new Date(H.datetime)) >= e).slice(0, 6), h = /* @__PURE__ */ new Date(), p = Be(new Date(h.getFullYear(), h.getMonth(), h.getDate() + 1)), m = r ? "H " + R(r.temperature) + "&ensp; L " + R(r.templow) : "", g = (H) => {
      const G = Be(new Date(H.datetime));
      return G === e ? "Today" : G === p ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(H.datetime));
    }, M = Number.isFinite(Number(v.temperature)) ? Math.round(Number(v.temperature)) : "—", A = (H) => {
      const G = new Date(H.datetime);
      return Math.round((new Date(G.getFullYear(), G.getMonth(), G.getDate()) - new Date(h.getFullYear(), h.getMonth(), h.getDate())) / 864e5);
    }, _ = (H) => (ls[H] || H || "").toLowerCase(), B = (H, G) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + A(H) + '" aria-label="' + Zt(g(H) + ": " + _(H.condition) + ", " + R(H.temperature) + " / " + R(H.templow) + ". Open the forecast") + '">' + Fa(H.condition, !1, !1, an, "day" + G) + '<div><div class="activityRowName">' + Zt(g(H)) + '</div><div class="activityRowMeta">' + R(H.temperature) + " / " + R(H.templow) + "</div></div></div>", Y = () => '<div class="wxStrip"><div class="wxStripDays">' + So().days.map((G, j) => {
      const U = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(G.start)) + ": " + _(G.day) + (_(G.day) === _(G.night) ? " all day and night" : ", then " + _(G.night) + " overnight") + (Number.isFinite(G.hi) ? ". High " + R(G.hi) : "") + (Number.isFinite(G.lo) ? ", low " + R(G.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + j + '" aria-label="' + Zt(U) + '"><span class="wxDayName">' + Zt(Ql(G.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + R(G.hi) + '</span><span class="wxLow">' + R(G.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    a.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + Zt("Now in " + q + ": " + M + "°, " + _(c.state) + ". Open the forecast") + '"><div class="wxCurrent">' + Fa(c.state, !0, !0, an, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Zt(String(M)) + '</span><span class="wxUnit">' + Zt(C) + '</span></div><div class="wxPlace">' + Zt(q) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Zt(t) + "</div>" + (m ? '<div class="wxRange">' + m + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (d.length ? aa === "strip" ? Y() : '<div class="activityRows wxDays">' + d.map(B).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", _n(a);
    const $ = a.querySelector("canvas[data-wx-strip]");
    tr && tr !== $ && (Ca == null || Ca.unobserve(tr)), tr = $, $ && (Ca == null || Ca.observe($), gi(a)), Mo(), Nr();
  }
  const us = i("weatherCard"), ll = (a) => {
    const s = a.closest("[data-wx-day]");
    if (s) {
      const v = /* @__PURE__ */ new Date();
      hs(+new Date(v.getFullYear(), v.getMonth(), v.getDate() + Number(s.dataset.wxDay), 12), s);
      return;
    }
    const c = a.closest("[data-wx-open]");
    c && hs(Date.now(), c);
  };
  us.addEventListener("click", (a) => ll(a.target)), us.addEventListener("keydown", (a) => {
    (a.key === "Enter" || a.key === " ") && a.target.matches("[data-wx-day],[data-wx-open]") && (a.preventDefault(), ll(a.target));
  });
  const oa = i("wxDialog"), Co = i("wxGraph"), vi = i("wxGraphWrap");
  let nn = Date.now(), $o = null, fs = !1, Xo = null;
  function hs(a, s) {
    const c = So();
    $o = s || null, nn = Math.max(c.start, Math.min(c.end - Xe, a)), ps.delete("dialog"), Rr.delete("scrub"), oa.classList.add("open"), oa.setAttribute("aria-hidden", "false"), Nr(), Ca == null || Ca.observe(oa.querySelector("canvas[data-wx-strip]")), Co.focus({ preventScroll: !0 }), Mo();
  }
  function Pr() {
    var a;
    oa.classList.remove("open"), oa.setAttribute("aria-hidden", "true"), Ca == null || Ca.unobserve(oa.querySelector("canvas[data-wx-strip]")), (a = $o == null ? void 0 : $o.focus) == null || a.call($o, { preventScroll: !0 }), $o = null;
  }
  function Nr() {
    if (!oa.classList.contains("open")) return;
    const a = So();
    i("wxGraphDays").innerHTML = a.days.map((s) => "<span>" + Zt(Ql(s.start)) + "</span>").join(""), td(a), er(a), gi(oa);
  }
  function er(a = So()) {
    const s = il(a, nn), c = ea == null ? void 0 : ea[tn.weather], v = (c == null ? void 0 : c.attributes) || {}, C = v.temperature_unit || "°", R = Math.abs(nn - Date.now()) < Xe / 2, q = R && c ? c.state : s.cond, t = R && Number.isFinite(Number(v.temperature)) ? Math.round(Number(v.temperature)) : Number.isFinite(s.temp) ? Math.round(s.temp) : "—", e = ls[q] || (q ? q.charAt(0).toUpperCase() + q.slice(1) : "—"), o = R ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(nn / Xe) * Xe)), r = s.day, d = (Number.isFinite(r.hi) ? "H " + Math.round(r.hi) + "°" : "") + (Number.isFinite(r.lo) ? "&ensp; L " + Math.round(r.lo) + "°" : "");
    i("wxDialogNow").innerHTML = '<div class="wxCurrent">' + Fa(q, !0, R, an, "scrub", R ? void 0 : s.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Zt(String(t)) + '</span><span class="wxUnit">' + Zt(C) + '</span></div><div class="wxPlace">' + Zt(o) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Zt(e) + "</div>" + (d ? '<div class="wxRange">' + d + "</div>" : "") + "</div>", _n(i("wxDialogNow")), Co.setAttribute("aria-valuenow", String(Math.round((nn - a.start) / Xe))), Co.setAttribute("aria-valuetext", o + ", " + e.toLowerCase() + ", " + t + "°"), dl(a), Mo();
  }
  function td(a = So()) {
    const s = i("wxGraphLine"), c = vi.clientWidth, v = vi.clientHeight;
    if (!c || !v) return;
    const C = [];
    for (let M = a.start; M <= a.end; M += Xe) {
      const A = il(a, M).temp;
      Number.isFinite(A) && C.push([Xl(a, M) * c, A]);
    }
    if (s.setAttribute("viewBox", "0 0 " + c + " " + v), C.length < 2) {
      s.innerHTML = '<g id="wxCursorMark"></g>', Xo = null, dl(a);
      return;
    }
    const R = C.map((M) => M[1]), q = Math.min(...R), t = Math.max(...R), e = Math.max(4, t - q), o = an !== "smooth", r = (M) => o ? Math.round(M / 2) * 2 : Math.round(M * 10) / 10;
    Xo = (M) => v * 0.84 - (M - q) / e * v * 0.62;
    const d = Qi(), h = an === "onebit" ? d.paper : "#ffffff", p = an === "onebit" ? d.ink : "rgba(0,0,0,.28)", m = "M" + C.map((M) => r(M[0]) + " " + r(Xo(M[1]))).join(" L"), g = (M, A) => {
      const _ = C.find((B) => B[1] === M);
      return '<text class="wxLineLabel" x="' + r(Math.min(c - 14, Math.max(14, _[0]))) + '" y="' + r(Xo(M) + (A ? 18 : -10)) + '" fill="' + h + '" stroke="' + p + '">' + Math.round(M) + "°</text>";
    };
    s.setAttribute("shape-rendering", o ? "crispEdges" : "auto"), s.innerHTML = '<path d="' + m + '" fill="none" stroke="' + p + '" stroke-width="' + (o ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + m + '" fill="none" stroke="' + h + '" stroke-width="2" stroke-linejoin="round"/>' + g(t, !1) + g(q, !0) + '<g id="wxCursorMark"></g>', dl(a);
  }
  function dl(a = So()) {
    const s = i("wxGraphLine").querySelector("#wxCursorMark");
    if (!s) return;
    const c = vi.clientWidth, v = vi.clientHeight, C = an !== "smooth", R = (h) => C ? Math.round(h / 2) * 2 : h, q = R(Xl(a, nn) * c), t = il(a, nn).temp, e = Qi(), o = an === "onebit" ? e.paper : "#ffffff", r = an === "onebit" ? e.ink : "rgba(0,0,0,.28)", d = Xo && Number.isFinite(t) ? R(Xo(t)) : null;
    s.innerHTML = '<rect x="' + (q - 2) + '" y="0" width="4" height="' + v + '" fill="' + r + '"/><rect x="' + (q - 1) + '" y="0" width="2" height="' + v + '" fill="' + o + '"/>' + (d == null ? "" : C ? '<rect x="' + (q - 5) + '" y="' + (d - 5) + '" width="10" height="10" fill="' + o + '" stroke="' + r + '" stroke-width="2"/>' : '<circle cx="' + q + '" cy="' + d + '" r="6" fill="' + o + '" stroke="' + r + '" stroke-width="2"/>');
  }
  const cl = (a) => {
    const s = vi.getBoundingClientRect();
    s.width && (nn = Jl(So(), (a - s.left) / s.width), er());
  };
  Co.addEventListener("pointerdown", (a) => {
    if (a.button === 0) {
      fs = !0;
      try {
        Co.setPointerCapture(a.pointerId);
      } catch {
      }
      cl(a.clientX);
    }
  }), Co.addEventListener("pointermove", (a) => {
    fs && cl(a.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((a) => Co.addEventListener(a, () => {
    fs = !1;
  })), Co.addEventListener("keydown", (a) => {
    const s = So(), c = { ArrowLeft: -Xe, ArrowRight: Xe, ArrowDown: -Xe, ArrowUp: Xe, PageUp: -24 * Xe, PageDown: 24 * Xe }[a.key];
    c ? (a.preventDefault(), nn = Math.max(s.start, Math.min(s.end - Xe, Math.round(nn / Xe) * Xe + c)), er(s)) : (a.key === "Home" || a.key === "End") && (a.preventDefault(), nn = a.key === "Home" ? s.start : s.end - Xe, er(s));
  }), i("wxDialogClose").addEventListener("click", Pr), oa.addEventListener("click", (a) => {
    a.target === oa && Pr();
  }), oa.addEventListener("keydown", (a) => {
    a.key === "Escape" && (a.preventDefault(), Pr());
  }), sl(), (gl = (rd = window.matchMedia) == null ? void 0 : (ml = rd.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || gl.call(ml, "change", () => {
    Mo(), _n(n);
  }), Mo();
  const ms = i("tvNav");
  l.fullscreenSupported || (ms.hidden = !0), ms.addEventListener("click", () => l.toggleFullscreen()), n.addEventListener("keydown", (a) => {
    !Bt.workout.classList.contains("active") || yr.classList.contains("active") || a.target.closest("input,select,textarea,.holdEnd") || (a.key === "MediaPlayPause" || a.key === " " && !a.target.closest("button") ? (a.preventDefault(), qs.click()) : a.key === "MediaTrackNext" ? (a.preventDefault(), i("skipExercise").click()) : a.key === "MediaTrackPrevious" && (a.preventDefault(), i("restartSegment").click()));
  }), n.querySelectorAll("[data-rounds-step]").forEach((a) => a.addEventListener("click", () => {
    const s = Math.max(1, Math.min(10, (Number(Ut.value) || 1) + Number(a.dataset.roundsStep)));
    String(s) !== Ut.value && (Ut.value = s, Ut.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [N, W, P, Ut].forEach((a) => a.addEventListener("input", () => {
    const s = Qt[oe];
    s && (s.total = Number(N.value), s.work = Number(W.value), s.rest = Number(P.value)), Me();
  })), rt.addEventListener("click", ya), Ft.addEventListener("click", () => L("settings")), i("settingsBack").addEventListener("click", ya), qs.addEventListener("click", () => yn(!At)), Le(oe), pe(), He(), Kn(), i("healthHelpOpen").addEventListener("click", () => n.querySelector(".tab[data-pane=helpPane]").click()), la(i("resetStats"), i("resetStatsFill"), 1500, () => {
    It.history = [], It.checkins = [], Yt = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    za(), Zo(), He(), pe(), Kn(), we(), ce("Stats reset");
  });
  const gs = i("morningTime"), pl = i("eveningTime"), ul = i("checkinAutoOpen");
  gs.value = Za().morning, pl.value = Za().evening, ul.classList.toggle("on", te().checkinAutoOpen !== !1), [["morningTime", gs], ["eveningTime", pl]].forEach(([a, s]) => s.addEventListener("change", () => {
    s.value && (Sa(a, s.value), we());
  })), ul.addEventListener("click", () => {
    const a = te().checkinAutoOpen === !1;
    ul.classList.toggle("on", a), Sa("checkinAutoOpen", a);
  }), setTimeout(Rt, 800);
  const fl = i("checkinNotify"), vs = i("checkinNotifyTarget"), ed = i("checkinNotifyStatus"), ad = ed.textContent;
  function nd() {
    const a = l.notifyServices(), s = a.filter((C) => C.startsWith("mobile_app_")), c = s.length ? s : a, v = (C) => C.replace(/^mobile_app_/, "").replace(/_/g, " ");
    vs.innerHTML = c.map((C) => '<option value="' + Zt(C) + '">' + Zt(v(C)) + "</option>").join(""), !te().notifyTarget && c[0] && (te().notifyTarget = c[0]), vs.value = te().notifyTarget || "";
  }
  function bi() {
    const a = !!te().notifyOn;
    fl.classList.toggle("on", a), i("checkinNotifyTargetRow").hidden = !a;
    const s = Za();
    ed.textContent = a ? "Sends at " + s.morning + " and " + s.evening : ad;
  }
  async function bs() {
    const a = !!te().notifyOn;
    try {
      return await l.setReminderAutomation(a ? { target: te().notifyTarget, times: Za() } : null), !0;
    } catch {
      return ce("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  fl.addEventListener("click", async () => {
    const a = !te().notifyOn;
    if (a && (nd(), !te().notifyTarget)) {
      ce("Install the Companion app on your phone first");
      return;
    }
    te().notifyOn = a, bi(), await bs() ? (za(), ce(a ? "Check-in notifications on" : "Check-in notifications off")) : (te().notifyOn = !a, bi());
  }), vs.addEventListener("change", () => {
    Sa("notifyTarget", vs.value), te().notifyOn && bs();
  }), [gs, pl].forEach((a) => a.addEventListener("change", () => {
    bi(), te().notifyOn && bs();
  })), nd(), bi();
  let hl = null;
  function od() {
    hl || (hl = setTimeout(() => {
      hl = null, Kn();
    }, 3e4));
  }
  return {
    updateStates(a) {
      var c, v;
      const s = !ea || ea[tn.weather] !== a[tn.weather] || ((c = ea["sun.sun"]) == null ? void 0 : c.state) !== ((v = a["sun.sun"]) == null ? void 0 : v.state);
      ea = a, tl(a), zl(a), s && sl(), Date.now() - Gl > 60 * 60 * 1e3 && Ul(), od();
    },
    applyRemoteData(a) {
      if (a && (Array.isArray(a.history) && (It.history = a.history, Zo()), Array.isArray(a.history) && Kn(), Array.isArray(a.checkins) && (It.checkins = a.checkins.map(lr), we(), pe(), He(), Zo(), Kn()), a.profiles && !xa.classList.contains("open") && !Ln)) {
        const s = ae(a);
        Object.keys(Qt).forEach((c) => delete Qt[c]), Object.assign(Qt, s.profiles), It.order = s.order, Qt[oe] || (oe = It.order[0]), Ge(), Le(oe);
      }
    },
    suspend() {
      x = !1;
    },
    resume() {
      x || (x = !0, Oo || (Oo = requestAnimationFrame(Kr)), vo || (vo = requestAnimationFrame(Pa)), Mo(), Qa(n.querySelector(".tab.active"), !1));
    }
  };
}
const Iu = /* @__PURE__ */ new Set(["roaming", "test_area"]), Hu = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window" },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62 }
}, Fr = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, ca = "made_up_", Jo = (n) => {
  var l;
  return (l = String(n).split(".")[1]) == null ? void 0 : l.startsWith(ca);
}, sd = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function bc(n) {
  const l = n.getHours() + n.getMinutes() / 60, i = Math.max(0, Math.sin((l - 7) / 13 * Math.PI));
  return 2.4 * i * i;
}
function Fu(n) {
  const l = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  let i = 0;
  for (let u = +l; u < +n; u += 10 * 60 * 1e3) i += bc(new Date(u)) / 6;
  return i;
}
function Sc(n = /* @__PURE__ */ new Date()) {
  const l = [];
  for (let i = 0; i <= 96; i++) {
    const u = +n - (96 - i) * 15 * 60 * 1e3;
    l.push([u, bc(new Date(u))]);
  }
  return l;
}
function Ou({ onChange: n }) {
  const l = {}, i = {}, u = (Q, K, mt, dt) => {
    l[Q] = { entity_id: Q, state: mt, attributes: dt, last_changed: new Date(Date.now() - 18e6).toISOString() }, i[Q] = K;
  }, b = (Q, K, mt) => {
    const dt = l[Q], wt = K ?? dt.state;
    l[Q] = { ...dt, state: wt, attributes: { ...dt.attributes, ...mt }, last_changed: wt === dt.state ? dt.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, x = (Q, K, mt, dt) => u("binary_sensor." + ca + (Q ? Q + "_" : "") + sd(K), Q, dt ? "on" : "off", { friendly_name: K, device_class: mt });
  Object.entries(Hu).forEach(([Q, K]) => {
    if (K.temperature != null && u("sensor." + ca + Q + "_temperature", Q, String(K.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), K.humidity != null && u("sensor." + ca + Q + "_humidity", Q, String(K.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), K.vacuum && u("vacuum." + ca + "robot", Q, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), K.climate && u("climate." + ca + Q, Q, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: K.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), K.cover) {
      const [mt, dt, wt, it] = K.cover;
      u("cover." + ca + Q + "_" + sd(mt), Q, wt ? "open" : "closed", { friendly_name: mt, device_class: dt, current_position: wt, ...it != null ? { current_tilt_position: it } : {} });
    }
    if (K.humidifier && u("humidifier." + ca + Q, Q, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: K.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), K.solar && (u("sensor." + ca + Q + "_solar_power", Q, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), u("sensor." + ca + Q + "_solar_today", Q, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), K.valve && u("valve." + ca + Q + "_" + sd(K.valve), Q, "closed", { friendly_name: K.valve, device_class: "water" }), K.door && x(Q, K.door, "door", K.doorOpen), K.window && x(Q, K.window, "window", !1), K.motion && x(Q, K.motion, "motion", !1), K.plant) {
      const [mt, dt, wt, it, nt] = K.plant, at = ca + sd(mt), D = (st, Bt, rt, Ft, L) => u("sensor." + at + "_" + st, Q, String(rt), { friendly_name: Bt, device_class: L, state_class: "measurement", unit_of_measurement: Ft, plant_low: rt < Fr[st][0], plant_high: rt > Fr[st][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[st] });
      D("moisture", "Moisture", dt, "%", "moisture"), D("light", "Light", wt, "lx", "illuminance"), D("temperature", "Temperature", it, "°C", "temperature"), D("fertility", "Fertility", nt, "µS/cm", "conductivity");
      const kt = Object.entries({ moisture: dt, light: wt, temperature: it, fertility: nt }).filter(([st, Bt]) => Bt < Fr[st][0] || Bt > Fr[st][1]).map(([st, Bt]) => st + (Bt < Fr[st][0] ? " low" : " high"));
      u("plant." + at, Q, kt.length ? "problem" : "ok", { friendly_name: mt, moisture: dt, brightness: wt, temperature: it, conductivity: nt, problem: kt.join(", ") || "none" });
    }
  }), u("alarm_control_panel." + ca + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), x(null, "Front door", "door", !1), x(null, "Smoke alarm", "smoke", !1), u("sensor." + ca + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const k = {}, E = {};
  let F = null;
  function S() {
    const Q = /* @__PURE__ */ new Date();
    Object.keys(l).forEach((K) => {
      K.endsWith("_solar_power") && (l[K] = { ...l[K], state: bc(Q).toFixed(2) }), K.endsWith("_solar_today") && (l[K] = { ...l[K], state: Fu(Q).toFixed(1) });
    });
  }
  S();
  let V = 0;
  function O() {
    let Q = !1;
    const K = ++V % 10 === 0, mt = (it, nt, at) => {
      b(it, nt, at), Q = !0;
    };
    Object.entries(k).forEach(([it, nt]) => {
      const at = l[it].attributes.current_position, D = at < nt ? Math.min(nt, at + 10) : Math.max(nt, at - 10);
      D === nt && delete k[it], mt(it, D === nt ? D === 0 ? "closed" : "open" : nt > at ? "opening" : "closing", { current_position: D });
    }), Object.entries(E).forEach(([it, nt]) => {
      const at = l[it].attributes.current_tilt_position, D = at < nt ? Math.min(nt, at + 25) : Math.max(nt, at - 25);
      D === nt && delete E[it], mt(it, null, { current_tilt_position: D });
    }), Object.keys(l).filter((it) => it.startsWith("climate.")).forEach((it) => {
      const nt = l[it], at = nt.attributes, D = at.current_temperature, kt = (nt.state === "heat" || nt.state === "auto") && D < at.temperature - 0.05, st = (nt.state === "cool" || nt.state === "auto") && D > at.temperature + 0.05, Bt = nt.state === "off" ? "off" : kt ? "heating" : st ? "cooling" : "idle", rt = K ? Math.round((D + (kt ? 0.1 : st ? -0.1 : 0)) * 10) / 10 : D;
      (rt !== D || Bt !== at.hvac_action) && mt(it, null, { current_temperature: rt, hvac_action: Bt });
    }), Object.keys(l).filter((it) => it.startsWith("humidifier.")).forEach((it) => {
      const nt = l[it], at = nt.attributes, D = at.current_humidity, kt = nt.state === "on" && D < at.humidity, st = kt && K ? D + 1 : D, Bt = nt.state !== "on" ? "off" : kt ? "humidifying" : "idle";
      if (st !== D || Bt !== at.action) {
        mt(it, null, { current_humidity: st, action: Bt });
        const rt = "sensor." + ca + i[it] + "_humidity";
        l[rt] && mt(rt, String(st));
      }
    });
    const dt = l["vacuum." + ca + "robot"], wt = dt.attributes;
    dt.state === "cleaning" && K && mt(dt.entity_id, null, { battery_level: Math.max(5, wt.battery_level - 1) }), dt.state === "returning" && mt(dt.entity_id, "docked", {}), dt.state === "docked" && wt.battery_level < 100 && mt(dt.entity_id, null, { battery_level: Math.min(100, wt.battery_level + 2) }), F && Date.now() - F.at > 5e3 && (mt("alarm_control_panel." + ca + "house", "armed_" + F.mode, {}), F = null), Q && n();
  }
  const z = setInterval(O, 1e3), Z = setInterval(() => {
    S(), n();
  }, 60 * 1e3);
  function pt(Q, K, mt) {
    const dt = mt == null ? void 0 : mt.entity_id;
    if (!l[dt]) return !1;
    const wt = l[dt], it = wt.attributes, nt = (at, D) => b(dt, at, D);
    if (Q === "climate" && (K === "set_temperature" && nt(null, { temperature: Math.max(it.min_temp, Math.min(it.max_temp, mt.temperature)) }), K === "set_hvac_mode" && nt(mt.hvac_mode, mt.hvac_mode === "off" ? { hvac_action: "off" } : {}), K === "toggle" && nt(wt.state === "off" ? "heat" : "off", wt.state === "off" ? {} : { hvac_action: "off" })), Q === "cover") {
      const at = K === "open_cover" ? 100 : K === "close_cover" ? 0 : K === "set_cover_position" ? mt.position : K === "toggle" ? it.current_position > 0 ? 0 : 100 : null;
      K === "stop_cover" && (delete k[dt], delete E[dt], nt(it.current_position === 0 ? "closed" : "open")), at != null && at !== it.current_position && (k[dt] = at, nt(at > it.current_position ? "opening" : "closing"));
      const D = K === "open_cover_tilt" ? 100 : K === "close_cover_tilt" ? 0 : K === "set_cover_tilt_position" ? mt.tilt_position : null;
      K === "stop_cover_tilt" && delete E[dt], D != null && it.current_tilt_position != null && D !== it.current_tilt_position && (E[dt] = D);
    }
    if (Q === "humidifier" && (K === "set_humidity" && nt(null, { humidity: Math.max(it.min_humidity, Math.min(it.max_humidity, mt.humidity)) }), K === "set_mode" && nt(null, { mode: mt.mode }), K === "turn_on" || K === "turn_off" || K === "toggle")) {
      const at = K === "turn_on" || K === "toggle" && wt.state !== "on";
      nt(at ? "on" : "off", { action: at ? "idle" : "off" });
    }
    if (Q === "vacuum" && (K === "start" && nt("cleaning", { rooms: mt.rooms || it.rooms }), K === "pause" && nt("paused"), K === "return_to_base" && nt("returning", { rooms: [] }), K === "locate" && nt(null, { located: Date.now() }), K === "set_rooms" && nt(null, { rooms: mt.rooms })), Q === "valve") {
      const at = K === "open_valve" || K === "toggle" && wt.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(K) && nt(at ? "open" : "closed");
    }
    if (Q === "alarm_control_panel") {
      K === "alarm_disarm" && (F = null, nt("disarmed", { changed_by: "Matt" }));
      const at = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[K];
      at && (F = { mode: at, at: Date.now() }, nt("arming", { changed_by: "Matt" }));
    }
    return n(), !0;
  }
  function et(Q, { madeUp: K = !0 } = {}) {
    const mt = K ? l : {}, dt = (Q == null ? void 0 : Q.states) || {}, wt = (Q == null ? void 0 : Q.entities) || {}, it = (Q == null ? void 0 : Q.devices) || {}, nt = (lt) => {
      var gt;
      const ut = wt[lt];
      return ut && (ut.area_id || ut.device_id && ((gt = it[ut.device_id]) == null ? void 0 : gt.area_id)) || null;
    }, at = (lt) => {
      const ut = wt[lt];
      return dt[lt] && dt[lt].state !== "unavailable" && !(ut != null && ut.hidden) && !(ut != null && ut.entity_category);
    }, D = {};
    Object.keys(dt).forEach((lt) => {
      const ut = nt(lt);
      ut && at(lt) && (D[ut] || (D[ut] = [])).push(lt);
    });
    const kt = { ...dt, ...mt }, st = (lt) => {
      var ut, gt;
      return (gt = (ut = kt[lt]) == null ? void 0 : ut.attributes) == null ? void 0 : gt.device_class;
    }, Bt = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], rt = Object.keys(dt).filter((lt) => lt.startsWith("vacuum.") && at(lt)), Ft = Object.values((Q == null ? void 0 : Q.areas) || {}).filter((lt) => !Iu.has(lt.area_id)).map((lt) => {
      const ut = lt.area_id, gt = D[ut] || [], yt = (Vt) => gt.filter((Xt) => Xt.startsWith(Vt + ".")), Mt = (Vt) => yt("sensor").filter((Xt) => st(Xt) === Vt), Wt = (Vt) => Object.keys(mt).filter((Xt) => i[Xt] === ut && Vt(Xt)), Ut = (Vt, Xt) => Vt.length ? Vt : Wt(Xt), pa = Ut(Mt("temperature"), (Vt) => Vt.endsWith(ut + "_temperature")), jt = Ut(Mt("humidity"), (Vt) => Vt.endsWith(ut + "_humidity")), Rn = Mt("power").filter((Vt) => /^(W|kW)$/.test(kt[Vt].attributes.unit_of_measurement || "")), hn = yt("binary_sensor").filter((Vt) => st(Vt) === "moisture"), Pn = Ut(yt("plant"), (Vt) => Vt.startsWith("plant.")).map((Vt) => ({ id: Vt, readings: Wt((Xt) => Xt.startsWith("sensor." + Vt.split(".")[1] + "_")) })), Ne = [...yt("binary_sensor").filter((Vt) => Bt.includes(st(Vt))), ...Wt((Vt) => Vt.startsWith("binary_sensor."))];
      return {
        id: ut,
        name: lt.name,
        icon: lt.icon,
        readings: [...pa.slice(0, 1), ...jt.slice(0, 1), ...hn],
        power: Rn.length ? Rn.reduce((Vt, Xt) => Vt + Number(kt[Xt].state) * (kt[Xt].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: yt("switch"),
        lights: yt("light"),
        actions: [...yt("light"), ...Ut(yt("climate"), (Vt) => Vt.startsWith("climate.")), ...Ut(yt("cover"), (Vt) => Vt.startsWith("cover.")), ...Ut(yt("humidifier"), (Vt) => Vt.startsWith("humidifier.")), ...Ut(yt("valve"), (Vt) => Vt.startsWith("valve.")), ...yt("media_player"), ...yt("vacuum"), ...rt.length ? [] : Wt((Vt) => Vt.startsWith("vacuum."))],
        solar: Wt((Vt) => Vt.includes("_solar_")),
        plants: Pn,
        openings: Ne,
        alerts: [...hn, ...Ne].filter((Vt) => {
          var Xt;
          return ((Xt = kt[Vt]) == null ? void 0 : Xt.state) === "on";
        })
      };
    }).filter((lt) => lt.readings.length || lt.plugs.length || lt.actions.length || lt.solar.length || lt.plants.length), L = Object.keys(dt).find((lt) => /^sensor\..*(p1_meter_power|grid_power)$/.test(lt) && dt[lt].state !== "unavailable") || null, N = (lt) => Object.keys(dt).filter((ut) => ut.startsWith(lt + ".") && at(ut)), W = N("alarm_control_panel"), P = rt.length ? rt : K ? ["vacuum." + ca + "robot"] : [];
    return {
      states: kt,
      rooms: Ft,
      grid: L,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (lt) => mt[lt] ? i[lt] : nt(lt),
      vacuums: P,
      homeVacuums: P.filter((lt) => !Ft.some((ut) => ut.actions.includes(lt))),
      security: {
        alarms: W.length ? W : K ? ["alarm_control_panel." + ca + "house"] : [],
        locks: N("lock"),
        openings: [...Object.keys(mt).filter((lt) => lt.startsWith("binary_sensor.")), ...K ? ["sensor." + ca + "doorbell"] : []]
      }
    };
  }
  return { model: et, call: pt, stop() {
    clearInterval(z), clearInterval(Z);
  } };
}
const Ti = (n) => n < 0 ? 0 : n > 1 ? 1 : n, pc = (n) => {
  const l = String(n || "#000000").trim().replace("#", ""), i = l.length === 3 ? l.split("").map((u) => u + u).join("") : l;
  return [0, 2, 4].map((u) => parseInt(i.slice(u, u + 2), 16) || 0);
}, qu = (n) => "#" + n.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), Cc = {}, Qn = (n, l, i) => {
  const u = n + l + i;
  return Cc[u] || (Cc[u] = qu(pc(n).map((b, x) => b + (pc(l)[x] - b) * i)));
}, Tc = {}, bd = (n) => Tc[n] || (Tc[n] = pc(n));
function Wu(n) {
  const l = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return l.partly = [Qn(l.clear[0], l.cloudy[0], 0.12), Qn(l.clear[1], l.cloudy[1], 0.12)], l.storm = [Qn(l.rain[0], "#000000", 0.22), Qn(l.rain[1], "#000000", 0.22)], l;
}
const ju = [
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
], Si = (n, l) => (ju[(l & 7) * 8 + (n & 7)] + 0.5) / 64, Ep = 1, _p = 2, Dp = 3, Bp = 4, Ss = 5, kd = 6, uc = 7, Rp = 8, Lc = (n, l) => l <= 0.6665 && ((n - 0.5) * (n - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && l >= 0.416), Vu = (n, l, i) => {
  let u = !1;
  for (let b = 0, x = n.length - 1; b < n.length; x = b++) {
    const k = n[b], E = n[x];
    k[1] > i != E[1] > i && l < (E[0] - k[0]) * (i - k[1]) / (E[1] - k[1]) + k[0] && (u = !u);
  }
  return u;
};
function zu(n, l, i, u, { oneBit: b, ink: x, paper: k, snowInk: E }) {
  const F = new Uint8ClampedArray(i * u * 4), S = bd(x), V = bd(k);
  for (let O = 0; O < u; O++) for (let z = 0; z < i; z++) {
    const Z = O * i + z, pt = l[Z];
    if (n[Z] == null) continue;
    let et = bd(n[Z]);
    if (b) {
      let Q;
      pt === Bp || pt === Rp ? Q = !0 : pt === Ss ? Q = E : pt === uc || pt === kd ? Q = !1 : Q = Math.round((0.2126 * et[0] + 0.7152 * et[1] + 0.0722 * et[2]) / 255 * 4) / 4 <= Si(z, O), (pt === Ep || pt === _p || pt === Dp || pt === kd) && (z > 0 && l[Z - 1] !== pt || z < i - 1 && l[Z + 1] !== pt || O > 0 && l[Z - i] !== pt || O < u - 1 && l[Z + i] !== pt) && (Q = !0), et = Q ? S : V;
    }
    F[Z * 4] = et[0], F[Z * 4 + 1] = et[1], F[Z * 4 + 2] = et[2], F[Z * 4 + 3] = 255;
  }
  return { w: i, h: u, data: F };
}
const Gu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Uu = (n) => Td(n, !1).split("/")[0], Wd = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let l = Math.imul(n ^ n >>> 15, 1 | n);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, Yu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Zu = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Ku = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", $u = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Xu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Ju = [".##", "##.", ".#.", "#.."];
function Pp(n, { width: l, height: i, colors: u, wave: b = 0.38, soft: x = 6, glow: k = 0.6, columns: E = 6 }) {
  const F = { ...fn, dawn: "#e5a77e", ...u }, S = Wu(F), V = l, O = i, z = V / E, Z = z / 2, pt = Math.PI * 2, et = n.length ? n : [{ cond: "cloudy", night: !1 }], Q = [...Array(E * 2)].map((wt, it) => {
    const nt = et[Math.min(it, et.length - 1)], at = Uu(nt.cond), D = it % 2 === 1;
    return { cond: nt.cond, k: at, night: D, sky: S[at][D ? 1 : 0], cover: Gu[at] };
  }), K = (wt) => O * (0.5 - b * Math.cos(pt * (wt / z - 0.25)));
  return { C: F, S: Q, W: V, H: O, cw: z, sw: Z, TAU: pt, yb: K, side: (wt, it, nt) => {
    const at = (wt ? K(it) - nt : nt - K(it)) / Math.max(3, x * 1.4) + 0.5;
    return at <= 0 ? 0 : at >= 1 ? 1 : at;
  }, glowAt: (wt) => {
    const it = ((wt / z - 0.25) % 1 + 1) % 1, nt = Math.max(0, Math.min(E - 1, Math.round(wt / z - 0.25))), at = Math.max(0, Math.min(E - 1, Math.round(wt / z - 0.75))), D = 1 - (Q[2 * nt].cover + Q[2 * at + 1].cover) / 2, kt = Math.sin(Math.PI * Math.min(1, Math.max(0, K(wt) / O)));
    return { c: it < 0.5 ? F.dusk : F.dawn, a: k * (0.2 + 0.8 * D) * kt * kt };
  }, soft: x, tw: z * 0.3, sy: O / 90 };
}
function Np(n, { clock: l = 0, ambient: i = !1, seed: u = 1 }) {
  const { S: b, sw: x, side: k, C: E, TAU: F, sy: S, H: V } = n, O = l, z = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  b.forEach((et, Q) => {
    const K = Wd(u * 977 + Q * 131 + 7), mt = (Q + 0.5) * x, dt = et.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[et.k] : 0;
    for (let wt = 0; wt < dt; wt++) {
      const it = mt + (K() - 0.5) * x * 1.6, nt = (6 + K() * 76) * S, at = K() < 0.35, D = 1.8 + K() * 1.6, kt = k(!0, it, nt) * (at ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(F * O / 2600 + wt * 1.7 + Q) : 1);
      kt >= 0.03 && z.stars.push({ x: it, y: nt, big: at, size: D, o: kt });
    }
    if (!et.night && (et.k === "clear" || et.k === "partly")) {
      const wt = mt + (K() - 0.5) * x * 0.3, it = Math.min(15, x * 0.29);
      z.suns.push({ x: wt, y: 32 * S, rad: it, halo: it * 2.8 * (i ? 1 + 0.07 * Math.sin(F * O / 3600 + Q) : 1) });
    }
    if (et.night && (et.k === "clear" || et.k === "partly")) {
      const wt = Math.min(0.78, x * 0.55 / 34), it = mt - 23 * wt + (K() - 0.5) * x * 0.2;
      z.moons.push({ x: it + 23 * wt, y: (4 + (i ? 0.8 * Math.sin(F * O / 5200 + Q) : 0)) * S + 23 * wt, d: 46 * wt });
    }
  });
  const Z = Math.max(56, Math.min(100, V * 0.45)), pt = Math.max(1, x / (Z * 2.4));
  return b.forEach((et, Q) => {
    const K = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[et.k];
    if (!K) return;
    const mt = et.k === "partly" ? 1 : Math.round(K * pt), dt = Wd(u * 577 + Q * 71 + 3), wt = (Q + 0.5) * x, it = et.k === "rain" || et.k === "storm" || et.night ? E.cloudNight : E.cloudDay, nt = et.night ? 0.82 : et.k === "storm" ? 0.75 : 1;
    for (let at = 0; at < mt; at++) {
      const D = Z / 46 * (et.k === "partly" ? 1 : 0.8 + dt() * 0.4), kt = wt + (et.k === "partly" ? x * 0.12 : ((at + 0.5) / mt - 0.5) * x * 0.95 + (dt() - 0.5) * x * 0.5 / mt), st = (et.k === "partly" ? 40 : 6 + dt() * 26) * S, Bt = i ? 2.5 * Math.sin(F * O / 9e3 + Q * 1.3 + at * 2.1) : 0, rt = i ? 0.9 * Math.sin(F * O / 6100 + Q + at) : 0;
      z.clouds.push({ x: kt - 23 * D + Bt, y: st - 15.33 * D + rt, w: 46 * D, h: 30.66 * D, fill: it, o: nt * (mt > 1 && at === 0 ? 0.85 : 1) });
    }
  }), b.forEach((et, Q) => {
    const K = Wd(u * 313 + Q * 29 + 11), mt = (Q + 0.5) * x, dt = et.cond === "pouring" ? 16 : et.cond === "rainy" || et.cond === "hail" ? 9 : et.cond === "lightning-rainy" ? 12 : et.cond === "snowy-rainy" ? 5 : 0;
    for (let it = 0; it < dt; it++) {
      let nt = mt + (K() - 0.5) * x * 1.05, at = 44 + K() * 36, D = 1;
      if (i) {
        const st = ((at - 44 + O * 0.04) % 36 + 36) % 36;
        nt -= 0.21 * (st - (at - 44)), at = 44 + st, D = Math.min(1, st / 6, (36 - st) / 6);
      }
      at *= S;
      const kt = k(et.night, nt, at) * D;
      kt >= 0.05 && z.drops.push({ x: nt, y: at, o: kt });
    }
    const wt = et.cond === "snowy" ? 11 : et.cond === "snowy-rainy" ? 6 : 0;
    for (let it = 0; it < wt; it++) {
      let nt = mt + (K() - 0.5) * x * 1.05, at = 40 + K() * 44, D = 1;
      if (i) {
        const st = ((at - 40 + O * 9e-3) % 44 + 44) % 44;
        at = 40 + st, nt += 1.6 * Math.sin(F * O / 2800 + it * 1.9 + Q), D = Math.min(1, st / 6, (44 - st) / 6);
      }
      at *= S;
      const kt = k(et.night, nt, at) * D;
      kt >= 0.05 && z.flakes.push({ x: nt, y: at, o: kt });
    }
    if (et.k === "fog") {
      const it = et.night ? "#c8ccd6" : "#ffffff", nt = et.night ? 0.28 : 0.62, at = i ? 4 * Math.sin(F * O / 8e3 + Q) : 0;
      for (let D = 0; D < 4; D++) z.fogs.push({ x: mt - x * 0.75 + D % 2 * x * 0.18 + (D % 2 ? at : -at), y: (30 + D * 13) * S, w: x * 1.3, c: it, a: nt });
    }
    if (et.k === "storm") {
      const it = (O / 3400 + Q * 0.37) % 1;
      z.bolts.push({ x: mt + (K() - 0.5) * x * 0.3 - 5, y: 36 * S, o: i && !(it < 0.05 || it > 0.09 && it < 0.12) ? 0.8 : 1 });
    }
  }), z;
}
function Qu(n, l, i, u, b, x, k, E) {
  const { S: F, C: S, cw: V, yb: O, glowAt: z, soft: Z, tw: pt, sy: et } = n, Q = new Array(i * u), K = new Uint8Array(i * u), mt = new Uint8Array(i * u), dt = (L, N, W, P, lt) => {
    W == null || L < 0 || N < 0 || L >= i || N >= u || (P >= 1 || P > Si(L + 5, N + 3)) && (Q[N * i + L] = W, K[N * i + L] = lt);
  }, wt = (L, N, W, P) => {
    for (let lt = Math.max(0, Math.floor(N - W) - 1); lt <= Math.min(u - 1, N + W + 1); lt++) for (let ut = Math.max(0, Math.floor(L - W) - 1); ut <= Math.min(i - 1, L + W + 1); ut++) P(ut, lt, ut + 0.5 - L, lt + 0.5 - N);
  }, it = (L, N, W) => {
    for (let lt = 0; lt < L.length - 1; lt++) {
      const ut = (lt + N) * V;
      if (W < ut - pt / 2) return [L[lt], L[lt], 0];
      if (W <= ut + pt / 2) return [L[lt], L[lt + 1], (W - ut + pt / 2) / pt];
    }
    const P = L[L.length - 1];
    return [P, P, 0];
  }, nt = F.filter((L) => !L.night).map((L) => L.sky), at = F.filter((L) => L.night).map((L) => L.sky), D = Z / x, kt = 16 * et / x;
  for (let L = 0; L < i; L++) {
    const N = (L + 0.5) * b, W = O(N) / x, P = it(nt, 0.75, N), lt = it(at, 1.25, N), ut = z(N);
    for (let gt = 0; gt < u; gt++) {
      const yt = Si(L, gt), Mt = gt + 0.5 - W, Wt = (D > 0.01 ? Ti(0.5 + Mt / D) : Mt > 0 ? 1 : 0) > yt;
      let Ut = Wt ? P[2] > yt ? P[1] : P[0] : lt[2] > yt ? lt[1] : lt[0];
      (Wt ? Ti(((gt + 0.5) / u - 0.45) / 0.55) * 0.7 : Ti(1 - (gt + 0.5) / (u * 0.55)) * 0.7) > Si(L + 2, gt + 5) && (Ut = Wt ? Qn(Ut, "#ffffff", 0.18) : Qn(Ut, "#000000", 0.25)), Wt && Mt >= 0 && Mt < kt && ut.a * 1.3 * (1 - Mt / kt) > Si(L + 6, gt + 1) && (Ut = ut.c), Q[gt * i + L] = Ut, mt[gt * i + L] = Wt ? 0 : 1;
    }
  }
  const st = Qn(S.sun, "#ffffff", 0.55), Bt = Qn(S.moon, "#ffffff", 0.6);
  l.stars.forEach((L) => {
    const N = Math.floor(L.x / b), W = Math.floor(L.y / x);
    if (N < 0 || W < 0 || N >= i || W >= u || !mt[W * i + N] || L.o < 0.15) return;
    const P = L.o > 0.45 ? S.star : Qn(S.star, Q[W * i + N], 0.5), lt = L.big && L.o > 0.6 ? Math.floor(L.size / b) : 0;
    dt(N, W, P, 1, uc);
    for (let ut = 1; ut <= lt; ut++) [[N - ut, W], [N + ut, W], [N, W - ut], [N, W + ut]].forEach((gt) => {
      gt[0] >= 0 && gt[1] >= 0 && gt[0] < i && gt[1] < u && mt[gt[1] * i + gt[0]] && dt(gt[0], gt[1], P, 1, uc);
    });
  }), l.suns.forEach((L) => {
    const N = Math.max(1.5, L.rad / b), W = L.x / b, P = L.y / x, lt = L.halo / b * 0.85;
    if (wt(W, P, lt, (ut, gt, yt, Mt) => {
      const Wt = Math.sqrt(yt * yt + Mt * Mt);
      Wt > N && Wt < lt && !mt[gt * i + ut] && dt(ut, gt, st, 0.3 * (1 - (Wt - N) / (lt - N)), 0);
    }), E) {
      const ut = Math.floor(k / 500) % 2, gt = Math.max(1, N * 0.3);
      for (let yt = 0; yt < 8; yt++) if (yt % 2 === ut) for (let Mt = N + 1.2; Mt < N + 1.2 + gt; Mt += 0.7) dt(Math.floor(W + Math.cos(yt * Math.PI / 4) * Mt), Math.floor(P + Math.sin(yt * Math.PI / 4) * Mt), S.sun, 1, Rp);
    }
    wt(W, P, N, (ut, gt, yt, Mt) => {
      yt * yt + Mt * Mt <= N * N && dt(ut, gt, Ti(((Mt / N + 1) / 2 - 0.6) / 0.4) > Si(ut, gt) ? S.sunEdge : S.sun, 1, Ep);
    });
  }), l.moons.forEach((L) => {
    const N = Math.max(1.5, L.d * 0.37 / b), W = L.x / b, P = L.y / x, lt = W + 0.547 * N, ut = P - 0.503 * N, gt = 0.82 * N;
    wt(W, P, N, (yt, Mt, Wt, Ut) => {
      if (Wt * Wt + Ut * Ut > N * N) return;
      const pa = yt + 0.5 - lt, jt = Mt + 0.5 - ut;
      pa * pa + jt * jt > gt * gt && dt(yt, Mt, Ti((Ut + N) / (2 * N) * 1.1 - 0.1) > Si(yt, Mt) ? S.moon : Bt, 1, _p);
    });
  }), l.clouds.forEach((L) => {
    const N = Math.max(3, L.w / b), W = N * 0.6665, P = L.x / b, lt = L.y / x, ut = Qn(L.fill, "#000000", 0.16);
    for (let gt = Math.max(0, Math.floor(lt) - 1); gt <= Math.min(u - 1, lt + W + 1); gt++) for (let yt = Math.max(0, Math.floor(P) - 1); yt <= Math.min(i - 1, P + N + 1); yt++) {
      const Mt = (yt + 0.5 - P) / N, Wt = (gt + 0.5 - lt) / N;
      Lc(Mt, Wt) && dt(yt, gt, !Lc(Mt, Wt + 1 / N) || Ti((Wt - 0.42) / 0.25) * 0.8 > Si(yt, gt) ? ut : L.fill, L.o, Dp);
    }
  }), l.fogs.forEach((L) => {
    const N = Math.floor(L.y / x), W = Math.max(N, Math.floor((L.y + 6 * et) / x) - 1), P = Math.floor(L.x / b), lt = Math.floor((L.x + L.w) / b);
    for (let ut = N; ut <= W; ut++) for (let gt = P; gt <= lt; gt++) {
      const yt = (gt - P) / Math.max(1, lt - P);
      dt(gt, ut, L.c, L.a * (yt < 0.25 ? yt / 0.25 : yt > 0.75 ? (1 - yt) / 0.25 : 1), 0);
    }
  });
  const rt = Math.max(2, Math.round(9 / x));
  l.drops.forEach((L) => {
    const N = L.x / b, W = Math.floor(L.y / x);
    for (let P = 0; P < rt; P++) dt(Math.floor(N - 0.208 * P * x / b), W + P, S.rain, L.o, Bp);
  });
  const Ft = Math.max(0, Math.round(4.4 / b / 2.6));
  return l.flakes.forEach((L) => {
    const N = Math.floor(L.x / b), W = Math.floor(L.y / x);
    dt(N, W, S.snow, L.o, Ss);
    for (let P = 1; P <= Ft; P++)
      dt(N - P, W, S.snow, L.o, Ss), dt(N + P, W, S.snow, L.o, Ss), dt(N, W - P, S.snow, L.o, Ss), dt(N, W + P, S.snow, L.o, Ss);
  }), l.bolts.forEach((L) => {
    if (b <= 3.5)
      for (let N = Math.floor(L.y / x); N <= (L.y + 24) / x; N++) for (let W = Math.floor(L.x / b); W <= (L.x + 11) / b; W++)
        Vu(Xu, (W + 0.5) * b - L.x, (N + 0.5) * x - L.y) && dt(W, N, S.sun, 1, kd);
    else {
      const N = Math.round(L.x / b), W = Math.round(L.y / x);
      Ju.forEach((P, lt) => P.split("").forEach((ut, gt) => {
        ut === "#" && dt(N + gt, W + lt, S.sun, 1, kd);
      }));
    }
  }), { col: Q, ids: K };
}
function tf(n, l) {
  const i = l.px, u = Math.max(6, Math.round(l.width / i)), b = Math.max(6, Math.round(l.height / i)), x = l.width / u, k = l.height / b, E = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, F = (Z) => {
    const pt = Pp(Z, l);
    return Qu(pt, Np(pt, { clock: E, ambient: l.ambient, seed: l.seed }), u, b, x, k, E, l.ambient);
  }, S = F(n), V = l.reveal == null ? 1 : Ti(l.reveal);
  let O = S.col, z = S.ids;
  if (V < 1) {
    const Z = l.prev ? F(l.prev) : null, pt = V * (u + 12);
    O = new Array(u * b), z = new Uint8Array(u * b);
    for (let et = 0; et < u * b; et++) {
      const Q = et % u, K = et / u | 0;
      (l.reduce ? V : Ti((pt - Q) / 12)) > Si(Q, K) ? (O[et] = S.col[et], z[et] = S.ids[et]) : Z ? (O[et] = Z.col[et], z[et] = Z.ids[et]) : (O[et] = null, z[et] = 255);
    }
  }
  return zu(O, z, u, b, { oneBit: l.oneBit, ink: l.ink || "#26221e", paper: l.paper || "#fbf9f6", snowInk: !1 });
}
function ef(n, l, i) {
  const u = i.width, b = i.height, x = i.reveal == null ? 1 : Ti(i.reveal), k = (z, Z) => {
    const pt = Pp(Z, i);
    af(z, pt, Np(pt, i));
  };
  if (n.clearRect(0, 0, u, b), x >= 1) {
    k(n, l);
    return;
  }
  if (i.prev && k(n, i.prev), i.reduce) {
    n.save(), n.globalAlpha = x, k(n, l), n.restore();
    return;
  }
  const E = n.canvas, F = E.__wxOff || (E.__wxOff = document.createElement("canvas"));
  (F.width !== E.width || F.height !== E.height) && (F.width = E.width, F.height = E.height);
  const S = F.getContext("2d");
  S.setTransform(n.getTransform()), S.clearRect(0, 0, u, b), k(S, l);
  const V = x * (u + 64) - 64, O = S.createLinearGradient(V, 0, V + 64, 0);
  O.addColorStop(0, "rgba(0,0,0,1)"), O.addColorStop(1, "rgba(0,0,0,0)"), S.globalCompositeOperation = "destination-in", S.fillStyle = O, S.fillRect(0, 0, u, b), S.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(F, 0, 0), n.restore();
}
function af(n, l, i) {
  const { W: u, H: b, S: x, C: k, cw: E, yb: F, glowAt: S, soft: V, tw: O, sy: z } = l, Z = n.getTransform().a || 1, pt = (rt) => {
    n.shadowColor = rt ? "rgba(28,18,8,.22)" : "transparent", n.shadowBlur = rt ? 4 * Z : 0, n.shadowOffsetY = rt ? 1.5 * Z : 0;
  }, et = (rt, Ft) => {
    const L = bd(rt);
    return "rgba(" + L[0] + "," + L[1] + "," + L[2] + "," + Math.max(0, Math.min(1, Ft)).toFixed(3) + ")";
  }, Q = (rt, Ft) => {
    const L = n.createLinearGradient(0, 0, u, 0);
    L.addColorStop(0, rt[0]);
    for (let N = 0; N < rt.length - 1; N++) {
      const W = (N + Ft) * E, P = (W - O / 2) / u, lt = (W + O / 2) / u;
      P > 0 && P < 1 && L.addColorStop(P, rt[N]), lt > 0 && lt < 1 && L.addColorStop(lt, rt[N + 1]);
    }
    return L.addColorStop(1, rt[rt.length - 1]), L;
  }, K = Math.max(24, Math.ceil(u / 4)), mt = (rt, Ft) => {
    n.beginPath();
    for (let L = 0; L <= K; L++) {
      const N = u * L / K, W = rt == null ? 0 : F(N) + rt;
      L ? n.lineTo(N, W) : n.moveTo(N, W);
    }
    for (let L = K; L >= 0; L--) {
      const N = u * L / K;
      n.lineTo(N, F(N) + Ft);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = Q(x.filter((rt) => !rt.night).map((rt) => rt.sky), 0.75), n.fillRect(0, 0, u, b);
  const dt = n.createLinearGradient(0, 0, u, 0);
  for (let rt = 0; rt <= 64; rt++) {
    const Ft = S(u * rt / 64);
    dt.addColorStop(rt / 64, et(Ft.c, Math.min(1, Ft.a)));
  }
  n.fillStyle = dt;
  for (let rt = 0; rt < 8; rt++)
    n.globalAlpha = 1 - rt / 8, mt(rt * 2 * z, (rt + 1) * 2 * z);
  n.fillStyle = Q(x.filter((rt) => rt.night).map((rt) => rt.sky), 1.25);
  const wt = Math.max(0.5, V), it = 6;
  n.globalAlpha = 1, mt(null, -wt);
  for (let rt = 0; rt < it; rt++)
    n.globalAlpha = 1 - (rt + 0.5) / it, mt(-wt + 2 * wt * rt / it, -wt + 2 * wt * (rt + 1) / it);
  n.globalAlpha = 1;
  const nt = new Path2D(Ku), at = new Path2D(Zu), D = new Path2D(Yu), kt = new Path2D($u);
  n.fillStyle = k.star, i.stars.forEach((rt) => {
    n.globalAlpha = rt.o, rt.big ? (n.save(), n.translate(rt.x, rt.y), n.scale(rt.size, rt.size), n.fill(nt), n.restore()) : (n.beginPath(), n.arc(rt.x, rt.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const st = Qn(k.sun, "#ffffff", 0.55);
  i.suns.forEach((rt) => {
    const Ft = n.createRadialGradient(rt.x, rt.y, 0, rt.x, rt.y, rt.halo);
    Ft.addColorStop(0, et(st, 0.42)), Ft.addColorStop(0.7, et(st, 0)), n.fillStyle = Ft, n.beginPath(), n.arc(rt.x, rt.y, rt.halo, 0, Math.PI * 2), n.fill();
    const L = n.createLinearGradient(0, rt.y - rt.rad, 0, rt.y + rt.rad);
    L.addColorStop(0.6, k.sun), L.addColorStop(1, k.sunEdge), n.fillStyle = L, pt(!0), n.beginPath(), n.arc(rt.x, rt.y, rt.rad, 0, Math.PI * 2), n.fill(), pt(!1);
  });
  const Bt = Qn(k.moon, "#ffffff", 0.6);
  i.moons.forEach((rt) => {
    n.save(), n.translate(rt.x - rt.d / 2, rt.y - rt.d / 2), n.scale(rt.d / 46, rt.d / 46);
    const Ft = n.createLinearGradient(0, 6, 0, 40);
    Ft.addColorStop(0, Bt), Ft.addColorStop(1, k.moon), n.fillStyle = Ft, pt(!0), n.fill(at), pt(!1), n.restore();
  }), i.clouds.forEach((rt) => {
    n.save(), n.globalAlpha = rt.o, n.translate(rt.x, rt.y), n.scale(rt.w / 46, rt.h / 30.66), n.translate(-4, -9.67), n.fillStyle = rt.fill, pt(!0), n.fill(D), pt(!1), n.restore();
  }), i.fogs.forEach((rt) => {
    const Ft = n.createLinearGradient(rt.x, 0, rt.x + rt.w, 0);
    Ft.addColorStop(0, et(rt.c, 0)), Ft.addColorStop(0.25, et(rt.c, rt.a)), Ft.addColorStop(0.75, et(rt.c, rt.a)), Ft.addColorStop(1, et(rt.c, 0)), n.fillStyle = Ft, n.fillRect(rt.x, rt.y, rt.w, 6 * z);
  }), n.fillStyle = k.rain, i.drops.forEach((rt) => {
    n.save(), n.globalAlpha = rt.o, n.translate(rt.x, rt.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = k.snow, i.flakes.forEach((rt) => {
    n.globalAlpha = rt.o, n.beginPath(), n.arc(rt.x, rt.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = k.sun, i.bolts.forEach((rt) => {
    n.save(), n.globalAlpha = rt.o, n.translate(rt.x, rt.y), n.fill(kt), n.restore();
  }), n.restore();
}
const nf = (n) => n === "sunny" ? "clear" : n === "clear-night" ? "night" : n === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(n) ? "rain" : ["snowy", "snowy-rainy"].includes(n) ? "snow" : "cloudy", ys = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, ld = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, jd = (n, l) => '<path class="' + l + '" d="' + n + '"/>', of = (n, l) => ' style="animation-delay:-' + Math.round(n * 137 % l) + 'ms"', Xn = (n, l, i, u) => {
  const b = i * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (u < 1 ? ' opacity="' + u + '"' : "") + of(n, 2400) + ' d="M' + n + " " + (l - i) + "L" + (n + b) + " " + (l - b) + "L" + (n + i) + " " + l + "L" + (n + b) + " " + (l + b) + "L" + n + " " + (l + i) + "L" + (n - b) + " " + (l + b) + "L" + (n - i) + " " + l + "L" + (n - b) + " " + (l - b) + 'Z"/>';
}, Ac = ([n, l, i], u) => '<path class="wbMoonPath" d="' + n + '" fill="url(#' + u + ')"/><defs><linearGradient id="' + u + '" x1="0" y1="' + l + '" x2="0" y2="' + i + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', rf = (n, l) => l ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', sf = (n) => (n ? ["29.35", "43.04", "56.74"].map((l, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" x="' + l + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + l + ' 60.65)"/></g>') : [19, 26, 33].map((l, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + l + ' 38)"/></g>')).join(""), lf = (n) => (n ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([l, i], u) => '<circle class="wbFlake" style="animation-delay:-' + u * 640 + 'ms" cx="' + l + '" cy="' + i + '" r="' + (n ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function df(n, l, i, u) {
  const b = (x) => '<g filter="url(#' + u + '-sh)">' + x + "</g>";
  return n === "clear" ? l ? b(Ac(i ? ld.l : ld.s, u)) + (i ? Xn(70, 20, 5.83, 1) + Xn(78.33, 41.67, 3.75, 0.8) + Xn(60, 71.67, 3.33, 0.6) : Xn(42, 12, 3.5, 1) + Xn(47, 25, 2.25, 0.8) + Xn(36, 43, 2, 0.6)) : b(rf(u, i)) : n === "partly" ? b(l ? Ac(i ? ld.lp : ld.sp, u) : i ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + b(jd(i ? ys.lp : ys.sp, l ? "wbCloudLight" : "wbBright")) + (l ? i ? Xn(73.33, 16.67, 4.17, 0.9) : Xn(44, 10, 2.5, 0.9) : "") : n === "cloudy" ? b(jd(i ? ys.lc : ys.s, l ? "wbCloudLight" : "wbBright")) + (l ? i ? Xn(15, 15, 3.75, 0.8) + Xn(76.67, 13.33, 2.92, 0.6) : Xn(9, 9, 2.25, 0.8) + Xn(46, 8, 1.75, 0.6) : "") : b(jd(i ? ys.lr : ys.s, "wbCloudLight")) + (n === "rain" ? sf(i) : lf(i));
}
const cf = (n, l) => '<defs><filter id="' + n + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (l ? 1.6 : 1) + '" stdDeviation="' + (l ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function pf(n, l, i, u) {
  let b = nf(n);
  const x = b === "night" || !!i;
  b === "night" && (b = "clear");
  const k = l ? 90 : 54;
  return { k: b, night: x, svg: '<svg viewBox="0 0 ' + k + " " + k + '">' + cf(u, l) + df(b, x, l, u) + "</svg>" };
}
const uf = [
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
], dd = (n, l) => (uf[l % 8 * 8 + n % 8] + 0.5) / 64, To = (n) => [parseInt(n.slice(1, 3), 16), parseInt(n.slice(3, 5), 16), parseInt(n.slice(5, 7), 16)], ja = (n, l, i) => [Math.round(n[0] + (l[0] - n[0]) * i), Math.round(n[1] + (l[1] - n[1]) * i), Math.round(n[2] + (l[2] - n[2]) * i)], vl = (n) => n < 0 ? 0 : n > 1 ? 1 : n, Ec = (n, l) => {
  let i = n * 374761393 + l * 668265263 ^ 1540483477;
  return i = Math.imul(i ^ i >>> 13, 1274126177), ((i ^ i >>> 16) >>> 0) / 4294967296;
}, Or = [255, 255, 255], ln = To("#26221e"), _c = To("#0288d1"), ff = To("#01579b"), Vd = To(fn.cloudDay), zd = To(fn.cloudNight), cd = To(fn.dusk), Gd = To(fn.sunEdge), hf = To(fn.sun), mf = 10, Dc = 0.3, Li = 56, Ip = 21;
function gf(n) {
  const l = Array.from({ length: Ip }, () => new Array(Li).fill(void 0)), i = (k, E, F) => {
    l[E][k] = F;
  }, u = ja(cd, ln, 0.35), b = ja(ln, Or, 0.22);
  for (let k = 0; k <= 6; k++) {
    const E = k < 2 ? Li - 2 : Li - 1;
    for (let F = 6 - k; F <= E; F++) i(F, k, k < 2 ? u : k === 6 ? b : ln);
  }
  const x = [cd, Gd, zd, To(fn.skyRainDay), ja(cd, ln, 0.2), ja(n, ln, 0.35)];
  [2, 3, 2, 3, 3].forEach((k, E) => {
    const F = 9 + E * 6;
    for (let S = 0; S < k; S++) {
      const V = x[(E * 2 + S * 3) % x.length];
      for (let O = F; O < F + 5; O++)
        i(O, 7 + S * 2, ja(V, ln, 0.12)), i(O, 8 + S * 2, S === k - 1 ? ja(V, Or, 0.3) : V);
      i(F + 5, 7 + S * 2, ln), i(F + 5, 8 + S * 2, ln);
    }
  });
  for (let k = 7; k <= 12; k++) i(5, k, ln);
  i(5, 13, Gd);
  for (let k = 7; k <= 14; k++) for (let E = 42; E <= 51; E++) i(E, k, E === 51 ? zd : Vd);
  for (let k = 43; k <= 50; k += 2)
    i(k, 12, ln), i(k, 9, ja(ln, Vd, 0.4));
  for (let k = 40; k <= 53; k++) i(k, 14, k === 40 || k === 53 ? zd : Vd);
  for (let k = 15; k <= 18; k++) for (let E = 46; E <= 49; E++) i(E, k, k === 18 ? ln : k === 16 ? Gd : cd);
  for (let k = 15; k <= 19; k++) i(44, k, ln);
  return i(44, 20, hf), l;
}
function vf(n, l, i, u) {
  const b = Math.max(1, Math.round(n)), x = Math.max(1, Math.round(l)), k = new Uint8ClampedArray(b * x * 4), E = To(u.skyClearDay), F = To(u.skyFogDay), S = gf(E), V = Math.round(x * 0.55), O = vl(1 - Math.log(i / Dc) / Math.log(mf / Dc)), z = ja(E, F, O), Z = (K) => vl((K - 0.1) / 0.9), pt = vl((1 - Math.exp(-2 / i) - 0.2) / 0.8), et = Math.round(b / 2 - Li / 2), Q = V + 3;
  for (let K = 0; K < x; K++) {
    const mt = Q - 1 - K, dt = K - Q;
    for (let wt = 0; wt < b; wt++) {
      const it = wt - et;
      let nt, at;
      const D = mt >= 0 && mt < Ip && it >= 0 && it < Li ? S[mt][it] : void 0;
      if (D)
        nt = D, at = pt;
      else if (mt >= 0 && mt <= 1 && it >= 4 - mt && it <= 5 - mt)
        nt = ja(Or, _c, 0.15), at = pt;
      else if (K < V) {
        const Bt = vl(((K + 0.5) / V - 0.15) / 0.85) * 3, rt = Math.min(3, Math.floor(Bt + dd(wt + 2, K + 5)));
        nt = ja(z, Or, rt * 0.1), at = O * 0.95;
      } else {
        const Bt = (K - V + 0.5) / (x - V), rt = Math.min(1.5, 6e-3 / (Bt * Bt)), Ft = vl(Bt * 1.4) * 3, L = Math.min(3, Math.floor(Ft + dd(wt + 1, K + 6)));
        nt = ja(_c, ff, L / 3);
        const N = 1 + Math.round(Bt * 7), W = Math.floor(wt / (N * 3)), P = 0.06 + 0.16 * Bt, lt = wt % (N * 3) < N;
        lt && Ec(W, K) < P ? nt = ja(nt, Or, 0.18 + 0.1 * (1 - Bt)) : lt && Bt > 0.5 && Ec(W, K - 1) < P && (nt = ja(nt, ln, 0.12)), at = Z(1 - Math.exp(-rt / i)), dt === 0 && it >= 3 && it <= 8 ? (nt = ja(nt, Or, it < 6 ? 0.8 : 0.45), at = pt) : dt >= 0 && dt <= 2 && it >= Li && it < Li + 40 ? ((1 - (it - Li) / 40) * (dt === 1 ? 0.9 : 0.5) > dd(wt, K + 3) && (nt = ja(nt, Or, 0.5)), at = pt) : dt === 0 && it >= 6 && it < Li && (nt = ja(nt, ln, it % 2 === 0 ? 0.35 : 0.2), at = pt);
      }
      const kt = at > dd(wt, K) ? F : nt, st = (K * b + wt) * 4;
      k[st] = kt[0], k[st + 1] = kt[1], k[st + 2] = kt[2], k[st + 3] = 255;
    }
  }
  return { data: k, w: b, h: x };
}
const bf = {
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
}, wf = 1.6;
function xf(n, l) {
  const i = n ? bf[String(n).toUpperCase()] : void 0;
  if (!i || !(l > 0)) return;
  const u = (x) => Math.abs(Math.log(x[2] / l)), b = i.reduce((x, k) => u(k) < u(x) ? k : x);
  return u(b) <= Math.log(wf) ? { from: b[0], to: b[1], km: b[2] } : void 0;
}
const yf = (n, l) => l === "mi" ? n * 1.609344 : l === "m" ? n / 1e3 : l === "ft" ? n * 3048e-7 : l === "yd" ? n * 9144e-7 : n, kf = (n) => n < 1 ? "very_poor" : n < 4 ? "poor" : n < 10 ? "moderate" : n < 20 ? "good" : n < 40 ? "very_good" : "excellent", Ze = {
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
  expand: { dur: 660, ease: "standard", delay: 140, stagger: 145, back: 105 },
  graphs: { weight: 1, draw: 1e3 },
  tabs: { dur: 360, stretch: 56 },
  dialog: { open: 380, close: 240, ease: "spring", blur: 12, from: 80 },
  confirm: { stay: 2600, dur: 360, draw: 1 },
  drag: { pull: 17, keep: 70, stick: 44, tilt: 5, lift: 3.5, slide: 420, squash: 5 },
  outline: { lightAt: 30, glowFrom: 20, colourFrom: 50, cone: 20, glow: 15, border: 49, fill: 15, size: 60, hue: 199, press: 1, fin: 180, fout: 350 }
}, Ie = { standard: "cubic-bezier(.2,0,0,1)", land: "cubic-bezier(.34,1.46,.64,1)", spring: "cubic-bezier(.2,1.2,.4,1)", soft: "cubic-bezier(.4,0,.2,1)", exit: "cubic-bezier(.4,0,1,1)" }, Va = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
};
function Mf() {
  const { pivot: n, slider: l, iconbtn: i, warp: u, outline: b } = Ze;
  return [
    ["--pv-persp", n.persp + "px"],
    ["--pv-shine", n.shine / 100],
    ["--pv-size", n.size + "%"],
    ["--pv-ret", n.ret + "ms"],
    ["--pv-ease", Ie[n.ease]],
    ["--ab-blur", l.glow + "px"],
    ["--ab-spread", l.spread + "px"],
    ["--ab-str", l.strength + "%"],
    ["--ab-blur2", l.glow + l.hold + "px"],
    ["--ab-spread2", l.spread + l.hold / 4 + "px"],
    ["--ab-str2", l.holdStrength + "%"],
    ["--ab-grow", "scaleY(" + (1 + (l.grow / 100 - 1) * 3) + ")"],
    ["--ab-in", l.ein + "ms"],
    ["--ab-out", l.eout + "ms"],
    ["--ab-ease", Ie[l.ease]],
    ["--ih-s", i.scale / 100],
    ["--ih-p", i.press / 100],
    ["--ih-dur", i.dur + "ms"],
    ["--ih-ease", Ie[i.ease]],
    ["--ih-tint", "8%"],
    ["--wc-dur", u.cdur + "ms"],
    ["--wc-delay", u.cdelay + "ms"],
    ["--wc-ease", Ie[u.ease]],
    ["--ol-esens", b.glowFrom],
    ["--ol-csens", b.colourFrom],
    ["--ol-cone", b.cone],
    ["--ol-glow", b.glow / 100],
    ["--ol-border", b.border / 100],
    ["--ol-fill", b.fill / 100],
    ["--ol-size", b.size / 100],
    ["--ol-h", b.hue + "deg"],
    ["--ol-in", b.fin + "ms"],
    ["--ol-out", b.fout + "ms"]
  ].map(([x, k]) => x + ":" + k).join(";");
}
const Ud = ":is(button.primary,button.pill,.hcBtn,.wbRangeBtn,.activityRow.tap,.hcRow,a.hcRow)", Sf = "#homeView .tfAreaPanel", Cf = 300, wd = (n) => Math.min(1, Cf / Math.max(1, n)), Yd = (n, l) => 1 + (l / 100 - 1) * wd(n.offsetWidth);
function Tf(n, l) {
  l.style.cssText += ";" + Mf();
  let i = null;
  const u = (V) => {
    V.classList.remove("mvMoving", "mvLit"), V.style.setProperty("--rx", "0deg"), V.style.setProperty("--ry", "0deg"), V.style.setProperty("--sc", 1), V._down = !1;
  };
  n.addEventListener("pointermove", (V) => {
    var K, mt;
    const O = V.pointerType === "touch" || Va() ? null : (mt = (K = V.target).closest) == null ? void 0 : mt.call(K, Ud);
    if (i && i !== O && u(i), i = O, !O || O.disabled) return;
    const z = Ze.pivot, Z = O.getBoundingClientRect(), pt = (V.clientX - Z.left) / Z.width, et = (V.clientY - Z.top) / Z.height, Q = 1;
    O.classList.add("mvPv", "mvMoving", "mvLit"), O.style.setProperty("--pv-persp", z.persp / wd(Math.max(O.offsetWidth, O.offsetHeight)) + "px"), O.style.setProperty("--ry", (Q * (pt - 0.5) * 2 * z.tilt * wd(O.offsetWidth)).toFixed(3) + "deg"), O.style.setProperty("--rx", (Q * -(et - 0.5) * 2 * z.tilt * wd(O.offsetHeight)).toFixed(3) + "deg"), O.style.setProperty("--mx", (pt * 100).toFixed(1) + "%"), O.style.setProperty("--my", (et * 100).toFixed(1) + "%"), O._down || O.style.setProperty("--sc", Yd(O, z.lift));
  }, { passive: !0 }), n.addEventListener("pointerout", (V) => {
    i && !i.contains(V.relatedTarget) && (u(i), i = null);
  }), n.addEventListener("pointerdown", (V) => {
    var z, Z;
    const O = Va() ? null : (Z = (z = V.target).closest) == null ? void 0 : Z.call(z, Ud);
    O && (O._down = !0, O.classList.add("mvPv"), O.classList.remove("mvMoving"), O.style.setProperty("--sc", Yd(O, Ze.pivot.press)));
  }), n.addEventListener("pointerup", (V) => {
    var z, Z;
    const O = (Z = (z = V.target).closest) == null ? void 0 : Z.call(z, Ud);
    O && (O._down = !1, O.style.setProperty("--sc", V.pointerType === "touch" ? 1 : Yd(O, Ze.pivot.lift)));
  });
  let b = null;
  n.addEventListener("pointerover", (V) => {
    var O, z, Z;
    V.pointerType !== "touch" && ((Z = (z = (O = V.target).closest) == null ? void 0 : z.call(O, ".tfBar")) == null || Z.classList.add("mvHover"));
  }), n.addEventListener("pointerout", (V) => {
    var z, Z;
    const O = (Z = (z = V.target).closest) == null ? void 0 : Z.call(z, ".tfBar");
    O && !O.contains(V.relatedTarget) && O !== b && O.classList.remove("mvHover");
  }), n.addEventListener("pointerdown", (V) => {
    var z, Z;
    const O = (Z = (z = V.target).closest) == null ? void 0 : Z.call(z, ".tfBar");
    O && (b = O, O.classList.add("mvHold"));
  });
  const x = (V) => {
    if (!b) return;
    b.classList.remove("mvHold");
    const O = b.getBoundingClientRect();
    (V.pointerType === "touch" || V.clientX < O.left || V.clientX > O.right || V.clientY < O.top || V.clientY > O.bottom) && b.classList.remove("mvHover"), b = null;
  };
  window.addEventListener("pointerup", x, !0), window.addEventListener("pointercancel", x, !0), n.addEventListener("focusin", (V) => {
    var O, z;
    (z = (O = V.target).matches) != null && z.call(O, ".tfBar:focus-visible") && V.target.classList.add("mvHover");
  }), n.addEventListener("focusout", (V) => {
    var O;
    (O = V.target.classList) == null || O.remove("mvHover", "mvHold");
  }), n.addEventListener("keydown", (V) => {
    var z, Z;
    const O = (Z = (z = V.target).closest) == null ? void 0 : Z.call(z, ".tfBar");
    !O || !["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(V.key) || (O.classList.add("mvHold"), clearTimeout(O._k), O._k = setTimeout(() => O.classList.remove("mvHold"), 350));
  }), n.addEventListener("click", (V) => {
    var z, Z;
    const O = (Z = (z = V.target).closest) == null ? void 0 : Z.call(z, "button.tfIcon[data-act]");
    O && Lf(O);
  });
  let k = null;
  const E = (V, O, z) => {
    V.querySelector(":scope>.mvEdge") || V.insertAdjacentHTML("afterbegin", '<span class="mvEdgeFill" aria-hidden="true"></span><span class="mvEdge" aria-hidden="true"><i></i></span>');
    const Z = V.getBoundingClientRect(), pt = Z.width / 2, et = Z.height / 2, Q = O.clientX - Z.left - pt, K = O.clientY - Z.top - et, mt = Q ? pt / Math.abs(Q) : 1 / 0, dt = K ? et / Math.abs(K) : 1 / 0, wt = Math.min(Math.max(1 / Math.min(mt, dt), 0), 1);
    let it = Math.atan2(K, Q) * 180 / Math.PI + 90;
    it < 0 && (it += 360);
    const nt = z ? 100 : wt * 100;
    V.style.setProperty("--edge-proximity", nt.toFixed(3)), V.style.setProperty("--cursor-angle", it.toFixed(3) + "deg"), V.classList.toggle("mvLitEdge", z || nt >= Ze.outline.lightAt);
  }, F = (V) => {
    V.classList.remove("mvLitEdge"), V.style.setProperty("--edge-proximity", "0"), V._down = !1;
  }, S = (V) => {
    var z;
    const O = (z = V.closest) == null ? void 0 : z.call(V, Sf);
    return O && !l.classList.contains("tfEditing") ? O : null;
  };
  n.addEventListener("pointermove", (V) => {
    if (V.pointerType === "touch") return;
    const O = S(V.target);
    k && k !== O && F(k), k = O, O && !O._down && E(O, V, !1);
  }, { passive: !0 }), n.addEventListener("pointerout", (V) => {
    k && !k.contains(V.relatedTarget) && (F(k), k = null);
  }), n.addEventListener("pointerdown", (V) => {
    const O = S(V.target);
    O && Ze.outline.press && (O._down = !0, E(O, V, !0));
  }), n.addEventListener("pointerup", (V) => {
    const O = S(V.target);
    O && (O._down = !1, V.pointerType === "touch" ? F(O) : E(O, V, !1));
  }), new MutationObserver((V) => {
    var O;
    for (const z of V) {
      const Z = z.target;
      if (z.type === "attributes") {
        (O = Z.classList) != null && O.contains("tfMoreBackdrop") && !Z.hidden && z.oldValue !== null && Bc(Z);
        continue;
      }
      z.addedNodes.forEach((pt) => {
        pt.nodeType === 1 && pt.classList.contains("tfMoreBackdrop") && !pt.hidden && Bc(pt);
      });
    }
  }).observe(l, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["hidden"], attributeOldValue: !0 });
}
const Hp = (n) => n.closest("[data-k],.tfMore,.tfMorePair") || n.getRootNode();
function Fp(n, l) {
  const i = [];
  for (let u = n; u && u !== l && u.parentNode; u = u.parentNode) i.unshift([...u.parentNode.children].indexOf(u));
  return i;
}
const Op = (n, l) => l.reduce((i, u) => i == null ? void 0 : i.children[u], n);
function Lf(n) {
  var Z;
  if (Va() || n._warp) return;
  const l = Ze.warp, i = l.amount / 100, u = n.firstElementChild;
  if (!u) return;
  const b = { squash: { scale: 1 + 0.35 * i + " " + (1 - 0.55 * i) }, pinch: { scale: String(1 - 0.5 * i) }, twist: { rotate: 140 * i + "deg", scale: String(1 - 0.35 * i) }, flip: { rotate: "y 90deg" } }[l.style], x = "blur(" + 2 * i + "px)", k = n.getRootNode(), E = Hp(n), F = (Z = E.dataset) == null ? void 0 : Z.k, S = Fp(n, E), V = n.getAttribute("aria-pressed") + "|" + n.dataset.act;
  n._warp = 1;
  const O = u.animate([{ scale: "1", rotate: "none", filter: "blur(0px)" }, { ...b, filter: x }], { duration: l.win, easing: Ie.exit, fill: "forwards" }), z = performance.now();
  O.finished.then(() => {
    const pt = () => {
      var wt, it;
      const et = F ? E.isConnected ? E : (wt = k.querySelector) == null ? void 0 : wt.call(k, '[data-k="' + CSS.escape(F) + '"]') : E, Q = et && Op(et, S);
      if (Q === n && n.getAttribute("aria-pressed") + "|" + n.dataset.act === V && performance.now() - z < 420) {
        requestAnimationFrame(pt);
        return;
      }
      (((it = Q == null ? void 0 : Q.matches) != null && it.call(Q, "button.tfIcon") ? Q : n).firstElementChild || u).animate([{ ...b, filter: x }, { scale: "1", rotate: "none", filter: "blur(0px)" }], { duration: l.wout, easing: Ie[l.ease] }), O.cancel(), n._warp = 0;
    };
    pt();
  });
}
function Af(n, l, i) {
  var V;
  if (Va() || !n || !l) return;
  const u = Ze.expand, b = n.getBoundingClientRect(), x = "inset(" + (l.top - b.top).toFixed(1) + "px " + (b.right - l.right).toFixed(1) + "px " + (b.bottom - l.bottom).toFixed(1) + "px " + (l.left - b.left).toFixed(1) + "px round 24px)", k = n.firstElementChild, E = k == null ? void 0 : k.querySelector('.tfBack, [data-close], [data-wb="graph-close"]'), F = [...n.children].slice(1);
  n.animate([{ clipPath: x }, { clipPath: "inset(0px 0px 0px 0px round 0px)" }], { duration: u.dur, easing: Ie[u.ease] });
  const S = (V = k == null ? void 0 : k.querySelector(".tfIcon,.wbIcon")) == null ? void 0 : V.getBoundingClientRect();
  k && S && i && k.animate([{ transform: "translate(" + (i.left - S.left).toFixed(1) + "px," + (i.top - S.top).toFixed(1) + "px)" }, { transform: "none" }], { duration: u.dur, easing: Ie[u.ease] }), E == null || E.animate([{ opacity: 0 }, { opacity: 0, offset: 0.5 }, { opacity: 1 }], { duration: u.dur, easing: Ie[u.ease] }), F.forEach((O, z) => {
    O.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: u.delay + z * u.stagger, easing: Ie.standard, fill: "backwards" });
  });
}
function Ef(n, l, i) {
  if (Va() || !n || !l) {
    i();
    return;
  }
  const u = Ze.expand, b = u.dur * u.back / 100, x = n.getBoundingClientRect(), k = "inset(" + (l.top - x.top).toFixed(1) + "px " + (x.right - l.right).toFixed(1) + "px " + (x.bottom - l.bottom).toFixed(1) + "px " + (l.left - x.left).toFixed(1) + "px round 24px)";
  [...n.children].slice(1).forEach((V) => V.animate([{ opacity: 1 }, { opacity: 0 }], { duration: b * 0.3, easing: Ie.standard, fill: "forwards" }));
  const E = n.animate([{ clipPath: "inset(0px 0px 0px 0px round 0px)" }, { clipPath: k, opacity: 1, offset: 0.85 }, { clipPath: k, opacity: 0 }], { duration: b, easing: Ie.standard, fill: "forwards" });
  let F = !1;
  const S = () => {
    F || (F = !0, i());
  };
  E.finished.then(S, S), setTimeout(S, b + 80);
}
const qp = (n) => {
  let l = "M" + n[0][0].toFixed(1) + " " + n[0][1].toFixed(1);
  for (let i = 0; i < n.length - 1; i++) {
    const u = n[i - 1] || n[i], b = n[i], x = n[i + 1], k = n[i + 2] || x, E = [b[0] + (x[0] - u[0]) / 6, b[1] + (x[1] - u[1]) / 6], F = [x[0] - (k[0] - b[0]) / 6, x[1] - (k[1] - b[1]) / 6];
    l += "C" + E.map((S) => S.toFixed(1)).join(" ") + " " + F.map((S) => S.toFixed(1)).join(" ") + " " + x.map((S) => S.toFixed(1)).join(" ");
  }
  return l;
}, Wp = (n, l, i, u = "mvGrid") => [0, 1, 2].map((b) => {
  const x = (l + (i - l) * b / 2).toFixed(1);
  return '<line class="' + u + '" x1="0" x2="' + n + '" y1="' + x + '" y2="' + x + '"/>';
}).join("");
function jp(n, l = n.querySelector(".mvLine"), i = n.querySelectorAll(".mvArea,.mvDot")) {
  if (Va() || !(l != null && l.getTotalLength)) return;
  const u = Ze.graphs, b = l.getTotalLength();
  l.animate([{ strokeDasharray: b, strokeDashoffset: b }, { strokeDasharray: b, strokeDashoffset: 0 }], { duration: u.draw, easing: Ie.standard }), [...i].forEach((x, k) => x.animate([{ opacity: 0 }, { opacity: 1 }], { duration: u.draw * 0.6, delay: u.draw * 0.3 + k * 12, easing: Ie.standard, fill: "backwards" }));
}
function Vp(n, l, i, u, b) {
  if (n.getAnimations().forEach((V) => V.cancel()), n.style.left = u + "px", n.style.width = b + "px", Va() || l === u && i === b) return;
  const x = Ze.tabs, k = x.stretch / 100, E = (V, O) => ({ left: V + "px", width: O + "px" }), S = u > l ? E(l + (u - l) * (0.15 * (1 - k)), u + b - (l + (u - l) * (0.15 * (1 - k)))) : E(u, l + i - u - (l - u) * (0.15 * (1 - k)));
  n.animate([E(l, i), { offset: 0.5, ...S }, E(u, b)], { duration: x.dur, easing: Ie.standard });
}
function _f(n) {
  const l = ":is(.themeChoice,.wbSegments,.tfHeightTabs,.hcSeg,.tfSeg)", i = (b) => b.querySelector(':scope>[aria-pressed="true"],:scope>[aria-checked="true"],:scope>.active'), u = (b, x) => x ? [...b.children].indexOf(x) : -1;
  n.addEventListener("click", (b) => {
    var mt, dt, wt;
    const x = (dt = (mt = b.target).closest) == null ? void 0 : dt.call(mt, l + ">button"), k = x == null ? void 0 : x.parentElement;
    if (!k || Va() || x.disabled) return;
    const E = i(k);
    if (!E || E === x) return;
    const F = u(k, E), S = k.getBoundingClientRect(), V = E.getBoundingClientRect(), O = getComputedStyle(E).borderRadius, z = k.getRootNode(), Z = Hp(k), pt = (wt = Z.dataset) == null ? void 0 : wt.k, et = Fp(k, Z), Q = performance.now(), K = () => {
      var rt, Ft, L;
      const it = pt && !Z.isConnected ? (rt = z.querySelector) == null ? void 0 : rt.call(z, '[data-k="' + CSS.escape(pt) + '"]') : Z, nt = it && Op(it, et), at = (Ft = nt == null ? void 0 : nt.matches) != null && Ft.call(nt, l) ? i(nt) : null;
      if (!at || u(nt, at) === F) {
        performance.now() - Q < 700 && requestAnimationFrame(K);
        return;
      }
      const D = nt.getBoundingClientRect(), kt = at.getBoundingClientRect(), st = getComputedStyle(at);
      (L = nt.querySelector(":scope>.mvSegInd")) == null || L.remove();
      const Bt = document.createElement("span");
      Bt.className = "mvSegInd", Bt.style.cssText = "top:" + (kt.top - D.top - nt.clientTop) + "px;height:" + kt.height + "px;border-radius:" + O + ";background:" + st.backgroundColor + ";box-shadow:" + st.boxShadow, getComputedStyle(nt).position === "static" && (nt.style.position = "relative"), nt.prepend(Bt), nt.classList.add("mvSegMoving"), Vp(Bt, V.left - S.left - nt.clientLeft, V.width, kt.left - D.left - nt.clientLeft, kt.width), clearTimeout(nt._seg), nt._seg = setTimeout(() => {
        Bt.remove(), nt.classList.remove("mvSegMoving");
      }, Ze.tabs.dur + 20);
    };
    requestAnimationFrame(K);
  }, !0);
}
const zp = (n) => getComputedStyle(n).placeItems.startsWith("end");
function Bc(n) {
  const l = n.firstElementChild;
  if (Va() || !l || l.classList.contains("still")) return;
  const i = Ze.dialog;
  n.animate([{ opacity: 0, backdropFilter: "blur(0px)" }, { opacity: 1, backdropFilter: "blur(" + i.blur + "px)" }], { duration: i.open, easing: Ie.standard }), l.style.animation = "none", l.animate(zp(n) ? [{ transform: "translateY(100%)" }, { transform: "none" }] : [{ opacity: 0, transform: "scale(" + i.from / 100 + ")" }, { opacity: 1, transform: "none" }], { duration: i.open, easing: Ie[i.ease] }), [...(l.classList.contains("tfMorePair") && l.querySelector(".tfMore") || l).children].forEach((b, x) => b.animate([{ opacity: 0 }, { opacity: 1 }], { duration: i.open * 0.6, delay: i.open * 0.35 + x * 40, easing: Ie.standard, fill: "backwards" }));
}
function Df(n, l) {
  const i = n == null ? void 0 : n.firstElementChild;
  if (Va() || !i || n.hidden || n._closing) {
    l();
    return;
  }
  const u = Ze.dialog;
  n._closing = !0, n.style.pointerEvents = "none", n.animate([{ opacity: 1, backdropFilter: "blur(" + u.blur + "px)" }, { opacity: 0, backdropFilter: "blur(0px)" }], { duration: u.close, easing: Ie.exit, fill: "forwards" });
  const b = i.animate(zp(n) ? [{ transform: "none" }, { transform: "translateY(100%)" }] : [{ opacity: 1, transform: "none" }, { opacity: 0, transform: "scale(" + u.from / 100 + ")" }], { duration: u.close, easing: Ie.exit, fill: "forwards" });
  let x = !1;
  const k = () => {
    x || (x = !0, n._closing = !1, n.style.pointerEvents = "", n.getAnimations().forEach((E) => E.cancel()), i.getAnimations().forEach((E) => E.cancel()), l());
  };
  b.finished.then(k, k), setTimeout(k, u.close + 80);
}
const Bf = '<span class="mvTick" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 6L9 17L4 12" pathLength="1"/></svg></span>';
function Rf(n, l) {
  n.replaceChildren(), n.insertAdjacentHTML("afterbegin", Bf), n.appendChild(Object.assign(document.createElement("span"), { className: "mvToastText", textContent: l }));
}
function Pf(n) {
  if (Va()) return;
  const l = Ze.confirm;
  n.animate([{ opacity: 0, translate: "0 18px" }, { opacity: 1, translate: "0 0" }], { duration: l.dur, easing: Ie.spring });
  const i = n.querySelector(".mvTick path");
  i && l.draw && i.animate([{ strokeDasharray: "1", strokeDashoffset: "1" }, { strokeDasharray: "1", strokeDashoffset: "0" }], { duration: 420, delay: l.dur * 0.5, easing: Ie.standard, fill: "backwards" });
}
const Rc = (n, l, i, u, b = 1) => (n + l * i * b) * Math.pow(u, b);
function Nf(n) {
  const l = Ze.drag.squash / 100;
  !n || Va() || !l || n.animate([{ transform: "scale(" + (1 + l * 0.4) + "," + (1 - l) + ")" }, { transform: "scale(" + (1 - l * 0.1) + "," + (1 + l * 0.24) + ")" }, { transform: "none" }], { duration: 340, easing: "ease-out" });
}
function Pc(n) {
  if (!n || Va()) return;
  const l = Ze.expand;
  [...n.children].slice(1).forEach((i, u) => i.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: l.delay + u * l.stagger, easing: "cubic-bezier(.2,0,0,1)", fill: "backwards" }));
}
const Ta = 6e4, ye = 36e5, Mn = 864e5, wl = 1440, If = 6, Hf = 10 * Ta, Nc = 3, Ff = 3, pd = { day: [6, 22], waking: [7, 23], all: [0, 24] }, Of = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], qf = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", Ic = (n, l, i, u) => '<circle cx="' + n + '" cy="' + l + '" r="' + i + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((b) => {
  const x = Math.cos(b * Math.PI / 180), k = Math.sin(b * Math.PI / 180), E = i + 2, F = i + 2 + u;
  return "M" + (n + x * E).toFixed(2) + " " + (l + k * E).toFixed(2) + "L" + (n + x * F).toFixed(2) + " " + (l + k * F).toFixed(2);
}).join("") + '"/>', yi = (n) => '<path d="' + qf + '"' + (n ? ' transform="' + n + '"' : "") + "/>", ki = (n) => '<path d="' + n + '"/>', Hc = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function Wf(n, l) {
  const i = "translate(0,-3)";
  switch (n) {
    case "sunny":
      return l ? Hc : Ic(12, 12, 4, 2.5);
    case "clear-night":
      return Hc;
    case "partlycloudy":
      return (l ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : Ic(7.5, 7.5, 2.6, 1.4)) + yi("translate(3.6,3) scale(.85)");
    case "cloudy":
      return yi();
    case "fog":
      return ki("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return yi(i) + ki("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return yi(i) + ki("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return yi(i) + ki("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return yi(i) + ki("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return yi(i) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return yi(i) + ki("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return yi(i) + ki("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return ki("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + ki("M12 8v5M12 16h.01");
  }
}
const Zd = (n, l) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + Wf(n, l) + "</svg>", jf = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), Vf = 30 * Ta, zf = 7, Gf = 3, Fc = 1, Uf = Ta, Yf = 15 * Ta, Zf = 5, ke = {
  back: "M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z",
  calendar: "M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z",
  chevronDown: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",
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
  radar: "M19.07,4.93L17.66,6.34C19.1,7.79 20,9.79 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12C4,7.92 7.05,4.56 11,4.07V6.09C8.16,6.57 6,9.03 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12C18,10.34 17.33,8.84 16.24,7.76L14.83,9.17C15.55,9.9 16,10.9 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12C8,10.14 9.28,8.59 11,8.14V10.28C10.4,10.63 10,11.26 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12C14,11.26 13.6,10.62 13,10.28V2H12A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,9.24 20.88,6.74 19.07,4.93Z",
  airFilter: "M19,18.31V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V16.3C4.54,16.12 3.95,16 3,16A1,1 0 0,1 2,15A1,1 0 0,1 3,14C3.82,14 4.47,14.08 5,14.21V12.3C4.54,12.12 3.95,12 3,12A1,1 0 0,1 2,11A1,1 0 0,1 3,10C3.82,10 4.47,10.08 5,10.21V8.3C4.54,8.12 3.95,8 3,8A1,1 0 0,1 2,7A1,1 0 0,1 3,6C3.82,6 4.47,6.08 5,6.21V4A2,2 0 0,1 7,2H17A2,2 0 0,1 19,4V6.16C20.78,6.47 21.54,7.13 21.71,7.29C22.1,7.68 22.1,8.32 21.71,8.71C21.32,9.1 20.8,9.09 20.29,8.71V8.71C20.29,8.71 19.25,8 17,8C15.74,8 14.91,8.41 13.95,8.9C12.91,9.41 11.74,10 10,10C9.64,10 9.31,10 9,9.96V7.95C9.3,8 9.63,8 10,8C11.26,8 12.09,7.59 13.05,7.11C14.09,6.59 15.27,6 17,6V4H7V20H17V18C18.5,18 18.97,18.29 19,18.31M17,10C15.27,10 14.09,10.59 13.05,11.11C12.09,11.59 11.26,12 10,12C9.63,12 9.3,12 9,11.95V13.96C9.31,14 9.64,14 10,14C11.74,14 12.91,13.41 13.95,12.9C14.91,12.42 15.74,12 17,12C19.25,12 20.29,12.71 20.29,12.71V12.71C20.8,13.1 21.32,13.1 21.71,12.71C22.1,12.32 22.1,11.69 21.71,11.29C21.5,11.08 20.25,10 17,10M17,14C15.27,14 14.09,14.59 13.05,15.11C12.09,15.59 11.26,16 10,16C9.63,16 9.3,16 9,15.95V17.96C9.31,18 9.64,18 10,18C11.74,18 12.91,17.41 13.95,16.9C14.91,16.42 15.74,16 17,16C19.25,16 20.29,16.71 20.29,16.71V16.71C20.8,17.1 21.32,17.1 21.71,16.71C22.1,16.32 22.1,15.69 21.71,15.29C21.5,15.08 20.25,14 17,14Z",
  eyeOutline: "M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z",
  flower: "M3,13A9,9 0 0,0 12,22C12,17 7.97,13 3,13M12,5.5A2.5,2.5 0 0,1 14.5,8A2.5,2.5 0 0,1 12,10.5A2.5,2.5 0 0,1 9.5,8A2.5,2.5 0 0,1 12,5.5M5.6,10.25A2.5,2.5 0 0,0 8.1,12.75C8.63,12.75 9.12,12.58 9.5,12.31C9.5,12.37 9.5,12.43 9.5,12.5A2.5,2.5 0 0,0 12,15A2.5,2.5 0 0,0 14.5,12.5C14.5,12.43 14.5,12.37 14.5,12.31C14.88,12.58 15.37,12.75 15.9,12.75C17.28,12.75 18.4,11.63 18.4,10.25C18.4,9.25 17.81,8.4 16.97,8C17.81,7.6 18.4,6.74 18.4,5.75C18.4,4.37 17.28,3.25 15.9,3.25C15.37,3.25 14.88,3.41 14.5,3.69C14.5,3.63 14.5,3.56 14.5,3.5A2.5,2.5 0 0,0 12,1A2.5,2.5 0 0,0 9.5,3.5C9.5,3.56 9.5,3.63 9.5,3.69C9.12,3.41 8.63,3.25 8.1,3.25A2.5,2.5 0 0,0 5.6,5.75C5.6,6.74 6.19,7.6 7.03,8C6.19,8.4 5.6,9.25 5.6,10.25M12,22A9,9 0 0,0 21,13C16,13 12,17 12,22Z"
}, Lt = {
  // the XL widgets' callout rows (Matt, 9 Nov)
  advice: { fine: "We're all good here 🙂", sunblock: "Cover up with sunblock", avoidUntil: "Avoid the sun until {time}", avoidToday: "Stay out of the sun today", window: "Open the window", closed: "Keep the windows closed", rising: "Rising: fine weather ahead", falling: "Falling: unsettled ahead", steady: "Steady: little change" },
  callout: { riseTomorrow: "Sunrise tomorrow", setTomorrow: "Sunset tomorrow", dayTomorrow: "Daylight tomorrow", moonrise: "Moonrise", moonset: "Moonset", lit: "Lit", now: "Now", peak: "Peak today", hoursAgo: "3 hours ago", change: "Change", inHours: "In 3 hours" },
  now: "Now",
  today: "Today",
  tomorrow: "Tomorrow",
  back: "Back",
  nextHours: "Next hours",
  nextDays: "Next days",
  views: { strip: "Hours", bars: "Days" },
  showAs: "Show as",
  rangeRow: "{day}: low {low}, high {high}",
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
  untilSunset: "until sunset",
  untilSunrise: "until sunrise",
  moon: "Moon",
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
  pollen: "Pollen",
  rainRadar: "Rain radar",
  noAir: "No air quality sensor yet",
  noPollen: "No pollen sensor yet",
  rainFrom: "Rain from {time}",
  noRain12: "No rain in the next 12 hours",
  fineParticles: "fine particles",
  aqLevel: { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }
}, Kf = {
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
}, $f = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], Xf = Object.keys(Lt.phases), Jf = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)", extreme: "var(--purple-color, #926bc7)" }, Oc = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, Gp = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], ud = 100, qc = "µg/m³", Qf = "weather_alerts.air_quality_pollen", Md = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], th = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, eh = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], ah = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, nh = { daily: 1, hourly: 2 }, Dt = (n) => String(n ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), qa = (n, l) => n.replace(/\{(\w+)\}/g, (i, u) => l[u] ?? ""), Ci = (n) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + n + '"/></svg>', Wc = /* @__PURE__ */ new Map();
function Up(n) {
  let l = Wc.get(n);
  if (l === void 0) {
    const i = "http://www.w3.org/2000/svg", u = document.createElementNS(i, "svg"), b = document.createElementNS(i, "path");
    u.setAttribute("viewBox", "0 0 24 24"), u.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", b.setAttribute("d", n), u.append(b), document.body.append(u);
    const x = b.getBBox();
    u.remove();
    const k = Math.max(x.width, x.height), E = k ? 26 * 24 / k : 0, F = E / 24;
    l = k ? "width:" + E.toFixed(2) + "px;height:" + E.toFixed(2) + "px;translate:" + ((12 - x.x - x.width / 2) * F).toFixed(2) + "px " + ((12 - x.y - x.height / 2) * F).toFixed(2) + "px" : "", Wc.set(n, l);
  }
  return l ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + l + '"><path d="' + n + '"/></svg>' : Ci(n);
}
const oh = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
}, De = (n) => n != null && n !== "" && Number.isFinite(Number(n)), jc = /* @__PURE__ */ new Map(), Vc = /* @__PURE__ */ new Map(), Kd = /* @__PURE__ */ new WeakMap(), ih = (n) => {
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
function he(n, l, i) {
  const u = Number(n);
  if (Number.isNaN(u)) return String(n);
  const b = (l == null ? void 0 : l.number_format) === "none", x = { maximumFractionDigits: 2, ...i, ...b ? { useGrouping: !1 } : {} }, k = b ? "en-US" : ih(l), E = JSON.stringify([k, x]);
  let F = jc.get(E);
  if (!F) {
    try {
      F = new Intl.NumberFormat(k, x);
    } catch {
      F = new Intl.NumberFormat(void 0, x);
    }
    jc.set(E, F);
  }
  return F.format(u);
}
const wc = (n) => {
  var l;
  return ((l = n == null ? void 0 : n.locale) == null ? void 0 : l.language) || (n == null ? void 0 : n.language) || void 0;
};
function rh(n) {
  if (!n) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (Kd.has(n)) return Kd.get(n);
  const l = n.time_format, i = l === "language" || l === "system" || !l ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(l === "language" ? n.language : void 0).includes("10") : l === "12";
  return Kd.set(n, i), i;
}
const Yp = (n) => {
  var l, i;
  return ((l = n == null ? void 0 : n.locale) == null ? void 0 : l.time_zone) === "server" && ((i = n == null ? void 0 : n.config) != null && i.time_zone) ? n.config.time_zone : void 0;
};
function Zp(n, l) {
  const i = JSON.stringify([n, l]);
  let u = Vc.get(i);
  if (!u) {
    try {
      u = new Intl.DateTimeFormat(n, l);
    } catch {
      u = new Intl.DateTimeFormat(void 0, { ...l, timeZone: void 0 });
    }
    Vc.set(i, u);
  }
  return u;
}
const Wa = (n, l) => Zp(wc(l), { hour: "numeric", minute: "2-digit", hourCycle: rh(l == null ? void 0 : l.locale) ? "h12" : "h23", timeZone: Yp(l) }).format(n), zc = (n, l) => Zp(wc(l), { weekday: "short", timeZone: Yp(l) }).format(n), sh = (n, l) => n.toLocaleDateString(wc(l), { weekday: "narrow" }), qe = (n, l) => De(l) ? he(Math.round(Number(l)), n.locale) + "°" : "–", sr = (n) => {
  const l = new Date(n);
  return l.setHours(0, 0, 0, 0), l;
}, ks = (n, l) => n.getFullYear() === l.getFullYear() && n.getMonth() === l.getMonth() && n.getDate() === l.getDate(), un = Math.PI / 180, lh = 2440588, dh = 2451545, Sd = un * 23.4397, ch = 149598e3, ph = -0.833 * un, uh = 0.133 * un, Gc = 5 * Ta, Kp = (n) => n.getTime() / Mn - 0.5 + lh - dh, $p = (n, l) => Math.atan2(Math.sin(n) * Math.cos(Sd) - Math.tan(l) * Math.sin(Sd), Math.cos(n)), Xp = (n, l) => Math.asin(Math.sin(l) * Math.cos(Sd) + Math.cos(l) * Math.sin(Sd) * Math.sin(n)), fh = (n, l) => un * (280.16 + 360.9856235 * n) - l, hh = (n, l, i) => Math.asin(Math.sin(l) * Math.sin(i) + Math.cos(l) * Math.cos(i) * Math.cos(n));
function Jp(n) {
  const l = un * (357.5291 + 0.98560028 * n), i = un * (1.9148 * Math.sin(l) + 0.02 * Math.sin(2 * l) + 3e-4 * Math.sin(3 * l)), u = l + i + un * 102.9372 + Math.PI;
  return { ra: $p(u, 0), dec: Xp(u, 0), dist: ch };
}
function Qp(n) {
  const l = un * (218.316 + 13.176396 * n), i = un * (134.963 + 13.064993 * n), u = un * (93.272 + 13.22935 * n), b = l + un * 6.289 * Math.sin(i), x = un * 5.128 * Math.sin(u);
  return { ra: $p(b, x), dec: Xp(b, x), dist: 385001 - 20905 * Math.cos(i) };
}
const tu = (n, l, i, u) => {
  const b = Kp(l), x = n(b);
  return hh(fh(b, un * -u) - x.ra, un * i, x.dec);
}, Cd = (n, l, i) => tu(Jp, n, l, i), mh = (n, l, i) => tu(Qp, n, l, i);
function eu(n, l, i, u) {
  const b = {};
  let x = i.getTime(), k = n(i) - l;
  for (let E = x + Gc; E <= u.getTime(); E += Gc) {
    const F = n(new Date(E)) - l;
    if (k < 0 != F < 0) {
      const S = new Date(x + (E - x) * k / (k - F));
      F > 0 ? b.rise ?? (b.rise = S) : b.set ?? (b.set = S);
    }
    x = E, k = F;
  }
  return b;
}
const au = (n) => {
  const l = sr(n);
  return [l, new Date(l.getTime() + Mn)];
}, gh = (n, l, i) => eu((u) => Cd(u, l, i), ph, ...au(n)), vh = (n, l, i) => eu((u) => mh(u, l, i), uh, ...au(n));
function $d(n) {
  const l = Kp(n), i = Jp(l), u = Qp(l), b = Math.acos(Math.sin(i.dec) * Math.sin(u.dec) + Math.cos(i.dec) * Math.cos(u.dec) * Math.cos(i.ra - u.ra)), x = Math.atan2(i.dist * Math.sin(b), u.dist - i.dist * Math.cos(b)), k = Math.atan2(Math.cos(i.dec) * Math.sin(i.ra - u.ra), Math.sin(i.dec) * Math.cos(u.dec) - Math.cos(i.dec) * Math.sin(u.dec) * Math.cos(i.ra - u.ra));
  return { fraction: (1 + Math.cos(x)) / 2, phase: 0.5 + 0.5 * x * (k < 0 ? -1 : 1) / Math.PI };
}
const bh = (n) => {
  const l = n * 28;
  return l < 0.5 || l > 27.5 ? "new_moon" : l < 6.5 ? "waxing_crescent" : l < 7.5 ? "first_quarter" : l < 13.5 ? "waxing_gibbous" : l < 14.5 ? "full_moon" : l < 20.5 ? "waning_gibbous" : l < 21.5 ? "last_quarter" : "waning_crescent";
}, xl = (n) => {
  const l = n == null ? void 0 : n.config;
  return l && De(l.latitude) && De(l.longitude) ? { lat: Number(l.latitude), lon: Number(l.longitude) } : null;
};
function Ms(n, l) {
  var S, V, O;
  const i = xl(n), u = i ? gh(l, i.lat, i.lon) : {}, b = (S = n == null ? void 0 : n.states) == null ? void 0 : S["sun.sun"], x = sr(l).getTime(), k = (z) => {
    const Z = z ? new Date(z) : null;
    return Z && Number.isFinite(Z.getTime()) && sr(Z).getTime() === x ? Z : null;
  }, E = k((V = b == null ? void 0 : b.attributes) == null ? void 0 : V.next_rising), F = k((O = b == null ? void 0 : b.attributes) == null ? void 0 : O.next_setting);
  return E && (u.rise = E), F && (u.set = F), u;
}
function wh(n) {
  var u;
  const l = (u = n == null ? void 0 : n.states) == null ? void 0 : u["sun.sun"];
  if ((l == null ? void 0 : l.state) === "below_horizon" || (l == null ? void 0 : l.state) === "above_horizon") return l.state === "below_horizon";
  const i = xl(n);
  return i ? Cd(/* @__PURE__ */ new Date(), i.lat, i.lon) < 0 : !1;
}
const qr = (n) => !!n && n.state !== "unavailable" && n.state !== "unknown", Cs = (n, l) => {
  var u;
  const i = (u = n.entities) == null ? void 0 : u[l];
  return !i || !i.hidden && !i.entity_category;
}, ta = (n, l, i) => {
  var u, b;
  for (const x of l) {
    const k = (u = n.states) == null ? void 0 : u[x];
    if (!qr(k)) continue;
    const E = (b = k.attributes) == null ? void 0 : b[i];
    if (E != null && E !== "") return { stateObj: k, value: E };
  }
}, xh = (n, l) => l.map((i) => {
  var u;
  return (u = n.states) == null ? void 0 : u[i];
}).find(qr), yh = (n, l, i) => l.map((u) => {
  var b;
  return (b = n.states) == null ? void 0 : b[u];
}).find((u) => {
  var b;
  return qr(u) && (((b = u.attributes) == null ? void 0 : b.supported_features) == null || Number(u.attributes.supported_features) & nh[i]);
});
function ir(n, l, i) {
  var x, k, E, F;
  const u = ((k = (x = n.config) == null ? void 0 : x.unit_system) == null ? void 0 : k.length) || "", b = (l == null ? void 0 : l.attributes) || {};
  switch (i) {
    case "precipitation":
      return b.precipitation_unit || (u === "km" ? "mm" : "in");
    case "pressure":
      return b.pressure_unit || (u === "km" ? "hPa" : "inHg");
    case "wind_speed":
    case "wind_gust_speed":
      return b.wind_speed_unit || u + "/h";
    case "visibility":
      return b.visibility_unit || u;
    default:
      return b.temperature_unit || ((F = (E = n.config) == null ? void 0 : E.unit_system) == null ? void 0 : F.temperature) || "";
  }
}
function xd(n, l, i, u) {
  try {
    if (typeof n.formatEntityAttributeValueToParts == "function") {
      const [b, ...x] = n.formatEntityAttributeValueToParts(l, i, u).map((k) => k.value);
      return { number: b, unit: x.join("").trim() };
    }
  } catch {
  }
  return { number: he(u, n.locale), unit: ir(n, l, i) };
}
function Uc(n, l, i, u) {
  try {
    if (typeof n.formatEntityAttributeValue == "function") return n.formatEntityAttributeValue(l, i, u);
  } catch {
  }
  const b = xd(n, l, i, u);
  return (b.number + " " + b.unit).trim();
}
function Mi(n, l) {
  var u;
  try {
    if (typeof n.formatEntityState == "function") return n.formatEntityState(l);
  } catch {
  }
  const i = (u = l.attributes) == null ? void 0 : u.unit_of_measurement;
  return Kf[l.state] || (i && De(l.state) ? he(l.state, n.locale) + " " + i : l.state);
}
function nr(n, l) {
  var i;
  try {
    if (typeof n.formatEntityName == "function") return n.formatEntityName(l, { type: "entity" });
  } catch {
  }
  return ((i = l.attributes) == null ? void 0 : i.friendly_name) || l.entity_id;
}
const Yc = (n) => n < 3 ? "low" : n < 6 ? "moderate" : n < 8 ? "high" : n < 11 ? "very_high" : "extreme", fd = (n) => Gp.find(([, l]) => n <= l)[0];
function kh(n, l) {
  if (l === "Beaufort") return Math.round(n);
  const i = l ? th[l] : void 0;
  if (i === void 0) return;
  const u = eh.findIndex((b) => n * i < b);
  return u === -1 ? 12 : u;
}
const Zc = (n, l) => {
  const i = l ? ah[l] : void 0;
  return i === void 0 ? void 0 : n * i;
}, Kc = (n) => Object.keys(n.states || {}).find((l) => {
  var i, u;
  return l.startsWith("sensor.") && ((u = (i = n.entities) == null ? void 0 : i[l]) == null ? void 0 : u.platform) === "moon";
}), Xd = (n) => Object.values(n.states || {}).filter((l) => {
  var i, u;
  return l.entity_id.startsWith("sensor.") && ((i = l.attributes) == null ? void 0 : i.device_class) === "precipitation" && ["total", "total_increasing"].includes(((u = l.attributes) == null ? void 0 : u.state_class) ?? "") && Cs(n, l.entity_id);
}).map((l) => l.entity_id).sort()[0];
function Mh(n) {
  var i;
  const l = {};
  for (const [u, b] of Object.entries(((i = n == null ? void 0 : n.core) == null ? void 0 : i.integration) ?? {})) {
    if (b && "integration_type" in b) {
      l[u] = b.categories;
      continue;
    }
    for (const [x, k] of Object.entries((b == null ? void 0 : b.integrations) ?? {})) l[x] = k == null ? void 0 : k.categories;
  }
  return l;
}
const nu = (n, l, i) => {
  var b, x, k;
  const u = (x = (b = n.entities) == null ? void 0 : b[i]) == null ? void 0 : x.platform;
  return !!u && !!((k = l[u]) != null && k.includes(Qf));
};
function Sh(n, l) {
  const i = /* @__PURE__ */ new Map();
  return Object.values(n.states || {}).filter((u) => {
    var b;
    return u.entity_id.startsWith("sensor.") && Md.includes(((b = u.attributes) == null ? void 0 : b.device_class) ?? "") && Cs(n, u.entity_id) && nu(n, l, u.entity_id);
  }).sort((u, b) => u.entity_id.localeCompare(b.entity_id)).forEach((u) => {
    i.has(u.attributes.device_class) || i.set(u.attributes.device_class, u.entity_id);
  }), Md.map((u) => i.get(u)).filter(Boolean);
}
const Ch = (n, l) => Object.values(n.states || {}).filter((i) => {
  var u, b;
  return i.entity_id.startsWith("sensor.") && Cs(n, i.entity_id) && nu(n, l, i.entity_id) && (((b = (u = n.entities) == null ? void 0 : u[i.entity_id]) == null ? void 0 : b.translation_key) ?? i.entity_id).toLowerCase().includes("pollen");
}).map((i) => i.entity_id).sort();
function $c(n, l, i) {
  const u = Math.max(l - n, 1e-6), b = i[i.length - 1], x = i.find((S) => u / S <= 4) ?? b * Math.ceil(u / (4 * b)), k = Math.floor(n / x) * x;
  let E = Math.ceil(l / x) * x;
  E === k && (E = k + x);
  const F = [];
  for (let S = k; S <= E + x / 1e3; S += x) F.push(S);
  return { min: k, max: E, ticks: F };
}
const Th = (n, l, i) => {
  const u = (k) => [1, 3, 5].map((E) => parseInt(k.slice(E, E + 2), 16)), b = u(n), x = u(l);
  return "rgb(" + b.map((k, E) => Math.round(k + (x[E] - k) * i)).join(", ") + ")";
}, Lh = (n, l, i, u) => {
  const b = i * Math.abs(1 - 2 * u), x = u < 0.5 ? 0 : 1;
  return "M " + n + " " + (l - i) + " A " + i + " " + i + " 0 0 0 " + n + " " + (l + i) + " A " + b + " " + i + " 0 0 " + x + " " + n + " " + (l - i) + " Z";
}, sn = ({ icon: n, name: l, sub: i, visual: u, double: b, backdrop: x, cls: k, zone: E, callouts: F }) => '<div class="wbCard wbSquare' + (b ? " wbDouble" : "") + (x ? " wbHasBackdrop" : "") + (E != null ? " wbZoned" : "") + (k ? " " + k : "") + '">' + (x ? '<div class="wbBackdrop" aria-hidden="true">' + x + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + Up(n) + '</div><div class="wbText"><span class="wbName">' + Dt(l) + "</span>" + (i ? '<span class="wbSub">' + Dt(i) + "</span>" : "") + "</div></div>" + (E != null ? '<div class="wbZone">' + E + "</div>" + (F != null && F.length ? '<div class="wbCallouts">' + F.slice(0, 3).map((S) => Array.isArray(S) ? '<span class="wbCallout"><span>' + Dt(S[0]) + "</span><span>" + Dt(S[1]) + "</span></span>" : '<span class="wbCallout wbAdvice"><span>' + Dt(S) + "</span></span>").join("") + "</div>" : "") : '<div class="wbVisual">' + u + "</div>") + "</div>", hd = (n) => '<div class="wbZoneM">' + n + "</div>", Jn = (n, l) => '<div class="wbValue"><span class="wbNum">' + Dt(n) + "</span>" + (l ? '<span class="wbUnitV">' + Dt(l) + "</span>" : "") + "</div>";
function Ah(n) {
  const l = n.max - n.min || 1, i = (E) => 100 - (Math.min(n.max, Math.max(n.min, E)) - n.min) / l * 100, u = (E) => E / wl * 100 + "%", b = (E) => E.map((F) => F.t + "," + i(F.v)).join(" "), x = n.kind === "line" ? n.points : [];
  let k = '<div class="wbDayChart"><div class="wbDcSun">' + n.sun.map((E) => '<span class="wbDcSunMark" style="left:' + u(E.t) + '">' + Ci(E.rise ? ke.sunsetUp : ke.sunsetDown) + Dt(E.label) + "</span>").join("") + "</div>";
  return k += '<div class="wbDcY">' + n.ticks.map((E) => '<span style="top:' + i(E) + '%">' + Dt(n.format(E)) + "</span>").join("") + "</div>", k += '<div class="wbDcPlot"><svg viewBox="0 0 ' + wl + ' 100" preserveAspectRatio="none">' + n.night.map(([E, F]) => '<rect class="wbDcNight" x="' + E + '" y="0" width="' + (F - E) + '" height="100"></rect>').join("") + n.ticks.map((E) => '<line class="wbDcGrid" x1="0" x2="' + wl + '" y1="' + i(E) + '" y2="' + i(E) + '" vector-effect="non-scaling-stroke"></line>').join("") + n.sun.map((E) => '<line class="wbDcSunLine" x1="' + E.t + '" x2="' + E.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (n.past && n.past.length > 1 ? '<polyline class="wbDcPast" points="' + b(n.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (x.length > 1 ? '<polygon class="wbDcArea" points="' + x[0].t + ",100 " + b(x) + " " + x[x.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + b(x) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (n.now ? '<line class="wbDcNow" x1="' + n.now.t + '" x2="' + n.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (n.kind === "bars" ? n.points.filter((E) => E.v > 0).map((E) => '<i class="wbDcBar" style="left:' + u(E.t + 12) + ";width:" + u(36) + ";height:" + (100 - i(E.v)) + '%"></i>').join("") : "") + (n.now && n.kind === "line" ? '<i class="wbDcDot" style="left:' + u(n.now.t) + ";top:" + i(n.now.v) + '%"></i>' : "") + (n.peak ? '<span class="wbDcPeak" style="left:' + u(n.peak.t) + ";top:" + i(n.peak.v) + '%">' + Dt(n.peak.label) + "</span>" : "") + (n.note ? '<span class="wbDcNote">' + Dt(n.note) + "</span>" : "") + "</div>", k += '<div class="wbDcX">' + n.hours.map((E) => '<span class="' + (E.minor ? "wbMinor" : "") + '" style="left:' + u(E.t) + '">' + Dt(E.label) + "</span>").join("") + "</div></div>", k;
}
function Xc(n, l, i = 120, u = 300) {
  const k = n.map((K) => K.value), E = Math.min(...k), F = Math.max(...k), S = F - E || 1, V = (K) => K / (n.length - 1) * u, O = (K) => 18 + (1 - (K - E) / S) * (i - 18 - 18), z = n.map((K, mt) => [V(mt), O(K.value)]), Z = z.length > 2 ? qp(z) : "M" + z.map((K) => K[0].toFixed(1) + " " + K[1].toFixed(1)).join("L"), pt = k.indexOf(F), et = k.indexOf(E), Q = (K) => K === 0 ? "start" : K === n.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 ' + u + " " + i + '" aria-hidden="true">' + Wp(u, 18, i - 18) + ('<path class="wbArea" d="' + Z + "L" + u + " " + (i - 18) + "L0 " + (i - 18) + 'Z"></path>') + '<path class="wbLine" d="' + Z + '" vector-effect="non-scaling-stroke"></path><text x="' + V(pt) + '" y="' + (O(F) - 6) + '" text-anchor="' + Q(pt) + '">' + Dt(l(F)) + '</text><text x="' + V(et) + '" y="' + (O(E) + 14) + '" text-anchor="' + Q(et) + '">' + Dt(l(E)) + '</text><text x="0" y="' + i + '" text-anchor="start">' + Dt(n[0].label) + '</text><text x="' + u + '" y="' + i + '" text-anchor="end">' + Dt(n[n.length - 1].label) + "</text></svg>";
}
function Eh(n, l) {
  const x = n.map((O) => O.value).concat([]), k = Math.min(...x) - 2, E = Math.max(...x) + 1, F = E - k || 1, S = 300 / n.length, V = (O) => (1 - (O - k) / F) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + n.map((O, z) => '<rect class="wbBar' + (O.now ? " wbNowBar" : "") + '" x="' + (z * S + S * 0.2) + '" y="' + V(O.value) + '" width="' + S * 0.6 + '" height="' + (104 - V(O.value)) + '" rx="6"></rect><text x="' + (z * S + S / 2) + '" y="120" text-anchor="middle">' + Dt(O.label) + "</text>").join("") + "</svg>";
}
const _h = [
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
], Dh = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], Jc = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], Bh = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let Rh = 0;
function Qc(n, { getHass: l, entityId: i, style: u = "bitmap", motion: b = !0, cards: x, onOpen: k, hoursWindow: E } = {}) {
  var po, jn;
  const F = "wb" + ++Rh + "-", S = document.createElement("div");
  S.className = "wb", S.dataset.style = u;
  const V = document.createElement("div");
  V.className = "wbBento", S.appendChild(V), n.replaceChildren(S);
  const O = ["aq_tile", "pollen_tile", "radar_tile"], z = ["current", "hourly", "sun", "pollen_tile", "moon", "uv_index", "aq_tile", "humidity", "pressure", "wind", "visibility", "radar_tile", "compared_to_average", "precipitation", "air_quality"].filter((f) => !x || x.includes(f)), Z = { current: "wide", hourly: "wide", compared_to_average: "double" }, pt = ["sun", "moon", "uv_index", "aq_tile", "pollen_tile", "humidity", "pressure", "wind"], et = {};
  z.forEach((f) => {
    const w = document.createElement("div");
    w.className = "wbItem", w.dataset.card = f, w.dataset.size = Z[f] || "tile", w.hidden = !0, pt.includes(f) && (w.dataset.xl = ""), V.appendChild(w), et[f] = { el: w, html: null };
  });
  let Q = !1, K = null, mt = 0, dt = -1, wt = !1, it = null;
  const nt = "homecore-next-view", at = (() => {
    try {
      return localStorage.getItem(nt);
    } catch {
      return null;
    }
  })(), D = { graph: void 0, range: { preset: "day" }, picking: !1, openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: at === "bars" ? "bars" : "strip", aq: void 0 }, kt = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let st = /* @__PURE__ */ new Date(), Bt = /* @__PURE__ */ new Date();
  const rt = {}, Ft = {}, L = {}, N = (f) => {
    var w;
    return ((w = L[f]) == null ? void 0 : w.forecast) ?? [];
  }, W = (f, w) => {
    var y;
    return L[w] ? (y = f.states) == null ? void 0 : y[L[w].entityId] : void 0;
  };
  function P(f) {
    const w = Ft[f];
    w && (w.unsub.then((y) => {
      typeof y == "function" && y();
    }).catch(() => {
    }), delete Ft[f]), L[f] && delete L[f];
  }
  function lt(f, w, y) {
    var I;
    if (typeof ((I = f.connection) == null ? void 0 : I.subscribeMessage) != "function") return;
    const T = { entityId: y };
    try {
      T.unsub = Promise.resolve(f.connection.subscribeMessage((X) => {
        Q || Ft[w] !== T || (X != null && X.forecast ? L[w] = { entityId: y, forecast: X.forecast } : delete L[w], lo());
      }, { type: "weather/subscribe_forecast", forecast_type: w, entity_id: y }));
    } catch (X) {
      T.unsub = Promise.reject(X);
    }
    T.unsub.catch(() => {
      Ft[w] === T && delete Ft[w];
    }), Ft[w] = T;
  }
  function ut(f, w) {
    var y;
    for (const T of ["daily", "hourly"]) {
      const I = yh(f, w, T);
      ((y = Ft[T]) == null ? void 0 : y.entityId) !== (I == null ? void 0 : I.entity_id) && (P(T), I && lt(f, T, I.entity_id));
    }
  }
  const gt = (f, w, y, T = !1) => f.callWS({
    type: "history/history_during_period",
    start_time: y.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [w],
    minimal_response: T,
    no_attributes: T,
    significant_changes_only: !1
  });
  async function yt(f, w) {
    var J, ht, tt;
    const y = ta(f, w, "pressure");
    if (!y) return;
    const T = y.stateObj.entity_id, I = await gt(f, T, new Date(Date.now() - 3 * ye)), X = (tt = (ht = (J = I == null ? void 0 : I[T]) == null ? void 0 : J.find((vt) => {
      var bt;
      return typeof ((bt = vt.a) == null ? void 0 : bt.pressure) == "number";
    })) == null ? void 0 : ht.a) == null ? void 0 : tt.pressure;
    kt.pressureHistory = typeof X == "number" ? { entityId: T, value: X } : void 0;
  }
  async function Mt(f, w) {
    var ht;
    const y = ta(f, w, "temperature");
    if (!y) return;
    const T = y.stateObj.entity_id, I = sr(/* @__PURE__ */ new Date()), X = await gt(f, T, new Date(I.getTime() - zf * Mn)), J = /* @__PURE__ */ new Map();
    for (const tt of (X == null ? void 0 : X[T]) ?? []) {
      const vt = (ht = tt.a) == null ? void 0 : ht.temperature, bt = new Date((tt.lc ?? tt.lu) * 1e3);
      if (typeof vt != "number" || bt >= I) continue;
      const St = bt.toDateString();
      J.set(St, Math.max(J.get(St) ?? -1 / 0, vt));
    }
    kt.temperatureHistory = { entityId: T, dailyHighs: [...J.values()], days: [...J.entries()].map(([tt, vt]) => ({ date: new Date(tt), high: vt })) };
  }
  async function Wt(f) {
    const w = Xd(f);
    if (!w) return;
    const y = await f.callWS({ type: "recorder/statistic_during_period", statistic_id: w, rolling_window: { duration: { hours: 24 } } });
    kt.rain = { entityId: w, change: (y == null ? void 0 : y.change) ?? void 0 };
  }
  function Ut() {
    const f = l == null ? void 0 : l();
    if (!f || Q || typeof f.callWS != "function") return;
    const w = hn(f);
    kt.lastFetch = Date.now(), [yt(f, w), Mt(f, w), Wt(f)].forEach((y) => y.then(() => lo(), () => {
    }));
  }
  async function pa() {
    const f = l == null ? void 0 : l();
    if (!f) return;
    const w = ta(f, hn(f), "temperature");
    if (!w) return;
    const y = w.stateObj.entity_id, T = sr(/* @__PURE__ */ new Date());
    try {
      const I = await gt(f, y, T), X = (J) => ((I == null ? void 0 : I[y]) ?? []).map((ht) => {
        var tt;
        return { time: ht.lu * 1e3, value: (tt = ht.a) == null ? void 0 : tt[J] };
      }).filter((ht) => typeof ht.value == "number");
      kt.todayHistory = { day: T.toDateString(), fetched: Date.now(), temperature: X("temperature"), humidity: X("humidity") }, lo();
    } catch {
    }
  }
  async function jt(f) {
    const w = l == null ? void 0 : l();
    if (w)
      try {
        const y = await gt(w, f, new Date(Date.now() - 24 * ye), !0), T = ((y == null ? void 0 : y[f]) ?? []).filter((X) => De(X.s)), I = Math.max(1, Math.ceil(T.length / 48));
        kt.aqHistory = { entityId: f, points: T.filter((X, J) => J % I === 0).map((X) => ({ label: Wa(new Date(X.lu * 1e3), w), value: Number(X.s) })) }, lo();
      } catch {
      }
  }
  function Rn(f) {
    kt.categories === void 0 && (kt.categories = null, Promise.resolve().then(() => f.callWS({ type: "integration/descriptions" })).then((w) => {
      kt.categories = Mh(w);
    }, () => {
      kt.categories = {};
    }).then(() => lo()));
  }
  function hn(f) {
    var y;
    const w = Object.keys(f.states || {}).filter((T) => T.startsWith("weather.") && Cs(f, T)).sort();
    return i && ((y = f.states) != null && y[i]) ? [i, ...w.filter((T) => T !== i)] : w;
  }
  const Pn = (f) => kt.categories ? { air: Sh(f, kt.categories), pollen: Ch(f, kt.categories) } : { air: [], pollen: [] };
  function Ne(f, w, y, T) {
    if (u === "line") return '<span class="wbWx wbS' + w + ' wbLineIcon" aria-hidden="true">' + Zd(f, y || f === "clear-night") + "</span>";
    if (u === "smooth") {
      const I = pf(f, w === 90, y, F + "g-" + T);
      return '<span class="wbWx wbS' + w + " wb" + I.k[0].toUpperCase() + I.k.slice(1) + (I.night ? " wbNight" : "") + '" aria-hidden="true">' + I.svg + "</span>";
    }
    return '<span class="wbWx wbS' + w + '" aria-hidden="true"><canvas data-wb-wx="' + Dt(Td(f, y)) + '" data-size="' + w + '"></canvas></span>';
  }
  const Vt = () => N("daily").filter((f) => f.templow != null).slice(0, If);
  function Xt(f, w) {
    const y = new Date(w.datetime), T = /* @__PURE__ */ new Date();
    return ks(y, T) ? Lt.today : ks(y, new Date(T.getTime() + Mn)) ? Lt.tomorrow : zc(y, f);
  }
  const wa = (f, w, y) => y === 0 ? Xt(f, w) : zc(new Date(w.datetime), f);
  function Nn(f, w) {
    var bt, St, Gt, qt;
    const y = xh(f, w);
    if (!y) return "";
    const T = Vt(), I = D.openDay !== void 0 ? T[D.openDay] : void 0, X = ta(f, w, "temperature"), J = T[0], ht = J && ks(new Date(J.datetime), /* @__PURE__ */ new Date()), tt = ((St = (bt = f.config) == null ? void 0 : bt.unit_system) == null ? void 0 : St.temperature) || ((Gt = y.attributes) == null ? void 0 : Gt.temperature_unit) || "";
    let vt = '<div class="wbCard wbWeather' + (I ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (I ? " inert" : "") + '><div class="wbNow">' + (k ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + Dt(Lt.openPage) + '">' : '<div class="wbCurrent">') + Ne(y.state, 90, wh(f), "now") + '<div class="wbTempBlock">' + (X && De(X.value) ? '<div class="wbTemp"><span class="wbDeg">' + Dt(he(Math.round(Number(X.value)), f.locale)) + '</span><span class="wbUnit">' + Dt(tt) + "</span></div>" : "") + '<div class="wbPlace">' + Dt(((qt = f.config) == null ? void 0 : qt.location_name) ?? "") + "</div></div>" + (k ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + Dt(Mi(f, y)) + "</div>" + (ht && J.templow != null ? '<div class="wbRange">' + Dt(qa(Lt.range, { high: qe(f, J.temperature), low: qe(f, J.templow) })) + "</div>" : "") + "</div></div>";
    if (vt += ae(f) + La(f), T.length) {
      const Ct = ht && X && De(X.value) ? qe(f, X.value) : "", zt = (Ht, Tt, Jt) => Ht === 0 && Ct ? '<span class="wbAsDay">' + Dt(Tt) + '</span><span class="wbAsNow">' + Dt(Jt) + "</span>" : Dt(Tt);
      vt += '<div class="wbColumns" role="list">' + T.map((Ht, Tt) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + Tt + '" data-wb-focus="col-' + Tt + '"><span class="wbDay">' + zt(Tt, wa(f, Ht, Tt), Lt.now) + "</span>" + Ne(Ht.condition ?? "cloudy", 60, !1, "col" + Tt) + '<span class="wbTemps"><span class="wbHi">' + zt(Tt, qe(f, Ht.temperature), Ct) + '</span><span class="wbLo">' + Dt(qe(f, Ht.templow)) + "</span></span></button>").join("") + "</div>", vt += '<div class="wbHalves" role="list">' + T.map((Ht, Tt) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + Tt + '" data-wb-focus="half-' + Tt + '">' + Ne(Ht.condition ?? "cloudy", 40, !1, "half" + Tt) + '<span class="wbText"><span class="wbName">' + Dt(Xt(f, Ht)) + '</span><span class="wbSub">' + Dt(qa(Lt.highLow, { high: qe(f, Ht.temperature), low: qe(f, Ht.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return vt + "</div>" + (I ? te(f, w, I) : "") + "</div>";
  }
  const It = {
    sunny: "sunny",
    "clear-night": "clear",
    partlycloudy: "partly cloudy",
    cloudy: "cloudy",
    fog: "foggy",
    rainy: "rain",
    pouring: "heavy rain",
    snowy: "snow",
    "snowy-rainy": "sleet",
    hail: "hail",
    lightning: "thunder",
    "lightning-rainy": "thunderstorms",
    windy: "windy",
    "windy-variant": "windy",
    exceptional: "unsettled"
  }, Qt = {
    sunny: "clear",
    "clear-night": "clear",
    partlycloudy: "partly",
    cloudy: "cloudy",
    windy: "cloudy",
    "windy-variant": "cloudy",
    fog: "fog",
    rainy: "rain",
    pouring: "rain",
    hail: "rain",
    snowy: "snow",
    "snowy-rainy": "snow",
    lightning: "storm",
    "lightning-rainy": "storm"
  };
  function oe(f) {
    const w = Date.now(), y = N("hourly").filter((St) => new Date(St.datetime).getTime() > w - ye).slice(0, 13);
    if (y.length < 2) return "";
    const T = (St) => Wa(new Date(St.datetime), f), I = (St) => It[St.condition] || "", X = (St) => Qt[St.condition] || St.condition;
    let J = I(y[0]);
    if (!J) return "";
    let ht = y[0], tt = 0;
    for (const St of y.slice(1))
      tt === 2 || X(St) === X(ht) || !I(St) || (J += (tt ? " and " : ", ") + I(St) + " from " + T(St), ht = St, tt++);
    const vt = Number(y[0].temperature), bt = y.filter((St) => De(St.temperature));
    if (De(vt) && bt.length) {
      const St = bt.reduce((qt, Ct) => Number(Ct.temperature) < Number(qt.temperature) ? Ct : qt), Gt = bt.reduce((qt, Ct) => Number(Ct.temperature) > Number(qt.temperature) ? Ct : qt);
      vt - Number(St.temperature) >= 3 ? J += ", down to " + qe(f, St.temperature) + " by " + T(St) : Number(Gt.temperature) - vt >= 3 && (J += ", up to " + qe(f, Gt.temperature) + " by " + T(Gt));
    }
    return J[0].toUpperCase() + J.slice(1) + ".";
  }
  const ae = (f) => {
    const w = oe(f);
    return w ? '<div class="wbSummary"><p class="wbSummaryText">' + Dt(w) + "</p></div>" : "";
  };
  function La(f) {
    const [w, y] = pd[E == null ? void 0 : E()] || pd.day, T = Date.now(), I = N("hourly").filter((X) => {
      const J = new Date(X.datetime), ht = J.getHours();
      return J.getTime() > T - ye / 2 && ht >= w && ht < y && De(X.temperature);
    }).slice(0, 4);
    return I.length ? '<div class="wbNextHours" role="list">' + I.map((X, J) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + Dt(Wa(new Date(X.datetime), f)) + "</span>" + Ne(X.condition ?? "cloudy", 40, X.is_daytime === !1, "hr" + J) + '<span class="wbHourTemp">' + Dt(qe(f, X.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function lr(f) {
    const w = f.getTime(), y = Date.now() - ye;
    return N("hourly").filter((T) => {
      const I = new Date(T.datetime).getTime();
      return I >= w && I < w + Mn && I > y;
    });
  }
  function za(f) {
    if (!f.length) return ["temperature"];
    const w = ["temperature"];
    return f.some((y) => y.precipitation != null || y.precipitation_probability != null) && w.push("precipitation"), f.some((y) => y.humidity != null) && w.push("humidity"), w;
  }
  function te(f, w, y) {
    const T = sr(new Date(y.datetime)), I = lr(T), X = za(I), J = X.includes(D.dayMode) ? D.dayMode : "temperature", ht = (tt) => tt === "humidity" ? Lt.humidity : Lt.modes[tt];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + Ne(y.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + Dt(Xt(f, y)) + '</span><span class="wbSub">' + Dt(qa(Lt.highLow, { high: qe(f, y.temperature), low: qe(f, y.templow) })) + '</span></div><button class="wbBack" title="' + Dt(Lt.back) + '" data-wb="close-day" data-wb-focus="back-day">' + Ci(ke.back) + "</button></div>" + (X.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + X.map((tt) => '<button aria-pressed="' + (tt === J) + '" data-wb="day-mode" data-mode="' + tt + '" data-wb-focus="day-mode-' + tt + '">' + Dt(ht(tt)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Ah(Le(f, w, T, I, J)) + "</div></div>";
  }
  function Le(f, w, y, T, I) {
    var fo;
    const X = y.getTime(), J = Date.now(), ht = ks(y, /* @__PURE__ */ new Date()), tt = (le) => (le - X) / Ta, vt = (le) => Wa(new Date(le), f), bt = (le) => new Date(le.datetime).getTime(), St = [0, 3, 6, 9, 12, 15, 18, 21].map((le) => ({ t: le * 60, label: vt(X + le * ye), minor: le % 6 !== 0 })), { rise: Gt, set: qt } = Ms(f, y), Ct = [], zt = [];
    Gt && (Ct.push({ t: tt(Gt.getTime()), label: vt(Gt.getTime()), rise: !0 }), zt.push([0, tt(Gt.getTime())])), qt && (Ct.push({ t: tt(qt.getTime()), label: vt(qt.getTime()), rise: !1 }), zt.push([tt(qt.getTime()), wl]));
    const Ht = xl(f);
    !Gt && !qt && Ht && Cd(new Date(X + Mn / 2), Ht.lat, Ht.lon) < 0 && zt.push([0, wl]);
    const Tt = ht ? tt(J) : void 0, Jt = { hours: St, sun: Ct, night: zt };
    if (!T.length && !ht) return { ...Jt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Lt.noHourly };
    if (I === "precipitation") {
      const le = T.some((ha) => ha.precipitation_probability != null), Vn = T.map((ha) => ({ t: tt(bt(ha)), v: Number((le ? ha.precipitation_probability : ha.precipitation) ?? 0) })), Ka = ir(f, W(f, "hourly"), "precipitation"), zn = Math.max(0, ...Vn.map((ha) => ha.v)), Ro = le ? 100 : $c(0, Math.max(zn, 1), [0.5, 1, 2, 5, 10]).max, Po = (ha) => le ? he(ha, f.locale) + "%" : he(ha, f.locale, { maximumFractionDigits: 1 }) + " " + Ka, Oi = Vn.find((ha) => ha.v === zn);
      return {
        ...Jt,
        kind: "bars",
        points: Vn,
        min: 0,
        max: Ro,
        ticks: [0, Ro / 2, Ro],
        format: Po,
        now: Tt !== void 0 ? { t: Tt, v: 0 } : void 0,
        peak: Oi && zn > 0 ? { t: Oi.t + 30, v: Oi.v, label: Po(Oi.v) } : void 0,
        note: zn > 0 ? void 0 : Lt.noRain
      };
    }
    const Yt = I === "humidity" ? "humidity" : "temperature", we = T.filter((le) => le[Yt] != null && (!ht || bt(le) >= J)).map((le) => ({ t: tt(bt(le)), v: Number(le[Yt]) }));
    let Rt, pe = [];
    if (Tt !== void 0) {
      const le = ta(f, w, Yt);
      le && De(le.value) && (Rt = { t: Tt, v: Number(le.value) }, we.unshift(Rt)), pe = (((fo = kt.todayHistory) == null ? void 0 : fo.day) === y.toDateString() ? kt.todayHistory[Yt] : []).filter((Ka) => Ka.time <= J).map((Ka) => ({ t: Math.max(0, tt(Ka.time)), v: Ka.value })), Rt && pe.length && pe.push(Rt);
    }
    const He = [...pe, ...we];
    if (!He.length) return { ...Jt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Lt.noHourly };
    const ga = He.map((le) => le.v), Ba = $c(Math.min(...ga), Math.max(...ga), Yt === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    Yt === "humidity" && (Ba.min = Math.max(0, Ba.min), Ba.max = Math.min(100, Ba.max), Ba.ticks = Ba.ticks.filter((le) => le >= 0 && le <= 100));
    const uo = Yt === "humidity" ? (le) => he(le, f.locale) + "%" : (le) => qe(f, le), Ra = Yt === "temperature" ? He.reduce((le, Vn) => Vn.v > le.v ? Vn : le) : void 0;
    return { ...Jt, kind: "line", points: we, past: pe, ...Ba, format: uo, now: Rt, peak: Ra ? { ...Ra, label: uo(Ra.v) } : void 0 };
  }
  function dr(f) {
    const w = ["temperature"];
    return f.some((y) => y.precipitation_probability != null || y.precipitation != null) && w.push("precipitation"), f.some((y) => y.wind_speed != null) && w.push("wind"), w;
  }
  function to(f, w, y = Nc) {
    var X, J;
    const T = N("daily"), I = [];
    for (let ht = 0; ht < y; ht++) for (const tt of [!1, !0]) {
      const vt = f.getTime() + (ht * 24 + (tt ? 12 : 0)) * ye, bt = vt + 12 * ye, St = {};
      w.forEach((qt) => {
        const Ct = new Date(qt.datetime).getTime();
        qt.condition && Ct >= vt && Ct < bt && (St[qt.condition] = (St[qt.condition] ?? 0) + (jf.has(qt.condition) ? 2 : 1));
      });
      let Gt = (X = Object.entries(St).sort((qt, Ct) => Ct[1] - qt[1])[0]) == null ? void 0 : X[0];
      if (!Gt) {
        const qt = new Date(vt).toDateString();
        Gt = ((J = T.find((Ct) => new Date(Ct.datetime).toDateString() === qt)) == null ? void 0 : J.condition) ?? "cloudy";
      }
      I.push({ cond: tt && Gt === "sunny" ? "clear-night" : Gt, night: tt });
    }
    return I;
  }
  function cr(f, w, y) {
    const T = W(f, "hourly"), I = w.precipitation_probability != null ? he(w.precipitation_probability, f.locale) + "%" : "", X = w.precipitation ? he(w.precipitation, f.locale) + " " + ir(f, T, "precipitation") : "";
    switch (y) {
      case "precipitation":
        return I ? [I, X] : [X || "–", ""];
      case "wind":
        return w.wind_speed != null ? [he(Math.round(w.wind_speed), f.locale), ir(f, T, "wind_speed")] : ["–", ""];
      default:
        return [qe(f, w.temperature), (w.precipitation_probability ?? 0) >= 20 ? I : ""];
    }
  }
  function _e(f, w, y) {
    const [T, I] = pd[E == null ? void 0 : E()] || pd.day, X = [];
    for (let J = 0; J < 4 && X.length < 3; J++) {
      const ht = /* @__PURE__ */ new Date();
      ht.setHours(0, 0, 0, 0), ht.setDate(ht.getDate() + J);
      const tt = new Date(ht);
      tt.setHours(I, 0, 0, 0), ht.setHours(T, 0, 0, 0), !(tt.getTime() <= y || !w.some((vt) => {
        const bt = new Date(vt.datetime).getTime();
        return bt >= ht.getTime() && bt <= tt.getTime();
      })) && X.push({ a: ht.getTime(), b: tt.getTime(), label: Xt(f, { datetime: ht.toISOString() }) });
    }
    return X;
  }
  function In(f, w, y, T, I, X) {
    const J = (y.b - w.a) / ye, ht = (Tt) => ((Tt - w.a) / ye).toFixed(3), tt = 80, vt = 32, bt = [];
    for (const Tt = new Date(w.a - Mn); Tt.getTime() < y.b + Mn; Tt.setDate(Tt.getDate() + 1)) {
      const { rise: Jt, set: Yt } = Ms(f, new Date(Tt));
      Jt && Yt && bt.push({ rise: Jt.getTime(), set: Yt.getTime() });
    }
    const St = (Tt, Jt) => tt - (tt - vt) * Math.sin(Math.PI * (Jt - Tt.rise) / (Tt.set - Tt.rise)), Gt = (Tt) => !bt.some((Jt) => Tt >= Jt.rise && Tt <= Jt.set);
    let qt = "", Ct = "", zt = "";
    bt.forEach((Tt, Jt) => {
      const Yt = [];
      for (let Rt = Tt.rise; Rt <= Tt.set; Rt += 15 * Ta) Yt.push(ht(Rt) + "," + St(Tt, Rt).toFixed(2));
      Yt.push(ht(Tt.set) + "," + tt), qt += '<polyline class="wbLineArc" points="' + Yt.join(" ") + '"/>';
      const we = bt[Jt + 1];
      we && (qt += '<rect class="wbLineNight" x="' + ht(Tt.set) + '" y="0" width="' + ((we.rise - Tt.set) / ye).toFixed(3) + '" height="100"/>'), [[Tt.rise, "↑"], [Tt.set, "↓"]].forEach(([Rt, pe]) => {
        Rt < w.a || Rt > y.b || (Ct += '<line class="wbLineEdge" x1="' + ht(Rt) + '" x2="' + ht(Rt) + '" y1="0" y2="100"/>', zt += '<span class="wbLineTime" style="left:' + X(Rt) + '">' + pe + " " + Dt(Wa(new Date(Rt), f)) + "</span>");
      });
    });
    const Ht = bt.find((Tt) => I >= Tt.rise && I <= Tt.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + J + ' 100" preserveAspectRatio="none" aria-hidden="true">' + qt + Ct + '<line class="wbLineHorizon" x1="0" x2="' + J + '" y1="' + tt + '" y2="' + tt + '"/></svg>' + zt + (Ht ? '<span class="wbLineNow" style="left:' + X(I) + ";top:" + St(Ht, I) + '%">' + Zd("sunny", !1) + "</span>" : "") + T.filter((Tt) => Tt.entry && !Tt.now).map((Tt) => '<span class="wbLineGlyph' + Tt.edge + '" style="left:' + X(Tt.t) + '">' + Zd(Tt.entry.condition ?? "cloudy", Gt(Tt.t)) + "</span>").join("");
  }
  function Zt(f, w) {
    delete rt.hourly;
    const y = D.hourlyView === "bars" ? "bars" : "strip", T = '<div class="wbHeader"><h2 class="wbTitle">' + Dt(y === "bars" ? Lt.nextDays : Lt.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + Dt(Lt.showAs) + '">' + ["strip", "bars"].map((Rt) => '<button aria-pressed="' + (Rt === y) + '" data-wb="hourly-view" data-view="' + Rt + '" data-wb-focus="hourly-view-' + Rt + '">' + Dt(Lt.views[Rt]) + "</button>").join("") + "</div></div>";
    if (y === "bars") return mn(f, w, T);
    const I = N("hourly"), X = Math.floor(Date.now() / Ta) * Ta, J = I.filter((Rt) => new Date(Rt.datetime).getTime() > X - ye);
    if (!J.length) return "";
    const ht = dr(J), tt = ht.includes(D.hourlyMode) ? D.hourlyMode : "temperature", vt = _e(f, I, X);
    if (!vt.length) return "";
    const bt = vt[0], St = vt[vt.length - 1], Gt = (bt.b - bt.a) / ye, qt = (Rt) => "calc(var(--wb-u) * " + ((Rt - bt.a) / ye).toFixed(3) + ")", Ct = new Date(bt.a);
    Ct.setHours(6, 0, 0, 0), Ct.getTime() > bt.a && Ct.setDate(Ct.getDate() - 1);
    const zt = Math.ceil((St.b - Ct.getTime()) / Mn);
    u !== "line" && (rt.hourly = { segs: to(Ct, I, zt), seed: Ct.getDate(), columns: zt });
    const Ht = (Rt) => Rt === bt.a ? " wbFirst" : Rt === St.b ? " wbLast" : "", Tt = [];
    for (let Rt = bt.a; Rt < St.b; ) {
      const pe = new Date(Rt);
      pe.setHours(24, 0, 0, 0);
      const He = Math.min(pe.getTime(), St.b);
      Tt.push({ a: Rt, b: He, label: Xt(f, { datetime: new Date(Rt).toISOString() }), page: vt.find((ga) => ga.a >= Rt && ga.a < He) || vt.find((ga) => ga.a < He && ga.b > Rt) }), Rt = He;
    }
    const Jt = X > bt.a && X < St.b ? Math.floor((X - bt.a) / (2 * ye)) * 2 : 0, Yt = [];
    for (let Rt = bt.a; Rt <= St.b; Rt += ye) {
      const pe = new Date(Rt), He = Ht(Rt);
      !He && pe.getHours() % Ff || !He && (Math.abs(bt.a - Rt) < 2 * ye || Math.abs(St.b - Rt) < 2 * ye) || X >= bt.a && Math.abs(Rt - X) < 1.5 * ye && !He || Yt.push({ t: Rt, edge: He, label: Wa(pe, f), entry: Rt >= X - ye ? I.find((ga) => new Date(ga.datetime).getTime() === Rt) : void 0 });
    }
    X > bt.a && X < bt.b && Yt.push({ t: X, edge: X - bt.a < ye ? " wbFirst" : bt.b - X < ye ? " wbLast" : "", label: Lt.now, entry: J[0], now: !0 });
    const we = (Rt, pe) => '<span class="wbMark' + Rt.edge + (Rt.now ? " wbNowMark" : "") + '" style="left:' + qt(Rt.t) + '">' + pe + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + T + (ht.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + ht.map((Rt) => '<button aria-pressed="' + (Rt === tt) + '" data-wb="hourly-mode" data-mode="' + Rt + '" data-wb-focus="hourly-mode-' + Rt + '">' + Dt(Lt.modes[Rt]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + Dt(Lt.nextHours) + '" data-span="' + Gt + '" data-start="' + Jt + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Gt + ");width:calc(var(--wb-u) * " + (St.b - bt.a) / ye + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((St.b - bt.a) / (2 * ye)) + 1)].map((Rt, pe) => '<i class="wbSnap" style="left:' + qt(bt.a + pe * 2 * ye) + '"></i>').join("") + '<div class="wbDays">' + Tt.map((Rt, pe) => {
      var He;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((Rt.b - Rt.a) / ye).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (pe === 0 ? Jt : ((((He = Rt.page) == null ? void 0 : He.a) ?? Rt.a) - bt.a) / ye) + '" data-wb-focus="hours-day-' + pe + '">' + Dt(Rt.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + Yt.map((Rt) => we(Rt, Dt(Rt.label))).join("") + "</div>" + (u === "line" ? '<div class="wbSky wbLineSky">' + In(f, bt, St, Yt, X, qt) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + qt(Ct.getTime()) + ";width:calc(var(--wb-u) * " + zt * 24 + ')"><canvas data-wb-strip="hourly"' + (u === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (X > bt.a ? '<i class="wbPast" style="width:' + qt(Math.min(X, St.b)) + '"></i><i class="wbNowLine" style="left:' + qt(X) + '"></i>' : "") + Tt.slice(1).map((Rt) => '<i class="wbMidnight" style="left:' + qt(Rt.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + Yt.map((Rt) => {
      if (!Rt.entry) return "";
      const [pe, He] = cr(f, Rt.entry, tt);
      return we(Rt, '<span class="wbPrimaryV">' + Dt(pe) + '</span><span class="wbSecondary">' + Dt(He) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function Ls(f) {
    const w = Of, y = w.findIndex(([tt]) => tt >= f);
    if (y <= 0) return "rgb(" + w[y < 0 ? w.length - 1 : 0][1].join(",") + ")";
    const [T, I] = w[y - 1], [X, J] = w[y], ht = (f - T) / (X - T);
    return "rgb(" + I.map((tt, vt) => Math.round(tt + (J[vt] - tt) * ht)).join(",") + ")";
  }
  function mn(f, w, y) {
    var qt;
    const T = N("daily").filter((Ct) => De(Ct.templow) && De(Ct.temperature)).slice(0, 7);
    if (!T.length) return "";
    const I = Math.min(...T.map((Ct) => Number(Ct.templow))), X = Math.max(...T.map((Ct) => Number(Ct.temperature))), J = Math.max(1, X - I), ht = (Ct) => Math.max(0, Math.min(100, (Ct - I) / J * 100)).toFixed(2), tt = /F/.test(ir(f, W(f, "daily"), "temperature")), vt = (Ct) => tt ? (Ct - 32) / 1.8 : Ct, bt = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((Ct) => Ls(vt(I + Ct * J)) + " " + Ct * 100 + "%").join(",") + ")", St = (qt = ta(f, w, "temperature")) == null ? void 0 : qt.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (dr(N("hourly").filter((Ct) => new Date(Ct.datetime).getTime() > Date.now() - ye)).length > 1 ? " wbTabbed" : "") + '">' + y + '<div class="wbDayBars" role="list">' + T.map((Ct, zt) => {
      const Ht = Xt(f, Ct), Tt = ks(new Date(Ct.datetime), /* @__PURE__ */ new Date()), Jt = Number(Ct.templow), Yt = Number(Ct.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + Dt(qa(Lt.rangeRow, { day: Ht, low: qe(f, Jt), high: qe(f, Yt) })) + '"><span class="wbRangeDay">' + Dt(Ht) + "</span>" + Ne(Ct.condition, 40, !1, "r" + zt) + '<span class="wbRangeLo">' + Dt(qe(f, Jt)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + bt + ";clip-path:inset(0 " + (100 - ht(Yt)) + "% 0 " + ht(Jt) + '% round 4px)"></i>' + (Tt && De(St) ? '<i class="wbRangeNow" style="left:' + ht(Number(St)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + Dt(qe(f, Yt)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  const Ge = [[-120, "#0d1530"], [-60, "#1c2550"], [-15, "#c9707a"], [30, "#f2a46a"], [60, "#b49bc8"], [90, "#5aa5e6"]], Ot = [[-90, "#5aa5e6"], [-60, "#a99bd0"], [-30, "#f0a54a"], [15, "#c45a5a"], [60, "#3a2a5c"], [120, "#0d1530"]], $t = (f, w) => {
    if (w <= f[0][0]) return f[0][1];
    for (let y = 1; y < f.length; y++) if (w <= f[y][0]) {
      const [T, I] = f[y - 1], [X, J] = f[y];
      return Th(I, J, (w - T) / (X - T));
    }
    return f[f.length - 1][1];
  }, Ue = (f, w, y) => {
    if (!w || !y) return Ge[5][1];
    const T = (f.getTime() - y.getTime()) / Ta;
    return T >= -90 ? $t(Ot, T) : $t(Ge, (f.getTime() - w.getTime()) / Ta);
  }, ne = (f) => (f >= 60 ? Math.floor(f / 60) + "h " : "") + f % 60 + "m";
  function At(f) {
    const w = st, { rise: y, set: T } = Ms(f, w), I = y && T ? Math.round((T.getTime() - y.getTime()) / Ta) : 0, X = Math.floor(I / 60), J = I % 60, ht = (we) => we ? Wa(we, f) : "–", tt = new Date(w);
    tt.setDate(tt.getDate() + 1);
    const vt = Ms(f, tt), bt = vt.rise && vt.set ? Math.round((vt.set.getTime() - vt.rise.getTime()) / Ta) : 0, St = new Date(w);
    St.setDate(St.getDate() - 1);
    const Gt = !!(y && T && w >= y && w <= T), qt = !!(y && w < y), Ct = Gt ? y : qt ? Ms(f, St).set : T, zt = Gt ? T : qt ? y : vt.rise, Ht = Ct && zt ? Math.min(1, Math.max(0, (w.getTime() - Ct.getTime()) / (zt.getTime() - Ct.getTime()))) : 0, Tt = zt ? Math.max(0, Math.round((zt.getTime() - w.getTime()) / Ta)) : 0, Jt = zt ? ne(Tt) : "–", Yt = Gt ? Lt.untilSunset : Lt.untilSunrise;
    return sn({
      icon: ke.sunny,
      name: Lt.sun,
      sub: I ? qa(Lt.daylightShort, { hours: X, minutes: J }) : void 0,
      cls: "wbSunTile",
      callouts: [[Lt.callout.riseTomorrow, ht(vt.rise)], [Lt.callout.setTomorrow, ht(vt.set)], ...bt ? [[Lt.callout.dayTomorrow, Math.floor(bt / 60) + "h " + bt % 60 + "m"]] : []],
      zone: '<div class="wbSunZone" style="background:' + Ue(w, y, T) + '"><svg class="wbSunTrack" data-up="' + (Gt ? 1 : 0) + '" data-f="' + Ht.toFixed(4) + '" aria-hidden="true"></svg><div class="wbSunCount"><span class="wbSunLeft">' + Dt(Jt) + '</span><span class="wbSunWord">' + Dt(Yt) + '</span></div><span class="wbSunAt wbSunRise">' + Dt(ht(y)) + '</span><span class="wbSunAt wbSunSet">' + Dt(ht(T)) + "</span></div>" + // at M, the countdown alone (Matt, 10 Nov): M's zone has room for one line
      hd(Jn(Jt, ""))
    });
  }
  const se = 22;
  function ue(f) {
    const w = Math.round(f.clientWidth), y = Math.round(f.clientHeight), T = se, I = T / 2, X = w + "x" + y + ":" + f.dataset.f + ":" + f.dataset.up;
    if (w < T * 3 || y < T * 3 || f.dataset.drawn === X) return;
    f.dataset.drawn = X;
    const J = "M" + I + " " + (y - T) + "V" + T + "A" + I + " " + I + " 0 0 1 " + T + " " + I + "H" + (w - T) + "A" + I + " " + I + " 0 0 1 " + (w - I) + " " + T + "V" + (y - T), ht = "M" + (w - I) + " " + (y - T) + "A" + I + " " + I + " 0 0 1 " + (w - T) + " " + (y - I) + "H" + T + "A" + I + " " + I + " 0 0 1 " + I + " " + (y - T), tt = 16, vt = 6, bt = "M" + tt + " 0H" + (w - tt) + "A" + tt + " " + tt + " 0 0 1 " + w + " " + tt + "V" + (y - tt) + "A" + tt + " " + tt + " 0 0 1 " + (w - tt) + " " + y + "H" + tt + "A" + tt + " " + tt + " 0 0 1 0 " + (y - tt) + "V" + tt + "A" + tt + " " + tt + " 0 0 1 " + tt + " 0ZM" + (T + vt) + " " + T + "A" + vt + " " + vt + " 0 0 0 " + T + " " + (T + vt) + "V" + (y - T - vt) + "A" + vt + " " + vt + " 0 0 0 " + (T + vt) + " " + (y - T) + "H" + (w - T - vt) + "A" + vt + " " + vt + " 0 0 0 " + (w - T) + " " + (y - T - vt) + "V" + (T + vt) + "A" + vt + " " + vt + " 0 0 0 " + (w - T - vt) + " " + T + "Z", St = f.dataset.up === "1", Gt = Number(f.dataset.f) || 0, qt = "http://www.w3.org/2000/svg";
    f.setAttribute("viewBox", "0 0 " + w + " " + y);
    const Ct = document.createElementNS(qt, "path");
    Ct.setAttribute("d", St ? J : ht), f.replaceChildren(Ct);
    const zt = Ct.getTotalLength(), Ht = Ct.getPointAtLength(zt * Gt), Tt = St ? zt : 0;
    f.innerHTML = '<defs><mask id="' + F + 'sun-day"><path d="' + J + '" fill="none" stroke="#fff" stroke-width="' + T * 2 + '"></path></mask><mask id="' + F + 'sun-done"><path d="' + J + '" fill="none" stroke="#fff" stroke-width="' + T * 2 + '" stroke-dasharray="' + (St ? (Tt * Gt).toFixed(1) + " " + (Tt + 1).toFixed(1) : "0 99999") + '"></path></mask></defs><path class="wbSunBand" fill-rule="evenodd" d="' + bt + '"></path><path class="wbSunBand wbSunDay" fill-rule="evenodd" d="' + bt + '" mask="url(#' + F + 'sun-day)"></path><path class="wbSunBand wbSunDone" fill-rule="evenodd" d="' + bt + '" mask="url(#' + F + 'sun-done)"></path><circle class="wbSunDot' + (St ? "" : " wbSunNight") + '" cx="' + Ht.x.toFixed(1) + '" cy="' + Ht.y.toFixed(1) + '" r="' + I + '"></circle>';
  }
  const me = typeof ResizeObserver == "function" ? new ResizeObserver((f) => f.forEach((w) => ue(w.target))) : null;
  function Ga() {
    me == null || me.disconnect(), S.querySelectorAll("svg.wbSunTrack").forEach((f) => {
      ue(f), me == null || me.observe(f);
    });
  }
  function pr(f, w, y) {
    const T = (J) => F + "moon-" + J, I = f > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + T("terminator") + ')" d="' + Lh(61, 61, 57.9, f) + '"' + (w ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", X = (J, ht, tt, vt, bt, St) => '<filter id="' + T(J) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + ht + '" numOctaves="' + tt + '" seed="' + vt + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Gt) => "<feFunc" + Gt + ' type="linear" slope="' + bt + '" intercept="' + St + '"></feFunc' + Gt + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + T("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + T("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + T("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + T("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + T("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + X("mottle", "0.045", 4, 3, 1.8, -0.4) + X("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + T("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + T("fill") + ')"></circle><g' + (y ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + T("soften") + ')">' + _h.map(([J, ht, tt, vt, bt, St]) => '<ellipse cx="' + J + '" cy="' + ht + '" rx="' + tt + '" ry="' + vt + '" fill-opacity="' + St + '" transform="rotate(' + bt + " " + J + " " + ht + ')"></ellipse>').join("") + "</g>" + Dh.map(([J, ht, tt]) => '<circle class="wbCrater" cx="' + J + '" cy="' + ht + '" r="' + tt + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + T("glow") + ')">' + Bh.map(([J, ht]) => '<line x1="54.4" y1="95" x2="' + J + '" y2="' + ht + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + T("glow") + ')">' + Jc.map(([J, ht, tt]) => '<circle cx="' + J + '" cy="' + ht + '" r="' + tt * 2 + '"></circle>').join("") + "</g>" + Jc.map(([J, ht, tt]) => '<circle class="wbBrightCenter" cx="' + J + '" cy="' + ht + '" r="' + tt + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + T("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + T("grain") + ')"></rect>' + I + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function Ei(f) {
    const w = Bt, y = xl(f), T = (y == null ? void 0 : y.lat) ?? 0, I = $d(w), X = Kc(f), J = X ? f.states[X] : void 0, ht = qr(J) && Xf.includes(J.state) ? J.state : bh(I.phase), { rise: tt, set: vt } = y ? vh(w, y.lat, y.lon) : {}, bt = I.phase > 0.5 != T < 0, St = he(Math.round(I.fraction * 100), f.locale) + "%", Gt = tt ?? vt;
    return Gt && Wa(Gt, f), sn({
      icon: ke.night,
      name: Lt.moon,
      sub: Lt.phases[ht],
      callouts: [...tt ? [[Lt.callout.moonrise, Wa(tt, f)]] : [], ...vt ? [[Lt.callout.moonset, Wa(vt, f)]] : [], [Lt.callout.lit, St]],
      // at M, how much of it is lit (Matt, 10 Nov)
      zone: '<div class="wbMoonBox">' + pr(I.fraction, bt, T < 0) + "</div>" + hd(Jn(he(Math.round(I.fraction * 100), f.locale), "%"))
    });
  }
  function Je(f, w) {
    var Ct;
    const y = ta(f, w, "wind_speed");
    if (!y || !De(y.value)) return "";
    const T = ta(f, w, "wind_gust_speed"), I = ta(f, w, "wind_bearing"), X = I && De(I.value) ? Number(I.value) : void 0, J = kh(Number(y.value), (Ct = y.stateObj.attributes) == null ? void 0 : Ct.wind_speed_unit), ht = xd(f, y.stateObj, "wind_speed", y.value), tt = X !== void 0 ? Lt.cardinal[$f[((X + 11.25) / 22.5 | 0) % 16]] : void 0, vt = T ? Uc(f, T.stateObj, "wind_gust_speed", T.value) : void 0, bt = [tt ? qa(Lt.windFrom, { direction: tt }) : void 0, J !== void 0 ? J + " " + Lt.beaufort : void 0].filter(Boolean).join(" · ") || vt, St = (zt, Ht) => {
      const Tt = (zt - 90) * Math.PI / 180;
      return [100 + Ht * Math.cos(Tt), 100 + Ht * Math.sin(Tt)];
    }, Gt = Array.from({ length: 36 }, (zt, Ht) => Ht * 10).map((zt) => {
      const Ht = zt % 90 === 0, [Tt, Jt] = St(zt, 97), [Yt, we] = St(zt, Ht ? 83 : 89);
      return '<line class="wbTick' + (Ht ? " wbMajor" : "") + '" x1="' + Tt + '" y1="' + Jt + '" x2="' + Yt + '" y2="' + we + '"></line>';
    }).join(""), qt = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([zt, Ht]) => {
      const [Tt, Jt] = St(Ht, 64);
      return '<text class="wbLetter' + (zt === "n" ? " wbNorth" : "") + '" x="' + Tt + '" y="' + Jt + '">' + Dt(Lt.cardinal[zt]) + "</text>";
    }).join("");
    return sn({ icon: ke.windy, name: Lt.wind, sub: bt, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Gt + qt + (X !== void 0 ? '<path class="wbMarker" transform="rotate(' + X + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + Dt(ht.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + Dt(ht.unit) + "</text></svg>" });
  }
  const Hn = (f, w) => {
    if (f < 3) return Lt.advice.fine;
    if (f < 8) return Lt.advice.sunblock;
    const y = Date.now(), T = N("hourly").find((I) => I.uv_index != null && new Date(I.datetime).getTime() > y && I.uv_index < 6);
    return T && new Date(T.datetime).toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? qa(Lt.advice.avoidUntil, { time: Wa(new Date(T.datetime), w) }) : Lt.advice.avoidToday;
  };
  function _i(f, w) {
    const y = ta(f, w, "uv_index");
    if (!y || !De(y.value)) return "";
    const T = Number(y.value), I = Lt.uvLevel[Yc(T)], X = /* @__PURE__ */ new Date();
    X.setHours(23, 59, 59, 999);
    const J = N("hourly").filter((bt) => bt.uv_index != null && new Date(bt.datetime) > /* @__PURE__ */ new Date() && new Date(bt.datetime) <= X).reduce((bt, St) => !bt || St.uv_index > bt.uv ? { uv: St.uv_index, time: new Date(St.datetime) } : bt, void 0), ht = Jf[Yc(T)], tt = 216 * Math.min(1, Math.max(0.08, 0.4 + (T - 4.5) * (0.5 / 5.5))), vt = '<svg class="wbUvArt" viewBox="0 0 216 198" preserveAspectRatio="xMinYMin slice" aria-hidden="true"><defs><radialGradient id="' + F + 'uv-sun" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="' + tt.toFixed(1) + '"><stop offset="0" style="stop-color:color-mix(in srgb, ' + ht + ' 28%, #fff6dd)"></stop><stop offset=".62" style="stop-color:color-mix(in srgb, ' + ht + ' 62%, #fff6dd)"></stop><stop offset="1" style="stop-color:' + ht + '"></stop></radialGradient></defs><circle class="wbUvSun" cx="0" cy="0" r="' + tt.toFixed(1) + '" fill="url(#' + F + 'uv-sun)"></circle></svg><div class="wbUvBig"><span class="wbUvNum">' + Dt(he(Math.round(T), f.locale)) + '</span><span class="wbUvWord">' + Dt(I) + "</span></div>" + hd(Jn(he(Math.round(T), f.locale), ""));
    return sn({
      icon: ke.sunnyAlert,
      name: Lt.metrics.uv_index,
      sub: J && J.uv > T ? qa(Lt.uvPeak, { level: I, uv_index: he(Math.round(J.uv), f.locale), time: Wa(J.time, f) }) : I,
      zone: vt,
      cls: "wbUv",
      callouts: [Hn(T, f), [Lt.callout.now, he(Math.round(T), f.locale) + " · " + I], [Lt.callout.peak, J && J.uv > T ? he(Math.round(J.uv), f.locale) + " at " + Wa(J.time, f) : Lt.callout.now]]
    });
  }
  function ur(f) {
    const w = N("daily")[0], y = kt.temperatureHistory;
    if (!w || new Date(w.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !De(w.temperature) || !y || y.dailyHighs.length < Gf) return "";
    const T = Number(w.temperature), I = y.dailyHighs.reduce((Ht, Tt) => Ht + Tt, 0) / y.dailyHighs.length, X = Math.round(T - I) || 0, J = X > 0 ? "above" : X < 0 ? "below" : "same", ht = [...y.days, { date: /* @__PURE__ */ new Date(), high: T, today: !0 }], tt = ht.map((Ht) => Ht.high).concat(I), vt = Math.min(...tt) - 1, bt = Math.max(...tt) + 1, St = (Ht) => (1 - (Ht - vt) / (bt - vt)) * 100, Gt = (Ht) => (Ht + 0.5) / ht.length * 100, qt = ht.map((Ht, Tt) => [Gt(Tt), St(Ht.high)]), Ct = qt.map(([Ht, Tt], Jt) => (Jt ? "L" : "M") + Ht.toFixed(2) + " " + Tt.toFixed(2)).join(""), zt = '<div class="wbCompareBars wbTrend" aria-hidden="true"><div class="wbTrendPlot"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><defs><linearGradient id="' + F + 'trend" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--primary)" stop-opacity=".28"></stop><stop offset="1" style="stop-color:var(--primary)" stop-opacity="0"></stop></linearGradient></defs><path class="wbTrendArea" d="' + Ct + "L" + qt[qt.length - 1][0].toFixed(2) + " 100L" + qt[0][0].toFixed(2) + ' 100Z" fill="url(#' + F + 'trend)"></path><line class="wbAvgLine" x1="0" x2="100" y1="' + St(I).toFixed(2) + '" y2="' + St(I).toFixed(2) + '" vector-effect="non-scaling-stroke"></line><path class="wbTrendLine" d="' + Ct + '" vector-effect="non-scaling-stroke"></path></svg><span class="wbTrendAvg" style="top:' + St(I).toFixed(2) + '%">' + Dt(qe(f, I)) + "</span>" + ht.map((Ht, Tt) => {
      const Jt = Ht.today ? " wbToday" : "", Yt = "left:" + Gt(Tt).toFixed(2) + "%;top:" + St(Ht.high).toFixed(2) + "%";
      return '<i class="wbTrendDot' + Jt + '" style="' + Yt + '"></i><span class="wbAvgValue' + Jt + '" style="' + Yt + '">' + Dt(qe(f, Ht.high)) + "</span>";
    }).join("") + '</div><div class="wbTrendDays">' + ht.map((Ht, Tt) => '<span class="wbAvgDay' + (Ht.today ? " wbToday" : "") + '" style="left:' + Gt(Tt).toFixed(2) + '%">' + Dt(sh(Ht.date, f)) + "</span>").join("") + "</div></div>";
    return sn({
      icon: ke.chartLine,
      name: Lt.metrics.compared_to_average,
      double: !0,
      sub: qa(Lt.highsLastDays, { days: y.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (X > 0 ? "+" : "") + Dt(qe(f, X)) + '</div><div class="wbCompareWords">' + Dt(Lt.average[J]) + '</div><div class="wbCompareTemps">' + Dt(qa(Lt.todayVsAverage, { today: qe(f, T), average: qe(f, I) })) + "</div></div>" + zt + "</div>"
    });
  }
  function Fn(f, w) {
    const y = ta(f, w, "humidity");
    if (!y || !De(y.value)) return "";
    const T = ta(f, w, "dew_point"), I = Math.max(0, Math.min(100, Number(y.value)));
    return sn({
      icon: ke.waterPercent,
      name: Lt.metrics.humidity,
      sub: T && De(T.value) ? qa(Lt.dewPoint, { dew_point: qe(f, T.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + I + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + Jn(he(Math.round(Number(y.value)), f.locale), "%") + "</div>"
    });
  }
  function Wr(f, w) {
    var Ht, Tt, Jt;
    const y = ta(f, w, "pressure");
    if (!y || !De(y.value)) return "";
    const T = Number(y.value), I = (Ht = y.stateObj.attributes) == null ? void 0 : Ht.pressure_unit, X = Zc(T, I), J = ((Tt = kt.pressureHistory) == null ? void 0 : Tt.entityId) === y.stateObj.entity_id ? Zc(kt.pressureHistory.value, I) : void 0;
    let ht;
    if (X !== void 0 && J !== void 0) {
      const Yt = X - J;
      ht = Yt >= Fc ? "rising" : Yt <= -Fc ? "falling" : "steady";
    }
    const tt = xd(f, y.stateObj, "pressure", Math.round(T)), vt = y.stateObj, bt = (Yt) => I === "inHg" ? Math.round(Yt * 100) / 100 : Math.round(Yt), St = (Yt) => Uc(f, vt, "pressure", bt(Yt)), Gt = J !== void 0 ? kt.pressureHistory.value : void 0, qt = Gt !== void 0 ? bt(T - Gt) : void 0, Ct = (Jt = vt.entity_id) != null && Jt.startsWith("weather.") ? N("hourly").find((Yt) => De(Yt.pressure) && new Date(Yt.datetime).getTime() >= Date.now() + 3 * ye - 30 * Ta) : void 0, zt = [
      ...ht ? [Lt.advice[ht]] : [],
      ...Gt !== void 0 ? [[Lt.callout.hoursAgo, St(Gt)], [Lt.callout.change, (qt > 0 ? "+" : qt < 0 ? "−" : "") + St(Math.abs(qt))]] : [],
      ...Ct ? [[Lt.callout.inHours, St(Number(Ct.pressure))]] : []
    ];
    return sn({
      icon: ke.gauge,
      name: Lt.metrics.pressure,
      sub: ht ? Lt.pressure[ht] : void 0,
      cls: "wbPressure",
      callouts: zt,
      zone: '<div class="wbTapeRow"><div class="wbTapeValue">' + Jn(tt.number) + '<span class="wbTapeUnit">' + Dt(tt.unit) + "</span></div>" + (X !== void 0 ? ai(f, X) : "") + "</div>"
    });
  }
  function ai(f, w) {
    const I = Math.floor(w) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (X, J) => I + J).map((X) => {
      const J = 100 - (X - w) * 9;
      if (J < 22 || J > 178) return "";
      const ht = X % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(J - 100) / 100) + '"><line class="wbTapeTick" x1="' + (ht ? 2 : 8) + '" x2="26" y1="' + J + '" y2="' + J + '"></line>' + (ht ? '<text class="wbTapeLabel" x="33" y="' + J + '">' + Dt(he(X, f.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + Dt(Lt.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + Dt(Lt.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function On(f) {
    var tt, vt;
    const w = Xd(f), y = w ? f.states[w] : void 0;
    if (!y || ((tt = kt.rain) == null ? void 0 : tt.entityId) !== w || !De(kt.rain.change)) return "";
    const T = ((vt = y.attributes) == null ? void 0 : vt.unit_of_measurement) ?? "", I = W(f, "hourly"), X = Date.now() + Mn, J = N("hourly").filter((bt) => bt.precipitation != null && new Date(bt.datetime).getTime() <= X), ht = J.reduce((bt, St) => bt + Number(St.precipitation), 0);
    return sn({
      icon: ke.rainy,
      name: Lt.metrics.precipitation,
      sub: I && J.length ? qa(Lt.rainExpected, { amount: he(ht, f.locale, { maximumFractionDigits: 1 }) + " " + ir(f, I, "precipitation") }) : Lt.rainLast24h,
      visual: Jn(he(kt.rain.change, f.locale, { maximumFractionDigits: 1 }), T) + (J.length > 1 ? Eh(J.map((bt) => ({ label: "", value: Number(bt.precipitation) }))) : "")
    });
  }
  function ni(f, w) {
    const y = ta(f, w, "visibility");
    if (!y || !De(y.value)) return "";
    const T = xd(f, y.stateObj, "visibility", y.value), I = yf(Number(y.value), ir(f, y.stateObj, "visibility"));
    return sn({
      icon: ke.eyeOutline,
      name: Lt.metrics.visibility,
      sub: Lt.visibilityLevel[kf(I)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + I + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + Dt(fr(f, I)) + '</div><div class="wbSeaValue">' + Jn(T.number, T.unit) + "</div></div>"
    });
  }
  function fr(f, w) {
    var X;
    const y = xf((X = f.config) == null ? void 0 : X.country, w);
    if (y) return qa(Lt.visibilityLandmarks, { from: y.from, to: y.to });
    const T = w / Zf * 60;
    if (T < 60) {
      const J = T < 5 ? Math.max(1, Math.round(T)) : 5 * Math.round(T / 5);
      if (J < 60) return qa(Lt.walkMinutes, { minutes: he(J, f.locale) });
    }
    const I = Math.max(1, Math.round(T / 30) / 2);
    return I < 8 ? qa(Lt.walkHours, { hours: he(I, f.locale) }) : Lt.walkDay;
  }
  function Di(f) {
    kt.categories === void 0 && Rn(f);
    const w = Pn(f), y = (tt) => tt.map((vt) => f.states[vt]).filter(qr), T = y(w.air), I = y(w.pollen);
    if (!T.length && !I.length) return "";
    const X = [...T, ...I], J = (tt) => I.includes(tt) ? ke.flower : ke.airFilter, ht = X.find((tt) => tt.entity_id === D.aq);
    return ht ? As(f, ht, J(ht)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + Dt(Lt.airQuality) + '</h2></div><div class="wbAqTiles">' + X.map((tt) => '<button class="wbTile" data-wb="aq-open" data-entity="' + Dt(tt.entity_id) + '"><span class="wbChip">' + Ci(J(tt)) + '</span><span class="wbText"><span class="wbName">' + Dt(nr(f, tt)) + '</span><span class="wbSub">' + Dt(Mi(f, tt)) + "</span></span></button>").join("") + "</div></div>";
  }
  function As(f, w, y) {
    var bt, St, Gt;
    const T = ((bt = w.attributes) == null ? void 0 : bt.unit_of_measurement) ?? "", I = ((St = w.attributes) == null ? void 0 : St.device_class) === "pm25" && T === qc && De(w.state), X = Number(w.state), J = I ? fd(X) : void 0, ht = ((Gt = kt.aqHistory) == null ? void 0 : Gt.entityId) === w.entity_id ? kt.aqHistory.points : void 0, tt = (qt) => Math.min(100, Math.max(0, qt / ud * 100));
    let vt;
    if (ht && ht.length > 1) vt = Xc(ht, (qt) => (he(qt, f.locale, { maximumFractionDigits: 1 }) + " " + T).trim());
    else if (J) {
      let qt = 0;
      const Ct = Gp.map(([zt, Ht]) => {
        const Tt = tt(Math.min(Ht, ud)), Jt = Oc[zt] + " " + qt + "% " + Tt + "%";
        return qt = Tt, Jt;
      });
      vt = '<div class="wbScale" role="meter" aria-label="' + Dt(Lt.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + ud + '" aria-valuenow="' + X + '" style="background:linear-gradient(to right, ' + Ct.join(", ") + ')"><i style="left:' + tt(X) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + ud + " " + qc + "</span></div>";
    } else vt = '<span class="wbGraphNote"><span>' + Dt(Mi(f, w)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + Ci(y) + '</span><span class="wbText"><span class="wbName">' + Dt(nr(f, w)) + '</span><span class="wbSub">' + Dt(Mi(f, w)) + (J ? " · " + Dt(Lt.aqLevel[J]) : "") + '</span></span><button class="wbBack" title="' + Dt(Lt.back) + '" data-wb="aq-close">' + Ci(ke.back) + '</button></div><div class="wbGraph">' + vt + "</div></div></div>";
  }
  const Me = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, Ua = (f) => f <= 50 ? "Good" : f <= 100 ? "Moderate" : f <= 150 ? "Unhealthy for some" : f <= 200 ? "Unhealthy" : f <= 300 ? "Very unhealthy" : "Hazardous";
  function eo(f) {
    const w = /* @__PURE__ */ new Map();
    return Object.values(f.states || {}).filter((y) => {
      var T;
      return y.entity_id.startsWith("sensor.") && Md.includes(((T = y.attributes) == null ? void 0 : T.device_class) ?? "") && qr(y) && Cs(f, y.entity_id);
    }).sort((y, T) => y.entity_id.localeCompare(T.entity_id)).forEach((y) => {
      w.has(y.attributes.device_class) || w.set(y.attributes.device_class, y);
    }), Md.map((y) => w.get(y)).filter(Boolean);
  }
  const Lo = (f) => Object.values(f.states || {}).filter((w) => {
    var y, T;
    return w.entity_id.startsWith("sensor.") && qr(w) && Cs(f, w.entity_id) && (((T = (y = f.entities) == null ? void 0 : y[w.entity_id]) == null ? void 0 : T.translation_key) ?? w.entity_id).toLowerCase().includes("pollen");
  }), ia = ["none", "very_low", "low", "moderate", "high", "very_high"], Ye = (f) => De(f.state) ? Number(f.state) : ia.indexOf(String(f.state).toLowerCase().replace(/ /g, "_")), We = (f) => {
    const w = String(f).replace(/_/g, " ");
    return w[0].toUpperCase() + w.slice(1);
  }, jr = (f, w, y) => {
    const T = y ? f === "aqi" ? w <= 50 ? "good" : w <= 100 ? "moderate" : "poor" : f === "pm25" ? fd(w) : null : null;
    return T === "good" || T === "fair" ? Lt.advice.window : T === "moderate" || T === null ? Lt.advice.fine : Lt.advice.closed;
  }, gn = ["good", "fair", "moderate", "poor", "very_poor", "extremely_poor"], Ao = (f) => gn[f <= 50 ? 0 : f <= 100 ? 1 : f <= 150 ? 2 : f <= 200 ? 3 : f <= 300 ? 4 : 5], ao = "M43 43q1 8 0 10M77 42q1 8 -1 10", be = {
    good: [ao, "M34 69Q61 98 86 67"],
    fair: [ao, "M40 74Q61 89 81 72"],
    moderate: [ao, "M41 79Q60 76 80 81"],
    poor: [ao, "M41 85Q60 73 80 86"],
    very_poor: ["M36 38l13 5M84 37l-13 5M43 48q1 7 0 9M77 47q1 7 -1 9", "M37 90Q60 64 84 89"],
    extremely_poor: ["M37 41l12 11M49 41l-12 11M71 40l12 11M83 40l-12 11", "M36 84q6 -8 12 0t12 0t12 0t12 0"]
  }, Eo = (f) => '<svg class="wbAqFace" viewBox="0 0 120 120" aria-hidden="true"><path d="M60 9C89 8 112 32 110 61C109 90 87 112 58 111C30 110 9 88 10 59C11 31 33 10 63 12"></path><path class="wbAqEyes" d="' + be[f][0] + '"></path><path d="' + be[f][1] + '"></path></svg>';
  function qn(f) {
    const w = eo(f), y = w[0];
    if (!y) return sn({ icon: ke.airFilter, name: Lt.airQuality, sub: Lt.noAir, visual: Jn("–", ""), cls: "wbBase" });
    const T = y.attributes.device_class, I = Number(y.state), X = De(y.state), J = T === "aqi" && X ? Ua(I) : T === "pm25" && X ? Me[fd(I)] : Mi(f, y), ht = X ? he(Math.round(I), f.locale) : String(y.state), tt = T === "aqi" ? "AQI" : y.attributes.unit_of_measurement || "", vt = X && T === "aqi" ? Ao(I) : X && T === "pm25" ? fd(I) : null;
    return sn(vt ? {
      icon: ke.airFilter,
      name: Lt.airQuality,
      sub: J,
      cls: "wbAqSmile",
      zone: '<div class="wbAqFill" style="background:' + Oc[vt] + '">' + Eo(vt) + '<div class="wbAqBig"><span class="wbAqNum">' + Dt(ht) + "</span>" + (tt ? '<span class="wbAqUnit">' + Dt(tt) + "</span>" : "") + "</div></div>" + hd(Jn(ht, tt)),
      callouts: [jr(T, I, X), ...w.slice(1, 3).map((bt) => [nr(f, bt), Mi(f, bt)])]
    } : {
      icon: ke.airFilter,
      name: Lt.airQuality,
      sub: J,
      cls: "wbBase",
      zone: Jn(ht, tt),
      callouts: [jr(T, I, X), ...w.slice(1, 3).map((bt) => [nr(f, bt), Mi(f, bt)])]
    });
  }
  const Bi = [
    ["wbSeed", '<svg viewBox="0 0 22 30" aria-hidden="true"><path d="M11 28V11" fill="none" stroke="currentColor" stroke-width="1"></path><path d="M11 11L3 6M11 11L5 2.5M11 11L8.5 1M11 11L13.5 1M11 11L17 2.5M11 11L19 6" fill="none" stroke="currentColor" stroke-width=".8" stroke-linecap="round"></path><circle cx="11" cy="28.5" r="1.4" fill="currentColor"></circle></svg>'],
    ["wbGrain", '<svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="3.3" fill="currentColor"></circle><path d="M6 1.2v1.4M6 9.4v1.4M1.2 6h1.4M9.4 6h1.4M2.6 2.6l1 1M8.4 8.4l1 1M2.6 9.4l1-1M8.4 3.6l1-1" stroke="currentColor" stroke-width=".9" stroke-linecap="round"></path></svg>'],
    ["wbStem", '<svg viewBox="0 0 10 30" aria-hidden="true"><path d="M5 29Q3.6 18 5 8" fill="none" stroke="currentColor" stroke-width="1"></path><ellipse cx="5" cy="6" rx="2.3" ry="4.6" fill="currentColor"></ellipse></svg>']
  ], oi = (f) => {
    const w = [1, 3, 5, 7, 10, 13][Math.max(0, Math.min(5, Number.isFinite(f) ? Math.round(f) : 0))];
    return '<div class="wbPollenAir" aria-hidden="true">' + Array.from({ length: w }, (y, T) => {
      const [I, X] = Bi[T % 3], J = 10 + T * 7 % 9, ht = 2.6 + T * 5 % 4 * 0.4;
      return '<span class="wbFloat ' + I + '" style="top:' + (4 + T * 37 % 52) + "%;--x:" + (T * 29 % 90 + 4) + "%;--s:" + (0.8 + T * 13 % 5 / 10).toFixed(1) + ";animation-duration:" + J + "s;animation-delay:-" + (T * 2.3 % J).toFixed(1) + 's"><span class="wbPush"><span class="wbBob" style="animation-duration:' + ht.toFixed(1) + "s;animation-delay:-" + (T * 0.7 % ht).toFixed(1) + 's">' + X + "</span></span></span>";
    }).join("") + "</div>";
  };
  function ii(f) {
    const w = Lo(f).sort((I, X) => Ye(X) - Ye(I));
    if (!w.length) return sn({ icon: ke.flower, name: Lt.pollen, sub: Lt.noPollen, visual: Jn("–", ""), cls: "wbBase" });
    const y = w[0], T = (I) => De(I.state) ? Mi(f, I) : We(I.state);
    return sn({
      icon: ke.flower,
      name: Lt.pollen,
      sub: nr(f, y) + " · " + T(y),
      cls: "wbBase wbPollen",
      zone: oi(Ye(y)) + Jn(T(y), ""),
      callouts: w.slice(0, 3).map((I) => [nr(f, I), T(I)])
    });
  }
  function Vr(f) {
    const w = Date.now(), y = N("hourly").filter((X) => {
      const J = new Date(X.datetime).getTime();
      return J > w - ye && J < w + 12 * ye;
    }), T = y.find((X) => (X.precipitation_probability ?? 0) >= 50 || (X.precipitation ?? 0) >= 0.2), I = T ? qa(Lt.rainFrom, { time: Wa(new Date(Math.max(w, new Date(T.datetime).getTime())), f) }) : y.length ? Lt.noRain12 : void 0;
    return sn({ icon: ke.radar, name: Lt.rainRadar, sub: I, cls: "wbBase", visual: '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i></div>' });
  }
  const zr = {
    current: Nn,
    hourly: Zt,
    sun: At,
    moon: Ei,
    wind: Je,
    uv_index: _i,
    compared_to_average: ur,
    humidity: Fn,
    pressure: Wr,
    precipitation: On,
    visibility: ni,
    air_quality: Di,
    aq_tile: qn,
    pollen_tile: ii,
    radar_tile: Vr
  }, no = [["day", "Last 24 hours", 1], ["week", "Last 7 days", 7], ["month", "Last 30 days", 30]], oo = (f, w) => {
    var y;
    return w.toLocaleDateString((y = f.locale) == null ? void 0 : y.language, { day: "numeric", month: "short" });
  }, Ri = (f) => {
    const w = new Date(f);
    return w.setMinutes(w.getMinutes() - w.getTimezoneOffset()), w.toISOString().slice(0, 10);
  }, _o = () => {
    const f = D.range, w = Date.now();
    if (f.preset !== "custom") {
      const I = no.find(([X]) => X === f.preset)[2];
      return [w - I * Mn, w];
    }
    const y = sr(/* @__PURE__ */ new Date(f.from + "T00:00")).getTime(), T = Math.min(w, sr(/* @__PURE__ */ new Date(f.to + "T00:00")).getTime() + Mn);
    return [Math.min(y, T - ye), T];
  }, je = (f) => {
    const w = D.range;
    if (w.preset !== "custom") return no.find(([I]) => I === w.preset)[1];
    const [y, T] = _o();
    return w.from === w.to ? oo(f, new Date(y)) : oo(f, new Date(y)) + " – " + oo(f, new Date(T - 1));
  }, vn = () => D.range.preset === "custom" ? D.range.from + "_" + D.range.to : D.range.preset, re = (f, w) => w - f <= 2 * Mn, ri = (f, w, y, T) => re(y, T) ? Wa(w, f) : oo(f, w), io = (f, w = 60) => {
    const y = Math.max(1, Math.ceil(f.length / w));
    return f.filter((T, I) => I % y === 0 || I === f.length - 1);
  }, si = (f, w, y, T, I = !1) => f.callWS({
    type: "history/history_during_period",
    start_time: new Date(y).toISOString(),
    end_time: new Date(T).toISOString(),
    entity_ids: [w],
    minimal_response: I,
    no_attributes: I,
    significant_changes_only: !1
  }), bn = (f) => async (w, y, T, I) => {
    const X = ta(w, y, f);
    if (!X) return [];
    const J = X.stateObj.entity_id, ht = await si(w, J, T, I);
    return io(((ht == null ? void 0 : ht[J]) ?? []).map((tt) => {
      var St;
      const vt = ((St = tt.a) == null ? void 0 : St[f]) ?? (De(tt.s) ? Number(tt.s) : void 0), bt = (tt.lu ?? tt.lc) * 1e3;
      return typeof vt == "number" && bt >= T && bt <= I ? { t: new Date(bt), value: vt } : null;
    }).filter(Boolean)).map((tt) => ({ label: ri(w, tt.t, T, I), value: tt.value }));
  }, Sn = (f, w) => async (y, T, I, X) => {
    const J = f(y);
    if (!J) return [];
    const ht = J.entity_id, tt = await si(y, ht, I, X, !0);
    return io(((tt == null ? void 0 : tt[ht]) ?? []).map((vt) => {
      const bt = w(vt.s), St = vt.lu * 1e3;
      return bt == null || !Number.isFinite(bt) || St < I || St > X ? null : { t: new Date(St), value: bt };
    }).filter(Boolean)).map((vt) => ({ label: ri(y, vt.t, I, X), value: vt.value }));
  }, Pi = (f, w) => async (y, T, I, X) => {
    const J = xl(y);
    if (!J) return [];
    const ht = [];
    if (re(I, X)) for (let tt = I; tt <= X; tt += ye / 2) ht.push({ label: Wa(new Date(tt), y), value: f(new Date(tt), J) });
    else for (let tt = X; tt >= I; tt -= Mn) {
      const vt = new Date(tt), bt = w(vt, J, y);
      bt != null && ht.unshift({ label: oo(y, vt), value: bt });
    }
    return io(ht);
  }, ro = (f) => Lo(f).sort((w, y) => Ye(y) - Ye(w))[0], Aa = (f, w, y) => {
    const T = ta(f, w, y);
    return T ? ir(f, T.stateObj, y) : "";
  }, Ae = {
    current: { name: () => Lt.modes.temperature, icon: () => ke.sunny, load: bn("temperature"), fmt: (f, w, y) => qe(f, y), now: (f, w) => {
      var y;
      return qe(f, (y = ta(f, w, "temperature")) == null ? void 0 : y.value);
    } },
    sun: {
      name: () => Lt.sun,
      icon: () => ke.sunny,
      load: Pi((f, w) => Math.round(Cd(f, w.lat, w.lon) / un), (f, w, y) => {
        const T = Ms(y, f);
        return T.rise && T.set ? Math.round((T.set - T.rise) / ye * 10) / 10 : null;
      }),
      fmt: (f, w, y, T) => T ? he(y, f.locale) + "°" : he(y, f.locale) + " h",
      sub: (f) => f ? "How high the sun was" : "Hours of daylight a day"
    },
    moon: {
      name: () => Lt.moon,
      icon: () => ke.night,
      load: Pi((f) => Math.round($d(f).fraction * 100), (f) => Math.round($d(f).fraction * 100)),
      fmt: (f, w, y) => he(y, f.locale) + "%",
      sub: () => "How much of it was lit"
    },
    uv_index: { name: () => Lt.metrics.uv_index, icon: () => ke.sunnyAlert, load: bn("uv_index"), fmt: (f, w, y) => he(Math.round(y * 10) / 10, f.locale), now: (f, w) => {
      const y = ta(f, w, "uv_index");
      return y ? he(Number(y.value), f.locale) : "";
    } },
    humidity: { name: () => Lt.metrics.humidity, icon: () => ke.waterPercent, load: bn("humidity"), fmt: (f, w, y) => he(Math.round(y), f.locale) + "%", now: (f, w) => {
      const y = ta(f, w, "humidity");
      return y ? he(Math.round(Number(y.value)), f.locale) + "%" : "";
    } },
    pressure: { name: () => Lt.metrics.pressure, icon: () => ke.gauge, load: bn("pressure"), fmt: (f, w, y) => he(Math.round(y), f.locale) + " " + Aa(f, w, "pressure"), now: (f, w) => {
      const y = ta(f, w, "pressure");
      return y ? he(Math.round(Number(y.value)), f.locale) + " " + Aa(f, w, "pressure") : "";
    } },
    wind: { name: () => Lt.wind, icon: () => ke.windy, load: bn("wind_speed"), fmt: (f, w, y) => he(Math.round(y), f.locale) + " " + Aa(f, w, "wind_speed"), now: (f, w) => {
      const y = ta(f, w, "wind_speed");
      return y ? he(Math.round(Number(y.value)), f.locale) + " " + Aa(f, w, "wind_speed") : "";
    } },
    visibility: { name: () => Lt.metrics.visibility, icon: () => ke.eyeOutline, load: bn("visibility"), fmt: (f, w, y) => he(Math.round(y * 10) / 10, f.locale) + " " + Aa(f, w, "visibility"), now: (f, w) => {
      const y = ta(f, w, "visibility");
      return y ? he(Number(y.value), f.locale) + " " + Aa(f, w, "visibility") : "";
    } },
    aq_tile: {
      name: (f) => eo(f)[0] ? nr(f, eo(f)[0]) : Lt.airQuality,
      icon: () => ke.airFilter,
      load: Sn((f) => eo(f)[0], (f) => De(f) ? Number(f) : null),
      fmt: (f, w, y) => {
        var X, J;
        const T = eo(f)[0], I = (X = T == null ? void 0 : T.attributes) == null ? void 0 : X.device_class;
        return he(Math.round(y * 10) / 10, f.locale) + (I === "aqi" ? " AQI" : (J = T == null ? void 0 : T.attributes) != null && J.unit_of_measurement ? " " + T.attributes.unit_of_measurement : "");
      },
      now: (f) => {
        const w = eo(f)[0];
        return w ? Mi(f, w) : "";
      }
    },
    pollen_tile: {
      name: (f) => ro(f) ? nr(f, ro(f)) : Lt.pollen,
      icon: () => ke.flower,
      load: Sn(ro, (f) => {
        const w = Ye({ state: f });
        return w < 0 ? null : w;
      }),
      fmt: (f, w, y) => We(ia[Math.round(y)] || ""),
      now: (f) => {
        const w = ro(f);
        return w ? We(w.state) : "";
      }
    }
  }, wn = {};
  let ra = null;
  async function so(f) {
    var J;
    const w = l == null ? void 0 : l();
    if (!w || !Ae[f]) return;
    const y = f + "|" + vn(), [T, I] = _o();
    if (wn[y] && Date.now() - wn[y].at < 5 * Ta) return;
    wn[y] = { at: Date.now(), points: null };
    try {
      wn[y].points = await Ae[f].load(w, hn(w), T, I);
    } catch {
      wn[y].points = [];
    }
    Ke(!0), ra === f && D.graph === f && (ra = null, Pc(et[f].el.querySelector(".wbGraphCard")));
    const X = D.graph === f && ((J = et[f]) == null ? void 0 : J.el.querySelector(".wbGraph .wbChart"));
    X && jp(X, X.querySelector(".wbLine"), X.querySelectorAll(".wbArea"));
  }
  function Gr(f, w) {
    const y = D.range, T = Ri(Date.now()), [I, X] = _o(), J = y.pickFrom || Ri(I), ht = y.pickTo || Ri(X - 1);
    return '<div class="wbRangePick' + (w ? " wbPickRight" : "") + '" role="dialog" aria-label="Choose date range"><div class="wbRangePresets">' + no.map(([tt, vt]) => '<button class="wbRangePreset" aria-pressed="' + (y.preset === tt) + '" data-wb="graph-preset" data-range="' + tt + '" data-wb-focus="graph-preset-' + tt + '">' + Dt(vt) + "</button>").join("") + '</div><div class="wbRangeDates"><label><span>From</span><input type="date" data-range-from value="' + J + '" max="' + T + '"></label><label><span>To</span><input type="date" data-range-to value="' + ht + '" max="' + T + '"></label></div><button class="wbRangeApply" data-wb="graph-apply" data-wb-focus="graph-apply">Show these dates</button></div>';
  }
  function Wn(f, w, y) {
    var Gt;
    const T = Ae[y], [I, X] = _o(), J = re(I, X), ht = (Gt = wn[y + "|" + vn()]) == null ? void 0 : Gt.points, tt = et[y].el, vt = Math.max(120, tt.clientWidth - 2 * 18 - 32), bt = Math.max(40, tt.clientHeight - 2 * 18 - 44 - 14 - 32 - 14 - 24), St = ht ? ht.length > 1 ? Xc(ht, (qt) => T.fmt(f, w, qt, J), bt, vt) : '<span class="wbGraphNote"><span>No history for these dates</span></span>' : '<span class="wbGraphNote"><span>Loading…</span></span>';
    return '<div class="wbCard wbSquare wbGraphCard"><div class="wbHead"><div class="wbChip wbPlain">' + Up(T.icon(f)) + '</div><div class="wbText"><span class="wbName">' + Dt(T.name(f)) + '</span><span class="wbSub">' + Dt(T.sub ? T.sub(J) : T.now ? T.now(f, w) : "") + '</span></div><button class="wbBack" title="' + Dt(Lt.back) + '" data-wb="graph-close" data-wb-focus="graph-close">' + Ci(ke.back) + '</button></div><button class="wbRangeBtn" aria-haspopup="dialog" aria-expanded="' + !!D.picking + '" title="Choose date range" data-wb="graph-pick" data-wb-focus="graph-pick">' + Ci(ke.calendar) + "<span>" + Dt(je(f)) + "</span>" + Ci(ke.chevronDown) + '</button><div class="wbGraph">' + St + "</div></div>" + (D.picking ? Gr(f, tt.getBoundingClientRect().left > innerWidth / 2) : "");
  }
  function Ke(f) {
    var St, Gt, qt;
    const w = l == null ? void 0 : l();
    if (!w || Q) return;
    const y = hn(w);
    ut(w, y), kt.lastFetch || Ut();
    const T = Pn(w), I = Kc(w), X = Xd(w), J = [
      ...y.map((Ct) => w.states[Ct]),
      w.states["sun.sun"],
      I && w.states[I],
      X && w.states[X],
      ...T.air.map((Ct) => w.states[Ct]),
      ...T.pollen.map((Ct) => w.states[Ct]),
      ...z.some((Ct) => O.includes(Ct)) ? [...eo(w), ...Lo(w)] : [],
      w.locale,
      w.config,
      w.entities,
      Math.floor(Date.now() / Ta)
    ];
    if (!f && K && J.length === K.length && J.every((Ct, zt) => Ct === K[zt])) return;
    K = J;
    const ht = S.getRootNode(), tt = ht.activeElement || document.activeElement;
    for (const Ct of z) {
      const zt = et[Ct];
      let Ht = "";
      try {
        Ht = (D.graph === Ct ? Wn(w, y, Ct) : zr[Ct](w, y)) || "";
      } catch {
        Ht = "";
      }
      if (Ht === zt.html) continue;
      const Tt = tt && zt.el.contains(tt) ? (St = tt.dataset) == null ? void 0 : St.wbFocus : void 0, Jt = zt.el.querySelector(".wbStripScroll"), Yt = Jt ? Jt.scrollLeft : null;
      zt.html = Ht, zt.el.hidden = !Ht, zt.el.innerHTML = Ht;
      const we = zt.el.querySelector(".wbStripScroll");
      we && Yt != null ? we.scrollTo({ left: Yt }) : we != null && we.dataset.start && we.scrollTo({ left: Number(we.dataset.start) * we.clientWidth / Number(we.dataset.span) }), Tt && !it && ((Gt = zt.el.querySelector('[data-wb-focus="' + Tt + '"]')) == null || Gt.focus());
    }
    Ga(), it && ((qt = S.querySelector('[data-wb-focus="' + it + '"]')) == null || qt.focus({ preventScroll: !0 }), it = null);
    let vt = !1, bt = !1;
    for (const Ct of z) {
      const zt = et[Ct], Ht = !zt.el.hidden, Tt = Z[Ct] === "wide" || pt.includes(Ct), Jt = z.indexOf(Ct) >= z.indexOf("moon"), Yt = Ht && (Jt && Tt && !vt || !Tt && !bt);
      Yt && Tt && (vt = !0), Yt && !Tt && (bt = !0), zt.el.toggleAttribute("data-break", Yt);
    }
    Ni(performance.now());
  }
  function lo() {
    wt || Q || (wt = !0, queueMicrotask(() => {
      wt = !1, Ke(!0);
    }));
  }
  function hr() {
    const f = getComputedStyle(S), w = (J) => f.getPropertyValue(J).trim(), y = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([J, ht]) => {
      w(ht) && (y[J] = w(ht));
    });
    const T = w("--color-text-primary") || "#f1f1f1", I = w("--color-bg-card") || "#222222", X = !!S.closest(".light");
    return { colors: { ...fn, ...y }, ink: X ? T : I, paper: X ? I : T };
  }
  const Ea = (f, w) => {
    var y;
    f.width !== w.w && (f.width = w.w), f.height !== w.h && (f.height = w.h), (y = f.getContext("2d")) == null || y.putImageData(new ImageData(w.data, w.w, w.h), 0, 0);
  }, co = () => b && !oh();
  function li(f, w) {
    S.querySelectorAll("canvas[data-wb-strip]").forEach((y) => Es(y, rt[y.dataset.wbStrip], f, w));
  }
  function Es(f, w, y, T) {
    if (!w || !f.getClientRects().length) return;
    const I = f.clientWidth, X = f.clientHeight;
    if (!I || !X) return;
    const J = { width: I, height: X, columns: w.columns || Nc, colors: T.colors, clock: y, ambient: co(), seed: w.seed, soft: 1.5 };
    if (u === "smooth") {
      const ht = Math.min(2, window.devicePixelRatio || 1), tt = Math.round(I * ht), vt = Math.round(X * ht);
      f.width !== tt && (f.width = tt), f.height !== vt && (f.height = vt);
      const bt = f.getContext("2d");
      if (!bt) return;
      bt.setTransform(ht, 0, 0, ht, 0, 0), ef(bt, w.segs, J);
    } else Ea(f, tf(w.segs, { ...J, px: 2, oneBit: u === "onebit", ink: T.ink, paper: T.paper }));
  }
  function Ni(f) {
    if (Q) return;
    const w = hr();
    if (u !== "smooth") {
      const y = co();
      S.querySelectorAll("canvas[data-wb-wx]").forEach((T) => {
        T.getClientRects().length && Ea(T, Cp(cc(T.dataset.wbWx, w.colors), { size: Number(T.dataset.size) || 40, px: 2, oneBit: u === "onebit", colors: w.colors, ink: w.ink, paper: w.paper, clock: f, idle: y }));
      });
    }
    S.querySelectorAll("canvas[data-wb-sea]").forEach((y) => {
      const T = y.clientWidth, I = y.clientHeight, X = Number(y.dataset.wbSea), J = T + "x" + I + ":" + X + ":" + w.colors.skyClearDay;
      !T || !I || !(X > 0) || y.dataset.painted === J || (y.dataset.painted = J, Ea(y, vf(T, I, X, w.colors)));
    }), li(f, w);
  }
  function mr(f) {
    if (mt = 0, !(Q || !co())) {
      if (!document.hidden)
        if (u === "smooth") li(f, hr());
        else {
          const w = Math.floor(f / 100);
          w !== dt && (dt = w, Ni(f));
        }
      mt = requestAnimationFrame(mr);
    }
  }
  function Do() {
    S.classList.toggle("wbMotion", co()), !mt && !Q && co() && (mt = requestAnimationFrame(mr));
  }
  function Ii(f) {
    var y, T, I, X, J, ht, tt;
    const w = (T = (y = f.target).closest) == null ? void 0 : T.call(y, "[data-wb]");
    if (!w || !S.contains(w)) {
      const vt = (X = (I = f.target).closest) == null ? void 0 : X.call(I, ".wbItem"), bt = vt == null ? void 0 : vt.dataset.card;
      if (!vt || !S.contains(vt) || !Ae[bt] || D.graph === bt || S.closest(".tfEditing") || vt.offsetHeight < 200 || bt === "current" && k) return;
      D.graph = bt, it = "graph-close", Ke(!0), (J = wn[bt + "|" + vn()]) != null && J.points ? Pc(et[bt].el.querySelector(".wbGraphCard")) : ra = bt, so(bt);
      return;
    }
    switch (w.dataset.wb) {
      case "day": {
        D.openDay = Number(w.dataset.index), D.opener = w.dataset.wbFocus, it = "back-day";
        const vt = Vt()[D.openDay], bt = !kt.todayHistory || kt.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - kt.todayHistory.fetched > Hf;
        vt && ks(new Date(vt.datetime), /* @__PURE__ */ new Date()) && bt && pa();
        break;
      }
      case "close-day":
        D.openDay = void 0, it = D.opener, D.opener = void 0;
        break;
      case "open-page":
        k == null || k();
        return;
      case "day-mode":
        D.dayMode = w.dataset.mode;
        break;
      case "hourly-mode":
        D.hourlyMode = w.dataset.mode;
        break;
      case "hourly-view":
        D.hourlyView = w.dataset.view;
        try {
          localStorage.setItem(nt, D.hourlyView);
        } catch {
        }
        break;
      case "hours-day": {
        const vt = S.querySelector(".wbStripScroll");
        vt && vt.scrollTo({ left: Number(w.dataset.hours) * vt.clientWidth / Number(vt.dataset.span), behavior: "smooth" });
        return;
      }
      case "aq-open":
        D.aq = w.dataset.entity, jt(D.aq);
        break;
      case "aq-close":
        D.aq = void 0;
        break;
      case "graph-close":
        D.graph = void 0, D.picking = !1;
        break;
      case "graph-pick":
        D.picking = !D.picking, it = D.picking ? "graph-preset-" + (D.range.preset === "custom" ? "day" : D.range.preset) : "graph-pick";
        break;
      case "graph-preset":
        D.range = { preset: w.dataset.range }, D.picking = !1, it = "graph-pick", Ke(!0), so(D.graph);
        return;
      case "graph-apply": {
        let vt = D.range.pickFrom || ((ht = S.querySelector("[data-range-from]")) == null ? void 0 : ht.value), bt = D.range.pickTo || ((tt = S.querySelector("[data-range-to]")) == null ? void 0 : tt.value);
        if (!vt || !bt) return;
        vt > bt && ([vt, bt] = [bt, vt]), D.range = { preset: "custom", from: vt, to: bt }, D.picking = !1, it = "graph-pick", Ke(!0), so(D.graph);
        return;
      }
      default:
        return;
    }
    Ke(!0);
  }
  function gr(f) {
    var w, y, T, I, X, J;
    f.key === "Escape" && D.openDay !== void 0 && ((y = (w = f.target).closest) != null && y.call(w, '[data-wb-open="day"]')) ? (D.openDay = void 0, it = D.opener, D.opener = void 0, Ke(!0)) : f.key === "Escape" && D.picking && ((I = (T = f.target).closest) != null && I.call(T, ".wbGraphCard")) ? (D.picking = !1, it = "graph-pick", Ke(!0)) : f.key === "Escape" && D.graph && ((J = (X = f.target).closest) != null && J.call(X, ".wbGraphCard")) && (D.graph = void 0, Ke(!0));
  }
  let ua = null;
  function xn(f) {
    var y, T;
    const w = (T = (y = f.target).closest) == null ? void 0 : T.call(y, ".wbStripScroll");
    !w || f.button !== 0 || (ua = { startX: f.pageX, left: w.scrollLeft, moved: !1 }, w.classList.add("wbHeld"), window.addEventListener("mousemove", Hi), window.addEventListener("mouseup", Cn, { once: !0 }));
  }
  function Hi(f) {
    const w = S.querySelector(".wbStripScroll");
    if (!ua || !w) return;
    const y = f.pageX - ua.startX;
    !ua.moved && Math.abs(y) > 1 && (ua.moved = !0, w.classList.add("wbDragging")), w.scrollLeft = ua.left - y;
  }
  function Cn() {
    ua = null, window.removeEventListener("mousemove", Hi);
    const f = S.querySelector(".wbStripScroll");
    if (!f) return;
    f.classList.remove("wbDragging", "wbHeld");
    const w = [...f.querySelectorAll(".wbSnap")];
    if (w.length) {
      const y = w.reduce((T, I) => Math.abs(I.offsetLeft - f.scrollLeft) < Math.abs(T.offsetLeft - f.scrollLeft) ? I : T);
      f.scrollTo({ left: y.offsetLeft, behavior: "smooth" });
    }
  }
  const vr = (f) => {
    var y, T;
    const w = f.target;
    (y = w.matches) != null && y.call(w, "[data-range-from]") ? D.range.pickFrom = w.value : (T = w.matches) != null && T.call(w, "[data-range-to]") && (D.range.pickTo = w.value);
  };
  S.addEventListener("change", vr), S.addEventListener("click", Ii), S.addEventListener("keydown", gr), S.addEventListener("mousedown", xn);
  const _a = 64, Bo = 30;
  let Da = null, ce = 0;
  const Fi = () => {
    ce = 0, S.querySelectorAll(".wbPollen .wbPush").forEach((f) => {
      let w = 0, y = 0;
      if (Da) {
        const T = f.parentElement.getBoundingClientRect(), I = T.left + T.width / 2 - Da.x, X = T.top + T.height / 2 - Da.y, J = Math.hypot(I, X) || 1;
        if (J < _a) {
          const ht = (1 - J / _a) * Bo;
          w = I / J * ht, y = X / J * ht;
        }
      }
      f.style.transform = w || y ? "translate(" + w.toFixed(1) + "px," + y.toFixed(1) + "px)" : "";
    }), Da && (ce = requestAnimationFrame(Fi));
  }, br = (f) => {
    var y, T;
    if (!((T = (y = f.target).closest) == null ? void 0 : T.call(y, ".wbPollen")) || fa != null && fa.matches) {
      Da && (Da = null, ce || (ce = requestAnimationFrame(Fi)));
      return;
    }
    Da = { x: f.clientX, y: f.clientY }, ce || (ce = requestAnimationFrame(Fi));
  }, wr = () => {
    Da = null, ce || (ce = requestAnimationFrame(Fi));
  };
  S.addEventListener("pointermove", br), S.addEventListener("pointerleave", wr);
  const Ya = typeof ResizeObserver == "function" ? new ResizeObserver(() => Ni(performance.now())) : null;
  Ya == null || Ya.observe(S);
  const fa = (po = window.matchMedia) == null ? void 0 : po.call(window, "(prefers-reduced-motion: reduce)"), Be = () => {
    Do(), Ni(performance.now());
  };
  (jn = fa == null ? void 0 : fa.addEventListener) == null || jn.call(fa, "change", Be);
  const Za = [
    setInterval(() => {
      st = /* @__PURE__ */ new Date(), Ke(!0);
    }, Uf),
    setInterval(() => {
      Bt = /* @__PURE__ */ new Date(), Ke(!0);
    }, Yf),
    setInterval(Ut, Vf)
  ];
  return Ke(!0), Do(), {
    update() {
      Ke(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      Ke(!0);
    },
    setStyle(f) {
      !f || f === u || (u = f, S.dataset.style = u, Ke(!0), Do());
    },
    destroy() {
      var f;
      cancelAnimationFrame(ce), S.removeEventListener("pointermove", br), S.removeEventListener("pointerleave", wr), Q = !0, Za.forEach(clearInterval), mt && cancelAnimationFrame(mt), mt = 0, Ya == null || Ya.disconnect(), (f = fa == null ? void 0 : fa.removeEventListener) == null || f.call(fa, "change", Be), Cn(), S.removeEventListener("click", Ii), S.removeEventListener("change", vr), S.removeEventListener("keydown", gr), S.removeEventListener("mousedown", xn), ["daily", "hourly"].forEach(P), S.remove();
    }
  };
}
const yl = "#E1E1E1", tp = "#F7F4F0", Jd = "#03a9f4", ge = 14, ve = 172;
let Ph = 0;
const Ve = (n) => Math.round(n * 100) / 100, ei = (n, l, i) => Math.max(l, Math.min(i, n)), Ai = (n, l, i, u, b, x) => '<rect x="' + Ve(n) + '" y="' + Ve(l) + '" width="' + Ve(i) + '" height="' + Ve(u) + '" fill="' + b + '"' + (x != null ? ' opacity="' + x + '"' : "") + "/>", Qd = (n) => n.map((l, i) => (i ? "L" : "M") + Ve(l[0]) + " " + Ve(l[1])).join("");
function tc(n) {
  const l = (n == null ? void 0 : n.attributes) || {};
  return l.device_class === "curtain" ? "curtain" : l.device_class === "blind" || l.current_tilt_position != null ? "venetian" : "blind";
}
const or = [
  [2, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]],
  [6.5, ["#0B0F1C", "#2E7FD6", "#F2743B", "#F1B6C8", 0.95]],
  [9.5, ["#8FC4EC", "#4DA3E8", "#F4FAFF", "#2F7FCF", 0.7]],
  [13, ["#9ED3F6", "#3F97E6", "#FFFFFF", "#2B86D9", 0.65]],
  [17, ["#9FC2E4", "#4A8ED4", "#FFD9B8", "#5E8FD6", 0.75]],
  [19, ["#4B5E86", "#3B86E0", "#FF6A3D", "#B07CE8", 0.95]],
  [21.5, ["#1A2140", "#1F3F7A", "#B4506E", "#3E59A6", 0.8]],
  [26, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]]
];
function Nh(n) {
  const l = n < 2 ? n + 24 : n;
  let i = or[0], u = or[or.length - 1];
  for (let E = 0; E < or.length - 1; E++) if (l >= or[E][0] && l <= or[E + 1][0]) {
    i = or[E], u = or[E + 1];
    break;
  }
  const b = (l - i[0]) / (u[0] - i[0]), x = b * b * (3 - 2 * b), k = (E, F) => {
    const S = parseInt(E.slice(1), 16), V = parseInt(F.slice(1), 16);
    return "#" + [16, 8, 0].map((O) => Math.round((S >> O & 255) + ((V >> O & 255) - (S >> O & 255)) * x).toString(16).padStart(2, "0")).join("");
  };
  return { top: k(i[1][0], u[1][0]), bot: k(i[1][1], u[1][1]), warm: k(i[1][2], u[1][2]), cool: k(i[1][3], u[1][3]), op: i[1][4] + (u[1][4] - i[1][4]) * x, t: l };
}
function Ih(n) {
  const l = parseInt(n.slice(1), 16), i = (l >> 16 & 255) / 255, u = (l >> 8 & 255) / 255, b = (l & 255) / 255, x = Math.max(i, u, b), k = Math.min(i, u, b);
  let E = 0, F = 0;
  const S = (x + k) / 2;
  if (x !== k) {
    const V = x - k;
    F = S > 0.5 ? V / (2 - x - k) : V / (x + k), E = (x === i ? (u - b) / V + (u < b ? 6 : 0) : x === u ? (b - i) / V + 2 : (i - u) / V + 4) / 6;
  }
  return [E * 360, F * 100, S * 100];
}
function ou(n, l, i) {
  l = ei(l, 0, 100) / 100, i = ei(i, 0, 100) / 100;
  const u = (k) => (k + n / 30) % 12, b = l * Math.min(i, 1 - i), x = (k) => i - b * Math.max(-1, Math.min(u(k) - 3, Math.min(9 - u(k), 1)));
  return "#" + [x(0), x(8), x(4)].map((k) => Math.round(k * 255).toString(16).padStart(2, "0")).join("");
}
const [iu, ru, su] = Ih(yl), ep = ou(iu, ru, Math.max(6, su - 14)), Hh = ou(iu, ru, Math.min(96, su + 16));
function Fh(n, l, i, u, b) {
  const x = ve / 2, k = ve * 0.12, E = x - (x - k) * n, F = (pt) => pt ** 1.3, S = ei(i, -1.5, 1.5), V = (pt) => -(Math.abs(S) * 4.6 * pt ** 1.5) * Math.sign(S), O = n * 1.4, z = (pt, et) => {
    const Q = Math.min(4.8, Math.abs(i) * 2.6) * (et ? 1 : -1) * Math.sign(i || 1), K = et ? pt + E : pt, mt = et ? pt : pt + E, dt = (kt) => K + V(kt) + Q * Math.sin(kt * Math.PI * 1.2 + u) * F(kt) * 1.4 + O * Math.sin(kt * Math.PI * 2 + u * 0.6) * F(kt) * (et ? 1 : -1), wt = [[mt, ge]];
    for (let kt = 0; kt <= 12; kt++) wt.push([dt(kt / 12), ge + ve * kt / 12]);
    wt.push([mt, ge + ve]);
    let it = '<path d="' + Qd(wt) + 'Z" fill="' + yl + '"/>';
    if (b) return it;
    const nt = 1.35 + ((et ? i > 0 : i < 0) ? 0.35 : 0), at = (kt) => {
      const st = kt / 7, Bt = et ? 1 - st : st, rt = (1 - Bt) ** 1.3, Ft = pt + E * st;
      return Array.from({ length: 13 }, (L, N) => {
        const W = N / 12;
        return [Ft + V(W) * rt + Q * nt * Math.sin(W * Math.PI * 1.2 + u - Bt * 3.2) * F(W) * 1.4 * rt + O * 1.6 * Math.sin(W * Math.PI * 2 + u * 0.6 - Bt * 2.5) * F(W) * n * (0.4 + 0.6 * rt), ge + ve * W];
      });
    }, D = [1, 2, 3, 4, 5, 6].map(at);
    for (let kt = 0; kt < 6; kt += 2) it += '<path d="' + Qd(D[kt]) + Qd(D[kt + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return it;
  }, Z = x - (x - k) * l;
  return { body: z(ge, !0) + z(ge + ve - E, !1), rails: [{ x: ge + Z - 4, y: ge, w: 4, h: ve }, { x: ge + ve - Z, y: ge, w: 4, h: ve }], head: 6.4 };
}
function Oh(n, l, i) {
  const u = ve * (1 - n);
  let b = "";
  if (u > 1 && (b += Ai(ge, ge, ve, u, yl), !i))
    for (let x = 1; x < 7; x += 2) b += Ai(ge + ve * x / 7, ge, ve / 7, u, "#fff");
  return { body: b, rails: [{ x: ge, y: ge + ve * (1 - l) - 7, w: ve, h: 11 }], head: 10.4 };
}
function qh(n, l, i, u) {
  const b = 9 - 7 * (i / 100), x = ge + ve * (1 - n), k = Math.ceil(ve / 10) + 1, E = ge + b / 2, F = (ge + ve - b / 2 - E) / (k - 1), S = 0.8, V = 0.6, O = Array.from({ length: k }, (pt, et) => Math.max(E + et * V, Math.min(E + et * F, x - b / 2 - (k - 1 - et) * V))), z = O.slice(0, -1).map((pt, et) => ei((O[et + 1] - pt - V) / (F - V), 0, 1));
  z.push(z[k - 2]);
  let Z = "";
  return O.forEach((pt, et) => {
    const Q = S + (b - S) * z[et], K = Math.max(0.5, Q / 2), mt = Math.max(0.4, Q * 0.114);
    Z += Ai(ge, pt - K, ve, Math.max(1, Q), yl), !u && Q > 2.2 && (Z += Ai(ge, pt + K - mt, ve, mt, ep) + Ai(ge, pt - K, ve, mt * 0.55, Hh, 0.75));
  }), u || [0.22, 0.78].forEach((pt) => {
    Z += Ai(ge + ve * pt - 0.7, ge, 1.4, Math.max(0, O[k - 1] + 1 - ge), ep, 0.85);
  }), { body: Z, rails: [{ x: ge, y: ge + ve * (1 - l) - 8, w: ve, h: 8 }], head: 8.8 };
}
const ap = (n, l, i, u, b, x, k) => n === "curtain" ? Fh(l, i, b, x, k) : n === "venetian" ? qh(l, i, u, k) : Oh(l, i, k);
function Wh(n, l) {
  let i = "", u = "";
  return l.forEach((b) => {
    const x = b.w > b.h, k = ei(x ? ge + ve / 2 : b.x + b.w / 2, 17, 183), E = ei(x ? b.y + b.h / 2 : ge + ve / 2, 17, 183);
    i += x ? Ai(ge, ei(b.y + b.h / 2, ge, ge + ve) - 1, ve, 2, Jd) : Ai(ei(b.x + b.w / 2, ge, ge + ve) - 1, ge, 2, ve, Jd);
    const F = x ? "M" + Ve(k - 4) + " " + Ve(E - 3) + "l4 -3l4 3M" + Ve(k - 4) + " " + Ve(E + 3) + "l4 3l4 -3" : "M" + Ve(k - 3) + " " + Ve(E - 4) + "l-3 4l3 4M" + Ve(k + 3) + " " + Ve(E - 4) + "l3 4l-3 4";
    u += '<circle cx="' + Ve(k) + '" cy="' + Ve(E) + '" r="11" fill="' + Jd + '" filter="url(#' + n + 's)"/><path d="' + F + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: i, knobs: u };
}
function jh(n, l) {
  const i = /* @__PURE__ */ new Date(), u = Nh(i.getHours() + i.getMinutes() / 60), b = 42 + 18 * Math.sin(u.t * 0.5), x = u.t >= 5 && u.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (u.t - 5) / 15) : 80, k = ap(l.kind, l.pos / 100, l.bar / 100, l.tilt, l.vel, l.ph, !1), E = l.ghostAlpha > 4e-3 && l.ghost != null ? ap(l.kind, l.ghost / 100, l.ghost / 100, l.tilt, 0, 0, !0).body : "", F = l.grip > 4e-3 ? Wh(n, k.rails) : null, S = (V) => Ai(ge, ge, ve, ve, V);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + n + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + n + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + u.top + '"/><stop offset="1" stop-color="' + u.bot + '"/></linearGradient><radialGradient id="' + n + 'w" cx="' + Ve(b) + '%" cy="' + Ve(x) + '%" r="58%"><stop offset="0" stop-color="' + u.warm + '" stop-opacity="' + Ve(u.op * 0.8) + '"/><stop offset="1" stop-color="' + u.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + n + 'k" cx="' + Ve(100 - b * 0.8) + '%" cy="' + Ve(100 - x * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + u.cool + '" stop-opacity="' + Ve(u.op * 0.64) + '"/><stop offset="1" stop-color="' + u.cool + '" stop-opacity="0"/></radialGradient><filter id="' + n + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + tp + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + n + 'c)">' + S("url(#" + n + "l)") + S("url(#" + n + "w)") + S("url(#" + n + "k)") + (E ? '<g opacity="' + Ve(l.ghostAlpha) + '">' + E + "</g>" : "") + k.body + '<rect x="14" y="14" width="172" height="' + k.head + '" fill="' + yl + '" filter="url(#' + n + 's)"/></g>' + (F ? '<g clip-path="url(#' + n + 'c)" opacity="' + Ve(l.grip) + '">' + F.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + tp + '" stroke-width="3"/>' + (F ? '<g opacity="' + Ve(l.grip) + '">' + F.knobs + "</g>" : "") + "</svg>";
}
function Vh({ onMove: n, onSet: l }) {
  var it;
  const i = "cv" + ++Ph, u = document.createElement("div");
  u.className = "tfCoverArt";
  const b = (it = window.matchMedia) == null ? void 0 : it.call(window, "(pointer: coarse)").matches;
  let x = null;
  const k = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let E = 0, F = !1, S = !1, V = null, O = 0, z = 0;
  const Z = () => (x == null ? void 0 : x.kind) === "curtain" ? "x" : "y", pt = () => V || F || S || x.moving || x.target != null ? 1 : b ? performance.now() < z ? 1 : 0.4 : 0, et = () => {
    u.innerHTML = jh(i, { kind: x.kind, pos: k.pos, bar: x.target ?? k.pos, tilt: k.tilt, vel: k.vel, ph: k.ph, ghost: k.gpos, ghostAlpha: k.ghost, grip: k.grip });
  };
  function Q(nt) {
    E = 0;
    const at = k.last ? Math.min(0.064, (nt - k.last) / 1e3) : 1 / 60, D = at * 60;
    k.last = nt;
    const kt = x.pos - k.pos, st = k.pos;
    k.pos += Math.sign(kt) * Math.min(Math.abs(kt), Math.max(10.5, Math.abs(kt) * 1.4) * at), Math.abs(x.pos - k.pos) < 0.03 && (k.pos = x.pos), k.vel = k.vel * 0.86 + (k.pos - st) / D * 0.14, Math.abs(k.vel) < 0.015 && k.pos === x.pos && (k.vel = 0), (k.pos !== st || k.vel) && (k.ph += (0.06 + Math.abs(k.vel) * 0.03) * D);
    const Bt = x.tilt - k.tilt;
    k.tilt += Math.sign(Bt) * Math.min(Math.abs(Bt), Math.max(60, Math.abs(Bt) * 4) * at);
    const rt = pt();
    k.grip += (rt - k.grip) * Math.min(1, at * (rt > k.grip ? 11 : 3.5)), Math.abs(rt - k.grip) < 0.01 && (k.grip = rt);
    const Ft = x.target != null && Math.abs(x.target - k.pos) > 0.5 ? 0.22 : 0;
    x.target != null && (k.gpos = x.target), k.ghost += (Ft - k.ghost) * Math.min(1, at * (Ft > k.ghost ? 16 : 3)), Math.abs(Ft - k.ghost) < 4e-3 && (k.ghost = Ft), et(), k.pos !== x.pos || k.vel || k.tilt !== x.tilt || k.grip !== rt || k.ghost !== Ft ? E = requestAnimationFrame(Q) : k.last = 0;
  }
  const K = () => {
    x && !E && (E = requestAnimationFrame(Q));
  }, mt = setInterval(() => {
    x && !E && et();
  }, 60 * 1e3), dt = (nt) => {
    const at = u.getBoundingClientRect();
    return Z() === "x" ? (nt.clientX - at.left) / at.width : (nt.clientY - at.top) / at.height;
  };
  u.addEventListener("pointerdown", (nt) => {
    var kt;
    if (!(x != null && x.canSet) || nt.button > 0) return;
    nt.preventDefault(), (kt = u.setPointerCapture) == null || kt.call(u, nt.pointerId);
    const at = x.target ?? x.pos, D = u.getBoundingClientRect();
    V = { p0: dt(nt), from: at, x0: nt.clientX, value: null, side: null }, x.kind === "curtain" && at > 0 && (V.side = (nt.clientX - D.left) / D.width < 0.5 ? "L" : "R"), K();
  }), u.addEventListener("pointermove", (nt) => {
    if (!V) return;
    let at;
    if (x.kind === "curtain") {
      if (!V.side) {
        const kt = nt.clientX - V.x0;
        if (Math.abs(kt) < 4) return;
        V.side = kt < 0 ? "L" : "R";
      }
      const D = (ve / 2 - ve * 0.12) / 200;
      at = V.from + (V.side === "L" ? -1 : 1) * ((dt(nt) - V.p0) / D) * 100;
    } else at = V.from - (dt(nt) - V.p0) / (ve / 200) * 100;
    V.value = ei(at, 0, 100), n(V.value);
  });
  const wt = () => {
    if (!V) return;
    const nt = V.value;
    V = null, nt != null && l(Math.round(nt)), K();
  };
  return u.addEventListener("pointerup", wt), u.addEventListener("pointercancel", wt), u.addEventListener("lostpointercapture", wt), u.addEventListener("pointerenter", () => {
    F = !0, K();
  }), u.addEventListener("pointerleave", () => {
    F = !1, K();
  }), u.addEventListener("focus", () => {
    S = u.matches(":focus-visible"), K();
  }), u.addEventListener("blur", () => {
    S = !1, K();
  }), u.addEventListener("keydown", (nt) => {
    if (!(x != null && x.canSet)) return;
    const at = Math.round(x.target ?? x.pos), D = nt.shiftKey ? 10 : 1, kt = { ArrowUp: at + D, ArrowRight: at + D, ArrowDown: at - D, ArrowLeft: at - D, PageUp: at + 25, PageDown: at - 25, Home: 0, End: 100 }[nt.key];
    if (kt == null) return;
    nt.preventDefault();
    const st = ei(kt, 0, 100);
    n(st), clearTimeout(O), O = setTimeout(() => l(st), 500);
  }), {
    el: u,
    update(nt) {
      const at = !x;
      x = nt, at && (k.pos = x.pos, k.tilt = x.tilt, z = performance.now() + 1500, b && setTimeout(K, 1600)), u.classList.toggle("x", Z() === "x"), u.classList.toggle("y", Z() === "y"), x.canSet ? (u.tabIndex = 0, u.setAttribute("role", "slider"), u.setAttribute("aria-valuemin", "0"), u.setAttribute("aria-valuemax", "100"), u.setAttribute("aria-valuenow", String(Math.round(x.target ?? x.pos))), u.setAttribute("aria-orientation", Z() === "x" ? "horizontal" : "vertical")) : u.setAttribute("role", "img"), u.setAttribute("aria-label", x.name + (x.canSet ? " position" : "")), u.setAttribute("aria-valuetext", x.text), K();
    },
    destroy() {
      cancelAnimationFrame(E), E = 0, clearInterval(mt), clearTimeout(O), u.remove();
    }
  };
}
const np = "move-assistant-density", Qo = {
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
}, ot = (n) => String(n ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), ec = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', op = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', ip = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', md = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, rp = {
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14v2H5z"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>'
}, sp = 1, zh = 4, lp = 16, dp = 32, Gh = 128, Uh = 256, cp = 16384, Yh = 1, Zh = 2, pp = 4, Kh = 8, $h = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, up = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, Xh = { curtain: "curtains", blind: "blind", venetian: "blinds" }, ac = {
  light: { name: "Lights", icon: "mdi:lightbulb", colour: "#ffc107" },
  climate: { name: "Climate", icon: "mdi:home-thermometer", colour: "#ff5722" },
  security: { name: "Security", icon: "mdi:security", colour: "#607d8b" },
  media_players: { name: "Media players", icon: "mdi:multimedia", colour: "#2196f3" },
  maintenance: { name: "Maintenance", icon: "mdi:wrench", colour: "#9e9e9e" },
  energy: { name: "Energy", icon: "mdi:lightning-bolt", colour: "#ffc107" }
}, fp = "move_assistant_house", hp = "move-assistant-house-used", nc = ["switch", "fan", "input_boolean", "automation"], mp = "move-assistant-house-look", Jh = [["look", "Look"], ["house", "House page"], ["weather", "Weather"]], Qh = [["popup", "Popup"], ["sheet", "Sheet"]], tm = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], em = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], am = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], oc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', nm = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', om = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', gp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', vp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', bp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', lu = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + n.map((l) => '<path d="' + l + '"/>').join("") + "</svg>", wp = lu(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), im = lu(["M20 6L9 17L4 12"]), ti = (n, l = "") => '<span class="tfAreaGlyph" data-icon-for="' + ot(n || "") + '"' + (l ? ' data-icon-name="' + ot(l) + '"' : "") + "></span>", rm = (n) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (n ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', sm = 1, lm = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], xp = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, gd = ["door", "window", "garage_door", "opening"], yp = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, bl = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], dm = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], cm = 10, pm = 20, um = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, fm = ["living room", "bedroom", "office"];
function hm(n, { config: l, getHass: i }) {
  var C, R, q;
  const u = (t) => n.getElementById(t), b = u("app"), x = l || {}, k = String(x.layout || "").toLowerCase().replace("_", "-") === "test-focus", E = String(x.page || "").toLowerCase() === "overview";
  let F = Qo.get(np) === "1", S = {};
  const V = (t) => {
    var e;
    return (e = i()) == null ? void 0 : e.callWS(t);
  }, O = (t, e, o) => V({ type: "call_service", domain: t, service: e, service_data: o }), z = n.querySelector("#appearancePane .toggleList");
  z && !u("densityToggle") && (z.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), u("densityToggle").addEventListener("click", () => {
    F = !F, Qo.set(np, F ? "1" : "0"), at();
  }));
  const Z = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && ne(t).device_class === "power" && /^(W|kW)$/.test(ne(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (t) => t.startsWith("alarm_control_panel.")]
  ], pt = (t, e, o, r) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + e + '">' + r.map(([d, h]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + o + '="' + d + '">' + h + "</button>").join("") + "</div>", et = (t, e, o, r) => '<div class="toggleRow"' + (r ? ' id="' + r + '"' : "") + "><div><strong>" + t + "</strong>" + (e ? '<div class="status">' + e + "</div>" : "") + "</div>" + o + "</div>";
  function Q() {
    var B, Y;
    if (!k || u("housePane")) return;
    const t = u("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore settings";
    const e = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], o = ($, H) => '<div class="houseTab' + ($ === "look" ? " active" : "") + '" data-house-pane="' + $ + '"><section class="card">' + H + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + e.map(([$, H]) => '<button class="tab segBtn' + ($ === "look" ? " active" : "") + '" type="button" data-house-tab="' + $ + '">' + H + "</button>").join("") + "</div>" + // Appearance in groups (Matt, 8 Nov), each one's title inside its card as a card header (Matt, 9 Nov)
    o("look", Jh.map(([$, H]) => '<div class="tfSetGroup"><div class="toggleList" data-look-group="' + $ + '"><div class="tfCardTitle">' + H + "</div></div></div>").join("")) + // Lights as cards by default, with a Cards | Table choice (Matt, 9 Nov)
    o("lights", '<div class="tfLightView"><div class="themeChoice" role="group" aria-label="Show lights as"><button class="wxLayoutBtn" type="button" data-light-view="cards">Cards</button><button class="wxLayoutBtn" type="button" data-light-view="table">Table</button></div></div><p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div><div class="tfLightCards" id="lightCards"></div>') + o("sources", '<div class="toggleList">' + Z.map(([$, H, G]) => et(H, G, '<select class="settingsSelect" data-source="' + $ + '" aria-label="' + H + '"></select>')).join("") + "</div>") + o("sums", '<div class="toggleList">' + Object.entries(ac).map(([$, H]) => et(H.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + $ + '" aria-label="' + H.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const r = ($) => t.querySelector('[data-look-group="' + $ + '"]'), d = ($) => $ == null ? void 0 : $.closest(".toggleRow");
    [d(t.querySelector(".themeBtn"))].forEach(($) => $ && r("look").appendChild($));
    const h = d(u("densityToggle"));
    h && (h.hidden = !0), [d(u("moreInfoChoice")), d(u("namesChoice"))].forEach(($) => $ && r("house").appendChild($)), r("house").insertAdjacentHTML("beforeend", et("Lights", "How lights show on the house page.", pt("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + et("Pad", "What the Dual Axis Controller’s pad sets on its tile.", pt("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow")), [d(u("hoursChoice")), d(u("wxStyleChoice"))].forEach(($) => $ && r("weather").appendChild($));
    const p = u("housePane"), m = p.querySelector(".houseTabs"), g = m.querySelector(".rubberIndicator"), M = "homecore-light-view", A = ($) => {
      p.classList.toggle("tfLightCardsOn", $ === "cards"), p.querySelectorAll("[data-light-view]").forEach((H) => H.setAttribute("aria-pressed", String(H.dataset.lightView === $))), Qo.set(M, $);
    };
    A(Qo.get(M) === "table" ? "table" : "cards"), p.querySelector(".tfLightView").addEventListener("click", ($) => {
      const H = $.target.closest("[data-light-view]");
      H && A(H.dataset.lightView);
    }), new ResizeObserver(() => mt()).observe(p), (Y = (B = document.fonts) == null ? void 0 : B.ready) == null || Y.then(() => mt());
    const _ = ($) => {
      const H = m.querySelector(".tab.active");
      g.style.transition = "none", $ ? Vp(g, g.offsetLeft, g.offsetWidth, H.offsetLeft, H.offsetWidth) : (g.style.left = H.offsetLeft + "px", g.style.width = H.offsetWidth + "px");
    };
    new ResizeObserver(() => _(!1)).observe(m), p.addEventListener("click", ($) => {
      const H = $.target.closest("[data-house-tab]");
      if (H) {
        m.querySelectorAll(".tab").forEach((U) => U.classList.toggle("active", U === H)), p.querySelectorAll(".houseTab").forEach((U) => U.classList.toggle("active", U.dataset.housePane === H.dataset.houseTab)), H.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), _(!0), mt();
        return;
      }
      const G = $.target.closest("[data-light-fav]");
      if (G) {
        ha(G.dataset.lightFav);
        return;
      }
      const j = $.target.closest("[data-light-pick]");
      if (j) {
        const [U, _t] = j.dataset.lightPick.split("|"), xt = { ...It[U] };
        j.dataset.v ? xt[_t] = j.dataset.v : delete xt[_t], It[U] = xt, Qt(), [..._a.keys()].filter((ct) => ct.endsWith(":" + _t)).forEach((ct) => _a.delete(ct)), ko();
        return;
      }
      const ft = $.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!ft || ft.disabled)) {
        if (ft.dataset.lights && (It.lights = ft.dataset.lights), ft.dataset.dacPad && (It.dacPad = ft.dataset.dacPad), (ft.dataset.lights || ft.dataset.dacPad) && (Qt(), _a.clear()), ft.dataset.sumToggle) {
          const U = ft.dataset.sumToggle, _t = new Set(jt.hiddenSums || []);
          _t.has(U) ? _t.delete(U) : _t.add(U), jt = { ...jt, hiddenSums: [..._t] }, Nn();
        }
        ko();
      }
    }), p.addEventListener("change", ($) => {
      const H = $.target;
      H.dataset.source && (jt = { ...jt, sources: { ...jt.sources || {}, [H.dataset.source]: H.value || void 0 } }, Nn());
      const G = H.dataset.lightStyle || H.dataset.lightPad;
      if (G) {
        const j = H.dataset.lightStyle ? "lightStyles" : "lightPads", ft = { ...It[j] };
        H.value ? ft[G] = H.value : delete ft[G], It[j] = ft, Qt(), [..._a.keys()].filter((U) => U.endsWith(":" + G)).forEach((U) => _a.delete(U));
      }
      ko();
    });
  }
  function K() {
    var _, B;
    Da() && vr();
    const t = u("housePane");
    if (!t) return;
    const e = !!customElements.get(xn);
    t.querySelectorAll("[data-lights]").forEach((Y) => Y.setAttribute("aria-pressed", String(Y.dataset.lights === It.lights))), u("lightsRow").querySelector(".status").textContent = e || !Da() ? "How lights show on the house page." : Cn === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((Y) => Y.setAttribute("aria-pressed", String(Y.dataset.dacPad === It.dacPad))), u("dacPadRow").hidden = !Da();
    for (const Y of t.querySelectorAll("[data-source]")) {
      if (Y === n.activeElement) continue;
      const [$] = Z.find(([G]) => G === Y.dataset.source), H = Object.keys(S).filter(Z.find(([G]) => G === $)[3]).sort((G, j) => At(G).localeCompare(At(j)));
      Y.dataset.sig !== H.join(",") && (Y.innerHTML = '<option value="">Automatic</option>' + H.map((G) => '<option value="' + ot(G) + '">' + ot(At(G)) + "</option>").join(""), Y.dataset.sig = H.join(",")), Y.value = H.includes((_ = jt.sources) == null ? void 0 : _[$]) ? jt.sources[$] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((Y) => {
      const $ = !(jt.hiddenSums || []).includes(Y.dataset.sumToggle);
      Y.classList.toggle("on", $), Y.setAttribute("aria-checked", String($));
    });
    const o = u("lightRows"), r = u("lightCards"), d = n.activeElement, h = o != null && o.contains(d) || r != null && r.contains(d) ? d : null;
    if (!o || h != null && h.matches("select")) {
      mt();
      return;
    }
    const p = new Set(pe()), m = (Y, $, H, G) => '<option value="' + Y + '"' + (Y === H ? " selected" : "") + ">" + $ + "</option>", g = Object.keys(S).filter((Y) => Y.startsWith("light.")).sort((Y, $) => !Xt.get(Y) - !Xt.get($) || (Xt.get(Y) || "").localeCompare(Xt.get($) || "") || At(Y).localeCompare(At($))).map((Y) => {
      const $ = It.lightStyles[Y] || "", H = It.lightPads[Y] || "", G = p.has(Y), j = ot(At(Y));
      return "<tr><td><strong>" + j + "</strong></td><td>" + ot(Xt.get(Y) || "—") + "</td><td>" + ot(be(Y)) + '</td><td class="metaSwitchCol"><button class="switch' + (G ? " on" : "") + '" type="button" role="switch" aria-checked="' + G + '" data-light-fav="' + ot(Y) + '" aria-label="' + j + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + ot(Y) + '" aria-label="' + j + ' tile">' + m("", "Default", $) + m("tile", "HomeCore tile", $) + m("dac", "Dual Axis Controller", $) + '</select></td><td><select class="settingsSelect" data-light-pad="' + ot(Y) + '" aria-label="' + j + ' pad"' + (Bo(Y) ? "" : " disabled") + ">" + m("", "Default", H) + m("temperature", "Temperature", H) + m("colour", "Colour", H) + "</select></td></tr>";
    }).join(""), M = (Y, $, H, G, j) => '<div class="themeChoice" role="group" aria-label="' + H + '">' + G.map(([ft, U]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (ft === j) + '" data-light-pick="' + Y + "|" + ot($) + '" data-v="' + ft + '">' + U + "</button>").join("") + "</div>", A = Object.keys(S).filter((Y) => Y.startsWith("light.")).sort((Y, $) => !Xt.get(Y) - !Xt.get($) || (Xt.get(Y) || "").localeCompare(Xt.get($) || "") || At(Y).localeCompare(At($))).map((Y) => {
      const $ = p.has(Y), H = ot(At(Y)), G = [Xt.get(Y), be(Y)].filter(Boolean).map(ot).join(" · ");
      return '<div class="toggleList"><div class="toggleRow"><div><strong>' + H + '</strong><div class="status">' + G + "</div></div></div>" + et("Favourite", "", '<button class="switch' + ($ ? " on" : "") + '" type="button" role="switch" aria-checked="' + $ + '" data-light-fav="' + ot(Y) + '" aria-label="' + H + ' is a favourite"></button>') + et("Tile", "", M("lightStyles", Y, H + " tile", [["", "Default"], ["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]], It.lightStyles[Y] || "")) + (Bo(Y) ? et("Pad", "", M("lightPads", Y, H + " pad", [["", "Default"], ["temperature", "Temperature"], ["colour", "Colour"]], It.lightPads[Y] || "")) : "") + "</div>";
    }).join("");
    o.dataset.html !== g && (o.innerHTML = g, o.dataset.html = g), r.dataset.html !== A && (r.innerHTML = A, r.dataset.html = A), h != null && h.dataset.lightFav && ((B = (r.contains(h) ? r : o).querySelector('[data-light-fav="' + CSS.escape(h.dataset.lightFav) + '"]')) == null || B.focus({ preventScroll: !0 })), mt();
  }
  function mt() {
    var e, o, r;
    const t = u("housePane");
    if (t)
      for (const d of t.querySelectorAll(".themeChoice")) {
        const h = [...d.querySelectorAll("button")];
        let p = (e = d.nextElementSibling) != null && e.classList.contains("tfChoiceList") ? d.nextElementSibling : null;
        if (!p) {
          p = document.createElement("select"), p.className = "settingsSelect tfChoiceList", p.setAttribute("aria-label", d.getAttribute("aria-label") || ((r = (o = d.closest(".toggleRow")) == null ? void 0 : o.querySelector("strong")) == null ? void 0 : r.textContent) || ""), p.addEventListener("change", () => {
            var _;
            return (_ = h[Number(p.value)]) == null ? void 0 : _.click();
          }), d.after(p);
          const A = () => {
            p.innerHTML = h.map((B, Y) => '<option value="' + Y + '"' + (B.disabled ? " disabled" : "") + ">" + ot(B.textContent) + "</option>").join("");
            const _ = h.findIndex((B) => B.getAttribute("aria-pressed") === "true" || B.classList.contains("active"));
            _ >= 0 && (p.value = String(_));
          };
          new MutationObserver(A).observe(d, { subtree: !0, attributes: !0, attributeFilter: ["aria-pressed", "class", "disabled"] }), A();
        }
        const m = (A) => {
          d.hidden !== !A && (d.hidden = !A), p.hidden !== A && (p.hidden = A);
        };
        if (h.length > 3) {
          m(!1);
          continue;
        }
        if (!d.getClientRects().length && !p.getClientRects().length) {
          p.dataset.fit || m(!0);
          continue;
        }
        const g = d.hidden;
        d.hidden = !1;
        const M = h.every((A) => A.scrollWidth <= A.clientWidth + 1);
        d.hidden = g, m(M), p.dataset.fit = "1";
      }
  }
  const dt = document.createElement("div");
  dt.className = "densityBadge", dt.setAttribute("aria-live", "polite"), dt.hidden = !0, b.appendChild(dt);
  let wt = 0;
  function it() {
    if (!F) return;
    const t = u("homeView"), e = (h) => h.offsetParent !== null && !h.closest("[hidden]");
    t.querySelectorAll(":scope .card, :scope .tfAction").forEach((h) => {
      e(h) && (h.dataset.h = Math.round(h.getBoundingClientRect().height) + " px");
    });
    const o = [...t.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(e), r = window.innerHeight, d = o.filter((h) => {
      const p = h.getBoundingClientRect();
      return p.height > 0 && p.top >= 0 && p.bottom <= r + 0.5;
    }).length;
    dt.hidden = !t.classList.contains("active"), dt.innerHTML = "<b>" + d + "</b><small>of " + o.length + " readings on screen</small>";
  }
  const nt = () => {
    F && requestAnimationFrame(it);
  };
  function at() {
    var t;
    b.classList.toggle("showDensity", F), (t = u("densityToggle")) == null || t.classList.toggle("on", F), dt.hidden = !F, clearInterval(wt), F && (wt = setInterval(it, 1e3), it());
  }
  window.addEventListener("scroll", nt, { capture: !0, passive: !0 }), window.addEventListener("resize", nt, { passive: !0 });
  const D = n.querySelector("#homeView .grid"), kt = document.createElement("style");
  n.appendChild(kt);
  const st = new ResizeObserver(() => Ft()), Bt = /* @__PURE__ */ new Set(), rt = (t) => {
    const e = t.getBoundingClientRect().height;
    return Math.abs(e - t.offsetHeight) < 1 ? e : t.offsetHeight;
  };
  function Ft() {
    const t = b.classList.contains("tfAreaOpen") && !b.classList.contains("tfWeatherOpen");
    if (D.classList.toggle("tfStack", t), Bt.forEach((g) => {
      (!t || !g.isConnected) && (st.unobserve(g), Bt.delete(g));
    }), !t) {
      kt.textContent = "";
      return;
    }
    const e = getComputedStyle(D), o = parseFloat(e.columnGap) || 0, r = e.gridTemplateColumns.split(" ").length, d = [...D.children].filter((g) => g.dataset.k && g.offsetParent);
    kt.disabled = !0;
    const h = d.map((g) => {
      const M = getComputedStyle(g), A = /span (\d+)/.exec(M.gridColumnStart + " " + M.gridColumnEnd);
      return Math.min(r, A ? +A[1] : M.gridColumnEnd === "-1" ? r : 1);
    });
    kt.disabled = !1;
    let p = 0;
    const m = d.map((g, M) => {
      Bt.has(g) || (Bt.add(g), st.observe(g));
      const A = h[M];
      p + A > r && (p = 0);
      const _ = p + 1;
      return p = (p + A) % r, '#homeView .grid.tfStack>[data-k="' + CSS.escape(g.dataset.k) + '"]{grid-column:' + _ + " / span " + A + ";grid-row-end:span " + Math.max(1, Math.ceil(rt(g) + o)) + "}";
    }).join(`
`);
    kt.textContent !== m && (kt.textContent = m);
  }
  new MutationObserver(Ft).observe(D, { childList: !0 }), new MutationObserver(Ft).observe(b, { attributes: !0, attributeFilter: ["class"] });
  let L = null, N = null, W = null, P = null;
  const lt = /* @__PURE__ */ new Map(), ut = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Map(), yt = 6;
  let Mt = null;
  const Wt = /* @__PURE__ */ new Map(), Ut = /* @__PURE__ */ new Map(), pa = /* @__PURE__ */ new Map();
  let jt = { favourites: null }, Rn = {}, hn = {}, Pn = [], Ne = null;
  const Vt = (() => {
    try {
      return JSON.parse(Qo.get(hp)) || {};
    } catch {
      return {};
    }
  })();
  let Xt = /* @__PURE__ */ new Map(), wa = 0;
  function Nn() {
    clearTimeout(wa), wa = setTimeout(() => Promise.resolve(V({ type: "frontend/set_user_data", key: fp, value: jt })).catch(() => {
    }), 400);
  }
  const It = (() => {
    let t = {};
    try {
      t = JSON.parse(Qo.get(mp)) || {};
    } catch {
    }
    const e = (o, r) => Object.fromEntries(Object.entries(o || {}).filter(([, d]) => r.includes(d)));
    return {
      more: t.more === "sheet" ? "sheet" : "popup",
      names: t.namesPicked && ["auto", "cut", "wrap", "scroll"].includes(t.names) ? t.names : "scroll",
      namesPicked: !!t.namesPicked,
      hoursWindow: ["day", "waking", "all"].includes(t.hoursWindow) ? t.hoursWindow : "day",
      wxStyle: ["bitmap", "onebit", "smooth", "line"].includes(t.wxStyle) ? t.wxStyle : "bitmap",
      lights: t.lights === "dac" ? "dac" : "tile",
      dacPad: t.dacPad === "colour" ? "colour" : "temperature",
      lightStyles: e(t.lightStyles, ["tile", "dac"]),
      lightPads: e(t.lightPads, ["temperature", "colour"])
    };
  })(), Qt = () => Qo.set(mp, JSON.stringify(It)), oe = () => {
    b.dataset.more = It.more, b.dataset.names = It.names, Mo();
  };
  k && z && !u("moreInfoChoice") && (u("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + Qh.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (It.more === t) + '" data-more-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), u("moreInfoChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-more-style]");
    e && (It.more = e.dataset.moreStyle, Qt(), oe(), u("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === e))));
  }), u("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + tm.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (It.names === t) + '" data-names-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), u("namesChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-names-style]");
    e && (It.names = e.dataset.namesStyle, It.namesPicked = !0, Qt(), oe(), u("namesChoice").querySelectorAll("[data-names-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === e))));
  }), u("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + em.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (It.hoursWindow === t) + '" data-hours-window="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), u("hoursChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-hours-window]");
    e && (It.hoursWindow = e.dataset.hoursWindow, Qt(), Le == null || Le.refresh(), u("hoursChoice").querySelectorAll("[data-hours-window]").forEach((o) => o.setAttribute("aria-pressed", String(o === e))));
  }), u("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + am.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (It.wxStyle === t) + '" data-wx-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), u("wxStyleChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-wx-style]");
    e && (It.wxStyle = e.dataset.wxStyle, Qt(), Le == null || Le.setStyle(It.wxStyle), Ge == null || Ge.forEach((o) => o.setStyle(It.wxStyle)), u("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === e))));
  })), Q();
  let ae = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const La = /* @__PURE__ */ new Map();
  let lr = "";
  const za = k ? Ou({ onChange: () => aa() }) : null;
  k && b.classList.add("house");
  const te = Object.assign(document.createElement("div"), { className: "tfBento" });
  let Le = null, dr = null, to = !1;
  function cr(t) {
    const e = Vn();
    if (b.classList.toggle("houseBento", !!e), Le && (dr !== e || t == null) && (Le.destroy(), Le = null), !e || t == null) {
      te.remove();
      return;
    }
    te.isConnected || D.append(te), te.style.order = t, !Le && !to && (Le = Qc(te, { getHass: i, entityId: e, style: It.wxStyle, hoursWindow: () => It.hoursWindow }), dr = e);
  }
  const _e = [
    ["wx", ["current"]],
    ["avg", ["compared_to_average"]],
    ["aq", ["aq_tile"]],
    ["pollen", ["pollen_tile"]],
    ["radar", ["radar_tile"]],
    ["hourly", ["hourly"]],
    ["sun", ["sun"]],
    ["moon", ["moon"]],
    ["uv", ["uv_index"]],
    ["humidity", ["humidity"]],
    ["pressure", ["pressure"]],
    ["wind", ["wind"]],
    ["visibility", ["visibility"]]
  ], In = _e.map(([t]) => t), Zt = ["aq", "pollen", "radar", "hourly", "sun", "moon", "uv", "humidity", "pressure", "wind", "visibility"], Ls = { hourly: 2 }, mn = Object.fromEntries(_e.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let Ge = null, Ot = null;
  function $t(t) {
    const e = Vn();
    Ge && Ot !== e && (Ge.forEach((o) => o.destroy()), Ge = null), Object.values(mn).forEach((o) => e ? !o.isConnected && D.append(o) : o.remove()), e && !Ge && !to && (Ge = /* @__PURE__ */ new Map(), Ot = e), Ue();
  }
  function Ue() {
    if (!Ge || to) return;
    const t = new Set(xe().hidden);
    _e.forEach(([e, o]) => {
      Ge.has(e) || t.has(e) && !(de != null && de.fromTray && de.key === e) || Ge.set(e, Qc(mn[e], { getHass: i, entityId: Ot, style: It.wxStyle, cards: o, onOpen: e === "wx" ? () => mi("weather") : void 0 }));
    });
  }
  const ne = (t) => {
    var e;
    return ((e = S[t]) == null ? void 0 : e.attributes) || {};
  }, At = (t) => ne(t).friendly_name || t, se = (t, e) => Jo(t) || (Number(ne(t).supported_features) & e) === e, ue = (t) => {
    const e = String(t ?? "").replace(/_/g, " ");
    return e.charAt(0).toUpperCase() + e.slice(1);
  }, me = (t, e = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: e, maximumFractionDigits: e }), Ga = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, pr = (t) => ne(t).supported_color_modes || [], Ei = (t, e) => [5, 3, 1].map((o) => {
    const r = (o + t / 60) % 6;
    return 255 * (1 - e / 100 * Math.max(0, Math.min(r, 4 - r, 1)));
  }), Je = (t) => (t /= 255, t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)), Hn = (t) => 0.2126 * Je(t[0]) + 0.7152 * Je(t[1]) + 0.0722 * Je(t[2]), _i = (t, e) => {
    const o = Hn(t), r = Hn(e);
    return (Math.max(o, r) + 0.05) / (Math.min(o, r) + 0.05);
  }, ur = 0.55, Fn = ["hs", "xy", "rgb", "rgbw", "rgbww"], Wr = (t) => {
    const e = ne(t), o = Fn.includes(e.color_mode);
    return (o && e.rgb_color ? e.rgb_color : o && e.hs_color ? Ei(...e.hs_color) : [255, 170, 0]).map((r) => Math.round(Math.max(0, Math.min(255, r))));
  }, ai = { heat: [255, 111, 34], cool: [33, 150, 243], heat_cool: [255, 193, 7], auto: [76, 175, 80], dry: [255, 152, 0], fan_only: [0, 188, 212] };
  function On(t) {
    var r;
    const e = t.split(".")[0], o = (r = S[t]) == null ? void 0 : r.state;
    return !o || o === "unavailable" || o === "unknown" ? null : e === "light" ? o === "on" ? Wr(t) : null : e === "climate" ? ai[o] || null : e === "cover" ? o !== "closed" ? [146, 107, 199] : null : e === "lock" ? o !== "locked" ? [244, 67, 54] : null : e === "media_player" ? ["playing", "paused", "on", "buffering"].includes(o) ? [3, 169, 244] : null : e === "humidifier" || e === "valve" ? ["on", "open", "opening", "closing"].includes(o) ? [33, 150, 243] : null : e === "vacuum" ? ["cleaning", "returning"].includes(o) ? [0, 150, 136] : null : e === "alarm_control_panel" ? o !== "disarmed" && o !== "triggered" ? [76, 175, 80] : null : e === "fan" ? o === "on" ? [0, 188, 212] : null : (e === "switch" || e === "input_boolean") && o === "on" ? [255, 193, 7] : null;
  }
  function ni(t, e, o = !1) {
    const [r, d, h] = t.map(($) => $ / 255), p = Math.max(r, d, h), m = Math.min(r, d, h), g = p - m, M = g ? (p === r ? (d - h) / g + (d < h ? 6 : 0) : p === d ? (h - r) / g + 2 : (r - d) / g + 4) * 60 : 0, A = (p + m) / 2, _ = g ? g / (1 - Math.abs(2 * A - 1)) : 0, B = g < 0.1 ? Math.min(_, 0.25) : 1, Y = ($) => {
      const H = (j) => (j + M / 30) % 12, G = B * Math.min($, 1 - $);
      return [0, 8, 4].map((j) => Math.round(255 * ($ - G * Math.max(-1, Math.min(H(j) - 3, 9 - H(j), 1)))));
    };
    for (let $ = 0.5; o ? $ < 0.96 : $ > 0.04; $ += o ? 0.01 : -0.01) {
      const H = Y($);
      if (_i(H, e) >= 3) return "rgb(" + H.join(",") + ")";
    }
    return o ? "#ffffff" : "#26221e";
  }
  const fr = (t) => {
    const e = [1, 3, 5].map((o) => parseInt(t.slice(o, o + 2), 16));
    return Math.max(...e) - Math.min(...e) < 26 ? "" : ";--sum-d:" + ni(e, [58, 58, 58], !0) + ";--sum-l:" + ni(e, [230, 230, 230]);
  }, Di = { d: ["#ffb894", "#d2b4ff", "#9dcbff"], l: ["#f0946a", "#b48ae6", "#6fa8e8"] }, As = () => [0, 1, 2].map((t) => "--g" + t + "-d:" + Di.d[t] + ";--g" + t + "-l:" + Di.l[t]).join(";"), Me = '<svg class="tfGradDefs" aria-hidden="true" focusable="false"><defs><linearGradient id="hcClimateGrad" x1="0" y1="0" x2="0" y2="1">' + [0.15, 0.5, 0.85].map((t, e) => '<stop offset="' + t + '" style="stop-color:var(--g' + e + ')"/>').join("") + "</linearGradient></defs></svg>", Ua = (t) => {
    const e = t.map((o) => Math.round(o + (255 - o) * ur));
    return "--light-soft:rgb(" + e.join(",") + ");--light-ink:" + ni(t, e);
  }, eo = (t) => Ua(Wr(t)), Lo = (t) => {
    const e = On(t);
    return e ? ' data-light style="' + Ua(e) + '"' : "";
  }, ia = (t) => {
    const e = pr(t);
    return e.length ? e.some((o) => o !== "onoff") : ne(t).brightness != null;
  }, Ye = (t) => [ne(t).min_color_temp_kelvin || 2e3, ne(t).max_color_temp_kelvin || 6500], We = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function jr(t) {
    const e = Math.max(1, Math.round((Date.now() - t) / 1e3));
    if (e < 10) return "Just now";
    if (e < 60) return e + " seconds ago";
    const o = Math.round(e / 60);
    if (o < 60) return o + (o === 1 ? " minute ago" : " minutes ago");
    const r = Math.round(o / 60);
    if (r < 24) return r + (r === 1 ? " hour ago" : " hours ago");
    const d = Math.round(r / 24);
    return d + (d === 1 ? " day ago" : " days ago");
  }
  const gn = (t) => {
    var e;
    return ne(t).current_position ?? (((e = S[t]) == null ? void 0 : e.state) === "closed" ? 0 : 100);
  }, Ao = (t) => {
    var e;
    return jn("pos", t, ((e = Wt.get(t)) == null ? void 0 : e.pos) ?? gn(t));
  }, ao = (t) => {
    var e;
    return jn("tilt", t, ((e = Wt.get(t)) == null ? void 0 : e.tilt) ?? ne(t).current_tilt_position);
  };
  function be(t) {
    var p;
    const e = S[t];
    if (!e) return "Not found";
    if (e.state === "unavailable") return "Unavailable";
    const o = e.attributes, r = t.split(".")[0];
    if (r === "light") {
      if (e.state !== "on") return "Off";
      const m = o.color_temp_kelvin;
      return (ia(t) ? Ga(e) + "%" : "On") + (o.color_mode === "color_temp" && m ? " · " + Number(m).toLocaleString() + "k" : Fn.includes(o.color_mode) ? " · Colour" : "");
    }
    if (r === "climate") return (e.state === "off" ? "Off" : ue(o.hvac_action || e.state)) + " · " + me(o.current_temperature) + " °C now";
    if (r === "cover") {
      const m = gn(t), g = o.current_tilt_position;
      return e.state === "opening" || e.state === "closing" ? ue(e.state) + " - " + m + "%" : (m <= 0 ? "Closed" : m >= 100 ? "Open" : "Partially open") + (g > 0 && g < 100 ? " · tilted" : "");
    }
    if (r === "humidifier") return e.state !== "on" ? "Off" : ue(o.action || "on") + " · " + o.current_humidity + "% now";
    if (r === "vacuum") return ue(e.state) + (e.state === "cleaning" && ((p = o.rooms) != null && p.length) ? " · " + o.rooms.join(", ") : "") + (o.battery_level != null ? " · " + o.battery_level + "%" : "");
    if (r === "media_player") return e.state === "playing" || e.state === "paused" ? (e.state === "paused" ? "Paused · " : "") + (o.media_title || "Playing") : ue(e.state);
    if (r === "alarm_control_panel") return xp[e.state] || ue(e.state);
    if (r === "lock" || r === "valve") return ue(e.state);
    if (r === "switch") return e.state === "on" ? "On" : "Off";
    if (r === "plant") return e.state === "ok" ? "Healthy" : ue(o.problem);
    if (r === "binary_sensor")
      return o.device_class === "battery" ? e.state === "on" ? "Low" : "Normal" : o.device_class === "problem" ? e.state === "on" ? "Problem" : "OK" : o.device_class === "moisture" ? e.state === "on" ? "Wet" : "Dry" : gd.includes(o.device_class) ? e.state === "on" ? "Open" : "Closed" : e.state === "on" ? "Detected" : "Clear";
    if (o.rang) return "Rang at " + We(o.rang);
    const d = i();
    if (d != null && d.formatEntityState && !Jo(t))
      try {
        return d.formatEntityState(e);
      } catch {
      }
    const h = Number(e.state);
    if (e.state !== "" && Number.isFinite(h)) {
      const m = Math.abs(h) >= 100 ? 0 : Math.abs(h) >= 10 ? 1 : 2, g = o.unit_of_measurement ? o.unit_of_measurement === "%" ? "%" : " " + o.unit_of_measurement : "";
      return h.toLocaleString(void 0, { maximumFractionDigits: m }) + g + (o.plant_low ? " · Low" : o.plant_high ? " · High" : "");
    }
    return ue(e.state);
  }
  const Eo = (t) => t >= 1e3 ? me(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W";
  function qn(t) {
    var o, r;
    const e = i();
    t.querySelectorAll("[data-icon-for]").forEach((d) => {
      var m;
      const h = S[d.dataset.iconFor], p = d.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && h && !p) {
        let g = d.firstElementChild;
        (!g || g.localName !== "ha-state-icon") && (d.textContent = "", g = document.createElement("ha-state-icon"), d.appendChild(g)), g.hass = e, g.stateObj = h;
      } else if (customElements.get("ha-icon")) {
        let g = d.firstElementChild;
        (!g || g.localName !== "ha-icon") && (d.textContent = "", g = document.createElement("ha-icon"), d.appendChild(g)), g.icon = p || ((m = h == null ? void 0 : h.attributes) == null ? void 0 : m.icon) || "mdi:circle-medium";
      } else d.textContent || (d.textContent = (d.dataset.letter || At(d.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (o = t.querySelectorAll) == null || o.call(t, ".tfIcon").forEach(oi), (r = t.classList) != null && r.contains("tfIcon") && oi(t), Ri();
  }
  const Bi = /* @__PURE__ */ new Map();
  function oi(t) {
    var h, p, m;
    const e = (((h = t.closest("[data-k]")) == null ? void 0 : h.dataset.k) || "") + "|" + (t.dataset.iconFor || ((p = t.querySelector("[data-icon-for]")) == null ? void 0 : p.dataset.iconFor) || t.getAttribute("aria-label") || ""), o = getComputedStyle(t), r = { backgroundColor: o.backgroundColor, color: o.color }, d = Bi.get(e);
    Bi.set(e, r), !(!d || d.backgroundColor === r.backgroundColor && d.color === r.color || (m = window.matchMedia) != null && m.call(window, "(prefers-reduced-motion: reduce)").matches) && t.animate([d, r], { duration: Ze.warp.cdur, delay: Ze.warp.cdelay, easing: Ie[Ze.warp.ease], fill: "backwards" });
  }
  const ii = "[data-icon-for]>:is(ha-state-icon,ha-icon),.tfIcon>svg", Vr = (t) => {
    const e = [t];
    for (; e.length; ) {
      const o = e.shift();
      if (o.localName === "svg") return o;
      o.shadowRoot && e.push(...o.shadowRoot.children), e.push(...o.children);
    }
    return null;
  };
  function zr(t) {
    var Y, $, H;
    const e = t.localName === "svg" ? t : Vr(t), o = e ? [...e.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")] : [];
    if (!o.length) return !e;
    const r = (Y = t.closest(".tfIcon")) == null ? void 0 : Y.offsetWidth;
    if (r === void 0) return !0;
    if (!r) return !1;
    const d = r + "|" + o.map((G) => G.getAttribute("d") || G.localName).join("|");
    if (t.dataset.fitted === d) return !0;
    let h = 1 / 0, p = 1 / 0, m = -1 / 0, g = -1 / 0;
    for (const G of o) {
      const j = G.getBBox(), ft = getComputedStyle(G), U = ft.stroke !== "none" ? (parseFloat(ft.strokeWidth) || 0) / 2 : 0;
      !j.width && !j.height || (h = Math.min(h, j.x - U), p = Math.min(p, j.y - U), m = Math.max(m, j.x + j.width + U), g = Math.max(g, j.y + j.height + U));
    }
    if (!(m > h)) return !1;
    const M = (H = ($ = e.viewBox) == null ? void 0 : $.baseVal) != null && H.width ? e.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, A = r > 40 ? r * (26 / 40) : r - 14, _ = A * M.width / Math.max(m - h, g - p), B = _ / M.width;
    return t.localName === "svg" ? (t.style.width = _ + "px", t.style.height = _ + "px") : t.style.setProperty("--mdc-icon-size", _ + "px"), e.style.translate = ((M.x + M.width / 2 - (h + m) / 2) * B).toFixed(2) + "px " + ((M.y + M.height / 2 - (p + g) / 2) * B).toFixed(2) + "px", t.dataset.fitted = d, !0;
  }
  let no = 0;
  function oo(t = 0) {
    clearTimeout(no), [...n.querySelectorAll(ii)].filter((o) => !zr(o)).length && t < 5 && (no = setTimeout(() => oo(t + 1), 300));
  }
  function Ri() {
    clearTimeout(no), no = setTimeout(() => oo(), 60);
  }
  const _o = (t) => {
    var e, o, r;
    return t.startsWith("light.") && S[t] && !ne(t).icon && !((r = (o = (e = i()) == null ? void 0 : e.entities) == null ? void 0 : o[t]) != null && r.icon) ? "mdi:lightbulb" : "";
  }, je = (t, e, o) => (e = e || _o(t), ' data-icon-for="' + ot(t) + '"' + (e ? ' data-icon-name="' + ot(e) + '"' : "") + (o ? ' data-letter="' + ot(o) + '"' : "")), vn = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : ne(t).rang ? "mdi:doorbell" : "", re = (t, e, o, r) => ot([t, e, o, r ? JSON.stringify(r) : ""].join("|")), ri = (t) => ot(JSON.stringify(t));
  function io(t, e) {
    var d, h;
    const o = ot(At(e) + ", " + be(e));
    return '<div class="activityRow' + (Number.isFinite(Number((d = S[e]) == null ? void 0 : d.state)) && ((h = S[e]) == null ? void 0 : h.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + ot(t + "|" + e) + '" aria-label="' + o + '. Show the last 24 hours"' : '" aria-label="' + o + '"') + '><div class="tfIcon" aria-hidden="true"' + je(e, vn(e)) + '></div><div><div class="activityRowName">' + ot(At(e)) + '</div><div class="activityRowMeta">' + ot(be(e)) + "</div></div></div>";
  }
  const si = (t, e, o) => '<div class="activityRow" aria-label="' + ot(t + ", " + e) + '"><div class="tfIcon" aria-hidden="true"' + je("", o, t) + '></div><div><div class="activityRowName">' + ot(t) + '</div><div class="activityRowMeta">' + ot(e) + "</div></div></div>";
  function bn(t) {
    var o;
    const e = ((o = S[t]) == null ? void 0 : o.state) === "on";
    return '<div class="activityRow tfPlug' + (e ? " on" : "") + '"><button class="tfIcon" type="button" data-act="' + re("switch", "toggle", t) + '" aria-label="Turn ' + ot(At(t)) + (e ? " off" : " on") + '"' + je(t) + '></button><button class="tfName" type="button" data-more="' + ot(t) + '" aria-label="' + ot(At(t) + ", " + be(t) + ". More info") + '"><span class="activityRowName">' + ot(At(t)) + '</span><span class="activityRowMeta">' + ot(be(t)) + "</span></button></div>";
  }
  const Sn = (t) => {
    var e;
    return ((e = ut.get(t)) == null ? void 0 : e.name) ?? At(t);
  }, Pi = (t) => {
    var e;
    return ((e = ut.get(t)) == null ? void 0 : e.text) ?? be(t);
  };
  function ro(t) {
    var o;
    const e = (o = ut.get(t)) == null ? void 0 : o.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (e ? je("", e, Sn(t)) : je(t, vn(t))) + '></div><div><div class="activityRowName">' + ot(Sn(t)) + '</div><div class="activityRowMeta">' + ot(Pi(t)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + ot(Sn(t)) + '’s last 24 hours">' + ec + '</button></div><svg class="tfGraph" data-graph="' + ot(t) + '" role="img" aria-label="' + ot(Sn(t)) + ', last 24 hours"></svg></div>';
  }
  function Aa(t, e, o, r, d = "", h = null, p = "") {
    const m = L && L.key === t;
    return '<section class="card tfCard' + (p ? " " + p : "") + (m ? " open" : "") + '" data-tf data-k="' + ot(t) + '" style="order:' + e + (m && L.h ? ";min-height:" + L.h + "px" : "") + '" aria-label="' + ot(o) + '"><div class="activityHeader">' + (h ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + ot(h) + '" aria-label="' + ot(o + (S[h] ? ", " + be(h) : "") + ". More info") + '">' + ot(o) + "</button>" : '<div class="activityTitle">' + ot(o) + "</div>") + "</div>" + (m ? ro(L.id) : '<div class="activityRows">' + r.join("") + "</div>" + d) + "</section>";
  }
  function Ae(t, e) {
    const o = "readings:" + t.id, r = t.readings.map((d) => io(o, d));
    return t.power != null && r.push(si("Power now", Eo(t.power), "mdi:flash")), Aa(o, e, "Readings", r.concat(t.plugs.map(bn)));
  }
  function wn(t, e) {
    var m;
    const o = "energy:" + t.id, [r, d] = [t.solar.find((g) => g.endsWith("_power")), t.solar.find((g) => g.endsWith("_today"))], h = [r, d].filter(Boolean).map((g) => io(o, g)), p = Number(((m = S[r]) == null ? void 0 : m.state) || 0) * 1e3;
    return ae.grid && (h.push(io(o, ae.grid)), h.push(si("House use", Eo(p + Number(S[ae.grid].state)), "mdi:home-lightning-bolt"))), Aa(o, e, "Energy", h, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const ra = (t, e) => Aa("plant:" + t.id, e, At(t.id), t.readings.map((o) => io("plant:" + t.id, o)), "", t.id);
  function so(t, e, o, r, d, h, p = null) {
    const m = o == null ? null : Math.max(0, Math.min(1, o)), g = m == null ? 0 : Math.round(m * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + ot(r) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + g + '"' + (d ? ' aria-valuetext="' + ot(d) + '"' : "") + ' data-drag="' + ot(t + "|" + e) + '">' + (p != null ? '<span class="was" aria-hidden="true" style="left:' + p + '%"></span>' : "") + (h ? m == null ? "" : '<b style="left:' + g + '%"></b>' : '<i style="width:' + g + '%"></i>') + "</div>";
  }
  const Gr = "move-assistant-house-last-bright", Wn = (() => {
    try {
      return JSON.parse(Qo.get(Gr)) || {};
    } catch {
      return {};
    }
  })();
  let Ke = 0;
  const lo = (t, e) => {
    !e || Wn[t] === e || (Wn[t] = e, clearTimeout(Ke), Ke = setTimeout(() => Qo.set(Gr, JSON.stringify(Wn)), 500));
  }, hr = (t, e, o, r) => '<div class="tfStep" role="group" aria-label="' + ot(t) + '"><button type="button" data-act="' + o + '" aria-label="Lower ' + ot(t.toLowerCase()) + '">' + rp.down + "</button><output>" + ot(e) + '</output><button type="button" data-act="' + r + '" aria-label="Raise ' + ot(t.toLowerCase()) + '">' + rp.up + "</button></div>", Ea = (t, e, o) => '<div class="' + t + '" role="group" aria-label="' + ot(e) + '">' + o.filter(Boolean).map((r) => '<button type="button" data-act="' + r.act + '"' + (r.pressed != null ? ' aria-pressed="' + r.pressed + '"' : "") + (r.disabled ? " disabled" : "") + (r.aria ? ' aria-label="' + ot(r.aria) + '"' : "") + ">" + (r.html || ot(r.label)) + "</button>").join("") + "</div>", co = (t, e) => "width:" + Math.round(Math.max(0, Math.min(1, (t - e * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * e / 3).toFixed(2), li = (t) => "left:calc(4px + " + t / 100 + " * (100% - 8px))", Es = (t, e) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + ot(At(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-blocks="' + ot(t) + '">' + [0, 1, 2, 3].map((o) => '<span><i style="' + co(e, o) + '"></i><b' + (e >= (o + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (o + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + li(e) + '">' + Math.round(e) + "%</output></div>";
  function Ni(t, e) {
    t.querySelectorAll(":scope>span").forEach((r, d) => {
      r.firstElementChild.setAttribute("style", co(e, d)), r.lastElementChild.classList.toggle("lit", e >= (d + 1) * 25 - 12);
    });
    const o = t.querySelector(".tfTip");
    o.setAttribute("style", li(e)), o.textContent = Math.round(e) + "%", t.setAttribute("aria-valuenow", String(Math.round(e))), t.setAttribute("aria-valuetext", Math.round(e) + "% open");
  }
  const mr = (t, e) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + ot(At(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-drag="tilt|' + ot(t) + '"><i style="width:calc((100% - 8px) * ' + e / 100 + ')"></i><span' + (e > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (e > 92 ? ' class="lit"' : "") + ">Open</span></div>", Do = (t, e, o) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + ot(At(t)) + '">' + [
    se(t, Yh) && ["open", "Open", "open_cover", e >= 100 && !o],
    se(t, Kh) && ["stop", "Stop", "stop_cover", !1],
    se(t, Zh) && ["close", "Close", "close_cover", e <= 0 && !o]
  ].filter(Boolean).map(([r, d, h, p]) => '<button type="button" data-act="' + re("cover", h, t) + '" aria-label="' + d + '"' + (p ? " disabled" : "") + ">" + $h[r] + "</button>").join("") + "</div>", Ii = (t, e) => '<button class="tfIcon' + (e.art ? " art" : "") + '" type="button" data-act="' + e.button.act + '" aria-label="' + ot(e.button.label) + '"' + (e.art ? ' style="background-image:url(&quot;' + ot(e.art) + '&quot;)"' : je(t, e.icon)) + "></button>", gr = (t) => '<button class="tfName" type="button" data-more="' + ot(t) + '" aria-label="' + ot(At(t) + ", " + be(t) + ". More info") + '"><span class="activityRowName">' + ot(At(t)) + '</span><span class="activityRowMeta">' + ot(be(t)) + "</span></button>";
  function ua(t, e = !1, o = null) {
    const r = f(t), d = t.startsWith("light.") && ce(t) && !(o && Sr(t) < 3), h = o || (e && t.startsWith("light.") ? ["bright"] : null), p = d ? ['<div class="tfDacPad" data-dac="' + (e ? "more:" : o ? "dash:" : "tile:") + ot(t) + '"></div>'] : r.sections.map((m, g) => m && (!h || h.includes((r.parts || [])[g])) ? m : "").filter(Boolean);
    return '<div class="tfAction' + (d ? " tfDac" : "") + (r.on ? " on" : "") + '" data-k="' + ot(t) + '"' + (r.tone ? ' data-tone="' + r.tone + '"' : "") + Lo(t) + '><div class="tfActionHead">' + Ii(t, r) + gr(t) + "</div>" + p.join("") + "</div>";
  }
  const xn = "dual-controller-v3", Hi = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let Cn = null;
  async function vr() {
    if (Cn || customElements.get(xn)) return;
    Cn = "loading";
    const t = await Promise.resolve().then(() => V({ type: "lovelace/resources" })).catch(() => null), e = Array.isArray(t) && t.some((r) => /dual-axis-controller/i.test(r.url || ""));
    if (await Promise.race([customElements.whenDefined(xn), new Promise((r) => setTimeout(r, e ? 8e3 : 0))]), customElements.get(xn)) return;
    const o = Object.assign(document.createElement("script"), { src: Hi });
    o.onerror = () => {
      Cn = "failed", K();
    }, document.head.appendChild(o);
  }
  const _a = /* @__PURE__ */ new Map(), Bo = (t) => (It.lightStyles[t] || It.lights) === "dac", Da = () => It.lights === "dac" || Object.values(It.lightStyles).includes("dac");
  function ce(t) {
    return Bo(t) && !!customElements.get(xn);
  }
  const Fi = (t) => It.lightPads[t] || It.dacPad, br = () => {
    const t = i();
    return t && {
      ...t,
      themes: { ...t.themes || {}, darkMode: !b.classList.contains("light") },
      callService: (e, o, r, ...d) => t.callService(e, ...od(e, o, r), ...d)
    };
  }, wr = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", Ya = (t) => {
    !t.shadowRoot || t.shadowRoot.querySelector("style[data-tf]") || (t.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: wr })).dataset.tf = "");
  }, fa = /* @__PURE__ */ new Map(), Be = new ResizeObserver((t) => t.forEach(({ target: e }) => {
    const o = e.parentElement;
    !o || !e.offsetHeight || (o.style.removeProperty("min-height"), fa.set(o.dataset.dac, o.offsetHeight));
  }));
  function Za(t) {
    t.querySelectorAll("[data-dac]").forEach((e) => {
      const o = e.dataset.dac;
      let r = _a.get(o);
      if (!r) {
        const d = o.slice(o.indexOf(":") + 1);
        r = document.createElement(xn), r.setConfig({ type: "custom:" + xn, entity: d, pad: Fi(d), tap_action: { action: "none" } }), _a.set(o, r);
      }
      r.hass = br(), r.parentNode !== e && e.replaceChildren(r), !r.offsetHeight && fa.has(o) && (e.style.minHeight = fa.get(o) + "px"), Be.observe(r), Ya(r);
    });
  }
  function po() {
    const t = br();
    _a.forEach((e, o) => {
      e.isConnected ? e.hass = t : _a.delete(o);
    });
  }
  customElements.whenDefined(xn).then(() => {
    k && (D != null && D.querySelector("[data-tf]")) && Kl(ko);
  });
  const jn = (t, e, o) => gt.has(t + "|" + e) ? gt.get(t + "|" + e) : o;
  function f(t) {
    var h;
    const e = S[t], o = e.attributes, r = t.split(".")[0], d = (p, m) => ({ act: re(p, "toggle", t), label: m });
    if (r === "light") {
      const p = e.state === "on", m = pr(t), [g, M] = Ye(t), A = jn("bright", t, Ga(e));
      p && lo(t, Ga(e));
      const _ = jn("ct", t, p && o.color_mode === "color_temp" ? o.color_temp_kelvin : null), B = jn("hue", t, p && Fn.includes(o.color_mode) && o.hs_color ? o.hs_color[0] : null);
      return { on: p, button: d("light", "Turn " + At(t) + (p ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        ia(t) && so("bright", t, A / 100, At(t) + " brightness", A + "%", !1, p ? null : Wn[t] ?? null),
        m.includes("color_temp") && so("ct", t, _ == null ? null : (_ - g) / (M - g), At(t) + " warm to cool", _ == null ? "" : Math.round(_) + " kelvin", !0),
        m.some((Y) => Fn.includes(Y)) && so("hue", t, B == null ? null : B / 360, At(t) + " colour", "", !0)
      ] };
    }
    if (r === "climate") {
      const p = o.target_temp_step || 0.5, m = Number(o.temperature);
      return { on: e.state !== "off", tone: e.state === "cool" || o.hvac_action === "cooling" ? "cool" : "heat", button: d("climate", "Turn " + At(t) + (e.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(m) && hr("Target temperature", me(m) + " °C", re("climate", "set_temperature", t, { temperature: m - p }), re("climate", "set_temperature", t, { temperature: m + p })),
        Ea("tfSeg", "Mode", (o.hvac_modes || []).map((g) => ({ label: ue(g), act: re("climate", "set_hvac_mode", t, { hvac_mode: g }), pressed: e.state === g })))
      ] };
    }
    if (r === "cover") {
      const p = e.state === "opening" || e.state === "closing", m = e.state === "closed", g = Ao(t), M = ao(t);
      return { on: !m, tone: "blue", icon: up[tc(e)][m ? 1 : 0], button: d("cover", (m ? "Open " : "Close ") + At(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        se(t, pp) && Es(t, g),
        M != null && mr(t, M),
        Do(t, g, p)
      ] };
    }
    if (r === "humidifier") {
      const p = Number(o.humidity);
      return { on: e.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: d("humidifier", "Turn " + At(t) + (e.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(p) && hr("Target humidity", p + "%", re("humidifier", "set_humidity", t, { humidity: p - 1 }), re("humidifier", "set_humidity", t, { humidity: p + 1 })),
        ((h = o.available_modes) == null ? void 0 : h.length) && Ea("tfSeg", "Mode", o.available_modes.map((m) => ({ label: ue(m), act: re("humidifier", "set_mode", t, { mode: m }), pressed: o.mode === m })))
      ] };
    }
    if (r === "media_player") {
      const p = e.state === "playing", m = e.state === "off" || e.state === "standby", g = jn("vol", t, o.volume_level), M = m ? { act: re("media_player", se(t, Gh) ? "turn_on" : "toggle", t), label: "Turn " + At(t) + " on" } : e.state === "playing" || e.state === "paused" ? { act: re("media_player", "media_play_pause", t), label: (p ? "Pause " : "Play ") + At(t) } : { act: re("media_player", se(t, Uh) ? "turn_off" : "toggle", t), label: "Turn " + At(t) + " off" };
      return { on: !m, tone: "blue", art: !m && o.entity_picture ? o.entity_picture : null, button: M, parts: ["playback", "volume"], sections: m ? [] : [
        (se(t, lp) || se(t, dp) || se(t, sp) || se(t, cp)) && Ea("tfSeg", "Playback", [
          { html: md.prev, aria: "Previous", act: re("media_player", "media_previous_track", t), disabled: !se(t, lp) },
          { html: p ? md.pause : md.play, aria: p ? "Pause" : "Play", act: re("media_player", "media_play_pause", t), disabled: !(se(t, sp) || se(t, cp)) },
          { html: md.next, aria: "Next", act: re("media_player", "media_next_track", t), disabled: !se(t, dp) }
        ]),
        se(t, zh) && g != null && so("vol", t, g, At(t) + " volume", Math.round(g * 100) + "%")
      ] };
    }
    if (r === "vacuum") {
      const p = e.state === "cleaning", m = o.rooms || [], g = (A) => m.includes(A) ? m.filter((_) => _ !== A) : m.concat(A), M = re("vacuum", p ? "pause" : "start", t, Jo(t) ? { rooms: m } : null);
      return { on: p || e.state === "returning", tone: "blue", button: { act: M, label: (p ? "Pause " : "Start ") + At(t) }, parts: ["controls", "rooms"], sections: [
        Ea("tfSeg", At(t), [
          { label: p ? "Pause" : "Start", act: M },
          { label: "Dock", act: re("vacuum", "return_to_base", t), disabled: e.state === "docked" },
          { label: "Locate", act: re("vacuum", "locate", t) }
        ]),
        Jo(t) && Ea("tfChips", "Rooms to clean", ae.rooms.filter((A) => A.id !== "balcony").map((A) => ({ label: A.name, act: re("vacuum", "set_rooms", t, { rooms: g(A.name) }), pressed: m.includes(A.name) })))
      ] };
    }
    if (r === "lock") {
      const p = e.state === "locked";
      return { on: !p, tone: "heat", button: { act: re("lock", p ? "unlock" : "lock", t), label: (p ? "Unlock " : "Lock ") + At(t) }, parts: ["controls"], sections: [
        Ea("tfSeg", At(t), [
          { label: "Lock", act: re("lock", "lock", t), pressed: p },
          { label: "Unlock", act: re("lock", "unlock", t), pressed: e.state === "unlocked" },
          se(t, sm) && { label: "Open", act: re("lock", "open", t), pressed: e.state === "open" }
        ])
      ] };
    }
    if (r === "alarm_control_panel") {
      const p = e.state === "disarmed";
      return { on: !p, tone: e.state === "triggered" ? "alarm" : "blue", button: { act: re("alarm_control_panel", p ? "alarm_arm_away" : "alarm_disarm", t), label: p ? "Arm " + At(t) + ", away" : "Disarm " + At(t) }, parts: ["controls"], sections: [
        Ea("tfSeg", At(t), lm.filter(([, , , m]) => !m || se(t, m)).map(([m, g, M]) => ({ label: g, act: re("alarm_control_panel", M, t), pressed: e.state === m })))
      ] };
    }
    if (r === "valve") {
      const p = e.state === "open";
      return { on: p, tone: "blue", icon: "mdi:sprinkler-variant", button: d("valve", (p ? "Close " : "Open ") + At(t)), parts: ["controls"], sections: [
        Ea("tfSeg", At(t), [
          { label: "Open", act: re("valve", "open_valve", t), pressed: p },
          { label: "Close", act: re("valve", "close_valve", t), pressed: !p }
        ])
      ] };
    }
    return { on: !1, button: { act: "", label: At(t) }, sections: [] };
  }
  const w = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : me(t)) + "°";
  function y(t) {
    var G;
    const e = (j) => t.readings.find((ft) => ne(ft).device_class === j), o = e("temperature"), r = e("humidity"), d = (j) => {
      var ft;
      return Number((ft = S[j]) == null ? void 0 : ft.state);
    }, h = (j) => t.actions.filter((ft) => j.test(ft)), p = t.lights.filter((j) => {
      var ft;
      return ((ft = S[j]) == null ? void 0 : ft.state) === "on";
    }), m = h(/^cover\./), g = m.filter((j) => {
      var ft;
      return ((ft = S[j]) == null ? void 0 : ft.state) !== "closed";
    }), M = [...new Set(m.map((j) => tc(S[j])))], A = h(/^climate\./)[0], _ = h(/^humidifier\./)[0], B = h(/^media_player\./), Y = B.find((j) => {
      var ft;
      return ((ft = S[j]) == null ? void 0 : ft.state) === "playing";
    }) || B.find((j) => {
      var ft;
      return ((ft = S[j]) == null ? void 0 : ft.state) === "paused";
    }), $ = t.plugs.filter((j) => {
      var ft;
      return ((ft = S[j]) == null ? void 0 : ft.state) === "on";
    }), H = [];
    if (o && Number.isFinite(d(o)) && H.push({ key: "temp", id: o, kind: "reading", icon: ti(o), label: "Temperature", value: me(d(o)) + "°" }), r && Number.isFinite(d(r)) && H.push({ key: "hum", id: r, kind: "reading", icon: ti(r), label: "Humidity", value: Math.round(d(r)) + "%" }), t.lights.length && H.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: ti("", "mdi:lightbulb"),
      label: "Lights",
      value: p.length ? p.length + " of " + t.lights.length + " on" : "All off",
      short: p.length ? p.length + " on" : "Off",
      on: p.length > 0,
      light: p.length ? eo(p[0]) : "",
      acts: t.lights.map((j) => ["light", p.length ? "turn_off" : "turn_on", j]),
      aria: (p.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), m.length) {
      const j = M.length === 1 ? Xh[M[0]] : "covers", ft = Math.round(m.reduce((U, _t) => U + gn(_t), 0) / m.length);
      H.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        light: g.length ? Ua([146, 107, 199]) : "",
        icon: ti("", ((G = up[M[0]]) == null ? void 0 : G[g.length ? 0 : 1]) || "mdi:window-shutter"),
        label: ue(j),
        value: ft <= 0 ? "Closed" : ft >= 100 ? "Open" : ft + "% open",
        short: ft <= 0 ? "Closed" : ft + "%",
        on: g.length > 0,
        acts: m.map((U) => ["cover", g.length ? "close_cover" : "open_cover", U]),
        aria: (g.length ? "Close the " : "Open the ") + j + " in " + t.name
      });
    }
    if (A) {
      const j = ne(A), ft = S[A].state === "off";
      H.push({
        key: "climate",
        kind: "control",
        tone: j.hvac_action === "cooling" ? "cool" : "heat",
        light: On(A) ? Ua(On(A)) : "",
        icon: ti(A),
        label: At(A),
        value: ft ? "Off" : ue(j.hvac_action || S[A].state) + " · " + w(j.temperature),
        short: ft ? "Off" : w(j.temperature),
        on: !ft,
        acts: [["climate", "toggle", A]],
        aria: "Turn " + At(A) + (ft ? " on" : " off")
      });
    }
    if (_) {
      const j = S[_].state === "on";
      H.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        light: j ? Ua([33, 150, 243]) : "",
        icon: ti("", "mdi:air-humidifier"),
        label: At(_),
        value: j ? "On · " + ne(_).humidity + "%" : "Off",
        short: j ? ne(_).humidity + "%" : "Off",
        on: j,
        acts: [["humidifier", "toggle", _]],
        aria: "Turn " + At(_) + (j ? " off" : " on")
      });
    }
    if (B.length) {
      const j = Y || B[0], ft = S[j], U = ft.state === "playing";
      H.push({
        key: "media",
        kind: "control",
        tone: "blue",
        light: On(j) ? Ua(On(j)) : "",
        icon: ti(j),
        label: At(j),
        value: be(j),
        short: U ? "Playing" : ft.state === "paused" ? "Paused" : ue(ft.state),
        on: U,
        acts: [["media_player", ft.state === "playing" || ft.state === "paused" ? "media_play_pause" : "toggle", j]],
        aria: (U ? "Pause " : "Play ") + At(j)
      });
    }
    return t.plugs.length && H.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      light: $.length ? Ua([255, 193, 7]) : "",
      icon: ti("", "mdi:power-plug"),
      label: "Plugs",
      value: $.length ? $.length + " of " + t.plugs.length + " on" : "All off",
      short: $.length ? $.length + " on" : "Off",
      on: $.length > 0,
      acts: t.plugs.map((j) => ["switch", $.length ? "turn_off" : "turn_on", j]),
      aria: ($.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((j) => H.push(ne(j).device_class === "moisture" ? { key: "alert:" + j, kind: "alert", icon: ti(j), label: "Water leak" } : { key: "note:" + j, kind: "note", icon: ti(j), label: At(j) + " " + be(j).toLowerCase() })), H;
  }
  const T = (t, e) => {
    const o = (r) => t.actions.filter((d) => r.test(d));
    return {
      lights: t.lights,
      covers: o(/^cover\./),
      climate: o(/^climate\./).slice(0, 1),
      humidifier: o(/^humidifier\./).slice(0, 1),
      plugs: t.plugs,
      media: (() => {
        const r = o(/^media_player\./);
        return [r.find((d) => {
          var h;
          return ((h = S[d]) == null ? void 0 : h.state) === "playing";
        }) || r.find((d) => {
          var h;
          return ((h = S[d]) == null ? void 0 : h.state) === "paused";
        }) || r[0]].filter(Boolean);
      })()
    }[e] || [];
  }, I = (t, e, o) => '<button class="' + e + (t.on ? " on" : "") + '" type="button" data-tone="' + t.tone + '" data-acts="' + ri(t.acts) + '" aria-label="' + ot(t.aria) + '" aria-pressed="' + t.on + '">' + o + "</button>", X = (t) => '<button class="tfAName" type="button" data-go="' + ot(t.id) + '" aria-label="Open ' + ot(t.name) + '">' + ot(t.name) + "</button>";
  function J(t, e, o = !1) {
    const r = e.find((m) => m.key === "lights"), d = !!(r != null && r.on), h = "", p = '<span class="tfAreaGlyph"' + je("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>";
    return o || !r ? '<span class="tfIcon tfAreaIcon' + (d ? " on" : "") + '"' + h + ' aria-hidden="true">' + p + "</span>" : '<button class="tfIcon tfAreaIcon' + (d ? " on" : "") + '" type="button"' + h + ' data-acts="' + ri(r.acts) + '" aria-label="' + ot(r.aria) + '" aria-pressed="' + d + '">' + p + "</button>";
  }
  const ht = (t) => t.filter((e) => e.kind === "alert" || e.kind === "note").map((e) => '<span class="sourceTag">' + ot(e.label) + "</span>").join(" "), tt = (t) => t.readings.find((e) => ne(e).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((e) => S[e]) || null, vt = (t, e) => {
    const o = At(e);
    return o.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? ue(o.slice(t.name.length + 1)) : o;
  };
  function bt(t) {
    const e = S[t], o = ne(t), r = t.split(".")[0], d = Number(e.state);
    if (e.state === "unavailable") return { text: "Unavailable" };
    if (r === "sensor" && Number.isFinite(d)) {
      if (o.device_class === "temperature") return { text: w(d) };
      const h = o.unit_of_measurement || "";
      return h === "%" ? { text: Math.round(d) + "%" } : { text: me(d, Number.isInteger(d) ? 0 : 1), unit: h };
    }
    if (r === "climate" && (o.current_temperature ?? o.temperature) != null) return { text: w(o.current_temperature ?? o.temperature) };
    if (r === "light") return { text: e.state !== "on" ? "Off" : ia(t) ? Ga(e) + "%" : "On" };
    if (r === "cover") {
      const h = gn(t);
      return { text: h <= 0 ? "Closed" : h >= 100 ? "Open" : h + "%" };
    }
    return r === "humidifier" ? { text: e.state === "on" ? o.humidity + "%" : "Off" } : r === "media_player" ? { text: e.state === "playing" ? "Playing" : e.state === "paused" ? "Paused" : ue(e.state) } : { text: be(t) };
  }
  const St = (t, e, o) => {
    const r = o.find((m) => m.key === "temp"), d = o.find((m) => m.key === "hum"), h = ne(e), p = S[e].state === "off";
    return e.startsWith("climate.") ? [vt(t, e), p ? "Off" : ue(h.hvac_action || S[e].state) + (h.temperature != null ? " · " + w(h.temperature) : ""), d && d.value + " humidity"].filter(Boolean).join(" · ") : [!(r && r.id === e) && vt(t, e), r && r.id !== e && r.value, d && d.id !== e && d.value + " humidity"].filter(Boolean).join(" · ");
  };
  function Gt(t, e, o) {
    const r = o && bt(o), d = o ? St(t, o, e) : "", h = (g) => {
      const M = T(t, g.key);
      return M.length === 1 ? M[0] : "group:" + t.id + ":" + g.key;
    }, p = e.filter((g) => g.kind === "control").slice(0, 4).map((g) => '<div class="tfATile' + (g.on ? " on" : "") + '" data-tone="' + g.tone + '"' + (g.light ? ' data-light style="' + g.light + '"' : "") + ">" + I(g, "tfIcon", g.icon) + '<button class="tfName" type="button" data-more="' + ot(h(g)) + '" aria-label="' + ot(t.name + " " + g.label.toLowerCase() + ", " + g.value + ". Open") + '"><span class="activityRowName">' + ot(g.label) + '</span><span class="activityRowMeta">' + ot(g.value) + "</span></button></div>"), m = ht(e);
    return '<div class="workoutPanelTop">' + J(t, e) + '<div class="tfATitle">' + X(t) + "</div>" + (m ? '<div class="tfATags">' + m + "</div>" : "") + "</div>" + (o ? '<button class="tfABig" type="button" data-more="' + ot(o) + '" aria-label="' + ot(At(o) + ", " + be(o) + ". More info") + '"><span class="tfABigMain' + (r.text.length > 7 ? " long" : "") + '">' + ot(r.text) + (r.unit ? '<span class="tfABigUnit">' + ot(r.unit) + "</span>" : "") + "</span>" + (d ? '<span class="tfABigSub">' + ot(d) + "</span>" : "") + "</button>" : "") + (p.length ? '<div class="tfATiles">' + p.join("") + "</div>" : "");
  }
  function qt(t) {
    const e = t.id === N, o = y(t), r = tt(t), d = r && bt(r), h = [...o.filter((p) => p.kind === "control"), ...o.filter((p) => p.kind !== "control" && p.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (e ? " active" : "") + '" data-area="' + ot(t.id) + '" tabindex="0" aria-expanded="' + e + '" aria-label="' + ot(t.name) + '"><div class="panelExpanded"' + (e ? "" : " inert") + ">" + Gt(t, o, r) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + J(t, o, !0) + '<span class="tfACName">' + ot(t.name) + '</span></div><span class="tfACMain">' + (d ? ot(d.text + (d.unit ? " " + d.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + h.map((p) => '<span class="tfACTile"><span class="tfIcon' + (p.kind === "alert" ? " alert" : "") + '"' + (p.on && p.light ? ' data-light style="' + p.light + '"' : "") + ">" + p.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let Ct = [];
  const zt = () => {
    var e;
    const t = new Set(((e = jt.dash) == null ? void 0 : e.areasOff) || []);
    return Ct.filter((o) => !t.has(o.id));
  }, Ht = (t) => {
    var o;
    const e = zt();
    return e.some((r) => r.id === N) || (N = ((o = e[0]) == null ? void 0 : o.id) || null), '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + e.map(qt).join("") + "</section></div>";
  }, Tt = (t) => t.startsWith("room:"), Jt = (t) => Ct.find((e) => "room:" + e.id === t);
  function Yt(t, e) {
    const o = y(t), r = tt(t), d = r && bt(r), h = r ? St(t, r, o) : "", p = d ? d.text + (d.unit ? " " + d.unit : "") : "", m = (B) => {
      const Y = T(t, B.key);
      return Y.length === 1 ? Y[0] : "group:" + t.id + ":" + B.key;
    }, g = o.filter((B) => B.kind === "control").slice(0, 4), M = (B) => B.on && B.light ? ' data-light style="' + B.light + '"' : "", A = g.map((B) => '<button class="tfIcon' + (B.on ? " on" : "") + '" type="button" data-tone="' + B.tone + '"' + M(B) + ' data-more="' + ot(m(B)) + '" aria-label="' + ot(B.label + ", " + B.value + ". Open its controls") + '">' + B.icon + "</button>"), _ = g.map((B) => '<button class="tfRoomDev" type="button" data-more="' + ot(m(B)) + '" aria-label="' + ot(B.label + ", " + B.value + ". Open its controls") + '"><span class="tfIcon' + (B.on ? " on" : "") + '" data-tone="' + B.tone + '"' + M(B) + ">" + B.icon + '</span><span class="tfRoomDevName"><span class="activityRowName">' + ot(B.label) + '</span><span class="activityRowMeta">' + ot(B.value) + "</span></span></button>");
    return '<div class="tfAction tfRoomTile" data-k="' + ot(e) + '" data-go="' + ot(t.id) + '"><div class="tfActionHead"><span class="tfIcon tfRoomIcon" aria-hidden="true"><span class="tfAreaGlyph"' + je("area:" + t.id, t.icon || "mdi:texture-box", t.name) + '></span></span><button class="tfName" type="button" data-go="' + ot(t.id) + '" aria-label="Open ' + ot(t.name) + '"><span class="activityRowName">' + ot(t.name) + "</span>" + (p || h ? '<span class="activityRowMeta">' + (p ? '<span class="tfRoomInline">' + ot(p) + (h ? " · " : "") + "</span>" : "") + ot(h) + "</span>" : "") + "</button></div>" + (p ? '<div class="tfRoomReading" aria-hidden="true"><span class="tfRoomBig">' + ot(p) + "</span>" + (h ? '<span class="tfRoomSub">' + ot(h) + "</span>" : "") + "</div>" : "") + (A.length ? '<div class="tfRoomDevices">' + A.join("") + '</div><div class="tfRoomHeads">' + _.join("") + "</div>" : "") + "</div>";
  }
  const we = () => [
    { key: "home", name: "Home", ids: ae.homeVacuums },
    ...ae.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], Rt = (t, e, o) => t + " " + (t === 1 ? e : o), pe = () => (jt.favourites ?? Rn.favorite_entities ?? []).filter((t) => S[t]);
  function He() {
    if (!Ne) {
      const e = Object.entries(Vt).sort((r, d) => d[1] - r[1]).map(([r]) => r), o = ae.rooms.flatMap((r) => r.actions);
      Ne = [.../* @__PURE__ */ new Set([...Pn, ...e, ...o.filter((r) => f(r).on), ...o])];
    }
    const t = pe();
    return Ne.filter((e) => S[e] && S[e].state !== "unavailable" && !t.includes(e));
  }
  let ga = !1;
  function Ba() {
    if (!ga || jt.favSeeded || !ae.rooms.length || E) return;
    const t = (o) => Object.keys(S).find((r) => Jo(r) && o(r)), e = [t((o) => o.startsWith("climate.")), t((o) => o.startsWith("cover.") && /curtain/.test(o)), t((o) => o.startsWith("valve.")), ae.security.locks[0]];
    jt = { ...jt, favourites: [.../* @__PURE__ */ new Set([...jt.favourites ?? Rn.favorite_entities ?? [], ...e.filter(Boolean)])], favSeeded: !0 }, Nn();
  }
  const uo = () => jt.suggest ?? !Rn.hide_suggested_entities;
  function Ra() {
    const t = new Set(E ? [] : jt.favHidden || []), e = pe().filter((r) => !t.has(r)), o = uo() ? He().filter((r) => !t.has(r) && di(r)) : [];
    return [...e, ...o].slice(0, cm);
  }
  const fo = (t) => {
    const e = pe().includes(t);
    return '<button class="tfStar" type="button" data-star="' + ot(t) + '" aria-pressed="' + e + '" aria-label="Favourite: ' + ot(At(t)) + '">' + rm(e) + "</button>";
  };
  function le(t, { area: e = !1, star: o = !1, plain: r = !1, say: d = null, alert: h = !1 } = {}) {
    var $, H, G, j, ft, U;
    const p = r && ((ft = ($ = i()) == null ? void 0 : $.devices) == null ? void 0 : ft[(j = (G = (H = i()) == null ? void 0 : H.entities) == null ? void 0 : G[t]) == null ? void 0 : j.device_id]), m = p && (p.name_by_user || p.name) || At(t), g = t.split(".")[0], M = !r && bl.includes(g) ? f(t) : null, A = M ? M.on : ["on", "open", "playing"].includes((U = S[t]) == null ? void 0 : U.state), _ = r ? null : M ? M.button : nc.includes(g) ? { act: re(g, "toggle", t), label: "Turn " + At(t) + (A ? " off" : " on") } : g === "scene" || g === "script" ? { act: re(g, "turn_on", t), label: "Run " + At(t) } : null, B = (d ?? be(t)) + (e && Xt.get(t) ? " · " + Xt.get(t) : ""), Y = (M == null ? void 0 : M.icon) || vn(t);
    return '<div class="activityRow' + (_ ? " tfPlug" : "") + (A ? " on" : "") + (o ? " tfPick" : "") + (h ? " alert" : "") + '" data-k="' + ot((e ? "fav:" : "row:") + t) + '" data-tone="' + (g === "light" ? "light" : (M == null ? void 0 : M.tone) || "blue") + '"' + Lo(t) + ">" + (_ && !o ? '<button class="tfIcon" type="button" data-act="' + _.act + '" aria-label="' + ot(_.label) + '"' + je(t, Y) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + je(t, Y) + "></div>") + '<button class="tfName" type="button" data-more="' + ot(t) + '" aria-label="' + ot(m + ", " + B + ". More info") + '"><span class="activityRowName">' + ot(m) + '</span><span class="activityRowMeta">' + ot(B) + "</span></button>" + (o ? fo(t) : "") + "</div>";
  }
  const Vn = () => {
    var t;
    return S[(t = jt.sources) == null ? void 0 : t.weather] ? jt.sources.weather : S["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(S).find((e) => e.startsWith("weather."));
  };
  function Ka() {
    var o;
    const t = (r) => Object.keys(S).filter((d) => d.startsWith("binary_sensor.") && r.includes(ne(d).device_class));
    return ((o = hn.alert_entities) != null && o.length ? hn.alert_entities : [...t(["moisture", "smoke", "gas"]).map((r) => ({ entity: r, severity: "alert" })), ...t(gd).map((r) => ({ entity: r, severity: "warning" }))]).filter((r) => S[r.entity]).map((r) => ({ ...r, on: ["on", "open", "unlocked", "triggered", "problem"].includes(S[r.entity].state) }));
  }
  function zn() {
    const t = Object.keys(ac), e = /* @__PURE__ */ new Set(), o = [];
    return (Rn.shortcuts || []).forEach((r) => {
      if (r.type === "summary") {
        if (!t.includes(r.key) || e.has(r.key)) return;
        e.add(r.key);
      }
      o.push(r);
    }), t.forEach((r) => {
      e.has(r) || o.push({ type: "summary", key: r });
    }), o;
  }
  function Ro() {
    var G;
    const t = ((G = i()) == null ? void 0 : G.entities) || {}, e = (j) => ne(j).device_class, o = Object.keys(S).filter((j) => j.startsWith("sensor.") && e(j) === "battery" || j.startsWith("binary_sensor.") && ["battery", "problem"].includes(e(j))), r = ae.rooms.flatMap((j) => j.plants.map((ft) => ft.id));
    if (!o.length && !r.length) return null;
    const d = (j) => {
      var U;
      const ft = (U = t[j]) == null ? void 0 : U.device_id;
      return !!ft && Object.keys(S).some((_t) => {
        var xt;
        return _t.startsWith("binary_sensor.") && ((xt = t[_t]) == null ? void 0 : xt.device_id) === ft && e(_t) === "battery_charging" && S[_t].state === "on";
      });
    }, h = (j) => j.startsWith("vacuum.") ? ne(j).battery_level <= 20 && S[j].state !== "docked" : j.startsWith("binary_sensor.") ? e(j) === "battery" && S[j].state === "on" : parseFloat(S[j].state) <= 20 && !d(j), p = [...o, ...ae.vacuums].filter((j) => S[j] && h(j)), m = [...o.filter((j) => e(j) === "problem" && S[j].state === "on"), ...r.filter((j) => {
      var ft;
      return ((ft = S[j]) == null ? void 0 : ft.state) === "problem";
    })], g = o.filter((j) => S[j].state === "unavailable"), M = [.../* @__PURE__ */ new Set([...p, ...m, ...g])], A = (j) => {
      const ft = parseFloat(S[j].state);
      return e(j) === "battery" && Number.isFinite(ft) ? ft : 101;
    }, _ = [...r, ...ae.vacuums, ...[...o].sort((j, ft) => A(j) - A(ft))].filter((j) => S[j] && !M.includes(j)), B = /* @__PURE__ */ new Map();
    _.forEach((j) => {
      var U;
      const ft = ((U = ae.areaOf) == null ? void 0 : U.call(ae, j)) || "";
      B.set(ft, [...B.get(ft) || [], j]);
    });
    const Y = (j) => {
      const ft = ae.rooms.findIndex((U) => U.id === j);
      return j === "" ? 1 / 0 : ft < 0 ? ae.rooms.length : ft;
    }, $ = [...B.keys()].sort((j, ft) => Y(j) - Y(ft)), H = (j) => {
      var ft, U, _t, xt;
      return ((ft = ae.rooms.find((ct) => ct.id === j)) == null ? void 0 : ft.name) || ((xt = (_t = (U = i()) == null ? void 0 : U.areas) == null ? void 0 : _t[j]) == null ? void 0 : xt.name) || j;
    };
    return {
      value: [p.length && Rt(p.length, "low battery", "low batteries"), m.length && Rt(m.length, "problem", "problems"), g.length && Rt(g.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: M, alert: !0 }, ...$.map((j) => ({ name: j ? H(j) : $.length > 1 ? "Other devices" : "Devices", ids: B.get(j) }))].filter((j) => j.ids.length)
    };
  }
  function Po() {
    var Pt;
    const t = ae.rooms, e = ae.security, o = (Et, ie) => Et.actions.filter((Te) => ie.test(Te)), r = (Et) => t.map((ie) => ({ name: ie.name, ids: Et(ie) })).filter((ie) => ie.ids.length), d = t.flatMap((Et) => Et.lights), h = d.filter((Et) => {
      var ie;
      return ((ie = S[Et]) == null ? void 0 : ie.state) === "on";
    }).length, p = t.map((Et) => Et.readings.find((ie) => ne(ie).device_class === "temperature")).filter(Boolean).map((Et) => Number(S[Et].state)).filter(Number.isFinite), [m, g] = [me(Math.min(...p)), me(Math.max(...p))], M = t.flatMap((Et) => o(Et, /^media_player\./)), A = M.filter((Et) => {
      var ie;
      return ((ie = S[Et]) == null ? void 0 : ie.state) === "playing";
    }).length, _ = Ka(), B = _.filter((Et) => Et.severity === "warning" && Et.on).length, Y = e.locks.filter((Et) => {
      var ie;
      return ["unlocked", "jammed", "open"].includes((ie = S[Et]) == null ? void 0 : ie.state);
    }).length, $ = e.alarms.filter((Et) => {
      var ie;
      return ((ie = S[Et]) == null ? void 0 : ie.state) === "disarmed";
    }).length, H = B ? Rt(B, "warning", "warnings") : null, G = Y ? Y + " unlocked" : $ ? $ + " disarmed" : H ? null : "All secure", j = Ro(), ft = t.flatMap((Et) => Et.solar), U = ft.find((Et) => Et.endsWith("_power")), _t = {
      light: d.length && { value: h ? h + " on" : "All off", groups: r((Et) => Et.lights) },
      climate: p.length && { value: m === g ? m + "°" : m + " - " + g + "°", groups: r((Et) => [...Et.readings.filter((ie) => ["temperature", "humidity"].includes(ne(ie).device_class)), ...o(Et, /^(climate|humidifier)\./)]) },
      security: (e.alarms.length || e.locks.length) && { value: [H, G].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...e.alarms, ...e.locks] }, { name: "Doors and windows", ids: e.openings }].filter((Et) => Et.ids.length) },
      media_players: M.length && { value: A ? A + " playing" : "No media playing", groups: r((Et) => o(Et, /^media_player\./)) },
      maintenance: j,
      energy: ae.grid && { value: Eo(Number(((Pt = S[U]) == null ? void 0 : Pt.state) || 0) * 1e3 + Number(S[ae.grid].state)) + " now", groups: [{ name: "Energy", ids: [...ft, ae.grid] }] }
    }, xt = [], ct = _.filter((Et) => Et.severity !== "warning" && Et.on);
    return ct.length && xt.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: Rt(ct.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: ct.map((Et) => Et.entity) }] }), zn().forEach((Et) => {
      Et.type !== "summary" ? xt.push({ key: "path:" + Et.path, name: Et.label || Et.path, icon: Et.icon || "mdi:link-variant", colour: "", value: "" }) : !Et.hidden && _t[Et.key] && !(jt.hiddenSums || []).includes(Et.key) && xt.push({ key: Et.key, ...ac[Et.key], ..._t[Et.key] });
    }), xt;
  }
  const Oi = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + ot(t.key) + '" data-k="sum:' + ot(t.key) + '" aria-label="' + ot(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : t.key === "climate" ? ' style="' + As() + '"' : t.colour && fr(t.colour) ? ' style="' + fr(t.colour).slice(1) + '"' : "") + ">" + (t.key === "climate" ? Me : "") + '<div class="tfIcon" aria-hidden="true"' + je(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + ot(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + ot(t.value) + "</div>" : "") + "</div></div>";
  function ha(t) {
    const e = pe();
    jt = { ...jt, favourites: e.includes(t) ? e.filter((o) => o !== t) : [...e, t], favHidden: (jt.favHidden || []).filter((o) => o !== t) }, Nn(), aa();
  }
  function Ur(t) {
    document.querySelector("home-assistant") && (lt.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function xr(t, e) {
    if (t.startsWith("path:")) {
      Ur(t.slice(5));
      return;
    }
    Xo("summary:" + t, e);
  }
  async function kl() {
    const t = (p) => Promise.resolve().then(() => V(p)).catch(() => null), [e, o, r, d] = await Promise.all([
      t({ type: "frontend/get_user_data", key: fp }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), h = (e == null ? void 0 : e.value) || {};
    jt = { favourites: h.favourites ?? null, sources: h.sources, hiddenSums: h.hiddenSums, dash: h.dash, named: h.named, favHidden: h.favHidden, suggest: h.suggest, favSeeded: h.favSeeded }, Rn = (o == null ? void 0 : o.value) || {}, hn = (r == null ? void 0 : r.value) || {}, Pn = Array.isArray(d == null ? void 0 : d.entities) ? d.entities : [], Ne = null, Object.keys(S).length && aa(), xa(), ga = !0, Ba();
  }
  const Ml = "HomeCore";
  async function xa() {
    var r, d, h;
    const t = location.pathname.split("/")[1], e = jt.named || [];
    if (!((d = (r = i()) == null ? void 0 : r.user) != null && d.is_admin) || !t || e.includes(t)) return;
    const o = () => {
      jt = { ...jt, named: [...e, t] }, Nn();
    };
    try {
      const p = (h = await V({ type: "lovelace/dashboards/list" })) == null ? void 0 : h.find((M) => M.url_path === t);
      if (!p || p.mode === "yaml") return;
      if (p.title === Ml) {
        o();
        return;
      }
      const m = await V({ type: "lovelace/config", url_path: t }), g = ((m == null ? void 0 : m.views) || []).flatMap((M) => [...M.cards || [], ...(M.sections || []).flatMap((A) => A.cards || [])]);
      if (!g.length || !g.every((M) => (M == null ? void 0 : M.type) === "custom:move-assistant-card" && M.layout === "test-focus")) return;
      await V({ type: "lovelace/dashboards/update", dashboard_id: p.id, title: Ml }), o();
    } catch {
    }
  }
  let ho = null, No = 0, _s = !1;
  const Ds = (t) => {
    const e = t.split(".")[0], o = ne(t).device_class;
    return dm.includes(e) && (e !== "binary_sensor" || gd.includes(o) || !!yp[o]);
  }, Bs = (t) => t.startsWith("binary_sensor.") ? yp[ne(t).device_class] : null;
  async function Sl() {
    var t;
    if (!(_s || Date.now() - No < 30 * 1e3)) {
      _s = !0, No = Date.now();
      try {
        const e = Object.keys(((t = i()) == null ? void 0 : t.states) || {}).filter(Ds), o = e.length ? await V({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: e }) : null;
        ho = Array.isArray(o) ? o.filter((r) => r.entity_id && r.state != null && r.when) : null;
      } catch {
        ho = null;
      }
      _s = !1, aa();
    }
  }
  function Yr() {
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), o = (d) => {
      if (!S[d.entity_id] || !Ds(d.entity_id) || !di(d.entity_id) || ["unavailable", "unknown"].includes(d.state)) return;
      if (Bs(d.entity_id)) {
        const p = e.get(d.entity_id);
        d.state === "on" ? (!p || d.when > p.when + 1) && e.set(d.entity_id, { ...d, alarm: !0, cleared: null }) : p && !p.cleared && d.when > p.when && (p.cleared = d.when);
        return;
      }
      const h = t.get(d.entity_id);
      (!h || d.when > h.when + 1) && t.set(d.entity_id, d);
    };
    [...ho || []].sort((d, h) => d.when - h.when).forEach(o);
    const r = ho ? No / 1e3 - 5 : 0;
    return Object.keys(S).forEach((d) => {
      var m;
      const h = S[d], p = h.last_changed ? Date.parse(h.last_changed) / 1e3 : 0;
      p > r && o({ entity_id: d, state: h.state, when: p, context_user_id: (m = h.context) == null ? void 0 : m.user_id });
    }), [...t.values(), ...e.values()].sort((d, h) => h.when - d.when).slice(0, pm);
  }
  function Cl(t) {
    var r;
    const e = t.context_user_id && Object.keys(S).find((d) => d.startsWith("person.") && ne(d).user_id === t.context_user_id);
    if (e) return At(e);
    const o = (r = i()) == null ? void 0 : r.user;
    return o && t.context_user_id === o.id ? o.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function yr(t) {
    const e = t.entity_id.split(".")[0], o = String(t.state);
    return e === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[o] || ue(o).toLowerCase() : e === "cover" || e === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[o] || ue(o).toLowerCase() : e === "binary_sensor" ? o === "on" ? "opened" : "closed" : e === "climate" ? o === "off" ? "turned off" : "set to " + ue(o).toLowerCase() : e === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[o] || ue(o).toLowerCase() : e === "alarm_control_panel" ? (xp[o] || ue(o)).toLowerCase() : e === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[o] || ue(o).toLowerCase() : o === "on" ? "turned on" : o === "off" ? "turned off" : ue(o).toLowerCase();
  }
  function Rs(t) {
    const e = t.entity_id, o = t.alarm && Bs(e), r = At(e) + " " + (o ? o[0] : yr(t)), d = o ? We(t.when * 1e3) + (t.cleared ? " · " + o[1] + " since " + We(t.cleared * 1e3) : "") : [Cl(t), We(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (o ? " alert" : "") + '"><div class="tfIcon' + (o ? " alert" : "") + '" aria-hidden="true"' + je(e, vn(e)) + '></div><button class="tfName" type="button" data-more="' + ot(e) + '" data-at="' + Math.round(t.when * 1e3) + '" aria-label="' + ot(r + ", " + d + ". More info") + '"><span class="activityRowName">' + ot(r) + '</span><span class="activityRowMeta">' + ot(d) + "</span></button></div>";
  }
  let $a = null, qi = 0;
  const Ps = [["electricity", "Electricity", 4.3, "kWh"], ["solar", "Solar", 2.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function Ld() {
    var e;
    if (Date.now() - qi < 5 * 60 * 1e3) return;
    qi = Date.now();
    const t = [];
    try {
      const o = ((e = await V({ type: "energy/get_prefs" })) == null ? void 0 : e.energy_sources) || [], r = (d) => o.filter((h) => h.type === d).flatMap((h) => d === "grid" ? (h.flow_from || []).map((p) => p.stat_energy_from) : [h.stat_energy_from]).filter(Boolean);
      for (const [d, h, p] of [["electricity", "Electricity", r("grid")], ["solar", "Solar", r("solar")], ["gas", "Gas", r("gas")], ["water", "Water", r("water")]]) {
        if (!p.length) continue;
        const m = await Promise.all(p.map((g) => Promise.resolve(V({ type: "recorder/statistic_during_period", statistic_id: g, calendar: { period: "day" }, types: ["change"] })).then((M) => Number(M == null ? void 0 : M.change) || 0, () => 0)));
        t.push({ key: d, name: h, id: p[0], ids: p, value: m.reduce((g, M) => g + M, 0), unit: ne(p[0]).unit_of_measurement || (d === "gas" || d === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    $a = t, aa();
  }
  let Io = null, Ns = [];
  function Is() {
    var h;
    const t = Ns = $a != null && $a.length ? $a : Ps.map(([p, m, g, M]) => {
      if (p === "solar") {
        const _ = Object.keys(S).find((B) => B.endsWith("_solar_today") && !B.includes("made_up_energy"));
        _ && Number.isFinite(Number(S[_].state)) && (g = Number(S[_].state));
      }
      const A = "sensor.made_up_energy_" + p;
      return S[A] = { entity_id: A, state: String(g), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: m + " today", unit_of_measurement: M, state_class: "total_increasing" } }, { key: p, name: m, id: A, value: g, unit: M };
    });
    ut.clear(), t.some((p) => p.id === Io) || (Io = t[0].id);
    const e = t.map((p) => {
      const m = Number(p.value).toLocaleString(void 0, { maximumFractionDigits: p.value < 10 ? 2 : 1 }) + " " + p.unit, g = um[p.key], M = p.id === Io;
      return ut.set(p.id, { name: p.name, text: m, icon: g }), '<div class="activityRow tap' + (M ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + ot(p.id) + '" aria-pressed="' + M + '" aria-label="' + ot(p.name + ", " + m) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + je("", g, p.name) + '></div><div><div class="activityRowName">' + ot(p.name) + '</div><div class="activityRowMeta">' + ot(m) + "</div></div></div>";
    }), o = t.find((p) => p.id === Io), r = (((h = xe().opts.energy) == null ? void 0 : h.graph) || "above") === "below", d = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + ot(o.id) + '" role="img" aria-label="' + ot(o.name) + ', last 24 hours"></svg></div>';
    return Aa("dash:energy", 0, "Energy today", e, d, Po().some((p) => p.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (r ? "" : " graphAbove"));
  }
  function Ho(t) {
    const e = D.querySelector(".tfDash-energy"), o = e == null ? void 0 : e.querySelector(".tfDashGraph svg");
    !o || t === Io || (Io = t, e.querySelectorAll("[data-energy-pick]").forEach((r) => {
      const d = r.dataset.energyPick === t;
      r.classList.toggle("picked", d), r.setAttribute("aria-pressed", String(d));
    }), o.dataset.graph = t, o.dataset.drawn = "", La.set("dash:energy", Is()), Zo(!0));
  }
  const Tl = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, Hs = /* @__PURE__ */ new Map();
  async function Zr(t) {
    const e = /* @__PURE__ */ new Date(), o = new Date(e).setHours(0, 0, 0, 0), r = e.getHours(), d = e.getMinutes() / 60, h = Array.from({ length: 24 }, (m, g) => g <= r ? 0 : null);
    if (!t.ids) {
      const m = Tl[t.key] || Tl.electricity, g = m.map((A, _) => _ < r ? A : _ === r ? A * d : 0), M = g.reduce((A, _) => A + _, 0) || 1;
      return h.map((A, _) => A == null ? null : t.value * g[_] / M);
    }
    const p = Hs.get(t.id);
    if (p && p.day === o && Date.now() - p.at < 5 * 60 * 1e3) return p.hours;
    try {
      const m = await V({ type: "recorder/statistics_during_period", start_time: new Date(o).toISOString(), end_time: e.toISOString(), statistic_ids: t.ids, period: "hour", types: ["change"] });
      t.ids.forEach((A) => ((m == null ? void 0 : m[A]) || []).forEach((_) => {
        const B = typeof _.start == "number" ? _.start : Date.parse(_.start), Y = new Date(B).getHours();
        B >= o && Y < r && (h[Y] += Number(_.change) || 0);
      }));
      const g = new Date(e).setMinutes(0, 0, 0), M = await Promise.all(t.ids.map((A) => Promise.resolve(V({ type: "recorder/statistic_during_period", statistic_id: A, fixed_period: { start_time: new Date(g).toISOString(), end_time: e.toISOString() }, types: ["change"] })).then((_) => Number(_ == null ? void 0 : _.change) || 0, () => 0)));
      h[r] = M.reduce((A, _) => A + _, 0);
    } catch {
    }
    return Hs.set(t.id, { at: Date.now(), day: o, hours: h }), h;
  }
  async function kr(t, e) {
    const o = await Zr(e);
    if (!t.isConnected) return;
    const r = Math.max(120, t.clientWidth || 260), d = Math.max(60, t.clientHeight || 130), h = 18, p = d - 18, m = r / 24, g = m * 0.72, M = (/* @__PURE__ */ new Date()).getHours(), A = o.map((G) => G ?? 0), _ = Math.max(0, ...A), B = (G) => p - (_ > 0 ? G / _ * (p - h) : 0), Y = (G) => G.toLocaleString(void 0, { maximumFractionDigits: G < 10 ? 2 : 1 }) + " " + e.unit, $ = (G) => String(G).padStart(2, "0") + ":00", H = _ > 0 ? A.indexOf(_) : -1;
    t.setAttribute("viewBox", "0 0 " + r + " " + d), t.setAttribute("aria-label", e.name + " today by the hour: " + Y(e.value) + (H >= 0 ? ", most " + Y(_) + " at " + $(H) : "")), t.innerHTML = [h, (h + p) / 2, p].map((G) => '<line x1="0" x2="' + r + '" y1="' + G + '" y2="' + G + '" stroke="var(--line)" stroke-width="1"/>').join("") + o.map((G, j) => G > 0 ? '<rect x="' + (j * m + (m - g) / 2).toFixed(1) + '" y="' + B(G).toFixed(1) + '" width="' + g.toFixed(1) + '" height="' + (p - B(G)).toFixed(1) + '" rx="2" fill="' + (j === M ? "var(--primary)" : "var(--text)") + '"' + (j === M ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((G) => '<text x="' + (G * m).toFixed(1) + '" y="' + (d - 3) + '">' + String(G).padStart(2, "0") + "</text>").join("") + (H >= 0 ? '<text x="0" y="11">Most: ' + ot(Y(_)) + " at " + $(H) + "</text>" : "");
  }
  function Wi(t) {
    var e;
    (e = window.matchMedia) != null && e.call(window, "(prefers-reduced-motion: reduce)").matches || t.querySelectorAll("rect").forEach((o, r) => o.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: r * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function Gn(t) {
    var r;
    if ((r = window.matchMedia) != null && r.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [e, o] = t.querySelectorAll("path");
    jp(t, o, [e].filter(Boolean));
  }
  let mo = null, Fo = 0;
  const di = (t) => !t.startsWith("light.") || fm.includes((Xt.get(t) || "").toLowerCase()), Oo = () => Math.max(2, Ja((D == null ? void 0 : D.clientWidth) || 0).n), go = (t) => {
    const e = f(t);
    return e.sections.map((o, r) => o && (e.parts || [])[r]).filter(Boolean);
  }, Ll = (t) => go(t).slice(0, Sr(t) - 1);
  function Al(t) {
    const e = xe().tiles;
    if (e) return e.filter((r) => S[r] || Jt(r));
    if (!mo) {
      const r = (d) => {
        var h;
        return (((h = S[d]) == null ? void 0 : h.state) === "on" ? 1e6 : 0) + (Vt[d] || 0);
      };
      mo = {
        lights: ae.rooms.flatMap((d) => d.lights).filter((d) => {
          var h;
          return di(d) && ((h = S[d]) == null ? void 0 : h.state) !== "unavailable";
        }).sort((d, h) => r(h) - r(d) || At(d).localeCompare(At(h))),
        climates: ae.rooms.flatMap((d) => d.actions.filter((h) => h.startsWith("climate.")))
      };
    }
    const o = mo.climates.filter((r) => S[r]).slice(0, t > 3 ? 2 : 1);
    return [...mo.lights.filter((r) => S[r]).slice(0, Math.max(0, t - o.length)), ...o];
  }
  const Kr = () => {
    var e, o;
    const t = (e = i()) == null ? void 0 : e.user;
    return (t == null ? void 0 : t.name) || ((o = Object.values(S).find((r) => {
      var d;
      return r.entity_id.startsWith("person.") && (t == null ? void 0 : t.id) && ((d = r.attributes) == null ? void 0 : d.user_id) === t.id;
    })) == null ? void 0 : o.attributes.friendly_name) || "";
  }, qo = () => {
    const t = (/* @__PURE__ */ new Date()).getHours(), e = Kr();
    return (t >= 5 && t < 12 ? "Good morning" : t >= 12 && t < 18 ? "Good afternoon" : "Good evening") + (e ? ", " + e : "");
  }, ci = (t, e, o, r) => (d) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + e + '" aria-label="' + o + '">' + (r ? '<div class="activityHeader">' + (e === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + o + "</button>" : '<div class="activityTitle">' + o + "</div>") + "</div>" : "") + '<div class="activityRows">' + d + "</div></section>";
  function pi(t, e) {
    var h, p;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + (E ? '<span class="tfGreeting">' + ot(qo()) + "</span>" : "") + ot(((p = (h = i()) == null ? void 0 : h.config) == null ? void 0 : p.location_name) || "Home") + "</h1>" }), e.length && t.push({ key: "sums", wrap: (m) => '<div class="tfDashBarRow" data-tf data-k="sums">' + ci("tfDash-bar", "sums-bar", "Summaries", !1)(m).replace(" data-tf", "") + "</div>", tiles: e.map((m) => ({ key: "sum:" + m.key, html: Oi(m) })) }), !E && zt().length && t.push({ key: "areas", html: Ht(0) });
    const o = Ra();
    if (o.length && t.push({ key: "favs", wrap: ci("tfDash-favs", "favs", "Favourites", !0), tiles: o.map((m) => ({ key: "fav:" + m, html: le(m, { area: !0 }) })) }), E)
      return Fo = Oo(), Al(0).forEach((m) => t.push({
        key: "dash:tile:" + m,
        wrap: (g) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + ot(m) + '">' + g + "</div>",
        tiles: [{ key: m, html: Yt(Jt(m), m) }]
      })), t;
    const r = Yr();
    t.push({ key: "dash:act", html: Aa("dash:act", 0, "Activity", r.length ? r.map(Rs) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: Is() });
    const d = Oo();
    return Fo = d, Al(d >= 3 ? d : d * 2).forEach((m) => t.push({
      key: "dash:tile:" + m,
      wrap: (g) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + ot(m) + '">' + g + "</div>",
      tiles: [{ key: m, html: Tt(m) ? Yt(Jt(m), m) : ua(m, !1, Ll(m)) }]
    })), Sl(), Ld(), t;
  }
  const vo = 252, Re = 16, El = 200, _l = Math.round(vo * 1.25), Ad = 60, Pa = Ad + Re, Mr = 3, Un = {
    title: "The name",
    sums: "Summaries",
    wx: "Weather",
    areas: "Areas",
    favs: "Favourites",
    act: "Activity",
    energy: "Energy today",
    avg: "Compared to average",
    aq: "Air quality",
    pollen: "Pollen",
    radar: "Rain radar",
    hourly: "Next hours",
    sun: "Sun",
    moon: "Moon",
    uv: "UV index",
    humidity: "Humidity",
    pressure: "Pressure",
    wind: "Wind",
    visibility: "Visibility"
  }, Fs = ["wx", "favs", "act", "energy", "avg"], $r = ["XS", "S", "M", "L", "XL"], Os = $r.length, ji = ["Narrow", "Wide", "Really wide"], qs = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4, hourly: 4, sun: 4, moon: 4, uv: 4, humidity: 4, pressure: 4, wind: 4, visibility: 4 }, Dl = (t) => !t.includes(".") || !S[t] || t.startsWith("light.") && Bo(t) ? Os : Math.min(Os, go(t).length + 1), Sr = (t) => {
    const e = xe().opts[t] || {}, o = Dl(t), r = Number(e.h) || (e.tall ? 5 : qs[t] || Bl);
    return Math.max(1, Math.min(o, r));
  }, Bl = 2, Xr = 90, Xa = 56, Fe = (t) => {
    var e;
    return Un[t] || (t.startsWith("room:") ? ((e = Ct.find((o) => "room:" + o.id === t)) == null ? void 0 : e.name) || "Area" : At(t));
  }, Ed = 409, _d = 128;
  let va = !1, de = null, sa = null, Jr = !1, Wo = /* @__PURE__ */ new Map(), Qr = 0, jo = 0;
  const Tn = ["title", "sums"], Ja = (t) => {
    const e = Math.max(1, Math.floor((t + Re) / (El + Re)));
    return { n: e, w: Math.max(1, Math.min(_l, Math.floor((t - (e - 1) * Re) / e))) };
  }, Ln = () => Ct.map((t) => "room:" + t.id);
  function Ws() {
    const t = Ln();
    return {
      cells: {},
      spans: { favs: 2 },
      hidden: Object.keys(Un).filter((e) => !["title", "sums", "favs"].includes(e)),
      opts: { favs: { h: 5 }, ...Object.fromEntries(t.map((e) => [e, { h: 5 }])) },
      tiles: t,
      known: Zt,
      areasOff: []
    };
  }
  const xe = () => E ? Ws() : Dd(), Dd = () => {
    const t = { cells: {}, spans: {}, hidden: [], opts: {}, ...jt.dash || {} }, e = Zt.filter((o) => !(t.known || []).includes(o) && !t.hidden.includes(o));
    return e.length ? { ...t, hidden: [...t.hidden, ...e] } : t;
  };
  function Vi(t) {
    E || (jt = { ...jt, dash: { ...t, known: Zt } }, Nn());
  }
  function ma() {
    const t = (e) => D.querySelector(e);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", mn.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", mn.avg, 2],
      ...Zt.map((e) => [e, mn[e], Ls[e] || 1]),
      ...[...D.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => [e.dataset.k, e, 1, !0])
    ].filter(([, e]) => e == null ? void 0 : e.isConnected).map(([e, o, r, d = !1]) => ({ key: e, el: o, span: r, tile: d }));
  }
  const zi = (t, e, o) => {
    var r;
    if (t.span === "full") return e;
    if (t.span === "areas") {
      const d = Math.ceil((Ed + Math.max(0, zt().length - 1) * (_d + Re) + Re) / (o + Re));
      return Math.max(Math.min(e, 2), Math.min(d, e - (((r = xe().cells.areas) == null ? void 0 : r.col) || 0)));
    }
    return Math.min(e, xe().spans[t.key] ?? t.span);
  }, ts = (t) => Sr(t.key);
  function ui(t, e, o = null) {
    const r = xe().cells, d = t.every((m) => !r[m.key] || r[m.key].col + m.cols <= e), h = (m) => r[m.key] || { row: 1e9, col: 0 };
    return (() => {
      const m = /* @__PURE__ */ new Set(), g = /* @__PURE__ */ new Map(), M = (H, G, j, ft) => {
        for (let U = G; U < G + ft; U++) for (let _t = H; _t < H + j; _t++) if (m.has(_t + "," + U)) return !1;
        return !0;
      }, A = (H, G, j) => {
        for (let ft = j; ft < j + H.rows; ft++) for (let U = G; U < G + H.cols; U++) m.add(U + "," + ft);
        g.set(H.key, { col: G, row: j, cols: H.cols, rows: H.rows });
      }, _ = (H, G, j) => {
        for (G = Math.max(0, Math.min(e - H.cols, G)), j = Math.max(0, j); !M(G, j, H.cols, H.rows); ) j++;
        A(H, G, j);
      }, B = (H) => {
        for (let G = 0; ; G++) for (let j = 0; j <= e - H.cols; j++) if (M(j, G, H.cols, H.rows)) {
          A(H, j, G);
          return;
        }
      };
      o && _(o, de.col, de.row);
      const Y = t.filter((H) => H !== o), $ = (H, G) => h(H).row - h(G).row || h(H).col - h(G).col;
      return d ? (Y.filter((H) => r[H.key]).sort($).forEach((H) => _(H, r[H.key].col, r[H.key].row)), Y.filter((H) => !r[H.key]).forEach(B), g) : ([...Y].sort($).forEach(B), g);
    })();
  }
  function Rl(t, e) {
    const o = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map(), d = (h, p, m) => {
      for (let g = p; g < p + m.rows; g++) for (let M = h; M < h + m.cols; M++) if (o.has(M + "," + g)) return !1;
      return !0;
    };
    return t.forEach((h) => {
      for (let p = 0; ; p++) {
        let m = 0;
        for (; m <= e - h.cols && !d(m, p, h); ) m++;
        if (!(m > e - h.cols)) {
          for (let g = p; g < p + h.rows; g++) for (let M = m; M < m + h.cols; M++) o.add(M + "," + g);
          r.set(h.key, { col: m, row: p, cols: h.cols, rows: h.rows });
          return;
        }
      }
    }), r;
  }
  function bo() {
    const t = xe(), e = new Set(t.hidden), o = ma().filter((p) => !Tn.includes(p.key));
    let r = Wo;
    if (!r.size) {
      const p = t.pegs || 4, m = o.filter((g) => !e.has(g.key));
      m.forEach((g) => {
        g.cols = zi(g, p, vo), g.rows = ts(g) ?? Bl;
      }), r = ui(m, p);
    }
    const d = (p) => !e.has(p.key) && r.get(p.key) || { row: 1e9, col: 0 };
    o.sort((p, m) => d(p).row - d(m).row || d(p).col - d(m).col);
    const h = (t.phone || []).map((p) => o.find((m) => m.key === p && !e.has(p))).filter(Boolean);
    return [...h, ...o.filter((p) => !h.includes(p))];
  }
  const Bd = () => {
    const t = bo();
    t.forEach((e, o) => e.el.style.setProperty("--o", String(3 + o))), An([...ma().filter((e) => Tn.includes(e.key)), ...t].map((e) => e.el));
  };
  function An(t) {
    if (de) return;
    const e = n.activeElement;
    let o = null;
    for (const r of new Set(t.map((d) => {
      for (; d && d.parentElement !== D; ) d = d.parentElement;
      return d;
    }).filter(Boolean))) {
      const d = o ? o.nextSibling : D.querySelector(":scope > [data-tf]");
      if (r !== d)
        try {
          D.moveBefore ? D.moveBefore(r, d) : D.insertBefore(r, d);
        } catch {
          D.insertBefore(r, d);
        }
      o = r;
    }
    e && e !== n.activeElement && e.isConnected && e.focus({ preventScroll: !0 });
  }
  const wo = (t, e) => Vi({ ...t, cells: e, pegs: Ja(D.clientWidth).n });
  function Na() {
    var ft;
    if (!k || !D) return;
    const t = D.clientWidth, e = t < 2 * vo + Re, o = b.classList.contains("tfDash");
    E && (va = !1), b.classList.toggle("tfOverview", E);
    const { n: r, w: d } = e ? { n: 2, w: Math.floor((t - Re) / 2) } : Ja(t);
    te.classList.add("tfPegs"), te.style.setProperty("--peg-n", r), te.style.setProperty("--peg-w", d + "px");
    const h = new Set(xe().hidden);
    Zt.forEach((U) => {
      var _t;
      return (_t = mn[U]) == null ? void 0 : _t.classList.toggle("tfNotAdded", h.has(U) && !(de != null && de.fromTray && de.key === U));
    }), Ue(), b.classList.toggle("tfBoard", o), b.classList.toggle("tfEditing", o && va && !e);
    const p = u("dashEditNav");
    p && (p.hidden = !o || e || E, p.classList.toggle("active", va), p.setAttribute("aria-pressed", String(va)), p.setAttribute("aria-label", va ? "Done editing" : "Edit the dashboard"), p.title = va ? "Done" : "Edit", p.innerHTML = va ? im : wp);
    const m = o ? ma() : [];
    if (!o) {
      D.style.height = "", D.querySelectorAll(".tfBoardItem").forEach((U) => {
        U.classList.remove("tfBoardItem", "tfBoardHidden"), U.style.left = U.style.top = U.style.width = U.style.height = "";
      }), (ft = D.querySelector(".tfDash-act > .activityRows")) == null || ft.style.removeProperty("max-height"), es(!1), b.classList.contains("tfDash") && Bd(), $e();
      return;
    }
    if (E) {
      js(m, t, e);
      return;
    }
    D.style.setProperty("--peg-w", d + "px");
    const g = new Set(xe().hidden), M = d + Re;
    de != null && de.fromTray && g.delete(de.key), m.forEach((U) => U.el.classList.toggle("tfBoardHidden", g.has(U.key)));
    const A = m.filter((U) => !g.has(U.key) && getComputedStyle(U.el).display !== "none");
    let _ = 0;
    A.filter((U) => Tn.includes(U.key)).forEach((U) => {
      U.el.classList.add("tfBoardItem"), Object.assign(U.el.style, { width: t + "px", height: "", left: "0px", top: _ + "px" });
      const _t = U.key === "sums" && U.el.querySelector(".tfDash-bar"), xt = _t ? _t.querySelectorAll(".activityRow").length : 0;
      _t && (_t.style.maxWidth = "none");
      for (let ct = 1; _t && ct <= xt && (_t.style.setProperty("--bar-cols", String(Math.ceil(xt / ct))), !(_t.offsetWidth <= t)); ct++)
        ;
      _t && (_t.style.maxWidth = ""), _ += U.el.offsetHeight + Re;
    }), jo = _;
    const B = A.filter((U) => !Tn.includes(U.key));
    B.forEach((U) => {
      U.cols = zi(U, r, d), U.el.classList.add("tfBoardItem"), U.el.style.width = (U.cols === r ? t : U.cols * d + (U.cols - 1) * Re) + "px", U.el.style.height = "", U.rows = ts(U) ?? Math.max(1, Math.ceil((U.el.offsetHeight + Re - 6) / Pa));
    });
    const Y = de && B.find((U) => U.key === de.key), $ = e && bo().map((U) => U.key), H = (U) => $.includes(U.key) ? $.indexOf(U.key) : -1, G = e ? Rl([...B].sort((U, _t) => H(U) - H(_t)), r) : ui(B, r, Y);
    G.forEach((U) => Object.assign(U, { x: U.cols === r ? 0 : U.col * M, y: jo + U.row * Pa, w: U.cols === r ? t : U.cols * d + (U.cols - 1) * Re, h: U.rows * Pa - Re })), B.forEach((U) => {
      const _t = G.get(U.key);
      U.el.style.height = _t.h + "px", U.el.dataset.rows = e && U.key === "wx" ? 5 : Sr(U.key), U.el.toggleAttribute("data-narrow", !e && _t.cols === 1 && r > 1), U.el.dataset.cols = _t.cols, U.el.classList.contains("tfDac") && U.el.style.setProperty("--tf-dac-pad", _t.h - Xr + "px"), !(U === Y && !de.fromTray) && (U.el.style.left = _t.x + "px", U.el.style.top = _t.y + "px");
    }), e || (Wo = G), An([...A.filter((U) => Tn.includes(U.key)), ...B.slice().sort((U, _t) => G.get(U.key).row - G.get(_t.key).row || G.get(U.key).col - G.get(_t.key).col)].map((U) => U.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([U, _t]) => {
      const xt = G.get(U), ct = xt && D.querySelector(_t), Pt = ct == null ? void 0 : ct.querySelector(":scope > .activityRows"), Et = ct == null ? void 0 : ct.querySelector(":scope > .activityHeader");
      if (!Pt || !Et) return;
      const ie = Pt.getBoundingClientRect().top - ct.getBoundingClientRect().top, Te = xt.rows === 1 ? xt.h : Math.floor(xt.h - ie - parseFloat(getComputedStyle(ct).paddingBottom)), Oa = Math.max(1, Math.floor(Te / Xa));
      Pt.style.setProperty("--fill-row", (Te / Oa).toFixed(2) + "px"), Pt.style.maxHeight = Te + "px";
    }), Qr = Math.max(0, ...[...G.values()].map((U) => U.row + U.rows));
    let j = jo + Qr * Pa - Re;
    j = es(va && !e, B, G, j, r, d), D.style.height = j + "px", requestAnimationFrame(() => b.classList.add("tfBoardReady")), m.forEach((U) => Vs.observe(U.el)), Zo(), $e();
  }
  const ya = { gap: 20, phoneGap: 16, inner: 16, col: 252, colMin: 200, cols: 5, row: 337, nameGap: 28, sumsGap: 16 }, Pl = (t) => t.classList.toggle("hcMore", t.scrollHeight - t.scrollTop - t.clientHeight > 1);
  function js(t, e, o) {
    const r = new Set(xe().hidden);
    t.forEach((ct) => ct.el.classList.toggle("tfBoardHidden", r.has(ct.key)));
    const d = t.filter((ct) => !r.has(ct.key) && getComputedStyle(ct.el).display !== "none"), h = o ? ya.phoneGap : ya.gap, p = o ? 2 : Math.max(2, Math.min(ya.cols, Math.floor((e + h) / (ya.colMin + h)))), m = o ? Math.floor((e - h) / 2) : Math.min(ya.col, Math.floor((e - (p - 1) * h) / p)), g = (ct) => ct * m + (ct - 1) * (ct === 2 ? ya.inner : h), M = (ct) => ct * (m + h) - (p >= 3 && ct >= 2 ? h - ya.inner : 0), A = p * m + (p - 1) * h - (p >= 3 ? h - ya.inner : 0);
    let _ = 0;
    const B = d.filter((ct) => Tn.includes(ct.key)).sort((ct, Pt) => Tn.indexOf(ct.key) - Tn.indexOf(Pt.key));
    B.forEach((ct) => {
      ct.el.classList.add("tfBoardItem"), ct.el.toggleAttribute("data-narrow", !1), Object.assign(ct.el.style, { width: (ct.key === "title" ? e : A) + "px", height: "", left: "0px", top: _ + "px" });
      const Pt = ct.key === "sums" && ct.el.querySelector(".tfDash-bar>.activityRows"), Et = Pt ? Pt.children.length : 0;
      if (Pt && (Pt.classList.remove("hcBarRows"), !o && Pt.scrollWidth > Pt.clientWidth + 1))
        for (let ie = 2; ie <= Et && (Pt.classList.add("hcBarRows"), Pt.style.setProperty("--bar-cols", String(Math.ceil(Et / ie))), !(Pt.scrollWidth <= Pt.clientWidth + 1)); ie++)
          ;
      _ += ct.el.offsetHeight + (ct.key === "title" ? ya.nameGap : ya.sumsGap);
    });
    const Y = ["favs", ...Ln()], $ = d.filter((ct) => !Tn.includes(ct.key)).sort((ct, Pt) => (Y.indexOf(ct.key) + 1 || 99) - (Y.indexOf(Pt.key) + 1 || 99)), H = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Map();
    $.forEach((ct) => {
      const Pt = Math.min(p, ct.key === "favs" ? 2 : 1);
      for (let Et = 0; ; Et++) {
        const ie = [...Array(p - Pt + 1).keys()].find((Te) => [...Array(Pt).keys()].every((Oa) => !H.has(Et + "," + (Te + Oa))));
        if (ie != null) {
          [...Array(Pt).keys()].forEach((Te) => H.add(Et + "," + (ie + Te))), G.set(ct.key, { r: Et, c: ie, cols: Pt });
          break;
        }
      }
    });
    const j = Math.max(0, ...[...G.values()].map((ct) => ct.r + 1)), ft = [];
    $.forEach((ct) => {
      const Pt = G.get(ct.key);
      ct.el.classList.add("tfBoardItem"), ct.el.dataset.rows = 5, ct.el.dataset.cols = Pt.cols, ct.el.toggleAttribute("data-narrow", !1), Object.assign(ct.el.style, { width: g(Pt.cols) + "px", height: o ? "" : ya.row + "px" });
    }), o && $.forEach((ct) => {
      const Pt = G.get(ct.key);
      ft[Pt.r] = Math.max(ft[Pt.r] || 0, ct.el.offsetHeight);
    }), $.forEach((ct, Pt) => ct.el.style.setProperty("--o", String(3 + Pt)));
    let U = _;
    const _t = [];
    for (let ct = 0; ct < j; ct++)
      _t[ct] = U, U += (o ? ft[ct] || 0 : ya.row) + h;
    $.forEach((ct) => {
      const Pt = G.get(ct.key);
      Object.assign(ct.el.style, { left: M(Pt.c) + "px", top: _t[Pt.r] + "px", height: (o ? ft[Pt.r] : ya.row) + "px" });
    }), D.style.height = (j ? U - h : _) + "px", An([...B, ...$.slice().sort((ct, Pt) => G.get(ct.key).r - G.get(Pt.key).r || G.get(ct.key).c - G.get(Pt.key).c)].map((ct) => ct.el)), es(!1);
    const xt = D.querySelector(".tfDash-favs>.activityRows");
    xt && (xt.classList.add("hcFadeList"), Pl(xt)), requestAnimationFrame(() => b.classList.add("tfBoardReady")), t.forEach((ct) => Vs.observe(ct.el)), $e();
  }
  const yn = () => {
    Jr || (Jr = !0, requestAnimationFrame(() => {
      Jr = !1, Na();
    }));
  }, Vs = new ResizeObserver(() => {
    de || yn();
  });
  function Rd(t, e, o) {
    const r = o + Re, d = t * o + (t - 1) * Re, h = e * Pa - Re, p = Re / 2, m = r / Math.max(1, Math.round(r / (Pa / 4))), g = Pa / 4, M = 6;
    let A = "";
    for (let _ = 0; _ <= t; _++) for (let B = 0; B <= e; B++) {
      const Y = _ * r - p, $ = B * Pa - p;
      A += "M" + (Y - M) + " " + $ + "H" + (Y + M) + "M" + Y + " " + ($ - M) + "V" + ($ + M);
    }
    return '<svg width="' + d + '" height="' + h + '" viewBox="0 0 ' + d + " " + h + '"><defs><pattern id="tfGridDots" patternUnits="userSpaceOnUse" x="' + -p + '" y="' + -p + '" width="' + m.toFixed(3) + '" height="' + g + '"><circle cx="0" cy="0" r="1.4"></circle><circle cx="' + m.toFixed(3) + '" cy="0" r="1.4"></circle><circle cx="0" cy="' + g + '" r="1.4"></circle><circle cx="' + m.toFixed(3) + '" cy="' + g + '" r="1.4"></circle></pattern></defs><rect class="tfGridDots" x="' + -p + '" y="' + -p + '" width="' + (d + Re) + '" height="' + (h + Re) + '" fill="url(#tfGridDots)"></rect><path class="tfGridCross" d="' + A + '"></path></svg>';
  }
  function es(t, e = [], o = /* @__PURE__ */ new Map(), r = 0, d = 1, h = vo) {
    D.querySelectorAll(".tfEditChips").forEach((A) => {
      (!t || !A.closest(".tfBoardItem")) && A.remove();
    }), D.querySelectorAll(".tfFavHides").forEach((A) => A.remove()), D.querySelectorAll(".tfBoardItem").forEach((A) => [...A.children].forEach((_) => {
      _.classList.contains("tfEditChips") || _.toggleAttribute("inert", t);
    }));
    let p = D.querySelector(".tfBoardCells"), m = D.querySelector(".tfBoardLand");
    if (!t)
      return p == null || p.remove(), m == null || m.remove(), Yn(), r;
    const g = Qr + Mr;
    if (p || (p = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), p.setAttribute("aria-hidden", "true"), D.prepend(p)), p.style.top = jo + "px", p.dataset.size !== d + "x" + g + "x" + h && (p.dataset.size = d + "x" + g + "x" + h, p.innerHTML = Rd(d, g, h)), r = Math.max(r, jo + g * Pa - Re), e.forEach((A) => {
      const _ = A.el;
      !_ || _.querySelector(":scope > .tfEditChips") || _.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + oc + '</span><button class="tfEditChip" type="button" data-board-more="' + ot(A.key) + '" aria-label="' + ot(Fe(A.key)) + ' options" aria-haspopup="menu">' + nm + "</button></div>");
    }), de && o.has(de.key)) {
      m || (m = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), D.appendChild(m));
      const A = o.get(de.key);
      Object.assign(m.style, { left: A.x + "px", top: A.y + "px", width: A.w + "px", height: A.h + "px" });
    } else m == null || m.remove();
    const M = D.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (M) {
      const A = M.getBoundingClientRect();
      M.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...M.querySelectorAll('[data-k^="fav:"]')].map((_) => {
        const B = _.getBoundingClientRect(), Y = _.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + ot(Y) + '" aria-label="Hide ' + ot(At(Y)) + ' from the dashboard" style="left:' + Math.round(B.right - A.left - 42) + "px;top:" + Math.round(B.top - A.top + (B.height - 32) / 2) + 'px">' + gp + "</button>";
      }).join("") + "</div>");
    }
    return r;
  }
  let Vo = "";
  function zs(t) {
    va = t, t || (de = null, Qa = En = !1, Yn()), Na(), t ? Vo = JSON.stringify(jt) : Vo && JSON.stringify(jt) !== Vo && kn("Changes saved");
  }
  function Gi(t, e) {
    var H, G;
    Yn();
    const o = Wo.get(t), { n: r } = Ja(D.clientWidth), d = xe(), h = d.spans[t] ?? (Tt(t) ? 1 : 2);
    if (!o) return;
    const p = o.cols >= r, m = (j, ft, U) => '<button type="button" role="menuitem" data-board-act="' + j + '"' + (U ? " disabled" : "") + ">" + ft + "</button>", g = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    g.setAttribute("role", "menu"), g.setAttribute("aria-label", Fe(t) + " options");
    const M = D.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]'), A = Dl(t), _ = Sr(t), B = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + $r.map((j, ft) => '<button type="button" role="menuitemradio" aria-checked="' + (ft + 1 === _) + '" aria-label="' + j + ", " + (ft + 1) + (ft ? " rows" : " row") + '" data-board-act="h:' + (ft + 1) + '"' + (ft < A ? "" : " disabled") + ">" + j + "</button>").join("") + "</div></div>", Y = Fs.includes(t) || Tt(t) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + ji.map((j, ft) => '<button type="button" role="menuitemradio" aria-checked="' + (ft + 1 === Math.min(h, r)) + '" aria-label="' + j + ", " + (ft + 1) + (ft ? " columns" : " column") + '" data-board-act="w:' + (ft + 1) + '"' + (ft < r ? "" : " disabled") + ">" + j + "</button>").join("") + "</div></div>" : "";
    g.innerHTML = B + Y + (t === "energy" ? m("graph", (((H = d.opts.energy) == null ? void 0 : H.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + m("left", "Move left", p || o.col === 0) + m("right", "Move right", p || o.col + o.cols >= r) + m("up", "Move up", o.row <= 0) + m("down", "Move down") + (M ? m("remove", "Remove") : m("hide", "Hide")), D.appendChild(g);
    const $ = Math.min(o.x + o.w - g.offsetWidth, D.clientWidth - g.offsetWidth);
    Object.assign(g.style, { left: Math.max(0, $) + "px", top: o.y + 28 + "px" }), sa = { key: t, menu: g, opener: e }, (G = g.querySelector("button:not([disabled])")) == null || G.focus();
  }
  function Yn(t) {
    if (!sa) return;
    const { menu: e, opener: o } = sa;
    sa = null, e.remove(), t && (o == null || o.focus());
  }
  const zo = () => Object.fromEntries([...Wo].map(([t, e]) => [t, { col: e.col, row: e.row }]));
  function Ui(t, e) {
    var m, g;
    if (e === "remove") {
      Yn(), ka(t);
      return;
    }
    const o = jt, r = xe(), d = zo(), h = d[t] || { col: 0, row: 0 };
    e.startsWith("w:") && (r.spans = { ...r.spans, [t]: e === "w:full" ? "full" : Number(e.slice(2)) }), e.startsWith("h:") && (r.opts = { ...r.opts, [t]: { ...r.opts[t] || {}, h: Number(e.slice(2)), tall: void 0 } }), e === "graph" && (r.opts = { ...r.opts, energy: { ...r.opts.energy || {}, graph: (((m = r.opts.energy) == null ? void 0 : m.graph) || "above") === "above" ? "below" : "above" } }), e === "left" && (d[t] = { ...h, col: h.col - 1 }), e === "right" && (d[t] = { ...h, col: h.col + 1 }), e === "up" && (d[t] = { ...h, row: h.row - 1 }), e === "down" && (d[t] = { ...h, row: h.row + 1 }), e === "hide" && (r.hidden = [.../* @__PURE__ */ new Set([...r.hidden, t])]), ["left", "right", "up", "down"].includes(e) && (de = { key: t, col: d[t].col, row: d[t].row }), wo(r, d), de && (Na(), de = null, wo(xe(), zo()));
    const p = /^[hw]:/.test(e) && !Va() && (sa == null ? void 0 : sa.menu.querySelector('[data-board-act="' + CSS.escape(e) + '"]'));
    if (p) {
      const M = sa;
      p.parentElement.querySelectorAll("[aria-checked]").forEach((A) => A.setAttribute("aria-checked", String(A === p))), setTimeout(() => {
        sa === M && Yn();
      }, Ze.tabs.dur);
    } else Yn();
    e === "graph" && (La.delete("dash:energy"), aa()), e.startsWith("h:") && t.includes(".") && aa(), Na(), e !== "hide" ? (g = D.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || g.focus() : kn(Fe(t) + " hidden", Zn(o));
  }
  const fi = (t) => {
    var e;
    return Zt.includes(t) && !(((e = jt.dash) == null ? void 0 : e.cells) || {})[t] ? " added" : " put back";
  };
  function Ee(t) {
    const e = xe(), o = Fe(t) + fi(t);
    Vi({ ...e, hidden: e.hidden.filter((r) => r !== t) }), Na(), kn(o);
  }
  const xo = () => xe().tiles || [...D.querySelectorAll(".tfDashTiles > [data-k]")].map((t) => t.dataset.k).filter((t) => !xe().hidden.includes(t));
  function Cr(t, e) {
    const o = xe();
    wo({ ...o, tiles: t, hidden: o.hidden.filter((r) => !r.includes(".")) }, e), aa(), $e();
  }
  const as = (t) => {
    Cr([...xo().filter((e) => e !== t), t], zo()), kn(Fe(t) + " added"), Uo(t);
  }, ka = (t) => {
    const e = jt, o = zo();
    delete o[t], Cr(xo().filter((r) => r !== t), o), kn(Fe(t) + " removed", Zn(e));
  };
  let Tr = 0;
  function kn(t, e = null) {
    var p;
    const o = u("toast");
    if (!o) return;
    if (Rf(o, t), e) {
      const m = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      m.addEventListener("click", () => {
        clearTimeout(Tr), o.classList.remove("show", "withAction"), e();
      }), o.appendChild(m);
    }
    const r = b.getBoundingClientRect(), d = (p = n.querySelector(".bottomNav")) == null ? void 0 : p.getBoundingClientRect(), h = Se.classList.contains("open") && !Ma ? Math.min(r.right, Se.getBoundingClientRect().left) : r.right;
    o.style.left = (r.left + h) / 2 + "px", o.style.bottom = (d != null && d.height ? window.innerHeight - d.top + 12 : 26) + "px", o.classList.add("tfToast", "show"), o.classList.toggle("withAction", !!e), Pf(o), clearTimeout(Tr), Tr = setTimeout(() => o.classList.remove("show", "withAction"), e ? 5e3 : Ze.confirm.stay);
  }
  const Nl = 700, Il = 1e3, Ia = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  Ia.setAttribute("role", "tooltip"), Ia.setAttribute("aria-hidden", "true"), b.appendChild(Ia);
  let ns = null, Lr = 0, Yi = 0, Gs = -1 / 0;
  const Zi = (t) => {
    if (t.nodeType !== 1) return !1;
    const e = getComputedStyle(t);
    return e.textOverflow === "ellipsis" && t.scrollWidth > t.clientWidth + 1 || e.webkitLineClamp !== "none" && t.scrollHeight > t.clientHeight + 1;
  }, Ar = (t) => {
    for (let e = t; e && e !== b; e = e.parentElement) if (Zi(e)) return e;
    return null;
  };
  function Hl(t, e) {
    clearTimeout(Lr), clearTimeout(Yi);
    const o = () => {
      if (!t.isConnected) return;
      ns = t, Ia.textContent = e, Ia.hidden = !1;
      const r = t.getBoundingClientRect(), d = Ia.getBoundingClientRect(), h = r.top - d.height - 8 >= 8 ? r.top - d.height - 8 : r.bottom + 8;
      Ia.style.left = Math.max(8, Math.min(window.innerWidth - d.width - 8, r.left + r.width / 2 - d.width / 2)) + "px", Ia.style.top = h + "px";
    };
    !Ia.hidden || performance.now() - Gs < Il ? o() : Lr = setTimeout(o, Nl);
  }
  function Er() {
    clearTimeout(Lr), clearTimeout(Yi), Ia.hidden || (Gs = performance.now()), Ia.hidden = !0, ns = null;
  }
  n.addEventListener("pointerover", (t) => {
    if (t.pointerType === "touch") return;
    if (Ia.contains(t.target)) {
      clearTimeout(Yi);
      return;
    }
    const e = Ar(t.target);
    if (e && It.names === "scroll" && e.matches(_r)) {
      Us(e);
      return;
    }
    if (e) {
      e !== ns ? Hl(e, e.textContent.trim()) : clearTimeout(Yi);
      return;
    }
    clearTimeout(Lr), clearTimeout(Yi), Yi = setTimeout(Er, 120);
  }), n.addEventListener("focusin", (t) => {
    var r;
    const e = t.target;
    if (!((r = e.matches) != null && r.call(e, ":focus-visible"))) return;
    let o = [e, ...e.querySelectorAll("*")].filter(Zi);
    It.names === "scroll" && (o.filter((d) => d.matches(_r)).forEach(Us), o = o.filter((d) => !d.matches(_r))), o.length && Hl(e, o.map((d) => d.textContent.trim()).join(" · "));
  }), n.addEventListener("focusout", (t) => {
    t.target === ns && Er();
  }), n.addEventListener("keydown", (t) => {
    t.key === "Escape" && !Ia.hidden && (t.stopPropagation(), Er());
  }, !0), window.addEventListener("scroll", () => {
    (!Ia.hidden || Lr) && Er();
  }, { capture: !0, passive: !0 });
  const _r = ".activityRowName,.activityRowMeta", os = /* @__PURE__ */ new WeakSet();
  function Us(t) {
    var o;
    if (It.names !== "scroll" || os.has(t) || t.closest("[inert]") || (o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    os.add(t);
    const e = () => Promise.all([t.closest(".workoutPanel"), t.closest(".panelExpanded")].filter(Boolean).flatMap((r) => r.getAnimations()).map((r) => r.finished.catch(() => {
    })));
    setTimeout(async () => {
      await e();
      const r = t.isConnected && !t.closest("[inert]") ? t.scrollWidth - t.clientWidth : 0;
      if (r < 2) {
        os.delete(t);
        return;
      }
      const d = r / 30 * 1e3, h = d + 1e3 + d;
      t.style.textOverflow = "clip";
      const p = t.animate([
        { textIndent: "0px", offset: 0, easing: "ease-in-out" },
        { textIndent: -r + "px", offset: d / h },
        { textIndent: -r + "px", offset: (1e3 + d) / h, easing: "ease-in-out" },
        { textIndent: "0px", offset: 1 }
      ], { duration: h });
      p.onfinish = p.oncancel = () => {
        t.style.textOverflow = "", os.delete(t);
      };
    }, 600);
  }
  const Fl = new IntersectionObserver((t) => t.forEach((e) => {
    e.isIntersecting && !e.target.closest("[inert]") && (Fl.unobserve(e.target), Us(e.target));
  }), { threshold: 1 });
  let Go = !1;
  new MutationObserver(() => {
    Go || It.names !== "scroll" || (Go = !0, setTimeout(() => {
      Go = !1, n.querySelectorAll(_r).forEach((t) => {
        !t.dataset.glided && Zi(t) && (t.dataset.glided = "1", Fl.observe(t));
      });
    }, 300));
  }).observe(n, { childList: !0, subtree: !0 });
  const Zn = (t) => () => {
    jt = t, Nn(), aa(), Na(), $e();
  };
  function Uo(t) {
    const e = () => D.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]');
    setTimeout(() => {
      var p;
      const o = e();
      if (!o) return;
      const r = (p = window.matchMedia) == null ? void 0 : p.call(window, "(prefers-reduced-motion: reduce)").matches, d = o.getBoundingClientRect();
      (d.top < 0 || d.bottom > window.innerHeight) && o.scrollIntoView({ behavior: r ? "auto" : "smooth", block: "center" });
      const h = (m) => "0 0 0 4px color-mix(in srgb,var(--primary) " + m + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + m + "%,transparent)";
      o.animate([{ boxShadow: h(55) }, { boxShadow: h(0) }], { duration: 1500, easing: r ? "steps(1, end)" : "ease-out" });
    }, Ol(t) ? 260 : 0);
  }
  function Ol(t) {
    const e = Wo.get(t);
    if (!e || !Se.classList.contains("open") || Ma) return !1;
    const { n: o, w: r } = Ja(D.clientWidth), d = Se.getBoundingClientRect().left - D.getBoundingClientRect().left, h = (g) => g * (r + Re) + e.cols * r + (e.cols - 1) * Re <= d;
    if (h(e.col)) return !1;
    const p = /* @__PURE__ */ new Set();
    Wo.forEach((g, M) => {
      if (M !== t) for (let A = g.row; A < g.row + g.rows; A++) for (let _ = g.col; _ < g.col + g.cols; _++) p.add(_ + "," + A);
    });
    const m = (g, M) => {
      for (let A = M; A < M + e.rows; A++) for (let _ = g; _ < g + e.cols; _++) if (p.has(_ + "," + A)) return !1;
      return !0;
    };
    for (let g = 0; g <= Qr; g++) for (let M = 0; M + e.cols <= o && h(M); M++)
      if (m(M, g))
        return wo(xe(), { ...zo(), [t]: { col: M, row: g } }), Na(), !0;
    return !1;
  }
  const Ki = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, Se = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Se.setAttribute("aria-label", "Edit the dashboard"), Se.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection" data-tray="weather"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd" type="button" data-tile-add aria-expanded="false">Add tile</button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection"><div class="sectionLabel">Areas</div><p class="tfTrayNote">Which areas the Areas card shows, and one area on its own instead.</p><button class="pill tfTrayAdd" type="button" data-area-choose aria-expanded="false">Choose areas</button><button class="pill tfTrayAdd" type="button" data-room-add aria-expanded="false">Add area</button><ul class="tfTrayList" data-tray="roompick" hidden></ul></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd" type="button" data-fav-add aria-expanded="false">Add favourite</button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', b.appendChild(Se);
  const la = Object.assign(document.createElement("div"), { className: "card tfTrayPop" });
  la.setAttribute("role", "dialog"), la.setAttribute("aria-label", "Areas"), la.hidden = !0, b.appendChild(la);
  const is = () => Se.querySelector("[data-area-choose]");
  function $i() {
    const t = new Set(zt().map((e) => e.id));
    la.innerHTML = '<div class="tfTrayPopTitle">Areas</div>' + Ct.map((e) => '<div class="tfTrayPopRow"><button class="switch' + (t.has(e.id) ? " on" : "") + '" type="button" role="switch" aria-checked="' + t.has(e.id) + '" aria-label="' + ot(e.name) + '" data-area-on="' + ot(e.id) + '"></button><span class="tfIcon"><span class="tfAreaGlyph"' + je("area:" + e.id, e.icon || "mdi:texture-box", e.name) + '></span></span><span class="tfTrayPopName">' + ot(e.name) + "</span></div>").join(""), qn(la);
  }
  function Ys() {
    var t;
    la.hidden || (la.hidden = !0, (t = is()) == null || t.setAttribute("aria-expanded", "false"));
  }
  function Zs() {
    if (!la.hidden) {
      Ys();
      return;
    }
    $i(), la.hidden = !1, is().setAttribute("aria-expanded", "true");
    const t = is().getBoundingClientRect();
    la.style.top = Math.max(16, Math.min(t.top - 12, innerHeight - la.offsetHeight - 16)) + "px";
  }
  la.addEventListener("click", (t) => {
    var d;
    const e = t.target.closest("[data-area-on]");
    if (!e) return;
    const o = !e.classList.contains("on"), r = new Set(((d = jt.dash) == null ? void 0 : d.areasOff) || []);
    o ? r.delete(e.dataset.areaOn) : r.add(e.dataset.areaOn), Vi({ ...xe(), areasOff: [...r] }), e.classList.toggle("on", o), e.setAttribute("aria-checked", String(o)), aa();
  }), la.addEventListener("keydown", (t) => {
    var e;
    t.key === "Escape" && (t.stopPropagation(), Ys(), (e = is()) == null || e.focus());
  });
  let Ma = !1, Qa = !1, En = !1, hi = !1, Qe = null, Ha = !1;
  const Sa = {}, yo = (t, e) => {
    if (Sa[t] === e) return;
    Sa[t] = e;
    const o = Se.querySelector('[data-tray="' + t + '"]');
    o.innerHTML = e, qn(o);
  }, Ks = (t, e) => '<span class="tfTrayName"><span class="activityRowName">' + ot(At(t)) + '</span><span class="activityRowMeta">' + ot(e) + "</span></span>", $s = (t, e, o) => '<li class="tfTrayFav' + (e ? " off" : "") + '" data-tray-fav="' + ot(t) + '"><span class="tfTrayGrip" aria-hidden="true">' + oc + '</span><span class="tfIcon"' + je(t, vn(t)) + "></span>" + Ks(t, e ? "Hidden" + (Xt.get(t) ? " · " + Xt.get(t) : "") : Xt.get(t) || be(t)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + ot(t) + '" aria-pressed="' + !e + '" aria-label="' + (e ? "Show " : "Hide ") + ot(At(t)) + ' on the dashboard">' + (e ? gp : om) + "</button>" + (o ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + ot(t) + '" aria-label="Remove ' + ot(At(t)) + ' from favourites">' + vp + "</button>" : "<span></span>") + "</li>";
  function ql(t, e, o, r) {
    const d = t.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(S).filter((p) => e(p) && !o.has(p) && S[p].state !== "unavailable").filter((p) => {
      const m = (At(p) + " " + (Xt.get(p) || "") + " " + p).toLowerCase();
      return d.every((g) => m.includes(g));
    }).sort((p, m) => (Xt.get(p) || "~").localeCompare(Xt.get(m) || "~") || At(p).localeCompare(At(m))).slice(0, 40).map((p) => '<li><button class="tfTrayPickItem" type="button" ' + r + '="' + ot(p) + '"><span class="tfIcon"' + je(p, vn(p)) + "></span>" + Ks(p, Xt.get(p) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  function $e() {
    const t = va && b.classList.contains("tfBoard");
    if (Se.classList.toggle("open", t), Se.classList.toggle("tucked", t && Ma), Se.toggleAttribute("inert", !t), t || (Ha = !1), (!t || !b.classList.contains("tfEditing")) && Ys(), tl(), !t) return;
    const e = Se.querySelector("[data-tray-tuck]");
    e.innerHTML = Ma ? op : bp, e.setAttribute("aria-expanded", String(!Ma)), e.setAttribute("aria-label", Ma ? "Show the edit tray" : "Tuck the edit tray away");
    const o = xe().hidden.filter((M) => ma().some((A) => A.key === M)), r = (M, A) => '<button class="tfTrayCard" type="button" data-tray-card="' + ot(M) + '" aria-label="' + ot(Fe(M)) + ": drag it onto the board, or press to " + A + '"><span class="tfTrayGrip" aria-hidden="true">' + oc + "</span>" + ot(Fe(M)) + "</button>", d = o.filter((M) => !In.includes(M)), h = In.filter((M) => o.includes(M));
    yo("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (d.length ? '<div class="tfTrayCards">' + d.map((M) => r(M, "put it back")).join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), yo("weather", '<div class="sectionLabel">Weather</div>' + (h.length ? `<p class="tfTrayNote">The Weather page's widgets. Drag one onto the board, or press to add it.</p><div class="tfTrayCards">` + h.map((M) => r(M, "add it")).join("") + "</div>" : '<p class="tfTrayNote">Every weather widget is on the board.</p>')), yo("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (xe().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + Ha + '">' + (Ha ? "Hide the phone" : "Show the phone") + "</button>");
    const p = new Set(jt.favHidden || []), m = pe(), g = [...m, ...[...p].filter((M) => !m.includes(M) && S[M])];
    if (yo("favs", g.map((M) => $s(M, p.has(M), m.includes(M))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Se.querySelector('[data-pick="tiles"]').hidden = !En, Se.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(En)), En && yo("tilepick", ql(Se.querySelector("[data-tile-search]").value, (M) => bl.includes(M.split(".")[0]), new Set(xo()), "data-tile-pick")), Se.querySelector('[data-tray="roompick"]').hidden = !hi, Se.querySelector("[data-room-add]").setAttribute("aria-expanded", String(hi)), hi) {
      const M = new Set(xo());
      yo("roompick", Ct.filter((A) => !M.has("room:" + A.id)).map((A) => '<li><button class="tfTrayPickItem" type="button" data-room-pick="' + ot(A.id) + '"><span class="tfIcon"><span class="tfAreaGlyph"' + je("area:" + A.id, A.icon || "mdi:texture-box", A.name) + '></span></span><span class="tfTrayName"><span class="activityRowName">' + ot(A.name) + "</span></span></button></li>").join("") || '<li class="tfTrayNote">Every area is on the board.</li>');
    }
    Se.querySelector('[data-pick="favs"]').hidden = !Qa, Se.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(Qa)), Qa && yo("pick", ql(Se.querySelector("[data-fav-search]").value, (M) => Ki.test(M), new Set(pe()), "data-fav-pick")), yo("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (uo() ? " on" : "") + '" type="button" role="switch" aria-checked="' + uo() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const Yo = (t) => {
    jt = { ...jt, ...t }, Nn(), aa(), $e();
  };
  function Dr(t, e) {
    const o = jt, r = new Set(jt.favHidden || []);
    e ? r.delete(t) : r.add(t), Yo({ favHidden: [...r] }), e ? kn(At(t) + " put back") : kn(At(t) + " hidden", Zn(o));
  }
  const Xs = (t) => {
    const e = jt;
    Yo({ favourites: pe().filter((o) => o !== t), favHidden: (jt.favHidden || []).filter((o) => o !== t) }), kn(At(t) + " removed from favourites", Zn(e));
  }, Xi = (t) => {
    Yo({ favourites: [...pe().filter((e) => e !== t), t], favHidden: (jt.favHidden || []).filter((e) => e !== t) }), kn(At(t) + " added to favourites");
  };
  Se.addEventListener("click", (t) => {
    var o;
    const e = t.target.closest("button");
    e && (e.hasAttribute("data-tray-done") ? zs(!1) : e.hasAttribute("data-tray-tuck") ? (Ma = !Ma, $e()) : e.hasAttribute("data-phone-toggle") ? (Ha = !Ha, $e(), Ha && ((o = ba.querySelector("[data-phone-key]")) == null || o.focus({ preventScroll: !0 }))) : e.dataset.trayCard ? t.detail === 0 && (Ee(e.dataset.trayCard), $e()) : e.dataset.favEye ? Dr(e.dataset.favEye, e.getAttribute("aria-pressed") !== "true") : e.dataset.favRemove ? Xs(e.dataset.favRemove) : e.hasAttribute("data-fav-add") ? (Qa = !Qa, $e(), Qa && Se.querySelector("[data-fav-search]").focus({ preventScroll: !0 })) : e.dataset.favPick ? Xi(e.dataset.favPick) : e.hasAttribute("data-tile-add") ? (En = !En, $e(), En && Se.querySelector("[data-tile-search]").focus({ preventScroll: !0 })) : e.dataset.tilePick ? as(e.dataset.tilePick) : e.hasAttribute("data-area-choose") ? Zs() : e.hasAttribute("data-room-add") ? (hi = !hi, $e()) : e.dataset.roomPick ? as("room:" + e.dataset.roomPick) : e.hasAttribute("data-fav-suggest") && Yo({ suggest: !uo() }));
  }), Se.addEventListener("input", (t) => {
    t.target.matches("[data-fav-search],[data-tile-search]") && $e();
  }), Se.addEventListener("keydown", (t) => {
    var o, r;
    const e = !!((r = (o = t.target).closest) != null && r.call(o, '[data-pick="tiles"],[data-tile-add]'));
    t.key !== "Escape" || !(e ? En : Qa) || (t.stopPropagation(), e ? En = !1 : Qa = !1, $e(), Se.querySelector(e ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function Js(t, e, o, r) {
    t.preventDefault();
    const d = t.clientX, h = t.clientY;
    let p = null, m = 0;
    const g = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), M = (_) => {
      if (!p) {
        if (Math.hypot(_.clientX - d, _.clientY - h) < 4) return;
        p = e.cloneNode(!0), p.classList.add("tfTrayGhost"), p.style.width = e.offsetWidth + "px", b.appendChild(p);
      }
      p.style.transform = "translate(" + (_.clientX - 24) + "px," + (_.clientY - 24) + "px)";
      const B = !Ma && _.clientX >= Se.getBoundingClientRect().left;
      if (o === "card") {
        const H = D.getBoundingClientRect(), { w: G } = Ja(D.clientWidth);
        de = !B && _.clientX >= H.left && _.clientX <= H.right && _.clientY >= H.top + jo ? { key: r, col: Math.max(0, Math.floor((_.clientX - H.left) / (G + Re))), row: Math.max(0, Math.floor((_.clientY - H.top - jo) / Pa)), fromTray: !0 } : null, m || (m = requestAnimationFrame(() => {
          m = 0, Na();
        }));
        return;
      }
      const Y = D.querySelector(".tfDash-favs"), $ = Y == null ? void 0 : Y.getBoundingClientRect();
      if (Qe = null, $ && !B && _.clientX >= $.left && _.clientX <= $.right && _.clientY >= $.top && _.clientY <= $.bottom) {
        let H = 1 / 0;
        Y.querySelectorAll('[data-k^="fav:"]').forEach((G, j) => {
          const ft = G.getBoundingClientRect(), U = Math.hypot(_.clientX - (ft.left + ft.width / 2), _.clientY - (ft.top + ft.height / 2));
          U < H && (H = U, Qe = { i: j, r: ft, after: _.clientX > ft.left + ft.width / 2 });
        }), Qe || (Qe = { i: 0, r: null, after: !1 });
      }
      Qe != null && Qe.r ? (g.isConnected || b.appendChild(g), Object.assign(g.style, { left: (Qe.after ? Qe.r.right : Qe.r.left) - 2 + "px", top: Qe.r.top + 8 + "px", height: Qe.r.height - 16 + "px" })) : g.remove();
    }, A = () => {
      if (window.removeEventListener("pointermove", M), window.removeEventListener("pointerup", A), window.removeEventListener("pointercancel", A), cancelAnimationFrame(m), p == null || p.remove(), g.remove(), o === "card") {
        if (!p) Ee(r);
        else if (de != null && de.fromTray) {
          Na();
          const H = Fe(r) + fi(r), G = xe(), j = zo();
          de = null, wo({ ...G, hidden: G.hidden.filter((ft) => ft !== r) }, j), kn(H);
        }
        de = null, Na(), aa(), $e();
        return;
      }
      if (!Qe) return;
      const _ = new Set(jt.favHidden || []);
      _.delete(r);
      const B = pe().filter((H) => H !== r), Y = B.filter((H) => !_.has(H)), $ = Y[Math.min(Qe.i + (Qe.after ? 1 : 0), Y.length)];
      B.splice($ ? B.indexOf($) : B.length, 0, r), Qe = null, Yo({ favourites: B, favHidden: [..._] }), kn(At(r) + " put back");
    };
    window.addEventListener("pointermove", M), window.addEventListener("pointerup", A), window.addEventListener("pointercancel", A);
  }
  const Wl = {
    sums: 201,
    wx: 364,
    favs: 364,
    areas: 364,
    act: 364,
    energy: 288,
    avg: 288,
    aq: 288,
    pollen: 288,
    radar: 288,
    hourly: 288,
    sun: 288,
    moon: 288,
    uv: 288,
    humidity: 288,
    pressure: 288,
    wind: 288,
    visibility: 288
  }, rs = 136, jl = 288, tn = 0.8, ea = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, ba = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  ba.setAttribute("aria-label", "Phone order"), ba.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + vp + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', b.appendChild(ba);
  let Qs = "";
  function tl() {
    var m;
    const t = Ha && va && b.classList.contains("tfBoard") && !Ma;
    if (ba.classList.toggle("open", t), ba.toggleAttribute("inert", !t), !t) return;
    const e = bo().filter((g) => !xe().hidden.includes(g.key)), o = e.length, r = (g) => Math.round(g * tn * 10) / 10 + "px", d = (g, M) => {
      const A = g.el.classList.contains("tfDac"), _ = g.tile ? A ? jl : rs : Wl[g.key] || rs;
      return '<button class="tfPhoneBlock' + (g.tile ? " tile" : "") + '" type="button" data-phone-key="' + ot(g.key) + '" style="min-height:' + r(_) + '" aria-label="' + ot(Fe(g.key) + ", " + (M + 1) + " of " + o + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (g.tile ? je(g.key, vn(g.key)) : je(g.key, ea[g.key])) + '></span><span class="tfPhoneName">' + ot(Fe(g.key)) + "</span></button>";
    }, h = '<div class="tfPhoneTitle">' + ot(((m = D.querySelector(".tfDashTitle")) == null ? void 0 : m.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + r(Wl.sums) + '"><span class="tfPhoneName">' + ot(Fe("sums")) + "</span></div>" + e.map(d).join("");
    if (ba.querySelector('[data-phone="note"]').innerHTML = xe().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", h === Qs) return;
    Qs = h;
    const p = ba.querySelector('[data-phone="list"]');
    p.innerHTML = h, qn(p);
  }
  function Vl(t, e) {
    var o;
    Vi({ ...xe(), phone: t }), $e(), e && ((o = ba.querySelector('[data-phone-key="' + CSS.escape(e) + '"]')) == null || o.focus({ preventScroll: !0 }));
  }
  const ss = () => [...ba.querySelectorAll("[data-phone-key]")].map((t) => t.dataset.phoneKey);
  function zl(t, e) {
    t.preventDefault();
    const o = e.parentElement, r = ba.querySelector(".tfPhoneScreen"), d = ss().join();
    e.classList.add("moving");
    const h = (m) => {
      const g = r.getBoundingClientRect();
      m.clientY > g.bottom - 40 ? r.scrollTop += 12 : m.clientY < g.top + 40 && (r.scrollTop -= 12);
      const M = [...o.querySelectorAll("[data-phone-key]")].find((B) => {
        const Y = B.getBoundingClientRect();
        return B !== e && m.clientX >= Y.left && m.clientX <= Y.right && m.clientY >= Y.top && m.clientY <= Y.bottom;
      });
      if (!M) return;
      const A = M.getBoundingClientRect(), _ = M.classList.contains("tile") ? m.clientX < A.left + A.width / 2 : m.clientY < A.top + A.height / 2;
      o.insertBefore(e, _ ? M : M.nextSibling);
    }, p = () => {
      window.removeEventListener("pointermove", h), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p), e.classList.remove("moving");
      const m = ss();
      Qs = "", m.join() !== d ? Vl(m) : tl();
    };
    window.addEventListener("pointermove", h), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  }
  ba.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-phone-key]");
    e && t.button <= 0 && zl(t, e);
  }), ba.addEventListener("click", (t) => {
    var o;
    const e = t.target.closest("button");
    if (e != null && e.hasAttribute("data-phone-close"))
      Ha = !1, $e(), (o = Se.querySelector("[data-phone-toggle]")) == null || o.focus({ preventScroll: !0 });
    else if (e != null && e.hasAttribute("data-phone-reset")) {
      const { phone: r, ...d } = xe();
      Vi(d), $e();
    }
  }), ba.addEventListener("keydown", (t) => {
    var p, m, g, M;
    if (t.key === "Escape") {
      t.stopPropagation(), Ha = !1, $e(), (p = Se.querySelector("[data-phone-toggle]")) == null || p.focus({ preventScroll: !0 });
      return;
    }
    const e = (M = (g = (m = t.target).closest) == null ? void 0 : g.call(m, "[data-phone-key]")) == null ? void 0 : M.dataset.phoneKey, o = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[t.key];
    if (!e || !o) return;
    t.preventDefault();
    const r = ss(), d = r.indexOf(e), h = d + o;
    h < 0 || h >= r.length || ([r[d], r[h]] = [r[h], r[d]], Vl(r, e));
  });
  function Gl(t, e) {
    t.preventDefault();
    const o = e.parentElement;
    e.classList.add("moving");
    const r = (h) => {
      const p = [...o.children].find((m) => {
        const g = m.getBoundingClientRect();
        return m !== e && h.clientY >= g.top && h.clientY <= g.bottom;
      });
      if (p) {
        const m = p.getBoundingClientRect();
        o.insertBefore(e, h.clientY < m.top + m.height / 2 ? p : p.nextSibling);
      }
    }, d = () => {
      window.removeEventListener("pointermove", r), window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", d), e.classList.remove("moving");
      const h = new Set(pe());
      Sa.favs = null, Yo({ favourites: [...o.children].map((p) => p.dataset.trayFav).filter((p) => h.has(p)) });
    };
    window.addEventListener("pointermove", r), window.addEventListener("pointerup", d), window.addEventListener("pointercancel", d);
  }
  Se.addEventListener("pointerdown", (t) => {
    if (t.button > 0) return;
    const e = t.target.closest("[data-tray-card]"), o = t.target.closest(".tfTrayFav");
    e ? Js(t, e, "card", e.dataset.trayCard) : o && t.target.closest(".tfTrayGrip") ? Gl(t, o) : o != null && o.classList.contains("off") && !t.target.closest("button") && Js(t, o, "fav", o.dataset.trayFav);
  });
  function Ul(t) {
    if (!va || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const e = t.target.closest(".tfBoardItem"), o = e && ma().find((Pt) => Pt.el === e);
    if (!o || Tn.includes(o.key)) return;
    const r = Wo.get(o.key), { w: d } = Ja(D.clientWidth);
    if (!r) return;
    t.preventDefault(), Yn();
    const h = t.clientX, p = t.clientY;
    let m = !1, g = 0;
    const M = Ze.drag, A = Va();
    let _ = 0, B = 0, Y = 0, $ = 0, H = 0, G = 0, j = A || M.stick === 0, ft = 0;
    const U = (Pt, Et, ie, Te) => {
      e.style.transform = "translate(" + Y.toFixed(2) + "px," + $.toFixed(2) + "px) rotate(" + Pt.toFixed(2) + "deg) rotate(" + Et + "rad) scale(" + ie.toFixed(4) + "," + Te.toFixed(4) + ") rotate(" + -Et + "rad)";
    }, _t = () => {
      if (ft = requestAnimationFrame(_t), A) {
        Y = _, $ = B, U(0, 0, 1, 1);
        return;
      }
      if (!j) {
        const Oa = Math.min(Math.hypot(_, B) / Math.max(1, M.stick), 1);
        Y = _ * 0.35, $ = B * 0.35, U(0, Math.atan2(B, _), 1 + 0.155 * Oa, 1 - 0.1 * Oa);
        return;
      }
      H = Rc(H, _ - Y, M.pull / 100, M.keep / 100), G = Rc(G, B - $, M.pull / 100, M.keep / 100), Y += H, $ += G;
      const Pt = Math.hypot(H, G), Et = Math.min(Pt / 48, 1), ie = Math.max(-5, Math.min(M.tilt, H * 0.32)), Te = 1 + M.lift / 100;
      U(ie, Math.atan2(G, H), Te * (1 + 0.1 * Et), Te * (1 - 0.063 * Et));
    }, xt = (Pt) => {
      if (_ = Pt.clientX - h, B = Pt.clientY - p, !m) {
        if (Math.hypot(_, B) < 4) return;
        m = !0, de = { key: o.key, col: r.col, row: r.row }, e.classList.add("tfDragging", "mvDrag"), ft = requestAnimationFrame(_t);
      }
      !j && Math.hypot(_, B) > M.stick && (j = !0, H = _ * 0.085, G = B * 0.085), de.col = Math.round((r.x + _) / (d + Re)), de.row = Math.round((r.y + B - jo) / Pa), g || (g = requestAnimationFrame(() => {
        g = 0, Na();
      }));
    }, ct = () => {
      var xi;
      if (window.removeEventListener("pointermove", xt), window.removeEventListener("pointerup", ct), window.removeEventListener("pointercancel", ct), !m) return;
      const Pt = (Kt) => {
        Kt.preventDefault(), Kt.stopImmediatePropagation();
      };
      window.addEventListener("click", Pt, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", Pt, { capture: !0 }), 300), cancelAnimationFrame(g), cancelAnimationFrame(ft);
      const Et = e.getBoundingClientRect(), ie = o.key;
      e.style.transition = "none", Na(), e.classList.remove("tfDragging", "mvDrag"), e.style.transform = "", de = null, wo(xe(), zo()), Na(), aa();
      const Te = (xi = ma().find((Kt) => Kt.key === ie)) == null ? void 0 : xi.el;
      if (requestAnimationFrame(() => {
        e.style.transition = "", Te && (Te.style.transition = "");
      }), !Te || A) return;
      Te.style.transition = "none";
      const Oa = Te.getBoundingClientRect(), xs = Et.left + Et.width / 2 - (Oa.left + Oa.width / 2), Hr = Et.top + Et.height / 2 - (Oa.top + Oa.height / 2);
      Te.style.zIndex = "20", Te.animate([{ transform: "translate(" + xs + "px," + Hr + "px) scale(" + (1 + M.lift / 100) + ")" }, { transform: "none" }], { duration: M.slide, easing: Ie.land }).finished.then(() => {
        Te.style.zIndex = "", Nf(Te);
      }, () => {
        Te.style.zIndex = "";
      });
    };
    window.addEventListener("pointermove", xt), window.addEventListener("pointerup", ct), window.addEventListener("pointercancel", ct);
  }
  function Zo(t = !1) {
    const e = D == null ? void 0 : D.querySelector(".tfDashGraph svg[data-graph]");
    if (!(e != null && e.clientWidth)) return;
    const o = e.dataset.graph + "@" + e.clientWidth + "x" + e.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (e.dataset.drawn === o) return;
    const r = !e.dataset.drawn;
    e.dataset.drawn = o;
    const d = Ns.find((h) => h.id === e.dataset.graph);
    d ? kr(e, d).then(() => {
      (t || r) && Wi(e);
    }) : bi(e.dataset.graph, e).then(() => {
      t && Gn(e);
    });
  }
  function el() {
    var m, g, M;
    ae = za.model(i(), { madeUp: !E }), Ba(), S = ae.states, S[(m = jt.sources) == null ? void 0 : m.grid] && (ae.grid = jt.sources.grid), S[(g = jt.sources) == null ? void 0 : g.alarm] && (ae.security.alarms = [jt.sources.alarm]), Wt.forEach((A, _) => {
      const B = S[_], Y = (B == null ? void 0 : B.attributes) || {};
      if (!B || Date.now() - A.at > 2 * 60 * 1e3) {
        Wt.delete(_);
        return;
      }
      A.pos != null && B.state !== "opening" && B.state !== "closing" && Math.abs(gn(_) - A.pos) < 1 && delete A.pos, A.tilt != null && Math.abs((Y.current_tilt_position ?? -1) - A.tilt) < 1 && delete A.tilt, A.pos == null && A.tilt == null && Wt.delete(_);
    });
    const t = [];
    let e = 0;
    const o = we();
    Ct = o.filter((A) => A.room).map((A) => A.room), Ct.some((A) => A.id === N) || (N = ((M = Ct[0]) == null ? void 0 : M.id) || null);
    const r = W === "weather" ? { key: "weather", name: "Weather" } : W && o.find((A) => A.key === W);
    if (r || (W = null), b.classList.toggle("tfAreaOpen", !!r), b.classList.toggle("tfWeatherOpen", (r == null ? void 0 : r.key) === "weather"), b.classList.toggle("tfDash", !r), Xt = /* @__PURE__ */ new Map(), ae.rooms.forEach((A) => [...A.actions, ...A.plugs, ...A.readings, ...A.openings, ...A.solar, ...A.plants.flatMap((_) => [_.id, ..._.readings])].forEach((_) => Xt.set(_, A.name))), !r) return pi(t, Po());
    if (t.push({ key: "areahead", html: Pd(r, ++e) }), r.key === "weather")
      return t.weather = ++e, t;
    const d = r.ids, h = r.room ? r.room.id : r.key, p = r.room;
    return p != null && p.solar.length && t.push({ key: "energy:" + p.id, html: wn(p, ++e) }), p && (p.readings.length || p.plugs.length || p.power != null) && t.push({ key: "readings:" + p.id, html: Ae(p, ++e) }), p == null || p.plants.forEach((A) => t.push({ key: "plant:" + A.id, html: ra(A, ++e) })), d.length && t.push({ key: "block:" + h, order: ++e, tiles: d.map((A) => ({ key: A, html: ua(A) })) }), t;
  }
  const Pd = (t, e) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + e + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + op + '</button><div class="settingsTitle">' + ot(t.name) + "</div></div>";
  let Kn = 0, ls = null;
  const Yl = (t) => t === "weather" ? mn.wx : t.startsWith("room:") && D.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || D.querySelector(".tfAreas");
  function mi(t) {
    var e, o;
    W || (Kn = Ji().scrollTop, ls = ((e = Yl(t)) == null ? void 0 : e.getBoundingClientRect().top) ?? null), W = t, t.startsWith("room:") && (N = t.slice(5)), ko(), Ji().scrollTop = 0, (o = D.querySelector("[data-area-back]")) == null || o.focus({ preventScroll: !0 });
  }
  let Ko = null;
  function Zl(t, e) {
    if (Ko == null || Ko(), e == null) return;
    const o = Ji(), r = performance.now() + 1500, d = ["wheel", "touchstart", "pointerdown", "keydown"];
    let h = 0;
    const p = () => {
      cancelAnimationFrame(h), d.forEach((g) => window.removeEventListener(g, p, !0)), Ko = null;
    }, m = () => {
      const g = t();
      if (g != null && g.isConnected) {
        const M = g.getBoundingClientRect().top - e;
        Math.abs(M) > 0.5 && (o.scrollTop += M);
      }
      performance.now() < r ? h = requestAnimationFrame(m) : p();
    };
    d.forEach((g) => window.addEventListener(g, p, { capture: !0, passive: !0 })), Ko = p, m();
  }
  function Br() {
    var o;
    const t = W;
    W = null, ko(), Ji().scrollTop = Kn, Zl(() => Yl(t), ls);
    const e = t.startsWith("room:") ? D.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || D.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? mn.wx.querySelector(".wbOpenPage") : D.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (o = (e == null ? void 0 : e.querySelector("[data-go]")) || e) == null || o.focus({ preventScroll: !0 });
  }
  const Nd = (t) => t.wrap ? t.wrap(t.tiles.map((e) => e.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + ot(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((e) => e.html).join("") + "</div></div>", en = (t) => t.map((e) => e.key + (e.tiles ? "(" + e.tiles.map((o) => o.key).join(",") + ")" : "")).join(";");
  function Ji() {
    for (let t = b.parentElement || b.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const e = getComputedStyle(t).overflowY;
      if ((e === "auto" || e === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function Kl(t) {
    const e = Ji(), o = (m) => {
      const g = m.getBoundingClientRect();
      return g.height && g.bottom > 0 && g.top < window.innerHeight;
    }, r = [...D.children, ...D.querySelectorAll(".tfDashTiles > *")].find((m) => !m.matches(".tfDashTiles") && o(m)), d = r == null ? void 0 : r.dataset.k, h = r == null ? void 0 : r.getBoundingClientRect().top;
    t();
    const p = r != null && r.isConnected ? r : d && D.querySelector('[data-k="' + CSS.escape(d) + '"]');
    p != null && p.isConnected && h != null && (e.scrollTop += p.getBoundingClientRect().top - h);
  }
  function ko() {
    if (!k || !D) return;
    const t = el(), e = (d) => {
      var h;
      return (((h = d.closest("[data-k]")) == null ? void 0 : h.dataset.k) || "") + "|" + d.dataset.iconFor + "|" + (d.dataset.iconName || "");
    }, o = /* @__PURE__ */ new Map();
    D.querySelectorAll("[data-tf] [data-icon-for]").forEach((d) => {
      d.firstElementChild && (o.get(e(d)) || o.set(e(d), []).get(e(d))).push(d.firstElementChild);
    }), D.querySelectorAll("[data-tf]").forEach((d) => d.remove()), La.clear();
    const r = document.createElement("div");
    r.innerHTML = t.map((d) => d.tiles ? Nd(d) : d.html).join(""), t.forEach((d) => d.tiles ? d.tiles.forEach((h) => La.set(h.key, h.html)) : La.set(d.key, d.html)), lr = en(t), r.querySelectorAll("[data-icon-for]").forEach((d) => {
      var p;
      const h = !d.firstElementChild && ((p = o.get(e(d))) == null ? void 0 : p.shift());
      h && d.appendChild(h);
    }), D.append(...r.children), cr(t.weather), $t(), Vs.disconnect(), Na(), qn(D), gi(D), Za(D), K(), L && bi(L.id), bs(), oa(), ll(), requestAnimationFrame(it);
  }
  const $l = (t) => {
    var o;
    const e = n.activeElement && t.contains(n.activeElement) ? n.activeElement : null;
    return e && { label: e.getAttribute("aria-label"), act: (o = e.dataset) == null ? void 0 : o.act };
  }, ds = (t, e) => {
    var o;
    e && ((o = e.label && t.querySelector('[aria-label="' + CSS.escape(e.label) + '"]') || e.act && t.querySelector('[data-act="' + CSS.escape(e.act) + '"]')) == null || o.focus({ preventScroll: !0 }));
  };
  function al(t, e) {
    if (!t.querySelector(".tfDacPad"))
      return t.replaceWith(e), e;
    const o = t.matches(".tfDac") && t.querySelector(":scope > .tfDacPad"), r = e.querySelector(":scope > .tfDacPad");
    if (o)
      return (r == null ? void 0 : r.dataset.dac) !== o.dataset.dac ? (t.replaceWith(e), e) : (t.querySelector(":scope > .tfActionHead").replaceWith(e.querySelector(":scope > .tfActionHead")), t.classList.toggle("on", e.classList.contains("on")), ["data-light", "data-tone"].forEach((p) => e.hasAttribute(p) ? t.setAttribute(p, e.getAttribute(p)) : t.removeAttribute(p)), [...t.style].filter((p) => p.startsWith("--") && !p.startsWith("--tf-")).forEach((p) => t.style.removeProperty(p)), [...e.style].forEach((p) => t.style.setProperty(p, e.style.getPropertyValue(p))), t);
    const d = (p) => {
      var m;
      return ((m = p.dataset) == null ? void 0 : m.iconFor) !== void 0;
    };
    if (d(t) && d(e) && !e.children.length && t.dataset.iconFor === e.dataset.iconFor && t.dataset.iconName === e.dataset.iconName && t.firstElementChild)
      return [...t.attributes].forEach((p) => {
        e.hasAttribute(p.name) || t.removeAttribute(p.name);
      }), [...e.attributes].forEach((p) => {
        t.getAttribute(p.name) !== p.value && t.setAttribute(p.name, p.value);
      }), t;
    if (t.tagName !== e.tagName || t.children.length !== e.children.length)
      return t.replaceWith(e), e;
    [...t.attributes].forEach((p) => {
      e.hasAttribute(p.name) || t.removeAttribute(p.name);
    }), [...e.attributes].forEach((p) => t.setAttribute(p.name, p.value));
    const h = [...e.children];
    return [...t.children].forEach((p, m) => al(p, h[m])), t;
  }
  function an(t, e) {
    const o = document.createElement("div");
    o.innerHTML = e;
    const r = $l(t), d = al(t, o.firstElementChild);
    qn(d), gi(d), Za(d), ds(d, r);
  }
  function aa() {
    !k || !D || de || Kl(Id);
  }
  function Id() {
    if (!D.querySelector("[data-tf]")) {
      ko();
      return;
    }
    const t = el();
    if (en(t) !== lr) {
      ko();
      return;
    }
    const e = (o) => [...gt.keys()].some((r) => {
      const d = r.slice(r.indexOf("|") + 1);
      return o === d || o.endsWith(":" + d);
    });
    t.forEach((o) => (o.tiles || [o]).forEach((r) => {
      if (La.get(r.key) === r.html || e(r.key)) return;
      const d = D.querySelector('[data-k="' + CSS.escape(r.key) + '"]');
      if (d) {
        if (La.set(r.key, r.html), L && L.key === r.key && d.querySelector(".tfOpen")) {
          d.querySelector(".tfOpen .activityRowMeta").textContent = Pi(L.id);
          return;
        }
        an(d, r.html), L && L.key === r.key && bi(L.id), r.key.startsWith("energy:") && bs();
      }
    })), oa(), ll(), po(), K(), Le == null || Le.update(), Ge == null || Ge.forEach((o) => o.update()), b.classList.contains("tfDash") && yn(), requestAnimationFrame(it);
  }
  const $n = {
    light: (t) => [["Brightness", t.brightness != null ? Math.round(t.brightness / 2.55) + "%" : null], ["Colour temperature", t.color_temp_kelvin ? Number(t.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", t.color_mode && ue(t.color_mode)]],
    climate: (t) => [["Current temperature", me(t.current_temperature) + " °C"], ["Target", me(t.temperature) + " °C"], ["Action", ue(t.hvac_action)]],
    cover: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null], ["Tilt", t.current_tilt_position != null ? t.current_tilt_position + "% open" : null]],
    humidifier: (t) => [["Current humidity", t.current_humidity + "%"], ["Target", t.humidity + "%"], ["Mode", ue(t.mode)]],
    media_player: (t) => [["Title", t.media_title], ["Artist", t.media_artist], ["Volume", t.volume_level != null ? Math.round(t.volume_level * 100) + "%" : null], ["Source", t.source]],
    vacuum: (t) => [["Battery", t.battery_level + "%"], ["Fan speed", ue(t.fan_speed)], ["Rooms", (t.rooms || []).join(", ") || null]],
    lock: (t) => [["Changed by", t.changed_by]],
    alarm_control_panel: (t) => [["Changed by", t.changed_by]],
    valve: () => [],
    plant: (t) => [["Moisture", t.moisture + "%"], ["Light", Number(t.brightness).toLocaleString() + " lx"], ["Temperature", me(t.temperature) + " °C"], ["Fertility", t.conductivity + " µS/cm"], ["Problems", t.problem === "none" ? "None" : ue(t.problem)]],
    weather: (t) => [["Temperature", t.temperature != null ? t.temperature + " " + (t.temperature_unit || "°C") : null], ["Humidity", t.humidity != null ? t.humidity + "%" : null], ["Wind", t.wind_speed != null ? t.wind_speed + " " + (t.wind_speed_unit || "km/h") : null], ["Pressure", t.pressure != null ? t.pressure + " " + (t.pressure_unit || "hPa") : null]]
  }, Rr = (t) => Jo(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function nl(t, e = {}, o = !1) {
    return '<div class="tfMoreList">' + t.map((r) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + ot(r.name) + '</div><div class="tfMoreTiles' + (o ? " single" : "") + '">' + r.ids.map((d) => le(d, e)).join("") + "</div></div>").join("") + "</div>";
  }
  const Nt = document.createElement("div");
  Nt.className = "tfMoreBackdrop", Nt.hidden = !0, b.appendChild(Nt);
  const Fa = document.createElement("div");
  Fa.className = "tfMoreBackdrop tfMoreUnder", Fa.hidden = !0, b.insertBefore(Fa, Nt);
  const Qi = (t, e) => {
    for (let o = t; o && o !== Nt; o = o.parentElement) {
      const r = getComputedStyle(o).overflowY;
      if ((r === "auto" || r === "scroll") && o.scrollHeight > o.clientHeight + 1 && (e < 0 ? o.scrollTop > 0 : o.scrollTop + o.clientHeight < o.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let _n = null;
  Nt.addEventListener("touchstart", (t) => {
    _n = { x: t.touches[0].clientX, y: t.touches[0].clientY };
  }, { passive: !0 }), Nt.addEventListener("touchmove", (t) => {
    var d, h;
    if (!_n || t.touches.length > 1 || (h = (d = t.target).closest) != null && h.call(d, "input,textarea,select")) return;
    const e = t.touches[0], o = _n.x - e.clientX, r = _n.y - e.clientY;
    _n = { x: e.clientX, y: e.clientY }, Math.abs(r) >= Math.abs(o) && !Qi(t.target, r) && t.preventDefault();
  }, { passive: !1 }), Nt.addEventListener("wheel", (t) => {
    var e, o;
    Math.abs(t.deltaX) > Math.abs(t.deltaY) && ((o = (e = t.target).closest) != null && o.call(e, "[data-more-pages]")) || Qi(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  const cs = () => window.innerWidth <= 620;
  let na = null;
  Nt.addEventListener("pointerdown", (t) => {
    const e = Nt.querySelector(".tfMorePair");
    !cs() || !e || !e.contains(t.target) || !t.isPrimary || Nt._closing || t.target.closest("input,textarea,select,.tfDacPad,[data-cover-art],.tfMoreSide") || (na = { x: t.clientX, y: t.clientY, t: performance.now(), dy: 0, v: 0, pair: e, from: t.target, grab: t.target.matches(".tfMore") || !!t.target.closest(".tfMoreHead") });
  }, !0), Nt.addEventListener("pointermove", (t) => {
    if (!na || !t.isPrimary) return;
    const e = t.clientY - na.y, o = performance.now();
    if (!na.on) {
      if (Math.abs(t.clientX - na.x) > 8 || e < -8 || !na.grab && Qi(na.from, -1)) {
        na = null;
        return;
      }
      if (e < 8) return;
      na.on = !0;
      try {
        Nt.setPointerCapture(t.pointerId);
      } catch {
      }
    }
    na.v = (e - na.dy) / Math.max(1, o - na.t), na.dy = e, na.t = o, na.pair.style.transform = "translateY(" + Math.max(0, e) + "px)";
  });
  const ol = (t) => {
    if (!na || !t.isPrimary) return;
    const e = na;
    if (na = null, !e.on) return;
    const o = (M) => {
      M.preventDefault(), M.stopImmediatePropagation();
    };
    window.addEventListener("click", o, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", o, { capture: !0 }), 300);
    const r = t.type === "pointerup" && (e.dy > 120 || e.v > 0.5), d = "translateY(" + Math.max(0, e.dy) + "px)";
    if (e.pair.style.transform = "", !r || Va()) {
      r ? er() : e.pair.animate([{ transform: d }, { transform: "none" }], { duration: 320, easing: Ie.spring });
      return;
    }
    const h = P;
    Nt._closing = !0, Nt.style.pointerEvents = "none", Nt.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: Ie.exit, fill: "forwards" });
    const p = e.pair.animate([{ transform: d }, { transform: "translateY(calc(100% + 40px))" }], { duration: 220, easing: Ie.exit, fill: "forwards" });
    let m = !1;
    const g = () => {
      m || (m = !0, Nt._closing = !1, Nt.style.pointerEvents = "", Nt.getAnimations().forEach((M) => M.cancel()), e.pair.getAnimations().forEach((M) => M.cancel()), P === h && er());
    };
    p.finished.then(g, g), setTimeout(g, 300);
  };
  Nt.addEventListener("pointerup", ol), Nt.addEventListener("pointercancel", ol);
  function Mo() {
    const t = Nt.querySelector(".tfMorePair"), e = Nt.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - e.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", Mo, { passive: !0 }), k && oe();
  let Dn = [];
  const Xe = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function Hd(t) {
    const e = (g, M = "") => '<div class="tfMoreHead">' + (P != null && P.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + ec + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + ot(g) + "</div>" + M + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + ip + "</button></div>", o = (g, M) => '<div class="tfMoreNow"><div class="tfMoreState">' + ot(g) + "</div></div>", r = nl;
    if (t === "favourites") {
      const g = pe(), M = new Set(g), A = [{ name: "Starred", ids: g }, { name: "Home", ids: ae.homeVacuums }, { name: "Security", ids: [...ae.security.alarms, ...ae.security.locks] }, ...ae.rooms.map((_) => ({ name: _.name, ids: [..._.actions, ..._.plugs] }))].map((_, B) => B ? { ..._, ids: _.ids.filter((Y) => !M.has(Y)) } : _).filter((_) => _.ids.length);
      return [e("Favourites"), o(g.length ? g.length + " starred" : "None starred"), r(A, { star: !0 }, !0)];
    }
    const d = (g, { name: M = "", alert: A = !1, plain: _ = !1 } = {}) => {
      const B = _ ? [] : g.filter((H) => bl.includes(H.split(".")[0])), Y = g.filter((H) => !B.includes(H)), $ = (H) => H.startsWith("vacuum.") && ne(H).battery_level != null ? ne(H).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (M ? '<div class="tfMoreGroupName">' + ot(M) + "</div>" : "") + '<div class="tfMoreActions">' + B.map((H) => ua(H, !0)).join("") + Y.map((H) => le(H, { plain: _, alert: A, say: _ ? $(H) : null })).join("") + "</div></div>";
    };
    if (t.startsWith("summary:")) {
      const g = Po().find((B) => B.key === t.slice(8));
      if (!g) return null;
      const M = g.key === "light" ? (g.groups || []).flatMap((B) => B.ids) : [], A = M.some((B) => {
        var Y;
        return ((Y = S[B]) == null ? void 0 : Y.state) === "on";
      }), _ = M.length ? '<button class="primary" type="button" data-acts="' + ri(M.map((B) => ["light", A ? "turn_off" : "turn_on", B])) + '">' + (A ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(g.name), '<div class="tfMoreNowRow">' + o(g.value) + _ + "</div>", ...(g.groups || []).map((B) => d(B.ids, { name: B.name === g.name ? "" : B.name, alert: B.alert, plain: g.plain }))];
    }
    if (t.startsWith("group:")) {
      const [, g, M] = t.split(":"), A = ae.rooms.find((Y) => Y.id === g), _ = A && y(A).find((Y) => Y.key === M);
      if (!_) return null;
      const B = _.acts ? '<button class="primary" type="button" data-acts="' + ri(_.acts) + '">' + (_.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(A.name + " " + _.label.toLowerCase()), '<div class="tfMoreNowRow">' + o(_.value) + B + "</div>", d(T(A, M))];
    }
    const h = t.split(".")[0];
    S[t];
    const p = bl.includes(h) ? f(t) : nc.includes(h) ? Jl(t) : { sections: [] }, m = (P == null ? void 0 : P.page) || 0;
    return [
      So(t, p),
      '<div class="tfMorePages" data-more-pages><section class="tfMorePage" aria-label="Control">' + il(t) + (h === "plant" ? dl(t).join("") : "") + p.sections.filter(Boolean).join("") + '</section><section class="tfMorePage" aria-label="Info">' + ps(t) + "</section></div>",
      '<div class="tfMoreDots" role="tablist" aria-label="Pages">' + ["Control", "Info"].map((g, M) => '<button type="button" role="tab" aria-selected="' + (M === m) + '" aria-label="' + g + '" data-more-page="' + M + '"' + (M === m ? "" : ' tabindex="-1"') + "></button>").join("") + "</div>"
    ];
  }
  function So(t, e, o) {
    var p, m, g, M, A;
    const r = (p = ae.areaOf) == null ? void 0 : p.call(ae, t), d = r && (((m = ae.rooms.find((_) => _.id === r)) == null ? void 0 : m.name) || ((A = (M = (g = i()) == null ? void 0 : g.areas) == null ? void 0 : M[r]) == null ? void 0 : A.name)) || "", h = e.button ? Ii(t, e) : '<div class="tfIcon"' + je(t, e.icon) + "></div>";
    return '<div class="tfMoreHead tfMoreTileHead' + (e.on ? " on" : "") + '"' + (e.tone ? ' data-tone="' + e.tone + '"' : "") + Lo(t) + ">" + (P != null && P.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + ec + "</button>" : "") + h + '<div class="tfName"><span class="activityRowName" id="tfMoreTitle">' + ot(At(t)) + "</span>" + (d ? '<span class="activityRowMeta">' + ot(d) + "</span>" : "") + '</div><button class="tfBack" type="button" data-more-close aria-label="Close">' + ip + "</button></div>";
  }
  const Xl = ["lock", "alarm_control_panel", "switch", "input_boolean", "fan", "valve", "media_player", "automation", "script", "scene", "button"], Jl = (t) => {
    var r;
    const e = t.split(".")[0], o = ((r = S[t]) == null ? void 0 : r.state) === "on";
    return { on: o, button: { act: re(e, "toggle", t), label: "Turn " + At(t) + (o ? " off" : " on") }, sections: [] };
  };
  function il(t) {
    const e = t.split(".")[0];
    if (Xl.includes(e) || e === "light" && !ce(t)) {
      const d = bl.includes(e) ? f(t) : nc.includes(e) ? Jl(t) : null;
      return d != null && d.button ? '<div class="tfMoreSpace tfMoreSwitch' + (d.on ? " on" : "") + '"' + (d.tone ? ' data-tone="' + d.tone + '"' : "") + Lo(t) + ">" + Ii(t, d) + "</div>" : "";
    }
    if (e === "cover") return '<div class="tfMoreSpace tfMoreFill"><div data-cover-art="' + ot(t) + '"></div></div>';
    if (e === "light" && ce(t)) return '<div class="tfMoreSpace tfMoreFill"><div class="tfDacPad" data-dac="more:' + ot(t) + '"></div></div>';
    const { big: o, lines: r } = Ql(t);
    return '<div class="tfMoreSpace"><div class="tfMoreBig' + (jn("pos", t) != null ? " live" : "") + '"><span class="tfMoreNum">' + ot(o[0]) + "</span>" + (o[1] ? '<span class="tfMoreUnit">' + ot(o[1]) + "</span>" : "") + '</div><div class="tfMoreFacts">' + r.map(([d, h]) => '<div class="tfMoreFact"><span>' + ot(d) + "</span><span>" + ot(h) + "</span></div>").join("") + "</div></div>";
  }
  function Ql(t) {
    var A;
    const e = S[t], o = ne(t), r = t.split(".")[0], d = (((A = $n[r]) == null ? void 0 : A.call($n, o)) || []).filter(([, _]) => _ != null && _ !== ""), h = (_) => {
      const B = d.findIndex(([Y]) => Y === _);
      return B < 0 ? null : d.splice(B, 1)[0][1];
    }, p = (_) => {
      const B = String(_).match(/^(-?[\d.,]+)\s*(.*)$/);
      return B ? [B[1], B[2]] : [String(_), ""];
    }, m = () => [ue(String(e.state).replace(/_/g, " ")), ""];
    let g;
    r === "light" ? (h("Brightness"), g = e.state === "on" && ia(t) ? [String(Ga(e)), "%"] : m()) : r === "climate" ? g = p(h("Current temperature") || me(o.current_temperature) + " °C") : r === "cover" ? (h("Position"), g = o.current_position != null ? [String(gn(t)), "%"] : m()) : r === "humidifier" ? g = p(h("Current humidity") || e.state) : r === "vacuum" ? g = p(h("Battery") || e.state) : r === "plant" ? g = p(h("Moisture") || e.state) : ["media_player", "lock", "alarm_control_panel", "valve"].includes(r) ? g = m() : g = p(e.state + (o.unit_of_measurement ? " " + o.unit_of_measurement : ""));
    const M = d.length ? d.slice(0, 4) : [["State", be(t)]];
    return { big: g, lines: M };
  }
  function ps(t) {
    var M, A, _, B, Y, $, H;
    const e = S[t], o = i(), r = (M = o == null ? void 0 : o.entities) == null ? void 0 : M[t], d = r != null && r.device_id ? (A = o == null ? void 0 : o.devices) == null ? void 0 : A[r.device_id] : null, h = '<div class="tfMoreGraph"><div class="tfMoreGroupName">Last 24 hours</div><svg class="tfGraph tfDay" data-day="' + ot(t) + '" role="img" aria-label="' + ot(At(t)) + ', last 24 hours"></svg></div>', p = (_ = ae.areaOf) == null ? void 0 : _.call(ae, t), m = p && (((B = ae.rooms.find((G) => G.id === p)) == null ? void 0 : B.name) || (($ = (Y = o == null ? void 0 : o.areas) == null ? void 0 : Y[p]) == null ? void 0 : $.name)) || "", g = [
      ...((H = $n[t.split(".")[0]]) == null ? void 0 : H.call($n, ne(t))) || [],
      ["Changed", e.last_changed && jr(Date.parse(e.last_changed))],
      ["Area", m],
      ["Device", d && (d.name_by_user || d.name)],
      ["Integration", (r == null ? void 0 : r.platform) && ue(r.platform.replace(/_/g, " "))],
      ["Entity", t]
    ].filter(([, G]) => G != null && G !== "");
    return h + '<div class="tfMoreRows">' + g.map(([G, j]) => '<div class="tfMoreRow"><span>' + ot(G) + "</span><span>" + ot(j) + "</span></div>").join("") + "</div>" + Rr(t) + (d ? '<button class="tfDetailsBtn tfMoreLink" type="button" data-path="/config/devices/device/' + ot(r.device_id) + '"><span>Device page</span>' + bp + "</button>" : "");
  }
  const Fd = () => "";
  let rl = "";
  function tr(t) {
    var e;
    P && (P.details = t, oa(), (e = Nt.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || e.focus({ preventScroll: !0 }));
  }
  const Ca = (t) => {
    const e = S[t], o = gn(t), r = Ao(t);
    return { kind: tc(e), name: At(t), text: be(t), pos: o, target: Math.abs(r - o) > 0.5 ? r : null, moving: e.state === "opening" || e.state === "closing", tilt: ao(t) ?? 100, canSet: se(t, pp) };
  };
  function gi(t) {
    t.querySelectorAll("[data-cover-art]").forEach((e) => {
      const o = e.dataset.coverArt, r = e.dataset.artKey || "more:" + o;
      let d = Ut.get(r);
      d || (d = Vh({ onMove: (h) => ar(o, h), onSet: (h) => {
        ar(o, h), c("pos", o);
      } }), d.coverId = o, Ut.set(r, d)), e.replaceWith(d.el), d.update(Ca(o));
    });
  }
  const sl = (t) => [...Ut.values()].filter((e) => e.coverId === t), us = () => Ut.forEach((t) => {
    S[t.coverId] && t.update(Ca(t.coverId));
  }), ll = () => {
    Ut.forEach((t, e) => {
      t.el.isConnected || (t.destroy(), Ut.delete(e));
    }), us();
  };
  function oa() {
    var h, p;
    if (!P || !(Xe(P.id) || S[P.id])) {
      Nt.hidden = !0;
      return;
    }
    if ([...gt.keys()].some((m) => m.endsWith("|" + P.id))) {
      us();
      return;
    }
    const t = Hd(P.id), e = Nt.querySelector(".tfMore");
    if (!t) {
      Nr();
      return;
    }
    const o = $l(Nt), r = Fd(P.id), d = P.frame ? P.frame.wide : P.id.startsWith("summary:") || P.id.startsWith("group:");
    if (Nt.hidden || !e || t.length !== Dn.length || e.classList.contains("wide") !== d) {
      const m = hs ? P.scroll || 0 : !Nt.hidden && e ? e.scrollTop : 0;
      if (Nt.innerHTML = '<div class="tfMorePair' + (Nt.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (d ? " wide" : "") + '"' + (P.frame ? ' style="height:' + P.frame.h + 'px"' : "") + ' tabindex="-1">' + t.join("") + "</section></div>", rl = r, Nt.classList.toggle("wide", d), Nt.hidden = !1, Mo(), gi(Nt), Za(Nt), qn(Nt), Nt.querySelectorAll("[data-day]").forEach((g) => ad(g.dataset.day, g, P.at)), cl(Nt), m && (Nt.querySelector(".tfMore").scrollTop = m), Co(), ds(Nt, o), !Nt.contains(n.activeElement)) {
        const g = Nt.querySelector("[data-more-close]");
        (h = g != null && g.offsetParent ? g : Nt.querySelector(".tfMore")) == null || h.focus({ preventScroll: !0 });
      }
    } else {
      if (t.forEach((m, g) => {
        var _, B;
        if (m === Dn[g] || m.includes("data-cover-art") || e.children[g].contains((B = (_ = n.activeElement) == null ? void 0 : _.matches) != null && B.call(_, "input,select") ? n.activeElement : null) || [...gt.keys()].some((Y) => e.children[g].querySelector('[data-drag="' + CSS.escape(Y) + '"]'))) return;
        const M = document.createElement("div");
        M.innerHTML = m;
        const A = al(e.children[g], M.firstElementChild);
        qn(A), cl(A), Za(A);
      }), r !== rl) {
        const m = Nt.querySelector(".tfMoreSideBody");
        m && (m.innerHTML = r), rl = r;
      }
      e.querySelectorAll("[data-day]").forEach((m) => {
        m.innerHTML || ad(m.dataset.day, m, P.at);
      }), Co(), Nt.contains(n.activeElement) || ds(Nt, o);
    }
    (p = Nt.querySelector(".tfMorePair")) == null || p.classList.toggle("details", !!(P.details && r)), Dn = t, us();
  }
  function Co() {
    const t = Nt.querySelector("[data-more-pages]");
    !t || !P || (t.scrollTo({ left: (P.page || 0) * t.clientWidth, behavior: "instant" }), nn(), vi(t));
  }
  function vi(t) {
    const e = t.children[(P == null ? void 0 : P.page) || 0];
    e && (t.style.height = e.scrollHeight + "px");
  }
  function nn() {
    const t = (P == null ? void 0 : P.page) || 0;
    Nt.querySelectorAll("[data-more-page]").forEach((e) => {
      const o = Number(e.dataset.morePage) === t;
      e.setAttribute("aria-selected", String(o)), e.tabIndex = o ? 0 : -1;
    });
  }
  function $o(t, e) {
    var r, d;
    const o = Nt.querySelector("[data-more-pages]");
    !o || !P || (P.page = Math.max(0, Math.min(1, t)), o.scrollTo({ left: P.page * o.clientWidth, behavior: (r = window.matchMedia) != null && r.call(window, "(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }), nn(), vi(o), (d = Nt.querySelector('[data-more-page="' + P.page + '"]')) == null || d.focus({ preventScroll: !0 }));
  }
  let fs = 0;
  Nt.addEventListener("scroll", (t) => {
    var o;
    const e = t.target;
    !((o = e.matches) != null && o.call(e, "[data-more-pages]")) || !P || (clearTimeout(fs), fs = setTimeout(() => {
      const r = Math.round(e.scrollLeft / Math.max(1, e.clientWidth));
      r !== (P.page || 0) && (P.page = r, nn(), vi(e));
    }, 80));
  }, !0), setInterval(() => {
    P && oa();
  }, 15 * 1e3);
  function Xo(t, e) {
    var d, h;
    const o = !!(P && e && Nt.contains(e)), r = o && Nt.querySelector(".tfMore");
    if (o && (P.scroll = r.scrollTop), o && !P.under) {
      const p = Nt.querySelector(".tfMorePair"), m = { more: P, parts: Dn, opener: e };
      p.classList.add("still"), p.style.transform = "", p.inert = !0, Fa.innerHTML = "", Fa.appendChild(p), Fa.classList.toggle("wide", Nt.classList.contains("wide")), Fa.hidden = !1, Nt.hidden = !0, Nt.innerHTML = "", P = { id: t, opener: e, back: null, frame: null, under: m, at: Number((d = e == null ? void 0 : e.dataset) == null ? void 0 : d.at) || null }, Pr();
      return;
    }
    P = { id: t, opener: o ? P.opener : e, back: o ? P : null, frame: o ? P.frame || { wide: r.classList.contains("wide"), h: r.offsetHeight } : null, under: o ? P.under : null, at: Number((h = e == null ? void 0 : e.dataset) == null ? void 0 : h.at) || null }, Pr();
  }
  let hs = !1;
  function Pr() {
    Dn = [], hs = !Nt.hidden, Ut.forEach((t, e) => {
      e !== P.id && Nt.contains(t.el) && (t.destroy(), Ut.delete(e));
    }), oa(), hs = !1;
  }
  function Nr() {
    if (!P) return;
    const t = P;
    Df(Nt, () => {
      P === t && er();
    });
  }
  function er() {
    var r, d, h, p, m, g, M, A;
    const t = P == null ? void 0 : P.opener, e = P == null ? void 0 : P.under;
    P = null, Ut.forEach((_, B) => {
      Nt.contains(_.el) && (_.destroy(), Ut.delete(B));
    }), _a.forEach((_, B) => {
      B.startsWith("more:") && _a.delete(B);
    }), Nt.hidden = !0, Nt.innerHTML = "";
    const o = { preventScroll: !0 };
    if (e) {
      const _ = Fa.firstElementChild;
      P = e.more, Dn = e.parts, _ && (_.inert = !1, Nt.appendChild(_)), Nt.classList.toggle("wide", Fa.classList.contains("wide")), Fa.hidden = !0, Fa.innerHTML = "", Nt.hidden = !1;
      const B = Nt.querySelector(".tfMore");
      B && (B.scrollTop = P.scroll || 0), oa(), (d = (r = e.opener) != null && r.isConnected ? e.opener : Nt.querySelector("[data-more-close]")) == null || d.focus(o);
      return;
    }
    t != null && t.isConnected ? t.focus(o) : (h = t == null ? void 0 : t.dataset) != null && h.more ? (p = D.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || p.focus(o) : (m = t == null ? void 0 : t.dataset) != null && m.summary ? (g = D.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || g.focus(o) : (M = t == null ? void 0 : t.hasAttribute) != null && M.call(t, "data-favs-edit") && ((A = D.querySelector("[data-favs-edit]")) == null || A.focus(o));
  }
  const td = { moisture: "moisture", light: "light", brightness: "light", temperature: "temperature", fertility: "fertility", conductivity: "fertility" };
  function dl(t) {
    const e = String(ne(t).problem || ""), o = "sensor." + t.split(".")[1] + "_";
    return e === "none" ? [] : e.split(",").map((r) => r.trim().split(" ")).map(([r, d]) => {
      const h = td[r], p = o + h;
      if (!h || !S[p] || !Fr[h]) return "";
      const m = ne(p).unit_of_measurement || "", [g, M] = Fr[h], A = d === "low";
      return '<div class="tfMoreGroup tfPlantProblem"><div class="tfMoreGroupName">' + ot(At(p)) + '</div><svg class="tfGraph tfPlantGraph" data-plant-graph="' + ot(p) + '" data-guide="' + (A ? g : M) + '" data-guide-word="' + ot("Wants " + (A ? "" : "up to ") + (A ? g : M).toLocaleString() + (m === "%" ? "%" : m ? " " + m : "") + (A ? " or more" : "")) + '" role="img" aria-label="' + ot(At(p)) + ', last 24 hours"></svg></div>';
    }).filter(Boolean);
  }
  const cl = (t) => t.querySelectorAll("[data-plant-graph]").forEach((e) => bi(e.dataset.plantGraph, e, { guide: Number(e.dataset.guide), guideWord: e.dataset.guideWord }).then(() => Gn(e)));
  function ms(t, e, o, r = {}) {
    const d = e.map((G) => G[1]).concat(r.guide != null ? [r.guide] : []), h = r.zero ? 0 : Math.min(...d), p = Math.max(...d), m = Math.max(120, t.clientWidth || 260), g = Math.max(60, t.clientHeight || 130), M = 8, A = g - 20, _ = Date.now() - 24 * 3600 * 1e3, B = 24 * 3600 * 1e3, Y = (G) => Math.max(0, Math.min(m, (G - _) / B * m)), $ = (G) => p === h ? (M + A) / 2 : A - (G - h) / (p - h) * (A - M);
    let H = "M" + Y(e[0][0]).toFixed(1) + " " + $(e[0][1]).toFixed(1);
    if (e.length > 2) H = qp(e.map((G) => [Y(G[0]), $(G[1])]));
    else for (let G = 1; G < e.length; G++) H += r.smooth ? "L" + Y(e[G][0]).toFixed(1) + " " + $(e[G][1]).toFixed(1) : "H" + Y(e[G][0]).toFixed(1) + "V" + $(e[G][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + m + " " + g), t.setAttribute("aria-label", o), t.innerHTML = Wp(m, M, A) + '<path d="' + H + "V" + A + "H" + Y(e[0][0]).toFixed(1) + 'Z" fill="' + (r.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + H + '" fill="none" stroke="' + (r.colour || "var(--primary)") + '" stroke-width="' + Ze.graphs.weight + '" stroke-linejoin="round" stroke-linecap="round"/><text x="0" y="' + (g - 4) + '">24 h ago</text><text x="' + m + '" y="' + (g - 4) + '" text-anchor="end">Now</text>' + (r.guide != null ? '<line class="tfGuide" x1="0" x2="' + m + '" y1="' + $(r.guide).toFixed(1) + '" y2="' + $(r.guide).toFixed(1) + '"/><text class="tfGuideWord" x="' + m + '" y="' + ($(r.guide) < 20 ? $(r.guide) + 14 : $(r.guide) - 5).toFixed(1) + '" text-anchor="end">' + ot(r.guideWord || "") + "</text>" : "");
  }
  const gs = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, pl = (t, e) => {
    const o = t.split(".")[0];
    return gs[o] ? gs[o].includes(e) : o === "alarm_control_panel" || o === "climate" || o === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(e) : e === "on";
  }, ul = (t) => {
    const e = t.split(".")[0], o = ne(t).device_class;
    return e === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[o] || (gd.includes(o) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[e] || "On";
  }, fl = /* @__PURE__ */ new Map();
  let vs = 0;
  async function ed(t) {
    let e = fl.get(t);
    if (!e || Date.now() - e.at > 60 * 1e3) {
      let d = [];
      try {
        const h = await V({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        d = ((h == null ? void 0 : h[t]) || []).map((p) => [p.lu != null ? p.lu * 1e3 : Date.parse(p.last_updated || p.last_changed), String(p.s ?? p.state)]).filter(([p]) => Number.isFinite(p));
      } catch {
      }
      d.length || (d = (ho || []).filter((h) => h.entity_id === t).map((h) => [h.when * 1e3, String(h.state)])), e = { at: Date.now(), pts: d }, fl.set(t, e);
    }
    const o = S[t], r = e.pts.slice().sort((d, h) => d[0] - h[0]);
    return o && (!r.length || r[r.length - 1][1] !== o.state) && r.push([Date.parse(o.last_changed) || Date.now(), o.state]), r;
  }
  async function ad(t, e, o) {
    const r = await ed(t);
    if (!e.isConnected) return;
    const d = r.map(([U, _t]) => [U, Number(_t)]);
    if (r.length > 1 && d.every(([, U]) => Number.isFinite(U))) {
      ms(e, d, At(t) + ", last 24 hours");
      return;
    }
    const h = Date.now(), p = h - 864e5, m = Math.max(200, e.clientWidth || 360), g = 62, M = (U) => Math.max(0, Math.min(m, (U - p) / 864e5 * m)), A = [];
    let _ = null;
    r.forEach(([U, _t]) => {
      const xt = pl(t, _t);
      xt && _ == null ? _ = Math.max(U, p) : !xt && _ != null && (A.push([_, Math.max(U, p)]), _ = null);
    }), _ != null && A.push([_, h]);
    const B = Bs(t) ? "var(--danger)" : t.startsWith("light.") ? "#ffaa00" : "var(--primary)", Y = ul(t), $ = "tfDayClip" + ++vs, H = A.map(([U, _t]) => Y + (_t >= h - 1e3 && U <= p + 1e3 ? " all day" : _t >= h - 1e3 ? " since " + We(U) : U <= p + 1e3 ? " until " + We(_t) : " " + We(U) + "–" + We(_t)));
    let G = "", j = -1 / 0;
    A.forEach(([U], _t) => {
      const xt = H[_t].length * 5.4, ct = Math.min(M(U), m - xt);
      ct < j + 8 || (G += '<text x="' + ct.toFixed(1) + '" y="10">' + ot(H[_t]) + "</text>", j = ct + xt);
    });
    let ft = '<text x="' + m + '" y="' + (g - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((U) => {
      let _t = new Date(h).setHours(U, 0, 0, 0);
      _t > h && (_t -= 864e5), M(_t) > 8 && M(_t) < m - 34 && (ft += '<text x="' + M(_t).toFixed(1) + '" y="' + (g - 2) + '" text-anchor="middle">' + String(U).padStart(2, "0") + "</text>");
    }), e.setAttribute("viewBox", "0 0 " + m + " " + g), e.setAttribute("aria-label", At(t) + ", last 24 hours: " + (H.length ? H.join(", ") : "no changes")), e.innerHTML = '<clipPath id="' + $ + '"><rect x="0" y="18" width="' + m + '" height="26" rx="8"/></clipPath>' + G + '<rect x="0" y="18" width="' + m + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + $ + ')">' + A.map(([U, _t]) => '<rect x="' + M(U).toFixed(1) + '" y="18" width="' + Math.max(2, M(_t) - M(U)).toFixed(1) + '" height="26" fill="' + B + '"/>').join("") + "</g>" + (o && o >= p ? '<line x1="' + M(o).toFixed(1) + '" x2="' + M(o).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + ft;
  }
  function nd(t) {
    var r;
    const e = Number((r = S[t]) == null ? void 0 : r.state), o = Date.now();
    if (ne(t).state_class === "total_increasing") {
      const d = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), h = Math.max(1, o - d);
      return [...Array(49)].map((p, m) => d + h * m / 48).map((p) => [p, Math.round(e * Math.pow((p - d) / h, 1.3) * 100) / 100]);
    }
    if (Jo(t) && t.endsWith("_moisture")) return [...Array(48)].map((d, h) => [o - (48 - h) * 30 * 60 * 1e3, Math.round((e + 22 * Math.pow(1 - h / 48, 1.2)) * 10) / 10]);
    if (Jo(t) && t.endsWith("_light")) {
      const d = (p) => {
        const m = new Date(p).getHours() + new Date(p).getMinutes() / 60;
        return Math.max(0, Math.sin((m - 6) / 14 * Math.PI));
      }, h = (p) => 0.8 + 0.2 * d(p);
      return [...Array(48)].map((p, m) => o - (48 - m) * 30 * 60 * 1e3).map((p) => [p, Math.round(e * h(p) / h(o))]);
    }
    return [...Array(48)].map((d, h) => [o - (48 - h) * 30 * 60 * 1e3, Math.round(e * (0.96 + 0.04 * Math.sin(h / 6)) * 10) / 10]);
  }
  async function bi(t, e, o = {}) {
    var $, H;
    let r = lt.get(t);
    if (t.endsWith("_solar_power")) r = { at: Date.now(), points: Sc() };
    else if (Jo(t)) r = { at: Date.now(), points: nd(t) };
    else if (!r || Date.now() - r.at > 5 * 60 * 1e3) {
      try {
        const G = new Date(Date.now() - 864e5).toISOString(), j = await V({ type: "history/history_during_period", start_time: G, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), ft = ((j == null ? void 0 : j[t]) || []).map((U) => [U.lu != null ? U.lu * 1e3 : Date.parse(U.last_updated || U.last_changed), Number(U.s ?? U.state)]).filter(([U, _t]) => Number.isFinite(U) && Number.isFinite(_t));
        r = { at: Date.now(), points: ft };
      } catch {
        r = { at: Date.now(), points: [] };
      }
      lt.set(t, r);
    }
    const d = e || D.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!d) return;
    const h = S[t], p = (($ = h == null ? void 0 : h.attributes) == null ? void 0 : $.unit_of_measurement) || "", m = r.points.slice(), g = Number(h == null ? void 0 : h.state);
    if (Number.isFinite(g) && !t.endsWith("_solar_power") && m.push([Date.now(), g]), m.length < 2) {
      d.setAttribute("aria-label", At(t) + ": no history for the last 24 hours"), d.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const M = m.map((G) => G[1]), A = Math.min(...M), _ = Math.max(...M), B = (G) => G.toLocaleString(void 0, { maximumFractionDigits: Math.abs(G) >= 100 ? 0 : 1 }), Y = ((H = h == null ? void 0 : h.attributes) == null ? void 0 : H.state_class) === "total_increasing";
    ms(d, m, At(t) + ", last 24 hours: " + (Y ? "+" + B(M[M.length - 1] - M[0]) : A === _ ? B(A) : B(A) + " to " + B(_)) + (p ? " " + p : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power"), ...o });
  }
  function bs() {
    const t = D == null ? void 0 : D.querySelector("[data-solar]");
    if (!t) return;
    const e = Sc();
    ms(t, e, "Solar, last 24 hours: up to " + me(Math.max(...e.map((o) => o[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function hl(t, e) {
    const o = e.entity_id, r = Wt.get(o) || {}, d = { open_cover: 100, close_cover: 0, set_cover_position: e.position, toggle: gn(o) > 0 ? 0 : 100 }[t], h = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: e.tilt_position }[t];
    d != null && (r.pos = d), h != null && (r.tilt = h), t === "stop_cover" && (delete r.pos, delete r.tilt), t === "stop_cover_tilt" && delete r.tilt, r.at = Date.now(), Wt.set(o, r);
  }
  function od(t, e, o) {
    var d;
    const r = o == null ? void 0 : o.entity_id;
    return t !== "light" || typeof r != "string" || !Wn[r] || !ia(r) || o.brightness_pct != null || o.brightness != null ? [e, o] : e !== "turn_on" && !(e === "toggle" && ((d = S[r]) == null ? void 0 : d.state) !== "on") ? [e, o] : ["turn_on", { ...o, brightness_pct: Wn[r] }];
  }
  function Ir(t, e, o, r) {
    let d = { entity_id: o, ...r || {} };
    return [e, d] = od(t, e, d), t === "cover" && hl(e, d), Vt[o] = (Vt[o] || 0) + 1, Qo.set(hp, JSON.stringify(Vt)), za.call(t, e, d) ? Promise.resolve() : Promise.resolve(O(t, e, d));
  }
  function ws(t) {
    const [e, o, r, d] = t.split("|");
    Ir(e, o, r, d ? JSON.parse(d) : null).catch(() => {
    });
  }
  function ar(t, e) {
    gt.set("pos|" + t, e), La.delete(t), Dn = Dn.map(() => ""), [D, Nt].forEach((r) => r.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((d) => Ni(d, e)));
    const o = D.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (o && (o.textContent = Math.round(e) + "%"), (P == null ? void 0 : P.id) === t) {
      const r = Nt.querySelector(".tfMoreState"), d = Nt.querySelector(".tfMoreSub");
      r && (r.textContent = Math.round(e) + "%", r.classList.add("live")), d && (d.textContent = "Currently " + gn(t) + "%");
    }
    sl(t).forEach((r) => r.update(Ca(t)));
  }
  const id = (t, e) => {
    const o = t.shiftKey ? 10 : 1, r = { ArrowUp: e + o, ArrowRight: e + o, ArrowDown: e - o, ArrowLeft: e - o, PageUp: e + 25, PageDown: e - 25, Home: 0, End: 100 }[t.key];
    return r == null ? null : Math.max(0, Math.min(100, Math.round(r)));
  };
  function rd(t, e) {
    var H;
    const o = t.dataset.blocks;
    (H = t.setPointerCapture) == null || H.call(t, e.pointerId);
    const r = (G) => {
      const j = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (G.clientX - j.left) / j.width * 100));
    }, d = r(e), h = e.clientX;
    let p = !1, m = Ao(o), g = d, M = 0;
    const A = () => {
      m = Math.abs(g - m) < 0.2 ? g : m + (g - m) * 0.14, ar(o, m), M = requestAnimationFrame(A);
    }, _ = () => {
      p || (p = !0, t.classList.add("fine"), M = requestAnimationFrame(A));
    }, B = setTimeout(_, 350), Y = (G) => {
      g = r(G), Math.abs(G.clientX - h) > 6 && (clearTimeout(B), _());
    }, $ = () => {
      clearTimeout(B), cancelAnimationFrame(M), t.removeEventListener("pointermove", Y), t.removeEventListener("pointerup", $), t.removeEventListener("pointercancel", $), t.classList.remove("fine"), ar(o, p ? Math.round(m) : (Math.min(3, Math.floor(d / 25)) + 1) * 25), c("pos", o);
    };
    t.addEventListener("pointermove", Y), t.addEventListener("pointerup", $), t.addEventListener("pointercancel", $);
  }
  function ml(t) {
    var m, g;
    const [e, o] = t.dataset.open.split("|"), r = t.closest(".tfCard"), d = t.getBoundingClientRect(), h = (m = t.querySelector(".tfIcon")) == null ? void 0 : m.getBoundingClientRect();
    L = { key: e, id: o, h: r ? Math.round(r.getBoundingClientRect().height) : 0, from: d, chip: h }, La.delete(e), aa();
    const p = D.querySelector(".tfOpen");
    p && (L.rel = d.top - p.getBoundingClientRect().top), Af(p, d, h), (g = D.querySelector(".tfOpen [data-close]")) == null || g.focus({ preventScroll: !0 });
  }
  function gl(t) {
    var e;
    N = t.dataset.area, D.querySelectorAll(".tfAreaPanel").forEach((o) => {
      var d;
      const r = o === t;
      o.classList.toggle("active", r), o.setAttribute("aria-expanded", String(r)), (d = o.querySelector(".panelExpanded")) == null || d.toggleAttribute("inert", !r);
    }), La.set("areas", Ht(((e = D.querySelector('[data-k="areas"]')) == null ? void 0 : e.style.order) || 1));
  }
  const a = {
    bright: { value: (t, e) => Math.round(e * 100), text: (t, e) => e ? e + "%" : "Off", send: (t, e) => e > 0 ? ["light", "turn_on", { brightness_pct: e }] : ["light", "turn_off", {}] },
    ct: { value: (t, e) => {
      const [o, r] = Ye(t);
      return Math.round(o + e * (r - o));
    }, text: (t, e) => e.toLocaleString() + "k", send: (t, e) => ["light", "turn_on", { color_temp_kelvin: e }] },
    hue: { value: (t, e) => Math.round(e * 360), text: () => "Colour", send: (t, e) => {
      var o;
      return ["light", "turn_on", { hs_color: [e, Math.max(60, ((o = ne(t).hs_color) == null ? void 0 : o[1]) || 100)] }];
    } },
    pos: { value: (t, e) => Math.round(e * 100), text: (t, e) => Math.round(e) + "%", send: (t, e) => ["cover", "set_cover_position", { position: Math.round(e) }] },
    tilt: { value: (t, e) => Math.round(e * 100), text: (t, e) => "Tilt " + e + "%", send: (t, e) => ["cover", "set_cover_tilt_position", { tilt_position: e }] },
    vol: { value: (t, e) => Math.round(e * 100) / 100, text: (t, e) => Math.round(e * 100) + "%", send: (t, e) => ["media_player", "volume_set", { volume_level: e }] }
  };
  function s(t, e, o, r) {
    var g;
    const d = a[e].value(o, r);
    gt.set(e + "|" + o, d);
    const h = Math.round(r * 100) + "%", p = t.querySelector("i");
    if (e === "tilt") {
      p.style.width = "calc((100% - 8px) * " + r + ")";
      const [M, A] = t.querySelectorAll("span");
      M.classList.toggle("lit", r > 0.08), A.classList.toggle("lit", r > 0.92), La.delete(o), Dn = Dn.map(() => ""), sl(o).forEach((_) => _.update(Ca(o)));
    } else if (p) p.style.width = h;
    else {
      let M = t.querySelector("b");
      M || (M = document.createElement("b"), t.appendChild(M)), M.style.left = h;
    }
    t.setAttribute("aria-valuenow", String(Math.round(r * 100)));
    const m = (g = t.closest(".tfAction") || t.closest(".tfMore")) == null ? void 0 : g.querySelector(".tfName .activityRowMeta, .tfMoreState");
    m && (m.textContent = a[e].text(o, d));
  }
  function c(t, e) {
    const o = gt.get(t + "|" + e), [r, d, h] = a[t].send(e, o), p = () => setTimeout(() => {
      gt.delete(t + "|" + e), aa();
    }, 1500);
    Ir(r, d, e, h).then(p, p);
  }
  function v(t) {
    t.addEventListener("click", (e) => {
      var r;
      const o = e.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],[data-more-page],[data-path],.tfAreaPanel");
      if (sa && !e.target.closest(".tfBoardMenu,[data-board-more]") && Yn(), !(!o || !t.contains(o) || o.disabled))
        if (o.dataset.boardMore)
          (sa == null ? void 0 : sa.key) === o.dataset.boardMore ? Yn(!0) : Gi(o.dataset.boardMore, o);
        else if (o.dataset.boardAct) Ui(sa.key, o.dataset.boardAct);
        else if (o.dataset.boardShow) Ee(o.dataset.boardShow);
        else if (o.dataset.favHide) Dr(o.dataset.favHide, !1);
        else if (o.dataset.energyPick) Ho(o.dataset.energyPick);
        else if (o.dataset.act) ws(o.dataset.act);
        else if (o.hasAttribute("data-details")) tr(!(P != null && P.details));
        else if (o.hasAttribute("data-details-close")) tr(!1);
        else if (o.dataset.summary) xr(o.dataset.summary, o);
        else if (o.dataset.star) ha(o.dataset.star);
        else if (o.hasAttribute("data-more-back")) {
          const d = P.id;
          P = P.back, Pr(), (r = Nt.querySelector('.tfMore [data-more="' + CSS.escape(d) + '"]')) == null || r.focus({ preventScroll: !0 });
        } else if (o.hasAttribute("data-favs-edit")) Xo("favourites", o);
        else if (o.dataset.acts) JSON.parse(o.dataset.acts).forEach(([d, h, p, m]) => Ir(d, h, p, m).catch(() => {
        }));
        else if (o.dataset.more) Xo(o.dataset.more, o);
        else if (o.hasAttribute("data-more-close")) Nr();
        else if (o.dataset.morePage) $o(Number(o.dataset.morePage));
        else if (o.dataset.path) Ur(o.dataset.path);
        else if (o.dataset.go) mi("room:" + o.dataset.go);
        else if (o.hasAttribute("data-area-back")) Br();
        else if (o.dataset.open) ml(o);
        else if (o.hasAttribute("data-close")) {
          const d = L, h = o.closest(".tfOpen"), p = h == null ? void 0 : h.getBoundingClientRect().top, m = d.from && p != null ? new DOMRect(d.from.left, p + (d.rel || 0), d.from.width, d.from.height) : d.from;
          Ef(h, m, () => {
            var g;
            L === d && (L = null, La.delete(d.key), aa(), (g = D.querySelector('[data-open="' + CSS.escape(d.key + "|" + d.id) + '"]')) == null || g.focus({ preventScroll: !0 }));
          });
        } else o.classList.contains("tfAreaPanel") && !o.classList.contains("active") && gl(o);
    }), t.addEventListener("keydown", (e) => {
      var r, d, h, p, m, g, M;
      const o = e.target;
      if ((r = o.dataset) != null && r.open && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), ml(o)), (d = o.dataset) != null && d.energyPick && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), Ho(o.dataset.energyPick)), (h = o.classList) != null && h.contains("tfAreaPanel") && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), gl(o)), (p = o.dataset) != null && p.summary && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), xr(o.dataset.summary, o)), e.key === "Escape" && sa && t === D) {
        e.preventDefault(), Yn(!0);
        return;
      }
      if (e.key === "Escape" && va && t === D) {
        e.preventDefault(), zs(!1), (m = u("dashEditNav")) == null || m.focus();
        return;
      }
      if (e.key === "Escape" && W && t === D && (e.preventDefault(), Br()), (g = o.dataset) != null && g.blocks) {
        const A = o.dataset.blocks, _ = id(e, Math.round(Ao(A)));
        if (_ == null) return;
        e.preventDefault(), ar(A, _), clearTimeout(pa.get(A)), pa.set(A, setTimeout(() => c("pos", A), 500));
        return;
      }
      if ((M = o.dataset) != null && M.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
        e.preventDefault();
        const [A, _] = o.dataset.drag.split("|"), B = Number(o.getAttribute("aria-valuenow")) / 100, Y = e.key === "Home" ? 0 : e.key === "End" ? 1 : Math.max(0, Math.min(1, B + (e.key === "ArrowLeft" || e.key === "ArrowDown" ? -0.05 : 0.05)));
        s(o, A, _, Y), c(A, _);
      }
    }), t.addEventListener("pointerdown", (e) => {
      var xt;
      const o = e.target.closest("[data-blocks]");
      if (o && e.button === 0) {
        e.preventDefault(), rd(o, e);
        return;
      }
      const r = e.target.closest("[data-drag]");
      if (!r || e.button > 0) return;
      const [d, h] = r.dataset.drag.split("|"), p = d === "bright" && !ia(h), m = e.pointerType !== "mouse";
      if (p && !m) {
        ws(re("light", "toggle", h));
        return;
      }
      const g = d === "bright" && ((xt = S[h]) == null ? void 0 : xt.state) !== "on", M = d === "tilt" ? 4 : 0, A = () => r.getBoundingClientRect().width - M * 2, _ = (ct) => {
        const Pt = r.getBoundingClientRect();
        return Math.max(0, Math.min(1, (ct.clientX - Pt.left - M) / A()));
      };
      let B = m ? "waiting" : g ? "pressed" : "dragging", Y = 0;
      const $ = e.clientX, H = e.clientY, G = (ct, Pt) => Math.hypot(ct.clientX - $, ct.clientY - H) > Pt, j = () => {
        try {
          r.setPointerCapture(e.pointerId);
        } catch {
        }
      };
      m || (e.preventDefault(), j()), B === "dragging" && s(r, d, h, _(e));
      const ft = () => {
        var ct, Pt;
        B = "sliding", Mt = r, r.classList.add("held"), j(), (ct = navigator.userActivation) != null && ct.hasBeenActive && ((Pt = navigator.vibrate) == null || Pt.call(navigator, 8)), Y = g ? (Wn[h] ?? 100) / 100 : Number(r.getAttribute("aria-valuenow")) / 100;
      }, U = (ct) => {
        B === "waiting" && G(ct, yt) ? !p && Math.abs(ct.clientX - $) > Math.abs(ct.clientY - H) ? ft() : B = "gone" : B === "pressed" && G(ct, 4) && (B = "dragging"), B === "sliding" ? s(r, d, h, Math.max(0, Math.min(1, Y + (ct.clientX - $) / A()))) : B === "dragging" && s(r, d, h, _(ct));
      }, _t = (ct) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((Pt, Et) => r.removeEventListener(Pt, Et ? _t : U)), r.classList.remove("held"), Mt === r && (Mt = null), B === "sliding" || B === "dragging" ? c(d, h) : ct.type === "pointerup" && p ? ws(re("light", "toggle", h)) : ct.type === "pointerup" && g && (B === "waiting" || B === "pressed") && Ir("light", "turn_on", h).catch(() => {
        });
      };
      r.addEventListener("pointermove", U), r.addEventListener("pointerup", _t), r.addEventListener("pointercancel", _t);
    }), t.addEventListener("touchmove", (e) => {
      Mt && e.cancelable && e.preventDefault();
    }, { passive: !1 });
  }
  return D && k && (kl(), v(D), v(Nt), Nt.addEventListener("click", (t) => {
    t.target === Nt && Nr();
  }), (C = n.getElementById("homeNav")) == null || C.addEventListener("click", () => {
    W && Br();
  }), (R = n.querySelector(".bottomNav")) == null || R.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + wp + "</button>"), (q = u("dashEditNav")) == null || q.addEventListener("click", () => zs(!va)), D.addEventListener("pointerdown", Ul), D.addEventListener("scroll", (t) => {
    var e;
    (e = t.target.classList) != null && e.contains("hcFadeList") && Pl(t.target);
  }, !0), new ResizeObserver(() => {
    b.classList.contains("tfDash") && Oo() !== Fo ? aa() : yn();
  }).observe(D), window.addEventListener("resize", yn, { passive: !0 }), Nt.addEventListener("keydown", (t) => {
    var e, o;
    t.key === "Escape" ? (t.stopPropagation(), P != null && P.details ? tr(!1) : Nr()) : (t.key === "ArrowLeft" || t.key === "ArrowRight") && ((o = (e = t.target).closest) != null && o.call(e, ".tfMoreDots")) && (t.preventDefault(), $o(((P == null ? void 0 : P.page) || 0) + (t.key === "ArrowRight" ? 1 : -1)));
  })), at(), {
    update(t) {
      if (!k) return;
      const e = !Object.keys(S).length;
      S = { ...Object.fromEntries(Object.entries(S).filter(([r]) => Jo(r))), ...t || {} };
      for (const r in S) r.startsWith("light.") && S[r].state === "on" && ia(r) && lo(r, Ga(S[r]));
      e ? ko() : aa();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      to = !0, Le == null || Le.destroy(), Le = null, Ge == null || Ge.forEach((t) => t.destroy()), Ge = null;
    },
    resume() {
      to = !1, !(!k || !(D != null && D.querySelector("[data-tf]"))) && (te.isConnected && cr(te.style.order), $t());
    }
  };
}
const mm = "0.81.0", ic = "move_assistant", gm = "move_assistant", kp = "move_assistant_checkin_reminder";
function vm() {
  if (document.getElementById("move-assistant-inter")) return;
  const n = document.createElement("link");
  n.id = "move-assistant-inter", n.rel = "stylesheet", n.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(n);
}
class bm extends HTMLElement {
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
    vm();
    const l = this.shadowRoot || this.attachShadow({ mode: "open" });
    l.innerHTML = `<style>${pu}${uu}${fu}${hu}</style>${mu}`;
    const i = l.getElementById("app");
    i.style.opacity = "0";
    let u = null;
    try {
      const b = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: ic
      });
      u = (b == null ? void 0 : b.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(u), this._app = Nu(l, {
      data: u,
      save: (b) => this._save(b),
      fire: (b, x) => this._fire(b, x),
      ws: (b) => this._hass.callWS(b),
      subscribe: (b, x) => {
        var k, E;
        return (E = (k = this._hass) == null ? void 0 : k.connection) != null && E.subscribeMessage ? this._hass.connection.subscribeMessage(x, b) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var b, x;
        return Object.keys(((x = (b = this._hass) == null ? void 0 : b.services) == null ? void 0 : x.notify) || {}).sort();
      },
      setReminderAutomation: (b) => this._setReminderAutomation(b),
      setLight: (b) => this.classList.toggle("lightBody", b),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this._test = hm(l, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), Tf(l, i), _f(l), this.isConnected || (this._app.suspend(), this._test.suspend()), i.style.transition = "opacity .2s ease", i.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var i;
    const l = (i = this._hass) == null ? void 0 : i.connection;
    l != null && l.subscribeMessage && l.subscribeMessage(
      (u) => {
        var x;
        const b = JSON.stringify((u == null ? void 0 : u.value) ?? null);
        b === this._lastSaved || b === this._pendingJson || (this._lastSaved = b, (x = this._app) == null || x.applyRemoteData(u.value));
      },
      { type: "frontend/subscribe_user_data", key: ic }
    ).catch(() => {
    });
  }
  _save(l) {
    this._pendingJson = JSON.stringify(l), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const i = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: ic,
          value: JSON.parse(i)
        }), this._lastSaved = i;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(l, i = {}) {
    var u, b;
    ((u = this._config) == null ? void 0 : u.events) !== !1 && ((b = this._hass) == null || b.callWS({
      type: "fire_event",
      event_type: gm,
      event_data: { action: l, ...i }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(l) {
    const i = `config/automation/config/${kp}`;
    if (!l) {
      try {
        await this._hass.callApi("DELETE", i);
      } catch (x) {
        if ((x == null ? void 0 : x.status_code) !== 404 && (x == null ? void 0 : x.status) !== 404) throw x;
      }
      return;
    }
    const u = (x) => `${x}:00`, b = window.location.pathname;
    await this._hass.callApi("POST", i, {
      id: kp,
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
            data: { url: b, clickAction: b }
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
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", bm), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${mm} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
