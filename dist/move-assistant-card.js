const Rf = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn,.tfSeg>button,.tfMoreSwitch>button){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', Bf = `#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)),#homeView .tfATile{transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover,#homeView .tfATile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .toggleRow:has(>.themeChoice,>.settingsSelect){flex-direction:column;align-items:stretch;gap:12px}#housePane .toggleRow>.settingsSelect{width:100%}#housePane .themeChoice[hidden]{display:none}#housePane .houseTab>.card:has(>.tfSetGroup){gap:24px}#housePane .tfSetGroup{display:grid;gap:8px}#housePane .tfSetGroup>.sectionLabel{margin:0 16px}#housePane{container:housepane/inline-size}#housePane .tfLightCards{display:none}@container housepane (width < 720px){#housePane .houseTab .metaTableWrap{display:none}#housePane .tfLightCards{display:grid;gap:8px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}#housePane .themeChoice,.tfBoardMenu .tfHeightTabs,.wb .wbSegments{gap:4px;padding:4px;border:0;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}#housePane .themeChoice{display:flex;flex-wrap:nowrap;width:100%}#housePane .themeChoice>button{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button){height:38px;min-width:0;min-height:0;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile)!important;white-space:nowrap;cursor:pointer}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button):hover:not(:disabled):not([aria-pressed=true]):not([aria-checked=true]):not(.active){background:transparent;color:var(--text)}:is(#housePane .themeChoice :is(.wxLayoutBtn[aria-pressed=true],.themeBtn.active),.tfBoardMenu .tfHeightTabs button[aria-checked=true],.wb .wbSegments button[aria-pressed=true]){background:var(--bright);color:var(--on-bright)}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfATags{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:4px;margin-left:auto;min-width:0}.tfATags .sourceTag{display:block;margin:0;max-width:100%;padding:6px 12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}#app.house .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}#app.house .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-l);--g1:var(--g1-l);--g2:var(--g2-l)}#app.house .tfSum[data-summary=climate] .tfIcon svg path{fill:url(#hcClimateGrad)}.tfGradDefs{position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMoreBackdrop.tfMoreUnder{z-index:179;pointer-events:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}.tfMoreTileHead .tfName{display:grid;flex:1;min-width:0;cursor:default}.tfMoreTileHead :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreTileHead .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfMoreTileHead div.tfIcon{cursor:default}.tfMoreTileHead.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreTileHead.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMorePages{display:grid;grid-auto-flow:column;grid-auto-columns:100%;align-items:start;gap:20px;flex:none;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;transition:height .25s cubic-bezier(.2,.7,.3,1)}@media (prefers-reduced-motion:reduce){.tfMorePages{transition:none}}.tfMorePages::-webkit-scrollbar{display:none}.tfMorePage{display:flex;flex-direction:column;gap:14px;min-width:0;scroll-snap-align:start;scroll-snap-stop:always}.tfMoreSpace{flex:none;display:flex;flex-direction:column;justify-content:space-between;gap:12px;height:224px;padding:18px;border-radius:16px;background:var(--tile);overflow:hidden}.tfMoreSpace.tfMoreFill{justify-content:center;align-items:center;height:auto;padding:0;background:none;border-radius:0}.tfMoreSpace.tfMoreFill>.tfCoverArt{width:100%;height:auto;max-width:none;align-self:center}.tfMoreSpace.tfMoreFill>.tfDacPad{width:100%;height:100%}.tfMoreBig{display:flex;align-items:baseline;min-width:0;font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfMoreBig.live{color:var(--primary)}.tfMoreNum{overflow:hidden;text-overflow:ellipsis}.tfMoreUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfMoreFacts{display:flex;flex:1;flex-direction:column;justify-content:space-evenly;min-height:0}.tfMoreFact{display:flex;justify-content:space-between;gap:16px;font:400 14px/20px var(--font)}.tfMoreFact span:first-child{color:var(--muted)}.tfMoreFact span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreGraph{display:flex;flex:none;flex-direction:column;gap:6px}.tfMoreGraph .tfMoreGroupName{margin:0}.tfMoreGraph .tfGraph.tfDay{width:100%}.tfMoreDots{display:flex;flex:none;justify-content:center;gap:4px;margin-top:-4px}.tfMoreDots button{display:grid;place-items:center;width:24px;height:24px;min-height:0;padding:0;border:0;background:none;cursor:pointer}.tfMoreDots button:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--muted);opacity:.45;transition:opacity .15s ease,background .15s ease}.tfMoreDots button[aria-selected=true]:before{background:var(--text);opacity:1}.tfMoreDots.tfMorePageIcons{gap:3px;align-self:center;margin-top:0;padding:3px;border-radius:19px;background:var(--tile)}.tfMoreDots.tfMorePageIcons button{width:48px;height:32px;border-radius:16px;color:var(--muted);transition:background .15s ease,color .15s ease}.tfMoreDots.tfMorePageIcons button:before{display:none}.tfMoreDots.tfMorePageIcons button svg{width:20px;height:20px;fill:currentColor}.tfMoreDots.tfMorePageIcons button[aria-selected=true]{background:var(--text);color:var(--card)}.tfMoreDots.tfMorePageIcons button:not([aria-selected=true]):hover{color:var(--text)}#homeView .grid>.tfDashTiles>.tfAction.tfHeadOnly,#homeView .grid .tfAction.tfHeadOnly{align-self:start}.tfMoreLink{margin-top:auto}.tfMoreLink svg{transform:none!important}.tfMorePage .tfMoreRows{flex:none}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 20px 10px}.tfAreaPanel .tfATiles{margin-inline:-10px}.tfAreaPanel .workoutPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{max-width:100%;overflow:hidden;color:var(--muted);font:400 16px/1.2 var(--font);white-space:nowrap;text-overflow:ellipsis}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));min-height:calc(2 * var(--tile-min));align-content:end}.tfABig{max-width:100%}.panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 16px)}#app.tfBoard .tfAreas[data-rows="5"] .tfACMain{position:absolute;left:10px;right:10px;bottom:170.3px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .tfACMain{position:absolute;left:10px;right:10px;bottom:164.1px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 12px)}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{align-self:start;display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar,.tfDash-hourly,.tfDash-sun,.tfDash-moon,.tfDash-uv,.tfDash-humidity,.tfDash-pressure,.tfDash-wind,.tfDash-visibility){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;pointer-events:none;color:var(--text)}.tfBoardCells svg{display:block;overflow:visible}.tfBoardCells pattern circle{fill:currentColor;fill-opacity:.16}.tfBoardCells .tfGridCross{fill:none;stroke:currentColor;stroke-opacity:.45;stroke-width:1.5;stroke-linecap:round}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}.tfBoardMenu .tfHeightTabs button{justify-content:center}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}.tfWidth{padding-top:0}.tfWidth .tfHeightTabs{grid-template-columns:repeat(3,auto)}.tfBoardMenu .tfWidth .tfHeightTabs button{white-space:nowrap}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:var(--fill-row,60px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:var(--fill-row,60px);box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"]{padding:10px;border-radius:24px}.tfRoomTile{cursor:pointer}.tfRoomTile .tfRoomIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomInline,.tfRoomSub{display:none}.tfRoomReading{display:flex;flex-direction:column;gap:4px;min-width:0}.tfRoomBig{overflow:hidden;color:var(--text);font:500 46px/46px var(--font-tile);letter-spacing:-.92px;white-space:nowrap;text-overflow:ellipsis}.tfRoomSub{overflow:hidden;color:var(--muted);font:400 16px/19px var(--font);white-space:nowrap;text-overflow:ellipsis}.tfRoomDevices{display:flex;gap:12px}.tfRoomDevices .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDevices .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}#app.tfBoard .tfRoomTile[data-rows="1"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-rows="1"] :is(.tfRoomReading,.tfRoomDevices),#app.tfBoard .tfRoomTile[data-rows="2"] .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfActionHead .activityRowMeta{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfRoomSub{display:block}#app.tfBoard .tfRoomTile[data-rows="4"] .tfRoomBig{font-size:52px;line-height:52px;letter-spacing:-1.92px}#app.tfBoard .tfRoomTile[data-rows="5"] .tfRoomBig{font-size:64px;line-height:64px;letter-spacing:-1.92px}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="3"],[data-rows="4"],[data-rows="5"]) .tfRoomDevices{display:grid;grid-template-columns:repeat(2,max-content)}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"]:has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"]:has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="4"],[data-rows="5"]) .tfRoomDevices{min-height:calc(2 * var(--chip-size) + 12px);align-content:start}.tfRoomHeads{display:none;gap:12px 16px}.tfRoomDev{display:flex;align-items:center;gap:12px;min-width:0;padding:0;border:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfRoomDev .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomDev .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfRoomDevName{display:flex;flex-direction:column;min-width:0}.tfRoomDevName>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]){flex-direction:row;align-items:center;gap:12px}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"])>.tfActionHead{flex:1;margin-bottom:0}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]) .tfRoomDevices{display:flex}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-cols="2"]):not([data-rows="1"]) .tfRoomHeads{grid-template-columns:repeat(4,minmax(0,1fr))}#app.tfBoard .tfRoomTile[data-cols="2"][data-rows="2"] .tfRoomDev:nth-child(n+3){display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbWx.wbS90{width:100px;height:100px;border-radius:31px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbDeg{font-size:80px;line-height:80px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbUnit{font-size:30px;line-height:38px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbWeather{flex-direction:row;align-items:center;gap:16px}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNow{flex:none}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNextHours{display:flex;flex:1 1 0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbWeather{justify-content:center;padding-top:0;padding-bottom:0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) :is(.wbNow,.wbSummary){display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbColumns{display:flex;flex:none;height:185px}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsDay{display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsNow{display:inline}#app.tfBoard .tfDash-wx[data-narrow] .wbCard.wbWeather{gap:12px;padding:18px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbWx.wbS90{width:64px;height:64px;border-radius:20px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbDeg{font-size:46px;line-height:46px;letter-spacing:-.92px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbUnit{font-size:20px;line-height:26px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-narrow] .wbHalves{display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="3"] .wbNextHours{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow] .wbHour:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;flex:none;height:auto;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumn:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbHalves{display:none}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx:not([data-narrow])[data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:0}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn{justify-content:flex-start;gap:8px;padding:12px 0 16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn .wbWx{width:40px;height:40px;border-radius:16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbTemps{gap:4px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .workoutPanel.tfAreaPanel{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded{display:grid;grid-template-columns:40px minmax(0,1fr);gap:0 12px;align-content:center}#app.tfBoard .tfAreas[data-rows="1"] :is(.panelExpanded>.workoutPanelTop,.tfACTop){display:contents}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] .tfATitle .tfAName{font-size:14px;line-height:20px;height:auto}#app.tfBoard .tfAreas[data-rows="1"] .tfABig{margin:0;flex-direction:row}#app.tfBoard .tfAreas[data-rows="1"] .tfABigMain{font-size:14px;line-height:18px;letter-spacing:0}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigUnit){font-size:14px}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigSub,.tfATiles,.tfACTiles,.sourceTag){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"]) .tfABig{display:none}#app.tfBoard .tfAreas[data-rows="4"] .tfABig{flex:none;margin-top:auto;margin-bottom:auto}#app.tfBoard .tfAreas[data-rows="4"] .tfATiles{margin-top:0}#app.tfBoard .tfAreas[data-rows="4"] .tfABigMain{font-size:52px}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded{row-gap:12px}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"],[data-rows="4"]) .tfATiles{margin-top:auto}#app.tfBoard .tfAreas[data-rows="2"] .tfATile:nth-child(n+3),#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfATile:nth-child(n+5){display:none}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:608px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-52px;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border:0;border-radius:var(--r-inner);background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(608px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.house :is(.settingsSelect,.addInput){border:1px solid var(--muted)}#app.house{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%23d9d9d9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house.light{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%2326221e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house select.settingsSelect{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 44px 0 16px;background-image:var(--select-chev);background-repeat:no-repeat;background-position:right 16px center;background-size:16px 16px}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}#app.house :is(.tfIcon,.activityRowIcon,.tfAreaIcon,.tfRoomIcon){--chip-hi:.0375;background-image:linear-gradient(180deg,#ffffff08,#fff0)!important;box-shadow:inset 0 1px rgba(255,255,255,var(--chip-hi)),inset 0 -1px color-mix(in srgb,currentColor 3%,transparent),inset 0 -3px 6px color-mix(in srgb,currentColor 3.5%,transparent)}#app.house :is(.on[data-light] .tfIcon,.tfIcon.on[data-light],.tfACTile .tfIcon[data-light],.on[data-tone=alarm] .tfIcon,.tfIcon[data-light]){--chip-hi:.1375}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-xl]{grid-row:span 5}#app.tfBoard .tfDashBento:not([data-rows="5"]) .wbItem[data-xl] .wbCallouts{display:none}#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]) .wbZone{flex:1;height:auto;background:none;box-shadow:none;padding:0;align-items:flex-start}#app.tfBoard .tfDashBento[data-rows="3"] .wbItem[data-xl] .wbCallouts{display:flex;margin-top:0}#app.tfBoard .tfDashBento[data-rows="1"] :is(.wbZone,.wbCallouts){display:none}#app .wbZoneM{display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM){display:flex;align-items:flex-start;justify-content:flex-start}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM)>:not(.wbZoneM){display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZoneM{display:flex}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{grid-auto-flow:row}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-break]{grid-column-start:1}#app.house.tfWeatherOpen #homeView{max-width:none}#app.house #settingsView .toggleList{border-radius:var(--r-card);padding-block:4px}#app.house #settingsView .toggleRow{padding-left:18px;padding-right:18px}#app.house #settingsView .toggleRow:not([hidden])~.toggleRow:before{left:18px}#app.house .view{margin-left:0}#app.house #settingsView .toggleList>.tfCardTitle{display:flex;align-items:center;min-height:28px;padding:14px 18px 2px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfLightView{display:flex;padding:4px 0 14px}#housePane.tfLightCardsOn .houseTab .metaTableWrap,#housePane.tfLightCardsOn .houseTab .tfTableNote{display:none}#housePane.tfLightCardsOn .tfLightCards{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:8px}#housePane:not(.tfLightCardsOn) .tfLightCards{display:none}@container housepane (width < 720px){#housePane:not(.tfLightCardsOn) .houseTab .metaTableWrap{display:none}#housePane:not(.tfLightCardsOn) .tfLightCards{display:grid}}#app.house.light .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house .tfTrayInner{gap:32px}#app.house .tfTraySection{gap:12px}#app.house{--font:Geist,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-family:var(--font)}#app.house #housePane .toggleRow>:is(.themeChoice,.settingsSelect){align-self:flex-start;width:auto;max-width:100%}#app.house #housePane .themeChoice{display:inline-flex}#app.house #housePane .themeChoice>button{flex:0 1 auto;min-width:0;padding:0 16px;overflow:hidden;text-overflow:ellipsis}#app.house #housePane .toggleRow{min-width:0}#app.house #housePane .toggleRow>.settingsSelect{min-width:200px}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments){display:inline-flex;width:auto;align-self:flex-start}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments) button{flex:0 0 auto;padding:0 16px}@media (max-width:620px){#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid{display:flex!important;flex-wrap:wrap;align-items:flex-start;gap:var(--grid-gap);height:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid .tfBoardItem{position:relative!important;left:auto!important;top:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid>.tfBoardItem:not(.tfDash-favs){height:auto!important}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummary{flex:none;margin-top:0;container-type:normal}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummaryText{position:static}}#app.house :is(#housePane .themeChoice,.wb .wbSegments,.tfBoardMenu .tfHeightTabs){height:32px;padding:3px;gap:3px;box-sizing:border-box}#app.house :is(#housePane .themeChoice>button,.wb .wbSegments button,.tfBoardMenu .tfHeightTabs button){height:26px!important;padding:0 12px;border-radius:13px!important;font:600 12px/16px var(--font-tile)!important}.tfPlantProblem{flex:1 1 0;min-height:184px;flex-direction:column}.tfGraph.tfPlantGraph{flex:1 1 0;width:calc(100% - 20px);height:auto;min-height:160px;margin:0 10px}.tfGraph .tfGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:3 4;vector-effect:non-scaling-stroke}.tfGraph .tfGuideWord{font-size:11px}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:inset 0 0 0 1px var(--line)}.tfDashTitle .tfGreeting{display:block;margin-bottom:6px;font:500 20px/1.2 var(--font-tile);letter-spacing:0;color:var(--muted)}#app.tfOverview.tfDash #homeView .tfSum:not([data-summary=alerts]) .tfIcon{background:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar{width:100%;max-width:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:flex;justify-content:space-between}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRow{flex:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows>.activityRow{min-width:0}@media (max-width:620px){#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}}#app.tfOverview.tfDash #homeView .tfDash-favs{padding:10px;border-radius:var(--r-card)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityHeader{display:none}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:60px;row-gap:25px;max-height:100%;margin:0;overflow-y:auto;scrollbar-width:none}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows::-webkit-scrollbar{display:none}.hcFadeList.hcMore{-webkit-mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent);mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{height:60px;min-height:0;padding:10px;box-sizing:border-box}#app.tfOverview.tfDash #homeView .tfRoomTile{padding:18px;gap:0;border-radius:28px}#app.tfOverview.tfDash #homeView .tfRoomTile>.tfActionHead{margin-bottom:0}#app.tfOverview.tfDash #homeView .tfRoomTile .tfActionHead .activityRowMeta{display:none}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomReading{margin-top:35px;gap:0}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomBig{font:400 48px/64px var(--font-tile);letter-spacing:-1.92px}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomSub{display:block;margin-top:-7px;font:400 16px/19px var(--font)}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomDevices{display:flex;justify-content:space-between;min-height:0;margin-top:auto;padding-top:16px}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomHeads{display:none}#app.tfOverview.tfDash #homeView .tfRoomTile:not(:has(.tfRoomDevices :nth-child(4))) .tfRoomDevices{justify-content:flex-start;gap:18.67px}#app.light.tfOverview.tfDash #homeView .tfRoomTile .tfRoomIcon{background-color:#acacac;color:#fff}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar{width:max-content;max-width:100%}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows{justify-content:flex-start}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),auto)}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs{height:auto!important;padding:10px;container-type:normal}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:flex;justify-content:space-between;grid-auto-rows:auto;row-gap:0;max-height:none}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{flex:none;width:240px;height:60px}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows>.activityRow{width:auto;min-width:0}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs{width:max-content!important;max-width:100%}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows{justify-content:flex-start}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),240px)}@media (max-width:620px){#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{width:auto;min-width:0}}#app.tfOverview.tfBoard #homeView .hcFloor{position:absolute;z-index:1;display:flex;align-items:center;height:24px;margin:0;box-sizing:border-box}#app.tfOverview.tfBoard #homeView .hcFloorBox{position:absolute;z-index:0;border-radius:40px;background:color-mix(in srgb,var(--text) 5%,transparent);box-sizing:border-box;pointer-events:none}#app.tfOverview #homeView .hcFloorName{margin:0;font:500 16px/24px var(--font);color:var(--title,var(--text));white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfOverview.tfDash #homeView .tfRoomTile{overflow:hidden}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaL .tfRoomBig{font-size:calc(48px * var(--hc-k,1));line-height:calc(64px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaL .tfRoomReading{margin-top:calc(35px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaM .tfRoomReading{margin-top:calc(14px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaM .tfRoomBig{font-size:calc(40px * var(--hc-k,1));line-height:calc(52px * var(--hc-k,1));letter-spacing:-1.6px}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaM .tfRoomSub{margin-top:-6px}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS{padding:12px}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS .tfRoomReading{margin-top:calc(8px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS .tfRoomBig{font-size:calc(32px * var(--hc-k,1));line-height:calc(40px * var(--hc-k,1));letter-spacing:-1.28px}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS .tfRoomSub{display:none}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaM,.hcAreaS) .tfRoomDevices,#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaM,.hcAreaS):not(:has(.tfRoomDevices :nth-child(4))) .tfRoomDevices{display:flex;flex-wrap:wrap;justify-content:flex-start;gap:0 8px;height:var(--chip-size);overflow:hidden;padding-top:0;margin-top:auto}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS .tfRoomReading{flex:none}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomReading{margin-bottom:12px}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomBig{font-size:calc(64px * var(--hc-k,1));line-height:calc(80px * var(--hc-k,1));letter-spacing:-2.56px}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomReading{margin-top:calc(35px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomSub{display:block}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomDevices{display:none!important}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));margin-top:auto}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem.tfRoomTile{cursor:default;outline:0}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfRoomTile){cursor:grab;-webkit-user-select:none;user-select:none;touch-action:none;outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem.tfRoomTile{border-radius:28px}#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:left .34s cubic-bezier(.2,1.35,.4,1),top .34s cubic-bezier(.2,1.35,.4,1)}@media (prefers-reduced-motion:reduce){#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:none}}#app.hcHomeEditing #homeView .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}@media (max-width:620px){#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomDevices{display:grid;grid-template-columns:repeat(2,max-content);gap:12px;justify-content:start}}.tfEditTray .tfTrayInner{scrollbar-width:none}.tfEditTray .tfTrayInner::-webkit-scrollbar{display:none}.hcHeChoiceLine{flex-wrap:wrap;gap:8px 12px}.hcHeChoiceLine>.hcHeChoice{margin-left:auto}.hcHeChoice.themeChoice{display:inline-flex;flex-wrap:nowrap;height:32px;padding:3px;gap:3px;box-sizing:border-box;border-radius:16px;background:var(--control-2,var(--hc-icon))}#app .hcHeChoice>button{height:26px!important;min-height:0;padding:0 12px;border:0;border-radius:13px!important;background:none;color:var(--text);font:600 12px/16px var(--font-tile)!important;white-space:nowrap}#app .hcHeChoice>button[aria-pressed=true]{background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all)}.hcHeBody{display:flex;flex-direction:column;gap:12px}.hcHeBody>.tfTrayNote{margin:0 0 8px}.hcHeLabel{display:flex;align-items:center;gap:4px}.hcHeLine{display:flex;align-items:center;gap:4px;min-height:44px}.hcHeLine>.activityRowName{min-width:0}.hcHeLine>.switch{margin-left:auto}.hcHeLink{display:inline;min-height:0;padding:0;border:0;background:none;font:inherit;color:var(--primary);text-decoration:underline;cursor:pointer}.hcHeList{display:flex;flex-direction:column;gap:2px;margin:0;padding:0;list-style:none}.hcHeRow{display:grid;grid-template-columns:36px var(--chip-size) minmax(0,1fr) auto;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 4px;border-radius:var(--r-tile)}.hcHeRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.hcHeRow.moving{background:var(--card);box-shadow:var(--hc-hair-all)}.hcHeGrip{color:var(--muted);cursor:grab;touch-action:none}.hcHeSum .tfIcon{color:var(--sum-ink,var(--hc-icon-ink))}#app .hcHeRow.hcHeSum .tfIcon{background-color:transparent}#app.house .hcHeSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .hcHeSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}.hcInfoBtn{display:grid;place-items:center;flex:none;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:var(--r-fine,12px);background:none;color:var(--muted);cursor:pointer}.hcInfoBtn svg{width:18px;height:18px;fill:currentColor}.hcInfoBtn:hover,.hcInfoBtn[aria-expanded=true]{background:var(--tile);color:var(--text)}.hcInfoPop{position:fixed;z-index:320;width:280px;max-width:calc(100vw - 16px);display:flex;flex-direction:column;gap:8px;padding:16px;border-radius:var(--r-inner);box-shadow:var(--hc-hair-all),0 8px 28px #0000002e}.hcInfoPop[hidden]{display:none}.hcInfoTitle{font:600 14px/20px var(--font-tile);color:var(--text)}.hcInfoText{font:400 14px/1.45 var(--font);color:var(--text)}.hcInfoText p{margin:0}.hcInfoText ul{margin:6px 0 0;padding-left:18px}.hcInfoMore{align-self:flex-start;font:600 14px/20px var(--font-tile);color:var(--primary);text-decoration:underline}#app .tfTrayAdd.hcAddBtn{display:inline-flex;align-items:center;gap:6px;height:32px;min-height:0;margin:10px 0 12px;padding:0 16px 0 12px;border:0;border-radius:16px!important;background:#03a9f4;color:#fff;font:600 14px/20px var(--font-tile);text-decoration:none!important}#app .tfTrayAdd.hcAddBtn svg{width:18px;height:18px;flex:none;fill:currentColor}#app .tfTrayAdd.hcAddBtn:hover{background:#0398dc}#app .tfTrayAdd.hcAddBtn[aria-expanded=true]{background:#0288d1}.tfEditTray:not(.hcHomeTray) .tfTraySection:not(.hcFirst){padding-top:20px;border-top:1px solid var(--line)}#app.house .tfEditTray:not(.hcHomeTray) .tfTrayInner{gap:20px}.hcHeRule{width:100%;height:0;margin:8px 0;border:0;border-top:1px solid var(--line)}.tfEditTray .hcTrayTabs{display:flex;align-self:stretch;margin:0 0 4px;flex:none}.tfEditTray .hcTrayTabs .tab{flex:1 1 0;min-height:36px;padding:0 10px;font:600 14px/20px var(--font-tile)}.tfEditTray .hcTrayTabs .rubberIndicator{background:var(--text)}.tfEditTray .hcTrayTabs .tab.active{color:var(--card)}.tfEditTray .tfTraySection[hidden]{display:none!important}.hcHeTabBody{display:flex;flex-direction:column;gap:8px}.hcHomeTray .hcTrayTabs{margin:0 0 8px}#homeView .grid.tfStack{grid-auto-rows:1px;row-gap:0}#homeView .grid.tfStack>*{align-self:start}.tfTrayPop{position:fixed;z-index:260;right:calc(min(608px,100vw - 56px) + 12px);width:300px;max-width:calc(100vw - 80px);display:grid;gap:2px;padding:10px!important;background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfTrayPop[hidden]{display:none}.tfTrayPopTitle{padding:4px 8px 8px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfTrayPopRow{display:flex;align-items:center;gap:12px;min-height:var(--tile-min);padding:0 8px}.tfTrayPopRow .tfIcon{background-color:var(--hc-icon)}.tfTrayPopName{flex:1;min-width:0;font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(600px,85dvh)}#app .tfMoreBackdrop:not(.wide) .tfMorePages{flex:1 1 auto;min-height:0;height:auto!important;align-items:stretch}#app .tfMoreBackdrop:not(.wide) .tfMorePage{overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}#app .tfMoreBackdrop:not(.wide) .tfMorePage[aria-label=Control]>:first-child{margin-top:auto}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace{flex:1 1 auto;height:auto;min-height:224px}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill{min-height:0;container-type:size}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill>.tfCoverArt{width:min(100%,100cqh);height:auto}.tfMorePage[aria-label=Control]>:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink)+:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink){margin-top:14px}.tfMoreSwitch{display:flex;align-items:center;justify-content:center;min-height:0;padding:0;border-radius:0;background:none}.tfMoreSwitch .tfIcon{width:min(240px,100%);height:min(240px,100%);aspect-ratio:1;min-height:0;border:0;padding:0;border-radius:40%;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer;--mdc-icon-size:204px}.tfMoreSwitch.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreSwitch.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}@media (max-width:620px){#app .tfMoreBackdrop{place-items:end center;padding:0 16px max(16px,env(safe-area-inset-bottom,0px))}#app .tfMoreBackdrop .tfMorePair{width:100%;max-height:85dvh}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){width:100%;border-radius:34px;box-shadow:inset 0 0 0 1px var(--line),0 10px 30px #00000047}#app .tfMoreBackdrop .tfMore{padding-top:10px;outline:none}#app .tfMoreBackdrop .tfMore:before{content:"";display:block;position:sticky;top:10px;z-index:2;flex:none;width:36px;height:5px;margin:0 auto;border-radius:3px;background:var(--line)}#app .tfMoreBackdrop .tfMore [data-more-close]{display:none}}`, Pf = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);fill-opacity:.14}.wbChart .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbAsNow{display:none}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbNextHours{display:none;justify-content:space-between;align-items:center;gap:8px;min-width:0}.wbHour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}.wbHourTime{color:var(--muted);font:400 14px/20px var(--font);white-space:nowrap}.wbHourTemp{font:400 18px/20px var(--font-tile);white-space:nowrap}.wbHour .wbWx.wbS40{width:40px;height:40px;border-radius:16px}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumn .wbWx.wbS60{width:40px;height:40px;border-radius:14px}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbSunTile .wbZone{display:block}.wbSunZone{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff;transition:background 1s ease}.wbSunTrack{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbSunBand{fill:#fff;fill-opacity:.1}.wbSunBand.wbSunDay{fill-opacity:.14}.wbSunBand.wbSunDone{fill-opacity:.85}.wbSunDot{fill:#ffd84a}.wbSunDot.wbSunNight{fill:#9aa3c7}.wbSunCount{position:absolute;top:22px;right:22px;bottom:22px;left:22px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding-bottom:14px}.wbSunLeft{font:500 clamp(28px,calc(16cqw * var(--wb-k,1)),36px)/1.1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums;white-space:nowrap}.wbSunWord{font:400 13px/18px var(--font);opacity:.85}.wbSunAt{position:absolute;bottom:32px;font:500 12px/16px var(--font);opacity:.85;font-variant-numeric:tabular-nums}.wbSunRise{left:32px}.wbSunSet{right:32px}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbTrend{position:relative;width:100%;height:100%;min-height:0}.wbTrendPlot{position:absolute;top:22px;right:0;bottom:24px;left:0}.wbTrendPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbTrendLine{fill:none;stroke:var(--text);stroke-width:2;stroke-linejoin:round;stroke-linecap:round;opacity:.8}.wbTrendDot{position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:var(--card);box-shadow:0 0 0 2px var(--text)}.wbTrendDot.wbToday{width:11px;height:11px;margin:-5.5px 0 0 -5.5px;background:var(--primary);box-shadow:0 0 0 3px var(--card)}.wbAvgValue{position:absolute;transform:translate(-50%,calc(-100% - 8px));color:var(--muted);font:400 10px/1 var(--font-tile);white-space:nowrap}.wbAvgValue.wbToday{color:var(--text);font-size:12px;font-weight:600}.wbTrendAvg{position:absolute;right:0;transform:translateY(4px);color:var(--muted);font:400 10px/1 var(--font-tile)}.wbTrendDays{position:absolute;left:0;right:0;bottom:0;height:16px}.wbAvgDay{position:absolute;bottom:0;transform:translate(-50%);color:var(--muted);font:400 11px/16px var(--font-tile)}.wbAvgDay.wbToday{color:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}.wbZoned{gap:14px}.wbZone{position:relative;flex:none;height:198px;display:flex;align-items:center;justify-content:center;border-radius:16px;overflow:hidden}.wbCallouts{display:none;flex-direction:column;gap:4px;margin-top:-6px}.wbCallout{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbCallout>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbCallout>span:last-child{flex:none;color:var(--text);white-space:nowrap}.wbZone>.wbSunSky{flex:1;align-self:stretch;border-radius:0}.wbZone>.wbMoonBox{flex:none;height:150px}.wbBase .wbZone{align-items:flex-end;justify-content:flex-start}.wbZone>.wbTapeRow{align-self:stretch;height:100%}.wbItem[data-xl] .wbCallouts{display:flex}.wbUv .wbZone{display:block}.wbUvArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbUvBig{position:absolute;right:0;bottom:0;display:flex;flex-direction:column;align-items:flex-end}.wbUvNum{font:500 64px/.9 var(--font-tile);letter-spacing:-.03em;color:var(--text);font-variant-numeric:tabular-nums}.wbUvWord{margin-top:6px;font:400 14px/20px var(--font);color:var(--muted)}.wbAqSmile .wbZone{display:block}.wbAqFill{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff}.wbAqFace{position:absolute;left:12px;top:12px;width:min(140px,calc(100% - 60px));height:auto;aspect-ratio:1;fill:none;stroke:currentColor;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round}.wbAqFace .wbAqEyes{stroke-width:5}.wbAqBig{position:absolute;right:14px;bottom:12px;display:flex;flex-direction:column;align-items:flex-end}.wbAqNum{font:500 56px/.9 var(--font-tile);letter-spacing:-.03em;font-variant-numeric:tabular-nums}.wbAqUnit{margin-top:4px;font:500 14px/20px var(--font)}.wbPollenAir{position:absolute;top:0;right:0;bottom:62px;left:0;overflow:hidden;pointer-events:none}.wbFloat{position:absolute;left:-12%;animation:wbFloat linear infinite}.wbBob{display:block;animation:wbBob ease-in-out infinite alternate}@keyframes wbFloat{0%{left:-12%}to{left:106%}}@keyframes wbBob{0%{transform:translateY(-6px) rotate(-14deg)}to{transform:translateY(8px) rotate(16deg)}}.wbFloat svg{display:block}.wbSeed svg{width:calc(20px * var(--s));height:calc(28px * var(--s))}.wbGrain svg{width:calc(10px * var(--s));height:calc(10px * var(--s))}.wbStem svg{width:calc(9px * var(--s));height:calc(26px * var(--s))}.wbSeed{color:var(--text);opacity:.7}.wbGrain{color:#e9c46a;opacity:.85}.wbStem{color:#a3b18a;opacity:.75}#app.light .wbGrain{color:#c99a1e}#app.light .wbStem{color:#7d8c5f}@media (prefers-reduced-motion:reduce){.wbFloat,.wbBob{animation:none}.wbFloat{left:var(--x)}}.wbPush{display:block;transition:transform .35s cubic-bezier(.2,.8,.3,1)}.wbCallout.wbAdvice>span:first-child{color:var(--text)}.wbCard.wbSquare.wbGraphCard{height:100%;min-height:0}.wbGraphCard .wbHead .wbBack{margin:-4px -6px 0 auto}.wbGraphCard .wbRangeBtn{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;max-width:100%;height:32px;padding:0 8px 0 10px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:600 12px/16px var(--font-tile);cursor:pointer}.wb button.wbRangeBtn{border-radius:12px!important}.wbRangeBtn>span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRangeBtn .wbIcon{flex:none;width:16px;height:16px;fill:currentColor}.wbRangeBtn[aria-expanded=true]{background:var(--bright);color:var(--on-bright)}.wbItem:has(.wbRangePick){position:relative;z-index:30}.wbRangePick{position:absolute;top:116px;left:18px;z-index:30;display:flex;flex-direction:column;gap:12px;width:248px;box-sizing:border-box;padding:12px;border-radius:24px;background:var(--card);box-shadow:var(--hc-hair-all),0 18px 40px #00000059}.wbRangePick.wbPickRight{left:auto;right:18px}.wbRangePresets{display:flex;flex-direction:column;gap:2px}.wb .wbRangePreset{height:32px;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--text);font:400 14px/20px var(--font);text-align:left;cursor:pointer}.wb .wbRangePreset:hover{background:var(--tile)}.wb .wbRangePreset[aria-pressed=true]{background:var(--bright);color:var(--on-bright);font-weight:600}.wbRangeDates{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:12px;box-shadow:inset 0 .4px 0 var(--line)}.wbRangeDates label{display:grid;gap:4px;min-width:0;color:var(--muted);font:400 12px/16px var(--font)}.wbRangeDates input{width:100%;min-width:0;height:32px;box-sizing:border-box;padding:0 6px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 12px/16px var(--font);color-scheme:inherit}.wb .wbRangeApply{height:32px;padding:0 14px;border:0;border-radius:999px!important;background:var(--bright);color:var(--on-bright);font:600 12px/16px var(--font-tile);cursor:pointer}.wbGraphCard .wbGraph{flex:1;height:auto;min-height:0}`, Nf = '#app .mvPv{position:relative;transform:perspective(var(--pv-persp)) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--sc,1));transition:transform var(--pv-ret) var(--pv-ease)}#app .mvPv.mvMoving{transition:transform 70ms linear}#app .mvPv:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;opacity:0;mix-blend-mode:soft-light;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,var(--pv-shine)),transparent var(--pv-size));transition:opacity var(--pv-ret) ease}#app .mvPv.mvLit:after{opacity:1}#app .tfBar{--mv-c:var(--light-soft,var(--primary));transform-origin:center;transition:box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}#app .tfBar.mvHover{box-shadow:0 0 var(--ab-blur) var(--ab-spread) color-mix(in srgb,var(--mv-c) var(--ab-str),transparent);transition-duration:var(--ab-in)}#app .tfBar.mvHold{box-shadow:0 0 var(--ab-blur2) var(--ab-spread2) color-mix(in srgb,var(--mv-c) var(--ab-str2),transparent);transform:var(--ab-grow);transition-duration:var(--ab-in)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>:is(svg,ha-icon,ha-state-icon,span){transition:scale var(--ih-dur) var(--ih-ease)}@media (hover:hover){#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-s)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover:before{opacity:1}}:where(#app button.tfIcon,#app .tfBack,#app .tfEditChip,#app .tfTrayBtn,#app [data-wb=graph-close]){position:relative}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;background:color-mix(in srgb,currentColor var(--ih-tint),transparent);opacity:0;transition:opacity var(--ih-dur) var(--ih-ease)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):active>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-p)}#app .mvSegInd{position:absolute;z-index:0;pointer-events:none}#app .mvSegMoving>button{position:relative;z-index:1;background-color:transparent!important;box-shadow:none!important;transition:none!important}#app .tfMoreBackdrop{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}#app .toast.tfToast{min-height:58px;box-sizing:border-box;padding:9px 18px 9px 9px;gap:14px;border-radius:29px;font-size:18px;line-height:1.2}#app .toast .mvTick{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--mv-ok);color:#fff}#app .toast .mvTick svg{width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}#app .toast .mvToastText{font-weight:600}#app .toast .toastAction{font-size:16px;margin-left:2px}#app .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}#app{--ol-l:68%;--mv-ok:#4cc38a}#app.light{--ol-l:48%;--mv-ok:#1f7a4d}#app .tfAreaPanel:has(>.mvEdge){isolation:isolate;position:relative}#app .mvEdge,#app .mvEdgeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity var(--ol-in) ease-out}#app .mvEdgeFill{z-index:-1;background:hsl(var(--ol-h) 97% var(--ol-l));mix-blend-mode:soft-light;opacity:clamp(0,calc(var(--ol-fill) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-fill));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app .mvEdge{z-index:5}#app .mvEdge:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l));opacity:clamp(0,calc(var(--ol-border) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-border));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%));mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%))}#app .mvEdge>i{position:absolute;top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;border-radius:inherit;mix-blend-mode:plus-lighter;opacity:clamp(0,calc(var(--ol-glow) * (var(--edge-proximity,0) - var(--ol-esens)) / (100 - var(--ol-esens))),var(--ol-glow));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}#app .mvEdge>i:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;--s:var(--ol-size);box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l) / 60%),inset 0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),inset 0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),inset 0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(22.4px*var(--s)) calc(1.6px*var(--s)) hsl(var(--ol-h) 97% var(--ol-l) / 10%)}#app :not(.mvLitEdge)>:is(.mvEdge,.mvEdgeFill){opacity:0;transition:opacity var(--ol-out) ease-out}@media (prefers-reduced-motion:reduce){#app .mvPv{transform:none!important}#app .mvPv:after{display:none}#app .tfBar.mvHold{transform:none}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>*{scale:none!important}}#app .tfBoardItem.mvDrag{scale:none}#app.tfEditing.tfBoardReady .tfBoardItem:not(.tfDragging){transition:left .42s cubic-bezier(.34,1.46,.64,1),top .42s cubic-bezier(.34,1.46,.64,1),height .42s cubic-bezier(.34,1.46,.64,1)}', Hf = `<main id="app"><div class="shell">
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
`, Un = {
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
}, zn = (n) => n < 0 ? 0 : n > 1 ? 1 : n, Pp = (n, l, i) => n + (l - n) * i, gp = (n) => {
  const l = String(n || "#000000").trim().replace("#", ""), i = l.length === 3 ? l.split("").map((u) => u + u).join("") : l;
  return [0, 2, 4].map((u) => parseInt(i.slice(u, u + 2), 16) || 0);
}, If = (n) => "#" + n.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), Np = {}, ba = (n, l, i) => {
  const u = n + l + i;
  return Np[u] || (Np[u] = If(gp(n).map((v, x) => v + (gp(l)[x] - v) * i)));
}, Hp = {}, mc = (n) => Hp[n] || (Hp[n] = gp(n)), $c = (n, l, i, u) => (v) => {
  if (v <= 0) return 0;
  if (v >= 1) return 1;
  let x = 0, k = 1, A = v;
  for (let I = 0; I < 18; I++)
    A = (x + k) / 2, 3 * (1 - A) * (1 - A) * A * n + 3 * (1 - A) * A * A * i + A * A * A < v ? x = A : k = A;
  return 3 * (1 - A) * (1 - A) * A * l + 3 * (1 - A) * A * A * u + A * A * A;
}, Ff = { std: $c(0.2, 0, 0, 1), acc: $c(0.3, 0, 1, 1), dec: $c(0, 0, 0, 1) };
function Cc(n, l) {
  const i = String(n || "");
  return (i === "sunny" || i === "clear-night" ? "clear" : i === "partlycloudy" ? "partly" : i === "fog" ? "fog" : i === "lightning" || i === "lightning-rainy" ? "storm" : i === "snowy" || i === "snowy-rainy" ? "snow" : i === "rainy" || i === "pouring" || i === "hail" ? "rain" : "cloudy") + "/" + (i === "clear-night" || l ? "night" : "day");
}
function Ou(n) {
  const l = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return l.partly = [ba(l.clear[0], l.cloudy[0], 0.12), ba(l.clear[1], l.cloudy[1], 0.12)], l.storm = [ba(l.rain[0], "#000000", 0.22), ba(l.rain[1], "#000000", 0.22)], l;
}
const vp = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], bp = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], wp = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function xp(n, l = Un) {
  const i = { ...Un, ...l }, u = Ou(i), v = String(n).split("/"), x = u[v[0]] ? v[0] : "clear", k = v[1] === "night", A = u[x][k ? 1 : 0], I = {
    night: k,
    clearness: x === "clear" ? 1 : x === "partly" ? 0.7 : 0.25,
    sky: A,
    skyStops: [A],
    skyT: 0,
    sun: { x: 45, y: k ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: k ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: k ? 1 : 0 },
    stars: vp.map(() => ({ o: 0 })),
    rain: bp.map(() => ({ o: 0, dy: -16 })),
    snow: wp.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, M = (W) => vp.map(() => ({ o: W }));
  return x === "clear" ? k ? (I.moon.o = 1, I.stars = M(1)) : I.sun.o = 1 : x === "partly" ? (I.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: k ? 1 : 0 }, k ? (I.moon = { x: 34, y: 33, d: 48, o: 1 }, I.stars = M(0.7)) : I.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : x === "cloudy" || x === "fog" ? (I.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: k ? 1 : 0 }, k ? I.moon = { x: 40, y: 36, d: 40, o: 0 } : I.sun = { x: 40, y: 36, r: 20, o: 0 }) : (I.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, k ? I.moon = { x: 38, y: 28, d: 36, o: 0 } : I.sun = { x: 38, y: 28, r: 18, o: 0 }, x === "snow" ? I.snow = wp.map(() => ({ o: 1, dy: 0 })) : I.rain = bp.map((W, F) => ({ o: x === "storm" && F === 1 ? 0 : 1, dy: 0 })), x === "storm" && (I.bolt = { o: 1, dy: 0 })), I;
}
const Ip = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function Of(n, l, i, u = Un, v = !1) {
  const x = { ...Un, ...u }, k = (V, G) => V > 0.01 && G > 0.01 ? "stay" : V > 0.01 ? "leave" : G > 0.01 ? "enter" : "none", A = (V, G, pe, ee) => {
    const J = V[0] + G * ee, U = V[1] - (pe - 1 - G) * ee;
    return Ff[V[2]](zn((i - J) / Math.max(1e-3, U - J)));
  }, I = (V, G, pe, ee = 0, J = 1, U = 0) => {
    const me = k(V.o, G.o);
    if (me === "none") return { ...G, o: 0 };
    const ce = A(Ip[pe][me], ee, J, U), ke = {};
    for (const oe in G) ke[oe] = v && me !== "stay" && oe !== "o" ? me === "leave" ? V[oe] : G[oe] : Pp(V[oe], G[oe], ce);
    return ke;
  }, M = A(Ip.sky, 0, 1, 0);
  let W, F;
  if (n.night !== l.night) {
    const V = Math.min(n.clearness, l.clearness), G = ba(ba(n.sky, l.sky, 0.5), x.dusk, 0.6 * V);
    W = M < 0.5 ? ba(n.sky, G, M * 2) : ba(G, l.sky, M * 2 - 1), F = V > 0.5 ? [n.sky, x.dusk, l.sky] : [n.sky, l.sky];
  } else
    W = ba(n.sky, l.sky, M), F = [n.sky, l.sky];
  return {
    night: i < 0.5 ? n.night : l.night,
    clearness: Pp(n.clearness, l.clearness, i),
    sky: W,
    skyStops: F,
    skyT: M,
    sun: I(n.sun, l.sun, "body"),
    moon: I(n.moon, l.moon, "body"),
    cloud: I(n.cloud, l.cloud, "cloud"),
    stars: l.stars.map((V, G) => I(n.stars[G], V, "fx", G, l.stars.length, 0.05)),
    rain: l.rain.map((V, G) => I(n.rain[G], V, "fx", G, l.rain.length, 0.05)),
    snow: l.snow.map((V, G) => I(n.snow[G], V, "fx", G, l.snow.length, 0.05)),
    bolt: I(n.bolt, l.bolt, "fx")
  };
}
const qf = [
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
], jn = (n, l) => (qf[(l & 7) * 8 + (n & 7)] + 0.5) / 64, Wf = 0, Mp = 1, Sp = 2, Cp = 3, Tp = 4, Vn = 5, kl = 6, ts = 7, Lp = 8, xc = (n, l) => l <= 0.6665 && ((n - 0.5) * (n - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && l >= 0.416), Vf = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], jf = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((n) => [n[0] * 13 / 11, n[1] * 28 / 24]), qu = (n, l, i) => {
  let u = !1;
  for (let v = 0, x = n.length - 1; v < n.length; x = v++) {
    const k = n[v], A = n[x];
    k[1] > i != A[1] > i && l < (A[0] - k[0]) * (i - k[1]) / (A[1] - k[1]) + k[0] && (u = !u);
  }
  return u;
};
function Wu(n, { size: l = 90, px: i = 2, oneBit: u = !1, colors: v = Un, ink: x = "#26221e", paper: k = "#fbf9f6", clock: A = 0, idle: I = !1 } = {}) {
  const M = { ...Un, ...v }, W = Math.sin, F = Math.PI * 2, V = Math.max(6, Math.round(l / i)), G = V / 90, pe = I ? Math.floor(A / 100) * 100 : 0, ee = I ? W(F * pe / 3600) : 0, J = I ? 1.8 * W(F * pe / 6400) : 0, U = I ? 0.9 * W(F * pe / 4100) : 0, me = I ? 0.8 * W(F * pe / 5200) : 0, ce = pe / 3400 % 1, ke = I && n.bolt.o > 0.5 && (ce < 0.04 || ce > 0.08 && ce < 0.11), oe = new Array(V * V), ne = new Uint8Array(V * V), te = (T, B, q, R, de) => {
    q == null || T < 0 || B < 0 || T >= V || B >= V || (R >= 1 || R > jn(T + 5, B + 3)) && (oe[B * V + T] = q, ne[B * V + T] = de);
  }, E = (T, B, q, R) => {
    for (let de = Math.max(0, Math.floor(B - q) - 1); de <= Math.min(V - 1, B + q + 1); de++) for (let ue = Math.max(0, Math.floor(T - q) - 1); ue <= Math.min(V - 1, T + q + 1); ue++) R(ue, de, ue + 0.5 - T, de + 0.5 - B);
  }, Ce = n.skyStops || [n.sky], le = n.skyT || 0;
  for (let T = 0; T < V; T++) {
    const B = n.night ? zn(1 - (T + 0.5) / (V * 0.7)) * 0.85 : zn(((T + 0.5) / V - 0.35) / 0.65) * 0.85;
    for (let q = 0; q < V; q++) {
      let R = Ce[0];
      if (Ce.length > 1) {
        const de = le * (Ce.length - 1), ue = Math.min(Ce.length - 2, Math.floor(de));
        R = de - ue > jn(q, T) ? Ce[ue + 1] : Ce[ue];
      }
      B > jn(q + 2, T + 5) && (R = n.night ? ba(R, "#000000", 0.28) : ba(R, "#ffffff", 0.2)), oe[T * V + q] = ke ? ba(R, "#ffffff", 0.25) : R;
    }
  }
  if (n.sun.o > 0.01) {
    const T = n.sun.x * G, B = n.sun.y * G, q = Math.max(1, n.sun.r * G);
    if (I) {
      const R = q * (1.45 + 0.06 * ee), de = ba(M.sun, "#ffffff", 0.55);
      if (E(T, B, R, (ue, ge, Se, Te) => {
        const $e = Math.sqrt(Se * Se + Te * Te);
        $e > q && $e < R && te(ue, ge, de, 0.26 * (1 - ($e - q) / (R - q)) * n.sun.o, Wf);
      }), n.sun.o > 0.5) {
        const ue = Math.floor(pe / 500) % 2, ge = Math.max(1, q * 0.22);
        for (let Se = 0; Se < 8; Se++) if (Se % 2 === ue) for (let Te = q + 1.5; Te < q + 1.5 + ge; Te += 0.7) te(Math.floor(T + Math.cos(Se * Math.PI / 4) * Te), Math.floor(B + Math.sin(Se * Math.PI / 4) * Te), M.sun, n.sun.o, Lp);
      }
    }
    E(T, B, q, (R, de, ue, ge) => {
      if (ue * ue + ge * ge > q * q) return;
      const Se = ((ue * 0.643 + ge * 0.766) / q + 1) / 2;
      te(R, de, zn((Se - 0.62) / 0.38) > jn(R, de) ? M.sunEdge : M.sun, n.sun.o, Mp);
    });
  }
  if (vp.forEach((T, B) => {
    const q = n.stars[B].o;
    if (q < 0.01) return;
    const R = Math.floor(T[0] * G), de = Math.floor(T[1] * G), ue = I ? (Math.floor(pe / 300) + B * 3) % 6 : 0;
    if (ue === 5) return;
    const ge = Math.round(T[2] * G * (ue === 4 ? 0.3 : ue < 2 ? 1 : 0.6));
    te(R, de, M.star, q, ts);
    for (let Se = 1; Se <= ge; Se++) {
      const Te = Se === ge && ge > 1 ? ba(M.star, n.sky, 0.5) : M.star;
      te(R - Se, de, Te, q, ts), te(R + Se, de, Te, q, ts), te(R, de - Se, Te, q, ts), te(R, de + Se, Te, q, ts);
    }
  }), n.moon.o > 0.01) {
    const T = Math.max(1.5, n.moon.d * G * 0.37), B = n.moon.x * G, q = n.moon.y * G + (I && me > 0.4 ? -1 : 0), R = B + 0.547 * T, de = q - 0.503 * T, ue = 0.82 * T, ge = ba(M.moon, "#ffffff", 0.6);
    E(B, q, T, (Se, Te, $e, tt) => {
      if ($e * $e + tt * tt > T * T) return;
      const Za = Se + 0.5 - R, Ie = Te + 0.5 - de;
      Za * Za + Ie * Ie <= ue * ue || te(Se, Te, zn((tt + T) / (2 * T) * 1.1 - 0.1) > jn(Se, Te) ? M.moon : ge, n.moon.o, Sp);
    });
  }
  const qe = Math.max(2, Math.round(15.65 * G)), ie = Math.max(1, Math.round(5.87 * G * 0.5));
  bp.forEach((T, B) => {
    const q = n.rain[B];
    let R = q.dy, de = q.o;
    if (de < 0.01) return;
    if (I) {
      const Se = (pe / 950 + B / 3) % 1;
      R += -5 + Se * 14, de *= Se < 0.18 ? Se / 0.18 : Se > 0.72 ? (1 - Se) / 0.28 : 1;
    }
    const ue = (T[0] + 3 + J) * G, ge = (T[1] + R) * G;
    for (let Se = 0; Se < qe; Se++) for (let Te = 0; Te < ie; Te++) te(Math.floor(ue - 0.208 * Se) + Te, Math.floor(ge) + Se, M.rain, de, Tp);
  });
  const Ze = Math.max(0, Math.round(7.34 * G / 2.6));
  if (wp.forEach((T, B) => {
    const q = n.snow[B];
    let R = q.dy, de = 0, ue = q.o;
    if (ue < 0.01) return;
    if (I) {
      const Te = (pe / 3200 + B / 5) % 1;
      R += -6 + Te * 14, de = 1.5 * W(F * (Te * 1.5 + B / 5)), ue *= Te < 0.2 ? Te / 0.2 : Te > 0.75 ? (1 - Te) / 0.25 : 1;
    }
    const ge = Math.floor((T[0] + 3.67 + de + J) * G), Se = Math.floor((T[1] + 3.67 + R) * G);
    te(ge, Se, M.snow, ue, Vn);
    for (let Te = 1; Te <= Ze; Te++)
      te(ge - Te, Se, M.snow, ue, Vn), te(ge + Te, Se, M.snow, ue, Vn), te(ge, Se - Te, M.snow, ue, Vn), te(ge, Se + Te, M.snow, ue, Vn), Ze > 1 && Te < Ze && (te(ge - Te, Se - Te, M.snow, ue, Vn), te(ge + Te, Se - Te, M.snow, ue, Vn), te(ge - Te, Se + Te, M.snow, ue, Vn), te(ge + Te, Se + Te, M.snow, ue, Vn));
  }), n.bolt.o > 0.01)
    if (V >= 30) {
      const T = 39 + J, B = 50 + n.bolt.dy;
      for (let q = Math.floor(B * G); q <= (B + 28) * G; q++) for (let R = Math.floor(T * G); R <= (T + 13) * G; R++)
        qu(jf, (R + 0.5) / G - T, (q + 0.5) / G - B) && te(R, q, M.sun, n.bolt.o, kl);
    } else {
      const T = V / 18, B = 7, q = 10 + Math.round(n.bolt.dy * 0.2);
      Vf.forEach((R, de) => R.split("").forEach((ue, ge) => {
        if (ue !== "#") return;
        const Se = Math.floor((B + ge) * T), Te = Math.floor((q + de) * T);
        for (let $e = Te; $e < Math.max(Te + 1, Math.floor((q + de + 1) * T)); $e++) for (let tt = Se; tt < Math.max(Se + 1, Math.floor((B + ge + 1) * T)); tt++) te(tt, $e, M.sun, n.bolt.o, kl);
      }));
    }
  if (n.cloud.o > 0.01) {
    const T = Math.max(3, n.cloud.w * G), B = T * 0.6665, q = (n.cloud.x + J) * G - T / 2, R = (n.cloud.y + U) * G - B / 2, de = ba(M.cloudDay, M.cloudNight, Math.round(n.cloud.f * 4) / 4), ue = ba(de, "#000000", 0.16);
    for (let ge = Math.max(0, Math.floor(R) - 1); ge <= Math.min(V - 1, R + B + 1); ge++) for (let Se = Math.max(0, Math.floor(q) - 1); Se <= Math.min(V - 1, q + T + 1); Se++) {
      const Te = (Se + 0.5 - q) / T, $e = (ge + 0.5 - R) / T;
      xc(Te, $e) && te(Se, ge, !xc(Te, $e + 1 / T) || zn(($e - 0.42) / 0.25) * 0.8 > jn(Se, ge) ? ue : de, n.cloud.o, Cp);
    }
  }
  return Vu(oe, ne, V, V, { oneBit: u, ink: x, paper: k, snowInk: !n.night });
}
function Vu(n, l, i, u, { oneBit: v, ink: x, paper: k, snowInk: A }) {
  const I = new Uint8ClampedArray(i * u * 4), M = mc(x), W = mc(k);
  for (let F = 0; F < u; F++) for (let V = 0; V < i; V++) {
    const G = F * i + V, pe = l[G];
    if (n[G] == null) continue;
    let ee = mc(n[G]);
    if (v) {
      let J;
      pe === Tp || pe === Lp ? J = !0 : pe === Vn ? J = A : pe === ts || pe === kl ? J = !1 : J = Math.round((0.2126 * ee[0] + 0.7152 * ee[1] + 0.0722 * ee[2]) / 255 * 4) / 4 <= jn(V, F), (pe === Mp || pe === Sp || pe === Cp || pe === kl) && (V > 0 && l[G - 1] !== pe || V < i - 1 && l[G + 1] !== pe || F > 0 && l[G - i] !== pe || F < u - 1 && l[G + i] !== pe) && (J = !0), ee = J ? M : W;
    }
    I[G * 4] = ee[0], I[G * 4 + 1] = ee[1], I[G * 4 + 2] = ee[2], I[G * 4 + 3] = 255;
  }
  return { w: i, h: u, data: I };
}
const zf = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Gf = (n) => Cc(n, !1).split("/")[0], Xc = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let l = Math.imul(n ^ n >>> 15, 1 | n);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, Uf = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Yf = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Zf = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Kf = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", $f = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Xf = [".##", "##.", ".#.", "#.."];
function ju(n, { width: l, height: i, colors: u, wave: v = 0.38, soft: x = 6, glow: k = 0.6 }) {
  const A = { ...Un, dawn: "#e5a77e", ...u }, I = Ou(A), M = l, W = i, F = M / 6, V = F / 2, G = Math.PI * 2, pe = n.length ? n : [{ cond: "cloudy", night: !1 }], ee = [...Array(12)].map((ce, ke) => {
    const oe = pe[Math.min(ke, pe.length - 1)], ne = Gf(oe.cond), te = ke % 2 === 1;
    return { cond: oe.cond, k: ne, night: te, sky: I[ne][te ? 1 : 0], cover: zf[ne] };
  }), J = (ce) => W * (0.5 - v * Math.cos(G * (ce / F - 0.25)));
  return { C: A, S: ee, W: M, H: W, cw: F, sw: V, TAU: G, yb: J, side: (ce, ke, oe) => {
    const ne = (ce ? J(ke) - oe : oe - J(ke)) / Math.max(3, x * 1.4) + 0.5;
    return ne <= 0 ? 0 : ne >= 1 ? 1 : ne;
  }, glowAt: (ce) => {
    const ke = ((ce / F - 0.25) % 1 + 1) % 1, oe = Math.max(0, Math.min(5, Math.round(ce / F - 0.25))), ne = Math.max(0, Math.min(5, Math.round(ce / F - 0.75))), te = 1 - (ee[2 * oe].cover + ee[2 * ne + 1].cover) / 2, E = Math.sin(Math.PI * Math.min(1, Math.max(0, J(ce) / W)));
    return { c: ke < 0.5 ? A.dusk : A.dawn, a: k * (0.2 + 0.8 * te) * E * E };
  }, soft: x, tw: F * 0.3, sy: W / 90 };
}
function zu(n, { clock: l = 0, ambient: i = !1, seed: u = 1 }) {
  const { S: v, sw: x, side: k, C: A, TAU: I, sy: M } = n, W = l, F = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return v.forEach((V, G) => {
    const pe = Xc(u * 977 + G * 131 + 7), ee = (G + 0.5) * x, J = V.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[V.k] : 0;
    for (let U = 0; U < J; U++) {
      const me = ee + (pe() - 0.5) * x * 1.6, ce = (6 + pe() * 76) * M, ke = pe() < 0.35, oe = 1.8 + pe() * 1.6, ne = k(!0, me, ce) * (ke ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(I * W / 2600 + U * 1.7 + G) : 1);
      ne >= 0.03 && F.stars.push({ x: me, y: ce, big: ke, size: oe, o: ne });
    }
    if (!V.night && (V.k === "clear" || V.k === "partly")) {
      const U = ee + (pe() - 0.5) * x * 0.3, me = Math.min(15, x * 0.29);
      F.suns.push({ x: U, y: 32 * M, rad: me, halo: me * 2.8 * (i ? 1 + 0.07 * Math.sin(I * W / 3600 + G) : 1) });
    }
    if (V.night && (V.k === "clear" || V.k === "partly")) {
      const U = Math.min(0.78, x * 0.55 / 34), me = ee - 23 * U + (pe() - 0.5) * x * 0.2;
      F.moons.push({ x: me + 23 * U, y: (4 + (i ? 0.8 * Math.sin(I * W / 5200 + G) : 0)) * M + 23 * U, d: 46 * U });
    }
  }), v.forEach((V, G) => {
    const pe = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[V.k];
    if (!pe) return;
    const ee = Xc(u * 577 + G * 71 + 3), J = (G + 0.5) * x, U = V.k === "rain" || V.k === "storm" || V.night ? A.cloudNight : A.cloudDay, me = V.night ? 0.82 : V.k === "storm" ? 0.75 : 1;
    for (let ce = 0; ce < pe; ce++) {
      const ke = x / 46 * (V.k === "partly" ? 0.85 : 0.75 + ee() * 0.55), oe = J + (V.k === "partly" ? x * 0.12 : (ee() - 0.5) * x * 1.05), ne = (V.k === "partly" ? 40 : 6 + ee() * 26) * M, te = i ? 2.5 * Math.sin(I * W / 9e3 + G * 1.3 + ce * 2.1) : 0, E = i ? 0.9 * Math.sin(I * W / 6100 + G + ce) : 0;
      F.clouds.push({ x: oe - 23 * ke + te, y: ne - 15.33 * ke + E, w: 46 * ke, h: 30.66 * ke, fill: U, o: me * (pe > 1 && ce === 0 ? 0.85 : 1) });
    }
  }), v.forEach((V, G) => {
    const pe = Xc(u * 313 + G * 29 + 11), ee = (G + 0.5) * x, J = V.cond === "pouring" ? 16 : V.cond === "rainy" || V.cond === "hail" ? 9 : V.cond === "lightning-rainy" ? 12 : V.cond === "snowy-rainy" ? 5 : 0;
    for (let me = 0; me < J; me++) {
      let ce = ee + (pe() - 0.5) * x * 1.05, ke = 44 + pe() * 36, oe = 1;
      if (i) {
        const te = ((ke - 44 + W * 0.04) % 36 + 36) % 36;
        ce -= 0.21 * (te - (ke - 44)), ke = 44 + te, oe = Math.min(1, te / 6, (36 - te) / 6);
      }
      ke *= M;
      const ne = k(V.night, ce, ke) * oe;
      ne >= 0.05 && F.drops.push({ x: ce, y: ke, o: ne });
    }
    const U = V.cond === "snowy" ? 11 : V.cond === "snowy-rainy" ? 6 : 0;
    for (let me = 0; me < U; me++) {
      let ce = ee + (pe() - 0.5) * x * 1.05, ke = 40 + pe() * 44, oe = 1;
      if (i) {
        const te = ((ke - 40 + W * 9e-3) % 44 + 44) % 44;
        ke = 40 + te, ce += 1.6 * Math.sin(I * W / 2800 + me * 1.9 + G), oe = Math.min(1, te / 6, (44 - te) / 6);
      }
      ke *= M;
      const ne = k(V.night, ce, ke) * oe;
      ne >= 0.05 && F.flakes.push({ x: ce, y: ke, o: ne });
    }
    if (V.k === "fog") {
      const me = V.night ? "#c8ccd6" : "#ffffff", ce = V.night ? 0.28 : 0.62, ke = i ? 4 * Math.sin(I * W / 8e3 + G) : 0;
      for (let oe = 0; oe < 4; oe++) F.fogs.push({ x: ee - x * 0.75 + oe % 2 * x * 0.18 + (oe % 2 ? ke : -ke), y: (30 + oe * 13) * M, w: x * 1.3, c: me, a: ce });
    }
    if (V.k === "storm") {
      const me = (W / 3400 + G * 0.37) % 1;
      F.bolts.push({ x: ee + (pe() - 0.5) * x * 0.3 - 5, y: 36 * M, o: i && !(me < 0.05 || me > 0.09 && me < 0.12) ? 0.8 : 1 });
    }
  }), F;
}
function Jf(n, l, i, u, v, x, k, A) {
  const { S: I, C: M, cw: W, yb: F, glowAt: V, soft: G, tw: pe, sy: ee } = n, J = new Array(i * u), U = new Uint8Array(i * u), me = new Uint8Array(i * u), ce = (T, B, q, R, de) => {
    q == null || T < 0 || B < 0 || T >= i || B >= u || (R >= 1 || R > jn(T + 5, B + 3)) && (J[B * i + T] = q, U[B * i + T] = de);
  }, ke = (T, B, q, R) => {
    for (let de = Math.max(0, Math.floor(B - q) - 1); de <= Math.min(u - 1, B + q + 1); de++) for (let ue = Math.max(0, Math.floor(T - q) - 1); ue <= Math.min(i - 1, T + q + 1); ue++) R(ue, de, ue + 0.5 - T, de + 0.5 - B);
  }, oe = (T, B, q) => {
    for (let de = 0; de < T.length - 1; de++) {
      const ue = (de + B) * W;
      if (q < ue - pe / 2) return [T[de], T[de], 0];
      if (q <= ue + pe / 2) return [T[de], T[de + 1], (q - ue + pe / 2) / pe];
    }
    const R = T[T.length - 1];
    return [R, R, 0];
  }, ne = I.filter((T) => !T.night).map((T) => T.sky), te = I.filter((T) => T.night).map((T) => T.sky), E = G / x, Ce = 16 * ee / x;
  for (let T = 0; T < i; T++) {
    const B = (T + 0.5) * v, q = F(B) / x, R = oe(ne, 0.75, B), de = oe(te, 1.25, B), ue = V(B);
    for (let ge = 0; ge < u; ge++) {
      const Se = jn(T, ge), Te = ge + 0.5 - q, $e = (E > 0.01 ? zn(0.5 + Te / E) : Te > 0 ? 1 : 0) > Se;
      let tt = $e ? R[2] > Se ? R[1] : R[0] : de[2] > Se ? de[1] : de[0];
      ($e ? zn(((ge + 0.5) / u - 0.45) / 0.55) * 0.7 : zn(1 - (ge + 0.5) / (u * 0.55)) * 0.7) > jn(T + 2, ge + 5) && (tt = $e ? ba(tt, "#ffffff", 0.18) : ba(tt, "#000000", 0.25)), $e && Te >= 0 && Te < Ce && ue.a * 1.3 * (1 - Te / Ce) > jn(T + 6, ge + 1) && (tt = ue.c), J[ge * i + T] = tt, me[ge * i + T] = $e ? 0 : 1;
    }
  }
  const le = ba(M.sun, "#ffffff", 0.55), qe = ba(M.moon, "#ffffff", 0.6);
  l.stars.forEach((T) => {
    const B = Math.floor(T.x / v), q = Math.floor(T.y / x);
    if (B < 0 || q < 0 || B >= i || q >= u || !me[q * i + B] || T.o < 0.15) return;
    const R = T.o > 0.45 ? M.star : ba(M.star, J[q * i + B], 0.5), de = T.big && T.o > 0.6 ? Math.floor(T.size / v) : 0;
    ce(B, q, R, 1, ts);
    for (let ue = 1; ue <= de; ue++) [[B - ue, q], [B + ue, q], [B, q - ue], [B, q + ue]].forEach((ge) => {
      ge[0] >= 0 && ge[1] >= 0 && ge[0] < i && ge[1] < u && me[ge[1] * i + ge[0]] && ce(ge[0], ge[1], R, 1, ts);
    });
  }), l.suns.forEach((T) => {
    const B = Math.max(1.5, T.rad / v), q = T.x / v, R = T.y / x, de = T.halo / v * 0.85;
    if (ke(q, R, de, (ue, ge, Se, Te) => {
      const $e = Math.sqrt(Se * Se + Te * Te);
      $e > B && $e < de && !me[ge * i + ue] && ce(ue, ge, le, 0.3 * (1 - ($e - B) / (de - B)), 0);
    }), A) {
      const ue = Math.floor(k / 500) % 2, ge = Math.max(1, B * 0.3);
      for (let Se = 0; Se < 8; Se++) if (Se % 2 === ue) for (let Te = B + 1.2; Te < B + 1.2 + ge; Te += 0.7) ce(Math.floor(q + Math.cos(Se * Math.PI / 4) * Te), Math.floor(R + Math.sin(Se * Math.PI / 4) * Te), M.sun, 1, Lp);
    }
    ke(q, R, B, (ue, ge, Se, Te) => {
      Se * Se + Te * Te <= B * B && ce(ue, ge, zn(((Te / B + 1) / 2 - 0.6) / 0.4) > jn(ue, ge) ? M.sunEdge : M.sun, 1, Mp);
    });
  }), l.moons.forEach((T) => {
    const B = Math.max(1.5, T.d * 0.37 / v), q = T.x / v, R = T.y / x, de = q + 0.547 * B, ue = R - 0.503 * B, ge = 0.82 * B;
    ke(q, R, B, (Se, Te, $e, tt) => {
      if ($e * $e + tt * tt > B * B) return;
      const Za = Se + 0.5 - de, Ie = Te + 0.5 - ue;
      Za * Za + Ie * Ie > ge * ge && ce(Se, Te, zn((tt + B) / (2 * B) * 1.1 - 0.1) > jn(Se, Te) ? M.moon : qe, 1, Sp);
    });
  }), l.clouds.forEach((T) => {
    const B = Math.max(3, T.w / v), q = B * 0.6665, R = T.x / v, de = T.y / x, ue = ba(T.fill, "#000000", 0.16);
    for (let ge = Math.max(0, Math.floor(de) - 1); ge <= Math.min(u - 1, de + q + 1); ge++) for (let Se = Math.max(0, Math.floor(R) - 1); Se <= Math.min(i - 1, R + B + 1); Se++) {
      const Te = (Se + 0.5 - R) / B, $e = (ge + 0.5 - de) / B;
      xc(Te, $e) && ce(Se, ge, !xc(Te, $e + 1 / B) || zn(($e - 0.42) / 0.25) * 0.8 > jn(Se, ge) ? ue : T.fill, T.o, Cp);
    }
  }), l.fogs.forEach((T) => {
    const B = Math.floor(T.y / x), q = Math.max(B, Math.floor((T.y + 6 * ee) / x) - 1), R = Math.floor(T.x / v), de = Math.floor((T.x + T.w) / v);
    for (let ue = B; ue <= q; ue++) for (let ge = R; ge <= de; ge++) {
      const Se = (ge - R) / Math.max(1, de - R);
      ce(ge, ue, T.c, T.a * (Se < 0.25 ? Se / 0.25 : Se > 0.75 ? (1 - Se) / 0.25 : 1), 0);
    }
  });
  const ie = Math.max(2, Math.round(9 / x));
  l.drops.forEach((T) => {
    const B = T.x / v, q = Math.floor(T.y / x);
    for (let R = 0; R < ie; R++) ce(Math.floor(B - 0.208 * R * x / v), q + R, M.rain, T.o, Tp);
  });
  const Ze = Math.max(0, Math.round(4.4 / v / 2.6));
  return l.flakes.forEach((T) => {
    const B = Math.floor(T.x / v), q = Math.floor(T.y / x);
    ce(B, q, M.snow, T.o, Vn);
    for (let R = 1; R <= Ze; R++)
      ce(B - R, q, M.snow, T.o, Vn), ce(B + R, q, M.snow, T.o, Vn), ce(B, q - R, M.snow, T.o, Vn), ce(B, q + R, M.snow, T.o, Vn);
  }), l.bolts.forEach((T) => {
    if (v <= 3.5)
      for (let B = Math.floor(T.y / x); B <= (T.y + 24) / x; B++) for (let q = Math.floor(T.x / v); q <= (T.x + 11) / v; q++)
        qu($f, (q + 0.5) * v - T.x, (B + 0.5) * x - T.y) && ce(q, B, M.sun, 1, kl);
    else {
      const B = Math.round(T.x / v), q = Math.round(T.y / x);
      Xf.forEach((R, de) => R.split("").forEach((ue, ge) => {
        ue === "#" && ce(B + ge, q + de, M.sun, 1, kl);
      }));
    }
  }), { col: J, ids: U };
}
function Qf(n, l) {
  const i = l.px, u = Math.max(6, Math.round(l.width / i)), v = Math.max(6, Math.round(l.height / i)), x = l.width / u, k = l.height / v, A = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, I = (G) => {
    const pe = ju(G, l);
    return Jf(pe, zu(pe, { clock: A, ambient: l.ambient, seed: l.seed }), u, v, x, k, A, l.ambient);
  }, M = I(n), W = l.reveal == null ? 1 : zn(l.reveal);
  let F = M.col, V = M.ids;
  if (W < 1) {
    const G = l.prev ? I(l.prev) : null, pe = W * (u + 12);
    F = new Array(u * v), V = new Uint8Array(u * v);
    for (let ee = 0; ee < u * v; ee++) {
      const J = ee % u, U = ee / u | 0;
      (l.reduce ? W : zn((pe - J) / 12)) > jn(J, U) ? (F[ee] = M.col[ee], V[ee] = M.ids[ee]) : G ? (F[ee] = G.col[ee], V[ee] = G.ids[ee]) : (F[ee] = null, V[ee] = 255);
    }
  }
  return Vu(F, V, u, v, { oneBit: l.oneBit, ink: l.ink, paper: l.paper, snowInk: !1 });
}
function eh(n, l, i) {
  const u = i.width, v = i.height, x = i.reveal == null ? 1 : zn(i.reveal), k = (V, G) => {
    const pe = ju(G, i);
    th(V, pe, zu(pe, i));
  };
  if (n.clearRect(0, 0, u, v), x >= 1) {
    k(n, l);
    return;
  }
  if (i.prev && k(n, i.prev), i.reduce) {
    n.save(), n.globalAlpha = x, k(n, l), n.restore();
    return;
  }
  const A = n.canvas, I = A.__wxOff || (A.__wxOff = document.createElement("canvas"));
  (I.width !== A.width || I.height !== A.height) && (I.width = A.width, I.height = A.height);
  const M = I.getContext("2d");
  M.setTransform(n.getTransform()), M.clearRect(0, 0, u, v), k(M, l);
  const W = x * (u + 64) - 64, F = M.createLinearGradient(W, 0, W + 64, 0);
  F.addColorStop(0, "rgba(0,0,0,1)"), F.addColorStop(1, "rgba(0,0,0,0)"), M.globalCompositeOperation = "destination-in", M.fillStyle = F, M.fillRect(0, 0, u, v), M.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(I, 0, 0), n.restore();
}
function th(n, l, i) {
  const { W: u, H: v, S: x, C: k, cw: A, yb: I, glowAt: M, soft: W, tw: F, sy: V } = l, G = (le, qe) => {
    const ie = mc(le);
    return "rgba(" + ie[0] + "," + ie[1] + "," + ie[2] + "," + Math.max(0, Math.min(1, qe)).toFixed(3) + ")";
  }, pe = (le, qe) => {
    const ie = n.createLinearGradient(0, 0, u, 0);
    ie.addColorStop(0, le[0]);
    for (let Ze = 0; Ze < le.length - 1; Ze++) {
      const T = (Ze + qe) * A, B = (T - F / 2) / u, q = (T + F / 2) / u;
      B > 0 && B < 1 && ie.addColorStop(B, le[Ze]), q > 0 && q < 1 && ie.addColorStop(q, le[Ze + 1]);
    }
    return ie.addColorStop(1, le[le.length - 1]), ie;
  }, ee = Math.max(24, Math.ceil(u / 4)), J = (le, qe) => {
    n.beginPath();
    for (let ie = 0; ie <= ee; ie++) {
      const Ze = u * ie / ee, T = le == null ? 0 : I(Ze) + le;
      ie ? n.lineTo(Ze, T) : n.moveTo(Ze, T);
    }
    for (let ie = ee; ie >= 0; ie--) {
      const Ze = u * ie / ee;
      n.lineTo(Ze, I(Ze) + qe);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = pe(x.filter((le) => !le.night).map((le) => le.sky), 0.75), n.fillRect(0, 0, u, v);
  const U = n.createLinearGradient(0, 0, u, 0);
  for (let le = 0; le <= 64; le++) {
    const qe = M(u * le / 64);
    U.addColorStop(le / 64, G(qe.c, Math.min(1, qe.a)));
  }
  n.fillStyle = U;
  for (let le = 0; le < 8; le++)
    n.globalAlpha = 1 - le / 8, J(le * 2 * V, (le + 1) * 2 * V);
  n.fillStyle = pe(x.filter((le) => le.night).map((le) => le.sky), 1.25);
  const me = Math.max(0.5, W), ce = 6;
  n.globalAlpha = 1, J(null, -me);
  for (let le = 0; le < ce; le++)
    n.globalAlpha = 1 - (le + 0.5) / ce, J(-me + 2 * me * le / ce, -me + 2 * me * (le + 1) / ce);
  n.globalAlpha = 1;
  const ke = new Path2D(Zf), oe = new Path2D(Yf), ne = new Path2D(Uf), te = new Path2D(Kf);
  n.fillStyle = k.star, i.stars.forEach((le) => {
    n.globalAlpha = le.o, le.big ? (n.save(), n.translate(le.x, le.y), n.scale(le.size, le.size), n.fill(ke), n.restore()) : (n.beginPath(), n.arc(le.x, le.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const E = ba(k.sun, "#ffffff", 0.55);
  i.suns.forEach((le) => {
    const qe = n.createRadialGradient(le.x, le.y, 0, le.x, le.y, le.halo);
    qe.addColorStop(0, G(E, 0.42)), qe.addColorStop(0.7, G(E, 0)), n.fillStyle = qe, n.beginPath(), n.arc(le.x, le.y, le.halo, 0, Math.PI * 2), n.fill();
    const ie = n.createLinearGradient(0, le.y - le.rad, 0, le.y + le.rad);
    ie.addColorStop(0.6, k.sun), ie.addColorStop(1, k.sunEdge), n.fillStyle = ie, n.beginPath(), n.arc(le.x, le.y, le.rad, 0, Math.PI * 2), n.fill();
  });
  const Ce = ba(k.moon, "#ffffff", 0.6);
  i.moons.forEach((le) => {
    n.save(), n.translate(le.x - le.d / 2, le.y - le.d / 2), n.scale(le.d / 46, le.d / 46);
    const qe = n.createLinearGradient(0, 6, 0, 40);
    qe.addColorStop(0, Ce), qe.addColorStop(1, k.moon), n.fillStyle = qe, n.fill(oe), n.restore();
  }), i.clouds.forEach((le) => {
    n.save(), n.globalAlpha = le.o, n.translate(le.x, le.y), n.scale(le.w / 46, le.h / 30.66), n.translate(-4, -9.67), n.fillStyle = le.fill, n.fill(ne), n.restore();
  }), i.fogs.forEach((le) => {
    const qe = n.createLinearGradient(le.x, 0, le.x + le.w, 0);
    qe.addColorStop(0, G(le.c, 0)), qe.addColorStop(0.25, G(le.c, le.a)), qe.addColorStop(0.75, G(le.c, le.a)), qe.addColorStop(1, G(le.c, 0)), n.fillStyle = qe, n.fillRect(le.x, le.y, le.w, 6 * V);
  }), n.fillStyle = k.rain, i.drops.forEach((le) => {
    n.save(), n.globalAlpha = le.o, n.translate(le.x, le.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = k.snow, i.flakes.forEach((le) => {
    n.globalAlpha = le.o, n.beginPath(), n.arc(le.x, le.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = k.sun, i.bolts.forEach((le) => {
    n.save(), n.globalAlpha = le.o, n.translate(le.x, le.y), n.fill(te), n.restore();
  }), n.restore();
}
function ah(n, l) {
  var ml, fo, Yd, Zd, Kd, $d, ud;
  const i = (a) => n.getElementById(a), u = i("workoutView"), v = i("workoutNameInput");
  let x = !0;
  const k = i("homeClock");
  function A() {
    k && (k.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  A(), setInterval(A, 15e3);
  const I = i("createFlow"), M = i("createMovementsSlot"), W = i("createTimingSlot"), F = i("createFinishSlot"), V = i("movementStepSummary"), G = i("timingStepSummary"), pe = i("finishStepSummary"), ee = i("continueToTiming"), J = i("continueToFinish"), U = i("finishMoveButton");
  let me = !1, ce = [];
  function ke(a) {
    !a || ce.some((s) => s.node === a) || ce.push({ node: a, parent: a.parentNode, next: a.nextSibling });
  }
  function oe(a, s) {
    a && (ke(a), s.appendChild(a));
  }
  function ne() {
    [...ce].reverse().forEach(({ node: a, parent: s, next: d }) => {
      s && (d && d.parentNode === s ? s.insertBefore(a, d) : s.appendChild(a));
    }), ce = [];
  }
  function te(a) {
    n.querySelectorAll(".createStep").forEach((s) => {
      s.classList.toggle("active", s.dataset.createStep === a);
    }), a === "timing" && (me = !0), E();
  }
  function E() {
    var be, Me;
    if (!Qt) return;
    ht[Tt];
    const a = Xe.filter((we) => !we.hidden), s = a.filter((we) => we.kind !== "rest").length, d = a.filter((we) => we.kind === "rest").length;
    V.textContent = s ? s + " movement" + (s === 1 ? "" : "s") + (d ? " · " + d + " rest" + (d === 1 ? "" : "s") : "") : "No movements yet";
    const m = s > 0, S = n.querySelector('[data-open-step="timing"]'), _ = n.querySelector('[data-open-step="finish"]');
    S.disabled = !m, ee.disabled = !m, G.textContent = m ? vo(B.value) + " · " + Ba(q.value) + " movement · " + Ba(R.value) + " rest" : "Add a movement first", _.disabled = !(m && me);
    const O = ((v == null ? void 0 : v.value) || "").trim(), Z = [];
    (be = i("includeWarmupPreset")) != null && be.checked && Z.push("warm-up"), (Me = i("includeCooldownPreset")) != null && Me.checked && Z.push("cooldown"), pe.textContent = O ? O + (Z.length ? " · " + Z.join(" + ") : "") : Z.length ? Z.join(" + ") : "Name and optional extras";
  }
  function Ce() {
    var Fe, at, We;
    I.hidden = !1, me = !1;
    const a = n.querySelector(".editNameRow"), s = i("createMoveOptions"), d = n.querySelector(".timeTiles"), m = i("routineSummaryModal"), S = n.querySelector(".tempoRevealRow"), _ = i("tempoExperiment"), O = (Fe = i("warmupList")) == null ? void 0 : Fe.closest("section"), Z = i("movementCreatorLaunch"), be = i("movementCreator"), Me = (at = i("strengthList")) == null ? void 0 : at.closest("section"), we = (We = i("cooldownList")) == null ? void 0 : We.closest("section");
    [s == null ? void 0 : s.querySelector(".createExtras"), O, Z, be, Me, we].forEach((He) => He && oe(He, M)), [s, d, m, S, _].forEach((He) => oe(He, W)), oe(a, F), te("movements"), E();
  }
  function le() {
    ne(), I.hidden = !0, n.querySelectorAll(".createStep").forEach((a) => a.classList.remove("active"));
  }
  n.querySelectorAll("[data-open-step]").forEach((a) => a.addEventListener("click", () => {
    a.disabled || te(a.dataset.openStep);
  })), ee.addEventListener("click", () => {
    ee.disabled || te("timing");
  }), J.addEventListener("click", () => te("finish")), U.addEventListener("click", () => i("saveWorkoutEdit").click());
  const qe = { home: i("homeView"), workout: i("workoutView"), settings: i("settingsView") }, ie = i("homeNav"), Ze = i("settingsNav");
  function T(a) {
    Object.entries(qe).forEach(([s, d]) => d.classList.toggle("active", s === a)), ie.classList.toggle("active", a === "home"), Ze.classList.toggle("active", a === "settings"), a === "home" && setTimeout(Ne, 400), a === "settings" && (requestAnimationFrame(() => Mi(n.querySelector(".tab.active"), !1)), Bt());
  }
  const B = i("totalTime"), q = i("workTime"), R = i("restTime"), de = i("totalOut"), ue = i("workOut"), ge = i("restOut"), Se = i("totalFill"), Te = i("workFill"), $e = i("restFill"), tt = i("roundsInput"), Za = i("roundsFill"), Ie = i("roundsOut"), ho = i("totalLabel"), Yn = i("routineSummaryModal"), mo = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let ra = mo.map((a) => ({ ...a })), Xe = [
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
  const pt = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let on = pt.map((a) => ({ ...a }));
  const oo = {
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
  }, Ye = mt(l.data), ht = Ye.profiles;
  let Tt = ht[Ye.selected] ? Ye.selected : Ye.order.find((a) => ht[a]) || "kettlebell";
  function mt(a) {
    const s = a && typeof a == "object" ? JSON.parse(JSON.stringify(a)) : {}, d = s.profiles && Object.keys(s.profiles).length ? s.profiles : JSON.parse(JSON.stringify(oo)), m = (Array.isArray(s.order) ? s.order : Object.keys(d)).filter((S) => d[S]);
    return Object.keys(d).forEach((S) => {
      m.includes(S) || m.push(S);
    }), {
      v: 1,
      profiles: d,
      order: m,
      selected: s.selected || m[0],
      history: Array.isArray(s.history) ? s.history : [],
      checkins: (Array.isArray(s.checkins) ? s.checkins : wn(s.energy)).map(ns),
      settings: { ...s.settings || {} }
    };
  }
  function wn(a) {
    if (!Array.isArray(a)) return [];
    const s = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], d = [];
    return a.forEach((m) => {
      const S = new Date(m.at);
      if (isNaN(S)) return;
      const _ = S.getFullYear() + "-" + String(S.getMonth() + 1).padStart(2, "0") + "-" + String(S.getDate()).padStart(2, "0"), O = S.getHours() < 14 ? "morning" : "evening";
      if (d.some((be) => be.date === _ && be.slot === O)) return;
      const Z = s.indexOf(m.value) + 1;
      Z > 0 && d.push({ date: _, slot: O, mood: null, energy: Z, at: m.at });
    }), d;
  }
  function ns(a) {
    if (a.scale === 100) return a;
    const s = (d) => d == null ? null : Math.round((Number(d) - 1) / 5 * 100);
    return { ...a, mood: s(a.mood), energy: s(a.energy), scale: 100 };
  }
  function Dn() {
    Qt || (Ye.selected = Tt, Ye.order = Ye.order.filter((a) => ht[a] && a !== go), l.save(Ye));
  }
  function vt() {
    return Ye.settings;
  }
  function $t(a) {
    const s = ht[a];
    if (!s) return;
    Tt = a;
    const d = i("workoutNameInput");
    if (d && (d.value = s.name), B.value = s.total, q.value = s.work, R.value = s.rest, tt.value = s.rounds || 1, s.customSequence) {
      const m = (s.sequence || []).map((_) => ({ ..._ })), S = (_) => m.filter((O) => O.presetRole === _).map(({ presetRole: O, ...Z }) => Z);
      ra = (s.warmup || S("warmup")).map((_) => ({ ..._ })), on = (s.cooldown || S("cooldown")).map((_) => ({ ..._ })), Xe = m.filter((_) => !_.presetRole), Ii(s.preset || "movement", !1);
    } else
      B.min = 3, B.max = 40, B.step = 1, q.min = 20, q.max = 60, q.step = 5, R.min = 5, R.max = 30, R.step = 5, ra = (s.warmup || mo).map((m) => ({ ...m })), on = (s.cooldown || pt).map((m) => ({ ...m })), Xe = s.strength.map((m) => Array.isArray(m) ? (([S, _, O, Z = !1]) => ({ id: S, name: _, group: O, kind: "work", hidden: !!Z }))(m) : { ...m });
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((m) => m.classList.toggle("active", m.dataset.workout === a)), Ut();
  }
  function os(a, s, d) {
    const m = a.getBoundingClientRect(), S = m.width / 2, _ = m.height / 2, O = s - S, Z = d - _;
    let be = 1 / 0, Me = 1 / 0;
    O !== 0 && (be = S / Math.abs(O)), Z !== 0 && (Me = _ / Math.abs(Z));
    const we = Math.min(Math.max(1 / Math.min(be, Me), 0), 1);
    let he = Math.atan2(Z, O) * (180 / Math.PI) + 90;
    return he < 0 && (he += 360), { edge: we, angle: he };
  }
  function Po(a, s, d = !1) {
    const m = a.getBoundingClientRect(), S = s.clientX - m.left, _ = s.clientY - m.top, { edge: O, angle: Z } = os(a, S, _), be = d ? 100 : O * 100;
    a.style.setProperty("--edge-proximity", be.toFixed(3)), a.style.setProperty("--cursor-angle", Z.toFixed(3) + "deg"), a.classList.toggle("borderGlowActive", d || be >= 30);
  }
  function is(a) {
    a.addEventListener("pointermove", (d) => Po(a, d, !1)), a.addEventListener("pointerenter", (d) => Po(a, d, !1)), a.addEventListener("pointerdown", (d) => Po(a, d, !0));
    const s = () => {
      a.classList.remove("borderGlowActive"), a.style.setProperty("--edge-proximity", "0");
    };
    a.addEventListener("pointerleave", s), a.addEventListener("pointerup", s), a.addEventListener("pointercancel", s);
  }
  is(i("addWorkoutPanel"));
  let Qt = !1, go = null;
  function nt(a) {
    return String(a ?? "").replace(/[&<>"']/g, (s) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[s]);
  }
  function Ml(a) {
    return a.summary ? a.summary : a.customSequence ? vo(a.total) + " · custom move" : vo(a.total) + " · " + Ba(a.work) + " / " + Ba(a.rest) + " · warm-up + cooldown";
  }
  function Zn(a, s) {
    var _;
    const d = document.createElement("article");
    d.className = "workoutPanel", d.dataset.workout = a, d.tabIndex = 0;
    const m = s.activityCount ?? (((_ = s.sequence) == null ? void 0 : _.length) || 0);
    d.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + nt(s.name) + '</div><div class="sub">' + nt(Ml(s)) + '</div><span class="sourceTag">' + nt(s.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (m ? m + " activities" + ((s.rounds || 1) > 1 ? " × " + s.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + nt(s.name) + "</div></div>";
    const S = i("addWorkoutPanel");
    return i("workoutGallery").insertBefore(d, S), is(d), d.addEventListener("click", (O) => {
      O.target.closest("button") || $t(a);
    }), d.addEventListener("keydown", (O) => {
      (O.key === "Enter" || O.key === " ") && !O.target.closest("button") && (O.preventDefault(), $t(a));
    }), d.querySelector(".seeWorkoutBtn").addEventListener("click", (O) => {
      O.stopPropagation(), $t(a), Ys(!1);
    }), d.querySelector(".startWorkoutBtn").addEventListener("click", (O) => {
      O.stopPropagation(), $t(a), _c();
    }), d;
  }
  function wa() {
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((a) => a.remove()), Ye.order.forEach((a) => {
      ht[a] && Zn(a, ht[a]);
    }), n.querySelectorAll(".workoutPanel[data-workout]").forEach((a) => a.classList.toggle("active", a.dataset.workout === Tt));
  }
  wa(), i("addWorkoutPanel").addEventListener("keydown", (a) => {
    (a.key === "Enter" || a.key === " ") && (a.preventDefault(), i("addWorkoutPanel").click());
  }), i("addWorkoutPanel").addEventListener("click", () => {
    Qt = !0, go = "custom-" + Date.now(), ht[go] = {
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
    }, $t(go), Ys(!0);
  });
  let Ke = [], dt = 0, xa = 0, wt = 1, Be = !1, At = null, Et = null, Ot = !1, _n = Ye.settings.upcomingCount ?? "all", rs = "movement";
  function yr(a, s, d) {
    return (Number(a) - s) / (d - s) * 100;
  }
  function Ba(a) {
    const s = Math.max(0, Number(a) || 0);
    return s >= 3600 && s % 3600 === 0 ? s / 3600 + " hr" : s >= 60 && s % 60 === 0 ? s / 60 + " min" : s >= 60 ? Math.round(s / 60) + " min" : Math.round(s) + " sec";
  }
  function vo(a) {
    const s = Math.max(0, Number(a) || 0);
    return s >= 60 && s % 60 === 0 ? s / 60 + " hr" : s >= 60 ? Math.floor(s / 60) + " hr " + s % 60 + " min" : s + " min";
  }
  function kr() {
    Se.style.width = yr(B.value, Number(B.min), Number(B.max)) + "%", Te.style.width = yr(q.value, Number(q.min), Number(q.max)) + "%", $e.style.width = yr(R.value, Number(R.min), Number(R.max)) + "%", ue.textContent = Ba(q.value), ge.textContent = Ba(R.value);
    const a = Number(tt.value) || 1;
    Za.style.width = yr(a, 1, 10) + "%", ho.textContent = a > 1 ? "Time per round" : "Total time";
  }
  function ss(a) {
    return a.filter((s) => !s.hidden);
  }
  function bo(a) {
    const s = Math.max(0, Math.round(Number(a) || 0)), d = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), S = s % 60;
    return (d ? d + ":" + String(m).padStart(2, "0") : m) + ":" + String(S).padStart(2, "0");
  }
  function Ws(a) {
    let s;
    try {
      s = new URL(String(a || "").trim());
    } catch {
      return null;
    }
    const d = s.hostname.replace(/^(www|m|music)\./, "");
    let m = null;
    if (d === "youtu.be") m = s.pathname.slice(1).split("/")[0];
    else if (/^youtube(-nocookie)?\.com$/.test(d))
      if (s.pathname === "/watch") m = s.searchParams.get("v");
      else {
        const Z = s.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        Z && (m = Z[2]);
      }
    if (!m || !/^[\w-]{11}$/.test(m)) return null;
    const S = (Z) => {
      if (!Z) return 0;
      if (/^\d+$/.test(Z)) return Number(Z);
      const be = Z.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return be ? (Number(be[1]) || 0) * 3600 + (Number(be[2]) || 0) * 60 + (Number(be[3]) || 0) : 0;
    }, _ = S(s.searchParams.get("t") || s.searchParams.get("start")), O = S(s.searchParams.get("end"));
    return { id: m, start: _, end: O > _ ? O : null };
  }
  function Hi(a, s) {
    if (a.useVideoLength === !1) return Math.max(5, Number(a.duration) || s || 300);
    const d = Number(a.start) || 0, m = Number(a.end) || Number(a.videoDuration) || 0;
    return m > d ? Math.round(m - d) : Number(a.duration) || 300;
  }
  function wo(a, s) {
    const d = Math.max(0, Number(a) || 0);
    return Math.round(s === "hour" ? d * 3600 : s === "min" ? d * 60 : d);
  }
  function Ii(a, s = !0) {
    rs = a, n.querySelectorAll(".createPresetBtn").forEach((m) => m.classList.toggle("active", m.dataset.movePreset === a));
    const d = ht[Tt];
    d && (d.preset = a), a === "work" ? (B.min = 30, B.max = 480, B.step = 30, q.min = 300, q.max = 7200, q.step = 300, R.min = 60, R.max = 1800, R.step = 60, s && (B.value = 60, q.value = 1500, R.value = 300), i("addMovementUnit").value = "min", i("addMovementDuration").value = 25, i("addRestUnit").value = "min", i("addRestDuration").value = 5) : (B.min = 3, B.max = 40, B.step = 1, q.min = 20, q.max = 60, q.step = 5, R.min = 5, R.max = 30, R.step = 5, s && (B.value = 20, q.value = 45, R.value = 15), i("addMovementUnit").value = "sec", i("addMovementDuration").value = 45, i("addRestUnit").value = "sec", i("addRestDuration").value = 30), kr();
  }
  function Fi(a, s) {
    const d = rs === "work";
    return a.map((m, S) => ({ ...m, id: s + "-" + S + "-" + Date.now().toString(36), useGlobalTiming: !d, duration: d ? 60 : Number(q.value) }));
  }
  function Mr() {
    const a = ht[Tt];
    a != null && a.customSequence && (a.includeWarmup = i("includeWarmupPreset").checked, a.includeCooldown = i("includeCooldownPreset").checked, a.includeWarmup && !ra.length && (ra = Fi(mo, "warm")), a.includeCooldown && !on.length && (on = Fi(pt, "cool")), Ut());
  }
  function Sl() {
    const a = i("upcomingCountSetting");
    if (!a) return;
    const s = Math.max(1, Ke.length - 1), d = _n;
    a.innerHTML = "";
    for (let _ = 1; _ <= s; _++) {
      const O = document.createElement("option");
      O.value = String(_), O.textContent = String(_), a.appendChild(O);
    }
    const m = document.createElement("option");
    m.value = "all", m.textContent = "All", a.appendChild(m);
    const S = d === "all" ? "all" : String(Math.min(Number(d) || 1, s));
    a.value = S, _n = S === "all" ? "all" : Number(S);
  }
  function Ut() {
    Number(B.value) * 60;
    const a = Number(q.value), s = Number(R.value), d = ht[Tt], m = !!(d != null && d.customSequence), S = (m ? !d.includeWarmup : d != null && d.warmupOff) ? [] : ss(ra), _ = ss(Xe), O = m && !d.includeCooldown ? [] : ss(on);
    if (d && (d.total = Number(B.value), d.work = a, d.rest = s, d.rounds = Number(tt.value) || 1, d.customSequence ? (d.sequence = Xe.map((Pe) => ({ ...Pe })), d.warmup = ra.map((Pe) => ({ ...Pe })), d.cooldown = on.map((Pe) => ({ ...Pe }))) : (d.strength = Xe.map((Pe) => ({ ...Pe })), d.warmup = ra.map((Pe) => ({ ...Pe })), d.cooldown = on.map((Pe) => ({ ...Pe })))), d != null && d.customSequence) {
      const Pe = [...S.map((ft) => ({ ...ft, section: "warmup" })), ..._, ...O.map((ft) => ({ ...ft, section: "cooldown" }))].map((ft) => {
        if (ft.kind === "video") return { ...ft, duration: Hi(ft, a), rest: 0 };
        if (ft.kind === "rest") {
          const Ia = ft.useGlobalTiming === !0 ? s : Number(ft.duration) || s;
          return { ...ft, duration: Ia, rest: 0 };
        }
        const Ha = ft.useGlobalTiming === !1 && Number(ft.duration) || a;
        return { ...ft, duration: Ha, rest: 0 };
      });
      d.autoRest && Number(d.autoRestDuration) > 0 ? (Ke = [], Pe.forEach((ft, Ha) => {
        Ke.push(ft);
        const Ia = Pe[Ha + 1];
        ft.kind !== "rest" && Ia && Ia.kind !== "rest" && Ke.push({
          id: "auto-rest-" + Ha,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(d.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : Ke = Pe;
    } else
      Ke = [...S.map((Pe) => ({ ...Pe, section: "warmup" })), ..._, ...O.map((Pe) => ({ ...Pe, section: "cooldown" }))].map((Pe) => Pe.kind === "video" ? { ...Pe, duration: Hi(Pe, a), rest: 0 } : Pe.kind === "rest" ? { ...Pe, duration: Pe.useGlobalTiming === !0 ? s : Number(Pe.duration) || s, rest: 0 } : { ...Pe, duration: Pe.useGlobalTiming === !1 && Number(Pe.duration) || a, rest: s }), Ke.forEach((Pe, ft) => {
        var Ha;
        ((Ha = Ke[ft + 1]) == null ? void 0 : Ha.kind) === "rest" && (Pe.rest = 0);
      }), Ke.length && (Ke[Ke.length - 1].rest = 0);
    const Z = Math.max(1, Math.min(10, Number(tt.value) || 1)), be = Ke, Me = (Pe) => Z <= 1 ? null : Pe.section === "warmup" || Pe.presetRole === "warmup" ? "first" : Pe.section === "cooldown" || Pe.presetRole === "cooldown" ? "last" : Pe.kind === "video" && (Pe.videoRounds === "first" || Pe.videoRounds === "last") ? Pe.videoRounds : null, we = (Pe) => !!Me(Pe), he = be.filter((Pe) => !we(Pe)), Fe = be.filter(we), at = he.length, We = he.reduce((Pe, ft) => Pe + ft.duration + ft.rest, 0), He = Fe.reduce((Pe, ft) => Pe + ft.duration + ft.rest, 0), De = [
      Fe.some((Pe) => Pe.section === "warmup" || Pe.presetRole === "warmup") && "warm-up",
      Fe.some((Pe) => Pe.section === "cooldown" || Pe.presetRole === "cooldown") && "cooldown",
      Fe.some((Pe) => Pe.kind === "video" && !Pe.section && !Pe.presetRole) && "video"
    ].filter(Boolean), bt = De.length > 1 ? De.slice(0, -1).join(", ") + " & " + De[De.length - 1] : De[0] || "";
    Ke = [];
    const xt = (Pe, ft) => {
      const Ha = Me(Pe);
      return !Ha || (Ha === "first" ? ft === 1 : ft === Z);
    };
    for (let Pe = 1; Pe <= Z; Pe++)
      if (be.filter((ft) => xt(ft, Pe)).forEach((ft, Ha) => Ke.push({ ...ft, id: ft.id + (Z > 1 ? "-r" + Pe : ""), round: Pe, roundIndex: Ha })), Pe < Z && at)
        if (d != null && d.customSequence)
          Ke.push({ id: "round-break-" + Pe, name: "Rest", group: "Round " + (Pe + 1) + " next", kind: "rest", hidden: !1, duration: s, rest: 0, round: Pe, roundIndex: at, roundBreak: !0 });
        else {
          const ft = Ke[Ke.length - 1];
          ft.rest = s, ft.roundBreakAfter = !0;
        }
    kr();
    const Ue = Ke.reduce((Pe, ft) => Pe + ft.duration + ft.rest, 0), yt = Math.round(We / 60), Pt = Math.round(Ue / 60), ut = Z > 1 ? vo(yt) + " × " + Z + " rounds" + (He ? " + " + Ba(He) + " " + bt : "") + " (" + vo(Pt) + ")" : vo(Pt), rt = [S.length ? "warm-up" : "", O.length ? "cooldown" : ""].filter(Boolean), Ca = d != null && d.customSequence ? ut + " · " + at + " items" + (rt.length && !(Z > 1 && He) ? " · " + rt.join(" + ") : "") : ut + " · " + Ba(a) + " / " + Ba(s) + (rt.length && !(Z > 1 && He) ? " · " + rt.join(" + ") : "");
    de.textContent = Ba(We);
    const Na = Ke.filter((Pe) => !Pe.roundBreak).length, ta = Z > 1 ? Na + " activities · " + Z + " rounds" : at + " activities";
    Ie.textContent = Z > 1 ? Z + " rounds · " + vo(Pt) + " total" : "1 round", i("roundsCount").textContent = Z, n.querySelectorAll("[data-rounds-step]").forEach((Pe) => {
      Pe.disabled = Number(Pe.dataset.roundsStep) < 0 ? Z <= 1 : Z >= 10;
    }), d && (d.summary = Ca, d.activityCount = at);
    const Di = n.querySelector(".workoutPanel.active .sub");
    Di && (Di.textContent = Ca), Yn.textContent = Ca, fi(), n.querySelectorAll(".workoutPanel.active .activityCount").forEach((Pe) => Pe.textContent = ta), kr(), Sr(), zo(), hi(), Sl(), Qt && E(), qe.workout.classList.contains("active") && !At && Wa();
  }
  const Rn = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', No = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', di = {
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
  }, ja = (a) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (di[a] || "") + "</svg>";
  n.querySelectorAll("[data-icon]").forEach((a) => {
    a.innerHTML = ja(a.dataset.icon);
  });
  let ya = null, fa = null;
  function Vs(a) {
    return a = Math.max(1, Number(a) || 0), a >= 3600 && a % 3600 === 0 ? { value: a / 3600, unit: "hour" } : a >= 60 && a % 60 === 0 ? { value: a / 60, unit: "min" } : { value: a, unit: "sec" };
  }
  function Kn(a = !1) {
    const s = n.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    s && (s.focus({ preventScroll: !0 }), a && s.select());
  }
  function ci(a, s, d = {}) {
    const m = a.kind === "rest", S = a.kind === "video", _ = S ? a.useVideoLength !== !1 : m ? a.useGlobalTiming === !0 : a.useGlobalTiming !== !1, O = Number(m ? R.value : q.value), Z = Vs(S ? a.useVideoLength === !1 ? a.duration : Hi({ ...a, useVideoLength: !0 }) : _ ? O : a.duration || O), be = S && (Number(a.videoDuration) > 0 || Number(a.end) > 0), Me = S ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + nt(a.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + nt(a.autoName ? "" : a.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([Ue, yt]) => '<option value="' + Ue + '"' + ((a.videoRounds || "every") === Ue ? " selected" : "") + ">" + yt + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + nt(a.name) + '" placeholder="' + (m ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + nt(a.group) + '" placeholder="' + (m ? "Rest" : "e.g. Glutes + legs") + '"></label>', we = S ? "Play the whole " + (Number(a.start) > 0 || Number(a.end) > 0 ? "clip" : "video") + (be ? " · " + bo(Hi({ ...a, useVideoLength: !0 })) : "") : "Use global timing · " + Ba(O), he = document.createElement("div");
    he.className = "moveRow editing" + (d.sheet ? " inSheet" : ""), he.dataset.index = s, he.dataset.id = a.id;
    const Fe = d.isNew ?? (fa == null ? void 0 : fa.item) === a, at = d.sheet ? '<div class="moveEditActions sheetActions">' + (Fe ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (a.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + nt(a.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (Fe ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    he.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (S ? " videoFields" : "") + '">' + Me + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (_ ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + nt(we) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + Z.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((Ue) => '<option value="' + Ue + '"' + (Ue === Z.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[Ue] + "</option>").join("") + "</select></div></div>" + at + "</div>";
    const We = (Ue) => he.querySelector("[data-f=" + Ue + "]"), He = () => {
      const Ue = We("global").checked;
      We("dur").disabled = Ue, We("unit").disabled = Ue, he.querySelector(".creatorDurationRow").classList.toggle("isDisabled", Ue);
    };
    We("global").addEventListener("change", He), He();
    const De = () => {
      var Ue;
      if (d.sheet) {
        (Ue = d.onCancel) == null || Ue.call(d);
        return;
      }
      Fe && Oi(), ya = null, Ut();
    }, bt = () => {
      var Pt;
      if (S) {
        xt();
        return;
      }
      const Ue = We("name").value.trim();
      if (!Ue) {
        We("name").focus();
        return;
      }
      a.name = Ue, a.group = We("group").value.trim() || (m ? "Rest" : "Movement");
      const yt = We("global").checked;
      if (a.useGlobalTiming = yt, yt || (a.duration = Math.max(m ? 5 : 1, wo(We("dur").value, We("unit").value))), d.sheet) {
        (Pt = d.onSaved) == null || Pt.call(d);
        return;
      }
      Fe && (fa = null), ya = null, Ut(), Ft(Fe ? m ? "Rest added" : "Movement added" : "Movement updated");
    }, xt = () => {
      var rt;
      const Ue = We("url").value.trim(), yt = Ws(Ue);
      if (!yt) {
        We("urlError").hidden = !1, We("url").classList.add("invalid"), We("url").focus();
        return;
      }
      const Pt = yt.id !== a.videoId;
      a.url = Ue, a.videoId = yt.id, a.start = yt.start, a.end = yt.end, Pt && (a.videoDuration = null, a.videoError = null);
      const ut = We("name").value.trim();
      a.autoName = !ut, a.name = ut || (Pt ? "" : a.name) || a.videoTitle || "YouTube video", a.group = "Video", a.videoRounds = We("rounds").value, a.useVideoLength = We("global").checked, a.useVideoLength || (a.duration = Math.max(5, wo(We("dur").value, We("unit").value))), d.sheet ? (rt = d.onSaved) == null || rt.call(d) : (Fe && (fa = null), ya = null, Ut(), Ft(Fe ? "Video added" : "Video updated")), (Pt || !a.videoDuration || a.autoName && !a.videoTitle) && jl(a);
    };
    if (S && We("url").addEventListener("input", () => {
      We("urlError").hidden = !0, We("url").classList.remove("invalid");
    }), he.querySelector("[data-a=cancel]").addEventListener("click", De), he.querySelector("[data-a=save]").addEventListener("click", bt), d.sheet && !Fe) {
      he.querySelector("[data-a=hide]").addEventListener("click", () => {
        var yt;
        return (yt = d.onHide) == null ? void 0 : yt.call(d);
      });
      const Ue = he.querySelector("[data-a=remove]");
      jr(Ue, Ue.querySelector(".removeFill"), 1200, () => {
        var yt;
        return (yt = d.onRemove) == null ? void 0 : yt.call(d);
      });
    }
    return he.addEventListener("keydown", (Ue) => {
      Ue.key === "Escape" && (Ue.preventDefault(), Ue.stopPropagation(), De()), Ue.key === "Enter" && Ue.target.matches("input") && (Ue.preventDefault(), bt());
    }), he;
  }
  function Ho(a, s) {
    const d = i(s);
    d.innerHTML = "", a.forEach((m, S) => {
      if (m === ya && !qo()) {
        d.appendChild(ci(m, S));
        return;
      }
      const _ = document.createElement("div");
      _.className = "moveRow" + (m.hidden ? " hidden" : "") + (m.kind === "rest" ? " restItem" : "") + (m.kind === "video" ? " videoItem" : "") + (Ul(m) ? " noMeta" : ""), _.dataset.index = S, _.dataset.id = m.id;
      const O = m.kind === "rest" ? m.useGlobalTiming === !0 ? "Global timing" : Ba(m.duration) : m.useGlobalTiming === !1 ? Ba(m.duration) : "Global timing", Z = m.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", be = m.kind === "video" ? m.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (m.useVideoLength === !1 ? "stops after " + Ba(m.duration) : Number(m.videoDuration) > 0 || Number(m.end) > 0 ? bo(Hi(m)) : "plays to the end") + (m.videoRounds === "first" ? " · first round only" : m.videoRounds === "last" ? " · last round only" : "") : m.group + " · " + O, Me = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + nt(m.name) + '. Drag, or use the up and down arrow keys">' + Rn + "</button>", we = '<div class="moveText"><div class="moveItemName">' + nt(m.name) + Z + '</div><div class="moveMeta">' + nt(be) + "</div></div>", he = (We) => We.addEventListener("keydown", (He) => {
        var xt, Ue;
        if (He.key !== "ArrowUp" && He.key !== "ArrowDown") return;
        He.preventDefault();
        const De = a.indexOf(m), bt = De + (He.key === "ArrowUp" ? -1 : 1);
        bt < 0 || bt >= a.length || (a.splice(De, 1), a.splice(bt, 0, m), Ut(), (Ue = (xt = i(s).children[bt]) == null ? void 0 : xt.querySelector(".dragHandle")) == null || Ue.focus());
      });
      if (qo()) {
        _.classList.add("phoneRow"), _.tabIndex = 0, _.setAttribute("role", "button"), _.setAttribute("aria-label", "Edit " + (m.name || "step")), _.innerHTML = Me + we + '<span class="rowChevron" aria-hidden="true">›</span>';
        const We = _.querySelector(".dragHandle");
        We.addEventListener("pointerdown", (He) => io(He, _, d, a)), he(We), _.addEventListener("click", (He) => {
          He.target.closest(".dragHandle") || ji(m, a);
        }), _.addEventListener("keydown", (He) => {
          He.key === "Enter" && He.target === _ && (He.preventDefault(), ji(m, a));
        }), d.appendChild(_);
        return;
      }
      _.innerHTML = Me + we + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + nt(m.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (m.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + nt(m.name) + '"><span class="removeFill"></span><span class="removeLabel">' + No + "</span></button></div>", _.querySelector(".editBtn").addEventListener("click", () => {
        Oi(), ya = m, Ut(), Kn();
      }), _.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        m.hidden = !m.hidden, Ut();
      });
      const Fe = _.querySelector(".removeBtn");
      jr(Fe, Fe.querySelector(".removeFill"), 1200, () => {
        const We = a.indexOf(m);
        We < 0 || (a.splice(We, 1), Ut(), Ft("Removed " + m.name, { label: "Undo", run: () => {
          a.splice(Math.min(We, a.length), 0, m), Ut();
        } }));
      });
      const at = _.querySelector(".dragHandle");
      at.addEventListener("pointerdown", (We) => io(We, _, d, a)), he(at), d.appendChild(_);
    });
  }
  const Yt = () => {
    var a;
    return (a = window.matchMedia) == null ? void 0 : a.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, pi = (a) => {
    var s;
    try {
      (s = navigator.vibrate) == null || s.call(navigator, a);
    } catch {
    }
  };
  function io(a, s, d, m) {
    if (a.button !== void 0 && a.button !== 0) return;
    a.preventDefault();
    const S = a.currentTarget, _ = a.pointerId, O = !Yt();
    try {
      S.setPointerCapture(_);
    } catch {
    }
    const Z = s.closest(".exerciseScroller") || ui(s), be = d.style.position;
    d.style.position = "relative";
    const Me = [...d.children].filter((ct) => ct.classList.contains("moveRow")), we = Me.indexOf(s), he = parseFloat(getComputedStyle(d).rowGap) || 8, Fe = s.offsetHeight, at = Fe + he, We = Me.map((ct) => ct.offsetTop), He = Me.map((ct) => ct.offsetHeight), De = () => d.getBoundingClientRect().top, bt = d.getBoundingClientRect().width, xt = a.clientY - (De() + We[we]), Ue = a.clientX;
    let yt = a.clientY, Pt = a.clientX, ut = De() + We[we], rt = 0, Ca = 0, Na = 0, ta = 1, Di = 0, Pe = we, ft = !1, Ha = 0, Ia = !1, Bs = !1, Kr = We[we];
    d.classList.add("reordering"), s.classList.add("dragging"), s.style.transition = "none", pi(8);
    const pr = () => {
      const ct = yt - xt + Fe / 2 - De();
      let Ct = 0;
      return Me.forEach((Wt, tn) => {
        tn !== we && ct > We[tn] + He[tn] / 2 && Ct++;
      }), Ct;
    }, Ps = () => {
      Me.forEach((ct, Ct) => {
        if (Ct === we) return;
        const Wt = we < Pe && Ct > we && Ct <= Pe ? -at : we > Pe && Ct >= Pe && Ct < we ? at : 0;
        ct.style.transform = Wt ? "translateY(" + Wt + "px)" : "";
      });
    }, Ns = () => {
      const ct = d.getBoundingClientRect(), Ct = Math.abs(Pt - Ue) > Math.max(80, bt * 0.3) || Pt < ct.left - 24 || Pt > ct.right + 24;
      Ct !== ft && (ft = Ct, s.classList.toggle("willReturn", Ct), pi(Ct ? 10 : 4));
      const Wt = ft ? we : pr();
      Wt !== Pe && (Pe = Wt, Ps(), ft || pi(4));
    }, ri = () => {
      if (Pe === we) return We[we];
      const ct = Me.filter((Wt, tn) => tn !== we);
      let Ct = We[0];
      for (let Wt = 0; Wt < Pe; Wt++) Ct += ct[Wt].offsetHeight + he;
      return Ct;
    }, si = () => {
      const ct = O ? Math.min(Math.abs(rt) / 40, 1) : 0, Ct = O && !Ia ? Math.max(-3, Math.min(3, Na * 0.6)) : 0;
      s.style.transform = "translate(" + Ca.toFixed(2) + "px," + (ut - (De() + We[we])).toFixed(2) + "px) rotate(" + Ct.toFixed(2) + "deg) scale(" + (ta * (1 - 0.04 * ct)).toFixed(4) + "," + (ta * (1 + 0.06 * ct)).toFixed(4) + ")";
    }, st = () => {
      Ha = requestAnimationFrame(st);
      const ct = Pt - Ue, Ct = Ia ? De() + Kr : yt - xt, Wt = Ia ? 0 : ft ? ct * 0.9 : Math.max(-22, Math.min(22, ct * 0.22)), tn = Ia ? 1 : ft ? 0.97 : 1.035;
      if (!O) {
        ut = Ct, Ca = Ia ? 0 : Wt, ta = 1, si(), Ia && ia();
        return;
      }
      const Xd = Ia ? 0.24 : 0.2, Jd = Ia ? 0.62 : 0.68;
      rt = (rt + (Ct - ut) * Xd) * Jd, ut += rt, Na = (Na + (Wt - Ca) * 0.16) * 0.7, Ca += Na, Di = (Di + (tn - ta) * 0.22) * 0.6, ta += Di, si(), Ia && Math.abs(rt) < 0.15 && Math.abs(Ct - ut) < 0.5 && Math.abs(Ca) < 0.5 && Math.abs(ta - 1) < 3e-3 && ia();
    }, Nt = setInterval(() => {
      if (!Z || Ia) return;
      const ct = Z.getBoundingClientRect(), Ct = 56, Wt = yt < ct.top + Ct ? -10 : yt > ct.bottom - Ct ? 10 : 0;
      Wt && (Z.scrollTop += Wt, Ns());
    }, 30);
    function ia() {
      if (Bs) return;
      Bs = !0, cancelAnimationFrame(Ha);
      const ct = Pe !== we, Ct = s.dataset.id;
      if (d.classList.remove("reordering"), Me.forEach((tn) => {
        tn.style.transition = "none", tn.style.transform = "";
      }), s.classList.remove("dragging", "willReturn"), d.style.position = be, ct) {
        const [tn] = m.splice(we, 1);
        m.splice(Pe, 0, tn);
      }
      Ut();
      const Wt = Ct && d.querySelector('.moveRow[data-id="' + Ct + '"]');
      Wt && O && Wt.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), ct && Ft("Order saved");
    }
    const Fa = (ct) => {
      if (ct.pointerId === _) {
        if (ct.pointerType === "mouse" && ct.buttons === 0) {
          Tn();
          return;
        }
        yt = ct.clientY, Pt = ct.clientX, Ns();
      }
    }, en = (ct) => {
      ct.pointerId === _ && Tn();
    };
    function Tn() {
      Ia || (window.removeEventListener("pointermove", Fa, !0), window.removeEventListener("pointerup", en, !0), window.removeEventListener("pointercancel", en, !0), S.removeEventListener("lostpointercapture", Tn), clearInterval(Nt), ft && Pe !== we && (Pe = we, Ps()), Kr = ri(), Ia = !0, pi(6), setTimeout(ia, 800));
    }
    window.addEventListener("pointermove", Fa, !0), window.addEventListener("pointerup", en, !0), window.addEventListener("pointercancel", en, !0), S.addEventListener("lostpointercapture", Tn), Ha = requestAnimationFrame(st), si();
  }
  function Sr() {
    var S, _, O, Z;
    const a = ht[Tt], s = (S = i("warmupList")) == null ? void 0 : S.closest("section"), d = (_ = i("cooldownList")) == null ? void 0 : _.closest("section"), m = (Z = (O = i("strengthList")) == null ? void 0 : O.closest("section")) == null ? void 0 : Z.querySelector(".sectionTitle");
    a != null && a.customSequence ? (s && (s.hidden = !a.includeWarmup), d && (d.hidden = !a.includeCooldown), m && (m.textContent = "Move sequence")) : (s && (s.hidden = !!(a != null && a.warmupOff)), d && (d.hidden = !1), m && (m.textContent = "Kettlebell work")), Ho(ra, "warmupList"), Ho(Xe, "strengthList"), Ho(on, "cooldownList");
  }
  function Oi() {
    if (!fa) return;
    const { item: a, arr: s } = fa;
    fa = null;
    const d = s.indexOf(a);
    d >= 0 && s.splice(d, 1), ya === a && (ya = null);
  }
  function qi(a) {
    return a.id === "warmupList" ? { arr: ra, kind: "warmup", group: "Warm-up" } : a.id === "cooldownList" ? { arr: on, kind: "cooldown", group: "Cooldown" } : { arr: Xe, kind: "work", group: "" };
  }
  function js(a, s) {
    const d = qi(s), m = Date.now().toString(36);
    return a === "video" ? { id: "video-" + m, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : a === "rest" ? { id: "rest-" + m, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(R.value) } : { id: "movement-" + m, name: "", group: d.group, kind: d.kind, hidden: !1, useGlobalTiming: !0, duration: Number(q.value) };
  }
  const zs = "cubic-bezier(.34,1.46,.64,1)";
  function Io(a, s) {
    if (Yt() || !a) {
      s();
      return;
    }
    const d = (_) => {
      var O;
      return ((O = _.dataset) == null ? void 0 : O.id) || _;
    }, m = () => [...a.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], S = new Map(m().map((_) => [d(_), _.getBoundingClientRect().top]));
    s(), m().forEach((_) => {
      const O = S.get(d(_));
      if (O === void 0) return;
      const Z = O - _.getBoundingClientRect().top;
      Math.abs(Z) < 0.5 || _.animate([{ transform: "translateY(" + Z + "px)" }, { transform: "none" }], { duration: 440, easing: zs });
    });
  }
  function Fo(a, s) {
    if (!a || Yt()) return;
    const d = a.offsetHeight, m = Math.max(0, d - (s || 0));
    a.animate([{ clipPath: "inset(0 0 " + m + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: zs });
  }
  function Cr(a, s, d, m) {
    const { arr: S } = qi(s), _ = js(a, s);
    S.splice(Math.max(0, Math.min(d, S.length)), 0, _), fa = { item: _, arr: S }, ya = _, Io(s.closest(".exerciseScroller,.createStepSlot") || s, () => Ut());
    const O = s.querySelector(".moveRow.editing");
    return Fo(O, m), Kn(a === "rest"), O;
  }
  function ui(a) {
    for (let s = a; s && s.nodeType === 1; s = s.parentElement) {
      const d = getComputedStyle(s).overflowY;
      if (/(auto|scroll)/.test(d) && s.scrollHeight > s.clientHeight) return s;
    }
    return null;
  }
  const da = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function xn(a, s) {
    const d = document.createElement("div");
    return d.className = "addGhost" + (a === "movement" ? "" : " rest"), d.innerHTML = '<span class="addGhostGrip">' + Rn + '</span><span class="addGhostText"><strong>' + nt(s[0]) + "</strong><small>" + nt(s[1]) + "</small></span>", i("workoutModal").appendChild(d), d;
  }
  function Lt(a) {
    a.classList.add("leaving"), setTimeout(() => a.remove(), 180);
  }
  function Wi(a, s, d, m) {
    (ya || fa) && (Oi(), ya = null, Ut());
    const S = a.getBoundingClientRect(), _ = xn(s, da[s]);
    _.setAttribute("aria-hidden", "true"), _.style.width = S.width + "px", _.style.height = S.height + "px", _.style.transform = "translate(" + S.left + "px," + S.top + "px)", a.classList.add("lifting");
    const O = ui(a);
    return Oo({
      ghost: _,
      origin: S,
      sx: d,
      sy: m,
      scroller: O,
      column: a.closest(".exerciseScroller,.createFlow") || O,
      home: () => a.getBoundingClientRect(),
      onDrop: (Z, be, Me) => {
        Lt(_), a.classList.remove("lifting"), Cr(s, Z, be, Me);
      },
      onReturn: () => {
        Lt(_), a.classList.remove("lifting");
      }
    });
  }
  function Oo({ ghost: a, origin: s, sx: d, sy: m, scroller: S, column: _, home: O, onDrop: Z, onReturn: be, rowLook: Me = !1 }) {
    var si;
    const we = !Yt(), he = ((si = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : si.offsetHeight) || 80, Fe = d - s.left, at = m - s.top, We = 44;
    let He = d, De = m, bt = s.left, xt = s.top, Ue = 0, yt = 0, Pt = !we, ut = null, rt = null, Ca = -1, Na = 0, ta = null;
    const Di = () => ["warmupList", "strengthList", "cooldownList"].map((st) => i(st)).filter((st) => st && st.getClientRects().length && !st.closest("[hidden]")), Pe = (st) => {
      if (st === ut) return;
      ut = st, a.classList.toggle("overList", !!st || Me);
      const Nt = st ? st.getBoundingClientRect().width : s.width;
      a.style.width = Nt + "px", a.style.height = (st ? he : s.height) + "px";
    }, ft = (st) => {
      st.classList.add("leaving"), st.style.height = "0px", st.style.marginTop = "-8px", setTimeout(() => st.remove(), we ? 320 : 0);
    }, Ha = (st, Nt, ia) => {
      if (rt && rt.parentNode === st && Ca === ia || (rt && (ft(rt), rt = null, Ca = -1), !st)) return;
      const Fa = document.createElement("div");
      Fa.className = "dropSlot", st.insertBefore(Fa, Nt), rt = Fa, Ca = ia, Fa.getBoundingClientRect(), Fa.style.height = he + "px", Fa.style.marginTop = "0px";
    }, Ia = () => {
      let st = null, Nt = 1 / 0;
      for (const Tn of Di()) {
        const ct = Tn.getBoundingClientRect();
        if (He < ct.left - 48 || He > ct.right + 48) continue;
        const Ct = ct.top - 28, Wt = ct.bottom + 28, tn = De < Ct ? Ct - De : De > Wt ? De - Wt : 0;
        tn < Nt && (Nt = tn, st = Tn);
      }
      const ia = _ == null ? void 0 : _.getBoundingClientRect(), en = ia && He >= ia.left && He <= ia.right && De >= ia.top && De <= ia.bottom || Nt === 0 ? st : null;
      if (en) {
        const Tn = [...en.children].filter((Ct) => Ct.classList.contains("moveRow"));
        let ct = Tn.findIndex((Ct) => {
          const Wt = Ct.getBoundingClientRect();
          return De < Wt.top + Wt.height / 2;
        });
        ct < 0 && (ct = Tn.length), Ha(en, Tn[ct] || null, ct);
      } else Ha(null);
      Pe(en);
    }, Bs = () => {
      if (ta) return ta.aim();
      if (ut) {
        const st = ut.getBoundingClientRect();
        let Nt = De - he / 2;
        return rt && (Nt = Nt * 0.6 + rt.getBoundingClientRect().top * 0.4), { x: st.left, y: Nt };
      }
      return { x: He - Fe, y: De - at };
    }, Kr = (st, Nt, ia, Fa) => {
      a.style.transform = "translate(" + bt + "px," + xt + "px) rotate(" + st + "deg) rotate(" + Nt + "rad) scale(" + ia + "," + Fa + ") rotate(" + -Nt + "rad)";
    }, pr = () => {
      if (Na = requestAnimationFrame(pr), !Pt) {
        const ct = He - d, Ct = De - m, Wt = Math.min(Math.hypot(ct, Ct) / We, 1);
        bt = s.left + ct * 0.35, xt = s.top + Ct * 0.35, Kr(0, Math.atan2(Ct, ct), 1 + 0.155 * Wt, 1 - 0.1 * Wt);
        return;
      }
      const st = Bs();
      if (!we) {
        bt = st.x, xt = st.y, Kr(0, 0, 1, 1), ta && (cancelAnimationFrame(Na), ta.done());
        return;
      }
      const Nt = ta ? ta.k : 0.17, ia = ta ? ta.d : 0.7;
      Ue = (Ue + (st.x - bt) * Nt) * ia, yt = (yt + (st.y - xt) * Nt) * ia, bt += Ue, xt += yt;
      const Fa = Math.hypot(Ue, yt), en = Math.min(Fa / 48, 1), Tn = ut || ta ? 0 : Math.max(-5, Math.min(5, Ue * 0.32));
      Kr(Tn, Math.atan2(yt, Ue), 1 + 0.1 * en, 1 - 0.063 * en), ta && Fa < 0.15 && Math.hypot(st.x - bt, st.y - xt) < 0.6 && (cancelAnimationFrame(Na), ta.done());
    }, Ps = setInterval(() => {
      if (!S || ta) return;
      const st = S.getBoundingClientRect(), Nt = 64, ia = De < st.top + Nt ? -(st.top + Nt - De) / 4 : De > st.bottom - Nt ? (De - (st.bottom - Nt)) / 4 : 0;
      ia && (S.scrollTop += Math.max(-18, Math.min(18, ia)), Ia());
    }, 30);
    Na = requestAnimationFrame(pr);
    let Ns = !1;
    const ri = (st, Nt) => {
      if (Ns) return;
      Ns = !0, cancelAnimationFrame(Na);
      const ia = rt ? rt.offsetHeight : he;
      !st && rt && (rt.remove(), rt = null), st ? Z(st, Nt, ia) : be();
    };
    return {
      move(st, Nt) {
        He = st, De = Nt, !Pt && Math.hypot(He - d, De - m) > We && (Pt = !0, Ue = (He - d) * 0.085, yt = (De - m) * 0.085), Pt && Ia();
      },
      drop(st) {
        clearInterval(Ps);
        const Nt = ut, ia = Ca;
        if (!st && Nt && rt) {
          const Fa = rt;
          ta = { k: 0.24, d: 0.62, aim: () => {
            const en = Fa.getBoundingClientRect();
            return { x: en.left, y: en.top };
          }, done: () => ri(Nt, ia) }, setTimeout(() => ri(Nt, ia), 650), we || (cancelAnimationFrame(Na), ri(Nt, ia));
          return;
        }
        Ha(null), Pe(null), ta = { k: 0.2, d: 0.66, aim: () => {
          const Fa = O();
          return { x: Fa.left, y: Fa.top };
        }, done: () => ri(null) }, setTimeout(() => ri(null), 650), we || (cancelAnimationFrame(Na), ri(null));
      }
    };
  }
  function Vi(a, s) {
    let d = !1;
    a.addEventListener("click", (m) => {
      if (d) {
        d = !1, m.preventDefault();
        return;
      }
      if (qo()) {
        ds(s);
        return;
      }
      const S = i("strengthList"), _ = Cr(s, S, qi(S).arr.length, 0);
      _ == null || _.scrollIntoView({ block: "nearest", behavior: Yt() ? "auto" : "smooth" });
    }), a.addEventListener("pointerdown", (m) => {
      if (m.button !== void 0 && m.button !== 0) return;
      const S = m.pointerId, _ = m.clientX, O = m.clientY;
      let Z = null, be = !1;
      try {
        a.setPointerCapture(S);
      } catch {
      }
      const Me = (De) => {
        if (De.pointerId === S) {
          if (De.pointerType === "mouse" && De.buttons === 0) {
            He(!1);
            return;
          }
          if (!Z) {
            if (Math.hypot(De.clientX - _, De.clientY - O) < 6) return;
            Z = Wi(a, s, _, O);
          }
          Z.move(De.clientX, De.clientY);
        }
      }, we = (De) => {
        De.pointerId === S && He(!1);
      }, he = (De) => {
        De.pointerId === S && He(!0);
      }, Fe = () => He(!1), at = () => He(!0), We = (De) => {
        De.key === "Escape" && Z && (De.preventDefault(), De.stopPropagation(), He(!0));
      };
      function He(De) {
        if (!be && (be = !0, window.removeEventListener("pointermove", Me, !0), window.removeEventListener("pointerup", we, !0), window.removeEventListener("pointercancel", he, !0), window.removeEventListener("keydown", We, !0), window.removeEventListener("blur", at), a.removeEventListener("lostpointercapture", Fe), Z)) {
          const bt = Z;
          Z = null, d = !0, setTimeout(() => {
            d = !1;
          }, 0), bt.drop(De);
        }
      }
      window.addEventListener("pointermove", Me, !0), window.addEventListener("pointerup", we, !0), window.addEventListener("pointercancel", he, !0), window.addEventListener("keydown", We, !0), window.addEventListener("blur", at), a.addEventListener("lostpointercapture", Fe);
    });
  }
  const rn = (ml = window.matchMedia) == null ? void 0 : ml.call(window, "(max-width: 620px)");
  function qo() {
    var a;
    return !!((a = window.matchMedia) != null && a.call(window, "(max-width: 620px)").matches);
  }
  const ls = (a) => a.charAt(0).toUpperCase() + a.slice(1), Bn = (a) => a.kind === "rest" ? "rest" : a.kind === "video" ? "video" : "movement";
  let xo = null, Xt = null;
  function $n(a, s, d, m) {
    La(), i("sheetTitle").textContent = a;
    const S = i("sheetBody");
    S.innerHTML = "", S.appendChild(s), xo = d || null, i("sheet").setAttribute("aria-hidden", "false"), i("sheetScrim").classList.add("open"), i("sheet").classList.add("open"), setTimeout(() => {
      if (!i("sheet").classList.contains("open") || !S.contains(s)) return;
      const _ = m ? S.querySelector("input[data-f=url],input[data-f=name]") : S.querySelector("button,input,select");
      _ == null || _.focus({ preventScroll: !0 });
    }, Yt() ? 0 : 360);
  }
  function La() {
    const a = i("sheet");
    if (!a.classList.contains("open")) return;
    a.classList.remove("open"), i("sheetScrim").classList.remove("open"), a.setAttribute("aria-hidden", "true"), a.contains(n.activeElement) && n.activeElement.blur();
    const s = xo;
    xo = null, s == null || s(), setTimeout(ka, 0);
  }
  i("sheetScrim").addEventListener("click", La), i("sheet").addEventListener("keydown", (a) => {
    a.key === "Escape" && (a.preventDefault(), La());
  });
  function ji(a, s) {
    const d = ci(a, s.indexOf(a), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        La(), Ut(), Ft(ls(Bn(a)) + " updated");
      },
      onCancel: La,
      onHide() {
        a.hidden = !a.hidden, La(), Ut(), Ft((a.hidden ? "Hidden: " : "Showing: ") + a.name);
      },
      onRemove() {
        La();
        const m = s.indexOf(a);
        m < 0 || (s.splice(m, 1), Ut(), Ft("Removed " + a.name, { label: "Undo", run: () => {
          s.splice(Math.min(m, s.length), 0, a), Ut();
        } }));
      }
    });
    $n("Edit " + Bn(a), d, null, !1);
  }
  function Wo() {
    const a = document.createElement("div");
    a.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([s, d, m, S]) => {
      const _ = document.createElement("button");
      _.type = "button", _.className = "sheetChoice", _.innerHTML = '<span class="timeIcon" aria-hidden="true">' + ja(d) + "</span><span><strong>" + m + "</strong><small>" + S + "</small></span>", _.addEventListener("click", () => ds(s)), a.appendChild(_);
    }), $n("Add to the move", a, null, !1);
  }
  function ds(a) {
    Xt && yo();
    const s = js(a, i("strengthList")), d = ci(s, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        La(), Cl(s, a);
      },
      onCancel: La
    });
    $n("New " + Bn(s), d, null, !0);
  }
  const Aa = i("workoutModal").querySelector(".modalStatic"), Vo = { parent: Aa.parentNode, next: Aa.nextSibling };
  function ro() {
    const a = document.createElement("div");
    a.className = "sheetSetup", a.appendChild(Aa);
    const s = document.createElement("button");
    s.type = "button", s.className = "primary sheetDone", s.textContent = "Done", s.addEventListener("click", La), a.appendChild(s), $n("Setup", a, () => {
      Vo.parent.insertBefore(Aa, Vo.next), fi();
    }, !1);
  }
  function fi() {
    var s, d;
    const a = i("setupSummaryName");
    a && (a.textContent = (((s = i("workoutNameInput")) == null ? void 0 : s.value) || "").trim() || ((d = ht[Tt]) == null ? void 0 : d.name) || "Move", i("setupSummaryMeta").textContent = Yn.textContent);
  }
  i("setupSummary").addEventListener("click", ro), i("addFab").addEventListener("click", Wo);
  function jo() {
    const a = i("strengthList");
    return ui(a) || a.closest(".exerciseScroller");
  }
  function Tr() {
    const a = i("strengthList").getBoundingClientRect(), s = (jo() || i("strengthList")).getBoundingClientRect(), d = (Xt == null ? void 0 : Xt.ghost.offsetHeight) || 64;
    return { left: a.left, top: Math.max(s.top + 12, Math.min(s.bottom - d - 96, s.top + s.height * 0.55 - d / 2)), width: a.width, height: d };
  }
  function Cl(a, s) {
    var Z;
    const d = xn(s, [a.name || da[s][0], "Drag into place"]);
    d.classList.add("overList", "hovering"), d.setAttribute("aria-label", (a.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const m = document.createElement("span");
    m.className = "addGhostActions", m.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + nt(a.name) + '">✕</button>', d.appendChild(m), Xt = { item: a, type: s, ghost: d };
    const S = ((Z = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : Z.offsetHeight) || 64;
    d.style.width = i("strengthList").getBoundingClientRect().width + "px", d.style.height = S + "px";
    const _ = Tr(), O = pn.querySelector(".modal").getBoundingClientRect().bottom;
    d.style.transform = "translate(" + _.left + "px," + O + "px)", d.getBoundingClientRect(), Yt() || (d.classList.add("rising"), setTimeout(() => d.classList.remove("rising"), 650)), d.style.transform = "translate(" + _.left + "px," + _.top + "px)", m.querySelector("[data-a=end]").addEventListener("click", yo), m.querySelector("[data-a=discard]").addEventListener("click", Gs), d.addEventListener("pointerdown", Lr);
  }
  function Lr(a) {
    if (!Xt || a.target.closest("button") || a.button !== void 0 && a.button !== 0) return;
    a.preventDefault();
    const { item: s, ghost: d } = Xt, m = a.pointerId;
    try {
      d.setPointerCapture(m);
    } catch {
    }
    d.classList.remove("hovering", "rising"), d.classList.add("held");
    const S = d.getBoundingClientRect(), _ = jo(), O = Oo({
      ghost: d,
      origin: { left: S.left, top: S.top, width: S.width, height: S.height },
      sx: a.clientX,
      sy: a.clientY,
      scroller: _,
      column: i("strengthList").closest(".exerciseScroller,.createFlow") || _,
      rowLook: !0,
      home: Tr,
      onDrop: (He, De, bt) => {
        Xt = null, Lt(d), cs(s, He, De, bt);
      },
      onReturn: () => {
        d.classList.remove("held"), d.classList.add("hovering");
      }
    });
    let Z = !1;
    const be = (He) => {
      if (He.pointerId === m) {
        if (He.pointerType === "mouse" && He.buttons === 0) {
          We(!1);
          return;
        }
        O.move(He.clientX, He.clientY);
      }
    }, Me = (He) => {
      He.pointerId === m && We(!1);
    }, we = (He) => {
      He.pointerId === m && We(!0);
    }, he = () => We(!1), Fe = () => We(!0), at = (He) => {
      He.key === "Escape" && (He.preventDefault(), We(!0));
    };
    function We(He) {
      Z || (Z = !0, window.removeEventListener("pointermove", be, !0), window.removeEventListener("pointerup", Me, !0), window.removeEventListener("pointercancel", we, !0), window.removeEventListener("keydown", at, !0), window.removeEventListener("blur", Fe), d.removeEventListener("lostpointercapture", he), O.drop(He));
    }
    window.addEventListener("pointermove", be, !0), window.addEventListener("pointerup", Me, !0), window.addEventListener("pointercancel", we, !0), window.addEventListener("keydown", at, !0), window.addEventListener("blur", Fe), d.addEventListener("lostpointercapture", he);
  }
  function cs(a, s, d, m) {
    const S = qi(s);
    a.kind !== "rest" && a.kind !== "video" && (a.kind = S.kind, S.group && (!a.group || a.group === "Movement") && (a.group = S.group)), S.arr.splice(Math.max(0, Math.min(d, S.arr.length)), 0, a), Io(s.closest(".exerciseScroller,.createStepSlot") || s, () => Ut()), Fo(s.querySelector('.moveRow[data-id="' + a.id + '"]'), m), Ft(ls(Bn(a)) + " added");
  }
  function yo() {
    var m;
    if (!Xt) return;
    const { item: a, ghost: s } = Xt;
    Xt = null, Lt(s);
    const d = i("strengthList");
    cs(a, d, qi(d).arr.length, 0), (m = d.querySelector('.moveRow[data-id="' + a.id + '"]')) == null || m.scrollIntoView({ block: "nearest", behavior: Yt() ? "auto" : "smooth" });
  }
  function Gs() {
    if (!Xt) return;
    const a = Xt.ghost;
    Xt = null, Lt(a), Ft("Discarded");
  }
  function zi() {
    Xt && (Xt.ghost.remove(), Xt = null);
  }
  window.addEventListener("resize", () => {
    if (Xt != null && Xt.ghost.classList.contains("hovering")) {
      const a = Tr();
      Xt.ghost.style.width = a.width + "px", Xt.ghost.style.transform = "translate(" + a.left + "px," + a.top + "px)";
    }
  }), (fo = rn == null ? void 0 : rn.addEventListener) == null || fo.call(rn, "change", () => {
    La(), Xt && !qo() && yo(), Sr();
  });
  {
    const a = i("workoutModal").querySelector(".modal");
    a.addEventListener("scroll", () => {
      (a.scrollTop || a.scrollLeft) && (a.scrollTop = 0, a.scrollLeft = 0);
    });
  }
  function ka() {
    const a = i("workoutModal"), s = window.visualViewport;
    if (!a.classList.contains("open") || !qo()) {
      ps();
      return;
    }
    const d = s ? s.offsetTop : 0, m = s ? s.offsetLeft : 0, S = s ? s.width : window.innerWidth, _ = s ? s.height : window.innerHeight;
    Object.assign(a.style, { right: "auto", bottom: "auto", width: S + "px", height: _ + "px", top: d + "px", left: m + "px" });
    const O = a.getBoundingClientRect();
    Math.abs(O.top - d) > 0.5 && (a.style.top = 2 * d - O.top + "px"), Math.abs(O.left - m) > 0.5 && (a.style.left = 2 * m - O.left + "px");
  }
  function ps() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((a) => i("workoutModal").style.removeProperty(a));
  }
  (Yd = window.visualViewport) == null || Yd.addEventListener("resize", ka), (Zd = window.visualViewport) == null || Zd.addEventListener("scroll", ka), window.addEventListener("resize", ka), window.addEventListener("scroll", ka, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(ka, 250));
  function zo() {
    Xe.length > 0;
    const a = i("addMovementBtn"), s = i("addRestBtn");
    a && (a.innerHTML = Rn + "<span>Add movement</span>"), s && (s.innerHTML = Rn + "<span>Add rest</span>");
    const d = i("addVideoBtn");
    d && (d.innerHTML = Rn + "<span>Add video</span>");
  }
  function hi() {
    const a = i("useGlobalTiming").checked, s = i("addMovementDuration"), d = i("addMovementUnit");
    s.disabled = a, d.disabled = a, s.parentElement.style.opacity = a ? ".38" : "1", i("globalTimingValue").textContent = "Use global timing · " + Ba(q.value);
    const m = i("useGlobalRestTiming").checked, S = i("addRestDuration"), _ = i("addRestUnit");
    S.disabled = m, _.disabled = m, S.parentElement.style.opacity = m ? ".38" : "1", i("globalRestTimingValue").textContent = "Use global timing · " + Ba(R.value);
  }
  let sn = "movement";
  function Gi(a) {
    sn = a;
    const s = i("movementFields"), d = i("restFields");
    s.hidden = a !== "movement", d.hidden = a !== "rest", i("movementCreatorHeading").textContent = "Add movement", i("movementCreator").setAttribute("aria-label", "Create movement"), hi();
  }
  function Ui() {
    ht[Tt];
    const a = Qt ? !0 : i("useGlobalTiming").checked, s = a ? Number(q.value) : wo(
      i("addMovementDuration").value,
      i("addMovementUnit").value
    ), d = Qt ? !0 : i("useGlobalRestTiming").checked, m = d ? Number(R.value) : wo(
      i("addRestDuration").value,
      i("addRestUnit").value
    );
    if (sn === "rest") {
      const S = i("addRestTitle").value.trim() || "Rest", _ = i("addRestGroup").value.trim() || "Rest";
      Xe.push({
        id: "rest-" + Date.now(),
        name: S,
        group: _,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: d,
        duration: Math.max(5, m || Number(R.value))
      }), Ut(), i("movementCreator").hidden = !0, i("addRestTitle").value = "Rest", i("addRestGroup").value = "Rest", Ft("Rest added"), Qt && (te("movements"), E());
    } else {
      const S = i("addMovementInput").value.trim();
      if (!S) return;
      const _ = i("addMovementGroup").value.trim() || "Movement";
      Xe.push({
        id: "movement-" + Date.now(),
        name: S,
        group: _,
        kind: "work",
        hidden: !1,
        useGlobalTiming: a,
        duration: Math.max(5, s || Number(q.value))
      }), i("addMovementInput").value = "", i("addMovementGroup").value = "", Ut(), i("movementCreator").hidden = !0, Ft("Movement added"), Qt && (te("movements"), E());
    }
    zo();
  }
  let yn = null;
  function Ft(a, s) {
    const d = i("toast");
    d.innerHTML = "";
    const m = document.createElement("span");
    if (m.textContent = a, d.appendChild(m), s) {
      const S = document.createElement("button");
      S.type = "button", S.className = "toastAction", S.textContent = s.label, S.addEventListener("click", () => {
        s.run(), d.classList.remove("show", "withAction"), clearTimeout(yn);
      }), d.appendChild(S);
    }
    d.classList.toggle("withAction", !!s), d.classList.add("show"), clearTimeout(yn), yn = setTimeout(() => d.classList.remove("show", "withAction"), s ? 5e3 : 2200);
  }
  const Yi = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], Us = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function us(a) {
    return Math.max(0, Math.min(5, Math.floor(Number(a) / 100 * 6)));
  }
  function ln(a, s) {
    return Yi[us(s)];
  }
  function dn(a) {
    return Us[us(a)];
  }
  function Kt(a) {
    return a.getFullYear() + "-" + String(a.getMonth() + 1).padStart(2, "0") + "-" + String(a.getDate()).padStart(2, "0");
  }
  function ko() {
    return { morning: vt().morningTime || "08:00", evening: vt().eveningTime || "19:00" };
  }
  function cn(a) {
    const [s, d] = String(a).split(":").map(Number);
    return (s || 0) * 60 + (d || 0);
  }
  function Go(a) {
    const s = ko();
    return a.getHours() * 60 + a.getMinutes() >= cn(s.evening) ? "evening" : "morning";
  }
  function f(a, s) {
    return Ye.checkins.find((d) => d.date === a && d.slot === s);
  }
  function b(a) {
    return !!(a && a.mood != null && a.energy != null);
  }
  function y() {
    const a = /* @__PURE__ */ new Date(), s = Kt(a), d = Go(a), m = ko(), S = a.getHours() * 60 + a.getMinutes();
    return d === "morning" && S < cn(m.morning) || b(f(s, d)) ? null : d;
  }
  const C = i("checkinModal"), H = i("checkinTab"), Y = i("checkinBadge"), K = { mood: { input: i("moodInput"), fill: i("moodFill") }, energy: { input: i("energyLevelInput"), fill: i("energyLevelFill") } };
  function fe(a) {
    const { input: s, fill: d } = K[a];
    d.style.width = s.value + "%", s.setAttribute("aria-valuetext", ln(a, s.value));
  }
  Object.keys(K).forEach((a) => K[a].input.addEventListener("input", () => fe(a)));
  let Q = null;
  function ve() {
    const a = ko(), s = /* @__PURE__ */ new Date(), d = s.getHours() * 60 + s.getMinutes();
    return d < cn(a.morning) ? "Next check-in at " + a.morning : d < cn(a.evening) ? "Next check-in at " + a.evening : "Next check-in tomorrow at " + a.morning;
  }
  function ye() {
    const a = ko(), s = /* @__PURE__ */ new Date(), d = s.getHours() * 60 + s.getMinutes(), m = (S, _) => {
      const [O, Z] = S.split(":").map(Number);
      return new Date(s.getFullYear(), s.getMonth(), s.getDate() + (_ ? 1 : 0), O, Z);
    };
    return d < cn(a.morning) ? { date: m(a.morning), time: a.morning } : d < cn(a.evening) ? { date: m(a.evening), time: a.evening } : { date: m(a.morning, !0), time: a.morning };
  }
  let Ae = null, Qe = null;
  function je() {
    if (y()) {
      et(), Rt();
      return;
    }
    const a = ye(), s = Math.max(0, Math.round((a.date - Date.now()) / 1e3)), d = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), S = s % 60;
    i("peekCountdown").textContent = d + ":" + String(m).padStart(2, "0") + ":" + String(S).padStart(2, "0"), i("peekAt").textContent = "Available at " + a.time;
  }
  function _e() {
    je(), H.classList.add("peek"), clearInterval(Qe), Qe = setInterval(je, 1e3), clearTimeout(Ae), Ae = setTimeout(et, 6e3);
  }
  function et() {
    H.classList.remove("peek"), clearInterval(Qe), clearTimeout(Ae);
  }
  function ze() {
    const a = y();
    if (!a) {
      H.classList.contains("peek") ? et() : _e();
      return;
    }
    Q = { date: Kt(/* @__PURE__ */ new Date()), slot: a };
    const d = f(Q.date, a), m = Ye.checkins.find((S) => b(S));
    Object.keys(K).forEach((S) => {
      K[S].input.value = (d == null ? void 0 : d[S]) ?? (m == null ? void 0 : m[S]) ?? 50, fe(S);
    }), i("checkinTitle").textContent = a === "morning" ? "Morning check-in" : "Evening check-in", C.classList.add("open"), C.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => K.mood.input.focus());
  }
  function Ee() {
    C.classList.remove("open"), C.setAttribute("aria-hidden", "true"), Q && (ot = Q.date + "-" + Q.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", ot);
    } catch {
    }
    Q = null, Rt();
  }
  function gt() {
    if (!Q) return;
    if (b(f(Q.date, Q.slot))) {
      Ee();
      return;
    }
    const { date: a, slot: s } = Q;
    let d = f(a, s);
    d || (d = { date: a, slot: s }, Ye.checkins.unshift(d), Ye.checkins = Ye.checkins.slice(0, 2e3)), d.mood = Number(K.mood.input.value), d.energy = Number(K.energy.input.value), d.scale = 100, d.at = (/* @__PURE__ */ new Date()).toISOString(), Dn(), l.fire("checkin", { slot: s, mood: d.mood, energy: d.energy, mood_label: ln("mood", d.mood), energy_label: ln("energy", d.energy) }), Ft((s === "morning" ? "Morning" : "Evening") + " check-in saved"), Ee(), na(), sa(), ir(), Xa();
  }
  let ot = "";
  try {
    ot = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function Rt() {
    const a = y();
    Y.hidden = !a, H.hidden = !a, a || et(), H.classList.toggle("due", !!a), H.setAttribute("aria-label", a ? (a === "morning" ? "Morning" : "Evening") + " check-in is due" : ve()), H.title = a ? "Check in now" : ve();
  }
  function Ne() {
    Rt();
    const a = y();
    !a || C.classList.contains("open") || vt().checkinAutoOpen !== !1 && (i("app").classList.contains("house") || !qe.home.classList.contains("active") || pn.classList.contains("open") || ot !== Kt(/* @__PURE__ */ new Date()) + "-" + a && ze());
  }
  H.addEventListener("click", ze), i("checkinLater").addEventListener("click", Ee), i("checkinSave").addEventListener("click", gt), C.addEventListener("click", (a) => {
    a.target === C && Ee();
  }), C.addEventListener("keydown", (a) => {
    a.key === "Escape" && (a.preventDefault(), Ee());
  }), setInterval(Ne, 3e4);
  function na() {
    const a = Kt(/* @__PURE__ */ new Date()), s = (d) => Ye.checkins.find((m) => m.date === a && m[d] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([d, m]) => {
      const S = s(d);
      i(m).textContent = S ? ln(d, S[d]) : "—";
    });
  }
  function sa() {
    const a = i("feelCard");
    if (!a) return;
    const s = /* @__PURE__ */ new Date(), d = new Date(s.getFullYear(), s.getMonth(), s.getDate() - (s.getDay() + 6) % 7), m = [...Array(7)].map((Me, we) => {
      const he = new Date(d.getFullYear(), d.getMonth(), d.getDate() + we), Fe = Kt(he), at = Ye.checkins.filter((He) => He.date === Fe), We = (He) => {
        const De = at.map((bt) => bt[He]).filter((bt) => bt != null);
        return De.length ? De.reduce((bt, xt) => bt + xt, 0) / De.length : null;
      };
      return { d: he, key: Fe, mood: We("mood"), energy: We("energy"), count: at.filter(b).length, future: he > s && Fe !== Kt(s) };
    }), S = (Me) => {
      const we = m.map((he) => he[Me]).filter((he) => he != null);
      return we.length ? we.reduce((he, Fe) => he + Fe, 0) / we.length : null;
    }, _ = S("mood"), O = S("energy"), Z = (Me, we) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + Me + "</span><span>" + (we == null ? "—" : nt(ln("", we))) + '</span></div><div class="feelTrack"><span style="width:' + (we == null ? 0 : Math.max(4, we)) + "%;background:" + (we == null ? "transparent" : dn(we)) + '"></span></div></div>', be = m.filter((Me) => Me.mood != null && Me.energy != null).sort((Me, we) => we.mood + we.energy - (Me.mood + Me.energy))[0];
    a.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (_ == null ? "No check-ins yet" : nt(ln("", (_ + O) / 2))) + '</div><div class="weekCopy">' + (_ == null ? "Your first check-in will appear here." : "on average this week" + (be ? " · best day " + nt(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(be.d)) : "")) + '</div></div></div><div class="feelDays">' + m.map(
      (Me) => '<div class="weekChip feelDay' + (Me.future ? " future" : "") + (Me.key === Kt(s) ? " today" : "") + '"><div class="weekChipTop"><strong>' + nt(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(Me.d)) + "</strong>" + (Me.count >= 2 ? '<span class="weekTick">' + ja("check") + "</span>" : '<span class="feelDots">' + "●".repeat(Me.count) + "</span>") + "</div>" + Z("Mood", Me.mood) + Z("Energy", Me.energy) + "</div>"
    ).join("") + "</div>";
  }
  const Ja = i("upcomingCountSetting");
  Ja.addEventListener("change", () => {
    _n = Ja.value === "all" ? "all" : Number(Ja.value), xi();
  });
  const za = i("tempoRevealBtn"), Ar = i("tempoExperiment"), kn = i("tempoQuad"), so = i("tempoDot"), Dt = i("tempoEstimate"), Uo = i("tempoReadout");
  let Pn = { x: 0.5, y: 0.5 }, Mo = !1, So = { total: 20, work: 45, rest: 15 };
  function mi(a, s, d, m) {
    const S = Math.max(s, Math.min(d, a));
    return Math.round((S - s) / m) * m + s;
  }
  function Er(a, s) {
    const d = (a - 0.5) * 2, m = (s - 0.5) * 2, S = mi(
      So.total + d * 5 + m * 8,
      Number(B.min),
      Number(B.max),
      Number(B.step)
    ), _ = mi(
      So.work + d * 10 + m * 8,
      Number(q.min),
      Number(q.max),
      Number(q.step)
    ), O = mi(
      So.rest + d * 6 + m * 6,
      Number(R.min),
      Number(R.max),
      Number(R.step)
    );
    return B.value = S, q.value = _, R.value = O, ue.textContent = _ + " sec", ge.textContent = O + " sec", kr(), { total: S, work: _, rest: O };
  }
  function qa(a, s) {
    const d = a < 0.34 ? "Low" : a > 0.66 ? "Hard" : "Medium", m = s < 0.34 ? "Fast" : s > 0.66 ? "Slow" : "Balanced", S = Er(a, s);
    Uo.textContent = d + " + " + m, Dt.textContent = S.total + " min", kn.setAttribute("aria-valuetext", d + " and " + m + ", estimated " + S.total + " minutes");
  }
  function Tl(a) {
    const s = kn.getBoundingClientRect(), d = Math.max(0, Math.min(1, (a.clientX - s.left) / s.width)), m = Math.max(0, Math.min(1, (a.clientY - s.top) / s.height));
    Pn = { x: d, y: m }, so.style.left = d * 100 + "%", so.style.top = m * 100 + "%", qa(d, m);
  }
  za.addEventListener("click", () => {
    const a = Ar.hidden;
    Ar.hidden = !a, za.setAttribute("aria-expanded", a ? "true" : "false"), za.textContent = a ? "Now close this" : "Don’t try this!", a && (So = {
      total: Number(B.value),
      work: Number(q.value),
      rest: Number(R.value)
    }, Pn = { x: 0.5, y: 0.5 }, so.style.left = "50%", so.style.top = "50%", qa(Pn.x, Pn.y));
  }), n.querySelectorAll("[data-feedback-rating]").forEach((a) => a.addEventListener("click", () => {
    Number(a.dataset.feedbackRating), n.querySelectorAll("[data-feedback-rating]").forEach((s) => s.classList.toggle("selected", s === a));
  }));
  const fs = i("testingFeedbackForm"), Ll = i("testingFeedbackThanks"), xd = i("testingFeedbackAgain");
  fs.addEventListener("submit", (a) => {
    a.preventDefault(), fs.hidden = !0, Ll.hidden = !1, Ft("Feedback captured for prototype");
  }), xd.addEventListener("click", (a) => {
    a.preventDefault(), fs.reset(), n.querySelectorAll("[data-feedback-rating]").forEach((s) => s.classList.remove("selected")), Ll.hidden = !0, fs.hidden = !1;
  }), kn.addEventListener("pointerdown", (a) => {
    var s;
    Mo = !0, Tl(a);
    try {
      (s = kn.setPointerCapture) == null || s.call(kn, a.pointerId);
    } catch {
    }
  }), kn.addEventListener("pointermove", (a) => {
    Mo && Tl(a);
  }), kn.addEventListener("pointerup", (a) => {
    Mo && (Mo = !1, Tl(a), Ut());
  }), kn.addEventListener("pointercancel", () => Mo = !1), kn.addEventListener("keydown", (a) => {
    let { x: s, y: d } = Pn, m = !0;
    a.key === "ArrowLeft" ? s -= 0.05 : a.key === "ArrowRight" ? s += 0.05 : a.key === "ArrowUp" ? d -= 0.05 : a.key === "ArrowDown" ? d += 0.05 : m = !1, m && (a.preventDefault(), s = Math.max(0, Math.min(1, s)), d = Math.max(0, Math.min(1, d)), Pn = { x: s, y: d }, so.style.left = s * 100 + "%", so.style.top = d * 100 + "%", qa(s, d), Ut());
  });
  const pn = i("workoutModal");
  let Dr = null;
  function _r(a) {
    return a.map((s) => ({ ...s }));
  }
  function hs() {
    const a = ht[Tt];
    return {
      key: Tt,
      profile: a ? JSON.parse(JSON.stringify(a)) : null,
      warmup: _r(ra),
      strength: _r(Xe),
      cooldown: _r(on),
      total: Number(B.value),
      work: Number(q.value),
      rest: Number(R.value),
      rounds: Number(tt.value) || 1
    };
  }
  function Ys(a = !1) {
    Qt = !!a, ya = null, fa = null, La(), zi(), Dr = hs(), i("moveEditorTitle").textContent = Qt ? "Create new move" : "Edit move", i("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", i("moveEditorSubtitle").hidden = !Qt, i("warmupRow").hidden = Qt, i("deleteMoveOpen").hidden = Qt;
    const s = i("createMoveOptions");
    s.hidden = !Qt;
    {
      const d = ht[Tt];
      i("includeWarmupPreset").checked = !!(d != null && d.includeWarmup), i("includeCooldownPreset").checked = !!(d != null && d.includeCooldown);
    }
    if (El(), Qt) {
      i("useGlobalTiming").checked = !0, i("useGlobalRestTiming").checked = !0;
      const d = ht[Tt];
      Ii((d == null ? void 0 : d.preset) || "movement", !1);
    }
    i("movementCreator").hidden = !0, Gi("movement"), zo(), hi(), Ar.hidden = !0, za.setAttribute("aria-expanded", "false"), za.textContent = "Don’t try this!", pn.classList.toggle("createMode", Qt), pn.querySelector(".modal").classList.toggle("createMode", Qt), pn.classList.add("open"), pn.setAttribute("aria-hidden", "false"), ka(), Qt && Ce();
  }
  function Al() {
    const a = ht[Tt];
    return a != null && a.customSequence ? !!a.includeWarmup : !(a != null && a.warmupOff);
  }
  function El() {
    const a = Al(), s = i("warmupSwitch");
    s.classList.toggle("on", a), s.setAttribute("aria-checked", String(a));
  }
  i("warmupSwitch").addEventListener("click", () => {
    const a = ht[Tt];
    a && (a.customSequence ? (i("includeWarmupPreset").checked = !a.includeWarmup, Mr()) : (a.warmupOff = !a.warmupOff, Ut()), El());
  });
  function Rr() {
    La(), zi(), ps(), fa = null, ya = null, pn.classList.contains("createMode") && le(), pn.classList.remove("createMode"), pn.querySelector(".modal").classList.remove("createMode"), pn.classList.remove("open"), pn.setAttribute("aria-hidden", "true");
  }
  function yd() {
    if (!Dr) return;
    const a = Dr;
    a.profile && (ht[a.key] = JSON.parse(JSON.stringify(a.profile))), Tt = a.key, ra = _r(a.warmup), Xe = _r(a.strength), on = _r(a.cooldown), B.value = a.total, q.value = a.work, R.value = a.rest, tt.value = a.rounds || 1;
    const s = ht[Tt];
    if (s) {
      n.querySelectorAll(".workoutPanel[data-workout]").forEach((m) => m.classList.toggle("active", m.dataset.workout === Tt));
      const d = n.querySelector(".workoutPanel.active");
      if (d) {
        const m = d.querySelector(".workoutName");
        m && (m.textContent = s.name);
        const S = d.querySelector(".panelCollapsedText");
        S && (S.textContent = s.name);
        const _ = d.querySelector(".sourceTag");
        _ && (_.textContent = s.source);
      }
      v.value = s.name;
    }
    Ut();
  }
  i("cancelWorkoutEdit").addEventListener("click", () => {
    if (Qt) {
      const a = Tt;
      delete ht[a], Qt = !1, go = null, $t(Ye.order.find((s) => ht[s]) || Object.keys(ht)[0]);
    } else
      yd();
    Rr();
  }), i("saveWorkoutEdit").addEventListener("click", () => {
    La(), Xt && yo();
    const a = ht[Tt], s = v.value.trim() || "New move";
    if (a && (a.name = s), Oi(), ya = null, Ut(), Qt && a)
      Zn(Tt, a), n.querySelectorAll(".workoutPanel[data-workout]").forEach((d) => d.classList.toggle("active", d.dataset.workout === Tt)), Qt = !1, go = null, Ye.order.includes(Tt) || Ye.order.push(Tt), Ft("Move created");
    else {
      const d = n.querySelector(".workoutPanel.active");
      if (d) {
        const m = d.querySelector(".workoutName");
        m && (m.textContent = s);
        const S = d.querySelector(".panelCollapsedText");
        S && (S.textContent = s);
      }
      Ft("Move saved");
    }
    Dr = null, Rr(), Dn();
  }), pn.addEventListener("click", (a) => {
    if (a.target === pn) {
      if (Qt) {
        const s = Tt;
        delete ht[s], Qt = !1, go = null, $t(Ye.order.find((d) => ht[d]) || Object.keys(ht)[0]);
      } else
        yd();
      Rr();
    }
  }), Vi(i("addMovementBtn"), "movement"), Vi(i("addRestBtn"), "rest"), Vi(i("addVideoBtn"), "video"), i("closeMovementCreator").addEventListener("click", () => {
    i("movementCreator").hidden = !0;
  }), i("useGlobalTiming").addEventListener("change", hi), i("useGlobalRestTiming").addEventListener("change", hi), n.querySelectorAll(".createPresetBtn").forEach((a) => a.addEventListener("click", () => {
    Ii(a.dataset.movePreset, !0), Ut();
  })), i("includeWarmupPreset").addEventListener("change", Mr), i("includeCooldownPreset").addEventListener("change", Mr), i("includeWarmupPreset").addEventListener("change", E), i("includeCooldownPreset").addEventListener("change", E), v.addEventListener("input", E), v.addEventListener("input", fi), i("confirmAddMovement").addEventListener("click", Ui), i("confirmAddRest").addEventListener("click", Ui), i("addMovementInput").addEventListener("keydown", (a) => {
    a.key === "Enter" && Ui();
  });
  const ms = i("countdown"), Dl = i("countNum"), Yo = i("countdownPixelCanvas");
  let gs = null, Zi = "appear";
  class kd {
    constructor(s, d, m, S, _, O, Z) {
      this.width = s.width, this.height = s.height, this.ctx = d, this.x = m, this.y = S, this.color = _, this.speed = (Math.random() * 0.8 + 0.1) * O, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = Z, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let _l = [], Md = 1, Ki = 1;
  function gi() {
    const a = parseFloat(getComputedStyle(i("app")).zoom);
    return Number.isFinite(a) && a > 0 ? a : 1;
  }
  function Sd() {
    var Me;
    if (!Yo) return;
    const a = gi(), s = Math.max(1, window.innerWidth / a), d = Math.max(1, window.innerHeight / a);
    Md = s, Ki = d;
    const m = Math.min(window.devicePixelRatio || 1, 2);
    Yo.width = Math.floor(s * m), Yo.height = Math.floor(d * m), Yo.style.width = s + "px", Yo.style.height = d + "px";
    const S = Yo.getContext("2d");
    S.setTransform(m, 0, 0, m, 0, 0);
    const _ = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], O = 12, Z = (Me = window.matchMedia) == null ? void 0 : Me.call(window, "(prefers-reduced-motion: reduce)").matches, be = Z ? 0 : 0.055;
    _l = [];
    for (let we = 0; we < s; we += O)
      for (let he = 0; he < d; he += O) {
        const Fe = we - s / 2, at = he - d / 2, We = Math.sqrt(Fe * Fe + at * at), He = Z ? 0 : Math.random() * 75 + We * 0.05, De = new kd({ width: s, height: d }, S, we, he, _[Math.floor(Math.random() * _.length)], be, He);
        De.maxSizeInteger = 4, De.maxSize = Math.random() * 3.2 + 0.8, De.sizeStep = 0.35 + Math.random() * 0.45, _l.push(De);
      }
  }
  function Rl(a) {
    cancelAnimationFrame(gs), Zi = a;
    const s = Yo == null ? void 0 : Yo.getContext("2d");
    if (!s) return;
    function d() {
      s.clearRect(0, 0, Md, Ki);
      let m = !0;
      _l.forEach((S) => {
        S[Zi](), S.isIdle || (m = !1);
      }), Zi === "disappear" && m || (gs = requestAnimationFrame(d));
    }
    gs = requestAnimationFrame(d);
  }
  function vs() {
    cancelAnimationFrame(gs), Sd(), Rl("appear"), setTimeout(() => Rl("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    ms.classList.contains("active") && vs();
  });
  const Br = i("pixelTrailCanvas"), Pr = Br.getContext("2d");
  let Zo = !0, Nr = 0.7, $i = 600, vi = [], bi = null, Co = { x: 0, y: 0, ready: !1 };
  function Zs() {
    const a = u.getBoundingClientRect(), s = gi(), d = Math.min(window.devicePixelRatio || 1, 2), m = Math.max(1, a.width / s), S = Math.max(1, a.height / s);
    Br.width = Math.max(1, Math.floor(m * d)), Br.height = Math.max(1, Math.floor(S * d)), Br.style.width = m + "px", Br.style.height = S + "px", Pr.setTransform(d, 0, 0, d, 0, 0);
  }
  function Cd(a, s) {
    if (!Zo) return;
    const d = performance.now();
    Co.ready || (Co = { x: a, y: s, ready: !0 });
    const m = 7;
    for (let S = 1; S <= m; S++) {
      const _ = S / m;
      vi.push({
        x: Co.x + (a - Co.x) * _,
        y: Co.y + (s - Co.y) * _,
        born: d - (m - S) * 10
      });
    }
    Co = { x: a, y: s, ready: !0 };
  }
  function Ks(a) {
    if (bi = null, !x) return;
    if (!qe.workout.classList.contains("active")) {
      bi = requestAnimationFrame(Ks);
      return;
    }
    const s = u.getBoundingClientRect(), d = gi();
    Pr.clearRect(0, 0, s.width / d, s.height / d), Zo && (vi = vi.filter((S) => a - S.born < $i), Pr.fillStyle = i("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", vi.forEach((S) => {
      const _ = (a - S.born) / $i, O = (1 - _) * Nr, Z = Math.round(S.x / 14) * 14, be = Math.round(S.y / 14) * 14;
      Pr.globalAlpha = Math.max(0, O);
      const Me = 2 + 5 * (1 - _) * Nr;
      Pr.fillRect(Z - Me / 2, be - Me / 2, Me, Me);
    }), Pr.globalAlpha = 1), bi = requestAnimationFrame(Ks);
  }
  u.addEventListener("pointermove", (a) => {
    const s = u.getBoundingClientRect(), d = gi();
    Cd((a.clientX - s.left) / d, (a.clientY - s.top) / d);
  }), u.addEventListener("pointerleave", () => Co.ready = !1), new ResizeObserver(Zs).observe(u), Zs(), bi = requestAnimationFrame(Ks);
  const Ko = i("movementRippleCanvas"), wi = Ko.getContext("2d");
  let Xi = !0, Hr = null, Td = performance.now();
  function Ld() {
    const a = Ko.parentElement.getBoundingClientRect(), s = gi(), d = Math.max(1, a.width / s), m = Math.max(1, a.height / s), S = Math.min(window.devicePixelRatio || 1, 2);
    Ko.width = Math.max(1, Math.floor(d * S)), Ko.height = Math.max(1, Math.floor(m * S)), Ko.style.width = d + "px", Ko.style.height = m + "px", wi.setTransform(S, 0, 0, S, 0, 0);
  }
  function Ir() {
    var a;
    return Ot || ((a = Ke[dt]) == null ? void 0 : a.kind) === "rest";
  }
  function ea() {
    const a = Ke[dt];
    return Ir() ? 2200 : a ? a.kind === "warmup" || a.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function $s(a) {
    if (Hr = null, !x) return;
    if (!qe.workout.classList.contains("active")) {
      Hr = requestAnimationFrame($s);
      return;
    }
    const s = Ko.parentElement.getBoundingClientRect(), d = gi(), m = Math.max(1, s.width / d), S = Math.max(1, s.height / d);
    if (wi.clearRect(0, 0, m, S), Xi) {
      const _ = ea(), O = (a - Td) % _ / _, Z = 15, be = Math.max(8, Math.round(Z * S / Math.max(1, m))), Me = m / (Z + 1), we = S / (be + 1), he = m * 0.5, Fe = S * 0.52, at = Math.hypot(he, Fe), He = i("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let De = 1; De <= be; De++)
        for (let bt = 1; bt <= Z; bt++) {
          const xt = bt * Me, Ue = De * we, yt = Math.hypot(xt - he, Ue - Fe) / at, Pt = Ir(), ut = Pt ? Math.exp(-Math.pow((yt - (O * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, rt = Math.exp(-Math.pow((yt - O * 1.25) * 7, 2)), Ca = Pt ? ut : rt, Na = Pt ? 0.5 + 0.5 * Math.sin(O * Math.PI * 2 - yt * 3) ** 2 : 0.35 + 0.65 * Math.sin(O * Math.PI * 2 - yt * 5) ** 2, ta = Pt ? 1.4 + Ca * 4.2 * Na : 1.2 + Ca * 5 * Na;
          wi.beginPath(), wi.arc(xt, Ue, ta, 0, Math.PI * 2), wi.fillStyle = `rgba(${He},${Pt ? 0.08 + Ca * 0.48 : 0.05 + Ca * 0.55})`, wi.fill();
        }
    }
    Hr = requestAnimationFrame($s);
  }
  new ResizeObserver(Ld).observe(Ko.parentElement), Ld(), Hr = requestAnimationFrame($s);
  const bs = i("exerciseTitle"), $o = i("exerciseMeta"), Nn = i("stepLabel"), Bl = i("digits"), Pl = i("fill"), Fr = i("progress"), Xs = i("pause"), Ad = i("nextName"), Tc = i("nextMeta"), Lc = i("nextIcon"), ws = i("skipNextSession");
  let Ka = null;
  function Mn(a) {
    for (let s = Math.max(0, a); s < Ke.length; s++)
      if (!Ke[s].sessionHidden) return s;
    return -1;
  }
  function Ac() {
    const a = Ke[dt];
    if (!a) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (Ot) {
      const m = Mn(dt + 1), S = m >= 0 ? Ke[m] : null;
      return S ? { name: S.name, meta: Nl(S), icon: Sn(S) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (a.rest > 0) return { name: "Rest", meta: a.rest + " sec · " + (a.roundBreakAfter ? "round " + (a.round + 1) + " next" : "recovery"), icon: "pause" };
    const s = Mn(dt + 1), d = s >= 0 ? Ke[s] : null;
    return d ? { name: d.name, meta: Nl(d), icon: Sn(d) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function Ec() {
    if (!Ke[dt]) return Ke.length;
    const s = Mn(dt + 1);
    return s < 0 ? Ke.length : s + 1;
  }
  function Sn(a) {
    return a.kind === "video" ? "play" : "clock";
  }
  function Nl(a) {
    return a.kind === "video" ? "YouTube · " + bo(a.duration) : a.group + " · " + a.duration + " sec";
  }
  function Js() {
    return Ke.length && Ke[Ke.length - 1].round || 1;
  }
  function un(a) {
    const s = Ke[a];
    if (!s) return "";
    const d = Js();
    if (d <= 1) return "Step " + (a + 1) + " of " + Ke.length;
    if (s.roundBreak) return "Round " + s.round + " of " + d + " · Rest";
    const m = Ke.filter((S) => S.round === s.round && !S.roundBreak).length;
    return "Round " + s.round + " of " + d + " · Step " + (s.roundIndex + 1) + " of " + m;
  }
  function _t() {
    return Fr.querySelector('[data-step="' + dt + '"]');
  }
  function fn() {
    Ke[dt] && Number(Fr.dataset.round) !== (Ke[dt].round || 1) && Wa(), [...Fr.children].forEach((a) => {
      const s = Number(a.dataset.step);
      a.classList.toggle("done", s < dt), a.classList.toggle("active", s === dt), a.classList.toggle("rewindable", s <= dt), a.disabled = s > dt, s === dt && a.style.setProperty("--segment-progress", "0%");
    }), Ke[dt] && (Nn.textContent = un(dt), nr());
  }
  function Hl(a) {
    const s = Ke.indexOf(a);
    s < 0 || s <= dt || (a.sessionHidden = !a.sessionHidden, To(), Ft((a.sessionHidden ? "Hidden " : "Included ") + a.name + " for this session"));
  }
  function xi() {
    const a = i("upcomingList");
    if (!a) return;
    a.innerHTML = "";
    const s = Ec(), d = Ke.slice(s);
    (_n === "all" ? d : d.slice(0, Math.max(1, Number(_n) || 1))).forEach((S) => {
      const _ = document.createElement("section");
      _.className = "upcomingCard" + (S.sessionHidden ? " sessionHidden" : "") + (Ul(S) ? " noMeta" : ""), _.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + ja(Sn(S)) + '</div><div><div class="upcomingName">' + nt(S.name) + '</div><div class="upcomingMeta">' + nt(Nl(S)) + (Js() > 1 ? " · round " + S.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (S.sessionHidden ? "Include this session" : "Skip this session") + "</button>", _.querySelector(".skipSessionBtn").addEventListener("click", () => Hl(S)), a.appendChild(_);
    });
  }
  function To() {
    var s;
    const a = Ac();
    Ad.textContent = a.name, Tc.textContent = a.meta, Lc.innerHTML = ja(a.icon);
    {
      const d = Ot ? Ke[Mn(dt + 1)] : ((s = Ke[dt]) == null ? void 0 : s.rest) > 0 ? { kind: "rest" } : Ke[Mn(dt + 1)];
      n.querySelector(".nextCard").classList.toggle("noMeta", !!(d && Ul(d)));
    }
    if (Ka = null, Ot) {
      const d = Mn(dt + 1);
      d >= 0 && (Ka = Ke[d]);
    } else {
      const d = Ke[dt];
      if (d && d.rest > 0)
        Ka = null;
      else {
        const m = Mn(dt + 1);
        m >= 0 && (Ka = Ke[m]);
      }
    }
    ws && (ws.hidden = !Ka, ws.textContent = Ka != null && Ka.sessionHidden ? "Include this session" : "Skip this session"), xi();
  }
  ws.addEventListener("click", () => {
    Ka && (Ka.sessionHidden = !Ka.sessionHidden, Ft((Ka.sessionHidden ? "Hidden " : "Included ") + Ka.name + " for this session"), To());
  });
  let $a = null, lo = null;
  function co(a, s = {}) {
    const d = ht[Tt];
    l.fire(a, { move: (d == null ? void 0 : d.name) || "", move_id: Tt, ...s });
  }
  function Dc() {
    const a = ht[Tt];
    $a = { key: Tt, name: (a == null ? void 0 : a.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(lo), lo = setInterval(() => {
      $a && !Be && $a.active++;
    }, 1e3), co("started", { steps: Ke.length });
  }
  function Ed(a) {
    if (clearInterval(lo), !$a) return;
    const s = $a;
    $a = null, co(a ? "completed" : "ended", { seconds: s.active }), !(s.active < 30) && (Ye.history.unshift({ id: "h-" + s.startedAt, move_id: s.key, name: s.name, start: new Date(s.startedAt).toISOString(), seconds: s.active, completed: a }), Ye.history = Ye.history.slice(0, 1e3), Dn(), ir(), Xa());
  }
  let St = null, Ji = null, Xo = !1;
  function Xn() {
    return vt().sounds !== !1;
  }
  function Il() {
    if (Xn())
      try {
        navigator.audioSession && (navigator.audioSession.type = "playback"), St = St || new (window.AudioContext || window.webkitAudioContext)(), St.state === "suspended" && St.resume();
      } catch {
        St = null;
      }
  }
  function yi(a, s, d, { to: m = a, vol: S = 0.25, type: _ = "sine" } = {}) {
    const O = St.currentTime + s, Z = St.createOscillator(), be = St.createGain();
    Z.type = _, Z.frequency.setValueAtTime(a, O), m !== a && Z.frequency.exponentialRampToValueAtTime(m, O + d), be.gain.setValueAtTime(1e-4, O), be.gain.exponentialRampToValueAtTime(S, O + 0.01), be.gain.exponentialRampToValueAtTime(1e-4, O + d), Z.connect(be).connect(St.destination), Z.start(O), Z.stop(O + d + 0.02);
  }
  const Dd = {
    tick: () => yi(880, 0, 0.07, { vol: 0.18 }),
    move: () => {
      yi(660, 0, 0.12, { type: "triangle", vol: 0.3 }), yi(990, 0.13, 0.16, { type: "triangle", vol: 0.3 });
    },
    rest: () => yi(660, 0, 0.4, { to: 440, vol: 0.22 }),
    done: () => {
      yi(523, 0, 0.16, { type: "triangle" }), yi(659, 0.16, 0.16, { type: "triangle" }), yi(784, 0.32, 0.4, { type: "triangle" });
    }
  };
  function Jo(a) {
    if (!(!Xn() || !St))
      try {
        St.state === "suspended" && St.resume(), Dd[a]();
      } catch {
      }
  }
  function Or() {
    xa >= 1 && xa <= 3 && xa !== Ji && (Ji = xa, Jo("tick"));
  }
  function _c() {
    Il(), T("workout"), qr();
    const a = Mn(0);
    a >= 0 && Ke[a].kind === "video" && al(Ke[a]);
  }
  function xs() {
    ks(), Ed(!1), clearInterval(At), clearInterval(Et), Ot = !1, Ea(!1), i("app").classList.remove("resting"), ms.classList.remove("active"), T("home");
  }
  function qr() {
    ms.classList.add("active");
    let a = 5;
    Dl.textContent = a, Jo("tick"), requestAnimationFrame(vs), clearInterval(Et), Et = setInterval(() => {
      a--, a > 0 ? (Dl.textContent = a, Jo("tick"), vs()) : (clearInterval(Et), Dl.textContent = "GO", Jo("move"), Xo = !0, vs(), setTimeout(() => {
        ms.classList.remove("active"), cancelAnimationFrame(gs), Rd();
      }, 650));
    }, 1e3);
  }
  function Wa() {
    var s;
    Fr.innerHTML = "";
    const a = ((s = Ke[Math.max(0, dt)] || Ke[0]) == null ? void 0 : s.round) || 1;
    Fr.dataset.round = a, Ke.forEach((d, m) => {
      if ((d.round || 1) !== a) return;
      const S = document.createElement("button");
      S.dataset.step = m, S.type = "button", S.className = "progressSegment", S.setAttribute("aria-label", "Go to " + d.name), S.addEventListener("click", () => {
        m <= dt && _d(m);
      }), Fr.appendChild(S);
    });
  }
  function Ea(a) {
    a = !!a;
    const s = Be !== a;
    if (Be = a, Xs.textContent = a ? "Resume" : "Pause", i("app").classList.toggle("paused", a), Ga && Zt)
      try {
        a ? Zt.pauseVideo() : Zt.playVideo();
      } catch {
      }
    s && $a && co(a ? "paused" : "resumed");
  }
  function _d(a) {
    a < 0 || a >= Ke.length || a > dt || (clearInterval(At), Ot = !1, i("app").classList.remove("resting"), dt = a, Ea(!1), Wr(), At = setInterval(Da, 1e3));
  }
  function Rd() {
    if (dt = Mn(0), Ea(!1), Wa(), dt < 0) {
      bs.textContent = "No activities", $o.textContent = "Open Edit and enable or add a movement", $o.hidden = !1;
      return;
    }
    Dc(), Wr(), clearInterval(At), At = setInterval(Da, 1e3);
  }
  const Qs = i("videoStage"), Qi = i("videoSound"), Rc = 0, Jn = 1, Bc = 2;
  let Fl = 0, Jt = null, er = null, Zt = null, ki = null, el = 0, Ol = !1, Ga = null, ys = null;
  function Bd() {
    var a;
    return (a = window.YT) != null && a.Player ? Promise.resolve(window.YT) : Jt || (Jt = new Promise((s, d) => {
      const m = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          m == null || m();
        } catch {
        }
      };
      const S = setInterval(() => {
        var O;
        (O = window.YT) != null && O.Player && (clearInterval(S), clearTimeout(_), s(window.YT));
      }, 100), _ = setTimeout(() => {
        clearInterval(S), Jt = null, d(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const O = document.createElement("script");
        O.src = "https://www.youtube.com/iframe_api", O.async = !0, O.onerror = () => {
          clearInterval(S), clearTimeout(_), Jt = null, d(new Error("YouTube did not load"));
        }, document.head.appendChild(O);
      }
    }), Jt);
  }
  function tl() {
    return er || (er = Bd().then((a) => new Promise((s) => {
      const d = document.createElement("div");
      i("videoFrame").appendChild(d), Zt = new a.Player(d, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => s(Zt), onStateChange: (m) => Pc(m.data), onError: (m) => Lo(m.data) }
      });
    })), er.catch(() => {
      er = null;
    }), er);
  }
  function al(a) {
    !(a != null && a.videoId) || a.videoError || tl().then((s) => {
      Ga || ki === a.videoId || (ki = a.videoId, el = Number(a.start) || 0, Ol = !1, s.mute(), s.loadVideoById({ videoId: a.videoId, startSeconds: el }));
    }).catch(() => {
    });
  }
  function ql() {
    const a = Mn(dt + 1);
    a >= 0 && Ke[a].kind === "video" && al(Ke[a]);
  }
  function Pc(a) {
    if (!Ga) {
      a === Jn && !Ol && (Ol = !0, Zt.pauseVideo(), Zt.seekTo(el, !0));
      return;
    }
    Qs.classList.toggle("playing", a === Jn), Ke[dt] === Ga && performance.now() > Fl && (a === Jn && Be ? Ea(!1) : a === Bc && !Be && Ea(!0)), a === Jn && Vl(Ga.videoId, Zt.getDuration()) && Dn(), a === Rc && ar();
  }
  function Lo(a) {
    const s = Ga;
    if (!s) {
      ki = null;
      return;
    }
    a === 101 || a === 150 ? (Nc(s.videoId), Ft("That video can’t play outside YouTube, so it was skipped")) : Ft("The video couldn’t play, so it was skipped"), ar();
  }
  function tr(a) {
    if (i("app").classList.add("videoStep"), Qi.hidden = !0, Ga = a, clearTimeout(ys), !a.videoId) {
      Ft("This video step has no link yet, so it was skipped"), setTimeout(() => ar(), 0);
      return;
    }
    tl().then((s) => {
      if (Ga !== a) return;
      Fl = performance.now() + 1500;
      const d = Number(a.start) || 0;
      ki !== a.videoId ? (ki = a.videoId, el = d, s.loadVideoById({ videoId: a.videoId, startSeconds: d })) : (s.seekTo(d, !0), s.playVideo()), s.unMute(), Be && s.pauseVideo(), ys = setTimeout(() => {
        Ga !== a || Be || (s.getPlayerState() !== Jn ? (s.mute(), s.playVideo(), Qi.hidden = !1) : s.isMuted() && (Qi.hidden = !1));
      }, 1600);
    }).catch(() => {
      Ga === a && (Ft("YouTube didn’t load, so the video was skipped"), ar());
    });
  }
  function Pd() {
    if (!i("app").classList.contains("videoStep")) return;
    const a = n.querySelector(".workGrid"), s = n.querySelector(".sessionControlRow"), d = a.getBoundingClientRect().top, m = (s == null ? void 0 : s.offsetHeight) || 42, S = window.innerHeight - d - 16 - m - 84;
    a.style.setProperty("--theater-h", Math.max(240, Math.round(S)) + "px");
  }
  window.addEventListener("resize", Pd);
  function ks() {
    clearTimeout(ys);
    const a = Ga;
    if (Ga = null, i("app").classList.remove("videoStep"), Qs.classList.remove("playing"), Qi.hidden = !0, a && Zt) {
      try {
        Zt.pauseVideo();
      } catch {
      }
      ki = null;
    }
  }
  function ar() {
    const a = Ga;
    !a || Ke[dt] !== a || (ks(), clearInterval(At), Ao(), At = setInterval(Da, 1e3));
  }
  Qi.addEventListener("click", () => {
    Zt && (Zt.unMute(), Zt.playVideo()), Qi.hidden = !0;
  });
  function nl(a) {
    var m;
    const s = Number(a.start) || 0;
    if (a.useVideoLength === !1) return s + (Number(a.duration) || 300);
    const d = Zt && Ga === a && Number((m = Zt.getDuration) == null ? void 0 : m.call(Zt)) || 0;
    return Number(a.end) || d || Number(a.videoDuration) || s + (Number(a.duration) || 300);
  }
  function Wl(a, s) {
    const d = ht[Tt];
    [ra, Xe, on, d == null ? void 0 : d.warmup, d == null ? void 0 : d.strength, d == null ? void 0 : d.cooldown, d == null ? void 0 : d.sequence].forEach((m) => (Array.isArray(m) ? m : []).forEach((S) => {
      S && S.kind === "video" && S.videoId === a && s(S);
    }));
  }
  function Vl(a, s) {
    s = Math.round(Number(s) || 0);
    let d = !1;
    return a && s > 0 && Wl(a, (m) => {
      m.videoDuration !== s && (m.videoDuration = s, d = !0);
    }), d;
  }
  function Nc(a) {
    Wl(a, (s) => {
      s.videoError = "embed";
    }), Dn();
  }
  function jl(a) {
    const s = a.videoId;
    if (!s) return;
    const d = () => {
      pn.classList.contains("open") ? ya || Ut() : (Ut(), Dn());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + s)).then((m) => m.ok ? m.json() : Promise.reject(m.status)).then((m) => {
      a.videoId === s && (a.videoTitle = m.title || "", a.autoName && m.title && (a.name = m.title), d());
    }).catch((m) => {
      a.videoId === s && m === 401 && (a.videoError = "embed", d());
    }), Qn(s).then((m) => {
      Vl(s, m) && d();
    }).catch((m) => {
      m === "embed" && a.videoId === s && (a.videoError = "embed", d());
    });
  }
  function Qn(a) {
    return Bd().then((s) => new Promise((d, m) => {
      const S = document.createElement("div");
      S.className = "videoProbe", S.setAttribute("aria-hidden", "true");
      const _ = document.createElement("div");
      S.appendChild(_), i("app").appendChild(S);
      let O = null, Z = !1;
      const be = (he, Fe) => {
        Z || (Z = !0, clearTimeout(Me), setTimeout(() => {
          try {
            O == null || O.destroy();
          } catch {
          }
          S.remove();
        }, 0), Fe ? m(Fe) : d(he));
      }, Me = setTimeout(() => be(0), 2e4), we = () => {
        var Fe;
        const he = Number((Fe = O == null ? void 0 : O.getDuration) == null ? void 0 : Fe.call(O)) || 0;
        return he > 0 && be(he), he > 0;
      };
      O = new s.Player(_, {
        width: 320,
        height: 180,
        videoId: a,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            we() || (O.mute(), O.playVideo());
          },
          onStateChange: () => we(),
          onError: (he) => be(0, he.data === 101 || he.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function Wr() {
    Ot = !1;
    const a = Ke[dt];
    i("app").classList.toggle("resting", a.kind === "rest"), a.kind === "video" ? tr(a) : ks(), xa = a.duration, wt = a.duration, Ji = null, Xo ? Xo = !1 : Jo(a.kind === "rest" ? "rest" : "move"), bs.textContent = a.name, $o.textContent = a.group, $o.hidden = !0, Nn.textContent = un(dt), $a && co("step", { name: a.name, group: a.group, kind: a.kind, step: dt + 1, of: Ke.length, round: a.round || 1, rounds: Js(), duration: a.duration }), To(), fn(), ql(), a.kind === "video" && setTimeout(Pd, 0);
  }
  function nr() {
    var S;
    const a = ((S = Ke[dt]) == null ? void 0 : S.kind) === "video" && !Ot, s = a && xa >= 60;
    Bl.textContent = s ? bo(xa) : xa, Bl.classList.toggle("long", s), a && (i("videoClock").textContent = bo(xa) + " left");
    const d = xa / wt * 100;
    Pl.style.width = d + "%";
    const m = _t();
    if (m && !Ot) {
      const _ = 100 - d;
      m.style.setProperty("--segment-progress", _ + "%");
    }
  }
  function Da() {
    var s, d;
    if (Be) return;
    const a = Ke[dt];
    if ((a == null ? void 0 : a.kind) === "video" && !Ot && Ga === a) {
      const m = Number((s = Zt == null ? void 0 : Zt.getCurrentTime) == null ? void 0 : s.call(Zt)) || 0, S = Number(a.start) || 0, _ = nl(a);
      wt = Math.max(1, _ - S), (m > S || ((d = Zt == null ? void 0 : Zt.getPlayerState) == null ? void 0 : d.call(Zt)) === Jn) && (xa = Math.max(0, Math.ceil(_ - m))), nr(), Or(), m > S && m >= _ - 0.25 && ar();
      return;
    }
    xa--, nr(), Or(), xa <= 0 && (a.rest > 0 ? Ms(a.rest) : Ao());
  }
  function Ms(a) {
    var d;
    Ot = !0, i("app").classList.add("resting");
    const s = _t();
    s && s.style.setProperty("--segment-progress", "100%"), clearInterval(At), xa = a, wt = a, Ji = null, Jo("rest"), $a && co("rest", { duration: a }), bs.textContent = "Rest", $o.textContent = (d = Ke[dt]) != null && d.roundBreakAfter ? "Round " + (Ke[dt].round + 1) + " next" : "Recovery", To(), nr(), At = setInterval(() => {
      Be || (xa--, nr(), Or(), xa <= 0 && (clearInterval(At), Ao(), At = setInterval(Da, 1e3)));
    }, 1e3);
  }
  function Ao() {
    Ot = !1;
    const a = Mn(dt + 1);
    if (a >= 0)
      dt = a, Wr();
    else {
      clearInterval(At), ks(), Ea(!1), i("app").classList.remove("resting"), bs.textContent = "Complete", $o.textContent = "Move finished", $o.hidden = !1, Bl.textContent = "✓";
      {
        const s = Js();
        Nn.textContent = s > 1 ? s + " rounds done" : Ke.filter((d) => !d.roundBreak).length + " steps done";
      }
      Ed(!0), Jo("done");
      {
        const s = Jl(7).reduce((d, m) => d + m.minutes, 0);
        $o.textContent = "Move finished · " + s + " min in the last 7 days";
      }
      Pl.style.width = "100%", To();
    }
  }
  i("skipExercise").addEventListener("click", () => {
    Vr(), Ea(!1);
  });
  function Vr() {
    clearInterval(At);
    const a = Ke[dt];
    if (Ot) {
      Ot = !1, i("app").classList.remove("resting");
      const d = Mn(dt + 1);
      d >= 0 ? (dt = d, Wr(), At = setInterval(Da, 1e3)) : Ao();
      return;
    }
    if (a && a.rest > 0) {
      Ms(a.rest);
      return;
    }
    const s = Mn(dt + 1);
    s >= 0 ? (dt = s, Wr(), At = setInterval(Da, 1e3)) : Ao();
  }
  i("restartSegment").addEventListener("click", () => {
    if (clearInterval(At), Ea(!1), Ot) {
      const a = Ke[dt];
      xa = a.rest, wt = a.rest, Ji = null, Jo("rest"), bs.textContent = "Rest", $o.textContent = "Recovery", i("app").classList.add("resting"), To(), nr();
    } else
      Wr();
    At = setInterval(Ot ? () => {
      Be || (xa--, nr(), Or(), xa <= 0 && (clearInterval(At), Ao(), At = setInterval(Da, 1e3)));
    } : Da, 1e3);
  });
  function jr(a, s, d, m) {
    let S = 0, _ = null, O = !1;
    function Z() {
      _ && cancelAnimationFrame(_), _ = null, S = 0, O = !1, s.style.width = "0%", a.classList.remove("holding");
    }
    function be(he) {
      if (!O) return;
      S || (S = he);
      const Fe = Math.min(1, (he - S) / d);
      if (s.style.width = Fe * 100 + "%", Fe >= 1) {
        O = !1, _ && cancelAnimationFrame(_), _ = null, s.style.width = "100%", setTimeout(() => s.style.width = "0%", 90), m();
        return;
      }
      _ = requestAnimationFrame(be);
    }
    function Me(he) {
      var Fe;
      if (!(he && he.button !== void 0 && he.button !== 0)) {
        he == null || he.preventDefault(), Z(), O = !0, a.classList.add("holding");
        try {
          (Fe = a.setPointerCapture) == null || Fe.call(a, he.pointerId);
        } catch {
        }
        _ = requestAnimationFrame(be);
      }
    }
    function we() {
      O && Z();
    }
    a.addEventListener("pointerdown", Me), a.addEventListener("pointerup", we), a.addEventListener("pointercancel", we), a.addEventListener("lostpointercapture", we), a.addEventListener("keydown", (he) => {
      (he.key === " " || he.key === "Enter") && !he.repeat && Me(he);
    }), a.addEventListener("keyup", (he) => {
      (he.key === " " || he.key === "Enter") && we();
    });
  }
  const zl = i("endWorkout");
  jr(zl, i("holdEndFill"), 1500, xs);
  const zr = i("deleteMoveConfirm");
  i("deleteMoveOpen").addEventListener("click", () => {
    zr.classList.add("open"), zr.setAttribute("aria-hidden", "false");
  }), i("deleteMoveCancel").addEventListener("click", () => {
    zr.classList.remove("open"), zr.setAttribute("aria-hidden", "true");
  });
  function Nd() {
    const a = Tt, s = n.querySelector('.workoutPanel[data-workout="' + a + '"]');
    s && s.remove(), delete ht[a], Ye.order = Ye.order.filter((m) => m !== a);
    let d = n.querySelector(".workoutPanel[data-workout]");
    if (!d) {
      const m = "custom-" + Date.now();
      ht[m] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, Ye.order.push(m), d = Zn(m, ht[m]);
    }
    zr.classList.remove("open"), zr.setAttribute("aria-hidden", "true"), Dr = null, Rr(), $t(d.dataset.workout), Dn(), Ft("Move deleted");
  }
  jr(i("deleteMoveYes"), i("deleteMoveFill"), 1500, Nd);
  const Gr = n.querySelector(".rubberTabs"), Qo = i("rubberIndicator");
  function Mi(a, s = !0) {
    if (!a || !Gr || !Qo) return;
    const d = Gr.getBoundingClientRect(), m = a.getBoundingClientRect();
    Qo.style.transition = s ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const S = gi();
    Qo.style.left = (m.left - d.left) / S + Gr.scrollLeft + "px", Qo.style.width = m.width / S + "px", s && (Qo.style.transform = "scaleX(1.08)", setTimeout(() => Qo.style.transform = "scaleX(1)", 180));
  }
  n.querySelectorAll(".tab").forEach((a) => a.addEventListener("click", () => {
    a.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), n.querySelectorAll(".tab").forEach((s) => s.classList.remove("active")), n.querySelectorAll(".settingsPane").forEach((s) => s.classList.remove("active")), a.classList.add("active"), i(a.dataset.pane).classList.add("active"), Mi(a, !0);
  })), requestAnimationFrame(() => Mi(n.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => Mi(n.querySelector(".tab.active"), !1));
  const Ss = i("pixelTrailToggle"), ol = i("rippleToggle"), Si = i("trailStrength"), ei = i("trailLife");
  function Hn(a, s) {
    vt()[a] = s, Dn();
  }
  const Hd = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function Gl(a) {
    return a.kind === "rest" ? "rest" : a.kind === "video" ? "video" : "g:" + String(a.group || "").trim().toLowerCase();
  }
  function Ul(a) {
    var s;
    return !!((s = vt().hideMeta) != null && s[Gl(a)]);
  }
  function Yl() {
    const a = /* @__PURE__ */ new Map(), s = (d, m, S) => {
      if (!d) return;
      Array.isArray(d) && (d = { name: d[1], group: d[2], kind: "work" });
      const _ = Gl(d);
      let O = a.get(_);
      O || (O = { key: _, label: _ === "rest" ? "Rest" : _ === "video" ? "Video" : String(d.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, a.set(_, O)), O.kinds.add(_ === "rest" ? "Rest" : _ === "video" ? "Video" : m), O.moves.add(S), O.count++;
    };
    return Object.values(ht).forEach((d) => {
      const m = d.name || "Move";
      (d.warmup || (d.customSequence ? [] : mo)).forEach((S) => s(S, "Warm-up", m)), (d.customSequence ? d.sequence || [] : d.strength || []).forEach((S) => s(S, S.presetRole === "warmup" ? "Warm-up" : S.presetRole === "cooldown" ? "Cooldown" : "Movement", m)), (d.cooldown || (d.customSequence ? [] : pt)).forEach((S) => s(S, "Cooldown", m));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([d, m]) => {
      a.has(d) || a.set(d, { key: d, label: m, kinds: /* @__PURE__ */ new Set([m]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...a.values()].map((d) => ({ ...d, kind: d.kinds.has("Movement") ? "Movement" : [...d.kinds][0], moves: [...d.moves] })).sort((d, m) => Hd.indexOf(d.kind) - Hd.indexOf(m.kind) || d.label.localeCompare(m.label));
  }
  let Zl = "all";
  function il() {
    const a = i("metaSearch").value.trim().toLowerCase();
    return Yl().filter((s) => (Zl === "all" || s.kind === Zl) && (!a || s.label.toLowerCase().includes(a) || s.moves.some((d) => d.toLowerCase().includes(a))));
  }
  function Bt() {
    const a = i("metaTableBody");
    if (!a) return;
    const s = vt().hideMeta || {}, d = il();
    a.innerHTML = d.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', d.forEach((S) => {
      const _ = !s[S.key], O = S.count ? (S.moves.length > 2 ? S.moves.slice(0, 2).join(", ") + " + " + (S.moves.length - 2) + " more" : S.moves.join(", ")) + " · " + S.count + " step" + (S.count === 1 ? "" : "s") : "Not used yet", Z = document.createElement("tr");
      Z.className = _ ? "" : "off", Z.innerHTML = '<td><div class="metaType">' + nt(S.label) + '</div><div class="metaSub">' + nt(S.kind + " · " + O) + '</div></td><td class="metaKindCol">' + nt(S.kind) + '</td><td class="metaUsedCol">' + nt(O) + '</td><td class="metaSwitchCol"><button class="switch' + (_ ? " on" : "") + '" type="button" role="switch" aria-checked="' + _ + '" aria-label="Second line for ' + nt(S.label) + ' on phones"></button></td>', Z.querySelector(".switch").addEventListener("click", () => Qa([S.key], _)), a.appendChild(Z);
    });
    const m = d.filter((S) => s[S.key]).length;
    i("metaCount").textContent = d.length ? d.length + " type" + (d.length === 1 ? "" : "s") + (m ? " · " + m + " hidden on phones" : "") : "";
  }
  function Qa(a, s) {
    const d = { ...vt().hideMeta || {} };
    a.forEach((m) => {
      s ? d[m] = !0 : delete d[m];
    }), Hn("hideMeta", d), Bt(), Sr(), To();
  }
  i("metaSearch").addEventListener("input", Bt), i("metaKinds").querySelectorAll(".kindChip").forEach((a) => a.addEventListener("click", () => {
    Zl = a.dataset.kind, i("metaKinds").querySelectorAll(".kindChip").forEach((s) => s.classList.toggle("active", s === a)), Bt();
  })), i("metaHideAll").addEventListener("click", () => Qa(il().map((a) => a.key), !0)), i("metaShowAll").addEventListener("click", () => Qa(il().map((a) => a.key), !1));
  const ti = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...vt().toggles || {} };
  function Id() {
    n.querySelectorAll("[data-toggle]").forEach((d) => d.classList.toggle("on", ti[d.dataset.toggle] !== !1)), n.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([d, m]) => {
      i(m).hidden = ti[d] === !1;
    });
    const a = ["steps", "mood", "energyLevel"].some((d) => ti[d] !== !1);
    n.querySelector(".activityCard").hidden = !a, i("weatherCard").hidden = !0;
    const s = n.querySelector("#homeView .grid");
    s.classList.toggle("noActivity", !a), s.classList.toggle("noWeather", !0);
  }
  n.querySelectorAll("[data-toggle]").forEach((a) => a.addEventListener("click", () => {
    ti[a.dataset.toggle] = ti[a.dataset.toggle] === !1, Id(), Hn("toggles", { ...ti });
  })), Id();
  function Kl() {
    Ss.classList.toggle("on", Zo), ol.classList.toggle("on", Xi), Si.value = Math.round(Nr * 100), i("trailStrengthValue").textContent = Si.value + "%", ei.value = $i, i("trailLifeValue").textContent = ei.value + " ms";
  }
  vt().trailEnabled !== void 0 && (Zo = vt().trailEnabled), vt().rippleEnabled !== void 0 && (Xi = vt().rippleEnabled), vt().trailStrength !== void 0 && (Nr = vt().trailStrength), vt().trailMaxAge !== void 0 && ($i = vt().trailMaxAge), Kl();
  const $l = i("soundsToggle");
  $l.classList.toggle("on", Xn()), $l.addEventListener("click", () => {
    Hn("sounds", !Xn()), $l.classList.toggle("on", Xn()), Xn() && (Il(), Jo("move"));
  }), Ss.addEventListener("click", () => {
    Zo = !Zo, Ss.classList.toggle("on", Zo), Zo || (vi = []), Hn("trailEnabled", Zo);
  }), ol.addEventListener("click", () => {
    Xi = !Xi, ol.classList.toggle("on", Xi), Hn("rippleEnabled", Xi);
  }), Si.addEventListener("input", () => {
    Nr = Number(Si.value) / 100, i("trailStrengthValue").textContent = Si.value + "%";
  }), Si.addEventListener("change", () => Hn("trailStrength", Nr)), ei.addEventListener("input", () => {
    $i = Number(ei.value), i("trailLifeValue").textContent = ei.value + " ms";
  }), ei.addEventListener("change", () => Hn("trailMaxAge", $i)), Ja.addEventListener("change", () => Hn("upcomingCount", _n));
  function po(a) {
    n.querySelectorAll(".themeBtn").forEach((d) => d.classList.toggle("active", d.dataset.theme === a));
    const s = a === "light";
    i("app").classList.toggle("light", s), l.setLight(s), eo(n);
  }
  po(vt().theme || "dark"), n.querySelectorAll(".themeBtn").forEach((a) => a.addEventListener("click", () => {
    po(a.dataset.theme), Hn("theme", a.dataset.theme);
  }));
  const _a = { steps: null, weather: null, ...vt().entities || {} };
  let oa = null, or = {};
  function hn(a) {
    const s = Object.values(a).filter((Z) => Z.entity_id.startsWith("sensor.") || Z.entity_id.startsWith("input_number.")), d = (Z) => Z.attributes.friendly_name || Z.entity_id, m = s.filter((Z) => /step/i.test(Z.entity_id) || /step/i.test(d(Z)) || ["steps", "step"].includes(String(Z.attributes.unit_of_measurement || "").toLowerCase())), S = s.filter((Z) => !m.includes(Z)), _ = (Z, be) => d(Z).localeCompare(d(be)), O = (Z, be) => /health_steps/.test(be.entity_id) - /health_steps/.test(Z.entity_id) || _(Z, be);
    return { suggested: m.sort(O), rest: S.sort(_), label: d };
  }
  function Eo(a) {
    const s = i("stepsEntity");
    if (!s || s.matches(":focus")) return;
    const { suggested: d, rest: m, label: S } = hn(a), _ = (be) => '<option value="' + nt(be.entity_id) + '">' + nt(S(be)) + "</option>";
    s.innerHTML = '<option value="">Not connected</option>' + (d.length ? '<optgroup label="Suggested">' + d.map(_).join("") + "</optgroup>" : "") + (m.length ? '<optgroup label="All sensors">' + m.map(_).join("") + "</optgroup>" : ""), s.value = _a.steps || "";
    const O = i("stepsStatus"), Z = _a.steps && a[_a.steps];
    O.textContent = Z ? "Connected · " + S(Z) : O.dataset.empty;
  }
  i("stepsEntity").addEventListener("change", () => {
    _a.steps = i("stepsEntity").value || null, Hn("entities", { ..._a }), or = {}, sl(), oa && (Eo(oa), rl(oa));
  });
  function Xl(a, s = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: s }).format(a);
  }
  function Do() {
    const a = _a.steps && (oa == null ? void 0 : oa[_a.steps]), s = Number(a == null ? void 0 : a.state);
    return Number.isFinite(s) ? s : null;
  }
  function rl(a) {
    var m;
    const s = _a.steps, d = s ? Number((m = a[s]) == null ? void 0 : m.state) : NaN;
    i("stepsMeta").textContent = s ? Number.isFinite(d) ? Xl(d) : "—" : "Set up in Settings";
  }
  let Fd = 0;
  async function sl() {
    const a = _a.steps;
    if (!a || !l.ws) return;
    Fd = Date.now();
    const s = /* @__PURE__ */ new Date(), d = new Date(s.getFullYear(), s.getMonth(), s.getDate() - 30);
    try {
      const m = await l.ws({ type: "recorder/statistics_during_period", start_time: d.toISOString(), end_time: s.toISOString(), statistic_ids: [a], period: "day", types: ["max"] }), S = (m == null ? void 0 : m[a]) || [], _ = {};
      if (S.forEach((O) => {
        Number.isFinite(O.max) && (_[Kt(new Date(O.start))] = O.max);
      }), !Object.keys(_).length) {
        const O = await l.ws({ type: "history/history_during_period", start_time: d.toISOString(), end_time: s.toISOString(), entity_ids: [a], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((O == null ? void 0 : O[a]) || []).forEach((Z) => {
          const be = Number(Z.s ?? Z.state), Me = Z.lu ? Z.lu * 1e3 : Date.parse(Z.last_updated || Z.last_changed);
          if (!Number.isFinite(be) || !Me) return;
          const we = Kt(new Date(Me));
          _[we] = Math.max(_[we] || 0, be);
        });
      }
      or = _, Xa();
    } catch {
    }
  }
  function ir() {
    Xa();
  }
  ir(), setInterval(() => {
    ir(), sa(), Rt();
  }, 10 * 60 * 1e3);
  function Jl(a) {
    const s = {}, d = {};
    Ye.history.forEach((O) => {
      const Z = Kt(new Date(O.start));
      s[Z] = (s[Z] || 0) + (O.seconds || 0) / 60, d[Z] = (d[Z] || 0) + 1;
    });
    const m = /* @__PURE__ */ new Date(), S = Kt(m), _ = [];
    for (let O = a - 1; O >= 0; O--) {
      const Z = new Date(m.getFullYear(), m.getMonth(), m.getDate() - O), be = Kt(Z), Me = Ye.checkins.filter((he) => he.date === be), we = (he) => {
        const Fe = Me.map((at) => at[he]).filter(Boolean);
        return Fe.length ? Fe.reduce((at, We) => at + We, 0) / Fe.length : null;
      };
      _.push({
        key: be,
        date: Z,
        minutes: Math.round(s[be] || 0),
        moves: d[be] || 0,
        steps: be === S && Do() != null ? Do() : or[be] ?? null,
        mood: we("mood"),
        energy: we("energy")
      });
    }
    return _;
  }
  function Ma(a) {
    let s = a.length - 1;
    a[s] && !a[s].minutes && s--;
    let d = 0;
    for (; s >= 0 && a[s].minutes > 0; )
      d++, s--;
    return d;
  }
  function Xa() {
    const a = i("insightCard");
    if (!a) return;
    const s = Jl(30), d = Ma(s), m = s.reduce((Me, we) => Me + we.minutes, 0), S = /* @__PURE__ */ new Date(), _ = Kt(S), O = Kt(new Date(S.getFullYear(), S.getMonth(), S.getDate() - (S.getDay() + 6) % 7)), Z = s.filter((Me) => Me.key >= O && Me.key <= _).reduce((Me, we) => Me + we.minutes, 0), be = (Me, we, he) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + Me + '</div><div><div class="activityRowName">' + nt(we) + '</div><div class="activityRowMeta">' + nt(he) + "</div></div></div>";
    a.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + ja("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + be(ja("clock"), "This week", Z + " min") + be(ja("streak"), "Streak", d + " day" + (d === 1 ? "" : "s")) + be(ja("calendar"), "30 days", m + " min") + "</div>";
  }
  const In = {
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
  }, Ql = (a) => a === "sunny" ? "clear" : a === "clear-night" ? "night" : a === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(a) ? "rain" : ["snowy", "snowy-rainy"].includes(a) ? "snow" : "cloudy", Ci = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, rr = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let ll = 0;
  const sr = (a, s) => '<path class="' + s + '" d="' + a + '"/>', Ti = (a, s) => ' style="animation-delay:-' + Math.round(a * 137 % s) + 'ms"', Fn = (a, s, d, m) => {
    const S = d * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (m < 1 ? ' opacity="' + m + '"' : "") + Ti(a, 2400) + ' d="M' + a + " " + (s - d) + "L" + (a + S) + " " + (s - S) + "L" + (a + d) + " " + s + "L" + (a + S) + " " + (s + S) + "L" + a + " " + (s + d) + "L" + (a - S) + " " + (s + S) + "L" + (a - d) + " " + s + "L" + (a - S) + " " + (s - S) + 'Z"/>';
  }, ed = ([a, s, d], m) => '<path class="wxMoonPath" d="' + a + '" fill="url(#' + m + ')"/><defs><linearGradient id="' + m + '" x1="0" y1="' + s + '" x2="0" y2="' + d + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', td = (a, s) => s ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Cs = (a) => (a ? ["29.35", "43.04", "56.74"].map((s, d) => '<g class="wxDrop" style="animation-delay:-' + d * 317 + 'ms"><rect class="wxAccent" x="' + s + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + s + ' 60.65)"/></g>') : [19, 26, 33].map((s, d) => '<g class="wxDrop" style="animation-delay:-' + d * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + s + ' 38)"/></g>')).join(""), Od = (a) => (a ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([s, d], m) => '<circle class="wxFlake" style="animation-delay:-' + m * 640 + 'ms" cx="' + s + '" cy="' + d + '" r="' + (a ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function lr(a, s, d, m) {
    return a === "clear" ? s ? ed(d ? rr.l : rr.s, m) + (d ? Fn(70, 20, 5.83, 1) + Fn(78.33, 41.67, 3.75, 0.8) + Fn(60, 71.67, 3.33, 0.6) : Fn(42, 12, 3.5, 1) + Fn(47, 25, 2.25, 0.8) + Fn(36, 43, 2, 0.6)) : td(m, d) : a === "partly" ? (s ? ed(d ? rr.lp : rr.sp, m) : d ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + sr(d ? Ci.lp : Ci.sp, s ? "wxCloudLight" : "wxBright") + (s ? d ? Fn(73.33, 16.67, 4.17, 0.9) : Fn(44, 10, 2.5, 0.9) : "") : a === "cloudy" ? sr(d ? Ci.lc : Ci.s, s ? "wxCloudLight" : "wxBright") + (s ? d ? Fn(15, 15, 3.75, 0.8) + Fn(76.67, 13.33, 2.92, 0.6) : Fn(9, 9, 2.25, 0.8) + Fn(46, 8, 1.75, 0.6) : "") : sr(d ? Ci.lr : Ci.s, "wxCloudLight") + (a === "rain" ? Cs(d) : Od(d));
  }
  const Ts = () => {
    var a;
    return ((a = oa == null ? void 0 : oa["sun.sun"]) == null ? void 0 : a.state) === "below_horizon";
  };
  let ha = vt().weatherStyle || "bitmap", dl = vt().weatherLayout === "strip" ? "strip" : "tiles", ai = vt().weatherMotion !== !1;
  const mn = () => ai && !Yt(), ni = /* @__PURE__ */ new Map(), cl = 700, Hc = (a) => {
    const [s, d] = a.split("/");
    return { k: s === "fog" ? "cloudy" : s === "storm" ? "rain" : s, night: d === "night" };
  };
  function Ls(a, s, d, m = ha, S, _) {
    let O = Ql(a);
    const Z = O === "night" || (_ != null ? !!_ : !!d && Ts());
    O === "night" && (O = "clear");
    const be = s ? 90 : 54, Me = Cc(a, Z), we = performance.now();
    let he = S ? ni.get(S) : null;
    if (S && !he ? ni.set(S, he = { key: Me, t0: -1e9 }) : he && he.key !== Me && (he.fromKey = he.key, he.from = he.last || null, he.key = Me, he.t0 = we), m !== "smooth") return '<span class="wxIcon pixels' + (s ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + Me + '"' + (S ? ' data-wx-slot="' + S + '"' : "") + ' data-wx-style="' + m + '" data-wx-size="' + be + '"></canvas></span>';
    let Fe = "";
    if (he && we - he.t0 < cl && (mn() || Yt())) {
      const at = Hc(he.fromKey);
      Fe = '<span class="wxLayer wxOut ' + at.k + (at.night ? " night" : "") + '" style="animation-delay:' + Math.round(he.t0 - we) + 'ms"><svg viewBox="0 0 ' + be + " " + be + '">' + lr(at.k, at.night, s, "wxg" + ++ll) + "</svg></span>";
    }
    return '<span class="wxIcon ' + O + (Z ? " night" : "") + (s ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + be + " " + be + '">' + lr(O, Z, s, "wxg" + ++ll) + "</svg>" + Fe + "</span>";
  }
  function ca() {
    const a = i("app"), s = getComputedStyle(a), d = (Z) => s.getPropertyValue(Z).trim(), m = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([Z, be]) => {
      d(be) && (m[Z] = d(be));
    });
    const S = d("--color-text-primary") || "#f1f1f1", _ = d("--color-bg-card") || "#222222", O = a.classList.contains("light");
    return { colors: m, ink: O ? S : _, paper: O ? _ : S };
  }
  function eo(a, s = performance.now()) {
    const d = a.querySelectorAll("canvas[data-wx]");
    if (!d.length) return;
    const m = ca(), S = mn(), _ = Yt();
    d.forEach((O) => {
      var he;
      const Z = O.dataset.wx, be = O.dataset.wxSlot ? ni.get(O.dataset.wxSlot) : null;
      let Me = xp(Z, m.colors);
      if (be && be.key === Z) {
        const Fe = (s - be.t0) / cl;
        Fe < 1 && (S || _) && (Me = Of(be.from || xp(be.fromKey, m.colors), Me, Math.max(0, Fe), m.colors, _)), be.last = Me;
      }
      const we = Wu(Me, { size: Number(O.dataset.wxSize) || 54, px: 2, oneBit: O.dataset.wxStyle === "onebit", colors: m.colors, ink: m.ink, paper: m.paper, clock: s, idle: S });
      O.width !== we.w && (O.width = we.w), O.height !== we.h && (O.height = we.h), (he = O.getContext("2d")) == null || he.putImageData(new ImageData(we.data, we.w, we.h), 0, 0);
    });
  }
  let As = null, qd = -1;
  function Wd(a) {
    if (As = null, !x) return;
    const s = mn(), d = Math.floor(a / 100), m = [...ni.values()].some((be) => a - be.t0 < cl), S = [...Ds.values()].some((be) => a - be.t0 < be.dur), _ = qe.home.classList.contains("active"), O = gn.classList.contains("open"), Z = s && ha === "smooth" && (O || _ && dl === "strip");
    !document.hidden && (m || S || Z || s && d !== qd) && (qd = d, _ && (eo(i("weatherCard"), a), Ur(i("weatherCard"), a)), O && (eo(gn, a), Ur(gn, a))), (s || m || S) && (As = requestAnimationFrame(Wd));
  }
  function Li() {
    i("app").classList.toggle("wxMotion", mn()), !As && x && (As = requestAnimationFrame(Wd));
  }
  let ad = [];
  const Sa = 36e5, Ic = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function oi() {
    const a = /* @__PURE__ */ new Date(), s = (_, O) => new Date(a.getFullYear(), a.getMonth(), a.getDate() + _, O), d = [], m = [], S = [...Array(6)].map((_, O) => {
      const Z = s(O, 6), be = s(O, 18), Me = s(O + 1, 6), we = ad.find((Fe) => Kt(new Date(Fe.datetime)) === Kt(Z)), he = (Fe, at, We) => {
        const He = d.filter((xt) => xt.t >= +Fe && xt.t < +at);
        if (He.length) {
          const xt = {};
          return He.forEach((Ue) => {
            xt[Ue.c] = (xt[Ue.c] || 0) + (Ic.has(Ue.c) ? 2 : 1);
          }), Object.entries(xt).sort((Ue, yt) => yt[1] - Ue[1])[0][0];
        }
        const De = m.find((xt) => {
          const Ue = +new Date(xt.datetime);
          return Ue >= +Fe - 3 * Sa && Ue < +at && (xt.is_daytime == null || !!xt.is_daytime == !We);
        });
        if (De) return De.condition;
        const bt = (we == null ? void 0 : we.condition) || "cloudy";
        return We && bt === "sunny" ? "clear-night" : bt;
      };
      return { start: +Z, end: +Me, day: he(Z, be, !1), night: he(be, Me, !0), hi: Number(we == null ? void 0 : we.temperature), lo: Number(we == null ? void 0 : we.templow) };
    });
    return { days: S, hours: d, start: S[0].start, end: S[5].end };
  }
  const Vd = (a, s) => {
    const d = a.days.findIndex((S) => s < S.end);
    if (d < 0) return 1;
    const m = a.days[d];
    return Math.max(0, (d + (s - m.start) / (m.end - m.start)) / 6);
  }, Cn = (a, s) => {
    const d = Math.max(0, Math.min(0.99999, s)) * 6, m = Math.floor(d), S = a.days[m];
    return S.start + (d - m) * (S.end - S.start);
  };
  function Es(a, s) {
    const d = Math.max(0, a.days.findIndex((be) => s < be.end)), m = a.days[d], S = (s - m.start) / (m.end - m.start) >= 0.5;
    let _ = S ? m.night : m.day, O = NaN;
    const Z = a.hours;
    if (Z.length && s >= Z[0].t - Sa && s <= Z[Z.length - 1].t + Sa) {
      let be = Z.findIndex((he) => he.t > s);
      be < 0 && (be = Z.length);
      const Me = Z[Math.max(0, be - 1)], we = Z[Math.min(Z.length - 1, be)];
      _ = Me.c || _, O = we.t > Me.t ? Me.temp + (we.temp - Me.temp) * Math.max(0, Math.min(1, (s - Me.t) / (we.t - Me.t))) : Me.temp;
    }
    if (!Number.isFinite(O)) {
      const be = [];
      if (a.days.forEach((Me) => {
        Number.isFinite(Me.lo) && be.push([Me.start - Sa, Me.lo]), Number.isFinite(Me.hi) && be.push([Me.start + 9 * Sa, Me.hi]);
      }), be.length) {
        O = s <= be[0][0] ? be[0][1] : be[be.length - 1][1];
        for (let Me = 1; Me < be.length; Me++) if (s <= be[Me][0] && s > be[Me - 1][0]) {
          const [we, he] = be[Me - 1], [Fe, at] = be[Me];
          O = he + (at - he) * (1 - Math.cos(Math.PI * (s - we) / (Fe - we))) / 2;
          break;
        }
      }
    }
    return { cond: S && _ === "sunny" ? "clear-night" : _, temp: O, night: S, day: m };
  }
  const nd = (a) => Kt(new Date(a)) === Kt(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(a)), Ds = /* @__PURE__ */ new Map(), od = 900, Fc = 700;
  let pl = null;
  const to = typeof ResizeObserver == "function" ? new ResizeObserver((a) => a.forEach((s) => {
    Ur(s.target.parentElement), s.target.closest("#wxDialog") && dd();
  })) : null;
  function Ur(a, s = performance.now()) {
    const d = a.querySelectorAll("canvas[data-wx-strip]");
    if (!d.length) return;
    const m = oi(), S = m.days.flatMap((he) => [{ cond: he.day, night: !1 }, { cond: he.night, night: !0 }]), _ = S.map((he) => he.cond).join(), O = ca(), Z = mn(), be = Yt(), Me = Number(Kt(new Date(m.start)).replace(/\D/g, "")) % 9973;
    let we = !1;
    d.forEach((he) => {
      var xt;
      const Fe = he.clientWidth, at = he.clientHeight;
      if (!Fe || !at) return;
      const We = he.dataset.wxStrip;
      let He = Ds.get(We);
      He ? He.sig !== _ && (He.prev = He.segs, He.sig = _, He.segs = S, He.t0 = s, He.dur = Fc) : Ds.set(We, He = { sig: _, segs: S, prev: null, t0: s, dur: od });
      const De = Z || be ? Math.min(1, Math.max(0, (s - He.t0) / He.dur)) : 1;
      De < 1 && (we = !0);
      const bt = { width: Fe, height: at, colors: O.colors, clock: s, ambient: Z, seed: Me, reveal: be ? De : 1 - Math.pow(1 - De, 3), prev: De < 1 ? He.prev : null, reduce: be };
      if (ha === "smooth") {
        const Ue = Math.min(2, window.devicePixelRatio || 1), yt = Math.round(Fe * Ue), Pt = Math.round(at * Ue);
        he.width !== yt && (he.width = yt), he.height !== Pt && (he.height = Pt);
        const ut = he.getContext("2d");
        if (!ut) return;
        ut.setTransform(Ue, 0, 0, Ue, 0, 0), eh(ut, S, bt);
      } else {
        const Ue = Qf(S, { ...bt, px: 2, oneBit: ha === "onebit", ink: O.ink, paper: O.paper });
        he.width !== Ue.w && (he.width = Ue.w), he.height !== Ue.h && (he.height = Ue.h), (xt = he.getContext("2d")) == null || xt.putImageData(new ImageData(Ue.data, Ue.w, Ue.h), 0, 0);
      }
    }), we && Li();
  }
  function id() {
    const a = i("weatherCard");
    if (!a || a.hidden) return;
    const s = _a.weather, d = s && (oa == null ? void 0 : oa[s]);
    if (!d) {
      a.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + Ls("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (s ? "Not available" : "Set up in Settings") + "</div></div></div></div>", eo(a);
      return;
    }
    const m = d.attributes || {}, S = m.temperature_unit || "°", _ = (ut) => Number.isFinite(Number(ut)) ? Math.round(Number(ut)) + "°" : "—", O = (m.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", Z = In[d.state] || (d.state ? d.state.charAt(0).toUpperCase() + d.state.slice(1) : "—"), be = Kt(/* @__PURE__ */ new Date()), Me = ad.slice(0, 7), we = Me.find((ut) => Kt(new Date(ut.datetime)) === be) || null, he = Me.filter((ut) => Kt(new Date(ut.datetime)) >= be).slice(0, 6), Fe = /* @__PURE__ */ new Date(), at = Kt(new Date(Fe.getFullYear(), Fe.getMonth(), Fe.getDate() + 1)), We = we ? "H " + _(we.temperature) + "&ensp; L " + _(we.templow) : "", He = (ut) => {
      const rt = Kt(new Date(ut.datetime));
      return rt === be ? "Today" : rt === at ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(ut.datetime));
    }, De = Number.isFinite(Number(m.temperature)) ? Math.round(Number(m.temperature)) : "—", bt = (ut) => {
      const rt = new Date(ut.datetime);
      return Math.round((new Date(rt.getFullYear(), rt.getMonth(), rt.getDate()) - new Date(Fe.getFullYear(), Fe.getMonth(), Fe.getDate())) / 864e5);
    }, xt = (ut) => (In[ut] || ut || "").toLowerCase(), Ue = (ut, rt) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + bt(ut) + '" aria-label="' + nt(He(ut) + ": " + xt(ut.condition) + ", " + _(ut.temperature) + " / " + _(ut.templow) + ". Open the forecast") + '">' + Ls(ut.condition, !1, !1, ha, "day" + rt) + '<div><div class="activityRowName">' + nt(He(ut)) + '</div><div class="activityRowMeta">' + _(ut.temperature) + " / " + _(ut.templow) + "</div></div></div>", yt = () => '<div class="wxStrip"><div class="wxStripDays">' + oi().days.map((rt, Ca) => {
      const ta = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(rt.start)) + ": " + xt(rt.day) + (xt(rt.day) === xt(rt.night) ? " all day and night" : ", then " + xt(rt.night) + " overnight") + (Number.isFinite(rt.hi) ? ". High " + _(rt.hi) : "") + (Number.isFinite(rt.lo) ? ", low " + _(rt.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + Ca + '" aria-label="' + nt(ta) + '"><span class="wxDayName">' + nt(nd(rt.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + _(rt.hi) + '</span><span class="wxLow">' + _(rt.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    a.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + nt("Now in " + O + ": " + De + "°, " + xt(d.state) + ". Open the forecast") + '"><div class="wxCurrent">' + Ls(d.state, !0, !0, ha, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + nt(String(De)) + '</span><span class="wxUnit">' + nt(S) + '</span></div><div class="wxPlace">' + nt(O) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + nt(Z) + "</div>" + (We ? '<div class="wxRange">' + We + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (he.length ? dl === "strip" ? yt() : '<div class="activityRows wxDays">' + he.map(Ue).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", eo(a);
    const Pt = a.querySelector("canvas[data-wx-strip]");
    pl && pl !== Pt && (to == null || to.unobserve(pl)), pl = Pt, Pt && (to == null || to.observe(Pt), Ur(a)), Li(), ld();
  }
  const jd = i("weatherCard"), rd = (a) => {
    const s = a.closest("[data-wx-day]");
    if (s) {
      const m = /* @__PURE__ */ new Date();
      sd(+new Date(m.getFullYear(), m.getMonth(), m.getDate() + Number(s.dataset.wxDay), 12), s);
      return;
    }
    const d = a.closest("[data-wx-open]");
    d && sd(Date.now(), d);
  };
  jd.addEventListener("click", (a) => rd(a.target)), jd.addEventListener("keydown", (a) => {
    (a.key === "Enter" || a.key === " ") && a.target.matches("[data-wx-day],[data-wx-open]") && (a.preventDefault(), rd(a.target));
  });
  const gn = i("wxDialog"), ii = i("wxGraph"), Yr = i("wxGraphWrap");
  let vn = Date.now(), dr = null, _s = !1, Zr = null;
  function sd(a, s) {
    const d = oi();
    dr = s || null, vn = Math.max(d.start, Math.min(d.end - Sa, a)), Ds.delete("dialog"), ni.delete("scrub"), gn.classList.add("open"), gn.setAttribute("aria-hidden", "false"), ld(), to == null || to.observe(gn.querySelector("canvas[data-wx-strip]")), ii.focus({ preventScroll: !0 }), Li();
  }
  function cr() {
    var a;
    gn.classList.remove("open"), gn.setAttribute("aria-hidden", "true"), to == null || to.unobserve(gn.querySelector("canvas[data-wx-strip]")), (a = dr == null ? void 0 : dr.focus) == null || a.call(dr, { preventScroll: !0 }), dr = null;
  }
  function ld() {
    if (!gn.classList.contains("open")) return;
    const a = oi();
    i("wxGraphDays").innerHTML = a.days.map((s) => "<span>" + nt(nd(s.start)) + "</span>").join(""), dd(a), ao(a), Ur(gn);
  }
  function ao(a = oi()) {
    const s = Es(a, vn), d = oa == null ? void 0 : oa[_a.weather], m = (d == null ? void 0 : d.attributes) || {}, S = m.temperature_unit || "°", _ = Math.abs(vn - Date.now()) < Sa / 2, O = _ && d ? d.state : s.cond, Z = _ && Number.isFinite(Number(m.temperature)) ? Math.round(Number(m.temperature)) : Number.isFinite(s.temp) ? Math.round(s.temp) : "—", be = In[O] || (O ? O.charAt(0).toUpperCase() + O.slice(1) : "—"), Me = _ ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(vn / Sa) * Sa)), we = s.day, he = (Number.isFinite(we.hi) ? "H " + Math.round(we.hi) + "°" : "") + (Number.isFinite(we.lo) ? "&ensp; L " + Math.round(we.lo) + "°" : "");
    i("wxDialogNow").innerHTML = '<div class="wxCurrent">' + Ls(O, !0, _, ha, "scrub", _ ? void 0 : s.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + nt(String(Z)) + '</span><span class="wxUnit">' + nt(S) + '</span></div><div class="wxPlace">' + nt(Me) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + nt(be) + "</div>" + (he ? '<div class="wxRange">' + he + "</div>" : "") + "</div>", eo(i("wxDialogNow")), ii.setAttribute("aria-valuenow", String(Math.round((vn - a.start) / Sa))), ii.setAttribute("aria-valuetext", Me + ", " + be.toLowerCase() + ", " + Z + "°"), Rs(a), Li();
  }
  function dd(a = oi()) {
    const s = i("wxGraphLine"), d = Yr.clientWidth, m = Yr.clientHeight;
    if (!d || !m) return;
    const S = [];
    for (let De = a.start; De <= a.end; De += Sa) {
      const bt = Es(a, De).temp;
      Number.isFinite(bt) && S.push([Vd(a, De) * d, bt]);
    }
    if (s.setAttribute("viewBox", "0 0 " + d + " " + m), S.length < 2) {
      s.innerHTML = '<g id="wxCursorMark"></g>', Zr = null, Rs(a);
      return;
    }
    const _ = S.map((De) => De[1]), O = Math.min(..._), Z = Math.max(..._), be = Math.max(4, Z - O), Me = ha !== "smooth", we = (De) => Me ? Math.round(De / 2) * 2 : Math.round(De * 10) / 10;
    Zr = (De) => m * 0.84 - (De - O) / be * m * 0.62;
    const he = ca(), Fe = ha === "onebit" ? he.paper : "#ffffff", at = ha === "onebit" ? he.ink : "rgba(0,0,0,.28)", We = "M" + S.map((De) => we(De[0]) + " " + we(Zr(De[1]))).join(" L"), He = (De, bt) => {
      const xt = S.find((Ue) => Ue[1] === De);
      return '<text class="wxLineLabel" x="' + we(Math.min(d - 14, Math.max(14, xt[0]))) + '" y="' + we(Zr(De) + (bt ? 18 : -10)) + '" fill="' + Fe + '" stroke="' + at + '">' + Math.round(De) + "°</text>";
    };
    s.setAttribute("shape-rendering", Me ? "crispEdges" : "auto"), s.innerHTML = '<path d="' + We + '" fill="none" stroke="' + at + '" stroke-width="' + (Me ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + We + '" fill="none" stroke="' + Fe + '" stroke-width="2" stroke-linejoin="round"/>' + He(Z, !1) + He(O, !0) + '<g id="wxCursorMark"></g>', Rs(a);
  }
  function Rs(a = oi()) {
    const s = i("wxGraphLine").querySelector("#wxCursorMark");
    if (!s) return;
    const d = Yr.clientWidth, m = Yr.clientHeight, S = ha !== "smooth", _ = (Fe) => S ? Math.round(Fe / 2) * 2 : Fe, O = _(Vd(a, vn) * d), Z = Es(a, vn).temp, be = ca(), Me = ha === "onebit" ? be.paper : "#ffffff", we = ha === "onebit" ? be.ink : "rgba(0,0,0,.28)", he = Zr && Number.isFinite(Z) ? _(Zr(Z)) : null;
    s.innerHTML = '<rect x="' + (O - 2) + '" y="0" width="4" height="' + m + '" fill="' + we + '"/><rect x="' + (O - 1) + '" y="0" width="2" height="' + m + '" fill="' + Me + '"/>' + (he == null ? "" : S ? '<rect x="' + (O - 5) + '" y="' + (he - 5) + '" width="10" height="10" fill="' + Me + '" stroke="' + we + '" stroke-width="2"/>' : '<circle cx="' + O + '" cy="' + he + '" r="6" fill="' + Me + '" stroke="' + we + '" stroke-width="2"/>');
  }
  const ul = (a) => {
    const s = Yr.getBoundingClientRect();
    s.width && (vn = Cn(oi(), (a - s.left) / s.width), ao());
  };
  ii.addEventListener("pointerdown", (a) => {
    if (a.button === 0) {
      _s = !0;
      try {
        ii.setPointerCapture(a.pointerId);
      } catch {
      }
      ul(a.clientX);
    }
  }), ii.addEventListener("pointermove", (a) => {
    _s && ul(a.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((a) => ii.addEventListener(a, () => {
    _s = !1;
  })), ii.addEventListener("keydown", (a) => {
    const s = oi(), d = { ArrowLeft: -Sa, ArrowRight: Sa, ArrowDown: -Sa, ArrowUp: Sa, PageUp: -24 * Sa, PageDown: 24 * Sa }[a.key];
    d ? (a.preventDefault(), vn = Math.max(s.start, Math.min(s.end - Sa, Math.round(vn / Sa) * Sa + d)), ao(s)) : (a.key === "Home" || a.key === "End") && (a.preventDefault(), vn = a.key === "Home" ? s.start : s.end - Sa, ao(s));
  }), i("wxDialogClose").addEventListener("click", cr), gn.addEventListener("click", (a) => {
    a.target === gn && cr();
  }), gn.addEventListener("keydown", (a) => {
    a.key === "Escape" && (a.preventDefault(), cr());
  }), id(), (ud = (Kd = window.matchMedia) == null ? void 0 : ($d = Kd.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || ud.call($d, "change", () => {
    Li(), eo(n);
  }), Li();
  const zd = i("tvNav");
  l.fullscreenSupported || (zd.hidden = !0), zd.addEventListener("click", () => l.toggleFullscreen()), n.addEventListener("keydown", (a) => {
    !qe.workout.classList.contains("active") || ms.classList.contains("active") || a.target.closest("input,select,textarea,.holdEnd") || (a.key === "MediaPlayPause" || a.key === " " && !a.target.closest("button") ? (a.preventDefault(), Xs.click()) : a.key === "MediaTrackNext" ? (a.preventDefault(), i("skipExercise").click()) : a.key === "MediaTrackPrevious" && (a.preventDefault(), i("restartSegment").click()));
  }), n.querySelectorAll("[data-rounds-step]").forEach((a) => a.addEventListener("click", () => {
    const s = Math.max(1, Math.min(10, (Number(tt.value) || 1) + Number(a.dataset.roundsStep)));
    String(s) !== tt.value && (tt.value = s, tt.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [B, q, R, tt].forEach((a) => a.addEventListener("input", () => {
    const s = ht[Tt];
    s && (s.total = Number(B.value), s.work = Number(q.value), s.rest = Number(R.value)), Ut();
  })), ie.addEventListener("click", xs), Ze.addEventListener("click", () => T("settings")), i("settingsBack").addEventListener("click", xs), Xs.addEventListener("click", () => Ea(!Be)), $t(Tt), na(), sa(), Xa(), i("healthHelpOpen").addEventListener("click", () => n.querySelector(".tab[data-pane=helpPane]").click()), jr(i("resetStats"), i("resetStatsFill"), 1500, () => {
    Ye.history = [], Ye.checkins = [], ot = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    Dn(), ir(), sa(), na(), Xa(), Rt(), Ft("Stats reset");
  });
  const ma = i("morningTime"), cd = i("eveningTime"), Ai = i("checkinAutoOpen");
  ma.value = ko().morning, cd.value = ko().evening, Ai.classList.toggle("on", vt().checkinAutoOpen !== !1), [["morningTime", ma], ["eveningTime", cd]].forEach(([a, s]) => s.addEventListener("change", () => {
    s.value && (Hn(a, s.value), Rt());
  })), Ai.addEventListener("click", () => {
    const a = vt().checkinAutoOpen === !1;
    Ai.classList.toggle("on", a), Hn("checkinAutoOpen", a);
  }), setTimeout(Ne, 800);
  const Gd = i("checkinNotify"), fl = i("checkinNotifyTarget"), Ge = i("checkinNotifyStatus"), uo = Ge.textContent;
  function hl() {
    const a = l.notifyServices(), s = a.filter((S) => S.startsWith("mobile_app_")), d = s.length ? s : a, m = (S) => S.replace(/^mobile_app_/, "").replace(/_/g, " ");
    fl.innerHTML = d.map((S) => '<option value="' + nt(S) + '">' + nt(m(S)) + "</option>").join(""), !vt().notifyTarget && d[0] && (vt().notifyTarget = d[0]), fl.value = vt().notifyTarget || "";
  }
  function Ei() {
    const a = !!vt().notifyOn;
    Gd.classList.toggle("on", a), i("checkinNotifyTargetRow").hidden = !a;
    const s = ko();
    Ge.textContent = a ? "Sends at " + s.morning + " and " + s.evening : uo;
  }
  async function pd() {
    const a = !!vt().notifyOn;
    try {
      return await l.setReminderAutomation(a ? { target: vt().notifyTarget, times: ko() } : null), !0;
    } catch {
      return Ft("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  Gd.addEventListener("click", async () => {
    const a = !vt().notifyOn;
    if (a && (hl(), !vt().notifyTarget)) {
      Ft("Install the Companion app on your phone first");
      return;
    }
    vt().notifyOn = a, Ei(), await pd() ? (Dn(), Ft(a ? "Check-in notifications on" : "Check-in notifications off")) : (vt().notifyOn = !a, Ei());
  }), fl.addEventListener("change", () => {
    Hn("notifyTarget", fl.value), vt().notifyOn && pd();
  }), [ma, cd].forEach((a) => a.addEventListener("change", () => {
    Ei(), vt().notifyOn && pd();
  })), hl(), Ei();
  let Pa = null;
  function Ud() {
    Pa || (Pa = setTimeout(() => {
      Pa = null, Xa();
    }, 3e4));
  }
  return {
    updateStates(a) {
      var d, m;
      const s = !oa || oa[_a.weather] !== a[_a.weather] || ((d = oa["sun.sun"]) == null ? void 0 : d.state) !== ((m = a["sun.sun"]) == null ? void 0 : m.state);
      oa = a, Eo(a), rl(a), s && id(), Date.now() - Fd > 60 * 60 * 1e3 && sl(), Ud();
    },
    applyRemoteData(a) {
      if (a && (Array.isArray(a.history) && (Ye.history = a.history, ir()), Array.isArray(a.history) && Xa(), Array.isArray(a.checkins) && (Ye.checkins = a.checkins.map(ns), Rt(), na(), sa(), ir(), Xa()), a.profiles && !pn.classList.contains("open") && !$a)) {
        const s = mt(a);
        Object.keys(ht).forEach((d) => delete ht[d]), Object.assign(ht, s.profiles), Ye.order = s.order, ht[Tt] || (Tt = Ye.order[0]), wa(), $t(Tt);
      }
    },
    suspend() {
      x = !1;
    },
    resume() {
      x || (x = !0, bi || (bi = requestAnimationFrame(Ks)), Hr || (Hr = requestAnimationFrame($s)), Li(), Mi(n.querySelector(".tab.active"), !1));
    }
  };
}
const nh = /* @__PURE__ */ new Set(["roaming", "test_area"]), oh = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window" },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62 }
}, Fs = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, Ya = "made_up_", Ri = (n) => {
  var l;
  return (l = String(n).split(".")[1]) == null ? void 0 : l.startsWith(Ya);
}, ac = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function Ap(n) {
  const l = n.getHours() + n.getMinutes() / 60, i = Math.max(0, Math.sin((l - 7) / 13 * Math.PI));
  return 2.4 * i * i;
}
function ih(n) {
  const l = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  let i = 0;
  for (let u = +l; u < +n; u += 10 * 60 * 1e3) i += Ap(new Date(u)) / 6;
  return i;
}
function Fp(n = /* @__PURE__ */ new Date()) {
  const l = [];
  for (let i = 0; i <= 96; i++) {
    const u = +n - (96 - i) * 15 * 60 * 1e3;
    l.push([u, Ap(new Date(u))]);
  }
  return l;
}
function rh({ onChange: n }) {
  const l = {}, i = {}, u = (J, U, me, ce) => {
    l[J] = { entity_id: J, state: me, attributes: ce, last_changed: new Date(Date.now() - 18e6).toISOString() }, i[J] = U;
  }, v = (J, U, me) => {
    const ce = l[J], ke = U ?? ce.state;
    l[J] = { ...ce, state: ke, attributes: { ...ce.attributes, ...me }, last_changed: ke === ce.state ? ce.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, x = (J, U, me, ce) => u("binary_sensor." + Ya + (J ? J + "_" : "") + ac(U), J, ce ? "on" : "off", { friendly_name: U, device_class: me });
  Object.entries(oh).forEach(([J, U]) => {
    if (U.temperature != null && u("sensor." + Ya + J + "_temperature", J, String(U.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), U.humidity != null && u("sensor." + Ya + J + "_humidity", J, String(U.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), U.vacuum && u("vacuum." + Ya + "robot", J, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), U.climate && u("climate." + Ya + J, J, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: U.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), U.cover) {
      const [me, ce, ke, oe] = U.cover;
      u("cover." + Ya + J + "_" + ac(me), J, ke ? "open" : "closed", { friendly_name: me, device_class: ce, current_position: ke, ...oe != null ? { current_tilt_position: oe } : {} });
    }
    if (U.humidifier && u("humidifier." + Ya + J, J, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: U.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), U.solar && (u("sensor." + Ya + J + "_solar_power", J, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), u("sensor." + Ya + J + "_solar_today", J, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), U.valve && u("valve." + Ya + J + "_" + ac(U.valve), J, "closed", { friendly_name: U.valve, device_class: "water" }), U.door && x(J, U.door, "door", U.doorOpen), U.window && x(J, U.window, "window", !1), U.motion && x(J, U.motion, "motion", !1), U.plant) {
      const [me, ce, ke, oe, ne] = U.plant, te = Ya + ac(me), E = (le, qe, ie, Ze, T) => u("sensor." + te + "_" + le, J, String(ie), { friendly_name: qe, device_class: T, state_class: "measurement", unit_of_measurement: Ze, plant_low: ie < Fs[le][0], plant_high: ie > Fs[le][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[le] });
      E("moisture", "Moisture", ce, "%", "moisture"), E("light", "Light", ke, "lx", "illuminance"), E("temperature", "Temperature", oe, "°C", "temperature"), E("fertility", "Fertility", ne, "µS/cm", "conductivity");
      const Ce = Object.entries({ moisture: ce, light: ke, temperature: oe, fertility: ne }).filter(([le, qe]) => qe < Fs[le][0] || qe > Fs[le][1]).map(([le, qe]) => le + (qe < Fs[le][0] ? " low" : " high"));
      u("plant." + te, J, Ce.length ? "problem" : "ok", { friendly_name: me, moisture: ce, brightness: ke, temperature: oe, conductivity: ne, problem: Ce.join(", ") || "none" });
    }
  }), u("alarm_control_panel." + Ya + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), x(null, "Front door", "door", !1), x(null, "Smoke alarm", "smoke", !1), u("sensor." + Ya + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const k = {}, A = {};
  let I = null;
  function M() {
    const J = /* @__PURE__ */ new Date();
    Object.keys(l).forEach((U) => {
      U.endsWith("_solar_power") && (l[U] = { ...l[U], state: Ap(J).toFixed(2) }), U.endsWith("_solar_today") && (l[U] = { ...l[U], state: ih(J).toFixed(1) });
    });
  }
  M();
  let W = 0;
  function F() {
    let J = !1;
    const U = ++W % 10 === 0, me = (oe, ne, te) => {
      v(oe, ne, te), J = !0;
    };
    Object.entries(k).forEach(([oe, ne]) => {
      const te = l[oe].attributes.current_position, E = te < ne ? Math.min(ne, te + 10) : Math.max(ne, te - 10);
      E === ne && delete k[oe], me(oe, E === ne ? E === 0 ? "closed" : "open" : ne > te ? "opening" : "closing", { current_position: E });
    }), Object.entries(A).forEach(([oe, ne]) => {
      const te = l[oe].attributes.current_tilt_position, E = te < ne ? Math.min(ne, te + 25) : Math.max(ne, te - 25);
      E === ne && delete A[oe], me(oe, null, { current_tilt_position: E });
    }), Object.keys(l).filter((oe) => oe.startsWith("climate.")).forEach((oe) => {
      const ne = l[oe], te = ne.attributes, E = te.current_temperature, Ce = (ne.state === "heat" || ne.state === "auto") && E < te.temperature - 0.05, le = (ne.state === "cool" || ne.state === "auto") && E > te.temperature + 0.05, qe = ne.state === "off" ? "off" : Ce ? "heating" : le ? "cooling" : "idle", ie = U ? Math.round((E + (Ce ? 0.1 : le ? -0.1 : 0)) * 10) / 10 : E;
      (ie !== E || qe !== te.hvac_action) && me(oe, null, { current_temperature: ie, hvac_action: qe });
    }), Object.keys(l).filter((oe) => oe.startsWith("humidifier.")).forEach((oe) => {
      const ne = l[oe], te = ne.attributes, E = te.current_humidity, Ce = ne.state === "on" && E < te.humidity, le = Ce && U ? E + 1 : E, qe = ne.state !== "on" ? "off" : Ce ? "humidifying" : "idle";
      if (le !== E || qe !== te.action) {
        me(oe, null, { current_humidity: le, action: qe });
        const ie = "sensor." + Ya + i[oe] + "_humidity";
        l[ie] && me(ie, String(le));
      }
    });
    const ce = l["vacuum." + Ya + "robot"], ke = ce.attributes;
    ce.state === "cleaning" && U && me(ce.entity_id, null, { battery_level: Math.max(5, ke.battery_level - 1) }), ce.state === "returning" && me(ce.entity_id, "docked", {}), ce.state === "docked" && ke.battery_level < 100 && me(ce.entity_id, null, { battery_level: Math.min(100, ke.battery_level + 2) }), I && Date.now() - I.at > 5e3 && (me("alarm_control_panel." + Ya + "house", "armed_" + I.mode, {}), I = null), J && n();
  }
  const V = setInterval(F, 1e3), G = setInterval(() => {
    M(), n();
  }, 60 * 1e3);
  function pe(J, U, me) {
    const ce = me == null ? void 0 : me.entity_id;
    if (!l[ce]) return !1;
    const ke = l[ce], oe = ke.attributes, ne = (te, E) => v(ce, te, E);
    if (J === "climate" && (U === "set_temperature" && ne(null, { temperature: Math.max(oe.min_temp, Math.min(oe.max_temp, me.temperature)) }), U === "set_hvac_mode" && ne(me.hvac_mode, me.hvac_mode === "off" ? { hvac_action: "off" } : {}), U === "toggle" && ne(ke.state === "off" ? "heat" : "off", ke.state === "off" ? {} : { hvac_action: "off" })), J === "cover") {
      const te = U === "open_cover" ? 100 : U === "close_cover" ? 0 : U === "set_cover_position" ? me.position : U === "toggle" ? oe.current_position > 0 ? 0 : 100 : null;
      U === "stop_cover" && (delete k[ce], delete A[ce], ne(oe.current_position === 0 ? "closed" : "open")), te != null && te !== oe.current_position && (k[ce] = te, ne(te > oe.current_position ? "opening" : "closing"));
      const E = U === "open_cover_tilt" ? 100 : U === "close_cover_tilt" ? 0 : U === "set_cover_tilt_position" ? me.tilt_position : null;
      U === "stop_cover_tilt" && delete A[ce], E != null && oe.current_tilt_position != null && E !== oe.current_tilt_position && (A[ce] = E);
    }
    if (J === "humidifier" && (U === "set_humidity" && ne(null, { humidity: Math.max(oe.min_humidity, Math.min(oe.max_humidity, me.humidity)) }), U === "set_mode" && ne(null, { mode: me.mode }), U === "turn_on" || U === "turn_off" || U === "toggle")) {
      const te = U === "turn_on" || U === "toggle" && ke.state !== "on";
      ne(te ? "on" : "off", { action: te ? "idle" : "off" });
    }
    if (J === "vacuum" && (U === "start" && ne("cleaning", { rooms: me.rooms || oe.rooms }), U === "pause" && ne("paused"), U === "return_to_base" && ne("returning", { rooms: [] }), U === "locate" && ne(null, { located: Date.now() }), U === "set_rooms" && ne(null, { rooms: me.rooms })), J === "valve") {
      const te = U === "open_valve" || U === "toggle" && ke.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(U) && ne(te ? "open" : "closed");
    }
    if (J === "alarm_control_panel") {
      U === "alarm_disarm" && (I = null, ne("disarmed", { changed_by: "Matt" }));
      const te = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[U];
      te && (I = { mode: te, at: Date.now() }, ne("arming", { changed_by: "Matt" }));
    }
    return n(), !0;
  }
  function ee(J, { madeUp: U = !0 } = {}) {
    const me = U ? l : {}, ce = (J == null ? void 0 : J.states) || {}, ke = (J == null ? void 0 : J.entities) || {}, oe = (J == null ? void 0 : J.devices) || {}, ne = (de) => {
      var ge;
      const ue = ke[de];
      return ue && (ue.area_id || ue.device_id && ((ge = oe[ue.device_id]) == null ? void 0 : ge.area_id)) || null;
    }, te = (de) => {
      const ue = ke[de];
      return ce[de] && ce[de].state !== "unavailable" && !(ue != null && ue.hidden) && !(ue != null && ue.entity_category);
    }, E = {};
    Object.keys(ce).forEach((de) => {
      const ue = ne(de);
      ue && te(de) && (E[ue] || (E[ue] = [])).push(de);
    });
    const Ce = { ...ce, ...me }, le = (de) => {
      var ue, ge;
      return (ge = (ue = Ce[de]) == null ? void 0 : ue.attributes) == null ? void 0 : ge.device_class;
    }, qe = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], ie = Object.keys(ce).filter((de) => de.startsWith("vacuum.") && te(de)), Ze = Object.values((J == null ? void 0 : J.areas) || {}).filter((de) => !nh.has(de.area_id)).map((de) => {
      const ue = de.area_id, ge = E[ue] || [], Se = (Xe) => ge.filter((pt) => pt.startsWith(Xe + ".")), Te = (Xe) => Se("sensor").filter((pt) => le(pt) === Xe), $e = (Xe) => Object.keys(me).filter((pt) => i[pt] === ue && Xe(pt)), tt = (Xe, pt) => Xe.length ? Xe : $e(pt), Za = tt(Te("temperature"), (Xe) => Xe.endsWith(ue + "_temperature")), Ie = tt(Te("humidity"), (Xe) => Xe.endsWith(ue + "_humidity")), ho = Te("power").filter((Xe) => /^(W|kW)$/.test(Ce[Xe].attributes.unit_of_measurement || "")), Yn = Se("binary_sensor").filter((Xe) => le(Xe) === "moisture"), mo = tt(Se("plant"), (Xe) => Xe.startsWith("plant.")).map((Xe) => ({ id: Xe, readings: $e((pt) => pt.startsWith("sensor." + Xe.split(".")[1] + "_")) })), ra = [...Se("binary_sensor").filter((Xe) => qe.includes(le(Xe))), ...$e((Xe) => Xe.startsWith("binary_sensor."))];
      return {
        id: ue,
        name: de.name,
        icon: de.icon,
        floor: de.floor_id || null,
        readings: [...Za.slice(0, 1), ...Ie.slice(0, 1), ...Yn],
        power: ho.length ? ho.reduce((Xe, pt) => Xe + Number(Ce[pt].state) * (Ce[pt].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: Se("switch"),
        lights: Se("light"),
        actions: [...Se("light"), ...tt(Se("climate"), (Xe) => Xe.startsWith("climate.")), ...tt(Se("cover"), (Xe) => Xe.startsWith("cover.")), ...tt(Se("humidifier"), (Xe) => Xe.startsWith("humidifier.")), ...tt(Se("valve"), (Xe) => Xe.startsWith("valve.")), ...Se("media_player"), ...Se("vacuum"), ...ie.length ? [] : $e((Xe) => Xe.startsWith("vacuum."))],
        solar: $e((Xe) => Xe.includes("_solar_")),
        plants: mo,
        openings: ra,
        alerts: [...Yn, ...ra].filter((Xe) => {
          var pt;
          return ((pt = Ce[Xe]) == null ? void 0 : pt.state) === "on";
        })
      };
    }).filter((de) => de.readings.length || de.plugs.length || de.actions.length || de.solar.length || de.plants.length), T = Object.keys(ce).find((de) => /^sensor\..*(p1_meter_power|grid_power)$/.test(de) && ce[de].state !== "unavailable") || null, B = (de) => Object.keys(ce).filter((ue) => ue.startsWith(de + ".") && te(ue)), q = B("alarm_control_panel"), R = ie.length ? ie : U ? ["vacuum." + Ya + "robot"] : [];
    return {
      states: Ce,
      rooms: Ze,
      grid: T,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (de) => me[de] ? i[de] : ne(de),
      vacuums: R,
      homeVacuums: R.filter((de) => !Ze.some((ue) => ue.actions.includes(de))),
      security: {
        alarms: q.length ? q : U ? ["alarm_control_panel." + Ya + "house"] : [],
        locks: B("lock"),
        openings: [...Object.keys(me).filter((de) => de.startsWith("binary_sensor.")), ...U ? ["sensor." + Ya + "doorbell"] : []]
      }
    };
  }
  return { model: ee, call: pe, stop() {
    clearInterval(V), clearInterval(G);
  } };
}
const br = (n) => n < 0 ? 0 : n > 1 ? 1 : n, yp = (n) => {
  const l = String(n || "#000000").trim().replace("#", ""), i = l.length === 3 ? l.split("").map((u) => u + u).join("") : l;
  return [0, 2, 4].map((u) => parseInt(i.slice(u, u + 2), 16) || 0);
}, sh = (n) => "#" + n.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), Op = {}, Bo = (n, l, i) => {
  const u = n + l + i;
  return Op[u] || (Op[u] = sh(yp(n).map((v, x) => v + (yp(l)[x] - v) * i)));
}, qp = {}, gc = (n) => qp[n] || (qp[n] = yp(n));
function lh(n) {
  const l = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return l.partly = [Bo(l.clear[0], l.cloudy[0], 0.12), Bo(l.clear[1], l.cloudy[1], 0.12)], l.storm = [Bo(l.rain[0], "#000000", 0.22), Bo(l.rain[1], "#000000", 0.22)], l;
}
const dh = [
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
], gr = (n, l) => (dh[(l & 7) * 8 + (n & 7)] + 0.5) / 64, Gu = 1, Uu = 2, Yu = 3, Zu = 4, xl = 5, yc = 6, kp = 7, Ku = 8, Wp = (n, l) => l <= 0.6665 && ((n - 0.5) * (n - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && l >= 0.416), ch = (n, l, i) => {
  let u = !1;
  for (let v = 0, x = n.length - 1; v < n.length; x = v++) {
    const k = n[v], A = n[x];
    k[1] > i != A[1] > i && l < (A[0] - k[0]) * (i - k[1]) / (A[1] - k[1]) + k[0] && (u = !u);
  }
  return u;
};
function ph(n, l, i, u, { oneBit: v, ink: x, paper: k, snowInk: A }) {
  const I = new Uint8ClampedArray(i * u * 4), M = gc(x), W = gc(k);
  for (let F = 0; F < u; F++) for (let V = 0; V < i; V++) {
    const G = F * i + V, pe = l[G];
    if (n[G] == null) continue;
    let ee = gc(n[G]);
    if (v) {
      let J;
      pe === Zu || pe === Ku ? J = !0 : pe === xl ? J = A : pe === kp || pe === yc ? J = !1 : J = Math.round((0.2126 * ee[0] + 0.7152 * ee[1] + 0.0722 * ee[2]) / 255 * 4) / 4 <= gr(V, F), (pe === Gu || pe === Uu || pe === Yu || pe === yc) && (V > 0 && l[G - 1] !== pe || V < i - 1 && l[G + 1] !== pe || F > 0 && l[G - i] !== pe || F < u - 1 && l[G + i] !== pe) && (J = !0), ee = J ? M : W;
    }
    I[G * 4] = ee[0], I[G * 4 + 1] = ee[1], I[G * 4 + 2] = ee[2], I[G * 4 + 3] = 255;
  }
  return { w: i, h: u, data: I };
}
const uh = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, fh = (n) => Cc(n, !1).split("/")[0], Jc = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let l = Math.imul(n ^ n >>> 15, 1 | n);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, hh = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", mh = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", gh = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", vh = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", bh = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], wh = [".##", "##.", ".#.", "#.."];
function $u(n, { width: l, height: i, colors: u, wave: v = 0.38, soft: x = 6, glow: k = 0.6, columns: A = 6 }) {
  const I = { ...Un, dawn: "#e5a77e", ...u }, M = lh(I), W = l, F = i, V = W / A, G = V / 2, pe = Math.PI * 2, ee = n.length ? n : [{ cond: "cloudy", night: !1 }], J = [...Array(A * 2)].map((ke, oe) => {
    const ne = ee[Math.min(oe, ee.length - 1)], te = fh(ne.cond), E = oe % 2 === 1;
    return { cond: ne.cond, k: te, night: E, sky: M[te][E ? 1 : 0], cover: uh[te] };
  }), U = (ke) => F * (0.5 - v * Math.cos(pe * (ke / V - 0.25)));
  return { C: I, S: J, W, H: F, cw: V, sw: G, TAU: pe, yb: U, side: (ke, oe, ne) => {
    const te = (ke ? U(oe) - ne : ne - U(oe)) / Math.max(3, x * 1.4) + 0.5;
    return te <= 0 ? 0 : te >= 1 ? 1 : te;
  }, glowAt: (ke) => {
    const oe = ((ke / V - 0.25) % 1 + 1) % 1, ne = Math.max(0, Math.min(A - 1, Math.round(ke / V - 0.25))), te = Math.max(0, Math.min(A - 1, Math.round(ke / V - 0.75))), E = 1 - (J[2 * ne].cover + J[2 * te + 1].cover) / 2, Ce = Math.sin(Math.PI * Math.min(1, Math.max(0, U(ke) / F)));
    return { c: oe < 0.5 ? I.dusk : I.dawn, a: k * (0.2 + 0.8 * E) * Ce * Ce };
  }, soft: x, tw: V * 0.3, sy: F / 90 };
}
function Xu(n, { clock: l = 0, ambient: i = !1, seed: u = 1 }) {
  const { S: v, sw: x, side: k, C: A, TAU: I, sy: M, H: W } = n, F = l, V = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  v.forEach((ee, J) => {
    const U = Jc(u * 977 + J * 131 + 7), me = (J + 0.5) * x, ce = ee.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[ee.k] : 0;
    for (let ke = 0; ke < ce; ke++) {
      const oe = me + (U() - 0.5) * x * 1.6, ne = (6 + U() * 76) * M, te = U() < 0.35, E = 1.8 + U() * 1.6, Ce = k(!0, oe, ne) * (te ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(I * F / 2600 + ke * 1.7 + J) : 1);
      Ce >= 0.03 && V.stars.push({ x: oe, y: ne, big: te, size: E, o: Ce });
    }
    if (!ee.night && (ee.k === "clear" || ee.k === "partly")) {
      const ke = me + (U() - 0.5) * x * 0.3, oe = Math.min(15, x * 0.29);
      V.suns.push({ x: ke, y: 32 * M, rad: oe, halo: oe * 2.8 * (i ? 1 + 0.07 * Math.sin(I * F / 3600 + J) : 1) });
    }
    if (ee.night && (ee.k === "clear" || ee.k === "partly")) {
      const ke = Math.min(0.78, x * 0.55 / 34), oe = me - 23 * ke + (U() - 0.5) * x * 0.2;
      V.moons.push({ x: oe + 23 * ke, y: (4 + (i ? 0.8 * Math.sin(I * F / 5200 + J) : 0)) * M + 23 * ke, d: 46 * ke });
    }
  });
  const G = Math.max(56, Math.min(100, W * 0.45)), pe = Math.max(1, x / (G * 2.4));
  return v.forEach((ee, J) => {
    const U = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[ee.k];
    if (!U) return;
    const me = ee.k === "partly" ? 1 : Math.round(U * pe), ce = Jc(u * 577 + J * 71 + 3), ke = (J + 0.5) * x, oe = ee.k === "rain" || ee.k === "storm" || ee.night ? A.cloudNight : A.cloudDay, ne = ee.night ? 0.82 : ee.k === "storm" ? 0.75 : 1;
    for (let te = 0; te < me; te++) {
      const E = G / 46 * (ee.k === "partly" ? 1 : 0.8 + ce() * 0.4), Ce = ke + (ee.k === "partly" ? x * 0.12 : ((te + 0.5) / me - 0.5) * x * 0.95 + (ce() - 0.5) * x * 0.5 / me), le = (ee.k === "partly" ? 40 : 6 + ce() * 26) * M, qe = i ? 2.5 * Math.sin(I * F / 9e3 + J * 1.3 + te * 2.1) : 0, ie = i ? 0.9 * Math.sin(I * F / 6100 + J + te) : 0;
      V.clouds.push({ x: Ce - 23 * E + qe, y: le - 15.33 * E + ie, w: 46 * E, h: 30.66 * E, fill: oe, o: ne * (me > 1 && te === 0 ? 0.85 : 1) });
    }
  }), v.forEach((ee, J) => {
    const U = Jc(u * 313 + J * 29 + 11), me = (J + 0.5) * x, ce = ee.cond === "pouring" ? 16 : ee.cond === "rainy" || ee.cond === "hail" ? 9 : ee.cond === "lightning-rainy" ? 12 : ee.cond === "snowy-rainy" ? 5 : 0;
    for (let oe = 0; oe < ce; oe++) {
      let ne = me + (U() - 0.5) * x * 1.05, te = 44 + U() * 36, E = 1;
      if (i) {
        const le = ((te - 44 + F * 0.04) % 36 + 36) % 36;
        ne -= 0.21 * (le - (te - 44)), te = 44 + le, E = Math.min(1, le / 6, (36 - le) / 6);
      }
      te *= M;
      const Ce = k(ee.night, ne, te) * E;
      Ce >= 0.05 && V.drops.push({ x: ne, y: te, o: Ce });
    }
    const ke = ee.cond === "snowy" ? 11 : ee.cond === "snowy-rainy" ? 6 : 0;
    for (let oe = 0; oe < ke; oe++) {
      let ne = me + (U() - 0.5) * x * 1.05, te = 40 + U() * 44, E = 1;
      if (i) {
        const le = ((te - 40 + F * 9e-3) % 44 + 44) % 44;
        te = 40 + le, ne += 1.6 * Math.sin(I * F / 2800 + oe * 1.9 + J), E = Math.min(1, le / 6, (44 - le) / 6);
      }
      te *= M;
      const Ce = k(ee.night, ne, te) * E;
      Ce >= 0.05 && V.flakes.push({ x: ne, y: te, o: Ce });
    }
    if (ee.k === "fog") {
      const oe = ee.night ? "#c8ccd6" : "#ffffff", ne = ee.night ? 0.28 : 0.62, te = i ? 4 * Math.sin(I * F / 8e3 + J) : 0;
      for (let E = 0; E < 4; E++) V.fogs.push({ x: me - x * 0.75 + E % 2 * x * 0.18 + (E % 2 ? te : -te), y: (30 + E * 13) * M, w: x * 1.3, c: oe, a: ne });
    }
    if (ee.k === "storm") {
      const oe = (F / 3400 + J * 0.37) % 1;
      V.bolts.push({ x: me + (U() - 0.5) * x * 0.3 - 5, y: 36 * M, o: i && !(oe < 0.05 || oe > 0.09 && oe < 0.12) ? 0.8 : 1 });
    }
  }), V;
}
function xh(n, l, i, u, v, x, k, A) {
  const { S: I, C: M, cw: W, yb: F, glowAt: V, soft: G, tw: pe, sy: ee } = n, J = new Array(i * u), U = new Uint8Array(i * u), me = new Uint8Array(i * u), ce = (T, B, q, R, de) => {
    q == null || T < 0 || B < 0 || T >= i || B >= u || (R >= 1 || R > gr(T + 5, B + 3)) && (J[B * i + T] = q, U[B * i + T] = de);
  }, ke = (T, B, q, R) => {
    for (let de = Math.max(0, Math.floor(B - q) - 1); de <= Math.min(u - 1, B + q + 1); de++) for (let ue = Math.max(0, Math.floor(T - q) - 1); ue <= Math.min(i - 1, T + q + 1); ue++) R(ue, de, ue + 0.5 - T, de + 0.5 - B);
  }, oe = (T, B, q) => {
    for (let de = 0; de < T.length - 1; de++) {
      const ue = (de + B) * W;
      if (q < ue - pe / 2) return [T[de], T[de], 0];
      if (q <= ue + pe / 2) return [T[de], T[de + 1], (q - ue + pe / 2) / pe];
    }
    const R = T[T.length - 1];
    return [R, R, 0];
  }, ne = I.filter((T) => !T.night).map((T) => T.sky), te = I.filter((T) => T.night).map((T) => T.sky), E = G / x, Ce = 16 * ee / x;
  for (let T = 0; T < i; T++) {
    const B = (T + 0.5) * v, q = F(B) / x, R = oe(ne, 0.75, B), de = oe(te, 1.25, B), ue = V(B);
    for (let ge = 0; ge < u; ge++) {
      const Se = gr(T, ge), Te = ge + 0.5 - q, $e = (E > 0.01 ? br(0.5 + Te / E) : Te > 0 ? 1 : 0) > Se;
      let tt = $e ? R[2] > Se ? R[1] : R[0] : de[2] > Se ? de[1] : de[0];
      ($e ? br(((ge + 0.5) / u - 0.45) / 0.55) * 0.7 : br(1 - (ge + 0.5) / (u * 0.55)) * 0.7) > gr(T + 2, ge + 5) && (tt = $e ? Bo(tt, "#ffffff", 0.18) : Bo(tt, "#000000", 0.25)), $e && Te >= 0 && Te < Ce && ue.a * 1.3 * (1 - Te / Ce) > gr(T + 6, ge + 1) && (tt = ue.c), J[ge * i + T] = tt, me[ge * i + T] = $e ? 0 : 1;
    }
  }
  const le = Bo(M.sun, "#ffffff", 0.55), qe = Bo(M.moon, "#ffffff", 0.6);
  l.stars.forEach((T) => {
    const B = Math.floor(T.x / v), q = Math.floor(T.y / x);
    if (B < 0 || q < 0 || B >= i || q >= u || !me[q * i + B] || T.o < 0.15) return;
    const R = T.o > 0.45 ? M.star : Bo(M.star, J[q * i + B], 0.5), de = T.big && T.o > 0.6 ? Math.floor(T.size / v) : 0;
    ce(B, q, R, 1, kp);
    for (let ue = 1; ue <= de; ue++) [[B - ue, q], [B + ue, q], [B, q - ue], [B, q + ue]].forEach((ge) => {
      ge[0] >= 0 && ge[1] >= 0 && ge[0] < i && ge[1] < u && me[ge[1] * i + ge[0]] && ce(ge[0], ge[1], R, 1, kp);
    });
  }), l.suns.forEach((T) => {
    const B = Math.max(1.5, T.rad / v), q = T.x / v, R = T.y / x, de = T.halo / v * 0.85;
    if (ke(q, R, de, (ue, ge, Se, Te) => {
      const $e = Math.sqrt(Se * Se + Te * Te);
      $e > B && $e < de && !me[ge * i + ue] && ce(ue, ge, le, 0.3 * (1 - ($e - B) / (de - B)), 0);
    }), A) {
      const ue = Math.floor(k / 500) % 2, ge = Math.max(1, B * 0.3);
      for (let Se = 0; Se < 8; Se++) if (Se % 2 === ue) for (let Te = B + 1.2; Te < B + 1.2 + ge; Te += 0.7) ce(Math.floor(q + Math.cos(Se * Math.PI / 4) * Te), Math.floor(R + Math.sin(Se * Math.PI / 4) * Te), M.sun, 1, Ku);
    }
    ke(q, R, B, (ue, ge, Se, Te) => {
      Se * Se + Te * Te <= B * B && ce(ue, ge, br(((Te / B + 1) / 2 - 0.6) / 0.4) > gr(ue, ge) ? M.sunEdge : M.sun, 1, Gu);
    });
  }), l.moons.forEach((T) => {
    const B = Math.max(1.5, T.d * 0.37 / v), q = T.x / v, R = T.y / x, de = q + 0.547 * B, ue = R - 0.503 * B, ge = 0.82 * B;
    ke(q, R, B, (Se, Te, $e, tt) => {
      if ($e * $e + tt * tt > B * B) return;
      const Za = Se + 0.5 - de, Ie = Te + 0.5 - ue;
      Za * Za + Ie * Ie > ge * ge && ce(Se, Te, br((tt + B) / (2 * B) * 1.1 - 0.1) > gr(Se, Te) ? M.moon : qe, 1, Uu);
    });
  }), l.clouds.forEach((T) => {
    const B = Math.max(3, T.w / v), q = B * 0.6665, R = T.x / v, de = T.y / x, ue = Bo(T.fill, "#000000", 0.16);
    for (let ge = Math.max(0, Math.floor(de) - 1); ge <= Math.min(u - 1, de + q + 1); ge++) for (let Se = Math.max(0, Math.floor(R) - 1); Se <= Math.min(i - 1, R + B + 1); Se++) {
      const Te = (Se + 0.5 - R) / B, $e = (ge + 0.5 - de) / B;
      Wp(Te, $e) && ce(Se, ge, !Wp(Te, $e + 1 / B) || br(($e - 0.42) / 0.25) * 0.8 > gr(Se, ge) ? ue : T.fill, T.o, Yu);
    }
  }), l.fogs.forEach((T) => {
    const B = Math.floor(T.y / x), q = Math.max(B, Math.floor((T.y + 6 * ee) / x) - 1), R = Math.floor(T.x / v), de = Math.floor((T.x + T.w) / v);
    for (let ue = B; ue <= q; ue++) for (let ge = R; ge <= de; ge++) {
      const Se = (ge - R) / Math.max(1, de - R);
      ce(ge, ue, T.c, T.a * (Se < 0.25 ? Se / 0.25 : Se > 0.75 ? (1 - Se) / 0.25 : 1), 0);
    }
  });
  const ie = Math.max(2, Math.round(9 / x));
  l.drops.forEach((T) => {
    const B = T.x / v, q = Math.floor(T.y / x);
    for (let R = 0; R < ie; R++) ce(Math.floor(B - 0.208 * R * x / v), q + R, M.rain, T.o, Zu);
  });
  const Ze = Math.max(0, Math.round(4.4 / v / 2.6));
  return l.flakes.forEach((T) => {
    const B = Math.floor(T.x / v), q = Math.floor(T.y / x);
    ce(B, q, M.snow, T.o, xl);
    for (let R = 1; R <= Ze; R++)
      ce(B - R, q, M.snow, T.o, xl), ce(B + R, q, M.snow, T.o, xl), ce(B, q - R, M.snow, T.o, xl), ce(B, q + R, M.snow, T.o, xl);
  }), l.bolts.forEach((T) => {
    if (v <= 3.5)
      for (let B = Math.floor(T.y / x); B <= (T.y + 24) / x; B++) for (let q = Math.floor(T.x / v); q <= (T.x + 11) / v; q++)
        ch(bh, (q + 0.5) * v - T.x, (B + 0.5) * x - T.y) && ce(q, B, M.sun, 1, yc);
    else {
      const B = Math.round(T.x / v), q = Math.round(T.y / x);
      wh.forEach((R, de) => R.split("").forEach((ue, ge) => {
        ue === "#" && ce(B + ge, q + de, M.sun, 1, yc);
      }));
    }
  }), { col: J, ids: U };
}
function yh(n, l) {
  const i = l.px, u = Math.max(6, Math.round(l.width / i)), v = Math.max(6, Math.round(l.height / i)), x = l.width / u, k = l.height / v, A = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, I = (G) => {
    const pe = $u(G, l);
    return xh(pe, Xu(pe, { clock: A, ambient: l.ambient, seed: l.seed }), u, v, x, k, A, l.ambient);
  }, M = I(n), W = l.reveal == null ? 1 : br(l.reveal);
  let F = M.col, V = M.ids;
  if (W < 1) {
    const G = l.prev ? I(l.prev) : null, pe = W * (u + 12);
    F = new Array(u * v), V = new Uint8Array(u * v);
    for (let ee = 0; ee < u * v; ee++) {
      const J = ee % u, U = ee / u | 0;
      (l.reduce ? W : br((pe - J) / 12)) > gr(J, U) ? (F[ee] = M.col[ee], V[ee] = M.ids[ee]) : G ? (F[ee] = G.col[ee], V[ee] = G.ids[ee]) : (F[ee] = null, V[ee] = 255);
    }
  }
  return ph(F, V, u, v, { oneBit: l.oneBit, ink: l.ink || "#26221e", paper: l.paper || "#fbf9f6", snowInk: !1 });
}
function kh(n, l, i) {
  const u = i.width, v = i.height, x = i.reveal == null ? 1 : br(i.reveal), k = (V, G) => {
    const pe = $u(G, i);
    Mh(V, pe, Xu(pe, i));
  };
  if (n.clearRect(0, 0, u, v), x >= 1) {
    k(n, l);
    return;
  }
  if (i.prev && k(n, i.prev), i.reduce) {
    n.save(), n.globalAlpha = x, k(n, l), n.restore();
    return;
  }
  const A = n.canvas, I = A.__wxOff || (A.__wxOff = document.createElement("canvas"));
  (I.width !== A.width || I.height !== A.height) && (I.width = A.width, I.height = A.height);
  const M = I.getContext("2d");
  M.setTransform(n.getTransform()), M.clearRect(0, 0, u, v), k(M, l);
  const W = x * (u + 64) - 64, F = M.createLinearGradient(W, 0, W + 64, 0);
  F.addColorStop(0, "rgba(0,0,0,1)"), F.addColorStop(1, "rgba(0,0,0,0)"), M.globalCompositeOperation = "destination-in", M.fillStyle = F, M.fillRect(0, 0, u, v), M.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(I, 0, 0), n.restore();
}
function Mh(n, l, i) {
  const { W: u, H: v, S: x, C: k, cw: A, yb: I, glowAt: M, soft: W, tw: F, sy: V } = l, G = n.getTransform().a || 1, pe = (ie) => {
    n.shadowColor = ie ? "rgba(28,18,8,.22)" : "transparent", n.shadowBlur = ie ? 4 * G : 0, n.shadowOffsetY = ie ? 1.5 * G : 0;
  }, ee = (ie, Ze) => {
    const T = gc(ie);
    return "rgba(" + T[0] + "," + T[1] + "," + T[2] + "," + Math.max(0, Math.min(1, Ze)).toFixed(3) + ")";
  }, J = (ie, Ze) => {
    const T = n.createLinearGradient(0, 0, u, 0);
    T.addColorStop(0, ie[0]);
    for (let B = 0; B < ie.length - 1; B++) {
      const q = (B + Ze) * A, R = (q - F / 2) / u, de = (q + F / 2) / u;
      R > 0 && R < 1 && T.addColorStop(R, ie[B]), de > 0 && de < 1 && T.addColorStop(de, ie[B + 1]);
    }
    return T.addColorStop(1, ie[ie.length - 1]), T;
  }, U = Math.max(24, Math.ceil(u / 4)), me = (ie, Ze) => {
    n.beginPath();
    for (let T = 0; T <= U; T++) {
      const B = u * T / U, q = ie == null ? 0 : I(B) + ie;
      T ? n.lineTo(B, q) : n.moveTo(B, q);
    }
    for (let T = U; T >= 0; T--) {
      const B = u * T / U;
      n.lineTo(B, I(B) + Ze);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = J(x.filter((ie) => !ie.night).map((ie) => ie.sky), 0.75), n.fillRect(0, 0, u, v);
  const ce = n.createLinearGradient(0, 0, u, 0);
  for (let ie = 0; ie <= 64; ie++) {
    const Ze = M(u * ie / 64);
    ce.addColorStop(ie / 64, ee(Ze.c, Math.min(1, Ze.a)));
  }
  n.fillStyle = ce;
  for (let ie = 0; ie < 8; ie++)
    n.globalAlpha = 1 - ie / 8, me(ie * 2 * V, (ie + 1) * 2 * V);
  n.fillStyle = J(x.filter((ie) => ie.night).map((ie) => ie.sky), 1.25);
  const ke = Math.max(0.5, W), oe = 6;
  n.globalAlpha = 1, me(null, -ke);
  for (let ie = 0; ie < oe; ie++)
    n.globalAlpha = 1 - (ie + 0.5) / oe, me(-ke + 2 * ke * ie / oe, -ke + 2 * ke * (ie + 1) / oe);
  n.globalAlpha = 1;
  const ne = new Path2D(gh), te = new Path2D(mh), E = new Path2D(hh), Ce = new Path2D(vh);
  n.fillStyle = k.star, i.stars.forEach((ie) => {
    n.globalAlpha = ie.o, ie.big ? (n.save(), n.translate(ie.x, ie.y), n.scale(ie.size, ie.size), n.fill(ne), n.restore()) : (n.beginPath(), n.arc(ie.x, ie.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const le = Bo(k.sun, "#ffffff", 0.55);
  i.suns.forEach((ie) => {
    const Ze = n.createRadialGradient(ie.x, ie.y, 0, ie.x, ie.y, ie.halo);
    Ze.addColorStop(0, ee(le, 0.42)), Ze.addColorStop(0.7, ee(le, 0)), n.fillStyle = Ze, n.beginPath(), n.arc(ie.x, ie.y, ie.halo, 0, Math.PI * 2), n.fill();
    const T = n.createLinearGradient(0, ie.y - ie.rad, 0, ie.y + ie.rad);
    T.addColorStop(0.6, k.sun), T.addColorStop(1, k.sunEdge), n.fillStyle = T, pe(!0), n.beginPath(), n.arc(ie.x, ie.y, ie.rad, 0, Math.PI * 2), n.fill(), pe(!1);
  });
  const qe = Bo(k.moon, "#ffffff", 0.6);
  i.moons.forEach((ie) => {
    n.save(), n.translate(ie.x - ie.d / 2, ie.y - ie.d / 2), n.scale(ie.d / 46, ie.d / 46);
    const Ze = n.createLinearGradient(0, 6, 0, 40);
    Ze.addColorStop(0, qe), Ze.addColorStop(1, k.moon), n.fillStyle = Ze, pe(!0), n.fill(te), pe(!1), n.restore();
  }), i.clouds.forEach((ie) => {
    n.save(), n.globalAlpha = ie.o, n.translate(ie.x, ie.y), n.scale(ie.w / 46, ie.h / 30.66), n.translate(-4, -9.67), n.fillStyle = ie.fill, pe(!0), n.fill(E), pe(!1), n.restore();
  }), i.fogs.forEach((ie) => {
    const Ze = n.createLinearGradient(ie.x, 0, ie.x + ie.w, 0);
    Ze.addColorStop(0, ee(ie.c, 0)), Ze.addColorStop(0.25, ee(ie.c, ie.a)), Ze.addColorStop(0.75, ee(ie.c, ie.a)), Ze.addColorStop(1, ee(ie.c, 0)), n.fillStyle = Ze, n.fillRect(ie.x, ie.y, ie.w, 6 * V);
  }), n.fillStyle = k.rain, i.drops.forEach((ie) => {
    n.save(), n.globalAlpha = ie.o, n.translate(ie.x, ie.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = k.snow, i.flakes.forEach((ie) => {
    n.globalAlpha = ie.o, n.beginPath(), n.arc(ie.x, ie.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = k.sun, i.bolts.forEach((ie) => {
    n.save(), n.globalAlpha = ie.o, n.translate(ie.x, ie.y), n.fill(Ce), n.restore();
  }), n.restore();
}
const Sh = (n) => n === "sunny" ? "clear" : n === "clear-night" ? "night" : n === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(n) ? "rain" : ["snowy", "snowy-rainy"].includes(n) ? "snow" : "cloudy", vl = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, nc = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, Qc = (n, l) => '<path class="' + l + '" d="' + n + '"/>', Ch = (n, l) => ' style="animation-delay:-' + Math.round(n * 137 % l) + 'ms"', _o = (n, l, i, u) => {
  const v = i * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (u < 1 ? ' opacity="' + u + '"' : "") + Ch(n, 2400) + ' d="M' + n + " " + (l - i) + "L" + (n + v) + " " + (l - v) + "L" + (n + i) + " " + l + "L" + (n + v) + " " + (l + v) + "L" + n + " " + (l + i) + "L" + (n - v) + " " + (l + v) + "L" + (n - i) + " " + l + "L" + (n - v) + " " + (l - v) + 'Z"/>';
}, Vp = ([n, l, i], u) => '<path class="wbMoonPath" d="' + n + '" fill="url(#' + u + ')"/><defs><linearGradient id="' + u + '" x1="0" y1="' + l + '" x2="0" y2="' + i + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Th = (n, l) => l ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Lh = (n) => (n ? ["29.35", "43.04", "56.74"].map((l, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" x="' + l + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + l + ' 60.65)"/></g>') : [19, 26, 33].map((l, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + l + ' 38)"/></g>')).join(""), Ah = (n) => (n ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([l, i], u) => '<circle class="wbFlake" style="animation-delay:-' + u * 640 + 'ms" cx="' + l + '" cy="' + i + '" r="' + (n ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function Eh(n, l, i, u) {
  const v = (x) => '<g filter="url(#' + u + '-sh)">' + x + "</g>";
  return n === "clear" ? l ? v(Vp(i ? nc.l : nc.s, u)) + (i ? _o(70, 20, 5.83, 1) + _o(78.33, 41.67, 3.75, 0.8) + _o(60, 71.67, 3.33, 0.6) : _o(42, 12, 3.5, 1) + _o(47, 25, 2.25, 0.8) + _o(36, 43, 2, 0.6)) : v(Th(u, i)) : n === "partly" ? v(l ? Vp(i ? nc.lp : nc.sp, u) : i ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + v(Qc(i ? vl.lp : vl.sp, l ? "wbCloudLight" : "wbBright")) + (l ? i ? _o(73.33, 16.67, 4.17, 0.9) : _o(44, 10, 2.5, 0.9) : "") : n === "cloudy" ? v(Qc(i ? vl.lc : vl.s, l ? "wbCloudLight" : "wbBright")) + (l ? i ? _o(15, 15, 3.75, 0.8) + _o(76.67, 13.33, 2.92, 0.6) : _o(9, 9, 2.25, 0.8) + _o(46, 8, 1.75, 0.6) : "") : v(Qc(i ? vl.lr : vl.s, "wbCloudLight")) + (n === "rain" ? Lh(i) : Ah(i));
}
const Dh = (n, l) => '<defs><filter id="' + n + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (l ? 1.6 : 1) + '" stdDeviation="' + (l ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function _h(n, l, i, u) {
  let v = Sh(n);
  const x = v === "night" || !!i;
  v === "night" && (v = "clear");
  const k = l ? 90 : 54;
  return { k: v, night: x, svg: '<svg viewBox="0 0 ' + k + " " + k + '">' + Dh(u, l) + Eh(v, x, l, u) + "</svg>" };
}
const Rh = [
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
], oc = (n, l) => (Rh[l % 8 * 8 + n % 8] + 0.5) / 64, li = (n) => [parseInt(n.slice(1, 3), 16), parseInt(n.slice(3, 5), 16), parseInt(n.slice(5, 7), 16)], En = (n, l, i) => [Math.round(n[0] + (l[0] - n[0]) * i), Math.round(n[1] + (l[1] - n[1]) * i), Math.round(n[2] + (l[2] - n[2]) * i)], hd = (n) => n < 0 ? 0 : n > 1 ? 1 : n, jp = (n, l) => {
  let i = n * 374761393 + l * 668265263 ^ 1540483477;
  return i = Math.imul(i ^ i >>> 13, 1274126177), ((i ^ i >>> 16) >>> 0) / 4294967296;
}, Os = [255, 255, 255], Wn = li("#26221e"), zp = li("#0288d1"), Bh = li("#01579b"), ep = li(Un.cloudDay), tp = li(Un.cloudNight), ic = li(Un.dusk), ap = li(Un.sunEdge), Ph = li(Un.sun), Nh = 10, Gp = 0.3, wr = 56, Ju = 21;
function Hh(n) {
  const l = Array.from({ length: Ju }, () => new Array(wr).fill(void 0)), i = (k, A, I) => {
    l[A][k] = I;
  }, u = En(ic, Wn, 0.35), v = En(Wn, Os, 0.22);
  for (let k = 0; k <= 6; k++) {
    const A = k < 2 ? wr - 2 : wr - 1;
    for (let I = 6 - k; I <= A; I++) i(I, k, k < 2 ? u : k === 6 ? v : Wn);
  }
  const x = [ic, ap, tp, li(Un.skyRainDay), En(ic, Wn, 0.2), En(n, Wn, 0.35)];
  [2, 3, 2, 3, 3].forEach((k, A) => {
    const I = 9 + A * 6;
    for (let M = 0; M < k; M++) {
      const W = x[(A * 2 + M * 3) % x.length];
      for (let F = I; F < I + 5; F++)
        i(F, 7 + M * 2, En(W, Wn, 0.12)), i(F, 8 + M * 2, M === k - 1 ? En(W, Os, 0.3) : W);
      i(I + 5, 7 + M * 2, Wn), i(I + 5, 8 + M * 2, Wn);
    }
  });
  for (let k = 7; k <= 12; k++) i(5, k, Wn);
  i(5, 13, ap);
  for (let k = 7; k <= 14; k++) for (let A = 42; A <= 51; A++) i(A, k, A === 51 ? tp : ep);
  for (let k = 43; k <= 50; k += 2)
    i(k, 12, Wn), i(k, 9, En(Wn, ep, 0.4));
  for (let k = 40; k <= 53; k++) i(k, 14, k === 40 || k === 53 ? tp : ep);
  for (let k = 15; k <= 18; k++) for (let A = 46; A <= 49; A++) i(A, k, k === 18 ? Wn : k === 16 ? ap : ic);
  for (let k = 15; k <= 19; k++) i(44, k, Wn);
  return i(44, 20, Ph), l;
}
function Ih(n, l, i, u) {
  const v = Math.max(1, Math.round(n)), x = Math.max(1, Math.round(l)), k = new Uint8ClampedArray(v * x * 4), A = li(u.skyClearDay), I = li(u.skyFogDay), M = Hh(A), W = Math.round(x * 0.55), F = hd(1 - Math.log(i / Gp) / Math.log(Nh / Gp)), V = En(A, I, F), G = (U) => hd((U - 0.1) / 0.9), pe = hd((1 - Math.exp(-2 / i) - 0.2) / 0.8), ee = Math.round(v / 2 - wr / 2), J = W + 3;
  for (let U = 0; U < x; U++) {
    const me = J - 1 - U, ce = U - J;
    for (let ke = 0; ke < v; ke++) {
      const oe = ke - ee;
      let ne, te;
      const E = me >= 0 && me < Ju && oe >= 0 && oe < wr ? M[me][oe] : void 0;
      if (E)
        ne = E, te = pe;
      else if (me >= 0 && me <= 1 && oe >= 4 - me && oe <= 5 - me)
        ne = En(Os, zp, 0.15), te = pe;
      else if (U < W) {
        const qe = hd(((U + 0.5) / W - 0.15) / 0.85) * 3, ie = Math.min(3, Math.floor(qe + oc(ke + 2, U + 5)));
        ne = En(V, Os, ie * 0.1), te = F * 0.95;
      } else {
        const qe = (U - W + 0.5) / (x - W), ie = Math.min(1.5, 6e-3 / (qe * qe)), Ze = hd(qe * 1.4) * 3, T = Math.min(3, Math.floor(Ze + oc(ke + 1, U + 6)));
        ne = En(zp, Bh, T / 3);
        const B = 1 + Math.round(qe * 7), q = Math.floor(ke / (B * 3)), R = 0.06 + 0.16 * qe, de = ke % (B * 3) < B;
        de && jp(q, U) < R ? ne = En(ne, Os, 0.18 + 0.1 * (1 - qe)) : de && qe > 0.5 && jp(q, U - 1) < R && (ne = En(ne, Wn, 0.12)), te = G(1 - Math.exp(-ie / i)), ce === 0 && oe >= 3 && oe <= 8 ? (ne = En(ne, Os, oe < 6 ? 0.8 : 0.45), te = pe) : ce >= 0 && ce <= 2 && oe >= wr && oe < wr + 40 ? ((1 - (oe - wr) / 40) * (ce === 1 ? 0.9 : 0.5) > oc(ke, U + 3) && (ne = En(ne, Os, 0.5)), te = pe) : ce === 0 && oe >= 6 && oe < wr && (ne = En(ne, Wn, oe % 2 === 0 ? 0.35 : 0.2), te = pe);
      }
      const Ce = te > oc(ke, U) ? I : ne, le = (U * v + ke) * 4;
      k[le] = Ce[0], k[le + 1] = Ce[1], k[le + 2] = Ce[2], k[le + 3] = 255;
    }
  }
  return { data: k, w: v, h: x };
}
const Fh = {
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
}, Oh = 1.6;
function qh(n, l) {
  const i = n ? Fh[String(n).toUpperCase()] : void 0;
  if (!i || !(l > 0)) return;
  const u = (x) => Math.abs(Math.log(x[2] / l)), v = i.reduce((x, k) => u(k) < u(x) ? k : x);
  return u(v) <= Math.log(Oh) ? { from: v[0], to: v[1], km: v[2] } : void 0;
}
const Wh = (n, l) => l === "mi" ? n * 1.609344 : l === "m" ? n / 1e3 : l === "ft" ? n * 3048e-7 : l === "yd" ? n * 9144e-7 : n, Vh = (n) => n < 1 ? "very_poor" : n < 4 ? "poor" : n < 10 ? "moderate" : n < 20 ? "good" : n < 40 ? "very_good" : "excellent", Ta = {
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
}, la = { standard: "cubic-bezier(.2,0,0,1)", land: "cubic-bezier(.34,1.46,.64,1)", spring: "cubic-bezier(.2,1.2,.4,1)", soft: "cubic-bezier(.4,0,.2,1)", exit: "cubic-bezier(.4,0,1,1)" }, nn = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
};
function jh() {
  const { pivot: n, slider: l, iconbtn: i, warp: u, outline: v } = Ta;
  return [
    ["--pv-persp", n.persp + "px"],
    ["--pv-shine", n.shine / 100],
    ["--pv-size", n.size + "%"],
    ["--pv-ret", n.ret + "ms"],
    ["--pv-ease", la[n.ease]],
    ["--ab-blur", l.glow + "px"],
    ["--ab-spread", l.spread + "px"],
    ["--ab-str", l.strength + "%"],
    ["--ab-blur2", l.glow + l.hold + "px"],
    ["--ab-spread2", l.spread + l.hold / 4 + "px"],
    ["--ab-str2", l.holdStrength + "%"],
    ["--ab-grow", "scaleY(" + (1 + (l.grow / 100 - 1) * 3) + ")"],
    ["--ab-in", l.ein + "ms"],
    ["--ab-out", l.eout + "ms"],
    ["--ab-ease", la[l.ease]],
    ["--ih-s", i.scale / 100],
    ["--ih-p", i.press / 100],
    ["--ih-dur", i.dur + "ms"],
    ["--ih-ease", la[i.ease]],
    ["--ih-tint", "8%"],
    ["--wc-dur", u.cdur + "ms"],
    ["--wc-delay", u.cdelay + "ms"],
    ["--wc-ease", la[u.ease]],
    ["--ol-esens", v.glowFrom],
    ["--ol-csens", v.colourFrom],
    ["--ol-cone", v.cone],
    ["--ol-glow", v.glow / 100],
    ["--ol-border", v.border / 100],
    ["--ol-fill", v.fill / 100],
    ["--ol-size", v.size / 100],
    ["--ol-h", v.hue + "deg"],
    ["--ol-in", v.fin + "ms"],
    ["--ol-out", v.fout + "ms"]
  ].map(([x, k]) => x + ":" + k).join(";");
}
const np = ":is(button.primary,button.pill,.hcBtn,.wbRangeBtn,.activityRow.tap,.hcRow,a.hcRow)", zh = "#homeView .tfAreaPanel", Gh = 300, vc = (n) => Math.min(1, Gh / Math.max(1, n)), op = (n, l) => 1 + (l / 100 - 1) * vc(n.offsetWidth);
function Uh(n, l) {
  l.style.cssText += ";" + jh();
  let i = null;
  const u = (W) => {
    W.classList.remove("mvMoving", "mvLit"), W.style.setProperty("--rx", "0deg"), W.style.setProperty("--ry", "0deg"), W.style.setProperty("--sc", 1), W._down = !1;
  };
  n.addEventListener("pointermove", (W) => {
    var U, me;
    const F = W.pointerType === "touch" || nn() ? null : (me = (U = W.target).closest) == null ? void 0 : me.call(U, np);
    if (i && i !== F && u(i), i = F, !F || F.disabled) return;
    const V = Ta.pivot, G = F.getBoundingClientRect(), pe = (W.clientX - G.left) / G.width, ee = (W.clientY - G.top) / G.height, J = 1;
    F.classList.add("mvPv", "mvMoving", "mvLit"), F.style.setProperty("--pv-persp", V.persp / vc(Math.max(F.offsetWidth, F.offsetHeight)) + "px"), F.style.setProperty("--ry", (J * (pe - 0.5) * 2 * V.tilt * vc(F.offsetWidth)).toFixed(3) + "deg"), F.style.setProperty("--rx", (J * -(ee - 0.5) * 2 * V.tilt * vc(F.offsetHeight)).toFixed(3) + "deg"), F.style.setProperty("--mx", (pe * 100).toFixed(1) + "%"), F.style.setProperty("--my", (ee * 100).toFixed(1) + "%"), F._down || F.style.setProperty("--sc", op(F, V.lift));
  }, { passive: !0 }), n.addEventListener("pointerout", (W) => {
    i && !i.contains(W.relatedTarget) && (u(i), i = null);
  }), n.addEventListener("pointerdown", (W) => {
    var V, G;
    const F = nn() ? null : (G = (V = W.target).closest) == null ? void 0 : G.call(V, np);
    F && (F._down = !0, F.classList.add("mvPv"), F.classList.remove("mvMoving"), F.style.setProperty("--sc", op(F, Ta.pivot.press)));
  }), n.addEventListener("pointerup", (W) => {
    var V, G;
    const F = (G = (V = W.target).closest) == null ? void 0 : G.call(V, np);
    F && (F._down = !1, F.style.setProperty("--sc", W.pointerType === "touch" ? 1 : op(F, Ta.pivot.lift)));
  });
  let v = null;
  n.addEventListener("pointerover", (W) => {
    var F, V, G;
    W.pointerType !== "touch" && ((G = (V = (F = W.target).closest) == null ? void 0 : V.call(F, ".tfBar")) == null || G.classList.add("mvHover"));
  }), n.addEventListener("pointerout", (W) => {
    var V, G;
    const F = (G = (V = W.target).closest) == null ? void 0 : G.call(V, ".tfBar");
    F && !F.contains(W.relatedTarget) && F !== v && F.classList.remove("mvHover");
  }), n.addEventListener("pointerdown", (W) => {
    var V, G;
    const F = (G = (V = W.target).closest) == null ? void 0 : G.call(V, ".tfBar");
    F && (v = F, F.classList.add("mvHold"));
  });
  const x = (W) => {
    if (!v) return;
    v.classList.remove("mvHold");
    const F = v.getBoundingClientRect();
    (W.pointerType === "touch" || W.clientX < F.left || W.clientX > F.right || W.clientY < F.top || W.clientY > F.bottom) && v.classList.remove("mvHover"), v = null;
  };
  window.addEventListener("pointerup", x, !0), window.addEventListener("pointercancel", x, !0), n.addEventListener("focusin", (W) => {
    var F, V;
    (V = (F = W.target).matches) != null && V.call(F, ".tfBar:focus-visible") && W.target.classList.add("mvHover");
  }), n.addEventListener("focusout", (W) => {
    var F;
    (F = W.target.classList) == null || F.remove("mvHover", "mvHold");
  }), n.addEventListener("keydown", (W) => {
    var V, G;
    const F = (G = (V = W.target).closest) == null ? void 0 : G.call(V, ".tfBar");
    !F || !["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(W.key) || (F.classList.add("mvHold"), clearTimeout(F._k), F._k = setTimeout(() => F.classList.remove("mvHold"), 350));
  }), n.addEventListener("click", (W) => {
    var V, G;
    const F = (G = (V = W.target).closest) == null ? void 0 : G.call(V, "button.tfIcon[data-act]");
    F && Yh(F);
  });
  let k = null;
  const A = (W, F, V) => {
    W.querySelector(":scope>.mvEdge") || W.insertAdjacentHTML("afterbegin", '<span class="mvEdgeFill" aria-hidden="true"></span><span class="mvEdge" aria-hidden="true"><i></i></span>');
    const G = W.getBoundingClientRect(), pe = G.width / 2, ee = G.height / 2, J = F.clientX - G.left - pe, U = F.clientY - G.top - ee, me = J ? pe / Math.abs(J) : 1 / 0, ce = U ? ee / Math.abs(U) : 1 / 0, ke = Math.min(Math.max(1 / Math.min(me, ce), 0), 1);
    let oe = Math.atan2(U, J) * 180 / Math.PI + 90;
    oe < 0 && (oe += 360);
    const ne = V ? 100 : ke * 100;
    W.style.setProperty("--edge-proximity", ne.toFixed(3)), W.style.setProperty("--cursor-angle", oe.toFixed(3) + "deg"), W.classList.toggle("mvLitEdge", V || ne >= Ta.outline.lightAt);
  }, I = (W) => {
    W.classList.remove("mvLitEdge"), W.style.setProperty("--edge-proximity", "0"), W._down = !1;
  }, M = (W) => {
    var V;
    const F = (V = W.closest) == null ? void 0 : V.call(W, zh);
    return F && !l.classList.contains("tfEditing") ? F : null;
  };
  n.addEventListener("pointermove", (W) => {
    if (W.pointerType === "touch") return;
    const F = M(W.target);
    k && k !== F && I(k), k = F, F && !F._down && A(F, W, !1);
  }, { passive: !0 }), n.addEventListener("pointerout", (W) => {
    k && !k.contains(W.relatedTarget) && (I(k), k = null);
  }), n.addEventListener("pointerdown", (W) => {
    const F = M(W.target);
    F && Ta.outline.press && (F._down = !0, A(F, W, !0));
  }), n.addEventListener("pointerup", (W) => {
    const F = M(W.target);
    F && (F._down = !1, W.pointerType === "touch" ? I(F) : A(F, W, !1));
  }), new MutationObserver((W) => {
    var F;
    for (const V of W) {
      const G = V.target;
      if (V.type === "attributes") {
        (F = G.classList) != null && F.contains("tfMoreBackdrop") && !G.hidden && V.oldValue !== null && Up(G);
        continue;
      }
      V.addedNodes.forEach((pe) => {
        pe.nodeType === 1 && pe.classList.contains("tfMoreBackdrop") && !pe.hidden && Up(pe);
      });
    }
  }).observe(l, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["hidden"], attributeOldValue: !0 });
}
const Qu = (n) => n.closest("[data-k],.tfMore,.tfMorePair") || n.getRootNode();
function ef(n, l) {
  const i = [];
  for (let u = n; u && u !== l && u.parentNode; u = u.parentNode) i.unshift([...u.parentNode.children].indexOf(u));
  return i;
}
const tf = (n, l) => l.reduce((i, u) => i == null ? void 0 : i.children[u], n);
function Yh(n) {
  var G;
  if (nn() || n._warp) return;
  const l = Ta.warp, i = l.amount / 100, u = n.firstElementChild;
  if (!u) return;
  const v = { squash: { scale: 1 + 0.35 * i + " " + (1 - 0.55 * i) }, pinch: { scale: String(1 - 0.5 * i) }, twist: { rotate: 140 * i + "deg", scale: String(1 - 0.35 * i) }, flip: { rotate: "y 90deg" } }[l.style], x = "blur(" + 2 * i + "px)", k = n.getRootNode(), A = Qu(n), I = (G = A.dataset) == null ? void 0 : G.k, M = ef(n, A), W = n.getAttribute("aria-pressed") + "|" + n.dataset.act;
  n._warp = 1;
  const F = u.animate([{ scale: "1", rotate: "none", filter: "blur(0px)" }, { ...v, filter: x }], { duration: l.win, easing: la.exit, fill: "forwards" }), V = performance.now();
  F.finished.then(() => {
    const pe = () => {
      var ke, oe;
      const ee = I ? A.isConnected ? A : (ke = k.querySelector) == null ? void 0 : ke.call(k, '[data-k="' + CSS.escape(I) + '"]') : A, J = ee && tf(ee, M);
      if (J === n && n.getAttribute("aria-pressed") + "|" + n.dataset.act === W && performance.now() - V < 420) {
        requestAnimationFrame(pe);
        return;
      }
      (((oe = J == null ? void 0 : J.matches) != null && oe.call(J, "button.tfIcon") ? J : n).firstElementChild || u).animate([{ ...v, filter: x }, { scale: "1", rotate: "none", filter: "blur(0px)" }], { duration: l.wout, easing: la[l.ease] }), F.cancel(), n._warp = 0;
    };
    pe();
  });
}
function Zh(n, l, i) {
  var W;
  if (nn() || !n || !l) return;
  const u = Ta.expand, v = n.getBoundingClientRect(), x = "inset(" + (l.top - v.top).toFixed(1) + "px " + (v.right - l.right).toFixed(1) + "px " + (v.bottom - l.bottom).toFixed(1) + "px " + (l.left - v.left).toFixed(1) + "px round 24px)", k = n.firstElementChild, A = k == null ? void 0 : k.querySelector('.tfBack, [data-close], [data-wb="graph-close"]'), I = [...n.children].slice(1);
  n.animate([{ clipPath: x }, { clipPath: "inset(0px 0px 0px 0px round 0px)" }], { duration: u.dur, easing: la[u.ease] });
  const M = (W = k == null ? void 0 : k.querySelector(".tfIcon,.wbIcon")) == null ? void 0 : W.getBoundingClientRect();
  k && M && i && k.animate([{ transform: "translate(" + (i.left - M.left).toFixed(1) + "px," + (i.top - M.top).toFixed(1) + "px)" }, { transform: "none" }], { duration: u.dur, easing: la[u.ease] }), A == null || A.animate([{ opacity: 0 }, { opacity: 0, offset: 0.5 }, { opacity: 1 }], { duration: u.dur, easing: la[u.ease] }), I.forEach((F, V) => {
    F.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: u.delay + V * u.stagger, easing: la.standard, fill: "backwards" });
  });
}
function Kh(n, l, i) {
  if (nn() || !n || !l) {
    i();
    return;
  }
  const u = Ta.expand, v = u.dur * u.back / 100, x = n.getBoundingClientRect(), k = "inset(" + (l.top - x.top).toFixed(1) + "px " + (x.right - l.right).toFixed(1) + "px " + (x.bottom - l.bottom).toFixed(1) + "px " + (l.left - x.left).toFixed(1) + "px round 24px)";
  [...n.children].slice(1).forEach((W) => W.animate([{ opacity: 1 }, { opacity: 0 }], { duration: v * 0.3, easing: la.standard, fill: "forwards" }));
  const A = n.animate([{ clipPath: "inset(0px 0px 0px 0px round 0px)" }, { clipPath: k, opacity: 1, offset: 0.85 }, { clipPath: k, opacity: 0 }], { duration: v, easing: la.standard, fill: "forwards" });
  let I = !1;
  const M = () => {
    I || (I = !0, i());
  };
  A.finished.then(M, M), setTimeout(M, v + 80);
}
const af = (n) => {
  let l = "M" + n[0][0].toFixed(1) + " " + n[0][1].toFixed(1);
  for (let i = 0; i < n.length - 1; i++) {
    const u = n[i - 1] || n[i], v = n[i], x = n[i + 1], k = n[i + 2] || x, A = [v[0] + (x[0] - u[0]) / 6, v[1] + (x[1] - u[1]) / 6], I = [x[0] - (k[0] - v[0]) / 6, x[1] - (k[1] - v[1]) / 6];
    l += "C" + A.map((M) => M.toFixed(1)).join(" ") + " " + I.map((M) => M.toFixed(1)).join(" ") + " " + x.map((M) => M.toFixed(1)).join(" ");
  }
  return l;
}, nf = (n, l, i, u = "mvGrid") => [0, 1, 2].map((v) => {
  const x = (l + (i - l) * v / 2).toFixed(1);
  return '<line class="' + u + '" x1="0" x2="' + n + '" y1="' + x + '" y2="' + x + '"/>';
}).join("");
function of(n, l = n.querySelector(".mvLine"), i = n.querySelectorAll(".mvArea,.mvDot")) {
  if (nn() || !(l != null && l.getTotalLength)) return;
  const u = Ta.graphs, v = l.getTotalLength();
  l.animate([{ strokeDasharray: v, strokeDashoffset: v }, { strokeDasharray: v, strokeDashoffset: 0 }], { duration: u.draw, easing: la.standard }), [...i].forEach((x, k) => x.animate([{ opacity: 0 }, { opacity: 1 }], { duration: u.draw * 0.6, delay: u.draw * 0.3 + k * 12, easing: la.standard, fill: "backwards" }));
}
function bc(n, l, i, u, v) {
  if (n.getAnimations().forEach((W) => W.cancel()), n.style.left = u + "px", n.style.width = v + "px", nn() || l === u && i === v) return;
  const x = Ta.tabs, k = x.stretch / 100, A = (W, F) => ({ left: W + "px", width: F + "px" }), M = u > l ? A(l + (u - l) * (0.15 * (1 - k)), u + v - (l + (u - l) * (0.15 * (1 - k)))) : A(u, l + i - u - (l - u) * (0.15 * (1 - k)));
  n.animate([A(l, i), { offset: 0.5, ...M }, A(u, v)], { duration: x.dur, easing: la.standard });
}
function $h(n) {
  const l = ":is(.themeChoice,.wbSegments,.tfHeightTabs,.hcSeg,.tfSeg)", i = (v) => v.querySelector(':scope>[aria-pressed="true"],:scope>[aria-checked="true"],:scope>.active'), u = (v, x) => x ? [...v.children].indexOf(x) : -1;
  n.addEventListener("click", (v) => {
    var me, ce, ke;
    const x = (ce = (me = v.target).closest) == null ? void 0 : ce.call(me, l + ">button"), k = x == null ? void 0 : x.parentElement;
    if (!k || nn() || x.disabled) return;
    const A = i(k);
    if (!A || A === x) return;
    const I = u(k, A), M = k.getBoundingClientRect(), W = A.getBoundingClientRect(), F = getComputedStyle(A).borderRadius, V = k.getRootNode(), G = Qu(k), pe = (ke = G.dataset) == null ? void 0 : ke.k, ee = ef(k, G), J = performance.now(), U = () => {
      var ie, Ze, T;
      const oe = pe && !G.isConnected ? (ie = V.querySelector) == null ? void 0 : ie.call(V, '[data-k="' + CSS.escape(pe) + '"]') : G, ne = oe && tf(oe, ee), te = (Ze = ne == null ? void 0 : ne.matches) != null && Ze.call(ne, l) ? i(ne) : null;
      if (!te || u(ne, te) === I) {
        performance.now() - J < 700 && requestAnimationFrame(U);
        return;
      }
      const E = ne.getBoundingClientRect(), Ce = te.getBoundingClientRect(), le = getComputedStyle(te);
      (T = ne.querySelector(":scope>.mvSegInd")) == null || T.remove();
      const qe = document.createElement("span");
      qe.className = "mvSegInd", qe.style.cssText = "top:" + (Ce.top - E.top - ne.clientTop) + "px;height:" + Ce.height + "px;border-radius:" + F + ";background:" + le.backgroundColor + ";box-shadow:" + le.boxShadow, getComputedStyle(ne).position === "static" && (ne.style.position = "relative"), ne.prepend(qe), ne.classList.add("mvSegMoving"), bc(qe, W.left - M.left - ne.clientLeft, W.width, Ce.left - E.left - ne.clientLeft, Ce.width), clearTimeout(ne._seg), ne._seg = setTimeout(() => {
        qe.remove(), ne.classList.remove("mvSegMoving");
      }, Ta.tabs.dur + 20);
    };
    requestAnimationFrame(U);
  }, !0);
}
const rf = (n) => getComputedStyle(n).placeItems.startsWith("end");
function Up(n) {
  const l = n.firstElementChild;
  if (nn() || !l || l.classList.contains("still")) return;
  const i = Ta.dialog;
  n.animate([{ opacity: 0, backdropFilter: "blur(0px)" }, { opacity: 1, backdropFilter: "blur(" + i.blur + "px)" }], { duration: i.open, easing: la.standard }), l.style.animation = "none", l.animate(rf(n) ? [{ transform: "translateY(100%)" }, { transform: "none" }] : [{ opacity: 0, transform: "scale(" + i.from / 100 + ")" }, { opacity: 1, transform: "none" }], { duration: i.open, easing: la[i.ease] }), [...(l.classList.contains("tfMorePair") && l.querySelector(".tfMore") || l).children].forEach((v, x) => v.animate([{ opacity: 0 }, { opacity: 1 }], { duration: i.open * 0.6, delay: i.open * 0.35 + x * 40, easing: la.standard, fill: "backwards" }));
}
function Xh(n, l) {
  const i = n == null ? void 0 : n.firstElementChild;
  if (nn() || !i || n.hidden || n._closing) {
    l();
    return;
  }
  const u = Ta.dialog;
  n._closing = !0, n.style.pointerEvents = "none", n.animate([{ opacity: 1, backdropFilter: "blur(" + u.blur + "px)" }, { opacity: 0, backdropFilter: "blur(0px)" }], { duration: u.close, easing: la.exit, fill: "forwards" });
  const v = i.animate(rf(n) ? [{ transform: "none" }, { transform: "translateY(100%)" }] : [{ opacity: 1, transform: "none" }, { opacity: 0, transform: "scale(" + u.from / 100 + ")" }], { duration: u.close, easing: la.exit, fill: "forwards" });
  let x = !1;
  const k = () => {
    x || (x = !0, n._closing = !1, n.style.pointerEvents = "", n.getAnimations().forEach((A) => A.cancel()), i.getAnimations().forEach((A) => A.cancel()), l());
  };
  v.finished.then(k, k), setTimeout(k, u.close + 80);
}
const Jh = '<span class="mvTick" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 6L9 17L4 12" pathLength="1"/></svg></span>';
function Qh(n, l) {
  n.replaceChildren(), n.insertAdjacentHTML("afterbegin", Jh), n.appendChild(Object.assign(document.createElement("span"), { className: "mvToastText", textContent: l }));
}
function em(n) {
  if (nn()) return;
  const l = Ta.confirm;
  n.animate([{ opacity: 0, translate: "0 18px" }, { opacity: 1, translate: "0 0" }], { duration: l.dur, easing: la.spring });
  const i = n.querySelector(".mvTick path");
  i && l.draw && i.animate([{ strokeDasharray: "1", strokeDashoffset: "1" }, { strokeDasharray: "1", strokeDashoffset: "0" }], { duration: 420, delay: l.dur * 0.5, easing: la.standard, fill: "backwards" });
}
const Yp = (n, l, i, u, v = 1) => (n + l * i * v) * Math.pow(u, v);
function Zp(n) {
  const l = Ta.drag.squash / 100;
  !n || nn() || !l || n.animate([{ transform: "scale(" + (1 + l * 0.4) + "," + (1 - l) + ")" }, { transform: "scale(" + (1 - l * 0.1) + "," + (1 + l * 0.24) + ")" }, { transform: "none" }], { duration: 340, easing: "ease-out" });
}
function Kp(n) {
  if (!n || nn()) return;
  const l = Ta.expand;
  [...n.children].slice(1).forEach((i, u) => i.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: l.delay + u * l.stagger, easing: "cubic-bezier(.2,0,0,1)", fill: "backwards" }));
}
const bn = 6e4, zt = 36e5, no = 864e5, vd = 1440, tm = 6, am = 10 * bn, $p = 3, nm = 3, rc = { day: [6, 22], waking: [7, 23], all: [0, 24] }, om = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], im = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", Xp = (n, l, i, u) => '<circle cx="' + n + '" cy="' + l + '" r="' + i + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((v) => {
  const x = Math.cos(v * Math.PI / 180), k = Math.sin(v * Math.PI / 180), A = i + 2, I = i + 2 + u;
  return "M" + (n + x * A).toFixed(2) + " " + (l + k * A).toFixed(2) + "L" + (n + x * I).toFixed(2) + " " + (l + k * I).toFixed(2);
}).join("") + '"/>', fr = (n) => '<path d="' + im + '"' + (n ? ' transform="' + n + '"' : "") + "/>", hr = (n) => '<path d="' + n + '"/>', Jp = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function rm(n, l) {
  const i = "translate(0,-3)";
  switch (n) {
    case "sunny":
      return l ? Jp : Xp(12, 12, 4, 2.5);
    case "clear-night":
      return Jp;
    case "partlycloudy":
      return (l ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : Xp(7.5, 7.5, 2.6, 1.4)) + fr("translate(3.6,3) scale(.85)");
    case "cloudy":
      return fr();
    case "fog":
      return hr("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return fr(i) + hr("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return fr(i) + hr("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return fr(i) + hr("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return fr(i) + hr("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return fr(i) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return fr(i) + hr("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return fr(i) + hr("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return hr("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + hr("M12 8v5M12 16h.01");
  }
}
const ip = (n, l) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + rm(n, l) + "</svg>", sm = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), lm = 30 * bn, dm = 7, cm = 3, Qp = 1, pm = bn, um = 15 * bn, fm = 5, Gt = {
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
}, Re = {
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
}, hm = {
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
}, mm = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], gm = Object.keys(Re.phases), vm = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)", extreme: "var(--purple-color, #926bc7)" }, eu = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, sf = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], sc = 100, tu = "µg/m³", bm = "weather_alerts.air_quality_pollen", kc = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], wm = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, xm = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], ym = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, km = { daily: 1, hourly: 2 }, Oe = (n) => String(n ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), Ln = (n, l) => n.replace(/\{(\w+)\}/g, (i, u) => l[u] ?? ""), vr = (n) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + n + '"/></svg>', au = /* @__PURE__ */ new Map();
function lf(n) {
  let l = au.get(n);
  if (l === void 0) {
    const i = "http://www.w3.org/2000/svg", u = document.createElementNS(i, "svg"), v = document.createElementNS(i, "path");
    u.setAttribute("viewBox", "0 0 24 24"), u.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", v.setAttribute("d", n), u.append(v), document.body.append(u);
    const x = v.getBBox();
    u.remove();
    const k = Math.max(x.width, x.height), A = k ? 26 * 24 / k : 0, I = A / 24;
    l = k ? "width:" + A.toFixed(2) + "px;height:" + A.toFixed(2) + "px;translate:" + ((12 - x.x - x.width / 2) * I).toFixed(2) + "px " + ((12 - x.y - x.height / 2) * I).toFixed(2) + "px" : "", au.set(n, l);
  }
  return l ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + l + '"><path d="' + n + '"/></svg>' : vr(n);
}
const Mm = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
}, aa = (n) => n != null && n !== "" && Number.isFinite(Number(n)), nu = /* @__PURE__ */ new Map(), ou = /* @__PURE__ */ new Map(), rp = /* @__PURE__ */ new WeakMap(), Sm = (n) => {
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
function It(n, l, i) {
  const u = Number(n);
  if (Number.isNaN(u)) return String(n);
  const v = (l == null ? void 0 : l.number_format) === "none", x = { maximumFractionDigits: 2, ...i, ...v ? { useGrouping: !1 } : {} }, k = v ? "en-US" : Sm(l), A = JSON.stringify([k, x]);
  let I = nu.get(A);
  if (!I) {
    try {
      I = new Intl.NumberFormat(k, x);
    } catch {
      I = new Intl.NumberFormat(void 0, x);
    }
    nu.set(A, I);
  }
  return I.format(u);
}
const Ep = (n) => {
  var l;
  return ((l = n == null ? void 0 : n.locale) == null ? void 0 : l.language) || (n == null ? void 0 : n.language) || void 0;
};
function Cm(n) {
  if (!n) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (rp.has(n)) return rp.get(n);
  const l = n.time_format, i = l === "language" || l === "system" || !l ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(l === "language" ? n.language : void 0).includes("10") : l === "12";
  return rp.set(n, i), i;
}
const df = (n) => {
  var l, i;
  return ((l = n == null ? void 0 : n.locale) == null ? void 0 : l.time_zone) === "server" && ((i = n == null ? void 0 : n.config) != null && i.time_zone) ? n.config.time_zone : void 0;
};
function cf(n, l) {
  const i = JSON.stringify([n, l]);
  let u = ou.get(i);
  if (!u) {
    try {
      u = new Intl.DateTimeFormat(n, l);
    } catch {
      u = new Intl.DateTimeFormat(void 0, { ...l, timeZone: void 0 });
    }
    ou.set(i, u);
  }
  return u;
}
const An = (n, l) => cf(Ep(l), { hour: "numeric", minute: "2-digit", hourCycle: Cm(l == null ? void 0 : l.locale) ? "h12" : "h23", timeZone: df(l) }).format(n), iu = (n, l) => cf(Ep(l), { weekday: "short", timeZone: df(l) }).format(n), Tm = (n, l) => n.toLocaleDateString(Ep(l), { weekday: "narrow" }), ua = (n, l) => aa(l) ? It(Math.round(Number(l)), n.locale) + "°" : "–", as = (n) => {
  const l = new Date(n);
  return l.setHours(0, 0, 0, 0), l;
}, bl = (n, l) => n.getFullYear() === l.getFullYear() && n.getMonth() === l.getMonth() && n.getDate() === l.getDate(), Gn = Math.PI / 180, Lm = 2440588, Am = 2451545, Mc = Gn * 23.4397, Em = 149598e3, Dm = -0.833 * Gn, _m = 0.133 * Gn, ru = 5 * bn, pf = (n) => n.getTime() / no - 0.5 + Lm - Am, uf = (n, l) => Math.atan2(Math.sin(n) * Math.cos(Mc) - Math.tan(l) * Math.sin(Mc), Math.cos(n)), ff = (n, l) => Math.asin(Math.sin(l) * Math.cos(Mc) + Math.cos(l) * Math.sin(Mc) * Math.sin(n)), Rm = (n, l) => Gn * (280.16 + 360.9856235 * n) - l, Bm = (n, l, i) => Math.asin(Math.sin(l) * Math.sin(i) + Math.cos(l) * Math.cos(i) * Math.cos(n));
function hf(n) {
  const l = Gn * (357.5291 + 0.98560028 * n), i = Gn * (1.9148 * Math.sin(l) + 0.02 * Math.sin(2 * l) + 3e-4 * Math.sin(3 * l)), u = l + i + Gn * 102.9372 + Math.PI;
  return { ra: uf(u, 0), dec: ff(u, 0), dist: Em };
}
function mf(n) {
  const l = Gn * (218.316 + 13.176396 * n), i = Gn * (134.963 + 13.064993 * n), u = Gn * (93.272 + 13.22935 * n), v = l + Gn * 6.289 * Math.sin(i), x = Gn * 5.128 * Math.sin(u);
  return { ra: uf(v, x), dec: ff(v, x), dist: 385001 - 20905 * Math.cos(i) };
}
const gf = (n, l, i, u) => {
  const v = pf(l), x = n(v);
  return Bm(Rm(v, Gn * -u) - x.ra, Gn * i, x.dec);
}, Sc = (n, l, i) => gf(hf, n, l, i), Pm = (n, l, i) => gf(mf, n, l, i);
function vf(n, l, i, u) {
  const v = {};
  let x = i.getTime(), k = n(i) - l;
  for (let A = x + ru; A <= u.getTime(); A += ru) {
    const I = n(new Date(A)) - l;
    if (k < 0 != I < 0) {
      const M = new Date(x + (A - x) * k / (k - I));
      I > 0 ? v.rise ?? (v.rise = M) : v.set ?? (v.set = M);
    }
    x = A, k = I;
  }
  return v;
}
const bf = (n) => {
  const l = as(n);
  return [l, new Date(l.getTime() + no)];
}, Nm = (n, l, i) => vf((u) => Sc(u, l, i), Dm, ...bf(n)), Hm = (n, l, i) => vf((u) => Pm(u, l, i), _m, ...bf(n));
function sp(n) {
  const l = pf(n), i = hf(l), u = mf(l), v = Math.acos(Math.sin(i.dec) * Math.sin(u.dec) + Math.cos(i.dec) * Math.cos(u.dec) * Math.cos(i.ra - u.ra)), x = Math.atan2(i.dist * Math.sin(v), u.dist - i.dist * Math.cos(v)), k = Math.atan2(Math.cos(i.dec) * Math.sin(i.ra - u.ra), Math.sin(i.dec) * Math.cos(u.dec) - Math.cos(i.dec) * Math.sin(u.dec) * Math.cos(i.ra - u.ra));
  return { fraction: (1 + Math.cos(x)) / 2, phase: 0.5 + 0.5 * x * (k < 0 ? -1 : 1) / Math.PI };
}
const Im = (n) => {
  const l = n * 28;
  return l < 0.5 || l > 27.5 ? "new_moon" : l < 6.5 ? "waxing_crescent" : l < 7.5 ? "first_quarter" : l < 13.5 ? "waxing_gibbous" : l < 14.5 ? "full_moon" : l < 20.5 ? "waning_gibbous" : l < 21.5 ? "last_quarter" : "waning_crescent";
}, bd = (n) => {
  const l = n == null ? void 0 : n.config;
  return l && aa(l.latitude) && aa(l.longitude) ? { lat: Number(l.latitude), lon: Number(l.longitude) } : null;
};
function wl(n, l) {
  var M, W, F;
  const i = bd(n), u = i ? Nm(l, i.lat, i.lon) : {}, v = (M = n == null ? void 0 : n.states) == null ? void 0 : M["sun.sun"], x = as(l).getTime(), k = (V) => {
    const G = V ? new Date(V) : null;
    return G && Number.isFinite(G.getTime()) && as(G).getTime() === x ? G : null;
  }, A = k((W = v == null ? void 0 : v.attributes) == null ? void 0 : W.next_rising), I = k((F = v == null ? void 0 : v.attributes) == null ? void 0 : F.next_setting);
  return A && (u.rise = A), I && (u.set = I), u;
}
function Fm(n) {
  var u;
  const l = (u = n == null ? void 0 : n.states) == null ? void 0 : u["sun.sun"];
  if ((l == null ? void 0 : l.state) === "below_horizon" || (l == null ? void 0 : l.state) === "above_horizon") return l.state === "below_horizon";
  const i = bd(n);
  return i ? Sc(/* @__PURE__ */ new Date(), i.lat, i.lon) < 0 : !1;
}
const qs = (n) => !!n && n.state !== "unavailable" && n.state !== "unknown", yl = (n, l) => {
  var u;
  const i = (u = n.entities) == null ? void 0 : u[l];
  return !i || !i.hidden && !i.entity_category;
}, Oa = (n, l, i) => {
  var u, v;
  for (const x of l) {
    const k = (u = n.states) == null ? void 0 : u[x];
    if (!qs(k)) continue;
    const A = (v = k.attributes) == null ? void 0 : v[i];
    if (A != null && A !== "") return { stateObj: k, value: A };
  }
}, Om = (n, l) => l.map((i) => {
  var u;
  return (u = n.states) == null ? void 0 : u[i];
}).find(qs), qm = (n, l, i) => l.map((u) => {
  var v;
  return (v = n.states) == null ? void 0 : v[u];
}).find((u) => {
  var v;
  return qs(u) && (((v = u.attributes) == null ? void 0 : v.supported_features) == null || Number(u.attributes.supported_features) & km[i]);
});
function es(n, l, i) {
  var x, k, A, I;
  const u = ((k = (x = n.config) == null ? void 0 : x.unit_system) == null ? void 0 : k.length) || "", v = (l == null ? void 0 : l.attributes) || {};
  switch (i) {
    case "precipitation":
      return v.precipitation_unit || (u === "km" ? "mm" : "in");
    case "pressure":
      return v.pressure_unit || (u === "km" ? "hPa" : "inHg");
    case "wind_speed":
    case "wind_gust_speed":
      return v.wind_speed_unit || u + "/h";
    case "visibility":
      return v.visibility_unit || u;
    default:
      return v.temperature_unit || ((I = (A = n.config) == null ? void 0 : A.unit_system) == null ? void 0 : I.temperature) || "";
  }
}
function wc(n, l, i, u) {
  try {
    if (typeof n.formatEntityAttributeValueToParts == "function") {
      const [v, ...x] = n.formatEntityAttributeValueToParts(l, i, u).map((k) => k.value);
      return { number: v, unit: x.join("").trim() };
    }
  } catch {
  }
  return { number: It(u, n.locale), unit: es(n, l, i) };
}
function su(n, l, i, u) {
  try {
    if (typeof n.formatEntityAttributeValue == "function") return n.formatEntityAttributeValue(l, i, u);
  } catch {
  }
  const v = wc(n, l, i, u);
  return (v.number + " " + v.unit).trim();
}
function mr(n, l) {
  var u;
  try {
    if (typeof n.formatEntityState == "function") return n.formatEntityState(l);
  } catch {
  }
  const i = (u = l.attributes) == null ? void 0 : u.unit_of_measurement;
  return hm[l.state] || (i && aa(l.state) ? It(l.state, n.locale) + " " + i : l.state);
}
function Jr(n, l) {
  var i;
  try {
    if (typeof n.formatEntityName == "function") return n.formatEntityName(l, { type: "entity" });
  } catch {
  }
  return ((i = l.attributes) == null ? void 0 : i.friendly_name) || l.entity_id;
}
const lu = (n) => n < 3 ? "low" : n < 6 ? "moderate" : n < 8 ? "high" : n < 11 ? "very_high" : "extreme", lc = (n) => sf.find(([, l]) => n <= l)[0];
function Wm(n, l) {
  if (l === "Beaufort") return Math.round(n);
  const i = l ? wm[l] : void 0;
  if (i === void 0) return;
  const u = xm.findIndex((v) => n * i < v);
  return u === -1 ? 12 : u;
}
const du = (n, l) => {
  const i = l ? ym[l] : void 0;
  return i === void 0 ? void 0 : n * i;
}, cu = (n) => Object.keys(n.states || {}).find((l) => {
  var i, u;
  return l.startsWith("sensor.") && ((u = (i = n.entities) == null ? void 0 : i[l]) == null ? void 0 : u.platform) === "moon";
}), lp = (n) => Object.values(n.states || {}).filter((l) => {
  var i, u;
  return l.entity_id.startsWith("sensor.") && ((i = l.attributes) == null ? void 0 : i.device_class) === "precipitation" && ["total", "total_increasing"].includes(((u = l.attributes) == null ? void 0 : u.state_class) ?? "") && yl(n, l.entity_id);
}).map((l) => l.entity_id).sort()[0];
function Vm(n) {
  var i;
  const l = {};
  for (const [u, v] of Object.entries(((i = n == null ? void 0 : n.core) == null ? void 0 : i.integration) ?? {})) {
    if (v && "integration_type" in v) {
      l[u] = v.categories;
      continue;
    }
    for (const [x, k] of Object.entries((v == null ? void 0 : v.integrations) ?? {})) l[x] = k == null ? void 0 : k.categories;
  }
  return l;
}
const wf = (n, l, i) => {
  var v, x, k;
  const u = (x = (v = n.entities) == null ? void 0 : v[i]) == null ? void 0 : x.platform;
  return !!u && !!((k = l[u]) != null && k.includes(bm));
};
function jm(n, l) {
  const i = /* @__PURE__ */ new Map();
  return Object.values(n.states || {}).filter((u) => {
    var v;
    return u.entity_id.startsWith("sensor.") && kc.includes(((v = u.attributes) == null ? void 0 : v.device_class) ?? "") && yl(n, u.entity_id) && wf(n, l, u.entity_id);
  }).sort((u, v) => u.entity_id.localeCompare(v.entity_id)).forEach((u) => {
    i.has(u.attributes.device_class) || i.set(u.attributes.device_class, u.entity_id);
  }), kc.map((u) => i.get(u)).filter(Boolean);
}
const zm = (n, l) => Object.values(n.states || {}).filter((i) => {
  var u, v;
  return i.entity_id.startsWith("sensor.") && yl(n, i.entity_id) && wf(n, l, i.entity_id) && (((v = (u = n.entities) == null ? void 0 : u[i.entity_id]) == null ? void 0 : v.translation_key) ?? i.entity_id).toLowerCase().includes("pollen");
}).map((i) => i.entity_id).sort();
function pu(n, l, i) {
  const u = Math.max(l - n, 1e-6), v = i[i.length - 1], x = i.find((M) => u / M <= 4) ?? v * Math.ceil(u / (4 * v)), k = Math.floor(n / x) * x;
  let A = Math.ceil(l / x) * x;
  A === k && (A = k + x);
  const I = [];
  for (let M = k; M <= A + x / 1e3; M += x) I.push(M);
  return { min: k, max: A, ticks: I };
}
const Gm = (n, l, i) => {
  const u = (k) => [1, 3, 5].map((A) => parseInt(k.slice(A, A + 2), 16)), v = u(n), x = u(l);
  return "rgb(" + v.map((k, A) => Math.round(k + (x[A] - k) * i)).join(", ") + ")";
}, Um = (n, l, i, u) => {
  const v = i * Math.abs(1 - 2 * u), x = u < 0.5 ? 0 : 1;
  return "M " + n + " " + (l - i) + " A " + i + " " + i + " 0 0 0 " + n + " " + (l + i) + " A " + v + " " + i + " 0 0 " + x + " " + n + " " + (l - i) + " Z";
}, qn = ({ icon: n, name: l, sub: i, visual: u, double: v, backdrop: x, cls: k, zone: A, callouts: I }) => '<div class="wbCard wbSquare' + (v ? " wbDouble" : "") + (x ? " wbHasBackdrop" : "") + (A != null ? " wbZoned" : "") + (k ? " " + k : "") + '">' + (x ? '<div class="wbBackdrop" aria-hidden="true">' + x + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + lf(n) + '</div><div class="wbText"><span class="wbName">' + Oe(l) + "</span>" + (i ? '<span class="wbSub">' + Oe(i) + "</span>" : "") + "</div></div>" + (A != null ? '<div class="wbZone">' + A + "</div>" + (I != null && I.length ? '<div class="wbCallouts">' + I.slice(0, 3).map((M) => Array.isArray(M) ? '<span class="wbCallout"><span>' + Oe(M[0]) + "</span><span>" + Oe(M[1]) + "</span></span>" : '<span class="wbCallout wbAdvice"><span>' + Oe(M) + "</span></span>").join("") + "</div>" : "") : '<div class="wbVisual">' + u + "</div>") + "</div>", dc = (n) => '<div class="wbZoneM">' + n + "</div>", Ro = (n, l) => '<div class="wbValue"><span class="wbNum">' + Oe(n) + "</span>" + (l ? '<span class="wbUnitV">' + Oe(l) + "</span>" : "") + "</div>";
function Ym(n) {
  const l = n.max - n.min || 1, i = (A) => 100 - (Math.min(n.max, Math.max(n.min, A)) - n.min) / l * 100, u = (A) => A / vd * 100 + "%", v = (A) => A.map((I) => I.t + "," + i(I.v)).join(" "), x = n.kind === "line" ? n.points : [];
  let k = '<div class="wbDayChart"><div class="wbDcSun">' + n.sun.map((A) => '<span class="wbDcSunMark" style="left:' + u(A.t) + '">' + vr(A.rise ? Gt.sunsetUp : Gt.sunsetDown) + Oe(A.label) + "</span>").join("") + "</div>";
  return k += '<div class="wbDcY">' + n.ticks.map((A) => '<span style="top:' + i(A) + '%">' + Oe(n.format(A)) + "</span>").join("") + "</div>", k += '<div class="wbDcPlot"><svg viewBox="0 0 ' + vd + ' 100" preserveAspectRatio="none">' + n.night.map(([A, I]) => '<rect class="wbDcNight" x="' + A + '" y="0" width="' + (I - A) + '" height="100"></rect>').join("") + n.ticks.map((A) => '<line class="wbDcGrid" x1="0" x2="' + vd + '" y1="' + i(A) + '" y2="' + i(A) + '" vector-effect="non-scaling-stroke"></line>').join("") + n.sun.map((A) => '<line class="wbDcSunLine" x1="' + A.t + '" x2="' + A.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (n.past && n.past.length > 1 ? '<polyline class="wbDcPast" points="' + v(n.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (x.length > 1 ? '<polygon class="wbDcArea" points="' + x[0].t + ",100 " + v(x) + " " + x[x.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + v(x) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (n.now ? '<line class="wbDcNow" x1="' + n.now.t + '" x2="' + n.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (n.kind === "bars" ? n.points.filter((A) => A.v > 0).map((A) => '<i class="wbDcBar" style="left:' + u(A.t + 12) + ";width:" + u(36) + ";height:" + (100 - i(A.v)) + '%"></i>').join("") : "") + (n.now && n.kind === "line" ? '<i class="wbDcDot" style="left:' + u(n.now.t) + ";top:" + i(n.now.v) + '%"></i>' : "") + (n.peak ? '<span class="wbDcPeak" style="left:' + u(n.peak.t) + ";top:" + i(n.peak.v) + '%">' + Oe(n.peak.label) + "</span>" : "") + (n.note ? '<span class="wbDcNote">' + Oe(n.note) + "</span>" : "") + "</div>", k += '<div class="wbDcX">' + n.hours.map((A) => '<span class="' + (A.minor ? "wbMinor" : "") + '" style="left:' + u(A.t) + '">' + Oe(A.label) + "</span>").join("") + "</div></div>", k;
}
function uu(n, l, i = 120, u = 300) {
  const k = n.map((U) => U.value), A = Math.min(...k), I = Math.max(...k), M = I - A || 1, W = (U) => U / (n.length - 1) * u, F = (U) => 18 + (1 - (U - A) / M) * (i - 18 - 18), V = n.map((U, me) => [W(me), F(U.value)]), G = V.length > 2 ? af(V) : "M" + V.map((U) => U[0].toFixed(1) + " " + U[1].toFixed(1)).join("L"), pe = k.indexOf(I), ee = k.indexOf(A), J = (U) => U === 0 ? "start" : U === n.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 ' + u + " " + i + '" aria-hidden="true">' + nf(u, 18, i - 18) + ('<path class="wbArea" d="' + G + "L" + u + " " + (i - 18) + "L0 " + (i - 18) + 'Z"></path>') + '<path class="wbLine" d="' + G + '" vector-effect="non-scaling-stroke"></path><text x="' + W(pe) + '" y="' + (F(I) - 6) + '" text-anchor="' + J(pe) + '">' + Oe(l(I)) + '</text><text x="' + W(ee) + '" y="' + (F(A) + 14) + '" text-anchor="' + J(ee) + '">' + Oe(l(A)) + '</text><text x="0" y="' + i + '" text-anchor="start">' + Oe(n[0].label) + '</text><text x="' + u + '" y="' + i + '" text-anchor="end">' + Oe(n[n.length - 1].label) + "</text></svg>";
}
function Zm(n, l) {
  const x = n.map((F) => F.value).concat([]), k = Math.min(...x) - 2, A = Math.max(...x) + 1, I = A - k || 1, M = 300 / n.length, W = (F) => (1 - (F - k) / I) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + n.map((F, V) => '<rect class="wbBar' + (F.now ? " wbNowBar" : "") + '" x="' + (V * M + M * 0.2) + '" y="' + W(F.value) + '" width="' + M * 0.6 + '" height="' + (104 - W(F.value)) + '" rx="6"></rect><text x="' + (V * M + M / 2) + '" y="120" text-anchor="middle">' + Oe(F.label) + "</text>").join("") + "</svg>";
}
const Km = [
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
], $m = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], fu = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], Xm = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let Jm = 0;
function hu(n, { getHass: l, entityId: i, style: u = "bitmap", motion: v = !0, cards: x, onOpen: k, hoursWindow: A } = {}) {
  var cn, Go;
  const I = "wb" + ++Jm + "-", M = document.createElement("div");
  M.className = "wb", M.dataset.style = u;
  const W = document.createElement("div");
  W.className = "wbBento", M.appendChild(W), n.replaceChildren(M);
  const F = ["aq_tile", "pollen_tile", "radar_tile"], V = ["current", "hourly", "sun", "pollen_tile", "moon", "uv_index", "aq_tile", "humidity", "pressure", "wind", "visibility", "radar_tile", "compared_to_average", "precipitation", "air_quality"].filter((f) => !x || x.includes(f)), G = { current: "wide", hourly: "wide", compared_to_average: "double" }, pe = ["sun", "moon", "uv_index", "aq_tile", "pollen_tile", "humidity", "pressure", "wind"], ee = {};
  V.forEach((f) => {
    const b = document.createElement("div");
    b.className = "wbItem", b.dataset.card = f, b.dataset.size = G[f] || "tile", b.hidden = !0, pe.includes(f) && (b.dataset.xl = ""), W.appendChild(b), ee[f] = { el: b, html: null };
  });
  let J = !1, U = null, me = 0, ce = -1, ke = !1, oe = null;
  const ne = "homecore-next-view", te = (() => {
    try {
      return localStorage.getItem(ne);
    } catch {
      return null;
    }
  })(), E = { graph: void 0, range: { preset: "day" }, picking: !1, openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: te === "bars" ? "bars" : "strip", aq: void 0 }, Ce = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let le = /* @__PURE__ */ new Date(), qe = /* @__PURE__ */ new Date();
  const ie = {}, Ze = {}, T = {}, B = (f) => {
    var b;
    return ((b = T[f]) == null ? void 0 : b.forecast) ?? [];
  }, q = (f, b) => {
    var y;
    return T[b] ? (y = f.states) == null ? void 0 : y[T[b].entityId] : void 0;
  };
  function R(f) {
    const b = Ze[f];
    b && (b.unsub.then((y) => {
      typeof y == "function" && y();
    }).catch(() => {
    }), delete Ze[f]), T[f] && delete T[f];
  }
  function de(f, b, y) {
    var H;
    if (typeof ((H = f.connection) == null ? void 0 : H.subscribeMessage) != "function") return;
    const C = { entityId: y };
    try {
      C.unsub = Promise.resolve(f.connection.subscribeMessage((Y) => {
        J || Ze[b] !== C || (Y != null && Y.forecast ? T[b] = { entityId: y, forecast: Y.forecast } : delete T[b], Vo());
      }, { type: "weather/subscribe_forecast", forecast_type: b, entity_id: y }));
    } catch (Y) {
      C.unsub = Promise.reject(Y);
    }
    C.unsub.catch(() => {
      Ze[b] === C && delete Ze[b];
    }), Ze[b] = C;
  }
  function ue(f, b) {
    var y;
    for (const C of ["daily", "hourly"]) {
      const H = qm(f, b, C);
      ((y = Ze[C]) == null ? void 0 : y.entityId) !== (H == null ? void 0 : H.entity_id) && (R(C), H && de(f, C, H.entity_id));
    }
  }
  const ge = (f, b, y, C = !1) => f.callWS({
    type: "history/history_during_period",
    start_time: y.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [b],
    minimal_response: C,
    no_attributes: C,
    significant_changes_only: !1
  });
  async function Se(f, b) {
    var K, fe, Q;
    const y = Oa(f, b, "pressure");
    if (!y) return;
    const C = y.stateObj.entity_id, H = await ge(f, C, new Date(Date.now() - 3 * zt)), Y = (Q = (fe = (K = H == null ? void 0 : H[C]) == null ? void 0 : K.find((ve) => {
      var ye;
      return typeof ((ye = ve.a) == null ? void 0 : ye.pressure) == "number";
    })) == null ? void 0 : fe.a) == null ? void 0 : Q.pressure;
    Ce.pressureHistory = typeof Y == "number" ? { entityId: C, value: Y } : void 0;
  }
  async function Te(f, b) {
    var fe;
    const y = Oa(f, b, "temperature");
    if (!y) return;
    const C = y.stateObj.entity_id, H = as(/* @__PURE__ */ new Date()), Y = await ge(f, C, new Date(H.getTime() - dm * no)), K = /* @__PURE__ */ new Map();
    for (const Q of (Y == null ? void 0 : Y[C]) ?? []) {
      const ve = (fe = Q.a) == null ? void 0 : fe.temperature, ye = new Date((Q.lc ?? Q.lu) * 1e3);
      if (typeof ve != "number" || ye >= H) continue;
      const Ae = ye.toDateString();
      K.set(Ae, Math.max(K.get(Ae) ?? -1 / 0, ve));
    }
    Ce.temperatureHistory = { entityId: C, dailyHighs: [...K.values()], days: [...K.entries()].map(([Q, ve]) => ({ date: new Date(Q), high: ve })) };
  }
  async function $e(f) {
    const b = lp(f);
    if (!b) return;
    const y = await f.callWS({ type: "recorder/statistic_during_period", statistic_id: b, rolling_window: { duration: { hours: 24 } } });
    Ce.rain = { entityId: b, change: (y == null ? void 0 : y.change) ?? void 0 };
  }
  function tt() {
    const f = l == null ? void 0 : l();
    if (!f || J || typeof f.callWS != "function") return;
    const b = Yn(f);
    Ce.lastFetch = Date.now(), [Se(f, b), Te(f, b), $e(f)].forEach((y) => y.then(() => Vo(), () => {
    }));
  }
  async function Za() {
    const f = l == null ? void 0 : l();
    if (!f) return;
    const b = Oa(f, Yn(f), "temperature");
    if (!b) return;
    const y = b.stateObj.entity_id, C = as(/* @__PURE__ */ new Date());
    try {
      const H = await ge(f, y, C), Y = (K) => ((H == null ? void 0 : H[y]) ?? []).map((fe) => {
        var Q;
        return { time: fe.lu * 1e3, value: (Q = fe.a) == null ? void 0 : Q[K] };
      }).filter((fe) => typeof fe.value == "number");
      Ce.todayHistory = { day: C.toDateString(), fetched: Date.now(), temperature: Y("temperature"), humidity: Y("humidity") }, Vo();
    } catch {
    }
  }
  async function Ie(f) {
    const b = l == null ? void 0 : l();
    if (b)
      try {
        const y = await ge(b, f, new Date(Date.now() - 24 * zt), !0), C = ((y == null ? void 0 : y[f]) ?? []).filter((Y) => aa(Y.s)), H = Math.max(1, Math.ceil(C.length / 48));
        Ce.aqHistory = { entityId: f, points: C.filter((Y, K) => K % H === 0).map((Y) => ({ label: An(new Date(Y.lu * 1e3), b), value: Number(Y.s) })) }, Vo();
      } catch {
      }
  }
  function ho(f) {
    Ce.categories === void 0 && (Ce.categories = null, Promise.resolve().then(() => f.callWS({ type: "integration/descriptions" })).then((b) => {
      Ce.categories = Vm(b);
    }, () => {
      Ce.categories = {};
    }).then(() => Vo()));
  }
  function Yn(f) {
    var y;
    const b = Object.keys(f.states || {}).filter((C) => C.startsWith("weather.") && yl(f, C)).sort();
    return i && ((y = f.states) != null && y[i]) ? [i, ...b.filter((C) => C !== i)] : b;
  }
  const mo = (f) => Ce.categories ? { air: jm(f, Ce.categories), pollen: zm(f, Ce.categories) } : { air: [], pollen: [] };
  function ra(f, b, y, C) {
    if (u === "line") return '<span class="wbWx wbS' + b + ' wbLineIcon" aria-hidden="true">' + ip(f, y || f === "clear-night") + "</span>";
    if (u === "smooth") {
      const H = _h(f, b === 90, y, I + "g-" + C);
      return '<span class="wbWx wbS' + b + " wb" + H.k[0].toUpperCase() + H.k.slice(1) + (H.night ? " wbNight" : "") + '" aria-hidden="true">' + H.svg + "</span>";
    }
    return '<span class="wbWx wbS' + b + '" aria-hidden="true"><canvas data-wb-wx="' + Oe(Cc(f, y)) + '" data-size="' + b + '"></canvas></span>';
  }
  const Xe = () => B("daily").filter((f) => f.templow != null).slice(0, tm);
  function pt(f, b) {
    const y = new Date(b.datetime), C = /* @__PURE__ */ new Date();
    return bl(y, C) ? Re.today : bl(y, new Date(C.getTime() + no)) ? Re.tomorrow : iu(y, f);
  }
  const on = (f, b, y) => y === 0 ? pt(f, b) : iu(new Date(b.datetime), f);
  function oo(f, b) {
    var ye, Ae, Qe, je;
    const y = Om(f, b);
    if (!y) return "";
    const C = Xe(), H = E.openDay !== void 0 ? C[E.openDay] : void 0, Y = Oa(f, b, "temperature"), K = C[0], fe = K && bl(new Date(K.datetime), /* @__PURE__ */ new Date()), Q = ((Ae = (ye = f.config) == null ? void 0 : ye.unit_system) == null ? void 0 : Ae.temperature) || ((Qe = y.attributes) == null ? void 0 : Qe.temperature_unit) || "";
    let ve = '<div class="wbCard wbWeather' + (H ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (H ? " inert" : "") + '><div class="wbNow">' + (k ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + Oe(Re.openPage) + '">' : '<div class="wbCurrent">') + ra(y.state, 90, Fm(f), "now") + '<div class="wbTempBlock">' + (Y && aa(Y.value) ? '<div class="wbTemp"><span class="wbDeg">' + Oe(It(Math.round(Number(Y.value)), f.locale)) + '</span><span class="wbUnit">' + Oe(Q) + "</span></div>" : "") + '<div class="wbPlace">' + Oe(((je = f.config) == null ? void 0 : je.location_name) ?? "") + "</div></div>" + (k ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + Oe(mr(f, y)) + "</div>" + (fe && K.templow != null ? '<div class="wbRange">' + Oe(Ln(Re.range, { high: ua(f, K.temperature), low: ua(f, K.templow) })) + "</div>" : "") + "</div></div>";
    if (ve += mt(f) + wn(f), C.length) {
      const _e = fe && Y && aa(Y.value) ? ua(f, Y.value) : "", et = (ze, Ee, gt) => ze === 0 && _e ? '<span class="wbAsDay">' + Oe(Ee) + '</span><span class="wbAsNow">' + Oe(gt) + "</span>" : Oe(Ee);
      ve += '<div class="wbColumns" role="list">' + C.map((ze, Ee) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + Ee + '" data-wb-focus="col-' + Ee + '"><span class="wbDay">' + et(Ee, on(f, ze, Ee), Re.now) + "</span>" + ra(ze.condition ?? "cloudy", 60, !1, "col" + Ee) + '<span class="wbTemps"><span class="wbHi">' + et(Ee, ua(f, ze.temperature), _e) + '</span><span class="wbLo">' + Oe(ua(f, ze.templow)) + "</span></span></button>").join("") + "</div>", ve += '<div class="wbHalves" role="list">' + C.map((ze, Ee) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + Ee + '" data-wb-focus="half-' + Ee + '">' + ra(ze.condition ?? "cloudy", 40, !1, "half" + Ee) + '<span class="wbText"><span class="wbName">' + Oe(pt(f, ze)) + '</span><span class="wbSub">' + Oe(Ln(Re.highLow, { high: ua(f, ze.temperature), low: ua(f, ze.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return ve + "</div>" + (H ? vt(f, b, H) : "") + "</div>";
  }
  const Ye = {
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
  }, ht = {
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
  function Tt(f) {
    const b = Date.now(), y = B("hourly").filter((Ae) => new Date(Ae.datetime).getTime() > b - zt).slice(0, 13);
    if (y.length < 2) return "";
    const C = (Ae) => An(new Date(Ae.datetime), f), H = (Ae) => Ye[Ae.condition] || "", Y = (Ae) => ht[Ae.condition] || Ae.condition;
    let K = H(y[0]);
    if (!K) return "";
    let fe = y[0], Q = 0;
    for (const Ae of y.slice(1))
      Q === 2 || Y(Ae) === Y(fe) || !H(Ae) || (K += (Q ? " and " : ", ") + H(Ae) + " from " + C(Ae), fe = Ae, Q++);
    const ve = Number(y[0].temperature), ye = y.filter((Ae) => aa(Ae.temperature));
    if (aa(ve) && ye.length) {
      const Ae = ye.reduce((je, _e) => Number(_e.temperature) < Number(je.temperature) ? _e : je), Qe = ye.reduce((je, _e) => Number(_e.temperature) > Number(je.temperature) ? _e : je);
      ve - Number(Ae.temperature) >= 3 ? K += ", down to " + ua(f, Ae.temperature) + " by " + C(Ae) : Number(Qe.temperature) - ve >= 3 && (K += ", up to " + ua(f, Qe.temperature) + " by " + C(Qe));
    }
    return K[0].toUpperCase() + K.slice(1) + ".";
  }
  const mt = (f) => {
    const b = Tt(f);
    return b ? '<div class="wbSummary"><p class="wbSummaryText">' + Oe(b) + "</p></div>" : "";
  };
  function wn(f) {
    const [b, y] = rc[A == null ? void 0 : A()] || rc.day, C = Date.now(), H = B("hourly").filter((Y) => {
      const K = new Date(Y.datetime), fe = K.getHours();
      return K.getTime() > C - zt / 2 && fe >= b && fe < y && aa(Y.temperature);
    }).slice(0, 4);
    return H.length ? '<div class="wbNextHours" role="list">' + H.map((Y, K) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + Oe(An(new Date(Y.datetime), f)) + "</span>" + ra(Y.condition ?? "cloudy", 40, Y.is_daytime === !1, "hr" + K) + '<span class="wbHourTemp">' + Oe(ua(f, Y.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function ns(f) {
    const b = f.getTime(), y = Date.now() - zt;
    return B("hourly").filter((C) => {
      const H = new Date(C.datetime).getTime();
      return H >= b && H < b + no && H > y;
    });
  }
  function Dn(f) {
    if (!f.length) return ["temperature"];
    const b = ["temperature"];
    return f.some((y) => y.precipitation != null || y.precipitation_probability != null) && b.push("precipitation"), f.some((y) => y.humidity != null) && b.push("humidity"), b;
  }
  function vt(f, b, y) {
    const C = as(new Date(y.datetime)), H = ns(C), Y = Dn(H), K = Y.includes(E.dayMode) ? E.dayMode : "temperature", fe = (Q) => Q === "humidity" ? Re.humidity : Re.modes[Q];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + ra(y.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + Oe(pt(f, y)) + '</span><span class="wbSub">' + Oe(Ln(Re.highLow, { high: ua(f, y.temperature), low: ua(f, y.templow) })) + '</span></div><button class="wbBack" title="' + Oe(Re.back) + '" data-wb="close-day" data-wb-focus="back-day">' + vr(Gt.back) + "</button></div>" + (Y.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + Y.map((Q) => '<button aria-pressed="' + (Q === K) + '" data-wb="day-mode" data-mode="' + Q + '" data-wb-focus="day-mode-' + Q + '">' + Oe(fe(Q)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Ym($t(f, b, C, H, K)) + "</div></div>";
  }
  function $t(f, b, y, C, H) {
    var so;
    const Y = y.getTime(), K = Date.now(), fe = bl(y, /* @__PURE__ */ new Date()), Q = (Dt) => (Dt - Y) / bn, ve = (Dt) => An(new Date(Dt), f), ye = (Dt) => new Date(Dt.datetime).getTime(), Ae = [0, 3, 6, 9, 12, 15, 18, 21].map((Dt) => ({ t: Dt * 60, label: ve(Y + Dt * zt), minor: Dt % 6 !== 0 })), { rise: Qe, set: je } = wl(f, y), _e = [], et = [];
    Qe && (_e.push({ t: Q(Qe.getTime()), label: ve(Qe.getTime()), rise: !0 }), et.push([0, Q(Qe.getTime())])), je && (_e.push({ t: Q(je.getTime()), label: ve(je.getTime()), rise: !1 }), et.push([Q(je.getTime()), vd]));
    const ze = bd(f);
    !Qe && !je && ze && Sc(new Date(Y + no / 2), ze.lat, ze.lon) < 0 && et.push([0, vd]);
    const Ee = fe ? Q(K) : void 0, gt = { hours: Ae, sun: _e, night: et };
    if (!C.length && !fe) return { ...gt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Re.noHourly };
    if (H === "precipitation") {
      const Dt = C.some((qa) => qa.precipitation_probability != null), Uo = C.map((qa) => ({ t: Q(ye(qa)), v: Number((Dt ? qa.precipitation_probability : qa.precipitation) ?? 0) })), Pn = es(f, q(f, "hourly"), "precipitation"), Mo = Math.max(0, ...Uo.map((qa) => qa.v)), So = Dt ? 100 : pu(0, Math.max(Mo, 1), [0.5, 1, 2, 5, 10]).max, mi = (qa) => Dt ? It(qa, f.locale) + "%" : It(qa, f.locale, { maximumFractionDigits: 1 }) + " " + Pn, Er = Uo.find((qa) => qa.v === Mo);
      return {
        ...gt,
        kind: "bars",
        points: Uo,
        min: 0,
        max: So,
        ticks: [0, So / 2, So],
        format: mi,
        now: Ee !== void 0 ? { t: Ee, v: 0 } : void 0,
        peak: Er && Mo > 0 ? { t: Er.t + 30, v: Er.v, label: mi(Er.v) } : void 0,
        note: Mo > 0 ? void 0 : Re.noRain
      };
    }
    const ot = H === "humidity" ? "humidity" : "temperature", Rt = C.filter((Dt) => Dt[ot] != null && (!fe || ye(Dt) >= K)).map((Dt) => ({ t: Q(ye(Dt)), v: Number(Dt[ot]) }));
    let Ne, na = [];
    if (Ee !== void 0) {
      const Dt = Oa(f, b, ot);
      Dt && aa(Dt.value) && (Ne = { t: Ee, v: Number(Dt.value) }, Rt.unshift(Ne)), na = (((so = Ce.todayHistory) == null ? void 0 : so.day) === y.toDateString() ? Ce.todayHistory[ot] : []).filter((Pn) => Pn.time <= K).map((Pn) => ({ t: Math.max(0, Q(Pn.time)), v: Pn.value })), Ne && na.length && na.push(Ne);
    }
    const sa = [...na, ...Rt];
    if (!sa.length) return { ...gt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Re.noHourly };
    const Ja = sa.map((Dt) => Dt.v), za = pu(Math.min(...Ja), Math.max(...Ja), ot === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    ot === "humidity" && (za.min = Math.max(0, za.min), za.max = Math.min(100, za.max), za.ticks = za.ticks.filter((Dt) => Dt >= 0 && Dt <= 100));
    const Ar = ot === "humidity" ? (Dt) => It(Dt, f.locale) + "%" : (Dt) => ua(f, Dt), kn = ot === "temperature" ? sa.reduce((Dt, Uo) => Uo.v > Dt.v ? Uo : Dt) : void 0;
    return { ...gt, kind: "line", points: Rt, past: na, ...za, format: Ar, now: Ne, peak: kn ? { ...kn, label: Ar(kn.v) } : void 0 };
  }
  function os(f) {
    const b = ["temperature"];
    return f.some((y) => y.precipitation_probability != null || y.precipitation != null) && b.push("precipitation"), f.some((y) => y.wind_speed != null) && b.push("wind"), b;
  }
  function Po(f, b, y = $p) {
    var Y, K;
    const C = B("daily"), H = [];
    for (let fe = 0; fe < y; fe++) for (const Q of [!1, !0]) {
      const ve = f.getTime() + (fe * 24 + (Q ? 12 : 0)) * zt, ye = ve + 12 * zt, Ae = {};
      b.forEach((je) => {
        const _e = new Date(je.datetime).getTime();
        je.condition && _e >= ve && _e < ye && (Ae[je.condition] = (Ae[je.condition] ?? 0) + (sm.has(je.condition) ? 2 : 1));
      });
      let Qe = (Y = Object.entries(Ae).sort((je, _e) => _e[1] - je[1])[0]) == null ? void 0 : Y[0];
      if (!Qe) {
        const je = new Date(ve).toDateString();
        Qe = ((K = C.find((_e) => new Date(_e.datetime).toDateString() === je)) == null ? void 0 : K.condition) ?? "cloudy";
      }
      H.push({ cond: Q && Qe === "sunny" ? "clear-night" : Qe, night: Q });
    }
    return H;
  }
  function is(f, b, y) {
    const C = q(f, "hourly"), H = b.precipitation_probability != null ? It(b.precipitation_probability, f.locale) + "%" : "", Y = b.precipitation ? It(b.precipitation, f.locale) + " " + es(f, C, "precipitation") : "";
    switch (y) {
      case "precipitation":
        return H ? [H, Y] : [Y || "–", ""];
      case "wind":
        return b.wind_speed != null ? [It(Math.round(b.wind_speed), f.locale), es(f, C, "wind_speed")] : ["–", ""];
      default:
        return [ua(f, b.temperature), (b.precipitation_probability ?? 0) >= 20 ? H : ""];
    }
  }
  function Qt(f, b, y) {
    const [C, H] = rc[A == null ? void 0 : A()] || rc.day, Y = [];
    for (let K = 0; K < 4 && Y.length < 3; K++) {
      const fe = /* @__PURE__ */ new Date();
      fe.setHours(0, 0, 0, 0), fe.setDate(fe.getDate() + K);
      const Q = new Date(fe);
      Q.setHours(H, 0, 0, 0), fe.setHours(C, 0, 0, 0), !(Q.getTime() <= y || !b.some((ve) => {
        const ye = new Date(ve.datetime).getTime();
        return ye >= fe.getTime() && ye <= Q.getTime();
      })) && Y.push({ a: fe.getTime(), b: Q.getTime(), label: pt(f, { datetime: fe.toISOString() }) });
    }
    return Y;
  }
  function go(f, b, y, C, H, Y) {
    const K = (y.b - b.a) / zt, fe = (Ee) => ((Ee - b.a) / zt).toFixed(3), Q = 80, ve = 32, ye = [];
    for (const Ee = new Date(b.a - no); Ee.getTime() < y.b + no; Ee.setDate(Ee.getDate() + 1)) {
      const { rise: gt, set: ot } = wl(f, new Date(Ee));
      gt && ot && ye.push({ rise: gt.getTime(), set: ot.getTime() });
    }
    const Ae = (Ee, gt) => Q - (Q - ve) * Math.sin(Math.PI * (gt - Ee.rise) / (Ee.set - Ee.rise)), Qe = (Ee) => !ye.some((gt) => Ee >= gt.rise && Ee <= gt.set);
    let je = "", _e = "", et = "";
    ye.forEach((Ee, gt) => {
      const ot = [];
      for (let Ne = Ee.rise; Ne <= Ee.set; Ne += 15 * bn) ot.push(fe(Ne) + "," + Ae(Ee, Ne).toFixed(2));
      ot.push(fe(Ee.set) + "," + Q), je += '<polyline class="wbLineArc" points="' + ot.join(" ") + '"/>';
      const Rt = ye[gt + 1];
      Rt && (je += '<rect class="wbLineNight" x="' + fe(Ee.set) + '" y="0" width="' + ((Rt.rise - Ee.set) / zt).toFixed(3) + '" height="100"/>'), [[Ee.rise, "↑"], [Ee.set, "↓"]].forEach(([Ne, na]) => {
        Ne < b.a || Ne > y.b || (_e += '<line class="wbLineEdge" x1="' + fe(Ne) + '" x2="' + fe(Ne) + '" y1="0" y2="100"/>', et += '<span class="wbLineTime" style="left:' + Y(Ne) + '">' + na + " " + Oe(An(new Date(Ne), f)) + "</span>");
      });
    });
    const ze = ye.find((Ee) => H >= Ee.rise && H <= Ee.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + K + ' 100" preserveAspectRatio="none" aria-hidden="true">' + je + _e + '<line class="wbLineHorizon" x1="0" x2="' + K + '" y1="' + Q + '" y2="' + Q + '"/></svg>' + et + (ze ? '<span class="wbLineNow" style="left:' + Y(H) + ";top:" + Ae(ze, H) + '%">' + ip("sunny", !1) + "</span>" : "") + C.filter((Ee) => Ee.entry && !Ee.now).map((Ee) => '<span class="wbLineGlyph' + Ee.edge + '" style="left:' + Y(Ee.t) + '">' + ip(Ee.entry.condition ?? "cloudy", Qe(Ee.t)) + "</span>").join("");
  }
  function nt(f, b) {
    delete ie.hourly;
    const y = E.hourlyView === "bars" ? "bars" : "strip", C = '<div class="wbHeader"><h2 class="wbTitle">' + Oe(y === "bars" ? Re.nextDays : Re.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + Oe(Re.showAs) + '">' + ["strip", "bars"].map((Ne) => '<button aria-pressed="' + (Ne === y) + '" data-wb="hourly-view" data-view="' + Ne + '" data-wb-focus="hourly-view-' + Ne + '">' + Oe(Re.views[Ne]) + "</button>").join("") + "</div></div>";
    if (y === "bars") return Zn(f, b, C);
    const H = B("hourly"), Y = Math.floor(Date.now() / bn) * bn, K = H.filter((Ne) => new Date(Ne.datetime).getTime() > Y - zt);
    if (!K.length) return "";
    const fe = os(K), Q = fe.includes(E.hourlyMode) ? E.hourlyMode : "temperature", ve = Qt(f, H, Y);
    if (!ve.length) return "";
    const ye = ve[0], Ae = ve[ve.length - 1], Qe = (ye.b - ye.a) / zt, je = (Ne) => "calc(var(--wb-u) * " + ((Ne - ye.a) / zt).toFixed(3) + ")", _e = new Date(ye.a);
    _e.setHours(6, 0, 0, 0), _e.getTime() > ye.a && _e.setDate(_e.getDate() - 1);
    const et = Math.ceil((Ae.b - _e.getTime()) / no);
    u !== "line" && (ie.hourly = { segs: Po(_e, H, et), seed: _e.getDate(), columns: et });
    const ze = (Ne) => Ne === ye.a ? " wbFirst" : Ne === Ae.b ? " wbLast" : "", Ee = [];
    for (let Ne = ye.a; Ne < Ae.b; ) {
      const na = new Date(Ne);
      na.setHours(24, 0, 0, 0);
      const sa = Math.min(na.getTime(), Ae.b);
      Ee.push({ a: Ne, b: sa, label: pt(f, { datetime: new Date(Ne).toISOString() }), page: ve.find((Ja) => Ja.a >= Ne && Ja.a < sa) || ve.find((Ja) => Ja.a < sa && Ja.b > Ne) }), Ne = sa;
    }
    const gt = Y > ye.a && Y < Ae.b ? Math.floor((Y - ye.a) / (2 * zt)) * 2 : 0, ot = [];
    for (let Ne = ye.a; Ne <= Ae.b; Ne += zt) {
      const na = new Date(Ne), sa = ze(Ne);
      !sa && na.getHours() % nm || !sa && (Math.abs(ye.a - Ne) < 2 * zt || Math.abs(Ae.b - Ne) < 2 * zt) || Y >= ye.a && Math.abs(Ne - Y) < 1.5 * zt && !sa || ot.push({ t: Ne, edge: sa, label: An(na, f), entry: Ne >= Y - zt ? H.find((Ja) => new Date(Ja.datetime).getTime() === Ne) : void 0 });
    }
    Y > ye.a && Y < ye.b && ot.push({ t: Y, edge: Y - ye.a < zt ? " wbFirst" : ye.b - Y < zt ? " wbLast" : "", label: Re.now, entry: K[0], now: !0 });
    const Rt = (Ne, na) => '<span class="wbMark' + Ne.edge + (Ne.now ? " wbNowMark" : "") + '" style="left:' + je(Ne.t) + '">' + na + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + C + (fe.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + fe.map((Ne) => '<button aria-pressed="' + (Ne === Q) + '" data-wb="hourly-mode" data-mode="' + Ne + '" data-wb-focus="hourly-mode-' + Ne + '">' + Oe(Re.modes[Ne]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + Oe(Re.nextHours) + '" data-span="' + Qe + '" data-start="' + gt + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Qe + ");width:calc(var(--wb-u) * " + (Ae.b - ye.a) / zt + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((Ae.b - ye.a) / (2 * zt)) + 1)].map((Ne, na) => '<i class="wbSnap" style="left:' + je(ye.a + na * 2 * zt) + '"></i>').join("") + '<div class="wbDays">' + Ee.map((Ne, na) => {
      var sa;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((Ne.b - Ne.a) / zt).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (na === 0 ? gt : ((((sa = Ne.page) == null ? void 0 : sa.a) ?? Ne.a) - ye.a) / zt) + '" data-wb-focus="hours-day-' + na + '">' + Oe(Ne.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + ot.map((Ne) => Rt(Ne, Oe(Ne.label))).join("") + "</div>" + (u === "line" ? '<div class="wbSky wbLineSky">' + go(f, ye, Ae, ot, Y, je) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + je(_e.getTime()) + ";width:calc(var(--wb-u) * " + et * 24 + ')"><canvas data-wb-strip="hourly"' + (u === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (Y > ye.a ? '<i class="wbPast" style="width:' + je(Math.min(Y, Ae.b)) + '"></i><i class="wbNowLine" style="left:' + je(Y) + '"></i>' : "") + Ee.slice(1).map((Ne) => '<i class="wbMidnight" style="left:' + je(Ne.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + ot.map((Ne) => {
      if (!Ne.entry) return "";
      const [na, sa] = is(f, Ne.entry, Q);
      return Rt(Ne, '<span class="wbPrimaryV">' + Oe(na) + '</span><span class="wbSecondary">' + Oe(sa) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function Ml(f) {
    const b = om, y = b.findIndex(([Q]) => Q >= f);
    if (y <= 0) return "rgb(" + b[y < 0 ? b.length - 1 : 0][1].join(",") + ")";
    const [C, H] = b[y - 1], [Y, K] = b[y], fe = (f - C) / (Y - C);
    return "rgb(" + H.map((Q, ve) => Math.round(Q + (K[ve] - Q) * fe)).join(",") + ")";
  }
  function Zn(f, b, y) {
    var je;
    const C = B("daily").filter((_e) => aa(_e.templow) && aa(_e.temperature)).slice(0, 7);
    if (!C.length) return "";
    const H = Math.min(...C.map((_e) => Number(_e.templow))), Y = Math.max(...C.map((_e) => Number(_e.temperature))), K = Math.max(1, Y - H), fe = (_e) => Math.max(0, Math.min(100, (_e - H) / K * 100)).toFixed(2), Q = /F/.test(es(f, q(f, "daily"), "temperature")), ve = (_e) => Q ? (_e - 32) / 1.8 : _e, ye = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((_e) => Ml(ve(H + _e * K)) + " " + _e * 100 + "%").join(",") + ")", Ae = (je = Oa(f, b, "temperature")) == null ? void 0 : je.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (os(B("hourly").filter((_e) => new Date(_e.datetime).getTime() > Date.now() - zt)).length > 1 ? " wbTabbed" : "") + '">' + y + '<div class="wbDayBars" role="list">' + C.map((_e, et) => {
      const ze = pt(f, _e), Ee = bl(new Date(_e.datetime), /* @__PURE__ */ new Date()), gt = Number(_e.templow), ot = Number(_e.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + Oe(Ln(Re.rangeRow, { day: ze, low: ua(f, gt), high: ua(f, ot) })) + '"><span class="wbRangeDay">' + Oe(ze) + "</span>" + ra(_e.condition, 40, !1, "r" + et) + '<span class="wbRangeLo">' + Oe(ua(f, gt)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + ye + ";clip-path:inset(0 " + (100 - fe(ot)) + "% 0 " + fe(gt) + '% round 4px)"></i>' + (Ee && aa(Ae) ? '<i class="wbRangeNow" style="left:' + fe(Number(Ae)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + Oe(ua(f, ot)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  const wa = [[-120, "#0d1530"], [-60, "#1c2550"], [-15, "#c9707a"], [30, "#f2a46a"], [60, "#b49bc8"], [90, "#5aa5e6"]], Ke = [[-90, "#5aa5e6"], [-60, "#a99bd0"], [-30, "#f0a54a"], [15, "#c45a5a"], [60, "#3a2a5c"], [120, "#0d1530"]], dt = (f, b) => {
    if (b <= f[0][0]) return f[0][1];
    for (let y = 1; y < f.length; y++) if (b <= f[y][0]) {
      const [C, H] = f[y - 1], [Y, K] = f[y];
      return Gm(H, K, (b - C) / (Y - C));
    }
    return f[f.length - 1][1];
  }, xa = (f, b, y) => {
    if (!b || !y) return wa[5][1];
    const C = (f.getTime() - y.getTime()) / bn;
    return C >= -90 ? dt(Ke, C) : dt(wa, (f.getTime() - b.getTime()) / bn);
  }, wt = (f) => (f >= 60 ? Math.floor(f / 60) + "h " : "") + f % 60 + "m";
  function Be(f) {
    const b = le, { rise: y, set: C } = wl(f, b), H = y && C ? Math.round((C.getTime() - y.getTime()) / bn) : 0, Y = Math.floor(H / 60), K = H % 60, fe = (Rt) => Rt ? An(Rt, f) : "–", Q = new Date(b);
    Q.setDate(Q.getDate() + 1);
    const ve = wl(f, Q), ye = ve.rise && ve.set ? Math.round((ve.set.getTime() - ve.rise.getTime()) / bn) : 0, Ae = new Date(b);
    Ae.setDate(Ae.getDate() - 1);
    const Qe = !!(y && C && b >= y && b <= C), je = !!(y && b < y), _e = Qe ? y : je ? wl(f, Ae).set : C, et = Qe ? C : je ? y : ve.rise, ze = _e && et ? Math.min(1, Math.max(0, (b.getTime() - _e.getTime()) / (et.getTime() - _e.getTime()))) : 0, Ee = et ? Math.max(0, Math.round((et.getTime() - b.getTime()) / bn)) : 0, gt = et ? wt(Ee) : "–", ot = Qe ? Re.untilSunset : Re.untilSunrise;
    return qn({
      icon: Gt.sunny,
      name: Re.sun,
      sub: H ? Ln(Re.daylightShort, { hours: Y, minutes: K }) : void 0,
      cls: "wbSunTile",
      callouts: [[Re.callout.riseTomorrow, fe(ve.rise)], [Re.callout.setTomorrow, fe(ve.set)], ...ye ? [[Re.callout.dayTomorrow, Math.floor(ye / 60) + "h " + ye % 60 + "m"]] : []],
      zone: '<div class="wbSunZone" style="background:' + xa(b, y, C) + '"><svg class="wbSunTrack" data-up="' + (Qe ? 1 : 0) + '" data-f="' + ze.toFixed(4) + '" aria-hidden="true"></svg><div class="wbSunCount"><span class="wbSunLeft">' + Oe(gt) + '</span><span class="wbSunWord">' + Oe(ot) + '</span></div><span class="wbSunAt wbSunRise">' + Oe(fe(y)) + '</span><span class="wbSunAt wbSunSet">' + Oe(fe(C)) + "</span></div>" + // at M, the countdown alone (Matt, 10 Nov): M's zone has room for one line
      dc(Ro(gt, ""))
    });
  }
  const At = 22;
  function Et(f) {
    const b = Math.round(f.clientWidth), y = Math.round(f.clientHeight), C = At, H = C / 2, Y = b + "x" + y + ":" + f.dataset.f + ":" + f.dataset.up;
    if (b < C * 3 || y < C * 3 || f.dataset.drawn === Y) return;
    f.dataset.drawn = Y;
    const K = "M" + H + " " + (y - C) + "V" + C + "A" + H + " " + H + " 0 0 1 " + C + " " + H + "H" + (b - C) + "A" + H + " " + H + " 0 0 1 " + (b - H) + " " + C + "V" + (y - C), fe = "M" + (b - H) + " " + (y - C) + "A" + H + " " + H + " 0 0 1 " + (b - C) + " " + (y - H) + "H" + C + "A" + H + " " + H + " 0 0 1 " + H + " " + (y - C), Q = 16, ve = 6, ye = "M" + Q + " 0H" + (b - Q) + "A" + Q + " " + Q + " 0 0 1 " + b + " " + Q + "V" + (y - Q) + "A" + Q + " " + Q + " 0 0 1 " + (b - Q) + " " + y + "H" + Q + "A" + Q + " " + Q + " 0 0 1 0 " + (y - Q) + "V" + Q + "A" + Q + " " + Q + " 0 0 1 " + Q + " 0ZM" + (C + ve) + " " + C + "A" + ve + " " + ve + " 0 0 0 " + C + " " + (C + ve) + "V" + (y - C - ve) + "A" + ve + " " + ve + " 0 0 0 " + (C + ve) + " " + (y - C) + "H" + (b - C - ve) + "A" + ve + " " + ve + " 0 0 0 " + (b - C) + " " + (y - C - ve) + "V" + (C + ve) + "A" + ve + " " + ve + " 0 0 0 " + (b - C - ve) + " " + C + "Z", Ae = f.dataset.up === "1", Qe = Number(f.dataset.f) || 0, je = "http://www.w3.org/2000/svg";
    f.setAttribute("viewBox", "0 0 " + b + " " + y);
    const _e = document.createElementNS(je, "path");
    _e.setAttribute("d", Ae ? K : fe), f.replaceChildren(_e);
    const et = _e.getTotalLength(), ze = _e.getPointAtLength(et * Qe), Ee = Ae ? et : 0;
    f.innerHTML = '<defs><mask id="' + I + 'sun-day"><path d="' + K + '" fill="none" stroke="#fff" stroke-width="' + C * 2 + '"></path></mask><mask id="' + I + 'sun-done"><path d="' + K + '" fill="none" stroke="#fff" stroke-width="' + C * 2 + '" stroke-dasharray="' + (Ae ? (Ee * Qe).toFixed(1) + " " + (Ee + 1).toFixed(1) : "0 99999") + '"></path></mask></defs><path class="wbSunBand" fill-rule="evenodd" d="' + ye + '"></path><path class="wbSunBand wbSunDay" fill-rule="evenodd" d="' + ye + '" mask="url(#' + I + 'sun-day)"></path><path class="wbSunBand wbSunDone" fill-rule="evenodd" d="' + ye + '" mask="url(#' + I + 'sun-done)"></path><circle class="wbSunDot' + (Ae ? "" : " wbSunNight") + '" cx="' + ze.x.toFixed(1) + '" cy="' + ze.y.toFixed(1) + '" r="' + H + '"></circle>';
  }
  const Ot = typeof ResizeObserver == "function" ? new ResizeObserver((f) => f.forEach((b) => Et(b.target))) : null;
  function _n() {
    Ot == null || Ot.disconnect(), M.querySelectorAll("svg.wbSunTrack").forEach((f) => {
      Et(f), Ot == null || Ot.observe(f);
    });
  }
  function rs(f, b, y) {
    const C = (K) => I + "moon-" + K, H = f > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + C("terminator") + ')" d="' + Um(61, 61, 57.9, f) + '"' + (b ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", Y = (K, fe, Q, ve, ye, Ae) => '<filter id="' + C(K) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + fe + '" numOctaves="' + Q + '" seed="' + ve + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Qe) => "<feFunc" + Qe + ' type="linear" slope="' + ye + '" intercept="' + Ae + '"></feFunc' + Qe + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + C("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + C("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + C("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + C("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + C("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + Y("mottle", "0.045", 4, 3, 1.8, -0.4) + Y("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + C("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + C("fill") + ')"></circle><g' + (y ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + C("soften") + ')">' + Km.map(([K, fe, Q, ve, ye, Ae]) => '<ellipse cx="' + K + '" cy="' + fe + '" rx="' + Q + '" ry="' + ve + '" fill-opacity="' + Ae + '" transform="rotate(' + ye + " " + K + " " + fe + ')"></ellipse>').join("") + "</g>" + $m.map(([K, fe, Q]) => '<circle class="wbCrater" cx="' + K + '" cy="' + fe + '" r="' + Q + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + C("glow") + ')">' + Xm.map(([K, fe]) => '<line x1="54.4" y1="95" x2="' + K + '" y2="' + fe + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + C("glow") + ')">' + fu.map(([K, fe, Q]) => '<circle cx="' + K + '" cy="' + fe + '" r="' + Q * 2 + '"></circle>').join("") + "</g>" + fu.map(([K, fe, Q]) => '<circle class="wbBrightCenter" cx="' + K + '" cy="' + fe + '" r="' + Q + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + C("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + C("grain") + ')"></rect>' + H + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function yr(f) {
    const b = qe, y = bd(f), C = (y == null ? void 0 : y.lat) ?? 0, H = sp(b), Y = cu(f), K = Y ? f.states[Y] : void 0, fe = qs(K) && gm.includes(K.state) ? K.state : Im(H.phase), { rise: Q, set: ve } = y ? Hm(b, y.lat, y.lon) : {}, ye = H.phase > 0.5 != C < 0, Ae = It(Math.round(H.fraction * 100), f.locale) + "%", Qe = Q ?? ve;
    return Qe && An(Qe, f), qn({
      icon: Gt.night,
      name: Re.moon,
      sub: Re.phases[fe],
      callouts: [...Q ? [[Re.callout.moonrise, An(Q, f)]] : [], ...ve ? [[Re.callout.moonset, An(ve, f)]] : [], [Re.callout.lit, Ae]],
      // at M, how much of it is lit (Matt, 10 Nov)
      zone: '<div class="wbMoonBox">' + rs(H.fraction, ye, C < 0) + "</div>" + dc(Ro(It(Math.round(H.fraction * 100), f.locale), "%"))
    });
  }
  function Ba(f, b) {
    var _e;
    const y = Oa(f, b, "wind_speed");
    if (!y || !aa(y.value)) return "";
    const C = Oa(f, b, "wind_gust_speed"), H = Oa(f, b, "wind_bearing"), Y = H && aa(H.value) ? Number(H.value) : void 0, K = Wm(Number(y.value), (_e = y.stateObj.attributes) == null ? void 0 : _e.wind_speed_unit), fe = wc(f, y.stateObj, "wind_speed", y.value), Q = Y !== void 0 ? Re.cardinal[mm[((Y + 11.25) / 22.5 | 0) % 16]] : void 0, ve = C ? su(f, C.stateObj, "wind_gust_speed", C.value) : void 0, ye = [Q ? Ln(Re.windFrom, { direction: Q }) : void 0, K !== void 0 ? K + " " + Re.beaufort : void 0].filter(Boolean).join(" · ") || ve, Ae = (et, ze) => {
      const Ee = (et - 90) * Math.PI / 180;
      return [100 + ze * Math.cos(Ee), 100 + ze * Math.sin(Ee)];
    }, Qe = Array.from({ length: 36 }, (et, ze) => ze * 10).map((et) => {
      const ze = et % 90 === 0, [Ee, gt] = Ae(et, 97), [ot, Rt] = Ae(et, ze ? 83 : 89);
      return '<line class="wbTick' + (ze ? " wbMajor" : "") + '" x1="' + Ee + '" y1="' + gt + '" x2="' + ot + '" y2="' + Rt + '"></line>';
    }).join(""), je = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([et, ze]) => {
      const [Ee, gt] = Ae(ze, 64);
      return '<text class="wbLetter' + (et === "n" ? " wbNorth" : "") + '" x="' + Ee + '" y="' + gt + '">' + Oe(Re.cardinal[et]) + "</text>";
    }).join("");
    return qn({ icon: Gt.windy, name: Re.wind, sub: ye, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Qe + je + (Y !== void 0 ? '<path class="wbMarker" transform="rotate(' + Y + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + Oe(fe.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + Oe(fe.unit) + "</text></svg>" });
  }
  const vo = (f, b) => {
    if (f < 3) return Re.advice.fine;
    if (f < 8) return Re.advice.sunblock;
    const y = Date.now(), C = B("hourly").find((H) => H.uv_index != null && new Date(H.datetime).getTime() > y && H.uv_index < 6);
    return C && new Date(C.datetime).toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? Ln(Re.advice.avoidUntil, { time: An(new Date(C.datetime), b) }) : Re.advice.avoidToday;
  };
  function kr(f, b) {
    const y = Oa(f, b, "uv_index");
    if (!y || !aa(y.value)) return "";
    const C = Number(y.value), H = Re.uvLevel[lu(C)], Y = /* @__PURE__ */ new Date();
    Y.setHours(23, 59, 59, 999);
    const K = B("hourly").filter((ye) => ye.uv_index != null && new Date(ye.datetime) > /* @__PURE__ */ new Date() && new Date(ye.datetime) <= Y).reduce((ye, Ae) => !ye || Ae.uv_index > ye.uv ? { uv: Ae.uv_index, time: new Date(Ae.datetime) } : ye, void 0), fe = vm[lu(C)], Q = 216 * Math.min(1, Math.max(0.08, 0.4 + (C - 4.5) * (0.5 / 5.5))), ve = '<svg class="wbUvArt" viewBox="0 0 216 198" preserveAspectRatio="xMinYMin slice" aria-hidden="true"><defs><radialGradient id="' + I + 'uv-sun" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="' + Q.toFixed(1) + '"><stop offset="0" style="stop-color:color-mix(in srgb, ' + fe + ' 28%, #fff6dd)"></stop><stop offset=".62" style="stop-color:color-mix(in srgb, ' + fe + ' 62%, #fff6dd)"></stop><stop offset="1" style="stop-color:' + fe + '"></stop></radialGradient></defs><circle class="wbUvSun" cx="0" cy="0" r="' + Q.toFixed(1) + '" fill="url(#' + I + 'uv-sun)"></circle></svg><div class="wbUvBig"><span class="wbUvNum">' + Oe(It(Math.round(C), f.locale)) + '</span><span class="wbUvWord">' + Oe(H) + "</span></div>" + dc(Ro(It(Math.round(C), f.locale), ""));
    return qn({
      icon: Gt.sunnyAlert,
      name: Re.metrics.uv_index,
      sub: K && K.uv > C ? Ln(Re.uvPeak, { level: H, uv_index: It(Math.round(K.uv), f.locale), time: An(K.time, f) }) : H,
      zone: ve,
      cls: "wbUv",
      callouts: [vo(C, f), [Re.callout.now, It(Math.round(C), f.locale) + " · " + H], [Re.callout.peak, K && K.uv > C ? It(Math.round(K.uv), f.locale) + " at " + An(K.time, f) : Re.callout.now]]
    });
  }
  function ss(f) {
    const b = B("daily")[0], y = Ce.temperatureHistory;
    if (!b || new Date(b.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !aa(b.temperature) || !y || y.dailyHighs.length < cm) return "";
    const C = Number(b.temperature), H = y.dailyHighs.reduce((ze, Ee) => ze + Ee, 0) / y.dailyHighs.length, Y = Math.round(C - H) || 0, K = Y > 0 ? "above" : Y < 0 ? "below" : "same", fe = [...y.days, { date: /* @__PURE__ */ new Date(), high: C, today: !0 }], Q = fe.map((ze) => ze.high).concat(H), ve = Math.min(...Q) - 1, ye = Math.max(...Q) + 1, Ae = (ze) => (1 - (ze - ve) / (ye - ve)) * 100, Qe = (ze) => (ze + 0.5) / fe.length * 100, je = fe.map((ze, Ee) => [Qe(Ee), Ae(ze.high)]), _e = je.map(([ze, Ee], gt) => (gt ? "L" : "M") + ze.toFixed(2) + " " + Ee.toFixed(2)).join(""), et = '<div class="wbCompareBars wbTrend" aria-hidden="true"><div class="wbTrendPlot"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><defs><linearGradient id="' + I + 'trend" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--primary)" stop-opacity=".28"></stop><stop offset="1" style="stop-color:var(--primary)" stop-opacity="0"></stop></linearGradient></defs><path class="wbTrendArea" d="' + _e + "L" + je[je.length - 1][0].toFixed(2) + " 100L" + je[0][0].toFixed(2) + ' 100Z" fill="url(#' + I + 'trend)"></path><line class="wbAvgLine" x1="0" x2="100" y1="' + Ae(H).toFixed(2) + '" y2="' + Ae(H).toFixed(2) + '" vector-effect="non-scaling-stroke"></line><path class="wbTrendLine" d="' + _e + '" vector-effect="non-scaling-stroke"></path></svg><span class="wbTrendAvg" style="top:' + Ae(H).toFixed(2) + '%">' + Oe(ua(f, H)) + "</span>" + fe.map((ze, Ee) => {
      const gt = ze.today ? " wbToday" : "", ot = "left:" + Qe(Ee).toFixed(2) + "%;top:" + Ae(ze.high).toFixed(2) + "%";
      return '<i class="wbTrendDot' + gt + '" style="' + ot + '"></i><span class="wbAvgValue' + gt + '" style="' + ot + '">' + Oe(ua(f, ze.high)) + "</span>";
    }).join("") + '</div><div class="wbTrendDays">' + fe.map((ze, Ee) => '<span class="wbAvgDay' + (ze.today ? " wbToday" : "") + '" style="left:' + Qe(Ee).toFixed(2) + '%">' + Oe(Tm(ze.date, f)) + "</span>").join("") + "</div></div>";
    return qn({
      icon: Gt.chartLine,
      name: Re.metrics.compared_to_average,
      double: !0,
      sub: Ln(Re.highsLastDays, { days: y.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (Y > 0 ? "+" : "") + Oe(ua(f, Y)) + '</div><div class="wbCompareWords">' + Oe(Re.average[K]) + '</div><div class="wbCompareTemps">' + Oe(Ln(Re.todayVsAverage, { today: ua(f, C), average: ua(f, H) })) + "</div></div>" + et + "</div>"
    });
  }
  function bo(f, b) {
    const y = Oa(f, b, "humidity");
    if (!y || !aa(y.value)) return "";
    const C = Oa(f, b, "dew_point"), H = Math.max(0, Math.min(100, Number(y.value)));
    return qn({
      icon: Gt.waterPercent,
      name: Re.metrics.humidity,
      sub: C && aa(C.value) ? Ln(Re.dewPoint, { dew_point: ua(f, C.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + H + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + Ro(It(Math.round(Number(y.value)), f.locale), "%") + "</div>"
    });
  }
  function Ws(f, b) {
    var ze, Ee, gt;
    const y = Oa(f, b, "pressure");
    if (!y || !aa(y.value)) return "";
    const C = Number(y.value), H = (ze = y.stateObj.attributes) == null ? void 0 : ze.pressure_unit, Y = du(C, H), K = ((Ee = Ce.pressureHistory) == null ? void 0 : Ee.entityId) === y.stateObj.entity_id ? du(Ce.pressureHistory.value, H) : void 0;
    let fe;
    if (Y !== void 0 && K !== void 0) {
      const ot = Y - K;
      fe = ot >= Qp ? "rising" : ot <= -Qp ? "falling" : "steady";
    }
    const Q = wc(f, y.stateObj, "pressure", Math.round(C)), ve = y.stateObj, ye = (ot) => H === "inHg" ? Math.round(ot * 100) / 100 : Math.round(ot), Ae = (ot) => su(f, ve, "pressure", ye(ot)), Qe = K !== void 0 ? Ce.pressureHistory.value : void 0, je = Qe !== void 0 ? ye(C - Qe) : void 0, _e = (gt = ve.entity_id) != null && gt.startsWith("weather.") ? B("hourly").find((ot) => aa(ot.pressure) && new Date(ot.datetime).getTime() >= Date.now() + 3 * zt - 30 * bn) : void 0, et = [
      ...fe ? [Re.advice[fe]] : [],
      ...Qe !== void 0 ? [[Re.callout.hoursAgo, Ae(Qe)], [Re.callout.change, (je > 0 ? "+" : je < 0 ? "−" : "") + Ae(Math.abs(je))]] : [],
      ..._e ? [[Re.callout.inHours, Ae(Number(_e.pressure))]] : []
    ];
    return qn({
      icon: Gt.gauge,
      name: Re.metrics.pressure,
      sub: fe ? Re.pressure[fe] : void 0,
      cls: "wbPressure",
      callouts: et,
      zone: '<div class="wbTapeRow"><div class="wbTapeValue">' + Ro(Q.number) + '<span class="wbTapeUnit">' + Oe(Q.unit) + "</span></div>" + (Y !== void 0 ? Hi(f, Y) : "") + "</div>"
    });
  }
  function Hi(f, b) {
    const H = Math.floor(b) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (Y, K) => H + K).map((Y) => {
      const K = 100 - (Y - b) * 9;
      if (K < 22 || K > 178) return "";
      const fe = Y % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(K - 100) / 100) + '"><line class="wbTapeTick" x1="' + (fe ? 2 : 8) + '" x2="26" y1="' + K + '" y2="' + K + '"></line>' + (fe ? '<text class="wbTapeLabel" x="33" y="' + K + '">' + Oe(It(Y, f.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + Oe(Re.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + Oe(Re.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function wo(f) {
    var Q, ve;
    const b = lp(f), y = b ? f.states[b] : void 0;
    if (!y || ((Q = Ce.rain) == null ? void 0 : Q.entityId) !== b || !aa(Ce.rain.change)) return "";
    const C = ((ve = y.attributes) == null ? void 0 : ve.unit_of_measurement) ?? "", H = q(f, "hourly"), Y = Date.now() + no, K = B("hourly").filter((ye) => ye.precipitation != null && new Date(ye.datetime).getTime() <= Y), fe = K.reduce((ye, Ae) => ye + Number(Ae.precipitation), 0);
    return qn({
      icon: Gt.rainy,
      name: Re.metrics.precipitation,
      sub: H && K.length ? Ln(Re.rainExpected, { amount: It(fe, f.locale, { maximumFractionDigits: 1 }) + " " + es(f, H, "precipitation") }) : Re.rainLast24h,
      visual: Ro(It(Ce.rain.change, f.locale, { maximumFractionDigits: 1 }), C) + (K.length > 1 ? Zm(K.map((ye) => ({ label: "", value: Number(ye.precipitation) }))) : "")
    });
  }
  function Ii(f, b) {
    const y = Oa(f, b, "visibility");
    if (!y || !aa(y.value)) return "";
    const C = wc(f, y.stateObj, "visibility", y.value), H = Wh(Number(y.value), es(f, y.stateObj, "visibility"));
    return qn({
      icon: Gt.eyeOutline,
      name: Re.metrics.visibility,
      sub: Re.visibilityLevel[Vh(H)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + H + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + Oe(Fi(f, H)) + '</div><div class="wbSeaValue">' + Ro(C.number, C.unit) + "</div></div>"
    });
  }
  function Fi(f, b) {
    var Y;
    const y = qh((Y = f.config) == null ? void 0 : Y.country, b);
    if (y) return Ln(Re.visibilityLandmarks, { from: y.from, to: y.to });
    const C = b / fm * 60;
    if (C < 60) {
      const K = C < 5 ? Math.max(1, Math.round(C)) : 5 * Math.round(C / 5);
      if (K < 60) return Ln(Re.walkMinutes, { minutes: It(K, f.locale) });
    }
    const H = Math.max(1, Math.round(C / 30) / 2);
    return H < 8 ? Ln(Re.walkHours, { hours: It(H, f.locale) }) : Re.walkDay;
  }
  function Mr(f) {
    Ce.categories === void 0 && ho(f);
    const b = mo(f), y = (Q) => Q.map((ve) => f.states[ve]).filter(qs), C = y(b.air), H = y(b.pollen);
    if (!C.length && !H.length) return "";
    const Y = [...C, ...H], K = (Q) => H.includes(Q) ? Gt.flower : Gt.airFilter, fe = Y.find((Q) => Q.entity_id === E.aq);
    return fe ? Sl(f, fe, K(fe)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + Oe(Re.airQuality) + '</h2></div><div class="wbAqTiles">' + Y.map((Q) => '<button class="wbTile" data-wb="aq-open" data-entity="' + Oe(Q.entity_id) + '"><span class="wbChip">' + vr(K(Q)) + '</span><span class="wbText"><span class="wbName">' + Oe(Jr(f, Q)) + '</span><span class="wbSub">' + Oe(mr(f, Q)) + "</span></span></button>").join("") + "</div></div>";
  }
  function Sl(f, b, y) {
    var ye, Ae, Qe;
    const C = ((ye = b.attributes) == null ? void 0 : ye.unit_of_measurement) ?? "", H = ((Ae = b.attributes) == null ? void 0 : Ae.device_class) === "pm25" && C === tu && aa(b.state), Y = Number(b.state), K = H ? lc(Y) : void 0, fe = ((Qe = Ce.aqHistory) == null ? void 0 : Qe.entityId) === b.entity_id ? Ce.aqHistory.points : void 0, Q = (je) => Math.min(100, Math.max(0, je / sc * 100));
    let ve;
    if (fe && fe.length > 1) ve = uu(fe, (je) => (It(je, f.locale, { maximumFractionDigits: 1 }) + " " + C).trim());
    else if (K) {
      let je = 0;
      const _e = sf.map(([et, ze]) => {
        const Ee = Q(Math.min(ze, sc)), gt = eu[et] + " " + je + "% " + Ee + "%";
        return je = Ee, gt;
      });
      ve = '<div class="wbScale" role="meter" aria-label="' + Oe(Re.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + sc + '" aria-valuenow="' + Y + '" style="background:linear-gradient(to right, ' + _e.join(", ") + ')"><i style="left:' + Q(Y) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + sc + " " + tu + "</span></div>";
    } else ve = '<span class="wbGraphNote"><span>' + Oe(mr(f, b)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + vr(y) + '</span><span class="wbText"><span class="wbName">' + Oe(Jr(f, b)) + '</span><span class="wbSub">' + Oe(mr(f, b)) + (K ? " · " + Oe(Re.aqLevel[K]) : "") + '</span></span><button class="wbBack" title="' + Oe(Re.back) + '" data-wb="aq-close">' + vr(Gt.back) + '</button></div><div class="wbGraph">' + ve + "</div></div></div>";
  }
  const Ut = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, Rn = (f) => f <= 50 ? "Good" : f <= 100 ? "Moderate" : f <= 150 ? "Unhealthy for some" : f <= 200 ? "Unhealthy" : f <= 300 ? "Very unhealthy" : "Hazardous";
  function No(f) {
    const b = /* @__PURE__ */ new Map();
    return Object.values(f.states || {}).filter((y) => {
      var C;
      return y.entity_id.startsWith("sensor.") && kc.includes(((C = y.attributes) == null ? void 0 : C.device_class) ?? "") && qs(y) && yl(f, y.entity_id);
    }).sort((y, C) => y.entity_id.localeCompare(C.entity_id)).forEach((y) => {
      b.has(y.attributes.device_class) || b.set(y.attributes.device_class, y);
    }), kc.map((y) => b.get(y)).filter(Boolean);
  }
  const di = (f) => Object.values(f.states || {}).filter((b) => {
    var y, C;
    return b.entity_id.startsWith("sensor.") && qs(b) && yl(f, b.entity_id) && (((C = (y = f.entities) == null ? void 0 : y[b.entity_id]) == null ? void 0 : C.translation_key) ?? b.entity_id).toLowerCase().includes("pollen");
  }), ja = ["none", "very_low", "low", "moderate", "high", "very_high"], ya = (f) => aa(f.state) ? Number(f.state) : ja.indexOf(String(f.state).toLowerCase().replace(/ /g, "_")), fa = (f) => {
    const b = String(f).replace(/_/g, " ");
    return b[0].toUpperCase() + b.slice(1);
  }, Vs = (f, b, y) => {
    const C = y ? f === "aqi" ? b <= 50 ? "good" : b <= 100 ? "moderate" : "poor" : f === "pm25" ? lc(b) : null : null;
    return C === "good" || C === "fair" ? Re.advice.window : C === "moderate" || C === null ? Re.advice.fine : Re.advice.closed;
  }, Kn = ["good", "fair", "moderate", "poor", "very_poor", "extremely_poor"], ci = (f) => Kn[f <= 50 ? 0 : f <= 100 ? 1 : f <= 150 ? 2 : f <= 200 ? 3 : f <= 300 ? 4 : 5], Ho = "M43 43q1 8 0 10M77 42q1 8 -1 10", Yt = {
    good: [Ho, "M34 69Q61 98 86 67"],
    fair: [Ho, "M40 74Q61 89 81 72"],
    moderate: [Ho, "M41 79Q60 76 80 81"],
    poor: [Ho, "M41 85Q60 73 80 86"],
    very_poor: ["M36 38l13 5M84 37l-13 5M43 48q1 7 0 9M77 47q1 7 -1 9", "M37 90Q60 64 84 89"],
    extremely_poor: ["M37 41l12 11M49 41l-12 11M71 40l12 11M83 40l-12 11", "M36 84q6 -8 12 0t12 0t12 0t12 0"]
  }, pi = (f) => '<svg class="wbAqFace" viewBox="0 0 120 120" aria-hidden="true"><path d="M60 9C89 8 112 32 110 61C109 90 87 112 58 111C30 110 9 88 10 59C11 31 33 10 63 12"></path><path class="wbAqEyes" d="' + Yt[f][0] + '"></path><path d="' + Yt[f][1] + '"></path></svg>';
  function io(f) {
    const b = No(f), y = b[0];
    if (!y) return qn({ icon: Gt.airFilter, name: Re.airQuality, sub: Re.noAir, visual: Ro("–", ""), cls: "wbBase" });
    const C = y.attributes.device_class, H = Number(y.state), Y = aa(y.state), K = C === "aqi" && Y ? Rn(H) : C === "pm25" && Y ? Ut[lc(H)] : mr(f, y), fe = Y ? It(Math.round(H), f.locale) : String(y.state), Q = C === "aqi" ? "AQI" : y.attributes.unit_of_measurement || "", ve = Y && C === "aqi" ? ci(H) : Y && C === "pm25" ? lc(H) : null;
    return qn(ve ? {
      icon: Gt.airFilter,
      name: Re.airQuality,
      sub: K,
      cls: "wbAqSmile",
      zone: '<div class="wbAqFill" style="background:' + eu[ve] + '">' + pi(ve) + '<div class="wbAqBig"><span class="wbAqNum">' + Oe(fe) + "</span>" + (Q ? '<span class="wbAqUnit">' + Oe(Q) + "</span>" : "") + "</div></div>" + dc(Ro(fe, Q)),
      callouts: [Vs(C, H, Y), ...b.slice(1, 3).map((ye) => [Jr(f, ye), mr(f, ye)])]
    } : {
      icon: Gt.airFilter,
      name: Re.airQuality,
      sub: K,
      cls: "wbBase",
      zone: Ro(fe, Q),
      callouts: [Vs(C, H, Y), ...b.slice(1, 3).map((ye) => [Jr(f, ye), mr(f, ye)])]
    });
  }
  const Sr = [
    ["wbSeed", '<svg viewBox="0 0 22 30" aria-hidden="true"><path d="M11 28V11" fill="none" stroke="currentColor" stroke-width="1"></path><path d="M11 11L3 6M11 11L5 2.5M11 11L8.5 1M11 11L13.5 1M11 11L17 2.5M11 11L19 6" fill="none" stroke="currentColor" stroke-width=".8" stroke-linecap="round"></path><circle cx="11" cy="28.5" r="1.4" fill="currentColor"></circle></svg>'],
    ["wbGrain", '<svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="3.3" fill="currentColor"></circle><path d="M6 1.2v1.4M6 9.4v1.4M1.2 6h1.4M9.4 6h1.4M2.6 2.6l1 1M8.4 8.4l1 1M2.6 9.4l1-1M8.4 3.6l1-1" stroke="currentColor" stroke-width=".9" stroke-linecap="round"></path></svg>'],
    ["wbStem", '<svg viewBox="0 0 10 30" aria-hidden="true"><path d="M5 29Q3.6 18 5 8" fill="none" stroke="currentColor" stroke-width="1"></path><ellipse cx="5" cy="6" rx="2.3" ry="4.6" fill="currentColor"></ellipse></svg>']
  ], Oi = (f) => {
    const b = [1, 3, 5, 7, 10, 13][Math.max(0, Math.min(5, Number.isFinite(f) ? Math.round(f) : 0))];
    return '<div class="wbPollenAir" aria-hidden="true">' + Array.from({ length: b }, (y, C) => {
      const [H, Y] = Sr[C % 3], K = 10 + C * 7 % 9, fe = 2.6 + C * 5 % 4 * 0.4;
      return '<span class="wbFloat ' + H + '" style="top:' + (4 + C * 37 % 52) + "%;--x:" + (C * 29 % 90 + 4) + "%;--s:" + (0.8 + C * 13 % 5 / 10).toFixed(1) + ";animation-duration:" + K + "s;animation-delay:-" + (C * 2.3 % K).toFixed(1) + 's"><span class="wbPush"><span class="wbBob" style="animation-duration:' + fe.toFixed(1) + "s;animation-delay:-" + (C * 0.7 % fe).toFixed(1) + 's">' + Y + "</span></span></span>";
    }).join("") + "</div>";
  };
  function qi(f) {
    const b = di(f).sort((H, Y) => ya(Y) - ya(H));
    if (!b.length) return qn({ icon: Gt.flower, name: Re.pollen, sub: Re.noPollen, visual: Ro("–", ""), cls: "wbBase" });
    const y = b[0], C = (H) => aa(H.state) ? mr(f, H) : fa(H.state);
    return qn({
      icon: Gt.flower,
      name: Re.pollen,
      sub: Jr(f, y) + " · " + C(y),
      cls: "wbBase wbPollen",
      zone: Oi(ya(y)) + Ro(C(y), ""),
      callouts: b.slice(0, 3).map((H) => [Jr(f, H), C(H)])
    });
  }
  function js(f) {
    const b = Date.now(), y = B("hourly").filter((Y) => {
      const K = new Date(Y.datetime).getTime();
      return K > b - zt && K < b + 12 * zt;
    }), C = y.find((Y) => (Y.precipitation_probability ?? 0) >= 50 || (Y.precipitation ?? 0) >= 0.2), H = C ? Ln(Re.rainFrom, { time: An(new Date(Math.max(b, new Date(C.datetime).getTime())), f) }) : y.length ? Re.noRain12 : void 0;
    return qn({ icon: Gt.radar, name: Re.rainRadar, sub: H, cls: "wbBase", visual: '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i></div>' });
  }
  const zs = {
    current: oo,
    hourly: nt,
    sun: Be,
    moon: yr,
    wind: Ba,
    uv_index: kr,
    compared_to_average: ss,
    humidity: bo,
    pressure: Ws,
    precipitation: wo,
    visibility: Ii,
    air_quality: Mr,
    aq_tile: io,
    pollen_tile: qi,
    radar_tile: js
  }, Io = [["day", "Last 24 hours", 1], ["week", "Last 7 days", 7], ["month", "Last 30 days", 30]], Fo = (f, b) => {
    var y;
    return b.toLocaleDateString((y = f.locale) == null ? void 0 : y.language, { day: "numeric", month: "short" });
  }, Cr = (f) => {
    const b = new Date(f);
    return b.setMinutes(b.getMinutes() - b.getTimezoneOffset()), b.toISOString().slice(0, 10);
  }, ui = () => {
    const f = E.range, b = Date.now();
    if (f.preset !== "custom") {
      const H = Io.find(([Y]) => Y === f.preset)[2];
      return [b - H * no, b];
    }
    const y = as(/* @__PURE__ */ new Date(f.from + "T00:00")).getTime(), C = Math.min(b, as(/* @__PURE__ */ new Date(f.to + "T00:00")).getTime() + no);
    return [Math.min(y, C - zt), C];
  }, da = (f) => {
    const b = E.range;
    if (b.preset !== "custom") return Io.find(([H]) => H === b.preset)[1];
    const [y, C] = ui();
    return b.from === b.to ? Fo(f, new Date(y)) : Fo(f, new Date(y)) + " – " + Fo(f, new Date(C - 1));
  }, xn = () => E.range.preset === "custom" ? E.range.from + "_" + E.range.to : E.range.preset, Lt = (f, b) => b - f <= 2 * no, Wi = (f, b, y, C) => Lt(y, C) ? An(b, f) : Fo(f, b), Oo = (f, b = 60) => {
    const y = Math.max(1, Math.ceil(f.length / b));
    return f.filter((C, H) => H % y === 0 || H === f.length - 1);
  }, Vi = (f, b, y, C, H = !1) => f.callWS({
    type: "history/history_during_period",
    start_time: new Date(y).toISOString(),
    end_time: new Date(C).toISOString(),
    entity_ids: [b],
    minimal_response: H,
    no_attributes: H,
    significant_changes_only: !1
  }), rn = (f) => async (b, y, C, H) => {
    const Y = Oa(b, y, f);
    if (!Y) return [];
    const K = Y.stateObj.entity_id, fe = await Vi(b, K, C, H);
    return Oo(((fe == null ? void 0 : fe[K]) ?? []).map((Q) => {
      var Ae;
      const ve = ((Ae = Q.a) == null ? void 0 : Ae[f]) ?? (aa(Q.s) ? Number(Q.s) : void 0), ye = (Q.lu ?? Q.lc) * 1e3;
      return typeof ve == "number" && ye >= C && ye <= H ? { t: new Date(ye), value: ve } : null;
    }).filter(Boolean)).map((Q) => ({ label: Wi(b, Q.t, C, H), value: Q.value }));
  }, qo = (f, b) => async (y, C, H, Y) => {
    const K = f(y);
    if (!K) return [];
    const fe = K.entity_id, Q = await Vi(y, fe, H, Y, !0);
    return Oo(((Q == null ? void 0 : Q[fe]) ?? []).map((ve) => {
      const ye = b(ve.s), Ae = ve.lu * 1e3;
      return ye == null || !Number.isFinite(ye) || Ae < H || Ae > Y ? null : { t: new Date(Ae), value: ye };
    }).filter(Boolean)).map((ve) => ({ label: Wi(y, ve.t, H, Y), value: ve.value }));
  }, ls = (f, b) => async (y, C, H, Y) => {
    const K = bd(y);
    if (!K) return [];
    const fe = [];
    if (Lt(H, Y)) for (let Q = H; Q <= Y; Q += zt / 2) fe.push({ label: An(new Date(Q), y), value: f(new Date(Q), K) });
    else for (let Q = Y; Q >= H; Q -= no) {
      const ve = new Date(Q), ye = b(ve, K, y);
      ye != null && fe.unshift({ label: Fo(y, ve), value: ye });
    }
    return Oo(fe);
  }, Bn = (f) => di(f).sort((b, y) => ya(y) - ya(b))[0], xo = (f, b, y) => {
    const C = Oa(f, b, y);
    return C ? es(f, C.stateObj, y) : "";
  }, Xt = {
    current: { name: () => Re.modes.temperature, icon: () => Gt.sunny, load: rn("temperature"), fmt: (f, b, y) => ua(f, y), now: (f, b) => {
      var y;
      return ua(f, (y = Oa(f, b, "temperature")) == null ? void 0 : y.value);
    } },
    sun: {
      name: () => Re.sun,
      icon: () => Gt.sunny,
      load: ls((f, b) => Math.round(Sc(f, b.lat, b.lon) / Gn), (f, b, y) => {
        const C = wl(y, f);
        return C.rise && C.set ? Math.round((C.set - C.rise) / zt * 10) / 10 : null;
      }),
      fmt: (f, b, y, C) => C ? It(y, f.locale) + "°" : It(y, f.locale) + " h",
      sub: (f) => f ? "How high the sun was" : "Hours of daylight a day"
    },
    moon: {
      name: () => Re.moon,
      icon: () => Gt.night,
      load: ls((f) => Math.round(sp(f).fraction * 100), (f) => Math.round(sp(f).fraction * 100)),
      fmt: (f, b, y) => It(y, f.locale) + "%",
      sub: () => "How much of it was lit"
    },
    uv_index: { name: () => Re.metrics.uv_index, icon: () => Gt.sunnyAlert, load: rn("uv_index"), fmt: (f, b, y) => It(Math.round(y * 10) / 10, f.locale), now: (f, b) => {
      const y = Oa(f, b, "uv_index");
      return y ? It(Number(y.value), f.locale) : "";
    } },
    humidity: { name: () => Re.metrics.humidity, icon: () => Gt.waterPercent, load: rn("humidity"), fmt: (f, b, y) => It(Math.round(y), f.locale) + "%", now: (f, b) => {
      const y = Oa(f, b, "humidity");
      return y ? It(Math.round(Number(y.value)), f.locale) + "%" : "";
    } },
    pressure: { name: () => Re.metrics.pressure, icon: () => Gt.gauge, load: rn("pressure"), fmt: (f, b, y) => It(Math.round(y), f.locale) + " " + xo(f, b, "pressure"), now: (f, b) => {
      const y = Oa(f, b, "pressure");
      return y ? It(Math.round(Number(y.value)), f.locale) + " " + xo(f, b, "pressure") : "";
    } },
    wind: { name: () => Re.wind, icon: () => Gt.windy, load: rn("wind_speed"), fmt: (f, b, y) => It(Math.round(y), f.locale) + " " + xo(f, b, "wind_speed"), now: (f, b) => {
      const y = Oa(f, b, "wind_speed");
      return y ? It(Math.round(Number(y.value)), f.locale) + " " + xo(f, b, "wind_speed") : "";
    } },
    visibility: { name: () => Re.metrics.visibility, icon: () => Gt.eyeOutline, load: rn("visibility"), fmt: (f, b, y) => It(Math.round(y * 10) / 10, f.locale) + " " + xo(f, b, "visibility"), now: (f, b) => {
      const y = Oa(f, b, "visibility");
      return y ? It(Number(y.value), f.locale) + " " + xo(f, b, "visibility") : "";
    } },
    aq_tile: {
      name: (f) => No(f)[0] ? Jr(f, No(f)[0]) : Re.airQuality,
      icon: () => Gt.airFilter,
      load: qo((f) => No(f)[0], (f) => aa(f) ? Number(f) : null),
      fmt: (f, b, y) => {
        var Y, K;
        const C = No(f)[0], H = (Y = C == null ? void 0 : C.attributes) == null ? void 0 : Y.device_class;
        return It(Math.round(y * 10) / 10, f.locale) + (H === "aqi" ? " AQI" : (K = C == null ? void 0 : C.attributes) != null && K.unit_of_measurement ? " " + C.attributes.unit_of_measurement : "");
      },
      now: (f) => {
        const b = No(f)[0];
        return b ? mr(f, b) : "";
      }
    },
    pollen_tile: {
      name: (f) => Bn(f) ? Jr(f, Bn(f)) : Re.pollen,
      icon: () => Gt.flower,
      load: qo(Bn, (f) => {
        const b = ya({ state: f });
        return b < 0 ? null : b;
      }),
      fmt: (f, b, y) => fa(ja[Math.round(y)] || ""),
      now: (f) => {
        const b = Bn(f);
        return b ? fa(b.state) : "";
      }
    }
  }, $n = {};
  let La = null;
  async function ji(f) {
    var K;
    const b = l == null ? void 0 : l();
    if (!b || !Xt[f]) return;
    const y = f + "|" + xn(), [C, H] = ui();
    if ($n[y] && Date.now() - $n[y].at < 5 * bn) return;
    $n[y] = { at: Date.now(), points: null };
    try {
      $n[y].points = await Xt[f].load(b, Yn(b), C, H);
    } catch {
      $n[y].points = [];
    }
    Aa(!0), La === f && E.graph === f && (La = null, Kp(ee[f].el.querySelector(".wbGraphCard")));
    const Y = E.graph === f && ((K = ee[f]) == null ? void 0 : K.el.querySelector(".wbGraph .wbChart"));
    Y && of(Y, Y.querySelector(".wbLine"), Y.querySelectorAll(".wbArea"));
  }
  function Wo(f, b) {
    const y = E.range, C = Cr(Date.now()), [H, Y] = ui(), K = y.pickFrom || Cr(H), fe = y.pickTo || Cr(Y - 1);
    return '<div class="wbRangePick' + (b ? " wbPickRight" : "") + '" role="dialog" aria-label="Choose date range"><div class="wbRangePresets">' + Io.map(([Q, ve]) => '<button class="wbRangePreset" aria-pressed="' + (y.preset === Q) + '" data-wb="graph-preset" data-range="' + Q + '" data-wb-focus="graph-preset-' + Q + '">' + Oe(ve) + "</button>").join("") + '</div><div class="wbRangeDates"><label><span>From</span><input type="date" data-range-from value="' + K + '" max="' + C + '"></label><label><span>To</span><input type="date" data-range-to value="' + fe + '" max="' + C + '"></label></div><button class="wbRangeApply" data-wb="graph-apply" data-wb-focus="graph-apply">Show these dates</button></div>';
  }
  function ds(f, b, y) {
    var Qe;
    const C = Xt[y], [H, Y] = ui(), K = Lt(H, Y), fe = (Qe = $n[y + "|" + xn()]) == null ? void 0 : Qe.points, Q = ee[y].el, ve = Math.max(120, Q.clientWidth - 2 * 18 - 32), ye = Math.max(40, Q.clientHeight - 2 * 18 - 44 - 14 - 32 - 14 - 24), Ae = fe ? fe.length > 1 ? uu(fe, (je) => C.fmt(f, b, je, K), ye, ve) : '<span class="wbGraphNote"><span>No history for these dates</span></span>' : '<span class="wbGraphNote"><span>Loading…</span></span>';
    return '<div class="wbCard wbSquare wbGraphCard"><div class="wbHead"><div class="wbChip wbPlain">' + lf(C.icon(f)) + '</div><div class="wbText"><span class="wbName">' + Oe(C.name(f)) + '</span><span class="wbSub">' + Oe(C.sub ? C.sub(K) : C.now ? C.now(f, b) : "") + '</span></div><button class="wbBack" title="' + Oe(Re.back) + '" data-wb="graph-close" data-wb-focus="graph-close">' + vr(Gt.back) + '</button></div><button class="wbRangeBtn" aria-haspopup="dialog" aria-expanded="' + !!E.picking + '" title="Choose date range" data-wb="graph-pick" data-wb-focus="graph-pick">' + vr(Gt.calendar) + "<span>" + Oe(da(f)) + "</span>" + vr(Gt.chevronDown) + '</button><div class="wbGraph">' + Ae + "</div></div>" + (E.picking ? Wo(f, Q.getBoundingClientRect().left > innerWidth / 2) : "");
  }
  function Aa(f) {
    var Ae, Qe, je;
    const b = l == null ? void 0 : l();
    if (!b || J) return;
    const y = Yn(b);
    ue(b, y), Ce.lastFetch || tt();
    const C = mo(b), H = cu(b), Y = lp(b), K = [
      ...y.map((_e) => b.states[_e]),
      b.states["sun.sun"],
      H && b.states[H],
      Y && b.states[Y],
      ...C.air.map((_e) => b.states[_e]),
      ...C.pollen.map((_e) => b.states[_e]),
      ...V.some((_e) => F.includes(_e)) ? [...No(b), ...di(b)] : [],
      b.locale,
      b.config,
      b.entities,
      Math.floor(Date.now() / bn)
    ];
    if (!f && U && K.length === U.length && K.every((_e, et) => _e === U[et])) return;
    U = K;
    const fe = M.getRootNode(), Q = fe.activeElement || document.activeElement;
    for (const _e of V) {
      const et = ee[_e];
      let ze = "";
      try {
        ze = (E.graph === _e ? ds(b, y, _e) : zs[_e](b, y)) || "";
      } catch {
        ze = "";
      }
      if (ze === et.html) continue;
      const Ee = Q && et.el.contains(Q) ? (Ae = Q.dataset) == null ? void 0 : Ae.wbFocus : void 0, gt = et.el.querySelector(".wbStripScroll"), ot = gt ? gt.scrollLeft : null;
      et.html = ze, et.el.hidden = !ze, et.el.innerHTML = ze;
      const Rt = et.el.querySelector(".wbStripScroll");
      Rt && ot != null ? Rt.scrollTo({ left: ot }) : Rt != null && Rt.dataset.start && Rt.scrollTo({ left: Number(Rt.dataset.start) * Rt.clientWidth / Number(Rt.dataset.span) }), Ee && !oe && ((Qe = et.el.querySelector('[data-wb-focus="' + Ee + '"]')) == null || Qe.focus());
    }
    _n(), oe && ((je = M.querySelector('[data-wb-focus="' + oe + '"]')) == null || je.focus({ preventScroll: !0 }), oe = null);
    let ve = !1, ye = !1;
    for (const _e of V) {
      const et = ee[_e], ze = !et.el.hidden, Ee = G[_e] === "wide" || pe.includes(_e), gt = V.indexOf(_e) >= V.indexOf("moon"), ot = ze && (gt && Ee && !ve || !Ee && !ye);
      ot && Ee && (ve = !0), ot && !Ee && (ye = !0), et.el.toggleAttribute("data-break", ot);
    }
    Lr(performance.now());
  }
  function Vo() {
    ke || J || (ke = !0, queueMicrotask(() => {
      ke = !1, Aa(!0);
    }));
  }
  function ro() {
    const f = getComputedStyle(M), b = (K) => f.getPropertyValue(K).trim(), y = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([K, fe]) => {
      b(fe) && (y[K] = b(fe));
    });
    const C = b("--color-text-primary") || "#f1f1f1", H = b("--color-bg-card") || "#222222", Y = !!M.closest(".light");
    return { colors: { ...Un, ...y }, ink: Y ? C : H, paper: Y ? H : C };
  }
  const fi = (f, b) => {
    var y;
    f.width !== b.w && (f.width = b.w), f.height !== b.h && (f.height = b.h), (y = f.getContext("2d")) == null || y.putImageData(new ImageData(b.data, b.w, b.h), 0, 0);
  }, jo = () => v && !Mm();
  function Tr(f, b) {
    M.querySelectorAll("canvas[data-wb-strip]").forEach((y) => Cl(y, ie[y.dataset.wbStrip], f, b));
  }
  function Cl(f, b, y, C) {
    if (!b || !f.getClientRects().length) return;
    const H = f.clientWidth, Y = f.clientHeight;
    if (!H || !Y) return;
    const K = { width: H, height: Y, columns: b.columns || $p, colors: C.colors, clock: y, ambient: jo(), seed: b.seed, soft: 1.5 };
    if (u === "smooth") {
      const fe = Math.min(2, window.devicePixelRatio || 1), Q = Math.round(H * fe), ve = Math.round(Y * fe);
      f.width !== Q && (f.width = Q), f.height !== ve && (f.height = ve);
      const ye = f.getContext("2d");
      if (!ye) return;
      ye.setTransform(fe, 0, 0, fe, 0, 0), kh(ye, b.segs, K);
    } else fi(f, yh(b.segs, { ...K, px: 2, oneBit: u === "onebit", ink: C.ink, paper: C.paper }));
  }
  function Lr(f) {
    if (J) return;
    const b = ro();
    if (u !== "smooth") {
      const y = jo();
      M.querySelectorAll("canvas[data-wb-wx]").forEach((C) => {
        C.getClientRects().length && fi(C, Wu(xp(C.dataset.wbWx, b.colors), { size: Number(C.dataset.size) || 40, px: 2, oneBit: u === "onebit", colors: b.colors, ink: b.ink, paper: b.paper, clock: f, idle: y }));
      });
    }
    M.querySelectorAll("canvas[data-wb-sea]").forEach((y) => {
      const C = y.clientWidth, H = y.clientHeight, Y = Number(y.dataset.wbSea), K = C + "x" + H + ":" + Y + ":" + b.colors.skyClearDay;
      !C || !H || !(Y > 0) || y.dataset.painted === K || (y.dataset.painted = K, fi(y, Ih(C, H, Y, b.colors)));
    }), Tr(f, b);
  }
  function cs(f) {
    if (me = 0, !(J || !jo())) {
      if (!document.hidden)
        if (u === "smooth") Tr(f, ro());
        else {
          const b = Math.floor(f / 100);
          b !== ce && (ce = b, Lr(f));
        }
      me = requestAnimationFrame(cs);
    }
  }
  function yo() {
    M.classList.toggle("wbMotion", jo()), !me && !J && jo() && (me = requestAnimationFrame(cs));
  }
  function Gs(f) {
    var y, C, H, Y, K, fe, Q;
    const b = (C = (y = f.target).closest) == null ? void 0 : C.call(y, "[data-wb]");
    if (!b || !M.contains(b)) {
      const ve = (Y = (H = f.target).closest) == null ? void 0 : Y.call(H, ".wbItem"), ye = ve == null ? void 0 : ve.dataset.card;
      if (!ve || !M.contains(ve) || !Xt[ye] || E.graph === ye || M.closest(".tfEditing") || ve.offsetHeight < 200 || ye === "current" && k) return;
      E.graph = ye, oe = "graph-close", Aa(!0), (K = $n[ye + "|" + xn()]) != null && K.points ? Kp(ee[ye].el.querySelector(".wbGraphCard")) : La = ye, ji(ye);
      return;
    }
    switch (b.dataset.wb) {
      case "day": {
        E.openDay = Number(b.dataset.index), E.opener = b.dataset.wbFocus, oe = "back-day";
        const ve = Xe()[E.openDay], ye = !Ce.todayHistory || Ce.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - Ce.todayHistory.fetched > am;
        ve && bl(new Date(ve.datetime), /* @__PURE__ */ new Date()) && ye && Za();
        break;
      }
      case "close-day":
        E.openDay = void 0, oe = E.opener, E.opener = void 0;
        break;
      case "open-page":
        k == null || k();
        return;
      case "day-mode":
        E.dayMode = b.dataset.mode;
        break;
      case "hourly-mode":
        E.hourlyMode = b.dataset.mode;
        break;
      case "hourly-view":
        E.hourlyView = b.dataset.view;
        try {
          localStorage.setItem(ne, E.hourlyView);
        } catch {
        }
        break;
      case "hours-day": {
        const ve = M.querySelector(".wbStripScroll");
        ve && ve.scrollTo({ left: Number(b.dataset.hours) * ve.clientWidth / Number(ve.dataset.span), behavior: "smooth" });
        return;
      }
      case "aq-open":
        E.aq = b.dataset.entity, Ie(E.aq);
        break;
      case "aq-close":
        E.aq = void 0;
        break;
      case "graph-close":
        E.graph = void 0, E.picking = !1;
        break;
      case "graph-pick":
        E.picking = !E.picking, oe = E.picking ? "graph-preset-" + (E.range.preset === "custom" ? "day" : E.range.preset) : "graph-pick";
        break;
      case "graph-preset":
        E.range = { preset: b.dataset.range }, E.picking = !1, oe = "graph-pick", Aa(!0), ji(E.graph);
        return;
      case "graph-apply": {
        let ve = E.range.pickFrom || ((fe = M.querySelector("[data-range-from]")) == null ? void 0 : fe.value), ye = E.range.pickTo || ((Q = M.querySelector("[data-range-to]")) == null ? void 0 : Q.value);
        if (!ve || !ye) return;
        ve > ye && ([ve, ye] = [ye, ve]), E.range = { preset: "custom", from: ve, to: ye }, E.picking = !1, oe = "graph-pick", Aa(!0), ji(E.graph);
        return;
      }
      default:
        return;
    }
    Aa(!0);
  }
  function zi(f) {
    var b, y, C, H, Y, K;
    f.key === "Escape" && E.openDay !== void 0 && ((y = (b = f.target).closest) != null && y.call(b, '[data-wb-open="day"]')) ? (E.openDay = void 0, oe = E.opener, E.opener = void 0, Aa(!0)) : f.key === "Escape" && E.picking && ((H = (C = f.target).closest) != null && H.call(C, ".wbGraphCard")) ? (E.picking = !1, oe = "graph-pick", Aa(!0)) : f.key === "Escape" && E.graph && ((K = (Y = f.target).closest) != null && K.call(Y, ".wbGraphCard")) && (E.graph = void 0, Aa(!0));
  }
  let ka = null;
  function ps(f) {
    var y, C;
    const b = (C = (y = f.target).closest) == null ? void 0 : C.call(y, ".wbStripScroll");
    !b || f.button !== 0 || (ka = { startX: f.pageX, left: b.scrollLeft, moved: !1 }, b.classList.add("wbHeld"), window.addEventListener("mousemove", zo), window.addEventListener("mouseup", hi, { once: !0 }));
  }
  function zo(f) {
    const b = M.querySelector(".wbStripScroll");
    if (!ka || !b) return;
    const y = f.pageX - ka.startX;
    !ka.moved && Math.abs(y) > 1 && (ka.moved = !0, b.classList.add("wbDragging")), b.scrollLeft = ka.left - y;
  }
  function hi() {
    ka = null, window.removeEventListener("mousemove", zo);
    const f = M.querySelector(".wbStripScroll");
    if (!f) return;
    f.classList.remove("wbDragging", "wbHeld");
    const b = [...f.querySelectorAll(".wbSnap")];
    if (b.length) {
      const y = b.reduce((C, H) => Math.abs(H.offsetLeft - f.scrollLeft) < Math.abs(C.offsetLeft - f.scrollLeft) ? H : C);
      f.scrollTo({ left: y.offsetLeft, behavior: "smooth" });
    }
  }
  const sn = (f) => {
    var y, C;
    const b = f.target;
    (y = b.matches) != null && y.call(b, "[data-range-from]") ? E.range.pickFrom = b.value : (C = b.matches) != null && C.call(b, "[data-range-to]") && (E.range.pickTo = b.value);
  };
  M.addEventListener("change", sn), M.addEventListener("click", Gs), M.addEventListener("keydown", zi), M.addEventListener("mousedown", ps);
  const Gi = 64, Ui = 30;
  let yn = null, Ft = 0;
  const Yi = () => {
    Ft = 0, M.querySelectorAll(".wbPollen .wbPush").forEach((f) => {
      let b = 0, y = 0;
      if (yn) {
        const C = f.parentElement.getBoundingClientRect(), H = C.left + C.width / 2 - yn.x, Y = C.top + C.height / 2 - yn.y, K = Math.hypot(H, Y) || 1;
        if (K < Gi) {
          const fe = (1 - K / Gi) * Ui;
          b = H / K * fe, y = Y / K * fe;
        }
      }
      f.style.transform = b || y ? "translate(" + b.toFixed(1) + "px," + y.toFixed(1) + "px)" : "";
    }), yn && (Ft = requestAnimationFrame(Yi));
  }, Us = (f) => {
    var y, C;
    if (!((C = (y = f.target).closest) == null ? void 0 : C.call(y, ".wbPollen")) || dn != null && dn.matches) {
      yn && (yn = null, Ft || (Ft = requestAnimationFrame(Yi)));
      return;
    }
    yn = { x: f.clientX, y: f.clientY }, Ft || (Ft = requestAnimationFrame(Yi));
  }, us = () => {
    yn = null, Ft || (Ft = requestAnimationFrame(Yi));
  };
  M.addEventListener("pointermove", Us), M.addEventListener("pointerleave", us);
  const ln = typeof ResizeObserver == "function" ? new ResizeObserver(() => Lr(performance.now())) : null;
  ln == null || ln.observe(M);
  const dn = (cn = window.matchMedia) == null ? void 0 : cn.call(window, "(prefers-reduced-motion: reduce)"), Kt = () => {
    yo(), Lr(performance.now());
  };
  (Go = dn == null ? void 0 : dn.addEventListener) == null || Go.call(dn, "change", Kt);
  const ko = [
    setInterval(() => {
      le = /* @__PURE__ */ new Date(), Aa(!0);
    }, pm),
    setInterval(() => {
      qe = /* @__PURE__ */ new Date(), Aa(!0);
    }, um),
    setInterval(tt, lm)
  ];
  return Aa(!0), yo(), {
    update() {
      Aa(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      Aa(!0);
    },
    setStyle(f) {
      !f || f === u || (u = f, M.dataset.style = u, Aa(!0), yo());
    },
    destroy() {
      var f;
      cancelAnimationFrame(Ft), M.removeEventListener("pointermove", Us), M.removeEventListener("pointerleave", us), J = !0, ko.forEach(clearInterval), me && cancelAnimationFrame(me), me = 0, ln == null || ln.disconnect(), (f = dn == null ? void 0 : dn.removeEventListener) == null || f.call(dn, "change", Kt), hi(), M.removeEventListener("click", Gs), M.removeEventListener("change", sn), M.removeEventListener("keydown", zi), M.removeEventListener("mousedown", ps), ["daily", "hourly"].forEach(R), M.remove();
    }
  };
}
const wd = "#E1E1E1", mu = "#F7F4F0", dp = "#03a9f4", qt = 14, jt = 172;
let Qm = 0;
const va = (n) => Math.round(n * 100) / 100, Ni = (n, l, i) => Math.max(l, Math.min(i, n)), xr = (n, l, i, u, v, x) => '<rect x="' + va(n) + '" y="' + va(l) + '" width="' + va(i) + '" height="' + va(u) + '" fill="' + v + '"' + (x != null ? ' opacity="' + x + '"' : "") + "/>", cp = (n) => n.map((l, i) => (i ? "L" : "M") + va(l[0]) + " " + va(l[1])).join("");
function pp(n) {
  const l = (n == null ? void 0 : n.attributes) || {};
  return l.device_class === "curtain" ? "curtain" : l.device_class === "blind" || l.current_tilt_position != null ? "venetian" : "blind";
}
const Qr = [
  [2, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]],
  [6.5, ["#0B0F1C", "#2E7FD6", "#F2743B", "#F1B6C8", 0.95]],
  [9.5, ["#8FC4EC", "#4DA3E8", "#F4FAFF", "#2F7FCF", 0.7]],
  [13, ["#9ED3F6", "#3F97E6", "#FFFFFF", "#2B86D9", 0.65]],
  [17, ["#9FC2E4", "#4A8ED4", "#FFD9B8", "#5E8FD6", 0.75]],
  [19, ["#4B5E86", "#3B86E0", "#FF6A3D", "#B07CE8", 0.95]],
  [21.5, ["#1A2140", "#1F3F7A", "#B4506E", "#3E59A6", 0.8]],
  [26, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]]
];
function eg(n) {
  const l = n < 2 ? n + 24 : n;
  let i = Qr[0], u = Qr[Qr.length - 1];
  for (let A = 0; A < Qr.length - 1; A++) if (l >= Qr[A][0] && l <= Qr[A + 1][0]) {
    i = Qr[A], u = Qr[A + 1];
    break;
  }
  const v = (l - i[0]) / (u[0] - i[0]), x = v * v * (3 - 2 * v), k = (A, I) => {
    const M = parseInt(A.slice(1), 16), W = parseInt(I.slice(1), 16);
    return "#" + [16, 8, 0].map((F) => Math.round((M >> F & 255) + ((W >> F & 255) - (M >> F & 255)) * x).toString(16).padStart(2, "0")).join("");
  };
  return { top: k(i[1][0], u[1][0]), bot: k(i[1][1], u[1][1]), warm: k(i[1][2], u[1][2]), cool: k(i[1][3], u[1][3]), op: i[1][4] + (u[1][4] - i[1][4]) * x, t: l };
}
function tg(n) {
  const l = parseInt(n.slice(1), 16), i = (l >> 16 & 255) / 255, u = (l >> 8 & 255) / 255, v = (l & 255) / 255, x = Math.max(i, u, v), k = Math.min(i, u, v);
  let A = 0, I = 0;
  const M = (x + k) / 2;
  if (x !== k) {
    const W = x - k;
    I = M > 0.5 ? W / (2 - x - k) : W / (x + k), A = (x === i ? (u - v) / W + (u < v ? 6 : 0) : x === u ? (v - i) / W + 2 : (i - u) / W + 4) / 6;
  }
  return [A * 360, I * 100, M * 100];
}
function xf(n, l, i) {
  l = Ni(l, 0, 100) / 100, i = Ni(i, 0, 100) / 100;
  const u = (k) => (k + n / 30) % 12, v = l * Math.min(i, 1 - i), x = (k) => i - v * Math.max(-1, Math.min(u(k) - 3, Math.min(9 - u(k), 1)));
  return "#" + [x(0), x(8), x(4)].map((k) => Math.round(k * 255).toString(16).padStart(2, "0")).join("");
}
const [yf, kf, Mf] = tg(wd), gu = xf(yf, kf, Math.max(6, Mf - 14)), ag = xf(yf, kf, Math.min(96, Mf + 16));
function ng(n, l, i, u, v) {
  const x = jt / 2, k = jt * 0.12, A = x - (x - k) * n, I = (pe) => pe ** 1.3, M = Ni(i, -1.5, 1.5), W = (pe) => -(Math.abs(M) * 4.6 * pe ** 1.5) * Math.sign(M), F = n * 1.4, V = (pe, ee) => {
    const J = Math.min(4.8, Math.abs(i) * 2.6) * (ee ? 1 : -1) * Math.sign(i || 1), U = ee ? pe + A : pe, me = ee ? pe : pe + A, ce = (Ce) => U + W(Ce) + J * Math.sin(Ce * Math.PI * 1.2 + u) * I(Ce) * 1.4 + F * Math.sin(Ce * Math.PI * 2 + u * 0.6) * I(Ce) * (ee ? 1 : -1), ke = [[me, qt]];
    for (let Ce = 0; Ce <= 12; Ce++) ke.push([ce(Ce / 12), qt + jt * Ce / 12]);
    ke.push([me, qt + jt]);
    let oe = '<path d="' + cp(ke) + 'Z" fill="' + wd + '"/>';
    if (v) return oe;
    const ne = 1.35 + ((ee ? i > 0 : i < 0) ? 0.35 : 0), te = (Ce) => {
      const le = Ce / 7, qe = ee ? 1 - le : le, ie = (1 - qe) ** 1.3, Ze = pe + A * le;
      return Array.from({ length: 13 }, (T, B) => {
        const q = B / 12;
        return [Ze + W(q) * ie + J * ne * Math.sin(q * Math.PI * 1.2 + u - qe * 3.2) * I(q) * 1.4 * ie + F * 1.6 * Math.sin(q * Math.PI * 2 + u * 0.6 - qe * 2.5) * I(q) * n * (0.4 + 0.6 * ie), qt + jt * q];
      });
    }, E = [1, 2, 3, 4, 5, 6].map(te);
    for (let Ce = 0; Ce < 6; Ce += 2) oe += '<path d="' + cp(E[Ce]) + cp(E[Ce + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return oe;
  }, G = x - (x - k) * l;
  return { body: V(qt, !0) + V(qt + jt - A, !1), rails: [{ x: qt + G - 4, y: qt, w: 4, h: jt }, { x: qt + jt - G, y: qt, w: 4, h: jt }], head: 6.4 };
}
function og(n, l, i) {
  const u = jt * (1 - n);
  let v = "";
  if (u > 1 && (v += xr(qt, qt, jt, u, wd), !i))
    for (let x = 1; x < 7; x += 2) v += xr(qt + jt * x / 7, qt, jt / 7, u, "#fff");
  return { body: v, rails: [{ x: qt, y: qt + jt * (1 - l) - 7, w: jt, h: 11 }], head: 10.4 };
}
function ig(n, l, i, u) {
  const v = 9 - 7 * (i / 100), x = qt + jt * (1 - n), k = Math.ceil(jt / 10) + 1, A = qt + v / 2, I = (qt + jt - v / 2 - A) / (k - 1), M = 0.8, W = 0.6, F = Array.from({ length: k }, (pe, ee) => Math.max(A + ee * W, Math.min(A + ee * I, x - v / 2 - (k - 1 - ee) * W))), V = F.slice(0, -1).map((pe, ee) => Ni((F[ee + 1] - pe - W) / (I - W), 0, 1));
  V.push(V[k - 2]);
  let G = "";
  return F.forEach((pe, ee) => {
    const J = M + (v - M) * V[ee], U = Math.max(0.5, J / 2), me = Math.max(0.4, J * 0.114);
    G += xr(qt, pe - U, jt, Math.max(1, J), wd), !u && J > 2.2 && (G += xr(qt, pe + U - me, jt, me, gu) + xr(qt, pe - U, jt, me * 0.55, ag, 0.75));
  }), u || [0.22, 0.78].forEach((pe) => {
    G += xr(qt + jt * pe - 0.7, qt, 1.4, Math.max(0, F[k - 1] + 1 - qt), gu, 0.85);
  }), { body: G, rails: [{ x: qt, y: qt + jt * (1 - l) - 8, w: jt, h: 8 }], head: 8.8 };
}
const vu = (n, l, i, u, v, x, k) => n === "curtain" ? ng(l, i, v, x, k) : n === "venetian" ? ig(l, i, u, k) : og(l, i, k);
function rg(n, l) {
  let i = "", u = "";
  return l.forEach((v) => {
    const x = v.w > v.h, k = Ni(x ? qt + jt / 2 : v.x + v.w / 2, 17, 183), A = Ni(x ? v.y + v.h / 2 : qt + jt / 2, 17, 183);
    i += x ? xr(qt, Ni(v.y + v.h / 2, qt, qt + jt) - 1, jt, 2, dp) : xr(Ni(v.x + v.w / 2, qt, qt + jt) - 1, qt, 2, jt, dp);
    const I = x ? "M" + va(k - 4) + " " + va(A - 3) + "l4 -3l4 3M" + va(k - 4) + " " + va(A + 3) + "l4 3l4 -3" : "M" + va(k - 3) + " " + va(A - 4) + "l-3 4l3 4M" + va(k + 3) + " " + va(A - 4) + "l3 4l-3 4";
    u += '<circle cx="' + va(k) + '" cy="' + va(A) + '" r="11" fill="' + dp + '" filter="url(#' + n + 's)"/><path d="' + I + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: i, knobs: u };
}
function sg(n, l) {
  const i = /* @__PURE__ */ new Date(), u = eg(i.getHours() + i.getMinutes() / 60), v = 42 + 18 * Math.sin(u.t * 0.5), x = u.t >= 5 && u.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (u.t - 5) / 15) : 80, k = vu(l.kind, l.pos / 100, l.bar / 100, l.tilt, l.vel, l.ph, !1), A = l.ghostAlpha > 4e-3 && l.ghost != null ? vu(l.kind, l.ghost / 100, l.ghost / 100, l.tilt, 0, 0, !0).body : "", I = l.grip > 4e-3 ? rg(n, k.rails) : null, M = (W) => xr(qt, qt, jt, jt, W);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + n + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + n + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + u.top + '"/><stop offset="1" stop-color="' + u.bot + '"/></linearGradient><radialGradient id="' + n + 'w" cx="' + va(v) + '%" cy="' + va(x) + '%" r="58%"><stop offset="0" stop-color="' + u.warm + '" stop-opacity="' + va(u.op * 0.8) + '"/><stop offset="1" stop-color="' + u.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + n + 'k" cx="' + va(100 - v * 0.8) + '%" cy="' + va(100 - x * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + u.cool + '" stop-opacity="' + va(u.op * 0.64) + '"/><stop offset="1" stop-color="' + u.cool + '" stop-opacity="0"/></radialGradient><filter id="' + n + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + mu + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + n + 'c)">' + M("url(#" + n + "l)") + M("url(#" + n + "w)") + M("url(#" + n + "k)") + (A ? '<g opacity="' + va(l.ghostAlpha) + '">' + A + "</g>" : "") + k.body + '<rect x="14" y="14" width="172" height="' + k.head + '" fill="' + wd + '" filter="url(#' + n + 's)"/></g>' + (I ? '<g clip-path="url(#' + n + 'c)" opacity="' + va(l.grip) + '">' + I.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + mu + '" stroke-width="3"/>' + (I ? '<g opacity="' + va(l.grip) + '">' + I.knobs + "</g>" : "") + "</svg>";
}
function lg({ onMove: n, onSet: l }) {
  var oe;
  const i = "cv" + ++Qm, u = document.createElement("div");
  u.className = "tfCoverArt";
  const v = (oe = window.matchMedia) == null ? void 0 : oe.call(window, "(pointer: coarse)").matches;
  let x = null;
  const k = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let A = 0, I = !1, M = !1, W = null, F = 0, V = 0;
  const G = () => (x == null ? void 0 : x.kind) === "curtain" ? "x" : "y", pe = () => W || I || M || x.moving || x.target != null ? 1 : v ? performance.now() < V ? 1 : 0.4 : 0, ee = () => {
    u.innerHTML = sg(i, { kind: x.kind, pos: k.pos, bar: x.target ?? k.pos, tilt: k.tilt, vel: k.vel, ph: k.ph, ghost: k.gpos, ghostAlpha: k.ghost, grip: k.grip });
  };
  function J(ne) {
    A = 0;
    const te = k.last ? Math.min(0.064, (ne - k.last) / 1e3) : 1 / 60, E = te * 60;
    k.last = ne;
    const Ce = x.pos - k.pos, le = k.pos;
    k.pos += Math.sign(Ce) * Math.min(Math.abs(Ce), Math.max(10.5, Math.abs(Ce) * 1.4) * te), Math.abs(x.pos - k.pos) < 0.03 && (k.pos = x.pos), k.vel = k.vel * 0.86 + (k.pos - le) / E * 0.14, Math.abs(k.vel) < 0.015 && k.pos === x.pos && (k.vel = 0), (k.pos !== le || k.vel) && (k.ph += (0.06 + Math.abs(k.vel) * 0.03) * E);
    const qe = x.tilt - k.tilt;
    k.tilt += Math.sign(qe) * Math.min(Math.abs(qe), Math.max(60, Math.abs(qe) * 4) * te);
    const ie = pe();
    k.grip += (ie - k.grip) * Math.min(1, te * (ie > k.grip ? 11 : 3.5)), Math.abs(ie - k.grip) < 0.01 && (k.grip = ie);
    const Ze = x.target != null && Math.abs(x.target - k.pos) > 0.5 ? 0.22 : 0;
    x.target != null && (k.gpos = x.target), k.ghost += (Ze - k.ghost) * Math.min(1, te * (Ze > k.ghost ? 16 : 3)), Math.abs(Ze - k.ghost) < 4e-3 && (k.ghost = Ze), ee(), k.pos !== x.pos || k.vel || k.tilt !== x.tilt || k.grip !== ie || k.ghost !== Ze ? A = requestAnimationFrame(J) : k.last = 0;
  }
  const U = () => {
    x && !A && (A = requestAnimationFrame(J));
  }, me = setInterval(() => {
    x && !A && ee();
  }, 60 * 1e3), ce = (ne) => {
    const te = u.getBoundingClientRect();
    return G() === "x" ? (ne.clientX - te.left) / te.width : (ne.clientY - te.top) / te.height;
  };
  u.addEventListener("pointerdown", (ne) => {
    var Ce;
    if (!(x != null && x.canSet) || ne.button > 0) return;
    ne.preventDefault(), (Ce = u.setPointerCapture) == null || Ce.call(u, ne.pointerId);
    const te = x.target ?? x.pos, E = u.getBoundingClientRect();
    W = { p0: ce(ne), from: te, x0: ne.clientX, value: null, side: null }, x.kind === "curtain" && te > 0 && (W.side = (ne.clientX - E.left) / E.width < 0.5 ? "L" : "R"), U();
  }), u.addEventListener("pointermove", (ne) => {
    if (!W) return;
    let te;
    if (x.kind === "curtain") {
      if (!W.side) {
        const Ce = ne.clientX - W.x0;
        if (Math.abs(Ce) < 4) return;
        W.side = Ce < 0 ? "L" : "R";
      }
      const E = (jt / 2 - jt * 0.12) / 200;
      te = W.from + (W.side === "L" ? -1 : 1) * ((ce(ne) - W.p0) / E) * 100;
    } else te = W.from - (ce(ne) - W.p0) / (jt / 200) * 100;
    W.value = Ni(te, 0, 100), n(W.value);
  });
  const ke = () => {
    if (!W) return;
    const ne = W.value;
    W = null, ne != null && l(Math.round(ne)), U();
  };
  return u.addEventListener("pointerup", ke), u.addEventListener("pointercancel", ke), u.addEventListener("lostpointercapture", ke), u.addEventListener("pointerenter", () => {
    I = !0, U();
  }), u.addEventListener("pointerleave", () => {
    I = !1, U();
  }), u.addEventListener("focus", () => {
    M = u.matches(":focus-visible"), U();
  }), u.addEventListener("blur", () => {
    M = !1, U();
  }), u.addEventListener("keydown", (ne) => {
    if (!(x != null && x.canSet)) return;
    const te = Math.round(x.target ?? x.pos), E = ne.shiftKey ? 10 : 1, Ce = { ArrowUp: te + E, ArrowRight: te + E, ArrowDown: te - E, ArrowLeft: te - E, PageUp: te + 25, PageDown: te - 25, Home: 0, End: 100 }[ne.key];
    if (Ce == null) return;
    ne.preventDefault();
    const le = Ni(Ce, 0, 100);
    n(le), clearTimeout(F), F = setTimeout(() => l(le), 500);
  }), {
    el: u,
    update(ne) {
      const te = !x;
      x = ne, te && (k.pos = x.pos, k.tilt = x.tilt, V = performance.now() + 1500, v && setTimeout(U, 1600)), u.classList.toggle("x", G() === "x"), u.classList.toggle("y", G() === "y"), x.canSet ? (u.tabIndex = 0, u.setAttribute("role", "slider"), u.setAttribute("aria-valuemin", "0"), u.setAttribute("aria-valuemax", "100"), u.setAttribute("aria-valuenow", String(Math.round(x.target ?? x.pos))), u.setAttribute("aria-orientation", G() === "x" ? "horizontal" : "vertical")) : u.setAttribute("role", "img"), u.setAttribute("aria-label", x.name + (x.canSet ? " position" : "")), u.setAttribute("aria-valuetext", x.text), U();
    },
    destroy() {
      cancelAnimationFrame(A), A = 0, clearInterval(me), clearTimeout(F), u.remove();
    }
  };
}
const bu = "move-assistant-density", Bi = {
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
}, X = (n) => String(n ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), up = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', wu = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', xu = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', cc = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, yu = {
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14v2H5z"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>'
}, ku = 1, dg = 4, Mu = 16, Su = 32, cg = 128, pg = 256, Cu = 16384, ug = 1, fg = 2, Tu = 4, hg = 8, mg = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, Lu = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, gg = { curtain: "curtains", blind: "blind", venetian: "blinds" }, md = {
  light: { name: "Lights", icon: "mdi:lightbulb", colour: "#ffc107" },
  climate: { name: "Climate", icon: "mdi:home-thermometer", colour: "#ff5722" },
  security: { name: "Security", icon: "mdi:security", colour: "#607d8b" },
  media_players: { name: "Media players", icon: "mdi:multimedia", colour: "#2196f3" },
  maintenance: { name: "Maintenance", icon: "mdi:wrench", colour: "#9e9e9e" },
  energy: { name: "Energy", icon: "mdi:lightning-bolt", colour: "#ffc107" },
  // more to choose from (the leadership demo, Matt, 9 Nov), all off until switched on in Edit Home page
  covers: { name: "Covers", icon: "mdi:blinds-horizontal", colour: "#9c27b0" },
  people: { name: "People", icon: "mdi:account-multiple", colour: "#03a9f4" },
  openings: { name: "Doors and windows", icon: "mdi:door-open", colour: "#ff9800" },
  leaks: { name: "Leaks", icon: "mdi:water", colour: "#2196f3" },
  vacuum: { name: "Vacuum", icon: "mdi:robot-vacuum", colour: "#4caf50" }
}, Au = ["covers", "people", "openings", "leaks", "vacuum"], Eu = "move_assistant_house", Du = "move-assistant-house-used", fp = ["switch", "fan", "input_boolean", "automation"], _u = "move-assistant-house-look", vg = [["look", "Look"], ["house", "House page"], ["weather", "Weather"]], bg = [["popup", "Popup"], ["sheet", "Sheet"]], wg = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], xg = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], yg = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], pc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', kg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', Mg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', Ru = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', hp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', Sg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z"/></svg>', Bu = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/></svg>', uc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>', Pu = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', Sf = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + n.map((l) => '<path d="' + l + '"/>').join("") + "</svg>", fc = Sf(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), Nu = Sf(["M20 6L9 17L4 12"]), Pi = (n, l = "") => '<span class="tfAreaGlyph" data-icon-for="' + X(n || "") + '"' + (l ? ' data-icon-name="' + X(l) + '"' : "") + "></span>", Cg = (n) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (n ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', Tg = 1, Lg = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], Hu = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, hc = ["door", "window", "garage_door", "opening"], Iu = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, gd = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], Ag = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], Eg = 10, Dg = 20, _g = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, Rg = ["living room", "bedroom", "office"];
function Bg(n, { config: l, getHass: i }) {
  var Xd, Jd, Dp;
  const u = (e) => n.getElementById(e), v = u("app"), x = l || {}, k = String(x.layout || "").toLowerCase().replace("_", "-") === "test-focus", A = String(x.page || "").toLowerCase() === "overview";
  let I = Bi.get(bu) === "1", M = {};
  const W = (e) => {
    var t;
    return (t = i()) == null ? void 0 : t.callWS(e);
  }, F = (e, t, o) => W({ type: "call_service", domain: e, service: t, service_data: o }), V = n.querySelector("#appearancePane .toggleList");
  V && !u("densityToggle") && (V.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), u("densityToggle").addEventListener("click", () => {
    I = !I, Bi.set(bu, I ? "1" : "0"), te();
  }));
  const G = [
    ["weather", "Weather", "The forecast under Home.", (e) => e.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (e) => e.startsWith("sensor.") && wt(e).device_class === "power" && /^(W|kW)$/.test(wt(e).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (e) => e.startsWith("alarm_control_panel.")]
  ], pe = (e, t, o, r) => '<div class="themeChoice" id="' + e + '" role="group" aria-label="' + t + '">' + r.map(([c, h]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + o + '="' + c + '">' + h + "</button>").join("") + "</div>", ee = (e, t, o, r) => '<div class="toggleRow"' + (r ? ' id="' + r + '"' : "") + "><div><strong>" + e + "</strong>" + (t ? '<div class="status">' + t + "</div>" : "") + "</div>" + o + "</div>";
  function J() {
    var N, ae;
    if (!k || u("housePane")) return;
    const e = u("settingsView");
    e.querySelector(".settingsTitle").textContent = "HomeCore settings";
    const t = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], o = (re, z) => '<div class="houseTab' + (re === "look" ? " active" : "") + '" data-house-pane="' + re + '"><section class="card">' + z + "</section></div>";
    e.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + t.map(([re, z]) => '<button class="tab segBtn' + (re === "look" ? " active" : "") + '" type="button" data-house-tab="' + re + '">' + z + "</button>").join("") + "</div>" + // Appearance in groups (Matt, 8 Nov), each one's title inside its card as a card header (Matt, 9 Nov)
    o("look", vg.map(([re, z]) => '<div class="tfSetGroup"><div class="toggleList" data-look-group="' + re + '"><div class="tfCardTitle">' + z + "</div></div></div>").join("")) + // Lights as cards by default, with a Cards | Table choice (Matt, 9 Nov)
    o("lights", '<div class="tfLightView"><div class="themeChoice" role="group" aria-label="Show lights as"><button class="wxLayoutBtn" type="button" data-light-view="cards">Cards</button><button class="wxLayoutBtn" type="button" data-light-view="table">Table</button></div></div><p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div><div class="tfLightCards" id="lightCards"></div>') + o("sources", '<div class="toggleList">' + G.map(([re, z, se]) => ee(z, se, '<select class="settingsSelect" data-source="' + re + '" aria-label="' + z + '"></select>')).join("") + "</div>") + o("sums", '<div class="toggleList">' + Object.entries(md).map(([re, z]) => ee(z.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + re + '" aria-label="' + z.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const r = (re) => e.querySelector('[data-look-group="' + re + '"]'), c = (re) => re == null ? void 0 : re.closest(".toggleRow");
    [c(e.querySelector(".themeBtn"))].forEach((re) => re && r("look").appendChild(re));
    const h = c(u("densityToggle"));
    h && (h.hidden = !0), [c(u("moreInfoChoice")), c(u("namesChoice"))].forEach((re) => re && r("house").appendChild(re)), r("house").insertAdjacentHTML("beforeend", ee("Lights", "How lights show on the house page.", pe("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + ee("Pad", "What the Dual Axis Controller’s pad sets on its tile.", pe("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow")), [c(u("hoursChoice")), c(u("wxStyleChoice"))].forEach((re) => re && r("weather").appendChild(re));
    const p = u("housePane"), g = p.querySelector(".houseTabs"), w = g.querySelector(".rubberIndicator"), D = "homecore-light-view", P = (re) => {
      p.classList.toggle("tfLightCardsOn", re === "cards"), p.querySelectorAll("[data-light-view]").forEach((z) => z.setAttribute("aria-pressed", String(z.dataset.lightView === re))), Bi.set(D, re);
    };
    P(Bi.get(D) === "table" ? "table" : "cards"), p.querySelector(".tfLightView").addEventListener("click", (re) => {
      const z = re.target.closest("[data-light-view]");
      z && P(z.dataset.lightView);
    }), new ResizeObserver(() => me()).observe(p), (ae = (N = document.fonts) == null ? void 0 : N.ready) == null || ae.then(() => me());
    const L = (re) => {
      const z = g.querySelector(".tab.active");
      w.style.transition = "none", re ? bc(w, w.offsetLeft, w.offsetWidth, z.offsetLeft, z.offsetWidth) : (w.style.left = z.offsetLeft + "px", w.style.width = z.offsetWidth + "px");
    };
    new ResizeObserver(() => L(!1)).observe(g), p.addEventListener("click", (re) => {
      const z = re.target.closest("[data-house-tab]");
      if (z) {
        g.querySelectorAll(".tab").forEach(($) => $.classList.toggle("active", $ === z)), p.querySelectorAll(".houseTab").forEach(($) => $.classList.toggle("active", $.dataset.housePane === z.dataset.houseTab)), z.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), L(!0), me();
        return;
      }
      const se = re.target.closest("[data-light-fav]");
      if (se) {
        fs(se.dataset.lightFav);
        return;
      }
      const j = re.target.closest("[data-light-pick]");
      if (j) {
        const [$, Ve] = j.dataset.lightPick.split("|"), Ht = { ...Ye[$] };
        j.dataset.v ? Ht[Ve] = j.dataset.v : delete Ht[Ve], Ye[$] = Ht, ht(), [...sn.keys()].filter((it) => it.endsWith(":" + Ve)).forEach((it) => sn.delete(it)), ao();
        return;
      }
      const xe = re.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!xe || xe.disabled)) {
        if (xe.dataset.lights && (Ye.lights = xe.dataset.lights), xe.dataset.dacPad && (Ye.dacPad = xe.dataset.dacPad), (xe.dataset.lights || xe.dataset.dacPad) && (ht(), sn.clear()), xe.dataset.sumToggle) {
          const $ = xe.dataset.sumToggle, Ve = new Set(Ie.hiddenSums || []);
          Ve.has($) ? Ve.delete($) : Ve.add($), Ie = { ...Ie, hiddenSums: [...Ve] }, oo();
        }
        ao();
      }
    }), p.addEventListener("change", (re) => {
      const z = re.target;
      z.dataset.source && (Ie = { ...Ie, sources: { ...Ie.sources || {}, [z.dataset.source]: z.value || void 0 } }, oo());
      const se = z.dataset.lightStyle || z.dataset.lightPad;
      if (se) {
        const j = z.dataset.lightStyle ? "lightStyles" : "lightPads", xe = { ...Ye[j] };
        z.value ? xe[se] = z.value : delete xe[se], Ye[j] = xe, ht(), [...sn.keys()].filter(($) => $.endsWith(":" + se)).forEach(($) => sn.delete($));
      }
      ao();
    });
  }
  function U() {
    var L, N;
    Ui() && hi();
    const e = u("housePane");
    if (!e) return;
    const t = !!customElements.get(ka);
    e.querySelectorAll("[data-lights]").forEach((ae) => ae.setAttribute("aria-pressed", String(ae.dataset.lights === Ye.lights))), u("lightsRow").querySelector(".status").textContent = t || !Ui() ? "How lights show on the house page." : zo === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", e.querySelectorAll("[data-dac-pad]").forEach((ae) => ae.setAttribute("aria-pressed", String(ae.dataset.dacPad === Ye.dacPad))), u("dacPadRow").hidden = !Ui();
    for (const ae of e.querySelectorAll("[data-source]")) {
      if (ae === n.activeElement) continue;
      const [re] = G.find(([se]) => se === ae.dataset.source), z = Object.keys(M).filter(G.find(([se]) => se === re)[3]).sort((se, j) => Be(se).localeCompare(Be(j)));
      ae.dataset.sig !== z.join(",") && (ae.innerHTML = '<option value="">Automatic</option>' + z.map((se) => '<option value="' + X(se) + '">' + X(Be(se)) + "</option>").join(""), ae.dataset.sig = z.join(",")), ae.value = z.includes((L = Ie.sources) == null ? void 0 : L[re]) ? Ie.sources[re] : "";
    }
    e.querySelectorAll("[data-sum-toggle]").forEach((ae) => {
      const re = !(Ie.hiddenSums || []).includes(ae.dataset.sumToggle);
      ae.classList.toggle("on", re), ae.setAttribute("aria-checked", String(re));
    });
    const o = u("lightRows"), r = u("lightCards"), c = n.activeElement, h = o != null && o.contains(c) || r != null && r.contains(c) ? c : null;
    if (!o || h != null && h.matches("select")) {
      me();
      return;
    }
    const p = new Set(Ne()), g = (ae, re, z, se) => '<option value="' + ae + '"' + (ae === z ? " selected" : "") + ">" + re + "</option>", w = Object.keys(M).filter((ae) => ae.startsWith("light.")).sort((ae, re) => !pt.get(ae) - !pt.get(re) || (pt.get(ae) || "").localeCompare(pt.get(re) || "") || Be(ae).localeCompare(Be(re))).map((ae) => {
      const re = Ye.lightStyles[ae] || "", z = Ye.lightPads[ae] || "", se = p.has(ae), j = X(Be(ae));
      return "<tr><td><strong>" + j + "</strong></td><td>" + X(pt.get(ae) || "—") + "</td><td>" + X(Yt(ae)) + '</td><td class="metaSwitchCol"><button class="switch' + (se ? " on" : "") + '" type="button" role="switch" aria-checked="' + se + '" data-light-fav="' + X(ae) + '" aria-label="' + j + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + X(ae) + '" aria-label="' + j + ' tile">' + g("", "Default", re) + g("tile", "HomeCore tile", re) + g("dac", "Dual Axis Controller", re) + '</select></td><td><select class="settingsSelect" data-light-pad="' + X(ae) + '" aria-label="' + j + ' pad"' + (Gi(ae) ? "" : " disabled") + ">" + g("", "Default", z) + g("temperature", "Temperature", z) + g("colour", "Colour", z) + "</select></td></tr>";
    }).join(""), D = (ae, re, z, se, j) => '<div class="themeChoice" role="group" aria-label="' + z + '">' + se.map(([xe, $]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (xe === j) + '" data-light-pick="' + ae + "|" + X(re) + '" data-v="' + xe + '">' + $ + "</button>").join("") + "</div>", P = Object.keys(M).filter((ae) => ae.startsWith("light.")).sort((ae, re) => !pt.get(ae) - !pt.get(re) || (pt.get(ae) || "").localeCompare(pt.get(re) || "") || Be(ae).localeCompare(Be(re))).map((ae) => {
      const re = p.has(ae), z = X(Be(ae)), se = [pt.get(ae), Yt(ae)].filter(Boolean).map(X).join(" · ");
      return '<div class="toggleList"><div class="toggleRow"><div><strong>' + z + '</strong><div class="status">' + se + "</div></div></div>" + ee("Favourite", "", '<button class="switch' + (re ? " on" : "") + '" type="button" role="switch" aria-checked="' + re + '" data-light-fav="' + X(ae) + '" aria-label="' + z + ' is a favourite"></button>') + ee("Tile", "", D("lightStyles", ae, z + " tile", [["", "Default"], ["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]], Ye.lightStyles[ae] || "")) + (Gi(ae) ? ee("Pad", "", D("lightPads", ae, z + " pad", [["", "Default"], ["temperature", "Temperature"], ["colour", "Colour"]], Ye.lightPads[ae] || "")) : "") + "</div>";
    }).join("");
    o.dataset.html !== w && (o.innerHTML = w, o.dataset.html = w), r.dataset.html !== P && (r.innerHTML = P, r.dataset.html = P), h != null && h.dataset.lightFav && ((N = (r.contains(h) ? r : o).querySelector('[data-light-fav="' + CSS.escape(h.dataset.lightFav) + '"]')) == null || N.focus({ preventScroll: !0 })), me();
  }
  function me() {
    var t, o, r;
    const e = u("housePane");
    if (e)
      for (const c of e.querySelectorAll(".themeChoice")) {
        const h = [...c.querySelectorAll("button")];
        let p = (t = c.nextElementSibling) != null && t.classList.contains("tfChoiceList") ? c.nextElementSibling : null;
        if (!p) {
          p = document.createElement("select"), p.className = "settingsSelect tfChoiceList", p.setAttribute("aria-label", c.getAttribute("aria-label") || ((r = (o = c.closest(".toggleRow")) == null ? void 0 : o.querySelector("strong")) == null ? void 0 : r.textContent) || ""), p.addEventListener("change", () => {
            var L;
            return (L = h[Number(p.value)]) == null ? void 0 : L.click();
          }), c.after(p);
          const P = () => {
            p.innerHTML = h.map((N, ae) => '<option value="' + ae + '"' + (N.disabled ? " disabled" : "") + ">" + X(N.textContent) + "</option>").join("");
            const L = h.findIndex((N) => N.getAttribute("aria-pressed") === "true" || N.classList.contains("active"));
            L >= 0 && (p.value = String(L));
          };
          new MutationObserver(P).observe(c, { subtree: !0, attributes: !0, attributeFilter: ["aria-pressed", "class", "disabled"] }), P();
        }
        const g = (P) => {
          c.hidden !== !P && (c.hidden = !P), p.hidden !== P && (p.hidden = P);
        };
        if (h.length > 3) {
          g(!1);
          continue;
        }
        if (!c.getClientRects().length && !p.getClientRects().length) {
          p.dataset.fit || g(!0);
          continue;
        }
        const w = c.hidden;
        c.hidden = !1;
        const D = h.every((P) => P.scrollWidth <= P.clientWidth + 1);
        c.hidden = w, g(D), p.dataset.fit = "1";
      }
  }
  const ce = document.createElement("div");
  ce.className = "densityBadge", ce.setAttribute("aria-live", "polite"), ce.hidden = !0, v.appendChild(ce);
  let ke = 0;
  function oe() {
    if (!I) return;
    const e = u("homeView"), t = (h) => h.offsetParent !== null && !h.closest("[hidden]");
    e.querySelectorAll(":scope .card, :scope .tfAction").forEach((h) => {
      t(h) && (h.dataset.h = Math.round(h.getBoundingClientRect().height) + " px");
    });
    const o = [...e.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(t), r = window.innerHeight, c = o.filter((h) => {
      const p = h.getBoundingClientRect();
      return p.height > 0 && p.top >= 0 && p.bottom <= r + 0.5;
    }).length;
    ce.hidden = !e.classList.contains("active"), ce.innerHTML = "<b>" + c + "</b><small>of " + o.length + " readings on screen</small>";
  }
  const ne = () => {
    I && requestAnimationFrame(oe);
  };
  function te() {
    var e;
    v.classList.toggle("showDensity", I), (e = u("densityToggle")) == null || e.classList.toggle("on", I), ce.hidden = !I, clearInterval(ke), I && (ke = setInterval(oe, 1e3), oe());
  }
  window.addEventListener("scroll", ne, { capture: !0, passive: !0 }), window.addEventListener("resize", ne, { passive: !0 });
  const E = n.querySelector("#homeView .grid"), Ce = document.createElement("style");
  n.appendChild(Ce);
  const le = new ResizeObserver(() => Ze()), qe = /* @__PURE__ */ new Set(), ie = (e) => {
    const t = e.getBoundingClientRect().height;
    return Math.abs(t - e.offsetHeight) < 1 ? t : e.offsetHeight;
  };
  function Ze() {
    const e = v.classList.contains("tfAreaOpen") && !v.classList.contains("tfWeatherOpen");
    if (E.classList.toggle("tfStack", e), qe.forEach((w) => {
      (!e || !w.isConnected) && (le.unobserve(w), qe.delete(w));
    }), !e) {
      Ce.textContent = "";
      return;
    }
    const t = getComputedStyle(E), o = parseFloat(t.columnGap) || 0, r = t.gridTemplateColumns.split(" ").length, c = [...E.children].filter((w) => w.dataset.k && w.offsetParent);
    Ce.disabled = !0;
    const h = c.map((w) => {
      const D = getComputedStyle(w), P = /span (\d+)/.exec(D.gridColumnStart + " " + D.gridColumnEnd);
      return Math.min(r, P ? +P[1] : D.gridColumnEnd === "-1" ? r : 1);
    });
    Ce.disabled = !1;
    let p = 0;
    const g = c.map((w, D) => {
      qe.has(w) || (qe.add(w), le.observe(w));
      const P = h[D];
      p + P > r && (p = 0);
      const L = p + 1;
      return p = (p + P) % r, '#homeView .grid.tfStack>[data-k="' + CSS.escape(w.dataset.k) + '"]{grid-column:' + L + " / span " + P + ";grid-row-end:span " + Math.max(1, Math.ceil(ie(w) + o)) + "}";
    }).join(`
`);
    Ce.textContent !== g && (Ce.textContent = g);
  }
  new MutationObserver(Ze).observe(E, { childList: !0 }), new MutationObserver(Ze).observe(v, { attributes: !0, attributeFilter: ["class"] });
  let T = null, B = null, q = null, R = null;
  const de = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), Se = 6;
  let Te = null;
  const $e = /* @__PURE__ */ new Map(), tt = /* @__PURE__ */ new Map(), Za = /* @__PURE__ */ new Map();
  let Ie = { favourites: null }, ho = {}, Yn = {}, mo = [], ra = null;
  const Xe = (() => {
    try {
      return JSON.parse(Bi.get(Du)) || {};
    } catch {
      return {};
    }
  })();
  let pt = /* @__PURE__ */ new Map(), on = 0;
  function oo() {
    clearTimeout(on), on = setTimeout(() => Promise.resolve(W({ type: "frontend/set_user_data", key: Eu, value: Ie })).catch(() => {
    }), 400);
  }
  const Ye = (() => {
    let e = {};
    try {
      e = JSON.parse(Bi.get(_u)) || {};
    } catch {
    }
    const t = (o, r) => Object.fromEntries(Object.entries(o || {}).filter(([, c]) => r.includes(c)));
    return {
      more: e.more === "sheet" ? "sheet" : "popup",
      names: e.namesPicked && ["auto", "cut", "wrap", "scroll"].includes(e.names) ? e.names : "scroll",
      namesPicked: !!e.namesPicked,
      hoursWindow: ["day", "waking", "all"].includes(e.hoursWindow) ? e.hoursWindow : "day",
      wxStyle: ["bitmap", "onebit", "smooth", "line"].includes(e.wxStyle) ? e.wxStyle : "bitmap",
      lights: e.lights === "dac" ? "dac" : "tile",
      dacPad: e.dacPad === "colour" ? "colour" : "temperature",
      lightStyles: t(e.lightStyles, ["tile", "dac"]),
      lightPads: t(e.lightPads, ["temperature", "colour"])
    };
  })(), ht = () => Bi.set(_u, JSON.stringify(Ye)), Tt = () => {
    v.dataset.more = Ye.more, v.dataset.names = Ye.names, ml();
  };
  k && V && !u("moreInfoChoice") && (u("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + bg.map(([e, t]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Ye.more === e) + '" data-more-style="' + e + '">' + t + "</button>").join("") + "</div></div>"
  ), u("moreInfoChoice").addEventListener("click", (e) => {
    const t = e.target.closest("[data-more-style]");
    t && (Ye.more = t.dataset.moreStyle, ht(), Tt(), u("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === t))));
  }), u("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + wg.map(([e, t]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Ye.names === e) + '" data-names-style="' + e + '">' + t + "</button>").join("") + "</div></div>"
  ), u("namesChoice").addEventListener("click", (e) => {
    const t = e.target.closest("[data-names-style]");
    t && (Ye.names = t.dataset.namesStyle, Ye.namesPicked = !0, ht(), Tt(), u("namesChoice").querySelectorAll("[data-names-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === t))));
  }), u("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + xg.map(([e, t]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Ye.hoursWindow === e) + '" data-hours-window="' + e + '">' + t + "</button>").join("") + "</div></div>"
  ), u("hoursChoice").addEventListener("click", (e) => {
    const t = e.target.closest("[data-hours-window]");
    t && (Ye.hoursWindow = t.dataset.hoursWindow, ht(), $t == null || $t.refresh(), u("hoursChoice").querySelectorAll("[data-hours-window]").forEach((o) => o.setAttribute("aria-pressed", String(o === t))));
  }), u("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + yg.map(([e, t]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Ye.wxStyle === e) + '" data-wx-style="' + e + '">' + t + "</button>").join("") + "</div></div>"
  ), u("wxStyleChoice").addEventListener("click", (e) => {
    const t = e.target.closest("[data-wx-style]");
    t && (Ye.wxStyle = t.dataset.wxStyle, ht(), $t == null || $t.setStyle(Ye.wxStyle), wa == null || wa.forEach((o) => o.setStyle(Ye.wxStyle)), u("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === t))));
  })), J();
  let mt = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const wn = /* @__PURE__ */ new Map();
  let ns = "";
  const Dn = k ? rh({ onChange: () => ma() }) : null;
  k && v.classList.add("house");
  const vt = Object.assign(document.createElement("div"), { className: "tfBento" });
  let $t = null, os = null, Po = !1;
  function is(e) {
    const t = Dt();
    if (v.classList.toggle("houseBento", !!t), $t && (os !== t || e == null) && ($t.destroy(), $t = null), !t || e == null) {
      vt.remove();
      return;
    }
    vt.isConnected || E.append(vt), vt.style.order = e, !$t && !Po && ($t = hu(vt, { getHass: i, entityId: t, style: Ye.wxStyle, hoursWindow: () => Ye.hoursWindow }), os = t);
  }
  const Qt = [
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
  ], go = Qt.map(([e]) => e), nt = ["aq", "pollen", "radar", "hourly", "sun", "moon", "uv", "humidity", "pressure", "wind", "visibility"], Ml = { hourly: 2 }, Zn = Object.fromEntries(Qt.map(([e]) => [e, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + e })]));
  let wa = null, Ke = null;
  function dt(e) {
    const t = Dt();
    wa && Ke !== t && (wa.forEach((o) => o.destroy()), wa = null), Object.values(Zn).forEach((o) => t ? !o.isConnected && E.append(o) : o.remove()), t && !wa && !Po && (wa = /* @__PURE__ */ new Map(), Ke = t), xa();
  }
  function xa() {
    if (!wa || Po) return;
    const e = new Set(St().hidden);
    Qt.forEach(([t, o]) => {
      wa.has(t) || e.has(t) && !(_t != null && _t.fromTray && _t.key === t) || wa.set(t, hu(Zn[t], { getHass: i, entityId: Ke, style: Ye.wxStyle, cards: o, onOpen: t === "wx" ? () => Yr("weather") : void 0 }));
    });
  }
  const wt = (e) => {
    var t;
    return ((t = M[e]) == null ? void 0 : t.attributes) || {};
  }, Be = (e) => wt(e).friendly_name || e, At = (e, t) => Ri(e) || (Number(wt(e).supported_features) & t) === t, Et = (e) => {
    const t = String(e ?? "").replace(/_/g, " ");
    return t.charAt(0).toUpperCase() + t.slice(1);
  }, Ot = (e, t = 1) => Number(e).toLocaleString(void 0, { minimumFractionDigits: t, maximumFractionDigits: t }), _n = (e) => (e == null ? void 0 : e.state) === "on" ? e.attributes.brightness != null ? Math.max(1, Math.round(e.attributes.brightness / 2.55)) : 100 : 0, rs = (e) => wt(e).supported_color_modes || [], yr = (e, t) => [5, 3, 1].map((o) => {
    const r = (o + e / 60) % 6;
    return 255 * (1 - t / 100 * Math.max(0, Math.min(r, 4 - r, 1)));
  }), Ba = (e) => (e /= 255, e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)), vo = (e) => 0.2126 * Ba(e[0]) + 0.7152 * Ba(e[1]) + 0.0722 * Ba(e[2]), kr = (e, t) => {
    const o = vo(e), r = vo(t);
    return (Math.max(o, r) + 0.05) / (Math.min(o, r) + 0.05);
  }, ss = 0.55, bo = ["hs", "xy", "rgb", "rgbw", "rgbww"], Ws = (e) => {
    const t = wt(e), o = bo.includes(t.color_mode);
    return (o && t.rgb_color ? t.rgb_color : o && t.hs_color ? yr(...t.hs_color) : [255, 170, 0]).map((r) => Math.round(Math.max(0, Math.min(255, r))));
  }, Hi = { heat: [255, 111, 34], cool: [33, 150, 243], heat_cool: [255, 193, 7], auto: [76, 175, 80], dry: [255, 152, 0], fan_only: [0, 188, 212] };
  function wo(e) {
    var r;
    const t = e.split(".")[0], o = (r = M[e]) == null ? void 0 : r.state;
    return !o || o === "unavailable" || o === "unknown" ? null : t === "light" ? o === "on" ? Ws(e) : null : t === "climate" ? Hi[o] || null : t === "cover" ? o !== "closed" ? [146, 107, 199] : null : t === "lock" ? o !== "locked" ? [244, 67, 54] : null : t === "media_player" ? ["playing", "paused", "on", "buffering"].includes(o) ? [3, 169, 244] : null : t === "humidifier" || t === "valve" ? ["on", "open", "opening", "closing"].includes(o) ? [33, 150, 243] : null : t === "vacuum" ? ["cleaning", "returning"].includes(o) ? [0, 150, 136] : null : t === "alarm_control_panel" ? o !== "disarmed" && o !== "triggered" ? [76, 175, 80] : null : t === "fan" ? o === "on" ? [0, 188, 212] : null : (t === "switch" || t === "input_boolean") && o === "on" ? [255, 193, 7] : null;
  }
  function Ii(e, t, o = !1) {
    const [r, c, h] = e.map((re) => re / 255), p = Math.max(r, c, h), g = Math.min(r, c, h), w = p - g, D = w ? (p === r ? (c - h) / w + (c < h ? 6 : 0) : p === c ? (h - r) / w + 2 : (r - c) / w + 4) * 60 : 0, P = (p + g) / 2, L = w ? w / (1 - Math.abs(2 * P - 1)) : 0, N = w < 0.1 ? Math.min(L, 0.25) : 1, ae = (re) => {
      const z = (j) => (j + D / 30) % 12, se = N * Math.min(re, 1 - re);
      return [0, 8, 4].map((j) => Math.round(255 * (re - se * Math.max(-1, Math.min(z(j) - 3, 9 - z(j), 1)))));
    };
    for (let re = 0.5; o ? re < 0.96 : re > 0.04; re += o ? 0.01 : -0.01) {
      const z = ae(re);
      if (kr(z, t) >= 3) return "rgb(" + z.join(",") + ")";
    }
    return o ? "#ffffff" : "#26221e";
  }
  const Fi = (e) => {
    const t = [1, 3, 5].map((o) => parseInt(e.slice(o, o + 2), 16));
    return Math.max(...t) - Math.min(...t) < 26 ? "" : ";--sum-d:" + Ii(t, [58, 58, 58], !0) + ";--sum-l:" + Ii(t, [230, 230, 230]);
  }, Mr = { d: ["#ffb894", "#d2b4ff", "#9dcbff"], l: ["#f0946a", "#b48ae6", "#6fa8e8"] }, Sl = () => [0, 1, 2].map((e) => "--g" + e + "-d:" + Mr.d[e] + ";--g" + e + "-l:" + Mr.l[e]).join(";"), Ut = '<svg class="tfGradDefs" aria-hidden="true" focusable="false"><defs><linearGradient id="hcClimateGrad" x1="0" y1="0" x2="0" y2="1">' + [0.15, 0.5, 0.85].map((e, t) => '<stop offset="' + e + '" style="stop-color:var(--g' + t + ')"/>').join("") + "</linearGradient></defs></svg>", Rn = (e) => {
    const t = e.map((o) => Math.round(o + (255 - o) * ss));
    return "--light-soft:rgb(" + t.join(",") + ");--light-ink:" + Ii(e, t);
  }, No = (e) => Rn(Ws(e)), di = (e) => {
    const t = wo(e);
    return t ? ' data-light style="' + Rn(t) + '"' : "";
  }, ja = (e) => {
    const t = rs(e);
    return t.length ? t.some((o) => o !== "onoff") : wt(e).brightness != null;
  }, ya = (e) => [wt(e).min_color_temp_kelvin || 2e3, wt(e).max_color_temp_kelvin || 6500], fa = (e) => new Date(e).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function Vs(e) {
    const t = Math.max(1, Math.round((Date.now() - e) / 1e3));
    if (t < 10) return "Just now";
    if (t < 60) return t + " seconds ago";
    const o = Math.round(t / 60);
    if (o < 60) return o + (o === 1 ? " minute ago" : " minutes ago");
    const r = Math.round(o / 60);
    if (r < 24) return r + (r === 1 ? " hour ago" : " hours ago");
    const c = Math.round(r / 24);
    return c + (c === 1 ? " day ago" : " days ago");
  }
  const Kn = (e) => {
    var t;
    return wt(e).current_position ?? (((t = M[e]) == null ? void 0 : t.state) === "closed" ? 0 : 100);
  }, ci = (e) => {
    var t;
    return cn("pos", e, ((t = $e.get(e)) == null ? void 0 : t.pos) ?? Kn(e));
  }, Ho = (e) => {
    var t;
    return cn("tilt", e, ((t = $e.get(e)) == null ? void 0 : t.tilt) ?? wt(e).current_tilt_position);
  };
  function Yt(e) {
    var p;
    const t = M[e];
    if (!t) return "Not found";
    if (t.state === "unavailable") return "Unavailable";
    const o = t.attributes, r = e.split(".")[0];
    if (r === "light") {
      if (t.state !== "on") return "Off";
      const g = o.color_temp_kelvin;
      return (ja(e) ? _n(t) + "%" : "On") + (o.color_mode === "color_temp" && g ? " · " + Number(g).toLocaleString() + "k" : bo.includes(o.color_mode) ? " · Colour" : "");
    }
    if (r === "climate") return (t.state === "off" ? "Off" : Et(o.hvac_action || t.state)) + " · " + Ot(o.current_temperature) + " °C now";
    if (r === "cover") {
      const g = Kn(e), w = o.current_tilt_position;
      return t.state === "opening" || t.state === "closing" ? Et(t.state) + " - " + g + "%" : (g <= 0 ? "Closed" : g >= 100 ? "Open" : "Partially open") + (w > 0 && w < 100 ? " · tilted" : "");
    }
    if (r === "humidifier") return t.state !== "on" ? "Off" : Et(o.action || "on") + " · " + o.current_humidity + "% now";
    if (r === "vacuum") return Et(t.state) + (t.state === "cleaning" && ((p = o.rooms) != null && p.length) ? " · " + o.rooms.join(", ") : "") + (o.battery_level != null ? " · " + o.battery_level + "%" : "");
    if (r === "media_player") return t.state === "playing" || t.state === "paused" ? (t.state === "paused" ? "Paused · " : "") + (o.media_title || "Playing") : Et(t.state);
    if (r === "alarm_control_panel") return Hu[t.state] || Et(t.state);
    if (r === "lock" || r === "valve") return Et(t.state);
    if (r === "switch") return t.state === "on" ? "On" : "Off";
    if (r === "plant") return t.state === "ok" ? "Healthy" : Et(o.problem);
    if (r === "binary_sensor")
      return o.device_class === "battery" ? t.state === "on" ? "Low" : "Normal" : o.device_class === "problem" ? t.state === "on" ? "Problem" : "OK" : o.device_class === "moisture" ? t.state === "on" ? "Wet" : "Dry" : hc.includes(o.device_class) ? t.state === "on" ? "Open" : "Closed" : t.state === "on" ? "Detected" : "Clear";
    if (o.rang) return "Rang at " + fa(o.rang);
    const c = i();
    if (c != null && c.formatEntityState && !Ri(e))
      try {
        return c.formatEntityState(t);
      } catch {
      }
    const h = Number(t.state);
    if (t.state !== "" && Number.isFinite(h)) {
      const g = Math.abs(h) >= 100 ? 0 : Math.abs(h) >= 10 ? 1 : 2, w = o.unit_of_measurement ? o.unit_of_measurement === "%" ? "%" : " " + o.unit_of_measurement : "";
      return h.toLocaleString(void 0, { maximumFractionDigits: g }) + w + (o.plant_low ? " · Low" : o.plant_high ? " · High" : "");
    }
    return Et(t.state);
  }
  const pi = (e) => e >= 1e3 ? Ot(e / 1e3, 2) + " kW" : Math.round(e).toLocaleString() + " W";
  function io(e) {
    var o, r;
    const t = i();
    e.querySelectorAll("[data-icon-for]").forEach((c) => {
      var g;
      const h = M[c.dataset.iconFor], p = c.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && h && !p) {
        let w = c.firstElementChild;
        (!w || w.localName !== "ha-state-icon") && (c.textContent = "", w = document.createElement("ha-state-icon"), c.appendChild(w)), w.hass = t, w.stateObj = h;
      } else if (customElements.get("ha-icon")) {
        let w = c.firstElementChild;
        (!w || w.localName !== "ha-icon") && (c.textContent = "", w = document.createElement("ha-icon"), c.appendChild(w)), w.icon = p || ((g = h == null ? void 0 : h.attributes) == null ? void 0 : g.icon) || "mdi:circle-medium";
      } else c.textContent || (c.textContent = (c.dataset.letter || Be(c.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (o = e.querySelectorAll) == null || o.call(e, ".tfIcon").forEach(Oi), (r = e.classList) != null && r.contains("tfIcon") && Oi(e), Cr();
  }
  const Sr = /* @__PURE__ */ new Map();
  function Oi(e) {
    var h, p, g;
    const t = (((h = e.closest("[data-k]")) == null ? void 0 : h.dataset.k) || "") + "|" + (e.dataset.iconFor || ((p = e.querySelector("[data-icon-for]")) == null ? void 0 : p.dataset.iconFor) || e.getAttribute("aria-label") || ""), o = getComputedStyle(e), r = { backgroundColor: o.backgroundColor, color: o.color }, c = Sr.get(t);
    Sr.set(t, r), !(!c || c.backgroundColor === r.backgroundColor && c.color === r.color || (g = window.matchMedia) != null && g.call(window, "(prefers-reduced-motion: reduce)").matches) && e.animate([c, r], { duration: Ta.warp.cdur, delay: Ta.warp.cdelay, easing: la[Ta.warp.ease], fill: "backwards" });
  }
  const qi = "[data-icon-for]>:is(ha-state-icon,ha-icon),.tfIcon>svg", js = (e) => {
    const t = [e];
    for (; t.length; ) {
      const o = t.shift();
      if (o.localName === "svg") return o;
      o.shadowRoot && t.push(...o.shadowRoot.children), t.push(...o.children);
    }
    return null;
  };
  function zs(e) {
    var ae, re, z;
    const t = e.localName === "svg" ? e : js(e), o = t ? [...t.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")] : [];
    if (!o.length) return !t;
    const r = (ae = e.closest(".tfIcon")) == null ? void 0 : ae.offsetWidth;
    if (r === void 0) return !0;
    if (!r) return !1;
    const c = r + "|" + o.map((se) => se.getAttribute("d") || se.localName).join("|");
    if (e.dataset.fitted === c) return !0;
    let h = 1 / 0, p = 1 / 0, g = -1 / 0, w = -1 / 0;
    for (const se of o) {
      const j = se.getBBox(), xe = getComputedStyle(se), $ = xe.stroke !== "none" ? (parseFloat(xe.strokeWidth) || 0) / 2 : 0;
      !j.width && !j.height || (h = Math.min(h, j.x - $), p = Math.min(p, j.y - $), g = Math.max(g, j.x + j.width + $), w = Math.max(w, j.y + j.height + $));
    }
    if (!(g > h)) return !1;
    const D = (z = (re = t.viewBox) == null ? void 0 : re.baseVal) != null && z.width ? t.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, P = r > 40 ? r * (26 / 40) : r - 14, L = P * D.width / Math.max(g - h, w - p), N = L / D.width;
    return e.localName === "svg" ? (e.style.width = L + "px", e.style.height = L + "px") : e.style.setProperty("--mdc-icon-size", L + "px"), t.style.translate = ((D.x + D.width / 2 - (h + g) / 2) * N).toFixed(2) + "px " + ((D.y + D.height / 2 - (p + w) / 2) * N).toFixed(2) + "px", e.dataset.fitted = c, !0;
  }
  let Io = 0;
  function Fo(e = 0) {
    clearTimeout(Io), [...n.querySelectorAll(qi)].filter((o) => !zs(o)).length && e < 5 && (Io = setTimeout(() => Fo(e + 1), 300));
  }
  function Cr() {
    clearTimeout(Io), Io = setTimeout(() => Fo(), 60);
  }
  const ui = (e) => {
    var t, o, r;
    return e.startsWith("light.") && M[e] && !wt(e).icon && !((r = (o = (t = i()) == null ? void 0 : t.entities) == null ? void 0 : o[e]) != null && r.icon) ? "mdi:lightbulb" : "";
  }, da = (e, t, o) => (t = t || ui(e), ' data-icon-for="' + X(e) + '"' + (t ? ' data-icon-name="' + X(t) + '"' : "") + (o ? ' data-letter="' + X(o) + '"' : "")), xn = (e) => e.endsWith("_solar_power") ? "mdi:solar-power-variant" : wt(e).rang ? "mdi:doorbell" : "", Lt = (e, t, o, r) => X([e, t, o, r ? JSON.stringify(r) : ""].join("|")), Wi = (e) => X(JSON.stringify(e));
  function Oo(e, t) {
    var c, h;
    const o = X(Be(t) + ", " + Yt(t));
    return '<div class="activityRow' + (Number.isFinite(Number((c = M[t]) == null ? void 0 : c.state)) && ((h = M[t]) == null ? void 0 : h.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + X(e + "|" + t) + '" aria-label="' + o + '. Show the last 24 hours"' : '" aria-label="' + o + '"') + '><div class="tfIcon" aria-hidden="true"' + da(t, xn(t)) + '></div><div><div class="activityRowName">' + X(Be(t)) + '</div><div class="activityRowMeta">' + X(Yt(t)) + "</div></div></div>";
  }
  const Vi = (e, t, o) => '<div class="activityRow" aria-label="' + X(e + ", " + t) + '"><div class="tfIcon" aria-hidden="true"' + da("", o, e) + '></div><div><div class="activityRowName">' + X(e) + '</div><div class="activityRowMeta">' + X(t) + "</div></div></div>", rn = (e) => {
    var t;
    return ((t = ue.get(e)) == null ? void 0 : t.name) ?? Be(e);
  }, qo = (e) => {
    var t;
    return ((t = ue.get(e)) == null ? void 0 : t.text) ?? Yt(e);
  };
  function ls(e) {
    var o;
    const t = (o = ue.get(e)) == null ? void 0 : o.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (t ? da("", t, rn(e)) : da(e, xn(e))) + '></div><div><div class="activityRowName">' + X(rn(e)) + '</div><div class="activityRowMeta">' + X(qo(e)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + X(rn(e)) + '’s last 24 hours">' + up + '</button></div><svg class="tfGraph" data-graph="' + X(e) + '" role="img" aria-label="' + X(rn(e)) + ', last 24 hours"></svg></div>';
  }
  function Bn(e, t, o, r, c = "", h = null, p = "") {
    const g = T && T.key === e;
    return '<section class="card tfCard' + (p ? " " + p : "") + (g ? " open" : "") + '" data-tf data-k="' + X(e) + '" style="order:' + t + (g && T.h ? ";min-height:" + T.h + "px" : "") + '" aria-label="' + X(o) + '"><div class="activityHeader">' + (h ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + X(h) + '" aria-label="' + X(o + (M[h] ? ", " + Yt(h) : "") + ". More info") + '">' + X(o) + "</button>" : '<div class="activityTitle">' + X(o) + "</div>") + "</div>" + (g ? ls(T.id) : '<div class="activityRows">' + r.join("") + "</div>" + c) + "</section>";
  }
  function xo(e, t) {
    const o = "readings:" + e.id, r = e.readings.map((c) => Oo(o, c));
    return e.power != null && r.push(Vi("Power now", pi(e.power), "mdi:flash")), Bn(o, t, "Readings", r);
  }
  function Xt(e, t) {
    var g;
    const o = "energy:" + e.id, [r, c] = [e.solar.find((w) => w.endsWith("_power")), e.solar.find((w) => w.endsWith("_today"))], h = [r, c].filter(Boolean).map((w) => Oo(o, w)), p = Number(((g = M[r]) == null ? void 0 : g.state) || 0) * 1e3;
    return mt.grid && (h.push(Oo(o, mt.grid)), h.push(Vi("House use", pi(p + Number(M[mt.grid].state)), "mdi:home-lightning-bolt"))), Bn(o, t, "Energy", h, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const $n = (e, t) => Bn("plant:" + e.id, t, Be(e.id), e.readings.map((o) => Oo("plant:" + e.id, o)), "", e.id);
  function La(e, t, o, r, c, h, p = null) {
    const g = o == null ? null : Math.max(0, Math.min(1, o)), w = g == null ? 0 : Math.round(g * 100);
    return '<div class="tfBar ' + e + '" role="slider" tabindex="0" aria-label="' + X(r) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + w + '"' + (c ? ' aria-valuetext="' + X(c) + '"' : "") + ' data-drag="' + X(e + "|" + t) + '">' + (p != null ? '<span class="was" aria-hidden="true" style="left:' + p + '%"></span>' : "") + (h ? g == null ? "" : '<b style="left:' + w + '%"></b>' : '<i style="width:' + w + '%"></i>') + "</div>";
  }
  const ji = "move-assistant-house-last-bright", Wo = (() => {
    try {
      return JSON.parse(Bi.get(ji)) || {};
    } catch {
      return {};
    }
  })();
  let ds = 0;
  const Aa = (e, t) => {
    !t || Wo[e] === t || (Wo[e] = t, clearTimeout(ds), ds = setTimeout(() => Bi.set(ji, JSON.stringify(Wo)), 500));
  }, Vo = (e, t, o, r) => '<div class="tfStep" role="group" aria-label="' + X(e) + '"><button type="button" data-act="' + o + '" aria-label="Lower ' + X(e.toLowerCase()) + '">' + yu.down + "</button><output>" + X(t) + '</output><button type="button" data-act="' + r + '" aria-label="Raise ' + X(e.toLowerCase()) + '">' + yu.up + "</button></div>", ro = (e, t, o) => '<div class="' + e + '" role="group" aria-label="' + X(t) + '">' + o.filter(Boolean).map((r) => '<button type="button" data-act="' + r.act + '"' + (r.pressed != null ? ' aria-pressed="' + r.pressed + '"' : "") + (r.disabled ? " disabled" : "") + (r.aria ? ' aria-label="' + X(r.aria) + '"' : "") + ">" + (r.html || X(r.label)) + "</button>").join("") + "</div>", fi = (e, t) => "width:" + Math.round(Math.max(0, Math.min(1, (e - t * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * t / 3).toFixed(2), jo = (e) => "left:calc(4px + " + e / 100 + " * (100% - 8px))", Tr = (e, t) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + X(Be(e)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(t) + '" aria-valuetext="' + Math.round(t) + '% open" data-blocks="' + X(e) + '">' + [0, 1, 2, 3].map((o) => '<span><i style="' + fi(t, o) + '"></i><b' + (t >= (o + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (o + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + jo(t) + '">' + Math.round(t) + "%</output></div>";
  function Cl(e, t) {
    e.querySelectorAll(":scope>span").forEach((r, c) => {
      r.firstElementChild.setAttribute("style", fi(t, c)), r.lastElementChild.classList.toggle("lit", t >= (c + 1) * 25 - 12);
    });
    const o = e.querySelector(".tfTip");
    o.setAttribute("style", jo(t)), o.textContent = Math.round(t) + "%", e.setAttribute("aria-valuenow", String(Math.round(t))), e.setAttribute("aria-valuetext", Math.round(t) + "% open");
  }
  const Lr = (e, t) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + X(Be(e)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(t) + '" aria-valuetext="' + Math.round(t) + '% open" data-drag="tilt|' + X(e) + '"><i style="width:calc((100% - 8px) * ' + t / 100 + ')"></i><span' + (t > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (t > 92 ? ' class="lit"' : "") + ">Open</span></div>", cs = (e, t, o) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + X(Be(e)) + '">' + [
    At(e, ug) && ["open", "Open", "open_cover", t >= 100 && !o],
    At(e, hg) && ["stop", "Stop", "stop_cover", !1],
    At(e, fg) && ["close", "Close", "close_cover", t <= 0 && !o]
  ].filter(Boolean).map(([r, c, h, p]) => '<button type="button" data-act="' + Lt("cover", h, e) + '" aria-label="' + c + '"' + (p ? " disabled" : "") + ">" + mg[r] + "</button>").join("") + "</div>", yo = (e, t) => '<button class="tfIcon' + (t.art ? " art" : "") + '" type="button" data-act="' + t.button.act + '" aria-label="' + X(t.button.label) + '"' + (t.art ? ' style="background-image:url(&quot;' + X(t.art) + '&quot;)"' : da(e, t.icon)) + "></button>", Gs = (e) => '<button class="tfName" type="button" data-more="' + X(e) + '" aria-label="' + X(Be(e) + ", " + Yt(e) + ". More info") + '"><span class="activityRowName">' + X(Be(e)) + '</span><span class="activityRowMeta">' + X(Yt(e)) + "</span></button>";
  function zi(e, t = !1, o = null) {
    const r = Go(e), c = e.startsWith("light.") && yn(e) && !(o && Ka(e) < 3), h = o || (t && e.startsWith("light.") ? ["bright"] : null), p = c ? ['<div class="tfDacPad" data-dac="' + (t ? "more:" : o ? "dash:" : "tile:") + X(e) + '"></div>'] : r.sections.map((g, w) => g && (!h || h.includes((r.parts || [])[w])) ? g : "").filter(Boolean);
    return '<div class="tfAction' + (c ? " tfDac" : "") + (r.on ? " on" : "") + (!c && !p.length ? " tfHeadOnly" : "") + '" data-k="' + X(e) + '"' + (r.tone ? ' data-tone="' + r.tone + '"' : "") + di(e) + '><div class="tfActionHead">' + yo(e, r) + Gs(e) + "</div>" + p.join("") + "</div>";
  }
  const ka = "dual-controller-v3", ps = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let zo = null;
  async function hi() {
    if (zo || customElements.get(ka)) return;
    zo = "loading";
    const e = await Promise.resolve().then(() => W({ type: "lovelace/resources" })).catch(() => null), t = Array.isArray(e) && e.some((r) => /dual-axis-controller/i.test(r.url || ""));
    if (await Promise.race([customElements.whenDefined(ka), new Promise((r) => setTimeout(r, t ? 8e3 : 0))]), customElements.get(ka)) return;
    const o = Object.assign(document.createElement("script"), { src: ps });
    o.onerror = () => {
      zo = "failed", U();
    }, document.head.appendChild(o);
  }
  const sn = /* @__PURE__ */ new Map(), Gi = (e) => (Ye.lightStyles[e] || Ye.lights) === "dac", Ui = () => Ye.lights === "dac" || Object.values(Ye.lightStyles).includes("dac");
  function yn(e) {
    return Gi(e) && !!customElements.get(ka);
  }
  const Ft = (e) => Ye.lightPads[e] || Ye.dacPad, Yi = () => {
    const e = i();
    return e && {
      ...e,
      themes: { ...e.themes || {}, darkMode: !v.classList.contains("light") },
      callService: (t, o, r, ...c) => e.callService(t, ...ri(t, o, r), ...c)
    };
  }, Us = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", us = (e) => {
    !e.shadowRoot || e.shadowRoot.querySelector("style[data-tf]") || (e.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: Us })).dataset.tf = "");
  }, ln = /* @__PURE__ */ new Map(), dn = new ResizeObserver((e) => e.forEach(({ target: t }) => {
    const o = t.parentElement;
    !o || !t.offsetHeight || (o.style.removeProperty("min-height"), ln.set(o.dataset.dac, o.offsetHeight));
  }));
  function Kt(e) {
    e.querySelectorAll("[data-dac]").forEach((t) => {
      const o = t.dataset.dac;
      let r = sn.get(o);
      if (!r) {
        const c = o.slice(o.indexOf(":") + 1);
        r = document.createElement(ka), r.setConfig({ type: "custom:" + ka, entity: c, pad: Ft(c), tap_action: { action: "none" } }), sn.set(o, r);
      }
      r.hass = Yi(), r.parentNode !== t && t.replaceChildren(r), !r.offsetHeight && ln.has(o) && (t.style.minHeight = ln.get(o) + "px"), dn.observe(r), us(r);
    });
  }
  function ko() {
    const e = Yi();
    sn.forEach((t, o) => {
      t.isConnected ? t.hass = e : sn.delete(o);
    });
  }
  customElements.whenDefined(ka).then(() => {
    k && (E != null && E.querySelector("[data-tf]")) && ld(ao);
  });
  const cn = (e, t, o) => ge.has(e + "|" + t) ? ge.get(e + "|" + t) : o;
  function Go(e) {
    var h;
    const t = M[e], o = t.attributes, r = e.split(".")[0], c = (p, g) => ({ act: Lt(p, "toggle", e), label: g });
    if (r === "light") {
      const p = t.state === "on", g = rs(e), [w, D] = ya(e), P = cn("bright", e, _n(t));
      p && Aa(e, _n(t));
      const L = cn("ct", e, p && o.color_mode === "color_temp" ? o.color_temp_kelvin : null), N = cn("hue", e, p && bo.includes(o.color_mode) && o.hs_color ? o.hs_color[0] : null);
      return { on: p, button: c("light", "Turn " + Be(e) + (p ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        ja(e) && La("bright", e, P / 100, Be(e) + " brightness", P + "%", !1, p ? null : Wo[e] ?? null),
        g.includes("color_temp") && La("ct", e, L == null ? null : (L - w) / (D - w), Be(e) + " warm to cool", L == null ? "" : Math.round(L) + " kelvin", !0),
        g.some((ae) => bo.includes(ae)) && La("hue", e, N == null ? null : N / 360, Be(e) + " colour", "", !0)
      ] };
    }
    if (r === "climate") {
      const p = o.target_temp_step || 0.5, g = Number(o.temperature);
      return { on: t.state !== "off", tone: t.state === "cool" || o.hvac_action === "cooling" ? "cool" : "heat", button: c("climate", "Turn " + Be(e) + (t.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(g) && Vo("Target temperature", Ot(g) + " °C", Lt("climate", "set_temperature", e, { temperature: g - p }), Lt("climate", "set_temperature", e, { temperature: g + p })),
        ro("tfSeg", "Mode", (o.hvac_modes || []).map((w) => ({ label: Et(w), act: Lt("climate", "set_hvac_mode", e, { hvac_mode: w }), pressed: t.state === w })))
      ] };
    }
    if (r === "cover") {
      const p = t.state === "opening" || t.state === "closing", g = t.state === "closed", w = ci(e), D = Ho(e);
      return { on: !g, tone: "blue", icon: Lu[pp(t)][g ? 1 : 0], button: c("cover", (g ? "Open " : "Close ") + Be(e)), parts: ["blocks", "tilt", "buttons"], sections: [
        At(e, Tu) && Tr(e, w),
        D != null && Lr(e, D),
        cs(e, w, p)
      ] };
    }
    if (r === "humidifier") {
      const p = Number(o.humidity);
      return { on: t.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: c("humidifier", "Turn " + Be(e) + (t.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(p) && Vo("Target humidity", p + "%", Lt("humidifier", "set_humidity", e, { humidity: p - 1 }), Lt("humidifier", "set_humidity", e, { humidity: p + 1 })),
        ((h = o.available_modes) == null ? void 0 : h.length) && ro("tfSeg", "Mode", o.available_modes.map((g) => ({ label: Et(g), act: Lt("humidifier", "set_mode", e, { mode: g }), pressed: o.mode === g })))
      ] };
    }
    if (r === "media_player") {
      const p = t.state === "playing", g = t.state === "off" || t.state === "standby", w = cn("vol", e, o.volume_level), D = g ? { act: Lt("media_player", At(e, cg) ? "turn_on" : "toggle", e), label: "Turn " + Be(e) + " on" } : t.state === "playing" || t.state === "paused" ? { act: Lt("media_player", "media_play_pause", e), label: (p ? "Pause " : "Play ") + Be(e) } : { act: Lt("media_player", At(e, pg) ? "turn_off" : "toggle", e), label: "Turn " + Be(e) + " off" };
      return { on: !g, tone: "blue", art: !g && o.entity_picture ? o.entity_picture : null, button: D, parts: ["playback", "volume"], sections: g ? [] : [
        (At(e, Mu) || At(e, Su) || At(e, ku) || At(e, Cu)) && ro("tfSeg", "Playback", [
          { html: cc.prev, aria: "Previous", act: Lt("media_player", "media_previous_track", e), disabled: !At(e, Mu) },
          { html: p ? cc.pause : cc.play, aria: p ? "Pause" : "Play", act: Lt("media_player", "media_play_pause", e), disabled: !(At(e, ku) || At(e, Cu)) },
          { html: cc.next, aria: "Next", act: Lt("media_player", "media_next_track", e), disabled: !At(e, Su) }
        ]),
        At(e, dg) && w != null && La("vol", e, w, Be(e) + " volume", Math.round(w * 100) + "%")
      ] };
    }
    if (r === "vacuum") {
      const p = t.state === "cleaning", g = o.rooms || [], w = (P) => g.includes(P) ? g.filter((L) => L !== P) : g.concat(P), D = Lt("vacuum", p ? "pause" : "start", e, Ri(e) ? { rooms: g } : null);
      return { on: p || t.state === "returning", tone: "blue", button: { act: D, label: (p ? "Pause " : "Start ") + Be(e) }, parts: ["controls", "rooms"], sections: [
        ro("tfSeg", Be(e), [
          { label: p ? "Pause" : "Start", act: D },
          { label: "Dock", act: Lt("vacuum", "return_to_base", e), disabled: t.state === "docked" },
          { label: "Locate", act: Lt("vacuum", "locate", e) }
        ]),
        Ri(e) && ro("tfChips", "Rooms to clean", mt.rooms.filter((P) => P.id !== "balcony").map((P) => ({ label: P.name, act: Lt("vacuum", "set_rooms", e, { rooms: w(P.name) }), pressed: g.includes(P.name) })))
      ] };
    }
    if (r === "lock") {
      const p = t.state === "locked";
      return { on: !p, tone: "heat", button: { act: Lt("lock", p ? "unlock" : "lock", e), label: (p ? "Unlock " : "Lock ") + Be(e) }, parts: ["controls"], sections: [
        ro("tfSeg", Be(e), [
          { label: "Lock", act: Lt("lock", "lock", e), pressed: p },
          { label: "Unlock", act: Lt("lock", "unlock", e), pressed: t.state === "unlocked" },
          At(e, Tg) && { label: "Open", act: Lt("lock", "open", e), pressed: t.state === "open" }
        ])
      ] };
    }
    if (r === "alarm_control_panel") {
      const p = t.state === "disarmed";
      return { on: !p, tone: t.state === "triggered" ? "alarm" : "blue", button: { act: Lt("alarm_control_panel", p ? "alarm_arm_away" : "alarm_disarm", e), label: p ? "Arm " + Be(e) + ", away" : "Disarm " + Be(e) }, parts: ["controls"], sections: [
        ro("tfSeg", Be(e), Lg.filter(([, , , g]) => !g || At(e, g)).map(([g, w, D]) => ({ label: w, act: Lt("alarm_control_panel", D, e), pressed: t.state === g })))
      ] };
    }
    if (r === "valve") {
      const p = t.state === "open";
      return { on: p, tone: "blue", icon: "mdi:sprinkler-variant", button: c("valve", (p ? "Close " : "Open ") + Be(e)), parts: ["controls"], sections: [
        ro("tfSeg", Be(e), [
          { label: "Open", act: Lt("valve", "open_valve", e), pressed: p },
          { label: "Close", act: Lt("valve", "close_valve", e), pressed: !p }
        ])
      ] };
    }
    if (fp.includes(r)) {
      const p = t.state === "on";
      return { on: p, button: c(r, "Turn " + Be(e) + (p ? " off" : " on")), parts: [], sections: [] };
    }
    return { on: !1, button: { act: "", label: Be(e) }, sections: [] };
  }
  const f = (e) => (Number.isInteger(Number(e)) ? String(Number(e)) : Ot(e)) + "°";
  function b(e) {
    var se;
    const t = (j) => e.readings.find((xe) => wt(xe).device_class === j), o = t("temperature"), r = t("humidity"), c = (j) => {
      var xe;
      return Number((xe = M[j]) == null ? void 0 : xe.state);
    }, h = (j) => e.actions.filter((xe) => j.test(xe)), p = e.lights.filter((j) => {
      var xe;
      return ((xe = M[j]) == null ? void 0 : xe.state) === "on";
    }), g = h(/^cover\./), w = g.filter((j) => {
      var xe;
      return ((xe = M[j]) == null ? void 0 : xe.state) !== "closed";
    }), D = [...new Set(g.map((j) => pp(M[j])))], P = h(/^climate\./)[0], L = h(/^humidifier\./)[0], N = h(/^media_player\./), ae = N.find((j) => {
      var xe;
      return ((xe = M[j]) == null ? void 0 : xe.state) === "playing";
    }) || N.find((j) => {
      var xe;
      return ((xe = M[j]) == null ? void 0 : xe.state) === "paused";
    }), re = e.plugs.filter((j) => {
      var xe;
      return ((xe = M[j]) == null ? void 0 : xe.state) === "on";
    }), z = [];
    if (o && Number.isFinite(c(o)) && z.push({ key: "temp", id: o, kind: "reading", icon: Pi(o), label: "Temperature", value: Ot(c(o)) + "°" }), r && Number.isFinite(c(r)) && z.push({ key: "hum", id: r, kind: "reading", icon: Pi(r), label: "Humidity", value: Math.round(c(r)) + "%" }), e.lights.length && z.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: Pi("", "mdi:lightbulb"),
      label: "Lights",
      value: p.length ? p.length + " of " + e.lights.length + " on" : "All off",
      short: p.length ? p.length + " on" : "Off",
      on: p.length > 0,
      light: p.length ? No(p[0]) : "",
      acts: e.lights.map((j) => ["light", p.length ? "turn_off" : "turn_on", j]),
      aria: (p.length ? "Turn off" : "Turn on") + " the lights in " + e.name
    }), g.length) {
      const j = D.length === 1 ? gg[D[0]] : "covers", xe = Math.round(g.reduce(($, Ve) => $ + Kn(Ve), 0) / g.length);
      z.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        light: w.length ? Rn([146, 107, 199]) : "",
        icon: Pi("", ((se = Lu[D[0]]) == null ? void 0 : se[w.length ? 0 : 1]) || "mdi:window-shutter"),
        label: Et(j),
        value: xe <= 0 ? "Closed" : xe >= 100 ? "Open" : xe + "% open",
        short: xe <= 0 ? "Closed" : xe + "%",
        on: w.length > 0,
        acts: g.map(($) => ["cover", w.length ? "close_cover" : "open_cover", $]),
        aria: (w.length ? "Close the " : "Open the ") + j + " in " + e.name
      });
    }
    if (P) {
      const j = wt(P), xe = M[P].state === "off";
      z.push({
        key: "climate",
        kind: "control",
        tone: j.hvac_action === "cooling" ? "cool" : "heat",
        light: wo(P) ? Rn(wo(P)) : "",
        icon: Pi(P),
        label: Be(P),
        value: xe ? "Off" : Et(j.hvac_action || M[P].state) + " · " + f(j.temperature),
        short: xe ? "Off" : f(j.temperature),
        on: !xe,
        acts: [["climate", "toggle", P]],
        aria: "Turn " + Be(P) + (xe ? " on" : " off")
      });
    }
    if (L) {
      const j = M[L].state === "on";
      z.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        light: j ? Rn([33, 150, 243]) : "",
        icon: Pi("", "mdi:air-humidifier"),
        label: Be(L),
        value: j ? "On · " + wt(L).humidity + "%" : "Off",
        short: j ? wt(L).humidity + "%" : "Off",
        on: j,
        acts: [["humidifier", "toggle", L]],
        aria: "Turn " + Be(L) + (j ? " off" : " on")
      });
    }
    if (N.length) {
      const j = ae || N[0], xe = M[j], $ = xe.state === "playing";
      z.push({
        key: "media",
        kind: "control",
        tone: "blue",
        light: wo(j) ? Rn(wo(j)) : "",
        icon: Pi(j),
        label: Be(j),
        value: Yt(j),
        short: $ ? "Playing" : xe.state === "paused" ? "Paused" : Et(xe.state),
        on: $,
        acts: [["media_player", xe.state === "playing" || xe.state === "paused" ? "media_play_pause" : "toggle", j]],
        aria: ($ ? "Pause " : "Play ") + Be(j)
      });
    }
    return e.plugs.length && z.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      light: re.length ? Rn([255, 193, 7]) : "",
      icon: Pi("", "mdi:power-plug"),
      label: "Plugs",
      value: re.length ? re.length + " of " + e.plugs.length + " on" : "All off",
      short: re.length ? re.length + " on" : "Off",
      on: re.length > 0,
      acts: e.plugs.map((j) => ["switch", re.length ? "turn_off" : "turn_on", j]),
      aria: (re.length ? "Turn off" : "Turn on") + " the plugs in " + e.name
    }), e.alerts.forEach((j) => z.push(wt(j).device_class === "moisture" ? { key: "alert:" + j, kind: "alert", icon: Pi(j), label: "Water leak" } : { key: "note:" + j, kind: "note", icon: Pi(j), label: Be(j) + " " + Yt(j).toLowerCase() })), z;
  }
  const y = (e, t) => {
    const o = (r) => e.actions.filter((c) => r.test(c));
    return {
      lights: e.lights,
      covers: o(/^cover\./),
      climate: o(/^climate\./).slice(0, 1),
      humidifier: o(/^humidifier\./).slice(0, 1),
      plugs: e.plugs,
      media: (() => {
        const r = o(/^media_player\./);
        return [r.find((c) => {
          var h;
          return ((h = M[c]) == null ? void 0 : h.state) === "playing";
        }) || r.find((c) => {
          var h;
          return ((h = M[c]) == null ? void 0 : h.state) === "paused";
        }) || r[0]].filter(Boolean);
      })()
    }[t] || [];
  }, C = (e, t, o) => '<button class="' + t + (e.on ? " on" : "") + '" type="button" data-tone="' + e.tone + '" data-acts="' + Wi(e.acts) + '" aria-label="' + X(e.aria) + '" aria-pressed="' + e.on + '">' + o + "</button>", H = (e) => '<button class="tfAName" type="button" data-go="' + X(e.id) + '" aria-label="Open ' + X(e.name) + '">' + X(e.name) + "</button>";
  function Y(e, t, o = !1) {
    const r = t.find((g) => g.key === "lights"), c = !!(r != null && r.on), h = "", p = '<span class="tfAreaGlyph"' + da("area:" + e.id, e.icon || "mdi:texture-box", e.name) + "></span>";
    return o || !r ? '<span class="tfIcon tfAreaIcon' + (c ? " on" : "") + '"' + h + ' aria-hidden="true">' + p + "</span>" : '<button class="tfIcon tfAreaIcon' + (c ? " on" : "") + '" type="button"' + h + ' data-acts="' + Wi(r.acts) + '" aria-label="' + X(r.aria) + '" aria-pressed="' + c + '">' + p + "</button>";
  }
  const K = (e) => e.filter((t) => t.kind === "alert" || t.kind === "note").map((t) => '<span class="sourceTag">' + X(t.label) + "</span>").join(" "), fe = (e) => e.readings.find((t) => wt(t).device_class === "temperature") || [...e.readings, ...e.solar, ...e.openings, ...e.actions, ...e.plugs].find((t) => M[t]) || null, Q = (e, t) => {
    const o = Be(t);
    return o.toLowerCase().startsWith(e.name.toLowerCase() + " ") ? Et(o.slice(e.name.length + 1)) : o;
  };
  function ve(e) {
    const t = M[e], o = wt(e), r = e.split(".")[0], c = Number(t.state);
    if (t.state === "unavailable") return { text: "Unavailable" };
    if (r === "sensor" && Number.isFinite(c)) {
      if (o.device_class === "temperature") return { text: f(c) };
      const h = o.unit_of_measurement || "";
      return h === "%" ? { text: Math.round(c) + "%" } : { text: Ot(c, Number.isInteger(c) ? 0 : 1), unit: h };
    }
    if (r === "climate" && (o.current_temperature ?? o.temperature) != null) return { text: f(o.current_temperature ?? o.temperature) };
    if (r === "light") return { text: t.state !== "on" ? "Off" : ja(e) ? _n(t) + "%" : "On" };
    if (r === "cover") {
      const h = Kn(e);
      return { text: h <= 0 ? "Closed" : h >= 100 ? "Open" : h + "%" };
    }
    return r === "humidifier" ? { text: t.state === "on" ? o.humidity + "%" : "Off" } : r === "media_player" ? { text: t.state === "playing" ? "Playing" : t.state === "paused" ? "Paused" : Et(t.state) } : { text: Yt(e) };
  }
  const ye = (e, t, o) => {
    const r = o.find((g) => g.key === "temp"), c = o.find((g) => g.key === "hum"), h = wt(t), p = M[t].state === "off";
    return t.startsWith("climate.") ? [Q(e, t), p ? "Off" : Et(h.hvac_action || M[t].state) + (h.temperature != null ? " · " + f(h.temperature) : ""), c && c.value + " humidity"].filter(Boolean).join(" · ") : [!(r && r.id === t) && Q(e, t), r && r.id !== t && r.value, c && c.id !== t && c.value + " humidity"].filter(Boolean).join(" · ");
  };
  function Ae(e, t, o) {
    const r = o && ve(o), c = o ? ye(e, o, t) : "", h = (w) => {
      const D = y(e, w.key);
      return D.length === 1 ? D[0] : "group:" + e.id + ":" + w.key;
    }, p = t.filter((w) => w.kind === "control").slice(0, 4).map((w) => '<div class="tfATile' + (w.on ? " on" : "") + '" data-tone="' + w.tone + '"' + (w.light ? ' data-light style="' + w.light + '"' : "") + ">" + C(w, "tfIcon", w.icon) + '<button class="tfName" type="button" data-more="' + X(h(w)) + '" aria-label="' + X(e.name + " " + w.label.toLowerCase() + ", " + w.value + ". Open") + '"><span class="activityRowName">' + X(w.label) + '</span><span class="activityRowMeta">' + X(w.value) + "</span></button></div>"), g = K(t);
    return '<div class="workoutPanelTop">' + Y(e, t) + '<div class="tfATitle">' + H(e) + "</div>" + (g ? '<div class="tfATags">' + g + "</div>" : "") + "</div>" + (o ? '<button class="tfABig" type="button" data-more="' + X(o) + '" aria-label="' + X(Be(o) + ", " + Yt(o) + ". More info") + '"><span class="tfABigMain' + (r.text.length > 7 ? " long" : "") + '">' + X(r.text) + (r.unit ? '<span class="tfABigUnit">' + X(r.unit) + "</span>" : "") + "</span>" + (c ? '<span class="tfABigSub">' + X(c) + "</span>" : "") + "</button>" : "") + (p.length ? '<div class="tfATiles">' + p.join("") + "</div>" : "");
  }
  function Qe(e) {
    const t = e.id === B, o = b(e), r = fe(e), c = r && ve(r), h = [...o.filter((p) => p.kind === "control"), ...o.filter((p) => p.kind !== "control" && p.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (t ? " active" : "") + '" data-area="' + X(e.id) + '" tabindex="0" aria-expanded="' + t + '" aria-label="' + X(e.name) + '"><div class="panelExpanded"' + (t ? "" : " inert") + ">" + Ae(e, o, r) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + Y(e, o, !0) + '<span class="tfACName">' + X(e.name) + '</span></div><span class="tfACMain">' + (c ? X(c.text + (c.unit ? " " + c.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + h.map((p) => '<span class="tfACTile"><span class="tfIcon' + (p.kind === "alert" ? " alert" : "") + '"' + (p.on && p.light ? ' data-light style="' + p.light + '"' : "") + ">" + p.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let je = [];
  const _e = () => {
    var t;
    const e = new Set(((t = Ie.dash) == null ? void 0 : t.areasOff) || []);
    return je.filter((o) => !e.has(o.id));
  }, et = (e) => {
    var o;
    const t = _e();
    return t.some((r) => r.id === B) || (B = ((o = t[0]) == null ? void 0 : o.id) || null), '<div class="tfAreas" data-tf data-k="areas" style="order:' + e + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + t.map(Qe).join("") + "</section></div>";
  }, ze = (e) => e.startsWith("room:"), Ee = (e) => je.find((t) => "room:" + t.id === e);
  function gt(e, t) {
    const o = b(e), r = fe(e), c = r && ve(r), h = r ? ye(e, r, o) : "", p = c ? c.text + (c.unit ? " " + c.unit : "") : "", g = (N) => {
      const ae = y(e, N.key);
      return ae.length === 1 ? ae[0] : "group:" + e.id + ":" + N.key;
    }, w = o.filter((N) => N.kind === "control").slice(0, 4), D = (N) => N.on && N.light ? ' data-light style="' + N.light + '"' : "", P = w.map((N) => '<button class="tfIcon' + (N.on ? " on" : "") + '" type="button" data-tone="' + N.tone + '"' + D(N) + ' data-more="' + X(g(N)) + '" aria-label="' + X(N.label + ", " + N.value + ". Open its controls") + '">' + N.icon + "</button>"), L = w.map((N) => '<button class="tfRoomDev" type="button" data-more="' + X(g(N)) + '" aria-label="' + X(N.label + ", " + N.value + ". Open its controls") + '"><span class="tfIcon' + (N.on ? " on" : "") + '" data-tone="' + N.tone + '"' + D(N) + ">" + N.icon + '</span><span class="tfRoomDevName"><span class="activityRowName">' + X(N.label) + '</span><span class="activityRowMeta">' + X(N.value) + "</span></span></button>");
    return '<div class="tfAction tfRoomTile" data-k="' + X(t) + '" data-go="' + X(e.id) + '"><div class="tfActionHead"><span class="tfIcon tfRoomIcon" aria-hidden="true"><span class="tfAreaGlyph"' + da("area:" + e.id, e.icon || "mdi:texture-box", e.name) + '></span></span><button class="tfName" type="button" data-go="' + X(e.id) + '" aria-label="Open ' + X(e.name) + '"><span class="activityRowName">' + X(e.name) + "</span>" + (p || h ? '<span class="activityRowMeta">' + (p ? '<span class="tfRoomInline">' + X(p) + (h ? " · " : "") + "</span>" : "") + X(h) + "</span>" : "") + "</button></div>" + (p ? '<div class="tfRoomReading" aria-hidden="true"><span class="tfRoomBig">' + X(p) + "</span>" + (h ? '<span class="tfRoomSub">' + X(h) + "</span>" : "") + "</div>" : "") + (P.length ? '<div class="tfRoomDevices">' + P.join("") + '</div><div class="tfRoomHeads">' + L.join("") + "</div>" : "") + "</div>";
  }
  const ot = () => [
    { key: "home", name: "Home", ids: mt.homeVacuums },
    ...mt.rooms.map((e) => ({ key: "room:" + e.id, name: e.name, room: e, ids: e.actions }))
  ], Rt = (e, t, o) => e + " " + (e === 1 ? t : o), Ne = () => (Ie.favourites ?? ho.favorite_entities ?? []).filter((e) => M[e]);
  function na() {
    if (!ra) {
      const t = Object.entries(Xe).sort((r, c) => c[1] - r[1]).map(([r]) => r), o = mt.rooms.flatMap((r) => r.actions);
      ra = [.../* @__PURE__ */ new Set([...mo, ...t, ...o.filter((r) => Go(r).on), ...o])];
    }
    const e = Ne();
    return ra.filter((t) => M[t] && M[t].state !== "unavailable" && !e.includes(t));
  }
  let sa = !1;
  function Ja() {
    if (!sa || Ie.favSeeded || !mt.rooms.length || A) return;
    const e = (o) => Object.keys(M).find((r) => Ri(r) && o(r)), t = [e((o) => o.startsWith("climate.")), e((o) => o.startsWith("cover.") && /curtain/.test(o)), e((o) => o.startsWith("valve.")), mt.security.locks[0]];
    Ie = { ...Ie, favourites: [.../* @__PURE__ */ new Set([...Ie.favourites ?? ho.favorite_entities ?? [], ...t.filter(Boolean)])], favSeeded: !0 }, oo();
  }
  const za = () => Ie.suggest ?? !ho.hide_suggested_entities;
  function Ar() {
    const e = new Set(A ? [] : Ie.favHidden || []), t = Ne().filter((r) => !e.has(r)), o = za() ? na().filter((r) => !e.has(r) && Co(r)) : [];
    return A && !td() ? [...t, ...o] : [...t, ...o].slice(0, Eg);
  }
  const kn = (e) => {
    const t = Ne().includes(e);
    return '<button class="tfStar" type="button" data-star="' + X(e) + '" aria-pressed="' + t + '" aria-label="Favourite: ' + X(Be(e)) + '">' + Cg(t) + "</button>";
  };
  function so(e, { area: t = !1, star: o = !1, plain: r = !1, say: c = null, alert: h = !1 } = {}) {
    var re, z, se, j, xe, $;
    const p = r && ((xe = (re = i()) == null ? void 0 : re.devices) == null ? void 0 : xe[(j = (se = (z = i()) == null ? void 0 : z.entities) == null ? void 0 : se[e]) == null ? void 0 : j.device_id]), g = p && (p.name_by_user || p.name) || Be(e), w = e.split(".")[0], D = !r && gd.includes(w) ? Go(e) : null, P = D ? D.on : ["on", "open", "playing"].includes(($ = M[e]) == null ? void 0 : $.state), L = r ? null : D ? D.button : fp.includes(w) ? { act: Lt(w, "toggle", e), label: "Turn " + Be(e) + (P ? " off" : " on") } : w === "scene" || w === "script" ? { act: Lt(w, "turn_on", e), label: "Run " + Be(e) } : null, N = (c ?? Yt(e)) + (t && pt.get(e) ? " · " + pt.get(e) : ""), ae = (D == null ? void 0 : D.icon) || xn(e);
    return '<div class="activityRow' + (L ? " tfPlug" : "") + (P ? " on" : "") + (o ? " tfPick" : "") + (h ? " alert" : "") + '" data-k="' + X((t ? "fav:" : "row:") + e) + '" data-tone="' + (w === "light" ? "light" : (D == null ? void 0 : D.tone) || "blue") + '"' + di(e) + ">" + (L && !o ? '<button class="tfIcon" type="button" data-act="' + L.act + '" aria-label="' + X(L.label) + '"' + da(e, ae) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + da(e, ae) + "></div>") + '<button class="tfName" type="button" data-more="' + X(e) + '" aria-label="' + X(g + ", " + N + ". More info") + '"><span class="activityRowName">' + X(g) + '</span><span class="activityRowMeta">' + X(N) + "</span></button>" + (o ? kn(e) : "") + "</div>";
  }
  const Dt = () => {
    var e;
    return M[(e = Ie.sources) == null ? void 0 : e.weather] ? Ie.sources.weather : M["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(M).find((t) => t.startsWith("weather."));
  };
  function Uo() {
    var o;
    const e = (r) => Object.keys(M).filter((c) => c.startsWith("binary_sensor.") && r.includes(wt(c).device_class));
    return ((o = Yn.alert_entities) != null && o.length ? Yn.alert_entities : [...e(["moisture", "smoke", "gas"]).map((r) => ({ entity: r, severity: "alert" })), ...e(hc).map((r) => ({ entity: r, severity: "warning" }))]).filter((r) => M[r.entity]).map((r) => ({ ...r, on: ["on", "open", "unlocked", "triggered", "problem"].includes(M[r.entity].state) }));
  }
  function Pn() {
    const e = Object.keys(md), t = /* @__PURE__ */ new Set(), o = [];
    (ho.shortcuts || []).forEach((h) => {
      if (h.type === "summary") {
        if (!e.includes(h.key) || t.has(h.key)) return;
        t.add(h.key);
      }
      o.push(h);
    }), e.forEach((h) => {
      t.has(h) || o.push({ type: "summary", key: h });
    });
    const r = So().sumOrder || [], c = (h) => h.type === "summary" && r.includes(h.key) ? r.indexOf(h.key) : r.length;
    return r.length ? o.map((h, p) => [h, p]).sort((h, p) => c(h[0]) - c(p[0]) || h[1] - p[1]).map(([h]) => h) : o;
  }
  function Mo() {
    var se;
    const e = ((se = i()) == null ? void 0 : se.entities) || {}, t = (j) => wt(j).device_class, o = Object.keys(M).filter((j) => j.startsWith("sensor.") && t(j) === "battery" || j.startsWith("binary_sensor.") && ["battery", "problem"].includes(t(j))), r = mt.rooms.flatMap((j) => j.plants.map((xe) => xe.id));
    if (!o.length && !r.length) return null;
    const c = (j) => {
      var $;
      const xe = ($ = e[j]) == null ? void 0 : $.device_id;
      return !!xe && Object.keys(M).some((Ve) => {
        var Ht;
        return Ve.startsWith("binary_sensor.") && ((Ht = e[Ve]) == null ? void 0 : Ht.device_id) === xe && t(Ve) === "battery_charging" && M[Ve].state === "on";
      });
    }, h = (j) => j.startsWith("vacuum.") ? wt(j).battery_level <= 20 && M[j].state !== "docked" : j.startsWith("binary_sensor.") ? t(j) === "battery" && M[j].state === "on" : parseFloat(M[j].state) <= 20 && !c(j), p = [...o, ...mt.vacuums].filter((j) => M[j] && h(j)), g = [...o.filter((j) => t(j) === "problem" && M[j].state === "on"), ...r.filter((j) => {
      var xe;
      return ((xe = M[j]) == null ? void 0 : xe.state) === "problem";
    })], w = o.filter((j) => M[j].state === "unavailable"), D = [.../* @__PURE__ */ new Set([...p, ...g, ...w])], P = (j) => {
      const xe = parseFloat(M[j].state);
      return t(j) === "battery" && Number.isFinite(xe) ? xe : 101;
    }, L = [...r, ...mt.vacuums, ...[...o].sort((j, xe) => P(j) - P(xe))].filter((j) => M[j] && !D.includes(j)), N = /* @__PURE__ */ new Map();
    L.forEach((j) => {
      var $;
      const xe = (($ = mt.areaOf) == null ? void 0 : $.call(mt, j)) || "";
      N.set(xe, [...N.get(xe) || [], j]);
    });
    const ae = (j) => {
      const xe = mt.rooms.findIndex(($) => $.id === j);
      return j === "" ? 1 / 0 : xe < 0 ? mt.rooms.length : xe;
    }, re = [...N.keys()].sort((j, xe) => ae(j) - ae(xe)), z = (j) => {
      var xe, $, Ve, Ht;
      return ((xe = mt.rooms.find((it) => it.id === j)) == null ? void 0 : xe.name) || ((Ht = (Ve = ($ = i()) == null ? void 0 : $.areas) == null ? void 0 : Ve[j]) == null ? void 0 : Ht.name) || j;
    };
    return {
      value: [p.length && Rt(p.length, "low battery", "low batteries"), g.length && Rt(g.length, "problem", "problems"), w.length && Rt(w.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: D, alert: !0 }, ...re.map((j) => ({ name: j ? z(j) : re.length > 1 ? "Other devices" : "Devices", ids: N.get(j) }))].filter((j) => j.ids.length)
    };
  }
  const So = () => A ? Ie.home || {} : Ie, mi = (e) => Au.includes(e) ? (So().shownSums || []).includes(e) : !(So().hiddenSums || []).includes(e);
  function Er(e, t, o) {
    const r = e.flatMap((N) => o(N, /^cover\./)), c = r.filter((N) => {
      var ae;
      return ["open", "opening"].includes((ae = M[N]) == null ? void 0 : ae.state);
    }).length, h = Object.keys(M).filter((N) => N.startsWith("person.")), p = h.filter((N) => {
      var ae;
      return ((ae = M[N]) == null ? void 0 : ae.state) === "home";
    }).length, g = mt.security.openings.filter((N) => M[N]), w = g.filter((N) => M[N].state === "on").length, D = Object.keys(M).filter((N) => N.startsWith("binary_sensor.") && wt(N).device_class === "moisture"), P = D.filter((N) => M[N].state === "on").length, L = mt.vacuums.filter((N) => M[N]);
    return {
      covers: r.length && { value: c ? c + " open" : "All closed", groups: t((N) => o(N, /^cover\./)) },
      people: h.length && { value: p ? p + " home" : "Nobody home", groups: [{ name: "People", ids: h }] },
      openings: g.length && { value: w ? w + " open" : "All closed", groups: [{ name: "Doors and windows", ids: g }] },
      leaks: D.length && { value: P ? Rt(P, "leak", "leaks") : "All dry", groups: [{ name: "Leak sensors", ids: D }] },
      vacuum: L.length && { value: Et(M[L[0]].state), groups: [{ name: "Vacuum", ids: L }] }
    };
  }
  function qa(e = !1) {
    var Va;
    const t = mt.rooms, o = mt.security, r = (Je, Mt) => Je.actions.filter((Ua) => Mt.test(Ua)), c = (Je) => t.map((Mt) => ({ name: Mt.name, ids: Je(Mt) })).filter((Mt) => Mt.ids.length), h = t.flatMap((Je) => Je.lights), p = h.filter((Je) => {
      var Mt;
      return ((Mt = M[Je]) == null ? void 0 : Mt.state) === "on";
    }).length, g = t.map((Je) => Je.readings.find((Mt) => wt(Mt).device_class === "temperature")).filter(Boolean).map((Je) => Number(M[Je].state)).filter(Number.isFinite), [w, D] = [Ot(Math.min(...g)), Ot(Math.max(...g))], P = t.flatMap((Je) => r(Je, /^media_player\./)), L = P.filter((Je) => {
      var Mt;
      return ((Mt = M[Je]) == null ? void 0 : Mt.state) === "playing";
    }).length, N = Uo(), ae = N.filter((Je) => Je.severity === "warning" && Je.on).length, re = o.locks.filter((Je) => {
      var Mt;
      return ["unlocked", "jammed", "open"].includes((Mt = M[Je]) == null ? void 0 : Mt.state);
    }).length, z = o.alarms.filter((Je) => {
      var Mt;
      return ((Mt = M[Je]) == null ? void 0 : Mt.state) === "disarmed";
    }).length, se = ae ? Rt(ae, "warning", "warnings") : null, j = re ? re + " unlocked" : z ? z + " disarmed" : se ? null : "All secure", xe = Mo(), $ = t.flatMap((Je) => Je.solar), Ve = $.find((Je) => Je.endsWith("_power")), Ht = {
      light: h.length && { value: p ? p + " on" : "All off", groups: c((Je) => Je.lights) },
      climate: g.length && { value: w === D ? w + "°" : w + " - " + D + "°", groups: c((Je) => [...Je.readings.filter((Mt) => ["temperature", "humidity"].includes(wt(Mt).device_class)), ...r(Je, /^(climate|humidifier)\./)]) },
      security: (o.alarms.length || o.locks.length) && { value: [se, j].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...o.alarms, ...o.locks] }, { name: "Doors and windows", ids: o.openings }].filter((Je) => Je.ids.length) },
      media_players: P.length && { value: L ? L + " playing" : "No media playing", groups: c((Je) => r(Je, /^media_player\./)) },
      maintenance: xe,
      energy: mt.grid && { value: pi(Number(((Va = M[Ve]) == null ? void 0 : Va.state) || 0) * 1e3 + Number(M[mt.grid].state)) + " now", groups: [{ name: "Energy", ids: [...$, mt.grid] }] },
      ...Er(t, c, r)
    }, it = [], Vt = N.filter((Je) => Je.severity !== "warning" && Je.on);
    return Vt.length && it.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: Rt(Vt.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: Vt.map((Je) => Je.entity) }] }), Pn().forEach((Je) => {
      Je.type !== "summary" ? it.push({ key: "path:" + Je.path, name: Je.label || Je.path, icon: Je.icon || "mdi:link-variant", colour: "", value: "" }) : !Je.hidden && Ht[Je.key] && (e || mi(Je.key)) && it.push({ key: Je.key, ...md[Je.key], ...Ht[Je.key] });
    }), it;
  }
  const Tl = (e) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + X(e.key) + '" data-k="sum:' + X(e.key) + '" aria-label="' + X(e.name + (e.value ? ", " + e.value : "")) + '"' + (e.key === "alerts" ? ' style="--sum:' + e.colour + ';--sum-ink:#ffffff"' : e.key === "climate" ? ' style="' + Sl() + '"' : e.colour && Fi(e.colour) ? ' style="' + Fi(e.colour).slice(1) + '"' : "") + ">" + (e.key === "climate" ? Ut : "") + '<div class="tfIcon" aria-hidden="true"' + da(e.id || "", e.icon, e.name) + '></div><div><div class="activityRowName">' + X(e.name) + "</div>" + (e.value ? '<div class="activityRowMeta">' + X(e.value) + "</div>" : "") + "</div></div>";
  function fs(e) {
    const t = Ne();
    Ie = { ...Ie, favourites: t.includes(e) ? t.filter((o) => o !== e) : [...t, e], favHidden: (Ie.favHidden || []).filter((o) => o !== e) }, oo(), ma();
  }
  function Ll(e) {
    document.querySelector("home-assistant") && (de.pushState(null, "", e), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function xd(e, t) {
    if (e.startsWith("path:")) {
      Ll(e.slice(5));
      return;
    }
    bt("summary:" + e, t);
  }
  async function pn() {
    const e = (p) => Promise.resolve().then(() => W(p)).catch(() => null), [t, o, r, c] = await Promise.all([
      e({ type: "frontend/get_user_data", key: Eu }),
      e({ type: "frontend/get_system_data", key: "home" }),
      e({ type: "frontend/get_system_data", key: "security" }),
      e({ type: "usage_prediction/common_control" })
    ]), h = (t == null ? void 0 : t.value) || {};
    Ie = { favourites: h.favourites ?? null, sources: h.sources, hiddenSums: h.hiddenSums, shownSums: h.shownSums, home: h.home, dash: h.dash, named: h.named, favHidden: h.favHidden, suggest: h.suggest, favSeeded: h.favSeeded }, ho = (o == null ? void 0 : o.value) || {}, Yn = (r == null ? void 0 : r.value) || {}, mo = Array.isArray(c == null ? void 0 : c.entities) ? c.entities : [], ra = null, Object.keys(M).length && ma(), _r(), sa = !0, Ja();
  }
  const Dr = "HomeCore";
  async function _r() {
    var r, c, h;
    const e = location.pathname.split("/")[1], t = Ie.named || [];
    if (!((c = (r = i()) == null ? void 0 : r.user) != null && c.is_admin) || !e || t.includes(e)) return;
    const o = () => {
      Ie = { ...Ie, named: [...t, e] }, oo();
    };
    try {
      const p = (h = await W({ type: "lovelace/dashboards/list" })) == null ? void 0 : h.find((D) => D.url_path === e);
      if (!p || p.mode === "yaml") return;
      if (p.title === Dr) {
        o();
        return;
      }
      const g = await W({ type: "lovelace/config", url_path: e }), w = ((g == null ? void 0 : g.views) || []).flatMap((D) => [...D.cards || [], ...(D.sections || []).flatMap((P) => P.cards || [])]);
      if (!w.length || !w.every((D) => (D == null ? void 0 : D.type) === "custom:move-assistant-card" && D.layout === "test-focus")) return;
      await W({ type: "lovelace/dashboards/update", dashboard_id: p.id, title: Dr }), o();
    } catch {
    }
  }
  let hs = null, Ys = 0, Al = !1;
  const El = (e) => {
    const t = e.split(".")[0], o = wt(e).device_class;
    return Ag.includes(t) && (t !== "binary_sensor" || hc.includes(o) || !!Iu[o]);
  }, Rr = (e) => e.startsWith("binary_sensor.") ? Iu[wt(e).device_class] : null;
  async function yd() {
    var e;
    if (!(Al || Date.now() - Ys < 30 * 1e3)) {
      Al = !0, Ys = Date.now();
      try {
        const t = Object.keys(((e = i()) == null ? void 0 : e.states) || {}).filter(El), o = t.length ? await W({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: t }) : null;
        hs = Array.isArray(o) ? o.filter((r) => r.entity_id && r.state != null && r.when) : null;
      } catch {
        hs = null;
      }
      Al = !1, ma();
    }
  }
  function ms() {
    const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), o = (c) => {
      if (!M[c.entity_id] || !El(c.entity_id) || !Co(c.entity_id) || ["unavailable", "unknown"].includes(c.state)) return;
      if (Rr(c.entity_id)) {
        const p = t.get(c.entity_id);
        c.state === "on" ? (!p || c.when > p.when + 1) && t.set(c.entity_id, { ...c, alarm: !0, cleared: null }) : p && !p.cleared && c.when > p.when && (p.cleared = c.when);
        return;
      }
      const h = e.get(c.entity_id);
      (!h || c.when > h.when + 1) && e.set(c.entity_id, c);
    };
    [...hs || []].sort((c, h) => c.when - h.when).forEach(o);
    const r = hs ? Ys / 1e3 - 5 : 0;
    return Object.keys(M).forEach((c) => {
      var g;
      const h = M[c], p = h.last_changed ? Date.parse(h.last_changed) / 1e3 : 0;
      p > r && o({ entity_id: c, state: h.state, when: p, context_user_id: (g = h.context) == null ? void 0 : g.user_id });
    }), [...e.values(), ...t.values()].sort((c, h) => h.when - c.when).slice(0, Dg);
  }
  function Dl(e) {
    var r;
    const t = e.context_user_id && Object.keys(M).find((c) => c.startsWith("person.") && wt(c).user_id === e.context_user_id);
    if (t) return Be(t);
    const o = (r = i()) == null ? void 0 : r.user;
    return o && e.context_user_id === o.id ? o.name : ["automation", "script"].includes(e.context_domain) || e.context_event_type === "automation_triggered" ? e.context_name || "Home Assistant" : "";
  }
  function Yo(e) {
    const t = e.entity_id.split(".")[0], o = String(e.state);
    return t === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[o] || Et(o).toLowerCase() : t === "cover" || t === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[o] || Et(o).toLowerCase() : t === "binary_sensor" ? o === "on" ? "opened" : "closed" : t === "climate" ? o === "off" ? "turned off" : "set to " + Et(o).toLowerCase() : t === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[o] || Et(o).toLowerCase() : t === "alarm_control_panel" ? (Hu[o] || Et(o)).toLowerCase() : t === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[o] || Et(o).toLowerCase() : o === "on" ? "turned on" : o === "off" ? "turned off" : Et(o).toLowerCase();
  }
  function gs(e) {
    const t = e.entity_id, o = e.alarm && Rr(t), r = Be(t) + " " + (o ? o[0] : Yo(e)), c = o ? fa(e.when * 1e3) + (e.cleared ? " · " + o[1] + " since " + fa(e.cleared * 1e3) : "") : [Dl(e), fa(e.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (o ? " alert" : "") + '"><div class="tfIcon' + (o ? " alert" : "") + '" aria-hidden="true"' + da(t, xn(t)) + '></div><button class="tfName" type="button" data-more="' + X(t) + '" data-at="' + Math.round(e.when * 1e3) + '" aria-label="' + X(r + ", " + c + ". More info") + '"><span class="activityRowName">' + X(r) + '</span><span class="activityRowMeta">' + X(c) + "</span></button></div>";
  }
  let Zi = null, kd = 0;
  const _l = [["electricity", "Electricity", 4.3, "kWh"], ["solar", "Solar", 2.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function Md() {
    var t;
    if (Date.now() - kd < 5 * 60 * 1e3) return;
    kd = Date.now();
    const e = [];
    try {
      const o = ((t = await W({ type: "energy/get_prefs" })) == null ? void 0 : t.energy_sources) || [], r = (c) => o.filter((h) => h.type === c).flatMap((h) => c === "grid" ? (h.flow_from || []).map((p) => p.stat_energy_from) : [h.stat_energy_from]).filter(Boolean);
      for (const [c, h, p] of [["electricity", "Electricity", r("grid")], ["solar", "Solar", r("solar")], ["gas", "Gas", r("gas")], ["water", "Water", r("water")]]) {
        if (!p.length) continue;
        const g = await Promise.all(p.map((w) => Promise.resolve(W({ type: "recorder/statistic_during_period", statistic_id: w, calendar: { period: "day" }, types: ["change"] })).then((D) => Number(D == null ? void 0 : D.change) || 0, () => 0)));
        e.push({ key: c, name: h, id: p[0], ids: p, value: g.reduce((w, D) => w + D, 0), unit: wt(p[0]).unit_of_measurement || (c === "gas" || c === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    Zi = e, ma();
  }
  let Ki = null, gi = [];
  function Sd() {
    var h;
    const e = gi = Zi != null && Zi.length ? Zi : _l.map(([p, g, w, D]) => {
      if (p === "solar") {
        const L = Object.keys(M).find((N) => N.endsWith("_solar_today") && !N.includes("made_up_energy"));
        L && Number.isFinite(Number(M[L].state)) && (w = Number(M[L].state));
      }
      const P = "sensor.made_up_energy_" + p;
      return M[P] = { entity_id: P, state: String(w), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: g + " today", unit_of_measurement: D, state_class: "total_increasing" } }, { key: p, name: g, id: P, value: w, unit: D };
    });
    ue.clear(), e.some((p) => p.id === Ki) || (Ki = e[0].id);
    const t = e.map((p) => {
      const g = Number(p.value).toLocaleString(void 0, { maximumFractionDigits: p.value < 10 ? 2 : 1 }) + " " + p.unit, w = _g[p.key], D = p.id === Ki;
      return ue.set(p.id, { name: p.name, text: g, icon: w }), '<div class="activityRow tap' + (D ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + X(p.id) + '" aria-pressed="' + D + '" aria-label="' + X(p.name + ", " + g) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + da("", w, p.name) + '></div><div><div class="activityRowName">' + X(p.name) + '</div><div class="activityRowMeta">' + X(g) + "</div></div></div>";
    }), o = e.find((p) => p.id === Ki), r = (((h = St().opts.energy) == null ? void 0 : h.graph) || "above") === "below", c = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + X(o.id) + '" role="img" aria-label="' + X(o.name) + ', last 24 hours"></svg></div>';
    return Bn("dash:energy", 0, "Energy today", t, c, qa().some((p) => p.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (r ? "" : " graphAbove"));
  }
  function Rl(e) {
    const t = E.querySelector(".tfDash-energy"), o = t == null ? void 0 : t.querySelector(".tfDashGraph svg");
    !o || e === Ki || (Ki = e, t.querySelectorAll("[data-energy-pick]").forEach((r) => {
      const c = r.dataset.energyPick === e;
      r.classList.toggle("picked", c), r.setAttribute("aria-pressed", String(c));
    }), o.dataset.graph = e, o.dataset.drawn = "", wn.set("dash:energy", Sd()), Ur(!0));
  }
  const vs = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, Br = /* @__PURE__ */ new Map();
  async function Pr(e) {
    const t = /* @__PURE__ */ new Date(), o = new Date(t).setHours(0, 0, 0, 0), r = t.getHours(), c = t.getMinutes() / 60, h = Array.from({ length: 24 }, (g, w) => w <= r ? 0 : null);
    if (!e.ids) {
      const g = vs[e.key] || vs.electricity, w = g.map((P, L) => L < r ? P : L === r ? P * c : 0), D = w.reduce((P, L) => P + L, 0) || 1;
      return h.map((P, L) => P == null ? null : e.value * w[L] / D);
    }
    const p = Br.get(e.id);
    if (p && p.day === o && Date.now() - p.at < 5 * 60 * 1e3) return p.hours;
    try {
      const g = await W({ type: "recorder/statistics_during_period", start_time: new Date(o).toISOString(), end_time: t.toISOString(), statistic_ids: e.ids, period: "hour", types: ["change"] });
      e.ids.forEach((P) => ((g == null ? void 0 : g[P]) || []).forEach((L) => {
        const N = typeof L.start == "number" ? L.start : Date.parse(L.start), ae = new Date(N).getHours();
        N >= o && ae < r && (h[ae] += Number(L.change) || 0);
      }));
      const w = new Date(t).setMinutes(0, 0, 0), D = await Promise.all(e.ids.map((P) => Promise.resolve(W({ type: "recorder/statistic_during_period", statistic_id: P, fixed_period: { start_time: new Date(w).toISOString(), end_time: t.toISOString() }, types: ["change"] })).then((L) => Number(L == null ? void 0 : L.change) || 0, () => 0)));
      h[r] = D.reduce((P, L) => P + L, 0);
    } catch {
    }
    return Br.set(e.id, { at: Date.now(), day: o, hours: h }), h;
  }
  async function Zo(e, t) {
    const o = await Pr(t);
    if (!e.isConnected) return;
    const r = Math.max(120, e.clientWidth || 260), c = Math.max(60, e.clientHeight || 130), h = 18, p = c - 18, g = r / 24, w = g * 0.72, D = (/* @__PURE__ */ new Date()).getHours(), P = o.map((se) => se ?? 0), L = Math.max(0, ...P), N = (se) => p - (L > 0 ? se / L * (p - h) : 0), ae = (se) => se.toLocaleString(void 0, { maximumFractionDigits: se < 10 ? 2 : 1 }) + " " + t.unit, re = (se) => String(se).padStart(2, "0") + ":00", z = L > 0 ? P.indexOf(L) : -1;
    e.setAttribute("viewBox", "0 0 " + r + " " + c), e.setAttribute("aria-label", t.name + " today by the hour: " + ae(t.value) + (z >= 0 ? ", most " + ae(L) + " at " + re(z) : "")), e.innerHTML = [h, (h + p) / 2, p].map((se) => '<line x1="0" x2="' + r + '" y1="' + se + '" y2="' + se + '" stroke="var(--line)" stroke-width="1"/>').join("") + o.map((se, j) => se > 0 ? '<rect x="' + (j * g + (g - w) / 2).toFixed(1) + '" y="' + N(se).toFixed(1) + '" width="' + w.toFixed(1) + '" height="' + (p - N(se)).toFixed(1) + '" rx="2" fill="' + (j === D ? "var(--primary)" : "var(--text)") + '"' + (j === D ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((se) => '<text x="' + (se * g).toFixed(1) + '" y="' + (c - 3) + '">' + String(se).padStart(2, "0") + "</text>").join("") + (z >= 0 ? '<text x="0" y="11">Most: ' + X(ae(L)) + " at " + re(z) + "</text>" : "");
  }
  function Nr(e) {
    var t;
    (t = window.matchMedia) != null && t.call(window, "(prefers-reduced-motion: reduce)").matches || e.querySelectorAll("rect").forEach((o, r) => o.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: r * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function $i(e) {
    var r;
    if ((r = window.matchMedia) != null && r.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [t, o] = e.querySelectorAll("path");
    of(e, o, [t].filter(Boolean));
  }
  let vi = null, bi = 0;
  const Co = (e) => !e.startsWith("light.") || Rg.includes((pt.get(e) || "").toLowerCase()), Zs = () => Math.max(2, co((E == null ? void 0 : E.clientWidth) || 0).n), Cd = (e) => {
    const t = Go(e);
    return t.sections.map((o, r) => o && (t.parts || [])[r]).filter(Boolean);
  }, Ks = (e) => Cd(e).slice(0, Ka(e) - 1);
  function Ko(e) {
    const t = St().tiles;
    if (t) return t.filter((r) => M[r] || Ee(r));
    if (!vi) {
      const r = (c) => {
        var h;
        return (((h = M[c]) == null ? void 0 : h.state) === "on" ? 1e6 : 0) + (Xe[c] || 0);
      };
      vi = {
        lights: mt.rooms.flatMap((c) => c.lights).filter((c) => {
          var h;
          return Co(c) && ((h = M[c]) == null ? void 0 : h.state) !== "unavailable";
        }).sort((c, h) => r(h) - r(c) || Be(c).localeCompare(Be(h))),
        climates: mt.rooms.flatMap((c) => c.actions.filter((h) => h.startsWith("climate.")))
      };
    }
    const o = vi.climates.filter((r) => M[r]).slice(0, e > 3 ? 2 : 1);
    return [...vi.lights.filter((r) => M[r]).slice(0, Math.max(0, e - o.length)), ...o];
  }
  const wi = () => {
    var e;
    return ((e = Ie.home) == null ? void 0 : e.welcome) ?? !0;
  }, Xi = () => {
    var t, o;
    const e = (t = i()) == null ? void 0 : t.user;
    return (e == null ? void 0 : e.name) || ((o = Object.values(M).find((r) => {
      var c;
      return r.entity_id.startsWith("person.") && (e == null ? void 0 : e.id) && ((c = r.attributes) == null ? void 0 : c.user_id) === e.id;
    })) == null ? void 0 : o.attributes.friendly_name) || "";
  }, Hr = () => {
    const e = (/* @__PURE__ */ new Date()).getHours(), t = Xi();
    return (e >= 5 && e < 12 ? "Good morning" : e >= 12 && e < 18 ? "Good afternoon" : "Good evening") + (t ? ", " + t : "");
  }, Td = (e, t, o, r) => (c) => '<section class="card tfCard tfDashCard ' + e + '" data-tf data-k="' + t + '" aria-label="' + o + '">' + (r ? '<div class="activityHeader">' + (t === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + o + "</button>" : '<div class="activityTitle">' + o + "</div>") + "</div>" : "") + '<div class="activityRows">' + c + "</div></section>";
  function Ld(e, t) {
    var h, p;
    e.dash = !0, e.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + ((A ? wi() : St().welcome) ? '<span class="tfGreeting">' + X(Hr()) + "</span>" : "") + X(((p = (h = i()) == null ? void 0 : h.config) == null ? void 0 : p.location_name) || "Home") + "</h1>" }), t.length && e.push({ key: "sums", wrap: (g) => '<div class="tfDashBarRow" data-tf data-k="sums">' + Td("tfDash-bar", "sums-bar", "Summaries", !1)(g).replace(" data-tf", "") + "</div>", tiles: t.map((g) => ({ key: "sum:" + g.key, html: Tl(g) })) }), !A && _e().length && e.push({ key: "areas", html: et(0) });
    const o = Ar();
    if (o.length && e.push({ key: "favs", wrap: Td("tfDash-favs", "favs", "Favourites", !0), tiles: o.map((g) => ({ key: "fav:" + g, html: so(g, { area: !0 }) })) }), A)
      return bi = Zs(), Ko(0).forEach((g) => e.push({
        key: "dash:tile:" + g,
        wrap: (w) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + X(g) + '">' + w + "</div>",
        tiles: [{ key: g, html: gt(Ee(g), g) }]
      })), e;
    const r = ms();
    e.push({ key: "dash:act", html: Bn("dash:act", 0, "Activity", r.length ? r.map(gs) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), e.push({ key: "dash:energy", html: Sd() });
    const c = Zs();
    return bi = c, Ko(c >= 3 ? c : c * 2).forEach((g) => e.push({
      key: "dash:tile:" + g,
      wrap: (w) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + X(g) + '">' + w + "</div>",
      tiles: [{ key: g, html: ze(g) ? gt(Ee(g), g) : zi(g, !1, Ks(g)) }]
    })), yd(), Md(), e;
  }
  const Ir = 252, ea = 16, $s = 200, bs = Math.round(Ir * 1.25), $o = 60, Nn = $o + ea, Bl = 3, Pl = {
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
  }, Fr = ["wx", "favs", "act", "energy", "avg"], Xs = ["XS", "S", "M", "L", "XL"], Ad = Xs.length, Tc = ["Narrow", "Wide", "Really wide"], Lc = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4, hourly: 4, sun: 4, moon: 4, uv: 4, humidity: 4, pressure: 4, wind: 4, visibility: 4 }, ws = (e) => !e.includes(".") || !M[e] || e.startsWith("light.") && Gi(e) ? Ad : Math.min(Ad, Cd(e).length + 1), Ka = (e) => {
    const t = St().opts[e] || {}, o = ws(e), r = Number(t.h) || (t.tall ? 5 : Lc[e] || Mn);
    return Math.max(1, Math.min(o, r));
  }, Mn = 2, Ac = 90, Ec = 56, Sn = (e) => {
    var t;
    return Pl[e] || (e.startsWith("room:") ? ((t = je.find((o) => "room:" + o.id === e)) == null ? void 0 : t.name) || "Area" : Be(e));
  }, Nl = 409, Js = 128;
  let un = !1, _t = null, fn = null, Hl = !1, xi = /* @__PURE__ */ new Map(), To = 0, $a = 0;
  const lo = ["title", "sums"], co = (e) => {
    const t = Math.max(1, Math.floor((e + ea) / ($s + ea)));
    return { n: t, w: Math.max(1, Math.min(bs, Math.floor((e - (t - 1) * ea) / t))) };
  }, Dc = () => je.map((e) => "room:" + e.id);
  function Ed() {
    const e = Dc();
    return {
      cells: {},
      spans: { favs: 2 },
      hidden: Object.keys(Pl).filter((t) => {
        var o, r;
        return !["title", ...((o = Ie.home) == null ? void 0 : o.sums) === !1 ? [] : ["sums"], ...((r = Ie.home) == null ? void 0 : r.favs) === !1 ? [] : ["favs"]].includes(t);
      }),
      opts: { favs: { h: 5 }, ...Object.fromEntries(e.map((t) => [t, { h: 5 }])) },
      tiles: e,
      known: nt,
      areasOff: []
    };
  }
  const St = () => A ? Ed() : Ji(), Ji = () => {
    let e = { cells: {}, spans: {}, hidden: [], opts: {}, ...Ie.dash || {} };
    e.sumsOff && (e = { ...e, hidden: [...e.hidden, "sums"] });
    const t = nt.filter((o) => !(e.known || []).includes(o) && !e.hidden.includes(o));
    return t.length ? { ...e, hidden: [...e.hidden, ...t] } : e;
  };
  function Xo(e) {
    A || (Ie = { ...Ie, dash: { ...e, known: nt } }, oo());
  }
  function Xn() {
    const e = (t) => E.querySelector(t);
    return [
      ["title", e(".tfDashTitle"), "full"],
      ["sums", e(".tfDashBarRow"), "full"],
      ["wx", Zn.wx, 2],
      ["areas", e(".tfAreas"), "areas"],
      ["favs", e(".tfDash-favs"), 2],
      ["act", e(".tfDash-act"), 2],
      ["energy", e(".tfDash-energy"), 2],
      ["avg", Zn.avg, 2],
      ...nt.map((t) => [t, Zn[t], Ml[t] || 1]),
      ...[...E.querySelectorAll(".tfDashTiles > [data-k]")].map((t) => [t.dataset.k, t, 1, !0])
    ].filter(([, t]) => t == null ? void 0 : t.isConnected).map(([t, o, r, c = !1]) => ({ key: t, el: o, span: r, tile: c }));
  }
  const Il = (e, t, o) => {
    var r;
    if (e.span === "full") return t;
    if (e.span === "areas") {
      const c = Math.ceil((Nl + Math.max(0, _e().length - 1) * (Js + ea) + ea) / (o + ea));
      return Math.max(Math.min(t, 2), Math.min(c, t - (((r = St().cells.areas) == null ? void 0 : r.col) || 0)));
    }
    return Math.min(t, St().spans[e.key] ?? e.span);
  }, yi = (e) => Ka(e.key);
  function Dd(e, t, o = null) {
    const r = St().cells, c = e.every((g) => !r[g.key] || r[g.key].col + g.cols <= t), h = (g) => r[g.key] || { row: 1e9, col: 0 };
    return (() => {
      const g = /* @__PURE__ */ new Set(), w = /* @__PURE__ */ new Map(), D = (z, se, j, xe) => {
        for (let $ = se; $ < se + xe; $++) for (let Ve = z; Ve < z + j; Ve++) if (g.has(Ve + "," + $)) return !1;
        return !0;
      }, P = (z, se, j) => {
        for (let xe = j; xe < j + z.rows; xe++) for (let $ = se; $ < se + z.cols; $++) g.add($ + "," + xe);
        w.set(z.key, { col: se, row: j, cols: z.cols, rows: z.rows });
      }, L = (z, se, j) => {
        for (se = Math.max(0, Math.min(t - z.cols, se)), j = Math.max(0, j); !D(se, j, z.cols, z.rows); ) j++;
        P(z, se, j);
      }, N = (z) => {
        for (let se = 0; ; se++) for (let j = 0; j <= t - z.cols; j++) if (D(j, se, z.cols, z.rows)) {
          P(z, j, se);
          return;
        }
      };
      o && L(o, _t.col, _t.row);
      const ae = e.filter((z) => z !== o), re = (z, se) => h(z).row - h(se).row || h(z).col - h(se).col;
      return c ? (ae.filter((z) => r[z.key]).sort(re).forEach((z) => L(z, r[z.key].col, r[z.key].row)), ae.filter((z) => !r[z.key]).forEach(N), w) : ([...ae].sort(re).forEach(N), w);
    })();
  }
  function Jo(e, t) {
    const o = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map(), c = (h, p, g) => {
      for (let w = p; w < p + g.rows; w++) for (let D = h; D < h + g.cols; D++) if (o.has(D + "," + w)) return !1;
      return !0;
    };
    return e.forEach((h) => {
      for (let p = 0; ; p++) {
        let g = 0;
        for (; g <= t - h.cols && !c(g, p, h); ) g++;
        if (!(g > t - h.cols)) {
          for (let w = p; w < p + h.rows; w++) for (let D = g; D < g + h.cols; D++) o.add(D + "," + w);
          r.set(h.key, { col: g, row: p, cols: h.cols, rows: h.rows });
          return;
        }
      }
    }), r;
  }
  function Or() {
    const e = St(), t = new Set(e.hidden), o = Xn().filter((p) => !lo.includes(p.key));
    let r = xi;
    if (!r.size) {
      const p = e.pegs || 4, g = o.filter((w) => !t.has(w.key));
      g.forEach((w) => {
        w.cols = Il(w, p, Ir), w.rows = yi(w) ?? Mn;
      }), r = Dd(g, p);
    }
    const c = (p) => !t.has(p.key) && r.get(p.key) || { row: 1e9, col: 0 };
    o.sort((p, g) => c(p).row - c(g).row || c(p).col - c(g).col);
    const h = (e.phone || []).map((p) => o.find((g) => g.key === p && !t.has(p))).filter(Boolean);
    return [...h, ...o.filter((p) => !h.includes(p))];
  }
  const _c = () => {
    const e = Or();
    e.forEach((t, o) => t.el.style.setProperty("--o", String(3 + o))), xs([...Xn().filter((t) => lo.includes(t.key)), ...e].map((t) => t.el));
  };
  function xs(e) {
    if (_t) return;
    const t = n.activeElement;
    let o = null;
    for (const r of new Set(e.map((c) => {
      for (; c && c.parentElement !== E; ) c = c.parentElement;
      return c;
    }).filter(Boolean))) {
      const c = o ? o.nextSibling : E.querySelector(":scope > [data-tf]");
      if (r !== c)
        try {
          E.moveBefore ? E.moveBefore(r, c) : E.insertBefore(r, c);
        } catch {
          E.insertBefore(r, c);
        }
      o = r;
    }
    t && t !== n.activeElement && t.isConnected && t.focus({ preventScroll: !0 });
  }
  const qr = (e, t) => Xo({ ...e, cells: t, pegs: co(E.clientWidth).n });
  function Wa() {
    var xe;
    if (!k || !E) return;
    const e = E.clientWidth, t = e < 2 * Ir + ea, o = v.classList.contains("tfDash");
    A && (un = !1), v.classList.toggle("tfOverview", A);
    const { n: r, w: c } = t ? { n: 2, w: Math.floor((e - ea) / 2) } : co(e);
    vt.classList.add("tfPegs"), vt.style.setProperty("--peg-n", r), vt.style.setProperty("--peg-w", c + "px");
    const h = new Set(St().hidden);
    nt.forEach(($) => {
      var Ve;
      return (Ve = Zn[$]) == null ? void 0 : Ve.classList.toggle("tfNotAdded", h.has($) && !(_t != null && _t.fromTray && _t.key === $));
    }), xa(), v.classList.toggle("tfBoard", o), v.classList.toggle("tfEditing", o && un && !t);
    const p = u("dashEditNav");
    !o && Xa && dl(!1), p && A ? (p.hidden = !o, Xa || (p.classList.remove("active"), p.setAttribute("aria-pressed", "false"), p.setAttribute("aria-label", "Edit Home page"), p.title = "Edit", p.innerHTML = fc)) : p && (p.hidden = !o || t, p.classList.toggle("active", un), p.setAttribute("aria-pressed", String(un)), p.setAttribute("aria-label", un ? "Done editing" : "Edit custom dashboard"), p.title = un ? "Done" : "Edit", p.innerHTML = un ? Nu : fc);
    const g = o ? Xn() : [];
    if ((!o || !A) && E.querySelectorAll(":scope > :is(.hcFloor,.hcFloorBox)").forEach(($) => $.remove()), !o) {
      E.style.height = "", E.querySelectorAll(".tfBoardItem").forEach(($) => {
        $.classList.remove("tfBoardItem", "tfBoardHidden"), $.style.left = $.style.top = $.style.width = $.style.height = "";
      }), (xe = E.querySelector(".tfDash-act > .activityRows")) == null || xe.style.removeProperty("max-height"), tl(!1), v.classList.contains("tfDash") && _c(), ca();
      return;
    }
    if (A) {
      Ol(g, e, t);
      return;
    }
    E.style.setProperty("--peg-w", c + "px");
    const w = new Set(St().hidden), D = c + ea;
    _t != null && _t.fromTray && w.delete(_t.key), g.forEach(($) => $.el.classList.toggle("tfBoardHidden", w.has($.key)));
    const P = g.filter(($) => !w.has($.key) && getComputedStyle($.el).display !== "none");
    let L = 0;
    P.filter(($) => lo.includes($.key)).forEach(($) => {
      $.el.classList.add("tfBoardItem"), Object.assign($.el.style, { width: e + "px", height: "", left: "0px", top: L + "px" });
      const Ve = $.key === "sums" && $.el.querySelector(".tfDash-bar"), Ht = Ve ? Ve.querySelectorAll(".activityRow").length : 0;
      Ve && (Ve.style.maxWidth = "none");
      for (let it = 1; Ve && it <= Ht && (Ve.style.setProperty("--bar-cols", String(Math.ceil(Ht / it))), !(Ve.offsetWidth <= e)); it++)
        ;
      Ve && (Ve.style.maxWidth = ""), L += $.el.offsetHeight + ea;
    }), $a = L;
    const N = P.filter(($) => !lo.includes($.key));
    N.forEach(($) => {
      $.cols = Il($, r, c), $.el.classList.add("tfBoardItem"), $.el.style.width = ($.cols === r ? e : $.cols * c + ($.cols - 1) * ea) + "px", $.el.style.height = "", $.rows = yi($) ?? Math.max(1, Math.ceil(($.el.offsetHeight + ea - 6) / Nn));
    });
    const ae = _t && N.find(($) => $.key === _t.key), re = t && Or().map(($) => $.key), z = ($) => re.includes($.key) ? re.indexOf($.key) : -1, se = t ? Jo([...N].sort(($, Ve) => z($) - z(Ve)), r) : Dd(N, r, ae);
    se.forEach(($) => Object.assign($, { x: $.cols === r ? 0 : $.col * D, y: $a + $.row * Nn, w: $.cols === r ? e : $.cols * c + ($.cols - 1) * ea, h: $.rows * Nn - ea })), N.forEach(($) => {
      const Ve = se.get($.key);
      $.el.style.height = Ve.h + "px", $.el.dataset.rows = t && $.key === "wx" ? 5 : Ka($.key), $.el.toggleAttribute("data-narrow", !t && Ve.cols === 1 && r > 1), $.el.dataset.cols = Ve.cols, $.el.classList.contains("tfDac") && $.el.style.setProperty("--tf-dac-pad", Ve.h - Ac + "px"), !($ === ae && !_t.fromTray) && ($.el.style.left = Ve.x + "px", $.el.style.top = Ve.y + "px");
    }), t || (xi = se), xs([...P.filter(($) => lo.includes($.key)), ...N.slice().sort(($, Ve) => se.get($.key).row - se.get(Ve.key).row || se.get($.key).col - se.get(Ve.key).col)].map(($) => $.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([$, Ve]) => {
      const Ht = se.get($), it = Ht && E.querySelector(Ve), Vt = it == null ? void 0 : it.querySelector(":scope > .activityRows"), Va = it == null ? void 0 : it.querySelector(":scope > .activityHeader");
      if (!Vt || !Va) return;
      const Je = Vt.getBoundingClientRect().top - it.getBoundingClientRect().top, Mt = Ht.rows === 1 ? Ht.h : Math.floor(Ht.h - Je - parseFloat(getComputedStyle(it).paddingBottom)), Ua = Math.max(1, Math.floor(Mt / Ec));
      Vt.style.setProperty("--fill-row", (Mt / Ua).toFixed(2) + "px"), Vt.style.maxHeight = Mt + "px";
    }), To = Math.max(0, ...[...se.values()].map(($) => $.row + $.rows));
    let j = $a + To * Nn - ea;
    j = tl(un && !t, N, se, j, r, c), E.style.height = j + "px", requestAnimationFrame(() => v.classList.add("tfBoardReady")), g.forEach(($) => ys.observe($.el)), Ur(), ca();
  }
  const Ea = { gap: 20, phoneGap: 16, inner: 16, col: 252, nameGap: 16, sumsGap: 16, full: 1336, floorTop: 12, floorHead: 24, floorGap: 16 }, _d = { s: { w: 160, h: 192 }, m: { w: 200, h: 240 }, l: { w: 252, h: 337 } }, Rd = () => {
    var e;
    return _d[(e = Ie.home) == null ? void 0 : e.areaSize] ? Ie.home.areaSize : "s";
  }, Qs = () => {
    var e;
    return ["rows", "columns", "bento"].includes((e = Ie.home) == null ? void 0 : e.areaLayout) ? Ie.home.areaLayout : "bento";
  }, Qi = () => {
    var e;
    return ((e = Ie.home) == null ? void 0 : e.cardsAs) === "rows" ? "rows" : "stacked";
  }, Rc = { byFloor: !0, bentoBoxes: !0, bentoMixed: !1 }, Jn = (e) => {
    var t;
    return ((t = Ie.home) == null ? void 0 : t[e]) ?? Rc[e];
  };
  function Bc() {
    var c;
    const e = Object.values(((c = i()) == null ? void 0 : c.floors) || {}), t = new Set(e.map((h) => h.floor_id)), o = e.map((h) => ({ id: h.floor_id, name: h.name, rooms: je.filter((p) => p.floor === h.floor_id) })), r = je.filter((h) => !t.has(h.floor));
    return r.length && o.push({ id: "", name: e.length ? "Other areas" : "", rooms: r }), o;
  }
  const Fl = (e) => e.classList.toggle("hcMore", e.scrollHeight - e.scrollTop - e.clientHeight > 1);
  let Jt = null, er = [], Zt = /* @__PURE__ */ new Map();
  function ki(e) {
    let t = E.querySelector(".hcHomeLand");
    if (!e) {
      t == null || t.remove();
      return;
    }
    t || (t = Object.assign(document.createElement("div"), { className: "tfBoardLand hcHomeLand" }), E.appendChild(t)), Object.assign(t.style, { left: e.x + "px", top: e.y + "px", width: e.w + "px", height: e.h + "px" });
  }
  function el(e) {
    if (!A || !Xa || e.button !== 0 || E.clientWidth < 2 * Ir + ea) return;
    const t = e.target.closest(".tfBoardItem"), o = t && Xn().find((g) => g.el === t);
    if (!o || lo.includes(o.key) || ze(o.key)) return;
    e.preventDefault();
    const r = E.getBoundingClientRect(), c = Zt.get(o.key);
    Jt = { key: o.key, el: t, on: !1, x0: e.clientX, y0: e.clientY, left: c.x, top: c.y, order: [...er] };
    const h = (g) => {
      const w = g.clientX - Jt.x0, D = g.clientY - Jt.y0;
      if (!Jt.on && Math.hypot(w, D) < 5) return;
      Jt.on || (Jt.on = !0, t.classList.add("tfDragging"), nn() || t.animate([{ scale: "1" }, { scale: "1.05" }, { scale: "1.02" }], { duration: 260, easing: "cubic-bezier(.2,1.35,.4,1)" })), Object.assign(t.style, { left: Jt.left + w + "px", top: Jt.top + D + "px" });
      const P = g.clientX - r.left, L = g.clientY - r.top + E.scrollTop;
      let N = null, ae = 1 / 0;
      if (Zt.forEach((j, xe) => {
        if (xe === o.key || !Jt.order.includes(xe)) return;
        const $ = Math.hypot(P - (j.x + j.w / 2), L - (j.y + j.h / 2));
        $ < ae && (ae = $, N = { key: xe, b: j });
      }), !N) return;
      const re = Jt.order.filter((j) => j !== o.key), z = re.indexOf(N.key) + (P > N.b.x + N.b.w / 2 ? 1 : 0), se = [...re.slice(0, z), o.key, ...re.slice(z)];
      se.join() !== Jt.order.join() ? (Jt.order = se, Wa()) : ki(Zt.get(o.key));
    }, p = () => {
      removeEventListener("pointermove", h), removeEventListener("pointerup", p), removeEventListener("pointercancel", p);
      const g = Jt;
      Jt = null, t.classList.remove("tfDragging"), g.on && ha({ order: g.order }), Wa(), g.on && !nn() && setTimeout(() => Zp(t), 340);
    };
    addEventListener("pointermove", h), addEventListener("pointerup", p), addEventListener("pointercancel", p);
  }
  function Ol(e, t, o) {
    var Bp;
    const r = new Set(St().hidden);
    e.forEach((Le) => Le.el.classList.toggle("tfBoardHidden", r.has(Le.key)));
    const c = e.filter((Le) => !r.has(Le.key) && getComputedStyle(Le.el).display !== "none"), h = o ? Ea.phoneGap : Ea.gap, p = Math.min(t, Ea.full);
    let g = 0;
    const w = td();
    v.classList.toggle("hcSumsFit", ed()), v.classList.toggle("hcFavStrip", w);
    const D = c.filter((Le) => lo.includes(Le.key) || w && Le.key === "favs");
    D.sort((Le, lt) => ["title", "sums", "favs"].indexOf(Le.key) - ["title", "sums", "favs"].indexOf(lt.key)), D.forEach((Le) => {
      Le.el.classList.add("tfBoardItem"), Le.el.toggleAttribute("data-narrow", !1), Object.assign(Le.el.style, { width: (Le.key === "title" ? t : p) + "px", height: "", left: "0px", top: g + "px" });
      const lt = Le.key !== "title" && (Le.el.querySelector(".tfDash-bar>.activityRows") || Le.key === "favs" && Le.el.querySelector(":scope>.activityRows")), Ra = lt ? lt.children.length : 0;
      if (lt && (lt.classList.remove("hcBarRows"), !o && lt.scrollWidth > lt.clientWidth + 1))
        for (let pa = 2; pa <= Ra && (lt.classList.add("hcBarRows"), lt.style.setProperty("--bar-cols", String(Math.ceil(Ra / pa))), !(lt.scrollWidth <= lt.clientWidth + 1)); pa++)
          ;
      g += Le.el.offsetHeight + (Le.key === "title" ? Ea.nameGap : Ea.sumsGap);
    });
    const P = o ? 1 : Math.max(0.85, Math.min(1, t / Ea.full)), L = ["favs"], N = (Jt == null ? void 0 : Jt.order) || ((Bp = Ie.home) == null ? void 0 : Bp.order);
    er = N ? [...N.filter((Le) => L.includes(Le)), ...L.filter((Le) => !N.includes(Le))] : L;
    const re = c.filter((Le) => L.includes(Le.key) && !(w && Le.key === "favs"));
    Zt = /* @__PURE__ */ new Map();
    const z = (Le, lt) => {
      if (Zt.set(Le.key, lt), Object.assign(Le.el.style, { width: lt.w + "px", height: lt.h + "px" }), Jt != null && Jt.on && Jt.key === Le.key) {
        ki(lt);
        return;
      }
      Object.assign(Le.el.style, { left: lt.x + "px", top: lt.y + "px" });
    }, se = o ? t : Math.round((2 * Ea.col + Ea.inner) * P), j = Rd(), xe = _d[j], $ = Qs(), Ve = Jn("byFloor"), Ht = Qi() === "stacked" && !o && re.length > 0;
    let it = 0, Vt = 0, Va = g;
    re.forEach((Le) => {
      Le.el.classList.add("tfBoardItem"), Le.el.dataset.rows = 5, Le.el.dataset.cols = 2, Le.el.toggleAttribute("data-narrow", !1), Object.assign(Le.el.style, { width: se + "px", height: "" });
      const lt = Le.el.offsetHeight;
      if (Ht) {
        z(Le, { x: 0, y: Va, w: se, h: lt }), Va += lt + h;
        return;
      }
      it && it + se > t && (g += Vt + h, it = 0, Vt = 0), z(Le, { x: it, y: g, w: se, h: lt }), it += se + h, Vt = Math.max(Vt, lt);
    }), re.length && !Ht && (g += Vt + h);
    const Je = Ht ? se + h : 0, Mt = Ht ? t - se - h : t, Ua = o ? Math.floor((t - h) / 2) : Math.round(xe.w * P), Qd = Math.round(xe.h * P), gl = o ? 2 : Math.max(1, Math.floor((Mt + h) / (Ua + h))), _p = new Map(c.filter((Le) => ze(Le.key)).map((Le) => [Le.key, Le])), _i = (Ve ? Bc() : [{ id: "", name: "", rooms: je }]).map((Le) => ({ ...Le, cards: Le.rooms.map((lt) => _p.get("room:" + lt.id)).filter(Boolean) })).filter((Le) => Le.cards.length), qc = $ === "bento", Wc = qc && Jn("bentoMixed"), Cf = qc && Ve && Jn("bentoBoxes"), Tf = $ === "columns" && Ve && !o, fd = 12, Lf = (Le) => Le.name ? Ea.floorHead + Ea.floorGap : 0, Vc = (Le, lt, Ra) => {
      const pa = /* @__PURE__ */ new Set(), ga = [];
      Le.cards.forEach((kt, $r) => {
        const On = Wc && $r === 0 && lt >= 2 && Le.cards.length > 1, Xr = On ? 2 : 1, ec = On && !o ? 2 : 1;
        kt.el.classList.remove("hcAreaS", "hcAreaM", "hcAreaL", "hcAreaBig"), kt.el.classList.add("hcArea" + j.toUpperCase()), kt.el.classList.toggle("hcAreaBig", On), kt.el.style.setProperty("--hc-k", String(P)), kt.el.classList.add("tfBoardItem"), kt.el.dataset.rows = ec > 1 ? 10 : 5, kt.el.dataset.cols = Xr, kt.el.toggleAttribute("data-narrow", !1);
        for (let tc = 0; ; tc++) {
          const Yc = [...Array(Math.max(0, lt - Xr + 1)).keys()].find((Zc) => [...Array(Xr).keys()].every((Kc) => [...Array(ec).keys()].every((_f) => !pa.has(tc + _f + "," + (Zc + Kc)))));
          if (Yc != null) {
            [...Array(Xr).keys()].forEach((Zc) => [...Array(ec).keys()].forEach((Kc) => pa.add(tc + Kc + "," + (Yc + Zc)))), ga.push({ it: kt, r: tc, c: Yc, sc: Xr, sr: ec });
            break;
          }
        }
      });
      const an = Math.max(0, ...ga.map((kt) => kt.r + kt.sr));
      qc && !o && ga.forEach((kt) => {
        for (; kt.r + kt.sr < an && !pa.has(kt.r + kt.sr + "," + kt.c) && kt.sc === 1; )
          pa.add(kt.r + kt.sr + "," + kt.c), kt.sr++;
      }), ga.forEach((kt) => Object.assign(kt.it.el.style, { width: kt.sc * Ra + (kt.sc - 1) * h + "px", height: o ? "" : kt.sr * Qd + (kt.sr - 1) * h + "px" }));
      const Hs = [...Array(an)].map(() => o ? 0 : Qd);
      o && ga.forEach((kt) => {
        Hs[kt.r] = Math.max(Hs[kt.r], kt.it.el.offsetHeight);
      });
      const Is = [];
      let ur = Lf(Le);
      return Hs.forEach((kt, $r) => {
        Is[$r] = ur, ur += kt + h;
      }), { h: ur - (an ? h : 0), places: ga.map((kt) => ({ it: kt.it, x: kt.c * (Ra + h), y: Is[kt.r], w: kt.sc * Ra + (kt.sc - 1) * h, h: Hs.slice(kt.r, kt.r + kt.sr).reduce(($r, On) => $r + On, 0) + (kt.sr - 1) * h })) };
    }, jc = new Map([...E.querySelectorAll(":scope > .hcFloor")].map((Le) => [Le.dataset.floor, Le])), zc = new Map([...E.querySelectorAll(":scope > .hcFloorBox")].map((Le) => [Le.dataset.floor, Le])), Rp = [], Af = (Le, lt, Ra, pa) => {
      if (!Le.name) return;
      let ga = jc.get(Le.id);
      jc.delete(Le.id), ga || (ga = Object.assign(document.createElement("div"), { className: "hcFloor" }), ga.dataset.floor = Le.id, E.appendChild(ga)), ga.dataset.sig !== Le.name && (ga.dataset.sig = Le.name, ga.innerHTML = '<h2 class="hcFloorName">' + X(Le.name) + "</h2>"), Object.assign(ga.style, { left: lt + "px", top: Ra + "px", width: pa + "px" }), Rp.push(ga);
    }, Ef = (Le, lt, Ra, pa, ga) => {
      let an = zc.get(Le.id);
      zc.delete(Le.id), an || (an = Object.assign(document.createElement("div"), { className: "hcFloorBox" }), an.dataset.floor = Le.id, an.setAttribute("aria-hidden", "true"), E.prepend(an)), Object.assign(an.style, { left: lt + "px", top: Ra + "px", width: pa + "px", height: ga + "px" });
    }, Df = (Le) => parseFloat(getComputedStyle(Le.cards[0].el).paddingLeft) || 0, Gc = (Le, lt, Ra, pa, ga = 0) => {
      Af(Le, Ra + ga, pa, (lt.w ?? t) - ga), lt.places.forEach((an) => z(an.it, { x: Ra + an.x, y: pa + an.y, w: an.w, h: an.h }));
    };
    if (_i.length && re.length && !Ht && (g += Ea.floorTop), Tf) {
      let Le = 0, lt = g;
      _i.forEach((Ra) => {
        const pa = { ...Vc(Ra, 1, Ua), w: Ua };
        Le && Le + Ua > Mt && (g = lt + h + Ea.floorTop, Le = 0), Gc(Ra, pa, Je + Le, g), lt = Math.max(lt, g + pa.h), Le += Ua + h;
      }), g = lt + h;
    } else if (Cf) {
      const Le = Array(gl).fill(g);
      _i.forEach((lt) => {
        const Ra = lt.cards.length + (Wc && lt.cards.length > 1 ? 3 : 0), pa = o ? 2 : Math.min(gl, Math.max(Wc && lt.cards.length > 1 ? 2 : 1, Ra <= 3 ? Ra : Math.ceil(Ra / 2))), ga = pa * (Ua + h) - h, an = Math.floor((ga - 2 * fd - (pa - 1) * h) / pa), Hs = { ...Vc(lt, pa, an), w: ga - 2 * fd };
        let Is = 0, ur = 1 / 0;
        for (let On = 0; On + pa <= gl; On++) {
          const Xr = Math.max(...Le.slice(On, On + pa));
          Xr < ur && (ur = Xr, Is = On);
        }
        const kt = Je + Is * (Ua + h), $r = Hs.h + 2 * fd;
        Ef(lt, kt, ur, ga, $r), Gc(lt, Hs, kt + fd, ur + fd, Df(lt));
        for (let On = Is; On < Is + pa; On++) Le[On] = ur + $r + h;
      }), g = Math.max(g, ...Le);
    } else
      _i.forEach((Le, lt) => {
        lt && (g += Ea.floorTop);
        const Ra = Vc(Le, gl, Ua);
        Gc(Le, { ...Ra, w: Mt }, Je, g), g += Ra.h + h;
      });
    Ht && (g = Math.max(g, Va)), jc.forEach((Le) => Le.remove()), zc.forEach((Le) => Le.remove()), Jt != null && Jt.on || ki(null), E.style.height = Math.max(0, g - h) + "px", xs([...D.map((Le) => Le.el), ...re.map((Le) => Le.el), ...Rp, ..._i.flatMap((Le) => Le.cards.map((lt) => lt.el))]), tl(!1), e.forEach((Le) => [...Le.el.children].forEach((lt) => lt.toggleAttribute("inert", Xa)));
    const Uc = E.querySelector(".tfDash-favs>.activityRows");
    Uc && (Uc.classList.toggle("hcFadeList", !w), Fl(Uc)), requestAnimationFrame(() => v.classList.add("tfBoardReady")), e.forEach((Le) => ys.observe(Le.el)), ca();
  }
  const Ga = () => {
    Hl || (Hl = !0, requestAnimationFrame(() => {
      Hl = !1, Wa();
    }));
  }, ys = new ResizeObserver(() => {
    _t || Ga();
  });
  function Bd(e, t, o) {
    const r = o + ea, c = e * o + (e - 1) * ea, h = t * Nn - ea, p = ea / 2, g = r / Math.max(1, Math.round(r / (Nn / 4))), w = Nn / 4, D = 6;
    let P = "";
    for (let L = 0; L <= e; L++) for (let N = 0; N <= t; N++) {
      const ae = L * r - p, re = N * Nn - p;
      P += "M" + (ae - D) + " " + re + "H" + (ae + D) + "M" + ae + " " + (re - D) + "V" + (re + D);
    }
    return '<svg width="' + c + '" height="' + h + '" viewBox="0 0 ' + c + " " + h + '"><defs><pattern id="tfGridDots" patternUnits="userSpaceOnUse" x="' + -p + '" y="' + -p + '" width="' + g.toFixed(3) + '" height="' + w + '"><circle cx="0" cy="0" r="1.4"></circle><circle cx="' + g.toFixed(3) + '" cy="0" r="1.4"></circle><circle cx="0" cy="' + w + '" r="1.4"></circle><circle cx="' + g.toFixed(3) + '" cy="' + w + '" r="1.4"></circle></pattern></defs><rect class="tfGridDots" x="' + -p + '" y="' + -p + '" width="' + (c + ea) + '" height="' + (h + ea) + '" fill="url(#tfGridDots)"></rect><path class="tfGridCross" d="' + P + '"></path></svg>';
  }
  function tl(e, t = [], o = /* @__PURE__ */ new Map(), r = 0, c = 1, h = Ir) {
    E.querySelectorAll(".tfEditChips").forEach((P) => {
      (!e || !P.closest(".tfBoardItem")) && P.remove();
    }), E.querySelectorAll(".tfFavHides").forEach((P) => P.remove()), E.querySelectorAll(".tfBoardItem").forEach((P) => [...P.children].forEach((L) => {
      L.classList.contains("tfEditChips") || L.toggleAttribute("inert", e);
    }));
    let p = E.querySelector(".tfBoardCells"), g = E.querySelector(".tfBoardLand");
    if (!e)
      return p == null || p.remove(), g == null || g.remove(), Lo(), r;
    const w = To + Bl;
    if (p || (p = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), p.setAttribute("aria-hidden", "true"), E.prepend(p)), p.style.top = $a + "px", p.dataset.size !== c + "x" + w + "x" + h && (p.dataset.size = c + "x" + w + "x" + h, p.innerHTML = Bd(c, w, h)), r = Math.max(r, $a + w * Nn - ea), t.forEach((P) => {
      const L = P.el;
      !L || L.querySelector(":scope > .tfEditChips") || L.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + pc + '</span><button class="tfEditChip" type="button" data-board-more="' + X(P.key) + '" aria-label="' + X(Sn(P.key)) + ' options" aria-haspopup="menu">' + kg + "</button></div>");
    }), _t && o.has(_t.key)) {
      g || (g = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), E.appendChild(g));
      const P = o.get(_t.key);
      Object.assign(g.style, { left: P.x + "px", top: P.y + "px", width: P.w + "px", height: P.h + "px" });
    } else g == null || g.remove();
    const D = E.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (D) {
      const P = D.getBoundingClientRect();
      D.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...D.querySelectorAll('[data-k^="fav:"]')].map((L) => {
        const N = L.getBoundingClientRect(), ae = L.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + X(ae) + '" aria-label="Hide ' + X(Be(ae)) + ' from the dashboard" style="left:' + Math.round(N.right - P.left - 42) + "px;top:" + Math.round(N.top - P.top + (N.height - 32) / 2) + 'px">' + Ru + "</button>";
      }).join("") + "</div>");
    }
    return r;
  }
  let al = "";
  function ql(e) {
    un = e, e || (_t = null, _a = oa = !1, Lo()), Wa(), e ? al = JSON.stringify(Ie) : al && JSON.stringify(Ie) !== al && Qn("Changes saved");
  }
  function Pc(e, t) {
    var z, se;
    Lo();
    const o = xi.get(e), { n: r } = co(E.clientWidth), c = St(), h = c.spans[e] ?? (ze(e) ? 1 : 2);
    if (!o) return;
    const p = o.cols >= r, g = (j, xe, $) => '<button type="button" role="menuitem" data-board-act="' + j + '"' + ($ ? " disabled" : "") + ">" + xe + "</button>", w = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    w.setAttribute("role", "menu"), w.setAttribute("aria-label", Sn(e) + " options");
    const D = E.querySelector('.tfDashTiles > [data-k="' + CSS.escape(e) + '"]'), P = ws(e), L = Ka(e), N = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + Xs.map((j, xe) => '<button type="button" role="menuitemradio" aria-checked="' + (xe + 1 === L) + '" aria-label="' + j + ", " + (xe + 1) + (xe ? " rows" : " row") + '" data-board-act="h:' + (xe + 1) + '"' + (xe < P ? "" : " disabled") + ">" + j + "</button>").join("") + "</div></div>", ae = Fr.includes(e) || ze(e) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + Tc.map((j, xe) => '<button type="button" role="menuitemradio" aria-checked="' + (xe + 1 === Math.min(h, r)) + '" aria-label="' + j + ", " + (xe + 1) + (xe ? " columns" : " column") + '" data-board-act="w:' + (xe + 1) + '"' + (xe < r ? "" : " disabled") + ">" + j + "</button>").join("") + "</div></div>" : "";
    w.innerHTML = N + ae + (e === "energy" ? g("graph", (((z = c.opts.energy) == null ? void 0 : z.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + g("left", "Move left", p || o.col === 0) + g("right", "Move right", p || o.col + o.cols >= r) + g("up", "Move up", o.row <= 0) + g("down", "Move down") + (D ? g("remove", "Remove") : g("hide", "Hide")), E.appendChild(w);
    const re = Math.min(o.x + o.w - w.offsetWidth, E.clientWidth - w.offsetWidth);
    Object.assign(w.style, { left: Math.max(0, re) + "px", top: o.y + 28 + "px" }), fn = { key: e, menu: w, opener: t }, (se = w.querySelector("button:not([disabled])")) == null || se.focus();
  }
  function Lo(e) {
    if (!fn) return;
    const { menu: t, opener: o } = fn;
    fn = null, t.remove(), e && (o == null || o.focus());
  }
  const tr = () => Object.fromEntries([...xi].map(([e, t]) => [e, { col: t.col, row: t.row }]));
  function Pd(e, t) {
    var g, w;
    if (t === "remove") {
      Lo(), Nc(e);
      return;
    }
    const o = Ie, r = St(), c = tr(), h = c[e] || { col: 0, row: 0 };
    t.startsWith("w:") && (r.spans = { ...r.spans, [e]: t === "w:full" ? "full" : Number(t.slice(2)) }), t.startsWith("h:") && (r.opts = { ...r.opts, [e]: { ...r.opts[e] || {}, h: Number(t.slice(2)), tall: void 0 } }), t === "graph" && (r.opts = { ...r.opts, energy: { ...r.opts.energy || {}, graph: (((g = r.opts.energy) == null ? void 0 : g.graph) || "above") === "above" ? "below" : "above" } }), t === "left" && (c[e] = { ...h, col: h.col - 1 }), t === "right" && (c[e] = { ...h, col: h.col + 1 }), t === "up" && (c[e] = { ...h, row: h.row - 1 }), t === "down" && (c[e] = { ...h, row: h.row + 1 }), t === "hide" && (r.hidden = [.../* @__PURE__ */ new Set([...r.hidden, e])]), ["left", "right", "up", "down"].includes(t) && (_t = { key: e, col: c[e].col, row: c[e].row }), qr(r, c), _t && (Wa(), _t = null, qr(St(), tr()));
    const p = /^[hw]:/.test(t) && !nn() && (fn == null ? void 0 : fn.menu.querySelector('[data-board-act="' + CSS.escape(t) + '"]'));
    if (p) {
      const D = fn;
      p.parentElement.querySelectorAll("[aria-checked]").forEach((P) => P.setAttribute("aria-checked", String(P === p))), setTimeout(() => {
        fn === D && Lo();
      }, Ta.tabs.dur);
    } else Lo();
    t === "graph" && (wn.delete("dash:energy"), ma()), t.startsWith("h:") && e.includes(".") && ma(), Wa(), t !== "hide" ? (w = E.querySelector('[data-board-more="' + CSS.escape(e) + '"]')) == null || w.focus() : Qn(Sn(e) + " hidden", ei(o));
  }
  const ks = (e) => {
    var t;
    return nt.includes(e) && !(((t = Ie.dash) == null ? void 0 : t.cells) || {})[e] ? " added" : " put back";
  };
  function ar(e) {
    const t = St(), o = Sn(e) + ks(e);
    Xo({ ...t, hidden: t.hidden.filter((r) => r !== e) }), Wa(), Qn(o);
  }
  const nl = () => St().tiles || [...E.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => e.dataset.k).filter((e) => !St().hidden.includes(e));
  function Wl(e, t) {
    const o = St();
    qr({ ...o, tiles: e, hidden: o.hidden.filter((r) => !r.includes(".")) }, t), ma(), ca();
  }
  const Vl = (e) => {
    Wl([...nl().filter((t) => t !== e), e], tr()), Qn(Sn(e) + " added"), Hn(e);
  }, Nc = (e) => {
    const t = Ie, o = tr();
    delete o[e], Wl(nl().filter((r) => r !== e), o), Qn(Sn(e) + " removed", ei(t));
  };
  let jl = 0;
  function Qn(e, t = null) {
    var p;
    const o = u("toast");
    if (!o) return;
    if (Qh(o, e), t) {
      const g = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      g.addEventListener("click", () => {
        clearTimeout(jl), o.classList.remove("show", "withAction"), t();
      }), o.appendChild(g);
    }
    const r = v.getBoundingClientRect(), c = (p = n.querySelector(".bottomNav")) == null ? void 0 : p.getBoundingClientRect(), h = Bt.classList.contains("open") && !po ? Math.min(r.right, Bt.getBoundingClientRect().left) : r.right;
    o.style.left = (r.left + h) / 2 + "px", o.style.bottom = (c != null && c.height ? window.innerHeight - c.top + 12 : 26) + "px", o.classList.add("tfToast", "show"), o.classList.toggle("withAction", !!t), em(o), clearTimeout(jl), jl = setTimeout(() => o.classList.remove("show", "withAction"), t ? 5e3 : Ta.confirm.stay);
  }
  const Wr = 700, nr = 1e3, Da = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  Da.setAttribute("role", "tooltip"), Da.setAttribute("aria-hidden", "true"), v.appendChild(Da);
  let Ms = null, Ao = 0, Vr = 0, jr = -1 / 0;
  const zl = (e) => {
    if (e.nodeType !== 1) return !1;
    const t = getComputedStyle(e);
    return t.textOverflow === "ellipsis" && e.scrollWidth > e.clientWidth + 1 || t.webkitLineClamp !== "none" && e.scrollHeight > e.clientHeight + 1;
  }, zr = (e) => {
    for (let t = e; t && t !== v; t = t.parentElement) if (zl(t)) return t;
    return null;
  };
  function Nd(e, t) {
    clearTimeout(Ao), clearTimeout(Vr);
    const o = () => {
      if (!e.isConnected) return;
      Ms = e, Da.textContent = t, Da.hidden = !1;
      const r = e.getBoundingClientRect(), c = Da.getBoundingClientRect(), h = r.top - c.height - 8 >= 8 ? r.top - c.height - 8 : r.bottom + 8;
      Da.style.left = Math.max(8, Math.min(window.innerWidth - c.width - 8, r.left + r.width / 2 - c.width / 2)) + "px", Da.style.top = h + "px";
    };
    !Da.hidden || performance.now() - jr < nr ? o() : Ao = setTimeout(o, Wr);
  }
  function Gr() {
    clearTimeout(Ao), clearTimeout(Vr), Da.hidden || (jr = performance.now()), Da.hidden = !0, Ms = null;
  }
  n.addEventListener("pointerover", (e) => {
    if (e.pointerType === "touch") return;
    if (Da.contains(e.target)) {
      clearTimeout(Vr);
      return;
    }
    const t = zr(e.target);
    if (t && Ye.names === "scroll" && t.matches(Qo)) {
      Ss(t);
      return;
    }
    if (t) {
      t !== Ms ? Nd(t, t.textContent.trim()) : clearTimeout(Vr);
      return;
    }
    clearTimeout(Ao), clearTimeout(Vr), Vr = setTimeout(Gr, 120);
  }), n.addEventListener("focusin", (e) => {
    var r;
    const t = e.target;
    if (!((r = t.matches) != null && r.call(t, ":focus-visible"))) return;
    let o = [t, ...t.querySelectorAll("*")].filter(zl);
    Ye.names === "scroll" && (o.filter((c) => c.matches(Qo)).forEach(Ss), o = o.filter((c) => !c.matches(Qo))), o.length && Nd(t, o.map((c) => c.textContent.trim()).join(" · "));
  }), n.addEventListener("focusout", (e) => {
    e.target === Ms && Gr();
  }), n.addEventListener("keydown", (e) => {
    e.key === "Escape" && !Da.hidden && (e.stopPropagation(), Gr());
  }, !0), window.addEventListener("scroll", () => {
    (!Da.hidden || Ao) && Gr();
  }, { capture: !0, passive: !0 });
  const Qo = ".activityRowName,.activityRowMeta", Mi = /* @__PURE__ */ new WeakSet();
  function Ss(e) {
    var o;
    if (Ye.names !== "scroll" || Mi.has(e) || e.closest("[inert]") || (o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    Mi.add(e);
    const t = () => Promise.all([e.closest(".workoutPanel"), e.closest(".panelExpanded")].filter(Boolean).flatMap((r) => r.getAnimations()).map((r) => r.finished.catch(() => {
    })));
    setTimeout(async () => {
      await t();
      const r = e.isConnected && !e.closest("[inert]") ? e.scrollWidth - e.clientWidth : 0;
      if (r < 2) {
        Mi.delete(e);
        return;
      }
      const c = r / 30 * 1e3, h = c + 1e3 + c;
      e.style.textOverflow = "clip";
      const p = e.animate([
        { textIndent: "0px", offset: 0, easing: "ease-in-out" },
        { textIndent: -r + "px", offset: c / h },
        { textIndent: -r + "px", offset: (1e3 + c) / h, easing: "ease-in-out" },
        { textIndent: "0px", offset: 1 }
      ], { duration: h });
      p.onfinish = p.oncancel = () => {
        e.style.textOverflow = "", Mi.delete(e);
      };
    }, 600);
  }
  const ol = new IntersectionObserver((e) => e.forEach((t) => {
    t.isIntersecting && !t.target.closest("[inert]") && (ol.unobserve(t.target), Ss(t.target));
  }), { threshold: 1 });
  let Si = !1;
  new MutationObserver(() => {
    Si || Ye.names !== "scroll" || (Si = !0, setTimeout(() => {
      Si = !1, n.querySelectorAll(Qo).forEach((e) => {
        !e.dataset.glided && zl(e) && (e.dataset.glided = "1", ol.observe(e));
      });
    }, 300));
  }).observe(n, { childList: !0, subtree: !0 });
  const ei = (e) => () => {
    Ie = e, oo(), ma(), Wa(), ca();
  };
  function Hn(e) {
    const t = () => E.querySelector('.tfDashTiles > [data-k="' + CSS.escape(e) + '"]');
    setTimeout(() => {
      var p;
      const o = t();
      if (!o) return;
      const r = (p = window.matchMedia) == null ? void 0 : p.call(window, "(prefers-reduced-motion: reduce)").matches, c = o.getBoundingClientRect();
      (c.top < 0 || c.bottom > window.innerHeight) && o.scrollIntoView({ behavior: r ? "auto" : "smooth", block: "center" });
      const h = (g) => "0 0 0 4px color-mix(in srgb,var(--primary) " + g + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + g + "%,transparent)";
      o.animate([{ boxShadow: h(55) }, { boxShadow: h(0) }], { duration: 1500, easing: r ? "steps(1, end)" : "ease-out" });
    }, Hd(e) ? 260 : 0);
  }
  function Hd(e) {
    const t = xi.get(e);
    if (!t || !Bt.classList.contains("open") || po) return !1;
    const { n: o, w: r } = co(E.clientWidth), c = Bt.getBoundingClientRect().left - E.getBoundingClientRect().left, h = (w) => w * (r + ea) + t.cols * r + (t.cols - 1) * ea <= c;
    if (h(t.col)) return !1;
    const p = /* @__PURE__ */ new Set();
    xi.forEach((w, D) => {
      if (D !== e) for (let P = w.row; P < w.row + w.rows; P++) for (let L = w.col; L < w.col + w.cols; L++) p.add(L + "," + P);
    });
    const g = (w, D) => {
      for (let P = D; P < D + t.rows; P++) for (let L = w; L < w + t.cols; L++) if (p.has(L + "," + P)) return !1;
      return !0;
    };
    for (let w = 0; w <= To; w++) for (let D = 0; D + t.cols <= o && h(D); D++)
      if (g(D, w))
        return qr(St(), { ...tr(), [e]: { col: D, row: w } }), Wa(), !0;
    return !1;
  }
  const Gl = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, Ul = [["page", "Page"], ["cards", "Cards"], ["areas", "Areas"], ["favs", "Favourites"]];
  let Yl = "page";
  const Zl = (e) => e.matches('[data-tray="welcome"],[data-tray="phone"]') ? "page" : e.querySelector("[data-room-add]") ? "areas" : e.querySelector('[data-tray="favs"]') ? "favs" : "cards";
  function il(e = !1) {
    const t = Bt.querySelector(".tfTrayInner"), o = Bt.querySelector(".hcTrayTabs"), r = o.querySelector(".rubberIndicator");
    let c = !0;
    t.querySelectorAll(":scope>.tfTraySection").forEach((p) => {
      p.hidden = Zl(p) !== Yl, p.classList.toggle("hcFirst", !p.hidden && c), p.hidden || (c = !1);
    }), o.querySelectorAll("[data-tray-tab]").forEach((p) => {
      const g = p.dataset.trayTab === Yl;
      p.classList.toggle("active", g), p.setAttribute("aria-selected", String(g));
    });
    const h = o.querySelector(".tab.active");
    h != null && h.offsetWidth && (r.style.transition = "none", e ? bc(r, r.offsetLeft, r.offsetWidth, h.offsetLeft, h.offsetWidth) : (r.style.left = h.offsetLeft + "px", r.style.width = h.offsetWidth + "px"));
  }
  const Bt = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Bt.setAttribute("aria-label", "Edit custom dashboard"), Bt.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit custom dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit custom dashboard"><div class="rubberIndicator" aria-hidden="true"></div>' + Ul.map(([e, t], o) => '<button class="tab segBtn' + (o ? "" : " active") + '" type="button" role="tab" aria-selected="' + !o + '" data-tray-tab="' + e + '">' + t + "</button>").join("") + '</div><section class="tfTraySection" data-tray="welcome"></section><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection" data-tray="weather"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd hcAddBtn" type="button" data-tile-add aria-expanded="false">' + uc + '<span>Add tile</span></button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection"><div class="sectionLabel">Areas</div><p class="tfTrayNote">Which areas the Areas card shows, and one area on its own instead.</p><button class="pill tfTrayAdd" type="button" data-area-choose aria-expanded="false">Choose areas</button><button class="pill tfTrayAdd hcAddBtn" type="button" data-room-add aria-expanded="false">' + uc + '<span>Add area</span></button><ul class="tfTrayList" data-tray="roompick" hidden></ul></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-fav-add aria-expanded="false">' + uc + '<span>Add favourite</span></button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', v.appendChild(Bt);
  const Qa = Object.assign(document.createElement("div"), { className: "card tfTrayPop" });
  Qa.setAttribute("role", "dialog"), Qa.setAttribute("aria-label", "Areas"), Qa.hidden = !0, v.appendChild(Qa);
  const ti = () => Bt.querySelector("[data-area-choose]");
  function Id() {
    const e = new Set(_e().map((t) => t.id));
    Qa.innerHTML = '<div class="tfTrayPopTitle">Areas</div>' + je.map((t) => '<div class="tfTrayPopRow"><button class="switch' + (e.has(t.id) ? " on" : "") + '" type="button" role="switch" aria-checked="' + e.has(t.id) + '" aria-label="' + X(t.name) + '" data-area-on="' + X(t.id) + '"></button><span class="tfIcon"><span class="tfAreaGlyph"' + da("area:" + t.id, t.icon || "mdi:texture-box", t.name) + '></span></span><span class="tfTrayPopName">' + X(t.name) + "</span></div>").join(""), io(Qa);
  }
  function Kl() {
    var e;
    Qa.hidden || (Qa.hidden = !0, (e = ti()) == null || e.setAttribute("aria-expanded", "false"));
  }
  function $l() {
    if (!Qa.hidden) {
      Kl();
      return;
    }
    Id(), Qa.hidden = !1, ti().setAttribute("aria-expanded", "true");
    const e = ti().getBoundingClientRect();
    Qa.style.top = Math.max(16, Math.min(e.top - 12, innerHeight - Qa.offsetHeight - 16)) + "px";
  }
  Qa.addEventListener("click", (e) => {
    var c;
    const t = e.target.closest("[data-area-on]");
    if (!t) return;
    const o = !t.classList.contains("on"), r = new Set(((c = Ie.dash) == null ? void 0 : c.areasOff) || []);
    o ? r.delete(t.dataset.areaOn) : r.add(t.dataset.areaOn), Xo({ ...St(), areasOff: [...r] }), t.classList.toggle("on", o), t.setAttribute("aria-checked", String(o)), ma();
  }), Qa.addEventListener("keydown", (e) => {
    var t;
    e.key === "Escape" && (e.stopPropagation(), Kl(), (t = ti()) == null || t.focus());
  });
  let po = !1, _a = !1, oa = !1, or = !1, hn = null, Eo = !1;
  const Xl = {}, Do = (e, t) => {
    if (Xl[e] === t) return;
    Xl[e] = t;
    const o = Bt.querySelector('[data-tray="' + e + '"]');
    o.innerHTML = t, io(o);
  }, rl = (e, t) => '<span class="tfTrayName"><span class="activityRowName">' + X(Be(e)) + '</span><span class="activityRowMeta">' + X(t) + "</span></span>", Fd = (e, t, o) => '<li class="tfTrayFav' + (t ? " off" : "") + '" data-tray-fav="' + X(e) + '"><span class="tfTrayGrip" aria-hidden="true">' + pc + '</span><span class="tfIcon"' + da(e, xn(e)) + "></span>" + rl(e, t ? "Hidden" + (pt.get(e) ? " · " + pt.get(e) : "") : pt.get(e) || Yt(e)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + X(e) + '" aria-pressed="' + !t + '" aria-label="' + (t ? "Show " : "Hide ") + X(Be(e)) + ' on the dashboard">' + (t ? Ru : Mg) + "</button>" + (o ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + X(e) + '" aria-label="Remove ' + X(Be(e)) + ' from favourites">' + hp + "</button>" : "<span></span>") + "</li>";
  function sl(e, t, o, r) {
    const c = e.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(M).filter((p) => t(p) && !o.has(p) && M[p].state !== "unavailable").filter((p) => {
      const g = (Be(p) + " " + (pt.get(p) || "") + " " + p).toLowerCase();
      return c.every((w) => g.includes(w));
    }).sort((p, g) => (pt.get(p) || "~").localeCompare(pt.get(g) || "~") || Be(p).localeCompare(Be(g))).slice(0, 40).map((p) => '<li><button class="tfTrayPickItem" type="button" ' + r + '="' + X(p) + '"><span class="tfIcon"' + da(p, xn(p)) + "></span>" + rl(p, pt.get(p) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  const ir = "https://www.home-assistant.io/dashboards/", Jl = {
    welcome: ["Welcome message", "<p>Shows a <strong>greeting</strong> above your home's name: good morning, afternoon or evening, then your name.</p>"],
    favs: ["Favourite entities", "<p>The devices you use most, at the top of Home.</p><ul><li><strong>Drag</strong> one to change the order</li><li>Press <strong>×</strong> to take it off</li></ul>"],
    suggest: ["Suggested entities", "<p>Fills Favourites with devices you often use, after your own. They change as you use your home.</p>"],
    sums: ["Summaries", "<p>Each summary sums up one kind of thing across your home, like <strong>Lights</strong>: how many are on.</p><ul><li>Switch one off to hide it</li><li><strong>Drag</strong> one to change the order</li></ul>"]
  }, Ma = Object.assign(document.createElement("aside"), { className: "tfEditTray hcHomeTray" });
  Ma.setAttribute("aria-label", "Edit Home page"), Ma.toggleAttribute("inert", !0);
  let Xa = !1, In = !1, Ql = "", Ci = null, rr = "page";
  function ll(e, t) {
    const o = Ma.querySelector(".hcTrayTabs"), r = o == null ? void 0 : o.querySelector(".rubberIndicator"), c = o == null ? void 0 : o.querySelector(".tab.active");
    if (!(c != null && c.offsetWidth)) {
      requestAnimationFrame(() => {
        var h;
        return ((h = Ma.querySelector(".hcTrayTabs .tab.active")) == null ? void 0 : h.offsetWidth) && ll(e, t);
      });
      return;
    }
    r.style.transition = "none", e && t ? bc(r, t.left, t.width, c.offsetLeft, c.offsetWidth) : (r.style.left = c.offsetLeft + "px", r.style.width = c.offsetWidth + "px");
  }
  const sr = (e) => '<button class="hcInfoBtn" type="button" data-info="' + e + '" aria-expanded="false" aria-label="About ' + X(Jl[e][0]) + '">' + Bu + "</button>", Ti = (e, t, o) => '<button class="switch' + (e ? " on" : "") + '" type="button" role="switch" aria-checked="' + e + '" aria-label="' + X(t) + '" ' + o + "></button>", Fn = (e) => '<button class="tfTrayBtn hcHeGrip" type="button" data-he-grip aria-label="Move ' + X(e) + '. Use the up and down arrows">' + pc + "</button>", ed = () => {
    var e;
    return ((e = Ie.home) == null ? void 0 : e.sumsWidth) === "fit";
  }, td = () => {
    var e;
    return ((e = Ie.home) == null ? void 0 : e.favsAs) === "strip";
  }, Cs = (e, t, o, r) => '<div class="hcHeLine hcHeChoiceLine"><span class="activityRowName">' + e + '</span><div class="themeChoice hcHeChoice" role="group" aria-label="' + X(e) + '">' + r.map(([c, h]) => '<button class="wxLayoutBtn" type="button" ' + t + '="' + c + '" aria-pressed="' + (o === c) + '">' + h + "</button>").join("") + "</div></div>", Od = () => qa(!0).filter((e) => md[e.key]).map((e) => e.key);
  function lr() {
    var p, g, w;
    if (!Xa) return;
    const e = Ne(), t = (D) => '<li class="hcHeRow" data-he-id="' + X(D) + '">' + Fn(Be(D)) + '<span class="tfIcon"' + da(D, xn(D)) + "></span>" + rl(D, pt.get(D) || Yt(D)) + '<button class="tfTrayBtn" type="button" data-he-remove="' + X(D) + '" aria-label="Take ' + X(Be(D)) + ' off Favourites">' + hp + "</button></li>", o = (D) => {
      const P = md[D];
      return '<li class="hcHeRow hcHeSum" data-he-id="' + X(D) + '"' + (P.colour && Fi(P.colour) ? ' style="' + Fi(P.colour).slice(1) + '"' : "") + ">" + Fn(P.name) + '<span class="tfIcon"' + da("", P.icon, P.name) + '></span><span class="activityRowName">' + X(P.name) + "</span>" + Ti(mi(D), P.name, 'data-he-sum="' + X(D) + '"') + "</li>";
    }, r = ((p = Ma.querySelector("[data-he-search]")) == null ? void 0 : p.value) || "", c = [["page", "Page"], ["favs", "Favourites"], ["sums", "Summaries"]], h = {
      page: '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + sr("welcome") + Ti(wi(), "Welcome message", "data-he-welcome") + "</div>" + Cs("Cards", "data-he-cards-as", Qi(), [["stacked", "Stacked"], ["rows", "Rows"]]) + '<hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Group by floor</span>' + Ti(Jn("byFloor"), "Group by floor", 'data-he-flag="byFloor"') + "</div>" + Cs("Layout", "data-he-area-layout", Qs(), [["rows", "Rows"], ["columns", "Columns"], ["bento", "Bento"]]) + (Qs() === "bento" ? '<div class="hcHeLine"><span class="activityRowName">Floors as boxes</span>' + Ti(Jn("bentoBoxes"), "Floors as boxes", 'data-he-flag="bentoBoxes"') + '</div><div class="hcHeLine"><span class="activityRowName">Mixed sizes</span>' + Ti(Jn("bentoMixed"), "Mixed sizes", 'data-he-flag="bentoMixed"') + "</div>" : "") + Cs("Area cards", "data-he-area-size", Rd(), [["s", "Small"], ["m", "Medium"], ["l", "Large"]]),
      favs: '<div class="hcHeLine"><span class="activityRowName">Show favourites</span>' + Ti(((g = Ie.home) == null ? void 0 : g.favs) !== !1, "Show favourites", 'data-he-card="favs"') + '</div><hr class="hcHeRule"><div class="hcHeLabel"><span class="activityRowName">Favourite entities</span>' + sr("favs") + "</div>" + Cs("Show as", "data-he-favs-as", td() ? "strip" : "card", [["card", "Card"], ["strip", "Strip"]]) + '<ul class="tfTrayList hcHeList" data-he-list="favs">' + (e.map(t).join("") || '<li class="tfTrayNote">No favourites yet.</li>') + '</ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-he-add aria-expanded="' + In + '">' + uc + '<span>Add favourite</span></button><div class="tfTrayPick" data-he-pick' + (In ? "" : " hidden") + '><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-he-search value="' + X(r) + '"><ul class="tfTrayList">' + (In ? sl(r, (D) => Gl.test(D), new Set(e), "data-he-pick-id") : "") + '</ul></div><hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Suggested entities</span>' + sr("suggest") + Ti(za(), "Suggested entities", "data-he-suggest") + "</div>",
      sums: '<div class="hcHeLine"><span class="activityRowName">Show summaries</span>' + sr("sums") + Ti(((w = Ie.home) == null ? void 0 : w.sums) !== !1, "Show summaries", 'data-he-card="sums"') + "</div>" + Cs("Width", "data-he-sums-width", ed() ? "fit" : "match", [["match", "Match the cards"], ["fit", "Fit the summaries"]]) + '<hr class="hcHeRule"><ul class="tfTrayList hcHeList" data-he-list="sums">' + Od().map(o).join("") + "</ul>"
    };
    Ma.querySelector("[data-he-body]").innerHTML = // the note about the areas page first (Matt, 12 Nov: "to the top of the rollover"), as Home Assistant's dialog has it
    '<p class="tfTrayNote hcHeAreasNote">You can rearrange your floors and areas in the order that best represents your house on the <button type="button" class="hcHeLink" data-path="/config/areas/dashboard">areas page</button>.</p><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit Home page"><div class="rubberIndicator" aria-hidden="true"></div>' + c.map(([D, P]) => '<button class="tab segBtn' + (D === rr ? " active" : "") + '" type="button" role="tab" aria-selected="' + (D === rr) + '" data-he-tab="' + D + '">' + P + "</button>").join("") + '</div><div class="hcHeTabBody" role="tabpanel">' + h[rr] + "</div>", ll(!1), io(Ma);
  }
  const Ts = (e) => {
    Ie = { ...Ie, ...e }, oo(), ma(), lr();
  }, ha = (e) => Ts({ home: { ...Ie.home || {}, ...e } });
  function dl(e) {
    ni(), Xa = e, In = !1, Ma.classList.toggle("open", e), Ma.toggleAttribute("inert", !e), v.classList.toggle("hcHomeEditing", e), k && E && Wa();
    const t = u("dashEditNav"), o = Ma.querySelector(".tfTrayHead");
    t && e && (Ci = t.parentElement, o.appendChild(t)), t && !e && Ci && Ci.appendChild(t), t && (t.classList.toggle("active", e), t.setAttribute("aria-pressed", String(e)), t.setAttribute("aria-label", e ? "Done editing Home" : "Edit Home page"), t.title = e ? "Done" : "Edit", t.innerHTML = e ? Nu : fc), e ? (Ql = JSON.stringify(Ie), lr()) : Ql && JSON.stringify(Ie) !== Ql && Qn("Changes saved");
  }
  Ma.innerHTML = '<div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit Home page</div></div><div class="hcHeBody" data-he-body></div></div>', v.appendChild(Ma);
  let ai = null;
  const mn = Object.assign(document.createElement("div"), { className: "card hcInfoPop", hidden: !0 });
  mn.setAttribute("role", "dialog"), v.appendChild(mn);
  function ni() {
    ai && (ai.setAttribute("aria-expanded", "false"), ai = null, mn.hidden = !0);
  }
  function cl(e) {
    const t = ai;
    if (ni(), t === e) return;
    const [o, r] = Jl[e.dataset.info];
    mn.setAttribute("aria-label", o), mn.innerHTML = '<div class="hcInfoTitle">' + X(o) + '</div><div class="hcInfoText">' + r + '</div><a class="hcInfoMore" href="' + ir + '" target="_blank" rel="noopener">Learn more</a>', mn.hidden = !1, ai = e, e.setAttribute("aria-expanded", "true");
    const c = e.getBoundingClientRect(), h = mn.offsetWidth, p = mn.offsetHeight;
    mn.style.left = Math.max(8, Math.min(innerWidth - h - 8, c.left + c.width / 2 - h / 2)) + "px", mn.style.top = (c.bottom + 8 + p > innerHeight - 8 ? Math.max(8, c.top - 8 - p) : c.bottom + 8) + "px";
  }
  n.addEventListener("pointerdown", (e) => {
    ai && !e.composedPath().some((t) => t === mn || t === ai) && ni();
  }, !0), n.addEventListener("keydown", (e) => {
    var t;
    if (e.key === "Escape") {
      if (ai) {
        e.stopPropagation();
        const o = ai;
        ni(), o.focus();
        return;
      }
      if (In) {
        e.stopPropagation(), In = !1, lr();
        return;
      }
      Xa && (e.stopPropagation(), dl(!1), (t = u("dashEditNav")) == null || t.focus());
    }
  }, !0);
  const Hc = (e) => e.dataset.heList === "favs" ? Ne() : Od(), Ls = (e, t) => e.dataset.heList === "favs" ? Ts({ favourites: t }) : ha({ sumOrder: t });
  Ma.addEventListener("keydown", (e) => {
    var g;
    const t = e.target.closest("[data-he-grip]");
    if (!t || !["ArrowUp", "ArrowDown"].includes(e.key)) return;
    e.preventDefault();
    const o = t.closest("[data-he-id]"), r = o.parentElement, c = Hc(r), h = c.indexOf(o.dataset.heId), p = h + (e.key === "ArrowUp" ? -1 : 1);
    p < 0 || p >= c.length || (c.splice(p, 0, c.splice(h, 1)[0]), Ls(r, c), (g = Ma.querySelector('[data-he-list="' + r.dataset.heList + '"] [data-he-id="' + CSS.escape(o.dataset.heId) + '"] [data-he-grip]')) == null || g.focus());
  }), Ma.addEventListener("pointerdown", (e) => {
    const t = e.target.closest("[data-he-grip]");
    if (!t || e.button !== 0) return;
    e.preventDefault();
    const o = t.closest("[data-he-id]"), r = o.parentElement;
    o.classList.add("moving");
    const c = (p) => {
      const g = [...r.children].filter((D) => D !== o), w = g.find((D) => {
        const P = D.getBoundingClientRect();
        return p.clientY < P.top + P.height / 2;
      });
      w !== o.nextElementSibling && r.insertBefore(o, w || null);
    }, h = () => {
      removeEventListener("pointermove", c), removeEventListener("pointerup", h), o.classList.remove("moving"), Ls(r, [...r.children].map((p) => p.dataset.heId).filter(Boolean));
    };
    addEventListener("pointermove", c), addEventListener("pointerup", h);
  }), Ma.addEventListener("input", (e) => {
    if (e.target.matches("[data-he-search]")) {
      const t = e.target.selectionStart;
      lr();
      const o = Ma.querySelector("[data-he-search]");
      o.focus(), o.setSelectionRange(t, t);
    }
  }), Ma.addEventListener("click", (e) => {
    var re;
    const t = e.target, o = t.closest("[data-info]");
    if (o) {
      cl(o);
      return;
    }
    const r = t.closest("[data-he-tab]");
    if (r) {
      const z = Ma.querySelector(".hcTrayTabs .rubberIndicator"), se = { left: z.offsetLeft, width: z.offsetWidth };
      rr = r.dataset.heTab, In = !1, ni(), lr(), ll(!0, se), Ma.querySelector(".tfTrayInner").scrollTop = 0;
      return;
    }
    if (t.closest("[data-he-welcome]")) {
      ha({ welcome: !wi() });
      return;
    }
    const c = t.closest("[data-he-card]");
    if (c) {
      const z = c.dataset.heCard;
      ha({ [z]: ((re = Ie.home) == null ? void 0 : re[z]) === !1 });
      return;
    }
    const h = t.closest("[data-he-favs-as]");
    if (h) {
      ha({ favsAs: h.dataset.heFavsAs });
      return;
    }
    const p = t.closest("[data-he-sums-width]");
    if (p) {
      ha({ sumsWidth: p.dataset.heSumsWidth });
      return;
    }
    const g = t.closest("[data-he-area-size]");
    if (g) {
      ha({ areaSize: g.dataset.heAreaSize });
      return;
    }
    const w = t.closest("[data-he-area-layout]");
    if (w) {
      ha({ areaLayout: w.dataset.heAreaLayout });
      return;
    }
    const D = t.closest("[data-he-cards-as]");
    if (D) {
      ha({ cardsAs: D.dataset.heCardsAs });
      return;
    }
    const P = t.closest("[data-he-flag]");
    if (P) {
      const z = P.dataset.heFlag;
      ha({ [z]: !Jn(z) });
      return;
    }
    if (t.closest("[data-he-suggest]")) {
      Ts({ suggest: !za() });
      return;
    }
    const L = t.closest("[data-he-sum]");
    if (L) {
      const z = L.dataset.heSum, se = !mi(z), j = Ie.home || {};
      ha(Au.includes(z) ? { shownSums: se ? [...j.shownSums || [], z] : (j.shownSums || []).filter((xe) => xe !== z) } : { hiddenSums: se ? (j.hiddenSums || []).filter((xe) => xe !== z) : [...j.hiddenSums || [], z] });
      return;
    }
    const N = t.closest("[data-he-remove]");
    if (N) {
      Ts({ favourites: Ne().filter((z) => z !== N.dataset.heRemove) });
      return;
    }
    if (t.closest("[data-he-add]")) {
      In = !In, lr(), In && Ma.querySelector("[data-he-search]").focus({ preventScroll: !0 });
      return;
    }
    const ae = t.closest("[data-he-pick-id]");
    ae && (In = !1, Ma.querySelector("[data-he-search]").value = "", Ts({ favourites: [...Ne(), ae.dataset.hePickId] }));
  });
  function ca() {
    var D, P;
    const e = un && v.classList.contains("tfBoard");
    if (Bt.classList.toggle("open", e), Bt.classList.toggle("tucked", e && po), Bt.toggleAttribute("inert", !e), e || (Eo = !1), (!e || !v.classList.contains("tfEditing")) && Kl(), nd(), !e) return;
    const t = Bt.querySelector("[data-tray-tuck]");
    t.innerHTML = po ? wu : Pu, t.setAttribute("aria-expanded", String(!po)), t.setAttribute("aria-label", po ? "Show the edit tray" : "Tuck the edit tray away");
    const o = St().hidden.filter((L) => !lo.includes(L) && Xn().some((N) => N.key === L)), r = (L, N) => '<button class="tfTrayCard" type="button" data-tray-card="' + X(L) + '" aria-label="' + X(Sn(L)) + ": drag it onto the board, or press to " + N + '"><span class="tfTrayGrip" aria-hidden="true">' + pc + "</span>" + X(Sn(L)) + "</button>", c = o.filter((L) => !go.includes(L)), h = go.filter((L) => o.includes(L));
    Do("welcome", '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + sr("welcome") + '<button class="switch' + (St().welcome ? " on" : "") + '" type="button" role="switch" aria-checked="' + !!St().welcome + '" aria-label="Welcome message" data-dash-welcome></button></div><div class="hcHeLine"><span class="activityRowName">Show summaries</span><button class="switch' + ((D = Ie.dash) != null && D.sumsOff ? "" : " on") + '" type="button" role="switch" aria-checked="' + !((P = Ie.dash) != null && P.sumsOff) + '" aria-label="Show summaries" data-dash-sums></button></div>'), requestAnimationFrame(() => il(!1)), Do("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (c.length ? '<div class="tfTrayCards">' + c.map((L) => r(L, "put it back")).join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), Do("weather", '<div class="sectionLabel">Weather</div>' + (h.length ? `<p class="tfTrayNote">The Weather page's widgets. Drag one onto the board, or press to add it.</p><div class="tfTrayCards">` + h.map((L) => r(L, "add it")).join("") + "</div>" : '<p class="tfTrayNote">Every weather widget is on the board.</p>')), Do("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (St().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + Eo + '">' + (Eo ? "Hide the phone" : "Show the phone") + "</button>");
    const p = new Set(Ie.favHidden || []), g = Ne(), w = [...g, ...[...p].filter((L) => !g.includes(L) && M[L])];
    if (Do("favs", w.map((L) => Fd(L, p.has(L), g.includes(L))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Bt.querySelector('[data-pick="tiles"]').hidden = !oa, Bt.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(oa)), oa && Do("tilepick", sl(Bt.querySelector("[data-tile-search]").value, (L) => gd.includes(L.split(".")[0]), new Set(nl()), "data-tile-pick")), Bt.querySelector('[data-tray="roompick"]').hidden = !or, Bt.querySelector("[data-room-add]").setAttribute("aria-expanded", String(or)), or) {
      const L = new Set(nl());
      Do("roompick", je.filter((N) => !L.has("room:" + N.id)).map((N) => '<li><button class="tfTrayPickItem" type="button" data-room-pick="' + X(N.id) + '"><span class="tfIcon"><span class="tfAreaGlyph"' + da("area:" + N.id, N.icon || "mdi:texture-box", N.name) + '></span></span><span class="tfTrayName"><span class="activityRowName">' + X(N.name) + "</span></span></button></li>").join("") || '<li class="tfTrayNote">Every area is on the board.</li>');
    }
    Bt.querySelector('[data-pick="favs"]').hidden = !_a, Bt.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(_a)), _a && Do("pick", sl(Bt.querySelector("[data-fav-search]").value, (L) => Gl.test(L), new Set(Ne()), "data-fav-pick")), Do("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (za() ? " on" : "") + '" type="button" role="switch" aria-checked="' + za() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const eo = (e) => {
    Ie = { ...Ie, ...e }, oo(), ma(), ca();
  };
  function As(e, t) {
    const o = Ie, r = new Set(Ie.favHidden || []);
    t ? r.delete(e) : r.add(e), eo({ favHidden: [...r] }), t ? Qn(Be(e) + " put back") : Qn(Be(e) + " hidden", ei(o));
  }
  const qd = (e) => {
    const t = Ie;
    eo({ favourites: Ne().filter((o) => o !== e), favHidden: (Ie.favHidden || []).filter((o) => o !== e) }), Qn(Be(e) + " removed from favourites", ei(t));
  }, Wd = (e) => {
    eo({ favourites: [...Ne().filter((t) => t !== e), e], favHidden: (Ie.favHidden || []).filter((t) => t !== e) }), Qn(Be(e) + " added to favourites");
  };
  Bt.addEventListener("click", (e) => {
    var o, r;
    const t = e.target.closest("button");
    if (t) {
      if (t.hasAttribute("data-tray-tab")) {
        Yl = t.dataset.trayTab, il(!0), Bt.querySelector(".tfTrayInner").scrollTop = 0;
        return;
      }
      if (t.hasAttribute("data-tray-done")) ql(!1);
      else if (t.hasAttribute("data-info")) cl(t);
      else if (t.hasAttribute("data-dash-sums"))
        Xo({ ...Ji(), hidden: Ji().hidden.filter((c) => c !== "sums"), sumsOff: !((o = Ie.dash) != null && o.sumsOff) }), ma(), ca();
      else if (t.hasAttribute("data-dash-welcome")) {
        const c = St();
        Xo({ ...c, welcome: !c.welcome }), ma(), ca();
      } else t.hasAttribute("data-tray-tuck") ? (po = !po, ca()) : t.hasAttribute("data-phone-toggle") ? (Eo = !Eo, ca(), Eo && ((r = Cn.querySelector("[data-phone-key]")) == null || r.focus({ preventScroll: !0 }))) : t.dataset.trayCard ? e.detail === 0 && (ar(t.dataset.trayCard), ca()) : t.dataset.favEye ? As(t.dataset.favEye, t.getAttribute("aria-pressed") !== "true") : t.dataset.favRemove ? qd(t.dataset.favRemove) : t.hasAttribute("data-fav-add") ? (_a = !_a, ca(), _a && Bt.querySelector("[data-fav-search]").focus({ preventScroll: !0 })) : t.dataset.favPick ? Wd(t.dataset.favPick) : t.hasAttribute("data-tile-add") ? (oa = !oa, ca(), oa && Bt.querySelector("[data-tile-search]").focus({ preventScroll: !0 })) : t.dataset.tilePick ? Vl(t.dataset.tilePick) : t.hasAttribute("data-area-choose") ? $l() : t.hasAttribute("data-room-add") ? (or = !or, ca()) : t.dataset.roomPick ? Vl("room:" + t.dataset.roomPick) : t.hasAttribute("data-fav-suggest") && eo({ suggest: !za() });
    }
  }), Bt.addEventListener("input", (e) => {
    e.target.matches("[data-fav-search],[data-tile-search]") && ca();
  }), Bt.addEventListener("keydown", (e) => {
    var o, r;
    const t = !!((r = (o = e.target).closest) != null && r.call(o, '[data-pick="tiles"],[data-tile-add]'));
    e.key !== "Escape" || !(t ? oa : _a) || (e.stopPropagation(), t ? oa = !1 : _a = !1, ca(), Bt.querySelector(t ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function Li(e, t, o, r) {
    e.preventDefault();
    const c = e.clientX, h = e.clientY;
    let p = null, g = 0;
    const w = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), D = (L) => {
      if (!p) {
        if (Math.hypot(L.clientX - c, L.clientY - h) < 4) return;
        p = t.cloneNode(!0), p.classList.add("tfTrayGhost"), p.style.width = t.offsetWidth + "px", v.appendChild(p);
      }
      p.style.transform = "translate(" + (L.clientX - 24) + "px," + (L.clientY - 24) + "px)";
      const N = !po && L.clientX >= Bt.getBoundingClientRect().left;
      if (o === "card") {
        const z = E.getBoundingClientRect(), { w: se } = co(E.clientWidth);
        _t = !N && L.clientX >= z.left && L.clientX <= z.right && L.clientY >= z.top + $a ? { key: r, col: Math.max(0, Math.floor((L.clientX - z.left) / (se + ea))), row: Math.max(0, Math.floor((L.clientY - z.top - $a) / Nn)), fromTray: !0 } : null, g || (g = requestAnimationFrame(() => {
          g = 0, Wa();
        }));
        return;
      }
      const ae = E.querySelector(".tfDash-favs"), re = ae == null ? void 0 : ae.getBoundingClientRect();
      if (hn = null, re && !N && L.clientX >= re.left && L.clientX <= re.right && L.clientY >= re.top && L.clientY <= re.bottom) {
        let z = 1 / 0;
        ae.querySelectorAll('[data-k^="fav:"]').forEach((se, j) => {
          const xe = se.getBoundingClientRect(), $ = Math.hypot(L.clientX - (xe.left + xe.width / 2), L.clientY - (xe.top + xe.height / 2));
          $ < z && (z = $, hn = { i: j, r: xe, after: L.clientX > xe.left + xe.width / 2 });
        }), hn || (hn = { i: 0, r: null, after: !1 });
      }
      hn != null && hn.r ? (w.isConnected || v.appendChild(w), Object.assign(w.style, { left: (hn.after ? hn.r.right : hn.r.left) - 2 + "px", top: hn.r.top + 8 + "px", height: hn.r.height - 16 + "px" })) : w.remove();
    }, P = () => {
      if (window.removeEventListener("pointermove", D), window.removeEventListener("pointerup", P), window.removeEventListener("pointercancel", P), cancelAnimationFrame(g), p == null || p.remove(), w.remove(), o === "card") {
        if (!p) ar(r);
        else if (_t != null && _t.fromTray) {
          Wa();
          const z = Sn(r) + ks(r), se = St(), j = tr();
          _t = null, qr({ ...se, hidden: se.hidden.filter((xe) => xe !== r) }, j), Qn(z);
        }
        _t = null, Wa(), ma(), ca();
        return;
      }
      if (!hn) return;
      const L = new Set(Ie.favHidden || []);
      L.delete(r);
      const N = Ne().filter((z) => z !== r), ae = N.filter((z) => !L.has(z)), re = ae[Math.min(hn.i + (hn.after ? 1 : 0), ae.length)];
      N.splice(re ? N.indexOf(re) : N.length, 0, r), hn = null, eo({ favourites: N, favHidden: [...L] }), Qn(Be(r) + " put back");
    };
    window.addEventListener("pointermove", D), window.addEventListener("pointerup", P), window.addEventListener("pointercancel", P);
  }
  const ad = {
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
  }, Sa = 136, Ic = 288, oi = 0.8, Vd = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, Cn = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  Cn.setAttribute("aria-label", "Phone order"), Cn.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + hp + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', v.appendChild(Cn);
  let Es = "";
  function nd() {
    var g;
    const e = Eo && un && v.classList.contains("tfBoard") && !po;
    if (Cn.classList.toggle("open", e), Cn.toggleAttribute("inert", !e), !e) return;
    const t = Or().filter((w) => !St().hidden.includes(w.key)), o = t.length, r = (w) => Math.round(w * oi * 10) / 10 + "px", c = (w, D) => {
      const P = w.el.classList.contains("tfDac"), L = w.tile ? P ? Ic : Sa : ad[w.key] || Sa;
      return '<button class="tfPhoneBlock' + (w.tile ? " tile" : "") + '" type="button" data-phone-key="' + X(w.key) + '" style="min-height:' + r(L) + '" aria-label="' + X(Sn(w.key) + ", " + (D + 1) + " of " + o + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (w.tile ? da(w.key, xn(w.key)) : da(w.key, Vd[w.key])) + '></span><span class="tfPhoneName">' + X(Sn(w.key)) + "</span></button>";
    }, h = '<div class="tfPhoneTitle">' + X(((g = E.querySelector(".tfDashTitle")) == null ? void 0 : g.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + r(ad.sums) + '"><span class="tfPhoneName">' + X(Sn("sums")) + "</span></div>" + t.map(c).join("");
    if (Cn.querySelector('[data-phone="note"]').innerHTML = St().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", h === Es) return;
    Es = h;
    const p = Cn.querySelector('[data-phone="list"]');
    p.innerHTML = h, io(p);
  }
  function Ds(e, t) {
    var o;
    Xo({ ...St(), phone: e }), ca(), t && ((o = Cn.querySelector('[data-phone-key="' + CSS.escape(t) + '"]')) == null || o.focus({ preventScroll: !0 }));
  }
  const od = () => [...Cn.querySelectorAll("[data-phone-key]")].map((e) => e.dataset.phoneKey);
  function Fc(e, t) {
    e.preventDefault();
    const o = t.parentElement, r = Cn.querySelector(".tfPhoneScreen"), c = od().join();
    t.classList.add("moving");
    const h = (g) => {
      const w = r.getBoundingClientRect();
      g.clientY > w.bottom - 40 ? r.scrollTop += 12 : g.clientY < w.top + 40 && (r.scrollTop -= 12);
      const D = [...o.querySelectorAll("[data-phone-key]")].find((N) => {
        const ae = N.getBoundingClientRect();
        return N !== t && g.clientX >= ae.left && g.clientX <= ae.right && g.clientY >= ae.top && g.clientY <= ae.bottom;
      });
      if (!D) return;
      const P = D.getBoundingClientRect(), L = D.classList.contains("tile") ? g.clientX < P.left + P.width / 2 : g.clientY < P.top + P.height / 2;
      o.insertBefore(t, L ? D : D.nextSibling);
    }, p = () => {
      window.removeEventListener("pointermove", h), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p), t.classList.remove("moving");
      const g = od();
      Es = "", g.join() !== c ? Ds(g) : nd();
    };
    window.addEventListener("pointermove", h), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  }
  Cn.addEventListener("pointerdown", (e) => {
    const t = e.target.closest("[data-phone-key]");
    t && e.button <= 0 && Fc(e, t);
  }), Cn.addEventListener("click", (e) => {
    var o;
    const t = e.target.closest("button");
    if (t != null && t.hasAttribute("data-phone-close"))
      Eo = !1, ca(), (o = Bt.querySelector("[data-phone-toggle]")) == null || o.focus({ preventScroll: !0 });
    else if (t != null && t.hasAttribute("data-phone-reset")) {
      const { phone: r, ...c } = St();
      Xo(c), ca();
    }
  }), Cn.addEventListener("keydown", (e) => {
    var p, g, w, D;
    if (e.key === "Escape") {
      e.stopPropagation(), Eo = !1, ca(), (p = Bt.querySelector("[data-phone-toggle]")) == null || p.focus({ preventScroll: !0 });
      return;
    }
    const t = (D = (w = (g = e.target).closest) == null ? void 0 : w.call(g, "[data-phone-key]")) == null ? void 0 : D.dataset.phoneKey, o = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[e.key];
    if (!t || !o) return;
    e.preventDefault();
    const r = od(), c = r.indexOf(t), h = c + o;
    h < 0 || h >= r.length || ([r[c], r[h]] = [r[h], r[c]], Ds(r, t));
  });
  function pl(e, t) {
    e.preventDefault();
    const o = t.parentElement;
    t.classList.add("moving");
    const r = (h) => {
      const p = [...o.children].find((g) => {
        const w = g.getBoundingClientRect();
        return g !== t && h.clientY >= w.top && h.clientY <= w.bottom;
      });
      if (p) {
        const g = p.getBoundingClientRect();
        o.insertBefore(t, h.clientY < g.top + g.height / 2 ? p : p.nextSibling);
      }
    }, c = () => {
      window.removeEventListener("pointermove", r), window.removeEventListener("pointerup", c), window.removeEventListener("pointercancel", c), t.classList.remove("moving");
      const h = new Set(Ne());
      Xl.favs = null, eo({ favourites: [...o.children].map((p) => p.dataset.trayFav).filter((p) => h.has(p)) });
    };
    window.addEventListener("pointermove", r), window.addEventListener("pointerup", c), window.addEventListener("pointercancel", c);
  }
  Bt.addEventListener("pointerdown", (e) => {
    if (e.button > 0) return;
    const t = e.target.closest("[data-tray-card]"), o = e.target.closest(".tfTrayFav");
    t ? Li(e, t, "card", t.dataset.trayCard) : o && e.target.closest(".tfTrayGrip") ? pl(e, o) : o != null && o.classList.contains("off") && !e.target.closest("button") && Li(e, o, "fav", o.dataset.trayFav);
  });
  function to(e) {
    if (!un || e.button !== 0 || e.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const t = e.target.closest(".tfBoardItem"), o = t && Xn().find((Vt) => Vt.el === t);
    if (!o || lo.includes(o.key)) return;
    const r = xi.get(o.key), { w: c } = co(E.clientWidth);
    if (!r) return;
    e.preventDefault(), Lo();
    const h = e.clientX, p = e.clientY;
    let g = !1, w = 0;
    const D = Ta.drag, P = nn();
    let L = 0, N = 0, ae = 0, re = 0, z = 0, se = 0, j = P || D.stick === 0, xe = 0;
    const $ = (Vt, Va, Je, Mt) => {
      t.style.transform = "translate(" + ae.toFixed(2) + "px," + re.toFixed(2) + "px) rotate(" + Vt.toFixed(2) + "deg) rotate(" + Va + "rad) scale(" + Je.toFixed(4) + "," + Mt.toFixed(4) + ") rotate(" + -Va + "rad)";
    }, Ve = () => {
      if (xe = requestAnimationFrame(Ve), P) {
        ae = L, re = N, $(0, 0, 1, 1);
        return;
      }
      if (!j) {
        const Ua = Math.min(Math.hypot(L, N) / Math.max(1, D.stick), 1);
        ae = L * 0.35, re = N * 0.35, $(0, Math.atan2(N, L), 1 + 0.155 * Ua, 1 - 0.1 * Ua);
        return;
      }
      z = Yp(z, L - ae, D.pull / 100, D.keep / 100), se = Yp(se, N - re, D.pull / 100, D.keep / 100), ae += z, re += se;
      const Vt = Math.hypot(z, se), Va = Math.min(Vt / 48, 1), Je = Math.max(-5, Math.min(D.tilt, z * 0.32)), Mt = 1 + D.lift / 100;
      $(Je, Math.atan2(se, z), Mt * (1 + 0.1 * Va), Mt * (1 - 0.063 * Va));
    }, Ht = (Vt) => {
      if (L = Vt.clientX - h, N = Vt.clientY - p, !g) {
        if (Math.hypot(L, N) < 4) return;
        g = !0, _t = { key: o.key, col: r.col, row: r.row }, t.classList.add("tfDragging", "mvDrag"), xe = requestAnimationFrame(Ve);
      }
      !j && Math.hypot(L, N) > D.stick && (j = !0, z = L * 0.085, se = N * 0.085), _t.col = Math.round((r.x + L) / (c + ea)), _t.row = Math.round((r.y + N - $a) / Nn), w || (w = requestAnimationFrame(() => {
        w = 0, Wa();
      }));
    }, it = () => {
      var Oc;
      if (window.removeEventListener("pointermove", Ht), window.removeEventListener("pointerup", it), window.removeEventListener("pointercancel", it), !g) return;
      const Vt = (_i) => {
        _i.preventDefault(), _i.stopImmediatePropagation();
      };
      window.addEventListener("click", Vt, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", Vt, { capture: !0 }), 300), cancelAnimationFrame(w), cancelAnimationFrame(xe);
      const Va = t.getBoundingClientRect(), Je = o.key;
      t.style.transition = "none", Wa(), t.classList.remove("tfDragging", "mvDrag"), t.style.transform = "", _t = null, qr(St(), tr()), Wa(), ma();
      const Mt = (Oc = Xn().find((_i) => _i.key === Je)) == null ? void 0 : Oc.el;
      if (requestAnimationFrame(() => {
        t.style.transition = "", Mt && (Mt.style.transition = "");
      }), !Mt || P) return;
      Mt.style.transition = "none";
      const Ua = Mt.getBoundingClientRect(), Qd = Va.left + Va.width / 2 - (Ua.left + Ua.width / 2), gl = Va.top + Va.height / 2 - (Ua.top + Ua.height / 2);
      Mt.style.zIndex = "20", Mt.animate([{ transform: "translate(" + Qd + "px," + gl + "px) scale(" + (1 + D.lift / 100) + ")" }, { transform: "none" }], { duration: D.slide, easing: la.land }).finished.then(() => {
        Mt.style.zIndex = "", Zp(Mt);
      }, () => {
        Mt.style.zIndex = "";
      });
    };
    window.addEventListener("pointermove", Ht), window.addEventListener("pointerup", it), window.addEventListener("pointercancel", it);
  }
  function Ur(e = !1) {
    const t = E == null ? void 0 : E.querySelector(".tfDashGraph svg[data-graph]");
    if (!(t != null && t.clientWidth)) return;
    const o = t.dataset.graph + "@" + t.clientWidth + "x" + t.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (t.dataset.drawn === o) return;
    const r = !t.dataset.drawn;
    t.dataset.drawn = o;
    const c = gi.find((h) => h.id === t.dataset.graph);
    c ? Zo(t, c).then(() => {
      (e || r) && Nr(t);
    }) : pr(t.dataset.graph, t).then(() => {
      e && $i(t);
    });
  }
  function id() {
    var w, D, P;
    mt = Dn.model(i(), { madeUp: !A }), Ja(), M = mt.states, M[(w = Ie.sources) == null ? void 0 : w.grid] && (mt.grid = Ie.sources.grid), M[(D = Ie.sources) == null ? void 0 : D.alarm] && (mt.security.alarms = [Ie.sources.alarm]), $e.forEach((L, N) => {
      const ae = M[N], re = (ae == null ? void 0 : ae.attributes) || {};
      if (!ae || Date.now() - L.at > 2 * 60 * 1e3) {
        $e.delete(N);
        return;
      }
      L.pos != null && ae.state !== "opening" && ae.state !== "closing" && Math.abs(Kn(N) - L.pos) < 1 && delete L.pos, L.tilt != null && Math.abs((re.current_tilt_position ?? -1) - L.tilt) < 1 && delete L.tilt, L.pos == null && L.tilt == null && $e.delete(N);
    });
    const e = [];
    let t = 0;
    const o = ot();
    je = o.filter((L) => L.room).map((L) => L.room), je.some((L) => L.id === B) || (B = ((P = je[0]) == null ? void 0 : P.id) || null);
    const r = q === "weather" ? { key: "weather", name: "Weather" } : q && o.find((L) => L.key === q);
    if (r || (q = null), v.classList.toggle("tfAreaOpen", !!r), v.classList.toggle("tfWeatherOpen", (r == null ? void 0 : r.key) === "weather"), v.classList.toggle("tfDash", !r), pt = /* @__PURE__ */ new Map(), mt.rooms.forEach((L) => [...L.actions, ...L.plugs, ...L.readings, ...L.openings, ...L.solar, ...L.plants.flatMap((N) => [N.id, ...N.readings])].forEach((N) => pt.set(N, L.name))), !r) return Ld(e, qa());
    if (e.push({ key: "areahead", html: jd(r, ++t) }), r.key === "weather")
      return e.weather = ++t, e;
    const c = r.ids, h = r.room ? r.room.id : r.key, p = r.room;
    p != null && p.solar.length && e.push({ key: "energy:" + p.id, html: Xt(p, ++t) }), p && (p.readings.length || p.power != null) && e.push({ key: "readings:" + p.id, html: xo(p, ++t) }), p == null || p.plants.forEach((L) => e.push({ key: "plant:" + L.id, html: $n(L, ++t) }));
    const g = [...c, ...((p == null ? void 0 : p.plugs) || []).filter((L) => !c.includes(L))];
    return g.length && e.push({ key: "block:" + h, order: ++t, tiles: g.map((L) => ({ key: L, html: zi(L) })) }), e;
  }
  const jd = (e, t) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + t + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + wu + '</button><div class="settingsTitle">' + X(e.name) + "</div></div>";
  let rd = 0, gn = null;
  const ii = (e) => e === "weather" ? Zn.wx : e.startsWith("room:") && E.querySelector('.tfRoomTile[data-k="' + CSS.escape(e) + '"]') || E.querySelector(".tfAreas");
  function Yr(e) {
    var t, o;
    q || (rd = cr().scrollTop, gn = ((t = ii(e)) == null ? void 0 : t.getBoundingClientRect().top) ?? null), q = e, e.startsWith("room:") && (B = e.slice(5)), ao(), cr().scrollTop = 0, (o = E.querySelector("[data-area-back]")) == null || o.focus({ preventScroll: !0 });
  }
  let vn = null;
  function dr(e, t) {
    if (vn == null || vn(), t == null) return;
    const o = cr(), r = performance.now() + 1500, c = ["wheel", "touchstart", "pointerdown", "keydown"];
    let h = 0;
    const p = () => {
      cancelAnimationFrame(h), c.forEach((w) => window.removeEventListener(w, p, !0)), vn = null;
    }, g = () => {
      const w = e();
      if (w != null && w.isConnected) {
        const D = w.getBoundingClientRect().top - t;
        Math.abs(D) > 0.5 && (o.scrollTop += D);
      }
      performance.now() < r ? h = requestAnimationFrame(g) : p();
    };
    c.forEach((w) => window.addEventListener(w, p, { capture: !0, passive: !0 })), vn = p, g();
  }
  function _s() {
    var o;
    const e = q;
    q = null, ao(), cr().scrollTop = rd, dr(() => ii(e), gn);
    const t = e.startsWith("room:") ? E.querySelector('.tfRoomTile[data-k="' + CSS.escape(e) + '"]') || E.querySelector('.tfAreaPanel[data-area="' + CSS.escape(e.slice(5)) + '"]') : e === "weather" ? Zn.wx.querySelector(".wbOpenPage") : E.querySelector('[data-k="sum:' + CSS.escape(e) + '"]');
    (o = (t == null ? void 0 : t.querySelector("[data-go]")) || t) == null || o.focus({ preventScroll: !0 });
  }
  const Zr = (e) => e.wrap ? e.wrap(e.tiles.map((t) => t.html).join(""), e) : '<div class="tfBlock" data-tf data-k="' + X(e.key) + '" style="order:' + e.order + '"><div class="tfActions">' + e.tiles.map((t) => t.html).join("") + "</div></div>", sd = (e) => e.map((t) => t.key + (t.tiles ? "(" + t.tiles.map((o) => o.key).join(",") + ")" : "")).join(";");
  function cr() {
    for (let e = v.parentElement || v.getRootNode().host; e; e = e.parentElement || e.getRootNode().host) {
      const t = getComputedStyle(e).overflowY;
      if ((t === "auto" || t === "scroll") && e.scrollHeight > e.clientHeight) return e;
    }
    return document.scrollingElement;
  }
  function ld(e) {
    const t = cr(), o = (g) => {
      const w = g.getBoundingClientRect();
      return w.height && w.bottom > 0 && w.top < window.innerHeight;
    }, r = [...E.children, ...E.querySelectorAll(".tfDashTiles > *")].find((g) => !g.matches(".tfDashTiles") && o(g)), c = r == null ? void 0 : r.dataset.k, h = r == null ? void 0 : r.getBoundingClientRect().top;
    e();
    const p = r != null && r.isConnected ? r : c && E.querySelector('[data-k="' + CSS.escape(c) + '"]');
    p != null && p.isConnected && h != null && (t.scrollTop += p.getBoundingClientRect().top - h);
  }
  function ao() {
    if (!k || !E) return;
    const e = id(), t = (c) => {
      var h;
      return (((h = c.closest("[data-k]")) == null ? void 0 : h.dataset.k) || "") + "|" + c.dataset.iconFor + "|" + (c.dataset.iconName || "");
    }, o = /* @__PURE__ */ new Map();
    E.querySelectorAll("[data-tf] [data-icon-for]").forEach((c) => {
      c.firstElementChild && (o.get(t(c)) || o.set(t(c), []).get(t(c))).push(c.firstElementChild);
    }), E.querySelectorAll("[data-tf]").forEach((c) => c.remove()), wn.clear();
    const r = document.createElement("div");
    r.innerHTML = e.map((c) => c.tiles ? Zr(c) : c.html).join(""), e.forEach((c) => c.tiles ? c.tiles.forEach((h) => wn.set(h.key, h.html)) : wn.set(c.key, c.html)), ns = sd(e), r.querySelectorAll("[data-icon-for]").forEach((c) => {
      var p;
      const h = !c.firstElementChild && ((p = o.get(t(c))) == null ? void 0 : p.shift());
      h && c.appendChild(h);
    }), E.append(...r.children), is(e.weather), dt(), ys.disconnect(), Wa(), io(E), Z(E), Kt(E), U(), T && pr(T.id), Ps(), he(), we(), requestAnimationFrame(oe);
  }
  const dd = (e) => {
    var o;
    const t = n.activeElement && e.contains(n.activeElement) ? n.activeElement : null;
    return t && { label: t.getAttribute("aria-label"), act: (o = t.dataset) == null ? void 0 : o.act };
  }, Rs = (e, t) => {
    var o;
    t && ((o = t.label && e.querySelector('[aria-label="' + CSS.escape(t.label) + '"]') || t.act && e.querySelector('[data-act="' + CSS.escape(t.act) + '"]')) == null || o.focus({ preventScroll: !0 }));
  };
  function ul(e, t) {
    if (!e.querySelector(".tfDacPad"))
      return e.replaceWith(t), t;
    const o = e.matches(".tfDac") && e.querySelector(":scope > .tfDacPad"), r = t.querySelector(":scope > .tfDacPad");
    if (o)
      return (r == null ? void 0 : r.dataset.dac) !== o.dataset.dac ? (e.replaceWith(t), t) : (e.querySelector(":scope > .tfActionHead").replaceWith(t.querySelector(":scope > .tfActionHead")), e.classList.toggle("on", t.classList.contains("on")), ["data-light", "data-tone"].forEach((p) => t.hasAttribute(p) ? e.setAttribute(p, t.getAttribute(p)) : e.removeAttribute(p)), [...e.style].filter((p) => p.startsWith("--") && !p.startsWith("--tf-")).forEach((p) => e.style.removeProperty(p)), [...t.style].forEach((p) => e.style.setProperty(p, t.style.getPropertyValue(p))), e);
    const c = (p) => {
      var g;
      return ((g = p.dataset) == null ? void 0 : g.iconFor) !== void 0;
    };
    if (c(e) && c(t) && !t.children.length && e.dataset.iconFor === t.dataset.iconFor && e.dataset.iconName === t.dataset.iconName && e.firstElementChild)
      return [...e.attributes].forEach((p) => {
        t.hasAttribute(p.name) || e.removeAttribute(p.name);
      }), [...t.attributes].forEach((p) => {
        e.getAttribute(p.name) !== p.value && e.setAttribute(p.name, p.value);
      }), e;
    if (e.tagName !== t.tagName || e.children.length !== t.children.length)
      return e.replaceWith(t), t;
    [...e.attributes].forEach((p) => {
      t.hasAttribute(p.name) || e.removeAttribute(p.name);
    }), [...t.attributes].forEach((p) => e.setAttribute(p.name, p.value));
    const h = [...t.children];
    return [...e.children].forEach((p, g) => ul(p, h[g])), e;
  }
  function zd(e, t) {
    const o = document.createElement("div");
    o.innerHTML = t;
    const r = dd(e), c = ul(e, o.firstElementChild);
    io(c), Z(c), Kt(c), Rs(c, r);
  }
  function ma() {
    !k || !E || _t || ld(cd);
  }
  function cd() {
    if (!E.querySelector("[data-tf]")) {
      ao();
      return;
    }
    const e = id();
    if (sd(e) !== ns) {
      ao();
      return;
    }
    const t = (o) => [...ge.keys()].some((r) => {
      const c = r.slice(r.indexOf("|") + 1);
      return o === c || o.endsWith(":" + c);
    });
    e.forEach((o) => (o.tiles || [o]).forEach((r) => {
      if (wn.get(r.key) === r.html || t(r.key)) return;
      const c = E.querySelector('[data-k="' + CSS.escape(r.key) + '"]');
      if (c) {
        if (wn.set(r.key, r.html), T && T.key === r.key && c.querySelector(".tfOpen")) {
          c.querySelector(".tfOpen .activityRowMeta").textContent = qo(T.id);
          return;
        }
        zd(c, r.html), T && T.key === r.key && pr(T.id), r.key.startsWith("energy:") && Ps();
      }
    })), he(), we(), ko(), U(), $t == null || $t.update(), wa == null || wa.forEach((o) => o.update()), v.classList.contains("tfDash") && Ga(), requestAnimationFrame(oe);
  }
  const Ai = {
    light: (e) => [["Brightness", e.brightness != null ? Math.round(e.brightness / 2.55) + "%" : null], ["Colour temperature", e.color_temp_kelvin ? Number(e.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", e.color_mode && Et(e.color_mode)]],
    climate: (e) => [["Current temperature", Ot(e.current_temperature) + " °C"], ["Target", Ot(e.temperature) + " °C"], ["Action", Et(e.hvac_action)]],
    cover: (e) => [["Position", e.current_position != null ? e.current_position + "% open" : null], ["Tilt", e.current_tilt_position != null ? e.current_tilt_position + "% open" : null]],
    humidifier: (e) => [["Current humidity", e.current_humidity + "%"], ["Target", e.humidity + "%"], ["Mode", Et(e.mode)]],
    media_player: (e) => [["Title", e.media_title], ["Artist", e.media_artist], ["Volume", e.volume_level != null ? Math.round(e.volume_level * 100) + "%" : null], ["Source", e.source]],
    vacuum: (e) => [["Battery", e.battery_level + "%"], ["Fan speed", Et(e.fan_speed)], ["Rooms", (e.rooms || []).join(", ") || null]],
    lock: (e) => [["Changed by", e.changed_by]],
    alarm_control_panel: (e) => [["Changed by", e.changed_by]],
    valve: () => [],
    plant: (e) => [["Moisture", e.moisture + "%"], ["Light", Number(e.brightness).toLocaleString() + " lx"], ["Temperature", Ot(e.temperature) + " °C"], ["Fertility", e.conductivity + " µS/cm"], ["Problems", e.problem === "none" ? "None" : Et(e.problem)]],
    weather: (e) => [["Temperature", e.temperature != null ? e.temperature + " " + (e.temperature_unit || "°C") : null], ["Humidity", e.humidity != null ? e.humidity + "%" : null], ["Wind", e.wind_speed != null ? e.wind_speed + " " + (e.wind_speed_unit || "km/h") : null], ["Pressure", e.pressure != null ? e.pressure + " " + (e.pressure_unit || "hPa") : null]]
  }, Gd = (e) => Ri(e) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function fl(e, t = {}, o = !1) {
    return '<div class="tfMoreList">' + e.map((r) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + X(r.name) + '</div><div class="tfMoreTiles' + (o ? " single" : "") + '">' + r.ids.map((c) => so(c, t)).join("") + "</div></div>").join("") + "</div>";
  }
  const Ge = document.createElement("div");
  Ge.className = "tfMoreBackdrop", Ge.hidden = !0, v.appendChild(Ge);
  const uo = document.createElement("div");
  uo.className = "tfMoreBackdrop tfMoreUnder", uo.hidden = !0, v.insertBefore(uo, Ge);
  const hl = (e, t) => {
    for (let o = e; o && o !== Ge; o = o.parentElement) {
      const r = getComputedStyle(o).overflowY;
      if ((r === "auto" || r === "scroll") && o.scrollHeight > o.clientHeight + 1 && (t < 0 ? o.scrollTop > 0 : o.scrollTop + o.clientHeight < o.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let Ei = null;
  Ge.addEventListener("touchstart", (e) => {
    Ei = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, { passive: !0 }), Ge.addEventListener("touchmove", (e) => {
    var c, h;
    if (!Ei || e.touches.length > 1 || (h = (c = e.target).closest) != null && h.call(c, "input,textarea,select")) return;
    const t = e.touches[0], o = Ei.x - t.clientX, r = Ei.y - t.clientY;
    Ei = { x: t.clientX, y: t.clientY }, Math.abs(r) >= Math.abs(o) && !hl(e.target, r) && e.preventDefault();
  }, { passive: !1 }), Ge.addEventListener("wheel", (e) => {
    var t, o;
    Math.abs(e.deltaX) > Math.abs(e.deltaY) && ((o = (t = e.target).closest) != null && o.call(t, "[data-more-pages]")) || hl(e.target, e.deltaY) || e.preventDefault();
  }, { passive: !1 });
  const pd = () => window.innerWidth <= 620;
  let Pa = null;
  Ge.addEventListener("pointerdown", (e) => {
    const t = Ge.querySelector(".tfMorePair");
    !pd() || !t || !t.contains(e.target) || !e.isPrimary || Ge._closing || e.target.closest("input,textarea,select,.tfDacPad,[data-cover-art],.tfMoreSide") || (Pa = { x: e.clientX, y: e.clientY, t: performance.now(), dy: 0, v: 0, pair: t, from: e.target, grab: e.target.matches(".tfMore") || !!e.target.closest(".tfMoreHead") });
  }, !0), Ge.addEventListener("pointermove", (e) => {
    if (!Pa || !e.isPrimary) return;
    const t = e.clientY - Pa.y, o = performance.now();
    if (!Pa.on) {
      if (Math.abs(e.clientX - Pa.x) > 8 || t < -8 || !Pa.grab && hl(Pa.from, -1)) {
        Pa = null;
        return;
      }
      if (t < 8) return;
      Pa.on = !0;
      try {
        Ge.setPointerCapture(e.pointerId);
      } catch {
      }
    }
    Pa.v = (t - Pa.dy) / Math.max(1, o - Pa.t), Pa.dy = t, Pa.t = o, Pa.pair.style.transform = "translateY(" + Math.max(0, t) + "px)";
  });
  const Ud = (e) => {
    if (!Pa || !e.isPrimary) return;
    const t = Pa;
    if (Pa = null, !t.on) return;
    const o = (D) => {
      D.preventDefault(), D.stopImmediatePropagation();
    };
    window.addEventListener("click", o, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", o, { capture: !0 }), 300);
    const r = e.type === "pointerup" && (t.dy > 120 || t.v > 0.5), c = "translateY(" + Math.max(0, t.dy) + "px)";
    if (t.pair.style.transform = "", !r || nn()) {
      r ? Pt() : t.pair.animate([{ transform: c }, { transform: "none" }], { duration: 320, easing: la.spring });
      return;
    }
    const h = R;
    Ge._closing = !0, Ge.style.pointerEvents = "none", Ge.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: la.exit, fill: "forwards" });
    const p = t.pair.animate([{ transform: c }, { transform: "translateY(calc(100% + 40px))" }], { duration: 220, easing: la.exit, fill: "forwards" });
    let g = !1;
    const w = () => {
      g || (g = !0, Ge._closing = !1, Ge.style.pointerEvents = "", Ge.getAnimations().forEach((D) => D.cancel()), t.pair.getAnimations().forEach((D) => D.cancel()), R === h && Pt());
    };
    p.finished.then(w, w), setTimeout(w, 300);
  };
  Ge.addEventListener("pointerup", Ud), Ge.addEventListener("pointercancel", Ud);
  function ml() {
    const e = Ge.querySelector(".tfMorePair"), t = Ge.querySelector(".tfMore");
    e == null || e.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - t.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", ml, { passive: !0 }), k && Tt();
  let fo = [];
  const Yd = (e) => e === "favourites" || e.startsWith("summary:") || e.startsWith("group:");
  function Zd(e) {
    const t = (w, D = "") => '<div class="tfMoreHead">' + (R != null && R.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + up + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + X(w) + "</div>" + D + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + xu + "</button></div>", o = (w, D) => '<div class="tfMoreNow"><div class="tfMoreState">' + X(w) + "</div></div>", r = fl;
    if (e === "favourites") {
      const w = Ne(), D = new Set(w), P = [{ name: "Starred", ids: w }, { name: "Home", ids: mt.homeVacuums }, { name: "Security", ids: [...mt.security.alarms, ...mt.security.locks] }, ...mt.rooms.map((L) => ({ name: L.name, ids: [...L.actions, ...L.plugs] }))].map((L, N) => N ? { ...L, ids: L.ids.filter((ae) => !D.has(ae)) } : L).filter((L) => L.ids.length);
      return [t("Favourites"), o(w.length ? w.length + " starred" : "None starred"), r(P, { star: !0 }, !0)];
    }
    const c = (w, { name: D = "", alert: P = !1, plain: L = !1 } = {}) => {
      const N = L ? [] : w.filter((z) => gd.includes(z.split(".")[0])), ae = w.filter((z) => !N.includes(z)), re = (z) => z.startsWith("vacuum.") && wt(z).battery_level != null ? wt(z).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (D ? '<div class="tfMoreGroupName">' + X(D) + "</div>" : "") + '<div class="tfMoreActions">' + N.map((z) => zi(z, !0)).join("") + ae.map((z) => so(z, { plain: L, alert: P, say: L ? re(z) : null })).join("") + "</div></div>";
    };
    if (e.startsWith("summary:")) {
      const w = qa().find((N) => N.key === e.slice(8));
      if (!w) return null;
      const D = w.key === "light" ? (w.groups || []).flatMap((N) => N.ids) : [], P = D.some((N) => {
        var ae;
        return ((ae = M[N]) == null ? void 0 : ae.state) === "on";
      }), L = D.length ? '<button class="primary" type="button" data-acts="' + Wi(D.map((N) => ["light", P ? "turn_off" : "turn_on", N])) + '">' + (P ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [t(w.name), '<div class="tfMoreNowRow">' + o(w.value) + L + "</div>", ...(w.groups || []).map((N) => c(N.ids, { name: N.name === w.name ? "" : N.name, alert: N.alert, plain: w.plain }))];
    }
    if (e.startsWith("group:")) {
      const [, w, D] = e.split(":"), P = mt.rooms.find((ae) => ae.id === w), L = P && b(P).find((ae) => ae.key === D);
      if (!L) return null;
      const N = L.acts ? '<button class="primary" type="button" data-acts="' + Wi(L.acts) + '">' + (L.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [t(P.name + " " + L.label.toLowerCase()), '<div class="tfMoreNowRow">' + o(L.value) + N + "</div>", c(y(P, D))];
    }
    const h = e.split(".")[0];
    M[e];
    const p = gd.includes(h) ? Go(e) : ud(e), g = (R == null ? void 0 : R.page) || 0;
    return [
      Kd(e, p),
      '<div class="tfMorePages" data-more-pages><section class="tfMorePage" aria-label="Control">' + a(e) + (h === "plant" ? rt(e).join("") : "") + p.sections.filter(Boolean).join("") + '</section><section class="tfMorePage" aria-label="Info">' + d(e) + "</section></div>",
      // the pages' icons in place of their dots (Matt, 12 Nov): Control's sliders and Info's (i), a small segmented pair
      '<div class="tfMoreDots tfMorePageIcons" role="tablist" aria-label="Pages">' + [["Control", Sg], ["Info", Bu]].map(([w, D], P) => '<button type="button" role="tab" aria-selected="' + (P === g) + '" aria-label="' + w + '" title="' + w + '" data-more-page="' + P + '"' + (P === g ? "" : ' tabindex="-1"') + ">" + D + "</button>").join("") + "</div>"
    ];
  }
  function Kd(e, t, o) {
    var p, g, w, D, P;
    const r = (p = mt.areaOf) == null ? void 0 : p.call(mt, e), c = r && (((g = mt.rooms.find((L) => L.id === r)) == null ? void 0 : g.name) || ((P = (D = (w = i()) == null ? void 0 : w.areas) == null ? void 0 : D[r]) == null ? void 0 : P.name)) || "", h = t.button ? yo(e, t) : '<div class="tfIcon"' + da(e, t.icon) + "></div>";
    return '<div class="tfMoreHead tfMoreTileHead' + (t.on ? " on" : "") + '"' + (t.tone ? ' data-tone="' + t.tone + '"' : "") + di(e) + ">" + (R != null && R.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + up + "</button>" : "") + h + '<div class="tfName"><span class="activityRowName" id="tfMoreTitle">' + X(Be(e)) + "</span>" + (c ? '<span class="activityRowMeta">' + X(c) + "</span>" : "") + '</div><button class="tfBack" type="button" data-more-close aria-label="Close">' + xu + "</button></div>";
  }
  const $d = ["lock", "alarm_control_panel", "switch", "input_boolean", "fan", "valve", "media_player", "automation", "script", "scene", "button"];
  function ud(e) {
    var c;
    const t = e.split(".")[0], o = ((c = M[e]) == null ? void 0 : c.state) === "on", r = fp.includes(t) ? { act: Lt(t, "toggle", e), label: "Turn " + Be(e) + (o ? " off" : " on") } : t === "scene" || t === "script" ? { act: Lt(t, "turn_on", e), label: "Run " + Be(e) } : null;
    return { sections: [], on: o, button: r, icon: xn(e) };
  }
  function a(e) {
    const t = e.split(".")[0];
    if ($d.includes(t) || t === "light" && !yn(e)) {
      const c = gd.includes(t) ? Go(e) : ud(e);
      return c != null && c.button ? '<div class="tfMoreSpace tfMoreSwitch' + (c.on ? " on" : "") + '"' + (c.tone ? ' data-tone="' + c.tone + '"' : "") + di(e) + ">" + yo(e, c) + "</div>" : "";
    }
    if (t === "cover") return '<div class="tfMoreSpace tfMoreFill"><div data-cover-art="' + X(e) + '"></div></div>';
    if (t === "light" && yn(e)) return '<div class="tfMoreSpace tfMoreFill"><div class="tfDacPad" data-dac="more:' + X(e) + '"></div></div>';
    const { big: o, lines: r } = s(e);
    return '<div class="tfMoreSpace"><div class="tfMoreBig' + (cn("pos", e) != null ? " live" : "") + '"><span class="tfMoreNum">' + X(o[0]) + "</span>" + (o[1] ? '<span class="tfMoreUnit">' + X(o[1]) + "</span>" : "") + '</div><div class="tfMoreFacts">' + r.map(([c, h]) => '<div class="tfMoreFact"><span>' + X(c) + "</span><span>" + X(h) + "</span></div>").join("") + "</div></div>";
  }
  function s(e) {
    var P;
    const t = M[e], o = wt(e), r = e.split(".")[0], c = (((P = Ai[r]) == null ? void 0 : P.call(Ai, o)) || []).filter(([, L]) => L != null && L !== ""), h = (L) => {
      const N = c.findIndex(([ae]) => ae === L);
      return N < 0 ? null : c.splice(N, 1)[0][1];
    }, p = (L) => {
      const N = String(L).match(/^(-?[\d.,]+)\s*(.*)$/);
      return N ? [N[1], N[2]] : [String(L), ""];
    }, g = () => [Et(String(t.state).replace(/_/g, " ")), ""];
    let w;
    r === "light" ? (h("Brightness"), w = t.state === "on" && ja(e) ? [String(_n(t)), "%"] : g()) : r === "climate" ? w = p(h("Current temperature") || Ot(o.current_temperature) + " °C") : r === "cover" ? (h("Position"), w = o.current_position != null ? [String(Kn(e)), "%"] : g()) : r === "humidifier" ? w = p(h("Current humidity") || t.state) : r === "vacuum" ? w = p(h("Battery") || t.state) : r === "plant" ? w = p(h("Moisture") || t.state) : ["media_player", "lock", "alarm_control_panel", "valve"].includes(r) ? w = g() : w = p(t.state + (o.unit_of_measurement ? " " + o.unit_of_measurement : ""));
    const D = c.length ? c.slice(0, 4) : [["State", Yt(e)]];
    return { big: w, lines: D };
  }
  function d(e) {
    var D, P, L, N, ae, re, z;
    const t = M[e], o = i(), r = (D = o == null ? void 0 : o.entities) == null ? void 0 : D[e], c = r != null && r.device_id ? (P = o == null ? void 0 : o.devices) == null ? void 0 : P[r.device_id] : null, h = '<div class="tfMoreGraph"><div class="tfMoreGroupName">Last 24 hours</div><svg class="tfGraph tfDay" data-day="' + X(e) + '" role="img" aria-label="' + X(Be(e)) + ', last 24 hours"></svg></div>', p = (L = mt.areaOf) == null ? void 0 : L.call(mt, e), g = p && (((N = mt.rooms.find((se) => se.id === p)) == null ? void 0 : N.name) || ((re = (ae = o == null ? void 0 : o.areas) == null ? void 0 : ae[p]) == null ? void 0 : re.name)) || "", w = [
      ...((z = Ai[e.split(".")[0]]) == null ? void 0 : z.call(Ai, wt(e))) || [],
      ["Changed", t.last_changed && Vs(Date.parse(t.last_changed))],
      ["Area", g],
      ["Device", c && (c.name_by_user || c.name)],
      ["Integration", (r == null ? void 0 : r.platform) && Et(r.platform.replace(/_/g, " "))],
      ["Entity", e]
    ].filter(([, se]) => se != null && se !== "");
    return h + '<div class="tfMoreRows">' + w.map(([se, j]) => '<div class="tfMoreRow"><span>' + X(se) + "</span><span>" + X(j) + "</span></div>").join("") + "</div>" + Gd(e) + (c ? '<button class="tfDetailsBtn tfMoreLink" type="button" data-path="/config/devices/device/' + X(r.device_id) + '"><span>Device page</span>' + Pu + "</button>" : "");
  }
  const m = () => "";
  let S = "";
  function _(e) {
    var t;
    R && (R.details = e, he(), (t = Ge.querySelector(e ? "[data-details-close]" : "[data-details]")) == null || t.focus({ preventScroll: !0 }));
  }
  const O = (e) => {
    const t = M[e], o = Kn(e), r = ci(e);
    return { kind: pp(t), name: Be(e), text: Yt(e), pos: o, target: Math.abs(r - o) > 0.5 ? r : null, moving: t.state === "opening" || t.state === "closing", tilt: Ho(e) ?? 100, canSet: At(e, Tu) };
  };
  function Z(e) {
    e.querySelectorAll("[data-cover-art]").forEach((t) => {
      const o = t.dataset.coverArt, r = t.dataset.artKey || "more:" + o;
      let c = tt.get(r);
      c || (c = lg({ onMove: (h) => Nt(o, h), onSet: (h) => {
        Nt(o, h), Wt("pos", o);
      } }), c.coverId = o, tt.set(r, c)), t.replaceWith(c.el), c.update(O(o));
    });
  }
  const be = (e) => [...tt.values()].filter((t) => t.coverId === e), Me = () => tt.forEach((e) => {
    M[e.coverId] && e.update(O(e.coverId));
  }), we = () => {
    tt.forEach((e, t) => {
      e.el.isConnected || (e.destroy(), tt.delete(t));
    }), Me();
  };
  function he() {
    var h, p;
    if (!R || !(Yd(R.id) || M[R.id])) {
      Ge.hidden = !0;
      return;
    }
    if ([...ge.keys()].some((g) => g.endsWith("|" + R.id))) {
      Me();
      return;
    }
    const e = Zd(R.id), t = Ge.querySelector(".tfMore");
    if (!e) {
      yt();
      return;
    }
    const o = dd(Ge), r = m(R.id), c = R.frame ? R.frame.wide : R.id.startsWith("summary:") || R.id.startsWith("group:");
    if (Ge.hidden || !t || e.length !== fo.length || t.classList.contains("wide") !== c) {
      const g = xt ? R.scroll || 0 : !Ge.hidden && t ? t.scrollTop : 0;
      if (Ge.innerHTML = '<div class="tfMorePair' + (Ge.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (c ? " wide" : "") + '"' + (R.frame ? ' style="height:' + R.frame.h + 'px"' : "") + ' tabindex="-1">' + e.join("") + "</section></div>", S = r, Ge.classList.toggle("wide", c), Ge.hidden = !1, ml(), Z(Ge), Kt(Ge), io(Ge), Ge.querySelectorAll("[data-day]").forEach((w) => Bs(w.dataset.day, w, R.at)), Ca(Ge), g && (Ge.querySelector(".tfMore").scrollTop = g), Fe(), Rs(Ge, o), !Ge.contains(n.activeElement)) {
        const w = Ge.querySelector("[data-more-close]");
        (h = w != null && w.offsetParent ? w : Ge.querySelector(".tfMore")) == null || h.focus({ preventScroll: !0 });
      }
    } else {
      if (e.forEach((g, w) => {
        var L, N;
        if (g === fo[w] || g.includes("data-cover-art") || t.children[w].contains((N = (L = n.activeElement) == null ? void 0 : L.matches) != null && N.call(L, "input,select") ? n.activeElement : null) || [...ge.keys()].some((ae) => t.children[w].querySelector('[data-drag="' + CSS.escape(ae) + '"]'))) return;
        const D = document.createElement("div");
        D.innerHTML = g;
        const P = ul(t.children[w], D.firstElementChild);
        io(P), Ca(P), Kt(P);
      }), r !== S) {
        const g = Ge.querySelector(".tfMoreSideBody");
        g && (g.innerHTML = r), S = r;
      }
      t.querySelectorAll("[data-day]").forEach((g) => {
        g.innerHTML || Bs(g.dataset.day, g, R.at);
      }), Fe(), Ge.contains(n.activeElement) || Rs(Ge, o);
    }
    (p = Ge.querySelector(".tfMorePair")) == null || p.classList.toggle("details", !!(R.details && r)), fo = e, Me();
  }
  function Fe() {
    const e = Ge.querySelector("[data-more-pages]");
    !e || !R || (e.scrollTo({ left: (R.page || 0) * e.clientWidth, behavior: "instant" }), We(), at(e));
  }
  function at(e) {
    const t = e.children[(R == null ? void 0 : R.page) || 0];
    t && (e.style.height = t.scrollHeight + "px");
  }
  function We() {
    const e = (R == null ? void 0 : R.page) || 0;
    Ge.querySelectorAll("[data-more-page]").forEach((t) => {
      const o = Number(t.dataset.morePage) === e;
      t.setAttribute("aria-selected", String(o)), t.tabIndex = o ? 0 : -1;
    });
  }
  function He(e, t) {
    var r, c;
    const o = Ge.querySelector("[data-more-pages]");
    !o || !R || (R.page = Math.max(0, Math.min(1, e)), o.scrollTo({ left: R.page * o.clientWidth, behavior: (r = window.matchMedia) != null && r.call(window, "(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }), We(), at(o), (c = Ge.querySelector('[data-more-page="' + R.page + '"]')) == null || c.focus({ preventScroll: !0 }));
  }
  let De = 0;
  Ge.addEventListener("scroll", (e) => {
    var o;
    const t = e.target;
    !((o = t.matches) != null && o.call(t, "[data-more-pages]")) || !R || (clearTimeout(De), De = setTimeout(() => {
      if (!R) return;
      const r = Math.round(t.scrollLeft / Math.max(1, t.clientWidth));
      r !== (R.page || 0) && (R.page = r, We(), at(t));
    }, 80));
  }, !0), setInterval(() => {
    R && he();
  }, 15 * 1e3);
  function bt(e, t) {
    var c, h;
    const o = !!(R && t && Ge.contains(t)), r = o && Ge.querySelector(".tfMore");
    if (o && (R.scroll = r.scrollTop), o && !R.under) {
      const p = Ge.querySelector(".tfMorePair"), g = { more: R, parts: fo, opener: t };
      p.classList.add("still"), p.style.transform = "", p.inert = !0, uo.innerHTML = "", uo.appendChild(p), uo.classList.toggle("wide", Ge.classList.contains("wide")), uo.hidden = !1, Ge.hidden = !0, Ge.innerHTML = "", R = { id: e, opener: t, back: null, frame: null, under: g, at: Number((c = t == null ? void 0 : t.dataset) == null ? void 0 : c.at) || null }, Ue();
      return;
    }
    R = { id: e, opener: o ? R.opener : t, back: o ? R : null, frame: o ? R.frame || { wide: r.classList.contains("wide"), h: r.offsetHeight } : null, under: o ? R.under : null, at: Number((h = t == null ? void 0 : t.dataset) == null ? void 0 : h.at) || null }, Ue();
  }
  let xt = !1;
  function Ue() {
    fo = [], xt = !Ge.hidden, tt.forEach((e, t) => {
      t !== R.id && Ge.contains(e.el) && (e.destroy(), tt.delete(t));
    }), he(), xt = !1;
  }
  function yt() {
    if (!R) return;
    const e = R;
    Xh(Ge, () => {
      R === e && Pt();
    });
  }
  function Pt() {
    var r, c, h, p, g, w, D, P;
    const e = R == null ? void 0 : R.opener, t = R == null ? void 0 : R.under;
    R = null, tt.forEach((L, N) => {
      Ge.contains(L.el) && (L.destroy(), tt.delete(N));
    }), sn.forEach((L, N) => {
      N.startsWith("more:") && sn.delete(N);
    }), Ge.hidden = !0, Ge.innerHTML = "";
    const o = { preventScroll: !0 };
    if (t) {
      const L = uo.firstElementChild;
      R = t.more, fo = t.parts, L && (L.inert = !1, Ge.appendChild(L)), Ge.classList.toggle("wide", uo.classList.contains("wide")), uo.hidden = !0, uo.innerHTML = "", Ge.hidden = !1;
      const N = Ge.querySelector(".tfMore");
      N && (N.scrollTop = R.scroll || 0), he(), (c = (r = t.opener) != null && r.isConnected ? t.opener : Ge.querySelector("[data-more-close]")) == null || c.focus(o);
      return;
    }
    e != null && e.isConnected ? e.focus(o) : (h = e == null ? void 0 : e.dataset) != null && h.more ? (p = E.querySelector('[data-more="' + CSS.escape(e.dataset.more) + '"]')) == null || p.focus(o) : (g = e == null ? void 0 : e.dataset) != null && g.summary ? (w = E.querySelector('[data-summary="' + CSS.escape(e.dataset.summary) + '"]')) == null || w.focus(o) : (D = e == null ? void 0 : e.hasAttribute) != null && D.call(e, "data-favs-edit") && ((P = E.querySelector("[data-favs-edit]")) == null || P.focus(o));
  }
  const ut = { moisture: "moisture", light: "light", brightness: "light", temperature: "temperature", fertility: "fertility", conductivity: "fertility" };
  function rt(e) {
    const t = String(wt(e).problem || ""), o = "sensor." + e.split(".")[1] + "_";
    return t === "none" ? [] : t.split(",").map((r) => r.trim().split(" ")).map(([r, c]) => {
      const h = ut[r], p = o + h;
      if (!h || !M[p] || !Fs[h]) return "";
      const g = wt(p).unit_of_measurement || "", [w, D] = Fs[h], P = c === "low";
      return '<div class="tfMoreGroup tfPlantProblem"><div class="tfMoreGroupName">' + X(Be(p)) + '</div><svg class="tfGraph tfPlantGraph" data-plant-graph="' + X(p) + '" data-guide="' + (P ? w : D) + '" data-guide-word="' + X("Wants " + (P ? "" : "up to ") + (P ? w : D).toLocaleString() + (g === "%" ? "%" : g ? " " + g : "") + (P ? " or more" : "")) + '" role="img" aria-label="' + X(Be(p)) + ', last 24 hours"></svg></div>';
    }).filter(Boolean);
  }
  const Ca = (e) => e.querySelectorAll("[data-plant-graph]").forEach((t) => pr(t.dataset.plantGraph, t, { guide: Number(t.dataset.guide), guideWord: t.dataset.guideWord }).then(() => $i(t)));
  function Na(e, t, o, r = {}) {
    const c = t.map((se) => se[1]).concat(r.guide != null ? [r.guide] : []), h = r.zero ? 0 : Math.min(...c), p = Math.max(...c), g = Math.max(120, e.clientWidth || 260), w = Math.max(60, e.clientHeight || 130), D = 8, P = w - 20, L = Date.now() - 24 * 3600 * 1e3, N = 24 * 3600 * 1e3, ae = (se) => Math.max(0, Math.min(g, (se - L) / N * g)), re = (se) => p === h ? (D + P) / 2 : P - (se - h) / (p - h) * (P - D);
    let z = "M" + ae(t[0][0]).toFixed(1) + " " + re(t[0][1]).toFixed(1);
    if (t.length > 2) z = af(t.map((se) => [ae(se[0]), re(se[1])]));
    else for (let se = 1; se < t.length; se++) z += r.smooth ? "L" + ae(t[se][0]).toFixed(1) + " " + re(t[se][1]).toFixed(1) : "H" + ae(t[se][0]).toFixed(1) + "V" + re(t[se][1]).toFixed(1);
    e.setAttribute("viewBox", "0 0 " + g + " " + w), e.setAttribute("aria-label", o), e.innerHTML = nf(g, D, P) + '<path d="' + z + "V" + P + "H" + ae(t[0][0]).toFixed(1) + 'Z" fill="' + (r.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + z + '" fill="none" stroke="' + (r.colour || "var(--primary)") + '" stroke-width="' + Ta.graphs.weight + '" stroke-linejoin="round" stroke-linecap="round"/><text x="0" y="' + (w - 4) + '">24 h ago</text><text x="' + g + '" y="' + (w - 4) + '" text-anchor="end">Now</text>' + (r.guide != null ? '<line class="tfGuide" x1="0" x2="' + g + '" y1="' + re(r.guide).toFixed(1) + '" y2="' + re(r.guide).toFixed(1) + '"/><text class="tfGuideWord" x="' + g + '" y="' + (re(r.guide) < 20 ? re(r.guide) + 14 : re(r.guide) - 5).toFixed(1) + '" text-anchor="end">' + X(r.guideWord || "") + "</text>" : "");
  }
  const ta = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, Di = (e, t) => {
    const o = e.split(".")[0];
    return ta[o] ? ta[o].includes(t) : o === "alarm_control_panel" || o === "climate" || o === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(t) : t === "on";
  }, Pe = (e) => {
    const t = e.split(".")[0], o = wt(e).device_class;
    return t === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[o] || (hc.includes(o) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[t] || "On";
  }, ft = /* @__PURE__ */ new Map();
  let Ha = 0;
  async function Ia(e) {
    let t = ft.get(e);
    if (!t || Date.now() - t.at > 60 * 1e3) {
      let c = [];
      try {
        const h = await W({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        c = ((h == null ? void 0 : h[e]) || []).map((p) => [p.lu != null ? p.lu * 1e3 : Date.parse(p.last_updated || p.last_changed), String(p.s ?? p.state)]).filter(([p]) => Number.isFinite(p));
      } catch {
      }
      c.length || (c = (hs || []).filter((h) => h.entity_id === e).map((h) => [h.when * 1e3, String(h.state)])), t = { at: Date.now(), pts: c }, ft.set(e, t);
    }
    const o = M[e], r = t.pts.slice().sort((c, h) => c[0] - h[0]);
    return o && (!r.length || r[r.length - 1][1] !== o.state) && r.push([Date.parse(o.last_changed) || Date.now(), o.state]), r;
  }
  async function Bs(e, t, o) {
    const r = await Ia(e);
    if (!t.isConnected) return;
    const c = r.map(([$, Ve]) => [$, Number(Ve)]);
    if (r.length > 1 && c.every(([, $]) => Number.isFinite($))) {
      Na(t, c, Be(e) + ", last 24 hours");
      return;
    }
    const h = Date.now(), p = h - 864e5, g = Math.max(200, t.clientWidth || 360), w = 62, D = ($) => Math.max(0, Math.min(g, ($ - p) / 864e5 * g)), P = [];
    let L = null;
    r.forEach(([$, Ve]) => {
      const Ht = Di(e, Ve);
      Ht && L == null ? L = Math.max($, p) : !Ht && L != null && (P.push([L, Math.max($, p)]), L = null);
    }), L != null && P.push([L, h]);
    const N = Rr(e) ? "var(--danger)" : e.startsWith("light.") ? "#ffaa00" : "var(--primary)", ae = Pe(e), re = "tfDayClip" + ++Ha, z = P.map(([$, Ve]) => ae + (Ve >= h - 1e3 && $ <= p + 1e3 ? " all day" : Ve >= h - 1e3 ? " since " + fa($) : $ <= p + 1e3 ? " until " + fa(Ve) : " " + fa($) + "–" + fa(Ve)));
    let se = "", j = -1 / 0;
    P.forEach(([$], Ve) => {
      const Ht = z[Ve].length * 5.4, it = Math.min(D($), g - Ht);
      it < j + 8 || (se += '<text x="' + it.toFixed(1) + '" y="10">' + X(z[Ve]) + "</text>", j = it + Ht);
    });
    let xe = '<text x="' + g + '" y="' + (w - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach(($) => {
      let Ve = new Date(h).setHours($, 0, 0, 0);
      Ve > h && (Ve -= 864e5), D(Ve) > 8 && D(Ve) < g - 34 && (xe += '<text x="' + D(Ve).toFixed(1) + '" y="' + (w - 2) + '" text-anchor="middle">' + String($).padStart(2, "0") + "</text>");
    }), t.setAttribute("viewBox", "0 0 " + g + " " + w), t.setAttribute("aria-label", Be(e) + ", last 24 hours: " + (z.length ? z.join(", ") : "no changes")), t.innerHTML = '<clipPath id="' + re + '"><rect x="0" y="18" width="' + g + '" height="26" rx="8"/></clipPath>' + se + '<rect x="0" y="18" width="' + g + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + re + ')">' + P.map(([$, Ve]) => '<rect x="' + D($).toFixed(1) + '" y="18" width="' + Math.max(2, D(Ve) - D($)).toFixed(1) + '" height="26" fill="' + N + '"/>').join("") + "</g>" + (o && o >= p ? '<line x1="' + D(o).toFixed(1) + '" x2="' + D(o).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + xe;
  }
  function Kr(e) {
    var r;
    const t = Number((r = M[e]) == null ? void 0 : r.state), o = Date.now();
    if (wt(e).state_class === "total_increasing") {
      const c = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), h = Math.max(1, o - c);
      return [...Array(49)].map((p, g) => c + h * g / 48).map((p) => [p, Math.round(t * Math.pow((p - c) / h, 1.3) * 100) / 100]);
    }
    if (Ri(e) && e.endsWith("_moisture")) return [...Array(48)].map((c, h) => [o - (48 - h) * 30 * 60 * 1e3, Math.round((t + 22 * Math.pow(1 - h / 48, 1.2)) * 10) / 10]);
    if (Ri(e) && e.endsWith("_light")) {
      const c = (p) => {
        const g = new Date(p).getHours() + new Date(p).getMinutes() / 60;
        return Math.max(0, Math.sin((g - 6) / 14 * Math.PI));
      }, h = (p) => 0.8 + 0.2 * c(p);
      return [...Array(48)].map((p, g) => o - (48 - g) * 30 * 60 * 1e3).map((p) => [p, Math.round(t * h(p) / h(o))]);
    }
    return [...Array(48)].map((c, h) => [o - (48 - h) * 30 * 60 * 1e3, Math.round(t * (0.96 + 0.04 * Math.sin(h / 6)) * 10) / 10]);
  }
  async function pr(e, t, o = {}) {
    var re, z;
    let r = de.get(e);
    if (e.endsWith("_solar_power")) r = { at: Date.now(), points: Fp() };
    else if (Ri(e)) r = { at: Date.now(), points: Kr(e) };
    else if (!r || Date.now() - r.at > 5 * 60 * 1e3) {
      try {
        const se = new Date(Date.now() - 864e5).toISOString(), j = await W({ type: "history/history_during_period", start_time: se, entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), xe = ((j == null ? void 0 : j[e]) || []).map(($) => [$.lu != null ? $.lu * 1e3 : Date.parse($.last_updated || $.last_changed), Number($.s ?? $.state)]).filter(([$, Ve]) => Number.isFinite($) && Number.isFinite(Ve));
        r = { at: Date.now(), points: xe };
      } catch {
        r = { at: Date.now(), points: [] };
      }
      de.set(e, r);
    }
    const c = t || E.querySelector('[data-graph="' + CSS.escape(e) + '"]');
    if (!c) return;
    const h = M[e], p = ((re = h == null ? void 0 : h.attributes) == null ? void 0 : re.unit_of_measurement) || "", g = r.points.slice(), w = Number(h == null ? void 0 : h.state);
    if (Number.isFinite(w) && !e.endsWith("_solar_power") && g.push([Date.now(), w]), g.length < 2) {
      c.setAttribute("aria-label", Be(e) + ": no history for the last 24 hours"), c.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const D = g.map((se) => se[1]), P = Math.min(...D), L = Math.max(...D), N = (se) => se.toLocaleString(void 0, { maximumFractionDigits: Math.abs(se) >= 100 ? 0 : 1 }), ae = ((z = h == null ? void 0 : h.attributes) == null ? void 0 : z.state_class) === "total_increasing";
    Na(c, g, Be(e) + ", last 24 hours: " + (ae ? "+" + N(D[D.length - 1] - D[0]) : P === L ? N(P) : N(P) + " to " + N(L)) + (p ? " " + p : ""), { smooth: e.endsWith("_solar_power"), zero: e.endsWith("_solar_power"), ...o });
  }
  function Ps() {
    const e = E == null ? void 0 : E.querySelector("[data-solar]");
    if (!e) return;
    const t = Fp();
    Na(e, t, "Solar, last 24 hours: up to " + Ot(Math.max(...t.map((o) => o[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function Ns(e, t) {
    const o = t.entity_id, r = $e.get(o) || {}, c = { open_cover: 100, close_cover: 0, set_cover_position: t.position, toggle: Kn(o) > 0 ? 0 : 100 }[e], h = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: t.tilt_position }[e];
    c != null && (r.pos = c), h != null && (r.tilt = h), e === "stop_cover" && (delete r.pos, delete r.tilt), e === "stop_cover_tilt" && delete r.tilt, r.at = Date.now(), $e.set(o, r);
  }
  function ri(e, t, o) {
    var c;
    const r = o == null ? void 0 : o.entity_id;
    return e !== "light" || typeof r != "string" || !Wo[r] || !ja(r) || o.brightness_pct != null || o.brightness != null ? [t, o] : t !== "turn_on" && !(t === "toggle" && ((c = M[r]) == null ? void 0 : c.state) !== "on") ? [t, o] : ["turn_on", { ...o, brightness_pct: Wo[r] }];
  }
  function si(e, t, o, r) {
    let c = { entity_id: o, ...r || {} };
    return [t, c] = ri(e, t, c), e === "cover" && Ns(t, c), Xe[o] = (Xe[o] || 0) + 1, Bi.set(Du, JSON.stringify(Xe)), Dn.call(e, t, c) ? Promise.resolve() : Promise.resolve(F(e, t, c));
  }
  function st(e) {
    const [t, o, r, c] = e.split("|");
    si(t, o, r, c ? JSON.parse(c) : null).catch(() => {
    });
  }
  function Nt(e, t) {
    ge.set("pos|" + e, t), wn.delete(e), fo = fo.map(() => ""), [E, Ge].forEach((r) => r.querySelectorAll('[data-blocks="' + CSS.escape(e) + '"]').forEach((c) => Cl(c, t)));
    const o = E.querySelector('.tfAction[data-k="' + CSS.escape(e) + '"] .tfName .activityRowMeta');
    if (o && (o.textContent = Math.round(t) + "%"), (R == null ? void 0 : R.id) === e) {
      const r = Ge.querySelector(".tfMoreState"), c = Ge.querySelector(".tfMoreSub");
      r && (r.textContent = Math.round(t) + "%", r.classList.add("live")), c && (c.textContent = "Currently " + Kn(e) + "%");
    }
    be(e).forEach((r) => r.update(O(e)));
  }
  const ia = (e, t) => {
    const o = e.shiftKey ? 10 : 1, r = { ArrowUp: t + o, ArrowRight: t + o, ArrowDown: t - o, ArrowLeft: t - o, PageUp: t + 25, PageDown: t - 25, Home: 0, End: 100 }[e.key];
    return r == null ? null : Math.max(0, Math.min(100, Math.round(r)));
  };
  function Fa(e, t) {
    var z;
    const o = e.dataset.blocks;
    (z = e.setPointerCapture) == null || z.call(e, t.pointerId);
    const r = (se) => {
      const j = e.getBoundingClientRect();
      return Math.max(0, Math.min(100, (se.clientX - j.left) / j.width * 100));
    }, c = r(t), h = t.clientX;
    let p = !1, g = ci(o), w = c, D = 0;
    const P = () => {
      g = Math.abs(w - g) < 0.2 ? w : g + (w - g) * 0.14, Nt(o, g), D = requestAnimationFrame(P);
    }, L = () => {
      p || (p = !0, e.classList.add("fine"), D = requestAnimationFrame(P));
    }, N = setTimeout(L, 350), ae = (se) => {
      w = r(se), Math.abs(se.clientX - h) > 6 && (clearTimeout(N), L());
    }, re = () => {
      clearTimeout(N), cancelAnimationFrame(D), e.removeEventListener("pointermove", ae), e.removeEventListener("pointerup", re), e.removeEventListener("pointercancel", re), e.classList.remove("fine"), Nt(o, p ? Math.round(g) : (Math.min(3, Math.floor(c / 25)) + 1) * 25), Wt("pos", o);
    };
    e.addEventListener("pointermove", ae), e.addEventListener("pointerup", re), e.addEventListener("pointercancel", re);
  }
  function en(e) {
    var g, w;
    const [t, o] = e.dataset.open.split("|"), r = e.closest(".tfCard"), c = e.getBoundingClientRect(), h = (g = e.querySelector(".tfIcon")) == null ? void 0 : g.getBoundingClientRect();
    T = { key: t, id: o, h: r ? Math.round(r.getBoundingClientRect().height) : 0, from: c, chip: h }, wn.delete(t), ma();
    const p = E.querySelector(".tfOpen");
    p && (T.rel = c.top - p.getBoundingClientRect().top), Zh(p, c, h), (w = E.querySelector(".tfOpen [data-close]")) == null || w.focus({ preventScroll: !0 });
  }
  function Tn(e) {
    var t;
    B = e.dataset.area, E.querySelectorAll(".tfAreaPanel").forEach((o) => {
      var c;
      const r = o === e;
      o.classList.toggle("active", r), o.setAttribute("aria-expanded", String(r)), (c = o.querySelector(".panelExpanded")) == null || c.toggleAttribute("inert", !r);
    }), wn.set("areas", et(((t = E.querySelector('[data-k="areas"]')) == null ? void 0 : t.style.order) || 1));
  }
  const ct = {
    bright: { value: (e, t) => Math.round(t * 100), text: (e, t) => t ? t + "%" : "Off", send: (e, t) => t > 0 ? ["light", "turn_on", { brightness_pct: t }] : ["light", "turn_off", {}] },
    ct: { value: (e, t) => {
      const [o, r] = ya(e);
      return Math.round(o + t * (r - o));
    }, text: (e, t) => t.toLocaleString() + "k", send: (e, t) => ["light", "turn_on", { color_temp_kelvin: t }] },
    hue: { value: (e, t) => Math.round(t * 360), text: () => "Colour", send: (e, t) => {
      var o;
      return ["light", "turn_on", { hs_color: [t, Math.max(60, ((o = wt(e).hs_color) == null ? void 0 : o[1]) || 100)] }];
    } },
    pos: { value: (e, t) => Math.round(t * 100), text: (e, t) => Math.round(t) + "%", send: (e, t) => ["cover", "set_cover_position", { position: Math.round(t) }] },
    tilt: { value: (e, t) => Math.round(t * 100), text: (e, t) => "Tilt " + t + "%", send: (e, t) => ["cover", "set_cover_tilt_position", { tilt_position: t }] },
    vol: { value: (e, t) => Math.round(t * 100) / 100, text: (e, t) => Math.round(t * 100) + "%", send: (e, t) => ["media_player", "volume_set", { volume_level: t }] }
  };
  function Ct(e, t, o, r) {
    var w;
    const c = ct[t].value(o, r);
    ge.set(t + "|" + o, c);
    const h = Math.round(r * 100) + "%", p = e.querySelector("i");
    if (t === "tilt") {
      p.style.width = "calc((100% - 8px) * " + r + ")";
      const [D, P] = e.querySelectorAll("span");
      D.classList.toggle("lit", r > 0.08), P.classList.toggle("lit", r > 0.92), wn.delete(o), fo = fo.map(() => ""), be(o).forEach((L) => L.update(O(o)));
    } else if (p) p.style.width = h;
    else {
      let D = e.querySelector("b");
      D || (D = document.createElement("b"), e.appendChild(D)), D.style.left = h;
    }
    e.setAttribute("aria-valuenow", String(Math.round(r * 100)));
    const g = (w = e.closest(".tfAction") || e.closest(".tfMore")) == null ? void 0 : w.querySelector(".tfName .activityRowMeta, .tfMoreState");
    g && (g.textContent = ct[t].text(o, c));
  }
  function Wt(e, t) {
    const o = ge.get(e + "|" + t), [r, c, h] = ct[e].send(t, o), p = () => setTimeout(() => {
      ge.delete(e + "|" + t), ma();
    }, 1500);
    si(r, c, t, h).then(p, p);
  }
  function tn(e) {
    e.addEventListener("click", (t) => {
      var r;
      const o = t.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],[data-more-page],[data-path],.tfAreaPanel");
      if (fn && !t.target.closest(".tfBoardMenu,[data-board-more]") && Lo(), !(!o || !e.contains(o) || o.disabled))
        if (o.dataset.boardMore)
          (fn == null ? void 0 : fn.key) === o.dataset.boardMore ? Lo(!0) : Pc(o.dataset.boardMore, o);
        else if (o.dataset.boardAct) Pd(fn.key, o.dataset.boardAct);
        else if (o.dataset.boardShow) ar(o.dataset.boardShow);
        else if (o.dataset.favHide) As(o.dataset.favHide, !1);
        else if (o.dataset.energyPick) Rl(o.dataset.energyPick);
        else if (o.dataset.act) st(o.dataset.act);
        else if (o.hasAttribute("data-details")) _(!(R != null && R.details));
        else if (o.hasAttribute("data-details-close")) _(!1);
        else if (o.dataset.summary) xd(o.dataset.summary, o);
        else if (o.dataset.star) fs(o.dataset.star);
        else if (o.hasAttribute("data-more-back")) {
          const c = R.id;
          R = R.back, Ue(), (r = Ge.querySelector('.tfMore [data-more="' + CSS.escape(c) + '"]')) == null || r.focus({ preventScroll: !0 });
        } else if (o.hasAttribute("data-favs-edit")) bt("favourites", o);
        else if (o.dataset.acts) JSON.parse(o.dataset.acts).forEach(([c, h, p, g]) => si(c, h, p, g).catch(() => {
        }));
        else if (o.dataset.more) bt(o.dataset.more, o);
        else if (o.hasAttribute("data-more-close")) yt();
        else if (o.dataset.morePage) He(Number(o.dataset.morePage));
        else if (o.dataset.path) Ll(o.dataset.path);
        else if (o.dataset.go) Yr("room:" + o.dataset.go);
        else if (o.hasAttribute("data-area-back")) _s();
        else if (o.dataset.open) en(o);
        else if (o.hasAttribute("data-close")) {
          const c = T, h = o.closest(".tfOpen"), p = h == null ? void 0 : h.getBoundingClientRect().top, g = c.from && p != null ? new DOMRect(c.from.left, p + (c.rel || 0), c.from.width, c.from.height) : c.from;
          Kh(h, g, () => {
            var w;
            T === c && (T = null, wn.delete(c.key), ma(), (w = E.querySelector('[data-open="' + CSS.escape(c.key + "|" + c.id) + '"]')) == null || w.focus({ preventScroll: !0 }));
          });
        } else o.classList.contains("tfAreaPanel") && !o.classList.contains("active") && Tn(o);
    }), e.addEventListener("keydown", (t) => {
      var r, c, h, p, g, w, D;
      const o = t.target;
      if ((r = o.dataset) != null && r.open && (t.key === "Enter" || t.key === " ") && (t.preventDefault(), en(o)), (c = o.dataset) != null && c.energyPick && (t.key === "Enter" || t.key === " ") && (t.preventDefault(), Rl(o.dataset.energyPick)), (h = o.classList) != null && h.contains("tfAreaPanel") && (t.key === "Enter" || t.key === " ") && (t.preventDefault(), Tn(o)), (p = o.dataset) != null && p.summary && (t.key === "Enter" || t.key === " ") && (t.preventDefault(), xd(o.dataset.summary, o)), t.key === "Escape" && fn && e === E) {
        t.preventDefault(), Lo(!0);
        return;
      }
      if (t.key === "Escape" && un && e === E) {
        t.preventDefault(), ql(!1), (g = u("dashEditNav")) == null || g.focus();
        return;
      }
      if (t.key === "Escape" && q && e === E && (t.preventDefault(), _s()), (w = o.dataset) != null && w.blocks) {
        const P = o.dataset.blocks, L = ia(t, Math.round(ci(P)));
        if (L == null) return;
        t.preventDefault(), Nt(P, L), clearTimeout(Za.get(P)), Za.set(P, setTimeout(() => Wt("pos", P), 500));
        return;
      }
      if ((D = o.dataset) != null && D.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(t.key)) {
        t.preventDefault();
        const [P, L] = o.dataset.drag.split("|"), N = Number(o.getAttribute("aria-valuenow")) / 100, ae = t.key === "Home" ? 0 : t.key === "End" ? 1 : Math.max(0, Math.min(1, N + (t.key === "ArrowLeft" || t.key === "ArrowDown" ? -0.05 : 0.05)));
        Ct(o, P, L, ae), Wt(P, L);
      }
    }), e.addEventListener("pointerdown", (t) => {
      var Ht;
      const o = t.target.closest("[data-blocks]");
      if (o && t.button === 0) {
        t.preventDefault(), Fa(o, t);
        return;
      }
      const r = t.target.closest("[data-drag]");
      if (!r || t.button > 0) return;
      const [c, h] = r.dataset.drag.split("|"), p = c === "bright" && !ja(h), g = t.pointerType !== "mouse";
      if (p && !g) {
        st(Lt("light", "toggle", h));
        return;
      }
      const w = c === "bright" && ((Ht = M[h]) == null ? void 0 : Ht.state) !== "on", D = c === "tilt" ? 4 : 0, P = () => r.getBoundingClientRect().width - D * 2, L = (it) => {
        const Vt = r.getBoundingClientRect();
        return Math.max(0, Math.min(1, (it.clientX - Vt.left - D) / P()));
      };
      let N = g ? "waiting" : w ? "pressed" : "dragging", ae = 0;
      const re = t.clientX, z = t.clientY, se = (it, Vt) => Math.hypot(it.clientX - re, it.clientY - z) > Vt, j = () => {
        try {
          r.setPointerCapture(t.pointerId);
        } catch {
        }
      };
      g || (t.preventDefault(), j()), N === "dragging" && Ct(r, c, h, L(t));
      const xe = () => {
        var it, Vt;
        N = "sliding", Te = r, r.classList.add("held"), j(), (it = navigator.userActivation) != null && it.hasBeenActive && ((Vt = navigator.vibrate) == null || Vt.call(navigator, 8)), ae = w ? (Wo[h] ?? 100) / 100 : Number(r.getAttribute("aria-valuenow")) / 100;
      }, $ = (it) => {
        N === "waiting" && se(it, Se) ? !p && Math.abs(it.clientX - re) > Math.abs(it.clientY - z) ? xe() : N = "gone" : N === "pressed" && se(it, 4) && (N = "dragging"), N === "sliding" ? Ct(r, c, h, Math.max(0, Math.min(1, ae + (it.clientX - re) / P()))) : N === "dragging" && Ct(r, c, h, L(it));
      }, Ve = (it) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((Vt, Va) => r.removeEventListener(Vt, Va ? Ve : $)), r.classList.remove("held"), Te === r && (Te = null), N === "sliding" || N === "dragging" ? Wt(c, h) : it.type === "pointerup" && p ? st(Lt("light", "toggle", h)) : it.type === "pointerup" && w && (N === "waiting" || N === "pressed") && si("light", "turn_on", h).catch(() => {
        });
      };
      r.addEventListener("pointermove", $), r.addEventListener("pointerup", Ve), r.addEventListener("pointercancel", Ve);
    }), e.addEventListener("touchmove", (t) => {
      Te && t.cancelable && t.preventDefault();
    }, { passive: !1 });
  }
  return E && k && (pn(), tn(E), tn(Ge), Ge.addEventListener("click", (e) => {
    e.target === Ge && yt();
  }), (Xd = n.getElementById("homeNav")) == null || Xd.addEventListener("click", () => {
    q && _s();
  }), (Jd = n.querySelector(".bottomNav")) == null || Jd.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + fc + "</button>"), (Dp = u("dashEditNav")) == null || Dp.addEventListener("click", () => A ? dl(!Xa) : ql(!un)), E.addEventListener("pointerdown", to), E.addEventListener("pointerdown", el), E.addEventListener("click", (e) => {
    A && Xa && e.target.closest(".tfBoardItem") && (e.preventDefault(), e.stopPropagation());
  }, !0), E.addEventListener("scroll", (e) => {
    var t;
    (t = e.target.classList) != null && t.contains("hcFadeList") && Fl(e.target);
  }, !0), new ResizeObserver(() => {
    v.classList.contains("tfDash") && Zs() !== bi ? ma() : Ga();
  }).observe(E), window.addEventListener("resize", Ga, { passive: !0 }), Ge.addEventListener("keydown", (e) => {
    var t, o;
    e.key === "Escape" ? (e.stopPropagation(), R != null && R.details ? _(!1) : yt()) : (e.key === "ArrowLeft" || e.key === "ArrowRight") && ((o = (t = e.target).closest) != null && o.call(t, ".tfMoreDots")) && (e.preventDefault(), He(((R == null ? void 0 : R.page) || 0) + (e.key === "ArrowRight" ? 1 : -1)));
  })), te(), {
    update(e) {
      if (!k) return;
      const t = !Object.keys(M).length;
      M = { ...Object.fromEntries(Object.entries(M).filter(([r]) => Ri(r))), ...e || {} };
      for (const r in M) r.startsWith("light.") && M[r].state === "on" && ja(r) && Aa(r, _n(M[r]));
      t ? ao() : ma();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      Po = !0, $t == null || $t.destroy(), $t = null, wa == null || wa.forEach((e) => e.destroy()), wa = null;
    },
    resume() {
      Po = !1, !(!k || !(E != null && E.querySelector("[data-tf]"))) && (vt.isConnected && is(vt.style.order), dt());
    }
  };
}
const Pg = "0.88.0", mp = "move_assistant", Ng = "move_assistant", Fu = "move_assistant_checkin_reminder";
function Hg() {
  if (document.getElementById("move-assistant-inter")) return;
  const n = document.createElement("link");
  n.id = "move-assistant-inter", n.rel = "stylesheet", n.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(n);
}
class Ig extends HTMLElement {
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
    Hg();
    const l = this.shadowRoot || this.attachShadow({ mode: "open" });
    l.innerHTML = `<style>${Rf}${Bf}${Pf}${Nf}</style>${Hf}`;
    const i = l.getElementById("app");
    i.style.opacity = "0";
    let u = null;
    try {
      const v = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: mp
      });
      u = (v == null ? void 0 : v.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(u), this._app = ah(l, {
      data: u,
      save: (v) => this._save(v),
      fire: (v, x) => this._fire(v, x),
      ws: (v) => this._hass.callWS(v),
      subscribe: (v, x) => {
        var k, A;
        return (A = (k = this._hass) == null ? void 0 : k.connection) != null && A.subscribeMessage ? this._hass.connection.subscribeMessage(x, v) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var v, x;
        return Object.keys(((x = (v = this._hass) == null ? void 0 : v.services) == null ? void 0 : x.notify) || {}).sort();
      },
      setReminderAutomation: (v) => this._setReminderAutomation(v),
      setLight: (v) => this.classList.toggle("lightBody", v),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this._test = Bg(l, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), Uh(l, i), $h(l), this.isConnected || (this._app.suspend(), this._test.suspend()), i.style.transition = "opacity .2s ease", i.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var i;
    const l = (i = this._hass) == null ? void 0 : i.connection;
    l != null && l.subscribeMessage && l.subscribeMessage(
      (u) => {
        var x;
        const v = JSON.stringify((u == null ? void 0 : u.value) ?? null);
        v === this._lastSaved || v === this._pendingJson || (this._lastSaved = v, (x = this._app) == null || x.applyRemoteData(u.value));
      },
      { type: "frontend/subscribe_user_data", key: mp }
    ).catch(() => {
    });
  }
  _save(l) {
    this._pendingJson = JSON.stringify(l), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const i = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: mp,
          value: JSON.parse(i)
        }), this._lastSaved = i;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(l, i = {}) {
    var u, v;
    ((u = this._config) == null ? void 0 : u.events) !== !1 && ((v = this._hass) == null || v.callWS({
      type: "fire_event",
      event_type: Ng,
      event_data: { action: l, ...i }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(l) {
    const i = `config/automation/config/${Fu}`;
    if (!l) {
      try {
        await this._hass.callApi("DELETE", i);
      } catch (x) {
        if ((x == null ? void 0 : x.status_code) !== 404 && (x == null ? void 0 : x.status) !== 404) throw x;
      }
      return;
    }
    const u = (x) => `${x}:00`, v = window.location.pathname;
    await this._hass.callApi("POST", i, {
      id: Fu,
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
            data: { url: v, clickAction: v }
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
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", Ig), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${Pg} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
