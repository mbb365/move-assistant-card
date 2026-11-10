const Yp = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn,.tfSeg>button){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', Zp = `#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)),#homeView .tfATile{transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover,#homeView .tfATile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .toggleRow:has(>.themeChoice,>.settingsSelect){flex-direction:column;align-items:stretch;gap:12px}#housePane .toggleRow>.settingsSelect{width:100%}#housePane .themeChoice[hidden]{display:none}#housePane .houseTab>.card:has(>.tfSetGroup){gap:24px}#housePane .tfSetGroup{display:grid;gap:8px}#housePane .tfSetGroup>.sectionLabel{margin:0 16px}#housePane{container:housepane/inline-size}#housePane .tfLightCards{display:none}@container housepane (width < 720px){#housePane .houseTab .metaTableWrap{display:none}#housePane .tfLightCards{display:grid;gap:8px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}#housePane .themeChoice,.tfBoardMenu .tfHeightTabs,.wb .wbSegments{gap:4px;padding:4px;border:0;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}#housePane .themeChoice{display:flex;flex-wrap:nowrap;width:100%}#housePane .themeChoice>button{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button){height:38px;min-width:0;min-height:0;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile)!important;white-space:nowrap;cursor:pointer}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button):hover:not(:disabled):not([aria-pressed=true]):not([aria-checked=true]):not(.active){background:transparent;color:var(--text)}:is(#housePane .themeChoice :is(.wxLayoutBtn[aria-pressed=true],.themeBtn.active),.tfBoardMenu .tfHeightTabs button[aria-checked=true],.wb .wbSegments button[aria-pressed=true]){background:var(--bright);color:var(--on-bright)}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfATags{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:4px;margin-left:auto;min-width:0}.tfATags .sourceTag{display:block;margin:0;max-width:100%;padding:6px 12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}#app.house .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}#app.house .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-l);--g1:var(--g1-l);--g2:var(--g2-l)}#app.house .tfSum[data-summary=climate] .tfIcon svg path{fill:url(#hcClimateGrad)}.tfGradDefs{position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:620px){.tfMoreBackdrop{place-items:end stretch;padding:0}.tfMorePair{width:100%;max-height:85vh}.tfMore{width:100%;border-radius:var(--r-card) var(--r-card) 0 0}}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}.tfMoreTileHead .tfName{display:grid;flex:1;min-width:0;cursor:default}.tfMoreTileHead :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreTileHead .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfMoreTileHead div.tfIcon{cursor:default}.tfMoreTileHead.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreTileHead.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMorePages{display:grid;grid-auto-flow:column;grid-auto-columns:100%;align-items:start;gap:20px;flex:none;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;transition:height .25s cubic-bezier(.2,.7,.3,1)}@media (prefers-reduced-motion:reduce){.tfMorePages{transition:none}}.tfMorePages::-webkit-scrollbar{display:none}.tfMorePage{display:flex;flex-direction:column;gap:14px;min-width:0;scroll-snap-align:start;scroll-snap-stop:always}.tfMoreSpace{flex:none;display:flex;flex-direction:column;justify-content:space-between;gap:12px;height:224px;padding:18px;border-radius:16px;background:var(--tile);overflow:hidden}.tfMoreSpace.tfMoreFill{justify-content:center;align-items:center;height:auto;padding:0;background:none;border-radius:0}.tfMoreSpace.tfMoreFill>.tfCoverArt{width:100%;height:auto;max-width:none;align-self:center}.tfMoreSpace.tfMoreFill>.tfDacPad{width:100%;height:100%}.tfMoreBig{display:flex;align-items:baseline;min-width:0;font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfMoreBig.live{color:var(--primary)}.tfMoreNum{overflow:hidden;text-overflow:ellipsis}.tfMoreUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfMoreFacts{display:flex;flex:1;flex-direction:column;justify-content:space-evenly;min-height:0}.tfMoreFact{display:flex;justify-content:space-between;gap:16px;font:400 14px/20px var(--font)}.tfMoreFact span:first-child{color:var(--muted)}.tfMoreFact span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreGraph{display:flex;flex:none;flex-direction:column;gap:6px}.tfMoreGraph .tfMoreGroupName{margin:0}.tfMoreGraph .tfGraph.tfDay{width:100%}.tfMoreDots{display:flex;flex:none;justify-content:center;gap:4px;margin-top:-4px}.tfMoreDots button{display:grid;place-items:center;width:24px;height:24px;min-height:0;padding:0;border:0;background:none;cursor:pointer}.tfMoreDots button:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--muted);opacity:.45;transition:opacity .15s ease,background .15s ease}.tfMoreDots button[aria-selected=true]:before{background:var(--text);opacity:1}.tfMoreLink{margin-top:auto}.tfMoreLink svg{transform:none!important}.tfMorePage .tfMoreRows{flex:none}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 20px 10px}.tfAreaPanel .tfATiles{margin-inline:-10px}.tfAreaPanel .workoutPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{max-width:100%;overflow:hidden;color:var(--muted);font:400 16px/1.2 var(--font);white-space:nowrap;text-overflow:ellipsis}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));min-height:calc(2 * var(--tile-min));align-content:end}.tfABig{max-width:100%}.panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 16px)}#app.tfBoard .tfAreas[data-rows="5"] .tfACMain{position:absolute;left:10px;right:10px;bottom:170.3px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .tfACMain{position:absolute;left:10px;right:10px;bottom:164.1px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 12px)}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{align-self:start;display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;display:grid;grid-auto-rows:60px;gap:16px;pointer-events:none}.tfBoardCells i{border-radius:var(--r-inner);background:color-mix(in srgb,var(--text) 7%,transparent)}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}.tfBoardMenu .tfHeightTabs button{justify-content:center}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}.tfWidth{padding-top:0}.tfWidth .tfHeightTabs{grid-template-columns:repeat(3,auto)}.tfBoardMenu .tfWidth .tfHeightTabs button{white-space:nowrap}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:var(--fill-row,60px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:var(--fill-row,60px);box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"]{padding:10px;border-radius:24px}.tfRoomTile{cursor:pointer}.tfRoomTile .tfRoomIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomInline,.tfRoomSub{display:none}.tfRoomReading{display:flex;flex-direction:column;gap:4px;min-width:0}.tfRoomBig{overflow:hidden;color:var(--text);font:500 46px/46px var(--font-tile);letter-spacing:-.92px;white-space:nowrap;text-overflow:ellipsis}.tfRoomSub{overflow:hidden;color:var(--muted);font:400 16px/19px var(--font);white-space:nowrap;text-overflow:ellipsis}.tfRoomDevices{display:flex;gap:12px}.tfRoomDevices .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDevices .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}#app.tfBoard .tfRoomTile[data-rows="1"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-rows="1"] :is(.tfRoomReading,.tfRoomDevices),#app.tfBoard .tfRoomTile[data-rows="2"] .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfActionHead .activityRowMeta{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfRoomSub{display:block}#app.tfBoard .tfRoomTile[data-rows="4"] .tfRoomBig{font-size:52px;line-height:52px;letter-spacing:-1.92px}#app.tfBoard .tfRoomTile[data-rows="5"] .tfRoomBig{font-size:64px;line-height:64px;letter-spacing:-1.92px}.tfRoomHeads{display:none;gap:12px 16px}.tfRoomDev{display:flex;align-items:center;gap:12px;min-width:0;padding:0;border:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfRoomDev .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomDev .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfRoomDevName{display:flex;flex-direction:column;min-width:0}.tfRoomDevName>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]){flex-direction:row;align-items:center;gap:12px}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"])>.tfActionHead{flex:1;margin-bottom:0}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]) .tfRoomDevices{display:flex}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-cols="2"]):not([data-rows="1"]) .tfRoomHeads{grid-template-columns:repeat(4,minmax(0,1fr))}#app.tfBoard .tfRoomTile[data-cols="2"][data-rows="2"] .tfRoomDev:nth-child(n+3){display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]) .tfRoomReading{display:none}#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbWx.wbS90{width:100px;height:100px;border-radius:31px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbDeg{font-size:80px;line-height:80px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbUnit{font-size:30px;line-height:38px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbWeather{flex-direction:row;align-items:center;gap:16px}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNow{flex:none}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNextHours{display:flex;flex:1 1 0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbWeather{justify-content:center;padding-top:0;padding-bottom:0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) :is(.wbNow,.wbSummary){display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbColumns{display:flex;flex:none;height:185px}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsDay{display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsNow{display:inline}#app.tfBoard .tfDash-wx[data-narrow] .wbCard.wbWeather{gap:12px;padding:18px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbWx.wbS90{width:64px;height:64px;border-radius:20px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbDeg{font-size:46px;line-height:46px;letter-spacing:-.92px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbUnit{font-size:20px;line-height:26px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-narrow] .wbHalves{display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="3"] .wbNextHours{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow] .wbHour:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;flex:none;height:auto;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumn:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbHalves{display:none}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx:not([data-narrow])[data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:0}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn{justify-content:flex-start;gap:8px;padding:12px 0 16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn .wbWx{width:40px;height:40px;border-radius:16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbTemps{gap:4px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .workoutPanel.tfAreaPanel{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded{display:grid;grid-template-columns:40px minmax(0,1fr);gap:0 12px;align-content:center}#app.tfBoard .tfAreas[data-rows="1"] :is(.panelExpanded>.workoutPanelTop,.tfACTop){display:contents}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] .tfATitle .tfAName{font-size:14px;line-height:20px;height:auto}#app.tfBoard .tfAreas[data-rows="1"] .tfABig{margin:0;flex-direction:row}#app.tfBoard .tfAreas[data-rows="1"] .tfABigMain{font-size:14px;line-height:18px;letter-spacing:0}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigUnit){font-size:14px}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigSub,.tfATiles,.tfACTiles,.sourceTag){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"]) .tfABig{display:none}#app.tfBoard .tfAreas[data-rows="4"] .tfABig{flex:none;margin-top:auto;margin-bottom:auto}#app.tfBoard .tfAreas[data-rows="4"] .tfATiles{margin-top:0}#app.tfBoard .tfAreas[data-rows="4"] .tfABigMain{font-size:52px}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded{row-gap:12px}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"],[data-rows="4"]) .tfATiles{margin-top:auto}#app.tfBoard .tfAreas[data-rows="2"] .tfATile:nth-child(n+3),#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfATile:nth-child(n+5){display:none}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:360px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-52px;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border:0;border-radius:var(--r-inner);background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(360px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.light .tfBar i{box-shadow:inset -2px 0 0 var(--text)}#app.house :is(.settingsSelect,.addInput){border:1px solid var(--muted)}#app.house{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%23d9d9d9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house.light{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%2326221e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house select.settingsSelect{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 44px 0 16px;background-image:var(--select-chev);background-repeat:no-repeat;background-position:right 16px center;background-size:16px 16px}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}#app.house :is(.tfIcon,.activityRowIcon,.tfAreaIcon,.tfRoomIcon){--chip-hi:.0375;background-image:linear-gradient(180deg,#ffffff08,#fff0)!important;box-shadow:inset 0 1px rgba(255,255,255,var(--chip-hi)),inset 0 -1px color-mix(in srgb,currentColor 3%,transparent),inset 0 -3px 6px color-mix(in srgb,currentColor 3.5%,transparent)}#app.house :is(.on[data-light] .tfIcon,.tfIcon.on[data-light],.tfACTile .tfIcon[data-light],.on[data-tone=alarm] .tfIcon,.tfIcon[data-light]){--chip-hi:.1375}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-xl]{grid-row:span 5}#app.tfBoard .tfDashBento:not([data-rows="5"]) .wbItem[data-xl] .wbCallouts{display:none}#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]) .wbZone{flex:1;height:auto;background:none;box-shadow:none;padding:0;align-items:flex-start}#app.tfBoard .tfDashBento[data-rows="3"] .wbItem[data-xl] .wbCallouts{display:flex;margin-top:0}#app.tfBoard .tfDashBento[data-rows="1"] :is(.wbZone,.wbCallouts){display:none}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{grid-auto-flow:row}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-break]{grid-column-start:1}#app.house.tfWeatherOpen #homeView{max-width:none}#app.house #settingsView .toggleList{border-radius:var(--r-card);padding-block:4px}#app.house #settingsView .toggleRow{padding-left:18px;padding-right:18px}#app.house #settingsView .toggleRow:not([hidden])~.toggleRow:before{left:18px}#app.house .view{margin-left:0}#app.house #settingsView .toggleList>.tfCardTitle{display:flex;align-items:center;min-height:28px;padding:14px 18px 2px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfLightView{display:flex;padding:4px 0 14px}#housePane.tfLightCardsOn .houseTab .metaTableWrap,#housePane.tfLightCardsOn .houseTab .tfTableNote{display:none}#housePane.tfLightCardsOn .tfLightCards{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:8px}#housePane:not(.tfLightCardsOn) .tfLightCards{display:none}@container housepane (width < 720px){#housePane:not(.tfLightCardsOn) .houseTab .metaTableWrap{display:none}#housePane:not(.tfLightCardsOn) .tfLightCards{display:grid}}#app.house.light .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house .tfTrayInner{gap:32px}#app.house .tfTraySection{gap:12px}#app.house{--font:Geist,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-family:var(--font)}#app.house #housePane .toggleRow>:is(.themeChoice,.settingsSelect){align-self:flex-start;width:auto;max-width:100%}#app.house #housePane .themeChoice{display:inline-flex}#app.house #housePane .themeChoice>button{flex:0 1 auto;min-width:0;padding:0 16px;overflow:hidden;text-overflow:ellipsis}#app.house #housePane .toggleRow{min-width:0}#app.house #housePane .toggleRow>.settingsSelect{min-width:200px}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments){display:inline-flex;width:auto;align-self:flex-start}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments) button{flex:0 0 auto;padding:0 16px}@media (max-width:620px){#app.house.tfDash:not(.tfEditing) #homeView>.grid{display:flex!important;flex-wrap:wrap;align-items:flex-start;gap:var(--grid-gap);height:auto!important}#app.house.tfDash:not(.tfEditing) #homeView>.grid .tfBoardItem{position:relative!important;left:auto!important;top:auto!important}#app.house.tfDash:not(.tfEditing) #homeView>.grid>.tfBoardItem:not(.tfDash-favs){height:auto!important}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummary{flex:none;margin-top:0;container-type:normal}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummaryText{position:static}}#app.house :is(#housePane .themeChoice,.wb .wbSegments,.tfBoardMenu .tfHeightTabs){height:32px;padding:3px;gap:3px;box-sizing:border-box}#app.house :is(#housePane .themeChoice>button,.wb .wbSegments button,.tfBoardMenu .tfHeightTabs button){height:26px!important;padding:0 12px;border-radius:13px!important;font:600 12px/16px var(--font-tile)!important}`, Kp = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);opacity:.14}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbAsNow{display:none}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbNextHours{display:none;justify-content:space-between;align-items:center;gap:8px;min-width:0}.wbHour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}.wbHourTime{color:var(--muted);font:400 14px/20px var(--font);white-space:nowrap}.wbHourTemp{font:400 18px/20px var(--font-tile);white-space:nowrap}.wbHour .wbWx.wbS40{width:40px;height:40px;border-radius:16px}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumn .wbWx.wbS60{width:40px;height:40px;border-radius:14px}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbTrend{position:relative;width:100%;height:100%;min-height:0}.wbTrendPlot{position:absolute;top:22px;right:0;bottom:24px;left:0}.wbTrendPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbTrendLine{fill:none;stroke:var(--text);stroke-width:2;stroke-linejoin:round;stroke-linecap:round;opacity:.8}.wbTrendDot{position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:var(--card);box-shadow:0 0 0 2px var(--text)}.wbTrendDot.wbToday{width:11px;height:11px;margin:-5.5px 0 0 -5.5px;background:var(--primary);box-shadow:0 0 0 3px var(--card)}.wbAvgValue{position:absolute;transform:translate(-50%,calc(-100% - 8px));color:var(--muted);font:400 10px/1 var(--font-tile);white-space:nowrap}.wbAvgValue.wbToday{color:var(--text);font-size:12px;font-weight:600}.wbTrendAvg{position:absolute;right:0;transform:translateY(4px);color:var(--muted);font:400 10px/1 var(--font-tile)}.wbTrendDays{position:absolute;left:0;right:0;bottom:0;height:16px}.wbAvgDay{position:absolute;bottom:0;transform:translate(-50%);color:var(--muted);font:400 11px/16px var(--font-tile)}.wbAvgDay.wbToday{color:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}.wbZoned{gap:14px}.wbZone{position:relative;flex:none;height:198px;display:flex;align-items:center;justify-content:center;border-radius:16px;overflow:hidden}.wbCallouts{display:none;flex-direction:column;gap:4px;margin-top:-6px}.wbCallout{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbCallout>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbCallout>span:last-child{flex:none;color:var(--text);white-space:nowrap}.wbZone>.wbSunSky{flex:1;align-self:stretch;border-radius:0}.wbZone>.wbMoonBox{flex:none;height:150px}.wbBase .wbZone{align-items:flex-end;justify-content:flex-start}.wbZone>.wbTapeRow{align-self:stretch;height:100%}.wbItem[data-xl] .wbCallouts{display:flex}.wbUv .wbZone{display:block}.wbUvArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbUvBig{position:absolute;right:0;bottom:0;display:flex;flex-direction:column;align-items:flex-end}.wbUvNum{font:500 64px/.9 var(--font-tile);letter-spacing:-.03em;color:var(--text);font-variant-numeric:tabular-nums}.wbUvWord{margin-top:6px;font:400 14px/20px var(--font);color:var(--muted)}.wbPollenAir{position:absolute;top:0;right:0;bottom:62px;left:0;overflow:hidden;pointer-events:none}.wbFloat{position:absolute;left:-12%;animation:wbFloat linear infinite}.wbBob{display:block;animation:wbBob ease-in-out infinite alternate}@keyframes wbFloat{0%{left:-12%}to{left:106%}}@keyframes wbBob{0%{transform:translateY(-6px) rotate(-14deg)}to{transform:translateY(8px) rotate(16deg)}}.wbFloat svg{display:block}.wbSeed svg{width:calc(20px * var(--s));height:calc(28px * var(--s))}.wbGrain svg{width:calc(10px * var(--s));height:calc(10px * var(--s))}.wbStem svg{width:calc(9px * var(--s));height:calc(26px * var(--s))}.wbSeed{color:var(--text);opacity:.7}.wbGrain{color:#e9c46a;opacity:.85}.wbStem{color:#a3b18a;opacity:.75}#app.light .wbGrain{color:#c99a1e}#app.light .wbStem{color:#7d8c5f}@media (prefers-reduced-motion:reduce){.wbFloat,.wbBob{animation:none}.wbFloat{left:var(--x)}}.wbPush{display:block;transition:transform .35s cubic-bezier(.2,.8,.3,1)}.wbCallout.wbAdvice>span:first-child{color:var(--text)}.wbCard.wbSquare.wbGraphCard{height:100%;min-height:0}.wbGraphCard .wbHead .wbBack{margin:-4px -6px 0 auto}.wbGraphCard .wbRangeBtn{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;max-width:100%;height:32px;padding:0 8px 0 10px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:600 12px/16px var(--font-tile);cursor:pointer}.wb button.wbRangeBtn{border-radius:12px!important}.wbRangeBtn>span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRangeBtn .wbIcon{flex:none;width:16px;height:16px;fill:currentColor}.wbRangeBtn[aria-expanded=true]{background:var(--bright);color:var(--on-bright)}.wbItem:has(.wbRangePick){position:relative;z-index:30}.wbRangePick{position:absolute;top:116px;left:18px;z-index:30;display:flex;flex-direction:column;gap:12px;width:248px;box-sizing:border-box;padding:12px;border-radius:24px;background:var(--card);box-shadow:var(--hc-hair-all),0 18px 40px #00000059}.wbRangePick.wbPickRight{left:auto;right:18px}.wbRangePresets{display:flex;flex-direction:column;gap:2px}.wb .wbRangePreset{height:32px;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--text);font:400 14px/20px var(--font);text-align:left;cursor:pointer}.wb .wbRangePreset:hover{background:var(--tile)}.wb .wbRangePreset[aria-pressed=true]{background:var(--bright);color:var(--on-bright);font-weight:600}.wbRangeDates{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:12px;box-shadow:inset 0 .4px 0 var(--line)}.wbRangeDates label{display:grid;gap:4px;min-width:0;color:var(--muted);font:400 12px/16px var(--font)}.wbRangeDates input{width:100%;min-width:0;height:32px;box-sizing:border-box;padding:0 6px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 12px/16px var(--font);color-scheme:inherit}.wb .wbRangeApply{height:32px;padding:0 14px;border:0;border-radius:999px!important;background:var(--bright);color:var(--on-bright);font:600 12px/16px var(--font-tile);cursor:pointer}.wbGraphCard .wbGraph{flex:1;height:auto;min-height:0}`, $p = `<main id="app"><div class="shell">
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
`, yn = {
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
}, wn = (n) => n < 0 ? 0 : n > 1 ? 1 : n, hc = (n, d, i) => n + (d - n) * i, tc = (n) => {
  const d = String(n || "#000000").trim().replace("#", ""), i = d.length === 3 ? d.split("").map((f) => f + f).join("") : d;
  return [0, 2, 4].map((f) => parseInt(i.slice(f, f + 2), 16) || 0);
}, Xp = (n) => "#" + n.map((d) => Math.round(Math.max(0, Math.min(255, d))).toString(16).padStart(2, "0")).join(""), mc = {}, Je = (n, d, i) => {
  const f = n + d + i;
  return mc[f] || (mc[f] = Xp(tc(n).map((b, y) => b + (tc(d)[y] - b) * i)));
}, gc = {}, ud = (n) => gc[n] || (gc[n] = tc(n)), Nd = (n, d, i, f) => (b) => {
  if (b <= 0) return 0;
  if (b >= 1) return 1;
  let y = 0, M = 1, E = b;
  for (let S = 0; S < 18; S++)
    E = (y + M) / 2, 3 * (1 - E) * (1 - E) * E * n + 3 * (1 - E) * E * E * i + E * E * E < b ? y = E : M = E;
  return 3 * (1 - E) * (1 - E) * E * d + 3 * (1 - E) * E * E * f + E * E * E;
}, Jp = { std: Nd(0.2, 0, 0, 1), acc: Nd(0.3, 0, 1, 1), dec: Nd(0, 0, 0, 1) };
function xd(n, d) {
  const i = String(n || "");
  return (i === "sunny" || i === "clear-night" ? "clear" : i === "partlycloudy" ? "partly" : i === "fog" ? "fog" : i === "lightning" || i === "lightning-rainy" ? "storm" : i === "snowy" || i === "snowy-rainy" ? "snow" : i === "rainy" || i === "pouring" || i === "hail" ? "rain" : "cloudy") + "/" + (i === "clear-night" || d ? "night" : "day");
}
function fp(n) {
  const d = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return d.partly = [Je(d.clear[0], d.cloudy[0], 0.12), Je(d.clear[1], d.cloudy[1], 0.12)], d.storm = [Je(d.rain[0], "#000000", 0.22), Je(d.rain[1], "#000000", 0.22)], d;
}
const ec = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], ac = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], nc = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function oc(n, d = yn) {
  const i = { ...yn, ...d }, f = fp(i), b = String(n).split("/"), y = f[b[0]] ? b[0] : "clear", M = b[1] === "night", E = f[y][M ? 1 : 0], S = {
    night: M,
    clearness: y === "clear" ? 1 : y === "partly" ? 0.7 : 0.25,
    sky: E,
    skyStops: [E],
    skyT: 0,
    sun: { x: 45, y: M ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: M ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: M ? 1 : 0 },
    stars: ec.map(() => ({ o: 0 })),
    rain: ac.map(() => ({ o: 0, dy: -16 })),
    snow: nc.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, B = (Mt) => ec.map(() => ({ o: Mt }));
  return y === "clear" ? M ? (S.moon.o = 1, S.stars = B(1)) : S.sun.o = 1 : y === "partly" ? (S.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: M ? 1 : 0 }, M ? (S.moon = { x: 34, y: 33, d: 48, o: 1 }, S.stars = B(0.7)) : S.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : y === "cloudy" || y === "fog" ? (S.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: M ? 1 : 0 }, M ? S.moon = { x: 40, y: 36, d: 40, o: 0 } : S.sun = { x: 40, y: 36, r: 20, o: 0 }) : (S.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, M ? S.moon = { x: 38, y: 28, d: 36, o: 0 } : S.sun = { x: 38, y: 28, r: 18, o: 0 }, y === "snow" ? S.snow = nc.map(() => ({ o: 1, dy: 0 })) : S.rain = ac.map((Mt, gt) => ({ o: y === "storm" && gt === 1 ? 0 : 1, dy: 0 })), y === "storm" && (S.bolt = { o: 1, dy: 0 })), S;
}
const vc = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function Qp(n, d, i, f = yn, b = !1) {
  const y = { ...yn, ...f }, M = ($, at) => $ > 0.01 && at > 0.01 ? "stay" : $ > 0.01 ? "leave" : at > 0.01 ? "enter" : "none", E = ($, at, st, nt) => {
    const Y = $[0] + at * nt, z = $[1] - (st - 1 - at) * nt;
    return Jp[$[2]](wn((i - Y) / Math.max(1e-3, z - Y)));
  }, S = ($, at, st, nt = 0, Y = 1, z = 0) => {
    const ft = M($.o, at.o);
    if (ft === "none") return { ...at, o: 0 };
    const pt = E(vc[st][ft], nt, Y, z), yt = {};
    for (const et in at) yt[et] = b && ft !== "stay" && et !== "o" ? ft === "leave" ? $[et] : at[et] : hc($[et], at[et], pt);
    return yt;
  }, B = E(vc.sky, 0, 1, 0);
  let Mt, gt;
  if (n.night !== d.night) {
    const $ = Math.min(n.clearness, d.clearness), at = Je(Je(n.sky, d.sky, 0.5), y.dusk, 0.6 * $);
    Mt = B < 0.5 ? Je(n.sky, at, B * 2) : Je(at, d.sky, B * 2 - 1), gt = $ > 0.5 ? [n.sky, y.dusk, d.sky] : [n.sky, d.sky];
  } else
    Mt = Je(n.sky, d.sky, B), gt = [n.sky, d.sky];
  return {
    night: i < 0.5 ? n.night : d.night,
    clearness: hc(n.clearness, d.clearness, i),
    sky: Mt,
    skyStops: gt,
    skyT: B,
    sun: S(n.sun, d.sun, "body"),
    moon: S(n.moon, d.moon, "body"),
    cloud: S(n.cloud, d.cloud, "cloud"),
    stars: d.stars.map(($, at) => S(n.stars[at], $, "fx", at, d.stars.length, 0.05)),
    rain: d.rain.map(($, at) => S(n.rain[at], $, "fx", at, d.rain.length, 0.05)),
    snow: d.snow.map(($, at) => S(n.snow[at], $, "fx", at, d.snow.length, 0.05)),
    bolt: S(n.bolt, d.bolt, "fx")
  };
}
const tu = [
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
], bn = (n, d) => (tu[(d & 7) * 8 + (n & 7)] + 0.5) / 64, eu = 0, sc = 1, lc = 2, dc = 3, cc = 4, vn = 5, Hs = 6, cr = 7, pc = 8, md = (n, d) => d <= 0.6665 && ((n - 0.5) * (n - 0.5) + (d - 0.2877) * (d - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (d - 0.416) * (d - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (d - 0.458) * (d - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && d >= 0.416), au = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], nu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((n) => [n[0] * 13 / 11, n[1] * 28 / 24]), hp = (n, d, i) => {
  let f = !1;
  for (let b = 0, y = n.length - 1; b < n.length; y = b++) {
    const M = n[b], E = n[y];
    M[1] > i != E[1] > i && d < (E[0] - M[0]) * (i - M[1]) / (E[1] - M[1]) + M[0] && (f = !f);
  }
  return f;
};
function mp(n, { size: d = 90, px: i = 2, oneBit: f = !1, colors: b = yn, ink: y = "#26221e", paper: M = "#fbf9f6", clock: E = 0, idle: S = !1 } = {}) {
  const B = { ...yn, ...b }, Mt = Math.sin, gt = Math.PI * 2, $ = Math.max(6, Math.round(d / i)), at = $ / 90, st = S ? Math.floor(E / 100) * 100 : 0, nt = S ? Mt(gt * st / 3600) : 0, Y = S ? 1.8 * Mt(gt * st / 6400) : 0, z = S ? 0.9 * Mt(gt * st / 4100) : 0, ft = S ? 0.8 * Mt(gt * st / 5200) : 0, pt = st / 3400 % 1, yt = S && n.bolt.o > 0.5 && (pt < 0.04 || pt > 0.08 && pt < 0.11), et = new Array($ * $), ot = new Uint8Array($ * $), L = (C, D, _, H, bt) => {
    _ == null || C < 0 || D < 0 || C >= $ || D >= $ || (H >= 1 || H > bn(C + 5, D + 3)) && (et[D * $ + C] = _, ot[D * $ + C] = bt);
  }, G = (C, D, _, H) => {
    for (let bt = Math.max(0, Math.floor(D - _) - 1); bt <= Math.min($ - 1, D + _ + 1); bt++) for (let vt = Math.max(0, Math.floor(C - _) - 1); vt <= Math.min($ - 1, C + _ + 1); vt++) H(vt, bt, vt + 0.5 - C, bt + 0.5 - D);
  }, Lt = n.skyStops || [n.sky], X = n.skyT || 0;
  for (let C = 0; C < $; C++) {
    const D = n.night ? wn(1 - (C + 0.5) / ($ * 0.7)) * 0.85 : wn(((C + 0.5) / $ - 0.35) / 0.65) * 0.85;
    for (let _ = 0; _ < $; _++) {
      let H = Lt[0];
      if (Lt.length > 1) {
        const bt = X * (Lt.length - 1), vt = Math.min(Lt.length - 2, Math.floor(bt));
        H = bt - vt > bn(_, C) ? Lt[vt + 1] : Lt[vt];
      }
      D > bn(_ + 2, C + 5) && (H = n.night ? Je(H, "#000000", 0.28) : Je(H, "#ffffff", 0.2)), et[C * $ + _] = yt ? Je(H, "#ffffff", 0.25) : H;
    }
  }
  if (n.sun.o > 0.01) {
    const C = n.sun.x * at, D = n.sun.y * at, _ = Math.max(1, n.sun.r * at);
    if (S) {
      const H = _ * (1.45 + 0.06 * nt), bt = Je(B.sun, "#ffffff", 0.55);
      if (G(C, D, H, (vt, V, kt, Tt) => {
        const ee = Math.sqrt(kt * kt + Tt * Tt);
        ee > _ && ee < H && L(vt, V, bt, 0.26 * (1 - (ee - _) / (H - _)) * n.sun.o, eu);
      }), n.sun.o > 0.5) {
        const vt = Math.floor(st / 500) % 2, V = Math.max(1, _ * 0.22);
        for (let kt = 0; kt < 8; kt++) if (kt % 2 === vt) for (let Tt = _ + 1.5; Tt < _ + 1.5 + V; Tt += 0.7) L(Math.floor(C + Math.cos(kt * Math.PI / 4) * Tt), Math.floor(D + Math.sin(kt * Math.PI / 4) * Tt), B.sun, n.sun.o, pc);
      }
    }
    G(C, D, _, (H, bt, vt, V) => {
      if (vt * vt + V * V > _ * _) return;
      const kt = ((vt * 0.643 + V * 0.766) / _ + 1) / 2;
      L(H, bt, wn((kt - 0.62) / 0.38) > bn(H, bt) ? B.sunEdge : B.sun, n.sun.o, sc);
    });
  }
  if (ec.forEach((C, D) => {
    const _ = n.stars[D].o;
    if (_ < 0.01) return;
    const H = Math.floor(C[0] * at), bt = Math.floor(C[1] * at), vt = S ? (Math.floor(st / 300) + D * 3) % 6 : 0;
    if (vt === 5) return;
    const V = Math.round(C[2] * at * (vt === 4 ? 0.3 : vt < 2 ? 1 : 0.6));
    L(H, bt, B.star, _, cr);
    for (let kt = 1; kt <= V; kt++) {
      const Tt = kt === V && V > 1 ? Je(B.star, n.sky, 0.5) : B.star;
      L(H - kt, bt, Tt, _, cr), L(H + kt, bt, Tt, _, cr), L(H, bt - kt, Tt, _, cr), L(H, bt + kt, Tt, _, cr);
    }
  }), n.moon.o > 0.01) {
    const C = Math.max(1.5, n.moon.d * at * 0.37), D = n.moon.x * at, _ = n.moon.y * at + (S && ft > 0.4 ? -1 : 0), H = D + 0.547 * C, bt = _ - 0.503 * C, vt = 0.82 * C, V = Je(B.moon, "#ffffff", 0.6);
    G(D, _, C, (kt, Tt, ee, ce) => {
      if (ee * ee + ce * ce > C * C) return;
      const ta = kt + 0.5 - H, Se = Tt + 0.5 - bt;
      ta * ta + Se * Se <= vt * vt || L(kt, Tt, wn((ce + C) / (2 * C) * 1.1 - 0.1) > bn(kt, Tt) ? B.moon : V, n.moon.o, lc);
    });
  }
  const lt = Math.max(2, Math.round(15.65 * at)), J = Math.max(1, Math.round(5.87 * at * 0.5));
  ac.forEach((C, D) => {
    const _ = n.rain[D];
    let H = _.dy, bt = _.o;
    if (bt < 0.01) return;
    if (S) {
      const kt = (st / 950 + D / 3) % 1;
      H += -5 + kt * 14, bt *= kt < 0.18 ? kt / 0.18 : kt > 0.72 ? (1 - kt) / 0.28 : 1;
    }
    const vt = (C[0] + 3 + Y) * at, V = (C[1] + H) * at;
    for (let kt = 0; kt < lt; kt++) for (let Tt = 0; Tt < J; Tt++) L(Math.floor(vt - 0.208 * kt) + Tt, Math.floor(V) + kt, B.rain, bt, cc);
  });
  const Vt = Math.max(0, Math.round(7.34 * at / 2.6));
  if (nc.forEach((C, D) => {
    const _ = n.snow[D];
    let H = _.dy, bt = 0, vt = _.o;
    if (vt < 0.01) return;
    if (S) {
      const Tt = (st / 3200 + D / 5) % 1;
      H += -6 + Tt * 14, bt = 1.5 * Mt(gt * (Tt * 1.5 + D / 5)), vt *= Tt < 0.2 ? Tt / 0.2 : Tt > 0.75 ? (1 - Tt) / 0.25 : 1;
    }
    const V = Math.floor((C[0] + 3.67 + bt + Y) * at), kt = Math.floor((C[1] + 3.67 + H) * at);
    L(V, kt, B.snow, vt, vn);
    for (let Tt = 1; Tt <= Vt; Tt++)
      L(V - Tt, kt, B.snow, vt, vn), L(V + Tt, kt, B.snow, vt, vn), L(V, kt - Tt, B.snow, vt, vn), L(V, kt + Tt, B.snow, vt, vn), Vt > 1 && Tt < Vt && (L(V - Tt, kt - Tt, B.snow, vt, vn), L(V + Tt, kt - Tt, B.snow, vt, vn), L(V - Tt, kt + Tt, B.snow, vt, vn), L(V + Tt, kt + Tt, B.snow, vt, vn));
  }), n.bolt.o > 0.01)
    if ($ >= 30) {
      const C = 39 + Y, D = 50 + n.bolt.dy;
      for (let _ = Math.floor(D * at); _ <= (D + 28) * at; _++) for (let H = Math.floor(C * at); H <= (C + 13) * at; H++)
        hp(nu, (H + 0.5) / at - C, (_ + 0.5) / at - D) && L(H, _, B.sun, n.bolt.o, Hs);
    } else {
      const C = $ / 18, D = 7, _ = 10 + Math.round(n.bolt.dy * 0.2);
      au.forEach((H, bt) => H.split("").forEach((vt, V) => {
        if (vt !== "#") return;
        const kt = Math.floor((D + V) * C), Tt = Math.floor((_ + bt) * C);
        for (let ee = Tt; ee < Math.max(Tt + 1, Math.floor((_ + bt + 1) * C)); ee++) for (let ce = kt; ce < Math.max(kt + 1, Math.floor((D + V + 1) * C)); ce++) L(ce, ee, B.sun, n.bolt.o, Hs);
      }));
    }
  if (n.cloud.o > 0.01) {
    const C = Math.max(3, n.cloud.w * at), D = C * 0.6665, _ = (n.cloud.x + Y) * at - C / 2, H = (n.cloud.y + z) * at - D / 2, bt = Je(B.cloudDay, B.cloudNight, Math.round(n.cloud.f * 4) / 4), vt = Je(bt, "#000000", 0.16);
    for (let V = Math.max(0, Math.floor(H) - 1); V <= Math.min($ - 1, H + D + 1); V++) for (let kt = Math.max(0, Math.floor(_) - 1); kt <= Math.min($ - 1, _ + C + 1); kt++) {
      const Tt = (kt + 0.5 - _) / C, ee = (V + 0.5 - H) / C;
      md(Tt, ee) && L(kt, V, !md(Tt, ee + 1 / C) || wn((ee - 0.42) / 0.25) * 0.8 > bn(kt, V) ? vt : bt, n.cloud.o, dc);
    }
  }
  return gp(et, ot, $, $, { oneBit: f, ink: y, paper: M, snowInk: !n.night });
}
function gp(n, d, i, f, { oneBit: b, ink: y, paper: M, snowInk: E }) {
  const S = new Uint8ClampedArray(i * f * 4), B = ud(y), Mt = ud(M);
  for (let gt = 0; gt < f; gt++) for (let $ = 0; $ < i; $++) {
    const at = gt * i + $, st = d[at];
    if (n[at] == null) continue;
    let nt = ud(n[at]);
    if (b) {
      let Y;
      st === cc || st === pc ? Y = !0 : st === vn ? Y = E : st === cr || st === Hs ? Y = !1 : Y = Math.round((0.2126 * nt[0] + 0.7152 * nt[1] + 0.0722 * nt[2]) / 255 * 4) / 4 <= bn($, gt), (st === sc || st === lc || st === dc || st === Hs) && ($ > 0 && d[at - 1] !== st || $ < i - 1 && d[at + 1] !== st || gt > 0 && d[at - i] !== st || gt < f - 1 && d[at + i] !== st) && (Y = !0), nt = Y ? B : Mt;
    }
    S[at * 4] = nt[0], S[at * 4 + 1] = nt[1], S[at * 4 + 2] = nt[2], S[at * 4 + 3] = 255;
  }
  return { w: i, h: f, data: S };
}
const ou = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, iu = (n) => xd(n, !1).split("/")[0], Pd = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let d = Math.imul(n ^ n >>> 15, 1 | n);
  return d = d + Math.imul(d ^ d >>> 7, 61 | d) ^ d, ((d ^ d >>> 14) >>> 0) / 4294967296;
}, ru = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", su = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", lu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", du = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", cu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], pu = [".##", "##.", ".#.", "#.."];
function vp(n, { width: d, height: i, colors: f, wave: b = 0.38, soft: y = 6, glow: M = 0.6 }) {
  const E = { ...yn, dawn: "#e5a77e", ...f }, S = fp(E), B = d, Mt = i, gt = B / 6, $ = gt / 2, at = Math.PI * 2, st = n.length ? n : [{ cond: "cloudy", night: !1 }], nt = [...Array(12)].map((pt, yt) => {
    const et = st[Math.min(yt, st.length - 1)], ot = iu(et.cond), L = yt % 2 === 1;
    return { cond: et.cond, k: ot, night: L, sky: S[ot][L ? 1 : 0], cover: ou[ot] };
  }), Y = (pt) => Mt * (0.5 - b * Math.cos(at * (pt / gt - 0.25)));
  return { C: E, S: nt, W: B, H: Mt, cw: gt, sw: $, TAU: at, yb: Y, side: (pt, yt, et) => {
    const ot = (pt ? Y(yt) - et : et - Y(yt)) / Math.max(3, y * 1.4) + 0.5;
    return ot <= 0 ? 0 : ot >= 1 ? 1 : ot;
  }, glowAt: (pt) => {
    const yt = ((pt / gt - 0.25) % 1 + 1) % 1, et = Math.max(0, Math.min(5, Math.round(pt / gt - 0.25))), ot = Math.max(0, Math.min(5, Math.round(pt / gt - 0.75))), L = 1 - (nt[2 * et].cover + nt[2 * ot + 1].cover) / 2, G = Math.sin(Math.PI * Math.min(1, Math.max(0, Y(pt) / Mt)));
    return { c: yt < 0.5 ? E.dusk : E.dawn, a: M * (0.2 + 0.8 * L) * G * G };
  }, soft: y, tw: gt * 0.3, sy: Mt / 90 };
}
function bp(n, { clock: d = 0, ambient: i = !1, seed: f = 1 }) {
  const { S: b, sw: y, side: M, C: E, TAU: S, sy: B } = n, Mt = d, gt = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return b.forEach(($, at) => {
    const st = Pd(f * 977 + at * 131 + 7), nt = (at + 0.5) * y, Y = $.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[$.k] : 0;
    for (let z = 0; z < Y; z++) {
      const ft = nt + (st() - 0.5) * y * 1.6, pt = (6 + st() * 76) * B, yt = st() < 0.35, et = 1.8 + st() * 1.6, ot = M(!0, ft, pt) * (yt ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(S * Mt / 2600 + z * 1.7 + at) : 1);
      ot >= 0.03 && gt.stars.push({ x: ft, y: pt, big: yt, size: et, o: ot });
    }
    if (!$.night && ($.k === "clear" || $.k === "partly")) {
      const z = nt + (st() - 0.5) * y * 0.3, ft = Math.min(15, y * 0.29);
      gt.suns.push({ x: z, y: 32 * B, rad: ft, halo: ft * 2.8 * (i ? 1 + 0.07 * Math.sin(S * Mt / 3600 + at) : 1) });
    }
    if ($.night && ($.k === "clear" || $.k === "partly")) {
      const z = Math.min(0.78, y * 0.55 / 34), ft = nt - 23 * z + (st() - 0.5) * y * 0.2;
      gt.moons.push({ x: ft + 23 * z, y: (4 + (i ? 0.8 * Math.sin(S * Mt / 5200 + at) : 0)) * B + 23 * z, d: 46 * z });
    }
  }), b.forEach(($, at) => {
    const st = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[$.k];
    if (!st) return;
    const nt = Pd(f * 577 + at * 71 + 3), Y = (at + 0.5) * y, z = $.k === "rain" || $.k === "storm" || $.night ? E.cloudNight : E.cloudDay, ft = $.night ? 0.82 : $.k === "storm" ? 0.75 : 1;
    for (let pt = 0; pt < st; pt++) {
      const yt = y / 46 * ($.k === "partly" ? 0.85 : 0.75 + nt() * 0.55), et = Y + ($.k === "partly" ? y * 0.12 : (nt() - 0.5) * y * 1.05), ot = ($.k === "partly" ? 40 : 6 + nt() * 26) * B, L = i ? 2.5 * Math.sin(S * Mt / 9e3 + at * 1.3 + pt * 2.1) : 0, G = i ? 0.9 * Math.sin(S * Mt / 6100 + at + pt) : 0;
      gt.clouds.push({ x: et - 23 * yt + L, y: ot - 15.33 * yt + G, w: 46 * yt, h: 30.66 * yt, fill: z, o: ft * (st > 1 && pt === 0 ? 0.85 : 1) });
    }
  }), b.forEach(($, at) => {
    const st = Pd(f * 313 + at * 29 + 11), nt = (at + 0.5) * y, Y = $.cond === "pouring" ? 16 : $.cond === "rainy" || $.cond === "hail" ? 9 : $.cond === "lightning-rainy" ? 12 : $.cond === "snowy-rainy" ? 5 : 0;
    for (let ft = 0; ft < Y; ft++) {
      let pt = nt + (st() - 0.5) * y * 1.05, yt = 44 + st() * 36, et = 1;
      if (i) {
        const L = ((yt - 44 + Mt * 0.04) % 36 + 36) % 36;
        pt -= 0.21 * (L - (yt - 44)), yt = 44 + L, et = Math.min(1, L / 6, (36 - L) / 6);
      }
      yt *= B;
      const ot = M($.night, pt, yt) * et;
      ot >= 0.05 && gt.drops.push({ x: pt, y: yt, o: ot });
    }
    const z = $.cond === "snowy" ? 11 : $.cond === "snowy-rainy" ? 6 : 0;
    for (let ft = 0; ft < z; ft++) {
      let pt = nt + (st() - 0.5) * y * 1.05, yt = 40 + st() * 44, et = 1;
      if (i) {
        const L = ((yt - 40 + Mt * 9e-3) % 44 + 44) % 44;
        yt = 40 + L, pt += 1.6 * Math.sin(S * Mt / 2800 + ft * 1.9 + at), et = Math.min(1, L / 6, (44 - L) / 6);
      }
      yt *= B;
      const ot = M($.night, pt, yt) * et;
      ot >= 0.05 && gt.flakes.push({ x: pt, y: yt, o: ot });
    }
    if ($.k === "fog") {
      const ft = $.night ? "#c8ccd6" : "#ffffff", pt = $.night ? 0.28 : 0.62, yt = i ? 4 * Math.sin(S * Mt / 8e3 + at) : 0;
      for (let et = 0; et < 4; et++) gt.fogs.push({ x: nt - y * 0.75 + et % 2 * y * 0.18 + (et % 2 ? yt : -yt), y: (30 + et * 13) * B, w: y * 1.3, c: ft, a: pt });
    }
    if ($.k === "storm") {
      const ft = (Mt / 3400 + at * 0.37) % 1;
      gt.bolts.push({ x: nt + (st() - 0.5) * y * 0.3 - 5, y: 36 * B, o: i && !(ft < 0.05 || ft > 0.09 && ft < 0.12) ? 0.8 : 1 });
    }
  }), gt;
}
function uu(n, d, i, f, b, y, M, E) {
  const { S, C: B, cw: Mt, yb: gt, glowAt: $, soft: at, tw: st, sy: nt } = n, Y = new Array(i * f), z = new Uint8Array(i * f), ft = new Uint8Array(i * f), pt = (C, D, _, H, bt) => {
    _ == null || C < 0 || D < 0 || C >= i || D >= f || (H >= 1 || H > bn(C + 5, D + 3)) && (Y[D * i + C] = _, z[D * i + C] = bt);
  }, yt = (C, D, _, H) => {
    for (let bt = Math.max(0, Math.floor(D - _) - 1); bt <= Math.min(f - 1, D + _ + 1); bt++) for (let vt = Math.max(0, Math.floor(C - _) - 1); vt <= Math.min(i - 1, C + _ + 1); vt++) H(vt, bt, vt + 0.5 - C, bt + 0.5 - D);
  }, et = (C, D, _) => {
    for (let bt = 0; bt < C.length - 1; bt++) {
      const vt = (bt + D) * Mt;
      if (_ < vt - st / 2) return [C[bt], C[bt], 0];
      if (_ <= vt + st / 2) return [C[bt], C[bt + 1], (_ - vt + st / 2) / st];
    }
    const H = C[C.length - 1];
    return [H, H, 0];
  }, ot = S.filter((C) => !C.night).map((C) => C.sky), L = S.filter((C) => C.night).map((C) => C.sky), G = at / y, Lt = 16 * nt / y;
  for (let C = 0; C < i; C++) {
    const D = (C + 0.5) * b, _ = gt(D) / y, H = et(ot, 0.75, D), bt = et(L, 1.25, D), vt = $(D);
    for (let V = 0; V < f; V++) {
      const kt = bn(C, V), Tt = V + 0.5 - _, ee = (G > 0.01 ? wn(0.5 + Tt / G) : Tt > 0 ? 1 : 0) > kt;
      let ce = ee ? H[2] > kt ? H[1] : H[0] : bt[2] > kt ? bt[1] : bt[0];
      (ee ? wn(((V + 0.5) / f - 0.45) / 0.55) * 0.7 : wn(1 - (V + 0.5) / (f * 0.55)) * 0.7) > bn(C + 2, V + 5) && (ce = ee ? Je(ce, "#ffffff", 0.18) : Je(ce, "#000000", 0.25)), ee && Tt >= 0 && Tt < Lt && vt.a * 1.3 * (1 - Tt / Lt) > bn(C + 6, V + 1) && (ce = vt.c), Y[V * i + C] = ce, ft[V * i + C] = ee ? 0 : 1;
    }
  }
  const X = Je(B.sun, "#ffffff", 0.55), lt = Je(B.moon, "#ffffff", 0.6);
  d.stars.forEach((C) => {
    const D = Math.floor(C.x / b), _ = Math.floor(C.y / y);
    if (D < 0 || _ < 0 || D >= i || _ >= f || !ft[_ * i + D] || C.o < 0.15) return;
    const H = C.o > 0.45 ? B.star : Je(B.star, Y[_ * i + D], 0.5), bt = C.big && C.o > 0.6 ? Math.floor(C.size / b) : 0;
    pt(D, _, H, 1, cr);
    for (let vt = 1; vt <= bt; vt++) [[D - vt, _], [D + vt, _], [D, _ - vt], [D, _ + vt]].forEach((V) => {
      V[0] >= 0 && V[1] >= 0 && V[0] < i && V[1] < f && ft[V[1] * i + V[0]] && pt(V[0], V[1], H, 1, cr);
    });
  }), d.suns.forEach((C) => {
    const D = Math.max(1.5, C.rad / b), _ = C.x / b, H = C.y / y, bt = C.halo / b * 0.85;
    if (yt(_, H, bt, (vt, V, kt, Tt) => {
      const ee = Math.sqrt(kt * kt + Tt * Tt);
      ee > D && ee < bt && !ft[V * i + vt] && pt(vt, V, X, 0.3 * (1 - (ee - D) / (bt - D)), 0);
    }), E) {
      const vt = Math.floor(M / 500) % 2, V = Math.max(1, D * 0.3);
      for (let kt = 0; kt < 8; kt++) if (kt % 2 === vt) for (let Tt = D + 1.2; Tt < D + 1.2 + V; Tt += 0.7) pt(Math.floor(_ + Math.cos(kt * Math.PI / 4) * Tt), Math.floor(H + Math.sin(kt * Math.PI / 4) * Tt), B.sun, 1, pc);
    }
    yt(_, H, D, (vt, V, kt, Tt) => {
      kt * kt + Tt * Tt <= D * D && pt(vt, V, wn(((Tt / D + 1) / 2 - 0.6) / 0.4) > bn(vt, V) ? B.sunEdge : B.sun, 1, sc);
    });
  }), d.moons.forEach((C) => {
    const D = Math.max(1.5, C.d * 0.37 / b), _ = C.x / b, H = C.y / y, bt = _ + 0.547 * D, vt = H - 0.503 * D, V = 0.82 * D;
    yt(_, H, D, (kt, Tt, ee, ce) => {
      if (ee * ee + ce * ce > D * D) return;
      const ta = kt + 0.5 - bt, Se = Tt + 0.5 - vt;
      ta * ta + Se * Se > V * V && pt(kt, Tt, wn((ce + D) / (2 * D) * 1.1 - 0.1) > bn(kt, Tt) ? B.moon : lt, 1, lc);
    });
  }), d.clouds.forEach((C) => {
    const D = Math.max(3, C.w / b), _ = D * 0.6665, H = C.x / b, bt = C.y / y, vt = Je(C.fill, "#000000", 0.16);
    for (let V = Math.max(0, Math.floor(bt) - 1); V <= Math.min(f - 1, bt + _ + 1); V++) for (let kt = Math.max(0, Math.floor(H) - 1); kt <= Math.min(i - 1, H + D + 1); kt++) {
      const Tt = (kt + 0.5 - H) / D, ee = (V + 0.5 - bt) / D;
      md(Tt, ee) && pt(kt, V, !md(Tt, ee + 1 / D) || wn((ee - 0.42) / 0.25) * 0.8 > bn(kt, V) ? vt : C.fill, C.o, dc);
    }
  }), d.fogs.forEach((C) => {
    const D = Math.floor(C.y / y), _ = Math.max(D, Math.floor((C.y + 6 * nt) / y) - 1), H = Math.floor(C.x / b), bt = Math.floor((C.x + C.w) / b);
    for (let vt = D; vt <= _; vt++) for (let V = H; V <= bt; V++) {
      const kt = (V - H) / Math.max(1, bt - H);
      pt(V, vt, C.c, C.a * (kt < 0.25 ? kt / 0.25 : kt > 0.75 ? (1 - kt) / 0.25 : 1), 0);
    }
  });
  const J = Math.max(2, Math.round(9 / y));
  d.drops.forEach((C) => {
    const D = C.x / b, _ = Math.floor(C.y / y);
    for (let H = 0; H < J; H++) pt(Math.floor(D - 0.208 * H * y / b), _ + H, B.rain, C.o, cc);
  });
  const Vt = Math.max(0, Math.round(4.4 / b / 2.6));
  return d.flakes.forEach((C) => {
    const D = Math.floor(C.x / b), _ = Math.floor(C.y / y);
    pt(D, _, B.snow, C.o, vn);
    for (let H = 1; H <= Vt; H++)
      pt(D - H, _, B.snow, C.o, vn), pt(D + H, _, B.snow, C.o, vn), pt(D, _ - H, B.snow, C.o, vn), pt(D, _ + H, B.snow, C.o, vn);
  }), d.bolts.forEach((C) => {
    if (b <= 3.5)
      for (let D = Math.floor(C.y / y); D <= (C.y + 24) / y; D++) for (let _ = Math.floor(C.x / b); _ <= (C.x + 11) / b; _++)
        hp(cu, (_ + 0.5) * b - C.x, (D + 0.5) * y - C.y) && pt(_, D, B.sun, 1, Hs);
    else {
      const D = Math.round(C.x / b), _ = Math.round(C.y / y);
      pu.forEach((H, bt) => H.split("").forEach((vt, V) => {
        vt === "#" && pt(D + V, _ + bt, B.sun, 1, Hs);
      }));
    }
  }), { col: Y, ids: z };
}
function fu(n, d) {
  const i = d.px, f = Math.max(6, Math.round(d.width / i)), b = Math.max(6, Math.round(d.height / i)), y = d.width / f, M = d.height / b, E = d.ambient ? Math.floor((d.clock || 0) / 100) * 100 : 0, S = (at) => {
    const st = vp(at, d);
    return uu(st, bp(st, { clock: E, ambient: d.ambient, seed: d.seed }), f, b, y, M, E, d.ambient);
  }, B = S(n), Mt = d.reveal == null ? 1 : wn(d.reveal);
  let gt = B.col, $ = B.ids;
  if (Mt < 1) {
    const at = d.prev ? S(d.prev) : null, st = Mt * (f + 12);
    gt = new Array(f * b), $ = new Uint8Array(f * b);
    for (let nt = 0; nt < f * b; nt++) {
      const Y = nt % f, z = nt / f | 0;
      (d.reduce ? Mt : wn((st - Y) / 12)) > bn(Y, z) ? (gt[nt] = B.col[nt], $[nt] = B.ids[nt]) : at ? (gt[nt] = at.col[nt], $[nt] = at.ids[nt]) : (gt[nt] = null, $[nt] = 255);
    }
  }
  return gp(gt, $, f, b, { oneBit: d.oneBit, ink: d.ink, paper: d.paper, snowInk: !1 });
}
function hu(n, d, i) {
  const f = i.width, b = i.height, y = i.reveal == null ? 1 : wn(i.reveal), M = ($, at) => {
    const st = vp(at, i);
    mu($, st, bp(st, i));
  };
  if (n.clearRect(0, 0, f, b), y >= 1) {
    M(n, d);
    return;
  }
  if (i.prev && M(n, i.prev), i.reduce) {
    n.save(), n.globalAlpha = y, M(n, d), n.restore();
    return;
  }
  const E = n.canvas, S = E.__wxOff || (E.__wxOff = document.createElement("canvas"));
  (S.width !== E.width || S.height !== E.height) && (S.width = E.width, S.height = E.height);
  const B = S.getContext("2d");
  B.setTransform(n.getTransform()), B.clearRect(0, 0, f, b), M(B, d);
  const Mt = y * (f + 64) - 64, gt = B.createLinearGradient(Mt, 0, Mt + 64, 0);
  gt.addColorStop(0, "rgba(0,0,0,1)"), gt.addColorStop(1, "rgba(0,0,0,0)"), B.globalCompositeOperation = "destination-in", B.fillStyle = gt, B.fillRect(0, 0, f, b), B.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(S, 0, 0), n.restore();
}
function mu(n, d, i) {
  const { W: f, H: b, S: y, C: M, cw: E, yb: S, glowAt: B, soft: Mt, tw: gt, sy: $ } = d, at = (X, lt) => {
    const J = ud(X);
    return "rgba(" + J[0] + "," + J[1] + "," + J[2] + "," + Math.max(0, Math.min(1, lt)).toFixed(3) + ")";
  }, st = (X, lt) => {
    const J = n.createLinearGradient(0, 0, f, 0);
    J.addColorStop(0, X[0]);
    for (let Vt = 0; Vt < X.length - 1; Vt++) {
      const C = (Vt + lt) * E, D = (C - gt / 2) / f, _ = (C + gt / 2) / f;
      D > 0 && D < 1 && J.addColorStop(D, X[Vt]), _ > 0 && _ < 1 && J.addColorStop(_, X[Vt + 1]);
    }
    return J.addColorStop(1, X[X.length - 1]), J;
  }, nt = Math.max(24, Math.ceil(f / 4)), Y = (X, lt) => {
    n.beginPath();
    for (let J = 0; J <= nt; J++) {
      const Vt = f * J / nt, C = X == null ? 0 : S(Vt) + X;
      J ? n.lineTo(Vt, C) : n.moveTo(Vt, C);
    }
    for (let J = nt; J >= 0; J--) {
      const Vt = f * J / nt;
      n.lineTo(Vt, S(Vt) + lt);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = st(y.filter((X) => !X.night).map((X) => X.sky), 0.75), n.fillRect(0, 0, f, b);
  const z = n.createLinearGradient(0, 0, f, 0);
  for (let X = 0; X <= 64; X++) {
    const lt = B(f * X / 64);
    z.addColorStop(X / 64, at(lt.c, Math.min(1, lt.a)));
  }
  n.fillStyle = z;
  for (let X = 0; X < 8; X++)
    n.globalAlpha = 1 - X / 8, Y(X * 2 * $, (X + 1) * 2 * $);
  n.fillStyle = st(y.filter((X) => X.night).map((X) => X.sky), 1.25);
  const ft = Math.max(0.5, Mt), pt = 6;
  n.globalAlpha = 1, Y(null, -ft);
  for (let X = 0; X < pt; X++)
    n.globalAlpha = 1 - (X + 0.5) / pt, Y(-ft + 2 * ft * X / pt, -ft + 2 * ft * (X + 1) / pt);
  n.globalAlpha = 1;
  const yt = new Path2D(lu), et = new Path2D(su), ot = new Path2D(ru), L = new Path2D(du);
  n.fillStyle = M.star, i.stars.forEach((X) => {
    n.globalAlpha = X.o, X.big ? (n.save(), n.translate(X.x, X.y), n.scale(X.size, X.size), n.fill(yt), n.restore()) : (n.beginPath(), n.arc(X.x, X.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const G = Je(M.sun, "#ffffff", 0.55);
  i.suns.forEach((X) => {
    const lt = n.createRadialGradient(X.x, X.y, 0, X.x, X.y, X.halo);
    lt.addColorStop(0, at(G, 0.42)), lt.addColorStop(0.7, at(G, 0)), n.fillStyle = lt, n.beginPath(), n.arc(X.x, X.y, X.halo, 0, Math.PI * 2), n.fill();
    const J = n.createLinearGradient(0, X.y - X.rad, 0, X.y + X.rad);
    J.addColorStop(0.6, M.sun), J.addColorStop(1, M.sunEdge), n.fillStyle = J, n.beginPath(), n.arc(X.x, X.y, X.rad, 0, Math.PI * 2), n.fill();
  });
  const Lt = Je(M.moon, "#ffffff", 0.6);
  i.moons.forEach((X) => {
    n.save(), n.translate(X.x - X.d / 2, X.y - X.d / 2), n.scale(X.d / 46, X.d / 46);
    const lt = n.createLinearGradient(0, 6, 0, 40);
    lt.addColorStop(0, Lt), lt.addColorStop(1, M.moon), n.fillStyle = lt, n.fill(et), n.restore();
  }), i.clouds.forEach((X) => {
    n.save(), n.globalAlpha = X.o, n.translate(X.x, X.y), n.scale(X.w / 46, X.h / 30.66), n.translate(-4, -9.67), n.fillStyle = X.fill, n.fill(ot), n.restore();
  }), i.fogs.forEach((X) => {
    const lt = n.createLinearGradient(X.x, 0, X.x + X.w, 0);
    lt.addColorStop(0, at(X.c, 0)), lt.addColorStop(0.25, at(X.c, X.a)), lt.addColorStop(0.75, at(X.c, X.a)), lt.addColorStop(1, at(X.c, 0)), n.fillStyle = lt, n.fillRect(X.x, X.y, X.w, 6 * $);
  }), n.fillStyle = M.rain, i.drops.forEach((X) => {
    n.save(), n.globalAlpha = X.o, n.translate(X.x, X.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = M.snow, i.flakes.forEach((X) => {
    n.globalAlpha = X.o, n.beginPath(), n.arc(X.x, X.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = M.sun, i.bolts.forEach((X) => {
    n.save(), n.globalAlpha = X.o, n.translate(X.x, X.y), n.fill(L), n.restore();
  }), n.restore();
}
function gu(n, d) {
  var q, Wt, Pe, fe, Ra, Qt, Ue;
  const i = (e) => n.getElementById(e), f = i("workoutView"), b = i("workoutNameInput");
  let y = !0;
  const M = i("homeClock");
  function E() {
    M && (M.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  E(), setInterval(E, 15e3);
  const S = i("createFlow"), B = i("createMovementsSlot"), Mt = i("createTimingSlot"), gt = i("createFinishSlot"), $ = i("movementStepSummary"), at = i("timingStepSummary"), st = i("finishStepSummary"), nt = i("continueToTiming"), Y = i("continueToFinish"), z = i("finishMoveButton");
  let ft = !1, pt = [];
  function yt(e) {
    !e || pt.some((r) => r.node === e) || pt.push({ node: e, parent: e.parentNode, next: e.nextSibling });
  }
  function et(e, r) {
    e && (yt(e), r.appendChild(e));
  }
  function ot() {
    [...pt].reverse().forEach(({ node: e, parent: r, next: l }) => {
      r && (l && l.parentNode === r ? r.insertBefore(e, l) : r.appendChild(e));
    }), pt = [];
  }
  function L(e) {
    n.querySelectorAll(".createStep").forEach((r) => {
      r.classList.toggle("active", r.dataset.createStep === e);
    }), e === "timing" && (ft = !0), G();
  }
  function G() {
    var ht, xt;
    if (!Kt) return;
    ie[te];
    const e = da.filter((mt) => !mt.hidden), r = e.filter((mt) => mt.kind !== "rest").length, l = e.filter((mt) => mt.kind === "rest").length;
    $.textContent = r ? r + " movement" + (r === 1 ? "" : "s") + (l ? " · " + l + " rest" + (l === 1 ? "" : "s") : "") : "No movements yet";
    const h = r > 0, w = n.querySelector('[data-open-step="timing"]'), A = n.querySelector('[data-open-step="finish"]');
    w.disabled = !h, nt.disabled = !h, at.textContent = h ? Wn(D.value) + " · " + ua(_.value) + " movement · " + ua(H.value) + " rest" : "Add a movement first", A.disabled = !(h && ft);
    const R = ((b == null ? void 0 : b.value) || "").trim(), j = [];
    (ht = i("includeWarmupPreset")) != null && ht.checked && j.push("warm-up"), (xt = i("includeCooldownPreset")) != null && xt.checked && j.push("cooldown"), st.textContent = R ? R + (j.length ? " · " + j.join(" + ") : "") : j.length ? j.join(" + ") : "Name and optional extras";
  }
  function Lt() {
    var Ft, ne, qt;
    S.hidden = !1, ft = !1;
    const e = n.querySelector(".editNameRow"), r = i("createMoveOptions"), l = n.querySelector(".timeTiles"), h = i("routineSummaryModal"), w = n.querySelector(".tempoRevealRow"), A = i("tempoExperiment"), R = (Ft = i("warmupList")) == null ? void 0 : Ft.closest("section"), j = i("movementCreatorLaunch"), ht = i("movementCreator"), xt = (ne = i("strengthList")) == null ? void 0 : ne.closest("section"), mt = (qt = i("cooldownList")) == null ? void 0 : qt.closest("section");
    [r == null ? void 0 : r.querySelector(".createExtras"), R, j, ht, xt, mt].forEach((Pt) => Pt && et(Pt, B)), [r, l, h, w, A].forEach((Pt) => et(Pt, Mt)), et(e, gt), L("movements"), G();
  }
  function X() {
    ot(), S.hidden = !0, n.querySelectorAll(".createStep").forEach((e) => e.classList.remove("active"));
  }
  n.querySelectorAll("[data-open-step]").forEach((e) => e.addEventListener("click", () => {
    e.disabled || L(e.dataset.openStep);
  })), nt.addEventListener("click", () => {
    nt.disabled || L("timing");
  }), Y.addEventListener("click", () => L("finish")), z.addEventListener("click", () => i("saveWorkoutEdit").click());
  const lt = { home: i("homeView"), workout: i("workoutView"), settings: i("settingsView") }, J = i("homeNav"), Vt = i("settingsNav");
  function C(e) {
    Object.entries(lt).forEach(([r, l]) => l.classList.toggle("active", r === e)), J.classList.toggle("active", e === "home"), Vt.classList.toggle("active", e === "settings"), e === "home" && setTimeout(Pa, 400), e === "settings" && (requestAnimationFrame(() => Xi(n.querySelector(".tab.active"), !1)), Oo());
  }
  const D = i("totalTime"), _ = i("workTime"), H = i("restTime"), bt = i("totalOut"), vt = i("workOut"), V = i("restOut"), kt = i("totalFill"), Tt = i("workFill"), ee = i("restFill"), ce = i("roundsInput"), ta = i("roundsFill"), Se = i("roundsOut"), Ci = i("totalLabel"), La = i("routineSummaryModal"), Ht = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let me = Ht.map((e) => ({ ...e })), da = [
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
  const oe = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let Ge = oe.map((e) => ({ ...e }));
  const ts = {
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
  }, we = ur(d.data), ie = we.profiles;
  let te = ie[we.selected] ? we.selected : we.order.find((e) => ie[e]) || "kettlebell";
  function ur(e) {
    const r = e && typeof e == "object" ? JSON.parse(JSON.stringify(e)) : {}, l = r.profiles && Object.keys(r.profiles).length ? r.profiles : JSON.parse(JSON.stringify(ts)), h = (Array.isArray(r.order) ? r.order : Object.keys(l)).filter((w) => l[w]);
    return Object.keys(l).forEach((w) => {
      h.includes(w) || h.push(w);
    }), {
      v: 1,
      profiles: l,
      order: h,
      selected: r.selected || h[0],
      history: Array.isArray(r.history) ? r.history : [],
      checkins: (Array.isArray(r.checkins) ? r.checkins : Ti(r.energy)).map(fr),
      settings: { ...r.settings || {} }
    };
  }
  function Ti(e) {
    if (!Array.isArray(e)) return [];
    const r = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], l = [];
    return e.forEach((h) => {
      const w = new Date(h.at);
      if (isNaN(w)) return;
      const A = w.getFullYear() + "-" + String(w.getMonth() + 1).padStart(2, "0") + "-" + String(w.getDate()).padStart(2, "0"), R = w.getHours() < 14 ? "morning" : "evening";
      if (l.some((ht) => ht.date === A && ht.slot === R)) return;
      const j = r.indexOf(h.value) + 1;
      j > 0 && l.push({ date: A, slot: R, mood: null, energy: j, at: h.at });
    }), l;
  }
  function fr(e) {
    if (e.scale === 100) return e;
    const r = (l) => l == null ? null : Math.round((Number(l) - 1) / 5 * 100);
    return { ...e, mood: r(e.mood), energy: r(e.energy), scale: 100 };
  }
  function nn() {
    Kt || (we.selected = te, we.order = we.order.filter((e) => ie[e] && e !== It), d.save(we));
  }
  function ge() {
    return we.settings;
  }
  function ca(e) {
    const r = ie[e];
    if (!r) return;
    te = e;
    const l = i("workoutNameInput");
    if (l && (l.value = r.name), D.value = r.total, _.value = r.work, H.value = r.rest, ce.value = r.rounds || 1, r.customSequence) {
      const h = (r.sequence || []).map((A) => ({ ...A })), w = (A) => h.filter((R) => R.presetRole === A).map(({ presetRole: R, ...j }) => j);
      me = (r.warmup || w("warmup")).map((A) => ({ ...A })), Ge = (r.cooldown || w("cooldown")).map((A) => ({ ...A })), da = h.filter((A) => !A.presetRole), Rn(r.preset || "movement", !1);
    } else
      D.min = 3, D.max = 40, D.step = 1, _.min = 20, _.max = 60, _.step = 5, H.min = 5, H.max = 30, H.step = 5, me = (r.warmup || Ht).map((h) => ({ ...h })), Ge = (r.cooldown || oe).map((h) => ({ ...h })), da = r.strength.map((h) => Array.isArray(h) ? (([w, A, R, j = !1]) => ({ id: w, name: A, group: R, kind: "work", hidden: !!j }))(h) : { ...h });
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((h) => h.classList.toggle("active", h.dataset.workout === e)), _e();
  }
  function va(e, r, l) {
    const h = e.getBoundingClientRect(), w = h.width / 2, A = h.height / 2, R = r - w, j = l - A;
    let ht = 1 / 0, xt = 1 / 0;
    R !== 0 && (ht = w / Math.abs(R)), j !== 0 && (xt = A / Math.abs(j));
    const mt = Math.min(Math.max(1 / Math.min(ht, xt), 0), 1);
    let ct = Math.atan2(j, R) * (180 / Math.PI) + 90;
    return ct < 0 && (ct += 360), { edge: mt, angle: ct };
  }
  function Li(e, r, l = !1) {
    const h = e.getBoundingClientRect(), w = r.clientX - h.left, A = r.clientY - h.top, { edge: R, angle: j } = va(e, w, A), ht = l ? 100 : R * 100;
    e.style.setProperty("--edge-proximity", ht.toFixed(3)), e.style.setProperty("--cursor-angle", j.toFixed(3) + "deg"), e.classList.toggle("borderGlowActive", l || ht >= 30);
  }
  function hr(e) {
    e.addEventListener("pointermove", (l) => Li(e, l, !1)), e.addEventListener("pointerenter", (l) => Li(e, l, !1)), e.addEventListener("pointerdown", (l) => Li(e, l, !0));
    const r = () => {
      e.classList.remove("borderGlowActive"), e.style.setProperty("--edge-proximity", "0");
    };
    e.addEventListener("pointerleave", r), e.addEventListener("pointerup", r), e.addEventListener("pointercancel", r);
  }
  hr(i("addWorkoutPanel"));
  let Kt = !1, It = null;
  function Yt(e) {
    return String(e ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]);
  }
  function De(e) {
    return e.summary ? e.summary : e.customSequence ? Wn(e.total) + " · custom move" : Wn(e.total) + " · " + ua(e.work) + " / " + ua(e.rest) + " · warm-up + cooldown";
  }
  function Aa(e, r) {
    var A;
    const l = document.createElement("article");
    l.className = "workoutPanel", l.dataset.workout = e, l.tabIndex = 0;
    const h = r.activityCount ?? (((A = r.sequence) == null ? void 0 : A.length) || 0);
    l.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + Yt(r.name) + '</div><div class="sub">' + Yt(De(r)) + '</div><span class="sourceTag">' + Yt(r.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (h ? h + " activities" + ((r.rounds || 1) > 1 ? " × " + r.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + Yt(r.name) + "</div></div>";
    const w = i("addWorkoutPanel");
    return i("workoutGallery").insertBefore(l, w), hr(l), l.addEventListener("click", (R) => {
      R.target.closest("button") || ca(e);
    }), l.addEventListener("keydown", (R) => {
      (R.key === "Enter" || R.key === " ") && !R.target.closest("button") && (R.preventDefault(), ca(e));
    }), l.querySelector(".seeWorkoutBtn").addEventListener("click", (R) => {
      R.stopPropagation(), ca(e), kl(!1);
    }), l.querySelector(".startWorkoutBtn").addEventListener("click", (R) => {
      R.stopPropagation(), ca(e), Ad();
    }), l;
  }
  function eo() {
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.remove()), we.order.forEach((e) => {
      ie[e] && Aa(e, ie[e]);
    }), n.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.classList.toggle("active", e.dataset.workout === te));
  }
  eo(), i("addWorkoutPanel").addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), i("addWorkoutPanel").click());
  }), i("addWorkoutPanel").addEventListener("click", () => {
    Kt = !0, It = "custom-" + Date.now(), ie[It] = {
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
    }, ca(It), kl(!0);
  });
  let Ut = [], se = 0, ea = 0, ao = 1, Ua = !1, Qe = null, Ai = null, pa = !1, To = we.settings.upcomingCount ?? "all", Lo = "movement";
  function Ao(e, r, l) {
    return (Number(e) - r) / (l - r) * 100;
  }
  function ua(e) {
    const r = Math.max(0, Number(e) || 0);
    return r >= 3600 && r % 3600 === 0 ? r / 3600 + " hr" : r >= 60 && r % 60 === 0 ? r / 60 + " min" : r >= 60 ? Math.round(r / 60) + " min" : Math.round(r) + " sec";
  }
  function Wn(e) {
    const r = Math.max(0, Number(e) || 0);
    return r >= 60 && r % 60 === 0 ? r / 60 + " hr" : r >= 60 ? Math.floor(r / 60) + " hr " + r % 60 + " min" : r + " min";
  }
  function _i() {
    kt.style.width = Ao(D.value, Number(D.min), Number(D.max)) + "%", Tt.style.width = Ao(_.value, Number(_.min), Number(_.max)) + "%", ee.style.width = Ao(H.value, Number(H.min), Number(H.max)) + "%", vt.textContent = ua(_.value), V.textContent = ua(H.value);
    const e = Number(ce.value) || 1;
    ta.style.width = Ao(e, 1, 10) + "%", Ci.textContent = e > 1 ? "Time per round" : "Total time";
  }
  function mr(e) {
    return e.filter((r) => !r.hidden);
  }
  function on(e) {
    const r = Math.max(0, Math.round(Number(e) || 0)), l = Math.floor(r / 3600), h = Math.floor(r % 3600 / 60), w = r % 60;
    return (l ? l + ":" + String(h).padStart(2, "0") : h) + ":" + String(w).padStart(2, "0");
  }
  function no(e) {
    let r;
    try {
      r = new URL(String(e || "").trim());
    } catch {
      return null;
    }
    const l = r.hostname.replace(/^(www|m|music)\./, "");
    let h = null;
    if (l === "youtu.be") h = r.pathname.slice(1).split("/")[0];
    else if (/^youtube(-nocookie)?\.com$/.test(l))
      if (r.pathname === "/watch") h = r.searchParams.get("v");
      else {
        const j = r.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        j && (h = j[2]);
      }
    if (!h || !/^[\w-]{11}$/.test(h)) return null;
    const w = (j) => {
      if (!j) return 0;
      if (/^\d+$/.test(j)) return Number(j);
      const ht = j.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return ht ? (Number(ht[1]) || 0) * 3600 + (Number(ht[2]) || 0) * 60 + (Number(ht[3]) || 0) : 0;
    }, A = w(r.searchParams.get("t") || r.searchParams.get("start")), R = w(r.searchParams.get("end"));
    return { id: h, start: A, end: R > A ? R : null };
  }
  function Bn(e, r) {
    if (e.useVideoLength === !1) return Math.max(5, Number(e.duration) || r || 300);
    const l = Number(e.start) || 0, h = Number(e.end) || Number(e.videoDuration) || 0;
    return h > l ? Math.round(h - l) : Number(e.duration) || 300;
  }
  function rn(e, r) {
    const l = Math.max(0, Number(e) || 0);
    return Math.round(r === "hour" ? l * 3600 : r === "min" ? l * 60 : l);
  }
  function Rn(e, r = !0) {
    Lo = e, n.querySelectorAll(".createPresetBtn").forEach((h) => h.classList.toggle("active", h.dataset.movePreset === e));
    const l = ie[te];
    l && (l.preset = e), e === "work" ? (D.min = 30, D.max = 480, D.step = 30, _.min = 300, _.max = 7200, _.step = 300, H.min = 60, H.max = 1800, H.step = 60, r && (D.value = 60, _.value = 1500, H.value = 300), i("addMovementUnit").value = "min", i("addMovementDuration").value = 25, i("addRestUnit").value = "min", i("addRestDuration").value = 5) : (D.min = 3, D.max = 40, D.step = 1, _.min = 20, _.max = 60, _.step = 5, H.min = 5, H.max = 30, H.step = 5, r && (D.value = 20, _.value = 45, H.value = 15), i("addMovementUnit").value = "sec", i("addMovementDuration").value = 45, i("addRestUnit").value = "sec", i("addRestDuration").value = 30), _i();
  }
  function sn(e, r) {
    const l = Lo === "work";
    return e.map((h, w) => ({ ...h, id: r + "-" + w + "-" + Date.now().toString(36), useGlobalTiming: !l, duration: l ? 60 : Number(_.value) }));
  }
  function gr() {
    const e = ie[te];
    e != null && e.customSequence && (e.includeWarmup = i("includeWarmupPreset").checked, e.includeCooldown = i("includeCooldownPreset").checked, e.includeWarmup && !me.length && (me = sn(Ht, "warm")), e.includeCooldown && !Ge.length && (Ge = sn(oe, "cool")), _e());
  }
  function Nn() {
    const e = i("upcomingCountSetting");
    if (!e) return;
    const r = Math.max(1, Ut.length - 1), l = To;
    e.innerHTML = "";
    for (let A = 1; A <= r; A++) {
      const R = document.createElement("option");
      R.value = String(A), R.textContent = String(A), e.appendChild(R);
    }
    const h = document.createElement("option");
    h.value = "all", h.textContent = "All", e.appendChild(h);
    const w = l === "all" ? "all" : String(Math.min(Number(l) || 1, r));
    e.value = w, To = w === "all" ? "all" : Number(w);
  }
  function _e() {
    Number(D.value) * 60;
    const e = Number(_.value), r = Number(H.value), l = ie[te], h = !!(l != null && l.customSequence), w = (h ? !l.includeWarmup : l != null && l.warmupOff) ? [] : mr(me), A = mr(da), R = h && !l.includeCooldown ? [] : mr(Ge);
    if (l && (l.total = Number(D.value), l.work = e, l.rest = r, l.rounds = Number(ce.value) || 1, l.customSequence ? (l.sequence = da.map((Bt) => ({ ...Bt })), l.warmup = me.map((Bt) => ({ ...Bt })), l.cooldown = Ge.map((Bt) => ({ ...Bt }))) : (l.strength = da.map((Bt) => ({ ...Bt })), l.warmup = me.map((Bt) => ({ ...Bt })), l.cooldown = Ge.map((Bt) => ({ ...Bt })))), l != null && l.customSequence) {
      const Bt = [...w.map((pe) => ({ ...pe, section: "warmup" })), ...A, ...R.map((pe) => ({ ...pe, section: "cooldown" }))].map((pe) => {
        if (pe.kind === "video") return { ...pe, duration: Bn(pe, e), rest: 0 };
        if (pe.kind === "rest") {
          const Sa = pe.useGlobalTiming === !0 ? r : Number(pe.duration) || r;
          return { ...pe, duration: Sa, rest: 0 };
        }
        const Ma = pe.useGlobalTiming === !1 && Number(pe.duration) || e;
        return { ...pe, duration: Ma, rest: 0 };
      });
      l.autoRest && Number(l.autoRestDuration) > 0 ? (Ut = [], Bt.forEach((pe, Ma) => {
        Ut.push(pe);
        const Sa = Bt[Ma + 1];
        pe.kind !== "rest" && Sa && Sa.kind !== "rest" && Ut.push({
          id: "auto-rest-" + Ma,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(l.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : Ut = Bt;
    } else
      Ut = [...w.map((Bt) => ({ ...Bt, section: "warmup" })), ...A, ...R.map((Bt) => ({ ...Bt, section: "cooldown" }))].map((Bt) => Bt.kind === "video" ? { ...Bt, duration: Bn(Bt, e), rest: 0 } : Bt.kind === "rest" ? { ...Bt, duration: Bt.useGlobalTiming === !0 ? r : Number(Bt.duration) || r, rest: 0 } : { ...Bt, duration: Bt.useGlobalTiming === !1 && Number(Bt.duration) || e, rest: r }), Ut.forEach((Bt, pe) => {
        var Ma;
        ((Ma = Ut[pe + 1]) == null ? void 0 : Ma.kind) === "rest" && (Bt.rest = 0);
      }), Ut.length && (Ut[Ut.length - 1].rest = 0);
    const j = Math.max(1, Math.min(10, Number(ce.value) || 1)), ht = Ut, xt = (Bt) => j <= 1 ? null : Bt.section === "warmup" || Bt.presetRole === "warmup" ? "first" : Bt.section === "cooldown" || Bt.presetRole === "cooldown" ? "last" : Bt.kind === "video" && (Bt.videoRounds === "first" || Bt.videoRounds === "last") ? Bt.videoRounds : null, mt = (Bt) => !!xt(Bt), ct = ht.filter((Bt) => !mt(Bt)), Ft = ht.filter(mt), ne = ct.length, qt = ct.reduce((Bt, pe) => Bt + pe.duration + pe.rest, 0), Pt = Ft.reduce((Bt, pe) => Bt + pe.duration + pe.rest, 0), Et = [
      Ft.some((Bt) => Bt.section === "warmup" || Bt.presetRole === "warmup") && "warm-up",
      Ft.some((Bt) => Bt.section === "cooldown" || Bt.presetRole === "cooldown") && "cooldown",
      Ft.some((Bt) => Bt.kind === "video" && !Bt.section && !Bt.presetRole) && "video"
    ].filter(Boolean), he = Et.length > 1 ? Et.slice(0, -1).join(", ") + " & " + Et[Et.length - 1] : Et[0] || "";
    Ut = [];
    const ve = (Bt, pe) => {
      const Ma = xt(Bt);
      return !Ma || (Ma === "first" ? pe === 1 : pe === j);
    };
    for (let Bt = 1; Bt <= j; Bt++)
      if (ht.filter((pe) => ve(pe, Bt)).forEach((pe, Ma) => Ut.push({ ...pe, id: pe.id + (j > 1 ? "-r" + Bt : ""), round: Bt, roundIndex: Ma })), Bt < j && ne)
        if (l != null && l.customSequence)
          Ut.push({ id: "round-break-" + Bt, name: "Rest", group: "Round " + (Bt + 1) + " next", kind: "rest", hidden: !1, duration: r, rest: 0, round: Bt, roundIndex: ne, roundBreak: !0 });
        else {
          const pe = Ut[Ut.length - 1];
          pe.rest = r, pe.roundBreakAfter = !0;
        }
    _i();
    const zt = Ut.reduce((Bt, pe) => Bt + pe.duration + pe.rest, 0), be = Math.round(qt / 60), Re = Math.round(zt / 60), de = j > 1 ? Wn(be) + " × " + j + " rounds" + (Pt ? " + " + ua(Pt) + " " + he : "") + " (" + Wn(Re) + ")" : Wn(Re), re = [w.length ? "warm-up" : "", R.length ? "cooldown" : ""].filter(Boolean), ga = l != null && l.customSequence ? de + " · " + ne + " items" + (re.length && !(j > 1 && Pt) ? " · " + re.join(" + ") : "") : de + " · " + ua(e) + " / " + ua(r) + (re.length && !(j > 1 && Pt) ? " · " + re.join(" + ") : "");
    bt.textContent = ua(qt);
    const Fa = Ut.filter((Bt) => !Bt.roundBreak).length, Ye = j > 1 ? Fa + " activities · " + j + " rounds" : ne + " activities";
    Se.textContent = j > 1 ? j + " rounds · " + Wn(Re) + " total" : "1 round", i("roundsCount").textContent = j, n.querySelectorAll("[data-rounds-step]").forEach((Bt) => {
      Bt.disabled = Number(Bt.dataset.roundsStep) < 0 ? j <= 1 : j >= 10;
    }), l && (l.summary = ga, l.activityCount = ne);
    const nr = n.querySelector(".workoutPanel.active .sub");
    nr && (nr.textContent = ga), La.textContent = ga, Qo(), n.querySelectorAll(".workoutPanel.active .activityCount").forEach((Bt) => Bt.textContent = Ye), _i(), Ze(), Ri(), u(), Nn(), Kt && G(), lt.workout.classList.contains("active") && !Qe && Ys();
  }
  const _o = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', ia = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', vr = {
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
  }, Na = (e) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (vr[e] || "") + "</svg>";
  n.querySelectorAll("[data-icon]").forEach((e) => {
    e.innerHTML = Na(e.dataset.icon);
  });
  let fa = null, ha = null;
  function br(e) {
    return e = Math.max(1, Number(e) || 0), e >= 3600 && e % 3600 === 0 ? { value: e / 3600, unit: "hour" } : e >= 60 && e % 60 === 0 ? { value: e / 60, unit: "min" } : { value: e, unit: "sec" };
  }
  function Yo(e = !1) {
    const r = n.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    r && (r.focus({ preventScroll: !0 }), e && r.select());
  }
  function wr(e, r, l = {}) {
    const h = e.kind === "rest", w = e.kind === "video", A = w ? e.useVideoLength !== !1 : h ? e.useGlobalTiming === !0 : e.useGlobalTiming !== !1, R = Number(h ? H.value : _.value), j = br(w ? e.useVideoLength === !1 ? e.duration : Bn({ ...e, useVideoLength: !0 }) : A ? R : e.duration || R), ht = w && (Number(e.videoDuration) > 0 || Number(e.end) > 0), xt = w ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + Yt(e.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Yt(e.autoName ? "" : e.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([zt, be]) => '<option value="' + zt + '"' + ((e.videoRounds || "every") === zt ? " selected" : "") + ">" + be + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Yt(e.name) + '" placeholder="' + (h ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + Yt(e.group) + '" placeholder="' + (h ? "Rest" : "e.g. Glutes + legs") + '"></label>', mt = w ? "Play the whole " + (Number(e.start) > 0 || Number(e.end) > 0 ? "clip" : "video") + (ht ? " · " + on(Bn({ ...e, useVideoLength: !0 })) : "") : "Use global timing · " + ua(R), ct = document.createElement("div");
    ct.className = "moveRow editing" + (l.sheet ? " inSheet" : ""), ct.dataset.index = r, ct.dataset.id = e.id;
    const Ft = l.isNew ?? (ha == null ? void 0 : ha.item) === e, ne = l.sheet ? '<div class="moveEditActions sheetActions">' + (Ft ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (e.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + Yt(e.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (Ft ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    ct.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (w ? " videoFields" : "") + '">' + xt + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (A ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + Yt(mt) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + j.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((zt) => '<option value="' + zt + '"' + (zt === j.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[zt] + "</option>").join("") + "</select></div></div>" + ne + "</div>";
    const qt = (zt) => ct.querySelector("[data-f=" + zt + "]"), Pt = () => {
      const zt = qt("global").checked;
      qt("dur").disabled = zt, qt("unit").disabled = zt, ct.querySelector(".creatorDurationRow").classList.toggle("isDisabled", zt);
    };
    qt("global").addEventListener("change", Pt), Pt();
    const Et = () => {
      var zt;
      if (l.sheet) {
        (zt = l.onCancel) == null || zt.call(l);
        return;
      }
      Ft && Ea(), fa = null, _e();
    }, he = () => {
      var Re;
      if (w) {
        ve();
        return;
      }
      const zt = qt("name").value.trim();
      if (!zt) {
        qt("name").focus();
        return;
      }
      e.name = zt, e.group = qt("group").value.trim() || (h ? "Rest" : "Movement");
      const be = qt("global").checked;
      if (e.useGlobalTiming = be, be || (e.duration = Math.max(h ? 5 : 1, rn(qt("dur").value, qt("unit").value))), l.sheet) {
        (Re = l.onSaved) == null || Re.call(l);
        return;
      }
      Ft && (ha = null), fa = null, _e(), P(Ft ? h ? "Rest added" : "Movement added" : "Movement updated");
    }, ve = () => {
      var re;
      const zt = qt("url").value.trim(), be = no(zt);
      if (!be) {
        qt("urlError").hidden = !1, qt("url").classList.add("invalid"), qt("url").focus();
        return;
      }
      const Re = be.id !== e.videoId;
      e.url = zt, e.videoId = be.id, e.start = be.start, e.end = be.end, Re && (e.videoDuration = null, e.videoError = null);
      const de = qt("name").value.trim();
      e.autoName = !de, e.name = de || (Re ? "" : e.name) || e.videoTitle || "YouTube video", e.group = "Video", e.videoRounds = qt("rounds").value, e.useVideoLength = qt("global").checked, e.useVideoLength || (e.duration = Math.max(5, rn(qt("dur").value, qt("unit").value))), l.sheet ? (re = l.onSaved) == null || re.call(l) : (Ft && (ha = null), fa = null, _e(), P(Ft ? "Video added" : "Video updated")), (Re || !e.videoDuration || e.autoName && !e.videoTitle) && ka(e);
    };
    if (w && qt("url").addEventListener("input", () => {
      qt("urlError").hidden = !0, qt("url").classList.remove("invalid");
    }), ct.querySelector("[data-a=cancel]").addEventListener("click", Et), ct.querySelector("[data-a=save]").addEventListener("click", he), l.sheet && !Ft) {
      ct.querySelector("[data-a=hide]").addEventListener("click", () => {
        var be;
        return (be = l.onHide) == null ? void 0 : be.call(l);
      });
      const zt = ct.querySelector("[data-a=remove]");
      Wr(zt, zt.querySelector(".removeFill"), 1200, () => {
        var be;
        return (be = l.onRemove) == null ? void 0 : be.call(l);
      });
    }
    return ct.addEventListener("keydown", (zt) => {
      zt.key === "Escape" && (zt.preventDefault(), zt.stopPropagation(), Et()), zt.key === "Enter" && zt.target.matches("input") && (zt.preventDefault(), he());
    }), ct;
  }
  function oo(e, r) {
    const l = i(r);
    l.innerHTML = "", e.forEach((h, w) => {
      if (h === fa && !Ya()) {
        l.appendChild(wr(h, w));
        return;
      }
      const A = document.createElement("div");
      A.className = "moveRow" + (h.hidden ? " hidden" : "") + (h.kind === "rest" ? " restItem" : "") + (h.kind === "video" ? " videoItem" : "") + (ks(h) ? " noMeta" : ""), A.dataset.index = w, A.dataset.id = h.id;
      const R = h.kind === "rest" ? h.useGlobalTiming === !0 ? "Global timing" : ua(h.duration) : h.useGlobalTiming === !1 ? ua(h.duration) : "Global timing", j = h.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", ht = h.kind === "video" ? h.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (h.useVideoLength === !1 ? "stops after " + ua(h.duration) : Number(h.videoDuration) > 0 || Number(h.end) > 0 ? on(Bn(h)) : "plays to the end") + (h.videoRounds === "first" ? " · first round only" : h.videoRounds === "last" ? " · last round only" : "") : h.group + " · " + R, xt = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + Yt(h.name) + '. Drag, or use the up and down arrow keys">' + _o + "</button>", mt = '<div class="moveText"><div class="moveItemName">' + Yt(h.name) + j + '</div><div class="moveMeta">' + Yt(ht) + "</div></div>", ct = (qt) => qt.addEventListener("keydown", (Pt) => {
        var ve, zt;
        if (Pt.key !== "ArrowUp" && Pt.key !== "ArrowDown") return;
        Pt.preventDefault();
        const Et = e.indexOf(h), he = Et + (Pt.key === "ArrowUp" ? -1 : 1);
        he < 0 || he >= e.length || (e.splice(Et, 1), e.splice(he, 0, h), _e(), (zt = (ve = i(r).children[he]) == null ? void 0 : ve.querySelector(".dragHandle")) == null || zt.focus());
      });
      if (Ya()) {
        A.classList.add("phoneRow"), A.tabIndex = 0, A.setAttribute("role", "button"), A.setAttribute("aria-label", "Edit " + (h.name || "step")), A.innerHTML = xt + mt + '<span class="rowChevron" aria-hidden="true">›</span>';
        const qt = A.querySelector(".dragHandle");
        qt.addEventListener("pointerdown", (Pt) => Ei(Pt, A, l, e)), ct(qt), A.addEventListener("click", (Pt) => {
          Pt.target.closest(".dragHandle") || Gn(h, e);
        }), A.addEventListener("keydown", (Pt) => {
          Pt.key === "Enter" && Pt.target === A && (Pt.preventDefault(), Gn(h, e));
        }), l.appendChild(A);
        return;
      }
      A.innerHTML = xt + mt + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + Yt(h.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (h.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + Yt(h.name) + '"><span class="removeFill"></span><span class="removeLabel">' + ia + "</span></button></div>", A.querySelector(".editBtn").addEventListener("click", () => {
        Ea(), fa = h, _e(), Yo();
      }), A.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        h.hidden = !h.hidden, _e();
      });
      const Ft = A.querySelector(".removeBtn");
      Wr(Ft, Ft.querySelector(".removeFill"), 1200, () => {
        const qt = e.indexOf(h);
        qt < 0 || (e.splice(qt, 1), _e(), P("Removed " + h.name, { label: "Undo", run: () => {
          e.splice(Math.min(qt, e.length), 0, h), _e();
        } }));
      });
      const ne = A.querySelector(".dragHandle");
      ne.addEventListener("pointerdown", (qt) => Ei(qt, A, l, e)), ct(ne), l.appendChild(A);
    });
  }
  const _a = () => {
    var e;
    return (e = window.matchMedia) == null ? void 0 : e.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, Zo = (e) => {
    var r;
    try {
      (r = navigator.vibrate) == null || r.call(navigator, e);
    } catch {
    }
  };
  function Ei(e, r, l, h) {
    if (e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const w = e.currentTarget, A = e.pointerId, R = !_a();
    try {
      w.setPointerCapture(A);
    } catch {
    }
    const j = r.closest(".exerciseScroller") || Do(r), ht = l.style.position;
    l.style.position = "relative";
    const xt = [...l.children].filter((ue) => ue.classList.contains("moveRow")), mt = xt.indexOf(r), ct = parseFloat(getComputedStyle(l).rowGap) || 8, Ft = r.offsetHeight, ne = Ft + ct, qt = xt.map((ue) => ue.offsetTop), Pt = xt.map((ue) => ue.offsetHeight), Et = () => l.getBoundingClientRect().top, he = l.getBoundingClientRect().width, ve = e.clientY - (Et() + qt[mt]), zt = e.clientX;
    let be = e.clientY, Re = e.clientX, de = Et() + qt[mt], re = 0, ga = 0, Fa = 0, Ye = 1, nr = 0, Bt = mt, pe = !1, Ma = 0, Sa = !1, td = !1, Ds = qt[mt];
    l.classList.add("reordering"), r.classList.add("dragging"), r.style.transition = "none", Zo(8);
    const ed = () => {
      const ue = be - ve + Ft / 2 - Et();
      let Me = 0;
      return xt.forEach((ze, mn) => {
        mn !== mt && ue > qt[mn] + Pt[mn] / 2 && Me++;
      }), Me;
    }, ad = () => {
      xt.forEach((ue, Me) => {
        if (Me === mt) return;
        const ze = mt < Bt && Me > mt && Me <= Bt ? -ne : mt > Bt && Me >= Bt && Me < mt ? ne : 0;
        ue.style.transform = ze ? "translateY(" + ze + "px)" : "";
      });
    }, pl = () => {
      const ue = l.getBoundingClientRect(), Me = Math.abs(Re - zt) > Math.max(80, he * 0.3) || Re < ue.left - 24 || Re > ue.right + 24;
      Me !== pe && (pe = Me, r.classList.toggle("willReturn", Me), Zo(Me ? 10 : 4));
      const ze = pe ? mt : ed();
      ze !== Bt && (Bt = ze, ad(), pe || Zo(4));
    }, or = () => {
      if (Bt === mt) return qt[mt];
      const ue = xt.filter((ze, mn) => mn !== mt);
      let Me = qt[0];
      for (let ze = 0; ze < Bt; ze++) Me += ue[ze].offsetHeight + ct;
      return Me;
    }, Bs = () => {
      const ue = R ? Math.min(Math.abs(re) / 40, 1) : 0, Me = R && !Sa ? Math.max(-3, Math.min(3, Fa * 0.6)) : 0;
      r.style.transform = "translate(" + ga.toFixed(2) + "px," + (de - (Et() + qt[mt])).toFixed(2) + "px) rotate(" + Me.toFixed(2) + "deg) scale(" + (Ye * (1 - 0.04 * ue)).toFixed(4) + "," + (Ye * (1 + 0.06 * ue)).toFixed(4) + ")";
    }, le = () => {
      Ma = requestAnimationFrame(le);
      const ue = Re - zt, Me = Sa ? Et() + Ds : be - ve, ze = Sa ? 0 : pe ? ue * 0.9 : Math.max(-22, Math.min(22, ue * 0.22)), mn = Sa ? 1 : pe ? 0.97 : 1.035;
      if (!R) {
        de = Me, ga = Sa ? 0 : ze, Ye = 1, Bs(), Sa && Ke();
        return;
      }
      const Gp = Sa ? 0.24 : 0.2, Up = Sa ? 0.62 : 0.68;
      re = (re + (Me - de) * Gp) * Up, de += re, Fa = (Fa + (ze - ga) * 0.16) * 0.7, ga += Fa, nr = (nr + (mn - Ye) * 0.22) * 0.6, Ye += nr, Bs(), Sa && Math.abs(re) < 0.15 && Math.abs(Me - de) < 0.5 && Math.abs(ga) < 0.5 && Math.abs(Ye - 1) < 3e-3 && Ke();
    }, Oe = setInterval(() => {
      if (!j || Sa) return;
      const ue = j.getBoundingClientRect(), Me = 56, ze = be < ue.top + Me ? -10 : be > ue.bottom - Me ? 10 : 0;
      ze && (j.scrollTop += ze, pl());
    }, 30);
    function Ke() {
      if (td) return;
      td = !0, cancelAnimationFrame(Ma);
      const ue = Bt !== mt, Me = r.dataset.id;
      if (l.classList.remove("reordering"), xt.forEach((mn) => {
        mn.style.transition = "none", mn.style.transform = "";
      }), r.classList.remove("dragging", "willReturn"), l.style.position = ht, ue) {
        const [mn] = h.splice(mt, 1);
        h.splice(Bt, 0, mn);
      }
      _e();
      const ze = Me && l.querySelector('.moveRow[data-id="' + Me + '"]');
      ze && R && ze.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), ue && P("Order saved");
    }
    const Ca = (ue) => {
      if (ue.pointerId === A) {
        if (ue.pointerType === "mouse" && ue.buttons === 0) {
          On();
          return;
        }
        be = ue.clientY, Re = ue.clientX, pl();
      }
    }, hn = (ue) => {
      ue.pointerId === A && On();
    };
    function On() {
      Sa || (window.removeEventListener("pointermove", Ca, !0), window.removeEventListener("pointerup", hn, !0), window.removeEventListener("pointercancel", hn, !0), w.removeEventListener("lostpointercapture", On), clearInterval(Oe), pe && Bt !== mt && (Bt = mt, ad()), Ds = or(), Sa = !0, Zo(6), setTimeout(Ke, 800));
    }
    window.addEventListener("pointermove", Ca, !0), window.addEventListener("pointerup", hn, !0), window.addEventListener("pointercancel", hn, !0), w.addEventListener("lostpointercapture", On), Ma = requestAnimationFrame(le), Bs();
  }
  function Ze() {
    var w, A, R, j;
    const e = ie[te], r = (w = i("warmupList")) == null ? void 0 : w.closest("section"), l = (A = i("cooldownList")) == null ? void 0 : A.closest("section"), h = (j = (R = i("strengthList")) == null ? void 0 : R.closest("section")) == null ? void 0 : j.querySelector(".sectionTitle");
    e != null && e.customSequence ? (r && (r.hidden = !e.includeWarmup), l && (l.hidden = !e.includeCooldown), h && (h.textContent = "Move sequence")) : (r && (r.hidden = !!(e != null && e.warmupOff)), l && (l.hidden = !1), h && (h.textContent = "Kettlebell work")), oo(me, "warmupList"), oo(da, "strengthList"), oo(Ge, "cooldownList");
  }
  function Ea() {
    if (!ha) return;
    const { item: e, arr: r } = ha;
    ha = null;
    const l = r.indexOf(e);
    l >= 0 && r.splice(l, 1), fa === e && (fa = null);
  }
  function xe(e) {
    return e.id === "warmupList" ? { arr: me, kind: "warmup", group: "Warm-up" } : e.id === "cooldownList" ? { arr: Ge, kind: "cooldown", group: "Cooldown" } : { arr: da, kind: "work", group: "" };
  }
  function Eo(e, r) {
    const l = xe(r), h = Date.now().toString(36);
    return e === "video" ? { id: "video-" + h, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : e === "rest" ? { id: "rest-" + h, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(H.value) } : { id: "movement-" + h, name: "", group: l.group, kind: l.kind, hidden: !1, useGlobalTiming: !0, duration: Number(_.value) };
  }
  const qn = "cubic-bezier(.34,1.46,.64,1)";
  function jn(e, r) {
    if (_a() || !e) {
      r();
      return;
    }
    const l = (A) => {
      var R;
      return ((R = A.dataset) == null ? void 0 : R.id) || A;
    }, h = () => [...e.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], w = new Map(h().map((A) => [l(A), A.getBoundingClientRect().top]));
    r(), h().forEach((A) => {
      const R = w.get(l(A));
      if (R === void 0) return;
      const j = R - A.getBoundingClientRect().top;
      Math.abs(j) < 0.5 || A.animate([{ transform: "translateY(" + j + "px)" }, { transform: "none" }], { duration: 440, easing: qn });
    });
  }
  function Ko(e, r) {
    if (!e || _a()) return;
    const l = e.offsetHeight, h = Math.max(0, l - (r || 0));
    e.animate([{ clipPath: "inset(0 0 " + h + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: qn });
  }
  function kn(e, r, l, h) {
    const { arr: w } = xe(r), A = Eo(e, r);
    w.splice(Math.max(0, Math.min(l, w.length)), 0, A), ha = { item: A, arr: w }, fa = A, jn(r.closest(".exerciseScroller,.createStepSlot") || r, () => _e());
    const R = r.querySelector(".moveRow.editing");
    return Ko(R, h), Yo(e === "rest"), R;
  }
  function Do(e) {
    for (let r = e; r && r.nodeType === 1; r = r.parentElement) {
      const l = getComputedStyle(r).overflowY;
      if (/(auto|scroll)/.test(l) && r.scrollHeight > r.clientHeight) return r;
    }
    return null;
  }
  const es = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function Bo(e, r) {
    const l = document.createElement("div");
    return l.className = "addGhost" + (e === "movement" ? "" : " rest"), l.innerHTML = '<span class="addGhostGrip">' + _o + '</span><span class="addGhostText"><strong>' + Yt(r[0]) + "</strong><small>" + Yt(r[1]) + "</small></span>", i("workoutModal").appendChild(l), l;
  }
  function aa(e) {
    e.classList.add("leaving"), setTimeout(() => e.remove(), 180);
  }
  function $o(e, r, l, h) {
    (fa || ha) && (Ea(), fa = null, _e());
    const w = e.getBoundingClientRect(), A = Bo(r, es[r]);
    A.setAttribute("aria-hidden", "true"), A.style.width = w.width + "px", A.style.height = w.height + "px", A.style.transform = "translate(" + w.left + "px," + w.top + "px)", e.classList.add("lifting");
    const R = Do(e);
    return xr({
      ghost: A,
      origin: w,
      sx: l,
      sy: h,
      scroller: R,
      column: e.closest(".exerciseScroller,.createFlow") || R,
      home: () => e.getBoundingClientRect(),
      onDrop: (j, ht, xt) => {
        aa(A), e.classList.remove("lifting"), kn(r, j, ht, xt);
      },
      onReturn: () => {
        aa(A), e.classList.remove("lifting");
      }
    });
  }
  function xr({ ghost: e, origin: r, sx: l, sy: h, scroller: w, column: A, home: R, onDrop: j, onReturn: ht, rowLook: xt = !1 }) {
    var Bs;
    const mt = !_a(), ct = ((Bs = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : Bs.offsetHeight) || 80, Ft = l - r.left, ne = h - r.top, qt = 44;
    let Pt = l, Et = h, he = r.left, ve = r.top, zt = 0, be = 0, Re = !mt, de = null, re = null, ga = -1, Fa = 0, Ye = null;
    const nr = () => ["warmupList", "strengthList", "cooldownList"].map((le) => i(le)).filter((le) => le && le.getClientRects().length && !le.closest("[hidden]")), Bt = (le) => {
      if (le === de) return;
      de = le, e.classList.toggle("overList", !!le || xt);
      const Oe = le ? le.getBoundingClientRect().width : r.width;
      e.style.width = Oe + "px", e.style.height = (le ? ct : r.height) + "px";
    }, pe = (le) => {
      le.classList.add("leaving"), le.style.height = "0px", le.style.marginTop = "-8px", setTimeout(() => le.remove(), mt ? 320 : 0);
    }, Ma = (le, Oe, Ke) => {
      if (re && re.parentNode === le && ga === Ke || (re && (pe(re), re = null, ga = -1), !le)) return;
      const Ca = document.createElement("div");
      Ca.className = "dropSlot", le.insertBefore(Ca, Oe), re = Ca, ga = Ke, Ca.getBoundingClientRect(), Ca.style.height = ct + "px", Ca.style.marginTop = "0px";
    }, Sa = () => {
      let le = null, Oe = 1 / 0;
      for (const On of nr()) {
        const ue = On.getBoundingClientRect();
        if (Pt < ue.left - 48 || Pt > ue.right + 48) continue;
        const Me = ue.top - 28, ze = ue.bottom + 28, mn = Et < Me ? Me - Et : Et > ze ? Et - ze : 0;
        mn < Oe && (Oe = mn, le = On);
      }
      const Ke = A == null ? void 0 : A.getBoundingClientRect(), hn = Ke && Pt >= Ke.left && Pt <= Ke.right && Et >= Ke.top && Et <= Ke.bottom || Oe === 0 ? le : null;
      if (hn) {
        const On = [...hn.children].filter((Me) => Me.classList.contains("moveRow"));
        let ue = On.findIndex((Me) => {
          const ze = Me.getBoundingClientRect();
          return Et < ze.top + ze.height / 2;
        });
        ue < 0 && (ue = On.length), Ma(hn, On[ue] || null, ue);
      } else Ma(null);
      Bt(hn);
    }, td = () => {
      if (Ye) return Ye.aim();
      if (de) {
        const le = de.getBoundingClientRect();
        let Oe = Et - ct / 2;
        return re && (Oe = Oe * 0.6 + re.getBoundingClientRect().top * 0.4), { x: le.left, y: Oe };
      }
      return { x: Pt - Ft, y: Et - ne };
    }, Ds = (le, Oe, Ke, Ca) => {
      e.style.transform = "translate(" + he + "px," + ve + "px) rotate(" + le + "deg) rotate(" + Oe + "rad) scale(" + Ke + "," + Ca + ") rotate(" + -Oe + "rad)";
    }, ed = () => {
      if (Fa = requestAnimationFrame(ed), !Re) {
        const ue = Pt - l, Me = Et - h, ze = Math.min(Math.hypot(ue, Me) / qt, 1);
        he = r.left + ue * 0.35, ve = r.top + Me * 0.35, Ds(0, Math.atan2(Me, ue), 1 + 0.155 * ze, 1 - 0.1 * ze);
        return;
      }
      const le = td();
      if (!mt) {
        he = le.x, ve = le.y, Ds(0, 0, 1, 1), Ye && (cancelAnimationFrame(Fa), Ye.done());
        return;
      }
      const Oe = Ye ? Ye.k : 0.17, Ke = Ye ? Ye.d : 0.7;
      zt = (zt + (le.x - he) * Oe) * Ke, be = (be + (le.y - ve) * Oe) * Ke, he += zt, ve += be;
      const Ca = Math.hypot(zt, be), hn = Math.min(Ca / 48, 1), On = de || Ye ? 0 : Math.max(-5, Math.min(5, zt * 0.32));
      Ds(On, Math.atan2(be, zt), 1 + 0.1 * hn, 1 - 0.063 * hn), Ye && Ca < 0.15 && Math.hypot(le.x - he, le.y - ve) < 0.6 && (cancelAnimationFrame(Fa), Ye.done());
    }, ad = setInterval(() => {
      if (!w || Ye) return;
      const le = w.getBoundingClientRect(), Oe = 64, Ke = Et < le.top + Oe ? -(le.top + Oe - Et) / 4 : Et > le.bottom - Oe ? (Et - (le.bottom - Oe)) / 4 : 0;
      Ke && (w.scrollTop += Math.max(-18, Math.min(18, Ke)), Sa());
    }, 30);
    Fa = requestAnimationFrame(ed);
    let pl = !1;
    const or = (le, Oe) => {
      if (pl) return;
      pl = !0, cancelAnimationFrame(Fa);
      const Ke = re ? re.offsetHeight : ct;
      !le && re && (re.remove(), re = null), le ? j(le, Oe, Ke) : ht();
    };
    return {
      move(le, Oe) {
        Pt = le, Et = Oe, !Re && Math.hypot(Pt - l, Et - h) > qt && (Re = !0, zt = (Pt - l) * 0.085, be = (Et - h) * 0.085), Re && Sa();
      },
      drop(le) {
        clearInterval(ad);
        const Oe = de, Ke = ga;
        if (!le && Oe && re) {
          const Ca = re;
          Ye = { k: 0.24, d: 0.62, aim: () => {
            const hn = Ca.getBoundingClientRect();
            return { x: hn.left, y: hn.top };
          }, done: () => or(Oe, Ke) }, setTimeout(() => or(Oe, Ke), 650), mt || (cancelAnimationFrame(Fa), or(Oe, Ke));
          return;
        }
        Ma(null), Bt(null), Ye = { k: 0.2, d: 0.66, aim: () => {
          const Ca = R();
          return { x: Ca.left, y: Ca.top };
        }, done: () => or(null) }, setTimeout(() => or(null), 650), mt || (cancelAnimationFrame(Fa), or(null));
      }
    };
  }
  function zn(e, r) {
    let l = !1;
    e.addEventListener("click", (h) => {
      if (l) {
        l = !1, h.preventDefault();
        return;
      }
      if (Ya()) {
        kr(r);
        return;
      }
      const w = i("strengthList"), A = kn(r, w, xe(w).arr.length, 0);
      A == null || A.scrollIntoView({ block: "nearest", behavior: _a() ? "auto" : "smooth" });
    }), e.addEventListener("pointerdown", (h) => {
      if (h.button !== void 0 && h.button !== 0) return;
      const w = h.pointerId, A = h.clientX, R = h.clientY;
      let j = null, ht = !1;
      try {
        e.setPointerCapture(w);
      } catch {
      }
      const xt = (Et) => {
        if (Et.pointerId === w) {
          if (Et.pointerType === "mouse" && Et.buttons === 0) {
            Pt(!1);
            return;
          }
          if (!j) {
            if (Math.hypot(Et.clientX - A, Et.clientY - R) < 6) return;
            j = $o(e, r, A, R);
          }
          j.move(Et.clientX, Et.clientY);
        }
      }, mt = (Et) => {
        Et.pointerId === w && Pt(!1);
      }, ct = (Et) => {
        Et.pointerId === w && Pt(!0);
      }, Ft = () => Pt(!1), ne = () => Pt(!0), qt = (Et) => {
        Et.key === "Escape" && j && (Et.preventDefault(), Et.stopPropagation(), Pt(!0));
      };
      function Pt(Et) {
        if (!ht && (ht = !0, window.removeEventListener("pointermove", xt, !0), window.removeEventListener("pointerup", mt, !0), window.removeEventListener("pointercancel", ct, !0), window.removeEventListener("keydown", qt, !0), window.removeEventListener("blur", ne), e.removeEventListener("lostpointercapture", Ft), j)) {
          const he = j;
          j = null, l = !0, setTimeout(() => {
            l = !1;
          }, 0), he.drop(Et);
        }
      }
      window.addEventListener("pointermove", xt, !0), window.addEventListener("pointerup", mt, !0), window.addEventListener("pointercancel", ct, !0), window.addEventListener("keydown", qt, !0), window.addEventListener("blur", ne), e.addEventListener("lostpointercapture", Ft);
    });
  }
  const Mn = (q = window.matchMedia) == null ? void 0 : q.call(window, "(max-width: 620px)");
  function Ya() {
    var e;
    return !!((e = window.matchMedia) != null && e.call(window, "(max-width: 620px)").matches);
  }
  const yr = (e) => e.charAt(0).toUpperCase() + e.slice(1), Vn = (e) => e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "movement";
  let Xo = null, Ce = null;
  function Ro(e, r, l, h) {
    ba(), i("sheetTitle").textContent = e;
    const w = i("sheetBody");
    w.innerHTML = "", w.appendChild(r), Xo = l || null, i("sheet").setAttribute("aria-hidden", "false"), i("sheetScrim").classList.add("open"), i("sheet").classList.add("open"), setTimeout(() => {
      if (!i("sheet").classList.contains("open") || !w.contains(r)) return;
      const A = h ? w.querySelector("input[data-f=url],input[data-f=name]") : w.querySelector("button,input,select");
      A == null || A.focus({ preventScroll: !0 });
    }, _a() ? 0 : 360);
  }
  function ba() {
    const e = i("sheet");
    if (!e.classList.contains("open")) return;
    e.classList.remove("open"), i("sheetScrim").classList.remove("open"), e.setAttribute("aria-hidden", "true"), e.contains(n.activeElement) && n.activeElement.blur();
    const r = Xo;
    Xo = null, r == null || r(), setTimeout(ro, 0);
  }
  i("sheetScrim").addEventListener("click", ba), i("sheet").addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), ba());
  });
  function Gn(e, r) {
    const l = wr(e, r.indexOf(e), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        ba(), _e(), P(yr(Vn(e)) + " updated");
      },
      onCancel: ba,
      onHide() {
        e.hidden = !e.hidden, ba(), _e(), P((e.hidden ? "Hidden: " : "Showing: ") + e.name);
      },
      onRemove() {
        ba();
        const h = r.indexOf(e);
        h < 0 || (r.splice(h, 1), _e(), P("Removed " + e.name, { label: "Undo", run: () => {
          r.splice(Math.min(h, r.length), 0, e), _e();
        } }));
      }
    });
    Ro("Edit " + Vn(e), l, null, !1);
  }
  function as() {
    const e = document.createElement("div");
    e.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([r, l, h, w]) => {
      const A = document.createElement("button");
      A.type = "button", A.className = "sheetChoice", A.innerHTML = '<span class="timeIcon" aria-hidden="true">' + Na(l) + "</span><span><strong>" + h + "</strong><small>" + w + "</small></span>", A.addEventListener("click", () => kr(r)), e.appendChild(A);
    }), Ro("Add to the move", e, null, !1);
  }
  function kr(e) {
    Ce && Za();
    const r = Eo(e, i("strengthList")), l = wr(r, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        ba(), io(r, e);
      },
      onCancel: ba
    });
    Ro("New " + Vn(r), l, null, !0);
  }
  const Jo = i("workoutModal").querySelector(".modalStatic"), Di = { parent: Jo.parentNode, next: Jo.nextSibling };
  function ns() {
    const e = document.createElement("div");
    e.className = "sheetSetup", e.appendChild(Jo);
    const r = document.createElement("button");
    r.type = "button", r.className = "primary sheetDone", r.textContent = "Done", r.addEventListener("click", ba), e.appendChild(r), Ro("Setup", e, () => {
      Di.parent.insertBefore(Jo, Di.next), Qo();
    }, !1);
  }
  function Qo() {
    var r, l;
    const e = i("setupSummaryName");
    e && (e.textContent = (((r = i("workoutNameInput")) == null ? void 0 : r.value) || "").trim() || ((l = ie[te]) == null ? void 0 : l.name) || "Move", i("setupSummaryMeta").textContent = La.textContent);
  }
  i("setupSummary").addEventListener("click", ns), i("addFab").addEventListener("click", as);
  function wa() {
    const e = i("strengthList");
    return Do(e) || e.closest(".exerciseScroller");
  }
  function ln() {
    const e = i("strengthList").getBoundingClientRect(), r = (wa() || i("strengthList")).getBoundingClientRect(), l = (Ce == null ? void 0 : Ce.ghost.offsetHeight) || 64;
    return { left: e.left, top: Math.max(r.top + 12, Math.min(r.bottom - l - 96, r.top + r.height * 0.55 - l / 2)), width: e.width, height: l };
  }
  function io(e, r) {
    var j;
    const l = Bo(r, [e.name || es[r][0], "Drag into place"]);
    l.classList.add("overList", "hovering"), l.setAttribute("aria-label", (e.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const h = document.createElement("span");
    h.className = "addGhostActions", h.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + Yt(e.name) + '">✕</button>', l.appendChild(h), Ce = { item: e, type: r, ghost: l };
    const w = ((j = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : j.offsetHeight) || 64;
    l.style.width = i("strengthList").getBoundingClientRect().width + "px", l.style.height = w + "px";
    const A = ln(), R = Wa.querySelector(".modal").getBoundingClientRect().bottom;
    l.style.transform = "translate(" + A.left + "px," + R + "px)", l.getBoundingClientRect(), _a() || (l.classList.add("rising"), setTimeout(() => l.classList.remove("rising"), 650)), l.style.transform = "translate(" + A.left + "px," + A.top + "px)", h.querySelector("[data-a=end]").addEventListener("click", Za), h.querySelector("[data-a=discard]").addEventListener("click", Da), l.addEventListener("pointerdown", os);
  }
  function os(e) {
    if (!Ce || e.target.closest("button") || e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const { item: r, ghost: l } = Ce, h = e.pointerId;
    try {
      l.setPointerCapture(h);
    } catch {
    }
    l.classList.remove("hovering", "rising"), l.classList.add("held");
    const w = l.getBoundingClientRect(), A = wa(), R = xr({
      ghost: l,
      origin: { left: w.left, top: w.top, width: w.width, height: w.height },
      sx: e.clientX,
      sy: e.clientY,
      scroller: A,
      column: i("strengthList").closest(".exerciseScroller,.createFlow") || A,
      rowLook: !0,
      home: ln,
      onDrop: (Pt, Et, he) => {
        Ce = null, aa(l), Oa(r, Pt, Et, he);
      },
      onReturn: () => {
        l.classList.remove("held"), l.classList.add("hovering");
      }
    });
    let j = !1;
    const ht = (Pt) => {
      if (Pt.pointerId === h) {
        if (Pt.pointerType === "mouse" && Pt.buttons === 0) {
          qt(!1);
          return;
        }
        R.move(Pt.clientX, Pt.clientY);
      }
    }, xt = (Pt) => {
      Pt.pointerId === h && qt(!1);
    }, mt = (Pt) => {
      Pt.pointerId === h && qt(!0);
    }, ct = () => qt(!1), Ft = () => qt(!0), ne = (Pt) => {
      Pt.key === "Escape" && (Pt.preventDefault(), qt(!0));
    };
    function qt(Pt) {
      j || (j = !0, window.removeEventListener("pointermove", ht, !0), window.removeEventListener("pointerup", xt, !0), window.removeEventListener("pointercancel", mt, !0), window.removeEventListener("keydown", ne, !0), window.removeEventListener("blur", Ft), l.removeEventListener("lostpointercapture", ct), R.drop(Pt));
    }
    window.addEventListener("pointermove", ht, !0), window.addEventListener("pointerup", xt, !0), window.addEventListener("pointercancel", mt, !0), window.addEventListener("keydown", ne, !0), window.addEventListener("blur", Ft), l.addEventListener("lostpointercapture", ct);
  }
  function Oa(e, r, l, h) {
    const w = xe(r);
    e.kind !== "rest" && e.kind !== "video" && (e.kind = w.kind, w.group && (!e.group || e.group === "Movement") && (e.group = w.group)), w.arr.splice(Math.max(0, Math.min(l, w.arr.length)), 0, e), jn(r.closest(".exerciseScroller,.createStepSlot") || r, () => _e()), Ko(r.querySelector('.moveRow[data-id="' + e.id + '"]'), h), P(yr(Vn(e)) + " added");
  }
  function Za() {
    var h;
    if (!Ce) return;
    const { item: e, ghost: r } = Ce;
    Ce = null, aa(r);
    const l = i("strengthList");
    Oa(e, l, xe(l).arr.length, 0), (h = l.querySelector('.moveRow[data-id="' + e.id + '"]')) == null || h.scrollIntoView({ block: "nearest", behavior: _a() ? "auto" : "smooth" });
  }
  function Da() {
    if (!Ce) return;
    const e = Ce.ghost;
    Ce = null, aa(e), P("Discarded");
  }
  function ti() {
    Ce && (Ce.ghost.remove(), Ce = null);
  }
  window.addEventListener("resize", () => {
    if (Ce != null && Ce.ghost.classList.contains("hovering")) {
      const e = ln();
      Ce.ghost.style.width = e.width + "px", Ce.ghost.style.transform = "translate(" + e.left + "px," + e.top + "px)";
    }
  }), (Wt = Mn == null ? void 0 : Mn.addEventListener) == null || Wt.call(Mn, "change", () => {
    ba(), Ce && !Ya() && Za(), Ze();
  });
  {
    const e = i("workoutModal").querySelector(".modal");
    e.addEventListener("scroll", () => {
      (e.scrollTop || e.scrollLeft) && (e.scrollTop = 0, e.scrollLeft = 0);
    });
  }
  function ro() {
    const e = i("workoutModal"), r = window.visualViewport;
    if (!e.classList.contains("open") || !Ya()) {
      Bi();
      return;
    }
    const l = r ? r.offsetTop : 0, h = r ? r.offsetLeft : 0, w = r ? r.width : window.innerWidth, A = r ? r.height : window.innerHeight;
    Object.assign(e.style, { right: "auto", bottom: "auto", width: w + "px", height: A + "px", top: l + "px", left: h + "px" });
    const R = e.getBoundingClientRect();
    Math.abs(R.top - l) > 0.5 && (e.style.top = 2 * l - R.top + "px"), Math.abs(R.left - h) > 0.5 && (e.style.left = 2 * h - R.left + "px");
  }
  function Bi() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((e) => i("workoutModal").style.removeProperty(e));
  }
  (Pe = window.visualViewport) == null || Pe.addEventListener("resize", ro), (fe = window.visualViewport) == null || fe.addEventListener("scroll", ro), window.addEventListener("resize", ro), window.addEventListener("scroll", ro, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(ro, 250));
  function Ri() {
    da.length > 0;
    const e = i("addMovementBtn"), r = i("addRestBtn");
    e && (e.innerHTML = _o + "<span>Add movement</span>"), r && (r.innerHTML = _o + "<span>Add rest</span>");
    const l = i("addVideoBtn");
    l && (l.innerHTML = _o + "<span>Add video</span>");
  }
  function u() {
    const e = i("useGlobalTiming").checked, r = i("addMovementDuration"), l = i("addMovementUnit");
    r.disabled = e, l.disabled = e, r.parentElement.style.opacity = e ? ".38" : "1", i("globalTimingValue").textContent = "Use global timing · " + ua(_.value);
    const h = i("useGlobalRestTiming").checked, w = i("addRestDuration"), A = i("addRestUnit");
    w.disabled = h, A.disabled = h, w.parentElement.style.opacity = h ? ".38" : "1", i("globalRestTimingValue").textContent = "Use global timing · " + ua(H.value);
  }
  let m = "movement";
  function x(e) {
    m = e;
    const r = i("movementFields"), l = i("restFields");
    r.hidden = e !== "movement", l.hidden = e !== "rest", i("movementCreatorHeading").textContent = "Add movement", i("movementCreator").setAttribute("aria-label", "Create movement"), u();
  }
  function T() {
    ie[te];
    const e = Kt ? !0 : i("useGlobalTiming").checked, r = e ? Number(_.value) : rn(
      i("addMovementDuration").value,
      i("addMovementUnit").value
    ), l = Kt ? !0 : i("useGlobalRestTiming").checked, h = l ? Number(H.value) : rn(
      i("addRestDuration").value,
      i("addRestUnit").value
    );
    if (m === "rest") {
      const w = i("addRestTitle").value.trim() || "Rest", A = i("addRestGroup").value.trim() || "Rest";
      da.push({
        id: "rest-" + Date.now(),
        name: w,
        group: A,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: l,
        duration: Math.max(5, h || Number(H.value))
      }), _e(), i("movementCreator").hidden = !0, i("addRestTitle").value = "Rest", i("addRestGroup").value = "Rest", P("Rest added"), Kt && (L("movements"), G());
    } else {
      const w = i("addMovementInput").value.trim();
      if (!w) return;
      const A = i("addMovementGroup").value.trim() || "Movement";
      da.push({
        id: "movement-" + Date.now(),
        name: w,
        group: A,
        kind: "work",
        hidden: !1,
        useGlobalTiming: e,
        duration: Math.max(5, r || Number(_.value))
      }), i("addMovementInput").value = "", i("addMovementGroup").value = "", _e(), i("movementCreator").hidden = !0, P("Movement added"), Kt && (L("movements"), G());
    }
    Ri();
  }
  let O = null;
  function P(e, r) {
    const l = i("toast");
    l.innerHTML = "";
    const h = document.createElement("span");
    if (h.textContent = e, l.appendChild(h), r) {
      const w = document.createElement("button");
      w.type = "button", w.className = "toastAction", w.textContent = r.label, w.addEventListener("click", () => {
        r.run(), l.classList.remove("show", "withAction"), clearTimeout(O);
      }), l.appendChild(w);
    }
    l.classList.toggle("withAction", !!r), l.classList.add("show"), clearTimeout(O), O = setTimeout(() => l.classList.remove("show", "withAction"), r ? 5e3 : 2200);
  }
  const Z = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], rt = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function K(e) {
    return Math.max(0, Math.min(5, Math.floor(Number(e) / 100 * 6)));
  }
  function Ct(e, r) {
    return Z[K(r)];
  }
  function At(e) {
    return rt[K(e)];
  }
  function St(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  function Zt() {
    return { morning: ge().morningTime || "08:00", evening: ge().eveningTime || "19:00" };
  }
  function Gt(e) {
    const [r, l] = String(e).split(":").map(Number);
    return (r || 0) * 60 + (l || 0);
  }
  function Nt(e) {
    const r = Zt();
    return e.getHours() * 60 + e.getMinutes() >= Gt(r.evening) ? "evening" : "morning";
  }
  function ae(e, r) {
    return we.checkins.find((l) => l.date === e && l.slot === r);
  }
  function jt(e) {
    return !!(e && e.mood != null && e.energy != null);
  }
  function _t() {
    const e = /* @__PURE__ */ new Date(), r = St(e), l = Nt(e), h = Zt(), w = e.getHours() * 60 + e.getMinutes();
    return l === "morning" && w < Gt(h.morning) || jt(ae(r, l)) ? null : l;
  }
  const Xt = i("checkinModal"), $t = i("checkinTab"), Te = i("checkinBadge"), Rt = { mood: { input: i("moodInput"), fill: i("moodFill") }, energy: { input: i("energyLevelInput"), fill: i("energyLevelFill") } };
  function He(e) {
    const { input: r, fill: l } = Rt[e];
    l.style.width = r.value + "%", r.setAttribute("aria-valuetext", Ct(e, r.value));
  }
  Object.keys(Rt).forEach((e) => Rt[e].input.addEventListener("input", () => He(e)));
  let Be = null;
  function dn() {
    const e = Zt(), r = /* @__PURE__ */ new Date(), l = r.getHours() * 60 + r.getMinutes();
    return l < Gt(e.morning) ? "Next check-in at " + e.morning : l < Gt(e.evening) ? "Next check-in at " + e.evening : "Next check-in tomorrow at " + e.morning;
  }
  function so() {
    const e = Zt(), r = /* @__PURE__ */ new Date(), l = r.getHours() * 60 + r.getMinutes(), h = (w, A) => {
      const [R, j] = w.split(":").map(Number);
      return new Date(r.getFullYear(), r.getMonth(), r.getDate() + (A ? 1 : 0), R, j);
    };
    return l < Gt(e.morning) ? { date: h(e.morning), time: e.morning } : l < Gt(e.evening) ? { date: h(e.evening), time: e.evening } : { date: h(e.morning, !0), time: e.morning };
  }
  let Un = null, xa = null;
  function Mr() {
    if (_t()) {
      cn(), pn();
      return;
    }
    const e = so(), r = Math.max(0, Math.round((e.date - Date.now()) / 1e3)), l = Math.floor(r / 3600), h = Math.floor(r % 3600 / 60), w = r % 60;
    i("peekCountdown").textContent = l + ":" + String(h).padStart(2, "0") + ":" + String(w).padStart(2, "0"), i("peekAt").textContent = "Available at " + e.time;
  }
  function ye() {
    Mr(), $t.classList.add("peek"), clearInterval(xa), xa = setInterval(Mr, 1e3), clearTimeout(Un), Un = setTimeout(cn, 6e3);
  }
  function cn() {
    $t.classList.remove("peek"), clearInterval(xa), clearTimeout(Un);
  }
  function Sn() {
    const e = _t();
    if (!e) {
      $t.classList.contains("peek") ? cn() : ye();
      return;
    }
    Be = { date: St(/* @__PURE__ */ new Date()), slot: e };
    const l = ae(Be.date, e), h = we.checkins.find((w) => jt(w));
    Object.keys(Rt).forEach((w) => {
      Rt[w].input.value = (l == null ? void 0 : l[w]) ?? (h == null ? void 0 : h[w]) ?? 50, He(w);
    }), i("checkinTitle").textContent = e === "morning" ? "Morning check-in" : "Evening check-in", Xt.classList.add("open"), Xt.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => Rt.mood.input.focus());
  }
  function Yn() {
    Xt.classList.remove("open"), Xt.setAttribute("aria-hidden", "true"), Be && (Zn = Be.date + "-" + Be.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", Zn);
    } catch {
    }
    Be = null, pn();
  }
  function Sr() {
    if (!Be) return;
    if (jt(ae(Be.date, Be.slot))) {
      Yn();
      return;
    }
    const { date: e, slot: r } = Be;
    let l = ae(e, r);
    l || (l = { date: e, slot: r }, we.checkins.unshift(l), we.checkins = we.checkins.slice(0, 2e3)), l.mood = Number(Rt.mood.input.value), l.energy = Number(Rt.energy.input.value), l.scale = 100, l.at = (/* @__PURE__ */ new Date()).toISOString(), nn(), d.fire("checkin", { slot: r, mood: l.mood, energy: l.energy, mood_label: Ct("mood", l.mood), energy_label: Ct("energy", l.energy) }), P((r === "morning" ? "Morning" : "Evening") + " check-in saved"), Yn(), is(), Cr(), Jt(), Fn();
  }
  let Zn = "";
  try {
    Zn = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function pn() {
    const e = _t();
    Te.hidden = !e, $t.hidden = !e, e || cn(), $t.classList.toggle("due", !!e), $t.setAttribute("aria-label", e ? (e === "morning" ? "Morning" : "Evening") + " check-in is due" : dn()), $t.title = e ? "Check in now" : dn();
  }
  function Pa() {
    pn();
    const e = _t();
    !e || Xt.classList.contains("open") || ge().checkinAutoOpen !== !1 && (i("app").classList.contains("house") || !lt.home.classList.contains("active") || Wa.classList.contains("open") || Zn !== St(/* @__PURE__ */ new Date()) + "-" + e && Sn());
  }
  $t.addEventListener("click", Sn), i("checkinLater").addEventListener("click", Yn), i("checkinSave").addEventListener("click", Sr), Xt.addEventListener("click", (e) => {
    e.target === Xt && Yn();
  }), Xt.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), Yn());
  }), setInterval(Pa, 3e4);
  function is() {
    const e = St(/* @__PURE__ */ new Date()), r = (l) => we.checkins.find((h) => h.date === e && h[l] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([l, h]) => {
      const w = r(l);
      i(h).textContent = w ? Ct(l, w[l]) : "—";
    });
  }
  function Cr() {
    const e = i("feelCard");
    if (!e) return;
    const r = /* @__PURE__ */ new Date(), l = new Date(r.getFullYear(), r.getMonth(), r.getDate() - (r.getDay() + 6) % 7), h = [...Array(7)].map((xt, mt) => {
      const ct = new Date(l.getFullYear(), l.getMonth(), l.getDate() + mt), Ft = St(ct), ne = we.checkins.filter((Pt) => Pt.date === Ft), qt = (Pt) => {
        const Et = ne.map((he) => he[Pt]).filter((he) => he != null);
        return Et.length ? Et.reduce((he, ve) => he + ve, 0) / Et.length : null;
      };
      return { d: ct, key: Ft, mood: qt("mood"), energy: qt("energy"), count: ne.filter(jt).length, future: ct > r && Ft !== St(r) };
    }), w = (xt) => {
      const mt = h.map((ct) => ct[xt]).filter((ct) => ct != null);
      return mt.length ? mt.reduce((ct, Ft) => ct + Ft, 0) / mt.length : null;
    }, A = w("mood"), R = w("energy"), j = (xt, mt) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + xt + "</span><span>" + (mt == null ? "—" : Yt(Ct("", mt))) + '</span></div><div class="feelTrack"><span style="width:' + (mt == null ? 0 : Math.max(4, mt)) + "%;background:" + (mt == null ? "transparent" : At(mt)) + '"></span></div></div>', ht = h.filter((xt) => xt.mood != null && xt.energy != null).sort((xt, mt) => mt.mood + mt.energy - (xt.mood + xt.energy))[0];
    e.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (A == null ? "No check-ins yet" : Yt(Ct("", (A + R) / 2))) + '</div><div class="weekCopy">' + (A == null ? "Your first check-in will appear here." : "on average this week" + (ht ? " · best day " + Yt(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(ht.d)) : "")) + '</div></div></div><div class="feelDays">' + h.map(
      (xt) => '<div class="weekChip feelDay' + (xt.future ? " future" : "") + (xt.key === St(r) ? " today" : "") + '"><div class="weekChipTop"><strong>' + Yt(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(xt.d)) + "</strong>" + (xt.count >= 2 ? '<span class="weekTick">' + Na("check") + "</span>" : '<span class="feelDots">' + "●".repeat(xt.count) + "</span>") + "</div>" + j("Mood", xt.mood) + j("Energy", xt.energy) + "</div>"
    ).join("") + "</div>";
  }
  const Ni = i("upcomingCountSetting");
  Ni.addEventListener("change", () => {
    To = Ni.value === "all" ? "all" : Number(Ni.value), ri();
  });
  const Tr = i("tempoRevealBtn"), rs = i("tempoExperiment"), Pn = i("tempoQuad"), ei = i("tempoDot"), yd = i("tempoEstimate"), wl = i("tempoReadout");
  let Pi = { x: 0.5, y: 0.5 }, lo = !1, Ii = { total: 20, work: 45, rest: 15 };
  function Lr(e, r, l, h) {
    const w = Math.max(r, Math.min(l, e));
    return Math.round((w - r) / h) * h + r;
  }
  function xl(e, r) {
    const l = (e - 0.5) * 2, h = (r - 0.5) * 2, w = Lr(
      Ii.total + l * 5 + h * 8,
      Number(D.min),
      Number(D.max),
      Number(D.step)
    ), A = Lr(
      Ii.work + l * 10 + h * 8,
      Number(_.min),
      Number(_.max),
      Number(_.step)
    ), R = Lr(
      Ii.rest + l * 6 + h * 6,
      Number(H.min),
      Number(H.max),
      Number(H.step)
    );
    return D.value = w, _.value = A, H.value = R, vt.textContent = A + " sec", V.textContent = R + " sec", _i(), { total: w, work: A, rest: R };
  }
  function Ar(e, r) {
    const l = e < 0.34 ? "Low" : e > 0.66 ? "Hard" : "Medium", h = r < 0.34 ? "Fast" : r > 0.66 ? "Slow" : "Balanced", w = xl(e, r);
    wl.textContent = l + " + " + h, yd.textContent = w.total + " min", Pn.setAttribute("aria-valuetext", l + " and " + h + ", estimated " + w.total + " minutes");
  }
  function Fs(e) {
    const r = Pn.getBoundingClientRect(), l = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)), h = Math.max(0, Math.min(1, (e.clientY - r.top) / r.height));
    Pi = { x: l, y: h }, ei.style.left = l * 100 + "%", ei.style.top = h * 100 + "%", Ar(l, h);
  }
  Tr.addEventListener("click", () => {
    const e = rs.hidden;
    rs.hidden = !e, Tr.setAttribute("aria-expanded", e ? "true" : "false"), Tr.textContent = e ? "Now close this" : "Don’t try this!", e && (Ii = {
      total: Number(D.value),
      work: Number(_.value),
      rest: Number(H.value)
    }, Pi = { x: 0.5, y: 0.5 }, ei.style.left = "50%", ei.style.top = "50%", Ar(Pi.x, Pi.y));
  }), n.querySelectorAll("[data-feedback-rating]").forEach((e) => e.addEventListener("click", () => {
    Number(e.dataset.feedbackRating), n.querySelectorAll("[data-feedback-rating]").forEach((r) => r.classList.toggle("selected", r === e));
  }));
  const ss = i("testingFeedbackForm"), yl = i("testingFeedbackThanks"), kd = i("testingFeedbackAgain");
  ss.addEventListener("submit", (e) => {
    e.preventDefault(), ss.hidden = !0, yl.hidden = !1, P("Feedback captured for prototype");
  }), kd.addEventListener("click", (e) => {
    e.preventDefault(), ss.reset(), n.querySelectorAll("[data-feedback-rating]").forEach((r) => r.classList.remove("selected")), yl.hidden = !0, ss.hidden = !1;
  }), Pn.addEventListener("pointerdown", (e) => {
    var r;
    lo = !0, Fs(e);
    try {
      (r = Pn.setPointerCapture) == null || r.call(Pn, e.pointerId);
    } catch {
    }
  }), Pn.addEventListener("pointermove", (e) => {
    lo && Fs(e);
  }), Pn.addEventListener("pointerup", (e) => {
    lo && (lo = !1, Fs(e), _e());
  }), Pn.addEventListener("pointercancel", () => lo = !1), Pn.addEventListener("keydown", (e) => {
    let { x: r, y: l } = Pi, h = !0;
    e.key === "ArrowLeft" ? r -= 0.05 : e.key === "ArrowRight" ? r += 0.05 : e.key === "ArrowUp" ? l -= 0.05 : e.key === "ArrowDown" ? l += 0.05 : h = !1, h && (e.preventDefault(), r = Math.max(0, Math.min(1, r)), l = Math.max(0, Math.min(1, l)), Pi = { x: r, y: l }, ei.style.left = r * 100 + "%", ei.style.top = l * 100 + "%", Ar(r, l), _e());
  });
  const Wa = i("workoutModal");
  let co = null;
  function ai(e) {
    return e.map((r) => ({ ...r }));
  }
  function Md() {
    const e = ie[te];
    return {
      key: te,
      profile: e ? JSON.parse(JSON.stringify(e)) : null,
      warmup: ai(me),
      strength: ai(da),
      cooldown: ai(Ge),
      total: Number(D.value),
      work: Number(_.value),
      rest: Number(H.value),
      rounds: Number(ce.value) || 1
    };
  }
  function kl(e = !1) {
    Kt = !!e, fa = null, ha = null, ba(), ti(), co = Md(), i("moveEditorTitle").textContent = Kt ? "Create new move" : "Edit move", i("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", i("moveEditorSubtitle").hidden = !Kt, i("warmupRow").hidden = Kt, i("deleteMoveOpen").hidden = Kt;
    const r = i("createMoveOptions");
    r.hidden = !Kt;
    {
      const l = ie[te];
      i("includeWarmupPreset").checked = !!(l != null && l.includeWarmup), i("includeCooldownPreset").checked = !!(l != null && l.includeCooldown);
    }
    if (Os(), Kt) {
      i("useGlobalTiming").checked = !0, i("useGlobalRestTiming").checked = !0;
      const l = ie[te];
      Rn((l == null ? void 0 : l.preset) || "movement", !1);
    }
    i("movementCreator").hidden = !0, x("movement"), Ri(), u(), rs.hidden = !0, Tr.setAttribute("aria-expanded", "false"), Tr.textContent = "Don’t try this!", Wa.classList.toggle("createMode", Kt), Wa.querySelector(".modal").classList.toggle("createMode", Kt), Wa.classList.add("open"), Wa.setAttribute("aria-hidden", "false"), ro(), Kt && Lt();
  }
  function Hi() {
    const e = ie[te];
    return e != null && e.customSequence ? !!e.includeWarmup : !(e != null && e.warmupOff);
  }
  function Os() {
    const e = Hi(), r = i("warmupSwitch");
    r.classList.toggle("on", e), r.setAttribute("aria-checked", String(e));
  }
  i("warmupSwitch").addEventListener("click", () => {
    const e = ie[te];
    e && (e.customSequence ? (i("includeWarmupPreset").checked = !e.includeWarmup, gr()) : (e.warmupOff = !e.warmupOff, _e()), Os());
  });
  function _r() {
    ba(), ti(), Bi(), ha = null, fa = null, Wa.classList.contains("createMode") && X(), Wa.classList.remove("createMode"), Wa.querySelector(".modal").classList.remove("createMode"), Wa.classList.remove("open"), Wa.setAttribute("aria-hidden", "true");
  }
  function Ws() {
    if (!co) return;
    const e = co;
    e.profile && (ie[e.key] = JSON.parse(JSON.stringify(e.profile))), te = e.key, me = ai(e.warmup), da = ai(e.strength), Ge = ai(e.cooldown), D.value = e.total, _.value = e.work, H.value = e.rest, ce.value = e.rounds || 1;
    const r = ie[te];
    if (r) {
      n.querySelectorAll(".workoutPanel[data-workout]").forEach((h) => h.classList.toggle("active", h.dataset.workout === te));
      const l = n.querySelector(".workoutPanel.active");
      if (l) {
        const h = l.querySelector(".workoutName");
        h && (h.textContent = r.name);
        const w = l.querySelector(".panelCollapsedText");
        w && (w.textContent = r.name);
        const A = l.querySelector(".sourceTag");
        A && (A.textContent = r.source);
      }
      b.value = r.name;
    }
    _e();
  }
  i("cancelWorkoutEdit").addEventListener("click", () => {
    if (Kt) {
      const e = te;
      delete ie[e], Kt = !1, It = null, ca(we.order.find((r) => ie[r]) || Object.keys(ie)[0]);
    } else
      Ws();
    _r();
  }), i("saveWorkoutEdit").addEventListener("click", () => {
    ba(), Ce && Za();
    const e = ie[te], r = b.value.trim() || "New move";
    if (e && (e.name = r), Ea(), fa = null, _e(), Kt && e)
      Aa(te, e), n.querySelectorAll(".workoutPanel[data-workout]").forEach((l) => l.classList.toggle("active", l.dataset.workout === te)), Kt = !1, It = null, we.order.includes(te) || we.order.push(te), P("Move created");
    else {
      const l = n.querySelector(".workoutPanel.active");
      if (l) {
        const h = l.querySelector(".workoutName");
        h && (h.textContent = r);
        const w = l.querySelector(".panelCollapsedText");
        w && (w.textContent = r);
      }
      P("Move saved");
    }
    co = null, _r(), nn();
  }), Wa.addEventListener("click", (e) => {
    if (e.target === Wa) {
      if (Kt) {
        const r = te;
        delete ie[r], Kt = !1, It = null, ca(we.order.find((l) => ie[l]) || Object.keys(ie)[0]);
      } else
        Ws();
      _r();
    }
  }), zn(i("addMovementBtn"), "movement"), zn(i("addRestBtn"), "rest"), zn(i("addVideoBtn"), "video"), i("closeMovementCreator").addEventListener("click", () => {
    i("movementCreator").hidden = !0;
  }), i("useGlobalTiming").addEventListener("change", u), i("useGlobalRestTiming").addEventListener("change", u), n.querySelectorAll(".createPresetBtn").forEach((e) => e.addEventListener("click", () => {
    Rn(e.dataset.movePreset, !0), _e();
  })), i("includeWarmupPreset").addEventListener("change", gr), i("includeCooldownPreset").addEventListener("change", gr), i("includeWarmupPreset").addEventListener("change", G), i("includeCooldownPreset").addEventListener("change", G), b.addEventListener("input", G), b.addEventListener("input", Qo), i("confirmAddMovement").addEventListener("click", T), i("confirmAddRest").addEventListener("click", T), i("addMovementInput").addEventListener("keydown", (e) => {
    e.key === "Enter" && T();
  });
  const Fi = i("countdown"), ls = i("countNum"), po = i("countdownPixelCanvas");
  let Er = null, qs = "appear";
  class Sd {
    constructor(r, l, h, w, A, R, j) {
      this.width = r.width, this.height = r.height, this.ctx = l, this.x = h, this.y = w, this.color = A, this.speed = (Math.random() * 0.8 + 0.1) * R, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = j, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
    }
    draw() {
      const r = this.maxSizeInteger * 0.5 - this.size * 0.5;
      this.ctx.fillStyle = this.color, this.ctx.fillRect(this.x + r, this.y + r, this.size, this.size);
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
  let Oi = [], js = 1, ds = 1;
  function No() {
    const e = parseFloat(getComputedStyle(i("app")).zoom);
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  function Ml() {
    var xt;
    if (!po) return;
    const e = No(), r = Math.max(1, window.innerWidth / e), l = Math.max(1, window.innerHeight / e);
    js = r, ds = l;
    const h = Math.min(window.devicePixelRatio || 1, 2);
    po.width = Math.floor(r * h), po.height = Math.floor(l * h), po.style.width = r + "px", po.style.height = l + "px";
    const w = po.getContext("2d");
    w.setTransform(h, 0, 0, h, 0, 0);
    const A = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], R = 12, j = (xt = window.matchMedia) == null ? void 0 : xt.call(window, "(prefers-reduced-motion: reduce)").matches, ht = j ? 0 : 0.055;
    Oi = [];
    for (let mt = 0; mt < r; mt += R)
      for (let ct = 0; ct < l; ct += R) {
        const Ft = mt - r / 2, ne = ct - l / 2, qt = Math.sqrt(Ft * Ft + ne * ne), Pt = j ? 0 : Math.random() * 75 + qt * 0.05, Et = new Sd({ width: r, height: l }, w, mt, ct, A[Math.floor(Math.random() * A.length)], ht, Pt);
        Et.maxSizeInteger = 4, Et.maxSize = Math.random() * 3.2 + 0.8, Et.sizeStep = 0.35 + Math.random() * 0.45, Oi.push(Et);
      }
  }
  function Sl(e) {
    cancelAnimationFrame(Er), qs = e;
    const r = po == null ? void 0 : po.getContext("2d");
    if (!r) return;
    function l() {
      r.clearRect(0, 0, js, ds);
      let h = !0;
      Oi.forEach((w) => {
        w[qs](), w.isIdle || (h = !1);
      }), qs === "disappear" && h || (Er = requestAnimationFrame(l));
    }
    Er = requestAnimationFrame(l);
  }
  function cs() {
    cancelAnimationFrame(Er), Ml(), Sl("appear"), setTimeout(() => Sl("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    Fi.classList.contains("active") && cs();
  });
  const Wi = i("pixelTrailCanvas"), qi = Wi.getContext("2d");
  let Cn = !0, Ve = 0.7, ji = 600, Dr = [], zi = null, Ka = { x: 0, y: 0, ready: !1 };
  function Cl() {
    const e = f.getBoundingClientRect(), r = No(), l = Math.min(window.devicePixelRatio || 1, 2), h = Math.max(1, e.width / r), w = Math.max(1, e.height / r);
    Wi.width = Math.max(1, Math.floor(h * l)), Wi.height = Math.max(1, Math.floor(w * l)), Wi.style.width = h + "px", Wi.style.height = w + "px", qi.setTransform(l, 0, 0, l, 0, 0);
  }
  function Cd(e, r) {
    if (!Cn) return;
    const l = performance.now();
    Ka.ready || (Ka = { x: e, y: r, ready: !0 });
    const h = 7;
    for (let w = 1; w <= h; w++) {
      const A = w / h;
      Dr.push({
        x: Ka.x + (e - Ka.x) * A,
        y: Ka.y + (r - Ka.y) * A,
        born: l - (h - w) * 10
      });
    }
    Ka = { x: e, y: r, ready: !0 };
  }
  function ps(e) {
    if (zi = null, !y) return;
    if (!lt.workout.classList.contains("active")) {
      zi = requestAnimationFrame(ps);
      return;
    }
    const r = f.getBoundingClientRect(), l = No();
    qi.clearRect(0, 0, r.width / l, r.height / l), Cn && (Dr = Dr.filter((w) => e - w.born < ji), qi.fillStyle = i("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", Dr.forEach((w) => {
      const A = (e - w.born) / ji, R = (1 - A) * Ve, j = Math.round(w.x / 14) * 14, ht = Math.round(w.y / 14) * 14;
      qi.globalAlpha = Math.max(0, R);
      const xt = 2 + 5 * (1 - A) * Ve;
      qi.fillRect(j - xt / 2, ht - xt / 2, xt, xt);
    }), qi.globalAlpha = 1), zi = requestAnimationFrame(ps);
  }
  f.addEventListener("pointermove", (e) => {
    const r = f.getBoundingClientRect(), l = No();
    Cd((e.clientX - r.left) / l, (e.clientY - r.top) / l);
  }), f.addEventListener("pointerleave", () => Ka.ready = !1), new ResizeObserver(Cl).observe(f), Cl(), zi = requestAnimationFrame(ps);
  const uo = i("movementRippleCanvas"), ni = uo.getContext("2d");
  let oi = !0, Vi = null, Tl = performance.now();
  function Gi() {
    const e = uo.parentElement.getBoundingClientRect(), r = No(), l = Math.max(1, e.width / r), h = Math.max(1, e.height / r), w = Math.min(window.devicePixelRatio || 1, 2);
    uo.width = Math.max(1, Math.floor(l * w)), uo.height = Math.max(1, Math.floor(h * w)), uo.style.width = l + "px", uo.style.height = h + "px", ni.setTransform(w, 0, 0, w, 0, 0);
  }
  function zs() {
    var e;
    return pa || ((e = Ut[se]) == null ? void 0 : e.kind) === "rest";
  }
  function Td() {
    const e = Ut[se];
    return zs() ? 2200 : e ? e.kind === "warmup" || e.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function us(e) {
    if (Vi = null, !y) return;
    if (!lt.workout.classList.contains("active")) {
      Vi = requestAnimationFrame(us);
      return;
    }
    const r = uo.parentElement.getBoundingClientRect(), l = No(), h = Math.max(1, r.width / l), w = Math.max(1, r.height / l);
    if (ni.clearRect(0, 0, h, w), oi) {
      const A = Td(), R = (e - Tl) % A / A, j = 15, ht = Math.max(8, Math.round(j * w / Math.max(1, h))), xt = h / (j + 1), mt = w / (ht + 1), ct = h * 0.5, Ft = w * 0.52, ne = Math.hypot(ct, Ft), Pt = i("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let Et = 1; Et <= ht; Et++)
        for (let he = 1; he <= j; he++) {
          const ve = he * xt, zt = Et * mt, be = Math.hypot(ve - ct, zt - Ft) / ne, Re = zs(), de = Re ? Math.exp(-Math.pow((be - (R * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, re = Math.exp(-Math.pow((be - R * 1.25) * 7, 2)), ga = Re ? de : re, Fa = Re ? 0.5 + 0.5 * Math.sin(R * Math.PI * 2 - be * 3) ** 2 : 0.35 + 0.65 * Math.sin(R * Math.PI * 2 - be * 5) ** 2, Ye = Re ? 1.4 + ga * 4.2 * Fa : 1.2 + ga * 5 * Fa;
          ni.beginPath(), ni.arc(ve, zt, Ye, 0, Math.PI * 2), ni.fillStyle = `rgba(${Pt},${Re ? 0.08 + ga * 0.48 : 0.05 + ga * 0.55})`, ni.fill();
        }
    }
    Vi = requestAnimationFrame(us);
  }
  new ResizeObserver(Gi).observe(uo.parentElement), Gi(), Vi = requestAnimationFrame(us);
  const Ia = i("exerciseTitle"), fo = i("exerciseMeta"), Vs = i("stepLabel"), qa = i("digits"), Ee = i("fill"), ja = i("progress"), Br = i("pause"), ii = i("nextName"), fs = i("nextMeta"), Po = i("nextIcon"), ho = i("skipNextSession");
  let ma = null;
  function ke(e) {
    for (let r = Math.max(0, e); r < Ut.length; r++)
      if (!Ut[r].sessionHidden) return r;
    return -1;
  }
  function hs() {
    const e = Ut[se];
    if (!e) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (pa) {
      const h = ke(se + 1), w = h >= 0 ? Ut[h] : null;
      return w ? { name: w.name, meta: gs(w), icon: ms(w) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (e.rest > 0) return { name: "Rest", meta: e.rest + " sec · " + (e.roundBreakAfter ? "round " + (e.round + 1) + " next" : "recovery"), icon: "pause" };
    const r = ke(se + 1), l = r >= 0 ? Ut[r] : null;
    return l ? { name: l.name, meta: gs(l), icon: ms(l) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function Rr() {
    if (!Ut[se]) return Ut.length;
    const r = ke(se + 1);
    return r < 0 ? Ut.length : r + 1;
  }
  function ms(e) {
    return e.kind === "video" ? "play" : "clock";
  }
  function gs(e) {
    return e.kind === "video" ? "YouTube · " + on(e.duration) : e.group + " · " + e.duration + " sec";
  }
  function Nr() {
    return Ut.length && Ut[Ut.length - 1].round || 1;
  }
  function Ll(e) {
    const r = Ut[e];
    if (!r) return "";
    const l = Nr();
    if (l <= 1) return "Step " + (e + 1) + " of " + Ut.length;
    if (r.roundBreak) return "Round " + r.round + " of " + l + " · Rest";
    const h = Ut.filter((w) => w.round === r.round && !w.roundBreak).length;
    return "Round " + r.round + " of " + l + " · Step " + (r.roundIndex + 1) + " of " + h;
  }
  function vs() {
    return ja.querySelector('[data-step="' + se + '"]');
  }
  function Ld() {
    Ut[se] && Number(ja.dataset.round) !== (Ut[se].round || 1) && Ys(), [...ja.children].forEach((e) => {
      const r = Number(e.dataset.step);
      e.classList.toggle("done", r < se), e.classList.toggle("active", r === se), e.classList.toggle("rewindable", r <= se), e.disabled = r > se, r === se && e.style.setProperty("--segment-progress", "0%");
    }), Ut[se] && (Vs.textContent = Ll(se), ci());
  }
  function Al(e) {
    const r = Ut.indexOf(e);
    r < 0 || r <= se || (e.sessionHidden = !e.sessionHidden, ra(), P((e.sessionHidden ? "Hidden " : "Included ") + e.name + " for this session"));
  }
  function ri() {
    const e = i("upcomingList");
    if (!e) return;
    e.innerHTML = "";
    const r = Rr(), l = Ut.slice(r);
    (To === "all" ? l : l.slice(0, Math.max(1, Number(To) || 1))).forEach((w) => {
      const A = document.createElement("section");
      A.className = "upcomingCard" + (w.sessionHidden ? " sessionHidden" : "") + (ks(w) ? " noMeta" : ""), A.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + Na(ms(w)) + '</div><div><div class="upcomingName">' + Yt(w.name) + '</div><div class="upcomingMeta">' + Yt(gs(w)) + (Nr() > 1 ? " · round " + w.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (w.sessionHidden ? "Include this session" : "Skip this session") + "</button>", A.querySelector(".skipSessionBtn").addEventListener("click", () => Al(w)), e.appendChild(A);
    });
  }
  function ra() {
    var r;
    const e = hs();
    ii.textContent = e.name, fs.textContent = e.meta, Po.innerHTML = Na(e.icon);
    {
      const l = pa ? Ut[ke(se + 1)] : ((r = Ut[se]) == null ? void 0 : r.rest) > 0 ? { kind: "rest" } : Ut[ke(se + 1)];
      n.querySelector(".nextCard").classList.toggle("noMeta", !!(l && ks(l)));
    }
    if (ma = null, pa) {
      const l = ke(se + 1);
      l >= 0 && (ma = Ut[l]);
    } else {
      const l = Ut[se];
      if (l && l.rest > 0)
        ma = null;
      else {
        const h = ke(se + 1);
        h >= 0 && (ma = Ut[h]);
      }
    }
    ho && (ho.hidden = !ma, ho.textContent = ma != null && ma.sessionHidden ? "Include this session" : "Skip this session"), ri();
  }
  ho.addEventListener("click", () => {
    ma && (ma.sessionHidden = !ma.sessionHidden, P((ma.sessionHidden ? "Hidden " : "Included ") + ma.name + " for this session"), ra());
  });
  let un = null, bs = null;
  function Ui(e, r = {}) {
    const l = ie[te];
    d.fire(e, { move: (l == null ? void 0 : l.name) || "", move_id: te, ...r });
  }
  function Gs() {
    const e = ie[te];
    un = { key: te, name: (e == null ? void 0 : e.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(bs), bs = setInterval(() => {
      un && !Ua && un.active++;
    }, 1e3), Ui("started", { steps: Ut.length });
  }
  function ws(e) {
    if (clearInterval(bs), !un) return;
    const r = un;
    un = null, Ui(e ? "completed" : "ended", { seconds: r.active }), !(r.active < 30) && (we.history.unshift({ id: "h-" + r.startedAt, move_id: r.key, name: r.name, start: new Date(r.startedAt).toISOString(), seconds: r.active, completed: e }), we.history = we.history.slice(0, 1e3), nn(), Jt(), Fn());
  }
  let Tn = null, fn = null, mo = !1;
  function Yi() {
    return ge().sounds !== !1;
  }
  function Us() {
    if (Yi())
      try {
        navigator.audioSession && (navigator.audioSession.type = "playback"), Tn = Tn || new (window.AudioContext || window.webkitAudioContext)(), Tn.state === "suspended" && Tn.resume();
      } catch {
        Tn = null;
      }
  }
  function go(e, r, l, { to: h = e, vol: w = 0.25, type: A = "sine" } = {}) {
    const R = Tn.currentTime + r, j = Tn.createOscillator(), ht = Tn.createGain();
    j.type = A, j.frequency.setValueAtTime(e, R), h !== e && j.frequency.exponentialRampToValueAtTime(h, R + l), ht.gain.setValueAtTime(1e-4, R), ht.gain.exponentialRampToValueAtTime(w, R + 0.01), ht.gain.exponentialRampToValueAtTime(1e-4, R + l), j.connect(ht).connect(Tn.destination), j.start(R), j.stop(R + l + 0.02);
  }
  const xs = {
    tick: () => go(880, 0, 0.07, { vol: 0.18 }),
    move: () => {
      go(660, 0, 0.12, { type: "triangle", vol: 0.3 }), go(990, 0.13, 0.16, { type: "triangle", vol: 0.3 });
    },
    rest: () => go(660, 0, 0.4, { to: 440, vol: 0.22 }),
    done: () => {
      go(523, 0, 0.16, { type: "triangle" }), go(659, 0.16, 0.16, { type: "triangle" }), go(784, 0.32, 0.4, { type: "triangle" });
    }
  };
  function Kn(e) {
    if (!(!Yi() || !Tn))
      try {
        Tn.state === "suspended" && Tn.resume(), xs[e]();
      } catch {
      }
  }
  function Pr() {
    ea >= 1 && ea <= 3 && ea !== fn && (fn = ea, Kn("tick"));
  }
  function Ad() {
    Us(), C("workout"), In();
    const e = ke(0);
    e >= 0 && Ut[e].kind === "video" && Fe(Ut[e]);
  }
  function Ir() {
    Ln(), ws(!1), clearInterval(Qe), clearInterval(Ai), pa = !1, vo(!1), i("app").classList.remove("resting"), Fi.classList.remove("active"), C("home");
  }
  function In() {
    Fi.classList.add("active");
    let e = 5;
    ls.textContent = e, Kn("tick"), requestAnimationFrame(cs), clearInterval(Ai), Ai = setInterval(() => {
      e--, e > 0 ? (ls.textContent = e, Kn("tick"), cs()) : (clearInterval(Ai), ls.textContent = "GO", Kn("move"), mo = !0, cs(), setTimeout(() => {
        Fi.classList.remove("active"), cancelAnimationFrame(Er), ys();
      }, 650));
    }, 1e3);
  }
  function Ys() {
    var r;
    ja.innerHTML = "";
    const e = ((r = Ut[Math.max(0, se)] || Ut[0]) == null ? void 0 : r.round) || 1;
    ja.dataset.round = e, Ut.forEach((l, h) => {
      if ((l.round || 1) !== e) return;
      const w = document.createElement("button");
      w.dataset.step = h, w.type = "button", w.className = "progressSegment", w.setAttribute("aria-label", "Go to " + l.name), w.addEventListener("click", () => {
        h <= se && $a(h);
      }), ja.appendChild(w);
    });
  }
  function vo(e) {
    e = !!e;
    const r = Ua !== e;
    if (Ua = e, Br.textContent = e ? "Resume" : "Pause", i("app").classList.toggle("paused", e), ya && qe)
      try {
        e ? qe.pauseVideo() : qe.playVideo();
      } catch {
      }
    r && un && Ui(e ? "paused" : "resumed");
  }
  function $a(e) {
    e < 0 || e >= Ut.length || e > se || (clearInterval(Qe), pa = !1, i("app").classList.remove("resting"), se = e, vo(!1), di(), Qe = setInterval(Fo, 1e3));
  }
  function ys() {
    if (se = ke(0), vo(!1), Ys(), se < 0) {
      Ia.textContent = "No activities", fo.textContent = "Open Edit and enable or add a movement", fo.hidden = !1;
      return;
    }
    Gs(), di(), clearInterval(Qe), Qe = setInterval(Fo, 1e3);
  }
  const Zi = i("videoStage"), Hn = i("videoSound"), _l = 0, Io = 1, _d = 2;
  let Zs = 0, bo = null, wo = null, qe = null, Ho = null, Hr = 0, Fr = !1, ya = null, Ks = null;
  function El() {
    var e;
    return (e = window.YT) != null && e.Player ? Promise.resolve(window.YT) : bo || (bo = new Promise((r, l) => {
      const h = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          h == null || h();
        } catch {
        }
      };
      const w = setInterval(() => {
        var R;
        (R = window.YT) != null && R.Player && (clearInterval(w), clearTimeout(A), r(window.YT));
      }, 100), A = setTimeout(() => {
        clearInterval(w), bo = null, l(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const R = document.createElement("script");
        R.src = "https://www.youtube.com/iframe_api", R.async = !0, R.onerror = () => {
          clearInterval(w), clearTimeout(A), bo = null, l(new Error("YouTube did not load"));
        }, document.head.appendChild(R);
      }
    }), bo);
  }
  function Dl() {
    return wo || (wo = El().then((e) => new Promise((r) => {
      const l = document.createElement("div");
      i("videoFrame").appendChild(l), qe = new e.Player(l, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => r(qe), onStateChange: (h) => xo(h.data), onError: (h) => yo(h.data) }
      });
    })), wo.catch(() => {
      wo = null;
    }), wo);
  }
  function Fe(e) {
    !(e != null && e.videoId) || e.videoError || Dl().then((r) => {
      ya || Ho === e.videoId || (Ho = e.videoId, Hr = Number(e.start) || 0, Fr = !1, r.mute(), r.loadVideoById({ videoId: e.videoId, startSeconds: Hr }));
    }).catch(() => {
    });
  }
  function $n() {
    const e = ke(se + 1);
    e >= 0 && Ut[e].kind === "video" && Fe(Ut[e]);
  }
  function xo(e) {
    if (!ya) {
      e === Io && !Fr && (Fr = !0, qe.pauseVideo(), qe.seekTo(Hr, !0));
      return;
    }
    Zi.classList.toggle("playing", e === Io), Ut[se] === ya && performance.now() > Zs && (e === Io && Ua ? vo(!1) : e === _d && !Ua && vo(!0)), e === Io && Bl(ya.videoId, qe.getDuration()) && nn(), e === _l && si();
  }
  function yo(e) {
    const r = ya;
    if (!r) {
      Ho = null;
      return;
    }
    e === 101 || e === 150 ? (Rl(r.videoId), P("That video can’t play outside YouTube, so it was skipped")) : P("The video couldn’t play, so it was skipped"), si();
  }
  function Or(e) {
    if (i("app").classList.add("videoStep"), Hn.hidden = !0, ya = e, clearTimeout(Ks), !e.videoId) {
      P("This video step has no link yet, so it was skipped"), setTimeout(() => si(), 0);
      return;
    }
    Dl().then((r) => {
      if (ya !== e) return;
      Zs = performance.now() + 1500;
      const l = Number(e.start) || 0;
      Ho !== e.videoId ? (Ho = e.videoId, Hr = l, r.loadVideoById({ videoId: e.videoId, startSeconds: l })) : (r.seekTo(l, !0), r.playVideo()), r.unMute(), Ua && r.pauseVideo(), Ks = setTimeout(() => {
        ya !== e || Ua || (r.getPlayerState() !== Io ? (r.mute(), r.playVideo(), Hn.hidden = !1) : r.isMuted() && (Hn.hidden = !1));
      }, 1600);
    }).catch(() => {
      ya === e && (P("YouTube didn’t load, so the video was skipped"), si());
    });
  }
  function Ha() {
    if (!i("app").classList.contains("videoStep")) return;
    const e = n.querySelector(".workGrid"), r = n.querySelector(".sessionControlRow"), l = e.getBoundingClientRect().top, h = (r == null ? void 0 : r.offsetHeight) || 42, w = window.innerHeight - l - 16 - h - 84;
    e.style.setProperty("--theater-h", Math.max(240, Math.round(w)) + "px");
  }
  window.addEventListener("resize", Ha);
  function Ln() {
    clearTimeout(Ks);
    const e = ya;
    if (ya = null, i("app").classList.remove("videoStep"), Zi.classList.remove("playing"), Hn.hidden = !0, e && qe) {
      try {
        qe.pauseVideo();
      } catch {
      }
      Ho = null;
    }
  }
  function si() {
    const e = ya;
    !e || Ut[se] !== e || (Ln(), clearInterval(Qe), pi(), Qe = setInterval(Fo, 1e3));
  }
  Hn.addEventListener("click", () => {
    qe && (qe.unMute(), qe.playVideo()), Hn.hidden = !0;
  });
  function li(e) {
    var h;
    const r = Number(e.start) || 0;
    if (e.useVideoLength === !1) return r + (Number(e.duration) || 300);
    const l = qe && ya === e && Number((h = qe.getDuration) == null ? void 0 : h.call(qe)) || 0;
    return Number(e.end) || l || Number(e.videoDuration) || r + (Number(e.duration) || 300);
  }
  function $s(e, r) {
    const l = ie[te];
    [me, da, Ge, l == null ? void 0 : l.warmup, l == null ? void 0 : l.strength, l == null ? void 0 : l.cooldown, l == null ? void 0 : l.sequence].forEach((h) => (Array.isArray(h) ? h : []).forEach((w) => {
      w && w.kind === "video" && w.videoId === e && r(w);
    }));
  }
  function Bl(e, r) {
    r = Math.round(Number(r) || 0);
    let l = !1;
    return e && r > 0 && $s(e, (h) => {
      h.videoDuration !== r && (h.videoDuration = r, l = !0);
    }), l;
  }
  function Rl(e) {
    $s(e, (r) => {
      r.videoError = "embed";
    }), nn();
  }
  function ka(e) {
    const r = e.videoId;
    if (!r) return;
    const l = () => {
      Wa.classList.contains("open") ? fa || _e() : (_e(), nn());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + r)).then((h) => h.ok ? h.json() : Promise.reject(h.status)).then((h) => {
      e.videoId === r && (e.videoTitle = h.title || "", e.autoName && h.title && (e.name = h.title), l());
    }).catch((h) => {
      e.videoId === r && h === 401 && (e.videoError = "embed", l());
    }), Ki(r).then((h) => {
      Bl(r, h) && l();
    }).catch((h) => {
      h === "embed" && e.videoId === r && (e.videoError = "embed", l());
    });
  }
  function Ki(e) {
    return El().then((r) => new Promise((l, h) => {
      const w = document.createElement("div");
      w.className = "videoProbe", w.setAttribute("aria-hidden", "true");
      const A = document.createElement("div");
      w.appendChild(A), i("app").appendChild(w);
      let R = null, j = !1;
      const ht = (ct, Ft) => {
        j || (j = !0, clearTimeout(xt), setTimeout(() => {
          try {
            R == null || R.destroy();
          } catch {
          }
          w.remove();
        }, 0), Ft ? h(Ft) : l(ct));
      }, xt = setTimeout(() => ht(0), 2e4), mt = () => {
        var Ft;
        const ct = Number((Ft = R == null ? void 0 : R.getDuration) == null ? void 0 : Ft.call(R)) || 0;
        return ct > 0 && ht(ct), ct > 0;
      };
      R = new r.Player(A, {
        width: 320,
        height: 180,
        videoId: e,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            mt() || (R.mute(), R.playVideo());
          },
          onStateChange: () => mt(),
          onError: (ct) => ht(0, ct.data === 101 || ct.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function di() {
    pa = !1;
    const e = Ut[se];
    i("app").classList.toggle("resting", e.kind === "rest"), e.kind === "video" ? Or(e) : Ln(), ea = e.duration, ao = e.duration, fn = null, mo ? mo = !1 : Kn(e.kind === "rest" ? "rest" : "move"), Ia.textContent = e.name, fo.textContent = e.group, fo.hidden = !0, Vs.textContent = Ll(se), un && Ui("step", { name: e.name, group: e.group, kind: e.kind, step: se + 1, of: Ut.length, round: e.round || 1, rounds: Nr(), duration: e.duration }), ra(), Ld(), $n(), e.kind === "video" && setTimeout(Ha, 0);
  }
  function ci() {
    var w;
    const e = ((w = Ut[se]) == null ? void 0 : w.kind) === "video" && !pa, r = e && ea >= 60;
    qa.textContent = r ? on(ea) : ea, qa.classList.toggle("long", r), e && (i("videoClock").textContent = on(ea) + " left");
    const l = ea / ao * 100;
    Ee.style.width = l + "%";
    const h = vs();
    if (h && !pa) {
      const A = 100 - l;
      h.style.setProperty("--segment-progress", A + "%");
    }
  }
  function Fo() {
    var r, l;
    if (Ua) return;
    const e = Ut[se];
    if ((e == null ? void 0 : e.kind) === "video" && !pa && ya === e) {
      const h = Number((r = qe == null ? void 0 : qe.getCurrentTime) == null ? void 0 : r.call(qe)) || 0, w = Number(e.start) || 0, A = li(e);
      ao = Math.max(1, A - w), (h > w || ((l = qe == null ? void 0 : qe.getPlayerState) == null ? void 0 : l.call(qe)) === Io) && (ea = Math.max(0, Math.ceil(A - h))), ci(), Pr(), h > w && h >= A - 0.25 && si();
      return;
    }
    ea--, ci(), Pr(), ea <= 0 && (e.rest > 0 ? Xs(e.rest) : pi());
  }
  function Xs(e) {
    var l;
    pa = !0, i("app").classList.add("resting");
    const r = vs();
    r && r.style.setProperty("--segment-progress", "100%"), clearInterval(Qe), ea = e, ao = e, fn = null, Kn("rest"), un && Ui("rest", { duration: e }), Ia.textContent = "Rest", fo.textContent = (l = Ut[se]) != null && l.roundBreakAfter ? "Round " + (Ut[se].round + 1) + " next" : "Recovery", ra(), ci(), Qe = setInterval(() => {
      Ua || (ea--, ci(), Pr(), ea <= 0 && (clearInterval(Qe), pi(), Qe = setInterval(Fo, 1e3)));
    }, 1e3);
  }
  function pi() {
    pa = !1;
    const e = ke(se + 1);
    if (e >= 0)
      se = e, di();
    else {
      clearInterval(Qe), Ln(), vo(!1), i("app").classList.remove("resting"), Ia.textContent = "Complete", fo.textContent = "Move finished", fo.hidden = !1, qa.textContent = "✓";
      {
        const r = Nr();
        Vs.textContent = r > 1 ? r + " rounds done" : Ut.filter((l) => !l.roundBreak).length + " steps done";
      }
      ws(!0), Kn("done");
      {
        const r = nl(7).reduce((l, h) => l + h.minutes, 0);
        fo.textContent = "Move finished · " + r + " min in the last 7 days";
      }
      Ee.style.width = "100%", ra();
    }
  }
  i("skipExercise").addEventListener("click", () => {
    Nl(), vo(!1);
  });
  function Nl() {
    clearInterval(Qe);
    const e = Ut[se];
    if (pa) {
      pa = !1, i("app").classList.remove("resting");
      const l = ke(se + 1);
      l >= 0 ? (se = l, di(), Qe = setInterval(Fo, 1e3)) : pi();
      return;
    }
    if (e && e.rest > 0) {
      Xs(e.rest);
      return;
    }
    const r = ke(se + 1);
    r >= 0 ? (se = r, di(), Qe = setInterval(Fo, 1e3)) : pi();
  }
  i("restartSegment").addEventListener("click", () => {
    if (clearInterval(Qe), vo(!1), pa) {
      const e = Ut[se];
      ea = e.rest, ao = e.rest, fn = null, Kn("rest"), Ia.textContent = "Rest", fo.textContent = "Recovery", i("app").classList.add("resting"), ra(), ci();
    } else
      di();
    Qe = setInterval(pa ? () => {
      Ua || (ea--, ci(), Pr(), ea <= 0 && (clearInterval(Qe), pi(), Qe = setInterval(Fo, 1e3)));
    } : Fo, 1e3);
  });
  function Wr(e, r, l, h) {
    let w = 0, A = null, R = !1;
    function j() {
      A && cancelAnimationFrame(A), A = null, w = 0, R = !1, r.style.width = "0%", e.classList.remove("holding");
    }
    function ht(ct) {
      if (!R) return;
      w || (w = ct);
      const Ft = Math.min(1, (ct - w) / l);
      if (r.style.width = Ft * 100 + "%", Ft >= 1) {
        R = !1, A && cancelAnimationFrame(A), A = null, r.style.width = "100%", setTimeout(() => r.style.width = "0%", 90), h();
        return;
      }
      A = requestAnimationFrame(ht);
    }
    function xt(ct) {
      var Ft;
      if (!(ct && ct.button !== void 0 && ct.button !== 0)) {
        ct == null || ct.preventDefault(), j(), R = !0, e.classList.add("holding");
        try {
          (Ft = e.setPointerCapture) == null || Ft.call(e, ct.pointerId);
        } catch {
        }
        A = requestAnimationFrame(ht);
      }
    }
    function mt() {
      R && j();
    }
    e.addEventListener("pointerdown", xt), e.addEventListener("pointerup", mt), e.addEventListener("pointercancel", mt), e.addEventListener("lostpointercapture", mt), e.addEventListener("keydown", (ct) => {
      (ct.key === " " || ct.key === "Enter") && !ct.repeat && xt(ct);
    }), e.addEventListener("keyup", (ct) => {
      (ct.key === " " || ct.key === "Enter") && mt();
    });
  }
  const Ed = i("endWorkout");
  Wr(Ed, i("holdEndFill"), 1500, Ir);
  const $i = i("deleteMoveConfirm");
  i("deleteMoveOpen").addEventListener("click", () => {
    $i.classList.add("open"), $i.setAttribute("aria-hidden", "false");
  }), i("deleteMoveCancel").addEventListener("click", () => {
    $i.classList.remove("open"), $i.setAttribute("aria-hidden", "true");
  });
  function Xa() {
    const e = te, r = n.querySelector('.workoutPanel[data-workout="' + e + '"]');
    r && r.remove(), delete ie[e], we.order = we.order.filter((h) => h !== e);
    let l = n.querySelector(".workoutPanel[data-workout]");
    if (!l) {
      const h = "custom-" + Date.now();
      ie[h] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, we.order.push(h), l = Aa(h, ie[h]);
    }
    $i.classList.remove("open"), $i.setAttribute("aria-hidden", "true"), co = null, _r(), ca(l.dataset.workout), nn(), P("Move deleted");
  }
  Wr(i("deleteMoveYes"), i("deleteMoveFill"), 1500, Xa);
  const qr = n.querySelector(".rubberTabs"), ui = i("rubberIndicator");
  function Xi(e, r = !0) {
    if (!e || !qr || !ui) return;
    const l = qr.getBoundingClientRect(), h = e.getBoundingClientRect();
    ui.style.transition = r ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const w = No();
    ui.style.left = (h.left - l.left) / w + qr.scrollLeft + "px", ui.style.width = h.width / w + "px", r && (ui.style.transform = "scaleX(1.08)", setTimeout(() => ui.style.transform = "scaleX(1)", 180));
  }
  n.querySelectorAll(".tab").forEach((e) => e.addEventListener("click", () => {
    e.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), n.querySelectorAll(".tab").forEach((r) => r.classList.remove("active")), n.querySelectorAll(".settingsPane").forEach((r) => r.classList.remove("active")), e.classList.add("active"), i(e.dataset.pane).classList.add("active"), Xi(e, !0);
  })), requestAnimationFrame(() => Xi(n.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => Xi(n.querySelector(".tab.active"), !1));
  const jr = i("pixelTrailToggle"), Js = i("rippleToggle"), Ji = i("trailStrength"), Qi = i("trailLife");
  function Ja(e, r) {
    ge()[e] = r, nn();
  }
  const Qs = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function Pl(e) {
    return e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "g:" + String(e.group || "").trim().toLowerCase();
  }
  function ks(e) {
    var r;
    return !!((r = ge().hideMeta) != null && r[Pl(e)]);
  }
  function Il() {
    const e = /* @__PURE__ */ new Map(), r = (l, h, w) => {
      if (!l) return;
      Array.isArray(l) && (l = { name: l[1], group: l[2], kind: "work" });
      const A = Pl(l);
      let R = e.get(A);
      R || (R = { key: A, label: A === "rest" ? "Rest" : A === "video" ? "Video" : String(l.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, e.set(A, R)), R.kinds.add(A === "rest" ? "Rest" : A === "video" ? "Video" : h), R.moves.add(w), R.count++;
    };
    return Object.values(ie).forEach((l) => {
      const h = l.name || "Move";
      (l.warmup || (l.customSequence ? [] : Ht)).forEach((w) => r(w, "Warm-up", h)), (l.customSequence ? l.sequence || [] : l.strength || []).forEach((w) => r(w, w.presetRole === "warmup" ? "Warm-up" : w.presetRole === "cooldown" ? "Cooldown" : "Movement", h)), (l.cooldown || (l.customSequence ? [] : oe)).forEach((w) => r(w, "Cooldown", h));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([l, h]) => {
      e.has(l) || e.set(l, { key: l, label: h, kinds: /* @__PURE__ */ new Set([h]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...e.values()].map((l) => ({ ...l, kind: l.kinds.has("Movement") ? "Movement" : [...l.kinds][0], moves: [...l.moves] })).sort((l, h) => Qs.indexOf(l.kind) - Qs.indexOf(h.kind) || l.label.localeCompare(h.label));
  }
  let Ms = "all";
  function Ss() {
    const e = i("metaSearch").value.trim().toLowerCase();
    return Il().filter((r) => (Ms === "all" || r.kind === Ms) && (!e || r.label.toLowerCase().includes(e) || r.moves.some((l) => l.toLowerCase().includes(e))));
  }
  function Oo() {
    const e = i("metaTableBody");
    if (!e) return;
    const r = ge().hideMeta || {}, l = Ss();
    e.innerHTML = l.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', l.forEach((w) => {
      const A = !r[w.key], R = w.count ? (w.moves.length > 2 ? w.moves.slice(0, 2).join(", ") + " + " + (w.moves.length - 2) + " more" : w.moves.join(", ")) + " · " + w.count + " step" + (w.count === 1 ? "" : "s") : "Not used yet", j = document.createElement("tr");
      j.className = A ? "" : "off", j.innerHTML = '<td><div class="metaType">' + Yt(w.label) + '</div><div class="metaSub">' + Yt(w.kind + " · " + R) + '</div></td><td class="metaKindCol">' + Yt(w.kind) + '</td><td class="metaUsedCol">' + Yt(R) + '</td><td class="metaSwitchCol"><button class="switch' + (A ? " on" : "") + '" type="button" role="switch" aria-checked="' + A + '" aria-label="Second line for ' + Yt(w.label) + ' on phones"></button></td>', j.querySelector(".switch").addEventListener("click", () => tl([w.key], A)), e.appendChild(j);
    });
    const h = l.filter((w) => r[w.key]).length;
    i("metaCount").textContent = l.length ? l.length + " type" + (l.length === 1 ? "" : "s") + (h ? " · " + h + " hidden on phones" : "") : "";
  }
  function tl(e, r) {
    const l = { ...ge().hideMeta || {} };
    e.forEach((h) => {
      r ? l[h] = !0 : delete l[h];
    }), Ja("hideMeta", l), Oo(), Ze(), ra();
  }
  i("metaSearch").addEventListener("input", Oo), i("metaKinds").querySelectorAll(".kindChip").forEach((e) => e.addEventListener("click", () => {
    Ms = e.dataset.kind, i("metaKinds").querySelectorAll(".kindChip").forEach((r) => r.classList.toggle("active", r === e)), Oo();
  })), i("metaHideAll").addEventListener("click", () => tl(Ss().map((e) => e.key), !0)), i("metaShowAll").addEventListener("click", () => tl(Ss().map((e) => e.key), !1));
  const Wo = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...ge().toggles || {} };
  function Hl() {
    n.querySelectorAll("[data-toggle]").forEach((l) => l.classList.toggle("on", Wo[l.dataset.toggle] !== !1)), n.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([l, h]) => {
      i(h).hidden = Wo[l] === !1;
    });
    const e = ["steps", "mood", "energyLevel"].some((l) => Wo[l] !== !1);
    n.querySelector(".activityCard").hidden = !e, i("weatherCard").hidden = !0;
    const r = n.querySelector("#homeView .grid");
    r.classList.toggle("noActivity", !e), r.classList.toggle("noWeather", !0);
  }
  n.querySelectorAll("[data-toggle]").forEach((e) => e.addEventListener("click", () => {
    Wo[e.dataset.toggle] = Wo[e.dataset.toggle] === !1, Hl(), Ja("toggles", { ...Wo });
  })), Hl();
  function Fl() {
    jr.classList.toggle("on", Cn), Js.classList.toggle("on", oi), Ji.value = Math.round(Ve * 100), i("trailStrengthValue").textContent = Ji.value + "%", Qi.value = ji, i("trailLifeValue").textContent = Qi.value + " ms";
  }
  ge().trailEnabled !== void 0 && (Cn = ge().trailEnabled), ge().rippleEnabled !== void 0 && (oi = ge().rippleEnabled), ge().trailStrength !== void 0 && (Ve = ge().trailStrength), ge().trailMaxAge !== void 0 && (ji = ge().trailMaxAge), Fl();
  const fi = i("soundsToggle");
  fi.classList.toggle("on", Yi()), fi.addEventListener("click", () => {
    Ja("sounds", !Yi()), fi.classList.toggle("on", Yi()), Yi() && (Us(), Kn("move"));
  }), jr.addEventListener("click", () => {
    Cn = !Cn, jr.classList.toggle("on", Cn), Cn || (Dr = []), Ja("trailEnabled", Cn);
  }), Js.addEventListener("click", () => {
    oi = !oi, Js.classList.toggle("on", oi), Ja("rippleEnabled", oi);
  }), Ji.addEventListener("input", () => {
    Ve = Number(Ji.value) / 100, i("trailStrengthValue").textContent = Ji.value + "%";
  }), Ji.addEventListener("change", () => Ja("trailStrength", Ve)), Qi.addEventListener("input", () => {
    ji = Number(Qi.value), i("trailLifeValue").textContent = Qi.value + " ms";
  }), Qi.addEventListener("change", () => Ja("trailMaxAge", ji)), Ni.addEventListener("change", () => Ja("upcomingCount", To));
  function el(e) {
    n.querySelectorAll(".themeBtn").forEach((l) => l.classList.toggle("active", l.dataset.theme === e));
    const r = e === "light";
    i("app").classList.toggle("light", r), d.setLight(r), ko(n);
  }
  el(ge().theme || "dark"), n.querySelectorAll(".themeBtn").forEach((e) => e.addEventListener("click", () => {
    el(e.dataset.theme), Ja("theme", e.dataset.theme);
  }));
  const na = { steps: null, weather: null, ...ge().entities || {} };
  let sa = null, zr = {};
  function al(e) {
    const r = Object.values(e).filter((j) => j.entity_id.startsWith("sensor.") || j.entity_id.startsWith("input_number.")), l = (j) => j.attributes.friendly_name || j.entity_id, h = r.filter((j) => /step/i.test(j.entity_id) || /step/i.test(l(j)) || ["steps", "step"].includes(String(j.attributes.unit_of_measurement || "").toLowerCase())), w = r.filter((j) => !h.includes(j)), A = (j, ht) => l(j).localeCompare(l(ht)), R = (j, ht) => /health_steps/.test(ht.entity_id) - /health_steps/.test(j.entity_id) || A(j, ht);
    return { suggested: h.sort(R), rest: w.sort(A), label: l };
  }
  function Ol(e) {
    const r = i("stepsEntity");
    if (!r || r.matches(":focus")) return;
    const { suggested: l, rest: h, label: w } = al(e), A = (ht) => '<option value="' + Yt(ht.entity_id) + '">' + Yt(w(ht)) + "</option>";
    r.innerHTML = '<option value="">Not connected</option>' + (l.length ? '<optgroup label="Suggested">' + l.map(A).join("") + "</optgroup>" : "") + (h.length ? '<optgroup label="All sensors">' + h.map(A).join("") + "</optgroup>" : ""), r.value = na.steps || "";
    const R = i("stepsStatus"), j = na.steps && e[na.steps];
    R.textContent = j ? "Connected · " + w(j) : R.dataset.empty;
  }
  i("stepsEntity").addEventListener("change", () => {
    na.steps = i("stepsEntity").value || null, Ja("entities", { ...na }), zr = {}, jl(), sa && (Ol(sa), hi(sa));
  });
  function Ba(e, r = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: r }).format(e);
  }
  function Wl() {
    const e = na.steps && (sa == null ? void 0 : sa[na.steps]), r = Number(e == null ? void 0 : e.state);
    return Number.isFinite(r) ? r : null;
  }
  function hi(e) {
    var h;
    const r = na.steps, l = r ? Number((h = e[r]) == null ? void 0 : h.state) : NaN;
    i("stepsMeta").textContent = r ? Number.isFinite(l) ? Ba(l) : "—" : "Set up in Settings";
  }
  let ql = 0;
  async function jl() {
    const e = na.steps;
    if (!e || !d.ws) return;
    ql = Date.now();
    const r = /* @__PURE__ */ new Date(), l = new Date(r.getFullYear(), r.getMonth(), r.getDate() - 30);
    try {
      const h = await d.ws({ type: "recorder/statistics_during_period", start_time: l.toISOString(), end_time: r.toISOString(), statistic_ids: [e], period: "day", types: ["max"] }), w = (h == null ? void 0 : h[e]) || [], A = {};
      if (w.forEach((R) => {
        Number.isFinite(R.max) && (A[St(new Date(R.start))] = R.max);
      }), !Object.keys(A).length) {
        const R = await d.ws({ type: "history/history_during_period", start_time: l.toISOString(), end_time: r.toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((R == null ? void 0 : R[e]) || []).forEach((j) => {
          const ht = Number(j.s ?? j.state), xt = j.lu ? j.lu * 1e3 : Date.parse(j.last_updated || j.last_changed);
          if (!Number.isFinite(ht) || !xt) return;
          const mt = St(new Date(xt));
          A[mt] = Math.max(A[mt] || 0, ht);
        });
      }
      zr = A, Fn();
    } catch {
    }
  }
  function Jt() {
    Fn();
  }
  Jt(), setInterval(() => {
    Jt(), Cr(), pn();
  }, 10 * 60 * 1e3);
  function nl(e) {
    const r = {}, l = {};
    we.history.forEach((R) => {
      const j = St(new Date(R.start));
      r[j] = (r[j] || 0) + (R.seconds || 0) / 60, l[j] = (l[j] || 0) + 1;
    });
    const h = /* @__PURE__ */ new Date(), w = St(h), A = [];
    for (let R = e - 1; R >= 0; R--) {
      const j = new Date(h.getFullYear(), h.getMonth(), h.getDate() - R), ht = St(j), xt = we.checkins.filter((ct) => ct.date === ht), mt = (ct) => {
        const Ft = xt.map((ne) => ne[ct]).filter(Boolean);
        return Ft.length ? Ft.reduce((ne, qt) => ne + qt, 0) / Ft.length : null;
      };
      A.push({
        key: ht,
        date: j,
        minutes: Math.round(r[ht] || 0),
        moves: l[ht] || 0,
        steps: ht === w && Wl() != null ? Wl() : zr[ht] ?? null,
        mood: mt("mood"),
        energy: mt("energy")
      });
    }
    return A;
  }
  function Vr(e) {
    let r = e.length - 1;
    e[r] && !e[r].minutes && r--;
    let l = 0;
    for (; r >= 0 && e[r].minutes > 0; )
      l++, r--;
    return l;
  }
  function Fn() {
    const e = i("insightCard");
    if (!e) return;
    const r = nl(30), l = Vr(r), h = r.reduce((xt, mt) => xt + mt.minutes, 0), w = /* @__PURE__ */ new Date(), A = St(w), R = St(new Date(w.getFullYear(), w.getMonth(), w.getDate() - (w.getDay() + 6) % 7)), j = r.filter((xt) => xt.key >= R && xt.key <= A).reduce((xt, mt) => xt + mt.minutes, 0), ht = (xt, mt, ct) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + xt + '</div><div><div class="activityRowName">' + Yt(mt) + '</div><div class="activityRowMeta">' + Yt(ct) + "</div></div></div>";
    e.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + Na("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + ht(Na("clock"), "This week", j + " min") + ht(Na("streak"), "Streak", l + " day" + (l === 1 ? "" : "s")) + ht(Na("calendar"), "30 days", h + " min") + "</div>";
  }
  const Xn = {
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
  }, Dd = (e) => e === "sunny" ? "clear" : e === "clear-night" ? "night" : e === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(e) ? "rain" : ["snowy", "snowy-rainy"].includes(e) ? "snow" : "cloudy", tr = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Cs = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let zl = 0;
  const ol = (e, r) => '<path class="' + r + '" d="' + e + '"/>', Bd = (e, r) => ' style="animation-delay:-' + Math.round(e * 137 % r) + 'ms"', An = (e, r, l, h) => {
    const w = l * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (h < 1 ? ' opacity="' + h + '"' : "") + Bd(e, 2400) + ' d="M' + e + " " + (r - l) + "L" + (e + w) + " " + (r - w) + "L" + (e + l) + " " + r + "L" + (e + w) + " " + (r + w) + "L" + e + " " + (r + l) + "L" + (e - w) + " " + (r + w) + "L" + (e - l) + " " + r + "L" + (e - w) + " " + (r - w) + 'Z"/>';
  }, Vl = ([e, r, l], h) => '<path class="wxMoonPath" d="' + e + '" fill="url(#' + h + ')"/><defs><linearGradient id="' + h + '" x1="0" y1="' + r + '" x2="0" y2="' + l + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', il = (e, r) => r ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', rl = (e) => (e ? ["29.35", "43.04", "56.74"].map((r, l) => '<g class="wxDrop" style="animation-delay:-' + l * 317 + 'ms"><rect class="wxAccent" x="' + r + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + r + ' 60.65)"/></g>') : [19, 26, 33].map((r, l) => '<g class="wxDrop" style="animation-delay:-' + l * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + r + ' 38)"/></g>')).join(""), Ts = (e) => (e ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([r, l], h) => '<circle class="wxFlake" style="animation-delay:-' + h * 640 + 'ms" cx="' + r + '" cy="' + l + '" r="' + (e ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function Ls(e, r, l, h) {
    return e === "clear" ? r ? Vl(l ? Cs.l : Cs.s, h) + (l ? An(70, 20, 5.83, 1) + An(78.33, 41.67, 3.75, 0.8) + An(60, 71.67, 3.33, 0.6) : An(42, 12, 3.5, 1) + An(47, 25, 2.25, 0.8) + An(36, 43, 2, 0.6)) : il(h, l) : e === "partly" ? (r ? Vl(l ? Cs.lp : Cs.sp, h) : l ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + ol(l ? tr.lp : tr.sp, r ? "wxCloudLight" : "wxBright") + (r ? l ? An(73.33, 16.67, 4.17, 0.9) : An(44, 10, 2.5, 0.9) : "") : e === "cloudy" ? ol(l ? tr.lc : tr.s, r ? "wxCloudLight" : "wxBright") + (r ? l ? An(15, 15, 3.75, 0.8) + An(76.67, 13.33, 2.92, 0.6) : An(9, 9, 2.25, 0.8) + An(46, 8, 1.75, 0.6) : "") : ol(l ? tr.lr : tr.s, "wxCloudLight") + (e === "rain" ? rl(l) : Ts(l));
  }
  const Gl = () => {
    var e;
    return ((e = sa == null ? void 0 : sa["sun.sun"]) == null ? void 0 : e.state) === "below_horizon";
  };
  let za = ge().weatherStyle || "bitmap", sl = ge().weatherLayout === "strip" ? "strip" : "tiles", Gr = ge().weatherMotion !== !1;
  const er = () => Gr && !_a(), mi = /* @__PURE__ */ new Map(), Ur = 700, Ul = (e) => {
    const [r, l] = e.split("/");
    return { k: r === "fog" ? "cloudy" : r === "storm" ? "rain" : r, night: l === "night" };
  };
  function Yr(e, r, l, h = za, w, A) {
    let R = Dd(e);
    const j = R === "night" || (A != null ? !!A : !!l && Gl());
    R === "night" && (R = "clear");
    const ht = r ? 90 : 54, xt = xd(e, j), mt = performance.now();
    let ct = w ? mi.get(w) : null;
    if (w && !ct ? mi.set(w, ct = { key: xt, t0: -1e9 }) : ct && ct.key !== xt && (ct.fromKey = ct.key, ct.from = ct.last || null, ct.key = xt, ct.t0 = mt), h !== "smooth") return '<span class="wxIcon pixels' + (r ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + xt + '"' + (w ? ' data-wx-slot="' + w + '"' : "") + ' data-wx-style="' + h + '" data-wx-size="' + ht + '"></canvas></span>';
    let Ft = "";
    if (ct && mt - ct.t0 < Ur && (er() || _a())) {
      const ne = Ul(ct.fromKey);
      Ft = '<span class="wxLayer wxOut ' + ne.k + (ne.night ? " night" : "") + '" style="animation-delay:' + Math.round(ct.t0 - mt) + 'ms"><svg viewBox="0 0 ' + ht + " " + ht + '">' + Ls(ne.k, ne.night, r, "wxg" + ++zl) + "</svg></span>";
    }
    return '<span class="wxIcon ' + R + (j ? " night" : "") + (r ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + ht + " " + ht + '">' + Ls(R, j, r, "wxg" + ++zl) + "</svg>" + Ft + "</span>";
  }
  function ar() {
    const e = i("app"), r = getComputedStyle(e), l = (j) => r.getPropertyValue(j).trim(), h = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([j, ht]) => {
      l(ht) && (h[j] = l(ht));
    });
    const w = l("--color-text-primary") || "#f1f1f1", A = l("--color-bg-card") || "#222222", R = e.classList.contains("light");
    return { colors: h, ink: R ? w : A, paper: R ? A : w };
  }
  function ko(e, r = performance.now()) {
    const l = e.querySelectorAll("canvas[data-wx]");
    if (!l.length) return;
    const h = ar(), w = er(), A = _a();
    l.forEach((R) => {
      var ct;
      const j = R.dataset.wx, ht = R.dataset.wxSlot ? mi.get(R.dataset.wxSlot) : null;
      let xt = oc(j, h.colors);
      if (ht && ht.key === j) {
        const Ft = (r - ht.t0) / Ur;
        Ft < 1 && (w || A) && (xt = Qp(ht.from || oc(ht.fromKey, h.colors), xt, Math.max(0, Ft), h.colors, A)), ht.last = xt;
      }
      const mt = mp(xt, { size: Number(R.dataset.wxSize) || 54, px: 2, oneBit: R.dataset.wxStyle === "onebit", colors: h.colors, ink: h.ink, paper: h.paper, clock: r, idle: w });
      R.width !== mt.w && (R.width = mt.w), R.height !== mt.h && (R.height = mt.h), (ct = R.getContext("2d")) == null || ct.putImageData(new ImageData(mt.data, mt.w, mt.h), 0, 0);
    });
  }
  let Zr = null, Kr = -1;
  function As(e) {
    if (Zr = null, !y) return;
    const r = er(), l = Math.floor(e / 100), h = [...mi.values()].some((ht) => e - ht.t0 < Ur), w = [...$r.values()].some((ht) => e - ht.t0 < ht.dur), A = lt.home.classList.contains("active"), R = Va.classList.contains("open"), j = r && za === "smooth" && (R || A && sl === "strip");
    !document.hidden && (h || w || j || r && l !== Kr) && (Kr = l, A && (ko(i("weatherCard"), e), So(i("weatherCard"), e)), R && (ko(Va, e), So(Va, e))), (r || h || w) && (Zr = requestAnimationFrame(As));
  }
  function qo() {
    i("app").classList.toggle("wxMotion", er()), !Zr && y && (Zr = requestAnimationFrame(As));
  }
  let Yl = [];
  const oa = 36e5, Zl = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function Mo() {
    const e = /* @__PURE__ */ new Date(), r = (A, R) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + A, R), l = [], h = [], w = [...Array(6)].map((A, R) => {
      const j = r(R, 6), ht = r(R, 18), xt = r(R + 1, 6), mt = Yl.find((Ft) => St(new Date(Ft.datetime)) === St(j)), ct = (Ft, ne, qt) => {
        const Pt = l.filter((ve) => ve.t >= +Ft && ve.t < +ne);
        if (Pt.length) {
          const ve = {};
          return Pt.forEach((zt) => {
            ve[zt.c] = (ve[zt.c] || 0) + (Zl.has(zt.c) ? 2 : 1);
          }), Object.entries(ve).sort((zt, be) => be[1] - zt[1])[0][0];
        }
        const Et = h.find((ve) => {
          const zt = +new Date(ve.datetime);
          return zt >= +Ft - 3 * oa && zt < +ne && (ve.is_daytime == null || !!ve.is_daytime == !qt);
        });
        if (Et) return Et.condition;
        const he = (mt == null ? void 0 : mt.condition) || "cloudy";
        return qt && he === "sunny" ? "clear-night" : he;
      };
      return { start: +j, end: +xt, day: ct(j, ht, !1), night: ct(ht, xt, !0), hi: Number(mt == null ? void 0 : mt.temperature), lo: Number(mt == null ? void 0 : mt.templow) };
    });
    return { days: w, hours: l, start: w[0].start, end: w[5].end };
  }
  const Kl = (e, r) => {
    const l = e.days.findIndex((w) => r < w.end);
    if (l < 0) return 1;
    const h = e.days[l];
    return Math.max(0, (l + (r - h.start) / (h.end - h.start)) / 6);
  }, $l = (e, r) => {
    const l = Math.max(0, Math.min(0.99999, r)) * 6, h = Math.floor(l), w = e.days[h];
    return w.start + (l - h) * (w.end - w.start);
  };
  function ll(e, r) {
    const l = Math.max(0, e.days.findIndex((ht) => r < ht.end)), h = e.days[l], w = (r - h.start) / (h.end - h.start) >= 0.5;
    let A = w ? h.night : h.day, R = NaN;
    const j = e.hours;
    if (j.length && r >= j[0].t - oa && r <= j[j.length - 1].t + oa) {
      let ht = j.findIndex((ct) => ct.t > r);
      ht < 0 && (ht = j.length);
      const xt = j[Math.max(0, ht - 1)], mt = j[Math.min(j.length - 1, ht)];
      A = xt.c || A, R = mt.t > xt.t ? xt.temp + (mt.temp - xt.temp) * Math.max(0, Math.min(1, (r - xt.t) / (mt.t - xt.t))) : xt.temp;
    }
    if (!Number.isFinite(R)) {
      const ht = [];
      if (e.days.forEach((xt) => {
        Number.isFinite(xt.lo) && ht.push([xt.start - oa, xt.lo]), Number.isFinite(xt.hi) && ht.push([xt.start + 9 * oa, xt.hi]);
      }), ht.length) {
        R = r <= ht[0][0] ? ht[0][1] : ht[ht.length - 1][1];
        for (let xt = 1; xt < ht.length; xt++) if (r <= ht[xt][0] && r > ht[xt - 1][0]) {
          const [mt, ct] = ht[xt - 1], [Ft, ne] = ht[xt];
          R = ct + (ne - ct) * (1 - Math.cos(Math.PI * (r - mt) / (Ft - mt))) / 2;
          break;
        }
      }
    }
    return { cond: w && A === "sunny" ? "clear-night" : A, temp: R, night: w, day: h };
  }
  const _s = (e) => St(new Date(e)) === St(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(e)), $r = /* @__PURE__ */ new Map(), Rd = 900, Xl = 700;
  let gi = null;
  const Qa = typeof ResizeObserver == "function" ? new ResizeObserver((e) => e.forEach((r) => {
    So(r.target.parentElement), r.target.closest("#wxDialog") && s();
  })) : null;
  function So(e, r = performance.now()) {
    const l = e.querySelectorAll("canvas[data-wx-strip]");
    if (!l.length) return;
    const h = Mo(), w = h.days.flatMap((ct) => [{ cond: ct.day, night: !1 }, { cond: ct.night, night: !0 }]), A = w.map((ct) => ct.cond).join(), R = ar(), j = er(), ht = _a(), xt = Number(St(new Date(h.start)).replace(/\D/g, "")) % 9973;
    let mt = !1;
    l.forEach((ct) => {
      var ve;
      const Ft = ct.clientWidth, ne = ct.clientHeight;
      if (!Ft || !ne) return;
      const qt = ct.dataset.wxStrip;
      let Pt = $r.get(qt);
      Pt ? Pt.sig !== A && (Pt.prev = Pt.segs, Pt.sig = A, Pt.segs = w, Pt.t0 = r, Pt.dur = Xl) : $r.set(qt, Pt = { sig: A, segs: w, prev: null, t0: r, dur: Rd });
      const Et = j || ht ? Math.min(1, Math.max(0, (r - Pt.t0) / Pt.dur)) : 1;
      Et < 1 && (mt = !0);
      const he = { width: Ft, height: ne, colors: R.colors, clock: r, ambient: j, seed: xt, reveal: ht ? Et : 1 - Math.pow(1 - Et, 3), prev: Et < 1 ? Pt.prev : null, reduce: ht };
      if (za === "smooth") {
        const zt = Math.min(2, window.devicePixelRatio || 1), be = Math.round(Ft * zt), Re = Math.round(ne * zt);
        ct.width !== be && (ct.width = be), ct.height !== Re && (ct.height = Re);
        const de = ct.getContext("2d");
        if (!de) return;
        de.setTransform(zt, 0, 0, zt, 0, 0), hu(de, w, he);
      } else {
        const zt = fu(w, { ...he, px: 2, oneBit: za === "onebit", ink: R.ink, paper: R.paper });
        ct.width !== zt.w && (ct.width = zt.w), ct.height !== zt.h && (ct.height = zt.h), (ve = ct.getContext("2d")) == null || ve.putImageData(new ImageData(zt.data, zt.w, zt.h), 0, 0);
      }
    }), mt && qo();
  }
  function Jl() {
    const e = i("weatherCard");
    if (!e || e.hidden) return;
    const r = na.weather, l = r && (sa == null ? void 0 : sa[r]);
    if (!l) {
      e.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + Yr("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (r ? "Not available" : "Set up in Settings") + "</div></div></div></div>", ko(e);
      return;
    }
    const h = l.attributes || {}, w = h.temperature_unit || "°", A = (de) => Number.isFinite(Number(de)) ? Math.round(Number(de)) + "°" : "—", R = (h.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", j = Xn[l.state] || (l.state ? l.state.charAt(0).toUpperCase() + l.state.slice(1) : "—"), ht = St(/* @__PURE__ */ new Date()), xt = Yl.slice(0, 7), mt = xt.find((de) => St(new Date(de.datetime)) === ht) || null, ct = xt.filter((de) => St(new Date(de.datetime)) >= ht).slice(0, 6), Ft = /* @__PURE__ */ new Date(), ne = St(new Date(Ft.getFullYear(), Ft.getMonth(), Ft.getDate() + 1)), qt = mt ? "H " + A(mt.temperature) + "&ensp; L " + A(mt.templow) : "", Pt = (de) => {
      const re = St(new Date(de.datetime));
      return re === ht ? "Today" : re === ne ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(de.datetime));
    }, Et = Number.isFinite(Number(h.temperature)) ? Math.round(Number(h.temperature)) : "—", he = (de) => {
      const re = new Date(de.datetime);
      return Math.round((new Date(re.getFullYear(), re.getMonth(), re.getDate()) - new Date(Ft.getFullYear(), Ft.getMonth(), Ft.getDate())) / 864e5);
    }, ve = (de) => (Xn[de] || de || "").toLowerCase(), zt = (de, re) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + he(de) + '" aria-label="' + Yt(Pt(de) + ": " + ve(de.condition) + ", " + A(de.temperature) + " / " + A(de.templow) + ". Open the forecast") + '">' + Yr(de.condition, !1, !1, za, "day" + re) + '<div><div class="activityRowName">' + Yt(Pt(de)) + '</div><div class="activityRowMeta">' + A(de.temperature) + " / " + A(de.templow) + "</div></div></div>", be = () => '<div class="wxStrip"><div class="wxStripDays">' + Mo().days.map((re, ga) => {
      const Ye = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(re.start)) + ": " + ve(re.day) + (ve(re.day) === ve(re.night) ? " all day and night" : ", then " + ve(re.night) + " overnight") + (Number.isFinite(re.hi) ? ". High " + A(re.hi) : "") + (Number.isFinite(re.lo) ? ", low " + A(re.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + ga + '" aria-label="' + Yt(Ye) + '"><span class="wxDayName">' + Yt(_s(re.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + A(re.hi) + '</span><span class="wxLow">' + A(re.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    e.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + Yt("Now in " + R + ": " + Et + "°, " + ve(l.state) + ". Open the forecast") + '"><div class="wxCurrent">' + Yr(l.state, !0, !0, za, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Yt(String(Et)) + '</span><span class="wxUnit">' + Yt(w) + '</span></div><div class="wxPlace">' + Yt(R) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Yt(j) + "</div>" + (qt ? '<div class="wxRange">' + qt + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (ct.length ? sl === "strip" ? be() : '<div class="activityRows wxDays">' + ct.map(zt).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", ko(e);
    const Re = e.querySelector("canvas[data-wx-strip]");
    gi && gi !== Re && (Qa == null || Qa.unobserve(gi)), gi = Re, Re && (Qa == null || Qa.observe(Re), So(e)), qo(), a();
  }
  const Ql = i("weatherCard"), dl = (e) => {
    const r = e.closest("[data-wx-day]");
    if (r) {
      const h = /* @__PURE__ */ new Date();
      cl(+new Date(h.getFullYear(), h.getMonth(), h.getDate() + Number(r.dataset.wxDay), 12), r);
      return;
    }
    const l = e.closest("[data-wx-open]");
    l && cl(Date.now(), l);
  };
  Ql.addEventListener("click", (e) => dl(e.target)), Ql.addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && e.target.matches("[data-wx-day],[data-wx-open]") && (e.preventDefault(), dl(e.target));
  });
  const Va = i("wxDialog"), Jn = i("wxGraph"), jo = i("wxGraphWrap");
  let Ga = Date.now(), zo = null, Es = !1, vi = null;
  function cl(e, r) {
    const l = Mo();
    zo = r || null, Ga = Math.max(l.start, Math.min(l.end - oa, e)), $r.delete("dialog"), mi.delete("scrub"), Va.classList.add("open"), Va.setAttribute("aria-hidden", "false"), a(), Qa == null || Qa.observe(Va.querySelector("canvas[data-wx-strip]")), Jn.focus({ preventScroll: !0 }), qo();
  }
  function t() {
    var e;
    Va.classList.remove("open"), Va.setAttribute("aria-hidden", "true"), Qa == null || Qa.unobserve(Va.querySelector("canvas[data-wx-strip]")), (e = zo == null ? void 0 : zo.focus) == null || e.call(zo, { preventScroll: !0 }), zo = null;
  }
  function a() {
    if (!Va.classList.contains("open")) return;
    const e = Mo();
    i("wxGraphDays").innerHTML = e.days.map((r) => "<span>" + Yt(_s(r.start)) + "</span>").join(""), s(e), o(e), So(Va);
  }
  function o(e = Mo()) {
    const r = ll(e, Ga), l = sa == null ? void 0 : sa[na.weather], h = (l == null ? void 0 : l.attributes) || {}, w = h.temperature_unit || "°", A = Math.abs(Ga - Date.now()) < oa / 2, R = A && l ? l.state : r.cond, j = A && Number.isFinite(Number(h.temperature)) ? Math.round(Number(h.temperature)) : Number.isFinite(r.temp) ? Math.round(r.temp) : "—", ht = Xn[R] || (R ? R.charAt(0).toUpperCase() + R.slice(1) : "—"), xt = A ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(Ga / oa) * oa)), mt = r.day, ct = (Number.isFinite(mt.hi) ? "H " + Math.round(mt.hi) + "°" : "") + (Number.isFinite(mt.lo) ? "&ensp; L " + Math.round(mt.lo) + "°" : "");
    i("wxDialogNow").innerHTML = '<div class="wxCurrent">' + Yr(R, !0, A, za, "scrub", A ? void 0 : r.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Yt(String(j)) + '</span><span class="wxUnit">' + Yt(w) + '</span></div><div class="wxPlace">' + Yt(xt) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Yt(ht) + "</div>" + (ct ? '<div class="wxRange">' + ct + "</div>" : "") + "</div>", ko(i("wxDialogNow")), Jn.setAttribute("aria-valuenow", String(Math.round((Ga - e.start) / oa))), Jn.setAttribute("aria-valuetext", xt + ", " + ht.toLowerCase() + ", " + j + "°"), c(e), qo();
  }
  function s(e = Mo()) {
    const r = i("wxGraphLine"), l = jo.clientWidth, h = jo.clientHeight;
    if (!l || !h) return;
    const w = [];
    for (let Et = e.start; Et <= e.end; Et += oa) {
      const he = ll(e, Et).temp;
      Number.isFinite(he) && w.push([Kl(e, Et) * l, he]);
    }
    if (r.setAttribute("viewBox", "0 0 " + l + " " + h), w.length < 2) {
      r.innerHTML = '<g id="wxCursorMark"></g>', vi = null, c(e);
      return;
    }
    const A = w.map((Et) => Et[1]), R = Math.min(...A), j = Math.max(...A), ht = Math.max(4, j - R), xt = za !== "smooth", mt = (Et) => xt ? Math.round(Et / 2) * 2 : Math.round(Et * 10) / 10;
    vi = (Et) => h * 0.84 - (Et - R) / ht * h * 0.62;
    const ct = ar(), Ft = za === "onebit" ? ct.paper : "#ffffff", ne = za === "onebit" ? ct.ink : "rgba(0,0,0,.28)", qt = "M" + w.map((Et) => mt(Et[0]) + " " + mt(vi(Et[1]))).join(" L"), Pt = (Et, he) => {
      const ve = w.find((zt) => zt[1] === Et);
      return '<text class="wxLineLabel" x="' + mt(Math.min(l - 14, Math.max(14, ve[0]))) + '" y="' + mt(vi(Et) + (he ? 18 : -10)) + '" fill="' + Ft + '" stroke="' + ne + '">' + Math.round(Et) + "°</text>";
    };
    r.setAttribute("shape-rendering", xt ? "crispEdges" : "auto"), r.innerHTML = '<path d="' + qt + '" fill="none" stroke="' + ne + '" stroke-width="' + (xt ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + qt + '" fill="none" stroke="' + Ft + '" stroke-width="2" stroke-linejoin="round"/>' + Pt(j, !1) + Pt(R, !0) + '<g id="wxCursorMark"></g>', c(e);
  }
  function c(e = Mo()) {
    const r = i("wxGraphLine").querySelector("#wxCursorMark");
    if (!r) return;
    const l = jo.clientWidth, h = jo.clientHeight, w = za !== "smooth", A = (Ft) => w ? Math.round(Ft / 2) * 2 : Ft, R = A(Kl(e, Ga) * l), j = ll(e, Ga).temp, ht = ar(), xt = za === "onebit" ? ht.paper : "#ffffff", mt = za === "onebit" ? ht.ink : "rgba(0,0,0,.28)", ct = vi && Number.isFinite(j) ? A(vi(j)) : null;
    r.innerHTML = '<rect x="' + (R - 2) + '" y="0" width="4" height="' + h + '" fill="' + mt + '"/><rect x="' + (R - 1) + '" y="0" width="2" height="' + h + '" fill="' + xt + '"/>' + (ct == null ? "" : w ? '<rect x="' + (R - 5) + '" y="' + (ct - 5) + '" width="10" height="10" fill="' + xt + '" stroke="' + mt + '" stroke-width="2"/>' : '<circle cx="' + R + '" cy="' + ct + '" r="6" fill="' + xt + '" stroke="' + mt + '" stroke-width="2"/>');
  }
  const g = (e) => {
    const r = jo.getBoundingClientRect();
    r.width && (Ga = $l(Mo(), (e - r.left) / r.width), o());
  };
  Jn.addEventListener("pointerdown", (e) => {
    if (e.button === 0) {
      Es = !0;
      try {
        Jn.setPointerCapture(e.pointerId);
      } catch {
      }
      g(e.clientX);
    }
  }), Jn.addEventListener("pointermove", (e) => {
    Es && g(e.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((e) => Jn.addEventListener(e, () => {
    Es = !1;
  })), Jn.addEventListener("keydown", (e) => {
    const r = Mo(), l = { ArrowLeft: -oa, ArrowRight: oa, ArrowDown: -oa, ArrowUp: oa, PageUp: -24 * oa, PageDown: 24 * oa }[e.key];
    l ? (e.preventDefault(), Ga = Math.max(r.start, Math.min(r.end - oa, Math.round(Ga / oa) * oa + l)), o(r)) : (e.key === "Home" || e.key === "End") && (e.preventDefault(), Ga = e.key === "Home" ? r.start : r.end - oa, o(r));
  }), i("wxDialogClose").addEventListener("click", t), Va.addEventListener("click", (e) => {
    e.target === Va && t();
  }), Va.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), t());
  }), Jl(), (Ue = (Ra = window.matchMedia) == null ? void 0 : (Qt = Ra.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || Ue.call(Qt, "change", () => {
    qo(), ko(n);
  }), qo();
  const p = i("tvNav");
  d.fullscreenSupported || (p.hidden = !0), p.addEventListener("click", () => d.toggleFullscreen()), n.addEventListener("keydown", (e) => {
    !lt.workout.classList.contains("active") || Fi.classList.contains("active") || e.target.closest("input,select,textarea,.holdEnd") || (e.key === "MediaPlayPause" || e.key === " " && !e.target.closest("button") ? (e.preventDefault(), Br.click()) : e.key === "MediaTrackNext" ? (e.preventDefault(), i("skipExercise").click()) : e.key === "MediaTrackPrevious" && (e.preventDefault(), i("restartSegment").click()));
  }), n.querySelectorAll("[data-rounds-step]").forEach((e) => e.addEventListener("click", () => {
    const r = Math.max(1, Math.min(10, (Number(ce.value) || 1) + Number(e.dataset.roundsStep)));
    String(r) !== ce.value && (ce.value = r, ce.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [D, _, H, ce].forEach((e) => e.addEventListener("input", () => {
    const r = ie[te];
    r && (r.total = Number(D.value), r.work = Number(_.value), r.rest = Number(H.value)), _e();
  })), J.addEventListener("click", Ir), Vt.addEventListener("click", () => C("settings")), i("settingsBack").addEventListener("click", Ir), Br.addEventListener("click", () => vo(!Ua)), ca(te), is(), Cr(), Fn(), i("healthHelpOpen").addEventListener("click", () => n.querySelector(".tab[data-pane=helpPane]").click()), Wr(i("resetStats"), i("resetStatsFill"), 1500, () => {
    we.history = [], we.checkins = [], Zn = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    nn(), Jt(), Cr(), is(), Fn(), pn(), P("Stats reset");
  });
  const v = i("morningTime"), k = i("eveningTime"), F = i("checkinAutoOpen");
  v.value = Zt().morning, k.value = Zt().evening, F.classList.toggle("on", ge().checkinAutoOpen !== !1), [["morningTime", v], ["eveningTime", k]].forEach(([e, r]) => r.addEventListener("change", () => {
    r.value && (Ja(e, r.value), pn());
  })), F.addEventListener("click", () => {
    const e = ge().checkinAutoOpen === !1;
    F.classList.toggle("on", e), Ja("checkinAutoOpen", e);
  }), setTimeout(Pa, 800);
  const N = i("checkinNotify"), I = i("checkinNotifyTarget"), Q = i("checkinNotifyStatus"), it = Q.textContent;
  function dt() {
    const e = d.notifyServices(), r = e.filter((w) => w.startsWith("mobile_app_")), l = r.length ? r : e, h = (w) => w.replace(/^mobile_app_/, "").replace(/_/g, " ");
    I.innerHTML = l.map((w) => '<option value="' + Yt(w) + '">' + Yt(h(w)) + "</option>").join(""), !ge().notifyTarget && l[0] && (ge().notifyTarget = l[0]), I.value = ge().notifyTarget || "";
  }
  function U() {
    const e = !!ge().notifyOn;
    N.classList.toggle("on", e), i("checkinNotifyTargetRow").hidden = !e;
    const r = Zt();
    Q.textContent = e ? "Sends at " + r.morning + " and " + r.evening : it;
  }
  async function ut() {
    const e = !!ge().notifyOn;
    try {
      return await d.setReminderAutomation(e ? { target: ge().notifyTarget, times: Zt() } : null), !0;
    } catch {
      return P("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  N.addEventListener("click", async () => {
    const e = !ge().notifyOn;
    if (e && (dt(), !ge().notifyTarget)) {
      P("Install the Companion app on your phone first");
      return;
    }
    ge().notifyOn = e, U(), await ut() ? (nn(), P(e ? "Check-in notifications on" : "Check-in notifications off")) : (ge().notifyOn = !e, U());
  }), I.addEventListener("change", () => {
    Ja("notifyTarget", I.value), ge().notifyOn && ut();
  }), [v, k].forEach((e) => e.addEventListener("change", () => {
    U(), ge().notifyOn && ut();
  })), dt(), U();
  let W = null;
  function wt() {
    W || (W = setTimeout(() => {
      W = null, Fn();
    }, 3e4));
  }
  return {
    updateStates(e) {
      var l, h;
      const r = !sa || sa[na.weather] !== e[na.weather] || ((l = sa["sun.sun"]) == null ? void 0 : l.state) !== ((h = e["sun.sun"]) == null ? void 0 : h.state);
      sa = e, Ol(e), hi(e), r && Jl(), Date.now() - ql > 60 * 60 * 1e3 && jl(), wt();
    },
    applyRemoteData(e) {
      if (e && (Array.isArray(e.history) && (we.history = e.history, Jt()), Array.isArray(e.history) && Fn(), Array.isArray(e.checkins) && (we.checkins = e.checkins.map(fr), pn(), is(), Cr(), Jt(), Fn()), e.profiles && !Wa.classList.contains("open") && !un)) {
        const r = ur(e);
        Object.keys(ie).forEach((l) => delete ie[l]), Object.assign(ie, r.profiles), we.order = r.order, ie[te] || (te = we.order[0]), eo(), ca(te);
      }
    },
    suspend() {
      y = !1;
    },
    resume() {
      y || (y = !0, zi || (zi = requestAnimationFrame(ps)), Vi || (Vi = requestAnimationFrame(us)), qo(), Xi(n.querySelector(".tab.active"), !1));
    }
  };
}
const vu = /* @__PURE__ */ new Set(["roaming", "test_area"]), bu = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window" },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62 }
}, ul = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, Ta = "made_up_", ir = (n) => {
  var d;
  return (d = String(n).split(".")[1]) == null ? void 0 : d.startsWith(Ta);
}, nd = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function uc(n) {
  const d = n.getHours() + n.getMinutes() / 60, i = Math.max(0, Math.sin((d - 7) / 13 * Math.PI));
  return 2.4 * i * i;
}
function wu(n) {
  const d = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  let i = 0;
  for (let f = +d; f < +n; f += 10 * 60 * 1e3) i += uc(new Date(f)) / 6;
  return i;
}
function bc(n = /* @__PURE__ */ new Date()) {
  const d = [];
  for (let i = 0; i <= 96; i++) {
    const f = +n - (96 - i) * 15 * 60 * 1e3;
    d.push([f, uc(new Date(f))]);
  }
  return d;
}
function xu({ onChange: n }) {
  const d = {}, i = {}, f = (Y, z, ft, pt) => {
    d[Y] = { entity_id: Y, state: ft, attributes: pt, last_changed: new Date(Date.now() - 18e6).toISOString() }, i[Y] = z;
  }, b = (Y, z, ft) => {
    const pt = d[Y], yt = z ?? pt.state;
    d[Y] = { ...pt, state: yt, attributes: { ...pt.attributes, ...ft }, last_changed: yt === pt.state ? pt.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, y = (Y, z, ft, pt) => f("binary_sensor." + Ta + (Y ? Y + "_" : "") + nd(z), Y, pt ? "on" : "off", { friendly_name: z, device_class: ft });
  Object.entries(bu).forEach(([Y, z]) => {
    if (z.temperature != null && f("sensor." + Ta + Y + "_temperature", Y, String(z.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), z.humidity != null && f("sensor." + Ta + Y + "_humidity", Y, String(z.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), z.vacuum && f("vacuum." + Ta + "robot", Y, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), z.climate && f("climate." + Ta + Y, Y, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: z.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), z.cover) {
      const [ft, pt, yt, et] = z.cover;
      f("cover." + Ta + Y + "_" + nd(ft), Y, yt ? "open" : "closed", { friendly_name: ft, device_class: pt, current_position: yt, ...et != null ? { current_tilt_position: et } : {} });
    }
    if (z.humidifier && f("humidifier." + Ta + Y, Y, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: z.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), z.solar && (f("sensor." + Ta + Y + "_solar_power", Y, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), f("sensor." + Ta + Y + "_solar_today", Y, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), z.valve && f("valve." + Ta + Y + "_" + nd(z.valve), Y, "closed", { friendly_name: z.valve, device_class: "water" }), z.door && y(Y, z.door, "door", z.doorOpen), z.window && y(Y, z.window, "window", !1), z.motion && y(Y, z.motion, "motion", !1), z.plant) {
      const [ft, pt, yt, et, ot] = z.plant, L = Ta + nd(ft), G = (X, lt, J, Vt, C) => f("sensor." + L + "_" + X, Y, String(J), { friendly_name: lt, device_class: C, state_class: "measurement", unit_of_measurement: Vt, plant_low: J < ul[X][0], plant_high: J > ul[X][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[X] });
      G("moisture", "Moisture", pt, "%", "moisture"), G("light", "Light", yt, "lx", "illuminance"), G("temperature", "Temperature", et, "°C", "temperature"), G("fertility", "Fertility", ot, "µS/cm", "conductivity");
      const Lt = Object.entries({ moisture: pt, light: yt, temperature: et, fertility: ot }).filter(([X, lt]) => lt < ul[X][0] || lt > ul[X][1]).map(([X, lt]) => X + (lt < ul[X][0] ? " low" : " high"));
      f("plant." + L, Y, Lt.length ? "problem" : "ok", { friendly_name: ft, moisture: pt, brightness: yt, temperature: et, conductivity: ot, problem: Lt.join(", ") || "none" });
    }
  }), f("alarm_control_panel." + Ta + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), y(null, "Front door", "door", !1), y(null, "Smoke alarm", "smoke", !1), f("sensor." + Ta + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const M = {}, E = {};
  let S = null;
  function B() {
    const Y = /* @__PURE__ */ new Date();
    Object.keys(d).forEach((z) => {
      z.endsWith("_solar_power") && (d[z] = { ...d[z], state: uc(Y).toFixed(2) }), z.endsWith("_solar_today") && (d[z] = { ...d[z], state: wu(Y).toFixed(1) });
    });
  }
  B();
  let Mt = 0;
  function gt() {
    let Y = !1;
    const z = ++Mt % 10 === 0, ft = (et, ot, L) => {
      b(et, ot, L), Y = !0;
    };
    Object.entries(M).forEach(([et, ot]) => {
      const L = d[et].attributes.current_position, G = L < ot ? Math.min(ot, L + 10) : Math.max(ot, L - 10);
      G === ot && delete M[et], ft(et, G === ot ? G === 0 ? "closed" : "open" : ot > L ? "opening" : "closing", { current_position: G });
    }), Object.entries(E).forEach(([et, ot]) => {
      const L = d[et].attributes.current_tilt_position, G = L < ot ? Math.min(ot, L + 25) : Math.max(ot, L - 25);
      G === ot && delete E[et], ft(et, null, { current_tilt_position: G });
    }), Object.keys(d).filter((et) => et.startsWith("climate.")).forEach((et) => {
      const ot = d[et], L = ot.attributes, G = L.current_temperature, Lt = (ot.state === "heat" || ot.state === "auto") && G < L.temperature - 0.05, X = (ot.state === "cool" || ot.state === "auto") && G > L.temperature + 0.05, lt = ot.state === "off" ? "off" : Lt ? "heating" : X ? "cooling" : "idle", J = z ? Math.round((G + (Lt ? 0.1 : X ? -0.1 : 0)) * 10) / 10 : G;
      (J !== G || lt !== L.hvac_action) && ft(et, null, { current_temperature: J, hvac_action: lt });
    }), Object.keys(d).filter((et) => et.startsWith("humidifier.")).forEach((et) => {
      const ot = d[et], L = ot.attributes, G = L.current_humidity, Lt = ot.state === "on" && G < L.humidity, X = Lt && z ? G + 1 : G, lt = ot.state !== "on" ? "off" : Lt ? "humidifying" : "idle";
      if (X !== G || lt !== L.action) {
        ft(et, null, { current_humidity: X, action: lt });
        const J = "sensor." + Ta + i[et] + "_humidity";
        d[J] && ft(J, String(X));
      }
    });
    const pt = d["vacuum." + Ta + "robot"], yt = pt.attributes;
    pt.state === "cleaning" && z && ft(pt.entity_id, null, { battery_level: Math.max(5, yt.battery_level - 1) }), pt.state === "returning" && ft(pt.entity_id, "docked", {}), pt.state === "docked" && yt.battery_level < 100 && ft(pt.entity_id, null, { battery_level: Math.min(100, yt.battery_level + 2) }), S && Date.now() - S.at > 5e3 && (ft("alarm_control_panel." + Ta + "house", "armed_" + S.mode, {}), S = null), Y && n();
  }
  const $ = setInterval(gt, 1e3), at = setInterval(() => {
    B(), n();
  }, 60 * 1e3);
  function st(Y, z, ft) {
    const pt = ft == null ? void 0 : ft.entity_id;
    if (!d[pt]) return !1;
    const yt = d[pt], et = yt.attributes, ot = (L, G) => b(pt, L, G);
    if (Y === "climate" && (z === "set_temperature" && ot(null, { temperature: Math.max(et.min_temp, Math.min(et.max_temp, ft.temperature)) }), z === "set_hvac_mode" && ot(ft.hvac_mode, ft.hvac_mode === "off" ? { hvac_action: "off" } : {}), z === "toggle" && ot(yt.state === "off" ? "heat" : "off", yt.state === "off" ? {} : { hvac_action: "off" })), Y === "cover") {
      const L = z === "open_cover" ? 100 : z === "close_cover" ? 0 : z === "set_cover_position" ? ft.position : z === "toggle" ? et.current_position > 0 ? 0 : 100 : null;
      z === "stop_cover" && (delete M[pt], delete E[pt], ot(et.current_position === 0 ? "closed" : "open")), L != null && L !== et.current_position && (M[pt] = L, ot(L > et.current_position ? "opening" : "closing"));
      const G = z === "open_cover_tilt" ? 100 : z === "close_cover_tilt" ? 0 : z === "set_cover_tilt_position" ? ft.tilt_position : null;
      z === "stop_cover_tilt" && delete E[pt], G != null && et.current_tilt_position != null && G !== et.current_tilt_position && (E[pt] = G);
    }
    if (Y === "humidifier" && (z === "set_humidity" && ot(null, { humidity: Math.max(et.min_humidity, Math.min(et.max_humidity, ft.humidity)) }), z === "set_mode" && ot(null, { mode: ft.mode }), z === "turn_on" || z === "turn_off" || z === "toggle")) {
      const L = z === "turn_on" || z === "toggle" && yt.state !== "on";
      ot(L ? "on" : "off", { action: L ? "idle" : "off" });
    }
    if (Y === "vacuum" && (z === "start" && ot("cleaning", { rooms: ft.rooms || et.rooms }), z === "pause" && ot("paused"), z === "return_to_base" && ot("returning", { rooms: [] }), z === "locate" && ot(null, { located: Date.now() }), z === "set_rooms" && ot(null, { rooms: ft.rooms })), Y === "valve") {
      const L = z === "open_valve" || z === "toggle" && yt.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(z) && ot(L ? "open" : "closed");
    }
    if (Y === "alarm_control_panel") {
      z === "alarm_disarm" && (S = null, ot("disarmed", { changed_by: "Matt" }));
      const L = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[z];
      L && (S = { mode: L, at: Date.now() }, ot("arming", { changed_by: "Matt" }));
    }
    return n(), !0;
  }
  function nt(Y) {
    const z = (Y == null ? void 0 : Y.states) || {}, ft = (Y == null ? void 0 : Y.entities) || {}, pt = (Y == null ? void 0 : Y.devices) || {}, yt = (_) => {
      var bt;
      const H = ft[_];
      return H && (H.area_id || H.device_id && ((bt = pt[H.device_id]) == null ? void 0 : bt.area_id)) || null;
    }, et = (_) => {
      const H = ft[_];
      return z[_] && z[_].state !== "unavailable" && !(H != null && H.hidden) && !(H != null && H.entity_category);
    }, ot = {};
    Object.keys(z).forEach((_) => {
      const H = yt(_);
      H && et(_) && (ot[H] || (ot[H] = [])).push(_);
    });
    const L = { ...z, ...d }, G = (_) => {
      var H, bt;
      return (bt = (H = L[_]) == null ? void 0 : H.attributes) == null ? void 0 : bt.device_class;
    }, Lt = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], X = Object.keys(z).filter((_) => _.startsWith("vacuum.") && et(_)), lt = Object.values((Y == null ? void 0 : Y.areas) || {}).filter((_) => !vu.has(_.area_id)).map((_) => {
      const H = _.area_id, bt = ot[H] || [], vt = (Ht) => bt.filter((me) => me.startsWith(Ht + ".")), V = (Ht) => vt("sensor").filter((me) => G(me) === Ht), kt = (Ht) => Object.keys(d).filter((me) => i[me] === H && Ht(me)), Tt = (Ht, me) => Ht.length ? Ht : kt(me), ee = Tt(V("temperature"), (Ht) => Ht.endsWith(H + "_temperature")), ce = Tt(V("humidity"), (Ht) => Ht.endsWith(H + "_humidity")), ta = V("power").filter((Ht) => /^(W|kW)$/.test(L[Ht].attributes.unit_of_measurement || "")), Se = vt("binary_sensor").filter((Ht) => G(Ht) === "moisture"), Ci = Tt(vt("plant"), (Ht) => Ht.startsWith("plant.")).map((Ht) => ({ id: Ht, readings: kt((me) => me.startsWith("sensor." + Ht.split(".")[1] + "_")) })), La = [...vt("binary_sensor").filter((Ht) => Lt.includes(G(Ht))), ...kt((Ht) => Ht.startsWith("binary_sensor."))];
      return {
        id: H,
        name: _.name,
        icon: _.icon,
        readings: [...ee.slice(0, 1), ...ce.slice(0, 1), ...Se],
        power: ta.length ? ta.reduce((Ht, me) => Ht + Number(L[me].state) * (L[me].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: vt("switch"),
        lights: vt("light"),
        actions: [...vt("light"), ...Tt(vt("climate"), (Ht) => Ht.startsWith("climate.")), ...Tt(vt("cover"), (Ht) => Ht.startsWith("cover.")), ...Tt(vt("humidifier"), (Ht) => Ht.startsWith("humidifier.")), ...Tt(vt("valve"), (Ht) => Ht.startsWith("valve.")), ...vt("media_player"), ...vt("vacuum"), ...X.length ? [] : kt((Ht) => Ht.startsWith("vacuum."))],
        solar: kt((Ht) => Ht.includes("_solar_")),
        plants: Ci,
        openings: La,
        alerts: [...Se, ...La].filter((Ht) => {
          var me;
          return ((me = L[Ht]) == null ? void 0 : me.state) === "on";
        })
      };
    }).filter((_) => _.readings.length || _.plugs.length || _.actions.length || _.solar.length || _.plants.length), J = Object.keys(z).find((_) => /^sensor\..*(p1_meter_power|grid_power)$/.test(_) && z[_].state !== "unavailable") || null, Vt = (_) => Object.keys(z).filter((H) => H.startsWith(_ + ".") && et(H)), C = Vt("alarm_control_panel"), D = X.length ? X : ["vacuum." + Ta + "robot"];
    return {
      states: L,
      rooms: lt,
      grid: J,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (_) => d[_] ? i[_] : yt(_),
      vacuums: D,
      homeVacuums: D.filter((_) => !lt.some((H) => H.actions.includes(_))),
      security: {
        alarms: C.length ? C : ["alarm_control_panel." + Ta + "house"],
        locks: Vt("lock"),
        openings: [...Object.keys(d).filter((_) => _.startsWith("binary_sensor.")), "sensor." + Ta + "doorbell"]
      }
    };
  }
  return { model: nt, call: st, stop() {
    clearInterval($), clearInterval(at);
  } };
}
const ki = (n) => n < 0 ? 0 : n > 1 ? 1 : n, ic = (n) => {
  const d = String(n || "#000000").trim().replace("#", ""), i = d.length === 3 ? d.split("").map((f) => f + f).join("") : d;
  return [0, 2, 4].map((f) => parseInt(i.slice(f, f + 2), 16) || 0);
}, yu = (n) => "#" + n.map((d) => Math.round(Math.max(0, Math.min(255, d))).toString(16).padStart(2, "0")).join(""), wc = {}, to = (n, d, i) => {
  const f = n + d + i;
  return wc[f] || (wc[f] = yu(ic(n).map((b, y) => b + (ic(d)[y] - b) * i)));
}, xc = {}, fd = (n) => xc[n] || (xc[n] = ic(n));
function ku(n) {
  const d = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return d.partly = [to(d.clear[0], d.cloudy[0], 0.12), to(d.clear[1], d.cloudy[1], 0.12)], d.storm = [to(d.rain[0], "#000000", 0.22), to(d.rain[1], "#000000", 0.22)], d;
}
const Mu = [
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
], xi = (n, d) => (Mu[(d & 7) * 8 + (n & 7)] + 0.5) / 64, wp = 1, xp = 2, yp = 3, kp = 4, Ps = 5, gd = 6, rc = 7, Mp = 8, yc = (n, d) => d <= 0.6665 && ((n - 0.5) * (n - 0.5) + (d - 0.2877) * (d - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (d - 0.416) * (d - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (d - 0.458) * (d - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && d >= 0.416), Su = (n, d, i) => {
  let f = !1;
  for (let b = 0, y = n.length - 1; b < n.length; y = b++) {
    const M = n[b], E = n[y];
    M[1] > i != E[1] > i && d < (E[0] - M[0]) * (i - M[1]) / (E[1] - M[1]) + M[0] && (f = !f);
  }
  return f;
};
function Cu(n, d, i, f, { oneBit: b, ink: y, paper: M, snowInk: E }) {
  const S = new Uint8ClampedArray(i * f * 4), B = fd(y), Mt = fd(M);
  for (let gt = 0; gt < f; gt++) for (let $ = 0; $ < i; $++) {
    const at = gt * i + $, st = d[at];
    if (n[at] == null) continue;
    let nt = fd(n[at]);
    if (b) {
      let Y;
      st === kp || st === Mp ? Y = !0 : st === Ps ? Y = E : st === rc || st === gd ? Y = !1 : Y = Math.round((0.2126 * nt[0] + 0.7152 * nt[1] + 0.0722 * nt[2]) / 255 * 4) / 4 <= xi($, gt), (st === wp || st === xp || st === yp || st === gd) && ($ > 0 && d[at - 1] !== st || $ < i - 1 && d[at + 1] !== st || gt > 0 && d[at - i] !== st || gt < f - 1 && d[at + i] !== st) && (Y = !0), nt = Y ? B : Mt;
    }
    S[at * 4] = nt[0], S[at * 4 + 1] = nt[1], S[at * 4 + 2] = nt[2], S[at * 4 + 3] = 255;
  }
  return { w: i, h: f, data: S };
}
const Tu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Lu = (n) => xd(n, !1).split("/")[0], Id = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let d = Math.imul(n ^ n >>> 15, 1 | n);
  return d = d + Math.imul(d ^ d >>> 7, 61 | d) ^ d, ((d ^ d >>> 14) >>> 0) / 4294967296;
}, Au = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", _u = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Eu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Du = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Bu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Ru = [".##", "##.", ".#.", "#.."];
function Sp(n, { width: d, height: i, colors: f, wave: b = 0.38, soft: y = 6, glow: M = 0.6, columns: E = 6 }) {
  const S = { ...yn, dawn: "#e5a77e", ...f }, B = ku(S), Mt = d, gt = i, $ = Mt / E, at = $ / 2, st = Math.PI * 2, nt = n.length ? n : [{ cond: "cloudy", night: !1 }], Y = [...Array(E * 2)].map((yt, et) => {
    const ot = nt[Math.min(et, nt.length - 1)], L = Lu(ot.cond), G = et % 2 === 1;
    return { cond: ot.cond, k: L, night: G, sky: B[L][G ? 1 : 0], cover: Tu[L] };
  }), z = (yt) => gt * (0.5 - b * Math.cos(st * (yt / $ - 0.25)));
  return { C: S, S: Y, W: Mt, H: gt, cw: $, sw: at, TAU: st, yb: z, side: (yt, et, ot) => {
    const L = (yt ? z(et) - ot : ot - z(et)) / Math.max(3, y * 1.4) + 0.5;
    return L <= 0 ? 0 : L >= 1 ? 1 : L;
  }, glowAt: (yt) => {
    const et = ((yt / $ - 0.25) % 1 + 1) % 1, ot = Math.max(0, Math.min(E - 1, Math.round(yt / $ - 0.25))), L = Math.max(0, Math.min(E - 1, Math.round(yt / $ - 0.75))), G = 1 - (Y[2 * ot].cover + Y[2 * L + 1].cover) / 2, Lt = Math.sin(Math.PI * Math.min(1, Math.max(0, z(yt) / gt)));
    return { c: et < 0.5 ? S.dusk : S.dawn, a: M * (0.2 + 0.8 * G) * Lt * Lt };
  }, soft: y, tw: $ * 0.3, sy: gt / 90 };
}
function Cp(n, { clock: d = 0, ambient: i = !1, seed: f = 1 }) {
  const { S: b, sw: y, side: M, C: E, TAU: S, sy: B, H: Mt } = n, gt = d, $ = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  b.forEach((nt, Y) => {
    const z = Id(f * 977 + Y * 131 + 7), ft = (Y + 0.5) * y, pt = nt.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[nt.k] : 0;
    for (let yt = 0; yt < pt; yt++) {
      const et = ft + (z() - 0.5) * y * 1.6, ot = (6 + z() * 76) * B, L = z() < 0.35, G = 1.8 + z() * 1.6, Lt = M(!0, et, ot) * (L ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(S * gt / 2600 + yt * 1.7 + Y) : 1);
      Lt >= 0.03 && $.stars.push({ x: et, y: ot, big: L, size: G, o: Lt });
    }
    if (!nt.night && (nt.k === "clear" || nt.k === "partly")) {
      const yt = ft + (z() - 0.5) * y * 0.3, et = Math.min(15, y * 0.29);
      $.suns.push({ x: yt, y: 32 * B, rad: et, halo: et * 2.8 * (i ? 1 + 0.07 * Math.sin(S * gt / 3600 + Y) : 1) });
    }
    if (nt.night && (nt.k === "clear" || nt.k === "partly")) {
      const yt = Math.min(0.78, y * 0.55 / 34), et = ft - 23 * yt + (z() - 0.5) * y * 0.2;
      $.moons.push({ x: et + 23 * yt, y: (4 + (i ? 0.8 * Math.sin(S * gt / 5200 + Y) : 0)) * B + 23 * yt, d: 46 * yt });
    }
  });
  const at = Math.max(56, Math.min(100, Mt * 0.45)), st = Math.max(1, y / (at * 2.4));
  return b.forEach((nt, Y) => {
    const z = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[nt.k];
    if (!z) return;
    const ft = nt.k === "partly" ? 1 : Math.round(z * st), pt = Id(f * 577 + Y * 71 + 3), yt = (Y + 0.5) * y, et = nt.k === "rain" || nt.k === "storm" || nt.night ? E.cloudNight : E.cloudDay, ot = nt.night ? 0.82 : nt.k === "storm" ? 0.75 : 1;
    for (let L = 0; L < ft; L++) {
      const G = at / 46 * (nt.k === "partly" ? 1 : 0.8 + pt() * 0.4), Lt = yt + (nt.k === "partly" ? y * 0.12 : ((L + 0.5) / ft - 0.5) * y * 0.95 + (pt() - 0.5) * y * 0.5 / ft), X = (nt.k === "partly" ? 40 : 6 + pt() * 26) * B, lt = i ? 2.5 * Math.sin(S * gt / 9e3 + Y * 1.3 + L * 2.1) : 0, J = i ? 0.9 * Math.sin(S * gt / 6100 + Y + L) : 0;
      $.clouds.push({ x: Lt - 23 * G + lt, y: X - 15.33 * G + J, w: 46 * G, h: 30.66 * G, fill: et, o: ot * (ft > 1 && L === 0 ? 0.85 : 1) });
    }
  }), b.forEach((nt, Y) => {
    const z = Id(f * 313 + Y * 29 + 11), ft = (Y + 0.5) * y, pt = nt.cond === "pouring" ? 16 : nt.cond === "rainy" || nt.cond === "hail" ? 9 : nt.cond === "lightning-rainy" ? 12 : nt.cond === "snowy-rainy" ? 5 : 0;
    for (let et = 0; et < pt; et++) {
      let ot = ft + (z() - 0.5) * y * 1.05, L = 44 + z() * 36, G = 1;
      if (i) {
        const X = ((L - 44 + gt * 0.04) % 36 + 36) % 36;
        ot -= 0.21 * (X - (L - 44)), L = 44 + X, G = Math.min(1, X / 6, (36 - X) / 6);
      }
      L *= B;
      const Lt = M(nt.night, ot, L) * G;
      Lt >= 0.05 && $.drops.push({ x: ot, y: L, o: Lt });
    }
    const yt = nt.cond === "snowy" ? 11 : nt.cond === "snowy-rainy" ? 6 : 0;
    for (let et = 0; et < yt; et++) {
      let ot = ft + (z() - 0.5) * y * 1.05, L = 40 + z() * 44, G = 1;
      if (i) {
        const X = ((L - 40 + gt * 9e-3) % 44 + 44) % 44;
        L = 40 + X, ot += 1.6 * Math.sin(S * gt / 2800 + et * 1.9 + Y), G = Math.min(1, X / 6, (44 - X) / 6);
      }
      L *= B;
      const Lt = M(nt.night, ot, L) * G;
      Lt >= 0.05 && $.flakes.push({ x: ot, y: L, o: Lt });
    }
    if (nt.k === "fog") {
      const et = nt.night ? "#c8ccd6" : "#ffffff", ot = nt.night ? 0.28 : 0.62, L = i ? 4 * Math.sin(S * gt / 8e3 + Y) : 0;
      for (let G = 0; G < 4; G++) $.fogs.push({ x: ft - y * 0.75 + G % 2 * y * 0.18 + (G % 2 ? L : -L), y: (30 + G * 13) * B, w: y * 1.3, c: et, a: ot });
    }
    if (nt.k === "storm") {
      const et = (gt / 3400 + Y * 0.37) % 1;
      $.bolts.push({ x: ft + (z() - 0.5) * y * 0.3 - 5, y: 36 * B, o: i && !(et < 0.05 || et > 0.09 && et < 0.12) ? 0.8 : 1 });
    }
  }), $;
}
function Nu(n, d, i, f, b, y, M, E) {
  const { S, C: B, cw: Mt, yb: gt, glowAt: $, soft: at, tw: st, sy: nt } = n, Y = new Array(i * f), z = new Uint8Array(i * f), ft = new Uint8Array(i * f), pt = (C, D, _, H, bt) => {
    _ == null || C < 0 || D < 0 || C >= i || D >= f || (H >= 1 || H > xi(C + 5, D + 3)) && (Y[D * i + C] = _, z[D * i + C] = bt);
  }, yt = (C, D, _, H) => {
    for (let bt = Math.max(0, Math.floor(D - _) - 1); bt <= Math.min(f - 1, D + _ + 1); bt++) for (let vt = Math.max(0, Math.floor(C - _) - 1); vt <= Math.min(i - 1, C + _ + 1); vt++) H(vt, bt, vt + 0.5 - C, bt + 0.5 - D);
  }, et = (C, D, _) => {
    for (let bt = 0; bt < C.length - 1; bt++) {
      const vt = (bt + D) * Mt;
      if (_ < vt - st / 2) return [C[bt], C[bt], 0];
      if (_ <= vt + st / 2) return [C[bt], C[bt + 1], (_ - vt + st / 2) / st];
    }
    const H = C[C.length - 1];
    return [H, H, 0];
  }, ot = S.filter((C) => !C.night).map((C) => C.sky), L = S.filter((C) => C.night).map((C) => C.sky), G = at / y, Lt = 16 * nt / y;
  for (let C = 0; C < i; C++) {
    const D = (C + 0.5) * b, _ = gt(D) / y, H = et(ot, 0.75, D), bt = et(L, 1.25, D), vt = $(D);
    for (let V = 0; V < f; V++) {
      const kt = xi(C, V), Tt = V + 0.5 - _, ee = (G > 0.01 ? ki(0.5 + Tt / G) : Tt > 0 ? 1 : 0) > kt;
      let ce = ee ? H[2] > kt ? H[1] : H[0] : bt[2] > kt ? bt[1] : bt[0];
      (ee ? ki(((V + 0.5) / f - 0.45) / 0.55) * 0.7 : ki(1 - (V + 0.5) / (f * 0.55)) * 0.7) > xi(C + 2, V + 5) && (ce = ee ? to(ce, "#ffffff", 0.18) : to(ce, "#000000", 0.25)), ee && Tt >= 0 && Tt < Lt && vt.a * 1.3 * (1 - Tt / Lt) > xi(C + 6, V + 1) && (ce = vt.c), Y[V * i + C] = ce, ft[V * i + C] = ee ? 0 : 1;
    }
  }
  const X = to(B.sun, "#ffffff", 0.55), lt = to(B.moon, "#ffffff", 0.6);
  d.stars.forEach((C) => {
    const D = Math.floor(C.x / b), _ = Math.floor(C.y / y);
    if (D < 0 || _ < 0 || D >= i || _ >= f || !ft[_ * i + D] || C.o < 0.15) return;
    const H = C.o > 0.45 ? B.star : to(B.star, Y[_ * i + D], 0.5), bt = C.big && C.o > 0.6 ? Math.floor(C.size / b) : 0;
    pt(D, _, H, 1, rc);
    for (let vt = 1; vt <= bt; vt++) [[D - vt, _], [D + vt, _], [D, _ - vt], [D, _ + vt]].forEach((V) => {
      V[0] >= 0 && V[1] >= 0 && V[0] < i && V[1] < f && ft[V[1] * i + V[0]] && pt(V[0], V[1], H, 1, rc);
    });
  }), d.suns.forEach((C) => {
    const D = Math.max(1.5, C.rad / b), _ = C.x / b, H = C.y / y, bt = C.halo / b * 0.85;
    if (yt(_, H, bt, (vt, V, kt, Tt) => {
      const ee = Math.sqrt(kt * kt + Tt * Tt);
      ee > D && ee < bt && !ft[V * i + vt] && pt(vt, V, X, 0.3 * (1 - (ee - D) / (bt - D)), 0);
    }), E) {
      const vt = Math.floor(M / 500) % 2, V = Math.max(1, D * 0.3);
      for (let kt = 0; kt < 8; kt++) if (kt % 2 === vt) for (let Tt = D + 1.2; Tt < D + 1.2 + V; Tt += 0.7) pt(Math.floor(_ + Math.cos(kt * Math.PI / 4) * Tt), Math.floor(H + Math.sin(kt * Math.PI / 4) * Tt), B.sun, 1, Mp);
    }
    yt(_, H, D, (vt, V, kt, Tt) => {
      kt * kt + Tt * Tt <= D * D && pt(vt, V, ki(((Tt / D + 1) / 2 - 0.6) / 0.4) > xi(vt, V) ? B.sunEdge : B.sun, 1, wp);
    });
  }), d.moons.forEach((C) => {
    const D = Math.max(1.5, C.d * 0.37 / b), _ = C.x / b, H = C.y / y, bt = _ + 0.547 * D, vt = H - 0.503 * D, V = 0.82 * D;
    yt(_, H, D, (kt, Tt, ee, ce) => {
      if (ee * ee + ce * ce > D * D) return;
      const ta = kt + 0.5 - bt, Se = Tt + 0.5 - vt;
      ta * ta + Se * Se > V * V && pt(kt, Tt, ki((ce + D) / (2 * D) * 1.1 - 0.1) > xi(kt, Tt) ? B.moon : lt, 1, xp);
    });
  }), d.clouds.forEach((C) => {
    const D = Math.max(3, C.w / b), _ = D * 0.6665, H = C.x / b, bt = C.y / y, vt = to(C.fill, "#000000", 0.16);
    for (let V = Math.max(0, Math.floor(bt) - 1); V <= Math.min(f - 1, bt + _ + 1); V++) for (let kt = Math.max(0, Math.floor(H) - 1); kt <= Math.min(i - 1, H + D + 1); kt++) {
      const Tt = (kt + 0.5 - H) / D, ee = (V + 0.5 - bt) / D;
      yc(Tt, ee) && pt(kt, V, !yc(Tt, ee + 1 / D) || ki((ee - 0.42) / 0.25) * 0.8 > xi(kt, V) ? vt : C.fill, C.o, yp);
    }
  }), d.fogs.forEach((C) => {
    const D = Math.floor(C.y / y), _ = Math.max(D, Math.floor((C.y + 6 * nt) / y) - 1), H = Math.floor(C.x / b), bt = Math.floor((C.x + C.w) / b);
    for (let vt = D; vt <= _; vt++) for (let V = H; V <= bt; V++) {
      const kt = (V - H) / Math.max(1, bt - H);
      pt(V, vt, C.c, C.a * (kt < 0.25 ? kt / 0.25 : kt > 0.75 ? (1 - kt) / 0.25 : 1), 0);
    }
  });
  const J = Math.max(2, Math.round(9 / y));
  d.drops.forEach((C) => {
    const D = C.x / b, _ = Math.floor(C.y / y);
    for (let H = 0; H < J; H++) pt(Math.floor(D - 0.208 * H * y / b), _ + H, B.rain, C.o, kp);
  });
  const Vt = Math.max(0, Math.round(4.4 / b / 2.6));
  return d.flakes.forEach((C) => {
    const D = Math.floor(C.x / b), _ = Math.floor(C.y / y);
    pt(D, _, B.snow, C.o, Ps);
    for (let H = 1; H <= Vt; H++)
      pt(D - H, _, B.snow, C.o, Ps), pt(D + H, _, B.snow, C.o, Ps), pt(D, _ - H, B.snow, C.o, Ps), pt(D, _ + H, B.snow, C.o, Ps);
  }), d.bolts.forEach((C) => {
    if (b <= 3.5)
      for (let D = Math.floor(C.y / y); D <= (C.y + 24) / y; D++) for (let _ = Math.floor(C.x / b); _ <= (C.x + 11) / b; _++)
        Su(Bu, (_ + 0.5) * b - C.x, (D + 0.5) * y - C.y) && pt(_, D, B.sun, 1, gd);
    else {
      const D = Math.round(C.x / b), _ = Math.round(C.y / y);
      Ru.forEach((H, bt) => H.split("").forEach((vt, V) => {
        vt === "#" && pt(D + V, _ + bt, B.sun, 1, gd);
      }));
    }
  }), { col: Y, ids: z };
}
function Pu(n, d) {
  const i = d.px, f = Math.max(6, Math.round(d.width / i)), b = Math.max(6, Math.round(d.height / i)), y = d.width / f, M = d.height / b, E = d.ambient ? Math.floor((d.clock || 0) / 100) * 100 : 0, S = (at) => {
    const st = Sp(at, d);
    return Nu(st, Cp(st, { clock: E, ambient: d.ambient, seed: d.seed }), f, b, y, M, E, d.ambient);
  }, B = S(n), Mt = d.reveal == null ? 1 : ki(d.reveal);
  let gt = B.col, $ = B.ids;
  if (Mt < 1) {
    const at = d.prev ? S(d.prev) : null, st = Mt * (f + 12);
    gt = new Array(f * b), $ = new Uint8Array(f * b);
    for (let nt = 0; nt < f * b; nt++) {
      const Y = nt % f, z = nt / f | 0;
      (d.reduce ? Mt : ki((st - Y) / 12)) > xi(Y, z) ? (gt[nt] = B.col[nt], $[nt] = B.ids[nt]) : at ? (gt[nt] = at.col[nt], $[nt] = at.ids[nt]) : (gt[nt] = null, $[nt] = 255);
    }
  }
  return Cu(gt, $, f, b, { oneBit: d.oneBit, ink: d.ink || "#26221e", paper: d.paper || "#fbf9f6", snowInk: !1 });
}
function Iu(n, d, i) {
  const f = i.width, b = i.height, y = i.reveal == null ? 1 : ki(i.reveal), M = ($, at) => {
    const st = Sp(at, i);
    Hu($, st, Cp(st, i));
  };
  if (n.clearRect(0, 0, f, b), y >= 1) {
    M(n, d);
    return;
  }
  if (i.prev && M(n, i.prev), i.reduce) {
    n.save(), n.globalAlpha = y, M(n, d), n.restore();
    return;
  }
  const E = n.canvas, S = E.__wxOff || (E.__wxOff = document.createElement("canvas"));
  (S.width !== E.width || S.height !== E.height) && (S.width = E.width, S.height = E.height);
  const B = S.getContext("2d");
  B.setTransform(n.getTransform()), B.clearRect(0, 0, f, b), M(B, d);
  const Mt = y * (f + 64) - 64, gt = B.createLinearGradient(Mt, 0, Mt + 64, 0);
  gt.addColorStop(0, "rgba(0,0,0,1)"), gt.addColorStop(1, "rgba(0,0,0,0)"), B.globalCompositeOperation = "destination-in", B.fillStyle = gt, B.fillRect(0, 0, f, b), B.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(S, 0, 0), n.restore();
}
function Hu(n, d, i) {
  const { W: f, H: b, S: y, C: M, cw: E, yb: S, glowAt: B, soft: Mt, tw: gt, sy: $ } = d, at = n.getTransform().a || 1, st = (J) => {
    n.shadowColor = J ? "rgba(28,18,8,.22)" : "transparent", n.shadowBlur = J ? 4 * at : 0, n.shadowOffsetY = J ? 1.5 * at : 0;
  }, nt = (J, Vt) => {
    const C = fd(J);
    return "rgba(" + C[0] + "," + C[1] + "," + C[2] + "," + Math.max(0, Math.min(1, Vt)).toFixed(3) + ")";
  }, Y = (J, Vt) => {
    const C = n.createLinearGradient(0, 0, f, 0);
    C.addColorStop(0, J[0]);
    for (let D = 0; D < J.length - 1; D++) {
      const _ = (D + Vt) * E, H = (_ - gt / 2) / f, bt = (_ + gt / 2) / f;
      H > 0 && H < 1 && C.addColorStop(H, J[D]), bt > 0 && bt < 1 && C.addColorStop(bt, J[D + 1]);
    }
    return C.addColorStop(1, J[J.length - 1]), C;
  }, z = Math.max(24, Math.ceil(f / 4)), ft = (J, Vt) => {
    n.beginPath();
    for (let C = 0; C <= z; C++) {
      const D = f * C / z, _ = J == null ? 0 : S(D) + J;
      C ? n.lineTo(D, _) : n.moveTo(D, _);
    }
    for (let C = z; C >= 0; C--) {
      const D = f * C / z;
      n.lineTo(D, S(D) + Vt);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = Y(y.filter((J) => !J.night).map((J) => J.sky), 0.75), n.fillRect(0, 0, f, b);
  const pt = n.createLinearGradient(0, 0, f, 0);
  for (let J = 0; J <= 64; J++) {
    const Vt = B(f * J / 64);
    pt.addColorStop(J / 64, nt(Vt.c, Math.min(1, Vt.a)));
  }
  n.fillStyle = pt;
  for (let J = 0; J < 8; J++)
    n.globalAlpha = 1 - J / 8, ft(J * 2 * $, (J + 1) * 2 * $);
  n.fillStyle = Y(y.filter((J) => J.night).map((J) => J.sky), 1.25);
  const yt = Math.max(0.5, Mt), et = 6;
  n.globalAlpha = 1, ft(null, -yt);
  for (let J = 0; J < et; J++)
    n.globalAlpha = 1 - (J + 0.5) / et, ft(-yt + 2 * yt * J / et, -yt + 2 * yt * (J + 1) / et);
  n.globalAlpha = 1;
  const ot = new Path2D(Eu), L = new Path2D(_u), G = new Path2D(Au), Lt = new Path2D(Du);
  n.fillStyle = M.star, i.stars.forEach((J) => {
    n.globalAlpha = J.o, J.big ? (n.save(), n.translate(J.x, J.y), n.scale(J.size, J.size), n.fill(ot), n.restore()) : (n.beginPath(), n.arc(J.x, J.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const X = to(M.sun, "#ffffff", 0.55);
  i.suns.forEach((J) => {
    const Vt = n.createRadialGradient(J.x, J.y, 0, J.x, J.y, J.halo);
    Vt.addColorStop(0, nt(X, 0.42)), Vt.addColorStop(0.7, nt(X, 0)), n.fillStyle = Vt, n.beginPath(), n.arc(J.x, J.y, J.halo, 0, Math.PI * 2), n.fill();
    const C = n.createLinearGradient(0, J.y - J.rad, 0, J.y + J.rad);
    C.addColorStop(0.6, M.sun), C.addColorStop(1, M.sunEdge), n.fillStyle = C, st(!0), n.beginPath(), n.arc(J.x, J.y, J.rad, 0, Math.PI * 2), n.fill(), st(!1);
  });
  const lt = to(M.moon, "#ffffff", 0.6);
  i.moons.forEach((J) => {
    n.save(), n.translate(J.x - J.d / 2, J.y - J.d / 2), n.scale(J.d / 46, J.d / 46);
    const Vt = n.createLinearGradient(0, 6, 0, 40);
    Vt.addColorStop(0, lt), Vt.addColorStop(1, M.moon), n.fillStyle = Vt, st(!0), n.fill(L), st(!1), n.restore();
  }), i.clouds.forEach((J) => {
    n.save(), n.globalAlpha = J.o, n.translate(J.x, J.y), n.scale(J.w / 46, J.h / 30.66), n.translate(-4, -9.67), n.fillStyle = J.fill, st(!0), n.fill(G), st(!1), n.restore();
  }), i.fogs.forEach((J) => {
    const Vt = n.createLinearGradient(J.x, 0, J.x + J.w, 0);
    Vt.addColorStop(0, nt(J.c, 0)), Vt.addColorStop(0.25, nt(J.c, J.a)), Vt.addColorStop(0.75, nt(J.c, J.a)), Vt.addColorStop(1, nt(J.c, 0)), n.fillStyle = Vt, n.fillRect(J.x, J.y, J.w, 6 * $);
  }), n.fillStyle = M.rain, i.drops.forEach((J) => {
    n.save(), n.globalAlpha = J.o, n.translate(J.x, J.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = M.snow, i.flakes.forEach((J) => {
    n.globalAlpha = J.o, n.beginPath(), n.arc(J.x, J.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = M.sun, i.bolts.forEach((J) => {
    n.save(), n.globalAlpha = J.o, n.translate(J.x, J.y), n.fill(Lt), n.restore();
  }), n.restore();
}
const Fu = (n) => n === "sunny" ? "clear" : n === "clear-night" ? "night" : n === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(n) ? "rain" : ["snowy", "snowy-rainy"].includes(n) ? "snow" : "cloudy", Rs = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, od = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, Hd = (n, d) => '<path class="' + d + '" d="' + n + '"/>', Ou = (n, d) => ' style="animation-delay:-' + Math.round(n * 137 % d) + 'ms"', Qn = (n, d, i, f) => {
  const b = i * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (f < 1 ? ' opacity="' + f + '"' : "") + Ou(n, 2400) + ' d="M' + n + " " + (d - i) + "L" + (n + b) + " " + (d - b) + "L" + (n + i) + " " + d + "L" + (n + b) + " " + (d + b) + "L" + n + " " + (d + i) + "L" + (n - b) + " " + (d + b) + "L" + (n - i) + " " + d + "L" + (n - b) + " " + (d - b) + 'Z"/>';
}, kc = ([n, d, i], f) => '<path class="wbMoonPath" d="' + n + '" fill="url(#' + f + ')"/><defs><linearGradient id="' + f + '" x1="0" y1="' + d + '" x2="0" y2="' + i + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Wu = (n, d) => d ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', qu = (n) => (n ? ["29.35", "43.04", "56.74"].map((d, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" x="' + d + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + d + ' 60.65)"/></g>') : [19, 26, 33].map((d, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + d + ' 38)"/></g>')).join(""), ju = (n) => (n ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([d, i], f) => '<circle class="wbFlake" style="animation-delay:-' + f * 640 + 'ms" cx="' + d + '" cy="' + i + '" r="' + (n ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function zu(n, d, i, f) {
  const b = (y) => '<g filter="url(#' + f + '-sh)">' + y + "</g>";
  return n === "clear" ? d ? b(kc(i ? od.l : od.s, f)) + (i ? Qn(70, 20, 5.83, 1) + Qn(78.33, 41.67, 3.75, 0.8) + Qn(60, 71.67, 3.33, 0.6) : Qn(42, 12, 3.5, 1) + Qn(47, 25, 2.25, 0.8) + Qn(36, 43, 2, 0.6)) : b(Wu(f, i)) : n === "partly" ? b(d ? kc(i ? od.lp : od.sp, f) : i ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + b(Hd(i ? Rs.lp : Rs.sp, d ? "wbCloudLight" : "wbBright")) + (d ? i ? Qn(73.33, 16.67, 4.17, 0.9) : Qn(44, 10, 2.5, 0.9) : "") : n === "cloudy" ? b(Hd(i ? Rs.lc : Rs.s, d ? "wbCloudLight" : "wbBright")) + (d ? i ? Qn(15, 15, 3.75, 0.8) + Qn(76.67, 13.33, 2.92, 0.6) : Qn(9, 9, 2.25, 0.8) + Qn(46, 8, 1.75, 0.6) : "") : b(Hd(i ? Rs.lr : Rs.s, "wbCloudLight")) + (n === "rain" ? qu(i) : ju(i));
}
const Vu = (n, d) => '<defs><filter id="' + n + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (d ? 1.6 : 1) + '" stdDeviation="' + (d ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function Gu(n, d, i, f) {
  let b = Fu(n);
  const y = b === "night" || !!i;
  b === "night" && (b = "clear");
  const M = d ? 90 : 54;
  return { k: b, night: y, svg: '<svg viewBox="0 0 ' + M + " " + M + '">' + Vu(f, d) + zu(b, y, d, f) + "</svg>" };
}
const Uu = [
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
], id = (n, d) => (Uu[d % 8 * 8 + n % 8] + 0.5) / 64, Co = (n) => [parseInt(n.slice(1, 3), 16), parseInt(n.slice(3, 5), 16), parseInt(n.slice(5, 7), 16)], an = (n, d, i) => [Math.round(n[0] + (d[0] - n[0]) * i), Math.round(n[1] + (d[1] - n[1]) * i), Math.round(n[2] + (d[2] - n[2]) * i)], fl = (n) => n < 0 ? 0 : n > 1 ? 1 : n, Mc = (n, d) => {
  let i = n * 374761393 + d * 668265263 ^ 1540483477;
  return i = Math.imul(i ^ i >>> 13, 1274126177), ((i ^ i >>> 16) >>> 0) / 4294967296;
}, Jr = [255, 255, 255], gn = Co("#26221e"), Sc = Co("#0288d1"), Yu = Co("#01579b"), Fd = Co(yn.cloudDay), Od = Co(yn.cloudNight), rd = Co(yn.dusk), Wd = Co(yn.sunEdge), Zu = Co(yn.sun), Ku = 10, Cc = 0.3, Mi = 56, Tp = 21;
function $u(n) {
  const d = Array.from({ length: Tp }, () => new Array(Mi).fill(void 0)), i = (M, E, S) => {
    d[E][M] = S;
  }, f = an(rd, gn, 0.35), b = an(gn, Jr, 0.22);
  for (let M = 0; M <= 6; M++) {
    const E = M < 2 ? Mi - 2 : Mi - 1;
    for (let S = 6 - M; S <= E; S++) i(S, M, M < 2 ? f : M === 6 ? b : gn);
  }
  const y = [rd, Wd, Od, Co(yn.skyRainDay), an(rd, gn, 0.2), an(n, gn, 0.35)];
  [2, 3, 2, 3, 3].forEach((M, E) => {
    const S = 9 + E * 6;
    for (let B = 0; B < M; B++) {
      const Mt = y[(E * 2 + B * 3) % y.length];
      for (let gt = S; gt < S + 5; gt++)
        i(gt, 7 + B * 2, an(Mt, gn, 0.12)), i(gt, 8 + B * 2, B === M - 1 ? an(Mt, Jr, 0.3) : Mt);
      i(S + 5, 7 + B * 2, gn), i(S + 5, 8 + B * 2, gn);
    }
  });
  for (let M = 7; M <= 12; M++) i(5, M, gn);
  i(5, 13, Wd);
  for (let M = 7; M <= 14; M++) for (let E = 42; E <= 51; E++) i(E, M, E === 51 ? Od : Fd);
  for (let M = 43; M <= 50; M += 2)
    i(M, 12, gn), i(M, 9, an(gn, Fd, 0.4));
  for (let M = 40; M <= 53; M++) i(M, 14, M === 40 || M === 53 ? Od : Fd);
  for (let M = 15; M <= 18; M++) for (let E = 46; E <= 49; E++) i(E, M, M === 18 ? gn : M === 16 ? Wd : rd);
  for (let M = 15; M <= 19; M++) i(44, M, gn);
  return i(44, 20, Zu), d;
}
function Xu(n, d, i, f) {
  const b = Math.max(1, Math.round(n)), y = Math.max(1, Math.round(d)), M = new Uint8ClampedArray(b * y * 4), E = Co(f.skyClearDay), S = Co(f.skyFogDay), B = $u(E), Mt = Math.round(y * 0.55), gt = fl(1 - Math.log(i / Cc) / Math.log(Ku / Cc)), $ = an(E, S, gt), at = (z) => fl((z - 0.1) / 0.9), st = fl((1 - Math.exp(-2 / i) - 0.2) / 0.8), nt = Math.round(b / 2 - Mi / 2), Y = Mt + 3;
  for (let z = 0; z < y; z++) {
    const ft = Y - 1 - z, pt = z - Y;
    for (let yt = 0; yt < b; yt++) {
      const et = yt - nt;
      let ot, L;
      const G = ft >= 0 && ft < Tp && et >= 0 && et < Mi ? B[ft][et] : void 0;
      if (G)
        ot = G, L = st;
      else if (ft >= 0 && ft <= 1 && et >= 4 - ft && et <= 5 - ft)
        ot = an(Jr, Sc, 0.15), L = st;
      else if (z < Mt) {
        const lt = fl(((z + 0.5) / Mt - 0.15) / 0.85) * 3, J = Math.min(3, Math.floor(lt + id(yt + 2, z + 5)));
        ot = an($, Jr, J * 0.1), L = gt * 0.95;
      } else {
        const lt = (z - Mt + 0.5) / (y - Mt), J = Math.min(1.5, 6e-3 / (lt * lt)), Vt = fl(lt * 1.4) * 3, C = Math.min(3, Math.floor(Vt + id(yt + 1, z + 6)));
        ot = an(Sc, Yu, C / 3);
        const D = 1 + Math.round(lt * 7), _ = Math.floor(yt / (D * 3)), H = 0.06 + 0.16 * lt, bt = yt % (D * 3) < D;
        bt && Mc(_, z) < H ? ot = an(ot, Jr, 0.18 + 0.1 * (1 - lt)) : bt && lt > 0.5 && Mc(_, z - 1) < H && (ot = an(ot, gn, 0.12)), L = at(1 - Math.exp(-J / i)), pt === 0 && et >= 3 && et <= 8 ? (ot = an(ot, Jr, et < 6 ? 0.8 : 0.45), L = st) : pt >= 0 && pt <= 2 && et >= Mi && et < Mi + 40 ? ((1 - (et - Mi) / 40) * (pt === 1 ? 0.9 : 0.5) > id(yt, z + 3) && (ot = an(ot, Jr, 0.5)), L = st) : pt === 0 && et >= 6 && et < Mi && (ot = an(ot, gn, et % 2 === 0 ? 0.35 : 0.2), L = st);
      }
      const Lt = L > id(yt, z) ? S : ot, X = (z * b + yt) * 4;
      M[X] = Lt[0], M[X + 1] = Lt[1], M[X + 2] = Lt[2], M[X + 3] = 255;
    }
  }
  return { data: M, w: b, h: y };
}
const Ju = {
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
}, Qu = 1.6;
function tf(n, d) {
  const i = n ? Ju[String(n).toUpperCase()] : void 0;
  if (!i || !(d > 0)) return;
  const f = (y) => Math.abs(Math.log(y[2] / d)), b = i.reduce((y, M) => f(M) < f(y) ? M : y);
  return f(b) <= Math.log(Qu) ? { from: b[0], to: b[1], km: b[2] } : void 0;
}
const ef = (n, d) => d === "mi" ? n * 1.609344 : d === "m" ? n / 1e3 : d === "ft" ? n * 3048e-7 : d === "yd" ? n * 9144e-7 : n, af = (n) => n < 1 ? "very_poor" : n < 4 ? "poor" : n < 10 ? "moderate" : n < 20 ? "good" : n < 40 ? "very_good" : "excellent", Dn = 6e4, Ie = 36e5, En = 864e5, gl = 1440, nf = 6, of = 10 * Dn, Tc = 3, rf = 3, sd = { day: [6, 22], waking: [7, 23], all: [0, 24] }, sf = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], lf = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", Lc = (n, d, i, f) => '<circle cx="' + n + '" cy="' + d + '" r="' + i + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((b) => {
  const y = Math.cos(b * Math.PI / 180), M = Math.sin(b * Math.PI / 180), E = i + 2, S = i + 2 + f;
  return "M" + (n + y * E).toFixed(2) + " " + (d + M * E).toFixed(2) + "L" + (n + y * S).toFixed(2) + " " + (d + M * S).toFixed(2);
}).join("") + '"/>', bi = (n) => '<path d="' + lf + '"' + (n ? ' transform="' + n + '"' : "") + "/>", wi = (n) => '<path d="' + n + '"/>', Ac = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function df(n, d) {
  const i = "translate(0,-3)";
  switch (n) {
    case "sunny":
      return d ? Ac : Lc(12, 12, 4, 2.5);
    case "clear-night":
      return Ac;
    case "partlycloudy":
      return (d ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : Lc(7.5, 7.5, 2.6, 1.4)) + bi("translate(3.6,3) scale(.85)");
    case "cloudy":
      return bi();
    case "fog":
      return wi("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return bi(i) + wi("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return bi(i) + wi("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return bi(i) + wi("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return bi(i) + wi("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return bi(i) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return bi(i) + wi("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return bi(i) + wi("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return wi("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + wi("M12 8v5M12 16h.01");
  }
}
const qd = (n, d) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + df(n, d) + "</svg>", cf = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), pf = 30 * Dn, uf = 7, ff = 3, _c = 1, hf = Dn, mf = 15 * Dn, gf = 5, We = {
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
}, Dt = {
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
}, vf = {
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
}, bf = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], wf = Object.keys(Dt.phases), xf = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)", extreme: "var(--purple-color, #926bc7)" }, yf = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, Lp = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], ld = 100, Ec = "µg/m³", kf = "weather_alerts.air_quality_pollen", vd = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], Mf = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, Sf = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], Cf = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, Tf = { daily: 1, hourly: 2 }, Ot = (n) => String(n ?? "").replace(/[&<>"']/g, (d) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[d]), tn = (n, d) => n.replace(/\{(\w+)\}/g, (i, f) => d[f] ?? ""), yi = (n) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + n + '"/></svg>', Dc = /* @__PURE__ */ new Map();
function Ap(n) {
  let d = Dc.get(n);
  if (d === void 0) {
    const i = "http://www.w3.org/2000/svg", f = document.createElementNS(i, "svg"), b = document.createElementNS(i, "path");
    f.setAttribute("viewBox", "0 0 24 24"), f.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", b.setAttribute("d", n), f.append(b), document.body.append(f);
    const y = b.getBBox();
    f.remove();
    const M = Math.max(y.width, y.height), E = M ? 26 * 24 / M : 0, S = E / 24;
    d = M ? "width:" + E.toFixed(2) + "px;height:" + E.toFixed(2) + "px;translate:" + ((12 - y.x - y.width / 2) * S).toFixed(2) + "px " + ((12 - y.y - y.height / 2) * S).toFixed(2) + "px" : "", Dc.set(n, d);
  }
  return d ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + d + '"><path d="' + n + '"/></svg>' : yi(n);
}
const Lf = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
}, je = (n) => n != null && n !== "" && Number.isFinite(Number(n)), Bc = /* @__PURE__ */ new Map(), Rc = /* @__PURE__ */ new Map(), jd = /* @__PURE__ */ new WeakMap(), Af = (n) => {
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
function Le(n, d, i) {
  const f = Number(n);
  if (Number.isNaN(f)) return String(n);
  const b = (d == null ? void 0 : d.number_format) === "none", y = { maximumFractionDigits: 2, ...i, ...b ? { useGrouping: !1 } : {} }, M = b ? "en-US" : Af(d), E = JSON.stringify([M, y]);
  let S = Bc.get(E);
  if (!S) {
    try {
      S = new Intl.NumberFormat(M, y);
    } catch {
      S = new Intl.NumberFormat(void 0, y);
    }
    Bc.set(E, S);
  }
  return S.format(f);
}
const fc = (n) => {
  var d;
  return ((d = n == null ? void 0 : n.locale) == null ? void 0 : d.language) || (n == null ? void 0 : n.language) || void 0;
};
function _f(n) {
  if (!n) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (jd.has(n)) return jd.get(n);
  const d = n.time_format, i = d === "language" || d === "system" || !d ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(d === "language" ? n.language : void 0).includes("10") : d === "12";
  return jd.set(n, i), i;
}
const _p = (n) => {
  var d, i;
  return ((d = n == null ? void 0 : n.locale) == null ? void 0 : d.time_zone) === "server" && ((i = n == null ? void 0 : n.config) != null && i.time_zone) ? n.config.time_zone : void 0;
};
function Ep(n, d) {
  const i = JSON.stringify([n, d]);
  let f = Rc.get(i);
  if (!f) {
    try {
      f = new Intl.DateTimeFormat(n, d);
    } catch {
      f = new Intl.DateTimeFormat(void 0, { ...d, timeZone: void 0 });
    }
    Rc.set(i, f);
  }
  return f;
}
const en = (n, d) => Ep(fc(d), { hour: "numeric", minute: "2-digit", hourCycle: _f(d == null ? void 0 : d.locale) ? "h12" : "h23", timeZone: _p(d) }).format(n), Nc = (n, d) => Ep(fc(d), { weekday: "short", timeZone: _p(d) }).format(n), Ef = (n, d) => n.toLocaleDateString(fc(d), { weekday: "narrow" }), $e = (n, d) => je(d) ? Le(Math.round(Number(d)), n.locale) + "°" : "–", pr = (n) => {
  const d = new Date(n);
  return d.setHours(0, 0, 0, 0), d;
}, Ns = (n, d) => n.getFullYear() === d.getFullYear() && n.getMonth() === d.getMonth() && n.getDate() === d.getDate(), xn = Math.PI / 180, Df = 2440588, Bf = 2451545, bd = xn * 23.4397, Rf = 149598e3, Nf = -0.833 * xn, Pf = 0.133 * xn, Pc = 5 * Dn, Dp = (n) => n.getTime() / En - 0.5 + Df - Bf, Bp = (n, d) => Math.atan2(Math.sin(n) * Math.cos(bd) - Math.tan(d) * Math.sin(bd), Math.cos(n)), Rp = (n, d) => Math.asin(Math.sin(d) * Math.cos(bd) + Math.cos(d) * Math.sin(bd) * Math.sin(n)), If = (n, d) => xn * (280.16 + 360.9856235 * n) - d, Hf = (n, d, i) => Math.asin(Math.sin(d) * Math.sin(i) + Math.cos(d) * Math.cos(i) * Math.cos(n));
function Np(n) {
  const d = xn * (357.5291 + 0.98560028 * n), i = xn * (1.9148 * Math.sin(d) + 0.02 * Math.sin(2 * d) + 3e-4 * Math.sin(3 * d)), f = d + i + xn * 102.9372 + Math.PI;
  return { ra: Bp(f, 0), dec: Rp(f, 0), dist: Rf };
}
function Pp(n) {
  const d = xn * (218.316 + 13.176396 * n), i = xn * (134.963 + 13.064993 * n), f = xn * (93.272 + 13.22935 * n), b = d + xn * 6.289 * Math.sin(i), y = xn * 5.128 * Math.sin(f);
  return { ra: Bp(b, y), dec: Rp(b, y), dist: 385001 - 20905 * Math.cos(i) };
}
const Ip = (n, d, i, f) => {
  const b = Dp(d), y = n(b);
  return Hf(If(b, xn * -f) - y.ra, xn * i, y.dec);
}, wd = (n, d, i) => Ip(Np, n, d, i), Ff = (n, d, i) => Ip(Pp, n, d, i);
function Hp(n, d, i, f) {
  const b = {};
  let y = i.getTime(), M = n(i) - d;
  for (let E = y + Pc; E <= f.getTime(); E += Pc) {
    const S = n(new Date(E)) - d;
    if (M < 0 != S < 0) {
      const B = new Date(y + (E - y) * M / (M - S));
      S > 0 ? b.rise ?? (b.rise = B) : b.set ?? (b.set = B);
    }
    y = E, M = S;
  }
  return b;
}
const Fp = (n) => {
  const d = pr(n);
  return [d, new Date(d.getTime() + En)];
}, Of = (n, d, i) => Hp((f) => wd(f, d, i), Nf, ...Fp(n)), Wf = (n, d, i) => Hp((f) => Ff(f, d, i), Pf, ...Fp(n));
function zd(n) {
  const d = Dp(n), i = Np(d), f = Pp(d), b = Math.acos(Math.sin(i.dec) * Math.sin(f.dec) + Math.cos(i.dec) * Math.cos(f.dec) * Math.cos(i.ra - f.ra)), y = Math.atan2(i.dist * Math.sin(b), f.dist - i.dist * Math.cos(b)), M = Math.atan2(Math.cos(i.dec) * Math.sin(i.ra - f.ra), Math.sin(i.dec) * Math.cos(f.dec) - Math.cos(i.dec) * Math.sin(f.dec) * Math.cos(i.ra - f.ra));
  return { fraction: (1 + Math.cos(y)) / 2, phase: 0.5 + 0.5 * y * (M < 0 ? -1 : 1) / Math.PI };
}
const qf = (n) => {
  const d = n * 28;
  return d < 0.5 || d > 27.5 ? "new_moon" : d < 6.5 ? "waxing_crescent" : d < 7.5 ? "first_quarter" : d < 13.5 ? "waxing_gibbous" : d < 14.5 ? "full_moon" : d < 20.5 ? "waning_gibbous" : d < 21.5 ? "last_quarter" : "waning_crescent";
}, vl = (n) => {
  const d = n == null ? void 0 : n.config;
  return d && je(d.latitude) && je(d.longitude) ? { lat: Number(d.latitude), lon: Number(d.longitude) } : null;
};
function hl(n, d) {
  var B, Mt, gt;
  const i = vl(n), f = i ? Of(d, i.lat, i.lon) : {}, b = (B = n == null ? void 0 : n.states) == null ? void 0 : B["sun.sun"], y = pr(d).getTime(), M = ($) => {
    const at = $ ? new Date($) : null;
    return at && Number.isFinite(at.getTime()) && pr(at).getTime() === y ? at : null;
  }, E = M((Mt = b == null ? void 0 : b.attributes) == null ? void 0 : Mt.next_rising), S = M((gt = b == null ? void 0 : b.attributes) == null ? void 0 : gt.next_setting);
  return E && (f.rise = E), S && (f.set = S), f;
}
function jf(n) {
  var f;
  const d = (f = n == null ? void 0 : n.states) == null ? void 0 : f["sun.sun"];
  if ((d == null ? void 0 : d.state) === "below_horizon" || (d == null ? void 0 : d.state) === "above_horizon") return d.state === "below_horizon";
  const i = vl(n);
  return i ? wd(/* @__PURE__ */ new Date(), i.lat, i.lon) < 0 : !1;
}
const Qr = (n) => !!n && n.state !== "unavailable" && n.state !== "unknown", Is = (n, d) => {
  var f;
  const i = (f = n.entities) == null ? void 0 : f[d];
  return !i || !i.hidden && !i.entity_category;
}, la = (n, d, i) => {
  var f, b;
  for (const y of d) {
    const M = (f = n.states) == null ? void 0 : f[y];
    if (!Qr(M)) continue;
    const E = (b = M.attributes) == null ? void 0 : b[i];
    if (E != null && E !== "") return { stateObj: M, value: E };
  }
}, zf = (n, d) => d.map((i) => {
  var f;
  return (f = n.states) == null ? void 0 : f[i];
}).find(Qr), Vf = (n, d, i) => d.map((f) => {
  var b;
  return (b = n.states) == null ? void 0 : b[f];
}).find((f) => {
  var b;
  return Qr(f) && (((b = f.attributes) == null ? void 0 : b.supported_features) == null || Number(f.attributes.supported_features) & Tf[i]);
});
function dr(n, d, i) {
  var y, M, E, S;
  const f = ((M = (y = n.config) == null ? void 0 : y.unit_system) == null ? void 0 : M.length) || "", b = (d == null ? void 0 : d.attributes) || {};
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
      return b.temperature_unit || ((S = (E = n.config) == null ? void 0 : E.unit_system) == null ? void 0 : S.temperature) || "";
  }
}
function hd(n, d, i, f) {
  try {
    if (typeof n.formatEntityAttributeValueToParts == "function") {
      const [b, ...y] = n.formatEntityAttributeValueToParts(d, i, f).map((M) => M.value);
      return { number: b, unit: y.join("").trim() };
    }
  } catch {
  }
  return { number: Le(f, n.locale), unit: dr(n, d, i) };
}
function Ic(n, d, i, f) {
  try {
    if (typeof n.formatEntityAttributeValue == "function") return n.formatEntityAttributeValue(d, i, f);
  } catch {
  }
  const b = hd(n, d, i, f);
  return (b.number + " " + b.unit).trim();
}
function rr(n, d) {
  var f;
  try {
    if (typeof n.formatEntityState == "function") return n.formatEntityState(d);
  } catch {
  }
  const i = (f = d.attributes) == null ? void 0 : f.unit_of_measurement;
  return vf[d.state] || (i && je(d.state) ? Le(d.state, n.locale) + " " + i : d.state);
}
function Xr(n, d) {
  var i;
  try {
    if (typeof n.formatEntityName == "function") return n.formatEntityName(d, { type: "entity" });
  } catch {
  }
  return ((i = d.attributes) == null ? void 0 : i.friendly_name) || d.entity_id;
}
const Hc = (n) => n < 3 ? "low" : n < 6 ? "moderate" : n < 8 ? "high" : n < 11 ? "very_high" : "extreme", Vd = (n) => Lp.find(([, d]) => n <= d)[0];
function Gf(n, d) {
  if (d === "Beaufort") return Math.round(n);
  const i = d ? Mf[d] : void 0;
  if (i === void 0) return;
  const f = Sf.findIndex((b) => n * i < b);
  return f === -1 ? 12 : f;
}
const Fc = (n, d) => {
  const i = d ? Cf[d] : void 0;
  return i === void 0 ? void 0 : n * i;
}, Oc = (n) => Object.keys(n.states || {}).find((d) => {
  var i, f;
  return d.startsWith("sensor.") && ((f = (i = n.entities) == null ? void 0 : i[d]) == null ? void 0 : f.platform) === "moon";
}), Gd = (n) => Object.values(n.states || {}).filter((d) => {
  var i, f;
  return d.entity_id.startsWith("sensor.") && ((i = d.attributes) == null ? void 0 : i.device_class) === "precipitation" && ["total", "total_increasing"].includes(((f = d.attributes) == null ? void 0 : f.state_class) ?? "") && Is(n, d.entity_id);
}).map((d) => d.entity_id).sort()[0];
function Uf(n) {
  var i;
  const d = {};
  for (const [f, b] of Object.entries(((i = n == null ? void 0 : n.core) == null ? void 0 : i.integration) ?? {})) {
    if (b && "integration_type" in b) {
      d[f] = b.categories;
      continue;
    }
    for (const [y, M] of Object.entries((b == null ? void 0 : b.integrations) ?? {})) d[y] = M == null ? void 0 : M.categories;
  }
  return d;
}
const Op = (n, d, i) => {
  var b, y, M;
  const f = (y = (b = n.entities) == null ? void 0 : b[i]) == null ? void 0 : y.platform;
  return !!f && !!((M = d[f]) != null && M.includes(kf));
};
function Yf(n, d) {
  const i = /* @__PURE__ */ new Map();
  return Object.values(n.states || {}).filter((f) => {
    var b;
    return f.entity_id.startsWith("sensor.") && vd.includes(((b = f.attributes) == null ? void 0 : b.device_class) ?? "") && Is(n, f.entity_id) && Op(n, d, f.entity_id);
  }).sort((f, b) => f.entity_id.localeCompare(b.entity_id)).forEach((f) => {
    i.has(f.attributes.device_class) || i.set(f.attributes.device_class, f.entity_id);
  }), vd.map((f) => i.get(f)).filter(Boolean);
}
const Zf = (n, d) => Object.values(n.states || {}).filter((i) => {
  var f, b;
  return i.entity_id.startsWith("sensor.") && Is(n, i.entity_id) && Op(n, d, i.entity_id) && (((b = (f = n.entities) == null ? void 0 : f[i.entity_id]) == null ? void 0 : b.translation_key) ?? i.entity_id).toLowerCase().includes("pollen");
}).map((i) => i.entity_id).sort();
function Wc(n, d, i) {
  const f = Math.max(d - n, 1e-6), b = i[i.length - 1], y = i.find((B) => f / B <= 4) ?? b * Math.ceil(f / (4 * b)), M = Math.floor(n / y) * y;
  let E = Math.ceil(d / y) * y;
  E === M && (E = M + y);
  const S = [];
  for (let B = M; B <= E + y / 1e3; B += y) S.push(B);
  return { min: M, max: E, ticks: S };
}
const ml = (n, d, i) => {
  const f = (M) => [1, 3, 5].map((E) => parseInt(M.slice(E, E + 2), 16)), b = f(n), y = f(d);
  return "rgb(" + b.map((M, E) => Math.round(M + (y[E] - M) * i)).join(", ") + ")";
}, Kf = (n, d, i, f) => {
  const b = i * Math.abs(1 - 2 * f), y = f < 0.5 ? 0 : 1;
  return "M " + n + " " + (d - i) + " A " + i + " " + i + " 0 0 0 " + n + " " + (d + i) + " A " + b + " " + i + " 0 0 " + y + " " + n + " " + (d - i) + " Z";
}, _n = ({ icon: n, name: d, sub: i, visual: f, double: b, backdrop: y, cls: M, zone: E, callouts: S }) => '<div class="wbCard wbSquare' + (b ? " wbDouble" : "") + (y ? " wbHasBackdrop" : "") + (E != null ? " wbZoned" : "") + (M ? " " + M : "") + '">' + (y ? '<div class="wbBackdrop" aria-hidden="true">' + y + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + Ap(n) + '</div><div class="wbText"><span class="wbName">' + Ot(d) + "</span>" + (i ? '<span class="wbSub">' + Ot(i) + "</span>" : "") + "</div></div>" + (E != null ? '<div class="wbZone">' + E + "</div>" + (S != null && S.length ? '<div class="wbCallouts">' + S.slice(0, 3).map((B) => Array.isArray(B) ? '<span class="wbCallout"><span>' + Ot(B[0]) + "</span><span>" + Ot(B[1]) + "</span></span>" : '<span class="wbCallout wbAdvice"><span>' + Ot(B) + "</span></span>").join("") + "</div>" : "") : '<div class="wbVisual">' + f + "</div>") + "</div>", sr = (n, d) => '<div class="wbValue"><span class="wbNum">' + Ot(n) + "</span>" + (d ? '<span class="wbUnitV">' + Ot(d) + "</span>" : "") + "</div>";
function $f(n) {
  const d = n.max - n.min || 1, i = (E) => 100 - (Math.min(n.max, Math.max(n.min, E)) - n.min) / d * 100, f = (E) => E / gl * 100 + "%", b = (E) => E.map((S) => S.t + "," + i(S.v)).join(" "), y = n.kind === "line" ? n.points : [];
  let M = '<div class="wbDayChart"><div class="wbDcSun">' + n.sun.map((E) => '<span class="wbDcSunMark" style="left:' + f(E.t) + '">' + yi(E.rise ? We.sunsetUp : We.sunsetDown) + Ot(E.label) + "</span>").join("") + "</div>";
  return M += '<div class="wbDcY">' + n.ticks.map((E) => '<span style="top:' + i(E) + '%">' + Ot(n.format(E)) + "</span>").join("") + "</div>", M += '<div class="wbDcPlot"><svg viewBox="0 0 ' + gl + ' 100" preserveAspectRatio="none">' + n.night.map(([E, S]) => '<rect class="wbDcNight" x="' + E + '" y="0" width="' + (S - E) + '" height="100"></rect>').join("") + n.ticks.map((E) => '<line class="wbDcGrid" x1="0" x2="' + gl + '" y1="' + i(E) + '" y2="' + i(E) + '" vector-effect="non-scaling-stroke"></line>').join("") + n.sun.map((E) => '<line class="wbDcSunLine" x1="' + E.t + '" x2="' + E.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (n.past && n.past.length > 1 ? '<polyline class="wbDcPast" points="' + b(n.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (y.length > 1 ? '<polygon class="wbDcArea" points="' + y[0].t + ",100 " + b(y) + " " + y[y.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + b(y) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (n.now ? '<line class="wbDcNow" x1="' + n.now.t + '" x2="' + n.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (n.kind === "bars" ? n.points.filter((E) => E.v > 0).map((E) => '<i class="wbDcBar" style="left:' + f(E.t + 12) + ";width:" + f(36) + ";height:" + (100 - i(E.v)) + '%"></i>').join("") : "") + (n.now && n.kind === "line" ? '<i class="wbDcDot" style="left:' + f(n.now.t) + ";top:" + i(n.now.v) + '%"></i>' : "") + (n.peak ? '<span class="wbDcPeak" style="left:' + f(n.peak.t) + ";top:" + i(n.peak.v) + '%">' + Ot(n.peak.label) + "</span>" : "") + (n.note ? '<span class="wbDcNote">' + Ot(n.note) + "</span>" : "") + "</div>", M += '<div class="wbDcX">' + n.hours.map((E) => '<span class="' + (E.minor ? "wbMinor" : "") + '" style="left:' + f(E.t) + '">' + Ot(E.label) + "</span>").join("") + "</div></div>", M;
}
function qc(n, d, i = 120, f = 300) {
  const M = n.map((Y) => Y.value), E = Math.min(...M), S = Math.max(...M), B = S - E || 1, Mt = (Y) => Y / (n.length - 1) * f, gt = (Y) => 18 + (1 - (Y - E) / B) * (i - 18 - 18), $ = n.map((Y, z) => Mt(z) + "," + gt(Y.value)).join(" "), at = M.indexOf(S), st = M.indexOf(E), nt = (Y) => Y === 0 ? "start" : Y === n.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 ' + f + " " + i + '" aria-hidden="true"><polygon class="wbArea" points="0,' + (i - 18) + " " + $ + " " + f + "," + (i - 18) + '"></polygon><polyline class="wbLine" points="' + $ + '" vector-effect="non-scaling-stroke"></polyline><text x="' + Mt(at) + '" y="' + (gt(S) - 6) + '" text-anchor="' + nt(at) + '">' + Ot(d(S)) + '</text><text x="' + Mt(st) + '" y="' + (gt(E) + 14) + '" text-anchor="' + nt(st) + '">' + Ot(d(E)) + '</text><text x="0" y="' + i + '" text-anchor="start">' + Ot(n[0].label) + '</text><text x="' + f + '" y="' + i + '" text-anchor="end">' + Ot(n[n.length - 1].label) + "</text></svg>";
}
function Xf(n, d) {
  const y = n.map((gt) => gt.value).concat([]), M = Math.min(...y) - 2, E = Math.max(...y) + 1, S = E - M || 1, B = 300 / n.length, Mt = (gt) => (1 - (gt - M) / S) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + n.map((gt, $) => '<rect class="wbBar' + (gt.now ? " wbNowBar" : "") + '" x="' + ($ * B + B * 0.2) + '" y="' + Mt(gt.value) + '" width="' + B * 0.6 + '" height="' + (104 - Mt(gt.value)) + '" rx="6"></rect><text x="' + ($ * B + B / 2) + '" y="120" text-anchor="middle">' + Ot(gt.label) + "</text>").join("") + "</svg>";
}
const Jf = [
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
], Qf = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], jc = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], th = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let eh = 0;
function zc(n, { getHass: d, entityId: i, style: f = "bitmap", motion: b = !0, cards: y, onOpen: M, hoursWindow: E } = {}) {
  var Bi, Ri;
  const S = "wb" + ++eh + "-", B = document.createElement("div");
  B.className = "wb", B.dataset.style = f;
  const Mt = document.createElement("div");
  Mt.className = "wbBento", B.appendChild(Mt), n.replaceChildren(B);
  const gt = ["aq_tile", "pollen_tile", "radar_tile"], $ = ["current", "hourly", "sun", "pollen_tile", "moon", "uv_index", "aq_tile", "humidity", "pressure", "wind", "visibility", "radar_tile", "compared_to_average", "precipitation", "air_quality"].filter((u) => !y || y.includes(u)), at = { current: "wide", hourly: "wide", compared_to_average: "double" }, st = ["sun", "moon", "uv_index", "aq_tile", "pollen_tile", "humidity", "pressure", "wind"], nt = {};
  $.forEach((u) => {
    const m = document.createElement("div");
    m.className = "wbItem", m.dataset.card = u, m.dataset.size = at[u] || "tile", m.hidden = !0, st.includes(u) && (m.dataset.xl = ""), Mt.appendChild(m), nt[u] = { el: m, html: null };
  });
  let Y = !1, z = null, ft = 0, pt = -1, yt = !1, et = null;
  const ot = "homecore-next-view", L = (() => {
    try {
      return localStorage.getItem(ot);
    } catch {
      return null;
    }
  })(), G = { graph: void 0, range: { preset: "day" }, picking: !1, openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: L === "bars" ? "bars" : "strip", aq: void 0 }, Lt = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let X = /* @__PURE__ */ new Date(), lt = /* @__PURE__ */ new Date();
  const J = {}, Vt = {}, C = {}, D = (u) => {
    var m;
    return ((m = C[u]) == null ? void 0 : m.forecast) ?? [];
  }, _ = (u, m) => {
    var x;
    return C[m] ? (x = u.states) == null ? void 0 : x[C[m].entityId] : void 0;
  };
  function H(u) {
    const m = Vt[u];
    m && (m.unsub.then((x) => {
      typeof x == "function" && x();
    }).catch(() => {
    }), delete Vt[u]), C[u] && delete C[u];
  }
  function bt(u, m, x) {
    var O;
    if (typeof ((O = u.connection) == null ? void 0 : O.subscribeMessage) != "function") return;
    const T = { entityId: x };
    try {
      T.unsub = Promise.resolve(u.connection.subscribeMessage((P) => {
        Y || Vt[m] !== T || (P != null && P.forecast ? C[m] = { entityId: x, forecast: P.forecast } : delete C[m], $o());
      }, { type: "weather/subscribe_forecast", forecast_type: m, entity_id: x }));
    } catch (P) {
      T.unsub = Promise.reject(P);
    }
    T.unsub.catch(() => {
      Vt[m] === T && delete Vt[m];
    }), Vt[m] = T;
  }
  function vt(u, m) {
    var x;
    for (const T of ["daily", "hourly"]) {
      const O = Vf(u, m, T);
      ((x = Vt[T]) == null ? void 0 : x.entityId) !== (O == null ? void 0 : O.entity_id) && (H(T), O && bt(u, T, O.entity_id));
    }
  }
  const V = (u, m, x, T = !1) => u.callWS({
    type: "history/history_during_period",
    start_time: x.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [m],
    minimal_response: T,
    no_attributes: T,
    significant_changes_only: !1
  });
  async function kt(u, m) {
    var Z, rt, K;
    const x = la(u, m, "pressure");
    if (!x) return;
    const T = x.stateObj.entity_id, O = await V(u, T, new Date(Date.now() - 3 * Ie)), P = (K = (rt = (Z = O == null ? void 0 : O[T]) == null ? void 0 : Z.find((Ct) => {
      var At;
      return typeof ((At = Ct.a) == null ? void 0 : At.pressure) == "number";
    })) == null ? void 0 : rt.a) == null ? void 0 : K.pressure;
    Lt.pressureHistory = typeof P == "number" ? { entityId: T, value: P } : void 0;
  }
  async function Tt(u, m) {
    var rt;
    const x = la(u, m, "temperature");
    if (!x) return;
    const T = x.stateObj.entity_id, O = pr(/* @__PURE__ */ new Date()), P = await V(u, T, new Date(O.getTime() - uf * En)), Z = /* @__PURE__ */ new Map();
    for (const K of (P == null ? void 0 : P[T]) ?? []) {
      const Ct = (rt = K.a) == null ? void 0 : rt.temperature, At = new Date((K.lc ?? K.lu) * 1e3);
      if (typeof Ct != "number" || At >= O) continue;
      const St = At.toDateString();
      Z.set(St, Math.max(Z.get(St) ?? -1 / 0, Ct));
    }
    Lt.temperatureHistory = { entityId: T, dailyHighs: [...Z.values()], days: [...Z.entries()].map(([K, Ct]) => ({ date: new Date(K), high: Ct })) };
  }
  async function ee(u) {
    const m = Gd(u);
    if (!m) return;
    const x = await u.callWS({ type: "recorder/statistic_during_period", statistic_id: m, rolling_window: { duration: { hours: 24 } } });
    Lt.rain = { entityId: m, change: (x == null ? void 0 : x.change) ?? void 0 };
  }
  function ce() {
    const u = d == null ? void 0 : d();
    if (!u || Y || typeof u.callWS != "function") return;
    const m = La(u);
    Lt.lastFetch = Date.now(), [kt(u, m), Tt(u, m), ee(u)].forEach((x) => x.then(() => $o(), () => {
    }));
  }
  async function ta() {
    const u = d == null ? void 0 : d();
    if (!u) return;
    const m = la(u, La(u), "temperature");
    if (!m) return;
    const x = m.stateObj.entity_id, T = pr(/* @__PURE__ */ new Date());
    try {
      const O = await V(u, x, T), P = (Z) => ((O == null ? void 0 : O[x]) ?? []).map((rt) => {
        var K;
        return { time: rt.lu * 1e3, value: (K = rt.a) == null ? void 0 : K[Z] };
      }).filter((rt) => typeof rt.value == "number");
      Lt.todayHistory = { day: T.toDateString(), fetched: Date.now(), temperature: P("temperature"), humidity: P("humidity") }, $o();
    } catch {
    }
  }
  async function Se(u) {
    const m = d == null ? void 0 : d();
    if (m)
      try {
        const x = await V(m, u, new Date(Date.now() - 24 * Ie), !0), T = ((x == null ? void 0 : x[u]) ?? []).filter((P) => je(P.s)), O = Math.max(1, Math.ceil(T.length / 48));
        Lt.aqHistory = { entityId: u, points: T.filter((P, Z) => Z % O === 0).map((P) => ({ label: en(new Date(P.lu * 1e3), m), value: Number(P.s) })) }, $o();
      } catch {
      }
  }
  function Ci(u) {
    Lt.categories === void 0 && (Lt.categories = null, Promise.resolve().then(() => u.callWS({ type: "integration/descriptions" })).then((m) => {
      Lt.categories = Uf(m);
    }, () => {
      Lt.categories = {};
    }).then(() => $o()));
  }
  function La(u) {
    var x;
    const m = Object.keys(u.states || {}).filter((T) => T.startsWith("weather.") && Is(u, T)).sort();
    return i && ((x = u.states) != null && x[i]) ? [i, ...m.filter((T) => T !== i)] : m;
  }
  const Ht = (u) => Lt.categories ? { air: Yf(u, Lt.categories), pollen: Zf(u, Lt.categories) } : { air: [], pollen: [] };
  function me(u, m, x, T) {
    if (f === "line") return '<span class="wbWx wbS' + m + ' wbLineIcon" aria-hidden="true">' + qd(u, x || u === "clear-night") + "</span>";
    if (f === "smooth") {
      const O = Gu(u, m === 90, x, S + "g-" + T);
      return '<span class="wbWx wbS' + m + " wb" + O.k[0].toUpperCase() + O.k.slice(1) + (O.night ? " wbNight" : "") + '" aria-hidden="true">' + O.svg + "</span>";
    }
    return '<span class="wbWx wbS' + m + '" aria-hidden="true"><canvas data-wb-wx="' + Ot(xd(u, x)) + '" data-size="' + m + '"></canvas></span>';
  }
  const da = () => D("daily").filter((u) => u.templow != null).slice(0, nf);
  function oe(u, m) {
    const x = new Date(m.datetime), T = /* @__PURE__ */ new Date();
    return Ns(x, T) ? Dt.today : Ns(x, new Date(T.getTime() + En)) ? Dt.tomorrow : Nc(x, u);
  }
  const Ge = (u, m, x) => x === 0 ? oe(u, m) : Nc(new Date(m.datetime), u);
  function ts(u, m) {
    var At, St, Zt, Gt;
    const x = zf(u, m);
    if (!x) return "";
    const T = da(), O = G.openDay !== void 0 ? T[G.openDay] : void 0, P = la(u, m, "temperature"), Z = T[0], rt = Z && Ns(new Date(Z.datetime), /* @__PURE__ */ new Date()), K = ((St = (At = u.config) == null ? void 0 : At.unit_system) == null ? void 0 : St.temperature) || ((Zt = x.attributes) == null ? void 0 : Zt.temperature_unit) || "";
    let Ct = '<div class="wbCard wbWeather' + (O ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (O ? " inert" : "") + '><div class="wbNow">' + (M ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + Ot(Dt.openPage) + '">' : '<div class="wbCurrent">') + me(x.state, 90, jf(u), "now") + '<div class="wbTempBlock">' + (P && je(P.value) ? '<div class="wbTemp"><span class="wbDeg">' + Ot(Le(Math.round(Number(P.value)), u.locale)) + '</span><span class="wbUnit">' + Ot(K) + "</span></div>" : "") + '<div class="wbPlace">' + Ot(((Gt = u.config) == null ? void 0 : Gt.location_name) ?? "") + "</div></div>" + (M ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + Ot(rr(u, x)) + "</div>" + (rt && Z.templow != null ? '<div class="wbRange">' + Ot(tn(Dt.range, { high: $e(u, Z.temperature), low: $e(u, Z.templow) })) + "</div>" : "") + "</div></div>";
    if (Ct += ur(u) + Ti(u), T.length) {
      const Nt = rt && P && je(P.value) ? $e(u, P.value) : "", ae = (jt, _t, Xt) => jt === 0 && Nt ? '<span class="wbAsDay">' + Ot(_t) + '</span><span class="wbAsNow">' + Ot(Xt) + "</span>" : Ot(_t);
      Ct += '<div class="wbColumns" role="list">' + T.map((jt, _t) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + _t + '" data-wb-focus="col-' + _t + '"><span class="wbDay">' + ae(_t, Ge(u, jt, _t), Dt.now) + "</span>" + me(jt.condition ?? "cloudy", 60, !1, "col" + _t) + '<span class="wbTemps"><span class="wbHi">' + ae(_t, $e(u, jt.temperature), Nt) + '</span><span class="wbLo">' + Ot($e(u, jt.templow)) + "</span></span></button>").join("") + "</div>", Ct += '<div class="wbHalves" role="list">' + T.map((jt, _t) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + _t + '" data-wb-focus="half-' + _t + '">' + me(jt.condition ?? "cloudy", 40, !1, "half" + _t) + '<span class="wbText"><span class="wbName">' + Ot(oe(u, jt)) + '</span><span class="wbSub">' + Ot(tn(Dt.highLow, { high: $e(u, jt.temperature), low: $e(u, jt.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return Ct + "</div>" + (O ? ge(u, m, O) : "") + "</div>";
  }
  const we = {
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
  }, ie = {
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
  function te(u) {
    const m = Date.now(), x = D("hourly").filter((St) => new Date(St.datetime).getTime() > m - Ie).slice(0, 13);
    if (x.length < 2) return "";
    const T = (St) => en(new Date(St.datetime), u), O = (St) => we[St.condition] || "", P = (St) => ie[St.condition] || St.condition;
    let Z = O(x[0]);
    if (!Z) return "";
    let rt = x[0], K = 0;
    for (const St of x.slice(1))
      K === 2 || P(St) === P(rt) || !O(St) || (Z += (K ? " and " : ", ") + O(St) + " from " + T(St), rt = St, K++);
    const Ct = Number(x[0].temperature), At = x.filter((St) => je(St.temperature));
    if (je(Ct) && At.length) {
      const St = At.reduce((Gt, Nt) => Number(Nt.temperature) < Number(Gt.temperature) ? Nt : Gt), Zt = At.reduce((Gt, Nt) => Number(Nt.temperature) > Number(Gt.temperature) ? Nt : Gt);
      Ct - Number(St.temperature) >= 3 ? Z += ", down to " + $e(u, St.temperature) + " by " + T(St) : Number(Zt.temperature) - Ct >= 3 && (Z += ", up to " + $e(u, Zt.temperature) + " by " + T(Zt));
    }
    return Z[0].toUpperCase() + Z.slice(1) + ".";
  }
  const ur = (u) => {
    const m = te(u);
    return m ? '<div class="wbSummary"><p class="wbSummaryText">' + Ot(m) + "</p></div>" : "";
  };
  function Ti(u) {
    const [m, x] = sd[E == null ? void 0 : E()] || sd.day, T = Date.now(), O = D("hourly").filter((P) => {
      const Z = new Date(P.datetime), rt = Z.getHours();
      return Z.getTime() > T - Ie / 2 && rt >= m && rt < x && je(P.temperature);
    }).slice(0, 4);
    return O.length ? '<div class="wbNextHours" role="list">' + O.map((P, Z) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + Ot(en(new Date(P.datetime), u)) + "</span>" + me(P.condition ?? "cloudy", 40, P.is_daytime === !1, "hr" + Z) + '<span class="wbHourTemp">' + Ot($e(u, P.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function fr(u) {
    const m = u.getTime(), x = Date.now() - Ie;
    return D("hourly").filter((T) => {
      const O = new Date(T.datetime).getTime();
      return O >= m && O < m + En && O > x;
    });
  }
  function nn(u) {
    if (!u.length) return ["temperature"];
    const m = ["temperature"];
    return u.some((x) => x.precipitation != null || x.precipitation_probability != null) && m.push("precipitation"), u.some((x) => x.humidity != null) && m.push("humidity"), m;
  }
  function ge(u, m, x) {
    const T = pr(new Date(x.datetime)), O = fr(T), P = nn(O), Z = P.includes(G.dayMode) ? G.dayMode : "temperature", rt = (K) => K === "humidity" ? Dt.humidity : Dt.modes[K];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + me(x.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + Ot(oe(u, x)) + '</span><span class="wbSub">' + Ot(tn(Dt.highLow, { high: $e(u, x.temperature), low: $e(u, x.templow) })) + '</span></div><button class="wbBack" title="' + Ot(Dt.back) + '" data-wb="close-day" data-wb-focus="back-day">' + yi(We.back) + "</button></div>" + (P.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + P.map((K) => '<button aria-pressed="' + (K === Z) + '" data-wb="day-mode" data-mode="' + K + '" data-wb-focus="day-mode-' + K + '">' + Ot(rt(K)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + $f(ca(u, m, T, O, Z)) + "</div></div>";
  }
  function ca(u, m, x, T, O) {
    var Mr;
    const P = x.getTime(), Z = Date.now(), rt = Ns(x, /* @__PURE__ */ new Date()), K = (ye) => (ye - P) / Dn, Ct = (ye) => en(new Date(ye), u), At = (ye) => new Date(ye.datetime).getTime(), St = [0, 3, 6, 9, 12, 15, 18, 21].map((ye) => ({ t: ye * 60, label: Ct(P + ye * Ie), minor: ye % 6 !== 0 })), { rise: Zt, set: Gt } = hl(u, x), Nt = [], ae = [];
    Zt && (Nt.push({ t: K(Zt.getTime()), label: Ct(Zt.getTime()), rise: !0 }), ae.push([0, K(Zt.getTime())])), Gt && (Nt.push({ t: K(Gt.getTime()), label: Ct(Gt.getTime()), rise: !1 }), ae.push([K(Gt.getTime()), gl]));
    const jt = vl(u);
    !Zt && !Gt && jt && wd(new Date(P + En / 2), jt.lat, jt.lon) < 0 && ae.push([0, gl]);
    const _t = rt ? K(Z) : void 0, Xt = { hours: St, sun: Nt, night: ae };
    if (!T.length && !rt) return { ...Xt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Dt.noHourly };
    if (O === "precipitation") {
      const ye = T.some((Pa) => Pa.precipitation_probability != null), cn = T.map((Pa) => ({ t: K(At(Pa)), v: Number((ye ? Pa.precipitation_probability : Pa.precipitation) ?? 0) })), Sn = dr(u, _(u, "hourly"), "precipitation"), Yn = Math.max(0, ...cn.map((Pa) => Pa.v)), Sr = ye ? 100 : Wc(0, Math.max(Yn, 1), [0.5, 1, 2, 5, 10]).max, Zn = (Pa) => ye ? Le(Pa, u.locale) + "%" : Le(Pa, u.locale, { maximumFractionDigits: 1 }) + " " + Sn, pn = cn.find((Pa) => Pa.v === Yn);
      return {
        ...Xt,
        kind: "bars",
        points: cn,
        min: 0,
        max: Sr,
        ticks: [0, Sr / 2, Sr],
        format: Zn,
        now: _t !== void 0 ? { t: _t, v: 0 } : void 0,
        peak: pn && Yn > 0 ? { t: pn.t + 30, v: pn.v, label: Zn(pn.v) } : void 0,
        note: Yn > 0 ? void 0 : Dt.noRain
      };
    }
    const $t = O === "humidity" ? "humidity" : "temperature", Te = T.filter((ye) => ye[$t] != null && (!rt || At(ye) >= Z)).map((ye) => ({ t: K(At(ye)), v: Number(ye[$t]) }));
    let Rt, He = [];
    if (_t !== void 0) {
      const ye = la(u, m, $t);
      ye && je(ye.value) && (Rt = { t: _t, v: Number(ye.value) }, Te.unshift(Rt)), He = (((Mr = Lt.todayHistory) == null ? void 0 : Mr.day) === x.toDateString() ? Lt.todayHistory[$t] : []).filter((Sn) => Sn.time <= Z).map((Sn) => ({ t: Math.max(0, K(Sn.time)), v: Sn.value })), Rt && He.length && He.push(Rt);
    }
    const Be = [...He, ...Te];
    if (!Be.length) return { ...Xt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Dt.noHourly };
    const dn = Be.map((ye) => ye.v), so = Wc(Math.min(...dn), Math.max(...dn), $t === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    $t === "humidity" && (so.min = Math.max(0, so.min), so.max = Math.min(100, so.max), so.ticks = so.ticks.filter((ye) => ye >= 0 && ye <= 100));
    const Un = $t === "humidity" ? (ye) => Le(ye, u.locale) + "%" : (ye) => $e(u, ye), xa = $t === "temperature" ? Be.reduce((ye, cn) => cn.v > ye.v ? cn : ye) : void 0;
    return { ...Xt, kind: "line", points: Te, past: He, ...so, format: Un, now: Rt, peak: xa ? { ...xa, label: Un(xa.v) } : void 0 };
  }
  function va(u) {
    const m = ["temperature"];
    return u.some((x) => x.precipitation_probability != null || x.precipitation != null) && m.push("precipitation"), u.some((x) => x.wind_speed != null) && m.push("wind"), m;
  }
  function Li(u, m, x = Tc) {
    var P, Z;
    const T = D("daily"), O = [];
    for (let rt = 0; rt < x; rt++) for (const K of [!1, !0]) {
      const Ct = u.getTime() + (rt * 24 + (K ? 12 : 0)) * Ie, At = Ct + 12 * Ie, St = {};
      m.forEach((Gt) => {
        const Nt = new Date(Gt.datetime).getTime();
        Gt.condition && Nt >= Ct && Nt < At && (St[Gt.condition] = (St[Gt.condition] ?? 0) + (cf.has(Gt.condition) ? 2 : 1));
      });
      let Zt = (P = Object.entries(St).sort((Gt, Nt) => Nt[1] - Gt[1])[0]) == null ? void 0 : P[0];
      if (!Zt) {
        const Gt = new Date(Ct).toDateString();
        Zt = ((Z = T.find((Nt) => new Date(Nt.datetime).toDateString() === Gt)) == null ? void 0 : Z.condition) ?? "cloudy";
      }
      O.push({ cond: K && Zt === "sunny" ? "clear-night" : Zt, night: K });
    }
    return O;
  }
  function hr(u, m, x) {
    const T = _(u, "hourly"), O = m.precipitation_probability != null ? Le(m.precipitation_probability, u.locale) + "%" : "", P = m.precipitation ? Le(m.precipitation, u.locale) + " " + dr(u, T, "precipitation") : "";
    switch (x) {
      case "precipitation":
        return O ? [O, P] : [P || "–", ""];
      case "wind":
        return m.wind_speed != null ? [Le(Math.round(m.wind_speed), u.locale), dr(u, T, "wind_speed")] : ["–", ""];
      default:
        return [$e(u, m.temperature), (m.precipitation_probability ?? 0) >= 20 ? O : ""];
    }
  }
  function Kt(u, m, x) {
    const [T, O] = sd[E == null ? void 0 : E()] || sd.day, P = [];
    for (let Z = 0; Z < 4 && P.length < 3; Z++) {
      const rt = /* @__PURE__ */ new Date();
      rt.setHours(0, 0, 0, 0), rt.setDate(rt.getDate() + Z);
      const K = new Date(rt);
      K.setHours(O, 0, 0, 0), rt.setHours(T, 0, 0, 0), !(K.getTime() <= x || !m.some((Ct) => {
        const At = new Date(Ct.datetime).getTime();
        return At >= rt.getTime() && At <= K.getTime();
      })) && P.push({ a: rt.getTime(), b: K.getTime(), label: oe(u, { datetime: rt.toISOString() }) });
    }
    return P;
  }
  function It(u, m, x, T, O, P) {
    const Z = (x.b - m.a) / Ie, rt = (_t) => ((_t - m.a) / Ie).toFixed(3), K = 80, Ct = 32, At = [];
    for (const _t = new Date(m.a - En); _t.getTime() < x.b + En; _t.setDate(_t.getDate() + 1)) {
      const { rise: Xt, set: $t } = hl(u, new Date(_t));
      Xt && $t && At.push({ rise: Xt.getTime(), set: $t.getTime() });
    }
    const St = (_t, Xt) => K - (K - Ct) * Math.sin(Math.PI * (Xt - _t.rise) / (_t.set - _t.rise)), Zt = (_t) => !At.some((Xt) => _t >= Xt.rise && _t <= Xt.set);
    let Gt = "", Nt = "", ae = "";
    At.forEach((_t, Xt) => {
      const $t = [];
      for (let Rt = _t.rise; Rt <= _t.set; Rt += 15 * Dn) $t.push(rt(Rt) + "," + St(_t, Rt).toFixed(2));
      $t.push(rt(_t.set) + "," + K), Gt += '<polyline class="wbLineArc" points="' + $t.join(" ") + '"/>';
      const Te = At[Xt + 1];
      Te && (Gt += '<rect class="wbLineNight" x="' + rt(_t.set) + '" y="0" width="' + ((Te.rise - _t.set) / Ie).toFixed(3) + '" height="100"/>'), [[_t.rise, "↑"], [_t.set, "↓"]].forEach(([Rt, He]) => {
        Rt < m.a || Rt > x.b || (Nt += '<line class="wbLineEdge" x1="' + rt(Rt) + '" x2="' + rt(Rt) + '" y1="0" y2="100"/>', ae += '<span class="wbLineTime" style="left:' + P(Rt) + '">' + He + " " + Ot(en(new Date(Rt), u)) + "</span>");
      });
    });
    const jt = At.find((_t) => O >= _t.rise && O <= _t.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + Z + ' 100" preserveAspectRatio="none" aria-hidden="true">' + Gt + Nt + '<line class="wbLineHorizon" x1="0" x2="' + Z + '" y1="' + K + '" y2="' + K + '"/></svg>' + ae + (jt ? '<span class="wbLineNow" style="left:' + P(O) + ";top:" + St(jt, O) + '%">' + qd("sunny", !1) + "</span>" : "") + T.filter((_t) => _t.entry && !_t.now).map((_t) => '<span class="wbLineGlyph' + _t.edge + '" style="left:' + P(_t.t) + '">' + qd(_t.entry.condition ?? "cloudy", Zt(_t.t)) + "</span>").join("");
  }
  function Yt(u, m) {
    delete J.hourly;
    const x = G.hourlyView === "bars" ? "bars" : "strip", T = '<div class="wbHeader"><h2 class="wbTitle">' + Ot(x === "bars" ? Dt.nextDays : Dt.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + Ot(Dt.showAs) + '">' + ["strip", "bars"].map((Rt) => '<button aria-pressed="' + (Rt === x) + '" data-wb="hourly-view" data-view="' + Rt + '" data-wb-focus="hourly-view-' + Rt + '">' + Ot(Dt.views[Rt]) + "</button>").join("") + "</div></div>";
    if (x === "bars") return Aa(u, m, T);
    const O = D("hourly"), P = Math.floor(Date.now() / Dn) * Dn, Z = O.filter((Rt) => new Date(Rt.datetime).getTime() > P - Ie);
    if (!Z.length) return "";
    const rt = va(Z), K = rt.includes(G.hourlyMode) ? G.hourlyMode : "temperature", Ct = Kt(u, O, P);
    if (!Ct.length) return "";
    const At = Ct[0], St = Ct[Ct.length - 1], Zt = (At.b - At.a) / Ie, Gt = (Rt) => "calc(var(--wb-u) * " + ((Rt - At.a) / Ie).toFixed(3) + ")", Nt = new Date(At.a);
    Nt.setHours(6, 0, 0, 0), Nt.getTime() > At.a && Nt.setDate(Nt.getDate() - 1);
    const ae = Math.ceil((St.b - Nt.getTime()) / En);
    f !== "line" && (J.hourly = { segs: Li(Nt, O, ae), seed: Nt.getDate(), columns: ae });
    const jt = (Rt) => Rt === At.a ? " wbFirst" : Rt === St.b ? " wbLast" : "", _t = [];
    for (let Rt = At.a; Rt < St.b; ) {
      const He = new Date(Rt);
      He.setHours(24, 0, 0, 0);
      const Be = Math.min(He.getTime(), St.b);
      _t.push({ a: Rt, b: Be, label: oe(u, { datetime: new Date(Rt).toISOString() }), page: Ct.find((dn) => dn.a >= Rt && dn.a < Be) || Ct.find((dn) => dn.a < Be && dn.b > Rt) }), Rt = Be;
    }
    const Xt = P > At.a && P < St.b ? Math.floor((P - At.a) / (2 * Ie)) * 2 : 0, $t = [];
    for (let Rt = At.a; Rt <= St.b; Rt += Ie) {
      const He = new Date(Rt), Be = jt(Rt);
      !Be && He.getHours() % rf || !Be && (Math.abs(At.a - Rt) < 2 * Ie || Math.abs(St.b - Rt) < 2 * Ie) || P >= At.a && Math.abs(Rt - P) < 1.5 * Ie && !Be || $t.push({ t: Rt, edge: Be, label: en(He, u), entry: Rt >= P - Ie ? O.find((dn) => new Date(dn.datetime).getTime() === Rt) : void 0 });
    }
    P > At.a && P < At.b && $t.push({ t: P, edge: P - At.a < Ie ? " wbFirst" : At.b - P < Ie ? " wbLast" : "", label: Dt.now, entry: Z[0], now: !0 });
    const Te = (Rt, He) => '<span class="wbMark' + Rt.edge + (Rt.now ? " wbNowMark" : "") + '" style="left:' + Gt(Rt.t) + '">' + He + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + T + (rt.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + rt.map((Rt) => '<button aria-pressed="' + (Rt === K) + '" data-wb="hourly-mode" data-mode="' + Rt + '" data-wb-focus="hourly-mode-' + Rt + '">' + Ot(Dt.modes[Rt]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + Ot(Dt.nextHours) + '" data-span="' + Zt + '" data-start="' + Xt + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Zt + ");width:calc(var(--wb-u) * " + (St.b - At.a) / Ie + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((St.b - At.a) / (2 * Ie)) + 1)].map((Rt, He) => '<i class="wbSnap" style="left:' + Gt(At.a + He * 2 * Ie) + '"></i>').join("") + '<div class="wbDays">' + _t.map((Rt, He) => {
      var Be;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((Rt.b - Rt.a) / Ie).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (He === 0 ? Xt : ((((Be = Rt.page) == null ? void 0 : Be.a) ?? Rt.a) - At.a) / Ie) + '" data-wb-focus="hours-day-' + He + '">' + Ot(Rt.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + $t.map((Rt) => Te(Rt, Ot(Rt.label))).join("") + "</div>" + (f === "line" ? '<div class="wbSky wbLineSky">' + It(u, At, St, $t, P, Gt) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + Gt(Nt.getTime()) + ";width:calc(var(--wb-u) * " + ae * 24 + ')"><canvas data-wb-strip="hourly"' + (f === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (P > At.a ? '<i class="wbPast" style="width:' + Gt(Math.min(P, St.b)) + '"></i><i class="wbNowLine" style="left:' + Gt(P) + '"></i>' : "") + _t.slice(1).map((Rt) => '<i class="wbMidnight" style="left:' + Gt(Rt.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + $t.map((Rt) => {
      if (!Rt.entry) return "";
      const [He, Be] = hr(u, Rt.entry, K);
      return Te(Rt, '<span class="wbPrimaryV">' + Ot(He) + '</span><span class="wbSecondary">' + Ot(Be) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function De(u) {
    const m = sf, x = m.findIndex(([K]) => K >= u);
    if (x <= 0) return "rgb(" + m[x < 0 ? m.length - 1 : 0][1].join(",") + ")";
    const [T, O] = m[x - 1], [P, Z] = m[x], rt = (u - T) / (P - T);
    return "rgb(" + O.map((K, Ct) => Math.round(K + (Z[Ct] - K) * rt)).join(",") + ")";
  }
  function Aa(u, m, x) {
    var Gt;
    const T = D("daily").filter((Nt) => je(Nt.templow) && je(Nt.temperature)).slice(0, 7);
    if (!T.length) return "";
    const O = Math.min(...T.map((Nt) => Number(Nt.templow))), P = Math.max(...T.map((Nt) => Number(Nt.temperature))), Z = Math.max(1, P - O), rt = (Nt) => Math.max(0, Math.min(100, (Nt - O) / Z * 100)).toFixed(2), K = /F/.test(dr(u, _(u, "daily"), "temperature")), Ct = (Nt) => K ? (Nt - 32) / 1.8 : Nt, At = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((Nt) => De(Ct(O + Nt * Z)) + " " + Nt * 100 + "%").join(",") + ")", St = (Gt = la(u, m, "temperature")) == null ? void 0 : Gt.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (va(D("hourly").filter((Nt) => new Date(Nt.datetime).getTime() > Date.now() - Ie)).length > 1 ? " wbTabbed" : "") + '">' + x + '<div class="wbDayBars" role="list">' + T.map((Nt, ae) => {
      const jt = oe(u, Nt), _t = Ns(new Date(Nt.datetime), /* @__PURE__ */ new Date()), Xt = Number(Nt.templow), $t = Number(Nt.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + Ot(tn(Dt.rangeRow, { day: jt, low: $e(u, Xt), high: $e(u, $t) })) + '"><span class="wbRangeDay">' + Ot(jt) + "</span>" + me(Nt.condition, 40, !1, "r" + ae) + '<span class="wbRangeLo">' + Ot($e(u, Xt)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + At + ";clip-path:inset(0 " + (100 - rt($t)) + "% 0 " + rt(Xt) + '% round 4px)"></i>' + (_t && je(St) ? '<i class="wbRangeNow" style="left:' + rt(Number(St)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + Ot($e(u, $t)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  function eo(u) {
    const m = X, { rise: x, set: T } = hl(u, m), O = x && T ? Math.round((T.getTime() - x.getTime()) / Dn) : 0, P = Math.floor(O / 60), Z = O % 60, rt = x && T ? (m.getTime() - x.getTime()) / (T.getTime() - x.getTime()) : -1, K = rt >= 0 && rt <= 1, Ct = Math.PI * (1 - Math.min(1, Math.max(0, rt))), At = 100 + 74 * Math.cos(Ct), St = 100 - 74 * Math.sin(Ct), Zt = K ? Math.sin(Math.PI * rt) : 0, Gt = K ? ml("#2e0a0d", "#43180a", Zt) : "#0e0507", Nt = K ? ml("#7a1d12", "#8f400f", Zt) : "#1c0709", ae = ml("#f60c08", "#ff8f00", Zt), jt = ml("#fd9b07", "#ffd84a", Zt), _t = K ? ml("#fd9b07", "#ffd84a", Zt) : "#6b3a2a", Xt = (Be) => Be ? en(Be, u) : "–", $t = x && T ? new Date((x.getTime() + T.getTime()) / 2) : null, Te = new Date(m);
    Te.setDate(Te.getDate() + 1);
    const Rt = hl(u, Te), He = Rt.rise && Rt.set ? Math.round((Rt.set.getTime() - Rt.rise.getTime()) / Dn) : 0;
    return _n({
      icon: We.sunny,
      name: Dt.sun,
      sub: O ? tn(Dt.daylightShort, { hours: P, minutes: Z }) : void 0,
      callouts: [[Dt.callout.riseTomorrow, Xt(Rt.rise)], [Dt.callout.setTomorrow, Xt(Rt.set)], ...He ? [[Dt.callout.dayTomorrow, Math.floor(He / 60) + "h " + He % 60 + "m"]] : []],
      zone: '<div class="wbSunSky" style="background:linear-gradient(180deg, ' + Gt + ", " + Nt + ");--wb-sun-line:" + _t + '"><svg viewBox="0 0 200 124" aria-hidden="true"><defs><radialGradient id="' + S + 'sun-glow"><stop offset="0" stop-color="' + ae + '"></stop><stop offset="0.45" stop-color="' + ae + '"></stop><stop offset="1" stop-color="' + jt + '"></stop></radialGradient><clipPath id="' + S + 'above-horizon"><rect x="0" y="0" width="200" height="100"></rect></clipPath></defs><path class="wbSunPath" d="M 26 100 A 74 74 0 0 1 174 100"></path><line class="wbHorizon" x1="0" x2="200" y1="100" y2="100"></line>' + (K ? '<circle cx="' + At + '" cy="' + St + '" r="14" fill="url(#' + S + 'sun-glow)" clip-path="url(#' + S + 'above-horizon)"></circle>' : "") + ($t ? '<text class="wbSunTime wbNoon" x="100" y="1">' + Ot(Xt($t)) + "</text>" : "") + '<text class="wbSunTime" x="26" y="117">' + Ot(Xt(x)) + '</text><text class="wbSunTime" x="174" y="117">' + Ot(Xt(T)) + "</text></svg></div>"
    });
  }
  function Ut(u, m, x) {
    const T = (Z) => S + "moon-" + Z, O = u > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + T("terminator") + ')" d="' + Kf(61, 61, 57.9, u) + '"' + (m ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", P = (Z, rt, K, Ct, At, St) => '<filter id="' + T(Z) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + rt + '" numOctaves="' + K + '" seed="' + Ct + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Zt) => "<feFunc" + Zt + ' type="linear" slope="' + At + '" intercept="' + St + '"></feFunc' + Zt + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + T("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + T("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + T("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + T("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + T("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + P("mottle", "0.045", 4, 3, 1.8, -0.4) + P("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + T("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + T("fill") + ')"></circle><g' + (x ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + T("soften") + ')">' + Jf.map(([Z, rt, K, Ct, At, St]) => '<ellipse cx="' + Z + '" cy="' + rt + '" rx="' + K + '" ry="' + Ct + '" fill-opacity="' + St + '" transform="rotate(' + At + " " + Z + " " + rt + ')"></ellipse>').join("") + "</g>" + Qf.map(([Z, rt, K]) => '<circle class="wbCrater" cx="' + Z + '" cy="' + rt + '" r="' + K + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + T("glow") + ')">' + th.map(([Z, rt]) => '<line x1="54.4" y1="95" x2="' + Z + '" y2="' + rt + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + T("glow") + ')">' + jc.map(([Z, rt, K]) => '<circle cx="' + Z + '" cy="' + rt + '" r="' + K * 2 + '"></circle>').join("") + "</g>" + jc.map(([Z, rt, K]) => '<circle class="wbBrightCenter" cx="' + Z + '" cy="' + rt + '" r="' + K + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + T("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + T("grain") + ')"></rect>' + O + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function se(u) {
    const m = lt, x = vl(u), T = (x == null ? void 0 : x.lat) ?? 0, O = zd(m), P = Oc(u), Z = P ? u.states[P] : void 0, rt = Qr(Z) && wf.includes(Z.state) ? Z.state : qf(O.phase), { rise: K, set: Ct } = x ? Wf(m, x.lat, x.lon) : {}, At = O.phase > 0.5 != T < 0, St = Le(Math.round(O.fraction * 100), u.locale) + "%", Zt = K ?? Ct;
    return Zt && en(Zt, u), _n({
      icon: We.night,
      name: Dt.moon,
      sub: Dt.phases[rt],
      callouts: [...K ? [[Dt.callout.moonrise, en(K, u)]] : [], ...Ct ? [[Dt.callout.moonset, en(Ct, u)]] : [], [Dt.callout.lit, St]],
      zone: '<div class="wbMoonBox">' + Ut(O.fraction, At, T < 0) + "</div>"
    });
  }
  function ea(u, m) {
    var Nt;
    const x = la(u, m, "wind_speed");
    if (!x || !je(x.value)) return "";
    const T = la(u, m, "wind_gust_speed"), O = la(u, m, "wind_bearing"), P = O && je(O.value) ? Number(O.value) : void 0, Z = Gf(Number(x.value), (Nt = x.stateObj.attributes) == null ? void 0 : Nt.wind_speed_unit), rt = hd(u, x.stateObj, "wind_speed", x.value), K = P !== void 0 ? Dt.cardinal[bf[((P + 11.25) / 22.5 | 0) % 16]] : void 0, Ct = T ? Ic(u, T.stateObj, "wind_gust_speed", T.value) : void 0, At = [K ? tn(Dt.windFrom, { direction: K }) : void 0, Z !== void 0 ? Z + " " + Dt.beaufort : void 0].filter(Boolean).join(" · ") || Ct, St = (ae, jt) => {
      const _t = (ae - 90) * Math.PI / 180;
      return [100 + jt * Math.cos(_t), 100 + jt * Math.sin(_t)];
    }, Zt = Array.from({ length: 36 }, (ae, jt) => jt * 10).map((ae) => {
      const jt = ae % 90 === 0, [_t, Xt] = St(ae, 97), [$t, Te] = St(ae, jt ? 83 : 89);
      return '<line class="wbTick' + (jt ? " wbMajor" : "") + '" x1="' + _t + '" y1="' + Xt + '" x2="' + $t + '" y2="' + Te + '"></line>';
    }).join(""), Gt = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([ae, jt]) => {
      const [_t, Xt] = St(jt, 64);
      return '<text class="wbLetter' + (ae === "n" ? " wbNorth" : "") + '" x="' + _t + '" y="' + Xt + '">' + Ot(Dt.cardinal[ae]) + "</text>";
    }).join("");
    return _n({ icon: We.windy, name: Dt.wind, sub: At, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Zt + Gt + (P !== void 0 ? '<path class="wbMarker" transform="rotate(' + P + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + Ot(rt.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + Ot(rt.unit) + "</text></svg>" });
  }
  const ao = (u, m) => {
    if (u < 3) return Dt.advice.fine;
    if (u < 8) return Dt.advice.sunblock;
    const x = Date.now(), T = D("hourly").find((O) => O.uv_index != null && new Date(O.datetime).getTime() > x && O.uv_index < 6);
    return T && new Date(T.datetime).toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? tn(Dt.advice.avoidUntil, { time: en(new Date(T.datetime), m) }) : Dt.advice.avoidToday;
  };
  function Ua(u, m) {
    const x = la(u, m, "uv_index");
    if (!x || !je(x.value)) return "";
    const T = Number(x.value), O = Dt.uvLevel[Hc(T)], P = /* @__PURE__ */ new Date();
    P.setHours(23, 59, 59, 999);
    const Z = D("hourly").filter((At) => At.uv_index != null && new Date(At.datetime) > /* @__PURE__ */ new Date() && new Date(At.datetime) <= P).reduce((At, St) => !At || St.uv_index > At.uv ? { uv: St.uv_index, time: new Date(St.datetime) } : At, void 0), rt = xf[Hc(T)], K = 216 * Math.min(1, Math.max(0.08, 0.4 + (T - 4.5) * (0.5 / 5.5))), Ct = '<svg class="wbUvArt" viewBox="0 0 216 198" preserveAspectRatio="xMinYMin slice" aria-hidden="true"><defs><radialGradient id="' + S + 'uv-sun" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="' + K.toFixed(1) + '"><stop offset="0" style="stop-color:color-mix(in srgb, ' + rt + ' 28%, #fff6dd)"></stop><stop offset=".62" style="stop-color:color-mix(in srgb, ' + rt + ' 62%, #fff6dd)"></stop><stop offset="1" style="stop-color:' + rt + '"></stop></radialGradient></defs><circle class="wbUvSun" cx="0" cy="0" r="' + K.toFixed(1) + '" fill="url(#' + S + 'uv-sun)"></circle></svg><div class="wbUvBig"><span class="wbUvNum">' + Ot(Le(Math.round(T), u.locale)) + '</span><span class="wbUvWord">' + Ot(O) + "</span></div>";
    return _n({
      icon: We.sunnyAlert,
      name: Dt.metrics.uv_index,
      sub: Z && Z.uv > T ? tn(Dt.uvPeak, { level: O, uv_index: Le(Math.round(Z.uv), u.locale), time: en(Z.time, u) }) : O,
      zone: Ct,
      cls: "wbUv",
      callouts: [ao(T, u), [Dt.callout.now, Le(Math.round(T), u.locale) + " · " + O], [Dt.callout.peak, Z && Z.uv > T ? Le(Math.round(Z.uv), u.locale) + " at " + en(Z.time, u) : Dt.callout.now]]
    });
  }
  function Qe(u) {
    const m = D("daily")[0], x = Lt.temperatureHistory;
    if (!m || new Date(m.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !je(m.temperature) || !x || x.dailyHighs.length < ff) return "";
    const T = Number(m.temperature), O = x.dailyHighs.reduce((jt, _t) => jt + _t, 0) / x.dailyHighs.length, P = Math.round(T - O) || 0, Z = P > 0 ? "above" : P < 0 ? "below" : "same", rt = [...x.days, { date: /* @__PURE__ */ new Date(), high: T, today: !0 }], K = rt.map((jt) => jt.high).concat(O), Ct = Math.min(...K) - 1, At = Math.max(...K) + 1, St = (jt) => (1 - (jt - Ct) / (At - Ct)) * 100, Zt = (jt) => (jt + 0.5) / rt.length * 100, Gt = rt.map((jt, _t) => [Zt(_t), St(jt.high)]), Nt = Gt.map(([jt, _t], Xt) => (Xt ? "L" : "M") + jt.toFixed(2) + " " + _t.toFixed(2)).join(""), ae = '<div class="wbCompareBars wbTrend" aria-hidden="true"><div class="wbTrendPlot"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><defs><linearGradient id="' + S + 'trend" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--primary)" stop-opacity=".28"></stop><stop offset="1" style="stop-color:var(--primary)" stop-opacity="0"></stop></linearGradient></defs><path class="wbTrendArea" d="' + Nt + "L" + Gt[Gt.length - 1][0].toFixed(2) + " 100L" + Gt[0][0].toFixed(2) + ' 100Z" fill="url(#' + S + 'trend)"></path><line class="wbAvgLine" x1="0" x2="100" y1="' + St(O).toFixed(2) + '" y2="' + St(O).toFixed(2) + '" vector-effect="non-scaling-stroke"></line><path class="wbTrendLine" d="' + Nt + '" vector-effect="non-scaling-stroke"></path></svg><span class="wbTrendAvg" style="top:' + St(O).toFixed(2) + '%">' + Ot($e(u, O)) + "</span>" + rt.map((jt, _t) => {
      const Xt = jt.today ? " wbToday" : "", $t = "left:" + Zt(_t).toFixed(2) + "%;top:" + St(jt.high).toFixed(2) + "%";
      return '<i class="wbTrendDot' + Xt + '" style="' + $t + '"></i><span class="wbAvgValue' + Xt + '" style="' + $t + '">' + Ot($e(u, jt.high)) + "</span>";
    }).join("") + '</div><div class="wbTrendDays">' + rt.map((jt, _t) => '<span class="wbAvgDay' + (jt.today ? " wbToday" : "") + '" style="left:' + Zt(_t).toFixed(2) + '%">' + Ot(Ef(jt.date, u)) + "</span>").join("") + "</div></div>";
    return _n({
      icon: We.chartLine,
      name: Dt.metrics.compared_to_average,
      double: !0,
      sub: tn(Dt.highsLastDays, { days: x.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (P > 0 ? "+" : "") + Ot($e(u, P)) + '</div><div class="wbCompareWords">' + Ot(Dt.average[Z]) + '</div><div class="wbCompareTemps">' + Ot(tn(Dt.todayVsAverage, { today: $e(u, T), average: $e(u, O) })) + "</div></div>" + ae + "</div>"
    });
  }
  function Ai(u, m) {
    const x = la(u, m, "humidity");
    if (!x || !je(x.value)) return "";
    const T = la(u, m, "dew_point"), O = Math.max(0, Math.min(100, Number(x.value)));
    return _n({
      icon: We.waterPercent,
      name: Dt.metrics.humidity,
      sub: T && je(T.value) ? tn(Dt.dewPoint, { dew_point: $e(u, T.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + O + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + sr(Le(Math.round(Number(x.value)), u.locale), "%") + "</div>"
    });
  }
  function pa(u, m) {
    var jt, _t, Xt;
    const x = la(u, m, "pressure");
    if (!x || !je(x.value)) return "";
    const T = Number(x.value), O = (jt = x.stateObj.attributes) == null ? void 0 : jt.pressure_unit, P = Fc(T, O), Z = ((_t = Lt.pressureHistory) == null ? void 0 : _t.entityId) === x.stateObj.entity_id ? Fc(Lt.pressureHistory.value, O) : void 0;
    let rt;
    if (P !== void 0 && Z !== void 0) {
      const $t = P - Z;
      rt = $t >= _c ? "rising" : $t <= -_c ? "falling" : "steady";
    }
    const K = hd(u, x.stateObj, "pressure", Math.round(T)), Ct = x.stateObj, At = ($t) => O === "inHg" ? Math.round($t * 100) / 100 : Math.round($t), St = ($t) => Ic(u, Ct, "pressure", At($t)), Zt = Z !== void 0 ? Lt.pressureHistory.value : void 0, Gt = Zt !== void 0 ? At(T - Zt) : void 0, Nt = (Xt = Ct.entity_id) != null && Xt.startsWith("weather.") ? D("hourly").find(($t) => je($t.pressure) && new Date($t.datetime).getTime() >= Date.now() + 3 * Ie - 30 * Dn) : void 0, ae = [
      ...rt ? [Dt.advice[rt]] : [],
      ...Zt !== void 0 ? [[Dt.callout.hoursAgo, St(Zt)], [Dt.callout.change, (Gt > 0 ? "+" : Gt < 0 ? "−" : "") + St(Math.abs(Gt))]] : [],
      ...Nt ? [[Dt.callout.inHours, St(Number(Nt.pressure))]] : []
    ];
    return _n({
      icon: We.gauge,
      name: Dt.metrics.pressure,
      sub: rt ? Dt.pressure[rt] : void 0,
      cls: "wbPressure",
      callouts: ae,
      zone: '<div class="wbTapeRow"><div class="wbTapeValue">' + sr(K.number) + '<span class="wbTapeUnit">' + Ot(K.unit) + "</span></div>" + (P !== void 0 ? To(u, P) : "") + "</div>"
    });
  }
  function To(u, m) {
    const O = Math.floor(m) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (P, Z) => O + Z).map((P) => {
      const Z = 100 - (P - m) * 9;
      if (Z < 22 || Z > 178) return "";
      const rt = P % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(Z - 100) / 100) + '"><line class="wbTapeTick" x1="' + (rt ? 2 : 8) + '" x2="26" y1="' + Z + '" y2="' + Z + '"></line>' + (rt ? '<text class="wbTapeLabel" x="33" y="' + Z + '">' + Ot(Le(P, u.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + Ot(Dt.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + Ot(Dt.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function Lo(u) {
    var K, Ct;
    const m = Gd(u), x = m ? u.states[m] : void 0;
    if (!x || ((K = Lt.rain) == null ? void 0 : K.entityId) !== m || !je(Lt.rain.change)) return "";
    const T = ((Ct = x.attributes) == null ? void 0 : Ct.unit_of_measurement) ?? "", O = _(u, "hourly"), P = Date.now() + En, Z = D("hourly").filter((At) => At.precipitation != null && new Date(At.datetime).getTime() <= P), rt = Z.reduce((At, St) => At + Number(St.precipitation), 0);
    return _n({
      icon: We.rainy,
      name: Dt.metrics.precipitation,
      sub: O && Z.length ? tn(Dt.rainExpected, { amount: Le(rt, u.locale, { maximumFractionDigits: 1 }) + " " + dr(u, O, "precipitation") }) : Dt.rainLast24h,
      visual: sr(Le(Lt.rain.change, u.locale, { maximumFractionDigits: 1 }), T) + (Z.length > 1 ? Xf(Z.map((At) => ({ label: "", value: Number(At.precipitation) }))) : "")
    });
  }
  function Ao(u, m) {
    const x = la(u, m, "visibility");
    if (!x || !je(x.value)) return "";
    const T = hd(u, x.stateObj, "visibility", x.value), O = ef(Number(x.value), dr(u, x.stateObj, "visibility"));
    return _n({
      icon: We.eyeOutline,
      name: Dt.metrics.visibility,
      sub: Dt.visibilityLevel[af(O)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + O + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + Ot(ua(u, O)) + '</div><div class="wbSeaValue">' + sr(T.number, T.unit) + "</div></div>"
    });
  }
  function ua(u, m) {
    var P;
    const x = tf((P = u.config) == null ? void 0 : P.country, m);
    if (x) return tn(Dt.visibilityLandmarks, { from: x.from, to: x.to });
    const T = m / gf * 60;
    if (T < 60) {
      const Z = T < 5 ? Math.max(1, Math.round(T)) : 5 * Math.round(T / 5);
      if (Z < 60) return tn(Dt.walkMinutes, { minutes: Le(Z, u.locale) });
    }
    const O = Math.max(1, Math.round(T / 30) / 2);
    return O < 8 ? tn(Dt.walkHours, { hours: Le(O, u.locale) }) : Dt.walkDay;
  }
  function Wn(u) {
    Lt.categories === void 0 && Ci(u);
    const m = Ht(u), x = (K) => K.map((Ct) => u.states[Ct]).filter(Qr), T = x(m.air), O = x(m.pollen);
    if (!T.length && !O.length) return "";
    const P = [...T, ...O], Z = (K) => O.includes(K) ? We.flower : We.airFilter, rt = P.find((K) => K.entity_id === G.aq);
    return rt ? _i(u, rt, Z(rt)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + Ot(Dt.airQuality) + '</h2></div><div class="wbAqTiles">' + P.map((K) => '<button class="wbTile" data-wb="aq-open" data-entity="' + Ot(K.entity_id) + '"><span class="wbChip">' + yi(Z(K)) + '</span><span class="wbText"><span class="wbName">' + Ot(Xr(u, K)) + '</span><span class="wbSub">' + Ot(rr(u, K)) + "</span></span></button>").join("") + "</div></div>";
  }
  function _i(u, m, x) {
    var At, St, Zt;
    const T = ((At = m.attributes) == null ? void 0 : At.unit_of_measurement) ?? "", O = ((St = m.attributes) == null ? void 0 : St.device_class) === "pm25" && T === Ec && je(m.state), P = Number(m.state), Z = O ? Vd(P) : void 0, rt = ((Zt = Lt.aqHistory) == null ? void 0 : Zt.entityId) === m.entity_id ? Lt.aqHistory.points : void 0, K = (Gt) => Math.min(100, Math.max(0, Gt / ld * 100));
    let Ct;
    if (rt && rt.length > 1) Ct = qc(rt, (Gt) => (Le(Gt, u.locale, { maximumFractionDigits: 1 }) + " " + T).trim());
    else if (Z) {
      let Gt = 0;
      const Nt = Lp.map(([ae, jt]) => {
        const _t = K(Math.min(jt, ld)), Xt = yf[ae] + " " + Gt + "% " + _t + "%";
        return Gt = _t, Xt;
      });
      Ct = '<div class="wbScale" role="meter" aria-label="' + Ot(Dt.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + ld + '" aria-valuenow="' + P + '" style="background:linear-gradient(to right, ' + Nt.join(", ") + ')"><i style="left:' + K(P) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + ld + " " + Ec + "</span></div>";
    } else Ct = '<span class="wbGraphNote"><span>' + Ot(rr(u, m)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + yi(x) + '</span><span class="wbText"><span class="wbName">' + Ot(Xr(u, m)) + '</span><span class="wbSub">' + Ot(rr(u, m)) + (Z ? " · " + Ot(Dt.aqLevel[Z]) : "") + '</span></span><button class="wbBack" title="' + Ot(Dt.back) + '" data-wb="aq-close">' + yi(We.back) + '</button></div><div class="wbGraph">' + Ct + "</div></div></div>";
  }
  const mr = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, on = (u) => u <= 50 ? "Good" : u <= 100 ? "Moderate" : u <= 150 ? "Unhealthy for some" : u <= 200 ? "Unhealthy" : u <= 300 ? "Very unhealthy" : "Hazardous";
  function no(u) {
    const m = /* @__PURE__ */ new Map();
    return Object.values(u.states || {}).filter((x) => {
      var T;
      return x.entity_id.startsWith("sensor.") && vd.includes(((T = x.attributes) == null ? void 0 : T.device_class) ?? "") && Qr(x) && Is(u, x.entity_id);
    }).sort((x, T) => x.entity_id.localeCompare(T.entity_id)).forEach((x) => {
      m.has(x.attributes.device_class) || m.set(x.attributes.device_class, x);
    }), vd.map((x) => m.get(x)).filter(Boolean);
  }
  const Bn = (u) => Object.values(u.states || {}).filter((m) => {
    var x, T;
    return m.entity_id.startsWith("sensor.") && Qr(m) && Is(u, m.entity_id) && (((T = (x = u.entities) == null ? void 0 : x[m.entity_id]) == null ? void 0 : T.translation_key) ?? m.entity_id).toLowerCase().includes("pollen");
  }), rn = ["none", "very_low", "low", "moderate", "high", "very_high"], Rn = (u) => je(u.state) ? Number(u.state) : rn.indexOf(String(u.state).toLowerCase().replace(/ /g, "_")), sn = (u) => {
    const m = String(u).replace(/_/g, " ");
    return m[0].toUpperCase() + m.slice(1);
  }, gr = (u, m, x) => {
    const T = x ? u === "aqi" ? m <= 50 ? "good" : m <= 100 ? "moderate" : "poor" : u === "pm25" ? Vd(m) : null : null;
    return T === "good" || T === "fair" ? Dt.advice.window : T === "moderate" || T === null ? Dt.advice.fine : Dt.advice.closed;
  };
  function Nn(u) {
    const m = no(u), x = m[0];
    if (!x) return _n({ icon: We.airFilter, name: Dt.airQuality, sub: Dt.noAir, visual: sr("–", ""), cls: "wbBase" });
    const T = x.attributes.device_class, O = Number(x.state), P = je(x.state), Z = T === "aqi" && P ? on(O) : T === "pm25" && P ? mr[Vd(O)] : rr(u, x);
    return _n({
      icon: We.airFilter,
      name: Dt.airQuality,
      sub: Z,
      cls: "wbBase",
      zone: sr(P ? Le(Math.round(O), u.locale) : String(x.state), T === "aqi" ? "AQI" : x.attributes.unit_of_measurement || ""),
      callouts: [gr(T, O, P), ...m.slice(1, 3).map((rt) => [Xr(u, rt), rr(u, rt)])]
    });
  }
  const _e = [
    ["wbSeed", '<svg viewBox="0 0 22 30" aria-hidden="true"><path d="M11 28V11" fill="none" stroke="currentColor" stroke-width="1"></path><path d="M11 11L3 6M11 11L5 2.5M11 11L8.5 1M11 11L13.5 1M11 11L17 2.5M11 11L19 6" fill="none" stroke="currentColor" stroke-width=".8" stroke-linecap="round"></path><circle cx="11" cy="28.5" r="1.4" fill="currentColor"></circle></svg>'],
    ["wbGrain", '<svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="3.3" fill="currentColor"></circle><path d="M6 1.2v1.4M6 9.4v1.4M1.2 6h1.4M9.4 6h1.4M2.6 2.6l1 1M8.4 8.4l1 1M2.6 9.4l1-1M8.4 3.6l1-1" stroke="currentColor" stroke-width=".9" stroke-linecap="round"></path></svg>'],
    ["wbStem", '<svg viewBox="0 0 10 30" aria-hidden="true"><path d="M5 29Q3.6 18 5 8" fill="none" stroke="currentColor" stroke-width="1"></path><ellipse cx="5" cy="6" rx="2.3" ry="4.6" fill="currentColor"></ellipse></svg>']
  ], _o = (u) => {
    const m = [1, 3, 5, 7, 10, 13][Math.max(0, Math.min(5, Number.isFinite(u) ? Math.round(u) : 0))];
    return '<div class="wbPollenAir" aria-hidden="true">' + Array.from({ length: m }, (x, T) => {
      const [O, P] = _e[T % 3], Z = 10 + T * 7 % 9, rt = 2.6 + T * 5 % 4 * 0.4;
      return '<span class="wbFloat ' + O + '" style="top:' + (4 + T * 37 % 52) + "%;--x:" + (T * 29 % 90 + 4) + "%;--s:" + (0.8 + T * 13 % 5 / 10).toFixed(1) + ";animation-duration:" + Z + "s;animation-delay:-" + (T * 2.3 % Z).toFixed(1) + 's"><span class="wbPush"><span class="wbBob" style="animation-duration:' + rt.toFixed(1) + "s;animation-delay:-" + (T * 0.7 % rt).toFixed(1) + 's">' + P + "</span></span></span>";
    }).join("") + "</div>";
  };
  function ia(u) {
    const m = Bn(u).sort((O, P) => Rn(P) - Rn(O));
    if (!m.length) return _n({ icon: We.flower, name: Dt.pollen, sub: Dt.noPollen, visual: sr("–", ""), cls: "wbBase" });
    const x = m[0], T = (O) => je(O.state) ? rr(u, O) : sn(O.state);
    return _n({
      icon: We.flower,
      name: Dt.pollen,
      sub: Xr(u, x) + " · " + T(x),
      cls: "wbBase wbPollen",
      zone: _o(Rn(x)) + sr(T(x), ""),
      callouts: m.slice(0, 3).map((O) => [Xr(u, O), T(O)])
    });
  }
  function vr(u) {
    const m = Date.now(), x = D("hourly").filter((P) => {
      const Z = new Date(P.datetime).getTime();
      return Z > m - Ie && Z < m + 12 * Ie;
    }), T = x.find((P) => (P.precipitation_probability ?? 0) >= 50 || (P.precipitation ?? 0) >= 0.2), O = T ? tn(Dt.rainFrom, { time: en(new Date(Math.max(m, new Date(T.datetime).getTime())), u) }) : x.length ? Dt.noRain12 : void 0;
    return _n({ icon: We.radar, name: Dt.rainRadar, sub: O, cls: "wbBase", visual: '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i></div>' });
  }
  const Na = {
    current: ts,
    hourly: Yt,
    sun: eo,
    moon: se,
    wind: ea,
    uv_index: Ua,
    compared_to_average: Qe,
    humidity: Ai,
    pressure: pa,
    precipitation: Lo,
    visibility: Ao,
    air_quality: Wn,
    aq_tile: Nn,
    pollen_tile: ia,
    radar_tile: vr
  }, fa = [["day", "Last 24 hours", 1], ["week", "Last 7 days", 7], ["month", "Last 30 days", 30]], ha = (u, m) => {
    var x;
    return m.toLocaleDateString((x = u.locale) == null ? void 0 : x.language, { day: "numeric", month: "short" });
  }, br = (u) => {
    const m = new Date(u);
    return m.setMinutes(m.getMinutes() - m.getTimezoneOffset()), m.toISOString().slice(0, 10);
  }, Yo = () => {
    const u = G.range, m = Date.now();
    if (u.preset !== "custom") {
      const O = fa.find(([P]) => P === u.preset)[2];
      return [m - O * En, m];
    }
    const x = pr(/* @__PURE__ */ new Date(u.from + "T00:00")).getTime(), T = Math.min(m, pr(/* @__PURE__ */ new Date(u.to + "T00:00")).getTime() + En);
    return [Math.min(x, T - Ie), T];
  }, wr = (u) => {
    const m = G.range;
    if (m.preset !== "custom") return fa.find(([O]) => O === m.preset)[1];
    const [x, T] = Yo();
    return m.from === m.to ? ha(u, new Date(x)) : ha(u, new Date(x)) + " – " + ha(u, new Date(T - 1));
  }, oo = () => G.range.preset === "custom" ? G.range.from + "_" + G.range.to : G.range.preset, _a = (u, m) => m - u <= 2 * En, Zo = (u, m, x, T) => _a(x, T) ? en(m, u) : ha(u, m), Ei = (u, m = 60) => {
    const x = Math.max(1, Math.ceil(u.length / m));
    return u.filter((T, O) => O % x === 0 || O === u.length - 1);
  }, Ze = (u, m, x, T, O = !1) => u.callWS({
    type: "history/history_during_period",
    start_time: new Date(x).toISOString(),
    end_time: new Date(T).toISOString(),
    entity_ids: [m],
    minimal_response: O,
    no_attributes: O,
    significant_changes_only: !1
  }), Ea = (u) => async (m, x, T, O) => {
    const P = la(m, x, u);
    if (!P) return [];
    const Z = P.stateObj.entity_id, rt = await Ze(m, Z, T, O);
    return Ei(((rt == null ? void 0 : rt[Z]) ?? []).map((K) => {
      var St;
      const Ct = ((St = K.a) == null ? void 0 : St[u]) ?? (je(K.s) ? Number(K.s) : void 0), At = (K.lu ?? K.lc) * 1e3;
      return typeof Ct == "number" && At >= T && At <= O ? { t: new Date(At), value: Ct } : null;
    }).filter(Boolean)).map((K) => ({ label: Zo(m, K.t, T, O), value: K.value }));
  }, xe = (u, m) => async (x, T, O, P) => {
    const Z = u(x);
    if (!Z) return [];
    const rt = Z.entity_id, K = await Ze(x, rt, O, P, !0);
    return Ei(((K == null ? void 0 : K[rt]) ?? []).map((Ct) => {
      const At = m(Ct.s), St = Ct.lu * 1e3;
      return At == null || !Number.isFinite(At) || St < O || St > P ? null : { t: new Date(St), value: At };
    }).filter(Boolean)).map((Ct) => ({ label: Zo(x, Ct.t, O, P), value: Ct.value }));
  }, Eo = (u, m) => async (x, T, O, P) => {
    const Z = vl(x);
    if (!Z) return [];
    const rt = [];
    if (_a(O, P)) for (let K = O; K <= P; K += Ie / 2) rt.push({ label: en(new Date(K), x), value: u(new Date(K), Z) });
    else for (let K = P; K >= O; K -= En) {
      const Ct = new Date(K), At = m(Ct, Z, x);
      At != null && rt.unshift({ label: ha(x, Ct), value: At });
    }
    return Ei(rt);
  }, qn = (u) => Bn(u).sort((m, x) => Rn(x) - Rn(m))[0], jn = (u, m, x) => {
    const T = la(u, m, x);
    return T ? dr(u, T.stateObj, x) : "";
  }, Ko = {
    current: { name: () => Dt.modes.temperature, icon: () => We.sunny, load: Ea("temperature"), fmt: (u, m, x) => $e(u, x), now: (u, m) => {
      var x;
      return $e(u, (x = la(u, m, "temperature")) == null ? void 0 : x.value);
    } },
    sun: {
      name: () => Dt.sun,
      icon: () => We.sunny,
      load: Eo((u, m) => Math.round(wd(u, m.lat, m.lon) / xn), (u, m, x) => {
        const T = hl(x, u);
        return T.rise && T.set ? Math.round((T.set - T.rise) / Ie * 10) / 10 : null;
      }),
      fmt: (u, m, x, T) => T ? Le(x, u.locale) + "°" : Le(x, u.locale) + " h",
      sub: (u) => u ? "How high the sun was" : "Hours of daylight a day"
    },
    moon: {
      name: () => Dt.moon,
      icon: () => We.night,
      load: Eo((u) => Math.round(zd(u).fraction * 100), (u) => Math.round(zd(u).fraction * 100)),
      fmt: (u, m, x) => Le(x, u.locale) + "%",
      sub: () => "How much of it was lit"
    },
    uv_index: { name: () => Dt.metrics.uv_index, icon: () => We.sunnyAlert, load: Ea("uv_index"), fmt: (u, m, x) => Le(Math.round(x * 10) / 10, u.locale), now: (u, m) => {
      const x = la(u, m, "uv_index");
      return x ? Le(Number(x.value), u.locale) : "";
    } },
    humidity: { name: () => Dt.metrics.humidity, icon: () => We.waterPercent, load: Ea("humidity"), fmt: (u, m, x) => Le(Math.round(x), u.locale) + "%", now: (u, m) => {
      const x = la(u, m, "humidity");
      return x ? Le(Math.round(Number(x.value)), u.locale) + "%" : "";
    } },
    pressure: { name: () => Dt.metrics.pressure, icon: () => We.gauge, load: Ea("pressure"), fmt: (u, m, x) => Le(Math.round(x), u.locale) + " " + jn(u, m, "pressure"), now: (u, m) => {
      const x = la(u, m, "pressure");
      return x ? Le(Math.round(Number(x.value)), u.locale) + " " + jn(u, m, "pressure") : "";
    } },
    wind: { name: () => Dt.wind, icon: () => We.windy, load: Ea("wind_speed"), fmt: (u, m, x) => Le(Math.round(x), u.locale) + " " + jn(u, m, "wind_speed"), now: (u, m) => {
      const x = la(u, m, "wind_speed");
      return x ? Le(Math.round(Number(x.value)), u.locale) + " " + jn(u, m, "wind_speed") : "";
    } },
    visibility: { name: () => Dt.metrics.visibility, icon: () => We.eyeOutline, load: Ea("visibility"), fmt: (u, m, x) => Le(Math.round(x * 10) / 10, u.locale) + " " + jn(u, m, "visibility"), now: (u, m) => {
      const x = la(u, m, "visibility");
      return x ? Le(Number(x.value), u.locale) + " " + jn(u, m, "visibility") : "";
    } },
    aq_tile: {
      name: (u) => no(u)[0] ? Xr(u, no(u)[0]) : Dt.airQuality,
      icon: () => We.airFilter,
      load: xe((u) => no(u)[0], (u) => je(u) ? Number(u) : null),
      fmt: (u, m, x) => {
        var P, Z;
        const T = no(u)[0], O = (P = T == null ? void 0 : T.attributes) == null ? void 0 : P.device_class;
        return Le(Math.round(x * 10) / 10, u.locale) + (O === "aqi" ? " AQI" : (Z = T == null ? void 0 : T.attributes) != null && Z.unit_of_measurement ? " " + T.attributes.unit_of_measurement : "");
      },
      now: (u) => {
        const m = no(u)[0];
        return m ? rr(u, m) : "";
      }
    },
    pollen_tile: {
      name: (u) => qn(u) ? Xr(u, qn(u)) : Dt.pollen,
      icon: () => We.flower,
      load: xe(qn, (u) => {
        const m = Rn({ state: u });
        return m < 0 ? null : m;
      }),
      fmt: (u, m, x) => sn(rn[Math.round(x)] || ""),
      now: (u) => {
        const m = qn(u);
        return m ? sn(m.state) : "";
      }
    }
  }, kn = {};
  async function Do(u) {
    const m = d == null ? void 0 : d();
    if (!m || !Ko[u]) return;
    const x = u + "|" + oo(), [T, O] = Yo();
    if (!(kn[x] && Date.now() - kn[x].at < 5 * Dn)) {
      kn[x] = { at: Date.now(), points: null };
      try {
        kn[x].points = await Ko[u].load(m, La(m), T, O);
      } catch {
        kn[x].points = [];
      }
      aa(!0);
    }
  }
  function es(u, m) {
    const x = G.range, T = br(Date.now()), [O, P] = Yo(), Z = x.pickFrom || br(O), rt = x.pickTo || br(P - 1);
    return '<div class="wbRangePick' + (m ? " wbPickRight" : "") + '" role="dialog" aria-label="Choose date range"><div class="wbRangePresets">' + fa.map(([K, Ct]) => '<button class="wbRangePreset" aria-pressed="' + (x.preset === K) + '" data-wb="graph-preset" data-range="' + K + '" data-wb-focus="graph-preset-' + K + '">' + Ot(Ct) + "</button>").join("") + '</div><div class="wbRangeDates"><label><span>From</span><input type="date" data-range-from value="' + Z + '" max="' + T + '"></label><label><span>To</span><input type="date" data-range-to value="' + rt + '" max="' + T + '"></label></div><button class="wbRangeApply" data-wb="graph-apply" data-wb-focus="graph-apply">Show these dates</button></div>';
  }
  function Bo(u, m, x) {
    var Zt;
    const T = Ko[x], [O, P] = Yo(), Z = _a(O, P), rt = (Zt = kn[x + "|" + oo()]) == null ? void 0 : Zt.points, K = nt[x].el, Ct = Math.max(120, K.clientWidth - 2 * 18 - 32), At = Math.max(40, K.clientHeight - 2 * 18 - 44 - 14 - 32 - 14 - 24), St = rt ? rt.length > 1 ? qc(rt, (Gt) => T.fmt(u, m, Gt, Z), At, Ct) : '<span class="wbGraphNote"><span>No history for these dates</span></span>' : '<span class="wbGraphNote"><span>Loading…</span></span>';
    return '<div class="wbCard wbSquare wbGraphCard"><div class="wbHead"><div class="wbChip wbPlain">' + Ap(T.icon(u)) + '</div><div class="wbText"><span class="wbName">' + Ot(T.name(u)) + '</span><span class="wbSub">' + Ot(T.sub ? T.sub(Z) : T.now ? T.now(u, m) : "") + '</span></div><button class="wbBack" title="' + Ot(Dt.back) + '" data-wb="graph-close" data-wb-focus="graph-close">' + yi(We.back) + '</button></div><button class="wbRangeBtn" aria-haspopup="dialog" aria-expanded="' + !!G.picking + '" title="Choose date range" data-wb="graph-pick" data-wb-focus="graph-pick">' + yi(We.calendar) + "<span>" + Ot(wr(u)) + "</span>" + yi(We.chevronDown) + '</button><div class="wbGraph">' + St + "</div></div>" + (G.picking ? es(u, K.getBoundingClientRect().left > innerWidth / 2) : "");
  }
  function aa(u) {
    var St, Zt, Gt;
    const m = d == null ? void 0 : d();
    if (!m || Y) return;
    const x = La(m);
    vt(m, x), Lt.lastFetch || ce();
    const T = Ht(m), O = Oc(m), P = Gd(m), Z = [
      ...x.map((Nt) => m.states[Nt]),
      m.states["sun.sun"],
      O && m.states[O],
      P && m.states[P],
      ...T.air.map((Nt) => m.states[Nt]),
      ...T.pollen.map((Nt) => m.states[Nt]),
      ...$.some((Nt) => gt.includes(Nt)) ? [...no(m), ...Bn(m)] : [],
      m.locale,
      m.config,
      m.entities,
      Math.floor(Date.now() / Dn)
    ];
    if (!u && z && Z.length === z.length && Z.every((Nt, ae) => Nt === z[ae])) return;
    z = Z;
    const rt = B.getRootNode(), K = rt.activeElement || document.activeElement;
    for (const Nt of $) {
      const ae = nt[Nt];
      let jt = "";
      try {
        jt = (G.graph === Nt ? Bo(m, x, Nt) : Na[Nt](m, x)) || "";
      } catch {
        jt = "";
      }
      if (jt === ae.html) continue;
      const _t = K && ae.el.contains(K) ? (St = K.dataset) == null ? void 0 : St.wbFocus : void 0, Xt = ae.el.querySelector(".wbStripScroll"), $t = Xt ? Xt.scrollLeft : null;
      ae.html = jt, ae.el.hidden = !jt, ae.el.innerHTML = jt;
      const Te = ae.el.querySelector(".wbStripScroll");
      Te && $t != null ? Te.scrollTo({ left: $t }) : Te != null && Te.dataset.start && Te.scrollTo({ left: Number(Te.dataset.start) * Te.clientWidth / Number(Te.dataset.span) }), _t && !et && ((Zt = ae.el.querySelector('[data-wb-focus="' + _t + '"]')) == null || Zt.focus());
    }
    et && ((Gt = B.querySelector('[data-wb-focus="' + et + '"]')) == null || Gt.focus({ preventScroll: !0 }), et = null);
    let Ct = !1, At = !1;
    for (const Nt of $) {
      const ae = nt[Nt], jt = !ae.el.hidden, _t = at[Nt] === "wide" || st.includes(Nt), Xt = $.indexOf(Nt) >= $.indexOf("moon"), $t = jt && (Xt && _t && !Ct || !_t && !At);
      $t && _t && (Ct = !0), $t && !_t && (At = !0), ae.el.toggleAttribute("data-break", $t);
    }
    Vn(performance.now());
  }
  function $o() {
    yt || Y || (yt = !0, queueMicrotask(() => {
      yt = !1, aa(!0);
    }));
  }
  function xr() {
    const u = getComputedStyle(B), m = (Z) => u.getPropertyValue(Z).trim(), x = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([Z, rt]) => {
      m(rt) && (x[Z] = m(rt));
    });
    const T = m("--color-text-primary") || "#f1f1f1", O = m("--color-bg-card") || "#222222", P = !!B.closest(".light");
    return { colors: { ...yn, ...x }, ink: P ? T : O, paper: P ? O : T };
  }
  const zn = (u, m) => {
    var x;
    u.width !== m.w && (u.width = m.w), u.height !== m.h && (u.height = m.h), (x = u.getContext("2d")) == null || x.putImageData(new ImageData(m.data, m.w, m.h), 0, 0);
  }, Mn = () => b && !Lf();
  function Ya(u, m) {
    B.querySelectorAll("canvas[data-wb-strip]").forEach((x) => yr(x, J[x.dataset.wbStrip], u, m));
  }
  function yr(u, m, x, T) {
    if (!m || !u.getClientRects().length) return;
    const O = u.clientWidth, P = u.clientHeight;
    if (!O || !P) return;
    const Z = { width: O, height: P, columns: m.columns || Tc, colors: T.colors, clock: x, ambient: Mn(), seed: m.seed, soft: 1.5 };
    if (f === "smooth") {
      const rt = Math.min(2, window.devicePixelRatio || 1), K = Math.round(O * rt), Ct = Math.round(P * rt);
      u.width !== K && (u.width = K), u.height !== Ct && (u.height = Ct);
      const At = u.getContext("2d");
      if (!At) return;
      At.setTransform(rt, 0, 0, rt, 0, 0), Iu(At, m.segs, Z);
    } else zn(u, Pu(m.segs, { ...Z, px: 2, oneBit: f === "onebit", ink: T.ink, paper: T.paper }));
  }
  function Vn(u) {
    if (Y) return;
    const m = xr();
    if (f !== "smooth") {
      const x = Mn();
      B.querySelectorAll("canvas[data-wb-wx]").forEach((T) => {
        T.getClientRects().length && zn(T, mp(oc(T.dataset.wbWx, m.colors), { size: Number(T.dataset.size) || 40, px: 2, oneBit: f === "onebit", colors: m.colors, ink: m.ink, paper: m.paper, clock: u, idle: x }));
      });
    }
    B.querySelectorAll("canvas[data-wb-sea]").forEach((x) => {
      const T = x.clientWidth, O = x.clientHeight, P = Number(x.dataset.wbSea), Z = T + "x" + O + ":" + P + ":" + m.colors.skyClearDay;
      !T || !O || !(P > 0) || x.dataset.painted === Z || (x.dataset.painted = Z, zn(x, Xu(T, O, P, m.colors)));
    }), Ya(u, m);
  }
  function Xo(u) {
    if (ft = 0, !(Y || !Mn())) {
      if (!document.hidden)
        if (f === "smooth") Ya(u, xr());
        else {
          const m = Math.floor(u / 100);
          m !== pt && (pt = m, Vn(u));
        }
      ft = requestAnimationFrame(Xo);
    }
  }
  function Ce() {
    B.classList.toggle("wbMotion", Mn()), !ft && !Y && Mn() && (ft = requestAnimationFrame(Xo));
  }
  function Ro(u) {
    var x, T, O, P, Z, rt;
    const m = (T = (x = u.target).closest) == null ? void 0 : T.call(x, "[data-wb]");
    if (!m || !B.contains(m)) {
      const K = (P = (O = u.target).closest) == null ? void 0 : P.call(O, ".wbItem"), Ct = K == null ? void 0 : K.dataset.card;
      if (!K || !B.contains(K) || !Ko[Ct] || G.graph === Ct || B.closest(".tfEditing") || K.offsetHeight < 200 || Ct === "current" && M) return;
      G.graph = Ct, et = "graph-close", aa(!0), Do(Ct);
      return;
    }
    switch (m.dataset.wb) {
      case "day": {
        G.openDay = Number(m.dataset.index), G.opener = m.dataset.wbFocus, et = "back-day";
        const K = da()[G.openDay], Ct = !Lt.todayHistory || Lt.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - Lt.todayHistory.fetched > of;
        K && Ns(new Date(K.datetime), /* @__PURE__ */ new Date()) && Ct && ta();
        break;
      }
      case "close-day":
        G.openDay = void 0, et = G.opener, G.opener = void 0;
        break;
      case "open-page":
        M == null || M();
        return;
      case "day-mode":
        G.dayMode = m.dataset.mode;
        break;
      case "hourly-mode":
        G.hourlyMode = m.dataset.mode;
        break;
      case "hourly-view":
        G.hourlyView = m.dataset.view;
        try {
          localStorage.setItem(ot, G.hourlyView);
        } catch {
        }
        break;
      case "hours-day": {
        const K = B.querySelector(".wbStripScroll");
        K && K.scrollTo({ left: Number(m.dataset.hours) * K.clientWidth / Number(K.dataset.span), behavior: "smooth" });
        return;
      }
      case "aq-open":
        G.aq = m.dataset.entity, Se(G.aq);
        break;
      case "aq-close":
        G.aq = void 0;
        break;
      case "graph-close":
        G.graph = void 0, G.picking = !1;
        break;
      case "graph-pick":
        G.picking = !G.picking, et = G.picking ? "graph-preset-" + (G.range.preset === "custom" ? "day" : G.range.preset) : "graph-pick";
        break;
      case "graph-preset":
        G.range = { preset: m.dataset.range }, G.picking = !1, et = "graph-pick", aa(!0), Do(G.graph);
        return;
      case "graph-apply": {
        let K = G.range.pickFrom || ((Z = B.querySelector("[data-range-from]")) == null ? void 0 : Z.value), Ct = G.range.pickTo || ((rt = B.querySelector("[data-range-to]")) == null ? void 0 : rt.value);
        if (!K || !Ct) return;
        K > Ct && ([K, Ct] = [Ct, K]), G.range = { preset: "custom", from: K, to: Ct }, G.picking = !1, et = "graph-pick", aa(!0), Do(G.graph);
        return;
      }
      default:
        return;
    }
    aa(!0);
  }
  function ba(u) {
    var m, x, T, O, P, Z;
    u.key === "Escape" && G.openDay !== void 0 && ((x = (m = u.target).closest) != null && x.call(m, '[data-wb-open="day"]')) ? (G.openDay = void 0, et = G.opener, G.opener = void 0, aa(!0)) : u.key === "Escape" && G.picking && ((O = (T = u.target).closest) != null && O.call(T, ".wbGraphCard")) ? (G.picking = !1, et = "graph-pick", aa(!0)) : u.key === "Escape" && G.graph && ((Z = (P = u.target).closest) != null && Z.call(P, ".wbGraphCard")) && (G.graph = void 0, aa(!0));
  }
  let Gn = null;
  function as(u) {
    var x, T;
    const m = (T = (x = u.target).closest) == null ? void 0 : T.call(x, ".wbStripScroll");
    !m || u.button !== 0 || (Gn = { startX: u.pageX, left: m.scrollLeft, moved: !1 }, m.classList.add("wbHeld"), window.addEventListener("mousemove", kr), window.addEventListener("mouseup", Jo, { once: !0 }));
  }
  function kr(u) {
    const m = B.querySelector(".wbStripScroll");
    if (!Gn || !m) return;
    const x = u.pageX - Gn.startX;
    !Gn.moved && Math.abs(x) > 1 && (Gn.moved = !0, m.classList.add("wbDragging")), m.scrollLeft = Gn.left - x;
  }
  function Jo() {
    Gn = null, window.removeEventListener("mousemove", kr);
    const u = B.querySelector(".wbStripScroll");
    if (!u) return;
    u.classList.remove("wbDragging", "wbHeld");
    const m = [...u.querySelectorAll(".wbSnap")];
    if (m.length) {
      const x = m.reduce((T, O) => Math.abs(O.offsetLeft - u.scrollLeft) < Math.abs(T.offsetLeft - u.scrollLeft) ? O : T);
      u.scrollTo({ left: x.offsetLeft, behavior: "smooth" });
    }
  }
  const Di = (u) => {
    var x, T;
    const m = u.target;
    (x = m.matches) != null && x.call(m, "[data-range-from]") ? G.range.pickFrom = m.value : (T = m.matches) != null && T.call(m, "[data-range-to]") && (G.range.pickTo = m.value);
  };
  B.addEventListener("change", Di), B.addEventListener("click", Ro), B.addEventListener("keydown", ba), B.addEventListener("mousedown", as);
  const ns = 64, Qo = 30;
  let wa = null, ln = 0;
  const io = () => {
    ln = 0, B.querySelectorAll(".wbPollen .wbPush").forEach((u) => {
      let m = 0, x = 0;
      if (wa) {
        const T = u.parentElement.getBoundingClientRect(), O = T.left + T.width / 2 - wa.x, P = T.top + T.height / 2 - wa.y, Z = Math.hypot(O, P) || 1;
        if (Z < ns) {
          const rt = (1 - Z / ns) * Qo;
          m = O / Z * rt, x = P / Z * rt;
        }
      }
      u.style.transform = m || x ? "translate(" + m.toFixed(1) + "px," + x.toFixed(1) + "px)" : "";
    }), wa && (ln = requestAnimationFrame(io));
  }, os = (u) => {
    var x, T;
    if (!((T = (x = u.target).closest) == null ? void 0 : T.call(x, ".wbPollen")) || Da != null && Da.matches) {
      wa && (wa = null, ln || (ln = requestAnimationFrame(io)));
      return;
    }
    wa = { x: u.clientX, y: u.clientY }, ln || (ln = requestAnimationFrame(io));
  }, Oa = () => {
    wa = null, ln || (ln = requestAnimationFrame(io));
  };
  B.addEventListener("pointermove", os), B.addEventListener("pointerleave", Oa);
  const Za = typeof ResizeObserver == "function" ? new ResizeObserver(() => Vn(performance.now())) : null;
  Za == null || Za.observe(B);
  const Da = (Bi = window.matchMedia) == null ? void 0 : Bi.call(window, "(prefers-reduced-motion: reduce)"), ti = () => {
    Ce(), Vn(performance.now());
  };
  (Ri = Da == null ? void 0 : Da.addEventListener) == null || Ri.call(Da, "change", ti);
  const ro = [
    setInterval(() => {
      X = /* @__PURE__ */ new Date(), aa(!0);
    }, hf),
    setInterval(() => {
      lt = /* @__PURE__ */ new Date(), aa(!0);
    }, mf),
    setInterval(ce, pf)
  ];
  return aa(!0), Ce(), {
    update() {
      aa(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      aa(!0);
    },
    setStyle(u) {
      !u || u === f || (f = u, B.dataset.style = f, aa(!0), Ce());
    },
    destroy() {
      var u;
      cancelAnimationFrame(ln), B.removeEventListener("pointermove", os), B.removeEventListener("pointerleave", Oa), Y = !0, ro.forEach(clearInterval), ft && cancelAnimationFrame(ft), ft = 0, Za == null || Za.disconnect(), (u = Da == null ? void 0 : Da.removeEventListener) == null || u.call(Da, "change", ti), Jo(), B.removeEventListener("click", Ro), B.removeEventListener("change", Di), B.removeEventListener("keydown", ba), B.removeEventListener("mousedown", as), ["daily", "hourly"].forEach(H), B.remove();
    }
  };
}
const bl = "#E1E1E1", Vc = "#F7F4F0", Ud = "#03a9f4", Ae = 14, Ne = 172;
let ah = 0;
const Xe = (n) => Math.round(n * 100) / 100, Uo = (n, d, i) => Math.max(d, Math.min(i, n)), Si = (n, d, i, f, b, y) => '<rect x="' + Xe(n) + '" y="' + Xe(d) + '" width="' + Xe(i) + '" height="' + Xe(f) + '" fill="' + b + '"' + (y != null ? ' opacity="' + y + '"' : "") + "/>", Yd = (n) => n.map((d, i) => (i ? "L" : "M") + Xe(d[0]) + " " + Xe(d[1])).join("");
function Zd(n) {
  const d = (n == null ? void 0 : n.attributes) || {};
  return d.device_class === "curtain" ? "curtain" : d.device_class === "blind" || d.current_tilt_position != null ? "venetian" : "blind";
}
const lr = [
  [2, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]],
  [6.5, ["#0B0F1C", "#2E7FD6", "#F2743B", "#F1B6C8", 0.95]],
  [9.5, ["#8FC4EC", "#4DA3E8", "#F4FAFF", "#2F7FCF", 0.7]],
  [13, ["#9ED3F6", "#3F97E6", "#FFFFFF", "#2B86D9", 0.65]],
  [17, ["#9FC2E4", "#4A8ED4", "#FFD9B8", "#5E8FD6", 0.75]],
  [19, ["#4B5E86", "#3B86E0", "#FF6A3D", "#B07CE8", 0.95]],
  [21.5, ["#1A2140", "#1F3F7A", "#B4506E", "#3E59A6", 0.8]],
  [26, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]]
];
function nh(n) {
  const d = n < 2 ? n + 24 : n;
  let i = lr[0], f = lr[lr.length - 1];
  for (let E = 0; E < lr.length - 1; E++) if (d >= lr[E][0] && d <= lr[E + 1][0]) {
    i = lr[E], f = lr[E + 1];
    break;
  }
  const b = (d - i[0]) / (f[0] - i[0]), y = b * b * (3 - 2 * b), M = (E, S) => {
    const B = parseInt(E.slice(1), 16), Mt = parseInt(S.slice(1), 16);
    return "#" + [16, 8, 0].map((gt) => Math.round((B >> gt & 255) + ((Mt >> gt & 255) - (B >> gt & 255)) * y).toString(16).padStart(2, "0")).join("");
  };
  return { top: M(i[1][0], f[1][0]), bot: M(i[1][1], f[1][1]), warm: M(i[1][2], f[1][2]), cool: M(i[1][3], f[1][3]), op: i[1][4] + (f[1][4] - i[1][4]) * y, t: d };
}
function oh(n) {
  const d = parseInt(n.slice(1), 16), i = (d >> 16 & 255) / 255, f = (d >> 8 & 255) / 255, b = (d & 255) / 255, y = Math.max(i, f, b), M = Math.min(i, f, b);
  let E = 0, S = 0;
  const B = (y + M) / 2;
  if (y !== M) {
    const Mt = y - M;
    S = B > 0.5 ? Mt / (2 - y - M) : Mt / (y + M), E = (y === i ? (f - b) / Mt + (f < b ? 6 : 0) : y === f ? (b - i) / Mt + 2 : (i - f) / Mt + 4) / 6;
  }
  return [E * 360, S * 100, B * 100];
}
function Wp(n, d, i) {
  d = Uo(d, 0, 100) / 100, i = Uo(i, 0, 100) / 100;
  const f = (M) => (M + n / 30) % 12, b = d * Math.min(i, 1 - i), y = (M) => i - b * Math.max(-1, Math.min(f(M) - 3, Math.min(9 - f(M), 1)));
  return "#" + [y(0), y(8), y(4)].map((M) => Math.round(M * 255).toString(16).padStart(2, "0")).join("");
}
const [qp, jp, zp] = oh(bl), Gc = Wp(qp, jp, Math.max(6, zp - 14)), ih = Wp(qp, jp, Math.min(96, zp + 16));
function rh(n, d, i, f, b) {
  const y = Ne / 2, M = Ne * 0.12, E = y - (y - M) * n, S = (st) => st ** 1.3, B = Uo(i, -1.5, 1.5), Mt = (st) => -(Math.abs(B) * 4.6 * st ** 1.5) * Math.sign(B), gt = n * 1.4, $ = (st, nt) => {
    const Y = Math.min(4.8, Math.abs(i) * 2.6) * (nt ? 1 : -1) * Math.sign(i || 1), z = nt ? st + E : st, ft = nt ? st : st + E, pt = (Lt) => z + Mt(Lt) + Y * Math.sin(Lt * Math.PI * 1.2 + f) * S(Lt) * 1.4 + gt * Math.sin(Lt * Math.PI * 2 + f * 0.6) * S(Lt) * (nt ? 1 : -1), yt = [[ft, Ae]];
    for (let Lt = 0; Lt <= 12; Lt++) yt.push([pt(Lt / 12), Ae + Ne * Lt / 12]);
    yt.push([ft, Ae + Ne]);
    let et = '<path d="' + Yd(yt) + 'Z" fill="' + bl + '"/>';
    if (b) return et;
    const ot = 1.35 + ((nt ? i > 0 : i < 0) ? 0.35 : 0), L = (Lt) => {
      const X = Lt / 7, lt = nt ? 1 - X : X, J = (1 - lt) ** 1.3, Vt = st + E * X;
      return Array.from({ length: 13 }, (C, D) => {
        const _ = D / 12;
        return [Vt + Mt(_) * J + Y * ot * Math.sin(_ * Math.PI * 1.2 + f - lt * 3.2) * S(_) * 1.4 * J + gt * 1.6 * Math.sin(_ * Math.PI * 2 + f * 0.6 - lt * 2.5) * S(_) * n * (0.4 + 0.6 * J), Ae + Ne * _];
      });
    }, G = [1, 2, 3, 4, 5, 6].map(L);
    for (let Lt = 0; Lt < 6; Lt += 2) et += '<path d="' + Yd(G[Lt]) + Yd(G[Lt + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return et;
  }, at = y - (y - M) * d;
  return { body: $(Ae, !0) + $(Ae + Ne - E, !1), rails: [{ x: Ae + at - 4, y: Ae, w: 4, h: Ne }, { x: Ae + Ne - at, y: Ae, w: 4, h: Ne }], head: 6.4 };
}
function sh(n, d, i) {
  const f = Ne * (1 - n);
  let b = "";
  if (f > 1 && (b += Si(Ae, Ae, Ne, f, bl), !i))
    for (let y = 1; y < 7; y += 2) b += Si(Ae + Ne * y / 7, Ae, Ne / 7, f, "#fff");
  return { body: b, rails: [{ x: Ae, y: Ae + Ne * (1 - d) - 7, w: Ne, h: 11 }], head: 10.4 };
}
function lh(n, d, i, f) {
  const b = 9 - 7 * (i / 100), y = Ae + Ne * (1 - n), M = Math.ceil(Ne / 10) + 1, E = Ae + b / 2, S = (Ae + Ne - b / 2 - E) / (M - 1), B = 0.8, Mt = 0.6, gt = Array.from({ length: M }, (st, nt) => Math.max(E + nt * Mt, Math.min(E + nt * S, y - b / 2 - (M - 1 - nt) * Mt))), $ = gt.slice(0, -1).map((st, nt) => Uo((gt[nt + 1] - st - Mt) / (S - Mt), 0, 1));
  $.push($[M - 2]);
  let at = "";
  return gt.forEach((st, nt) => {
    const Y = B + (b - B) * $[nt], z = Math.max(0.5, Y / 2), ft = Math.max(0.4, Y * 0.114);
    at += Si(Ae, st - z, Ne, Math.max(1, Y), bl), !f && Y > 2.2 && (at += Si(Ae, st + z - ft, Ne, ft, Gc) + Si(Ae, st - z, Ne, ft * 0.55, ih, 0.75));
  }), f || [0.22, 0.78].forEach((st) => {
    at += Si(Ae + Ne * st - 0.7, Ae, 1.4, Math.max(0, gt[M - 1] + 1 - Ae), Gc, 0.85);
  }), { body: at, rails: [{ x: Ae, y: Ae + Ne * (1 - d) - 8, w: Ne, h: 8 }], head: 8.8 };
}
const Uc = (n, d, i, f, b, y, M) => n === "curtain" ? rh(d, i, b, y, M) : n === "venetian" ? lh(d, i, f, M) : sh(d, i, M);
function dh(n, d) {
  let i = "", f = "";
  return d.forEach((b) => {
    const y = b.w > b.h, M = Uo(y ? Ae + Ne / 2 : b.x + b.w / 2, 17, 183), E = Uo(y ? b.y + b.h / 2 : Ae + Ne / 2, 17, 183);
    i += y ? Si(Ae, Uo(b.y + b.h / 2, Ae, Ae + Ne) - 1, Ne, 2, Ud) : Si(Uo(b.x + b.w / 2, Ae, Ae + Ne) - 1, Ae, 2, Ne, Ud);
    const S = y ? "M" + Xe(M - 4) + " " + Xe(E - 3) + "l4 -3l4 3M" + Xe(M - 4) + " " + Xe(E + 3) + "l4 3l4 -3" : "M" + Xe(M - 3) + " " + Xe(E - 4) + "l-3 4l3 4M" + Xe(M + 3) + " " + Xe(E - 4) + "l3 4l-3 4";
    f += '<circle cx="' + Xe(M) + '" cy="' + Xe(E) + '" r="11" fill="' + Ud + '" filter="url(#' + n + 's)"/><path d="' + S + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: i, knobs: f };
}
function ch(n, d) {
  const i = /* @__PURE__ */ new Date(), f = nh(i.getHours() + i.getMinutes() / 60), b = 42 + 18 * Math.sin(f.t * 0.5), y = f.t >= 5 && f.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (f.t - 5) / 15) : 80, M = Uc(d.kind, d.pos / 100, d.bar / 100, d.tilt, d.vel, d.ph, !1), E = d.ghostAlpha > 4e-3 && d.ghost != null ? Uc(d.kind, d.ghost / 100, d.ghost / 100, d.tilt, 0, 0, !0).body : "", S = d.grip > 4e-3 ? dh(n, M.rails) : null, B = (Mt) => Si(Ae, Ae, Ne, Ne, Mt);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + n + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + n + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + f.top + '"/><stop offset="1" stop-color="' + f.bot + '"/></linearGradient><radialGradient id="' + n + 'w" cx="' + Xe(b) + '%" cy="' + Xe(y) + '%" r="58%"><stop offset="0" stop-color="' + f.warm + '" stop-opacity="' + Xe(f.op * 0.8) + '"/><stop offset="1" stop-color="' + f.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + n + 'k" cx="' + Xe(100 - b * 0.8) + '%" cy="' + Xe(100 - y * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + f.cool + '" stop-opacity="' + Xe(f.op * 0.64) + '"/><stop offset="1" stop-color="' + f.cool + '" stop-opacity="0"/></radialGradient><filter id="' + n + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + Vc + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + n + 'c)">' + B("url(#" + n + "l)") + B("url(#" + n + "w)") + B("url(#" + n + "k)") + (E ? '<g opacity="' + Xe(d.ghostAlpha) + '">' + E + "</g>" : "") + M.body + '<rect x="14" y="14" width="172" height="' + M.head + '" fill="' + bl + '" filter="url(#' + n + 's)"/></g>' + (S ? '<g clip-path="url(#' + n + 'c)" opacity="' + Xe(d.grip) + '">' + S.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + Vc + '" stroke-width="3"/>' + (S ? '<g opacity="' + Xe(d.grip) + '">' + S.knobs + "</g>" : "") + "</svg>";
}
function ph({ onMove: n, onSet: d }) {
  var et;
  const i = "cv" + ++ah, f = document.createElement("div");
  f.className = "tfCoverArt";
  const b = (et = window.matchMedia) == null ? void 0 : et.call(window, "(pointer: coarse)").matches;
  let y = null;
  const M = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let E = 0, S = !1, B = !1, Mt = null, gt = 0, $ = 0;
  const at = () => (y == null ? void 0 : y.kind) === "curtain" ? "x" : "y", st = () => Mt || S || B || y.moving || y.target != null ? 1 : b ? performance.now() < $ ? 1 : 0.4 : 0, nt = () => {
    f.innerHTML = ch(i, { kind: y.kind, pos: M.pos, bar: y.target ?? M.pos, tilt: M.tilt, vel: M.vel, ph: M.ph, ghost: M.gpos, ghostAlpha: M.ghost, grip: M.grip });
  };
  function Y(ot) {
    E = 0;
    const L = M.last ? Math.min(0.064, (ot - M.last) / 1e3) : 1 / 60, G = L * 60;
    M.last = ot;
    const Lt = y.pos - M.pos, X = M.pos;
    M.pos += Math.sign(Lt) * Math.min(Math.abs(Lt), Math.max(10.5, Math.abs(Lt) * 1.4) * L), Math.abs(y.pos - M.pos) < 0.03 && (M.pos = y.pos), M.vel = M.vel * 0.86 + (M.pos - X) / G * 0.14, Math.abs(M.vel) < 0.015 && M.pos === y.pos && (M.vel = 0), (M.pos !== X || M.vel) && (M.ph += (0.06 + Math.abs(M.vel) * 0.03) * G);
    const lt = y.tilt - M.tilt;
    M.tilt += Math.sign(lt) * Math.min(Math.abs(lt), Math.max(60, Math.abs(lt) * 4) * L);
    const J = st();
    M.grip += (J - M.grip) * Math.min(1, L * (J > M.grip ? 11 : 3.5)), Math.abs(J - M.grip) < 0.01 && (M.grip = J);
    const Vt = y.target != null && Math.abs(y.target - M.pos) > 0.5 ? 0.22 : 0;
    y.target != null && (M.gpos = y.target), M.ghost += (Vt - M.ghost) * Math.min(1, L * (Vt > M.ghost ? 16 : 3)), Math.abs(Vt - M.ghost) < 4e-3 && (M.ghost = Vt), nt(), M.pos !== y.pos || M.vel || M.tilt !== y.tilt || M.grip !== J || M.ghost !== Vt ? E = requestAnimationFrame(Y) : M.last = 0;
  }
  const z = () => {
    y && !E && (E = requestAnimationFrame(Y));
  }, ft = setInterval(() => {
    y && !E && nt();
  }, 60 * 1e3), pt = (ot) => {
    const L = f.getBoundingClientRect();
    return at() === "x" ? (ot.clientX - L.left) / L.width : (ot.clientY - L.top) / L.height;
  };
  f.addEventListener("pointerdown", (ot) => {
    var Lt;
    if (!(y != null && y.canSet) || ot.button > 0) return;
    ot.preventDefault(), (Lt = f.setPointerCapture) == null || Lt.call(f, ot.pointerId);
    const L = y.target ?? y.pos, G = f.getBoundingClientRect();
    Mt = { p0: pt(ot), from: L, x0: ot.clientX, value: null, side: null }, y.kind === "curtain" && L > 0 && (Mt.side = (ot.clientX - G.left) / G.width < 0.5 ? "L" : "R"), z();
  }), f.addEventListener("pointermove", (ot) => {
    if (!Mt) return;
    let L;
    if (y.kind === "curtain") {
      if (!Mt.side) {
        const Lt = ot.clientX - Mt.x0;
        if (Math.abs(Lt) < 4) return;
        Mt.side = Lt < 0 ? "L" : "R";
      }
      const G = (Ne / 2 - Ne * 0.12) / 200;
      L = Mt.from + (Mt.side === "L" ? -1 : 1) * ((pt(ot) - Mt.p0) / G) * 100;
    } else L = Mt.from - (pt(ot) - Mt.p0) / (Ne / 200) * 100;
    Mt.value = Uo(L, 0, 100), n(Mt.value);
  });
  const yt = () => {
    if (!Mt) return;
    const ot = Mt.value;
    Mt = null, ot != null && d(Math.round(ot)), z();
  };
  return f.addEventListener("pointerup", yt), f.addEventListener("pointercancel", yt), f.addEventListener("lostpointercapture", yt), f.addEventListener("pointerenter", () => {
    S = !0, z();
  }), f.addEventListener("pointerleave", () => {
    S = !1, z();
  }), f.addEventListener("focus", () => {
    B = f.matches(":focus-visible"), z();
  }), f.addEventListener("blur", () => {
    B = !1, z();
  }), f.addEventListener("keydown", (ot) => {
    if (!(y != null && y.canSet)) return;
    const L = Math.round(y.target ?? y.pos), G = ot.shiftKey ? 10 : 1, Lt = { ArrowUp: L + G, ArrowRight: L + G, ArrowDown: L - G, ArrowLeft: L - G, PageUp: L + 25, PageDown: L - 25, Home: 0, End: 100 }[ot.key];
    if (Lt == null) return;
    ot.preventDefault();
    const X = Uo(Lt, 0, 100);
    n(X), clearTimeout(gt), gt = setTimeout(() => d(X), 500);
  }), {
    el: f,
    update(ot) {
      const L = !y;
      y = ot, L && (M.pos = y.pos, M.tilt = y.tilt, $ = performance.now() + 1500, b && setTimeout(z, 1600)), f.classList.toggle("x", at() === "x"), f.classList.toggle("y", at() === "y"), y.canSet ? (f.tabIndex = 0, f.setAttribute("role", "slider"), f.setAttribute("aria-valuemin", "0"), f.setAttribute("aria-valuemax", "100"), f.setAttribute("aria-valuenow", String(Math.round(y.target ?? y.pos))), f.setAttribute("aria-orientation", at() === "x" ? "horizontal" : "vertical")) : f.setAttribute("role", "img"), f.setAttribute("aria-label", y.name + (y.canSet ? " position" : "")), f.setAttribute("aria-valuetext", y.text), z();
    },
    destroy() {
      cancelAnimationFrame(E), E = 0, clearInterval(ft), clearTimeout(gt), f.remove();
    }
  };
}
const Yc = "move-assistant-density", Vo = {
  get(n) {
    try {
      return localStorage.getItem(n);
    } catch {
      return null;
    }
  },
  set(n, d) {
    try {
      localStorage.setItem(n, d);
    } catch {
    }
  }
}, tt = (n) => String(n ?? "").replace(/[&<>"']/g, (d) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[d]), Kd = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', Zc = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', Kc = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', dd = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, $c = {
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14v2H5z"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>'
}, Xc = 1, uh = 4, Jc = 16, Qc = 32, fh = 128, hh = 256, tp = 16384, mh = 1, gh = 2, ep = 4, vh = 8, bh = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, ap = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, wh = { curtain: "curtains", blind: "blind", venetian: "blinds" }, $d = {
  light: { name: "Lights", icon: "mdi:lightbulb", colour: "#ffc107" },
  climate: { name: "Climate", icon: "mdi:home-thermometer", colour: "#ff5722" },
  security: { name: "Security", icon: "mdi:security", colour: "#607d8b" },
  media_players: { name: "Media players", icon: "mdi:multimedia", colour: "#2196f3" },
  maintenance: { name: "Maintenance", icon: "mdi:wrench", colour: "#9e9e9e" },
  energy: { name: "Energy", icon: "mdi:lightning-bolt", colour: "#ffc107" }
}, np = "move_assistant_house", op = "move-assistant-house-used", xh = ["switch", "fan", "input_boolean", "automation"], ip = "move-assistant-house-look", yh = [["look", "Look"], ["house", "House page"], ["weather", "Weather"]], kh = [["popup", "Popup"], ["sheet", "Sheet"]], Mh = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], Sh = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], Ch = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], Xd = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', Th = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', Lh = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', rp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', sp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', lp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', Vp = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + n.map((d) => '<path d="' + d + '"/>').join("") + "</svg>", dp = Vp(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), Ah = Vp(["M20 6L9 17L4 12"]), Go = (n, d = "") => '<span class="tfAreaGlyph" data-icon-for="' + tt(n || "") + '"' + (d ? ' data-icon-name="' + tt(d) + '"' : "") + "></span>", _h = (n) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (n ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', Eh = 1, Dh = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], cp = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, Jd = ["hs", "xy", "rgb", "rgbw", "rgbww"], cd = ["door", "window", "garage_door", "opening"], pp = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, pd = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], Bh = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], Rh = 10, Nh = 20, Ph = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, Ih = ["living room", "bedroom", "office"];
function Hh(n, { config: d, getHass: i }) {
  var Es, vi, cl;
  const f = (t) => n.getElementById(t), b = f("app"), M = String((d || {}).layout || "").toLowerCase().replace("_", "-") === "test-focus";
  let E = Vo.get(Yc) === "1", S = {};
  const B = (t) => {
    var a;
    return (a = i()) == null ? void 0 : a.callWS(t);
  }, Mt = (t, a, o) => B({ type: "call_service", domain: t, service: a, service_data: o }), gt = n.querySelector("#appearancePane .toggleList");
  gt && !f("densityToggle") && (gt.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), f("densityToggle").addEventListener("click", () => {
    E = !E, Vo.set(Yc, E ? "1" : "0"), ot();
  }));
  const $ = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && Kt(t).device_class === "power" && /^(W|kW)$/.test(Kt(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (t) => t.startsWith("alarm_control_panel.")]
  ], at = (t, a, o, s) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + a + '">' + s.map(([c, g]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + o + '="' + c + '">' + g + "</button>").join("") + "</div>", st = (t, a, o, s) => '<div class="toggleRow"' + (s ? ' id="' + s + '"' : "") + "><div><strong>" + t + "</strong>" + (a ? '<div class="status">' + a + "</div>" : "") + "</div>" + o + "</div>";
  function nt() {
    var Q, it;
    if (!M || f("housePane")) return;
    const t = f("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore settings";
    const a = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], o = (dt, U) => '<div class="houseTab' + (dt === "look" ? " active" : "") + '" data-house-pane="' + dt + '"><section class="card">' + U + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + a.map(([dt, U]) => '<button class="tab segBtn' + (dt === "look" ? " active" : "") + '" type="button" data-house-tab="' + dt + '">' + U + "</button>").join("") + "</div>" + // Appearance in groups (Matt, 8 Nov), each one's title inside its card as a card header (Matt, 9 Nov)
    o("look", yh.map(([dt, U]) => '<div class="tfSetGroup"><div class="toggleList" data-look-group="' + dt + '"><div class="tfCardTitle">' + U + "</div></div></div>").join("")) + // Lights as cards by default, with a Cards | Table choice (Matt, 9 Nov)
    o("lights", '<div class="tfLightView"><div class="themeChoice" role="group" aria-label="Show lights as"><button class="wxLayoutBtn" type="button" data-light-view="cards">Cards</button><button class="wxLayoutBtn" type="button" data-light-view="table">Table</button></div></div><p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div><div class="tfLightCards" id="lightCards"></div>') + o("sources", '<div class="toggleList">' + $.map(([dt, U, ut]) => st(U, ut, '<select class="settingsSelect" data-source="' + dt + '" aria-label="' + U + '"></select>')).join("") + "</div>") + o("sums", '<div class="toggleList">' + Object.entries($d).map(([dt, U]) => st(U.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + dt + '" aria-label="' + U.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const s = (dt) => t.querySelector('[data-look-group="' + dt + '"]'), c = (dt) => dt == null ? void 0 : dt.closest(".toggleRow");
    [c(t.querySelector(".themeBtn"))].forEach((dt) => dt && s("look").appendChild(dt));
    const g = c(f("densityToggle"));
    g && (g.hidden = !0), [c(f("moreInfoChoice")), c(f("namesChoice"))].forEach((dt) => dt && s("house").appendChild(dt)), s("house").insertAdjacentHTML("beforeend", st("Lights", "How lights show on the house page.", at("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + st("Pad", "What the Dual Axis Controller’s pad sets on its tile.", at("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow")), [c(f("hoursChoice")), c(f("wxStyleChoice"))].forEach((dt) => dt && s("weather").appendChild(dt));
    const p = f("housePane"), v = p.querySelector(".houseTabs"), k = v.querySelector(".rubberIndicator"), F = "homecore-light-view", N = (dt) => {
      p.classList.toggle("tfLightCardsOn", dt === "cards"), p.querySelectorAll("[data-light-view]").forEach((U) => U.setAttribute("aria-pressed", String(U.dataset.lightView === dt))), Vo.set(F, dt);
    };
    N(Vo.get(F) === "table" ? "table" : "cards"), p.querySelector(".tfLightView").addEventListener("click", (dt) => {
      const U = dt.target.closest("[data-light-view]");
      U && N(U.dataset.lightView);
    }), new ResizeObserver(() => z()).observe(p), (it = (Q = document.fonts) == null ? void 0 : Q.ready) == null || it.then(() => z());
    const I = (dt) => {
      const U = v.querySelector(".tab.active");
      k.style.transition = dt ? "" : "none", k.style.left = U.offsetLeft + "px", k.style.width = U.offsetWidth + "px", dt && (k.style.transform = "scaleX(1.08)", setTimeout(() => k.style.transform = "", 180));
    };
    new ResizeObserver(() => I(!1)).observe(v), p.addEventListener("click", (dt) => {
      const U = dt.target.closest("[data-house-tab]");
      if (U) {
        v.querySelectorAll(".tab").forEach((q) => q.classList.toggle("active", q === U)), p.querySelectorAll(".houseTab").forEach((q) => q.classList.toggle("active", q.dataset.housePane === U.dataset.houseTab)), U.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), I(!0), z();
        return;
      }
      const ut = dt.target.closest("[data-light-fav]");
      if (ut) {
        rs(ut.dataset.lightFav);
        return;
      }
      const W = dt.target.closest("[data-light-pick]");
      if (W) {
        const [q, Wt] = W.dataset.lightPick.split("|"), Pe = { ...Ht[q] };
        W.dataset.v ? Pe[Wt] = W.dataset.v : delete Pe[Wt], Ht[q] = Pe, me(), [...Oa.keys()].filter((fe) => fe.endsWith(":" + Wt)).forEach((fe) => Oa.delete(fe)), na();
        return;
      }
      const wt = dt.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!wt || wt.disabled)) {
        if (wt.dataset.lights && (Ht.lights = wt.dataset.lights), wt.dataset.dacPad && (Ht.dacPad = wt.dataset.dacPad), (wt.dataset.lights || wt.dataset.dacPad) && (me(), Oa.clear()), wt.dataset.sumToggle) {
          const q = wt.dataset.sumToggle, Wt = new Set(V.hiddenSums || []);
          Wt.has(q) ? Wt.delete(q) : Wt.add(q), V = { ...V, hiddenSums: [...Wt] }, La();
        }
        na();
      }
    }), p.addEventListener("change", (dt) => {
      const U = dt.target;
      U.dataset.source && (V = { ...V, sources: { ...V.sources || {}, [U.dataset.source]: U.value || void 0 } }, La());
      const ut = U.dataset.lightStyle || U.dataset.lightPad;
      if (ut) {
        const W = U.dataset.lightStyle ? "lightStyles" : "lightPads", wt = { ...Ht[W] };
        U.value ? wt[ut] = U.value : delete wt[ut], Ht[W] = wt, me(), [...Oa.keys()].filter((q) => q.endsWith(":" + ut)).forEach((q) => Oa.delete(q));
      }
      na();
    });
  }
  function Y() {
    var I, Q;
    Da() && os();
    const t = f("housePane");
    if (!t) return;
    const a = !!customElements.get(wa);
    t.querySelectorAll("[data-lights]").forEach((it) => it.setAttribute("aria-pressed", String(it.dataset.lights === Ht.lights))), f("lightsRow").querySelector(".status").textContent = a || !Da() ? "How lights show on the house page." : io === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((it) => it.setAttribute("aria-pressed", String(it.dataset.dacPad === Ht.dacPad))), f("dacPadRow").hidden = !Da();
    for (const it of t.querySelectorAll("[data-source]")) {
      if (it === n.activeElement) continue;
      const [dt] = $.find(([ut]) => ut === it.dataset.source), U = Object.keys(S).filter($.find(([ut]) => ut === dt)[3]).sort((ut, W) => It(ut).localeCompare(It(W)));
      it.dataset.sig !== U.join(",") && (it.innerHTML = '<option value="">Automatic</option>' + U.map((ut) => '<option value="' + tt(ut) + '">' + tt(It(ut)) + "</option>").join(""), it.dataset.sig = U.join(",")), it.value = U.includes((I = V.sources) == null ? void 0 : I[dt]) ? V.sources[dt] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((it) => {
      const dt = !(V.hiddenSums || []).includes(it.dataset.sumToggle);
      it.classList.toggle("on", dt), it.setAttribute("aria-checked", String(dt));
    });
    const o = f("lightRows"), s = f("lightCards"), c = n.activeElement, g = o != null && o.contains(c) || s != null && s.contains(c) ? c : null;
    if (!o || g != null && g.matches("select")) {
      z();
      return;
    }
    const p = new Set(xa()), v = (it, dt, U, ut) => '<option value="' + it + '"' + (it === U ? " selected" : "") + ">" + dt + "</option>", k = Object.keys(S).filter((it) => it.startsWith("light.")).sort((it, dt) => !Se.get(it) - !Se.get(dt) || (Se.get(it) || "").localeCompare(Se.get(dt) || "") || It(it).localeCompare(It(dt))).map((it) => {
      const dt = Ht.lightStyles[it] || "", U = Ht.lightPads[it] || "", ut = p.has(it), W = tt(It(it));
      return "<tr><td><strong>" + W + "</strong></td><td>" + tt(Se.get(it) || "—") + "</td><td>" + tt(ia(it)) + '</td><td class="metaSwitchCol"><button class="switch' + (ut ? " on" : "") + '" type="button" role="switch" aria-checked="' + ut + '" data-light-fav="' + tt(it) + '" aria-label="' + W + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + tt(it) + '" aria-label="' + W + ' tile">' + v("", "Default", dt) + v("tile", "HomeCore tile", dt) + v("dac", "Dual Axis Controller", dt) + '</select></td><td><select class="settingsSelect" data-light-pad="' + tt(it) + '" aria-label="' + W + ' pad"' + (Za(it) ? "" : " disabled") + ">" + v("", "Default", U) + v("temperature", "Temperature", U) + v("colour", "Colour", U) + "</select></td></tr>";
    }).join(""), F = (it, dt, U, ut, W) => '<div class="themeChoice" role="group" aria-label="' + U + '">' + ut.map(([wt, q]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (wt === W) + '" data-light-pick="' + it + "|" + tt(dt) + '" data-v="' + wt + '">' + q + "</button>").join("") + "</div>", N = Object.keys(S).filter((it) => it.startsWith("light.")).sort((it, dt) => !Se.get(it) - !Se.get(dt) || (Se.get(it) || "").localeCompare(Se.get(dt) || "") || It(it).localeCompare(It(dt))).map((it) => {
      const dt = p.has(it), U = tt(It(it)), ut = [Se.get(it), ia(it)].filter(Boolean).map(tt).join(" · ");
      return '<div class="toggleList"><div class="toggleRow"><div><strong>' + U + '</strong><div class="status">' + ut + "</div></div></div>" + st("Favourite", "", '<button class="switch' + (dt ? " on" : "") + '" type="button" role="switch" aria-checked="' + dt + '" data-light-fav="' + tt(it) + '" aria-label="' + U + ' is a favourite"></button>') + st("Tile", "", F("lightStyles", it, U + " tile", [["", "Default"], ["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]], Ht.lightStyles[it] || "")) + (Za(it) ? st("Pad", "", F("lightPads", it, U + " pad", [["", "Default"], ["temperature", "Temperature"], ["colour", "Colour"]], Ht.lightPads[it] || "")) : "") + "</div>";
    }).join("");
    o.dataset.html !== k && (o.innerHTML = k, o.dataset.html = k), s.dataset.html !== N && (s.innerHTML = N, s.dataset.html = N), g != null && g.dataset.lightFav && ((Q = (s.contains(g) ? s : o).querySelector('[data-light-fav="' + CSS.escape(g.dataset.lightFav) + '"]')) == null || Q.focus({ preventScroll: !0 })), z();
  }
  function z() {
    var a, o, s;
    const t = f("housePane");
    if (t)
      for (const c of t.querySelectorAll(".themeChoice")) {
        const g = [...c.querySelectorAll("button")];
        let p = (a = c.nextElementSibling) != null && a.classList.contains("tfChoiceList") ? c.nextElementSibling : null;
        if (!p) {
          p = document.createElement("select"), p.className = "settingsSelect tfChoiceList", p.setAttribute("aria-label", c.getAttribute("aria-label") || ((s = (o = c.closest(".toggleRow")) == null ? void 0 : o.querySelector("strong")) == null ? void 0 : s.textContent) || ""), p.addEventListener("change", () => {
            var I;
            return (I = g[Number(p.value)]) == null ? void 0 : I.click();
          }), c.after(p);
          const N = () => {
            p.innerHTML = g.map((Q, it) => '<option value="' + it + '"' + (Q.disabled ? " disabled" : "") + ">" + tt(Q.textContent) + "</option>").join("");
            const I = g.findIndex((Q) => Q.getAttribute("aria-pressed") === "true" || Q.classList.contains("active"));
            I >= 0 && (p.value = String(I));
          };
          new MutationObserver(N).observe(c, { subtree: !0, attributes: !0, attributeFilter: ["aria-pressed", "class", "disabled"] }), N();
        }
        const v = (N) => {
          c.hidden !== !N && (c.hidden = !N), p.hidden !== N && (p.hidden = N);
        };
        if (g.length > 3) {
          v(!1);
          continue;
        }
        if (!c.getClientRects().length && !p.getClientRects().length) {
          p.dataset.fit || v(!0);
          continue;
        }
        const k = c.hidden;
        c.hidden = !1;
        const F = g.every((N) => N.scrollWidth <= N.clientWidth + 1);
        c.hidden = k, v(F), p.dataset.fit = "1";
      }
  }
  const ft = document.createElement("div");
  ft.className = "densityBadge", ft.setAttribute("aria-live", "polite"), ft.hidden = !0, b.appendChild(ft);
  let pt = 0;
  function yt() {
    if (!E) return;
    const t = f("homeView"), a = (g) => g.offsetParent !== null && !g.closest("[hidden]");
    t.querySelectorAll(":scope .card, :scope .tfAction").forEach((g) => {
      a(g) && (g.dataset.h = Math.round(g.getBoundingClientRect().height) + " px");
    });
    const o = [...t.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(a), s = window.innerHeight, c = o.filter((g) => {
      const p = g.getBoundingClientRect();
      return p.height > 0 && p.top >= 0 && p.bottom <= s + 0.5;
    }).length;
    ft.hidden = !t.classList.contains("active"), ft.innerHTML = "<b>" + c + "</b><small>of " + o.length + " readings on screen</small>";
  }
  const et = () => {
    E && requestAnimationFrame(yt);
  };
  function ot() {
    var t;
    b.classList.toggle("showDensity", E), (t = f("densityToggle")) == null || t.classList.toggle("on", E), ft.hidden = !E, clearInterval(pt), E && (pt = setInterval(yt, 1e3), yt());
  }
  window.addEventListener("scroll", et, { capture: !0, passive: !0 }), window.addEventListener("resize", et, { passive: !0 });
  const L = n.querySelector("#homeView .grid");
  let G = null, Lt = null, X = null, lt = null;
  const J = /* @__PURE__ */ new Map(), Vt = /* @__PURE__ */ new Map(), C = /* @__PURE__ */ new Map(), D = 6;
  let _ = null;
  const H = /* @__PURE__ */ new Map(), bt = /* @__PURE__ */ new Map(), vt = /* @__PURE__ */ new Map();
  let V = { favourites: null }, kt = {}, Tt = {}, ee = [], ce = null;
  const ta = (() => {
    try {
      return JSON.parse(Vo.get(op)) || {};
    } catch {
      return {};
    }
  })();
  let Se = /* @__PURE__ */ new Map(), Ci = 0;
  function La() {
    clearTimeout(Ci), Ci = setTimeout(() => Promise.resolve(B({ type: "frontend/set_user_data", key: np, value: V })).catch(() => {
    }), 400);
  }
  const Ht = (() => {
    let t = {};
    try {
      t = JSON.parse(Vo.get(ip)) || {};
    } catch {
    }
    const a = (o, s) => Object.fromEntries(Object.entries(o || {}).filter(([, c]) => s.includes(c)));
    return {
      more: t.more === "sheet" ? "sheet" : "popup",
      names: t.namesPicked && ["auto", "cut", "wrap", "scroll"].includes(t.names) ? t.names : "scroll",
      namesPicked: !!t.namesPicked,
      hoursWindow: ["day", "waking", "all"].includes(t.hoursWindow) ? t.hoursWindow : "day",
      wxStyle: ["bitmap", "onebit", "smooth", "line"].includes(t.wxStyle) ? t.wxStyle : "bitmap",
      lights: t.lights === "dac" ? "dac" : "tile",
      dacPad: t.dacPad === "colour" ? "colour" : "temperature",
      lightStyles: a(t.lightStyles, ["tile", "dac"]),
      lightPads: a(t.lightPads, ["temperature", "colour"])
    };
  })(), me = () => Vo.set(ip, JSON.stringify(Ht)), da = () => {
    b.dataset.more = Ht.more, b.dataset.names = Ht.names, Fn();
  };
  M && gt && !f("moreInfoChoice") && (f("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + kh.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Ht.more === t) + '" data-more-style="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), f("moreInfoChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-more-style]");
    a && (Ht.more = a.dataset.moreStyle, me(), da(), f("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === a))));
  }), f("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + Mh.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Ht.names === t) + '" data-names-style="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), f("namesChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-names-style]");
    a && (Ht.names = a.dataset.namesStyle, Ht.namesPicked = !0, me(), da(), f("namesChoice").querySelectorAll("[data-names-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === a))));
  }), f("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + Sh.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Ht.hoursWindow === t) + '" data-hours-window="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), f("hoursChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-hours-window]");
    a && (Ht.hoursWindow = a.dataset.hoursWindow, me(), te == null || te.refresh(), f("hoursChoice").querySelectorAll("[data-hours-window]").forEach((o) => o.setAttribute("aria-pressed", String(o === a))));
  }), f("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + Ch.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Ht.wxStyle === t) + '" data-wx-style="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), f("wxStyleChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-wx-style]");
    a && (Ht.wxStyle = a.dataset.wxStyle, me(), te == null || te.setStyle(Ht.wxStyle), va == null || va.forEach((o) => o.setStyle(Ht.wxStyle)), f("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === a))));
  })), nt();
  let oe = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const Ge = /* @__PURE__ */ new Map();
  let ts = "";
  const we = M ? xu({ onChange: () => Ba() }) : null;
  M && b.classList.add("house");
  const ie = Object.assign(document.createElement("div"), { className: "tfBento" });
  let te = null, ur = null, Ti = !1;
  function fr(t) {
    const a = pn();
    if (b.classList.toggle("houseBento", !!a), te && (ur !== a || t == null) && (te.destroy(), te = null), !a || t == null) {
      ie.remove();
      return;
    }
    ie.isConnected || L.append(ie), ie.style.order = t, !te && !Ti && (te = zc(ie, { getHass: i, entityId: a, style: Ht.wxStyle, hoursWindow: () => Ht.hoursWindow }), ur = a);
  }
  const nn = [["wx", ["current"]], ["avg", ["compared_to_average"]], ["aq", ["aq_tile"]], ["pollen", ["pollen_tile"]], ["radar", ["radar_tile"]]], ge = ["aq", "pollen", "radar"], ca = Object.fromEntries(nn.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let va = null, Li = null;
  function hr(t) {
    const a = pn();
    va && Li !== a && (va.forEach((o) => o.destroy()), va = null), Object.values(ca).forEach((o) => a ? !o.isConnected && L.append(o) : o.remove()), a && !va && !Ti && (va = nn.map(([o, s]) => zc(ca[o], { getHass: i, entityId: a, style: Ht.wxStyle, cards: s, onOpen: o === "wx" ? () => Ss("weather") : void 0 })), Li = a);
  }
  const Kt = (t) => {
    var a;
    return ((a = S[t]) == null ? void 0 : a.attributes) || {};
  }, It = (t) => Kt(t).friendly_name || t, Yt = (t, a) => ir(t) || (Number(Kt(t).supported_features) & a) === a, De = (t) => {
    const a = String(t ?? "").replace(/_/g, " ");
    return a.charAt(0).toUpperCase() + a.slice(1);
  }, Aa = (t, a = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: a, maximumFractionDigits: a }), eo = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, Ut = (t) => Kt(t).supported_color_modes || [], se = (t) => {
    const a = t / 100;
    return [a <= 66 ? 255 : 329.7 * Math.pow(a - 60, -0.1332), a <= 66 ? 99.47 * Math.log(a) - 161.12 : 288.12 * Math.pow(a - 60, -0.0755), a >= 66 ? 255 : a <= 19 ? 0 : 138.52 * Math.log(a - 10) - 305.04];
  }, ea = (t, a) => [5, 3, 1].map((o) => {
    const s = (o + t / 60) % 6;
    return 255 * (1 - a / 100 * Math.max(0, Math.min(s, 4 - s, 1)));
  }), ao = (t) => (t /= 255, t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)), Ua = (t) => 0.2126 * ao(t[0]) + 0.7152 * ao(t[1]) + 0.0722 * ao(t[2]), Qe = (t, a) => {
    const o = Ua(t), s = Ua(a);
    return (Math.max(o, s) + 0.05) / (Math.min(o, s) + 0.05);
  }, Ai = 0.55, pa = (t) => {
    const a = Kt(t);
    return (a.rgb_color || (a.hs_color && a.color_mode !== "color_temp" ? ea(...a.hs_color) : a.color_temp_kelvin ? se(a.color_temp_kelvin) : [255, 170, 0])).map((o) => Math.round(Math.max(0, Math.min(255, o))));
  }, To = { heat: [255, 111, 34], cool: [33, 150, 243], heat_cool: [255, 193, 7], auto: [76, 175, 80], dry: [255, 152, 0], fan_only: [0, 188, 212] };
  function Lo(t) {
    var s;
    const a = t.split(".")[0], o = (s = S[t]) == null ? void 0 : s.state;
    return !o || o === "unavailable" || o === "unknown" ? null : a === "light" ? o === "on" ? pa(t) : null : a === "climate" ? To[o] || null : a === "cover" ? o !== "closed" ? [146, 107, 199] : null : a === "lock" ? o !== "locked" ? [244, 67, 54] : null : a === "media_player" ? ["playing", "paused", "on", "buffering"].includes(o) ? [3, 169, 244] : null : a === "humidifier" || a === "valve" ? ["on", "open", "opening", "closing"].includes(o) ? [33, 150, 243] : null : a === "vacuum" ? ["cleaning", "returning"].includes(o) ? [0, 150, 136] : null : a === "alarm_control_panel" ? o !== "disarmed" && o !== "triggered" ? [76, 175, 80] : null : a === "fan" ? o === "on" ? [0, 188, 212] : null : (a === "switch" || a === "input_boolean") && o === "on" ? [255, 193, 7] : null;
  }
  function Ao(t, a, o = !1) {
    const [s, c, g] = t.map((dt) => dt / 255), p = Math.max(s, c, g), v = Math.min(s, c, g), k = p - v, F = k ? (p === s ? (c - g) / k + (c < g ? 6 : 0) : p === c ? (g - s) / k + 2 : (s - c) / k + 4) * 60 : 0, N = (p + v) / 2, I = k ? k / (1 - Math.abs(2 * N - 1)) : 0, Q = k < 0.1 ? Math.min(I, 0.25) : 1, it = (dt) => {
      const U = (W) => (W + F / 30) % 12, ut = Q * Math.min(dt, 1 - dt);
      return [0, 8, 4].map((W) => Math.round(255 * (dt - ut * Math.max(-1, Math.min(U(W) - 3, 9 - U(W), 1)))));
    };
    for (let dt = 0.5; o ? dt < 0.96 : dt > 0.04; dt += o ? 0.01 : -0.01) {
      const U = it(dt);
      if (Qe(U, a) >= 3) return "rgb(" + U.join(",") + ")";
    }
    return o ? "#ffffff" : "#26221e";
  }
  const ua = (t) => {
    const a = [1, 3, 5].map((o) => parseInt(t.slice(o, o + 2), 16));
    return Math.max(...a) - Math.min(...a) < 26 ? "" : ";--sum-d:" + Ao(a, [58, 58, 58], !0) + ";--sum-l:" + Ao(a, [230, 230, 230]);
  }, Wn = { d: ["#ffb894", "#d2b4ff", "#9dcbff"], l: ["#f0946a", "#b48ae6", "#6fa8e8"] }, _i = () => [0, 1, 2].map((t) => "--g" + t + "-d:" + Wn.d[t] + ";--g" + t + "-l:" + Wn.l[t]).join(";"), mr = '<svg class="tfGradDefs" aria-hidden="true" focusable="false"><defs><linearGradient id="hcClimateGrad" x1="0" y1="0" x2="0" y2="1">' + [0.15, 0.5, 0.85].map((t, a) => '<stop offset="' + t + '" style="stop-color:var(--g' + a + ')"/>').join("") + "</linearGradient></defs></svg>", on = (t) => {
    const a = t.map((o) => Math.round(o + (255 - o) * Ai));
    return "--light-soft:rgb(" + a.join(",") + ");--light-ink:" + Ao(t, a);
  }, no = (t) => on(pa(t)), Bn = (t) => {
    const a = Lo(t);
    return a ? ' data-light style="' + on(a) + '"' : "";
  }, rn = (t) => {
    const a = Ut(t);
    return a.length ? a.some((o) => o !== "onoff") : Kt(t).brightness != null;
  }, Rn = (t) => [Kt(t).min_color_temp_kelvin || 2e3, Kt(t).max_color_temp_kelvin || 6500], sn = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function gr(t) {
    const a = Math.max(1, Math.round((Date.now() - t) / 1e3));
    if (a < 10) return "Just now";
    if (a < 60) return a + " seconds ago";
    const o = Math.round(a / 60);
    if (o < 60) return o + (o === 1 ? " minute ago" : " minutes ago");
    const s = Math.round(o / 60);
    if (s < 24) return s + (s === 1 ? " hour ago" : " hours ago");
    const c = Math.round(s / 24);
    return c + (c === 1 ? " day ago" : " days ago");
  }
  const Nn = (t) => {
    var a;
    return Kt(t).current_position ?? (((a = S[t]) == null ? void 0 : a.state) === "closed" ? 0 : 100);
  }, _e = (t) => {
    var a;
    return P("pos", t, ((a = H.get(t)) == null ? void 0 : a.pos) ?? Nn(t));
  }, _o = (t) => {
    var a;
    return P("tilt", t, ((a = H.get(t)) == null ? void 0 : a.tilt) ?? Kt(t).current_tilt_position);
  };
  function ia(t) {
    var p;
    const a = S[t];
    if (!a) return "Not found";
    if (a.state === "unavailable") return "Unavailable";
    const o = a.attributes, s = t.split(".")[0];
    if (s === "light") {
      if (a.state !== "on") return "Off";
      const v = o.color_temp_kelvin;
      return (rn(t) ? eo(a) + "%" : "On") + (o.color_mode === "color_temp" && v ? " · " + Number(v).toLocaleString() + "k" : Jd.includes(o.color_mode) ? " · Colour" : "");
    }
    if (s === "climate") return (a.state === "off" ? "Off" : De(o.hvac_action || a.state)) + " · " + Aa(o.current_temperature) + " °C now";
    if (s === "cover") {
      const v = Nn(t), k = o.current_tilt_position;
      return a.state === "opening" || a.state === "closing" ? De(a.state) + " - " + v + "%" : (v <= 0 ? "Closed" : v >= 100 ? "Open" : "Partially open") + (k > 0 && k < 100 ? " · tilted" : "");
    }
    if (s === "humidifier") return a.state !== "on" ? "Off" : De(o.action || "on") + " · " + o.current_humidity + "% now";
    if (s === "vacuum") return De(a.state) + (a.state === "cleaning" && ((p = o.rooms) != null && p.length) ? " · " + o.rooms.join(", ") : "") + (o.battery_level != null ? " · " + o.battery_level + "%" : "");
    if (s === "media_player") return a.state === "playing" || a.state === "paused" ? (a.state === "paused" ? "Paused · " : "") + (o.media_title || "Playing") : De(a.state);
    if (s === "alarm_control_panel") return cp[a.state] || De(a.state);
    if (s === "lock" || s === "valve") return De(a.state);
    if (s === "switch") return a.state === "on" ? "On" : "Off";
    if (s === "plant") return a.state === "ok" ? "Healthy" : De(o.problem);
    if (s === "binary_sensor")
      return o.device_class === "battery" ? a.state === "on" ? "Low" : "Normal" : o.device_class === "problem" ? a.state === "on" ? "Problem" : "OK" : o.device_class === "moisture" ? a.state === "on" ? "Wet" : "Dry" : cd.includes(o.device_class) ? a.state === "on" ? "Open" : "Closed" : a.state === "on" ? "Detected" : "Clear";
    if (o.rang) return "Rang at " + sn(o.rang);
    const c = i();
    if (c != null && c.formatEntityState && !ir(t))
      try {
        return c.formatEntityState(a);
      } catch {
      }
    const g = Number(a.state);
    if (a.state !== "" && Number.isFinite(g)) {
      const v = Math.abs(g) >= 100 ? 0 : Math.abs(g) >= 10 ? 1 : 2, k = o.unit_of_measurement ? o.unit_of_measurement === "%" ? "%" : " " + o.unit_of_measurement : "";
      return g.toLocaleString(void 0, { maximumFractionDigits: v }) + k + (o.plant_low ? " · Low" : o.plant_high ? " · High" : "");
    }
    return De(a.state);
  }
  const vr = (t) => t >= 1e3 ? Aa(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W";
  function Na(t) {
    var o, s;
    const a = i();
    t.querySelectorAll("[data-icon-for]").forEach((c) => {
      var v;
      const g = S[c.dataset.iconFor], p = c.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && g && !p) {
        let k = c.firstElementChild;
        (!k || k.localName !== "ha-state-icon") && (c.textContent = "", k = document.createElement("ha-state-icon"), c.appendChild(k)), k.hass = a, k.stateObj = g;
      } else if (customElements.get("ha-icon")) {
        let k = c.firstElementChild;
        (!k || k.localName !== "ha-icon") && (c.textContent = "", k = document.createElement("ha-icon"), c.appendChild(k)), k.icon = p || ((v = g == null ? void 0 : g.attributes) == null ? void 0 : v.icon) || "mdi:circle-medium";
      } else c.textContent || (c.textContent = (c.dataset.letter || It(c.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (o = t.querySelectorAll) == null || o.call(t, ".tfIcon").forEach(ha), (s = t.classList) != null && s.contains("tfIcon") && ha(t), Zo();
  }
  const fa = /* @__PURE__ */ new Map();
  function ha(t) {
    var g, p, v;
    const a = (((g = t.closest("[data-k]")) == null ? void 0 : g.dataset.k) || "") + "|" + (t.dataset.iconFor || ((p = t.querySelector("[data-icon-for]")) == null ? void 0 : p.dataset.iconFor) || t.getAttribute("aria-label") || ""), o = getComputedStyle(t), s = { backgroundColor: o.backgroundColor, color: o.color }, c = fa.get(a);
    fa.set(a, s), !(!c || c.backgroundColor === s.backgroundColor && c.color === s.color || (v = window.matchMedia) != null && v.call(window, "(prefers-reduced-motion: reduce)").matches) && t.animate([c, s], { duration: 180, easing: "ease" });
  }
  const br = "[data-icon-for]>:is(ha-state-icon,ha-icon),.tfIcon>svg", Yo = (t) => {
    const a = [t];
    for (; a.length; ) {
      const o = a.shift();
      if (o.localName === "svg") return o;
      o.shadowRoot && a.push(...o.shadowRoot.children), a.push(...o.children);
    }
    return null;
  };
  function wr(t) {
    var it, dt, U;
    const a = t.localName === "svg" ? t : Yo(t), o = a ? [...a.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")] : [];
    if (!o.length) return !a;
    const s = (it = t.closest(".tfIcon")) == null ? void 0 : it.offsetWidth;
    if (s === void 0) return !0;
    if (!s) return !1;
    const c = s + "|" + o.map((ut) => ut.getAttribute("d") || ut.localName).join("|");
    if (t.dataset.fitted === c) return !0;
    let g = 1 / 0, p = 1 / 0, v = -1 / 0, k = -1 / 0;
    for (const ut of o) {
      const W = ut.getBBox(), wt = getComputedStyle(ut), q = wt.stroke !== "none" ? (parseFloat(wt.strokeWidth) || 0) / 2 : 0;
      !W.width && !W.height || (g = Math.min(g, W.x - q), p = Math.min(p, W.y - q), v = Math.max(v, W.x + W.width + q), k = Math.max(k, W.y + W.height + q));
    }
    if (!(v > g)) return !1;
    const F = (U = (dt = a.viewBox) == null ? void 0 : dt.baseVal) != null && U.width ? a.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, N = s - 14, I = N * F.width / Math.max(v - g, k - p), Q = I / F.width;
    return t.localName === "svg" ? (t.style.width = I + "px", t.style.height = I + "px") : t.style.setProperty("--mdc-icon-size", I + "px"), a.style.translate = ((F.x + F.width / 2 - (g + v) / 2) * Q).toFixed(2) + "px " + ((F.y + F.height / 2 - (p + k) / 2) * Q).toFixed(2) + "px", t.dataset.fitted = c, !0;
  }
  let oo = 0;
  function _a(t = 0) {
    clearTimeout(oo), [...n.querySelectorAll(br)].filter((o) => !wr(o)).length && t < 5 && (oo = setTimeout(() => _a(t + 1), 300));
  }
  function Zo() {
    clearTimeout(oo), oo = setTimeout(() => _a(), 60);
  }
  const Ei = (t) => {
    var a, o, s;
    return t.startsWith("light.") && S[t] && !Kt(t).icon && !((s = (o = (a = i()) == null ? void 0 : a.entities) == null ? void 0 : o[t]) != null && s.icon) ? "mdi:lightbulb" : "";
  }, Ze = (t, a, o) => (a = a || Ei(t), ' data-icon-for="' + tt(t) + '"' + (a ? ' data-icon-name="' + tt(a) + '"' : "") + (o ? ' data-letter="' + tt(o) + '"' : "")), Ea = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : Kt(t).rang ? "mdi:doorbell" : "", xe = (t, a, o, s) => tt([t, a, o, s ? JSON.stringify(s) : ""].join("|")), Eo = (t) => tt(JSON.stringify(t));
  function qn(t, a) {
    var c, g;
    const o = tt(It(a) + ", " + ia(a));
    return '<div class="activityRow' + (Number.isFinite(Number((c = S[a]) == null ? void 0 : c.state)) && ((g = S[a]) == null ? void 0 : g.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + tt(t + "|" + a) + '" aria-label="' + o + '. Show the last 24 hours"' : '" aria-label="' + o + '"') + '><div class="tfIcon" aria-hidden="true"' + Ze(a, Ea(a)) + '></div><div><div class="activityRowName">' + tt(It(a)) + '</div><div class="activityRowMeta">' + tt(ia(a)) + "</div></div></div>";
  }
  const jn = (t, a, o) => '<div class="activityRow" aria-label="' + tt(t + ", " + a) + '"><div class="tfIcon" aria-hidden="true"' + Ze("", o, t) + '></div><div><div class="activityRowName">' + tt(t) + '</div><div class="activityRowMeta">' + tt(a) + "</div></div></div>";
  function Ko(t) {
    var o;
    const a = ((o = S[t]) == null ? void 0 : o.state) === "on";
    return '<div class="activityRow tfPlug' + (a ? " on" : "") + '"><button class="tfIcon" type="button" data-act="' + xe("switch", "toggle", t) + '" aria-label="Turn ' + tt(It(t)) + (a ? " off" : " on") + '"' + Ze(t) + '></button><button class="tfName" type="button" data-more="' + tt(t) + '" aria-label="' + tt(It(t) + ", " + ia(t) + ". More info") + '"><span class="activityRowName">' + tt(It(t)) + '</span><span class="activityRowMeta">' + tt(ia(t)) + "</span></button></div>";
  }
  const kn = (t) => {
    var a;
    return ((a = Vt.get(t)) == null ? void 0 : a.name) ?? It(t);
  }, Do = (t) => {
    var a;
    return ((a = Vt.get(t)) == null ? void 0 : a.text) ?? ia(t);
  };
  function es(t) {
    var o;
    const a = (o = Vt.get(t)) == null ? void 0 : o.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (a ? Ze("", a, kn(t)) : Ze(t, Ea(t))) + '></div><div><div class="activityRowName">' + tt(kn(t)) + '</div><div class="activityRowMeta">' + tt(Do(t)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + tt(kn(t)) + '’s last 24 hours">' + Kd + '</button></div><svg class="tfGraph" data-graph="' + tt(t) + '" role="img" aria-label="' + tt(kn(t)) + ', last 24 hours"></svg></div>';
  }
  function Bo(t, a, o, s, c = "", g = null, p = "") {
    const v = G && G.key === t;
    return '<section class="card tfCard' + (p ? " " + p : "") + (v ? " open" : "") + '" data-tf data-k="' + tt(t) + '" style="order:' + a + (v && G.h ? ";min-height:" + G.h + "px" : "") + '" aria-label="' + tt(o) + '"><div class="activityHeader">' + (g ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + tt(g) + '" aria-label="' + tt(o + (S[g] ? ", " + ia(g) : "") + ". More info") + '">' + tt(o) + "</button>" : '<div class="activityTitle">' + tt(o) + "</div>") + "</div>" + (v ? es(G.id) : '<div class="activityRows">' + s.join("") + "</div>" + c) + "</section>";
  }
  function aa(t, a) {
    const o = "readings:" + t.id, s = t.readings.map((c) => qn(o, c));
    return t.power != null && s.push(jn("Power now", vr(t.power), "mdi:flash")), Bo(o, a, "Readings", s.concat(t.plugs.map(Ko)));
  }
  function $o(t, a) {
    var v;
    const o = "energy:" + t.id, [s, c] = [t.solar.find((k) => k.endsWith("_power")), t.solar.find((k) => k.endsWith("_today"))], g = [s, c].filter(Boolean).map((k) => qn(o, k)), p = Number(((v = S[s]) == null ? void 0 : v.state) || 0) * 1e3;
    return oe.grid && (g.push(qn(o, oe.grid)), g.push(jn("House use", vr(p + Number(S[oe.grid].state)), "mdi:home-lightning-bolt"))), Bo(o, a, "Energy", g, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const xr = (t, a) => Bo("plant:" + t.id, a, It(t.id), t.readings.map((o) => qn("plant:" + t.id, o)), "", t.id);
  function zn(t, a, o, s, c, g, p = null) {
    const v = o == null ? null : Math.max(0, Math.min(1, o)), k = v == null ? 0 : Math.round(v * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + tt(s) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + k + '"' + (c ? ' aria-valuetext="' + tt(c) + '"' : "") + ' data-drag="' + tt(t + "|" + a) + '">' + (p != null ? '<span class="was" aria-hidden="true" style="left:' + p + '%"></span>' : "") + (g ? v == null ? "" : '<b style="left:' + k + '%"></b>' : '<i style="width:' + k + '%"></i>') + "</div>";
  }
  const Mn = "move-assistant-house-last-bright", Ya = (() => {
    try {
      return JSON.parse(Vo.get(Mn)) || {};
    } catch {
      return {};
    }
  })();
  let yr = 0;
  const Vn = (t, a) => {
    !a || Ya[t] === a || (Ya[t] = a, clearTimeout(yr), yr = setTimeout(() => Vo.set(Mn, JSON.stringify(Ya)), 500));
  }, Xo = (t, a, o, s) => '<div class="tfStep" role="group" aria-label="' + tt(t) + '"><button type="button" data-act="' + o + '" aria-label="Lower ' + tt(t.toLowerCase()) + '">' + $c.down + "</button><output>" + tt(a) + '</output><button type="button" data-act="' + s + '" aria-label="Raise ' + tt(t.toLowerCase()) + '">' + $c.up + "</button></div>", Ce = (t, a, o) => '<div class="' + t + '" role="group" aria-label="' + tt(a) + '">' + o.filter(Boolean).map((s) => '<button type="button" data-act="' + s.act + '"' + (s.pressed != null ? ' aria-pressed="' + s.pressed + '"' : "") + (s.disabled ? " disabled" : "") + (s.aria ? ' aria-label="' + tt(s.aria) + '"' : "") + ">" + (s.html || tt(s.label)) + "</button>").join("") + "</div>", Ro = (t, a) => "width:" + Math.round(Math.max(0, Math.min(1, (t - a * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * a / 3).toFixed(2), ba = (t) => "left:calc(4px + " + t / 100 + " * (100% - 8px))", Gn = (t, a) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + tt(It(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + Math.round(a) + '% open" data-blocks="' + tt(t) + '">' + [0, 1, 2, 3].map((o) => '<span><i style="' + Ro(a, o) + '"></i><b' + (a >= (o + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (o + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + ba(a) + '">' + Math.round(a) + "%</output></div>";
  function as(t, a) {
    t.querySelectorAll(":scope>span").forEach((s, c) => {
      s.firstElementChild.setAttribute("style", Ro(a, c)), s.lastElementChild.classList.toggle("lit", a >= (c + 1) * 25 - 12);
    });
    const o = t.querySelector(".tfTip");
    o.setAttribute("style", ba(a)), o.textContent = Math.round(a) + "%", t.setAttribute("aria-valuenow", String(Math.round(a))), t.setAttribute("aria-valuetext", Math.round(a) + "% open");
  }
  const kr = (t, a) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + tt(It(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + Math.round(a) + '% open" data-drag="tilt|' + tt(t) + '"><i style="width:calc((100% - 8px) * ' + a / 100 + ')"></i><span' + (a > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (a > 92 ? ' class="lit"' : "") + ">Open</span></div>", Jo = (t, a, o) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + tt(It(t)) + '">' + [
    Yt(t, mh) && ["open", "Open", "open_cover", a >= 100 && !o],
    Yt(t, vh) && ["stop", "Stop", "stop_cover", !1],
    Yt(t, gh) && ["close", "Close", "close_cover", a <= 0 && !o]
  ].filter(Boolean).map(([s, c, g, p]) => '<button type="button" data-act="' + xe("cover", g, t) + '" aria-label="' + c + '"' + (p ? " disabled" : "") + ">" + bh[s] + "</button>").join("") + "</div>", Di = (t, a) => '<button class="tfIcon' + (a.art ? " art" : "") + '" type="button" data-act="' + a.button.act + '" aria-label="' + tt(a.button.label) + '"' + (a.art ? ' style="background-image:url(&quot;' + tt(a.art) + '&quot;)"' : Ze(t, a.icon)) + "></button>", ns = (t) => '<button class="tfName" type="button" data-more="' + tt(t) + '" aria-label="' + tt(It(t) + ", " + ia(t) + ". More info") + '"><span class="activityRowName">' + tt(It(t)) + '</span><span class="activityRowMeta">' + tt(ia(t)) + "</span></button>";
  function Qo(t, a = !1, o = null) {
    const s = Z(t), c = t.startsWith("light.") && ti(t) && !(o && Gi(t) < 3), g = o || (a && t.startsWith("light.") ? ["bright"] : null), p = c ? ['<div class="tfDacPad" data-dac="' + (a ? "more:" : o ? "dash:" : "tile:") + tt(t) + '"></div>'] : s.sections.map((v, k) => v && (!g || g.includes((s.parts || [])[k])) ? v : "").filter(Boolean);
    return '<div class="tfAction' + (c ? " tfDac" : "") + (s.on ? " on" : "") + '" data-k="' + tt(t) + '"' + (s.tone ? ' data-tone="' + s.tone + '"' : "") + Bn(t) + '><div class="tfActionHead">' + Di(t, s) + ns(t) + "</div>" + p.join("") + "</div>";
  }
  const wa = "dual-controller-v3", ln = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let io = null;
  async function os() {
    if (io || customElements.get(wa)) return;
    io = "loading";
    const t = await Promise.resolve().then(() => B({ type: "lovelace/resources" })).catch(() => null), a = Array.isArray(t) && t.some((s) => /dual-axis-controller/i.test(s.url || ""));
    if (await Promise.race([customElements.whenDefined(wa), new Promise((s) => setTimeout(s, a ? 8e3 : 0))]), customElements.get(wa)) return;
    const o = Object.assign(document.createElement("script"), { src: ln });
    o.onerror = () => {
      io = "failed", Y();
    }, document.head.appendChild(o);
  }
  const Oa = /* @__PURE__ */ new Map(), Za = (t) => (Ht.lightStyles[t] || Ht.lights) === "dac", Da = () => Ht.lights === "dac" || Object.values(Ht.lightStyles).includes("dac");
  function ti(t) {
    return Za(t) && !!customElements.get(wa);
  }
  const ro = (t) => Ht.lightPads[t] || Ht.dacPad, Bi = () => {
    const t = i();
    return t && {
      ...t,
      themes: { ...t.themes || {}, darkMode: !b.classList.contains("light") },
      callService: (a, o, s, ...c) => t.callService(a, ...Xl(a, o, s), ...c)
    };
  }, Ri = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", u = (t) => {
    !t.shadowRoot || t.shadowRoot.querySelector("style[data-tf]") || (t.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: Ri })).dataset.tf = "");
  }, m = /* @__PURE__ */ new Map(), x = new ResizeObserver((t) => t.forEach(({ target: a }) => {
    const o = a.parentElement;
    !o || !a.offsetHeight || (o.style.removeProperty("min-height"), m.set(o.dataset.dac, o.offsetHeight));
  }));
  function T(t) {
    t.querySelectorAll("[data-dac]").forEach((a) => {
      const o = a.dataset.dac;
      let s = Oa.get(o);
      if (!s) {
        const c = o.slice(o.indexOf(":") + 1);
        s = document.createElement(wa), s.setConfig({ type: "custom:" + wa, entity: c, pad: ro(c), tap_action: { action: "none" } }), Oa.set(o, s);
      }
      s.hass = Bi(), s.parentNode !== a && a.replaceChildren(s), !s.offsetHeight && m.has(o) && (a.style.minHeight = m.get(o) + "px"), x.observe(s), u(s);
    });
  }
  function O() {
    const t = Bi();
    Oa.forEach((a, o) => {
      a.isConnected ? a.hass = t : Oa.delete(o);
    });
  }
  customElements.whenDefined(wa).then(() => {
    M && (L != null && L.querySelector("[data-tf]")) && el(na);
  });
  const P = (t, a, o) => C.has(t + "|" + a) ? C.get(t + "|" + a) : o;
  function Z(t) {
    var g;
    const a = S[t], o = a.attributes, s = t.split(".")[0], c = (p, v) => ({ act: xe(p, "toggle", t), label: v });
    if (s === "light") {
      const p = a.state === "on", v = Ut(t), [k, F] = Rn(t), N = P("bright", t, eo(a));
      p && Vn(t, eo(a));
      const I = P("ct", t, p && o.color_mode === "color_temp" ? o.color_temp_kelvin : null), Q = P("hue", t, p && Jd.includes(o.color_mode) && o.hs_color ? o.hs_color[0] : null);
      return { on: p, button: c("light", "Turn " + It(t) + (p ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        rn(t) && zn("bright", t, N / 100, It(t) + " brightness", N + "%", !1, p ? null : Ya[t] ?? null),
        v.includes("color_temp") && zn("ct", t, I == null ? null : (I - k) / (F - k), It(t) + " warm to cool", I == null ? "" : Math.round(I) + " kelvin", !0),
        v.some((it) => Jd.includes(it)) && zn("hue", t, Q == null ? null : Q / 360, It(t) + " colour", "", !0)
      ] };
    }
    if (s === "climate") {
      const p = o.target_temp_step || 0.5, v = Number(o.temperature);
      return { on: a.state !== "off", tone: a.state === "cool" || o.hvac_action === "cooling" ? "cool" : "heat", button: c("climate", "Turn " + It(t) + (a.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(v) && Xo("Target temperature", Aa(v) + " °C", xe("climate", "set_temperature", t, { temperature: v - p }), xe("climate", "set_temperature", t, { temperature: v + p })),
        Ce("tfSeg", "Mode", (o.hvac_modes || []).map((k) => ({ label: De(k), act: xe("climate", "set_hvac_mode", t, { hvac_mode: k }), pressed: a.state === k })))
      ] };
    }
    if (s === "cover") {
      const p = a.state === "opening" || a.state === "closing", v = a.state === "closed", k = _e(t), F = _o(t);
      return { on: !v, tone: "blue", icon: ap[Zd(a)][v ? 1 : 0], button: c("cover", (v ? "Open " : "Close ") + It(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        Yt(t, ep) && Gn(t, k),
        F != null && kr(t, F),
        Jo(t, k, p)
      ] };
    }
    if (s === "humidifier") {
      const p = Number(o.humidity);
      return { on: a.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: c("humidifier", "Turn " + It(t) + (a.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(p) && Xo("Target humidity", p + "%", xe("humidifier", "set_humidity", t, { humidity: p - 1 }), xe("humidifier", "set_humidity", t, { humidity: p + 1 })),
        ((g = o.available_modes) == null ? void 0 : g.length) && Ce("tfSeg", "Mode", o.available_modes.map((v) => ({ label: De(v), act: xe("humidifier", "set_mode", t, { mode: v }), pressed: o.mode === v })))
      ] };
    }
    if (s === "media_player") {
      const p = a.state === "playing", v = a.state === "off" || a.state === "standby", k = P("vol", t, o.volume_level), F = v ? { act: xe("media_player", Yt(t, fh) ? "turn_on" : "toggle", t), label: "Turn " + It(t) + " on" } : a.state === "playing" || a.state === "paused" ? { act: xe("media_player", "media_play_pause", t), label: (p ? "Pause " : "Play ") + It(t) } : { act: xe("media_player", Yt(t, hh) ? "turn_off" : "toggle", t), label: "Turn " + It(t) + " off" };
      return { on: !v, tone: "blue", art: !v && o.entity_picture ? o.entity_picture : null, button: F, parts: ["playback", "volume"], sections: v ? [] : [
        (Yt(t, Jc) || Yt(t, Qc) || Yt(t, Xc) || Yt(t, tp)) && Ce("tfSeg", "Playback", [
          { html: dd.prev, aria: "Previous", act: xe("media_player", "media_previous_track", t), disabled: !Yt(t, Jc) },
          { html: p ? dd.pause : dd.play, aria: p ? "Pause" : "Play", act: xe("media_player", "media_play_pause", t), disabled: !(Yt(t, Xc) || Yt(t, tp)) },
          { html: dd.next, aria: "Next", act: xe("media_player", "media_next_track", t), disabled: !Yt(t, Qc) }
        ]),
        Yt(t, uh) && k != null && zn("vol", t, k, It(t) + " volume", Math.round(k * 100) + "%")
      ] };
    }
    if (s === "vacuum") {
      const p = a.state === "cleaning", v = o.rooms || [], k = (N) => v.includes(N) ? v.filter((I) => I !== N) : v.concat(N), F = xe("vacuum", p ? "pause" : "start", t, ir(t) ? { rooms: v } : null);
      return { on: p || a.state === "returning", tone: "blue", button: { act: F, label: (p ? "Pause " : "Start ") + It(t) }, parts: ["controls", "rooms"], sections: [
        Ce("tfSeg", It(t), [
          { label: p ? "Pause" : "Start", act: F },
          { label: "Dock", act: xe("vacuum", "return_to_base", t), disabled: a.state === "docked" },
          { label: "Locate", act: xe("vacuum", "locate", t) }
        ]),
        ir(t) && Ce("tfChips", "Rooms to clean", oe.rooms.filter((N) => N.id !== "balcony").map((N) => ({ label: N.name, act: xe("vacuum", "set_rooms", t, { rooms: k(N.name) }), pressed: v.includes(N.name) })))
      ] };
    }
    if (s === "lock") {
      const p = a.state === "locked";
      return { on: !p, tone: "heat", button: { act: xe("lock", p ? "unlock" : "lock", t), label: (p ? "Unlock " : "Lock ") + It(t) }, parts: ["controls"], sections: [
        Ce("tfSeg", It(t), [
          { label: "Lock", act: xe("lock", "lock", t), pressed: p },
          { label: "Unlock", act: xe("lock", "unlock", t), pressed: a.state === "unlocked" },
          Yt(t, Eh) && { label: "Open", act: xe("lock", "open", t), pressed: a.state === "open" }
        ])
      ] };
    }
    if (s === "alarm_control_panel") {
      const p = a.state === "disarmed";
      return { on: !p, tone: a.state === "triggered" ? "alarm" : "blue", button: { act: xe("alarm_control_panel", p ? "alarm_arm_away" : "alarm_disarm", t), label: p ? "Arm " + It(t) + ", away" : "Disarm " + It(t) }, parts: ["controls"], sections: [
        Ce("tfSeg", It(t), Dh.filter(([, , , v]) => !v || Yt(t, v)).map(([v, k, F]) => ({ label: k, act: xe("alarm_control_panel", F, t), pressed: a.state === v })))
      ] };
    }
    if (s === "valve") {
      const p = a.state === "open";
      return { on: p, tone: "blue", icon: "mdi:sprinkler-variant", button: c("valve", (p ? "Close " : "Open ") + It(t)), parts: ["controls"], sections: [
        Ce("tfSeg", It(t), [
          { label: "Open", act: xe("valve", "open_valve", t), pressed: p },
          { label: "Close", act: xe("valve", "close_valve", t), pressed: !p }
        ])
      ] };
    }
    return { on: !1, button: { act: "", label: It(t) }, sections: [] };
  }
  const rt = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : Aa(t)) + "°";
  function K(t) {
    var ut;
    const a = (W) => t.readings.find((wt) => Kt(wt).device_class === W), o = a("temperature"), s = a("humidity"), c = (W) => {
      var wt;
      return Number((wt = S[W]) == null ? void 0 : wt.state);
    }, g = (W) => t.actions.filter((wt) => W.test(wt)), p = t.lights.filter((W) => {
      var wt;
      return ((wt = S[W]) == null ? void 0 : wt.state) === "on";
    }), v = g(/^cover\./), k = v.filter((W) => {
      var wt;
      return ((wt = S[W]) == null ? void 0 : wt.state) !== "closed";
    }), F = [...new Set(v.map((W) => Zd(S[W])))], N = g(/^climate\./)[0], I = g(/^humidifier\./)[0], Q = g(/^media_player\./), it = Q.find((W) => {
      var wt;
      return ((wt = S[W]) == null ? void 0 : wt.state) === "playing";
    }) || Q.find((W) => {
      var wt;
      return ((wt = S[W]) == null ? void 0 : wt.state) === "paused";
    }), dt = t.plugs.filter((W) => {
      var wt;
      return ((wt = S[W]) == null ? void 0 : wt.state) === "on";
    }), U = [];
    if (o && Number.isFinite(c(o)) && U.push({ key: "temp", id: o, kind: "reading", icon: Go(o), label: "Temperature", value: Aa(c(o)) + "°" }), s && Number.isFinite(c(s)) && U.push({ key: "hum", id: s, kind: "reading", icon: Go(s), label: "Humidity", value: Math.round(c(s)) + "%" }), t.lights.length && U.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: Go("", "mdi:lightbulb"),
      label: "Lights",
      value: p.length ? p.length + " of " + t.lights.length + " on" : "All off",
      short: p.length ? p.length + " on" : "Off",
      on: p.length > 0,
      light: p.length ? no(p[0]) : "",
      acts: t.lights.map((W) => ["light", p.length ? "turn_off" : "turn_on", W]),
      aria: (p.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), v.length) {
      const W = F.length === 1 ? wh[F[0]] : "covers", wt = Math.round(v.reduce((q, Wt) => q + Nn(Wt), 0) / v.length);
      U.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        light: k.length ? on([146, 107, 199]) : "",
        icon: Go("", ((ut = ap[F[0]]) == null ? void 0 : ut[k.length ? 0 : 1]) || "mdi:window-shutter"),
        label: De(W),
        value: wt <= 0 ? "Closed" : wt >= 100 ? "Open" : wt + "% open",
        short: wt <= 0 ? "Closed" : wt + "%",
        on: k.length > 0,
        acts: v.map((q) => ["cover", k.length ? "close_cover" : "open_cover", q]),
        aria: (k.length ? "Close the " : "Open the ") + W + " in " + t.name
      });
    }
    if (N) {
      const W = Kt(N), wt = S[N].state === "off";
      U.push({
        key: "climate",
        kind: "control",
        tone: W.hvac_action === "cooling" ? "cool" : "heat",
        light: Lo(N) ? on(Lo(N)) : "",
        icon: Go(N),
        label: It(N),
        value: wt ? "Off" : De(W.hvac_action || S[N].state) + " · " + rt(W.temperature),
        short: wt ? "Off" : rt(W.temperature),
        on: !wt,
        acts: [["climate", "toggle", N]],
        aria: "Turn " + It(N) + (wt ? " on" : " off")
      });
    }
    if (I) {
      const W = S[I].state === "on";
      U.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        light: W ? on([33, 150, 243]) : "",
        icon: Go("", "mdi:air-humidifier"),
        label: It(I),
        value: W ? "On · " + Kt(I).humidity + "%" : "Off",
        short: W ? Kt(I).humidity + "%" : "Off",
        on: W,
        acts: [["humidifier", "toggle", I]],
        aria: "Turn " + It(I) + (W ? " off" : " on")
      });
    }
    if (Q.length) {
      const W = it || Q[0], wt = S[W], q = wt.state === "playing";
      U.push({
        key: "media",
        kind: "control",
        tone: "blue",
        light: Lo(W) ? on(Lo(W)) : "",
        icon: Go(W),
        label: It(W),
        value: ia(W),
        short: q ? "Playing" : wt.state === "paused" ? "Paused" : De(wt.state),
        on: q,
        acts: [["media_player", wt.state === "playing" || wt.state === "paused" ? "media_play_pause" : "toggle", W]],
        aria: (q ? "Pause " : "Play ") + It(W)
      });
    }
    return t.plugs.length && U.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      light: dt.length ? on([255, 193, 7]) : "",
      icon: Go("", "mdi:power-plug"),
      label: "Plugs",
      value: dt.length ? dt.length + " of " + t.plugs.length + " on" : "All off",
      short: dt.length ? dt.length + " on" : "Off",
      on: dt.length > 0,
      acts: t.plugs.map((W) => ["switch", dt.length ? "turn_off" : "turn_on", W]),
      aria: (dt.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((W) => U.push(Kt(W).device_class === "moisture" ? { key: "alert:" + W, kind: "alert", icon: Go(W), label: "Water leak" } : { key: "note:" + W, kind: "note", icon: Go(W), label: It(W) + " " + ia(W).toLowerCase() })), U;
  }
  const Ct = (t, a) => {
    const o = (s) => t.actions.filter((c) => s.test(c));
    return {
      lights: t.lights,
      covers: o(/^cover\./),
      climate: o(/^climate\./).slice(0, 1),
      humidifier: o(/^humidifier\./).slice(0, 1),
      plugs: t.plugs,
      media: (() => {
        const s = o(/^media_player\./);
        return [s.find((c) => {
          var g;
          return ((g = S[c]) == null ? void 0 : g.state) === "playing";
        }) || s.find((c) => {
          var g;
          return ((g = S[c]) == null ? void 0 : g.state) === "paused";
        }) || s[0]].filter(Boolean);
      })()
    }[a] || [];
  }, At = (t, a, o) => '<button class="' + a + (t.on ? " on" : "") + '" type="button" data-tone="' + t.tone + '" data-acts="' + Eo(t.acts) + '" aria-label="' + tt(t.aria) + '" aria-pressed="' + t.on + '">' + o + "</button>", St = (t) => '<button class="tfAName" type="button" data-go="' + tt(t.id) + '" aria-label="Open ' + tt(t.name) + '">' + tt(t.name) + "</button>";
  function Zt(t, a, o = !1) {
    const s = a.find((v) => v.key === "lights"), c = !!(s != null && s.on), g = "", p = '<span class="tfAreaGlyph"' + Ze("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>";
    return o || !s ? '<span class="tfIcon tfAreaIcon' + (c ? " on" : "") + '"' + g + ' aria-hidden="true">' + p + "</span>" : '<button class="tfIcon tfAreaIcon' + (c ? " on" : "") + '" type="button"' + g + ' data-acts="' + Eo(s.acts) + '" aria-label="' + tt(s.aria) + '" aria-pressed="' + c + '">' + p + "</button>";
  }
  const Gt = (t) => t.filter((a) => a.kind === "alert" || a.kind === "note").map((a) => '<span class="sourceTag">' + tt(a.label) + "</span>").join(" "), Nt = (t) => t.readings.find((a) => Kt(a).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((a) => S[a]) || null, ae = (t, a) => {
    const o = It(a);
    return o.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? De(o.slice(t.name.length + 1)) : o;
  };
  function jt(t) {
    const a = S[t], o = Kt(t), s = t.split(".")[0], c = Number(a.state);
    if (a.state === "unavailable") return { text: "Unavailable" };
    if (s === "sensor" && Number.isFinite(c)) {
      if (o.device_class === "temperature") return { text: rt(c) };
      const g = o.unit_of_measurement || "";
      return g === "%" ? { text: Math.round(c) + "%" } : { text: Aa(c, Number.isInteger(c) ? 0 : 1), unit: g };
    }
    if (s === "climate" && (o.current_temperature ?? o.temperature) != null) return { text: rt(o.current_temperature ?? o.temperature) };
    if (s === "light") return { text: a.state !== "on" ? "Off" : rn(t) ? eo(a) + "%" : "On" };
    if (s === "cover") {
      const g = Nn(t);
      return { text: g <= 0 ? "Closed" : g >= 100 ? "Open" : g + "%" };
    }
    return s === "humidifier" ? { text: a.state === "on" ? o.humidity + "%" : "Off" } : s === "media_player" ? { text: a.state === "playing" ? "Playing" : a.state === "paused" ? "Paused" : De(a.state) } : { text: ia(t) };
  }
  const _t = (t, a, o) => {
    const s = o.find((v) => v.key === "temp"), c = o.find((v) => v.key === "hum"), g = Kt(a), p = S[a].state === "off";
    return a.startsWith("climate.") ? [ae(t, a), p ? "Off" : De(g.hvac_action || S[a].state) + (g.temperature != null ? " · " + rt(g.temperature) : ""), c && c.value + " humidity"].filter(Boolean).join(" · ") : [!(s && s.id === a) && ae(t, a), s && s.id !== a && s.value, c && c.id !== a && c.value + " humidity"].filter(Boolean).join(" · ");
  };
  function Xt(t, a, o) {
    const s = o && jt(o), c = o ? _t(t, o, a) : "", g = (k) => {
      const F = Ct(t, k.key);
      return F.length === 1 ? F[0] : "group:" + t.id + ":" + k.key;
    }, p = a.filter((k) => k.kind === "control").slice(0, 4).map((k) => '<div class="tfATile' + (k.on ? " on" : "") + '" data-tone="' + k.tone + '"' + (k.light ? ' data-light style="' + k.light + '"' : "") + ">" + At(k, "tfIcon", k.icon) + '<button class="tfName" type="button" data-more="' + tt(g(k)) + '" aria-label="' + tt(t.name + " " + k.label.toLowerCase() + ", " + k.value + ". Open") + '"><span class="activityRowName">' + tt(k.label) + '</span><span class="activityRowMeta">' + tt(k.value) + "</span></button></div>"), v = Gt(a);
    return '<div class="workoutPanelTop">' + Zt(t, a) + '<div class="tfATitle">' + St(t) + "</div>" + (v ? '<div class="tfATags">' + v + "</div>" : "") + "</div>" + (o ? '<button class="tfABig" type="button" data-more="' + tt(o) + '" aria-label="' + tt(It(o) + ", " + ia(o) + ". More info") + '"><span class="tfABigMain' + (s.text.length > 7 ? " long" : "") + '">' + tt(s.text) + (s.unit ? '<span class="tfABigUnit">' + tt(s.unit) + "</span>" : "") + "</span>" + (c ? '<span class="tfABigSub">' + tt(c) + "</span>" : "") + "</button>" : "") + (p.length ? '<div class="tfATiles">' + p.join("") + "</div>" : "");
  }
  function $t(t) {
    const a = t.id === Lt, o = K(t), s = Nt(t), c = s && jt(s), g = [...o.filter((p) => p.kind === "control"), ...o.filter((p) => p.kind !== "control" && p.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (a ? " active" : "") + '" data-area="' + tt(t.id) + '" tabindex="0" aria-expanded="' + a + '" aria-label="' + tt(t.name) + '"><div class="panelExpanded"' + (a ? "" : " inert") + ">" + Xt(t, o, s) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + Zt(t, o, !0) + '<span class="tfACName">' + tt(t.name) + '</span></div><span class="tfACMain">' + (c ? tt(c.text + (c.unit ? " " + c.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + g.map((p) => '<span class="tfACTile"><span class="tfIcon' + (p.kind === "alert" ? " alert" : "") + '"' + (p.on && p.light ? ' data-light style="' + p.light + '"' : "") + ">" + p.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let Te = [];
  const Rt = (t) => '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + Te.map($t).join("") + "</section></div>", He = (t) => t.startsWith("room:"), Be = (t) => Te.find((a) => "room:" + a.id === t);
  function dn(t, a) {
    const o = K(t), s = Nt(t), c = s && jt(s), g = s ? _t(t, s, o) : "", p = c ? c.text + (c.unit ? " " + c.unit : "") : "", v = (Q) => {
      const it = Ct(t, Q.key);
      return it.length === 1 ? it[0] : "group:" + t.id + ":" + Q.key;
    }, k = o.filter((Q) => Q.kind === "control").slice(0, 4), F = (Q) => Q.on && Q.light ? ' data-light style="' + Q.light + '"' : "", N = k.map((Q) => '<button class="tfIcon' + (Q.on ? " on" : "") + '" type="button" data-tone="' + Q.tone + '"' + F(Q) + ' data-more="' + tt(v(Q)) + '" aria-label="' + tt(Q.label + ", " + Q.value + ". Open its controls") + '">' + Q.icon + "</button>"), I = k.map((Q) => '<button class="tfRoomDev" type="button" data-more="' + tt(v(Q)) + '" aria-label="' + tt(Q.label + ", " + Q.value + ". Open its controls") + '"><span class="tfIcon' + (Q.on ? " on" : "") + '" data-tone="' + Q.tone + '"' + F(Q) + ">" + Q.icon + '</span><span class="tfRoomDevName"><span class="activityRowName">' + tt(Q.label) + '</span><span class="activityRowMeta">' + tt(Q.value) + "</span></span></button>");
    return '<div class="tfAction tfRoomTile" data-k="' + tt(a) + '" data-go="' + tt(t.id) + '"><div class="tfActionHead"><span class="tfIcon tfRoomIcon" aria-hidden="true"><span class="tfAreaGlyph"' + Ze("area:" + t.id, t.icon || "mdi:texture-box", t.name) + '></span></span><button class="tfName" type="button" data-go="' + tt(t.id) + '" aria-label="Open ' + tt(t.name) + '"><span class="activityRowName">' + tt(t.name) + "</span>" + (p || g ? '<span class="activityRowMeta">' + (p ? '<span class="tfRoomInline">' + tt(p) + (g ? " · " : "") + "</span>" : "") + tt(g) + "</span>" : "") + "</button></div>" + (p ? '<div class="tfRoomReading" aria-hidden="true"><span class="tfRoomBig">' + tt(p) + "</span>" + (g ? '<span class="tfRoomSub">' + tt(g) + "</span>" : "") + "</div>" : "") + (N.length ? '<div class="tfRoomDevices">' + N.join("") + '</div><div class="tfRoomHeads">' + I.join("") + "</div>" : "") + "</div>";
  }
  const so = () => [
    { key: "home", name: "Home", ids: oe.homeVacuums },
    ...oe.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], Un = (t, a, o) => t + " " + (t === 1 ? a : o), xa = () => (V.favourites ?? kt.favorite_entities ?? []).filter((t) => S[t]);
  function Mr() {
    if (!ce) {
      const a = Object.entries(ta).sort((s, c) => c[1] - s[1]).map(([s]) => s), o = oe.rooms.flatMap((s) => s.actions);
      ce = [.../* @__PURE__ */ new Set([...ee, ...a, ...o.filter((s) => Z(s).on), ...o])];
    }
    const t = xa();
    return ce.filter((a) => S[a] && S[a].state !== "unavailable" && !t.includes(a));
  }
  let ye = !1;
  function cn() {
    if (!ye || V.favSeeded || !oe.rooms.length) return;
    const t = (o) => Object.keys(S).find((s) => ir(s) && o(s)), a = [t((o) => o.startsWith("climate.")), t((o) => o.startsWith("cover.") && /curtain/.test(o)), t((o) => o.startsWith("valve.")), oe.security.locks[0]];
    V = { ...V, favourites: [.../* @__PURE__ */ new Set([...V.favourites ?? kt.favorite_entities ?? [], ...a.filter(Boolean)])], favSeeded: !0 }, La();
  }
  const Sn = () => V.suggest ?? !kt.hide_suggested_entities;
  function Yn() {
    const t = new Set(V.favHidden || []), a = xa().filter((s) => !t.has(s)), o = Sn() ? Mr().filter((s) => !t.has(s) && ds(s)) : [];
    return [...a, ...o].slice(0, Rh);
  }
  const Sr = (t) => {
    const a = xa().includes(t);
    return '<button class="tfStar" type="button" data-star="' + tt(t) + '" aria-pressed="' + a + '" aria-label="Favourite: ' + tt(It(t)) + '">' + _h(a) + "</button>";
  };
  function Zn(t, { area: a = !1, star: o = !1, plain: s = !1, say: c = null, alert: g = !1 } = {}) {
    var dt, U, ut, W, wt, q;
    const p = s && ((wt = (dt = i()) == null ? void 0 : dt.devices) == null ? void 0 : wt[(W = (ut = (U = i()) == null ? void 0 : U.entities) == null ? void 0 : ut[t]) == null ? void 0 : W.device_id]), v = p && (p.name_by_user || p.name) || It(t), k = t.split(".")[0], F = !s && pd.includes(k) ? Z(t) : null, N = F ? F.on : ["on", "open", "playing"].includes((q = S[t]) == null ? void 0 : q.state), I = s ? null : F ? F.button : xh.includes(k) ? { act: xe(k, "toggle", t), label: "Turn " + It(t) + (N ? " off" : " on") } : k === "scene" || k === "script" ? { act: xe(k, "turn_on", t), label: "Run " + It(t) } : null, Q = (c ?? ia(t)) + (a && Se.get(t) ? " · " + Se.get(t) : ""), it = (F == null ? void 0 : F.icon) || Ea(t);
    return '<div class="activityRow' + (I ? " tfPlug" : "") + (N ? " on" : "") + (o ? " tfPick" : "") + (g ? " alert" : "") + '" data-k="' + tt((a ? "fav:" : "row:") + t) + '" data-tone="' + (k === "light" ? "light" : (F == null ? void 0 : F.tone) || "blue") + '"' + Bn(t) + ">" + (I && !o ? '<button class="tfIcon" type="button" data-act="' + I.act + '" aria-label="' + tt(I.label) + '"' + Ze(t, it) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + Ze(t, it) + "></div>") + '<button class="tfName" type="button" data-more="' + tt(t) + '" aria-label="' + tt(v + ", " + Q + ". More info") + '"><span class="activityRowName">' + tt(v) + '</span><span class="activityRowMeta">' + tt(Q) + "</span></button>" + (o ? Sr(t) : "") + "</div>";
  }
  const pn = () => {
    var t;
    return S[(t = V.sources) == null ? void 0 : t.weather] ? V.sources.weather : S["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(S).find((a) => a.startsWith("weather."));
  };
  function Pa() {
    var o;
    const t = (s) => Object.keys(S).filter((c) => c.startsWith("binary_sensor.") && s.includes(Kt(c).device_class));
    return ((o = Tt.alert_entities) != null && o.length ? Tt.alert_entities : [...t(["moisture", "smoke", "gas"]).map((s) => ({ entity: s, severity: "alert" })), ...t(cd).map((s) => ({ entity: s, severity: "warning" }))]).filter((s) => S[s.entity]).map((s) => ({ ...s, on: ["on", "open", "unlocked", "triggered", "problem"].includes(S[s.entity].state) }));
  }
  function is() {
    const t = Object.keys($d), a = /* @__PURE__ */ new Set(), o = [];
    return (kt.shortcuts || []).forEach((s) => {
      if (s.type === "summary") {
        if (!t.includes(s.key) || a.has(s.key)) return;
        a.add(s.key);
      }
      o.push(s);
    }), t.forEach((s) => {
      a.has(s) || o.push({ type: "summary", key: s });
    }), o;
  }
  function Cr() {
    var ut;
    const t = ((ut = i()) == null ? void 0 : ut.entities) || {}, a = (W) => Kt(W).device_class, o = Object.keys(S).filter((W) => W.startsWith("sensor.") && a(W) === "battery" || W.startsWith("binary_sensor.") && ["battery", "problem"].includes(a(W))), s = oe.rooms.flatMap((W) => W.plants.map((wt) => wt.id));
    if (!o.length && !s.length) return null;
    const c = (W) => {
      var q;
      const wt = (q = t[W]) == null ? void 0 : q.device_id;
      return !!wt && Object.keys(S).some((Wt) => {
        var Pe;
        return Wt.startsWith("binary_sensor.") && ((Pe = t[Wt]) == null ? void 0 : Pe.device_id) === wt && a(Wt) === "battery_charging" && S[Wt].state === "on";
      });
    }, g = (W) => W.startsWith("vacuum.") ? Kt(W).battery_level <= 20 && S[W].state !== "docked" : W.startsWith("binary_sensor.") ? a(W) === "battery" && S[W].state === "on" : parseFloat(S[W].state) <= 20 && !c(W), p = [...o, ...oe.vacuums].filter((W) => S[W] && g(W)), v = [...o.filter((W) => a(W) === "problem" && S[W].state === "on"), ...s.filter((W) => {
      var wt;
      return ((wt = S[W]) == null ? void 0 : wt.state) === "problem";
    })], k = o.filter((W) => S[W].state === "unavailable"), F = [.../* @__PURE__ */ new Set([...p, ...v, ...k])], N = (W) => {
      const wt = parseFloat(S[W].state);
      return a(W) === "battery" && Number.isFinite(wt) ? wt : 101;
    }, I = [...s, ...oe.vacuums, ...[...o].sort((W, wt) => N(W) - N(wt))].filter((W) => S[W] && !F.includes(W)), Q = /* @__PURE__ */ new Map();
    I.forEach((W) => {
      var q;
      const wt = ((q = oe.areaOf) == null ? void 0 : q.call(oe, W)) || "";
      Q.set(wt, [...Q.get(wt) || [], W]);
    });
    const it = (W) => {
      const wt = oe.rooms.findIndex((q) => q.id === W);
      return W === "" ? 1 / 0 : wt < 0 ? oe.rooms.length : wt;
    }, dt = [...Q.keys()].sort((W, wt) => it(W) - it(wt)), U = (W) => {
      var wt, q, Wt, Pe;
      return ((wt = oe.rooms.find((fe) => fe.id === W)) == null ? void 0 : wt.name) || ((Pe = (Wt = (q = i()) == null ? void 0 : q.areas) == null ? void 0 : Wt[W]) == null ? void 0 : Pe.name) || W;
    };
    return {
      value: [p.length && Un(p.length, "low battery", "low batteries"), v.length && Un(v.length, "problem", "problems"), k.length && Un(k.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: F, alert: !0 }, ...dt.map((W) => ({ name: W ? U(W) : dt.length > 1 ? "Other devices" : "Devices", ids: Q.get(W) }))].filter((W) => W.ids.length)
    };
  }
  function Ni() {
    var Ra;
    const t = oe.rooms, a = oe.security, o = (Qt, Ue) => Qt.actions.filter((e) => Ue.test(e)), s = (Qt) => t.map((Ue) => ({ name: Ue.name, ids: Qt(Ue) })).filter((Ue) => Ue.ids.length), c = t.flatMap((Qt) => Qt.lights), g = c.filter((Qt) => {
      var Ue;
      return ((Ue = S[Qt]) == null ? void 0 : Ue.state) === "on";
    }).length, p = t.map((Qt) => Qt.readings.find((Ue) => Kt(Ue).device_class === "temperature")).filter(Boolean).map((Qt) => Number(S[Qt].state)).filter(Number.isFinite), [v, k] = [Aa(Math.min(...p)), Aa(Math.max(...p))], F = t.flatMap((Qt) => o(Qt, /^media_player\./)), N = F.filter((Qt) => {
      var Ue;
      return ((Ue = S[Qt]) == null ? void 0 : Ue.state) === "playing";
    }).length, I = Pa(), Q = I.filter((Qt) => Qt.severity === "warning" && Qt.on).length, it = a.locks.filter((Qt) => {
      var Ue;
      return ["unlocked", "jammed", "open"].includes((Ue = S[Qt]) == null ? void 0 : Ue.state);
    }).length, dt = a.alarms.filter((Qt) => {
      var Ue;
      return ((Ue = S[Qt]) == null ? void 0 : Ue.state) === "disarmed";
    }).length, U = Q ? Un(Q, "warning", "warnings") : null, ut = it ? it + " unlocked" : dt ? dt + " disarmed" : U ? null : "All secure", W = Cr(), wt = t.flatMap((Qt) => Qt.solar), q = wt.find((Qt) => Qt.endsWith("_power")), Wt = {
      light: c.length && { value: g ? g + " on" : "All off", groups: s((Qt) => Qt.lights) },
      climate: p.length && { value: v === k ? v + "°" : v + " - " + k + "°", groups: s((Qt) => [...Qt.readings.filter((Ue) => ["temperature", "humidity"].includes(Kt(Ue).device_class)), ...o(Qt, /^(climate|humidifier)\./)]) },
      security: (a.alarms.length || a.locks.length) && { value: [U, ut].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...a.alarms, ...a.locks] }, { name: "Doors and windows", ids: a.openings }].filter((Qt) => Qt.ids.length) },
      media_players: F.length && { value: N ? N + " playing" : "No media playing", groups: s((Qt) => o(Qt, /^media_player\./)) },
      maintenance: W,
      energy: oe.grid && { value: vr(Number(((Ra = S[q]) == null ? void 0 : Ra.state) || 0) * 1e3 + Number(S[oe.grid].state)) + " now", groups: [{ name: "Energy", ids: [...wt, oe.grid] }] }
    }, Pe = [], fe = I.filter((Qt) => Qt.severity !== "warning" && Qt.on);
    return fe.length && Pe.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: Un(fe.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: fe.map((Qt) => Qt.entity) }] }), is().forEach((Qt) => {
      Qt.type !== "summary" ? Pe.push({ key: "path:" + Qt.path, name: Qt.label || Qt.path, icon: Qt.icon || "mdi:link-variant", colour: "", value: "" }) : !Qt.hidden && Wt[Qt.key] && !(V.hiddenSums || []).includes(Qt.key) && Pe.push({ key: Qt.key, ...$d[Qt.key], ...Wt[Qt.key] });
    }), Pe;
  }
  const Tr = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + tt(t.key) + '" data-k="sum:' + tt(t.key) + '" aria-label="' + tt(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : t.key === "climate" ? ' style="' + _i() + '"' : t.colour && ua(t.colour) ? ' style="' + ua(t.colour).slice(1) + '"' : "") + ">" + (t.key === "climate" ? mr : "") + '<div class="tfIcon" aria-hidden="true"' + Ze(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + tt(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + tt(t.value) + "</div>" : "") + "</div></div>";
  function rs(t) {
    const a = xa();
    V = { ...V, favourites: a.includes(t) ? a.filter((o) => o !== t) : [...a, t], favHidden: (V.favHidden || []).filter((o) => o !== t) }, La(), Ba();
  }
  function Pn(t) {
    document.querySelector("home-assistant") && (J.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function ei(t, a) {
    if (t.startsWith("path:")) {
      Pn(t.slice(5));
      return;
    }
    ar("summary:" + t, a);
  }
  async function yd() {
    const t = (p) => Promise.resolve().then(() => B(p)).catch(() => null), [a, o, s, c] = await Promise.all([
      t({ type: "frontend/get_user_data", key: np }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), g = (a == null ? void 0 : a.value) || {};
    V = { favourites: g.favourites ?? null, sources: g.sources, hiddenSums: g.hiddenSums, dash: g.dash, named: g.named, favHidden: g.favHidden, suggest: g.suggest, favSeeded: g.favSeeded }, kt = (o == null ? void 0 : o.value) || {}, Tt = (s == null ? void 0 : s.value) || {}, ee = Array.isArray(c == null ? void 0 : c.entities) ? c.entities : [], ce = null, Object.keys(S).length && Ba(), Pi(), ye = !0, cn();
  }
  const wl = "HomeCore";
  async function Pi() {
    var s, c, g;
    const t = location.pathname.split("/")[1], a = V.named || [];
    if (!((c = (s = i()) == null ? void 0 : s.user) != null && c.is_admin) || !t || a.includes(t)) return;
    const o = () => {
      V = { ...V, named: [...a, t] }, La();
    };
    try {
      const p = (g = await B({ type: "lovelace/dashboards/list" })) == null ? void 0 : g.find((F) => F.url_path === t);
      if (!p || p.mode === "yaml") return;
      if (p.title === wl) {
        o();
        return;
      }
      const v = await B({ type: "lovelace/config", url_path: t }), k = ((v == null ? void 0 : v.views) || []).flatMap((F) => [...F.cards || [], ...(F.sections || []).flatMap((N) => N.cards || [])]);
      if (!k.length || !k.every((F) => (F == null ? void 0 : F.type) === "custom:move-assistant-card" && F.layout === "test-focus")) return;
      await B({ type: "lovelace/dashboards/update", dashboard_id: p.id, title: wl }), o();
    } catch {
    }
  }
  let lo = null, Ii = 0, Lr = !1;
  const xl = (t) => {
    const a = t.split(".")[0], o = Kt(t).device_class;
    return Bh.includes(a) && (a !== "binary_sensor" || cd.includes(o) || !!pp[o]);
  }, Ar = (t) => t.startsWith("binary_sensor.") ? pp[Kt(t).device_class] : null;
  async function Fs() {
    var t;
    if (!(Lr || Date.now() - Ii < 30 * 1e3)) {
      Lr = !0, Ii = Date.now();
      try {
        const a = Object.keys(((t = i()) == null ? void 0 : t.states) || {}).filter(xl), o = a.length ? await B({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: a }) : null;
        lo = Array.isArray(o) ? o.filter((s) => s.entity_id && s.state != null && s.when) : null;
      } catch {
        lo = null;
      }
      Lr = !1, Ba();
    }
  }
  function ss() {
    const t = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), o = (c) => {
      if (!S[c.entity_id] || !xl(c.entity_id) || !ds(c.entity_id) || ["unavailable", "unknown"].includes(c.state)) return;
      if (Ar(c.entity_id)) {
        const p = a.get(c.entity_id);
        c.state === "on" ? (!p || c.when > p.when + 1) && a.set(c.entity_id, { ...c, alarm: !0, cleared: null }) : p && !p.cleared && c.when > p.when && (p.cleared = c.when);
        return;
      }
      const g = t.get(c.entity_id);
      (!g || c.when > g.when + 1) && t.set(c.entity_id, c);
    };
    [...lo || []].sort((c, g) => c.when - g.when).forEach(o);
    const s = lo ? Ii / 1e3 - 5 : 0;
    return Object.keys(S).forEach((c) => {
      var v;
      const g = S[c], p = g.last_changed ? Date.parse(g.last_changed) / 1e3 : 0;
      p > s && o({ entity_id: c, state: g.state, when: p, context_user_id: (v = g.context) == null ? void 0 : v.user_id });
    }), [...t.values(), ...a.values()].sort((c, g) => g.when - c.when).slice(0, Nh);
  }
  function yl(t) {
    var s;
    const a = t.context_user_id && Object.keys(S).find((c) => c.startsWith("person.") && Kt(c).user_id === t.context_user_id);
    if (a) return It(a);
    const o = (s = i()) == null ? void 0 : s.user;
    return o && t.context_user_id === o.id ? o.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function kd(t) {
    const a = t.entity_id.split(".")[0], o = String(t.state);
    return a === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[o] || De(o).toLowerCase() : a === "cover" || a === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[o] || De(o).toLowerCase() : a === "binary_sensor" ? o === "on" ? "opened" : "closed" : a === "climate" ? o === "off" ? "turned off" : "set to " + De(o).toLowerCase() : a === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[o] || De(o).toLowerCase() : a === "alarm_control_panel" ? (cp[o] || De(o)).toLowerCase() : a === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[o] || De(o).toLowerCase() : o === "on" ? "turned on" : o === "off" ? "turned off" : De(o).toLowerCase();
  }
  function Wa(t) {
    const a = t.entity_id, o = t.alarm && Ar(a), s = It(a) + " " + (o ? o[0] : kd(t)), c = o ? sn(t.when * 1e3) + (t.cleared ? " · " + o[1] + " since " + sn(t.cleared * 1e3) : "") : [yl(t), sn(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (o ? " alert" : "") + '"><div class="tfIcon' + (o ? " alert" : "") + '" aria-hidden="true"' + Ze(a, Ea(a)) + '></div><button class="tfName" type="button" data-more="' + tt(a) + '" data-at="' + Math.round(t.when * 1e3) + '" aria-label="' + tt(s + ", " + c + ". More info") + '"><span class="activityRowName">' + tt(s) + '</span><span class="activityRowMeta">' + tt(c) + "</span></button></div>";
  }
  let co = null, ai = 0;
  const Md = [["electricity", "Electricity", 4.3, "kWh"], ["solar", "Solar", 2.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function kl() {
    var a;
    if (Date.now() - ai < 5 * 60 * 1e3) return;
    ai = Date.now();
    const t = [];
    try {
      const o = ((a = await B({ type: "energy/get_prefs" })) == null ? void 0 : a.energy_sources) || [], s = (c) => o.filter((g) => g.type === c).flatMap((g) => c === "grid" ? (g.flow_from || []).map((p) => p.stat_energy_from) : [g.stat_energy_from]).filter(Boolean);
      for (const [c, g, p] of [["electricity", "Electricity", s("grid")], ["solar", "Solar", s("solar")], ["gas", "Gas", s("gas")], ["water", "Water", s("water")]]) {
        if (!p.length) continue;
        const v = await Promise.all(p.map((k) => Promise.resolve(B({ type: "recorder/statistic_during_period", statistic_id: k, calendar: { period: "day" }, types: ["change"] })).then((F) => Number(F == null ? void 0 : F.change) || 0, () => 0)));
        t.push({ key: c, name: g, id: p[0], ids: p, value: v.reduce((k, F) => k + F, 0), unit: Kt(p[0]).unit_of_measurement || (c === "gas" || c === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    co = t, Ba();
  }
  let Hi = null, Os = [];
  function _r() {
    var g;
    const t = Os = co != null && co.length ? co : Md.map(([p, v, k, F]) => {
      if (p === "solar") {
        const I = Object.keys(S).find((Q) => Q.endsWith("_solar_today") && !Q.includes("made_up_energy"));
        I && Number.isFinite(Number(S[I].state)) && (k = Number(S[I].state));
      }
      const N = "sensor.made_up_energy_" + p;
      return S[N] = { entity_id: N, state: String(k), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: v + " today", unit_of_measurement: F, state_class: "total_increasing" } }, { key: p, name: v, id: N, value: k, unit: F };
    });
    Vt.clear(), t.some((p) => p.id === Hi) || (Hi = t[0].id);
    const a = t.map((p) => {
      const v = Number(p.value).toLocaleString(void 0, { maximumFractionDigits: p.value < 10 ? 2 : 1 }) + " " + p.unit, k = Ph[p.key], F = p.id === Hi;
      return Vt.set(p.id, { name: p.name, text: v, icon: k }), '<div class="activityRow tap' + (F ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + tt(p.id) + '" aria-pressed="' + F + '" aria-label="' + tt(p.name + ", " + v) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + Ze("", k, p.name) + '></div><div><div class="activityRowName">' + tt(p.name) + '</div><div class="activityRowMeta">' + tt(v) + "</div></div></div>";
    }), o = t.find((p) => p.id === Hi), s = (((g = ke().opts.energy) == null ? void 0 : g.graph) || "above") === "below", c = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + tt(o.id) + '" role="img" aria-label="' + tt(o.name) + ', last 24 hours"></svg></div>';
    return Bo("dash:energy", 0, "Energy today", a, c, Ni().some((p) => p.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (s ? "" : " graphAbove"));
  }
  function Ws(t) {
    const a = L.querySelector(".tfDash-energy"), o = a == null ? void 0 : a.querySelector(".tfDashGraph svg");
    !o || t === Hi || (Hi = t, a.querySelectorAll("[data-energy-pick]").forEach((s) => {
      const c = s.dataset.energyPick === t;
      s.classList.toggle("picked", c), s.setAttribute("aria-pressed", String(c));
    }), o.dataset.graph = t, o.dataset.drawn = "", Ge.set("dash:energy", _r()), Ja(!0));
  }
  const Fi = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, ls = /* @__PURE__ */ new Map();
  async function po(t) {
    const a = /* @__PURE__ */ new Date(), o = new Date(a).setHours(0, 0, 0, 0), s = a.getHours(), c = a.getMinutes() / 60, g = Array.from({ length: 24 }, (v, k) => k <= s ? 0 : null);
    if (!t.ids) {
      const v = Fi[t.key] || Fi.electricity, k = v.map((N, I) => I < s ? N : I === s ? N * c : 0), F = k.reduce((N, I) => N + I, 0) || 1;
      return g.map((N, I) => N == null ? null : t.value * k[I] / F);
    }
    const p = ls.get(t.id);
    if (p && p.day === o && Date.now() - p.at < 5 * 60 * 1e3) return p.hours;
    try {
      const v = await B({ type: "recorder/statistics_during_period", start_time: new Date(o).toISOString(), end_time: a.toISOString(), statistic_ids: t.ids, period: "hour", types: ["change"] });
      t.ids.forEach((N) => ((v == null ? void 0 : v[N]) || []).forEach((I) => {
        const Q = typeof I.start == "number" ? I.start : Date.parse(I.start), it = new Date(Q).getHours();
        Q >= o && it < s && (g[it] += Number(I.change) || 0);
      }));
      const k = new Date(a).setMinutes(0, 0, 0), F = await Promise.all(t.ids.map((N) => Promise.resolve(B({ type: "recorder/statistic_during_period", statistic_id: N, fixed_period: { start_time: new Date(k).toISOString(), end_time: a.toISOString() }, types: ["change"] })).then((I) => Number(I == null ? void 0 : I.change) || 0, () => 0)));
      g[s] = F.reduce((N, I) => N + I, 0);
    } catch {
    }
    return ls.set(t.id, { at: Date.now(), day: o, hours: g }), g;
  }
  async function Er(t, a) {
    const o = await po(a);
    if (!t.isConnected) return;
    const s = Math.max(120, t.clientWidth || 260), c = Math.max(60, t.clientHeight || 130), g = 18, p = c - 18, v = s / 24, k = v * 0.72, F = (/* @__PURE__ */ new Date()).getHours(), N = o.map((ut) => ut ?? 0), I = Math.max(0, ...N), Q = (ut) => p - (I > 0 ? ut / I * (p - g) : 0), it = (ut) => ut.toLocaleString(void 0, { maximumFractionDigits: ut < 10 ? 2 : 1 }) + " " + a.unit, dt = (ut) => String(ut).padStart(2, "0") + ":00", U = I > 0 ? N.indexOf(I) : -1;
    t.setAttribute("viewBox", "0 0 " + s + " " + c), t.setAttribute("aria-label", a.name + " today by the hour: " + it(a.value) + (U >= 0 ? ", most " + it(I) + " at " + dt(U) : "")), t.innerHTML = [g, (g + p) / 2, p].map((ut) => '<line x1="0" x2="' + s + '" y1="' + ut + '" y2="' + ut + '" stroke="var(--line)" stroke-width="1"/>').join("") + o.map((ut, W) => ut > 0 ? '<rect x="' + (W * v + (v - k) / 2).toFixed(1) + '" y="' + Q(ut).toFixed(1) + '" width="' + k.toFixed(1) + '" height="' + (p - Q(ut)).toFixed(1) + '" rx="2" fill="' + (W === F ? "var(--primary)" : "var(--text)") + '"' + (W === F ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((ut) => '<text x="' + (ut * v).toFixed(1) + '" y="' + (c - 3) + '">' + String(ut).padStart(2, "0") + "</text>").join("") + (U >= 0 ? '<text x="0" y="11">Most: ' + tt(it(I)) + " at " + dt(U) + "</text>" : "");
  }
  function qs(t) {
    var a;
    (a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches || t.querySelectorAll("rect").forEach((o, s) => o.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: s * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function Sd(t) {
    var c;
    if ((c = window.matchMedia) != null && c.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [a, o] = t.querySelectorAll("path");
    if (!(o != null && o.getTotalLength)) return;
    const s = o.getTotalLength();
    o.animate([{ strokeDasharray: s, strokeDashoffset: s }, { strokeDasharray: s, strokeDashoffset: 0 }], { duration: 700, easing: "cubic-bezier(.2,.7,.3,1)" }), a == null || a.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, delay: 200, easing: "ease-out", fill: "backwards" });
  }
  let Oi = null, js = 0;
  const ds = (t) => !t.startsWith("light.") || Ih.includes((Se.get(t) || "").toLowerCase()), No = () => Math.max(2, ma((L == null ? void 0 : L.clientWidth) || 0).n), Ml = (t) => {
    const a = Z(t);
    return a.sections.map((o, s) => o && (a.parts || [])[s]).filter(Boolean);
  }, Sl = (t) => Ml(t).slice(0, Gi(t) - 1);
  function cs(t) {
    const a = ke().tiles;
    if (a) return a.filter((s) => S[s] || Be(s));
    if (!Oi) {
      const s = (c) => {
        var g;
        return (((g = S[c]) == null ? void 0 : g.state) === "on" ? 1e6 : 0) + (ta[c] || 0);
      };
      Oi = {
        lights: oe.rooms.flatMap((c) => c.lights).filter((c) => {
          var g;
          return ds(c) && ((g = S[c]) == null ? void 0 : g.state) !== "unavailable";
        }).sort((c, g) => s(g) - s(c) || It(c).localeCompare(It(g))),
        climates: oe.rooms.flatMap((c) => c.actions.filter((g) => g.startsWith("climate.")))
      };
    }
    const o = Oi.climates.filter((s) => S[s]).slice(0, t > 3 ? 2 : 1);
    return [...Oi.lights.filter((s) => S[s]).slice(0, Math.max(0, t - o.length)), ...o];
  }
  const Wi = (t, a, o, s) => (c) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + a + '" aria-label="' + o + '">' + (s ? '<div class="activityHeader">' + (a === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + o + "</button>" : '<div class="activityTitle">' + o + "</div>") + "</div>" : "") + '<div class="activityRows">' + c + "</div></section>";
  function qi(t, a) {
    var g, p;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + tt(((p = (g = i()) == null ? void 0 : g.config) == null ? void 0 : p.location_name) || "Home") + "</h1>" }), a.length && t.push({ key: "sums", wrap: (v) => '<div class="tfDashBarRow" data-tf data-k="sums">' + Wi("tfDash-bar", "sums-bar", "Summaries", !1)(v).replace(" data-tf", "") + "</div>", tiles: a.map((v) => ({ key: "sum:" + v.key, html: Tr(v) })) }), Te.length && t.push({ key: "areas", html: Rt(0) });
    const o = Yn();
    o.length && t.push({ key: "favs", wrap: Wi("tfDash-favs", "favs", "Favourites", !0), tiles: o.map((v) => ({ key: "fav:" + v, html: Zn(v, { area: !0 }) })) });
    const s = ss();
    t.push({ key: "dash:act", html: Bo("dash:act", 0, "Activity", s.length ? s.map(Wa) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: _r() });
    const c = No();
    return js = c, cs(c >= 3 ? c : c * 2).forEach((v) => t.push({
      key: "dash:tile:" + v,
      wrap: (k) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + tt(v) + '">' + k + "</div>",
      tiles: [{ key: v, html: He(v) ? dn(Be(v), v) : Qo(v, !1, Sl(v)) }]
    })), Fs(), kl(), t;
  }
  const Cn = 252, Ve = 16, ji = 200, Dr = Math.round(Cn * 1.25), zi = 60, Ka = zi + Ve, Cl = 3, Cd = { title: "The name", sums: "Summaries", wx: "Weather", areas: "Areas", favs: "Favourites", act: "Activity", energy: "Energy today", avg: "Compared to average", aq: "Air quality", pollen: "Pollen", radar: "Rain radar" }, ps = ["wx", "favs", "act", "energy", "avg"], uo = ["XS", "S", "M", "L", "XL"], ni = uo.length, oi = ["Narrow", "Wide", "Really wide"], Vi = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4 }, Tl = (t) => !t.includes(".") || !S[t] || t.startsWith("light.") && Za(t) ? ni : Math.min(ni, Ml(t).length + 1), Gi = (t) => {
    const a = ke().opts[t] || {}, o = Tl(t), s = Number(a.h) || (a.tall ? 5 : Vi[t] || zs);
    return Math.max(1, Math.min(o, s));
  }, zs = 2, Td = 90, us = 56, Ia = (t) => {
    var a;
    return Cd[t] || (t.startsWith("room:") ? ((a = Te.find((o) => "room:" + o.id === t)) == null ? void 0 : a.name) || "Area" : It(t));
  }, fo = 409, Vs = 128;
  let qa = !1, Ee = null, ja = null, Br = !1, ii = /* @__PURE__ */ new Map(), fs = 0, Po = 0;
  const ho = ["title", "sums"], ma = (t) => {
    const a = Math.max(1, Math.floor((t + Ve) / (ji + Ve)));
    return { n: a, w: Math.max(1, Math.min(Dr, Math.floor((t - (a - 1) * Ve) / a))) };
  }, ke = () => {
    const t = { cells: {}, spans: {}, hidden: [], opts: {}, ...V.dash || {} }, a = ge.filter((o) => !(t.known || []).includes(o) && !t.hidden.includes(o));
    return a.length ? { ...t, hidden: [...t.hidden, ...a] } : t;
  };
  function hs(t) {
    V = { ...V, dash: { ...t, known: ge } }, La();
  }
  function Rr() {
    const t = (a) => L.querySelector(a);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", ca.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", ca.avg, 2],
      ...ge.map((a) => [a, ca[a], 1]),
      ...[...L.querySelectorAll(".tfDashTiles > [data-k]")].map((a) => [a.dataset.k, a, 1, !0])
    ].filter(([, a]) => a == null ? void 0 : a.isConnected).map(([a, o, s, c = !1]) => ({ key: a, el: o, span: s, tile: c }));
  }
  const ms = (t, a, o) => {
    if (t.span === "full") return a;
    const s = t.span === "areas" && ke().spans.areas;
    return s ? s === "full" ? a : Math.min(a, Math.max(2, s)) : t.span === "areas" ? Math.min(a, Math.ceil((fo + Math.max(0, Te.length - 1) * (Vs + Ve) + Ve) / (o + Ve))) : Math.min(a, ke().spans[t.key] ?? t.span);
  }, gs = (t) => Gi(t.key);
  function Nr(t, a, o = null) {
    const s = ke().cells, c = t.every((v) => !s[v.key] || s[v.key].col + v.cols <= a), g = (v) => s[v.key] || { row: 1e9, col: 0 };
    return (() => {
      const v = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Map(), F = (U, ut, W, wt) => {
        for (let q = ut; q < ut + wt; q++) for (let Wt = U; Wt < U + W; Wt++) if (v.has(Wt + "," + q)) return !1;
        return !0;
      }, N = (U, ut, W) => {
        for (let wt = W; wt < W + U.rows; wt++) for (let q = ut; q < ut + U.cols; q++) v.add(q + "," + wt);
        k.set(U.key, { col: ut, row: W, cols: U.cols, rows: U.rows });
      }, I = (U, ut, W) => {
        for (ut = Math.max(0, Math.min(a - U.cols, ut)), W = Math.max(0, W); !F(ut, W, U.cols, U.rows); ) W++;
        N(U, ut, W);
      }, Q = (U) => {
        for (let ut = 0; ; ut++) for (let W = 0; W <= a - U.cols; W++) if (F(W, ut, U.cols, U.rows)) {
          N(U, W, ut);
          return;
        }
      };
      o && I(o, Ee.col, Ee.row);
      const it = t.filter((U) => U !== o), dt = (U, ut) => g(U).row - g(ut).row || g(U).col - g(ut).col;
      return c ? (it.filter((U) => s[U.key]).sort(dt).forEach((U) => I(U, s[U.key].col, s[U.key].row)), it.filter((U) => !s[U.key]).forEach(Q), k) : ([...it].sort(dt).forEach(Q), k);
    })();
  }
  function Ll(t, a) {
    const o = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map(), c = (g, p, v) => {
      for (let k = p; k < p + v.rows; k++) for (let F = g; F < g + v.cols; F++) if (o.has(F + "," + k)) return !1;
      return !0;
    };
    return t.forEach((g) => {
      for (let p = 0; ; p++) {
        let v = 0;
        for (; v <= a - g.cols && !c(v, p, g); ) v++;
        if (!(v > a - g.cols)) {
          for (let k = p; k < p + g.rows; k++) for (let F = v; F < v + g.cols; F++) o.add(F + "," + k);
          s.set(g.key, { col: v, row: p, cols: g.cols, rows: g.rows });
          return;
        }
      }
    }), s;
  }
  function vs() {
    const t = ke(), a = new Set(t.hidden), o = Rr().filter((p) => !ho.includes(p.key));
    let s = ii;
    if (!s.size) {
      const p = t.pegs || 4, v = o.filter((k) => !a.has(k.key));
      v.forEach((k) => {
        k.cols = ms(k, p, Cn), k.rows = gs(k) ?? zs;
      }), s = Nr(v, p);
    }
    const c = (p) => !a.has(p.key) && s.get(p.key) || { row: 1e9, col: 0 };
    o.sort((p, v) => c(p).row - c(v).row || c(p).col - c(v).col);
    const g = (t.phone || []).map((p) => o.find((v) => v.key === p && !a.has(p))).filter(Boolean);
    return [...g, ...o.filter((p) => !g.includes(p))];
  }
  const Ld = () => {
    const t = vs();
    t.forEach((a, o) => a.el.style.setProperty("--o", String(3 + o))), Al([...Rr().filter((a) => ho.includes(a.key)), ...t].map((a) => a.el));
  };
  function Al(t) {
    if (Ee) return;
    const a = n.activeElement;
    let o = null;
    for (const s of new Set(t.map((c) => {
      for (; c && c.parentElement !== L; ) c = c.parentElement;
      return c;
    }).filter(Boolean))) {
      const c = o ? o.nextSibling : L.querySelector(":scope > [data-tf]");
      if (s !== c)
        try {
          L.moveBefore ? L.moveBefore(s, c) : L.insertBefore(s, c);
        } catch {
          L.insertBefore(s, c);
        }
      o = s;
    }
    a && a !== n.activeElement && a.isConnected && a.focus({ preventScroll: !0 });
  }
  const ri = (t, a) => hs({ ...t, cells: a, pegs: ma(L.clientWidth).n });
  function ra() {
    var wt;
    if (!M || !L) return;
    const t = L.clientWidth, a = t < 2 * Cn + Ve, o = b.classList.contains("tfDash"), { n: s, w: c } = a ? { n: 2, w: Math.floor((t - Ve) / 2) } : ma(t);
    ie.classList.add("tfPegs"), ie.style.setProperty("--peg-n", s), ie.style.setProperty("--peg-w", c + "px");
    const g = new Set(ke().hidden);
    ge.forEach((q) => {
      var Wt;
      return (Wt = ca[q]) == null ? void 0 : Wt.classList.toggle("tfNotAdded", g.has(q) && !(Ee != null && Ee.fromTray && Ee.key === q));
    }), b.classList.toggle("tfBoard", o), b.classList.toggle("tfEditing", o && qa && !a);
    const p = f("dashEditNav");
    p && (p.hidden = !o || a, p.classList.toggle("active", qa), p.setAttribute("aria-pressed", String(qa)), p.setAttribute("aria-label", qa ? "Done editing" : "Edit the dashboard"), p.title = qa ? "Done" : "Edit", p.innerHTML = qa ? Ah : dp);
    const v = o ? Rr() : [];
    if (!o) {
      L.style.height = "", L.querySelectorAll(".tfBoardItem").forEach((q) => {
        q.classList.remove("tfBoardItem", "tfBoardHidden"), q.style.left = q.style.top = q.style.width = q.style.height = "";
      }), (wt = L.querySelector(".tfDash-act > .activityRows")) == null || wt.style.removeProperty("max-height"), Ui(!1), b.classList.contains("tfDash") && Ld(), ka();
      return;
    }
    L.style.setProperty("--peg-w", c + "px");
    const k = new Set(ke().hidden), F = c + Ve;
    Ee != null && Ee.fromTray && k.delete(Ee.key), v.forEach((q) => q.el.classList.toggle("tfBoardHidden", k.has(q.key)));
    const N = v.filter((q) => !k.has(q.key) && getComputedStyle(q.el).display !== "none");
    let I = 0;
    N.filter((q) => ho.includes(q.key)).forEach((q) => {
      q.el.classList.add("tfBoardItem"), Object.assign(q.el.style, { width: t + "px", height: "", left: "0px", top: I + "px" });
      const Wt = q.key === "sums" && q.el.querySelector(".tfDash-bar"), Pe = Wt ? Wt.querySelectorAll(".activityRow").length : 0;
      Wt && (Wt.style.maxWidth = "none");
      for (let fe = 1; Wt && fe <= Pe && (Wt.style.setProperty("--bar-cols", String(Math.ceil(Pe / fe))), !(Wt.offsetWidth <= t)); fe++)
        ;
      Wt && (Wt.style.maxWidth = ""), I += q.el.offsetHeight + Ve;
    }), Po = I;
    const Q = N.filter((q) => !ho.includes(q.key));
    Q.forEach((q) => {
      q.cols = ms(q, s, c), q.el.classList.add("tfBoardItem"), q.el.style.width = (q.cols === s ? t : q.cols * c + (q.cols - 1) * Ve) + "px", q.el.style.height = "", q.rows = gs(q) ?? Math.max(1, Math.ceil((q.el.offsetHeight + Ve - 6) / Ka));
    });
    const it = Ee && Q.find((q) => q.key === Ee.key), dt = a && vs().map((q) => q.key), U = (q) => dt.includes(q.key) ? dt.indexOf(q.key) : -1, ut = a ? Ll([...Q].sort((q, Wt) => U(q) - U(Wt)), s) : Nr(Q, s, it);
    ut.forEach((q) => Object.assign(q, { x: q.cols === s ? 0 : q.col * F, y: Po + q.row * Ka, w: q.cols === s ? t : q.cols * c + (q.cols - 1) * Ve, h: q.rows * Ka - Ve })), Q.forEach((q) => {
      const Wt = ut.get(q.key);
      q.el.style.height = Wt.h + "px", q.el.dataset.rows = a && q.key === "wx" ? 5 : Gi(q.key), q.el.toggleAttribute("data-narrow", !a && Wt.cols === 1 && s > 1), q.el.dataset.cols = Wt.cols, q.el.classList.contains("tfDac") && q.el.style.setProperty("--tf-dac-pad", Wt.h - Td + "px"), !(q === it && !Ee.fromTray) && (q.el.style.left = Wt.x + "px", q.el.style.top = Wt.y + "px");
    }), a || (ii = ut), Al([...N.filter((q) => ho.includes(q.key)), ...Q.slice().sort((q, Wt) => ut.get(q.key).row - ut.get(Wt.key).row || ut.get(q.key).col - ut.get(Wt.key).col)].map((q) => q.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([q, Wt]) => {
      const Pe = ut.get(q), fe = Pe && L.querySelector(Wt), Ra = fe == null ? void 0 : fe.querySelector(":scope > .activityRows"), Qt = fe == null ? void 0 : fe.querySelector(":scope > .activityHeader");
      if (!Ra || !Qt) return;
      const Ue = Ra.getBoundingClientRect().top - fe.getBoundingClientRect().top, e = Pe.rows === 1 ? Pe.h : Math.floor(Pe.h - Ue - parseFloat(getComputedStyle(fe).paddingBottom)), r = Math.max(1, Math.floor(e / us));
      Ra.style.setProperty("--fill-row", (e / r).toFixed(2) + "px"), Ra.style.maxHeight = e + "px";
    }), fs = Math.max(0, ...[...ut.values()].map((q) => q.row + q.rows));
    let W = Po + fs * Ka - Ve;
    W = Ui(qa && !a, Q, ut, W, s, c), L.style.height = W + "px", requestAnimationFrame(() => b.classList.add("tfBoardReady")), v.forEach((q) => bs.observe(q.el)), Ja(), ka();
  }
  const un = () => {
    Br || (Br = !0, requestAnimationFrame(() => {
      Br = !1, ra();
    }));
  }, bs = new ResizeObserver(() => {
    Ee || un();
  });
  function Ui(t, a = [], o = /* @__PURE__ */ new Map(), s = 0, c = 1, g = Cn) {
    L.querySelectorAll(".tfEditChips").forEach((N) => {
      (!t || !N.closest(".tfBoardItem")) && N.remove();
    }), L.querySelectorAll(".tfFavHides").forEach((N) => N.remove()), L.querySelectorAll(".tfBoardItem").forEach((N) => [...N.children].forEach((I) => {
      I.classList.contains("tfEditChips") || I.toggleAttribute("inert", t);
    }));
    let p = L.querySelector(".tfBoardCells"), v = L.querySelector(".tfBoardLand");
    if (!t)
      return p == null || p.remove(), v == null || v.remove(), fn(), s;
    const k = fs + Cl;
    if (p || (p = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), p.setAttribute("aria-hidden", "true"), L.prepend(p)), p.style.top = Po + "px", p.dataset.size !== c + "x" + k + "x" + g && (p.dataset.size = c + "x" + k + "x" + g, p.style.gridTemplateColumns = "repeat(" + c + "," + g + "px)", p.innerHTML = "<i></i>".repeat(c * k)), s = Math.max(s, Po + k * Ka - Ve), a.forEach((N) => {
      const I = N.el;
      !I || I.querySelector(":scope > .tfEditChips") || I.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + Xd + '</span><button class="tfEditChip" type="button" data-board-more="' + tt(N.key) + '" aria-label="' + tt(Ia(N.key)) + ' options" aria-haspopup="menu">' + Th + "</button></div>");
    }), Ee && o.has(Ee.key)) {
      v || (v = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), L.appendChild(v));
      const N = o.get(Ee.key);
      Object.assign(v.style, { left: N.x + "px", top: N.y + "px", width: N.w + "px", height: N.h + "px" });
    } else v == null || v.remove();
    const F = L.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (F) {
      const N = F.getBoundingClientRect();
      F.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...F.querySelectorAll('[data-k^="fav:"]')].map((I) => {
        const Q = I.getBoundingClientRect(), it = I.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + tt(it) + '" aria-label="Hide ' + tt(It(it)) + ' from the dashboard" style="left:' + Math.round(Q.right - N.left - 42) + "px;top:" + Math.round(Q.top - N.top + (Q.height - 32) / 2) + 'px">' + rp + "</button>";
      }).join("") + "</div>");
    }
    return s;
  }
  let Gs = "";
  function ws(t) {
    qa = t, t || (Ee = null, xo = yo = !1, fn()), ra(), t ? Gs = JSON.stringify(V) : Gs && JSON.stringify(V) !== Gs && In("Changes saved");
  }
  function Tn(t, a) {
    var ut, W;
    fn();
    const o = ii.get(t), { n: s } = ma(L.clientWidth), c = ke(), g = c.spans[t] ?? (He(t) ? 1 : 2);
    if (!o) return;
    const p = o.cols >= s, v = (wt, q, Wt) => '<button type="button" role="menuitem" data-board-act="' + wt + '"' + (Wt ? " disabled" : "") + ">" + q + "</button>", k = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    k.setAttribute("role", "menu"), k.setAttribute("aria-label", Ia(t) + " options");
    const F = L.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]'), N = Tl(t), I = Gi(t), Q = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + uo.map((wt, q) => '<button type="button" role="menuitemradio" aria-checked="' + (q + 1 === I) + '" aria-label="' + wt + ", " + (q + 1) + (q ? " rows" : " row") + '" data-board-act="h:' + (q + 1) + '"' + (q < N ? "" : " disabled") + ">" + wt + "</button>").join("") + "</div></div>", it = [["Wide", 2, s >= 2], ["Really wide", 3, s >= 3], ["Full width", "full", s >= 4]], dt = t === "areas" ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + it.map(([wt, q, Wt]) => '<button type="button" role="menuitemradio" aria-checked="' + (Wt && (q === "full" ? o.cols === s : o.cols === q && !(q === s && c.spans.areas === "full"))) + '" aria-label="' + wt + (q === "full" ? "" : ", " + q + " columns") + '" data-board-act="w:' + q + '"' + (Wt ? "" : " disabled") + ">" + wt + "</button>").join("") + "</div></div>" : ps.includes(t) || He(t) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + oi.map((wt, q) => '<button type="button" role="menuitemradio" aria-checked="' + (q + 1 === Math.min(g, s)) + '" aria-label="' + wt + ", " + (q + 1) + (q ? " columns" : " column") + '" data-board-act="w:' + (q + 1) + '"' + (q < s ? "" : " disabled") + ">" + wt + "</button>").join("") + "</div></div>" : "";
    k.innerHTML = Q + dt + (t === "energy" ? v("graph", (((ut = c.opts.energy) == null ? void 0 : ut.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + v("left", "Move left", p || o.col === 0) + v("right", "Move right", p || o.col + o.cols >= s) + v("up", "Move up", o.row <= 0) + v("down", "Move down") + (F ? v("remove", "Remove") : v("hide", "Hide")), L.appendChild(k);
    const U = Math.min(o.x + o.w - k.offsetWidth, L.clientWidth - k.offsetWidth);
    Object.assign(k.style, { left: Math.max(0, U) + "px", top: o.y + 28 + "px" }), ja = { key: t, menu: k, opener: a }, (W = k.querySelector("button:not([disabled])")) == null || W.focus();
  }
  function fn(t) {
    if (!ja) return;
    const { menu: a, opener: o } = ja;
    ja = null, a.remove(), t && (o == null || o.focus());
  }
  const mo = () => Object.fromEntries([...ii].map(([t, a]) => [t, { col: a.col, row: a.row }]));
  function Yi(t, a) {
    var p, v;
    if (a === "remove") {
      fn(), Ad(t);
      return;
    }
    const o = V, s = ke(), c = mo(), g = c[t] || { col: 0, row: 0 };
    a.startsWith("w:") && (s.spans = { ...s.spans, [t]: a === "w:full" ? "full" : Number(a.slice(2)) }), a.startsWith("h:") && (s.opts = { ...s.opts, [t]: { ...s.opts[t] || {}, h: Number(a.slice(2)), tall: void 0 } }), a === "graph" && (s.opts = { ...s.opts, energy: { ...s.opts.energy || {}, graph: (((p = s.opts.energy) == null ? void 0 : p.graph) || "above") === "above" ? "below" : "above" } }), a === "left" && (c[t] = { ...g, col: g.col - 1 }), a === "right" && (c[t] = { ...g, col: g.col + 1 }), a === "up" && (c[t] = { ...g, row: g.row - 1 }), a === "down" && (c[t] = { ...g, row: g.row + 1 }), a === "hide" && (s.hidden = [.../* @__PURE__ */ new Set([...s.hidden, t])]), ["left", "right", "up", "down"].includes(a) && (Ee = { key: t, col: c[t].col, row: c[t].row }), ri(s, c), Ee && (ra(), Ee = null, ri(ke(), mo())), fn(), a === "graph" && (Ge.delete("dash:energy"), Ba()), a.startsWith("h:") && t.includes(".") && Ba(), ra(), a !== "hide" ? (v = L.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || v.focus() : In(Ia(t) + " hidden", ya(o));
  }
  const Us = (t) => {
    var a;
    return ge.includes(t) && !(((a = V.dash) == null ? void 0 : a.cells) || {})[t] ? " added" : " put back";
  };
  function go(t) {
    const a = ke(), o = Ia(t) + Us(t);
    hs({ ...a, hidden: a.hidden.filter((s) => s !== t) }), ra(), In(o);
  }
  const xs = () => ke().tiles || [...L.querySelectorAll(".tfDashTiles > [data-k]")].map((t) => t.dataset.k).filter((t) => !ke().hidden.includes(t));
  function Kn(t, a) {
    const o = ke();
    ri({ ...o, tiles: t, hidden: o.hidden.filter((s) => !s.includes(".")) }, a), Ba(), ka();
  }
  const Pr = (t) => {
    Kn([...xs().filter((a) => a !== t), t], mo()), In(Ia(t) + " added"), Ks(t);
  }, Ad = (t) => {
    const a = V, o = mo();
    delete o[t], Kn(xs().filter((s) => s !== t), o), In(Ia(t) + " removed", ya(a));
  };
  let Ir = 0;
  function In(t, a = null) {
    var p;
    const o = f("toast");
    if (!o) return;
    if (o.replaceChildren(Object.assign(document.createElement("span"), { textContent: t })), a) {
      const v = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      v.addEventListener("click", () => {
        clearTimeout(Ir), o.classList.remove("show", "withAction"), a();
      }), o.appendChild(v);
    }
    const s = b.getBoundingClientRect(), c = (p = n.querySelector(".bottomNav")) == null ? void 0 : p.getBoundingClientRect(), g = Fe.classList.contains("open") && !$n ? Math.min(s.right, Fe.getBoundingClientRect().left) : s.right;
    o.style.left = (s.left + g) / 2 + "px", o.style.bottom = (c != null && c.height ? window.innerHeight - c.top + 12 : 26) + "px", o.classList.add("tfToast", "show"), o.classList.toggle("withAction", !!a), clearTimeout(Ir), Ir = setTimeout(() => o.classList.remove("show", "withAction"), a ? 5e3 : 2200);
  }
  const Ys = 700, vo = 1e3, $a = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  $a.setAttribute("role", "tooltip"), $a.setAttribute("aria-hidden", "true"), b.appendChild($a);
  let ys = null, Zi = 0, Hn = 0, _l = -1 / 0;
  const Io = (t) => {
    if (t.nodeType !== 1) return !1;
    const a = getComputedStyle(t);
    return a.textOverflow === "ellipsis" && t.scrollWidth > t.clientWidth + 1 || a.webkitLineClamp !== "none" && t.scrollHeight > t.clientHeight + 1;
  }, _d = (t) => {
    for (let a = t; a && a !== b; a = a.parentElement) if (Io(a)) return a;
    return null;
  };
  function Zs(t, a) {
    clearTimeout(Zi), clearTimeout(Hn);
    const o = () => {
      if (!t.isConnected) return;
      ys = t, $a.textContent = a, $a.hidden = !1;
      const s = t.getBoundingClientRect(), c = $a.getBoundingClientRect(), g = s.top - c.height - 8 >= 8 ? s.top - c.height - 8 : s.bottom + 8;
      $a.style.left = Math.max(8, Math.min(window.innerWidth - c.width - 8, s.left + s.width / 2 - c.width / 2)) + "px", $a.style.top = g + "px";
    };
    !$a.hidden || performance.now() - _l < vo ? o() : Zi = setTimeout(o, Ys);
  }
  function bo() {
    clearTimeout(Zi), clearTimeout(Hn), $a.hidden || (_l = performance.now()), $a.hidden = !0, ys = null;
  }
  n.addEventListener("pointerover", (t) => {
    if (t.pointerType === "touch") return;
    if ($a.contains(t.target)) {
      clearTimeout(Hn);
      return;
    }
    const a = _d(t.target);
    if (a && Ht.names === "scroll" && a.matches(wo)) {
      Ho(a);
      return;
    }
    if (a) {
      a !== ys ? Zs(a, a.textContent.trim()) : clearTimeout(Hn);
      return;
    }
    clearTimeout(Zi), clearTimeout(Hn), Hn = setTimeout(bo, 120);
  }), n.addEventListener("focusin", (t) => {
    var s;
    const a = t.target;
    if (!((s = a.matches) != null && s.call(a, ":focus-visible"))) return;
    let o = [a, ...a.querySelectorAll("*")].filter(Io);
    Ht.names === "scroll" && (o.filter((c) => c.matches(wo)).forEach(Ho), o = o.filter((c) => !c.matches(wo))), o.length && Zs(a, o.map((c) => c.textContent.trim()).join(" · "));
  }), n.addEventListener("focusout", (t) => {
    t.target === ys && bo();
  }), n.addEventListener("keydown", (t) => {
    t.key === "Escape" && !$a.hidden && (t.stopPropagation(), bo());
  }, !0), window.addEventListener("scroll", () => {
    (!$a.hidden || Zi) && bo();
  }, { capture: !0, passive: !0 });
  const wo = ".activityRowName,.activityRowMeta", qe = /* @__PURE__ */ new WeakSet();
  function Ho(t) {
    var o;
    if (Ht.names !== "scroll" || qe.has(t) || t.closest("[inert]") || (o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    qe.add(t);
    const a = () => Promise.all([t.closest(".workoutPanel"), t.closest(".panelExpanded")].filter(Boolean).flatMap((s) => s.getAnimations()).map((s) => s.finished.catch(() => {
    })));
    setTimeout(async () => {
      await a();
      const s = t.isConnected && !t.closest("[inert]") ? t.scrollWidth - t.clientWidth : 0;
      if (s < 2) {
        qe.delete(t);
        return;
      }
      const c = s / 30 * 1e3, g = c + 1e3 + c;
      t.style.textOverflow = "clip";
      const p = t.animate([
        { textIndent: "0px", offset: 0, easing: "ease-in-out" },
        { textIndent: -s + "px", offset: c / g },
        { textIndent: -s + "px", offset: (1e3 + c) / g, easing: "ease-in-out" },
        { textIndent: "0px", offset: 1 }
      ], { duration: g });
      p.onfinish = p.oncancel = () => {
        t.style.textOverflow = "", qe.delete(t);
      };
    }, 600);
  }
  const Hr = new IntersectionObserver((t) => t.forEach((a) => {
    a.isIntersecting && !a.target.closest("[inert]") && (Hr.unobserve(a.target), Ho(a.target));
  }), { threshold: 1 });
  let Fr = !1;
  new MutationObserver(() => {
    Fr || Ht.names !== "scroll" || (Fr = !0, setTimeout(() => {
      Fr = !1, n.querySelectorAll(wo).forEach((t) => {
        !t.dataset.glided && Io(t) && (t.dataset.glided = "1", Hr.observe(t));
      });
    }, 300));
  }).observe(n, { childList: !0, subtree: !0 });
  const ya = (t) => () => {
    V = t, La(), Ba(), ra(), ka();
  };
  function Ks(t) {
    const a = () => L.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]');
    setTimeout(() => {
      var p;
      const o = a();
      if (!o) return;
      const s = (p = window.matchMedia) == null ? void 0 : p.call(window, "(prefers-reduced-motion: reduce)").matches, c = o.getBoundingClientRect();
      (c.top < 0 || c.bottom > window.innerHeight) && o.scrollIntoView({ behavior: s ? "auto" : "smooth", block: "center" });
      const g = (v) => "0 0 0 4px color-mix(in srgb,var(--primary) " + v + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + v + "%,transparent)";
      o.animate([{ boxShadow: g(55) }, { boxShadow: g(0) }], { duration: 1500, easing: s ? "steps(1, end)" : "ease-out" });
    }, El(t) ? 260 : 0);
  }
  function El(t) {
    const a = ii.get(t);
    if (!a || !Fe.classList.contains("open") || $n) return !1;
    const { n: o, w: s } = ma(L.clientWidth), c = Fe.getBoundingClientRect().left - L.getBoundingClientRect().left, g = (k) => k * (s + Ve) + a.cols * s + (a.cols - 1) * Ve <= c;
    if (g(a.col)) return !1;
    const p = /* @__PURE__ */ new Set();
    ii.forEach((k, F) => {
      if (F !== t) for (let N = k.row; N < k.row + k.rows; N++) for (let I = k.col; I < k.col + k.cols; I++) p.add(I + "," + N);
    });
    const v = (k, F) => {
      for (let N = F; N < F + a.rows; N++) for (let I = k; I < k + a.cols; I++) if (p.has(I + "," + N)) return !1;
      return !0;
    };
    for (let k = 0; k <= fs; k++) for (let F = 0; F + a.cols <= o && g(F); F++)
      if (v(F, k))
        return ri(ke(), { ...mo(), [t]: { col: F, row: k } }), ra(), !0;
    return !1;
  }
  const Dl = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, Fe = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Fe.setAttribute("aria-label", "Edit the dashboard"), Fe.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd" type="button" data-tile-add aria-expanded="false">Add tile</button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection"><div class="sectionLabel">Areas</div><p class="tfTrayNote">One area on its own, instead of all of them in the Areas card.</p><button class="pill tfTrayAdd" type="button" data-room-add aria-expanded="false">Add area</button><ul class="tfTrayList" data-tray="roompick" hidden></ul></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd" type="button" data-fav-add aria-expanded="false">Add favourite</button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', b.appendChild(Fe);
  let $n = !1, xo = !1, yo = !1, Or = !1, Ha = null, Ln = !1;
  const si = {}, li = (t, a) => {
    if (si[t] === a) return;
    si[t] = a;
    const o = Fe.querySelector('[data-tray="' + t + '"]');
    o.innerHTML = a, Na(o);
  }, $s = (t, a) => '<span class="tfTrayName"><span class="activityRowName">' + tt(It(t)) + '</span><span class="activityRowMeta">' + tt(a) + "</span></span>", Bl = (t, a, o) => '<li class="tfTrayFav' + (a ? " off" : "") + '" data-tray-fav="' + tt(t) + '"><span class="tfTrayGrip" aria-hidden="true">' + Xd + '</span><span class="tfIcon"' + Ze(t, Ea(t)) + "></span>" + $s(t, a ? "Hidden" + (Se.get(t) ? " · " + Se.get(t) : "") : Se.get(t) || ia(t)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + tt(t) + '" aria-pressed="' + !a + '" aria-label="' + (a ? "Show " : "Hide ") + tt(It(t)) + ' on the dashboard">' + (a ? rp : Lh) + "</button>" + (o ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + tt(t) + '" aria-label="Remove ' + tt(It(t)) + ' from favourites">' + sp + "</button>" : "<span></span>") + "</li>";
  function Rl(t, a, o, s) {
    const c = t.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(S).filter((p) => a(p) && !o.has(p) && S[p].state !== "unavailable").filter((p) => {
      const v = (It(p) + " " + (Se.get(p) || "") + " " + p).toLowerCase();
      return c.every((k) => v.includes(k));
    }).sort((p, v) => (Se.get(p) || "~").localeCompare(Se.get(v) || "~") || It(p).localeCompare(It(v))).slice(0, 40).map((p) => '<li><button class="tfTrayPickItem" type="button" ' + s + '="' + tt(p) + '"><span class="tfIcon"' + Ze(p, Ea(p)) + "></span>" + $s(p, Se.get(p) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  function ka() {
    const t = qa && b.classList.contains("tfBoard");
    if (Fe.classList.toggle("open", t), Fe.classList.toggle("tucked", t && $n), Fe.toggleAttribute("inert", !t), t || (Ln = !1), ui(), !t) return;
    const a = Fe.querySelector("[data-tray-tuck]");
    a.innerHTML = $n ? Zc : lp, a.setAttribute("aria-expanded", String(!$n)), a.setAttribute("aria-label", $n ? "Show the edit tray" : "Tuck the edit tray away");
    const o = ke().hidden.filter((p) => Rr().some((v) => v.key === p));
    li("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (o.length ? '<div class="tfTrayCards">' + o.map((p) => '<button class="tfTrayCard" type="button" data-tray-card="' + tt(p) + '" aria-label="' + tt(Ia(p)) + ': drag it onto the board, or press to put it back"><span class="tfTrayGrip" aria-hidden="true">' + Xd + "</span>" + tt(Ia(p)) + "</button>").join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), li("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (ke().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + Ln + '">' + (Ln ? "Hide the phone" : "Show the phone") + "</button>");
    const s = new Set(V.favHidden || []), c = xa(), g = [...c, ...[...s].filter((p) => !c.includes(p) && S[p])];
    if (li("favs", g.map((p) => Bl(p, s.has(p), c.includes(p))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Fe.querySelector('[data-pick="tiles"]').hidden = !yo, Fe.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(yo)), yo && li("tilepick", Rl(Fe.querySelector("[data-tile-search]").value, (p) => pd.includes(p.split(".")[0]), new Set(xs()), "data-tile-pick")), Fe.querySelector('[data-tray="roompick"]').hidden = !Or, Fe.querySelector("[data-room-add]").setAttribute("aria-expanded", String(Or)), Or) {
      const p = new Set(xs());
      li("roompick", Te.filter((v) => !p.has("room:" + v.id)).map((v) => '<li><button class="tfTrayPickItem" type="button" data-room-pick="' + tt(v.id) + '"><span class="tfIcon"><span class="tfAreaGlyph"' + Ze("area:" + v.id, v.icon || "mdi:texture-box", v.name) + '></span></span><span class="tfTrayName"><span class="activityRowName">' + tt(v.name) + "</span></span></button></li>").join("") || '<li class="tfTrayNote">Every area is on the board.</li>');
    }
    Fe.querySelector('[data-pick="favs"]').hidden = !xo, Fe.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(xo)), xo && li("pick", Rl(Fe.querySelector("[data-fav-search]").value, (p) => Dl.test(p), new Set(xa()), "data-fav-pick")), li("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (Sn() ? " on" : "") + '" type="button" role="switch" aria-checked="' + Sn() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const Ki = (t) => {
    V = { ...V, ...t }, La(), Ba(), ka();
  };
  function di(t, a) {
    const o = V, s = new Set(V.favHidden || []);
    a ? s.delete(t) : s.add(t), Ki({ favHidden: [...s] }), a ? In(It(t) + " put back") : In(It(t) + " hidden", ya(o));
  }
  const ci = (t) => {
    const a = V;
    Ki({ favourites: xa().filter((o) => o !== t), favHidden: (V.favHidden || []).filter((o) => o !== t) }), In(It(t) + " removed from favourites", ya(a));
  }, Fo = (t) => {
    Ki({ favourites: [...xa().filter((a) => a !== t), t], favHidden: (V.favHidden || []).filter((a) => a !== t) }), In(It(t) + " added to favourites");
  };
  Fe.addEventListener("click", (t) => {
    var o;
    const a = t.target.closest("button");
    a && (a.hasAttribute("data-tray-done") ? ws(!1) : a.hasAttribute("data-tray-tuck") ? ($n = !$n, ka()) : a.hasAttribute("data-phone-toggle") ? (Ln = !Ln, ka(), Ln && ((o = Xa.querySelector("[data-phone-key]")) == null || o.focus({ preventScroll: !0 }))) : a.dataset.trayCard ? t.detail === 0 && (go(a.dataset.trayCard), ka()) : a.dataset.favEye ? di(a.dataset.favEye, a.getAttribute("aria-pressed") !== "true") : a.dataset.favRemove ? ci(a.dataset.favRemove) : a.hasAttribute("data-fav-add") ? (xo = !xo, ka(), xo && Fe.querySelector("[data-fav-search]").focus({ preventScroll: !0 })) : a.dataset.favPick ? Fo(a.dataset.favPick) : a.hasAttribute("data-tile-add") ? (yo = !yo, ka(), yo && Fe.querySelector("[data-tile-search]").focus({ preventScroll: !0 })) : a.dataset.tilePick ? Pr(a.dataset.tilePick) : a.hasAttribute("data-room-add") ? (Or = !Or, ka()) : a.dataset.roomPick ? Pr("room:" + a.dataset.roomPick) : a.hasAttribute("data-fav-suggest") && Ki({ suggest: !Sn() }));
  }), Fe.addEventListener("input", (t) => {
    t.target.matches("[data-fav-search],[data-tile-search]") && ka();
  }), Fe.addEventListener("keydown", (t) => {
    var o, s;
    const a = !!((s = (o = t.target).closest) != null && s.call(o, '[data-pick="tiles"],[data-tile-add]'));
    t.key !== "Escape" || !(a ? yo : xo) || (t.stopPropagation(), a ? yo = !1 : xo = !1, ka(), Fe.querySelector(a ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function Xs(t, a, o, s) {
    t.preventDefault();
    const c = t.clientX, g = t.clientY;
    let p = null, v = 0;
    const k = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), F = (I) => {
      if (!p) {
        if (Math.hypot(I.clientX - c, I.clientY - g) < 4) return;
        p = a.cloneNode(!0), p.classList.add("tfTrayGhost"), p.style.width = a.offsetWidth + "px", b.appendChild(p);
      }
      p.style.transform = "translate(" + (I.clientX - 24) + "px," + (I.clientY - 24) + "px)";
      const Q = !$n && I.clientX >= Fe.getBoundingClientRect().left;
      if (o === "card") {
        const U = L.getBoundingClientRect(), { w: ut } = ma(L.clientWidth);
        Ee = !Q && I.clientX >= U.left && I.clientX <= U.right && I.clientY >= U.top + Po ? { key: s, col: Math.max(0, Math.floor((I.clientX - U.left) / (ut + Ve))), row: Math.max(0, Math.floor((I.clientY - U.top - Po) / Ka)), fromTray: !0 } : null, v || (v = requestAnimationFrame(() => {
          v = 0, ra();
        }));
        return;
      }
      const it = L.querySelector(".tfDash-favs"), dt = it == null ? void 0 : it.getBoundingClientRect();
      if (Ha = null, dt && !Q && I.clientX >= dt.left && I.clientX <= dt.right && I.clientY >= dt.top && I.clientY <= dt.bottom) {
        let U = 1 / 0;
        it.querySelectorAll('[data-k^="fav:"]').forEach((ut, W) => {
          const wt = ut.getBoundingClientRect(), q = Math.hypot(I.clientX - (wt.left + wt.width / 2), I.clientY - (wt.top + wt.height / 2));
          q < U && (U = q, Ha = { i: W, r: wt, after: I.clientX > wt.left + wt.width / 2 });
        }), Ha || (Ha = { i: 0, r: null, after: !1 });
      }
      Ha != null && Ha.r ? (k.isConnected || b.appendChild(k), Object.assign(k.style, { left: (Ha.after ? Ha.r.right : Ha.r.left) - 2 + "px", top: Ha.r.top + 8 + "px", height: Ha.r.height - 16 + "px" })) : k.remove();
    }, N = () => {
      if (window.removeEventListener("pointermove", F), window.removeEventListener("pointerup", N), window.removeEventListener("pointercancel", N), cancelAnimationFrame(v), p == null || p.remove(), k.remove(), o === "card") {
        if (!p) go(s);
        else if (Ee != null && Ee.fromTray) {
          ra();
          const U = Ia(s) + Us(s), ut = ke(), W = mo();
          Ee = null, ri({ ...ut, hidden: ut.hidden.filter((wt) => wt !== s) }, W), In(U);
        }
        Ee = null, ra(), Ba(), ka();
        return;
      }
      if (!Ha) return;
      const I = new Set(V.favHidden || []);
      I.delete(s);
      const Q = xa().filter((U) => U !== s), it = Q.filter((U) => !I.has(U)), dt = it[Math.min(Ha.i + (Ha.after ? 1 : 0), it.length)];
      Q.splice(dt ? Q.indexOf(dt) : Q.length, 0, s), Ha = null, Ki({ favourites: Q, favHidden: [...I] }), In(It(s) + " put back");
    };
    window.addEventListener("pointermove", F), window.addEventListener("pointerup", N), window.addEventListener("pointercancel", N);
  }
  const pi = { sums: 201, wx: 364, favs: 364, areas: 364, act: 364, energy: 288, avg: 288, aq: 288, pollen: 288, radar: 288 }, Nl = 136, Wr = 288, Ed = 0.8, $i = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, Xa = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  Xa.setAttribute("aria-label", "Phone order"), Xa.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + sp + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', b.appendChild(Xa);
  let qr = "";
  function ui() {
    var v;
    const t = Ln && qa && b.classList.contains("tfBoard") && !$n;
    if (Xa.classList.toggle("open", t), Xa.toggleAttribute("inert", !t), !t) return;
    const a = vs().filter((k) => !ke().hidden.includes(k.key)), o = a.length, s = (k) => Math.round(k * Ed * 10) / 10 + "px", c = (k, F) => {
      const N = k.el.classList.contains("tfDac"), I = k.tile ? N ? Wr : Nl : pi[k.key] || Nl;
      return '<button class="tfPhoneBlock' + (k.tile ? " tile" : "") + '" type="button" data-phone-key="' + tt(k.key) + '" style="min-height:' + s(I) + '" aria-label="' + tt(Ia(k.key) + ", " + (F + 1) + " of " + o + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (k.tile ? Ze(k.key, Ea(k.key)) : Ze(k.key, $i[k.key])) + '></span><span class="tfPhoneName">' + tt(Ia(k.key)) + "</span></button>";
    }, g = '<div class="tfPhoneTitle">' + tt(((v = L.querySelector(".tfDashTitle")) == null ? void 0 : v.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + s(pi.sums) + '"><span class="tfPhoneName">' + tt(Ia("sums")) + "</span></div>" + a.map(c).join("");
    if (Xa.querySelector('[data-phone="note"]').innerHTML = ke().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", g === qr) return;
    qr = g;
    const p = Xa.querySelector('[data-phone="list"]');
    p.innerHTML = g, Na(p);
  }
  function Xi(t, a) {
    var o;
    hs({ ...ke(), phone: t }), ka(), a && ((o = Xa.querySelector('[data-phone-key="' + CSS.escape(a) + '"]')) == null || o.focus({ preventScroll: !0 }));
  }
  const jr = () => [...Xa.querySelectorAll("[data-phone-key]")].map((t) => t.dataset.phoneKey);
  function Js(t, a) {
    t.preventDefault();
    const o = a.parentElement, s = Xa.querySelector(".tfPhoneScreen"), c = jr().join();
    a.classList.add("moving");
    const g = (v) => {
      const k = s.getBoundingClientRect();
      v.clientY > k.bottom - 40 ? s.scrollTop += 12 : v.clientY < k.top + 40 && (s.scrollTop -= 12);
      const F = [...o.querySelectorAll("[data-phone-key]")].find((Q) => {
        const it = Q.getBoundingClientRect();
        return Q !== a && v.clientX >= it.left && v.clientX <= it.right && v.clientY >= it.top && v.clientY <= it.bottom;
      });
      if (!F) return;
      const N = F.getBoundingClientRect(), I = F.classList.contains("tile") ? v.clientX < N.left + N.width / 2 : v.clientY < N.top + N.height / 2;
      o.insertBefore(a, I ? F : F.nextSibling);
    }, p = () => {
      window.removeEventListener("pointermove", g), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p), a.classList.remove("moving");
      const v = jr();
      qr = "", v.join() !== c ? Xi(v) : ui();
    };
    window.addEventListener("pointermove", g), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  }
  Xa.addEventListener("pointerdown", (t) => {
    const a = t.target.closest("[data-phone-key]");
    a && t.button <= 0 && Js(t, a);
  }), Xa.addEventListener("click", (t) => {
    var o;
    const a = t.target.closest("button");
    if (a != null && a.hasAttribute("data-phone-close"))
      Ln = !1, ka(), (o = Fe.querySelector("[data-phone-toggle]")) == null || o.focus({ preventScroll: !0 });
    else if (a != null && a.hasAttribute("data-phone-reset")) {
      const { phone: s, ...c } = ke();
      hs(c), ka();
    }
  }), Xa.addEventListener("keydown", (t) => {
    var p, v, k, F;
    if (t.key === "Escape") {
      t.stopPropagation(), Ln = !1, ka(), (p = Fe.querySelector("[data-phone-toggle]")) == null || p.focus({ preventScroll: !0 });
      return;
    }
    const a = (F = (k = (v = t.target).closest) == null ? void 0 : k.call(v, "[data-phone-key]")) == null ? void 0 : F.dataset.phoneKey, o = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[t.key];
    if (!a || !o) return;
    t.preventDefault();
    const s = jr(), c = s.indexOf(a), g = c + o;
    g < 0 || g >= s.length || ([s[c], s[g]] = [s[g], s[c]], Xi(s, a));
  });
  function Ji(t, a) {
    t.preventDefault();
    const o = a.parentElement;
    a.classList.add("moving");
    const s = (g) => {
      const p = [...o.children].find((v) => {
        const k = v.getBoundingClientRect();
        return v !== a && g.clientY >= k.top && g.clientY <= k.bottom;
      });
      if (p) {
        const v = p.getBoundingClientRect();
        o.insertBefore(a, g.clientY < v.top + v.height / 2 ? p : p.nextSibling);
      }
    }, c = () => {
      window.removeEventListener("pointermove", s), window.removeEventListener("pointerup", c), window.removeEventListener("pointercancel", c), a.classList.remove("moving");
      const g = new Set(xa());
      si.favs = null, Ki({ favourites: [...o.children].map((p) => p.dataset.trayFav).filter((p) => g.has(p)) });
    };
    window.addEventListener("pointermove", s), window.addEventListener("pointerup", c), window.addEventListener("pointercancel", c);
  }
  Fe.addEventListener("pointerdown", (t) => {
    if (t.button > 0) return;
    const a = t.target.closest("[data-tray-card]"), o = t.target.closest(".tfTrayFav");
    a ? Xs(t, a, "card", a.dataset.trayCard) : o && t.target.closest(".tfTrayGrip") ? Ji(t, o) : o != null && o.classList.contains("off") && !t.target.closest("button") && Xs(t, o, "fav", o.dataset.trayFav);
  });
  function Qi(t) {
    if (!qa || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const a = t.target.closest(".tfBoardItem"), o = a && Rr().find((I) => I.el === a);
    if (!o || ho.includes(o.key)) return;
    const s = ii.get(o.key), { w: c } = ma(L.clientWidth);
    if (!s) return;
    t.preventDefault(), fn();
    const g = t.clientX, p = t.clientY;
    let v = !1, k = 0;
    const F = (I) => {
      const Q = I.clientX - g, it = I.clientY - p;
      if (!v) {
        if (Math.hypot(Q, it) < 4) return;
        v = !0, Ee = { key: o.key, col: s.col, row: s.row }, a.classList.add("tfDragging");
      }
      a.style.transform = "translate(" + Q + "px," + it + "px)", Ee.col = Math.round((s.x + Q) / (c + Ve)), Ee.row = Math.round((s.y + it - Po) / Ka), k || (k = requestAnimationFrame(() => {
        k = 0, ra();
      }));
    }, N = () => {
      window.removeEventListener("pointermove", F), window.removeEventListener("pointerup", N), window.removeEventListener("pointercancel", N), v && (cancelAnimationFrame(k), ra(), a.classList.remove("tfDragging"), a.style.transform = "", Ee = null, ri(ke(), mo()), ra(), Ba());
    };
    window.addEventListener("pointermove", F), window.addEventListener("pointerup", N), window.addEventListener("pointercancel", N);
  }
  function Ja(t = !1) {
    const a = L == null ? void 0 : L.querySelector(".tfDashGraph svg[data-graph]");
    if (!(a != null && a.clientWidth)) return;
    const o = a.dataset.graph + "@" + a.clientWidth + "x" + a.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (a.dataset.drawn === o) return;
    const s = !a.dataset.drawn;
    a.dataset.drawn = o;
    const c = Os.find((g) => g.id === a.dataset.graph);
    c ? Er(a, c).then(() => {
      (t || s) && qs(a);
    }) : _s(a.dataset.graph, a).then(() => {
      t && Sd(a);
    });
  }
  function Qs() {
    var v, k, F;
    oe = we.model(i()), cn(), S = oe.states, S[(v = V.sources) == null ? void 0 : v.grid] && (oe.grid = V.sources.grid), S[(k = V.sources) == null ? void 0 : k.alarm] && (oe.security.alarms = [V.sources.alarm]), H.forEach((N, I) => {
      const Q = S[I], it = (Q == null ? void 0 : Q.attributes) || {};
      if (!Q || Date.now() - N.at > 2 * 60 * 1e3) {
        H.delete(I);
        return;
      }
      N.pos != null && Q.state !== "opening" && Q.state !== "closing" && Math.abs(Nn(I) - N.pos) < 1 && delete N.pos, N.tilt != null && Math.abs((it.current_tilt_position ?? -1) - N.tilt) < 1 && delete N.tilt, N.pos == null && N.tilt == null && H.delete(I);
    });
    const t = [];
    let a = 0;
    const o = so();
    Te = o.filter((N) => N.room).map((N) => N.room), Te.some((N) => N.id === Lt) || (Lt = ((F = Te[0]) == null ? void 0 : F.id) || null);
    const s = X === "weather" ? { key: "weather", name: "Weather" } : X && o.find((N) => N.key === X);
    if (s || (X = null), b.classList.toggle("tfAreaOpen", !!s), b.classList.toggle("tfWeatherOpen", (s == null ? void 0 : s.key) === "weather"), b.classList.toggle("tfDash", !s), Se = /* @__PURE__ */ new Map(), oe.rooms.forEach((N) => [...N.actions, ...N.plugs, ...N.readings, ...N.openings, ...N.solar, ...N.plants.flatMap((I) => [I.id, ...I.readings])].forEach((I) => Se.set(I, N.name))), !s) return qi(t, Ni());
    if (t.push({ key: "areahead", html: Pl(s, ++a) }), s.key === "weather")
      return t.weather = ++a, t;
    const c = s.ids, g = s.room ? s.room.id : s.key, p = s.room;
    return p != null && p.solar.length && t.push({ key: "energy:" + p.id, html: $o(p, ++a) }), p && (p.readings.length || p.plugs.length || p.power != null) && t.push({ key: "readings:" + p.id, html: aa(p, ++a) }), p == null || p.plants.forEach((N) => t.push({ key: "plant:" + N.id, html: xr(N, ++a) })), c.length && t.push({ key: "block:" + g, order: ++a, tiles: c.map((N) => ({ key: N, html: Qo(N) })) }), t;
  }
  const Pl = (t, a) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + a + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + Zc + '</button><div class="settingsTitle">' + tt(t.name) + "</div></div>";
  let ks = 0, Il = null;
  const Ms = (t) => t === "weather" ? ca.wx : t.startsWith("room:") && L.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || L.querySelector(".tfAreas");
  function Ss(t) {
    var a, o;
    X || (ks = fi().scrollTop, Il = ((a = Ms(t)) == null ? void 0 : a.getBoundingClientRect().top) ?? null), X = t, t.startsWith("room:") && (Lt = t.slice(5)), na(), fi().scrollTop = 0, (o = L.querySelector("[data-area-back]")) == null || o.focus({ preventScroll: !0 });
  }
  let Oo = null;
  function tl(t, a) {
    if (Oo == null || Oo(), a == null) return;
    const o = fi(), s = performance.now() + 1500, c = ["wheel", "touchstart", "pointerdown", "keydown"];
    let g = 0;
    const p = () => {
      cancelAnimationFrame(g), c.forEach((k) => window.removeEventListener(k, p, !0)), Oo = null;
    }, v = () => {
      const k = t();
      if (k != null && k.isConnected) {
        const F = k.getBoundingClientRect().top - a;
        Math.abs(F) > 0.5 && (o.scrollTop += F);
      }
      performance.now() < s ? g = requestAnimationFrame(v) : p();
    };
    c.forEach((k) => window.addEventListener(k, p, { capture: !0, passive: !0 })), Oo = p, v();
  }
  function Wo() {
    var o;
    const t = X;
    X = null, na(), fi().scrollTop = ks, tl(() => Ms(t), Il);
    const a = t.startsWith("room:") ? L.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || L.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? ca.wx.querySelector(".wbOpenPage") : L.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (o = (a == null ? void 0 : a.querySelector("[data-go]")) || a) == null || o.focus({ preventScroll: !0 });
  }
  const Hl = (t) => t.wrap ? t.wrap(t.tiles.map((a) => a.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + tt(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((a) => a.html).join("") + "</div></div>", Fl = (t) => t.map((a) => a.key + (a.tiles ? "(" + a.tiles.map((o) => o.key).join(",") + ")" : "")).join(";");
  function fi() {
    for (let t = b.parentElement || b.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const a = getComputedStyle(t).overflowY;
      if ((a === "auto" || a === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function el(t) {
    const a = fi(), o = (v) => {
      const k = v.getBoundingClientRect();
      return k.height && k.bottom > 0 && k.top < window.innerHeight;
    }, s = [...L.children, ...L.querySelectorAll(".tfDashTiles > *")].find((v) => !v.matches(".tfDashTiles") && o(v)), c = s == null ? void 0 : s.dataset.k, g = s == null ? void 0 : s.getBoundingClientRect().top;
    t();
    const p = s != null && s.isConnected ? s : c && L.querySelector('[data-k="' + CSS.escape(c) + '"]');
    p != null && p.isConnected && g != null && (a.scrollTop += p.getBoundingClientRect().top - g);
  }
  function na() {
    if (!M || !L) return;
    const t = Qs(), a = (c) => {
      var g;
      return (((g = c.closest("[data-k]")) == null ? void 0 : g.dataset.k) || "") + "|" + c.dataset.iconFor + "|" + (c.dataset.iconName || "");
    }, o = /* @__PURE__ */ new Map();
    L.querySelectorAll("[data-tf] [data-icon-for]").forEach((c) => {
      c.firstElementChild && (o.get(a(c)) || o.set(a(c), []).get(a(c))).push(c.firstElementChild);
    }), L.querySelectorAll("[data-tf]").forEach((c) => c.remove()), Ge.clear();
    const s = document.createElement("div");
    s.innerHTML = t.map((c) => c.tiles ? Hl(c) : c.html).join(""), t.forEach((c) => c.tiles ? c.tiles.forEach((g) => Ge.set(g.key, g.html)) : Ge.set(c.key, c.html)), ts = Fl(t), s.querySelectorAll("[data-icon-for]").forEach((c) => {
      var p;
      const g = !c.firstElementChild && ((p = o.get(a(c))) == null ? void 0 : p.shift());
      g && c.appendChild(g);
    }), L.append(...s.children), fr(t.weather), hr(), bs.disconnect(), ra(), Na(L), Ls(L), T(L), Y(), G && _s(G.id), $r(), Gr(), sl(), requestAnimationFrame(yt);
  }
  const sa = (t) => {
    var o;
    const a = n.activeElement && t.contains(n.activeElement) ? n.activeElement : null;
    return a && { label: a.getAttribute("aria-label"), act: (o = a.dataset) == null ? void 0 : o.act };
  }, zr = (t, a) => {
    var o;
    a && ((o = a.label && t.querySelector('[aria-label="' + CSS.escape(a.label) + '"]') || a.act && t.querySelector('[data-act="' + CSS.escape(a.act) + '"]')) == null || o.focus({ preventScroll: !0 }));
  };
  function al(t, a) {
    if (!t.querySelector(".tfDacPad"))
      return t.replaceWith(a), a;
    const o = t.matches(".tfDac") && t.querySelector(":scope > .tfDacPad"), s = a.querySelector(":scope > .tfDacPad");
    if (o)
      return (s == null ? void 0 : s.dataset.dac) !== o.dataset.dac ? (t.replaceWith(a), a) : (t.querySelector(":scope > .tfActionHead").replaceWith(a.querySelector(":scope > .tfActionHead")), t.classList.toggle("on", a.classList.contains("on")), ["data-light", "data-tone"].forEach((p) => a.hasAttribute(p) ? t.setAttribute(p, a.getAttribute(p)) : t.removeAttribute(p)), [...t.style].filter((p) => p.startsWith("--") && !p.startsWith("--tf-")).forEach((p) => t.style.removeProperty(p)), [...a.style].forEach((p) => t.style.setProperty(p, a.style.getPropertyValue(p))), t);
    const c = (p) => {
      var v;
      return ((v = p.dataset) == null ? void 0 : v.iconFor) !== void 0;
    };
    if (c(t) && c(a) && !a.children.length && t.dataset.iconFor === a.dataset.iconFor && t.dataset.iconName === a.dataset.iconName && t.firstElementChild)
      return [...t.attributes].forEach((p) => {
        a.hasAttribute(p.name) || t.removeAttribute(p.name);
      }), [...a.attributes].forEach((p) => {
        t.getAttribute(p.name) !== p.value && t.setAttribute(p.name, p.value);
      }), t;
    if (t.tagName !== a.tagName || t.children.length !== a.children.length)
      return t.replaceWith(a), a;
    [...t.attributes].forEach((p) => {
      a.hasAttribute(p.name) || t.removeAttribute(p.name);
    }), [...a.attributes].forEach((p) => t.setAttribute(p.name, p.value));
    const g = [...a.children];
    return [...t.children].forEach((p, v) => al(p, g[v])), t;
  }
  function Ol(t, a) {
    const o = document.createElement("div");
    o.innerHTML = a;
    const s = sa(t), c = al(t, o.firstElementChild);
    Na(c), Ls(c), T(c), zr(c, s);
  }
  function Ba() {
    !M || !L || Ee || el(Wl);
  }
  function Wl() {
    if (!L.querySelector("[data-tf]")) {
      na();
      return;
    }
    const t = Qs();
    if (Fl(t) !== ts) {
      na();
      return;
    }
    const a = (o) => [...C.keys()].some((s) => {
      const c = s.slice(s.indexOf("|") + 1);
      return o === c || o.endsWith(":" + c);
    });
    t.forEach((o) => (o.tiles || [o]).forEach((s) => {
      if (Ge.get(s.key) === s.html || a(s.key)) return;
      const c = L.querySelector('[data-k="' + CSS.escape(s.key) + '"]');
      if (c) {
        if (Ge.set(s.key, s.html), G && G.key === s.key && c.querySelector(".tfOpen")) {
          c.querySelector(".tfOpen .activityRowMeta").textContent = Do(G.id);
          return;
        }
        Ol(c, s.html), G && G.key === s.key && _s(G.id), s.key.startsWith("energy:") && $r();
      }
    })), Gr(), sl(), O(), Y(), te == null || te.update(), va == null || va.forEach((o) => o.update()), b.classList.contains("tfDash") && un(), requestAnimationFrame(yt);
  }
  const hi = {
    light: (t) => [["Brightness", t.brightness != null ? Math.round(t.brightness / 2.55) + "%" : null], ["Colour temperature", t.color_temp_kelvin ? Number(t.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", t.color_mode && De(t.color_mode)]],
    climate: (t) => [["Current temperature", Aa(t.current_temperature) + " °C"], ["Target", Aa(t.temperature) + " °C"], ["Action", De(t.hvac_action)]],
    cover: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null], ["Tilt", t.current_tilt_position != null ? t.current_tilt_position + "% open" : null]],
    humidifier: (t) => [["Current humidity", t.current_humidity + "%"], ["Target", t.humidity + "%"], ["Mode", De(t.mode)]],
    media_player: (t) => [["Title", t.media_title], ["Artist", t.media_artist], ["Volume", t.volume_level != null ? Math.round(t.volume_level * 100) + "%" : null], ["Source", t.source]],
    vacuum: (t) => [["Battery", t.battery_level + "%"], ["Fan speed", De(t.fan_speed)], ["Rooms", (t.rooms || []).join(", ") || null]],
    lock: (t) => [["Changed by", t.changed_by]],
    alarm_control_panel: (t) => [["Changed by", t.changed_by]],
    valve: () => [],
    plant: (t) => [["Moisture", t.moisture + "%"], ["Light", Number(t.brightness).toLocaleString() + " lx"], ["Temperature", Aa(t.temperature) + " °C"], ["Fertility", t.conductivity + " µS/cm"], ["Problems", t.problem === "none" ? "None" : De(t.problem)]],
    weather: (t) => [["Temperature", t.temperature != null ? t.temperature + " " + (t.temperature_unit || "°C") : null], ["Humidity", t.humidity != null ? t.humidity + "%" : null], ["Wind", t.wind_speed != null ? t.wind_speed + " " + (t.wind_speed_unit || "km/h") : null], ["Pressure", t.pressure != null ? t.pressure + " " + (t.pressure_unit || "hPa") : null]]
  }, ql = (t) => ir(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function jl(t, a = {}, o = !1) {
    return '<div class="tfMoreList">' + t.map((s) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + tt(s.name) + '</div><div class="tfMoreTiles' + (o ? " single" : "") + '">' + s.ids.map((c) => Zn(c, a)).join("") + "</div></div>").join("") + "</div>";
  }
  const Jt = document.createElement("div");
  Jt.className = "tfMoreBackdrop", Jt.hidden = !0, b.appendChild(Jt);
  const nl = (t, a) => {
    for (let o = t; o && o !== Jt; o = o.parentElement) {
      const s = getComputedStyle(o).overflowY;
      if ((s === "auto" || s === "scroll") && o.scrollHeight > o.clientHeight + 1 && (a < 0 ? o.scrollTop > 0 : o.scrollTop + o.clientHeight < o.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let Vr = null;
  Jt.addEventListener("touchstart", (t) => {
    Vr = { x: t.touches[0].clientX, y: t.touches[0].clientY };
  }, { passive: !0 }), Jt.addEventListener("touchmove", (t) => {
    var c, g;
    if (!Vr || t.touches.length > 1 || (g = (c = t.target).closest) != null && g.call(c, "input,textarea,select")) return;
    const a = t.touches[0], o = Vr.x - a.clientX, s = Vr.y - a.clientY;
    Vr = { x: a.clientX, y: a.clientY }, Math.abs(s) >= Math.abs(o) && !nl(t.target, s) && t.preventDefault();
  }, { passive: !1 }), Jt.addEventListener("wheel", (t) => {
    var a, o;
    Math.abs(t.deltaX) > Math.abs(t.deltaY) && ((o = (a = t.target).closest) != null && o.call(a, "[data-more-pages]")) || nl(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  function Fn() {
    const t = Jt.querySelector(".tfMorePair"), a = Jt.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - a.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", Fn, { passive: !0 }), M && da();
  let Xn = [];
  const Dd = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function tr(t) {
    const a = (k, F = "") => '<div class="tfMoreHead">' + (lt != null && lt.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + Kd + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + tt(k) + "</div>" + F + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + Kc + "</button></div>", o = (k, F) => '<div class="tfMoreNow"><div class="tfMoreState">' + tt(k) + "</div></div>", s = jl;
    if (t === "favourites") {
      const k = xa(), F = new Set(k), N = [{ name: "Starred", ids: k }, { name: "Home", ids: oe.homeVacuums }, { name: "Security", ids: [...oe.security.alarms, ...oe.security.locks] }, ...oe.rooms.map((I) => ({ name: I.name, ids: [...I.actions, ...I.plugs] }))].map((I, Q) => Q ? { ...I, ids: I.ids.filter((it) => !F.has(it)) } : I).filter((I) => I.ids.length);
      return [a("Favourites"), o(k.length ? k.length + " starred" : "None starred"), s(N, { star: !0 }, !0)];
    }
    const c = (k, { name: F = "", alert: N = !1, plain: I = !1 } = {}) => {
      const Q = I ? [] : k.filter((U) => pd.includes(U.split(".")[0])), it = k.filter((U) => !Q.includes(U)), dt = (U) => U.startsWith("vacuum.") && Kt(U).battery_level != null ? Kt(U).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (F ? '<div class="tfMoreGroupName">' + tt(F) + "</div>" : "") + '<div class="tfMoreActions">' + Q.map((U) => Qo(U, !0)).join("") + it.map((U) => Zn(U, { plain: I, alert: N, say: I ? dt(U) : null })).join("") + "</div></div>";
    };
    if (t.startsWith("summary:")) {
      const k = Ni().find((Q) => Q.key === t.slice(8));
      if (!k) return null;
      const F = k.key === "light" ? (k.groups || []).flatMap((Q) => Q.ids) : [], N = F.some((Q) => {
        var it;
        return ((it = S[Q]) == null ? void 0 : it.state) === "on";
      }), I = F.length ? '<button class="primary" type="button" data-acts="' + Eo(F.map((Q) => ["light", N ? "turn_off" : "turn_on", Q])) + '">' + (N ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [a(k.name), '<div class="tfMoreNowRow">' + o(k.value) + I + "</div>", ...(k.groups || []).map((Q) => c(Q.ids, { name: Q.name === k.name ? "" : Q.name, alert: Q.alert, plain: k.plain }))];
    }
    if (t.startsWith("group:")) {
      const [, k, F] = t.split(":"), N = oe.rooms.find((it) => it.id === k), I = N && K(N).find((it) => it.key === F);
      if (!I) return null;
      const Q = I.acts ? '<button class="primary" type="button" data-acts="' + Eo(I.acts) + '">' + (I.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [a(N.name + " " + I.label.toLowerCase()), '<div class="tfMoreNowRow">' + o(I.value) + Q + "</div>", c(Ct(N, F))];
    }
    const g = t.split(".")[0];
    S[t];
    const p = pd.includes(g) ? Z(t) : { sections: [] }, v = (lt == null ? void 0 : lt.page) || 0;
    return [
      Cs(t, p),
      '<div class="tfMorePages" data-more-pages><section class="tfMorePage" aria-label="Control">' + ol(t) + p.sections.filter(Boolean).join("") + '</section><section class="tfMorePage" aria-label="Info">' + An(t) + "</section></div>",
      '<div class="tfMoreDots" role="tablist" aria-label="Pages">' + ["Control", "Info"].map((k, F) => '<button type="button" role="tab" aria-selected="' + (F === v) + '" aria-label="' + k + '" data-more-page="' + F + '"' + (F === v ? "" : ' tabindex="-1"') + "></button>").join("") + "</div>"
    ];
  }
  function Cs(t, a, o) {
    var p, v, k, F, N;
    const s = (p = oe.areaOf) == null ? void 0 : p.call(oe, t), c = s && (((v = oe.rooms.find((I) => I.id === s)) == null ? void 0 : v.name) || ((N = (F = (k = i()) == null ? void 0 : k.areas) == null ? void 0 : F[s]) == null ? void 0 : N.name)) || "", g = a.button ? Di(t, a) : '<div class="tfIcon"' + Ze(t, a.icon) + "></div>";
    return '<div class="tfMoreHead tfMoreTileHead' + (a.on ? " on" : "") + '"' + (a.tone ? ' data-tone="' + a.tone + '"' : "") + Bn(t) + ">" + (lt != null && lt.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + Kd + "</button>" : "") + g + '<div class="tfName"><span class="activityRowName" id="tfMoreTitle">' + tt(It(t)) + "</span>" + (c ? '<span class="activityRowMeta">' + tt(c) + "</span>" : "") + '</div><button class="tfBack" type="button" data-more-close aria-label="Close">' + Kc + "</button></div>";
  }
  const zl = ["lock", "alarm_control_panel", "switch", "input_boolean", "fan", "valve", "media_player", "automation", "script", "scene", "button"];
  function ol(t) {
    const a = t.split(".")[0];
    if (zl.includes(a) || a === "light" && !ti(t)) return "";
    if (a === "cover") return '<div class="tfMoreSpace tfMoreFill"><div data-cover-art="' + tt(t) + '"></div></div>';
    if (a === "light" && ti(t)) return '<div class="tfMoreSpace tfMoreFill"><div class="tfDacPad" data-dac="more:' + tt(t) + '"></div></div>';
    const { big: o, lines: s } = Bd(t);
    return '<div class="tfMoreSpace"><div class="tfMoreBig' + (P("pos", t) != null ? " live" : "") + '"><span class="tfMoreNum">' + tt(o[0]) + "</span>" + (o[1] ? '<span class="tfMoreUnit">' + tt(o[1]) + "</span>" : "") + '</div><div class="tfMoreFacts">' + s.map(([c, g]) => '<div class="tfMoreFact"><span>' + tt(c) + "</span><span>" + tt(g) + "</span></div>").join("") + "</div></div>";
  }
  function Bd(t) {
    var N;
    const a = S[t], o = Kt(t), s = t.split(".")[0], c = (((N = hi[s]) == null ? void 0 : N.call(hi, o)) || []).filter(([, I]) => I != null && I !== ""), g = (I) => {
      const Q = c.findIndex(([it]) => it === I);
      return Q < 0 ? null : c.splice(Q, 1)[0][1];
    }, p = (I) => {
      const Q = String(I).match(/^(-?[\d.,]+)\s*(.*)$/);
      return Q ? [Q[1], Q[2]] : [String(I), ""];
    }, v = () => [De(String(a.state).replace(/_/g, " ")), ""];
    let k;
    s === "light" ? (g("Brightness"), k = a.state === "on" && rn(t) ? [String(eo(a)), "%"] : v()) : s === "climate" ? k = p(g("Current temperature") || Aa(o.current_temperature) + " °C") : s === "cover" ? (g("Position"), k = o.current_position != null ? [String(Nn(t)), "%"] : v()) : s === "humidifier" ? k = p(g("Current humidity") || a.state) : s === "vacuum" ? k = p(g("Battery") || a.state) : s === "plant" ? k = p(g("Moisture") || a.state) : ["media_player", "lock", "alarm_control_panel", "valve"].includes(s) ? k = v() : k = p(a.state + (o.unit_of_measurement ? " " + o.unit_of_measurement : ""));
    const F = c.length ? c.slice(0, 4) : [["State", ia(t)]];
    return { big: k, lines: F };
  }
  function An(t) {
    var F, N, I, Q, it, dt, U;
    const a = S[t], o = i(), s = (F = o == null ? void 0 : o.entities) == null ? void 0 : F[t], c = s != null && s.device_id ? (N = o == null ? void 0 : o.devices) == null ? void 0 : N[s.device_id] : null, g = '<div class="tfMoreGraph"><div class="tfMoreGroupName">Last 24 hours</div><svg class="tfGraph tfDay" data-day="' + tt(t) + '" role="img" aria-label="' + tt(It(t)) + ', last 24 hours"></svg></div>', p = (I = oe.areaOf) == null ? void 0 : I.call(oe, t), v = p && (((Q = oe.rooms.find((ut) => ut.id === p)) == null ? void 0 : Q.name) || ((dt = (it = o == null ? void 0 : o.areas) == null ? void 0 : it[p]) == null ? void 0 : dt.name)) || "", k = [
      ...((U = hi[t.split(".")[0]]) == null ? void 0 : U.call(hi, Kt(t))) || [],
      ["Changed", a.last_changed && gr(Date.parse(a.last_changed))],
      ["Area", v],
      ["Device", c && (c.name_by_user || c.name)],
      ["Integration", (s == null ? void 0 : s.platform) && De(s.platform.replace(/_/g, " "))],
      ["Entity", t]
    ].filter(([, ut]) => ut != null && ut !== "");
    return g + '<div class="tfMoreRows">' + k.map(([ut, W]) => '<div class="tfMoreRow"><span>' + tt(ut) + "</span><span>" + tt(W) + "</span></div>").join("") + "</div>" + ql(t) + (c ? '<button class="tfDetailsBtn tfMoreLink" type="button" data-path="/config/devices/device/' + tt(s.device_id) + '"><span>Device page</span>' + lp + "</button>" : "");
  }
  const Vl = () => "";
  let il = "";
  function rl(t) {
    var a;
    lt && (lt.details = t, Gr(), (a = Jt.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || a.focus({ preventScroll: !0 }));
  }
  const Ts = (t) => {
    const a = S[t], o = Nn(t), s = _e(t);
    return { kind: Zd(a), name: It(t), text: ia(t), pos: o, target: Math.abs(s - o) > 0.5 ? s : null, moving: a.state === "opening" || a.state === "closing", tilt: _o(t) ?? 100, canSet: Yt(t, ep) };
  };
  function Ls(t) {
    t.querySelectorAll("[data-cover-art]").forEach((a) => {
      const o = a.dataset.coverArt, s = a.dataset.artKey || "more:" + o;
      let c = bt.get(s);
      c || (c = ph({ onMove: (g) => So(o, g), onSet: (g) => {
        So(o, g), Ga("pos", o);
      } }), c.coverId = o, bt.set(s, c)), a.replaceWith(c.el), c.update(Ts(o));
    });
  }
  const Gl = (t) => [...bt.values()].filter((a) => a.coverId === t), za = () => bt.forEach((t) => {
    S[t.coverId] && t.update(Ts(t.coverId));
  }), sl = () => {
    bt.forEach((t, a) => {
      t.el.isConnected || (t.destroy(), bt.delete(a));
    }), za();
  };
  function Gr() {
    var g, p;
    if (!lt || !(Dd(lt.id) || S[lt.id])) {
      Jt.hidden = !0;
      return;
    }
    if ([...C.keys()].some((v) => v.endsWith("|" + lt.id))) {
      za();
      return;
    }
    const t = tr(lt.id), a = Jt.querySelector(".tfMore");
    if (!t) {
      Kr();
      return;
    }
    const o = sa(Jt), s = Vl(lt.id), c = lt.frame ? lt.frame.wide : lt.id.startsWith("summary:") || lt.id.startsWith("group:");
    if (Jt.hidden || !a || t.length !== Xn.length || a.classList.contains("wide") !== c) {
      const v = ko ? lt.scroll || 0 : !Jt.hidden && a ? a.scrollTop : 0;
      Jt.innerHTML = '<div class="tfMorePair' + (Jt.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (c ? " wide" : "") + '"' + (lt.frame ? ' style="height:' + lt.frame.h + 'px"' : "") + ">" + t.join("") + "</section></div>", il = s, Jt.classList.toggle("wide", c), Jt.hidden = !1, Fn(), Ls(Jt), T(Jt), Na(Jt), Jt.querySelectorAll("[data-day]").forEach((k) => $l(k.dataset.day, k, lt.at)), v && (Jt.querySelector(".tfMore").scrollTop = v), er(), zr(Jt, o), Jt.contains(n.activeElement) || (g = Jt.querySelector("[data-more-close]")) == null || g.focus({ preventScroll: !0 });
    } else {
      if (t.forEach((v, k) => {
        var I, Q;
        if (v === Xn[k] || v.includes("data-cover-art") || a.children[k].contains((Q = (I = n.activeElement) == null ? void 0 : I.matches) != null && Q.call(I, "input,select") ? n.activeElement : null) || [...C.keys()].some((it) => a.children[k].querySelector('[data-drag="' + CSS.escape(it) + '"]'))) return;
        const F = document.createElement("div");
        F.innerHTML = v;
        const N = al(a.children[k], F.firstElementChild);
        Na(N), T(N);
      }), s !== il) {
        const v = Jt.querySelector(".tfMoreSideBody");
        v && (v.innerHTML = s), il = s;
      }
      a.querySelectorAll("[data-day]").forEach((v) => {
        v.innerHTML || $l(v.dataset.day, v, lt.at);
      }), er(), Jt.contains(n.activeElement) || zr(Jt, o);
    }
    (p = Jt.querySelector(".tfMorePair")) == null || p.classList.toggle("details", !!(lt.details && s)), Xn = t, za();
  }
  function er() {
    const t = Jt.querySelector("[data-more-pages]");
    !t || !lt || (t.scrollTo({ left: (lt.page || 0) * t.clientWidth, behavior: "instant" }), Ur(), mi(t));
  }
  function mi(t) {
    const a = t.children[(lt == null ? void 0 : lt.page) || 0];
    a && (t.style.height = a.scrollHeight + "px");
  }
  function Ur() {
    const t = (lt == null ? void 0 : lt.page) || 0;
    Jt.querySelectorAll("[data-more-page]").forEach((a) => {
      const o = Number(a.dataset.morePage) === t;
      a.setAttribute("aria-selected", String(o)), a.tabIndex = o ? 0 : -1;
    });
  }
  function Ul(t, a) {
    var s, c;
    const o = Jt.querySelector("[data-more-pages]");
    !o || !lt || (lt.page = Math.max(0, Math.min(1, t)), o.scrollTo({ left: lt.page * o.clientWidth, behavior: (s = window.matchMedia) != null && s.call(window, "(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }), Ur(), mi(o), (c = Jt.querySelector('[data-more-page="' + lt.page + '"]')) == null || c.focus({ preventScroll: !0 }));
  }
  let Yr = 0;
  Jt.addEventListener("scroll", (t) => {
    var o;
    const a = t.target;
    !((o = a.matches) != null && o.call(a, "[data-more-pages]")) || !lt || (clearTimeout(Yr), Yr = setTimeout(() => {
      const s = Math.round(a.scrollLeft / Math.max(1, a.clientWidth));
      s !== (lt.page || 0) && (lt.page = s, Ur(), mi(a));
    }, 80));
  }, !0), setInterval(() => {
    lt && Gr();
  }, 15 * 1e3);
  function ar(t, a) {
    var c;
    const o = !!(lt && a && Jt.contains(a)), s = o && Jt.querySelector(".tfMore");
    o && (lt.scroll = s.scrollTop), lt = { id: t, opener: o ? lt.opener : a, back: o ? lt : null, frame: o ? lt.frame || { wide: s.classList.contains("wide"), h: s.offsetHeight } : null, at: Number((c = a == null ? void 0 : a.dataset) == null ? void 0 : c.at) || null }, Zr();
  }
  let ko = !1;
  function Zr() {
    Xn = [], ko = !Jt.hidden, bt.forEach((t, a) => {
      a !== lt.id && Jt.contains(t.el) && (t.destroy(), bt.delete(a));
    }), Gr(), ko = !1;
  }
  function Kr() {
    var o, s, c, g, p, v;
    const t = lt == null ? void 0 : lt.opener;
    lt = null, bt.forEach((k, F) => {
      Jt.contains(k.el) && (k.destroy(), bt.delete(F));
    }), Oa.forEach((k, F) => {
      F.startsWith("more:") && Oa.delete(F);
    }), Jt.hidden = !0, Jt.innerHTML = "";
    const a = { preventScroll: !0 };
    t != null && t.isConnected ? t.focus(a) : (o = t == null ? void 0 : t.dataset) != null && o.more ? (s = L.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || s.focus(a) : (c = t == null ? void 0 : t.dataset) != null && c.summary ? (g = L.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || g.focus(a) : (p = t == null ? void 0 : t.hasAttribute) != null && p.call(t, "data-favs-edit") && ((v = L.querySelector("[data-favs-edit]")) == null || v.focus(a));
  }
  function As(t, a, o, s = {}) {
    const c = a.map((ut) => ut[1]), g = s.zero ? 0 : Math.min(...c), p = Math.max(...c), v = Math.max(120, t.clientWidth || 260), k = Math.max(60, t.clientHeight || 130), F = 8, N = k - 20, I = Date.now() - 24 * 3600 * 1e3, Q = 24 * 3600 * 1e3, it = (ut) => Math.max(0, Math.min(v, (ut - I) / Q * v)), dt = (ut) => p === g ? (F + N) / 2 : N - (ut - g) / (p - g) * (N - F);
    let U = "M" + it(a[0][0]).toFixed(1) + " " + dt(a[0][1]).toFixed(1);
    for (let ut = 1; ut < a.length; ut++) U += s.smooth ? "L" + it(a[ut][0]).toFixed(1) + " " + dt(a[ut][1]).toFixed(1) : "H" + it(a[ut][0]).toFixed(1) + "V" + dt(a[ut][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + v + " " + k), t.setAttribute("aria-label", o), t.innerHTML = '<path d="' + U + "V" + N + "H" + it(a[0][0]).toFixed(1) + 'Z" fill="' + (s.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + U + '" fill="none" stroke="' + (s.colour || "var(--primary)") + '" stroke-width="2" stroke-linejoin="round"/><text x="0" y="' + (k - 4) + '">24 h ago</text><text x="' + v + '" y="' + (k - 4) + '" text-anchor="end">Now</text>';
  }
  const qo = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, Yl = (t, a) => {
    const o = t.split(".")[0];
    return qo[o] ? qo[o].includes(a) : o === "alarm_control_panel" || o === "climate" || o === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(a) : a === "on";
  }, oa = (t) => {
    const a = t.split(".")[0], o = Kt(t).device_class;
    return a === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[o] || (cd.includes(o) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[a] || "On";
  }, Zl = /* @__PURE__ */ new Map();
  let Mo = 0;
  async function Kl(t) {
    let a = Zl.get(t);
    if (!a || Date.now() - a.at > 60 * 1e3) {
      let c = [];
      try {
        const g = await B({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        c = ((g == null ? void 0 : g[t]) || []).map((p) => [p.lu != null ? p.lu * 1e3 : Date.parse(p.last_updated || p.last_changed), String(p.s ?? p.state)]).filter(([p]) => Number.isFinite(p));
      } catch {
      }
      c.length || (c = (lo || []).filter((g) => g.entity_id === t).map((g) => [g.when * 1e3, String(g.state)])), a = { at: Date.now(), pts: c }, Zl.set(t, a);
    }
    const o = S[t], s = a.pts.slice().sort((c, g) => c[0] - g[0]);
    return o && (!s.length || s[s.length - 1][1] !== o.state) && s.push([Date.parse(o.last_changed) || Date.now(), o.state]), s;
  }
  async function $l(t, a, o) {
    const s = await Kl(t);
    if (!a.isConnected) return;
    const c = s.map(([q, Wt]) => [q, Number(Wt)]);
    if (s.length > 1 && c.every(([, q]) => Number.isFinite(q))) {
      As(a, c, It(t) + ", last 24 hours");
      return;
    }
    const g = Date.now(), p = g - 864e5, v = Math.max(200, a.clientWidth || 360), k = 62, F = (q) => Math.max(0, Math.min(v, (q - p) / 864e5 * v)), N = [];
    let I = null;
    s.forEach(([q, Wt]) => {
      const Pe = Yl(t, Wt);
      Pe && I == null ? I = Math.max(q, p) : !Pe && I != null && (N.push([I, Math.max(q, p)]), I = null);
    }), I != null && N.push([I, g]);
    const Q = Ar(t) ? "var(--danger)" : t.startsWith("light.") ? "#ffaa00" : "var(--primary)", it = oa(t), dt = "tfDayClip" + ++Mo, U = N.map(([q, Wt]) => it + (Wt >= g - 1e3 && q <= p + 1e3 ? " all day" : Wt >= g - 1e3 ? " since " + sn(q) : q <= p + 1e3 ? " until " + sn(Wt) : " " + sn(q) + "–" + sn(Wt)));
    let ut = "", W = -1 / 0;
    N.forEach(([q], Wt) => {
      const Pe = U[Wt].length * 5.4, fe = Math.min(F(q), v - Pe);
      fe < W + 8 || (ut += '<text x="' + fe.toFixed(1) + '" y="10">' + tt(U[Wt]) + "</text>", W = fe + Pe);
    });
    let wt = '<text x="' + v + '" y="' + (k - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((q) => {
      let Wt = new Date(g).setHours(q, 0, 0, 0);
      Wt > g && (Wt -= 864e5), F(Wt) > 8 && F(Wt) < v - 34 && (wt += '<text x="' + F(Wt).toFixed(1) + '" y="' + (k - 2) + '" text-anchor="middle">' + String(q).padStart(2, "0") + "</text>");
    }), a.setAttribute("viewBox", "0 0 " + v + " " + k), a.setAttribute("aria-label", It(t) + ", last 24 hours: " + (U.length ? U.join(", ") : "no changes")), a.innerHTML = '<clipPath id="' + dt + '"><rect x="0" y="18" width="' + v + '" height="26" rx="8"/></clipPath>' + ut + '<rect x="0" y="18" width="' + v + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + dt + ')">' + N.map(([q, Wt]) => '<rect x="' + F(q).toFixed(1) + '" y="18" width="' + Math.max(2, F(Wt) - F(q)).toFixed(1) + '" height="26" fill="' + Q + '"/>').join("") + "</g>" + (o && o >= p ? '<line x1="' + F(o).toFixed(1) + '" x2="' + F(o).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + wt;
  }
  function ll(t) {
    var s;
    const a = Number((s = S[t]) == null ? void 0 : s.state), o = Date.now();
    if (Kt(t).state_class === "total_increasing") {
      const c = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), g = Math.max(1, o - c);
      return [...Array(49)].map((p, v) => c + g * v / 48).map((p) => [p, Math.round(a * Math.pow((p - c) / g, 1.3) * 100) / 100]);
    }
    return [...Array(48)].map((c, g) => [o - (48 - g) * 30 * 60 * 1e3, Math.round(a * (0.96 + 0.04 * Math.sin(g / 6)) * 10) / 10]);
  }
  async function _s(t, a) {
    var it, dt;
    let o = J.get(t);
    if (t.endsWith("_solar_power")) o = { at: Date.now(), points: bc() };
    else if (ir(t)) o = { at: Date.now(), points: ll(t) };
    else if (!o || Date.now() - o.at > 5 * 60 * 1e3) {
      try {
        const U = new Date(Date.now() - 864e5).toISOString(), ut = await B({ type: "history/history_during_period", start_time: U, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), W = ((ut == null ? void 0 : ut[t]) || []).map((wt) => [wt.lu != null ? wt.lu * 1e3 : Date.parse(wt.last_updated || wt.last_changed), Number(wt.s ?? wt.state)]).filter(([wt, q]) => Number.isFinite(wt) && Number.isFinite(q));
        o = { at: Date.now(), points: W };
      } catch {
        o = { at: Date.now(), points: [] };
      }
      J.set(t, o);
    }
    const s = a || L.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!s) return;
    const c = S[t], g = ((it = c == null ? void 0 : c.attributes) == null ? void 0 : it.unit_of_measurement) || "", p = o.points.slice(), v = Number(c == null ? void 0 : c.state);
    if (Number.isFinite(v) && !t.endsWith("_solar_power") && p.push([Date.now(), v]), p.length < 2) {
      s.setAttribute("aria-label", It(t) + ": no history for the last 24 hours"), s.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const k = p.map((U) => U[1]), F = Math.min(...k), N = Math.max(...k), I = (U) => U.toLocaleString(void 0, { maximumFractionDigits: Math.abs(U) >= 100 ? 0 : 1 }), Q = ((dt = c == null ? void 0 : c.attributes) == null ? void 0 : dt.state_class) === "total_increasing";
    As(s, p, It(t) + ", last 24 hours: " + (Q ? "+" + I(k[k.length - 1] - k[0]) : F === N ? I(F) : I(F) + " to " + I(N)) + (g ? " " + g : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power") });
  }
  function $r() {
    const t = L == null ? void 0 : L.querySelector("[data-solar]");
    if (!t) return;
    const a = bc();
    As(t, a, "Solar, last 24 hours: up to " + Aa(Math.max(...a.map((o) => o[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function Rd(t, a) {
    const o = a.entity_id, s = H.get(o) || {}, c = { open_cover: 100, close_cover: 0, set_cover_position: a.position, toggle: Nn(o) > 0 ? 0 : 100 }[t], g = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: a.tilt_position }[t];
    c != null && (s.pos = c), g != null && (s.tilt = g), t === "stop_cover" && (delete s.pos, delete s.tilt), t === "stop_cover_tilt" && delete s.tilt, s.at = Date.now(), H.set(o, s);
  }
  function Xl(t, a, o) {
    var c;
    const s = o == null ? void 0 : o.entity_id;
    return t !== "light" || typeof s != "string" || !Ya[s] || !rn(s) || o.brightness_pct != null || o.brightness != null ? [a, o] : a !== "turn_on" && !(a === "toggle" && ((c = S[s]) == null ? void 0 : c.state) !== "on") ? [a, o] : ["turn_on", { ...o, brightness_pct: Ya[s] }];
  }
  function gi(t, a, o, s) {
    let c = { entity_id: o, ...s || {} };
    return [a, c] = Xl(t, a, c), t === "cover" && Rd(a, c), ta[o] = (ta[o] || 0) + 1, Vo.set(op, JSON.stringify(ta)), we.call(t, a, c) ? Promise.resolve() : Promise.resolve(Mt(t, a, c));
  }
  function Qa(t) {
    const [a, o, s, c] = t.split("|");
    gi(a, o, s, c ? JSON.parse(c) : null).catch(() => {
    });
  }
  function So(t, a) {
    C.set("pos|" + t, a), Ge.delete(t), Xn = Xn.map(() => ""), [L, Jt].forEach((s) => s.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((c) => as(c, a)));
    const o = L.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (o && (o.textContent = Math.round(a) + "%"), (lt == null ? void 0 : lt.id) === t) {
      const s = Jt.querySelector(".tfMoreState"), c = Jt.querySelector(".tfMoreSub");
      s && (s.textContent = Math.round(a) + "%", s.classList.add("live")), c && (c.textContent = "Currently " + Nn(t) + "%");
    }
    Gl(t).forEach((s) => s.update(Ts(t)));
  }
  const Jl = (t, a) => {
    const o = t.shiftKey ? 10 : 1, s = { ArrowUp: a + o, ArrowRight: a + o, ArrowDown: a - o, ArrowLeft: a - o, PageUp: a + 25, PageDown: a - 25, Home: 0, End: 100 }[t.key];
    return s == null ? null : Math.max(0, Math.min(100, Math.round(s)));
  };
  function Ql(t, a) {
    var U;
    const o = t.dataset.blocks;
    (U = t.setPointerCapture) == null || U.call(t, a.pointerId);
    const s = (ut) => {
      const W = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (ut.clientX - W.left) / W.width * 100));
    }, c = s(a), g = a.clientX;
    let p = !1, v = _e(o), k = c, F = 0;
    const N = () => {
      v = Math.abs(k - v) < 0.2 ? k : v + (k - v) * 0.14, So(o, v), F = requestAnimationFrame(N);
    }, I = () => {
      p || (p = !0, t.classList.add("fine"), F = requestAnimationFrame(N));
    }, Q = setTimeout(I, 350), it = (ut) => {
      k = s(ut), Math.abs(ut.clientX - g) > 6 && (clearTimeout(Q), I());
    }, dt = () => {
      clearTimeout(Q), cancelAnimationFrame(F), t.removeEventListener("pointermove", it), t.removeEventListener("pointerup", dt), t.removeEventListener("pointercancel", dt), t.classList.remove("fine"), So(o, p ? Math.round(v) : (Math.min(3, Math.floor(c / 25)) + 1) * 25), Ga("pos", o);
    };
    t.addEventListener("pointermove", it), t.addEventListener("pointerup", dt), t.addEventListener("pointercancel", dt);
  }
  function dl(t) {
    var c;
    const [a, o] = t.dataset.open.split("|"), s = t.closest(".tfCard");
    G = { key: a, id: o, h: s ? Math.round(s.getBoundingClientRect().height) : 0 }, Ge.delete(a), Ba(), (c = L.querySelector(".tfOpen [data-close]")) == null || c.focus({ preventScroll: !0 });
  }
  function Va(t) {
    var a;
    Lt = t.dataset.area, L.querySelectorAll(".tfAreaPanel").forEach((o) => {
      var c;
      const s = o === t;
      o.classList.toggle("active", s), o.setAttribute("aria-expanded", String(s)), (c = o.querySelector(".panelExpanded")) == null || c.toggleAttribute("inert", !s);
    }), Ge.set("areas", Rt(((a = L.querySelector('[data-k="areas"]')) == null ? void 0 : a.style.order) || 1));
  }
  const Jn = {
    bright: { value: (t, a) => Math.round(a * 100), text: (t, a) => a ? a + "%" : "Off", send: (t, a) => a > 0 ? ["light", "turn_on", { brightness_pct: a }] : ["light", "turn_off", {}] },
    ct: { value: (t, a) => {
      const [o, s] = Rn(t);
      return Math.round(o + a * (s - o));
    }, text: (t, a) => a.toLocaleString() + "k", send: (t, a) => ["light", "turn_on", { color_temp_kelvin: a }] },
    hue: { value: (t, a) => Math.round(a * 360), text: () => "Colour", send: (t, a) => {
      var o;
      return ["light", "turn_on", { hs_color: [a, Math.max(60, ((o = Kt(t).hs_color) == null ? void 0 : o[1]) || 100)] }];
    } },
    pos: { value: (t, a) => Math.round(a * 100), text: (t, a) => Math.round(a) + "%", send: (t, a) => ["cover", "set_cover_position", { position: Math.round(a) }] },
    tilt: { value: (t, a) => Math.round(a * 100), text: (t, a) => "Tilt " + a + "%", send: (t, a) => ["cover", "set_cover_tilt_position", { tilt_position: a }] },
    vol: { value: (t, a) => Math.round(a * 100) / 100, text: (t, a) => Math.round(a * 100) + "%", send: (t, a) => ["media_player", "volume_set", { volume_level: a }] }
  };
  function jo(t, a, o, s) {
    var k;
    const c = Jn[a].value(o, s);
    C.set(a + "|" + o, c);
    const g = Math.round(s * 100) + "%", p = t.querySelector("i");
    if (a === "tilt") {
      p.style.width = "calc((100% - 8px) * " + s + ")";
      const [F, N] = t.querySelectorAll("span");
      F.classList.toggle("lit", s > 0.08), N.classList.toggle("lit", s > 0.92), Ge.delete(o), Xn = Xn.map(() => ""), Gl(o).forEach((I) => I.update(Ts(o)));
    } else if (p) p.style.width = g;
    else {
      let F = t.querySelector("b");
      F || (F = document.createElement("b"), t.appendChild(F)), F.style.left = g;
    }
    t.setAttribute("aria-valuenow", String(Math.round(s * 100)));
    const v = (k = t.closest(".tfAction") || t.closest(".tfMore")) == null ? void 0 : k.querySelector(".tfName .activityRowMeta, .tfMoreState");
    v && (v.textContent = Jn[a].text(o, c));
  }
  function Ga(t, a) {
    const o = C.get(t + "|" + a), [s, c, g] = Jn[t].send(a, o), p = () => setTimeout(() => {
      C.delete(t + "|" + a), Ba();
    }, 1500);
    gi(s, c, a, g).then(p, p);
  }
  function zo(t) {
    t.addEventListener("click", (a) => {
      var s, c;
      const o = a.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],[data-more-page],[data-path],.tfAreaPanel");
      if (ja && !a.target.closest(".tfBoardMenu,[data-board-more]") && fn(), !(!o || !t.contains(o) || o.disabled))
        if (o.dataset.boardMore)
          (ja == null ? void 0 : ja.key) === o.dataset.boardMore ? fn(!0) : Tn(o.dataset.boardMore, o);
        else if (o.dataset.boardAct) Yi(ja.key, o.dataset.boardAct);
        else if (o.dataset.boardShow) go(o.dataset.boardShow);
        else if (o.dataset.favHide) di(o.dataset.favHide, !1);
        else if (o.dataset.energyPick) Ws(o.dataset.energyPick);
        else if (o.dataset.act) Qa(o.dataset.act);
        else if (o.hasAttribute("data-details")) rl(!(lt != null && lt.details));
        else if (o.hasAttribute("data-details-close")) rl(!1);
        else if (o.dataset.summary) ei(o.dataset.summary, o);
        else if (o.dataset.star) rs(o.dataset.star);
        else if (o.hasAttribute("data-more-back")) {
          const g = lt.id;
          lt = lt.back, Zr(), (s = Jt.querySelector('.tfMore [data-more="' + CSS.escape(g) + '"]')) == null || s.focus({ preventScroll: !0 });
        } else if (o.hasAttribute("data-favs-edit")) ar("favourites", o);
        else if (o.dataset.acts) JSON.parse(o.dataset.acts).forEach(([g, p, v, k]) => gi(g, p, v, k).catch(() => {
        }));
        else if (o.dataset.more) ar(o.dataset.more, o);
        else if (o.hasAttribute("data-more-close")) Kr();
        else if (o.dataset.morePage) Ul(Number(o.dataset.morePage));
        else if (o.dataset.path) Pn(o.dataset.path);
        else if (o.dataset.go) Ss("room:" + o.dataset.go);
        else if (o.hasAttribute("data-area-back")) Wo();
        else if (o.dataset.open) dl(o);
        else if (o.hasAttribute("data-close")) {
          const g = G;
          G = null, Ge.delete(g.key), Ba(), (c = L.querySelector('[data-open="' + CSS.escape(g.key + "|" + g.id) + '"]')) == null || c.focus({ preventScroll: !0 });
        } else o.classList.contains("tfAreaPanel") && !o.classList.contains("active") && Va(o);
    }), t.addEventListener("keydown", (a) => {
      var s, c, g, p, v, k, F;
      const o = a.target;
      if ((s = o.dataset) != null && s.open && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), dl(o)), (c = o.dataset) != null && c.energyPick && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), Ws(o.dataset.energyPick)), (g = o.classList) != null && g.contains("tfAreaPanel") && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), Va(o)), (p = o.dataset) != null && p.summary && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), ei(o.dataset.summary, o)), a.key === "Escape" && ja && t === L) {
        a.preventDefault(), fn(!0);
        return;
      }
      if (a.key === "Escape" && qa && t === L) {
        a.preventDefault(), ws(!1), (v = f("dashEditNav")) == null || v.focus();
        return;
      }
      if (a.key === "Escape" && X && t === L && (a.preventDefault(), Wo()), (k = o.dataset) != null && k.blocks) {
        const N = o.dataset.blocks, I = Jl(a, Math.round(_e(N)));
        if (I == null) return;
        a.preventDefault(), So(N, I), clearTimeout(vt.get(N)), vt.set(N, setTimeout(() => Ga("pos", N), 500));
        return;
      }
      if ((F = o.dataset) != null && F.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(a.key)) {
        a.preventDefault();
        const [N, I] = o.dataset.drag.split("|"), Q = Number(o.getAttribute("aria-valuenow")) / 100, it = a.key === "Home" ? 0 : a.key === "End" ? 1 : Math.max(0, Math.min(1, Q + (a.key === "ArrowLeft" || a.key === "ArrowDown" ? -0.05 : 0.05)));
        jo(o, N, I, it), Ga(N, I);
      }
    }), t.addEventListener("pointerdown", (a) => {
      var Pe;
      const o = a.target.closest("[data-blocks]");
      if (o && a.button === 0) {
        a.preventDefault(), Ql(o, a);
        return;
      }
      const s = a.target.closest("[data-drag]");
      if (!s || a.button > 0) return;
      const [c, g] = s.dataset.drag.split("|"), p = c === "bright" && !rn(g), v = a.pointerType !== "mouse";
      if (p && !v) {
        Qa(xe("light", "toggle", g));
        return;
      }
      const k = c === "bright" && ((Pe = S[g]) == null ? void 0 : Pe.state) !== "on", F = c === "tilt" ? 4 : 0, N = () => s.getBoundingClientRect().width - F * 2, I = (fe) => {
        const Ra = s.getBoundingClientRect();
        return Math.max(0, Math.min(1, (fe.clientX - Ra.left - F) / N()));
      };
      let Q = v ? "waiting" : k ? "pressed" : "dragging", it = 0;
      const dt = a.clientX, U = a.clientY, ut = (fe, Ra) => Math.hypot(fe.clientX - dt, fe.clientY - U) > Ra, W = () => {
        try {
          s.setPointerCapture(a.pointerId);
        } catch {
        }
      };
      v || (a.preventDefault(), W()), Q === "dragging" && jo(s, c, g, I(a));
      const wt = () => {
        var fe, Ra;
        Q = "sliding", _ = s, s.classList.add("held"), W(), (fe = navigator.userActivation) != null && fe.hasBeenActive && ((Ra = navigator.vibrate) == null || Ra.call(navigator, 8)), it = k ? (Ya[g] ?? 100) / 100 : Number(s.getAttribute("aria-valuenow")) / 100;
      }, q = (fe) => {
        Q === "waiting" && ut(fe, D) ? !p && Math.abs(fe.clientX - dt) > Math.abs(fe.clientY - U) ? wt() : Q = "gone" : Q === "pressed" && ut(fe, 4) && (Q = "dragging"), Q === "sliding" ? jo(s, c, g, Math.max(0, Math.min(1, it + (fe.clientX - dt) / N()))) : Q === "dragging" && jo(s, c, g, I(fe));
      }, Wt = (fe) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((Ra, Qt) => s.removeEventListener(Ra, Qt ? Wt : q)), s.classList.remove("held"), _ === s && (_ = null), Q === "sliding" || Q === "dragging" ? Ga(c, g) : fe.type === "pointerup" && p ? Qa(xe("light", "toggle", g)) : fe.type === "pointerup" && k && (Q === "waiting" || Q === "pressed") && gi("light", "turn_on", g).catch(() => {
        });
      };
      s.addEventListener("pointermove", q), s.addEventListener("pointerup", Wt), s.addEventListener("pointercancel", Wt);
    }), t.addEventListener("touchmove", (a) => {
      _ && a.cancelable && a.preventDefault();
    }, { passive: !1 });
  }
  return L && M && (yd(), zo(L), zo(Jt), Jt.addEventListener("click", (t) => {
    t.target === Jt && Kr();
  }), (Es = n.getElementById("homeNav")) == null || Es.addEventListener("click", () => {
    X && Wo();
  }), (vi = n.querySelector(".bottomNav")) == null || vi.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + dp + "</button>"), (cl = f("dashEditNav")) == null || cl.addEventListener("click", () => ws(!qa)), L.addEventListener("pointerdown", Qi), new ResizeObserver(() => {
    b.classList.contains("tfDash") && No() !== js ? Ba() : un();
  }).observe(L), window.addEventListener("resize", un, { passive: !0 }), Jt.addEventListener("keydown", (t) => {
    var a, o;
    t.key === "Escape" ? (t.stopPropagation(), lt != null && lt.details ? rl(!1) : Kr()) : (t.key === "ArrowLeft" || t.key === "ArrowRight") && ((o = (a = t.target).closest) != null && o.call(a, ".tfMoreDots")) && (t.preventDefault(), Ul(((lt == null ? void 0 : lt.page) || 0) + (t.key === "ArrowRight" ? 1 : -1)));
  })), ot(), {
    update(t) {
      if (!M) return;
      const a = !Object.keys(S).length;
      S = { ...Object.fromEntries(Object.entries(S).filter(([s]) => ir(s))), ...t || {} };
      for (const s in S) s.startsWith("light.") && S[s].state === "on" && rn(s) && Vn(s, eo(S[s]));
      a ? na() : Ba();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      Ti = !0, te == null || te.destroy(), te = null, va == null || va.forEach((t) => t.destroy()), va = null;
    },
    resume() {
      Ti = !1, !(!M || !(L != null && L.querySelector("[data-tf]"))) && (ie.isConnected && fr(ie.style.order), hr());
    }
  };
}
const Fh = "0.73.0", Qd = "move_assistant", Oh = "move_assistant", up = "move_assistant_checkin_reminder";
function Wh() {
  if (document.getElementById("move-assistant-inter")) return;
  const n = document.createElement("link");
  n.id = "move-assistant-inter", n.rel = "stylesheet", n.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(n);
}
class qh extends HTMLElement {
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
    var f;
    const i = !this._hass;
    if (this._hass = d, i) {
      this._init();
      return;
    }
    this._app && d.states !== this._lastStates && (this._lastStates = d.states, this._app.updateStates(d.states), (f = this._test) == null || f.update(d.states));
  }
  connectedCallback() {
    var d, i;
    (d = this._app) == null || d.resume(), (i = this._test) == null || i.resume();
  }
  disconnectedCallback() {
    var d, i;
    (d = this._app) == null || d.suspend(), (i = this._test) == null || i.suspend();
  }
  async _init() {
    Wh();
    const d = this.shadowRoot || this.attachShadow({ mode: "open" });
    d.innerHTML = `<style>${Yp}${Zp}${Kp}</style>${$p}`;
    const i = d.getElementById("app");
    i.style.opacity = "0";
    let f = null;
    try {
      const b = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: Qd
      });
      f = (b == null ? void 0 : b.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(f), this._app = gu(d, {
      data: f,
      save: (b) => this._save(b),
      fire: (b, y) => this._fire(b, y),
      ws: (b) => this._hass.callWS(b),
      subscribe: (b, y) => {
        var M, E;
        return (E = (M = this._hass) == null ? void 0 : M.connection) != null && E.subscribeMessage ? this._hass.connection.subscribeMessage(y, b) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var b, y;
        return Object.keys(((y = (b = this._hass) == null ? void 0 : b.services) == null ? void 0 : y.notify) || {}).sort();
      },
      setReminderAutomation: (b) => this._setReminderAutomation(b),
      setLight: (b) => this.classList.toggle("lightBody", b),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this._test = Hh(d, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), this.isConnected || (this._app.suspend(), this._test.suspend()), i.style.transition = "opacity .2s ease", i.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var i;
    const d = (i = this._hass) == null ? void 0 : i.connection;
    d != null && d.subscribeMessage && d.subscribeMessage(
      (f) => {
        var y;
        const b = JSON.stringify((f == null ? void 0 : f.value) ?? null);
        b === this._lastSaved || b === this._pendingJson || (this._lastSaved = b, (y = this._app) == null || y.applyRemoteData(f.value));
      },
      { type: "frontend/subscribe_user_data", key: Qd }
    ).catch(() => {
    });
  }
  _save(d) {
    this._pendingJson = JSON.stringify(d), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const i = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: Qd,
          value: JSON.parse(i)
        }), this._lastSaved = i;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(d, i = {}) {
    var f, b;
    ((f = this._config) == null ? void 0 : f.events) !== !1 && ((b = this._hass) == null || b.callWS({
      type: "fire_event",
      event_type: Oh,
      event_data: { action: d, ...i }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(d) {
    const i = `config/automation/config/${up}`;
    if (!d) {
      try {
        await this._hass.callApi("DELETE", i);
      } catch (y) {
        if ((y == null ? void 0 : y.status_code) !== 404 && (y == null ? void 0 : y.status) !== 404) throw y;
      }
      return;
    }
    const f = (y) => `${y}:00`, b = window.location.pathname;
    await this._hass.callApi("POST", i, {
      id: up,
      alias: "Move Assistant check-in reminder",
      description: "Created by Move Assistant. Change it in Move Assistant → Settings → Check-in.",
      mode: "single",
      triggers: [
        { trigger: "time", at: f(d.times.morning), id: "morning" },
        { trigger: "time", at: f(d.times.evening), id: "evening" }
      ],
      conditions: [],
      actions: [
        {
          action: `notify.${d.target}`,
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
    const d = document;
    if (d.fullscreenElement || d.webkitFullscreenElement) {
      (d.exitFullscreen || d.webkitExitFullscreen).call(d);
      return;
    }
    const i = this.requestFullscreen || this.webkitRequestFullscreen;
    Promise.resolve(i.call(this)).catch(
      () => this._toast("Full screen isn't available here")
    );
  }
  _toast(d) {
    var f;
    const i = (f = this.shadowRoot) == null ? void 0 : f.getElementById("toast");
    i && (i.textContent = d, i.classList.add("show"), setTimeout(() => i.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", qh), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${Fh} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
