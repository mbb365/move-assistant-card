const pu = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn,.tfSeg>button,.tfMoreSwitch>button){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', uu = `#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)),#homeView .tfATile{transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover,#homeView .tfATile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .toggleRow:has(>.themeChoice,>.settingsSelect){flex-direction:column;align-items:stretch;gap:12px}#housePane .toggleRow>.settingsSelect{width:100%}#housePane .themeChoice[hidden]{display:none}#housePane .houseTab>.card:has(>.tfSetGroup){gap:24px}#housePane .tfSetGroup{display:grid;gap:8px}#housePane .tfSetGroup>.sectionLabel{margin:0 16px}#housePane{container:housepane/inline-size}#housePane .tfLightCards{display:none}@container housepane (width < 720px){#housePane .houseTab .metaTableWrap{display:none}#housePane .tfLightCards{display:grid;gap:8px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}#housePane .themeChoice,.tfBoardMenu .tfHeightTabs,.wb .wbSegments{gap:4px;padding:4px;border:0;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}#housePane .themeChoice{display:flex;flex-wrap:nowrap;width:100%}#housePane .themeChoice>button{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button){height:38px;min-width:0;min-height:0;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile)!important;white-space:nowrap;cursor:pointer}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button):hover:not(:disabled):not([aria-pressed=true]):not([aria-checked=true]):not(.active){background:transparent;color:var(--text)}:is(#housePane .themeChoice :is(.wxLayoutBtn[aria-pressed=true],.themeBtn.active),.tfBoardMenu .tfHeightTabs button[aria-checked=true],.wb .wbSegments button[aria-pressed=true]){background:var(--bright);color:var(--on-bright)}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfATags{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:4px;margin-left:auto;min-width:0}.tfATags .sourceTag{display:block;margin:0;max-width:100%;padding:6px 12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}#app.house .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}#app.house .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-l);--g1:var(--g1-l);--g2:var(--g2-l)}#app.house .tfSum[data-summary=climate] .tfIcon svg path{fill:url(#hcClimateGrad)}.tfGradDefs{position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMoreBackdrop.tfMoreUnder{z-index:179;pointer-events:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}.tfMoreTileHead .tfName{display:grid;flex:1;min-width:0;cursor:default}.tfMoreTileHead :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreTileHead .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfMoreTileHead div.tfIcon{cursor:default}.tfMoreTileHead.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreTileHead.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMorePages{display:grid;grid-auto-flow:column;grid-auto-columns:100%;align-items:start;gap:20px;flex:none;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;transition:height .25s cubic-bezier(.2,.7,.3,1)}@media (prefers-reduced-motion:reduce){.tfMorePages{transition:none}}.tfMorePages::-webkit-scrollbar{display:none}.tfMorePage{display:flex;flex-direction:column;gap:14px;min-width:0;scroll-snap-align:start;scroll-snap-stop:always}.tfMoreSpace{flex:none;display:flex;flex-direction:column;justify-content:space-between;gap:12px;height:224px;padding:18px;border-radius:16px;background:var(--tile);overflow:hidden}.tfMoreSpace.tfMoreFill{justify-content:center;align-items:center;height:auto;padding:0;background:none;border-radius:0}.tfMoreSpace.tfMoreFill>.tfCoverArt{width:100%;height:auto;max-width:none;align-self:center}.tfMoreSpace.tfMoreFill>.tfDacPad{width:100%;height:100%}.tfMoreBig{display:flex;align-items:baseline;min-width:0;font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfMoreBig.live{color:var(--primary)}.tfMoreNum{overflow:hidden;text-overflow:ellipsis}.tfMoreUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfMoreFacts{display:flex;flex:1;flex-direction:column;justify-content:space-evenly;min-height:0}.tfMoreFact{display:flex;justify-content:space-between;gap:16px;font:400 14px/20px var(--font)}.tfMoreFact span:first-child{color:var(--muted)}.tfMoreFact span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreGraph{display:flex;flex:none;flex-direction:column;gap:6px}.tfMoreGraph .tfMoreGroupName{margin:0}.tfMoreGraph .tfGraph.tfDay{width:100%}.tfMoreDots{display:flex;flex:none;justify-content:center;gap:4px;margin-top:-4px}.tfMoreDots button{display:grid;place-items:center;width:24px;height:24px;min-height:0;padding:0;border:0;background:none;cursor:pointer}.tfMoreDots button:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--muted);opacity:.45;transition:opacity .15s ease,background .15s ease}.tfMoreDots button[aria-selected=true]:before{background:var(--text);opacity:1}.tfMoreDots.tfMorePageIcons{gap:3px;align-self:center;margin-top:0;padding:3px;border-radius:19px;background:var(--tile)}.tfMoreDots.tfMorePageIcons button{width:48px;height:32px;border-radius:16px;color:var(--muted);transition:background .15s ease,color .15s ease}.tfMoreDots.tfMorePageIcons button:before{display:none}.tfMoreDots.tfMorePageIcons button svg{width:20px;height:20px;fill:currentColor}.tfMoreDots.tfMorePageIcons button[aria-selected=true]{background:var(--text);color:var(--card)}.tfMoreDots.tfMorePageIcons button:not([aria-selected=true]):hover{color:var(--text)}#homeView .grid>.tfDashTiles>.tfAction.tfHeadOnly,#homeView .grid .tfAction.tfHeadOnly{align-self:start}.tfMoreLink{margin-top:auto}.tfMoreLink svg{transform:none!important}.tfMorePage .tfMoreRows{flex:none}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 20px 10px}.tfAreaPanel .tfATiles{margin-inline:-10px}.tfAreaPanel .workoutPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{max-width:100%;overflow:hidden;color:var(--muted);font:400 16px/1.2 var(--font);white-space:nowrap;text-overflow:ellipsis}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));min-height:calc(2 * var(--tile-min));align-content:end}.tfABig{max-width:100%}.panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 16px)}#app.tfBoard .tfAreas[data-rows="5"] .tfACMain{position:absolute;left:10px;right:10px;bottom:170.3px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .tfACMain{position:absolute;left:10px;right:10px;bottom:164.1px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 12px)}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{align-self:start;display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;pointer-events:none;color:var(--text)}.tfBoardCells svg{display:block;overflow:visible}.tfBoardCells pattern circle{fill:currentColor;fill-opacity:.16}.tfBoardCells .tfGridCross{fill:none;stroke:currentColor;stroke-opacity:.45;stroke-width:1.5;stroke-linecap:round}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}.tfBoardMenu .tfHeightTabs button{justify-content:center}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}.tfWidth{padding-top:0}.tfWidth .tfHeightTabs{grid-template-columns:repeat(3,auto)}.tfBoardMenu .tfWidth .tfHeightTabs button{white-space:nowrap}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:var(--fill-row,60px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:var(--fill-row,60px);box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"]{padding:10px;border-radius:24px}.tfRoomTile{cursor:pointer}.tfRoomTile .tfRoomIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomInline,.tfRoomSub{display:none}.tfRoomReading{display:flex;flex-direction:column;gap:4px;min-width:0}.tfRoomBig{overflow:hidden;color:var(--text);font:500 46px/46px var(--font-tile);letter-spacing:-.92px;white-space:nowrap;text-overflow:ellipsis}.tfRoomSub{overflow:hidden;color:var(--muted);font:400 16px/19px var(--font);white-space:nowrap;text-overflow:ellipsis}.tfRoomDevices{display:flex;gap:12px}.tfRoomDevices .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDevices .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}#app.tfBoard .tfRoomTile[data-rows="1"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-rows="1"] :is(.tfRoomReading,.tfRoomDevices),#app.tfBoard .tfRoomTile[data-rows="2"] .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfActionHead .activityRowMeta{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfRoomSub{display:block}#app.tfBoard .tfRoomTile[data-rows="4"] .tfRoomBig{font-size:52px;line-height:52px;letter-spacing:-1.92px}#app.tfBoard .tfRoomTile[data-rows="5"] .tfRoomBig{font-size:64px;line-height:64px;letter-spacing:-1.92px}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="3"],[data-rows="4"],[data-rows="5"]) .tfRoomDevices{display:grid;grid-template-columns:repeat(2,max-content)}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"]:has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"]:has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="4"],[data-rows="5"]) .tfRoomDevices{min-height:calc(2 * var(--chip-size) + 12px);align-content:start}.tfRoomHeads{display:none;gap:12px 16px}.tfRoomDev{display:flex;align-items:center;gap:12px;min-width:0;padding:0;border:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfRoomDev .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomDev .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfRoomDevName{display:flex;flex-direction:column;min-width:0}.tfRoomDevName>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]){flex-direction:row;align-items:center;gap:12px}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"])>.tfActionHead{flex:1;margin-bottom:0}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]) .tfRoomDevices{display:flex}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-cols="2"]):not([data-rows="1"]) .tfRoomHeads{grid-template-columns:repeat(4,minmax(0,1fr))}#app.tfBoard .tfRoomTile[data-cols="2"][data-rows="2"] .tfRoomDev:nth-child(n+3){display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbWx.wbS90{width:100px;height:100px;border-radius:31px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbDeg{font-size:80px;line-height:80px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbUnit{font-size:30px;line-height:38px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbWeather{flex-direction:row;align-items:center;gap:16px}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNow{flex:none}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNextHours{display:flex;flex:1 1 0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbWeather{justify-content:center;padding-top:0;padding-bottom:0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) :is(.wbNow,.wbSummary){display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbColumns{display:flex;flex:none;height:185px}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsDay{display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsNow{display:inline}#app.tfBoard .tfDash-wx[data-narrow] .wbCard.wbWeather{gap:12px;padding:18px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbWx.wbS90{width:64px;height:64px;border-radius:20px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbDeg{font-size:46px;line-height:46px;letter-spacing:-.92px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbUnit{font-size:20px;line-height:26px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-narrow] .wbHalves{display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="3"] .wbNextHours{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow] .wbHour:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;flex:none;height:auto;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumn:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbHalves{display:none}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx:not([data-narrow])[data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:0}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn{justify-content:flex-start;gap:8px;padding:12px 0 16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn .wbWx{width:40px;height:40px;border-radius:16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbTemps{gap:4px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .workoutPanel.tfAreaPanel{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded{display:grid;grid-template-columns:40px minmax(0,1fr);gap:0 12px;align-content:center}#app.tfBoard .tfAreas[data-rows="1"] :is(.panelExpanded>.workoutPanelTop,.tfACTop){display:contents}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] .tfATitle .tfAName{font-size:14px;line-height:20px;height:auto}#app.tfBoard .tfAreas[data-rows="1"] .tfABig{margin:0;flex-direction:row}#app.tfBoard .tfAreas[data-rows="1"] .tfABigMain{font-size:14px;line-height:18px;letter-spacing:0}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigUnit){font-size:14px}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigSub,.tfATiles,.tfACTiles,.sourceTag){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"]) .tfABig{display:none}#app.tfBoard .tfAreas[data-rows="4"] .tfABig{flex:none;margin-top:auto;margin-bottom:auto}#app.tfBoard .tfAreas[data-rows="4"] .tfATiles{margin-top:0}#app.tfBoard .tfAreas[data-rows="4"] .tfABigMain{font-size:52px}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded{row-gap:12px}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"],[data-rows="4"]) .tfATiles{margin-top:auto}#app.tfBoard .tfAreas[data-rows="2"] .tfATile:nth-child(n+3),#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfATile:nth-child(n+5){display:none}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:360px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-52px;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border:0;border-radius:var(--r-inner);background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(360px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.house :is(.settingsSelect,.addInput){border:1px solid var(--muted)}#app.house{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%23d9d9d9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house.light{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%2326221e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house select.settingsSelect{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 44px 0 16px;background-image:var(--select-chev);background-repeat:no-repeat;background-position:right 16px center;background-size:16px 16px}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}#app.house :is(.tfIcon,.activityRowIcon,.tfAreaIcon,.tfRoomIcon){--chip-hi:.0375;background-image:linear-gradient(180deg,#ffffff08,#fff0)!important;box-shadow:inset 0 1px rgba(255,255,255,var(--chip-hi)),inset 0 -1px color-mix(in srgb,currentColor 3%,transparent),inset 0 -3px 6px color-mix(in srgb,currentColor 3.5%,transparent)}#app.house :is(.on[data-light] .tfIcon,.tfIcon.on[data-light],.tfACTile .tfIcon[data-light],.on[data-tone=alarm] .tfIcon,.tfIcon[data-light]){--chip-hi:.1375}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-xl]{grid-row:span 5}#app.tfBoard .tfDashBento:not([data-rows="5"]) .wbItem[data-xl] .wbCallouts{display:none}#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]) .wbZone{flex:1;height:auto;background:none;box-shadow:none;padding:0;align-items:flex-start}#app.tfBoard .tfDashBento[data-rows="3"] .wbItem[data-xl] .wbCallouts{display:flex;margin-top:0}#app.tfBoard .tfDashBento[data-rows="1"] :is(.wbZone,.wbCallouts){display:none}#app .wbZoneM{display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM){display:flex;align-items:flex-start;justify-content:flex-start}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM)>:not(.wbZoneM){display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZoneM{display:flex}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{grid-auto-flow:row}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-break]{grid-column-start:1}#app.house.tfWeatherOpen #homeView{max-width:none}#app.house #settingsView .toggleList{border-radius:var(--r-card);padding-block:4px}#app.house #settingsView .toggleRow{padding-left:18px;padding-right:18px}#app.house #settingsView .toggleRow:not([hidden])~.toggleRow:before{left:18px}#app.house .view{margin-left:0}#app.house #settingsView .toggleList>.tfCardTitle{display:flex;align-items:center;min-height:28px;padding:14px 18px 2px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfLightView{display:flex;padding:4px 0 14px}#housePane.tfLightCardsOn .houseTab .metaTableWrap,#housePane.tfLightCardsOn .houseTab .tfTableNote{display:none}#housePane.tfLightCardsOn .tfLightCards{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:8px}#housePane:not(.tfLightCardsOn) .tfLightCards{display:none}@container housepane (width < 720px){#housePane:not(.tfLightCardsOn) .houseTab .metaTableWrap{display:none}#housePane:not(.tfLightCardsOn) .tfLightCards{display:grid}}#app.house.light .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house .tfTrayInner{gap:32px}#app.house .tfTraySection{gap:12px}#app.house{--font:Geist,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-family:var(--font)}#app.house #housePane .toggleRow>:is(.themeChoice,.settingsSelect){align-self:flex-start;width:auto;max-width:100%}#app.house #housePane .themeChoice{display:inline-flex}#app.house #housePane .themeChoice>button{flex:0 1 auto;min-width:0;padding:0 16px;overflow:hidden;text-overflow:ellipsis}#app.house #housePane .toggleRow{min-width:0}#app.house #housePane .toggleRow>.settingsSelect{min-width:200px}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments){display:inline-flex;width:auto;align-self:flex-start}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments) button{flex:0 0 auto;padding:0 16px}@media (max-width:620px){#app.house.tfDash:not(.tfEditing) #homeView>.grid{display:flex!important;flex-wrap:wrap;align-items:flex-start;gap:var(--grid-gap);height:auto!important}#app.house.tfDash:not(.tfEditing) #homeView>.grid .tfBoardItem{position:relative!important;left:auto!important;top:auto!important}#app.house.tfDash:not(.tfEditing) #homeView>.grid>.tfBoardItem:not(.tfDash-favs){height:auto!important}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummary{flex:none;margin-top:0;container-type:normal}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummaryText{position:static}}#app.house :is(#housePane .themeChoice,.wb .wbSegments,.tfBoardMenu .tfHeightTabs){height:32px;padding:3px;gap:3px;box-sizing:border-box}#app.house :is(#housePane .themeChoice>button,.wb .wbSegments button,.tfBoardMenu .tfHeightTabs button){height:26px!important;padding:0 12px;border-radius:13px!important;font:600 12px/16px var(--font-tile)!important}.tfPlantProblem{flex:1 1 0;min-height:184px;flex-direction:column}.tfGraph.tfPlantGraph{flex:1 1 0;width:calc(100% - 20px);height:auto;min-height:160px;margin:0 10px}.tfGraph .tfGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:3 4;vector-effect:non-scaling-stroke}.tfGraph .tfGuideWord{font-size:11px}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:inset 0 0 0 1px var(--line)}.tfDashTitle .tfGreeting{display:block;margin-bottom:6px;font:500 20px/1.2 var(--font-tile);letter-spacing:0;color:var(--muted)}#app.tfOverview.tfDash #homeView .tfSum:not([data-summary=alerts]) .tfIcon{background:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar{width:100%;max-width:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:flex;justify-content:space-between}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRow{flex:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows>.activityRow{min-width:0}@media (max-width:620px){#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}}#app.tfOverview.tfDash #homeView .tfDash-favs{padding:10px;border-radius:var(--r-card)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityHeader{display:none}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:60px;row-gap:25px;max-height:100%;margin:0;overflow-y:auto;scrollbar-width:none}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows::-webkit-scrollbar{display:none}.hcFadeList.hcMore{-webkit-mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent);mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{height:60px;min-height:0;padding:10px;box-sizing:border-box}#app.tfOverview.tfDash #homeView .tfRoomTile{padding:18px;gap:0;border-radius:28px}#app.tfOverview.tfDash #homeView .tfRoomTile>.tfActionHead{margin-bottom:0}#app.tfOverview.tfDash #homeView .tfRoomTile .tfActionHead .activityRowMeta{display:none}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomReading{margin-top:35px;gap:0}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomBig{font:400 48px/64px var(--font-tile);letter-spacing:-1.92px}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomSub{display:block;margin-top:-7px;font:400 16px/19px var(--font)}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomDevices{display:flex;justify-content:space-between;min-height:0;margin-top:auto;padding-top:16px}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomHeads{display:none}#app.tfOverview.tfDash #homeView .tfRoomTile:not(:has(.tfRoomDevices :nth-child(4))) .tfRoomDevices{justify-content:flex-start;gap:18.67px}#app.light.tfOverview.tfDash #homeView .tfRoomTile .tfRoomIcon{background-color:#acacac;color:#fff}@media (max-width:620px){#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomDevices{display:grid;grid-template-columns:repeat(2,max-content);gap:12px;justify-content:start}}#homeView .grid.tfStack{grid-auto-rows:1px;row-gap:0}#homeView .grid.tfStack>*{align-self:start}.tfTrayPop{position:fixed;z-index:260;right:calc(min(360px,100vw - 56px) + 12px);width:300px;max-width:calc(100vw - 80px);display:grid;gap:2px;padding:10px!important;background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfTrayPop[hidden]{display:none}.tfTrayPopTitle{padding:4px 8px 8px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfTrayPopRow{display:flex;align-items:center;gap:12px;min-height:var(--tile-min);padding:0 8px}.tfTrayPopRow .tfIcon{background-color:var(--hc-icon)}.tfTrayPopName{flex:1;min-width:0;font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(600px,85dvh)}#app .tfMoreBackdrop:not(.wide) .tfMorePages{flex:1 1 auto;min-height:0;height:auto!important;align-items:stretch}#app .tfMoreBackdrop:not(.wide) .tfMorePage{overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}#app .tfMoreBackdrop:not(.wide) .tfMorePage[aria-label=Control]>:first-child{margin-top:auto}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace{flex:1 1 auto;height:auto;min-height:224px}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill{min-height:0;container-type:size}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill>.tfCoverArt{width:min(100%,100cqh);height:auto}.tfMorePage[aria-label=Control]>:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink)+:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink){margin-top:14px}.tfMoreSwitch{display:flex;align-items:center;justify-content:center;min-height:0;padding:0;border-radius:0;background:none}.tfMoreSwitch .tfIcon{width:min(240px,100%);height:min(240px,100%);aspect-ratio:1;min-height:0;border:0;padding:0;border-radius:40%;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer;--mdc-icon-size:204px}.tfMoreSwitch.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreSwitch.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}@media (max-width:620px){#app .tfMoreBackdrop{place-items:end center;padding:0 16px max(16px,env(safe-area-inset-bottom,0px))}#app .tfMoreBackdrop .tfMorePair{width:100%;max-height:85dvh}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){width:100%;border-radius:34px;box-shadow:inset 0 0 0 1px var(--line),0 10px 30px #00000047}#app .tfMoreBackdrop .tfMore{padding-top:10px;outline:none}#app .tfMoreBackdrop .tfMore:before{content:"";display:block;position:sticky;top:10px;z-index:2;flex:none;width:36px;height:5px;margin:0 auto;border-radius:3px;background:var(--line)}#app .tfMoreBackdrop .tfMore [data-more-close]{display:none}}`, fu = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);fill-opacity:.14}.wbChart .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbAsNow{display:none}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbNextHours{display:none;justify-content:space-between;align-items:center;gap:8px;min-width:0}.wbHour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}.wbHourTime{color:var(--muted);font:400 14px/20px var(--font);white-space:nowrap}.wbHourTemp{font:400 18px/20px var(--font-tile);white-space:nowrap}.wbHour .wbWx.wbS40{width:40px;height:40px;border-radius:16px}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumn .wbWx.wbS60{width:40px;height:40px;border-radius:14px}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbSunTile .wbZone{display:block}.wbSunZone{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff;transition:background 1s ease}.wbSunTrack{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbSunBand{fill:#fff;fill-opacity:.1}.wbSunBand.wbSunDay{fill-opacity:.14}.wbSunBand.wbSunDone{fill-opacity:.85}.wbSunDot{fill:#ffd84a}.wbSunDot.wbSunNight{fill:#9aa3c7}.wbSunCount{position:absolute;top:22px;right:22px;bottom:22px;left:22px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding-bottom:14px}.wbSunLeft{font:500 clamp(28px,calc(16cqw * var(--wb-k,1)),36px)/1.1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums;white-space:nowrap}.wbSunWord{font:400 13px/18px var(--font);opacity:.85}.wbSunAt{position:absolute;bottom:32px;font:500 12px/16px var(--font);opacity:.85;font-variant-numeric:tabular-nums}.wbSunRise{left:32px}.wbSunSet{right:32px}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbTrend{position:relative;width:100%;height:100%;min-height:0}.wbTrendPlot{position:absolute;top:22px;right:0;bottom:24px;left:0}.wbTrendPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbTrendLine{fill:none;stroke:var(--text);stroke-width:2;stroke-linejoin:round;stroke-linecap:round;opacity:.8}.wbTrendDot{position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:var(--card);box-shadow:0 0 0 2px var(--text)}.wbTrendDot.wbToday{width:11px;height:11px;margin:-5.5px 0 0 -5.5px;background:var(--primary);box-shadow:0 0 0 3px var(--card)}.wbAvgValue{position:absolute;transform:translate(-50%,calc(-100% - 8px));color:var(--muted);font:400 10px/1 var(--font-tile);white-space:nowrap}.wbAvgValue.wbToday{color:var(--text);font-size:12px;font-weight:600}.wbTrendAvg{position:absolute;right:0;transform:translateY(4px);color:var(--muted);font:400 10px/1 var(--font-tile)}.wbTrendDays{position:absolute;left:0;right:0;bottom:0;height:16px}.wbAvgDay{position:absolute;bottom:0;transform:translate(-50%);color:var(--muted);font:400 11px/16px var(--font-tile)}.wbAvgDay.wbToday{color:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}.wbZoned{gap:14px}.wbZone{position:relative;flex:none;height:198px;display:flex;align-items:center;justify-content:center;border-radius:16px;overflow:hidden}.wbCallouts{display:none;flex-direction:column;gap:4px;margin-top:-6px}.wbCallout{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbCallout>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbCallout>span:last-child{flex:none;color:var(--text);white-space:nowrap}.wbZone>.wbSunSky{flex:1;align-self:stretch;border-radius:0}.wbZone>.wbMoonBox{flex:none;height:150px}.wbBase .wbZone{align-items:flex-end;justify-content:flex-start}.wbZone>.wbTapeRow{align-self:stretch;height:100%}.wbItem[data-xl] .wbCallouts{display:flex}.wbUv .wbZone{display:block}.wbUvArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbUvBig{position:absolute;right:0;bottom:0;display:flex;flex-direction:column;align-items:flex-end}.wbUvNum{font:500 64px/.9 var(--font-tile);letter-spacing:-.03em;color:var(--text);font-variant-numeric:tabular-nums}.wbUvWord{margin-top:6px;font:400 14px/20px var(--font);color:var(--muted)}.wbAqSmile .wbZone{display:block}.wbAqFill{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff}.wbAqFace{position:absolute;left:12px;top:12px;width:min(140px,calc(100% - 60px));height:auto;aspect-ratio:1;fill:none;stroke:currentColor;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round}.wbAqFace .wbAqEyes{stroke-width:5}.wbAqBig{position:absolute;right:14px;bottom:12px;display:flex;flex-direction:column;align-items:flex-end}.wbAqNum{font:500 56px/.9 var(--font-tile);letter-spacing:-.03em;font-variant-numeric:tabular-nums}.wbAqUnit{margin-top:4px;font:500 14px/20px var(--font)}.wbPollenAir{position:absolute;top:0;right:0;bottom:62px;left:0;overflow:hidden;pointer-events:none}.wbFloat{position:absolute;left:-12%;animation:wbFloat linear infinite}.wbBob{display:block;animation:wbBob ease-in-out infinite alternate}@keyframes wbFloat{0%{left:-12%}to{left:106%}}@keyframes wbBob{0%{transform:translateY(-6px) rotate(-14deg)}to{transform:translateY(8px) rotate(16deg)}}.wbFloat svg{display:block}.wbSeed svg{width:calc(20px * var(--s));height:calc(28px * var(--s))}.wbGrain svg{width:calc(10px * var(--s));height:calc(10px * var(--s))}.wbStem svg{width:calc(9px * var(--s));height:calc(26px * var(--s))}.wbSeed{color:var(--text);opacity:.7}.wbGrain{color:#e9c46a;opacity:.85}.wbStem{color:#a3b18a;opacity:.75}#app.light .wbGrain{color:#c99a1e}#app.light .wbStem{color:#7d8c5f}@media (prefers-reduced-motion:reduce){.wbFloat,.wbBob{animation:none}.wbFloat{left:var(--x)}}.wbPush{display:block;transition:transform .35s cubic-bezier(.2,.8,.3,1)}.wbCallout.wbAdvice>span:first-child{color:var(--text)}.wbCard.wbSquare.wbGraphCard{height:100%;min-height:0}.wbGraphCard .wbHead .wbBack{margin:-4px -6px 0 auto}.wbGraphCard .wbRangeBtn{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;max-width:100%;height:32px;padding:0 8px 0 10px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:600 12px/16px var(--font-tile);cursor:pointer}.wb button.wbRangeBtn{border-radius:12px!important}.wbRangeBtn>span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRangeBtn .wbIcon{flex:none;width:16px;height:16px;fill:currentColor}.wbRangeBtn[aria-expanded=true]{background:var(--bright);color:var(--on-bright)}.wbItem:has(.wbRangePick){position:relative;z-index:30}.wbRangePick{position:absolute;top:116px;left:18px;z-index:30;display:flex;flex-direction:column;gap:12px;width:248px;box-sizing:border-box;padding:12px;border-radius:24px;background:var(--card);box-shadow:var(--hc-hair-all),0 18px 40px #00000059}.wbRangePick.wbPickRight{left:auto;right:18px}.wbRangePresets{display:flex;flex-direction:column;gap:2px}.wb .wbRangePreset{height:32px;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--text);font:400 14px/20px var(--font);text-align:left;cursor:pointer}.wb .wbRangePreset:hover{background:var(--tile)}.wb .wbRangePreset[aria-pressed=true]{background:var(--bright);color:var(--on-bright);font-weight:600}.wbRangeDates{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:12px;box-shadow:inset 0 .4px 0 var(--line)}.wbRangeDates label{display:grid;gap:4px;min-width:0;color:var(--muted);font:400 12px/16px var(--font)}.wbRangeDates input{width:100%;min-width:0;height:32px;box-sizing:border-box;padding:0 6px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 12px/16px var(--font);color-scheme:inherit}.wb .wbRangeApply{height:32px;padding:0 14px;border:0;border-radius:999px!important;background:var(--bright);color:var(--on-bright);font:600 12px/16px var(--font-tile);cursor:pointer}.wbGraphCard .wbGraph{flex:1;height:auto;min-height:0}`, hu = '#app .mvPv{position:relative;transform:perspective(var(--pv-persp)) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--sc,1));transition:transform var(--pv-ret) var(--pv-ease)}#app .mvPv.mvMoving{transition:transform 70ms linear}#app .mvPv:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;opacity:0;mix-blend-mode:soft-light;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,var(--pv-shine)),transparent var(--pv-size));transition:opacity var(--pv-ret) ease}#app .mvPv.mvLit:after{opacity:1}#app .tfBar{--mv-c:var(--light-soft,var(--primary));transform-origin:center;transition:box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}#app .tfBar.mvHover{box-shadow:0 0 var(--ab-blur) var(--ab-spread) color-mix(in srgb,var(--mv-c) var(--ab-str),transparent);transition-duration:var(--ab-in)}#app .tfBar.mvHold{box-shadow:0 0 var(--ab-blur2) var(--ab-spread2) color-mix(in srgb,var(--mv-c) var(--ab-str2),transparent);transform:var(--ab-grow);transition-duration:var(--ab-in)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>:is(svg,ha-icon,ha-state-icon,span){transition:scale var(--ih-dur) var(--ih-ease)}@media (hover:hover){#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-s)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover:before{opacity:1}}:where(#app button.tfIcon,#app .tfBack,#app .tfEditChip,#app .tfTrayBtn,#app [data-wb=graph-close]){position:relative}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;background:color-mix(in srgb,currentColor var(--ih-tint),transparent);opacity:0;transition:opacity var(--ih-dur) var(--ih-ease)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):active>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-p)}#app .mvSegInd{position:absolute;z-index:0;pointer-events:none}#app .mvSegMoving>button{position:relative;z-index:1;background-color:transparent!important;box-shadow:none!important;transition:none!important}#app .tfMoreBackdrop{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}#app .toast.tfToast{min-height:58px;box-sizing:border-box;padding:9px 18px 9px 9px;gap:14px;border-radius:29px;font-size:18px;line-height:1.2}#app .toast .mvTick{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--mv-ok);color:#fff}#app .toast .mvTick svg{width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}#app .toast .mvToastText{font-weight:600}#app .toast .toastAction{font-size:16px;margin-left:2px}#app .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}#app{--ol-l:68%;--mv-ok:#4cc38a}#app.light{--ol-l:48%;--mv-ok:#1f7a4d}#app .tfAreaPanel:has(>.mvEdge){isolation:isolate;position:relative}#app .mvEdge,#app .mvEdgeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity var(--ol-in) ease-out}#app .mvEdgeFill{z-index:-1;background:hsl(var(--ol-h) 97% var(--ol-l));mix-blend-mode:soft-light;opacity:clamp(0,calc(var(--ol-fill) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-fill));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app .mvEdge{z-index:5}#app .mvEdge:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l));opacity:clamp(0,calc(var(--ol-border) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-border));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%));mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%))}#app .mvEdge>i{position:absolute;top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;border-radius:inherit;mix-blend-mode:plus-lighter;opacity:clamp(0,calc(var(--ol-glow) * (var(--edge-proximity,0) - var(--ol-esens)) / (100 - var(--ol-esens))),var(--ol-glow));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}#app .mvEdge>i:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;--s:var(--ol-size);box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l) / 60%),inset 0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),inset 0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),inset 0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(22.4px*var(--s)) calc(1.6px*var(--s)) hsl(var(--ol-h) 97% var(--ol-l) / 10%)}#app :not(.mvLitEdge)>:is(.mvEdge,.mvEdgeFill){opacity:0;transition:opacity var(--ol-out) ease-out}@media (prefers-reduced-motion:reduce){#app .mvPv{transform:none!important}#app .mvPv:after{display:none}#app .tfBar.mvHold{transform:none}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>*{scale:none!important}}#app .tfBoardItem.mvDrag{scale:none}#app.tfEditing.tfBoardReady .tfBoardItem:not(.tfDragging){transition:left .42s cubic-bezier(.34,1.46,.64,1),top .42s cubic-bezier(.34,1.46,.64,1),height .42s cubic-bezier(.34,1.46,.64,1)}', mu = `<main id="app"><div class="shell">
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
`, cn = {
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
}, ln = (o) => o < 0 ? 0 : o > 1 ? 1 : o, xc = (o, l, i) => o + (l - o) * i, rc = (o) => {
  const l = String(o || "#000000").trim().replace("#", ""), i = l.length === 3 ? l.split("").map((f) => f + f).join("") : l;
  return [0, 2, 4].map((f) => parseInt(i.slice(f, f + 2), 16) || 0);
}, gu = (o) => "#" + o.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), yc = {}, ze = (o, l, i) => {
  const f = o + l + i;
  return yc[f] || (yc[f] = gu(rc(o).map((b, x) => b + (rc(l)[x] - b) * i)));
}, kc = {}, hd = (o) => kc[o] || (kc[o] = rc(o)), Od = (o, l, i, f) => (b) => {
  if (b <= 0) return 0;
  if (b >= 1) return 1;
  let x = 0, k = 1, _ = b;
  for (let O = 0; O < 18; O++)
    _ = (x + k) / 2, 3 * (1 - _) * (1 - _) * _ * o + 3 * (1 - _) * _ * _ * i + _ * _ * _ < b ? x = _ : k = _;
  return 3 * (1 - _) * (1 - _) * _ * l + 3 * (1 - _) * _ * _ * f + _ * _ * _;
}, vu = { std: Od(0.2, 0, 0, 1), acc: Od(0.3, 0, 1, 1), dec: Od(0, 0, 0, 1) };
function Md(o, l) {
  const i = String(o || "");
  return (i === "sunny" || i === "clear-night" ? "clear" : i === "partlycloudy" ? "partly" : i === "fog" ? "fog" : i === "lightning" || i === "lightning-rainy" ? "storm" : i === "snowy" || i === "snowy-rainy" ? "snow" : i === "rainy" || i === "pouring" || i === "hail" ? "rain" : "cloudy") + "/" + (i === "clear-night" || l ? "night" : "day");
}
function Mp(o) {
  const l = { clear: [o.skyClearDay, o.skyClearNight], cloudy: [o.skyCloudyDay, o.skyCloudyNight], rain: [o.skyRainDay, o.skyRainNight], snow: [o.skySnowDay, o.skySnowNight], fog: [o.skyFogDay, o.skyFogNight] };
  return l.partly = [ze(l.clear[0], l.cloudy[0], 0.12), ze(l.clear[1], l.cloudy[1], 0.12)], l.storm = [ze(l.rain[0], "#000000", 0.22), ze(l.rain[1], "#000000", 0.22)], l;
}
const sc = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], lc = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], dc = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function cc(o, l = cn) {
  const i = { ...cn, ...l }, f = Mp(i), b = String(o).split("/"), x = f[b[0]] ? b[0] : "clear", k = b[1] === "night", _ = f[x][k ? 1 : 0], O = {
    night: k,
    clearness: x === "clear" ? 1 : x === "partly" ? 0.7 : 0.25,
    sky: _,
    skyStops: [_],
    skyT: 0,
    sun: { x: 45, y: k ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: k ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: k ? 1 : 0 },
    stars: sc.map(() => ({ o: 0 })),
    rain: lc.map(() => ({ o: 0, dy: -16 })),
    snow: dc.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, S = (V) => sc.map(() => ({ o: V }));
  return x === "clear" ? k ? (O.moon.o = 1, O.stars = S(1)) : O.sun.o = 1 : x === "partly" ? (O.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: k ? 1 : 0 }, k ? (O.moon = { x: 34, y: 33, d: 48, o: 1 }, O.stars = S(0.7)) : O.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : x === "cloudy" || x === "fog" ? (O.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: k ? 1 : 0 }, k ? O.moon = { x: 40, y: 36, d: 40, o: 0 } : O.sun = { x: 40, y: 36, r: 20, o: 0 }) : (O.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, k ? O.moon = { x: 38, y: 28, d: 36, o: 0 } : O.sun = { x: 38, y: 28, r: 18, o: 0 }, x === "snow" ? O.snow = dc.map(() => ({ o: 1, dy: 0 })) : O.rain = lc.map((V, q) => ({ o: x === "storm" && q === 1 ? 0 : 1, dy: 0 })), x === "storm" && (O.bolt = { o: 1, dy: 0 })), O;
}
const Mc = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function bu(o, l, i, f = cn, b = !1) {
  const x = { ...cn, ...f }, k = (j, Z) => j > 0.01 && Z > 0.01 ? "stay" : j > 0.01 ? "leave" : Z > 0.01 ? "enter" : "none", _ = (j, Z, pt, et) => {
    const Q = j[0] + Z * et, K = j[1] - (pt - 1 - Z) * et;
    return vu[j[2]](ln((i - Q) / Math.max(1e-3, K - Q)));
  }, O = (j, Z, pt, et = 0, Q = 1, K = 0) => {
    const ht = k(j.o, Z.o);
    if (ht === "none") return { ...Z, o: 0 };
    const dt = _(Mc[pt][ht], et, Q, K), bt = {};
    for (const ot in Z) bt[ot] = b && ht !== "stay" && ot !== "o" ? ht === "leave" ? j[ot] : Z[ot] : xc(j[ot], Z[ot], dt);
    return bt;
  }, S = _(Mc.sky, 0, 1, 0);
  let V, q;
  if (o.night !== l.night) {
    const j = Math.min(o.clearness, l.clearness), Z = ze(ze(o.sky, l.sky, 0.5), x.dusk, 0.6 * j);
    V = S < 0.5 ? ze(o.sky, Z, S * 2) : ze(Z, l.sky, S * 2 - 1), q = j > 0.5 ? [o.sky, x.dusk, l.sky] : [o.sky, l.sky];
  } else
    V = ze(o.sky, l.sky, S), q = [o.sky, l.sky];
  return {
    night: i < 0.5 ? o.night : l.night,
    clearness: xc(o.clearness, l.clearness, i),
    sky: V,
    skyStops: q,
    skyT: S,
    sun: O(o.sun, l.sun, "body"),
    moon: O(o.moon, l.moon, "body"),
    cloud: O(o.cloud, l.cloud, "cloud"),
    stars: l.stars.map((j, Z) => O(o.stars[Z], j, "fx", Z, l.stars.length, 0.05)),
    rain: l.rain.map((j, Z) => O(o.rain[Z], j, "fx", Z, l.rain.length, 0.05)),
    snow: l.snow.map((j, Z) => O(o.snow[Z], j, "fx", Z, l.snow.length, 0.05)),
    bolt: O(o.bolt, l.bolt, "fx")
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
], sn = (o, l) => (wu[(l & 7) * 8 + (o & 7)] + 0.5) / 64, xu = 0, fc = 1, hc = 2, mc = 3, gc = 4, rn = 5, Is = 6, ar = 7, vc = 8, bd = (o, l) => l <= 0.6665 && ((o - 0.5) * (o - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (o - 0.25) * (o - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (o - 0.791) * (o - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || o >= 0.25 && o <= 0.791 && l >= 0.416), yu = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], ku = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((o) => [o[0] * 13 / 11, o[1] * 28 / 24]), Sp = (o, l, i) => {
  let f = !1;
  for (let b = 0, x = o.length - 1; b < o.length; x = b++) {
    const k = o[b], _ = o[x];
    k[1] > i != _[1] > i && l < (_[0] - k[0]) * (i - k[1]) / (_[1] - k[1]) + k[0] && (f = !f);
  }
  return f;
};
function Cp(o, { size: l = 90, px: i = 2, oneBit: f = !1, colors: b = cn, ink: x = "#26221e", paper: k = "#fbf9f6", clock: _ = 0, idle: O = !1 } = {}) {
  const S = { ...cn, ...b }, V = Math.sin, q = Math.PI * 2, j = Math.max(6, Math.round(l / i)), Z = j / 90, pt = O ? Math.floor(_ / 100) * 100 : 0, et = O ? V(q * pt / 3600) : 0, Q = O ? 1.8 * V(q * pt / 6400) : 0, K = O ? 0.9 * V(q * pt / 4100) : 0, ht = O ? 0.8 * V(q * pt / 5200) : 0, dt = pt / 3400 % 1, bt = O && o.bolt.o > 0.5 && (dt < 0.04 || dt > 0.08 && dt < 0.11), ot = new Array(j * j), nt = new Uint8Array(j * j), at = (E, P, W, B, lt) => {
    W == null || E < 0 || P < 0 || E >= j || P >= j || (B >= 1 || B > sn(E + 5, P + 3)) && (ot[P * j + E] = W, nt[P * j + E] = lt);
  }, D = (E, P, W, B) => {
    for (let lt = Math.max(0, Math.floor(P - W) - 1); lt <= Math.min(j - 1, P + W + 1); lt++) for (let ut = Math.max(0, Math.floor(E - W) - 1); ut <= Math.min(j - 1, E + W + 1); ut++) B(ut, lt, ut + 0.5 - E, lt + 0.5 - P);
  }, xt = o.skyStops || [o.sky], st = o.skyT || 0;
  for (let E = 0; E < j; E++) {
    const P = o.night ? ln(1 - (E + 0.5) / (j * 0.7)) * 0.85 : ln(((E + 0.5) / j - 0.35) / 0.65) * 0.85;
    for (let W = 0; W < j; W++) {
      let B = xt[0];
      if (xt.length > 1) {
        const lt = st * (xt.length - 1), ut = Math.min(xt.length - 2, Math.floor(lt));
        B = lt - ut > sn(W, E) ? xt[ut + 1] : xt[ut];
      }
      P > sn(W + 2, E + 5) && (B = o.night ? ze(B, "#000000", 0.28) : ze(B, "#ffffff", 0.2)), ot[E * j + W] = bt ? ze(B, "#ffffff", 0.25) : B;
    }
  }
  if (o.sun.o > 0.01) {
    const E = o.sun.x * Z, P = o.sun.y * Z, W = Math.max(1, o.sun.r * Z);
    if (O) {
      const B = W * (1.45 + 0.06 * et), lt = ze(S.sun, "#ffffff", 0.55);
      if (D(E, P, B, (ut, mt, wt, kt) => {
        const Ot = Math.sqrt(wt * wt + kt * kt);
        Ot > W && Ot < B && at(ut, mt, lt, 0.26 * (1 - (Ot - W) / (B - W)) * o.sun.o, xu);
      }), o.sun.o > 0.5) {
        const ut = Math.floor(pt / 500) % 2, mt = Math.max(1, W * 0.22);
        for (let wt = 0; wt < 8; wt++) if (wt % 2 === ut) for (let kt = W + 1.5; kt < W + 1.5 + mt; kt += 0.7) at(Math.floor(E + Math.cos(wt * Math.PI / 4) * kt), Math.floor(P + Math.sin(wt * Math.PI / 4) * kt), S.sun, o.sun.o, vc);
      }
    }
    D(E, P, W, (B, lt, ut, mt) => {
      if (ut * ut + mt * mt > W * W) return;
      const wt = ((ut * 0.643 + mt * 0.766) / W + 1) / 2;
      at(B, lt, ln((wt - 0.62) / 0.38) > sn(B, lt) ? S.sunEdge : S.sun, o.sun.o, fc);
    });
  }
  if (sc.forEach((E, P) => {
    const W = o.stars[P].o;
    if (W < 0.01) return;
    const B = Math.floor(E[0] * Z), lt = Math.floor(E[1] * Z), ut = O ? (Math.floor(pt / 300) + P * 3) % 6 : 0;
    if (ut === 5) return;
    const mt = Math.round(E[2] * Z * (ut === 4 ? 0.3 : ut < 2 ? 1 : 0.6));
    at(B, lt, S.star, W, ar);
    for (let wt = 1; wt <= mt; wt++) {
      const kt = wt === mt && mt > 1 ? ze(S.star, o.sky, 0.5) : S.star;
      at(B - wt, lt, kt, W, ar), at(B + wt, lt, kt, W, ar), at(B, lt - wt, kt, W, ar), at(B, lt + wt, kt, W, ar);
    }
  }), o.moon.o > 0.01) {
    const E = Math.max(1.5, o.moon.d * Z * 0.37), P = o.moon.x * Z, W = o.moon.y * Z + (O && ht > 0.4 ? -1 : 0), B = P + 0.547 * E, lt = W - 0.503 * E, ut = 0.82 * E, mt = ze(S.moon, "#ffffff", 0.6);
    D(P, W, E, (wt, kt, Ot, zt) => {
      if (Ot * Ot + zt * zt > E * E) return;
      const da = wt + 0.5 - B, qt = kt + 0.5 - lt;
      da * da + qt * qt <= ut * ut || at(wt, kt, ln((zt + E) / (2 * E) * 1.1 - 0.1) > sn(wt, kt) ? S.moon : mt, o.moon.o, hc);
    });
  }
  const Bt = Math.max(2, Math.round(15.65 * Z)), it = Math.max(1, Math.round(5.87 * Z * 0.5));
  lc.forEach((E, P) => {
    const W = o.rain[P];
    let B = W.dy, lt = W.o;
    if (lt < 0.01) return;
    if (O) {
      const wt = (pt / 950 + P / 3) % 1;
      B += -5 + wt * 14, lt *= wt < 0.18 ? wt / 0.18 : wt > 0.72 ? (1 - wt) / 0.28 : 1;
    }
    const ut = (E[0] + 3 + Q) * Z, mt = (E[1] + B) * Z;
    for (let wt = 0; wt < Bt; wt++) for (let kt = 0; kt < it; kt++) at(Math.floor(ut - 0.208 * wt) + kt, Math.floor(mt) + wt, S.rain, lt, gc);
  });
  const Ht = Math.max(0, Math.round(7.34 * Z / 2.6));
  if (dc.forEach((E, P) => {
    const W = o.snow[P];
    let B = W.dy, lt = 0, ut = W.o;
    if (ut < 0.01) return;
    if (O) {
      const kt = (pt / 3200 + P / 5) % 1;
      B += -6 + kt * 14, lt = 1.5 * V(q * (kt * 1.5 + P / 5)), ut *= kt < 0.2 ? kt / 0.2 : kt > 0.75 ? (1 - kt) / 0.25 : 1;
    }
    const mt = Math.floor((E[0] + 3.67 + lt + Q) * Z), wt = Math.floor((E[1] + 3.67 + B) * Z);
    at(mt, wt, S.snow, ut, rn);
    for (let kt = 1; kt <= Ht; kt++)
      at(mt - kt, wt, S.snow, ut, rn), at(mt + kt, wt, S.snow, ut, rn), at(mt, wt - kt, S.snow, ut, rn), at(mt, wt + kt, S.snow, ut, rn), Ht > 1 && kt < Ht && (at(mt - kt, wt - kt, S.snow, ut, rn), at(mt + kt, wt - kt, S.snow, ut, rn), at(mt - kt, wt + kt, S.snow, ut, rn), at(mt + kt, wt + kt, S.snow, ut, rn));
  }), o.bolt.o > 0.01)
    if (j >= 30) {
      const E = 39 + Q, P = 50 + o.bolt.dy;
      for (let W = Math.floor(P * Z); W <= (P + 28) * Z; W++) for (let B = Math.floor(E * Z); B <= (E + 13) * Z; B++)
        Sp(ku, (B + 0.5) / Z - E, (W + 0.5) / Z - P) && at(B, W, S.sun, o.bolt.o, Is);
    } else {
      const E = j / 18, P = 7, W = 10 + Math.round(o.bolt.dy * 0.2);
      yu.forEach((B, lt) => B.split("").forEach((ut, mt) => {
        if (ut !== "#") return;
        const wt = Math.floor((P + mt) * E), kt = Math.floor((W + lt) * E);
        for (let Ot = kt; Ot < Math.max(kt + 1, Math.floor((W + lt + 1) * E)); Ot++) for (let zt = wt; zt < Math.max(wt + 1, Math.floor((P + mt + 1) * E)); zt++) at(zt, Ot, S.sun, o.bolt.o, Is);
      }));
    }
  if (o.cloud.o > 0.01) {
    const E = Math.max(3, o.cloud.w * Z), P = E * 0.6665, W = (o.cloud.x + Q) * Z - E / 2, B = (o.cloud.y + K) * Z - P / 2, lt = ze(S.cloudDay, S.cloudNight, Math.round(o.cloud.f * 4) / 4), ut = ze(lt, "#000000", 0.16);
    for (let mt = Math.max(0, Math.floor(B) - 1); mt <= Math.min(j - 1, B + P + 1); mt++) for (let wt = Math.max(0, Math.floor(W) - 1); wt <= Math.min(j - 1, W + E + 1); wt++) {
      const kt = (wt + 0.5 - W) / E, Ot = (mt + 0.5 - B) / E;
      bd(kt, Ot) && at(wt, mt, !bd(kt, Ot + 1 / E) || ln((Ot - 0.42) / 0.25) * 0.8 > sn(wt, mt) ? ut : lt, o.cloud.o, mc);
    }
  }
  return Tp(ot, nt, j, j, { oneBit: f, ink: x, paper: k, snowInk: !o.night });
}
function Tp(o, l, i, f, { oneBit: b, ink: x, paper: k, snowInk: _ }) {
  const O = new Uint8ClampedArray(i * f * 4), S = hd(x), V = hd(k);
  for (let q = 0; q < f; q++) for (let j = 0; j < i; j++) {
    const Z = q * i + j, pt = l[Z];
    if (o[Z] == null) continue;
    let et = hd(o[Z]);
    if (b) {
      let Q;
      pt === gc || pt === vc ? Q = !0 : pt === rn ? Q = _ : pt === ar || pt === Is ? Q = !1 : Q = Math.round((0.2126 * et[0] + 0.7152 * et[1] + 0.0722 * et[2]) / 255 * 4) / 4 <= sn(j, q), (pt === fc || pt === hc || pt === mc || pt === Is) && (j > 0 && l[Z - 1] !== pt || j < i - 1 && l[Z + 1] !== pt || q > 0 && l[Z - i] !== pt || q < f - 1 && l[Z + i] !== pt) && (Q = !0), et = Q ? S : V;
    }
    O[Z * 4] = et[0], O[Z * 4 + 1] = et[1], O[Z * 4 + 2] = et[2], O[Z * 4 + 3] = 255;
  }
  return { w: i, h: f, data: O };
}
const Mu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Su = (o) => Md(o, !1).split("/")[0], qd = (o) => () => {
  o |= 0, o = o + 1831565813 | 0;
  let l = Math.imul(o ^ o >>> 15, 1 | o);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, Cu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Tu = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Lu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Au = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Eu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], _u = [".##", "##.", ".#.", "#.."];
function Lp(o, { width: l, height: i, colors: f, wave: b = 0.38, soft: x = 6, glow: k = 0.6 }) {
  const _ = { ...cn, dawn: "#e5a77e", ...f }, O = Mp(_), S = l, V = i, q = S / 6, j = q / 2, Z = Math.PI * 2, pt = o.length ? o : [{ cond: "cloudy", night: !1 }], et = [...Array(12)].map((dt, bt) => {
    const ot = pt[Math.min(bt, pt.length - 1)], nt = Su(ot.cond), at = bt % 2 === 1;
    return { cond: ot.cond, k: nt, night: at, sky: O[nt][at ? 1 : 0], cover: Mu[nt] };
  }), Q = (dt) => V * (0.5 - b * Math.cos(Z * (dt / q - 0.25)));
  return { C: _, S: et, W: S, H: V, cw: q, sw: j, TAU: Z, yb: Q, side: (dt, bt, ot) => {
    const nt = (dt ? Q(bt) - ot : ot - Q(bt)) / Math.max(3, x * 1.4) + 0.5;
    return nt <= 0 ? 0 : nt >= 1 ? 1 : nt;
  }, glowAt: (dt) => {
    const bt = ((dt / q - 0.25) % 1 + 1) % 1, ot = Math.max(0, Math.min(5, Math.round(dt / q - 0.25))), nt = Math.max(0, Math.min(5, Math.round(dt / q - 0.75))), at = 1 - (et[2 * ot].cover + et[2 * nt + 1].cover) / 2, D = Math.sin(Math.PI * Math.min(1, Math.max(0, Q(dt) / V)));
    return { c: bt < 0.5 ? _.dusk : _.dawn, a: k * (0.2 + 0.8 * at) * D * D };
  }, soft: x, tw: q * 0.3, sy: V / 90 };
}
function Ap(o, { clock: l = 0, ambient: i = !1, seed: f = 1 }) {
  const { S: b, sw: x, side: k, C: _, TAU: O, sy: S } = o, V = l, q = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return b.forEach((j, Z) => {
    const pt = qd(f * 977 + Z * 131 + 7), et = (Z + 0.5) * x, Q = j.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[j.k] : 0;
    for (let K = 0; K < Q; K++) {
      const ht = et + (pt() - 0.5) * x * 1.6, dt = (6 + pt() * 76) * S, bt = pt() < 0.35, ot = 1.8 + pt() * 1.6, nt = k(!0, ht, dt) * (bt ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(O * V / 2600 + K * 1.7 + Z) : 1);
      nt >= 0.03 && q.stars.push({ x: ht, y: dt, big: bt, size: ot, o: nt });
    }
    if (!j.night && (j.k === "clear" || j.k === "partly")) {
      const K = et + (pt() - 0.5) * x * 0.3, ht = Math.min(15, x * 0.29);
      q.suns.push({ x: K, y: 32 * S, rad: ht, halo: ht * 2.8 * (i ? 1 + 0.07 * Math.sin(O * V / 3600 + Z) : 1) });
    }
    if (j.night && (j.k === "clear" || j.k === "partly")) {
      const K = Math.min(0.78, x * 0.55 / 34), ht = et - 23 * K + (pt() - 0.5) * x * 0.2;
      q.moons.push({ x: ht + 23 * K, y: (4 + (i ? 0.8 * Math.sin(O * V / 5200 + Z) : 0)) * S + 23 * K, d: 46 * K });
    }
  }), b.forEach((j, Z) => {
    const pt = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[j.k];
    if (!pt) return;
    const et = qd(f * 577 + Z * 71 + 3), Q = (Z + 0.5) * x, K = j.k === "rain" || j.k === "storm" || j.night ? _.cloudNight : _.cloudDay, ht = j.night ? 0.82 : j.k === "storm" ? 0.75 : 1;
    for (let dt = 0; dt < pt; dt++) {
      const bt = x / 46 * (j.k === "partly" ? 0.85 : 0.75 + et() * 0.55), ot = Q + (j.k === "partly" ? x * 0.12 : (et() - 0.5) * x * 1.05), nt = (j.k === "partly" ? 40 : 6 + et() * 26) * S, at = i ? 2.5 * Math.sin(O * V / 9e3 + Z * 1.3 + dt * 2.1) : 0, D = i ? 0.9 * Math.sin(O * V / 6100 + Z + dt) : 0;
      q.clouds.push({ x: ot - 23 * bt + at, y: nt - 15.33 * bt + D, w: 46 * bt, h: 30.66 * bt, fill: K, o: ht * (pt > 1 && dt === 0 ? 0.85 : 1) });
    }
  }), b.forEach((j, Z) => {
    const pt = qd(f * 313 + Z * 29 + 11), et = (Z + 0.5) * x, Q = j.cond === "pouring" ? 16 : j.cond === "rainy" || j.cond === "hail" ? 9 : j.cond === "lightning-rainy" ? 12 : j.cond === "snowy-rainy" ? 5 : 0;
    for (let ht = 0; ht < Q; ht++) {
      let dt = et + (pt() - 0.5) * x * 1.05, bt = 44 + pt() * 36, ot = 1;
      if (i) {
        const at = ((bt - 44 + V * 0.04) % 36 + 36) % 36;
        dt -= 0.21 * (at - (bt - 44)), bt = 44 + at, ot = Math.min(1, at / 6, (36 - at) / 6);
      }
      bt *= S;
      const nt = k(j.night, dt, bt) * ot;
      nt >= 0.05 && q.drops.push({ x: dt, y: bt, o: nt });
    }
    const K = j.cond === "snowy" ? 11 : j.cond === "snowy-rainy" ? 6 : 0;
    for (let ht = 0; ht < K; ht++) {
      let dt = et + (pt() - 0.5) * x * 1.05, bt = 40 + pt() * 44, ot = 1;
      if (i) {
        const at = ((bt - 40 + V * 9e-3) % 44 + 44) % 44;
        bt = 40 + at, dt += 1.6 * Math.sin(O * V / 2800 + ht * 1.9 + Z), ot = Math.min(1, at / 6, (44 - at) / 6);
      }
      bt *= S;
      const nt = k(j.night, dt, bt) * ot;
      nt >= 0.05 && q.flakes.push({ x: dt, y: bt, o: nt });
    }
    if (j.k === "fog") {
      const ht = j.night ? "#c8ccd6" : "#ffffff", dt = j.night ? 0.28 : 0.62, bt = i ? 4 * Math.sin(O * V / 8e3 + Z) : 0;
      for (let ot = 0; ot < 4; ot++) q.fogs.push({ x: et - x * 0.75 + ot % 2 * x * 0.18 + (ot % 2 ? bt : -bt), y: (30 + ot * 13) * S, w: x * 1.3, c: ht, a: dt });
    }
    if (j.k === "storm") {
      const ht = (V / 3400 + Z * 0.37) % 1;
      q.bolts.push({ x: et + (pt() - 0.5) * x * 0.3 - 5, y: 36 * S, o: i && !(ht < 0.05 || ht > 0.09 && ht < 0.12) ? 0.8 : 1 });
    }
  }), q;
}
function Du(o, l, i, f, b, x, k, _) {
  const { S: O, C: S, cw: V, yb: q, glowAt: j, soft: Z, tw: pt, sy: et } = o, Q = new Array(i * f), K = new Uint8Array(i * f), ht = new Uint8Array(i * f), dt = (E, P, W, B, lt) => {
    W == null || E < 0 || P < 0 || E >= i || P >= f || (B >= 1 || B > sn(E + 5, P + 3)) && (Q[P * i + E] = W, K[P * i + E] = lt);
  }, bt = (E, P, W, B) => {
    for (let lt = Math.max(0, Math.floor(P - W) - 1); lt <= Math.min(f - 1, P + W + 1); lt++) for (let ut = Math.max(0, Math.floor(E - W) - 1); ut <= Math.min(i - 1, E + W + 1); ut++) B(ut, lt, ut + 0.5 - E, lt + 0.5 - P);
  }, ot = (E, P, W) => {
    for (let lt = 0; lt < E.length - 1; lt++) {
      const ut = (lt + P) * V;
      if (W < ut - pt / 2) return [E[lt], E[lt], 0];
      if (W <= ut + pt / 2) return [E[lt], E[lt + 1], (W - ut + pt / 2) / pt];
    }
    const B = E[E.length - 1];
    return [B, B, 0];
  }, nt = O.filter((E) => !E.night).map((E) => E.sky), at = O.filter((E) => E.night).map((E) => E.sky), D = Z / x, xt = 16 * et / x;
  for (let E = 0; E < i; E++) {
    const P = (E + 0.5) * b, W = q(P) / x, B = ot(nt, 0.75, P), lt = ot(at, 1.25, P), ut = j(P);
    for (let mt = 0; mt < f; mt++) {
      const wt = sn(E, mt), kt = mt + 0.5 - W, Ot = (D > 0.01 ? ln(0.5 + kt / D) : kt > 0 ? 1 : 0) > wt;
      let zt = Ot ? B[2] > wt ? B[1] : B[0] : lt[2] > wt ? lt[1] : lt[0];
      (Ot ? ln(((mt + 0.5) / f - 0.45) / 0.55) * 0.7 : ln(1 - (mt + 0.5) / (f * 0.55)) * 0.7) > sn(E + 2, mt + 5) && (zt = Ot ? ze(zt, "#ffffff", 0.18) : ze(zt, "#000000", 0.25)), Ot && kt >= 0 && kt < xt && ut.a * 1.3 * (1 - kt / xt) > sn(E + 6, mt + 1) && (zt = ut.c), Q[mt * i + E] = zt, ht[mt * i + E] = Ot ? 0 : 1;
    }
  }
  const st = ze(S.sun, "#ffffff", 0.55), Bt = ze(S.moon, "#ffffff", 0.6);
  l.stars.forEach((E) => {
    const P = Math.floor(E.x / b), W = Math.floor(E.y / x);
    if (P < 0 || W < 0 || P >= i || W >= f || !ht[W * i + P] || E.o < 0.15) return;
    const B = E.o > 0.45 ? S.star : ze(S.star, Q[W * i + P], 0.5), lt = E.big && E.o > 0.6 ? Math.floor(E.size / b) : 0;
    dt(P, W, B, 1, ar);
    for (let ut = 1; ut <= lt; ut++) [[P - ut, W], [P + ut, W], [P, W - ut], [P, W + ut]].forEach((mt) => {
      mt[0] >= 0 && mt[1] >= 0 && mt[0] < i && mt[1] < f && ht[mt[1] * i + mt[0]] && dt(mt[0], mt[1], B, 1, ar);
    });
  }), l.suns.forEach((E) => {
    const P = Math.max(1.5, E.rad / b), W = E.x / b, B = E.y / x, lt = E.halo / b * 0.85;
    if (bt(W, B, lt, (ut, mt, wt, kt) => {
      const Ot = Math.sqrt(wt * wt + kt * kt);
      Ot > P && Ot < lt && !ht[mt * i + ut] && dt(ut, mt, st, 0.3 * (1 - (Ot - P) / (lt - P)), 0);
    }), _) {
      const ut = Math.floor(k / 500) % 2, mt = Math.max(1, P * 0.3);
      for (let wt = 0; wt < 8; wt++) if (wt % 2 === ut) for (let kt = P + 1.2; kt < P + 1.2 + mt; kt += 0.7) dt(Math.floor(W + Math.cos(wt * Math.PI / 4) * kt), Math.floor(B + Math.sin(wt * Math.PI / 4) * kt), S.sun, 1, vc);
    }
    bt(W, B, P, (ut, mt, wt, kt) => {
      wt * wt + kt * kt <= P * P && dt(ut, mt, ln(((kt / P + 1) / 2 - 0.6) / 0.4) > sn(ut, mt) ? S.sunEdge : S.sun, 1, fc);
    });
  }), l.moons.forEach((E) => {
    const P = Math.max(1.5, E.d * 0.37 / b), W = E.x / b, B = E.y / x, lt = W + 0.547 * P, ut = B - 0.503 * P, mt = 0.82 * P;
    bt(W, B, P, (wt, kt, Ot, zt) => {
      if (Ot * Ot + zt * zt > P * P) return;
      const da = wt + 0.5 - lt, qt = kt + 0.5 - ut;
      da * da + qt * qt > mt * mt && dt(wt, kt, ln((zt + P) / (2 * P) * 1.1 - 0.1) > sn(wt, kt) ? S.moon : Bt, 1, hc);
    });
  }), l.clouds.forEach((E) => {
    const P = Math.max(3, E.w / b), W = P * 0.6665, B = E.x / b, lt = E.y / x, ut = ze(E.fill, "#000000", 0.16);
    for (let mt = Math.max(0, Math.floor(lt) - 1); mt <= Math.min(f - 1, lt + W + 1); mt++) for (let wt = Math.max(0, Math.floor(B) - 1); wt <= Math.min(i - 1, B + P + 1); wt++) {
      const kt = (wt + 0.5 - B) / P, Ot = (mt + 0.5 - lt) / P;
      bd(kt, Ot) && dt(wt, mt, !bd(kt, Ot + 1 / P) || ln((Ot - 0.42) / 0.25) * 0.8 > sn(wt, mt) ? ut : E.fill, E.o, mc);
    }
  }), l.fogs.forEach((E) => {
    const P = Math.floor(E.y / x), W = Math.max(P, Math.floor((E.y + 6 * et) / x) - 1), B = Math.floor(E.x / b), lt = Math.floor((E.x + E.w) / b);
    for (let ut = P; ut <= W; ut++) for (let mt = B; mt <= lt; mt++) {
      const wt = (mt - B) / Math.max(1, lt - B);
      dt(mt, ut, E.c, E.a * (wt < 0.25 ? wt / 0.25 : wt > 0.75 ? (1 - wt) / 0.25 : 1), 0);
    }
  });
  const it = Math.max(2, Math.round(9 / x));
  l.drops.forEach((E) => {
    const P = E.x / b, W = Math.floor(E.y / x);
    for (let B = 0; B < it; B++) dt(Math.floor(P - 0.208 * B * x / b), W + B, S.rain, E.o, gc);
  });
  const Ht = Math.max(0, Math.round(4.4 / b / 2.6));
  return l.flakes.forEach((E) => {
    const P = Math.floor(E.x / b), W = Math.floor(E.y / x);
    dt(P, W, S.snow, E.o, rn);
    for (let B = 1; B <= Ht; B++)
      dt(P - B, W, S.snow, E.o, rn), dt(P + B, W, S.snow, E.o, rn), dt(P, W - B, S.snow, E.o, rn), dt(P, W + B, S.snow, E.o, rn);
  }), l.bolts.forEach((E) => {
    if (b <= 3.5)
      for (let P = Math.floor(E.y / x); P <= (E.y + 24) / x; P++) for (let W = Math.floor(E.x / b); W <= (E.x + 11) / b; W++)
        Sp(Eu, (W + 0.5) * b - E.x, (P + 0.5) * x - E.y) && dt(W, P, S.sun, 1, Is);
    else {
      const P = Math.round(E.x / b), W = Math.round(E.y / x);
      _u.forEach((B, lt) => B.split("").forEach((ut, mt) => {
        ut === "#" && dt(P + mt, W + lt, S.sun, 1, Is);
      }));
    }
  }), { col: Q, ids: K };
}
function Bu(o, l) {
  const i = l.px, f = Math.max(6, Math.round(l.width / i)), b = Math.max(6, Math.round(l.height / i)), x = l.width / f, k = l.height / b, _ = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, O = (Z) => {
    const pt = Lp(Z, l);
    return Du(pt, Ap(pt, { clock: _, ambient: l.ambient, seed: l.seed }), f, b, x, k, _, l.ambient);
  }, S = O(o), V = l.reveal == null ? 1 : ln(l.reveal);
  let q = S.col, j = S.ids;
  if (V < 1) {
    const Z = l.prev ? O(l.prev) : null, pt = V * (f + 12);
    q = new Array(f * b), j = new Uint8Array(f * b);
    for (let et = 0; et < f * b; et++) {
      const Q = et % f, K = et / f | 0;
      (l.reduce ? V : ln((pt - Q) / 12)) > sn(Q, K) ? (q[et] = S.col[et], j[et] = S.ids[et]) : Z ? (q[et] = Z.col[et], j[et] = Z.ids[et]) : (q[et] = null, j[et] = 255);
    }
  }
  return Tp(q, j, f, b, { oneBit: l.oneBit, ink: l.ink, paper: l.paper, snowInk: !1 });
}
function Ru(o, l, i) {
  const f = i.width, b = i.height, x = i.reveal == null ? 1 : ln(i.reveal), k = (j, Z) => {
    const pt = Lp(Z, i);
    Pu(j, pt, Ap(pt, i));
  };
  if (o.clearRect(0, 0, f, b), x >= 1) {
    k(o, l);
    return;
  }
  if (i.prev && k(o, i.prev), i.reduce) {
    o.save(), o.globalAlpha = x, k(o, l), o.restore();
    return;
  }
  const _ = o.canvas, O = _.__wxOff || (_.__wxOff = document.createElement("canvas"));
  (O.width !== _.width || O.height !== _.height) && (O.width = _.width, O.height = _.height);
  const S = O.getContext("2d");
  S.setTransform(o.getTransform()), S.clearRect(0, 0, f, b), k(S, l);
  const V = x * (f + 64) - 64, q = S.createLinearGradient(V, 0, V + 64, 0);
  q.addColorStop(0, "rgba(0,0,0,1)"), q.addColorStop(1, "rgba(0,0,0,0)"), S.globalCompositeOperation = "destination-in", S.fillStyle = q, S.fillRect(0, 0, f, b), S.globalCompositeOperation = "source-over", o.save(), o.setTransform(1, 0, 0, 1, 0, 0), o.drawImage(O, 0, 0), o.restore();
}
function Pu(o, l, i) {
  const { W: f, H: b, S: x, C: k, cw: _, yb: O, glowAt: S, soft: V, tw: q, sy: j } = l, Z = (st, Bt) => {
    const it = hd(st);
    return "rgba(" + it[0] + "," + it[1] + "," + it[2] + "," + Math.max(0, Math.min(1, Bt)).toFixed(3) + ")";
  }, pt = (st, Bt) => {
    const it = o.createLinearGradient(0, 0, f, 0);
    it.addColorStop(0, st[0]);
    for (let Ht = 0; Ht < st.length - 1; Ht++) {
      const E = (Ht + Bt) * _, P = (E - q / 2) / f, W = (E + q / 2) / f;
      P > 0 && P < 1 && it.addColorStop(P, st[Ht]), W > 0 && W < 1 && it.addColorStop(W, st[Ht + 1]);
    }
    return it.addColorStop(1, st[st.length - 1]), it;
  }, et = Math.max(24, Math.ceil(f / 4)), Q = (st, Bt) => {
    o.beginPath();
    for (let it = 0; it <= et; it++) {
      const Ht = f * it / et, E = st == null ? 0 : O(Ht) + st;
      it ? o.lineTo(Ht, E) : o.moveTo(Ht, E);
    }
    for (let it = et; it >= 0; it--) {
      const Ht = f * it / et;
      o.lineTo(Ht, O(Ht) + Bt);
    }
    o.closePath(), o.fill();
  };
  o.save(), o.fillStyle = pt(x.filter((st) => !st.night).map((st) => st.sky), 0.75), o.fillRect(0, 0, f, b);
  const K = o.createLinearGradient(0, 0, f, 0);
  for (let st = 0; st <= 64; st++) {
    const Bt = S(f * st / 64);
    K.addColorStop(st / 64, Z(Bt.c, Math.min(1, Bt.a)));
  }
  o.fillStyle = K;
  for (let st = 0; st < 8; st++)
    o.globalAlpha = 1 - st / 8, Q(st * 2 * j, (st + 1) * 2 * j);
  o.fillStyle = pt(x.filter((st) => st.night).map((st) => st.sky), 1.25);
  const ht = Math.max(0.5, V), dt = 6;
  o.globalAlpha = 1, Q(null, -ht);
  for (let st = 0; st < dt; st++)
    o.globalAlpha = 1 - (st + 0.5) / dt, Q(-ht + 2 * ht * st / dt, -ht + 2 * ht * (st + 1) / dt);
  o.globalAlpha = 1;
  const bt = new Path2D(Lu), ot = new Path2D(Tu), nt = new Path2D(Cu), at = new Path2D(Au);
  o.fillStyle = k.star, i.stars.forEach((st) => {
    o.globalAlpha = st.o, st.big ? (o.save(), o.translate(st.x, st.y), o.scale(st.size, st.size), o.fill(bt), o.restore()) : (o.beginPath(), o.arc(st.x, st.y, 0.8, 0, Math.PI * 2), o.fill());
  }), o.globalAlpha = 1;
  const D = ze(k.sun, "#ffffff", 0.55);
  i.suns.forEach((st) => {
    const Bt = o.createRadialGradient(st.x, st.y, 0, st.x, st.y, st.halo);
    Bt.addColorStop(0, Z(D, 0.42)), Bt.addColorStop(0.7, Z(D, 0)), o.fillStyle = Bt, o.beginPath(), o.arc(st.x, st.y, st.halo, 0, Math.PI * 2), o.fill();
    const it = o.createLinearGradient(0, st.y - st.rad, 0, st.y + st.rad);
    it.addColorStop(0.6, k.sun), it.addColorStop(1, k.sunEdge), o.fillStyle = it, o.beginPath(), o.arc(st.x, st.y, st.rad, 0, Math.PI * 2), o.fill();
  });
  const xt = ze(k.moon, "#ffffff", 0.6);
  i.moons.forEach((st) => {
    o.save(), o.translate(st.x - st.d / 2, st.y - st.d / 2), o.scale(st.d / 46, st.d / 46);
    const Bt = o.createLinearGradient(0, 6, 0, 40);
    Bt.addColorStop(0, xt), Bt.addColorStop(1, k.moon), o.fillStyle = Bt, o.fill(ot), o.restore();
  }), i.clouds.forEach((st) => {
    o.save(), o.globalAlpha = st.o, o.translate(st.x, st.y), o.scale(st.w / 46, st.h / 30.66), o.translate(-4, -9.67), o.fillStyle = st.fill, o.fill(nt), o.restore();
  }), i.fogs.forEach((st) => {
    const Bt = o.createLinearGradient(st.x, 0, st.x + st.w, 0);
    Bt.addColorStop(0, Z(st.c, 0)), Bt.addColorStop(0.25, Z(st.c, st.a)), Bt.addColorStop(0.75, Z(st.c, st.a)), Bt.addColorStop(1, Z(st.c, 0)), o.fillStyle = Bt, o.fillRect(st.x, st.y, st.w, 6 * j);
  }), o.fillStyle = k.rain, i.drops.forEach((st) => {
    o.save(), o.globalAlpha = st.o, o.translate(st.x, st.y), o.rotate(12 * Math.PI / 180), o.fillRect(-1.5, 0, 3, 9), o.restore();
  }), o.fillStyle = k.snow, i.flakes.forEach((st) => {
    o.globalAlpha = st.o, o.beginPath(), o.arc(st.x, st.y, 2.2, 0, Math.PI * 2), o.fill();
  }), o.fillStyle = k.sun, i.bolts.forEach((st) => {
    o.save(), o.globalAlpha = st.o, o.translate(st.x, st.y), o.fill(at), o.restore();
  }), o.restore();
}
function Nu(o, l) {
  var Ts, Ji, ad, nd, vl, bl, Ls;
  const i = (a) => o.getElementById(a), f = i("workoutView"), b = i("workoutNameInput");
  let x = !0;
  const k = i("homeClock");
  function _() {
    k && (k.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  _(), setInterval(_, 15e3);
  const O = i("createFlow"), S = i("createMovementsSlot"), V = i("createTimingSlot"), q = i("createFinishSlot"), j = i("movementStepSummary"), Z = i("timingStepSummary"), pt = i("finishStepSummary"), et = i("continueToTiming"), Q = i("continueToFinish"), K = i("finishMoveButton");
  let ht = !1, dt = [];
  function bt(a) {
    !a || dt.some((s) => s.node === a) || dt.push({ node: a, parent: a.parentNode, next: a.nextSibling });
  }
  function ot(a, s) {
    a && (bt(a), s.appendChild(a));
  }
  function nt() {
    [...dt].reverse().forEach(({ node: a, parent: s, next: c }) => {
      s && (c && c.parentNode === s ? s.insertBefore(a, c) : s.appendChild(a));
    }), dt = [];
  }
  function at(a) {
    o.querySelectorAll(".createStep").forEach((s) => {
      s.classList.toggle("active", s.dataset.createStep === a);
    }), a === "timing" && (ht = !0), D();
  }
  function D() {
    var n, r;
    if (!De) return;
    Xt[oe];
    const a = Wt.filter((d) => !d.hidden), s = a.filter((d) => d.kind !== "rest").length, c = a.filter((d) => d.kind === "rest").length;
    j.textContent = s ? s + " movement" + (s === 1 ? "" : "s") + (c ? " · " + c + " rest" + (c === 1 ? "" : "s") : "") : "No movements yet";
    const v = s > 0, C = o.querySelector('[data-open-step="timing"]'), R = o.querySelector('[data-open-step="finish"]');
    C.disabled = !v, et.disabled = !v, Z.textContent = v ? En(P.value) + " · " + ea(W.value) + " movement · " + ea(B.value) + " rest" : "Add a movement first", R.disabled = !(v && ht);
    const t = ((b == null ? void 0 : b.value) || "").trim(), e = [];
    (n = i("includeWarmupPreset")) != null && n.checked && e.push("warm-up"), (r = i("includeCooldownPreset")) != null && r.checked && e.push("cooldown"), pt.textContent = t ? t + (e.length ? " · " + e.join(" + ") : "") : e.length ? e.join(" + ") : "Name and optional extras";
  }
  function xt() {
    var p, g, m;
    O.hidden = !1, ht = !1;
    const a = o.querySelector(".editNameRow"), s = i("createMoveOptions"), c = o.querySelector(".timeTiles"), v = i("routineSummaryModal"), C = o.querySelector(".tempoRevealRow"), R = i("tempoExperiment"), t = (p = i("warmupList")) == null ? void 0 : p.closest("section"), e = i("movementCreatorLaunch"), n = i("movementCreator"), r = (g = i("strengthList")) == null ? void 0 : g.closest("section"), d = (m = i("cooldownList")) == null ? void 0 : m.closest("section");
    [s == null ? void 0 : s.querySelector(".createExtras"), t, e, n, r, d].forEach((M) => M && ot(M, S)), [s, c, v, C, R].forEach((M) => ot(M, V)), ot(a, q), at("movements"), D();
  }
  function st() {
    nt(), O.hidden = !0, o.querySelectorAll(".createStep").forEach((a) => a.classList.remove("active"));
  }
  o.querySelectorAll("[data-open-step]").forEach((a) => a.addEventListener("click", () => {
    a.disabled || at(a.dataset.openStep);
  })), et.addEventListener("click", () => {
    et.disabled || at("timing");
  }), Q.addEventListener("click", () => at("finish")), K.addEventListener("click", () => i("saveWorkoutEdit").click());
  const Bt = { home: i("homeView"), workout: i("workoutView"), settings: i("settingsView") }, it = i("homeNav"), Ht = i("settingsNav");
  function E(a) {
    Object.entries(Bt).forEach(([s, c]) => c.classList.toggle("active", s === a)), it.classList.toggle("active", a === "home"), Ht.classList.toggle("active", a === "settings"), a === "home" && setTimeout(_t, 400), a === "settings" && (requestAnimationFrame(() => Qa(o.querySelector(".tab.active"), !1)), ds());
  }
  const P = i("totalTime"), W = i("workTime"), B = i("restTime"), lt = i("totalOut"), ut = i("workOut"), mt = i("restOut"), wt = i("totalFill"), kt = i("workFill"), Ot = i("restFill"), zt = i("roundsInput"), da = i("roundsFill"), qt = i("roundsOut"), Cn = i("totalLabel"), pn = i("routineSummaryModal"), Tn = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let Ie = Tn.map((a) => ({ ...a })), Wt = [
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
  const Kt = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let xa = Kt.map((a) => ({ ...a }));
  const Ln = {
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
  }, Nt = ee(l.data), Xt = Nt.profiles;
  let oe = Xt[Nt.selected] ? Nt.selected : Nt.order.find((a) => Xt[a]) || "kettlebell";
  function ee(a) {
    const s = a && typeof a == "object" ? JSON.parse(JSON.stringify(a)) : {}, c = s.profiles && Object.keys(s.profiles).length ? s.profiles : JSON.parse(JSON.stringify(Ln)), v = (Array.isArray(s.order) ? s.order : Object.keys(c)).filter((C) => c[C]);
    return Object.keys(c).forEach((C) => {
      v.includes(C) || v.push(C);
    }), {
      v: 1,
      profiles: c,
      order: v,
      selected: s.selected || v[0],
      history: Array.isArray(s.history) ? s.history : [],
      checkins: (Array.isArray(s.checkins) ? s.checkins : _a(s.energy)).map(or),
      settings: { ...s.settings || {} }
    };
  }
  function _a(a) {
    if (!Array.isArray(a)) return [];
    const s = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], c = [];
    return a.forEach((v) => {
      const C = new Date(v.at);
      if (isNaN(C)) return;
      const R = C.getFullYear() + "-" + String(C.getMonth() + 1).padStart(2, "0") + "-" + String(C.getDate()).padStart(2, "0"), t = C.getHours() < 14 ? "morning" : "evening";
      if (c.some((n) => n.date === R && n.slot === t)) return;
      const e = s.indexOf(v.value) + 1;
      e > 0 && c.push({ date: R, slot: t, mood: null, energy: e, at: v.at });
    }), c;
  }
  function or(a) {
    if (a.scale === 100) return a;
    const s = (c) => c == null ? null : Math.round((Number(c) - 1) / 5 * 100);
    return { ...a, mood: s(a.mood), energy: s(a.energy), scale: 100 };
  }
  function ja() {
    De || (Nt.selected = oe, Nt.order = Nt.order.filter((a) => Xt[a] && a !== An), l.save(Nt));
  }
  function Qt() {
    return Nt.settings;
  }
  function Ee(a) {
    const s = Xt[a];
    if (!s) return;
    oe = a;
    const c = i("workoutNameInput");
    if (c && (c.value = s.name), P.value = s.total, W.value = s.work, B.value = s.rest, zt.value = s.rounds || 1, s.customSequence) {
      const v = (s.sequence || []).map((R) => ({ ...R })), C = (R) => v.filter((t) => t.presetRole === R).map(({ presetRole: t, ...e }) => e);
      Ie = (s.warmup || C("warmup")).map((R) => ({ ...R })), xa = (s.cooldown || C("cooldown")).map((R) => ({ ...R })), Wt = v.filter((R) => !R.presetRole), Yo(s.preset || "movement", !1);
    } else
      P.min = 3, P.max = 40, P.step = 1, W.min = 20, W.max = 60, W.step = 5, B.min = 5, B.max = 30, B.step = 5, Ie = (s.warmup || Tn).map((v) => ({ ...v })), xa = (s.cooldown || Kt).map((v) => ({ ...v })), Wt = s.strength.map((v) => Array.isArray(v) ? (([C, R, t, e = !1]) => ({ id: C, name: R, group: t, kind: "work", hidden: !!e }))(v) : { ...v });
    o.querySelectorAll(".workoutPanel[data-workout]").forEach((v) => v.classList.toggle("active", v.dataset.workout === a)), ke();
  }
  function ir(a, s, c) {
    const v = a.getBoundingClientRect(), C = v.width / 2, R = v.height / 2, t = s - C, e = c - R;
    let n = 1 / 0, r = 1 / 0;
    t !== 0 && (n = C / Math.abs(t)), e !== 0 && (r = R / Math.abs(e));
    const d = Math.min(Math.max(1 / Math.min(n, r), 0), 1);
    let u = Math.atan2(e, t) * (180 / Math.PI) + 90;
    return u < 0 && (u += 360), { edge: d, angle: u };
  }
  function Zn(a, s, c = !1) {
    const v = a.getBoundingClientRect(), C = s.clientX - v.left, R = s.clientY - v.top, { edge: t, angle: e } = ir(a, C, R), n = c ? 100 : t * 100;
    a.style.setProperty("--edge-proximity", n.toFixed(3)), a.style.setProperty("--cursor-angle", e.toFixed(3) + "deg"), a.classList.toggle("borderGlowActive", c || n >= 30);
  }
  function rr(a) {
    a.addEventListener("pointermove", (c) => Zn(a, c, !1)), a.addEventListener("pointerenter", (c) => Zn(a, c, !1)), a.addEventListener("pointerdown", (c) => Zn(a, c, !0));
    const s = () => {
      a.classList.remove("borderGlowActive"), a.style.setProperty("--edge-proximity", "0");
    };
    a.addEventListener("pointerleave", s), a.addEventListener("pointerup", s), a.addEventListener("pointercancel", s);
  }
  rr(i("addWorkoutPanel"));
  let De = !1, An = null;
  function Ut(a) {
    return String(a ?? "").replace(/[&<>"']/g, (s) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[s]);
  }
  function Hs(a) {
    return a.summary ? a.summary : a.customSequence ? En(a.total) + " · custom move" : En(a.total) + " · " + ea(a.work) + " / " + ea(a.rest) + " · warm-up + cooldown";
  }
  function un(a, s) {
    var R;
    const c = document.createElement("article");
    c.className = "workoutPanel", c.dataset.workout = a, c.tabIndex = 0;
    const v = s.activityCount ?? (((R = s.sequence) == null ? void 0 : R.length) || 0);
    c.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + Ut(s.name) + '</div><div class="sub">' + Ut(Hs(s)) + '</div><span class="sourceTag">' + Ut(s.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (v ? v + " activities" + ((s.rounds || 1) > 1 ? " × " + s.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + Ut(s.name) + "</div></div>";
    const C = i("addWorkoutPanel");
    return i("workoutGallery").insertBefore(c, C), rr(c), c.addEventListener("click", (t) => {
      t.target.closest("button") || Ee(a);
    }), c.addEventListener("keydown", (t) => {
      (t.key === "Enter" || t.key === " ") && !t.target.closest("button") && (t.preventDefault(), Ee(a));
    }), c.querySelector(".seeWorkoutBtn").addEventListener("click", (t) => {
      t.stopPropagation(), Ee(a), jr(!1);
    }), c.querySelector(".startWorkoutBtn").addEventListener("click", (t) => {
      t.stopPropagation(), Ee(a), Xa();
    }), c;
  }
  function Ge() {
    o.querySelectorAll(".workoutPanel[data-workout]").forEach((a) => a.remove()), Nt.order.forEach((a) => {
      Xt[a] && un(a, Xt[a]);
    }), o.querySelectorAll(".workoutPanel[data-workout]").forEach((a) => a.classList.toggle("active", a.dataset.workout === oe));
  }
  Ge(), i("addWorkoutPanel").addEventListener("keydown", (a) => {
    (a.key === "Enter" || a.key === " ") && (a.preventDefault(), i("addWorkoutPanel").click());
  }), i("addWorkoutPanel").addEventListener("click", () => {
    De = !0, An = "custom-" + Date.now(), Xt[An] = {
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
    }, Ee(An), jr(!0);
  });
  let Ft = [], Zt = 0, Ue = 0, ae = 1, At = !1, re = null, de = null, me = !1, za = Nt.settings.upcomingCount ?? "all", sr = "movement";
  function Ei(a, s, c) {
    return (Number(a) - s) / (c - s) * 100;
  }
  function ea(a) {
    const s = Math.max(0, Number(a) || 0);
    return s >= 3600 && s % 3600 === 0 ? s / 3600 + " hr" : s >= 60 && s % 60 === 0 ? s / 60 + " min" : s >= 60 ? Math.round(s / 60) + " min" : Math.round(s) + " sec";
  }
  function En(a) {
    const s = Math.max(0, Number(a) || 0);
    return s >= 60 && s % 60 === 0 ? s / 60 + " hr" : s >= 60 ? Math.floor(s / 60) + " hr " + s % 60 + " min" : s + " min";
  }
  function _i() {
    wt.style.width = Ei(P.value, Number(P.min), Number(P.max)) + "%", kt.style.width = Ei(W.value, Number(W.min), Number(W.max)) + "%", Ot.style.width = Ei(B.value, Number(B.min), Number(B.max)) + "%", ut.textContent = ea(W.value), mt.textContent = ea(B.value);
    const a = Number(zt.value) || 1;
    da.style.width = Ei(a, 1, 10) + "%", Cn.textContent = a > 1 ? "Time per round" : "Total time";
  }
  function lr(a) {
    return a.filter((s) => !s.hidden);
  }
  function _n(a) {
    const s = Math.max(0, Math.round(Number(a) || 0)), c = Math.floor(s / 3600), v = Math.floor(s % 3600 / 60), C = s % 60;
    return (c ? c + ":" + String(v).padStart(2, "0") : v) + ":" + String(C).padStart(2, "0");
  }
  function Nr(a) {
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
        const e = s.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        e && (v = e[2]);
      }
    if (!v || !/^[\w-]{11}$/.test(v)) return null;
    const C = (e) => {
      if (!e) return 0;
      if (/^\d+$/.test(e)) return Number(e);
      const n = e.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return n ? (Number(n[1]) || 0) * 3600 + (Number(n[2]) || 0) * 60 + (Number(n[3]) || 0) : 0;
    }, R = C(s.searchParams.get("t") || s.searchParams.get("start")), t = C(s.searchParams.get("end"));
    return { id: v, start: R, end: t > R ? t : null };
  }
  function Uo(a, s) {
    if (a.useVideoLength === !1) return Math.max(5, Number(a.duration) || s || 300);
    const c = Number(a.start) || 0, v = Number(a.end) || Number(a.videoDuration) || 0;
    return v > c ? Math.round(v - c) : Number(a.duration) || 300;
  }
  function Dn(a, s) {
    const c = Math.max(0, Number(a) || 0);
    return Math.round(s === "hour" ? c * 3600 : s === "min" ? c * 60 : c);
  }
  function Yo(a, s = !0) {
    sr = a, o.querySelectorAll(".createPresetBtn").forEach((v) => v.classList.toggle("active", v.dataset.movePreset === a));
    const c = Xt[oe];
    c && (c.preset = a), a === "work" ? (P.min = 30, P.max = 480, P.step = 30, W.min = 300, W.max = 7200, W.step = 300, B.min = 60, B.max = 1800, B.step = 60, s && (P.value = 60, W.value = 1500, B.value = 300), i("addMovementUnit").value = "min", i("addMovementDuration").value = 25, i("addRestUnit").value = "min", i("addRestDuration").value = 5) : (P.min = 3, P.max = 40, P.step = 1, W.min = 20, W.max = 60, W.step = 5, B.min = 5, B.max = 30, B.step = 5, s && (P.value = 20, W.value = 45, B.value = 15), i("addMovementUnit").value = "sec", i("addMovementDuration").value = 45, i("addRestUnit").value = "sec", i("addRestDuration").value = 30), _i();
  }
  function dr(a, s) {
    const c = sr === "work";
    return a.map((v, C) => ({ ...v, id: s + "-" + C + "-" + Date.now().toString(36), useGlobalTiming: !c, duration: c ? 60 : Number(W.value) }));
  }
  function Di() {
    const a = Xt[oe];
    a != null && a.customSequence && (a.includeWarmup = i("includeWarmupPreset").checked, a.includeCooldown = i("includeCooldownPreset").checked, a.includeWarmup && !Ie.length && (Ie = dr(Tn, "warm")), a.includeCooldown && !xa.length && (xa = dr(Kt, "cool")), ke());
  }
  function Fs() {
    const a = i("upcomingCountSetting");
    if (!a) return;
    const s = Math.max(1, Ft.length - 1), c = za;
    a.innerHTML = "";
    for (let R = 1; R <= s; R++) {
      const t = document.createElement("option");
      t.value = String(R), t.textContent = String(R), a.appendChild(t);
    }
    const v = document.createElement("option");
    v.value = "all", v.textContent = "All", a.appendChild(v);
    const C = c === "all" ? "all" : String(Math.min(Number(c) || 1, s));
    a.value = C, za = C === "all" ? "all" : Number(C);
  }
  function ke() {
    Number(P.value) * 60;
    const a = Number(W.value), s = Number(B.value), c = Xt[oe], v = !!(c != null && c.customSequence), C = (v ? !c.includeWarmup : c != null && c.warmupOff) ? [] : lr(Ie), R = lr(Wt), t = v && !c.includeCooldown ? [] : lr(xa);
    if (c && (c.total = Number(P.value), c.work = a, c.rest = s, c.rounds = Number(zt.value) || 1, c.customSequence ? (c.sequence = Wt.map((Y) => ({ ...Y })), c.warmup = Ie.map((Y) => ({ ...Y })), c.cooldown = xa.map((Y) => ({ ...Y }))) : (c.strength = Wt.map((Y) => ({ ...Y })), c.warmup = Ie.map((Y) => ({ ...Y })), c.cooldown = xa.map((Y) => ({ ...Y })))), c != null && c.customSequence) {
      const Y = [...C.map((yt) => ({ ...yt, section: "warmup" })), ...R, ...t.map((yt) => ({ ...yt, section: "cooldown" }))].map((yt) => {
        if (yt.kind === "video") return { ...yt, duration: Uo(yt, a), rest: 0 };
        if (yt.kind === "rest") {
          const Gt = yt.useGlobalTiming === !0 ? s : Number(yt.duration) || s;
          return { ...yt, duration: Gt, rest: 0 };
        }
        const Et = yt.useGlobalTiming === !1 && Number(yt.duration) || a;
        return { ...yt, duration: Et, rest: 0 };
      });
      c.autoRest && Number(c.autoRestDuration) > 0 ? (Ft = [], Y.forEach((yt, Et) => {
        Ft.push(yt);
        const Gt = Y[Et + 1];
        yt.kind !== "rest" && Gt && Gt.kind !== "rest" && Ft.push({
          id: "auto-rest-" + Et,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(c.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : Ft = Y;
    } else
      Ft = [...C.map((Y) => ({ ...Y, section: "warmup" })), ...R, ...t.map((Y) => ({ ...Y, section: "cooldown" }))].map((Y) => Y.kind === "video" ? { ...Y, duration: Uo(Y, a), rest: 0 } : Y.kind === "rest" ? { ...Y, duration: Y.useGlobalTiming === !0 ? s : Number(Y.duration) || s, rest: 0 } : { ...Y, duration: Y.useGlobalTiming === !1 && Number(Y.duration) || a, rest: s }), Ft.forEach((Y, yt) => {
        var Et;
        ((Et = Ft[yt + 1]) == null ? void 0 : Et.kind) === "rest" && (Y.rest = 0);
      }), Ft.length && (Ft[Ft.length - 1].rest = 0);
    const e = Math.max(1, Math.min(10, Number(zt.value) || 1)), n = Ft, r = (Y) => e <= 1 ? null : Y.section === "warmup" || Y.presetRole === "warmup" ? "first" : Y.section === "cooldown" || Y.presetRole === "cooldown" ? "last" : Y.kind === "video" && (Y.videoRounds === "first" || Y.videoRounds === "last") ? Y.videoRounds : null, d = (Y) => !!r(Y), u = n.filter((Y) => !d(Y)), p = n.filter(d), g = u.length, m = u.reduce((Y, yt) => Y + yt.duration + yt.rest, 0), M = p.reduce((Y, yt) => Y + yt.duration + yt.rest, 0), T = [
      p.some((Y) => Y.section === "warmup" || Y.presetRole === "warmup") && "warm-up",
      p.some((Y) => Y.section === "cooldown" || Y.presetRole === "cooldown") && "cooldown",
      p.some((Y) => Y.kind === "video" && !Y.section && !Y.presetRole) && "video"
    ].filter(Boolean), A = T.length > 1 ? T.slice(0, -1).join(", ") + " & " + T[T.length - 1] : T[0] || "";
    Ft = [];
    const H = (Y, yt) => {
      const Et = r(Y);
      return !Et || (Et === "first" ? yt === 1 : yt === e);
    };
    for (let Y = 1; Y <= e; Y++)
      if (n.filter((yt) => H(yt, Y)).forEach((yt, Et) => Ft.push({ ...yt, id: yt.id + (e > 1 ? "-r" + Y : ""), round: Y, roundIndex: Et })), Y < e && g)
        if (c != null && c.customSequence)
          Ft.push({ id: "round-break-" + Y, name: "Rest", group: "Round " + (Y + 1) + " next", kind: "rest", hidden: !1, duration: s, rest: 0, round: Y, roundIndex: g, roundBreak: !0 });
        else {
          const yt = Ft[Ft.length - 1];
          yt.rest = s, yt.roundBreakAfter = !0;
        }
    _i();
    const I = Ft.reduce((Y, yt) => Y + yt.duration + yt.rest, 0), U = Math.round(m / 60), z = Math.round(I / 60), G = e > 1 ? En(U) + " × " + e + " rounds" + (M ? " + " + ea(M) + " " + A : "") + " (" + En(z) + ")" : En(z), N = [C.length ? "warm-up" : "", t.length ? "cooldown" : ""].filter(Boolean), ct = c != null && c.customSequence ? G + " · " + g + " items" + (N.length && !(e > 1 && M) ? " · " + N.join(" + ") : "") : G + " · " + ea(a) + " / " + ea(s) + (N.length && !(e > 1 && M) ? " · " + N.join(" + ") : "");
    lt.textContent = ea(m);
    const $ = Ft.filter((Y) => !Y.roundBreak).length, Mt = e > 1 ? $ + " activities · " + e + " rounds" : g + " activities";
    qt.textContent = e > 1 ? e + " rounds · " + En(z) + " total" : "1 round", i("roundsCount").textContent = e, o.querySelectorAll("[data-rounds-step]").forEach((Y) => {
      Y.disabled = Number(Y.dataset.roundsStep) < 0 ? e <= 1 : e >= 10;
    }), c && (c.summary = ct, c.activityCount = g);
    const ne = o.querySelector(".workoutPanel.active .sub");
    ne && (ne.textContent = ct), pn.textContent = ct, xo(), o.querySelectorAll(".workoutPanel.active .activityCount").forEach((Y) => Y.textContent = Mt), _i(), Bi(), oo(), yo(), Fs(), De && D(), Bt.workout.classList.contains("active") && !re && Gi();
  }
  const Ga = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', Kn = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', go = {
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
  }, ra = (a) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (go[a] || "") + "</svg>";
  o.querySelectorAll("[data-icon]").forEach((a) => {
    a.innerHTML = ra(a.dataset.icon);
  });
  let Ye = null, Ve = null;
  function Ir(a) {
    return a = Math.max(1, Number(a) || 0), a >= 3600 && a % 3600 === 0 ? { value: a / 3600, unit: "hour" } : a >= 60 && a % 60 === 0 ? { value: a / 60, unit: "min" } : { value: a, unit: "sec" };
  }
  function fn(a = !1) {
    const s = o.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    s && (s.focus({ preventScroll: !0 }), a && s.select());
  }
  function vo(a, s, c = {}) {
    const v = a.kind === "rest", C = a.kind === "video", R = C ? a.useVideoLength !== !1 : v ? a.useGlobalTiming === !0 : a.useGlobalTiming !== !1, t = Number(v ? B.value : W.value), e = Ir(C ? a.useVideoLength === !1 ? a.duration : Uo({ ...a, useVideoLength: !0 }) : R ? t : a.duration || t), n = C && (Number(a.videoDuration) > 0 || Number(a.end) > 0), r = C ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + Ut(a.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Ut(a.autoName ? "" : a.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([I, U]) => '<option value="' + I + '"' + ((a.videoRounds || "every") === I ? " selected" : "") + ">" + U + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Ut(a.name) + '" placeholder="' + (v ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + Ut(a.group) + '" placeholder="' + (v ? "Rest" : "e.g. Glutes + legs") + '"></label>', d = C ? "Play the whole " + (Number(a.start) > 0 || Number(a.end) > 0 ? "clip" : "video") + (n ? " · " + _n(Uo({ ...a, useVideoLength: !0 })) : "") : "Use global timing · " + ea(t), u = document.createElement("div");
    u.className = "moveRow editing" + (c.sheet ? " inSheet" : ""), u.dataset.index = s, u.dataset.id = a.id;
    const p = c.isNew ?? (Ve == null ? void 0 : Ve.item) === a, g = c.sheet ? '<div class="moveEditActions sheetActions">' + (p ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (a.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + Ut(a.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (p ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    u.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (C ? " videoFields" : "") + '">' + r + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (R ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + Ut(d) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + e.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((I) => '<option value="' + I + '"' + (I === e.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[I] + "</option>").join("") + "</select></div></div>" + g + "</div>";
    const m = (I) => u.querySelector("[data-f=" + I + "]"), M = () => {
      const I = m("global").checked;
      m("dur").disabled = I, m("unit").disabled = I, u.querySelector(".creatorDurationRow").classList.toggle("isDisabled", I);
    };
    m("global").addEventListener("change", M), M();
    const T = () => {
      var I;
      if (c.sheet) {
        (I = c.onCancel) == null || I.call(c);
        return;
      }
      p && Zo(), Ye = null, ke();
    }, A = () => {
      var z;
      if (C) {
        H();
        return;
      }
      const I = m("name").value.trim();
      if (!I) {
        m("name").focus();
        return;
      }
      a.name = I, a.group = m("group").value.trim() || (v ? "Rest" : "Movement");
      const U = m("global").checked;
      if (a.useGlobalTiming = U, U || (a.duration = Math.max(v ? 5 : 1, Dn(m("dur").value, m("unit").value))), c.sheet) {
        (z = c.onSaved) == null || z.call(c);
        return;
      }
      p && (Ve = null), Ye = null, ke(), ue(p ? v ? "Rest added" : "Movement added" : "Movement updated");
    }, H = () => {
      var N;
      const I = m("url").value.trim(), U = Nr(I);
      if (!U) {
        m("urlError").hidden = !1, m("url").classList.add("invalid"), m("url").focus();
        return;
      }
      const z = U.id !== a.videoId;
      a.url = I, a.videoId = U.id, a.start = U.start, a.end = U.end, z && (a.videoDuration = null, a.videoError = null);
      const G = m("name").value.trim();
      a.autoName = !G, a.name = G || (z ? "" : a.name) || a.videoTitle || "YouTube video", a.group = "Video", a.videoRounds = m("rounds").value, a.useVideoLength = m("global").checked, a.useVideoLength || (a.duration = Math.max(5, Dn(m("dur").value, m("unit").value))), c.sheet ? (N = c.onSaved) == null || N.call(c) : (p && (Ve = null), Ye = null, ke(), ue(p ? "Video added" : "Video updated")), (z || !a.videoDuration || a.autoName && !a.videoTitle) && Hl(a);
    };
    if (C && m("url").addEventListener("input", () => {
      m("urlError").hidden = !0, m("url").classList.remove("invalid");
    }), u.querySelector("[data-a=cancel]").addEventListener("click", T), u.querySelector("[data-a=save]").addEventListener("click", A), c.sheet && !p) {
      u.querySelector("[data-a=hide]").addEventListener("click", () => {
        var U;
        return (U = c.onHide) == null ? void 0 : U.call(c);
      });
      const I = u.querySelector("[data-a=remove]");
      Po(I, I.querySelector(".removeFill"), 1200, () => {
        var U;
        return (U = c.onRemove) == null ? void 0 : U.call(c);
      });
    }
    return u.addEventListener("keydown", (I) => {
      I.key === "Escape" && (I.preventDefault(), I.stopPropagation(), T()), I.key === "Enter" && I.target.matches("input") && (I.preventDefault(), A());
    }), u;
  }
  function $n(a, s) {
    const c = i(s);
    c.innerHTML = "", a.forEach((v, C) => {
      if (v === Ye && !to()) {
        c.appendChild(vo(v, C));
        return;
      }
      const R = document.createElement("div");
      R.className = "moveRow" + (v.hidden ? " hidden" : "") + (v.kind === "rest" ? " restItem" : "") + (v.kind === "video" ? " videoItem" : "") + (ss(v) ? " noMeta" : ""), R.dataset.index = C, R.dataset.id = v.id;
      const t = v.kind === "rest" ? v.useGlobalTiming === !0 ? "Global timing" : ea(v.duration) : v.useGlobalTiming === !1 ? ea(v.duration) : "Global timing", e = v.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", n = v.kind === "video" ? v.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (v.useVideoLength === !1 ? "stops after " + ea(v.duration) : Number(v.videoDuration) > 0 || Number(v.end) > 0 ? _n(Uo(v)) : "plays to the end") + (v.videoRounds === "first" ? " · first round only" : v.videoRounds === "last" ? " · last round only" : "") : v.group + " · " + t, r = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + Ut(v.name) + '. Drag, or use the up and down arrow keys">' + Ga + "</button>", d = '<div class="moveText"><div class="moveItemName">' + Ut(v.name) + e + '</div><div class="moveMeta">' + Ut(n) + "</div></div>", u = (m) => m.addEventListener("keydown", (M) => {
        var H, I;
        if (M.key !== "ArrowUp" && M.key !== "ArrowDown") return;
        M.preventDefault();
        const T = a.indexOf(v), A = T + (M.key === "ArrowUp" ? -1 : 1);
        A < 0 || A >= a.length || (a.splice(T, 1), a.splice(A, 0, v), ke(), (I = (H = i(s).children[A]) == null ? void 0 : H.querySelector(".dragHandle")) == null || I.focus());
      });
      if (to()) {
        R.classList.add("phoneRow"), R.tabIndex = 0, R.setAttribute("role", "button"), R.setAttribute("aria-label", "Edit " + (v.name || "step")), R.innerHTML = r + d + '<span class="rowChevron" aria-hidden="true">›</span>';
        const m = R.querySelector(".dragHandle");
        m.addEventListener("pointerdown", (M) => Bn(M, R, c, a)), u(m), R.addEventListener("click", (M) => {
          M.target.closest(".dragHandle") || Jo(v, a);
        }), R.addEventListener("keydown", (M) => {
          M.key === "Enter" && M.target === R && (M.preventDefault(), Jo(v, a));
        }), c.appendChild(R);
        return;
      }
      R.innerHTML = r + d + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + Ut(v.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (v.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + Ut(v.name) + '"><span class="removeFill"></span><span class="removeLabel">' + Kn + "</span></button></div>", R.querySelector(".editBtn").addEventListener("click", () => {
        Zo(), Ye = v, ke(), fn();
      }), R.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        v.hidden = !v.hidden, ke();
      });
      const p = R.querySelector(".removeBtn");
      Po(p, p.querySelector(".removeFill"), 1200, () => {
        const m = a.indexOf(v);
        m < 0 || (a.splice(m, 1), ke(), ue("Removed " + v.name, { label: "Undo", run: () => {
          a.splice(Math.min(m, a.length), 0, v), ke();
        } }));
      });
      const g = R.querySelector(".dragHandle");
      g.addEventListener("pointerdown", (m) => Bn(m, R, c, a)), u(g), c.appendChild(R);
    });
  }
  const Se = () => {
    var a;
    return (a = window.matchMedia) == null ? void 0 : a.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, bo = (a) => {
    var s;
    try {
      (s = navigator.vibrate) == null || s.call(navigator, a);
    } catch {
    }
  };
  function Bn(a, s, c, v) {
    if (a.button !== void 0 && a.button !== 0) return;
    a.preventDefault();
    const C = a.currentTarget, R = a.pointerId, t = !Se();
    try {
      C.setPointerCapture(R);
    } catch {
    }
    const e = s.closest(".exerciseScroller") || wo(s), n = c.style.position;
    c.style.position = "relative";
    const r = [...c.children].filter((te) => te.classList.contains("moveRow")), d = r.indexOf(s), u = parseFloat(getComputedStyle(c).rowGap) || 8, p = s.offsetHeight, g = p + u, m = r.map((te) => te.offsetTop), M = r.map((te) => te.offsetHeight), T = () => c.getBoundingClientRect().top, A = c.getBoundingClientRect().width, H = a.clientY - (T() + m[d]), I = a.clientX;
    let U = a.clientY, z = a.clientX, G = T() + m[d], N = 0, ct = 0, $ = 0, Mt = 1, ne = 0, Y = d, yt = !1, Et = 0, Gt = !1, Be = !1, wa = m[d];
    c.classList.add("reordering"), s.classList.add("dragging"), s.style.transition = "none", bo(8);
    const As = () => {
      const te = U - H + p / 2 - T();
      let ce = 0;
      return r.forEach((Ne, an) => {
        an !== d && te > m[an] + M[an] / 2 && ce++;
      }), ce;
    }, Es = () => {
      r.forEach((te, ce) => {
        if (ce === d) return;
        const Ne = d < Y && ce > d && ce <= Y ? -g : d > Y && ce >= Y && ce < d ? g : 0;
        te.style.transform = Ne ? "translateY(" + Ne + "px)" : "";
      });
    }, _s = () => {
      const te = c.getBoundingClientRect(), ce = Math.abs(z - I) > Math.max(80, A * 0.3) || z < te.left - 24 || z > te.right + 24;
      ce !== yt && (yt = ce, s.classList.toggle("willReturn", ce), bo(ce ? 10 : 4));
      const Ne = yt ? d : As();
      Ne !== Y && (Y = Ne, Es(), yt || bo(4));
    }, fo = () => {
      if (Y === d) return m[d];
      const te = r.filter((Ne, an) => an !== d);
      let ce = m[0];
      for (let Ne = 0; Ne < Y; Ne++) ce += te[Ne].offsetHeight + u;
      return ce;
    }, ho = () => {
      const te = t ? Math.min(Math.abs(N) / 40, 1) : 0, ce = t && !Gt ? Math.max(-3, Math.min(3, $ * 0.6)) : 0;
      s.style.transform = "translate(" + ct.toFixed(2) + "px," + (G - (T() + m[d])).toFixed(2) + "px) rotate(" + ce.toFixed(2) + "deg) scale(" + (Mt * (1 - 0.04 * te)).toFixed(4) + "," + (Mt * (1 + 0.06 * te)).toFixed(4) + ")";
    }, $t = () => {
      Et = requestAnimationFrame($t);
      const te = z - I, ce = Gt ? T() + wa : U - H, Ne = Gt ? 0 : yt ? te * 0.9 : Math.max(-22, Math.min(22, te * 0.22)), an = Gt ? 1 : yt ? 0.97 : 1.035;
      if (!t) {
        G = ce, ct = Gt ? 0 : Ne, Mt = 1, ho(), Gt && qe();
        return;
      }
      const du = Gt ? 0.24 : 0.2, cu = Gt ? 0.62 : 0.68;
      N = (N + (ce - G) * du) * cu, G += N, $ = ($ + (Ne - ct) * 0.16) * 0.7, ct += $, ne = (ne + (an - Mt) * 0.22) * 0.6, Mt += ne, ho(), Gt && Math.abs(N) < 0.15 && Math.abs(ce - G) < 0.5 && Math.abs(ct) < 0.5 && Math.abs(Mt - 1) < 3e-3 && qe();
    }, Me = setInterval(() => {
      if (!e || Gt) return;
      const te = e.getBoundingClientRect(), ce = 56, Ne = U < te.top + ce ? -10 : U > te.bottom - ce ? 10 : 0;
      Ne && (e.scrollTop += Ne, _s());
    }, 30);
    function qe() {
      if (Be) return;
      Be = !0, cancelAnimationFrame(Et);
      const te = Y !== d, ce = s.dataset.id;
      if (c.classList.remove("reordering"), r.forEach((an) => {
        an.style.transition = "none", an.style.transform = "";
      }), s.classList.remove("dragging", "willReturn"), c.style.position = n, te) {
        const [an] = v.splice(d, 1);
        v.splice(Y, 0, an);
      }
      ke();
      const Ne = ce && c.querySelector('.moveRow[data-id="' + ce + '"]');
      Ne && t && Ne.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), te && ue("Order saved");
    }
    const sa = (te) => {
      if (te.pointerId === R) {
        if (te.pointerType === "mouse" && te.buttons === 0) {
          Sn();
          return;
        }
        U = te.clientY, z = te.clientX, _s();
      }
    }, en = (te) => {
      te.pointerId === R && Sn();
    };
    function Sn() {
      Gt || (window.removeEventListener("pointermove", sa, !0), window.removeEventListener("pointerup", en, !0), window.removeEventListener("pointercancel", en, !0), C.removeEventListener("lostpointercapture", Sn), clearInterval(Me), yt && Y !== d && (Y = d, Es()), wa = fo(), Gt = !0, bo(6), setTimeout(qe, 800));
    }
    window.addEventListener("pointermove", sa, !0), window.addEventListener("pointerup", en, !0), window.addEventListener("pointercancel", en, !0), C.addEventListener("lostpointercapture", Sn), Et = requestAnimationFrame($t), ho();
  }
  function Bi() {
    var C, R, t, e;
    const a = Xt[oe], s = (C = i("warmupList")) == null ? void 0 : C.closest("section"), c = (R = i("cooldownList")) == null ? void 0 : R.closest("section"), v = (e = (t = i("strengthList")) == null ? void 0 : t.closest("section")) == null ? void 0 : e.querySelector(".sectionTitle");
    a != null && a.customSequence ? (s && (s.hidden = !a.includeWarmup), c && (c.hidden = !a.includeCooldown), v && (v.textContent = "Move sequence")) : (s && (s.hidden = !!(a != null && a.warmupOff)), c && (c.hidden = !1), v && (v.textContent = "Kettlebell work")), $n(Ie, "warmupList"), $n(Wt, "strengthList"), $n(xa, "cooldownList");
  }
  function Zo() {
    if (!Ve) return;
    const { item: a, arr: s } = Ve;
    Ve = null;
    const c = s.indexOf(a);
    c >= 0 && s.splice(c, 1), Ye === a && (Ye = null);
  }
  function Ko(a) {
    return a.id === "warmupList" ? { arr: Ie, kind: "warmup", group: "Warm-up" } : a.id === "cooldownList" ? { arr: xa, kind: "cooldown", group: "Cooldown" } : { arr: Wt, kind: "work", group: "" };
  }
  function Hr(a, s) {
    const c = Ko(s), v = Date.now().toString(36);
    return a === "video" ? { id: "video-" + v, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : a === "rest" ? { id: "rest-" + v, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(B.value) } : { id: "movement-" + v, name: "", group: c.group, kind: c.kind, hidden: !1, useGlobalTiming: !0, duration: Number(W.value) };
  }
  const Fr = "cubic-bezier(.34,1.46,.64,1)";
  function Xn(a, s) {
    if (Se() || !a) {
      s();
      return;
    }
    const c = (R) => {
      var t;
      return ((t = R.dataset) == null ? void 0 : t.id) || R;
    }, v = () => [...a.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], C = new Map(v().map((R) => [c(R), R.getBoundingClientRect().top]));
    s(), v().forEach((R) => {
      const t = C.get(c(R));
      if (t === void 0) return;
      const e = t - R.getBoundingClientRect().top;
      Math.abs(e) < 0.5 || R.animate([{ transform: "translateY(" + e + "px)" }, { transform: "none" }], { duration: 440, easing: Fr });
    });
  }
  function Jn(a, s) {
    if (!a || Se()) return;
    const c = a.offsetHeight, v = Math.max(0, c - (s || 0));
    a.animate([{ clipPath: "inset(0 0 " + v + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: Fr });
  }
  function Ri(a, s, c, v) {
    const { arr: C } = Ko(s), R = Hr(a, s);
    C.splice(Math.max(0, Math.min(c, C.length)), 0, R), Ve = { item: R, arr: C }, Ye = R, Xn(s.closest(".exerciseScroller,.createStepSlot") || s, () => ke());
    const t = s.querySelector(".moveRow.editing");
    return Jn(t, v), fn(a === "rest"), t;
  }
  function wo(a) {
    for (let s = a; s && s.nodeType === 1; s = s.parentElement) {
      const c = getComputedStyle(s).overflowY;
      if (/(auto|scroll)/.test(c) && s.scrollHeight > s.clientHeight) return s;
    }
    return null;
  }
  const Ze = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function Ua(a, s) {
    const c = document.createElement("div");
    return c.className = "addGhost" + (a === "movement" ? "" : " rest"), c.innerHTML = '<span class="addGhostGrip">' + Ga + '</span><span class="addGhostText"><strong>' + Ut(s[0]) + "</strong><small>" + Ut(s[1]) + "</small></span>", i("workoutModal").appendChild(c), c;
  }
  function ie(a) {
    a.classList.add("leaving"), setTimeout(() => a.remove(), 180);
  }
  function $o(a, s, c, v) {
    (Ye || Ve) && (Zo(), Ye = null, ke());
    const C = a.getBoundingClientRect(), R = Ua(s, Ze[s]);
    R.setAttribute("aria-hidden", "true"), R.style.width = C.width + "px", R.style.height = C.height + "px", R.style.transform = "translate(" + C.left + "px," + C.top + "px)", a.classList.add("lifting");
    const t = wo(a);
    return Qn({
      ghost: R,
      origin: C,
      sx: c,
      sy: v,
      scroller: t,
      column: a.closest(".exerciseScroller,.createFlow") || t,
      home: () => a.getBoundingClientRect(),
      onDrop: (e, n, r) => {
        ie(R), a.classList.remove("lifting"), Ri(s, e, n, r);
      },
      onReturn: () => {
        ie(R), a.classList.remove("lifting");
      }
    });
  }
  function Qn({ ghost: a, origin: s, sx: c, sy: v, scroller: C, column: R, home: t, onDrop: e, onReturn: n, rowLook: r = !1 }) {
    var ho;
    const d = !Se(), u = ((ho = o.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : ho.offsetHeight) || 80, p = c - s.left, g = v - s.top, m = 44;
    let M = c, T = v, A = s.left, H = s.top, I = 0, U = 0, z = !d, G = null, N = null, ct = -1, $ = 0, Mt = null;
    const ne = () => ["warmupList", "strengthList", "cooldownList"].map(($t) => i($t)).filter(($t) => $t && $t.getClientRects().length && !$t.closest("[hidden]")), Y = ($t) => {
      if ($t === G) return;
      G = $t, a.classList.toggle("overList", !!$t || r);
      const Me = $t ? $t.getBoundingClientRect().width : s.width;
      a.style.width = Me + "px", a.style.height = ($t ? u : s.height) + "px";
    }, yt = ($t) => {
      $t.classList.add("leaving"), $t.style.height = "0px", $t.style.marginTop = "-8px", setTimeout(() => $t.remove(), d ? 320 : 0);
    }, Et = ($t, Me, qe) => {
      if (N && N.parentNode === $t && ct === qe || (N && (yt(N), N = null, ct = -1), !$t)) return;
      const sa = document.createElement("div");
      sa.className = "dropSlot", $t.insertBefore(sa, Me), N = sa, ct = qe, sa.getBoundingClientRect(), sa.style.height = u + "px", sa.style.marginTop = "0px";
    }, Gt = () => {
      let $t = null, Me = 1 / 0;
      for (const Sn of ne()) {
        const te = Sn.getBoundingClientRect();
        if (M < te.left - 48 || M > te.right + 48) continue;
        const ce = te.top - 28, Ne = te.bottom + 28, an = T < ce ? ce - T : T > Ne ? T - Ne : 0;
        an < Me && (Me = an, $t = Sn);
      }
      const qe = R == null ? void 0 : R.getBoundingClientRect(), en = qe && M >= qe.left && M <= qe.right && T >= qe.top && T <= qe.bottom || Me === 0 ? $t : null;
      if (en) {
        const Sn = [...en.children].filter((ce) => ce.classList.contains("moveRow"));
        let te = Sn.findIndex((ce) => {
          const Ne = ce.getBoundingClientRect();
          return T < Ne.top + Ne.height / 2;
        });
        te < 0 && (te = Sn.length), Et(en, Sn[te] || null, te);
      } else Et(null);
      Y(en);
    }, Be = () => {
      if (Mt) return Mt.aim();
      if (G) {
        const $t = G.getBoundingClientRect();
        let Me = T - u / 2;
        return N && (Me = Me * 0.6 + N.getBoundingClientRect().top * 0.4), { x: $t.left, y: Me };
      }
      return { x: M - p, y: T - g };
    }, wa = ($t, Me, qe, sa) => {
      a.style.transform = "translate(" + A + "px," + H + "px) rotate(" + $t + "deg) rotate(" + Me + "rad) scale(" + qe + "," + sa + ") rotate(" + -Me + "rad)";
    }, As = () => {
      if ($ = requestAnimationFrame(As), !z) {
        const te = M - c, ce = T - v, Ne = Math.min(Math.hypot(te, ce) / m, 1);
        A = s.left + te * 0.35, H = s.top + ce * 0.35, wa(0, Math.atan2(ce, te), 1 + 0.155 * Ne, 1 - 0.1 * Ne);
        return;
      }
      const $t = Be();
      if (!d) {
        A = $t.x, H = $t.y, wa(0, 0, 1, 1), Mt && (cancelAnimationFrame($), Mt.done());
        return;
      }
      const Me = Mt ? Mt.k : 0.17, qe = Mt ? Mt.d : 0.7;
      I = (I + ($t.x - A) * Me) * qe, U = (U + ($t.y - H) * Me) * qe, A += I, H += U;
      const sa = Math.hypot(I, U), en = Math.min(sa / 48, 1), Sn = G || Mt ? 0 : Math.max(-5, Math.min(5, I * 0.32));
      wa(Sn, Math.atan2(U, I), 1 + 0.1 * en, 1 - 0.063 * en), Mt && sa < 0.15 && Math.hypot($t.x - A, $t.y - H) < 0.6 && (cancelAnimationFrame($), Mt.done());
    }, Es = setInterval(() => {
      if (!C || Mt) return;
      const $t = C.getBoundingClientRect(), Me = 64, qe = T < $t.top + Me ? -($t.top + Me - T) / 4 : T > $t.bottom - Me ? (T - ($t.bottom - Me)) / 4 : 0;
      qe && (C.scrollTop += Math.max(-18, Math.min(18, qe)), Gt());
    }, 30);
    $ = requestAnimationFrame(As);
    let _s = !1;
    const fo = ($t, Me) => {
      if (_s) return;
      _s = !0, cancelAnimationFrame($);
      const qe = N ? N.offsetHeight : u;
      !$t && N && (N.remove(), N = null), $t ? e($t, Me, qe) : n();
    };
    return {
      move($t, Me) {
        M = $t, T = Me, !z && Math.hypot(M - c, T - v) > m && (z = !0, I = (M - c) * 0.085, U = (T - v) * 0.085), z && Gt();
      },
      drop($t) {
        clearInterval(Es);
        const Me = G, qe = ct;
        if (!$t && Me && N) {
          const sa = N;
          Mt = { k: 0.24, d: 0.62, aim: () => {
            const en = sa.getBoundingClientRect();
            return { x: en.left, y: en.top };
          }, done: () => fo(Me, qe) }, setTimeout(() => fo(Me, qe), 650), d || (cancelAnimationFrame($), fo(Me, qe));
          return;
        }
        Et(null), Y(null), Mt = { k: 0.2, d: 0.66, aim: () => {
          const sa = t();
          return { x: sa.left, y: sa.top };
        }, done: () => fo(null) }, setTimeout(() => fo(null), 650), d || (cancelAnimationFrame($), fo(null));
      }
    };
  }
  function Xo(a, s) {
    let c = !1;
    a.addEventListener("click", (v) => {
      if (c) {
        c = !1, v.preventDefault();
        return;
      }
      if (to()) {
        pr(s);
        return;
      }
      const C = i("strengthList"), R = Ri(s, C, Ko(C).arr.length, 0);
      R == null || R.scrollIntoView({ block: "nearest", behavior: Se() ? "auto" : "smooth" });
    }), a.addEventListener("pointerdown", (v) => {
      if (v.button !== void 0 && v.button !== 0) return;
      const C = v.pointerId, R = v.clientX, t = v.clientY;
      let e = null, n = !1;
      try {
        a.setPointerCapture(C);
      } catch {
      }
      const r = (T) => {
        if (T.pointerId === C) {
          if (T.pointerType === "mouse" && T.buttons === 0) {
            M(!1);
            return;
          }
          if (!e) {
            if (Math.hypot(T.clientX - R, T.clientY - t) < 6) return;
            e = $o(a, s, R, t);
          }
          e.move(T.clientX, T.clientY);
        }
      }, d = (T) => {
        T.pointerId === C && M(!1);
      }, u = (T) => {
        T.pointerId === C && M(!0);
      }, p = () => M(!1), g = () => M(!0), m = (T) => {
        T.key === "Escape" && e && (T.preventDefault(), T.stopPropagation(), M(!0));
      };
      function M(T) {
        if (!n && (n = !0, window.removeEventListener("pointermove", r, !0), window.removeEventListener("pointerup", d, !0), window.removeEventListener("pointercancel", u, !0), window.removeEventListener("keydown", m, !0), window.removeEventListener("blur", g), a.removeEventListener("lostpointercapture", p), e)) {
          const A = e;
          e = null, c = !0, setTimeout(() => {
            c = !1;
          }, 0), A.drop(T);
        }
      }
      window.addEventListener("pointermove", r, !0), window.addEventListener("pointerup", d, !0), window.addEventListener("pointercancel", u, !0), window.addEventListener("keydown", m, !0), window.addEventListener("blur", g), a.addEventListener("lostpointercapture", p);
    });
  }
  const ya = (Ts = window.matchMedia) == null ? void 0 : Ts.call(window, "(max-width: 620px)");
  function to() {
    var a;
    return !!((a = window.matchMedia) != null && a.call(window, "(max-width: 620px)").matches);
  }
  const cr = (a) => a.charAt(0).toUpperCase() + a.slice(1), Ya = (a) => a.kind === "rest" ? "rest" : a.kind === "video" ? "video" : "movement";
  let Rn = null, _e = null;
  function hn(a, s, c, v) {
    Xe(), i("sheetTitle").textContent = a;
    const C = i("sheetBody");
    C.innerHTML = "", C.appendChild(s), Rn = c || null, i("sheet").setAttribute("aria-hidden", "false"), i("sheetScrim").classList.add("open"), i("sheet").classList.add("open"), setTimeout(() => {
      if (!i("sheet").classList.contains("open") || !C.contains(s)) return;
      const R = v ? C.querySelector("input[data-f=url],input[data-f=name]") : C.querySelector("button,input,select");
      R == null || R.focus({ preventScroll: !0 });
    }, Se() ? 0 : 360);
  }
  function Xe() {
    const a = i("sheet");
    if (!a.classList.contains("open")) return;
    a.classList.remove("open"), i("sheetScrim").classList.remove("open"), a.setAttribute("aria-hidden", "true"), a.contains(o.activeElement) && o.activeElement.blur();
    const s = Rn;
    Rn = null, s == null || s(), setTimeout(Ke, 0);
  }
  i("sheetScrim").addEventListener("click", Xe), i("sheet").addEventListener("keydown", (a) => {
    a.key === "Escape" && (a.preventDefault(), Xe());
  });
  function Jo(a, s) {
    const c = vo(a, s.indexOf(a), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        Xe(), ke(), ue(cr(Ya(a)) + " updated");
      },
      onCancel: Xe,
      onHide() {
        a.hidden = !a.hidden, Xe(), ke(), ue((a.hidden ? "Hidden: " : "Showing: ") + a.name);
      },
      onRemove() {
        Xe();
        const v = s.indexOf(a);
        v < 0 || (s.splice(v, 1), ke(), ue("Removed " + a.name, { label: "Undo", run: () => {
          s.splice(Math.min(v, s.length), 0, a), ke();
        } }));
      }
    });
    hn("Edit " + Ya(a), c, null, !1);
  }
  function eo() {
    const a = document.createElement("div");
    a.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([s, c, v, C]) => {
      const R = document.createElement("button");
      R.type = "button", R.className = "sheetChoice", R.innerHTML = '<span class="timeIcon" aria-hidden="true">' + ra(c) + "</span><span><strong>" + v + "</strong><small>" + C + "</small></span>", R.addEventListener("click", () => pr(s)), a.appendChild(R);
    }), hn("Add to the move", a, null, !1);
  }
  function pr(a) {
    _e && Pn();
    const s = Hr(a, i("strengthList")), c = vo(s, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        Xe(), Os(s, a);
      },
      onCancel: Xe
    });
    hn("New " + Ya(s), c, null, !0);
  }
  const Je = i("workoutModal").querySelector(".modalStatic"), ao = { parent: Je.parentNode, next: Je.nextSibling };
  function wn() {
    const a = document.createElement("div");
    a.className = "sheetSetup", a.appendChild(Je);
    const s = document.createElement("button");
    s.type = "button", s.className = "primary sheetDone", s.textContent = "Done", s.addEventListener("click", Xe), a.appendChild(s), hn("Setup", a, () => {
      ao.parent.insertBefore(Je, ao.next), xo();
    }, !1);
  }
  function xo() {
    var s, c;
    const a = i("setupSummaryName");
    a && (a.textContent = (((s = i("workoutNameInput")) == null ? void 0 : s.value) || "").trim() || ((c = Xt[oe]) == null ? void 0 : c.name) || "Move", i("setupSummaryMeta").textContent = pn.textContent);
  }
  i("setupSummary").addEventListener("click", wn), i("addFab").addEventListener("click", eo);
  function no() {
    const a = i("strengthList");
    return wo(a) || a.closest(".exerciseScroller");
  }
  function Pi() {
    const a = i("strengthList").getBoundingClientRect(), s = (no() || i("strengthList")).getBoundingClientRect(), c = (_e == null ? void 0 : _e.ghost.offsetHeight) || 64;
    return { left: a.left, top: Math.max(s.top + 12, Math.min(s.bottom - c - 96, s.top + s.height * 0.55 - c / 2)), width: a.width, height: c };
  }
  function Os(a, s) {
    var e;
    const c = Ua(s, [a.name || Ze[s][0], "Drag into place"]);
    c.classList.add("overList", "hovering"), c.setAttribute("aria-label", (a.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const v = document.createElement("span");
    v.className = "addGhostActions", v.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + Ut(a.name) + '">✕</button>', c.appendChild(v), _e = { item: a, type: s, ghost: c };
    const C = ((e = o.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : e.offsetHeight) || 64;
    c.style.width = i("strengthList").getBoundingClientRect().width + "px", c.style.height = C + "px";
    const R = Pi(), t = oa.querySelector(".modal").getBoundingClientRect().bottom;
    c.style.transform = "translate(" + R.left + "px," + t + "px)", c.getBoundingClientRect(), Se() || (c.classList.add("rising"), setTimeout(() => c.classList.remove("rising"), 650)), c.style.transform = "translate(" + R.left + "px," + R.top + "px)", v.querySelector("[data-a=end]").addEventListener("click", Pn), v.querySelector("[data-a=discard]").addEventListener("click", Or), c.addEventListener("pointerdown", Ni);
  }
  function Ni(a) {
    if (!_e || a.target.closest("button") || a.button !== void 0 && a.button !== 0) return;
    a.preventDefault();
    const { item: s, ghost: c } = _e, v = a.pointerId;
    try {
      c.setPointerCapture(v);
    } catch {
    }
    c.classList.remove("hovering", "rising"), c.classList.add("held");
    const C = c.getBoundingClientRect(), R = no(), t = Qn({
      ghost: c,
      origin: { left: C.left, top: C.top, width: C.width, height: C.height },
      sx: a.clientX,
      sy: a.clientY,
      scroller: R,
      column: i("strengthList").closest(".exerciseScroller,.createFlow") || R,
      rowLook: !0,
      home: Pi,
      onDrop: (M, T, A) => {
        _e = null, ie(c), ur(s, M, T, A);
      },
      onReturn: () => {
        c.classList.remove("held"), c.classList.add("hovering");
      }
    });
    let e = !1;
    const n = (M) => {
      if (M.pointerId === v) {
        if (M.pointerType === "mouse" && M.buttons === 0) {
          m(!1);
          return;
        }
        t.move(M.clientX, M.clientY);
      }
    }, r = (M) => {
      M.pointerId === v && m(!1);
    }, d = (M) => {
      M.pointerId === v && m(!0);
    }, u = () => m(!1), p = () => m(!0), g = (M) => {
      M.key === "Escape" && (M.preventDefault(), m(!0));
    };
    function m(M) {
      e || (e = !0, window.removeEventListener("pointermove", n, !0), window.removeEventListener("pointerup", r, !0), window.removeEventListener("pointercancel", d, !0), window.removeEventListener("keydown", g, !0), window.removeEventListener("blur", p), c.removeEventListener("lostpointercapture", u), t.drop(M));
    }
    window.addEventListener("pointermove", n, !0), window.addEventListener("pointerup", r, !0), window.addEventListener("pointercancel", d, !0), window.addEventListener("keydown", g, !0), window.addEventListener("blur", p), c.addEventListener("lostpointercapture", u);
  }
  function ur(a, s, c, v) {
    const C = Ko(s);
    a.kind !== "rest" && a.kind !== "video" && (a.kind = C.kind, C.group && (!a.group || a.group === "Movement") && (a.group = C.group)), C.arr.splice(Math.max(0, Math.min(c, C.arr.length)), 0, a), Xn(s.closest(".exerciseScroller,.createStepSlot") || s, () => ke()), Jn(s.querySelector('.moveRow[data-id="' + a.id + '"]'), v), ue(cr(Ya(a)) + " added");
  }
  function Pn() {
    var v;
    if (!_e) return;
    const { item: a, ghost: s } = _e;
    _e = null, ie(s);
    const c = i("strengthList");
    ur(a, c, Ko(c).arr.length, 0), (v = c.querySelector('.moveRow[data-id="' + a.id + '"]')) == null || v.scrollIntoView({ block: "nearest", behavior: Se() ? "auto" : "smooth" });
  }
  function Or() {
    if (!_e) return;
    const a = _e.ghost;
    _e = null, ie(a), ue("Discarded");
  }
  function Qo() {
    _e && (_e.ghost.remove(), _e = null);
  }
  window.addEventListener("resize", () => {
    if (_e != null && _e.ghost.classList.contains("hovering")) {
      const a = Pi();
      _e.ghost.style.width = a.width + "px", _e.ghost.style.transform = "translate(" + a.left + "px," + a.top + "px)";
    }
  }), (Ji = ya == null ? void 0 : ya.addEventListener) == null || Ji.call(ya, "change", () => {
    Xe(), _e && !to() && Pn(), Bi();
  });
  {
    const a = i("workoutModal").querySelector(".modal");
    a.addEventListener("scroll", () => {
      (a.scrollTop || a.scrollLeft) && (a.scrollTop = 0, a.scrollLeft = 0);
    });
  }
  function Ke() {
    const a = i("workoutModal"), s = window.visualViewport;
    if (!a.classList.contains("open") || !to()) {
      fr();
      return;
    }
    const c = s ? s.offsetTop : 0, v = s ? s.offsetLeft : 0, C = s ? s.width : window.innerWidth, R = s ? s.height : window.innerHeight;
    Object.assign(a.style, { right: "auto", bottom: "auto", width: C + "px", height: R + "px", top: c + "px", left: v + "px" });
    const t = a.getBoundingClientRect();
    Math.abs(t.top - c) > 0.5 && (a.style.top = 2 * c - t.top + "px"), Math.abs(t.left - v) > 0.5 && (a.style.left = 2 * v - t.left + "px");
  }
  function fr() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((a) => i("workoutModal").style.removeProperty(a));
  }
  (ad = window.visualViewport) == null || ad.addEventListener("resize", Ke), (nd = window.visualViewport) == null || nd.addEventListener("scroll", Ke), window.addEventListener("resize", Ke), window.addEventListener("scroll", Ke, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(Ke, 250));
  function oo() {
    Wt.length > 0;
    const a = i("addMovementBtn"), s = i("addRestBtn");
    a && (a.innerHTML = Ga + "<span>Add movement</span>"), s && (s.innerHTML = Ga + "<span>Add rest</span>");
    const c = i("addVideoBtn");
    c && (c.innerHTML = Ga + "<span>Add video</span>");
  }
  function yo() {
    const a = i("useGlobalTiming").checked, s = i("addMovementDuration"), c = i("addMovementUnit");
    s.disabled = a, c.disabled = a, s.parentElement.style.opacity = a ? ".38" : "1", i("globalTimingValue").textContent = "Use global timing · " + ea(W.value);
    const v = i("useGlobalRestTiming").checked, C = i("addRestDuration"), R = i("addRestUnit");
    C.disabled = v, R.disabled = v, C.parentElement.style.opacity = v ? ".38" : "1", i("globalRestTimingValue").textContent = "Use global timing · " + ea(B.value);
  }
  let ka = "movement";
  function ti(a) {
    ka = a;
    const s = i("movementFields"), c = i("restFields");
    s.hidden = a !== "movement", c.hidden = a !== "rest", i("movementCreatorHeading").textContent = "Add movement", i("movementCreator").setAttribute("aria-label", "Create movement"), yo();
  }
  function ei() {
    Xt[oe];
    const a = De ? !0 : i("useGlobalTiming").checked, s = a ? Number(W.value) : Dn(
      i("addMovementDuration").value,
      i("addMovementUnit").value
    ), c = De ? !0 : i("useGlobalRestTiming").checked, v = c ? Number(B.value) : Dn(
      i("addRestDuration").value,
      i("addRestUnit").value
    );
    if (ka === "rest") {
      const C = i("addRestTitle").value.trim() || "Rest", R = i("addRestGroup").value.trim() || "Rest";
      Wt.push({
        id: "rest-" + Date.now(),
        name: C,
        group: R,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: c,
        duration: Math.max(5, v || Number(B.value))
      }), ke(), i("movementCreator").hidden = !0, i("addRestTitle").value = "Rest", i("addRestGroup").value = "Rest", ue("Rest added"), De && (at("movements"), D());
    } else {
      const C = i("addMovementInput").value.trim();
      if (!C) return;
      const R = i("addMovementGroup").value.trim() || "Movement";
      Wt.push({
        id: "movement-" + Date.now(),
        name: C,
        group: R,
        kind: "work",
        hidden: !1,
        useGlobalTiming: a,
        duration: Math.max(5, s || Number(W.value))
      }), i("addMovementInput").value = "", i("addMovementGroup").value = "", ke(), i("movementCreator").hidden = !0, ue("Movement added"), De && (at("movements"), D());
    }
    oo();
  }
  let Da = null;
  function ue(a, s) {
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
  const ai = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], qr = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function hr(a) {
    return Math.max(0, Math.min(5, Math.floor(Number(a) / 100 * 6)));
  }
  function Ma(a, s) {
    return ai[hr(s)];
  }
  function Sa(a) {
    return qr[hr(a)];
  }
  function Ce(a) {
    return a.getFullYear() + "-" + String(a.getMonth() + 1).padStart(2, "0") + "-" + String(a.getDate()).padStart(2, "0");
  }
  function Nn() {
    return { morning: Qt().morningTime || "08:00", evening: Qt().eveningTime || "19:00" };
  }
  function Ca(a) {
    const [s, c] = String(a).split(":").map(Number);
    return (s || 0) * 60 + (c || 0);
  }
  function io(a) {
    const s = Nn();
    return a.getHours() * 60 + a.getMinutes() >= Ca(s.evening) ? "evening" : "morning";
  }
  function h(a, s) {
    return Nt.checkins.find((c) => c.date === a && c.slot === s);
  }
  function w(a) {
    return !!(a && a.mood != null && a.energy != null);
  }
  function y() {
    const a = /* @__PURE__ */ new Date(), s = Ce(a), c = io(a), v = Nn(), C = a.getHours() * 60 + a.getMinutes();
    return c === "morning" && C < Ca(v.morning) || w(h(s, c)) ? null : c;
  }
  const L = i("checkinModal"), F = i("checkinTab"), X = i("checkinBadge"), J = { mood: { input: i("moodInput"), fill: i("moodFill") }, energy: { input: i("energyLevelInput"), fill: i("energyLevelFill") } };
  function ft(a) {
    const { input: s, fill: c } = J[a];
    c.style.width = s.value + "%", s.setAttribute("aria-valuetext", Ma(a, s.value));
  }
  Object.keys(J).forEach((a) => J[a].input.addEventListener("input", () => ft(a)));
  let tt = null;
  function gt() {
    const a = Nn(), s = /* @__PURE__ */ new Date(), c = s.getHours() * 60 + s.getMinutes();
    return c < Ca(a.morning) ? "Next check-in at " + a.morning : c < Ca(a.evening) ? "Next check-in at " + a.evening : "Next check-in tomorrow at " + a.morning;
  }
  function vt() {
    const a = Nn(), s = /* @__PURE__ */ new Date(), c = s.getHours() * 60 + s.getMinutes(), v = (C, R) => {
      const [t, e] = C.split(":").map(Number);
      return new Date(s.getFullYear(), s.getMonth(), s.getDate() + (R ? 1 : 0), t, e);
    };
    return c < Ca(a.morning) ? { date: v(a.morning), time: a.morning } : c < Ca(a.evening) ? { date: v(a.evening), time: a.evening } : { date: v(a.morning, !0), time: a.morning };
  }
  let St = null, Vt = null;
  function Pt() {
    if (y()) {
      jt(), fe();
      return;
    }
    const a = vt(), s = Math.max(0, Math.round((a.date - Date.now()) / 1e3)), c = Math.floor(s / 3600), v = Math.floor(s % 3600 / 60), C = s % 60;
    i("peekCountdown").textContent = c + ":" + String(v).padStart(2, "0") + ":" + String(C).padStart(2, "0"), i("peekAt").textContent = "Available at " + a.time;
  }
  function Tt() {
    Pt(), F.classList.add("peek"), clearInterval(Vt), Vt = setInterval(Pt, 1e3), clearTimeout(St), St = setTimeout(jt, 6e3);
  }
  function jt() {
    F.classList.remove("peek"), clearInterval(Vt), clearTimeout(St);
  }
  function It() {
    const a = y();
    if (!a) {
      F.classList.contains("peek") ? jt() : Tt();
      return;
    }
    tt = { date: Ce(/* @__PURE__ */ new Date()), slot: a };
    const c = h(tt.date, a), v = Nt.checkins.find((C) => w(C));
    Object.keys(J).forEach((C) => {
      J[C].input.value = (c == null ? void 0 : c[C]) ?? (v == null ? void 0 : v[C]) ?? 50, ft(C);
    }), i("checkinTitle").textContent = a === "morning" ? "Morning check-in" : "Evening check-in", L.classList.add("open"), L.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => J.mood.input.focus());
  }
  function Ct() {
    L.classList.remove("open"), L.setAttribute("aria-hidden", "true"), tt && (Yt = tt.date + "-" + tt.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", Yt);
    } catch {
    }
    tt = null, fe();
  }
  function Jt() {
    if (!tt) return;
    if (w(h(tt.date, tt.slot))) {
      Ct();
      return;
    }
    const { date: a, slot: s } = tt;
    let c = h(a, s);
    c || (c = { date: a, slot: s }, Nt.checkins.unshift(c), Nt.checkins = Nt.checkins.slice(0, 2e3)), c.mood = Number(J.mood.input.value), c.energy = Number(J.energy.input.value), c.scale = 100, c.at = (/* @__PURE__ */ new Date()).toISOString(), ja(), l.fire("checkin", { slot: s, mood: c.mood, energy: c.energy, mood_label: Ma("mood", c.mood), energy_label: Ma("energy", c.energy) }), ue((s === "morning" ? "Morning" : "Evening") + " check-in saved"), Ct(), Pe(), He(), Fo(), Vn();
  }
  let Yt = "";
  try {
    Yt = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function fe() {
    const a = y();
    X.hidden = !a, F.hidden = !a, a || jt(), F.classList.toggle("due", !!a), F.setAttribute("aria-label", a ? (a === "morning" ? "Morning" : "Evening") + " check-in is due" : gt()), F.title = a ? "Check in now" : gt();
  }
  function _t() {
    fe();
    const a = y();
    !a || L.classList.contains("open") || Qt().checkinAutoOpen !== !1 && (i("app").classList.contains("house") || !Bt.home.classList.contains("active") || oa.classList.contains("open") || Yt !== Ce(/* @__PURE__ */ new Date()) + "-" + a && It());
  }
  F.addEventListener("click", It), i("checkinLater").addEventListener("click", Ct), i("checkinSave").addEventListener("click", Jt), L.addEventListener("click", (a) => {
    a.target === L && Ct();
  }), L.addEventListener("keydown", (a) => {
    a.key === "Escape" && (a.preventDefault(), Ct());
  }), setInterval(_t, 3e4);
  function Pe() {
    const a = Ce(/* @__PURE__ */ new Date()), s = (c) => Nt.checkins.find((v) => v.date === a && v[c] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([c, v]) => {
      const C = s(c);
      i(v).textContent = C ? Ma(c, C[c]) : "—";
    });
  }
  function He() {
    const a = i("feelCard");
    if (!a) return;
    const s = /* @__PURE__ */ new Date(), c = new Date(s.getFullYear(), s.getMonth(), s.getDate() - (s.getDay() + 6) % 7), v = [...Array(7)].map((r, d) => {
      const u = new Date(c.getFullYear(), c.getMonth(), c.getDate() + d), p = Ce(u), g = Nt.checkins.filter((M) => M.date === p), m = (M) => {
        const T = g.map((A) => A[M]).filter((A) => A != null);
        return T.length ? T.reduce((A, H) => A + H, 0) / T.length : null;
      };
      return { d: u, key: p, mood: m("mood"), energy: m("energy"), count: g.filter(w).length, future: u > s && p !== Ce(s) };
    }), C = (r) => {
      const d = v.map((u) => u[r]).filter((u) => u != null);
      return d.length ? d.reduce((u, p) => u + p, 0) / d.length : null;
    }, R = C("mood"), t = C("energy"), e = (r, d) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + r + "</span><span>" + (d == null ? "—" : Ut(Ma("", d))) + '</span></div><div class="feelTrack"><span style="width:' + (d == null ? 0 : Math.max(4, d)) + "%;background:" + (d == null ? "transparent" : Sa(d)) + '"></span></div></div>', n = v.filter((r) => r.mood != null && r.energy != null).sort((r, d) => d.mood + d.energy - (r.mood + r.energy))[0];
    a.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (R == null ? "No check-ins yet" : Ut(Ma("", (R + t) / 2))) + '</div><div class="weekCopy">' + (R == null ? "Your first check-in will appear here." : "on average this week" + (n ? " · best day " + Ut(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(n.d)) : "")) + '</div></div></div><div class="feelDays">' + v.map(
      (r) => '<div class="weekChip feelDay' + (r.future ? " future" : "") + (r.key === Ce(s) ? " today" : "") + '"><div class="weekChipTop"><strong>' + Ut(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(r.d)) + "</strong>" + (r.count >= 2 ? '<span class="weekTick">' + ra("check") + "</span>" : '<span class="feelDots">' + "●".repeat(r.count) + "</span>") + "</div>" + e("Mood", r.mood) + e("Energy", r.energy) + "</div>"
    ).join("") + "</div>";
  }
  const ma = i("upcomingCountSetting");
  ma.addEventListener("change", () => {
    za = ma.value === "all" ? "all" : Number(ma.value), Eo();
  });
  const ga = i("tempoRevealBtn"), Ii = i("tempoExperiment"), Ba = i("tempoQuad"), xn = i("tempoDot"), le = i("tempoEstimate"), ro = i("tempoReadout");
  let Za = { x: 0.5, y: 0.5 }, In = !1, Hn = { total: 20, work: 45, rest: 15 };
  function Hi(a, s, c, v) {
    const C = Math.max(s, Math.min(c, a));
    return Math.round((C - s) / v) * v + s;
  }
  function ni(a, s) {
    const c = (a - 0.5) * 2, v = (s - 0.5) * 2, C = Hi(
      Hn.total + c * 5 + v * 8,
      Number(P.min),
      Number(P.max),
      Number(P.step)
    ), R = Hi(
      Hn.work + c * 10 + v * 8,
      Number(W.min),
      Number(W.max),
      Number(W.step)
    ), t = Hi(
      Hn.rest + c * 6 + v * 6,
      Number(B.min),
      Number(B.max),
      Number(B.step)
    );
    return P.value = C, W.value = R, B.value = t, ut.textContent = R + " sec", mt.textContent = t + " sec", _i(), { total: C, work: R, rest: t };
  }
  function ca(a, s) {
    const c = a < 0.34 ? "Low" : a > 0.66 ? "Hard" : "Medium", v = s < 0.34 ? "Fast" : s > 0.66 ? "Slow" : "Balanced", C = ni(a, s);
    ro.textContent = c + " + " + v, le.textContent = C.total + " min", Ba.setAttribute("aria-valuetext", c + " and " + v + ", estimated " + C.total + " minutes");
  }
  function Wr(a) {
    const s = Ba.getBoundingClientRect(), c = Math.max(0, Math.min(1, (a.clientX - s.left) / s.width)), v = Math.max(0, Math.min(1, (a.clientY - s.top) / s.height));
    Za = { x: c, y: v }, xn.style.left = c * 100 + "%", xn.style.top = v * 100 + "%", ca(c, v);
  }
  ga.addEventListener("click", () => {
    const a = Ii.hidden;
    Ii.hidden = !a, ga.setAttribute("aria-expanded", a ? "true" : "false"), ga.textContent = a ? "Now close this" : "Don’t try this!", a && (Hn = {
      total: Number(P.value),
      work: Number(W.value),
      rest: Number(B.value)
    }, Za = { x: 0.5, y: 0.5 }, xn.style.left = "50%", xn.style.top = "50%", ca(Za.x, Za.y));
  }), o.querySelectorAll("[data-feedback-rating]").forEach((a) => a.addEventListener("click", () => {
    Number(a.dataset.feedbackRating), o.querySelectorAll("[data-feedback-rating]").forEach((s) => s.classList.toggle("selected", s === a));
  }));
  const Vr = i("testingFeedbackForm"), qs = i("testingFeedbackThanks"), Sd = i("testingFeedbackAgain");
  Vr.addEventListener("submit", (a) => {
    a.preventDefault(), Vr.hidden = !0, qs.hidden = !1, ue("Feedback captured for prototype");
  }), Sd.addEventListener("click", (a) => {
    a.preventDefault(), Vr.reset(), o.querySelectorAll("[data-feedback-rating]").forEach((s) => s.classList.remove("selected")), qs.hidden = !0, Vr.hidden = !1;
  }), Ba.addEventListener("pointerdown", (a) => {
    var s;
    In = !0, Wr(a);
    try {
      (s = Ba.setPointerCapture) == null || s.call(Ba, a.pointerId);
    } catch {
    }
  }), Ba.addEventListener("pointermove", (a) => {
    In && Wr(a);
  }), Ba.addEventListener("pointerup", (a) => {
    In && (In = !1, Wr(a), ke());
  }), Ba.addEventListener("pointercancel", () => In = !1), Ba.addEventListener("keydown", (a) => {
    let { x: s, y: c } = Za, v = !0;
    a.key === "ArrowLeft" ? s -= 0.05 : a.key === "ArrowRight" ? s += 0.05 : a.key === "ArrowUp" ? c -= 0.05 : a.key === "ArrowDown" ? c += 0.05 : v = !1, v && (a.preventDefault(), s = Math.max(0, Math.min(1, s)), c = Math.max(0, Math.min(1, c)), Za = { x: s, y: c }, xn.style.left = s * 100 + "%", xn.style.top = c * 100 + "%", ca(s, c), ke());
  });
  const oa = i("workoutModal");
  let oi = null;
  function ko(a) {
    return a.map((s) => ({ ...s }));
  }
  function Sl() {
    const a = Xt[oe];
    return {
      key: oe,
      profile: a ? JSON.parse(JSON.stringify(a)) : null,
      warmup: ko(Ie),
      strength: ko(Wt),
      cooldown: ko(xa),
      total: Number(P.value),
      work: Number(W.value),
      rest: Number(B.value),
      rounds: Number(zt.value) || 1
    };
  }
  function jr(a = !1) {
    De = !!a, Ye = null, Ve = null, Xe(), Qo(), oi = Sl(), i("moveEditorTitle").textContent = De ? "Create new move" : "Edit move", i("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", i("moveEditorSubtitle").hidden = !De, i("warmupRow").hidden = De, i("deleteMoveOpen").hidden = De;
    const s = i("createMoveOptions");
    s.hidden = !De;
    {
      const c = Xt[oe];
      i("includeWarmupPreset").checked = !!(c != null && c.includeWarmup), i("includeCooldownPreset").checked = !!(c != null && c.includeCooldown);
    }
    if (Cl(), De) {
      i("useGlobalTiming").checked = !0, i("useGlobalRestTiming").checked = !0;
      const c = Xt[oe];
      Yo((c == null ? void 0 : c.preset) || "movement", !1);
    }
    i("movementCreator").hidden = !0, ti("movement"), oo(), yo(), Ii.hidden = !0, ga.setAttribute("aria-expanded", "false"), ga.textContent = "Don’t try this!", oa.classList.toggle("createMode", De), oa.querySelector(".modal").classList.toggle("createMode", De), oa.classList.add("open"), oa.setAttribute("aria-hidden", "false"), Ke(), De && xt();
  }
  function Cd() {
    const a = Xt[oe];
    return a != null && a.customSequence ? !!a.includeWarmup : !(a != null && a.warmupOff);
  }
  function Cl() {
    const a = Cd(), s = i("warmupSwitch");
    s.classList.toggle("on", a), s.setAttribute("aria-checked", String(a));
  }
  i("warmupSwitch").addEventListener("click", () => {
    const a = Xt[oe];
    a && (a.customSequence ? (i("includeWarmupPreset").checked = !a.includeWarmup, Di()) : (a.warmupOff = !a.warmupOff, ke()), Cl());
  });
  function zr() {
    Xe(), Qo(), fr(), Ve = null, Ye = null, oa.classList.contains("createMode") && st(), oa.classList.remove("createMode"), oa.querySelector(".modal").classList.remove("createMode"), oa.classList.remove("open"), oa.setAttribute("aria-hidden", "true");
  }
  function Tl() {
    if (!oi) return;
    const a = oi;
    a.profile && (Xt[a.key] = JSON.parse(JSON.stringify(a.profile))), oe = a.key, Ie = ko(a.warmup), Wt = ko(a.strength), xa = ko(a.cooldown), P.value = a.total, W.value = a.work, B.value = a.rest, zt.value = a.rounds || 1;
    const s = Xt[oe];
    if (s) {
      o.querySelectorAll(".workoutPanel[data-workout]").forEach((v) => v.classList.toggle("active", v.dataset.workout === oe));
      const c = o.querySelector(".workoutPanel.active");
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
    ke();
  }
  i("cancelWorkoutEdit").addEventListener("click", () => {
    if (De) {
      const a = oe;
      delete Xt[a], De = !1, An = null, Ee(Nt.order.find((s) => Xt[s]) || Object.keys(Xt)[0]);
    } else
      Tl();
    zr();
  }), i("saveWorkoutEdit").addEventListener("click", () => {
    Xe(), _e && Pn();
    const a = Xt[oe], s = b.value.trim() || "New move";
    if (a && (a.name = s), Zo(), Ye = null, ke(), De && a)
      un(oe, a), o.querySelectorAll(".workoutPanel[data-workout]").forEach((c) => c.classList.toggle("active", c.dataset.workout === oe)), De = !1, An = null, Nt.order.includes(oe) || Nt.order.push(oe), ue("Move created");
    else {
      const c = o.querySelector(".workoutPanel.active");
      if (c) {
        const v = c.querySelector(".workoutName");
        v && (v.textContent = s);
        const C = c.querySelector(".panelCollapsedText");
        C && (C.textContent = s);
      }
      ue("Move saved");
    }
    oi = null, zr(), ja();
  }), oa.addEventListener("click", (a) => {
    if (a.target === oa) {
      if (De) {
        const s = oe;
        delete Xt[s], De = !1, An = null, Ee(Nt.order.find((c) => Xt[c]) || Object.keys(Xt)[0]);
      } else
        Tl();
      zr();
    }
  }), Xo(i("addMovementBtn"), "movement"), Xo(i("addRestBtn"), "rest"), Xo(i("addVideoBtn"), "video"), i("closeMovementCreator").addEventListener("click", () => {
    i("movementCreator").hidden = !0;
  }), i("useGlobalTiming").addEventListener("change", yo), i("useGlobalRestTiming").addEventListener("change", yo), o.querySelectorAll(".createPresetBtn").forEach((a) => a.addEventListener("click", () => {
    Yo(a.dataset.movePreset, !0), ke();
  })), i("includeWarmupPreset").addEventListener("change", Di), i("includeCooldownPreset").addEventListener("change", Di), i("includeWarmupPreset").addEventListener("change", D), i("includeCooldownPreset").addEventListener("change", D), b.addEventListener("input", D), b.addEventListener("input", xo), i("confirmAddMovement").addEventListener("click", ei), i("confirmAddRest").addEventListener("click", ei), i("addMovementInput").addEventListener("keydown", (a) => {
    a.key === "Enter" && ei();
  });
  const mr = i("countdown"), ii = i("countNum"), Fn = i("countdownPixelCanvas");
  let gr = null, Ws = "appear";
  class Fi {
    constructor(s, c, v, C, R, t, e) {
      this.width = s.width, this.height = s.height, this.ctx = c, this.x = v, this.y = C, this.color = R, this.speed = (Math.random() * 0.8 + 0.1) * t, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = e, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let Gr = [], Vs = 1, js = 1;
  function Mo() {
    const a = parseFloat(getComputedStyle(i("app")).zoom);
    return Number.isFinite(a) && a > 0 ? a : 1;
  }
  function Ll() {
    var r;
    if (!Fn) return;
    const a = Mo(), s = Math.max(1, window.innerWidth / a), c = Math.max(1, window.innerHeight / a);
    Vs = s, js = c;
    const v = Math.min(window.devicePixelRatio || 1, 2);
    Fn.width = Math.floor(s * v), Fn.height = Math.floor(c * v), Fn.style.width = s + "px", Fn.style.height = c + "px";
    const C = Fn.getContext("2d");
    C.setTransform(v, 0, 0, v, 0, 0);
    const R = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], t = 12, e = (r = window.matchMedia) == null ? void 0 : r.call(window, "(prefers-reduced-motion: reduce)").matches, n = e ? 0 : 0.055;
    Gr = [];
    for (let d = 0; d < s; d += t)
      for (let u = 0; u < c; u += t) {
        const p = d - s / 2, g = u - c / 2, m = Math.sqrt(p * p + g * g), M = e ? 0 : Math.random() * 75 + m * 0.05, T = new Fi({ width: s, height: c }, C, d, u, R[Math.floor(Math.random() * R.length)], n, M);
        T.maxSizeInteger = 4, T.maxSize = Math.random() * 3.2 + 0.8, T.sizeStep = 0.35 + Math.random() * 0.45, Gr.push(T);
      }
  }
  function Al(a) {
    cancelAnimationFrame(gr), Ws = a;
    const s = Fn == null ? void 0 : Fn.getContext("2d");
    if (!s) return;
    function c() {
      s.clearRect(0, 0, Vs, js);
      let v = !0;
      Gr.forEach((C) => {
        C[Ws](), C.isIdle || (v = !1);
      }), Ws === "disappear" && v || (gr = requestAnimationFrame(c));
    }
    gr = requestAnimationFrame(c);
  }
  function Ur() {
    cancelAnimationFrame(gr), Ll(), Al("appear"), setTimeout(() => Al("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    mr.classList.contains("active") && Ur();
  });
  const vr = i("pixelTrailCanvas"), ri = vr.getContext("2d");
  let mn = !0, So = 0.7, Co = 600, si = [], li = null, To = { x: 0, y: 0, ready: !1 };
  function zs() {
    const a = f.getBoundingClientRect(), s = Mo(), c = Math.min(window.devicePixelRatio || 1, 2), v = Math.max(1, a.width / s), C = Math.max(1, a.height / s);
    vr.width = Math.max(1, Math.floor(v * c)), vr.height = Math.max(1, Math.floor(C * c)), vr.style.width = v + "px", vr.style.height = C + "px", ri.setTransform(c, 0, 0, c, 0, 0);
  }
  function Td(a, s) {
    if (!mn) return;
    const c = performance.now();
    To.ready || (To = { x: a, y: s, ready: !0 });
    const v = 7;
    for (let C = 1; C <= v; C++) {
      const R = C / v;
      si.push({
        x: To.x + (a - To.x) * R,
        y: To.y + (s - To.y) * R,
        born: c - (v - C) * 10
      });
    }
    To = { x: a, y: s, ready: !0 };
  }
  function Yr(a) {
    if (li = null, !x) return;
    if (!Bt.workout.classList.contains("active")) {
      li = requestAnimationFrame(Yr);
      return;
    }
    const s = f.getBoundingClientRect(), c = Mo();
    ri.clearRect(0, 0, s.width / c, s.height / c), mn && (si = si.filter((C) => a - C.born < Co), ri.fillStyle = i("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", si.forEach((C) => {
      const R = (a - C.born) / Co, t = (1 - R) * So, e = Math.round(C.x / 14) * 14, n = Math.round(C.y / 14) * 14;
      ri.globalAlpha = Math.max(0, t);
      const r = 2 + 5 * (1 - R) * So;
      ri.fillRect(e - r / 2, n - r / 2, r, r);
    }), ri.globalAlpha = 1), li = requestAnimationFrame(Yr);
  }
  f.addEventListener("pointermove", (a) => {
    const s = f.getBoundingClientRect(), c = Mo();
    Td((a.clientX - s.left) / c, (a.clientY - s.top) / c);
  }), f.addEventListener("pointerleave", () => To.ready = !1), new ResizeObserver(zs).observe(f), zs(), li = requestAnimationFrame(Yr);
  const so = i("movementRippleCanvas"), Oi = so.getContext("2d");
  let On = !0, be = null, Ld = performance.now();
  function El() {
    const a = so.parentElement.getBoundingClientRect(), s = Mo(), c = Math.max(1, a.width / s), v = Math.max(1, a.height / s), C = Math.min(window.devicePixelRatio || 1, 2);
    so.width = Math.max(1, Math.floor(c * C)), so.height = Math.max(1, Math.floor(v * C)), so.style.width = c + "px", so.style.height = v + "px", Oi.setTransform(C, 0, 0, C, 0, 0);
  }
  function _l() {
    var a;
    return me || ((a = Ft[Zt]) == null ? void 0 : a.kind) === "rest";
  }
  function yn() {
    const a = Ft[Zt];
    return _l() ? 2200 : a ? a.kind === "warmup" || a.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function Zr(a) {
    if (be = null, !x) return;
    if (!Bt.workout.classList.contains("active")) {
      be = requestAnimationFrame(Zr);
      return;
    }
    const s = so.parentElement.getBoundingClientRect(), c = Mo(), v = Math.max(1, s.width / c), C = Math.max(1, s.height / c);
    if (Oi.clearRect(0, 0, v, C), On) {
      const R = yn(), t = (a - Ld) % R / R, e = 15, n = Math.max(8, Math.round(e * C / Math.max(1, v))), r = v / (e + 1), d = C / (n + 1), u = v * 0.5, p = C * 0.52, g = Math.hypot(u, p), M = i("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let T = 1; T <= n; T++)
        for (let A = 1; A <= e; A++) {
          const H = A * r, I = T * d, U = Math.hypot(H - u, I - p) / g, z = _l(), G = z ? Math.exp(-Math.pow((U - (t * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, N = Math.exp(-Math.pow((U - t * 1.25) * 7, 2)), ct = z ? G : N, $ = z ? 0.5 + 0.5 * Math.sin(t * Math.PI * 2 - U * 3) ** 2 : 0.35 + 0.65 * Math.sin(t * Math.PI * 2 - U * 5) ** 2, Mt = z ? 1.4 + ct * 4.2 * $ : 1.2 + ct * 5 * $;
          Oi.beginPath(), Oi.arc(H, I, Mt, 0, Math.PI * 2), Oi.fillStyle = `rgba(${M},${z ? 0.08 + ct * 0.48 : 0.05 + ct * 0.55})`, Oi.fill();
        }
    }
    be = requestAnimationFrame(Zr);
  }
  new ResizeObserver(El).observe(so.parentElement), El(), be = requestAnimationFrame(Zr);
  const qi = i("exerciseTitle"), lo = i("exerciseMeta"), Kr = i("stepLabel"), $r = i("digits"), Dl = i("fill"), Wi = i("progress"), Xr = i("pause"), br = i("nextName"), Bl = i("nextMeta"), Ad = i("nextIcon"), Jr = i("skipNextSession");
  let Oe = null;
  function Ka(a) {
    for (let s = Math.max(0, a); s < Ft.length; s++)
      if (!Ft[s].sessionHidden) return s;
    return -1;
  }
  function Ed() {
    const a = Ft[Zt];
    if (!a) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (me) {
      const v = Ka(Zt + 1), C = v >= 0 ? Ft[v] : null;
      return C ? { name: C.name, meta: pa(C), icon: se(C) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (a.rest > 0) return { name: "Rest", meta: a.rest + " sec · " + (a.roundBreakAfter ? "round " + (a.round + 1) + " next" : "recovery"), icon: "pause" };
    const s = Ka(Zt + 1), c = s >= 0 ? Ft[s] : null;
    return c ? { name: c.name, meta: pa(c), icon: se(c) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function Ra() {
    if (!Ft[Zt]) return Ft.length;
    const s = Ka(Zt + 1);
    return s < 0 ? Ft.length : s + 1;
  }
  function se(a) {
    return a.kind === "video" ? "play" : "clock";
  }
  function pa(a) {
    return a.kind === "video" ? "YouTube · " + _n(a.duration) : a.group + " · " + a.duration + " sec";
  }
  function Vi() {
    return Ft.length && Ft[Ft.length - 1].round || 1;
  }
  function Lo(a) {
    const s = Ft[a];
    if (!s) return "";
    const c = Vi();
    if (c <= 1) return "Step " + (a + 1) + " of " + Ft.length;
    if (s.roundBreak) return "Round " + s.round + " of " + c + " · Rest";
    const v = Ft.filter((C) => C.round === s.round && !C.roundBreak).length;
    return "Round " + s.round + " of " + c + " · Step " + (s.roundIndex + 1) + " of " + v;
  }
  function wr() {
    return Wi.querySelector('[data-step="' + Zt + '"]');
  }
  function Ao() {
    Ft[Zt] && Number(Wi.dataset.round) !== (Ft[Zt].round || 1) && Gi(), [...Wi.children].forEach((a) => {
      const s = Number(a.dataset.step);
      a.classList.toggle("done", s < Zt), a.classList.toggle("active", s === Zt), a.classList.toggle("rewindable", s <= Zt), a.disabled = s > Zt, s === Zt && a.style.setProperty("--segment-progress", "0%");
    }), Ft[Zt] && (Kr.textContent = Lo(Zt), hi());
  }
  function qn(a) {
    const s = Ft.indexOf(a);
    s < 0 || s <= Zt || (a.sessionHidden = !a.sessionHidden, _o(), ue((a.sessionHidden ? "Hidden " : "Included ") + a.name + " for this session"));
  }
  function Eo() {
    const a = i("upcomingList");
    if (!a) return;
    a.innerHTML = "";
    const s = Ra(), c = Ft.slice(s);
    (za === "all" ? c : c.slice(0, Math.max(1, Number(za) || 1))).forEach((C) => {
      const R = document.createElement("section");
      R.className = "upcomingCard" + (C.sessionHidden ? " sessionHidden" : "") + (ss(C) ? " noMeta" : ""), R.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + ra(se(C)) + '</div><div><div class="upcomingName">' + Ut(C.name) + '</div><div class="upcomingMeta">' + Ut(pa(C)) + (Vi() > 1 ? " · round " + C.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (C.sessionHidden ? "Include this session" : "Skip this session") + "</button>", R.querySelector(".skipSessionBtn").addEventListener("click", () => qn(C)), a.appendChild(R);
    });
  }
  function _o() {
    var s;
    const a = Ed();
    br.textContent = a.name, Bl.textContent = a.meta, Ad.innerHTML = ra(a.icon);
    {
      const c = me ? Ft[Ka(Zt + 1)] : ((s = Ft[Zt]) == null ? void 0 : s.rest) > 0 ? { kind: "rest" } : Ft[Ka(Zt + 1)];
      o.querySelector(".nextCard").classList.toggle("noMeta", !!(c && ss(c)));
    }
    if (Oe = null, me) {
      const c = Ka(Zt + 1);
      c >= 0 && (Oe = Ft[c]);
    } else {
      const c = Ft[Zt];
      if (c && c.rest > 0)
        Oe = null;
      else {
        const v = Ka(Zt + 1);
        v >= 0 && (Oe = Ft[v]);
      }
    }
    Jr && (Jr.hidden = !Oe, Jr.textContent = Oe != null && Oe.sessionHidden ? "Include this session" : "Skip this session"), Eo();
  }
  Jr.addEventListener("click", () => {
    Oe && (Oe.sessionHidden = !Oe.sessionHidden, ue((Oe.sessionHidden ? "Hidden " : "Included ") + Oe.name + " for this session"), _o());
  });
  let Wn = null, Te = null;
  function xr(a, s = {}) {
    const c = Xt[oe];
    l.fire(a, { move: (c == null ? void 0 : c.name) || "", move_id: oe, ...s });
  }
  function yr() {
    const a = Xt[oe];
    Wn = { key: oe, name: (a == null ? void 0 : a.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(Te), Te = setInterval(() => {
      Wn && !At && Wn.active++;
    }, 1e3), xr("started", { steps: Ft.length });
  }
  function di(a) {
    if (clearInterval(Te), !Wn) return;
    const s = Wn;
    Wn = null, xr(a ? "completed" : "ended", { seconds: s.active }), !(s.active < 30) && (Nt.history.unshift({ id: "h-" + s.startedAt, move_id: s.key, name: s.name, start: new Date(s.startedAt).toISOString(), seconds: s.active, completed: a }), Nt.history = Nt.history.slice(0, 1e3), ja(), Fo(), Vn());
  }
  let $a = null, ji = null, Qr = !1;
  function zi() {
    return Qt().sounds !== !1;
  }
  function ts() {
    if (zi())
      try {
        navigator.audioSession && (navigator.audioSession.type = "playback"), $a = $a || new (window.AudioContext || window.webkitAudioContext)(), $a.state === "suspended" && $a.resume();
      } catch {
        $a = null;
      }
  }
  function ci(a, s, c, { to: v = a, vol: C = 0.25, type: R = "sine" } = {}) {
    const t = $a.currentTime + s, e = $a.createOscillator(), n = $a.createGain();
    e.type = R, e.frequency.setValueAtTime(a, t), v !== a && e.frequency.exponentialRampToValueAtTime(v, t + c), n.gain.setValueAtTime(1e-4, t), n.gain.exponentialRampToValueAtTime(C, t + 0.01), n.gain.exponentialRampToValueAtTime(1e-4, t + c), e.connect(n).connect($a.destination), e.start(t), e.stop(t + c + 0.02);
  }
  const Gs = {
    tick: () => ci(880, 0, 0.07, { vol: 0.18 }),
    move: () => {
      ci(660, 0, 0.12, { type: "triangle", vol: 0.3 }), ci(990, 0.13, 0.16, { type: "triangle", vol: 0.3 });
    },
    rest: () => ci(660, 0, 0.4, { to: 440, vol: 0.22 }),
    done: () => {
      ci(523, 0, 0.16, { type: "triangle" }), ci(659, 0.16, 0.16, { type: "triangle" }), ci(784, 0.32, 0.4, { type: "triangle" });
    }
  };
  function Pa(a) {
    if (!(!zi() || !$a))
      try {
        $a.state === "suspended" && $a.resume(), Gs[a]();
      } catch {
      }
  }
  function ua() {
    Ue >= 1 && Ue <= 3 && Ue !== ji && (ji = Ue, Pa("tick"));
  }
  function Xa() {
    ts(), E("workout"), _d();
    const a = Ka(0);
    a >= 0 && Ft[a].kind === "video" && La(Ft[a]);
  }
  function es() {
    is(), di(!1), clearInterval(re), clearInterval(de), me = !1, kn(!1), i("app").classList.remove("resting"), mr.classList.remove("active"), E("home");
  }
  function _d() {
    mr.classList.add("active");
    let a = 5;
    ii.textContent = a, Pa("tick"), requestAnimationFrame(Ur), clearInterval(de), de = setInterval(() => {
      a--, a > 0 ? (ii.textContent = a, Pa("tick"), Ur()) : (clearInterval(de), ii.textContent = "GO", Pa("move"), Qr = !0, Ur(), setTimeout(() => {
        mr.classList.remove("active"), cancelAnimationFrame(gr), Us();
      }, 650));
    }, 1e3);
  }
  function Gi() {
    var s;
    Wi.innerHTML = "";
    const a = ((s = Ft[Math.max(0, Zt)] || Ft[0]) == null ? void 0 : s.round) || 1;
    Wi.dataset.round = a, Ft.forEach((c, v) => {
      if ((c.round || 1) !== a) return;
      const C = document.createElement("button");
      C.dataset.step = v, C.type = "button", C.className = "progressSegment", C.setAttribute("aria-label", "Go to " + c.name), C.addEventListener("click", () => {
        v <= Zt && Dd(v);
      }), Wi.appendChild(C);
    });
  }
  function kn(a) {
    a = !!a;
    const s = At !== a;
    if (At = a, Xr.textContent = a ? "Resume" : "Pause", i("app").classList.toggle("paused", a), fa && Le)
      try {
        a ? Le.pauseVideo() : Le.playVideo();
      } catch {
      }
    s && Wn && xr(a ? "paused" : "resumed");
  }
  function Dd(a) {
    a < 0 || a >= Ft.length || a > Zt || (clearInterval(re), me = !1, i("app").classList.remove("resting"), Zt = a, kn(!1), co(), re = setInterval(Ro, 1e3));
  }
  function Us() {
    if (Zt = Ka(0), kn(!1), Gi(), Zt < 0) {
      qi.textContent = "No activities", lo.textContent = "Open Edit and enable or add a movement", lo.hidden = !1;
      return;
    }
    yr(), co(), clearInterval(re), re = setInterval(Ro, 1e3);
  }
  const as = i("videoStage"), Do = i("videoSound"), Bd = 0, Ta = 1, pi = 2;
  let Rl = 0, ui = null, Bo = null, Le = null, fi = null, kr = 0, Ys = !1, fa = null, Ja = null;
  function Pl() {
    var a;
    return (a = window.YT) != null && a.Player ? Promise.resolve(window.YT) : ui || (ui = new Promise((s, c) => {
      const v = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          v == null || v();
        } catch {
        }
      };
      const C = setInterval(() => {
        var t;
        (t = window.YT) != null && t.Player && (clearInterval(C), clearTimeout(R), s(window.YT));
      }, 100), R = setTimeout(() => {
        clearInterval(C), ui = null, c(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const t = document.createElement("script");
        t.src = "https://www.youtube.com/iframe_api", t.async = !0, t.onerror = () => {
          clearInterval(C), clearTimeout(R), ui = null, c(new Error("YouTube did not load"));
        }, document.head.appendChild(t);
      }
    }), ui);
  }
  function Nl() {
    return Bo || (Bo = Pl().then((a) => new Promise((s) => {
      const c = document.createElement("div");
      i("videoFrame").appendChild(c), Le = new a.Player(c, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => s(Le), onStateChange: (v) => Mr(v.data), onError: (v) => Ui(v.data) }
      });
    })), Bo.catch(() => {
      Bo = null;
    }), Bo);
  }
  function La(a) {
    !(a != null && a.videoId) || a.videoError || Nl().then((s) => {
      fa || fi === a.videoId || (fi = a.videoId, kr = Number(a.start) || 0, Ys = !1, s.mute(), s.loadVideoById({ videoId: a.videoId, startSeconds: kr }));
    }).catch(() => {
    });
  }
  function ns() {
    const a = Ka(Zt + 1);
    a >= 0 && Ft[a].kind === "video" && La(Ft[a]);
  }
  function Mr(a) {
    if (!fa) {
      a === Ta && !Ys && (Ys = !0, Le.pauseVideo(), Le.seekTo(kr, !0));
      return;
    }
    as.classList.toggle("playing", a === Ta), Ft[Zt] === fa && performance.now() > Rl && (a === Ta && At ? kn(!1) : a === pi && !At && kn(!0)), a === Ta && Cr(fa.videoId, Le.getDuration()) && ja(), a === Bd && Yi();
  }
  function Ui(a) {
    const s = fa;
    if (!s) {
      fi = null;
      return;
    }
    a === 101 || a === 150 ? (Zs(s.videoId), ue("That video can’t play outside YouTube, so it was skipped")) : ue("The video couldn’t play, so it was skipped"), Yi();
  }
  function Il(a) {
    if (i("app").classList.add("videoStep"), Do.hidden = !0, fa = a, clearTimeout(Ja), !a.videoId) {
      ue("This video step has no link yet, so it was skipped"), setTimeout(() => Yi(), 0);
      return;
    }
    Nl().then((s) => {
      if (fa !== a) return;
      Rl = performance.now() + 1500;
      const c = Number(a.start) || 0;
      fi !== a.videoId ? (fi = a.videoId, kr = c, s.loadVideoById({ videoId: a.videoId, startSeconds: c })) : (s.seekTo(c, !0), s.playVideo()), s.unMute(), At && s.pauseVideo(), Ja = setTimeout(() => {
        fa !== a || At || (s.getPlayerState() !== Ta ? (s.mute(), s.playVideo(), Do.hidden = !1) : s.isMuted() && (Do.hidden = !1));
      }, 1600);
    }).catch(() => {
      fa === a && (ue("YouTube didn’t load, so the video was skipped"), Yi());
    });
  }
  function os() {
    if (!i("app").classList.contains("videoStep")) return;
    const a = o.querySelector(".workGrid"), s = o.querySelector(".sessionControlRow"), c = a.getBoundingClientRect().top, v = (s == null ? void 0 : s.offsetHeight) || 42, C = window.innerHeight - c - 16 - v - 84;
    a.style.setProperty("--theater-h", Math.max(240, Math.round(C)) + "px");
  }
  window.addEventListener("resize", os);
  function is() {
    clearTimeout(Ja);
    const a = fa;
    if (fa = null, i("app").classList.remove("videoStep"), as.classList.remove("playing"), Do.hidden = !0, a && Le) {
      try {
        Le.pauseVideo();
      } catch {
      }
      fi = null;
    }
  }
  function Yi() {
    const a = fa;
    !a || Ft[Zt] !== a || (is(), clearInterval(re), he(), re = setInterval(Ro, 1e3));
  }
  Do.addEventListener("click", () => {
    Le && (Le.unMute(), Le.playVideo()), Do.hidden = !0;
  });
  function rs(a) {
    var v;
    const s = Number(a.start) || 0;
    if (a.useVideoLength === !1) return s + (Number(a.duration) || 300);
    const c = Le && fa === a && Number((v = Le.getDuration) == null ? void 0 : v.call(Le)) || 0;
    return Number(a.end) || c || Number(a.videoDuration) || s + (Number(a.duration) || 300);
  }
  function Sr(a, s) {
    const c = Xt[oe];
    [Ie, Wt, xa, c == null ? void 0 : c.warmup, c == null ? void 0 : c.strength, c == null ? void 0 : c.cooldown, c == null ? void 0 : c.sequence].forEach((v) => (Array.isArray(v) ? v : []).forEach((C) => {
      C && C.kind === "video" && C.videoId === a && s(C);
    }));
  }
  function Cr(a, s) {
    s = Math.round(Number(s) || 0);
    let c = !1;
    return a && s > 0 && Sr(a, (v) => {
      v.videoDuration !== s && (v.videoDuration = s, c = !0);
    }), c;
  }
  function Zs(a) {
    Sr(a, (s) => {
      s.videoError = "embed";
    }), ja();
  }
  function Hl(a) {
    const s = a.videoId;
    if (!s) return;
    const c = () => {
      oa.classList.contains("open") ? Ye || ke() : (ke(), ja());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + s)).then((v) => v.ok ? v.json() : Promise.reject(v.status)).then((v) => {
      a.videoId === s && (a.videoTitle = v.title || "", a.autoName && v.title && (a.name = v.title), c());
    }).catch((v) => {
      a.videoId === s && v === 401 && (a.videoError = "embed", c());
    }), Ks(s).then((v) => {
      Cr(s, v) && c();
    }).catch((v) => {
      v === "embed" && a.videoId === s && (a.videoError = "embed", c());
    });
  }
  function Ks(a) {
    return Pl().then((s) => new Promise((c, v) => {
      const C = document.createElement("div");
      C.className = "videoProbe", C.setAttribute("aria-hidden", "true");
      const R = document.createElement("div");
      C.appendChild(R), i("app").appendChild(C);
      let t = null, e = !1;
      const n = (u, p) => {
        e || (e = !0, clearTimeout(r), setTimeout(() => {
          try {
            t == null || t.destroy();
          } catch {
          }
          C.remove();
        }, 0), p ? v(p) : c(u));
      }, r = setTimeout(() => n(0), 2e4), d = () => {
        var p;
        const u = Number((p = t == null ? void 0 : t.getDuration) == null ? void 0 : p.call(t)) || 0;
        return u > 0 && n(u), u > 0;
      };
      t = new s.Player(R, {
        width: 320,
        height: 180,
        videoId: a,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            d() || (t.mute(), t.playVideo());
          },
          onStateChange: () => d(),
          onError: (u) => n(0, u.data === 101 || u.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function co() {
    me = !1;
    const a = Ft[Zt];
    i("app").classList.toggle("resting", a.kind === "rest"), a.kind === "video" ? Il(a) : is(), Ue = a.duration, ae = a.duration, ji = null, Qr ? Qr = !1 : Pa(a.kind === "rest" ? "rest" : "move"), qi.textContent = a.name, lo.textContent = a.group, lo.hidden = !0, Kr.textContent = Lo(Zt), Wn && xr("step", { name: a.name, group: a.group, kind: a.kind, step: Zt + 1, of: Ft.length, round: a.round || 1, rounds: Vi(), duration: a.duration }), _o(), Ao(), ns(), a.kind === "video" && setTimeout(os, 0);
  }
  function hi() {
    var C;
    const a = ((C = Ft[Zt]) == null ? void 0 : C.kind) === "video" && !me, s = a && Ue >= 60;
    $r.textContent = s ? _n(Ue) : Ue, $r.classList.toggle("long", s), a && (i("videoClock").textContent = _n(Ue) + " left");
    const c = Ue / ae * 100;
    Dl.style.width = c + "%";
    const v = wr();
    if (v && !me) {
      const R = 100 - c;
      v.style.setProperty("--segment-progress", R + "%");
    }
  }
  function Ro() {
    var s, c;
    if (At) return;
    const a = Ft[Zt];
    if ((a == null ? void 0 : a.kind) === "video" && !me && fa === a) {
      const v = Number((s = Le == null ? void 0 : Le.getCurrentTime) == null ? void 0 : s.call(Le)) || 0, C = Number(a.start) || 0, R = rs(a);
      ae = Math.max(1, R - C), (v > C || ((c = Le == null ? void 0 : Le.getPlayerState) == null ? void 0 : c.call(Le)) === Ta) && (Ue = Math.max(0, Math.ceil(R - v))), hi(), ua(), v > C && v >= R - 0.25 && Yi();
      return;
    }
    Ue--, hi(), ua(), Ue <= 0 && (a.rest > 0 ? Fl(a.rest) : he());
  }
  function Fl(a) {
    var c;
    me = !0, i("app").classList.add("resting");
    const s = wr();
    s && s.style.setProperty("--segment-progress", "100%"), clearInterval(re), Ue = a, ae = a, ji = null, Pa("rest"), Wn && xr("rest", { duration: a }), qi.textContent = "Rest", lo.textContent = (c = Ft[Zt]) != null && c.roundBreakAfter ? "Round " + (Ft[Zt].round + 1) + " next" : "Recovery", _o(), hi(), re = setInterval(() => {
      At || (Ue--, hi(), ua(), Ue <= 0 && (clearInterval(re), he(), re = setInterval(Ro, 1e3)));
    }, 1e3);
  }
  function he() {
    me = !1;
    const a = Ka(Zt + 1);
    if (a >= 0)
      Zt = a, co();
    else {
      clearInterval(re), is(), kn(!1), i("app").classList.remove("resting"), qi.textContent = "Complete", lo.textContent = "Move finished", lo.hidden = !1, $r.textContent = "✓";
      {
        const s = Vi();
        Kr.textContent = s > 1 ? s + " rounds done" : Ft.filter((c) => !c.roundBreak).length + " steps done";
      }
      di(!0), Pa("done");
      {
        const s = Ul(7).reduce((c, v) => c + v.minutes, 0);
        lo.textContent = "Move finished · " + s + " min in the last 7 days";
      }
      Dl.style.width = "100%", _o();
    }
  }
  i("skipExercise").addEventListener("click", () => {
    Na(), kn(!1);
  });
  function Na() {
    clearInterval(re);
    const a = Ft[Zt];
    if (me) {
      me = !1, i("app").classList.remove("resting");
      const c = Ka(Zt + 1);
      c >= 0 ? (Zt = c, co(), re = setInterval(Ro, 1e3)) : he();
      return;
    }
    if (a && a.rest > 0) {
      Fl(a.rest);
      return;
    }
    const s = Ka(Zt + 1);
    s >= 0 ? (Zt = s, co(), re = setInterval(Ro, 1e3)) : he();
  }
  i("restartSegment").addEventListener("click", () => {
    if (clearInterval(re), kn(!1), me) {
      const a = Ft[Zt];
      Ue = a.rest, ae = a.rest, ji = null, Pa("rest"), qi.textContent = "Rest", lo.textContent = "Recovery", i("app").classList.add("resting"), _o(), hi();
    } else
      co();
    re = setInterval(me ? () => {
      At || (Ue--, hi(), ua(), Ue <= 0 && (clearInterval(re), he(), re = setInterval(Ro, 1e3)));
    } : Ro, 1e3);
  });
  function Po(a, s, c, v) {
    let C = 0, R = null, t = !1;
    function e() {
      R && cancelAnimationFrame(R), R = null, C = 0, t = !1, s.style.width = "0%", a.classList.remove("holding");
    }
    function n(u) {
      if (!t) return;
      C || (C = u);
      const p = Math.min(1, (u - C) / c);
      if (s.style.width = p * 100 + "%", p >= 1) {
        t = !1, R && cancelAnimationFrame(R), R = null, s.style.width = "100%", setTimeout(() => s.style.width = "0%", 90), v();
        return;
      }
      R = requestAnimationFrame(n);
    }
    function r(u) {
      var p;
      if (!(u && u.button !== void 0 && u.button !== 0)) {
        u == null || u.preventDefault(), e(), t = !0, a.classList.add("holding");
        try {
          (p = a.setPointerCapture) == null || p.call(a, u.pointerId);
        } catch {
        }
        R = requestAnimationFrame(n);
      }
    }
    function d() {
      t && e();
    }
    a.addEventListener("pointerdown", r), a.addEventListener("pointerup", d), a.addEventListener("pointercancel", d), a.addEventListener("lostpointercapture", d), a.addEventListener("keydown", (u) => {
      (u.key === " " || u.key === "Enter") && !u.repeat && r(u);
    }), a.addEventListener("keyup", (u) => {
      (u.key === " " || u.key === "Enter") && d();
    });
  }
  const Rd = i("endWorkout");
  Po(Rd, i("holdEndFill"), 1500, es);
  const No = i("deleteMoveConfirm");
  i("deleteMoveOpen").addEventListener("click", () => {
    No.classList.add("open"), No.setAttribute("aria-hidden", "false");
  }), i("deleteMoveCancel").addEventListener("click", () => {
    No.classList.remove("open"), No.setAttribute("aria-hidden", "true");
  });
  function Pd() {
    const a = oe, s = o.querySelector('.workoutPanel[data-workout="' + a + '"]');
    s && s.remove(), delete Xt[a], Nt.order = Nt.order.filter((v) => v !== a);
    let c = o.querySelector(".workoutPanel[data-workout]");
    if (!c) {
      const v = "custom-" + Date.now();
      Xt[v] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, Nt.order.push(v), c = un(v, Xt[v]);
    }
    No.classList.remove("open"), No.setAttribute("aria-hidden", "true"), oi = null, zr(), Ee(c.dataset.workout), ja(), ue("Move deleted");
  }
  Po(i("deleteMoveYes"), i("deleteMoveFill"), 1500, Pd);
  const gn = o.querySelector(".rubberTabs"), Ia = i("rubberIndicator");
  function Qa(a, s = !0) {
    if (!a || !gn || !Ia) return;
    const c = gn.getBoundingClientRect(), v = a.getBoundingClientRect();
    Ia.style.transition = s ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const C = Mo();
    Ia.style.left = (v.left - c.left) / C + gn.scrollLeft + "px", Ia.style.width = v.width / C + "px", s && (Ia.style.transform = "scaleX(1.08)", setTimeout(() => Ia.style.transform = "scaleX(1)", 180));
  }
  o.querySelectorAll(".tab").forEach((a) => a.addEventListener("click", () => {
    a.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), o.querySelectorAll(".tab").forEach((s) => s.classList.remove("active")), o.querySelectorAll(".settingsPane").forEach((s) => s.classList.remove("active")), a.classList.add("active"), i(a.dataset.pane).classList.add("active"), Qa(a, !0);
  })), requestAnimationFrame(() => Qa(o.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => Qa(o.querySelector(".tab.active"), !1));
  const mi = i("pixelTrailToggle"), ha = i("rippleToggle"), Ha = i("trailStrength"), Io = i("trailLife");
  function aa(a, s) {
    Qt()[a] = s, ja();
  }
  const $s = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function Ol(a) {
    return a.kind === "rest" ? "rest" : a.kind === "video" ? "video" : "g:" + String(a.group || "").trim().toLowerCase();
  }
  function ss(a) {
    var s;
    return !!((s = Qt().hideMeta) != null && s[Ol(a)]);
  }
  function ia() {
    const a = /* @__PURE__ */ new Map(), s = (c, v, C) => {
      if (!c) return;
      Array.isArray(c) && (c = { name: c[1], group: c[2], kind: "work" });
      const R = Ol(c);
      let t = a.get(R);
      t || (t = { key: R, label: R === "rest" ? "Rest" : R === "video" ? "Video" : String(c.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, a.set(R, t)), t.kinds.add(R === "rest" ? "Rest" : R === "video" ? "Video" : v), t.moves.add(C), t.count++;
    };
    return Object.values(Xt).forEach((c) => {
      const v = c.name || "Move";
      (c.warmup || (c.customSequence ? [] : Tn)).forEach((C) => s(C, "Warm-up", v)), (c.customSequence ? c.sequence || [] : c.strength || []).forEach((C) => s(C, C.presetRole === "warmup" ? "Warm-up" : C.presetRole === "cooldown" ? "Cooldown" : "Movement", v)), (c.cooldown || (c.customSequence ? [] : Kt)).forEach((C) => s(C, "Cooldown", v));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([c, v]) => {
      a.has(c) || a.set(c, { key: c, label: v, kinds: /* @__PURE__ */ new Set([v]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...a.values()].map((c) => ({ ...c, kind: c.kinds.has("Movement") ? "Movement" : [...c.kinds][0], moves: [...c.moves] })).sort((c, v) => $s.indexOf(c.kind) - $s.indexOf(v.kind) || c.label.localeCompare(v.label));
  }
  let Ho = "all";
  function ls() {
    const a = i("metaSearch").value.trim().toLowerCase();
    return ia().filter((s) => (Ho === "all" || s.kind === Ho) && (!a || s.label.toLowerCase().includes(a) || s.moves.some((c) => c.toLowerCase().includes(a))));
  }
  function ds() {
    const a = i("metaTableBody");
    if (!a) return;
    const s = Qt().hideMeta || {}, c = ls();
    a.innerHTML = c.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', c.forEach((C) => {
      const R = !s[C.key], t = C.count ? (C.moves.length > 2 ? C.moves.slice(0, 2).join(", ") + " + " + (C.moves.length - 2) + " more" : C.moves.join(", ")) + " · " + C.count + " step" + (C.count === 1 ? "" : "s") : "Not used yet", e = document.createElement("tr");
      e.className = R ? "" : "off", e.innerHTML = '<td><div class="metaType">' + Ut(C.label) + '</div><div class="metaSub">' + Ut(C.kind + " · " + t) + '</div></td><td class="metaKindCol">' + Ut(C.kind) + '</td><td class="metaUsedCol">' + Ut(t) + '</td><td class="metaSwitchCol"><button class="switch' + (R ? " on" : "") + '" type="button" role="switch" aria-checked="' + R + '" aria-label="Second line for ' + Ut(C.label) + ' on phones"></button></td>', e.querySelector(".switch").addEventListener("click", () => Xs([C.key], R)), a.appendChild(e);
    });
    const v = c.filter((C) => s[C.key]).length;
    i("metaCount").textContent = c.length ? c.length + " type" + (c.length === 1 ? "" : "s") + (v ? " · " + v + " hidden on phones" : "") : "";
  }
  function Xs(a, s) {
    const c = { ...Qt().hideMeta || {} };
    a.forEach((v) => {
      s ? c[v] = !0 : delete c[v];
    }), aa("hideMeta", c), ds(), Bi(), _o();
  }
  i("metaSearch").addEventListener("input", ds), i("metaKinds").querySelectorAll(".kindChip").forEach((a) => a.addEventListener("click", () => {
    Ho = a.dataset.kind, i("metaKinds").querySelectorAll(".kindChip").forEach((s) => s.classList.toggle("active", s === a)), ds();
  })), i("metaHideAll").addEventListener("click", () => Xs(ls().map((a) => a.key), !0)), i("metaShowAll").addEventListener("click", () => Xs(ls().map((a) => a.key), !1));
  const gi = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...Qt().toggles || {} };
  function Js() {
    o.querySelectorAll("[data-toggle]").forEach((c) => c.classList.toggle("on", gi[c.dataset.toggle] !== !1)), o.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([c, v]) => {
      i(v).hidden = gi[c] === !1;
    });
    const a = ["steps", "mood", "energyLevel"].some((c) => gi[c] !== !1);
    o.querySelector(".activityCard").hidden = !a, i("weatherCard").hidden = !0;
    const s = o.querySelector("#homeView .grid");
    s.classList.toggle("noActivity", !a), s.classList.toggle("noWeather", !0);
  }
  o.querySelectorAll("[data-toggle]").forEach((a) => a.addEventListener("click", () => {
    gi[a.dataset.toggle] = gi[a.dataset.toggle] === !1, Js(), aa("toggles", { ...gi });
  })), Js();
  function ql() {
    mi.classList.toggle("on", mn), ha.classList.toggle("on", On), Ha.value = Math.round(So * 100), i("trailStrengthValue").textContent = Ha.value + "%", Io.value = Co, i("trailLifeValue").textContent = Io.value + " ms";
  }
  Qt().trailEnabled !== void 0 && (mn = Qt().trailEnabled), Qt().rippleEnabled !== void 0 && (On = Qt().rippleEnabled), Qt().trailStrength !== void 0 && (So = Qt().trailStrength), Qt().trailMaxAge !== void 0 && (Co = Qt().trailMaxAge), ql();
  const Qs = i("soundsToggle");
  Qs.classList.toggle("on", zi()), Qs.addEventListener("click", () => {
    aa("sounds", !zi()), Qs.classList.toggle("on", zi()), zi() && (ts(), Pa("move"));
  }), mi.addEventListener("click", () => {
    mn = !mn, mi.classList.toggle("on", mn), mn || (si = []), aa("trailEnabled", mn);
  }), ha.addEventListener("click", () => {
    On = !On, ha.classList.toggle("on", On), aa("rippleEnabled", On);
  }), Ha.addEventListener("input", () => {
    So = Number(Ha.value) / 100, i("trailStrengthValue").textContent = Ha.value + "%";
  }), Ha.addEventListener("change", () => aa("trailStrength", So)), Io.addEventListener("input", () => {
    Co = Number(Io.value), i("trailLifeValue").textContent = Io.value + " ms";
  }), Io.addEventListener("change", () => aa("trailMaxAge", Co)), ma.addEventListener("change", () => aa("upcomingCount", za));
  function Wl(a) {
    o.querySelectorAll(".themeBtn").forEach((c) => c.classList.toggle("active", c.dataset.theme === a));
    const s = a === "light";
    i("app").classList.toggle("light", s), l.setLight(s), vi(o);
  }
  Wl(Qt().theme || "dark"), o.querySelectorAll(".themeBtn").forEach((a) => a.addEventListener("click", () => {
    Wl(a.dataset.theme), aa("theme", a.dataset.theme);
  }));
  const tn = { steps: null, weather: null, ...Qt().entities || {} };
  let we = null, Tr = {};
  function Vl(a) {
    const s = Object.values(a).filter((e) => e.entity_id.startsWith("sensor.") || e.entity_id.startsWith("input_number.")), c = (e) => e.attributes.friendly_name || e.entity_id, v = s.filter((e) => /step/i.test(e.entity_id) || /step/i.test(c(e)) || ["steps", "step"].includes(String(e.attributes.unit_of_measurement || "").toLowerCase())), C = s.filter((e) => !v.includes(e)), R = (e, n) => c(e).localeCompare(c(n)), t = (e, n) => /health_steps/.test(n.entity_id) - /health_steps/.test(e.entity_id) || R(e, n);
    return { suggested: v.sort(t), rest: C.sort(R), label: c };
  }
  function tl(a) {
    const s = i("stepsEntity");
    if (!s || s.matches(":focus")) return;
    const { suggested: c, rest: v, label: C } = Vl(a), R = (n) => '<option value="' + Ut(n.entity_id) + '">' + Ut(C(n)) + "</option>";
    s.innerHTML = '<option value="">Not connected</option>' + (c.length ? '<optgroup label="Suggested">' + c.map(R).join("") + "</optgroup>" : "") + (v.length ? '<optgroup label="All sensors">' + v.map(R).join("") + "</optgroup>" : ""), s.value = tn.steps || "";
    const t = i("stepsStatus"), e = tn.steps && a[tn.steps];
    t.textContent = e ? "Connected · " + C(e) : t.dataset.empty;
  }
  i("stepsEntity").addEventListener("change", () => {
    tn.steps = i("stepsEntity").value || null, aa("entities", { ...tn }), Tr = {}, al(), we && (tl(we), zl(we));
  });
  function el(a, s = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: s }).format(a);
  }
  function jl() {
    const a = tn.steps && (we == null ? void 0 : we[tn.steps]), s = Number(a == null ? void 0 : a.state);
    return Number.isFinite(s) ? s : null;
  }
  function zl(a) {
    var v;
    const s = tn.steps, c = s ? Number((v = a[s]) == null ? void 0 : v.state) : NaN;
    i("stepsMeta").textContent = s ? Number.isFinite(c) ? el(c) : "—" : "Set up in Settings";
  }
  let Gl = 0;
  async function al() {
    const a = tn.steps;
    if (!a || !l.ws) return;
    Gl = Date.now();
    const s = /* @__PURE__ */ new Date(), c = new Date(s.getFullYear(), s.getMonth(), s.getDate() - 30);
    try {
      const v = await l.ws({ type: "recorder/statistics_during_period", start_time: c.toISOString(), end_time: s.toISOString(), statistic_ids: [a], period: "day", types: ["max"] }), C = (v == null ? void 0 : v[a]) || [], R = {};
      if (C.forEach((t) => {
        Number.isFinite(t.max) && (R[Ce(new Date(t.start))] = t.max);
      }), !Object.keys(R).length) {
        const t = await l.ws({ type: "history/history_during_period", start_time: c.toISOString(), end_time: s.toISOString(), entity_ids: [a], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((t == null ? void 0 : t[a]) || []).forEach((e) => {
          const n = Number(e.s ?? e.state), r = e.lu ? e.lu * 1e3 : Date.parse(e.last_updated || e.last_changed);
          if (!Number.isFinite(n) || !r) return;
          const d = Ce(new Date(r));
          R[d] = Math.max(R[d] || 0, n);
        });
      }
      Tr = R, Vn();
    } catch {
    }
  }
  function Fo() {
    Vn();
  }
  Fo(), setInterval(() => {
    Fo(), He(), fe();
  }, 10 * 60 * 1e3);
  function Ul(a) {
    const s = {}, c = {};
    Nt.history.forEach((t) => {
      const e = Ce(new Date(t.start));
      s[e] = (s[e] || 0) + (t.seconds || 0) / 60, c[e] = (c[e] || 0) + 1;
    });
    const v = /* @__PURE__ */ new Date(), C = Ce(v), R = [];
    for (let t = a - 1; t >= 0; t--) {
      const e = new Date(v.getFullYear(), v.getMonth(), v.getDate() - t), n = Ce(e), r = Nt.checkins.filter((u) => u.date === n), d = (u) => {
        const p = r.map((g) => g[u]).filter(Boolean);
        return p.length ? p.reduce((g, m) => g + m, 0) / p.length : null;
      };
      R.push({
        key: n,
        date: e,
        minutes: Math.round(s[n] || 0),
        moves: c[n] || 0,
        steps: n === C && jl() != null ? jl() : Tr[n] ?? null,
        mood: d("mood"),
        energy: d("energy")
      });
    }
    return R;
  }
  function Yl(a) {
    let s = a.length - 1;
    a[s] && !a[s].minutes && s--;
    let c = 0;
    for (; s >= 0 && a[s].minutes > 0; )
      c++, s--;
    return c;
  }
  function Vn() {
    const a = i("insightCard");
    if (!a) return;
    const s = Ul(30), c = Yl(s), v = s.reduce((r, d) => r + d.minutes, 0), C = /* @__PURE__ */ new Date(), R = Ce(C), t = Ce(new Date(C.getFullYear(), C.getMonth(), C.getDate() - (C.getDay() + 6) % 7)), e = s.filter((r) => r.key >= t && r.key <= R).reduce((r, d) => r + d.minutes, 0), n = (r, d, u) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + r + '</div><div><div class="activityRowName">' + Ut(d) + '</div><div class="activityRowMeta">' + Ut(u) + "</div></div></div>";
    a.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + ra("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + n(ra("clock"), "This week", e + " min") + n(ra("streak"), "Streak", c + " day" + (c === 1 ? "" : "s")) + n(ra("calendar"), "30 days", v + " min") + "</div>";
  }
  const cs = {
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
  }, Zl = (a) => a === "sunny" ? "clear" : a === "clear-night" ? "night" : a === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(a) ? "rain" : ["snowy", "snowy-rainy"].includes(a) ? "snow" : "cloudy", jn = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, ps = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let us = 0;
  const nl = (a, s) => '<path class="' + s + '" d="' + a + '"/>', Kl = (a, s) => ' style="animation-delay:-' + Math.round(a * 137 % s) + 'ms"', va = (a, s, c, v) => {
    const C = c * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (v < 1 ? ' opacity="' + v + '"' : "") + Kl(a, 2400) + ' d="M' + a + " " + (s - c) + "L" + (a + C) + " " + (s - C) + "L" + (a + c) + " " + s + "L" + (a + C) + " " + (s + C) + "L" + a + " " + (s + c) + "L" + (a - C) + " " + (s + C) + "L" + (a - c) + " " + s + "L" + (a - C) + " " + (s - C) + 'Z"/>';
  }, ol = ([a, s, c], v) => '<path class="wxMoonPath" d="' + a + '" fill="url(#' + v + ')"/><defs><linearGradient id="' + v + '" x1="0" y1="' + s + '" x2="0" y2="' + c + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', po = (a, s) => s ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', $l = (a) => (a ? ["29.35", "43.04", "56.74"].map((s, c) => '<g class="wxDrop" style="animation-delay:-' + c * 317 + 'ms"><rect class="wxAccent" x="' + s + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + s + ' 60.65)"/></g>') : [19, 26, 33].map((s, c) => '<g class="wxDrop" style="animation-delay:-' + c * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + s + ' 38)"/></g>')).join(""), il = (a) => (a ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([s, c], v) => '<circle class="wxFlake" style="animation-delay:-' + v * 640 + 'ms" cx="' + s + '" cy="' + c + '" r="' + (a ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function fs(a, s, c, v) {
    return a === "clear" ? s ? ol(c ? ps.l : ps.s, v) + (c ? va(70, 20, 5.83, 1) + va(78.33, 41.67, 3.75, 0.8) + va(60, 71.67, 3.33, 0.6) : va(42, 12, 3.5, 1) + va(47, 25, 2.25, 0.8) + va(36, 43, 2, 0.6)) : po(v, c) : a === "partly" ? (s ? ol(c ? ps.lp : ps.sp, v) : c ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + nl(c ? jn.lp : jn.sp, s ? "wxCloudLight" : "wxBright") + (s ? c ? va(73.33, 16.67, 4.17, 0.9) : va(44, 10, 2.5, 0.9) : "") : a === "cloudy" ? nl(c ? jn.lc : jn.s, s ? "wxCloudLight" : "wxBright") + (s ? c ? va(15, 15, 3.75, 0.8) + va(76.67, 13.33, 2.92, 0.6) : va(9, 9, 2.25, 0.8) + va(46, 8, 1.75, 0.6) : "") : nl(c ? jn.lr : jn.s, "wxCloudLight") + (a === "rain" ? $l(c) : il(c));
  }
  const Nd = () => {
    var a;
    return ((a = we == null ? void 0 : we["sun.sun"]) == null ? void 0 : a.state) === "below_horizon";
  };
  let Ae = Qt().weatherStyle || "bitmap", Xl = Qt().weatherLayout === "strip" ? "strip" : "tiles", Zi = Qt().weatherMotion !== !1;
  const Lr = () => Zi && !Se(), Ar = /* @__PURE__ */ new Map(), Rt = 700, Mn = (a) => {
    const [s, c] = a.split("/");
    return { k: s === "fog" ? "cloudy" : s === "storm" ? "rain" : s, night: c === "night" };
  };
  function Ki(a, s, c, v = Ae, C, R) {
    let t = Zl(a);
    const e = t === "night" || (R != null ? !!R : !!c && Nd());
    t === "night" && (t = "clear");
    const n = s ? 90 : 54, r = Md(a, e), d = performance.now();
    let u = C ? Ar.get(C) : null;
    if (C && !u ? Ar.set(C, u = { key: r, t0: -1e9 }) : u && u.key !== r && (u.fromKey = u.key, u.from = u.last || null, u.key = r, u.t0 = d), v !== "smooth") return '<span class="wxIcon pixels' + (s ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + r + '"' + (C ? ' data-wx-slot="' + C + '"' : "") + ' data-wx-style="' + v + '" data-wx-size="' + n + '"></canvas></span>';
    let p = "";
    if (u && d - u.t0 < Rt && (Lr() || Se())) {
      const g = Mn(u.fromKey);
      p = '<span class="wxLayer wxOut ' + g.k + (g.night ? " night" : "") + '" style="animation-delay:' + Math.round(u.t0 - d) + 'ms"><svg viewBox="0 0 ' + n + " " + n + '">' + fs(g.k, g.night, s, "wxg" + ++us) + "</svg></span>";
    }
    return '<span class="wxIcon ' + t + (e ? " night" : "") + (s ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + n + " " + n + '">' + fs(t, e, s, "wxg" + ++us) + "</svg>" + p + "</span>";
  }
  function Oo() {
    const a = i("app"), s = getComputedStyle(a), c = (e) => s.getPropertyValue(e).trim(), v = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([e, n]) => {
      c(n) && (v[e] = c(n));
    });
    const C = c("--color-text-primary") || "#f1f1f1", R = c("--color-bg-card") || "#222222", t = a.classList.contains("light");
    return { colors: v, ink: t ? C : R, paper: t ? R : C };
  }
  function vi(a, s = performance.now()) {
    const c = a.querySelectorAll("canvas[data-wx]");
    if (!c.length) return;
    const v = Oo(), C = Lr(), R = Se();
    c.forEach((t) => {
      var u;
      const e = t.dataset.wx, n = t.dataset.wxSlot ? Ar.get(t.dataset.wxSlot) : null;
      let r = cc(e, v.colors);
      if (n && n.key === e) {
        const p = (s - n.t0) / Rt;
        p < 1 && (C || R) && (r = bu(n.from || cc(n.fromKey, v.colors), r, Math.max(0, p), v.colors, R)), n.last = r;
      }
      const d = Cp(r, { size: Number(t.dataset.wxSize) || 54, px: 2, oneBit: t.dataset.wxStyle === "onebit", colors: v.colors, ink: v.ink, paper: v.paper, clock: s, idle: C });
      t.width !== d.w && (t.width = d.w), t.height !== d.h && (t.height = d.h), (u = t.getContext("2d")) == null || u.putImageData(new ImageData(d.data, d.w, d.h), 0, 0);
    });
  }
  let Qe = null, rl = -1;
  function hs(a) {
    if (Qe = null, !x) return;
    const s = Lr(), c = Math.floor(a / 100), v = [...Ar.values()].some((n) => a - n.t0 < Rt), C = [...ms.values()].some((n) => a - n.t0 < n.dur), R = Bt.home.classList.contains("active"), t = Aa.classList.contains("open"), e = s && Ae === "smooth" && (t || R && Xl === "strip");
    !document.hidden && (v || C || e || s && c !== rl) && (rl = c, R && (vi(i("weatherCard"), a), $i(i("weatherCard"), a)), t && (vi(Aa, a), $i(Aa, a))), (s || v || C) && (Qe = requestAnimationFrame(hs));
  }
  function ba() {
    i("app").classList.toggle("wxMotion", Lr()), !Qe && x && (Qe = requestAnimationFrame(hs));
  }
  let Jl = [];
  const ta = 36e5, Id = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function uo() {
    const a = /* @__PURE__ */ new Date(), s = (R, t) => new Date(a.getFullYear(), a.getMonth(), a.getDate() + R, t), c = [], v = [], C = [...Array(6)].map((R, t) => {
      const e = s(t, 6), n = s(t, 18), r = s(t + 1, 6), d = Jl.find((p) => Ce(new Date(p.datetime)) === Ce(e)), u = (p, g, m) => {
        const M = c.filter((H) => H.t >= +p && H.t < +g);
        if (M.length) {
          const H = {};
          return M.forEach((I) => {
            H[I.c] = (H[I.c] || 0) + (Id.has(I.c) ? 2 : 1);
          }), Object.entries(H).sort((I, U) => U[1] - I[1])[0][0];
        }
        const T = v.find((H) => {
          const I = +new Date(H.datetime);
          return I >= +p - 3 * ta && I < +g && (H.is_daytime == null || !!H.is_daytime == !m);
        });
        if (T) return T.condition;
        const A = (d == null ? void 0 : d.condition) || "cloudy";
        return m && A === "sunny" ? "clear-night" : A;
      };
      return { start: +e, end: +r, day: u(e, n, !1), night: u(n, r, !0), hi: Number(d == null ? void 0 : d.temperature), lo: Number(d == null ? void 0 : d.templow) };
    });
    return { days: C, hours: c, start: C[0].start, end: C[5].end };
  }
  const sl = (a, s) => {
    const c = a.days.findIndex((C) => s < C.end);
    if (c < 0) return 1;
    const v = a.days[c];
    return Math.max(0, (c + (s - v.start) / (v.end - v.start)) / 6);
  }, Hd = (a, s) => {
    const c = Math.max(0, Math.min(0.99999, s)) * 6, v = Math.floor(c), C = a.days[v];
    return C.start + (c - v) * (C.end - C.start);
  };
  function ll(a, s) {
    const c = Math.max(0, a.days.findIndex((n) => s < n.end)), v = a.days[c], C = (s - v.start) / (v.end - v.start) >= 0.5;
    let R = C ? v.night : v.day, t = NaN;
    const e = a.hours;
    if (e.length && s >= e[0].t - ta && s <= e[e.length - 1].t + ta) {
      let n = e.findIndex((u) => u.t > s);
      n < 0 && (n = e.length);
      const r = e[Math.max(0, n - 1)], d = e[Math.min(e.length - 1, n)];
      R = r.c || R, t = d.t > r.t ? r.temp + (d.temp - r.temp) * Math.max(0, Math.min(1, (s - r.t) / (d.t - r.t))) : r.temp;
    }
    if (!Number.isFinite(t)) {
      const n = [];
      if (a.days.forEach((r) => {
        Number.isFinite(r.lo) && n.push([r.start - ta, r.lo]), Number.isFinite(r.hi) && n.push([r.start + 9 * ta, r.hi]);
      }), n.length) {
        t = s <= n[0][0] ? n[0][1] : n[n.length - 1][1];
        for (let r = 1; r < n.length; r++) if (s <= n[r][0] && s > n[r - 1][0]) {
          const [d, u] = n[r - 1], [p, g] = n[r];
          t = u + (g - u) * (1 - Math.cos(Math.PI * (s - d) / (p - d))) / 2;
          break;
        }
      }
    }
    return { cond: C && R === "sunny" ? "clear-night" : R, temp: t, night: C, day: v };
  }
  const Ql = (a) => Ce(new Date(a)) === Ce(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(a)), ms = /* @__PURE__ */ new Map(), dl = 900, cl = 700;
  let bi = null;
  const Fa = typeof ResizeObserver == "function" ? new ResizeObserver((a) => a.forEach((s) => {
    $i(s.target.parentElement), s.target.closest("#wxDialog") && td();
  })) : null;
  function $i(a, s = performance.now()) {
    const c = a.querySelectorAll("canvas[data-wx-strip]");
    if (!c.length) return;
    const v = uo(), C = v.days.flatMap((u) => [{ cond: u.day, night: !1 }, { cond: u.night, night: !0 }]), R = C.map((u) => u.cond).join(), t = Oo(), e = Lr(), n = Se(), r = Number(Ce(new Date(v.start)).replace(/\D/g, "")) % 9973;
    let d = !1;
    c.forEach((u) => {
      var H;
      const p = u.clientWidth, g = u.clientHeight;
      if (!p || !g) return;
      const m = u.dataset.wxStrip;
      let M = ms.get(m);
      M ? M.sig !== R && (M.prev = M.segs, M.sig = R, M.segs = C, M.t0 = s, M.dur = cl) : ms.set(m, M = { sig: R, segs: C, prev: null, t0: s, dur: dl });
      const T = e || n ? Math.min(1, Math.max(0, (s - M.t0) / M.dur)) : 1;
      T < 1 && (d = !0);
      const A = { width: p, height: g, colors: t.colors, clock: s, ambient: e, seed: r, reveal: n ? T : 1 - Math.pow(1 - T, 3), prev: T < 1 ? M.prev : null, reduce: n };
      if (Ae === "smooth") {
        const I = Math.min(2, window.devicePixelRatio || 1), U = Math.round(p * I), z = Math.round(g * I);
        u.width !== U && (u.width = U), u.height !== z && (u.height = z);
        const G = u.getContext("2d");
        if (!G) return;
        G.setTransform(I, 0, 0, I, 0, 0), Ru(G, C, A);
      } else {
        const I = Bu(C, { ...A, px: 2, oneBit: Ae === "onebit", ink: t.ink, paper: t.paper });
        u.width !== I.w && (u.width = I.w), u.height !== I.h && (u.height = I.h), (H = u.getContext("2d")) == null || H.putImageData(new ImageData(I.data, I.w, I.h), 0, 0);
      }
    }), d && ba();
  }
  function gs() {
    const a = i("weatherCard");
    if (!a || a.hidden) return;
    const s = tn.weather, c = s && (we == null ? void 0 : we[s]);
    if (!c) {
      a.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + Ki("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (s ? "Not available" : "Set up in Settings") + "</div></div></div></div>", vi(a);
      return;
    }
    const v = c.attributes || {}, C = v.temperature_unit || "°", R = (G) => Number.isFinite(Number(G)) ? Math.round(Number(G)) + "°" : "—", t = (v.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", e = cs[c.state] || (c.state ? c.state.charAt(0).toUpperCase() + c.state.slice(1) : "—"), n = Ce(/* @__PURE__ */ new Date()), r = Jl.slice(0, 7), d = r.find((G) => Ce(new Date(G.datetime)) === n) || null, u = r.filter((G) => Ce(new Date(G.datetime)) >= n).slice(0, 6), p = /* @__PURE__ */ new Date(), g = Ce(new Date(p.getFullYear(), p.getMonth(), p.getDate() + 1)), m = d ? "H " + R(d.temperature) + "&ensp; L " + R(d.templow) : "", M = (G) => {
      const N = Ce(new Date(G.datetime));
      return N === n ? "Today" : N === g ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(G.datetime));
    }, T = Number.isFinite(Number(v.temperature)) ? Math.round(Number(v.temperature)) : "—", A = (G) => {
      const N = new Date(G.datetime);
      return Math.round((new Date(N.getFullYear(), N.getMonth(), N.getDate()) - new Date(p.getFullYear(), p.getMonth(), p.getDate())) / 864e5);
    }, H = (G) => (cs[G] || G || "").toLowerCase(), I = (G, N) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + A(G) + '" aria-label="' + Ut(M(G) + ": " + H(G.condition) + ", " + R(G.temperature) + " / " + R(G.templow) + ". Open the forecast") + '">' + Ki(G.condition, !1, !1, Ae, "day" + N) + '<div><div class="activityRowName">' + Ut(M(G)) + '</div><div class="activityRowMeta">' + R(G.temperature) + " / " + R(G.templow) + "</div></div></div>", U = () => '<div class="wxStrip"><div class="wxStripDays">' + uo().days.map((N, ct) => {
      const Mt = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(N.start)) + ": " + H(N.day) + (H(N.day) === H(N.night) ? " all day and night" : ", then " + H(N.night) + " overnight") + (Number.isFinite(N.hi) ? ". High " + R(N.hi) : "") + (Number.isFinite(N.lo) ? ", low " + R(N.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + ct + '" aria-label="' + Ut(Mt) + '"><span class="wxDayName">' + Ut(Ql(N.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + R(N.hi) + '</span><span class="wxLow">' + R(N.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    a.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + Ut("Now in " + t + ": " + T + "°, " + H(c.state) + ". Open the forecast") + '"><div class="wxCurrent">' + Ki(c.state, !0, !0, Ae, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Ut(String(T)) + '</span><span class="wxUnit">' + Ut(C) + '</span></div><div class="wxPlace">' + Ut(t) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Ut(e) + "</div>" + (m ? '<div class="wxRange">' + m + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (u.length ? Xl === "strip" ? U() : '<div class="activityRows wxDays">' + u.map(I).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", vi(a);
    const z = a.querySelector("canvas[data-wx-strip]");
    bi && bi !== z && (Fa == null || Fa.unobserve(bi)), bi = z, z && (Fa == null || Fa.observe(z), $i(a)), ba(), bs();
  }
  const pl = i("weatherCard"), wi = (a) => {
    const s = a.closest("[data-wx-day]");
    if (s) {
      const v = /* @__PURE__ */ new Date();
      vs(+new Date(v.getFullYear(), v.getMonth(), v.getDate() + Number(s.dataset.wxDay), 12), s);
      return;
    }
    const c = a.closest("[data-wx-open]");
    c && vs(Date.now(), c);
  };
  pl.addEventListener("click", (a) => wi(a.target)), pl.addEventListener("keydown", (a) => {
    (a.key === "Enter" || a.key === " ") && a.target.matches("[data-wx-day],[data-wx-open]") && (a.preventDefault(), wi(a.target));
  });
  const Aa = i("wxDialog"), zn = i("wxGraph"), xi = i("wxGraphWrap");
  let vn = Date.now(), qo = null, Er = !1, Wo = null;
  function vs(a, s) {
    const c = uo();
    qo = s || null, vn = Math.max(c.start, Math.min(c.end - ta, a)), ms.delete("dialog"), Ar.delete("scrub"), Aa.classList.add("open"), Aa.setAttribute("aria-hidden", "false"), bs(), Fa == null || Fa.observe(Aa.querySelector("canvas[data-wx-strip]")), zn.focus({ preventScroll: !0 }), ba();
  }
  function Xi() {
    var a;
    Aa.classList.remove("open"), Aa.setAttribute("aria-hidden", "true"), Fa == null || Fa.unobserve(Aa.querySelector("canvas[data-wx-strip]")), (a = qo == null ? void 0 : qo.focus) == null || a.call(qo, { preventScroll: !0 }), qo = null;
  }
  function bs() {
    if (!Aa.classList.contains("open")) return;
    const a = uo();
    i("wxGraphDays").innerHTML = a.days.map((s) => "<span>" + Ut(Ql(s.start)) + "</span>").join(""), td(a), ws(a), $i(Aa);
  }
  function ws(a = uo()) {
    const s = ll(a, vn), c = we == null ? void 0 : we[tn.weather], v = (c == null ? void 0 : c.attributes) || {}, C = v.temperature_unit || "°", R = Math.abs(vn - Date.now()) < ta / 2, t = R && c ? c.state : s.cond, e = R && Number.isFinite(Number(v.temperature)) ? Math.round(Number(v.temperature)) : Number.isFinite(s.temp) ? Math.round(s.temp) : "—", n = cs[t] || (t ? t.charAt(0).toUpperCase() + t.slice(1) : "—"), r = R ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(vn / ta) * ta)), d = s.day, u = (Number.isFinite(d.hi) ? "H " + Math.round(d.hi) + "°" : "") + (Number.isFinite(d.lo) ? "&ensp; L " + Math.round(d.lo) + "°" : "");
    i("wxDialogNow").innerHTML = '<div class="wxCurrent">' + Ki(t, !0, R, Ae, "scrub", R ? void 0 : s.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Ut(String(e)) + '</span><span class="wxUnit">' + Ut(C) + '</span></div><div class="wxPlace">' + Ut(r) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Ut(n) + "</div>" + (u ? '<div class="wxRange">' + u + "</div>" : "") + "</div>", vi(i("wxDialogNow")), zn.setAttribute("aria-valuenow", String(Math.round((vn - a.start) / ta))), zn.setAttribute("aria-valuetext", r + ", " + n.toLowerCase() + ", " + e + "°"), xs(a), ba();
  }
  function td(a = uo()) {
    const s = i("wxGraphLine"), c = xi.clientWidth, v = xi.clientHeight;
    if (!c || !v) return;
    const C = [];
    for (let T = a.start; T <= a.end; T += ta) {
      const A = ll(a, T).temp;
      Number.isFinite(A) && C.push([sl(a, T) * c, A]);
    }
    if (s.setAttribute("viewBox", "0 0 " + c + " " + v), C.length < 2) {
      s.innerHTML = '<g id="wxCursorMark"></g>', Wo = null, xs(a);
      return;
    }
    const R = C.map((T) => T[1]), t = Math.min(...R), e = Math.max(...R), n = Math.max(4, e - t), r = Ae !== "smooth", d = (T) => r ? Math.round(T / 2) * 2 : Math.round(T * 10) / 10;
    Wo = (T) => v * 0.84 - (T - t) / n * v * 0.62;
    const u = Oo(), p = Ae === "onebit" ? u.paper : "#ffffff", g = Ae === "onebit" ? u.ink : "rgba(0,0,0,.28)", m = "M" + C.map((T) => d(T[0]) + " " + d(Wo(T[1]))).join(" L"), M = (T, A) => {
      const H = C.find((I) => I[1] === T);
      return '<text class="wxLineLabel" x="' + d(Math.min(c - 14, Math.max(14, H[0]))) + '" y="' + d(Wo(T) + (A ? 18 : -10)) + '" fill="' + p + '" stroke="' + g + '">' + Math.round(T) + "°</text>";
    };
    s.setAttribute("shape-rendering", r ? "crispEdges" : "auto"), s.innerHTML = '<path d="' + m + '" fill="none" stroke="' + g + '" stroke-width="' + (r ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + m + '" fill="none" stroke="' + p + '" stroke-width="2" stroke-linejoin="round"/>' + M(e, !1) + M(t, !0) + '<g id="wxCursorMark"></g>', xs(a);
  }
  function xs(a = uo()) {
    const s = i("wxGraphLine").querySelector("#wxCursorMark");
    if (!s) return;
    const c = xi.clientWidth, v = xi.clientHeight, C = Ae !== "smooth", R = (p) => C ? Math.round(p / 2) * 2 : p, t = R(sl(a, vn) * c), e = ll(a, vn).temp, n = Oo(), r = Ae === "onebit" ? n.paper : "#ffffff", d = Ae === "onebit" ? n.ink : "rgba(0,0,0,.28)", u = Wo && Number.isFinite(e) ? R(Wo(e)) : null;
    s.innerHTML = '<rect x="' + (t - 2) + '" y="0" width="4" height="' + v + '" fill="' + d + '"/><rect x="' + (t - 1) + '" y="0" width="2" height="' + v + '" fill="' + r + '"/>' + (u == null ? "" : C ? '<rect x="' + (t - 5) + '" y="' + (u - 5) + '" width="10" height="10" fill="' + r + '" stroke="' + d + '" stroke-width="2"/>' : '<circle cx="' + t + '" cy="' + u + '" r="6" fill="' + r + '" stroke="' + d + '" stroke-width="2"/>');
  }
  const ys = (a) => {
    const s = xi.getBoundingClientRect();
    s.width && (vn = Hd(uo(), (a - s.left) / s.width), ws());
  };
  zn.addEventListener("pointerdown", (a) => {
    if (a.button === 0) {
      Er = !0;
      try {
        zn.setPointerCapture(a.pointerId);
      } catch {
      }
      ys(a.clientX);
    }
  }), zn.addEventListener("pointermove", (a) => {
    Er && ys(a.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((a) => zn.addEventListener(a, () => {
    Er = !1;
  })), zn.addEventListener("keydown", (a) => {
    const s = uo(), c = { ArrowLeft: -ta, ArrowRight: ta, ArrowDown: -ta, ArrowUp: ta, PageUp: -24 * ta, PageDown: 24 * ta }[a.key];
    c ? (a.preventDefault(), vn = Math.max(s.start, Math.min(s.end - ta, Math.round(vn / ta) * ta + c)), ws(s)) : (a.key === "Home" || a.key === "End") && (a.preventDefault(), vn = a.key === "Home" ? s.start : s.end - ta, ws(s));
  }), i("wxDialogClose").addEventListener("click", Xi), Aa.addEventListener("click", (a) => {
    a.target === Aa && Xi();
  }), Aa.addEventListener("keydown", (a) => {
    a.key === "Escape" && (a.preventDefault(), Xi());
  }), gs(), (Ls = (vl = window.matchMedia) == null ? void 0 : (bl = vl.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || Ls.call(bl, "change", () => {
    ba(), vi(o);
  }), ba();
  const ul = i("tvNav");
  l.fullscreenSupported || (ul.hidden = !0), ul.addEventListener("click", () => l.toggleFullscreen()), o.addEventListener("keydown", (a) => {
    !Bt.workout.classList.contains("active") || mr.classList.contains("active") || a.target.closest("input,select,textarea,.holdEnd") || (a.key === "MediaPlayPause" || a.key === " " && !a.target.closest("button") ? (a.preventDefault(), Xr.click()) : a.key === "MediaTrackNext" ? (a.preventDefault(), i("skipExercise").click()) : a.key === "MediaTrackPrevious" && (a.preventDefault(), i("restartSegment").click()));
  }), o.querySelectorAll("[data-rounds-step]").forEach((a) => a.addEventListener("click", () => {
    const s = Math.max(1, Math.min(10, (Number(zt.value) || 1) + Number(a.dataset.roundsStep)));
    String(s) !== zt.value && (zt.value = s, zt.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [P, W, B, zt].forEach((a) => a.addEventListener("input", () => {
    const s = Xt[oe];
    s && (s.total = Number(P.value), s.work = Number(W.value), s.rest = Number(B.value)), ke();
  })), it.addEventListener("click", es), Ht.addEventListener("click", () => E("settings")), i("settingsBack").addEventListener("click", es), Xr.addEventListener("click", () => kn(!At)), Ee(oe), Pe(), He(), Vn(), i("healthHelpOpen").addEventListener("click", () => o.querySelector(".tab[data-pane=helpPane]").click()), Po(i("resetStats"), i("resetStatsFill"), 1500, () => {
    Nt.history = [], Nt.checkins = [], Yt = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    ja(), Fo(), He(), Pe(), Vn(), fe(), ue("Stats reset");
  });
  const fl = i("morningTime"), hl = i("eveningTime"), ks = i("checkinAutoOpen");
  fl.value = Nn().morning, hl.value = Nn().evening, ks.classList.toggle("on", Qt().checkinAutoOpen !== !1), [["morningTime", fl], ["eveningTime", hl]].forEach(([a, s]) => s.addEventListener("change", () => {
    s.value && (aa(a, s.value), fe());
  })), ks.addEventListener("click", () => {
    const a = Qt().checkinAutoOpen === !1;
    ks.classList.toggle("on", a), aa("checkinAutoOpen", a);
  }), setTimeout(_t, 800);
  const ed = i("checkinNotify"), Ms = i("checkinNotifyTarget"), ml = i("checkinNotifyStatus"), Fd = ml.textContent;
  function _r() {
    const a = l.notifyServices(), s = a.filter((C) => C.startsWith("mobile_app_")), c = s.length ? s : a, v = (C) => C.replace(/^mobile_app_/, "").replace(/_/g, " ");
    Ms.innerHTML = c.map((C) => '<option value="' + Ut(C) + '">' + Ut(v(C)) + "</option>").join(""), !Qt().notifyTarget && c[0] && (Qt().notifyTarget = c[0]), Ms.value = Qt().notifyTarget || "";
  }
  function Dr() {
    const a = !!Qt().notifyOn;
    ed.classList.toggle("on", a), i("checkinNotifyTargetRow").hidden = !a;
    const s = Nn();
    ml.textContent = a ? "Sends at " + s.morning + " and " + s.evening : Fd;
  }
  async function gl() {
    const a = !!Qt().notifyOn;
    try {
      return await l.setReminderAutomation(a ? { target: Qt().notifyTarget, times: Nn() } : null), !0;
    } catch {
      return ue("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  ed.addEventListener("click", async () => {
    const a = !Qt().notifyOn;
    if (a && (_r(), !Qt().notifyTarget)) {
      ue("Install the Companion app on your phone first");
      return;
    }
    Qt().notifyOn = a, Dr(), await gl() ? (ja(), ue(a ? "Check-in notifications on" : "Check-in notifications off")) : (Qt().notifyOn = !a, Dr());
  }), Ms.addEventListener("change", () => {
    aa("notifyTarget", Ms.value), Qt().notifyOn && gl();
  }), [fl, hl].forEach((a) => a.addEventListener("change", () => {
    Dr(), Qt().notifyOn && gl();
  })), _r(), Dr();
  let Ss = null;
  function Cs() {
    Ss || (Ss = setTimeout(() => {
      Ss = null, Vn();
    }, 3e4));
  }
  return {
    updateStates(a) {
      var c, v;
      const s = !we || we[tn.weather] !== a[tn.weather] || ((c = we["sun.sun"]) == null ? void 0 : c.state) !== ((v = a["sun.sun"]) == null ? void 0 : v.state);
      we = a, tl(a), zl(a), s && gs(), Date.now() - Gl > 60 * 60 * 1e3 && al(), Cs();
    },
    applyRemoteData(a) {
      if (a && (Array.isArray(a.history) && (Nt.history = a.history, Fo()), Array.isArray(a.history) && Vn(), Array.isArray(a.checkins) && (Nt.checkins = a.checkins.map(or), fe(), Pe(), He(), Fo(), Vn()), a.profiles && !oa.classList.contains("open") && !Wn)) {
        const s = ee(a);
        Object.keys(Xt).forEach((c) => delete Xt[c]), Object.assign(Xt, s.profiles), Nt.order = s.order, Xt[oe] || (oe = Nt.order[0]), Ge(), Ee(oe);
      }
    },
    suspend() {
      x = !1;
    },
    resume() {
      x || (x = !0, li || (li = requestAnimationFrame(Yr)), be || (be = requestAnimationFrame(Zr)), ba(), Qa(o.querySelector(".tab.active"), !1));
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
}, Br = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, la = "made_up_", Vo = (o) => {
  var l;
  return (l = String(o).split(".")[1]) == null ? void 0 : l.startsWith(la);
}, od = (o) => o.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function bc(o) {
  const l = o.getHours() + o.getMinutes() / 60, i = Math.max(0, Math.sin((l - 7) / 13 * Math.PI));
  return 2.4 * i * i;
}
function Fu(o) {
  const l = new Date(o.getFullYear(), o.getMonth(), o.getDate());
  let i = 0;
  for (let f = +l; f < +o; f += 10 * 60 * 1e3) i += bc(new Date(f)) / 6;
  return i;
}
function Sc(o = /* @__PURE__ */ new Date()) {
  const l = [];
  for (let i = 0; i <= 96; i++) {
    const f = +o - (96 - i) * 15 * 60 * 1e3;
    l.push([f, bc(new Date(f))]);
  }
  return l;
}
function Ou({ onChange: o }) {
  const l = {}, i = {}, f = (Q, K, ht, dt) => {
    l[Q] = { entity_id: Q, state: ht, attributes: dt, last_changed: new Date(Date.now() - 18e6).toISOString() }, i[Q] = K;
  }, b = (Q, K, ht) => {
    const dt = l[Q], bt = K ?? dt.state;
    l[Q] = { ...dt, state: bt, attributes: { ...dt.attributes, ...ht }, last_changed: bt === dt.state ? dt.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, x = (Q, K, ht, dt) => f("binary_sensor." + la + (Q ? Q + "_" : "") + od(K), Q, dt ? "on" : "off", { friendly_name: K, device_class: ht });
  Object.entries(Hu).forEach(([Q, K]) => {
    if (K.temperature != null && f("sensor." + la + Q + "_temperature", Q, String(K.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), K.humidity != null && f("sensor." + la + Q + "_humidity", Q, String(K.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), K.vacuum && f("vacuum." + la + "robot", Q, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), K.climate && f("climate." + la + Q, Q, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: K.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), K.cover) {
      const [ht, dt, bt, ot] = K.cover;
      f("cover." + la + Q + "_" + od(ht), Q, bt ? "open" : "closed", { friendly_name: ht, device_class: dt, current_position: bt, ...ot != null ? { current_tilt_position: ot } : {} });
    }
    if (K.humidifier && f("humidifier." + la + Q, Q, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: K.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), K.solar && (f("sensor." + la + Q + "_solar_power", Q, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), f("sensor." + la + Q + "_solar_today", Q, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), K.valve && f("valve." + la + Q + "_" + od(K.valve), Q, "closed", { friendly_name: K.valve, device_class: "water" }), K.door && x(Q, K.door, "door", K.doorOpen), K.window && x(Q, K.window, "window", !1), K.motion && x(Q, K.motion, "motion", !1), K.plant) {
      const [ht, dt, bt, ot, nt] = K.plant, at = la + od(ht), D = (st, Bt, it, Ht, E) => f("sensor." + at + "_" + st, Q, String(it), { friendly_name: Bt, device_class: E, state_class: "measurement", unit_of_measurement: Ht, plant_low: it < Br[st][0], plant_high: it > Br[st][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[st] });
      D("moisture", "Moisture", dt, "%", "moisture"), D("light", "Light", bt, "lx", "illuminance"), D("temperature", "Temperature", ot, "°C", "temperature"), D("fertility", "Fertility", nt, "µS/cm", "conductivity");
      const xt = Object.entries({ moisture: dt, light: bt, temperature: ot, fertility: nt }).filter(([st, Bt]) => Bt < Br[st][0] || Bt > Br[st][1]).map(([st, Bt]) => st + (Bt < Br[st][0] ? " low" : " high"));
      f("plant." + at, Q, xt.length ? "problem" : "ok", { friendly_name: ht, moisture: dt, brightness: bt, temperature: ot, conductivity: nt, problem: xt.join(", ") || "none" });
    }
  }), f("alarm_control_panel." + la + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), x(null, "Front door", "door", !1), x(null, "Smoke alarm", "smoke", !1), f("sensor." + la + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const k = {}, _ = {};
  let O = null;
  function S() {
    const Q = /* @__PURE__ */ new Date();
    Object.keys(l).forEach((K) => {
      K.endsWith("_solar_power") && (l[K] = { ...l[K], state: bc(Q).toFixed(2) }), K.endsWith("_solar_today") && (l[K] = { ...l[K], state: Fu(Q).toFixed(1) });
    });
  }
  S();
  let V = 0;
  function q() {
    let Q = !1;
    const K = ++V % 10 === 0, ht = (ot, nt, at) => {
      b(ot, nt, at), Q = !0;
    };
    Object.entries(k).forEach(([ot, nt]) => {
      const at = l[ot].attributes.current_position, D = at < nt ? Math.min(nt, at + 10) : Math.max(nt, at - 10);
      D === nt && delete k[ot], ht(ot, D === nt ? D === 0 ? "closed" : "open" : nt > at ? "opening" : "closing", { current_position: D });
    }), Object.entries(_).forEach(([ot, nt]) => {
      const at = l[ot].attributes.current_tilt_position, D = at < nt ? Math.min(nt, at + 25) : Math.max(nt, at - 25);
      D === nt && delete _[ot], ht(ot, null, { current_tilt_position: D });
    }), Object.keys(l).filter((ot) => ot.startsWith("climate.")).forEach((ot) => {
      const nt = l[ot], at = nt.attributes, D = at.current_temperature, xt = (nt.state === "heat" || nt.state === "auto") && D < at.temperature - 0.05, st = (nt.state === "cool" || nt.state === "auto") && D > at.temperature + 0.05, Bt = nt.state === "off" ? "off" : xt ? "heating" : st ? "cooling" : "idle", it = K ? Math.round((D + (xt ? 0.1 : st ? -0.1 : 0)) * 10) / 10 : D;
      (it !== D || Bt !== at.hvac_action) && ht(ot, null, { current_temperature: it, hvac_action: Bt });
    }), Object.keys(l).filter((ot) => ot.startsWith("humidifier.")).forEach((ot) => {
      const nt = l[ot], at = nt.attributes, D = at.current_humidity, xt = nt.state === "on" && D < at.humidity, st = xt && K ? D + 1 : D, Bt = nt.state !== "on" ? "off" : xt ? "humidifying" : "idle";
      if (st !== D || Bt !== at.action) {
        ht(ot, null, { current_humidity: st, action: Bt });
        const it = "sensor." + la + i[ot] + "_humidity";
        l[it] && ht(it, String(st));
      }
    });
    const dt = l["vacuum." + la + "robot"], bt = dt.attributes;
    dt.state === "cleaning" && K && ht(dt.entity_id, null, { battery_level: Math.max(5, bt.battery_level - 1) }), dt.state === "returning" && ht(dt.entity_id, "docked", {}), dt.state === "docked" && bt.battery_level < 100 && ht(dt.entity_id, null, { battery_level: Math.min(100, bt.battery_level + 2) }), O && Date.now() - O.at > 5e3 && (ht("alarm_control_panel." + la + "house", "armed_" + O.mode, {}), O = null), Q && o();
  }
  const j = setInterval(q, 1e3), Z = setInterval(() => {
    S(), o();
  }, 60 * 1e3);
  function pt(Q, K, ht) {
    const dt = ht == null ? void 0 : ht.entity_id;
    if (!l[dt]) return !1;
    const bt = l[dt], ot = bt.attributes, nt = (at, D) => b(dt, at, D);
    if (Q === "climate" && (K === "set_temperature" && nt(null, { temperature: Math.max(ot.min_temp, Math.min(ot.max_temp, ht.temperature)) }), K === "set_hvac_mode" && nt(ht.hvac_mode, ht.hvac_mode === "off" ? { hvac_action: "off" } : {}), K === "toggle" && nt(bt.state === "off" ? "heat" : "off", bt.state === "off" ? {} : { hvac_action: "off" })), Q === "cover") {
      const at = K === "open_cover" ? 100 : K === "close_cover" ? 0 : K === "set_cover_position" ? ht.position : K === "toggle" ? ot.current_position > 0 ? 0 : 100 : null;
      K === "stop_cover" && (delete k[dt], delete _[dt], nt(ot.current_position === 0 ? "closed" : "open")), at != null && at !== ot.current_position && (k[dt] = at, nt(at > ot.current_position ? "opening" : "closing"));
      const D = K === "open_cover_tilt" ? 100 : K === "close_cover_tilt" ? 0 : K === "set_cover_tilt_position" ? ht.tilt_position : null;
      K === "stop_cover_tilt" && delete _[dt], D != null && ot.current_tilt_position != null && D !== ot.current_tilt_position && (_[dt] = D);
    }
    if (Q === "humidifier" && (K === "set_humidity" && nt(null, { humidity: Math.max(ot.min_humidity, Math.min(ot.max_humidity, ht.humidity)) }), K === "set_mode" && nt(null, { mode: ht.mode }), K === "turn_on" || K === "turn_off" || K === "toggle")) {
      const at = K === "turn_on" || K === "toggle" && bt.state !== "on";
      nt(at ? "on" : "off", { action: at ? "idle" : "off" });
    }
    if (Q === "vacuum" && (K === "start" && nt("cleaning", { rooms: ht.rooms || ot.rooms }), K === "pause" && nt("paused"), K === "return_to_base" && nt("returning", { rooms: [] }), K === "locate" && nt(null, { located: Date.now() }), K === "set_rooms" && nt(null, { rooms: ht.rooms })), Q === "valve") {
      const at = K === "open_valve" || K === "toggle" && bt.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(K) && nt(at ? "open" : "closed");
    }
    if (Q === "alarm_control_panel") {
      K === "alarm_disarm" && (O = null, nt("disarmed", { changed_by: "Matt" }));
      const at = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[K];
      at && (O = { mode: at, at: Date.now() }, nt("arming", { changed_by: "Matt" }));
    }
    return o(), !0;
  }
  function et(Q, { madeUp: K = !0 } = {}) {
    const ht = K ? l : {}, dt = (Q == null ? void 0 : Q.states) || {}, bt = (Q == null ? void 0 : Q.entities) || {}, ot = (Q == null ? void 0 : Q.devices) || {}, nt = (lt) => {
      var mt;
      const ut = bt[lt];
      return ut && (ut.area_id || ut.device_id && ((mt = ot[ut.device_id]) == null ? void 0 : mt.area_id)) || null;
    }, at = (lt) => {
      const ut = bt[lt];
      return dt[lt] && dt[lt].state !== "unavailable" && !(ut != null && ut.hidden) && !(ut != null && ut.entity_category);
    }, D = {};
    Object.keys(dt).forEach((lt) => {
      const ut = nt(lt);
      ut && at(lt) && (D[ut] || (D[ut] = [])).push(lt);
    });
    const xt = { ...dt, ...ht }, st = (lt) => {
      var ut, mt;
      return (mt = (ut = xt[lt]) == null ? void 0 : ut.attributes) == null ? void 0 : mt.device_class;
    }, Bt = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], it = Object.keys(dt).filter((lt) => lt.startsWith("vacuum.") && at(lt)), Ht = Object.values((Q == null ? void 0 : Q.areas) || {}).filter((lt) => !Iu.has(lt.area_id)).map((lt) => {
      const ut = lt.area_id, mt = D[ut] || [], wt = (Wt) => mt.filter((Kt) => Kt.startsWith(Wt + ".")), kt = (Wt) => wt("sensor").filter((Kt) => st(Kt) === Wt), Ot = (Wt) => Object.keys(ht).filter((Kt) => i[Kt] === ut && Wt(Kt)), zt = (Wt, Kt) => Wt.length ? Wt : Ot(Kt), da = zt(kt("temperature"), (Wt) => Wt.endsWith(ut + "_temperature")), qt = zt(kt("humidity"), (Wt) => Wt.endsWith(ut + "_humidity")), Cn = kt("power").filter((Wt) => /^(W|kW)$/.test(xt[Wt].attributes.unit_of_measurement || "")), pn = wt("binary_sensor").filter((Wt) => st(Wt) === "moisture"), Tn = zt(wt("plant"), (Wt) => Wt.startsWith("plant.")).map((Wt) => ({ id: Wt, readings: Ot((Kt) => Kt.startsWith("sensor." + Wt.split(".")[1] + "_")) })), Ie = [...wt("binary_sensor").filter((Wt) => Bt.includes(st(Wt))), ...Ot((Wt) => Wt.startsWith("binary_sensor."))];
      return {
        id: ut,
        name: lt.name,
        icon: lt.icon,
        readings: [...da.slice(0, 1), ...qt.slice(0, 1), ...pn],
        power: Cn.length ? Cn.reduce((Wt, Kt) => Wt + Number(xt[Kt].state) * (xt[Kt].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: wt("switch"),
        lights: wt("light"),
        actions: [...wt("light"), ...zt(wt("climate"), (Wt) => Wt.startsWith("climate.")), ...zt(wt("cover"), (Wt) => Wt.startsWith("cover.")), ...zt(wt("humidifier"), (Wt) => Wt.startsWith("humidifier.")), ...zt(wt("valve"), (Wt) => Wt.startsWith("valve.")), ...wt("media_player"), ...wt("vacuum"), ...it.length ? [] : Ot((Wt) => Wt.startsWith("vacuum."))],
        solar: Ot((Wt) => Wt.includes("_solar_")),
        plants: Tn,
        openings: Ie,
        alerts: [...pn, ...Ie].filter((Wt) => {
          var Kt;
          return ((Kt = xt[Wt]) == null ? void 0 : Kt.state) === "on";
        })
      };
    }).filter((lt) => lt.readings.length || lt.plugs.length || lt.actions.length || lt.solar.length || lt.plants.length), E = Object.keys(dt).find((lt) => /^sensor\..*(p1_meter_power|grid_power)$/.test(lt) && dt[lt].state !== "unavailable") || null, P = (lt) => Object.keys(dt).filter((ut) => ut.startsWith(lt + ".") && at(ut)), W = P("alarm_control_panel"), B = it.length ? it : K ? ["vacuum." + la + "robot"] : [];
    return {
      states: xt,
      rooms: Ht,
      grid: E,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (lt) => ht[lt] ? i[lt] : nt(lt),
      vacuums: B,
      homeVacuums: B.filter((lt) => !Ht.some((ut) => ut.actions.includes(lt))),
      security: {
        alarms: W.length ? W : K ? ["alarm_control_panel." + la + "house"] : [],
        locks: P("lock"),
        openings: [...Object.keys(ht).filter((lt) => lt.startsWith("binary_sensor.")), ...K ? ["sensor." + la + "doorbell"] : []]
      }
    };
  }
  return { model: et, call: pt, stop() {
    clearInterval(j), clearInterval(Z);
  } };
}
const Ti = (o) => o < 0 ? 0 : o > 1 ? 1 : o, pc = (o) => {
  const l = String(o || "#000000").trim().replace("#", ""), i = l.length === 3 ? l.split("").map((f) => f + f).join("") : l;
  return [0, 2, 4].map((f) => parseInt(i.slice(f, f + 2), 16) || 0);
}, qu = (o) => "#" + o.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), Cc = {}, Yn = (o, l, i) => {
  const f = o + l + i;
  return Cc[f] || (Cc[f] = qu(pc(o).map((b, x) => b + (pc(l)[x] - b) * i)));
}, Tc = {}, md = (o) => Tc[o] || (Tc[o] = pc(o));
function Wu(o) {
  const l = { clear: [o.skyClearDay, o.skyClearNight], cloudy: [o.skyCloudyDay, o.skyCloudyNight], rain: [o.skyRainDay, o.skyRainNight], snow: [o.skySnowDay, o.skySnowNight], fog: [o.skyFogDay, o.skyFogNight] };
  return l.partly = [Yn(l.clear[0], l.cloudy[0], 0.12), Yn(l.clear[1], l.cloudy[1], 0.12)], l.storm = [Yn(l.rain[0], "#000000", 0.22), Yn(l.rain[1], "#000000", 0.22)], l;
}
const Vu = [
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
], Si = (o, l) => (Vu[(l & 7) * 8 + (o & 7)] + 0.5) / 64, Ep = 1, _p = 2, Dp = 3, Bp = 4, Ps = 5, wd = 6, uc = 7, Rp = 8, Lc = (o, l) => l <= 0.6665 && ((o - 0.5) * (o - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (o - 0.25) * (o - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (o - 0.791) * (o - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || o >= 0.25 && o <= 0.791 && l >= 0.416), ju = (o, l, i) => {
  let f = !1;
  for (let b = 0, x = o.length - 1; b < o.length; x = b++) {
    const k = o[b], _ = o[x];
    k[1] > i != _[1] > i && l < (_[0] - k[0]) * (i - k[1]) / (_[1] - k[1]) + k[0] && (f = !f);
  }
  return f;
};
function zu(o, l, i, f, { oneBit: b, ink: x, paper: k, snowInk: _ }) {
  const O = new Uint8ClampedArray(i * f * 4), S = md(x), V = md(k);
  for (let q = 0; q < f; q++) for (let j = 0; j < i; j++) {
    const Z = q * i + j, pt = l[Z];
    if (o[Z] == null) continue;
    let et = md(o[Z]);
    if (b) {
      let Q;
      pt === Bp || pt === Rp ? Q = !0 : pt === Ps ? Q = _ : pt === uc || pt === wd ? Q = !1 : Q = Math.round((0.2126 * et[0] + 0.7152 * et[1] + 0.0722 * et[2]) / 255 * 4) / 4 <= Si(j, q), (pt === Ep || pt === _p || pt === Dp || pt === wd) && (j > 0 && l[Z - 1] !== pt || j < i - 1 && l[Z + 1] !== pt || q > 0 && l[Z - i] !== pt || q < f - 1 && l[Z + i] !== pt) && (Q = !0), et = Q ? S : V;
    }
    O[Z * 4] = et[0], O[Z * 4 + 1] = et[1], O[Z * 4 + 2] = et[2], O[Z * 4 + 3] = 255;
  }
  return { w: i, h: f, data: O };
}
const Gu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Uu = (o) => Md(o, !1).split("/")[0], Wd = (o) => () => {
  o |= 0, o = o + 1831565813 | 0;
  let l = Math.imul(o ^ o >>> 15, 1 | o);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, Yu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Zu = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Ku = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", $u = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Xu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Ju = [".##", "##.", ".#.", "#.."];
function Pp(o, { width: l, height: i, colors: f, wave: b = 0.38, soft: x = 6, glow: k = 0.6, columns: _ = 6 }) {
  const O = { ...cn, dawn: "#e5a77e", ...f }, S = Wu(O), V = l, q = i, j = V / _, Z = j / 2, pt = Math.PI * 2, et = o.length ? o : [{ cond: "cloudy", night: !1 }], Q = [...Array(_ * 2)].map((bt, ot) => {
    const nt = et[Math.min(ot, et.length - 1)], at = Uu(nt.cond), D = ot % 2 === 1;
    return { cond: nt.cond, k: at, night: D, sky: S[at][D ? 1 : 0], cover: Gu[at] };
  }), K = (bt) => q * (0.5 - b * Math.cos(pt * (bt / j - 0.25)));
  return { C: O, S: Q, W: V, H: q, cw: j, sw: Z, TAU: pt, yb: K, side: (bt, ot, nt) => {
    const at = (bt ? K(ot) - nt : nt - K(ot)) / Math.max(3, x * 1.4) + 0.5;
    return at <= 0 ? 0 : at >= 1 ? 1 : at;
  }, glowAt: (bt) => {
    const ot = ((bt / j - 0.25) % 1 + 1) % 1, nt = Math.max(0, Math.min(_ - 1, Math.round(bt / j - 0.25))), at = Math.max(0, Math.min(_ - 1, Math.round(bt / j - 0.75))), D = 1 - (Q[2 * nt].cover + Q[2 * at + 1].cover) / 2, xt = Math.sin(Math.PI * Math.min(1, Math.max(0, K(bt) / q)));
    return { c: ot < 0.5 ? O.dusk : O.dawn, a: k * (0.2 + 0.8 * D) * xt * xt };
  }, soft: x, tw: j * 0.3, sy: q / 90 };
}
function Np(o, { clock: l = 0, ambient: i = !1, seed: f = 1 }) {
  const { S: b, sw: x, side: k, C: _, TAU: O, sy: S, H: V } = o, q = l, j = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  b.forEach((et, Q) => {
    const K = Wd(f * 977 + Q * 131 + 7), ht = (Q + 0.5) * x, dt = et.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[et.k] : 0;
    for (let bt = 0; bt < dt; bt++) {
      const ot = ht + (K() - 0.5) * x * 1.6, nt = (6 + K() * 76) * S, at = K() < 0.35, D = 1.8 + K() * 1.6, xt = k(!0, ot, nt) * (at ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(O * q / 2600 + bt * 1.7 + Q) : 1);
      xt >= 0.03 && j.stars.push({ x: ot, y: nt, big: at, size: D, o: xt });
    }
    if (!et.night && (et.k === "clear" || et.k === "partly")) {
      const bt = ht + (K() - 0.5) * x * 0.3, ot = Math.min(15, x * 0.29);
      j.suns.push({ x: bt, y: 32 * S, rad: ot, halo: ot * 2.8 * (i ? 1 + 0.07 * Math.sin(O * q / 3600 + Q) : 1) });
    }
    if (et.night && (et.k === "clear" || et.k === "partly")) {
      const bt = Math.min(0.78, x * 0.55 / 34), ot = ht - 23 * bt + (K() - 0.5) * x * 0.2;
      j.moons.push({ x: ot + 23 * bt, y: (4 + (i ? 0.8 * Math.sin(O * q / 5200 + Q) : 0)) * S + 23 * bt, d: 46 * bt });
    }
  });
  const Z = Math.max(56, Math.min(100, V * 0.45)), pt = Math.max(1, x / (Z * 2.4));
  return b.forEach((et, Q) => {
    const K = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[et.k];
    if (!K) return;
    const ht = et.k === "partly" ? 1 : Math.round(K * pt), dt = Wd(f * 577 + Q * 71 + 3), bt = (Q + 0.5) * x, ot = et.k === "rain" || et.k === "storm" || et.night ? _.cloudNight : _.cloudDay, nt = et.night ? 0.82 : et.k === "storm" ? 0.75 : 1;
    for (let at = 0; at < ht; at++) {
      const D = Z / 46 * (et.k === "partly" ? 1 : 0.8 + dt() * 0.4), xt = bt + (et.k === "partly" ? x * 0.12 : ((at + 0.5) / ht - 0.5) * x * 0.95 + (dt() - 0.5) * x * 0.5 / ht), st = (et.k === "partly" ? 40 : 6 + dt() * 26) * S, Bt = i ? 2.5 * Math.sin(O * q / 9e3 + Q * 1.3 + at * 2.1) : 0, it = i ? 0.9 * Math.sin(O * q / 6100 + Q + at) : 0;
      j.clouds.push({ x: xt - 23 * D + Bt, y: st - 15.33 * D + it, w: 46 * D, h: 30.66 * D, fill: ot, o: nt * (ht > 1 && at === 0 ? 0.85 : 1) });
    }
  }), b.forEach((et, Q) => {
    const K = Wd(f * 313 + Q * 29 + 11), ht = (Q + 0.5) * x, dt = et.cond === "pouring" ? 16 : et.cond === "rainy" || et.cond === "hail" ? 9 : et.cond === "lightning-rainy" ? 12 : et.cond === "snowy-rainy" ? 5 : 0;
    for (let ot = 0; ot < dt; ot++) {
      let nt = ht + (K() - 0.5) * x * 1.05, at = 44 + K() * 36, D = 1;
      if (i) {
        const st = ((at - 44 + q * 0.04) % 36 + 36) % 36;
        nt -= 0.21 * (st - (at - 44)), at = 44 + st, D = Math.min(1, st / 6, (36 - st) / 6);
      }
      at *= S;
      const xt = k(et.night, nt, at) * D;
      xt >= 0.05 && j.drops.push({ x: nt, y: at, o: xt });
    }
    const bt = et.cond === "snowy" ? 11 : et.cond === "snowy-rainy" ? 6 : 0;
    for (let ot = 0; ot < bt; ot++) {
      let nt = ht + (K() - 0.5) * x * 1.05, at = 40 + K() * 44, D = 1;
      if (i) {
        const st = ((at - 40 + q * 9e-3) % 44 + 44) % 44;
        at = 40 + st, nt += 1.6 * Math.sin(O * q / 2800 + ot * 1.9 + Q), D = Math.min(1, st / 6, (44 - st) / 6);
      }
      at *= S;
      const xt = k(et.night, nt, at) * D;
      xt >= 0.05 && j.flakes.push({ x: nt, y: at, o: xt });
    }
    if (et.k === "fog") {
      const ot = et.night ? "#c8ccd6" : "#ffffff", nt = et.night ? 0.28 : 0.62, at = i ? 4 * Math.sin(O * q / 8e3 + Q) : 0;
      for (let D = 0; D < 4; D++) j.fogs.push({ x: ht - x * 0.75 + D % 2 * x * 0.18 + (D % 2 ? at : -at), y: (30 + D * 13) * S, w: x * 1.3, c: ot, a: nt });
    }
    if (et.k === "storm") {
      const ot = (q / 3400 + Q * 0.37) % 1;
      j.bolts.push({ x: ht + (K() - 0.5) * x * 0.3 - 5, y: 36 * S, o: i && !(ot < 0.05 || ot > 0.09 && ot < 0.12) ? 0.8 : 1 });
    }
  }), j;
}
function Qu(o, l, i, f, b, x, k, _) {
  const { S: O, C: S, cw: V, yb: q, glowAt: j, soft: Z, tw: pt, sy: et } = o, Q = new Array(i * f), K = new Uint8Array(i * f), ht = new Uint8Array(i * f), dt = (E, P, W, B, lt) => {
    W == null || E < 0 || P < 0 || E >= i || P >= f || (B >= 1 || B > Si(E + 5, P + 3)) && (Q[P * i + E] = W, K[P * i + E] = lt);
  }, bt = (E, P, W, B) => {
    for (let lt = Math.max(0, Math.floor(P - W) - 1); lt <= Math.min(f - 1, P + W + 1); lt++) for (let ut = Math.max(0, Math.floor(E - W) - 1); ut <= Math.min(i - 1, E + W + 1); ut++) B(ut, lt, ut + 0.5 - E, lt + 0.5 - P);
  }, ot = (E, P, W) => {
    for (let lt = 0; lt < E.length - 1; lt++) {
      const ut = (lt + P) * V;
      if (W < ut - pt / 2) return [E[lt], E[lt], 0];
      if (W <= ut + pt / 2) return [E[lt], E[lt + 1], (W - ut + pt / 2) / pt];
    }
    const B = E[E.length - 1];
    return [B, B, 0];
  }, nt = O.filter((E) => !E.night).map((E) => E.sky), at = O.filter((E) => E.night).map((E) => E.sky), D = Z / x, xt = 16 * et / x;
  for (let E = 0; E < i; E++) {
    const P = (E + 0.5) * b, W = q(P) / x, B = ot(nt, 0.75, P), lt = ot(at, 1.25, P), ut = j(P);
    for (let mt = 0; mt < f; mt++) {
      const wt = Si(E, mt), kt = mt + 0.5 - W, Ot = (D > 0.01 ? Ti(0.5 + kt / D) : kt > 0 ? 1 : 0) > wt;
      let zt = Ot ? B[2] > wt ? B[1] : B[0] : lt[2] > wt ? lt[1] : lt[0];
      (Ot ? Ti(((mt + 0.5) / f - 0.45) / 0.55) * 0.7 : Ti(1 - (mt + 0.5) / (f * 0.55)) * 0.7) > Si(E + 2, mt + 5) && (zt = Ot ? Yn(zt, "#ffffff", 0.18) : Yn(zt, "#000000", 0.25)), Ot && kt >= 0 && kt < xt && ut.a * 1.3 * (1 - kt / xt) > Si(E + 6, mt + 1) && (zt = ut.c), Q[mt * i + E] = zt, ht[mt * i + E] = Ot ? 0 : 1;
    }
  }
  const st = Yn(S.sun, "#ffffff", 0.55), Bt = Yn(S.moon, "#ffffff", 0.6);
  l.stars.forEach((E) => {
    const P = Math.floor(E.x / b), W = Math.floor(E.y / x);
    if (P < 0 || W < 0 || P >= i || W >= f || !ht[W * i + P] || E.o < 0.15) return;
    const B = E.o > 0.45 ? S.star : Yn(S.star, Q[W * i + P], 0.5), lt = E.big && E.o > 0.6 ? Math.floor(E.size / b) : 0;
    dt(P, W, B, 1, uc);
    for (let ut = 1; ut <= lt; ut++) [[P - ut, W], [P + ut, W], [P, W - ut], [P, W + ut]].forEach((mt) => {
      mt[0] >= 0 && mt[1] >= 0 && mt[0] < i && mt[1] < f && ht[mt[1] * i + mt[0]] && dt(mt[0], mt[1], B, 1, uc);
    });
  }), l.suns.forEach((E) => {
    const P = Math.max(1.5, E.rad / b), W = E.x / b, B = E.y / x, lt = E.halo / b * 0.85;
    if (bt(W, B, lt, (ut, mt, wt, kt) => {
      const Ot = Math.sqrt(wt * wt + kt * kt);
      Ot > P && Ot < lt && !ht[mt * i + ut] && dt(ut, mt, st, 0.3 * (1 - (Ot - P) / (lt - P)), 0);
    }), _) {
      const ut = Math.floor(k / 500) % 2, mt = Math.max(1, P * 0.3);
      for (let wt = 0; wt < 8; wt++) if (wt % 2 === ut) for (let kt = P + 1.2; kt < P + 1.2 + mt; kt += 0.7) dt(Math.floor(W + Math.cos(wt * Math.PI / 4) * kt), Math.floor(B + Math.sin(wt * Math.PI / 4) * kt), S.sun, 1, Rp);
    }
    bt(W, B, P, (ut, mt, wt, kt) => {
      wt * wt + kt * kt <= P * P && dt(ut, mt, Ti(((kt / P + 1) / 2 - 0.6) / 0.4) > Si(ut, mt) ? S.sunEdge : S.sun, 1, Ep);
    });
  }), l.moons.forEach((E) => {
    const P = Math.max(1.5, E.d * 0.37 / b), W = E.x / b, B = E.y / x, lt = W + 0.547 * P, ut = B - 0.503 * P, mt = 0.82 * P;
    bt(W, B, P, (wt, kt, Ot, zt) => {
      if (Ot * Ot + zt * zt > P * P) return;
      const da = wt + 0.5 - lt, qt = kt + 0.5 - ut;
      da * da + qt * qt > mt * mt && dt(wt, kt, Ti((zt + P) / (2 * P) * 1.1 - 0.1) > Si(wt, kt) ? S.moon : Bt, 1, _p);
    });
  }), l.clouds.forEach((E) => {
    const P = Math.max(3, E.w / b), W = P * 0.6665, B = E.x / b, lt = E.y / x, ut = Yn(E.fill, "#000000", 0.16);
    for (let mt = Math.max(0, Math.floor(lt) - 1); mt <= Math.min(f - 1, lt + W + 1); mt++) for (let wt = Math.max(0, Math.floor(B) - 1); wt <= Math.min(i - 1, B + P + 1); wt++) {
      const kt = (wt + 0.5 - B) / P, Ot = (mt + 0.5 - lt) / P;
      Lc(kt, Ot) && dt(wt, mt, !Lc(kt, Ot + 1 / P) || Ti((Ot - 0.42) / 0.25) * 0.8 > Si(wt, mt) ? ut : E.fill, E.o, Dp);
    }
  }), l.fogs.forEach((E) => {
    const P = Math.floor(E.y / x), W = Math.max(P, Math.floor((E.y + 6 * et) / x) - 1), B = Math.floor(E.x / b), lt = Math.floor((E.x + E.w) / b);
    for (let ut = P; ut <= W; ut++) for (let mt = B; mt <= lt; mt++) {
      const wt = (mt - B) / Math.max(1, lt - B);
      dt(mt, ut, E.c, E.a * (wt < 0.25 ? wt / 0.25 : wt > 0.75 ? (1 - wt) / 0.25 : 1), 0);
    }
  });
  const it = Math.max(2, Math.round(9 / x));
  l.drops.forEach((E) => {
    const P = E.x / b, W = Math.floor(E.y / x);
    for (let B = 0; B < it; B++) dt(Math.floor(P - 0.208 * B * x / b), W + B, S.rain, E.o, Bp);
  });
  const Ht = Math.max(0, Math.round(4.4 / b / 2.6));
  return l.flakes.forEach((E) => {
    const P = Math.floor(E.x / b), W = Math.floor(E.y / x);
    dt(P, W, S.snow, E.o, Ps);
    for (let B = 1; B <= Ht; B++)
      dt(P - B, W, S.snow, E.o, Ps), dt(P + B, W, S.snow, E.o, Ps), dt(P, W - B, S.snow, E.o, Ps), dt(P, W + B, S.snow, E.o, Ps);
  }), l.bolts.forEach((E) => {
    if (b <= 3.5)
      for (let P = Math.floor(E.y / x); P <= (E.y + 24) / x; P++) for (let W = Math.floor(E.x / b); W <= (E.x + 11) / b; W++)
        ju(Xu, (W + 0.5) * b - E.x, (P + 0.5) * x - E.y) && dt(W, P, S.sun, 1, wd);
    else {
      const P = Math.round(E.x / b), W = Math.round(E.y / x);
      Ju.forEach((B, lt) => B.split("").forEach((ut, mt) => {
        ut === "#" && dt(P + mt, W + lt, S.sun, 1, wd);
      }));
    }
  }), { col: Q, ids: K };
}
function tf(o, l) {
  const i = l.px, f = Math.max(6, Math.round(l.width / i)), b = Math.max(6, Math.round(l.height / i)), x = l.width / f, k = l.height / b, _ = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, O = (Z) => {
    const pt = Pp(Z, l);
    return Qu(pt, Np(pt, { clock: _, ambient: l.ambient, seed: l.seed }), f, b, x, k, _, l.ambient);
  }, S = O(o), V = l.reveal == null ? 1 : Ti(l.reveal);
  let q = S.col, j = S.ids;
  if (V < 1) {
    const Z = l.prev ? O(l.prev) : null, pt = V * (f + 12);
    q = new Array(f * b), j = new Uint8Array(f * b);
    for (let et = 0; et < f * b; et++) {
      const Q = et % f, K = et / f | 0;
      (l.reduce ? V : Ti((pt - Q) / 12)) > Si(Q, K) ? (q[et] = S.col[et], j[et] = S.ids[et]) : Z ? (q[et] = Z.col[et], j[et] = Z.ids[et]) : (q[et] = null, j[et] = 255);
    }
  }
  return zu(q, j, f, b, { oneBit: l.oneBit, ink: l.ink || "#26221e", paper: l.paper || "#fbf9f6", snowInk: !1 });
}
function ef(o, l, i) {
  const f = i.width, b = i.height, x = i.reveal == null ? 1 : Ti(i.reveal), k = (j, Z) => {
    const pt = Pp(Z, i);
    af(j, pt, Np(pt, i));
  };
  if (o.clearRect(0, 0, f, b), x >= 1) {
    k(o, l);
    return;
  }
  if (i.prev && k(o, i.prev), i.reduce) {
    o.save(), o.globalAlpha = x, k(o, l), o.restore();
    return;
  }
  const _ = o.canvas, O = _.__wxOff || (_.__wxOff = document.createElement("canvas"));
  (O.width !== _.width || O.height !== _.height) && (O.width = _.width, O.height = _.height);
  const S = O.getContext("2d");
  S.setTransform(o.getTransform()), S.clearRect(0, 0, f, b), k(S, l);
  const V = x * (f + 64) - 64, q = S.createLinearGradient(V, 0, V + 64, 0);
  q.addColorStop(0, "rgba(0,0,0,1)"), q.addColorStop(1, "rgba(0,0,0,0)"), S.globalCompositeOperation = "destination-in", S.fillStyle = q, S.fillRect(0, 0, f, b), S.globalCompositeOperation = "source-over", o.save(), o.setTransform(1, 0, 0, 1, 0, 0), o.drawImage(O, 0, 0), o.restore();
}
function af(o, l, i) {
  const { W: f, H: b, S: x, C: k, cw: _, yb: O, glowAt: S, soft: V, tw: q, sy: j } = l, Z = o.getTransform().a || 1, pt = (it) => {
    o.shadowColor = it ? "rgba(28,18,8,.22)" : "transparent", o.shadowBlur = it ? 4 * Z : 0, o.shadowOffsetY = it ? 1.5 * Z : 0;
  }, et = (it, Ht) => {
    const E = md(it);
    return "rgba(" + E[0] + "," + E[1] + "," + E[2] + "," + Math.max(0, Math.min(1, Ht)).toFixed(3) + ")";
  }, Q = (it, Ht) => {
    const E = o.createLinearGradient(0, 0, f, 0);
    E.addColorStop(0, it[0]);
    for (let P = 0; P < it.length - 1; P++) {
      const W = (P + Ht) * _, B = (W - q / 2) / f, lt = (W + q / 2) / f;
      B > 0 && B < 1 && E.addColorStop(B, it[P]), lt > 0 && lt < 1 && E.addColorStop(lt, it[P + 1]);
    }
    return E.addColorStop(1, it[it.length - 1]), E;
  }, K = Math.max(24, Math.ceil(f / 4)), ht = (it, Ht) => {
    o.beginPath();
    for (let E = 0; E <= K; E++) {
      const P = f * E / K, W = it == null ? 0 : O(P) + it;
      E ? o.lineTo(P, W) : o.moveTo(P, W);
    }
    for (let E = K; E >= 0; E--) {
      const P = f * E / K;
      o.lineTo(P, O(P) + Ht);
    }
    o.closePath(), o.fill();
  };
  o.save(), o.fillStyle = Q(x.filter((it) => !it.night).map((it) => it.sky), 0.75), o.fillRect(0, 0, f, b);
  const dt = o.createLinearGradient(0, 0, f, 0);
  for (let it = 0; it <= 64; it++) {
    const Ht = S(f * it / 64);
    dt.addColorStop(it / 64, et(Ht.c, Math.min(1, Ht.a)));
  }
  o.fillStyle = dt;
  for (let it = 0; it < 8; it++)
    o.globalAlpha = 1 - it / 8, ht(it * 2 * j, (it + 1) * 2 * j);
  o.fillStyle = Q(x.filter((it) => it.night).map((it) => it.sky), 1.25);
  const bt = Math.max(0.5, V), ot = 6;
  o.globalAlpha = 1, ht(null, -bt);
  for (let it = 0; it < ot; it++)
    o.globalAlpha = 1 - (it + 0.5) / ot, ht(-bt + 2 * bt * it / ot, -bt + 2 * bt * (it + 1) / ot);
  o.globalAlpha = 1;
  const nt = new Path2D(Ku), at = new Path2D(Zu), D = new Path2D(Yu), xt = new Path2D($u);
  o.fillStyle = k.star, i.stars.forEach((it) => {
    o.globalAlpha = it.o, it.big ? (o.save(), o.translate(it.x, it.y), o.scale(it.size, it.size), o.fill(nt), o.restore()) : (o.beginPath(), o.arc(it.x, it.y, 0.8, 0, Math.PI * 2), o.fill());
  }), o.globalAlpha = 1;
  const st = Yn(k.sun, "#ffffff", 0.55);
  i.suns.forEach((it) => {
    const Ht = o.createRadialGradient(it.x, it.y, 0, it.x, it.y, it.halo);
    Ht.addColorStop(0, et(st, 0.42)), Ht.addColorStop(0.7, et(st, 0)), o.fillStyle = Ht, o.beginPath(), o.arc(it.x, it.y, it.halo, 0, Math.PI * 2), o.fill();
    const E = o.createLinearGradient(0, it.y - it.rad, 0, it.y + it.rad);
    E.addColorStop(0.6, k.sun), E.addColorStop(1, k.sunEdge), o.fillStyle = E, pt(!0), o.beginPath(), o.arc(it.x, it.y, it.rad, 0, Math.PI * 2), o.fill(), pt(!1);
  });
  const Bt = Yn(k.moon, "#ffffff", 0.6);
  i.moons.forEach((it) => {
    o.save(), o.translate(it.x - it.d / 2, it.y - it.d / 2), o.scale(it.d / 46, it.d / 46);
    const Ht = o.createLinearGradient(0, 6, 0, 40);
    Ht.addColorStop(0, Bt), Ht.addColorStop(1, k.moon), o.fillStyle = Ht, pt(!0), o.fill(at), pt(!1), o.restore();
  }), i.clouds.forEach((it) => {
    o.save(), o.globalAlpha = it.o, o.translate(it.x, it.y), o.scale(it.w / 46, it.h / 30.66), o.translate(-4, -9.67), o.fillStyle = it.fill, pt(!0), o.fill(D), pt(!1), o.restore();
  }), i.fogs.forEach((it) => {
    const Ht = o.createLinearGradient(it.x, 0, it.x + it.w, 0);
    Ht.addColorStop(0, et(it.c, 0)), Ht.addColorStop(0.25, et(it.c, it.a)), Ht.addColorStop(0.75, et(it.c, it.a)), Ht.addColorStop(1, et(it.c, 0)), o.fillStyle = Ht, o.fillRect(it.x, it.y, it.w, 6 * j);
  }), o.fillStyle = k.rain, i.drops.forEach((it) => {
    o.save(), o.globalAlpha = it.o, o.translate(it.x, it.y), o.rotate(12 * Math.PI / 180), o.fillRect(-1.5, 0, 3, 9), o.restore();
  }), o.fillStyle = k.snow, i.flakes.forEach((it) => {
    o.globalAlpha = it.o, o.beginPath(), o.arc(it.x, it.y, 2.2, 0, Math.PI * 2), o.fill();
  }), o.fillStyle = k.sun, i.bolts.forEach((it) => {
    o.save(), o.globalAlpha = it.o, o.translate(it.x, it.y), o.fill(xt), o.restore();
  }), o.restore();
}
const nf = (o) => o === "sunny" ? "clear" : o === "clear-night" ? "night" : o === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(o) ? "rain" : ["snowy", "snowy-rainy"].includes(o) ? "snow" : "cloudy", Ds = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, id = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, Vd = (o, l) => '<path class="' + l + '" d="' + o + '"/>', of = (o, l) => ' style="animation-delay:-' + Math.round(o * 137 % l) + 'ms"', Gn = (o, l, i, f) => {
  const b = i * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (f < 1 ? ' opacity="' + f + '"' : "") + of(o, 2400) + ' d="M' + o + " " + (l - i) + "L" + (o + b) + " " + (l - b) + "L" + (o + i) + " " + l + "L" + (o + b) + " " + (l + b) + "L" + o + " " + (l + i) + "L" + (o - b) + " " + (l + b) + "L" + (o - i) + " " + l + "L" + (o - b) + " " + (l - b) + 'Z"/>';
}, Ac = ([o, l, i], f) => '<path class="wbMoonPath" d="' + o + '" fill="url(#' + f + ')"/><defs><linearGradient id="' + f + '" x1="0" y1="' + l + '" x2="0" y2="' + i + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', rf = (o, l) => l ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + o + ')"/><defs><linearGradient id="' + o + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + o + ')"/><defs><linearGradient id="' + o + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', sf = (o) => (o ? ["29.35", "43.04", "56.74"].map((l, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" x="' + l + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + l + ' 60.65)"/></g>') : [19, 26, 33].map((l, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + l + ' 38)"/></g>')).join(""), lf = (o) => (o ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([l, i], f) => '<circle class="wbFlake" style="animation-delay:-' + f * 640 + 'ms" cx="' + l + '" cy="' + i + '" r="' + (o ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function df(o, l, i, f) {
  const b = (x) => '<g filter="url(#' + f + '-sh)">' + x + "</g>";
  return o === "clear" ? l ? b(Ac(i ? id.l : id.s, f)) + (i ? Gn(70, 20, 5.83, 1) + Gn(78.33, 41.67, 3.75, 0.8) + Gn(60, 71.67, 3.33, 0.6) : Gn(42, 12, 3.5, 1) + Gn(47, 25, 2.25, 0.8) + Gn(36, 43, 2, 0.6)) : b(rf(f, i)) : o === "partly" ? b(l ? Ac(i ? id.lp : id.sp, f) : i ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + b(Vd(i ? Ds.lp : Ds.sp, l ? "wbCloudLight" : "wbBright")) + (l ? i ? Gn(73.33, 16.67, 4.17, 0.9) : Gn(44, 10, 2.5, 0.9) : "") : o === "cloudy" ? b(Vd(i ? Ds.lc : Ds.s, l ? "wbCloudLight" : "wbBright")) + (l ? i ? Gn(15, 15, 3.75, 0.8) + Gn(76.67, 13.33, 2.92, 0.6) : Gn(9, 9, 2.25, 0.8) + Gn(46, 8, 1.75, 0.6) : "") : b(Vd(i ? Ds.lr : Ds.s, "wbCloudLight")) + (o === "rain" ? sf(i) : lf(i));
}
const cf = (o, l) => '<defs><filter id="' + o + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (l ? 1.6 : 1) + '" stdDeviation="' + (l ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function pf(o, l, i, f) {
  let b = nf(o);
  const x = b === "night" || !!i;
  b === "night" && (b = "clear");
  const k = l ? 90 : 54;
  return { k: b, night: x, svg: '<svg viewBox="0 0 ' + k + " " + k + '">' + cf(f, l) + df(b, x, l, f) + "</svg>" };
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
], rd = (o, l) => (uf[l % 8 * 8 + o % 8] + 0.5) / 64, mo = (o) => [parseInt(o.slice(1, 3), 16), parseInt(o.slice(3, 5), 16), parseInt(o.slice(5, 7), 16)], Wa = (o, l, i) => [Math.round(o[0] + (l[0] - o[0]) * i), Math.round(o[1] + (l[1] - o[1]) * i), Math.round(o[2] + (l[2] - o[2]) * i)], wl = (o) => o < 0 ? 0 : o > 1 ? 1 : o, Ec = (o, l) => {
  let i = o * 374761393 + l * 668265263 ^ 1540483477;
  return i = Math.imul(i ^ i >>> 13, 1274126177), ((i ^ i >>> 16) >>> 0) / 4294967296;
}, Rr = [255, 255, 255], on = mo("#26221e"), _c = mo("#0288d1"), ff = mo("#01579b"), jd = mo(cn.cloudDay), zd = mo(cn.cloudNight), sd = mo(cn.dusk), Gd = mo(cn.sunEdge), hf = mo(cn.sun), mf = 10, Dc = 0.3, Li = 56, Ip = 21;
function gf(o) {
  const l = Array.from({ length: Ip }, () => new Array(Li).fill(void 0)), i = (k, _, O) => {
    l[_][k] = O;
  }, f = Wa(sd, on, 0.35), b = Wa(on, Rr, 0.22);
  for (let k = 0; k <= 6; k++) {
    const _ = k < 2 ? Li - 2 : Li - 1;
    for (let O = 6 - k; O <= _; O++) i(O, k, k < 2 ? f : k === 6 ? b : on);
  }
  const x = [sd, Gd, zd, mo(cn.skyRainDay), Wa(sd, on, 0.2), Wa(o, on, 0.35)];
  [2, 3, 2, 3, 3].forEach((k, _) => {
    const O = 9 + _ * 6;
    for (let S = 0; S < k; S++) {
      const V = x[(_ * 2 + S * 3) % x.length];
      for (let q = O; q < O + 5; q++)
        i(q, 7 + S * 2, Wa(V, on, 0.12)), i(q, 8 + S * 2, S === k - 1 ? Wa(V, Rr, 0.3) : V);
      i(O + 5, 7 + S * 2, on), i(O + 5, 8 + S * 2, on);
    }
  });
  for (let k = 7; k <= 12; k++) i(5, k, on);
  i(5, 13, Gd);
  for (let k = 7; k <= 14; k++) for (let _ = 42; _ <= 51; _++) i(_, k, _ === 51 ? zd : jd);
  for (let k = 43; k <= 50; k += 2)
    i(k, 12, on), i(k, 9, Wa(on, jd, 0.4));
  for (let k = 40; k <= 53; k++) i(k, 14, k === 40 || k === 53 ? zd : jd);
  for (let k = 15; k <= 18; k++) for (let _ = 46; _ <= 49; _++) i(_, k, k === 18 ? on : k === 16 ? Gd : sd);
  for (let k = 15; k <= 19; k++) i(44, k, on);
  return i(44, 20, hf), l;
}
function vf(o, l, i, f) {
  const b = Math.max(1, Math.round(o)), x = Math.max(1, Math.round(l)), k = new Uint8ClampedArray(b * x * 4), _ = mo(f.skyClearDay), O = mo(f.skyFogDay), S = gf(_), V = Math.round(x * 0.55), q = wl(1 - Math.log(i / Dc) / Math.log(mf / Dc)), j = Wa(_, O, q), Z = (K) => wl((K - 0.1) / 0.9), pt = wl((1 - Math.exp(-2 / i) - 0.2) / 0.8), et = Math.round(b / 2 - Li / 2), Q = V + 3;
  for (let K = 0; K < x; K++) {
    const ht = Q - 1 - K, dt = K - Q;
    for (let bt = 0; bt < b; bt++) {
      const ot = bt - et;
      let nt, at;
      const D = ht >= 0 && ht < Ip && ot >= 0 && ot < Li ? S[ht][ot] : void 0;
      if (D)
        nt = D, at = pt;
      else if (ht >= 0 && ht <= 1 && ot >= 4 - ht && ot <= 5 - ht)
        nt = Wa(Rr, _c, 0.15), at = pt;
      else if (K < V) {
        const Bt = wl(((K + 0.5) / V - 0.15) / 0.85) * 3, it = Math.min(3, Math.floor(Bt + rd(bt + 2, K + 5)));
        nt = Wa(j, Rr, it * 0.1), at = q * 0.95;
      } else {
        const Bt = (K - V + 0.5) / (x - V), it = Math.min(1.5, 6e-3 / (Bt * Bt)), Ht = wl(Bt * 1.4) * 3, E = Math.min(3, Math.floor(Ht + rd(bt + 1, K + 6)));
        nt = Wa(_c, ff, E / 3);
        const P = 1 + Math.round(Bt * 7), W = Math.floor(bt / (P * 3)), B = 0.06 + 0.16 * Bt, lt = bt % (P * 3) < P;
        lt && Ec(W, K) < B ? nt = Wa(nt, Rr, 0.18 + 0.1 * (1 - Bt)) : lt && Bt > 0.5 && Ec(W, K - 1) < B && (nt = Wa(nt, on, 0.12)), at = Z(1 - Math.exp(-it / i)), dt === 0 && ot >= 3 && ot <= 8 ? (nt = Wa(nt, Rr, ot < 6 ? 0.8 : 0.45), at = pt) : dt >= 0 && dt <= 2 && ot >= Li && ot < Li + 40 ? ((1 - (ot - Li) / 40) * (dt === 1 ? 0.9 : 0.5) > rd(bt, K + 3) && (nt = Wa(nt, Rr, 0.5)), at = pt) : dt === 0 && ot >= 6 && ot < Li && (nt = Wa(nt, on, ot % 2 === 0 ? 0.35 : 0.2), at = pt);
      }
      const xt = at > rd(bt, K) ? O : nt, st = (K * b + bt) * 4;
      k[st] = xt[0], k[st + 1] = xt[1], k[st + 2] = xt[2], k[st + 3] = 255;
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
function xf(o, l) {
  const i = o ? bf[String(o).toUpperCase()] : void 0;
  if (!i || !(l > 0)) return;
  const f = (x) => Math.abs(Math.log(x[2] / l)), b = i.reduce((x, k) => f(k) < f(x) ? k : x);
  return f(b) <= Math.log(wf) ? { from: b[0], to: b[1], km: b[2] } : void 0;
}
const yf = (o, l) => l === "mi" ? o * 1.609344 : l === "m" ? o / 1e3 : l === "ft" ? o * 3048e-7 : l === "yd" ? o * 9144e-7 : o, kf = (o) => o < 1 ? "very_poor" : o < 4 ? "poor" : o < 10 ? "moderate" : o < 20 ? "good" : o < 40 ? "very_good" : "excellent", $e = {
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
}, Fe = { standard: "cubic-bezier(.2,0,0,1)", land: "cubic-bezier(.34,1.46,.64,1)", spring: "cubic-bezier(.2,1.2,.4,1)", soft: "cubic-bezier(.4,0,.2,1)", exit: "cubic-bezier(.4,0,1,1)" }, Va = () => {
  var o;
  return !!((o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches);
};
function Mf() {
  const { pivot: o, slider: l, iconbtn: i, warp: f, outline: b } = $e;
  return [
    ["--pv-persp", o.persp + "px"],
    ["--pv-shine", o.shine / 100],
    ["--pv-size", o.size + "%"],
    ["--pv-ret", o.ret + "ms"],
    ["--pv-ease", Fe[o.ease]],
    ["--ab-blur", l.glow + "px"],
    ["--ab-spread", l.spread + "px"],
    ["--ab-str", l.strength + "%"],
    ["--ab-blur2", l.glow + l.hold + "px"],
    ["--ab-spread2", l.spread + l.hold / 4 + "px"],
    ["--ab-str2", l.holdStrength + "%"],
    ["--ab-grow", "scaleY(" + (1 + (l.grow / 100 - 1) * 3) + ")"],
    ["--ab-in", l.ein + "ms"],
    ["--ab-out", l.eout + "ms"],
    ["--ab-ease", Fe[l.ease]],
    ["--ih-s", i.scale / 100],
    ["--ih-p", i.press / 100],
    ["--ih-dur", i.dur + "ms"],
    ["--ih-ease", Fe[i.ease]],
    ["--ih-tint", "8%"],
    ["--wc-dur", f.cdur + "ms"],
    ["--wc-delay", f.cdelay + "ms"],
    ["--wc-ease", Fe[f.ease]],
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
const Ud = ":is(button.primary,button.pill,.hcBtn,.wbRangeBtn,.activityRow.tap,.hcRow,a.hcRow)", Sf = "#homeView .tfAreaPanel", Cf = 300, gd = (o) => Math.min(1, Cf / Math.max(1, o)), Yd = (o, l) => 1 + (l / 100 - 1) * gd(o.offsetWidth);
function Tf(o, l) {
  l.style.cssText += ";" + Mf();
  let i = null;
  const f = (V) => {
    V.classList.remove("mvMoving", "mvLit"), V.style.setProperty("--rx", "0deg"), V.style.setProperty("--ry", "0deg"), V.style.setProperty("--sc", 1), V._down = !1;
  };
  o.addEventListener("pointermove", (V) => {
    var K, ht;
    const q = V.pointerType === "touch" || Va() ? null : (ht = (K = V.target).closest) == null ? void 0 : ht.call(K, Ud);
    if (i && i !== q && f(i), i = q, !q || q.disabled) return;
    const j = $e.pivot, Z = q.getBoundingClientRect(), pt = (V.clientX - Z.left) / Z.width, et = (V.clientY - Z.top) / Z.height, Q = 1;
    q.classList.add("mvPv", "mvMoving", "mvLit"), q.style.setProperty("--pv-persp", j.persp / gd(Math.max(q.offsetWidth, q.offsetHeight)) + "px"), q.style.setProperty("--ry", (Q * (pt - 0.5) * 2 * j.tilt * gd(q.offsetWidth)).toFixed(3) + "deg"), q.style.setProperty("--rx", (Q * -(et - 0.5) * 2 * j.tilt * gd(q.offsetHeight)).toFixed(3) + "deg"), q.style.setProperty("--mx", (pt * 100).toFixed(1) + "%"), q.style.setProperty("--my", (et * 100).toFixed(1) + "%"), q._down || q.style.setProperty("--sc", Yd(q, j.lift));
  }, { passive: !0 }), o.addEventListener("pointerout", (V) => {
    i && !i.contains(V.relatedTarget) && (f(i), i = null);
  }), o.addEventListener("pointerdown", (V) => {
    var j, Z;
    const q = Va() ? null : (Z = (j = V.target).closest) == null ? void 0 : Z.call(j, Ud);
    q && (q._down = !0, q.classList.add("mvPv"), q.classList.remove("mvMoving"), q.style.setProperty("--sc", Yd(q, $e.pivot.press)));
  }), o.addEventListener("pointerup", (V) => {
    var j, Z;
    const q = (Z = (j = V.target).closest) == null ? void 0 : Z.call(j, Ud);
    q && (q._down = !1, q.style.setProperty("--sc", V.pointerType === "touch" ? 1 : Yd(q, $e.pivot.lift)));
  });
  let b = null;
  o.addEventListener("pointerover", (V) => {
    var q, j, Z;
    V.pointerType !== "touch" && ((Z = (j = (q = V.target).closest) == null ? void 0 : j.call(q, ".tfBar")) == null || Z.classList.add("mvHover"));
  }), o.addEventListener("pointerout", (V) => {
    var j, Z;
    const q = (Z = (j = V.target).closest) == null ? void 0 : Z.call(j, ".tfBar");
    q && !q.contains(V.relatedTarget) && q !== b && q.classList.remove("mvHover");
  }), o.addEventListener("pointerdown", (V) => {
    var j, Z;
    const q = (Z = (j = V.target).closest) == null ? void 0 : Z.call(j, ".tfBar");
    q && (b = q, q.classList.add("mvHold"));
  });
  const x = (V) => {
    if (!b) return;
    b.classList.remove("mvHold");
    const q = b.getBoundingClientRect();
    (V.pointerType === "touch" || V.clientX < q.left || V.clientX > q.right || V.clientY < q.top || V.clientY > q.bottom) && b.classList.remove("mvHover"), b = null;
  };
  window.addEventListener("pointerup", x, !0), window.addEventListener("pointercancel", x, !0), o.addEventListener("focusin", (V) => {
    var q, j;
    (j = (q = V.target).matches) != null && j.call(q, ".tfBar:focus-visible") && V.target.classList.add("mvHover");
  }), o.addEventListener("focusout", (V) => {
    var q;
    (q = V.target.classList) == null || q.remove("mvHover", "mvHold");
  }), o.addEventListener("keydown", (V) => {
    var j, Z;
    const q = (Z = (j = V.target).closest) == null ? void 0 : Z.call(j, ".tfBar");
    !q || !["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(V.key) || (q.classList.add("mvHold"), clearTimeout(q._k), q._k = setTimeout(() => q.classList.remove("mvHold"), 350));
  }), o.addEventListener("click", (V) => {
    var j, Z;
    const q = (Z = (j = V.target).closest) == null ? void 0 : Z.call(j, "button.tfIcon[data-act]");
    q && Lf(q);
  });
  let k = null;
  const _ = (V, q, j) => {
    V.querySelector(":scope>.mvEdge") || V.insertAdjacentHTML("afterbegin", '<span class="mvEdgeFill" aria-hidden="true"></span><span class="mvEdge" aria-hidden="true"><i></i></span>');
    const Z = V.getBoundingClientRect(), pt = Z.width / 2, et = Z.height / 2, Q = q.clientX - Z.left - pt, K = q.clientY - Z.top - et, ht = Q ? pt / Math.abs(Q) : 1 / 0, dt = K ? et / Math.abs(K) : 1 / 0, bt = Math.min(Math.max(1 / Math.min(ht, dt), 0), 1);
    let ot = Math.atan2(K, Q) * 180 / Math.PI + 90;
    ot < 0 && (ot += 360);
    const nt = j ? 100 : bt * 100;
    V.style.setProperty("--edge-proximity", nt.toFixed(3)), V.style.setProperty("--cursor-angle", ot.toFixed(3) + "deg"), V.classList.toggle("mvLitEdge", j || nt >= $e.outline.lightAt);
  }, O = (V) => {
    V.classList.remove("mvLitEdge"), V.style.setProperty("--edge-proximity", "0"), V._down = !1;
  }, S = (V) => {
    var j;
    const q = (j = V.closest) == null ? void 0 : j.call(V, Sf);
    return q && !l.classList.contains("tfEditing") ? q : null;
  };
  o.addEventListener("pointermove", (V) => {
    if (V.pointerType === "touch") return;
    const q = S(V.target);
    k && k !== q && O(k), k = q, q && !q._down && _(q, V, !1);
  }, { passive: !0 }), o.addEventListener("pointerout", (V) => {
    k && !k.contains(V.relatedTarget) && (O(k), k = null);
  }), o.addEventListener("pointerdown", (V) => {
    const q = S(V.target);
    q && $e.outline.press && (q._down = !0, _(q, V, !0));
  }), o.addEventListener("pointerup", (V) => {
    const q = S(V.target);
    q && (q._down = !1, V.pointerType === "touch" ? O(q) : _(q, V, !1));
  }), new MutationObserver((V) => {
    var q;
    for (const j of V) {
      const Z = j.target;
      if (j.type === "attributes") {
        (q = Z.classList) != null && q.contains("tfMoreBackdrop") && !Z.hidden && j.oldValue !== null && Bc(Z);
        continue;
      }
      j.addedNodes.forEach((pt) => {
        pt.nodeType === 1 && pt.classList.contains("tfMoreBackdrop") && !pt.hidden && Bc(pt);
      });
    }
  }).observe(l, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["hidden"], attributeOldValue: !0 });
}
const Hp = (o) => o.closest("[data-k],.tfMore,.tfMorePair") || o.getRootNode();
function Fp(o, l) {
  const i = [];
  for (let f = o; f && f !== l && f.parentNode; f = f.parentNode) i.unshift([...f.parentNode.children].indexOf(f));
  return i;
}
const Op = (o, l) => l.reduce((i, f) => i == null ? void 0 : i.children[f], o);
function Lf(o) {
  var Z;
  if (Va() || o._warp) return;
  const l = $e.warp, i = l.amount / 100, f = o.firstElementChild;
  if (!f) return;
  const b = { squash: { scale: 1 + 0.35 * i + " " + (1 - 0.55 * i) }, pinch: { scale: String(1 - 0.5 * i) }, twist: { rotate: 140 * i + "deg", scale: String(1 - 0.35 * i) }, flip: { rotate: "y 90deg" } }[l.style], x = "blur(" + 2 * i + "px)", k = o.getRootNode(), _ = Hp(o), O = (Z = _.dataset) == null ? void 0 : Z.k, S = Fp(o, _), V = o.getAttribute("aria-pressed") + "|" + o.dataset.act;
  o._warp = 1;
  const q = f.animate([{ scale: "1", rotate: "none", filter: "blur(0px)" }, { ...b, filter: x }], { duration: l.win, easing: Fe.exit, fill: "forwards" }), j = performance.now();
  q.finished.then(() => {
    const pt = () => {
      var bt, ot;
      const et = O ? _.isConnected ? _ : (bt = k.querySelector) == null ? void 0 : bt.call(k, '[data-k="' + CSS.escape(O) + '"]') : _, Q = et && Op(et, S);
      if (Q === o && o.getAttribute("aria-pressed") + "|" + o.dataset.act === V && performance.now() - j < 420) {
        requestAnimationFrame(pt);
        return;
      }
      (((ot = Q == null ? void 0 : Q.matches) != null && ot.call(Q, "button.tfIcon") ? Q : o).firstElementChild || f).animate([{ ...b, filter: x }, { scale: "1", rotate: "none", filter: "blur(0px)" }], { duration: l.wout, easing: Fe[l.ease] }), q.cancel(), o._warp = 0;
    };
    pt();
  });
}
function Af(o, l, i) {
  var V;
  if (Va() || !o || !l) return;
  const f = $e.expand, b = o.getBoundingClientRect(), x = "inset(" + (l.top - b.top).toFixed(1) + "px " + (b.right - l.right).toFixed(1) + "px " + (b.bottom - l.bottom).toFixed(1) + "px " + (l.left - b.left).toFixed(1) + "px round 24px)", k = o.firstElementChild, _ = k == null ? void 0 : k.querySelector('.tfBack, [data-close], [data-wb="graph-close"]'), O = [...o.children].slice(1);
  o.animate([{ clipPath: x }, { clipPath: "inset(0px 0px 0px 0px round 0px)" }], { duration: f.dur, easing: Fe[f.ease] });
  const S = (V = k == null ? void 0 : k.querySelector(".tfIcon,.wbIcon")) == null ? void 0 : V.getBoundingClientRect();
  k && S && i && k.animate([{ transform: "translate(" + (i.left - S.left).toFixed(1) + "px," + (i.top - S.top).toFixed(1) + "px)" }, { transform: "none" }], { duration: f.dur, easing: Fe[f.ease] }), _ == null || _.animate([{ opacity: 0 }, { opacity: 0, offset: 0.5 }, { opacity: 1 }], { duration: f.dur, easing: Fe[f.ease] }), O.forEach((q, j) => {
    q.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: f.delay + j * f.stagger, easing: Fe.standard, fill: "backwards" });
  });
}
function Ef(o, l, i) {
  if (Va() || !o || !l) {
    i();
    return;
  }
  const f = $e.expand, b = f.dur * f.back / 100, x = o.getBoundingClientRect(), k = "inset(" + (l.top - x.top).toFixed(1) + "px " + (x.right - l.right).toFixed(1) + "px " + (x.bottom - l.bottom).toFixed(1) + "px " + (l.left - x.left).toFixed(1) + "px round 24px)";
  [...o.children].slice(1).forEach((V) => V.animate([{ opacity: 1 }, { opacity: 0 }], { duration: b * 0.3, easing: Fe.standard, fill: "forwards" }));
  const _ = o.animate([{ clipPath: "inset(0px 0px 0px 0px round 0px)" }, { clipPath: k, opacity: 1, offset: 0.85 }, { clipPath: k, opacity: 0 }], { duration: b, easing: Fe.standard, fill: "forwards" });
  let O = !1;
  const S = () => {
    O || (O = !0, i());
  };
  _.finished.then(S, S), setTimeout(S, b + 80);
}
const qp = (o) => {
  let l = "M" + o[0][0].toFixed(1) + " " + o[0][1].toFixed(1);
  for (let i = 0; i < o.length - 1; i++) {
    const f = o[i - 1] || o[i], b = o[i], x = o[i + 1], k = o[i + 2] || x, _ = [b[0] + (x[0] - f[0]) / 6, b[1] + (x[1] - f[1]) / 6], O = [x[0] - (k[0] - b[0]) / 6, x[1] - (k[1] - b[1]) / 6];
    l += "C" + _.map((S) => S.toFixed(1)).join(" ") + " " + O.map((S) => S.toFixed(1)).join(" ") + " " + x.map((S) => S.toFixed(1)).join(" ");
  }
  return l;
}, Wp = (o, l, i, f = "mvGrid") => [0, 1, 2].map((b) => {
  const x = (l + (i - l) * b / 2).toFixed(1);
  return '<line class="' + f + '" x1="0" x2="' + o + '" y1="' + x + '" y2="' + x + '"/>';
}).join("");
function Vp(o, l = o.querySelector(".mvLine"), i = o.querySelectorAll(".mvArea,.mvDot")) {
  if (Va() || !(l != null && l.getTotalLength)) return;
  const f = $e.graphs, b = l.getTotalLength();
  l.animate([{ strokeDasharray: b, strokeDashoffset: b }, { strokeDasharray: b, strokeDashoffset: 0 }], { duration: f.draw, easing: Fe.standard }), [...i].forEach((x, k) => x.animate([{ opacity: 0 }, { opacity: 1 }], { duration: f.draw * 0.6, delay: f.draw * 0.3 + k * 12, easing: Fe.standard, fill: "backwards" }));
}
function jp(o, l, i, f, b) {
  if (o.getAnimations().forEach((V) => V.cancel()), o.style.left = f + "px", o.style.width = b + "px", Va() || l === f && i === b) return;
  const x = $e.tabs, k = x.stretch / 100, _ = (V, q) => ({ left: V + "px", width: q + "px" }), S = f > l ? _(l + (f - l) * (0.15 * (1 - k)), f + b - (l + (f - l) * (0.15 * (1 - k)))) : _(f, l + i - f - (l - f) * (0.15 * (1 - k)));
  o.animate([_(l, i), { offset: 0.5, ...S }, _(f, b)], { duration: x.dur, easing: Fe.standard });
}
function _f(o) {
  const l = ":is(.themeChoice,.wbSegments,.tfHeightTabs,.hcSeg,.tfSeg)", i = (b) => b.querySelector(':scope>[aria-pressed="true"],:scope>[aria-checked="true"],:scope>.active'), f = (b, x) => x ? [...b.children].indexOf(x) : -1;
  o.addEventListener("click", (b) => {
    var ht, dt, bt;
    const x = (dt = (ht = b.target).closest) == null ? void 0 : dt.call(ht, l + ">button"), k = x == null ? void 0 : x.parentElement;
    if (!k || Va() || x.disabled) return;
    const _ = i(k);
    if (!_ || _ === x) return;
    const O = f(k, _), S = k.getBoundingClientRect(), V = _.getBoundingClientRect(), q = getComputedStyle(_).borderRadius, j = k.getRootNode(), Z = Hp(k), pt = (bt = Z.dataset) == null ? void 0 : bt.k, et = Fp(k, Z), Q = performance.now(), K = () => {
      var it, Ht, E;
      const ot = pt && !Z.isConnected ? (it = j.querySelector) == null ? void 0 : it.call(j, '[data-k="' + CSS.escape(pt) + '"]') : Z, nt = ot && Op(ot, et), at = (Ht = nt == null ? void 0 : nt.matches) != null && Ht.call(nt, l) ? i(nt) : null;
      if (!at || f(nt, at) === O) {
        performance.now() - Q < 700 && requestAnimationFrame(K);
        return;
      }
      const D = nt.getBoundingClientRect(), xt = at.getBoundingClientRect(), st = getComputedStyle(at);
      (E = nt.querySelector(":scope>.mvSegInd")) == null || E.remove();
      const Bt = document.createElement("span");
      Bt.className = "mvSegInd", Bt.style.cssText = "top:" + (xt.top - D.top - nt.clientTop) + "px;height:" + xt.height + "px;border-radius:" + q + ";background:" + st.backgroundColor + ";box-shadow:" + st.boxShadow, getComputedStyle(nt).position === "static" && (nt.style.position = "relative"), nt.prepend(Bt), nt.classList.add("mvSegMoving"), jp(Bt, V.left - S.left - nt.clientLeft, V.width, xt.left - D.left - nt.clientLeft, xt.width), clearTimeout(nt._seg), nt._seg = setTimeout(() => {
        Bt.remove(), nt.classList.remove("mvSegMoving");
      }, $e.tabs.dur + 20);
    };
    requestAnimationFrame(K);
  }, !0);
}
const zp = (o) => getComputedStyle(o).placeItems.startsWith("end");
function Bc(o) {
  const l = o.firstElementChild;
  if (Va() || !l || l.classList.contains("still")) return;
  const i = $e.dialog;
  o.animate([{ opacity: 0, backdropFilter: "blur(0px)" }, { opacity: 1, backdropFilter: "blur(" + i.blur + "px)" }], { duration: i.open, easing: Fe.standard }), l.style.animation = "none", l.animate(zp(o) ? [{ transform: "translateY(100%)" }, { transform: "none" }] : [{ opacity: 0, transform: "scale(" + i.from / 100 + ")" }, { opacity: 1, transform: "none" }], { duration: i.open, easing: Fe[i.ease] }), [...(l.classList.contains("tfMorePair") && l.querySelector(".tfMore") || l).children].forEach((b, x) => b.animate([{ opacity: 0 }, { opacity: 1 }], { duration: i.open * 0.6, delay: i.open * 0.35 + x * 40, easing: Fe.standard, fill: "backwards" }));
}
function Df(o, l) {
  const i = o == null ? void 0 : o.firstElementChild;
  if (Va() || !i || o.hidden || o._closing) {
    l();
    return;
  }
  const f = $e.dialog;
  o._closing = !0, o.style.pointerEvents = "none", o.animate([{ opacity: 1, backdropFilter: "blur(" + f.blur + "px)" }, { opacity: 0, backdropFilter: "blur(0px)" }], { duration: f.close, easing: Fe.exit, fill: "forwards" });
  const b = i.animate(zp(o) ? [{ transform: "none" }, { transform: "translateY(100%)" }] : [{ opacity: 1, transform: "none" }, { opacity: 0, transform: "scale(" + f.from / 100 + ")" }], { duration: f.close, easing: Fe.exit, fill: "forwards" });
  let x = !1;
  const k = () => {
    x || (x = !0, o._closing = !1, o.style.pointerEvents = "", o.getAnimations().forEach((_) => _.cancel()), i.getAnimations().forEach((_) => _.cancel()), l());
  };
  b.finished.then(k, k), setTimeout(k, f.close + 80);
}
const Bf = '<span class="mvTick" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 6L9 17L4 12" pathLength="1"/></svg></span>';
function Rf(o, l) {
  o.replaceChildren(), o.insertAdjacentHTML("afterbegin", Bf), o.appendChild(Object.assign(document.createElement("span"), { className: "mvToastText", textContent: l }));
}
function Pf(o) {
  if (Va()) return;
  const l = $e.confirm;
  o.animate([{ opacity: 0, translate: "0 18px" }, { opacity: 1, translate: "0 0" }], { duration: l.dur, easing: Fe.spring });
  const i = o.querySelector(".mvTick path");
  i && l.draw && i.animate([{ strokeDasharray: "1", strokeDashoffset: "1" }, { strokeDasharray: "1", strokeDashoffset: "0" }], { duration: 420, delay: l.dur * 0.5, easing: Fe.standard, fill: "backwards" });
}
const Rc = (o, l, i, f, b = 1) => (o + l * i * b) * Math.pow(f, b);
function Nf(o) {
  const l = $e.drag.squash / 100;
  !o || Va() || !l || o.animate([{ transform: "scale(" + (1 + l * 0.4) + "," + (1 - l) + ")" }, { transform: "scale(" + (1 - l * 0.1) + "," + (1 + l * 0.24) + ")" }, { transform: "none" }], { duration: 340, easing: "ease-out" });
}
function Pc(o) {
  if (!o || Va()) return;
  const l = $e.expand;
  [...o.children].slice(1).forEach((i, f) => i.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: l.delay + f * l.stagger, easing: "cubic-bezier(.2,0,0,1)", fill: "backwards" }));
}
const Ea = 6e4, xe = 36e5, bn = 864e5, yl = 1440, If = 6, Hf = 10 * Ea, Nc = 3, Ff = 3, ld = { day: [6, 22], waking: [7, 23], all: [0, 24] }, Of = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], qf = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", Ic = (o, l, i, f) => '<circle cx="' + o + '" cy="' + l + '" r="' + i + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((b) => {
  const x = Math.cos(b * Math.PI / 180), k = Math.sin(b * Math.PI / 180), _ = i + 2, O = i + 2 + f;
  return "M" + (o + x * _).toFixed(2) + " " + (l + k * _).toFixed(2) + "L" + (o + x * O).toFixed(2) + " " + (l + k * O).toFixed(2);
}).join("") + '"/>', yi = (o) => '<path d="' + qf + '"' + (o ? ' transform="' + o + '"' : "") + "/>", ki = (o) => '<path d="' + o + '"/>', Hc = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function Wf(o, l) {
  const i = "translate(0,-3)";
  switch (o) {
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
const Zd = (o, l) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + Wf(o, l) + "</svg>", Vf = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), jf = 30 * Ea, zf = 7, Gf = 3, Fc = 1, Uf = Ea, Yf = 15 * Ea, Zf = 5, ye = {
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
}, $f = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], Xf = Object.keys(Lt.phases), Jf = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)", extreme: "var(--purple-color, #926bc7)" }, Oc = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, Gp = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], dd = 100, qc = "µg/m³", Qf = "weather_alerts.air_quality_pollen", xd = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], th = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, eh = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], ah = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, nh = { daily: 1, hourly: 2 }, Dt = (o) => String(o ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), Oa = (o, l) => o.replace(/\{(\w+)\}/g, (i, f) => l[f] ?? ""), Ci = (o) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + o + '"/></svg>', Wc = /* @__PURE__ */ new Map();
function Up(o) {
  let l = Wc.get(o);
  if (l === void 0) {
    const i = "http://www.w3.org/2000/svg", f = document.createElementNS(i, "svg"), b = document.createElementNS(i, "path");
    f.setAttribute("viewBox", "0 0 24 24"), f.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", b.setAttribute("d", o), f.append(b), document.body.append(f);
    const x = b.getBBox();
    f.remove();
    const k = Math.max(x.width, x.height), _ = k ? 26 * 24 / k : 0, O = _ / 24;
    l = k ? "width:" + _.toFixed(2) + "px;height:" + _.toFixed(2) + "px;translate:" + ((12 - x.x - x.width / 2) * O).toFixed(2) + "px " + ((12 - x.y - x.height / 2) * O).toFixed(2) + "px" : "", Wc.set(o, l);
  }
  return l ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + l + '"><path d="' + o + '"/></svg>' : Ci(o);
}
const oh = () => {
  var o;
  return !!((o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches);
}, Re = (o) => o != null && o !== "" && Number.isFinite(Number(o)), Vc = /* @__PURE__ */ new Map(), jc = /* @__PURE__ */ new Map(), Kd = /* @__PURE__ */ new WeakMap(), ih = (o) => {
  switch (o == null ? void 0 : o.number_format) {
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
      return o == null ? void 0 : o.language;
  }
};
function pe(o, l, i) {
  const f = Number(o);
  if (Number.isNaN(f)) return String(o);
  const b = (l == null ? void 0 : l.number_format) === "none", x = { maximumFractionDigits: 2, ...i, ...b ? { useGrouping: !1 } : {} }, k = b ? "en-US" : ih(l), _ = JSON.stringify([k, x]);
  let O = Vc.get(_);
  if (!O) {
    try {
      O = new Intl.NumberFormat(k, x);
    } catch {
      O = new Intl.NumberFormat(void 0, x);
    }
    Vc.set(_, O);
  }
  return O.format(f);
}
const wc = (o) => {
  var l;
  return ((l = o == null ? void 0 : o.locale) == null ? void 0 : l.language) || (o == null ? void 0 : o.language) || void 0;
};
function rh(o) {
  if (!o) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (Kd.has(o)) return Kd.get(o);
  const l = o.time_format, i = l === "language" || l === "system" || !l ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(l === "language" ? o.language : void 0).includes("10") : l === "12";
  return Kd.set(o, i), i;
}
const Yp = (o) => {
  var l, i;
  return ((l = o == null ? void 0 : o.locale) == null ? void 0 : l.time_zone) === "server" && ((i = o == null ? void 0 : o.config) != null && i.time_zone) ? o.config.time_zone : void 0;
};
function Zp(o, l) {
  const i = JSON.stringify([o, l]);
  let f = jc.get(i);
  if (!f) {
    try {
      f = new Intl.DateTimeFormat(o, l);
    } catch {
      f = new Intl.DateTimeFormat(void 0, { ...l, timeZone: void 0 });
    }
    jc.set(i, f);
  }
  return f;
}
const qa = (o, l) => Zp(wc(l), { hour: "numeric", minute: "2-digit", hourCycle: rh(l == null ? void 0 : l.locale) ? "h12" : "h23", timeZone: Yp(l) }).format(o), zc = (o, l) => Zp(wc(l), { weekday: "short", timeZone: Yp(l) }).format(o), sh = (o, l) => o.toLocaleDateString(wc(l), { weekday: "narrow" }), We = (o, l) => Re(l) ? pe(Math.round(Number(l)), o.locale) + "°" : "–", nr = (o) => {
  const l = new Date(o);
  return l.setHours(0, 0, 0, 0), l;
}, Bs = (o, l) => o.getFullYear() === l.getFullYear() && o.getMonth() === l.getMonth() && o.getDate() === l.getDate(), dn = Math.PI / 180, lh = 2440588, dh = 2451545, yd = dn * 23.4397, ch = 149598e3, ph = -0.833 * dn, uh = 0.133 * dn, Gc = 5 * Ea, Kp = (o) => o.getTime() / bn - 0.5 + lh - dh, $p = (o, l) => Math.atan2(Math.sin(o) * Math.cos(yd) - Math.tan(l) * Math.sin(yd), Math.cos(o)), Xp = (o, l) => Math.asin(Math.sin(l) * Math.cos(yd) + Math.cos(l) * Math.sin(yd) * Math.sin(o)), fh = (o, l) => dn * (280.16 + 360.9856235 * o) - l, hh = (o, l, i) => Math.asin(Math.sin(l) * Math.sin(i) + Math.cos(l) * Math.cos(i) * Math.cos(o));
function Jp(o) {
  const l = dn * (357.5291 + 0.98560028 * o), i = dn * (1.9148 * Math.sin(l) + 0.02 * Math.sin(2 * l) + 3e-4 * Math.sin(3 * l)), f = l + i + dn * 102.9372 + Math.PI;
  return { ra: $p(f, 0), dec: Xp(f, 0), dist: ch };
}
function Qp(o) {
  const l = dn * (218.316 + 13.176396 * o), i = dn * (134.963 + 13.064993 * o), f = dn * (93.272 + 13.22935 * o), b = l + dn * 6.289 * Math.sin(i), x = dn * 5.128 * Math.sin(f);
  return { ra: $p(b, x), dec: Xp(b, x), dist: 385001 - 20905 * Math.cos(i) };
}
const tu = (o, l, i, f) => {
  const b = Kp(l), x = o(b);
  return hh(fh(b, dn * -f) - x.ra, dn * i, x.dec);
}, kd = (o, l, i) => tu(Jp, o, l, i), mh = (o, l, i) => tu(Qp, o, l, i);
function eu(o, l, i, f) {
  const b = {};
  let x = i.getTime(), k = o(i) - l;
  for (let _ = x + Gc; _ <= f.getTime(); _ += Gc) {
    const O = o(new Date(_)) - l;
    if (k < 0 != O < 0) {
      const S = new Date(x + (_ - x) * k / (k - O));
      O > 0 ? b.rise ?? (b.rise = S) : b.set ?? (b.set = S);
    }
    x = _, k = O;
  }
  return b;
}
const au = (o) => {
  const l = nr(o);
  return [l, new Date(l.getTime() + bn)];
}, gh = (o, l, i) => eu((f) => kd(f, l, i), ph, ...au(o)), vh = (o, l, i) => eu((f) => mh(f, l, i), uh, ...au(o));
function $d(o) {
  const l = Kp(o), i = Jp(l), f = Qp(l), b = Math.acos(Math.sin(i.dec) * Math.sin(f.dec) + Math.cos(i.dec) * Math.cos(f.dec) * Math.cos(i.ra - f.ra)), x = Math.atan2(i.dist * Math.sin(b), f.dist - i.dist * Math.cos(b)), k = Math.atan2(Math.cos(i.dec) * Math.sin(i.ra - f.ra), Math.sin(i.dec) * Math.cos(f.dec) - Math.cos(i.dec) * Math.sin(f.dec) * Math.cos(i.ra - f.ra));
  return { fraction: (1 + Math.cos(x)) / 2, phase: 0.5 + 0.5 * x * (k < 0 ? -1 : 1) / Math.PI };
}
const bh = (o) => {
  const l = o * 28;
  return l < 0.5 || l > 27.5 ? "new_moon" : l < 6.5 ? "waxing_crescent" : l < 7.5 ? "first_quarter" : l < 13.5 ? "waxing_gibbous" : l < 14.5 ? "full_moon" : l < 20.5 ? "waning_gibbous" : l < 21.5 ? "last_quarter" : "waning_crescent";
}, kl = (o) => {
  const l = o == null ? void 0 : o.config;
  return l && Re(l.latitude) && Re(l.longitude) ? { lat: Number(l.latitude), lon: Number(l.longitude) } : null;
};
function Rs(o, l) {
  var S, V, q;
  const i = kl(o), f = i ? gh(l, i.lat, i.lon) : {}, b = (S = o == null ? void 0 : o.states) == null ? void 0 : S["sun.sun"], x = nr(l).getTime(), k = (j) => {
    const Z = j ? new Date(j) : null;
    return Z && Number.isFinite(Z.getTime()) && nr(Z).getTime() === x ? Z : null;
  }, _ = k((V = b == null ? void 0 : b.attributes) == null ? void 0 : V.next_rising), O = k((q = b == null ? void 0 : b.attributes) == null ? void 0 : q.next_setting);
  return _ && (f.rise = _), O && (f.set = O), f;
}
function wh(o) {
  var f;
  const l = (f = o == null ? void 0 : o.states) == null ? void 0 : f["sun.sun"];
  if ((l == null ? void 0 : l.state) === "below_horizon" || (l == null ? void 0 : l.state) === "above_horizon") return l.state === "below_horizon";
  const i = kl(o);
  return i ? kd(/* @__PURE__ */ new Date(), i.lat, i.lon) < 0 : !1;
}
const Pr = (o) => !!o && o.state !== "unavailable" && o.state !== "unknown", Ns = (o, l) => {
  var f;
  const i = (f = o.entities) == null ? void 0 : f[l];
  return !i || !i.hidden && !i.entity_category;
}, na = (o, l, i) => {
  var f, b;
  for (const x of l) {
    const k = (f = o.states) == null ? void 0 : f[x];
    if (!Pr(k)) continue;
    const _ = (b = k.attributes) == null ? void 0 : b[i];
    if (_ != null && _ !== "") return { stateObj: k, value: _ };
  }
}, xh = (o, l) => l.map((i) => {
  var f;
  return (f = o.states) == null ? void 0 : f[i];
}).find(Pr), yh = (o, l, i) => l.map((f) => {
  var b;
  return (b = o.states) == null ? void 0 : b[f];
}).find((f) => {
  var b;
  return Pr(f) && (((b = f.attributes) == null ? void 0 : b.supported_features) == null || Number(f.attributes.supported_features) & nh[i]);
});
function er(o, l, i) {
  var x, k, _, O;
  const f = ((k = (x = o.config) == null ? void 0 : x.unit_system) == null ? void 0 : k.length) || "", b = (l == null ? void 0 : l.attributes) || {};
  switch (i) {
    case "precipitation":
      return b.precipitation_unit || (f === "km" ? "mm" : "in");
    case "pressure":
      return b.pressure_unit || (f === "km" ? "hPa" : "inHg");
    case "wind_speed":
    case "wind_gust_speed":
      return b.wind_speed_unit || f + "/h";
    case "visibility":
      return b.visibility_unit || f;
    default:
      return b.temperature_unit || ((O = (_ = o.config) == null ? void 0 : _.unit_system) == null ? void 0 : O.temperature) || "";
  }
}
function vd(o, l, i, f) {
  try {
    if (typeof o.formatEntityAttributeValueToParts == "function") {
      const [b, ...x] = o.formatEntityAttributeValueToParts(l, i, f).map((k) => k.value);
      return { number: b, unit: x.join("").trim() };
    }
  } catch {
  }
  return { number: pe(f, o.locale), unit: er(o, l, i) };
}
function Uc(o, l, i, f) {
  try {
    if (typeof o.formatEntityAttributeValue == "function") return o.formatEntityAttributeValue(l, i, f);
  } catch {
  }
  const b = vd(o, l, i, f);
  return (b.number + " " + b.unit).trim();
}
function Mi(o, l) {
  var f;
  try {
    if (typeof o.formatEntityState == "function") return o.formatEntityState(l);
  } catch {
  }
  const i = (f = l.attributes) == null ? void 0 : f.unit_of_measurement;
  return Kf[l.state] || (i && Re(l.state) ? pe(l.state, o.locale) + " " + i : l.state);
}
function Qi(o, l) {
  var i;
  try {
    if (typeof o.formatEntityName == "function") return o.formatEntityName(l, { type: "entity" });
  } catch {
  }
  return ((i = l.attributes) == null ? void 0 : i.friendly_name) || l.entity_id;
}
const Yc = (o) => o < 3 ? "low" : o < 6 ? "moderate" : o < 8 ? "high" : o < 11 ? "very_high" : "extreme", cd = (o) => Gp.find(([, l]) => o <= l)[0];
function kh(o, l) {
  if (l === "Beaufort") return Math.round(o);
  const i = l ? th[l] : void 0;
  if (i === void 0) return;
  const f = eh.findIndex((b) => o * i < b);
  return f === -1 ? 12 : f;
}
const Zc = (o, l) => {
  const i = l ? ah[l] : void 0;
  return i === void 0 ? void 0 : o * i;
}, Kc = (o) => Object.keys(o.states || {}).find((l) => {
  var i, f;
  return l.startsWith("sensor.") && ((f = (i = o.entities) == null ? void 0 : i[l]) == null ? void 0 : f.platform) === "moon";
}), Xd = (o) => Object.values(o.states || {}).filter((l) => {
  var i, f;
  return l.entity_id.startsWith("sensor.") && ((i = l.attributes) == null ? void 0 : i.device_class) === "precipitation" && ["total", "total_increasing"].includes(((f = l.attributes) == null ? void 0 : f.state_class) ?? "") && Ns(o, l.entity_id);
}).map((l) => l.entity_id).sort()[0];
function Mh(o) {
  var i;
  const l = {};
  for (const [f, b] of Object.entries(((i = o == null ? void 0 : o.core) == null ? void 0 : i.integration) ?? {})) {
    if (b && "integration_type" in b) {
      l[f] = b.categories;
      continue;
    }
    for (const [x, k] of Object.entries((b == null ? void 0 : b.integrations) ?? {})) l[x] = k == null ? void 0 : k.categories;
  }
  return l;
}
const nu = (o, l, i) => {
  var b, x, k;
  const f = (x = (b = o.entities) == null ? void 0 : b[i]) == null ? void 0 : x.platform;
  return !!f && !!((k = l[f]) != null && k.includes(Qf));
};
function Sh(o, l) {
  const i = /* @__PURE__ */ new Map();
  return Object.values(o.states || {}).filter((f) => {
    var b;
    return f.entity_id.startsWith("sensor.") && xd.includes(((b = f.attributes) == null ? void 0 : b.device_class) ?? "") && Ns(o, f.entity_id) && nu(o, l, f.entity_id);
  }).sort((f, b) => f.entity_id.localeCompare(b.entity_id)).forEach((f) => {
    i.has(f.attributes.device_class) || i.set(f.attributes.device_class, f.entity_id);
  }), xd.map((f) => i.get(f)).filter(Boolean);
}
const Ch = (o, l) => Object.values(o.states || {}).filter((i) => {
  var f, b;
  return i.entity_id.startsWith("sensor.") && Ns(o, i.entity_id) && nu(o, l, i.entity_id) && (((b = (f = o.entities) == null ? void 0 : f[i.entity_id]) == null ? void 0 : b.translation_key) ?? i.entity_id).toLowerCase().includes("pollen");
}).map((i) => i.entity_id).sort();
function $c(o, l, i) {
  const f = Math.max(l - o, 1e-6), b = i[i.length - 1], x = i.find((S) => f / S <= 4) ?? b * Math.ceil(f / (4 * b)), k = Math.floor(o / x) * x;
  let _ = Math.ceil(l / x) * x;
  _ === k && (_ = k + x);
  const O = [];
  for (let S = k; S <= _ + x / 1e3; S += x) O.push(S);
  return { min: k, max: _, ticks: O };
}
const Th = (o, l, i) => {
  const f = (k) => [1, 3, 5].map((_) => parseInt(k.slice(_, _ + 2), 16)), b = f(o), x = f(l);
  return "rgb(" + b.map((k, _) => Math.round(k + (x[_] - k) * i)).join(", ") + ")";
}, Lh = (o, l, i, f) => {
  const b = i * Math.abs(1 - 2 * f), x = f < 0.5 ? 0 : 1;
  return "M " + o + " " + (l - i) + " A " + i + " " + i + " 0 0 0 " + o + " " + (l + i) + " A " + b + " " + i + " 0 0 " + x + " " + o + " " + (l - i) + " Z";
}, nn = ({ icon: o, name: l, sub: i, visual: f, double: b, backdrop: x, cls: k, zone: _, callouts: O }) => '<div class="wbCard wbSquare' + (b ? " wbDouble" : "") + (x ? " wbHasBackdrop" : "") + (_ != null ? " wbZoned" : "") + (k ? " " + k : "") + '">' + (x ? '<div class="wbBackdrop" aria-hidden="true">' + x + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + Up(o) + '</div><div class="wbText"><span class="wbName">' + Dt(l) + "</span>" + (i ? '<span class="wbSub">' + Dt(i) + "</span>" : "") + "</div></div>" + (_ != null ? '<div class="wbZone">' + _ + "</div>" + (O != null && O.length ? '<div class="wbCallouts">' + O.slice(0, 3).map((S) => Array.isArray(S) ? '<span class="wbCallout"><span>' + Dt(S[0]) + "</span><span>" + Dt(S[1]) + "</span></span>" : '<span class="wbCallout wbAdvice"><span>' + Dt(S) + "</span></span>").join("") + "</div>" : "") : '<div class="wbVisual">' + f + "</div>") + "</div>", pd = (o) => '<div class="wbZoneM">' + o + "</div>", Un = (o, l) => '<div class="wbValue"><span class="wbNum">' + Dt(o) + "</span>" + (l ? '<span class="wbUnitV">' + Dt(l) + "</span>" : "") + "</div>";
function Ah(o) {
  const l = o.max - o.min || 1, i = (_) => 100 - (Math.min(o.max, Math.max(o.min, _)) - o.min) / l * 100, f = (_) => _ / yl * 100 + "%", b = (_) => _.map((O) => O.t + "," + i(O.v)).join(" "), x = o.kind === "line" ? o.points : [];
  let k = '<div class="wbDayChart"><div class="wbDcSun">' + o.sun.map((_) => '<span class="wbDcSunMark" style="left:' + f(_.t) + '">' + Ci(_.rise ? ye.sunsetUp : ye.sunsetDown) + Dt(_.label) + "</span>").join("") + "</div>";
  return k += '<div class="wbDcY">' + o.ticks.map((_) => '<span style="top:' + i(_) + '%">' + Dt(o.format(_)) + "</span>").join("") + "</div>", k += '<div class="wbDcPlot"><svg viewBox="0 0 ' + yl + ' 100" preserveAspectRatio="none">' + o.night.map(([_, O]) => '<rect class="wbDcNight" x="' + _ + '" y="0" width="' + (O - _) + '" height="100"></rect>').join("") + o.ticks.map((_) => '<line class="wbDcGrid" x1="0" x2="' + yl + '" y1="' + i(_) + '" y2="' + i(_) + '" vector-effect="non-scaling-stroke"></line>').join("") + o.sun.map((_) => '<line class="wbDcSunLine" x1="' + _.t + '" x2="' + _.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (o.past && o.past.length > 1 ? '<polyline class="wbDcPast" points="' + b(o.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (x.length > 1 ? '<polygon class="wbDcArea" points="' + x[0].t + ",100 " + b(x) + " " + x[x.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + b(x) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (o.now ? '<line class="wbDcNow" x1="' + o.now.t + '" x2="' + o.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (o.kind === "bars" ? o.points.filter((_) => _.v > 0).map((_) => '<i class="wbDcBar" style="left:' + f(_.t + 12) + ";width:" + f(36) + ";height:" + (100 - i(_.v)) + '%"></i>').join("") : "") + (o.now && o.kind === "line" ? '<i class="wbDcDot" style="left:' + f(o.now.t) + ";top:" + i(o.now.v) + '%"></i>' : "") + (o.peak ? '<span class="wbDcPeak" style="left:' + f(o.peak.t) + ";top:" + i(o.peak.v) + '%">' + Dt(o.peak.label) + "</span>" : "") + (o.note ? '<span class="wbDcNote">' + Dt(o.note) + "</span>" : "") + "</div>", k += '<div class="wbDcX">' + o.hours.map((_) => '<span class="' + (_.minor ? "wbMinor" : "") + '" style="left:' + f(_.t) + '">' + Dt(_.label) + "</span>").join("") + "</div></div>", k;
}
function Xc(o, l, i = 120, f = 300) {
  const k = o.map((K) => K.value), _ = Math.min(...k), O = Math.max(...k), S = O - _ || 1, V = (K) => K / (o.length - 1) * f, q = (K) => 18 + (1 - (K - _) / S) * (i - 18 - 18), j = o.map((K, ht) => [V(ht), q(K.value)]), Z = j.length > 2 ? qp(j) : "M" + j.map((K) => K[0].toFixed(1) + " " + K[1].toFixed(1)).join("L"), pt = k.indexOf(O), et = k.indexOf(_), Q = (K) => K === 0 ? "start" : K === o.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 ' + f + " " + i + '" aria-hidden="true">' + Wp(f, 18, i - 18) + ('<path class="wbArea" d="' + Z + "L" + f + " " + (i - 18) + "L0 " + (i - 18) + 'Z"></path>') + '<path class="wbLine" d="' + Z + '" vector-effect="non-scaling-stroke"></path><text x="' + V(pt) + '" y="' + (q(O) - 6) + '" text-anchor="' + Q(pt) + '">' + Dt(l(O)) + '</text><text x="' + V(et) + '" y="' + (q(_) + 14) + '" text-anchor="' + Q(et) + '">' + Dt(l(_)) + '</text><text x="0" y="' + i + '" text-anchor="start">' + Dt(o[0].label) + '</text><text x="' + f + '" y="' + i + '" text-anchor="end">' + Dt(o[o.length - 1].label) + "</text></svg>";
}
function Eh(o, l) {
  const x = o.map((q) => q.value).concat([]), k = Math.min(...x) - 2, _ = Math.max(...x) + 1, O = _ - k || 1, S = 300 / o.length, V = (q) => (1 - (q - k) / O) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + o.map((q, j) => '<rect class="wbBar' + (q.now ? " wbNowBar" : "") + '" x="' + (j * S + S * 0.2) + '" y="' + V(q.value) + '" width="' + S * 0.6 + '" height="' + (104 - V(q.value)) + '" rx="6"></rect><text x="' + (j * S + S / 2) + '" y="120" text-anchor="middle">' + Dt(q.label) + "</text>").join("") + "</svg>";
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
function Qc(o, { getHass: l, entityId: i, style: f = "bitmap", motion: b = !0, cards: x, onOpen: k, hoursWindow: _ } = {}) {
  var Ca, io;
  const O = "wb" + ++Rh + "-", S = document.createElement("div");
  S.className = "wb", S.dataset.style = f;
  const V = document.createElement("div");
  V.className = "wbBento", S.appendChild(V), o.replaceChildren(S);
  const q = ["aq_tile", "pollen_tile", "radar_tile"], j = ["current", "hourly", "sun", "pollen_tile", "moon", "uv_index", "aq_tile", "humidity", "pressure", "wind", "visibility", "radar_tile", "compared_to_average", "precipitation", "air_quality"].filter((h) => !x || x.includes(h)), Z = { current: "wide", hourly: "wide", compared_to_average: "double" }, pt = ["sun", "moon", "uv_index", "aq_tile", "pollen_tile", "humidity", "pressure", "wind"], et = {};
  j.forEach((h) => {
    const w = document.createElement("div");
    w.className = "wbItem", w.dataset.card = h, w.dataset.size = Z[h] || "tile", w.hidden = !0, pt.includes(h) && (w.dataset.xl = ""), V.appendChild(w), et[h] = { el: w, html: null };
  });
  let Q = !1, K = null, ht = 0, dt = -1, bt = !1, ot = null;
  const nt = "homecore-next-view", at = (() => {
    try {
      return localStorage.getItem(nt);
    } catch {
      return null;
    }
  })(), D = { graph: void 0, range: { preset: "day" }, picking: !1, openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: at === "bars" ? "bars" : "strip", aq: void 0 }, xt = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let st = /* @__PURE__ */ new Date(), Bt = /* @__PURE__ */ new Date();
  const it = {}, Ht = {}, E = {}, P = (h) => {
    var w;
    return ((w = E[h]) == null ? void 0 : w.forecast) ?? [];
  }, W = (h, w) => {
    var y;
    return E[w] ? (y = h.states) == null ? void 0 : y[E[w].entityId] : void 0;
  };
  function B(h) {
    const w = Ht[h];
    w && (w.unsub.then((y) => {
      typeof y == "function" && y();
    }).catch(() => {
    }), delete Ht[h]), E[h] && delete E[h];
  }
  function lt(h, w, y) {
    var F;
    if (typeof ((F = h.connection) == null ? void 0 : F.subscribeMessage) != "function") return;
    const L = { entityId: y };
    try {
      L.unsub = Promise.resolve(h.connection.subscribeMessage((X) => {
        Q || Ht[w] !== L || (X != null && X.forecast ? E[w] = { entityId: y, forecast: X.forecast } : delete E[w], ao());
      }, { type: "weather/subscribe_forecast", forecast_type: w, entity_id: y }));
    } catch (X) {
      L.unsub = Promise.reject(X);
    }
    L.unsub.catch(() => {
      Ht[w] === L && delete Ht[w];
    }), Ht[w] = L;
  }
  function ut(h, w) {
    var y;
    for (const L of ["daily", "hourly"]) {
      const F = yh(h, w, L);
      ((y = Ht[L]) == null ? void 0 : y.entityId) !== (F == null ? void 0 : F.entity_id) && (B(L), F && lt(h, L, F.entity_id));
    }
  }
  const mt = (h, w, y, L = !1) => h.callWS({
    type: "history/history_during_period",
    start_time: y.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [w],
    minimal_response: L,
    no_attributes: L,
    significant_changes_only: !1
  });
  async function wt(h, w) {
    var J, ft, tt;
    const y = na(h, w, "pressure");
    if (!y) return;
    const L = y.stateObj.entity_id, F = await mt(h, L, new Date(Date.now() - 3 * xe)), X = (tt = (ft = (J = F == null ? void 0 : F[L]) == null ? void 0 : J.find((gt) => {
      var vt;
      return typeof ((vt = gt.a) == null ? void 0 : vt.pressure) == "number";
    })) == null ? void 0 : ft.a) == null ? void 0 : tt.pressure;
    xt.pressureHistory = typeof X == "number" ? { entityId: L, value: X } : void 0;
  }
  async function kt(h, w) {
    var ft;
    const y = na(h, w, "temperature");
    if (!y) return;
    const L = y.stateObj.entity_id, F = nr(/* @__PURE__ */ new Date()), X = await mt(h, L, new Date(F.getTime() - zf * bn)), J = /* @__PURE__ */ new Map();
    for (const tt of (X == null ? void 0 : X[L]) ?? []) {
      const gt = (ft = tt.a) == null ? void 0 : ft.temperature, vt = new Date((tt.lc ?? tt.lu) * 1e3);
      if (typeof gt != "number" || vt >= F) continue;
      const St = vt.toDateString();
      J.set(St, Math.max(J.get(St) ?? -1 / 0, gt));
    }
    xt.temperatureHistory = { entityId: L, dailyHighs: [...J.values()], days: [...J.entries()].map(([tt, gt]) => ({ date: new Date(tt), high: gt })) };
  }
  async function Ot(h) {
    const w = Xd(h);
    if (!w) return;
    const y = await h.callWS({ type: "recorder/statistic_during_period", statistic_id: w, rolling_window: { duration: { hours: 24 } } });
    xt.rain = { entityId: w, change: (y == null ? void 0 : y.change) ?? void 0 };
  }
  function zt() {
    const h = l == null ? void 0 : l();
    if (!h || Q || typeof h.callWS != "function") return;
    const w = pn(h);
    xt.lastFetch = Date.now(), [wt(h, w), kt(h, w), Ot(h)].forEach((y) => y.then(() => ao(), () => {
    }));
  }
  async function da() {
    const h = l == null ? void 0 : l();
    if (!h) return;
    const w = na(h, pn(h), "temperature");
    if (!w) return;
    const y = w.stateObj.entity_id, L = nr(/* @__PURE__ */ new Date());
    try {
      const F = await mt(h, y, L), X = (J) => ((F == null ? void 0 : F[y]) ?? []).map((ft) => {
        var tt;
        return { time: ft.lu * 1e3, value: (tt = ft.a) == null ? void 0 : tt[J] };
      }).filter((ft) => typeof ft.value == "number");
      xt.todayHistory = { day: L.toDateString(), fetched: Date.now(), temperature: X("temperature"), humidity: X("humidity") }, ao();
    } catch {
    }
  }
  async function qt(h) {
    const w = l == null ? void 0 : l();
    if (w)
      try {
        const y = await mt(w, h, new Date(Date.now() - 24 * xe), !0), L = ((y == null ? void 0 : y[h]) ?? []).filter((X) => Re(X.s)), F = Math.max(1, Math.ceil(L.length / 48));
        xt.aqHistory = { entityId: h, points: L.filter((X, J) => J % F === 0).map((X) => ({ label: qa(new Date(X.lu * 1e3), w), value: Number(X.s) })) }, ao();
      } catch {
      }
  }
  function Cn(h) {
    xt.categories === void 0 && (xt.categories = null, Promise.resolve().then(() => h.callWS({ type: "integration/descriptions" })).then((w) => {
      xt.categories = Mh(w);
    }, () => {
      xt.categories = {};
    }).then(() => ao()));
  }
  function pn(h) {
    var y;
    const w = Object.keys(h.states || {}).filter((L) => L.startsWith("weather.") && Ns(h, L)).sort();
    return i && ((y = h.states) != null && y[i]) ? [i, ...w.filter((L) => L !== i)] : w;
  }
  const Tn = (h) => xt.categories ? { air: Sh(h, xt.categories), pollen: Ch(h, xt.categories) } : { air: [], pollen: [] };
  function Ie(h, w, y, L) {
    if (f === "line") return '<span class="wbWx wbS' + w + ' wbLineIcon" aria-hidden="true">' + Zd(h, y || h === "clear-night") + "</span>";
    if (f === "smooth") {
      const F = pf(h, w === 90, y, O + "g-" + L);
      return '<span class="wbWx wbS' + w + " wb" + F.k[0].toUpperCase() + F.k.slice(1) + (F.night ? " wbNight" : "") + '" aria-hidden="true">' + F.svg + "</span>";
    }
    return '<span class="wbWx wbS' + w + '" aria-hidden="true"><canvas data-wb-wx="' + Dt(Md(h, y)) + '" data-size="' + w + '"></canvas></span>';
  }
  const Wt = () => P("daily").filter((h) => h.templow != null).slice(0, If);
  function Kt(h, w) {
    const y = new Date(w.datetime), L = /* @__PURE__ */ new Date();
    return Bs(y, L) ? Lt.today : Bs(y, new Date(L.getTime() + bn)) ? Lt.tomorrow : zc(y, h);
  }
  const xa = (h, w, y) => y === 0 ? Kt(h, w) : zc(new Date(w.datetime), h);
  function Ln(h, w) {
    var vt, St, Vt, Pt;
    const y = xh(h, w);
    if (!y) return "";
    const L = Wt(), F = D.openDay !== void 0 ? L[D.openDay] : void 0, X = na(h, w, "temperature"), J = L[0], ft = J && Bs(new Date(J.datetime), /* @__PURE__ */ new Date()), tt = ((St = (vt = h.config) == null ? void 0 : vt.unit_system) == null ? void 0 : St.temperature) || ((Vt = y.attributes) == null ? void 0 : Vt.temperature_unit) || "";
    let gt = '<div class="wbCard wbWeather' + (F ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (F ? " inert" : "") + '><div class="wbNow">' + (k ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + Dt(Lt.openPage) + '">' : '<div class="wbCurrent">') + Ie(y.state, 90, wh(h), "now") + '<div class="wbTempBlock">' + (X && Re(X.value) ? '<div class="wbTemp"><span class="wbDeg">' + Dt(pe(Math.round(Number(X.value)), h.locale)) + '</span><span class="wbUnit">' + Dt(tt) + "</span></div>" : "") + '<div class="wbPlace">' + Dt(((Pt = h.config) == null ? void 0 : Pt.location_name) ?? "") + "</div></div>" + (k ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + Dt(Mi(h, y)) + "</div>" + (ft && J.templow != null ? '<div class="wbRange">' + Dt(Oa(Lt.range, { high: We(h, J.temperature), low: We(h, J.templow) })) + "</div>" : "") + "</div></div>";
    if (gt += ee(h) + _a(h), L.length) {
      const Tt = ft && X && Re(X.value) ? We(h, X.value) : "", jt = (It, Ct, Jt) => It === 0 && Tt ? '<span class="wbAsDay">' + Dt(Ct) + '</span><span class="wbAsNow">' + Dt(Jt) + "</span>" : Dt(Ct);
      gt += '<div class="wbColumns" role="list">' + L.map((It, Ct) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + Ct + '" data-wb-focus="col-' + Ct + '"><span class="wbDay">' + jt(Ct, xa(h, It, Ct), Lt.now) + "</span>" + Ie(It.condition ?? "cloudy", 60, !1, "col" + Ct) + '<span class="wbTemps"><span class="wbHi">' + jt(Ct, We(h, It.temperature), Tt) + '</span><span class="wbLo">' + Dt(We(h, It.templow)) + "</span></span></button>").join("") + "</div>", gt += '<div class="wbHalves" role="list">' + L.map((It, Ct) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + Ct + '" data-wb-focus="half-' + Ct + '">' + Ie(It.condition ?? "cloudy", 40, !1, "half" + Ct) + '<span class="wbText"><span class="wbName">' + Dt(Kt(h, It)) + '</span><span class="wbSub">' + Dt(Oa(Lt.highLow, { high: We(h, It.temperature), low: We(h, It.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return gt + "</div>" + (F ? Qt(h, w, F) : "") + "</div>";
  }
  const Nt = {
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
  }, Xt = {
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
  function oe(h) {
    const w = Date.now(), y = P("hourly").filter((St) => new Date(St.datetime).getTime() > w - xe).slice(0, 13);
    if (y.length < 2) return "";
    const L = (St) => qa(new Date(St.datetime), h), F = (St) => Nt[St.condition] || "", X = (St) => Xt[St.condition] || St.condition;
    let J = F(y[0]);
    if (!J) return "";
    let ft = y[0], tt = 0;
    for (const St of y.slice(1))
      tt === 2 || X(St) === X(ft) || !F(St) || (J += (tt ? " and " : ", ") + F(St) + " from " + L(St), ft = St, tt++);
    const gt = Number(y[0].temperature), vt = y.filter((St) => Re(St.temperature));
    if (Re(gt) && vt.length) {
      const St = vt.reduce((Pt, Tt) => Number(Tt.temperature) < Number(Pt.temperature) ? Tt : Pt), Vt = vt.reduce((Pt, Tt) => Number(Tt.temperature) > Number(Pt.temperature) ? Tt : Pt);
      gt - Number(St.temperature) >= 3 ? J += ", down to " + We(h, St.temperature) + " by " + L(St) : Number(Vt.temperature) - gt >= 3 && (J += ", up to " + We(h, Vt.temperature) + " by " + L(Vt));
    }
    return J[0].toUpperCase() + J.slice(1) + ".";
  }
  const ee = (h) => {
    const w = oe(h);
    return w ? '<div class="wbSummary"><p class="wbSummaryText">' + Dt(w) + "</p></div>" : "";
  };
  function _a(h) {
    const [w, y] = ld[_ == null ? void 0 : _()] || ld.day, L = Date.now(), F = P("hourly").filter((X) => {
      const J = new Date(X.datetime), ft = J.getHours();
      return J.getTime() > L - xe / 2 && ft >= w && ft < y && Re(X.temperature);
    }).slice(0, 4);
    return F.length ? '<div class="wbNextHours" role="list">' + F.map((X, J) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + Dt(qa(new Date(X.datetime), h)) + "</span>" + Ie(X.condition ?? "cloudy", 40, X.is_daytime === !1, "hr" + J) + '<span class="wbHourTemp">' + Dt(We(h, X.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function or(h) {
    const w = h.getTime(), y = Date.now() - xe;
    return P("hourly").filter((L) => {
      const F = new Date(L.datetime).getTime();
      return F >= w && F < w + bn && F > y;
    });
  }
  function ja(h) {
    if (!h.length) return ["temperature"];
    const w = ["temperature"];
    return h.some((y) => y.precipitation != null || y.precipitation_probability != null) && w.push("precipitation"), h.some((y) => y.humidity != null) && w.push("humidity"), w;
  }
  function Qt(h, w, y) {
    const L = nr(new Date(y.datetime)), F = or(L), X = ja(F), J = X.includes(D.dayMode) ? D.dayMode : "temperature", ft = (tt) => tt === "humidity" ? Lt.humidity : Lt.modes[tt];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + Ie(y.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + Dt(Kt(h, y)) + '</span><span class="wbSub">' + Dt(Oa(Lt.highLow, { high: We(h, y.temperature), low: We(h, y.templow) })) + '</span></div><button class="wbBack" title="' + Dt(Lt.back) + '" data-wb="close-day" data-wb-focus="back-day">' + Ci(ye.back) + "</button></div>" + (X.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + X.map((tt) => '<button aria-pressed="' + (tt === J) + '" data-wb="day-mode" data-mode="' + tt + '" data-wb-focus="day-mode-' + tt + '">' + Dt(ft(tt)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Ah(Ee(h, w, L, F, J)) + "</div></div>";
  }
  function Ee(h, w, y, L, F) {
    var xn;
    const X = y.getTime(), J = Date.now(), ft = Bs(y, /* @__PURE__ */ new Date()), tt = (le) => (le - X) / Ea, gt = (le) => qa(new Date(le), h), vt = (le) => new Date(le.datetime).getTime(), St = [0, 3, 6, 9, 12, 15, 18, 21].map((le) => ({ t: le * 60, label: gt(X + le * xe), minor: le % 6 !== 0 })), { rise: Vt, set: Pt } = Rs(h, y), Tt = [], jt = [];
    Vt && (Tt.push({ t: tt(Vt.getTime()), label: gt(Vt.getTime()), rise: !0 }), jt.push([0, tt(Vt.getTime())])), Pt && (Tt.push({ t: tt(Pt.getTime()), label: gt(Pt.getTime()), rise: !1 }), jt.push([tt(Pt.getTime()), yl]));
    const It = kl(h);
    !Vt && !Pt && It && kd(new Date(X + bn / 2), It.lat, It.lon) < 0 && jt.push([0, yl]);
    const Ct = ft ? tt(J) : void 0, Jt = { hours: St, sun: Tt, night: jt };
    if (!L.length && !ft) return { ...Jt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Lt.noHourly };
    if (F === "precipitation") {
      const le = L.some((ca) => ca.precipitation_probability != null), ro = L.map((ca) => ({ t: tt(vt(ca)), v: Number((le ? ca.precipitation_probability : ca.precipitation) ?? 0) })), Za = er(h, W(h, "hourly"), "precipitation"), In = Math.max(0, ...ro.map((ca) => ca.v)), Hn = le ? 100 : $c(0, Math.max(In, 1), [0.5, 1, 2, 5, 10]).max, Hi = (ca) => le ? pe(ca, h.locale) + "%" : pe(ca, h.locale, { maximumFractionDigits: 1 }) + " " + Za, ni = ro.find((ca) => ca.v === In);
      return {
        ...Jt,
        kind: "bars",
        points: ro,
        min: 0,
        max: Hn,
        ticks: [0, Hn / 2, Hn],
        format: Hi,
        now: Ct !== void 0 ? { t: Ct, v: 0 } : void 0,
        peak: ni && In > 0 ? { t: ni.t + 30, v: ni.v, label: Hi(ni.v) } : void 0,
        note: In > 0 ? void 0 : Lt.noRain
      };
    }
    const Yt = F === "humidity" ? "humidity" : "temperature", fe = L.filter((le) => le[Yt] != null && (!ft || vt(le) >= J)).map((le) => ({ t: tt(vt(le)), v: Number(le[Yt]) }));
    let _t, Pe = [];
    if (Ct !== void 0) {
      const le = na(h, w, Yt);
      le && Re(le.value) && (_t = { t: Ct, v: Number(le.value) }, fe.unshift(_t)), Pe = (((xn = xt.todayHistory) == null ? void 0 : xn.day) === y.toDateString() ? xt.todayHistory[Yt] : []).filter((Za) => Za.time <= J).map((Za) => ({ t: Math.max(0, tt(Za.time)), v: Za.value })), _t && Pe.length && Pe.push(_t);
    }
    const He = [...Pe, ...fe];
    if (!He.length) return { ...Jt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Lt.noHourly };
    const ma = He.map((le) => le.v), ga = $c(Math.min(...ma), Math.max(...ma), Yt === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    Yt === "humidity" && (ga.min = Math.max(0, ga.min), ga.max = Math.min(100, ga.max), ga.ticks = ga.ticks.filter((le) => le >= 0 && le <= 100));
    const Ii = Yt === "humidity" ? (le) => pe(le, h.locale) + "%" : (le) => We(h, le), Ba = Yt === "temperature" ? He.reduce((le, ro) => ro.v > le.v ? ro : le) : void 0;
    return { ...Jt, kind: "line", points: fe, past: Pe, ...ga, format: Ii, now: _t, peak: Ba ? { ...Ba, label: Ii(Ba.v) } : void 0 };
  }
  function ir(h) {
    const w = ["temperature"];
    return h.some((y) => y.precipitation_probability != null || y.precipitation != null) && w.push("precipitation"), h.some((y) => y.wind_speed != null) && w.push("wind"), w;
  }
  function Zn(h, w, y = Nc) {
    var X, J;
    const L = P("daily"), F = [];
    for (let ft = 0; ft < y; ft++) for (const tt of [!1, !0]) {
      const gt = h.getTime() + (ft * 24 + (tt ? 12 : 0)) * xe, vt = gt + 12 * xe, St = {};
      w.forEach((Pt) => {
        const Tt = new Date(Pt.datetime).getTime();
        Pt.condition && Tt >= gt && Tt < vt && (St[Pt.condition] = (St[Pt.condition] ?? 0) + (Vf.has(Pt.condition) ? 2 : 1));
      });
      let Vt = (X = Object.entries(St).sort((Pt, Tt) => Tt[1] - Pt[1])[0]) == null ? void 0 : X[0];
      if (!Vt) {
        const Pt = new Date(gt).toDateString();
        Vt = ((J = L.find((Tt) => new Date(Tt.datetime).toDateString() === Pt)) == null ? void 0 : J.condition) ?? "cloudy";
      }
      F.push({ cond: tt && Vt === "sunny" ? "clear-night" : Vt, night: tt });
    }
    return F;
  }
  function rr(h, w, y) {
    const L = W(h, "hourly"), F = w.precipitation_probability != null ? pe(w.precipitation_probability, h.locale) + "%" : "", X = w.precipitation ? pe(w.precipitation, h.locale) + " " + er(h, L, "precipitation") : "";
    switch (y) {
      case "precipitation":
        return F ? [F, X] : [X || "–", ""];
      case "wind":
        return w.wind_speed != null ? [pe(Math.round(w.wind_speed), h.locale), er(h, L, "wind_speed")] : ["–", ""];
      default:
        return [We(h, w.temperature), (w.precipitation_probability ?? 0) >= 20 ? F : ""];
    }
  }
  function De(h, w, y) {
    const [L, F] = ld[_ == null ? void 0 : _()] || ld.day, X = [];
    for (let J = 0; J < 4 && X.length < 3; J++) {
      const ft = /* @__PURE__ */ new Date();
      ft.setHours(0, 0, 0, 0), ft.setDate(ft.getDate() + J);
      const tt = new Date(ft);
      tt.setHours(F, 0, 0, 0), ft.setHours(L, 0, 0, 0), !(tt.getTime() <= y || !w.some((gt) => {
        const vt = new Date(gt.datetime).getTime();
        return vt >= ft.getTime() && vt <= tt.getTime();
      })) && X.push({ a: ft.getTime(), b: tt.getTime(), label: Kt(h, { datetime: ft.toISOString() }) });
    }
    return X;
  }
  function An(h, w, y, L, F, X) {
    const J = (y.b - w.a) / xe, ft = (Ct) => ((Ct - w.a) / xe).toFixed(3), tt = 80, gt = 32, vt = [];
    for (const Ct = new Date(w.a - bn); Ct.getTime() < y.b + bn; Ct.setDate(Ct.getDate() + 1)) {
      const { rise: Jt, set: Yt } = Rs(h, new Date(Ct));
      Jt && Yt && vt.push({ rise: Jt.getTime(), set: Yt.getTime() });
    }
    const St = (Ct, Jt) => tt - (tt - gt) * Math.sin(Math.PI * (Jt - Ct.rise) / (Ct.set - Ct.rise)), Vt = (Ct) => !vt.some((Jt) => Ct >= Jt.rise && Ct <= Jt.set);
    let Pt = "", Tt = "", jt = "";
    vt.forEach((Ct, Jt) => {
      const Yt = [];
      for (let _t = Ct.rise; _t <= Ct.set; _t += 15 * Ea) Yt.push(ft(_t) + "," + St(Ct, _t).toFixed(2));
      Yt.push(ft(Ct.set) + "," + tt), Pt += '<polyline class="wbLineArc" points="' + Yt.join(" ") + '"/>';
      const fe = vt[Jt + 1];
      fe && (Pt += '<rect class="wbLineNight" x="' + ft(Ct.set) + '" y="0" width="' + ((fe.rise - Ct.set) / xe).toFixed(3) + '" height="100"/>'), [[Ct.rise, "↑"], [Ct.set, "↓"]].forEach(([_t, Pe]) => {
        _t < w.a || _t > y.b || (Tt += '<line class="wbLineEdge" x1="' + ft(_t) + '" x2="' + ft(_t) + '" y1="0" y2="100"/>', jt += '<span class="wbLineTime" style="left:' + X(_t) + '">' + Pe + " " + Dt(qa(new Date(_t), h)) + "</span>");
      });
    });
    const It = vt.find((Ct) => F >= Ct.rise && F <= Ct.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + J + ' 100" preserveAspectRatio="none" aria-hidden="true">' + Pt + Tt + '<line class="wbLineHorizon" x1="0" x2="' + J + '" y1="' + tt + '" y2="' + tt + '"/></svg>' + jt + (It ? '<span class="wbLineNow" style="left:' + X(F) + ";top:" + St(It, F) + '%">' + Zd("sunny", !1) + "</span>" : "") + L.filter((Ct) => Ct.entry && !Ct.now).map((Ct) => '<span class="wbLineGlyph' + Ct.edge + '" style="left:' + X(Ct.t) + '">' + Zd(Ct.entry.condition ?? "cloudy", Vt(Ct.t)) + "</span>").join("");
  }
  function Ut(h, w) {
    delete it.hourly;
    const y = D.hourlyView === "bars" ? "bars" : "strip", L = '<div class="wbHeader"><h2 class="wbTitle">' + Dt(y === "bars" ? Lt.nextDays : Lt.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + Dt(Lt.showAs) + '">' + ["strip", "bars"].map((_t) => '<button aria-pressed="' + (_t === y) + '" data-wb="hourly-view" data-view="' + _t + '" data-wb-focus="hourly-view-' + _t + '">' + Dt(Lt.views[_t]) + "</button>").join("") + "</div></div>";
    if (y === "bars") return un(h, w, L);
    const F = P("hourly"), X = Math.floor(Date.now() / Ea) * Ea, J = F.filter((_t) => new Date(_t.datetime).getTime() > X - xe);
    if (!J.length) return "";
    const ft = ir(J), tt = ft.includes(D.hourlyMode) ? D.hourlyMode : "temperature", gt = De(h, F, X);
    if (!gt.length) return "";
    const vt = gt[0], St = gt[gt.length - 1], Vt = (vt.b - vt.a) / xe, Pt = (_t) => "calc(var(--wb-u) * " + ((_t - vt.a) / xe).toFixed(3) + ")", Tt = new Date(vt.a);
    Tt.setHours(6, 0, 0, 0), Tt.getTime() > vt.a && Tt.setDate(Tt.getDate() - 1);
    const jt = Math.ceil((St.b - Tt.getTime()) / bn);
    f !== "line" && (it.hourly = { segs: Zn(Tt, F, jt), seed: Tt.getDate(), columns: jt });
    const It = (_t) => _t === vt.a ? " wbFirst" : _t === St.b ? " wbLast" : "", Ct = [];
    for (let _t = vt.a; _t < St.b; ) {
      const Pe = new Date(_t);
      Pe.setHours(24, 0, 0, 0);
      const He = Math.min(Pe.getTime(), St.b);
      Ct.push({ a: _t, b: He, label: Kt(h, { datetime: new Date(_t).toISOString() }), page: gt.find((ma) => ma.a >= _t && ma.a < He) || gt.find((ma) => ma.a < He && ma.b > _t) }), _t = He;
    }
    const Jt = X > vt.a && X < St.b ? Math.floor((X - vt.a) / (2 * xe)) * 2 : 0, Yt = [];
    for (let _t = vt.a; _t <= St.b; _t += xe) {
      const Pe = new Date(_t), He = It(_t);
      !He && Pe.getHours() % Ff || !He && (Math.abs(vt.a - _t) < 2 * xe || Math.abs(St.b - _t) < 2 * xe) || X >= vt.a && Math.abs(_t - X) < 1.5 * xe && !He || Yt.push({ t: _t, edge: He, label: qa(Pe, h), entry: _t >= X - xe ? F.find((ma) => new Date(ma.datetime).getTime() === _t) : void 0 });
    }
    X > vt.a && X < vt.b && Yt.push({ t: X, edge: X - vt.a < xe ? " wbFirst" : vt.b - X < xe ? " wbLast" : "", label: Lt.now, entry: J[0], now: !0 });
    const fe = (_t, Pe) => '<span class="wbMark' + _t.edge + (_t.now ? " wbNowMark" : "") + '" style="left:' + Pt(_t.t) + '">' + Pe + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + L + (ft.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + ft.map((_t) => '<button aria-pressed="' + (_t === tt) + '" data-wb="hourly-mode" data-mode="' + _t + '" data-wb-focus="hourly-mode-' + _t + '">' + Dt(Lt.modes[_t]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + Dt(Lt.nextHours) + '" data-span="' + Vt + '" data-start="' + Jt + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Vt + ");width:calc(var(--wb-u) * " + (St.b - vt.a) / xe + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((St.b - vt.a) / (2 * xe)) + 1)].map((_t, Pe) => '<i class="wbSnap" style="left:' + Pt(vt.a + Pe * 2 * xe) + '"></i>').join("") + '<div class="wbDays">' + Ct.map((_t, Pe) => {
      var He;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((_t.b - _t.a) / xe).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (Pe === 0 ? Jt : ((((He = _t.page) == null ? void 0 : He.a) ?? _t.a) - vt.a) / xe) + '" data-wb-focus="hours-day-' + Pe + '">' + Dt(_t.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + Yt.map((_t) => fe(_t, Dt(_t.label))).join("") + "</div>" + (f === "line" ? '<div class="wbSky wbLineSky">' + An(h, vt, St, Yt, X, Pt) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + Pt(Tt.getTime()) + ";width:calc(var(--wb-u) * " + jt * 24 + ')"><canvas data-wb-strip="hourly"' + (f === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (X > vt.a ? '<i class="wbPast" style="width:' + Pt(Math.min(X, St.b)) + '"></i><i class="wbNowLine" style="left:' + Pt(X) + '"></i>' : "") + Ct.slice(1).map((_t) => '<i class="wbMidnight" style="left:' + Pt(_t.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + Yt.map((_t) => {
      if (!_t.entry) return "";
      const [Pe, He] = rr(h, _t.entry, tt);
      return fe(_t, '<span class="wbPrimaryV">' + Dt(Pe) + '</span><span class="wbSecondary">' + Dt(He) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function Hs(h) {
    const w = Of, y = w.findIndex(([tt]) => tt >= h);
    if (y <= 0) return "rgb(" + w[y < 0 ? w.length - 1 : 0][1].join(",") + ")";
    const [L, F] = w[y - 1], [X, J] = w[y], ft = (h - L) / (X - L);
    return "rgb(" + F.map((tt, gt) => Math.round(tt + (J[gt] - tt) * ft)).join(",") + ")";
  }
  function un(h, w, y) {
    var Pt;
    const L = P("daily").filter((Tt) => Re(Tt.templow) && Re(Tt.temperature)).slice(0, 7);
    if (!L.length) return "";
    const F = Math.min(...L.map((Tt) => Number(Tt.templow))), X = Math.max(...L.map((Tt) => Number(Tt.temperature))), J = Math.max(1, X - F), ft = (Tt) => Math.max(0, Math.min(100, (Tt - F) / J * 100)).toFixed(2), tt = /F/.test(er(h, W(h, "daily"), "temperature")), gt = (Tt) => tt ? (Tt - 32) / 1.8 : Tt, vt = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((Tt) => Hs(gt(F + Tt * J)) + " " + Tt * 100 + "%").join(",") + ")", St = (Pt = na(h, w, "temperature")) == null ? void 0 : Pt.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (ir(P("hourly").filter((Tt) => new Date(Tt.datetime).getTime() > Date.now() - xe)).length > 1 ? " wbTabbed" : "") + '">' + y + '<div class="wbDayBars" role="list">' + L.map((Tt, jt) => {
      const It = Kt(h, Tt), Ct = Bs(new Date(Tt.datetime), /* @__PURE__ */ new Date()), Jt = Number(Tt.templow), Yt = Number(Tt.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + Dt(Oa(Lt.rangeRow, { day: It, low: We(h, Jt), high: We(h, Yt) })) + '"><span class="wbRangeDay">' + Dt(It) + "</span>" + Ie(Tt.condition, 40, !1, "r" + jt) + '<span class="wbRangeLo">' + Dt(We(h, Jt)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + vt + ";clip-path:inset(0 " + (100 - ft(Yt)) + "% 0 " + ft(Jt) + '% round 4px)"></i>' + (Ct && Re(St) ? '<i class="wbRangeNow" style="left:' + ft(Number(St)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + Dt(We(h, Yt)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  const Ge = [[-120, "#0d1530"], [-60, "#1c2550"], [-15, "#c9707a"], [30, "#f2a46a"], [60, "#b49bc8"], [90, "#5aa5e6"]], Ft = [[-90, "#5aa5e6"], [-60, "#a99bd0"], [-30, "#f0a54a"], [15, "#c45a5a"], [60, "#3a2a5c"], [120, "#0d1530"]], Zt = (h, w) => {
    if (w <= h[0][0]) return h[0][1];
    for (let y = 1; y < h.length; y++) if (w <= h[y][0]) {
      const [L, F] = h[y - 1], [X, J] = h[y];
      return Th(F, J, (w - L) / (X - L));
    }
    return h[h.length - 1][1];
  }, Ue = (h, w, y) => {
    if (!w || !y) return Ge[5][1];
    const L = (h.getTime() - y.getTime()) / Ea;
    return L >= -90 ? Zt(Ft, L) : Zt(Ge, (h.getTime() - w.getTime()) / Ea);
  }, ae = (h) => (h >= 60 ? Math.floor(h / 60) + "h " : "") + h % 60 + "m";
  function At(h) {
    const w = st, { rise: y, set: L } = Rs(h, w), F = y && L ? Math.round((L.getTime() - y.getTime()) / Ea) : 0, X = Math.floor(F / 60), J = F % 60, ft = (fe) => fe ? qa(fe, h) : "–", tt = new Date(w);
    tt.setDate(tt.getDate() + 1);
    const gt = Rs(h, tt), vt = gt.rise && gt.set ? Math.round((gt.set.getTime() - gt.rise.getTime()) / Ea) : 0, St = new Date(w);
    St.setDate(St.getDate() - 1);
    const Vt = !!(y && L && w >= y && w <= L), Pt = !!(y && w < y), Tt = Vt ? y : Pt ? Rs(h, St).set : L, jt = Vt ? L : Pt ? y : gt.rise, It = Tt && jt ? Math.min(1, Math.max(0, (w.getTime() - Tt.getTime()) / (jt.getTime() - Tt.getTime()))) : 0, Ct = jt ? Math.max(0, Math.round((jt.getTime() - w.getTime()) / Ea)) : 0, Jt = jt ? ae(Ct) : "–", Yt = Vt ? Lt.untilSunset : Lt.untilSunrise;
    return nn({
      icon: ye.sunny,
      name: Lt.sun,
      sub: F ? Oa(Lt.daylightShort, { hours: X, minutes: J }) : void 0,
      cls: "wbSunTile",
      callouts: [[Lt.callout.riseTomorrow, ft(gt.rise)], [Lt.callout.setTomorrow, ft(gt.set)], ...vt ? [[Lt.callout.dayTomorrow, Math.floor(vt / 60) + "h " + vt % 60 + "m"]] : []],
      zone: '<div class="wbSunZone" style="background:' + Ue(w, y, L) + '"><svg class="wbSunTrack" data-up="' + (Vt ? 1 : 0) + '" data-f="' + It.toFixed(4) + '" aria-hidden="true"></svg><div class="wbSunCount"><span class="wbSunLeft">' + Dt(Jt) + '</span><span class="wbSunWord">' + Dt(Yt) + '</span></div><span class="wbSunAt wbSunRise">' + Dt(ft(y)) + '</span><span class="wbSunAt wbSunSet">' + Dt(ft(L)) + "</span></div>" + // at M, the countdown alone (Matt, 10 Nov): M's zone has room for one line
      pd(Un(Jt, ""))
    });
  }
  const re = 22;
  function de(h) {
    const w = Math.round(h.clientWidth), y = Math.round(h.clientHeight), L = re, F = L / 2, X = w + "x" + y + ":" + h.dataset.f + ":" + h.dataset.up;
    if (w < L * 3 || y < L * 3 || h.dataset.drawn === X) return;
    h.dataset.drawn = X;
    const J = "M" + F + " " + (y - L) + "V" + L + "A" + F + " " + F + " 0 0 1 " + L + " " + F + "H" + (w - L) + "A" + F + " " + F + " 0 0 1 " + (w - F) + " " + L + "V" + (y - L), ft = "M" + (w - F) + " " + (y - L) + "A" + F + " " + F + " 0 0 1 " + (w - L) + " " + (y - F) + "H" + L + "A" + F + " " + F + " 0 0 1 " + F + " " + (y - L), tt = 16, gt = 6, vt = "M" + tt + " 0H" + (w - tt) + "A" + tt + " " + tt + " 0 0 1 " + w + " " + tt + "V" + (y - tt) + "A" + tt + " " + tt + " 0 0 1 " + (w - tt) + " " + y + "H" + tt + "A" + tt + " " + tt + " 0 0 1 0 " + (y - tt) + "V" + tt + "A" + tt + " " + tt + " 0 0 1 " + tt + " 0ZM" + (L + gt) + " " + L + "A" + gt + " " + gt + " 0 0 0 " + L + " " + (L + gt) + "V" + (y - L - gt) + "A" + gt + " " + gt + " 0 0 0 " + (L + gt) + " " + (y - L) + "H" + (w - L - gt) + "A" + gt + " " + gt + " 0 0 0 " + (w - L) + " " + (y - L - gt) + "V" + (L + gt) + "A" + gt + " " + gt + " 0 0 0 " + (w - L - gt) + " " + L + "Z", St = h.dataset.up === "1", Vt = Number(h.dataset.f) || 0, Pt = "http://www.w3.org/2000/svg";
    h.setAttribute("viewBox", "0 0 " + w + " " + y);
    const Tt = document.createElementNS(Pt, "path");
    Tt.setAttribute("d", St ? J : ft), h.replaceChildren(Tt);
    const jt = Tt.getTotalLength(), It = Tt.getPointAtLength(jt * Vt), Ct = St ? jt : 0;
    h.innerHTML = '<defs><mask id="' + O + 'sun-day"><path d="' + J + '" fill="none" stroke="#fff" stroke-width="' + L * 2 + '"></path></mask><mask id="' + O + 'sun-done"><path d="' + J + '" fill="none" stroke="#fff" stroke-width="' + L * 2 + '" stroke-dasharray="' + (St ? (Ct * Vt).toFixed(1) + " " + (Ct + 1).toFixed(1) : "0 99999") + '"></path></mask></defs><path class="wbSunBand" fill-rule="evenodd" d="' + vt + '"></path><path class="wbSunBand wbSunDay" fill-rule="evenodd" d="' + vt + '" mask="url(#' + O + 'sun-day)"></path><path class="wbSunBand wbSunDone" fill-rule="evenodd" d="' + vt + '" mask="url(#' + O + 'sun-done)"></path><circle class="wbSunDot' + (St ? "" : " wbSunNight") + '" cx="' + It.x.toFixed(1) + '" cy="' + It.y.toFixed(1) + '" r="' + F + '"></circle>';
  }
  const me = typeof ResizeObserver == "function" ? new ResizeObserver((h) => h.forEach((w) => de(w.target))) : null;
  function za() {
    me == null || me.disconnect(), S.querySelectorAll("svg.wbSunTrack").forEach((h) => {
      de(h), me == null || me.observe(h);
    });
  }
  function sr(h, w, y) {
    const L = (J) => O + "moon-" + J, F = h > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + L("terminator") + ')" d="' + Lh(61, 61, 57.9, h) + '"' + (w ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", X = (J, ft, tt, gt, vt, St) => '<filter id="' + L(J) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + ft + '" numOctaves="' + tt + '" seed="' + gt + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Vt) => "<feFunc" + Vt + ' type="linear" slope="' + vt + '" intercept="' + St + '"></feFunc' + Vt + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + L("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + L("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + L("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + L("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + L("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + X("mottle", "0.045", 4, 3, 1.8, -0.4) + X("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + L("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + L("fill") + ')"></circle><g' + (y ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + L("soften") + ')">' + _h.map(([J, ft, tt, gt, vt, St]) => '<ellipse cx="' + J + '" cy="' + ft + '" rx="' + tt + '" ry="' + gt + '" fill-opacity="' + St + '" transform="rotate(' + vt + " " + J + " " + ft + ')"></ellipse>').join("") + "</g>" + Dh.map(([J, ft, tt]) => '<circle class="wbCrater" cx="' + J + '" cy="' + ft + '" r="' + tt + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + L("glow") + ')">' + Bh.map(([J, ft]) => '<line x1="54.4" y1="95" x2="' + J + '" y2="' + ft + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + L("glow") + ')">' + Jc.map(([J, ft, tt]) => '<circle cx="' + J + '" cy="' + ft + '" r="' + tt * 2 + '"></circle>').join("") + "</g>" + Jc.map(([J, ft, tt]) => '<circle class="wbBrightCenter" cx="' + J + '" cy="' + ft + '" r="' + tt + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + L("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + L("grain") + ')"></rect>' + F + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function Ei(h) {
    const w = Bt, y = kl(h), L = (y == null ? void 0 : y.lat) ?? 0, F = $d(w), X = Kc(h), J = X ? h.states[X] : void 0, ft = Pr(J) && Xf.includes(J.state) ? J.state : bh(F.phase), { rise: tt, set: gt } = y ? vh(w, y.lat, y.lon) : {}, vt = F.phase > 0.5 != L < 0, St = pe(Math.round(F.fraction * 100), h.locale) + "%", Vt = tt ?? gt;
    return Vt && qa(Vt, h), nn({
      icon: ye.night,
      name: Lt.moon,
      sub: Lt.phases[ft],
      callouts: [...tt ? [[Lt.callout.moonrise, qa(tt, h)]] : [], ...gt ? [[Lt.callout.moonset, qa(gt, h)]] : [], [Lt.callout.lit, St]],
      // at M, how much of it is lit (Matt, 10 Nov)
      zone: '<div class="wbMoonBox">' + sr(F.fraction, vt, L < 0) + "</div>" + pd(Un(pe(Math.round(F.fraction * 100), h.locale), "%"))
    });
  }
  function ea(h, w) {
    var Tt;
    const y = na(h, w, "wind_speed");
    if (!y || !Re(y.value)) return "";
    const L = na(h, w, "wind_gust_speed"), F = na(h, w, "wind_bearing"), X = F && Re(F.value) ? Number(F.value) : void 0, J = kh(Number(y.value), (Tt = y.stateObj.attributes) == null ? void 0 : Tt.wind_speed_unit), ft = vd(h, y.stateObj, "wind_speed", y.value), tt = X !== void 0 ? Lt.cardinal[$f[((X + 11.25) / 22.5 | 0) % 16]] : void 0, gt = L ? Uc(h, L.stateObj, "wind_gust_speed", L.value) : void 0, vt = [tt ? Oa(Lt.windFrom, { direction: tt }) : void 0, J !== void 0 ? J + " " + Lt.beaufort : void 0].filter(Boolean).join(" · ") || gt, St = (jt, It) => {
      const Ct = (jt - 90) * Math.PI / 180;
      return [100 + It * Math.cos(Ct), 100 + It * Math.sin(Ct)];
    }, Vt = Array.from({ length: 36 }, (jt, It) => It * 10).map((jt) => {
      const It = jt % 90 === 0, [Ct, Jt] = St(jt, 97), [Yt, fe] = St(jt, It ? 83 : 89);
      return '<line class="wbTick' + (It ? " wbMajor" : "") + '" x1="' + Ct + '" y1="' + Jt + '" x2="' + Yt + '" y2="' + fe + '"></line>';
    }).join(""), Pt = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([jt, It]) => {
      const [Ct, Jt] = St(It, 64);
      return '<text class="wbLetter' + (jt === "n" ? " wbNorth" : "") + '" x="' + Ct + '" y="' + Jt + '">' + Dt(Lt.cardinal[jt]) + "</text>";
    }).join("");
    return nn({ icon: ye.windy, name: Lt.wind, sub: vt, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Vt + Pt + (X !== void 0 ? '<path class="wbMarker" transform="rotate(' + X + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + Dt(ft.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + Dt(ft.unit) + "</text></svg>" });
  }
  const En = (h, w) => {
    if (h < 3) return Lt.advice.fine;
    if (h < 8) return Lt.advice.sunblock;
    const y = Date.now(), L = P("hourly").find((F) => F.uv_index != null && new Date(F.datetime).getTime() > y && F.uv_index < 6);
    return L && new Date(L.datetime).toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? Oa(Lt.advice.avoidUntil, { time: qa(new Date(L.datetime), w) }) : Lt.advice.avoidToday;
  };
  function _i(h, w) {
    const y = na(h, w, "uv_index");
    if (!y || !Re(y.value)) return "";
    const L = Number(y.value), F = Lt.uvLevel[Yc(L)], X = /* @__PURE__ */ new Date();
    X.setHours(23, 59, 59, 999);
    const J = P("hourly").filter((vt) => vt.uv_index != null && new Date(vt.datetime) > /* @__PURE__ */ new Date() && new Date(vt.datetime) <= X).reduce((vt, St) => !vt || St.uv_index > vt.uv ? { uv: St.uv_index, time: new Date(St.datetime) } : vt, void 0), ft = Jf[Yc(L)], tt = 216 * Math.min(1, Math.max(0.08, 0.4 + (L - 4.5) * (0.5 / 5.5))), gt = '<svg class="wbUvArt" viewBox="0 0 216 198" preserveAspectRatio="xMinYMin slice" aria-hidden="true"><defs><radialGradient id="' + O + 'uv-sun" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="' + tt.toFixed(1) + '"><stop offset="0" style="stop-color:color-mix(in srgb, ' + ft + ' 28%, #fff6dd)"></stop><stop offset=".62" style="stop-color:color-mix(in srgb, ' + ft + ' 62%, #fff6dd)"></stop><stop offset="1" style="stop-color:' + ft + '"></stop></radialGradient></defs><circle class="wbUvSun" cx="0" cy="0" r="' + tt.toFixed(1) + '" fill="url(#' + O + 'uv-sun)"></circle></svg><div class="wbUvBig"><span class="wbUvNum">' + Dt(pe(Math.round(L), h.locale)) + '</span><span class="wbUvWord">' + Dt(F) + "</span></div>" + pd(Un(pe(Math.round(L), h.locale), ""));
    return nn({
      icon: ye.sunnyAlert,
      name: Lt.metrics.uv_index,
      sub: J && J.uv > L ? Oa(Lt.uvPeak, { level: F, uv_index: pe(Math.round(J.uv), h.locale), time: qa(J.time, h) }) : F,
      zone: gt,
      cls: "wbUv",
      callouts: [En(L, h), [Lt.callout.now, pe(Math.round(L), h.locale) + " · " + F], [Lt.callout.peak, J && J.uv > L ? pe(Math.round(J.uv), h.locale) + " at " + qa(J.time, h) : Lt.callout.now]]
    });
  }
  function lr(h) {
    const w = P("daily")[0], y = xt.temperatureHistory;
    if (!w || new Date(w.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !Re(w.temperature) || !y || y.dailyHighs.length < Gf) return "";
    const L = Number(w.temperature), F = y.dailyHighs.reduce((It, Ct) => It + Ct, 0) / y.dailyHighs.length, X = Math.round(L - F) || 0, J = X > 0 ? "above" : X < 0 ? "below" : "same", ft = [...y.days, { date: /* @__PURE__ */ new Date(), high: L, today: !0 }], tt = ft.map((It) => It.high).concat(F), gt = Math.min(...tt) - 1, vt = Math.max(...tt) + 1, St = (It) => (1 - (It - gt) / (vt - gt)) * 100, Vt = (It) => (It + 0.5) / ft.length * 100, Pt = ft.map((It, Ct) => [Vt(Ct), St(It.high)]), Tt = Pt.map(([It, Ct], Jt) => (Jt ? "L" : "M") + It.toFixed(2) + " " + Ct.toFixed(2)).join(""), jt = '<div class="wbCompareBars wbTrend" aria-hidden="true"><div class="wbTrendPlot"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><defs><linearGradient id="' + O + 'trend" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--primary)" stop-opacity=".28"></stop><stop offset="1" style="stop-color:var(--primary)" stop-opacity="0"></stop></linearGradient></defs><path class="wbTrendArea" d="' + Tt + "L" + Pt[Pt.length - 1][0].toFixed(2) + " 100L" + Pt[0][0].toFixed(2) + ' 100Z" fill="url(#' + O + 'trend)"></path><line class="wbAvgLine" x1="0" x2="100" y1="' + St(F).toFixed(2) + '" y2="' + St(F).toFixed(2) + '" vector-effect="non-scaling-stroke"></line><path class="wbTrendLine" d="' + Tt + '" vector-effect="non-scaling-stroke"></path></svg><span class="wbTrendAvg" style="top:' + St(F).toFixed(2) + '%">' + Dt(We(h, F)) + "</span>" + ft.map((It, Ct) => {
      const Jt = It.today ? " wbToday" : "", Yt = "left:" + Vt(Ct).toFixed(2) + "%;top:" + St(It.high).toFixed(2) + "%";
      return '<i class="wbTrendDot' + Jt + '" style="' + Yt + '"></i><span class="wbAvgValue' + Jt + '" style="' + Yt + '">' + Dt(We(h, It.high)) + "</span>";
    }).join("") + '</div><div class="wbTrendDays">' + ft.map((It, Ct) => '<span class="wbAvgDay' + (It.today ? " wbToday" : "") + '" style="left:' + Vt(Ct).toFixed(2) + '%">' + Dt(sh(It.date, h)) + "</span>").join("") + "</div></div>";
    return nn({
      icon: ye.chartLine,
      name: Lt.metrics.compared_to_average,
      double: !0,
      sub: Oa(Lt.highsLastDays, { days: y.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (X > 0 ? "+" : "") + Dt(We(h, X)) + '</div><div class="wbCompareWords">' + Dt(Lt.average[J]) + '</div><div class="wbCompareTemps">' + Dt(Oa(Lt.todayVsAverage, { today: We(h, L), average: We(h, F) })) + "</div></div>" + jt + "</div>"
    });
  }
  function _n(h, w) {
    const y = na(h, w, "humidity");
    if (!y || !Re(y.value)) return "";
    const L = na(h, w, "dew_point"), F = Math.max(0, Math.min(100, Number(y.value)));
    return nn({
      icon: ye.waterPercent,
      name: Lt.metrics.humidity,
      sub: L && Re(L.value) ? Oa(Lt.dewPoint, { dew_point: We(h, L.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + F + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + Un(pe(Math.round(Number(y.value)), h.locale), "%") + "</div>"
    });
  }
  function Nr(h, w) {
    var It, Ct, Jt;
    const y = na(h, w, "pressure");
    if (!y || !Re(y.value)) return "";
    const L = Number(y.value), F = (It = y.stateObj.attributes) == null ? void 0 : It.pressure_unit, X = Zc(L, F), J = ((Ct = xt.pressureHistory) == null ? void 0 : Ct.entityId) === y.stateObj.entity_id ? Zc(xt.pressureHistory.value, F) : void 0;
    let ft;
    if (X !== void 0 && J !== void 0) {
      const Yt = X - J;
      ft = Yt >= Fc ? "rising" : Yt <= -Fc ? "falling" : "steady";
    }
    const tt = vd(h, y.stateObj, "pressure", Math.round(L)), gt = y.stateObj, vt = (Yt) => F === "inHg" ? Math.round(Yt * 100) / 100 : Math.round(Yt), St = (Yt) => Uc(h, gt, "pressure", vt(Yt)), Vt = J !== void 0 ? xt.pressureHistory.value : void 0, Pt = Vt !== void 0 ? vt(L - Vt) : void 0, Tt = (Jt = gt.entity_id) != null && Jt.startsWith("weather.") ? P("hourly").find((Yt) => Re(Yt.pressure) && new Date(Yt.datetime).getTime() >= Date.now() + 3 * xe - 30 * Ea) : void 0, jt = [
      ...ft ? [Lt.advice[ft]] : [],
      ...Vt !== void 0 ? [[Lt.callout.hoursAgo, St(Vt)], [Lt.callout.change, (Pt > 0 ? "+" : Pt < 0 ? "−" : "") + St(Math.abs(Pt))]] : [],
      ...Tt ? [[Lt.callout.inHours, St(Number(Tt.pressure))]] : []
    ];
    return nn({
      icon: ye.gauge,
      name: Lt.metrics.pressure,
      sub: ft ? Lt.pressure[ft] : void 0,
      cls: "wbPressure",
      callouts: jt,
      zone: '<div class="wbTapeRow"><div class="wbTapeValue">' + Un(tt.number) + '<span class="wbTapeUnit">' + Dt(tt.unit) + "</span></div>" + (X !== void 0 ? Uo(h, X) : "") + "</div>"
    });
  }
  function Uo(h, w) {
    const F = Math.floor(w) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (X, J) => F + J).map((X) => {
      const J = 100 - (X - w) * 9;
      if (J < 22 || J > 178) return "";
      const ft = X % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(J - 100) / 100) + '"><line class="wbTapeTick" x1="' + (ft ? 2 : 8) + '" x2="26" y1="' + J + '" y2="' + J + '"></line>' + (ft ? '<text class="wbTapeLabel" x="33" y="' + J + '">' + Dt(pe(X, h.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + Dt(Lt.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + Dt(Lt.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function Dn(h) {
    var tt, gt;
    const w = Xd(h), y = w ? h.states[w] : void 0;
    if (!y || ((tt = xt.rain) == null ? void 0 : tt.entityId) !== w || !Re(xt.rain.change)) return "";
    const L = ((gt = y.attributes) == null ? void 0 : gt.unit_of_measurement) ?? "", F = W(h, "hourly"), X = Date.now() + bn, J = P("hourly").filter((vt) => vt.precipitation != null && new Date(vt.datetime).getTime() <= X), ft = J.reduce((vt, St) => vt + Number(St.precipitation), 0);
    return nn({
      icon: ye.rainy,
      name: Lt.metrics.precipitation,
      sub: F && J.length ? Oa(Lt.rainExpected, { amount: pe(ft, h.locale, { maximumFractionDigits: 1 }) + " " + er(h, F, "precipitation") }) : Lt.rainLast24h,
      visual: Un(pe(xt.rain.change, h.locale, { maximumFractionDigits: 1 }), L) + (J.length > 1 ? Eh(J.map((vt) => ({ label: "", value: Number(vt.precipitation) }))) : "")
    });
  }
  function Yo(h, w) {
    const y = na(h, w, "visibility");
    if (!y || !Re(y.value)) return "";
    const L = vd(h, y.stateObj, "visibility", y.value), F = yf(Number(y.value), er(h, y.stateObj, "visibility"));
    return nn({
      icon: ye.eyeOutline,
      name: Lt.metrics.visibility,
      sub: Lt.visibilityLevel[kf(F)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + F + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + Dt(dr(h, F)) + '</div><div class="wbSeaValue">' + Un(L.number, L.unit) + "</div></div>"
    });
  }
  function dr(h, w) {
    var X;
    const y = xf((X = h.config) == null ? void 0 : X.country, w);
    if (y) return Oa(Lt.visibilityLandmarks, { from: y.from, to: y.to });
    const L = w / Zf * 60;
    if (L < 60) {
      const J = L < 5 ? Math.max(1, Math.round(L)) : 5 * Math.round(L / 5);
      if (J < 60) return Oa(Lt.walkMinutes, { minutes: pe(J, h.locale) });
    }
    const F = Math.max(1, Math.round(L / 30) / 2);
    return F < 8 ? Oa(Lt.walkHours, { hours: pe(F, h.locale) }) : Lt.walkDay;
  }
  function Di(h) {
    xt.categories === void 0 && Cn(h);
    const w = Tn(h), y = (tt) => tt.map((gt) => h.states[gt]).filter(Pr), L = y(w.air), F = y(w.pollen);
    if (!L.length && !F.length) return "";
    const X = [...L, ...F], J = (tt) => F.includes(tt) ? ye.flower : ye.airFilter, ft = X.find((tt) => tt.entity_id === D.aq);
    return ft ? Fs(h, ft, J(ft)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + Dt(Lt.airQuality) + '</h2></div><div class="wbAqTiles">' + X.map((tt) => '<button class="wbTile" data-wb="aq-open" data-entity="' + Dt(tt.entity_id) + '"><span class="wbChip">' + Ci(J(tt)) + '</span><span class="wbText"><span class="wbName">' + Dt(Qi(h, tt)) + '</span><span class="wbSub">' + Dt(Mi(h, tt)) + "</span></span></button>").join("") + "</div></div>";
  }
  function Fs(h, w, y) {
    var vt, St, Vt;
    const L = ((vt = w.attributes) == null ? void 0 : vt.unit_of_measurement) ?? "", F = ((St = w.attributes) == null ? void 0 : St.device_class) === "pm25" && L === qc && Re(w.state), X = Number(w.state), J = F ? cd(X) : void 0, ft = ((Vt = xt.aqHistory) == null ? void 0 : Vt.entityId) === w.entity_id ? xt.aqHistory.points : void 0, tt = (Pt) => Math.min(100, Math.max(0, Pt / dd * 100));
    let gt;
    if (ft && ft.length > 1) gt = Xc(ft, (Pt) => (pe(Pt, h.locale, { maximumFractionDigits: 1 }) + " " + L).trim());
    else if (J) {
      let Pt = 0;
      const Tt = Gp.map(([jt, It]) => {
        const Ct = tt(Math.min(It, dd)), Jt = Oc[jt] + " " + Pt + "% " + Ct + "%";
        return Pt = Ct, Jt;
      });
      gt = '<div class="wbScale" role="meter" aria-label="' + Dt(Lt.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + dd + '" aria-valuenow="' + X + '" style="background:linear-gradient(to right, ' + Tt.join(", ") + ')"><i style="left:' + tt(X) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + dd + " " + qc + "</span></div>";
    } else gt = '<span class="wbGraphNote"><span>' + Dt(Mi(h, w)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + Ci(y) + '</span><span class="wbText"><span class="wbName">' + Dt(Qi(h, w)) + '</span><span class="wbSub">' + Dt(Mi(h, w)) + (J ? " · " + Dt(Lt.aqLevel[J]) : "") + '</span></span><button class="wbBack" title="' + Dt(Lt.back) + '" data-wb="aq-close">' + Ci(ye.back) + '</button></div><div class="wbGraph">' + gt + "</div></div></div>";
  }
  const ke = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, Ga = (h) => h <= 50 ? "Good" : h <= 100 ? "Moderate" : h <= 150 ? "Unhealthy for some" : h <= 200 ? "Unhealthy" : h <= 300 ? "Very unhealthy" : "Hazardous";
  function Kn(h) {
    const w = /* @__PURE__ */ new Map();
    return Object.values(h.states || {}).filter((y) => {
      var L;
      return y.entity_id.startsWith("sensor.") && xd.includes(((L = y.attributes) == null ? void 0 : L.device_class) ?? "") && Pr(y) && Ns(h, y.entity_id);
    }).sort((y, L) => y.entity_id.localeCompare(L.entity_id)).forEach((y) => {
      w.has(y.attributes.device_class) || w.set(y.attributes.device_class, y);
    }), xd.map((y) => w.get(y)).filter(Boolean);
  }
  const go = (h) => Object.values(h.states || {}).filter((w) => {
    var y, L;
    return w.entity_id.startsWith("sensor.") && Pr(w) && Ns(h, w.entity_id) && (((L = (y = h.entities) == null ? void 0 : y[w.entity_id]) == null ? void 0 : L.translation_key) ?? w.entity_id).toLowerCase().includes("pollen");
  }), ra = ["none", "very_low", "low", "moderate", "high", "very_high"], Ye = (h) => Re(h.state) ? Number(h.state) : ra.indexOf(String(h.state).toLowerCase().replace(/ /g, "_")), Ve = (h) => {
    const w = String(h).replace(/_/g, " ");
    return w[0].toUpperCase() + w.slice(1);
  }, Ir = (h, w, y) => {
    const L = y ? h === "aqi" ? w <= 50 ? "good" : w <= 100 ? "moderate" : "poor" : h === "pm25" ? cd(w) : null : null;
    return L === "good" || L === "fair" ? Lt.advice.window : L === "moderate" || L === null ? Lt.advice.fine : Lt.advice.closed;
  }, fn = ["good", "fair", "moderate", "poor", "very_poor", "extremely_poor"], vo = (h) => fn[h <= 50 ? 0 : h <= 100 ? 1 : h <= 150 ? 2 : h <= 200 ? 3 : h <= 300 ? 4 : 5], $n = "M43 43q1 8 0 10M77 42q1 8 -1 10", Se = {
    good: [$n, "M34 69Q61 98 86 67"],
    fair: [$n, "M40 74Q61 89 81 72"],
    moderate: [$n, "M41 79Q60 76 80 81"],
    poor: [$n, "M41 85Q60 73 80 86"],
    very_poor: ["M36 38l13 5M84 37l-13 5M43 48q1 7 0 9M77 47q1 7 -1 9", "M37 90Q60 64 84 89"],
    extremely_poor: ["M37 41l12 11M49 41l-12 11M71 40l12 11M83 40l-12 11", "M36 84q6 -8 12 0t12 0t12 0t12 0"]
  }, bo = (h) => '<svg class="wbAqFace" viewBox="0 0 120 120" aria-hidden="true"><path d="M60 9C89 8 112 32 110 61C109 90 87 112 58 111C30 110 9 88 10 59C11 31 33 10 63 12"></path><path class="wbAqEyes" d="' + Se[h][0] + '"></path><path d="' + Se[h][1] + '"></path></svg>';
  function Bn(h) {
    const w = Kn(h), y = w[0];
    if (!y) return nn({ icon: ye.airFilter, name: Lt.airQuality, sub: Lt.noAir, visual: Un("–", ""), cls: "wbBase" });
    const L = y.attributes.device_class, F = Number(y.state), X = Re(y.state), J = L === "aqi" && X ? Ga(F) : L === "pm25" && X ? ke[cd(F)] : Mi(h, y), ft = X ? pe(Math.round(F), h.locale) : String(y.state), tt = L === "aqi" ? "AQI" : y.attributes.unit_of_measurement || "", gt = X && L === "aqi" ? vo(F) : X && L === "pm25" ? cd(F) : null;
    return nn(gt ? {
      icon: ye.airFilter,
      name: Lt.airQuality,
      sub: J,
      cls: "wbAqSmile",
      zone: '<div class="wbAqFill" style="background:' + Oc[gt] + '">' + bo(gt) + '<div class="wbAqBig"><span class="wbAqNum">' + Dt(ft) + "</span>" + (tt ? '<span class="wbAqUnit">' + Dt(tt) + "</span>" : "") + "</div></div>" + pd(Un(ft, tt)),
      callouts: [Ir(L, F, X), ...w.slice(1, 3).map((vt) => [Qi(h, vt), Mi(h, vt)])]
    } : {
      icon: ye.airFilter,
      name: Lt.airQuality,
      sub: J,
      cls: "wbBase",
      zone: Un(ft, tt),
      callouts: [Ir(L, F, X), ...w.slice(1, 3).map((vt) => [Qi(h, vt), Mi(h, vt)])]
    });
  }
  const Bi = [
    ["wbSeed", '<svg viewBox="0 0 22 30" aria-hidden="true"><path d="M11 28V11" fill="none" stroke="currentColor" stroke-width="1"></path><path d="M11 11L3 6M11 11L5 2.5M11 11L8.5 1M11 11L13.5 1M11 11L17 2.5M11 11L19 6" fill="none" stroke="currentColor" stroke-width=".8" stroke-linecap="round"></path><circle cx="11" cy="28.5" r="1.4" fill="currentColor"></circle></svg>'],
    ["wbGrain", '<svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="3.3" fill="currentColor"></circle><path d="M6 1.2v1.4M6 9.4v1.4M1.2 6h1.4M9.4 6h1.4M2.6 2.6l1 1M8.4 8.4l1 1M2.6 9.4l1-1M8.4 3.6l1-1" stroke="currentColor" stroke-width=".9" stroke-linecap="round"></path></svg>'],
    ["wbStem", '<svg viewBox="0 0 10 30" aria-hidden="true"><path d="M5 29Q3.6 18 5 8" fill="none" stroke="currentColor" stroke-width="1"></path><ellipse cx="5" cy="6" rx="2.3" ry="4.6" fill="currentColor"></ellipse></svg>']
  ], Zo = (h) => {
    const w = [1, 3, 5, 7, 10, 13][Math.max(0, Math.min(5, Number.isFinite(h) ? Math.round(h) : 0))];
    return '<div class="wbPollenAir" aria-hidden="true">' + Array.from({ length: w }, (y, L) => {
      const [F, X] = Bi[L % 3], J = 10 + L * 7 % 9, ft = 2.6 + L * 5 % 4 * 0.4;
      return '<span class="wbFloat ' + F + '" style="top:' + (4 + L * 37 % 52) + "%;--x:" + (L * 29 % 90 + 4) + "%;--s:" + (0.8 + L * 13 % 5 / 10).toFixed(1) + ";animation-duration:" + J + "s;animation-delay:-" + (L * 2.3 % J).toFixed(1) + 's"><span class="wbPush"><span class="wbBob" style="animation-duration:' + ft.toFixed(1) + "s;animation-delay:-" + (L * 0.7 % ft).toFixed(1) + 's">' + X + "</span></span></span>";
    }).join("") + "</div>";
  };
  function Ko(h) {
    const w = go(h).sort((F, X) => Ye(X) - Ye(F));
    if (!w.length) return nn({ icon: ye.flower, name: Lt.pollen, sub: Lt.noPollen, visual: Un("–", ""), cls: "wbBase" });
    const y = w[0], L = (F) => Re(F.state) ? Mi(h, F) : Ve(F.state);
    return nn({
      icon: ye.flower,
      name: Lt.pollen,
      sub: Qi(h, y) + " · " + L(y),
      cls: "wbBase wbPollen",
      zone: Zo(Ye(y)) + Un(L(y), ""),
      callouts: w.slice(0, 3).map((F) => [Qi(h, F), L(F)])
    });
  }
  function Hr(h) {
    const w = Date.now(), y = P("hourly").filter((X) => {
      const J = new Date(X.datetime).getTime();
      return J > w - xe && J < w + 12 * xe;
    }), L = y.find((X) => (X.precipitation_probability ?? 0) >= 50 || (X.precipitation ?? 0) >= 0.2), F = L ? Oa(Lt.rainFrom, { time: qa(new Date(Math.max(w, new Date(L.datetime).getTime())), h) }) : y.length ? Lt.noRain12 : void 0;
    return nn({ icon: ye.radar, name: Lt.rainRadar, sub: F, cls: "wbBase", visual: '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i></div>' });
  }
  const Fr = {
    current: Ln,
    hourly: Ut,
    sun: At,
    moon: Ei,
    wind: ea,
    uv_index: _i,
    compared_to_average: lr,
    humidity: _n,
    pressure: Nr,
    precipitation: Dn,
    visibility: Yo,
    air_quality: Di,
    aq_tile: Bn,
    pollen_tile: Ko,
    radar_tile: Hr
  }, Xn = [["day", "Last 24 hours", 1], ["week", "Last 7 days", 7], ["month", "Last 30 days", 30]], Jn = (h, w) => {
    var y;
    return w.toLocaleDateString((y = h.locale) == null ? void 0 : y.language, { day: "numeric", month: "short" });
  }, Ri = (h) => {
    const w = new Date(h);
    return w.setMinutes(w.getMinutes() - w.getTimezoneOffset()), w.toISOString().slice(0, 10);
  }, wo = () => {
    const h = D.range, w = Date.now();
    if (h.preset !== "custom") {
      const F = Xn.find(([X]) => X === h.preset)[2];
      return [w - F * bn, w];
    }
    const y = nr(/* @__PURE__ */ new Date(h.from + "T00:00")).getTime(), L = Math.min(w, nr(/* @__PURE__ */ new Date(h.to + "T00:00")).getTime() + bn);
    return [Math.min(y, L - xe), L];
  }, Ze = (h) => {
    const w = D.range;
    if (w.preset !== "custom") return Xn.find(([F]) => F === w.preset)[1];
    const [y, L] = wo();
    return w.from === w.to ? Jn(h, new Date(y)) : Jn(h, new Date(y)) + " – " + Jn(h, new Date(L - 1));
  }, Ua = () => D.range.preset === "custom" ? D.range.from + "_" + D.range.to : D.range.preset, ie = (h, w) => w - h <= 2 * bn, $o = (h, w, y, L) => ie(y, L) ? qa(w, h) : Jn(h, w), Qn = (h, w = 60) => {
    const y = Math.max(1, Math.ceil(h.length / w));
    return h.filter((L, F) => F % y === 0 || F === h.length - 1);
  }, Xo = (h, w, y, L, F = !1) => h.callWS({
    type: "history/history_during_period",
    start_time: new Date(y).toISOString(),
    end_time: new Date(L).toISOString(),
    entity_ids: [w],
    minimal_response: F,
    no_attributes: F,
    significant_changes_only: !1
  }), ya = (h) => async (w, y, L, F) => {
    const X = na(w, y, h);
    if (!X) return [];
    const J = X.stateObj.entity_id, ft = await Xo(w, J, L, F);
    return Qn(((ft == null ? void 0 : ft[J]) ?? []).map((tt) => {
      var St;
      const gt = ((St = tt.a) == null ? void 0 : St[h]) ?? (Re(tt.s) ? Number(tt.s) : void 0), vt = (tt.lu ?? tt.lc) * 1e3;
      return typeof gt == "number" && vt >= L && vt <= F ? { t: new Date(vt), value: gt } : null;
    }).filter(Boolean)).map((tt) => ({ label: $o(w, tt.t, L, F), value: tt.value }));
  }, to = (h, w) => async (y, L, F, X) => {
    const J = h(y);
    if (!J) return [];
    const ft = J.entity_id, tt = await Xo(y, ft, F, X, !0);
    return Qn(((tt == null ? void 0 : tt[ft]) ?? []).map((gt) => {
      const vt = w(gt.s), St = gt.lu * 1e3;
      return vt == null || !Number.isFinite(vt) || St < F || St > X ? null : { t: new Date(St), value: vt };
    }).filter(Boolean)).map((gt) => ({ label: $o(y, gt.t, F, X), value: gt.value }));
  }, cr = (h, w) => async (y, L, F, X) => {
    const J = kl(y);
    if (!J) return [];
    const ft = [];
    if (ie(F, X)) for (let tt = F; tt <= X; tt += xe / 2) ft.push({ label: qa(new Date(tt), y), value: h(new Date(tt), J) });
    else for (let tt = X; tt >= F; tt -= bn) {
      const gt = new Date(tt), vt = w(gt, J, y);
      vt != null && ft.unshift({ label: Jn(y, gt), value: vt });
    }
    return Qn(ft);
  }, Ya = (h) => go(h).sort((w, y) => Ye(y) - Ye(w))[0], Rn = (h, w, y) => {
    const L = na(h, w, y);
    return L ? er(h, L.stateObj, y) : "";
  }, _e = {
    current: { name: () => Lt.modes.temperature, icon: () => ye.sunny, load: ya("temperature"), fmt: (h, w, y) => We(h, y), now: (h, w) => {
      var y;
      return We(h, (y = na(h, w, "temperature")) == null ? void 0 : y.value);
    } },
    sun: {
      name: () => Lt.sun,
      icon: () => ye.sunny,
      load: cr((h, w) => Math.round(kd(h, w.lat, w.lon) / dn), (h, w, y) => {
        const L = Rs(y, h);
        return L.rise && L.set ? Math.round((L.set - L.rise) / xe * 10) / 10 : null;
      }),
      fmt: (h, w, y, L) => L ? pe(y, h.locale) + "°" : pe(y, h.locale) + " h",
      sub: (h) => h ? "How high the sun was" : "Hours of daylight a day"
    },
    moon: {
      name: () => Lt.moon,
      icon: () => ye.night,
      load: cr((h) => Math.round($d(h).fraction * 100), (h) => Math.round($d(h).fraction * 100)),
      fmt: (h, w, y) => pe(y, h.locale) + "%",
      sub: () => "How much of it was lit"
    },
    uv_index: { name: () => Lt.metrics.uv_index, icon: () => ye.sunnyAlert, load: ya("uv_index"), fmt: (h, w, y) => pe(Math.round(y * 10) / 10, h.locale), now: (h, w) => {
      const y = na(h, w, "uv_index");
      return y ? pe(Number(y.value), h.locale) : "";
    } },
    humidity: { name: () => Lt.metrics.humidity, icon: () => ye.waterPercent, load: ya("humidity"), fmt: (h, w, y) => pe(Math.round(y), h.locale) + "%", now: (h, w) => {
      const y = na(h, w, "humidity");
      return y ? pe(Math.round(Number(y.value)), h.locale) + "%" : "";
    } },
    pressure: { name: () => Lt.metrics.pressure, icon: () => ye.gauge, load: ya("pressure"), fmt: (h, w, y) => pe(Math.round(y), h.locale) + " " + Rn(h, w, "pressure"), now: (h, w) => {
      const y = na(h, w, "pressure");
      return y ? pe(Math.round(Number(y.value)), h.locale) + " " + Rn(h, w, "pressure") : "";
    } },
    wind: { name: () => Lt.wind, icon: () => ye.windy, load: ya("wind_speed"), fmt: (h, w, y) => pe(Math.round(y), h.locale) + " " + Rn(h, w, "wind_speed"), now: (h, w) => {
      const y = na(h, w, "wind_speed");
      return y ? pe(Math.round(Number(y.value)), h.locale) + " " + Rn(h, w, "wind_speed") : "";
    } },
    visibility: { name: () => Lt.metrics.visibility, icon: () => ye.eyeOutline, load: ya("visibility"), fmt: (h, w, y) => pe(Math.round(y * 10) / 10, h.locale) + " " + Rn(h, w, "visibility"), now: (h, w) => {
      const y = na(h, w, "visibility");
      return y ? pe(Number(y.value), h.locale) + " " + Rn(h, w, "visibility") : "";
    } },
    aq_tile: {
      name: (h) => Kn(h)[0] ? Qi(h, Kn(h)[0]) : Lt.airQuality,
      icon: () => ye.airFilter,
      load: to((h) => Kn(h)[0], (h) => Re(h) ? Number(h) : null),
      fmt: (h, w, y) => {
        var X, J;
        const L = Kn(h)[0], F = (X = L == null ? void 0 : L.attributes) == null ? void 0 : X.device_class;
        return pe(Math.round(y * 10) / 10, h.locale) + (F === "aqi" ? " AQI" : (J = L == null ? void 0 : L.attributes) != null && J.unit_of_measurement ? " " + L.attributes.unit_of_measurement : "");
      },
      now: (h) => {
        const w = Kn(h)[0];
        return w ? Mi(h, w) : "";
      }
    },
    pollen_tile: {
      name: (h) => Ya(h) ? Qi(h, Ya(h)) : Lt.pollen,
      icon: () => ye.flower,
      load: to(Ya, (h) => {
        const w = Ye({ state: h });
        return w < 0 ? null : w;
      }),
      fmt: (h, w, y) => Ve(ra[Math.round(y)] || ""),
      now: (h) => {
        const w = Ya(h);
        return w ? Ve(w.state) : "";
      }
    }
  }, hn = {};
  let Xe = null;
  async function Jo(h) {
    var J;
    const w = l == null ? void 0 : l();
    if (!w || !_e[h]) return;
    const y = h + "|" + Ua(), [L, F] = wo();
    if (hn[y] && Date.now() - hn[y].at < 5 * Ea) return;
    hn[y] = { at: Date.now(), points: null };
    try {
      hn[y].points = await _e[h].load(w, pn(w), L, F);
    } catch {
      hn[y].points = [];
    }
    Je(!0), Xe === h && D.graph === h && (Xe = null, Pc(et[h].el.querySelector(".wbGraphCard")));
    const X = D.graph === h && ((J = et[h]) == null ? void 0 : J.el.querySelector(".wbGraph .wbChart"));
    X && Vp(X, X.querySelector(".wbLine"), X.querySelectorAll(".wbArea"));
  }
  function eo(h, w) {
    const y = D.range, L = Ri(Date.now()), [F, X] = wo(), J = y.pickFrom || Ri(F), ft = y.pickTo || Ri(X - 1);
    return '<div class="wbRangePick' + (w ? " wbPickRight" : "") + '" role="dialog" aria-label="Choose date range"><div class="wbRangePresets">' + Xn.map(([tt, gt]) => '<button class="wbRangePreset" aria-pressed="' + (y.preset === tt) + '" data-wb="graph-preset" data-range="' + tt + '" data-wb-focus="graph-preset-' + tt + '">' + Dt(gt) + "</button>").join("") + '</div><div class="wbRangeDates"><label><span>From</span><input type="date" data-range-from value="' + J + '" max="' + L + '"></label><label><span>To</span><input type="date" data-range-to value="' + ft + '" max="' + L + '"></label></div><button class="wbRangeApply" data-wb="graph-apply" data-wb-focus="graph-apply">Show these dates</button></div>';
  }
  function pr(h, w, y) {
    var Vt;
    const L = _e[y], [F, X] = wo(), J = ie(F, X), ft = (Vt = hn[y + "|" + Ua()]) == null ? void 0 : Vt.points, tt = et[y].el, gt = Math.max(120, tt.clientWidth - 2 * 18 - 32), vt = Math.max(40, tt.clientHeight - 2 * 18 - 44 - 14 - 32 - 14 - 24), St = ft ? ft.length > 1 ? Xc(ft, (Pt) => L.fmt(h, w, Pt, J), vt, gt) : '<span class="wbGraphNote"><span>No history for these dates</span></span>' : '<span class="wbGraphNote"><span>Loading…</span></span>';
    return '<div class="wbCard wbSquare wbGraphCard"><div class="wbHead"><div class="wbChip wbPlain">' + Up(L.icon(h)) + '</div><div class="wbText"><span class="wbName">' + Dt(L.name(h)) + '</span><span class="wbSub">' + Dt(L.sub ? L.sub(J) : L.now ? L.now(h, w) : "") + '</span></div><button class="wbBack" title="' + Dt(Lt.back) + '" data-wb="graph-close" data-wb-focus="graph-close">' + Ci(ye.back) + '</button></div><button class="wbRangeBtn" aria-haspopup="dialog" aria-expanded="' + !!D.picking + '" title="Choose date range" data-wb="graph-pick" data-wb-focus="graph-pick">' + Ci(ye.calendar) + "<span>" + Dt(Ze(h)) + "</span>" + Ci(ye.chevronDown) + '</button><div class="wbGraph">' + St + "</div></div>" + (D.picking ? eo(h, tt.getBoundingClientRect().left > innerWidth / 2) : "");
  }
  function Je(h) {
    var St, Vt, Pt;
    const w = l == null ? void 0 : l();
    if (!w || Q) return;
    const y = pn(w);
    ut(w, y), xt.lastFetch || zt();
    const L = Tn(w), F = Kc(w), X = Xd(w), J = [
      ...y.map((Tt) => w.states[Tt]),
      w.states["sun.sun"],
      F && w.states[F],
      X && w.states[X],
      ...L.air.map((Tt) => w.states[Tt]),
      ...L.pollen.map((Tt) => w.states[Tt]),
      ...j.some((Tt) => q.includes(Tt)) ? [...Kn(w), ...go(w)] : [],
      w.locale,
      w.config,
      w.entities,
      Math.floor(Date.now() / Ea)
    ];
    if (!h && K && J.length === K.length && J.every((Tt, jt) => Tt === K[jt])) return;
    K = J;
    const ft = S.getRootNode(), tt = ft.activeElement || document.activeElement;
    for (const Tt of j) {
      const jt = et[Tt];
      let It = "";
      try {
        It = (D.graph === Tt ? pr(w, y, Tt) : Fr[Tt](w, y)) || "";
      } catch {
        It = "";
      }
      if (It === jt.html) continue;
      const Ct = tt && jt.el.contains(tt) ? (St = tt.dataset) == null ? void 0 : St.wbFocus : void 0, Jt = jt.el.querySelector(".wbStripScroll"), Yt = Jt ? Jt.scrollLeft : null;
      jt.html = It, jt.el.hidden = !It, jt.el.innerHTML = It;
      const fe = jt.el.querySelector(".wbStripScroll");
      fe && Yt != null ? fe.scrollTo({ left: Yt }) : fe != null && fe.dataset.start && fe.scrollTo({ left: Number(fe.dataset.start) * fe.clientWidth / Number(fe.dataset.span) }), Ct && !ot && ((Vt = jt.el.querySelector('[data-wb-focus="' + Ct + '"]')) == null || Vt.focus());
    }
    za(), ot && ((Pt = S.querySelector('[data-wb-focus="' + ot + '"]')) == null || Pt.focus({ preventScroll: !0 }), ot = null);
    let gt = !1, vt = !1;
    for (const Tt of j) {
      const jt = et[Tt], It = !jt.el.hidden, Ct = Z[Tt] === "wide" || pt.includes(Tt), Jt = j.indexOf(Tt) >= j.indexOf("moon"), Yt = It && (Jt && Ct && !gt || !Ct && !vt);
      Yt && Ct && (gt = !0), Yt && !Ct && (vt = !0), jt.el.toggleAttribute("data-break", Yt);
    }
    Ni(performance.now());
  }
  function ao() {
    bt || Q || (bt = !0, queueMicrotask(() => {
      bt = !1, Je(!0);
    }));
  }
  function wn() {
    const h = getComputedStyle(S), w = (J) => h.getPropertyValue(J).trim(), y = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([J, ft]) => {
      w(ft) && (y[J] = w(ft));
    });
    const L = w("--color-text-primary") || "#f1f1f1", F = w("--color-bg-card") || "#222222", X = !!S.closest(".light");
    return { colors: { ...cn, ...y }, ink: X ? L : F, paper: X ? F : L };
  }
  const xo = (h, w) => {
    var y;
    h.width !== w.w && (h.width = w.w), h.height !== w.h && (h.height = w.h), (y = h.getContext("2d")) == null || y.putImageData(new ImageData(w.data, w.w, w.h), 0, 0);
  }, no = () => b && !oh();
  function Pi(h, w) {
    S.querySelectorAll("canvas[data-wb-strip]").forEach((y) => Os(y, it[y.dataset.wbStrip], h, w));
  }
  function Os(h, w, y, L) {
    if (!w || !h.getClientRects().length) return;
    const F = h.clientWidth, X = h.clientHeight;
    if (!F || !X) return;
    const J = { width: F, height: X, columns: w.columns || Nc, colors: L.colors, clock: y, ambient: no(), seed: w.seed, soft: 1.5 };
    if (f === "smooth") {
      const ft = Math.min(2, window.devicePixelRatio || 1), tt = Math.round(F * ft), gt = Math.round(X * ft);
      h.width !== tt && (h.width = tt), h.height !== gt && (h.height = gt);
      const vt = h.getContext("2d");
      if (!vt) return;
      vt.setTransform(ft, 0, 0, ft, 0, 0), ef(vt, w.segs, J);
    } else xo(h, tf(w.segs, { ...J, px: 2, oneBit: f === "onebit", ink: L.ink, paper: L.paper }));
  }
  function Ni(h) {
    if (Q) return;
    const w = wn();
    if (f !== "smooth") {
      const y = no();
      S.querySelectorAll("canvas[data-wb-wx]").forEach((L) => {
        L.getClientRects().length && xo(L, Cp(cc(L.dataset.wbWx, w.colors), { size: Number(L.dataset.size) || 40, px: 2, oneBit: f === "onebit", colors: w.colors, ink: w.ink, paper: w.paper, clock: h, idle: y }));
      });
    }
    S.querySelectorAll("canvas[data-wb-sea]").forEach((y) => {
      const L = y.clientWidth, F = y.clientHeight, X = Number(y.dataset.wbSea), J = L + "x" + F + ":" + X + ":" + w.colors.skyClearDay;
      !L || !F || !(X > 0) || y.dataset.painted === J || (y.dataset.painted = J, xo(y, vf(L, F, X, w.colors)));
    }), Pi(h, w);
  }
  function ur(h) {
    if (ht = 0, !(Q || !no())) {
      if (!document.hidden)
        if (f === "smooth") Pi(h, wn());
        else {
          const w = Math.floor(h / 100);
          w !== dt && (dt = w, Ni(h));
        }
      ht = requestAnimationFrame(ur);
    }
  }
  function Pn() {
    S.classList.toggle("wbMotion", no()), !ht && !Q && no() && (ht = requestAnimationFrame(ur));
  }
  function Or(h) {
    var y, L, F, X, J, ft, tt;
    const w = (L = (y = h.target).closest) == null ? void 0 : L.call(y, "[data-wb]");
    if (!w || !S.contains(w)) {
      const gt = (X = (F = h.target).closest) == null ? void 0 : X.call(F, ".wbItem"), vt = gt == null ? void 0 : gt.dataset.card;
      if (!gt || !S.contains(gt) || !_e[vt] || D.graph === vt || S.closest(".tfEditing") || gt.offsetHeight < 200 || vt === "current" && k) return;
      D.graph = vt, ot = "graph-close", Je(!0), (J = hn[vt + "|" + Ua()]) != null && J.points ? Pc(et[vt].el.querySelector(".wbGraphCard")) : Xe = vt, Jo(vt);
      return;
    }
    switch (w.dataset.wb) {
      case "day": {
        D.openDay = Number(w.dataset.index), D.opener = w.dataset.wbFocus, ot = "back-day";
        const gt = Wt()[D.openDay], vt = !xt.todayHistory || xt.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - xt.todayHistory.fetched > Hf;
        gt && Bs(new Date(gt.datetime), /* @__PURE__ */ new Date()) && vt && da();
        break;
      }
      case "close-day":
        D.openDay = void 0, ot = D.opener, D.opener = void 0;
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
        const gt = S.querySelector(".wbStripScroll");
        gt && gt.scrollTo({ left: Number(w.dataset.hours) * gt.clientWidth / Number(gt.dataset.span), behavior: "smooth" });
        return;
      }
      case "aq-open":
        D.aq = w.dataset.entity, qt(D.aq);
        break;
      case "aq-close":
        D.aq = void 0;
        break;
      case "graph-close":
        D.graph = void 0, D.picking = !1;
        break;
      case "graph-pick":
        D.picking = !D.picking, ot = D.picking ? "graph-preset-" + (D.range.preset === "custom" ? "day" : D.range.preset) : "graph-pick";
        break;
      case "graph-preset":
        D.range = { preset: w.dataset.range }, D.picking = !1, ot = "graph-pick", Je(!0), Jo(D.graph);
        return;
      case "graph-apply": {
        let gt = D.range.pickFrom || ((ft = S.querySelector("[data-range-from]")) == null ? void 0 : ft.value), vt = D.range.pickTo || ((tt = S.querySelector("[data-range-to]")) == null ? void 0 : tt.value);
        if (!gt || !vt) return;
        gt > vt && ([gt, vt] = [vt, gt]), D.range = { preset: "custom", from: gt, to: vt }, D.picking = !1, ot = "graph-pick", Je(!0), Jo(D.graph);
        return;
      }
      default:
        return;
    }
    Je(!0);
  }
  function Qo(h) {
    var w, y, L, F, X, J;
    h.key === "Escape" && D.openDay !== void 0 && ((y = (w = h.target).closest) != null && y.call(w, '[data-wb-open="day"]')) ? (D.openDay = void 0, ot = D.opener, D.opener = void 0, Je(!0)) : h.key === "Escape" && D.picking && ((F = (L = h.target).closest) != null && F.call(L, ".wbGraphCard")) ? (D.picking = !1, ot = "graph-pick", Je(!0)) : h.key === "Escape" && D.graph && ((J = (X = h.target).closest) != null && J.call(X, ".wbGraphCard")) && (D.graph = void 0, Je(!0));
  }
  let Ke = null;
  function fr(h) {
    var y, L;
    const w = (L = (y = h.target).closest) == null ? void 0 : L.call(y, ".wbStripScroll");
    !w || h.button !== 0 || (Ke = { startX: h.pageX, left: w.scrollLeft, moved: !1 }, w.classList.add("wbHeld"), window.addEventListener("mousemove", oo), window.addEventListener("mouseup", yo, { once: !0 }));
  }
  function oo(h) {
    const w = S.querySelector(".wbStripScroll");
    if (!Ke || !w) return;
    const y = h.pageX - Ke.startX;
    !Ke.moved && Math.abs(y) > 1 && (Ke.moved = !0, w.classList.add("wbDragging")), w.scrollLeft = Ke.left - y;
  }
  function yo() {
    Ke = null, window.removeEventListener("mousemove", oo);
    const h = S.querySelector(".wbStripScroll");
    if (!h) return;
    h.classList.remove("wbDragging", "wbHeld");
    const w = [...h.querySelectorAll(".wbSnap")];
    if (w.length) {
      const y = w.reduce((L, F) => Math.abs(F.offsetLeft - h.scrollLeft) < Math.abs(L.offsetLeft - h.scrollLeft) ? F : L);
      h.scrollTo({ left: y.offsetLeft, behavior: "smooth" });
    }
  }
  const ka = (h) => {
    var y, L;
    const w = h.target;
    (y = w.matches) != null && y.call(w, "[data-range-from]") ? D.range.pickFrom = w.value : (L = w.matches) != null && L.call(w, "[data-range-to]") && (D.range.pickTo = w.value);
  };
  S.addEventListener("change", ka), S.addEventListener("click", Or), S.addEventListener("keydown", Qo), S.addEventListener("mousedown", fr);
  const ti = 64, ei = 30;
  let Da = null, ue = 0;
  const ai = () => {
    ue = 0, S.querySelectorAll(".wbPollen .wbPush").forEach((h) => {
      let w = 0, y = 0;
      if (Da) {
        const L = h.parentElement.getBoundingClientRect(), F = L.left + L.width / 2 - Da.x, X = L.top + L.height / 2 - Da.y, J = Math.hypot(F, X) || 1;
        if (J < ti) {
          const ft = (1 - J / ti) * ei;
          w = F / J * ft, y = X / J * ft;
        }
      }
      h.style.transform = w || y ? "translate(" + w.toFixed(1) + "px," + y.toFixed(1) + "px)" : "";
    }), Da && (ue = requestAnimationFrame(ai));
  }, qr = (h) => {
    var y, L;
    if (!((L = (y = h.target).closest) == null ? void 0 : L.call(y, ".wbPollen")) || Sa != null && Sa.matches) {
      Da && (Da = null, ue || (ue = requestAnimationFrame(ai)));
      return;
    }
    Da = { x: h.clientX, y: h.clientY }, ue || (ue = requestAnimationFrame(ai));
  }, hr = () => {
    Da = null, ue || (ue = requestAnimationFrame(ai));
  };
  S.addEventListener("pointermove", qr), S.addEventListener("pointerleave", hr);
  const Ma = typeof ResizeObserver == "function" ? new ResizeObserver(() => Ni(performance.now())) : null;
  Ma == null || Ma.observe(S);
  const Sa = (Ca = window.matchMedia) == null ? void 0 : Ca.call(window, "(prefers-reduced-motion: reduce)"), Ce = () => {
    Pn(), Ni(performance.now());
  };
  (io = Sa == null ? void 0 : Sa.addEventListener) == null || io.call(Sa, "change", Ce);
  const Nn = [
    setInterval(() => {
      st = /* @__PURE__ */ new Date(), Je(!0);
    }, Uf),
    setInterval(() => {
      Bt = /* @__PURE__ */ new Date(), Je(!0);
    }, Yf),
    setInterval(zt, jf)
  ];
  return Je(!0), Pn(), {
    update() {
      Je(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      Je(!0);
    },
    setStyle(h) {
      !h || h === f || (f = h, S.dataset.style = f, Je(!0), Pn());
    },
    destroy() {
      var h;
      cancelAnimationFrame(ue), S.removeEventListener("pointermove", qr), S.removeEventListener("pointerleave", hr), Q = !0, Nn.forEach(clearInterval), ht && cancelAnimationFrame(ht), ht = 0, Ma == null || Ma.disconnect(), (h = Sa == null ? void 0 : Sa.removeEventListener) == null || h.call(Sa, "change", Ce), yo(), S.removeEventListener("click", Or), S.removeEventListener("change", ka), S.removeEventListener("keydown", Qo), S.removeEventListener("mousedown", fr), ["daily", "hourly"].forEach(B), S.remove();
    }
  };
}
const Ml = "#E1E1E1", tp = "#F7F4F0", Jd = "#03a9f4", ge = 14, ve = 172;
let Ph = 0;
const je = (o) => Math.round(o * 100) / 100, Go = (o, l, i) => Math.max(l, Math.min(i, o)), Ai = (o, l, i, f, b, x) => '<rect x="' + je(o) + '" y="' + je(l) + '" width="' + je(i) + '" height="' + je(f) + '" fill="' + b + '"' + (x != null ? ' opacity="' + x + '"' : "") + "/>", Qd = (o) => o.map((l, i) => (i ? "L" : "M") + je(l[0]) + " " + je(l[1])).join("");
function tc(o) {
  const l = (o == null ? void 0 : o.attributes) || {};
  return l.device_class === "curtain" ? "curtain" : l.device_class === "blind" || l.current_tilt_position != null ? "venetian" : "blind";
}
const tr = [
  [2, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]],
  [6.5, ["#0B0F1C", "#2E7FD6", "#F2743B", "#F1B6C8", 0.95]],
  [9.5, ["#8FC4EC", "#4DA3E8", "#F4FAFF", "#2F7FCF", 0.7]],
  [13, ["#9ED3F6", "#3F97E6", "#FFFFFF", "#2B86D9", 0.65]],
  [17, ["#9FC2E4", "#4A8ED4", "#FFD9B8", "#5E8FD6", 0.75]],
  [19, ["#4B5E86", "#3B86E0", "#FF6A3D", "#B07CE8", 0.95]],
  [21.5, ["#1A2140", "#1F3F7A", "#B4506E", "#3E59A6", 0.8]],
  [26, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]]
];
function Nh(o) {
  const l = o < 2 ? o + 24 : o;
  let i = tr[0], f = tr[tr.length - 1];
  for (let _ = 0; _ < tr.length - 1; _++) if (l >= tr[_][0] && l <= tr[_ + 1][0]) {
    i = tr[_], f = tr[_ + 1];
    break;
  }
  const b = (l - i[0]) / (f[0] - i[0]), x = b * b * (3 - 2 * b), k = (_, O) => {
    const S = parseInt(_.slice(1), 16), V = parseInt(O.slice(1), 16);
    return "#" + [16, 8, 0].map((q) => Math.round((S >> q & 255) + ((V >> q & 255) - (S >> q & 255)) * x).toString(16).padStart(2, "0")).join("");
  };
  return { top: k(i[1][0], f[1][0]), bot: k(i[1][1], f[1][1]), warm: k(i[1][2], f[1][2]), cool: k(i[1][3], f[1][3]), op: i[1][4] + (f[1][4] - i[1][4]) * x, t: l };
}
function Ih(o) {
  const l = parseInt(o.slice(1), 16), i = (l >> 16 & 255) / 255, f = (l >> 8 & 255) / 255, b = (l & 255) / 255, x = Math.max(i, f, b), k = Math.min(i, f, b);
  let _ = 0, O = 0;
  const S = (x + k) / 2;
  if (x !== k) {
    const V = x - k;
    O = S > 0.5 ? V / (2 - x - k) : V / (x + k), _ = (x === i ? (f - b) / V + (f < b ? 6 : 0) : x === f ? (b - i) / V + 2 : (i - f) / V + 4) / 6;
  }
  return [_ * 360, O * 100, S * 100];
}
function ou(o, l, i) {
  l = Go(l, 0, 100) / 100, i = Go(i, 0, 100) / 100;
  const f = (k) => (k + o / 30) % 12, b = l * Math.min(i, 1 - i), x = (k) => i - b * Math.max(-1, Math.min(f(k) - 3, Math.min(9 - f(k), 1)));
  return "#" + [x(0), x(8), x(4)].map((k) => Math.round(k * 255).toString(16).padStart(2, "0")).join("");
}
const [iu, ru, su] = Ih(Ml), ep = ou(iu, ru, Math.max(6, su - 14)), Hh = ou(iu, ru, Math.min(96, su + 16));
function Fh(o, l, i, f, b) {
  const x = ve / 2, k = ve * 0.12, _ = x - (x - k) * o, O = (pt) => pt ** 1.3, S = Go(i, -1.5, 1.5), V = (pt) => -(Math.abs(S) * 4.6 * pt ** 1.5) * Math.sign(S), q = o * 1.4, j = (pt, et) => {
    const Q = Math.min(4.8, Math.abs(i) * 2.6) * (et ? 1 : -1) * Math.sign(i || 1), K = et ? pt + _ : pt, ht = et ? pt : pt + _, dt = (xt) => K + V(xt) + Q * Math.sin(xt * Math.PI * 1.2 + f) * O(xt) * 1.4 + q * Math.sin(xt * Math.PI * 2 + f * 0.6) * O(xt) * (et ? 1 : -1), bt = [[ht, ge]];
    for (let xt = 0; xt <= 12; xt++) bt.push([dt(xt / 12), ge + ve * xt / 12]);
    bt.push([ht, ge + ve]);
    let ot = '<path d="' + Qd(bt) + 'Z" fill="' + Ml + '"/>';
    if (b) return ot;
    const nt = 1.35 + ((et ? i > 0 : i < 0) ? 0.35 : 0), at = (xt) => {
      const st = xt / 7, Bt = et ? 1 - st : st, it = (1 - Bt) ** 1.3, Ht = pt + _ * st;
      return Array.from({ length: 13 }, (E, P) => {
        const W = P / 12;
        return [Ht + V(W) * it + Q * nt * Math.sin(W * Math.PI * 1.2 + f - Bt * 3.2) * O(W) * 1.4 * it + q * 1.6 * Math.sin(W * Math.PI * 2 + f * 0.6 - Bt * 2.5) * O(W) * o * (0.4 + 0.6 * it), ge + ve * W];
      });
    }, D = [1, 2, 3, 4, 5, 6].map(at);
    for (let xt = 0; xt < 6; xt += 2) ot += '<path d="' + Qd(D[xt]) + Qd(D[xt + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return ot;
  }, Z = x - (x - k) * l;
  return { body: j(ge, !0) + j(ge + ve - _, !1), rails: [{ x: ge + Z - 4, y: ge, w: 4, h: ve }, { x: ge + ve - Z, y: ge, w: 4, h: ve }], head: 6.4 };
}
function Oh(o, l, i) {
  const f = ve * (1 - o);
  let b = "";
  if (f > 1 && (b += Ai(ge, ge, ve, f, Ml), !i))
    for (let x = 1; x < 7; x += 2) b += Ai(ge + ve * x / 7, ge, ve / 7, f, "#fff");
  return { body: b, rails: [{ x: ge, y: ge + ve * (1 - l) - 7, w: ve, h: 11 }], head: 10.4 };
}
function qh(o, l, i, f) {
  const b = 9 - 7 * (i / 100), x = ge + ve * (1 - o), k = Math.ceil(ve / 10) + 1, _ = ge + b / 2, O = (ge + ve - b / 2 - _) / (k - 1), S = 0.8, V = 0.6, q = Array.from({ length: k }, (pt, et) => Math.max(_ + et * V, Math.min(_ + et * O, x - b / 2 - (k - 1 - et) * V))), j = q.slice(0, -1).map((pt, et) => Go((q[et + 1] - pt - V) / (O - V), 0, 1));
  j.push(j[k - 2]);
  let Z = "";
  return q.forEach((pt, et) => {
    const Q = S + (b - S) * j[et], K = Math.max(0.5, Q / 2), ht = Math.max(0.4, Q * 0.114);
    Z += Ai(ge, pt - K, ve, Math.max(1, Q), Ml), !f && Q > 2.2 && (Z += Ai(ge, pt + K - ht, ve, ht, ep) + Ai(ge, pt - K, ve, ht * 0.55, Hh, 0.75));
  }), f || [0.22, 0.78].forEach((pt) => {
    Z += Ai(ge + ve * pt - 0.7, ge, 1.4, Math.max(0, q[k - 1] + 1 - ge), ep, 0.85);
  }), { body: Z, rails: [{ x: ge, y: ge + ve * (1 - l) - 8, w: ve, h: 8 }], head: 8.8 };
}
const ap = (o, l, i, f, b, x, k) => o === "curtain" ? Fh(l, i, b, x, k) : o === "venetian" ? qh(l, i, f, k) : Oh(l, i, k);
function Wh(o, l) {
  let i = "", f = "";
  return l.forEach((b) => {
    const x = b.w > b.h, k = Go(x ? ge + ve / 2 : b.x + b.w / 2, 17, 183), _ = Go(x ? b.y + b.h / 2 : ge + ve / 2, 17, 183);
    i += x ? Ai(ge, Go(b.y + b.h / 2, ge, ge + ve) - 1, ve, 2, Jd) : Ai(Go(b.x + b.w / 2, ge, ge + ve) - 1, ge, 2, ve, Jd);
    const O = x ? "M" + je(k - 4) + " " + je(_ - 3) + "l4 -3l4 3M" + je(k - 4) + " " + je(_ + 3) + "l4 3l4 -3" : "M" + je(k - 3) + " " + je(_ - 4) + "l-3 4l3 4M" + je(k + 3) + " " + je(_ - 4) + "l3 4l-3 4";
    f += '<circle cx="' + je(k) + '" cy="' + je(_) + '" r="11" fill="' + Jd + '" filter="url(#' + o + 's)"/><path d="' + O + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: i, knobs: f };
}
function Vh(o, l) {
  const i = /* @__PURE__ */ new Date(), f = Nh(i.getHours() + i.getMinutes() / 60), b = 42 + 18 * Math.sin(f.t * 0.5), x = f.t >= 5 && f.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (f.t - 5) / 15) : 80, k = ap(l.kind, l.pos / 100, l.bar / 100, l.tilt, l.vel, l.ph, !1), _ = l.ghostAlpha > 4e-3 && l.ghost != null ? ap(l.kind, l.ghost / 100, l.ghost / 100, l.tilt, 0, 0, !0).body : "", O = l.grip > 4e-3 ? Wh(o, k.rails) : null, S = (V) => Ai(ge, ge, ve, ve, V);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + o + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + o + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + f.top + '"/><stop offset="1" stop-color="' + f.bot + '"/></linearGradient><radialGradient id="' + o + 'w" cx="' + je(b) + '%" cy="' + je(x) + '%" r="58%"><stop offset="0" stop-color="' + f.warm + '" stop-opacity="' + je(f.op * 0.8) + '"/><stop offset="1" stop-color="' + f.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + o + 'k" cx="' + je(100 - b * 0.8) + '%" cy="' + je(100 - x * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + f.cool + '" stop-opacity="' + je(f.op * 0.64) + '"/><stop offset="1" stop-color="' + f.cool + '" stop-opacity="0"/></radialGradient><filter id="' + o + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + tp + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + o + 'c)">' + S("url(#" + o + "l)") + S("url(#" + o + "w)") + S("url(#" + o + "k)") + (_ ? '<g opacity="' + je(l.ghostAlpha) + '">' + _ + "</g>" : "") + k.body + '<rect x="14" y="14" width="172" height="' + k.head + '" fill="' + Ml + '" filter="url(#' + o + 's)"/></g>' + (O ? '<g clip-path="url(#' + o + 'c)" opacity="' + je(l.grip) + '">' + O.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + tp + '" stroke-width="3"/>' + (O ? '<g opacity="' + je(l.grip) + '">' + O.knobs + "</g>" : "") + "</svg>";
}
function jh({ onMove: o, onSet: l }) {
  var ot;
  const i = "cv" + ++Ph, f = document.createElement("div");
  f.className = "tfCoverArt";
  const b = (ot = window.matchMedia) == null ? void 0 : ot.call(window, "(pointer: coarse)").matches;
  let x = null;
  const k = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let _ = 0, O = !1, S = !1, V = null, q = 0, j = 0;
  const Z = () => (x == null ? void 0 : x.kind) === "curtain" ? "x" : "y", pt = () => V || O || S || x.moving || x.target != null ? 1 : b ? performance.now() < j ? 1 : 0.4 : 0, et = () => {
    f.innerHTML = Vh(i, { kind: x.kind, pos: k.pos, bar: x.target ?? k.pos, tilt: k.tilt, vel: k.vel, ph: k.ph, ghost: k.gpos, ghostAlpha: k.ghost, grip: k.grip });
  };
  function Q(nt) {
    _ = 0;
    const at = k.last ? Math.min(0.064, (nt - k.last) / 1e3) : 1 / 60, D = at * 60;
    k.last = nt;
    const xt = x.pos - k.pos, st = k.pos;
    k.pos += Math.sign(xt) * Math.min(Math.abs(xt), Math.max(10.5, Math.abs(xt) * 1.4) * at), Math.abs(x.pos - k.pos) < 0.03 && (k.pos = x.pos), k.vel = k.vel * 0.86 + (k.pos - st) / D * 0.14, Math.abs(k.vel) < 0.015 && k.pos === x.pos && (k.vel = 0), (k.pos !== st || k.vel) && (k.ph += (0.06 + Math.abs(k.vel) * 0.03) * D);
    const Bt = x.tilt - k.tilt;
    k.tilt += Math.sign(Bt) * Math.min(Math.abs(Bt), Math.max(60, Math.abs(Bt) * 4) * at);
    const it = pt();
    k.grip += (it - k.grip) * Math.min(1, at * (it > k.grip ? 11 : 3.5)), Math.abs(it - k.grip) < 0.01 && (k.grip = it);
    const Ht = x.target != null && Math.abs(x.target - k.pos) > 0.5 ? 0.22 : 0;
    x.target != null && (k.gpos = x.target), k.ghost += (Ht - k.ghost) * Math.min(1, at * (Ht > k.ghost ? 16 : 3)), Math.abs(Ht - k.ghost) < 4e-3 && (k.ghost = Ht), et(), k.pos !== x.pos || k.vel || k.tilt !== x.tilt || k.grip !== it || k.ghost !== Ht ? _ = requestAnimationFrame(Q) : k.last = 0;
  }
  const K = () => {
    x && !_ && (_ = requestAnimationFrame(Q));
  }, ht = setInterval(() => {
    x && !_ && et();
  }, 60 * 1e3), dt = (nt) => {
    const at = f.getBoundingClientRect();
    return Z() === "x" ? (nt.clientX - at.left) / at.width : (nt.clientY - at.top) / at.height;
  };
  f.addEventListener("pointerdown", (nt) => {
    var xt;
    if (!(x != null && x.canSet) || nt.button > 0) return;
    nt.preventDefault(), (xt = f.setPointerCapture) == null || xt.call(f, nt.pointerId);
    const at = x.target ?? x.pos, D = f.getBoundingClientRect();
    V = { p0: dt(nt), from: at, x0: nt.clientX, value: null, side: null }, x.kind === "curtain" && at > 0 && (V.side = (nt.clientX - D.left) / D.width < 0.5 ? "L" : "R"), K();
  }), f.addEventListener("pointermove", (nt) => {
    if (!V) return;
    let at;
    if (x.kind === "curtain") {
      if (!V.side) {
        const xt = nt.clientX - V.x0;
        if (Math.abs(xt) < 4) return;
        V.side = xt < 0 ? "L" : "R";
      }
      const D = (ve / 2 - ve * 0.12) / 200;
      at = V.from + (V.side === "L" ? -1 : 1) * ((dt(nt) - V.p0) / D) * 100;
    } else at = V.from - (dt(nt) - V.p0) / (ve / 200) * 100;
    V.value = Go(at, 0, 100), o(V.value);
  });
  const bt = () => {
    if (!V) return;
    const nt = V.value;
    V = null, nt != null && l(Math.round(nt)), K();
  };
  return f.addEventListener("pointerup", bt), f.addEventListener("pointercancel", bt), f.addEventListener("lostpointercapture", bt), f.addEventListener("pointerenter", () => {
    O = !0, K();
  }), f.addEventListener("pointerleave", () => {
    O = !1, K();
  }), f.addEventListener("focus", () => {
    S = f.matches(":focus-visible"), K();
  }), f.addEventListener("blur", () => {
    S = !1, K();
  }), f.addEventListener("keydown", (nt) => {
    if (!(x != null && x.canSet)) return;
    const at = Math.round(x.target ?? x.pos), D = nt.shiftKey ? 10 : 1, xt = { ArrowUp: at + D, ArrowRight: at + D, ArrowDown: at - D, ArrowLeft: at - D, PageUp: at + 25, PageDown: at - 25, Home: 0, End: 100 }[nt.key];
    if (xt == null) return;
    nt.preventDefault();
    const st = Go(xt, 0, 100);
    o(st), clearTimeout(q), q = setTimeout(() => l(st), 500);
  }), {
    el: f,
    update(nt) {
      const at = !x;
      x = nt, at && (k.pos = x.pos, k.tilt = x.tilt, j = performance.now() + 1500, b && setTimeout(K, 1600)), f.classList.toggle("x", Z() === "x"), f.classList.toggle("y", Z() === "y"), x.canSet ? (f.tabIndex = 0, f.setAttribute("role", "slider"), f.setAttribute("aria-valuemin", "0"), f.setAttribute("aria-valuemax", "100"), f.setAttribute("aria-valuenow", String(Math.round(x.target ?? x.pos))), f.setAttribute("aria-orientation", Z() === "x" ? "horizontal" : "vertical")) : f.setAttribute("role", "img"), f.setAttribute("aria-label", x.name + (x.canSet ? " position" : "")), f.setAttribute("aria-valuetext", x.text), K();
    },
    destroy() {
      cancelAnimationFrame(_), _ = 0, clearInterval(ht), clearTimeout(q), f.remove();
    }
  };
}
const np = "move-assistant-density", jo = {
  get(o) {
    try {
      return localStorage.getItem(o);
    } catch {
      return null;
    }
  },
  set(o, l) {
    try {
      localStorage.setItem(o, l);
    } catch {
    }
  }
}, rt = (o) => String(o ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), ec = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', op = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', ip = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', ud = {
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
}, fp = "move_assistant_house", hp = "move-assistant-house-used", nc = ["switch", "fan", "input_boolean", "automation"], mp = "move-assistant-house-look", Jh = [["look", "Look"], ["house", "House page"], ["weather", "Weather"]], Qh = [["popup", "Popup"], ["sheet", "Sheet"]], tm = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], em = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], am = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], oc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', nm = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', om = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', gp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', vp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', im = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z"/></svg>', rm = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/></svg>', bp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', lu = (o) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + o.map((l) => '<path d="' + l + '"/>').join("") + "</svg>", wp = lu(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), sm = lu(["M20 6L9 17L4 12"]), zo = (o, l = "") => '<span class="tfAreaGlyph" data-icon-for="' + rt(o || "") + '"' + (l ? ' data-icon-name="' + rt(l) + '"' : "") + "></span>", lm = (o) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (o ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', dm = 1, cm = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], xp = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, fd = ["door", "window", "garage_door", "opening"], yp = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, xl = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], pm = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], um = 10, fm = 20, hm = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, mm = ["living room", "bedroom", "office"];
function gm(o, { config: l, getHass: i }) {
  var v, C, R;
  const f = (t) => o.getElementById(t), b = f("app"), x = l || {}, k = String(x.layout || "").toLowerCase().replace("_", "-") === "test-focus", _ = String(x.page || "").toLowerCase() === "overview";
  let O = jo.get(np) === "1", S = {};
  const V = (t) => {
    var e;
    return (e = i()) == null ? void 0 : e.callWS(t);
  }, q = (t, e, n) => V({ type: "call_service", domain: t, service: e, service_data: n }), j = o.querySelector("#appearancePane .toggleList");
  j && !f("densityToggle") && (j.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), f("densityToggle").addEventListener("click", () => {
    O = !O, jo.set(np, O ? "1" : "0"), at();
  }));
  const Z = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && ae(t).device_class === "power" && /^(W|kW)$/.test(ae(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (t) => t.startsWith("alarm_control_panel.")]
  ], pt = (t, e, n, r) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + e + '">' + r.map(([d, u]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + n + '="' + d + '">' + u + "</button>").join("") + "</div>", et = (t, e, n, r) => '<div class="toggleRow"' + (r ? ' id="' + r + '"' : "") + "><div><strong>" + t + "</strong>" + (e ? '<div class="status">' + e + "</div>" : "") + "</div>" + n + "</div>";
  function Q() {
    var H, I;
    if (!k || f("housePane")) return;
    const t = f("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore settings";
    const e = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], n = (U, z) => '<div class="houseTab' + (U === "look" ? " active" : "") + '" data-house-pane="' + U + '"><section class="card">' + z + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + e.map(([U, z]) => '<button class="tab segBtn' + (U === "look" ? " active" : "") + '" type="button" data-house-tab="' + U + '">' + z + "</button>").join("") + "</div>" + // Appearance in groups (Matt, 8 Nov), each one's title inside its card as a card header (Matt, 9 Nov)
    n("look", Jh.map(([U, z]) => '<div class="tfSetGroup"><div class="toggleList" data-look-group="' + U + '"><div class="tfCardTitle">' + z + "</div></div></div>").join("")) + // Lights as cards by default, with a Cards | Table choice (Matt, 9 Nov)
    n("lights", '<div class="tfLightView"><div class="themeChoice" role="group" aria-label="Show lights as"><button class="wxLayoutBtn" type="button" data-light-view="cards">Cards</button><button class="wxLayoutBtn" type="button" data-light-view="table">Table</button></div></div><p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div><div class="tfLightCards" id="lightCards"></div>') + n("sources", '<div class="toggleList">' + Z.map(([U, z, G]) => et(z, G, '<select class="settingsSelect" data-source="' + U + '" aria-label="' + z + '"></select>')).join("") + "</div>") + n("sums", '<div class="toggleList">' + Object.entries(ac).map(([U, z]) => et(z.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + U + '" aria-label="' + z.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const r = (U) => t.querySelector('[data-look-group="' + U + '"]'), d = (U) => U == null ? void 0 : U.closest(".toggleRow");
    [d(t.querySelector(".themeBtn"))].forEach((U) => U && r("look").appendChild(U));
    const u = d(f("densityToggle"));
    u && (u.hidden = !0), [d(f("moreInfoChoice")), d(f("namesChoice"))].forEach((U) => U && r("house").appendChild(U)), r("house").insertAdjacentHTML("beforeend", et("Lights", "How lights show on the house page.", pt("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + et("Pad", "What the Dual Axis Controller’s pad sets on its tile.", pt("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow")), [d(f("hoursChoice")), d(f("wxStyleChoice"))].forEach((U) => U && r("weather").appendChild(U));
    const p = f("housePane"), g = p.querySelector(".houseTabs"), m = g.querySelector(".rubberIndicator"), M = "homecore-light-view", T = (U) => {
      p.classList.toggle("tfLightCardsOn", U === "cards"), p.querySelectorAll("[data-light-view]").forEach((z) => z.setAttribute("aria-pressed", String(z.dataset.lightView === U))), jo.set(M, U);
    };
    T(jo.get(M) === "table" ? "table" : "cards"), p.querySelector(".tfLightView").addEventListener("click", (U) => {
      const z = U.target.closest("[data-light-view]");
      z && T(z.dataset.lightView);
    }), new ResizeObserver(() => ht()).observe(p), (I = (H = document.fonts) == null ? void 0 : H.ready) == null || I.then(() => ht());
    const A = (U) => {
      const z = g.querySelector(".tab.active");
      m.style.transition = "none", U ? jp(m, m.offsetLeft, m.offsetWidth, z.offsetLeft, z.offsetWidth) : (m.style.left = z.offsetLeft + "px", m.style.width = z.offsetWidth + "px");
    };
    new ResizeObserver(() => A(!1)).observe(g), p.addEventListener("click", (U) => {
      const z = U.target.closest("[data-house-tab]");
      if (z) {
        g.querySelectorAll(".tab").forEach(($) => $.classList.toggle("active", $ === z)), p.querySelectorAll(".houseTab").forEach(($) => $.classList.toggle("active", $.dataset.housePane === z.dataset.houseTab)), z.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), A(!0), ht();
        return;
      }
      const G = U.target.closest("[data-light-fav]");
      if (G) {
        ni(G.dataset.lightFav);
        return;
      }
      const N = U.target.closest("[data-light-pick]");
      if (N) {
        const [$, Mt] = N.dataset.lightPick.split("|"), ne = { ...Nt[$] };
        N.dataset.v ? ne[Mt] = N.dataset.v : delete ne[Mt], Nt[$] = ne, Xt(), [...ka.keys()].filter((Y) => Y.endsWith(":" + Mt)).forEach((Y) => ka.delete(Y)), po();
        return;
      }
      const ct = U.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!ct || ct.disabled)) {
        if (ct.dataset.lights && (Nt.lights = ct.dataset.lights), ct.dataset.dacPad && (Nt.dacPad = ct.dataset.dacPad), (ct.dataset.lights || ct.dataset.dacPad) && (Xt(), ka.clear()), ct.dataset.sumToggle) {
          const $ = ct.dataset.sumToggle, Mt = new Set(qt.hiddenSums || []);
          Mt.has($) ? Mt.delete($) : Mt.add($), qt = { ...qt, hiddenSums: [...Mt] }, Ln();
        }
        po();
      }
    }), p.addEventListener("change", (U) => {
      const z = U.target;
      z.dataset.source && (qt = { ...qt, sources: { ...qt.sources || {}, [z.dataset.source]: z.value || void 0 } }, Ln());
      const G = z.dataset.lightStyle || z.dataset.lightPad;
      if (G) {
        const N = z.dataset.lightStyle ? "lightStyles" : "lightPads", ct = { ...Nt[N] };
        z.value ? ct[G] = z.value : delete ct[G], Nt[N] = ct, Xt(), [...ka.keys()].filter(($) => $.endsWith(":" + G)).forEach(($) => ka.delete($));
      }
      po();
    });
  }
  function K() {
    var A, H;
    ei() && yo();
    const t = f("housePane");
    if (!t) return;
    const e = !!customElements.get(Ke);
    t.querySelectorAll("[data-lights]").forEach((I) => I.setAttribute("aria-pressed", String(I.dataset.lights === Nt.lights))), f("lightsRow").querySelector(".status").textContent = e || !ei() ? "How lights show on the house page." : oo === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((I) => I.setAttribute("aria-pressed", String(I.dataset.dacPad === Nt.dacPad))), f("dacPadRow").hidden = !ei();
    for (const I of t.querySelectorAll("[data-source]")) {
      if (I === o.activeElement) continue;
      const [U] = Z.find(([G]) => G === I.dataset.source), z = Object.keys(S).filter(Z.find(([G]) => G === U)[3]).sort((G, N) => At(G).localeCompare(At(N)));
      I.dataset.sig !== z.join(",") && (I.innerHTML = '<option value="">Automatic</option>' + z.map((G) => '<option value="' + rt(G) + '">' + rt(At(G)) + "</option>").join(""), I.dataset.sig = z.join(",")), I.value = z.includes((A = qt.sources) == null ? void 0 : A[U]) ? qt.sources[U] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((I) => {
      const U = !(qt.hiddenSums || []).includes(I.dataset.sumToggle);
      I.classList.toggle("on", U), I.setAttribute("aria-checked", String(U));
    });
    const n = f("lightRows"), r = f("lightCards"), d = o.activeElement, u = n != null && n.contains(d) || r != null && r.contains(d) ? d : null;
    if (!n || u != null && u.matches("select")) {
      ht();
      return;
    }
    const p = new Set(_t()), g = (I, U, z, G) => '<option value="' + I + '"' + (I === z ? " selected" : "") + ">" + U + "</option>", m = Object.keys(S).filter((I) => I.startsWith("light.")).sort((I, U) => !Kt.get(I) - !Kt.get(U) || (Kt.get(I) || "").localeCompare(Kt.get(U) || "") || At(I).localeCompare(At(U))).map((I) => {
      const U = Nt.lightStyles[I] || "", z = Nt.lightPads[I] || "", G = p.has(I), N = rt(At(I));
      return "<tr><td><strong>" + N + "</strong></td><td>" + rt(Kt.get(I) || "—") + "</td><td>" + rt(Se(I)) + '</td><td class="metaSwitchCol"><button class="switch' + (G ? " on" : "") + '" type="button" role="switch" aria-checked="' + G + '" data-light-fav="' + rt(I) + '" aria-label="' + N + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + rt(I) + '" aria-label="' + N + ' tile">' + g("", "Default", U) + g("tile", "HomeCore tile", U) + g("dac", "Dual Axis Controller", U) + '</select></td><td><select class="settingsSelect" data-light-pad="' + rt(I) + '" aria-label="' + N + ' pad"' + (ti(I) ? "" : " disabled") + ">" + g("", "Default", z) + g("temperature", "Temperature", z) + g("colour", "Colour", z) + "</select></td></tr>";
    }).join(""), M = (I, U, z, G, N) => '<div class="themeChoice" role="group" aria-label="' + z + '">' + G.map(([ct, $]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (ct === N) + '" data-light-pick="' + I + "|" + rt(U) + '" data-v="' + ct + '">' + $ + "</button>").join("") + "</div>", T = Object.keys(S).filter((I) => I.startsWith("light.")).sort((I, U) => !Kt.get(I) - !Kt.get(U) || (Kt.get(I) || "").localeCompare(Kt.get(U) || "") || At(I).localeCompare(At(U))).map((I) => {
      const U = p.has(I), z = rt(At(I)), G = [Kt.get(I), Se(I)].filter(Boolean).map(rt).join(" · ");
      return '<div class="toggleList"><div class="toggleRow"><div><strong>' + z + '</strong><div class="status">' + G + "</div></div></div>" + et("Favourite", "", '<button class="switch' + (U ? " on" : "") + '" type="button" role="switch" aria-checked="' + U + '" data-light-fav="' + rt(I) + '" aria-label="' + z + ' is a favourite"></button>') + et("Tile", "", M("lightStyles", I, z + " tile", [["", "Default"], ["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]], Nt.lightStyles[I] || "")) + (ti(I) ? et("Pad", "", M("lightPads", I, z + " pad", [["", "Default"], ["temperature", "Temperature"], ["colour", "Colour"]], Nt.lightPads[I] || "")) : "") + "</div>";
    }).join("");
    n.dataset.html !== m && (n.innerHTML = m, n.dataset.html = m), r.dataset.html !== T && (r.innerHTML = T, r.dataset.html = T), u != null && u.dataset.lightFav && ((H = (r.contains(u) ? r : n).querySelector('[data-light-fav="' + CSS.escape(u.dataset.lightFav) + '"]')) == null || H.focus({ preventScroll: !0 })), ht();
  }
  function ht() {
    var e, n, r;
    const t = f("housePane");
    if (t)
      for (const d of t.querySelectorAll(".themeChoice")) {
        const u = [...d.querySelectorAll("button")];
        let p = (e = d.nextElementSibling) != null && e.classList.contains("tfChoiceList") ? d.nextElementSibling : null;
        if (!p) {
          p = document.createElement("select"), p.className = "settingsSelect tfChoiceList", p.setAttribute("aria-label", d.getAttribute("aria-label") || ((r = (n = d.closest(".toggleRow")) == null ? void 0 : n.querySelector("strong")) == null ? void 0 : r.textContent) || ""), p.addEventListener("change", () => {
            var A;
            return (A = u[Number(p.value)]) == null ? void 0 : A.click();
          }), d.after(p);
          const T = () => {
            p.innerHTML = u.map((H, I) => '<option value="' + I + '"' + (H.disabled ? " disabled" : "") + ">" + rt(H.textContent) + "</option>").join("");
            const A = u.findIndex((H) => H.getAttribute("aria-pressed") === "true" || H.classList.contains("active"));
            A >= 0 && (p.value = String(A));
          };
          new MutationObserver(T).observe(d, { subtree: !0, attributes: !0, attributeFilter: ["aria-pressed", "class", "disabled"] }), T();
        }
        const g = (T) => {
          d.hidden !== !T && (d.hidden = !T), p.hidden !== T && (p.hidden = T);
        };
        if (u.length > 3) {
          g(!1);
          continue;
        }
        if (!d.getClientRects().length && !p.getClientRects().length) {
          p.dataset.fit || g(!0);
          continue;
        }
        const m = d.hidden;
        d.hidden = !1;
        const M = u.every((T) => T.scrollWidth <= T.clientWidth + 1);
        d.hidden = m, g(M), p.dataset.fit = "1";
      }
  }
  const dt = document.createElement("div");
  dt.className = "densityBadge", dt.setAttribute("aria-live", "polite"), dt.hidden = !0, b.appendChild(dt);
  let bt = 0;
  function ot() {
    if (!O) return;
    const t = f("homeView"), e = (u) => u.offsetParent !== null && !u.closest("[hidden]");
    t.querySelectorAll(":scope .card, :scope .tfAction").forEach((u) => {
      e(u) && (u.dataset.h = Math.round(u.getBoundingClientRect().height) + " px");
    });
    const n = [...t.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(e), r = window.innerHeight, d = n.filter((u) => {
      const p = u.getBoundingClientRect();
      return p.height > 0 && p.top >= 0 && p.bottom <= r + 0.5;
    }).length;
    dt.hidden = !t.classList.contains("active"), dt.innerHTML = "<b>" + d + "</b><small>of " + n.length + " readings on screen</small>";
  }
  const nt = () => {
    O && requestAnimationFrame(ot);
  };
  function at() {
    var t;
    b.classList.toggle("showDensity", O), (t = f("densityToggle")) == null || t.classList.toggle("on", O), dt.hidden = !O, clearInterval(bt), O && (bt = setInterval(ot, 1e3), ot());
  }
  window.addEventListener("scroll", nt, { capture: !0, passive: !0 }), window.addEventListener("resize", nt, { passive: !0 });
  const D = o.querySelector("#homeView .grid"), xt = document.createElement("style");
  o.appendChild(xt);
  const st = new ResizeObserver(() => Ht()), Bt = /* @__PURE__ */ new Set(), it = (t) => {
    const e = t.getBoundingClientRect().height;
    return Math.abs(e - t.offsetHeight) < 1 ? e : t.offsetHeight;
  };
  function Ht() {
    const t = b.classList.contains("tfAreaOpen") && !b.classList.contains("tfWeatherOpen");
    if (D.classList.toggle("tfStack", t), Bt.forEach((m) => {
      (!t || !m.isConnected) && (st.unobserve(m), Bt.delete(m));
    }), !t) {
      xt.textContent = "";
      return;
    }
    const e = getComputedStyle(D), n = parseFloat(e.columnGap) || 0, r = e.gridTemplateColumns.split(" ").length, d = [...D.children].filter((m) => m.dataset.k && m.offsetParent);
    xt.disabled = !0;
    const u = d.map((m) => {
      const M = getComputedStyle(m), T = /span (\d+)/.exec(M.gridColumnStart + " " + M.gridColumnEnd);
      return Math.min(r, T ? +T[1] : M.gridColumnEnd === "-1" ? r : 1);
    });
    xt.disabled = !1;
    let p = 0;
    const g = d.map((m, M) => {
      Bt.has(m) || (Bt.add(m), st.observe(m));
      const T = u[M];
      p + T > r && (p = 0);
      const A = p + 1;
      return p = (p + T) % r, '#homeView .grid.tfStack>[data-k="' + CSS.escape(m.dataset.k) + '"]{grid-column:' + A + " / span " + T + ";grid-row-end:span " + Math.max(1, Math.ceil(it(m) + n)) + "}";
    }).join(`
`);
    xt.textContent !== g && (xt.textContent = g);
  }
  new MutationObserver(Ht).observe(D, { childList: !0 }), new MutationObserver(Ht).observe(b, { attributes: !0, attributeFilter: ["class"] });
  let E = null, P = null, W = null, B = null;
  const lt = /* @__PURE__ */ new Map(), ut = /* @__PURE__ */ new Map(), mt = /* @__PURE__ */ new Map(), wt = 6;
  let kt = null;
  const Ot = /* @__PURE__ */ new Map(), zt = /* @__PURE__ */ new Map(), da = /* @__PURE__ */ new Map();
  let qt = { favourites: null }, Cn = {}, pn = {}, Tn = [], Ie = null;
  const Wt = (() => {
    try {
      return JSON.parse(jo.get(hp)) || {};
    } catch {
      return {};
    }
  })();
  let Kt = /* @__PURE__ */ new Map(), xa = 0;
  function Ln() {
    clearTimeout(xa), xa = setTimeout(() => Promise.resolve(V({ type: "frontend/set_user_data", key: fp, value: qt })).catch(() => {
    }), 400);
  }
  const Nt = (() => {
    let t = {};
    try {
      t = JSON.parse(jo.get(mp)) || {};
    } catch {
    }
    const e = (n, r) => Object.fromEntries(Object.entries(n || {}).filter(([, d]) => r.includes(d)));
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
  })(), Xt = () => jo.set(mp, JSON.stringify(Nt)), oe = () => {
    b.dataset.more = Nt.more, b.dataset.names = Nt.names, hs();
  };
  k && j && !f("moreInfoChoice") && (f("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + Qh.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Nt.more === t) + '" data-more-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), f("moreInfoChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-more-style]");
    e && (Nt.more = e.dataset.moreStyle, Xt(), oe(), f("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((n) => n.setAttribute("aria-pressed", String(n === e))));
  }), f("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + tm.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Nt.names === t) + '" data-names-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), f("namesChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-names-style]");
    e && (Nt.names = e.dataset.namesStyle, Nt.namesPicked = !0, Xt(), oe(), f("namesChoice").querySelectorAll("[data-names-style]").forEach((n) => n.setAttribute("aria-pressed", String(n === e))));
  }), f("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + em.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Nt.hoursWindow === t) + '" data-hours-window="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), f("hoursChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-hours-window]");
    e && (Nt.hoursWindow = e.dataset.hoursWindow, Xt(), Ee == null || Ee.refresh(), f("hoursChoice").querySelectorAll("[data-hours-window]").forEach((n) => n.setAttribute("aria-pressed", String(n === e))));
  }), f("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + am.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Nt.wxStyle === t) + '" data-wx-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), f("wxStyleChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-wx-style]");
    e && (Nt.wxStyle = e.dataset.wxStyle, Xt(), Ee == null || Ee.setStyle(Nt.wxStyle), Ge == null || Ge.forEach((n) => n.setStyle(Nt.wxStyle)), f("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((n) => n.setAttribute("aria-pressed", String(n === e))));
  })), Q();
  let ee = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const _a = /* @__PURE__ */ new Map();
  let or = "";
  const ja = k ? Ou({ onChange: () => Ae() }) : null;
  k && b.classList.add("house");
  const Qt = Object.assign(document.createElement("div"), { className: "tfBento" });
  let Ee = null, ir = null, Zn = !1;
  function rr(t) {
    const e = le();
    if (b.classList.toggle("houseBento", !!e), Ee && (ir !== e || t == null) && (Ee.destroy(), Ee = null), !e || t == null) {
      Qt.remove();
      return;
    }
    Qt.isConnected || D.append(Qt), Qt.style.order = t, !Ee && !Zn && (Ee = Qc(Qt, { getHass: i, entityId: e, style: Nt.wxStyle, hoursWindow: () => Nt.hoursWindow }), ir = e);
  }
  const De = [
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
  ], An = De.map(([t]) => t), Ut = ["aq", "pollen", "radar", "hourly", "sun", "moon", "uv", "humidity", "pressure", "wind", "visibility"], Hs = { hourly: 2 }, un = Object.fromEntries(De.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let Ge = null, Ft = null;
  function Zt(t) {
    const e = le();
    Ge && Ft !== e && (Ge.forEach((n) => n.destroy()), Ge = null), Object.values(un).forEach((n) => e ? !n.isConnected && D.append(n) : n.remove()), e && !Ge && !Zn && (Ge = /* @__PURE__ */ new Map(), Ft = e), Ue();
  }
  function Ue() {
    if (!Ge || Zn) return;
    const t = new Set(Te().hidden);
    De.forEach(([e, n]) => {
      Ge.has(e) || t.has(e) && !(se != null && se.fromTray && se.key === e) || Ge.set(e, Qc(un[e], { getHass: i, entityId: Ft, style: Nt.wxStyle, cards: n, onOpen: e === "wx" ? () => Zl("weather") : void 0 }));
    });
  }
  const ae = (t) => {
    var e;
    return ((e = S[t]) == null ? void 0 : e.attributes) || {};
  }, At = (t) => ae(t).friendly_name || t, re = (t, e) => Vo(t) || (Number(ae(t).supported_features) & e) === e, de = (t) => {
    const e = String(t ?? "").replace(/_/g, " ");
    return e.charAt(0).toUpperCase() + e.slice(1);
  }, me = (t, e = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: e, maximumFractionDigits: e }), za = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, sr = (t) => ae(t).supported_color_modes || [], Ei = (t, e) => [5, 3, 1].map((n) => {
    const r = (n + t / 60) % 6;
    return 255 * (1 - e / 100 * Math.max(0, Math.min(r, 4 - r, 1)));
  }), ea = (t) => (t /= 255, t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)), En = (t) => 0.2126 * ea(t[0]) + 0.7152 * ea(t[1]) + 0.0722 * ea(t[2]), _i = (t, e) => {
    const n = En(t), r = En(e);
    return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
  }, lr = 0.55, _n = ["hs", "xy", "rgb", "rgbw", "rgbww"], Nr = (t) => {
    const e = ae(t), n = _n.includes(e.color_mode);
    return (n && e.rgb_color ? e.rgb_color : n && e.hs_color ? Ei(...e.hs_color) : [255, 170, 0]).map((r) => Math.round(Math.max(0, Math.min(255, r))));
  }, Uo = { heat: [255, 111, 34], cool: [33, 150, 243], heat_cool: [255, 193, 7], auto: [76, 175, 80], dry: [255, 152, 0], fan_only: [0, 188, 212] };
  function Dn(t) {
    var r;
    const e = t.split(".")[0], n = (r = S[t]) == null ? void 0 : r.state;
    return !n || n === "unavailable" || n === "unknown" ? null : e === "light" ? n === "on" ? Nr(t) : null : e === "climate" ? Uo[n] || null : e === "cover" ? n !== "closed" ? [146, 107, 199] : null : e === "lock" ? n !== "locked" ? [244, 67, 54] : null : e === "media_player" ? ["playing", "paused", "on", "buffering"].includes(n) ? [3, 169, 244] : null : e === "humidifier" || e === "valve" ? ["on", "open", "opening", "closing"].includes(n) ? [33, 150, 243] : null : e === "vacuum" ? ["cleaning", "returning"].includes(n) ? [0, 150, 136] : null : e === "alarm_control_panel" ? n !== "disarmed" && n !== "triggered" ? [76, 175, 80] : null : e === "fan" ? n === "on" ? [0, 188, 212] : null : (e === "switch" || e === "input_boolean") && n === "on" ? [255, 193, 7] : null;
  }
  function Yo(t, e, n = !1) {
    const [r, d, u] = t.map((U) => U / 255), p = Math.max(r, d, u), g = Math.min(r, d, u), m = p - g, M = m ? (p === r ? (d - u) / m + (d < u ? 6 : 0) : p === d ? (u - r) / m + 2 : (r - d) / m + 4) * 60 : 0, T = (p + g) / 2, A = m ? m / (1 - Math.abs(2 * T - 1)) : 0, H = m < 0.1 ? Math.min(A, 0.25) : 1, I = (U) => {
      const z = (N) => (N + M / 30) % 12, G = H * Math.min(U, 1 - U);
      return [0, 8, 4].map((N) => Math.round(255 * (U - G * Math.max(-1, Math.min(z(N) - 3, 9 - z(N), 1)))));
    };
    for (let U = 0.5; n ? U < 0.96 : U > 0.04; U += n ? 0.01 : -0.01) {
      const z = I(U);
      if (_i(z, e) >= 3) return "rgb(" + z.join(",") + ")";
    }
    return n ? "#ffffff" : "#26221e";
  }
  const dr = (t) => {
    const e = [1, 3, 5].map((n) => parseInt(t.slice(n, n + 2), 16));
    return Math.max(...e) - Math.min(...e) < 26 ? "" : ";--sum-d:" + Yo(e, [58, 58, 58], !0) + ";--sum-l:" + Yo(e, [230, 230, 230]);
  }, Di = { d: ["#ffb894", "#d2b4ff", "#9dcbff"], l: ["#f0946a", "#b48ae6", "#6fa8e8"] }, Fs = () => [0, 1, 2].map((t) => "--g" + t + "-d:" + Di.d[t] + ";--g" + t + "-l:" + Di.l[t]).join(";"), ke = '<svg class="tfGradDefs" aria-hidden="true" focusable="false"><defs><linearGradient id="hcClimateGrad" x1="0" y1="0" x2="0" y2="1">' + [0.15, 0.5, 0.85].map((t, e) => '<stop offset="' + t + '" style="stop-color:var(--g' + e + ')"/>').join("") + "</linearGradient></defs></svg>", Ga = (t) => {
    const e = t.map((n) => Math.round(n + (255 - n) * lr));
    return "--light-soft:rgb(" + e.join(",") + ");--light-ink:" + Yo(t, e);
  }, Kn = (t) => Ga(Nr(t)), go = (t) => {
    const e = Dn(t);
    return e ? ' data-light style="' + Ga(e) + '"' : "";
  }, ra = (t) => {
    const e = sr(t);
    return e.length ? e.some((n) => n !== "onoff") : ae(t).brightness != null;
  }, Ye = (t) => [ae(t).min_color_temp_kelvin || 2e3, ae(t).max_color_temp_kelvin || 6500], Ve = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function Ir(t) {
    const e = Math.max(1, Math.round((Date.now() - t) / 1e3));
    if (e < 10) return "Just now";
    if (e < 60) return e + " seconds ago";
    const n = Math.round(e / 60);
    if (n < 60) return n + (n === 1 ? " minute ago" : " minutes ago");
    const r = Math.round(n / 60);
    if (r < 24) return r + (r === 1 ? " hour ago" : " hours ago");
    const d = Math.round(r / 24);
    return d + (d === 1 ? " day ago" : " days ago");
  }
  const fn = (t) => {
    var e;
    return ae(t).current_position ?? (((e = S[t]) == null ? void 0 : e.state) === "closed" ? 0 : 100);
  }, vo = (t) => {
    var e;
    return Ca("pos", t, ((e = Ot.get(t)) == null ? void 0 : e.pos) ?? fn(t));
  }, $n = (t) => {
    var e;
    return Ca("tilt", t, ((e = Ot.get(t)) == null ? void 0 : e.tilt) ?? ae(t).current_tilt_position);
  };
  function Se(t) {
    var p;
    const e = S[t];
    if (!e) return "Not found";
    if (e.state === "unavailable") return "Unavailable";
    const n = e.attributes, r = t.split(".")[0];
    if (r === "light") {
      if (e.state !== "on") return "Off";
      const g = n.color_temp_kelvin;
      return (ra(t) ? za(e) + "%" : "On") + (n.color_mode === "color_temp" && g ? " · " + Number(g).toLocaleString() + "k" : _n.includes(n.color_mode) ? " · Colour" : "");
    }
    if (r === "climate") return (e.state === "off" ? "Off" : de(n.hvac_action || e.state)) + " · " + me(n.current_temperature) + " °C now";
    if (r === "cover") {
      const g = fn(t), m = n.current_tilt_position;
      return e.state === "opening" || e.state === "closing" ? de(e.state) + " - " + g + "%" : (g <= 0 ? "Closed" : g >= 100 ? "Open" : "Partially open") + (m > 0 && m < 100 ? " · tilted" : "");
    }
    if (r === "humidifier") return e.state !== "on" ? "Off" : de(n.action || "on") + " · " + n.current_humidity + "% now";
    if (r === "vacuum") return de(e.state) + (e.state === "cleaning" && ((p = n.rooms) != null && p.length) ? " · " + n.rooms.join(", ") : "") + (n.battery_level != null ? " · " + n.battery_level + "%" : "");
    if (r === "media_player") return e.state === "playing" || e.state === "paused" ? (e.state === "paused" ? "Paused · " : "") + (n.media_title || "Playing") : de(e.state);
    if (r === "alarm_control_panel") return xp[e.state] || de(e.state);
    if (r === "lock" || r === "valve") return de(e.state);
    if (r === "switch") return e.state === "on" ? "On" : "Off";
    if (r === "plant") return e.state === "ok" ? "Healthy" : de(n.problem);
    if (r === "binary_sensor")
      return n.device_class === "battery" ? e.state === "on" ? "Low" : "Normal" : n.device_class === "problem" ? e.state === "on" ? "Problem" : "OK" : n.device_class === "moisture" ? e.state === "on" ? "Wet" : "Dry" : fd.includes(n.device_class) ? e.state === "on" ? "Open" : "Closed" : e.state === "on" ? "Detected" : "Clear";
    if (n.rang) return "Rang at " + Ve(n.rang);
    const d = i();
    if (d != null && d.formatEntityState && !Vo(t))
      try {
        return d.formatEntityState(e);
      } catch {
      }
    const u = Number(e.state);
    if (e.state !== "" && Number.isFinite(u)) {
      const g = Math.abs(u) >= 100 ? 0 : Math.abs(u) >= 10 ? 1 : 2, m = n.unit_of_measurement ? n.unit_of_measurement === "%" ? "%" : " " + n.unit_of_measurement : "";
      return u.toLocaleString(void 0, { maximumFractionDigits: g }) + m + (n.plant_low ? " · Low" : n.plant_high ? " · High" : "");
    }
    return de(e.state);
  }
  const bo = (t) => t >= 1e3 ? me(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W";
  function Bn(t) {
    var n, r;
    const e = i();
    t.querySelectorAll("[data-icon-for]").forEach((d) => {
      var g;
      const u = S[d.dataset.iconFor], p = d.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && u && !p) {
        let m = d.firstElementChild;
        (!m || m.localName !== "ha-state-icon") && (d.textContent = "", m = document.createElement("ha-state-icon"), d.appendChild(m)), m.hass = e, m.stateObj = u;
      } else if (customElements.get("ha-icon")) {
        let m = d.firstElementChild;
        (!m || m.localName !== "ha-icon") && (d.textContent = "", m = document.createElement("ha-icon"), d.appendChild(m)), m.icon = p || ((g = u == null ? void 0 : u.attributes) == null ? void 0 : g.icon) || "mdi:circle-medium";
      } else d.textContent || (d.textContent = (d.dataset.letter || At(d.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (n = t.querySelectorAll) == null || n.call(t, ".tfIcon").forEach(Zo), (r = t.classList) != null && r.contains("tfIcon") && Zo(t), Ri();
  }
  const Bi = /* @__PURE__ */ new Map();
  function Zo(t) {
    var u, p, g;
    const e = (((u = t.closest("[data-k]")) == null ? void 0 : u.dataset.k) || "") + "|" + (t.dataset.iconFor || ((p = t.querySelector("[data-icon-for]")) == null ? void 0 : p.dataset.iconFor) || t.getAttribute("aria-label") || ""), n = getComputedStyle(t), r = { backgroundColor: n.backgroundColor, color: n.color }, d = Bi.get(e);
    Bi.set(e, r), !(!d || d.backgroundColor === r.backgroundColor && d.color === r.color || (g = window.matchMedia) != null && g.call(window, "(prefers-reduced-motion: reduce)").matches) && t.animate([d, r], { duration: $e.warp.cdur, delay: $e.warp.cdelay, easing: Fe[$e.warp.ease], fill: "backwards" });
  }
  const Ko = "[data-icon-for]>:is(ha-state-icon,ha-icon),.tfIcon>svg", Hr = (t) => {
    const e = [t];
    for (; e.length; ) {
      const n = e.shift();
      if (n.localName === "svg") return n;
      n.shadowRoot && e.push(...n.shadowRoot.children), e.push(...n.children);
    }
    return null;
  };
  function Fr(t) {
    var I, U, z;
    const e = t.localName === "svg" ? t : Hr(t), n = e ? [...e.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")] : [];
    if (!n.length) return !e;
    const r = (I = t.closest(".tfIcon")) == null ? void 0 : I.offsetWidth;
    if (r === void 0) return !0;
    if (!r) return !1;
    const d = r + "|" + n.map((G) => G.getAttribute("d") || G.localName).join("|");
    if (t.dataset.fitted === d) return !0;
    let u = 1 / 0, p = 1 / 0, g = -1 / 0, m = -1 / 0;
    for (const G of n) {
      const N = G.getBBox(), ct = getComputedStyle(G), $ = ct.stroke !== "none" ? (parseFloat(ct.strokeWidth) || 0) / 2 : 0;
      !N.width && !N.height || (u = Math.min(u, N.x - $), p = Math.min(p, N.y - $), g = Math.max(g, N.x + N.width + $), m = Math.max(m, N.y + N.height + $));
    }
    if (!(g > u)) return !1;
    const M = (z = (U = e.viewBox) == null ? void 0 : U.baseVal) != null && z.width ? e.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, T = r > 40 ? r * (26 / 40) : r - 14, A = T * M.width / Math.max(g - u, m - p), H = A / M.width;
    return t.localName === "svg" ? (t.style.width = A + "px", t.style.height = A + "px") : t.style.setProperty("--mdc-icon-size", A + "px"), e.style.translate = ((M.x + M.width / 2 - (u + g) / 2) * H).toFixed(2) + "px " + ((M.y + M.height / 2 - (p + m) / 2) * H).toFixed(2) + "px", t.dataset.fitted = d, !0;
  }
  let Xn = 0;
  function Jn(t = 0) {
    clearTimeout(Xn), [...o.querySelectorAll(Ko)].filter((n) => !Fr(n)).length && t < 5 && (Xn = setTimeout(() => Jn(t + 1), 300));
  }
  function Ri() {
    clearTimeout(Xn), Xn = setTimeout(() => Jn(), 60);
  }
  const wo = (t) => {
    var e, n, r;
    return t.startsWith("light.") && S[t] && !ae(t).icon && !((r = (n = (e = i()) == null ? void 0 : e.entities) == null ? void 0 : n[t]) != null && r.icon) ? "mdi:lightbulb" : "";
  }, Ze = (t, e, n) => (e = e || wo(t), ' data-icon-for="' + rt(t) + '"' + (e ? ' data-icon-name="' + rt(e) + '"' : "") + (n ? ' data-letter="' + rt(n) + '"' : "")), Ua = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : ae(t).rang ? "mdi:doorbell" : "", ie = (t, e, n, r) => rt([t, e, n, r ? JSON.stringify(r) : ""].join("|")), $o = (t) => rt(JSON.stringify(t));
  function Qn(t, e) {
    var d, u;
    const n = rt(At(e) + ", " + Se(e));
    return '<div class="activityRow' + (Number.isFinite(Number((d = S[e]) == null ? void 0 : d.state)) && ((u = S[e]) == null ? void 0 : u.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + rt(t + "|" + e) + '" aria-label="' + n + '. Show the last 24 hours"' : '" aria-label="' + n + '"') + '><div class="tfIcon" aria-hidden="true"' + Ze(e, Ua(e)) + '></div><div><div class="activityRowName">' + rt(At(e)) + '</div><div class="activityRowMeta">' + rt(Se(e)) + "</div></div></div>";
  }
  const Xo = (t, e, n) => '<div class="activityRow" aria-label="' + rt(t + ", " + e) + '"><div class="tfIcon" aria-hidden="true"' + Ze("", n, t) + '></div><div><div class="activityRowName">' + rt(t) + '</div><div class="activityRowMeta">' + rt(e) + "</div></div></div>", ya = (t) => {
    var e;
    return ((e = ut.get(t)) == null ? void 0 : e.name) ?? At(t);
  }, to = (t) => {
    var e;
    return ((e = ut.get(t)) == null ? void 0 : e.text) ?? Se(t);
  };
  function cr(t) {
    var n;
    const e = (n = ut.get(t)) == null ? void 0 : n.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (e ? Ze("", e, ya(t)) : Ze(t, Ua(t))) + '></div><div><div class="activityRowName">' + rt(ya(t)) + '</div><div class="activityRowMeta">' + rt(to(t)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + rt(ya(t)) + '’s last 24 hours">' + ec + '</button></div><svg class="tfGraph" data-graph="' + rt(t) + '" role="img" aria-label="' + rt(ya(t)) + ', last 24 hours"></svg></div>';
  }
  function Ya(t, e, n, r, d = "", u = null, p = "") {
    const g = E && E.key === t;
    return '<section class="card tfCard' + (p ? " " + p : "") + (g ? " open" : "") + '" data-tf data-k="' + rt(t) + '" style="order:' + e + (g && E.h ? ";min-height:" + E.h + "px" : "") + '" aria-label="' + rt(n) + '"><div class="activityHeader">' + (u ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + rt(u) + '" aria-label="' + rt(n + (S[u] ? ", " + Se(u) : "") + ". More info") + '">' + rt(n) + "</button>" : '<div class="activityTitle">' + rt(n) + "</div>") + "</div>" + (g ? cr(E.id) : '<div class="activityRows">' + r.join("") + "</div>" + d) + "</section>";
  }
  function Rn(t, e) {
    const n = "readings:" + t.id, r = t.readings.map((d) => Qn(n, d));
    return t.power != null && r.push(Xo("Power now", bo(t.power), "mdi:flash")), Ya(n, e, "Readings", r);
  }
  function _e(t, e) {
    var g;
    const n = "energy:" + t.id, [r, d] = [t.solar.find((m) => m.endsWith("_power")), t.solar.find((m) => m.endsWith("_today"))], u = [r, d].filter(Boolean).map((m) => Qn(n, m)), p = Number(((g = S[r]) == null ? void 0 : g.state) || 0) * 1e3;
    return ee.grid && (u.push(Qn(n, ee.grid)), u.push(Xo("House use", bo(p + Number(S[ee.grid].state)), "mdi:home-lightning-bolt"))), Ya(n, e, "Energy", u, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const hn = (t, e) => Ya("plant:" + t.id, e, At(t.id), t.readings.map((n) => Qn("plant:" + t.id, n)), "", t.id);
  function Xe(t, e, n, r, d, u, p = null) {
    const g = n == null ? null : Math.max(0, Math.min(1, n)), m = g == null ? 0 : Math.round(g * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + rt(r) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + m + '"' + (d ? ' aria-valuetext="' + rt(d) + '"' : "") + ' data-drag="' + rt(t + "|" + e) + '">' + (p != null ? '<span class="was" aria-hidden="true" style="left:' + p + '%"></span>' : "") + (u ? g == null ? "" : '<b style="left:' + m + '%"></b>' : '<i style="width:' + m + '%"></i>') + "</div>";
  }
  const Jo = "move-assistant-house-last-bright", eo = (() => {
    try {
      return JSON.parse(jo.get(Jo)) || {};
    } catch {
      return {};
    }
  })();
  let pr = 0;
  const Je = (t, e) => {
    !e || eo[t] === e || (eo[t] = e, clearTimeout(pr), pr = setTimeout(() => jo.set(Jo, JSON.stringify(eo)), 500));
  }, ao = (t, e, n, r) => '<div class="tfStep" role="group" aria-label="' + rt(t) + '"><button type="button" data-act="' + n + '" aria-label="Lower ' + rt(t.toLowerCase()) + '">' + rp.down + "</button><output>" + rt(e) + '</output><button type="button" data-act="' + r + '" aria-label="Raise ' + rt(t.toLowerCase()) + '">' + rp.up + "</button></div>", wn = (t, e, n) => '<div class="' + t + '" role="group" aria-label="' + rt(e) + '">' + n.filter(Boolean).map((r) => '<button type="button" data-act="' + r.act + '"' + (r.pressed != null ? ' aria-pressed="' + r.pressed + '"' : "") + (r.disabled ? " disabled" : "") + (r.aria ? ' aria-label="' + rt(r.aria) + '"' : "") + ">" + (r.html || rt(r.label)) + "</button>").join("") + "</div>", xo = (t, e) => "width:" + Math.round(Math.max(0, Math.min(1, (t - e * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * e / 3).toFixed(2), no = (t) => "left:calc(4px + " + t / 100 + " * (100% - 8px))", Pi = (t, e) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + rt(At(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-blocks="' + rt(t) + '">' + [0, 1, 2, 3].map((n) => '<span><i style="' + xo(e, n) + '"></i><b' + (e >= (n + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (n + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + no(e) + '">' + Math.round(e) + "%</output></div>";
  function Os(t, e) {
    t.querySelectorAll(":scope>span").forEach((r, d) => {
      r.firstElementChild.setAttribute("style", xo(e, d)), r.lastElementChild.classList.toggle("lit", e >= (d + 1) * 25 - 12);
    });
    const n = t.querySelector(".tfTip");
    n.setAttribute("style", no(e)), n.textContent = Math.round(e) + "%", t.setAttribute("aria-valuenow", String(Math.round(e))), t.setAttribute("aria-valuetext", Math.round(e) + "% open");
  }
  const Ni = (t, e) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + rt(At(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-drag="tilt|' + rt(t) + '"><i style="width:calc((100% - 8px) * ' + e / 100 + ')"></i><span' + (e > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (e > 92 ? ' class="lit"' : "") + ">Open</span></div>", ur = (t, e, n) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + rt(At(t)) + '">' + [
    re(t, Yh) && ["open", "Open", "open_cover", e >= 100 && !n],
    re(t, Kh) && ["stop", "Stop", "stop_cover", !1],
    re(t, Zh) && ["close", "Close", "close_cover", e <= 0 && !n]
  ].filter(Boolean).map(([r, d, u, p]) => '<button type="button" data-act="' + ie("cover", u, t) + '" aria-label="' + d + '"' + (p ? " disabled" : "") + ">" + $h[r] + "</button>").join("") + "</div>", Pn = (t, e) => '<button class="tfIcon' + (e.art ? " art" : "") + '" type="button" data-act="' + e.button.act + '" aria-label="' + rt(e.button.label) + '"' + (e.art ? ' style="background-image:url(&quot;' + rt(e.art) + '&quot;)"' : Ze(t, e.icon)) + "></button>", Or = (t) => '<button class="tfName" type="button" data-more="' + rt(t) + '" aria-label="' + rt(At(t) + ", " + Se(t) + ". More info") + '"><span class="activityRowName">' + rt(At(t)) + '</span><span class="activityRowMeta">' + rt(Se(t)) + "</span></button>";
  function Qo(t, e = !1, n = null) {
    const r = io(t), d = t.startsWith("light.") && Da(t) && !(n && br(t) < 3), u = n || (e && t.startsWith("light.") ? ["bright"] : null), p = d ? ['<div class="tfDacPad" data-dac="' + (e ? "more:" : n ? "dash:" : "tile:") + rt(t) + '"></div>'] : r.sections.map((g, m) => g && (!u || u.includes((r.parts || [])[m])) ? g : "").filter(Boolean);
    return '<div class="tfAction' + (d ? " tfDac" : "") + (r.on ? " on" : "") + (!d && !p.length ? " tfHeadOnly" : "") + '" data-k="' + rt(t) + '"' + (r.tone ? ' data-tone="' + r.tone + '"' : "") + go(t) + '><div class="tfActionHead">' + Pn(t, r) + Or(t) + "</div>" + p.join("") + "</div>";
  }
  const Ke = "dual-controller-v3", fr = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let oo = null;
  async function yo() {
    if (oo || customElements.get(Ke)) return;
    oo = "loading";
    const t = await Promise.resolve().then(() => V({ type: "lovelace/resources" })).catch(() => null), e = Array.isArray(t) && t.some((r) => /dual-axis-controller/i.test(r.url || ""));
    if (await Promise.race([customElements.whenDefined(Ke), new Promise((r) => setTimeout(r, e ? 8e3 : 0))]), customElements.get(Ke)) return;
    const n = Object.assign(document.createElement("script"), { src: fr });
    n.onerror = () => {
      oo = "failed", K();
    }, document.head.appendChild(n);
  }
  const ka = /* @__PURE__ */ new Map(), ti = (t) => (Nt.lightStyles[t] || Nt.lights) === "dac", ei = () => Nt.lights === "dac" || Object.values(Nt.lightStyles).includes("dac");
  function Da(t) {
    return ti(t) && !!customElements.get(Ke);
  }
  const ue = (t) => Nt.lightPads[t] || Nt.dacPad, ai = () => {
    const t = i();
    return t && {
      ...t,
      themes: { ...t.themes || {}, darkMode: !b.classList.contains("light") },
      callService: (e, n, r, ...d) => t.callService(e, ...Ss(e, n, r), ...d)
    };
  }, qr = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", hr = (t) => {
    !t.shadowRoot || t.shadowRoot.querySelector("style[data-tf]") || (t.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: qr })).dataset.tf = "");
  }, Ma = /* @__PURE__ */ new Map(), Sa = new ResizeObserver((t) => t.forEach(({ target: e }) => {
    const n = e.parentElement;
    !n || !e.offsetHeight || (n.style.removeProperty("min-height"), Ma.set(n.dataset.dac, n.offsetHeight));
  }));
  function Ce(t) {
    t.querySelectorAll("[data-dac]").forEach((e) => {
      const n = e.dataset.dac;
      let r = ka.get(n);
      if (!r) {
        const d = n.slice(n.indexOf(":") + 1);
        r = document.createElement(Ke), r.setConfig({ type: "custom:" + Ke, entity: d, pad: ue(d), tap_action: { action: "none" } }), ka.set(n, r);
      }
      r.hass = ai(), r.parentNode !== e && e.replaceChildren(r), !r.offsetHeight && Ma.has(n) && (e.style.minHeight = Ma.get(n) + "px"), Sa.observe(r), hr(r);
    });
  }
  function Nn() {
    const t = ai();
    ka.forEach((e, n) => {
      e.isConnected ? e.hass = t : ka.delete(n);
    });
  }
  customElements.whenDefined(Ke).then(() => {
    k && (D != null && D.querySelector("[data-tf]")) && ol(po);
  });
  const Ca = (t, e, n) => mt.has(t + "|" + e) ? mt.get(t + "|" + e) : n;
  function io(t) {
    var u;
    const e = S[t], n = e.attributes, r = t.split(".")[0], d = (p, g) => ({ act: ie(p, "toggle", t), label: g });
    if (r === "light") {
      const p = e.state === "on", g = sr(t), [m, M] = Ye(t), T = Ca("bright", t, za(e));
      p && Je(t, za(e));
      const A = Ca("ct", t, p && n.color_mode === "color_temp" ? n.color_temp_kelvin : null), H = Ca("hue", t, p && _n.includes(n.color_mode) && n.hs_color ? n.hs_color[0] : null);
      return { on: p, button: d("light", "Turn " + At(t) + (p ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        ra(t) && Xe("bright", t, T / 100, At(t) + " brightness", T + "%", !1, p ? null : eo[t] ?? null),
        g.includes("color_temp") && Xe("ct", t, A == null ? null : (A - m) / (M - m), At(t) + " warm to cool", A == null ? "" : Math.round(A) + " kelvin", !0),
        g.some((I) => _n.includes(I)) && Xe("hue", t, H == null ? null : H / 360, At(t) + " colour", "", !0)
      ] };
    }
    if (r === "climate") {
      const p = n.target_temp_step || 0.5, g = Number(n.temperature);
      return { on: e.state !== "off", tone: e.state === "cool" || n.hvac_action === "cooling" ? "cool" : "heat", button: d("climate", "Turn " + At(t) + (e.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(g) && ao("Target temperature", me(g) + " °C", ie("climate", "set_temperature", t, { temperature: g - p }), ie("climate", "set_temperature", t, { temperature: g + p })),
        wn("tfSeg", "Mode", (n.hvac_modes || []).map((m) => ({ label: de(m), act: ie("climate", "set_hvac_mode", t, { hvac_mode: m }), pressed: e.state === m })))
      ] };
    }
    if (r === "cover") {
      const p = e.state === "opening" || e.state === "closing", g = e.state === "closed", m = vo(t), M = $n(t);
      return { on: !g, tone: "blue", icon: up[tc(e)][g ? 1 : 0], button: d("cover", (g ? "Open " : "Close ") + At(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        re(t, pp) && Pi(t, m),
        M != null && Ni(t, M),
        ur(t, m, p)
      ] };
    }
    if (r === "humidifier") {
      const p = Number(n.humidity);
      return { on: e.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: d("humidifier", "Turn " + At(t) + (e.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(p) && ao("Target humidity", p + "%", ie("humidifier", "set_humidity", t, { humidity: p - 1 }), ie("humidifier", "set_humidity", t, { humidity: p + 1 })),
        ((u = n.available_modes) == null ? void 0 : u.length) && wn("tfSeg", "Mode", n.available_modes.map((g) => ({ label: de(g), act: ie("humidifier", "set_mode", t, { mode: g }), pressed: n.mode === g })))
      ] };
    }
    if (r === "media_player") {
      const p = e.state === "playing", g = e.state === "off" || e.state === "standby", m = Ca("vol", t, n.volume_level), M = g ? { act: ie("media_player", re(t, Gh) ? "turn_on" : "toggle", t), label: "Turn " + At(t) + " on" } : e.state === "playing" || e.state === "paused" ? { act: ie("media_player", "media_play_pause", t), label: (p ? "Pause " : "Play ") + At(t) } : { act: ie("media_player", re(t, Uh) ? "turn_off" : "toggle", t), label: "Turn " + At(t) + " off" };
      return { on: !g, tone: "blue", art: !g && n.entity_picture ? n.entity_picture : null, button: M, parts: ["playback", "volume"], sections: g ? [] : [
        (re(t, lp) || re(t, dp) || re(t, sp) || re(t, cp)) && wn("tfSeg", "Playback", [
          { html: ud.prev, aria: "Previous", act: ie("media_player", "media_previous_track", t), disabled: !re(t, lp) },
          { html: p ? ud.pause : ud.play, aria: p ? "Pause" : "Play", act: ie("media_player", "media_play_pause", t), disabled: !(re(t, sp) || re(t, cp)) },
          { html: ud.next, aria: "Next", act: ie("media_player", "media_next_track", t), disabled: !re(t, dp) }
        ]),
        re(t, zh) && m != null && Xe("vol", t, m, At(t) + " volume", Math.round(m * 100) + "%")
      ] };
    }
    if (r === "vacuum") {
      const p = e.state === "cleaning", g = n.rooms || [], m = (T) => g.includes(T) ? g.filter((A) => A !== T) : g.concat(T), M = ie("vacuum", p ? "pause" : "start", t, Vo(t) ? { rooms: g } : null);
      return { on: p || e.state === "returning", tone: "blue", button: { act: M, label: (p ? "Pause " : "Start ") + At(t) }, parts: ["controls", "rooms"], sections: [
        wn("tfSeg", At(t), [
          { label: p ? "Pause" : "Start", act: M },
          { label: "Dock", act: ie("vacuum", "return_to_base", t), disabled: e.state === "docked" },
          { label: "Locate", act: ie("vacuum", "locate", t) }
        ]),
        Vo(t) && wn("tfChips", "Rooms to clean", ee.rooms.filter((T) => T.id !== "balcony").map((T) => ({ label: T.name, act: ie("vacuum", "set_rooms", t, { rooms: m(T.name) }), pressed: g.includes(T.name) })))
      ] };
    }
    if (r === "lock") {
      const p = e.state === "locked";
      return { on: !p, tone: "heat", button: { act: ie("lock", p ? "unlock" : "lock", t), label: (p ? "Unlock " : "Lock ") + At(t) }, parts: ["controls"], sections: [
        wn("tfSeg", At(t), [
          { label: "Lock", act: ie("lock", "lock", t), pressed: p },
          { label: "Unlock", act: ie("lock", "unlock", t), pressed: e.state === "unlocked" },
          re(t, dm) && { label: "Open", act: ie("lock", "open", t), pressed: e.state === "open" }
        ])
      ] };
    }
    if (r === "alarm_control_panel") {
      const p = e.state === "disarmed";
      return { on: !p, tone: e.state === "triggered" ? "alarm" : "blue", button: { act: ie("alarm_control_panel", p ? "alarm_arm_away" : "alarm_disarm", t), label: p ? "Arm " + At(t) + ", away" : "Disarm " + At(t) }, parts: ["controls"], sections: [
        wn("tfSeg", At(t), cm.filter(([, , , g]) => !g || re(t, g)).map(([g, m, M]) => ({ label: m, act: ie("alarm_control_panel", M, t), pressed: e.state === g })))
      ] };
    }
    if (r === "valve") {
      const p = e.state === "open";
      return { on: p, tone: "blue", icon: "mdi:sprinkler-variant", button: d("valve", (p ? "Close " : "Open ") + At(t)), parts: ["controls"], sections: [
        wn("tfSeg", At(t), [
          { label: "Open", act: ie("valve", "open_valve", t), pressed: p },
          { label: "Close", act: ie("valve", "close_valve", t), pressed: !p }
        ])
      ] };
    }
    if (nc.includes(r)) {
      const p = e.state === "on";
      return { on: p, button: d(r, "Turn " + At(t) + (p ? " off" : " on")), parts: [], sections: [] };
    }
    return { on: !1, button: { act: "", label: At(t) }, sections: [] };
  }
  const h = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : me(t)) + "°";
  function w(t) {
    var G;
    const e = (N) => t.readings.find((ct) => ae(ct).device_class === N), n = e("temperature"), r = e("humidity"), d = (N) => {
      var ct;
      return Number((ct = S[N]) == null ? void 0 : ct.state);
    }, u = (N) => t.actions.filter((ct) => N.test(ct)), p = t.lights.filter((N) => {
      var ct;
      return ((ct = S[N]) == null ? void 0 : ct.state) === "on";
    }), g = u(/^cover\./), m = g.filter((N) => {
      var ct;
      return ((ct = S[N]) == null ? void 0 : ct.state) !== "closed";
    }), M = [...new Set(g.map((N) => tc(S[N])))], T = u(/^climate\./)[0], A = u(/^humidifier\./)[0], H = u(/^media_player\./), I = H.find((N) => {
      var ct;
      return ((ct = S[N]) == null ? void 0 : ct.state) === "playing";
    }) || H.find((N) => {
      var ct;
      return ((ct = S[N]) == null ? void 0 : ct.state) === "paused";
    }), U = t.plugs.filter((N) => {
      var ct;
      return ((ct = S[N]) == null ? void 0 : ct.state) === "on";
    }), z = [];
    if (n && Number.isFinite(d(n)) && z.push({ key: "temp", id: n, kind: "reading", icon: zo(n), label: "Temperature", value: me(d(n)) + "°" }), r && Number.isFinite(d(r)) && z.push({ key: "hum", id: r, kind: "reading", icon: zo(r), label: "Humidity", value: Math.round(d(r)) + "%" }), t.lights.length && z.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: zo("", "mdi:lightbulb"),
      label: "Lights",
      value: p.length ? p.length + " of " + t.lights.length + " on" : "All off",
      short: p.length ? p.length + " on" : "Off",
      on: p.length > 0,
      light: p.length ? Kn(p[0]) : "",
      acts: t.lights.map((N) => ["light", p.length ? "turn_off" : "turn_on", N]),
      aria: (p.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), g.length) {
      const N = M.length === 1 ? Xh[M[0]] : "covers", ct = Math.round(g.reduce(($, Mt) => $ + fn(Mt), 0) / g.length);
      z.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        light: m.length ? Ga([146, 107, 199]) : "",
        icon: zo("", ((G = up[M[0]]) == null ? void 0 : G[m.length ? 0 : 1]) || "mdi:window-shutter"),
        label: de(N),
        value: ct <= 0 ? "Closed" : ct >= 100 ? "Open" : ct + "% open",
        short: ct <= 0 ? "Closed" : ct + "%",
        on: m.length > 0,
        acts: g.map(($) => ["cover", m.length ? "close_cover" : "open_cover", $]),
        aria: (m.length ? "Close the " : "Open the ") + N + " in " + t.name
      });
    }
    if (T) {
      const N = ae(T), ct = S[T].state === "off";
      z.push({
        key: "climate",
        kind: "control",
        tone: N.hvac_action === "cooling" ? "cool" : "heat",
        light: Dn(T) ? Ga(Dn(T)) : "",
        icon: zo(T),
        label: At(T),
        value: ct ? "Off" : de(N.hvac_action || S[T].state) + " · " + h(N.temperature),
        short: ct ? "Off" : h(N.temperature),
        on: !ct,
        acts: [["climate", "toggle", T]],
        aria: "Turn " + At(T) + (ct ? " on" : " off")
      });
    }
    if (A) {
      const N = S[A].state === "on";
      z.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        light: N ? Ga([33, 150, 243]) : "",
        icon: zo("", "mdi:air-humidifier"),
        label: At(A),
        value: N ? "On · " + ae(A).humidity + "%" : "Off",
        short: N ? ae(A).humidity + "%" : "Off",
        on: N,
        acts: [["humidifier", "toggle", A]],
        aria: "Turn " + At(A) + (N ? " off" : " on")
      });
    }
    if (H.length) {
      const N = I || H[0], ct = S[N], $ = ct.state === "playing";
      z.push({
        key: "media",
        kind: "control",
        tone: "blue",
        light: Dn(N) ? Ga(Dn(N)) : "",
        icon: zo(N),
        label: At(N),
        value: Se(N),
        short: $ ? "Playing" : ct.state === "paused" ? "Paused" : de(ct.state),
        on: $,
        acts: [["media_player", ct.state === "playing" || ct.state === "paused" ? "media_play_pause" : "toggle", N]],
        aria: ($ ? "Pause " : "Play ") + At(N)
      });
    }
    return t.plugs.length && z.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      light: U.length ? Ga([255, 193, 7]) : "",
      icon: zo("", "mdi:power-plug"),
      label: "Plugs",
      value: U.length ? U.length + " of " + t.plugs.length + " on" : "All off",
      short: U.length ? U.length + " on" : "Off",
      on: U.length > 0,
      acts: t.plugs.map((N) => ["switch", U.length ? "turn_off" : "turn_on", N]),
      aria: (U.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((N) => z.push(ae(N).device_class === "moisture" ? { key: "alert:" + N, kind: "alert", icon: zo(N), label: "Water leak" } : { key: "note:" + N, kind: "note", icon: zo(N), label: At(N) + " " + Se(N).toLowerCase() })), z;
  }
  const y = (t, e) => {
    const n = (r) => t.actions.filter((d) => r.test(d));
    return {
      lights: t.lights,
      covers: n(/^cover\./),
      climate: n(/^climate\./).slice(0, 1),
      humidifier: n(/^humidifier\./).slice(0, 1),
      plugs: t.plugs,
      media: (() => {
        const r = n(/^media_player\./);
        return [r.find((d) => {
          var u;
          return ((u = S[d]) == null ? void 0 : u.state) === "playing";
        }) || r.find((d) => {
          var u;
          return ((u = S[d]) == null ? void 0 : u.state) === "paused";
        }) || r[0]].filter(Boolean);
      })()
    }[e] || [];
  }, L = (t, e, n) => '<button class="' + e + (t.on ? " on" : "") + '" type="button" data-tone="' + t.tone + '" data-acts="' + $o(t.acts) + '" aria-label="' + rt(t.aria) + '" aria-pressed="' + t.on + '">' + n + "</button>", F = (t) => '<button class="tfAName" type="button" data-go="' + rt(t.id) + '" aria-label="Open ' + rt(t.name) + '">' + rt(t.name) + "</button>";
  function X(t, e, n = !1) {
    const r = e.find((g) => g.key === "lights"), d = !!(r != null && r.on), u = "", p = '<span class="tfAreaGlyph"' + Ze("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>";
    return n || !r ? '<span class="tfIcon tfAreaIcon' + (d ? " on" : "") + '"' + u + ' aria-hidden="true">' + p + "</span>" : '<button class="tfIcon tfAreaIcon' + (d ? " on" : "") + '" type="button"' + u + ' data-acts="' + $o(r.acts) + '" aria-label="' + rt(r.aria) + '" aria-pressed="' + d + '">' + p + "</button>";
  }
  const J = (t) => t.filter((e) => e.kind === "alert" || e.kind === "note").map((e) => '<span class="sourceTag">' + rt(e.label) + "</span>").join(" "), ft = (t) => t.readings.find((e) => ae(e).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((e) => S[e]) || null, tt = (t, e) => {
    const n = At(e);
    return n.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? de(n.slice(t.name.length + 1)) : n;
  };
  function gt(t) {
    const e = S[t], n = ae(t), r = t.split(".")[0], d = Number(e.state);
    if (e.state === "unavailable") return { text: "Unavailable" };
    if (r === "sensor" && Number.isFinite(d)) {
      if (n.device_class === "temperature") return { text: h(d) };
      const u = n.unit_of_measurement || "";
      return u === "%" ? { text: Math.round(d) + "%" } : { text: me(d, Number.isInteger(d) ? 0 : 1), unit: u };
    }
    if (r === "climate" && (n.current_temperature ?? n.temperature) != null) return { text: h(n.current_temperature ?? n.temperature) };
    if (r === "light") return { text: e.state !== "on" ? "Off" : ra(t) ? za(e) + "%" : "On" };
    if (r === "cover") {
      const u = fn(t);
      return { text: u <= 0 ? "Closed" : u >= 100 ? "Open" : u + "%" };
    }
    return r === "humidifier" ? { text: e.state === "on" ? n.humidity + "%" : "Off" } : r === "media_player" ? { text: e.state === "playing" ? "Playing" : e.state === "paused" ? "Paused" : de(e.state) } : { text: Se(t) };
  }
  const vt = (t, e, n) => {
    const r = n.find((g) => g.key === "temp"), d = n.find((g) => g.key === "hum"), u = ae(e), p = S[e].state === "off";
    return e.startsWith("climate.") ? [tt(t, e), p ? "Off" : de(u.hvac_action || S[e].state) + (u.temperature != null ? " · " + h(u.temperature) : ""), d && d.value + " humidity"].filter(Boolean).join(" · ") : [!(r && r.id === e) && tt(t, e), r && r.id !== e && r.value, d && d.id !== e && d.value + " humidity"].filter(Boolean).join(" · ");
  };
  function St(t, e, n) {
    const r = n && gt(n), d = n ? vt(t, n, e) : "", u = (m) => {
      const M = y(t, m.key);
      return M.length === 1 ? M[0] : "group:" + t.id + ":" + m.key;
    }, p = e.filter((m) => m.kind === "control").slice(0, 4).map((m) => '<div class="tfATile' + (m.on ? " on" : "") + '" data-tone="' + m.tone + '"' + (m.light ? ' data-light style="' + m.light + '"' : "") + ">" + L(m, "tfIcon", m.icon) + '<button class="tfName" type="button" data-more="' + rt(u(m)) + '" aria-label="' + rt(t.name + " " + m.label.toLowerCase() + ", " + m.value + ". Open") + '"><span class="activityRowName">' + rt(m.label) + '</span><span class="activityRowMeta">' + rt(m.value) + "</span></button></div>"), g = J(e);
    return '<div class="workoutPanelTop">' + X(t, e) + '<div class="tfATitle">' + F(t) + "</div>" + (g ? '<div class="tfATags">' + g + "</div>" : "") + "</div>" + (n ? '<button class="tfABig" type="button" data-more="' + rt(n) + '" aria-label="' + rt(At(n) + ", " + Se(n) + ". More info") + '"><span class="tfABigMain' + (r.text.length > 7 ? " long" : "") + '">' + rt(r.text) + (r.unit ? '<span class="tfABigUnit">' + rt(r.unit) + "</span>" : "") + "</span>" + (d ? '<span class="tfABigSub">' + rt(d) + "</span>" : "") + "</button>" : "") + (p.length ? '<div class="tfATiles">' + p.join("") + "</div>" : "");
  }
  function Vt(t) {
    const e = t.id === P, n = w(t), r = ft(t), d = r && gt(r), u = [...n.filter((p) => p.kind === "control"), ...n.filter((p) => p.kind !== "control" && p.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (e ? " active" : "") + '" data-area="' + rt(t.id) + '" tabindex="0" aria-expanded="' + e + '" aria-label="' + rt(t.name) + '"><div class="panelExpanded"' + (e ? "" : " inert") + ">" + St(t, n, r) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + X(t, n, !0) + '<span class="tfACName">' + rt(t.name) + '</span></div><span class="tfACMain">' + (d ? rt(d.text + (d.unit ? " " + d.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + u.map((p) => '<span class="tfACTile"><span class="tfIcon' + (p.kind === "alert" ? " alert" : "") + '"' + (p.on && p.light ? ' data-light style="' + p.light + '"' : "") + ">" + p.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let Pt = [];
  const Tt = () => {
    var e;
    const t = new Set(((e = qt.dash) == null ? void 0 : e.areasOff) || []);
    return Pt.filter((n) => !t.has(n.id));
  }, jt = (t) => {
    var n;
    const e = Tt();
    return e.some((r) => r.id === P) || (P = ((n = e[0]) == null ? void 0 : n.id) || null), '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + e.map(Vt).join("") + "</section></div>";
  }, It = (t) => t.startsWith("room:"), Ct = (t) => Pt.find((e) => "room:" + e.id === t);
  function Jt(t, e) {
    const n = w(t), r = ft(t), d = r && gt(r), u = r ? vt(t, r, n) : "", p = d ? d.text + (d.unit ? " " + d.unit : "") : "", g = (H) => {
      const I = y(t, H.key);
      return I.length === 1 ? I[0] : "group:" + t.id + ":" + H.key;
    }, m = n.filter((H) => H.kind === "control").slice(0, 4), M = (H) => H.on && H.light ? ' data-light style="' + H.light + '"' : "", T = m.map((H) => '<button class="tfIcon' + (H.on ? " on" : "") + '" type="button" data-tone="' + H.tone + '"' + M(H) + ' data-more="' + rt(g(H)) + '" aria-label="' + rt(H.label + ", " + H.value + ". Open its controls") + '">' + H.icon + "</button>"), A = m.map((H) => '<button class="tfRoomDev" type="button" data-more="' + rt(g(H)) + '" aria-label="' + rt(H.label + ", " + H.value + ". Open its controls") + '"><span class="tfIcon' + (H.on ? " on" : "") + '" data-tone="' + H.tone + '"' + M(H) + ">" + H.icon + '</span><span class="tfRoomDevName"><span class="activityRowName">' + rt(H.label) + '</span><span class="activityRowMeta">' + rt(H.value) + "</span></span></button>");
    return '<div class="tfAction tfRoomTile" data-k="' + rt(e) + '" data-go="' + rt(t.id) + '"><div class="tfActionHead"><span class="tfIcon tfRoomIcon" aria-hidden="true"><span class="tfAreaGlyph"' + Ze("area:" + t.id, t.icon || "mdi:texture-box", t.name) + '></span></span><button class="tfName" type="button" data-go="' + rt(t.id) + '" aria-label="Open ' + rt(t.name) + '"><span class="activityRowName">' + rt(t.name) + "</span>" + (p || u ? '<span class="activityRowMeta">' + (p ? '<span class="tfRoomInline">' + rt(p) + (u ? " · " : "") + "</span>" : "") + rt(u) + "</span>" : "") + "</button></div>" + (p ? '<div class="tfRoomReading" aria-hidden="true"><span class="tfRoomBig">' + rt(p) + "</span>" + (u ? '<span class="tfRoomSub">' + rt(u) + "</span>" : "") + "</div>" : "") + (T.length ? '<div class="tfRoomDevices">' + T.join("") + '</div><div class="tfRoomHeads">' + A.join("") + "</div>" : "") + "</div>";
  }
  const Yt = () => [
    { key: "home", name: "Home", ids: ee.homeVacuums },
    ...ee.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], fe = (t, e, n) => t + " " + (t === 1 ? e : n), _t = () => (qt.favourites ?? Cn.favorite_entities ?? []).filter((t) => S[t]);
  function Pe() {
    if (!Ie) {
      const e = Object.entries(Wt).sort((r, d) => d[1] - r[1]).map(([r]) => r), n = ee.rooms.flatMap((r) => r.actions);
      Ie = [.../* @__PURE__ */ new Set([...Tn, ...e, ...n.filter((r) => io(r).on), ...n])];
    }
    const t = _t();
    return Ie.filter((e) => S[e] && S[e].state !== "unavailable" && !t.includes(e));
  }
  let He = !1;
  function ma() {
    if (!He || qt.favSeeded || !ee.rooms.length || _) return;
    const t = (n) => Object.keys(S).find((r) => Vo(r) && n(r)), e = [t((n) => n.startsWith("climate.")), t((n) => n.startsWith("cover.") && /curtain/.test(n)), t((n) => n.startsWith("valve.")), ee.security.locks[0]];
    qt = { ...qt, favourites: [.../* @__PURE__ */ new Set([...qt.favourites ?? Cn.favorite_entities ?? [], ...e.filter(Boolean)])], favSeeded: !0 }, Ln();
  }
  const ga = () => qt.suggest ?? !Cn.hide_suggested_entities;
  function Ii() {
    const t = new Set(_ ? [] : qt.favHidden || []), e = _t().filter((r) => !t.has(r)), n = ga() ? Pe().filter((r) => !t.has(r) && Co(r)) : [];
    return [...e, ...n].slice(0, um);
  }
  const Ba = (t) => {
    const e = _t().includes(t);
    return '<button class="tfStar" type="button" data-star="' + rt(t) + '" aria-pressed="' + e + '" aria-label="Favourite: ' + rt(At(t)) + '">' + lm(e) + "</button>";
  };
  function xn(t, { area: e = !1, star: n = !1, plain: r = !1, say: d = null, alert: u = !1 } = {}) {
    var U, z, G, N, ct, $;
    const p = r && ((ct = (U = i()) == null ? void 0 : U.devices) == null ? void 0 : ct[(N = (G = (z = i()) == null ? void 0 : z.entities) == null ? void 0 : G[t]) == null ? void 0 : N.device_id]), g = p && (p.name_by_user || p.name) || At(t), m = t.split(".")[0], M = !r && xl.includes(m) ? io(t) : null, T = M ? M.on : ["on", "open", "playing"].includes(($ = S[t]) == null ? void 0 : $.state), A = r ? null : M ? M.button : nc.includes(m) ? { act: ie(m, "toggle", t), label: "Turn " + At(t) + (T ? " off" : " on") } : m === "scene" || m === "script" ? { act: ie(m, "turn_on", t), label: "Run " + At(t) } : null, H = (d ?? Se(t)) + (e && Kt.get(t) ? " · " + Kt.get(t) : ""), I = (M == null ? void 0 : M.icon) || Ua(t);
    return '<div class="activityRow' + (A ? " tfPlug" : "") + (T ? " on" : "") + (n ? " tfPick" : "") + (u ? " alert" : "") + '" data-k="' + rt((e ? "fav:" : "row:") + t) + '" data-tone="' + (m === "light" ? "light" : (M == null ? void 0 : M.tone) || "blue") + '"' + go(t) + ">" + (A && !n ? '<button class="tfIcon" type="button" data-act="' + A.act + '" aria-label="' + rt(A.label) + '"' + Ze(t, I) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + Ze(t, I) + "></div>") + '<button class="tfName" type="button" data-more="' + rt(t) + '" aria-label="' + rt(g + ", " + H + ". More info") + '"><span class="activityRowName">' + rt(g) + '</span><span class="activityRowMeta">' + rt(H) + "</span></button>" + (n ? Ba(t) : "") + "</div>";
  }
  const le = () => {
    var t;
    return S[(t = qt.sources) == null ? void 0 : t.weather] ? qt.sources.weather : S["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(S).find((e) => e.startsWith("weather."));
  };
  function ro() {
    var n;
    const t = (r) => Object.keys(S).filter((d) => d.startsWith("binary_sensor.") && r.includes(ae(d).device_class));
    return ((n = pn.alert_entities) != null && n.length ? pn.alert_entities : [...t(["moisture", "smoke", "gas"]).map((r) => ({ entity: r, severity: "alert" })), ...t(fd).map((r) => ({ entity: r, severity: "warning" }))]).filter((r) => S[r.entity]).map((r) => ({ ...r, on: ["on", "open", "unlocked", "triggered", "problem"].includes(S[r.entity].state) }));
  }
  function Za() {
    const t = Object.keys(ac), e = /* @__PURE__ */ new Set(), n = [];
    return (Cn.shortcuts || []).forEach((r) => {
      if (r.type === "summary") {
        if (!t.includes(r.key) || e.has(r.key)) return;
        e.add(r.key);
      }
      n.push(r);
    }), t.forEach((r) => {
      e.has(r) || n.push({ type: "summary", key: r });
    }), n;
  }
  function In() {
    var G;
    const t = ((G = i()) == null ? void 0 : G.entities) || {}, e = (N) => ae(N).device_class, n = Object.keys(S).filter((N) => N.startsWith("sensor.") && e(N) === "battery" || N.startsWith("binary_sensor.") && ["battery", "problem"].includes(e(N))), r = ee.rooms.flatMap((N) => N.plants.map((ct) => ct.id));
    if (!n.length && !r.length) return null;
    const d = (N) => {
      var $;
      const ct = ($ = t[N]) == null ? void 0 : $.device_id;
      return !!ct && Object.keys(S).some((Mt) => {
        var ne;
        return Mt.startsWith("binary_sensor.") && ((ne = t[Mt]) == null ? void 0 : ne.device_id) === ct && e(Mt) === "battery_charging" && S[Mt].state === "on";
      });
    }, u = (N) => N.startsWith("vacuum.") ? ae(N).battery_level <= 20 && S[N].state !== "docked" : N.startsWith("binary_sensor.") ? e(N) === "battery" && S[N].state === "on" : parseFloat(S[N].state) <= 20 && !d(N), p = [...n, ...ee.vacuums].filter((N) => S[N] && u(N)), g = [...n.filter((N) => e(N) === "problem" && S[N].state === "on"), ...r.filter((N) => {
      var ct;
      return ((ct = S[N]) == null ? void 0 : ct.state) === "problem";
    })], m = n.filter((N) => S[N].state === "unavailable"), M = [.../* @__PURE__ */ new Set([...p, ...g, ...m])], T = (N) => {
      const ct = parseFloat(S[N].state);
      return e(N) === "battery" && Number.isFinite(ct) ? ct : 101;
    }, A = [...r, ...ee.vacuums, ...[...n].sort((N, ct) => T(N) - T(ct))].filter((N) => S[N] && !M.includes(N)), H = /* @__PURE__ */ new Map();
    A.forEach((N) => {
      var $;
      const ct = (($ = ee.areaOf) == null ? void 0 : $.call(ee, N)) || "";
      H.set(ct, [...H.get(ct) || [], N]);
    });
    const I = (N) => {
      const ct = ee.rooms.findIndex(($) => $.id === N);
      return N === "" ? 1 / 0 : ct < 0 ? ee.rooms.length : ct;
    }, U = [...H.keys()].sort((N, ct) => I(N) - I(ct)), z = (N) => {
      var ct, $, Mt, ne;
      return ((ct = ee.rooms.find((Y) => Y.id === N)) == null ? void 0 : ct.name) || ((ne = (Mt = ($ = i()) == null ? void 0 : $.areas) == null ? void 0 : Mt[N]) == null ? void 0 : ne.name) || N;
    };
    return {
      value: [p.length && fe(p.length, "low battery", "low batteries"), g.length && fe(g.length, "problem", "problems"), m.length && fe(m.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: M, alert: !0 }, ...U.map((N) => ({ name: N ? z(N) : U.length > 1 ? "Other devices" : "Devices", ids: H.get(N) }))].filter((N) => N.ids.length)
    };
  }
  function Hn() {
    var yt;
    const t = ee.rooms, e = ee.security, n = (Et, Gt) => Et.actions.filter((Be) => Gt.test(Be)), r = (Et) => t.map((Gt) => ({ name: Gt.name, ids: Et(Gt) })).filter((Gt) => Gt.ids.length), d = t.flatMap((Et) => Et.lights), u = d.filter((Et) => {
      var Gt;
      return ((Gt = S[Et]) == null ? void 0 : Gt.state) === "on";
    }).length, p = t.map((Et) => Et.readings.find((Gt) => ae(Gt).device_class === "temperature")).filter(Boolean).map((Et) => Number(S[Et].state)).filter(Number.isFinite), [g, m] = [me(Math.min(...p)), me(Math.max(...p))], M = t.flatMap((Et) => n(Et, /^media_player\./)), T = M.filter((Et) => {
      var Gt;
      return ((Gt = S[Et]) == null ? void 0 : Gt.state) === "playing";
    }).length, A = ro(), H = A.filter((Et) => Et.severity === "warning" && Et.on).length, I = e.locks.filter((Et) => {
      var Gt;
      return ["unlocked", "jammed", "open"].includes((Gt = S[Et]) == null ? void 0 : Gt.state);
    }).length, U = e.alarms.filter((Et) => {
      var Gt;
      return ((Gt = S[Et]) == null ? void 0 : Gt.state) === "disarmed";
    }).length, z = H ? fe(H, "warning", "warnings") : null, G = I ? I + " unlocked" : U ? U + " disarmed" : z ? null : "All secure", N = In(), ct = t.flatMap((Et) => Et.solar), $ = ct.find((Et) => Et.endsWith("_power")), Mt = {
      light: d.length && { value: u ? u + " on" : "All off", groups: r((Et) => Et.lights) },
      climate: p.length && { value: g === m ? g + "°" : g + " - " + m + "°", groups: r((Et) => [...Et.readings.filter((Gt) => ["temperature", "humidity"].includes(ae(Gt).device_class)), ...n(Et, /^(climate|humidifier)\./)]) },
      security: (e.alarms.length || e.locks.length) && { value: [z, G].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...e.alarms, ...e.locks] }, { name: "Doors and windows", ids: e.openings }].filter((Et) => Et.ids.length) },
      media_players: M.length && { value: T ? T + " playing" : "No media playing", groups: r((Et) => n(Et, /^media_player\./)) },
      maintenance: N,
      energy: ee.grid && { value: bo(Number(((yt = S[$]) == null ? void 0 : yt.state) || 0) * 1e3 + Number(S[ee.grid].state)) + " now", groups: [{ name: "Energy", ids: [...ct, ee.grid] }] }
    }, ne = [], Y = A.filter((Et) => Et.severity !== "warning" && Et.on);
    return Y.length && ne.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: fe(Y.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: Y.map((Et) => Et.entity) }] }), Za().forEach((Et) => {
      Et.type !== "summary" ? ne.push({ key: "path:" + Et.path, name: Et.label || Et.path, icon: Et.icon || "mdi:link-variant", colour: "", value: "" }) : !Et.hidden && Mt[Et.key] && !(qt.hiddenSums || []).includes(Et.key) && ne.push({ key: Et.key, ...ac[Et.key], ...Mt[Et.key] });
    }), ne;
  }
  const Hi = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + rt(t.key) + '" data-k="sum:' + rt(t.key) + '" aria-label="' + rt(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : t.key === "climate" ? ' style="' + Fs() + '"' : t.colour && dr(t.colour) ? ' style="' + dr(t.colour).slice(1) + '"' : "") + ">" + (t.key === "climate" ? ke : "") + '<div class="tfIcon" aria-hidden="true"' + Ze(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + rt(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + rt(t.value) + "</div>" : "") + "</div></div>";
  function ni(t) {
    const e = _t();
    qt = { ...qt, favourites: e.includes(t) ? e.filter((n) => n !== t) : [...e, t], favHidden: (qt.favHidden || []).filter((n) => n !== t) }, Ln(), Ae();
  }
  function ca(t) {
    document.querySelector("home-assistant") && (lt.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function Wr(t, e) {
    if (t.startsWith("path:")) {
      ca(t.slice(5));
      return;
    }
    Er("summary:" + t, e);
  }
  async function Vr() {
    const t = (p) => Promise.resolve().then(() => V(p)).catch(() => null), [e, n, r, d] = await Promise.all([
      t({ type: "frontend/get_user_data", key: fp }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), u = (e == null ? void 0 : e.value) || {};
    qt = { favourites: u.favourites ?? null, sources: u.sources, hiddenSums: u.hiddenSums, dash: u.dash, named: u.named, favHidden: u.favHidden, suggest: u.suggest, favSeeded: u.favSeeded }, Cn = (n == null ? void 0 : n.value) || {}, pn = (r == null ? void 0 : r.value) || {}, Tn = Array.isArray(d == null ? void 0 : d.entities) ? d.entities : [], Ie = null, Object.keys(S).length && Ae(), Sd(), He = !0, ma();
  }
  const qs = "HomeCore";
  async function Sd() {
    var r, d, u;
    const t = location.pathname.split("/")[1], e = qt.named || [];
    if (!((d = (r = i()) == null ? void 0 : r.user) != null && d.is_admin) || !t || e.includes(t)) return;
    const n = () => {
      qt = { ...qt, named: [...e, t] }, Ln();
    };
    try {
      const p = (u = await V({ type: "lovelace/dashboards/list" })) == null ? void 0 : u.find((M) => M.url_path === t);
      if (!p || p.mode === "yaml") return;
      if (p.title === qs) {
        n();
        return;
      }
      const g = await V({ type: "lovelace/config", url_path: t }), m = ((g == null ? void 0 : g.views) || []).flatMap((M) => [...M.cards || [], ...(M.sections || []).flatMap((T) => T.cards || [])]);
      if (!m.length || !m.every((M) => (M == null ? void 0 : M.type) === "custom:move-assistant-card" && M.layout === "test-focus")) return;
      await V({ type: "lovelace/dashboards/update", dashboard_id: p.id, title: qs }), n();
    } catch {
    }
  }
  let oa = null, oi = 0, ko = !1;
  const Sl = (t) => {
    const e = t.split(".")[0], n = ae(t).device_class;
    return pm.includes(e) && (e !== "binary_sensor" || fd.includes(n) || !!yp[n]);
  }, jr = (t) => t.startsWith("binary_sensor.") ? yp[ae(t).device_class] : null;
  async function Cd() {
    var t;
    if (!(ko || Date.now() - oi < 30 * 1e3)) {
      ko = !0, oi = Date.now();
      try {
        const e = Object.keys(((t = i()) == null ? void 0 : t.states) || {}).filter(Sl), n = e.length ? await V({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: e }) : null;
        oa = Array.isArray(n) ? n.filter((r) => r.entity_id && r.state != null && r.when) : null;
      } catch {
        oa = null;
      }
      ko = !1, Ae();
    }
  }
  function Cl() {
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), n = (d) => {
      if (!S[d.entity_id] || !Sl(d.entity_id) || !Co(d.entity_id) || ["unavailable", "unknown"].includes(d.state)) return;
      if (jr(d.entity_id)) {
        const p = e.get(d.entity_id);
        d.state === "on" ? (!p || d.when > p.when + 1) && e.set(d.entity_id, { ...d, alarm: !0, cleared: null }) : p && !p.cleared && d.when > p.when && (p.cleared = d.when);
        return;
      }
      const u = t.get(d.entity_id);
      (!u || d.when > u.when + 1) && t.set(d.entity_id, d);
    };
    [...oa || []].sort((d, u) => d.when - u.when).forEach(n);
    const r = oa ? oi / 1e3 - 5 : 0;
    return Object.keys(S).forEach((d) => {
      var g;
      const u = S[d], p = u.last_changed ? Date.parse(u.last_changed) / 1e3 : 0;
      p > r && n({ entity_id: d, state: u.state, when: p, context_user_id: (g = u.context) == null ? void 0 : g.user_id });
    }), [...t.values(), ...e.values()].sort((d, u) => u.when - d.when).slice(0, fm);
  }
  function zr(t) {
    var r;
    const e = t.context_user_id && Object.keys(S).find((d) => d.startsWith("person.") && ae(d).user_id === t.context_user_id);
    if (e) return At(e);
    const n = (r = i()) == null ? void 0 : r.user;
    return n && t.context_user_id === n.id ? n.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function Tl(t) {
    const e = t.entity_id.split(".")[0], n = String(t.state);
    return e === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[n] || de(n).toLowerCase() : e === "cover" || e === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[n] || de(n).toLowerCase() : e === "binary_sensor" ? n === "on" ? "opened" : "closed" : e === "climate" ? n === "off" ? "turned off" : "set to " + de(n).toLowerCase() : e === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[n] || de(n).toLowerCase() : e === "alarm_control_panel" ? (xp[n] || de(n)).toLowerCase() : e === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[n] || de(n).toLowerCase() : n === "on" ? "turned on" : n === "off" ? "turned off" : de(n).toLowerCase();
  }
  function mr(t) {
    const e = t.entity_id, n = t.alarm && jr(e), r = At(e) + " " + (n ? n[0] : Tl(t)), d = n ? Ve(t.when * 1e3) + (t.cleared ? " · " + n[1] + " since " + Ve(t.cleared * 1e3) : "") : [zr(t), Ve(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (n ? " alert" : "") + '"><div class="tfIcon' + (n ? " alert" : "") + '" aria-hidden="true"' + Ze(e, Ua(e)) + '></div><button class="tfName" type="button" data-more="' + rt(e) + '" data-at="' + Math.round(t.when * 1e3) + '" aria-label="' + rt(r + ", " + d + ". More info") + '"><span class="activityRowName">' + rt(r) + '</span><span class="activityRowMeta">' + rt(d) + "</span></button></div>";
  }
  let ii = null, Fn = 0;
  const gr = [["electricity", "Electricity", 4.3, "kWh"], ["solar", "Solar", 2.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function Ws() {
    var e;
    if (Date.now() - Fn < 5 * 60 * 1e3) return;
    Fn = Date.now();
    const t = [];
    try {
      const n = ((e = await V({ type: "energy/get_prefs" })) == null ? void 0 : e.energy_sources) || [], r = (d) => n.filter((u) => u.type === d).flatMap((u) => d === "grid" ? (u.flow_from || []).map((p) => p.stat_energy_from) : [u.stat_energy_from]).filter(Boolean);
      for (const [d, u, p] of [["electricity", "Electricity", r("grid")], ["solar", "Solar", r("solar")], ["gas", "Gas", r("gas")], ["water", "Water", r("water")]]) {
        if (!p.length) continue;
        const g = await Promise.all(p.map((m) => Promise.resolve(V({ type: "recorder/statistic_during_period", statistic_id: m, calendar: { period: "day" }, types: ["change"] })).then((M) => Number(M == null ? void 0 : M.change) || 0, () => 0)));
        t.push({ key: d, name: u, id: p[0], ids: p, value: g.reduce((m, M) => m + M, 0), unit: ae(p[0]).unit_of_measurement || (d === "gas" || d === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    ii = t, Ae();
  }
  let Fi = null, Gr = [];
  function Vs() {
    var u;
    const t = Gr = ii != null && ii.length ? ii : gr.map(([p, g, m, M]) => {
      if (p === "solar") {
        const A = Object.keys(S).find((H) => H.endsWith("_solar_today") && !H.includes("made_up_energy"));
        A && Number.isFinite(Number(S[A].state)) && (m = Number(S[A].state));
      }
      const T = "sensor.made_up_energy_" + p;
      return S[T] = { entity_id: T, state: String(m), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: g + " today", unit_of_measurement: M, state_class: "total_increasing" } }, { key: p, name: g, id: T, value: m, unit: M };
    });
    ut.clear(), t.some((p) => p.id === Fi) || (Fi = t[0].id);
    const e = t.map((p) => {
      const g = Number(p.value).toLocaleString(void 0, { maximumFractionDigits: p.value < 10 ? 2 : 1 }) + " " + p.unit, m = hm[p.key], M = p.id === Fi;
      return ut.set(p.id, { name: p.name, text: g, icon: m }), '<div class="activityRow tap' + (M ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + rt(p.id) + '" aria-pressed="' + M + '" aria-label="' + rt(p.name + ", " + g) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + Ze("", m, p.name) + '></div><div><div class="activityRowName">' + rt(p.name) + '</div><div class="activityRowMeta">' + rt(g) + "</div></div></div>";
    }), n = t.find((p) => p.id === Fi), r = (((u = Te().opts.energy) == null ? void 0 : u.graph) || "above") === "below", d = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + rt(n.id) + '" role="img" aria-label="' + rt(n.name) + ', last 24 hours"></svg></div>';
    return Ya("dash:energy", 0, "Energy today", e, d, Hn().some((p) => p.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (r ? "" : " graphAbove"));
  }
  function js(t) {
    const e = D.querySelector(".tfDash-energy"), n = e == null ? void 0 : e.querySelector(".tfDashGraph svg");
    !n || t === Fi || (Fi = t, e.querySelectorAll("[data-energy-pick]").forEach((r) => {
      const d = r.dataset.energyPick === t;
      r.classList.toggle("picked", d), r.setAttribute("aria-pressed", String(d));
    }), n.dataset.graph = t, n.dataset.drawn = "", _a.set("dash:energy", Vs()), al(!0));
  }
  const Mo = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, Ll = /* @__PURE__ */ new Map();
  async function Al(t) {
    const e = /* @__PURE__ */ new Date(), n = new Date(e).setHours(0, 0, 0, 0), r = e.getHours(), d = e.getMinutes() / 60, u = Array.from({ length: 24 }, (g, m) => m <= r ? 0 : null);
    if (!t.ids) {
      const g = Mo[t.key] || Mo.electricity, m = g.map((T, A) => A < r ? T : A === r ? T * d : 0), M = m.reduce((T, A) => T + A, 0) || 1;
      return u.map((T, A) => T == null ? null : t.value * m[A] / M);
    }
    const p = Ll.get(t.id);
    if (p && p.day === n && Date.now() - p.at < 5 * 60 * 1e3) return p.hours;
    try {
      const g = await V({ type: "recorder/statistics_during_period", start_time: new Date(n).toISOString(), end_time: e.toISOString(), statistic_ids: t.ids, period: "hour", types: ["change"] });
      t.ids.forEach((T) => ((g == null ? void 0 : g[T]) || []).forEach((A) => {
        const H = typeof A.start == "number" ? A.start : Date.parse(A.start), I = new Date(H).getHours();
        H >= n && I < r && (u[I] += Number(A.change) || 0);
      }));
      const m = new Date(e).setMinutes(0, 0, 0), M = await Promise.all(t.ids.map((T) => Promise.resolve(V({ type: "recorder/statistic_during_period", statistic_id: T, fixed_period: { start_time: new Date(m).toISOString(), end_time: e.toISOString() }, types: ["change"] })).then((A) => Number(A == null ? void 0 : A.change) || 0, () => 0)));
      u[r] = M.reduce((T, A) => T + A, 0);
    } catch {
    }
    return Ll.set(t.id, { at: Date.now(), day: n, hours: u }), u;
  }
  async function Ur(t, e) {
    const n = await Al(e);
    if (!t.isConnected) return;
    const r = Math.max(120, t.clientWidth || 260), d = Math.max(60, t.clientHeight || 130), u = 18, p = d - 18, g = r / 24, m = g * 0.72, M = (/* @__PURE__ */ new Date()).getHours(), T = n.map((G) => G ?? 0), A = Math.max(0, ...T), H = (G) => p - (A > 0 ? G / A * (p - u) : 0), I = (G) => G.toLocaleString(void 0, { maximumFractionDigits: G < 10 ? 2 : 1 }) + " " + e.unit, U = (G) => String(G).padStart(2, "0") + ":00", z = A > 0 ? T.indexOf(A) : -1;
    t.setAttribute("viewBox", "0 0 " + r + " " + d), t.setAttribute("aria-label", e.name + " today by the hour: " + I(e.value) + (z >= 0 ? ", most " + I(A) + " at " + U(z) : "")), t.innerHTML = [u, (u + p) / 2, p].map((G) => '<line x1="0" x2="' + r + '" y1="' + G + '" y2="' + G + '" stroke="var(--line)" stroke-width="1"/>').join("") + n.map((G, N) => G > 0 ? '<rect x="' + (N * g + (g - m) / 2).toFixed(1) + '" y="' + H(G).toFixed(1) + '" width="' + m.toFixed(1) + '" height="' + (p - H(G)).toFixed(1) + '" rx="2" fill="' + (N === M ? "var(--primary)" : "var(--text)") + '"' + (N === M ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((G) => '<text x="' + (G * g).toFixed(1) + '" y="' + (d - 3) + '">' + String(G).padStart(2, "0") + "</text>").join("") + (z >= 0 ? '<text x="0" y="11">Most: ' + rt(I(A)) + " at " + U(z) + "</text>" : "");
  }
  function vr(t) {
    var e;
    (e = window.matchMedia) != null && e.call(window, "(prefers-reduced-motion: reduce)").matches || t.querySelectorAll("rect").forEach((n, r) => n.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: r * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function ri(t) {
    var r;
    if ((r = window.matchMedia) != null && r.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [e, n] = t.querySelectorAll("path");
    Vp(t, n, [e].filter(Boolean));
  }
  let mn = null, So = 0;
  const Co = (t) => !t.startsWith("light.") || mm.includes((Kt.get(t) || "").toLowerCase()), si = () => Math.max(2, Eo((D == null ? void 0 : D.clientWidth) || 0).n), li = (t) => {
    const e = io(t);
    return e.sections.map((n, r) => n && (e.parts || [])[r]).filter(Boolean);
  }, To = (t) => li(t).slice(0, br(t) - 1);
  function zs(t) {
    const e = Te().tiles;
    if (e) return e.filter((r) => S[r] || Ct(r));
    if (!mn) {
      const r = (d) => {
        var u;
        return (((u = S[d]) == null ? void 0 : u.state) === "on" ? 1e6 : 0) + (Wt[d] || 0);
      };
      mn = {
        lights: ee.rooms.flatMap((d) => d.lights).filter((d) => {
          var u;
          return Co(d) && ((u = S[d]) == null ? void 0 : u.state) !== "unavailable";
        }).sort((d, u) => r(u) - r(d) || At(d).localeCompare(At(u))),
        climates: ee.rooms.flatMap((d) => d.actions.filter((u) => u.startsWith("climate.")))
      };
    }
    const n = mn.climates.filter((r) => S[r]).slice(0, t > 3 ? 2 : 1);
    return [...mn.lights.filter((r) => S[r]).slice(0, Math.max(0, t - n.length)), ...n];
  }
  const Td = () => {
    var e, n;
    const t = (e = i()) == null ? void 0 : e.user;
    return (t == null ? void 0 : t.name) || ((n = Object.values(S).find((r) => {
      var d;
      return r.entity_id.startsWith("person.") && (t == null ? void 0 : t.id) && ((d = r.attributes) == null ? void 0 : d.user_id) === t.id;
    })) == null ? void 0 : n.attributes.friendly_name) || "";
  }, Yr = () => {
    const t = (/* @__PURE__ */ new Date()).getHours(), e = Td();
    return (t >= 5 && t < 12 ? "Good morning" : t >= 12 && t < 18 ? "Good afternoon" : "Good evening") + (e ? ", " + e : "");
  }, so = (t, e, n, r) => (d) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + e + '" aria-label="' + n + '">' + (r ? '<div class="activityHeader">' + (e === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + n + "</button>" : '<div class="activityTitle">' + n + "</div>") + "</div>" : "") + '<div class="activityRows">' + d + "</div></section>";
  function Oi(t, e) {
    var u, p;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + (_ ? '<span class="tfGreeting">' + rt(Yr()) + "</span>" : "") + rt(((p = (u = i()) == null ? void 0 : u.config) == null ? void 0 : p.location_name) || "Home") + "</h1>" }), e.length && t.push({ key: "sums", wrap: (g) => '<div class="tfDashBarRow" data-tf data-k="sums">' + so("tfDash-bar", "sums-bar", "Summaries", !1)(g).replace(" data-tf", "") + "</div>", tiles: e.map((g) => ({ key: "sum:" + g.key, html: Hi(g) })) }), !_ && Tt().length && t.push({ key: "areas", html: jt(0) });
    const n = Ii();
    if (n.length && t.push({ key: "favs", wrap: so("tfDash-favs", "favs", "Favourites", !0), tiles: n.map((g) => ({ key: "fav:" + g, html: xn(g, { area: !0 }) })) }), _)
      return So = si(), zs(0).forEach((g) => t.push({
        key: "dash:tile:" + g,
        wrap: (m) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + rt(g) + '">' + m + "</div>",
        tiles: [{ key: g, html: Jt(Ct(g), g) }]
      })), t;
    const r = Cl();
    t.push({ key: "dash:act", html: Ya("dash:act", 0, "Activity", r.length ? r.map(mr) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: Vs() });
    const d = si();
    return So = d, zs(d >= 3 ? d : d * 2).forEach((g) => t.push({
      key: "dash:tile:" + g,
      wrap: (m) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + rt(g) + '">' + m + "</div>",
      tiles: [{ key: g, html: It(g) ? Jt(Ct(g), g) : Qo(g, !1, To(g)) }]
    })), Cd(), Ws(), t;
  }
  const On = 252, be = 16, Ld = 200, El = Math.round(On * 1.25), _l = 60, yn = _l + be, Zr = 3, qi = {
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
  }, lo = ["wx", "favs", "act", "energy", "avg"], Kr = ["XS", "S", "M", "L", "XL"], $r = Kr.length, Dl = ["Narrow", "Wide", "Really wide"], Wi = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4, hourly: 4, sun: 4, moon: 4, uv: 4, humidity: 4, pressure: 4, wind: 4, visibility: 4 }, Xr = (t) => !t.includes(".") || !S[t] || t.startsWith("light.") && ti(t) ? $r : Math.min($r, li(t).length + 1), br = (t) => {
    const e = Te().opts[t] || {}, n = Xr(t), r = Number(e.h) || (e.tall ? 5 : Wi[t] || Bl);
    return Math.max(1, Math.min(n, r));
  }, Bl = 2, Ad = 90, Jr = 56, Oe = (t) => {
    var e;
    return qi[t] || (t.startsWith("room:") ? ((e = Pt.find((n) => "room:" + n.id === t)) == null ? void 0 : e.name) || "Area" : At(t));
  }, Ka = 409, Ed = 128;
  let Ra = !1, se = null, pa = null, Vi = !1, Lo = /* @__PURE__ */ new Map(), wr = 0, Ao = 0;
  const qn = ["title", "sums"], Eo = (t) => {
    const e = Math.max(1, Math.floor((t + be) / (Ld + be)));
    return { n: e, w: Math.max(1, Math.min(El, Math.floor((t - (e - 1) * be) / e))) };
  }, _o = () => Pt.map((t) => "room:" + t.id);
  function Wn() {
    const t = _o();
    return {
      cells: {},
      spans: { favs: 2 },
      hidden: Object.keys(qi).filter((e) => !["title", "sums", "favs"].includes(e)),
      opts: { favs: { h: 5 }, ...Object.fromEntries(t.map((e) => [e, { h: 5 }])) },
      tiles: t,
      known: Ut,
      areasOff: []
    };
  }
  const Te = () => _ ? Wn() : xr(), xr = () => {
    const t = { cells: {}, spans: {}, hidden: [], opts: {}, ...qt.dash || {} }, e = Ut.filter((n) => !(t.known || []).includes(n) && !t.hidden.includes(n));
    return e.length ? { ...t, hidden: [...t.hidden, ...e] } : t;
  };
  function yr(t) {
    _ || (qt = { ...qt, dash: { ...t, known: Ut } }, Ln());
  }
  function di() {
    const t = (e) => D.querySelector(e);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", un.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", un.avg, 2],
      ...Ut.map((e) => [e, un[e], Hs[e] || 1]),
      ...[...D.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => [e.dataset.k, e, 1, !0])
    ].filter(([, e]) => e == null ? void 0 : e.isConnected).map(([e, n, r, d = !1]) => ({ key: e, el: n, span: r, tile: d }));
  }
  const $a = (t, e, n) => {
    var r;
    if (t.span === "full") return e;
    if (t.span === "areas") {
      const d = Math.ceil((Ka + Math.max(0, Tt().length - 1) * (Ed + be) + be) / (n + be));
      return Math.max(Math.min(e, 2), Math.min(d, e - (((r = Te().cells.areas) == null ? void 0 : r.col) || 0)));
    }
    return Math.min(e, Te().spans[t.key] ?? t.span);
  }, ji = (t) => br(t.key);
  function Qr(t, e, n = null) {
    const r = Te().cells, d = t.every((g) => !r[g.key] || r[g.key].col + g.cols <= e), u = (g) => r[g.key] || { row: 1e9, col: 0 };
    return (() => {
      const g = /* @__PURE__ */ new Set(), m = /* @__PURE__ */ new Map(), M = (z, G, N, ct) => {
        for (let $ = G; $ < G + ct; $++) for (let Mt = z; Mt < z + N; Mt++) if (g.has(Mt + "," + $)) return !1;
        return !0;
      }, T = (z, G, N) => {
        for (let ct = N; ct < N + z.rows; ct++) for (let $ = G; $ < G + z.cols; $++) g.add($ + "," + ct);
        m.set(z.key, { col: G, row: N, cols: z.cols, rows: z.rows });
      }, A = (z, G, N) => {
        for (G = Math.max(0, Math.min(e - z.cols, G)), N = Math.max(0, N); !M(G, N, z.cols, z.rows); ) N++;
        T(z, G, N);
      }, H = (z) => {
        for (let G = 0; ; G++) for (let N = 0; N <= e - z.cols; N++) if (M(N, G, z.cols, z.rows)) {
          T(z, N, G);
          return;
        }
      };
      n && A(n, se.col, se.row);
      const I = t.filter((z) => z !== n), U = (z, G) => u(z).row - u(G).row || u(z).col - u(G).col;
      return d ? (I.filter((z) => r[z.key]).sort(U).forEach((z) => A(z, r[z.key].col, r[z.key].row)), I.filter((z) => !r[z.key]).forEach(H), m) : ([...I].sort(U).forEach(H), m);
    })();
  }
  function zi(t, e) {
    const n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map(), d = (u, p, g) => {
      for (let m = p; m < p + g.rows; m++) for (let M = u; M < u + g.cols; M++) if (n.has(M + "," + m)) return !1;
      return !0;
    };
    return t.forEach((u) => {
      for (let p = 0; ; p++) {
        let g = 0;
        for (; g <= e - u.cols && !d(g, p, u); ) g++;
        if (!(g > e - u.cols)) {
          for (let m = p; m < p + u.rows; m++) for (let M = g; M < g + u.cols; M++) n.add(M + "," + m);
          r.set(u.key, { col: g, row: p, cols: u.cols, rows: u.rows });
          return;
        }
      }
    }), r;
  }
  function ts() {
    const t = Te(), e = new Set(t.hidden), n = di().filter((p) => !qn.includes(p.key));
    let r = Lo;
    if (!r.size) {
      const p = t.pegs || 4, g = n.filter((m) => !e.has(m.key));
      g.forEach((m) => {
        m.cols = $a(m, p, On), m.rows = ji(m) ?? Bl;
      }), r = Qr(g, p);
    }
    const d = (p) => !e.has(p.key) && r.get(p.key) || { row: 1e9, col: 0 };
    n.sort((p, g) => d(p).row - d(g).row || d(p).col - d(g).col);
    const u = (t.phone || []).map((p) => n.find((g) => g.key === p && !e.has(p))).filter(Boolean);
    return [...u, ...n.filter((p) => !u.includes(p))];
  }
  const ci = () => {
    const t = ts();
    t.forEach((e, n) => e.el.style.setProperty("--o", String(3 + n))), Gs([...di().filter((e) => qn.includes(e.key)), ...t].map((e) => e.el));
  };
  function Gs(t) {
    if (se) return;
    const e = o.activeElement;
    let n = null;
    for (const r of new Set(t.map((d) => {
      for (; d && d.parentElement !== D; ) d = d.parentElement;
      return d;
    }).filter(Boolean))) {
      const d = n ? n.nextSibling : D.querySelector(":scope > [data-tf]");
      if (r !== d)
        try {
          D.moveBefore ? D.moveBefore(r, d) : D.insertBefore(r, d);
        } catch {
          D.insertBefore(r, d);
        }
      n = r;
    }
    e && e !== o.activeElement && e.isConnected && e.focus({ preventScroll: !0 });
  }
  const Pa = (t, e) => yr({ ...t, cells: e, pegs: Eo(D.clientWidth).n });
  function ua() {
    var ct;
    if (!k || !D) return;
    const t = D.clientWidth, e = t < 2 * On + be, n = b.classList.contains("tfDash");
    _ && (Ra = !1), b.classList.toggle("tfOverview", _);
    const { n: r, w: d } = e ? { n: 2, w: Math.floor((t - be) / 2) } : Eo(t);
    Qt.classList.add("tfPegs"), Qt.style.setProperty("--peg-n", r), Qt.style.setProperty("--peg-w", d + "px");
    const u = new Set(Te().hidden);
    Ut.forEach(($) => {
      var Mt;
      return (Mt = un[$]) == null ? void 0 : Mt.classList.toggle("tfNotAdded", u.has($) && !(se != null && se.fromTray && se.key === $));
    }), Ue(), b.classList.toggle("tfBoard", n), b.classList.toggle("tfEditing", n && Ra && !e);
    const p = f("dashEditNav");
    p && (p.hidden = !n || e || _, p.classList.toggle("active", Ra), p.setAttribute("aria-pressed", String(Ra)), p.setAttribute("aria-label", Ra ? "Done editing" : "Edit the dashboard"), p.title = Ra ? "Done" : "Edit", p.innerHTML = Ra ? sm : wp);
    const g = n ? di() : [];
    if (!n) {
      D.style.height = "", D.querySelectorAll(".tfBoardItem").forEach(($) => {
        $.classList.remove("tfBoardItem", "tfBoardHidden"), $.style.left = $.style.top = $.style.width = $.style.height = "";
      }), (ct = D.querySelector(".tfDash-act > .activityRows")) == null || ct.style.removeProperty("max-height"), Us(!1), b.classList.contains("tfDash") && ci(), ia();
      return;
    }
    if (_) {
      _d(g, t, e);
      return;
    }
    D.style.setProperty("--peg-w", d + "px");
    const m = new Set(Te().hidden), M = d + be;
    se != null && se.fromTray && m.delete(se.key), g.forEach(($) => $.el.classList.toggle("tfBoardHidden", m.has($.key)));
    const T = g.filter(($) => !m.has($.key) && getComputedStyle($.el).display !== "none");
    let A = 0;
    T.filter(($) => qn.includes($.key)).forEach(($) => {
      $.el.classList.add("tfBoardItem"), Object.assign($.el.style, { width: t + "px", height: "", left: "0px", top: A + "px" });
      const Mt = $.key === "sums" && $.el.querySelector(".tfDash-bar"), ne = Mt ? Mt.querySelectorAll(".activityRow").length : 0;
      Mt && (Mt.style.maxWidth = "none");
      for (let Y = 1; Mt && Y <= ne && (Mt.style.setProperty("--bar-cols", String(Math.ceil(ne / Y))), !(Mt.offsetWidth <= t)); Y++)
        ;
      Mt && (Mt.style.maxWidth = ""), A += $.el.offsetHeight + be;
    }), Ao = A;
    const H = T.filter(($) => !qn.includes($.key));
    H.forEach(($) => {
      $.cols = $a($, r, d), $.el.classList.add("tfBoardItem"), $.el.style.width = ($.cols === r ? t : $.cols * d + ($.cols - 1) * be) + "px", $.el.style.height = "", $.rows = ji($) ?? Math.max(1, Math.ceil(($.el.offsetHeight + be - 6) / yn));
    });
    const I = se && H.find(($) => $.key === se.key), U = e && ts().map(($) => $.key), z = ($) => U.includes($.key) ? U.indexOf($.key) : -1, G = e ? zi([...H].sort(($, Mt) => z($) - z(Mt)), r) : Qr(H, r, I);
    G.forEach(($) => Object.assign($, { x: $.cols === r ? 0 : $.col * M, y: Ao + $.row * yn, w: $.cols === r ? t : $.cols * d + ($.cols - 1) * be, h: $.rows * yn - be })), H.forEach(($) => {
      const Mt = G.get($.key);
      $.el.style.height = Mt.h + "px", $.el.dataset.rows = e && $.key === "wx" ? 5 : br($.key), $.el.toggleAttribute("data-narrow", !e && Mt.cols === 1 && r > 1), $.el.dataset.cols = Mt.cols, $.el.classList.contains("tfDac") && $.el.style.setProperty("--tf-dac-pad", Mt.h - Ad + "px"), !($ === I && !se.fromTray) && ($.el.style.left = Mt.x + "px", $.el.style.top = Mt.y + "px");
    }), e || (Lo = G), Gs([...T.filter(($) => qn.includes($.key)), ...H.slice().sort(($, Mt) => G.get($.key).row - G.get(Mt.key).row || G.get($.key).col - G.get(Mt.key).col)].map(($) => $.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([$, Mt]) => {
      const ne = G.get($), Y = ne && D.querySelector(Mt), yt = Y == null ? void 0 : Y.querySelector(":scope > .activityRows"), Et = Y == null ? void 0 : Y.querySelector(":scope > .activityHeader");
      if (!yt || !Et) return;
      const Gt = yt.getBoundingClientRect().top - Y.getBoundingClientRect().top, Be = ne.rows === 1 ? ne.h : Math.floor(ne.h - Gt - parseFloat(getComputedStyle(Y).paddingBottom)), wa = Math.max(1, Math.floor(Be / Jr));
      yt.style.setProperty("--fill-row", (Be / wa).toFixed(2) + "px"), yt.style.maxHeight = Be + "px";
    }), wr = Math.max(0, ...[...G.values()].map(($) => $.row + $.rows));
    let N = Ao + wr * yn - be;
    N = Us(Ra && !e, H, G, N, r, d), D.style.height = N + "px", requestAnimationFrame(() => b.classList.add("tfBoardReady")), g.forEach(($) => kn.observe($.el)), al(), ia();
  }
  const Xa = { gap: 20, phoneGap: 16, inner: 16, col: 252, colMin: 200, cols: 5, row: 337, nameGap: 28, sumsGap: 16 }, es = (t) => t.classList.toggle("hcMore", t.scrollHeight - t.scrollTop - t.clientHeight > 1);
  function _d(t, e, n) {
    const r = new Set(Te().hidden);
    t.forEach((Y) => Y.el.classList.toggle("tfBoardHidden", r.has(Y.key)));
    const d = t.filter((Y) => !r.has(Y.key) && getComputedStyle(Y.el).display !== "none"), u = n ? Xa.phoneGap : Xa.gap, p = n ? 2 : Math.max(2, Math.min(Xa.cols, Math.floor((e + u) / (Xa.colMin + u)))), g = n ? Math.floor((e - u) / 2) : Math.min(Xa.col, Math.floor((e - (p - 1) * u) / p)), m = (Y) => Y * g + (Y - 1) * (Y === 2 ? Xa.inner : u), M = (Y) => Y * (g + u) - (p >= 3 && Y >= 2 ? u - Xa.inner : 0), T = p * g + (p - 1) * u - (p >= 3 ? u - Xa.inner : 0);
    let A = 0;
    const H = d.filter((Y) => qn.includes(Y.key)).sort((Y, yt) => qn.indexOf(Y.key) - qn.indexOf(yt.key));
    H.forEach((Y) => {
      Y.el.classList.add("tfBoardItem"), Y.el.toggleAttribute("data-narrow", !1), Object.assign(Y.el.style, { width: (Y.key === "title" ? e : T) + "px", height: "", left: "0px", top: A + "px" });
      const yt = Y.key === "sums" && Y.el.querySelector(".tfDash-bar>.activityRows"), Et = yt ? yt.children.length : 0;
      if (yt && (yt.classList.remove("hcBarRows"), !n && yt.scrollWidth > yt.clientWidth + 1))
        for (let Gt = 2; Gt <= Et && (yt.classList.add("hcBarRows"), yt.style.setProperty("--bar-cols", String(Math.ceil(Et / Gt))), !(yt.scrollWidth <= yt.clientWidth + 1)); Gt++)
          ;
      A += Y.el.offsetHeight + (Y.key === "title" ? Xa.nameGap : Xa.sumsGap);
    });
    const I = ["favs", ..._o()], U = d.filter((Y) => !qn.includes(Y.key)).sort((Y, yt) => (I.indexOf(Y.key) + 1 || 99) - (I.indexOf(yt.key) + 1 || 99)), z = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Map();
    U.forEach((Y) => {
      const yt = Math.min(p, Y.key === "favs" ? 2 : 1);
      for (let Et = 0; ; Et++) {
        const Gt = [...Array(p - yt + 1).keys()].find((Be) => [...Array(yt).keys()].every((wa) => !z.has(Et + "," + (Be + wa))));
        if (Gt != null) {
          [...Array(yt).keys()].forEach((Be) => z.add(Et + "," + (Gt + Be))), G.set(Y.key, { r: Et, c: Gt, cols: yt });
          break;
        }
      }
    });
    const N = Math.max(0, ...[...G.values()].map((Y) => Y.r + 1)), ct = [];
    U.forEach((Y) => {
      const yt = G.get(Y.key);
      Y.el.classList.add("tfBoardItem"), Y.el.dataset.rows = 5, Y.el.dataset.cols = yt.cols, Y.el.toggleAttribute("data-narrow", !1), Object.assign(Y.el.style, { width: m(yt.cols) + "px", height: n ? "" : Xa.row + "px" });
    }), n && U.forEach((Y) => {
      const yt = G.get(Y.key);
      ct[yt.r] = Math.max(ct[yt.r] || 0, Y.el.offsetHeight);
    }), U.forEach((Y, yt) => Y.el.style.setProperty("--o", String(3 + yt)));
    let $ = A;
    const Mt = [];
    for (let Y = 0; Y < N; Y++)
      Mt[Y] = $, $ += (n ? ct[Y] || 0 : Xa.row) + u;
    U.forEach((Y) => {
      const yt = G.get(Y.key);
      Object.assign(Y.el.style, { left: M(yt.c) + "px", top: Mt[yt.r] + "px", height: (n ? ct[yt.r] : Xa.row) + "px" });
    }), D.style.height = (N ? $ - u : A) + "px", Gs([...H, ...U.slice().sort((Y, yt) => G.get(Y.key).r - G.get(yt.key).r || G.get(Y.key).c - G.get(yt.key).c)].map((Y) => Y.el)), Us(!1);
    const ne = D.querySelector(".tfDash-favs>.activityRows");
    ne && (ne.classList.add("hcFadeList"), es(ne)), requestAnimationFrame(() => b.classList.add("tfBoardReady")), t.forEach((Y) => kn.observe(Y.el)), ia();
  }
  const Gi = () => {
    Vi || (Vi = !0, requestAnimationFrame(() => {
      Vi = !1, ua();
    }));
  }, kn = new ResizeObserver(() => {
    se || Gi();
  });
  function Dd(t, e, n) {
    const r = n + be, d = t * n + (t - 1) * be, u = e * yn - be, p = be / 2, g = r / Math.max(1, Math.round(r / (yn / 4))), m = yn / 4, M = 6;
    let T = "";
    for (let A = 0; A <= t; A++) for (let H = 0; H <= e; H++) {
      const I = A * r - p, U = H * yn - p;
      T += "M" + (I - M) + " " + U + "H" + (I + M) + "M" + I + " " + (U - M) + "V" + (U + M);
    }
    return '<svg width="' + d + '" height="' + u + '" viewBox="0 0 ' + d + " " + u + '"><defs><pattern id="tfGridDots" patternUnits="userSpaceOnUse" x="' + -p + '" y="' + -p + '" width="' + g.toFixed(3) + '" height="' + m + '"><circle cx="0" cy="0" r="1.4"></circle><circle cx="' + g.toFixed(3) + '" cy="0" r="1.4"></circle><circle cx="0" cy="' + m + '" r="1.4"></circle><circle cx="' + g.toFixed(3) + '" cy="' + m + '" r="1.4"></circle></pattern></defs><rect class="tfGridDots" x="' + -p + '" y="' + -p + '" width="' + (d + be) + '" height="' + (u + be) + '" fill="url(#tfGridDots)"></rect><path class="tfGridCross" d="' + T + '"></path></svg>';
  }
  function Us(t, e = [], n = /* @__PURE__ */ new Map(), r = 0, d = 1, u = On) {
    D.querySelectorAll(".tfEditChips").forEach((T) => {
      (!t || !T.closest(".tfBoardItem")) && T.remove();
    }), D.querySelectorAll(".tfFavHides").forEach((T) => T.remove()), D.querySelectorAll(".tfBoardItem").forEach((T) => [...T.children].forEach((A) => {
      A.classList.contains("tfEditChips") || A.toggleAttribute("inert", t);
    }));
    let p = D.querySelector(".tfBoardCells"), g = D.querySelector(".tfBoardLand");
    if (!t)
      return p == null || p.remove(), g == null || g.remove(), Ta(), r;
    const m = wr + Zr;
    if (p || (p = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), p.setAttribute("aria-hidden", "true"), D.prepend(p)), p.style.top = Ao + "px", p.dataset.size !== d + "x" + m + "x" + u && (p.dataset.size = d + "x" + m + "x" + u, p.innerHTML = Dd(d, m, u)), r = Math.max(r, Ao + m * yn - be), e.forEach((T) => {
      const A = T.el;
      !A || A.querySelector(":scope > .tfEditChips") || A.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + oc + '</span><button class="tfEditChip" type="button" data-board-more="' + rt(T.key) + '" aria-label="' + rt(Oe(T.key)) + ' options" aria-haspopup="menu">' + nm + "</button></div>");
    }), se && n.has(se.key)) {
      g || (g = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), D.appendChild(g));
      const T = n.get(se.key);
      Object.assign(g.style, { left: T.x + "px", top: T.y + "px", width: T.w + "px", height: T.h + "px" });
    } else g == null || g.remove();
    const M = D.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (M) {
      const T = M.getBoundingClientRect();
      M.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...M.querySelectorAll('[data-k^="fav:"]')].map((A) => {
        const H = A.getBoundingClientRect(), I = A.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + rt(I) + '" aria-label="Hide ' + rt(At(I)) + ' from the dashboard" style="left:' + Math.round(H.right - T.left - 42) + "px;top:" + Math.round(H.top - T.top + (H.height - 32) / 2) + 'px">' + gp + "</button>";
      }).join("") + "</div>");
    }
    return r;
  }
  let as = "";
  function Do(t) {
    Ra = t, t || (se = null, Ia = Qa = !1, Ta()), ua(), t ? as = JSON.stringify(qt) : as && JSON.stringify(qt) !== as && Ja("Changes saved");
  }
  function Bd(t, e) {
    var z, G;
    Ta();
    const n = Lo.get(t), { n: r } = Eo(D.clientWidth), d = Te(), u = d.spans[t] ?? (It(t) ? 1 : 2);
    if (!n) return;
    const p = n.cols >= r, g = (N, ct, $) => '<button type="button" role="menuitem" data-board-act="' + N + '"' + ($ ? " disabled" : "") + ">" + ct + "</button>", m = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    m.setAttribute("role", "menu"), m.setAttribute("aria-label", Oe(t) + " options");
    const M = D.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]'), T = Xr(t), A = br(t), H = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + Kr.map((N, ct) => '<button type="button" role="menuitemradio" aria-checked="' + (ct + 1 === A) + '" aria-label="' + N + ", " + (ct + 1) + (ct ? " rows" : " row") + '" data-board-act="h:' + (ct + 1) + '"' + (ct < T ? "" : " disabled") + ">" + N + "</button>").join("") + "</div></div>", I = lo.includes(t) || It(t) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + Dl.map((N, ct) => '<button type="button" role="menuitemradio" aria-checked="' + (ct + 1 === Math.min(u, r)) + '" aria-label="' + N + ", " + (ct + 1) + (ct ? " columns" : " column") + '" data-board-act="w:' + (ct + 1) + '"' + (ct < r ? "" : " disabled") + ">" + N + "</button>").join("") + "</div></div>" : "";
    m.innerHTML = H + I + (t === "energy" ? g("graph", (((z = d.opts.energy) == null ? void 0 : z.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + g("left", "Move left", p || n.col === 0) + g("right", "Move right", p || n.col + n.cols >= r) + g("up", "Move up", n.row <= 0) + g("down", "Move down") + (M ? g("remove", "Remove") : g("hide", "Hide")), D.appendChild(m);
    const U = Math.min(n.x + n.w - m.offsetWidth, D.clientWidth - m.offsetWidth);
    Object.assign(m.style, { left: Math.max(0, U) + "px", top: n.y + 28 + "px" }), pa = { key: t, menu: m, opener: e }, (G = m.querySelector("button:not([disabled])")) == null || G.focus();
  }
  function Ta(t) {
    if (!pa) return;
    const { menu: e, opener: n } = pa;
    pa = null, e.remove(), t && (n == null || n.focus());
  }
  const pi = () => Object.fromEntries([...Lo].map(([t, e]) => [t, { col: e.col, row: e.row }]));
  function Rl(t, e) {
    var g, m;
    if (e === "remove") {
      Ta(), Ys(t);
      return;
    }
    const n = qt, r = Te(), d = pi(), u = d[t] || { col: 0, row: 0 };
    e.startsWith("w:") && (r.spans = { ...r.spans, [t]: e === "w:full" ? "full" : Number(e.slice(2)) }), e.startsWith("h:") && (r.opts = { ...r.opts, [t]: { ...r.opts[t] || {}, h: Number(e.slice(2)), tall: void 0 } }), e === "graph" && (r.opts = { ...r.opts, energy: { ...r.opts.energy || {}, graph: (((g = r.opts.energy) == null ? void 0 : g.graph) || "above") === "above" ? "below" : "above" } }), e === "left" && (d[t] = { ...u, col: u.col - 1 }), e === "right" && (d[t] = { ...u, col: u.col + 1 }), e === "up" && (d[t] = { ...u, row: u.row - 1 }), e === "down" && (d[t] = { ...u, row: u.row + 1 }), e === "hide" && (r.hidden = [.../* @__PURE__ */ new Set([...r.hidden, t])]), ["left", "right", "up", "down"].includes(e) && (se = { key: t, col: d[t].col, row: d[t].row }), Pa(r, d), se && (ua(), se = null, Pa(Te(), pi()));
    const p = /^[hw]:/.test(e) && !Va() && (pa == null ? void 0 : pa.menu.querySelector('[data-board-act="' + CSS.escape(e) + '"]'));
    if (p) {
      const M = pa;
      p.parentElement.querySelectorAll("[aria-checked]").forEach((T) => T.setAttribute("aria-checked", String(T === p))), setTimeout(() => {
        pa === M && Ta();
      }, $e.tabs.dur);
    } else Ta();
    e === "graph" && (_a.delete("dash:energy"), Ae()), e.startsWith("h:") && t.includes(".") && Ae(), ua(), e !== "hide" ? (m = D.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || m.focus() : Ja(Oe(t) + " hidden", co(n));
  }
  const ui = (t) => {
    var e;
    return Ut.includes(t) && !(((e = qt.dash) == null ? void 0 : e.cells) || {})[t] ? " added" : " put back";
  };
  function Bo(t) {
    const e = Te(), n = Oe(t) + ui(t);
    yr({ ...e, hidden: e.hidden.filter((r) => r !== t) }), ua(), Ja(n);
  }
  const Le = () => Te().tiles || [...D.querySelectorAll(".tfDashTiles > [data-k]")].map((t) => t.dataset.k).filter((t) => !Te().hidden.includes(t));
  function fi(t, e) {
    const n = Te();
    Pa({ ...n, tiles: t, hidden: n.hidden.filter((r) => !r.includes(".")) }, e), Ae(), ia();
  }
  const kr = (t) => {
    fi([...Le().filter((e) => e !== t), t], pi()), Ja(Oe(t) + " added"), hi(t);
  }, Ys = (t) => {
    const e = qt, n = pi();
    delete n[t], fi(Le().filter((r) => r !== t), n), Ja(Oe(t) + " removed", co(e));
  };
  let fa = 0;
  function Ja(t, e = null) {
    var p;
    const n = f("toast");
    if (!n) return;
    if (Rf(n, t), e) {
      const g = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      g.addEventListener("click", () => {
        clearTimeout(fa), n.classList.remove("show", "withAction"), e();
      }), n.appendChild(g);
    }
    const r = b.getBoundingClientRect(), d = (p = o.querySelector(".bottomNav")) == null ? void 0 : p.getBoundingClientRect(), u = he.classList.contains("open") && !gn ? Math.min(r.right, he.getBoundingClientRect().left) : r.right;
    n.style.left = (r.left + u) / 2 + "px", n.style.bottom = (d != null && d.height ? window.innerHeight - d.top + 12 : 26) + "px", n.classList.add("tfToast", "show"), n.classList.toggle("withAction", !!e), Pf(n), clearTimeout(fa), fa = setTimeout(() => n.classList.remove("show", "withAction"), e ? 5e3 : $e.confirm.stay);
  }
  const Pl = 700, Nl = 1e3, La = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  La.setAttribute("role", "tooltip"), La.setAttribute("aria-hidden", "true"), b.appendChild(La);
  let ns = null, Mr = 0, Ui = 0, Il = -1 / 0;
  const os = (t) => {
    if (t.nodeType !== 1) return !1;
    const e = getComputedStyle(t);
    return e.textOverflow === "ellipsis" && t.scrollWidth > t.clientWidth + 1 || e.webkitLineClamp !== "none" && t.scrollHeight > t.clientHeight + 1;
  }, is = (t) => {
    for (let e = t; e && e !== b; e = e.parentElement) if (os(e)) return e;
    return null;
  };
  function Yi(t, e) {
    clearTimeout(Mr), clearTimeout(Ui);
    const n = () => {
      if (!t.isConnected) return;
      ns = t, La.textContent = e, La.hidden = !1;
      const r = t.getBoundingClientRect(), d = La.getBoundingClientRect(), u = r.top - d.height - 8 >= 8 ? r.top - d.height - 8 : r.bottom + 8;
      La.style.left = Math.max(8, Math.min(window.innerWidth - d.width - 8, r.left + r.width / 2 - d.width / 2)) + "px", La.style.top = u + "px";
    };
    !La.hidden || performance.now() - Il < Nl ? n() : Mr = setTimeout(n, Pl);
  }
  function rs() {
    clearTimeout(Mr), clearTimeout(Ui), La.hidden || (Il = performance.now()), La.hidden = !0, ns = null;
  }
  o.addEventListener("pointerover", (t) => {
    if (t.pointerType === "touch") return;
    if (La.contains(t.target)) {
      clearTimeout(Ui);
      return;
    }
    const e = is(t.target);
    if (e && Nt.names === "scroll" && e.matches(Sr)) {
      Zs(e);
      return;
    }
    if (e) {
      e !== ns ? Yi(e, e.textContent.trim()) : clearTimeout(Ui);
      return;
    }
    clearTimeout(Mr), clearTimeout(Ui), Ui = setTimeout(rs, 120);
  }), o.addEventListener("focusin", (t) => {
    var r;
    const e = t.target;
    if (!((r = e.matches) != null && r.call(e, ":focus-visible"))) return;
    let n = [e, ...e.querySelectorAll("*")].filter(os);
    Nt.names === "scroll" && (n.filter((d) => d.matches(Sr)).forEach(Zs), n = n.filter((d) => !d.matches(Sr))), n.length && Yi(e, n.map((d) => d.textContent.trim()).join(" · "));
  }), o.addEventListener("focusout", (t) => {
    t.target === ns && rs();
  }), o.addEventListener("keydown", (t) => {
    t.key === "Escape" && !La.hidden && (t.stopPropagation(), rs());
  }, !0), window.addEventListener("scroll", () => {
    (!La.hidden || Mr) && rs();
  }, { capture: !0, passive: !0 });
  const Sr = ".activityRowName,.activityRowMeta", Cr = /* @__PURE__ */ new WeakSet();
  function Zs(t) {
    var n;
    if (Nt.names !== "scroll" || Cr.has(t) || t.closest("[inert]") || (n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    Cr.add(t);
    const e = () => Promise.all([t.closest(".workoutPanel"), t.closest(".panelExpanded")].filter(Boolean).flatMap((r) => r.getAnimations()).map((r) => r.finished.catch(() => {
    })));
    setTimeout(async () => {
      await e();
      const r = t.isConnected && !t.closest("[inert]") ? t.scrollWidth - t.clientWidth : 0;
      if (r < 2) {
        Cr.delete(t);
        return;
      }
      const d = r / 30 * 1e3, u = d + 1e3 + d;
      t.style.textOverflow = "clip";
      const p = t.animate([
        { textIndent: "0px", offset: 0, easing: "ease-in-out" },
        { textIndent: -r + "px", offset: d / u },
        { textIndent: -r + "px", offset: (1e3 + d) / u, easing: "ease-in-out" },
        { textIndent: "0px", offset: 1 }
      ], { duration: u });
      p.onfinish = p.oncancel = () => {
        t.style.textOverflow = "", Cr.delete(t);
      };
    }, 600);
  }
  const Hl = new IntersectionObserver((t) => t.forEach((e) => {
    e.isIntersecting && !e.target.closest("[inert]") && (Hl.unobserve(e.target), Zs(e.target));
  }), { threshold: 1 });
  let Ks = !1;
  new MutationObserver(() => {
    Ks || Nt.names !== "scroll" || (Ks = !0, setTimeout(() => {
      Ks = !1, o.querySelectorAll(Sr).forEach((t) => {
        !t.dataset.glided && os(t) && (t.dataset.glided = "1", Hl.observe(t));
      });
    }, 300));
  }).observe(o, { childList: !0, subtree: !0 });
  const co = (t) => () => {
    qt = t, Ln(), Ae(), ua(), ia();
  };
  function hi(t) {
    const e = () => D.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]');
    setTimeout(() => {
      var p;
      const n = e();
      if (!n) return;
      const r = (p = window.matchMedia) == null ? void 0 : p.call(window, "(prefers-reduced-motion: reduce)").matches, d = n.getBoundingClientRect();
      (d.top < 0 || d.bottom > window.innerHeight) && n.scrollIntoView({ behavior: r ? "auto" : "smooth", block: "center" });
      const u = (g) => "0 0 0 4px color-mix(in srgb,var(--primary) " + g + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + g + "%,transparent)";
      n.animate([{ boxShadow: u(55) }, { boxShadow: u(0) }], { duration: 1500, easing: r ? "steps(1, end)" : "ease-out" });
    }, Ro(t) ? 260 : 0);
  }
  function Ro(t) {
    const e = Lo.get(t);
    if (!e || !he.classList.contains("open") || gn) return !1;
    const { n, w: r } = Eo(D.clientWidth), d = he.getBoundingClientRect().left - D.getBoundingClientRect().left, u = (m) => m * (r + be) + e.cols * r + (e.cols - 1) * be <= d;
    if (u(e.col)) return !1;
    const p = /* @__PURE__ */ new Set();
    Lo.forEach((m, M) => {
      if (M !== t) for (let T = m.row; T < m.row + m.rows; T++) for (let A = m.col; A < m.col + m.cols; A++) p.add(A + "," + T);
    });
    const g = (m, M) => {
      for (let T = M; T < M + e.rows; T++) for (let A = m; A < m + e.cols; A++) if (p.has(A + "," + T)) return !1;
      return !0;
    };
    for (let m = 0; m <= wr; m++) for (let M = 0; M + e.cols <= n && u(M); M++)
      if (g(M, m))
        return Pa(Te(), { ...pi(), [t]: { col: M, row: m } }), ua(), !0;
    return !1;
  }
  const Fl = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, he = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  he.setAttribute("aria-label", "Edit the dashboard"), he.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection" data-tray="weather"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd" type="button" data-tile-add aria-expanded="false">Add tile</button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection"><div class="sectionLabel">Areas</div><p class="tfTrayNote">Which areas the Areas card shows, and one area on its own instead.</p><button class="pill tfTrayAdd" type="button" data-area-choose aria-expanded="false">Choose areas</button><button class="pill tfTrayAdd" type="button" data-room-add aria-expanded="false">Add area</button><ul class="tfTrayList" data-tray="roompick" hidden></ul></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd" type="button" data-fav-add aria-expanded="false">Add favourite</button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', b.appendChild(he);
  const Na = Object.assign(document.createElement("div"), { className: "card tfTrayPop" });
  Na.setAttribute("role", "dialog"), Na.setAttribute("aria-label", "Areas"), Na.hidden = !0, b.appendChild(Na);
  const Po = () => he.querySelector("[data-area-choose]");
  function Rd() {
    const t = new Set(Tt().map((e) => e.id));
    Na.innerHTML = '<div class="tfTrayPopTitle">Areas</div>' + Pt.map((e) => '<div class="tfTrayPopRow"><button class="switch' + (t.has(e.id) ? " on" : "") + '" type="button" role="switch" aria-checked="' + t.has(e.id) + '" aria-label="' + rt(e.name) + '" data-area-on="' + rt(e.id) + '"></button><span class="tfIcon"><span class="tfAreaGlyph"' + Ze("area:" + e.id, e.icon || "mdi:texture-box", e.name) + '></span></span><span class="tfTrayPopName">' + rt(e.name) + "</span></div>").join(""), Bn(Na);
  }
  function No() {
    var t;
    Na.hidden || (Na.hidden = !0, (t = Po()) == null || t.setAttribute("aria-expanded", "false"));
  }
  function Pd() {
    if (!Na.hidden) {
      No();
      return;
    }
    Rd(), Na.hidden = !1, Po().setAttribute("aria-expanded", "true");
    const t = Po().getBoundingClientRect();
    Na.style.top = Math.max(16, Math.min(t.top - 12, innerHeight - Na.offsetHeight - 16)) + "px";
  }
  Na.addEventListener("click", (t) => {
    var d;
    const e = t.target.closest("[data-area-on]");
    if (!e) return;
    const n = !e.classList.contains("on"), r = new Set(((d = qt.dash) == null ? void 0 : d.areasOff) || []);
    n ? r.delete(e.dataset.areaOn) : r.add(e.dataset.areaOn), yr({ ...Te(), areasOff: [...r] }), e.classList.toggle("on", n), e.setAttribute("aria-checked", String(n)), Ae();
  }), Na.addEventListener("keydown", (t) => {
    var e;
    t.key === "Escape" && (t.stopPropagation(), No(), (e = Po()) == null || e.focus());
  });
  let gn = !1, Ia = !1, Qa = !1, mi = !1, ha = null, Ha = !1;
  const Io = {}, aa = (t, e) => {
    if (Io[t] === e) return;
    Io[t] = e;
    const n = he.querySelector('[data-tray="' + t + '"]');
    n.innerHTML = e, Bn(n);
  }, $s = (t, e) => '<span class="tfTrayName"><span class="activityRowName">' + rt(At(t)) + '</span><span class="activityRowMeta">' + rt(e) + "</span></span>", Ol = (t, e, n) => '<li class="tfTrayFav' + (e ? " off" : "") + '" data-tray-fav="' + rt(t) + '"><span class="tfTrayGrip" aria-hidden="true">' + oc + '</span><span class="tfIcon"' + Ze(t, Ua(t)) + "></span>" + $s(t, e ? "Hidden" + (Kt.get(t) ? " · " + Kt.get(t) : "") : Kt.get(t) || Se(t)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + rt(t) + '" aria-pressed="' + !e + '" aria-label="' + (e ? "Show " : "Hide ") + rt(At(t)) + ' on the dashboard">' + (e ? gp : om) + "</button>" + (n ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + rt(t) + '" aria-label="Remove ' + rt(At(t)) + ' from favourites">' + vp + "</button>" : "<span></span>") + "</li>";
  function ss(t, e, n, r) {
    const d = t.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(S).filter((p) => e(p) && !n.has(p) && S[p].state !== "unavailable").filter((p) => {
      const g = (At(p) + " " + (Kt.get(p) || "") + " " + p).toLowerCase();
      return d.every((m) => g.includes(m));
    }).sort((p, g) => (Kt.get(p) || "~").localeCompare(Kt.get(g) || "~") || At(p).localeCompare(At(g))).slice(0, 40).map((p) => '<li><button class="tfTrayPickItem" type="button" ' + r + '="' + rt(p) + '"><span class="tfIcon"' + Ze(p, Ua(p)) + "></span>" + $s(p, Kt.get(p) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  function ia() {
    const t = Ra && b.classList.contains("tfBoard");
    if (he.classList.toggle("open", t), he.classList.toggle("tucked", t && gn), he.toggleAttribute("inert", !t), t || (Ha = !1), (!t || !b.classList.contains("tfEditing")) && No(), Vl(), !t) return;
    const e = he.querySelector("[data-tray-tuck]");
    e.innerHTML = gn ? op : bp, e.setAttribute("aria-expanded", String(!gn)), e.setAttribute("aria-label", gn ? "Show the edit tray" : "Tuck the edit tray away");
    const n = Te().hidden.filter((M) => di().some((T) => T.key === M)), r = (M, T) => '<button class="tfTrayCard" type="button" data-tray-card="' + rt(M) + '" aria-label="' + rt(Oe(M)) + ": drag it onto the board, or press to " + T + '"><span class="tfTrayGrip" aria-hidden="true">' + oc + "</span>" + rt(Oe(M)) + "</button>", d = n.filter((M) => !An.includes(M)), u = An.filter((M) => n.includes(M));
    aa("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (d.length ? '<div class="tfTrayCards">' + d.map((M) => r(M, "put it back")).join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), aa("weather", '<div class="sectionLabel">Weather</div>' + (u.length ? `<p class="tfTrayNote">The Weather page's widgets. Drag one onto the board, or press to add it.</p><div class="tfTrayCards">` + u.map((M) => r(M, "add it")).join("") + "</div>" : '<p class="tfTrayNote">Every weather widget is on the board.</p>')), aa("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (Te().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + Ha + '">' + (Ha ? "Hide the phone" : "Show the phone") + "</button>");
    const p = new Set(qt.favHidden || []), g = _t(), m = [...g, ...[...p].filter((M) => !g.includes(M) && S[M])];
    if (aa("favs", m.map((M) => Ol(M, p.has(M), g.includes(M))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), he.querySelector('[data-pick="tiles"]').hidden = !Qa, he.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(Qa)), Qa && aa("tilepick", ss(he.querySelector("[data-tile-search]").value, (M) => xl.includes(M.split(".")[0]), new Set(Le()), "data-tile-pick")), he.querySelector('[data-tray="roompick"]').hidden = !mi, he.querySelector("[data-room-add]").setAttribute("aria-expanded", String(mi)), mi) {
      const M = new Set(Le());
      aa("roompick", Pt.filter((T) => !M.has("room:" + T.id)).map((T) => '<li><button class="tfTrayPickItem" type="button" data-room-pick="' + rt(T.id) + '"><span class="tfIcon"><span class="tfAreaGlyph"' + Ze("area:" + T.id, T.icon || "mdi:texture-box", T.name) + '></span></span><span class="tfTrayName"><span class="activityRowName">' + rt(T.name) + "</span></span></button></li>").join("") || '<li class="tfTrayNote">Every area is on the board.</li>');
    }
    he.querySelector('[data-pick="favs"]').hidden = !Ia, he.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(Ia)), Ia && aa("pick", ss(he.querySelector("[data-fav-search]").value, (M) => Fl.test(M), new Set(_t()), "data-fav-pick")), aa("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (ga() ? " on" : "") + '" type="button" role="switch" aria-checked="' + ga() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const Ho = (t) => {
    qt = { ...qt, ...t }, Ln(), Ae(), ia();
  };
  function ls(t, e) {
    const n = qt, r = new Set(qt.favHidden || []);
    e ? r.delete(t) : r.add(t), Ho({ favHidden: [...r] }), e ? Ja(At(t) + " put back") : Ja(At(t) + " hidden", co(n));
  }
  const ds = (t) => {
    const e = qt;
    Ho({ favourites: _t().filter((n) => n !== t), favHidden: (qt.favHidden || []).filter((n) => n !== t) }), Ja(At(t) + " removed from favourites", co(e));
  }, Xs = (t) => {
    Ho({ favourites: [..._t().filter((e) => e !== t), t], favHidden: (qt.favHidden || []).filter((e) => e !== t) }), Ja(At(t) + " added to favourites");
  };
  he.addEventListener("click", (t) => {
    var n;
    const e = t.target.closest("button");
    e && (e.hasAttribute("data-tray-done") ? Do(!1) : e.hasAttribute("data-tray-tuck") ? (gn = !gn, ia()) : e.hasAttribute("data-phone-toggle") ? (Ha = !Ha, ia(), Ha && ((n = we.querySelector("[data-phone-key]")) == null || n.focus({ preventScroll: !0 }))) : e.dataset.trayCard ? t.detail === 0 && (Bo(e.dataset.trayCard), ia()) : e.dataset.favEye ? ls(e.dataset.favEye, e.getAttribute("aria-pressed") !== "true") : e.dataset.favRemove ? ds(e.dataset.favRemove) : e.hasAttribute("data-fav-add") ? (Ia = !Ia, ia(), Ia && he.querySelector("[data-fav-search]").focus({ preventScroll: !0 })) : e.dataset.favPick ? Xs(e.dataset.favPick) : e.hasAttribute("data-tile-add") ? (Qa = !Qa, ia(), Qa && he.querySelector("[data-tile-search]").focus({ preventScroll: !0 })) : e.dataset.tilePick ? kr(e.dataset.tilePick) : e.hasAttribute("data-area-choose") ? Pd() : e.hasAttribute("data-room-add") ? (mi = !mi, ia()) : e.dataset.roomPick ? kr("room:" + e.dataset.roomPick) : e.hasAttribute("data-fav-suggest") && Ho({ suggest: !ga() }));
  }), he.addEventListener("input", (t) => {
    t.target.matches("[data-fav-search],[data-tile-search]") && ia();
  }), he.addEventListener("keydown", (t) => {
    var n, r;
    const e = !!((r = (n = t.target).closest) != null && r.call(n, '[data-pick="tiles"],[data-tile-add]'));
    t.key !== "Escape" || !(e ? Qa : Ia) || (t.stopPropagation(), e ? Qa = !1 : Ia = !1, ia(), he.querySelector(e ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function gi(t, e, n, r) {
    t.preventDefault();
    const d = t.clientX, u = t.clientY;
    let p = null, g = 0;
    const m = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), M = (A) => {
      if (!p) {
        if (Math.hypot(A.clientX - d, A.clientY - u) < 4) return;
        p = e.cloneNode(!0), p.classList.add("tfTrayGhost"), p.style.width = e.offsetWidth + "px", b.appendChild(p);
      }
      p.style.transform = "translate(" + (A.clientX - 24) + "px," + (A.clientY - 24) + "px)";
      const H = !gn && A.clientX >= he.getBoundingClientRect().left;
      if (n === "card") {
        const z = D.getBoundingClientRect(), { w: G } = Eo(D.clientWidth);
        se = !H && A.clientX >= z.left && A.clientX <= z.right && A.clientY >= z.top + Ao ? { key: r, col: Math.max(0, Math.floor((A.clientX - z.left) / (G + be))), row: Math.max(0, Math.floor((A.clientY - z.top - Ao) / yn)), fromTray: !0 } : null, g || (g = requestAnimationFrame(() => {
          g = 0, ua();
        }));
        return;
      }
      const I = D.querySelector(".tfDash-favs"), U = I == null ? void 0 : I.getBoundingClientRect();
      if (ha = null, U && !H && A.clientX >= U.left && A.clientX <= U.right && A.clientY >= U.top && A.clientY <= U.bottom) {
        let z = 1 / 0;
        I.querySelectorAll('[data-k^="fav:"]').forEach((G, N) => {
          const ct = G.getBoundingClientRect(), $ = Math.hypot(A.clientX - (ct.left + ct.width / 2), A.clientY - (ct.top + ct.height / 2));
          $ < z && (z = $, ha = { i: N, r: ct, after: A.clientX > ct.left + ct.width / 2 });
        }), ha || (ha = { i: 0, r: null, after: !1 });
      }
      ha != null && ha.r ? (m.isConnected || b.appendChild(m), Object.assign(m.style, { left: (ha.after ? ha.r.right : ha.r.left) - 2 + "px", top: ha.r.top + 8 + "px", height: ha.r.height - 16 + "px" })) : m.remove();
    }, T = () => {
      if (window.removeEventListener("pointermove", M), window.removeEventListener("pointerup", T), window.removeEventListener("pointercancel", T), cancelAnimationFrame(g), p == null || p.remove(), m.remove(), n === "card") {
        if (!p) Bo(r);
        else if (se != null && se.fromTray) {
          ua();
          const z = Oe(r) + ui(r), G = Te(), N = pi();
          se = null, Pa({ ...G, hidden: G.hidden.filter((ct) => ct !== r) }, N), Ja(z);
        }
        se = null, ua(), Ae(), ia();
        return;
      }
      if (!ha) return;
      const A = new Set(qt.favHidden || []);
      A.delete(r);
      const H = _t().filter((z) => z !== r), I = H.filter((z) => !A.has(z)), U = I[Math.min(ha.i + (ha.after ? 1 : 0), I.length)];
      H.splice(U ? H.indexOf(U) : H.length, 0, r), ha = null, Ho({ favourites: H, favHidden: [...A] }), Ja(At(r) + " put back");
    };
    window.addEventListener("pointermove", M), window.addEventListener("pointerup", T), window.addEventListener("pointercancel", T);
  }
  const Js = {
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
  }, ql = 136, Qs = 288, Wl = 0.8, tn = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, we = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  we.setAttribute("aria-label", "Phone order"), we.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + vp + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', b.appendChild(we);
  let Tr = "";
  function Vl() {
    var g;
    const t = Ha && Ra && b.classList.contains("tfBoard") && !gn;
    if (we.classList.toggle("open", t), we.toggleAttribute("inert", !t), !t) return;
    const e = ts().filter((m) => !Te().hidden.includes(m.key)), n = e.length, r = (m) => Math.round(m * Wl * 10) / 10 + "px", d = (m, M) => {
      const T = m.el.classList.contains("tfDac"), A = m.tile ? T ? Qs : ql : Js[m.key] || ql;
      return '<button class="tfPhoneBlock' + (m.tile ? " tile" : "") + '" type="button" data-phone-key="' + rt(m.key) + '" style="min-height:' + r(A) + '" aria-label="' + rt(Oe(m.key) + ", " + (M + 1) + " of " + n + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (m.tile ? Ze(m.key, Ua(m.key)) : Ze(m.key, tn[m.key])) + '></span><span class="tfPhoneName">' + rt(Oe(m.key)) + "</span></button>";
    }, u = '<div class="tfPhoneTitle">' + rt(((g = D.querySelector(".tfDashTitle")) == null ? void 0 : g.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + r(Js.sums) + '"><span class="tfPhoneName">' + rt(Oe("sums")) + "</span></div>" + e.map(d).join("");
    if (we.querySelector('[data-phone="note"]').innerHTML = Te().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", u === Tr) return;
    Tr = u;
    const p = we.querySelector('[data-phone="list"]');
    p.innerHTML = u, Bn(p);
  }
  function tl(t, e) {
    var n;
    yr({ ...Te(), phone: t }), ia(), e && ((n = we.querySelector('[data-phone-key="' + CSS.escape(e) + '"]')) == null || n.focus({ preventScroll: !0 }));
  }
  const el = () => [...we.querySelectorAll("[data-phone-key]")].map((t) => t.dataset.phoneKey);
  function jl(t, e) {
    t.preventDefault();
    const n = e.parentElement, r = we.querySelector(".tfPhoneScreen"), d = el().join();
    e.classList.add("moving");
    const u = (g) => {
      const m = r.getBoundingClientRect();
      g.clientY > m.bottom - 40 ? r.scrollTop += 12 : g.clientY < m.top + 40 && (r.scrollTop -= 12);
      const M = [...n.querySelectorAll("[data-phone-key]")].find((H) => {
        const I = H.getBoundingClientRect();
        return H !== e && g.clientX >= I.left && g.clientX <= I.right && g.clientY >= I.top && g.clientY <= I.bottom;
      });
      if (!M) return;
      const T = M.getBoundingClientRect(), A = M.classList.contains("tile") ? g.clientX < T.left + T.width / 2 : g.clientY < T.top + T.height / 2;
      n.insertBefore(e, A ? M : M.nextSibling);
    }, p = () => {
      window.removeEventListener("pointermove", u), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p), e.classList.remove("moving");
      const g = el();
      Tr = "", g.join() !== d ? tl(g) : Vl();
    };
    window.addEventListener("pointermove", u), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  }
  we.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-phone-key]");
    e && t.button <= 0 && jl(t, e);
  }), we.addEventListener("click", (t) => {
    var n;
    const e = t.target.closest("button");
    if (e != null && e.hasAttribute("data-phone-close"))
      Ha = !1, ia(), (n = he.querySelector("[data-phone-toggle]")) == null || n.focus({ preventScroll: !0 });
    else if (e != null && e.hasAttribute("data-phone-reset")) {
      const { phone: r, ...d } = Te();
      yr(d), ia();
    }
  }), we.addEventListener("keydown", (t) => {
    var p, g, m, M;
    if (t.key === "Escape") {
      t.stopPropagation(), Ha = !1, ia(), (p = he.querySelector("[data-phone-toggle]")) == null || p.focus({ preventScroll: !0 });
      return;
    }
    const e = (M = (m = (g = t.target).closest) == null ? void 0 : m.call(g, "[data-phone-key]")) == null ? void 0 : M.dataset.phoneKey, n = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[t.key];
    if (!e || !n) return;
    t.preventDefault();
    const r = el(), d = r.indexOf(e), u = d + n;
    u < 0 || u >= r.length || ([r[d], r[u]] = [r[u], r[d]], tl(r, e));
  });
  function zl(t, e) {
    t.preventDefault();
    const n = e.parentElement;
    e.classList.add("moving");
    const r = (u) => {
      const p = [...n.children].find((g) => {
        const m = g.getBoundingClientRect();
        return g !== e && u.clientY >= m.top && u.clientY <= m.bottom;
      });
      if (p) {
        const g = p.getBoundingClientRect();
        n.insertBefore(e, u.clientY < g.top + g.height / 2 ? p : p.nextSibling);
      }
    }, d = () => {
      window.removeEventListener("pointermove", r), window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", d), e.classList.remove("moving");
      const u = new Set(_t());
      Io.favs = null, Ho({ favourites: [...n.children].map((p) => p.dataset.trayFav).filter((p) => u.has(p)) });
    };
    window.addEventListener("pointermove", r), window.addEventListener("pointerup", d), window.addEventListener("pointercancel", d);
  }
  he.addEventListener("pointerdown", (t) => {
    if (t.button > 0) return;
    const e = t.target.closest("[data-tray-card]"), n = t.target.closest(".tfTrayFav");
    e ? gi(t, e, "card", e.dataset.trayCard) : n && t.target.closest(".tfTrayGrip") ? zl(t, n) : n != null && n.classList.contains("off") && !t.target.closest("button") && gi(t, n, "fav", n.dataset.trayFav);
  });
  function Gl(t) {
    if (!Ra || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const e = t.target.closest(".tfBoardItem"), n = e && di().find((yt) => yt.el === e);
    if (!n || qn.includes(n.key)) return;
    const r = Lo.get(n.key), { w: d } = Eo(D.clientWidth);
    if (!r) return;
    t.preventDefault(), Ta();
    const u = t.clientX, p = t.clientY;
    let g = !1, m = 0;
    const M = $e.drag, T = Va();
    let A = 0, H = 0, I = 0, U = 0, z = 0, G = 0, N = T || M.stick === 0, ct = 0;
    const $ = (yt, Et, Gt, Be) => {
      e.style.transform = "translate(" + I.toFixed(2) + "px," + U.toFixed(2) + "px) rotate(" + yt.toFixed(2) + "deg) rotate(" + Et + "rad) scale(" + Gt.toFixed(4) + "," + Be.toFixed(4) + ") rotate(" + -Et + "rad)";
    }, Mt = () => {
      if (ct = requestAnimationFrame(Mt), T) {
        I = A, U = H, $(0, 0, 1, 1);
        return;
      }
      if (!N) {
        const wa = Math.min(Math.hypot(A, H) / Math.max(1, M.stick), 1);
        I = A * 0.35, U = H * 0.35, $(0, Math.atan2(H, A), 1 + 0.155 * wa, 1 - 0.1 * wa);
        return;
      }
      z = Rc(z, A - I, M.pull / 100, M.keep / 100), G = Rc(G, H - U, M.pull / 100, M.keep / 100), I += z, U += G;
      const yt = Math.hypot(z, G), Et = Math.min(yt / 48, 1), Gt = Math.max(-5, Math.min(M.tilt, z * 0.32)), Be = 1 + M.lift / 100;
      $(Gt, Math.atan2(G, z), Be * (1 + 0.1 * Et), Be * (1 - 0.063 * Et));
    }, ne = (yt) => {
      if (A = yt.clientX - u, H = yt.clientY - p, !g) {
        if (Math.hypot(A, H) < 4) return;
        g = !0, se = { key: n.key, col: r.col, row: r.row }, e.classList.add("tfDragging", "mvDrag"), ct = requestAnimationFrame(Mt);
      }
      !N && Math.hypot(A, H) > M.stick && (N = !0, z = A * 0.085, G = H * 0.085), se.col = Math.round((r.x + A) / (d + be)), se.row = Math.round((r.y + H - Ao) / yn), m || (m = requestAnimationFrame(() => {
        m = 0, ua();
      }));
    }, Y = () => {
      var fo;
      if (window.removeEventListener("pointermove", ne), window.removeEventListener("pointerup", Y), window.removeEventListener("pointercancel", Y), !g) return;
      const yt = (ho) => {
        ho.preventDefault(), ho.stopImmediatePropagation();
      };
      window.addEventListener("click", yt, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", yt, { capture: !0 }), 300), cancelAnimationFrame(m), cancelAnimationFrame(ct);
      const Et = e.getBoundingClientRect(), Gt = n.key;
      e.style.transition = "none", ua(), e.classList.remove("tfDragging", "mvDrag"), e.style.transform = "", se = null, Pa(Te(), pi()), ua(), Ae();
      const Be = (fo = di().find((ho) => ho.key === Gt)) == null ? void 0 : fo.el;
      if (requestAnimationFrame(() => {
        e.style.transition = "", Be && (Be.style.transition = "");
      }), !Be || T) return;
      Be.style.transition = "none";
      const wa = Be.getBoundingClientRect(), As = Et.left + Et.width / 2 - (wa.left + wa.width / 2), Es = Et.top + Et.height / 2 - (wa.top + wa.height / 2);
      Be.style.zIndex = "20", Be.animate([{ transform: "translate(" + As + "px," + Es + "px) scale(" + (1 + M.lift / 100) + ")" }, { transform: "none" }], { duration: M.slide, easing: Fe.land }).finished.then(() => {
        Be.style.zIndex = "", Nf(Be);
      }, () => {
        Be.style.zIndex = "";
      });
    };
    window.addEventListener("pointermove", ne), window.addEventListener("pointerup", Y), window.addEventListener("pointercancel", Y);
  }
  function al(t = !1) {
    const e = D == null ? void 0 : D.querySelector(".tfDashGraph svg[data-graph]");
    if (!(e != null && e.clientWidth)) return;
    const n = e.dataset.graph + "@" + e.clientWidth + "x" + e.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (e.dataset.drawn === n) return;
    const r = !e.dataset.drawn;
    e.dataset.drawn = n;
    const d = Gr.find((u) => u.id === e.dataset.graph);
    d ? Ur(e, d).then(() => {
      (t || r) && vr(e);
    }) : _r(e.dataset.graph, e).then(() => {
      t && ri(e);
    });
  }
  function Fo() {
    var m, M, T;
    ee = ja.model(i(), { madeUp: !_ }), ma(), S = ee.states, S[(m = qt.sources) == null ? void 0 : m.grid] && (ee.grid = qt.sources.grid), S[(M = qt.sources) == null ? void 0 : M.alarm] && (ee.security.alarms = [qt.sources.alarm]), Ot.forEach((A, H) => {
      const I = S[H], U = (I == null ? void 0 : I.attributes) || {};
      if (!I || Date.now() - A.at > 2 * 60 * 1e3) {
        Ot.delete(H);
        return;
      }
      A.pos != null && I.state !== "opening" && I.state !== "closing" && Math.abs(fn(H) - A.pos) < 1 && delete A.pos, A.tilt != null && Math.abs((U.current_tilt_position ?? -1) - A.tilt) < 1 && delete A.tilt, A.pos == null && A.tilt == null && Ot.delete(H);
    });
    const t = [];
    let e = 0;
    const n = Yt();
    Pt = n.filter((A) => A.room).map((A) => A.room), Pt.some((A) => A.id === P) || (P = ((T = Pt[0]) == null ? void 0 : T.id) || null);
    const r = W === "weather" ? { key: "weather", name: "Weather" } : W && n.find((A) => A.key === W);
    if (r || (W = null), b.classList.toggle("tfAreaOpen", !!r), b.classList.toggle("tfWeatherOpen", (r == null ? void 0 : r.key) === "weather"), b.classList.toggle("tfDash", !r), Kt = /* @__PURE__ */ new Map(), ee.rooms.forEach((A) => [...A.actions, ...A.plugs, ...A.readings, ...A.openings, ...A.solar, ...A.plants.flatMap((H) => [H.id, ...H.readings])].forEach((H) => Kt.set(H, A.name))), !r) return Oi(t, Hn());
    if (t.push({ key: "areahead", html: Ul(r, ++e) }), r.key === "weather")
      return t.weather = ++e, t;
    const d = r.ids, u = r.room ? r.room.id : r.key, p = r.room;
    p != null && p.solar.length && t.push({ key: "energy:" + p.id, html: _e(p, ++e) }), p && (p.readings.length || p.power != null) && t.push({ key: "readings:" + p.id, html: Rn(p, ++e) }), p == null || p.plants.forEach((A) => t.push({ key: "plant:" + A.id, html: hn(A, ++e) }));
    const g = [...d, ...((p == null ? void 0 : p.plugs) || []).filter((A) => !d.includes(A))];
    return g.length && t.push({ key: "block:" + u, order: ++e, tiles: g.map((A) => ({ key: A, html: Qo(A) })) }), t;
  }
  const Ul = (t, e) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + e + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + op + '</button><div class="settingsTitle">' + rt(t.name) + "</div></div>";
  let Yl = 0, Vn = null;
  const cs = (t) => t === "weather" ? un.wx : t.startsWith("room:") && D.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || D.querySelector(".tfAreas");
  function Zl(t) {
    var e, n;
    W || (Yl = va().scrollTop, Vn = ((e = cs(t)) == null ? void 0 : e.getBoundingClientRect().top) ?? null), W = t, t.startsWith("room:") && (P = t.slice(5)), po(), va().scrollTop = 0, (n = D.querySelector("[data-area-back]")) == null || n.focus({ preventScroll: !0 });
  }
  let jn = null;
  function ps(t, e) {
    if (jn == null || jn(), e == null) return;
    const n = va(), r = performance.now() + 1500, d = ["wheel", "touchstart", "pointerdown", "keydown"];
    let u = 0;
    const p = () => {
      cancelAnimationFrame(u), d.forEach((m) => window.removeEventListener(m, p, !0)), jn = null;
    }, g = () => {
      const m = t();
      if (m != null && m.isConnected) {
        const M = m.getBoundingClientRect().top - e;
        Math.abs(M) > 0.5 && (n.scrollTop += M);
      }
      performance.now() < r ? u = requestAnimationFrame(g) : p();
    };
    d.forEach((m) => window.addEventListener(m, p, { capture: !0, passive: !0 })), jn = p, g();
  }
  function us() {
    var n;
    const t = W;
    W = null, po(), va().scrollTop = Yl, ps(() => cs(t), Vn);
    const e = t.startsWith("room:") ? D.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || D.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? un.wx.querySelector(".wbOpenPage") : D.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (n = (e == null ? void 0 : e.querySelector("[data-go]")) || e) == null || n.focus({ preventScroll: !0 });
  }
  const nl = (t) => t.wrap ? t.wrap(t.tiles.map((e) => e.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + rt(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((e) => e.html).join("") + "</div></div>", Kl = (t) => t.map((e) => e.key + (e.tiles ? "(" + e.tiles.map((n) => n.key).join(",") + ")" : "")).join(";");
  function va() {
    for (let t = b.parentElement || b.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const e = getComputedStyle(t).overflowY;
      if ((e === "auto" || e === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function ol(t) {
    const e = va(), n = (g) => {
      const m = g.getBoundingClientRect();
      return m.height && m.bottom > 0 && m.top < window.innerHeight;
    }, r = [...D.children, ...D.querySelectorAll(".tfDashTiles > *")].find((g) => !g.matches(".tfDashTiles") && n(g)), d = r == null ? void 0 : r.dataset.k, u = r == null ? void 0 : r.getBoundingClientRect().top;
    t();
    const p = r != null && r.isConnected ? r : d && D.querySelector('[data-k="' + CSS.escape(d) + '"]');
    p != null && p.isConnected && u != null && (e.scrollTop += p.getBoundingClientRect().top - u);
  }
  function po() {
    if (!k || !D) return;
    const t = Fo(), e = (d) => {
      var u;
      return (((u = d.closest("[data-k]")) == null ? void 0 : u.dataset.k) || "") + "|" + d.dataset.iconFor + "|" + (d.dataset.iconName || "");
    }, n = /* @__PURE__ */ new Map();
    D.querySelectorAll("[data-tf] [data-icon-for]").forEach((d) => {
      d.firstElementChild && (n.get(e(d)) || n.set(e(d), []).get(e(d))).push(d.firstElementChild);
    }), D.querySelectorAll("[data-tf]").forEach((d) => d.remove()), _a.clear();
    const r = document.createElement("div");
    r.innerHTML = t.map((d) => d.tiles ? nl(d) : d.html).join(""), t.forEach((d) => d.tiles ? d.tiles.forEach((u) => _a.set(u.key, u.html)) : _a.set(d.key, d.html)), or = Kl(t), r.querySelectorAll("[data-icon-for]").forEach((d) => {
      var p;
      const u = !d.firstElementChild && ((p = n.get(e(d))) == null ? void 0 : p.shift());
      u && d.appendChild(u);
    }), D.append(...r.children), rr(t.weather), Zt(), kn.disconnect(), ua(), Bn(D), Fa(D), Ce(D), K(), E && _r(E.id), Dr(), wi(), pl(), requestAnimationFrame(ot);
  }
  const $l = (t) => {
    var n;
    const e = o.activeElement && t.contains(o.activeElement) ? o.activeElement : null;
    return e && { label: e.getAttribute("aria-label"), act: (n = e.dataset) == null ? void 0 : n.act };
  }, il = (t, e) => {
    var n;
    e && ((n = e.label && t.querySelector('[aria-label="' + CSS.escape(e.label) + '"]') || e.act && t.querySelector('[data-act="' + CSS.escape(e.act) + '"]')) == null || n.focus({ preventScroll: !0 }));
  };
  function fs(t, e) {
    if (!t.querySelector(".tfDacPad"))
      return t.replaceWith(e), e;
    const n = t.matches(".tfDac") && t.querySelector(":scope > .tfDacPad"), r = e.querySelector(":scope > .tfDacPad");
    if (n)
      return (r == null ? void 0 : r.dataset.dac) !== n.dataset.dac ? (t.replaceWith(e), e) : (t.querySelector(":scope > .tfActionHead").replaceWith(e.querySelector(":scope > .tfActionHead")), t.classList.toggle("on", e.classList.contains("on")), ["data-light", "data-tone"].forEach((p) => e.hasAttribute(p) ? t.setAttribute(p, e.getAttribute(p)) : t.removeAttribute(p)), [...t.style].filter((p) => p.startsWith("--") && !p.startsWith("--tf-")).forEach((p) => t.style.removeProperty(p)), [...e.style].forEach((p) => t.style.setProperty(p, e.style.getPropertyValue(p))), t);
    const d = (p) => {
      var g;
      return ((g = p.dataset) == null ? void 0 : g.iconFor) !== void 0;
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
    const u = [...e.children];
    return [...t.children].forEach((p, g) => fs(p, u[g])), t;
  }
  function Nd(t, e) {
    const n = document.createElement("div");
    n.innerHTML = e;
    const r = $l(t), d = fs(t, n.firstElementChild);
    Bn(d), Fa(d), Ce(d), il(d, r);
  }
  function Ae() {
    !k || !D || se || ol(Xl);
  }
  function Xl() {
    if (!D.querySelector("[data-tf]")) {
      po();
      return;
    }
    const t = Fo();
    if (Kl(t) !== or) {
      po();
      return;
    }
    const e = (n) => [...mt.keys()].some((r) => {
      const d = r.slice(r.indexOf("|") + 1);
      return n === d || n.endsWith(":" + d);
    });
    t.forEach((n) => (n.tiles || [n]).forEach((r) => {
      if (_a.get(r.key) === r.html || e(r.key)) return;
      const d = D.querySelector('[data-k="' + CSS.escape(r.key) + '"]');
      if (d) {
        if (_a.set(r.key, r.html), E && E.key === r.key && d.querySelector(".tfOpen")) {
          d.querySelector(".tfOpen .activityRowMeta").textContent = to(E.id);
          return;
        }
        Nd(d, r.html), E && E.key === r.key && _r(E.id), r.key.startsWith("energy:") && Dr();
      }
    })), wi(), pl(), Nn(), K(), Ee == null || Ee.update(), Ge == null || Ge.forEach((n) => n.update()), b.classList.contains("tfDash") && Gi(), requestAnimationFrame(ot);
  }
  const Zi = {
    light: (t) => [["Brightness", t.brightness != null ? Math.round(t.brightness / 2.55) + "%" : null], ["Colour temperature", t.color_temp_kelvin ? Number(t.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", t.color_mode && de(t.color_mode)]],
    climate: (t) => [["Current temperature", me(t.current_temperature) + " °C"], ["Target", me(t.temperature) + " °C"], ["Action", de(t.hvac_action)]],
    cover: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null], ["Tilt", t.current_tilt_position != null ? t.current_tilt_position + "% open" : null]],
    humidifier: (t) => [["Current humidity", t.current_humidity + "%"], ["Target", t.humidity + "%"], ["Mode", de(t.mode)]],
    media_player: (t) => [["Title", t.media_title], ["Artist", t.media_artist], ["Volume", t.volume_level != null ? Math.round(t.volume_level * 100) + "%" : null], ["Source", t.source]],
    vacuum: (t) => [["Battery", t.battery_level + "%"], ["Fan speed", de(t.fan_speed)], ["Rooms", (t.rooms || []).join(", ") || null]],
    lock: (t) => [["Changed by", t.changed_by]],
    alarm_control_panel: (t) => [["Changed by", t.changed_by]],
    valve: () => [],
    plant: (t) => [["Moisture", t.moisture + "%"], ["Light", Number(t.brightness).toLocaleString() + " lx"], ["Temperature", me(t.temperature) + " °C"], ["Fertility", t.conductivity + " µS/cm"], ["Problems", t.problem === "none" ? "None" : de(t.problem)]],
    weather: (t) => [["Temperature", t.temperature != null ? t.temperature + " " + (t.temperature_unit || "°C") : null], ["Humidity", t.humidity != null ? t.humidity + "%" : null], ["Wind", t.wind_speed != null ? t.wind_speed + " " + (t.wind_speed_unit || "km/h") : null], ["Pressure", t.pressure != null ? t.pressure + " " + (t.pressure_unit || "hPa") : null]]
  }, Lr = (t) => Vo(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function Ar(t, e = {}, n = !1) {
    return '<div class="tfMoreList">' + t.map((r) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + rt(r.name) + '</div><div class="tfMoreTiles' + (n ? " single" : "") + '">' + r.ids.map((d) => xn(d, e)).join("") + "</div></div>").join("") + "</div>";
  }
  const Rt = document.createElement("div");
  Rt.className = "tfMoreBackdrop", Rt.hidden = !0, b.appendChild(Rt);
  const Mn = document.createElement("div");
  Mn.className = "tfMoreBackdrop tfMoreUnder", Mn.hidden = !0, b.insertBefore(Mn, Rt);
  const Ki = (t, e) => {
    for (let n = t; n && n !== Rt; n = n.parentElement) {
      const r = getComputedStyle(n).overflowY;
      if ((r === "auto" || r === "scroll") && n.scrollHeight > n.clientHeight + 1 && (e < 0 ? n.scrollTop > 0 : n.scrollTop + n.clientHeight < n.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let Oo = null;
  Rt.addEventListener("touchstart", (t) => {
    Oo = { x: t.touches[0].clientX, y: t.touches[0].clientY };
  }, { passive: !0 }), Rt.addEventListener("touchmove", (t) => {
    var d, u;
    if (!Oo || t.touches.length > 1 || (u = (d = t.target).closest) != null && u.call(d, "input,textarea,select")) return;
    const e = t.touches[0], n = Oo.x - e.clientX, r = Oo.y - e.clientY;
    Oo = { x: e.clientX, y: e.clientY }, Math.abs(r) >= Math.abs(n) && !Ki(t.target, r) && t.preventDefault();
  }, { passive: !1 }), Rt.addEventListener("wheel", (t) => {
    var e, n;
    Math.abs(t.deltaX) > Math.abs(t.deltaY) && ((n = (e = t.target).closest) != null && n.call(e, "[data-more-pages]")) || Ki(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  const vi = () => window.innerWidth <= 620;
  let Qe = null;
  Rt.addEventListener("pointerdown", (t) => {
    const e = Rt.querySelector(".tfMorePair");
    !vi() || !e || !e.contains(t.target) || !t.isPrimary || Rt._closing || t.target.closest("input,textarea,select,.tfDacPad,[data-cover-art],.tfMoreSide") || (Qe = { x: t.clientX, y: t.clientY, t: performance.now(), dy: 0, v: 0, pair: e, from: t.target, grab: t.target.matches(".tfMore") || !!t.target.closest(".tfMoreHead") });
  }, !0), Rt.addEventListener("pointermove", (t) => {
    if (!Qe || !t.isPrimary) return;
    const e = t.clientY - Qe.y, n = performance.now();
    if (!Qe.on) {
      if (Math.abs(t.clientX - Qe.x) > 8 || e < -8 || !Qe.grab && Ki(Qe.from, -1)) {
        Qe = null;
        return;
      }
      if (e < 8) return;
      Qe.on = !0;
      try {
        Rt.setPointerCapture(t.pointerId);
      } catch {
      }
    }
    Qe.v = (e - Qe.dy) / Math.max(1, n - Qe.t), Qe.dy = e, Qe.t = n, Qe.pair.style.transform = "translateY(" + Math.max(0, e) + "px)";
  });
  const rl = (t) => {
    if (!Qe || !t.isPrimary) return;
    const e = Qe;
    if (Qe = null, !e.on) return;
    const n = (M) => {
      M.preventDefault(), M.stopImmediatePropagation();
    };
    window.addEventListener("click", n, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", n, { capture: !0 }), 300);
    const r = t.type === "pointerup" && (e.dy > 120 || e.v > 0.5), d = "translateY(" + Math.max(0, e.dy) + "px)";
    if (e.pair.style.transform = "", !r || Va()) {
      r ? bs() : e.pair.animate([{ transform: d }, { transform: "none" }], { duration: 320, easing: Fe.spring });
      return;
    }
    const u = B;
    Rt._closing = !0, Rt.style.pointerEvents = "none", Rt.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: Fe.exit, fill: "forwards" });
    const p = e.pair.animate([{ transform: d }, { transform: "translateY(calc(100% + 40px))" }], { duration: 220, easing: Fe.exit, fill: "forwards" });
    let g = !1;
    const m = () => {
      g || (g = !0, Rt._closing = !1, Rt.style.pointerEvents = "", Rt.getAnimations().forEach((M) => M.cancel()), e.pair.getAnimations().forEach((M) => M.cancel()), B === u && bs());
    };
    p.finished.then(m, m), setTimeout(m, 300);
  };
  Rt.addEventListener("pointerup", rl), Rt.addEventListener("pointercancel", rl);
  function hs() {
    const t = Rt.querySelector(".tfMorePair"), e = Rt.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - e.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", hs, { passive: !0 }), k && oe();
  let ba = [];
  const Jl = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function ta(t) {
    const e = (m, M = "") => '<div class="tfMoreHead">' + (B != null && B.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + ec + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + rt(m) + "</div>" + M + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + ip + "</button></div>", n = (m, M) => '<div class="tfMoreNow"><div class="tfMoreState">' + rt(m) + "</div></div>", r = Ar;
    if (t === "favourites") {
      const m = _t(), M = new Set(m), T = [{ name: "Starred", ids: m }, { name: "Home", ids: ee.homeVacuums }, { name: "Security", ids: [...ee.security.alarms, ...ee.security.locks] }, ...ee.rooms.map((A) => ({ name: A.name, ids: [...A.actions, ...A.plugs] }))].map((A, H) => H ? { ...A, ids: A.ids.filter((I) => !M.has(I)) } : A).filter((A) => A.ids.length);
      return [e("Favourites"), n(m.length ? m.length + " starred" : "None starred"), r(T, { star: !0 }, !0)];
    }
    const d = (m, { name: M = "", alert: T = !1, plain: A = !1 } = {}) => {
      const H = A ? [] : m.filter((z) => xl.includes(z.split(".")[0])), I = m.filter((z) => !H.includes(z)), U = (z) => z.startsWith("vacuum.") && ae(z).battery_level != null ? ae(z).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (M ? '<div class="tfMoreGroupName">' + rt(M) + "</div>" : "") + '<div class="tfMoreActions">' + H.map((z) => Qo(z, !0)).join("") + I.map((z) => xn(z, { plain: A, alert: T, say: A ? U(z) : null })).join("") + "</div></div>";
    };
    if (t.startsWith("summary:")) {
      const m = Hn().find((H) => H.key === t.slice(8));
      if (!m) return null;
      const M = m.key === "light" ? (m.groups || []).flatMap((H) => H.ids) : [], T = M.some((H) => {
        var I;
        return ((I = S[H]) == null ? void 0 : I.state) === "on";
      }), A = M.length ? '<button class="primary" type="button" data-acts="' + $o(M.map((H) => ["light", T ? "turn_off" : "turn_on", H])) + '">' + (T ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(m.name), '<div class="tfMoreNowRow">' + n(m.value) + A + "</div>", ...(m.groups || []).map((H) => d(H.ids, { name: H.name === m.name ? "" : H.name, alert: H.alert, plain: m.plain }))];
    }
    if (t.startsWith("group:")) {
      const [, m, M] = t.split(":"), T = ee.rooms.find((I) => I.id === m), A = T && w(T).find((I) => I.key === M);
      if (!A) return null;
      const H = A.acts ? '<button class="primary" type="button" data-acts="' + $o(A.acts) + '">' + (A.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(T.name + " " + A.label.toLowerCase()), '<div class="tfMoreNowRow">' + n(A.value) + H + "</div>", d(y(T, M))];
    }
    const u = t.split(".")[0];
    S[t];
    const p = xl.includes(u) ? io(t) : sl(t), g = (B == null ? void 0 : B.page) || 0;
    return [
      Id(t, p),
      '<div class="tfMorePages" data-more-pages><section class="tfMorePage" aria-label="Control">' + Hd(t) + (u === "plant" ? td(t).join("") : "") + p.sections.filter(Boolean).join("") + '</section><section class="tfMorePage" aria-label="Info">' + Ql(t) + "</section></div>",
      // the pages' icons in place of their dots (Matt, 12 Nov): Control's sliders and Info's (i), a small segmented pair
      '<div class="tfMoreDots tfMorePageIcons" role="tablist" aria-label="Pages">' + [["Control", im], ["Info", rm]].map(([m, M], T) => '<button type="button" role="tab" aria-selected="' + (T === g) + '" aria-label="' + m + '" title="' + m + '" data-more-page="' + T + '"' + (T === g ? "" : ' tabindex="-1"') + ">" + M + "</button>").join("") + "</div>"
    ];
  }
  function Id(t, e, n) {
    var p, g, m, M, T;
    const r = (p = ee.areaOf) == null ? void 0 : p.call(ee, t), d = r && (((g = ee.rooms.find((A) => A.id === r)) == null ? void 0 : g.name) || ((T = (M = (m = i()) == null ? void 0 : m.areas) == null ? void 0 : M[r]) == null ? void 0 : T.name)) || "", u = e.button ? Pn(t, e) : '<div class="tfIcon"' + Ze(t, e.icon) + "></div>";
    return '<div class="tfMoreHead tfMoreTileHead' + (e.on ? " on" : "") + '"' + (e.tone ? ' data-tone="' + e.tone + '"' : "") + go(t) + ">" + (B != null && B.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + ec + "</button>" : "") + u + '<div class="tfName"><span class="activityRowName" id="tfMoreTitle">' + rt(At(t)) + "</span>" + (d ? '<span class="activityRowMeta">' + rt(d) + "</span>" : "") + '</div><button class="tfBack" type="button" data-more-close aria-label="Close">' + ip + "</button></div>";
  }
  const uo = ["lock", "alarm_control_panel", "switch", "input_boolean", "fan", "valve", "media_player", "automation", "script", "scene", "button"];
  function sl(t) {
    var d;
    const e = t.split(".")[0], n = ((d = S[t]) == null ? void 0 : d.state) === "on", r = nc.includes(e) ? { act: ie(e, "toggle", t), label: "Turn " + At(t) + (n ? " off" : " on") } : e === "scene" || e === "script" ? { act: ie(e, "turn_on", t), label: "Run " + At(t) } : null;
    return { sections: [], on: n, button: r, icon: Ua(t) };
  }
  function Hd(t) {
    const e = t.split(".")[0];
    if (uo.includes(e) || e === "light" && !Da(t)) {
      const d = xl.includes(e) ? io(t) : sl(t);
      return d != null && d.button ? '<div class="tfMoreSpace tfMoreSwitch' + (d.on ? " on" : "") + '"' + (d.tone ? ' data-tone="' + d.tone + '"' : "") + go(t) + ">" + Pn(t, d) + "</div>" : "";
    }
    if (e === "cover") return '<div class="tfMoreSpace tfMoreFill"><div data-cover-art="' + rt(t) + '"></div></div>';
    if (e === "light" && Da(t)) return '<div class="tfMoreSpace tfMoreFill"><div class="tfDacPad" data-dac="more:' + rt(t) + '"></div></div>';
    const { big: n, lines: r } = ll(t);
    return '<div class="tfMoreSpace"><div class="tfMoreBig' + (Ca("pos", t) != null ? " live" : "") + '"><span class="tfMoreNum">' + rt(n[0]) + "</span>" + (n[1] ? '<span class="tfMoreUnit">' + rt(n[1]) + "</span>" : "") + '</div><div class="tfMoreFacts">' + r.map(([d, u]) => '<div class="tfMoreFact"><span>' + rt(d) + "</span><span>" + rt(u) + "</span></div>").join("") + "</div></div>";
  }
  function ll(t) {
    var T;
    const e = S[t], n = ae(t), r = t.split(".")[0], d = (((T = Zi[r]) == null ? void 0 : T.call(Zi, n)) || []).filter(([, A]) => A != null && A !== ""), u = (A) => {
      const H = d.findIndex(([I]) => I === A);
      return H < 0 ? null : d.splice(H, 1)[0][1];
    }, p = (A) => {
      const H = String(A).match(/^(-?[\d.,]+)\s*(.*)$/);
      return H ? [H[1], H[2]] : [String(A), ""];
    }, g = () => [de(String(e.state).replace(/_/g, " ")), ""];
    let m;
    r === "light" ? (u("Brightness"), m = e.state === "on" && ra(t) ? [String(za(e)), "%"] : g()) : r === "climate" ? m = p(u("Current temperature") || me(n.current_temperature) + " °C") : r === "cover" ? (u("Position"), m = n.current_position != null ? [String(fn(t)), "%"] : g()) : r === "humidifier" ? m = p(u("Current humidity") || e.state) : r === "vacuum" ? m = p(u("Battery") || e.state) : r === "plant" ? m = p(u("Moisture") || e.state) : ["media_player", "lock", "alarm_control_panel", "valve"].includes(r) ? m = g() : m = p(e.state + (n.unit_of_measurement ? " " + n.unit_of_measurement : ""));
    const M = d.length ? d.slice(0, 4) : [["State", Se(t)]];
    return { big: m, lines: M };
  }
  function Ql(t) {
    var M, T, A, H, I, U, z;
    const e = S[t], n = i(), r = (M = n == null ? void 0 : n.entities) == null ? void 0 : M[t], d = r != null && r.device_id ? (T = n == null ? void 0 : n.devices) == null ? void 0 : T[r.device_id] : null, u = '<div class="tfMoreGraph"><div class="tfMoreGroupName">Last 24 hours</div><svg class="tfGraph tfDay" data-day="' + rt(t) + '" role="img" aria-label="' + rt(At(t)) + ', last 24 hours"></svg></div>', p = (A = ee.areaOf) == null ? void 0 : A.call(ee, t), g = p && (((H = ee.rooms.find((G) => G.id === p)) == null ? void 0 : H.name) || ((U = (I = n == null ? void 0 : n.areas) == null ? void 0 : I[p]) == null ? void 0 : U.name)) || "", m = [
      ...((z = Zi[t.split(".")[0]]) == null ? void 0 : z.call(Zi, ae(t))) || [],
      ["Changed", e.last_changed && Ir(Date.parse(e.last_changed))],
      ["Area", g],
      ["Device", d && (d.name_by_user || d.name)],
      ["Integration", (r == null ? void 0 : r.platform) && de(r.platform.replace(/_/g, " "))],
      ["Entity", t]
    ].filter(([, G]) => G != null && G !== "");
    return u + '<div class="tfMoreRows">' + m.map(([G, N]) => '<div class="tfMoreRow"><span>' + rt(G) + "</span><span>" + rt(N) + "</span></div>").join("") + "</div>" + Lr(t) + (d ? '<button class="tfDetailsBtn tfMoreLink" type="button" data-path="/config/devices/device/' + rt(r.device_id) + '"><span>Device page</span>' + bp + "</button>" : "");
  }
  const ms = () => "";
  let dl = "";
  function cl(t) {
    var e;
    B && (B.details = t, wi(), (e = Rt.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || e.focus({ preventScroll: !0 }));
  }
  const bi = (t) => {
    const e = S[t], n = fn(t), r = vo(t);
    return { kind: tc(e), name: At(t), text: Se(t), pos: n, target: Math.abs(r - n) > 0.5 ? r : null, moving: e.state === "opening" || e.state === "closing", tilt: $n(t) ?? 100, canSet: re(t, pp) };
  };
  function Fa(t) {
    t.querySelectorAll("[data-cover-art]").forEach((e) => {
      const n = e.dataset.coverArt, r = e.dataset.artKey || "more:" + n;
      let d = zt.get(r);
      d || (d = jh({ onMove: (u) => Ji(n, u), onSet: (u) => {
        Ji(n, u), s("pos", n);
      } }), d.coverId = n, zt.set(r, d)), e.replaceWith(d.el), d.update(bi(n));
    });
  }
  const $i = (t) => [...zt.values()].filter((e) => e.coverId === t), gs = () => zt.forEach((t) => {
    S[t.coverId] && t.update(bi(t.coverId));
  }), pl = () => {
    zt.forEach((t, e) => {
      t.el.isConnected || (t.destroy(), zt.delete(e));
    }), gs();
  };
  function wi() {
    var u, p;
    if (!B || !(Jl(B.id) || S[B.id])) {
      Rt.hidden = !0;
      return;
    }
    if ([...mt.keys()].some((g) => g.endsWith("|" + B.id))) {
      gs();
      return;
    }
    const t = ta(B.id), e = Rt.querySelector(".tfMore");
    if (!t) {
      Xi();
      return;
    }
    const n = $l(Rt), r = ms(B.id), d = B.frame ? B.frame.wide : B.id.startsWith("summary:") || B.id.startsWith("group:");
    if (Rt.hidden || !e || t.length !== ba.length || e.classList.contains("wide") !== d) {
      const g = Wo ? B.scroll || 0 : !Rt.hidden && e ? e.scrollTop : 0;
      if (Rt.innerHTML = '<div class="tfMorePair' + (Rt.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (d ? " wide" : "") + '"' + (B.frame ? ' style="height:' + B.frame.h + 'px"' : "") + ' tabindex="-1">' + t.join("") + "</section></div>", dl = r, Rt.classList.toggle("wide", d), Rt.hidden = !1, hs(), Fa(Rt), Ce(Rt), Bn(Rt), Rt.querySelectorAll("[data-day]").forEach((m) => ml(m.dataset.day, m, B.at)), xs(Rt), g && (Rt.querySelector(".tfMore").scrollTop = g), Aa(), il(Rt, n), !Rt.contains(o.activeElement)) {
        const m = Rt.querySelector("[data-more-close]");
        (u = m != null && m.offsetParent ? m : Rt.querySelector(".tfMore")) == null || u.focus({ preventScroll: !0 });
      }
    } else {
      if (t.forEach((g, m) => {
        var A, H;
        if (g === ba[m] || g.includes("data-cover-art") || e.children[m].contains((H = (A = o.activeElement) == null ? void 0 : A.matches) != null && H.call(A, "input,select") ? o.activeElement : null) || [...mt.keys()].some((I) => e.children[m].querySelector('[data-drag="' + CSS.escape(I) + '"]'))) return;
        const M = document.createElement("div");
        M.innerHTML = g;
        const T = fs(e.children[m], M.firstElementChild);
        Bn(T), xs(T), Ce(T);
      }), r !== dl) {
        const g = Rt.querySelector(".tfMoreSideBody");
        g && (g.innerHTML = r), dl = r;
      }
      e.querySelectorAll("[data-day]").forEach((g) => {
        g.innerHTML || ml(g.dataset.day, g, B.at);
      }), Aa(), Rt.contains(o.activeElement) || il(Rt, n);
    }
    (p = Rt.querySelector(".tfMorePair")) == null || p.classList.toggle("details", !!(B.details && r)), ba = t, gs();
  }
  function Aa() {
    const t = Rt.querySelector("[data-more-pages]");
    !t || !B || (t.scrollTo({ left: (B.page || 0) * t.clientWidth, behavior: "instant" }), xi(), zn(t));
  }
  function zn(t) {
    const e = t.children[(B == null ? void 0 : B.page) || 0];
    e && (t.style.height = e.scrollHeight + "px");
  }
  function xi() {
    const t = (B == null ? void 0 : B.page) || 0;
    Rt.querySelectorAll("[data-more-page]").forEach((e) => {
      const n = Number(e.dataset.morePage) === t;
      e.setAttribute("aria-selected", String(n)), e.tabIndex = n ? 0 : -1;
    });
  }
  function vn(t, e) {
    var r, d;
    const n = Rt.querySelector("[data-more-pages]");
    !n || !B || (B.page = Math.max(0, Math.min(1, t)), n.scrollTo({ left: B.page * n.clientWidth, behavior: (r = window.matchMedia) != null && r.call(window, "(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }), xi(), zn(n), (d = Rt.querySelector('[data-more-page="' + B.page + '"]')) == null || d.focus({ preventScroll: !0 }));
  }
  let qo = 0;
  Rt.addEventListener("scroll", (t) => {
    var n;
    const e = t.target;
    !((n = e.matches) != null && n.call(e, "[data-more-pages]")) || !B || (clearTimeout(qo), qo = setTimeout(() => {
      if (!B) return;
      const r = Math.round(e.scrollLeft / Math.max(1, e.clientWidth));
      r !== (B.page || 0) && (B.page = r, xi(), zn(e));
    }, 80));
  }, !0), setInterval(() => {
    B && wi();
  }, 15 * 1e3);
  function Er(t, e) {
    var d, u;
    const n = !!(B && e && Rt.contains(e)), r = n && Rt.querySelector(".tfMore");
    if (n && (B.scroll = r.scrollTop), n && !B.under) {
      const p = Rt.querySelector(".tfMorePair"), g = { more: B, parts: ba, opener: e };
      p.classList.add("still"), p.style.transform = "", p.inert = !0, Mn.innerHTML = "", Mn.appendChild(p), Mn.classList.toggle("wide", Rt.classList.contains("wide")), Mn.hidden = !1, Rt.hidden = !0, Rt.innerHTML = "", B = { id: t, opener: e, back: null, frame: null, under: g, at: Number((d = e == null ? void 0 : e.dataset) == null ? void 0 : d.at) || null }, vs();
      return;
    }
    B = { id: t, opener: n ? B.opener : e, back: n ? B : null, frame: n ? B.frame || { wide: r.classList.contains("wide"), h: r.offsetHeight } : null, under: n ? B.under : null, at: Number((u = e == null ? void 0 : e.dataset) == null ? void 0 : u.at) || null }, vs();
  }
  let Wo = !1;
  function vs() {
    ba = [], Wo = !Rt.hidden, zt.forEach((t, e) => {
      e !== B.id && Rt.contains(t.el) && (t.destroy(), zt.delete(e));
    }), wi(), Wo = !1;
  }
  function Xi() {
    if (!B) return;
    const t = B;
    Df(Rt, () => {
      B === t && bs();
    });
  }
  function bs() {
    var r, d, u, p, g, m, M, T;
    const t = B == null ? void 0 : B.opener, e = B == null ? void 0 : B.under;
    B = null, zt.forEach((A, H) => {
      Rt.contains(A.el) && (A.destroy(), zt.delete(H));
    }), ka.forEach((A, H) => {
      H.startsWith("more:") && ka.delete(H);
    }), Rt.hidden = !0, Rt.innerHTML = "";
    const n = { preventScroll: !0 };
    if (e) {
      const A = Mn.firstElementChild;
      B = e.more, ba = e.parts, A && (A.inert = !1, Rt.appendChild(A)), Rt.classList.toggle("wide", Mn.classList.contains("wide")), Mn.hidden = !0, Mn.innerHTML = "", Rt.hidden = !1;
      const H = Rt.querySelector(".tfMore");
      H && (H.scrollTop = B.scroll || 0), wi(), (d = (r = e.opener) != null && r.isConnected ? e.opener : Rt.querySelector("[data-more-close]")) == null || d.focus(n);
      return;
    }
    t != null && t.isConnected ? t.focus(n) : (u = t == null ? void 0 : t.dataset) != null && u.more ? (p = D.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || p.focus(n) : (g = t == null ? void 0 : t.dataset) != null && g.summary ? (m = D.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || m.focus(n) : (M = t == null ? void 0 : t.hasAttribute) != null && M.call(t, "data-favs-edit") && ((T = D.querySelector("[data-favs-edit]")) == null || T.focus(n));
  }
  const ws = { moisture: "moisture", light: "light", brightness: "light", temperature: "temperature", fertility: "fertility", conductivity: "fertility" };
  function td(t) {
    const e = String(ae(t).problem || ""), n = "sensor." + t.split(".")[1] + "_";
    return e === "none" ? [] : e.split(",").map((r) => r.trim().split(" ")).map(([r, d]) => {
      const u = ws[r], p = n + u;
      if (!u || !S[p] || !Br[u]) return "";
      const g = ae(p).unit_of_measurement || "", [m, M] = Br[u], T = d === "low";
      return '<div class="tfMoreGroup tfPlantProblem"><div class="tfMoreGroupName">' + rt(At(p)) + '</div><svg class="tfGraph tfPlantGraph" data-plant-graph="' + rt(p) + '" data-guide="' + (T ? m : M) + '" data-guide-word="' + rt("Wants " + (T ? "" : "up to ") + (T ? m : M).toLocaleString() + (g === "%" ? "%" : g ? " " + g : "") + (T ? " or more" : "")) + '" role="img" aria-label="' + rt(At(p)) + ', last 24 hours"></svg></div>';
    }).filter(Boolean);
  }
  const xs = (t) => t.querySelectorAll("[data-plant-graph]").forEach((e) => _r(e.dataset.plantGraph, e, { guide: Number(e.dataset.guide), guideWord: e.dataset.guideWord }).then(() => ri(e)));
  function ys(t, e, n, r = {}) {
    const d = e.map((G) => G[1]).concat(r.guide != null ? [r.guide] : []), u = r.zero ? 0 : Math.min(...d), p = Math.max(...d), g = Math.max(120, t.clientWidth || 260), m = Math.max(60, t.clientHeight || 130), M = 8, T = m - 20, A = Date.now() - 24 * 3600 * 1e3, H = 24 * 3600 * 1e3, I = (G) => Math.max(0, Math.min(g, (G - A) / H * g)), U = (G) => p === u ? (M + T) / 2 : T - (G - u) / (p - u) * (T - M);
    let z = "M" + I(e[0][0]).toFixed(1) + " " + U(e[0][1]).toFixed(1);
    if (e.length > 2) z = qp(e.map((G) => [I(G[0]), U(G[1])]));
    else for (let G = 1; G < e.length; G++) z += r.smooth ? "L" + I(e[G][0]).toFixed(1) + " " + U(e[G][1]).toFixed(1) : "H" + I(e[G][0]).toFixed(1) + "V" + U(e[G][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + g + " " + m), t.setAttribute("aria-label", n), t.innerHTML = Wp(g, M, T) + '<path d="' + z + "V" + T + "H" + I(e[0][0]).toFixed(1) + 'Z" fill="' + (r.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + z + '" fill="none" stroke="' + (r.colour || "var(--primary)") + '" stroke-width="' + $e.graphs.weight + '" stroke-linejoin="round" stroke-linecap="round"/><text x="0" y="' + (m - 4) + '">24 h ago</text><text x="' + g + '" y="' + (m - 4) + '" text-anchor="end">Now</text>' + (r.guide != null ? '<line class="tfGuide" x1="0" x2="' + g + '" y1="' + U(r.guide).toFixed(1) + '" y2="' + U(r.guide).toFixed(1) + '"/><text class="tfGuideWord" x="' + g + '" y="' + (U(r.guide) < 20 ? U(r.guide) + 14 : U(r.guide) - 5).toFixed(1) + '" text-anchor="end">' + rt(r.guideWord || "") + "</text>" : "");
  }
  const ul = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, fl = (t, e) => {
    const n = t.split(".")[0];
    return ul[n] ? ul[n].includes(e) : n === "alarm_control_panel" || n === "climate" || n === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(e) : e === "on";
  }, hl = (t) => {
    const e = t.split(".")[0], n = ae(t).device_class;
    return e === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[n] || (fd.includes(n) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[e] || "On";
  }, ks = /* @__PURE__ */ new Map();
  let ed = 0;
  async function Ms(t) {
    let e = ks.get(t);
    if (!e || Date.now() - e.at > 60 * 1e3) {
      let d = [];
      try {
        const u = await V({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        d = ((u == null ? void 0 : u[t]) || []).map((p) => [p.lu != null ? p.lu * 1e3 : Date.parse(p.last_updated || p.last_changed), String(p.s ?? p.state)]).filter(([p]) => Number.isFinite(p));
      } catch {
      }
      d.length || (d = (oa || []).filter((u) => u.entity_id === t).map((u) => [u.when * 1e3, String(u.state)])), e = { at: Date.now(), pts: d }, ks.set(t, e);
    }
    const n = S[t], r = e.pts.slice().sort((d, u) => d[0] - u[0]);
    return n && (!r.length || r[r.length - 1][1] !== n.state) && r.push([Date.parse(n.last_changed) || Date.now(), n.state]), r;
  }
  async function ml(t, e, n) {
    const r = await Ms(t);
    if (!e.isConnected) return;
    const d = r.map(([$, Mt]) => [$, Number(Mt)]);
    if (r.length > 1 && d.every(([, $]) => Number.isFinite($))) {
      ys(e, d, At(t) + ", last 24 hours");
      return;
    }
    const u = Date.now(), p = u - 864e5, g = Math.max(200, e.clientWidth || 360), m = 62, M = ($) => Math.max(0, Math.min(g, ($ - p) / 864e5 * g)), T = [];
    let A = null;
    r.forEach(([$, Mt]) => {
      const ne = fl(t, Mt);
      ne && A == null ? A = Math.max($, p) : !ne && A != null && (T.push([A, Math.max($, p)]), A = null);
    }), A != null && T.push([A, u]);
    const H = jr(t) ? "var(--danger)" : t.startsWith("light.") ? "#ffaa00" : "var(--primary)", I = hl(t), U = "tfDayClip" + ++ed, z = T.map(([$, Mt]) => I + (Mt >= u - 1e3 && $ <= p + 1e3 ? " all day" : Mt >= u - 1e3 ? " since " + Ve($) : $ <= p + 1e3 ? " until " + Ve(Mt) : " " + Ve($) + "–" + Ve(Mt)));
    let G = "", N = -1 / 0;
    T.forEach(([$], Mt) => {
      const ne = z[Mt].length * 5.4, Y = Math.min(M($), g - ne);
      Y < N + 8 || (G += '<text x="' + Y.toFixed(1) + '" y="10">' + rt(z[Mt]) + "</text>", N = Y + ne);
    });
    let ct = '<text x="' + g + '" y="' + (m - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach(($) => {
      let Mt = new Date(u).setHours($, 0, 0, 0);
      Mt > u && (Mt -= 864e5), M(Mt) > 8 && M(Mt) < g - 34 && (ct += '<text x="' + M(Mt).toFixed(1) + '" y="' + (m - 2) + '" text-anchor="middle">' + String($).padStart(2, "0") + "</text>");
    }), e.setAttribute("viewBox", "0 0 " + g + " " + m), e.setAttribute("aria-label", At(t) + ", last 24 hours: " + (z.length ? z.join(", ") : "no changes")), e.innerHTML = '<clipPath id="' + U + '"><rect x="0" y="18" width="' + g + '" height="26" rx="8"/></clipPath>' + G + '<rect x="0" y="18" width="' + g + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + U + ')">' + T.map(([$, Mt]) => '<rect x="' + M($).toFixed(1) + '" y="18" width="' + Math.max(2, M(Mt) - M($)).toFixed(1) + '" height="26" fill="' + H + '"/>').join("") + "</g>" + (n && n >= p ? '<line x1="' + M(n).toFixed(1) + '" x2="' + M(n).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + ct;
  }
  function Fd(t) {
    var r;
    const e = Number((r = S[t]) == null ? void 0 : r.state), n = Date.now();
    if (ae(t).state_class === "total_increasing") {
      const d = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), u = Math.max(1, n - d);
      return [...Array(49)].map((p, g) => d + u * g / 48).map((p) => [p, Math.round(e * Math.pow((p - d) / u, 1.3) * 100) / 100]);
    }
    if (Vo(t) && t.endsWith("_moisture")) return [...Array(48)].map((d, u) => [n - (48 - u) * 30 * 60 * 1e3, Math.round((e + 22 * Math.pow(1 - u / 48, 1.2)) * 10) / 10]);
    if (Vo(t) && t.endsWith("_light")) {
      const d = (p) => {
        const g = new Date(p).getHours() + new Date(p).getMinutes() / 60;
        return Math.max(0, Math.sin((g - 6) / 14 * Math.PI));
      }, u = (p) => 0.8 + 0.2 * d(p);
      return [...Array(48)].map((p, g) => n - (48 - g) * 30 * 60 * 1e3).map((p) => [p, Math.round(e * u(p) / u(n))]);
    }
    return [...Array(48)].map((d, u) => [n - (48 - u) * 30 * 60 * 1e3, Math.round(e * (0.96 + 0.04 * Math.sin(u / 6)) * 10) / 10]);
  }
  async function _r(t, e, n = {}) {
    var U, z;
    let r = lt.get(t);
    if (t.endsWith("_solar_power")) r = { at: Date.now(), points: Sc() };
    else if (Vo(t)) r = { at: Date.now(), points: Fd(t) };
    else if (!r || Date.now() - r.at > 5 * 60 * 1e3) {
      try {
        const G = new Date(Date.now() - 864e5).toISOString(), N = await V({ type: "history/history_during_period", start_time: G, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), ct = ((N == null ? void 0 : N[t]) || []).map(($) => [$.lu != null ? $.lu * 1e3 : Date.parse($.last_updated || $.last_changed), Number($.s ?? $.state)]).filter(([$, Mt]) => Number.isFinite($) && Number.isFinite(Mt));
        r = { at: Date.now(), points: ct };
      } catch {
        r = { at: Date.now(), points: [] };
      }
      lt.set(t, r);
    }
    const d = e || D.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!d) return;
    const u = S[t], p = ((U = u == null ? void 0 : u.attributes) == null ? void 0 : U.unit_of_measurement) || "", g = r.points.slice(), m = Number(u == null ? void 0 : u.state);
    if (Number.isFinite(m) && !t.endsWith("_solar_power") && g.push([Date.now(), m]), g.length < 2) {
      d.setAttribute("aria-label", At(t) + ": no history for the last 24 hours"), d.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const M = g.map((G) => G[1]), T = Math.min(...M), A = Math.max(...M), H = (G) => G.toLocaleString(void 0, { maximumFractionDigits: Math.abs(G) >= 100 ? 0 : 1 }), I = ((z = u == null ? void 0 : u.attributes) == null ? void 0 : z.state_class) === "total_increasing";
    ys(d, g, At(t) + ", last 24 hours: " + (I ? "+" + H(M[M.length - 1] - M[0]) : T === A ? H(T) : H(T) + " to " + H(A)) + (p ? " " + p : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power"), ...n });
  }
  function Dr() {
    const t = D == null ? void 0 : D.querySelector("[data-solar]");
    if (!t) return;
    const e = Sc();
    ys(t, e, "Solar, last 24 hours: up to " + me(Math.max(...e.map((n) => n[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function gl(t, e) {
    const n = e.entity_id, r = Ot.get(n) || {}, d = { open_cover: 100, close_cover: 0, set_cover_position: e.position, toggle: fn(n) > 0 ? 0 : 100 }[t], u = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: e.tilt_position }[t];
    d != null && (r.pos = d), u != null && (r.tilt = u), t === "stop_cover" && (delete r.pos, delete r.tilt), t === "stop_cover_tilt" && delete r.tilt, r.at = Date.now(), Ot.set(n, r);
  }
  function Ss(t, e, n) {
    var d;
    const r = n == null ? void 0 : n.entity_id;
    return t !== "light" || typeof r != "string" || !eo[r] || !ra(r) || n.brightness_pct != null || n.brightness != null ? [e, n] : e !== "turn_on" && !(e === "toggle" && ((d = S[r]) == null ? void 0 : d.state) !== "on") ? [e, n] : ["turn_on", { ...n, brightness_pct: eo[r] }];
  }
  function Cs(t, e, n, r) {
    let d = { entity_id: n, ...r || {} };
    return [e, d] = Ss(t, e, d), t === "cover" && gl(e, d), Wt[n] = (Wt[n] || 0) + 1, jo.set(hp, JSON.stringify(Wt)), ja.call(t, e, d) ? Promise.resolve() : Promise.resolve(q(t, e, d));
  }
  function Ts(t) {
    const [e, n, r, d] = t.split("|");
    Cs(e, n, r, d ? JSON.parse(d) : null).catch(() => {
    });
  }
  function Ji(t, e) {
    mt.set("pos|" + t, e), _a.delete(t), ba = ba.map(() => ""), [D, Rt].forEach((r) => r.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((d) => Os(d, e)));
    const n = D.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (n && (n.textContent = Math.round(e) + "%"), (B == null ? void 0 : B.id) === t) {
      const r = Rt.querySelector(".tfMoreState"), d = Rt.querySelector(".tfMoreSub");
      r && (r.textContent = Math.round(e) + "%", r.classList.add("live")), d && (d.textContent = "Currently " + fn(t) + "%");
    }
    $i(t).forEach((r) => r.update(bi(t)));
  }
  const ad = (t, e) => {
    const n = t.shiftKey ? 10 : 1, r = { ArrowUp: e + n, ArrowRight: e + n, ArrowDown: e - n, ArrowLeft: e - n, PageUp: e + 25, PageDown: e - 25, Home: 0, End: 100 }[t.key];
    return r == null ? null : Math.max(0, Math.min(100, Math.round(r)));
  };
  function nd(t, e) {
    var z;
    const n = t.dataset.blocks;
    (z = t.setPointerCapture) == null || z.call(t, e.pointerId);
    const r = (G) => {
      const N = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (G.clientX - N.left) / N.width * 100));
    }, d = r(e), u = e.clientX;
    let p = !1, g = vo(n), m = d, M = 0;
    const T = () => {
      g = Math.abs(m - g) < 0.2 ? m : g + (m - g) * 0.14, Ji(n, g), M = requestAnimationFrame(T);
    }, A = () => {
      p || (p = !0, t.classList.add("fine"), M = requestAnimationFrame(T));
    }, H = setTimeout(A, 350), I = (G) => {
      m = r(G), Math.abs(G.clientX - u) > 6 && (clearTimeout(H), A());
    }, U = () => {
      clearTimeout(H), cancelAnimationFrame(M), t.removeEventListener("pointermove", I), t.removeEventListener("pointerup", U), t.removeEventListener("pointercancel", U), t.classList.remove("fine"), Ji(n, p ? Math.round(g) : (Math.min(3, Math.floor(d / 25)) + 1) * 25), s("pos", n);
    };
    t.addEventListener("pointermove", I), t.addEventListener("pointerup", U), t.addEventListener("pointercancel", U);
  }
  function vl(t) {
    var g, m;
    const [e, n] = t.dataset.open.split("|"), r = t.closest(".tfCard"), d = t.getBoundingClientRect(), u = (g = t.querySelector(".tfIcon")) == null ? void 0 : g.getBoundingClientRect();
    E = { key: e, id: n, h: r ? Math.round(r.getBoundingClientRect().height) : 0, from: d, chip: u }, _a.delete(e), Ae();
    const p = D.querySelector(".tfOpen");
    p && (E.rel = d.top - p.getBoundingClientRect().top), Af(p, d, u), (m = D.querySelector(".tfOpen [data-close]")) == null || m.focus({ preventScroll: !0 });
  }
  function bl(t) {
    var e;
    P = t.dataset.area, D.querySelectorAll(".tfAreaPanel").forEach((n) => {
      var d;
      const r = n === t;
      n.classList.toggle("active", r), n.setAttribute("aria-expanded", String(r)), (d = n.querySelector(".panelExpanded")) == null || d.toggleAttribute("inert", !r);
    }), _a.set("areas", jt(((e = D.querySelector('[data-k="areas"]')) == null ? void 0 : e.style.order) || 1));
  }
  const Ls = {
    bright: { value: (t, e) => Math.round(e * 100), text: (t, e) => e ? e + "%" : "Off", send: (t, e) => e > 0 ? ["light", "turn_on", { brightness_pct: e }] : ["light", "turn_off", {}] },
    ct: { value: (t, e) => {
      const [n, r] = Ye(t);
      return Math.round(n + e * (r - n));
    }, text: (t, e) => e.toLocaleString() + "k", send: (t, e) => ["light", "turn_on", { color_temp_kelvin: e }] },
    hue: { value: (t, e) => Math.round(e * 360), text: () => "Colour", send: (t, e) => {
      var n;
      return ["light", "turn_on", { hs_color: [e, Math.max(60, ((n = ae(t).hs_color) == null ? void 0 : n[1]) || 100)] }];
    } },
    pos: { value: (t, e) => Math.round(e * 100), text: (t, e) => Math.round(e) + "%", send: (t, e) => ["cover", "set_cover_position", { position: Math.round(e) }] },
    tilt: { value: (t, e) => Math.round(e * 100), text: (t, e) => "Tilt " + e + "%", send: (t, e) => ["cover", "set_cover_tilt_position", { tilt_position: e }] },
    vol: { value: (t, e) => Math.round(e * 100) / 100, text: (t, e) => Math.round(e * 100) + "%", send: (t, e) => ["media_player", "volume_set", { volume_level: e }] }
  };
  function a(t, e, n, r) {
    var m;
    const d = Ls[e].value(n, r);
    mt.set(e + "|" + n, d);
    const u = Math.round(r * 100) + "%", p = t.querySelector("i");
    if (e === "tilt") {
      p.style.width = "calc((100% - 8px) * " + r + ")";
      const [M, T] = t.querySelectorAll("span");
      M.classList.toggle("lit", r > 0.08), T.classList.toggle("lit", r > 0.92), _a.delete(n), ba = ba.map(() => ""), $i(n).forEach((A) => A.update(bi(n)));
    } else if (p) p.style.width = u;
    else {
      let M = t.querySelector("b");
      M || (M = document.createElement("b"), t.appendChild(M)), M.style.left = u;
    }
    t.setAttribute("aria-valuenow", String(Math.round(r * 100)));
    const g = (m = t.closest(".tfAction") || t.closest(".tfMore")) == null ? void 0 : m.querySelector(".tfName .activityRowMeta, .tfMoreState");
    g && (g.textContent = Ls[e].text(n, d));
  }
  function s(t, e) {
    const n = mt.get(t + "|" + e), [r, d, u] = Ls[t].send(e, n), p = () => setTimeout(() => {
      mt.delete(t + "|" + e), Ae();
    }, 1500);
    Cs(r, d, e, u).then(p, p);
  }
  function c(t) {
    t.addEventListener("click", (e) => {
      var r;
      const n = e.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],[data-more-page],[data-path],.tfAreaPanel");
      if (pa && !e.target.closest(".tfBoardMenu,[data-board-more]") && Ta(), !(!n || !t.contains(n) || n.disabled))
        if (n.dataset.boardMore)
          (pa == null ? void 0 : pa.key) === n.dataset.boardMore ? Ta(!0) : Bd(n.dataset.boardMore, n);
        else if (n.dataset.boardAct) Rl(pa.key, n.dataset.boardAct);
        else if (n.dataset.boardShow) Bo(n.dataset.boardShow);
        else if (n.dataset.favHide) ls(n.dataset.favHide, !1);
        else if (n.dataset.energyPick) js(n.dataset.energyPick);
        else if (n.dataset.act) Ts(n.dataset.act);
        else if (n.hasAttribute("data-details")) cl(!(B != null && B.details));
        else if (n.hasAttribute("data-details-close")) cl(!1);
        else if (n.dataset.summary) Wr(n.dataset.summary, n);
        else if (n.dataset.star) ni(n.dataset.star);
        else if (n.hasAttribute("data-more-back")) {
          const d = B.id;
          B = B.back, vs(), (r = Rt.querySelector('.tfMore [data-more="' + CSS.escape(d) + '"]')) == null || r.focus({ preventScroll: !0 });
        } else if (n.hasAttribute("data-favs-edit")) Er("favourites", n);
        else if (n.dataset.acts) JSON.parse(n.dataset.acts).forEach(([d, u, p, g]) => Cs(d, u, p, g).catch(() => {
        }));
        else if (n.dataset.more) Er(n.dataset.more, n);
        else if (n.hasAttribute("data-more-close")) Xi();
        else if (n.dataset.morePage) vn(Number(n.dataset.morePage));
        else if (n.dataset.path) ca(n.dataset.path);
        else if (n.dataset.go) Zl("room:" + n.dataset.go);
        else if (n.hasAttribute("data-area-back")) us();
        else if (n.dataset.open) vl(n);
        else if (n.hasAttribute("data-close")) {
          const d = E, u = n.closest(".tfOpen"), p = u == null ? void 0 : u.getBoundingClientRect().top, g = d.from && p != null ? new DOMRect(d.from.left, p + (d.rel || 0), d.from.width, d.from.height) : d.from;
          Ef(u, g, () => {
            var m;
            E === d && (E = null, _a.delete(d.key), Ae(), (m = D.querySelector('[data-open="' + CSS.escape(d.key + "|" + d.id) + '"]')) == null || m.focus({ preventScroll: !0 }));
          });
        } else n.classList.contains("tfAreaPanel") && !n.classList.contains("active") && bl(n);
    }), t.addEventListener("keydown", (e) => {
      var r, d, u, p, g, m, M;
      const n = e.target;
      if ((r = n.dataset) != null && r.open && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), vl(n)), (d = n.dataset) != null && d.energyPick && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), js(n.dataset.energyPick)), (u = n.classList) != null && u.contains("tfAreaPanel") && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), bl(n)), (p = n.dataset) != null && p.summary && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), Wr(n.dataset.summary, n)), e.key === "Escape" && pa && t === D) {
        e.preventDefault(), Ta(!0);
        return;
      }
      if (e.key === "Escape" && Ra && t === D) {
        e.preventDefault(), Do(!1), (g = f("dashEditNav")) == null || g.focus();
        return;
      }
      if (e.key === "Escape" && W && t === D && (e.preventDefault(), us()), (m = n.dataset) != null && m.blocks) {
        const T = n.dataset.blocks, A = ad(e, Math.round(vo(T)));
        if (A == null) return;
        e.preventDefault(), Ji(T, A), clearTimeout(da.get(T)), da.set(T, setTimeout(() => s("pos", T), 500));
        return;
      }
      if ((M = n.dataset) != null && M.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
        e.preventDefault();
        const [T, A] = n.dataset.drag.split("|"), H = Number(n.getAttribute("aria-valuenow")) / 100, I = e.key === "Home" ? 0 : e.key === "End" ? 1 : Math.max(0, Math.min(1, H + (e.key === "ArrowLeft" || e.key === "ArrowDown" ? -0.05 : 0.05)));
        a(n, T, A, I), s(T, A);
      }
    }), t.addEventListener("pointerdown", (e) => {
      var ne;
      const n = e.target.closest("[data-blocks]");
      if (n && e.button === 0) {
        e.preventDefault(), nd(n, e);
        return;
      }
      const r = e.target.closest("[data-drag]");
      if (!r || e.button > 0) return;
      const [d, u] = r.dataset.drag.split("|"), p = d === "bright" && !ra(u), g = e.pointerType !== "mouse";
      if (p && !g) {
        Ts(ie("light", "toggle", u));
        return;
      }
      const m = d === "bright" && ((ne = S[u]) == null ? void 0 : ne.state) !== "on", M = d === "tilt" ? 4 : 0, T = () => r.getBoundingClientRect().width - M * 2, A = (Y) => {
        const yt = r.getBoundingClientRect();
        return Math.max(0, Math.min(1, (Y.clientX - yt.left - M) / T()));
      };
      let H = g ? "waiting" : m ? "pressed" : "dragging", I = 0;
      const U = e.clientX, z = e.clientY, G = (Y, yt) => Math.hypot(Y.clientX - U, Y.clientY - z) > yt, N = () => {
        try {
          r.setPointerCapture(e.pointerId);
        } catch {
        }
      };
      g || (e.preventDefault(), N()), H === "dragging" && a(r, d, u, A(e));
      const ct = () => {
        var Y, yt;
        H = "sliding", kt = r, r.classList.add("held"), N(), (Y = navigator.userActivation) != null && Y.hasBeenActive && ((yt = navigator.vibrate) == null || yt.call(navigator, 8)), I = m ? (eo[u] ?? 100) / 100 : Number(r.getAttribute("aria-valuenow")) / 100;
      }, $ = (Y) => {
        H === "waiting" && G(Y, wt) ? !p && Math.abs(Y.clientX - U) > Math.abs(Y.clientY - z) ? ct() : H = "gone" : H === "pressed" && G(Y, 4) && (H = "dragging"), H === "sliding" ? a(r, d, u, Math.max(0, Math.min(1, I + (Y.clientX - U) / T()))) : H === "dragging" && a(r, d, u, A(Y));
      }, Mt = (Y) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((yt, Et) => r.removeEventListener(yt, Et ? Mt : $)), r.classList.remove("held"), kt === r && (kt = null), H === "sliding" || H === "dragging" ? s(d, u) : Y.type === "pointerup" && p ? Ts(ie("light", "toggle", u)) : Y.type === "pointerup" && m && (H === "waiting" || H === "pressed") && Cs("light", "turn_on", u).catch(() => {
        });
      };
      r.addEventListener("pointermove", $), r.addEventListener("pointerup", Mt), r.addEventListener("pointercancel", Mt);
    }), t.addEventListener("touchmove", (e) => {
      kt && e.cancelable && e.preventDefault();
    }, { passive: !1 });
  }
  return D && k && (Vr(), c(D), c(Rt), Rt.addEventListener("click", (t) => {
    t.target === Rt && Xi();
  }), (v = o.getElementById("homeNav")) == null || v.addEventListener("click", () => {
    W && us();
  }), (C = o.querySelector(".bottomNav")) == null || C.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + wp + "</button>"), (R = f("dashEditNav")) == null || R.addEventListener("click", () => Do(!Ra)), D.addEventListener("pointerdown", Gl), D.addEventListener("scroll", (t) => {
    var e;
    (e = t.target.classList) != null && e.contains("hcFadeList") && es(t.target);
  }, !0), new ResizeObserver(() => {
    b.classList.contains("tfDash") && si() !== So ? Ae() : Gi();
  }).observe(D), window.addEventListener("resize", Gi, { passive: !0 }), Rt.addEventListener("keydown", (t) => {
    var e, n;
    t.key === "Escape" ? (t.stopPropagation(), B != null && B.details ? cl(!1) : Xi()) : (t.key === "ArrowLeft" || t.key === "ArrowRight") && ((n = (e = t.target).closest) != null && n.call(e, ".tfMoreDots")) && (t.preventDefault(), vn(((B == null ? void 0 : B.page) || 0) + (t.key === "ArrowRight" ? 1 : -1)));
  })), at(), {
    update(t) {
      if (!k) return;
      const e = !Object.keys(S).length;
      S = { ...Object.fromEntries(Object.entries(S).filter(([r]) => Vo(r))), ...t || {} };
      for (const r in S) r.startsWith("light.") && S[r].state === "on" && ra(r) && Je(r, za(S[r]));
      e ? po() : Ae();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      Zn = !0, Ee == null || Ee.destroy(), Ee = null, Ge == null || Ge.forEach((t) => t.destroy()), Ge = null;
    },
    resume() {
      Zn = !1, !(!k || !(D != null && D.querySelector("[data-tf]"))) && (Qt.isConnected && rr(Qt.style.order), Zt());
    }
  };
}
const vm = "0.82.0", ic = "move_assistant", bm = "move_assistant", kp = "move_assistant_checkin_reminder";
function wm() {
  if (document.getElementById("move-assistant-inter")) return;
  const o = document.createElement("link");
  o.id = "move-assistant-inter", o.rel = "stylesheet", o.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(o);
}
class xm extends HTMLElement {
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
    var f;
    const i = !this._hass;
    if (this._hass = l, i) {
      this._init();
      return;
    }
    this._app && l.states !== this._lastStates && (this._lastStates = l.states, this._app.updateStates(l.states), (f = this._test) == null || f.update(l.states));
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
    wm();
    const l = this.shadowRoot || this.attachShadow({ mode: "open" });
    l.innerHTML = `<style>${pu}${uu}${fu}${hu}</style>${mu}`;
    const i = l.getElementById("app");
    i.style.opacity = "0";
    let f = null;
    try {
      const b = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: ic
      });
      f = (b == null ? void 0 : b.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(f), this._app = Nu(l, {
      data: f,
      save: (b) => this._save(b),
      fire: (b, x) => this._fire(b, x),
      ws: (b) => this._hass.callWS(b),
      subscribe: (b, x) => {
        var k, _;
        return (_ = (k = this._hass) == null ? void 0 : k.connection) != null && _.subscribeMessage ? this._hass.connection.subscribeMessage(x, b) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var b, x;
        return Object.keys(((x = (b = this._hass) == null ? void 0 : b.services) == null ? void 0 : x.notify) || {}).sort();
      },
      setReminderAutomation: (b) => this._setReminderAutomation(b),
      setLight: (b) => this.classList.toggle("lightBody", b),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this._test = gm(l, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), Tf(l, i), _f(l), this.isConnected || (this._app.suspend(), this._test.suspend()), i.style.transition = "opacity .2s ease", i.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var i;
    const l = (i = this._hass) == null ? void 0 : i.connection;
    l != null && l.subscribeMessage && l.subscribeMessage(
      (f) => {
        var x;
        const b = JSON.stringify((f == null ? void 0 : f.value) ?? null);
        b === this._lastSaved || b === this._pendingJson || (this._lastSaved = b, (x = this._app) == null || x.applyRemoteData(f.value));
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
    var f, b;
    ((f = this._config) == null ? void 0 : f.events) !== !1 && ((b = this._hass) == null || b.callWS({
      type: "fire_event",
      event_type: bm,
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
    const f = (x) => `${x}:00`, b = window.location.pathname;
    await this._hass.callApi("POST", i, {
      id: kp,
      alias: "Move Assistant check-in reminder",
      description: "Created by Move Assistant. Change it in Move Assistant → Settings → Check-in.",
      mode: "single",
      triggers: [
        { trigger: "time", at: f(l.times.morning), id: "morning" },
        { trigger: "time", at: f(l.times.evening), id: "evening" }
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
    var f;
    const i = (f = this.shadowRoot) == null ? void 0 : f.getElementById("toast");
    i && (i.textContent = l, i.classList.add("show"), setTimeout(() => i.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", xm), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${vm} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
