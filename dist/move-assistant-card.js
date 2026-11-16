const Df = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn,.tfSeg>button,.tfMoreSwitch>button){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', _f = `#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)),#homeView .tfATile{transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover,#homeView .tfATile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}.tfCard .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .toggleRow:has(>.themeChoice,>.settingsSelect){flex-direction:column;align-items:stretch;gap:12px}#housePane .toggleRow>.settingsSelect{width:100%}#housePane .themeChoice[hidden]{display:none}#housePane .houseTab>.card:has(>.tfSetGroup){gap:24px}#housePane .tfSetGroup{display:grid;gap:8px}#housePane .tfSetGroup>.sectionLabel{margin:0 16px}#housePane{container:housepane/inline-size}#housePane .tfLightCards{display:none}@container housepane (width < 720px){#housePane .houseTab .metaTableWrap{display:none}#housePane .tfLightCards{display:grid;gap:8px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}#housePane .themeChoice,.tfBoardMenu .tfHeightTabs,.wb .wbSegments{gap:4px;padding:4px;border:0;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}#housePane .themeChoice{display:flex;flex-wrap:nowrap;width:100%}#housePane .themeChoice>button{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button){height:38px;min-width:0;min-height:0;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile)!important;white-space:nowrap;cursor:pointer}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button):hover:not(:disabled):not([aria-pressed=true]):not([aria-checked=true]):not(.active){background:transparent;color:var(--text)}:is(#housePane .themeChoice :is(.wxLayoutBtn[aria-pressed=true],.themeBtn.active),.tfBoardMenu .tfHeightTabs button[aria-checked=true],.wb .wbSegments button[aria-pressed=true]){background:var(--bright);color:var(--on-bright)}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfATags{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:4px;margin-left:auto;min-width:0}.tfATags .sourceTag{display:block;margin:0;max-width:100%;padding:6px 12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}#app.house .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}#app.house .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-l);--g1:var(--g1-l);--g2:var(--g2-l)}#app.house .tfSum[data-summary=climate] .tfIcon svg path{fill:url(#hcClimateGrad)}.tfGradDefs{position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMoreBackdrop.tfMoreUnder{z-index:179;pointer-events:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}.tfMoreTileHead .tfName{display:grid;flex:1;min-width:0;cursor:default}.tfMoreTileHead :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreTileHead .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfMoreTileHead div.tfIcon{cursor:default}.tfMoreTileHead.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreTileHead.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMorePages{display:grid;grid-auto-flow:column;grid-auto-columns:100%;align-items:start;gap:20px;flex:none;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;transition:height .25s cubic-bezier(.2,.7,.3,1)}@media (prefers-reduced-motion:reduce){.tfMorePages{transition:none}}.tfMorePages::-webkit-scrollbar{display:none}.tfMorePage{display:flex;flex-direction:column;gap:14px;min-width:0;scroll-snap-align:start;scroll-snap-stop:always}.tfMoreSpace{flex:none;display:flex;flex-direction:column;justify-content:space-between;gap:12px;height:224px;padding:18px;border-radius:16px;background:var(--tile);overflow:hidden}.tfMoreSpace.tfMoreFill{justify-content:center;align-items:center;height:auto;padding:0;background:none;border-radius:0}.tfMoreSpace.tfMoreFill>.tfCoverArt{width:100%;height:auto;max-width:none;align-self:center}.tfMoreSpace.tfMoreFill>.tfDacPad{width:100%;height:100%}.tfMoreBig{display:flex;align-items:baseline;min-width:0;font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfMoreBig.live{color:var(--primary)}.tfMoreNum{overflow:hidden;text-overflow:ellipsis}.tfMoreUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfMoreFacts{display:flex;flex:1;flex-direction:column;justify-content:space-evenly;min-height:0}.tfMoreFact{display:flex;justify-content:space-between;gap:16px;font:400 14px/20px var(--font)}.tfMoreFact span:first-child{color:var(--muted)}.tfMoreFact span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreGraph{display:flex;flex:none;flex-direction:column;gap:6px}.tfMoreGraph .tfMoreGroupName{margin:0}.tfMoreGraph .tfGraph.tfDay{width:100%}.tfMoreDots{display:flex;flex:none;justify-content:center;gap:4px;margin-top:-4px}.tfMoreDots button{display:grid;place-items:center;width:24px;height:24px;min-height:0;padding:0;border:0;background:none;cursor:pointer}.tfMoreDots button:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--muted);opacity:.45;transition:opacity .15s ease,background .15s ease}.tfMoreDots button[aria-selected=true]:before{background:var(--text);opacity:1}.tfMoreDots.tfMorePageIcons{gap:3px;align-self:center;margin-top:0;padding:3px;border-radius:19px;background:var(--tile)}.tfMoreDots.tfMorePageIcons button{width:48px;height:32px;border-radius:16px;color:var(--muted);transition:background .15s ease,color .15s ease}.tfMoreDots.tfMorePageIcons button:before{display:none}.tfMoreDots.tfMorePageIcons button svg{width:20px;height:20px;fill:currentColor}.tfMoreDots.tfMorePageIcons button[aria-selected=true]{background:var(--text);color:var(--card)}.tfMoreDots.tfMorePageIcons button:not([aria-selected=true]):hover{color:var(--text)}#homeView .grid>.tfDashTiles>.tfAction.tfHeadOnly,#homeView .grid .tfAction.tfHeadOnly{align-self:start}.tfMoreLink{margin-top:auto}.tfMoreLink svg{transform:none!important}.tfMorePage .tfMoreRows{flex:none}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 20px 10px}.tfAreaPanel .tfATiles{margin-inline:-10px}.tfAreaPanel .workoutPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{max-width:100%;overflow:hidden;color:var(--muted);font:400 16px/1.2 var(--font);white-space:nowrap;text-overflow:ellipsis}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));min-height:calc(2 * var(--tile-min));align-content:end}.tfABig{max-width:100%}.panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 16px)}#app.tfBoard .tfAreas[data-rows="5"] .tfACMain{position:absolute;left:10px;right:10px;bottom:170.3px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .tfACMain{position:absolute;left:10px;right:10px;bottom:164.1px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 12px)}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{align-self:start;display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar,.tfDash-hourly,.tfDash-sun,.tfDash-moon,.tfDash-uv,.tfDash-humidity,.tfDash-pressure,.tfDash-wind,.tfDash-visibility){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;pointer-events:none;color:var(--text)}.tfBoardCells svg{display:block;overflow:visible}.tfBoardCells pattern circle{fill:currentColor;fill-opacity:.16}.tfBoardCells .tfGridCross{fill:none;stroke:currentColor;stroke-opacity:.45;stroke-width:1.5;stroke-linecap:round}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}.tfBoardMenu .tfHeightTabs button{justify-content:center}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}.tfWidth{padding-top:0}.tfWidth .tfHeightTabs{grid-template-columns:repeat(3,auto)}.tfBoardMenu .tfWidth .tfHeightTabs button{white-space:nowrap}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:var(--fill-row,60px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:var(--fill-row,60px);box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"]{padding:10px;border-radius:24px}.tfRoomTile{cursor:pointer}.tfRoomTile .tfRoomIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomInline,.tfRoomSub{display:none}.tfRoomReading{display:flex;flex-direction:column;gap:4px;min-width:0}.tfRoomBig{overflow:hidden;color:var(--text);font:500 46px/46px var(--font-tile);letter-spacing:-.92px;white-space:nowrap;text-overflow:ellipsis}.tfRoomSub{overflow:hidden;color:var(--muted);font:400 16px/19px var(--font);white-space:nowrap;text-overflow:ellipsis}.tfRoomDevices{display:flex;gap:12px}.tfRoomDevices .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDevices .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}#app.tfBoard .tfRoomTile[data-rows="1"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-rows="1"] :is(.tfRoomReading,.tfRoomDevices),#app.tfBoard .tfRoomTile[data-rows="2"] .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfActionHead .activityRowMeta{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfRoomSub{display:block}#app.tfBoard .tfRoomTile[data-rows="4"] .tfRoomBig{font-size:52px;line-height:52px;letter-spacing:-1.92px}#app.tfBoard .tfRoomTile[data-rows="5"] .tfRoomBig{font-size:64px;line-height:64px;letter-spacing:-1.92px}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="3"],[data-rows="4"],[data-rows="5"]) .tfRoomDevices{display:grid;grid-template-columns:repeat(2,max-content)}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"]:has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"]:has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="4"],[data-rows="5"]) .tfRoomDevices{min-height:calc(2 * var(--chip-size) + 12px);align-content:start}.tfRoomHeads{display:none;gap:12px 16px}.tfRoomDev{display:flex;align-items:center;gap:12px;min-width:0;padding:0;border:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfRoomDev .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomDev .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfRoomDevName{display:flex;flex-direction:column;min-width:0}.tfRoomDevName>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]){flex-direction:row;align-items:center;gap:12px}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"])>.tfActionHead{flex:1;margin-bottom:0}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]) .tfRoomDevices{display:flex}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-cols="2"]):not([data-rows="1"]) .tfRoomHeads{grid-template-columns:repeat(4,minmax(0,1fr))}#app.tfBoard .tfRoomTile[data-cols="2"][data-rows="2"] .tfRoomDev:nth-child(n+3){display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbWx.wbS90{width:100px;height:100px;border-radius:31px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbDeg{font-size:80px;line-height:80px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbUnit{font-size:30px;line-height:38px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbWeather{flex-direction:row;align-items:center;gap:16px}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNow{flex:none}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNextHours{display:flex;flex:1 1 0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbWeather{justify-content:center;padding-top:0;padding-bottom:0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) :is(.wbNow,.wbSummary){display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbColumns{display:flex;flex:none;height:185px}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsDay{display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsNow{display:inline}#app.tfBoard .tfDash-wx[data-narrow] .wbCard.wbWeather{gap:12px;padding:18px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbWx.wbS90{width:64px;height:64px;border-radius:20px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbDeg{font-size:46px;line-height:46px;letter-spacing:-.92px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbUnit{font-size:20px;line-height:26px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-narrow] .wbHalves{display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="3"] .wbNextHours{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow] .wbHour:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;flex:none;height:auto;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumn:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbHalves{display:none}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx:not([data-narrow])[data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:0}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn{justify-content:flex-start;gap:8px;padding:12px 0 16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn .wbWx{width:40px;height:40px;border-radius:16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbTemps{gap:4px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .workoutPanel.tfAreaPanel{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded{display:grid;grid-template-columns:40px minmax(0,1fr);gap:0 12px;align-content:center}#app.tfBoard .tfAreas[data-rows="1"] :is(.panelExpanded>.workoutPanelTop,.tfACTop){display:contents}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] .tfATitle .tfAName{font-size:14px;line-height:20px;height:auto}#app.tfBoard .tfAreas[data-rows="1"] .tfABig{margin:0;flex-direction:row}#app.tfBoard .tfAreas[data-rows="1"] .tfABigMain{font-size:14px;line-height:18px;letter-spacing:0}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigUnit){font-size:14px}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigSub,.tfATiles,.tfACTiles,.sourceTag){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"]) .tfABig{display:none}#app.tfBoard .tfAreas[data-rows="4"] .tfABig{flex:none;margin-top:auto;margin-bottom:auto}#app.tfBoard .tfAreas[data-rows="4"] .tfATiles{margin-top:0}#app.tfBoard .tfAreas[data-rows="4"] .tfABigMain{font-size:52px}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded{row-gap:12px}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"],[data-rows="4"]) .tfATiles{margin-top:auto}#app.tfBoard .tfAreas[data-rows="2"] .tfATile:nth-child(n+3),#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfATile:nth-child(n+5){display:none}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:608px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-52px;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border:0;border-radius:var(--r-inner);background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(608px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.house :is(.settingsSelect,.addInput){border:1px solid var(--muted)}#app.house{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%23d9d9d9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house.light{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%2326221e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house select.settingsSelect{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 44px 0 16px;background-image:var(--select-chev);background-repeat:no-repeat;background-position:right 16px center;background-size:16px 16px}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}#app.house :is(.tfIcon,.activityRowIcon,.tfAreaIcon,.tfRoomIcon){--chip-hi:.0375;background-image:linear-gradient(180deg,#ffffff08,#fff0)!important;box-shadow:inset 0 1px rgba(255,255,255,var(--chip-hi)),inset 0 -1px color-mix(in srgb,currentColor 3%,transparent),inset 0 -3px 6px color-mix(in srgb,currentColor 3.5%,transparent)}#app.house :is(.on[data-light] .tfIcon,.tfIcon.on[data-light],.tfACTile .tfIcon[data-light],.on[data-tone=alarm] .tfIcon,.tfIcon[data-light]){--chip-hi:.1375}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-xl]{grid-row:span 5}#app.tfBoard .tfDashBento:not([data-rows="5"]) .wbItem[data-xl] .wbCallouts{display:none}#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]) .wbZone{flex:1;height:auto;background:none;box-shadow:none;padding:0;align-items:flex-start}#app.tfBoard .tfDashBento[data-rows="3"] .wbItem[data-xl] .wbCallouts{display:flex;margin-top:0}#app.tfBoard .tfDashBento[data-rows="1"] :is(.wbZone,.wbCallouts){display:none}#app .wbZoneM{display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM){display:flex;align-items:flex-start;justify-content:flex-start}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM)>:not(.wbZoneM){display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZoneM{display:flex}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{grid-auto-flow:row}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-break]{grid-column-start:1}#app.house.tfWeatherOpen #homeView{max-width:none}#app.house #settingsView .toggleList{border-radius:var(--r-card);padding-block:4px}#app.house #settingsView .toggleRow{padding-left:18px;padding-right:18px}#app.house #settingsView .toggleRow:not([hidden])~.toggleRow:before{left:18px}#app.house .view{margin-left:0}#app.house #settingsView .toggleList>.tfCardTitle{display:flex;align-items:center;min-height:28px;padding:14px 18px 2px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfLightView{display:flex;padding:4px 0 14px}#housePane.tfLightCardsOn .houseTab .metaTableWrap,#housePane.tfLightCardsOn .houseTab .tfTableNote{display:none}#housePane.tfLightCardsOn .tfLightCards{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:8px}#housePane:not(.tfLightCardsOn) .tfLightCards{display:none}@container housepane (width < 720px){#housePane:not(.tfLightCardsOn) .houseTab .metaTableWrap{display:none}#housePane:not(.tfLightCardsOn) .tfLightCards{display:grid}}#app.house.light .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house .tfTrayInner{gap:32px}#app.house .tfTraySection{gap:12px}#app.house{--font:Geist,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-family:var(--font)}#app.house #housePane .toggleRow>:is(.themeChoice,.settingsSelect){align-self:flex-start;width:auto;max-width:100%}#app.house #housePane .themeChoice{display:inline-flex}#app.house #housePane .themeChoice>button{flex:0 1 auto;min-width:0;padding:0 16px;overflow:hidden;text-overflow:ellipsis}#app.house #housePane .toggleRow{min-width:0}#app.house #housePane .toggleRow>.settingsSelect{min-width:200px}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments){display:inline-flex;width:auto;align-self:flex-start}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments) button{flex:0 0 auto;padding:0 16px}@media (max-width:620px){#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid{display:flex!important;flex-wrap:wrap;align-items:flex-start;gap:var(--grid-gap);height:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid .tfBoardItem{position:relative!important;left:auto!important;top:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid>.tfBoardItem:not(.tfDash-favs){height:auto!important}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummary{flex:none;margin-top:0;container-type:normal}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummaryText{position:static}}#app.house :is(#housePane .themeChoice,.wb .wbSegments,.tfBoardMenu .tfHeightTabs){height:32px;padding:3px;gap:3px;box-sizing:border-box}#app.house :is(#housePane .themeChoice>button,.wb .wbSegments button,.tfBoardMenu .tfHeightTabs button){height:26px!important;padding:0 12px;border-radius:13px!important;font:600 12px/16px var(--font-tile)!important}.tfPlantProblem{flex:1 1 0;min-height:184px;flex-direction:column}.tfGraph.tfPlantGraph{flex:1 1 0;width:calc(100% - 20px);height:auto;min-height:160px;margin:0 10px}.tfGraph .tfGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:3 4;vector-effect:non-scaling-stroke}.tfGraph .tfGuideWord{font-size:11px}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:inset 0 0 0 1px var(--line)}.tfDashTitle .tfGreeting{display:block;margin-bottom:6px;font:500 20px/1.2 var(--font-tile);letter-spacing:0;color:var(--muted)}#app.tfOverview.tfDash #homeView .tfSum:not([data-summary=alerts]) .tfIcon{background:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar{width:100%;max-width:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:flex;justify-content:space-between}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRow{flex:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows>.activityRow{min-width:0}@media (max-width:620px){#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}}#app.tfOverview.tfDash #homeView .tfDash-favs{padding:10px;border-radius:var(--r-card)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityHeader{display:none}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:60px;row-gap:25px;max-height:100%;margin:0;overflow-y:auto;scrollbar-width:none}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows::-webkit-scrollbar{display:none}.hcFadeList.hcMore{-webkit-mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent);mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{height:60px;min-height:0;padding:10px;box-sizing:border-box}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCard.wbWeather{gap:0;padding:18px}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCondition,#app.tfOverview.tfDash #homeView .tfDash-wx .wbNextHours,#app.tfOverview.tfDash #homeView .tfDash-wx .wbHalves{display:none!important}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummary{flex:none;height:auto;margin:18px 0 0;container:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummaryText{position:static;-webkit-line-clamp:1}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumns{display:flex!important;height:159px;margin-top:auto;border-radius:var(--r-tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn{padding:8px 0;background:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn:hover{background:var(--tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn .wbWx.wbS60{width:60px;height:60px;border-radius:20px}#app.tfOverview.tfDash #homeView .tfRoomTile{padding:18px;gap:0;border-radius:28px}#app.tfOverview.tfDash #homeView .tfRoomTile>.tfActionHead{margin-bottom:0}#app.tfOverview.tfDash #homeView .tfRoomTile .tfActionHead .activityRowMeta{display:none}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomReading{margin-top:35px;gap:0}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomBig{font:400 48px/64px var(--font-tile);letter-spacing:-1.92px}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomSub{display:block;margin-top:-7px;font:400 16px/19px var(--font)}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomDevices{display:flex;justify-content:space-between;min-height:0;margin-top:auto;padding-top:16px}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomHeads{display:none}#app.tfOverview.tfDash #homeView .tfRoomTile:not(:has(.tfRoomDevices :nth-child(4))) .tfRoomDevices{justify-content:flex-start;gap:18.67px}#app.light.tfOverview.tfDash #homeView .tfRoomTile .tfRoomIcon{background-color:#acacac;color:#fff}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar{width:max-content;max-width:100%}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows{justify-content:flex-start}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),auto)}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs{height:auto!important;padding:10px;container-type:normal}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:flex;justify-content:space-between;grid-auto-rows:auto;row-gap:0;max-height:none}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{flex:none;width:240px;height:60px}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows>.activityRow{width:auto;min-width:0}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs{width:max-content!important;max-width:100%}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows{justify-content:flex-start}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),240px)}@media (max-width:620px){#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{width:auto;min-width:0}}#app.tfOverview.tfBoard #homeView .hcFloor{position:absolute;z-index:1;display:flex;align-items:center;height:24px;margin:0;box-sizing:border-box}#app.tfOverview.tfBoard #homeView .hcFloorBox{position:absolute;z-index:0;border-radius:40px;background:color-mix(in srgb,var(--text) 5%,transparent);box-sizing:border-box;pointer-events:none}#app.tfOverview #homeView .hcFloorName{margin:0;font:500 16px/24px var(--font);color:var(--title,var(--text));white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfOverview.tfDash #homeView .tfRoomTile{overflow:hidden}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaL .tfRoomBig{font-size:calc(48px * var(--hc-k,1));line-height:calc(64px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaL .tfRoomReading{margin-top:calc(35px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaM .tfRoomReading{margin-top:calc(14px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaM .tfRoomBig{font-size:calc(40px * var(--hc-k,1));line-height:calc(52px * var(--hc-k,1));letter-spacing:-1.6px}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaM .tfRoomSub{margin-top:-6px}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS{padding:12px}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS .tfRoomReading{margin-top:calc(8px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS .tfRoomBig{font-size:calc(32px * var(--hc-k,1));line-height:calc(40px * var(--hc-k,1));letter-spacing:-1.28px}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS .tfRoomSub{display:none}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaM,.hcAreaS) .tfRoomDevices,#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaM,.hcAreaS):not(:has(.tfRoomDevices :nth-child(4))) .tfRoomDevices{display:flex;flex-wrap:wrap;justify-content:flex-start;gap:0 8px;height:var(--chip-size);overflow:hidden;padding-top:0;margin-top:auto}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS .tfRoomReading{flex:none}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomReading{margin-bottom:12px}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomBig{font-size:calc(64px * var(--hc-k,1));line-height:calc(80px * var(--hc-k,1));letter-spacing:-2.56px}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomReading{margin-top:calc(35px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomSub{display:block}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomDevices{display:none!important}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));margin-top:auto}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem.tfRoomTile{cursor:default;outline:0}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfRoomTile){cursor:grab;-webkit-user-select:none;user-select:none;touch-action:none;outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem.tfRoomTile{border-radius:28px}#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:left .34s cubic-bezier(.2,1.35,.4,1),top .34s cubic-bezier(.2,1.35,.4,1)}@media (prefers-reduced-motion:reduce){#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:none}}#app.hcHomeEditing #homeView .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}@media (max-width:620px){#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomDevices{display:grid;grid-template-columns:repeat(2,max-content);gap:12px;justify-content:start}}.tfEditTray .tfTrayInner{scrollbar-width:none}.tfEditTray .tfTrayInner::-webkit-scrollbar{display:none}.hcHeChoiceLine{flex-wrap:wrap;gap:8px 12px}.hcHeChoiceLine>.hcHeChoice{margin-left:auto}.hcHeChoice.themeChoice{display:inline-flex;flex-wrap:nowrap;height:32px;padding:3px;gap:3px;box-sizing:border-box;border-radius:16px;background:var(--control-2,var(--hc-icon))}#app .hcHeChoice>button{height:26px!important;min-height:0;padding:0 12px;border:0;border-radius:13px!important;background:none;color:var(--text);font:600 12px/16px var(--font-tile)!important;white-space:nowrap}#app .hcHeChoice>button[aria-pressed=true]{background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all)}.hcHeBody{display:flex;flex-direction:column;gap:12px}.hcHeBody>.tfTrayNote{margin:0 0 8px}.hcHeLabel{display:flex;align-items:center;gap:4px}.hcHeLine{display:flex;align-items:center;gap:4px;min-height:44px}.hcHeLine>.activityRowName{min-width:0}.hcHeLine>.switch{margin-left:auto}.hcHeLink{display:inline;min-height:0;padding:0;border:0;background:none;font:inherit;color:var(--primary);text-decoration:underline;cursor:pointer}.hcHeList{display:flex;flex-direction:column;gap:2px;margin:0;padding:0;list-style:none}.hcHeRow{display:grid;grid-template-columns:36px var(--chip-size) minmax(0,1fr) auto;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 4px;border-radius:var(--r-tile)}.hcHeRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.hcHeRow.moving{background:var(--card);box-shadow:var(--hc-hair-all)}.hcHeGrip{color:var(--muted);cursor:grab;touch-action:none}.hcHeSum .tfIcon{color:var(--sum-ink,var(--hc-icon-ink))}#app .hcHeRow.hcHeSum .tfIcon{background-color:transparent}#app.house .hcHeSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .hcHeSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}.hcInfoBtn{display:grid;place-items:center;flex:none;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:var(--r-fine,12px);background:none;color:var(--muted);cursor:pointer}.hcInfoBtn svg{width:18px;height:18px;fill:currentColor}.hcInfoBtn:hover,.hcInfoBtn[aria-expanded=true]{background:var(--tile);color:var(--text)}.hcInfoPop{position:fixed;z-index:320;width:280px;max-width:calc(100vw - 16px);display:flex;flex-direction:column;gap:8px;padding:16px;border-radius:var(--r-inner);box-shadow:var(--hc-hair-all),0 8px 28px #0000002e}.hcInfoPop[hidden]{display:none}.hcInfoTitle{font:600 14px/20px var(--font-tile);color:var(--text)}.hcInfoText{font:400 14px/1.45 var(--font);color:var(--text)}.hcInfoText p{margin:0}.hcInfoText ul{margin:6px 0 0;padding-left:18px}.hcInfoMore{align-self:flex-start;font:600 14px/20px var(--font-tile);color:var(--primary);text-decoration:underline}#app .tfTrayAdd.hcAddBtn{display:inline-flex;align-items:center;gap:6px;height:32px;min-height:0;margin:10px 0 12px;padding:0 16px 0 12px;border:0;border-radius:16px!important;background:#03a9f4;color:#fff;font:600 14px/20px var(--font-tile);text-decoration:none!important}#app .tfTrayAdd.hcAddBtn svg{width:18px;height:18px;flex:none;fill:currentColor}#app .tfTrayAdd.hcAddBtn:hover{background:#0398dc}#app .tfTrayAdd.hcAddBtn[aria-expanded=true]{background:#0288d1}.tfEditTray:not(.hcHomeTray) .tfTraySection:not(.hcFirst){padding-top:20px;border-top:1px solid var(--line)}#app.house .tfEditTray:not(.hcHomeTray) .tfTrayInner{gap:20px}.hcHeRule{width:100%;height:0;margin:8px 0;border:0;border-top:1px solid var(--line)}.tfEditTray .hcTrayTabs{display:flex;align-self:stretch;margin:0 0 4px;flex:none}.tfEditTray .hcTrayTabs .tab{flex:1 1 0;min-height:36px;padding:0 10px;font:600 14px/20px var(--font-tile)}.tfEditTray .hcTrayTabs .rubberIndicator{background:var(--text)}.tfEditTray .hcTrayTabs .tab.active{color:var(--card)}.tfEditTray .tfTraySection[hidden]{display:none!important}.hcHeTabBody{display:flex;flex-direction:column;gap:8px}.hcHomeTray .hcTrayTabs{margin:0 0 8px}#homeView .grid.tfStack{grid-auto-rows:1px;row-gap:0}#homeView .grid.tfStack>*{align-self:start}.tfTrayPop{position:fixed;z-index:260;right:calc(min(608px,100vw - 56px) + 12px);width:300px;max-width:calc(100vw - 80px);display:grid;gap:2px;padding:10px!important;background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfTrayPop[hidden]{display:none}.tfTrayPopTitle{padding:4px 8px 8px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfTrayPopRow{display:flex;align-items:center;gap:12px;min-height:var(--tile-min);padding:0 8px}.tfTrayPopRow .tfIcon{background-color:var(--hc-icon)}.tfTrayPopName{flex:1;min-width:0;font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(600px,85dvh)}#app .tfMoreBackdrop:not(.wide) .tfMorePages{flex:1 1 auto;min-height:0;height:auto!important;align-items:stretch}#app .tfMoreBackdrop:not(.wide) .tfMorePage{overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}#app .tfMoreBackdrop:not(.wide) .tfMorePage[aria-label=Control]>:first-child{margin-top:auto}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace{flex:1 1 auto;height:auto;min-height:224px}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill{min-height:0;container-type:size}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill>.tfCoverArt{width:min(100%,100cqh);height:auto}.tfMorePage[aria-label=Control]>:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink)+:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink){margin-top:14px}.tfMoreSwitch{display:flex;align-items:center;justify-content:center;min-height:0;padding:0;border-radius:0;background:none}.tfMoreSwitch .tfIcon{width:min(240px,100%);height:min(240px,100%);aspect-ratio:1;min-height:0;border:0;padding:0;border-radius:40%;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer;--mdc-icon-size:204px}.tfMoreSwitch.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreSwitch.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}@media (max-width:620px){#app .tfMoreBackdrop{place-items:end center;padding:0 16px max(16px,env(safe-area-inset-bottom,0px))}#app .tfMoreBackdrop .tfMorePair{width:100%;max-height:85dvh}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){width:100%;border-radius:34px;box-shadow:inset 0 0 0 1px var(--line),0 10px 30px #00000047}#app .tfMoreBackdrop .tfMore{padding-top:10px;outline:none}#app .tfMoreBackdrop .tfMore:before{content:"";display:block;position:sticky;top:10px;z-index:2;flex:none;width:36px;height:5px;margin:0 auto;border-radius:3px;background:var(--line)}#app .tfMoreBackdrop .tfMore [data-more-close]{display:none}}`, Bf = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);fill-opacity:.14}.wbChart .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbAsNow{display:none}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbNextHours{display:none;justify-content:space-between;align-items:center;gap:8px;min-width:0}.wbHour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}.wbHourTime{color:var(--muted);font:400 14px/20px var(--font);white-space:nowrap}.wbHourTemp{font:400 18px/20px var(--font-tile);white-space:nowrap}.wbHour .wbWx.wbS40{width:40px;height:40px;border-radius:16px}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumn .wbWx.wbS60{width:40px;height:40px;border-radius:14px}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbSunTile .wbZone{display:block}.wbSunZone{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff;transition:background 1s ease}.wbSunTrack{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbSunBand{fill:#fff;fill-opacity:.1}.wbSunBand.wbSunDay{fill-opacity:.14}.wbSunBand.wbSunDone{fill-opacity:.85}.wbSunDot{fill:#ffd84a}.wbSunDot.wbSunNight{fill:#9aa3c7}.wbSunCount{position:absolute;top:22px;right:22px;bottom:22px;left:22px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding-bottom:14px}.wbSunLeft{font:500 clamp(28px,calc(16cqw * var(--wb-k,1)),36px)/1.1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums;white-space:nowrap}.wbSunWord{font:400 13px/18px var(--font);opacity:.85}.wbSunAt{position:absolute;bottom:32px;font:500 12px/16px var(--font);opacity:.85;font-variant-numeric:tabular-nums}.wbSunRise{left:32px}.wbSunSet{right:32px}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbTrend{position:relative;width:100%;height:100%;min-height:0}.wbTrendPlot{position:absolute;top:22px;right:0;bottom:24px;left:0}.wbTrendPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbTrendLine{fill:none;stroke:var(--text);stroke-width:2;stroke-linejoin:round;stroke-linecap:round;opacity:.8}.wbTrendDot{position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:var(--card);box-shadow:0 0 0 2px var(--text)}.wbTrendDot.wbToday{width:11px;height:11px;margin:-5.5px 0 0 -5.5px;background:var(--primary);box-shadow:0 0 0 3px var(--card)}.wbAvgValue{position:absolute;transform:translate(-50%,calc(-100% - 8px));color:var(--muted);font:400 10px/1 var(--font-tile);white-space:nowrap}.wbAvgValue.wbToday{color:var(--text);font-size:12px;font-weight:600}.wbTrendAvg{position:absolute;right:0;transform:translateY(4px);color:var(--muted);font:400 10px/1 var(--font-tile)}.wbTrendDays{position:absolute;left:0;right:0;bottom:0;height:16px}.wbAvgDay{position:absolute;bottom:0;transform:translate(-50%);color:var(--muted);font:400 11px/16px var(--font-tile)}.wbAvgDay.wbToday{color:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}.wbZoned{gap:14px}.wbZone{position:relative;flex:none;height:198px;display:flex;align-items:center;justify-content:center;border-radius:16px;overflow:hidden}.wbCallouts{display:none;flex-direction:column;gap:4px;margin-top:-6px}.wbCallout{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbCallout>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbCallout>span:last-child{flex:none;color:var(--text);white-space:nowrap}.wbZone>.wbSunSky{flex:1;align-self:stretch;border-radius:0}.wbZone>.wbMoonBox{flex:none;height:150px}.wbBase .wbZone{align-items:flex-end;justify-content:flex-start}.wbZone>.wbTapeRow{align-self:stretch;height:100%}.wbItem[data-xl] .wbCallouts{display:flex}.wbUv .wbZone{display:block}.wbUvArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbUvBig{position:absolute;right:0;bottom:0;display:flex;flex-direction:column;align-items:flex-end}.wbUvNum{font:500 64px/.9 var(--font-tile);letter-spacing:-.03em;color:var(--text);font-variant-numeric:tabular-nums}.wbUvWord{margin-top:6px;font:400 14px/20px var(--font);color:var(--muted)}.wbAqSmile .wbZone{display:block}.wbAqFill{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff}.wbAqFace{position:absolute;left:12px;top:12px;width:min(140px,calc(100% - 60px));height:auto;aspect-ratio:1;fill:none;stroke:currentColor;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round}.wbAqFace .wbAqEyes{stroke-width:5}.wbAqBig{position:absolute;right:14px;bottom:12px;display:flex;flex-direction:column;align-items:flex-end}.wbAqNum{font:500 56px/.9 var(--font-tile);letter-spacing:-.03em;font-variant-numeric:tabular-nums}.wbAqUnit{margin-top:4px;font:500 14px/20px var(--font)}.wbPollenAir{position:absolute;top:0;right:0;bottom:62px;left:0;overflow:hidden;pointer-events:none}.wbFloat{position:absolute;left:-12%;animation:wbFloat linear infinite}.wbBob{display:block;animation:wbBob ease-in-out infinite alternate}@keyframes wbFloat{0%{left:-12%}to{left:106%}}@keyframes wbBob{0%{transform:translateY(-6px) rotate(-14deg)}to{transform:translateY(8px) rotate(16deg)}}.wbFloat svg{display:block}.wbSeed svg{width:calc(20px * var(--s));height:calc(28px * var(--s))}.wbGrain svg{width:calc(10px * var(--s));height:calc(10px * var(--s))}.wbStem svg{width:calc(9px * var(--s));height:calc(26px * var(--s))}.wbSeed{color:var(--text);opacity:.7}.wbGrain{color:#e9c46a;opacity:.85}.wbStem{color:#a3b18a;opacity:.75}#app.light .wbGrain{color:#c99a1e}#app.light .wbStem{color:#7d8c5f}@media (prefers-reduced-motion:reduce){.wbFloat,.wbBob{animation:none}.wbFloat{left:var(--x)}}.wbPush{display:block;transition:transform .35s cubic-bezier(.2,.8,.3,1)}.wbCallout.wbAdvice>span:first-child{color:var(--text)}.wbCard.wbSquare.wbGraphCard{height:100%;min-height:0}.wbGraphCard .wbHead .wbBack{margin:-4px -6px 0 auto}.wbGraphCard .wbRangeBtn{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;max-width:100%;height:32px;padding:0 8px 0 10px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:600 12px/16px var(--font-tile);cursor:pointer}.wb button.wbRangeBtn{border-radius:12px!important}.wbRangeBtn>span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRangeBtn .wbIcon{flex:none;width:16px;height:16px;fill:currentColor}.wbRangeBtn[aria-expanded=true]{background:var(--bright);color:var(--on-bright)}.wbItem:has(.wbRangePick){position:relative;z-index:30}.wbRangePick{position:absolute;top:116px;left:18px;z-index:30;display:flex;flex-direction:column;gap:12px;width:248px;box-sizing:border-box;padding:12px;border-radius:24px;background:var(--card);box-shadow:var(--hc-hair-all),0 18px 40px #00000059}.wbRangePick.wbPickRight{left:auto;right:18px}.wbRangePresets{display:flex;flex-direction:column;gap:2px}.wb .wbRangePreset{height:32px;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--text);font:400 14px/20px var(--font);text-align:left;cursor:pointer}.wb .wbRangePreset:hover{background:var(--tile)}.wb .wbRangePreset[aria-pressed=true]{background:var(--bright);color:var(--on-bright);font-weight:600}.wbRangeDates{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:12px;box-shadow:inset 0 .4px 0 var(--line)}.wbRangeDates label{display:grid;gap:4px;min-width:0;color:var(--muted);font:400 12px/16px var(--font)}.wbRangeDates input{width:100%;min-width:0;height:32px;box-sizing:border-box;padding:0 6px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 12px/16px var(--font);color-scheme:inherit}.wb .wbRangeApply{height:32px;padding:0 14px;border:0;border-radius:999px!important;background:var(--bright);color:var(--on-bright);font:600 12px/16px var(--font-tile);cursor:pointer}.wbGraphCard .wbGraph{flex:1;height:auto;min-height:0}`, Rf = '#app .mvPv{position:relative;transform:perspective(var(--pv-persp)) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--sc,1));transition:transform var(--pv-ret) var(--pv-ease)}#app .mvPv.mvMoving{transition:transform 70ms linear}#app .mvPv:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;opacity:0;mix-blend-mode:soft-light;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,var(--pv-shine)),transparent var(--pv-size));transition:opacity var(--pv-ret) ease}#app .mvPv.mvLit:after{opacity:1}#app .tfBar{--mv-c:var(--light-soft,var(--primary));transform-origin:center;transition:box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}#app .tfBar.mvHover{box-shadow:0 0 var(--ab-blur) var(--ab-spread) color-mix(in srgb,var(--mv-c) var(--ab-str),transparent);transition-duration:var(--ab-in)}#app .tfBar.mvHold{box-shadow:0 0 var(--ab-blur2) var(--ab-spread2) color-mix(in srgb,var(--mv-c) var(--ab-str2),transparent);transform:var(--ab-grow);transition-duration:var(--ab-in)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>:is(svg,ha-icon,ha-state-icon,span){transition:scale var(--ih-dur) var(--ih-ease)}@media (hover:hover){#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-s)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover:before{opacity:1}}:where(#app button.tfIcon,#app .tfBack,#app .tfEditChip,#app .tfTrayBtn,#app [data-wb=graph-close]){position:relative}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;background:color-mix(in srgb,currentColor var(--ih-tint),transparent);opacity:0;transition:opacity var(--ih-dur) var(--ih-ease)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):active>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-p)}#app .mvSegInd{position:absolute;z-index:0;pointer-events:none}#app .mvSegMoving>button{position:relative;z-index:1;background-color:transparent!important;box-shadow:none!important;transition:none!important}#app .tfMoreBackdrop{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}#app .toast.tfToast{min-height:58px;box-sizing:border-box;padding:9px 18px 9px 9px;gap:14px;border-radius:29px;font-size:18px;line-height:1.2}#app .toast .mvTick{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--mv-ok);color:#fff}#app .toast .mvTick svg{width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}#app .toast .mvToastText{font-weight:600}#app .toast .toastAction{font-size:16px;margin-left:2px}#app .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}#app{--ol-l:68%;--mv-ok:#4cc38a}#app.light{--ol-l:48%;--mv-ok:#1f7a4d}#app .tfAreaPanel:has(>.mvEdge){isolation:isolate;position:relative}#app .mvEdge,#app .mvEdgeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity var(--ol-in) ease-out}#app .mvEdgeFill{z-index:-1;background:hsl(var(--ol-h) 97% var(--ol-l));mix-blend-mode:soft-light;opacity:clamp(0,calc(var(--ol-fill) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-fill));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app .mvEdge{z-index:5}#app .mvEdge:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l));opacity:clamp(0,calc(var(--ol-border) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-border));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%));mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%))}#app .mvEdge>i{position:absolute;top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;border-radius:inherit;mix-blend-mode:plus-lighter;opacity:clamp(0,calc(var(--ol-glow) * (var(--edge-proximity,0) - var(--ol-esens)) / (100 - var(--ol-esens))),var(--ol-glow));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}#app .mvEdge>i:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;--s:var(--ol-size);box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l) / 60%),inset 0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),inset 0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),inset 0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(22.4px*var(--s)) calc(1.6px*var(--s)) hsl(var(--ol-h) 97% var(--ol-l) / 10%)}#app :not(.mvLitEdge)>:is(.mvEdge,.mvEdgeFill){opacity:0;transition:opacity var(--ol-out) ease-out}@media (prefers-reduced-motion:reduce){#app .mvPv{transform:none!important}#app .mvPv:after{display:none}#app .tfBar.mvHold{transform:none}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>*{scale:none!important}}#app .tfBoardItem.mvDrag{scale:none}#app.tfEditing.tfBoardReady .tfBoardItem:not(.tfDragging){transition:left .42s cubic-bezier(.34,1.46,.64,1),top .42s cubic-bezier(.34,1.46,.64,1),height .42s cubic-bezier(.34,1.46,.64,1)}', Pf = `<main id="app"><div class="shell">
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
`, Wn = {
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
}, On = (n) => n < 0 ? 0 : n > 1 ? 1 : n, _p = (n, l, i) => n + (l - n) * i, mp = (n) => {
  const l = String(n || "#000000").trim().replace("#", ""), i = l.length === 3 ? l.split("").map((u) => u + u).join("") : l;
  return [0, 2, 4].map((u) => parseInt(i.slice(u, u + 2), 16) || 0);
}, Nf = (n) => "#" + n.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), Bp = {}, ga = (n, l, i) => {
  const u = n + l + i;
  return Bp[u] || (Bp[u] = Nf(mp(n).map((v, y) => v + (mp(l)[y] - v) * i)));
}, Rp = {}, hc = (n) => Rp[n] || (Rp[n] = mp(n)), $c = (n, l, i, u) => (v) => {
  if (v <= 0) return 0;
  if (v >= 1) return 1;
  let y = 0, k = 1, E = v;
  for (let I = 0; I < 18; I++)
    E = (y + k) / 2, 3 * (1 - E) * (1 - E) * E * n + 3 * (1 - E) * E * E * i + E * E * E < v ? y = E : k = E;
  return 3 * (1 - E) * (1 - E) * E * l + 3 * (1 - E) * E * E * u + E * E * E;
}, Hf = { std: $c(0.2, 0, 0, 1), acc: $c(0.3, 0, 1, 1), dec: $c(0, 0, 0, 1) };
function Sc(n, l) {
  const i = String(n || "");
  return (i === "sunny" || i === "clear-night" ? "clear" : i === "partlycloudy" ? "partly" : i === "fog" ? "fog" : i === "lightning" || i === "lightning-rainy" ? "storm" : i === "snowy" || i === "snowy-rainy" ? "snow" : i === "rainy" || i === "pouring" || i === "hail" ? "rain" : "cloudy") + "/" + (i === "clear-night" || l ? "night" : "day");
}
function Iu(n) {
  const l = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return l.partly = [ga(l.clear[0], l.cloudy[0], 0.12), ga(l.clear[1], l.cloudy[1], 0.12)], l.storm = [ga(l.rain[0], "#000000", 0.22), ga(l.rain[1], "#000000", 0.22)], l;
}
const gp = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], vp = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], bp = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function wp(n, l = Wn) {
  const i = { ...Wn, ...l }, u = Iu(i), v = String(n).split("/"), y = u[v[0]] ? v[0] : "clear", k = v[1] === "night", E = u[y][k ? 1 : 0], I = {
    night: k,
    clearness: y === "clear" ? 1 : y === "partly" ? 0.7 : 0.25,
    sky: E,
    skyStops: [E],
    skyT: 0,
    sun: { x: 45, y: k ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: k ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: k ? 1 : 0 },
    stars: gp.map(() => ({ o: 0 })),
    rain: vp.map(() => ({ o: 0, dy: -16 })),
    snow: bp.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, M = (W) => gp.map(() => ({ o: W }));
  return y === "clear" ? k ? (I.moon.o = 1, I.stars = M(1)) : I.sun.o = 1 : y === "partly" ? (I.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: k ? 1 : 0 }, k ? (I.moon = { x: 34, y: 33, d: 48, o: 1 }, I.stars = M(0.7)) : I.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : y === "cloudy" || y === "fog" ? (I.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: k ? 1 : 0 }, k ? I.moon = { x: 40, y: 36, d: 40, o: 0 } : I.sun = { x: 40, y: 36, r: 20, o: 0 }) : (I.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, k ? I.moon = { x: 38, y: 28, d: 36, o: 0 } : I.sun = { x: 38, y: 28, r: 18, o: 0 }, y === "snow" ? I.snow = bp.map(() => ({ o: 1, dy: 0 })) : I.rain = vp.map((W, F) => ({ o: y === "storm" && F === 1 ? 0 : 1, dy: 0 })), y === "storm" && (I.bolt = { o: 1, dy: 0 })), I;
}
const Pp = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function If(n, l, i, u = Wn, v = !1) {
  const y = { ...Wn, ...u }, k = (q, j) => q > 0.01 && j > 0.01 ? "stay" : q > 0.01 ? "leave" : j > 0.01 ? "enter" : "none", E = (q, j, ue, ee) => {
    const $ = q[0] + j * ee, z = q[1] - (ue - 1 - j) * ee;
    return Hf[q[2]](On((i - $) / Math.max(1e-3, z - $)));
  }, I = (q, j, ue, ee = 0, $ = 1, z = 0) => {
    const me = k(q.o, j.o);
    if (me === "none") return { ...j, o: 0 };
    const pe = E(Pp[ue][me], ee, $, z), Se = {};
    for (const ie in j) Se[ie] = v && me !== "stay" && ie !== "o" ? me === "leave" ? q[ie] : j[ie] : _p(q[ie], j[ie], pe);
    return Se;
  }, M = E(Pp.sky, 0, 1, 0);
  let W, F;
  if (n.night !== l.night) {
    const q = Math.min(n.clearness, l.clearness), j = ga(ga(n.sky, l.sky, 0.5), y.dusk, 0.6 * q);
    W = M < 0.5 ? ga(n.sky, j, M * 2) : ga(j, l.sky, M * 2 - 1), F = q > 0.5 ? [n.sky, y.dusk, l.sky] : [n.sky, l.sky];
  } else
    W = ga(n.sky, l.sky, M), F = [n.sky, l.sky];
  return {
    night: i < 0.5 ? n.night : l.night,
    clearness: _p(n.clearness, l.clearness, i),
    sky: W,
    skyStops: F,
    skyT: M,
    sun: I(n.sun, l.sun, "body"),
    moon: I(n.moon, l.moon, "body"),
    cloud: I(n.cloud, l.cloud, "cloud"),
    stars: l.stars.map((q, j) => I(n.stars[j], q, "fx", j, l.stars.length, 0.05)),
    rain: l.rain.map((q, j) => I(n.rain[j], q, "fx", j, l.rain.length, 0.05)),
    snow: l.snow.map((q, j) => I(n.snow[j], q, "fx", j, l.snow.length, 0.05)),
    bolt: I(n.bolt, l.bolt, "fx")
  };
}
const Ff = [
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
], Fn = (n, l) => (Ff[(l & 7) * 8 + (n & 7)] + 0.5) / 64, Of = 0, kp = 1, Mp = 2, Sp = 3, Cp = 4, In = 5, Rl = 6, os = 7, Tp = 8, wc = (n, l) => l <= 0.6665 && ((n - 0.5) * (n - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && l >= 0.416), qf = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], Wf = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((n) => [n[0] * 13 / 11, n[1] * 28 / 24]), Fu = (n, l, i) => {
  let u = !1;
  for (let v = 0, y = n.length - 1; v < n.length; y = v++) {
    const k = n[v], E = n[y];
    k[1] > i != E[1] > i && l < (E[0] - k[0]) * (i - k[1]) / (E[1] - k[1]) + k[0] && (u = !u);
  }
  return u;
};
function Ou(n, { size: l = 90, px: i = 2, oneBit: u = !1, colors: v = Wn, ink: y = "#26221e", paper: k = "#fbf9f6", clock: E = 0, idle: I = !1 } = {}) {
  const M = { ...Wn, ...v }, W = Math.sin, F = Math.PI * 2, q = Math.max(6, Math.round(l / i)), j = q / 90, ue = I ? Math.floor(E / 100) * 100 : 0, ee = I ? W(F * ue / 3600) : 0, $ = I ? 1.8 * W(F * ue / 6400) : 0, z = I ? 0.9 * W(F * ue / 4100) : 0, me = I ? 0.8 * W(F * ue / 5200) : 0, pe = ue / 3400 % 1, Se = I && n.bolt.o > 0.5 && (pe < 0.04 || pe > 0.08 && pe < 0.11), ie = new Array(q * q), oe = new Uint8Array(q * q), ne = (A, R, L, te, de) => {
    L == null || A < 0 || R < 0 || A >= q || R >= q || (te >= 1 || te > Fn(A + 5, R + 3)) && (ie[R * q + A] = L, oe[R * q + A] = de);
  }, D = (A, R, L, te) => {
    for (let de = Math.max(0, Math.floor(R - L) - 1); de <= Math.min(q - 1, R + L + 1); de++) for (let ce = Math.max(0, Math.floor(A - L) - 1); ce <= Math.min(q - 1, A + L + 1); ce++) te(ce, de, ce + 0.5 - A, de + 0.5 - R);
  }, Ce = n.skyStops || [n.sky], le = n.skyT || 0;
  for (let A = 0; A < q; A++) {
    const R = n.night ? On(1 - (A + 0.5) / (q * 0.7)) * 0.85 : On(((A + 0.5) / q - 0.35) / 0.65) * 0.85;
    for (let L = 0; L < q; L++) {
      let te = Ce[0];
      if (Ce.length > 1) {
        const de = le * (Ce.length - 1), ce = Math.min(Ce.length - 2, Math.floor(de));
        te = de - ce > Fn(L, A) ? Ce[ce + 1] : Ce[ce];
      }
      R > Fn(L + 2, A + 5) && (te = n.night ? ga(te, "#000000", 0.28) : ga(te, "#ffffff", 0.2)), ie[A * q + L] = Se ? ga(te, "#ffffff", 0.25) : te;
    }
  }
  if (n.sun.o > 0.01) {
    const A = n.sun.x * j, R = n.sun.y * j, L = Math.max(1, n.sun.r * j);
    if (I) {
      const te = L * (1.45 + 0.06 * ee), de = ga(M.sun, "#ffffff", 0.55);
      if (D(A, R, te, (ce, ye, Me, Le) => {
        const Xe = Math.sqrt(Me * Me + Le * Le);
        Xe > L && Xe < te && ne(ce, ye, de, 0.26 * (1 - (Xe - L) / (te - L)) * n.sun.o, Of);
      }), n.sun.o > 0.5) {
        const ce = Math.floor(ue / 500) % 2, ye = Math.max(1, L * 0.22);
        for (let Me = 0; Me < 8; Me++) if (Me % 2 === ce) for (let Le = L + 1.5; Le < L + 1.5 + ye; Le += 0.7) ne(Math.floor(A + Math.cos(Me * Math.PI / 4) * Le), Math.floor(R + Math.sin(Me * Math.PI / 4) * Le), M.sun, n.sun.o, Tp);
      }
    }
    D(A, R, L, (te, de, ce, ye) => {
      if (ce * ce + ye * ye > L * L) return;
      const Me = ((ce * 0.643 + ye * 0.766) / L + 1) / 2;
      ne(te, de, On((Me - 0.62) / 0.38) > Fn(te, de) ? M.sunEdge : M.sun, n.sun.o, kp);
    });
  }
  if (gp.forEach((A, R) => {
    const L = n.stars[R].o;
    if (L < 0.01) return;
    const te = Math.floor(A[0] * j), de = Math.floor(A[1] * j), ce = I ? (Math.floor(ue / 300) + R * 3) % 6 : 0;
    if (ce === 5) return;
    const ye = Math.round(A[2] * j * (ce === 4 ? 0.3 : ce < 2 ? 1 : 0.6));
    ne(te, de, M.star, L, os);
    for (let Me = 1; Me <= ye; Me++) {
      const Le = Me === ye && ye > 1 ? ga(M.star, n.sky, 0.5) : M.star;
      ne(te - Me, de, Le, L, os), ne(te + Me, de, Le, L, os), ne(te, de - Me, Le, L, os), ne(te, de + Me, Le, L, os);
    }
  }), n.moon.o > 0.01) {
    const A = Math.max(1.5, n.moon.d * j * 0.37), R = n.moon.x * j, L = n.moon.y * j + (I && me > 0.4 ? -1 : 0), te = R + 0.547 * A, de = L - 0.503 * A, ce = 0.82 * A, ye = ga(M.moon, "#ffffff", 0.6);
    D(R, L, A, (Me, Le, Xe, ct) => {
      if (Xe * Xe + ct * ct > A * A) return;
      const Re = Me + 0.5 - te, ja = Le + 0.5 - de;
      Re * Re + ja * ja <= ce * ce || ne(Me, Le, On((ct + A) / (2 * A) * 1.1 - 0.1) > Fn(Me, Le) ? M.moon : ye, n.moon.o, Mp);
    });
  }
  const Oe = Math.max(2, Math.round(15.65 * j)), re = Math.max(1, Math.round(5.87 * j * 0.5));
  vp.forEach((A, R) => {
    const L = n.rain[R];
    let te = L.dy, de = L.o;
    if (de < 0.01) return;
    if (I) {
      const Me = (ue / 950 + R / 3) % 1;
      te += -5 + Me * 14, de *= Me < 0.18 ? Me / 0.18 : Me > 0.72 ? (1 - Me) / 0.28 : 1;
    }
    const ce = (A[0] + 3 + $) * j, ye = (A[1] + te) * j;
    for (let Me = 0; Me < Oe; Me++) for (let Le = 0; Le < re; Le++) ne(Math.floor(ce - 0.208 * Me) + Le, Math.floor(ye) + Me, M.rain, de, Cp);
  });
  const Ze = Math.max(0, Math.round(7.34 * j / 2.6));
  if (bp.forEach((A, R) => {
    const L = n.snow[R];
    let te = L.dy, de = 0, ce = L.o;
    if (ce < 0.01) return;
    if (I) {
      const Le = (ue / 3200 + R / 5) % 1;
      te += -6 + Le * 14, de = 1.5 * W(F * (Le * 1.5 + R / 5)), ce *= Le < 0.2 ? Le / 0.2 : Le > 0.75 ? (1 - Le) / 0.25 : 1;
    }
    const ye = Math.floor((A[0] + 3.67 + de + $) * j), Me = Math.floor((A[1] + 3.67 + te) * j);
    ne(ye, Me, M.snow, ce, In);
    for (let Le = 1; Le <= Ze; Le++)
      ne(ye - Le, Me, M.snow, ce, In), ne(ye + Le, Me, M.snow, ce, In), ne(ye, Me - Le, M.snow, ce, In), ne(ye, Me + Le, M.snow, ce, In), Ze > 1 && Le < Ze && (ne(ye - Le, Me - Le, M.snow, ce, In), ne(ye + Le, Me - Le, M.snow, ce, In), ne(ye - Le, Me + Le, M.snow, ce, In), ne(ye + Le, Me + Le, M.snow, ce, In));
  }), n.bolt.o > 0.01)
    if (q >= 30) {
      const A = 39 + $, R = 50 + n.bolt.dy;
      for (let L = Math.floor(R * j); L <= (R + 28) * j; L++) for (let te = Math.floor(A * j); te <= (A + 13) * j; te++)
        Fu(Wf, (te + 0.5) / j - A, (L + 0.5) / j - R) && ne(te, L, M.sun, n.bolt.o, Rl);
    } else {
      const A = q / 18, R = 7, L = 10 + Math.round(n.bolt.dy * 0.2);
      qf.forEach((te, de) => te.split("").forEach((ce, ye) => {
        if (ce !== "#") return;
        const Me = Math.floor((R + ye) * A), Le = Math.floor((L + de) * A);
        for (let Xe = Le; Xe < Math.max(Le + 1, Math.floor((L + de + 1) * A)); Xe++) for (let ct = Me; ct < Math.max(Me + 1, Math.floor((R + ye + 1) * A)); ct++) ne(ct, Xe, M.sun, n.bolt.o, Rl);
      }));
    }
  if (n.cloud.o > 0.01) {
    const A = Math.max(3, n.cloud.w * j), R = A * 0.6665, L = (n.cloud.x + $) * j - A / 2, te = (n.cloud.y + z) * j - R / 2, de = ga(M.cloudDay, M.cloudNight, Math.round(n.cloud.f * 4) / 4), ce = ga(de, "#000000", 0.16);
    for (let ye = Math.max(0, Math.floor(te) - 1); ye <= Math.min(q - 1, te + R + 1); ye++) for (let Me = Math.max(0, Math.floor(L) - 1); Me <= Math.min(q - 1, L + A + 1); Me++) {
      const Le = (Me + 0.5 - L) / A, Xe = (ye + 0.5 - te) / A;
      wc(Le, Xe) && ne(Me, ye, !wc(Le, Xe + 1 / A) || On((Xe - 0.42) / 0.25) * 0.8 > Fn(Me, ye) ? ce : de, n.cloud.o, Sp);
    }
  }
  return qu(ie, oe, q, q, { oneBit: u, ink: y, paper: k, snowInk: !n.night });
}
function qu(n, l, i, u, { oneBit: v, ink: y, paper: k, snowInk: E }) {
  const I = new Uint8ClampedArray(i * u * 4), M = hc(y), W = hc(k);
  for (let F = 0; F < u; F++) for (let q = 0; q < i; q++) {
    const j = F * i + q, ue = l[j];
    if (n[j] == null) continue;
    let ee = hc(n[j]);
    if (v) {
      let $;
      ue === Cp || ue === Tp ? $ = !0 : ue === In ? $ = E : ue === os || ue === Rl ? $ = !1 : $ = Math.round((0.2126 * ee[0] + 0.7152 * ee[1] + 0.0722 * ee[2]) / 255 * 4) / 4 <= Fn(q, F), (ue === kp || ue === Mp || ue === Sp || ue === Rl) && (q > 0 && l[j - 1] !== ue || q < i - 1 && l[j + 1] !== ue || F > 0 && l[j - i] !== ue || F < u - 1 && l[j + i] !== ue) && ($ = !0), ee = $ ? M : W;
    }
    I[j * 4] = ee[0], I[j * 4 + 1] = ee[1], I[j * 4 + 2] = ee[2], I[j * 4 + 3] = 255;
  }
  return { w: i, h: u, data: I };
}
const Vf = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, jf = (n) => Sc(n, !1).split("/")[0], Xc = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let l = Math.imul(n ^ n >>> 15, 1 | n);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, zf = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Gf = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Uf = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Yf = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Zf = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Kf = [".##", "##.", ".#.", "#.."];
function Wu(n, { width: l, height: i, colors: u, wave: v = 0.38, soft: y = 6, glow: k = 0.6 }) {
  const E = { ...Wn, dawn: "#e5a77e", ...u }, I = Iu(E), M = l, W = i, F = M / 6, q = F / 2, j = Math.PI * 2, ue = n.length ? n : [{ cond: "cloudy", night: !1 }], ee = [...Array(12)].map((pe, Se) => {
    const ie = ue[Math.min(Se, ue.length - 1)], oe = jf(ie.cond), ne = Se % 2 === 1;
    return { cond: ie.cond, k: oe, night: ne, sky: I[oe][ne ? 1 : 0], cover: Vf[oe] };
  }), $ = (pe) => W * (0.5 - v * Math.cos(j * (pe / F - 0.25)));
  return { C: E, S: ee, W: M, H: W, cw: F, sw: q, TAU: j, yb: $, side: (pe, Se, ie) => {
    const oe = (pe ? $(Se) - ie : ie - $(Se)) / Math.max(3, y * 1.4) + 0.5;
    return oe <= 0 ? 0 : oe >= 1 ? 1 : oe;
  }, glowAt: (pe) => {
    const Se = ((pe / F - 0.25) % 1 + 1) % 1, ie = Math.max(0, Math.min(5, Math.round(pe / F - 0.25))), oe = Math.max(0, Math.min(5, Math.round(pe / F - 0.75))), ne = 1 - (ee[2 * ie].cover + ee[2 * oe + 1].cover) / 2, D = Math.sin(Math.PI * Math.min(1, Math.max(0, $(pe) / W)));
    return { c: Se < 0.5 ? E.dusk : E.dawn, a: k * (0.2 + 0.8 * ne) * D * D };
  }, soft: y, tw: F * 0.3, sy: W / 90 };
}
function Vu(n, { clock: l = 0, ambient: i = !1, seed: u = 1 }) {
  const { S: v, sw: y, side: k, C: E, TAU: I, sy: M } = n, W = l, F = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return v.forEach((q, j) => {
    const ue = Xc(u * 977 + j * 131 + 7), ee = (j + 0.5) * y, $ = q.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[q.k] : 0;
    for (let z = 0; z < $; z++) {
      const me = ee + (ue() - 0.5) * y * 1.6, pe = (6 + ue() * 76) * M, Se = ue() < 0.35, ie = 1.8 + ue() * 1.6, oe = k(!0, me, pe) * (Se ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(I * W / 2600 + z * 1.7 + j) : 1);
      oe >= 0.03 && F.stars.push({ x: me, y: pe, big: Se, size: ie, o: oe });
    }
    if (!q.night && (q.k === "clear" || q.k === "partly")) {
      const z = ee + (ue() - 0.5) * y * 0.3, me = Math.min(15, y * 0.29);
      F.suns.push({ x: z, y: 32 * M, rad: me, halo: me * 2.8 * (i ? 1 + 0.07 * Math.sin(I * W / 3600 + j) : 1) });
    }
    if (q.night && (q.k === "clear" || q.k === "partly")) {
      const z = Math.min(0.78, y * 0.55 / 34), me = ee - 23 * z + (ue() - 0.5) * y * 0.2;
      F.moons.push({ x: me + 23 * z, y: (4 + (i ? 0.8 * Math.sin(I * W / 5200 + j) : 0)) * M + 23 * z, d: 46 * z });
    }
  }), v.forEach((q, j) => {
    const ue = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[q.k];
    if (!ue) return;
    const ee = Xc(u * 577 + j * 71 + 3), $ = (j + 0.5) * y, z = q.k === "rain" || q.k === "storm" || q.night ? E.cloudNight : E.cloudDay, me = q.night ? 0.82 : q.k === "storm" ? 0.75 : 1;
    for (let pe = 0; pe < ue; pe++) {
      const Se = y / 46 * (q.k === "partly" ? 0.85 : 0.75 + ee() * 0.55), ie = $ + (q.k === "partly" ? y * 0.12 : (ee() - 0.5) * y * 1.05), oe = (q.k === "partly" ? 40 : 6 + ee() * 26) * M, ne = i ? 2.5 * Math.sin(I * W / 9e3 + j * 1.3 + pe * 2.1) : 0, D = i ? 0.9 * Math.sin(I * W / 6100 + j + pe) : 0;
      F.clouds.push({ x: ie - 23 * Se + ne, y: oe - 15.33 * Se + D, w: 46 * Se, h: 30.66 * Se, fill: z, o: me * (ue > 1 && pe === 0 ? 0.85 : 1) });
    }
  }), v.forEach((q, j) => {
    const ue = Xc(u * 313 + j * 29 + 11), ee = (j + 0.5) * y, $ = q.cond === "pouring" ? 16 : q.cond === "rainy" || q.cond === "hail" ? 9 : q.cond === "lightning-rainy" ? 12 : q.cond === "snowy-rainy" ? 5 : 0;
    for (let me = 0; me < $; me++) {
      let pe = ee + (ue() - 0.5) * y * 1.05, Se = 44 + ue() * 36, ie = 1;
      if (i) {
        const ne = ((Se - 44 + W * 0.04) % 36 + 36) % 36;
        pe -= 0.21 * (ne - (Se - 44)), Se = 44 + ne, ie = Math.min(1, ne / 6, (36 - ne) / 6);
      }
      Se *= M;
      const oe = k(q.night, pe, Se) * ie;
      oe >= 0.05 && F.drops.push({ x: pe, y: Se, o: oe });
    }
    const z = q.cond === "snowy" ? 11 : q.cond === "snowy-rainy" ? 6 : 0;
    for (let me = 0; me < z; me++) {
      let pe = ee + (ue() - 0.5) * y * 1.05, Se = 40 + ue() * 44, ie = 1;
      if (i) {
        const ne = ((Se - 40 + W * 9e-3) % 44 + 44) % 44;
        Se = 40 + ne, pe += 1.6 * Math.sin(I * W / 2800 + me * 1.9 + j), ie = Math.min(1, ne / 6, (44 - ne) / 6);
      }
      Se *= M;
      const oe = k(q.night, pe, Se) * ie;
      oe >= 0.05 && F.flakes.push({ x: pe, y: Se, o: oe });
    }
    if (q.k === "fog") {
      const me = q.night ? "#c8ccd6" : "#ffffff", pe = q.night ? 0.28 : 0.62, Se = i ? 4 * Math.sin(I * W / 8e3 + j) : 0;
      for (let ie = 0; ie < 4; ie++) F.fogs.push({ x: ee - y * 0.75 + ie % 2 * y * 0.18 + (ie % 2 ? Se : -Se), y: (30 + ie * 13) * M, w: y * 1.3, c: me, a: pe });
    }
    if (q.k === "storm") {
      const me = (W / 3400 + j * 0.37) % 1;
      F.bolts.push({ x: ee + (ue() - 0.5) * y * 0.3 - 5, y: 36 * M, o: i && !(me < 0.05 || me > 0.09 && me < 0.12) ? 0.8 : 1 });
    }
  }), F;
}
function $f(n, l, i, u, v, y, k, E) {
  const { S: I, C: M, cw: W, yb: F, glowAt: q, soft: j, tw: ue, sy: ee } = n, $ = new Array(i * u), z = new Uint8Array(i * u), me = new Uint8Array(i * u), pe = (A, R, L, te, de) => {
    L == null || A < 0 || R < 0 || A >= i || R >= u || (te >= 1 || te > Fn(A + 5, R + 3)) && ($[R * i + A] = L, z[R * i + A] = de);
  }, Se = (A, R, L, te) => {
    for (let de = Math.max(0, Math.floor(R - L) - 1); de <= Math.min(u - 1, R + L + 1); de++) for (let ce = Math.max(0, Math.floor(A - L) - 1); ce <= Math.min(i - 1, A + L + 1); ce++) te(ce, de, ce + 0.5 - A, de + 0.5 - R);
  }, ie = (A, R, L) => {
    for (let de = 0; de < A.length - 1; de++) {
      const ce = (de + R) * W;
      if (L < ce - ue / 2) return [A[de], A[de], 0];
      if (L <= ce + ue / 2) return [A[de], A[de + 1], (L - ce + ue / 2) / ue];
    }
    const te = A[A.length - 1];
    return [te, te, 0];
  }, oe = I.filter((A) => !A.night).map((A) => A.sky), ne = I.filter((A) => A.night).map((A) => A.sky), D = j / y, Ce = 16 * ee / y;
  for (let A = 0; A < i; A++) {
    const R = (A + 0.5) * v, L = F(R) / y, te = ie(oe, 0.75, R), de = ie(ne, 1.25, R), ce = q(R);
    for (let ye = 0; ye < u; ye++) {
      const Me = Fn(A, ye), Le = ye + 0.5 - L, Xe = (D > 0.01 ? On(0.5 + Le / D) : Le > 0 ? 1 : 0) > Me;
      let ct = Xe ? te[2] > Me ? te[1] : te[0] : de[2] > Me ? de[1] : de[0];
      (Xe ? On(((ye + 0.5) / u - 0.45) / 0.55) * 0.7 : On(1 - (ye + 0.5) / (u * 0.55)) * 0.7) > Fn(A + 2, ye + 5) && (ct = Xe ? ga(ct, "#ffffff", 0.18) : ga(ct, "#000000", 0.25)), Xe && Le >= 0 && Le < Ce && ce.a * 1.3 * (1 - Le / Ce) > Fn(A + 6, ye + 1) && (ct = ce.c), $[ye * i + A] = ct, me[ye * i + A] = Xe ? 0 : 1;
    }
  }
  const le = ga(M.sun, "#ffffff", 0.55), Oe = ga(M.moon, "#ffffff", 0.6);
  l.stars.forEach((A) => {
    const R = Math.floor(A.x / v), L = Math.floor(A.y / y);
    if (R < 0 || L < 0 || R >= i || L >= u || !me[L * i + R] || A.o < 0.15) return;
    const te = A.o > 0.45 ? M.star : ga(M.star, $[L * i + R], 0.5), de = A.big && A.o > 0.6 ? Math.floor(A.size / v) : 0;
    pe(R, L, te, 1, os);
    for (let ce = 1; ce <= de; ce++) [[R - ce, L], [R + ce, L], [R, L - ce], [R, L + ce]].forEach((ye) => {
      ye[0] >= 0 && ye[1] >= 0 && ye[0] < i && ye[1] < u && me[ye[1] * i + ye[0]] && pe(ye[0], ye[1], te, 1, os);
    });
  }), l.suns.forEach((A) => {
    const R = Math.max(1.5, A.rad / v), L = A.x / v, te = A.y / y, de = A.halo / v * 0.85;
    if (Se(L, te, de, (ce, ye, Me, Le) => {
      const Xe = Math.sqrt(Me * Me + Le * Le);
      Xe > R && Xe < de && !me[ye * i + ce] && pe(ce, ye, le, 0.3 * (1 - (Xe - R) / (de - R)), 0);
    }), E) {
      const ce = Math.floor(k / 500) % 2, ye = Math.max(1, R * 0.3);
      for (let Me = 0; Me < 8; Me++) if (Me % 2 === ce) for (let Le = R + 1.2; Le < R + 1.2 + ye; Le += 0.7) pe(Math.floor(L + Math.cos(Me * Math.PI / 4) * Le), Math.floor(te + Math.sin(Me * Math.PI / 4) * Le), M.sun, 1, Tp);
    }
    Se(L, te, R, (ce, ye, Me, Le) => {
      Me * Me + Le * Le <= R * R && pe(ce, ye, On(((Le / R + 1) / 2 - 0.6) / 0.4) > Fn(ce, ye) ? M.sunEdge : M.sun, 1, kp);
    });
  }), l.moons.forEach((A) => {
    const R = Math.max(1.5, A.d * 0.37 / v), L = A.x / v, te = A.y / y, de = L + 0.547 * R, ce = te - 0.503 * R, ye = 0.82 * R;
    Se(L, te, R, (Me, Le, Xe, ct) => {
      if (Xe * Xe + ct * ct > R * R) return;
      const Re = Me + 0.5 - de, ja = Le + 0.5 - ce;
      Re * Re + ja * ja > ye * ye && pe(Me, Le, On((ct + R) / (2 * R) * 1.1 - 0.1) > Fn(Me, Le) ? M.moon : Oe, 1, Mp);
    });
  }), l.clouds.forEach((A) => {
    const R = Math.max(3, A.w / v), L = R * 0.6665, te = A.x / v, de = A.y / y, ce = ga(A.fill, "#000000", 0.16);
    for (let ye = Math.max(0, Math.floor(de) - 1); ye <= Math.min(u - 1, de + L + 1); ye++) for (let Me = Math.max(0, Math.floor(te) - 1); Me <= Math.min(i - 1, te + R + 1); Me++) {
      const Le = (Me + 0.5 - te) / R, Xe = (ye + 0.5 - de) / R;
      wc(Le, Xe) && pe(Me, ye, !wc(Le, Xe + 1 / R) || On((Xe - 0.42) / 0.25) * 0.8 > Fn(Me, ye) ? ce : A.fill, A.o, Sp);
    }
  }), l.fogs.forEach((A) => {
    const R = Math.floor(A.y / y), L = Math.max(R, Math.floor((A.y + 6 * ee) / y) - 1), te = Math.floor(A.x / v), de = Math.floor((A.x + A.w) / v);
    for (let ce = R; ce <= L; ce++) for (let ye = te; ye <= de; ye++) {
      const Me = (ye - te) / Math.max(1, de - te);
      pe(ye, ce, A.c, A.a * (Me < 0.25 ? Me / 0.25 : Me > 0.75 ? (1 - Me) / 0.25 : 1), 0);
    }
  });
  const re = Math.max(2, Math.round(9 / y));
  l.drops.forEach((A) => {
    const R = A.x / v, L = Math.floor(A.y / y);
    for (let te = 0; te < re; te++) pe(Math.floor(R - 0.208 * te * y / v), L + te, M.rain, A.o, Cp);
  });
  const Ze = Math.max(0, Math.round(4.4 / v / 2.6));
  return l.flakes.forEach((A) => {
    const R = Math.floor(A.x / v), L = Math.floor(A.y / y);
    pe(R, L, M.snow, A.o, In);
    for (let te = 1; te <= Ze; te++)
      pe(R - te, L, M.snow, A.o, In), pe(R + te, L, M.snow, A.o, In), pe(R, L - te, M.snow, A.o, In), pe(R, L + te, M.snow, A.o, In);
  }), l.bolts.forEach((A) => {
    if (v <= 3.5)
      for (let R = Math.floor(A.y / y); R <= (A.y + 24) / y; R++) for (let L = Math.floor(A.x / v); L <= (A.x + 11) / v; L++)
        Fu(Zf, (L + 0.5) * v - A.x, (R + 0.5) * y - A.y) && pe(L, R, M.sun, 1, Rl);
    else {
      const R = Math.round(A.x / v), L = Math.round(A.y / y);
      Kf.forEach((te, de) => te.split("").forEach((ce, ye) => {
        ce === "#" && pe(R + ye, L + de, M.sun, 1, Rl);
      }));
    }
  }), { col: $, ids: z };
}
function Xf(n, l) {
  const i = l.px, u = Math.max(6, Math.round(l.width / i)), v = Math.max(6, Math.round(l.height / i)), y = l.width / u, k = l.height / v, E = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, I = (j) => {
    const ue = Wu(j, l);
    return $f(ue, Vu(ue, { clock: E, ambient: l.ambient, seed: l.seed }), u, v, y, k, E, l.ambient);
  }, M = I(n), W = l.reveal == null ? 1 : On(l.reveal);
  let F = M.col, q = M.ids;
  if (W < 1) {
    const j = l.prev ? I(l.prev) : null, ue = W * (u + 12);
    F = new Array(u * v), q = new Uint8Array(u * v);
    for (let ee = 0; ee < u * v; ee++) {
      const $ = ee % u, z = ee / u | 0;
      (l.reduce ? W : On((ue - $) / 12)) > Fn($, z) ? (F[ee] = M.col[ee], q[ee] = M.ids[ee]) : j ? (F[ee] = j.col[ee], q[ee] = j.ids[ee]) : (F[ee] = null, q[ee] = 255);
    }
  }
  return qu(F, q, u, v, { oneBit: l.oneBit, ink: l.ink, paper: l.paper, snowInk: !1 });
}
function Jf(n, l, i) {
  const u = i.width, v = i.height, y = i.reveal == null ? 1 : On(i.reveal), k = (q, j) => {
    const ue = Wu(j, i);
    Qf(q, ue, Vu(ue, i));
  };
  if (n.clearRect(0, 0, u, v), y >= 1) {
    k(n, l);
    return;
  }
  if (i.prev && k(n, i.prev), i.reduce) {
    n.save(), n.globalAlpha = y, k(n, l), n.restore();
    return;
  }
  const E = n.canvas, I = E.__wxOff || (E.__wxOff = document.createElement("canvas"));
  (I.width !== E.width || I.height !== E.height) && (I.width = E.width, I.height = E.height);
  const M = I.getContext("2d");
  M.setTransform(n.getTransform()), M.clearRect(0, 0, u, v), k(M, l);
  const W = y * (u + 64) - 64, F = M.createLinearGradient(W, 0, W + 64, 0);
  F.addColorStop(0, "rgba(0,0,0,1)"), F.addColorStop(1, "rgba(0,0,0,0)"), M.globalCompositeOperation = "destination-in", M.fillStyle = F, M.fillRect(0, 0, u, v), M.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(I, 0, 0), n.restore();
}
function Qf(n, l, i) {
  const { W: u, H: v, S: y, C: k, cw: E, yb: I, glowAt: M, soft: W, tw: F, sy: q } = l, j = (le, Oe) => {
    const re = hc(le);
    return "rgba(" + re[0] + "," + re[1] + "," + re[2] + "," + Math.max(0, Math.min(1, Oe)).toFixed(3) + ")";
  }, ue = (le, Oe) => {
    const re = n.createLinearGradient(0, 0, u, 0);
    re.addColorStop(0, le[0]);
    for (let Ze = 0; Ze < le.length - 1; Ze++) {
      const A = (Ze + Oe) * E, R = (A - F / 2) / u, L = (A + F / 2) / u;
      R > 0 && R < 1 && re.addColorStop(R, le[Ze]), L > 0 && L < 1 && re.addColorStop(L, le[Ze + 1]);
    }
    return re.addColorStop(1, le[le.length - 1]), re;
  }, ee = Math.max(24, Math.ceil(u / 4)), $ = (le, Oe) => {
    n.beginPath();
    for (let re = 0; re <= ee; re++) {
      const Ze = u * re / ee, A = le == null ? 0 : I(Ze) + le;
      re ? n.lineTo(Ze, A) : n.moveTo(Ze, A);
    }
    for (let re = ee; re >= 0; re--) {
      const Ze = u * re / ee;
      n.lineTo(Ze, I(Ze) + Oe);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = ue(y.filter((le) => !le.night).map((le) => le.sky), 0.75), n.fillRect(0, 0, u, v);
  const z = n.createLinearGradient(0, 0, u, 0);
  for (let le = 0; le <= 64; le++) {
    const Oe = M(u * le / 64);
    z.addColorStop(le / 64, j(Oe.c, Math.min(1, Oe.a)));
  }
  n.fillStyle = z;
  for (let le = 0; le < 8; le++)
    n.globalAlpha = 1 - le / 8, $(le * 2 * q, (le + 1) * 2 * q);
  n.fillStyle = ue(y.filter((le) => le.night).map((le) => le.sky), 1.25);
  const me = Math.max(0.5, W), pe = 6;
  n.globalAlpha = 1, $(null, -me);
  for (let le = 0; le < pe; le++)
    n.globalAlpha = 1 - (le + 0.5) / pe, $(-me + 2 * me * le / pe, -me + 2 * me * (le + 1) / pe);
  n.globalAlpha = 1;
  const Se = new Path2D(Uf), ie = new Path2D(Gf), oe = new Path2D(zf), ne = new Path2D(Yf);
  n.fillStyle = k.star, i.stars.forEach((le) => {
    n.globalAlpha = le.o, le.big ? (n.save(), n.translate(le.x, le.y), n.scale(le.size, le.size), n.fill(Se), n.restore()) : (n.beginPath(), n.arc(le.x, le.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const D = ga(k.sun, "#ffffff", 0.55);
  i.suns.forEach((le) => {
    const Oe = n.createRadialGradient(le.x, le.y, 0, le.x, le.y, le.halo);
    Oe.addColorStop(0, j(D, 0.42)), Oe.addColorStop(0.7, j(D, 0)), n.fillStyle = Oe, n.beginPath(), n.arc(le.x, le.y, le.halo, 0, Math.PI * 2), n.fill();
    const re = n.createLinearGradient(0, le.y - le.rad, 0, le.y + le.rad);
    re.addColorStop(0.6, k.sun), re.addColorStop(1, k.sunEdge), n.fillStyle = re, n.beginPath(), n.arc(le.x, le.y, le.rad, 0, Math.PI * 2), n.fill();
  });
  const Ce = ga(k.moon, "#ffffff", 0.6);
  i.moons.forEach((le) => {
    n.save(), n.translate(le.x - le.d / 2, le.y - le.d / 2), n.scale(le.d / 46, le.d / 46);
    const Oe = n.createLinearGradient(0, 6, 0, 40);
    Oe.addColorStop(0, Ce), Oe.addColorStop(1, k.moon), n.fillStyle = Oe, n.fill(ie), n.restore();
  }), i.clouds.forEach((le) => {
    n.save(), n.globalAlpha = le.o, n.translate(le.x, le.y), n.scale(le.w / 46, le.h / 30.66), n.translate(-4, -9.67), n.fillStyle = le.fill, n.fill(oe), n.restore();
  }), i.fogs.forEach((le) => {
    const Oe = n.createLinearGradient(le.x, 0, le.x + le.w, 0);
    Oe.addColorStop(0, j(le.c, 0)), Oe.addColorStop(0.25, j(le.c, le.a)), Oe.addColorStop(0.75, j(le.c, le.a)), Oe.addColorStop(1, j(le.c, 0)), n.fillStyle = Oe, n.fillRect(le.x, le.y, le.w, 6 * q);
  }), n.fillStyle = k.rain, i.drops.forEach((le) => {
    n.save(), n.globalAlpha = le.o, n.translate(le.x, le.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = k.snow, i.flakes.forEach((le) => {
    n.globalAlpha = le.o, n.beginPath(), n.arc(le.x, le.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = k.sun, i.bolts.forEach((le) => {
    n.save(), n.globalAlpha = le.o, n.translate(le.x, le.y), n.fill(ne), n.restore();
  }), n.restore();
}
function eh(n, l) {
  var Gd, Ud, Yd, Zd, sd, Kd, $d;
  const i = (a) => n.getElementById(a), u = i("workoutView"), v = i("workoutNameInput");
  let y = !0;
  const k = i("homeClock");
  function E() {
    k && (k.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  E(), setInterval(E, 15e3);
  const I = i("createFlow"), M = i("createMovementsSlot"), W = i("createTimingSlot"), F = i("createFinishSlot"), q = i("movementStepSummary"), j = i("timingStepSummary"), ue = i("finishStepSummary"), ee = i("continueToTiming"), $ = i("continueToFinish"), z = i("finishMoveButton");
  let me = !1, pe = [];
  function Se(a) {
    !a || pe.some((r) => r.node === a) || pe.push({ node: a, parent: a.parentNode, next: a.nextSibling });
  }
  function ie(a, r) {
    a && (Se(a), r.appendChild(a));
  }
  function oe() {
    [...pe].reverse().forEach(({ node: a, parent: r, next: d }) => {
      r && (d && d.parentNode === r ? r.insertBefore(a, d) : r.appendChild(a));
    }), pe = [];
  }
  function ne(a) {
    n.querySelectorAll(".createStep").forEach((r) => {
      r.classList.toggle("active", r.dataset.createStep === a);
    }), a === "timing" && (me = !0), D();
  }
  function D() {
    var ve, ke;
    if (!ea) return;
    yt[qe];
    const a = Ve.filter((be) => !be.hidden), r = a.filter((be) => be.kind !== "rest").length, d = a.filter((be) => be.kind === "rest").length;
    q.textContent = r ? r + " movement" + (r === 1 ? "" : "s") + (d ? " · " + d + " rest" + (d === 1 ? "" : "s") : "") : "No movements yet";
    const m = r > 0, S = n.querySelector('[data-open-step="timing"]'), _ = n.querySelector('[data-open-step="finish"]');
    S.disabled = !m, ee.disabled = !m, j.textContent = m ? jo(R.value) + " · " + Fa(L.value) + " movement · " + Fa(te.value) + " rest" : "Add a movement first", _.disabled = !(m && me);
    const O = ((v == null ? void 0 : v.value) || "").trim(), U = [];
    (ve = i("includeWarmupPreset")) != null && ve.checked && U.push("warm-up"), (ke = i("includeCooldownPreset")) != null && ke.checked && U.push("cooldown"), ue.textContent = O ? O + (U.length ? " · " + U.join(" + ") : "") : U.length ? U.join(" + ") : "Name and optional extras";
  }
  function Ce() {
    var He, at, je;
    I.hidden = !1, me = !1;
    const a = n.querySelector(".editNameRow"), r = i("createMoveOptions"), d = n.querySelector(".timeTiles"), m = i("routineSummaryModal"), S = n.querySelector(".tempoRevealRow"), _ = i("tempoExperiment"), O = (He = i("warmupList")) == null ? void 0 : He.closest("section"), U = i("movementCreatorLaunch"), ve = i("movementCreator"), ke = (at = i("strengthList")) == null ? void 0 : at.closest("section"), be = (je = i("cooldownList")) == null ? void 0 : je.closest("section");
    [r == null ? void 0 : r.querySelector(".createExtras"), O, U, ve, ke, be].forEach((Ne) => Ne && ie(Ne, M)), [r, d, m, S, _].forEach((Ne) => ie(Ne, W)), ie(a, F), ne("movements"), D();
  }
  function le() {
    oe(), I.hidden = !0, n.querySelectorAll(".createStep").forEach((a) => a.classList.remove("active"));
  }
  n.querySelectorAll("[data-open-step]").forEach((a) => a.addEventListener("click", () => {
    a.disabled || ne(a.dataset.openStep);
  })), ee.addEventListener("click", () => {
    ee.disabled || ne("timing");
  }), $.addEventListener("click", () => ne("finish")), z.addEventListener("click", () => i("saveWorkoutEdit").click());
  const Oe = { home: i("homeView"), workout: i("workoutView"), settings: i("settingsView") }, re = i("homeNav"), Ze = i("settingsNav");
  function A(a) {
    Object.entries(Oe).forEach(([r, d]) => d.classList.toggle("active", r === a)), re.classList.toggle("active", a === "home"), Ze.classList.toggle("active", a === "settings"), a === "home" && setTimeout(We, 400), a === "settings" && (requestAnimationFrame(() => Gr(n.querySelector(".tab.active"), !1)), cr());
  }
  const R = i("totalTime"), L = i("workTime"), te = i("restTime"), de = i("totalOut"), ce = i("workOut"), ye = i("restOut"), Me = i("totalFill"), Le = i("workFill"), Xe = i("restFill"), ct = i("roundsInput"), Re = i("roundsFill"), ja = i("roundsOut"), ai = i("totalLabel"), oo = i("routineSummaryModal"), Vn = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let ia = Vn.map((a) => ({ ...a })), Ve = [
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
  let va = Kt.map((a) => ({ ...a }));
  const St = {
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
  }, xt = kn(l.data), yt = xt.profiles;
  let qe = yt[xt.selected] ? xt.selected : xt.order.find((a) => yt[a]) || "kettlebell";
  function kn(a) {
    const r = a && typeof a == "object" ? JSON.parse(JSON.stringify(a)) : {}, d = r.profiles && Object.keys(r.profiles).length ? r.profiles : JSON.parse(JSON.stringify(St)), m = (Array.isArray(r.order) ? r.order : Object.keys(d)).filter((S) => d[S]);
    return Object.keys(d).forEach((S) => {
      m.includes(S) || m.push(S);
    }), {
      v: 1,
      profiles: d,
      order: m,
      selected: r.selected || m[0],
      history: Array.isArray(r.history) ? r.history : [],
      checkins: (Array.isArray(r.checkins) ? r.checkins : zs(r.energy)).map(rs),
      settings: { ...r.settings || {} }
    };
  }
  function zs(a) {
    if (!Array.isArray(a)) return [];
    const r = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], d = [];
    return a.forEach((m) => {
      const S = new Date(m.at);
      if (isNaN(S)) return;
      const _ = S.getFullYear() + "-" + String(S.getMonth() + 1).padStart(2, "0") + "-" + String(S.getDate()).padStart(2, "0"), O = S.getHours() < 14 ? "morning" : "evening";
      if (d.some((ve) => ve.date === _ && ve.slot === O)) return;
      const U = r.indexOf(m.value) + 1;
      U > 0 && d.push({ date: _, slot: O, mood: null, energy: U, at: m.at });
    }), d;
  }
  function rs(a) {
    if (a.scale === 100) return a;
    const r = (d) => d == null ? null : Math.round((Number(d) - 1) / 5 * 100);
    return { ...a, mood: r(a.mood), energy: r(a.energy), scale: 100 };
  }
  function ka() {
    ea || (xt.selected = qe, xt.order = xt.order.filter((a) => yt[a] && a !== cn), l.save(xt));
  }
  function it() {
    return xt.settings;
  }
  function Mn(a) {
    const r = yt[a];
    if (!r) return;
    qe = a;
    const d = i("workoutNameInput");
    if (d && (d.value = r.name), R.value = r.total, L.value = r.work, te.value = r.rest, ct.value = r.rounds || 1, r.customSequence) {
      const m = (r.sequence || []).map((_) => ({ ..._ })), S = (_) => m.filter((O) => O.presetRole === _).map(({ presetRole: O, ...U }) => U);
      ia = (r.warmup || S("warmup")).map((_) => ({ ..._ })), va = (r.cooldown || S("cooldown")).map((_) => ({ ..._ })), Ve = m.filter((_) => !_.presetRole), li(r.preset || "movement", !1);
    } else
      R.min = 3, R.max = 40, R.step = 1, L.min = 20, L.max = 60, L.step = 5, te.min = 5, te.max = 30, te.step = 5, ia = (r.warmup || Vn).map((m) => ({ ...m })), va = (r.cooldown || Kt).map((m) => ({ ...m })), Ve = r.strength.map((m) => Array.isArray(m) ? (([S, _, O, U = !1]) => ({ id: S, name: _, group: O, kind: "work", hidden: !!U }))(m) : { ...m });
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((m) => m.classList.toggle("active", m.dataset.workout === a)), Et();
  }
  function ni(a, r, d) {
    const m = a.getBoundingClientRect(), S = m.width / 2, _ = m.height / 2, O = r - S, U = d - _;
    let ve = 1 / 0, ke = 1 / 0;
    O !== 0 && (ve = S / Math.abs(O)), U !== 0 && (ke = _ / Math.abs(U));
    const be = Math.min(Math.max(1 / Math.min(ve, ke), 0), 1);
    let ge = Math.atan2(U, O) * (180 / Math.PI) + 90;
    return ge < 0 && (ge += 360), { edge: be, angle: ge };
  }
  function Mr(a, r, d = !1) {
    const m = a.getBoundingClientRect(), S = r.clientX - m.left, _ = r.clientY - m.top, { edge: O, angle: U } = ni(a, S, _), ve = d ? 100 : O * 100;
    a.style.setProperty("--edge-proximity", ve.toFixed(3)), a.style.setProperty("--cursor-angle", U.toFixed(3) + "deg"), a.classList.toggle("borderGlowActive", d || ve >= 30);
  }
  function Sr(a) {
    a.addEventListener("pointermove", (d) => Mr(a, d, !1)), a.addEventListener("pointerenter", (d) => Mr(a, d, !1)), a.addEventListener("pointerdown", (d) => Mr(a, d, !0));
    const r = () => {
      a.classList.remove("borderGlowActive"), a.style.setProperty("--edge-proximity", "0");
    };
    a.addEventListener("pointerleave", r), a.addEventListener("pointerup", r), a.addEventListener("pointercancel", r);
  }
  Sr(i("addWorkoutPanel"));
  let ea = !1, cn = null;
  function pt(a) {
    return String(a ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]);
  }
  function yo(a) {
    return a.summary ? a.summary : a.customSequence ? jo(a.total) + " · custom move" : jo(a.total) + " · " + Fa(a.work) + " / " + Fa(a.rest) + " · warm-up + cooldown";
  }
  function ba(a, r) {
    var _;
    const d = document.createElement("article");
    d.className = "workoutPanel", d.dataset.workout = a, d.tabIndex = 0;
    const m = r.activityCount ?? (((_ = r.sequence) == null ? void 0 : _.length) || 0);
    d.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + pt(r.name) + '</div><div class="sub">' + pt(yo(r)) + '</div><span class="sourceTag">' + pt(r.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (m ? m + " activities" + ((r.rounds || 1) > 1 ? " × " + r.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + pt(r.name) + "</div></div>";
    const S = i("addWorkoutPanel");
    return i("workoutGallery").insertBefore(d, S), Sr(d), d.addEventListener("click", (O) => {
      O.target.closest("button") || Mn(a);
    }), d.addEventListener("keydown", (O) => {
      (O.key === "Enter" || O.key === " ") && !O.target.closest("button") && (O.preventDefault(), Mn(a));
    }), d.querySelector(".seeWorkoutBtn").addEventListener("click", (O) => {
      O.stopPropagation(), Mn(a), wd(!1);
    }), d.querySelector(".startWorkoutBtn").addEventListener("click", (O) => {
      O.stopPropagation(), Mn(a), hn();
    }), d;
  }
  function Fi() {
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((a) => a.remove()), xt.order.forEach((a) => {
      yt[a] && ba(a, yt[a]);
    }), n.querySelectorAll(".workoutPanel[data-workout]").forEach((a) => a.classList.toggle("active", a.dataset.workout === qe));
  }
  Fi(), i("addWorkoutPanel").addEventListener("keydown", (a) => {
    (a.key === "Enter" || a.key === " ") && (a.preventDefault(), i("addWorkoutPanel").click());
  }), i("addWorkoutPanel").addEventListener("click", () => {
    ea = !0, cn = "custom-" + Date.now(), yt[cn] = {
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
    }, Mn(cn), wd(!0);
  });
  let $e = [], dt = 0, et = 0, Ie = 1, Yt = !1, lt = null, Ia = null, $t = !1, Vo = xt.settings.upcomingCount ?? "all", Gs = "movement";
  function oi(a, r, d) {
    return (Number(a) - r) / (d - r) * 100;
  }
  function Fa(a) {
    const r = Math.max(0, Number(a) || 0);
    return r >= 3600 && r % 3600 === 0 ? r / 3600 + " hr" : r >= 60 && r % 60 === 0 ? r / 60 + " min" : r >= 60 ? Math.round(r / 60) + " min" : Math.round(r) + " sec";
  }
  function jo(a) {
    const r = Math.max(0, Number(a) || 0);
    return r >= 60 && r % 60 === 0 ? r / 60 + " hr" : r >= 60 ? Math.floor(r / 60) + " hr " + r % 60 + " min" : r + " min";
  }
  function Cr() {
    Me.style.width = oi(R.value, Number(R.min), Number(R.max)) + "%", Le.style.width = oi(L.value, Number(L.min), Number(L.max)) + "%", Xe.style.width = oi(te.value, Number(te.min), Number(te.max)) + "%", ce.textContent = Fa(L.value), ye.textContent = Fa(te.value);
    const a = Number(ct.value) || 1;
    Re.style.width = oi(a, 1, 10) + "%", ai.textContent = a > 1 ? "Time per round" : "Total time";
  }
  function ii(a) {
    return a.filter((r) => !r.hidden);
  }
  function ri(a) {
    const r = Math.max(0, Math.round(Number(a) || 0)), d = Math.floor(r / 3600), m = Math.floor(r % 3600 / 60), S = r % 60;
    return (d ? d + ":" + String(m).padStart(2, "0") : m) + ":" + String(S).padStart(2, "0");
  }
  function Pl(a) {
    let r;
    try {
      r = new URL(String(a || "").trim());
    } catch {
      return null;
    }
    const d = r.hostname.replace(/^(www|m|music)\./, "");
    let m = null;
    if (d === "youtu.be") m = r.pathname.slice(1).split("/")[0];
    else if (/^youtube(-nocookie)?\.com$/.test(d))
      if (r.pathname === "/watch") m = r.searchParams.get("v");
      else {
        const U = r.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        U && (m = U[2]);
      }
    if (!m || !/^[\w-]{11}$/.test(m)) return null;
    const S = (U) => {
      if (!U) return 0;
      if (/^\d+$/.test(U)) return Number(U);
      const ve = U.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return ve ? (Number(ve[1]) || 0) * 3600 + (Number(ve[2]) || 0) * 60 + (Number(ve[3]) || 0) : 0;
    }, _ = S(r.searchParams.get("t") || r.searchParams.get("start")), O = S(r.searchParams.get("end"));
    return { id: m, start: _, end: O > _ ? O : null };
  }
  function io(a, r) {
    if (a.useVideoLength === !1) return Math.max(5, Number(a.duration) || r || 300);
    const d = Number(a.start) || 0, m = Number(a.end) || Number(a.videoDuration) || 0;
    return m > d ? Math.round(m - d) : Number(a.duration) || 300;
  }
  function si(a, r) {
    const d = Math.max(0, Number(a) || 0);
    return Math.round(r === "hour" ? d * 3600 : r === "min" ? d * 60 : d);
  }
  function li(a, r = !0) {
    Gs = a, n.querySelectorAll(".createPresetBtn").forEach((m) => m.classList.toggle("active", m.dataset.movePreset === a));
    const d = yt[qe];
    d && (d.preset = a), a === "work" ? (R.min = 30, R.max = 480, R.step = 30, L.min = 300, L.max = 7200, L.step = 300, te.min = 60, te.max = 1800, te.step = 60, r && (R.value = 60, L.value = 1500, te.value = 300), i("addMovementUnit").value = "min", i("addMovementDuration").value = 25, i("addRestUnit").value = "min", i("addRestDuration").value = 5) : (R.min = 3, R.max = 40, R.step = 1, L.min = 20, L.max = 60, L.step = 5, te.min = 5, te.max = 30, te.step = 5, r && (R.value = 20, L.value = 45, te.value = 15), i("addMovementUnit").value = "sec", i("addMovementDuration").value = 45, i("addRestUnit").value = "sec", i("addRestDuration").value = 30), Cr();
  }
  function ss(a, r) {
    const d = Gs === "work";
    return a.map((m, S) => ({ ...m, id: r + "-" + S + "-" + Date.now().toString(36), useGlobalTiming: !d, duration: d ? 60 : Number(L.value) }));
  }
  function ls() {
    const a = yt[qe];
    a != null && a.customSequence && (a.includeWarmup = i("includeWarmupPreset").checked, a.includeCooldown = i("includeCooldownPreset").checked, a.includeWarmup && !ia.length && (ia = ss(Vn, "warm")), a.includeCooldown && !va.length && (va = ss(Kt, "cool")), Et());
  }
  function Nl() {
    const a = i("upcomingCountSetting");
    if (!a) return;
    const r = Math.max(1, $e.length - 1), d = Vo;
    a.innerHTML = "";
    for (let _ = 1; _ <= r; _++) {
      const O = document.createElement("option");
      O.value = String(_), O.textContent = String(_), a.appendChild(O);
    }
    const m = document.createElement("option");
    m.value = "all", m.textContent = "All", a.appendChild(m);
    const S = d === "all" ? "all" : String(Math.min(Number(d) || 1, r));
    a.value = S, Vo = S === "all" ? "all" : Number(S);
  }
  function Et() {
    Number(R.value) * 60;
    const a = Number(L.value), r = Number(te.value), d = yt[qe], m = !!(d != null && d.customSequence), S = (m ? !d.includeWarmup : d != null && d.warmupOff) ? [] : ii(ia), _ = ii(Ve), O = m && !d.includeCooldown ? [] : ii(va);
    if (d && (d.total = Number(R.value), d.work = a, d.rest = r, d.rounds = Number(ct.value) || 1, d.customSequence ? (d.sequence = Ve.map((Pe) => ({ ...Pe })), d.warmup = ia.map((Pe) => ({ ...Pe })), d.cooldown = va.map((Pe) => ({ ...Pe }))) : (d.strength = Ve.map((Pe) => ({ ...Pe })), d.warmup = ia.map((Pe) => ({ ...Pe })), d.cooldown = va.map((Pe) => ({ ...Pe })))), d != null && d.customSequence) {
      const Pe = [...S.map((mt) => ({ ...mt, section: "warmup" })), ..._, ...O.map((mt) => ({ ...mt, section: "cooldown" }))].map((mt) => {
        if (mt.kind === "video") return { ...mt, duration: io(mt, a), rest: 0 };
        if (mt.kind === "rest") {
          const Ea = mt.useGlobalTiming === !0 ? r : Number(mt.duration) || r;
          return { ...mt, duration: Ea, rest: 0 };
        }
        const Aa = mt.useGlobalTiming === !1 && Number(mt.duration) || a;
        return { ...mt, duration: Aa, rest: 0 };
      });
      d.autoRest && Number(d.autoRestDuration) > 0 ? ($e = [], Pe.forEach((mt, Aa) => {
        $e.push(mt);
        const Ea = Pe[Aa + 1];
        mt.kind !== "rest" && Ea && Ea.kind !== "rest" && $e.push({
          id: "auto-rest-" + Aa,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(d.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : $e = Pe;
    } else
      $e = [...S.map((Pe) => ({ ...Pe, section: "warmup" })), ..._, ...O.map((Pe) => ({ ...Pe, section: "cooldown" }))].map((Pe) => Pe.kind === "video" ? { ...Pe, duration: io(Pe, a), rest: 0 } : Pe.kind === "rest" ? { ...Pe, duration: Pe.useGlobalTiming === !0 ? r : Number(Pe.duration) || r, rest: 0 } : { ...Pe, duration: Pe.useGlobalTiming === !1 && Number(Pe.duration) || a, rest: r }), $e.forEach((Pe, mt) => {
        var Aa;
        ((Aa = $e[mt + 1]) == null ? void 0 : Aa.kind) === "rest" && (Pe.rest = 0);
      }), $e.length && ($e[$e.length - 1].rest = 0);
    const U = Math.max(1, Math.min(10, Number(ct.value) || 1)), ve = $e, ke = (Pe) => U <= 1 ? null : Pe.section === "warmup" || Pe.presetRole === "warmup" ? "first" : Pe.section === "cooldown" || Pe.presetRole === "cooldown" ? "last" : Pe.kind === "video" && (Pe.videoRounds === "first" || Pe.videoRounds === "last") ? Pe.videoRounds : null, be = (Pe) => !!ke(Pe), ge = ve.filter((Pe) => !be(Pe)), He = ve.filter(be), at = ge.length, je = ge.reduce((Pe, mt) => Pe + mt.duration + mt.rest, 0), Ne = He.reduce((Pe, mt) => Pe + mt.duration + mt.rest, 0), De = [
      He.some((Pe) => Pe.section === "warmup" || Pe.presetRole === "warmup") && "warm-up",
      He.some((Pe) => Pe.section === "cooldown" || Pe.presetRole === "cooldown") && "cooldown",
      He.some((Pe) => Pe.kind === "video" && !Pe.section && !Pe.presetRole) && "video"
    ].filter(Boolean), vt = De.length > 1 ? De.slice(0, -1).join(", ") + " & " + De[De.length - 1] : De[0] || "";
    $e = [];
    const bt = (Pe, mt) => {
      const Aa = ke(Pe);
      return !Aa || (Aa === "first" ? mt === 1 : mt === U);
    };
    for (let Pe = 1; Pe <= U; Pe++)
      if (ve.filter((mt) => bt(mt, Pe)).forEach((mt, Aa) => $e.push({ ...mt, id: mt.id + (U > 1 ? "-r" + Pe : ""), round: Pe, roundIndex: Aa })), Pe < U && at)
        if (d != null && d.customSequence)
          $e.push({ id: "round-break-" + Pe, name: "Rest", group: "Round " + (Pe + 1) + " next", kind: "rest", hidden: !1, duration: r, rest: 0, round: Pe, roundIndex: at, roundBreak: !0 });
        else {
          const mt = $e[$e.length - 1];
          mt.rest = r, mt.roundBreakAfter = !0;
        }
    Cr();
    const Ye = $e.reduce((Pe, mt) => Pe + mt.duration + mt.rest, 0), Mt = Math.round(je / 60), Pt = Math.round(Ye / 60), ut = U > 1 ? jo(Mt) + " × " + U + " rounds" + (Ne ? " + " + Fa(Ne) + " " + vt : "") + " (" + jo(Pt) + ")" : jo(Pt), rt = [S.length ? "warm-up" : "", O.length ? "cooldown" : ""].filter(Boolean), xa = d != null && d.customSequence ? ut + " · " + at + " items" + (rt.length && !(U > 1 && Ne) ? " · " + rt.join(" + ") : "") : ut + " · " + Fa(a) + " / " + Fa(r) + (rt.length && !(U > 1 && Ne) ? " · " + rt.join(" + ") : "");
    de.textContent = Fa(je);
    const za = $e.filter((Pe) => !Pe.roundBreak).length, na = U > 1 ? za + " activities · " + U + " rounds" : at + " activities";
    ja.textContent = U > 1 ? U + " rounds · " + jo(Pt) + " total" : "1 round", i("roundsCount").textContent = U, n.querySelectorAll("[data-rounds-step]").forEach((Pe) => {
      Pe.disabled = Number(Pe.dataset.roundsStep) < 0 ? U <= 1 : U >= 10;
    }), d && (d.summary = xa, d.activityCount = at);
    const Qo = n.querySelector(".workoutPanel.active .sub");
    Qo && (Qo.textContent = xa), oo.textContent = xa, Yi(), n.querySelectorAll(".workoutPanel.active .activityCount").forEach((Pe) => Pe.textContent = na), Cr(), Lr(), vi(), So(), Nl(), ea && D(), Oe.workout.classList.contains("active") && !lt && ks();
  }
  const Oi = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', jn = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', ro = {
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
  }, Sn = (a) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (ro[a] || "") + "</svg>";
  n.querySelectorAll("[data-icon]").forEach((a) => {
    a.innerHTML = Sn(a.dataset.icon);
  });
  let Xt = null, en = null;
  function zn(a) {
    return a = Math.max(1, Number(a) || 0), a >= 3600 && a % 3600 === 0 ? { value: a / 3600, unit: "hour" } : a >= 60 && a % 60 === 0 ? { value: a / 60, unit: "min" } : { value: a, unit: "sec" };
  }
  function qi(a = !1) {
    const r = n.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    r && (r.focus({ preventScroll: !0 }), a && r.select());
  }
  function Tr(a, r, d = {}) {
    const m = a.kind === "rest", S = a.kind === "video", _ = S ? a.useVideoLength !== !1 : m ? a.useGlobalTiming === !0 : a.useGlobalTiming !== !1, O = Number(m ? te.value : L.value), U = zn(S ? a.useVideoLength === !1 ? a.duration : io({ ...a, useVideoLength: !0 }) : _ ? O : a.duration || O), ve = S && (Number(a.videoDuration) > 0 || Number(a.end) > 0), ke = S ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + pt(a.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + pt(a.autoName ? "" : a.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([Ye, Mt]) => '<option value="' + Ye + '"' + ((a.videoRounds || "every") === Ye ? " selected" : "") + ">" + Mt + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + pt(a.name) + '" placeholder="' + (m ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + pt(a.group) + '" placeholder="' + (m ? "Rest" : "e.g. Glutes + legs") + '"></label>', be = S ? "Play the whole " + (Number(a.start) > 0 || Number(a.end) > 0 ? "clip" : "video") + (ve ? " · " + ri(io({ ...a, useVideoLength: !0 })) : "") : "Use global timing · " + Fa(O), ge = document.createElement("div");
    ge.className = "moveRow editing" + (d.sheet ? " inSheet" : ""), ge.dataset.index = r, ge.dataset.id = a.id;
    const He = d.isNew ?? (en == null ? void 0 : en.item) === a, at = d.sheet ? '<div class="moveEditActions sheetActions">' + (He ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (a.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + pt(a.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (He ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    ge.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (S ? " videoFields" : "") + '">' + ke + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (_ ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + pt(be) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + U.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((Ye) => '<option value="' + Ye + '"' + (Ye === U.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[Ye] + "</option>").join("") + "</select></div></div>" + at + "</div>";
    const je = (Ye) => ge.querySelector("[data-f=" + Ye + "]"), Ne = () => {
      const Ye = je("global").checked;
      je("dur").disabled = Ye, je("unit").disabled = Ye, ge.querySelector(".creatorDurationRow").classList.toggle("isDisabled", Ye);
    };
    je("global").addEventListener("change", Ne), Ne();
    const De = () => {
      var Ye;
      if (d.sheet) {
        (Ye = d.onCancel) == null || Ye.call(d);
        return;
      }
      He && Ar(), Xt = null, Et();
    }, vt = () => {
      var Pt;
      if (S) {
        bt();
        return;
      }
      const Ye = je("name").value.trim();
      if (!Ye) {
        je("name").focus();
        return;
      }
      a.name = Ye, a.group = je("group").value.trim() || (m ? "Rest" : "Movement");
      const Mt = je("global").checked;
      if (a.useGlobalTiming = Mt, Mt || (a.duration = Math.max(m ? 5 : 1, si(je("dur").value, je("unit").value))), d.sheet) {
        (Pt = d.onSaved) == null || Pt.call(d);
        return;
      }
      He && (en = null), Xt = null, Et(), At(He ? m ? "Rest added" : "Movement added" : "Movement updated");
    }, bt = () => {
      var rt;
      const Ye = je("url").value.trim(), Mt = Pl(Ye);
      if (!Mt) {
        je("urlError").hidden = !1, je("url").classList.add("invalid"), je("url").focus();
        return;
      }
      const Pt = Mt.id !== a.videoId;
      a.url = Ye, a.videoId = Mt.id, a.start = Mt.start, a.end = Mt.end, Pt && (a.videoDuration = null, a.videoError = null);
      const ut = je("name").value.trim();
      a.autoName = !ut, a.name = ut || (Pt ? "" : a.name) || a.videoTitle || "YouTube video", a.group = "Video", a.videoRounds = je("rounds").value, a.useVideoLength = je("global").checked, a.useVideoLength || (a.duration = Math.max(5, si(je("dur").value, je("unit").value))), d.sheet ? (rt = d.onSaved) == null || rt.call(d) : (He && (en = null), Xt = null, Et(), At(He ? "Video added" : "Video updated")), (Pt || !a.videoDuration || a.autoName && !a.videoTitle) && Nc(a);
    };
    if (S && je("url").addEventListener("input", () => {
      je("urlError").hidden = !0, je("url").classList.remove("invalid");
    }), ge.querySelector("[data-a=cancel]").addEventListener("click", De), ge.querySelector("[data-a=save]").addEventListener("click", vt), d.sheet && !He) {
      ge.querySelector("[data-a=hide]").addEventListener("click", () => {
        var Mt;
        return (Mt = d.onHide) == null ? void 0 : Mt.call(d);
      });
      const Ye = ge.querySelector("[data-a=remove]");
      Cs(Ye, Ye.querySelector(".removeFill"), 1200, () => {
        var Mt;
        return (Mt = d.onRemove) == null ? void 0 : Mt.call(d);
      });
    }
    return ge.addEventListener("keydown", (Ye) => {
      Ye.key === "Escape" && (Ye.preventDefault(), Ye.stopPropagation(), De()), Ye.key === "Enter" && Ye.target.matches("input") && (Ye.preventDefault(), vt());
    }), ge;
  }
  function fa(a, r) {
    const d = i(r);
    d.innerHTML = "", a.forEach((m, S) => {
      if (m === Xt && !ci()) {
        d.appendChild(Tr(m, S));
        return;
      }
      const _ = document.createElement("div");
      _.className = "moveRow" + (m.hidden ? " hidden" : "") + (m.kind === "rest" ? " restItem" : "") + (m.kind === "video" ? " videoItem" : "") + (Gl(m) ? " noMeta" : ""), _.dataset.index = S, _.dataset.id = m.id;
      const O = m.kind === "rest" ? m.useGlobalTiming === !0 ? "Global timing" : Fa(m.duration) : m.useGlobalTiming === !1 ? Fa(m.duration) : "Global timing", U = m.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", ve = m.kind === "video" ? m.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (m.useVideoLength === !1 ? "stops after " + Fa(m.duration) : Number(m.videoDuration) > 0 || Number(m.end) > 0 ? ri(io(m)) : "plays to the end") + (m.videoRounds === "first" ? " · first round only" : m.videoRounds === "last" ? " · last round only" : "") : m.group + " · " + O, ke = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + pt(m.name) + '. Drag, or use the up and down arrow keys">' + Oi + "</button>", be = '<div class="moveText"><div class="moveItemName">' + pt(m.name) + U + '</div><div class="moveMeta">' + pt(ve) + "</div></div>", ge = (je) => je.addEventListener("keydown", (Ne) => {
        var bt, Ye;
        if (Ne.key !== "ArrowUp" && Ne.key !== "ArrowDown") return;
        Ne.preventDefault();
        const De = a.indexOf(m), vt = De + (Ne.key === "ArrowUp" ? -1 : 1);
        vt < 0 || vt >= a.length || (a.splice(De, 1), a.splice(vt, 0, m), Et(), (Ye = (bt = i(r).children[vt]) == null ? void 0 : bt.querySelector(".dragHandle")) == null || Ye.focus());
      });
      if (ci()) {
        _.classList.add("phoneRow"), _.tabIndex = 0, _.setAttribute("role", "button"), _.setAttribute("aria-label", "Edit " + (m.name || "step")), _.innerHTML = ke + be + '<span class="rowChevron" aria-hidden="true">›</span>';
        const je = _.querySelector(".dragHandle");
        je.addEventListener("pointerdown", (Ne) => ds(Ne, _, d, a)), ge(je), _.addEventListener("click", (Ne) => {
          Ne.target.closest(".dragHandle") || Ui(m, a);
        }), _.addEventListener("keydown", (Ne) => {
          Ne.key === "Enter" && Ne.target === _ && (Ne.preventDefault(), Ui(m, a));
        }), d.appendChild(_);
        return;
      }
      _.innerHTML = ke + be + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + pt(m.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (m.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + pt(m.name) + '"><span class="removeFill"></span><span class="removeLabel">' + jn + "</span></button></div>", _.querySelector(".editBtn").addEventListener("click", () => {
        Ar(), Xt = m, Et(), qi();
      }), _.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        m.hidden = !m.hidden, Et();
      });
      const He = _.querySelector(".removeBtn");
      Cs(He, He.querySelector(".removeFill"), 1200, () => {
        const je = a.indexOf(m);
        je < 0 || (a.splice(je, 1), Et(), At("Removed " + m.name, { label: "Undo", run: () => {
          a.splice(Math.min(je, a.length), 0, m), Et();
        } }));
      });
      const at = _.querySelector(".dragHandle");
      at.addEventListener("pointerdown", (je) => ds(je, _, d, a)), ge(at), d.appendChild(_);
    });
  }
  const Ya = () => {
    var a;
    return (a = window.matchMedia) == null ? void 0 : a.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, Cn = (a) => {
    var r;
    try {
      (r = navigator.vibrate) == null || r.call(navigator, a);
    } catch {
    }
  };
  function ds(a, r, d, m) {
    if (a.button !== void 0 && a.button !== 0) return;
    a.preventDefault();
    const S = a.currentTarget, _ = a.pointerId, O = !Ya();
    try {
      S.setPointerCapture(_);
    } catch {
    }
    const U = r.closest(".exerciseScroller") || ra(r), ve = d.style.position;
    d.style.position = "relative";
    const ke = [...d.children].filter((ht) => ht.classList.contains("moveRow")), be = ke.indexOf(r), ge = parseFloat(getComputedStyle(d).rowGap) || 8, He = r.offsetHeight, at = He + ge, je = ke.map((ht) => ht.offsetTop), Ne = ke.map((ht) => ht.offsetHeight), De = () => d.getBoundingClientRect().top, vt = d.getBoundingClientRect().width, bt = a.clientY - (De() + je[be]), Ye = a.clientX;
    let Mt = a.clientY, Pt = a.clientX, ut = De() + je[be], rt = 0, xa = 0, za = 0, na = 1, Qo = 0, Pe = be, mt = !1, Aa = 0, Ea = !1, Is = !1, fr = je[be];
    d.classList.add("reordering"), r.classList.add("dragging"), r.style.transition = "none", Cn(8);
    const Ll = () => {
      const ht = Mt - bt + He / 2 - De();
      let Ct = 0;
      return ke.forEach((Zt, nn) => {
        nn !== be && ht > je[nn] + Ne[nn] / 2 && Ct++;
      }), Ct;
    }, Fs = () => {
      ke.forEach((ht, Ct) => {
        if (Ct === be) return;
        const Zt = be < Pe && Ct > be && Ct <= Pe ? -at : be > Pe && Ct >= Pe && Ct < be ? at : 0;
        ht.style.transform = Zt ? "translateY(" + Zt + "px)" : "";
      });
    }, Ri = () => {
      const ht = d.getBoundingClientRect(), Ct = Math.abs(Pt - Ye) > Math.max(80, vt * 0.3) || Pt < ht.left - 24 || Pt > ht.right + 24;
      Ct !== mt && (mt = Ct, r.classList.toggle("willReturn", Ct), Cn(Ct ? 10 : 4));
      const Zt = mt ? be : Ll();
      Zt !== Pe && (Pe = Zt, Fs(), mt || Cn(4));
    }, Io = () => {
      if (Pe === be) return je[be];
      const ht = ke.filter((Zt, nn) => nn !== be);
      let Ct = je[0];
      for (let Zt = 0; Zt < Pe; Zt++) Ct += ht[Zt].offsetHeight + ge;
      return Ct;
    }, Fo = () => {
      const ht = O ? Math.min(Math.abs(rt) / 40, 1) : 0, Ct = O && !Ea ? Math.max(-3, Math.min(3, za * 0.6)) : 0;
      r.style.transform = "translate(" + xa.toFixed(2) + "px," + (ut - (De() + je[be])).toFixed(2) + "px) rotate(" + Ct.toFixed(2) + "deg) scale(" + (na * (1 - 0.04 * ht)).toFixed(4) + "," + (na * (1 + 0.06 * ht)).toFixed(4) + ")";
    }, ft = () => {
      Aa = requestAnimationFrame(ft);
      const ht = Pt - Ye, Ct = Ea ? De() + fr : Mt - bt, Zt = Ea ? 0 : mt ? ht * 0.9 : Math.max(-22, Math.min(22, ht * 0.22)), nn = Ea ? 1 : mt ? 0.97 : 1.035;
      if (!O) {
        ut = Ct, xa = Ea ? 0 : Zt, na = 1, Fo(), Ea && oa();
        return;
      }
      const e = Ea ? 0.24 : 0.2, t = Ea ? 0.62 : 0.68;
      rt = (rt + (Ct - ut) * e) * t, ut += rt, za = (za + (Zt - xa) * 0.16) * 0.7, xa += za, Qo = (Qo + (nn - na) * 0.22) * 0.6, na += Qo, Fo(), Ea && Math.abs(rt) < 0.15 && Math.abs(Ct - ut) < 0.5 && Math.abs(xa) < 0.5 && Math.abs(na - 1) < 3e-3 && oa();
    }, Wt = setInterval(() => {
      if (!U || Ea) return;
      const ht = U.getBoundingClientRect(), Ct = 56, Zt = Mt < ht.top + Ct ? -10 : Mt > ht.bottom - Ct ? 10 : 0;
      Zt && (U.scrollTop += Zt, Ri());
    }, 30);
    function oa() {
      if (Is) return;
      Is = !0, cancelAnimationFrame(Aa);
      const ht = Pe !== be, Ct = r.dataset.id;
      if (d.classList.remove("reordering"), ke.forEach((nn) => {
        nn.style.transition = "none", nn.style.transform = "";
      }), r.classList.remove("dragging", "willReturn"), d.style.position = ve, ht) {
        const [nn] = m.splice(be, 1);
        m.splice(Pe, 0, nn);
      }
      Et();
      const Zt = Ct && d.querySelector('.moveRow[data-id="' + Ct + '"]');
      Zt && O && Zt.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), ht && At("Order saved");
    }
    const ya = (ht) => {
      if (ht.pointerId === _) {
        if (ht.pointerType === "mouse" && ht.buttons === 0) {
          Qa();
          return;
        }
        Mt = ht.clientY, Pt = ht.clientX, Ri();
      }
    }, Ga = (ht) => {
      ht.pointerId === _ && Qa();
    };
    function Qa() {
      Ea || (window.removeEventListener("pointermove", ya, !0), window.removeEventListener("pointerup", Ga, !0), window.removeEventListener("pointercancel", Ga, !0), S.removeEventListener("lostpointercapture", Qa), clearInterval(Wt), mt && Pe !== be && (Pe = be, Fs()), fr = Io(), Ea = !0, Cn(6), setTimeout(oa, 800));
    }
    window.addEventListener("pointermove", ya, !0), window.addEventListener("pointerup", Ga, !0), window.addEventListener("pointercancel", Ga, !0), S.addEventListener("lostpointercapture", Qa), Aa = requestAnimationFrame(ft), Fo();
  }
  function Lr() {
    var S, _, O, U;
    const a = yt[qe], r = (S = i("warmupList")) == null ? void 0 : S.closest("section"), d = (_ = i("cooldownList")) == null ? void 0 : _.closest("section"), m = (U = (O = i("strengthList")) == null ? void 0 : O.closest("section")) == null ? void 0 : U.querySelector(".sectionTitle");
    a != null && a.customSequence ? (r && (r.hidden = !a.includeWarmup), d && (d.hidden = !a.includeCooldown), m && (m.textContent = "Move sequence")) : (r && (r.hidden = !!(a != null && a.warmupOff)), d && (d.hidden = !1), m && (m.textContent = "Kettlebell work")), fa(ia, "warmupList"), fa(Ve, "strengthList"), fa(va, "cooldownList");
  }
  function Ar() {
    if (!en) return;
    const { item: a, arr: r } = en;
    en = null;
    const d = r.indexOf(a);
    d >= 0 && r.splice(d, 1), Xt === a && (Xt = null);
  }
  function Wi(a) {
    return a.id === "warmupList" ? { arr: ia, kind: "warmup", group: "Warm-up" } : a.id === "cooldownList" ? { arr: va, kind: "cooldown", group: "Cooldown" } : { arr: Ve, kind: "work", group: "" };
  }
  function Us(a, r) {
    const d = Wi(r), m = Date.now().toString(36);
    return a === "video" ? { id: "video-" + m, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : a === "rest" ? { id: "rest-" + m, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(te.value) } : { id: "movement-" + m, name: "", group: d.group, kind: d.kind, hidden: !1, useGlobalTiming: !0, duration: Number(L.value) };
  }
  const Vi = "cubic-bezier(.34,1.46,.64,1)";
  function ji(a, r) {
    if (Ya() || !a) {
      r();
      return;
    }
    const d = (_) => {
      var O;
      return ((O = _.dataset) == null ? void 0 : O.id) || _;
    }, m = () => [...a.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], S = new Map(m().map((_) => [d(_), _.getBoundingClientRect().top]));
    r(), m().forEach((_) => {
      const O = S.get(d(_));
      if (O === void 0) return;
      const U = O - _.getBoundingClientRect().top;
      Math.abs(U) < 0.5 || _.animate([{ transform: "translateY(" + U + "px)" }, { transform: "none" }], { duration: 440, easing: Vi });
    });
  }
  function di(a, r) {
    if (!a || Ya()) return;
    const d = a.offsetHeight, m = Math.max(0, d - (r || 0));
    a.animate([{ clipPath: "inset(0 0 " + m + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: Vi });
  }
  function Er(a, r, d, m) {
    const { arr: S } = Wi(r), _ = Us(a, r);
    S.splice(Math.max(0, Math.min(d, S.length)), 0, _), en = { item: _, arr: S }, Xt = _, ji(r.closest(".exerciseScroller,.createStepSlot") || r, () => Et());
    const O = r.querySelector(".moveRow.editing");
    return di(O, m), qi(a === "rest"), O;
  }
  function ra(a) {
    for (let r = a; r && r.nodeType === 1; r = r.parentElement) {
      const d = getComputedStyle(r).overflowY;
      if (/(auto|scroll)/.test(d) && r.scrollHeight > r.clientHeight) return r;
    }
    return null;
  }
  const so = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function Dt(a, r) {
    const d = document.createElement("div");
    return d.className = "addGhost" + (a === "movement" ? "" : " rest"), d.innerHTML = '<span class="addGhostGrip">' + Oi + '</span><span class="addGhostText"><strong>' + pt(r[0]) + "</strong><small>" + pt(r[1]) + "</small></span>", i("workoutModal").appendChild(d), d;
  }
  function Gn(a) {
    a.classList.add("leaving"), setTimeout(() => a.remove(), 180);
  }
  function zi(a, r, d, m) {
    (Xt || en) && (Ar(), Xt = null, Et());
    const S = a.getBoundingClientRect(), _ = Dt(r, so[r]);
    _.setAttribute("aria-hidden", "true"), _.style.width = S.width + "px", _.style.height = S.height + "px", _.style.transform = "translate(" + S.left + "px," + S.top + "px)", a.classList.add("lifting");
    const O = ra(a);
    return Gi({
      ghost: _,
      origin: S,
      sx: d,
      sy: m,
      scroller: O,
      column: a.closest(".exerciseScroller,.createFlow") || O,
      home: () => a.getBoundingClientRect(),
      onDrop: (U, ve, ke) => {
        Gn(_), a.classList.remove("lifting"), Er(r, U, ve, ke);
      },
      onReturn: () => {
        Gn(_), a.classList.remove("lifting");
      }
    });
  }
  function Gi({ ghost: a, origin: r, sx: d, sy: m, scroller: S, column: _, home: O, onDrop: U, onReturn: ve, rowLook: ke = !1 }) {
    var Fo;
    const be = !Ya(), ge = ((Fo = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : Fo.offsetHeight) || 80, He = d - r.left, at = m - r.top, je = 44;
    let Ne = d, De = m, vt = r.left, bt = r.top, Ye = 0, Mt = 0, Pt = !be, ut = null, rt = null, xa = -1, za = 0, na = null;
    const Qo = () => ["warmupList", "strengthList", "cooldownList"].map((ft) => i(ft)).filter((ft) => ft && ft.getClientRects().length && !ft.closest("[hidden]")), Pe = (ft) => {
      if (ft === ut) return;
      ut = ft, a.classList.toggle("overList", !!ft || ke);
      const Wt = ft ? ft.getBoundingClientRect().width : r.width;
      a.style.width = Wt + "px", a.style.height = (ft ? ge : r.height) + "px";
    }, mt = (ft) => {
      ft.classList.add("leaving"), ft.style.height = "0px", ft.style.marginTop = "-8px", setTimeout(() => ft.remove(), be ? 320 : 0);
    }, Aa = (ft, Wt, oa) => {
      if (rt && rt.parentNode === ft && xa === oa || (rt && (mt(rt), rt = null, xa = -1), !ft)) return;
      const ya = document.createElement("div");
      ya.className = "dropSlot", ft.insertBefore(ya, Wt), rt = ya, xa = oa, ya.getBoundingClientRect(), ya.style.height = ge + "px", ya.style.marginTop = "0px";
    }, Ea = () => {
      let ft = null, Wt = 1 / 0;
      for (const Qa of Qo()) {
        const ht = Qa.getBoundingClientRect();
        if (Ne < ht.left - 48 || Ne > ht.right + 48) continue;
        const Ct = ht.top - 28, Zt = ht.bottom + 28, nn = De < Ct ? Ct - De : De > Zt ? De - Zt : 0;
        nn < Wt && (Wt = nn, ft = Qa);
      }
      const oa = _ == null ? void 0 : _.getBoundingClientRect(), Ga = oa && Ne >= oa.left && Ne <= oa.right && De >= oa.top && De <= oa.bottom || Wt === 0 ? ft : null;
      if (Ga) {
        const Qa = [...Ga.children].filter((Ct) => Ct.classList.contains("moveRow"));
        let ht = Qa.findIndex((Ct) => {
          const Zt = Ct.getBoundingClientRect();
          return De < Zt.top + Zt.height / 2;
        });
        ht < 0 && (ht = Qa.length), Aa(Ga, Qa[ht] || null, ht);
      } else Aa(null);
      Pe(Ga);
    }, Is = () => {
      if (na) return na.aim();
      if (ut) {
        const ft = ut.getBoundingClientRect();
        let Wt = De - ge / 2;
        return rt && (Wt = Wt * 0.6 + rt.getBoundingClientRect().top * 0.4), { x: ft.left, y: Wt };
      }
      return { x: Ne - He, y: De - at };
    }, fr = (ft, Wt, oa, ya) => {
      a.style.transform = "translate(" + vt + "px," + bt + "px) rotate(" + ft + "deg) rotate(" + Wt + "rad) scale(" + oa + "," + ya + ") rotate(" + -Wt + "rad)";
    }, Ll = () => {
      if (za = requestAnimationFrame(Ll), !Pt) {
        const ht = Ne - d, Ct = De - m, Zt = Math.min(Math.hypot(ht, Ct) / je, 1);
        vt = r.left + ht * 0.35, bt = r.top + Ct * 0.35, fr(0, Math.atan2(Ct, ht), 1 + 0.155 * Zt, 1 - 0.1 * Zt);
        return;
      }
      const ft = Is();
      if (!be) {
        vt = ft.x, bt = ft.y, fr(0, 0, 1, 1), na && (cancelAnimationFrame(za), na.done());
        return;
      }
      const Wt = na ? na.k : 0.17, oa = na ? na.d : 0.7;
      Ye = (Ye + (ft.x - vt) * Wt) * oa, Mt = (Mt + (ft.y - bt) * Wt) * oa, vt += Ye, bt += Mt;
      const ya = Math.hypot(Ye, Mt), Ga = Math.min(ya / 48, 1), Qa = ut || na ? 0 : Math.max(-5, Math.min(5, Ye * 0.32));
      fr(Qa, Math.atan2(Mt, Ye), 1 + 0.1 * Ga, 1 - 0.063 * Ga), na && ya < 0.15 && Math.hypot(ft.x - vt, ft.y - bt) < 0.6 && (cancelAnimationFrame(za), na.done());
    }, Fs = setInterval(() => {
      if (!S || na) return;
      const ft = S.getBoundingClientRect(), Wt = 64, oa = De < ft.top + Wt ? -(ft.top + Wt - De) / 4 : De > ft.bottom - Wt ? (De - (ft.bottom - Wt)) / 4 : 0;
      oa && (S.scrollTop += Math.max(-18, Math.min(18, oa)), Ea());
    }, 30);
    za = requestAnimationFrame(Ll);
    let Ri = !1;
    const Io = (ft, Wt) => {
      if (Ri) return;
      Ri = !0, cancelAnimationFrame(za);
      const oa = rt ? rt.offsetHeight : ge;
      !ft && rt && (rt.remove(), rt = null), ft ? U(ft, Wt, oa) : ve();
    };
    return {
      move(ft, Wt) {
        Ne = ft, De = Wt, !Pt && Math.hypot(Ne - d, De - m) > je && (Pt = !0, Ye = (Ne - d) * 0.085, Mt = (De - m) * 0.085), Pt && Ea();
      },
      drop(ft) {
        clearInterval(Fs);
        const Wt = ut, oa = xa;
        if (!ft && Wt && rt) {
          const ya = rt;
          na = { k: 0.24, d: 0.62, aim: () => {
            const Ga = ya.getBoundingClientRect();
            return { x: Ga.left, y: Ga.top };
          }, done: () => Io(Wt, oa) }, setTimeout(() => Io(Wt, oa), 650), be || (cancelAnimationFrame(za), Io(Wt, oa));
          return;
        }
        Aa(null), Pe(null), na = { k: 0.2, d: 0.66, aim: () => {
          const ya = O();
          return { x: ya.left, y: ya.top };
        }, done: () => Io(null) }, setTimeout(() => Io(null), 650), be || (cancelAnimationFrame(za), Io(null));
      }
    };
  }
  function ko(a, r) {
    let d = !1;
    a.addEventListener("click", (m) => {
      if (d) {
        d = !1, m.preventDefault();
        return;
      }
      if (ci()) {
        ps(r);
        return;
      }
      const S = i("strengthList"), _ = Er(r, S, Wi(S).arr.length, 0);
      _ == null || _.scrollIntoView({ block: "nearest", behavior: Ya() ? "auto" : "smooth" });
    }), a.addEventListener("pointerdown", (m) => {
      if (m.button !== void 0 && m.button !== 0) return;
      const S = m.pointerId, _ = m.clientX, O = m.clientY;
      let U = null, ve = !1;
      try {
        a.setPointerCapture(S);
      } catch {
      }
      const ke = (De) => {
        if (De.pointerId === S) {
          if (De.pointerType === "mouse" && De.buttons === 0) {
            Ne(!1);
            return;
          }
          if (!U) {
            if (Math.hypot(De.clientX - _, De.clientY - O) < 6) return;
            U = zi(a, r, _, O);
          }
          U.move(De.clientX, De.clientY);
        }
      }, be = (De) => {
        De.pointerId === S && Ne(!1);
      }, ge = (De) => {
        De.pointerId === S && Ne(!0);
      }, He = () => Ne(!1), at = () => Ne(!0), je = (De) => {
        De.key === "Escape" && U && (De.preventDefault(), De.stopPropagation(), Ne(!0));
      };
      function Ne(De) {
        if (!ve && (ve = !0, window.removeEventListener("pointermove", ke, !0), window.removeEventListener("pointerup", be, !0), window.removeEventListener("pointercancel", ge, !0), window.removeEventListener("keydown", je, !0), window.removeEventListener("blur", at), a.removeEventListener("lostpointercapture", He), U)) {
          const vt = U;
          U = null, d = !0, setTimeout(() => {
            d = !1;
          }, 0), vt.drop(De);
        }
      }
      window.addEventListener("pointermove", ke, !0), window.addEventListener("pointerup", be, !0), window.addEventListener("pointercancel", ge, !0), window.addEventListener("keydown", je, !0), window.addEventListener("blur", at), a.addEventListener("lostpointercapture", He);
    });
  }
  const Un = (Gd = window.matchMedia) == null ? void 0 : Gd.call(window, "(max-width: 620px)");
  function ci() {
    var a;
    return !!((a = window.matchMedia) != null && a.call(window, "(max-width: 620px)").matches);
  }
  const cs = (a) => a.charAt(0).toUpperCase() + a.slice(1), Yn = (a) => a.kind === "rest" ? "rest" : a.kind === "video" ? "video" : "movement";
  let lo = null, Rt = null;
  function Tn(a, r, d, m) {
    Oa(), i("sheetTitle").textContent = a;
    const S = i("sheetBody");
    S.innerHTML = "", S.appendChild(r), lo = d || null, i("sheet").setAttribute("aria-hidden", "false"), i("sheetScrim").classList.add("open"), i("sheet").classList.add("open"), setTimeout(() => {
      if (!i("sheet").classList.contains("open") || !S.contains(r)) return;
      const _ = m ? S.querySelector("input[data-f=url],input[data-f=name]") : S.querySelector("button,input,select");
      _ == null || _.focus({ preventScroll: !0 });
    }, Ya() ? 0 : 360);
  }
  function Oa() {
    const a = i("sheet");
    if (!a.classList.contains("open")) return;
    a.classList.remove("open"), i("sheetScrim").classList.remove("open"), a.setAttribute("aria-hidden", "true"), a.contains(n.activeElement) && n.activeElement.blur();
    const r = lo;
    lo = null, r == null || r(), setTimeout(sa, 0);
  }
  i("sheetScrim").addEventListener("click", Oa), i("sheet").addEventListener("keydown", (a) => {
    a.key === "Escape" && (a.preventDefault(), Oa());
  });
  function Ui(a, r) {
    const d = Tr(a, r.indexOf(a), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        Oa(), Et(), At(cs(Yn(a)) + " updated");
      },
      onCancel: Oa,
      onHide() {
        a.hidden = !a.hidden, Oa(), Et(), At((a.hidden ? "Hidden: " : "Showing: ") + a.name);
      },
      onRemove() {
        Oa();
        const m = r.indexOf(a);
        m < 0 || (r.splice(m, 1), Et(), At("Removed " + a.name, { label: "Undo", run: () => {
          r.splice(Math.min(m, r.length), 0, a), Et();
        } }));
      }
    });
    Tn("Edit " + Yn(a), d, null, !1);
  }
  function Mo() {
    const a = document.createElement("div");
    a.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([r, d, m, S]) => {
      const _ = document.createElement("button");
      _.type = "button", _.className = "sheetChoice", _.innerHTML = '<span class="timeIcon" aria-hidden="true">' + Sn(d) + "</span><span><strong>" + m + "</strong><small>" + S + "</small></span>", _.addEventListener("click", () => ps(r)), a.appendChild(_);
    }), Tn("Add to the move", a, null, !1);
  }
  function ps(a) {
    Rt && mi();
    const r = Us(a, i("strengthList")), d = Tr(r, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        Oa(), Hl(r, a);
      },
      onCancel: Oa
    });
    Tn("New " + Yn(r), d, null, !0);
  }
  const Ma = i("workoutModal").querySelector(".modalStatic"), pi = { parent: Ma.parentNode, next: Ma.nextSibling };
  function Ys() {
    const a = document.createElement("div");
    a.className = "sheetSetup", a.appendChild(Ma);
    const r = document.createElement("button");
    r.type = "button", r.className = "primary sheetDone", r.textContent = "Done", r.addEventListener("click", Oa), a.appendChild(r), Tn("Setup", a, () => {
      pi.parent.insertBefore(Ma, pi.next), Yi();
    }, !1);
  }
  function Yi() {
    var r, d;
    const a = i("setupSummaryName");
    a && (a.textContent = (((r = i("workoutNameInput")) == null ? void 0 : r.value) || "").trim() || ((d = yt[qe]) == null ? void 0 : d.name) || "Move", i("setupSummaryMeta").textContent = oo.textContent);
  }
  i("setupSummary").addEventListener("click", Ys), i("addFab").addEventListener("click", Mo);
  function ui() {
    const a = i("strengthList");
    return ra(a) || a.closest(".exerciseScroller");
  }
  function fi() {
    const a = i("strengthList").getBoundingClientRect(), r = (ui() || i("strengthList")).getBoundingClientRect(), d = (Rt == null ? void 0 : Rt.ghost.offsetHeight) || 64;
    return { left: a.left, top: Math.max(r.top + 12, Math.min(r.bottom - d - 96, r.top + r.height * 0.55 - d / 2)), width: a.width, height: d };
  }
  function Hl(a, r) {
    var U;
    const d = Dt(r, [a.name || so[r][0], "Drag into place"]);
    d.classList.add("overList", "hovering"), d.setAttribute("aria-label", (a.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const m = document.createElement("span");
    m.className = "addGhostActions", m.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + pt(a.name) + '">✕</button>', d.appendChild(m), Rt = { item: a, type: r, ghost: d };
    const S = ((U = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : U.offsetHeight) || 64;
    d.style.width = i("strengthList").getBoundingClientRect().width + "px", d.style.height = S + "px";
    const _ = fi(), O = $a.querySelector(".modal").getBoundingClientRect().bottom;
    d.style.transform = "translate(" + _.left + "px," + O + "px)", d.getBoundingClientRect(), Ya() || (d.classList.add("rising"), setTimeout(() => d.classList.remove("rising"), 650)), d.style.transform = "translate(" + _.left + "px," + _.top + "px)", m.querySelector("[data-a=end]").addEventListener("click", mi), m.querySelector("[data-a=discard]").addEventListener("click", Zi), d.addEventListener("pointerdown", hi);
  }
  function hi(a) {
    if (!Rt || a.target.closest("button") || a.button !== void 0 && a.button !== 0) return;
    a.preventDefault();
    const { item: r, ghost: d } = Rt, m = a.pointerId;
    try {
      d.setPointerCapture(m);
    } catch {
    }
    d.classList.remove("hovering", "rising"), d.classList.add("held");
    const S = d.getBoundingClientRect(), _ = ui(), O = Gi({
      ghost: d,
      origin: { left: S.left, top: S.top, width: S.width, height: S.height },
      sx: a.clientX,
      sy: a.clientY,
      scroller: _,
      column: i("strengthList").closest(".exerciseScroller,.createFlow") || _,
      rowLook: !0,
      home: fi,
      onDrop: (Ne, De, vt) => {
        Rt = null, Gn(d), Zn(r, Ne, De, vt);
      },
      onReturn: () => {
        d.classList.remove("held"), d.classList.add("hovering");
      }
    });
    let U = !1;
    const ve = (Ne) => {
      if (Ne.pointerId === m) {
        if (Ne.pointerType === "mouse" && Ne.buttons === 0) {
          je(!1);
          return;
        }
        O.move(Ne.clientX, Ne.clientY);
      }
    }, ke = (Ne) => {
      Ne.pointerId === m && je(!1);
    }, be = (Ne) => {
      Ne.pointerId === m && je(!0);
    }, ge = () => je(!1), He = () => je(!0), at = (Ne) => {
      Ne.key === "Escape" && (Ne.preventDefault(), je(!0));
    };
    function je(Ne) {
      U || (U = !0, window.removeEventListener("pointermove", ve, !0), window.removeEventListener("pointerup", ke, !0), window.removeEventListener("pointercancel", be, !0), window.removeEventListener("keydown", at, !0), window.removeEventListener("blur", He), d.removeEventListener("lostpointercapture", ge), O.drop(Ne));
    }
    window.addEventListener("pointermove", ve, !0), window.addEventListener("pointerup", ke, !0), window.addEventListener("pointercancel", be, !0), window.addEventListener("keydown", at, !0), window.addEventListener("blur", He), d.addEventListener("lostpointercapture", ge);
  }
  function Zn(a, r, d, m) {
    const S = Wi(r);
    a.kind !== "rest" && a.kind !== "video" && (a.kind = S.kind, S.group && (!a.group || a.group === "Movement") && (a.group = S.group)), S.arr.splice(Math.max(0, Math.min(d, S.arr.length)), 0, a), ji(r.closest(".exerciseScroller,.createStepSlot") || r, () => Et()), di(r.querySelector('.moveRow[data-id="' + a.id + '"]'), m), At(cs(Yn(a)) + " added");
  }
  function mi() {
    var m;
    if (!Rt) return;
    const { item: a, ghost: r } = Rt;
    Rt = null, Gn(r);
    const d = i("strengthList");
    Zn(a, d, Wi(d).arr.length, 0), (m = d.querySelector('.moveRow[data-id="' + a.id + '"]')) == null || m.scrollIntoView({ block: "nearest", behavior: Ya() ? "auto" : "smooth" });
  }
  function Zi() {
    if (!Rt) return;
    const a = Rt.ghost;
    Rt = null, Gn(a), At("Discarded");
  }
  function us() {
    Rt && (Rt.ghost.remove(), Rt = null);
  }
  window.addEventListener("resize", () => {
    if (Rt != null && Rt.ghost.classList.contains("hovering")) {
      const a = fi();
      Rt.ghost.style.width = a.width + "px", Rt.ghost.style.transform = "translate(" + a.left + "px," + a.top + "px)";
    }
  }), (Ud = Un == null ? void 0 : Un.addEventListener) == null || Ud.call(Un, "change", () => {
    Oa(), Rt && !ci() && mi(), Lr();
  });
  {
    const a = i("workoutModal").querySelector(".modal");
    a.addEventListener("scroll", () => {
      (a.scrollTop || a.scrollLeft) && (a.scrollTop = 0, a.scrollLeft = 0);
    });
  }
  function sa() {
    const a = i("workoutModal"), r = window.visualViewport;
    if (!a.classList.contains("open") || !ci()) {
      gi();
      return;
    }
    const d = r ? r.offsetTop : 0, m = r ? r.offsetLeft : 0, S = r ? r.width : window.innerWidth, _ = r ? r.height : window.innerHeight;
    Object.assign(a.style, { right: "auto", bottom: "auto", width: S + "px", height: _ + "px", top: d + "px", left: m + "px" });
    const O = a.getBoundingClientRect();
    Math.abs(O.top - d) > 0.5 && (a.style.top = 2 * d - O.top + "px"), Math.abs(O.left - m) > 0.5 && (a.style.left = 2 * m - O.left + "px");
  }
  function gi() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((a) => i("workoutModal").style.removeProperty(a));
  }
  (Yd = window.visualViewport) == null || Yd.addEventListener("resize", sa), (Zd = window.visualViewport) == null || Zd.addEventListener("scroll", sa), window.addEventListener("resize", sa), window.addEventListener("scroll", sa, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(sa, 250));
  function vi() {
    Ve.length > 0;
    const a = i("addMovementBtn"), r = i("addRestBtn");
    a && (a.innerHTML = Oi + "<span>Add movement</span>"), r && (r.innerHTML = Oi + "<span>Add rest</span>");
    const d = i("addVideoBtn");
    d && (d.innerHTML = Oi + "<span>Add video</span>");
  }
  function So() {
    const a = i("useGlobalTiming").checked, r = i("addMovementDuration"), d = i("addMovementUnit");
    r.disabled = a, d.disabled = a, r.parentElement.style.opacity = a ? ".38" : "1", i("globalTimingValue").textContent = "Use global timing · " + Fa(L.value);
    const m = i("useGlobalRestTiming").checked, S = i("addRestDuration"), _ = i("addRestUnit");
    S.disabled = m, _.disabled = m, S.parentElement.style.opacity = m ? ".38" : "1", i("globalRestTimingValue").textContent = "Use global timing · " + Fa(te.value);
  }
  let fs = "movement";
  function hs(a) {
    fs = a;
    const r = i("movementFields"), d = i("restFields");
    r.hidden = a !== "movement", d.hidden = a !== "rest", i("movementCreatorHeading").textContent = "Add movement", i("movementCreator").setAttribute("aria-label", "Create movement"), So();
  }
  function ms() {
    yt[qe];
    const a = ea ? !0 : i("useGlobalTiming").checked, r = a ? Number(L.value) : si(
      i("addMovementDuration").value,
      i("addMovementUnit").value
    ), d = ea ? !0 : i("useGlobalRestTiming").checked, m = d ? Number(te.value) : si(
      i("addRestDuration").value,
      i("addRestUnit").value
    );
    if (fs === "rest") {
      const S = i("addRestTitle").value.trim() || "Rest", _ = i("addRestGroup").value.trim() || "Rest";
      Ve.push({
        id: "rest-" + Date.now(),
        name: S,
        group: _,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: d,
        duration: Math.max(5, m || Number(te.value))
      }), Et(), i("movementCreator").hidden = !0, i("addRestTitle").value = "Rest", i("addRestGroup").value = "Rest", At("Rest added"), ea && (ne("movements"), D());
    } else {
      const S = i("addMovementInput").value.trim();
      if (!S) return;
      const _ = i("addMovementGroup").value.trim() || "Movement";
      Ve.push({
        id: "movement-" + Date.now(),
        name: S,
        group: _,
        kind: "work",
        hidden: !1,
        useGlobalTiming: a,
        duration: Math.max(5, r || Number(L.value))
      }), i("addMovementInput").value = "", i("addMovementGroup").value = "", Et(), i("movementCreator").hidden = !0, At("Movement added"), ea && (ne("movements"), D());
    }
    vi();
  }
  let Kn = null;
  function At(a, r) {
    const d = i("toast");
    d.innerHTML = "";
    const m = document.createElement("span");
    if (m.textContent = a, d.appendChild(m), r) {
      const S = document.createElement("button");
      S.type = "button", S.className = "toastAction", S.textContent = r.label, S.addEventListener("click", () => {
        r.run(), d.classList.remove("show", "withAction"), clearTimeout(Kn);
      }), d.appendChild(S);
    }
    d.classList.toggle("withAction", !!r), d.classList.add("show"), clearTimeout(Kn), Kn = setTimeout(() => d.classList.remove("show", "withAction"), r ? 5e3 : 2200);
  }
  const Dr = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], Ki = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function gs(a) {
    return Math.max(0, Math.min(5, Math.floor(Number(a) / 100 * 6)));
  }
  function qa(a, r) {
    return Dr[gs(r)];
  }
  function Ba(a) {
    return Ki[gs(a)];
  }
  function Ut(a) {
    return a.getFullYear() + "-" + String(a.getMonth() + 1).padStart(2, "0") + "-" + String(a.getDate()).padStart(2, "0");
  }
  function $n() {
    return { morning: it().morningTime || "08:00", evening: it().eveningTime || "19:00" };
  }
  function co(a) {
    const [r, d] = String(a).split(":").map(Number);
    return (r || 0) * 60 + (d || 0);
  }
  function Zs(a) {
    const r = $n();
    return a.getHours() * 60 + a.getMinutes() >= co(r.evening) ? "evening" : "morning";
  }
  function f(a, r) {
    return xt.checkins.find((d) => d.date === a && d.slot === r);
  }
  function b(a) {
    return !!(a && a.mood != null && a.energy != null);
  }
  function x() {
    const a = /* @__PURE__ */ new Date(), r = Ut(a), d = Zs(a), m = $n(), S = a.getHours() * 60 + a.getMinutes();
    return d === "morning" && S < co(m.morning) || b(f(r, d)) ? null : d;
  }
  const C = i("checkinModal"), H = i("checkinTab"), G = i("checkinBadge"), K = { mood: { input: i("moodInput"), fill: i("moodFill") }, energy: { input: i("energyLevelInput"), fill: i("energyLevelFill") } };
  function he(a) {
    const { input: r, fill: d } = K[a];
    d.style.width = r.value + "%", r.setAttribute("aria-valuetext", qa(a, r.value));
  }
  Object.keys(K).forEach((a) => K[a].input.addEventListener("input", () => he(a)));
  let J = null;
  function fe() {
    const a = $n(), r = /* @__PURE__ */ new Date(), d = r.getHours() * 60 + r.getMinutes();
    return d < co(a.morning) ? "Next check-in at " + a.morning : d < co(a.evening) ? "Next check-in at " + a.evening : "Next check-in tomorrow at " + a.morning;
  }
  function xe() {
    const a = $n(), r = /* @__PURE__ */ new Date(), d = r.getHours() * 60 + r.getMinutes(), m = (S, _) => {
      const [O, U] = S.split(":").map(Number);
      return new Date(r.getFullYear(), r.getMonth(), r.getDate() + (_ ? 1 : 0), O, U);
    };
    return d < co(a.morning) ? { date: m(a.morning), time: a.morning } : d < co(a.evening) ? { date: m(a.evening), time: a.evening } : { date: m(a.morning, !0), time: a.morning };
  }
  let Ee = null, Je = null;
  function Ke() {
    if (x()) {
      tt(), Ft();
      return;
    }
    const a = xe(), r = Math.max(0, Math.round((a.date - Date.now()) / 1e3)), d = Math.floor(r / 3600), m = Math.floor(r % 3600 / 60), S = r % 60;
    i("peekCountdown").textContent = d + ":" + String(m).padStart(2, "0") + ":" + String(S).padStart(2, "0"), i("peekAt").textContent = "Available at " + a.time;
  }
  function Be() {
    Ke(), H.classList.add("peek"), clearInterval(Je), Je = setInterval(Ke, 1e3), clearTimeout(Ee), Ee = setTimeout(tt, 6e3);
  }
  function tt() {
    H.classList.remove("peek"), clearInterval(Je), clearTimeout(Ee);
  }
  function Ge() {
    const a = x();
    if (!a) {
      H.classList.contains("peek") ? tt() : Be();
      return;
    }
    J = { date: Ut(/* @__PURE__ */ new Date()), slot: a };
    const d = f(J.date, a), m = xt.checkins.find((S) => b(S));
    Object.keys(K).forEach((S) => {
      K[S].input.value = (d == null ? void 0 : d[S]) ?? (m == null ? void 0 : m[S]) ?? 50, he(S);
    }), i("checkinTitle").textContent = a === "morning" ? "Morning check-in" : "Evening check-in", C.classList.add("open"), C.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => K.mood.input.focus());
  }
  function Te() {
    C.classList.remove("open"), C.setAttribute("aria-hidden", "true"), J && (nt = J.date + "-" + J.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", nt);
    } catch {
    }
    J = null, Ft();
  }
  function gt() {
    if (!J) return;
    if (b(f(J.date, J.slot))) {
      Te();
      return;
    }
    const { date: a, slot: r } = J;
    let d = f(a, r);
    d || (d = { date: a, slot: r }, xt.checkins.unshift(d), xt.checkins = xt.checkins.slice(0, 2e3)), d.mood = Number(K.mood.input.value), d.energy = Number(K.energy.input.value), d.scale = 100, d.at = (/* @__PURE__ */ new Date()).toISOString(), ka(), l.fire("checkin", { slot: r, mood: d.mood, energy: d.energy, mood_label: qa("mood", d.mood), energy_label: qa("energy", d.energy) }), At((r === "morning" ? "Morning" : "Evening") + " check-in saved"), Te(), ta(), la(), Jt(), bo();
  }
  let nt = "";
  try {
    nt = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function Ft() {
    const a = x();
    G.hidden = !a, H.hidden = !a, a || tt(), H.classList.toggle("due", !!a), H.setAttribute("aria-label", a ? (a === "morning" ? "Morning" : "Evening") + " check-in is due" : fe()), H.title = a ? "Check in now" : fe();
  }
  function We() {
    Ft();
    const a = x();
    !a || C.classList.contains("open") || it().checkinAutoOpen !== !1 && (i("app").classList.contains("house") || !Oe.home.classList.contains("active") || $a.classList.contains("open") || nt !== Ut(/* @__PURE__ */ new Date()) + "-" + a && Ge());
  }
  H.addEventListener("click", Ge), i("checkinLater").addEventListener("click", Te), i("checkinSave").addEventListener("click", gt), C.addEventListener("click", (a) => {
    a.target === C && Te();
  }), C.addEventListener("keydown", (a) => {
    a.key === "Escape" && (a.preventDefault(), Te());
  }), setInterval(We, 3e4);
  function ta() {
    const a = Ut(/* @__PURE__ */ new Date()), r = (d) => xt.checkins.find((m) => m.date === a && m[d] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([d, m]) => {
      const S = r(d);
      i(m).textContent = S ? qa(d, S[d]) : "—";
    });
  }
  function la() {
    const a = i("feelCard");
    if (!a) return;
    const r = /* @__PURE__ */ new Date(), d = new Date(r.getFullYear(), r.getMonth(), r.getDate() - (r.getDay() + 6) % 7), m = [...Array(7)].map((ke, be) => {
      const ge = new Date(d.getFullYear(), d.getMonth(), d.getDate() + be), He = Ut(ge), at = xt.checkins.filter((Ne) => Ne.date === He), je = (Ne) => {
        const De = at.map((vt) => vt[Ne]).filter((vt) => vt != null);
        return De.length ? De.reduce((vt, bt) => vt + bt, 0) / De.length : null;
      };
      return { d: ge, key: He, mood: je("mood"), energy: je("energy"), count: at.filter(b).length, future: ge > r && He !== Ut(r) };
    }), S = (ke) => {
      const be = m.map((ge) => ge[ke]).filter((ge) => ge != null);
      return be.length ? be.reduce((ge, He) => ge + He, 0) / be.length : null;
    }, _ = S("mood"), O = S("energy"), U = (ke, be) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + ke + "</span><span>" + (be == null ? "—" : pt(qa("", be))) + '</span></div><div class="feelTrack"><span style="width:' + (be == null ? 0 : Math.max(4, be)) + "%;background:" + (be == null ? "transparent" : Ba(be)) + '"></span></div></div>', ve = m.filter((ke) => ke.mood != null && ke.energy != null).sort((ke, be) => be.mood + be.energy - (ke.mood + ke.energy))[0];
    a.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (_ == null ? "No check-ins yet" : pt(qa("", (_ + O) / 2))) + '</div><div class="weekCopy">' + (_ == null ? "Your first check-in will appear here." : "on average this week" + (ve ? " · best day " + pt(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(ve.d)) : "")) + '</div></div></div><div class="feelDays">' + m.map(
      (ke) => '<div class="weekChip feelDay' + (ke.future ? " future" : "") + (ke.key === Ut(r) ? " today" : "") + '"><div class="weekChipTop"><strong>' + pt(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(ke.d)) + "</strong>" + (ke.count >= 2 ? '<span class="weekTick">' + Sn("check") + "</span>" : '<span class="feelDots">' + "●".repeat(ke.count) + "</span>") + "</div>" + U("Mood", ke.mood) + U("Energy", ke.energy) + "</div>"
    ).join("") + "</div>";
  }
  const Za = i("upcomingCountSetting");
  Za.addEventListener("change", () => {
    Vo = Za.value === "all" ? "all" : Number(Za.value), Ci();
  });
  const tn = i("tempoRevealBtn"), _r = i("tempoExperiment"), pn = i("tempoQuad"), zo = i("tempoDot"), Tt = i("tempoEstimate"), po = i("tempoReadout");
  let Ln = { x: 0.5, y: 0.5 }, An = !1, bi = { total: 20, work: 45, rest: 15 };
  function $i(a, r, d, m) {
    const S = Math.max(r, Math.min(d, a));
    return Math.round((S - r) / m) * m + r;
  }
  function Xi(a, r) {
    const d = (a - 0.5) * 2, m = (r - 0.5) * 2, S = $i(
      bi.total + d * 5 + m * 8,
      Number(R.min),
      Number(R.max),
      Number(R.step)
    ), _ = $i(
      bi.work + d * 10 + m * 8,
      Number(L.min),
      Number(L.max),
      Number(L.step)
    ), O = $i(
      bi.rest + d * 6 + m * 6,
      Number(te.min),
      Number(te.max),
      Number(te.step)
    );
    return R.value = S, L.value = _, te.value = O, ce.textContent = _ + " sec", ye.textContent = O + " sec", Cr(), { total: S, work: _, rest: O };
  }
  function Ka(a, r) {
    const d = a < 0.34 ? "Low" : a > 0.66 ? "Hard" : "Medium", m = r < 0.34 ? "Fast" : r > 0.66 ? "Slow" : "Balanced", S = Xi(a, r);
    po.textContent = d + " + " + m, Tt.textContent = S.total + " min", pn.setAttribute("aria-valuetext", d + " and " + m + ", estimated " + S.total + " minutes");
  }
  function Il(a) {
    const r = pn.getBoundingClientRect(), d = Math.max(0, Math.min(1, (a.clientX - r.left) / r.width)), m = Math.max(0, Math.min(1, (a.clientY - r.top) / r.height));
    Ln = { x: d, y: m }, zo.style.left = d * 100 + "%", zo.style.top = m * 100 + "%", Ka(d, m);
  }
  tn.addEventListener("click", () => {
    const a = _r.hidden;
    _r.hidden = !a, tn.setAttribute("aria-expanded", a ? "true" : "false"), tn.textContent = a ? "Now close this" : "Don’t try this!", a && (bi = {
      total: Number(R.value),
      work: Number(L.value),
      rest: Number(te.value)
    }, Ln = { x: 0.5, y: 0.5 }, zo.style.left = "50%", zo.style.top = "50%", Ka(Ln.x, Ln.y));
  }), n.querySelectorAll("[data-feedback-rating]").forEach((a) => a.addEventListener("click", () => {
    Number(a.dataset.feedbackRating), n.querySelectorAll("[data-feedback-rating]").forEach((r) => r.classList.toggle("selected", r === a));
  }));
  const vs = i("testingFeedbackForm"), bd = i("testingFeedbackThanks"), bs = i("testingFeedbackAgain");
  vs.addEventListener("submit", (a) => {
    a.preventDefault(), vs.hidden = !0, bd.hidden = !1, At("Feedback captured for prototype");
  }), bs.addEventListener("click", (a) => {
    a.preventDefault(), vs.reset(), n.querySelectorAll("[data-feedback-rating]").forEach((r) => r.classList.remove("selected")), bd.hidden = !0, vs.hidden = !1;
  }), pn.addEventListener("pointerdown", (a) => {
    var r;
    An = !0, Il(a);
    try {
      (r = pn.setPointerCapture) == null || r.call(pn, a.pointerId);
    } catch {
    }
  }), pn.addEventListener("pointermove", (a) => {
    An && Il(a);
  }), pn.addEventListener("pointerup", (a) => {
    An && (An = !1, Il(a), Et());
  }), pn.addEventListener("pointercancel", () => An = !1), pn.addEventListener("keydown", (a) => {
    let { x: r, y: d } = Ln, m = !0;
    a.key === "ArrowLeft" ? r -= 0.05 : a.key === "ArrowRight" ? r += 0.05 : a.key === "ArrowUp" ? d -= 0.05 : a.key === "ArrowDown" ? d += 0.05 : m = !1, m && (a.preventDefault(), r = Math.max(0, Math.min(1, r)), d = Math.max(0, Math.min(1, d)), Ln = { x: r, y: d }, zo.style.left = r * 100 + "%", zo.style.top = d * 100 + "%", Ka(r, d), Et());
  });
  const $a = i("workoutModal");
  let Ji = null;
  function Qi(a) {
    return a.map((r) => ({ ...r }));
  }
  function Fl() {
    const a = yt[qe];
    return {
      key: qe,
      profile: a ? JSON.parse(JSON.stringify(a)) : null,
      warmup: Qi(ia),
      strength: Qi(Ve),
      cooldown: Qi(va),
      total: Number(R.value),
      work: Number(L.value),
      rest: Number(te.value),
      rounds: Number(ct.value) || 1
    };
  }
  function wd(a = !1) {
    ea = !!a, Xt = null, en = null, Oa(), us(), Ji = Fl(), i("moveEditorTitle").textContent = ea ? "Create new move" : "Edit move", i("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", i("moveEditorSubtitle").hidden = !ea, i("warmupRow").hidden = ea, i("deleteMoveOpen").hidden = ea;
    const r = i("createMoveOptions");
    r.hidden = !ea;
    {
      const d = yt[qe];
      i("includeWarmupPreset").checked = !!(d != null && d.includeWarmup), i("includeCooldownPreset").checked = !!(d != null && d.includeCooldown);
    }
    if (xd(), ea) {
      i("useGlobalTiming").checked = !0, i("useGlobalRestTiming").checked = !0;
      const d = yt[qe];
      li((d == null ? void 0 : d.preset) || "movement", !1);
    }
    i("movementCreator").hidden = !0, hs("movement"), vi(), So(), _r.hidden = !0, tn.setAttribute("aria-expanded", "false"), tn.textContent = "Don’t try this!", $a.classList.toggle("createMode", ea), $a.querySelector(".modal").classList.toggle("createMode", ea), $a.classList.add("open"), $a.setAttribute("aria-hidden", "false"), sa(), ea && Ce();
  }
  function Cc() {
    const a = yt[qe];
    return a != null && a.customSequence ? !!a.includeWarmup : !(a != null && a.warmupOff);
  }
  function xd() {
    const a = Cc(), r = i("warmupSwitch");
    r.classList.toggle("on", a), r.setAttribute("aria-checked", String(a));
  }
  i("warmupSwitch").addEventListener("click", () => {
    const a = yt[qe];
    a && (a.customSequence ? (i("includeWarmupPreset").checked = !a.includeWarmup, ls()) : (a.warmupOff = !a.warmupOff, Et()), xd());
  });
  function Ks() {
    Oa(), us(), gi(), en = null, Xt = null, $a.classList.contains("createMode") && le(), $a.classList.remove("createMode"), $a.querySelector(".modal").classList.remove("createMode"), $a.classList.remove("open"), $a.setAttribute("aria-hidden", "true");
  }
  function yd() {
    if (!Ji) return;
    const a = Ji;
    a.profile && (yt[a.key] = JSON.parse(JSON.stringify(a.profile))), qe = a.key, ia = Qi(a.warmup), Ve = Qi(a.strength), va = Qi(a.cooldown), R.value = a.total, L.value = a.work, te.value = a.rest, ct.value = a.rounds || 1;
    const r = yt[qe];
    if (r) {
      n.querySelectorAll(".workoutPanel[data-workout]").forEach((m) => m.classList.toggle("active", m.dataset.workout === qe));
      const d = n.querySelector(".workoutPanel.active");
      if (d) {
        const m = d.querySelector(".workoutName");
        m && (m.textContent = r.name);
        const S = d.querySelector(".panelCollapsedText");
        S && (S.textContent = r.name);
        const _ = d.querySelector(".sourceTag");
        _ && (_.textContent = r.source);
      }
      v.value = r.name;
    }
    Et();
  }
  i("cancelWorkoutEdit").addEventListener("click", () => {
    if (ea) {
      const a = qe;
      delete yt[a], ea = !1, cn = null, Mn(xt.order.find((r) => yt[r]) || Object.keys(yt)[0]);
    } else
      yd();
    Ks();
  }), i("saveWorkoutEdit").addEventListener("click", () => {
    Oa(), Rt && mi();
    const a = yt[qe], r = v.value.trim() || "New move";
    if (a && (a.name = r), Ar(), Xt = null, Et(), ea && a)
      ba(qe, a), n.querySelectorAll(".workoutPanel[data-workout]").forEach((d) => d.classList.toggle("active", d.dataset.workout === qe)), ea = !1, cn = null, xt.order.includes(qe) || xt.order.push(qe), At("Move created");
    else {
      const d = n.querySelector(".workoutPanel.active");
      if (d) {
        const m = d.querySelector(".workoutName");
        m && (m.textContent = r);
        const S = d.querySelector(".panelCollapsedText");
        S && (S.textContent = r);
      }
      At("Move saved");
    }
    Ji = null, Ks(), ka();
  }), $a.addEventListener("click", (a) => {
    if (a.target === $a) {
      if (ea) {
        const r = qe;
        delete yt[r], ea = !1, cn = null, Mn(xt.order.find((d) => yt[d]) || Object.keys(yt)[0]);
      } else
        yd();
      Ks();
    }
  }), ko(i("addMovementBtn"), "movement"), ko(i("addRestBtn"), "rest"), ko(i("addVideoBtn"), "video"), i("closeMovementCreator").addEventListener("click", () => {
    i("movementCreator").hidden = !0;
  }), i("useGlobalTiming").addEventListener("change", So), i("useGlobalRestTiming").addEventListener("change", So), n.querySelectorAll(".createPresetBtn").forEach((a) => a.addEventListener("click", () => {
    li(a.dataset.movePreset, !0), Et();
  })), i("includeWarmupPreset").addEventListener("change", ls), i("includeCooldownPreset").addEventListener("change", ls), i("includeWarmupPreset").addEventListener("change", D), i("includeCooldownPreset").addEventListener("change", D), v.addEventListener("input", D), v.addEventListener("input", Yi), i("confirmAddMovement").addEventListener("click", ms), i("confirmAddRest").addEventListener("click", ms), i("addMovementInput").addEventListener("keydown", (a) => {
    a.key === "Enter" && ms();
  });
  const rn = i("countdown"), $s = i("countNum"), Go = i("countdownPixelCanvas");
  let Br = null, wi = "appear";
  class kd {
    constructor(r, d, m, S, _, O, U) {
      this.width = r.width, this.height = r.height, this.ctx = d, this.x = m, this.y = S, this.color = _, this.speed = (Math.random() * 0.8 + 0.1) * O, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = U, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let ws = [], Ol = 1, ql = 1;
  function xi() {
    const a = parseFloat(getComputedStyle(i("app")).zoom);
    return Number.isFinite(a) && a > 0 ? a : 1;
  }
  function Tc() {
    var ke;
    if (!Go) return;
    const a = xi(), r = Math.max(1, window.innerWidth / a), d = Math.max(1, window.innerHeight / a);
    Ol = r, ql = d;
    const m = Math.min(window.devicePixelRatio || 1, 2);
    Go.width = Math.floor(r * m), Go.height = Math.floor(d * m), Go.style.width = r + "px", Go.style.height = d + "px";
    const S = Go.getContext("2d");
    S.setTransform(m, 0, 0, m, 0, 0);
    const _ = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], O = 12, U = (ke = window.matchMedia) == null ? void 0 : ke.call(window, "(prefers-reduced-motion: reduce)").matches, ve = U ? 0 : 0.055;
    ws = [];
    for (let be = 0; be < r; be += O)
      for (let ge = 0; ge < d; ge += O) {
        const He = be - r / 2, at = ge - d / 2, je = Math.sqrt(He * He + at * at), Ne = U ? 0 : Math.random() * 75 + je * 0.05, De = new kd({ width: r, height: d }, S, be, ge, _[Math.floor(Math.random() * _.length)], ve, Ne);
        De.maxSizeInteger = 4, De.maxSize = Math.random() * 3.2 + 0.8, De.sizeStep = 0.35 + Math.random() * 0.45, ws.push(De);
      }
  }
  function Md(a) {
    cancelAnimationFrame(Br), wi = a;
    const r = Go == null ? void 0 : Go.getContext("2d");
    if (!r) return;
    function d() {
      r.clearRect(0, 0, Ol, ql);
      let m = !0;
      ws.forEach((S) => {
        S[wi](), S.isIdle || (m = !1);
      }), wi === "disappear" && m || (Br = requestAnimationFrame(d));
    }
    Br = requestAnimationFrame(d);
  }
  function Xs() {
    cancelAnimationFrame(Br), Tc(), Md("appear"), setTimeout(() => Md("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    rn.classList.contains("active") && Xs();
  });
  const Rr = i("pixelTrailCanvas"), Uo = Rr.getContext("2d");
  let uo = !0, yi = 0.7, ki = 600, Pr = [], Nr = null, Yo = { x: 0, y: 0, ready: !1 };
  function Js() {
    const a = u.getBoundingClientRect(), r = xi(), d = Math.min(window.devicePixelRatio || 1, 2), m = Math.max(1, a.width / r), S = Math.max(1, a.height / r);
    Rr.width = Math.max(1, Math.floor(m * d)), Rr.height = Math.max(1, Math.floor(S * d)), Rr.style.width = m + "px", Rr.style.height = S + "px", Uo.setTransform(d, 0, 0, d, 0, 0);
  }
  function Lc(a, r) {
    if (!uo) return;
    const d = performance.now();
    Yo.ready || (Yo = { x: a, y: r, ready: !0 });
    const m = 7;
    for (let S = 1; S <= m; S++) {
      const _ = S / m;
      Pr.push({
        x: Yo.x + (a - Yo.x) * _,
        y: Yo.y + (r - Yo.y) * _,
        born: d - (m - S) * 10
      });
    }
    Yo = { x: a, y: r, ready: !0 };
  }
  function Qs(a) {
    if (Nr = null, !y) return;
    if (!Oe.workout.classList.contains("active")) {
      Nr = requestAnimationFrame(Qs);
      return;
    }
    const r = u.getBoundingClientRect(), d = xi();
    Uo.clearRect(0, 0, r.width / d, r.height / d), uo && (Pr = Pr.filter((S) => a - S.born < ki), Uo.fillStyle = i("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", Pr.forEach((S) => {
      const _ = (a - S.born) / ki, O = (1 - _) * yi, U = Math.round(S.x / 14) * 14, ve = Math.round(S.y / 14) * 14;
      Uo.globalAlpha = Math.max(0, O);
      const ke = 2 + 5 * (1 - _) * yi;
      Uo.fillRect(U - ke / 2, ve - ke / 2, ke, ke);
    }), Uo.globalAlpha = 1), Nr = requestAnimationFrame(Qs);
  }
  u.addEventListener("pointermove", (a) => {
    const r = u.getBoundingClientRect(), d = xi();
    Lc((a.clientX - r.left) / d, (a.clientY - r.top) / d);
  }), u.addEventListener("pointerleave", () => Yo.ready = !1), new ResizeObserver(Js).observe(u), Js(), Nr = requestAnimationFrame(Qs);
  const Zo = i("movementRippleCanvas"), Hr = Zo.getContext("2d");
  let fo = !0, Ot = null, Ac = performance.now();
  function Sd() {
    const a = Zo.parentElement.getBoundingClientRect(), r = xi(), d = Math.max(1, a.width / r), m = Math.max(1, a.height / r), S = Math.min(window.devicePixelRatio || 1, 2);
    Zo.width = Math.max(1, Math.floor(d * S)), Zo.height = Math.max(1, Math.floor(m * S)), Zo.style.width = d + "px", Zo.style.height = m + "px", Hr.setTransform(S, 0, 0, S, 0, 0);
  }
  function Cd() {
    var a;
    return $t || ((a = $e[dt]) == null ? void 0 : a.kind) === "rest";
  }
  function ho() {
    const a = $e[dt];
    return Cd() ? 2200 : a ? a.kind === "warmup" || a.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function el(a) {
    if (Ot = null, !y) return;
    if (!Oe.workout.classList.contains("active")) {
      Ot = requestAnimationFrame(el);
      return;
    }
    const r = Zo.parentElement.getBoundingClientRect(), d = xi(), m = Math.max(1, r.width / d), S = Math.max(1, r.height / d);
    if (Hr.clearRect(0, 0, m, S), fo) {
      const _ = ho(), O = (a - Ac) % _ / _, U = 15, ve = Math.max(8, Math.round(U * S / Math.max(1, m))), ke = m / (U + 1), be = S / (ve + 1), ge = m * 0.5, He = S * 0.52, at = Math.hypot(ge, He), Ne = i("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let De = 1; De <= ve; De++)
        for (let vt = 1; vt <= U; vt++) {
          const bt = vt * ke, Ye = De * be, Mt = Math.hypot(bt - ge, Ye - He) / at, Pt = Cd(), ut = Pt ? Math.exp(-Math.pow((Mt - (O * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, rt = Math.exp(-Math.pow((Mt - O * 1.25) * 7, 2)), xa = Pt ? ut : rt, za = Pt ? 0.5 + 0.5 * Math.sin(O * Math.PI * 2 - Mt * 3) ** 2 : 0.35 + 0.65 * Math.sin(O * Math.PI * 2 - Mt * 5) ** 2, na = Pt ? 1.4 + xa * 4.2 * za : 1.2 + xa * 5 * za;
          Hr.beginPath(), Hr.arc(bt, Ye, na, 0, Math.PI * 2), Hr.fillStyle = `rgba(${Ne},${Pt ? 0.08 + xa * 0.48 : 0.05 + xa * 0.55})`, Hr.fill();
        }
    }
    Ot = requestAnimationFrame(el);
  }
  new ResizeObserver(Sd).observe(Zo.parentElement), Sd(), Ot = requestAnimationFrame(el);
  const Ir = i("exerciseTitle"), Ko = i("exerciseMeta"), tl = i("stepLabel"), al = i("digits"), Td = i("fill"), Fr = i("progress"), nl = i("pause"), xs = i("nextName"), Ld = i("nextMeta"), Ec = i("nextIcon"), ol = i("skipNextSession");
  let da = null;
  function En(a) {
    for (let r = Math.max(0, a); r < $e.length; r++)
      if (!$e[r].sessionHidden) return r;
    return -1;
  }
  function Dc() {
    const a = $e[dt];
    if (!a) return { name: "Complete", meta: "Move finished", icon: "check" };
    if ($t) {
      const m = En(dt + 1), S = m >= 0 ? $e[m] : null;
      return S ? { name: S.name, meta: Xa(S), icon: Lt(S) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (a.rest > 0) return { name: "Rest", meta: a.rest + " sec · " + (a.roundBreakAfter ? "round " + (a.round + 1) + " next" : "recovery"), icon: "pause" };
    const r = En(dt + 1), d = r >= 0 ? $e[r] : null;
    return d ? { name: d.name, meta: Xa(d), icon: Lt(d) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function un() {
    if (!$e[dt]) return $e.length;
    const r = En(dt + 1);
    return r < 0 ? $e.length : r + 1;
  }
  function Lt(a) {
    return a.kind === "video" ? "play" : "clock";
  }
  function Xa(a) {
    return a.kind === "video" ? "YouTube · " + ri(a.duration) : a.group + " · " + a.duration + " sec";
  }
  function Or() {
    return $e.length && $e[$e.length - 1].round || 1;
  }
  function Mi(a) {
    const r = $e[a];
    if (!r) return "";
    const d = Or();
    if (d <= 1) return "Step " + (a + 1) + " of " + $e.length;
    if (r.roundBreak) return "Round " + r.round + " of " + d + " · Rest";
    const m = $e.filter((S) => S.round === r.round && !S.roundBreak).length;
    return "Round " + r.round + " of " + d + " · Step " + (r.roundIndex + 1) + " of " + m;
  }
  function ys() {
    return Fr.querySelector('[data-step="' + dt + '"]');
  }
  function Si() {
    $e[dt] && Number(Fr.dataset.round) !== ($e[dt].round || 1) && ks(), [...Fr.children].forEach((a) => {
      const r = Number(a.dataset.step);
      a.classList.toggle("done", r < dt), a.classList.toggle("active", r === dt), a.classList.toggle("rewindable", r <= dt), a.disabled = r > dt, r === dt && a.style.setProperty("--segment-progress", "0%");
    }), $e[dt] && (tl.textContent = Mi(dt), Eo());
  }
  function $o(a) {
    const r = $e.indexOf(a);
    r < 0 || r <= dt || (a.sessionHidden = !a.sessionHidden, er(), At((a.sessionHidden ? "Hidden " : "Included ") + a.name + " for this session"));
  }
  function Ci() {
    const a = i("upcomingList");
    if (!a) return;
    a.innerHTML = "";
    const r = un(), d = $e.slice(r);
    (Vo === "all" ? d : d.slice(0, Math.max(1, Number(Vo) || 1))).forEach((S) => {
      const _ = document.createElement("section");
      _.className = "upcomingCard" + (S.sessionHidden ? " sessionHidden" : "") + (Gl(S) ? " noMeta" : ""), _.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + Sn(Lt(S)) + '</div><div><div class="upcomingName">' + pt(S.name) + '</div><div class="upcomingMeta">' + pt(Xa(S)) + (Or() > 1 ? " · round " + S.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (S.sessionHidden ? "Include this session" : "Skip this session") + "</button>", _.querySelector(".skipSessionBtn").addEventListener("click", () => $o(S)), a.appendChild(_);
    });
  }
  function er() {
    var r;
    const a = Dc();
    xs.textContent = a.name, Ld.textContent = a.meta, Ec.innerHTML = Sn(a.icon);
    {
      const d = $t ? $e[En(dt + 1)] : ((r = $e[dt]) == null ? void 0 : r.rest) > 0 ? { kind: "rest" } : $e[En(dt + 1)];
      n.querySelector(".nextCard").classList.toggle("noMeta", !!(d && Gl(d)));
    }
    if (da = null, $t) {
      const d = En(dt + 1);
      d >= 0 && (da = $e[d]);
    } else {
      const d = $e[dt];
      if (d && d.rest > 0)
        da = null;
      else {
        const m = En(dt + 1);
        m >= 0 && (da = $e[m]);
      }
    }
    ol && (ol.hidden = !da, ol.textContent = da != null && da.sessionHidden ? "Include this session" : "Skip this session"), Ci();
  }
  ol.addEventListener("click", () => {
    da && (da.sessionHidden = !da.sessionHidden, At((da.sessionHidden ? "Hidden " : "Included ") + da.name + " for this session"), er());
  });
  let Co = null, Ht = null;
  function tr(a, r = {}) {
    const d = yt[qe];
    l.fire(a, { move: (d == null ? void 0 : d.name) || "", move_id: qe, ...r });
  }
  function ar() {
    const a = yt[qe];
    Co = { key: qe, name: (a == null ? void 0 : a.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(Ht), Ht = setInterval(() => {
      Co && !Yt && Co.active++;
    }, 1e3), tr("started", { steps: $e.length });
  }
  function Ti(a) {
    if (clearInterval(Ht), !Co) return;
    const r = Co;
    Co = null, tr(a ? "completed" : "ended", { seconds: r.active }), !(r.active < 30) && (xt.history.unshift({ id: "h-" + r.startedAt, move_id: r.key, name: r.name, start: new Date(r.startedAt).toISOString(), seconds: r.active, completed: a }), xt.history = xt.history.slice(0, 1e3), ka(), Jt(), bo());
  }
  let Dn = null, qr = null, il = !1;
  function Wr() {
    return it().sounds !== !1;
  }
  function rl() {
    if (Wr())
      try {
        navigator.audioSession && (navigator.audioSession.type = "playback"), Dn = Dn || new (window.AudioContext || window.webkitAudioContext)(), Dn.state === "suspended" && Dn.resume();
      } catch {
        Dn = null;
      }
  }
  function nr(a, r, d, { to: m = a, vol: S = 0.25, type: _ = "sine" } = {}) {
    const O = Dn.currentTime + r, U = Dn.createOscillator(), ve = Dn.createGain();
    U.type = _, U.frequency.setValueAtTime(a, O), m !== a && U.frequency.exponentialRampToValueAtTime(m, O + d), ve.gain.setValueAtTime(1e-4, O), ve.gain.exponentialRampToValueAtTime(S, O + 0.01), ve.gain.exponentialRampToValueAtTime(1e-4, O + d), U.connect(ve).connect(Dn.destination), U.start(O), U.stop(O + d + 0.02);
  }
  const Wl = {
    tick: () => nr(880, 0, 0.07, { vol: 0.18 }),
    move: () => {
      nr(660, 0, 0.12, { type: "triangle", vol: 0.3 }), nr(990, 0.13, 0.16, { type: "triangle", vol: 0.3 });
    },
    rest: () => nr(660, 0, 0.4, { to: 440, vol: 0.22 }),
    done: () => {
      nr(523, 0, 0.16, { type: "triangle" }), nr(659, 0.16, 0.16, { type: "triangle" }), nr(784, 0.32, 0.4, { type: "triangle" });
    }
  };
  function fn(a) {
    if (!(!Wr() || !Dn))
      try {
        Dn.state === "suspended" && Dn.resume(), Wl[a]();
      } catch {
      }
  }
  function Ra() {
    et >= 1 && et <= 3 && et !== qr && (qr = et, fn("tick"));
  }
  function hn() {
    rl(), A("workout"), Ad();
    const a = En(0);
    a >= 0 && $e[a].kind === "video" && Ed($e[a]);
  }
  function sl() {
    sr(), Ti(!1), clearInterval(lt), clearInterval(Ia), $t = !1, To(!1), i("app").classList.remove("resting"), rn.classList.remove("active"), A("home");
  }
  function Ad() {
    rn.classList.add("active");
    let a = 5;
    $s.textContent = a, fn("tick"), requestAnimationFrame(Xs), clearInterval(Ia), Ia = setInterval(() => {
      a--, a > 0 ? ($s.textContent = a, fn("tick"), Xs()) : (clearInterval(Ia), $s.textContent = "GO", fn("move"), il = !0, Xs(), setTimeout(() => {
        rn.classList.remove("active"), cancelAnimationFrame(Br), Bc();
      }, 650));
    }, 1e3);
  }
  function ks() {
    var r;
    Fr.innerHTML = "";
    const a = ((r = $e[Math.max(0, dt)] || $e[0]) == null ? void 0 : r.round) || 1;
    Fr.dataset.round = a, $e.forEach((d, m) => {
      if ((d.round || 1) !== a) return;
      const S = document.createElement("button");
      S.dataset.step = m, S.type = "button", S.className = "progressSegment", S.setAttribute("aria-label", "Go to " + d.name), S.addEventListener("click", () => {
        m <= dt && _c(m);
      }), Fr.appendChild(S);
    });
  }
  function To(a) {
    a = !!a;
    const r = Yt !== a;
    if (Yt = a, nl.textContent = a ? "Resume" : "Pause", i("app").classList.toggle("paused", a), sn && aa)
      try {
        a ? aa.pauseVideo() : aa.playVideo();
      } catch {
      }
    r && Co && tr(a ? "paused" : "resumed");
  }
  function _c(a) {
    a < 0 || a >= $e.length || a > dt || (clearInterval(lt), $t = !1, i("app").classList.remove("resting"), dt = a, To(!1), Wa(), lt = setInterval(Qn, 1e3));
  }
  function Bc() {
    if (dt = En(0), To(!1), ks(), dt < 0) {
      Ir.textContent = "No activities", Ko.textContent = "Open Edit and enable or add a movement", Ko.hidden = !1;
      return;
    }
    ar(), Wa(), clearInterval(lt), lt = setInterval(Qn, 1e3);
  }
  const Vl = i("videoStage"), Xn = i("videoSound"), Rc = 0, or = 1, ca = 2;
  let jl = 0, Lo = null, Li = null, aa = null, Vr = null, ir = 0, Ms = !1, sn = null, Ss = null;
  function ll() {
    var a;
    return (a = window.YT) != null && a.Player ? Promise.resolve(window.YT) : Lo || (Lo = new Promise((r, d) => {
      const m = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          m == null || m();
        } catch {
        }
      };
      const S = setInterval(() => {
        var O;
        (O = window.YT) != null && O.Player && (clearInterval(S), clearTimeout(_), r(window.YT));
      }, 100), _ = setTimeout(() => {
        clearInterval(S), Lo = null, d(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const O = document.createElement("script");
        O.src = "https://www.youtube.com/iframe_api", O.async = !0, O.onerror = () => {
          clearInterval(S), clearTimeout(_), Lo = null, d(new Error("YouTube did not load"));
        }, document.head.appendChild(O);
      }
    }), Lo);
  }
  function dl() {
    return Li || (Li = ll().then((a) => new Promise((r) => {
      const d = document.createElement("div");
      i("videoFrame").appendChild(d), aa = new a.Player(d, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => r(aa), onStateChange: (m) => rr(m.data), onError: (m) => Pc(m.data) }
      });
    })), Li.catch(() => {
      Li = null;
    }), Li);
  }
  function Ed(a) {
    !(a != null && a.videoId) || a.videoError || dl().then((r) => {
      sn || Vr === a.videoId || (Vr = a.videoId, ir = Number(a.start) || 0, Ms = !1, r.mute(), r.loadVideoById({ videoId: a.videoId, startSeconds: ir }));
    }).catch(() => {
    });
  }
  function Ao() {
    const a = En(dt + 1);
    a >= 0 && $e[a].kind === "video" && Ed($e[a]);
  }
  function rr(a) {
    if (!sn) {
      a === or && !Ms && (Ms = !0, aa.pauseVideo(), aa.seekTo(ir, !0));
      return;
    }
    Vl.classList.toggle("playing", a === or), $e[dt] === sn && performance.now() > jl && (a === or && Yt ? To(!1) : a === ca && !Yt && To(!0)), a === or && pl(sn.videoId, aa.getDuration()) && ka(), a === Rc && jr();
  }
  function Pc(a) {
    const r = sn;
    if (!r) {
      Vr = null;
      return;
    }
    a === 101 || a === 150 ? (Jn(r.videoId), At("That video can’t play outside YouTube, so it was skipped")) : At("The video couldn’t play, so it was skipped"), jr();
  }
  function Dd(a) {
    if (i("app").classList.add("videoStep"), Xn.hidden = !0, sn = a, clearTimeout(Ss), !a.videoId) {
      At("This video step has no link yet, so it was skipped"), setTimeout(() => jr(), 0);
      return;
    }
    dl().then((r) => {
      if (sn !== a) return;
      jl = performance.now() + 1500;
      const d = Number(a.start) || 0;
      Vr !== a.videoId ? (Vr = a.videoId, ir = d, r.loadVideoById({ videoId: a.videoId, startSeconds: d })) : (r.seekTo(d, !0), r.playVideo()), r.unMute(), Yt && r.pauseVideo(), Ss = setTimeout(() => {
        sn !== a || Yt || (r.getPlayerState() !== or ? (r.mute(), r.playVideo(), Xn.hidden = !1) : r.isMuted() && (Xn.hidden = !1));
      }, 1600);
    }).catch(() => {
      sn === a && (At("YouTube didn’t load, so the video was skipped"), jr());
    });
  }
  function cl() {
    if (!i("app").classList.contains("videoStep")) return;
    const a = n.querySelector(".workGrid"), r = n.querySelector(".sessionControlRow"), d = a.getBoundingClientRect().top, m = (r == null ? void 0 : r.offsetHeight) || 42, S = window.innerHeight - d - 16 - m - 84;
    a.style.setProperty("--theater-h", Math.max(240, Math.round(S)) + "px");
  }
  window.addEventListener("resize", cl);
  function sr() {
    clearTimeout(Ss);
    const a = sn;
    if (sn = null, i("app").classList.remove("videoStep"), Vl.classList.remove("playing"), Xn.hidden = !0, a && aa) {
      try {
        aa.pauseVideo();
      } catch {
      }
      Vr = null;
    }
  }
  function jr() {
    const a = sn;
    !a || $e[dt] !== a || (sr(), clearInterval(lt), dr(), lt = setInterval(Qn, 1e3));
  }
  Xn.addEventListener("click", () => {
    aa && (aa.unMute(), aa.playVideo()), Xn.hidden = !0;
  });
  function _d(a) {
    var m;
    const r = Number(a.start) || 0;
    if (a.useVideoLength === !1) return r + (Number(a.duration) || 300);
    const d = aa && sn === a && Number((m = aa.getDuration) == null ? void 0 : m.call(aa)) || 0;
    return Number(a.end) || d || Number(a.videoDuration) || r + (Number(a.duration) || 300);
  }
  function Bd(a, r) {
    const d = yt[qe];
    [ia, Ve, va, d == null ? void 0 : d.warmup, d == null ? void 0 : d.strength, d == null ? void 0 : d.cooldown, d == null ? void 0 : d.sequence].forEach((m) => (Array.isArray(m) ? m : []).forEach((S) => {
      S && S.kind === "video" && S.videoId === a && r(S);
    }));
  }
  function pl(a, r) {
    r = Math.round(Number(r) || 0);
    let d = !1;
    return a && r > 0 && Bd(a, (m) => {
      m.videoDuration !== r && (m.videoDuration = r, d = !0);
    }), d;
  }
  function Jn(a) {
    Bd(a, (r) => {
      r.videoError = "embed";
    }), ka();
  }
  function Nc(a) {
    const r = a.videoId;
    if (!r) return;
    const d = () => {
      $a.classList.contains("open") ? Xt || Et() : (Et(), ka());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + r)).then((m) => m.ok ? m.json() : Promise.reject(m.status)).then((m) => {
      a.videoId === r && (a.videoTitle = m.title || "", a.autoName && m.title && (a.name = m.title), d());
    }).catch((m) => {
      a.videoId === r && m === 401 && (a.videoError = "embed", d());
    }), Hc(r).then((m) => {
      pl(r, m) && d();
    }).catch((m) => {
      m === "embed" && a.videoId === r && (a.videoError = "embed", d());
    });
  }
  function Hc(a) {
    return ll().then((r) => new Promise((d, m) => {
      const S = document.createElement("div");
      S.className = "videoProbe", S.setAttribute("aria-hidden", "true");
      const _ = document.createElement("div");
      S.appendChild(_), i("app").appendChild(S);
      let O = null, U = !1;
      const ve = (ge, He) => {
        U || (U = !0, clearTimeout(ke), setTimeout(() => {
          try {
            O == null || O.destroy();
          } catch {
          }
          S.remove();
        }, 0), He ? m(He) : d(ge));
      }, ke = setTimeout(() => ve(0), 2e4), be = () => {
        var He;
        const ge = Number((He = O == null ? void 0 : O.getDuration) == null ? void 0 : He.call(O)) || 0;
        return ge > 0 && ve(ge), ge > 0;
      };
      O = new r.Player(_, {
        width: 320,
        height: 180,
        videoId: a,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            be() || (O.mute(), O.playVideo());
          },
          onStateChange: () => be(),
          onError: (ge) => ve(0, ge.data === 101 || ge.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function Wa() {
    $t = !1;
    const a = $e[dt];
    i("app").classList.toggle("resting", a.kind === "rest"), a.kind === "video" ? Dd(a) : sr(), et = a.duration, Ie = a.duration, qr = null, il ? il = !1 : fn(a.kind === "rest" ? "rest" : "move"), Ir.textContent = a.name, Ko.textContent = a.group, Ko.hidden = !0, tl.textContent = Mi(dt), Co && tr("step", { name: a.name, group: a.group, kind: a.kind, step: dt + 1, of: $e.length, round: a.round || 1, rounds: Or(), duration: a.duration }), er(), Si(), Ao(), a.kind === "video" && setTimeout(cl, 0);
  }
  function Eo() {
    var S;
    const a = ((S = $e[dt]) == null ? void 0 : S.kind) === "video" && !$t, r = a && et >= 60;
    al.textContent = r ? ri(et) : et, al.classList.toggle("long", r), a && (i("videoClock").textContent = ri(et) + " left");
    const d = et / Ie * 100;
    Td.style.width = d + "%";
    const m = ys();
    if (m && !$t) {
      const _ = 100 - d;
      m.style.setProperty("--segment-progress", _ + "%");
    }
  }
  function Qn() {
    var r, d;
    if (Yt) return;
    const a = $e[dt];
    if ((a == null ? void 0 : a.kind) === "video" && !$t && sn === a) {
      const m = Number((r = aa == null ? void 0 : aa.getCurrentTime) == null ? void 0 : r.call(aa)) || 0, S = Number(a.start) || 0, _ = _d(a);
      Ie = Math.max(1, _ - S), (m > S || ((d = aa == null ? void 0 : aa.getPlayerState) == null ? void 0 : d.call(aa)) === or) && (et = Math.max(0, Math.ceil(_ - m))), Eo(), Ra(), m > S && m >= _ - 0.25 && jr();
      return;
    }
    et--, Eo(), Ra(), et <= 0 && (a.rest > 0 ? lr(a.rest) : dr());
  }
  function lr(a) {
    var d;
    $t = !0, i("app").classList.add("resting");
    const r = ys();
    r && r.style.setProperty("--segment-progress", "100%"), clearInterval(lt), et = a, Ie = a, qr = null, fn("rest"), Co && tr("rest", { duration: a }), Ir.textContent = "Rest", Ko.textContent = (d = $e[dt]) != null && d.roundBreakAfter ? "Round " + ($e[dt].round + 1) + " next" : "Recovery", er(), Eo(), lt = setInterval(() => {
      Yt || (et--, Eo(), Ra(), et <= 0 && (clearInterval(lt), dr(), lt = setInterval(Qn, 1e3)));
    }, 1e3);
  }
  function dr() {
    $t = !1;
    const a = En(dt + 1);
    if (a >= 0)
      dt = a, Wa();
    else {
      clearInterval(lt), sr(), To(!1), i("app").classList.remove("resting"), Ir.textContent = "Complete", Ko.textContent = "Move finished", Ko.hidden = !1, al.textContent = "✓";
      {
        const r = Or();
        tl.textContent = r > 1 ? r + " rounds done" : $e.filter((d) => !d.roundBreak).length + " steps done";
      }
      Ti(!0), fn("done");
      {
        const r = Ro(7).reduce((d, m) => d + m.minutes, 0);
        Ko.textContent = "Move finished · " + r + " min in the last 7 days";
      }
      Td.style.width = "100%", er();
    }
  }
  i("skipExercise").addEventListener("click", () => {
    zl(), To(!1);
  });
  function zl() {
    clearInterval(lt);
    const a = $e[dt];
    if ($t) {
      $t = !1, i("app").classList.remove("resting");
      const d = En(dt + 1);
      d >= 0 ? (dt = d, Wa(), lt = setInterval(Qn, 1e3)) : dr();
      return;
    }
    if (a && a.rest > 0) {
      lr(a.rest);
      return;
    }
    const r = En(dt + 1);
    r >= 0 ? (dt = r, Wa(), lt = setInterval(Qn, 1e3)) : dr();
  }
  i("restartSegment").addEventListener("click", () => {
    if (clearInterval(lt), To(!1), $t) {
      const a = $e[dt];
      et = a.rest, Ie = a.rest, qr = null, fn("rest"), Ir.textContent = "Rest", Ko.textContent = "Recovery", i("app").classList.add("resting"), er(), Eo();
    } else
      Wa();
    lt = setInterval($t ? () => {
      Yt || (et--, Eo(), Ra(), et <= 0 && (clearInterval(lt), dr(), lt = setInterval(Qn, 1e3)));
    } : Qn, 1e3);
  });
  function Cs(a, r, d, m) {
    let S = 0, _ = null, O = !1;
    function U() {
      _ && cancelAnimationFrame(_), _ = null, S = 0, O = !1, r.style.width = "0%", a.classList.remove("holding");
    }
    function ve(ge) {
      if (!O) return;
      S || (S = ge);
      const He = Math.min(1, (ge - S) / d);
      if (r.style.width = He * 100 + "%", He >= 1) {
        O = !1, _ && cancelAnimationFrame(_), _ = null, r.style.width = "100%", setTimeout(() => r.style.width = "0%", 90), m();
        return;
      }
      _ = requestAnimationFrame(ve);
    }
    function ke(ge) {
      var He;
      if (!(ge && ge.button !== void 0 && ge.button !== 0)) {
        ge == null || ge.preventDefault(), U(), O = !0, a.classList.add("holding");
        try {
          (He = a.setPointerCapture) == null || He.call(a, ge.pointerId);
        } catch {
        }
        _ = requestAnimationFrame(ve);
      }
    }
    function be() {
      O && U();
    }
    a.addEventListener("pointerdown", ke), a.addEventListener("pointerup", be), a.addEventListener("pointercancel", be), a.addEventListener("lostpointercapture", be), a.addEventListener("keydown", (ge) => {
      (ge.key === " " || ge.key === "Enter") && !ge.repeat && ke(ge);
    }), a.addEventListener("keyup", (ge) => {
      (ge.key === " " || ge.key === "Enter") && be();
    });
  }
  const Rd = i("endWorkout");
  Cs(Rd, i("holdEndFill"), 1500, sl);
  const Xo = i("deleteMoveConfirm");
  i("deleteMoveOpen").addEventListener("click", () => {
    Xo.classList.add("open"), Xo.setAttribute("aria-hidden", "false");
  }), i("deleteMoveCancel").addEventListener("click", () => {
    Xo.classList.remove("open"), Xo.setAttribute("aria-hidden", "true");
  });
  function ul() {
    const a = qe, r = n.querySelector('.workoutPanel[data-workout="' + a + '"]');
    r && r.remove(), delete yt[a], xt.order = xt.order.filter((m) => m !== a);
    let d = n.querySelector(".workoutPanel[data-workout]");
    if (!d) {
      const m = "custom-" + Date.now();
      yt[m] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, xt.order.push(m), d = ba(m, yt[m]);
    }
    Xo.classList.remove("open"), Xo.setAttribute("aria-hidden", "true"), Ji = null, Ks(), Mn(d.dataset.workout), ka(), At("Move deleted");
  }
  Cs(i("deleteMoveYes"), i("deleteMoveFill"), 1500, ul);
  const zr = n.querySelector(".rubberTabs"), Ai = i("rubberIndicator");
  function Gr(a, r = !0) {
    if (!a || !zr || !Ai) return;
    const d = zr.getBoundingClientRect(), m = a.getBoundingClientRect();
    Ai.style.transition = r ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const S = xi();
    Ai.style.left = (m.left - d.left) / S + zr.scrollLeft + "px", Ai.style.width = m.width / S + "px", r && (Ai.style.transform = "scaleX(1.08)", setTimeout(() => Ai.style.transform = "scaleX(1)", 180));
  }
  n.querySelectorAll(".tab").forEach((a) => a.addEventListener("click", () => {
    a.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), n.querySelectorAll(".tab").forEach((r) => r.classList.remove("active")), n.querySelectorAll(".settingsPane").forEach((r) => r.classList.remove("active")), a.classList.add("active"), i(a.dataset.pane).classList.add("active"), Gr(a, !0);
  })), requestAnimationFrame(() => Gr(n.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => Gr(n.querySelector(".tab.active"), !1));
  const Ts = i("pixelTrailToggle"), Ur = i("rippleToggle"), Yr = i("trailStrength"), Zr = i("trailLife");
  function mn(a, r) {
    it()[a] = r, ka();
  }
  const Pd = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function fl(a) {
    return a.kind === "rest" ? "rest" : a.kind === "video" ? "video" : "g:" + String(a.group || "").trim().toLowerCase();
  }
  function Gl(a) {
    var r;
    return !!((r = it().hideMeta) != null && r[fl(a)]);
  }
  function Nd() {
    const a = /* @__PURE__ */ new Map(), r = (d, m, S) => {
      if (!d) return;
      Array.isArray(d) && (d = { name: d[1], group: d[2], kind: "work" });
      const _ = fl(d);
      let O = a.get(_);
      O || (O = { key: _, label: _ === "rest" ? "Rest" : _ === "video" ? "Video" : String(d.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, a.set(_, O)), O.kinds.add(_ === "rest" ? "Rest" : _ === "video" ? "Video" : m), O.moves.add(S), O.count++;
    };
    return Object.values(yt).forEach((d) => {
      const m = d.name || "Move";
      (d.warmup || (d.customSequence ? [] : Vn)).forEach((S) => r(S, "Warm-up", m)), (d.customSequence ? d.sequence || [] : d.strength || []).forEach((S) => r(S, S.presetRole === "warmup" ? "Warm-up" : S.presetRole === "cooldown" ? "Cooldown" : "Movement", m)), (d.cooldown || (d.customSequence ? [] : Kt)).forEach((S) => r(S, "Cooldown", m));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([d, m]) => {
      a.has(d) || a.set(d, { key: d, label: m, kinds: /* @__PURE__ */ new Set([m]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...a.values()].map((d) => ({ ...d, kind: d.kinds.has("Movement") ? "Movement" : [...d.kinds][0], moves: [...d.moves] })).sort((d, m) => Pd.indexOf(d.kind) - Pd.indexOf(m.kind) || d.label.localeCompare(m.label));
  }
  let Bt = "all";
  function an() {
    const a = i("metaSearch").value.trim().toLowerCase();
    return Nd().filter((r) => (Bt === "all" || r.kind === Bt) && (!a || r.label.toLowerCase().includes(a) || r.moves.some((d) => d.toLowerCase().includes(a))));
  }
  function cr() {
    const a = i("metaTableBody");
    if (!a) return;
    const r = it().hideMeta || {}, d = an();
    a.innerHTML = d.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', d.forEach((S) => {
      const _ = !r[S.key], O = S.count ? (S.moves.length > 2 ? S.moves.slice(0, 2).join(", ") + " + " + (S.moves.length - 2) + " more" : S.moves.join(", ")) + " · " + S.count + " step" + (S.count === 1 ? "" : "s") : "Not used yet", U = document.createElement("tr");
      U.className = _ ? "" : "off", U.innerHTML = '<td><div class="metaType">' + pt(S.label) + '</div><div class="metaSub">' + pt(S.kind + " · " + O) + '</div></td><td class="metaKindCol">' + pt(S.kind) + '</td><td class="metaUsedCol">' + pt(O) + '</td><td class="metaSwitchCol"><button class="switch' + (_ ? " on" : "") + '" type="button" role="switch" aria-checked="' + _ + '" aria-label="Second line for ' + pt(S.label) + ' on phones"></button></td>', U.querySelector(".switch").addEventListener("click", () => Ul([S.key], _)), a.appendChild(U);
    });
    const m = d.filter((S) => r[S.key]).length;
    i("metaCount").textContent = d.length ? d.length + " type" + (d.length === 1 ? "" : "s") + (m ? " · " + m + " hidden on phones" : "") : "";
  }
  function Ul(a, r) {
    const d = { ...it().hideMeta || {} };
    a.forEach((m) => {
      r ? d[m] = !0 : delete d[m];
    }), mn("hideMeta", d), cr(), Lr(), er();
  }
  i("metaSearch").addEventListener("input", cr), i("metaKinds").querySelectorAll(".kindChip").forEach((a) => a.addEventListener("click", () => {
    Bt = a.dataset.kind, i("metaKinds").querySelectorAll(".kindChip").forEach((r) => r.classList.toggle("active", r === a)), cr();
  })), i("metaHideAll").addEventListener("click", () => Ul(an().map((a) => a.key), !0)), i("metaShowAll").addEventListener("click", () => Ul(an().map((a) => a.key), !1));
  const Ei = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...it().toggles || {} };
  function Hd() {
    n.querySelectorAll("[data-toggle]").forEach((d) => d.classList.toggle("on", Ei[d.dataset.toggle] !== !1)), n.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([d, m]) => {
      i(m).hidden = Ei[d] === !1;
    });
    const a = ["steps", "mood", "energyLevel"].some((d) => Ei[d] !== !1);
    n.querySelector(".activityCard").hidden = !a, i("weatherCard").hidden = !0;
    const r = n.querySelector("#homeView .grid");
    r.classList.toggle("noActivity", !a), r.classList.toggle("noWeather", !0);
  }
  n.querySelectorAll("[data-toggle]").forEach((a) => a.addEventListener("click", () => {
    Ei[a.dataset.toggle] = Ei[a.dataset.toggle] === !1, Hd(), mn("toggles", { ...Ei });
  })), Hd();
  function Do() {
    Ts.classList.toggle("on", uo), Ur.classList.toggle("on", fo), Yr.value = Math.round(yi * 100), i("trailStrengthValue").textContent = Yr.value + "%", Zr.value = ki, i("trailLifeValue").textContent = Zr.value + " ms";
  }
  it().trailEnabled !== void 0 && (uo = it().trailEnabled), it().rippleEnabled !== void 0 && (fo = it().rippleEnabled), it().trailStrength !== void 0 && (yi = it().trailStrength), it().trailMaxAge !== void 0 && (ki = it().trailMaxAge), Do();
  const mo = i("soundsToggle");
  mo.classList.toggle("on", Wr()), mo.addEventListener("click", () => {
    mn("sounds", !Wr()), mo.classList.toggle("on", Wr()), Wr() && (rl(), fn("move"));
  }), Ts.addEventListener("click", () => {
    uo = !uo, Ts.classList.toggle("on", uo), uo || (Pr = []), mn("trailEnabled", uo);
  }), Ur.addEventListener("click", () => {
    fo = !fo, Ur.classList.toggle("on", fo), mn("rippleEnabled", fo);
  }), Yr.addEventListener("input", () => {
    yi = Number(Yr.value) / 100, i("trailStrengthValue").textContent = Yr.value + "%";
  }), Yr.addEventListener("change", () => mn("trailStrength", yi)), Zr.addEventListener("input", () => {
    ki = Number(Zr.value), i("trailLifeValue").textContent = Zr.value + " ms";
  }), Zr.addEventListener("change", () => mn("trailMaxAge", ki)), Za.addEventListener("change", () => mn("upcomingCount", Vo));
  function _o(a) {
    n.querySelectorAll(".themeBtn").forEach((d) => d.classList.toggle("active", d.dataset.theme === a));
    const r = a === "light";
    i("app").classList.toggle("light", r), l.setLight(r), pr(n);
  }
  _o(it().theme || "dark"), n.querySelectorAll(".themeBtn").forEach((a) => a.addEventListener("click", () => {
    _o(a.dataset.theme), mn("theme", a.dataset.theme);
  }));
  const Ja = { steps: null, weather: null, ...it().entities || {} };
  let qt = null, go = {};
  function Yl(a) {
    const r = Object.values(a).filter((U) => U.entity_id.startsWith("sensor.") || U.entity_id.startsWith("input_number.")), d = (U) => U.attributes.friendly_name || U.entity_id, m = r.filter((U) => /step/i.test(U.entity_id) || /step/i.test(d(U)) || ["steps", "step"].includes(String(U.attributes.unit_of_measurement || "").toLowerCase())), S = r.filter((U) => !m.includes(U)), _ = (U, ve) => d(U).localeCompare(d(ve)), O = (U, ve) => /health_steps/.test(ve.entity_id) - /health_steps/.test(U.entity_id) || _(U, ve);
    return { suggested: m.sort(O), rest: S.sort(_), label: d };
  }
  function Bo(a) {
    const r = i("stepsEntity");
    if (!r || r.matches(":focus")) return;
    const { suggested: d, rest: m, label: S } = Yl(a), _ = (ve) => '<option value="' + pt(ve.entity_id) + '">' + pt(S(ve)) + "</option>";
    r.innerHTML = '<option value="">Not connected</option>' + (d.length ? '<optgroup label="Suggested">' + d.map(_).join("") + "</optgroup>" : "") + (m.length ? '<optgroup label="All sensors">' + m.map(_).join("") + "</optgroup>" : ""), r.value = Ja.steps || "";
    const O = i("stepsStatus"), U = Ja.steps && a[Ja.steps];
    O.textContent = U ? "Connected · " + S(U) : O.dataset.empty;
  }
  i("stepsEntity").addEventListener("change", () => {
    Ja.steps = i("stepsEntity").value || null, mn("entities", { ...Ja }), go = {}, Kl(), qt && (Bo(qt), hl(qt));
  });
  function Zl(a, r = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: r }).format(a);
  }
  function Id() {
    const a = Ja.steps && (qt == null ? void 0 : qt[Ja.steps]), r = Number(a == null ? void 0 : a.state);
    return Number.isFinite(r) ? r : null;
  }
  function hl(a) {
    var m;
    const r = Ja.steps, d = r ? Number((m = a[r]) == null ? void 0 : m.state) : NaN;
    i("stepsMeta").textContent = r ? Number.isFinite(d) ? Zl(d) : "—" : "Set up in Settings";
  }
  let Fd = 0;
  async function Kl() {
    const a = Ja.steps;
    if (!a || !l.ws) return;
    Fd = Date.now();
    const r = /* @__PURE__ */ new Date(), d = new Date(r.getFullYear(), r.getMonth(), r.getDate() - 30);
    try {
      const m = await l.ws({ type: "recorder/statistics_during_period", start_time: d.toISOString(), end_time: r.toISOString(), statistic_ids: [a], period: "day", types: ["max"] }), S = (m == null ? void 0 : m[a]) || [], _ = {};
      if (S.forEach((O) => {
        Number.isFinite(O.max) && (_[Ut(new Date(O.start))] = O.max);
      }), !Object.keys(_).length) {
        const O = await l.ws({ type: "history/history_during_period", start_time: d.toISOString(), end_time: r.toISOString(), entity_ids: [a], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((O == null ? void 0 : O[a]) || []).forEach((U) => {
          const ve = Number(U.s ?? U.state), ke = U.lu ? U.lu * 1e3 : Date.parse(U.last_updated || U.last_changed);
          if (!Number.isFinite(ve) || !ke) return;
          const be = Ut(new Date(ke));
          _[be] = Math.max(_[be] || 0, ve);
        });
      }
      go = _, bo();
    } catch {
    }
  }
  function Jt() {
    bo();
  }
  Jt(), setInterval(() => {
    Jt(), la(), Ft();
  }, 10 * 60 * 1e3);
  function Ro(a) {
    const r = {}, d = {};
    xt.history.forEach((O) => {
      const U = Ut(new Date(O.start));
      r[U] = (r[U] || 0) + (O.seconds || 0) / 60, d[U] = (d[U] || 0) + 1;
    });
    const m = /* @__PURE__ */ new Date(), S = Ut(m), _ = [];
    for (let O = a - 1; O >= 0; O--) {
      const U = new Date(m.getFullYear(), m.getMonth(), m.getDate() - O), ve = Ut(U), ke = xt.checkins.filter((ge) => ge.date === ve), be = (ge) => {
        const He = ke.map((at) => at[ge]).filter(Boolean);
        return He.length ? He.reduce((at, je) => at + je, 0) / He.length : null;
      };
      _.push({
        key: ve,
        date: U,
        minutes: Math.round(r[ve] || 0),
        moves: d[ve] || 0,
        steps: ve === S && Id() != null ? Id() : go[ve] ?? null,
        mood: be("mood"),
        energy: be("energy")
      });
    }
    return _;
  }
  function vo(a) {
    let r = a.length - 1;
    a[r] && !a[r].minutes && r--;
    let d = 0;
    for (; r >= 0 && a[r].minutes > 0; )
      d++, r--;
    return d;
  }
  function bo() {
    const a = i("insightCard");
    if (!a) return;
    const r = Ro(30), d = vo(r), m = r.reduce((ke, be) => ke + be.minutes, 0), S = /* @__PURE__ */ new Date(), _ = Ut(S), O = Ut(new Date(S.getFullYear(), S.getMonth(), S.getDate() - (S.getDay() + 6) % 7)), U = r.filter((ke) => ke.key >= O && ke.key <= _).reduce((ke, be) => ke + be.minutes, 0), ve = (ke, be, ge) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + ke + '</div><div><div class="activityRowName">' + pt(be) + '</div><div class="activityRowMeta">' + pt(ge) + "</div></div></div>";
    a.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + Sn("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + ve(Sn("clock"), "This week", U + " min") + ve(Sn("streak"), "Streak", d + " day" + (d === 1 ? "" : "s")) + ve(Sn("calendar"), "30 days", m + " min") + "</div>";
  }
  const Ls = {
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
  }, ml = (a) => a === "sunny" ? "clear" : a === "clear-night" ? "night" : a === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(a) ? "rain" : ["snowy", "snowy-rainy"].includes(a) ? "snow" : "cloudy", Di = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, Po = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let wo = 0;
  const gl = (a, r) => '<path class="' + r + '" d="' + a + '"/>', Od = (a, r) => ' style="animation-delay:-' + Math.round(a * 137 % r) + 'ms"', gn = (a, r, d, m) => {
    const S = d * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (m < 1 ? ' opacity="' + m + '"' : "") + Od(a, 2400) + ' d="M' + a + " " + (r - d) + "L" + (a + S) + " " + (r - S) + "L" + (a + d) + " " + r + "L" + (a + S) + " " + (r + S) + "L" + a + " " + (r + d) + "L" + (a - S) + " " + (r + S) + "L" + (a - d) + " " + r + "L" + (a - S) + " " + (r - S) + 'Z"/>';
  }, Kr = ([a, r, d], m) => '<path class="wxMoonPath" d="' + a + '" fill="url(#' + m + ')"/><defs><linearGradient id="' + m + '" x1="0" y1="' + r + '" x2="0" y2="' + d + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', qd = (a, r) => r ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', $r = (a) => (a ? ["29.35", "43.04", "56.74"].map((r, d) => '<g class="wxDrop" style="animation-delay:-' + d * 317 + 'ms"><rect class="wxAccent" x="' + r + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + r + ' 60.65)"/></g>') : [19, 26, 33].map((r, d) => '<g class="wxDrop" style="animation-delay:-' + d * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + r + ' 38)"/></g>')).join(""), As = (a) => (a ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([r, d], m) => '<circle class="wxFlake" style="animation-delay:-' + m * 640 + 'ms" cx="' + r + '" cy="' + d + '" r="' + (a ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function eo(a, r, d, m) {
    return a === "clear" ? r ? Kr(d ? Po.l : Po.s, m) + (d ? gn(70, 20, 5.83, 1) + gn(78.33, 41.67, 3.75, 0.8) + gn(60, 71.67, 3.33, 0.6) : gn(42, 12, 3.5, 1) + gn(47, 25, 2.25, 0.8) + gn(36, 43, 2, 0.6)) : qd(m, d) : a === "partly" ? (r ? Kr(d ? Po.lp : Po.sp, m) : d ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + gl(d ? Di.lp : Di.sp, r ? "wxCloudLight" : "wxBright") + (r ? d ? gn(73.33, 16.67, 4.17, 0.9) : gn(44, 10, 2.5, 0.9) : "") : a === "cloudy" ? gl(d ? Di.lc : Di.s, r ? "wxCloudLight" : "wxBright") + (r ? d ? gn(15, 15, 3.75, 0.8) + gn(76.67, 13.33, 2.92, 0.6) : gn(9, 9, 2.25, 0.8) + gn(46, 8, 1.75, 0.6) : "") : gl(d ? Di.lr : Di.s, "wxCloudLight") + (a === "rain" ? $r(d) : As(d));
  }
  const $l = () => {
    var a;
    return ((a = qt == null ? void 0 : qt["sun.sun"]) == null ? void 0 : a.state) === "below_horizon";
  };
  let Sa = it().weatherStyle || "bitmap", to = it().weatherLayout === "strip" ? "strip" : "tiles", Es = it().weatherMotion !== !1;
  const Xr = () => Es && !Ya(), Ds = /* @__PURE__ */ new Map(), vl = 700, Ca = (a) => {
    const [r, d] = a.split("/");
    return { k: r === "fog" ? "cloudy" : r === "storm" ? "rain" : r, night: d === "night" };
  };
  function Jo(a, r, d, m = Sa, S, _) {
    let O = ml(a);
    const U = O === "night" || (_ != null ? !!_ : !!d && $l());
    O === "night" && (O = "clear");
    const ve = r ? 90 : 54, ke = Sc(a, U), be = performance.now();
    let ge = S ? Ds.get(S) : null;
    if (S && !ge ? Ds.set(S, ge = { key: ke, t0: -1e9 }) : ge && ge.key !== ke && (ge.fromKey = ge.key, ge.from = ge.last || null, ge.key = ke, ge.t0 = be), m !== "smooth") return '<span class="wxIcon pixels' + (r ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + ke + '"' + (S ? ' data-wx-slot="' + S + '"' : "") + ' data-wx-style="' + m + '" data-wx-size="' + ve + '"></canvas></span>';
    let He = "";
    if (ge && be - ge.t0 < vl && (Xr() || Ya())) {
      const at = Ca(ge.fromKey);
      He = '<span class="wxLayer wxOut ' + at.k + (at.night ? " night" : "") + '" style="animation-delay:' + Math.round(ge.t0 - be) + 'ms"><svg viewBox="0 0 ' + ve + " " + ve + '">' + eo(at.k, at.night, r, "wxg" + ++wo) + "</svg></span>";
    }
    return '<span class="wxIcon ' + O + (U ? " night" : "") + (r ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + ve + " " + ve + '">' + eo(O, U, r, "wxg" + ++wo) + "</svg>" + He + "</span>";
  }
  function _s() {
    const a = i("app"), r = getComputedStyle(a), d = (U) => r.getPropertyValue(U).trim(), m = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([U, ve]) => {
      d(ve) && (m[U] = d(ve));
    });
    const S = d("--color-text-primary") || "#f1f1f1", _ = d("--color-bg-card") || "#222222", O = a.classList.contains("light");
    return { colors: m, ink: O ? S : _, paper: O ? _ : S };
  }
  function pr(a, r = performance.now()) {
    const d = a.querySelectorAll("canvas[data-wx]");
    if (!d.length) return;
    const m = _s(), S = Xr(), _ = Ya();
    d.forEach((O) => {
      var ge;
      const U = O.dataset.wx, ve = O.dataset.wxSlot ? Ds.get(O.dataset.wxSlot) : null;
      let ke = wp(U, m.colors);
      if (ve && ve.key === U) {
        const He = (r - ve.t0) / vl;
        He < 1 && (S || _) && (ke = If(ve.from || wp(ve.fromKey, m.colors), ke, Math.max(0, He), m.colors, _)), ve.last = ke;
      }
      const be = Ou(ke, { size: Number(O.dataset.wxSize) || 54, px: 2, oneBit: O.dataset.wxStyle === "onebit", colors: m.colors, ink: m.ink, paper: m.paper, clock: r, idle: S });
      O.width !== be.w && (O.width = be.w), O.height !== be.h && (O.height = be.h), (ge = O.getContext("2d")) == null || ge.putImageData(new ImageData(be.data, be.w, be.h), 0, 0);
    });
  }
  let bl = null, Xl = -1;
  function Jl(a) {
    if (bl = null, !y) return;
    const r = Xr(), d = Math.floor(a / 100), m = [...Ds.values()].some((ve) => a - ve.t0 < vl), S = [...kl.values()].some((ve) => a - ve.t0 < ve.dur), _ = Oe.home.classList.contains("active"), O = ln.classList.contains("open"), U = r && Sa === "smooth" && (O || _ && to === "strip");
    !document.hidden && (m || S || U || r && d !== Xl) && (Xl = d, _ && (pr(i("weatherCard"), a), Rs(i("weatherCard"), a)), O && (pr(ln, a), Rs(ln, a))), (r || m || S) && (bl = requestAnimationFrame(Jl));
  }
  function _i() {
    i("app").classList.toggle("wxMotion", Xr()), !bl && y && (bl = requestAnimationFrame(Jl));
  }
  let Wd = [];
  const Ta = 36e5, Ic = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function wa() {
    const a = /* @__PURE__ */ new Date(), r = (_, O) => new Date(a.getFullYear(), a.getMonth(), a.getDate() + _, O), d = [], m = [], S = [...Array(6)].map((_, O) => {
      const U = r(O, 6), ve = r(O, 18), ke = r(O + 1, 6), be = Wd.find((He) => Ut(new Date(He.datetime)) === Ut(U)), ge = (He, at, je) => {
        const Ne = d.filter((bt) => bt.t >= +He && bt.t < +at);
        if (Ne.length) {
          const bt = {};
          return Ne.forEach((Ye) => {
            bt[Ye.c] = (bt[Ye.c] || 0) + (Ic.has(Ye.c) ? 2 : 1);
          }), Object.entries(bt).sort((Ye, Mt) => Mt[1] - Ye[1])[0][0];
        }
        const De = m.find((bt) => {
          const Ye = +new Date(bt.datetime);
          return Ye >= +He - 3 * Ta && Ye < +at && (bt.is_daytime == null || !!bt.is_daytime == !je);
        });
        if (De) return De.condition;
        const vt = (be == null ? void 0 : be.condition) || "cloudy";
        return je && vt === "sunny" ? "clear-night" : vt;
      };
      return { start: +U, end: +ke, day: ge(U, ve, !1), night: ge(ve, ke, !0), hi: Number(be == null ? void 0 : be.temperature), lo: Number(be == null ? void 0 : be.templow) };
    });
    return { days: S, hours: d, start: S[0].start, end: S[5].end };
  }
  const wl = (a, r) => {
    const d = a.days.findIndex((S) => r < S.end);
    if (d < 0) return 1;
    const m = a.days[d];
    return Math.max(0, (d + (r - m.start) / (m.end - m.start)) / 6);
  }, Vd = (a, r) => {
    const d = Math.max(0, Math.min(0.99999, r)) * 6, m = Math.floor(d), S = a.days[m];
    return S.start + (d - m) * (S.end - S.start);
  };
  function xl(a, r) {
    const d = Math.max(0, a.days.findIndex((ve) => r < ve.end)), m = a.days[d], S = (r - m.start) / (m.end - m.start) >= 0.5;
    let _ = S ? m.night : m.day, O = NaN;
    const U = a.hours;
    if (U.length && r >= U[0].t - Ta && r <= U[U.length - 1].t + Ta) {
      let ve = U.findIndex((ge) => ge.t > r);
      ve < 0 && (ve = U.length);
      const ke = U[Math.max(0, ve - 1)], be = U[Math.min(U.length - 1, ve)];
      _ = ke.c || _, O = be.t > ke.t ? ke.temp + (be.temp - ke.temp) * Math.max(0, Math.min(1, (r - ke.t) / (be.t - ke.t))) : ke.temp;
    }
    if (!Number.isFinite(O)) {
      const ve = [];
      if (a.days.forEach((ke) => {
        Number.isFinite(ke.lo) && ve.push([ke.start - Ta, ke.lo]), Number.isFinite(ke.hi) && ve.push([ke.start + 9 * Ta, ke.hi]);
      }), ve.length) {
        O = r <= ve[0][0] ? ve[0][1] : ve[ve.length - 1][1];
        for (let ke = 1; ke < ve.length; ke++) if (r <= ve[ke][0] && r > ve[ke - 1][0]) {
          const [be, ge] = ve[ke - 1], [He, at] = ve[ke];
          O = ge + (at - ge) * (1 - Math.cos(Math.PI * (r - be) / (He - be))) / 2;
          break;
        }
      }
    }
    return { cond: S && _ === "sunny" ? "clear-night" : _, temp: O, night: S, day: m };
  }
  const yl = (a) => Ut(new Date(a)) === Ut(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(a)), kl = /* @__PURE__ */ new Map(), Fc = 900, Oc = 700;
  let Bs = null;
  const _n = typeof ResizeObserver == "function" ? new ResizeObserver((a) => a.forEach((r) => {
    Rs(r.target.parentElement), r.target.closest("#wxDialog") && Sl();
  })) : null;
  function Rs(a, r = performance.now()) {
    const d = a.querySelectorAll("canvas[data-wx-strip]");
    if (!d.length) return;
    const m = wa(), S = m.days.flatMap((ge) => [{ cond: ge.day, night: !1 }, { cond: ge.night, night: !0 }]), _ = S.map((ge) => ge.cond).join(), O = _s(), U = Xr(), ve = Ya(), ke = Number(Ut(new Date(m.start)).replace(/\D/g, "")) % 9973;
    let be = !1;
    d.forEach((ge) => {
      var bt;
      const He = ge.clientWidth, at = ge.clientHeight;
      if (!He || !at) return;
      const je = ge.dataset.wxStrip;
      let Ne = kl.get(je);
      Ne ? Ne.sig !== _ && (Ne.prev = Ne.segs, Ne.sig = _, Ne.segs = S, Ne.t0 = r, Ne.dur = Oc) : kl.set(je, Ne = { sig: _, segs: S, prev: null, t0: r, dur: Fc });
      const De = U || ve ? Math.min(1, Math.max(0, (r - Ne.t0) / Ne.dur)) : 1;
      De < 1 && (be = !0);
      const vt = { width: He, height: at, colors: O.colors, clock: r, ambient: U, seed: ke, reveal: ve ? De : 1 - Math.pow(1 - De, 3), prev: De < 1 ? Ne.prev : null, reduce: ve };
      if (Sa === "smooth") {
        const Ye = Math.min(2, window.devicePixelRatio || 1), Mt = Math.round(He * Ye), Pt = Math.round(at * Ye);
        ge.width !== Mt && (ge.width = Mt), ge.height !== Pt && (ge.height = Pt);
        const ut = ge.getContext("2d");
        if (!ut) return;
        ut.setTransform(Ye, 0, 0, Ye, 0, 0), Jf(ut, S, vt);
      } else {
        const Ye = Xf(S, { ...vt, px: 2, oneBit: Sa === "onebit", ink: O.ink, paper: O.paper });
        ge.width !== Ye.w && (ge.width = Ye.w), ge.height !== Ye.h && (ge.height = Ye.h), (bt = ge.getContext("2d")) == null || bt.putImageData(new ImageData(Ye.data, Ye.w, Ye.h), 0, 0);
      }
    }), be && _i();
  }
  function Ql() {
    const a = i("weatherCard");
    if (!a || a.hidden) return;
    const r = Ja.weather, d = r && (qt == null ? void 0 : qt[r]);
    if (!d) {
      a.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + Jo("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (r ? "Not available" : "Set up in Settings") + "</div></div></div></div>", pr(a);
      return;
    }
    const m = d.attributes || {}, S = m.temperature_unit || "°", _ = (ut) => Number.isFinite(Number(ut)) ? Math.round(Number(ut)) + "°" : "—", O = (m.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", U = Ls[d.state] || (d.state ? d.state.charAt(0).toUpperCase() + d.state.slice(1) : "—"), ve = Ut(/* @__PURE__ */ new Date()), ke = Wd.slice(0, 7), be = ke.find((ut) => Ut(new Date(ut.datetime)) === ve) || null, ge = ke.filter((ut) => Ut(new Date(ut.datetime)) >= ve).slice(0, 6), He = /* @__PURE__ */ new Date(), at = Ut(new Date(He.getFullYear(), He.getMonth(), He.getDate() + 1)), je = be ? "H " + _(be.temperature) + "&ensp; L " + _(be.templow) : "", Ne = (ut) => {
      const rt = Ut(new Date(ut.datetime));
      return rt === ve ? "Today" : rt === at ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(ut.datetime));
    }, De = Number.isFinite(Number(m.temperature)) ? Math.round(Number(m.temperature)) : "—", vt = (ut) => {
      const rt = new Date(ut.datetime);
      return Math.round((new Date(rt.getFullYear(), rt.getMonth(), rt.getDate()) - new Date(He.getFullYear(), He.getMonth(), He.getDate())) / 864e5);
    }, bt = (ut) => (Ls[ut] || ut || "").toLowerCase(), Ye = (ut, rt) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + vt(ut) + '" aria-label="' + pt(Ne(ut) + ": " + bt(ut.condition) + ", " + _(ut.temperature) + " / " + _(ut.templow) + ". Open the forecast") + '">' + Jo(ut.condition, !1, !1, Sa, "day" + rt) + '<div><div class="activityRowName">' + pt(Ne(ut)) + '</div><div class="activityRowMeta">' + _(ut.temperature) + " / " + _(ut.templow) + "</div></div></div>", Mt = () => '<div class="wxStrip"><div class="wxStripDays">' + wa().days.map((rt, xa) => {
      const na = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(rt.start)) + ": " + bt(rt.day) + (bt(rt.day) === bt(rt.night) ? " all day and night" : ", then " + bt(rt.night) + " overnight") + (Number.isFinite(rt.hi) ? ". High " + _(rt.hi) : "") + (Number.isFinite(rt.lo) ? ", low " + _(rt.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + xa + '" aria-label="' + pt(na) + '"><span class="wxDayName">' + pt(yl(rt.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + _(rt.hi) + '</span><span class="wxLow">' + _(rt.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    a.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + pt("Now in " + O + ": " + De + "°, " + bt(d.state) + ". Open the forecast") + '"><div class="wxCurrent">' + Jo(d.state, !0, !0, Sa, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + pt(String(De)) + '</span><span class="wxUnit">' + pt(S) + '</span></div><div class="wxPlace">' + pt(O) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + pt(U) + "</div>" + (je ? '<div class="wxRange">' + je + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (ge.length ? to === "strip" ? Mt() : '<div class="activityRows wxDays">' + ge.map(Ye).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", pr(a);
    const Pt = a.querySelector("canvas[data-wx-strip]");
    Bs && Bs !== Pt && (_n == null || _n.unobserve(Bs)), Bs = Pt, Pt && (_n == null || _n.observe(Pt), Rs(a)), _i(), nd();
  }
  const ed = i("weatherCard"), td = (a) => {
    const r = a.closest("[data-wx-day]");
    if (r) {
      const m = /* @__PURE__ */ new Date();
      ad(+new Date(m.getFullYear(), m.getMonth(), m.getDate() + Number(r.dataset.wxDay), 12), r);
      return;
    }
    const d = a.closest("[data-wx-open]");
    d && ad(Date.now(), d);
  };
  ed.addEventListener("click", (a) => td(a.target)), ed.addEventListener("keydown", (a) => {
    (a.key === "Enter" || a.key === " ") && a.target.matches("[data-wx-day],[data-wx-open]") && (a.preventDefault(), td(a.target));
  });
  const ln = i("wxDialog"), ao = i("wxGraph"), Ps = i("wxGraphWrap");
  let Bn = Date.now(), ur = null, Ml = !1, No = null;
  function ad(a, r) {
    const d = wa();
    ur = r || null, Bn = Math.max(d.start, Math.min(d.end - Ta, a)), kl.delete("dialog"), Ds.delete("scrub"), ln.classList.add("open"), ln.setAttribute("aria-hidden", "false"), nd(), _n == null || _n.observe(ln.querySelector("canvas[data-wx-strip]")), ao.focus({ preventScroll: !0 }), _i();
  }
  function xo() {
    var a;
    ln.classList.remove("open"), ln.setAttribute("aria-hidden", "true"), _n == null || _n.unobserve(ln.querySelector("canvas[data-wx-strip]")), (a = ur == null ? void 0 : ur.focus) == null || a.call(ur, { preventScroll: !0 }), ur = null;
  }
  function nd() {
    if (!ln.classList.contains("open")) return;
    const a = wa();
    i("wxGraphDays").innerHTML = a.days.map((r) => "<span>" + pt(yl(r.start)) + "</span>").join(""), Sl(a), Jr(a), Rs(ln);
  }
  function Jr(a = wa()) {
    const r = xl(a, Bn), d = qt == null ? void 0 : qt[Ja.weather], m = (d == null ? void 0 : d.attributes) || {}, S = m.temperature_unit || "°", _ = Math.abs(Bn - Date.now()) < Ta / 2, O = _ && d ? d.state : r.cond, U = _ && Number.isFinite(Number(m.temperature)) ? Math.round(Number(m.temperature)) : Number.isFinite(r.temp) ? Math.round(r.temp) : "—", ve = Ls[O] || (O ? O.charAt(0).toUpperCase() + O.slice(1) : "—"), ke = _ ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(Bn / Ta) * Ta)), be = r.day, ge = (Number.isFinite(be.hi) ? "H " + Math.round(be.hi) + "°" : "") + (Number.isFinite(be.lo) ? "&ensp; L " + Math.round(be.lo) + "°" : "");
    i("wxDialogNow").innerHTML = '<div class="wxCurrent">' + Jo(O, !0, _, Sa, "scrub", _ ? void 0 : r.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + pt(String(U)) + '</span><span class="wxUnit">' + pt(S) + '</span></div><div class="wxPlace">' + pt(ke) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + pt(ve) + "</div>" + (ge ? '<div class="wxRange">' + ge + "</div>" : "") + "</div>", pr(i("wxDialogNow")), ao.setAttribute("aria-valuenow", String(Math.round((Bn - a.start) / Ta))), ao.setAttribute("aria-valuetext", ke + ", " + ve.toLowerCase() + ", " + U + "°"), od(a), _i();
  }
  function Sl(a = wa()) {
    const r = i("wxGraphLine"), d = Ps.clientWidth, m = Ps.clientHeight;
    if (!d || !m) return;
    const S = [];
    for (let De = a.start; De <= a.end; De += Ta) {
      const vt = xl(a, De).temp;
      Number.isFinite(vt) && S.push([wl(a, De) * d, vt]);
    }
    if (r.setAttribute("viewBox", "0 0 " + d + " " + m), S.length < 2) {
      r.innerHTML = '<g id="wxCursorMark"></g>', No = null, od(a);
      return;
    }
    const _ = S.map((De) => De[1]), O = Math.min(..._), U = Math.max(..._), ve = Math.max(4, U - O), ke = Sa !== "smooth", be = (De) => ke ? Math.round(De / 2) * 2 : Math.round(De * 10) / 10;
    No = (De) => m * 0.84 - (De - O) / ve * m * 0.62;
    const ge = _s(), He = Sa === "onebit" ? ge.paper : "#ffffff", at = Sa === "onebit" ? ge.ink : "rgba(0,0,0,.28)", je = "M" + S.map((De) => be(De[0]) + " " + be(No(De[1]))).join(" L"), Ne = (De, vt) => {
      const bt = S.find((Ye) => Ye[1] === De);
      return '<text class="wxLineLabel" x="' + be(Math.min(d - 14, Math.max(14, bt[0]))) + '" y="' + be(No(De) + (vt ? 18 : -10)) + '" fill="' + He + '" stroke="' + at + '">' + Math.round(De) + "°</text>";
    };
    r.setAttribute("shape-rendering", ke ? "crispEdges" : "auto"), r.innerHTML = '<path d="' + je + '" fill="none" stroke="' + at + '" stroke-width="' + (ke ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + je + '" fill="none" stroke="' + He + '" stroke-width="2" stroke-linejoin="round"/>' + Ne(U, !1) + Ne(O, !0) + '<g id="wxCursorMark"></g>', od(a);
  }
  function od(a = wa()) {
    const r = i("wxGraphLine").querySelector("#wxCursorMark");
    if (!r) return;
    const d = Ps.clientWidth, m = Ps.clientHeight, S = Sa !== "smooth", _ = (He) => S ? Math.round(He / 2) * 2 : He, O = _(wl(a, Bn) * d), U = xl(a, Bn).temp, ve = _s(), ke = Sa === "onebit" ? ve.paper : "#ffffff", be = Sa === "onebit" ? ve.ink : "rgba(0,0,0,.28)", ge = No && Number.isFinite(U) ? _(No(U)) : null;
    r.innerHTML = '<rect x="' + (O - 2) + '" y="0" width="4" height="' + m + '" fill="' + be + '"/><rect x="' + (O - 1) + '" y="0" width="2" height="' + m + '" fill="' + ke + '"/>' + (ge == null ? "" : S ? '<rect x="' + (O - 5) + '" y="' + (ge - 5) + '" width="10" height="10" fill="' + ke + '" stroke="' + be + '" stroke-width="2"/>' : '<circle cx="' + O + '" cy="' + ge + '" r="6" fill="' + ke + '" stroke="' + be + '" stroke-width="2"/>');
  }
  const Pa = (a) => {
    const r = Ps.getBoundingClientRect();
    r.width && (Bn = Vd(wa(), (a - r.left) / r.width), Jr());
  };
  ao.addEventListener("pointerdown", (a) => {
    if (a.button === 0) {
      Ml = !0;
      try {
        ao.setPointerCapture(a.pointerId);
      } catch {
      }
      Pa(a.clientX);
    }
  }), ao.addEventListener("pointermove", (a) => {
    Ml && Pa(a.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((a) => ao.addEventListener(a, () => {
    Ml = !1;
  })), ao.addEventListener("keydown", (a) => {
    const r = wa(), d = { ArrowLeft: -Ta, ArrowRight: Ta, ArrowDown: -Ta, ArrowUp: Ta, PageUp: -24 * Ta, PageDown: 24 * Ta }[a.key];
    d ? (a.preventDefault(), Bn = Math.max(r.start, Math.min(r.end - Ta, Math.round(Bn / Ta) * Ta + d)), Jr(r)) : (a.key === "Home" || a.key === "End") && (a.preventDefault(), Bn = a.key === "Home" ? r.start : r.end - Ta, Jr(r));
  }), i("wxDialogClose").addEventListener("click", xo), ln.addEventListener("click", (a) => {
    a.target === ln && xo();
  }), ln.addEventListener("keydown", (a) => {
    a.key === "Escape" && (a.preventDefault(), xo());
  }), Ql(), ($d = (sd = window.matchMedia) == null ? void 0 : (Kd = sd.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || $d.call(Kd, "change", () => {
    _i(), pr(n);
  }), _i();
  const jd = i("tvNav");
  l.fullscreenSupported || (jd.hidden = !0), jd.addEventListener("click", () => l.toggleFullscreen()), n.addEventListener("keydown", (a) => {
    !Oe.workout.classList.contains("active") || rn.classList.contains("active") || a.target.closest("input,select,textarea,.holdEnd") || (a.key === "MediaPlayPause" || a.key === " " && !a.target.closest("button") ? (a.preventDefault(), nl.click()) : a.key === "MediaTrackNext" ? (a.preventDefault(), i("skipExercise").click()) : a.key === "MediaTrackPrevious" && (a.preventDefault(), i("restartSegment").click()));
  }), n.querySelectorAll("[data-rounds-step]").forEach((a) => a.addEventListener("click", () => {
    const r = Math.max(1, Math.min(10, (Number(ct.value) || 1) + Number(a.dataset.roundsStep)));
    String(r) !== ct.value && (ct.value = r, ct.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [R, L, te, ct].forEach((a) => a.addEventListener("input", () => {
    const r = yt[qe];
    r && (r.total = Number(R.value), r.work = Number(L.value), r.rest = Number(te.value)), Et();
  })), re.addEventListener("click", sl), Ze.addEventListener("click", () => A("settings")), i("settingsBack").addEventListener("click", sl), nl.addEventListener("click", () => To(!Yt)), Mn(qe), ta(), la(), bo(), i("healthHelpOpen").addEventListener("click", () => n.querySelector(".tab[data-pane=helpPane]").click()), Cs(i("resetStats"), i("resetStatsFill"), 1500, () => {
    xt.history = [], xt.checkins = [], nt = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    ka(), Jt(), la(), ta(), bo(), Ft(), At("Stats reset");
  });
  const Bi = i("morningTime"), id = i("eveningTime"), rd = i("checkinAutoOpen");
  Bi.value = $n().morning, id.value = $n().evening, rd.classList.toggle("on", it().checkinAutoOpen !== !1), [["morningTime", Bi], ["eveningTime", id]].forEach(([a, r]) => r.addEventListener("change", () => {
    r.value && (mn(a, r.value), Ft());
  })), rd.addEventListener("click", () => {
    const a = it().checkinAutoOpen === !1;
    rd.classList.toggle("on", a), mn("checkinAutoOpen", a);
  }), setTimeout(We, 800);
  const Ue = i("checkinNotify"), vn = i("checkinNotifyTarget"), Cl = i("checkinNotifyStatus"), Ns = Cl.textContent;
  function zd() {
    const a = l.notifyServices(), r = a.filter((S) => S.startsWith("mobile_app_")), d = r.length ? r : a, m = (S) => S.replace(/^mobile_app_/, "").replace(/_/g, " ");
    vn.innerHTML = d.map((S) => '<option value="' + pt(S) + '">' + pt(m(S)) + "</option>").join(""), !it().notifyTarget && d[0] && (it().notifyTarget = d[0]), vn.value = it().notifyTarget || "";
  }
  function La() {
    const a = !!it().notifyOn;
    Ue.classList.toggle("on", a), i("checkinNotifyTargetRow").hidden = !a;
    const r = $n();
    Cl.textContent = a ? "Sends at " + r.morning + " and " + r.evening : Ns;
  }
  async function Tl() {
    const a = !!it().notifyOn;
    try {
      return await l.setReminderAutomation(a ? { target: it().notifyTarget, times: $n() } : null), !0;
    } catch {
      return At("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  Ue.addEventListener("click", async () => {
    const a = !it().notifyOn;
    if (a && (zd(), !it().notifyTarget)) {
      At("Install the Companion app on your phone first");
      return;
    }
    it().notifyOn = a, La(), await Tl() ? (ka(), At(a ? "Check-in notifications on" : "Check-in notifications off")) : (it().notifyOn = !a, La());
  }), vn.addEventListener("change", () => {
    mn("notifyTarget", vn.value), it().notifyOn && Tl();
  }), [Bi, id].forEach((a) => a.addEventListener("change", () => {
    La(), it().notifyOn && Tl();
  })), zd(), La();
  let Hs = null;
  function Ho() {
    Hs || (Hs = setTimeout(() => {
      Hs = null, bo();
    }, 3e4));
  }
  return {
    updateStates(a) {
      var d, m;
      const r = !qt || qt[Ja.weather] !== a[Ja.weather] || ((d = qt["sun.sun"]) == null ? void 0 : d.state) !== ((m = a["sun.sun"]) == null ? void 0 : m.state);
      qt = a, Bo(a), hl(a), r && Ql(), Date.now() - Fd > 60 * 60 * 1e3 && Kl(), Ho();
    },
    applyRemoteData(a) {
      if (a && (Array.isArray(a.history) && (xt.history = a.history, Jt()), Array.isArray(a.history) && bo(), Array.isArray(a.checkins) && (xt.checkins = a.checkins.map(rs), Ft(), ta(), la(), Jt(), bo()), a.profiles && !$a.classList.contains("open") && !Co)) {
        const r = kn(a);
        Object.keys(yt).forEach((d) => delete yt[d]), Object.assign(yt, r.profiles), xt.order = r.order, yt[qe] || (qe = xt.order[0]), Fi(), Mn(qe);
      }
    },
    suspend() {
      y = !1;
    },
    resume() {
      y || (y = !0, Nr || (Nr = requestAnimationFrame(Qs)), Ot || (Ot = requestAnimationFrame(el)), _i(), Gr(n.querySelector(".tab.active"), !1));
    }
  };
}
const th = /* @__PURE__ */ new Set(["roaming", "test_area"]), ah = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window" },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62 }
}, Ws = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, Ua = "made_up_", ei = (n) => {
  var l;
  return (l = String(n).split(".")[1]) == null ? void 0 : l.startsWith(Ua);
}, tc = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function Lp(n) {
  const l = n.getHours() + n.getMinutes() / 60, i = Math.max(0, Math.sin((l - 7) / 13 * Math.PI));
  return 2.4 * i * i;
}
function nh(n) {
  const l = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  let i = 0;
  for (let u = +l; u < +n; u += 10 * 60 * 1e3) i += Lp(new Date(u)) / 6;
  return i;
}
function Np(n = /* @__PURE__ */ new Date()) {
  const l = [];
  for (let i = 0; i <= 96; i++) {
    const u = +n - (96 - i) * 15 * 60 * 1e3;
    l.push([u, Lp(new Date(u))]);
  }
  return l;
}
function oh({ onChange: n }) {
  const l = {}, i = {}, u = ($, z, me, pe) => {
    l[$] = { entity_id: $, state: me, attributes: pe, last_changed: new Date(Date.now() - 18e6).toISOString() }, i[$] = z;
  }, v = ($, z, me) => {
    const pe = l[$], Se = z ?? pe.state;
    l[$] = { ...pe, state: Se, attributes: { ...pe.attributes, ...me }, last_changed: Se === pe.state ? pe.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, y = ($, z, me, pe) => u("binary_sensor." + Ua + ($ ? $ + "_" : "") + tc(z), $, pe ? "on" : "off", { friendly_name: z, device_class: me });
  Object.entries(ah).forEach(([$, z]) => {
    if (z.temperature != null && u("sensor." + Ua + $ + "_temperature", $, String(z.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), z.humidity != null && u("sensor." + Ua + $ + "_humidity", $, String(z.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), z.vacuum && u("vacuum." + Ua + "robot", $, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), z.climate && u("climate." + Ua + $, $, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: z.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), z.cover) {
      const [me, pe, Se, ie] = z.cover;
      u("cover." + Ua + $ + "_" + tc(me), $, Se ? "open" : "closed", { friendly_name: me, device_class: pe, current_position: Se, ...ie != null ? { current_tilt_position: ie } : {} });
    }
    if (z.humidifier && u("humidifier." + Ua + $, $, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: z.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), z.solar && (u("sensor." + Ua + $ + "_solar_power", $, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), u("sensor." + Ua + $ + "_solar_today", $, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), z.valve && u("valve." + Ua + $ + "_" + tc(z.valve), $, "closed", { friendly_name: z.valve, device_class: "water" }), z.door && y($, z.door, "door", z.doorOpen), z.window && y($, z.window, "window", !1), z.motion && y($, z.motion, "motion", !1), z.plant) {
      const [me, pe, Se, ie, oe] = z.plant, ne = Ua + tc(me), D = (le, Oe, re, Ze, A) => u("sensor." + ne + "_" + le, $, String(re), { friendly_name: Oe, device_class: A, state_class: "measurement", unit_of_measurement: Ze, plant_low: re < Ws[le][0], plant_high: re > Ws[le][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[le] });
      D("moisture", "Moisture", pe, "%", "moisture"), D("light", "Light", Se, "lx", "illuminance"), D("temperature", "Temperature", ie, "°C", "temperature"), D("fertility", "Fertility", oe, "µS/cm", "conductivity");
      const Ce = Object.entries({ moisture: pe, light: Se, temperature: ie, fertility: oe }).filter(([le, Oe]) => Oe < Ws[le][0] || Oe > Ws[le][1]).map(([le, Oe]) => le + (Oe < Ws[le][0] ? " low" : " high"));
      u("plant." + ne, $, Ce.length ? "problem" : "ok", { friendly_name: me, moisture: pe, brightness: Se, temperature: ie, conductivity: oe, problem: Ce.join(", ") || "none" });
    }
  }), u("alarm_control_panel." + Ua + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), y(null, "Front door", "door", !1), y(null, "Smoke alarm", "smoke", !1), u("sensor." + Ua + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const k = {}, E = {};
  let I = null;
  function M() {
    const $ = /* @__PURE__ */ new Date();
    Object.keys(l).forEach((z) => {
      z.endsWith("_solar_power") && (l[z] = { ...l[z], state: Lp($).toFixed(2) }), z.endsWith("_solar_today") && (l[z] = { ...l[z], state: nh($).toFixed(1) });
    });
  }
  M();
  let W = 0;
  function F() {
    let $ = !1;
    const z = ++W % 10 === 0, me = (ie, oe, ne) => {
      v(ie, oe, ne), $ = !0;
    };
    Object.entries(k).forEach(([ie, oe]) => {
      const ne = l[ie].attributes.current_position, D = ne < oe ? Math.min(oe, ne + 10) : Math.max(oe, ne - 10);
      D === oe && delete k[ie], me(ie, D === oe ? D === 0 ? "closed" : "open" : oe > ne ? "opening" : "closing", { current_position: D });
    }), Object.entries(E).forEach(([ie, oe]) => {
      const ne = l[ie].attributes.current_tilt_position, D = ne < oe ? Math.min(oe, ne + 25) : Math.max(oe, ne - 25);
      D === oe && delete E[ie], me(ie, null, { current_tilt_position: D });
    }), Object.keys(l).filter((ie) => ie.startsWith("climate.")).forEach((ie) => {
      const oe = l[ie], ne = oe.attributes, D = ne.current_temperature, Ce = (oe.state === "heat" || oe.state === "auto") && D < ne.temperature - 0.05, le = (oe.state === "cool" || oe.state === "auto") && D > ne.temperature + 0.05, Oe = oe.state === "off" ? "off" : Ce ? "heating" : le ? "cooling" : "idle", re = z ? Math.round((D + (Ce ? 0.1 : le ? -0.1 : 0)) * 10) / 10 : D;
      (re !== D || Oe !== ne.hvac_action) && me(ie, null, { current_temperature: re, hvac_action: Oe });
    }), Object.keys(l).filter((ie) => ie.startsWith("humidifier.")).forEach((ie) => {
      const oe = l[ie], ne = oe.attributes, D = ne.current_humidity, Ce = oe.state === "on" && D < ne.humidity, le = Ce && z ? D + 1 : D, Oe = oe.state !== "on" ? "off" : Ce ? "humidifying" : "idle";
      if (le !== D || Oe !== ne.action) {
        me(ie, null, { current_humidity: le, action: Oe });
        const re = "sensor." + Ua + i[ie] + "_humidity";
        l[re] && me(re, String(le));
      }
    });
    const pe = l["vacuum." + Ua + "robot"], Se = pe.attributes;
    pe.state === "cleaning" && z && me(pe.entity_id, null, { battery_level: Math.max(5, Se.battery_level - 1) }), pe.state === "returning" && me(pe.entity_id, "docked", {}), pe.state === "docked" && Se.battery_level < 100 && me(pe.entity_id, null, { battery_level: Math.min(100, Se.battery_level + 2) }), I && Date.now() - I.at > 5e3 && (me("alarm_control_panel." + Ua + "house", "armed_" + I.mode, {}), I = null), $ && n();
  }
  const q = setInterval(F, 1e3), j = setInterval(() => {
    M(), n();
  }, 60 * 1e3);
  function ue($, z, me) {
    const pe = me == null ? void 0 : me.entity_id;
    if (!l[pe]) return !1;
    const Se = l[pe], ie = Se.attributes, oe = (ne, D) => v(pe, ne, D);
    if ($ === "climate" && (z === "set_temperature" && oe(null, { temperature: Math.max(ie.min_temp, Math.min(ie.max_temp, me.temperature)) }), z === "set_hvac_mode" && oe(me.hvac_mode, me.hvac_mode === "off" ? { hvac_action: "off" } : {}), z === "toggle" && oe(Se.state === "off" ? "heat" : "off", Se.state === "off" ? {} : { hvac_action: "off" })), $ === "cover") {
      const ne = z === "open_cover" ? 100 : z === "close_cover" ? 0 : z === "set_cover_position" ? me.position : z === "toggle" ? ie.current_position > 0 ? 0 : 100 : null;
      z === "stop_cover" && (delete k[pe], delete E[pe], oe(ie.current_position === 0 ? "closed" : "open")), ne != null && ne !== ie.current_position && (k[pe] = ne, oe(ne > ie.current_position ? "opening" : "closing"));
      const D = z === "open_cover_tilt" ? 100 : z === "close_cover_tilt" ? 0 : z === "set_cover_tilt_position" ? me.tilt_position : null;
      z === "stop_cover_tilt" && delete E[pe], D != null && ie.current_tilt_position != null && D !== ie.current_tilt_position && (E[pe] = D);
    }
    if ($ === "humidifier" && (z === "set_humidity" && oe(null, { humidity: Math.max(ie.min_humidity, Math.min(ie.max_humidity, me.humidity)) }), z === "set_mode" && oe(null, { mode: me.mode }), z === "turn_on" || z === "turn_off" || z === "toggle")) {
      const ne = z === "turn_on" || z === "toggle" && Se.state !== "on";
      oe(ne ? "on" : "off", { action: ne ? "idle" : "off" });
    }
    if ($ === "vacuum" && (z === "start" && oe("cleaning", { rooms: me.rooms || ie.rooms }), z === "pause" && oe("paused"), z === "return_to_base" && oe("returning", { rooms: [] }), z === "locate" && oe(null, { located: Date.now() }), z === "set_rooms" && oe(null, { rooms: me.rooms })), $ === "valve") {
      const ne = z === "open_valve" || z === "toggle" && Se.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(z) && oe(ne ? "open" : "closed");
    }
    if ($ === "alarm_control_panel") {
      z === "alarm_disarm" && (I = null, oe("disarmed", { changed_by: "Matt" }));
      const ne = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[z];
      ne && (I = { mode: ne, at: Date.now() }, oe("arming", { changed_by: "Matt" }));
    }
    return n(), !0;
  }
  function ee($, { madeUp: z = !0 } = {}) {
    const me = z ? l : {}, pe = ($ == null ? void 0 : $.states) || {}, Se = ($ == null ? void 0 : $.entities) || {}, ie = ($ == null ? void 0 : $.devices) || {}, oe = (de) => {
      var ye;
      const ce = Se[de];
      return ce && (ce.area_id || ce.device_id && ((ye = ie[ce.device_id]) == null ? void 0 : ye.area_id)) || null;
    }, ne = (de) => {
      const ce = Se[de];
      return pe[de] && pe[de].state !== "unavailable" && !(ce != null && ce.hidden) && !(ce != null && ce.entity_category);
    }, D = {};
    Object.keys(pe).forEach((de) => {
      const ce = oe(de);
      ce && ne(de) && (D[ce] || (D[ce] = [])).push(de);
    });
    const Ce = { ...pe, ...me }, le = (de) => {
      var ce, ye;
      return (ye = (ce = Ce[de]) == null ? void 0 : ce.attributes) == null ? void 0 : ye.device_class;
    }, Oe = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], re = Object.keys(pe).filter((de) => de.startsWith("vacuum.") && ne(de)), Ze = Object.values(($ == null ? void 0 : $.areas) || {}).filter((de) => !th.has(de.area_id)).map((de) => {
      const ce = de.area_id, ye = D[ce] || [], Me = (Ve) => ye.filter((Kt) => Kt.startsWith(Ve + ".")), Le = (Ve) => Me("sensor").filter((Kt) => le(Kt) === Ve), Xe = (Ve) => Object.keys(me).filter((Kt) => i[Kt] === ce && Ve(Kt)), ct = (Ve, Kt) => Ve.length ? Ve : Xe(Kt), Re = ct(Le("temperature"), (Ve) => Ve.endsWith(ce + "_temperature")), ja = ct(Le("humidity"), (Ve) => Ve.endsWith(ce + "_humidity")), ai = Le("power").filter((Ve) => /^(W|kW)$/.test(Ce[Ve].attributes.unit_of_measurement || "")), oo = Me("binary_sensor").filter((Ve) => le(Ve) === "moisture"), Vn = ct(Me("plant"), (Ve) => Ve.startsWith("plant.")).map((Ve) => ({ id: Ve, readings: Xe((Kt) => Kt.startsWith("sensor." + Ve.split(".")[1] + "_")) })), ia = [...Me("binary_sensor").filter((Ve) => Oe.includes(le(Ve))), ...Xe((Ve) => Ve.startsWith("binary_sensor."))];
      return {
        id: ce,
        name: de.name,
        icon: de.icon,
        floor: de.floor_id || null,
        readings: [...Re.slice(0, 1), ...ja.slice(0, 1), ...oo],
        power: ai.length ? ai.reduce((Ve, Kt) => Ve + Number(Ce[Kt].state) * (Ce[Kt].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: Me("switch"),
        lights: Me("light"),
        actions: [...Me("light"), ...ct(Me("climate"), (Ve) => Ve.startsWith("climate.")), ...ct(Me("cover"), (Ve) => Ve.startsWith("cover.")), ...ct(Me("humidifier"), (Ve) => Ve.startsWith("humidifier.")), ...ct(Me("valve"), (Ve) => Ve.startsWith("valve.")), ...Me("media_player"), ...Me("vacuum"), ...re.length ? [] : Xe((Ve) => Ve.startsWith("vacuum."))],
        solar: Xe((Ve) => Ve.includes("_solar_")),
        plants: Vn,
        openings: ia,
        alerts: [...oo, ...ia].filter((Ve) => {
          var Kt;
          return ((Kt = Ce[Ve]) == null ? void 0 : Kt.state) === "on";
        })
      };
    }).filter((de) => de.readings.length || de.plugs.length || de.actions.length || de.solar.length || de.plants.length), A = Object.keys(pe).find((de) => /^sensor\..*(p1_meter_power|grid_power)$/.test(de) && pe[de].state !== "unavailable") || null, R = (de) => Object.keys(pe).filter((ce) => ce.startsWith(de + ".") && ne(ce)), L = R("alarm_control_panel"), te = re.length ? re : z ? ["vacuum." + Ua + "robot"] : [];
    return {
      states: Ce,
      rooms: Ze,
      grid: A,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (de) => me[de] ? i[de] : oe(de),
      vacuums: te,
      homeVacuums: te.filter((de) => !Ze.some((ce) => ce.actions.includes(de))),
      security: {
        alarms: L.length ? L : z ? ["alarm_control_panel." + Ua + "house"] : [],
        locks: R("lock"),
        openings: [...Object.keys(me).filter((de) => de.startsWith("binary_sensor.")), ...z ? ["sensor." + Ua + "doorbell"] : []]
      }
    };
  }
  return { model: ee, call: ue, stop() {
    clearInterval(q), clearInterval(j);
  } };
}
const xr = (n) => n < 0 ? 0 : n > 1 ? 1 : n, xp = (n) => {
  const l = String(n || "#000000").trim().replace("#", ""), i = l.length === 3 ? l.split("").map((u) => u + u).join("") : l;
  return [0, 2, 4].map((u) => parseInt(i.slice(u, u + 2), 16) || 0);
}, ih = (n) => "#" + n.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), Hp = {}, Wo = (n, l, i) => {
  const u = n + l + i;
  return Hp[u] || (Hp[u] = ih(xp(n).map((v, y) => v + (xp(l)[y] - v) * i)));
}, Ip = {}, mc = (n) => Ip[n] || (Ip[n] = xp(n));
function rh(n) {
  const l = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return l.partly = [Wo(l.clear[0], l.cloudy[0], 0.12), Wo(l.clear[1], l.cloudy[1], 0.12)], l.storm = [Wo(l.rain[0], "#000000", 0.22), Wo(l.rain[1], "#000000", 0.22)], l;
}
const sh = [
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
], br = (n, l) => (sh[(l & 7) * 8 + (n & 7)] + 0.5) / 64, ju = 1, zu = 2, Gu = 3, Uu = 4, _l = 5, xc = 6, yp = 7, Yu = 8, Fp = (n, l) => l <= 0.6665 && ((n - 0.5) * (n - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && l >= 0.416), lh = (n, l, i) => {
  let u = !1;
  for (let v = 0, y = n.length - 1; v < n.length; y = v++) {
    const k = n[v], E = n[y];
    k[1] > i != E[1] > i && l < (E[0] - k[0]) * (i - k[1]) / (E[1] - k[1]) + k[0] && (u = !u);
  }
  return u;
};
function dh(n, l, i, u, { oneBit: v, ink: y, paper: k, snowInk: E }) {
  const I = new Uint8ClampedArray(i * u * 4), M = mc(y), W = mc(k);
  for (let F = 0; F < u; F++) for (let q = 0; q < i; q++) {
    const j = F * i + q, ue = l[j];
    if (n[j] == null) continue;
    let ee = mc(n[j]);
    if (v) {
      let $;
      ue === Uu || ue === Yu ? $ = !0 : ue === _l ? $ = E : ue === yp || ue === xc ? $ = !1 : $ = Math.round((0.2126 * ee[0] + 0.7152 * ee[1] + 0.0722 * ee[2]) / 255 * 4) / 4 <= br(q, F), (ue === ju || ue === zu || ue === Gu || ue === xc) && (q > 0 && l[j - 1] !== ue || q < i - 1 && l[j + 1] !== ue || F > 0 && l[j - i] !== ue || F < u - 1 && l[j + i] !== ue) && ($ = !0), ee = $ ? M : W;
    }
    I[j * 4] = ee[0], I[j * 4 + 1] = ee[1], I[j * 4 + 2] = ee[2], I[j * 4 + 3] = 255;
  }
  return { w: i, h: u, data: I };
}
const ch = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, ph = (n) => Sc(n, !1).split("/")[0], Jc = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let l = Math.imul(n ^ n >>> 15, 1 | n);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, uh = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", fh = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", hh = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", mh = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", gh = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], vh = [".##", "##.", ".#.", "#.."];
function Zu(n, { width: l, height: i, colors: u, wave: v = 0.38, soft: y = 6, glow: k = 0.6, columns: E = 6 }) {
  const I = { ...Wn, dawn: "#e5a77e", ...u }, M = rh(I), W = l, F = i, q = W / E, j = q / 2, ue = Math.PI * 2, ee = n.length ? n : [{ cond: "cloudy", night: !1 }], $ = [...Array(E * 2)].map((Se, ie) => {
    const oe = ee[Math.min(ie, ee.length - 1)], ne = ph(oe.cond), D = ie % 2 === 1;
    return { cond: oe.cond, k: ne, night: D, sky: M[ne][D ? 1 : 0], cover: ch[ne] };
  }), z = (Se) => F * (0.5 - v * Math.cos(ue * (Se / q - 0.25)));
  return { C: I, S: $, W, H: F, cw: q, sw: j, TAU: ue, yb: z, side: (Se, ie, oe) => {
    const ne = (Se ? z(ie) - oe : oe - z(ie)) / Math.max(3, y * 1.4) + 0.5;
    return ne <= 0 ? 0 : ne >= 1 ? 1 : ne;
  }, glowAt: (Se) => {
    const ie = ((Se / q - 0.25) % 1 + 1) % 1, oe = Math.max(0, Math.min(E - 1, Math.round(Se / q - 0.25))), ne = Math.max(0, Math.min(E - 1, Math.round(Se / q - 0.75))), D = 1 - ($[2 * oe].cover + $[2 * ne + 1].cover) / 2, Ce = Math.sin(Math.PI * Math.min(1, Math.max(0, z(Se) / F)));
    return { c: ie < 0.5 ? I.dusk : I.dawn, a: k * (0.2 + 0.8 * D) * Ce * Ce };
  }, soft: y, tw: q * 0.3, sy: F / 90 };
}
function Ku(n, { clock: l = 0, ambient: i = !1, seed: u = 1 }) {
  const { S: v, sw: y, side: k, C: E, TAU: I, sy: M, H: W } = n, F = l, q = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  v.forEach((ee, $) => {
    const z = Jc(u * 977 + $ * 131 + 7), me = ($ + 0.5) * y, pe = ee.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[ee.k] : 0;
    for (let Se = 0; Se < pe; Se++) {
      const ie = me + (z() - 0.5) * y * 1.6, oe = (6 + z() * 76) * M, ne = z() < 0.35, D = 1.8 + z() * 1.6, Ce = k(!0, ie, oe) * (ne ? 0.95 : 0.7) * (i ? 0.6 + 0.4 * Math.sin(I * F / 2600 + Se * 1.7 + $) : 1);
      Ce >= 0.03 && q.stars.push({ x: ie, y: oe, big: ne, size: D, o: Ce });
    }
    if (!ee.night && (ee.k === "clear" || ee.k === "partly")) {
      const Se = me + (z() - 0.5) * y * 0.3, ie = Math.min(15, y * 0.29);
      q.suns.push({ x: Se, y: 32 * M, rad: ie, halo: ie * 2.8 * (i ? 1 + 0.07 * Math.sin(I * F / 3600 + $) : 1) });
    }
    if (ee.night && (ee.k === "clear" || ee.k === "partly")) {
      const Se = Math.min(0.78, y * 0.55 / 34), ie = me - 23 * Se + (z() - 0.5) * y * 0.2;
      q.moons.push({ x: ie + 23 * Se, y: (4 + (i ? 0.8 * Math.sin(I * F / 5200 + $) : 0)) * M + 23 * Se, d: 46 * Se });
    }
  });
  const j = Math.max(56, Math.min(100, W * 0.45)), ue = Math.max(1, y / (j * 2.4));
  return v.forEach((ee, $) => {
    const z = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[ee.k];
    if (!z) return;
    const me = ee.k === "partly" ? 1 : Math.round(z * ue), pe = Jc(u * 577 + $ * 71 + 3), Se = ($ + 0.5) * y, ie = ee.k === "rain" || ee.k === "storm" || ee.night ? E.cloudNight : E.cloudDay, oe = ee.night ? 0.82 : ee.k === "storm" ? 0.75 : 1;
    for (let ne = 0; ne < me; ne++) {
      const D = j / 46 * (ee.k === "partly" ? 1 : 0.8 + pe() * 0.4), Ce = Se + (ee.k === "partly" ? y * 0.12 : ((ne + 0.5) / me - 0.5) * y * 0.95 + (pe() - 0.5) * y * 0.5 / me), le = (ee.k === "partly" ? 40 : 6 + pe() * 26) * M, Oe = i ? 2.5 * Math.sin(I * F / 9e3 + $ * 1.3 + ne * 2.1) : 0, re = i ? 0.9 * Math.sin(I * F / 6100 + $ + ne) : 0;
      q.clouds.push({ x: Ce - 23 * D + Oe, y: le - 15.33 * D + re, w: 46 * D, h: 30.66 * D, fill: ie, o: oe * (me > 1 && ne === 0 ? 0.85 : 1) });
    }
  }), v.forEach((ee, $) => {
    const z = Jc(u * 313 + $ * 29 + 11), me = ($ + 0.5) * y, pe = ee.cond === "pouring" ? 16 : ee.cond === "rainy" || ee.cond === "hail" ? 9 : ee.cond === "lightning-rainy" ? 12 : ee.cond === "snowy-rainy" ? 5 : 0;
    for (let ie = 0; ie < pe; ie++) {
      let oe = me + (z() - 0.5) * y * 1.05, ne = 44 + z() * 36, D = 1;
      if (i) {
        const le = ((ne - 44 + F * 0.04) % 36 + 36) % 36;
        oe -= 0.21 * (le - (ne - 44)), ne = 44 + le, D = Math.min(1, le / 6, (36 - le) / 6);
      }
      ne *= M;
      const Ce = k(ee.night, oe, ne) * D;
      Ce >= 0.05 && q.drops.push({ x: oe, y: ne, o: Ce });
    }
    const Se = ee.cond === "snowy" ? 11 : ee.cond === "snowy-rainy" ? 6 : 0;
    for (let ie = 0; ie < Se; ie++) {
      let oe = me + (z() - 0.5) * y * 1.05, ne = 40 + z() * 44, D = 1;
      if (i) {
        const le = ((ne - 40 + F * 9e-3) % 44 + 44) % 44;
        ne = 40 + le, oe += 1.6 * Math.sin(I * F / 2800 + ie * 1.9 + $), D = Math.min(1, le / 6, (44 - le) / 6);
      }
      ne *= M;
      const Ce = k(ee.night, oe, ne) * D;
      Ce >= 0.05 && q.flakes.push({ x: oe, y: ne, o: Ce });
    }
    if (ee.k === "fog") {
      const ie = ee.night ? "#c8ccd6" : "#ffffff", oe = ee.night ? 0.28 : 0.62, ne = i ? 4 * Math.sin(I * F / 8e3 + $) : 0;
      for (let D = 0; D < 4; D++) q.fogs.push({ x: me - y * 0.75 + D % 2 * y * 0.18 + (D % 2 ? ne : -ne), y: (30 + D * 13) * M, w: y * 1.3, c: ie, a: oe });
    }
    if (ee.k === "storm") {
      const ie = (F / 3400 + $ * 0.37) % 1;
      q.bolts.push({ x: me + (z() - 0.5) * y * 0.3 - 5, y: 36 * M, o: i && !(ie < 0.05 || ie > 0.09 && ie < 0.12) ? 0.8 : 1 });
    }
  }), q;
}
function bh(n, l, i, u, v, y, k, E) {
  const { S: I, C: M, cw: W, yb: F, glowAt: q, soft: j, tw: ue, sy: ee } = n, $ = new Array(i * u), z = new Uint8Array(i * u), me = new Uint8Array(i * u), pe = (A, R, L, te, de) => {
    L == null || A < 0 || R < 0 || A >= i || R >= u || (te >= 1 || te > br(A + 5, R + 3)) && ($[R * i + A] = L, z[R * i + A] = de);
  }, Se = (A, R, L, te) => {
    for (let de = Math.max(0, Math.floor(R - L) - 1); de <= Math.min(u - 1, R + L + 1); de++) for (let ce = Math.max(0, Math.floor(A - L) - 1); ce <= Math.min(i - 1, A + L + 1); ce++) te(ce, de, ce + 0.5 - A, de + 0.5 - R);
  }, ie = (A, R, L) => {
    for (let de = 0; de < A.length - 1; de++) {
      const ce = (de + R) * W;
      if (L < ce - ue / 2) return [A[de], A[de], 0];
      if (L <= ce + ue / 2) return [A[de], A[de + 1], (L - ce + ue / 2) / ue];
    }
    const te = A[A.length - 1];
    return [te, te, 0];
  }, oe = I.filter((A) => !A.night).map((A) => A.sky), ne = I.filter((A) => A.night).map((A) => A.sky), D = j / y, Ce = 16 * ee / y;
  for (let A = 0; A < i; A++) {
    const R = (A + 0.5) * v, L = F(R) / y, te = ie(oe, 0.75, R), de = ie(ne, 1.25, R), ce = q(R);
    for (let ye = 0; ye < u; ye++) {
      const Me = br(A, ye), Le = ye + 0.5 - L, Xe = (D > 0.01 ? xr(0.5 + Le / D) : Le > 0 ? 1 : 0) > Me;
      let ct = Xe ? te[2] > Me ? te[1] : te[0] : de[2] > Me ? de[1] : de[0];
      (Xe ? xr(((ye + 0.5) / u - 0.45) / 0.55) * 0.7 : xr(1 - (ye + 0.5) / (u * 0.55)) * 0.7) > br(A + 2, ye + 5) && (ct = Xe ? Wo(ct, "#ffffff", 0.18) : Wo(ct, "#000000", 0.25)), Xe && Le >= 0 && Le < Ce && ce.a * 1.3 * (1 - Le / Ce) > br(A + 6, ye + 1) && (ct = ce.c), $[ye * i + A] = ct, me[ye * i + A] = Xe ? 0 : 1;
    }
  }
  const le = Wo(M.sun, "#ffffff", 0.55), Oe = Wo(M.moon, "#ffffff", 0.6);
  l.stars.forEach((A) => {
    const R = Math.floor(A.x / v), L = Math.floor(A.y / y);
    if (R < 0 || L < 0 || R >= i || L >= u || !me[L * i + R] || A.o < 0.15) return;
    const te = A.o > 0.45 ? M.star : Wo(M.star, $[L * i + R], 0.5), de = A.big && A.o > 0.6 ? Math.floor(A.size / v) : 0;
    pe(R, L, te, 1, yp);
    for (let ce = 1; ce <= de; ce++) [[R - ce, L], [R + ce, L], [R, L - ce], [R, L + ce]].forEach((ye) => {
      ye[0] >= 0 && ye[1] >= 0 && ye[0] < i && ye[1] < u && me[ye[1] * i + ye[0]] && pe(ye[0], ye[1], te, 1, yp);
    });
  }), l.suns.forEach((A) => {
    const R = Math.max(1.5, A.rad / v), L = A.x / v, te = A.y / y, de = A.halo / v * 0.85;
    if (Se(L, te, de, (ce, ye, Me, Le) => {
      const Xe = Math.sqrt(Me * Me + Le * Le);
      Xe > R && Xe < de && !me[ye * i + ce] && pe(ce, ye, le, 0.3 * (1 - (Xe - R) / (de - R)), 0);
    }), E) {
      const ce = Math.floor(k / 500) % 2, ye = Math.max(1, R * 0.3);
      for (let Me = 0; Me < 8; Me++) if (Me % 2 === ce) for (let Le = R + 1.2; Le < R + 1.2 + ye; Le += 0.7) pe(Math.floor(L + Math.cos(Me * Math.PI / 4) * Le), Math.floor(te + Math.sin(Me * Math.PI / 4) * Le), M.sun, 1, Yu);
    }
    Se(L, te, R, (ce, ye, Me, Le) => {
      Me * Me + Le * Le <= R * R && pe(ce, ye, xr(((Le / R + 1) / 2 - 0.6) / 0.4) > br(ce, ye) ? M.sunEdge : M.sun, 1, ju);
    });
  }), l.moons.forEach((A) => {
    const R = Math.max(1.5, A.d * 0.37 / v), L = A.x / v, te = A.y / y, de = L + 0.547 * R, ce = te - 0.503 * R, ye = 0.82 * R;
    Se(L, te, R, (Me, Le, Xe, ct) => {
      if (Xe * Xe + ct * ct > R * R) return;
      const Re = Me + 0.5 - de, ja = Le + 0.5 - ce;
      Re * Re + ja * ja > ye * ye && pe(Me, Le, xr((ct + R) / (2 * R) * 1.1 - 0.1) > br(Me, Le) ? M.moon : Oe, 1, zu);
    });
  }), l.clouds.forEach((A) => {
    const R = Math.max(3, A.w / v), L = R * 0.6665, te = A.x / v, de = A.y / y, ce = Wo(A.fill, "#000000", 0.16);
    for (let ye = Math.max(0, Math.floor(de) - 1); ye <= Math.min(u - 1, de + L + 1); ye++) for (let Me = Math.max(0, Math.floor(te) - 1); Me <= Math.min(i - 1, te + R + 1); Me++) {
      const Le = (Me + 0.5 - te) / R, Xe = (ye + 0.5 - de) / R;
      Fp(Le, Xe) && pe(Me, ye, !Fp(Le, Xe + 1 / R) || xr((Xe - 0.42) / 0.25) * 0.8 > br(Me, ye) ? ce : A.fill, A.o, Gu);
    }
  }), l.fogs.forEach((A) => {
    const R = Math.floor(A.y / y), L = Math.max(R, Math.floor((A.y + 6 * ee) / y) - 1), te = Math.floor(A.x / v), de = Math.floor((A.x + A.w) / v);
    for (let ce = R; ce <= L; ce++) for (let ye = te; ye <= de; ye++) {
      const Me = (ye - te) / Math.max(1, de - te);
      pe(ye, ce, A.c, A.a * (Me < 0.25 ? Me / 0.25 : Me > 0.75 ? (1 - Me) / 0.25 : 1), 0);
    }
  });
  const re = Math.max(2, Math.round(9 / y));
  l.drops.forEach((A) => {
    const R = A.x / v, L = Math.floor(A.y / y);
    for (let te = 0; te < re; te++) pe(Math.floor(R - 0.208 * te * y / v), L + te, M.rain, A.o, Uu);
  });
  const Ze = Math.max(0, Math.round(4.4 / v / 2.6));
  return l.flakes.forEach((A) => {
    const R = Math.floor(A.x / v), L = Math.floor(A.y / y);
    pe(R, L, M.snow, A.o, _l);
    for (let te = 1; te <= Ze; te++)
      pe(R - te, L, M.snow, A.o, _l), pe(R + te, L, M.snow, A.o, _l), pe(R, L - te, M.snow, A.o, _l), pe(R, L + te, M.snow, A.o, _l);
  }), l.bolts.forEach((A) => {
    if (v <= 3.5)
      for (let R = Math.floor(A.y / y); R <= (A.y + 24) / y; R++) for (let L = Math.floor(A.x / v); L <= (A.x + 11) / v; L++)
        lh(gh, (L + 0.5) * v - A.x, (R + 0.5) * y - A.y) && pe(L, R, M.sun, 1, xc);
    else {
      const R = Math.round(A.x / v), L = Math.round(A.y / y);
      vh.forEach((te, de) => te.split("").forEach((ce, ye) => {
        ce === "#" && pe(R + ye, L + de, M.sun, 1, xc);
      }));
    }
  }), { col: $, ids: z };
}
function wh(n, l) {
  const i = l.px, u = Math.max(6, Math.round(l.width / i)), v = Math.max(6, Math.round(l.height / i)), y = l.width / u, k = l.height / v, E = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, I = (j) => {
    const ue = Zu(j, l);
    return bh(ue, Ku(ue, { clock: E, ambient: l.ambient, seed: l.seed }), u, v, y, k, E, l.ambient);
  }, M = I(n), W = l.reveal == null ? 1 : xr(l.reveal);
  let F = M.col, q = M.ids;
  if (W < 1) {
    const j = l.prev ? I(l.prev) : null, ue = W * (u + 12);
    F = new Array(u * v), q = new Uint8Array(u * v);
    for (let ee = 0; ee < u * v; ee++) {
      const $ = ee % u, z = ee / u | 0;
      (l.reduce ? W : xr((ue - $) / 12)) > br($, z) ? (F[ee] = M.col[ee], q[ee] = M.ids[ee]) : j ? (F[ee] = j.col[ee], q[ee] = j.ids[ee]) : (F[ee] = null, q[ee] = 255);
    }
  }
  return dh(F, q, u, v, { oneBit: l.oneBit, ink: l.ink || "#26221e", paper: l.paper || "#fbf9f6", snowInk: !1 });
}
function xh(n, l, i) {
  const u = i.width, v = i.height, y = i.reveal == null ? 1 : xr(i.reveal), k = (q, j) => {
    const ue = Zu(j, i);
    yh(q, ue, Ku(ue, i));
  };
  if (n.clearRect(0, 0, u, v), y >= 1) {
    k(n, l);
    return;
  }
  if (i.prev && k(n, i.prev), i.reduce) {
    n.save(), n.globalAlpha = y, k(n, l), n.restore();
    return;
  }
  const E = n.canvas, I = E.__wxOff || (E.__wxOff = document.createElement("canvas"));
  (I.width !== E.width || I.height !== E.height) && (I.width = E.width, I.height = E.height);
  const M = I.getContext("2d");
  M.setTransform(n.getTransform()), M.clearRect(0, 0, u, v), k(M, l);
  const W = y * (u + 64) - 64, F = M.createLinearGradient(W, 0, W + 64, 0);
  F.addColorStop(0, "rgba(0,0,0,1)"), F.addColorStop(1, "rgba(0,0,0,0)"), M.globalCompositeOperation = "destination-in", M.fillStyle = F, M.fillRect(0, 0, u, v), M.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(I, 0, 0), n.restore();
}
function yh(n, l, i) {
  const { W: u, H: v, S: y, C: k, cw: E, yb: I, glowAt: M, soft: W, tw: F, sy: q } = l, j = n.getTransform().a || 1, ue = (re) => {
    n.shadowColor = re ? "rgba(28,18,8,.22)" : "transparent", n.shadowBlur = re ? 4 * j : 0, n.shadowOffsetY = re ? 1.5 * j : 0;
  }, ee = (re, Ze) => {
    const A = mc(re);
    return "rgba(" + A[0] + "," + A[1] + "," + A[2] + "," + Math.max(0, Math.min(1, Ze)).toFixed(3) + ")";
  }, $ = (re, Ze) => {
    const A = n.createLinearGradient(0, 0, u, 0);
    A.addColorStop(0, re[0]);
    for (let R = 0; R < re.length - 1; R++) {
      const L = (R + Ze) * E, te = (L - F / 2) / u, de = (L + F / 2) / u;
      te > 0 && te < 1 && A.addColorStop(te, re[R]), de > 0 && de < 1 && A.addColorStop(de, re[R + 1]);
    }
    return A.addColorStop(1, re[re.length - 1]), A;
  }, z = Math.max(24, Math.ceil(u / 4)), me = (re, Ze) => {
    n.beginPath();
    for (let A = 0; A <= z; A++) {
      const R = u * A / z, L = re == null ? 0 : I(R) + re;
      A ? n.lineTo(R, L) : n.moveTo(R, L);
    }
    for (let A = z; A >= 0; A--) {
      const R = u * A / z;
      n.lineTo(R, I(R) + Ze);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = $(y.filter((re) => !re.night).map((re) => re.sky), 0.75), n.fillRect(0, 0, u, v);
  const pe = n.createLinearGradient(0, 0, u, 0);
  for (let re = 0; re <= 64; re++) {
    const Ze = M(u * re / 64);
    pe.addColorStop(re / 64, ee(Ze.c, Math.min(1, Ze.a)));
  }
  n.fillStyle = pe;
  for (let re = 0; re < 8; re++)
    n.globalAlpha = 1 - re / 8, me(re * 2 * q, (re + 1) * 2 * q);
  n.fillStyle = $(y.filter((re) => re.night).map((re) => re.sky), 1.25);
  const Se = Math.max(0.5, W), ie = 6;
  n.globalAlpha = 1, me(null, -Se);
  for (let re = 0; re < ie; re++)
    n.globalAlpha = 1 - (re + 0.5) / ie, me(-Se + 2 * Se * re / ie, -Se + 2 * Se * (re + 1) / ie);
  n.globalAlpha = 1;
  const oe = new Path2D(hh), ne = new Path2D(fh), D = new Path2D(uh), Ce = new Path2D(mh);
  n.fillStyle = k.star, i.stars.forEach((re) => {
    n.globalAlpha = re.o, re.big ? (n.save(), n.translate(re.x, re.y), n.scale(re.size, re.size), n.fill(oe), n.restore()) : (n.beginPath(), n.arc(re.x, re.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const le = Wo(k.sun, "#ffffff", 0.55);
  i.suns.forEach((re) => {
    const Ze = n.createRadialGradient(re.x, re.y, 0, re.x, re.y, re.halo);
    Ze.addColorStop(0, ee(le, 0.42)), Ze.addColorStop(0.7, ee(le, 0)), n.fillStyle = Ze, n.beginPath(), n.arc(re.x, re.y, re.halo, 0, Math.PI * 2), n.fill();
    const A = n.createLinearGradient(0, re.y - re.rad, 0, re.y + re.rad);
    A.addColorStop(0.6, k.sun), A.addColorStop(1, k.sunEdge), n.fillStyle = A, ue(!0), n.beginPath(), n.arc(re.x, re.y, re.rad, 0, Math.PI * 2), n.fill(), ue(!1);
  });
  const Oe = Wo(k.moon, "#ffffff", 0.6);
  i.moons.forEach((re) => {
    n.save(), n.translate(re.x - re.d / 2, re.y - re.d / 2), n.scale(re.d / 46, re.d / 46);
    const Ze = n.createLinearGradient(0, 6, 0, 40);
    Ze.addColorStop(0, Oe), Ze.addColorStop(1, k.moon), n.fillStyle = Ze, ue(!0), n.fill(ne), ue(!1), n.restore();
  }), i.clouds.forEach((re) => {
    n.save(), n.globalAlpha = re.o, n.translate(re.x, re.y), n.scale(re.w / 46, re.h / 30.66), n.translate(-4, -9.67), n.fillStyle = re.fill, ue(!0), n.fill(D), ue(!1), n.restore();
  }), i.fogs.forEach((re) => {
    const Ze = n.createLinearGradient(re.x, 0, re.x + re.w, 0);
    Ze.addColorStop(0, ee(re.c, 0)), Ze.addColorStop(0.25, ee(re.c, re.a)), Ze.addColorStop(0.75, ee(re.c, re.a)), Ze.addColorStop(1, ee(re.c, 0)), n.fillStyle = Ze, n.fillRect(re.x, re.y, re.w, 6 * q);
  }), n.fillStyle = k.rain, i.drops.forEach((re) => {
    n.save(), n.globalAlpha = re.o, n.translate(re.x, re.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = k.snow, i.flakes.forEach((re) => {
    n.globalAlpha = re.o, n.beginPath(), n.arc(re.x, re.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = k.sun, i.bolts.forEach((re) => {
    n.save(), n.globalAlpha = re.o, n.translate(re.x, re.y), n.fill(Ce), n.restore();
  }), n.restore();
}
const kh = (n) => n === "sunny" ? "clear" : n === "clear-night" ? "night" : n === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(n) ? "rain" : ["snowy", "snowy-rainy"].includes(n) ? "snow" : "cloudy", Al = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, ac = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, Qc = (n, l) => '<path class="' + l + '" d="' + n + '"/>', Mh = (n, l) => ' style="animation-delay:-' + Math.round(n * 137 % l) + 'ms"', Oo = (n, l, i, u) => {
  const v = i * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (u < 1 ? ' opacity="' + u + '"' : "") + Mh(n, 2400) + ' d="M' + n + " " + (l - i) + "L" + (n + v) + " " + (l - v) + "L" + (n + i) + " " + l + "L" + (n + v) + " " + (l + v) + "L" + n + " " + (l + i) + "L" + (n - v) + " " + (l + v) + "L" + (n - i) + " " + l + "L" + (n - v) + " " + (l - v) + 'Z"/>';
}, Op = ([n, l, i], u) => '<path class="wbMoonPath" d="' + n + '" fill="url(#' + u + ')"/><defs><linearGradient id="' + u + '" x1="0" y1="' + l + '" x2="0" y2="' + i + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Sh = (n, l) => l ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Ch = (n) => (n ? ["29.35", "43.04", "56.74"].map((l, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" x="' + l + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + l + ' 60.65)"/></g>') : [19, 26, 33].map((l, i) => '<g class="wbDrop" style="animation-delay:-' + i * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + l + ' 38)"/></g>')).join(""), Th = (n) => (n ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([l, i], u) => '<circle class="wbFlake" style="animation-delay:-' + u * 640 + 'ms" cx="' + l + '" cy="' + i + '" r="' + (n ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function Lh(n, l, i, u) {
  const v = (y) => '<g filter="url(#' + u + '-sh)">' + y + "</g>";
  return n === "clear" ? l ? v(Op(i ? ac.l : ac.s, u)) + (i ? Oo(70, 20, 5.83, 1) + Oo(78.33, 41.67, 3.75, 0.8) + Oo(60, 71.67, 3.33, 0.6) : Oo(42, 12, 3.5, 1) + Oo(47, 25, 2.25, 0.8) + Oo(36, 43, 2, 0.6)) : v(Sh(u, i)) : n === "partly" ? v(l ? Op(i ? ac.lp : ac.sp, u) : i ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + v(Qc(i ? Al.lp : Al.sp, l ? "wbCloudLight" : "wbBright")) + (l ? i ? Oo(73.33, 16.67, 4.17, 0.9) : Oo(44, 10, 2.5, 0.9) : "") : n === "cloudy" ? v(Qc(i ? Al.lc : Al.s, l ? "wbCloudLight" : "wbBright")) + (l ? i ? Oo(15, 15, 3.75, 0.8) + Oo(76.67, 13.33, 2.92, 0.6) : Oo(9, 9, 2.25, 0.8) + Oo(46, 8, 1.75, 0.6) : "") : v(Qc(i ? Al.lr : Al.s, "wbCloudLight")) + (n === "rain" ? Ch(i) : Th(i));
}
const Ah = (n, l) => '<defs><filter id="' + n + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (l ? 1.6 : 1) + '" stdDeviation="' + (l ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function Eh(n, l, i, u) {
  let v = kh(n);
  const y = v === "night" || !!i;
  v === "night" && (v = "clear");
  const k = l ? 90 : 54;
  return { k: v, night: y, svg: '<svg viewBox="0 0 ' + k + " " + k + '">' + Ah(u, l) + Lh(v, y, l, u) + "</svg>" };
}
const Dh = [
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
], nc = (n, l) => (Dh[l % 8 * 8 + n % 8] + 0.5) / 64, ti = (n) => [parseInt(n.slice(1, 3), 16), parseInt(n.slice(3, 5), 16), parseInt(n.slice(5, 7), 16)], xn = (n, l, i) => [Math.round(n[0] + (l[0] - n[0]) * i), Math.round(n[1] + (l[1] - n[1]) * i), Math.round(n[2] + (l[2] - n[2]) * i)], ud = (n) => n < 0 ? 0 : n > 1 ? 1 : n, qp = (n, l) => {
  let i = n * 374761393 + l * 668265263 ^ 1540483477;
  return i = Math.imul(i ^ i >>> 13, 1274126177), ((i ^ i >>> 16) >>> 0) / 4294967296;
}, Vs = [255, 255, 255], Hn = ti("#26221e"), Wp = ti("#0288d1"), _h = ti("#01579b"), ep = ti(Wn.cloudDay), tp = ti(Wn.cloudNight), oc = ti(Wn.dusk), ap = ti(Wn.sunEdge), Bh = ti(Wn.sun), Rh = 10, Vp = 0.3, yr = 56, $u = 21;
function Ph(n) {
  const l = Array.from({ length: $u }, () => new Array(yr).fill(void 0)), i = (k, E, I) => {
    l[E][k] = I;
  }, u = xn(oc, Hn, 0.35), v = xn(Hn, Vs, 0.22);
  for (let k = 0; k <= 6; k++) {
    const E = k < 2 ? yr - 2 : yr - 1;
    for (let I = 6 - k; I <= E; I++) i(I, k, k < 2 ? u : k === 6 ? v : Hn);
  }
  const y = [oc, ap, tp, ti(Wn.skyRainDay), xn(oc, Hn, 0.2), xn(n, Hn, 0.35)];
  [2, 3, 2, 3, 3].forEach((k, E) => {
    const I = 9 + E * 6;
    for (let M = 0; M < k; M++) {
      const W = y[(E * 2 + M * 3) % y.length];
      for (let F = I; F < I + 5; F++)
        i(F, 7 + M * 2, xn(W, Hn, 0.12)), i(F, 8 + M * 2, M === k - 1 ? xn(W, Vs, 0.3) : W);
      i(I + 5, 7 + M * 2, Hn), i(I + 5, 8 + M * 2, Hn);
    }
  });
  for (let k = 7; k <= 12; k++) i(5, k, Hn);
  i(5, 13, ap);
  for (let k = 7; k <= 14; k++) for (let E = 42; E <= 51; E++) i(E, k, E === 51 ? tp : ep);
  for (let k = 43; k <= 50; k += 2)
    i(k, 12, Hn), i(k, 9, xn(Hn, ep, 0.4));
  for (let k = 40; k <= 53; k++) i(k, 14, k === 40 || k === 53 ? tp : ep);
  for (let k = 15; k <= 18; k++) for (let E = 46; E <= 49; E++) i(E, k, k === 18 ? Hn : k === 16 ? ap : oc);
  for (let k = 15; k <= 19; k++) i(44, k, Hn);
  return i(44, 20, Bh), l;
}
function Nh(n, l, i, u) {
  const v = Math.max(1, Math.round(n)), y = Math.max(1, Math.round(l)), k = new Uint8ClampedArray(v * y * 4), E = ti(u.skyClearDay), I = ti(u.skyFogDay), M = Ph(E), W = Math.round(y * 0.55), F = ud(1 - Math.log(i / Vp) / Math.log(Rh / Vp)), q = xn(E, I, F), j = (z) => ud((z - 0.1) / 0.9), ue = ud((1 - Math.exp(-2 / i) - 0.2) / 0.8), ee = Math.round(v / 2 - yr / 2), $ = W + 3;
  for (let z = 0; z < y; z++) {
    const me = $ - 1 - z, pe = z - $;
    for (let Se = 0; Se < v; Se++) {
      const ie = Se - ee;
      let oe, ne;
      const D = me >= 0 && me < $u && ie >= 0 && ie < yr ? M[me][ie] : void 0;
      if (D)
        oe = D, ne = ue;
      else if (me >= 0 && me <= 1 && ie >= 4 - me && ie <= 5 - me)
        oe = xn(Vs, Wp, 0.15), ne = ue;
      else if (z < W) {
        const Oe = ud(((z + 0.5) / W - 0.15) / 0.85) * 3, re = Math.min(3, Math.floor(Oe + nc(Se + 2, z + 5)));
        oe = xn(q, Vs, re * 0.1), ne = F * 0.95;
      } else {
        const Oe = (z - W + 0.5) / (y - W), re = Math.min(1.5, 6e-3 / (Oe * Oe)), Ze = ud(Oe * 1.4) * 3, A = Math.min(3, Math.floor(Ze + nc(Se + 1, z + 6)));
        oe = xn(Wp, _h, A / 3);
        const R = 1 + Math.round(Oe * 7), L = Math.floor(Se / (R * 3)), te = 0.06 + 0.16 * Oe, de = Se % (R * 3) < R;
        de && qp(L, z) < te ? oe = xn(oe, Vs, 0.18 + 0.1 * (1 - Oe)) : de && Oe > 0.5 && qp(L, z - 1) < te && (oe = xn(oe, Hn, 0.12)), ne = j(1 - Math.exp(-re / i)), pe === 0 && ie >= 3 && ie <= 8 ? (oe = xn(oe, Vs, ie < 6 ? 0.8 : 0.45), ne = ue) : pe >= 0 && pe <= 2 && ie >= yr && ie < yr + 40 ? ((1 - (ie - yr) / 40) * (pe === 1 ? 0.9 : 0.5) > nc(Se, z + 3) && (oe = xn(oe, Vs, 0.5)), ne = ue) : pe === 0 && ie >= 6 && ie < yr && (oe = xn(oe, Hn, ie % 2 === 0 ? 0.35 : 0.2), ne = ue);
      }
      const Ce = ne > nc(Se, z) ? I : oe, le = (z * v + Se) * 4;
      k[le] = Ce[0], k[le + 1] = Ce[1], k[le + 2] = Ce[2], k[le + 3] = 255;
    }
  }
  return { data: k, w: v, h: y };
}
const Hh = {
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
}, Ih = 1.6;
function Fh(n, l) {
  const i = n ? Hh[String(n).toUpperCase()] : void 0;
  if (!i || !(l > 0)) return;
  const u = (y) => Math.abs(Math.log(y[2] / l)), v = i.reduce((y, k) => u(k) < u(y) ? k : y);
  return u(v) <= Math.log(Ih) ? { from: v[0], to: v[1], km: v[2] } : void 0;
}
const Oh = (n, l) => l === "mi" ? n * 1.609344 : l === "m" ? n / 1e3 : l === "ft" ? n * 3048e-7 : l === "yd" ? n * 9144e-7 : n, qh = (n) => n < 1 ? "very_poor" : n < 4 ? "poor" : n < 10 ? "moderate" : n < 20 ? "good" : n < 40 ? "very_good" : "excellent", Ha = {
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
  expand: { delay: 140, stagger: 145 },
  graphs: { weight: 1, draw: 1e3 },
  tabs: { dur: 360, stretch: 56 },
  dialog: { open: 380, close: 240, ease: "spring", blur: 12, from: 80 },
  confirm: { stay: 2600, dur: 360, draw: 1 },
  drag: { pull: 17, keep: 70, stick: 44, tilt: 5, lift: 3.5, slide: 420, squash: 5 },
  outline: { lightAt: 30, glowFrom: 20, colourFrom: 50, cone: 20, glow: 15, border: 49, fill: 15, size: 60, hue: 199, press: 1, fin: 180, fout: 350 }
}, Va = { standard: "cubic-bezier(.2,0,0,1)", land: "cubic-bezier(.34,1.46,.64,1)", spring: "cubic-bezier(.2,1.2,.4,1)", soft: "cubic-bezier(.4,0,.2,1)", exit: "cubic-bezier(.4,0,1,1)" }, yn = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
};
function Wh() {
  const { pivot: n, slider: l, iconbtn: i, warp: u, outline: v } = Ha;
  return [
    ["--pv-persp", n.persp + "px"],
    ["--pv-shine", n.shine / 100],
    ["--pv-size", n.size + "%"],
    ["--pv-ret", n.ret + "ms"],
    ["--pv-ease", Va[n.ease]],
    ["--ab-blur", l.glow + "px"],
    ["--ab-spread", l.spread + "px"],
    ["--ab-str", l.strength + "%"],
    ["--ab-blur2", l.glow + l.hold + "px"],
    ["--ab-spread2", l.spread + l.hold / 4 + "px"],
    ["--ab-str2", l.holdStrength + "%"],
    ["--ab-grow", "scaleY(" + (1 + (l.grow / 100 - 1) * 3) + ")"],
    ["--ab-in", l.ein + "ms"],
    ["--ab-out", l.eout + "ms"],
    ["--ab-ease", Va[l.ease]],
    ["--ih-s", i.scale / 100],
    ["--ih-p", i.press / 100],
    ["--ih-dur", i.dur + "ms"],
    ["--ih-ease", Va[i.ease]],
    ["--ih-tint", "8%"],
    ["--wc-dur", u.cdur + "ms"],
    ["--wc-delay", u.cdelay + "ms"],
    ["--wc-ease", Va[u.ease]],
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
  ].map(([y, k]) => y + ":" + k).join(";");
}
const np = ":is(button.primary,button.pill,.hcBtn,.wbRangeBtn,.activityRow.tap,.hcRow,a.hcRow)", Vh = "#homeView .tfAreaPanel", jh = 300, gc = (n) => Math.min(1, jh / Math.max(1, n)), op = (n, l) => 1 + (l / 100 - 1) * gc(n.offsetWidth);
function zh(n, l) {
  l.style.cssText += ";" + Wh();
  let i = null;
  const u = (W) => {
    W.classList.remove("mvMoving", "mvLit"), W.style.setProperty("--rx", "0deg"), W.style.setProperty("--ry", "0deg"), W.style.setProperty("--sc", 1), W._down = !1;
  };
  n.addEventListener("pointermove", (W) => {
    var z, me;
    const F = W.pointerType === "touch" || yn() ? null : (me = (z = W.target).closest) == null ? void 0 : me.call(z, np);
    if (i && i !== F && u(i), i = F, !F || F.disabled) return;
    const q = Ha.pivot, j = F.getBoundingClientRect(), ue = (W.clientX - j.left) / j.width, ee = (W.clientY - j.top) / j.height, $ = 1;
    F.classList.add("mvPv", "mvMoving", "mvLit"), F.style.setProperty("--pv-persp", q.persp / gc(Math.max(F.offsetWidth, F.offsetHeight)) + "px"), F.style.setProperty("--ry", ($ * (ue - 0.5) * 2 * q.tilt * gc(F.offsetWidth)).toFixed(3) + "deg"), F.style.setProperty("--rx", ($ * -(ee - 0.5) * 2 * q.tilt * gc(F.offsetHeight)).toFixed(3) + "deg"), F.style.setProperty("--mx", (ue * 100).toFixed(1) + "%"), F.style.setProperty("--my", (ee * 100).toFixed(1) + "%"), F._down || F.style.setProperty("--sc", op(F, q.lift));
  }, { passive: !0 }), n.addEventListener("pointerout", (W) => {
    i && !i.contains(W.relatedTarget) && (u(i), i = null);
  }), n.addEventListener("pointerdown", (W) => {
    var q, j;
    const F = yn() ? null : (j = (q = W.target).closest) == null ? void 0 : j.call(q, np);
    F && (F._down = !0, F.classList.add("mvPv"), F.classList.remove("mvMoving"), F.style.setProperty("--sc", op(F, Ha.pivot.press)));
  }), n.addEventListener("pointerup", (W) => {
    var q, j;
    const F = (j = (q = W.target).closest) == null ? void 0 : j.call(q, np);
    F && (F._down = !1, F.style.setProperty("--sc", W.pointerType === "touch" ? 1 : op(F, Ha.pivot.lift)));
  });
  let v = null;
  n.addEventListener("pointerover", (W) => {
    var F, q, j;
    W.pointerType !== "touch" && ((j = (q = (F = W.target).closest) == null ? void 0 : q.call(F, ".tfBar")) == null || j.classList.add("mvHover"));
  }), n.addEventListener("pointerout", (W) => {
    var q, j;
    const F = (j = (q = W.target).closest) == null ? void 0 : j.call(q, ".tfBar");
    F && !F.contains(W.relatedTarget) && F !== v && F.classList.remove("mvHover");
  }), n.addEventListener("pointerdown", (W) => {
    var q, j;
    const F = (j = (q = W.target).closest) == null ? void 0 : j.call(q, ".tfBar");
    F && (v = F, F.classList.add("mvHold"));
  });
  const y = (W) => {
    if (!v) return;
    v.classList.remove("mvHold");
    const F = v.getBoundingClientRect();
    (W.pointerType === "touch" || W.clientX < F.left || W.clientX > F.right || W.clientY < F.top || W.clientY > F.bottom) && v.classList.remove("mvHover"), v = null;
  };
  window.addEventListener("pointerup", y, !0), window.addEventListener("pointercancel", y, !0), n.addEventListener("focusin", (W) => {
    var F, q;
    (q = (F = W.target).matches) != null && q.call(F, ".tfBar:focus-visible") && W.target.classList.add("mvHover");
  }), n.addEventListener("focusout", (W) => {
    var F;
    (F = W.target.classList) == null || F.remove("mvHover", "mvHold");
  }), n.addEventListener("keydown", (W) => {
    var q, j;
    const F = (j = (q = W.target).closest) == null ? void 0 : j.call(q, ".tfBar");
    !F || !["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(W.key) || (F.classList.add("mvHold"), clearTimeout(F._k), F._k = setTimeout(() => F.classList.remove("mvHold"), 350));
  }), n.addEventListener("click", (W) => {
    var q, j;
    const F = (j = (q = W.target).closest) == null ? void 0 : j.call(q, "button.tfIcon[data-act]");
    F && Gh(F);
  });
  let k = null;
  const E = (W, F, q) => {
    W.querySelector(":scope>.mvEdge") || W.insertAdjacentHTML("afterbegin", '<span class="mvEdgeFill" aria-hidden="true"></span><span class="mvEdge" aria-hidden="true"><i></i></span>');
    const j = W.getBoundingClientRect(), ue = j.width / 2, ee = j.height / 2, $ = F.clientX - j.left - ue, z = F.clientY - j.top - ee, me = $ ? ue / Math.abs($) : 1 / 0, pe = z ? ee / Math.abs(z) : 1 / 0, Se = Math.min(Math.max(1 / Math.min(me, pe), 0), 1);
    let ie = Math.atan2(z, $) * 180 / Math.PI + 90;
    ie < 0 && (ie += 360);
    const oe = q ? 100 : Se * 100;
    W.style.setProperty("--edge-proximity", oe.toFixed(3)), W.style.setProperty("--cursor-angle", ie.toFixed(3) + "deg"), W.classList.toggle("mvLitEdge", q || oe >= Ha.outline.lightAt);
  }, I = (W) => {
    W.classList.remove("mvLitEdge"), W.style.setProperty("--edge-proximity", "0"), W._down = !1;
  }, M = (W) => {
    var q;
    const F = (q = W.closest) == null ? void 0 : q.call(W, Vh);
    return F && !l.classList.contains("tfEditing") ? F : null;
  };
  n.addEventListener("pointermove", (W) => {
    if (W.pointerType === "touch") return;
    const F = M(W.target);
    k && k !== F && I(k), k = F, F && !F._down && E(F, W, !1);
  }, { passive: !0 }), n.addEventListener("pointerout", (W) => {
    k && !k.contains(W.relatedTarget) && (I(k), k = null);
  }), n.addEventListener("pointerdown", (W) => {
    const F = M(W.target);
    F && Ha.outline.press && (F._down = !0, E(F, W, !0));
  }), n.addEventListener("pointerup", (W) => {
    const F = M(W.target);
    F && (F._down = !1, W.pointerType === "touch" ? I(F) : E(F, W, !1));
  }), new MutationObserver((W) => {
    var F;
    for (const q of W) {
      const j = q.target;
      if (q.type === "attributes") {
        (F = j.classList) != null && F.contains("tfMoreBackdrop") && !j.hidden && q.oldValue !== null && jp(j);
        continue;
      }
      q.addedNodes.forEach((ue) => {
        ue.nodeType === 1 && ue.classList.contains("tfMoreBackdrop") && !ue.hidden && jp(ue);
      });
    }
  }).observe(l, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["hidden"], attributeOldValue: !0 });
}
const Xu = (n) => n.closest("[data-k],.tfMore,.tfMorePair") || n.getRootNode();
function Ju(n, l) {
  const i = [];
  for (let u = n; u && u !== l && u.parentNode; u = u.parentNode) i.unshift([...u.parentNode.children].indexOf(u));
  return i;
}
const Qu = (n, l) => l.reduce((i, u) => i == null ? void 0 : i.children[u], n);
function Gh(n) {
  var j;
  if (yn() || n._warp) return;
  const l = Ha.warp, i = l.amount / 100, u = n.firstElementChild;
  if (!u) return;
  const v = { squash: { scale: 1 + 0.35 * i + " " + (1 - 0.55 * i) }, pinch: { scale: String(1 - 0.5 * i) }, twist: { rotate: 140 * i + "deg", scale: String(1 - 0.35 * i) }, flip: { rotate: "y 90deg" } }[l.style], y = "blur(" + 2 * i + "px)", k = n.getRootNode(), E = Xu(n), I = (j = E.dataset) == null ? void 0 : j.k, M = Ju(n, E), W = n.getAttribute("aria-pressed") + "|" + n.dataset.act;
  n._warp = 1;
  const F = u.animate([{ scale: "1", rotate: "none", filter: "blur(0px)" }, { ...v, filter: y }], { duration: l.win, easing: Va.exit, fill: "forwards" }), q = performance.now();
  F.finished.then(() => {
    const ue = () => {
      var Se, ie;
      const ee = I ? E.isConnected ? E : (Se = k.querySelector) == null ? void 0 : Se.call(k, '[data-k="' + CSS.escape(I) + '"]') : E, $ = ee && Qu(ee, M);
      if ($ === n && n.getAttribute("aria-pressed") + "|" + n.dataset.act === W && performance.now() - q < 420) {
        requestAnimationFrame(ue);
        return;
      }
      (((ie = $ == null ? void 0 : $.matches) != null && ie.call($, "button.tfIcon") ? $ : n).firstElementChild || u).animate([{ ...v, filter: y }, { scale: "1", rotate: "none", filter: "blur(0px)" }], { duration: l.wout, easing: Va[l.ease] }), F.cancel(), n._warp = 0;
    };
    ue();
  });
}
const ef = (n) => {
  let l = "M" + n[0][0].toFixed(1) + " " + n[0][1].toFixed(1);
  for (let i = 0; i < n.length - 1; i++) {
    const u = n[i - 1] || n[i], v = n[i], y = n[i + 1], k = n[i + 2] || y, E = [v[0] + (y[0] - u[0]) / 6, v[1] + (y[1] - u[1]) / 6], I = [y[0] - (k[0] - v[0]) / 6, y[1] - (k[1] - v[1]) / 6];
    l += "C" + E.map((M) => M.toFixed(1)).join(" ") + " " + I.map((M) => M.toFixed(1)).join(" ") + " " + y.map((M) => M.toFixed(1)).join(" ");
  }
  return l;
}, tf = (n, l, i, u = "mvGrid") => [0, 1, 2].map((v) => {
  const y = (l + (i - l) * v / 2).toFixed(1);
  return '<line class="' + u + '" x1="0" x2="' + n + '" y1="' + y + '" y2="' + y + '"/>';
}).join("");
function af(n, l = n.querySelector(".mvLine"), i = n.querySelectorAll(".mvArea,.mvDot")) {
  if (yn() || !(l != null && l.getTotalLength)) return;
  const u = Ha.graphs, v = l.getTotalLength();
  l.animate([{ strokeDasharray: v, strokeDashoffset: v }, { strokeDasharray: v, strokeDashoffset: 0 }], { duration: u.draw, easing: Va.standard }), [...i].forEach((y, k) => y.animate([{ opacity: 0 }, { opacity: 1 }], { duration: u.draw * 0.6, delay: u.draw * 0.3 + k * 12, easing: Va.standard, fill: "backwards" }));
}
function vc(n, l, i, u, v) {
  if (n.getAnimations().forEach((W) => W.cancel()), n.style.left = u + "px", n.style.width = v + "px", yn() || l === u && i === v) return;
  const y = Ha.tabs, k = y.stretch / 100, E = (W, F) => ({ left: W + "px", width: F + "px" }), M = u > l ? E(l + (u - l) * (0.15 * (1 - k)), u + v - (l + (u - l) * (0.15 * (1 - k)))) : E(u, l + i - u - (l - u) * (0.15 * (1 - k)));
  n.animate([E(l, i), { offset: 0.5, ...M }, E(u, v)], { duration: y.dur, easing: Va.standard });
}
function Uh(n) {
  const l = ":is(.themeChoice,.wbSegments,.tfHeightTabs,.hcSeg,.tfSeg)", i = (v) => v.querySelector(':scope>[aria-pressed="true"],:scope>[aria-checked="true"],:scope>.active'), u = (v, y) => y ? [...v.children].indexOf(y) : -1;
  n.addEventListener("click", (v) => {
    var me, pe, Se;
    const y = (pe = (me = v.target).closest) == null ? void 0 : pe.call(me, l + ">button"), k = y == null ? void 0 : y.parentElement;
    if (!k || yn() || y.disabled) return;
    const E = i(k);
    if (!E || E === y) return;
    const I = u(k, E), M = k.getBoundingClientRect(), W = E.getBoundingClientRect(), F = getComputedStyle(E).borderRadius, q = k.getRootNode(), j = Xu(k), ue = (Se = j.dataset) == null ? void 0 : Se.k, ee = Ju(k, j), $ = performance.now(), z = () => {
      var re, Ze, A;
      const ie = ue && !j.isConnected ? (re = q.querySelector) == null ? void 0 : re.call(q, '[data-k="' + CSS.escape(ue) + '"]') : j, oe = ie && Qu(ie, ee), ne = (Ze = oe == null ? void 0 : oe.matches) != null && Ze.call(oe, l) ? i(oe) : null;
      if (!ne || u(oe, ne) === I) {
        performance.now() - $ < 700 && requestAnimationFrame(z);
        return;
      }
      const D = oe.getBoundingClientRect(), Ce = ne.getBoundingClientRect(), le = getComputedStyle(ne);
      (A = oe.querySelector(":scope>.mvSegInd")) == null || A.remove();
      const Oe = document.createElement("span");
      Oe.className = "mvSegInd", Oe.style.cssText = "top:" + (Ce.top - D.top - oe.clientTop) + "px;height:" + Ce.height + "px;border-radius:" + F + ";background:" + le.backgroundColor + ";box-shadow:" + le.boxShadow, getComputedStyle(oe).position === "static" && (oe.style.position = "relative"), oe.prepend(Oe), oe.classList.add("mvSegMoving"), vc(Oe, W.left - M.left - oe.clientLeft, W.width, Ce.left - D.left - oe.clientLeft, Ce.width), clearTimeout(oe._seg), oe._seg = setTimeout(() => {
        Oe.remove(), oe.classList.remove("mvSegMoving");
      }, Ha.tabs.dur + 20);
    };
    requestAnimationFrame(z);
  }, !0);
}
const nf = (n) => getComputedStyle(n).placeItems.startsWith("end");
function jp(n) {
  const l = n.firstElementChild;
  if (yn() || !l || l.classList.contains("still")) return;
  const i = Ha.dialog;
  n.animate([{ opacity: 0, backdropFilter: "blur(0px)" }, { opacity: 1, backdropFilter: "blur(" + i.blur + "px)" }], { duration: i.open, easing: Va.standard }), l.style.animation = "none", l.animate(nf(n) ? [{ transform: "translateY(100%)" }, { transform: "none" }] : [{ opacity: 0, transform: "scale(" + i.from / 100 + ")" }, { opacity: 1, transform: "none" }], { duration: i.open, easing: Va[i.ease] }), [...(l.classList.contains("tfMorePair") && l.querySelector(".tfMore") || l).children].forEach((v, y) => v.animate([{ opacity: 0 }, { opacity: 1 }], { duration: i.open * 0.6, delay: i.open * 0.35 + y * 40, easing: Va.standard, fill: "backwards" }));
}
function Yh(n, l) {
  const i = n == null ? void 0 : n.firstElementChild;
  if (yn() || !i || n.hidden || n._closing) {
    l();
    return;
  }
  const u = Ha.dialog;
  n._closing = !0, n.style.pointerEvents = "none", n.animate([{ opacity: 1, backdropFilter: "blur(" + u.blur + "px)" }, { opacity: 0, backdropFilter: "blur(0px)" }], { duration: u.close, easing: Va.exit, fill: "forwards" });
  const v = i.animate(nf(n) ? [{ transform: "none" }, { transform: "translateY(100%)" }] : [{ opacity: 1, transform: "none" }, { opacity: 0, transform: "scale(" + u.from / 100 + ")" }], { duration: u.close, easing: Va.exit, fill: "forwards" });
  let y = !1;
  const k = () => {
    y || (y = !0, n._closing = !1, n.style.pointerEvents = "", n.getAnimations().forEach((E) => E.cancel()), i.getAnimations().forEach((E) => E.cancel()), l());
  };
  v.finished.then(k, k), setTimeout(k, u.close + 80);
}
const Zh = '<span class="mvTick" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 6L9 17L4 12" pathLength="1"/></svg></span>';
function Kh(n, l) {
  n.replaceChildren(), n.insertAdjacentHTML("afterbegin", Zh), n.appendChild(Object.assign(document.createElement("span"), { className: "mvToastText", textContent: l }));
}
function $h(n) {
  if (yn()) return;
  const l = Ha.confirm;
  n.animate([{ opacity: 0, translate: "0 18px" }, { opacity: 1, translate: "0 0" }], { duration: l.dur, easing: Va.spring });
  const i = n.querySelector(".mvTick path");
  i && l.draw && i.animate([{ strokeDasharray: "1", strokeDashoffset: "1" }, { strokeDasharray: "1", strokeDashoffset: "0" }], { duration: 420, delay: l.dur * 0.5, easing: Va.standard, fill: "backwards" });
}
const zp = (n, l, i, u, v = 1) => (n + l * i * v) * Math.pow(u, v);
function Gp(n) {
  const l = Ha.drag.squash / 100;
  !n || yn() || !l || n.animate([{ transform: "scale(" + (1 + l * 0.4) + "," + (1 - l) + ")" }, { transform: "scale(" + (1 - l * 0.1) + "," + (1 + l * 0.24) + ")" }, { transform: "none" }], { duration: 340, easing: "ease-out" });
}
function Up(n) {
  if (!n || yn()) return;
  const l = Ha.expand;
  [...n.children].slice(1).forEach((i, u) => i.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: l.delay + u * l.stagger, easing: "cubic-bezier(.2,0,0,1)", fill: "backwards" }));
}
const dn = 6e4, zt = 36e5, no = 864e5, md = 1440, Xh = 6, Jh = 10 * dn, Yp = 3, Qh = 3, ic = { day: [6, 22], waking: [7, 23], all: [0, 24] }, em = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], tm = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", Zp = (n, l, i, u) => '<circle cx="' + n + '" cy="' + l + '" r="' + i + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((v) => {
  const y = Math.cos(v * Math.PI / 180), k = Math.sin(v * Math.PI / 180), E = i + 2, I = i + 2 + u;
  return "M" + (n + y * E).toFixed(2) + " " + (l + k * E).toFixed(2) + "L" + (n + y * I).toFixed(2) + " " + (l + k * I).toFixed(2);
}).join("") + '"/>', mr = (n) => '<path d="' + tm + '"' + (n ? ' transform="' + n + '"' : "") + "/>", gr = (n) => '<path d="' + n + '"/>', Kp = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function am(n, l) {
  const i = "translate(0,-3)";
  switch (n) {
    case "sunny":
      return l ? Kp : Zp(12, 12, 4, 2.5);
    case "clear-night":
      return Kp;
    case "partlycloudy":
      return (l ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : Zp(7.5, 7.5, 2.6, 1.4)) + mr("translate(3.6,3) scale(.85)");
    case "cloudy":
      return mr();
    case "fog":
      return gr("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return mr(i) + gr("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return mr(i) + gr("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return mr(i) + gr("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return mr(i) + gr("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return mr(i) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return mr(i) + gr("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return mr(i) + gr("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return gr("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + gr("M12 8v5M12 16h.01");
  }
}
const ip = (n, l) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + am(n, l) + "</svg>", nm = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), om = 30 * dn, im = 7, rm = 3, $p = 1, sm = dn, lm = 15 * dn, dm = 5, Gt = {
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
}, _e = {
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
}, cm = {
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
}, pm = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], um = Object.keys(_e.phases), fm = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)", extreme: "var(--purple-color, #926bc7)" }, Xp = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, of = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], rc = 100, Jp = "µg/m³", hm = "weather_alerts.air_quality_pollen", yc = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], mm = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, gm = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], vm = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, bm = { daily: 1, hourly: 2 }, Fe = (n) => String(n ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), bn = (n, l) => n.replace(/\{(\w+)\}/g, (i, u) => l[u] ?? ""), wr = (n) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + n + '"/></svg>', Qp = /* @__PURE__ */ new Map();
function rf(n) {
  let l = Qp.get(n);
  if (l === void 0) {
    const i = "http://www.w3.org/2000/svg", u = document.createElementNS(i, "svg"), v = document.createElementNS(i, "path");
    u.setAttribute("viewBox", "0 0 24 24"), u.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", v.setAttribute("d", n), u.append(v), document.body.append(u);
    const y = v.getBBox();
    u.remove();
    const k = Math.max(y.width, y.height), E = k ? 26 * 24 / k : 0, I = E / 24;
    l = k ? "width:" + E.toFixed(2) + "px;height:" + E.toFixed(2) + "px;translate:" + ((12 - y.x - y.width / 2) * I).toFixed(2) + "px " + ((12 - y.y - y.height / 2) * I).toFixed(2) + "px" : "", Qp.set(n, l);
  }
  return l ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + l + '"><path d="' + n + '"/></svg>' : wr(n);
}
const wm = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
}, Qt = (n) => n != null && n !== "" && Number.isFinite(Number(n)), eu = /* @__PURE__ */ new Map(), tu = /* @__PURE__ */ new Map(), rp = /* @__PURE__ */ new WeakMap(), xm = (n) => {
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
function _t(n, l, i) {
  const u = Number(n);
  if (Number.isNaN(u)) return String(n);
  const v = (l == null ? void 0 : l.number_format) === "none", y = { maximumFractionDigits: 2, ...i, ...v ? { useGrouping: !1 } : {} }, k = v ? "en-US" : xm(l), E = JSON.stringify([k, y]);
  let I = eu.get(E);
  if (!I) {
    try {
      I = new Intl.NumberFormat(k, y);
    } catch {
      I = new Intl.NumberFormat(void 0, y);
    }
    eu.set(E, I);
  }
  return I.format(u);
}
const Ap = (n) => {
  var l;
  return ((l = n == null ? void 0 : n.locale) == null ? void 0 : l.language) || (n == null ? void 0 : n.language) || void 0;
};
function ym(n) {
  if (!n) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (rp.has(n)) return rp.get(n);
  const l = n.time_format, i = l === "language" || l === "system" || !l ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(l === "language" ? n.language : void 0).includes("10") : l === "12";
  return rp.set(n, i), i;
}
const sf = (n) => {
  var l, i;
  return ((l = n == null ? void 0 : n.locale) == null ? void 0 : l.time_zone) === "server" && ((i = n == null ? void 0 : n.config) != null && i.time_zone) ? n.config.time_zone : void 0;
};
function lf(n, l) {
  const i = JSON.stringify([n, l]);
  let u = tu.get(i);
  if (!u) {
    try {
      u = new Intl.DateTimeFormat(n, l);
    } catch {
      u = new Intl.DateTimeFormat(void 0, { ...l, timeZone: void 0 });
    }
    tu.set(i, u);
  }
  return u;
}
const wn = (n, l) => lf(Ap(l), { hour: "numeric", minute: "2-digit", hourCycle: ym(l == null ? void 0 : l.locale) ? "h12" : "h23", timeZone: sf(l) }).format(n), au = (n, l) => lf(Ap(l), { weekday: "short", timeZone: sf(l) }).format(n), km = (n, l) => n.toLocaleDateString(Ap(l), { weekday: "narrow" }), ua = (n, l) => Qt(l) ? _t(Math.round(Number(l)), n.locale) + "°" : "–", is = (n) => {
  const l = new Date(n);
  return l.setHours(0, 0, 0, 0), l;
}, El = (n, l) => n.getFullYear() === l.getFullYear() && n.getMonth() === l.getMonth() && n.getDate() === l.getDate(), qn = Math.PI / 180, Mm = 2440588, Sm = 2451545, kc = qn * 23.4397, Cm = 149598e3, Tm = -0.833 * qn, Lm = 0.133 * qn, nu = 5 * dn, df = (n) => n.getTime() / no - 0.5 + Mm - Sm, cf = (n, l) => Math.atan2(Math.sin(n) * Math.cos(kc) - Math.tan(l) * Math.sin(kc), Math.cos(n)), pf = (n, l) => Math.asin(Math.sin(l) * Math.cos(kc) + Math.cos(l) * Math.sin(kc) * Math.sin(n)), Am = (n, l) => qn * (280.16 + 360.9856235 * n) - l, Em = (n, l, i) => Math.asin(Math.sin(l) * Math.sin(i) + Math.cos(l) * Math.cos(i) * Math.cos(n));
function uf(n) {
  const l = qn * (357.5291 + 0.98560028 * n), i = qn * (1.9148 * Math.sin(l) + 0.02 * Math.sin(2 * l) + 3e-4 * Math.sin(3 * l)), u = l + i + qn * 102.9372 + Math.PI;
  return { ra: cf(u, 0), dec: pf(u, 0), dist: Cm };
}
function ff(n) {
  const l = qn * (218.316 + 13.176396 * n), i = qn * (134.963 + 13.064993 * n), u = qn * (93.272 + 13.22935 * n), v = l + qn * 6.289 * Math.sin(i), y = qn * 5.128 * Math.sin(u);
  return { ra: cf(v, y), dec: pf(v, y), dist: 385001 - 20905 * Math.cos(i) };
}
const hf = (n, l, i, u) => {
  const v = df(l), y = n(v);
  return Em(Am(v, qn * -u) - y.ra, qn * i, y.dec);
}, Mc = (n, l, i) => hf(uf, n, l, i), Dm = (n, l, i) => hf(ff, n, l, i);
function mf(n, l, i, u) {
  const v = {};
  let y = i.getTime(), k = n(i) - l;
  for (let E = y + nu; E <= u.getTime(); E += nu) {
    const I = n(new Date(E)) - l;
    if (k < 0 != I < 0) {
      const M = new Date(y + (E - y) * k / (k - I));
      I > 0 ? v.rise ?? (v.rise = M) : v.set ?? (v.set = M);
    }
    y = E, k = I;
  }
  return v;
}
const gf = (n) => {
  const l = is(n);
  return [l, new Date(l.getTime() + no)];
}, _m = (n, l, i) => mf((u) => Mc(u, l, i), Tm, ...gf(n)), Bm = (n, l, i) => mf((u) => Dm(u, l, i), Lm, ...gf(n));
function sp(n) {
  const l = df(n), i = uf(l), u = ff(l), v = Math.acos(Math.sin(i.dec) * Math.sin(u.dec) + Math.cos(i.dec) * Math.cos(u.dec) * Math.cos(i.ra - u.ra)), y = Math.atan2(i.dist * Math.sin(v), u.dist - i.dist * Math.cos(v)), k = Math.atan2(Math.cos(i.dec) * Math.sin(i.ra - u.ra), Math.sin(i.dec) * Math.cos(u.dec) - Math.cos(i.dec) * Math.sin(u.dec) * Math.cos(i.ra - u.ra));
  return { fraction: (1 + Math.cos(y)) / 2, phase: 0.5 + 0.5 * y * (k < 0 ? -1 : 1) / Math.PI };
}
const Rm = (n) => {
  const l = n * 28;
  return l < 0.5 || l > 27.5 ? "new_moon" : l < 6.5 ? "waxing_crescent" : l < 7.5 ? "first_quarter" : l < 13.5 ? "waxing_gibbous" : l < 14.5 ? "full_moon" : l < 20.5 ? "waning_gibbous" : l < 21.5 ? "last_quarter" : "waning_crescent";
}, gd = (n) => {
  const l = n == null ? void 0 : n.config;
  return l && Qt(l.latitude) && Qt(l.longitude) ? { lat: Number(l.latitude), lon: Number(l.longitude) } : null;
};
function Dl(n, l) {
  var M, W, F;
  const i = gd(n), u = i ? _m(l, i.lat, i.lon) : {}, v = (M = n == null ? void 0 : n.states) == null ? void 0 : M["sun.sun"], y = is(l).getTime(), k = (q) => {
    const j = q ? new Date(q) : null;
    return j && Number.isFinite(j.getTime()) && is(j).getTime() === y ? j : null;
  }, E = k((W = v == null ? void 0 : v.attributes) == null ? void 0 : W.next_rising), I = k((F = v == null ? void 0 : v.attributes) == null ? void 0 : F.next_setting);
  return E && (u.rise = E), I && (u.set = I), u;
}
function Pm(n) {
  var u;
  const l = (u = n == null ? void 0 : n.states) == null ? void 0 : u["sun.sun"];
  if ((l == null ? void 0 : l.state) === "below_horizon" || (l == null ? void 0 : l.state) === "above_horizon") return l.state === "below_horizon";
  const i = gd(n);
  return i ? Mc(/* @__PURE__ */ new Date(), i.lat, i.lon) < 0 : !1;
}
const js = (n) => !!n && n.state !== "unavailable" && n.state !== "unknown", Bl = (n, l) => {
  var u;
  const i = (u = n.entities) == null ? void 0 : u[l];
  return !i || !i.hidden && !i.entity_category;
}, Na = (n, l, i) => {
  var u, v;
  for (const y of l) {
    const k = (u = n.states) == null ? void 0 : u[y];
    if (!js(k)) continue;
    const E = (v = k.attributes) == null ? void 0 : v[i];
    if (E != null && E !== "") return { stateObj: k, value: E };
  }
}, Nm = (n, l) => l.map((i) => {
  var u;
  return (u = n.states) == null ? void 0 : u[i];
}).find(js), Hm = (n, l, i) => l.map((u) => {
  var v;
  return (v = n.states) == null ? void 0 : v[u];
}).find((u) => {
  var v;
  return js(u) && (((v = u.attributes) == null ? void 0 : v.supported_features) == null || Number(u.attributes.supported_features) & bm[i]);
});
function ns(n, l, i) {
  var y, k, E, I;
  const u = ((k = (y = n.config) == null ? void 0 : y.unit_system) == null ? void 0 : k.length) || "", v = (l == null ? void 0 : l.attributes) || {};
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
      return v.temperature_unit || ((I = (E = n.config) == null ? void 0 : E.unit_system) == null ? void 0 : I.temperature) || "";
  }
}
function bc(n, l, i, u) {
  try {
    if (typeof n.formatEntityAttributeValueToParts == "function") {
      const [v, ...y] = n.formatEntityAttributeValueToParts(l, i, u).map((k) => k.value);
      return { number: v, unit: y.join("").trim() };
    }
  } catch {
  }
  return { number: _t(u, n.locale), unit: ns(n, l, i) };
}
function ou(n, l, i, u) {
  try {
    if (typeof n.formatEntityAttributeValue == "function") return n.formatEntityAttributeValue(l, i, u);
  } catch {
  }
  const v = bc(n, l, i, u);
  return (v.number + " " + v.unit).trim();
}
function vr(n, l) {
  var u;
  try {
    if (typeof n.formatEntityState == "function") return n.formatEntityState(l);
  } catch {
  }
  const i = (u = l.attributes) == null ? void 0 : u.unit_of_measurement;
  return cm[l.state] || (i && Qt(l.state) ? _t(l.state, n.locale) + " " + i : l.state);
}
function ts(n, l) {
  var i;
  try {
    if (typeof n.formatEntityName == "function") return n.formatEntityName(l, { type: "entity" });
  } catch {
  }
  return ((i = l.attributes) == null ? void 0 : i.friendly_name) || l.entity_id;
}
const iu = (n) => n < 3 ? "low" : n < 6 ? "moderate" : n < 8 ? "high" : n < 11 ? "very_high" : "extreme", sc = (n) => of.find(([, l]) => n <= l)[0];
function Im(n, l) {
  if (l === "Beaufort") return Math.round(n);
  const i = l ? mm[l] : void 0;
  if (i === void 0) return;
  const u = gm.findIndex((v) => n * i < v);
  return u === -1 ? 12 : u;
}
const ru = (n, l) => {
  const i = l ? vm[l] : void 0;
  return i === void 0 ? void 0 : n * i;
}, su = (n) => Object.keys(n.states || {}).find((l) => {
  var i, u;
  return l.startsWith("sensor.") && ((u = (i = n.entities) == null ? void 0 : i[l]) == null ? void 0 : u.platform) === "moon";
}), lp = (n) => Object.values(n.states || {}).filter((l) => {
  var i, u;
  return l.entity_id.startsWith("sensor.") && ((i = l.attributes) == null ? void 0 : i.device_class) === "precipitation" && ["total", "total_increasing"].includes(((u = l.attributes) == null ? void 0 : u.state_class) ?? "") && Bl(n, l.entity_id);
}).map((l) => l.entity_id).sort()[0];
function Fm(n) {
  var i;
  const l = {};
  for (const [u, v] of Object.entries(((i = n == null ? void 0 : n.core) == null ? void 0 : i.integration) ?? {})) {
    if (v && "integration_type" in v) {
      l[u] = v.categories;
      continue;
    }
    for (const [y, k] of Object.entries((v == null ? void 0 : v.integrations) ?? {})) l[y] = k == null ? void 0 : k.categories;
  }
  return l;
}
const vf = (n, l, i) => {
  var v, y, k;
  const u = (y = (v = n.entities) == null ? void 0 : v[i]) == null ? void 0 : y.platform;
  return !!u && !!((k = l[u]) != null && k.includes(hm));
};
function Om(n, l) {
  const i = /* @__PURE__ */ new Map();
  return Object.values(n.states || {}).filter((u) => {
    var v;
    return u.entity_id.startsWith("sensor.") && yc.includes(((v = u.attributes) == null ? void 0 : v.device_class) ?? "") && Bl(n, u.entity_id) && vf(n, l, u.entity_id);
  }).sort((u, v) => u.entity_id.localeCompare(v.entity_id)).forEach((u) => {
    i.has(u.attributes.device_class) || i.set(u.attributes.device_class, u.entity_id);
  }), yc.map((u) => i.get(u)).filter(Boolean);
}
const qm = (n, l) => Object.values(n.states || {}).filter((i) => {
  var u, v;
  return i.entity_id.startsWith("sensor.") && Bl(n, i.entity_id) && vf(n, l, i.entity_id) && (((v = (u = n.entities) == null ? void 0 : u[i.entity_id]) == null ? void 0 : v.translation_key) ?? i.entity_id).toLowerCase().includes("pollen");
}).map((i) => i.entity_id).sort();
function lu(n, l, i) {
  const u = Math.max(l - n, 1e-6), v = i[i.length - 1], y = i.find((M) => u / M <= 4) ?? v * Math.ceil(u / (4 * v)), k = Math.floor(n / y) * y;
  let E = Math.ceil(l / y) * y;
  E === k && (E = k + y);
  const I = [];
  for (let M = k; M <= E + y / 1e3; M += y) I.push(M);
  return { min: k, max: E, ticks: I };
}
const Wm = (n, l, i) => {
  const u = (k) => [1, 3, 5].map((E) => parseInt(k.slice(E, E + 2), 16)), v = u(n), y = u(l);
  return "rgb(" + v.map((k, E) => Math.round(k + (y[E] - k) * i)).join(", ") + ")";
}, Vm = (n, l, i, u) => {
  const v = i * Math.abs(1 - 2 * u), y = u < 0.5 ? 0 : 1;
  return "M " + n + " " + (l - i) + " A " + i + " " + i + " 0 0 0 " + n + " " + (l + i) + " A " + v + " " + i + " 0 0 " + y + " " + n + " " + (l - i) + " Z";
}, Nn = ({ icon: n, name: l, sub: i, visual: u, double: v, backdrop: y, cls: k, zone: E, callouts: I }) => '<div class="wbCard wbSquare' + (v ? " wbDouble" : "") + (y ? " wbHasBackdrop" : "") + (E != null ? " wbZoned" : "") + (k ? " " + k : "") + '">' + (y ? '<div class="wbBackdrop" aria-hidden="true">' + y + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + rf(n) + '</div><div class="wbText"><span class="wbName">' + Fe(l) + "</span>" + (i ? '<span class="wbSub">' + Fe(i) + "</span>" : "") + "</div></div>" + (E != null ? '<div class="wbZone">' + E + "</div>" + (I != null && I.length ? '<div class="wbCallouts">' + I.slice(0, 3).map((M) => Array.isArray(M) ? '<span class="wbCallout"><span>' + Fe(M[0]) + "</span><span>" + Fe(M[1]) + "</span></span>" : '<span class="wbCallout wbAdvice"><span>' + Fe(M) + "</span></span>").join("") + "</div>" : "") : '<div class="wbVisual">' + u + "</div>") + "</div>", lc = (n) => '<div class="wbZoneM">' + n + "</div>", qo = (n, l) => '<div class="wbValue"><span class="wbNum">' + Fe(n) + "</span>" + (l ? '<span class="wbUnitV">' + Fe(l) + "</span>" : "") + "</div>";
function jm(n) {
  const l = n.max - n.min || 1, i = (E) => 100 - (Math.min(n.max, Math.max(n.min, E)) - n.min) / l * 100, u = (E) => E / md * 100 + "%", v = (E) => E.map((I) => I.t + "," + i(I.v)).join(" "), y = n.kind === "line" ? n.points : [];
  let k = '<div class="wbDayChart"><div class="wbDcSun">' + n.sun.map((E) => '<span class="wbDcSunMark" style="left:' + u(E.t) + '">' + wr(E.rise ? Gt.sunsetUp : Gt.sunsetDown) + Fe(E.label) + "</span>").join("") + "</div>";
  return k += '<div class="wbDcY">' + n.ticks.map((E) => '<span style="top:' + i(E) + '%">' + Fe(n.format(E)) + "</span>").join("") + "</div>", k += '<div class="wbDcPlot"><svg viewBox="0 0 ' + md + ' 100" preserveAspectRatio="none">' + n.night.map(([E, I]) => '<rect class="wbDcNight" x="' + E + '" y="0" width="' + (I - E) + '" height="100"></rect>').join("") + n.ticks.map((E) => '<line class="wbDcGrid" x1="0" x2="' + md + '" y1="' + i(E) + '" y2="' + i(E) + '" vector-effect="non-scaling-stroke"></line>').join("") + n.sun.map((E) => '<line class="wbDcSunLine" x1="' + E.t + '" x2="' + E.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (n.past && n.past.length > 1 ? '<polyline class="wbDcPast" points="' + v(n.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (y.length > 1 ? '<polygon class="wbDcArea" points="' + y[0].t + ",100 " + v(y) + " " + y[y.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + v(y) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (n.now ? '<line class="wbDcNow" x1="' + n.now.t + '" x2="' + n.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (n.kind === "bars" ? n.points.filter((E) => E.v > 0).map((E) => '<i class="wbDcBar" style="left:' + u(E.t + 12) + ";width:" + u(36) + ";height:" + (100 - i(E.v)) + '%"></i>').join("") : "") + (n.now && n.kind === "line" ? '<i class="wbDcDot" style="left:' + u(n.now.t) + ";top:" + i(n.now.v) + '%"></i>' : "") + (n.peak ? '<span class="wbDcPeak" style="left:' + u(n.peak.t) + ";top:" + i(n.peak.v) + '%">' + Fe(n.peak.label) + "</span>" : "") + (n.note ? '<span class="wbDcNote">' + Fe(n.note) + "</span>" : "") + "</div>", k += '<div class="wbDcX">' + n.hours.map((E) => '<span class="' + (E.minor ? "wbMinor" : "") + '" style="left:' + u(E.t) + '">' + Fe(E.label) + "</span>").join("") + "</div></div>", k;
}
function du(n, l, i = 120, u = 300) {
  const k = n.map((z) => z.value), E = Math.min(...k), I = Math.max(...k), M = I - E || 1, W = (z) => z / (n.length - 1) * u, F = (z) => 18 + (1 - (z - E) / M) * (i - 18 - 18), q = n.map((z, me) => [W(me), F(z.value)]), j = q.length > 2 ? ef(q) : "M" + q.map((z) => z[0].toFixed(1) + " " + z[1].toFixed(1)).join("L"), ue = k.indexOf(I), ee = k.indexOf(E), $ = (z) => z === 0 ? "start" : z === n.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 ' + u + " " + i + '" aria-hidden="true">' + tf(u, 18, i - 18) + ('<path class="wbArea" d="' + j + "L" + u + " " + (i - 18) + "L0 " + (i - 18) + 'Z"></path>') + '<path class="wbLine" d="' + j + '" vector-effect="non-scaling-stroke"></path><text x="' + W(ue) + '" y="' + (F(I) - 6) + '" text-anchor="' + $(ue) + '">' + Fe(l(I)) + '</text><text x="' + W(ee) + '" y="' + (F(E) + 14) + '" text-anchor="' + $(ee) + '">' + Fe(l(E)) + '</text><text x="0" y="' + i + '" text-anchor="start">' + Fe(n[0].label) + '</text><text x="' + u + '" y="' + i + '" text-anchor="end">' + Fe(n[n.length - 1].label) + "</text></svg>";
}
function zm(n, l) {
  const y = n.map((F) => F.value).concat([]), k = Math.min(...y) - 2, E = Math.max(...y) + 1, I = E - k || 1, M = 300 / n.length, W = (F) => (1 - (F - k) / I) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + n.map((F, q) => '<rect class="wbBar' + (F.now ? " wbNowBar" : "") + '" x="' + (q * M + M * 0.2) + '" y="' + W(F.value) + '" width="' + M * 0.6 + '" height="' + (104 - W(F.value)) + '" rx="6"></rect><text x="' + (q * M + M / 2) + '" y="120" text-anchor="middle">' + Fe(F.label) + "</text>").join("") + "</svg>";
}
const Gm = [
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
], Um = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], cu = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], Ym = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let Zm = 0;
function pu(n, { getHass: l, entityId: i, style: u = "bitmap", motion: v = !0, cards: y, onOpen: k, hoursWindow: E } = {}) {
  var co, Zs;
  const I = "wb" + ++Zm + "-", M = document.createElement("div");
  M.className = "wb", M.dataset.style = u;
  const W = document.createElement("div");
  W.className = "wbBento", M.appendChild(W), n.replaceChildren(M);
  const F = ["aq_tile", "pollen_tile", "radar_tile"], q = ["current", "hourly", "sun", "pollen_tile", "moon", "uv_index", "aq_tile", "humidity", "pressure", "wind", "visibility", "radar_tile", "compared_to_average", "precipitation", "air_quality"].filter((f) => !y || y.includes(f)), j = { current: "wide", hourly: "wide", compared_to_average: "double" }, ue = ["sun", "moon", "uv_index", "aq_tile", "pollen_tile", "humidity", "pressure", "wind"], ee = {};
  q.forEach((f) => {
    const b = document.createElement("div");
    b.className = "wbItem", b.dataset.card = f, b.dataset.size = j[f] || "tile", b.hidden = !0, ue.includes(f) && (b.dataset.xl = ""), W.appendChild(b), ee[f] = { el: b, html: null };
  });
  let $ = !1, z = null, me = 0, pe = -1, Se = !1, ie = null;
  const oe = "homecore-next-view", ne = (() => {
    try {
      return localStorage.getItem(oe);
    } catch {
      return null;
    }
  })(), D = { graph: void 0, range: { preset: "day" }, picking: !1, openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: ne === "bars" ? "bars" : "strip", aq: void 0 }, Ce = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let le = /* @__PURE__ */ new Date(), Oe = /* @__PURE__ */ new Date();
  const re = {}, Ze = {}, A = {}, R = (f) => {
    var b;
    return ((b = A[f]) == null ? void 0 : b.forecast) ?? [];
  }, L = (f, b) => {
    var x;
    return A[b] ? (x = f.states) == null ? void 0 : x[A[b].entityId] : void 0;
  };
  function te(f) {
    const b = Ze[f];
    b && (b.unsub.then((x) => {
      typeof x == "function" && x();
    }).catch(() => {
    }), delete Ze[f]), A[f] && delete A[f];
  }
  function de(f, b, x) {
    var H;
    if (typeof ((H = f.connection) == null ? void 0 : H.subscribeMessage) != "function") return;
    const C = { entityId: x };
    try {
      C.unsub = Promise.resolve(f.connection.subscribeMessage((G) => {
        $ || Ze[b] !== C || (G != null && G.forecast ? A[b] = { entityId: x, forecast: G.forecast } : delete A[b], pi());
      }, { type: "weather/subscribe_forecast", forecast_type: b, entity_id: x }));
    } catch (G) {
      C.unsub = Promise.reject(G);
    }
    C.unsub.catch(() => {
      Ze[b] === C && delete Ze[b];
    }), Ze[b] = C;
  }
  function ce(f, b) {
    var x;
    for (const C of ["daily", "hourly"]) {
      const H = Hm(f, b, C);
      ((x = Ze[C]) == null ? void 0 : x.entityId) !== (H == null ? void 0 : H.entity_id) && (te(C), H && de(f, C, H.entity_id));
    }
  }
  const ye = (f, b, x, C = !1) => f.callWS({
    type: "history/history_during_period",
    start_time: x.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [b],
    minimal_response: C,
    no_attributes: C,
    significant_changes_only: !1
  });
  async function Me(f, b) {
    var K, he, J;
    const x = Na(f, b, "pressure");
    if (!x) return;
    const C = x.stateObj.entity_id, H = await ye(f, C, new Date(Date.now() - 3 * zt)), G = (J = (he = (K = H == null ? void 0 : H[C]) == null ? void 0 : K.find((fe) => {
      var xe;
      return typeof ((xe = fe.a) == null ? void 0 : xe.pressure) == "number";
    })) == null ? void 0 : he.a) == null ? void 0 : J.pressure;
    Ce.pressureHistory = typeof G == "number" ? { entityId: C, value: G } : void 0;
  }
  async function Le(f, b) {
    var he;
    const x = Na(f, b, "temperature");
    if (!x) return;
    const C = x.stateObj.entity_id, H = is(/* @__PURE__ */ new Date()), G = await ye(f, C, new Date(H.getTime() - im * no)), K = /* @__PURE__ */ new Map();
    for (const J of (G == null ? void 0 : G[C]) ?? []) {
      const fe = (he = J.a) == null ? void 0 : he.temperature, xe = new Date((J.lc ?? J.lu) * 1e3);
      if (typeof fe != "number" || xe >= H) continue;
      const Ee = xe.toDateString();
      K.set(Ee, Math.max(K.get(Ee) ?? -1 / 0, fe));
    }
    Ce.temperatureHistory = { entityId: C, dailyHighs: [...K.values()], days: [...K.entries()].map(([J, fe]) => ({ date: new Date(J), high: fe })) };
  }
  async function Xe(f) {
    const b = lp(f);
    if (!b) return;
    const x = await f.callWS({ type: "recorder/statistic_during_period", statistic_id: b, rolling_window: { duration: { hours: 24 } } });
    Ce.rain = { entityId: b, change: (x == null ? void 0 : x.change) ?? void 0 };
  }
  function ct() {
    const f = l == null ? void 0 : l();
    if (!f || $ || typeof f.callWS != "function") return;
    const b = oo(f);
    Ce.lastFetch = Date.now(), [Me(f, b), Le(f, b), Xe(f)].forEach((x) => x.then(() => pi(), () => {
    }));
  }
  async function Re() {
    const f = l == null ? void 0 : l();
    if (!f) return;
    const b = Na(f, oo(f), "temperature");
    if (!b) return;
    const x = b.stateObj.entity_id, C = is(/* @__PURE__ */ new Date());
    try {
      const H = await ye(f, x, C), G = (K) => ((H == null ? void 0 : H[x]) ?? []).map((he) => {
        var J;
        return { time: he.lu * 1e3, value: (J = he.a) == null ? void 0 : J[K] };
      }).filter((he) => typeof he.value == "number");
      Ce.todayHistory = { day: C.toDateString(), fetched: Date.now(), temperature: G("temperature"), humidity: G("humidity") }, pi();
    } catch {
    }
  }
  async function ja(f) {
    const b = l == null ? void 0 : l();
    if (b)
      try {
        const x = await ye(b, f, new Date(Date.now() - 24 * zt), !0), C = ((x == null ? void 0 : x[f]) ?? []).filter((G) => Qt(G.s)), H = Math.max(1, Math.ceil(C.length / 48));
        Ce.aqHistory = { entityId: f, points: C.filter((G, K) => K % H === 0).map((G) => ({ label: wn(new Date(G.lu * 1e3), b), value: Number(G.s) })) }, pi();
      } catch {
      }
  }
  function ai(f) {
    Ce.categories === void 0 && (Ce.categories = null, Promise.resolve().then(() => f.callWS({ type: "integration/descriptions" })).then((b) => {
      Ce.categories = Fm(b);
    }, () => {
      Ce.categories = {};
    }).then(() => pi()));
  }
  function oo(f) {
    var x;
    const b = Object.keys(f.states || {}).filter((C) => C.startsWith("weather.") && Bl(f, C)).sort();
    return i && ((x = f.states) != null && x[i]) ? [i, ...b.filter((C) => C !== i)] : b;
  }
  const Vn = (f) => Ce.categories ? { air: Om(f, Ce.categories), pollen: qm(f, Ce.categories) } : { air: [], pollen: [] };
  function ia(f, b, x, C) {
    if (u === "line") return '<span class="wbWx wbS' + b + ' wbLineIcon" aria-hidden="true">' + ip(f, x || f === "clear-night") + "</span>";
    if (u === "smooth") {
      const H = Eh(f, b === 90, x, I + "g-" + C);
      return '<span class="wbWx wbS' + b + " wb" + H.k[0].toUpperCase() + H.k.slice(1) + (H.night ? " wbNight" : "") + '" aria-hidden="true">' + H.svg + "</span>";
    }
    return '<span class="wbWx wbS' + b + '" aria-hidden="true"><canvas data-wb-wx="' + Fe(Sc(f, x)) + '" data-size="' + b + '"></canvas></span>';
  }
  const Ve = () => R("daily").filter((f) => f.templow != null).slice(0, Xh);
  function Kt(f, b) {
    const x = new Date(b.datetime), C = /* @__PURE__ */ new Date();
    return El(x, C) ? _e.today : El(x, new Date(C.getTime() + no)) ? _e.tomorrow : au(x, f);
  }
  const va = (f, b, x) => x === 0 ? Kt(f, b) : au(new Date(b.datetime), f);
  function St(f, b) {
    var xe, Ee, Je, Ke;
    const x = Nm(f, b);
    if (!x) return "";
    const C = Ve(), H = D.openDay !== void 0 ? C[D.openDay] : void 0, G = Na(f, b, "temperature"), K = C[0], he = K && El(new Date(K.datetime), /* @__PURE__ */ new Date()), J = ((Ee = (xe = f.config) == null ? void 0 : xe.unit_system) == null ? void 0 : Ee.temperature) || ((Je = x.attributes) == null ? void 0 : Je.temperature_unit) || "";
    let fe = '<div class="wbCard wbWeather' + (H ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (H ? " inert" : "") + '><div class="wbNow">' + (k ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + Fe(_e.openPage) + '">' : '<div class="wbCurrent">') + ia(x.state, 90, Pm(f), "now") + '<div class="wbTempBlock">' + (G && Qt(G.value) ? '<div class="wbTemp"><span class="wbDeg">' + Fe(_t(Math.round(Number(G.value)), f.locale)) + '</span><span class="wbUnit">' + Fe(J) + "</span></div>" : "") + '<div class="wbPlace">' + Fe(((Ke = f.config) == null ? void 0 : Ke.location_name) ?? "") + "</div></div>" + (k ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + Fe(vr(f, x)) + "</div>" + (he && K.templow != null ? '<div class="wbRange">' + Fe(bn(_e.range, { high: ua(f, K.temperature), low: ua(f, K.templow) })) + "</div>" : "") + "</div></div>";
    if (fe += kn(f) + zs(f), C.length) {
      const Be = he && G && Qt(G.value) ? ua(f, G.value) : "", tt = (Ge, Te, gt) => Ge === 0 && Be ? '<span class="wbAsDay">' + Fe(Te) + '</span><span class="wbAsNow">' + Fe(gt) + "</span>" : Fe(Te);
      fe += '<div class="wbColumns" role="list">' + C.map((Ge, Te) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + Te + '" data-wb-focus="col-' + Te + '"><span class="wbDay">' + tt(Te, va(f, Ge, Te), _e.now) + "</span>" + ia(Ge.condition ?? "cloudy", 60, !1, "col" + Te) + '<span class="wbTemps"><span class="wbHi">' + tt(Te, ua(f, Ge.temperature), Be) + '</span><span class="wbLo">' + Fe(ua(f, Ge.templow)) + "</span></span></button>").join("") + "</div>", fe += '<div class="wbHalves" role="list">' + C.map((Ge, Te) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + Te + '" data-wb-focus="half-' + Te + '">' + ia(Ge.condition ?? "cloudy", 40, !1, "half" + Te) + '<span class="wbText"><span class="wbName">' + Fe(Kt(f, Ge)) + '</span><span class="wbSub">' + Fe(bn(_e.highLow, { high: ua(f, Ge.temperature), low: ua(f, Ge.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return fe + "</div>" + (H ? it(f, b, H) : "") + "</div>";
  }
  const xt = {
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
  }, yt = {
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
  function qe(f) {
    const b = Date.now(), x = R("hourly").filter((Ee) => new Date(Ee.datetime).getTime() > b - zt).slice(0, 13);
    if (x.length < 2) return "";
    const C = (Ee) => wn(new Date(Ee.datetime), f), H = (Ee) => xt[Ee.condition] || "", G = (Ee) => yt[Ee.condition] || Ee.condition;
    let K = H(x[0]);
    if (!K) return "";
    let he = x[0], J = 0;
    for (const Ee of x.slice(1))
      J === 2 || G(Ee) === G(he) || !H(Ee) || (K += (J ? " and " : ", ") + H(Ee) + " from " + C(Ee), he = Ee, J++);
    const fe = Number(x[0].temperature), xe = x.filter((Ee) => Qt(Ee.temperature));
    if (Qt(fe) && xe.length) {
      const Ee = xe.reduce((Ke, Be) => Number(Be.temperature) < Number(Ke.temperature) ? Be : Ke), Je = xe.reduce((Ke, Be) => Number(Be.temperature) > Number(Ke.temperature) ? Be : Ke);
      fe - Number(Ee.temperature) >= 3 ? K += ", down to " + ua(f, Ee.temperature) + " by " + C(Ee) : Number(Je.temperature) - fe >= 3 && (K += ", up to " + ua(f, Je.temperature) + " by " + C(Je));
    }
    return K[0].toUpperCase() + K.slice(1) + ".";
  }
  const kn = (f) => {
    const b = qe(f);
    return b ? '<div class="wbSummary"><p class="wbSummaryText">' + Fe(b) + "</p></div>" : "";
  };
  function zs(f) {
    const [b, x] = ic[E == null ? void 0 : E()] || ic.day, C = Date.now(), H = R("hourly").filter((G) => {
      const K = new Date(G.datetime), he = K.getHours();
      return K.getTime() > C - zt / 2 && he >= b && he < x && Qt(G.temperature);
    }).slice(0, 4);
    return H.length ? '<div class="wbNextHours" role="list">' + H.map((G, K) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + Fe(wn(new Date(G.datetime), f)) + "</span>" + ia(G.condition ?? "cloudy", 40, G.is_daytime === !1, "hr" + K) + '<span class="wbHourTemp">' + Fe(ua(f, G.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function rs(f) {
    const b = f.getTime(), x = Date.now() - zt;
    return R("hourly").filter((C) => {
      const H = new Date(C.datetime).getTime();
      return H >= b && H < b + no && H > x;
    });
  }
  function ka(f) {
    if (!f.length) return ["temperature"];
    const b = ["temperature"];
    return f.some((x) => x.precipitation != null || x.precipitation_probability != null) && b.push("precipitation"), f.some((x) => x.humidity != null) && b.push("humidity"), b;
  }
  function it(f, b, x) {
    const C = is(new Date(x.datetime)), H = rs(C), G = ka(H), K = G.includes(D.dayMode) ? D.dayMode : "temperature", he = (J) => J === "humidity" ? _e.humidity : _e.modes[J];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + ia(x.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + Fe(Kt(f, x)) + '</span><span class="wbSub">' + Fe(bn(_e.highLow, { high: ua(f, x.temperature), low: ua(f, x.templow) })) + '</span></div><button class="wbBack" title="' + Fe(_e.back) + '" data-wb="close-day" data-wb-focus="back-day">' + wr(Gt.back) + "</button></div>" + (G.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + G.map((J) => '<button aria-pressed="' + (J === K) + '" data-wb="day-mode" data-mode="' + J + '" data-wb-focus="day-mode-' + J + '">' + Fe(he(J)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + jm(Mn(f, b, C, H, K)) + "</div></div>";
  }
  function Mn(f, b, x, C, H) {
    var zo;
    const G = x.getTime(), K = Date.now(), he = El(x, /* @__PURE__ */ new Date()), J = (Tt) => (Tt - G) / dn, fe = (Tt) => wn(new Date(Tt), f), xe = (Tt) => new Date(Tt.datetime).getTime(), Ee = [0, 3, 6, 9, 12, 15, 18, 21].map((Tt) => ({ t: Tt * 60, label: fe(G + Tt * zt), minor: Tt % 6 !== 0 })), { rise: Je, set: Ke } = Dl(f, x), Be = [], tt = [];
    Je && (Be.push({ t: J(Je.getTime()), label: fe(Je.getTime()), rise: !0 }), tt.push([0, J(Je.getTime())])), Ke && (Be.push({ t: J(Ke.getTime()), label: fe(Ke.getTime()), rise: !1 }), tt.push([J(Ke.getTime()), md]));
    const Ge = gd(f);
    !Je && !Ke && Ge && Mc(new Date(G + no / 2), Ge.lat, Ge.lon) < 0 && tt.push([0, md]);
    const Te = he ? J(K) : void 0, gt = { hours: Ee, sun: Be, night: tt };
    if (!C.length && !he) return { ...gt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: _e.noHourly };
    if (H === "precipitation") {
      const Tt = C.some((Ka) => Ka.precipitation_probability != null), po = C.map((Ka) => ({ t: J(xe(Ka)), v: Number((Tt ? Ka.precipitation_probability : Ka.precipitation) ?? 0) })), Ln = ns(f, L(f, "hourly"), "precipitation"), An = Math.max(0, ...po.map((Ka) => Ka.v)), bi = Tt ? 100 : lu(0, Math.max(An, 1), [0.5, 1, 2, 5, 10]).max, $i = (Ka) => Tt ? _t(Ka, f.locale) + "%" : _t(Ka, f.locale, { maximumFractionDigits: 1 }) + " " + Ln, Xi = po.find((Ka) => Ka.v === An);
      return {
        ...gt,
        kind: "bars",
        points: po,
        min: 0,
        max: bi,
        ticks: [0, bi / 2, bi],
        format: $i,
        now: Te !== void 0 ? { t: Te, v: 0 } : void 0,
        peak: Xi && An > 0 ? { t: Xi.t + 30, v: Xi.v, label: $i(Xi.v) } : void 0,
        note: An > 0 ? void 0 : _e.noRain
      };
    }
    const nt = H === "humidity" ? "humidity" : "temperature", Ft = C.filter((Tt) => Tt[nt] != null && (!he || xe(Tt) >= K)).map((Tt) => ({ t: J(xe(Tt)), v: Number(Tt[nt]) }));
    let We, ta = [];
    if (Te !== void 0) {
      const Tt = Na(f, b, nt);
      Tt && Qt(Tt.value) && (We = { t: Te, v: Number(Tt.value) }, Ft.unshift(We)), ta = (((zo = Ce.todayHistory) == null ? void 0 : zo.day) === x.toDateString() ? Ce.todayHistory[nt] : []).filter((Ln) => Ln.time <= K).map((Ln) => ({ t: Math.max(0, J(Ln.time)), v: Ln.value })), We && ta.length && ta.push(We);
    }
    const la = [...ta, ...Ft];
    if (!la.length) return { ...gt, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: _e.noHourly };
    const Za = la.map((Tt) => Tt.v), tn = lu(Math.min(...Za), Math.max(...Za), nt === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    nt === "humidity" && (tn.min = Math.max(0, tn.min), tn.max = Math.min(100, tn.max), tn.ticks = tn.ticks.filter((Tt) => Tt >= 0 && Tt <= 100));
    const _r = nt === "humidity" ? (Tt) => _t(Tt, f.locale) + "%" : (Tt) => ua(f, Tt), pn = nt === "temperature" ? la.reduce((Tt, po) => po.v > Tt.v ? po : Tt) : void 0;
    return { ...gt, kind: "line", points: Ft, past: ta, ...tn, format: _r, now: We, peak: pn ? { ...pn, label: _r(pn.v) } : void 0 };
  }
  function ni(f) {
    const b = ["temperature"];
    return f.some((x) => x.precipitation_probability != null || x.precipitation != null) && b.push("precipitation"), f.some((x) => x.wind_speed != null) && b.push("wind"), b;
  }
  function Mr(f, b, x = Yp) {
    var G, K;
    const C = R("daily"), H = [];
    for (let he = 0; he < x; he++) for (const J of [!1, !0]) {
      const fe = f.getTime() + (he * 24 + (J ? 12 : 0)) * zt, xe = fe + 12 * zt, Ee = {};
      b.forEach((Ke) => {
        const Be = new Date(Ke.datetime).getTime();
        Ke.condition && Be >= fe && Be < xe && (Ee[Ke.condition] = (Ee[Ke.condition] ?? 0) + (nm.has(Ke.condition) ? 2 : 1));
      });
      let Je = (G = Object.entries(Ee).sort((Ke, Be) => Be[1] - Ke[1])[0]) == null ? void 0 : G[0];
      if (!Je) {
        const Ke = new Date(fe).toDateString();
        Je = ((K = C.find((Be) => new Date(Be.datetime).toDateString() === Ke)) == null ? void 0 : K.condition) ?? "cloudy";
      }
      H.push({ cond: J && Je === "sunny" ? "clear-night" : Je, night: J });
    }
    return H;
  }
  function Sr(f, b, x) {
    const C = L(f, "hourly"), H = b.precipitation_probability != null ? _t(b.precipitation_probability, f.locale) + "%" : "", G = b.precipitation ? _t(b.precipitation, f.locale) + " " + ns(f, C, "precipitation") : "";
    switch (x) {
      case "precipitation":
        return H ? [H, G] : [G || "–", ""];
      case "wind":
        return b.wind_speed != null ? [_t(Math.round(b.wind_speed), f.locale), ns(f, C, "wind_speed")] : ["–", ""];
      default:
        return [ua(f, b.temperature), (b.precipitation_probability ?? 0) >= 20 ? H : ""];
    }
  }
  function ea(f, b, x) {
    const [C, H] = ic[E == null ? void 0 : E()] || ic.day, G = [];
    for (let K = 0; K < 4 && G.length < 3; K++) {
      const he = /* @__PURE__ */ new Date();
      he.setHours(0, 0, 0, 0), he.setDate(he.getDate() + K);
      const J = new Date(he);
      J.setHours(H, 0, 0, 0), he.setHours(C, 0, 0, 0), !(J.getTime() <= x || !b.some((fe) => {
        const xe = new Date(fe.datetime).getTime();
        return xe >= he.getTime() && xe <= J.getTime();
      })) && G.push({ a: he.getTime(), b: J.getTime(), label: Kt(f, { datetime: he.toISOString() }) });
    }
    return G;
  }
  function cn(f, b, x, C, H, G) {
    const K = (x.b - b.a) / zt, he = (Te) => ((Te - b.a) / zt).toFixed(3), J = 80, fe = 32, xe = [];
    for (const Te = new Date(b.a - no); Te.getTime() < x.b + no; Te.setDate(Te.getDate() + 1)) {
      const { rise: gt, set: nt } = Dl(f, new Date(Te));
      gt && nt && xe.push({ rise: gt.getTime(), set: nt.getTime() });
    }
    const Ee = (Te, gt) => J - (J - fe) * Math.sin(Math.PI * (gt - Te.rise) / (Te.set - Te.rise)), Je = (Te) => !xe.some((gt) => Te >= gt.rise && Te <= gt.set);
    let Ke = "", Be = "", tt = "";
    xe.forEach((Te, gt) => {
      const nt = [];
      for (let We = Te.rise; We <= Te.set; We += 15 * dn) nt.push(he(We) + "," + Ee(Te, We).toFixed(2));
      nt.push(he(Te.set) + "," + J), Ke += '<polyline class="wbLineArc" points="' + nt.join(" ") + '"/>';
      const Ft = xe[gt + 1];
      Ft && (Ke += '<rect class="wbLineNight" x="' + he(Te.set) + '" y="0" width="' + ((Ft.rise - Te.set) / zt).toFixed(3) + '" height="100"/>'), [[Te.rise, "↑"], [Te.set, "↓"]].forEach(([We, ta]) => {
        We < b.a || We > x.b || (Be += '<line class="wbLineEdge" x1="' + he(We) + '" x2="' + he(We) + '" y1="0" y2="100"/>', tt += '<span class="wbLineTime" style="left:' + G(We) + '">' + ta + " " + Fe(wn(new Date(We), f)) + "</span>");
      });
    });
    const Ge = xe.find((Te) => H >= Te.rise && H <= Te.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + K + ' 100" preserveAspectRatio="none" aria-hidden="true">' + Ke + Be + '<line class="wbLineHorizon" x1="0" x2="' + K + '" y1="' + J + '" y2="' + J + '"/></svg>' + tt + (Ge ? '<span class="wbLineNow" style="left:' + G(H) + ";top:" + Ee(Ge, H) + '%">' + ip("sunny", !1) + "</span>" : "") + C.filter((Te) => Te.entry && !Te.now).map((Te) => '<span class="wbLineGlyph' + Te.edge + '" style="left:' + G(Te.t) + '">' + ip(Te.entry.condition ?? "cloudy", Je(Te.t)) + "</span>").join("");
  }
  function pt(f, b) {
    delete re.hourly;
    const x = D.hourlyView === "bars" ? "bars" : "strip", C = '<div class="wbHeader"><h2 class="wbTitle">' + Fe(x === "bars" ? _e.nextDays : _e.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + Fe(_e.showAs) + '">' + ["strip", "bars"].map((We) => '<button aria-pressed="' + (We === x) + '" data-wb="hourly-view" data-view="' + We + '" data-wb-focus="hourly-view-' + We + '">' + Fe(_e.views[We]) + "</button>").join("") + "</div></div>";
    if (x === "bars") return ba(f, b, C);
    const H = R("hourly"), G = Math.floor(Date.now() / dn) * dn, K = H.filter((We) => new Date(We.datetime).getTime() > G - zt);
    if (!K.length) return "";
    const he = ni(K), J = he.includes(D.hourlyMode) ? D.hourlyMode : "temperature", fe = ea(f, H, G);
    if (!fe.length) return "";
    const xe = fe[0], Ee = fe[fe.length - 1], Je = (xe.b - xe.a) / zt, Ke = (We) => "calc(var(--wb-u) * " + ((We - xe.a) / zt).toFixed(3) + ")", Be = new Date(xe.a);
    Be.setHours(6, 0, 0, 0), Be.getTime() > xe.a && Be.setDate(Be.getDate() - 1);
    const tt = Math.ceil((Ee.b - Be.getTime()) / no);
    u !== "line" && (re.hourly = { segs: Mr(Be, H, tt), seed: Be.getDate(), columns: tt });
    const Ge = (We) => We === xe.a ? " wbFirst" : We === Ee.b ? " wbLast" : "", Te = [];
    for (let We = xe.a; We < Ee.b; ) {
      const ta = new Date(We);
      ta.setHours(24, 0, 0, 0);
      const la = Math.min(ta.getTime(), Ee.b);
      Te.push({ a: We, b: la, label: Kt(f, { datetime: new Date(We).toISOString() }), page: fe.find((Za) => Za.a >= We && Za.a < la) || fe.find((Za) => Za.a < la && Za.b > We) }), We = la;
    }
    const gt = G > xe.a && G < Ee.b ? Math.floor((G - xe.a) / (2 * zt)) * 2 : 0, nt = [];
    for (let We = xe.a; We <= Ee.b; We += zt) {
      const ta = new Date(We), la = Ge(We);
      !la && ta.getHours() % Qh || !la && (Math.abs(xe.a - We) < 2 * zt || Math.abs(Ee.b - We) < 2 * zt) || G >= xe.a && Math.abs(We - G) < 1.5 * zt && !la || nt.push({ t: We, edge: la, label: wn(ta, f), entry: We >= G - zt ? H.find((Za) => new Date(Za.datetime).getTime() === We) : void 0 });
    }
    G > xe.a && G < xe.b && nt.push({ t: G, edge: G - xe.a < zt ? " wbFirst" : xe.b - G < zt ? " wbLast" : "", label: _e.now, entry: K[0], now: !0 });
    const Ft = (We, ta) => '<span class="wbMark' + We.edge + (We.now ? " wbNowMark" : "") + '" style="left:' + Ke(We.t) + '">' + ta + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + C + (he.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + he.map((We) => '<button aria-pressed="' + (We === J) + '" data-wb="hourly-mode" data-mode="' + We + '" data-wb-focus="hourly-mode-' + We + '">' + Fe(_e.modes[We]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + Fe(_e.nextHours) + '" data-span="' + Je + '" data-start="' + gt + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Je + ");width:calc(var(--wb-u) * " + (Ee.b - xe.a) / zt + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((Ee.b - xe.a) / (2 * zt)) + 1)].map((We, ta) => '<i class="wbSnap" style="left:' + Ke(xe.a + ta * 2 * zt) + '"></i>').join("") + '<div class="wbDays">' + Te.map((We, ta) => {
      var la;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((We.b - We.a) / zt).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (ta === 0 ? gt : ((((la = We.page) == null ? void 0 : la.a) ?? We.a) - xe.a) / zt) + '" data-wb-focus="hours-day-' + ta + '">' + Fe(We.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + nt.map((We) => Ft(We, Fe(We.label))).join("") + "</div>" + (u === "line" ? '<div class="wbSky wbLineSky">' + cn(f, xe, Ee, nt, G, Ke) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + Ke(Be.getTime()) + ";width:calc(var(--wb-u) * " + tt * 24 + ')"><canvas data-wb-strip="hourly"' + (u === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (G > xe.a ? '<i class="wbPast" style="width:' + Ke(Math.min(G, Ee.b)) + '"></i><i class="wbNowLine" style="left:' + Ke(G) + '"></i>' : "") + Te.slice(1).map((We) => '<i class="wbMidnight" style="left:' + Ke(We.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + nt.map((We) => {
      if (!We.entry) return "";
      const [ta, la] = Sr(f, We.entry, J);
      return Ft(We, '<span class="wbPrimaryV">' + Fe(ta) + '</span><span class="wbSecondary">' + Fe(la) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function yo(f) {
    const b = em, x = b.findIndex(([J]) => J >= f);
    if (x <= 0) return "rgb(" + b[x < 0 ? b.length - 1 : 0][1].join(",") + ")";
    const [C, H] = b[x - 1], [G, K] = b[x], he = (f - C) / (G - C);
    return "rgb(" + H.map((J, fe) => Math.round(J + (K[fe] - J) * he)).join(",") + ")";
  }
  function ba(f, b, x) {
    var Ke;
    const C = R("daily").filter((Be) => Qt(Be.templow) && Qt(Be.temperature)).slice(0, 7);
    if (!C.length) return "";
    const H = Math.min(...C.map((Be) => Number(Be.templow))), G = Math.max(...C.map((Be) => Number(Be.temperature))), K = Math.max(1, G - H), he = (Be) => Math.max(0, Math.min(100, (Be - H) / K * 100)).toFixed(2), J = /F/.test(ns(f, L(f, "daily"), "temperature")), fe = (Be) => J ? (Be - 32) / 1.8 : Be, xe = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((Be) => yo(fe(H + Be * K)) + " " + Be * 100 + "%").join(",") + ")", Ee = (Ke = Na(f, b, "temperature")) == null ? void 0 : Ke.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (ni(R("hourly").filter((Be) => new Date(Be.datetime).getTime() > Date.now() - zt)).length > 1 ? " wbTabbed" : "") + '">' + x + '<div class="wbDayBars" role="list">' + C.map((Be, tt) => {
      const Ge = Kt(f, Be), Te = El(new Date(Be.datetime), /* @__PURE__ */ new Date()), gt = Number(Be.templow), nt = Number(Be.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + Fe(bn(_e.rangeRow, { day: Ge, low: ua(f, gt), high: ua(f, nt) })) + '"><span class="wbRangeDay">' + Fe(Ge) + "</span>" + ia(Be.condition, 40, !1, "r" + tt) + '<span class="wbRangeLo">' + Fe(ua(f, gt)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + xe + ";clip-path:inset(0 " + (100 - he(nt)) + "% 0 " + he(gt) + '% round 4px)"></i>' + (Te && Qt(Ee) ? '<i class="wbRangeNow" style="left:' + he(Number(Ee)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + Fe(ua(f, nt)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  const Fi = [[-120, "#0d1530"], [-60, "#1c2550"], [-15, "#c9707a"], [30, "#f2a46a"], [60, "#b49bc8"], [90, "#5aa5e6"]], $e = [[-90, "#5aa5e6"], [-60, "#a99bd0"], [-30, "#f0a54a"], [15, "#c45a5a"], [60, "#3a2a5c"], [120, "#0d1530"]], dt = (f, b) => {
    if (b <= f[0][0]) return f[0][1];
    for (let x = 1; x < f.length; x++) if (b <= f[x][0]) {
      const [C, H] = f[x - 1], [G, K] = f[x];
      return Wm(H, K, (b - C) / (G - C));
    }
    return f[f.length - 1][1];
  }, et = (f, b, x) => {
    if (!b || !x) return Fi[5][1];
    const C = (f.getTime() - x.getTime()) / dn;
    return C >= -90 ? dt($e, C) : dt(Fi, (f.getTime() - b.getTime()) / dn);
  }, Ie = (f) => (f >= 60 ? Math.floor(f / 60) + "h " : "") + f % 60 + "m";
  function Yt(f) {
    const b = le, { rise: x, set: C } = Dl(f, b), H = x && C ? Math.round((C.getTime() - x.getTime()) / dn) : 0, G = Math.floor(H / 60), K = H % 60, he = (Ft) => Ft ? wn(Ft, f) : "–", J = new Date(b);
    J.setDate(J.getDate() + 1);
    const fe = Dl(f, J), xe = fe.rise && fe.set ? Math.round((fe.set.getTime() - fe.rise.getTime()) / dn) : 0, Ee = new Date(b);
    Ee.setDate(Ee.getDate() - 1);
    const Je = !!(x && C && b >= x && b <= C), Ke = !!(x && b < x), Be = Je ? x : Ke ? Dl(f, Ee).set : C, tt = Je ? C : Ke ? x : fe.rise, Ge = Be && tt ? Math.min(1, Math.max(0, (b.getTime() - Be.getTime()) / (tt.getTime() - Be.getTime()))) : 0, Te = tt ? Math.max(0, Math.round((tt.getTime() - b.getTime()) / dn)) : 0, gt = tt ? Ie(Te) : "–", nt = Je ? _e.untilSunset : _e.untilSunrise;
    return Nn({
      icon: Gt.sunny,
      name: _e.sun,
      sub: H ? bn(_e.daylightShort, { hours: G, minutes: K }) : void 0,
      cls: "wbSunTile",
      callouts: [[_e.callout.riseTomorrow, he(fe.rise)], [_e.callout.setTomorrow, he(fe.set)], ...xe ? [[_e.callout.dayTomorrow, Math.floor(xe / 60) + "h " + xe % 60 + "m"]] : []],
      zone: '<div class="wbSunZone" style="background:' + et(b, x, C) + '"><svg class="wbSunTrack" data-up="' + (Je ? 1 : 0) + '" data-f="' + Ge.toFixed(4) + '" aria-hidden="true"></svg><div class="wbSunCount"><span class="wbSunLeft">' + Fe(gt) + '</span><span class="wbSunWord">' + Fe(nt) + '</span></div><span class="wbSunAt wbSunRise">' + Fe(he(x)) + '</span><span class="wbSunAt wbSunSet">' + Fe(he(C)) + "</span></div>" + // at M, the countdown alone (Matt, 10 Nov): M's zone has room for one line
      lc(qo(gt, ""))
    });
  }
  const lt = 22;
  function Ia(f) {
    const b = Math.round(f.clientWidth), x = Math.round(f.clientHeight), C = lt, H = C / 2, G = b + "x" + x + ":" + f.dataset.f + ":" + f.dataset.up;
    if (b < C * 3 || x < C * 3 || f.dataset.drawn === G) return;
    f.dataset.drawn = G;
    const K = "M" + H + " " + (x - C) + "V" + C + "A" + H + " " + H + " 0 0 1 " + C + " " + H + "H" + (b - C) + "A" + H + " " + H + " 0 0 1 " + (b - H) + " " + C + "V" + (x - C), he = "M" + (b - H) + " " + (x - C) + "A" + H + " " + H + " 0 0 1 " + (b - C) + " " + (x - H) + "H" + C + "A" + H + " " + H + " 0 0 1 " + H + " " + (x - C), J = 16, fe = 6, xe = "M" + J + " 0H" + (b - J) + "A" + J + " " + J + " 0 0 1 " + b + " " + J + "V" + (x - J) + "A" + J + " " + J + " 0 0 1 " + (b - J) + " " + x + "H" + J + "A" + J + " " + J + " 0 0 1 0 " + (x - J) + "V" + J + "A" + J + " " + J + " 0 0 1 " + J + " 0ZM" + (C + fe) + " " + C + "A" + fe + " " + fe + " 0 0 0 " + C + " " + (C + fe) + "V" + (x - C - fe) + "A" + fe + " " + fe + " 0 0 0 " + (C + fe) + " " + (x - C) + "H" + (b - C - fe) + "A" + fe + " " + fe + " 0 0 0 " + (b - C) + " " + (x - C - fe) + "V" + (C + fe) + "A" + fe + " " + fe + " 0 0 0 " + (b - C - fe) + " " + C + "Z", Ee = f.dataset.up === "1", Je = Number(f.dataset.f) || 0, Ke = "http://www.w3.org/2000/svg";
    f.setAttribute("viewBox", "0 0 " + b + " " + x);
    const Be = document.createElementNS(Ke, "path");
    Be.setAttribute("d", Ee ? K : he), f.replaceChildren(Be);
    const tt = Be.getTotalLength(), Ge = Be.getPointAtLength(tt * Je), Te = Ee ? tt : 0;
    f.innerHTML = '<defs><mask id="' + I + 'sun-day"><path d="' + K + '" fill="none" stroke="#fff" stroke-width="' + C * 2 + '"></path></mask><mask id="' + I + 'sun-done"><path d="' + K + '" fill="none" stroke="#fff" stroke-width="' + C * 2 + '" stroke-dasharray="' + (Ee ? (Te * Je).toFixed(1) + " " + (Te + 1).toFixed(1) : "0 99999") + '"></path></mask></defs><path class="wbSunBand" fill-rule="evenodd" d="' + xe + '"></path><path class="wbSunBand wbSunDay" fill-rule="evenodd" d="' + xe + '" mask="url(#' + I + 'sun-day)"></path><path class="wbSunBand wbSunDone" fill-rule="evenodd" d="' + xe + '" mask="url(#' + I + 'sun-done)"></path><circle class="wbSunDot' + (Ee ? "" : " wbSunNight") + '" cx="' + Ge.x.toFixed(1) + '" cy="' + Ge.y.toFixed(1) + '" r="' + H + '"></circle>';
  }
  const $t = typeof ResizeObserver == "function" ? new ResizeObserver((f) => f.forEach((b) => Ia(b.target))) : null;
  function Vo() {
    $t == null || $t.disconnect(), M.querySelectorAll("svg.wbSunTrack").forEach((f) => {
      Ia(f), $t == null || $t.observe(f);
    });
  }
  function Gs(f, b, x) {
    const C = (K) => I + "moon-" + K, H = f > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + C("terminator") + ')" d="' + Vm(61, 61, 57.9, f) + '"' + (b ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", G = (K, he, J, fe, xe, Ee) => '<filter id="' + C(K) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + he + '" numOctaves="' + J + '" seed="' + fe + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Je) => "<feFunc" + Je + ' type="linear" slope="' + xe + '" intercept="' + Ee + '"></feFunc' + Je + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + C("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + C("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + C("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + C("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + C("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + G("mottle", "0.045", 4, 3, 1.8, -0.4) + G("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + C("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + C("fill") + ')"></circle><g' + (x ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + C("soften") + ')">' + Gm.map(([K, he, J, fe, xe, Ee]) => '<ellipse cx="' + K + '" cy="' + he + '" rx="' + J + '" ry="' + fe + '" fill-opacity="' + Ee + '" transform="rotate(' + xe + " " + K + " " + he + ')"></ellipse>').join("") + "</g>" + Um.map(([K, he, J]) => '<circle class="wbCrater" cx="' + K + '" cy="' + he + '" r="' + J + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + C("glow") + ')">' + Ym.map(([K, he]) => '<line x1="54.4" y1="95" x2="' + K + '" y2="' + he + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + C("glow") + ')">' + cu.map(([K, he, J]) => '<circle cx="' + K + '" cy="' + he + '" r="' + J * 2 + '"></circle>').join("") + "</g>" + cu.map(([K, he, J]) => '<circle class="wbBrightCenter" cx="' + K + '" cy="' + he + '" r="' + J + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + C("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + C("grain") + ')"></rect>' + H + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function oi(f) {
    const b = Oe, x = gd(f), C = (x == null ? void 0 : x.lat) ?? 0, H = sp(b), G = su(f), K = G ? f.states[G] : void 0, he = js(K) && um.includes(K.state) ? K.state : Rm(H.phase), { rise: J, set: fe } = x ? Bm(b, x.lat, x.lon) : {}, xe = H.phase > 0.5 != C < 0, Ee = _t(Math.round(H.fraction * 100), f.locale) + "%", Je = J ?? fe;
    return Je && wn(Je, f), Nn({
      icon: Gt.night,
      name: _e.moon,
      sub: _e.phases[he],
      callouts: [...J ? [[_e.callout.moonrise, wn(J, f)]] : [], ...fe ? [[_e.callout.moonset, wn(fe, f)]] : [], [_e.callout.lit, Ee]],
      // at M, how much of it is lit (Matt, 10 Nov)
      zone: '<div class="wbMoonBox">' + Gs(H.fraction, xe, C < 0) + "</div>" + lc(qo(_t(Math.round(H.fraction * 100), f.locale), "%"))
    });
  }
  function Fa(f, b) {
    var Be;
    const x = Na(f, b, "wind_speed");
    if (!x || !Qt(x.value)) return "";
    const C = Na(f, b, "wind_gust_speed"), H = Na(f, b, "wind_bearing"), G = H && Qt(H.value) ? Number(H.value) : void 0, K = Im(Number(x.value), (Be = x.stateObj.attributes) == null ? void 0 : Be.wind_speed_unit), he = bc(f, x.stateObj, "wind_speed", x.value), J = G !== void 0 ? _e.cardinal[pm[((G + 11.25) / 22.5 | 0) % 16]] : void 0, fe = C ? ou(f, C.stateObj, "wind_gust_speed", C.value) : void 0, xe = [J ? bn(_e.windFrom, { direction: J }) : void 0, K !== void 0 ? K + " " + _e.beaufort : void 0].filter(Boolean).join(" · ") || fe, Ee = (tt, Ge) => {
      const Te = (tt - 90) * Math.PI / 180;
      return [100 + Ge * Math.cos(Te), 100 + Ge * Math.sin(Te)];
    }, Je = Array.from({ length: 36 }, (tt, Ge) => Ge * 10).map((tt) => {
      const Ge = tt % 90 === 0, [Te, gt] = Ee(tt, 97), [nt, Ft] = Ee(tt, Ge ? 83 : 89);
      return '<line class="wbTick' + (Ge ? " wbMajor" : "") + '" x1="' + Te + '" y1="' + gt + '" x2="' + nt + '" y2="' + Ft + '"></line>';
    }).join(""), Ke = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([tt, Ge]) => {
      const [Te, gt] = Ee(Ge, 64);
      return '<text class="wbLetter' + (tt === "n" ? " wbNorth" : "") + '" x="' + Te + '" y="' + gt + '">' + Fe(_e.cardinal[tt]) + "</text>";
    }).join("");
    return Nn({ icon: Gt.windy, name: _e.wind, sub: xe, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Je + Ke + (G !== void 0 ? '<path class="wbMarker" transform="rotate(' + G + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + Fe(he.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + Fe(he.unit) + "</text></svg>" });
  }
  const jo = (f, b) => {
    if (f < 3) return _e.advice.fine;
    if (f < 8) return _e.advice.sunblock;
    const x = Date.now(), C = R("hourly").find((H) => H.uv_index != null && new Date(H.datetime).getTime() > x && H.uv_index < 6);
    return C && new Date(C.datetime).toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? bn(_e.advice.avoidUntil, { time: wn(new Date(C.datetime), b) }) : _e.advice.avoidToday;
  };
  function Cr(f, b) {
    const x = Na(f, b, "uv_index");
    if (!x || !Qt(x.value)) return "";
    const C = Number(x.value), H = _e.uvLevel[iu(C)], G = /* @__PURE__ */ new Date();
    G.setHours(23, 59, 59, 999);
    const K = R("hourly").filter((xe) => xe.uv_index != null && new Date(xe.datetime) > /* @__PURE__ */ new Date() && new Date(xe.datetime) <= G).reduce((xe, Ee) => !xe || Ee.uv_index > xe.uv ? { uv: Ee.uv_index, time: new Date(Ee.datetime) } : xe, void 0), he = fm[iu(C)], J = 216 * Math.min(1, Math.max(0.08, 0.4 + (C - 4.5) * (0.5 / 5.5))), fe = '<svg class="wbUvArt" viewBox="0 0 216 198" preserveAspectRatio="xMinYMin slice" aria-hidden="true"><defs><radialGradient id="' + I + 'uv-sun" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="' + J.toFixed(1) + '"><stop offset="0" style="stop-color:color-mix(in srgb, ' + he + ' 28%, #fff6dd)"></stop><stop offset=".62" style="stop-color:color-mix(in srgb, ' + he + ' 62%, #fff6dd)"></stop><stop offset="1" style="stop-color:' + he + '"></stop></radialGradient></defs><circle class="wbUvSun" cx="0" cy="0" r="' + J.toFixed(1) + '" fill="url(#' + I + 'uv-sun)"></circle></svg><div class="wbUvBig"><span class="wbUvNum">' + Fe(_t(Math.round(C), f.locale)) + '</span><span class="wbUvWord">' + Fe(H) + "</span></div>" + lc(qo(_t(Math.round(C), f.locale), ""));
    return Nn({
      icon: Gt.sunnyAlert,
      name: _e.metrics.uv_index,
      sub: K && K.uv > C ? bn(_e.uvPeak, { level: H, uv_index: _t(Math.round(K.uv), f.locale), time: wn(K.time, f) }) : H,
      zone: fe,
      cls: "wbUv",
      callouts: [jo(C, f), [_e.callout.now, _t(Math.round(C), f.locale) + " · " + H], [_e.callout.peak, K && K.uv > C ? _t(Math.round(K.uv), f.locale) + " at " + wn(K.time, f) : _e.callout.now]]
    });
  }
  function ii(f) {
    const b = R("daily")[0], x = Ce.temperatureHistory;
    if (!b || new Date(b.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !Qt(b.temperature) || !x || x.dailyHighs.length < rm) return "";
    const C = Number(b.temperature), H = x.dailyHighs.reduce((Ge, Te) => Ge + Te, 0) / x.dailyHighs.length, G = Math.round(C - H) || 0, K = G > 0 ? "above" : G < 0 ? "below" : "same", he = [...x.days, { date: /* @__PURE__ */ new Date(), high: C, today: !0 }], J = he.map((Ge) => Ge.high).concat(H), fe = Math.min(...J) - 1, xe = Math.max(...J) + 1, Ee = (Ge) => (1 - (Ge - fe) / (xe - fe)) * 100, Je = (Ge) => (Ge + 0.5) / he.length * 100, Ke = he.map((Ge, Te) => [Je(Te), Ee(Ge.high)]), Be = Ke.map(([Ge, Te], gt) => (gt ? "L" : "M") + Ge.toFixed(2) + " " + Te.toFixed(2)).join(""), tt = '<div class="wbCompareBars wbTrend" aria-hidden="true"><div class="wbTrendPlot"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><defs><linearGradient id="' + I + 'trend" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--primary)" stop-opacity=".28"></stop><stop offset="1" style="stop-color:var(--primary)" stop-opacity="0"></stop></linearGradient></defs><path class="wbTrendArea" d="' + Be + "L" + Ke[Ke.length - 1][0].toFixed(2) + " 100L" + Ke[0][0].toFixed(2) + ' 100Z" fill="url(#' + I + 'trend)"></path><line class="wbAvgLine" x1="0" x2="100" y1="' + Ee(H).toFixed(2) + '" y2="' + Ee(H).toFixed(2) + '" vector-effect="non-scaling-stroke"></line><path class="wbTrendLine" d="' + Be + '" vector-effect="non-scaling-stroke"></path></svg><span class="wbTrendAvg" style="top:' + Ee(H).toFixed(2) + '%">' + Fe(ua(f, H)) + "</span>" + he.map((Ge, Te) => {
      const gt = Ge.today ? " wbToday" : "", nt = "left:" + Je(Te).toFixed(2) + "%;top:" + Ee(Ge.high).toFixed(2) + "%";
      return '<i class="wbTrendDot' + gt + '" style="' + nt + '"></i><span class="wbAvgValue' + gt + '" style="' + nt + '">' + Fe(ua(f, Ge.high)) + "</span>";
    }).join("") + '</div><div class="wbTrendDays">' + he.map((Ge, Te) => '<span class="wbAvgDay' + (Ge.today ? " wbToday" : "") + '" style="left:' + Je(Te).toFixed(2) + '%">' + Fe(km(Ge.date, f)) + "</span>").join("") + "</div></div>";
    return Nn({
      icon: Gt.chartLine,
      name: _e.metrics.compared_to_average,
      double: !0,
      sub: bn(_e.highsLastDays, { days: x.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (G > 0 ? "+" : "") + Fe(ua(f, G)) + '</div><div class="wbCompareWords">' + Fe(_e.average[K]) + '</div><div class="wbCompareTemps">' + Fe(bn(_e.todayVsAverage, { today: ua(f, C), average: ua(f, H) })) + "</div></div>" + tt + "</div>"
    });
  }
  function ri(f, b) {
    const x = Na(f, b, "humidity");
    if (!x || !Qt(x.value)) return "";
    const C = Na(f, b, "dew_point"), H = Math.max(0, Math.min(100, Number(x.value)));
    return Nn({
      icon: Gt.waterPercent,
      name: _e.metrics.humidity,
      sub: C && Qt(C.value) ? bn(_e.dewPoint, { dew_point: ua(f, C.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + H + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + qo(_t(Math.round(Number(x.value)), f.locale), "%") + "</div>"
    });
  }
  function Pl(f, b) {
    var Ge, Te, gt;
    const x = Na(f, b, "pressure");
    if (!x || !Qt(x.value)) return "";
    const C = Number(x.value), H = (Ge = x.stateObj.attributes) == null ? void 0 : Ge.pressure_unit, G = ru(C, H), K = ((Te = Ce.pressureHistory) == null ? void 0 : Te.entityId) === x.stateObj.entity_id ? ru(Ce.pressureHistory.value, H) : void 0;
    let he;
    if (G !== void 0 && K !== void 0) {
      const nt = G - K;
      he = nt >= $p ? "rising" : nt <= -$p ? "falling" : "steady";
    }
    const J = bc(f, x.stateObj, "pressure", Math.round(C)), fe = x.stateObj, xe = (nt) => H === "inHg" ? Math.round(nt * 100) / 100 : Math.round(nt), Ee = (nt) => ou(f, fe, "pressure", xe(nt)), Je = K !== void 0 ? Ce.pressureHistory.value : void 0, Ke = Je !== void 0 ? xe(C - Je) : void 0, Be = (gt = fe.entity_id) != null && gt.startsWith("weather.") ? R("hourly").find((nt) => Qt(nt.pressure) && new Date(nt.datetime).getTime() >= Date.now() + 3 * zt - 30 * dn) : void 0, tt = [
      ...he ? [_e.advice[he]] : [],
      ...Je !== void 0 ? [[_e.callout.hoursAgo, Ee(Je)], [_e.callout.change, (Ke > 0 ? "+" : Ke < 0 ? "−" : "") + Ee(Math.abs(Ke))]] : [],
      ...Be ? [[_e.callout.inHours, Ee(Number(Be.pressure))]] : []
    ];
    return Nn({
      icon: Gt.gauge,
      name: _e.metrics.pressure,
      sub: he ? _e.pressure[he] : void 0,
      cls: "wbPressure",
      callouts: tt,
      zone: '<div class="wbTapeRow"><div class="wbTapeValue">' + qo(J.number) + '<span class="wbTapeUnit">' + Fe(J.unit) + "</span></div>" + (G !== void 0 ? io(f, G) : "") + "</div>"
    });
  }
  function io(f, b) {
    const H = Math.floor(b) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (G, K) => H + K).map((G) => {
      const K = 100 - (G - b) * 9;
      if (K < 22 || K > 178) return "";
      const he = G % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(K - 100) / 100) + '"><line class="wbTapeTick" x1="' + (he ? 2 : 8) + '" x2="26" y1="' + K + '" y2="' + K + '"></line>' + (he ? '<text class="wbTapeLabel" x="33" y="' + K + '">' + Fe(_t(G, f.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + Fe(_e.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + Fe(_e.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function si(f) {
    var J, fe;
    const b = lp(f), x = b ? f.states[b] : void 0;
    if (!x || ((J = Ce.rain) == null ? void 0 : J.entityId) !== b || !Qt(Ce.rain.change)) return "";
    const C = ((fe = x.attributes) == null ? void 0 : fe.unit_of_measurement) ?? "", H = L(f, "hourly"), G = Date.now() + no, K = R("hourly").filter((xe) => xe.precipitation != null && new Date(xe.datetime).getTime() <= G), he = K.reduce((xe, Ee) => xe + Number(Ee.precipitation), 0);
    return Nn({
      icon: Gt.rainy,
      name: _e.metrics.precipitation,
      sub: H && K.length ? bn(_e.rainExpected, { amount: _t(he, f.locale, { maximumFractionDigits: 1 }) + " " + ns(f, H, "precipitation") }) : _e.rainLast24h,
      visual: qo(_t(Ce.rain.change, f.locale, { maximumFractionDigits: 1 }), C) + (K.length > 1 ? zm(K.map((xe) => ({ label: "", value: Number(xe.precipitation) }))) : "")
    });
  }
  function li(f, b) {
    const x = Na(f, b, "visibility");
    if (!x || !Qt(x.value)) return "";
    const C = bc(f, x.stateObj, "visibility", x.value), H = Oh(Number(x.value), ns(f, x.stateObj, "visibility"));
    return Nn({
      icon: Gt.eyeOutline,
      name: _e.metrics.visibility,
      sub: _e.visibilityLevel[qh(H)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + H + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + Fe(ss(f, H)) + '</div><div class="wbSeaValue">' + qo(C.number, C.unit) + "</div></div>"
    });
  }
  function ss(f, b) {
    var G;
    const x = Fh((G = f.config) == null ? void 0 : G.country, b);
    if (x) return bn(_e.visibilityLandmarks, { from: x.from, to: x.to });
    const C = b / dm * 60;
    if (C < 60) {
      const K = C < 5 ? Math.max(1, Math.round(C)) : 5 * Math.round(C / 5);
      if (K < 60) return bn(_e.walkMinutes, { minutes: _t(K, f.locale) });
    }
    const H = Math.max(1, Math.round(C / 30) / 2);
    return H < 8 ? bn(_e.walkHours, { hours: _t(H, f.locale) }) : _e.walkDay;
  }
  function ls(f) {
    Ce.categories === void 0 && ai(f);
    const b = Vn(f), x = (J) => J.map((fe) => f.states[fe]).filter(js), C = x(b.air), H = x(b.pollen);
    if (!C.length && !H.length) return "";
    const G = [...C, ...H], K = (J) => H.includes(J) ? Gt.flower : Gt.airFilter, he = G.find((J) => J.entity_id === D.aq);
    return he ? Nl(f, he, K(he)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + Fe(_e.airQuality) + '</h2></div><div class="wbAqTiles">' + G.map((J) => '<button class="wbTile" data-wb="aq-open" data-entity="' + Fe(J.entity_id) + '"><span class="wbChip">' + wr(K(J)) + '</span><span class="wbText"><span class="wbName">' + Fe(ts(f, J)) + '</span><span class="wbSub">' + Fe(vr(f, J)) + "</span></span></button>").join("") + "</div></div>";
  }
  function Nl(f, b, x) {
    var xe, Ee, Je;
    const C = ((xe = b.attributes) == null ? void 0 : xe.unit_of_measurement) ?? "", H = ((Ee = b.attributes) == null ? void 0 : Ee.device_class) === "pm25" && C === Jp && Qt(b.state), G = Number(b.state), K = H ? sc(G) : void 0, he = ((Je = Ce.aqHistory) == null ? void 0 : Je.entityId) === b.entity_id ? Ce.aqHistory.points : void 0, J = (Ke) => Math.min(100, Math.max(0, Ke / rc * 100));
    let fe;
    if (he && he.length > 1) fe = du(he, (Ke) => (_t(Ke, f.locale, { maximumFractionDigits: 1 }) + " " + C).trim());
    else if (K) {
      let Ke = 0;
      const Be = of.map(([tt, Ge]) => {
        const Te = J(Math.min(Ge, rc)), gt = Xp[tt] + " " + Ke + "% " + Te + "%";
        return Ke = Te, gt;
      });
      fe = '<div class="wbScale" role="meter" aria-label="' + Fe(_e.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + rc + '" aria-valuenow="' + G + '" style="background:linear-gradient(to right, ' + Be.join(", ") + ')"><i style="left:' + J(G) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + rc + " " + Jp + "</span></div>";
    } else fe = '<span class="wbGraphNote"><span>' + Fe(vr(f, b)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + wr(x) + '</span><span class="wbText"><span class="wbName">' + Fe(ts(f, b)) + '</span><span class="wbSub">' + Fe(vr(f, b)) + (K ? " · " + Fe(_e.aqLevel[K]) : "") + '</span></span><button class="wbBack" title="' + Fe(_e.back) + '" data-wb="aq-close">' + wr(Gt.back) + '</button></div><div class="wbGraph">' + fe + "</div></div></div>";
  }
  const Et = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, Oi = (f) => f <= 50 ? "Good" : f <= 100 ? "Moderate" : f <= 150 ? "Unhealthy for some" : f <= 200 ? "Unhealthy" : f <= 300 ? "Very unhealthy" : "Hazardous";
  function jn(f) {
    const b = /* @__PURE__ */ new Map();
    return Object.values(f.states || {}).filter((x) => {
      var C;
      return x.entity_id.startsWith("sensor.") && yc.includes(((C = x.attributes) == null ? void 0 : C.device_class) ?? "") && js(x) && Bl(f, x.entity_id);
    }).sort((x, C) => x.entity_id.localeCompare(C.entity_id)).forEach((x) => {
      b.has(x.attributes.device_class) || b.set(x.attributes.device_class, x);
    }), yc.map((x) => b.get(x)).filter(Boolean);
  }
  const ro = (f) => Object.values(f.states || {}).filter((b) => {
    var x, C;
    return b.entity_id.startsWith("sensor.") && js(b) && Bl(f, b.entity_id) && (((C = (x = f.entities) == null ? void 0 : x[b.entity_id]) == null ? void 0 : C.translation_key) ?? b.entity_id).toLowerCase().includes("pollen");
  }), Sn = ["none", "very_low", "low", "moderate", "high", "very_high"], Xt = (f) => Qt(f.state) ? Number(f.state) : Sn.indexOf(String(f.state).toLowerCase().replace(/ /g, "_")), en = (f) => {
    const b = String(f).replace(/_/g, " ");
    return b[0].toUpperCase() + b.slice(1);
  }, zn = (f, b, x) => {
    const C = x ? f === "aqi" ? b <= 50 ? "good" : b <= 100 ? "moderate" : "poor" : f === "pm25" ? sc(b) : null : null;
    return C === "good" || C === "fair" ? _e.advice.window : C === "moderate" || C === null ? _e.advice.fine : _e.advice.closed;
  }, qi = ["good", "fair", "moderate", "poor", "very_poor", "extremely_poor"], Tr = (f) => qi[f <= 50 ? 0 : f <= 100 ? 1 : f <= 150 ? 2 : f <= 200 ? 3 : f <= 300 ? 4 : 5], fa = "M43 43q1 8 0 10M77 42q1 8 -1 10", Ya = {
    good: [fa, "M34 69Q61 98 86 67"],
    fair: [fa, "M40 74Q61 89 81 72"],
    moderate: [fa, "M41 79Q60 76 80 81"],
    poor: [fa, "M41 85Q60 73 80 86"],
    very_poor: ["M36 38l13 5M84 37l-13 5M43 48q1 7 0 9M77 47q1 7 -1 9", "M37 90Q60 64 84 89"],
    extremely_poor: ["M37 41l12 11M49 41l-12 11M71 40l12 11M83 40l-12 11", "M36 84q6 -8 12 0t12 0t12 0t12 0"]
  }, Cn = (f) => '<svg class="wbAqFace" viewBox="0 0 120 120" aria-hidden="true"><path d="M60 9C89 8 112 32 110 61C109 90 87 112 58 111C30 110 9 88 10 59C11 31 33 10 63 12"></path><path class="wbAqEyes" d="' + Ya[f][0] + '"></path><path d="' + Ya[f][1] + '"></path></svg>';
  function ds(f) {
    const b = jn(f), x = b[0];
    if (!x) return Nn({ icon: Gt.airFilter, name: _e.airQuality, sub: _e.noAir, visual: qo("–", ""), cls: "wbBase" });
    const C = x.attributes.device_class, H = Number(x.state), G = Qt(x.state), K = C === "aqi" && G ? Oi(H) : C === "pm25" && G ? Et[sc(H)] : vr(f, x), he = G ? _t(Math.round(H), f.locale) : String(x.state), J = C === "aqi" ? "AQI" : x.attributes.unit_of_measurement || "", fe = G && C === "aqi" ? Tr(H) : G && C === "pm25" ? sc(H) : null;
    return Nn(fe ? {
      icon: Gt.airFilter,
      name: _e.airQuality,
      sub: K,
      cls: "wbAqSmile",
      zone: '<div class="wbAqFill" style="background:' + Xp[fe] + '">' + Cn(fe) + '<div class="wbAqBig"><span class="wbAqNum">' + Fe(he) + "</span>" + (J ? '<span class="wbAqUnit">' + Fe(J) + "</span>" : "") + "</div></div>" + lc(qo(he, J)),
      callouts: [zn(C, H, G), ...b.slice(1, 3).map((xe) => [ts(f, xe), vr(f, xe)])]
    } : {
      icon: Gt.airFilter,
      name: _e.airQuality,
      sub: K,
      cls: "wbBase",
      zone: qo(he, J),
      callouts: [zn(C, H, G), ...b.slice(1, 3).map((xe) => [ts(f, xe), vr(f, xe)])]
    });
  }
  const Lr = [
    ["wbSeed", '<svg viewBox="0 0 22 30" aria-hidden="true"><path d="M11 28V11" fill="none" stroke="currentColor" stroke-width="1"></path><path d="M11 11L3 6M11 11L5 2.5M11 11L8.5 1M11 11L13.5 1M11 11L17 2.5M11 11L19 6" fill="none" stroke="currentColor" stroke-width=".8" stroke-linecap="round"></path><circle cx="11" cy="28.5" r="1.4" fill="currentColor"></circle></svg>'],
    ["wbGrain", '<svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="3.3" fill="currentColor"></circle><path d="M6 1.2v1.4M6 9.4v1.4M1.2 6h1.4M9.4 6h1.4M2.6 2.6l1 1M8.4 8.4l1 1M2.6 9.4l1-1M8.4 3.6l1-1" stroke="currentColor" stroke-width=".9" stroke-linecap="round"></path></svg>'],
    ["wbStem", '<svg viewBox="0 0 10 30" aria-hidden="true"><path d="M5 29Q3.6 18 5 8" fill="none" stroke="currentColor" stroke-width="1"></path><ellipse cx="5" cy="6" rx="2.3" ry="4.6" fill="currentColor"></ellipse></svg>']
  ], Ar = (f) => {
    const b = [1, 3, 5, 7, 10, 13][Math.max(0, Math.min(5, Number.isFinite(f) ? Math.round(f) : 0))];
    return '<div class="wbPollenAir" aria-hidden="true">' + Array.from({ length: b }, (x, C) => {
      const [H, G] = Lr[C % 3], K = 10 + C * 7 % 9, he = 2.6 + C * 5 % 4 * 0.4;
      return '<span class="wbFloat ' + H + '" style="top:' + (4 + C * 37 % 52) + "%;--x:" + (C * 29 % 90 + 4) + "%;--s:" + (0.8 + C * 13 % 5 / 10).toFixed(1) + ";animation-duration:" + K + "s;animation-delay:-" + (C * 2.3 % K).toFixed(1) + 's"><span class="wbPush"><span class="wbBob" style="animation-duration:' + he.toFixed(1) + "s;animation-delay:-" + (C * 0.7 % he).toFixed(1) + 's">' + G + "</span></span></span>";
    }).join("") + "</div>";
  };
  function Wi(f) {
    const b = ro(f).sort((H, G) => Xt(G) - Xt(H));
    if (!b.length) return Nn({ icon: Gt.flower, name: _e.pollen, sub: _e.noPollen, visual: qo("–", ""), cls: "wbBase" });
    const x = b[0], C = (H) => Qt(H.state) ? vr(f, H) : en(H.state);
    return Nn({
      icon: Gt.flower,
      name: _e.pollen,
      sub: ts(f, x) + " · " + C(x),
      cls: "wbBase wbPollen",
      zone: Ar(Xt(x)) + qo(C(x), ""),
      callouts: b.slice(0, 3).map((H) => [ts(f, H), C(H)])
    });
  }
  function Us(f) {
    const b = Date.now(), x = R("hourly").filter((G) => {
      const K = new Date(G.datetime).getTime();
      return K > b - zt && K < b + 12 * zt;
    }), C = x.find((G) => (G.precipitation_probability ?? 0) >= 50 || (G.precipitation ?? 0) >= 0.2), H = C ? bn(_e.rainFrom, { time: wn(new Date(Math.max(b, new Date(C.datetime).getTime())), f) }) : x.length ? _e.noRain12 : void 0;
    return Nn({ icon: Gt.radar, name: _e.rainRadar, sub: H, cls: "wbBase", visual: '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i></div>' });
  }
  const Vi = {
    current: St,
    hourly: pt,
    sun: Yt,
    moon: oi,
    wind: Fa,
    uv_index: Cr,
    compared_to_average: ii,
    humidity: ri,
    pressure: Pl,
    precipitation: si,
    visibility: li,
    air_quality: ls,
    aq_tile: ds,
    pollen_tile: Wi,
    radar_tile: Us
  }, ji = [["day", "Last 24 hours", 1], ["week", "Last 7 days", 7], ["month", "Last 30 days", 30]], di = (f, b) => {
    var x;
    return b.toLocaleDateString((x = f.locale) == null ? void 0 : x.language, { day: "numeric", month: "short" });
  }, Er = (f) => {
    const b = new Date(f);
    return b.setMinutes(b.getMinutes() - b.getTimezoneOffset()), b.toISOString().slice(0, 10);
  }, ra = () => {
    const f = D.range, b = Date.now();
    if (f.preset !== "custom") {
      const H = ji.find(([G]) => G === f.preset)[2];
      return [b - H * no, b];
    }
    const x = is(/* @__PURE__ */ new Date(f.from + "T00:00")).getTime(), C = Math.min(b, is(/* @__PURE__ */ new Date(f.to + "T00:00")).getTime() + no);
    return [Math.min(x, C - zt), C];
  }, so = (f) => {
    const b = D.range;
    if (b.preset !== "custom") return ji.find(([H]) => H === b.preset)[1];
    const [x, C] = ra();
    return b.from === b.to ? di(f, new Date(x)) : di(f, new Date(x)) + " – " + di(f, new Date(C - 1));
  }, Dt = () => D.range.preset === "custom" ? D.range.from + "_" + D.range.to : D.range.preset, Gn = (f, b) => b - f <= 2 * no, zi = (f, b, x, C) => Gn(x, C) ? wn(b, f) : di(f, b), Gi = (f, b = 60) => {
    const x = Math.max(1, Math.ceil(f.length / b));
    return f.filter((C, H) => H % x === 0 || H === f.length - 1);
  }, ko = (f, b, x, C, H = !1) => f.callWS({
    type: "history/history_during_period",
    start_time: new Date(x).toISOString(),
    end_time: new Date(C).toISOString(),
    entity_ids: [b],
    minimal_response: H,
    no_attributes: H,
    significant_changes_only: !1
  }), Un = (f) => async (b, x, C, H) => {
    const G = Na(b, x, f);
    if (!G) return [];
    const K = G.stateObj.entity_id, he = await ko(b, K, C, H);
    return Gi(((he == null ? void 0 : he[K]) ?? []).map((J) => {
      var Ee;
      const fe = ((Ee = J.a) == null ? void 0 : Ee[f]) ?? (Qt(J.s) ? Number(J.s) : void 0), xe = (J.lu ?? J.lc) * 1e3;
      return typeof fe == "number" && xe >= C && xe <= H ? { t: new Date(xe), value: fe } : null;
    }).filter(Boolean)).map((J) => ({ label: zi(b, J.t, C, H), value: J.value }));
  }, ci = (f, b) => async (x, C, H, G) => {
    const K = f(x);
    if (!K) return [];
    const he = K.entity_id, J = await ko(x, he, H, G, !0);
    return Gi(((J == null ? void 0 : J[he]) ?? []).map((fe) => {
      const xe = b(fe.s), Ee = fe.lu * 1e3;
      return xe == null || !Number.isFinite(xe) || Ee < H || Ee > G ? null : { t: new Date(Ee), value: xe };
    }).filter(Boolean)).map((fe) => ({ label: zi(x, fe.t, H, G), value: fe.value }));
  }, cs = (f, b) => async (x, C, H, G) => {
    const K = gd(x);
    if (!K) return [];
    const he = [];
    if (Gn(H, G)) for (let J = H; J <= G; J += zt / 2) he.push({ label: wn(new Date(J), x), value: f(new Date(J), K) });
    else for (let J = G; J >= H; J -= no) {
      const fe = new Date(J), xe = b(fe, K, x);
      xe != null && he.unshift({ label: di(x, fe), value: xe });
    }
    return Gi(he);
  }, Yn = (f) => ro(f).sort((b, x) => Xt(x) - Xt(b))[0], lo = (f, b, x) => {
    const C = Na(f, b, x);
    return C ? ns(f, C.stateObj, x) : "";
  }, Rt = {
    current: { name: () => _e.modes.temperature, icon: () => Gt.sunny, load: Un("temperature"), fmt: (f, b, x) => ua(f, x), now: (f, b) => {
      var x;
      return ua(f, (x = Na(f, b, "temperature")) == null ? void 0 : x.value);
    } },
    sun: {
      name: () => _e.sun,
      icon: () => Gt.sunny,
      load: cs((f, b) => Math.round(Mc(f, b.lat, b.lon) / qn), (f, b, x) => {
        const C = Dl(x, f);
        return C.rise && C.set ? Math.round((C.set - C.rise) / zt * 10) / 10 : null;
      }),
      fmt: (f, b, x, C) => C ? _t(x, f.locale) + "°" : _t(x, f.locale) + " h",
      sub: (f) => f ? "How high the sun was" : "Hours of daylight a day"
    },
    moon: {
      name: () => _e.moon,
      icon: () => Gt.night,
      load: cs((f) => Math.round(sp(f).fraction * 100), (f) => Math.round(sp(f).fraction * 100)),
      fmt: (f, b, x) => _t(x, f.locale) + "%",
      sub: () => "How much of it was lit"
    },
    uv_index: { name: () => _e.metrics.uv_index, icon: () => Gt.sunnyAlert, load: Un("uv_index"), fmt: (f, b, x) => _t(Math.round(x * 10) / 10, f.locale), now: (f, b) => {
      const x = Na(f, b, "uv_index");
      return x ? _t(Number(x.value), f.locale) : "";
    } },
    humidity: { name: () => _e.metrics.humidity, icon: () => Gt.waterPercent, load: Un("humidity"), fmt: (f, b, x) => _t(Math.round(x), f.locale) + "%", now: (f, b) => {
      const x = Na(f, b, "humidity");
      return x ? _t(Math.round(Number(x.value)), f.locale) + "%" : "";
    } },
    pressure: { name: () => _e.metrics.pressure, icon: () => Gt.gauge, load: Un("pressure"), fmt: (f, b, x) => _t(Math.round(x), f.locale) + " " + lo(f, b, "pressure"), now: (f, b) => {
      const x = Na(f, b, "pressure");
      return x ? _t(Math.round(Number(x.value)), f.locale) + " " + lo(f, b, "pressure") : "";
    } },
    wind: { name: () => _e.wind, icon: () => Gt.windy, load: Un("wind_speed"), fmt: (f, b, x) => _t(Math.round(x), f.locale) + " " + lo(f, b, "wind_speed"), now: (f, b) => {
      const x = Na(f, b, "wind_speed");
      return x ? _t(Math.round(Number(x.value)), f.locale) + " " + lo(f, b, "wind_speed") : "";
    } },
    visibility: { name: () => _e.metrics.visibility, icon: () => Gt.eyeOutline, load: Un("visibility"), fmt: (f, b, x) => _t(Math.round(x * 10) / 10, f.locale) + " " + lo(f, b, "visibility"), now: (f, b) => {
      const x = Na(f, b, "visibility");
      return x ? _t(Number(x.value), f.locale) + " " + lo(f, b, "visibility") : "";
    } },
    aq_tile: {
      name: (f) => jn(f)[0] ? ts(f, jn(f)[0]) : _e.airQuality,
      icon: () => Gt.airFilter,
      load: ci((f) => jn(f)[0], (f) => Qt(f) ? Number(f) : null),
      fmt: (f, b, x) => {
        var G, K;
        const C = jn(f)[0], H = (G = C == null ? void 0 : C.attributes) == null ? void 0 : G.device_class;
        return _t(Math.round(x * 10) / 10, f.locale) + (H === "aqi" ? " AQI" : (K = C == null ? void 0 : C.attributes) != null && K.unit_of_measurement ? " " + C.attributes.unit_of_measurement : "");
      },
      now: (f) => {
        const b = jn(f)[0];
        return b ? vr(f, b) : "";
      }
    },
    pollen_tile: {
      name: (f) => Yn(f) ? ts(f, Yn(f)) : _e.pollen,
      icon: () => Gt.flower,
      load: ci(Yn, (f) => {
        const b = Xt({ state: f });
        return b < 0 ? null : b;
      }),
      fmt: (f, b, x) => en(Sn[Math.round(x)] || ""),
      now: (f) => {
        const b = Yn(f);
        return b ? en(b.state) : "";
      }
    }
  }, Tn = {};
  let Oa = null;
  async function Ui(f) {
    var K;
    const b = l == null ? void 0 : l();
    if (!b || !Rt[f]) return;
    const x = f + "|" + Dt(), [C, H] = ra();
    if (Tn[x] && Date.now() - Tn[x].at < 5 * dn) return;
    Tn[x] = { at: Date.now(), points: null };
    try {
      Tn[x].points = await Rt[f].load(b, oo(b), C, H);
    } catch {
      Tn[x].points = [];
    }
    Ma(!0), Oa === f && D.graph === f && (Oa = null, Up(ee[f].el.querySelector(".wbGraphCard")));
    const G = D.graph === f && ((K = ee[f]) == null ? void 0 : K.el.querySelector(".wbGraph .wbChart"));
    G && af(G, G.querySelector(".wbLine"), G.querySelectorAll(".wbArea"));
  }
  function Mo(f, b) {
    const x = D.range, C = Er(Date.now()), [H, G] = ra(), K = x.pickFrom || Er(H), he = x.pickTo || Er(G - 1);
    return '<div class="wbRangePick' + (b ? " wbPickRight" : "") + '" role="dialog" aria-label="Choose date range"><div class="wbRangePresets">' + ji.map(([J, fe]) => '<button class="wbRangePreset" aria-pressed="' + (x.preset === J) + '" data-wb="graph-preset" data-range="' + J + '" data-wb-focus="graph-preset-' + J + '">' + Fe(fe) + "</button>").join("") + '</div><div class="wbRangeDates"><label><span>From</span><input type="date" data-range-from value="' + K + '" max="' + C + '"></label><label><span>To</span><input type="date" data-range-to value="' + he + '" max="' + C + '"></label></div><button class="wbRangeApply" data-wb="graph-apply" data-wb-focus="graph-apply">Show these dates</button></div>';
  }
  function ps(f, b, x) {
    var Je;
    const C = Rt[x], [H, G] = ra(), K = Gn(H, G), he = (Je = Tn[x + "|" + Dt()]) == null ? void 0 : Je.points, J = ee[x].el, fe = Math.max(120, J.clientWidth - 2 * 18 - 32), xe = Math.max(40, J.clientHeight - 2 * 18 - 44 - 14 - 32 - 14 - 24), Ee = he ? he.length > 1 ? du(he, (Ke) => C.fmt(f, b, Ke, K), xe, fe) : '<span class="wbGraphNote"><span>No history for these dates</span></span>' : '<span class="wbGraphNote"><span>Loading…</span></span>';
    return '<div class="wbCard wbSquare wbGraphCard"><div class="wbHead"><div class="wbChip wbPlain">' + rf(C.icon(f)) + '</div><div class="wbText"><span class="wbName">' + Fe(C.name(f)) + '</span><span class="wbSub">' + Fe(C.sub ? C.sub(K) : C.now ? C.now(f, b) : "") + '</span></div><button class="wbBack" title="' + Fe(_e.back) + '" data-wb="graph-close" data-wb-focus="graph-close">' + wr(Gt.back) + '</button></div><button class="wbRangeBtn" aria-haspopup="dialog" aria-expanded="' + !!D.picking + '" title="Choose date range" data-wb="graph-pick" data-wb-focus="graph-pick">' + wr(Gt.calendar) + "<span>" + Fe(so(f)) + "</span>" + wr(Gt.chevronDown) + '</button><div class="wbGraph">' + Ee + "</div></div>" + (D.picking ? Mo(f, J.getBoundingClientRect().left > innerWidth / 2) : "");
  }
  function Ma(f) {
    var Ee, Je, Ke;
    const b = l == null ? void 0 : l();
    if (!b || $) return;
    const x = oo(b);
    ce(b, x), Ce.lastFetch || ct();
    const C = Vn(b), H = su(b), G = lp(b), K = [
      ...x.map((Be) => b.states[Be]),
      b.states["sun.sun"],
      H && b.states[H],
      G && b.states[G],
      ...C.air.map((Be) => b.states[Be]),
      ...C.pollen.map((Be) => b.states[Be]),
      ...q.some((Be) => F.includes(Be)) ? [...jn(b), ...ro(b)] : [],
      b.locale,
      b.config,
      b.entities,
      Math.floor(Date.now() / dn)
    ];
    if (!f && z && K.length === z.length && K.every((Be, tt) => Be === z[tt])) return;
    z = K;
    const he = M.getRootNode(), J = he.activeElement || document.activeElement;
    for (const Be of q) {
      const tt = ee[Be];
      let Ge = "";
      try {
        Ge = (D.graph === Be ? ps(b, x, Be) : Vi[Be](b, x)) || "";
      } catch {
        Ge = "";
      }
      if (Ge === tt.html) continue;
      const Te = J && tt.el.contains(J) ? (Ee = J.dataset) == null ? void 0 : Ee.wbFocus : void 0, gt = tt.el.querySelector(".wbStripScroll"), nt = gt ? gt.scrollLeft : null;
      tt.html = Ge, tt.el.hidden = !Ge, tt.el.innerHTML = Ge;
      const Ft = tt.el.querySelector(".wbStripScroll");
      Ft && nt != null ? Ft.scrollTo({ left: nt }) : Ft != null && Ft.dataset.start && Ft.scrollTo({ left: Number(Ft.dataset.start) * Ft.clientWidth / Number(Ft.dataset.span) }), Te && !ie && ((Je = tt.el.querySelector('[data-wb-focus="' + Te + '"]')) == null || Je.focus());
    }
    Vo(), ie && ((Ke = M.querySelector('[data-wb-focus="' + ie + '"]')) == null || Ke.focus({ preventScroll: !0 }), ie = null);
    let fe = !1, xe = !1;
    for (const Be of q) {
      const tt = ee[Be], Ge = !tt.el.hidden, Te = j[Be] === "wide" || ue.includes(Be), gt = q.indexOf(Be) >= q.indexOf("moon"), nt = Ge && (gt && Te && !fe || !Te && !xe);
      nt && Te && (fe = !0), nt && !Te && (xe = !0), tt.el.toggleAttribute("data-break", nt);
    }
    hi(performance.now());
  }
  function pi() {
    Se || $ || (Se = !0, queueMicrotask(() => {
      Se = !1, Ma(!0);
    }));
  }
  function Ys() {
    const f = getComputedStyle(M), b = (K) => f.getPropertyValue(K).trim(), x = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([K, he]) => {
      b(he) && (x[K] = b(he));
    });
    const C = b("--color-text-primary") || "#f1f1f1", H = b("--color-bg-card") || "#222222", G = !!M.closest(".light");
    return { colors: { ...Wn, ...x }, ink: G ? C : H, paper: G ? H : C };
  }
  const Yi = (f, b) => {
    var x;
    f.width !== b.w && (f.width = b.w), f.height !== b.h && (f.height = b.h), (x = f.getContext("2d")) == null || x.putImageData(new ImageData(b.data, b.w, b.h), 0, 0);
  }, ui = () => v && !wm();
  function fi(f, b) {
    M.querySelectorAll("canvas[data-wb-strip]").forEach((x) => Hl(x, re[x.dataset.wbStrip], f, b));
  }
  function Hl(f, b, x, C) {
    if (!b || !f.getClientRects().length) return;
    const H = f.clientWidth, G = f.clientHeight;
    if (!H || !G) return;
    const K = { width: H, height: G, columns: b.columns || Yp, colors: C.colors, clock: x, ambient: ui(), seed: b.seed, soft: 1.5 };
    if (u === "smooth") {
      const he = Math.min(2, window.devicePixelRatio || 1), J = Math.round(H * he), fe = Math.round(G * he);
      f.width !== J && (f.width = J), f.height !== fe && (f.height = fe);
      const xe = f.getContext("2d");
      if (!xe) return;
      xe.setTransform(he, 0, 0, he, 0, 0), xh(xe, b.segs, K);
    } else Yi(f, wh(b.segs, { ...K, px: 2, oneBit: u === "onebit", ink: C.ink, paper: C.paper }));
  }
  function hi(f) {
    if ($) return;
    const b = Ys();
    if (u !== "smooth") {
      const x = ui();
      M.querySelectorAll("canvas[data-wb-wx]").forEach((C) => {
        C.getClientRects().length && Yi(C, Ou(wp(C.dataset.wbWx, b.colors), { size: Number(C.dataset.size) || 40, px: 2, oneBit: u === "onebit", colors: b.colors, ink: b.ink, paper: b.paper, clock: f, idle: x }));
      });
    }
    M.querySelectorAll("canvas[data-wb-sea]").forEach((x) => {
      const C = x.clientWidth, H = x.clientHeight, G = Number(x.dataset.wbSea), K = C + "x" + H + ":" + G + ":" + b.colors.skyClearDay;
      !C || !H || !(G > 0) || x.dataset.painted === K || (x.dataset.painted = K, Yi(x, Nh(C, H, G, b.colors)));
    }), fi(f, b);
  }
  function Zn(f) {
    if (me = 0, !($ || !ui())) {
      if (!document.hidden)
        if (u === "smooth") fi(f, Ys());
        else {
          const b = Math.floor(f / 100);
          b !== pe && (pe = b, hi(f));
        }
      me = requestAnimationFrame(Zn);
    }
  }
  function mi() {
    M.classList.toggle("wbMotion", ui()), !me && !$ && ui() && (me = requestAnimationFrame(Zn));
  }
  function Zi(f) {
    var x, C, H, G, K, he, J;
    const b = (C = (x = f.target).closest) == null ? void 0 : C.call(x, "[data-wb]");
    if (!b || !M.contains(b)) {
      const fe = (G = (H = f.target).closest) == null ? void 0 : G.call(H, ".wbItem"), xe = fe == null ? void 0 : fe.dataset.card;
      if (!fe || !M.contains(fe) || !Rt[xe] || D.graph === xe || M.closest(".tfEditing") || fe.offsetHeight < 200 || xe === "current" && k) return;
      D.graph = xe, ie = "graph-close", Ma(!0), (K = Tn[xe + "|" + Dt()]) != null && K.points ? Up(ee[xe].el.querySelector(".wbGraphCard")) : Oa = xe, Ui(xe);
      return;
    }
    switch (b.dataset.wb) {
      case "day": {
        D.openDay = Number(b.dataset.index), D.opener = b.dataset.wbFocus, ie = "back-day";
        const fe = Ve()[D.openDay], xe = !Ce.todayHistory || Ce.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - Ce.todayHistory.fetched > Jh;
        fe && El(new Date(fe.datetime), /* @__PURE__ */ new Date()) && xe && Re();
        break;
      }
      case "close-day":
        D.openDay = void 0, ie = D.opener, D.opener = void 0;
        break;
      case "open-page":
        k == null || k();
        return;
      case "day-mode":
        D.dayMode = b.dataset.mode;
        break;
      case "hourly-mode":
        D.hourlyMode = b.dataset.mode;
        break;
      case "hourly-view":
        D.hourlyView = b.dataset.view;
        try {
          localStorage.setItem(oe, D.hourlyView);
        } catch {
        }
        break;
      case "hours-day": {
        const fe = M.querySelector(".wbStripScroll");
        fe && fe.scrollTo({ left: Number(b.dataset.hours) * fe.clientWidth / Number(fe.dataset.span), behavior: "smooth" });
        return;
      }
      case "aq-open":
        D.aq = b.dataset.entity, ja(D.aq);
        break;
      case "aq-close":
        D.aq = void 0;
        break;
      case "graph-close":
        D.graph = void 0, D.picking = !1;
        break;
      case "graph-pick":
        D.picking = !D.picking, ie = D.picking ? "graph-preset-" + (D.range.preset === "custom" ? "day" : D.range.preset) : "graph-pick";
        break;
      case "graph-preset":
        D.range = { preset: b.dataset.range }, D.picking = !1, ie = "graph-pick", Ma(!0), Ui(D.graph);
        return;
      case "graph-apply": {
        let fe = D.range.pickFrom || ((he = M.querySelector("[data-range-from]")) == null ? void 0 : he.value), xe = D.range.pickTo || ((J = M.querySelector("[data-range-to]")) == null ? void 0 : J.value);
        if (!fe || !xe) return;
        fe > xe && ([fe, xe] = [xe, fe]), D.range = { preset: "custom", from: fe, to: xe }, D.picking = !1, ie = "graph-pick", Ma(!0), Ui(D.graph);
        return;
      }
      default:
        return;
    }
    Ma(!0);
  }
  function us(f) {
    var b, x, C, H, G, K;
    f.key === "Escape" && D.openDay !== void 0 && ((x = (b = f.target).closest) != null && x.call(b, '[data-wb-open="day"]')) ? (D.openDay = void 0, ie = D.opener, D.opener = void 0, Ma(!0)) : f.key === "Escape" && D.picking && ((H = (C = f.target).closest) != null && H.call(C, ".wbGraphCard")) ? (D.picking = !1, ie = "graph-pick", Ma(!0)) : f.key === "Escape" && D.graph && ((K = (G = f.target).closest) != null && K.call(G, ".wbGraphCard")) && (D.graph = void 0, Ma(!0));
  }
  let sa = null;
  function gi(f) {
    var x, C;
    const b = (C = (x = f.target).closest) == null ? void 0 : C.call(x, ".wbStripScroll");
    !b || f.button !== 0 || (sa = { startX: f.pageX, left: b.scrollLeft, moved: !1 }, b.classList.add("wbHeld"), window.addEventListener("mousemove", vi), window.addEventListener("mouseup", So, { once: !0 }));
  }
  function vi(f) {
    const b = M.querySelector(".wbStripScroll");
    if (!sa || !b) return;
    const x = f.pageX - sa.startX;
    !sa.moved && Math.abs(x) > 1 && (sa.moved = !0, b.classList.add("wbDragging")), b.scrollLeft = sa.left - x;
  }
  function So() {
    sa = null, window.removeEventListener("mousemove", vi);
    const f = M.querySelector(".wbStripScroll");
    if (!f) return;
    f.classList.remove("wbDragging", "wbHeld");
    const b = [...f.querySelectorAll(".wbSnap")];
    if (b.length) {
      const x = b.reduce((C, H) => Math.abs(H.offsetLeft - f.scrollLeft) < Math.abs(C.offsetLeft - f.scrollLeft) ? H : C);
      f.scrollTo({ left: x.offsetLeft, behavior: "smooth" });
    }
  }
  const fs = (f) => {
    var x, C;
    const b = f.target;
    (x = b.matches) != null && x.call(b, "[data-range-from]") ? D.range.pickFrom = b.value : (C = b.matches) != null && C.call(b, "[data-range-to]") && (D.range.pickTo = b.value);
  };
  M.addEventListener("change", fs), M.addEventListener("click", Zi), M.addEventListener("keydown", us), M.addEventListener("mousedown", gi);
  const hs = 64, ms = 30;
  let Kn = null, At = 0;
  const Dr = () => {
    At = 0, M.querySelectorAll(".wbPollen .wbPush").forEach((f) => {
      let b = 0, x = 0;
      if (Kn) {
        const C = f.parentElement.getBoundingClientRect(), H = C.left + C.width / 2 - Kn.x, G = C.top + C.height / 2 - Kn.y, K = Math.hypot(H, G) || 1;
        if (K < hs) {
          const he = (1 - K / hs) * ms;
          b = H / K * he, x = G / K * he;
        }
      }
      f.style.transform = b || x ? "translate(" + b.toFixed(1) + "px," + x.toFixed(1) + "px)" : "";
    }), Kn && (At = requestAnimationFrame(Dr));
  }, Ki = (f) => {
    var x, C;
    if (!((C = (x = f.target).closest) == null ? void 0 : C.call(x, ".wbPollen")) || Ba != null && Ba.matches) {
      Kn && (Kn = null, At || (At = requestAnimationFrame(Dr)));
      return;
    }
    Kn = { x: f.clientX, y: f.clientY }, At || (At = requestAnimationFrame(Dr));
  }, gs = () => {
    Kn = null, At || (At = requestAnimationFrame(Dr));
  };
  M.addEventListener("pointermove", Ki), M.addEventListener("pointerleave", gs);
  const qa = typeof ResizeObserver == "function" ? new ResizeObserver(() => hi(performance.now())) : null;
  qa == null || qa.observe(M);
  const Ba = (co = window.matchMedia) == null ? void 0 : co.call(window, "(prefers-reduced-motion: reduce)"), Ut = () => {
    mi(), hi(performance.now());
  };
  (Zs = Ba == null ? void 0 : Ba.addEventListener) == null || Zs.call(Ba, "change", Ut);
  const $n = [
    setInterval(() => {
      le = /* @__PURE__ */ new Date(), Ma(!0);
    }, sm),
    setInterval(() => {
      Oe = /* @__PURE__ */ new Date(), Ma(!0);
    }, lm),
    setInterval(ct, om)
  ];
  return Ma(!0), mi(), {
    update() {
      Ma(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      Ma(!0);
    },
    setStyle(f) {
      !f || f === u || (u = f, M.dataset.style = u, Ma(!0), mi());
    },
    destroy() {
      var f;
      cancelAnimationFrame(At), M.removeEventListener("pointermove", Ki), M.removeEventListener("pointerleave", gs), $ = !0, $n.forEach(clearInterval), me && cancelAnimationFrame(me), me = 0, qa == null || qa.disconnect(), (f = Ba == null ? void 0 : Ba.removeEventListener) == null || f.call(Ba, "change", Ut), So(), M.removeEventListener("click", Zi), M.removeEventListener("change", fs), M.removeEventListener("keydown", us), M.removeEventListener("mousedown", gi), ["daily", "hourly"].forEach(te), M.remove();
    }
  };
}
const vd = "#E1E1E1", uu = "#F7F4F0", dp = "#03a9f4", Nt = 14, jt = 172;
let Km = 0;
const ma = (n) => Math.round(n * 100) / 100, Ii = (n, l, i) => Math.max(l, Math.min(i, n)), kr = (n, l, i, u, v, y) => '<rect x="' + ma(n) + '" y="' + ma(l) + '" width="' + ma(i) + '" height="' + ma(u) + '" fill="' + v + '"' + (y != null ? ' opacity="' + y + '"' : "") + "/>", cp = (n) => n.map((l, i) => (i ? "L" : "M") + ma(l[0]) + " " + ma(l[1])).join("");
function pp(n) {
  const l = (n == null ? void 0 : n.attributes) || {};
  return l.device_class === "curtain" ? "curtain" : l.device_class === "blind" || l.current_tilt_position != null ? "venetian" : "blind";
}
const as = [
  [2, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]],
  [6.5, ["#0B0F1C", "#2E7FD6", "#F2743B", "#F1B6C8", 0.95]],
  [9.5, ["#8FC4EC", "#4DA3E8", "#F4FAFF", "#2F7FCF", 0.7]],
  [13, ["#9ED3F6", "#3F97E6", "#FFFFFF", "#2B86D9", 0.65]],
  [17, ["#9FC2E4", "#4A8ED4", "#FFD9B8", "#5E8FD6", 0.75]],
  [19, ["#4B5E86", "#3B86E0", "#FF6A3D", "#B07CE8", 0.95]],
  [21.5, ["#1A2140", "#1F3F7A", "#B4506E", "#3E59A6", 0.8]],
  [26, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]]
];
function $m(n) {
  const l = n < 2 ? n + 24 : n;
  let i = as[0], u = as[as.length - 1];
  for (let E = 0; E < as.length - 1; E++) if (l >= as[E][0] && l <= as[E + 1][0]) {
    i = as[E], u = as[E + 1];
    break;
  }
  const v = (l - i[0]) / (u[0] - i[0]), y = v * v * (3 - 2 * v), k = (E, I) => {
    const M = parseInt(E.slice(1), 16), W = parseInt(I.slice(1), 16);
    return "#" + [16, 8, 0].map((F) => Math.round((M >> F & 255) + ((W >> F & 255) - (M >> F & 255)) * y).toString(16).padStart(2, "0")).join("");
  };
  return { top: k(i[1][0], u[1][0]), bot: k(i[1][1], u[1][1]), warm: k(i[1][2], u[1][2]), cool: k(i[1][3], u[1][3]), op: i[1][4] + (u[1][4] - i[1][4]) * y, t: l };
}
function Xm(n) {
  const l = parseInt(n.slice(1), 16), i = (l >> 16 & 255) / 255, u = (l >> 8 & 255) / 255, v = (l & 255) / 255, y = Math.max(i, u, v), k = Math.min(i, u, v);
  let E = 0, I = 0;
  const M = (y + k) / 2;
  if (y !== k) {
    const W = y - k;
    I = M > 0.5 ? W / (2 - y - k) : W / (y + k), E = (y === i ? (u - v) / W + (u < v ? 6 : 0) : y === u ? (v - i) / W + 2 : (i - u) / W + 4) / 6;
  }
  return [E * 360, I * 100, M * 100];
}
function bf(n, l, i) {
  l = Ii(l, 0, 100) / 100, i = Ii(i, 0, 100) / 100;
  const u = (k) => (k + n / 30) % 12, v = l * Math.min(i, 1 - i), y = (k) => i - v * Math.max(-1, Math.min(u(k) - 3, Math.min(9 - u(k), 1)));
  return "#" + [y(0), y(8), y(4)].map((k) => Math.round(k * 255).toString(16).padStart(2, "0")).join("");
}
const [wf, xf, yf] = Xm(vd), fu = bf(wf, xf, Math.max(6, yf - 14)), Jm = bf(wf, xf, Math.min(96, yf + 16));
function Qm(n, l, i, u, v) {
  const y = jt / 2, k = jt * 0.12, E = y - (y - k) * n, I = (ue) => ue ** 1.3, M = Ii(i, -1.5, 1.5), W = (ue) => -(Math.abs(M) * 4.6 * ue ** 1.5) * Math.sign(M), F = n * 1.4, q = (ue, ee) => {
    const $ = Math.min(4.8, Math.abs(i) * 2.6) * (ee ? 1 : -1) * Math.sign(i || 1), z = ee ? ue + E : ue, me = ee ? ue : ue + E, pe = (Ce) => z + W(Ce) + $ * Math.sin(Ce * Math.PI * 1.2 + u) * I(Ce) * 1.4 + F * Math.sin(Ce * Math.PI * 2 + u * 0.6) * I(Ce) * (ee ? 1 : -1), Se = [[me, Nt]];
    for (let Ce = 0; Ce <= 12; Ce++) Se.push([pe(Ce / 12), Nt + jt * Ce / 12]);
    Se.push([me, Nt + jt]);
    let ie = '<path d="' + cp(Se) + 'Z" fill="' + vd + '"/>';
    if (v) return ie;
    const oe = 1.35 + ((ee ? i > 0 : i < 0) ? 0.35 : 0), ne = (Ce) => {
      const le = Ce / 7, Oe = ee ? 1 - le : le, re = (1 - Oe) ** 1.3, Ze = ue + E * le;
      return Array.from({ length: 13 }, (A, R) => {
        const L = R / 12;
        return [Ze + W(L) * re + $ * oe * Math.sin(L * Math.PI * 1.2 + u - Oe * 3.2) * I(L) * 1.4 * re + F * 1.6 * Math.sin(L * Math.PI * 2 + u * 0.6 - Oe * 2.5) * I(L) * n * (0.4 + 0.6 * re), Nt + jt * L];
      });
    }, D = [1, 2, 3, 4, 5, 6].map(ne);
    for (let Ce = 0; Ce < 6; Ce += 2) ie += '<path d="' + cp(D[Ce]) + cp(D[Ce + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return ie;
  }, j = y - (y - k) * l;
  return { body: q(Nt, !0) + q(Nt + jt - E, !1), rails: [{ x: Nt + j - 4, y: Nt, w: 4, h: jt }, { x: Nt + jt - j, y: Nt, w: 4, h: jt }], head: 6.4 };
}
function eg(n, l, i) {
  const u = jt * (1 - n);
  let v = "";
  if (u > 1 && (v += kr(Nt, Nt, jt, u, vd), !i))
    for (let y = 1; y < 7; y += 2) v += kr(Nt + jt * y / 7, Nt, jt / 7, u, "#fff");
  return { body: v, rails: [{ x: Nt, y: Nt + jt * (1 - l) - 7, w: jt, h: 11 }], head: 10.4 };
}
function tg(n, l, i, u) {
  const v = 9 - 7 * (i / 100), y = Nt + jt * (1 - n), k = Math.ceil(jt / 10) + 1, E = Nt + v / 2, I = (Nt + jt - v / 2 - E) / (k - 1), M = 0.8, W = 0.6, F = Array.from({ length: k }, (ue, ee) => Math.max(E + ee * W, Math.min(E + ee * I, y - v / 2 - (k - 1 - ee) * W))), q = F.slice(0, -1).map((ue, ee) => Ii((F[ee + 1] - ue - W) / (I - W), 0, 1));
  q.push(q[k - 2]);
  let j = "";
  return F.forEach((ue, ee) => {
    const $ = M + (v - M) * q[ee], z = Math.max(0.5, $ / 2), me = Math.max(0.4, $ * 0.114);
    j += kr(Nt, ue - z, jt, Math.max(1, $), vd), !u && $ > 2.2 && (j += kr(Nt, ue + z - me, jt, me, fu) + kr(Nt, ue - z, jt, me * 0.55, Jm, 0.75));
  }), u || [0.22, 0.78].forEach((ue) => {
    j += kr(Nt + jt * ue - 0.7, Nt, 1.4, Math.max(0, F[k - 1] + 1 - Nt), fu, 0.85);
  }), { body: j, rails: [{ x: Nt, y: Nt + jt * (1 - l) - 8, w: jt, h: 8 }], head: 8.8 };
}
const hu = (n, l, i, u, v, y, k) => n === "curtain" ? Qm(l, i, v, y, k) : n === "venetian" ? tg(l, i, u, k) : eg(l, i, k);
function ag(n, l) {
  let i = "", u = "";
  return l.forEach((v) => {
    const y = v.w > v.h, k = Ii(y ? Nt + jt / 2 : v.x + v.w / 2, 17, 183), E = Ii(y ? v.y + v.h / 2 : Nt + jt / 2, 17, 183);
    i += y ? kr(Nt, Ii(v.y + v.h / 2, Nt, Nt + jt) - 1, jt, 2, dp) : kr(Ii(v.x + v.w / 2, Nt, Nt + jt) - 1, Nt, 2, jt, dp);
    const I = y ? "M" + ma(k - 4) + " " + ma(E - 3) + "l4 -3l4 3M" + ma(k - 4) + " " + ma(E + 3) + "l4 3l4 -3" : "M" + ma(k - 3) + " " + ma(E - 4) + "l-3 4l3 4M" + ma(k + 3) + " " + ma(E - 4) + "l3 4l-3 4";
    u += '<circle cx="' + ma(k) + '" cy="' + ma(E) + '" r="11" fill="' + dp + '" filter="url(#' + n + 's)"/><path d="' + I + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: i, knobs: u };
}
function ng(n, l) {
  const i = /* @__PURE__ */ new Date(), u = $m(i.getHours() + i.getMinutes() / 60), v = 42 + 18 * Math.sin(u.t * 0.5), y = u.t >= 5 && u.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (u.t - 5) / 15) : 80, k = hu(l.kind, l.pos / 100, l.bar / 100, l.tilt, l.vel, l.ph, !1), E = l.ghostAlpha > 4e-3 && l.ghost != null ? hu(l.kind, l.ghost / 100, l.ghost / 100, l.tilt, 0, 0, !0).body : "", I = l.grip > 4e-3 ? ag(n, k.rails) : null, M = (W) => kr(Nt, Nt, jt, jt, W);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + n + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + n + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + u.top + '"/><stop offset="1" stop-color="' + u.bot + '"/></linearGradient><radialGradient id="' + n + 'w" cx="' + ma(v) + '%" cy="' + ma(y) + '%" r="58%"><stop offset="0" stop-color="' + u.warm + '" stop-opacity="' + ma(u.op * 0.8) + '"/><stop offset="1" stop-color="' + u.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + n + 'k" cx="' + ma(100 - v * 0.8) + '%" cy="' + ma(100 - y * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + u.cool + '" stop-opacity="' + ma(u.op * 0.64) + '"/><stop offset="1" stop-color="' + u.cool + '" stop-opacity="0"/></radialGradient><filter id="' + n + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + uu + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + n + 'c)">' + M("url(#" + n + "l)") + M("url(#" + n + "w)") + M("url(#" + n + "k)") + (E ? '<g opacity="' + ma(l.ghostAlpha) + '">' + E + "</g>" : "") + k.body + '<rect x="14" y="14" width="172" height="' + k.head + '" fill="' + vd + '" filter="url(#' + n + 's)"/></g>' + (I ? '<g clip-path="url(#' + n + 'c)" opacity="' + ma(l.grip) + '">' + I.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + uu + '" stroke-width="3"/>' + (I ? '<g opacity="' + ma(l.grip) + '">' + I.knobs + "</g>" : "") + "</svg>";
}
function og({ onMove: n, onSet: l }) {
  var ie;
  const i = "cv" + ++Km, u = document.createElement("div");
  u.className = "tfCoverArt";
  const v = (ie = window.matchMedia) == null ? void 0 : ie.call(window, "(pointer: coarse)").matches;
  let y = null;
  const k = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let E = 0, I = !1, M = !1, W = null, F = 0, q = 0;
  const j = () => (y == null ? void 0 : y.kind) === "curtain" ? "x" : "y", ue = () => W || I || M || y.moving || y.target != null ? 1 : v ? performance.now() < q ? 1 : 0.4 : 0, ee = () => {
    u.innerHTML = ng(i, { kind: y.kind, pos: k.pos, bar: y.target ?? k.pos, tilt: k.tilt, vel: k.vel, ph: k.ph, ghost: k.gpos, ghostAlpha: k.ghost, grip: k.grip });
  };
  function $(oe) {
    E = 0;
    const ne = k.last ? Math.min(0.064, (oe - k.last) / 1e3) : 1 / 60, D = ne * 60;
    k.last = oe;
    const Ce = y.pos - k.pos, le = k.pos;
    k.pos += Math.sign(Ce) * Math.min(Math.abs(Ce), Math.max(10.5, Math.abs(Ce) * 1.4) * ne), Math.abs(y.pos - k.pos) < 0.03 && (k.pos = y.pos), k.vel = k.vel * 0.86 + (k.pos - le) / D * 0.14, Math.abs(k.vel) < 0.015 && k.pos === y.pos && (k.vel = 0), (k.pos !== le || k.vel) && (k.ph += (0.06 + Math.abs(k.vel) * 0.03) * D);
    const Oe = y.tilt - k.tilt;
    k.tilt += Math.sign(Oe) * Math.min(Math.abs(Oe), Math.max(60, Math.abs(Oe) * 4) * ne);
    const re = ue();
    k.grip += (re - k.grip) * Math.min(1, ne * (re > k.grip ? 11 : 3.5)), Math.abs(re - k.grip) < 0.01 && (k.grip = re);
    const Ze = y.target != null && Math.abs(y.target - k.pos) > 0.5 ? 0.22 : 0;
    y.target != null && (k.gpos = y.target), k.ghost += (Ze - k.ghost) * Math.min(1, ne * (Ze > k.ghost ? 16 : 3)), Math.abs(Ze - k.ghost) < 4e-3 && (k.ghost = Ze), ee(), k.pos !== y.pos || k.vel || k.tilt !== y.tilt || k.grip !== re || k.ghost !== Ze ? E = requestAnimationFrame($) : k.last = 0;
  }
  const z = () => {
    y && !E && (E = requestAnimationFrame($));
  }, me = setInterval(() => {
    y && !E && ee();
  }, 60 * 1e3), pe = (oe) => {
    const ne = u.getBoundingClientRect();
    return j() === "x" ? (oe.clientX - ne.left) / ne.width : (oe.clientY - ne.top) / ne.height;
  };
  u.addEventListener("pointerdown", (oe) => {
    var Ce;
    if (!(y != null && y.canSet) || oe.button > 0) return;
    oe.preventDefault(), (Ce = u.setPointerCapture) == null || Ce.call(u, oe.pointerId);
    const ne = y.target ?? y.pos, D = u.getBoundingClientRect();
    W = { p0: pe(oe), from: ne, x0: oe.clientX, value: null, side: null }, y.kind === "curtain" && ne > 0 && (W.side = (oe.clientX - D.left) / D.width < 0.5 ? "L" : "R"), z();
  }), u.addEventListener("pointermove", (oe) => {
    if (!W) return;
    let ne;
    if (y.kind === "curtain") {
      if (!W.side) {
        const Ce = oe.clientX - W.x0;
        if (Math.abs(Ce) < 4) return;
        W.side = Ce < 0 ? "L" : "R";
      }
      const D = (jt / 2 - jt * 0.12) / 200;
      ne = W.from + (W.side === "L" ? -1 : 1) * ((pe(oe) - W.p0) / D) * 100;
    } else ne = W.from - (pe(oe) - W.p0) / (jt / 200) * 100;
    W.value = Ii(ne, 0, 100), n(W.value);
  });
  const Se = () => {
    if (!W) return;
    const oe = W.value;
    W = null, oe != null && l(Math.round(oe)), z();
  };
  return u.addEventListener("pointerup", Se), u.addEventListener("pointercancel", Se), u.addEventListener("lostpointercapture", Se), u.addEventListener("pointerenter", () => {
    I = !0, z();
  }), u.addEventListener("pointerleave", () => {
    I = !1, z();
  }), u.addEventListener("focus", () => {
    M = u.matches(":focus-visible"), z();
  }), u.addEventListener("blur", () => {
    M = !1, z();
  }), u.addEventListener("keydown", (oe) => {
    if (!(y != null && y.canSet)) return;
    const ne = Math.round(y.target ?? y.pos), D = oe.shiftKey ? 10 : 1, Ce = { ArrowUp: ne + D, ArrowRight: ne + D, ArrowDown: ne - D, ArrowLeft: ne - D, PageUp: ne + 25, PageDown: ne - 25, Home: 0, End: 100 }[oe.key];
    if (Ce == null) return;
    oe.preventDefault();
    const le = Ii(Ce, 0, 100);
    n(le), clearTimeout(F), F = setTimeout(() => l(le), 500);
  }), {
    el: u,
    update(oe) {
      const ne = !y;
      y = oe, ne && (k.pos = y.pos, k.tilt = y.tilt, q = performance.now() + 1500, v && setTimeout(z, 1600)), u.classList.toggle("x", j() === "x"), u.classList.toggle("y", j() === "y"), y.canSet ? (u.tabIndex = 0, u.setAttribute("role", "slider"), u.setAttribute("aria-valuemin", "0"), u.setAttribute("aria-valuemax", "100"), u.setAttribute("aria-valuenow", String(Math.round(y.target ?? y.pos))), u.setAttribute("aria-orientation", j() === "x" ? "horizontal" : "vertical")) : u.setAttribute("role", "img"), u.setAttribute("aria-label", y.name + (y.canSet ? " position" : "")), u.setAttribute("aria-valuetext", y.text), z();
    },
    destroy() {
      cancelAnimationFrame(E), E = 0, clearInterval(me), clearTimeout(F), u.remove();
    }
  };
}
const mu = "move-assistant-density", Ni = {
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
}, ae = (n) => String(n ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), gu = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', vu = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', bu = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', dc = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, wu = {
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14v2H5z"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>'
}, xu = 1, ig = 4, yu = 16, ku = 32, rg = 128, sg = 256, Mu = 16384, lg = 1, dg = 2, Su = 4, cg = 8, pg = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, Cu = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, ug = { curtain: "curtains", blind: "blind", venetian: "blinds" }, fd = {
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
}, Tu = ["covers", "people", "openings", "leaks", "vacuum"], Lu = "move_assistant_house", Au = "move-assistant-house-used", up = ["switch", "fan", "input_boolean", "automation"], Eu = "move-assistant-house-look", fg = [["look", "Look"], ["house", "House page"], ["weather", "Weather"]], hg = [["popup", "Popup"], ["sheet", "Sheet"]], mg = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], gg = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], vg = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], cc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', bg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', wg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', Du = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', fp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', xg = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z"/></svg>', _u = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/></svg>', pc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>', Bu = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', kf = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + n.map((l) => '<path d="' + l + '"/>').join("") + "</svg>", uc = kf(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), Ru = kf(["M20 6L9 17L4 12"]), Hi = (n, l = "") => '<span class="tfAreaGlyph" data-icon-for="' + ae(n || "") + '"' + (l ? ' data-icon-name="' + ae(l) + '"' : "") + "></span>", yg = (n) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (n ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', kg = 1, Mg = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], Pu = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, fc = ["door", "window", "garage_door", "opening"], Nu = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, hd = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], Sg = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], Cg = 10, Tg = 20, Lg = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, Ag = ["living room", "bedroom", "office"];
function Eg(n, { config: l, getHass: i }) {
  var Ct, Zt, nn;
  const u = (e) => n.getElementById(e), v = u("app"), y = l || {}, k = String(y.layout || "").toLowerCase().replace("_", "-") === "test-focus", E = String(y.page || "").toLowerCase() === "overview";
  let I = Ni.get(mu) === "1", M = {};
  const W = (e) => {
    var t;
    return (t = i()) == null ? void 0 : t.callWS(e);
  }, F = (e, t, o) => W({ type: "call_service", domain: e, service: t, service_data: o }), q = n.querySelector("#appearancePane .toggleList");
  q && !u("densityToggle") && (q.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), u("densityToggle").addEventListener("click", () => {
    I = !I, Ni.set(mu, I ? "1" : "0"), ne();
  }));
  const j = [
    ["weather", "Weather", "The forecast under Home.", (e) => e.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (e) => e.startsWith("sensor.") && et(e).device_class === "power" && /^(W|kW)$/.test(et(e).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (e) => e.startsWith("alarm_control_panel.")]
  ], ue = (e, t, o, s) => '<div class="themeChoice" id="' + e + '" role="group" aria-label="' + t + '">' + s.map(([c, h]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + o + '="' + c + '">' + h + "</button>").join("") + "</div>", ee = (e, t, o, s) => '<div class="toggleRow"' + (s ? ' id="' + s + '"' : "") + "><div><strong>" + e + "</strong>" + (t ? '<div class="status">' + t + "</div>" : "") + "</div>" + o + "</div>";
  function $() {
    var P, Q;
    if (!k || u("housePane")) return;
    const e = u("settingsView");
    e.querySelector(".settingsTitle").textContent = "HomeCore settings";
    const t = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], o = (se, Z) => '<div class="houseTab' + (se === "look" ? " active" : "") + '" data-house-pane="' + se + '"><section class="card">' + Z + "</section></div>";
    e.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + t.map(([se, Z]) => '<button class="tab segBtn' + (se === "look" ? " active" : "") + '" type="button" data-house-tab="' + se + '">' + Z + "</button>").join("") + "</div>" + // Appearance in groups (Matt, 8 Nov), each one's title inside its card as a card header (Matt, 9 Nov)
    o("look", fg.map(([se, Z]) => '<div class="tfSetGroup"><div class="toggleList" data-look-group="' + se + '"><div class="tfCardTitle">' + Z + "</div></div></div>").join("")) + // Lights as cards by default, with a Cards | Table choice (Matt, 9 Nov)
    o("lights", '<div class="tfLightView"><div class="themeChoice" role="group" aria-label="Show lights as"><button class="wxLayoutBtn" type="button" data-light-view="cards">Cards</button><button class="wxLayoutBtn" type="button" data-light-view="table">Table</button></div></div><p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div><div class="tfLightCards" id="lightCards"></div>') + o("sources", '<div class="toggleList">' + j.map(([se, Z, X]) => ee(Z, X, '<select class="settingsSelect" data-source="' + se + '" aria-label="' + Z + '"></select>')).join("") + "</div>") + o("sums", '<div class="toggleList">' + Object.entries(fd).map(([se, Z]) => ee(Z.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + se + '" aria-label="' + Z.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const s = (se) => e.querySelector('[data-look-group="' + se + '"]'), c = (se) => se == null ? void 0 : se.closest(".toggleRow");
    [c(e.querySelector(".themeBtn"))].forEach((se) => se && s("look").appendChild(se));
    const h = c(u("densityToggle"));
    h && (h.hidden = !0), [c(u("moreInfoChoice")), c(u("namesChoice"))].forEach((se) => se && s("house").appendChild(se)), s("house").insertAdjacentHTML("beforeend", ee("Lights", "How lights show on the house page.", ue("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + ee("Pad", "What the Dual Axis Controller’s pad sets on its tile.", ue("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow")), [c(u("hoursChoice")), c(u("wxStyleChoice"))].forEach((se) => se && s("weather").appendChild(se));
    const p = u("housePane"), g = p.querySelector(".houseTabs"), w = g.querySelector(".rubberIndicator"), B = "homecore-light-view", N = (se) => {
      p.classList.toggle("tfLightCardsOn", se === "cards"), p.querySelectorAll("[data-light-view]").forEach((Z) => Z.setAttribute("aria-pressed", String(Z.dataset.lightView === se))), Ni.set(B, se);
    };
    N(Ni.get(B) === "table" ? "table" : "cards"), p.querySelector(".tfLightView").addEventListener("click", (se) => {
      const Z = se.target.closest("[data-light-view]");
      Z && N(Z.dataset.lightView);
    }), new ResizeObserver(() => me()).observe(p), (Q = (P = document.fonts) == null ? void 0 : P.ready) == null || Q.then(() => me());
    const T = (se) => {
      const Z = g.querySelector(".tab.active");
      w.style.transition = "none", se ? vc(w, w.offsetLeft, w.offsetWidth, Z.offsetLeft, Z.offsetWidth) : (w.style.left = Z.offsetLeft + "px", w.style.width = Z.offsetWidth + "px");
    };
    new ResizeObserver(() => T(!1)).observe(g), p.addEventListener("click", (se) => {
      const Z = se.target.closest("[data-house-tab]");
      if (Z) {
        g.querySelectorAll(".tab").forEach((Y) => Y.classList.toggle("active", Y === Z)), p.querySelectorAll(".houseTab").forEach((Y) => Y.classList.toggle("active", Y.dataset.housePane === Z.dataset.houseTab)), Z.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), T(!0), me();
        return;
      }
      const X = se.target.closest("[data-light-fav]");
      if (X) {
        $i(X.dataset.lightFav);
        return;
      }
      const V = se.target.closest("[data-light-pick]");
      if (V) {
        const [Y, ze] = V.dataset.lightPick.split("|"), It = { ...St[Y] };
        V.dataset.v ? It[ze] = V.dataset.v : delete It[ze], St[Y] = It, xt(), [...sa.keys()].filter((st) => st.endsWith(":" + ze)).forEach((st) => sa.delete(st)), xo();
        return;
      }
      const we = se.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!we || we.disabled)) {
        if (we.dataset.lights && (St.lights = we.dataset.lights), we.dataset.dacPad && (St.dacPad = we.dataset.dacPad), (we.dataset.lights || we.dataset.dacPad) && (xt(), sa.clear()), we.dataset.sumToggle) {
          const Y = we.dataset.sumToggle, ze = new Set(Re.hiddenSums || []);
          ze.has(Y) ? ze.delete(Y) : ze.add(Y), Re = { ...Re, hiddenSums: [...ze] }, va();
        }
        xo();
      }
    }), p.addEventListener("change", (se) => {
      const Z = se.target;
      Z.dataset.source && (Re = { ...Re, sources: { ...Re.sources || {}, [Z.dataset.source]: Z.value || void 0 } }, va());
      const X = Z.dataset.lightStyle || Z.dataset.lightPad;
      if (X) {
        const V = Z.dataset.lightStyle ? "lightStyles" : "lightPads", we = { ...St[V] };
        Z.value ? we[X] = Z.value : delete we[X], St[V] = we, xt(), [...sa.keys()].filter((Y) => Y.endsWith(":" + X)).forEach((Y) => sa.delete(Y));
      }
      xo();
    });
  }
  function z() {
    var T, P;
    vi() && us();
    const e = u("housePane");
    if (!e) return;
    const t = !!customElements.get(Zn);
    e.querySelectorAll("[data-lights]").forEach((Q) => Q.setAttribute("aria-pressed", String(Q.dataset.lights === St.lights))), u("lightsRow").querySelector(".status").textContent = t || !vi() ? "How lights show on the house page." : Zi === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", e.querySelectorAll("[data-dac-pad]").forEach((Q) => Q.setAttribute("aria-pressed", String(Q.dataset.dacPad === St.dacPad))), u("dacPadRow").hidden = !vi();
    for (const Q of e.querySelectorAll("[data-source]")) {
      if (Q === n.activeElement) continue;
      const [se] = j.find(([X]) => X === Q.dataset.source), Z = Object.keys(M).filter(j.find(([X]) => X === se)[3]).sort((X, V) => Ie(X).localeCompare(Ie(V)));
      Q.dataset.sig !== Z.join(",") && (Q.innerHTML = '<option value="">Automatic</option>' + Z.map((X) => '<option value="' + ae(X) + '">' + ae(Ie(X)) + "</option>").join(""), Q.dataset.sig = Z.join(",")), Q.value = Z.includes((T = Re.sources) == null ? void 0 : T[se]) ? Re.sources[se] : "";
    }
    e.querySelectorAll("[data-sum-toggle]").forEach((Q) => {
      const se = !(Re.hiddenSums || []).includes(Q.dataset.sumToggle);
      Q.classList.toggle("on", se), Q.setAttribute("aria-checked", String(se));
    });
    const o = u("lightRows"), s = u("lightCards"), c = n.activeElement, h = o != null && o.contains(c) || s != null && s.contains(c) ? c : null;
    if (!o || h != null && h.matches("select")) {
      me();
      return;
    }
    const p = new Set(Te()), g = (Q, se, Z, X) => '<option value="' + Q + '"' + (Q === Z ? " selected" : "") + ">" + se + "</option>", w = Object.keys(M).filter((Q) => Q.startsWith("light.")).sort((Q, se) => !Ve.get(Q) - !Ve.get(se) || (Ve.get(Q) || "").localeCompare(Ve.get(se) || "") || Ie(Q).localeCompare(Ie(se))).map((Q) => {
      const se = St.lightStyles[Q] || "", Z = St.lightPads[Q] || "", X = p.has(Q), V = ae(Ie(Q));
      return "<tr><td><strong>" + V + "</strong></td><td>" + ae(Ve.get(Q) || "—") + "</td><td>" + ae(fa(Q)) + '</td><td class="metaSwitchCol"><button class="switch' + (X ? " on" : "") + '" type="button" role="switch" aria-checked="' + X + '" data-light-fav="' + ae(Q) + '" aria-label="' + V + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + ae(Q) + '" aria-label="' + V + ' tile">' + g("", "Default", se) + g("tile", "HomeCore tile", se) + g("dac", "Dual Axis Controller", se) + '</select></td><td><select class="settingsSelect" data-light-pad="' + ae(Q) + '" aria-label="' + V + ' pad"' + (gi(Q) ? "" : " disabled") + ">" + g("", "Default", Z) + g("temperature", "Temperature", Z) + g("colour", "Colour", Z) + "</select></td></tr>";
    }).join(""), B = (Q, se, Z, X, V) => '<div class="themeChoice" role="group" aria-label="' + Z + '">' + X.map(([we, Y]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (we === V) + '" data-light-pick="' + Q + "|" + ae(se) + '" data-v="' + we + '">' + Y + "</button>").join("") + "</div>", N = Object.keys(M).filter((Q) => Q.startsWith("light.")).sort((Q, se) => !Ve.get(Q) - !Ve.get(se) || (Ve.get(Q) || "").localeCompare(Ve.get(se) || "") || Ie(Q).localeCompare(Ie(se))).map((Q) => {
      const se = p.has(Q), Z = ae(Ie(Q)), X = [Ve.get(Q), fa(Q)].filter(Boolean).map(ae).join(" · ");
      return '<div class="toggleList"><div class="toggleRow"><div><strong>' + Z + '</strong><div class="status">' + X + "</div></div></div>" + ee("Favourite", "", '<button class="switch' + (se ? " on" : "") + '" type="button" role="switch" aria-checked="' + se + '" data-light-fav="' + ae(Q) + '" aria-label="' + Z + ' is a favourite"></button>') + ee("Tile", "", B("lightStyles", Q, Z + " tile", [["", "Default"], ["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]], St.lightStyles[Q] || "")) + (gi(Q) ? ee("Pad", "", B("lightPads", Q, Z + " pad", [["", "Default"], ["temperature", "Temperature"], ["colour", "Colour"]], St.lightPads[Q] || "")) : "") + "</div>";
    }).join("");
    o.dataset.html !== w && (o.innerHTML = w, o.dataset.html = w), s.dataset.html !== N && (s.innerHTML = N, s.dataset.html = N), h != null && h.dataset.lightFav && ((P = (s.contains(h) ? s : o).querySelector('[data-light-fav="' + CSS.escape(h.dataset.lightFav) + '"]')) == null || P.focus({ preventScroll: !0 })), me();
  }
  function me() {
    var t, o, s;
    const e = u("housePane");
    if (e)
      for (const c of e.querySelectorAll(".themeChoice")) {
        const h = [...c.querySelectorAll("button")];
        let p = (t = c.nextElementSibling) != null && t.classList.contains("tfChoiceList") ? c.nextElementSibling : null;
        if (!p) {
          p = document.createElement("select"), p.className = "settingsSelect tfChoiceList", p.setAttribute("aria-label", c.getAttribute("aria-label") || ((s = (o = c.closest(".toggleRow")) == null ? void 0 : o.querySelector("strong")) == null ? void 0 : s.textContent) || ""), p.addEventListener("change", () => {
            var T;
            return (T = h[Number(p.value)]) == null ? void 0 : T.click();
          }), c.after(p);
          const N = () => {
            p.innerHTML = h.map((P, Q) => '<option value="' + Q + '"' + (P.disabled ? " disabled" : "") + ">" + ae(P.textContent) + "</option>").join("");
            const T = h.findIndex((P) => P.getAttribute("aria-pressed") === "true" || P.classList.contains("active"));
            T >= 0 && (p.value = String(T));
          };
          new MutationObserver(N).observe(c, { subtree: !0, attributes: !0, attributeFilter: ["aria-pressed", "class", "disabled"] }), N();
        }
        const g = (N) => {
          c.hidden !== !N && (c.hidden = !N), p.hidden !== N && (p.hidden = N);
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
        const B = h.every((N) => N.scrollWidth <= N.clientWidth + 1);
        c.hidden = w, g(B), p.dataset.fit = "1";
      }
  }
  const pe = document.createElement("div");
  pe.className = "densityBadge", pe.setAttribute("aria-live", "polite"), pe.hidden = !0, v.appendChild(pe);
  let Se = 0;
  function ie() {
    if (!I) return;
    const e = u("homeView"), t = (h) => h.offsetParent !== null && !h.closest("[hidden]");
    e.querySelectorAll(":scope .card, :scope .tfAction").forEach((h) => {
      t(h) && (h.dataset.h = Math.round(h.getBoundingClientRect().height) + " px");
    });
    const o = [...e.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(t), s = window.innerHeight, c = o.filter((h) => {
      const p = h.getBoundingClientRect();
      return p.height > 0 && p.top >= 0 && p.bottom <= s + 0.5;
    }).length;
    pe.hidden = !e.classList.contains("active"), pe.innerHTML = "<b>" + c + "</b><small>of " + o.length + " readings on screen</small>";
  }
  const oe = () => {
    I && requestAnimationFrame(ie);
  };
  function ne() {
    var e;
    v.classList.toggle("showDensity", I), (e = u("densityToggle")) == null || e.classList.toggle("on", I), pe.hidden = !I, clearInterval(Se), I && (Se = setInterval(ie, 1e3), ie());
  }
  window.addEventListener("scroll", oe, { capture: !0, passive: !0 }), window.addEventListener("resize", oe, { passive: !0 });
  const D = n.querySelector("#homeView .grid"), Ce = document.createElement("style");
  n.appendChild(Ce);
  const le = new ResizeObserver(() => Ze()), Oe = /* @__PURE__ */ new Set(), re = (e) => {
    const t = e.getBoundingClientRect().height;
    return Math.abs(t - e.offsetHeight) < 1 ? t : e.offsetHeight;
  };
  function Ze() {
    const e = v.classList.contains("tfAreaOpen") && !v.classList.contains("tfWeatherOpen");
    if (D.classList.toggle("tfStack", e), Oe.forEach((w) => {
      (!e || !w.isConnected) && (le.unobserve(w), Oe.delete(w));
    }), !e) {
      Ce.textContent = "";
      return;
    }
    const t = getComputedStyle(D), o = parseFloat(t.columnGap) || 0, s = t.gridTemplateColumns.split(" ").length, c = [...D.children].filter((w) => w.dataset.k && w.offsetParent);
    Ce.disabled = !0;
    const h = c.map((w) => {
      const B = getComputedStyle(w), N = /span (\d+)/.exec(B.gridColumnStart + " " + B.gridColumnEnd);
      return Math.min(s, N ? +N[1] : B.gridColumnEnd === "-1" ? s : 1);
    });
    Ce.disabled = !1;
    let p = 0;
    const g = c.map((w, B) => {
      Oe.has(w) || (Oe.add(w), le.observe(w));
      const N = h[B];
      p + N > s && (p = 0);
      const T = p + 1;
      return p = (p + N) % s, '#homeView .grid.tfStack>[data-k="' + CSS.escape(w.dataset.k) + '"]{grid-column:' + T + " / span " + N + ";grid-row-end:span " + Math.max(1, Math.ceil(re(w) + o)) + "}";
    }).join(`
`);
    Ce.textContent !== g && (Ce.textContent = g);
  }
  new MutationObserver(Ze).observe(D, { childList: !0 }), new MutationObserver(Ze).observe(v, { attributes: !0, attributeFilter: ["class"] });
  let A = null, R = null, L = null;
  const te = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), ye = 6;
  let Me = null;
  const Le = /* @__PURE__ */ new Map(), Xe = /* @__PURE__ */ new Map(), ct = /* @__PURE__ */ new Map();
  let Re = { favourites: null }, ja = {}, ai = {}, oo = [], Vn = null;
  const ia = (() => {
    try {
      return JSON.parse(Ni.get(Au)) || {};
    } catch {
      return {};
    }
  })();
  let Ve = /* @__PURE__ */ new Map(), Kt = 0;
  function va() {
    clearTimeout(Kt), Kt = setTimeout(() => Promise.resolve(W({ type: "frontend/set_user_data", key: Lu, value: Re })).catch(() => {
    }), 400);
  }
  const St = (() => {
    let e = {};
    try {
      e = JSON.parse(Ni.get(Eu)) || {};
    } catch {
    }
    const t = (o, s) => Object.fromEntries(Object.entries(o || {}).filter(([, c]) => s.includes(c)));
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
  })(), xt = () => Ni.set(Eu, JSON.stringify(St)), yt = () => {
    v.dataset.more = St.more, v.dataset.names = St.names, Hs();
  };
  k && q && !u("moreInfoChoice") && (u("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + hg.map(([e, t]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (St.more === e) + '" data-more-style="' + e + '">' + t + "</button>").join("") + "</div></div>"
  ), u("moreInfoChoice").addEventListener("click", (e) => {
    const t = e.target.closest("[data-more-style]");
    t && (St.more = t.dataset.moreStyle, xt(), yt(), u("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === t))));
  }), u("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + mg.map(([e, t]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (St.names === e) + '" data-names-style="' + e + '">' + t + "</button>").join("") + "</div></div>"
  ), u("namesChoice").addEventListener("click", (e) => {
    const t = e.target.closest("[data-names-style]");
    t && (St.names = t.dataset.namesStyle, St.namesPicked = !0, xt(), yt(), u("namesChoice").querySelectorAll("[data-names-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === t))));
  }), u("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + gg.map(([e, t]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (St.hoursWindow === e) + '" data-hours-window="' + e + '">' + t + "</button>").join("") + "</div></div>"
  ), u("hoursChoice").addEventListener("click", (e) => {
    const t = e.target.closest("[data-hours-window]");
    t && (St.hoursWindow = t.dataset.hoursWindow, xt(), it == null || it.refresh(), u("hoursChoice").querySelectorAll("[data-hours-window]").forEach((o) => o.setAttribute("aria-pressed", String(o === t))));
  }), u("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + vg.map(([e, t]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (St.wxStyle === e) + '" data-wx-style="' + e + '">' + t + "</button>").join("") + "</div></div>"
  ), u("wxStyleChoice").addEventListener("click", (e) => {
    const t = e.target.closest("[data-wx-style]");
    t && (St.wxStyle = t.dataset.wxStyle, xt(), it == null || it.setStyle(St.wxStyle), ba == null || ba.forEach((o) => o.setStyle(St.wxStyle)), u("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((o) => o.setAttribute("aria-pressed", String(o === t))));
  })), $();
  let qe = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const kn = /* @__PURE__ */ new Map();
  let zs = "";
  const rs = k ? oh({ onChange: () => Pa() }) : null;
  k && v.classList.add("house");
  const ka = Object.assign(document.createElement("div"), { className: "tfBento" });
  let it = null, Mn = null, ni = !1;
  function Mr(e) {
    const t = tn();
    if (v.classList.toggle("houseBento", !!t), it && (Mn !== t || e == null) && (it.destroy(), it = null), !t || e == null) {
      ka.remove();
      return;
    }
    ka.isConnected || D.append(ka), ka.style.order = e, !it && !ni && (it = pu(ka, { getHass: i, entityId: t, style: St.wxStyle, hoursWindow: () => St.hoursWindow }), Mn = t);
  }
  const Sr = [
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
  ], ea = Sr.map(([e]) => e), cn = ["aq", "pollen", "radar", "hourly", "sun", "moon", "uv", "humidity", "pressure", "wind", "visibility"], pt = { hourly: 2 }, yo = Object.fromEntries(Sr.map(([e]) => [e, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + e })]));
  let ba = null, Fi = null;
  function $e(e) {
    const t = tn();
    ba && Fi !== t && (ba.forEach((o) => o.destroy()), ba = null), Object.values(yo).forEach((o) => t ? !o.isConnected && D.append(o) : o.remove()), t && !ba && !ni && (ba = /* @__PURE__ */ new Map(), Fi = t), dt();
  }
  function dt() {
    if (!ba || ni) return;
    const e = new Set(Ht().hidden);
    Sr.forEach(([t, o]) => {
      ba.has(t) || e.has(t) && !(Lt != null && Lt.fromTray && Lt.key === t) || ba.set(t, pu(yo[t], { getHass: i, entityId: Fi, style: St.wxStyle, cards: o, onOpen: t === "wx" ? () => ln("weather") : void 0 }));
    });
  }
  const et = (e) => {
    var t;
    return ((t = M[e]) == null ? void 0 : t.attributes) || {};
  }, Ie = (e) => et(e).friendly_name || e, Yt = (e, t) => ei(e) || (Number(et(e).supported_features) & t) === t, lt = (e) => {
    const t = String(e ?? "").replace(/_/g, " ");
    return t.charAt(0).toUpperCase() + t.slice(1);
  }, Ia = (e, t = 1) => Number(e).toLocaleString(void 0, { minimumFractionDigits: t, maximumFractionDigits: t }), $t = (e) => (e == null ? void 0 : e.state) === "on" ? e.attributes.brightness != null ? Math.max(1, Math.round(e.attributes.brightness / 2.55)) : 100 : 0, Vo = (e) => et(e).supported_color_modes || [], Gs = (e, t) => [5, 3, 1].map((o) => {
    const s = (o + e / 60) % 6;
    return 255 * (1 - t / 100 * Math.max(0, Math.min(s, 4 - s, 1)));
  }), oi = (e) => (e /= 255, e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)), Fa = (e) => 0.2126 * oi(e[0]) + 0.7152 * oi(e[1]) + 0.0722 * oi(e[2]), jo = (e, t) => {
    const o = Fa(e), s = Fa(t);
    return (Math.max(o, s) + 0.05) / (Math.min(o, s) + 0.05);
  }, Cr = 0.55, ii = ["hs", "xy", "rgb", "rgbw", "rgbww"], ri = (e) => {
    const t = et(e), o = ii.includes(t.color_mode);
    return (o && t.rgb_color ? t.rgb_color : o && t.hs_color ? Gs(...t.hs_color) : [255, 170, 0]).map((s) => Math.round(Math.max(0, Math.min(255, s))));
  }, Pl = { heat: [255, 111, 34], cool: [33, 150, 243], heat_cool: [255, 193, 7], auto: [76, 175, 80], dry: [255, 152, 0], fan_only: [0, 188, 212] };
  function io(e) {
    var s;
    const t = e.split(".")[0], o = (s = M[e]) == null ? void 0 : s.state;
    return !o || o === "unavailable" || o === "unknown" ? null : t === "light" ? o === "on" ? ri(e) : null : t === "climate" ? Pl[o] || null : t === "cover" ? o !== "closed" ? [146, 107, 199] : null : t === "lock" ? o !== "locked" ? [244, 67, 54] : null : t === "media_player" ? ["playing", "paused", "on", "buffering"].includes(o) ? [3, 169, 244] : null : t === "humidifier" || t === "valve" ? ["on", "open", "opening", "closing"].includes(o) ? [33, 150, 243] : null : t === "vacuum" ? ["cleaning", "returning"].includes(o) ? [0, 150, 136] : null : t === "alarm_control_panel" ? o !== "disarmed" && o !== "triggered" ? [76, 175, 80] : null : t === "fan" ? o === "on" ? [0, 188, 212] : null : (t === "switch" || t === "input_boolean") && o === "on" ? [255, 193, 7] : null;
  }
  function si(e, t, o = !1) {
    const [s, c, h] = e.map((se) => se / 255), p = Math.max(s, c, h), g = Math.min(s, c, h), w = p - g, B = w ? (p === s ? (c - h) / w + (c < h ? 6 : 0) : p === c ? (h - s) / w + 2 : (s - c) / w + 4) * 60 : 0, N = (p + g) / 2, T = w ? w / (1 - Math.abs(2 * N - 1)) : 0, P = w < 0.1 ? Math.min(T, 0.25) : 1, Q = (se) => {
      const Z = (V) => (V + B / 30) % 12, X = P * Math.min(se, 1 - se);
      return [0, 8, 4].map((V) => Math.round(255 * (se - X * Math.max(-1, Math.min(Z(V) - 3, 9 - Z(V), 1)))));
    };
    for (let se = 0.5; o ? se < 0.96 : se > 0.04; se += o ? 0.01 : -0.01) {
      const Z = Q(se);
      if (jo(Z, t) >= 3) return "rgb(" + Z.join(",") + ")";
    }
    return o ? "#ffffff" : "#26221e";
  }
  const li = (e) => {
    const t = [1, 3, 5].map((o) => parseInt(e.slice(o, o + 2), 16));
    return Math.max(...t) - Math.min(...t) < 26 ? "" : ";--sum-d:" + si(t, [58, 58, 58], !0) + ";--sum-l:" + si(t, [230, 230, 230]);
  }, ss = { d: ["#ffb894", "#d2b4ff", "#9dcbff"], l: ["#f0946a", "#b48ae6", "#6fa8e8"] }, ls = () => [0, 1, 2].map((e) => "--g" + e + "-d:" + ss.d[e] + ";--g" + e + "-l:" + ss.l[e]).join(";"), Nl = '<svg class="tfGradDefs" aria-hidden="true" focusable="false"><defs><linearGradient id="hcClimateGrad" x1="0" y1="0" x2="0" y2="1">' + [0.15, 0.5, 0.85].map((e, t) => '<stop offset="' + e + '" style="stop-color:var(--g' + t + ')"/>').join("") + "</linearGradient></defs></svg>", Et = (e) => {
    const t = e.map((o) => Math.round(o + (255 - o) * Cr));
    return "--light-soft:rgb(" + t.join(",") + ");--light-ink:" + si(e, t);
  }, Oi = (e) => Et(ri(e)), jn = (e) => {
    const t = io(e);
    return t ? ' data-light style="' + Et(t) + '"' : "";
  }, ro = (e) => {
    const t = Vo(e);
    return t.length ? t.some((o) => o !== "onoff") : et(e).brightness != null;
  }, Sn = (e) => [et(e).min_color_temp_kelvin || 2e3, et(e).max_color_temp_kelvin || 6500], Xt = (e) => new Date(e).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function en(e) {
    const t = Math.max(1, Math.round((Date.now() - e) / 1e3));
    if (t < 10) return "Just now";
    if (t < 60) return t + " seconds ago";
    const o = Math.round(t / 60);
    if (o < 60) return o + (o === 1 ? " minute ago" : " minutes ago");
    const s = Math.round(o / 60);
    if (s < 24) return s + (s === 1 ? " hour ago" : " hours ago");
    const c = Math.round(s / 24);
    return c + (c === 1 ? " day ago" : " days ago");
  }
  const zn = (e) => {
    var t;
    return et(e).current_position ?? (((t = M[e]) == null ? void 0 : t.state) === "closed" ? 0 : 100);
  }, qi = (e) => {
    var t;
    return qa("pos", e, ((t = Le.get(e)) == null ? void 0 : t.pos) ?? zn(e));
  }, Tr = (e) => {
    var t;
    return qa("tilt", e, ((t = Le.get(e)) == null ? void 0 : t.tilt) ?? et(e).current_tilt_position);
  };
  function fa(e) {
    var p;
    const t = M[e];
    if (!t) return "Not found";
    if (t.state === "unavailable") return "Unavailable";
    const o = t.attributes, s = e.split(".")[0];
    if (s === "light") {
      if (t.state !== "on") return "Off";
      const g = o.color_temp_kelvin;
      return (ro(e) ? $t(t) + "%" : "On") + (o.color_mode === "color_temp" && g ? " · " + Number(g).toLocaleString() + "k" : ii.includes(o.color_mode) ? " · Colour" : "");
    }
    if (s === "climate") return (t.state === "off" ? "Off" : lt(o.hvac_action || t.state)) + " · " + Ia(o.current_temperature) + " °C now";
    if (s === "cover") {
      const g = zn(e), w = o.current_tilt_position;
      return t.state === "opening" || t.state === "closing" ? lt(t.state) + " - " + g + "%" : (g <= 0 ? "Closed" : g >= 100 ? "Open" : "Partially open") + (w > 0 && w < 100 ? " · tilted" : "");
    }
    if (s === "humidifier") return t.state !== "on" ? "Off" : lt(o.action || "on") + " · " + o.current_humidity + "% now";
    if (s === "vacuum") return lt(t.state) + (t.state === "cleaning" && ((p = o.rooms) != null && p.length) ? " · " + o.rooms.join(", ") : "") + (o.battery_level != null ? " · " + o.battery_level + "%" : "");
    if (s === "media_player") return t.state === "playing" || t.state === "paused" ? (t.state === "paused" ? "Paused · " : "") + (o.media_title || "Playing") : lt(t.state);
    if (s === "alarm_control_panel") return Pu[t.state] || lt(t.state);
    if (s === "lock" || s === "valve") return lt(t.state);
    if (s === "switch") return t.state === "on" ? "On" : "Off";
    if (s === "plant") return t.state === "ok" ? "Healthy" : lt(o.problem);
    if (s === "binary_sensor")
      return o.device_class === "battery" ? t.state === "on" ? "Low" : "Normal" : o.device_class === "problem" ? t.state === "on" ? "Problem" : "OK" : o.device_class === "moisture" ? t.state === "on" ? "Wet" : "Dry" : fc.includes(o.device_class) ? t.state === "on" ? "Open" : "Closed" : t.state === "on" ? "Detected" : "Clear";
    if (o.rang) return "Rang at " + Xt(o.rang);
    const c = i();
    if (c != null && c.formatEntityState && !ei(e))
      try {
        return c.formatEntityState(t);
      } catch {
      }
    const h = Number(t.state);
    if (t.state !== "" && Number.isFinite(h)) {
      const g = Math.abs(h) >= 100 ? 0 : Math.abs(h) >= 10 ? 1 : 2, w = o.unit_of_measurement ? o.unit_of_measurement === "%" ? "%" : " " + o.unit_of_measurement : "";
      return h.toLocaleString(void 0, { maximumFractionDigits: g }) + w + (o.plant_low ? " · Low" : o.plant_high ? " · High" : "");
    }
    return lt(t.state);
  }
  const Ya = (e) => e >= 1e3 ? Ia(e / 1e3, 2) + " kW" : Math.round(e).toLocaleString() + " W";
  function Cn(e) {
    var o, s;
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
      } else c.textContent || (c.textContent = (c.dataset.letter || Ie(c.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (o = e.querySelectorAll) == null || o.call(e, ".tfIcon").forEach(Lr), (s = e.classList) != null && s.contains("tfIcon") && Lr(e), di();
  }
  const ds = /* @__PURE__ */ new Map();
  function Lr(e) {
    var h, p, g;
    const t = (((h = e.closest("[data-k]")) == null ? void 0 : h.dataset.k) || "") + "|" + (e.dataset.iconFor || ((p = e.querySelector("[data-icon-for]")) == null ? void 0 : p.dataset.iconFor) || e.getAttribute("aria-label") || ""), o = getComputedStyle(e), s = { backgroundColor: o.backgroundColor, color: o.color }, c = ds.get(t);
    ds.set(t, s), !(!c || c.backgroundColor === s.backgroundColor && c.color === s.color || (g = window.matchMedia) != null && g.call(window, "(prefers-reduced-motion: reduce)").matches) && e.animate([c, s], { duration: Ha.warp.cdur, delay: Ha.warp.cdelay, easing: Va[Ha.warp.ease], fill: "backwards" });
  }
  const Ar = "[data-icon-for]>:is(ha-state-icon,ha-icon),.tfIcon>svg", Wi = (e) => {
    const t = [e];
    for (; t.length; ) {
      const o = t.shift();
      if (o.localName === "svg") return o;
      o.shadowRoot && t.push(...o.shadowRoot.children), t.push(...o.children);
    }
    return null;
  };
  function Us(e) {
    var Q, se, Z;
    const t = e.localName === "svg" ? e : Wi(e), o = t ? [...t.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")] : [];
    if (!o.length) return !t;
    const s = (Q = e.closest(".tfIcon")) == null ? void 0 : Q.offsetWidth;
    if (s === void 0) return !0;
    if (!s) return !1;
    const c = s + "|" + o.map((X) => X.getAttribute("d") || X.localName).join("|");
    if (e.dataset.fitted === c) return !0;
    let h = 1 / 0, p = 1 / 0, g = -1 / 0, w = -1 / 0;
    for (const X of o) {
      const V = X.getBBox(), we = getComputedStyle(X), Y = we.stroke !== "none" ? (parseFloat(we.strokeWidth) || 0) / 2 : 0;
      !V.width && !V.height || (h = Math.min(h, V.x - Y), p = Math.min(p, V.y - Y), g = Math.max(g, V.x + V.width + Y), w = Math.max(w, V.y + V.height + Y));
    }
    if (!(g > h)) return !1;
    const B = (Z = (se = t.viewBox) == null ? void 0 : se.baseVal) != null && Z.width ? t.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, N = s > 40 ? s * (26 / 40) : s - 14, T = N * B.width / Math.max(g - h, w - p), P = T / B.width;
    return e.localName === "svg" ? (e.style.width = T + "px", e.style.height = T + "px") : e.style.setProperty("--mdc-icon-size", T + "px"), t.style.translate = ((B.x + B.width / 2 - (h + g) / 2) * P).toFixed(2) + "px " + ((B.y + B.height / 2 - (p + w) / 2) * P).toFixed(2) + "px", e.dataset.fitted = c, !0;
  }
  let Vi = 0;
  function ji(e = 0) {
    clearTimeout(Vi), [...n.querySelectorAll(Ar)].filter((o) => !Us(o)).length && e < 5 && (Vi = setTimeout(() => ji(e + 1), 300));
  }
  function di() {
    clearTimeout(Vi), Vi = setTimeout(() => ji(), 60);
  }
  const Er = (e) => {
    var t, o, s;
    return e.startsWith("light.") && M[e] && !et(e).icon && !((s = (o = (t = i()) == null ? void 0 : t.entities) == null ? void 0 : o[e]) != null && s.icon) ? "mdi:lightbulb" : "";
  }, ra = (e, t, o) => (t = t || Er(e), ' data-icon-for="' + ae(e) + '"' + (t ? ' data-icon-name="' + ae(t) + '"' : "") + (o ? ' data-letter="' + ae(o) + '"' : "")), so = (e) => e.endsWith("_solar_power") ? "mdi:solar-power-variant" : et(e).rang ? "mdi:doorbell" : "", Dt = (e, t, o, s) => ae([e, t, o, s ? JSON.stringify(s) : ""].join("|")), Gn = (e) => ae(JSON.stringify(e));
  function zi(e) {
    const t = ae(Ie(e) + ", " + fa(e));
    return '<div class="activityRow tap" role="button" tabindex="0" data-more="' + ae(e) + '" aria-label="' + t + '. More info"><div class="tfIcon" aria-hidden="true"' + ra(e, so(e)) + '></div><div><div class="activityRowName">' + ae(Ie(e)) + '</div><div class="activityRowMeta">' + ae(fa(e)) + "</div></div></div>";
  }
  const Gi = (e, t, o) => '<div class="activityRow" aria-label="' + ae(e + ", " + t) + '"><div class="tfIcon" aria-hidden="true"' + ra("", o, e) + '></div><div><div class="activityRowName">' + ae(e) + '</div><div class="activityRowMeta">' + ae(t) + "</div></div></div>";
  function ko(e, t, o, s, c = "", h = null, p = "") {
    return '<section class="card tfCard' + (p ? " " + p : "") + '" data-tf data-k="' + ae(e) + '" style="order:' + t + '" aria-label="' + ae(o) + '"><div class="activityHeader">' + (h ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + ae(h) + '" aria-label="' + ae(o + (M[h] ? ", " + fa(h) : "") + ". More info") + '">' + ae(o) + "</button>" : '<div class="activityTitle">' + ae(o) + "</div>") + '</div><div class="activityRows">' + s.join("") + "</div>" + c + "</section>";
  }
  function Un(e, t) {
    const o = "readings:" + e.id, s = e.readings.map((c) => zi(c));
    return e.power != null && s.push(Gi("Power now", Ya(e.power), "mdi:flash")), ko(o, t, "Readings", s);
  }
  function ci(e, t) {
    var g;
    const o = "energy:" + e.id, [s, c] = [e.solar.find((w) => w.endsWith("_power")), e.solar.find((w) => w.endsWith("_today"))], h = [s, c].filter(Boolean).map((w) => zi(w)), p = Number(((g = M[s]) == null ? void 0 : g.state) || 0) * 1e3;
    return qe.grid && (h.push(zi(qe.grid)), h.push(Gi("House use", Ya(p + Number(M[qe.grid].state)), "mdi:home-lightning-bolt"))), ko(o, t, "Energy", h, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const cs = (e, t) => ko("plant:" + e.id, t, Ie(e.id), e.readings.map((o) => zi(o)), "", e.id);
  function Yn(e, t, o, s, c, h, p = null) {
    const g = o == null ? null : Math.max(0, Math.min(1, o)), w = g == null ? 0 : Math.round(g * 100);
    return '<div class="tfBar ' + e + '" role="slider" tabindex="0" aria-label="' + ae(s) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + w + '"' + (c ? ' aria-valuetext="' + ae(c) + '"' : "") + ' data-drag="' + ae(e + "|" + t) + '">' + (p != null ? '<span class="was" aria-hidden="true" style="left:' + p + '%"></span>' : "") + (h ? g == null ? "" : '<b style="left:' + w + '%"></b>' : '<i style="width:' + w + '%"></i>') + "</div>";
  }
  const lo = "move-assistant-house-last-bright", Rt = (() => {
    try {
      return JSON.parse(Ni.get(lo)) || {};
    } catch {
      return {};
    }
  })();
  let Tn = 0;
  const Oa = (e, t) => {
    !t || Rt[e] === t || (Rt[e] = t, clearTimeout(Tn), Tn = setTimeout(() => Ni.set(lo, JSON.stringify(Rt)), 500));
  }, Ui = (e, t, o, s) => '<div class="tfStep" role="group" aria-label="' + ae(e) + '"><button type="button" data-act="' + o + '" aria-label="Lower ' + ae(e.toLowerCase()) + '">' + wu.down + "</button><output>" + ae(t) + '</output><button type="button" data-act="' + s + '" aria-label="Raise ' + ae(e.toLowerCase()) + '">' + wu.up + "</button></div>", Mo = (e, t, o) => '<div class="' + e + '" role="group" aria-label="' + ae(t) + '">' + o.filter(Boolean).map((s) => '<button type="button" data-act="' + s.act + '"' + (s.pressed != null ? ' aria-pressed="' + s.pressed + '"' : "") + (s.disabled ? " disabled" : "") + (s.aria ? ' aria-label="' + ae(s.aria) + '"' : "") + ">" + (s.html || ae(s.label)) + "</button>").join("") + "</div>", ps = (e, t) => "width:" + Math.round(Math.max(0, Math.min(1, (e - t * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * t / 3).toFixed(2), Ma = (e) => "left:calc(4px + " + e / 100 + " * (100% - 8px))", pi = (e, t) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + ae(Ie(e)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(t) + '" aria-valuetext="' + Math.round(t) + '% open" data-blocks="' + ae(e) + '">' + [0, 1, 2, 3].map((o) => '<span><i style="' + ps(t, o) + '"></i><b' + (t >= (o + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (o + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + Ma(t) + '">' + Math.round(t) + "%</output></div>";
  function Ys(e, t) {
    e.querySelectorAll(":scope>span").forEach((s, c) => {
      s.firstElementChild.setAttribute("style", ps(t, c)), s.lastElementChild.classList.toggle("lit", t >= (c + 1) * 25 - 12);
    });
    const o = e.querySelector(".tfTip");
    o.setAttribute("style", Ma(t)), o.textContent = Math.round(t) + "%", e.setAttribute("aria-valuenow", String(Math.round(t))), e.setAttribute("aria-valuetext", Math.round(t) + "% open");
  }
  const Yi = (e, t) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + ae(Ie(e)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(t) + '" aria-valuetext="' + Math.round(t) + '% open" data-drag="tilt|' + ae(e) + '"><i style="width:calc((100% - 8px) * ' + t / 100 + ')"></i><span' + (t > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (t > 92 ? ' class="lit"' : "") + ">Open</span></div>", ui = (e, t, o) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + ae(Ie(e)) + '">' + [
    Yt(e, lg) && ["open", "Open", "open_cover", t >= 100 && !o],
    Yt(e, cg) && ["stop", "Stop", "stop_cover", !1],
    Yt(e, dg) && ["close", "Close", "close_cover", t <= 0 && !o]
  ].filter(Boolean).map(([s, c, h, p]) => '<button type="button" data-act="' + Dt("cover", h, e) + '" aria-label="' + c + '"' + (p ? " disabled" : "") + ">" + pg[s] + "</button>").join("") + "</div>", fi = (e, t) => '<button class="tfIcon' + (t.art ? " art" : "") + '" type="button" data-act="' + t.button.act + '" aria-label="' + ae(t.button.label) + '"' + (t.art ? ' style="background-image:url(&quot;' + ae(t.art) + '&quot;)"' : ra(e, t.icon)) + "></button>", Hl = (e) => '<button class="tfName" type="button" data-more="' + ae(e) + '" aria-label="' + ae(Ie(e) + ", " + fa(e) + ". More info") + '"><span class="activityRowName">' + ae(Ie(e)) + '</span><span class="activityRowMeta">' + ae(fa(e)) + "</span></button>";
  function hi(e, t = !1, o = null) {
    const s = Ba(e), c = e.startsWith("light.") && So(e) && !(o && xs(e) < 3), h = o || (t && e.startsWith("light.") ? ["bright"] : null), p = c ? ['<div class="tfDacPad" data-dac="' + (t ? "more:" : o ? "dash:" : "tile:") + ae(e) + '"></div>'] : s.sections.map((g, w) => g && (!h || h.includes((s.parts || [])[w])) ? g : "").filter(Boolean);
    return '<div class="tfAction' + (c ? " tfDac" : "") + (s.on ? " on" : "") + (!c && !p.length ? " tfHeadOnly" : "") + '" data-k="' + ae(e) + '"' + (s.tone ? ' data-tone="' + s.tone + '"' : "") + jn(e) + '><div class="tfActionHead">' + fi(e, s) + Hl(e) + "</div>" + p.join("") + "</div>";
  }
  const Zn = "dual-controller-v3", mi = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let Zi = null;
  async function us() {
    if (Zi || customElements.get(Zn)) return;
    Zi = "loading";
    const e = await Promise.resolve().then(() => W({ type: "lovelace/resources" })).catch(() => null), t = Array.isArray(e) && e.some((s) => /dual-axis-controller/i.test(s.url || ""));
    if (await Promise.race([customElements.whenDefined(Zn), new Promise((s) => setTimeout(s, t ? 8e3 : 0))]), customElements.get(Zn)) return;
    const o = Object.assign(document.createElement("script"), { src: mi });
    o.onerror = () => {
      Zi = "failed", z();
    }, document.head.appendChild(o);
  }
  const sa = /* @__PURE__ */ new Map(), gi = (e) => (St.lightStyles[e] || St.lights) === "dac", vi = () => St.lights === "dac" || Object.values(St.lightStyles).includes("dac");
  function So(e) {
    return gi(e) && !!customElements.get(Zn);
  }
  const fs = (e) => St.lightPads[e] || St.dacPad, hs = () => {
    const e = i();
    return e && {
      ...e,
      themes: { ...e.themes || {}, darkMode: !v.classList.contains("light") },
      callService: (t, o, s, ...c) => e.callService(t, ...Fs(t, o, s), ...c)
    };
  }, ms = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", Kn = (e) => {
    !e.shadowRoot || e.shadowRoot.querySelector("style[data-tf]") || (e.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: ms })).dataset.tf = "");
  }, At = /* @__PURE__ */ new Map(), Dr = new ResizeObserver((e) => e.forEach(({ target: t }) => {
    const o = t.parentElement;
    !o || !t.offsetHeight || (o.style.removeProperty("min-height"), At.set(o.dataset.dac, o.offsetHeight));
  }));
  function Ki(e) {
    e.querySelectorAll("[data-dac]").forEach((t) => {
      const o = t.dataset.dac;
      let s = sa.get(o);
      if (!s) {
        const c = o.slice(o.indexOf(":") + 1);
        s = document.createElement(Zn), s.setConfig({ type: "custom:" + Zn, entity: c, pad: fs(c), tap_action: { action: "none" } }), sa.set(o, s);
      }
      s.hass = hs(), s.parentNode !== t && t.replaceChildren(s), !s.offsetHeight && At.has(o) && (t.style.minHeight = At.get(o) + "px"), Dr.observe(s), Kn(s);
    });
  }
  function gs() {
    const e = hs();
    sa.forEach((t, o) => {
      t.isConnected ? t.hass = e : sa.delete(o);
    });
  }
  customElements.whenDefined(Zn).then(() => {
    k && (D != null && D.querySelector("[data-tf]")) && ad(xo);
  });
  const qa = (e, t, o) => ce.has(e + "|" + t) ? ce.get(e + "|" + t) : o;
  function Ba(e) {
    var h;
    const t = M[e], o = t.attributes, s = e.split(".")[0], c = (p, g) => ({ act: Dt(p, "toggle", e), label: g });
    if (s === "light") {
      const p = t.state === "on", g = Vo(e), [w, B] = Sn(e), N = qa("bright", e, $t(t));
      p && Oa(e, $t(t));
      const T = qa("ct", e, p && o.color_mode === "color_temp" ? o.color_temp_kelvin : null), P = qa("hue", e, p && ii.includes(o.color_mode) && o.hs_color ? o.hs_color[0] : null);
      return { on: p, button: c("light", "Turn " + Ie(e) + (p ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        ro(e) && Yn("bright", e, N / 100, Ie(e) + " brightness", N + "%", !1, p ? null : Rt[e] ?? null),
        g.includes("color_temp") && Yn("ct", e, T == null ? null : (T - w) / (B - w), Ie(e) + " warm to cool", T == null ? "" : Math.round(T) + " kelvin", !0),
        g.some((Q) => ii.includes(Q)) && Yn("hue", e, P == null ? null : P / 360, Ie(e) + " colour", "", !0)
      ] };
    }
    if (s === "climate") {
      const p = o.target_temp_step || 0.5, g = Number(o.temperature);
      return { on: t.state !== "off", tone: t.state === "cool" || o.hvac_action === "cooling" ? "cool" : "heat", button: c("climate", "Turn " + Ie(e) + (t.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(g) && Ui("Target temperature", Ia(g) + " °C", Dt("climate", "set_temperature", e, { temperature: g - p }), Dt("climate", "set_temperature", e, { temperature: g + p })),
        Mo("tfSeg", "Mode", (o.hvac_modes || []).map((w) => ({ label: lt(w), act: Dt("climate", "set_hvac_mode", e, { hvac_mode: w }), pressed: t.state === w })))
      ] };
    }
    if (s === "cover") {
      const p = t.state === "opening" || t.state === "closing", g = t.state === "closed", w = qi(e), B = Tr(e);
      return { on: !g, tone: "blue", icon: Cu[pp(t)][g ? 1 : 0], button: c("cover", (g ? "Open " : "Close ") + Ie(e)), parts: ["blocks", "tilt", "buttons"], sections: [
        Yt(e, Su) && pi(e, w),
        B != null && Yi(e, B),
        ui(e, w, p)
      ] };
    }
    if (s === "humidifier") {
      const p = Number(o.humidity);
      return { on: t.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: c("humidifier", "Turn " + Ie(e) + (t.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(p) && Ui("Target humidity", p + "%", Dt("humidifier", "set_humidity", e, { humidity: p - 1 }), Dt("humidifier", "set_humidity", e, { humidity: p + 1 })),
        ((h = o.available_modes) == null ? void 0 : h.length) && Mo("tfSeg", "Mode", o.available_modes.map((g) => ({ label: lt(g), act: Dt("humidifier", "set_mode", e, { mode: g }), pressed: o.mode === g })))
      ] };
    }
    if (s === "media_player") {
      const p = t.state === "playing", g = t.state === "off" || t.state === "standby", w = qa("vol", e, o.volume_level), B = g ? { act: Dt("media_player", Yt(e, rg) ? "turn_on" : "toggle", e), label: "Turn " + Ie(e) + " on" } : t.state === "playing" || t.state === "paused" ? { act: Dt("media_player", "media_play_pause", e), label: (p ? "Pause " : "Play ") + Ie(e) } : { act: Dt("media_player", Yt(e, sg) ? "turn_off" : "toggle", e), label: "Turn " + Ie(e) + " off" };
      return { on: !g, tone: "blue", art: !g && o.entity_picture ? o.entity_picture : null, button: B, parts: ["playback", "volume"], sections: g ? [] : [
        (Yt(e, yu) || Yt(e, ku) || Yt(e, xu) || Yt(e, Mu)) && Mo("tfSeg", "Playback", [
          { html: dc.prev, aria: "Previous", act: Dt("media_player", "media_previous_track", e), disabled: !Yt(e, yu) },
          { html: p ? dc.pause : dc.play, aria: p ? "Pause" : "Play", act: Dt("media_player", "media_play_pause", e), disabled: !(Yt(e, xu) || Yt(e, Mu)) },
          { html: dc.next, aria: "Next", act: Dt("media_player", "media_next_track", e), disabled: !Yt(e, ku) }
        ]),
        Yt(e, ig) && w != null && Yn("vol", e, w, Ie(e) + " volume", Math.round(w * 100) + "%")
      ] };
    }
    if (s === "vacuum") {
      const p = t.state === "cleaning", g = o.rooms || [], w = (N) => g.includes(N) ? g.filter((T) => T !== N) : g.concat(N), B = Dt("vacuum", p ? "pause" : "start", e, ei(e) ? { rooms: g } : null);
      return { on: p || t.state === "returning", tone: "blue", button: { act: B, label: (p ? "Pause " : "Start ") + Ie(e) }, parts: ["controls", "rooms"], sections: [
        Mo("tfSeg", Ie(e), [
          { label: p ? "Pause" : "Start", act: B },
          { label: "Dock", act: Dt("vacuum", "return_to_base", e), disabled: t.state === "docked" },
          { label: "Locate", act: Dt("vacuum", "locate", e) }
        ]),
        ei(e) && Mo("tfChips", "Rooms to clean", qe.rooms.filter((N) => N.id !== "balcony").map((N) => ({ label: N.name, act: Dt("vacuum", "set_rooms", e, { rooms: w(N.name) }), pressed: g.includes(N.name) })))
      ] };
    }
    if (s === "lock") {
      const p = t.state === "locked";
      return { on: !p, tone: "heat", button: { act: Dt("lock", p ? "unlock" : "lock", e), label: (p ? "Unlock " : "Lock ") + Ie(e) }, parts: ["controls"], sections: [
        Mo("tfSeg", Ie(e), [
          { label: "Lock", act: Dt("lock", "lock", e), pressed: p },
          { label: "Unlock", act: Dt("lock", "unlock", e), pressed: t.state === "unlocked" },
          Yt(e, kg) && { label: "Open", act: Dt("lock", "open", e), pressed: t.state === "open" }
        ])
      ] };
    }
    if (s === "alarm_control_panel") {
      const p = t.state === "disarmed";
      return { on: !p, tone: t.state === "triggered" ? "alarm" : "blue", button: { act: Dt("alarm_control_panel", p ? "alarm_arm_away" : "alarm_disarm", e), label: p ? "Arm " + Ie(e) + ", away" : "Disarm " + Ie(e) }, parts: ["controls"], sections: [
        Mo("tfSeg", Ie(e), Mg.filter(([, , , g]) => !g || Yt(e, g)).map(([g, w, B]) => ({ label: w, act: Dt("alarm_control_panel", B, e), pressed: t.state === g })))
      ] };
    }
    if (s === "valve") {
      const p = t.state === "open";
      return { on: p, tone: "blue", icon: "mdi:sprinkler-variant", button: c("valve", (p ? "Close " : "Open ") + Ie(e)), parts: ["controls"], sections: [
        Mo("tfSeg", Ie(e), [
          { label: "Open", act: Dt("valve", "open_valve", e), pressed: p },
          { label: "Close", act: Dt("valve", "close_valve", e), pressed: !p }
        ])
      ] };
    }
    if (up.includes(s)) {
      const p = t.state === "on";
      return { on: p, button: c(s, "Turn " + Ie(e) + (p ? " off" : " on")), parts: [], sections: [] };
    }
    return { on: !1, button: { act: "", label: Ie(e) }, sections: [] };
  }
  const Ut = (e) => (Number.isInteger(Number(e)) ? String(Number(e)) : Ia(e)) + "°";
  function $n(e) {
    var X;
    const t = (V) => e.readings.find((we) => et(we).device_class === V), o = t("temperature"), s = t("humidity"), c = (V) => {
      var we;
      return Number((we = M[V]) == null ? void 0 : we.state);
    }, h = (V) => e.actions.filter((we) => V.test(we)), p = e.lights.filter((V) => {
      var we;
      return ((we = M[V]) == null ? void 0 : we.state) === "on";
    }), g = h(/^cover\./), w = g.filter((V) => {
      var we;
      return ((we = M[V]) == null ? void 0 : we.state) !== "closed";
    }), B = [...new Set(g.map((V) => pp(M[V])))], N = h(/^climate\./)[0], T = h(/^humidifier\./)[0], P = h(/^media_player\./), Q = P.find((V) => {
      var we;
      return ((we = M[V]) == null ? void 0 : we.state) === "playing";
    }) || P.find((V) => {
      var we;
      return ((we = M[V]) == null ? void 0 : we.state) === "paused";
    }), se = e.plugs.filter((V) => {
      var we;
      return ((we = M[V]) == null ? void 0 : we.state) === "on";
    }), Z = [];
    if (o && Number.isFinite(c(o)) && Z.push({ key: "temp", id: o, kind: "reading", icon: Hi(o), label: "Temperature", value: Ia(c(o)) + "°" }), s && Number.isFinite(c(s)) && Z.push({ key: "hum", id: s, kind: "reading", icon: Hi(s), label: "Humidity", value: Math.round(c(s)) + "%" }), e.lights.length && Z.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: Hi("", "mdi:lightbulb"),
      label: "Lights",
      value: p.length ? p.length + " of " + e.lights.length + " on" : "All off",
      short: p.length ? p.length + " on" : "Off",
      on: p.length > 0,
      light: p.length ? Oi(p[0]) : "",
      acts: e.lights.map((V) => ["light", p.length ? "turn_off" : "turn_on", V]),
      aria: (p.length ? "Turn off" : "Turn on") + " the lights in " + e.name
    }), g.length) {
      const V = B.length === 1 ? ug[B[0]] : "covers", we = Math.round(g.reduce((Y, ze) => Y + zn(ze), 0) / g.length);
      Z.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        light: w.length ? Et([146, 107, 199]) : "",
        icon: Hi("", ((X = Cu[B[0]]) == null ? void 0 : X[w.length ? 0 : 1]) || "mdi:window-shutter"),
        label: lt(V),
        value: we <= 0 ? "Closed" : we >= 100 ? "Open" : we + "% open",
        short: we <= 0 ? "Closed" : we + "%",
        on: w.length > 0,
        acts: g.map((Y) => ["cover", w.length ? "close_cover" : "open_cover", Y]),
        aria: (w.length ? "Close the " : "Open the ") + V + " in " + e.name
      });
    }
    if (N) {
      const V = et(N), we = M[N].state === "off";
      Z.push({
        key: "climate",
        kind: "control",
        tone: V.hvac_action === "cooling" ? "cool" : "heat",
        light: io(N) ? Et(io(N)) : "",
        icon: Hi(N),
        label: Ie(N),
        value: we ? "Off" : lt(V.hvac_action || M[N].state) + " · " + Ut(V.temperature),
        short: we ? "Off" : Ut(V.temperature),
        on: !we,
        acts: [["climate", "toggle", N]],
        aria: "Turn " + Ie(N) + (we ? " on" : " off")
      });
    }
    if (T) {
      const V = M[T].state === "on";
      Z.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        light: V ? Et([33, 150, 243]) : "",
        icon: Hi("", "mdi:air-humidifier"),
        label: Ie(T),
        value: V ? "On · " + et(T).humidity + "%" : "Off",
        short: V ? et(T).humidity + "%" : "Off",
        on: V,
        acts: [["humidifier", "toggle", T]],
        aria: "Turn " + Ie(T) + (V ? " off" : " on")
      });
    }
    if (P.length) {
      const V = Q || P[0], we = M[V], Y = we.state === "playing";
      Z.push({
        key: "media",
        kind: "control",
        tone: "blue",
        light: io(V) ? Et(io(V)) : "",
        icon: Hi(V),
        label: Ie(V),
        value: fa(V),
        short: Y ? "Playing" : we.state === "paused" ? "Paused" : lt(we.state),
        on: Y,
        acts: [["media_player", we.state === "playing" || we.state === "paused" ? "media_play_pause" : "toggle", V]],
        aria: (Y ? "Pause " : "Play ") + Ie(V)
      });
    }
    return e.plugs.length && Z.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      light: se.length ? Et([255, 193, 7]) : "",
      icon: Hi("", "mdi:power-plug"),
      label: "Plugs",
      value: se.length ? se.length + " of " + e.plugs.length + " on" : "All off",
      short: se.length ? se.length + " on" : "Off",
      on: se.length > 0,
      acts: e.plugs.map((V) => ["switch", se.length ? "turn_off" : "turn_on", V]),
      aria: (se.length ? "Turn off" : "Turn on") + " the plugs in " + e.name
    }), e.alerts.forEach((V) => Z.push(et(V).device_class === "moisture" ? { key: "alert:" + V, kind: "alert", icon: Hi(V), label: "Water leak" } : { key: "note:" + V, kind: "note", icon: Hi(V), label: Ie(V) + " " + fa(V).toLowerCase() })), Z;
  }
  const co = (e, t) => {
    const o = (s) => e.actions.filter((c) => s.test(c));
    return {
      lights: e.lights,
      covers: o(/^cover\./),
      climate: o(/^climate\./).slice(0, 1),
      humidifier: o(/^humidifier\./).slice(0, 1),
      plugs: e.plugs,
      media: (() => {
        const s = o(/^media_player\./);
        return [s.find((c) => {
          var h;
          return ((h = M[c]) == null ? void 0 : h.state) === "playing";
        }) || s.find((c) => {
          var h;
          return ((h = M[c]) == null ? void 0 : h.state) === "paused";
        }) || s[0]].filter(Boolean);
      })()
    }[t] || [];
  }, Zs = (e, t, o) => '<button class="' + t + (e.on ? " on" : "") + '" type="button" data-tone="' + e.tone + '" data-acts="' + Gn(e.acts) + '" aria-label="' + ae(e.aria) + '" aria-pressed="' + e.on + '">' + o + "</button>", f = (e) => '<button class="tfAName" type="button" data-go="' + ae(e.id) + '" aria-label="Open ' + ae(e.name) + '">' + ae(e.name) + "</button>";
  function b(e, t, o = !1) {
    const s = t.find((g) => g.key === "lights"), c = !!(s != null && s.on), h = "", p = '<span class="tfAreaGlyph"' + ra("area:" + e.id, e.icon || "mdi:texture-box", e.name) + "></span>";
    return o || !s ? '<span class="tfIcon tfAreaIcon' + (c ? " on" : "") + '"' + h + ' aria-hidden="true">' + p + "</span>" : '<button class="tfIcon tfAreaIcon' + (c ? " on" : "") + '" type="button"' + h + ' data-acts="' + Gn(s.acts) + '" aria-label="' + ae(s.aria) + '" aria-pressed="' + c + '">' + p + "</button>";
  }
  const x = (e) => e.filter((t) => t.kind === "alert" || t.kind === "note").map((t) => '<span class="sourceTag">' + ae(t.label) + "</span>").join(" "), C = (e) => e.readings.find((t) => et(t).device_class === "temperature") || [...e.readings, ...e.solar, ...e.openings, ...e.actions, ...e.plugs].find((t) => M[t]) || null, H = (e, t) => {
    const o = Ie(t);
    return o.toLowerCase().startsWith(e.name.toLowerCase() + " ") ? lt(o.slice(e.name.length + 1)) : o;
  };
  function G(e) {
    const t = M[e], o = et(e), s = e.split(".")[0], c = Number(t.state);
    if (t.state === "unavailable") return { text: "Unavailable" };
    if (s === "sensor" && Number.isFinite(c)) {
      if (o.device_class === "temperature") return { text: Ut(c) };
      const h = o.unit_of_measurement || "";
      return h === "%" ? { text: Math.round(c) + "%" } : { text: Ia(c, Number.isInteger(c) ? 0 : 1), unit: h };
    }
    if (s === "climate" && (o.current_temperature ?? o.temperature) != null) return { text: Ut(o.current_temperature ?? o.temperature) };
    if (s === "light") return { text: t.state !== "on" ? "Off" : ro(e) ? $t(t) + "%" : "On" };
    if (s === "cover") {
      const h = zn(e);
      return { text: h <= 0 ? "Closed" : h >= 100 ? "Open" : h + "%" };
    }
    return s === "humidifier" ? { text: t.state === "on" ? o.humidity + "%" : "Off" } : s === "media_player" ? { text: t.state === "playing" ? "Playing" : t.state === "paused" ? "Paused" : lt(t.state) } : { text: fa(e) };
  }
  const K = (e, t, o) => {
    const s = o.find((g) => g.key === "temp"), c = o.find((g) => g.key === "hum"), h = et(t), p = M[t].state === "off";
    return t.startsWith("climate.") ? [H(e, t), p ? "Off" : lt(h.hvac_action || M[t].state) + (h.temperature != null ? " · " + Ut(h.temperature) : ""), c && c.value + " humidity"].filter(Boolean).join(" · ") : [!(s && s.id === t) && H(e, t), s && s.id !== t && s.value, c && c.id !== t && c.value + " humidity"].filter(Boolean).join(" · ");
  };
  function he(e, t, o) {
    const s = o && G(o), c = o ? K(e, o, t) : "", h = (w) => {
      const B = co(e, w.key);
      return B.length === 1 ? B[0] : "group:" + e.id + ":" + w.key;
    }, p = t.filter((w) => w.kind === "control").slice(0, 4).map((w) => '<div class="tfATile' + (w.on ? " on" : "") + '" data-tone="' + w.tone + '"' + (w.light ? ' data-light style="' + w.light + '"' : "") + ">" + Zs(w, "tfIcon", w.icon) + '<button class="tfName" type="button" data-more="' + ae(h(w)) + '" aria-label="' + ae(e.name + " " + w.label.toLowerCase() + ", " + w.value + ". Open") + '"><span class="activityRowName">' + ae(w.label) + '</span><span class="activityRowMeta">' + ae(w.value) + "</span></button></div>"), g = x(t);
    return '<div class="workoutPanelTop">' + b(e, t) + '<div class="tfATitle">' + f(e) + "</div>" + (g ? '<div class="tfATags">' + g + "</div>" : "") + "</div>" + (o ? '<button class="tfABig" type="button" data-more="' + ae(o) + '" aria-label="' + ae(Ie(o) + ", " + fa(o) + ". More info") + '"><span class="tfABigMain' + (s.text.length > 7 ? " long" : "") + '">' + ae(s.text) + (s.unit ? '<span class="tfABigUnit">' + ae(s.unit) + "</span>" : "") + "</span>" + (c ? '<span class="tfABigSub">' + ae(c) + "</span>" : "") + "</button>" : "") + (p.length ? '<div class="tfATiles">' + p.join("") + "</div>" : "");
  }
  function J(e) {
    const t = e.id === A, o = $n(e), s = C(e), c = s && G(s), h = [...o.filter((p) => p.kind === "control"), ...o.filter((p) => p.kind !== "control" && p.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (t ? " active" : "") + '" data-area="' + ae(e.id) + '" tabindex="0" aria-expanded="' + t + '" aria-label="' + ae(e.name) + '"><div class="panelExpanded"' + (t ? "" : " inert") + ">" + he(e, o, s) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + b(e, o, !0) + '<span class="tfACName">' + ae(e.name) + '</span></div><span class="tfACMain">' + (c ? ae(c.text + (c.unit ? " " + c.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + h.map((p) => '<span class="tfACTile"><span class="tfIcon' + (p.kind === "alert" ? " alert" : "") + '"' + (p.on && p.light ? ' data-light style="' + p.light + '"' : "") + ">" + p.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let fe = [];
  const xe = () => {
    var t;
    const e = new Set(((t = Re.dash) == null ? void 0 : t.areasOff) || []);
    return fe.filter((o) => !e.has(o.id));
  }, Ee = (e) => {
    var o;
    const t = xe();
    return t.some((s) => s.id === A) || (A = ((o = t[0]) == null ? void 0 : o.id) || null), '<div class="tfAreas" data-tf data-k="areas" style="order:' + e + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + t.map(J).join("") + "</section></div>";
  }, Je = (e) => e.startsWith("room:"), Ke = (e) => fe.find((t) => "room:" + t.id === e);
  function Be(e, t) {
    const o = $n(e), s = C(e), c = s && G(s), h = s ? K(e, s, o) : "", p = c ? c.text + (c.unit ? " " + c.unit : "") : "", g = (P) => {
      const Q = co(e, P.key);
      return Q.length === 1 ? Q[0] : "group:" + e.id + ":" + P.key;
    }, w = o.filter((P) => P.kind === "control").slice(0, 4), B = (P) => P.on && P.light ? ' data-light style="' + P.light + '"' : "", N = w.map((P) => '<button class="tfIcon' + (P.on ? " on" : "") + '" type="button" data-tone="' + P.tone + '"' + B(P) + ' data-more="' + ae(g(P)) + '" aria-label="' + ae(P.label + ", " + P.value + ". Open its controls") + '">' + P.icon + "</button>"), T = w.map((P) => '<button class="tfRoomDev" type="button" data-more="' + ae(g(P)) + '" aria-label="' + ae(P.label + ", " + P.value + ". Open its controls") + '"><span class="tfIcon' + (P.on ? " on" : "") + '" data-tone="' + P.tone + '"' + B(P) + ">" + P.icon + '</span><span class="tfRoomDevName"><span class="activityRowName">' + ae(P.label) + '</span><span class="activityRowMeta">' + ae(P.value) + "</span></span></button>");
    return '<div class="tfAction tfRoomTile" data-k="' + ae(t) + '" data-go="' + ae(e.id) + '"><div class="tfActionHead"><span class="tfIcon tfRoomIcon" aria-hidden="true"><span class="tfAreaGlyph"' + ra("area:" + e.id, e.icon || "mdi:texture-box", e.name) + '></span></span><button class="tfName" type="button" data-go="' + ae(e.id) + '" aria-label="Open ' + ae(e.name) + '"><span class="activityRowName">' + ae(e.name) + "</span>" + (p || h ? '<span class="activityRowMeta">' + (p ? '<span class="tfRoomInline">' + ae(p) + (h ? " · " : "") + "</span>" : "") + ae(h) + "</span>" : "") + "</button></div>" + (p ? '<div class="tfRoomReading" aria-hidden="true"><span class="tfRoomBig">' + ae(p) + "</span>" + (h ? '<span class="tfRoomSub">' + ae(h) + "</span>" : "") + "</div>" : "") + (N.length ? '<div class="tfRoomDevices">' + N.join("") + '</div><div class="tfRoomHeads">' + T.join("") + "</div>" : "") + "</div>";
  }
  const tt = () => [
    { key: "home", name: "Home", ids: qe.homeVacuums },
    ...qe.rooms.map((e) => ({ key: "room:" + e.id, name: e.name, room: e, ids: e.actions }))
  ], Ge = (e, t, o) => e + " " + (e === 1 ? t : o), Te = () => (Re.favourites ?? ja.favorite_entities ?? []).filter((e) => M[e]);
  function gt() {
    if (!Vn) {
      const t = Object.entries(ia).sort((s, c) => c[1] - s[1]).map(([s]) => s), o = qe.rooms.flatMap((s) => s.actions);
      Vn = [.../* @__PURE__ */ new Set([...oo, ...t, ...o.filter((s) => Ba(s).on), ...o])];
    }
    const e = Te();
    return Vn.filter((t) => M[t] && M[t].state !== "unavailable" && !e.includes(t));
  }
  let nt = !1;
  function Ft() {
    if (!nt || Re.favSeeded || !qe.rooms.length || E) return;
    const e = (o) => Object.keys(M).find((s) => ei(s) && o(s)), t = [e((o) => o.startsWith("climate.")), e((o) => o.startsWith("cover.") && /curtain/.test(o)), e((o) => o.startsWith("valve.")), qe.security.locks[0]];
    Re = { ...Re, favourites: [.../* @__PURE__ */ new Set([...Re.favourites ?? ja.favorite_entities ?? [], ...t.filter(Boolean)])], favSeeded: !0 }, va();
  }
  const We = () => Re.suggest ?? !ja.hide_suggested_entities;
  function ta() {
    const e = new Set(E ? [] : Re.favHidden || []), t = Te().filter((s) => !e.has(s)), o = We() ? gt().filter((s) => !e.has(s) && yi(s)) : [];
    return E && !gn() ? [...t, ...o] : [...t, ...o].slice(0, Cg);
  }
  const la = (e) => {
    const t = Te().includes(e);
    return '<button class="tfStar" type="button" data-star="' + ae(e) + '" aria-pressed="' + t + '" aria-label="Favourite: ' + ae(Ie(e)) + '">' + yg(t) + "</button>";
  };
  function Za(e, { area: t = !1, star: o = !1, plain: s = !1, say: c = null, alert: h = !1 } = {}) {
    var se, Z, X, V, we, Y;
    const p = s && ((we = (se = i()) == null ? void 0 : se.devices) == null ? void 0 : we[(V = (X = (Z = i()) == null ? void 0 : Z.entities) == null ? void 0 : X[e]) == null ? void 0 : V.device_id]), g = p && (p.name_by_user || p.name) || Ie(e), w = e.split(".")[0], B = !s && hd.includes(w) ? Ba(e) : null, N = B ? B.on : ["on", "open", "playing"].includes((Y = M[e]) == null ? void 0 : Y.state), T = s ? null : B ? B.button : up.includes(w) ? { act: Dt(w, "toggle", e), label: "Turn " + Ie(e) + (N ? " off" : " on") } : w === "scene" || w === "script" ? { act: Dt(w, "turn_on", e), label: "Run " + Ie(e) } : null, P = (c ?? fa(e)) + (t && Ve.get(e) ? " · " + Ve.get(e) : ""), Q = (B == null ? void 0 : B.icon) || so(e);
    return '<div class="activityRow' + (T ? " tfPlug" : "") + (N ? " on" : "") + (o ? " tfPick" : "") + (h ? " alert" : "") + '" data-k="' + ae((t ? "fav:" : "row:") + e) + '" data-tone="' + (w === "light" ? "light" : (B == null ? void 0 : B.tone) || "blue") + '"' + jn(e) + ">" + (T && !o ? '<button class="tfIcon" type="button" data-act="' + T.act + '" aria-label="' + ae(T.label) + '"' + ra(e, Q) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + ra(e, Q) + "></div>") + '<button class="tfName" type="button" data-more="' + ae(e) + '" aria-label="' + ae(g + ", " + P + ". More info") + '"><span class="activityRowName">' + ae(g) + '</span><span class="activityRowMeta">' + ae(P) + "</span></button>" + (o ? la(e) : "") + "</div>";
  }
  const tn = () => {
    var e;
    return M[(e = Re.sources) == null ? void 0 : e.weather] ? Re.sources.weather : M["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(M).find((t) => t.startsWith("weather."));
  };
  function _r() {
    var o;
    const e = (s) => Object.keys(M).filter((c) => c.startsWith("binary_sensor.") && s.includes(et(c).device_class));
    return ((o = ai.alert_entities) != null && o.length ? ai.alert_entities : [...e(["moisture", "smoke", "gas"]).map((s) => ({ entity: s, severity: "alert" })), ...e(fc).map((s) => ({ entity: s, severity: "warning" }))]).filter((s) => M[s.entity]).map((s) => ({ ...s, on: ["on", "open", "unlocked", "triggered", "problem"].includes(M[s.entity].state) }));
  }
  function pn() {
    const e = Object.keys(fd), t = /* @__PURE__ */ new Set(), o = [];
    (ja.shortcuts || []).forEach((h) => {
      if (h.type === "summary") {
        if (!e.includes(h.key) || t.has(h.key)) return;
        t.add(h.key);
      }
      o.push(h);
    }), e.forEach((h) => {
      t.has(h) || o.push({ type: "summary", key: h });
    });
    const s = Tt().sumOrder || [], c = (h) => h.type === "summary" && s.includes(h.key) ? s.indexOf(h.key) : s.length;
    return s.length ? o.map((h, p) => [h, p]).sort((h, p) => c(h[0]) - c(p[0]) || h[1] - p[1]).map(([h]) => h) : o;
  }
  function zo() {
    var X;
    const e = ((X = i()) == null ? void 0 : X.entities) || {}, t = (V) => et(V).device_class, o = Object.keys(M).filter((V) => V.startsWith("sensor.") && t(V) === "battery" || V.startsWith("binary_sensor.") && ["battery", "problem"].includes(t(V))), s = qe.rooms.flatMap((V) => V.plants.map((we) => we.id));
    if (!o.length && !s.length) return null;
    const c = (V) => {
      var Y;
      const we = (Y = e[V]) == null ? void 0 : Y.device_id;
      return !!we && Object.keys(M).some((ze) => {
        var It;
        return ze.startsWith("binary_sensor.") && ((It = e[ze]) == null ? void 0 : It.device_id) === we && t(ze) === "battery_charging" && M[ze].state === "on";
      });
    }, h = (V) => V.startsWith("vacuum.") ? et(V).battery_level <= 20 && M[V].state !== "docked" : V.startsWith("binary_sensor.") ? t(V) === "battery" && M[V].state === "on" : parseFloat(M[V].state) <= 20 && !c(V), p = [...o, ...qe.vacuums].filter((V) => M[V] && h(V)), g = [...o.filter((V) => t(V) === "problem" && M[V].state === "on"), ...s.filter((V) => {
      var we;
      return ((we = M[V]) == null ? void 0 : we.state) === "problem";
    })], w = o.filter((V) => M[V].state === "unavailable"), B = [.../* @__PURE__ */ new Set([...p, ...g, ...w])], N = (V) => {
      const we = parseFloat(M[V].state);
      return t(V) === "battery" && Number.isFinite(we) ? we : 101;
    }, T = [...s, ...qe.vacuums, ...[...o].sort((V, we) => N(V) - N(we))].filter((V) => M[V] && !B.includes(V)), P = /* @__PURE__ */ new Map();
    T.forEach((V) => {
      var Y;
      const we = ((Y = qe.areaOf) == null ? void 0 : Y.call(qe, V)) || "";
      P.set(we, [...P.get(we) || [], V]);
    });
    const Q = (V) => {
      const we = qe.rooms.findIndex((Y) => Y.id === V);
      return V === "" ? 1 / 0 : we < 0 ? qe.rooms.length : we;
    }, se = [...P.keys()].sort((V, we) => Q(V) - Q(we)), Z = (V) => {
      var we, Y, ze, It;
      return ((we = qe.rooms.find((st) => st.id === V)) == null ? void 0 : we.name) || ((It = (ze = (Y = i()) == null ? void 0 : Y.areas) == null ? void 0 : ze[V]) == null ? void 0 : It.name) || V;
    };
    return {
      value: [p.length && Ge(p.length, "low battery", "low batteries"), g.length && Ge(g.length, "problem", "problems"), w.length && Ge(w.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: B, alert: !0 }, ...se.map((V) => ({ name: V ? Z(V) : se.length > 1 ? "Other devices" : "Devices", ids: P.get(V) }))].filter((V) => V.ids.length)
    };
  }
  const Tt = () => E ? Re.home || {} : Re, po = (e) => Tu.includes(e) ? (Tt().shownSums || []).includes(e) : !(Tt().hiddenSums || []).includes(e);
  function Ln(e, t, o) {
    const s = e.flatMap((P) => o(P, /^cover\./)), c = s.filter((P) => {
      var Q;
      return ["open", "opening"].includes((Q = M[P]) == null ? void 0 : Q.state);
    }).length, h = Object.keys(M).filter((P) => P.startsWith("person.")), p = h.filter((P) => {
      var Q;
      return ((Q = M[P]) == null ? void 0 : Q.state) === "home";
    }).length, g = qe.security.openings.filter((P) => M[P]), w = g.filter((P) => M[P].state === "on").length, B = Object.keys(M).filter((P) => P.startsWith("binary_sensor.") && et(P).device_class === "moisture"), N = B.filter((P) => M[P].state === "on").length, T = qe.vacuums.filter((P) => M[P]);
    return {
      covers: s.length && { value: c ? c + " open" : "All closed", groups: t((P) => o(P, /^cover\./)) },
      people: h.length && { value: p ? p + " home" : "Nobody home", groups: [{ name: "People", ids: h }] },
      openings: g.length && { value: w ? w + " open" : "All closed", groups: [{ name: "Doors and windows", ids: g }] },
      leaks: B.length && { value: N ? Ge(N, "leak", "leaks") : "All dry", groups: [{ name: "Leak sensors", ids: B }] },
      vacuum: T.length && { value: lt(M[T[0]].state), groups: [{ name: "Vacuum", ids: T }] }
    };
  }
  function An(e = !1) {
    var Da;
    const t = qe.rooms, o = qe.security, s = (Qe, kt) => Qe.actions.filter((Rn) => kt.test(Rn)), c = (Qe) => t.map((kt) => ({ name: kt.name, ids: Qe(kt) })).filter((kt) => kt.ids.length), h = t.flatMap((Qe) => Qe.lights), p = h.filter((Qe) => {
      var kt;
      return ((kt = M[Qe]) == null ? void 0 : kt.state) === "on";
    }).length, g = t.map((Qe) => Qe.readings.find((kt) => et(kt).device_class === "temperature")).filter(Boolean).map((Qe) => Number(M[Qe].state)).filter(Number.isFinite), [w, B] = [Ia(Math.min(...g)), Ia(Math.max(...g))], N = t.flatMap((Qe) => s(Qe, /^media_player\./)), T = N.filter((Qe) => {
      var kt;
      return ((kt = M[Qe]) == null ? void 0 : kt.state) === "playing";
    }).length, P = _r(), Q = P.filter((Qe) => Qe.severity === "warning" && Qe.on).length, se = o.locks.filter((Qe) => {
      var kt;
      return ["unlocked", "jammed", "open"].includes((kt = M[Qe]) == null ? void 0 : kt.state);
    }).length, Z = o.alarms.filter((Qe) => {
      var kt;
      return ((kt = M[Qe]) == null ? void 0 : kt.state) === "disarmed";
    }).length, X = Q ? Ge(Q, "warning", "warnings") : null, V = se ? se + " unlocked" : Z ? Z + " disarmed" : X ? null : "All secure", we = zo(), Y = t.flatMap((Qe) => Qe.solar), ze = Y.find((Qe) => Qe.endsWith("_power")), It = {
      light: h.length && { value: p ? p + " on" : "All off", groups: c((Qe) => Qe.lights) },
      climate: g.length && { value: w === B ? w + "°" : w + " - " + B + "°", groups: c((Qe) => [...Qe.readings.filter((kt) => ["temperature", "humidity"].includes(et(kt).device_class)), ...s(Qe, /^(climate|humidifier)\./)]) },
      security: (o.alarms.length || o.locks.length) && { value: [X, V].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...o.alarms, ...o.locks] }, { name: "Doors and windows", ids: o.openings }].filter((Qe) => Qe.ids.length) },
      media_players: N.length && { value: T ? T + " playing" : "No media playing", groups: c((Qe) => s(Qe, /^media_player\./)) },
      maintenance: we,
      energy: qe.grid && { value: Ya(Number(((Da = M[ze]) == null ? void 0 : Da.state) || 0) * 1e3 + Number(M[qe.grid].state)) + " now", groups: [{ name: "Energy", ids: [...Y, qe.grid] }] },
      ...Ln(t, c, s)
    }, st = [], Vt = P.filter((Qe) => Qe.severity !== "warning" && Qe.on);
    return Vt.length && st.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: Ge(Vt.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: Vt.map((Qe) => Qe.entity) }] }), pn().forEach((Qe) => {
      Qe.type !== "summary" ? st.push({ key: "path:" + Qe.path, name: Qe.label || Qe.path, icon: Qe.icon || "mdi:link-variant", colour: "", value: "" }) : !Qe.hidden && It[Qe.key] && (e || po(Qe.key)) && st.push({ key: Qe.key, ...fd[Qe.key], ...It[Qe.key] });
    }), st;
  }
  const bi = (e) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + ae(e.key) + '" data-k="sum:' + ae(e.key) + '" aria-label="' + ae(e.name + (e.value ? ", " + e.value : "")) + '"' + (e.key === "alerts" ? ' style="--sum:' + e.colour + ';--sum-ink:#ffffff"' : e.key === "climate" ? ' style="' + ls() + '"' : e.colour && li(e.colour) ? ' style="' + li(e.colour).slice(1) + '"' : "") + ">" + (e.key === "climate" ? Nl : "") + '<div class="tfIcon" aria-hidden="true"' + ra(e.id || "", e.icon, e.name) + '></div><div><div class="activityRowName">' + ae(e.name) + "</div>" + (e.value ? '<div class="activityRowMeta">' + ae(e.value) + "</div>" : "") + "</div></div>";
  function $i(e) {
    const t = Te();
    Re = { ...Re, favourites: t.includes(e) ? t.filter((o) => o !== e) : [...t, e], favHidden: (Re.favHidden || []).filter((o) => o !== e) }, va(), Pa();
  }
  function Xi(e) {
    document.querySelector("home-assistant") && (te.pushState(null, "", e), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function Ka(e, t) {
    if (e.startsWith("path:")) {
      Xi(e.slice(5));
      return;
    }
    Ne("summary:" + e, t);
  }
  async function Il() {
    const e = (p) => Promise.resolve().then(() => W(p)).catch(() => null), [t, o, s, c] = await Promise.all([
      e({ type: "frontend/get_user_data", key: Lu }),
      e({ type: "frontend/get_system_data", key: "home" }),
      e({ type: "frontend/get_system_data", key: "security" }),
      e({ type: "usage_prediction/common_control" })
    ]), h = (t == null ? void 0 : t.value) || {};
    Re = { favourites: h.favourites ?? null, sources: h.sources, hiddenSums: h.hiddenSums, shownSums: h.shownSums, home: h.home, dash: h.dash, named: h.named, favHidden: h.favHidden, suggest: h.suggest, favSeeded: h.favSeeded }, ja = (o == null ? void 0 : o.value) || {}, ai = (s == null ? void 0 : s.value) || {}, oo = Array.isArray(c == null ? void 0 : c.entities) ? c.entities : [], Vn = null, Object.keys(M).length && Pa(), bd(), nt = !0, Ft();
  }
  const vs = "HomeCore";
  async function bd() {
    var s, c, h;
    const e = location.pathname.split("/")[1], t = Re.named || [];
    if (!((c = (s = i()) == null ? void 0 : s.user) != null && c.is_admin) || !e || t.includes(e)) return;
    const o = () => {
      Re = { ...Re, named: [...t, e] }, va();
    };
    try {
      const p = (h = await W({ type: "lovelace/dashboards/list" })) == null ? void 0 : h.find((B) => B.url_path === e);
      if (!p || p.mode === "yaml") return;
      if (p.title === vs) {
        o();
        return;
      }
      const g = await W({ type: "lovelace/config", url_path: e }), w = ((g == null ? void 0 : g.views) || []).flatMap((B) => [...B.cards || [], ...(B.sections || []).flatMap((N) => N.cards || [])]);
      if (!w.length || !w.every((B) => (B == null ? void 0 : B.type) === "custom:move-assistant-card" && B.layout === "test-focus")) return;
      await W({ type: "lovelace/dashboards/update", dashboard_id: p.id, title: vs }), o();
    } catch {
    }
  }
  let bs = null, $a = 0, Ji = !1;
  const Qi = (e) => {
    const t = e.split(".")[0], o = et(e).device_class;
    return Sg.includes(t) && (t !== "binary_sensor" || fc.includes(o) || !!Nu[o]);
  }, Fl = (e) => e.startsWith("binary_sensor.") ? Nu[et(e).device_class] : null;
  async function wd() {
    var e;
    if (!(Ji || Date.now() - $a < 30 * 1e3)) {
      Ji = !0, $a = Date.now();
      try {
        const t = Object.keys(((e = i()) == null ? void 0 : e.states) || {}).filter(Qi), o = t.length ? await W({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: t }) : null;
        bs = Array.isArray(o) ? o.filter((s) => s.entity_id && s.state != null && s.when) : null;
      } catch {
        bs = null;
      }
      Ji = !1, Pa();
    }
  }
  function Cc() {
    const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map(), o = (c) => {
      if (!M[c.entity_id] || !Qi(c.entity_id) || !yi(c.entity_id) || ["unavailable", "unknown"].includes(c.state)) return;
      if (Fl(c.entity_id)) {
        const p = t.get(c.entity_id);
        c.state === "on" ? (!p || c.when > p.when + 1) && t.set(c.entity_id, { ...c, alarm: !0, cleared: null }) : p && !p.cleared && c.when > p.when && (p.cleared = c.when);
        return;
      }
      const h = e.get(c.entity_id);
      (!h || c.when > h.when + 1) && e.set(c.entity_id, c);
    };
    [...bs || []].sort((c, h) => c.when - h.when).forEach(o);
    const s = bs ? $a / 1e3 - 5 : 0;
    return Object.keys(M).forEach((c) => {
      var g;
      const h = M[c], p = h.last_changed ? Date.parse(h.last_changed) / 1e3 : 0;
      p > s && o({ entity_id: c, state: h.state, when: p, context_user_id: (g = h.context) == null ? void 0 : g.user_id });
    }), [...e.values(), ...t.values()].sort((c, h) => h.when - c.when).slice(0, Tg);
  }
  function xd(e) {
    var s;
    const t = e.context_user_id && Object.keys(M).find((c) => c.startsWith("person.") && et(c).user_id === e.context_user_id);
    if (t) return Ie(t);
    const o = (s = i()) == null ? void 0 : s.user;
    return o && e.context_user_id === o.id ? o.name : ["automation", "script"].includes(e.context_domain) || e.context_event_type === "automation_triggered" ? e.context_name || "Home Assistant" : "";
  }
  function Ks(e) {
    const t = e.entity_id.split(".")[0], o = String(e.state);
    return t === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[o] || lt(o).toLowerCase() : t === "cover" || t === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[o] || lt(o).toLowerCase() : t === "binary_sensor" ? o === "on" ? "opened" : "closed" : t === "climate" ? o === "off" ? "turned off" : "set to " + lt(o).toLowerCase() : t === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[o] || lt(o).toLowerCase() : t === "alarm_control_panel" ? (Pu[o] || lt(o)).toLowerCase() : t === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[o] || lt(o).toLowerCase() : o === "on" ? "turned on" : o === "off" ? "turned off" : lt(o).toLowerCase();
  }
  function yd(e) {
    const t = e.entity_id, o = e.alarm && Fl(t), s = Ie(t) + " " + (o ? o[0] : Ks(e)), c = o ? Xt(e.when * 1e3) + (e.cleared ? " · " + o[1] + " since " + Xt(e.cleared * 1e3) : "") : [xd(e), Xt(e.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (o ? " alert" : "") + '"><div class="tfIcon' + (o ? " alert" : "") + '" aria-hidden="true"' + ra(t, so(t)) + '></div><button class="tfName" type="button" data-more="' + ae(t) + '" data-at="' + Math.round(e.when * 1e3) + '" aria-label="' + ae(s + ", " + c + ". More info") + '"><span class="activityRowName">' + ae(s) + '</span><span class="activityRowMeta">' + ae(c) + "</span></button></div>";
  }
  let rn = null, $s = 0;
  const Go = [["electricity", "Electricity", 4.3, "kWh"], ["solar", "Solar", 2.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function Br() {
    var t;
    if (Date.now() - $s < 5 * 60 * 1e3) return;
    $s = Date.now();
    const e = [];
    try {
      const o = ((t = await W({ type: "energy/get_prefs" })) == null ? void 0 : t.energy_sources) || [], s = (c) => o.filter((h) => h.type === c).flatMap((h) => c === "grid" ? (h.flow_from || []).map((p) => p.stat_energy_from) : [h.stat_energy_from]).filter(Boolean);
      for (const [c, h, p] of [["electricity", "Electricity", s("grid")], ["solar", "Solar", s("solar")], ["gas", "Gas", s("gas")], ["water", "Water", s("water")]]) {
        if (!p.length) continue;
        const g = await Promise.all(p.map((w) => Promise.resolve(W({ type: "recorder/statistic_during_period", statistic_id: w, calendar: { period: "day" }, types: ["change"] })).then((B) => Number(B == null ? void 0 : B.change) || 0, () => 0)));
        e.push({ key: c, name: h, id: p[0], ids: p, value: g.reduce((w, B) => w + B, 0), unit: et(p[0]).unit_of_measurement || (c === "gas" || c === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    rn = e, Pa();
  }
  let wi = null, kd = [];
  function ws() {
    var h;
    const e = kd = rn != null && rn.length ? rn : Go.map(([p, g, w, B]) => {
      if (p === "solar") {
        const T = Object.keys(M).find((P) => P.endsWith("_solar_today") && !P.includes("made_up_energy"));
        T && Number.isFinite(Number(M[T].state)) && (w = Number(M[T].state));
      }
      const N = "sensor.made_up_energy_" + p;
      return M[N] = { entity_id: N, state: String(w), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: g + " today", unit_of_measurement: B, state_class: "total_increasing" } }, { key: p, name: g, id: N, value: w, unit: B };
    });
    de.clear(), e.some((p) => p.id === wi) || (wi = e[0].id);
    const t = e.map((p) => {
      const g = Number(p.value).toLocaleString(void 0, { maximumFractionDigits: p.value < 10 ? 2 : 1 }) + " " + p.unit, w = Lg[p.key], B = p.id === wi;
      return de.set(p.id, { name: p.name, text: g, icon: w }), '<div class="activityRow tap' + (B ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + ae(p.id) + '" aria-pressed="' + B + '" aria-label="' + ae(p.name + ", " + g) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + ra("", w, p.name) + '></div><div><div class="activityRowName">' + ae(p.name) + '</div><div class="activityRowMeta">' + ae(g) + "</div></div></div>";
    }), o = e.find((p) => p.id === wi), s = (((h = Ht().opts.energy) == null ? void 0 : h.graph) || "above") === "below", c = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + ae(o.id) + '" role="img" aria-label="' + ae(o.name) + ', last 24 hours"></svg></div>';
    return ko("dash:energy", 0, "Energy today", t, c, An().some((p) => p.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (s ? "" : " graphAbove"));
  }
  function Ol(e) {
    const t = D.querySelector(".tfDash-energy"), o = t == null ? void 0 : t.querySelector(".tfDashGraph svg");
    !o || e === wi || (wi = e, t.querySelectorAll("[data-energy-pick]").forEach((s) => {
      const c = s.dataset.energyPick === e;
      s.classList.toggle("picked", c), s.setAttribute("aria-pressed", String(c));
    }), o.dataset.graph = e, o.dataset.drawn = "", kn.set("dash:energy", ws()), Bs(!0));
  }
  const ql = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, xi = /* @__PURE__ */ new Map();
  async function Tc(e) {
    const t = /* @__PURE__ */ new Date(), o = new Date(t).setHours(0, 0, 0, 0), s = t.getHours(), c = t.getMinutes() / 60, h = Array.from({ length: 24 }, (g, w) => w <= s ? 0 : null);
    if (!e.ids) {
      const g = ql[e.key] || ql.electricity, w = g.map((N, T) => T < s ? N : T === s ? N * c : 0), B = w.reduce((N, T) => N + T, 0) || 1;
      return h.map((N, T) => N == null ? null : e.value * w[T] / B);
    }
    const p = xi.get(e.id);
    if (p && p.day === o && Date.now() - p.at < 5 * 60 * 1e3) return p.hours;
    try {
      const g = await W({ type: "recorder/statistics_during_period", start_time: new Date(o).toISOString(), end_time: t.toISOString(), statistic_ids: e.ids, period: "hour", types: ["change"] });
      e.ids.forEach((N) => ((g == null ? void 0 : g[N]) || []).forEach((T) => {
        const P = typeof T.start == "number" ? T.start : Date.parse(T.start), Q = new Date(P).getHours();
        P >= o && Q < s && (h[Q] += Number(T.change) || 0);
      }));
      const w = new Date(t).setMinutes(0, 0, 0), B = await Promise.all(e.ids.map((N) => Promise.resolve(W({ type: "recorder/statistic_during_period", statistic_id: N, fixed_period: { start_time: new Date(w).toISOString(), end_time: t.toISOString() }, types: ["change"] })).then((T) => Number(T == null ? void 0 : T.change) || 0, () => 0)));
      h[s] = B.reduce((N, T) => N + T, 0);
    } catch {
    }
    return xi.set(e.id, { at: Date.now(), day: o, hours: h }), h;
  }
  async function Md(e, t) {
    const o = await Tc(t);
    if (!e.isConnected) return;
    const s = Math.max(120, e.clientWidth || 260), c = Math.max(60, e.clientHeight || 130), h = 18, p = c - 18, g = s / 24, w = g * 0.72, B = (/* @__PURE__ */ new Date()).getHours(), N = o.map((X) => X ?? 0), T = Math.max(0, ...N), P = (X) => p - (T > 0 ? X / T * (p - h) : 0), Q = (X) => X.toLocaleString(void 0, { maximumFractionDigits: X < 10 ? 2 : 1 }) + " " + t.unit, se = (X) => String(X).padStart(2, "0") + ":00", Z = T > 0 ? N.indexOf(T) : -1;
    e.setAttribute("viewBox", "0 0 " + s + " " + c), e.setAttribute("aria-label", t.name + " today by the hour: " + Q(t.value) + (Z >= 0 ? ", most " + Q(T) + " at " + se(Z) : "")), e.innerHTML = [h, (h + p) / 2, p].map((X) => '<line x1="0" x2="' + s + '" y1="' + X + '" y2="' + X + '" stroke="var(--line)" stroke-width="1"/>').join("") + o.map((X, V) => X > 0 ? '<rect x="' + (V * g + (g - w) / 2).toFixed(1) + '" y="' + P(X).toFixed(1) + '" width="' + w.toFixed(1) + '" height="' + (p - P(X)).toFixed(1) + '" rx="2" fill="' + (V === B ? "var(--primary)" : "var(--text)") + '"' + (V === B ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((X) => '<text x="' + (X * g).toFixed(1) + '" y="' + (c - 3) + '">' + String(X).padStart(2, "0") + "</text>").join("") + (Z >= 0 ? '<text x="0" y="11">Most: ' + ae(Q(T)) + " at " + se(Z) + "</text>" : "");
  }
  function Xs(e) {
    var t;
    (t = window.matchMedia) != null && t.call(window, "(prefers-reduced-motion: reduce)").matches || e.querySelectorAll("rect").forEach((o, s) => o.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: s * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function Rr(e) {
    var s;
    if ((s = window.matchMedia) != null && s.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [t, o] = e.querySelectorAll("path");
    af(e, o, [t].filter(Boolean));
  }
  let Uo = null, uo = 0;
  const yi = (e) => !e.startsWith("light.") || Ag.includes((Ve.get(e) || "").toLowerCase()), ki = () => Math.max(2, Ci((D == null ? void 0 : D.clientWidth) || 0).n), Pr = (e) => {
    const t = Ba(e);
    return t.sections.map((o, s) => o && (t.parts || [])[s]).filter(Boolean);
  }, Nr = (e) => Pr(e).slice(0, xs(e) - 1);
  function Yo(e) {
    const t = Ht().tiles;
    if (t) return t.filter((s) => M[s] || Ke(s));
    if (!Uo) {
      const s = (c) => {
        var h;
        return (((h = M[c]) == null ? void 0 : h.state) === "on" ? 1e6 : 0) + (ia[c] || 0);
      };
      Uo = {
        lights: qe.rooms.flatMap((c) => c.lights).filter((c) => {
          var h;
          return yi(c) && ((h = M[c]) == null ? void 0 : h.state) !== "unavailable";
        }).sort((c, h) => s(h) - s(c) || Ie(c).localeCompare(Ie(h))),
        climates: qe.rooms.flatMap((c) => c.actions.filter((h) => h.startsWith("climate.")))
      };
    }
    const o = Uo.climates.filter((s) => M[s]).slice(0, e > 3 ? 2 : 1);
    return [...Uo.lights.filter((s) => M[s]).slice(0, Math.max(0, e - o.length)), ...o];
  }
  const Js = () => {
    var e;
    return ((e = Re.home) == null ? void 0 : e.welcome) ?? !0;
  }, Lc = () => {
    var t, o;
    const e = (t = i()) == null ? void 0 : t.user;
    return (e == null ? void 0 : e.name) || ((o = Object.values(M).find((s) => {
      var c;
      return s.entity_id.startsWith("person.") && (e == null ? void 0 : e.id) && ((c = s.attributes) == null ? void 0 : c.user_id) === e.id;
    })) == null ? void 0 : o.attributes.friendly_name) || "";
  }, Qs = () => {
    const e = (/* @__PURE__ */ new Date()).getHours(), t = Lc();
    return (e >= 5 && e < 12 ? "Good morning" : e >= 12 && e < 18 ? "Good afternoon" : "Good evening") + (t ? ", " + t : "");
  }, Zo = (e, t, o, s) => (c) => '<section class="card tfCard tfDashCard ' + e + '" data-tf data-k="' + t + '" aria-label="' + o + '">' + (s ? '<div class="activityHeader">' + (t === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + o + "</button>" : '<div class="activityTitle">' + o + "</div>") + "</div>" : "") + '<div class="activityRows">' + c + "</div></section>";
  function Hr(e, t) {
    var h, p;
    e.dash = !0, e.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + ((E ? Js() : Ht().welcome) ? '<span class="tfGreeting">' + ae(Qs()) + "</span>" : "") + ae(((p = (h = i()) == null ? void 0 : h.config) == null ? void 0 : p.location_name) || "Home") + "</h1>" }), t.length && e.push({ key: "sums", wrap: (g) => '<div class="tfDashBarRow" data-tf data-k="sums">' + Zo("tfDash-bar", "sums-bar", "Summaries", !1)(g).replace(" data-tf", "") + "</div>", tiles: t.map((g) => ({ key: "sum:" + g.key, html: bi(g) })) }), !E && xe().length && e.push({ key: "areas", html: Ee(0) });
    const o = ta();
    if (o.length && e.push({ key: "favs", wrap: Zo("tfDash-favs", "favs", "Favourites", !0), tiles: o.map((g) => ({ key: "fav:" + g, html: Za(g, { area: !0 }) })) }), E)
      return Br(), Vl() && e.push({ key: "dash:energy", html: ws() }), uo = ki(), Yo(0).forEach((g) => e.push({
        key: "dash:tile:" + g,
        wrap: (w) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + ae(g) + '">' + w + "</div>",
        tiles: [{ key: g, html: Be(Ke(g), g) }]
      })), e;
    const s = Cc();
    e.push({ key: "dash:act", html: ko("dash:act", 0, "Activity", s.length ? s.map(yd) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), e.push({ key: "dash:energy", html: ws() });
    const c = ki();
    return uo = c, Yo(c >= 3 ? c : c * 2).forEach((g) => e.push({
      key: "dash:tile:" + g,
      wrap: (w) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + ae(g) + '">' + w + "</div>",
      tiles: [{ key: g, html: Je(g) ? Be(Ke(g), g) : hi(g, !1, Nr(g)) }]
    })), wd(), Br(), e;
  }
  const fo = 252, Ot = 16, Ac = 200, Sd = Math.round(fo * 1.25), Cd = 60, ho = Cd + Ot, el = 3, Ir = {
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
  }, Ko = ["wx", "favs", "act", "energy", "avg"], tl = ["XS", "S", "M", "L", "XL"], al = tl.length, Td = ["Narrow", "Wide", "Really wide"], Fr = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4, hourly: 4, sun: 4, moon: 4, uv: 4, humidity: 4, pressure: 4, wind: 4, visibility: 4 }, nl = (e) => !e.includes(".") || !M[e] || e.startsWith("light.") && gi(e) ? al : Math.min(al, Pr(e).length + 1), xs = (e) => {
    const t = Ht().opts[e] || {}, o = nl(e), s = Number(t.h) || (t.tall ? 5 : Fr[e] || Ld);
    return Math.max(1, Math.min(o, s));
  }, Ld = 2, Ec = 90, ol = 56, da = (e) => {
    var t;
    return Ir[e] || (e.startsWith("room:") ? ((t = fe.find((o) => "room:" + o.id === e)) == null ? void 0 : t.name) || "Area" : Ie(e));
  }, En = 409, Dc = 128;
  let un = !1, Lt = null, Xa = null, Or = !1, Mi = /* @__PURE__ */ new Map(), ys = 0, Si = 0;
  const $o = ["title", "sums"], Ci = (e) => {
    const t = Math.max(1, Math.floor((e + Ot) / (Ac + Ot)));
    return { n: t, w: Math.max(1, Math.min(Sd, Math.floor((e - (t - 1) * Ot) / t))) };
  }, er = () => fe.map((e) => "room:" + e.id);
  function Co() {
    const e = er();
    return {
      cells: {},
      spans: { favs: 2 },
      hidden: Object.keys(Ir).filter((t) => {
        var o, s;
        return !["title", ...((o = Re.home) == null ? void 0 : o.sums) === !1 ? [] : ["sums"], ...((s = Re.home) == null ? void 0 : s.favs) === !1 ? [] : ["favs"], ...Bc() ? ["wx"] : [], ...Vl() ? ["energy"] : []].includes(t);
      }),
      opts: { favs: { h: 5 }, ...Object.fromEntries(e.map((t) => [t, { h: 5 }])) },
      tiles: e,
      known: cn,
      areasOff: []
    };
  }
  const Ht = () => E ? Co() : tr(), tr = () => {
    let e = { cells: {}, spans: {}, hidden: [], opts: {}, ...Re.dash || {} };
    e.sumsOff && (e = { ...e, hidden: [...e.hidden, "sums"] });
    const t = cn.filter((o) => !(e.known || []).includes(o) && !e.hidden.includes(o));
    return t.length ? { ...e, hidden: [...e.hidden, ...t] } : e;
  };
  function ar(e) {
    E || (Re = { ...Re, dash: { ...e, known: cn } }, va());
  }
  function Ti() {
    const e = (t) => D.querySelector(t);
    return [
      ["title", e(".tfDashTitle"), "full"],
      ["sums", e(".tfDashBarRow"), "full"],
      ["wx", yo.wx, 2],
      ["areas", e(".tfAreas"), "areas"],
      ["favs", e(".tfDash-favs"), 2],
      ["act", e(".tfDash-act"), 2],
      ["energy", e(".tfDash-energy"), 2],
      ["avg", yo.avg, 2],
      ...cn.map((t) => [t, yo[t], pt[t] || 1]),
      ...[...D.querySelectorAll(".tfDashTiles > [data-k]")].map((t) => [t.dataset.k, t, 1, !0])
    ].filter(([, t]) => t == null ? void 0 : t.isConnected).map(([t, o, s, c = !1]) => ({ key: t, el: o, span: s, tile: c }));
  }
  const Dn = (e, t, o) => {
    var s;
    if (e.span === "full") return t;
    if (e.span === "areas") {
      const c = Math.ceil((En + Math.max(0, xe().length - 1) * (Dc + Ot) + Ot) / (o + Ot));
      return Math.max(Math.min(t, 2), Math.min(c, t - (((s = Ht().cells.areas) == null ? void 0 : s.col) || 0)));
    }
    return Math.min(t, Ht().spans[e.key] ?? e.span);
  }, qr = (e) => xs(e.key);
  function il(e, t, o = null) {
    const s = Ht().cells, c = e.every((g) => !s[g.key] || s[g.key].col + g.cols <= t), h = (g) => s[g.key] || { row: 1e9, col: 0 };
    return (() => {
      const g = /* @__PURE__ */ new Set(), w = /* @__PURE__ */ new Map(), B = (Z, X, V, we) => {
        for (let Y = X; Y < X + we; Y++) for (let ze = Z; ze < Z + V; ze++) if (g.has(ze + "," + Y)) return !1;
        return !0;
      }, N = (Z, X, V) => {
        for (let we = V; we < V + Z.rows; we++) for (let Y = X; Y < X + Z.cols; Y++) g.add(Y + "," + we);
        w.set(Z.key, { col: X, row: V, cols: Z.cols, rows: Z.rows });
      }, T = (Z, X, V) => {
        for (X = Math.max(0, Math.min(t - Z.cols, X)), V = Math.max(0, V); !B(X, V, Z.cols, Z.rows); ) V++;
        N(Z, X, V);
      }, P = (Z) => {
        for (let X = 0; ; X++) for (let V = 0; V <= t - Z.cols; V++) if (B(V, X, Z.cols, Z.rows)) {
          N(Z, V, X);
          return;
        }
      };
      o && T(o, Lt.col, Lt.row);
      const Q = e.filter((Z) => Z !== o), se = (Z, X) => h(Z).row - h(X).row || h(Z).col - h(X).col;
      return c ? (Q.filter((Z) => s[Z.key]).sort(se).forEach((Z) => T(Z, s[Z.key].col, s[Z.key].row)), Q.filter((Z) => !s[Z.key]).forEach(P), w) : ([...Q].sort(se).forEach(P), w);
    })();
  }
  function Wr(e, t) {
    const o = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Map(), c = (h, p, g) => {
      for (let w = p; w < p + g.rows; w++) for (let B = h; B < h + g.cols; B++) if (o.has(B + "," + w)) return !1;
      return !0;
    };
    return e.forEach((h) => {
      for (let p = 0; ; p++) {
        let g = 0;
        for (; g <= t - h.cols && !c(g, p, h); ) g++;
        if (!(g > t - h.cols)) {
          for (let w = p; w < p + h.rows; w++) for (let B = g; B < g + h.cols; B++) o.add(B + "," + w);
          s.set(h.key, { col: g, row: p, cols: h.cols, rows: h.rows });
          return;
        }
      }
    }), s;
  }
  function rl() {
    const e = Ht(), t = new Set(e.hidden), o = Ti().filter((p) => !$o.includes(p.key));
    let s = Mi;
    if (!s.size) {
      const p = e.pegs || 4, g = o.filter((w) => !t.has(w.key));
      g.forEach((w) => {
        w.cols = Dn(w, p, fo), w.rows = qr(w) ?? Ld;
      }), s = il(g, p);
    }
    const c = (p) => !t.has(p.key) && s.get(p.key) || { row: 1e9, col: 0 };
    o.sort((p, g) => c(p).row - c(g).row || c(p).col - c(g).col);
    const h = (e.phone || []).map((p) => o.find((g) => g.key === p && !t.has(p))).filter(Boolean);
    return [...h, ...o.filter((p) => !h.includes(p))];
  }
  const nr = () => {
    const e = rl();
    e.forEach((t, o) => t.el.style.setProperty("--o", String(3 + o))), Wl([...Ti().filter((t) => $o.includes(t.key)), ...e].map((t) => t.el));
  };
  function Wl(e) {
    if (Lt) return;
    const t = n.activeElement;
    let o = null;
    for (const s of new Set(e.map((c) => {
      for (; c && c.parentElement !== D; ) c = c.parentElement;
      return c;
    }).filter(Boolean))) {
      const c = o ? o.nextSibling : D.querySelector(":scope > [data-tf]");
      if (s !== c)
        try {
          D.moveBefore ? D.moveBefore(s, c) : D.insertBefore(s, c);
        } catch {
          D.insertBefore(s, c);
        }
      o = s;
    }
    t && t !== n.activeElement && t.isConnected && t.focus({ preventScroll: !0 });
  }
  const fn = (e, t) => ar({ ...e, cells: t, pegs: Ci(D.clientWidth).n });
  function Ra() {
    var we;
    if (!k || !D) return;
    const e = D.clientWidth, t = e < 2 * fo + Ot, o = v.classList.contains("tfDash");
    E && (un = !1), v.classList.toggle("tfOverview", E);
    const { n: s, w: c } = t ? { n: 2, w: Math.floor((e - Ot) / 2) } : Ci(e);
    ka.classList.add("tfPegs"), ka.style.setProperty("--peg-n", s), ka.style.setProperty("--peg-w", c + "px");
    const h = new Set(Ht().hidden);
    cn.forEach((Y) => {
      var ze;
      return (ze = yo[Y]) == null ? void 0 : ze.classList.toggle("tfNotAdded", h.has(Y) && !(Lt != null && Lt.fromTray && Lt.key === Y));
    }), dt(), v.classList.toggle("tfBoard", o), v.classList.toggle("tfEditing", o && un && !t);
    const p = u("dashEditNav");
    !o && Ro && $l(!1), p && E ? (p.hidden = !o, Ro || (p.classList.remove("active"), p.setAttribute("aria-pressed", "false"), p.setAttribute("aria-label", "Edit Home page"), p.title = "Edit", p.innerHTML = uc)) : p && (p.hidden = !o || t, p.classList.toggle("active", un), p.setAttribute("aria-pressed", String(un)), p.setAttribute("aria-label", un ? "Done editing" : "Edit custom dashboard"), p.title = un ? "Done" : "Edit", p.innerHTML = un ? Ru : uc);
    const g = o ? Ti() : [];
    if ((!o || !E) && D.querySelectorAll(":scope > :is(.hcFloor,.hcFloorBox)").forEach((Y) => Y.remove()), !o) {
      D.style.height = "", D.querySelectorAll(".tfBoardItem").forEach((Y) => {
        Y.classList.remove("tfBoardItem", "tfBoardHidden"), Y.style.left = Y.style.top = Y.style.width = Y.style.height = "";
      }), (we = D.querySelector(".tfDash-act > .activityRows")) == null || we.style.removeProperty("max-height"), Ss(!1), v.classList.contains("tfDash") && nr(), Ca();
      return;
    }
    if (E) {
      Vr(g, e, t);
      return;
    }
    D.style.setProperty("--peg-w", c + "px");
    const w = new Set(Ht().hidden), B = c + Ot;
    Lt != null && Lt.fromTray && w.delete(Lt.key), g.forEach((Y) => Y.el.classList.toggle("tfBoardHidden", w.has(Y.key)));
    const N = g.filter((Y) => !w.has(Y.key) && getComputedStyle(Y.el).display !== "none");
    let T = 0;
    N.filter((Y) => $o.includes(Y.key)).forEach((Y) => {
      Y.el.classList.add("tfBoardItem"), Object.assign(Y.el.style, { width: e + "px", height: "", left: "0px", top: T + "px" });
      const ze = Y.key === "sums" && Y.el.querySelector(".tfDash-bar"), It = ze ? ze.querySelectorAll(".activityRow").length : 0;
      ze && (ze.style.maxWidth = "none");
      for (let st = 1; ze && st <= It && (ze.style.setProperty("--bar-cols", String(Math.ceil(It / st))), !(ze.offsetWidth <= e)); st++)
        ;
      ze && (ze.style.maxWidth = ""), T += Y.el.offsetHeight + Ot;
    }), Si = T;
    const P = N.filter((Y) => !$o.includes(Y.key));
    P.forEach((Y) => {
      Y.cols = Dn(Y, s, c), Y.el.classList.add("tfBoardItem"), Y.el.style.width = (Y.cols === s ? e : Y.cols * c + (Y.cols - 1) * Ot) + "px", Y.el.style.height = "", Y.rows = qr(Y) ?? Math.max(1, Math.ceil((Y.el.offsetHeight + Ot - 6) / ho));
    });
    const Q = Lt && P.find((Y) => Y.key === Lt.key), se = t && rl().map((Y) => Y.key), Z = (Y) => se.includes(Y.key) ? se.indexOf(Y.key) : -1, X = t ? Wr([...P].sort((Y, ze) => Z(Y) - Z(ze)), s) : il(P, s, Q);
    X.forEach((Y) => Object.assign(Y, { x: Y.cols === s ? 0 : Y.col * B, y: Si + Y.row * ho, w: Y.cols === s ? e : Y.cols * c + (Y.cols - 1) * Ot, h: Y.rows * ho - Ot })), P.forEach((Y) => {
      const ze = X.get(Y.key);
      Y.el.style.height = ze.h + "px", Y.el.dataset.rows = t && Y.key === "wx" ? 5 : xs(Y.key), Y.el.toggleAttribute("data-narrow", !t && ze.cols === 1 && s > 1), Y.el.dataset.cols = ze.cols, Y.el.classList.contains("tfDac") && Y.el.style.setProperty("--tf-dac-pad", ze.h - Ec + "px"), !(Y === Q && !Lt.fromTray) && (Y.el.style.left = ze.x + "px", Y.el.style.top = ze.y + "px");
    }), t || (Mi = X), Wl([...N.filter((Y) => $o.includes(Y.key)), ...P.slice().sort((Y, ze) => X.get(Y.key).row - X.get(ze.key).row || X.get(Y.key).col - X.get(ze.key).col)].map((Y) => Y.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([Y, ze]) => {
      const It = X.get(Y), st = It && D.querySelector(ze), Vt = st == null ? void 0 : st.querySelector(":scope > .activityRows"), Da = st == null ? void 0 : st.querySelector(":scope > .activityHeader");
      if (!Vt || !Da) return;
      const Qe = Vt.getBoundingClientRect().top - st.getBoundingClientRect().top, kt = It.rows === 1 ? It.h : Math.floor(It.h - Qe - parseFloat(getComputedStyle(st).paddingBottom)), Rn = Math.max(1, Math.floor(kt / ol));
      Vt.style.setProperty("--fill-row", (kt / Rn).toFixed(2) + "px"), Vt.style.maxHeight = kt + "px";
    }), ys = Math.max(0, ...[...X.values()].map((Y) => Y.row + Y.rows));
    let V = Si + ys * ho - Ot;
    V = Ss(un && !t, P, X, V, s, c), D.style.height = V + "px", requestAnimationFrame(() => v.classList.add("tfBoardReady")), g.forEach((Y) => Ms.observe(Y.el)), Bs(), Ca();
  }
  const hn = { gap: 20, phoneGap: 16, inner: 16, col: 252, row: 337, nameGap: 16, sumsGap: 16, full: 1336, floorTop: 12, floorHead: 24, floorGap: 16 }, sl = { s: { w: 160, h: 192 }, m: { w: 200, h: 240 }, l: { w: 252, h: 337 } }, Ad = () => {
    var e;
    return sl[(e = Re.home) == null ? void 0 : e.areaSize] ? Re.home.areaSize : "s";
  }, ks = () => {
    var e;
    return ["rows", "columns", "bento"].includes((e = Re.home) == null ? void 0 : e.areaLayout) ? Re.home.areaLayout : "bento";
  }, To = () => {
    var e;
    return ((e = Re.home) == null ? void 0 : e.cardsAs) === "rows" ? "rows" : "stacked";
  }, _c = { byFloor: !0, bentoBoxes: !0, bentoMixed: !1 }, Bc = () => {
    var e;
    return !!((e = Re.home) != null && e.weather && tn());
  }, Vl = () => {
    var e;
    return !!((e = Re.home) != null && e.energy && (rn != null && rn.length));
  }, Xn = (e) => {
    var t;
    return ((t = Re.home) == null ? void 0 : t[e]) ?? _c[e];
  };
  function Rc() {
    var c;
    const e = Object.values(((c = i()) == null ? void 0 : c.floors) || {}), t = new Set(e.map((h) => h.floor_id)), o = e.map((h) => ({ id: h.floor_id, name: h.name, rooms: fe.filter((p) => p.floor === h.floor_id) })), s = fe.filter((h) => !t.has(h.floor));
    return s.length && o.push({ id: "", name: e.length ? "Other areas" : "", rooms: s }), o;
  }
  const or = (e) => e.classList.toggle("hcMore", e.scrollHeight - e.scrollTop - e.clientHeight > 1);
  let ca = null, jl = [], Lo = /* @__PURE__ */ new Map();
  function Li(e) {
    let t = D.querySelector(".hcHomeLand");
    if (!e) {
      t == null || t.remove();
      return;
    }
    t || (t = Object.assign(document.createElement("div"), { className: "tfBoardLand hcHomeLand" }), D.appendChild(t)), Object.assign(t.style, { left: e.x + "px", top: e.y + "px", width: e.w + "px", height: e.h + "px" });
  }
  function aa(e) {
    if (!E || !Ro || e.button !== 0 || D.clientWidth < 2 * fo + Ot) return;
    const t = e.target.closest(".tfBoardItem"), o = t && Ti().find((g) => g.el === t);
    if (!o || $o.includes(o.key) || Je(o.key)) return;
    e.preventDefault();
    const s = D.getBoundingClientRect(), c = Lo.get(o.key);
    ca = { key: o.key, el: t, on: !1, x0: e.clientX, y0: e.clientY, left: c.x, top: c.y, order: [...jl] };
    const h = (g) => {
      const w = g.clientX - ca.x0, B = g.clientY - ca.y0;
      if (!ca.on && Math.hypot(w, B) < 5) return;
      ca.on || (ca.on = !0, t.classList.add("tfDragging"), yn() || t.animate([{ scale: "1" }, { scale: "1.05" }, { scale: "1.02" }], { duration: 260, easing: "cubic-bezier(.2,1.35,.4,1)" })), Object.assign(t.style, { left: ca.left + w + "px", top: ca.top + B + "px" });
      const N = g.clientX - s.left, T = g.clientY - s.top + D.scrollTop;
      let P = null, Q = 1 / 0;
      if (Lo.forEach((V, we) => {
        if (we === o.key || !ca.order.includes(we)) return;
        const Y = Math.hypot(N - (V.x + V.w / 2), T - (V.y + V.h / 2));
        Y < Q && (Q = Y, P = { key: we, b: V });
      }), !P) return;
      const se = ca.order.filter((V) => V !== o.key), Z = se.indexOf(P.key) + (N > P.b.x + P.b.w / 2 ? 1 : 0), X = [...se.slice(0, Z), o.key, ...se.slice(Z)];
      X.join() !== ca.order.join() ? (ca.order = X, Ra()) : Li(Lo.get(o.key));
    }, p = () => {
      removeEventListener("pointermove", h), removeEventListener("pointerup", p), removeEventListener("pointercancel", p);
      const g = ca;
      ca = null, t.classList.remove("tfDragging"), g.on && eo({ order: g.order }), Ra(), g.on && !yn() && setTimeout(() => Gp(t), 340);
    };
    addEventListener("pointermove", h), addEventListener("pointerup", p), addEventListener("pointercancel", p);
  }
  function Vr(e, t, o) {
    var Dp;
    const s = new Set(Ht().hidden);
    e.forEach((Ae) => Ae.el.classList.toggle("tfBoardHidden", s.has(Ae.key)));
    const c = e.filter((Ae) => !s.has(Ae.key) && getComputedStyle(Ae.el).display !== "none"), h = o ? hn.phoneGap : hn.gap, p = Math.min(t, hn.full);
    let g = 0;
    const w = gn();
    v.classList.toggle("hcSumsFit", Od()), v.classList.toggle("hcFavStrip", w);
    const B = c.filter((Ae) => $o.includes(Ae.key) || w && Ae.key === "favs");
    B.sort((Ae, ot) => ["title", "sums", "favs"].indexOf(Ae.key) - ["title", "sums", "favs"].indexOf(ot.key)), B.forEach((Ae) => {
      Ae.el.classList.add("tfBoardItem"), Ae.el.toggleAttribute("data-narrow", !1), Object.assign(Ae.el.style, { width: (Ae.key === "title" ? t : p) + "px", height: "", left: "0px", top: g + "px" });
      const ot = Ae.key !== "title" && (Ae.el.querySelector(".tfDash-bar>.activityRows") || Ae.key === "favs" && Ae.el.querySelector(":scope>.activityRows")), _a = ot ? ot.children.length : 0;
      if (ot && (ot.classList.remove("hcBarRows"), !o && ot.scrollWidth > ot.clientWidth + 1))
        for (let pa = 2; pa <= _a && (ot.classList.add("hcBarRows"), ot.style.setProperty("--bar-cols", String(Math.ceil(_a / pa))), !(ot.scrollWidth <= ot.clientWidth + 1)); pa++)
          ;
      g += Ae.el.offsetHeight + (Ae.key === "title" ? hn.nameGap : hn.sumsGap);
    });
    const N = o ? 1 : Math.max(0.85, Math.min(1, t / hn.full)), T = ["favs", "wx", "energy"], P = (ca == null ? void 0 : ca.order) || ((Dp = Re.home) == null ? void 0 : Dp.order), Q = P ? [...P.filter((Ae) => T.includes(Ae)), ...T.filter((Ae) => !P.includes(Ae))] : T;
    jl = Q;
    const se = c.filter((Ae) => T.includes(Ae.key) && !(w && Ae.key === "favs")).sort((Ae, ot) => Q.indexOf(Ae.key) - Q.indexOf(ot.key));
    Lo = /* @__PURE__ */ new Map();
    const Z = (Ae, ot) => {
      if (Lo.set(Ae.key, ot), Object.assign(Ae.el.style, { width: ot.w + "px", height: ot.h + "px" }), ca != null && ca.on && ca.key === Ae.key) {
        Li(ot);
        return;
      }
      Object.assign(Ae.el.style, { left: ot.x + "px", top: ot.y + "px" });
    }, X = o ? t : Math.round((2 * hn.col + hn.inner) * N), V = Math.round(hn.row * N), we = Ad(), Y = sl[we], ze = ks(), It = Xn("byFloor"), st = To() === "stacked" && !o && se.length > 0;
    let Vt = 0, Da = 0, Qe = g;
    se.forEach((Ae) => {
      Ae.el.classList.add("tfBoardItem"), Ae.el.dataset.rows = 5, Ae.el.dataset.cols = 2, Ae.el.toggleAttribute("data-narrow", !1);
      let ot = V;
      if ((o || Ae.key === "favs") && (Object.assign(Ae.el.style, { width: X + "px", height: "" }), ot = Ae.el.offsetHeight), st) {
        Z(Ae, { x: 0, y: Qe, w: X, h: ot }), Qe += ot + h;
        return;
      }
      Vt && Vt + X > t && (g += Da + h, Vt = 0, Da = 0), Z(Ae, { x: Vt, y: g, w: X, h: ot }), Vt += X + h, Da = Math.max(Da, ot);
    }), se.length && !st && (g += Da + h);
    const kt = st ? X + h : 0, Rn = st ? t - X - h : t, Pi = o ? Math.floor((t - h) / 2) : Math.round(Y.w * N), Xd = Math.round(Y.h * N), ld = o ? 2 : Math.max(1, Math.floor((Rn + h) / (Pi + h))), Jd = new Map(c.filter((Ae) => Je(Ae.key)).map((Ae) => [Ae.key, Ae])), cd = (It ? Rc() : [{ id: "", name: "", rooms: fe }]).map((Ae) => ({ ...Ae, cards: Ae.rooms.map((ot) => Jd.get("room:" + ot.id)).filter(Boolean) })).filter((Ae) => Ae.cards.length), qc = ze === "bento", Wc = qc && Xn("bentoMixed"), Mf = qc && It && Xn("bentoBoxes"), Sf = ze === "columns" && It && !o, pd = 12, Cf = (Ae) => Ae.name ? hn.floorHead + hn.floorGap : 0, Vc = (Ae, ot, _a) => {
      const pa = /* @__PURE__ */ new Set(), ha = [];
      Ae.cards.forEach((wt, Qr) => {
        const Pn = Wc && Qr === 0 && ot >= 2 && Ae.cards.length > 1, es = Pn ? 2 : 1, Qd = Pn && !o ? 2 : 1;
        wt.el.classList.remove("hcAreaS", "hcAreaM", "hcAreaL", "hcAreaBig"), wt.el.classList.add("hcArea" + we.toUpperCase()), wt.el.classList.toggle("hcAreaBig", Pn), wt.el.style.setProperty("--hc-k", String(N)), wt.el.classList.add("tfBoardItem"), wt.el.dataset.rows = Qd > 1 ? 10 : 5, wt.el.dataset.cols = es, wt.el.toggleAttribute("data-narrow", !1);
        for (let ec = 0; ; ec++) {
          const Yc = [...Array(Math.max(0, ot - es + 1)).keys()].find((Zc) => [...Array(es).keys()].every((Kc) => [...Array(Qd).keys()].every((Ef) => !pa.has(ec + Ef + "," + (Zc + Kc)))));
          if (Yc != null) {
            [...Array(es).keys()].forEach((Zc) => [...Array(Qd).keys()].forEach((Kc) => pa.add(ec + Kc + "," + (Yc + Zc)))), ha.push({ it: wt, r: ec, c: Yc, sc: es, sr: Qd });
            break;
          }
        }
      });
      const on = Math.max(0, ...ha.map((wt) => wt.r + wt.sr));
      qc && !o && ha.forEach((wt) => {
        for (; wt.r + wt.sr < on && !pa.has(wt.r + wt.sr + "," + wt.c) && wt.sc === 1; )
          pa.add(wt.r + wt.sr + "," + wt.c), wt.sr++;
      }), ha.forEach((wt) => Object.assign(wt.it.el.style, { width: wt.sc * _a + (wt.sc - 1) * h + "px", height: o ? "" : wt.sr * Xd + (wt.sr - 1) * h + "px" }));
      const Os = [...Array(on)].map(() => o ? 0 : Xd);
      o && ha.forEach((wt) => {
        Os[wt.r] = Math.max(Os[wt.r], wt.it.el.offsetHeight);
      });
      const qs = [];
      let hr = Cf(Ae);
      return Os.forEach((wt, Qr) => {
        qs[Qr] = hr, hr += wt + h;
      }), { h: hr - (on ? h : 0), places: ha.map((wt) => ({ it: wt.it, x: wt.c * (_a + h), y: qs[wt.r], w: wt.sc * _a + (wt.sc - 1) * h, h: Os.slice(wt.r, wt.r + wt.sr).reduce((Qr, Pn) => Qr + Pn, 0) + (wt.sr - 1) * h })) };
    }, jc = new Map([...D.querySelectorAll(":scope > .hcFloor")].map((Ae) => [Ae.dataset.floor, Ae])), zc = new Map([...D.querySelectorAll(":scope > .hcFloorBox")].map((Ae) => [Ae.dataset.floor, Ae])), Ep = [], Tf = (Ae, ot, _a, pa) => {
      if (!Ae.name) return;
      let ha = jc.get(Ae.id);
      jc.delete(Ae.id), ha || (ha = Object.assign(document.createElement("div"), { className: "hcFloor" }), ha.dataset.floor = Ae.id, D.appendChild(ha)), ha.dataset.sig !== Ae.name && (ha.dataset.sig = Ae.name, ha.innerHTML = '<h2 class="hcFloorName">' + ae(Ae.name) + "</h2>"), Object.assign(ha.style, { left: ot + "px", top: _a + "px", width: pa + "px" }), Ep.push(ha);
    }, Lf = (Ae, ot, _a, pa, ha) => {
      let on = zc.get(Ae.id);
      zc.delete(Ae.id), on || (on = Object.assign(document.createElement("div"), { className: "hcFloorBox" }), on.dataset.floor = Ae.id, on.setAttribute("aria-hidden", "true"), D.prepend(on)), Object.assign(on.style, { left: ot + "px", top: _a + "px", width: pa + "px", height: ha + "px" });
    }, Af = (Ae) => parseFloat(getComputedStyle(Ae.cards[0].el).paddingLeft) || 0, Gc = (Ae, ot, _a, pa, ha = 0) => {
      Tf(Ae, _a + ha, pa, (ot.w ?? t) - ha), ot.places.forEach((on) => Z(on.it, { x: _a + on.x, y: pa + on.y, w: on.w, h: on.h }));
    };
    if (cd.length && se.length && !st && (g += hn.floorTop), Sf) {
      let Ae = 0, ot = g;
      cd.forEach((_a) => {
        const pa = { ...Vc(_a, 1, Pi), w: Pi };
        Ae && Ae + Pi > Rn && (g = ot + h + hn.floorTop, Ae = 0), Gc(_a, pa, kt + Ae, g), ot = Math.max(ot, g + pa.h), Ae += Pi + h;
      }), g = ot + h;
    } else if (Mf) {
      const Ae = Array(ld).fill(g);
      cd.forEach((ot) => {
        const _a = ot.cards.length + (Wc && ot.cards.length > 1 ? 3 : 0), pa = o ? 2 : Math.min(ld, Math.max(Wc && ot.cards.length > 1 ? 2 : 1, _a <= 3 ? _a : Math.ceil(_a / 2))), ha = pa * (Pi + h) - h, on = Math.floor((ha - 2 * pd - (pa - 1) * h) / pa), Os = { ...Vc(ot, pa, on), w: ha - 2 * pd };
        let qs = 0, hr = 1 / 0;
        for (let Pn = 0; Pn + pa <= ld; Pn++) {
          const es = Math.max(...Ae.slice(Pn, Pn + pa));
          es < hr && (hr = es, qs = Pn);
        }
        const wt = kt + qs * (Pi + h), Qr = Os.h + 2 * pd;
        Lf(ot, wt, hr, ha, Qr), Gc(ot, Os, wt + pd, hr + pd, Af(ot));
        for (let Pn = qs; Pn < qs + pa; Pn++) Ae[Pn] = hr + Qr + h;
      }), g = Math.max(g, ...Ae);
    } else
      cd.forEach((Ae, ot) => {
        ot && (g += hn.floorTop);
        const _a = Vc(Ae, ld, Pi);
        Gc(Ae, { ..._a, w: Rn }, kt, g), g += _a.h + h;
      });
    st && (g = Math.max(g, Qe)), jc.forEach((Ae) => Ae.remove()), zc.forEach((Ae) => Ae.remove()), ca != null && ca.on || Li(null), D.style.height = Math.max(0, g - h) + "px", Wl([...B.map((Ae) => Ae.el), ...se.map((Ae) => Ae.el), ...Ep, ...cd.flatMap((Ae) => Ae.cards.map((ot) => ot.el))]), Ss(!1), e.forEach((Ae) => [...Ae.el.children].forEach((ot) => ot.toggleAttribute("inert", Ro)));
    const Uc = D.querySelector(".tfDash-favs>.activityRows");
    Uc && (Uc.classList.toggle("hcFadeList", !w), or(Uc)), requestAnimationFrame(() => v.classList.add("tfBoardReady")), e.forEach((Ae) => Ms.observe(Ae.el)), Ca();
  }
  const ir = () => {
    Or || (Or = !0, requestAnimationFrame(() => {
      Or = !1, Ra();
    }));
  }, Ms = new ResizeObserver(() => {
    Lt || ir();
  });
  function sn(e, t, o) {
    const s = o + Ot, c = e * o + (e - 1) * Ot, h = t * ho - Ot, p = Ot / 2, g = s / Math.max(1, Math.round(s / (ho / 4))), w = ho / 4, B = 6;
    let N = "";
    for (let T = 0; T <= e; T++) for (let P = 0; P <= t; P++) {
      const Q = T * s - p, se = P * ho - p;
      N += "M" + (Q - B) + " " + se + "H" + (Q + B) + "M" + Q + " " + (se - B) + "V" + (se + B);
    }
    return '<svg width="' + c + '" height="' + h + '" viewBox="0 0 ' + c + " " + h + '"><defs><pattern id="tfGridDots" patternUnits="userSpaceOnUse" x="' + -p + '" y="' + -p + '" width="' + g.toFixed(3) + '" height="' + w + '"><circle cx="0" cy="0" r="1.4"></circle><circle cx="' + g.toFixed(3) + '" cy="0" r="1.4"></circle><circle cx="0" cy="' + w + '" r="1.4"></circle><circle cx="' + g.toFixed(3) + '" cy="' + w + '" r="1.4"></circle></pattern></defs><rect class="tfGridDots" x="' + -p + '" y="' + -p + '" width="' + (c + Ot) + '" height="' + (h + Ot) + '" fill="url(#tfGridDots)"></rect><path class="tfGridCross" d="' + N + '"></path></svg>';
  }
  function Ss(e, t = [], o = /* @__PURE__ */ new Map(), s = 0, c = 1, h = fo) {
    D.querySelectorAll(".tfEditChips").forEach((N) => {
      (!e || !N.closest(".tfBoardItem")) && N.remove();
    }), D.querySelectorAll(".tfFavHides").forEach((N) => N.remove()), D.querySelectorAll(".tfBoardItem").forEach((N) => [...N.children].forEach((T) => {
      T.classList.contains("tfEditChips") || T.toggleAttribute("inert", e);
    }));
    let p = D.querySelector(".tfBoardCells"), g = D.querySelector(".tfBoardLand");
    if (!e)
      return p == null || p.remove(), g == null || g.remove(), Ao(), s;
    const w = ys + el;
    if (p || (p = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), p.setAttribute("aria-hidden", "true"), D.prepend(p)), p.style.top = Si + "px", p.dataset.size !== c + "x" + w + "x" + h && (p.dataset.size = c + "x" + w + "x" + h, p.innerHTML = sn(c, w, h)), s = Math.max(s, Si + w * ho - Ot), t.forEach((N) => {
      const T = N.el;
      !T || T.querySelector(":scope > .tfEditChips") || T.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + cc + '</span><button class="tfEditChip" type="button" data-board-more="' + ae(N.key) + '" aria-label="' + ae(da(N.key)) + ' options" aria-haspopup="menu">' + bg + "</button></div>");
    }), Lt && o.has(Lt.key)) {
      g || (g = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), D.appendChild(g));
      const N = o.get(Lt.key);
      Object.assign(g.style, { left: N.x + "px", top: N.y + "px", width: N.w + "px", height: N.h + "px" });
    } else g == null || g.remove();
    const B = D.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (B) {
      const N = B.getBoundingClientRect();
      B.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...B.querySelectorAll('[data-k^="fav:"]')].map((T) => {
        const P = T.getBoundingClientRect(), Q = T.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + ae(Q) + '" aria-label="Hide ' + ae(Ie(Q)) + ' from the dashboard" style="left:' + Math.round(P.right - N.left - 42) + "px;top:" + Math.round(P.top - N.top + (P.height - 32) / 2) + 'px">' + Du + "</button>";
      }).join("") + "</div>");
    }
    return s;
  }
  let ll = "";
  function dl(e) {
    un = e, e || (Lt = null, mo = _o = !1, Ao()), Ra(), e ? ll = JSON.stringify(Re) : ll && JSON.stringify(Re) !== ll && Jn("Changes saved");
  }
  function Ed(e, t) {
    var Z, X;
    Ao();
    const o = Mi.get(e), { n: s } = Ci(D.clientWidth), c = Ht(), h = c.spans[e] ?? (Je(e) ? 1 : 2);
    if (!o) return;
    const p = o.cols >= s, g = (V, we, Y) => '<button type="button" role="menuitem" data-board-act="' + V + '"' + (Y ? " disabled" : "") + ">" + we + "</button>", w = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    w.setAttribute("role", "menu"), w.setAttribute("aria-label", da(e) + " options");
    const B = D.querySelector('.tfDashTiles > [data-k="' + CSS.escape(e) + '"]'), N = nl(e), T = xs(e), P = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + tl.map((V, we) => '<button type="button" role="menuitemradio" aria-checked="' + (we + 1 === T) + '" aria-label="' + V + ", " + (we + 1) + (we ? " rows" : " row") + '" data-board-act="h:' + (we + 1) + '"' + (we < N ? "" : " disabled") + ">" + V + "</button>").join("") + "</div></div>", Q = Ko.includes(e) || Je(e) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + Td.map((V, we) => '<button type="button" role="menuitemradio" aria-checked="' + (we + 1 === Math.min(h, s)) + '" aria-label="' + V + ", " + (we + 1) + (we ? " columns" : " column") + '" data-board-act="w:' + (we + 1) + '"' + (we < s ? "" : " disabled") + ">" + V + "</button>").join("") + "</div></div>" : "";
    w.innerHTML = P + Q + (e === "energy" ? g("graph", (((Z = c.opts.energy) == null ? void 0 : Z.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + g("left", "Move left", p || o.col === 0) + g("right", "Move right", p || o.col + o.cols >= s) + g("up", "Move up", o.row <= 0) + g("down", "Move down") + (B ? g("remove", "Remove") : g("hide", "Hide")), D.appendChild(w);
    const se = Math.min(o.x + o.w - w.offsetWidth, D.clientWidth - w.offsetWidth);
    Object.assign(w.style, { left: Math.max(0, se) + "px", top: o.y + 28 + "px" }), Xa = { key: e, menu: w, opener: t }, (X = w.querySelector("button:not([disabled])")) == null || X.focus();
  }
  function Ao(e) {
    if (!Xa) return;
    const { menu: t, opener: o } = Xa;
    Xa = null, t.remove(), e && (o == null || o.focus());
  }
  const rr = () => Object.fromEntries([...Mi].map(([e, t]) => [e, { col: t.col, row: t.row }]));
  function Pc(e, t) {
    var g, w;
    if (t === "remove") {
      Ao(), Bd(e);
      return;
    }
    const o = Re, s = Ht(), c = rr(), h = c[e] || { col: 0, row: 0 };
    t.startsWith("w:") && (s.spans = { ...s.spans, [e]: t === "w:full" ? "full" : Number(t.slice(2)) }), t.startsWith("h:") && (s.opts = { ...s.opts, [e]: { ...s.opts[e] || {}, h: Number(t.slice(2)), tall: void 0 } }), t === "graph" && (s.opts = { ...s.opts, energy: { ...s.opts.energy || {}, graph: (((g = s.opts.energy) == null ? void 0 : g.graph) || "above") === "above" ? "below" : "above" } }), t === "left" && (c[e] = { ...h, col: h.col - 1 }), t === "right" && (c[e] = { ...h, col: h.col + 1 }), t === "up" && (c[e] = { ...h, row: h.row - 1 }), t === "down" && (c[e] = { ...h, row: h.row + 1 }), t === "hide" && (s.hidden = [.../* @__PURE__ */ new Set([...s.hidden, e])]), ["left", "right", "up", "down"].includes(t) && (Lt = { key: e, col: c[e].col, row: c[e].row }), fn(s, c), Lt && (Ra(), Lt = null, fn(Ht(), rr()));
    const p = /^[hw]:/.test(t) && !yn() && (Xa == null ? void 0 : Xa.menu.querySelector('[data-board-act="' + CSS.escape(t) + '"]'));
    if (p) {
      const B = Xa;
      p.parentElement.querySelectorAll("[aria-checked]").forEach((N) => N.setAttribute("aria-checked", String(N === p))), setTimeout(() => {
        Xa === B && Ao();
      }, Ha.tabs.dur);
    } else Ao();
    t === "graph" && (kn.delete("dash:energy"), Pa()), t.startsWith("h:") && e.includes(".") && Pa(), Ra(), t !== "hide" ? (w = D.querySelector('[data-board-more="' + CSS.escape(e) + '"]')) == null || w.focus() : Jn(da(e) + " hidden", Ur(o));
  }
  const Dd = (e) => {
    var t;
    return cn.includes(e) && !(((t = Re.dash) == null ? void 0 : t.cells) || {})[e] ? " added" : " put back";
  };
  function cl(e) {
    const t = Ht(), o = da(e) + Dd(e);
    ar({ ...t, hidden: t.hidden.filter((s) => s !== e) }), Ra(), Jn(o);
  }
  const sr = () => Ht().tiles || [...D.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => e.dataset.k).filter((e) => !Ht().hidden.includes(e));
  function jr(e, t) {
    const o = Ht();
    fn({ ...o, tiles: e, hidden: o.hidden.filter((s) => !s.includes(".")) }, t), Pa(), Ca();
  }
  const _d = (e) => {
    jr([...sr().filter((t) => t !== e), e], rr()), Jn(da(e) + " added"), Yr(e);
  }, Bd = (e) => {
    const t = Re, o = rr();
    delete o[e], jr(sr().filter((s) => s !== e), o), Jn(da(e) + " removed", Ur(t));
  };
  let pl = 0;
  function Jn(e, t = null) {
    var p;
    const o = u("toast");
    if (!o) return;
    if (Kh(o, e), t) {
      const g = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      g.addEventListener("click", () => {
        clearTimeout(pl), o.classList.remove("show", "withAction"), t();
      }), o.appendChild(g);
    }
    const s = v.getBoundingClientRect(), c = (p = n.querySelector(".bottomNav")) == null ? void 0 : p.getBoundingClientRect(), h = Bt.classList.contains("open") && !Do ? Math.min(s.right, Bt.getBoundingClientRect().left) : s.right;
    o.style.left = (s.left + h) / 2 + "px", o.style.bottom = (c != null && c.height ? window.innerHeight - c.top + 12 : 26) + "px", o.classList.add("tfToast", "show"), o.classList.toggle("withAction", !!t), $h(o), clearTimeout(pl), pl = setTimeout(() => o.classList.remove("show", "withAction"), t ? 5e3 : Ha.confirm.stay);
  }
  const Nc = 700, Hc = 1e3, Wa = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  Wa.setAttribute("role", "tooltip"), Wa.setAttribute("aria-hidden", "true"), v.appendChild(Wa);
  let Eo = null, Qn = 0, lr = 0, dr = -1 / 0;
  const zl = (e) => {
    if (e.nodeType !== 1) return !1;
    const t = getComputedStyle(e);
    return t.textOverflow === "ellipsis" && e.scrollWidth > e.clientWidth + 1 || t.webkitLineClamp !== "none" && e.scrollHeight > e.clientHeight + 1;
  }, Cs = (e) => {
    for (let t = e; t && t !== v; t = t.parentElement) if (zl(t)) return t;
    return null;
  };
  function Rd(e, t) {
    clearTimeout(Qn), clearTimeout(lr);
    const o = () => {
      if (!e.isConnected) return;
      Eo = e, Wa.textContent = t, Wa.hidden = !1;
      const s = e.getBoundingClientRect(), c = Wa.getBoundingClientRect(), h = s.top - c.height - 8 >= 8 ? s.top - c.height - 8 : s.bottom + 8;
      Wa.style.left = Math.max(8, Math.min(window.innerWidth - c.width - 8, s.left + s.width / 2 - c.width / 2)) + "px", Wa.style.top = h + "px";
    };
    !Wa.hidden || performance.now() - dr < Hc ? o() : Qn = setTimeout(o, Nc);
  }
  function Xo() {
    clearTimeout(Qn), clearTimeout(lr), Wa.hidden || (dr = performance.now()), Wa.hidden = !0, Eo = null;
  }
  n.addEventListener("pointerover", (e) => {
    if (e.pointerType === "touch") return;
    if (Wa.contains(e.target)) {
      clearTimeout(lr);
      return;
    }
    const t = Cs(e.target);
    if (t && St.names === "scroll" && t.matches(ul)) {
      Ai(t);
      return;
    }
    if (t) {
      t !== Eo ? Rd(t, t.textContent.trim()) : clearTimeout(lr);
      return;
    }
    clearTimeout(Qn), clearTimeout(lr), lr = setTimeout(Xo, 120);
  }), n.addEventListener("focusin", (e) => {
    var s;
    const t = e.target;
    if (!((s = t.matches) != null && s.call(t, ":focus-visible"))) return;
    let o = [t, ...t.querySelectorAll("*")].filter(zl);
    St.names === "scroll" && (o.filter((c) => c.matches(ul)).forEach(Ai), o = o.filter((c) => !c.matches(ul))), o.length && Rd(t, o.map((c) => c.textContent.trim()).join(" · "));
  }), n.addEventListener("focusout", (e) => {
    e.target === Eo && Xo();
  }), n.addEventListener("keydown", (e) => {
    e.key === "Escape" && !Wa.hidden && (e.stopPropagation(), Xo());
  }, !0), window.addEventListener("scroll", () => {
    (!Wa.hidden || Qn) && Xo();
  }, { capture: !0, passive: !0 });
  const ul = ".activityRowName,.activityRowMeta", zr = /* @__PURE__ */ new WeakSet();
  function Ai(e) {
    var o;
    if (St.names !== "scroll" || zr.has(e) || e.closest("[inert]") || (o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    zr.add(e);
    const t = () => Promise.all([e.closest(".workoutPanel"), e.closest(".panelExpanded")].filter(Boolean).flatMap((s) => s.getAnimations()).map((s) => s.finished.catch(() => {
    })));
    setTimeout(async () => {
      await t();
      const s = e.isConnected && !e.closest("[inert]") ? e.scrollWidth - e.clientWidth : 0;
      if (s < 2) {
        zr.delete(e);
        return;
      }
      const c = s / 30 * 1e3, h = c + 1e3 + c;
      e.style.textOverflow = "clip";
      const p = e.animate([
        { textIndent: "0px", offset: 0, easing: "ease-in-out" },
        { textIndent: -s + "px", offset: c / h },
        { textIndent: -s + "px", offset: (1e3 + c) / h, easing: "ease-in-out" },
        { textIndent: "0px", offset: 1 }
      ], { duration: h });
      p.onfinish = p.oncancel = () => {
        e.style.textOverflow = "", zr.delete(e);
      };
    }, 600);
  }
  const Gr = new IntersectionObserver((e) => e.forEach((t) => {
    t.isIntersecting && !t.target.closest("[inert]") && (Gr.unobserve(t.target), Ai(t.target));
  }), { threshold: 1 });
  let Ts = !1;
  new MutationObserver(() => {
    Ts || St.names !== "scroll" || (Ts = !0, setTimeout(() => {
      Ts = !1, n.querySelectorAll(ul).forEach((e) => {
        !e.dataset.glided && zl(e) && (e.dataset.glided = "1", Gr.observe(e));
      });
    }, 300));
  }).observe(n, { childList: !0, subtree: !0 });
  const Ur = (e) => () => {
    Re = e, va(), Pa(), Ra(), Ca();
  };
  function Yr(e) {
    const t = () => D.querySelector('.tfDashTiles > [data-k="' + CSS.escape(e) + '"]');
    setTimeout(() => {
      var p;
      const o = t();
      if (!o) return;
      const s = (p = window.matchMedia) == null ? void 0 : p.call(window, "(prefers-reduced-motion: reduce)").matches, c = o.getBoundingClientRect();
      (c.top < 0 || c.bottom > window.innerHeight) && o.scrollIntoView({ behavior: s ? "auto" : "smooth", block: "center" });
      const h = (g) => "0 0 0 4px color-mix(in srgb,var(--primary) " + g + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + g + "%,transparent)";
      o.animate([{ boxShadow: h(55) }, { boxShadow: h(0) }], { duration: 1500, easing: s ? "steps(1, end)" : "ease-out" });
    }, Zr(e) ? 260 : 0);
  }
  function Zr(e) {
    const t = Mi.get(e);
    if (!t || !Bt.classList.contains("open") || Do) return !1;
    const { n: o, w: s } = Ci(D.clientWidth), c = Bt.getBoundingClientRect().left - D.getBoundingClientRect().left, h = (w) => w * (s + Ot) + t.cols * s + (t.cols - 1) * Ot <= c;
    if (h(t.col)) return !1;
    const p = /* @__PURE__ */ new Set();
    Mi.forEach((w, B) => {
      if (B !== e) for (let N = w.row; N < w.row + w.rows; N++) for (let T = w.col; T < w.col + w.cols; T++) p.add(T + "," + N);
    });
    const g = (w, B) => {
      for (let N = B; N < B + t.rows; N++) for (let T = w; T < w + t.cols; T++) if (p.has(T + "," + N)) return !1;
      return !0;
    };
    for (let w = 0; w <= ys; w++) for (let B = 0; B + t.cols <= o && h(B); B++)
      if (g(B, w))
        return fn(Ht(), { ...rr(), [e]: { col: B, row: w } }), Ra(), !0;
    return !1;
  }
  const mn = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, Pd = [["page", "Page"], ["cards", "Cards"], ["areas", "Areas"], ["favs", "Favourites"]];
  let fl = "page";
  const Gl = (e) => e.matches('[data-tray="welcome"],[data-tray="phone"]') ? "page" : e.querySelector("[data-room-add]") ? "areas" : e.querySelector('[data-tray="favs"]') ? "favs" : "cards";
  function Nd(e = !1) {
    const t = Bt.querySelector(".tfTrayInner"), o = Bt.querySelector(".hcTrayTabs"), s = o.querySelector(".rubberIndicator");
    let c = !0;
    t.querySelectorAll(":scope>.tfTraySection").forEach((p) => {
      p.hidden = Gl(p) !== fl, p.classList.toggle("hcFirst", !p.hidden && c), p.hidden || (c = !1);
    }), o.querySelectorAll("[data-tray-tab]").forEach((p) => {
      const g = p.dataset.trayTab === fl;
      p.classList.toggle("active", g), p.setAttribute("aria-selected", String(g));
    });
    const h = o.querySelector(".tab.active");
    h != null && h.offsetWidth && (s.style.transition = "none", e ? vc(s, s.offsetLeft, s.offsetWidth, h.offsetLeft, h.offsetWidth) : (s.style.left = h.offsetLeft + "px", s.style.width = h.offsetWidth + "px"));
  }
  const Bt = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Bt.setAttribute("aria-label", "Edit custom dashboard"), Bt.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit custom dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit custom dashboard"><div class="rubberIndicator" aria-hidden="true"></div>' + Pd.map(([e, t], o) => '<button class="tab segBtn' + (o ? "" : " active") + '" type="button" role="tab" aria-selected="' + !o + '" data-tray-tab="' + e + '">' + t + "</button>").join("") + '</div><section class="tfTraySection" data-tray="welcome"></section><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection" data-tray="weather"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd hcAddBtn" type="button" data-tile-add aria-expanded="false">' + pc + '<span>Add tile</span></button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection"><div class="sectionLabel">Areas</div><p class="tfTrayNote">Which areas the Areas card shows, and one area on its own instead.</p><button class="pill tfTrayAdd" type="button" data-area-choose aria-expanded="false">Choose areas</button><button class="pill tfTrayAdd hcAddBtn" type="button" data-room-add aria-expanded="false">' + pc + '<span>Add area</span></button><ul class="tfTrayList" data-tray="roompick" hidden></ul></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-fav-add aria-expanded="false">' + pc + '<span>Add favourite</span></button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', v.appendChild(Bt);
  const an = Object.assign(document.createElement("div"), { className: "card tfTrayPop" });
  an.setAttribute("role", "dialog"), an.setAttribute("aria-label", "Areas"), an.hidden = !0, v.appendChild(an);
  const cr = () => Bt.querySelector("[data-area-choose]");
  function Ul() {
    const e = new Set(xe().map((t) => t.id));
    an.innerHTML = '<div class="tfTrayPopTitle">Areas</div>' + fe.map((t) => '<div class="tfTrayPopRow"><button class="switch' + (e.has(t.id) ? " on" : "") + '" type="button" role="switch" aria-checked="' + e.has(t.id) + '" aria-label="' + ae(t.name) + '" data-area-on="' + ae(t.id) + '"></button><span class="tfIcon"><span class="tfAreaGlyph"' + ra("area:" + t.id, t.icon || "mdi:texture-box", t.name) + '></span></span><span class="tfTrayPopName">' + ae(t.name) + "</span></div>").join(""), Cn(an);
  }
  function Ei() {
    var e;
    an.hidden || (an.hidden = !0, (e = cr()) == null || e.setAttribute("aria-expanded", "false"));
  }
  function Hd() {
    if (!an.hidden) {
      Ei();
      return;
    }
    Ul(), an.hidden = !1, cr().setAttribute("aria-expanded", "true");
    const e = cr().getBoundingClientRect();
    an.style.top = Math.max(16, Math.min(e.top - 12, innerHeight - an.offsetHeight - 16)) + "px";
  }
  an.addEventListener("click", (e) => {
    var c;
    const t = e.target.closest("[data-area-on]");
    if (!t) return;
    const o = !t.classList.contains("on"), s = new Set(((c = Re.dash) == null ? void 0 : c.areasOff) || []);
    o ? s.delete(t.dataset.areaOn) : s.add(t.dataset.areaOn), ar({ ...Ht(), areasOff: [...s] }), t.classList.toggle("on", o), t.setAttribute("aria-checked", String(o)), Pa();
  }), an.addEventListener("keydown", (e) => {
    var t;
    e.key === "Escape" && (e.stopPropagation(), Ei(), (t = cr()) == null || t.focus());
  });
  let Do = !1, mo = !1, _o = !1, Ja = !1, qt = null, go = !1;
  const Yl = {}, Bo = (e, t) => {
    if (Yl[e] === t) return;
    Yl[e] = t;
    const o = Bt.querySelector('[data-tray="' + e + '"]');
    o.innerHTML = t, Cn(o);
  }, Zl = (e, t) => '<span class="tfTrayName"><span class="activityRowName">' + ae(Ie(e)) + '</span><span class="activityRowMeta">' + ae(t) + "</span></span>", Id = (e, t, o) => '<li class="tfTrayFav' + (t ? " off" : "") + '" data-tray-fav="' + ae(e) + '"><span class="tfTrayGrip" aria-hidden="true">' + cc + '</span><span class="tfIcon"' + ra(e, so(e)) + "></span>" + Zl(e, t ? "Hidden" + (Ve.get(e) ? " · " + Ve.get(e) : "") : Ve.get(e) || fa(e)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + ae(e) + '" aria-pressed="' + !t + '" aria-label="' + (t ? "Show " : "Hide ") + ae(Ie(e)) + ' on the dashboard">' + (t ? Du : wg) + "</button>" + (o ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + ae(e) + '" aria-label="Remove ' + ae(Ie(e)) + ' from favourites">' + fp + "</button>" : "<span></span>") + "</li>";
  function hl(e, t, o, s) {
    const c = e.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(M).filter((p) => t(p) && !o.has(p) && M[p].state !== "unavailable").filter((p) => {
      const g = (Ie(p) + " " + (Ve.get(p) || "") + " " + p).toLowerCase();
      return c.every((w) => g.includes(w));
    }).sort((p, g) => (Ve.get(p) || "~").localeCompare(Ve.get(g) || "~") || Ie(p).localeCompare(Ie(g))).slice(0, 40).map((p) => '<li><button class="tfTrayPickItem" type="button" ' + s + '="' + ae(p) + '"><span class="tfIcon"' + ra(p, so(p)) + "></span>" + Zl(p, Ve.get(p) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  const Fd = "https://www.home-assistant.io/dashboards/", Kl = {
    welcome: ["Welcome message", "<p>Shows a <strong>greeting</strong> above your home's name: good morning, afternoon or evening, then your name.</p>"],
    weather: ["Weather", "<p>The forecast card: now, the next hours in a sentence and the week ahead. Its <strong>Now</strong> opens the Weather page.</p>"],
    energy: ["Energy today", "<p>What your home has used and made today, hour by hour, with <strong>Electricity</strong>, <strong>Solar</strong>, <strong>Gas</strong> and <strong>Water</strong> under it. From your Energy dashboard.</p>"],
    favs: ["Favourite entities", "<p>The devices you use most, at the top of Home.</p><ul><li><strong>Drag</strong> one to change the order</li><li>Press <strong>×</strong> to take it off</li></ul>"],
    suggest: ["Suggested entities", "<p>Fills Favourites with devices you often use, after your own. They change as you use your home.</p>"],
    sums: ["Summaries", "<p>Each summary sums up one kind of thing across your home, like <strong>Lights</strong>: how many are on.</p><ul><li>Switch one off to hide it</li><li><strong>Drag</strong> one to change the order</li></ul>"]
  }, Jt = Object.assign(document.createElement("aside"), { className: "tfEditTray hcHomeTray" });
  Jt.setAttribute("aria-label", "Edit Home page"), Jt.toggleAttribute("inert", !0);
  let Ro = !1, vo = !1, bo = "", Ls = null, ml = "page";
  function Di(e, t) {
    const o = Jt.querySelector(".hcTrayTabs"), s = o == null ? void 0 : o.querySelector(".rubberIndicator"), c = o == null ? void 0 : o.querySelector(".tab.active");
    if (!(c != null && c.offsetWidth)) {
      requestAnimationFrame(() => {
        var h;
        return ((h = Jt.querySelector(".hcTrayTabs .tab.active")) == null ? void 0 : h.offsetWidth) && Di(e, t);
      });
      return;
    }
    s.style.transition = "none", e && t ? vc(s, t.left, t.width, c.offsetLeft, c.offsetWidth) : (s.style.left = c.offsetLeft + "px", s.style.width = c.offsetWidth + "px");
  }
  const Po = (e) => '<button class="hcInfoBtn" type="button" data-info="' + e + '" aria-expanded="false" aria-label="About ' + ae(Kl[e][0]) + '">' + _u + "</button>", wo = (e, t, o) => '<button class="switch' + (e ? " on" : "") + '" type="button" role="switch" aria-checked="' + e + '" aria-label="' + ae(t) + '" ' + o + "></button>", gl = (e) => '<button class="tfTrayBtn hcHeGrip" type="button" data-he-grip aria-label="Move ' + ae(e) + '. Use the up and down arrows">' + cc + "</button>", Od = () => {
    var e;
    return ((e = Re.home) == null ? void 0 : e.sumsWidth) === "fit";
  }, gn = () => {
    var e;
    return ((e = Re.home) == null ? void 0 : e.favsAs) === "strip";
  }, Kr = (e, t, o, s) => '<div class="hcHeLine hcHeChoiceLine"><span class="activityRowName">' + e + '</span><div class="themeChoice hcHeChoice" role="group" aria-label="' + ae(e) + '">' + s.map(([c, h]) => '<button class="wxLayoutBtn" type="button" ' + t + '="' + c + '" aria-pressed="' + (o === c) + '">' + h + "</button>").join("") + "</div></div>", qd = () => An(!0).filter((e) => fd[e.key]).map((e) => e.key);
  function $r() {
    var p, g, w, B, N;
    if (!Ro) return;
    const e = Te(), t = (T) => '<li class="hcHeRow" data-he-id="' + ae(T) + '">' + gl(Ie(T)) + '<span class="tfIcon"' + ra(T, so(T)) + "></span>" + Zl(T, Ve.get(T) || fa(T)) + '<button class="tfTrayBtn" type="button" data-he-remove="' + ae(T) + '" aria-label="Take ' + ae(Ie(T)) + ' off Favourites">' + fp + "</button></li>", o = (T) => {
      const P = fd[T];
      return '<li class="hcHeRow hcHeSum" data-he-id="' + ae(T) + '"' + (P.colour && li(P.colour) ? ' style="' + li(P.colour).slice(1) + '"' : "") + ">" + gl(P.name) + '<span class="tfIcon"' + ra("", P.icon, P.name) + '></span><span class="activityRowName">' + ae(P.name) + "</span>" + wo(po(T), P.name, 'data-he-sum="' + ae(T) + '"') + "</li>";
    }, s = ((p = Jt.querySelector("[data-he-search]")) == null ? void 0 : p.value) || "", c = [["page", "Page"], ["favs", "Favourites"], ["sums", "Summaries"]], h = {
      page: '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + Po("welcome") + wo(Js(), "Welcome message", "data-he-welcome") + "</div>" + // the weather card and Energy today, where the house has them
      (tn() ? '<div class="hcHeLine"><span class="activityRowName">Weather</span>' + Po("weather") + wo(!!((g = Re.home) != null && g.weather), "Weather", 'data-he-card="weather"') + "</div>" : "") + (rn != null && rn.length ? '<div class="hcHeLine"><span class="activityRowName">Energy today</span>' + Po("energy") + wo(!!((w = Re.home) != null && w.energy), "Energy today", 'data-he-card="energy"') + "</div>" : "") + Kr("Cards", "data-he-cards-as", To(), [["stacked", "Stacked"], ["rows", "Rows"]]) + '<hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Group by floor</span>' + wo(Xn("byFloor"), "Group by floor", 'data-he-flag="byFloor"') + "</div>" + Kr("Layout", "data-he-area-layout", ks(), [["rows", "Rows"], ["columns", "Columns"], ["bento", "Bento"]]) + (ks() === "bento" ? '<div class="hcHeLine"><span class="activityRowName">Floors as boxes</span>' + wo(Xn("bentoBoxes"), "Floors as boxes", 'data-he-flag="bentoBoxes"') + '</div><div class="hcHeLine"><span class="activityRowName">Mixed sizes</span>' + wo(Xn("bentoMixed"), "Mixed sizes", 'data-he-flag="bentoMixed"') + "</div>" : "") + Kr("Area cards", "data-he-area-size", Ad(), [["s", "Small"], ["m", "Medium"], ["l", "Large"]]),
      favs: '<div class="hcHeLine"><span class="activityRowName">Show favourites</span>' + wo(((B = Re.home) == null ? void 0 : B.favs) !== !1, "Show favourites", 'data-he-card="favs"') + '</div><hr class="hcHeRule"><div class="hcHeLabel"><span class="activityRowName">Favourite entities</span>' + Po("favs") + "</div>" + Kr("Show as", "data-he-favs-as", gn() ? "strip" : "card", [["card", "Card"], ["strip", "Strip"]]) + '<ul class="tfTrayList hcHeList" data-he-list="favs">' + (e.map(t).join("") || '<li class="tfTrayNote">No favourites yet.</li>') + '</ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-he-add aria-expanded="' + vo + '">' + pc + '<span>Add favourite</span></button><div class="tfTrayPick" data-he-pick' + (vo ? "" : " hidden") + '><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-he-search value="' + ae(s) + '"><ul class="tfTrayList">' + (vo ? hl(s, (T) => mn.test(T), new Set(e), "data-he-pick-id") : "") + '</ul></div><hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Suggested entities</span>' + Po("suggest") + wo(We(), "Suggested entities", "data-he-suggest") + "</div>",
      sums: '<div class="hcHeLine"><span class="activityRowName">Show summaries</span>' + Po("sums") + wo(((N = Re.home) == null ? void 0 : N.sums) !== !1, "Show summaries", 'data-he-card="sums"') + "</div>" + Kr("Width", "data-he-sums-width", Od() ? "fit" : "match", [["match", "Match the cards"], ["fit", "Fit the summaries"]]) + '<hr class="hcHeRule"><ul class="tfTrayList hcHeList" data-he-list="sums">' + qd().map(o).join("") + "</ul>"
    };
    Jt.querySelector("[data-he-body]").innerHTML = // the note about the areas page first (Matt, 12 Nov: "to the top of the rollover"), as Home Assistant's dialog has it
    '<p class="tfTrayNote hcHeAreasNote">You can rearrange your floors and areas in the order that best represents your house on the <button type="button" class="hcHeLink" data-path="/config/areas/dashboard">areas page</button>.</p><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit Home page"><div class="rubberIndicator" aria-hidden="true"></div>' + c.map(([T, P]) => '<button class="tab segBtn' + (T === ml ? " active" : "") + '" type="button" role="tab" aria-selected="' + (T === ml) + '" data-he-tab="' + T + '">' + P + "</button>").join("") + '</div><div class="hcHeTabBody" role="tabpanel">' + h[ml] + "</div>", Di(!1), Cn(Jt);
  }
  const As = (e) => {
    Re = { ...Re, ...e }, va(), Pa(), $r();
  }, eo = (e) => As({ home: { ...Re.home || {}, ...e } });
  function $l(e) {
    Es(), Ro = e, vo = !1, Jt.classList.toggle("open", e), Jt.toggleAttribute("inert", !e), v.classList.toggle("hcHomeEditing", e), k && D && Ra();
    const t = u("dashEditNav"), o = Jt.querySelector(".tfTrayHead");
    t && e && (Ls = t.parentElement, o.appendChild(t)), t && !e && Ls && Ls.appendChild(t), t && (t.classList.toggle("active", e), t.setAttribute("aria-pressed", String(e)), t.setAttribute("aria-label", e ? "Done editing Home" : "Edit Home page"), t.title = e ? "Done" : "Edit", t.innerHTML = e ? Ru : uc), e ? (bo = JSON.stringify(Re), $r()) : bo && JSON.stringify(Re) !== bo && Jn("Changes saved");
  }
  Jt.innerHTML = '<div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit Home page</div></div><div class="hcHeBody" data-he-body></div></div>', v.appendChild(Jt);
  let Sa = null;
  const to = Object.assign(document.createElement("div"), { className: "card hcInfoPop", hidden: !0 });
  to.setAttribute("role", "dialog"), v.appendChild(to);
  function Es() {
    Sa && (Sa.setAttribute("aria-expanded", "false"), Sa = null, to.hidden = !0);
  }
  function Xr(e) {
    const t = Sa;
    if (Es(), t === e) return;
    const [o, s] = Kl[e.dataset.info];
    to.setAttribute("aria-label", o), to.innerHTML = '<div class="hcInfoTitle">' + ae(o) + '</div><div class="hcInfoText">' + s + '</div><a class="hcInfoMore" href="' + Fd + '" target="_blank" rel="noopener">Learn more</a>', to.hidden = !1, Sa = e, e.setAttribute("aria-expanded", "true");
    const c = e.getBoundingClientRect(), h = to.offsetWidth, p = to.offsetHeight;
    to.style.left = Math.max(8, Math.min(innerWidth - h - 8, c.left + c.width / 2 - h / 2)) + "px", to.style.top = (c.bottom + 8 + p > innerHeight - 8 ? Math.max(8, c.top - 8 - p) : c.bottom + 8) + "px";
  }
  n.addEventListener("pointerdown", (e) => {
    Sa && !e.composedPath().some((t) => t === to || t === Sa) && Es();
  }, !0), n.addEventListener("keydown", (e) => {
    var t;
    if (e.key === "Escape") {
      if (Sa) {
        e.stopPropagation();
        const o = Sa;
        Es(), o.focus();
        return;
      }
      if (vo) {
        e.stopPropagation(), vo = !1, $r();
        return;
      }
      Ro && (e.stopPropagation(), $l(!1), (t = u("dashEditNav")) == null || t.focus());
    }
  }, !0);
  const Ds = (e) => e.dataset.heList === "favs" ? Te() : qd(), vl = (e, t) => e.dataset.heList === "favs" ? As({ favourites: t }) : eo({ sumOrder: t });
  Jt.addEventListener("keydown", (e) => {
    var g;
    const t = e.target.closest("[data-he-grip]");
    if (!t || !["ArrowUp", "ArrowDown"].includes(e.key)) return;
    e.preventDefault();
    const o = t.closest("[data-he-id]"), s = o.parentElement, c = Ds(s), h = c.indexOf(o.dataset.heId), p = h + (e.key === "ArrowUp" ? -1 : 1);
    p < 0 || p >= c.length || (c.splice(p, 0, c.splice(h, 1)[0]), vl(s, c), (g = Jt.querySelector('[data-he-list="' + s.dataset.heList + '"] [data-he-id="' + CSS.escape(o.dataset.heId) + '"] [data-he-grip]')) == null || g.focus());
  }), Jt.addEventListener("pointerdown", (e) => {
    const t = e.target.closest("[data-he-grip]");
    if (!t || e.button !== 0) return;
    e.preventDefault();
    const o = t.closest("[data-he-id]"), s = o.parentElement;
    o.classList.add("moving");
    const c = (p) => {
      const g = [...s.children].filter((B) => B !== o), w = g.find((B) => {
        const N = B.getBoundingClientRect();
        return p.clientY < N.top + N.height / 2;
      });
      w !== o.nextElementSibling && s.insertBefore(o, w || null);
    }, h = () => {
      removeEventListener("pointermove", c), removeEventListener("pointerup", h), o.classList.remove("moving"), vl(s, [...s.children].map((p) => p.dataset.heId).filter(Boolean));
    };
    addEventListener("pointermove", c), addEventListener("pointerup", h);
  }), Jt.addEventListener("input", (e) => {
    if (e.target.matches("[data-he-search]")) {
      const t = e.target.selectionStart;
      $r();
      const o = Jt.querySelector("[data-he-search]");
      o.focus(), o.setSelectionRange(t, t);
    }
  }), Jt.addEventListener("click", (e) => {
    var se, Z;
    const t = e.target, o = t.closest("[data-info]");
    if (o) {
      Xr(o);
      return;
    }
    const s = t.closest("[data-he-tab]");
    if (s) {
      const X = Jt.querySelector(".hcTrayTabs .rubberIndicator"), V = { left: X.offsetLeft, width: X.offsetWidth };
      ml = s.dataset.heTab, vo = !1, Es(), $r(), Di(!0, V), Jt.querySelector(".tfTrayInner").scrollTop = 0;
      return;
    }
    if (t.closest("[data-he-welcome]")) {
      eo({ welcome: !Js() });
      return;
    }
    const c = t.closest("[data-he-card]");
    if (c) {
      const X = c.dataset.heCard, V = ["sums", "favs"].includes(X) ? ((se = Re.home) == null ? void 0 : se[X]) !== !1 : !!((Z = Re.home) != null && Z[X]);
      eo({ [X]: !V });
      return;
    }
    const h = t.closest("[data-he-favs-as]");
    if (h) {
      eo({ favsAs: h.dataset.heFavsAs });
      return;
    }
    const p = t.closest("[data-he-sums-width]");
    if (p) {
      eo({ sumsWidth: p.dataset.heSumsWidth });
      return;
    }
    const g = t.closest("[data-he-area-size]");
    if (g) {
      eo({ areaSize: g.dataset.heAreaSize });
      return;
    }
    const w = t.closest("[data-he-area-layout]");
    if (w) {
      eo({ areaLayout: w.dataset.heAreaLayout });
      return;
    }
    const B = t.closest("[data-he-cards-as]");
    if (B) {
      eo({ cardsAs: B.dataset.heCardsAs });
      return;
    }
    const N = t.closest("[data-he-flag]");
    if (N) {
      const X = N.dataset.heFlag;
      eo({ [X]: !Xn(X) });
      return;
    }
    if (t.closest("[data-he-suggest]")) {
      As({ suggest: !We() });
      return;
    }
    const T = t.closest("[data-he-sum]");
    if (T) {
      const X = T.dataset.heSum, V = !po(X), we = Re.home || {};
      eo(Tu.includes(X) ? { shownSums: V ? [...we.shownSums || [], X] : (we.shownSums || []).filter((Y) => Y !== X) } : { hiddenSums: V ? (we.hiddenSums || []).filter((Y) => Y !== X) : [...we.hiddenSums || [], X] });
      return;
    }
    const P = t.closest("[data-he-remove]");
    if (P) {
      As({ favourites: Te().filter((X) => X !== P.dataset.heRemove) });
      return;
    }
    if (t.closest("[data-he-add]")) {
      vo = !vo, $r(), vo && Jt.querySelector("[data-he-search]").focus({ preventScroll: !0 });
      return;
    }
    const Q = t.closest("[data-he-pick-id]");
    Q && (vo = !1, Jt.querySelector("[data-he-search]").value = "", As({ favourites: [...Te(), Q.dataset.hePickId] }));
  });
  function Ca() {
    var B, N;
    const e = un && v.classList.contains("tfBoard");
    if (Bt.classList.toggle("open", e), Bt.classList.toggle("tucked", e && Do), Bt.toggleAttribute("inert", !e), e || (go = !1), (!e || !v.classList.contains("tfEditing")) && Ei(), Vd(), !e) return;
    const t = Bt.querySelector("[data-tray-tuck]");
    t.innerHTML = Do ? vu : Bu, t.setAttribute("aria-expanded", String(!Do)), t.setAttribute("aria-label", Do ? "Show the edit tray" : "Tuck the edit tray away");
    const o = Ht().hidden.filter((T) => !$o.includes(T) && Ti().some((P) => P.key === T)), s = (T, P) => '<button class="tfTrayCard" type="button" data-tray-card="' + ae(T) + '" aria-label="' + ae(da(T)) + ": drag it onto the board, or press to " + P + '"><span class="tfTrayGrip" aria-hidden="true">' + cc + "</span>" + ae(da(T)) + "</button>", c = o.filter((T) => !ea.includes(T)), h = ea.filter((T) => o.includes(T));
    Bo("welcome", '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + Po("welcome") + '<button class="switch' + (Ht().welcome ? " on" : "") + '" type="button" role="switch" aria-checked="' + !!Ht().welcome + '" aria-label="Welcome message" data-dash-welcome></button></div><div class="hcHeLine"><span class="activityRowName">Show summaries</span><button class="switch' + ((B = Re.dash) != null && B.sumsOff ? "" : " on") + '" type="button" role="switch" aria-checked="' + !((N = Re.dash) != null && N.sumsOff) + '" aria-label="Show summaries" data-dash-sums></button></div>'), requestAnimationFrame(() => Nd(!1)), Bo("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (c.length ? '<div class="tfTrayCards">' + c.map((T) => s(T, "put it back")).join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), Bo("weather", '<div class="sectionLabel">Weather</div>' + (h.length ? `<p class="tfTrayNote">The Weather page's widgets. Drag one onto the board, or press to add it.</p><div class="tfTrayCards">` + h.map((T) => s(T, "add it")).join("") + "</div>" : '<p class="tfTrayNote">Every weather widget is on the board.</p>')), Bo("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (Ht().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + go + '">' + (go ? "Hide the phone" : "Show the phone") + "</button>");
    const p = new Set(Re.favHidden || []), g = Te(), w = [...g, ...[...p].filter((T) => !g.includes(T) && M[T])];
    if (Bo("favs", w.map((T) => Id(T, p.has(T), g.includes(T))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Bt.querySelector('[data-pick="tiles"]').hidden = !_o, Bt.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(_o)), _o && Bo("tilepick", hl(Bt.querySelector("[data-tile-search]").value, (T) => hd.includes(T.split(".")[0]), new Set(sr()), "data-tile-pick")), Bt.querySelector('[data-tray="roompick"]').hidden = !Ja, Bt.querySelector("[data-room-add]").setAttribute("aria-expanded", String(Ja)), Ja) {
      const T = new Set(sr());
      Bo("roompick", fe.filter((P) => !T.has("room:" + P.id)).map((P) => '<li><button class="tfTrayPickItem" type="button" data-room-pick="' + ae(P.id) + '"><span class="tfIcon"><span class="tfAreaGlyph"' + ra("area:" + P.id, P.icon || "mdi:texture-box", P.name) + '></span></span><span class="tfTrayName"><span class="activityRowName">' + ae(P.name) + "</span></span></button></li>").join("") || '<li class="tfTrayNote">Every area is on the board.</li>');
    }
    Bt.querySelector('[data-pick="favs"]').hidden = !mo, Bt.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(mo)), mo && Bo("pick", hl(Bt.querySelector("[data-fav-search]").value, (T) => mn.test(T), new Set(Te()), "data-fav-pick")), Bo("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (We() ? " on" : "") + '" type="button" role="switch" aria-checked="' + We() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const Jo = (e) => {
    Re = { ...Re, ...e }, va(), Pa(), Ca();
  };
  function _s(e, t) {
    const o = Re, s = new Set(Re.favHidden || []);
    t ? s.delete(e) : s.add(e), Jo({ favHidden: [...s] }), t ? Jn(Ie(e) + " put back") : Jn(Ie(e) + " hidden", Ur(o));
  }
  const pr = (e) => {
    const t = Re;
    Jo({ favourites: Te().filter((o) => o !== e), favHidden: (Re.favHidden || []).filter((o) => o !== e) }), Jn(Ie(e) + " removed from favourites", Ur(t));
  }, bl = (e) => {
    Jo({ favourites: [...Te().filter((t) => t !== e), e], favHidden: (Re.favHidden || []).filter((t) => t !== e) }), Jn(Ie(e) + " added to favourites");
  };
  Bt.addEventListener("click", (e) => {
    var o, s;
    const t = e.target.closest("button");
    if (t) {
      if (t.hasAttribute("data-tray-tab")) {
        fl = t.dataset.trayTab, Nd(!0), Bt.querySelector(".tfTrayInner").scrollTop = 0;
        return;
      }
      if (t.hasAttribute("data-tray-done")) dl(!1);
      else if (t.hasAttribute("data-info")) Xr(t);
      else if (t.hasAttribute("data-dash-sums"))
        ar({ ...tr(), hidden: tr().hidden.filter((c) => c !== "sums"), sumsOff: !((o = Re.dash) != null && o.sumsOff) }), Pa(), Ca();
      else if (t.hasAttribute("data-dash-welcome")) {
        const c = Ht();
        ar({ ...c, welcome: !c.welcome }), Pa(), Ca();
      } else t.hasAttribute("data-tray-tuck") ? (Do = !Do, Ca()) : t.hasAttribute("data-phone-toggle") ? (go = !go, Ca(), go && ((s = wa.querySelector("[data-phone-key]")) == null || s.focus({ preventScroll: !0 }))) : t.dataset.trayCard ? e.detail === 0 && (cl(t.dataset.trayCard), Ca()) : t.dataset.favEye ? _s(t.dataset.favEye, t.getAttribute("aria-pressed") !== "true") : t.dataset.favRemove ? pr(t.dataset.favRemove) : t.hasAttribute("data-fav-add") ? (mo = !mo, Ca(), mo && Bt.querySelector("[data-fav-search]").focus({ preventScroll: !0 })) : t.dataset.favPick ? bl(t.dataset.favPick) : t.hasAttribute("data-tile-add") ? (_o = !_o, Ca(), _o && Bt.querySelector("[data-tile-search]").focus({ preventScroll: !0 })) : t.dataset.tilePick ? _d(t.dataset.tilePick) : t.hasAttribute("data-area-choose") ? Hd() : t.hasAttribute("data-room-add") ? (Ja = !Ja, Ca()) : t.dataset.roomPick ? _d("room:" + t.dataset.roomPick) : t.hasAttribute("data-fav-suggest") && Jo({ suggest: !We() });
    }
  }), Bt.addEventListener("input", (e) => {
    e.target.matches("[data-fav-search],[data-tile-search]") && Ca();
  }), Bt.addEventListener("keydown", (e) => {
    var o, s;
    const t = !!((s = (o = e.target).closest) != null && s.call(o, '[data-pick="tiles"],[data-tile-add]'));
    e.key !== "Escape" || !(t ? _o : mo) || (e.stopPropagation(), t ? _o = !1 : mo = !1, Ca(), Bt.querySelector(t ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function Xl(e, t, o, s) {
    e.preventDefault();
    const c = e.clientX, h = e.clientY;
    let p = null, g = 0;
    const w = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), B = (T) => {
      if (!p) {
        if (Math.hypot(T.clientX - c, T.clientY - h) < 4) return;
        p = t.cloneNode(!0), p.classList.add("tfTrayGhost"), p.style.width = t.offsetWidth + "px", v.appendChild(p);
      }
      p.style.transform = "translate(" + (T.clientX - 24) + "px," + (T.clientY - 24) + "px)";
      const P = !Do && T.clientX >= Bt.getBoundingClientRect().left;
      if (o === "card") {
        const Z = D.getBoundingClientRect(), { w: X } = Ci(D.clientWidth);
        Lt = !P && T.clientX >= Z.left && T.clientX <= Z.right && T.clientY >= Z.top + Si ? { key: s, col: Math.max(0, Math.floor((T.clientX - Z.left) / (X + Ot))), row: Math.max(0, Math.floor((T.clientY - Z.top - Si) / ho)), fromTray: !0 } : null, g || (g = requestAnimationFrame(() => {
          g = 0, Ra();
        }));
        return;
      }
      const Q = D.querySelector(".tfDash-favs"), se = Q == null ? void 0 : Q.getBoundingClientRect();
      if (qt = null, se && !P && T.clientX >= se.left && T.clientX <= se.right && T.clientY >= se.top && T.clientY <= se.bottom) {
        let Z = 1 / 0;
        Q.querySelectorAll('[data-k^="fav:"]').forEach((X, V) => {
          const we = X.getBoundingClientRect(), Y = Math.hypot(T.clientX - (we.left + we.width / 2), T.clientY - (we.top + we.height / 2));
          Y < Z && (Z = Y, qt = { i: V, r: we, after: T.clientX > we.left + we.width / 2 });
        }), qt || (qt = { i: 0, r: null, after: !1 });
      }
      qt != null && qt.r ? (w.isConnected || v.appendChild(w), Object.assign(w.style, { left: (qt.after ? qt.r.right : qt.r.left) - 2 + "px", top: qt.r.top + 8 + "px", height: qt.r.height - 16 + "px" })) : w.remove();
    }, N = () => {
      if (window.removeEventListener("pointermove", B), window.removeEventListener("pointerup", N), window.removeEventListener("pointercancel", N), cancelAnimationFrame(g), p == null || p.remove(), w.remove(), o === "card") {
        if (!p) cl(s);
        else if (Lt != null && Lt.fromTray) {
          Ra();
          const Z = da(s) + Dd(s), X = Ht(), V = rr();
          Lt = null, fn({ ...X, hidden: X.hidden.filter((we) => we !== s) }, V), Jn(Z);
        }
        Lt = null, Ra(), Pa(), Ca();
        return;
      }
      if (!qt) return;
      const T = new Set(Re.favHidden || []);
      T.delete(s);
      const P = Te().filter((Z) => Z !== s), Q = P.filter((Z) => !T.has(Z)), se = Q[Math.min(qt.i + (qt.after ? 1 : 0), Q.length)];
      P.splice(se ? P.indexOf(se) : P.length, 0, s), qt = null, Jo({ favourites: P, favHidden: [...T] }), Jn(Ie(s) + " put back");
    };
    window.addEventListener("pointermove", B), window.addEventListener("pointerup", N), window.addEventListener("pointercancel", N);
  }
  const Jl = {
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
  }, _i = 136, Wd = 288, Ta = 0.8, Ic = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, wa = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  wa.setAttribute("aria-label", "Phone order"), wa.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + fp + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', v.appendChild(wa);
  let wl = "";
  function Vd() {
    var g;
    const e = go && un && v.classList.contains("tfBoard") && !Do;
    if (wa.classList.toggle("open", e), wa.toggleAttribute("inert", !e), !e) return;
    const t = rl().filter((w) => !Ht().hidden.includes(w.key)), o = t.length, s = (w) => Math.round(w * Ta * 10) / 10 + "px", c = (w, B) => {
      const N = w.el.classList.contains("tfDac"), T = w.tile ? N ? Wd : _i : Jl[w.key] || _i;
      return '<button class="tfPhoneBlock' + (w.tile ? " tile" : "") + '" type="button" data-phone-key="' + ae(w.key) + '" style="min-height:' + s(T) + '" aria-label="' + ae(da(w.key) + ", " + (B + 1) + " of " + o + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (w.tile ? ra(w.key, so(w.key)) : ra(w.key, Ic[w.key])) + '></span><span class="tfPhoneName">' + ae(da(w.key)) + "</span></button>";
    }, h = '<div class="tfPhoneTitle">' + ae(((g = D.querySelector(".tfDashTitle")) == null ? void 0 : g.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + s(Jl.sums) + '"><span class="tfPhoneName">' + ae(da("sums")) + "</span></div>" + t.map(c).join("");
    if (wa.querySelector('[data-phone="note"]').innerHTML = Ht().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", h === wl) return;
    wl = h;
    const p = wa.querySelector('[data-phone="list"]');
    p.innerHTML = h, Cn(p);
  }
  function xl(e, t) {
    var o;
    ar({ ...Ht(), phone: e }), Ca(), t && ((o = wa.querySelector('[data-phone-key="' + CSS.escape(t) + '"]')) == null || o.focus({ preventScroll: !0 }));
  }
  const yl = () => [...wa.querySelectorAll("[data-phone-key]")].map((e) => e.dataset.phoneKey);
  function kl(e, t) {
    e.preventDefault();
    const o = t.parentElement, s = wa.querySelector(".tfPhoneScreen"), c = yl().join();
    t.classList.add("moving");
    const h = (g) => {
      const w = s.getBoundingClientRect();
      g.clientY > w.bottom - 40 ? s.scrollTop += 12 : g.clientY < w.top + 40 && (s.scrollTop -= 12);
      const B = [...o.querySelectorAll("[data-phone-key]")].find((P) => {
        const Q = P.getBoundingClientRect();
        return P !== t && g.clientX >= Q.left && g.clientX <= Q.right && g.clientY >= Q.top && g.clientY <= Q.bottom;
      });
      if (!B) return;
      const N = B.getBoundingClientRect(), T = B.classList.contains("tile") ? g.clientX < N.left + N.width / 2 : g.clientY < N.top + N.height / 2;
      o.insertBefore(t, T ? B : B.nextSibling);
    }, p = () => {
      window.removeEventListener("pointermove", h), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p), t.classList.remove("moving");
      const g = yl();
      wl = "", g.join() !== c ? xl(g) : Vd();
    };
    window.addEventListener("pointermove", h), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  }
  wa.addEventListener("pointerdown", (e) => {
    const t = e.target.closest("[data-phone-key]");
    t && e.button <= 0 && kl(e, t);
  }), wa.addEventListener("click", (e) => {
    var o;
    const t = e.target.closest("button");
    if (t != null && t.hasAttribute("data-phone-close"))
      go = !1, Ca(), (o = Bt.querySelector("[data-phone-toggle]")) == null || o.focus({ preventScroll: !0 });
    else if (t != null && t.hasAttribute("data-phone-reset")) {
      const { phone: s, ...c } = Ht();
      ar(c), Ca();
    }
  }), wa.addEventListener("keydown", (e) => {
    var p, g, w, B;
    if (e.key === "Escape") {
      e.stopPropagation(), go = !1, Ca(), (p = Bt.querySelector("[data-phone-toggle]")) == null || p.focus({ preventScroll: !0 });
      return;
    }
    const t = (B = (w = (g = e.target).closest) == null ? void 0 : w.call(g, "[data-phone-key]")) == null ? void 0 : B.dataset.phoneKey, o = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[e.key];
    if (!t || !o) return;
    e.preventDefault();
    const s = yl(), c = s.indexOf(t), h = c + o;
    h < 0 || h >= s.length || ([s[c], s[h]] = [s[h], s[c]], xl(s, t));
  });
  function Fc(e, t) {
    e.preventDefault();
    const o = t.parentElement;
    t.classList.add("moving");
    const s = (h) => {
      const p = [...o.children].find((g) => {
        const w = g.getBoundingClientRect();
        return g !== t && h.clientY >= w.top && h.clientY <= w.bottom;
      });
      if (p) {
        const g = p.getBoundingClientRect();
        o.insertBefore(t, h.clientY < g.top + g.height / 2 ? p : p.nextSibling);
      }
    }, c = () => {
      window.removeEventListener("pointermove", s), window.removeEventListener("pointerup", c), window.removeEventListener("pointercancel", c), t.classList.remove("moving");
      const h = new Set(Te());
      Yl.favs = null, Jo({ favourites: [...o.children].map((p) => p.dataset.trayFav).filter((p) => h.has(p)) });
    };
    window.addEventListener("pointermove", s), window.addEventListener("pointerup", c), window.addEventListener("pointercancel", c);
  }
  Bt.addEventListener("pointerdown", (e) => {
    if (e.button > 0) return;
    const t = e.target.closest("[data-tray-card]"), o = e.target.closest(".tfTrayFav");
    t ? Xl(e, t, "card", t.dataset.trayCard) : o && e.target.closest(".tfTrayGrip") ? Fc(e, o) : o != null && o.classList.contains("off") && !e.target.closest("button") && Xl(e, o, "fav", o.dataset.trayFav);
  });
  function Oc(e) {
    if (!un || e.button !== 0 || e.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const t = e.target.closest(".tfBoardItem"), o = t && Ti().find((Vt) => Vt.el === t);
    if (!o || $o.includes(o.key)) return;
    const s = Mi.get(o.key), { w: c } = Ci(D.clientWidth);
    if (!s) return;
    e.preventDefault(), Ao();
    const h = e.clientX, p = e.clientY;
    let g = !1, w = 0;
    const B = Ha.drag, N = yn();
    let T = 0, P = 0, Q = 0, se = 0, Z = 0, X = 0, V = N || B.stick === 0, we = 0;
    const Y = (Vt, Da, Qe, kt) => {
      t.style.transform = "translate(" + Q.toFixed(2) + "px," + se.toFixed(2) + "px) rotate(" + Vt.toFixed(2) + "deg) rotate(" + Da + "rad) scale(" + Qe.toFixed(4) + "," + kt.toFixed(4) + ") rotate(" + -Da + "rad)";
    }, ze = () => {
      if (we = requestAnimationFrame(ze), N) {
        Q = T, se = P, Y(0, 0, 1, 1);
        return;
      }
      if (!V) {
        const Rn = Math.min(Math.hypot(T, P) / Math.max(1, B.stick), 1);
        Q = T * 0.35, se = P * 0.35, Y(0, Math.atan2(P, T), 1 + 0.155 * Rn, 1 - 0.1 * Rn);
        return;
      }
      Z = zp(Z, T - Q, B.pull / 100, B.keep / 100), X = zp(X, P - se, B.pull / 100, B.keep / 100), Q += Z, se += X;
      const Vt = Math.hypot(Z, X), Da = Math.min(Vt / 48, 1), Qe = Math.max(-5, Math.min(B.tilt, Z * 0.32)), kt = 1 + B.lift / 100;
      Y(Qe, Math.atan2(X, Z), kt * (1 + 0.1 * Da), kt * (1 - 0.063 * Da));
    }, It = (Vt) => {
      if (T = Vt.clientX - h, P = Vt.clientY - p, !g) {
        if (Math.hypot(T, P) < 4) return;
        g = !0, Lt = { key: o.key, col: s.col, row: s.row }, t.classList.add("tfDragging", "mvDrag"), we = requestAnimationFrame(ze);
      }
      !V && Math.hypot(T, P) > B.stick && (V = !0, Z = T * 0.085, X = P * 0.085), Lt.col = Math.round((s.x + T) / (c + Ot)), Lt.row = Math.round((s.y + P - Si) / ho), w || (w = requestAnimationFrame(() => {
        w = 0, Ra();
      }));
    }, st = () => {
      var Jd;
      if (window.removeEventListener("pointermove", It), window.removeEventListener("pointerup", st), window.removeEventListener("pointercancel", st), !g) return;
      const Vt = (dd) => {
        dd.preventDefault(), dd.stopImmediatePropagation();
      };
      window.addEventListener("click", Vt, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", Vt, { capture: !0 }), 300), cancelAnimationFrame(w), cancelAnimationFrame(we);
      const Da = t.getBoundingClientRect(), Qe = o.key;
      t.style.transition = "none", Ra(), t.classList.remove("tfDragging", "mvDrag"), t.style.transform = "", Lt = null, fn(Ht(), rr()), Ra(), Pa();
      const kt = (Jd = Ti().find((dd) => dd.key === Qe)) == null ? void 0 : Jd.el;
      if (requestAnimationFrame(() => {
        t.style.transition = "", kt && (kt.style.transition = "");
      }), !kt || N) return;
      kt.style.transition = "none";
      const Rn = kt.getBoundingClientRect(), Pi = Da.left + Da.width / 2 - (Rn.left + Rn.width / 2), Xd = Da.top + Da.height / 2 - (Rn.top + Rn.height / 2);
      kt.style.zIndex = "20", kt.animate([{ transform: "translate(" + Pi + "px," + Xd + "px) scale(" + (1 + B.lift / 100) + ")" }, { transform: "none" }], { duration: B.slide, easing: Va.land }).finished.then(() => {
        kt.style.zIndex = "", Gp(kt);
      }, () => {
        kt.style.zIndex = "";
      });
    };
    window.addEventListener("pointermove", It), window.addEventListener("pointerup", st), window.addEventListener("pointercancel", st);
  }
  function Bs(e = !1) {
    const t = D == null ? void 0 : D.querySelector(".tfDashGraph svg[data-graph]");
    if (!(t != null && t.clientWidth)) return;
    const o = t.dataset.graph + "@" + t.clientWidth + "x" + t.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (t.dataset.drawn === o) return;
    const s = !t.dataset.drawn;
    t.dataset.drawn = o;
    const c = kd.find((h) => h.id === t.dataset.graph);
    c ? Md(t, c).then(() => {
      (e || s) && Xs(t);
    }) : Is(t.dataset.graph, t).then(() => {
      e && Rr(t);
    });
  }
  function _n() {
    var w, B, N;
    qe = rs.model(i(), { madeUp: !E }), Ft(), M = qe.states, M[(w = Re.sources) == null ? void 0 : w.grid] && (qe.grid = Re.sources.grid), M[(B = Re.sources) == null ? void 0 : B.alarm] && (qe.security.alarms = [Re.sources.alarm]), Le.forEach((T, P) => {
      const Q = M[P], se = (Q == null ? void 0 : Q.attributes) || {};
      if (!Q || Date.now() - T.at > 2 * 60 * 1e3) {
        Le.delete(P);
        return;
      }
      T.pos != null && Q.state !== "opening" && Q.state !== "closing" && Math.abs(zn(P) - T.pos) < 1 && delete T.pos, T.tilt != null && Math.abs((se.current_tilt_position ?? -1) - T.tilt) < 1 && delete T.tilt, T.pos == null && T.tilt == null && Le.delete(P);
    });
    const e = [];
    let t = 0;
    const o = tt();
    fe = o.filter((T) => T.room).map((T) => T.room), fe.some((T) => T.id === A) || (A = ((N = fe[0]) == null ? void 0 : N.id) || null);
    const s = R === "weather" ? { key: "weather", name: "Weather" } : R && o.find((T) => T.key === R);
    if (s || (R = null), v.classList.toggle("tfAreaOpen", !!s), v.classList.toggle("tfWeatherOpen", (s == null ? void 0 : s.key) === "weather"), v.classList.toggle("tfDash", !s), Ve = /* @__PURE__ */ new Map(), qe.rooms.forEach((T) => [...T.actions, ...T.plugs, ...T.readings, ...T.openings, ...T.solar, ...T.plants.flatMap((P) => [P.id, ...P.readings])].forEach((P) => Ve.set(P, T.name))), !s) return Hr(e, An());
    if (e.push({ key: "areahead", html: Rs(s, ++t) }), s.key === "weather")
      return e.weather = ++t, e;
    const c = s.ids, h = s.room ? s.room.id : s.key, p = s.room;
    p != null && p.solar.length && e.push({ key: "energy:" + p.id, html: ci(p, ++t) }), p && (p.readings.length || p.power != null) && e.push({ key: "readings:" + p.id, html: Un(p, ++t) }), p == null || p.plants.forEach((T) => e.push({ key: "plant:" + T.id, html: cs(T, ++t) }));
    const g = [...c, ...((p == null ? void 0 : p.plugs) || []).filter((T) => !c.includes(T))];
    return g.length && e.push({ key: "block:" + h, order: ++t, tiles: g.map((T) => ({ key: T, html: hi(T) })) }), e;
  }
  const Rs = (e, t) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + t + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + vu + '</button><div class="settingsTitle">' + ae(e.name) + "</div></div>";
  let Ql = 0, ed = null;
  const td = (e) => e === "weather" ? yo.wx : e.startsWith("room:") && D.querySelector('.tfRoomTile[data-k="' + CSS.escape(e) + '"]') || D.querySelector(".tfAreas");
  function ln(e) {
    var t, o;
    R || (Ql = No().scrollTop, ed = ((t = td(e)) == null ? void 0 : t.getBoundingClientRect().top) ?? null), R = e, e.startsWith("room:") && (A = e.slice(5)), xo(), No().scrollTop = 0, (o = D.querySelector("[data-area-back]")) == null || o.focus({ preventScroll: !0 });
  }
  let ao = null;
  function Ps(e, t) {
    if (ao == null || ao(), t == null) return;
    const o = No(), s = performance.now() + 1500, c = ["wheel", "touchstart", "pointerdown", "keydown"];
    let h = 0;
    const p = () => {
      cancelAnimationFrame(h), c.forEach((w) => window.removeEventListener(w, p, !0)), ao = null;
    }, g = () => {
      const w = e();
      if (w != null && w.isConnected) {
        const B = w.getBoundingClientRect().top - t;
        Math.abs(B) > 0.5 && (o.scrollTop += B);
      }
      performance.now() < s ? h = requestAnimationFrame(g) : p();
    };
    c.forEach((w) => window.addEventListener(w, p, { capture: !0, passive: !0 })), ao = p, g();
  }
  function Bn() {
    var o;
    const e = R;
    R = null, xo(), No().scrollTop = Ql, Ps(() => td(e), ed);
    const t = e.startsWith("room:") ? D.querySelector('.tfRoomTile[data-k="' + CSS.escape(e) + '"]') || D.querySelector('.tfAreaPanel[data-area="' + CSS.escape(e.slice(5)) + '"]') : e === "weather" ? yo.wx.querySelector(".wbOpenPage") : D.querySelector('[data-k="sum:' + CSS.escape(e) + '"]');
    (o = (t == null ? void 0 : t.querySelector("[data-go]")) || t) == null || o.focus({ preventScroll: !0 });
  }
  const ur = (e) => e.wrap ? e.wrap(e.tiles.map((t) => t.html).join(""), e) : '<div class="tfBlock" data-tf data-k="' + ae(e.key) + '" style="order:' + e.order + '"><div class="tfActions">' + e.tiles.map((t) => t.html).join("") + "</div></div>", Ml = (e) => e.map((t) => t.key + (t.tiles ? "(" + t.tiles.map((o) => o.key).join(",") + ")" : "")).join(";");
  function No() {
    for (let e = v.parentElement || v.getRootNode().host; e; e = e.parentElement || e.getRootNode().host) {
      const t = getComputedStyle(e).overflowY;
      if ((t === "auto" || t === "scroll") && e.scrollHeight > e.clientHeight) return e;
    }
    return document.scrollingElement;
  }
  function ad(e) {
    const t = No(), o = (g) => {
      const w = g.getBoundingClientRect();
      return w.height && w.bottom > 0 && w.top < window.innerHeight;
    }, s = [...D.children, ...D.querySelectorAll(".tfDashTiles > *")].find((g) => !g.matches(".tfDashTiles") && o(g)), c = s == null ? void 0 : s.dataset.k, h = s == null ? void 0 : s.getBoundingClientRect().top;
    e();
    const p = s != null && s.isConnected ? s : c && D.querySelector('[data-k="' + CSS.escape(c) + '"]');
    p != null && p.isConnected && h != null && (t.scrollTop += p.getBoundingClientRect().top - h);
  }
  function xo() {
    if (!k || !D) return;
    const e = _n(), t = (c) => {
      var h;
      return (((h = c.closest("[data-k]")) == null ? void 0 : h.dataset.k) || "") + "|" + c.dataset.iconFor + "|" + (c.dataset.iconName || "");
    }, o = /* @__PURE__ */ new Map();
    D.querySelectorAll("[data-tf] [data-icon-for]").forEach((c) => {
      c.firstElementChild && (o.get(t(c)) || o.set(t(c), []).get(t(c))).push(c.firstElementChild);
    }), D.querySelectorAll("[data-tf]").forEach((c) => c.remove()), kn.clear();
    const s = document.createElement("div");
    s.innerHTML = e.map((c) => c.tiles ? ur(c) : c.html).join(""), e.forEach((c) => c.tiles ? c.tiles.forEach((h) => kn.set(h.key, h.html)) : kn.set(c.key, c.html)), zs = Ml(e), s.querySelectorAll("[data-icon-for]").forEach((c) => {
      var p;
      const h = !c.firstElementChild && ((p = o.get(t(c))) == null ? void 0 : p.shift());
      h && c.appendChild(h);
    }), D.append(...s.children), Mr(e.weather), $e(), Ms.disconnect(), Ra(), Cn(D), _(D), Ki(D), z(), fr(), ke(), ve(), requestAnimationFrame(ie);
  }
  const nd = (e) => {
    var o;
    const t = n.activeElement && e.contains(n.activeElement) ? n.activeElement : null;
    return t && { label: t.getAttribute("aria-label"), act: (o = t.dataset) == null ? void 0 : o.act };
  }, Jr = (e, t) => {
    var o;
    t && ((o = t.label && e.querySelector('[aria-label="' + CSS.escape(t.label) + '"]') || t.act && e.querySelector('[data-act="' + CSS.escape(t.act) + '"]')) == null || o.focus({ preventScroll: !0 }));
  };
  function Sl(e, t) {
    if (!e.querySelector(".tfDacPad"))
      return e.replaceWith(t), t;
    const o = e.matches(".tfDac") && e.querySelector(":scope > .tfDacPad"), s = t.querySelector(":scope > .tfDacPad");
    if (o)
      return (s == null ? void 0 : s.dataset.dac) !== o.dataset.dac ? (e.replaceWith(t), t) : (e.querySelector(":scope > .tfActionHead").replaceWith(t.querySelector(":scope > .tfActionHead")), e.classList.toggle("on", t.classList.contains("on")), ["data-light", "data-tone"].forEach((p) => t.hasAttribute(p) ? e.setAttribute(p, t.getAttribute(p)) : e.removeAttribute(p)), [...e.style].filter((p) => p.startsWith("--") && !p.startsWith("--tf-")).forEach((p) => e.style.removeProperty(p)), [...t.style].forEach((p) => e.style.setProperty(p, t.style.getPropertyValue(p))), e);
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
    return [...e.children].forEach((p, g) => Sl(p, h[g])), e;
  }
  function od(e, t) {
    const o = document.createElement("div");
    o.innerHTML = t;
    const s = nd(e), c = Sl(e, o.firstElementChild);
    Cn(c), _(c), Ki(c), Jr(c, s);
  }
  function Pa() {
    !k || !D || Lt || ad(jd);
  }
  function jd() {
    if (!D.querySelector("[data-tf]")) {
      xo();
      return;
    }
    const e = _n();
    if (Ml(e) !== zs) {
      xo();
      return;
    }
    const t = (o) => [...ce.keys()].some((s) => {
      const c = s.slice(s.indexOf("|") + 1);
      return o === c || o.endsWith(":" + c);
    });
    e.forEach((o) => (o.tiles || [o]).forEach((s) => {
      if (kn.get(s.key) === s.html || t(s.key)) return;
      const c = D.querySelector('[data-k="' + CSS.escape(s.key) + '"]');
      c && (kn.set(s.key, s.html), od(c, s.html), s.key.startsWith("energy:") && fr());
    })), ke(), ve(), gs(), z(), it == null || it.update(), ba == null || ba.forEach((o) => o.update()), v.classList.contains("tfDash") && ir(), requestAnimationFrame(ie);
  }
  const Bi = {
    light: (e) => [["Brightness", e.brightness != null ? Math.round(e.brightness / 2.55) + "%" : null], ["Colour temperature", e.color_temp_kelvin ? Number(e.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", e.color_mode && lt(e.color_mode)]],
    climate: (e) => [["Current temperature", Ia(e.current_temperature) + " °C"], ["Target", Ia(e.temperature) + " °C"], ["Action", lt(e.hvac_action)]],
    cover: (e) => [["Position", e.current_position != null ? e.current_position + "% open" : null], ["Tilt", e.current_tilt_position != null ? e.current_tilt_position + "% open" : null]],
    humidifier: (e) => [["Current humidity", e.current_humidity + "%"], ["Target", e.humidity + "%"], ["Mode", lt(e.mode)]],
    media_player: (e) => [["Title", e.media_title], ["Artist", e.media_artist], ["Volume", e.volume_level != null ? Math.round(e.volume_level * 100) + "%" : null], ["Source", e.source]],
    vacuum: (e) => [["Battery", e.battery_level + "%"], ["Fan speed", lt(e.fan_speed)], ["Rooms", (e.rooms || []).join(", ") || null]],
    lock: (e) => [["Changed by", e.changed_by]],
    alarm_control_panel: (e) => [["Changed by", e.changed_by]],
    valve: () => [],
    plant: (e) => [["Moisture", e.moisture + "%"], ["Light", Number(e.brightness).toLocaleString() + " lx"], ["Temperature", Ia(e.temperature) + " °C"], ["Fertility", e.conductivity + " µS/cm"], ["Problems", e.problem === "none" ? "None" : lt(e.problem)]],
    weather: (e) => [["Temperature", e.temperature != null ? e.temperature + " " + (e.temperature_unit || "°C") : null], ["Humidity", e.humidity != null ? e.humidity + "%" : null], ["Wind", e.wind_speed != null ? e.wind_speed + " " + (e.wind_speed_unit || "km/h") : null], ["Pressure", e.pressure != null ? e.pressure + " " + (e.pressure_unit || "hPa") : null]]
  }, id = (e) => ei(e) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function rd(e, t = {}, o = !1) {
    return '<div class="tfMoreList">' + e.map((s) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + ae(s.name) + '</div><div class="tfMoreTiles' + (o ? " single" : "") + '">' + s.ids.map((c) => Za(c, t)).join("") + "</div></div>").join("") + "</div>";
  }
  const Ue = document.createElement("div");
  Ue.className = "tfMoreBackdrop", Ue.hidden = !0, v.appendChild(Ue);
  const vn = document.createElement("div");
  vn.className = "tfMoreBackdrop tfMoreUnder", vn.hidden = !0, v.insertBefore(vn, Ue);
  const Cl = (e, t) => {
    for (let o = e; o && o !== Ue; o = o.parentElement) {
      const s = getComputedStyle(o).overflowY;
      if ((s === "auto" || s === "scroll") && o.scrollHeight > o.clientHeight + 1 && (t < 0 ? o.scrollTop > 0 : o.scrollTop + o.clientHeight < o.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let Ns = null;
  Ue.addEventListener("touchstart", (e) => {
    Ns = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, { passive: !0 }), Ue.addEventListener("touchmove", (e) => {
    var c, h;
    if (!Ns || e.touches.length > 1 || (h = (c = e.target).closest) != null && h.call(c, "input,textarea,select")) return;
    const t = e.touches[0], o = Ns.x - t.clientX, s = Ns.y - t.clientY;
    Ns = { x: t.clientX, y: t.clientY }, Math.abs(s) >= Math.abs(o) && !Cl(e.target, s) && e.preventDefault();
  }, { passive: !1 }), Ue.addEventListener("wheel", (e) => {
    var t, o;
    Math.abs(e.deltaX) > Math.abs(e.deltaY) && ((o = (t = e.target).closest) != null && o.call(t, "[data-more-pages]")) || Cl(e.target, e.deltaY) || e.preventDefault();
  }, { passive: !1 });
  const zd = () => window.innerWidth <= 620;
  let La = null;
  Ue.addEventListener("pointerdown", (e) => {
    const t = Ue.querySelector(".tfMorePair");
    !zd() || !t || !t.contains(e.target) || !e.isPrimary || Ue._closing || e.target.closest("input,textarea,select,.tfDacPad,[data-cover-art],.tfMoreSide") || (La = { x: e.clientX, y: e.clientY, t: performance.now(), dy: 0, v: 0, pair: t, from: e.target, grab: e.target.matches(".tfMore") || !!e.target.closest(".tfMoreHead") });
  }, !0), Ue.addEventListener("pointermove", (e) => {
    if (!La || !e.isPrimary) return;
    const t = e.clientY - La.y, o = performance.now();
    if (!La.on) {
      if (Math.abs(e.clientX - La.x) > 8 || t < -8 || !La.grab && Cl(La.from, -1)) {
        La = null;
        return;
      }
      if (t < 8) return;
      La.on = !0;
      try {
        Ue.setPointerCapture(e.pointerId);
      } catch {
      }
    }
    La.v = (t - La.dy) / Math.max(1, o - La.t), La.dy = t, La.t = o, La.pair.style.transform = "translateY(" + Math.max(0, t) + "px)";
  });
  const Tl = (e) => {
    if (!La || !e.isPrimary) return;
    const t = La;
    if (La = null, !t.on) return;
    const o = (B) => {
      B.preventDefault(), B.stopImmediatePropagation();
    };
    window.addEventListener("click", o, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", o, { capture: !0 }), 300);
    const s = e.type === "pointerup" && (t.dy > 120 || t.v > 0.5), c = "translateY(" + Math.max(0, t.dy) + "px)";
    if (t.pair.style.transform = "", !s || yn()) {
      s ? Ye() : t.pair.animate([{ transform: c }, { transform: "none" }], { duration: 320, easing: Va.spring });
      return;
    }
    const h = L;
    Ue._closing = !0, Ue.style.pointerEvents = "none", Ue.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: Va.exit, fill: "forwards" });
    const p = t.pair.animate([{ transform: c }, { transform: "translateY(calc(100% + 40px))" }], { duration: 220, easing: Va.exit, fill: "forwards" });
    let g = !1;
    const w = () => {
      g || (g = !0, Ue._closing = !1, Ue.style.pointerEvents = "", Ue.getAnimations().forEach((B) => B.cancel()), t.pair.getAnimations().forEach((B) => B.cancel()), L === h && Ye());
    };
    p.finished.then(w, w), setTimeout(w, 300);
  };
  Ue.addEventListener("pointerup", Tl), Ue.addEventListener("pointercancel", Tl);
  function Hs() {
    const e = Ue.querySelector(".tfMorePair"), t = Ue.querySelector(".tfMore");
    e == null || e.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - t.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", Hs, { passive: !0 }), k && yt();
  let Ho = [];
  const Gd = (e) => e === "favourites" || e.startsWith("summary:") || e.startsWith("group:");
  function Ud(e) {
    const t = (w, B = "") => '<div class="tfMoreHead">' + (L != null && L.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + gu + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + ae(w) + "</div>" + B + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + bu + "</button></div>", o = (w, B) => '<div class="tfMoreNow"><div class="tfMoreState">' + ae(w) + "</div></div>", s = rd;
    if (e === "favourites") {
      const w = Te(), B = new Set(w), N = [{ name: "Starred", ids: w }, { name: "Home", ids: qe.homeVacuums }, { name: "Security", ids: [...qe.security.alarms, ...qe.security.locks] }, ...qe.rooms.map((T) => ({ name: T.name, ids: [...T.actions, ...T.plugs] }))].map((T, P) => P ? { ...T, ids: T.ids.filter((Q) => !B.has(Q)) } : T).filter((T) => T.ids.length);
      return [t("Favourites"), o(w.length ? w.length + " starred" : "None starred"), s(N, { star: !0 }, !0)];
    }
    const c = (w, { name: B = "", alert: N = !1, plain: T = !1 } = {}) => {
      const P = T ? [] : w.filter((Z) => hd.includes(Z.split(".")[0])), Q = w.filter((Z) => !P.includes(Z)), se = (Z) => Z.startsWith("vacuum.") && et(Z).battery_level != null ? et(Z).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (B ? '<div class="tfMoreGroupName">' + ae(B) + "</div>" : "") + '<div class="tfMoreActions">' + P.map((Z) => hi(Z, !0)).join("") + Q.map((Z) => Za(Z, { plain: T, alert: N, say: T ? se(Z) : null })).join("") + "</div></div>";
    };
    if (e.startsWith("summary:")) {
      const w = An().find((P) => P.key === e.slice(8));
      if (!w) return null;
      const B = w.key === "light" ? (w.groups || []).flatMap((P) => P.ids) : [], N = B.some((P) => {
        var Q;
        return ((Q = M[P]) == null ? void 0 : Q.state) === "on";
      }), T = B.length ? '<button class="primary" type="button" data-acts="' + Gn(B.map((P) => ["light", N ? "turn_off" : "turn_on", P])) + '">' + (N ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [t(w.name), '<div class="tfMoreNowRow">' + o(w.value) + T + "</div>", ...(w.groups || []).map((P) => c(P.ids, { name: P.name === w.name ? "" : P.name, alert: P.alert, plain: w.plain }))];
    }
    if (e.startsWith("group:")) {
      const [, w, B] = e.split(":"), N = qe.rooms.find((Q) => Q.id === w), T = N && $n(N).find((Q) => Q.key === B);
      if (!T) return null;
      const P = T.acts ? '<button class="primary" type="button" data-acts="' + Gn(T.acts) + '">' + (T.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [t(N.name + " " + T.label.toLowerCase()), '<div class="tfMoreNowRow">' + o(T.value) + P + "</div>", c(co(N, B))];
    }
    const h = e.split(".")[0];
    M[e];
    const p = hd.includes(h) ? Ba(e) : sd(e), g = (L == null ? void 0 : L.page) || 0;
    return [
      Yd(e, p),
      '<div class="tfMorePages" data-more-pages><section class="tfMorePage" aria-label="Control">' + Kd(e) + (h === "plant" ? Pt(e).join("") : "") + p.sections.filter(Boolean).join("") + '</section><section class="tfMorePage" aria-label="Info">' + a(e) + "</section></div>",
      // the pages' icons in place of their dots (Matt, 12 Nov): Control's sliders and Info's (i), a small segmented pair
      '<div class="tfMoreDots tfMorePageIcons" role="tablist" aria-label="Pages">' + [["Control", xg], ["Info", _u]].map(([w, B], N) => '<button type="button" role="tab" aria-selected="' + (N === g) + '" aria-label="' + w + '" title="' + w + '" data-more-page="' + N + '"' + (N === g ? "" : ' tabindex="-1"') + ">" + B + "</button>").join("") + "</div>"
    ];
  }
  function Yd(e, t, o) {
    var p, g, w, B, N;
    const s = (p = qe.areaOf) == null ? void 0 : p.call(qe, e), c = s && (((g = qe.rooms.find((T) => T.id === s)) == null ? void 0 : g.name) || ((N = (B = (w = i()) == null ? void 0 : w.areas) == null ? void 0 : B[s]) == null ? void 0 : N.name)) || "", h = t.button ? fi(e, t) : '<div class="tfIcon"' + ra(e, t.icon) + "></div>";
    return '<div class="tfMoreHead tfMoreTileHead' + (t.on ? " on" : "") + '"' + (t.tone ? ' data-tone="' + t.tone + '"' : "") + jn(e) + ">" + (L != null && L.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + gu + "</button>" : "") + h + '<div class="tfName"><span class="activityRowName" id="tfMoreTitle">' + ae(Ie(e)) + "</span>" + (c ? '<span class="activityRowMeta">' + ae(c) + "</span>" : "") + '</div><button class="tfBack" type="button" data-more-close aria-label="Close">' + bu + "</button></div>";
  }
  const Zd = ["lock", "alarm_control_panel", "switch", "input_boolean", "fan", "valve", "media_player", "automation", "script", "scene", "button"];
  function sd(e) {
    var c;
    const t = e.split(".")[0], o = ((c = M[e]) == null ? void 0 : c.state) === "on", s = up.includes(t) ? { act: Dt(t, "toggle", e), label: "Turn " + Ie(e) + (o ? " off" : " on") } : t === "scene" || t === "script" ? { act: Dt(t, "turn_on", e), label: "Run " + Ie(e) } : null;
    return { sections: [], on: o, button: s, icon: so(e) };
  }
  function Kd(e) {
    const t = e.split(".")[0];
    if (Zd.includes(t) || t === "light" && !So(e)) {
      const c = hd.includes(t) ? Ba(e) : sd(e);
      return c != null && c.button ? '<div class="tfMoreSpace tfMoreSwitch' + (c.on ? " on" : "") + '"' + (c.tone ? ' data-tone="' + c.tone + '"' : "") + jn(e) + ">" + fi(e, c) + "</div>" : "";
    }
    if (t === "cover") return '<div class="tfMoreSpace tfMoreFill"><div data-cover-art="' + ae(e) + '"></div></div>';
    if (t === "light" && So(e)) return '<div class="tfMoreSpace tfMoreFill"><div class="tfDacPad" data-dac="more:' + ae(e) + '"></div></div>';
    const { big: o, lines: s } = $d(e);
    return '<div class="tfMoreSpace"><div class="tfMoreBig' + (qa("pos", e) != null ? " live" : "") + '"><span class="tfMoreNum">' + ae(o[0]) + "</span>" + (o[1] ? '<span class="tfMoreUnit">' + ae(o[1]) + "</span>" : "") + '</div><div class="tfMoreFacts">' + s.map(([c, h]) => '<div class="tfMoreFact"><span>' + ae(c) + "</span><span>" + ae(h) + "</span></div>").join("") + "</div></div>";
  }
  function $d(e) {
    var N;
    const t = M[e], o = et(e), s = e.split(".")[0], c = (((N = Bi[s]) == null ? void 0 : N.call(Bi, o)) || []).filter(([, T]) => T != null && T !== ""), h = (T) => {
      const P = c.findIndex(([Q]) => Q === T);
      return P < 0 ? null : c.splice(P, 1)[0][1];
    }, p = (T) => {
      const P = String(T).match(/^(-?[\d.,]+)\s*(.*)$/);
      return P ? [P[1], P[2]] : [String(T), ""];
    }, g = () => [lt(String(t.state).replace(/_/g, " ")), ""];
    let w;
    s === "light" ? (h("Brightness"), w = t.state === "on" && ro(e) ? [String($t(t)), "%"] : g()) : s === "climate" ? w = p(h("Current temperature") || Ia(o.current_temperature) + " °C") : s === "cover" ? (h("Position"), w = o.current_position != null ? [String(zn(e)), "%"] : g()) : s === "humidifier" ? w = p(h("Current humidity") || t.state) : s === "vacuum" ? w = p(h("Battery") || t.state) : s === "plant" ? w = p(h("Moisture") || t.state) : ["media_player", "lock", "alarm_control_panel", "valve"].includes(s) ? w = g() : w = p(t.state + (o.unit_of_measurement ? " " + o.unit_of_measurement : ""));
    const B = c.length ? c.slice(0, 4) : [["State", fa(e)]];
    return { big: w, lines: B };
  }
  function a(e) {
    var B, N, T, P, Q, se, Z;
    const t = M[e], o = i(), s = (B = o == null ? void 0 : o.entities) == null ? void 0 : B[e], c = s != null && s.device_id ? (N = o == null ? void 0 : o.devices) == null ? void 0 : N[s.device_id] : null, h = '<div class="tfMoreGraph"><div class="tfMoreGroupName">Last 24 hours</div><svg class="tfGraph tfDay" data-day="' + ae(e) + '" role="img" aria-label="' + ae(Ie(e)) + ', last 24 hours"></svg></div>', p = (T = qe.areaOf) == null ? void 0 : T.call(qe, e), g = p && (((P = qe.rooms.find((X) => X.id === p)) == null ? void 0 : P.name) || ((se = (Q = o == null ? void 0 : o.areas) == null ? void 0 : Q[p]) == null ? void 0 : se.name)) || "", w = [
      ...((Z = Bi[e.split(".")[0]]) == null ? void 0 : Z.call(Bi, et(e))) || [],
      ["Changed", t.last_changed && en(Date.parse(t.last_changed))],
      ["Area", g],
      ["Device", c && (c.name_by_user || c.name)],
      ["Integration", (s == null ? void 0 : s.platform) && lt(s.platform.replace(/_/g, " "))],
      ["Entity", e]
    ].filter(([, X]) => X != null && X !== "");
    return h + '<div class="tfMoreRows">' + w.map(([X, V]) => '<div class="tfMoreRow"><span>' + ae(X) + "</span><span>" + ae(V) + "</span></div>").join("") + "</div>" + id(e) + (c ? '<button class="tfDetailsBtn tfMoreLink" type="button" data-path="/config/devices/device/' + ae(s.device_id) + '"><span>Device page</span>' + Bu + "</button>" : "");
  }
  const r = () => "";
  let d = "";
  function m(e) {
    var t;
    L && (L.details = e, ke(), (t = Ue.querySelector(e ? "[data-details-close]" : "[data-details]")) == null || t.focus({ preventScroll: !0 }));
  }
  const S = (e) => {
    const t = M[e], o = zn(e), s = qi(e);
    return { kind: pp(t), name: Ie(e), text: fa(e), pos: o, target: Math.abs(s - o) > 0.5 ? s : null, moving: t.state === "opening" || t.state === "closing", tilt: Tr(e) ?? 100, canSet: Yt(e, Su) };
  };
  function _(e) {
    e.querySelectorAll("[data-cover-art]").forEach((t) => {
      const o = t.dataset.coverArt, s = t.dataset.artKey || "more:" + o;
      let c = Xe.get(s);
      c || (c = og({ onMove: (h) => Fo(o, h), onSet: (h) => {
        Fo(o, h), Qa("pos", o);
      } }), c.coverId = o, Xe.set(s, c)), t.replaceWith(c.el), c.update(S(o));
    });
  }
  const O = (e) => [...Xe.values()].filter((t) => t.coverId === e), U = () => Xe.forEach((e) => {
    M[e.coverId] && e.update(S(e.coverId));
  }), ve = () => {
    Xe.forEach((e, t) => {
      e.el.isConnected || (e.destroy(), Xe.delete(t));
    }), U();
  };
  function ke() {
    var h, p;
    if (!L || !(Gd(L.id) || M[L.id])) {
      Ue.hidden = !0;
      return;
    }
    if ([...ce.keys()].some((g) => g.endsWith("|" + L.id))) {
      U();
      return;
    }
    const e = Ud(L.id), t = Ue.querySelector(".tfMore");
    if (!e) {
      bt();
      return;
    }
    const o = nd(Ue), s = r(L.id), c = L.frame ? L.frame.wide : L.id.startsWith("summary:") || L.id.startsWith("group:");
    if (Ue.hidden || !t || e.length !== Ho.length || t.classList.contains("wide") !== c) {
      const g = De ? L.scroll || 0 : !Ue.hidden && t ? t.scrollTop : 0;
      if (Ue.innerHTML = '<div class="tfMorePair' + (Ue.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (c ? " wide" : "") + '"' + (L.frame ? ' style="height:' + L.frame.h + 'px"' : "") + ' tabindex="-1">' + e.join("") + "</section></div>", d = s, Ue.classList.toggle("wide", c), Ue.hidden = !1, Hs(), _(Ue), Ki(Ue), Cn(Ue), Ue.querySelectorAll("[data-day]").forEach((w) => Aa(w.dataset.day, w, L.at)), ut(Ue), g && (Ue.querySelector(".tfMore").scrollTop = g), be(), Jr(Ue, o), !Ue.contains(n.activeElement)) {
        const w = Ue.querySelector("[data-more-close]");
        (h = w != null && w.offsetParent ? w : Ue.querySelector(".tfMore")) == null || h.focus({ preventScroll: !0 });
      }
    } else {
      if (e.forEach((g, w) => {
        var T, P;
        if (g === Ho[w] || g.includes("data-cover-art") || t.children[w].contains((P = (T = n.activeElement) == null ? void 0 : T.matches) != null && P.call(T, "input,select") ? n.activeElement : null) || [...ce.keys()].some((Q) => t.children[w].querySelector('[data-drag="' + CSS.escape(Q) + '"]'))) return;
        const B = document.createElement("div");
        B.innerHTML = g;
        const N = Sl(t.children[w], B.firstElementChild);
        Cn(N), ut(N), Ki(N);
      }), s !== d) {
        const g = Ue.querySelector(".tfMoreSideBody");
        g && (g.innerHTML = s), d = s;
      }
      t.querySelectorAll("[data-day]").forEach((g) => {
        g.innerHTML || Aa(g.dataset.day, g, L.at);
      }), be(), Ue.contains(n.activeElement) || Jr(Ue, o);
    }
    (p = Ue.querySelector(".tfMorePair")) == null || p.classList.toggle("details", !!(L.details && s)), Ho = e, U();
  }
  function be() {
    const e = Ue.querySelector("[data-more-pages]");
    !e || !L || (e.scrollTo({ left: (L.page || 0) * e.clientWidth, behavior: "instant" }), He(), ge(e));
  }
  function ge(e) {
    const t = e.children[(L == null ? void 0 : L.page) || 0];
    t && (e.style.height = t.scrollHeight + "px");
  }
  function He() {
    const e = (L == null ? void 0 : L.page) || 0;
    Ue.querySelectorAll("[data-more-page]").forEach((t) => {
      const o = Number(t.dataset.morePage) === e;
      t.setAttribute("aria-selected", String(o)), t.tabIndex = o ? 0 : -1;
    });
  }
  function at(e, t) {
    var s, c;
    const o = Ue.querySelector("[data-more-pages]");
    !o || !L || (L.page = Math.max(0, Math.min(1, e)), o.scrollTo({ left: L.page * o.clientWidth, behavior: (s = window.matchMedia) != null && s.call(window, "(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }), He(), ge(o), (c = Ue.querySelector('[data-more-page="' + L.page + '"]')) == null || c.focus({ preventScroll: !0 }));
  }
  let je = 0;
  Ue.addEventListener("scroll", (e) => {
    var o;
    const t = e.target;
    !((o = t.matches) != null && o.call(t, "[data-more-pages]")) || !L || (clearTimeout(je), je = setTimeout(() => {
      if (!L) return;
      const s = Math.round(t.scrollLeft / Math.max(1, t.clientWidth));
      s !== (L.page || 0) && (L.page = s, He(), ge(t));
    }, 80));
  }, !0), setInterval(() => {
    L && ke();
  }, 15 * 1e3);
  function Ne(e, t) {
    var c, h;
    const o = !!(L && t && Ue.contains(t)), s = o && Ue.querySelector(".tfMore");
    if (o && (L.scroll = s.scrollTop), o && !L.under) {
      const p = Ue.querySelector(".tfMorePair"), g = { more: L, parts: Ho, opener: t };
      p.classList.add("still"), p.style.transform = "", p.inert = !0, vn.innerHTML = "", vn.appendChild(p), vn.classList.toggle("wide", Ue.classList.contains("wide")), vn.hidden = !1, Ue.hidden = !0, Ue.innerHTML = "", L = { id: e, opener: t, back: null, frame: null, under: g, at: Number((c = t == null ? void 0 : t.dataset) == null ? void 0 : c.at) || null }, vt();
      return;
    }
    L = { id: e, opener: o ? L.opener : t, back: o ? L : null, frame: o ? L.frame || { wide: s.classList.contains("wide"), h: s.offsetHeight } : null, under: o ? L.under : null, at: Number((h = t == null ? void 0 : t.dataset) == null ? void 0 : h.at) || null }, vt();
  }
  let De = !1;
  function vt() {
    Ho = [], De = !Ue.hidden, Xe.forEach((e, t) => {
      t !== L.id && Ue.contains(e.el) && (e.destroy(), Xe.delete(t));
    }), ke(), De = !1;
  }
  function bt() {
    if (!L) return;
    const e = L;
    Yh(Ue, () => {
      L === e && Ye();
    });
  }
  function Ye() {
    var s, c, h, p, g, w, B, N;
    const e = L == null ? void 0 : L.opener, t = L == null ? void 0 : L.under;
    L = null, Xe.forEach((T, P) => {
      Ue.contains(T.el) && (T.destroy(), Xe.delete(P));
    }), sa.forEach((T, P) => {
      P.startsWith("more:") && sa.delete(P);
    }), Ue.hidden = !0, Ue.innerHTML = "";
    const o = { preventScroll: !0 };
    if (t) {
      const T = vn.firstElementChild;
      L = t.more, Ho = t.parts, T && (T.inert = !1, Ue.appendChild(T)), Ue.classList.toggle("wide", vn.classList.contains("wide")), vn.hidden = !0, vn.innerHTML = "", Ue.hidden = !1;
      const P = Ue.querySelector(".tfMore");
      P && (P.scrollTop = L.scroll || 0), ke(), (c = (s = t.opener) != null && s.isConnected ? t.opener : Ue.querySelector("[data-more-close]")) == null || c.focus(o);
      return;
    }
    e != null && e.isConnected ? e.focus(o) : (h = e == null ? void 0 : e.dataset) != null && h.more ? (p = D.querySelector('[data-more="' + CSS.escape(e.dataset.more) + '"]')) == null || p.focus(o) : (g = e == null ? void 0 : e.dataset) != null && g.summary ? (w = D.querySelector('[data-summary="' + CSS.escape(e.dataset.summary) + '"]')) == null || w.focus(o) : (B = e == null ? void 0 : e.hasAttribute) != null && B.call(e, "data-favs-edit") && ((N = D.querySelector("[data-favs-edit]")) == null || N.focus(o));
  }
  const Mt = { moisture: "moisture", light: "light", brightness: "light", temperature: "temperature", fertility: "fertility", conductivity: "fertility" };
  function Pt(e) {
    const t = String(et(e).problem || ""), o = "sensor." + e.split(".")[1] + "_";
    return t === "none" ? [] : t.split(",").map((s) => s.trim().split(" ")).map(([s, c]) => {
      const h = Mt[s], p = o + h;
      if (!h || !M[p] || !Ws[h]) return "";
      const g = et(p).unit_of_measurement || "", [w, B] = Ws[h], N = c === "low";
      return '<div class="tfMoreGroup tfPlantProblem"><div class="tfMoreGroupName">' + ae(Ie(p)) + '</div><svg class="tfGraph tfPlantGraph" data-plant-graph="' + ae(p) + '" data-guide="' + (N ? w : B) + '" data-guide-word="' + ae("Wants " + (N ? "" : "up to ") + (N ? w : B).toLocaleString() + (g === "%" ? "%" : g ? " " + g : "") + (N ? " or more" : "")) + '" role="img" aria-label="' + ae(Ie(p)) + ', last 24 hours"></svg></div>';
    }).filter(Boolean);
  }
  const ut = (e) => e.querySelectorAll("[data-plant-graph]").forEach((t) => Is(t.dataset.plantGraph, t, { guide: Number(t.dataset.guide), guideWord: t.dataset.guideWord }).then(() => Rr(t)));
  function rt(e, t, o, s = {}) {
    const c = t.map((X) => X[1]).concat(s.guide != null ? [s.guide] : []), h = s.zero ? 0 : Math.min(...c), p = Math.max(...c), g = Math.max(120, e.clientWidth || 260), w = Math.max(60, e.clientHeight || 130), B = 8, N = w - 20, T = Date.now() - 24 * 3600 * 1e3, P = 24 * 3600 * 1e3, Q = (X) => Math.max(0, Math.min(g, (X - T) / P * g)), se = (X) => p === h ? (B + N) / 2 : N - (X - h) / (p - h) * (N - B);
    let Z = "M" + Q(t[0][0]).toFixed(1) + " " + se(t[0][1]).toFixed(1);
    if (t.length > 2) Z = ef(t.map((X) => [Q(X[0]), se(X[1])]));
    else for (let X = 1; X < t.length; X++) Z += s.smooth ? "L" + Q(t[X][0]).toFixed(1) + " " + se(t[X][1]).toFixed(1) : "H" + Q(t[X][0]).toFixed(1) + "V" + se(t[X][1]).toFixed(1);
    e.setAttribute("viewBox", "0 0 " + g + " " + w), e.setAttribute("aria-label", o), e.innerHTML = tf(g, B, N) + '<path d="' + Z + "V" + N + "H" + Q(t[0][0]).toFixed(1) + 'Z" fill="' + (s.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + Z + '" fill="none" stroke="' + (s.colour || "var(--primary)") + '" stroke-width="' + Ha.graphs.weight + '" stroke-linejoin="round" stroke-linecap="round"/><text x="0" y="' + (w - 4) + '">24 h ago</text><text x="' + g + '" y="' + (w - 4) + '" text-anchor="end">Now</text>' + (s.guide != null ? '<line class="tfGuide" x1="0" x2="' + g + '" y1="' + se(s.guide).toFixed(1) + '" y2="' + se(s.guide).toFixed(1) + '"/><text class="tfGuideWord" x="' + g + '" y="' + (se(s.guide) < 20 ? se(s.guide) + 14 : se(s.guide) - 5).toFixed(1) + '" text-anchor="end">' + ae(s.guideWord || "") + "</text>" : "");
  }
  const xa = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, za = (e, t) => {
    const o = e.split(".")[0];
    return xa[o] ? xa[o].includes(t) : o === "alarm_control_panel" || o === "climate" || o === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(t) : t === "on";
  }, na = (e) => {
    const t = e.split(".")[0], o = et(e).device_class;
    return t === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[o] || (fc.includes(o) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[t] || "On";
  }, Qo = /* @__PURE__ */ new Map();
  let Pe = 0;
  async function mt(e) {
    var c;
    let t = Qo.get(e);
    if (!t || Date.now() - t.at > 60 * 1e3) {
      let h = [];
      if (ei(e) && Number.isFinite(Number((c = M[e]) == null ? void 0 : c.state))) h = Ea(e).map(([p, g]) => [p, String(g)]);
      else try {
        const p = await W({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        h = ((p == null ? void 0 : p[e]) || []).map((g) => [g.lu != null ? g.lu * 1e3 : Date.parse(g.last_updated || g.last_changed), String(g.s ?? g.state)]).filter(([g]) => Number.isFinite(g));
      } catch {
      }
      h.length || (h = (bs || []).filter((p) => p.entity_id === e).map((p) => [p.when * 1e3, String(p.state)])), t = { at: Date.now(), pts: h }, Qo.set(e, t);
    }
    const o = M[e], s = t.pts.slice().sort((h, p) => h[0] - p[0]);
    return o && (!s.length || s[s.length - 1][1] !== o.state) && s.push([Date.parse(o.last_changed) || Date.now(), o.state]), s;
  }
  async function Aa(e, t, o) {
    const s = await mt(e);
    if (!t.isConnected) return;
    const c = s.map(([Y, ze]) => [Y, Number(ze)]);
    if (s.length > 1 && c.every(([, Y]) => Number.isFinite(Y))) {
      rt(t, c, Ie(e) + ", last 24 hours");
      return;
    }
    const h = Date.now(), p = h - 864e5, g = Math.max(200, t.clientWidth || 360), w = 62, B = (Y) => Math.max(0, Math.min(g, (Y - p) / 864e5 * g)), N = [];
    let T = null;
    s.forEach(([Y, ze]) => {
      const It = za(e, ze);
      It && T == null ? T = Math.max(Y, p) : !It && T != null && (N.push([T, Math.max(Y, p)]), T = null);
    }), T != null && N.push([T, h]);
    const P = Fl(e) ? "var(--danger)" : e.startsWith("light.") ? "#ffaa00" : "var(--primary)", Q = na(e), se = "tfDayClip" + ++Pe, Z = N.map(([Y, ze]) => Q + (ze >= h - 1e3 && Y <= p + 1e3 ? " all day" : ze >= h - 1e3 ? " since " + Xt(Y) : Y <= p + 1e3 ? " until " + Xt(ze) : " " + Xt(Y) + "–" + Xt(ze)));
    let X = "", V = -1 / 0;
    N.forEach(([Y], ze) => {
      const It = Z[ze].length * 5.4, st = Math.min(B(Y), g - It);
      st < V + 8 || (X += '<text x="' + st.toFixed(1) + '" y="10">' + ae(Z[ze]) + "</text>", V = st + It);
    });
    let we = '<text x="' + g + '" y="' + (w - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((Y) => {
      let ze = new Date(h).setHours(Y, 0, 0, 0);
      ze > h && (ze -= 864e5), B(ze) > 8 && B(ze) < g - 34 && (we += '<text x="' + B(ze).toFixed(1) + '" y="' + (w - 2) + '" text-anchor="middle">' + String(Y).padStart(2, "0") + "</text>");
    }), t.setAttribute("viewBox", "0 0 " + g + " " + w), t.setAttribute("aria-label", Ie(e) + ", last 24 hours: " + (Z.length ? Z.join(", ") : "no changes")), t.innerHTML = '<clipPath id="' + se + '"><rect x="0" y="18" width="' + g + '" height="26" rx="8"/></clipPath>' + X + '<rect x="0" y="18" width="' + g + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + se + ')">' + N.map(([Y, ze]) => '<rect x="' + B(Y).toFixed(1) + '" y="18" width="' + Math.max(2, B(ze) - B(Y)).toFixed(1) + '" height="26" fill="' + P + '"/>').join("") + "</g>" + (o && o >= p ? '<line x1="' + B(o).toFixed(1) + '" x2="' + B(o).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + we;
  }
  function Ea(e) {
    var s;
    const t = Number((s = M[e]) == null ? void 0 : s.state), o = Date.now();
    if (et(e).state_class === "total_increasing") {
      const c = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), h = Math.max(1, o - c);
      return [...Array(49)].map((p, g) => c + h * g / 48).map((p) => [p, Math.round(t * Math.pow((p - c) / h, 1.3) * 100) / 100]);
    }
    if (ei(e) && e.endsWith("_moisture")) return [...Array(48)].map((c, h) => [o - (48 - h) * 30 * 60 * 1e3, Math.round((t + 22 * Math.pow(1 - h / 48, 1.2)) * 10) / 10]);
    if (ei(e) && e.endsWith("_light")) {
      const c = (p) => {
        const g = new Date(p).getHours() + new Date(p).getMinutes() / 60;
        return Math.max(0, Math.sin((g - 6) / 14 * Math.PI));
      }, h = (p) => 0.8 + 0.2 * c(p);
      return [...Array(48)].map((p, g) => o - (48 - g) * 30 * 60 * 1e3).map((p) => [p, Math.round(t * h(p) / h(o))]);
    }
    return [...Array(48)].map((c, h) => [o - (48 - h) * 30 * 60 * 1e3, Math.round(t * (0.96 + 0.04 * Math.sin(h / 6)) * 10) / 10]);
  }
  async function Is(e, t, o = {}) {
    var se, Z;
    let s = te.get(e);
    if (e.endsWith("_solar_power")) s = { at: Date.now(), points: Np() };
    else if (ei(e)) s = { at: Date.now(), points: Ea(e) };
    else if (!s || Date.now() - s.at > 5 * 60 * 1e3) {
      try {
        const X = new Date(Date.now() - 864e5).toISOString(), V = await W({ type: "history/history_during_period", start_time: X, entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), we = ((V == null ? void 0 : V[e]) || []).map((Y) => [Y.lu != null ? Y.lu * 1e3 : Date.parse(Y.last_updated || Y.last_changed), Number(Y.s ?? Y.state)]).filter(([Y, ze]) => Number.isFinite(Y) && Number.isFinite(ze));
        s = { at: Date.now(), points: we };
      } catch {
        s = { at: Date.now(), points: [] };
      }
      te.set(e, s);
    }
    const c = t || D.querySelector('[data-graph="' + CSS.escape(e) + '"]');
    if (!c) return;
    const h = M[e], p = ((se = h == null ? void 0 : h.attributes) == null ? void 0 : se.unit_of_measurement) || "", g = s.points.slice(), w = Number(h == null ? void 0 : h.state);
    if (Number.isFinite(w) && !e.endsWith("_solar_power") && g.push([Date.now(), w]), g.length < 2) {
      c.setAttribute("aria-label", Ie(e) + ": no history for the last 24 hours"), c.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const B = g.map((X) => X[1]), N = Math.min(...B), T = Math.max(...B), P = (X) => X.toLocaleString(void 0, { maximumFractionDigits: Math.abs(X) >= 100 ? 0 : 1 }), Q = ((Z = h == null ? void 0 : h.attributes) == null ? void 0 : Z.state_class) === "total_increasing";
    rt(c, g, Ie(e) + ", last 24 hours: " + (Q ? "+" + P(B[B.length - 1] - B[0]) : N === T ? P(N) : P(N) + " to " + P(T)) + (p ? " " + p : ""), { smooth: e.endsWith("_solar_power"), zero: e.endsWith("_solar_power"), ...o });
  }
  function fr() {
    const e = D == null ? void 0 : D.querySelector("[data-solar]");
    if (!e) return;
    const t = Np();
    rt(e, t, "Solar, last 24 hours: up to " + Ia(Math.max(...t.map((o) => o[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function Ll(e, t) {
    const o = t.entity_id, s = Le.get(o) || {}, c = { open_cover: 100, close_cover: 0, set_cover_position: t.position, toggle: zn(o) > 0 ? 0 : 100 }[e], h = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: t.tilt_position }[e];
    c != null && (s.pos = c), h != null && (s.tilt = h), e === "stop_cover" && (delete s.pos, delete s.tilt), e === "stop_cover_tilt" && delete s.tilt, s.at = Date.now(), Le.set(o, s);
  }
  function Fs(e, t, o) {
    var c;
    const s = o == null ? void 0 : o.entity_id;
    return e !== "light" || typeof s != "string" || !Rt[s] || !ro(s) || o.brightness_pct != null || o.brightness != null ? [t, o] : t !== "turn_on" && !(t === "toggle" && ((c = M[s]) == null ? void 0 : c.state) !== "on") ? [t, o] : ["turn_on", { ...o, brightness_pct: Rt[s] }];
  }
  function Ri(e, t, o, s) {
    let c = { entity_id: o, ...s || {} };
    return [t, c] = Fs(e, t, c), e === "cover" && Ll(t, c), ia[o] = (ia[o] || 0) + 1, Ni.set(Au, JSON.stringify(ia)), rs.call(e, t, c) ? Promise.resolve() : Promise.resolve(F(e, t, c));
  }
  function Io(e) {
    const [t, o, s, c] = e.split("|");
    Ri(t, o, s, c ? JSON.parse(c) : null).catch(() => {
    });
  }
  function Fo(e, t) {
    ce.set("pos|" + e, t), kn.delete(e), Ho = Ho.map(() => ""), [D, Ue].forEach((s) => s.querySelectorAll('[data-blocks="' + CSS.escape(e) + '"]').forEach((c) => Ys(c, t)));
    const o = D.querySelector('.tfAction[data-k="' + CSS.escape(e) + '"] .tfName .activityRowMeta');
    if (o && (o.textContent = Math.round(t) + "%"), (L == null ? void 0 : L.id) === e) {
      const s = Ue.querySelector(".tfMoreState"), c = Ue.querySelector(".tfMoreSub");
      s && (s.textContent = Math.round(t) + "%", s.classList.add("live")), c && (c.textContent = "Currently " + zn(e) + "%");
    }
    O(e).forEach((s) => s.update(S(e)));
  }
  const ft = (e, t) => {
    const o = e.shiftKey ? 10 : 1, s = { ArrowUp: t + o, ArrowRight: t + o, ArrowDown: t - o, ArrowLeft: t - o, PageUp: t + 25, PageDown: t - 25, Home: 0, End: 100 }[e.key];
    return s == null ? null : Math.max(0, Math.min(100, Math.round(s)));
  };
  function Wt(e, t) {
    var Z;
    const o = e.dataset.blocks;
    (Z = e.setPointerCapture) == null || Z.call(e, t.pointerId);
    const s = (X) => {
      const V = e.getBoundingClientRect();
      return Math.max(0, Math.min(100, (X.clientX - V.left) / V.width * 100));
    }, c = s(t), h = t.clientX;
    let p = !1, g = qi(o), w = c, B = 0;
    const N = () => {
      g = Math.abs(w - g) < 0.2 ? w : g + (w - g) * 0.14, Fo(o, g), B = requestAnimationFrame(N);
    }, T = () => {
      p || (p = !0, e.classList.add("fine"), B = requestAnimationFrame(N));
    }, P = setTimeout(T, 350), Q = (X) => {
      w = s(X), Math.abs(X.clientX - h) > 6 && (clearTimeout(P), T());
    }, se = () => {
      clearTimeout(P), cancelAnimationFrame(B), e.removeEventListener("pointermove", Q), e.removeEventListener("pointerup", se), e.removeEventListener("pointercancel", se), e.classList.remove("fine"), Fo(o, p ? Math.round(g) : (Math.min(3, Math.floor(c / 25)) + 1) * 25), Qa("pos", o);
    };
    e.addEventListener("pointermove", Q), e.addEventListener("pointerup", se), e.addEventListener("pointercancel", se);
  }
  function oa(e) {
    var t;
    A = e.dataset.area, D.querySelectorAll(".tfAreaPanel").forEach((o) => {
      var c;
      const s = o === e;
      o.classList.toggle("active", s), o.setAttribute("aria-expanded", String(s)), (c = o.querySelector(".panelExpanded")) == null || c.toggleAttribute("inert", !s);
    }), kn.set("areas", Ee(((t = D.querySelector('[data-k="areas"]')) == null ? void 0 : t.style.order) || 1));
  }
  const ya = {
    bright: { value: (e, t) => Math.round(t * 100), text: (e, t) => t ? t + "%" : "Off", send: (e, t) => t > 0 ? ["light", "turn_on", { brightness_pct: t }] : ["light", "turn_off", {}] },
    ct: { value: (e, t) => {
      const [o, s] = Sn(e);
      return Math.round(o + t * (s - o));
    }, text: (e, t) => t.toLocaleString() + "k", send: (e, t) => ["light", "turn_on", { color_temp_kelvin: t }] },
    hue: { value: (e, t) => Math.round(t * 360), text: () => "Colour", send: (e, t) => {
      var o;
      return ["light", "turn_on", { hs_color: [t, Math.max(60, ((o = et(e).hs_color) == null ? void 0 : o[1]) || 100)] }];
    } },
    pos: { value: (e, t) => Math.round(t * 100), text: (e, t) => Math.round(t) + "%", send: (e, t) => ["cover", "set_cover_position", { position: Math.round(t) }] },
    tilt: { value: (e, t) => Math.round(t * 100), text: (e, t) => "Tilt " + t + "%", send: (e, t) => ["cover", "set_cover_tilt_position", { tilt_position: t }] },
    vol: { value: (e, t) => Math.round(t * 100) / 100, text: (e, t) => Math.round(t * 100) + "%", send: (e, t) => ["media_player", "volume_set", { volume_level: t }] }
  };
  function Ga(e, t, o, s) {
    var w;
    const c = ya[t].value(o, s);
    ce.set(t + "|" + o, c);
    const h = Math.round(s * 100) + "%", p = e.querySelector("i");
    if (t === "tilt") {
      p.style.width = "calc((100% - 8px) * " + s + ")";
      const [B, N] = e.querySelectorAll("span");
      B.classList.toggle("lit", s > 0.08), N.classList.toggle("lit", s > 0.92), kn.delete(o), Ho = Ho.map(() => ""), O(o).forEach((T) => T.update(S(o)));
    } else if (p) p.style.width = h;
    else {
      let B = e.querySelector("b");
      B || (B = document.createElement("b"), e.appendChild(B)), B.style.left = h;
    }
    e.setAttribute("aria-valuenow", String(Math.round(s * 100)));
    const g = (w = e.closest(".tfAction") || e.closest(".tfMore")) == null ? void 0 : w.querySelector(".tfName .activityRowMeta, .tfMoreState");
    g && (g.textContent = ya[t].text(o, c));
  }
  function Qa(e, t) {
    const o = ce.get(e + "|" + t), [s, c, h] = ya[e].send(t, o), p = () => setTimeout(() => {
      ce.delete(e + "|" + t), Pa();
    }, 1500);
    Ri(s, c, t, h).then(p, p);
  }
  function ht(e) {
    e.addEventListener("click", (t) => {
      var s;
      const o = t.target.closest("[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],[data-more-page],[data-path],.tfAreaPanel");
      if (Xa && !t.target.closest(".tfBoardMenu,[data-board-more]") && Ao(), !(!o || !e.contains(o) || o.disabled))
        if (o.dataset.boardMore)
          (Xa == null ? void 0 : Xa.key) === o.dataset.boardMore ? Ao(!0) : Ed(o.dataset.boardMore, o);
        else if (o.dataset.boardAct) Pc(Xa.key, o.dataset.boardAct);
        else if (o.dataset.boardShow) cl(o.dataset.boardShow);
        else if (o.dataset.favHide) _s(o.dataset.favHide, !1);
        else if (o.dataset.energyPick) Ol(o.dataset.energyPick);
        else if (o.dataset.act) Io(o.dataset.act);
        else if (o.hasAttribute("data-details")) m(!(L != null && L.details));
        else if (o.hasAttribute("data-details-close")) m(!1);
        else if (o.dataset.summary) Ka(o.dataset.summary, o);
        else if (o.dataset.star) $i(o.dataset.star);
        else if (o.hasAttribute("data-more-back")) {
          const c = L.id;
          L = L.back, vt(), (s = Ue.querySelector('.tfMore [data-more="' + CSS.escape(c) + '"]')) == null || s.focus({ preventScroll: !0 });
        } else o.hasAttribute("data-favs-edit") ? Ne("favourites", o) : o.dataset.acts ? JSON.parse(o.dataset.acts).forEach(([c, h, p, g]) => Ri(c, h, p, g).catch(() => {
        })) : o.dataset.more ? Ne(o.dataset.more, o) : o.hasAttribute("data-more-close") ? bt() : o.dataset.morePage ? at(Number(o.dataset.morePage)) : o.dataset.path ? Xi(o.dataset.path) : o.dataset.go ? ln("room:" + o.dataset.go) : o.hasAttribute("data-area-back") ? Bn() : o.classList.contains("tfAreaPanel") && !o.classList.contains("active") && oa(o);
    }), e.addEventListener("keydown", (t) => {
      var s, c, h, p, g, w, B;
      const o = t.target;
      if ((s = o.dataset) != null && s.more && o.tagName !== "BUTTON" && (t.key === "Enter" || t.key === " ") && (t.preventDefault(), Ne(o.dataset.more, o)), (c = o.dataset) != null && c.energyPick && (t.key === "Enter" || t.key === " ") && (t.preventDefault(), Ol(o.dataset.energyPick)), (h = o.classList) != null && h.contains("tfAreaPanel") && (t.key === "Enter" || t.key === " ") && (t.preventDefault(), oa(o)), (p = o.dataset) != null && p.summary && (t.key === "Enter" || t.key === " ") && (t.preventDefault(), Ka(o.dataset.summary, o)), t.key === "Escape" && Xa && e === D) {
        t.preventDefault(), Ao(!0);
        return;
      }
      if (t.key === "Escape" && un && e === D) {
        t.preventDefault(), dl(!1), (g = u("dashEditNav")) == null || g.focus();
        return;
      }
      if (t.key === "Escape" && R && e === D && (t.preventDefault(), Bn()), (w = o.dataset) != null && w.blocks) {
        const N = o.dataset.blocks, T = ft(t, Math.round(qi(N)));
        if (T == null) return;
        t.preventDefault(), Fo(N, T), clearTimeout(ct.get(N)), ct.set(N, setTimeout(() => Qa("pos", N), 500));
        return;
      }
      if ((B = o.dataset) != null && B.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(t.key)) {
        t.preventDefault();
        const [N, T] = o.dataset.drag.split("|"), P = Number(o.getAttribute("aria-valuenow")) / 100, Q = t.key === "Home" ? 0 : t.key === "End" ? 1 : Math.max(0, Math.min(1, P + (t.key === "ArrowLeft" || t.key === "ArrowDown" ? -0.05 : 0.05)));
        Ga(o, N, T, Q), Qa(N, T);
      }
    }), e.addEventListener("pointerdown", (t) => {
      var It;
      const o = t.target.closest("[data-blocks]");
      if (o && t.button === 0) {
        t.preventDefault(), Wt(o, t);
        return;
      }
      const s = t.target.closest("[data-drag]");
      if (!s || t.button > 0) return;
      const [c, h] = s.dataset.drag.split("|"), p = c === "bright" && !ro(h), g = t.pointerType !== "mouse";
      if (p && !g) {
        Io(Dt("light", "toggle", h));
        return;
      }
      const w = c === "bright" && ((It = M[h]) == null ? void 0 : It.state) !== "on", B = c === "tilt" ? 4 : 0, N = () => s.getBoundingClientRect().width - B * 2, T = (st) => {
        const Vt = s.getBoundingClientRect();
        return Math.max(0, Math.min(1, (st.clientX - Vt.left - B) / N()));
      };
      let P = g ? "waiting" : w ? "pressed" : "dragging", Q = 0;
      const se = t.clientX, Z = t.clientY, X = (st, Vt) => Math.hypot(st.clientX - se, st.clientY - Z) > Vt, V = () => {
        try {
          s.setPointerCapture(t.pointerId);
        } catch {
        }
      };
      g || (t.preventDefault(), V()), P === "dragging" && Ga(s, c, h, T(t));
      const we = () => {
        var st, Vt;
        P = "sliding", Me = s, s.classList.add("held"), V(), (st = navigator.userActivation) != null && st.hasBeenActive && ((Vt = navigator.vibrate) == null || Vt.call(navigator, 8)), Q = w ? (Rt[h] ?? 100) / 100 : Number(s.getAttribute("aria-valuenow")) / 100;
      }, Y = (st) => {
        P === "waiting" && X(st, ye) ? !p && Math.abs(st.clientX - se) > Math.abs(st.clientY - Z) ? we() : P = "gone" : P === "pressed" && X(st, 4) && (P = "dragging"), P === "sliding" ? Ga(s, c, h, Math.max(0, Math.min(1, Q + (st.clientX - se) / N()))) : P === "dragging" && Ga(s, c, h, T(st));
      }, ze = (st) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((Vt, Da) => s.removeEventListener(Vt, Da ? ze : Y)), s.classList.remove("held"), Me === s && (Me = null), P === "sliding" || P === "dragging" ? Qa(c, h) : st.type === "pointerup" && p ? Io(Dt("light", "toggle", h)) : st.type === "pointerup" && w && (P === "waiting" || P === "pressed") && Ri("light", "turn_on", h).catch(() => {
        });
      };
      s.addEventListener("pointermove", Y), s.addEventListener("pointerup", ze), s.addEventListener("pointercancel", ze);
    }), e.addEventListener("touchmove", (t) => {
      Me && t.cancelable && t.preventDefault();
    }, { passive: !1 });
  }
  return D && k && (Il(), ht(D), ht(Ue), Ue.addEventListener("click", (e) => {
    e.target === Ue && bt();
  }), (Ct = n.getElementById("homeNav")) == null || Ct.addEventListener("click", () => {
    R && Bn();
  }), (Zt = n.querySelector(".bottomNav")) == null || Zt.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + uc + "</button>"), (nn = u("dashEditNav")) == null || nn.addEventListener("click", () => E ? $l(!Ro) : dl(!un)), D.addEventListener("pointerdown", Oc), D.addEventListener("pointerdown", aa), D.addEventListener("click", (e) => {
    E && Ro && e.target.closest(".tfBoardItem") && (e.preventDefault(), e.stopPropagation());
  }, !0), D.addEventListener("scroll", (e) => {
    var t;
    (t = e.target.classList) != null && t.contains("hcFadeList") && or(e.target);
  }, !0), new ResizeObserver(() => {
    v.classList.contains("tfDash") && ki() !== uo ? Pa() : ir();
  }).observe(D), window.addEventListener("resize", ir, { passive: !0 }), Ue.addEventListener("keydown", (e) => {
    var t, o;
    e.key === "Escape" ? (e.stopPropagation(), L != null && L.details ? m(!1) : bt()) : (e.key === "ArrowLeft" || e.key === "ArrowRight") && ((o = (t = e.target).closest) != null && o.call(t, ".tfMoreDots")) && (e.preventDefault(), at(((L == null ? void 0 : L.page) || 0) + (e.key === "ArrowRight" ? 1 : -1)));
  })), ne(), {
    update(e) {
      if (!k) return;
      const t = !Object.keys(M).length;
      M = { ...Object.fromEntries(Object.entries(M).filter(([s]) => ei(s))), ...e || {} };
      for (const s in M) s.startsWith("light.") && M[s].state === "on" && ro(s) && Oa(s, $t(M[s]));
      t ? xo() : Pa();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      ni = !0, it == null || it.destroy(), it = null, ba == null || ba.forEach((e) => e.destroy()), ba = null;
    },
    resume() {
      ni = !1, !(!k || !(D != null && D.querySelector("[data-tf]"))) && (ka.isConnected && Mr(ka.style.order), $e());
    }
  };
}
const Dg = "0.90.0", hp = "move_assistant", _g = "move_assistant", Hu = "move_assistant_checkin_reminder";
function Bg() {
  if (document.getElementById("move-assistant-inter")) return;
  const n = document.createElement("link");
  n.id = "move-assistant-inter", n.rel = "stylesheet", n.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(n);
}
class Rg extends HTMLElement {
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
    Bg();
    const l = this.shadowRoot || this.attachShadow({ mode: "open" });
    l.innerHTML = `<style>${Df}${_f}${Bf}${Rf}</style>${Pf}`;
    const i = l.getElementById("app");
    i.style.opacity = "0";
    let u = null;
    try {
      const v = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: hp
      });
      u = (v == null ? void 0 : v.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(u), this._app = eh(l, {
      data: u,
      save: (v) => this._save(v),
      fire: (v, y) => this._fire(v, y),
      ws: (v) => this._hass.callWS(v),
      subscribe: (v, y) => {
        var k, E;
        return (E = (k = this._hass) == null ? void 0 : k.connection) != null && E.subscribeMessage ? this._hass.connection.subscribeMessage(y, v) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var v, y;
        return Object.keys(((y = (v = this._hass) == null ? void 0 : v.services) == null ? void 0 : y.notify) || {}).sort();
      },
      setReminderAutomation: (v) => this._setReminderAutomation(v),
      setLight: (v) => this.classList.toggle("lightBody", v),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this._test = Eg(l, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), zh(l, i), Uh(l), this.isConnected || (this._app.suspend(), this._test.suspend()), i.style.transition = "opacity .2s ease", i.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var i;
    const l = (i = this._hass) == null ? void 0 : i.connection;
    l != null && l.subscribeMessage && l.subscribeMessage(
      (u) => {
        var y;
        const v = JSON.stringify((u == null ? void 0 : u.value) ?? null);
        v === this._lastSaved || v === this._pendingJson || (this._lastSaved = v, (y = this._app) == null || y.applyRemoteData(u.value));
      },
      { type: "frontend/subscribe_user_data", key: hp }
    ).catch(() => {
    });
  }
  _save(l) {
    this._pendingJson = JSON.stringify(l), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const i = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: hp,
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
      event_type: _g,
      event_data: { action: l, ...i }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(l) {
    const i = `config/automation/config/${Hu}`;
    if (!l) {
      try {
        await this._hass.callApi("DELETE", i);
      } catch (y) {
        if ((y == null ? void 0 : y.status_code) !== 404 && (y == null ? void 0 : y.status) !== 404) throw y;
      }
      return;
    }
    const u = (y) => `${y}:00`, v = window.location.pathname;
    await this._hass.callApi("POST", i, {
      id: Hu,
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
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", Rg), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${Dg} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
