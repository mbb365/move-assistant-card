const Ru = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn,.tfSeg>button){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', Nu = '#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)){transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--muted)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .settingsSelect{flex:none;width:220px}@media (max-width:620px){#housePane .settingsSelect{width:150px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfAreaPanel .sourceTag{margin-right:4px}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:620px){.tfMoreBackdrop{place-items:end stretch;padding:0}.tfMorePair{width:100%;max-height:85vh}.tfMore{width:100%;border-radius:var(--r-card) var(--r-card) 0 0}}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 18px 10px}.tfAreaPanel .workoutPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{color:var(--muted);font:400 16px/1.2 var(--font)}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;display:grid;grid-auto-rows:60px;gap:16px;pointer-events:none}.tfBoardCells i{border-radius:var(--r-inner);background:color-mix(in srgb,var(--text) 7%,transparent)}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:360px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-40px;display:grid;place-items:center;width:40px;height:56px;min-height:0;padding:0;border:0;border-radius:16px 0 0 16px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(360px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.light .tfBar i{box-shadow:inset -2px 0 0 var(--text)}#app.house :is(.settingsSelect,.addInput){border:1px solid var(--muted)}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}', Bu = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);opacity:.14}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbSummary{display:none}.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumns{display:none}.wbHalves{display:grid}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbCompareBars{display:block;width:100%;height:100%;min-height:0}.wbAvgValue{fill:var(--muted);font-size:10px;text-anchor:middle}.wbAvgValue.wbToday{fill:var(--text);font-size:12px;font-weight:600}.wbAvgBar{fill:var(--muted);opacity:.45}.wbAvgBar.wbToday{fill:var(--primary);opacity:1}.wbAvgDay{fill:var(--muted);font-size:11px;text-anchor:middle}.wbAvgDay.wbToday{fill:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}`, Pu = `<main id="app"><div class="shell">
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
`, sa = {
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
}, ra = (a) => a < 0 ? 0 : a > 1 ? 1 : a, ec = (a, l, o) => a + (l - a) * o, Ed = (a) => {
  const l = String(a || "#000000").trim().replace("#", ""), o = l.length === 3 ? l.split("").map((c) => c + c).join("") : l;
  return [0, 2, 4].map((c) => parseInt(o.slice(c, c + 2), 16) || 0);
}, Iu = (a) => "#" + a.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), tc = {}, Qt = (a, l, o) => {
  const c = a + l + o;
  return tc[c] || (tc[c] = Iu(Ed(a).map((f, v) => f + (Ed(l)[v] - f) * o)));
}, nc = {}, Hl = (a) => nc[a] || (nc[a] = Ed(a)), ud = (a, l, o, c) => (f) => {
  if (f <= 0) return 0;
  if (f >= 1) return 1;
  let v = 0, w = 1, A = f;
  for (let k = 0; k < 18; k++)
    A = (v + w) / 2, 3 * (1 - A) * (1 - A) * A * a + 3 * (1 - A) * A * A * o + A * A * A < f ? v = A : w = A;
  return 3 * (1 - A) * (1 - A) * A * l + 3 * (1 - A) * A * A * c + A * A * A;
}, Hu = { std: ud(0.2, 0, 0, 1), acc: ud(0.3, 0, 1, 1), dec: ud(0, 0, 0, 1) };
function Gl(a, l) {
  const o = String(a || "");
  return (o === "sunny" || o === "clear-night" ? "clear" : o === "partlycloudy" ? "partly" : o === "fog" ? "fog" : o === "lightning" || o === "lightning-rainy" ? "storm" : o === "snowy" || o === "snowy-rainy" ? "snow" : o === "rainy" || o === "pouring" || o === "hail" ? "rain" : "cloudy") + "/" + (o === "clear-night" || l ? "night" : "day");
}
function Xc(a) {
  const l = { clear: [a.skyClearDay, a.skyClearNight], cloudy: [a.skyCloudyDay, a.skyCloudyNight], rain: [a.skyRainDay, a.skyRainNight], snow: [a.skySnowDay, a.skySnowNight], fog: [a.skyFogDay, a.skyFogNight] };
  return l.partly = [Qt(l.clear[0], l.cloudy[0], 0.12), Qt(l.clear[1], l.cloudy[1], 0.12)], l.storm = [Qt(l.rain[0], "#000000", 0.22), Qt(l.rain[1], "#000000", 0.22)], l;
}
const Dd = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], Rd = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], Nd = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function Bd(a, l = sa) {
  const o = { ...sa, ...l }, c = Xc(o), f = String(a).split("/"), v = c[f[0]] ? f[0] : "clear", w = f[1] === "night", A = c[v][w ? 1 : 0], k = {
    night: w,
    clearness: v === "clear" ? 1 : v === "partly" ? 0.7 : 0.25,
    sky: A,
    skyStops: [A],
    skyT: 0,
    sun: { x: 45, y: w ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: w ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: w ? 1 : 0 },
    stars: Dd.map(() => ({ o: 0 })),
    rain: Rd.map(() => ({ o: 0, dy: -16 })),
    snow: Nd.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, R = (me) => Dd.map(() => ({ o: me }));
  return v === "clear" ? w ? (k.moon.o = 1, k.stars = R(1)) : k.sun.o = 1 : v === "partly" ? (k.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: w ? 1 : 0 }, w ? (k.moon = { x: 34, y: 33, d: 48, o: 1 }, k.stars = R(0.7)) : k.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : v === "cloudy" || v === "fog" ? (k.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: w ? 1 : 0 }, w ? k.moon = { x: 40, y: 36, d: 40, o: 0 } : k.sun = { x: 40, y: 36, r: 20, o: 0 }) : (k.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, w ? k.moon = { x: 38, y: 28, d: 36, o: 0 } : k.sun = { x: 38, y: 28, r: 18, o: 0 }, v === "snow" ? k.snow = Nd.map(() => ({ o: 1, dy: 0 })) : k.rain = Rd.map((me, ae) => ({ o: v === "storm" && ae === 1 ? 0 : 1, dy: 0 })), v === "storm" && (k.bolt = { o: 1, dy: 0 })), k;
}
const ac = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function Fu(a, l, o, c = sa, f = !1) {
  const v = { ...sa, ...c }, w = (U, K) => U > 0.01 && K > 0.01 ? "stay" : U > 0.01 ? "leave" : K > 0.01 ? "enter" : "none", A = (U, K, ee, Y) => {
    const G = U[0] + K * Y, W = U[1] - (ee - 1 - K) * Y;
    return Hu[U[2]](ra((o - G) / Math.max(1e-3, W - G)));
  }, k = (U, K, ee, Y = 0, G = 1, W = 0) => {
    const ce = w(U.o, K.o);
    if (ce === "none") return { ...K, o: 0 };
    const J = A(ac[ee][ce], Y, G, W), ue = {};
    for (const $ in K) ue[$] = f && ce !== "stay" && $ !== "o" ? ce === "leave" ? U[$] : K[$] : ec(U[$], K[$], J);
    return ue;
  }, R = A(ac.sky, 0, 1, 0);
  let me, ae;
  if (a.night !== l.night) {
    const U = Math.min(a.clearness, l.clearness), K = Qt(Qt(a.sky, l.sky, 0.5), v.dusk, 0.6 * U);
    me = R < 0.5 ? Qt(a.sky, K, R * 2) : Qt(K, l.sky, R * 2 - 1), ae = U > 0.5 ? [a.sky, v.dusk, l.sky] : [a.sky, l.sky];
  } else
    me = Qt(a.sky, l.sky, R), ae = [a.sky, l.sky];
  return {
    night: o < 0.5 ? a.night : l.night,
    clearness: ec(a.clearness, l.clearness, o),
    sky: me,
    skyStops: ae,
    skyT: R,
    sun: k(a.sun, l.sun, "body"),
    moon: k(a.moon, l.moon, "body"),
    cloud: k(a.cloud, l.cloud, "cloud"),
    stars: l.stars.map((U, K) => k(a.stars[K], U, "fx", K, l.stars.length, 0.05)),
    rain: l.rain.map((U, K) => k(a.rain[K], U, "fx", K, l.rain.length, 0.05)),
    snow: l.snow.map((U, K) => k(a.snow[K], U, "fx", K, l.snow.length, 0.05)),
    bolt: k(a.bolt, l.bolt, "fx")
  };
}
const Ou = [
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
], ia = (a, l) => (Ou[(l & 7) * 8 + (a & 7)] + 0.5) / 64, Wu = 0, Hd = 1, Fd = 2, Od = 3, Wd = 4, oa = 5, is = 6, Ti = 7, qd = 8, Wl = (a, l) => l <= 0.6665 && ((a - 0.5) * (a - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (a - 0.25) * (a - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (a - 0.791) * (a - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || a >= 0.25 && a <= 0.791 && l >= 0.416), qu = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], ju = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((a) => [a[0] * 13 / 11, a[1] * 28 / 24]), Jc = (a, l, o) => {
  let c = !1;
  for (let f = 0, v = a.length - 1; f < a.length; v = f++) {
    const w = a[f], A = a[v];
    w[1] > o != A[1] > o && l < (A[0] - w[0]) * (o - w[1]) / (A[1] - w[1]) + w[0] && (c = !c);
  }
  return c;
};
function Qc(a, { size: l = 90, px: o = 2, oneBit: c = !1, colors: f = sa, ink: v = "#26221e", paper: w = "#fbf9f6", clock: A = 0, idle: k = !1 } = {}) {
  const R = { ...sa, ...f }, me = Math.sin, ae = Math.PI * 2, U = Math.max(6, Math.round(l / o)), K = U / 90, ee = k ? Math.floor(A / 100) * 100 : 0, Y = k ? me(ae * ee / 3600) : 0, G = k ? 1.8 * me(ae * ee / 6400) : 0, W = k ? 0.9 * me(ae * ee / 4100) : 0, ce = k ? 0.8 * me(ae * ee / 5200) : 0, J = ee / 3400 % 1, ue = k && a.bolt.o > 0.5 && (J < 0.04 || J > 0.08 && J < 0.11), $ = new Array(U * U), E = new Uint8Array(U * U), B = (M, _, C, P, he) => {
    C == null || M < 0 || _ < 0 || M >= U || _ >= U || (P >= 1 || P > ia(M + 5, _ + 3)) && ($[_ * U + M] = C, E[_ * U + M] = he);
  }, oe = (M, _, C, P) => {
    for (let he = Math.max(0, Math.floor(_ - C) - 1); he <= Math.min(U - 1, _ + C + 1); he++) for (let q = Math.max(0, Math.floor(M - C) - 1); q <= Math.min(U - 1, M + C + 1); q++) P(q, he, q + 0.5 - M, he + 0.5 - _);
  }, Ae = a.skyStops || [a.sky], I = a.skyT || 0;
  for (let M = 0; M < U; M++) {
    const _ = a.night ? ra(1 - (M + 0.5) / (U * 0.7)) * 0.85 : ra(((M + 0.5) / U - 0.35) / 0.65) * 0.85;
    for (let C = 0; C < U; C++) {
      let P = Ae[0];
      if (Ae.length > 1) {
        const he = I * (Ae.length - 1), q = Math.min(Ae.length - 2, Math.floor(he));
        P = he - q > ia(C, M) ? Ae[q + 1] : Ae[q];
      }
      _ > ia(C + 2, M + 5) && (P = a.night ? Qt(P, "#000000", 0.28) : Qt(P, "#ffffff", 0.2)), $[M * U + C] = ue ? Qt(P, "#ffffff", 0.25) : P;
    }
  }
  if (a.sun.o > 0.01) {
    const M = a.sun.x * K, _ = a.sun.y * K, C = Math.max(1, a.sun.r * K);
    if (k) {
      const P = C * (1.45 + 0.06 * Y), he = Qt(R.sun, "#ffffff", 0.55);
      if (oe(M, _, P, (q, se, fe, ye) => {
        const $e = Math.sqrt(fe * fe + ye * ye);
        $e > C && $e < P && B(q, se, he, 0.26 * (1 - ($e - C) / (P - C)) * a.sun.o, Wu);
      }), a.sun.o > 0.5) {
        const q = Math.floor(ee / 500) % 2, se = Math.max(1, C * 0.22);
        for (let fe = 0; fe < 8; fe++) if (fe % 2 === q) for (let ye = C + 1.5; ye < C + 1.5 + se; ye += 0.7) B(Math.floor(M + Math.cos(fe * Math.PI / 4) * ye), Math.floor(_ + Math.sin(fe * Math.PI / 4) * ye), R.sun, a.sun.o, qd);
      }
    }
    oe(M, _, C, (P, he, q, se) => {
      if (q * q + se * se > C * C) return;
      const fe = ((q * 0.643 + se * 0.766) / C + 1) / 2;
      B(P, he, ra((fe - 0.62) / 0.38) > ia(P, he) ? R.sunEdge : R.sun, a.sun.o, Hd);
    });
  }
  if (Dd.forEach((M, _) => {
    const C = a.stars[_].o;
    if (C < 0.01) return;
    const P = Math.floor(M[0] * K), he = Math.floor(M[1] * K), q = k ? (Math.floor(ee / 300) + _ * 3) % 6 : 0;
    if (q === 5) return;
    const se = Math.round(M[2] * K * (q === 4 ? 0.3 : q < 2 ? 1 : 0.6));
    B(P, he, R.star, C, Ti);
    for (let fe = 1; fe <= se; fe++) {
      const ye = fe === se && se > 1 ? Qt(R.star, a.sky, 0.5) : R.star;
      B(P - fe, he, ye, C, Ti), B(P + fe, he, ye, C, Ti), B(P, he - fe, ye, C, Ti), B(P, he + fe, ye, C, Ti);
    }
  }), a.moon.o > 0.01) {
    const M = Math.max(1.5, a.moon.d * K * 0.37), _ = a.moon.x * K, C = a.moon.y * K + (k && ce > 0.4 ? -1 : 0), P = _ + 0.547 * M, he = C - 0.503 * M, q = 0.82 * M, se = Qt(R.moon, "#ffffff", 0.6);
    oe(_, C, M, (fe, ye, $e, lt) => {
      if ($e * $e + lt * lt > M * M) return;
      const At = fe + 0.5 - P, Sn = ye + 0.5 - he;
      At * At + Sn * Sn <= q * q || B(fe, ye, ra((lt + M) / (2 * M) * 1.1 - 0.1) > ia(fe, ye) ? R.moon : se, a.moon.o, Fd);
    });
  }
  const Ie = Math.max(2, Math.round(15.65 * K)), z = Math.max(1, Math.round(5.87 * K * 0.5));
  Rd.forEach((M, _) => {
    const C = a.rain[_];
    let P = C.dy, he = C.o;
    if (he < 0.01) return;
    if (k) {
      const fe = (ee / 950 + _ / 3) % 1;
      P += -5 + fe * 14, he *= fe < 0.18 ? fe / 0.18 : fe > 0.72 ? (1 - fe) / 0.28 : 1;
    }
    const q = (M[0] + 3 + G) * K, se = (M[1] + P) * K;
    for (let fe = 0; fe < Ie; fe++) for (let ye = 0; ye < z; ye++) B(Math.floor(q - 0.208 * fe) + ye, Math.floor(se) + fe, R.rain, he, Wd);
  });
  const je = Math.max(0, Math.round(7.34 * K / 2.6));
  if (Nd.forEach((M, _) => {
    const C = a.snow[_];
    let P = C.dy, he = 0, q = C.o;
    if (q < 0.01) return;
    if (k) {
      const ye = (ee / 3200 + _ / 5) % 1;
      P += -6 + ye * 14, he = 1.5 * me(ae * (ye * 1.5 + _ / 5)), q *= ye < 0.2 ? ye / 0.2 : ye > 0.75 ? (1 - ye) / 0.25 : 1;
    }
    const se = Math.floor((M[0] + 3.67 + he + G) * K), fe = Math.floor((M[1] + 3.67 + P) * K);
    B(se, fe, R.snow, q, oa);
    for (let ye = 1; ye <= je; ye++)
      B(se - ye, fe, R.snow, q, oa), B(se + ye, fe, R.snow, q, oa), B(se, fe - ye, R.snow, q, oa), B(se, fe + ye, R.snow, q, oa), je > 1 && ye < je && (B(se - ye, fe - ye, R.snow, q, oa), B(se + ye, fe - ye, R.snow, q, oa), B(se - ye, fe + ye, R.snow, q, oa), B(se + ye, fe + ye, R.snow, q, oa));
  }), a.bolt.o > 0.01)
    if (U >= 30) {
      const M = 39 + G, _ = 50 + a.bolt.dy;
      for (let C = Math.floor(_ * K); C <= (_ + 28) * K; C++) for (let P = Math.floor(M * K); P <= (M + 13) * K; P++)
        Jc(ju, (P + 0.5) / K - M, (C + 0.5) / K - _) && B(P, C, R.sun, a.bolt.o, is);
    } else {
      const M = U / 18, _ = 7, C = 10 + Math.round(a.bolt.dy * 0.2);
      qu.forEach((P, he) => P.split("").forEach((q, se) => {
        if (q !== "#") return;
        const fe = Math.floor((_ + se) * M), ye = Math.floor((C + he) * M);
        for (let $e = ye; $e < Math.max(ye + 1, Math.floor((C + he + 1) * M)); $e++) for (let lt = fe; lt < Math.max(fe + 1, Math.floor((_ + se + 1) * M)); lt++) B(lt, $e, R.sun, a.bolt.o, is);
      }));
    }
  if (a.cloud.o > 0.01) {
    const M = Math.max(3, a.cloud.w * K), _ = M * 0.6665, C = (a.cloud.x + G) * K - M / 2, P = (a.cloud.y + W) * K - _ / 2, he = Qt(R.cloudDay, R.cloudNight, Math.round(a.cloud.f * 4) / 4), q = Qt(he, "#000000", 0.16);
    for (let se = Math.max(0, Math.floor(P) - 1); se <= Math.min(U - 1, P + _ + 1); se++) for (let fe = Math.max(0, Math.floor(C) - 1); fe <= Math.min(U - 1, C + M + 1); fe++) {
      const ye = (fe + 0.5 - C) / M, $e = (se + 0.5 - P) / M;
      Wl(ye, $e) && B(fe, se, !Wl(ye, $e + 1 / M) || ra(($e - 0.42) / 0.25) * 0.8 > ia(fe, se) ? q : he, a.cloud.o, Od);
    }
  }
  return eu($, E, U, U, { oneBit: c, ink: v, paper: w, snowInk: !a.night });
}
function eu(a, l, o, c, { oneBit: f, ink: v, paper: w, snowInk: A }) {
  const k = new Uint8ClampedArray(o * c * 4), R = Hl(v), me = Hl(w);
  for (let ae = 0; ae < c; ae++) for (let U = 0; U < o; U++) {
    const K = ae * o + U, ee = l[K];
    if (a[K] == null) continue;
    let Y = Hl(a[K]);
    if (f) {
      let G;
      ee === Wd || ee === qd ? G = !0 : ee === oa ? G = A : ee === Ti || ee === is ? G = !1 : G = Math.round((0.2126 * Y[0] + 0.7152 * Y[1] + 0.0722 * Y[2]) / 255 * 4) / 4 <= ia(U, ae), (ee === Hd || ee === Fd || ee === Od || ee === is) && (U > 0 && l[K - 1] !== ee || U < o - 1 && l[K + 1] !== ee || ae > 0 && l[K - o] !== ee || ae < c - 1 && l[K + o] !== ee) && (G = !0), Y = G ? R : me;
    }
    k[K * 4] = Y[0], k[K * 4 + 1] = Y[1], k[K * 4 + 2] = Y[2], k[K * 4 + 3] = 255;
  }
  return { w: o, h: c, data: k };
}
const zu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Vu = (a) => Gl(a, !1).split("/")[0], pd = (a) => () => {
  a |= 0, a = a + 1831565813 | 0;
  let l = Math.imul(a ^ a >>> 15, 1 | a);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, Gu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Uu = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Yu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Zu = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Ku = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], $u = [".##", "##.", ".#.", "#.."];
function tu(a, { width: l, height: o, colors: c, wave: f = 0.38, soft: v = 6, glow: w = 0.6 }) {
  const A = { ...sa, dawn: "#e5a77e", ...c }, k = Xc(A), R = l, me = o, ae = R / 6, U = ae / 2, K = Math.PI * 2, ee = a.length ? a : [{ cond: "cloudy", night: !1 }], Y = [...Array(12)].map((J, ue) => {
    const $ = ee[Math.min(ue, ee.length - 1)], E = Vu($.cond), B = ue % 2 === 1;
    return { cond: $.cond, k: E, night: B, sky: k[E][B ? 1 : 0], cover: zu[E] };
  }), G = (J) => me * (0.5 - f * Math.cos(K * (J / ae - 0.25)));
  return { C: A, S: Y, W: R, H: me, cw: ae, sw: U, TAU: K, yb: G, side: (J, ue, $) => {
    const E = (J ? G(ue) - $ : $ - G(ue)) / Math.max(3, v * 1.4) + 0.5;
    return E <= 0 ? 0 : E >= 1 ? 1 : E;
  }, glowAt: (J) => {
    const ue = ((J / ae - 0.25) % 1 + 1) % 1, $ = Math.max(0, Math.min(5, Math.round(J / ae - 0.25))), E = Math.max(0, Math.min(5, Math.round(J / ae - 0.75))), B = 1 - (Y[2 * $].cover + Y[2 * E + 1].cover) / 2, oe = Math.sin(Math.PI * Math.min(1, Math.max(0, G(J) / me)));
    return { c: ue < 0.5 ? A.dusk : A.dawn, a: w * (0.2 + 0.8 * B) * oe * oe };
  }, soft: v, tw: ae * 0.3, sy: me / 90 };
}
function nu(a, { clock: l = 0, ambient: o = !1, seed: c = 1 }) {
  const { S: f, sw: v, side: w, C: A, TAU: k, sy: R } = a, me = l, ae = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return f.forEach((U, K) => {
    const ee = pd(c * 977 + K * 131 + 7), Y = (K + 0.5) * v, G = U.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[U.k] : 0;
    for (let W = 0; W < G; W++) {
      const ce = Y + (ee() - 0.5) * v * 1.6, J = (6 + ee() * 76) * R, ue = ee() < 0.35, $ = 1.8 + ee() * 1.6, E = w(!0, ce, J) * (ue ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(k * me / 2600 + W * 1.7 + K) : 1);
      E >= 0.03 && ae.stars.push({ x: ce, y: J, big: ue, size: $, o: E });
    }
    if (!U.night && (U.k === "clear" || U.k === "partly")) {
      const W = Y + (ee() - 0.5) * v * 0.3, ce = Math.min(15, v * 0.29);
      ae.suns.push({ x: W, y: 32 * R, rad: ce, halo: ce * 2.8 * (o ? 1 + 0.07 * Math.sin(k * me / 3600 + K) : 1) });
    }
    if (U.night && (U.k === "clear" || U.k === "partly")) {
      const W = Math.min(0.78, v * 0.55 / 34), ce = Y - 23 * W + (ee() - 0.5) * v * 0.2;
      ae.moons.push({ x: ce + 23 * W, y: (4 + (o ? 0.8 * Math.sin(k * me / 5200 + K) : 0)) * R + 23 * W, d: 46 * W });
    }
  }), f.forEach((U, K) => {
    const ee = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[U.k];
    if (!ee) return;
    const Y = pd(c * 577 + K * 71 + 3), G = (K + 0.5) * v, W = U.k === "rain" || U.k === "storm" || U.night ? A.cloudNight : A.cloudDay, ce = U.night ? 0.82 : U.k === "storm" ? 0.75 : 1;
    for (let J = 0; J < ee; J++) {
      const ue = v / 46 * (U.k === "partly" ? 0.85 : 0.75 + Y() * 0.55), $ = G + (U.k === "partly" ? v * 0.12 : (Y() - 0.5) * v * 1.05), E = (U.k === "partly" ? 40 : 6 + Y() * 26) * R, B = o ? 2.5 * Math.sin(k * me / 9e3 + K * 1.3 + J * 2.1) : 0, oe = o ? 0.9 * Math.sin(k * me / 6100 + K + J) : 0;
      ae.clouds.push({ x: $ - 23 * ue + B, y: E - 15.33 * ue + oe, w: 46 * ue, h: 30.66 * ue, fill: W, o: ce * (ee > 1 && J === 0 ? 0.85 : 1) });
    }
  }), f.forEach((U, K) => {
    const ee = pd(c * 313 + K * 29 + 11), Y = (K + 0.5) * v, G = U.cond === "pouring" ? 16 : U.cond === "rainy" || U.cond === "hail" ? 9 : U.cond === "lightning-rainy" ? 12 : U.cond === "snowy-rainy" ? 5 : 0;
    for (let ce = 0; ce < G; ce++) {
      let J = Y + (ee() - 0.5) * v * 1.05, ue = 44 + ee() * 36, $ = 1;
      if (o) {
        const B = ((ue - 44 + me * 0.04) % 36 + 36) % 36;
        J -= 0.21 * (B - (ue - 44)), ue = 44 + B, $ = Math.min(1, B / 6, (36 - B) / 6);
      }
      ue *= R;
      const E = w(U.night, J, ue) * $;
      E >= 0.05 && ae.drops.push({ x: J, y: ue, o: E });
    }
    const W = U.cond === "snowy" ? 11 : U.cond === "snowy-rainy" ? 6 : 0;
    for (let ce = 0; ce < W; ce++) {
      let J = Y + (ee() - 0.5) * v * 1.05, ue = 40 + ee() * 44, $ = 1;
      if (o) {
        const B = ((ue - 40 + me * 9e-3) % 44 + 44) % 44;
        ue = 40 + B, J += 1.6 * Math.sin(k * me / 2800 + ce * 1.9 + K), $ = Math.min(1, B / 6, (44 - B) / 6);
      }
      ue *= R;
      const E = w(U.night, J, ue) * $;
      E >= 0.05 && ae.flakes.push({ x: J, y: ue, o: E });
    }
    if (U.k === "fog") {
      const ce = U.night ? "#c8ccd6" : "#ffffff", J = U.night ? 0.28 : 0.62, ue = o ? 4 * Math.sin(k * me / 8e3 + K) : 0;
      for (let $ = 0; $ < 4; $++) ae.fogs.push({ x: Y - v * 0.75 + $ % 2 * v * 0.18 + ($ % 2 ? ue : -ue), y: (30 + $ * 13) * R, w: v * 1.3, c: ce, a: J });
    }
    if (U.k === "storm") {
      const ce = (me / 3400 + K * 0.37) % 1;
      ae.bolts.push({ x: Y + (ee() - 0.5) * v * 0.3 - 5, y: 36 * R, o: o && !(ce < 0.05 || ce > 0.09 && ce < 0.12) ? 0.8 : 1 });
    }
  }), ae;
}
function Xu(a, l, o, c, f, v, w, A) {
  const { S: k, C: R, cw: me, yb: ae, glowAt: U, soft: K, tw: ee, sy: Y } = a, G = new Array(o * c), W = new Uint8Array(o * c), ce = new Uint8Array(o * c), J = (M, _, C, P, he) => {
    C == null || M < 0 || _ < 0 || M >= o || _ >= c || (P >= 1 || P > ia(M + 5, _ + 3)) && (G[_ * o + M] = C, W[_ * o + M] = he);
  }, ue = (M, _, C, P) => {
    for (let he = Math.max(0, Math.floor(_ - C) - 1); he <= Math.min(c - 1, _ + C + 1); he++) for (let q = Math.max(0, Math.floor(M - C) - 1); q <= Math.min(o - 1, M + C + 1); q++) P(q, he, q + 0.5 - M, he + 0.5 - _);
  }, $ = (M, _, C) => {
    for (let he = 0; he < M.length - 1; he++) {
      const q = (he + _) * me;
      if (C < q - ee / 2) return [M[he], M[he], 0];
      if (C <= q + ee / 2) return [M[he], M[he + 1], (C - q + ee / 2) / ee];
    }
    const P = M[M.length - 1];
    return [P, P, 0];
  }, E = k.filter((M) => !M.night).map((M) => M.sky), B = k.filter((M) => M.night).map((M) => M.sky), oe = K / v, Ae = 16 * Y / v;
  for (let M = 0; M < o; M++) {
    const _ = (M + 0.5) * f, C = ae(_) / v, P = $(E, 0.75, _), he = $(B, 1.25, _), q = U(_);
    for (let se = 0; se < c; se++) {
      const fe = ia(M, se), ye = se + 0.5 - C, $e = (oe > 0.01 ? ra(0.5 + ye / oe) : ye > 0 ? 1 : 0) > fe;
      let lt = $e ? P[2] > fe ? P[1] : P[0] : he[2] > fe ? he[1] : he[0];
      ($e ? ra(((se + 0.5) / c - 0.45) / 0.55) * 0.7 : ra(1 - (se + 0.5) / (c * 0.55)) * 0.7) > ia(M + 2, se + 5) && (lt = $e ? Qt(lt, "#ffffff", 0.18) : Qt(lt, "#000000", 0.25)), $e && ye >= 0 && ye < Ae && q.a * 1.3 * (1 - ye / Ae) > ia(M + 6, se + 1) && (lt = q.c), G[se * o + M] = lt, ce[se * o + M] = $e ? 0 : 1;
    }
  }
  const I = Qt(R.sun, "#ffffff", 0.55), Ie = Qt(R.moon, "#ffffff", 0.6);
  l.stars.forEach((M) => {
    const _ = Math.floor(M.x / f), C = Math.floor(M.y / v);
    if (_ < 0 || C < 0 || _ >= o || C >= c || !ce[C * o + _] || M.o < 0.15) return;
    const P = M.o > 0.45 ? R.star : Qt(R.star, G[C * o + _], 0.5), he = M.big && M.o > 0.6 ? Math.floor(M.size / f) : 0;
    J(_, C, P, 1, Ti);
    for (let q = 1; q <= he; q++) [[_ - q, C], [_ + q, C], [_, C - q], [_, C + q]].forEach((se) => {
      se[0] >= 0 && se[1] >= 0 && se[0] < o && se[1] < c && ce[se[1] * o + se[0]] && J(se[0], se[1], P, 1, Ti);
    });
  }), l.suns.forEach((M) => {
    const _ = Math.max(1.5, M.rad / f), C = M.x / f, P = M.y / v, he = M.halo / f * 0.85;
    if (ue(C, P, he, (q, se, fe, ye) => {
      const $e = Math.sqrt(fe * fe + ye * ye);
      $e > _ && $e < he && !ce[se * o + q] && J(q, se, I, 0.3 * (1 - ($e - _) / (he - _)), 0);
    }), A) {
      const q = Math.floor(w / 500) % 2, se = Math.max(1, _ * 0.3);
      for (let fe = 0; fe < 8; fe++) if (fe % 2 === q) for (let ye = _ + 1.2; ye < _ + 1.2 + se; ye += 0.7) J(Math.floor(C + Math.cos(fe * Math.PI / 4) * ye), Math.floor(P + Math.sin(fe * Math.PI / 4) * ye), R.sun, 1, qd);
    }
    ue(C, P, _, (q, se, fe, ye) => {
      fe * fe + ye * ye <= _ * _ && J(q, se, ra(((ye / _ + 1) / 2 - 0.6) / 0.4) > ia(q, se) ? R.sunEdge : R.sun, 1, Hd);
    });
  }), l.moons.forEach((M) => {
    const _ = Math.max(1.5, M.d * 0.37 / f), C = M.x / f, P = M.y / v, he = C + 0.547 * _, q = P - 0.503 * _, se = 0.82 * _;
    ue(C, P, _, (fe, ye, $e, lt) => {
      if ($e * $e + lt * lt > _ * _) return;
      const At = fe + 0.5 - he, Sn = ye + 0.5 - q;
      At * At + Sn * Sn > se * se && J(fe, ye, ra((lt + _) / (2 * _) * 1.1 - 0.1) > ia(fe, ye) ? R.moon : Ie, 1, Fd);
    });
  }), l.clouds.forEach((M) => {
    const _ = Math.max(3, M.w / f), C = _ * 0.6665, P = M.x / f, he = M.y / v, q = Qt(M.fill, "#000000", 0.16);
    for (let se = Math.max(0, Math.floor(he) - 1); se <= Math.min(c - 1, he + C + 1); se++) for (let fe = Math.max(0, Math.floor(P) - 1); fe <= Math.min(o - 1, P + _ + 1); fe++) {
      const ye = (fe + 0.5 - P) / _, $e = (se + 0.5 - he) / _;
      Wl(ye, $e) && J(fe, se, !Wl(ye, $e + 1 / _) || ra(($e - 0.42) / 0.25) * 0.8 > ia(fe, se) ? q : M.fill, M.o, Od);
    }
  }), l.fogs.forEach((M) => {
    const _ = Math.floor(M.y / v), C = Math.max(_, Math.floor((M.y + 6 * Y) / v) - 1), P = Math.floor(M.x / f), he = Math.floor((M.x + M.w) / f);
    for (let q = _; q <= C; q++) for (let se = P; se <= he; se++) {
      const fe = (se - P) / Math.max(1, he - P);
      J(se, q, M.c, M.a * (fe < 0.25 ? fe / 0.25 : fe > 0.75 ? (1 - fe) / 0.25 : 1), 0);
    }
  });
  const z = Math.max(2, Math.round(9 / v));
  l.drops.forEach((M) => {
    const _ = M.x / f, C = Math.floor(M.y / v);
    for (let P = 0; P < z; P++) J(Math.floor(_ - 0.208 * P * v / f), C + P, R.rain, M.o, Wd);
  });
  const je = Math.max(0, Math.round(4.4 / f / 2.6));
  return l.flakes.forEach((M) => {
    const _ = Math.floor(M.x / f), C = Math.floor(M.y / v);
    J(_, C, R.snow, M.o, oa);
    for (let P = 1; P <= je; P++)
      J(_ - P, C, R.snow, M.o, oa), J(_ + P, C, R.snow, M.o, oa), J(_, C - P, R.snow, M.o, oa), J(_, C + P, R.snow, M.o, oa);
  }), l.bolts.forEach((M) => {
    if (f <= 3.5)
      for (let _ = Math.floor(M.y / v); _ <= (M.y + 24) / v; _++) for (let C = Math.floor(M.x / f); C <= (M.x + 11) / f; C++)
        Jc(Ku, (C + 0.5) * f - M.x, (_ + 0.5) * v - M.y) && J(C, _, R.sun, 1, is);
    else {
      const _ = Math.round(M.x / f), C = Math.round(M.y / v);
      $u.forEach((P, he) => P.split("").forEach((q, se) => {
        q === "#" && J(_ + se, C + he, R.sun, 1, is);
      }));
    }
  }), { col: G, ids: W };
}
function Ju(a, l) {
  const o = l.px, c = Math.max(6, Math.round(l.width / o)), f = Math.max(6, Math.round(l.height / o)), v = l.width / c, w = l.height / f, A = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, k = (K) => {
    const ee = tu(K, l);
    return Xu(ee, nu(ee, { clock: A, ambient: l.ambient, seed: l.seed }), c, f, v, w, A, l.ambient);
  }, R = k(a), me = l.reveal == null ? 1 : ra(l.reveal);
  let ae = R.col, U = R.ids;
  if (me < 1) {
    const K = l.prev ? k(l.prev) : null, ee = me * (c + 12);
    ae = new Array(c * f), U = new Uint8Array(c * f);
    for (let Y = 0; Y < c * f; Y++) {
      const G = Y % c, W = Y / c | 0;
      (l.reduce ? me : ra((ee - G) / 12)) > ia(G, W) ? (ae[Y] = R.col[Y], U[Y] = R.ids[Y]) : K ? (ae[Y] = K.col[Y], U[Y] = K.ids[Y]) : (ae[Y] = null, U[Y] = 255);
    }
  }
  return eu(ae, U, c, f, { oneBit: l.oneBit, ink: l.ink, paper: l.paper, snowInk: !1 });
}
function Qu(a, l, o) {
  const c = o.width, f = o.height, v = o.reveal == null ? 1 : ra(o.reveal), w = (U, K) => {
    const ee = tu(K, o);
    ep(U, ee, nu(ee, o));
  };
  if (a.clearRect(0, 0, c, f), v >= 1) {
    w(a, l);
    return;
  }
  if (o.prev && w(a, o.prev), o.reduce) {
    a.save(), a.globalAlpha = v, w(a, l), a.restore();
    return;
  }
  const A = a.canvas, k = A.__wxOff || (A.__wxOff = document.createElement("canvas"));
  (k.width !== A.width || k.height !== A.height) && (k.width = A.width, k.height = A.height);
  const R = k.getContext("2d");
  R.setTransform(a.getTransform()), R.clearRect(0, 0, c, f), w(R, l);
  const me = v * (c + 64) - 64, ae = R.createLinearGradient(me, 0, me + 64, 0);
  ae.addColorStop(0, "rgba(0,0,0,1)"), ae.addColorStop(1, "rgba(0,0,0,0)"), R.globalCompositeOperation = "destination-in", R.fillStyle = ae, R.fillRect(0, 0, c, f), R.globalCompositeOperation = "source-over", a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.drawImage(k, 0, 0), a.restore();
}
function ep(a, l, o) {
  const { W: c, H: f, S: v, C: w, cw: A, yb: k, glowAt: R, soft: me, tw: ae, sy: U } = l, K = (I, Ie) => {
    const z = Hl(I);
    return "rgba(" + z[0] + "," + z[1] + "," + z[2] + "," + Math.max(0, Math.min(1, Ie)).toFixed(3) + ")";
  }, ee = (I, Ie) => {
    const z = a.createLinearGradient(0, 0, c, 0);
    z.addColorStop(0, I[0]);
    for (let je = 0; je < I.length - 1; je++) {
      const M = (je + Ie) * A, _ = (M - ae / 2) / c, C = (M + ae / 2) / c;
      _ > 0 && _ < 1 && z.addColorStop(_, I[je]), C > 0 && C < 1 && z.addColorStop(C, I[je + 1]);
    }
    return z.addColorStop(1, I[I.length - 1]), z;
  }, Y = Math.max(24, Math.ceil(c / 4)), G = (I, Ie) => {
    a.beginPath();
    for (let z = 0; z <= Y; z++) {
      const je = c * z / Y, M = I == null ? 0 : k(je) + I;
      z ? a.lineTo(je, M) : a.moveTo(je, M);
    }
    for (let z = Y; z >= 0; z--) {
      const je = c * z / Y;
      a.lineTo(je, k(je) + Ie);
    }
    a.closePath(), a.fill();
  };
  a.save(), a.fillStyle = ee(v.filter((I) => !I.night).map((I) => I.sky), 0.75), a.fillRect(0, 0, c, f);
  const W = a.createLinearGradient(0, 0, c, 0);
  for (let I = 0; I <= 64; I++) {
    const Ie = R(c * I / 64);
    W.addColorStop(I / 64, K(Ie.c, Math.min(1, Ie.a)));
  }
  a.fillStyle = W;
  for (let I = 0; I < 8; I++)
    a.globalAlpha = 1 - I / 8, G(I * 2 * U, (I + 1) * 2 * U);
  a.fillStyle = ee(v.filter((I) => I.night).map((I) => I.sky), 1.25);
  const ce = Math.max(0.5, me), J = 6;
  a.globalAlpha = 1, G(null, -ce);
  for (let I = 0; I < J; I++)
    a.globalAlpha = 1 - (I + 0.5) / J, G(-ce + 2 * ce * I / J, -ce + 2 * ce * (I + 1) / J);
  a.globalAlpha = 1;
  const ue = new Path2D(Yu), $ = new Path2D(Uu), E = new Path2D(Gu), B = new Path2D(Zu);
  a.fillStyle = w.star, o.stars.forEach((I) => {
    a.globalAlpha = I.o, I.big ? (a.save(), a.translate(I.x, I.y), a.scale(I.size, I.size), a.fill(ue), a.restore()) : (a.beginPath(), a.arc(I.x, I.y, 0.8, 0, Math.PI * 2), a.fill());
  }), a.globalAlpha = 1;
  const oe = Qt(w.sun, "#ffffff", 0.55);
  o.suns.forEach((I) => {
    const Ie = a.createRadialGradient(I.x, I.y, 0, I.x, I.y, I.halo);
    Ie.addColorStop(0, K(oe, 0.42)), Ie.addColorStop(0.7, K(oe, 0)), a.fillStyle = Ie, a.beginPath(), a.arc(I.x, I.y, I.halo, 0, Math.PI * 2), a.fill();
    const z = a.createLinearGradient(0, I.y - I.rad, 0, I.y + I.rad);
    z.addColorStop(0.6, w.sun), z.addColorStop(1, w.sunEdge), a.fillStyle = z, a.beginPath(), a.arc(I.x, I.y, I.rad, 0, Math.PI * 2), a.fill();
  });
  const Ae = Qt(w.moon, "#ffffff", 0.6);
  o.moons.forEach((I) => {
    a.save(), a.translate(I.x - I.d / 2, I.y - I.d / 2), a.scale(I.d / 46, I.d / 46);
    const Ie = a.createLinearGradient(0, 6, 0, 40);
    Ie.addColorStop(0, Ae), Ie.addColorStop(1, w.moon), a.fillStyle = Ie, a.fill($), a.restore();
  }), o.clouds.forEach((I) => {
    a.save(), a.globalAlpha = I.o, a.translate(I.x, I.y), a.scale(I.w / 46, I.h / 30.66), a.translate(-4, -9.67), a.fillStyle = I.fill, a.fill(E), a.restore();
  }), o.fogs.forEach((I) => {
    const Ie = a.createLinearGradient(I.x, 0, I.x + I.w, 0);
    Ie.addColorStop(0, K(I.c, 0)), Ie.addColorStop(0.25, K(I.c, I.a)), Ie.addColorStop(0.75, K(I.c, I.a)), Ie.addColorStop(1, K(I.c, 0)), a.fillStyle = Ie, a.fillRect(I.x, I.y, I.w, 6 * U);
  }), a.fillStyle = w.rain, o.drops.forEach((I) => {
    a.save(), a.globalAlpha = I.o, a.translate(I.x, I.y), a.rotate(12 * Math.PI / 180), a.fillRect(-1.5, 0, 3, 9), a.restore();
  }), a.fillStyle = w.snow, o.flakes.forEach((I) => {
    a.globalAlpha = I.o, a.beginPath(), a.arc(I.x, I.y, 2.2, 0, Math.PI * 2), a.fill();
  }), a.fillStyle = w.sun, o.bolts.forEach((I) => {
    a.save(), a.globalAlpha = I.o, a.translate(I.x, I.y), a.fill(B), a.restore();
  }), a.restore();
}
function tp(a, l) {
  var Yd, Zd, Kd, $d, Xd, Jd, Qd;
  const o = (t) => a.getElementById(t), c = o("workoutView"), f = o("workoutNameInput");
  let v = !0;
  const w = o("homeClock");
  function A() {
    w && (w.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  A(), setInterval(A, 15e3);
  const k = o("createFlow"), R = o("createMovementsSlot"), me = o("createTimingSlot"), ae = o("createFinishSlot"), U = o("movementStepSummary"), K = o("timingStepSummary"), ee = o("finishStepSummary"), Y = o("continueToTiming"), G = o("continueToFinish"), W = o("finishMoveButton");
  let ce = !1, J = [];
  function ue(t) {
    !t || J.some((r) => r.node === t) || J.push({ node: t, parent: t.parentNode, next: t.nextSibling });
  }
  function $(t, r) {
    t && (ue(t), r.appendChild(t));
  }
  function E() {
    [...J].reverse().forEach(({ node: t, parent: r, next: s }) => {
      r && (s && s.parentNode === r ? r.insertBefore(t, s) : r.appendChild(t));
    }), J = [];
  }
  function B(t) {
    a.querySelectorAll(".createStep").forEach((r) => {
      r.classList.toggle("active", r.dataset.createStep === t);
    }), t === "timing" && (ce = !0), oe();
  }
  function oe() {
    var le, pe;
    if (!xe) return;
    Ke[yt];
    const t = Je.filter((ne) => !ne.hidden), r = t.filter((ne) => ne.kind !== "rest").length, s = t.filter((ne) => ne.kind === "rest").length;
    U.textContent = r ? r + " movement" + (r === 1 ? "" : "s") + (s ? " · " + s + " rest" + (s === 1 ? "" : "s") : "") : "No movements yet";
    const u = r > 0, g = a.querySelector('[data-open-step="timing"]'), T = a.querySelector('[data-open-step="finish"]');
    g.disabled = !u, Y.disabled = !u, K.textContent = u ? za(_.value) + " · " + zt(C.value) + " movement · " + zt(P.value) + " rest" : "Add a movement first", T.disabled = !(u && ce);
    const N = ((f == null ? void 0 : f.value) || "").trim(), j = [];
    (le = o("includeWarmupPreset")) != null && le.checked && j.push("warm-up"), (pe = o("includeCooldownPreset")) != null && pe.checked && j.push("cooldown"), ee.textContent = N ? N + (j.length ? " · " + j.join(" + ") : "") : j.length ? j.join(" + ") : "Name and optional extras";
  }
  function Ae() {
    var De, Qe, qe;
    k.hidden = !1, ce = !1;
    const t = a.querySelector(".editNameRow"), r = o("createMoveOptions"), s = a.querySelector(".timeTiles"), u = o("routineSummaryModal"), g = a.querySelector(".tempoRevealRow"), T = o("tempoExperiment"), N = (De = o("warmupList")) == null ? void 0 : De.closest("section"), j = o("movementCreatorLaunch"), le = o("movementCreator"), pe = (Qe = o("strengthList")) == null ? void 0 : Qe.closest("section"), ne = (qe = o("cooldownList")) == null ? void 0 : qe.closest("section");
    [r == null ? void 0 : r.querySelector(".createExtras"), N, j, le, pe, ne].forEach((_e) => _e && $(_e, R)), [r, s, u, g, T].forEach((_e) => $(_e, me)), $(t, ae), B("movements"), oe();
  }
  function I() {
    E(), k.hidden = !0, a.querySelectorAll(".createStep").forEach((t) => t.classList.remove("active"));
  }
  a.querySelectorAll("[data-open-step]").forEach((t) => t.addEventListener("click", () => {
    t.disabled || B(t.dataset.openStep);
  })), Y.addEventListener("click", () => {
    Y.disabled || B("timing");
  }), G.addEventListener("click", () => B("finish")), W.addEventListener("click", () => o("saveWorkoutEdit").click());
  const Ie = { home: o("homeView"), workout: o("workoutView"), settings: o("settingsView") }, z = o("homeNav"), je = o("settingsNav");
  function M(t) {
    Object.entries(Ie).forEach(([r, s]) => s.classList.toggle("active", r === t)), z.classList.toggle("active", t === "home"), je.classList.toggle("active", t === "settings"), t === "home" && setTimeout(qi, 400), t === "settings" && (requestAnimationFrame(() => fi(a.querySelector(".tab.active"), !1)), ur());
  }
  const _ = o("totalTime"), C = o("workTime"), P = o("restTime"), he = o("totalOut"), q = o("workOut"), se = o("restOut"), fe = o("totalFill"), ye = o("workFill"), $e = o("restFill"), lt = o("roundsInput"), At = o("roundsFill"), Sn = o("roundsOut"), Wn = o("totalLabel"), vt = o("routineSummaryModal"), Xe = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let Tt = Xe.map((t) => ({ ...t })), Je = [
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
  const yn = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let _n = yn.map((t) => ({ ...t }));
  const Mr = {
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
  }, dt = bo(l.data), Ke = dt.profiles;
  let yt = Ke[dt.selected] ? dt.selected : dt.order.find((t) => Ke[t]) || "kettlebell";
  function bo(t) {
    const r = t && typeof t == "object" ? JSON.parse(JSON.stringify(t)) : {}, s = r.profiles && Object.keys(r.profiles).length ? r.profiles : JSON.parse(JSON.stringify(Mr)), u = (Array.isArray(r.order) ? r.order : Object.keys(s)).filter((g) => s[g]);
    return Object.keys(s).forEach((g) => {
      u.includes(g) || u.push(g);
    }), {
      v: 1,
      profiles: s,
      order: u,
      selected: r.selected || u[0],
      history: Array.isArray(r.history) ? r.history : [],
      checkins: (Array.isArray(r.checkins) ? r.checkins : Sr(r.energy)).map(Li),
      settings: { ...r.settings || {} }
    };
  }
  function Sr(t) {
    if (!Array.isArray(t)) return [];
    const r = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], s = [];
    return t.forEach((u) => {
      const g = new Date(u.at);
      if (isNaN(g)) return;
      const T = g.getFullYear() + "-" + String(g.getMonth() + 1).padStart(2, "0") + "-" + String(g.getDate()).padStart(2, "0"), N = g.getHours() < 14 ? "morning" : "evening";
      if (s.some((le) => le.date === T && le.slot === N)) return;
      const j = r.indexOf(u.value) + 1;
      j > 0 && s.push({ date: T, slot: N, mood: null, energy: j, at: u.at });
    }), s;
  }
  function Li(t) {
    if (t.scale === 100) return t;
    const r = (s) => s == null ? null : Math.round((Number(s) - 1) / 5 * 100);
    return { ...t, mood: r(t.mood), energy: r(t.energy), scale: 100 };
  }
  function Cn() {
    xe || (dt.selected = yt, dt.order = dt.order.filter((t) => Ke[t] && t !== Wt), l.save(dt));
  }
  function ht() {
    return dt.settings;
  }
  function Ot(t) {
    const r = Ke[t];
    if (!r) return;
    yt = t;
    const s = o("workoutNameInput");
    if (s && (s.value = r.name), _.value = r.total, C.value = r.work, P.value = r.rest, lt.value = r.rounds || 1, r.customSequence) {
      const u = (r.sequence || []).map((T) => ({ ...T })), g = (T) => u.filter((N) => N.presetRole === T).map(({ presetRole: N, ...j }) => j);
      Tt = (r.warmup || g("warmup")).map((T) => ({ ...T })), _n = (r.cooldown || g("cooldown")).map((T) => ({ ...T })), Je = u.filter((T) => !T.presetRole), Go(r.preset || "movement", !1);
    } else
      _.min = 3, _.max = 40, _.step = 1, C.min = 20, C.max = 60, C.step = 5, P.min = 5, P.max = 30, P.step = 5, Tt = (r.warmup || Xe).map((u) => ({ ...u })), _n = (r.cooldown || yn).map((u) => ({ ...u })), Je = r.strength.map((u) => Array.isArray(u) ? (([g, T, N, j = !1]) => ({ id: g, name: T, group: N, kind: "work", hidden: !!j }))(u) : { ...u });
    a.querySelectorAll(".workoutPanel[data-workout]").forEach((u) => u.classList.toggle("active", u.dataset.workout === t)), kt();
  }
  function Cr(t, r, s) {
    const u = t.getBoundingClientRect(), g = u.width / 2, T = u.height / 2, N = r - g, j = s - T;
    let le = 1 / 0, pe = 1 / 0;
    N !== 0 && (le = g / Math.abs(N)), j !== 0 && (pe = T / Math.abs(j));
    const ne = Math.min(Math.max(1 / Math.min(le, pe), 0), 1);
    let Q = Math.atan2(j, N) * (180 / Math.PI) + 90;
    return Q < 0 && (Q += 360), { edge: ne, angle: Q };
  }
  function zo(t, r, s = !1) {
    const u = t.getBoundingClientRect(), g = r.clientX - u.left, T = r.clientY - u.top, { edge: N, angle: j } = Cr(t, g, T), le = s ? 100 : N * 100;
    t.style.setProperty("--edge-proximity", le.toFixed(3)), t.style.setProperty("--cursor-angle", j.toFixed(3) + "deg"), t.classList.toggle("borderGlowActive", s || le >= 30);
  }
  function xt(t) {
    t.addEventListener("pointermove", (s) => zo(t, s, !1)), t.addEventListener("pointerenter", (s) => zo(t, s, !1)), t.addEventListener("pointerdown", (s) => zo(t, s, !0));
    const r = () => {
      t.classList.remove("borderGlowActive"), t.style.setProperty("--edge-proximity", "0");
    };
    t.addEventListener("pointerleave", r), t.addEventListener("pointerup", r), t.addEventListener("pointercancel", r);
  }
  xt(o("addWorkoutPanel"));
  let xe = !1, Wt = null;
  function We(t) {
    return String(t ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]);
  }
  function qn(t) {
    return t.summary ? t.summary : t.customSequence ? za(t.total) + " · custom move" : za(t.total) + " · " + zt(t.work) + " / " + zt(t.rest) + " · warm-up + cooldown";
  }
  function Wa(t, r) {
    var T;
    const s = document.createElement("article");
    s.className = "workoutPanel", s.dataset.workout = t, s.tabIndex = 0;
    const u = r.activityCount ?? (((T = r.sequence) == null ? void 0 : T.length) || 0);
    s.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + We(r.name) + '</div><div class="sub">' + We(qn(r)) + '</div><span class="sourceTag">' + We(r.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (u ? u + " activities" + ((r.rounds || 1) > 1 ? " × " + r.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + We(r.name) + "</div></div>";
    const g = o("addWorkoutPanel");
    return o("workoutGallery").insertBefore(s, g), xt(s), s.addEventListener("click", (N) => {
      N.target.closest("button") || Ot(t);
    }), s.addEventListener("keydown", (N) => {
      (N.key === "Enter" || N.key === " ") && !N.target.closest("button") && (N.preventDefault(), Ot(t));
    }), s.querySelector(".seeWorkoutBtn").addEventListener("click", (N) => {
      N.stopPropagation(), Ot(t), ps(!1);
    }), s.querySelector(".startWorkoutBtn").addEventListener("click", (N) => {
      N.stopPropagation(), Ot(t), ar();
    }), s;
  }
  function Ai() {
    a.querySelectorAll(".workoutPanel[data-workout]").forEach((t) => t.remove()), dt.order.forEach((t) => {
      Ke[t] && Wa(t, Ke[t]);
    }), a.querySelectorAll(".workoutPanel[data-workout]").forEach((t) => t.classList.toggle("active", t.dataset.workout === yt));
  }
  Ai(), o("addWorkoutPanel").addEventListener("keydown", (t) => {
    (t.key === "Enter" || t.key === " ") && (t.preventDefault(), o("addWorkoutPanel").click());
  }), o("addWorkoutPanel").addEventListener("click", () => {
    xe = !0, Wt = "custom-" + Date.now(), Ke[Wt] = {
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
    }, Ot(Wt), ps(!0);
  });
  let Ue = [], it = 0, en = 0, wo = 1, jn = !1, tn = null, Vo = null, dn = !1, qa = dt.settings.upcomingCount ?? "all", ja = "movement";
  function yo(t, r, s) {
    return (Number(t) - r) / (s - r) * 100;
  }
  function zt(t) {
    const r = Math.max(0, Number(t) || 0);
    return r >= 3600 && r % 3600 === 0 ? r / 3600 + " hr" : r >= 60 && r % 60 === 0 ? r / 60 + " min" : r >= 60 ? Math.round(r / 60) + " min" : Math.round(r) + " sec";
  }
  function za(t) {
    const r = Math.max(0, Number(t) || 0);
    return r >= 60 && r % 60 === 0 ? r / 60 + " hr" : r >= 60 ? Math.floor(r / 60) + " hr " + r % 60 + " min" : r + " min";
  }
  function zn() {
    fe.style.width = yo(_.value, Number(_.min), Number(_.max)) + "%", ye.style.width = yo(C.value, Number(C.min), Number(C.max)) + "%", $e.style.width = yo(P.value, Number(P.min), Number(P.max)) + "%", q.textContent = zt(C.value), se.textContent = zt(P.value);
    const t = Number(lt.value) || 1;
    At.style.width = yo(t, 1, 10) + "%", Wn.textContent = t > 1 ? "Time per round" : "Total time";
  }
  function Va(t) {
    return t.filter((r) => !r.hidden);
  }
  function oo(t) {
    const r = Math.max(0, Math.round(Number(t) || 0)), s = Math.floor(r / 3600), u = Math.floor(r % 3600 / 60), g = r % 60;
    return (s ? s + ":" + String(u).padStart(2, "0") : u) + ":" + String(g).padStart(2, "0");
  }
  function an(t) {
    let r;
    try {
      r = new URL(String(t || "").trim());
    } catch {
      return null;
    }
    const s = r.hostname.replace(/^(www|m|music)\./, "");
    let u = null;
    if (s === "youtu.be") u = r.pathname.slice(1).split("/")[0];
    else if (/^youtube(-nocookie)?\.com$/.test(s))
      if (r.pathname === "/watch") u = r.searchParams.get("v");
      else {
        const j = r.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        j && (u = j[2]);
      }
    if (!u || !/^[\w-]{11}$/.test(u)) return null;
    const g = (j) => {
      if (!j) return 0;
      if (/^\d+$/.test(j)) return Number(j);
      const le = j.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return le ? (Number(le[1]) || 0) * 3600 + (Number(le[2]) || 0) * 60 + (Number(le[3]) || 0) : 0;
    }, T = g(r.searchParams.get("t") || r.searchParams.get("start")), N = g(r.searchParams.get("end"));
    return { id: u, start: T, end: N > T ? N : null };
  }
  function Ga(t, r) {
    if (t.useVideoLength === !1) return Math.max(5, Number(t.duration) || r || 300);
    const s = Number(t.start) || 0, u = Number(t.end) || Number(t.videoDuration) || 0;
    return u > s ? Math.round(u - s) : Number(t.duration) || 300;
  }
  function la(t, r) {
    const s = Math.max(0, Number(t) || 0);
    return Math.round(r === "hour" ? s * 3600 : r === "min" ? s * 60 : s);
  }
  function Go(t, r = !0) {
    ja = t, a.querySelectorAll(".createPresetBtn").forEach((u) => u.classList.toggle("active", u.dataset.movePreset === t));
    const s = Ke[yt];
    s && (s.preset = t), t === "work" ? (_.min = 30, _.max = 480, _.step = 30, C.min = 300, C.max = 7200, C.step = 300, P.min = 60, P.max = 1800, P.step = 60, r && (_.value = 60, C.value = 1500, P.value = 300), o("addMovementUnit").value = "min", o("addMovementDuration").value = 25, o("addRestUnit").value = "min", o("addRestDuration").value = 5) : (_.min = 3, _.max = 40, _.step = 1, C.min = 20, C.max = 60, C.step = 5, P.min = 5, P.max = 30, P.step = 5, r && (_.value = 20, C.value = 45, P.value = 15), o("addMovementUnit").value = "sec", o("addMovementDuration").value = 45, o("addRestUnit").value = "sec", o("addRestDuration").value = 30), zn();
  }
  function _i(t, r) {
    const s = ja === "work";
    return t.map((u, g) => ({ ...u, id: r + "-" + g + "-" + Date.now().toString(36), useGlobalTiming: !s, duration: s ? 60 : Number(C.value) }));
  }
  function Ei() {
    const t = Ke[yt];
    t != null && t.customSequence && (t.includeWarmup = o("includeWarmupPreset").checked, t.includeCooldown = o("includeCooldownPreset").checked, t.includeWarmup && !Tt.length && (Tt = _i(Xe, "warm")), t.includeCooldown && !_n.length && (_n = _i(yn, "cool")), kt());
  }
  function rs() {
    const t = o("upcomingCountSetting");
    if (!t) return;
    const r = Math.max(1, Ue.length - 1), s = qa;
    t.innerHTML = "";
    for (let T = 1; T <= r; T++) {
      const N = document.createElement("option");
      N.value = String(T), N.textContent = String(T), t.appendChild(N);
    }
    const u = document.createElement("option");
    u.value = "all", u.textContent = "All", t.appendChild(u);
    const g = s === "all" ? "all" : String(Math.min(Number(s) || 1, r));
    t.value = g, qa = g === "all" ? "all" : Number(g);
  }
  function kt() {
    Number(_.value) * 60;
    const t = Number(C.value), r = Number(P.value), s = Ke[yt], u = !!(s != null && s.customSequence), g = (u ? !s.includeWarmup : s != null && s.warmupOff) ? [] : Va(Tt), T = Va(Je), N = u && !s.includeCooldown ? [] : Va(_n);
    if (s && (s.total = Number(_.value), s.work = t, s.rest = r, s.rounds = Number(lt.value) || 1, s.customSequence ? (s.sequence = Je.map((Le) => ({ ...Le })), s.warmup = Tt.map((Le) => ({ ...Le })), s.cooldown = _n.map((Le) => ({ ...Le }))) : (s.strength = Je.map((Le) => ({ ...Le })), s.warmup = Tt.map((Le) => ({ ...Le })), s.cooldown = _n.map((Le) => ({ ...Le })))), s != null && s.customSequence) {
      const Le = [...g.map((ut) => ({ ...ut, section: "warmup" })), ...T, ...N.map((ut) => ({ ...ut, section: "cooldown" }))].map((ut) => {
        if (ut.kind === "video") return { ...ut, duration: Ga(ut, t), rest: 0 };
        if (ut.kind === "rest") {
          const gn = ut.useGlobalTiming === !0 ? r : Number(ut.duration) || r;
          return { ...ut, duration: gn, rest: 0 };
        }
        const mn = ut.useGlobalTiming === !1 && Number(ut.duration) || t;
        return { ...ut, duration: mn, rest: 0 };
      });
      s.autoRest && Number(s.autoRestDuration) > 0 ? (Ue = [], Le.forEach((ut, mn) => {
        Ue.push(ut);
        const gn = Le[mn + 1];
        ut.kind !== "rest" && gn && gn.kind !== "rest" && Ue.push({
          id: "auto-rest-" + mn,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(s.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : Ue = Le;
    } else
      Ue = [...g.map((Le) => ({ ...Le, section: "warmup" })), ...T, ...N.map((Le) => ({ ...Le, section: "cooldown" }))].map((Le) => Le.kind === "video" ? { ...Le, duration: Ga(Le, t), rest: 0 } : Le.kind === "rest" ? { ...Le, duration: Le.useGlobalTiming === !0 ? r : Number(Le.duration) || r, rest: 0 } : { ...Le, duration: Le.useGlobalTiming === !1 && Number(Le.duration) || t, rest: r }), Ue.forEach((Le, ut) => {
        var mn;
        ((mn = Ue[ut + 1]) == null ? void 0 : mn.kind) === "rest" && (Le.rest = 0);
      }), Ue.length && (Ue[Ue.length - 1].rest = 0);
    const j = Math.max(1, Math.min(10, Number(lt.value) || 1)), le = Ue, pe = (Le) => j <= 1 ? null : Le.section === "warmup" || Le.presetRole === "warmup" ? "first" : Le.section === "cooldown" || Le.presetRole === "cooldown" ? "last" : Le.kind === "video" && (Le.videoRounds === "first" || Le.videoRounds === "last") ? Le.videoRounds : null, ne = (Le) => !!pe(Le), Q = le.filter((Le) => !ne(Le)), De = le.filter(ne), Qe = Q.length, qe = Q.reduce((Le, ut) => Le + ut.duration + ut.rest, 0), _e = De.reduce((Le, ut) => Le + ut.duration + ut.rest, 0), Me = [
      De.some((Le) => Le.section === "warmup" || Le.presetRole === "warmup") && "warm-up",
      De.some((Le) => Le.section === "cooldown" || Le.presetRole === "cooldown") && "cooldown",
      De.some((Le) => Le.kind === "video" && !Le.section && !Le.presetRole) && "video"
    ].filter(Boolean), gt = Me.length > 1 ? Me.slice(0, -1).join(", ") + " & " + Me[Me.length - 1] : Me[0] || "";
    Ue = [];
    const bt = (Le, ut) => {
      const mn = pe(Le);
      return !mn || (mn === "first" ? ut === 1 : ut === j);
    };
    for (let Le = 1; Le <= j; Le++)
      if (le.filter((ut) => bt(ut, Le)).forEach((ut, mn) => Ue.push({ ...ut, id: ut.id + (j > 1 ? "-r" + Le : ""), round: Le, roundIndex: mn })), Le < j && Qe)
        if (s != null && s.customSequence)
          Ue.push({ id: "round-break-" + Le, name: "Rest", group: "Round " + (Le + 1) + " next", kind: "rest", hidden: !1, duration: r, rest: 0, round: Le, roundIndex: Qe, roundBreak: !0 });
        else {
          const ut = Ue[Ue.length - 1];
          ut.rest = r, ut.roundBreakAfter = !0;
        }
    zn();
    const ze = Ue.reduce((Le, ut) => Le + ut.duration + ut.rest, 0), wt = Math.round(qe / 60), Et = Math.round(ze / 60), st = j > 1 ? za(wt) + " × " + j + " rounds" + (_e ? " + " + zt(_e) + " " + gt : "") + " (" + za(Et) + ")" : za(Et), ot = [g.length ? "warm-up" : "", N.length ? "cooldown" : ""].filter(Boolean), pn = s != null && s.customSequence ? st + " · " + Qe + " items" + (ot.length && !(j > 1 && _e) ? " · " + ot.join(" + ") : "") : st + " · " + zt(t) + " / " + zt(r) + (ot.length && !(j > 1 && _e) ? " · " + ot.join(" + ") : "");
    he.textContent = zt(qe);
    const An = Ue.filter((Le) => !Le.roundBreak).length, Ut = j > 1 ? An + " activities · " + j + " rounds" : Qe + " activities";
    Sn.textContent = j > 1 ? j + " rounds · " + za(Et) + " total" : "1 round", o("roundsCount").textContent = j, a.querySelectorAll("[data-rounds-step]").forEach((Le) => {
      Le.disabled = Number(Le.dataset.roundsStep) < 0 ? j <= 1 : j >= 10;
    }), s && (s.summary = pn, s.activityCount = Qe);
    const xi = a.querySelector(".workoutPanel.active .sub");
    xi && (xi.textContent = pn), vt.textContent = pn, Pe(), a.querySelectorAll(".workoutPanel.active .activityCount").forEach((Le) => Le.textContent = Ut), zn(), Yo(), Ua(), _a(), rs(), xe && oe(), Ie.workout.classList.contains("active") && !tn && or();
  }
  const Vn = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', Di = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', Ri = {
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
  }, En = (t) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (Ri[t] || "") + "</svg>";
  a.querySelectorAll("[data-icon]").forEach((t) => {
    t.innerHTML = En(t.dataset.icon);
  });
  let Rt = null, on = null;
  function St(t) {
    return t = Math.max(1, Number(t) || 0), t >= 3600 && t % 3600 === 0 ? { value: t / 3600, unit: "hour" } : t >= 60 && t % 60 === 0 ? { value: t / 60, unit: "min" } : { value: t, unit: "sec" };
  }
  function io(t = !1) {
    const r = a.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    r && (r.focus({ preventScroll: !0 }), t && r.select());
  }
  function Aa(t, r, s = {}) {
    const u = t.kind === "rest", g = t.kind === "video", T = g ? t.useVideoLength !== !1 : u ? t.useGlobalTiming === !0 : t.useGlobalTiming !== !1, N = Number(u ? P.value : C.value), j = St(g ? t.useVideoLength === !1 ? t.duration : Ga({ ...t, useVideoLength: !0 }) : T ? N : t.duration || N), le = g && (Number(t.videoDuration) > 0 || Number(t.end) > 0), pe = g ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + We(t.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + We(t.autoName ? "" : t.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([ze, wt]) => '<option value="' + ze + '"' + ((t.videoRounds || "every") === ze ? " selected" : "") + ">" + wt + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + We(t.name) + '" placeholder="' + (u ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + We(t.group) + '" placeholder="' + (u ? "Rest" : "e.g. Glutes + legs") + '"></label>', ne = g ? "Play the whole " + (Number(t.start) > 0 || Number(t.end) > 0 ? "clip" : "video") + (le ? " · " + oo(Ga({ ...t, useVideoLength: !0 })) : "") : "Use global timing · " + zt(N), Q = document.createElement("div");
    Q.className = "moveRow editing" + (s.sheet ? " inSheet" : ""), Q.dataset.index = r, Q.dataset.id = t.id;
    const De = s.isNew ?? (on == null ? void 0 : on.item) === t, Qe = s.sheet ? '<div class="moveEditActions sheetActions">' + (De ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (t.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + We(t.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (De ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    Q.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (g ? " videoFields" : "") + '">' + pe + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (T ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + We(ne) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + j.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((ze) => '<option value="' + ze + '"' + (ze === j.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[ze] + "</option>").join("") + "</select></div></div>" + Qe + "</div>";
    const qe = (ze) => Q.querySelector("[data-f=" + ze + "]"), _e = () => {
      const ze = qe("global").checked;
      qe("dur").disabled = ze, qe("unit").disabled = ze, Q.querySelector(".creatorDurationRow").classList.toggle("isDisabled", ze);
    };
    qe("global").addEventListener("change", _e), _e();
    const Me = () => {
      var ze;
      if (s.sheet) {
        (ze = s.onCancel) == null || ze.call(s);
        return;
      }
      De && va(), Rt = null, kt();
    }, gt = () => {
      var Et;
      if (g) {
        bt();
        return;
      }
      const ze = qe("name").value.trim();
      if (!ze) {
        qe("name").focus();
        return;
      }
      t.name = ze, t.group = qe("group").value.trim() || (u ? "Rest" : "Movement");
      const wt = qe("global").checked;
      if (t.useGlobalTiming = wt, wt || (t.duration = Math.max(u ? 5 : 1, la(qe("dur").value, qe("unit").value))), s.sheet) {
        (Et = s.onSaved) == null || Et.call(s);
        return;
      }
      De && (on = null), Rt = null, kt(), jt(De ? u ? "Rest added" : "Movement added" : "Movement updated");
    }, bt = () => {
      var ot;
      const ze = qe("url").value.trim(), wt = an(ze);
      if (!wt) {
        qe("urlError").hidden = !1, qe("url").classList.add("invalid"), qe("url").focus();
        return;
      }
      const Et = wt.id !== t.videoId;
      t.url = ze, t.videoId = wt.id, t.start = wt.start, t.end = wt.end, Et && (t.videoDuration = null, t.videoError = null);
      const st = qe("name").value.trim();
      t.autoName = !st, t.name = st || (Et ? "" : t.name) || t.videoTitle || "YouTube video", t.group = "Video", t.videoRounds = qe("rounds").value, t.useVideoLength = qe("global").checked, t.useVideoLength || (t.duration = Math.max(5, la(qe("dur").value, qe("unit").value))), s.sheet ? (ot = s.onSaved) == null || ot.call(s) : (De && (on = null), Rt = null, kt(), jt(De ? "Video added" : "Video updated")), (Et || !t.videoDuration || t.autoName && !t.videoTitle) && ad(t);
    };
    if (g && qe("url").addEventListener("input", () => {
      qe("urlError").hidden = !0, qe("url").classList.remove("invalid");
    }), Q.querySelector("[data-a=cancel]").addEventListener("click", Me), Q.querySelector("[data-a=save]").addEventListener("click", gt), s.sheet && !De) {
      Q.querySelector("[data-a=hide]").addEventListener("click", () => {
        var wt;
        return (wt = s.onHide) == null ? void 0 : wt.call(s);
      });
      const ze = Q.querySelector("[data-a=remove]");
      dr(ze, ze.querySelector(".removeFill"), 1200, () => {
        var wt;
        return (wt = s.onRemove) == null ? void 0 : wt.call(s);
      });
    }
    return Q.addEventListener("keydown", (ze) => {
      ze.key === "Escape" && (ze.preventDefault(), ze.stopPropagation(), Me()), ze.key === "Enter" && ze.target.matches("input") && (ze.preventDefault(), gt());
    }), Q;
  }
  function xo(t, r) {
    const s = o(r);
    s.innerHTML = "", t.forEach((u, g) => {
      if (u === Rt && !ge()) {
        s.appendChild(Aa(u, g));
        return;
      }
      const T = document.createElement("div");
      T.className = "moveRow" + (u.hidden ? " hidden" : "") + (u.kind === "rest" ? " restItem" : "") + (u.kind === "video" ? " videoItem" : "") + (Gr(u) ? " noMeta" : ""), T.dataset.index = g, T.dataset.id = u.id;
      const N = u.kind === "rest" ? u.useGlobalTiming === !0 ? "Global timing" : zt(u.duration) : u.useGlobalTiming === !1 ? zt(u.duration) : "Global timing", j = u.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", le = u.kind === "video" ? u.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (u.useVideoLength === !1 ? "stops after " + zt(u.duration) : Number(u.videoDuration) > 0 || Number(u.end) > 0 ? oo(Ga(u)) : "plays to the end") + (u.videoRounds === "first" ? " · first round only" : u.videoRounds === "last" ? " · last round only" : "") : u.group + " · " + N, pe = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + We(u.name) + '. Drag, or use the up and down arrow keys">' + Vn + "</button>", ne = '<div class="moveText"><div class="moveItemName">' + We(u.name) + j + '</div><div class="moveMeta">' + We(le) + "</div></div>", Q = (qe) => qe.addEventListener("keydown", (_e) => {
        var bt, ze;
        if (_e.key !== "ArrowUp" && _e.key !== "ArrowDown") return;
        _e.preventDefault();
        const Me = t.indexOf(u), gt = Me + (_e.key === "ArrowUp" ? -1 : 1);
        gt < 0 || gt >= t.length || (t.splice(Me, 1), t.splice(gt, 0, u), kt(), (ze = (bt = o(r).children[gt]) == null ? void 0 : bt.querySelector(".dragHandle")) == null || ze.focus());
      });
      if (ge()) {
        T.classList.add("phoneRow"), T.tabIndex = 0, T.setAttribute("role", "button"), T.setAttribute("aria-label", "Edit " + (u.name || "step")), T.innerHTML = pe + ne + '<span class="rowChevron" aria-hidden="true">›</span>';
        const qe = T.querySelector(".dragHandle");
        qe.addEventListener("pointerdown", (_e) => Uo(_e, T, s, t)), Q(qe), T.addEventListener("click", (_e) => {
          _e.target.closest(".dragHandle") || Ge(u, t);
        }), T.addEventListener("keydown", (_e) => {
          _e.key === "Enter" && _e.target === T && (_e.preventDefault(), Ge(u, t));
        }), s.appendChild(T);
        return;
      }
      T.innerHTML = pe + ne + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + We(u.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (u.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + We(u.name) + '"><span class="removeFill"></span><span class="removeLabel">' + Di + "</span></button></div>", T.querySelector(".editBtn").addEventListener("click", () => {
        va(), Rt = u, kt(), io();
      }), T.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        u.hidden = !u.hidden, kt();
      });
      const De = T.querySelector(".removeBtn");
      dr(De, De.querySelector(".removeFill"), 1200, () => {
        const qe = t.indexOf(u);
        qe < 0 || (t.splice(qe, 1), kt(), jt("Removed " + u.name, { label: "Undo", run: () => {
          t.splice(Math.min(qe, t.length), 0, u), kt();
        } }));
      });
      const Qe = T.querySelector(".dragHandle");
      Qe.addEventListener("pointerdown", (qe) => Uo(qe, T, s, t)), Q(Qe), s.appendChild(T);
    });
  }
  const Dn = () => {
    var t;
    return (t = window.matchMedia) == null ? void 0 : t.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, Rn = (t) => {
    var r;
    try {
      (r = navigator.vibrate) == null || r.call(navigator, t);
    } catch {
    }
  };
  function Uo(t, r, s, u) {
    if (t.button !== void 0 && t.button !== 0) return;
    t.preventDefault();
    const g = t.currentTarget, T = t.pointerId, N = !Dn();
    try {
      g.setPointerCapture(T);
    } catch {
    }
    const j = r.closest(".exerciseScroller") || y(r), le = s.style.position;
    s.style.position = "relative";
    const pe = [...s.children].filter((pt) => pt.classList.contains("moveRow")), ne = pe.indexOf(r), Q = parseFloat(getComputedStyle(s).rowGap) || 8, De = r.offsetHeight, Qe = De + Q, qe = pe.map((pt) => pt.offsetTop), _e = pe.map((pt) => pt.offsetHeight), Me = () => s.getBoundingClientRect().top, gt = s.getBoundingClientRect().width, bt = t.clientY - (Me() + qe[ne]), ze = t.clientX;
    let wt = t.clientY, Et = t.clientX, st = Me() + qe[ne], ot = 0, pn = 0, An = 0, Ut = 1, xi = 0, Le = ne, ut = !1, mn = 0, gn = !1, Cl = !1, Xr = qe[ne];
    s.classList.add("reordering"), r.classList.add("dragging"), r.style.transition = "none", Rn(8);
    const Tl = () => {
      const pt = wt - bt + De / 2 - Me();
      let Mt = 0;
      return pe.forEach((Ht, na) => {
        na !== ne && pt > qe[na] + _e[na] / 2 && Mt++;
      }), Mt;
    }, Ll = () => {
      pe.forEach((pt, Mt) => {
        if (Mt === ne) return;
        const Ht = ne < Le && Mt > ne && Mt <= Le ? -Qe : ne > Le && Mt >= Le && Mt < ne ? Qe : 0;
        pt.style.transform = Ht ? "translateY(" + Ht + "px)" : "";
      });
    }, Fs = () => {
      const pt = s.getBoundingClientRect(), Mt = Math.abs(Et - ze) > Math.max(80, gt * 0.3) || Et < pt.left - 24 || Et > pt.right + 24;
      Mt !== ut && (ut = Mt, r.classList.toggle("willReturn", Mt), Rn(Mt ? 10 : 4));
      const Ht = ut ? ne : Tl();
      Ht !== Le && (Le = Ht, Ll(), ut || Rn(4));
    }, ki = () => {
      if (Le === ne) return qe[ne];
      const pt = pe.filter((Ht, na) => na !== ne);
      let Mt = qe[0];
      for (let Ht = 0; Ht < Le; Ht++) Mt += pt[Ht].offsetHeight + Q;
      return Mt;
    }, Jr = () => {
      const pt = N ? Math.min(Math.abs(ot) / 40, 1) : 0, Mt = N && !gn ? Math.max(-3, Math.min(3, An * 0.6)) : 0;
      r.style.transform = "translate(" + pn.toFixed(2) + "px," + (st - (Me() + qe[ne])).toFixed(2) + "px) rotate(" + Mt.toFixed(2) + "deg) scale(" + (Ut * (1 - 0.04 * pt)).toFixed(4) + "," + (Ut * (1 + 0.06 * pt)).toFixed(4) + ")";
    }, rt = () => {
      mn = requestAnimationFrame(rt);
      const pt = Et - ze, Mt = gn ? Me() + Xr : wt - bt, Ht = gn ? 0 : ut ? pt * 0.9 : Math.max(-22, Math.min(22, pt * 0.22)), na = gn ? 1 : ut ? 0.97 : 1.035;
      if (!N) {
        st = Mt, pn = gn ? 0 : Ht, Ut = 1, Jr(), gn && Kt();
        return;
      }
      const Eu = gn ? 0.24 : 0.2, Du = gn ? 0.62 : 0.68;
      ot = (ot + (Mt - st) * Eu) * Du, st += ot, An = (An + (Ht - pn) * 0.16) * 0.7, pn += An, xi = (xi + (na - Ut) * 0.22) * 0.6, Ut += xi, Jr(), gn && Math.abs(ot) < 0.15 && Math.abs(Mt - st) < 0.5 && Math.abs(pn) < 0.5 && Math.abs(Ut - 1) < 3e-3 && Kt();
    }, Nt = setInterval(() => {
      if (!j || gn) return;
      const pt = j.getBoundingClientRect(), Mt = 56, Ht = wt < pt.top + Mt ? -10 : wt > pt.bottom - Mt ? 10 : 0;
      Ht && (j.scrollTop += Ht, Fs());
    }, 30);
    function Kt() {
      if (Cl) return;
      Cl = !0, cancelAnimationFrame(mn);
      const pt = Le !== ne, Mt = r.dataset.id;
      if (s.classList.remove("reordering"), pe.forEach((na) => {
        na.style.transition = "none", na.style.transform = "";
      }), r.classList.remove("dragging", "willReturn"), s.style.position = le, pt) {
        const [na] = u.splice(ne, 1);
        u.splice(Le, 0, na);
      }
      kt();
      const Ht = Mt && s.querySelector('.moveRow[data-id="' + Mt + '"]');
      Ht && N && Ht.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), pt && jt("Order saved");
    }
    const vn = (pt) => {
      if (pt.pointerId === T) {
        if (pt.pointerType === "mouse" && pt.buttons === 0) {
          La();
          return;
        }
        wt = pt.clientY, Et = pt.clientX, Fs();
      }
    }, ta = (pt) => {
      pt.pointerId === T && La();
    };
    function La() {
      gn || (window.removeEventListener("pointermove", vn, !0), window.removeEventListener("pointerup", ta, !0), window.removeEventListener("pointercancel", ta, !0), g.removeEventListener("lostpointercapture", La), clearInterval(Nt), ut && Le !== ne && (Le = ne, Ll()), Xr = ki(), gn = !0, Rn(6), setTimeout(Kt, 800));
    }
    window.addEventListener("pointermove", vn, !0), window.addEventListener("pointerup", ta, !0), window.addEventListener("pointercancel", ta, !0), g.addEventListener("lostpointercapture", La), mn = requestAnimationFrame(rt), Jr();
  }
  function Yo() {
    var g, T, N, j;
    const t = Ke[yt], r = (g = o("warmupList")) == null ? void 0 : g.closest("section"), s = (T = o("cooldownList")) == null ? void 0 : T.closest("section"), u = (j = (N = o("strengthList")) == null ? void 0 : N.closest("section")) == null ? void 0 : j.querySelector(".sectionTitle");
    t != null && t.customSequence ? (r && (r.hidden = !t.includeWarmup), s && (s.hidden = !t.includeCooldown), u && (u.textContent = "Move sequence")) : (r && (r.hidden = !!(t != null && t.warmupOff)), s && (s.hidden = !1), u && (u.textContent = "Kettlebell work")), xo(Tt, "warmupList"), xo(Je, "strengthList"), xo(_n, "cooldownList");
  }
  function va() {
    if (!on) return;
    const { item: t, arr: r } = on;
    on = null;
    const s = r.indexOf(t);
    s >= 0 && r.splice(s, 1), Rt === t && (Rt = null);
  }
  function da(t) {
    return t.id === "warmupList" ? { arr: Tt, kind: "warmup", group: "Warm-up" } : t.id === "cooldownList" ? { arr: _n, kind: "cooldown", group: "Cooldown" } : { arr: Je, kind: "work", group: "" };
  }
  function Jn(t, r) {
    const s = da(r), u = Date.now().toString(36);
    return t === "video" ? { id: "video-" + u, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : t === "rest" ? { id: "rest-" + u, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(P.value) } : { id: "movement-" + u, name: "", group: s.group, kind: s.kind, hidden: !1, useGlobalTiming: !0, duration: Number(C.value) };
  }
  const Ni = "cubic-bezier(.34,1.46,.64,1)";
  function ko(t, r) {
    if (Dn() || !t) {
      r();
      return;
    }
    const s = (T) => {
      var N;
      return ((N = T.dataset) == null ? void 0 : N.id) || T;
    }, u = () => [...t.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], g = new Map(u().map((T) => [s(T), T.getBoundingClientRect().top]));
    r(), u().forEach((T) => {
      const N = g.get(s(T));
      if (N === void 0) return;
      const j = N - T.getBoundingClientRect().top;
      Math.abs(j) < 0.5 || T.animate([{ transform: "translateY(" + j + "px)" }, { transform: "none" }], { duration: 440, easing: Ni });
    });
  }
  function Zo(t, r) {
    if (!t || Dn()) return;
    const s = t.offsetHeight, u = Math.max(0, s - (r || 0));
    t.animate([{ clipPath: "inset(0 0 " + u + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: Ni });
  }
  function ba(t, r, s, u) {
    const { arr: g } = da(r), T = Jn(t, r);
    g.splice(Math.max(0, Math.min(s, g.length)), 0, T), on = { item: T, arr: g }, Rt = T, ko(r.closest(".exerciseScroller,.createStepSlot") || r, () => kt());
    const N = r.querySelector(".moveRow.editing");
    return Zo(N, u), io(t === "rest"), N;
  }
  function y(t) {
    for (let r = t; r && r.nodeType === 1; r = r.parentElement) {
      const s = getComputedStyle(r).overflowY;
      if (/(auto|scroll)/.test(s) && r.scrollHeight > r.clientHeight) return r;
    }
    return null;
  }
  const S = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function L(t, r) {
    const s = document.createElement("div");
    return s.className = "addGhost" + (t === "movement" ? "" : " rest"), s.innerHTML = '<span class="addGhostGrip">' + Vn + '</span><span class="addGhostText"><strong>' + We(r[0]) + "</strong><small>" + We(r[1]) + "</small></span>", o("workoutModal").appendChild(s), s;
  }
  function O(t) {
    t.classList.add("leaving"), setTimeout(() => t.remove(), 180);
  }
  function Z(t, r, s, u) {
    (Rt || on) && (va(), Rt = null, kt());
    const g = t.getBoundingClientRect(), T = L(r, S[r]);
    T.setAttribute("aria-hidden", "true"), T.style.width = g.width + "px", T.style.height = g.height + "px", T.style.transform = "translate(" + g.left + "px," + g.top + "px)", t.classList.add("lifting");
    const N = y(t);
    return X({
      ghost: T,
      origin: g,
      sx: s,
      sy: u,
      scroller: N,
      column: t.closest(".exerciseScroller,.createFlow") || N,
      home: () => t.getBoundingClientRect(),
      onDrop: (j, le, pe) => {
        O(T), t.classList.remove("lifting"), ba(r, j, le, pe);
      },
      onReturn: () => {
        O(T), t.classList.remove("lifting");
      }
    });
  }
  function X({ ghost: t, origin: r, sx: s, sy: u, scroller: g, column: T, home: N, onDrop: j, onReturn: le, rowLook: pe = !1 }) {
    var Jr;
    const ne = !Dn(), Q = ((Jr = a.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : Jr.offsetHeight) || 80, De = s - r.left, Qe = u - r.top, qe = 44;
    let _e = s, Me = u, gt = r.left, bt = r.top, ze = 0, wt = 0, Et = !ne, st = null, ot = null, pn = -1, An = 0, Ut = null;
    const xi = () => ["warmupList", "strengthList", "cooldownList"].map((rt) => o(rt)).filter((rt) => rt && rt.getClientRects().length && !rt.closest("[hidden]")), Le = (rt) => {
      if (rt === st) return;
      st = rt, t.classList.toggle("overList", !!rt || pe);
      const Nt = rt ? rt.getBoundingClientRect().width : r.width;
      t.style.width = Nt + "px", t.style.height = (rt ? Q : r.height) + "px";
    }, ut = (rt) => {
      rt.classList.add("leaving"), rt.style.height = "0px", rt.style.marginTop = "-8px", setTimeout(() => rt.remove(), ne ? 320 : 0);
    }, mn = (rt, Nt, Kt) => {
      if (ot && ot.parentNode === rt && pn === Kt || (ot && (ut(ot), ot = null, pn = -1), !rt)) return;
      const vn = document.createElement("div");
      vn.className = "dropSlot", rt.insertBefore(vn, Nt), ot = vn, pn = Kt, vn.getBoundingClientRect(), vn.style.height = Q + "px", vn.style.marginTop = "0px";
    }, gn = () => {
      let rt = null, Nt = 1 / 0;
      for (const La of xi()) {
        const pt = La.getBoundingClientRect();
        if (_e < pt.left - 48 || _e > pt.right + 48) continue;
        const Mt = pt.top - 28, Ht = pt.bottom + 28, na = Me < Mt ? Mt - Me : Me > Ht ? Me - Ht : 0;
        na < Nt && (Nt = na, rt = La);
      }
      const Kt = T == null ? void 0 : T.getBoundingClientRect(), ta = Kt && _e >= Kt.left && _e <= Kt.right && Me >= Kt.top && Me <= Kt.bottom || Nt === 0 ? rt : null;
      if (ta) {
        const La = [...ta.children].filter((Mt) => Mt.classList.contains("moveRow"));
        let pt = La.findIndex((Mt) => {
          const Ht = Mt.getBoundingClientRect();
          return Me < Ht.top + Ht.height / 2;
        });
        pt < 0 && (pt = La.length), mn(ta, La[pt] || null, pt);
      } else mn(null);
      Le(ta);
    }, Cl = () => {
      if (Ut) return Ut.aim();
      if (st) {
        const rt = st.getBoundingClientRect();
        let Nt = Me - Q / 2;
        return ot && (Nt = Nt * 0.6 + ot.getBoundingClientRect().top * 0.4), { x: rt.left, y: Nt };
      }
      return { x: _e - De, y: Me - Qe };
    }, Xr = (rt, Nt, Kt, vn) => {
      t.style.transform = "translate(" + gt + "px," + bt + "px) rotate(" + rt + "deg) rotate(" + Nt + "rad) scale(" + Kt + "," + vn + ") rotate(" + -Nt + "rad)";
    }, Tl = () => {
      if (An = requestAnimationFrame(Tl), !Et) {
        const pt = _e - s, Mt = Me - u, Ht = Math.min(Math.hypot(pt, Mt) / qe, 1);
        gt = r.left + pt * 0.35, bt = r.top + Mt * 0.35, Xr(0, Math.atan2(Mt, pt), 1 + 0.155 * Ht, 1 - 0.1 * Ht);
        return;
      }
      const rt = Cl();
      if (!ne) {
        gt = rt.x, bt = rt.y, Xr(0, 0, 1, 1), Ut && (cancelAnimationFrame(An), Ut.done());
        return;
      }
      const Nt = Ut ? Ut.k : 0.17, Kt = Ut ? Ut.d : 0.7;
      ze = (ze + (rt.x - gt) * Nt) * Kt, wt = (wt + (rt.y - bt) * Nt) * Kt, gt += ze, bt += wt;
      const vn = Math.hypot(ze, wt), ta = Math.min(vn / 48, 1), La = st || Ut ? 0 : Math.max(-5, Math.min(5, ze * 0.32));
      Xr(La, Math.atan2(wt, ze), 1 + 0.1 * ta, 1 - 0.063 * ta), Ut && vn < 0.15 && Math.hypot(rt.x - gt, rt.y - bt) < 0.6 && (cancelAnimationFrame(An), Ut.done());
    }, Ll = setInterval(() => {
      if (!g || Ut) return;
      const rt = g.getBoundingClientRect(), Nt = 64, Kt = Me < rt.top + Nt ? -(rt.top + Nt - Me) / 4 : Me > rt.bottom - Nt ? (Me - (rt.bottom - Nt)) / 4 : 0;
      Kt && (g.scrollTop += Math.max(-18, Math.min(18, Kt)), gn());
    }, 30);
    An = requestAnimationFrame(Tl);
    let Fs = !1;
    const ki = (rt, Nt) => {
      if (Fs) return;
      Fs = !0, cancelAnimationFrame(An);
      const Kt = ot ? ot.offsetHeight : Q;
      !rt && ot && (ot.remove(), ot = null), rt ? j(rt, Nt, Kt) : le();
    };
    return {
      move(rt, Nt) {
        _e = rt, Me = Nt, !Et && Math.hypot(_e - s, Me - u) > qe && (Et = !0, ze = (_e - s) * 0.085, wt = (Me - u) * 0.085), Et && gn();
      },
      drop(rt) {
        clearInterval(Ll);
        const Nt = st, Kt = pn;
        if (!rt && Nt && ot) {
          const vn = ot;
          Ut = { k: 0.24, d: 0.62, aim: () => {
            const ta = vn.getBoundingClientRect();
            return { x: ta.left, y: ta.top };
          }, done: () => ki(Nt, Kt) }, setTimeout(() => ki(Nt, Kt), 650), ne || (cancelAnimationFrame(An), ki(Nt, Kt));
          return;
        }
        mn(null), Le(null), Ut = { k: 0.2, d: 0.66, aim: () => {
          const vn = N();
          return { x: vn.left, y: vn.top };
        }, done: () => ki(null) }, setTimeout(() => ki(null), 650), ne || (cancelAnimationFrame(An), ki(null));
      }
    };
  }
  function de(t, r) {
    let s = !1;
    t.addEventListener("click", (u) => {
      if (s) {
        s = !1, u.preventDefault();
        return;
      }
      if (ge()) {
        Be(r);
        return;
      }
      const g = o("strengthList"), T = ba(r, g, da(g).arr.length, 0);
      T == null || T.scrollIntoView({ block: "nearest", behavior: Dn() ? "auto" : "smooth" });
    }), t.addEventListener("pointerdown", (u) => {
      if (u.button !== void 0 && u.button !== 0) return;
      const g = u.pointerId, T = u.clientX, N = u.clientY;
      let j = null, le = !1;
      try {
        t.setPointerCapture(g);
      } catch {
      }
      const pe = (Me) => {
        if (Me.pointerId === g) {
          if (Me.pointerType === "mouse" && Me.buttons === 0) {
            _e(!1);
            return;
          }
          if (!j) {
            if (Math.hypot(Me.clientX - T, Me.clientY - N) < 6) return;
            j = Z(t, r, T, N);
          }
          j.move(Me.clientX, Me.clientY);
        }
      }, ne = (Me) => {
        Me.pointerId === g && _e(!1);
      }, Q = (Me) => {
        Me.pointerId === g && _e(!0);
      }, De = () => _e(!1), Qe = () => _e(!0), qe = (Me) => {
        Me.key === "Escape" && j && (Me.preventDefault(), Me.stopPropagation(), _e(!0));
      };
      function _e(Me) {
        if (!le && (le = !0, window.removeEventListener("pointermove", pe, !0), window.removeEventListener("pointerup", ne, !0), window.removeEventListener("pointercancel", Q, !0), window.removeEventListener("keydown", qe, !0), window.removeEventListener("blur", Qe), t.removeEventListener("lostpointercapture", De), j)) {
          const gt = j;
          j = null, s = !0, setTimeout(() => {
            s = !1;
          }, 0), gt.drop(Me);
        }
      }
      window.addEventListener("pointermove", pe, !0), window.addEventListener("pointerup", ne, !0), window.addEventListener("pointercancel", Q, !0), window.addEventListener("keydown", qe, !0), window.addEventListener("blur", Qe), t.addEventListener("lostpointercapture", De);
    });
  }
  const be = (Yd = window.matchMedia) == null ? void 0 : Yd.call(window, "(max-width: 620px)");
  function ge() {
    var t;
    return !!((t = window.matchMedia) != null && t.call(window, "(max-width: 620px)").matches);
  }
  const He = (t) => t.charAt(0).toUpperCase() + t.slice(1), Ce = (t) => t.kind === "rest" ? "rest" : t.kind === "video" ? "video" : "movement";
  let Re = null, Ne = null;
  function Fe(t, r, s, u) {
    Te(), o("sheetTitle").textContent = t;
    const g = o("sheetBody");
    g.innerHTML = "", g.appendChild(r), Re = s || null, o("sheet").setAttribute("aria-hidden", "false"), o("sheetScrim").classList.add("open"), o("sheet").classList.add("open"), setTimeout(() => {
      if (!o("sheet").classList.contains("open") || !g.contains(r)) return;
      const T = u ? g.querySelector("input[data-f=url],input[data-f=name]") : g.querySelector("button,input,select");
      T == null || T.focus({ preventScroll: !0 });
    }, Dn() ? 0 : 360);
  }
  function Te() {
    const t = o("sheet");
    if (!t.classList.contains("open")) return;
    t.classList.remove("open"), o("sheetScrim").classList.remove("open"), t.setAttribute("aria-hidden", "true"), t.contains(a.activeElement) && a.activeElement.blur();
    const r = Re;
    Re = null, r == null || r(), setTimeout(cn, 0);
  }
  o("sheetScrim").addEventListener("click", Te), o("sheet").addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), Te());
  });
  function Ge(t, r) {
    const s = Aa(t, r.indexOf(t), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        Te(), kt(), jt(He(Ce(t)) + " updated");
      },
      onCancel: Te,
      onHide() {
        t.hidden = !t.hidden, Te(), kt(), jt((t.hidden ? "Hidden: " : "Showing: ") + t.name);
      },
      onRemove() {
        Te();
        const u = r.indexOf(t);
        u < 0 || (r.splice(u, 1), kt(), jt("Removed " + t.name, { label: "Undo", run: () => {
          r.splice(Math.min(u, r.length), 0, t), kt();
        } }));
      }
    });
    Fe("Edit " + Ce(t), s, null, !1);
  }
  function tt() {
    const t = document.createElement("div");
    t.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([r, s, u, g]) => {
      const T = document.createElement("button");
      T.type = "button", T.className = "sheetChoice", T.innerHTML = '<span class="timeIcon" aria-hidden="true">' + En(s) + "</span><span><strong>" + u + "</strong><small>" + g + "</small></span>", T.addEventListener("click", () => Be(r)), t.appendChild(T);
    }), Fe("Add to the move", t, null, !1);
  }
  function Be(t) {
    Ne && ya();
    const r = Jn(t, o("strengthList")), s = Aa(r, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        Te(), ca(r, t);
      },
      onCancel: Te
    });
    Fe("New " + Ce(r), s, null, !0);
  }
  const et = o("workoutModal").querySelector(".modalStatic"), nt = { parent: et.parentNode, next: et.nextSibling };
  function Yt() {
    const t = document.createElement("div");
    t.className = "sheetSetup", t.appendChild(et);
    const r = document.createElement("button");
    r.type = "button", r.className = "primary sheetDone", r.textContent = "Done", r.addEventListener("click", Te), t.appendChild(r), Fe("Setup", t, () => {
      nt.parent.insertBefore(et, nt.next), Pe();
    }, !1);
  }
  function Pe() {
    var r, s;
    const t = o("setupSummaryName");
    t && (t.textContent = (((r = o("workoutNameInput")) == null ? void 0 : r.value) || "").trim() || ((s = Ke[yt]) == null ? void 0 : s.name) || "Move", o("setupSummaryMeta").textContent = vt.textContent);
  }
  o("setupSummary").addEventListener("click", Yt), o("addFab").addEventListener("click", tt);
  function Bt() {
    const t = o("strengthList");
    return y(t) || t.closest(".exerciseScroller");
  }
  function qt() {
    const t = o("strengthList").getBoundingClientRect(), r = (Bt() || o("strengthList")).getBoundingClientRect(), s = (Ne == null ? void 0 : Ne.ghost.offsetHeight) || 64;
    return { left: t.left, top: Math.max(r.top + 12, Math.min(r.bottom - s - 96, r.top + r.height * 0.55 - s / 2)), width: t.width, height: s };
  }
  function ca(t, r) {
    var j;
    const s = L(r, [t.name || S[r][0], "Drag into place"]);
    s.classList.add("overList", "hovering"), s.setAttribute("aria-label", (t.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const u = document.createElement("span");
    u.className = "addGhostActions", u.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + We(t.name) + '">✕</button>', s.appendChild(u), Ne = { item: t, type: r, ghost: s };
    const g = ((j = a.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : j.offsetHeight) || 64;
    s.style.width = o("strengthList").getBoundingClientRect().width + "px", s.style.height = g + "px";
    const T = qt(), N = Bn.querySelector(".modal").getBoundingClientRect().bottom;
    s.style.transform = "translate(" + T.left + "px," + N + "px)", s.getBoundingClientRect(), Dn() || (s.classList.add("rising"), setTimeout(() => s.classList.remove("rising"), 650)), s.style.transform = "translate(" + T.left + "px," + T.top + "px)", u.querySelector("[data-a=end]").addEventListener("click", ya), u.querySelector("[data-a=discard]").addEventListener("click", Tr), s.addEventListener("pointerdown", wa);
  }
  function wa(t) {
    if (!Ne || t.target.closest("button") || t.button !== void 0 && t.button !== 0) return;
    t.preventDefault();
    const { item: r, ghost: s } = Ne, u = t.pointerId;
    try {
      s.setPointerCapture(u);
    } catch {
    }
    s.classList.remove("hovering", "rising"), s.classList.add("held");
    const g = s.getBoundingClientRect(), T = Bt(), N = X({
      ghost: s,
      origin: { left: g.left, top: g.top, width: g.width, height: g.height },
      sx: t.clientX,
      sy: t.clientY,
      scroller: T,
      column: o("strengthList").closest(".exerciseScroller,.createFlow") || T,
      rowLook: !0,
      home: qt,
      onDrop: (_e, Me, gt) => {
        Ne = null, O(s), Bi(r, _e, Me, gt);
      },
      onReturn: () => {
        s.classList.remove("held"), s.classList.add("hovering");
      }
    });
    let j = !1;
    const le = (_e) => {
      if (_e.pointerId === u) {
        if (_e.pointerType === "mouse" && _e.buttons === 0) {
          qe(!1);
          return;
        }
        N.move(_e.clientX, _e.clientY);
      }
    }, pe = (_e) => {
      _e.pointerId === u && qe(!1);
    }, ne = (_e) => {
      _e.pointerId === u && qe(!0);
    }, Q = () => qe(!1), De = () => qe(!0), Qe = (_e) => {
      _e.key === "Escape" && (_e.preventDefault(), qe(!0));
    };
    function qe(_e) {
      j || (j = !0, window.removeEventListener("pointermove", le, !0), window.removeEventListener("pointerup", pe, !0), window.removeEventListener("pointercancel", ne, !0), window.removeEventListener("keydown", Qe, !0), window.removeEventListener("blur", De), s.removeEventListener("lostpointercapture", Q), N.drop(_e));
    }
    window.addEventListener("pointermove", le, !0), window.addEventListener("pointerup", pe, !0), window.addEventListener("pointercancel", ne, !0), window.addEventListener("keydown", Qe, !0), window.addEventListener("blur", De), s.addEventListener("lostpointercapture", Q);
  }
  function Bi(t, r, s, u) {
    const g = da(r);
    t.kind !== "rest" && t.kind !== "video" && (t.kind = g.kind, g.group && (!t.group || t.group === "Movement") && (t.group = g.group)), g.arr.splice(Math.max(0, Math.min(s, g.arr.length)), 0, t), ko(r.closest(".exerciseScroller,.createStepSlot") || r, () => kt()), Zo(r.querySelector('.moveRow[data-id="' + t.id + '"]'), u), jt(He(Ce(t)) + " added");
  }
  function ya() {
    var u;
    if (!Ne) return;
    const { item: t, ghost: r } = Ne;
    Ne = null, O(r);
    const s = o("strengthList");
    Bi(t, s, da(s).arr.length, 0), (u = s.querySelector('.moveRow[data-id="' + t.id + '"]')) == null || u.scrollIntoView({ block: "nearest", behavior: Dn() ? "auto" : "smooth" });
  }
  function Tr() {
    if (!Ne) return;
    const t = Ne.ghost;
    Ne = null, O(t), jt("Discarded");
  }
  function mt() {
    Ne && (Ne.ghost.remove(), Ne = null);
  }
  window.addEventListener("resize", () => {
    if (Ne != null && Ne.ghost.classList.contains("hovering")) {
      const t = qt();
      Ne.ghost.style.width = t.width + "px", Ne.ghost.style.transform = "translate(" + t.left + "px," + t.top + "px)";
    }
  }), (Zd = be == null ? void 0 : be.addEventListener) == null || Zd.call(be, "change", () => {
    Te(), Ne && !ge() && ya(), Yo();
  });
  {
    const t = o("workoutModal").querySelector(".modal");
    t.addEventListener("scroll", () => {
      (t.scrollTop || t.scrollLeft) && (t.scrollTop = 0, t.scrollLeft = 0);
    });
  }
  function cn() {
    const t = o("workoutModal"), r = window.visualViewport;
    if (!t.classList.contains("open") || !ge()) {
      Qn();
      return;
    }
    const s = r ? r.offsetTop : 0, u = r ? r.offsetLeft : 0, g = r ? r.width : window.innerWidth, T = r ? r.height : window.innerHeight;
    Object.assign(t.style, { right: "auto", bottom: "auto", width: g + "px", height: T + "px", top: s + "px", left: u + "px" });
    const N = t.getBoundingClientRect();
    Math.abs(N.top - s) > 0.5 && (t.style.top = 2 * s - N.top + "px"), Math.abs(N.left - u) > 0.5 && (t.style.left = 2 * u - N.left + "px");
  }
  function Qn() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((t) => o("workoutModal").style.removeProperty(t));
  }
  (Kd = window.visualViewport) == null || Kd.addEventListener("resize", cn), ($d = window.visualViewport) == null || $d.addEventListener("scroll", cn), window.addEventListener("resize", cn), window.addEventListener("scroll", cn, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(cn, 250));
  function Ua() {
    Je.length > 0;
    const t = o("addMovementBtn"), r = o("addRestBtn");
    t && (t.innerHTML = Vn + "<span>Add movement</span>"), r && (r.innerHTML = Vn + "<span>Add rest</span>");
    const s = o("addVideoBtn");
    s && (s.innerHTML = Vn + "<span>Add video</span>");
  }
  function _a() {
    const t = o("useGlobalTiming").checked, r = o("addMovementDuration"), s = o("addMovementUnit");
    r.disabled = t, s.disabled = t, r.parentElement.style.opacity = t ? ".38" : "1", o("globalTimingValue").textContent = "Use global timing · " + zt(C.value);
    const u = o("useGlobalRestTiming").checked, g = o("addRestDuration"), T = o("addRestUnit");
    g.disabled = u, T.disabled = u, g.parentElement.style.opacity = u ? ".38" : "1", o("globalRestTimingValue").textContent = "Use global timing · " + zt(P.value);
  }
  let Pi = "movement";
  function Ko(t) {
    Pi = t;
    const r = o("movementFields"), s = o("restFields");
    r.hidden = t !== "movement", s.hidden = t !== "rest", o("movementCreatorHeading").textContent = "Add movement", o("movementCreator").setAttribute("aria-label", "Create movement"), _a();
  }
  function xn() {
    Ke[yt];
    const t = xe ? !0 : o("useGlobalTiming").checked, r = t ? Number(C.value) : la(
      o("addMovementDuration").value,
      o("addMovementUnit").value
    ), s = xe ? !0 : o("useGlobalRestTiming").checked, u = s ? Number(P.value) : la(
      o("addRestDuration").value,
      o("addRestUnit").value
    );
    if (Pi === "rest") {
      const g = o("addRestTitle").value.trim() || "Rest", T = o("addRestGroup").value.trim() || "Rest";
      Je.push({
        id: "rest-" + Date.now(),
        name: g,
        group: T,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: s,
        duration: Math.max(5, u || Number(P.value))
      }), kt(), o("movementCreator").hidden = !0, o("addRestTitle").value = "Rest", o("addRestGroup").value = "Rest", jt("Rest added"), xe && (B("movements"), oe());
    } else {
      const g = o("addMovementInput").value.trim();
      if (!g) return;
      const T = o("addMovementGroup").value.trim() || "Movement";
      Je.push({
        id: "movement-" + Date.now(),
        name: g,
        group: T,
        kind: "work",
        hidden: !1,
        useGlobalTiming: t,
        duration: Math.max(5, r || Number(C.value))
      }), o("addMovementInput").value = "", o("addMovementGroup").value = "", kt(), o("movementCreator").hidden = !0, jt("Movement added"), xe && (B("movements"), oe());
    }
    Ua();
  }
  let ss = null;
  function jt(t, r) {
    const s = o("toast");
    s.innerHTML = "";
    const u = document.createElement("span");
    if (u.textContent = t, s.appendChild(u), r) {
      const g = document.createElement("button");
      g.type = "button", g.className = "toastAction", g.textContent = r.label, g.addEventListener("click", () => {
        r.run(), s.classList.remove("show", "withAction"), clearTimeout(ss);
      }), s.appendChild(g);
    }
    s.classList.toggle("withAction", !!r), s.classList.add("show"), clearTimeout(ss), ss = setTimeout(() => s.classList.remove("show", "withAction"), r ? 5e3 : 2200);
  }
  const Gs = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], Us = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function Ys(t) {
    return Math.max(0, Math.min(5, Math.floor(Number(t) / 100 * 6)));
  }
  function $o(t, r) {
    return Gs[Ys(r)];
  }
  function Ul(t) {
    return Us[Ys(t)];
  }
  function Pt(t) {
    return t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
  }
  function Ya() {
    return { morning: ht().morningTime || "08:00", evening: ht().eveningTime || "19:00" };
  }
  function Xo(t) {
    const [r, s] = String(t).split(":").map(Number);
    return (r || 0) * 60 + (s || 0);
  }
  function Ii(t) {
    const r = Ya();
    return t.getHours() * 60 + t.getMinutes() >= Xo(r.evening) ? "evening" : "morning";
  }
  function Nn(t, r) {
    return dt.checkins.find((s) => s.date === t && s.slot === r);
  }
  function Lr(t) {
    return !!(t && t.mood != null && t.energy != null);
  }
  function Hi() {
    const t = /* @__PURE__ */ new Date(), r = Pt(t), s = Ii(t), u = Ya(), g = t.getHours() * 60 + t.getMinutes();
    return s === "morning" && g < Xo(u.morning) || Lr(Nn(r, s)) ? null : s;
  }
  const Za = o("checkinModal"), xa = o("checkinTab"), Yl = o("checkinBadge"), ro = { mood: { input: o("moodInput"), fill: o("moodFill") }, energy: { input: o("energyLevelInput"), fill: o("energyLevelFill") } };
  function Ar(t) {
    const { input: r, fill: s } = ro[t];
    s.style.width = r.value + "%", r.setAttribute("aria-valuetext", $o(t, r.value));
  }
  Object.keys(ro).forEach((t) => ro[t].input.addEventListener("input", () => Ar(t)));
  let ka = null;
  function Zs() {
    const t = Ya(), r = /* @__PURE__ */ new Date(), s = r.getHours() * 60 + r.getMinutes();
    return s < Xo(t.morning) ? "Next check-in at " + t.morning : s < Xo(t.evening) ? "Next check-in at " + t.evening : "Next check-in tomorrow at " + t.morning;
  }
  function Zl() {
    const t = Ya(), r = /* @__PURE__ */ new Date(), s = r.getHours() * 60 + r.getMinutes(), u = (g, T) => {
      const [N, j] = g.split(":").map(Number);
      return new Date(r.getFullYear(), r.getMonth(), r.getDate() + (T ? 1 : 0), N, j);
    };
    return s < Xo(t.morning) ? { date: u(t.morning), time: t.morning } : s < Xo(t.evening) ? { date: u(t.evening), time: t.evening } : { date: u(t.morning, !0), time: t.morning };
  }
  let ls = null, Fi = null;
  function Ks() {
    if (Hi()) {
      _r(), Ma();
      return;
    }
    const t = Zl(), r = Math.max(0, Math.round((t.date - Date.now()) / 1e3)), s = Math.floor(r / 3600), u = Math.floor(r % 3600 / 60), g = r % 60;
    o("peekCountdown").textContent = s + ":" + String(u).padStart(2, "0") + ":" + String(g).padStart(2, "0"), o("peekAt").textContent = "Available at " + t.time;
  }
  function $s() {
    Ks(), xa.classList.add("peek"), clearInterval(Fi), Fi = setInterval(Ks, 1e3), clearTimeout(ls), ls = setTimeout(_r, 6e3);
  }
  function _r() {
    xa.classList.remove("peek"), clearInterval(Fi), clearTimeout(ls);
  }
  function ds() {
    const t = Hi();
    if (!t) {
      xa.classList.contains("peek") ? _r() : $s();
      return;
    }
    ka = { date: Pt(/* @__PURE__ */ new Date()), slot: t };
    const s = Nn(ka.date, t), u = dt.checkins.find((g) => Lr(g));
    Object.keys(ro).forEach((g) => {
      ro[g].input.value = (s == null ? void 0 : s[g]) ?? (u == null ? void 0 : u[g]) ?? 50, Ar(g);
    }), o("checkinTitle").textContent = t === "morning" ? "Morning check-in" : "Evening check-in", Za.classList.add("open"), Za.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => ro.mood.input.focus());
  }
  function Oi() {
    Za.classList.remove("open"), Za.setAttribute("aria-hidden", "true"), ka && (Wi = ka.date + "-" + ka.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", Wi);
    } catch {
    }
    ka = null, Ma();
  }
  function Xs() {
    if (!ka) return;
    if (Lr(Nn(ka.date, ka.slot))) {
      Oi();
      return;
    }
    const { date: t, slot: r } = ka;
    let s = Nn(t, r);
    s || (s = { date: t, slot: r }, dt.checkins.unshift(s), dt.checkins = dt.checkins.slice(0, 2e3)), s.mood = Number(ro.mood.input.value), s.energy = Number(ro.energy.input.value), s.scale = 100, s.at = (/* @__PURE__ */ new Date()).toISOString(), Cn(), l.fire("checkin", { slot: r, mood: s.mood, energy: s.energy, mood_label: $o("mood", s.mood), energy_label: $o("energy", s.energy) }), jt((r === "morning" ? "Morning" : "Evening") + " check-in saved"), Oi(), Jo(), Qo(), Ro(), Ta();
  }
  let Wi = "";
  try {
    Wi = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function Ma() {
    const t = Hi();
    Yl.hidden = !t, xa.hidden = !t, t || _r(), xa.classList.toggle("due", !!t), xa.setAttribute("aria-label", t ? (t === "morning" ? "Morning" : "Evening") + " check-in is due" : Zs()), xa.title = t ? "Check in now" : Zs();
  }
  function qi() {
    Ma();
    const t = Hi();
    !t || Za.classList.contains("open") || ht().checkinAutoOpen !== !1 && (o("app").classList.contains("house") || !Ie.home.classList.contains("active") || Bn.classList.contains("open") || Wi !== Pt(/* @__PURE__ */ new Date()) + "-" + t && ds());
  }
  xa.addEventListener("click", ds), o("checkinLater").addEventListener("click", Oi), o("checkinSave").addEventListener("click", Xs), Za.addEventListener("click", (t) => {
    t.target === Za && Oi();
  }), Za.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), Oi());
  }), setInterval(qi, 3e4);
  function Jo() {
    const t = Pt(/* @__PURE__ */ new Date()), r = (s) => dt.checkins.find((u) => u.date === t && u[s] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([s, u]) => {
      const g = r(s);
      o(u).textContent = g ? $o(s, g[s]) : "—";
    });
  }
  function Qo() {
    const t = o("feelCard");
    if (!t) return;
    const r = /* @__PURE__ */ new Date(), s = new Date(r.getFullYear(), r.getMonth(), r.getDate() - (r.getDay() + 6) % 7), u = [...Array(7)].map((pe, ne) => {
      const Q = new Date(s.getFullYear(), s.getMonth(), s.getDate() + ne), De = Pt(Q), Qe = dt.checkins.filter((_e) => _e.date === De), qe = (_e) => {
        const Me = Qe.map((gt) => gt[_e]).filter((gt) => gt != null);
        return Me.length ? Me.reduce((gt, bt) => gt + bt, 0) / Me.length : null;
      };
      return { d: Q, key: De, mood: qe("mood"), energy: qe("energy"), count: Qe.filter(Lr).length, future: Q > r && De !== Pt(r) };
    }), g = (pe) => {
      const ne = u.map((Q) => Q[pe]).filter((Q) => Q != null);
      return ne.length ? ne.reduce((Q, De) => Q + De, 0) / ne.length : null;
    }, T = g("mood"), N = g("energy"), j = (pe, ne) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + pe + "</span><span>" + (ne == null ? "—" : We($o("", ne))) + '</span></div><div class="feelTrack"><span style="width:' + (ne == null ? 0 : Math.max(4, ne)) + "%;background:" + (ne == null ? "transparent" : Ul(ne)) + '"></span></div></div>', le = u.filter((pe) => pe.mood != null && pe.energy != null).sort((pe, ne) => ne.mood + ne.energy - (pe.mood + pe.energy))[0];
    t.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (T == null ? "No check-ins yet" : We($o("", (T + N) / 2))) + '</div><div class="weekCopy">' + (T == null ? "Your first check-in will appear here." : "on average this week" + (le ? " · best day " + We(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(le.d)) : "")) + '</div></div></div><div class="feelDays">' + u.map(
      (pe) => '<div class="weekChip feelDay' + (pe.future ? " future" : "") + (pe.key === Pt(r) ? " today" : "") + '"><div class="weekChipTop"><strong>' + We(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(pe.d)) + "</strong>" + (pe.count >= 2 ? '<span class="weekTick">' + En("check") + "</span>" : '<span class="feelDots">' + "●".repeat(pe.count) + "</span>") + "</div>" + j("Mood", pe.mood) + j("Energy", pe.energy) + "</div>"
    ).join("") + "</div>";
  }
  const ei = o("upcomingCountSetting");
  ei.addEventListener("change", () => {
    qa = ei.value === "all" ? "all" : Number(ei.value), il();
  });
  const ji = o("tempoRevealBtn"), cs = o("tempoExperiment"), Ea = o("tempoQuad"), ti = o("tempoDot"), Kl = o("tempoEstimate"), zi = o("tempoReadout");
  let Mo = { x: 0.5, y: 0.5 }, Vi = !1, Er = { total: 20, work: 45, rest: 15 };
  function so(t, r, s, u) {
    const g = Math.max(r, Math.min(s, t));
    return Math.round((g - r) / u) * u + r;
  }
  function Js(t, r) {
    const s = (t - 0.5) * 2, u = (r - 0.5) * 2, g = so(
      Er.total + s * 5 + u * 8,
      Number(_.min),
      Number(_.max),
      Number(_.step)
    ), T = so(
      Er.work + s * 10 + u * 8,
      Number(C.min),
      Number(C.max),
      Number(C.step)
    ), N = so(
      Er.rest + s * 6 + u * 6,
      Number(P.min),
      Number(P.max),
      Number(P.step)
    );
    return _.value = g, C.value = T, P.value = N, q.textContent = T + " sec", se.textContent = N + " sec", zn(), { total: g, work: T, rest: N };
  }
  function Dr(t, r) {
    const s = t < 0.34 ? "Low" : t > 0.66 ? "Hard" : "Medium", u = r < 0.34 ? "Fast" : r > 0.66 ? "Slow" : "Balanced", g = Js(t, r);
    zi.textContent = s + " + " + u, Kl.textContent = g.total + " min", Ea.setAttribute("aria-valuetext", s + " and " + u + ", estimated " + g.total + " minutes");
  }
  function Rr(t) {
    const r = Ea.getBoundingClientRect(), s = Math.max(0, Math.min(1, (t.clientX - r.left) / r.width)), u = Math.max(0, Math.min(1, (t.clientY - r.top) / r.height));
    Mo = { x: s, y: u }, ti.style.left = s * 100 + "%", ti.style.top = u * 100 + "%", Dr(s, u);
  }
  ji.addEventListener("click", () => {
    const t = cs.hidden;
    cs.hidden = !t, ji.setAttribute("aria-expanded", t ? "true" : "false"), ji.textContent = t ? "Now close this" : "Don’t try this!", t && (Er = {
      total: Number(_.value),
      work: Number(C.value),
      rest: Number(P.value)
    }, Mo = { x: 0.5, y: 0.5 }, ti.style.left = "50%", ti.style.top = "50%", Dr(Mo.x, Mo.y));
  }), a.querySelectorAll("[data-feedback-rating]").forEach((t) => t.addEventListener("click", () => {
    Number(t.dataset.feedbackRating), a.querySelectorAll("[data-feedback-rating]").forEach((r) => r.classList.toggle("selected", r === t));
  }));
  const Gi = o("testingFeedbackForm"), us = o("testingFeedbackThanks"), $l = o("testingFeedbackAgain");
  Gi.addEventListener("submit", (t) => {
    t.preventDefault(), Gi.hidden = !0, us.hidden = !1, jt("Feedback captured for prototype");
  }), $l.addEventListener("click", (t) => {
    t.preventDefault(), Gi.reset(), a.querySelectorAll("[data-feedback-rating]").forEach((r) => r.classList.remove("selected")), us.hidden = !0, Gi.hidden = !1;
  }), Ea.addEventListener("pointerdown", (t) => {
    var r;
    Vi = !0, Rr(t);
    try {
      (r = Ea.setPointerCapture) == null || r.call(Ea, t.pointerId);
    } catch {
    }
  }), Ea.addEventListener("pointermove", (t) => {
    Vi && Rr(t);
  }), Ea.addEventListener("pointerup", (t) => {
    Vi && (Vi = !1, Rr(t), kt());
  }), Ea.addEventListener("pointercancel", () => Vi = !1), Ea.addEventListener("keydown", (t) => {
    let { x: r, y: s } = Mo, u = !0;
    t.key === "ArrowLeft" ? r -= 0.05 : t.key === "ArrowRight" ? r += 0.05 : t.key === "ArrowUp" ? s -= 0.05 : t.key === "ArrowDown" ? s += 0.05 : u = !1, u && (t.preventDefault(), r = Math.max(0, Math.min(1, r)), s = Math.max(0, Math.min(1, s)), Mo = { x: r, y: s }, ti.style.left = r * 100 + "%", ti.style.top = s * 100 + "%", Dr(r, s), kt());
  });
  const Bn = o("workoutModal");
  let Ui = null;
  function ni(t) {
    return t.map((r) => ({ ...r }));
  }
  function Nr() {
    const t = Ke[yt];
    return {
      key: yt,
      profile: t ? JSON.parse(JSON.stringify(t)) : null,
      warmup: ni(Tt),
      strength: ni(Je),
      cooldown: ni(_n),
      total: Number(_.value),
      work: Number(C.value),
      rest: Number(P.value),
      rounds: Number(lt.value) || 1
    };
  }
  function ps(t = !1) {
    xe = !!t, Rt = null, on = null, Te(), mt(), Ui = Nr(), o("moveEditorTitle").textContent = xe ? "Create new move" : "Edit move", o("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", o("moveEditorSubtitle").hidden = !xe, o("warmupRow").hidden = xe, o("deleteMoveOpen").hidden = xe;
    const r = o("createMoveOptions");
    r.hidden = !xe;
    {
      const s = Ke[yt];
      o("includeWarmupPreset").checked = !!(s != null && s.includeWarmup), o("includeCooldownPreset").checked = !!(s != null && s.includeCooldown);
    }
    if (fs(), xe) {
      o("useGlobalTiming").checked = !0, o("useGlobalRestTiming").checked = !0;
      const s = Ke[yt];
      Go((s == null ? void 0 : s.preset) || "movement", !1);
    }
    o("movementCreator").hidden = !0, Ko("movement"), Ua(), _a(), cs.hidden = !0, ji.setAttribute("aria-expanded", "false"), ji.textContent = "Don’t try this!", Bn.classList.toggle("createMode", xe), Bn.querySelector(".modal").classList.toggle("createMode", xe), Bn.classList.add("open"), Bn.setAttribute("aria-hidden", "false"), cn(), xe && Ae();
  }
  function hs() {
    const t = Ke[yt];
    return t != null && t.customSequence ? !!t.includeWarmup : !(t != null && t.warmupOff);
  }
  function fs() {
    const t = hs(), r = o("warmupSwitch");
    r.classList.toggle("on", t), r.setAttribute("aria-checked", String(t));
  }
  o("warmupSwitch").addEventListener("click", () => {
    const t = Ke[yt];
    t && (t.customSequence ? (o("includeWarmupPreset").checked = !t.includeWarmup, Ei()) : (t.warmupOff = !t.warmupOff, kt()), fs());
  });
  function Br() {
    Te(), mt(), Qn(), on = null, Rt = null, Bn.classList.contains("createMode") && I(), Bn.classList.remove("createMode"), Bn.querySelector(".modal").classList.remove("createMode"), Bn.classList.remove("open"), Bn.setAttribute("aria-hidden", "true");
  }
  function Qs() {
    if (!Ui) return;
    const t = Ui;
    t.profile && (Ke[t.key] = JSON.parse(JSON.stringify(t.profile))), yt = t.key, Tt = ni(t.warmup), Je = ni(t.strength), _n = ni(t.cooldown), _.value = t.total, C.value = t.work, P.value = t.rest, lt.value = t.rounds || 1;
    const r = Ke[yt];
    if (r) {
      a.querySelectorAll(".workoutPanel[data-workout]").forEach((u) => u.classList.toggle("active", u.dataset.workout === yt));
      const s = a.querySelector(".workoutPanel.active");
      if (s) {
        const u = s.querySelector(".workoutName");
        u && (u.textContent = r.name);
        const g = s.querySelector(".panelCollapsedText");
        g && (g.textContent = r.name);
        const T = s.querySelector(".sourceTag");
        T && (T.textContent = r.source);
      }
      f.value = r.name;
    }
    kt();
  }
  o("cancelWorkoutEdit").addEventListener("click", () => {
    if (xe) {
      const t = yt;
      delete Ke[t], xe = !1, Wt = null, Ot(dt.order.find((r) => Ke[r]) || Object.keys(Ke)[0]);
    } else
      Qs();
    Br();
  }), o("saveWorkoutEdit").addEventListener("click", () => {
    Te(), Ne && ya();
    const t = Ke[yt], r = f.value.trim() || "New move";
    if (t && (t.name = r), va(), Rt = null, kt(), xe && t)
      Wa(yt, t), a.querySelectorAll(".workoutPanel[data-workout]").forEach((s) => s.classList.toggle("active", s.dataset.workout === yt)), xe = !1, Wt = null, dt.order.includes(yt) || dt.order.push(yt), jt("Move created");
    else {
      const s = a.querySelector(".workoutPanel.active");
      if (s) {
        const u = s.querySelector(".workoutName");
        u && (u.textContent = r);
        const g = s.querySelector(".panelCollapsedText");
        g && (g.textContent = r);
      }
      jt("Move saved");
    }
    Ui = null, Br(), Cn();
  }), Bn.addEventListener("click", (t) => {
    if (t.target === Bn) {
      if (xe) {
        const r = yt;
        delete Ke[r], xe = !1, Wt = null, Ot(dt.order.find((s) => Ke[s]) || Object.keys(Ke)[0]);
      } else
        Qs();
      Br();
    }
  }), de(o("addMovementBtn"), "movement"), de(o("addRestBtn"), "rest"), de(o("addVideoBtn"), "video"), o("closeMovementCreator").addEventListener("click", () => {
    o("movementCreator").hidden = !0;
  }), o("useGlobalTiming").addEventListener("change", _a), o("useGlobalRestTiming").addEventListener("change", _a), a.querySelectorAll(".createPresetBtn").forEach((t) => t.addEventListener("click", () => {
    Go(t.dataset.movePreset, !0), kt();
  })), o("includeWarmupPreset").addEventListener("change", Ei), o("includeCooldownPreset").addEventListener("change", Ei), o("includeWarmupPreset").addEventListener("change", oe), o("includeCooldownPreset").addEventListener("change", oe), f.addEventListener("input", oe), f.addEventListener("input", Pe), o("confirmAddMovement").addEventListener("click", xn), o("confirmAddRest").addEventListener("click", xn), o("addMovementInput").addEventListener("keydown", (t) => {
    t.key === "Enter" && xn();
  });
  const ai = o("countdown"), ms = o("countNum"), ua = o("countdownPixelCanvas");
  let Vt = null, gs = "appear";
  class Xl {
    constructor(r, s, u, g, T, N, j) {
      this.width = r.width, this.height = r.height, this.ctx = s, this.x = u, this.y = g, this.color = T, this.speed = (Math.random() * 0.8 + 0.1) * N, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = j, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let oi = [], lo = 1, el = 1;
  function So() {
    const t = parseFloat(getComputedStyle(o("app")).zoom);
    return Number.isFinite(t) && t > 0 ? t : 1;
  }
  function Jl() {
    var pe;
    if (!ua) return;
    const t = So(), r = Math.max(1, window.innerWidth / t), s = Math.max(1, window.innerHeight / t);
    lo = r, el = s;
    const u = Math.min(window.devicePixelRatio || 1, 2);
    ua.width = Math.floor(r * u), ua.height = Math.floor(s * u), ua.style.width = r + "px", ua.style.height = s + "px";
    const g = ua.getContext("2d");
    g.setTransform(u, 0, 0, u, 0, 0);
    const T = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], N = 12, j = (pe = window.matchMedia) == null ? void 0 : pe.call(window, "(prefers-reduced-motion: reduce)").matches, le = j ? 0 : 0.055;
    oi = [];
    for (let ne = 0; ne < r; ne += N)
      for (let Q = 0; Q < s; Q += N) {
        const De = ne - r / 2, Qe = Q - s / 2, qe = Math.sqrt(De * De + Qe * Qe), _e = j ? 0 : Math.random() * 75 + qe * 0.05, Me = new Xl({ width: r, height: s }, g, ne, Q, T[Math.floor(Math.random() * T.length)], le, _e);
        Me.maxSizeInteger = 4, Me.maxSize = Math.random() * 3.2 + 0.8, Me.sizeStep = 0.35 + Math.random() * 0.45, oi.push(Me);
      }
  }
  function tl(t) {
    cancelAnimationFrame(Vt), gs = t;
    const r = ua == null ? void 0 : ua.getContext("2d");
    if (!r) return;
    function s() {
      r.clearRect(0, 0, lo, el);
      let u = !0;
      oi.forEach((g) => {
        g[gs](), g.isIdle || (u = !1);
      }), gs === "disappear" && u || (Vt = requestAnimationFrame(s));
    }
    Vt = requestAnimationFrame(s);
  }
  function Pr() {
    cancelAnimationFrame(Vt), Jl(), tl("appear"), setTimeout(() => tl("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    ai.classList.contains("active") && Pr();
  });
  const Yi = o("pixelTrailCanvas"), ii = Yi.getContext("2d");
  let Ka = !0, co = 0.7, Pn = 600, Zi = [], ri = null, rn = { x: 0, y: 0, ready: !1 };
  function Lt() {
    const t = c.getBoundingClientRect(), r = So(), s = Math.min(window.devicePixelRatio || 1, 2), u = Math.max(1, t.width / r), g = Math.max(1, t.height / r);
    Yi.width = Math.max(1, Math.floor(u * s)), Yi.height = Math.max(1, Math.floor(g * s)), Yi.style.width = u + "px", Yi.style.height = g + "px", ii.setTransform(s, 0, 0, s, 0, 0);
  }
  function Da(t, r) {
    if (!Ka) return;
    const s = performance.now();
    rn.ready || (rn = { x: t, y: r, ready: !0 });
    const u = 7;
    for (let g = 1; g <= u; g++) {
      const T = g / u;
      Zi.push({
        x: rn.x + (t - rn.x) * T,
        y: rn.y + (r - rn.y) * T,
        born: s - (u - g) * 10
      });
    }
    rn = { x: t, y: r, ready: !0 };
  }
  function si(t) {
    if (ri = null, !v) return;
    if (!Ie.workout.classList.contains("active")) {
      ri = requestAnimationFrame(si);
      return;
    }
    const r = c.getBoundingClientRect(), s = So();
    ii.clearRect(0, 0, r.width / s, r.height / s), Ka && (Zi = Zi.filter((g) => t - g.born < Pn), ii.fillStyle = o("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", Zi.forEach((g) => {
      const T = (t - g.born) / Pn, N = (1 - T) * co, j = Math.round(g.x / 14) * 14, le = Math.round(g.y / 14) * 14;
      ii.globalAlpha = Math.max(0, N);
      const pe = 2 + 5 * (1 - T) * co;
      ii.fillRect(j - pe / 2, le - pe / 2, pe, pe);
    }), ii.globalAlpha = 1), ri = requestAnimationFrame(si);
  }
  c.addEventListener("pointermove", (t) => {
    const r = c.getBoundingClientRect(), s = So();
    Da((t.clientX - r.left) / s, (t.clientY - r.top) / s);
  }), c.addEventListener("pointerleave", () => rn.ready = !1), new ResizeObserver(Lt).observe(c), Lt(), ri = requestAnimationFrame(si);
  const Gn = o("movementRippleCanvas"), $a = Gn.getContext("2d");
  let Un = !0, Sa = null, Co = performance.now();
  function Gt() {
    const t = Gn.parentElement.getBoundingClientRect(), r = So(), s = Math.max(1, t.width / r), u = Math.max(1, t.height / r), g = Math.min(window.devicePixelRatio || 1, 2);
    Gn.width = Math.max(1, Math.floor(s * g)), Gn.height = Math.max(1, Math.floor(u * g)), Gn.style.width = s + "px", Gn.style.height = u + "px", $a.setTransform(g, 0, 0, g, 0, 0);
  }
  function Ki() {
    var t;
    return dn || ((t = Ue[it]) == null ? void 0 : t.kind) === "rest";
  }
  function $i() {
    const t = Ue[it];
    return Ki() ? 2200 : t ? t.kind === "warmup" || t.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function Xi(t) {
    if (Sa = null, !v) return;
    if (!Ie.workout.classList.contains("active")) {
      Sa = requestAnimationFrame(Xi);
      return;
    }
    const r = Gn.parentElement.getBoundingClientRect(), s = So(), u = Math.max(1, r.width / s), g = Math.max(1, r.height / s);
    if ($a.clearRect(0, 0, u, g), Un) {
      const T = $i(), N = (t - Co) % T / T, j = 15, le = Math.max(8, Math.round(j * g / Math.max(1, u))), pe = u / (j + 1), ne = g / (le + 1), Q = u * 0.5, De = g * 0.52, Qe = Math.hypot(Q, De), _e = o("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let Me = 1; Me <= le; Me++)
        for (let gt = 1; gt <= j; gt++) {
          const bt = gt * pe, ze = Me * ne, wt = Math.hypot(bt - Q, ze - De) / Qe, Et = Ki(), st = Et ? Math.exp(-Math.pow((wt - (N * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, ot = Math.exp(-Math.pow((wt - N * 1.25) * 7, 2)), pn = Et ? st : ot, An = Et ? 0.5 + 0.5 * Math.sin(N * Math.PI * 2 - wt * 3) ** 2 : 0.35 + 0.65 * Math.sin(N * Math.PI * 2 - wt * 5) ** 2, Ut = Et ? 1.4 + pn * 4.2 * An : 1.2 + pn * 5 * An;
          $a.beginPath(), $a.arc(bt, ze, Ut, 0, Math.PI * 2), $a.fillStyle = `rgba(${_e},${Et ? 0.08 + pn * 0.48 : 0.05 + pn * 0.55})`, $a.fill();
        }
    }
    Sa = requestAnimationFrame(Xi);
  }
  new ResizeObserver(Gt).observe(Gn.parentElement), Gt(), Sa = requestAnimationFrame(Xi);
  const li = o("exerciseTitle"), Ra = o("exerciseMeta"), vs = o("stepLabel"), Ji = o("digits"), nl = o("fill"), To = o("progress"), uo = o("pause"), Yn = o("nextName"), Ir = o("nextMeta"), al = o("nextIcon"), Qi = o("skipNextSession");
  let In = null;
  function Hn(t) {
    for (let r = Math.max(0, t); r < Ue.length; r++)
      if (!Ue[r].sessionHidden) return r;
    return -1;
  }
  function Ql() {
    const t = Ue[it];
    if (!t) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (dn) {
      const u = Hn(it + 1), g = u >= 0 ? Ue[u] : null;
      return g ? { name: g.name, meta: bs(g), icon: Ja(g) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (t.rest > 0) return { name: "Rest", meta: t.rest + " sec · " + (t.roundBreakAfter ? "round " + (t.round + 1) + " next" : "recovery"), icon: "pause" };
    const r = Hn(it + 1), s = r >= 0 ? Ue[r] : null;
    return s ? { name: s.name, meta: bs(s), icon: Ja(s) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function Xa() {
    if (!Ue[it]) return Ue.length;
    const r = Hn(it + 1);
    return r < 0 ? Ue.length : r + 1;
  }
  function Ja(t) {
    return t.kind === "video" ? "play" : "clock";
  }
  function bs(t) {
    return t.kind === "video" ? "YouTube · " + oo(t.duration) : t.group + " · " + t.duration + " sec";
  }
  function er() {
    return Ue.length && Ue[Ue.length - 1].round || 1;
  }
  function Hr(t) {
    const r = Ue[t];
    if (!r) return "";
    const s = er();
    if (s <= 1) return "Step " + (t + 1) + " of " + Ue.length;
    if (r.roundBreak) return "Round " + r.round + " of " + s + " · Rest";
    const u = Ue.filter((g) => g.round === r.round && !g.roundBreak).length;
    return "Round " + r.round + " of " + s + " · Step " + (r.roundIndex + 1) + " of " + u;
  }
  function Fr() {
    return To.querySelector('[data-step="' + it + '"]');
  }
  function ol() {
    Ue[it] && Number(To.dataset.round) !== (Ue[it].round || 1) && or(), [...To.children].forEach((t) => {
      const r = Number(t.dataset.step);
      t.classList.toggle("done", r < it), t.classList.toggle("active", r === it), t.classList.toggle("rewindable", r <= it), t.disabled = r > it, r === it && t.style.setProperty("--segment-progress", "0%");
    }), Ue[it] && (vs.textContent = Hr(it), ln());
  }
  function ed(t) {
    const r = Ue.indexOf(t);
    r < 0 || r <= it || (t.sessionHidden = !t.sessionHidden, Qa(), jt((t.sessionHidden ? "Hidden " : "Included ") + t.name + " for this session"));
  }
  function il() {
    const t = o("upcomingList");
    if (!t) return;
    t.innerHTML = "";
    const r = Xa(), s = Ue.slice(r);
    (qa === "all" ? s : s.slice(0, Math.max(1, Number(qa) || 1))).forEach((g) => {
      const T = document.createElement("section");
      T.className = "upcomingCard" + (g.sessionHidden ? " sessionHidden" : "") + (Gr(g) ? " noMeta" : ""), T.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + En(Ja(g)) + '</div><div><div class="upcomingName">' + We(g.name) + '</div><div class="upcomingMeta">' + We(bs(g)) + (er() > 1 ? " · round " + g.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (g.sessionHidden ? "Include this session" : "Skip this session") + "</button>", T.querySelector(".skipSessionBtn").addEventListener("click", () => ed(g)), t.appendChild(T);
    });
  }
  function Qa() {
    var r;
    const t = Ql();
    Yn.textContent = t.name, Ir.textContent = t.meta, al.innerHTML = En(t.icon);
    {
      const s = dn ? Ue[Hn(it + 1)] : ((r = Ue[it]) == null ? void 0 : r.rest) > 0 ? { kind: "rest" } : Ue[Hn(it + 1)];
      a.querySelector(".nextCard").classList.toggle("noMeta", !!(s && Gr(s)));
    }
    if (In = null, dn) {
      const s = Hn(it + 1);
      s >= 0 && (In = Ue[s]);
    } else {
      const s = Ue[it];
      if (s && s.rest > 0)
        In = null;
      else {
        const u = Hn(it + 1);
        u >= 0 && (In = Ue[u]);
      }
    }
    Qi && (Qi.hidden = !In, Qi.textContent = In != null && In.sessionHidden ? "Include this session" : "Skip this session"), il();
  }
  Qi.addEventListener("click", () => {
    In && (In.sessionHidden = !In.sessionHidden, jt((In.sessionHidden ? "Hidden " : "Included ") + In.name + " for this session"), Qa());
  });
  let sn = null, ws = null;
  function tr(t, r = {}) {
    const s = Ke[yt];
    l.fire(t, { move: (s == null ? void 0 : s.name) || "", move_id: yt, ...r });
  }
  function Zn() {
    const t = Ke[yt];
    sn = { key: yt, name: (t == null ? void 0 : t.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(ws), ws = setInterval(() => {
      sn && !jn && sn.active++;
    }, 1e3), tr("started", { steps: Ue.length });
  }
  function nr(t) {
    if (clearInterval(ws), !sn) return;
    const r = sn;
    sn = null, tr(t ? "completed" : "ended", { seconds: r.active }), !(r.active < 30) && (dt.history.unshift({ id: "h-" + r.startedAt, move_id: r.key, name: r.name, start: new Date(r.startedAt).toISOString(), seconds: r.active, completed: t }), dt.history = dt.history.slice(0, 1e3), Cn(), Ro(), Ta());
  }
  function ar() {
    M("workout"), rl();
    const t = Hn(0);
    t >= 0 && Ue[t].kind === "video" && Ao(Ue[t]);
  }
  function po() {
    sr(), nr(!1), clearInterval(tn), clearInterval(Vo), dn = !1, eo(!1), o("app").classList.remove("resting"), ai.classList.remove("active"), M("home");
  }
  function rl() {
    ai.classList.add("active");
    let t = 5;
    ms.textContent = t, requestAnimationFrame(Pr), clearInterval(Vo), Vo = setInterval(() => {
      t--, t > 0 ? (ms.textContent = t, Pr()) : (clearInterval(Vo), ms.textContent = "GO", Pr(), setTimeout(() => {
        ai.classList.remove("active"), cancelAnimationFrame(Vt), Or();
      }, 650));
    }, 1e3);
  }
  function or() {
    var r;
    To.innerHTML = "";
    const t = ((r = Ue[Math.max(0, it)] || Ue[0]) == null ? void 0 : r.round) || 1;
    To.dataset.round = t, Ue.forEach((s, u) => {
      if ((s.round || 1) !== t) return;
      const g = document.createElement("button");
      g.dataset.step = u, g.type = "button", g.className = "progressSegment", g.setAttribute("aria-label", "Go to " + s.name), g.addEventListener("click", () => {
        u <= it && sl(u);
      }), To.appendChild(g);
    });
  }
  function eo(t) {
    t = !!t;
    const r = jn !== t;
    if (jn = t, uo.textContent = t ? "Resume" : "Pause", o("app").classList.toggle("paused", t), $t && It)
      try {
        t ? It.pauseVideo() : It.playVideo();
      } catch {
      }
    r && sn && tr(t ? "paused" : "resumed");
  }
  function sl(t) {
    t < 0 || t >= Ue.length || t > it || (clearInterval(tn), dn = !1, o("app").classList.remove("resting"), it = t, eo(!1), ui(), tn = setInterval(Ba, 1e3));
  }
  function Or() {
    if (it = Hn(0), eo(!1), or(), it < 0) {
      li.textContent = "No activities", Ra.textContent = "Open Edit and enable or add a movement", Ra.hidden = !1;
      return;
    }
    Zn(), ui(), clearInterval(tn), tn = setInterval(Ba, 1e3);
  }
  const ir = o("videoStage"), ho = o("videoSound"), ys = 0, Lo = 1, xs = 2;
  let rr = 0, di = null, ci = null, It = null, _t = null, ea = 0, Ca = !1, $t = null, kn = null;
  function Na() {
    var t;
    return (t = window.YT) != null && t.Player ? Promise.resolve(window.YT) : di || (di = new Promise((r, s) => {
      const u = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          u == null || u();
        } catch {
        }
      };
      const g = setInterval(() => {
        var N;
        (N = window.YT) != null && N.Player && (clearInterval(g), clearTimeout(T), r(window.YT));
      }, 100), T = setTimeout(() => {
        clearInterval(g), di = null, s(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const N = document.createElement("script");
        N.src = "https://www.youtube.com/iframe_api", N.async = !0, N.onerror = () => {
          clearInterval(g), clearTimeout(T), di = null, s(new Error("YouTube did not load"));
        }, document.head.appendChild(N);
      }
    }), di);
  }
  function Wr() {
    return ci || (ci = Na().then((t) => new Promise((r) => {
      const s = document.createElement("div");
      o("videoFrame").appendChild(s), It = new t.Player(s, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => r(It), onStateChange: (u) => td(u.data), onError: (u) => dl(u.data) }
      });
    })), ci.catch(() => {
      ci = null;
    }), ci);
  }
  function Ao(t) {
    !(t != null && t.videoId) || t.videoError || Wr().then((r) => {
      $t || _t === t.videoId || (_t = t.videoId, ea = Number(t.start) || 0, Ca = !1, r.mute(), r.loadVideoById({ videoId: t.videoId, startSeconds: ea }));
    }).catch(() => {
    });
  }
  function ll() {
    const t = Hn(it + 1);
    t >= 0 && Ue[t].kind === "video" && Ao(Ue[t]);
  }
  function td(t) {
    if (!$t) {
      t === Lo && !Ca && (Ca = !0, It.pauseVideo(), It.seekTo(ea, !0));
      return;
    }
    ir.classList.toggle("playing", t === Lo), Ue[it] === $t && performance.now() > rr && (t === Lo && jn ? eo(!1) : t === xs && !jn && eo(!0)), t === Lo && Ms($t.videoId, It.getDuration()) && Cn(), t === ys && lr();
  }
  function dl(t) {
    const r = $t;
    if (!r) {
      _t = null;
      return;
    }
    t === 101 || t === 150 ? (cl(r.videoId), jt("That video can’t play outside YouTube, so it was skipped")) : jt("The video couldn’t play, so it was skipped"), lr();
  }
  function Mn(t) {
    if (o("app").classList.add("videoStep"), ho.hidden = !0, $t = t, clearTimeout(kn), !t.videoId) {
      jt("This video step has no link yet, so it was skipped"), setTimeout(() => lr(), 0);
      return;
    }
    Wr().then((r) => {
      if ($t !== t) return;
      rr = performance.now() + 1500;
      const s = Number(t.start) || 0;
      _t !== t.videoId ? (_t = t.videoId, ea = s, r.loadVideoById({ videoId: t.videoId, startSeconds: s })) : (r.seekTo(s, !0), r.playVideo()), r.unMute(), jn && r.pauseVideo(), kn = setTimeout(() => {
        $t !== t || jn || (r.getPlayerState() !== Lo ? (r.mute(), r.playVideo(), ho.hidden = !1) : r.isMuted() && (ho.hidden = !1));
      }, 1600);
    }).catch(() => {
      $t === t && (jt("YouTube didn’t load, so the video was skipped"), lr());
    });
  }
  function _o() {
    if (!o("app").classList.contains("videoStep")) return;
    const t = a.querySelector(".workGrid"), r = a.querySelector(".sessionControlRow"), s = t.getBoundingClientRect().top, u = (r == null ? void 0 : r.offsetHeight) || 42, g = window.innerHeight - s - 16 - u - 84;
    t.style.setProperty("--theater-h", Math.max(240, Math.round(g)) + "px");
  }
  window.addEventListener("resize", _o);
  function sr() {
    clearTimeout(kn);
    const t = $t;
    if ($t = null, o("app").classList.remove("videoStep"), ir.classList.remove("playing"), ho.hidden = !0, t && It) {
      try {
        It.pauseVideo();
      } catch {
      }
      _t = null;
    }
  }
  function lr() {
    const t = $t;
    !t || Ue[it] !== t || (sr(), clearInterval(tn), Eo(), tn = setInterval(Ba, 1e3));
  }
  ho.addEventListener("click", () => {
    It && (It.unMute(), It.playVideo()), ho.hidden = !0;
  });
  function nd(t) {
    var u;
    const r = Number(t.start) || 0;
    if (t.useVideoLength === !1) return r + (Number(t.duration) || 300);
    const s = It && $t === t && Number((u = It.getDuration) == null ? void 0 : u.call(It)) || 0;
    return Number(t.end) || s || Number(t.videoDuration) || r + (Number(t.duration) || 300);
  }
  function ks(t, r) {
    const s = Ke[yt];
    [Tt, Je, _n, s == null ? void 0 : s.warmup, s == null ? void 0 : s.strength, s == null ? void 0 : s.cooldown, s == null ? void 0 : s.sequence].forEach((u) => (Array.isArray(u) ? u : []).forEach((g) => {
      g && g.kind === "video" && g.videoId === t && r(g);
    }));
  }
  function Ms(t, r) {
    r = Math.round(Number(r) || 0);
    let s = !1;
    return t && r > 0 && ks(t, (u) => {
      u.videoDuration !== r && (u.videoDuration = r, s = !0);
    }), s;
  }
  function cl(t) {
    ks(t, (r) => {
      r.videoError = "embed";
    }), Cn();
  }
  function ad(t) {
    const r = t.videoId;
    if (!r) return;
    const s = () => {
      Bn.classList.contains("open") ? Rt || kt() : (kt(), Cn());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + r)).then((u) => u.ok ? u.json() : Promise.reject(u.status)).then((u) => {
      t.videoId === r && (t.videoTitle = u.title || "", t.autoName && u.title && (t.name = u.title), s());
    }).catch((u) => {
      t.videoId === r && u === 401 && (t.videoError = "embed", s());
    }), od(r).then((u) => {
      Ms(r, u) && s();
    }).catch((u) => {
      u === "embed" && t.videoId === r && (t.videoError = "embed", s());
    });
  }
  function od(t) {
    return Na().then((r) => new Promise((s, u) => {
      const g = document.createElement("div");
      g.className = "videoProbe", g.setAttribute("aria-hidden", "true");
      const T = document.createElement("div");
      g.appendChild(T), o("app").appendChild(g);
      let N = null, j = !1;
      const le = (Q, De) => {
        j || (j = !0, clearTimeout(pe), setTimeout(() => {
          try {
            N == null || N.destroy();
          } catch {
          }
          g.remove();
        }, 0), De ? u(De) : s(Q));
      }, pe = setTimeout(() => le(0), 2e4), ne = () => {
        var De;
        const Q = Number((De = N == null ? void 0 : N.getDuration) == null ? void 0 : De.call(N)) || 0;
        return Q > 0 && le(Q), Q > 0;
      };
      N = new r.Player(T, {
        width: 320,
        height: 180,
        videoId: t,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            ne() || (N.mute(), N.playVideo());
          },
          onStateChange: () => ne(),
          onError: (Q) => le(0, Q.data === 101 || Q.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function ui() {
    dn = !1;
    const t = Ue[it];
    o("app").classList.toggle("resting", t.kind === "rest"), t.kind === "video" ? Mn(t) : sr(), en = t.duration, wo = t.duration, li.textContent = t.name, Ra.textContent = t.group, Ra.hidden = !0, vs.textContent = Hr(it), sn && tr("step", { name: t.name, group: t.group, kind: t.kind, step: it + 1, of: Ue.length, round: t.round || 1, rounds: er(), duration: t.duration }), Qa(), ol(), ll(), t.kind === "video" && setTimeout(_o, 0);
  }
  function ln() {
    var g;
    const t = ((g = Ue[it]) == null ? void 0 : g.kind) === "video" && !dn, r = t && en >= 60;
    Ji.textContent = r ? oo(en) : en, Ji.classList.toggle("long", r), t && (o("videoClock").textContent = oo(en) + " left");
    const s = en / wo * 100;
    nl.style.width = s + "%";
    const u = Fr();
    if (u && !dn) {
      const T = 100 - s;
      u.style.setProperty("--segment-progress", T + "%");
    }
  }
  function Ba() {
    var r, s;
    if (jn) return;
    const t = Ue[it];
    if ((t == null ? void 0 : t.kind) === "video" && !dn && $t === t) {
      const u = Number((r = It == null ? void 0 : It.getCurrentTime) == null ? void 0 : r.call(It)) || 0, g = Number(t.start) || 0, T = nd(t);
      wo = Math.max(1, T - g), (u > g || ((s = It == null ? void 0 : It.getPlayerState) == null ? void 0 : s.call(It)) === Lo) && (en = Math.max(0, Math.ceil(T - u))), ln(), u > g && u >= T - 0.25 && lr();
      return;
    }
    en--, ln(), en <= 0 && (t.rest > 0 ? Ss(t.rest) : Eo());
  }
  function Ss(t) {
    var s;
    dn = !0, o("app").classList.add("resting");
    const r = Fr();
    r && r.style.setProperty("--segment-progress", "100%"), clearInterval(tn), en = t, wo = t, sn && tr("rest", { duration: t }), li.textContent = "Rest", Ra.textContent = (s = Ue[it]) != null && s.roundBreakAfter ? "Round " + (Ue[it].round + 1) + " next" : "Recovery", Qa(), ln(), tn = setInterval(() => {
      jn || (en--, ln(), en <= 0 && (clearInterval(tn), Eo(), tn = setInterval(Ba, 1e3)));
    }, 1e3);
  }
  function Eo() {
    dn = !1;
    const t = Hn(it + 1);
    if (t >= 0)
      it = t, ui();
    else {
      clearInterval(tn), sr(), eo(!1), o("app").classList.remove("resting"), li.textContent = "Complete", Ra.textContent = "Move finished", Ra.hidden = !1, Ji.textContent = "✓";
      {
        const r = er();
        vs.textContent = r > 1 ? r + " rounds done" : Ue.filter((s) => !s.roundBreak).length + " steps done";
      }
      nr(!0);
      {
        const r = As(7).reduce((s, u) => s + u.minutes, 0);
        Ra.textContent = "Move finished · " + r + " min in the last 7 days";
      }
      nl.style.width = "100%", Qa();
    }
  }
  o("skipExercise").addEventListener("click", () => {
    Cs(), eo(!1);
  });
  function Cs() {
    clearInterval(tn);
    const t = Ue[it];
    if (dn) {
      dn = !1, o("app").classList.remove("resting");
      const s = Hn(it + 1);
      s >= 0 ? (it = s, ui(), tn = setInterval(Ba, 1e3)) : Eo();
      return;
    }
    if (t && t.rest > 0) {
      Ss(t.rest);
      return;
    }
    const r = Hn(it + 1);
    r >= 0 ? (it = r, ui(), tn = setInterval(Ba, 1e3)) : Eo();
  }
  o("restartSegment").addEventListener("click", () => {
    if (clearInterval(tn), eo(!1), dn) {
      const t = Ue[it];
      en = t.rest, wo = t.rest, li.textContent = "Rest", Ra.textContent = "Recovery", o("app").classList.add("resting"), Qa(), ln();
    } else
      ui();
    tn = setInterval(dn ? () => {
      jn || (en--, ln(), en <= 0 && (clearInterval(tn), Eo(), tn = setInterval(Ba, 1e3)));
    } : Ba, 1e3);
  });
  function dr(t, r, s, u) {
    let g = 0, T = null, N = !1;
    function j() {
      T && cancelAnimationFrame(T), T = null, g = 0, N = !1, r.style.width = "0%", t.classList.remove("holding");
    }
    function le(Q) {
      if (!N) return;
      g || (g = Q);
      const De = Math.min(1, (Q - g) / s);
      if (r.style.width = De * 100 + "%", De >= 1) {
        N = !1, T && cancelAnimationFrame(T), T = null, r.style.width = "100%", setTimeout(() => r.style.width = "0%", 90), u();
        return;
      }
      T = requestAnimationFrame(le);
    }
    function pe(Q) {
      var De;
      if (!(Q && Q.button !== void 0 && Q.button !== 0)) {
        Q == null || Q.preventDefault(), j(), N = !0, t.classList.add("holding");
        try {
          (De = t.setPointerCapture) == null || De.call(t, Q.pointerId);
        } catch {
        }
        T = requestAnimationFrame(le);
      }
    }
    function ne() {
      N && j();
    }
    t.addEventListener("pointerdown", pe), t.addEventListener("pointerup", ne), t.addEventListener("pointercancel", ne), t.addEventListener("lostpointercapture", ne), t.addEventListener("keydown", (Q) => {
      (Q.key === " " || Q.key === "Enter") && !Q.repeat && pe(Q);
    }), t.addEventListener("keyup", (Q) => {
      (Q.key === " " || Q.key === "Enter") && ne();
    });
  }
  const id = o("endWorkout");
  dr(id, o("holdEndFill"), 1500, po);
  const pi = o("deleteMoveConfirm");
  o("deleteMoveOpen").addEventListener("click", () => {
    pi.classList.add("open"), pi.setAttribute("aria-hidden", "false");
  }), o("deleteMoveCancel").addEventListener("click", () => {
    pi.classList.remove("open"), pi.setAttribute("aria-hidden", "true");
  });
  function ul() {
    const t = yt, r = a.querySelector('.workoutPanel[data-workout="' + t + '"]');
    r && r.remove(), delete Ke[t], dt.order = dt.order.filter((u) => u !== t);
    let s = a.querySelector(".workoutPanel[data-workout]");
    if (!s) {
      const u = "custom-" + Date.now();
      Ke[u] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, dt.order.push(u), s = Wa(u, Ke[u]);
    }
    pi.classList.remove("open"), pi.setAttribute("aria-hidden", "true"), Ui = null, Br(), Ot(s.dataset.workout), Cn(), jt("Move deleted");
  }
  dr(o("deleteMoveYes"), o("deleteMoveFill"), 1500, ul);
  const qr = a.querySelector(".rubberTabs"), hi = o("rubberIndicator");
  function fi(t, r = !0) {
    if (!t || !qr || !hi) return;
    const s = qr.getBoundingClientRect(), u = t.getBoundingClientRect();
    hi.style.transition = r ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const g = So();
    hi.style.left = (u.left - s.left) / g + qr.scrollLeft + "px", hi.style.width = u.width / g + "px", r && (hi.style.transform = "scaleX(1.08)", setTimeout(() => hi.style.transform = "scaleX(1)", 180));
  }
  a.querySelectorAll(".tab").forEach((t) => t.addEventListener("click", () => {
    t.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), a.querySelectorAll(".tab").forEach((r) => r.classList.remove("active")), a.querySelectorAll(".settingsPane").forEach((r) => r.classList.remove("active")), t.classList.add("active"), o(t.dataset.pane).classList.add("active"), fi(t, !0);
  })), requestAnimationFrame(() => fi(a.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => fi(a.querySelector(".tab.active"), !1));
  const jr = o("pixelTrailToggle"), zr = o("rippleToggle"), Do = o("trailStrength"), Pa = o("trailLife");
  function pa(t, r) {
    ht()[t] = r, Cn();
  }
  const Vr = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function pl(t) {
    return t.kind === "rest" ? "rest" : t.kind === "video" ? "video" : "g:" + String(t.group || "").trim().toLowerCase();
  }
  function Gr(t) {
    var r;
    return !!((r = ht().hideMeta) != null && r[pl(t)]);
  }
  function cr() {
    const t = /* @__PURE__ */ new Map(), r = (s, u, g) => {
      if (!s) return;
      Array.isArray(s) && (s = { name: s[1], group: s[2], kind: "work" });
      const T = pl(s);
      let N = t.get(T);
      N || (N = { key: T, label: T === "rest" ? "Rest" : T === "video" ? "Video" : String(s.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, t.set(T, N)), N.kinds.add(T === "rest" ? "Rest" : T === "video" ? "Video" : u), N.moves.add(g), N.count++;
    };
    return Object.values(Ke).forEach((s) => {
      const u = s.name || "Move";
      (s.warmup || (s.customSequence ? [] : Xe)).forEach((g) => r(g, "Warm-up", u)), (s.customSequence ? s.sequence || [] : s.strength || []).forEach((g) => r(g, g.presetRole === "warmup" ? "Warm-up" : g.presetRole === "cooldown" ? "Cooldown" : "Movement", u)), (s.cooldown || (s.customSequence ? [] : yn)).forEach((g) => r(g, "Cooldown", u));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([s, u]) => {
      t.has(s) || t.set(s, { key: s, label: u, kinds: /* @__PURE__ */ new Set([u]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...t.values()].map((s) => ({ ...s, kind: s.kinds.has("Movement") ? "Movement" : [...s.kinds][0], moves: [...s.moves] })).sort((s, u) => Vr.indexOf(s.kind) - Vr.indexOf(u.kind) || s.label.localeCompare(u.label));
  }
  let Ur = "all";
  function Ia() {
    const t = o("metaSearch").value.trim().toLowerCase();
    return cr().filter((r) => (Ur === "all" || r.kind === Ur) && (!t || r.label.toLowerCase().includes(t) || r.moves.some((s) => s.toLowerCase().includes(t))));
  }
  function ur() {
    const t = o("metaTableBody");
    if (!t) return;
    const r = ht().hideMeta || {}, s = Ia();
    t.innerHTML = s.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', s.forEach((g) => {
      const T = !r[g.key], N = g.count ? (g.moves.length > 2 ? g.moves.slice(0, 2).join(", ") + " + " + (g.moves.length - 2) + " more" : g.moves.join(", ")) + " · " + g.count + " step" + (g.count === 1 ? "" : "s") : "Not used yet", j = document.createElement("tr");
      j.className = T ? "" : "off", j.innerHTML = '<td><div class="metaType">' + We(g.label) + '</div><div class="metaSub">' + We(g.kind + " · " + N) + '</div></td><td class="metaKindCol">' + We(g.kind) + '</td><td class="metaUsedCol">' + We(N) + '</td><td class="metaSwitchCol"><button class="switch' + (T ? " on" : "") + '" type="button" role="switch" aria-checked="' + T + '" aria-label="Second line for ' + We(g.label) + ' on phones"></button></td>', j.querySelector(".switch").addEventListener("click", () => pr([g.key], T)), t.appendChild(j);
    });
    const u = s.filter((g) => r[g.key]).length;
    o("metaCount").textContent = s.length ? s.length + " type" + (s.length === 1 ? "" : "s") + (u ? " · " + u + " hidden on phones" : "") : "";
  }
  function pr(t, r) {
    const s = { ...ht().hideMeta || {} };
    t.forEach((u) => {
      r ? s[u] = !0 : delete s[u];
    }), pa("hideMeta", s), ur(), Yo(), Qa();
  }
  o("metaSearch").addEventListener("input", ur), o("metaKinds").querySelectorAll(".kindChip").forEach((t) => t.addEventListener("click", () => {
    Ur = t.dataset.kind, o("metaKinds").querySelectorAll(".kindChip").forEach((r) => r.classList.toggle("active", r === t)), ur();
  })), o("metaHideAll").addEventListener("click", () => pr(Ia().map((t) => t.key), !0)), o("metaShowAll").addEventListener("click", () => pr(Ia().map((t) => t.key), !1));
  const fo = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...ht().toggles || {} };
  function hl() {
    a.querySelectorAll("[data-toggle]").forEach((s) => s.classList.toggle("on", fo[s.dataset.toggle] !== !1)), a.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([s, u]) => {
      o(u).hidden = fo[s] === !1;
    });
    const t = ["steps", "mood", "energyLevel"].some((s) => fo[s] !== !1);
    a.querySelector(".activityCard").hidden = !t, o("weatherCard").hidden = !0;
    const r = a.querySelector("#homeView .grid");
    r.classList.toggle("noActivity", !t), r.classList.toggle("noWeather", !0);
  }
  a.querySelectorAll("[data-toggle]").forEach((t) => t.addEventListener("click", () => {
    fo[t.dataset.toggle] = fo[t.dataset.toggle] === !1, hl(), pa("toggles", { ...fo });
  })), hl();
  function Tn() {
    jr.classList.toggle("on", Ka), zr.classList.toggle("on", Un), Do.value = Math.round(co * 100), o("trailStrengthValue").textContent = Do.value + "%", Pa.value = Pn, o("trailLifeValue").textContent = Pa.value + " ms";
  }
  ht().trailEnabled !== void 0 && (Ka = ht().trailEnabled), ht().rippleEnabled !== void 0 && (Un = ht().rippleEnabled), ht().trailStrength !== void 0 && (co = ht().trailStrength), ht().trailMaxAge !== void 0 && (Pn = ht().trailMaxAge), Tn(), jr.addEventListener("click", () => {
    Ka = !Ka, jr.classList.toggle("on", Ka), Ka || (Zi = []), pa("trailEnabled", Ka);
  }), zr.addEventListener("click", () => {
    Un = !Un, zr.classList.toggle("on", Un), pa("rippleEnabled", Un);
  }), Do.addEventListener("input", () => {
    co = Number(Do.value) / 100, o("trailStrengthValue").textContent = Do.value + "%";
  }), Do.addEventListener("change", () => pa("trailStrength", co)), Pa.addEventListener("input", () => {
    Pn = Number(Pa.value), o("trailLifeValue").textContent = Pa.value + " ms";
  }), Pa.addEventListener("change", () => pa("trailMaxAge", Pn)), ei.addEventListener("change", () => pa("upcomingCount", qa));
  function fl(t) {
    a.querySelectorAll(".themeBtn").forEach((s) => s.classList.toggle("active", s.dataset.theme === t));
    const r = t === "light";
    o("app").classList.toggle("light", r), l.setLight(r), Ha(a);
  }
  fl(ht().theme || "dark"), a.querySelectorAll(".themeBtn").forEach((t) => t.addEventListener("click", () => {
    fl(t.dataset.theme), pa("theme", t.dataset.theme);
  }));
  const Fn = { steps: null, weather: null, ...ht().entities || {} };
  let un = null, Ts = {};
  function rd(t) {
    const r = Object.values(t).filter((j) => j.entity_id.startsWith("sensor.") || j.entity_id.startsWith("input_number.")), s = (j) => j.attributes.friendly_name || j.entity_id, u = r.filter((j) => /step/i.test(j.entity_id) || /step/i.test(s(j)) || ["steps", "step"].includes(String(j.attributes.unit_of_measurement || "").toLowerCase())), g = r.filter((j) => !u.includes(j)), T = (j, le) => s(j).localeCompare(s(le)), N = (j, le) => /health_steps/.test(le.entity_id) - /health_steps/.test(j.entity_id) || T(j, le);
    return { suggested: u.sort(N), rest: g.sort(T), label: s };
  }
  function ct(t) {
    const r = o("stepsEntity");
    if (!r || r.matches(":focus")) return;
    const { suggested: s, rest: u, label: g } = rd(t), T = (le) => '<option value="' + We(le.entity_id) + '">' + We(g(le)) + "</option>";
    r.innerHTML = '<option value="">Not connected</option>' + (s.length ? '<optgroup label="Suggested">' + s.map(T).join("") + "</optgroup>" : "") + (u.length ? '<optgroup label="All sensors">' + u.map(T).join("") + "</optgroup>" : ""), r.value = Fn.steps || "";
    const N = o("stepsStatus"), j = Fn.steps && t[Fn.steps];
    N.textContent = j ? "Connected · " + g(j) : N.dataset.empty;
  }
  o("stepsEntity").addEventListener("change", () => {
    Fn.steps = o("stepsEntity").value || null, pa("entities", { ...Fn }), Ts = {}, Ls(), un && (ct(un), Yr(un));
  });
  function ml(t, r = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: r }).format(t);
  }
  function mi() {
    const t = Fn.steps && (un == null ? void 0 : un[Fn.steps]), r = Number(t == null ? void 0 : t.state);
    return Number.isFinite(r) ? r : null;
  }
  function Yr(t) {
    var u;
    const r = Fn.steps, s = r ? Number((u = t[r]) == null ? void 0 : u.state) : NaN;
    o("stepsMeta").textContent = r ? Number.isFinite(s) ? ml(s) : "—" : "Set up in Settings";
  }
  let to = 0;
  async function Ls() {
    const t = Fn.steps;
    if (!t || !l.ws) return;
    to = Date.now();
    const r = /* @__PURE__ */ new Date(), s = new Date(r.getFullYear(), r.getMonth(), r.getDate() - 30);
    try {
      const u = await l.ws({ type: "recorder/statistics_during_period", start_time: s.toISOString(), end_time: r.toISOString(), statistic_ids: [t], period: "day", types: ["max"] }), g = (u == null ? void 0 : u[t]) || [], T = {};
      if (g.forEach((N) => {
        Number.isFinite(N.max) && (T[Pt(new Date(N.start))] = N.max);
      }), !Object.keys(T).length) {
        const N = await l.ws({ type: "history/history_during_period", start_time: s.toISOString(), end_time: r.toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((N == null ? void 0 : N[t]) || []).forEach((j) => {
          const le = Number(j.s ?? j.state), pe = j.lu ? j.lu * 1e3 : Date.parse(j.last_updated || j.last_changed);
          if (!Number.isFinite(le) || !pe) return;
          const ne = Pt(new Date(pe));
          T[ne] = Math.max(T[ne] || 0, le);
        });
      }
      Ts = T, Ta();
    } catch {
    }
  }
  function Ro() {
    Ta();
  }
  Ro(), setInterval(() => {
    Ro(), Qo(), Ma();
  }, 10 * 60 * 1e3);
  function As(t) {
    const r = {}, s = {};
    dt.history.forEach((N) => {
      const j = Pt(new Date(N.start));
      r[j] = (r[j] || 0) + (N.seconds || 0) / 60, s[j] = (s[j] || 0) + 1;
    });
    const u = /* @__PURE__ */ new Date(), g = Pt(u), T = [];
    for (let N = t - 1; N >= 0; N--) {
      const j = new Date(u.getFullYear(), u.getMonth(), u.getDate() - N), le = Pt(j), pe = dt.checkins.filter((Q) => Q.date === le), ne = (Q) => {
        const De = pe.map((Qe) => Qe[Q]).filter(Boolean);
        return De.length ? De.reduce((Qe, qe) => Qe + qe, 0) / De.length : null;
      };
      T.push({
        key: le,
        date: j,
        minutes: Math.round(r[le] || 0),
        moves: s[le] || 0,
        steps: le === g && mi() != null ? mi() : Ts[le] ?? null,
        mood: ne("mood"),
        energy: ne("energy")
      });
    }
    return T;
  }
  function _s(t) {
    let r = t.length - 1;
    t[r] && !t[r].minutes && r--;
    let s = 0;
    for (; r >= 0 && t[r].minutes > 0; )
      s++, r--;
    return s;
  }
  function Ta() {
    const t = o("insightCard");
    if (!t) return;
    const r = As(30), s = _s(r), u = r.reduce((pe, ne) => pe + ne.minutes, 0), g = /* @__PURE__ */ new Date(), T = Pt(g), N = Pt(new Date(g.getFullYear(), g.getMonth(), g.getDate() - (g.getDay() + 6) % 7)), j = r.filter((pe) => pe.key >= N && pe.key <= T).reduce((pe, ne) => pe + ne.minutes, 0), le = (pe, ne, Q) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + pe + '</div><div><div class="activityRowName">' + We(ne) + '</div><div class="activityRowMeta">' + We(Q) + "</div></div></div>";
    t.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + En("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + le(En("clock"), "This week", j + " min") + le(En("streak"), "Streak", s + " day" + (s === 1 ? "" : "s")) + le(En("calendar"), "30 days", u + " min") + "</div>";
  }
  const gi = {
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
  }, Es = (t) => t === "sunny" ? "clear" : t === "clear-night" ? "night" : t === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(t) ? "rain" : ["snowy", "snowy-rainy"].includes(t) ? "snow" : "cloudy", No = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, vi = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let Ds = 0;
  const Bo = (t, r) => '<path class="' + r + '" d="' + t + '"/>', Rs = (t, r) => ' style="animation-delay:-' + Math.round(t * 137 % r) + 'ms"', Kn = (t, r, s, u) => {
    const g = s * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (u < 1 ? ' opacity="' + u + '"' : "") + Rs(t, 2400) + ' d="M' + t + " " + (r - s) + "L" + (t + g) + " " + (r - g) + "L" + (t + s) + " " + r + "L" + (t + g) + " " + (r + g) + "L" + t + " " + (r + s) + "L" + (t - g) + " " + (r + g) + "L" + (t - s) + " " + r + "L" + (t - g) + " " + (r - g) + 'Z"/>';
  }, Ns = ([t, r, s], u) => '<path class="wxMoonPath" d="' + t + '" fill="url(#' + u + ')"/><defs><linearGradient id="' + u + '" x1="0" y1="' + r + '" x2="0" y2="' + s + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Zr = (t, r) => r ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + t + ')"/><defs><linearGradient id="' + t + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + t + ')"/><defs><linearGradient id="' + t + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Bs = (t) => (t ? ["29.35", "43.04", "56.74"].map((r, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" x="' + r + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + r + ' 60.65)"/></g>') : [19, 26, 33].map((r, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + r + ' 38)"/></g>')).join(""), gl = (t) => (t ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([r, s], u) => '<circle class="wxFlake" style="animation-delay:-' + u * 640 + 'ms" cx="' + r + '" cy="' + s + '" r="' + (t ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function vl(t, r, s, u) {
    return t === "clear" ? r ? Ns(s ? vi.l : vi.s, u) + (s ? Kn(70, 20, 5.83, 1) + Kn(78.33, 41.67, 3.75, 0.8) + Kn(60, 71.67, 3.33, 0.6) : Kn(42, 12, 3.5, 1) + Kn(47, 25, 2.25, 0.8) + Kn(36, 43, 2, 0.6)) : Zr(u, s) : t === "partly" ? (r ? Ns(s ? vi.lp : vi.sp, u) : s ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + Bo(s ? No.lp : No.sp, r ? "wxCloudLight" : "wxBright") + (r ? s ? Kn(73.33, 16.67, 4.17, 0.9) : Kn(44, 10, 2.5, 0.9) : "") : t === "cloudy" ? Bo(s ? No.lc : No.s, r ? "wxCloudLight" : "wxBright") + (r ? s ? Kn(15, 15, 3.75, 0.8) + Kn(76.67, 13.33, 2.92, 0.6) : Kn(9, 9, 2.25, 0.8) + Kn(46, 8, 1.75, 0.6) : "") : Bo(s ? No.lr : No.s, "wxCloudLight") + (t === "rain" ? Bs(s) : gl(s));
  }
  const sd = () => {
    var t;
    return ((t = un == null ? void 0 : un["sun.sun"]) == null ? void 0 : t.state) === "below_horizon";
  };
  let $n = ht().weatherStyle || "bitmap", bl = ht().weatherLayout === "strip" ? "strip" : "tiles", ld = ht().weatherMotion !== !1;
  const hr = () => ld && !Dn(), fr = /* @__PURE__ */ new Map(), mr = 700, wl = (t) => {
    const [r, s] = t.split("/");
    return { k: r === "fog" ? "cloudy" : r === "storm" ? "rain" : r, night: s === "night" };
  };
  function Kr(t, r, s, u = $n, g, T) {
    let N = Es(t);
    const j = N === "night" || (T != null ? !!T : !!s && sd());
    N === "night" && (N = "clear");
    const le = r ? 90 : 54, pe = Gl(t, j), ne = performance.now();
    let Q = g ? fr.get(g) : null;
    if (g && !Q ? fr.set(g, Q = { key: pe, t0: -1e9 }) : Q && Q.key !== pe && (Q.fromKey = Q.key, Q.from = Q.last || null, Q.key = pe, Q.t0 = ne), u !== "smooth") return '<span class="wxIcon pixels' + (r ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + pe + '"' + (g ? ' data-wx-slot="' + g + '"' : "") + ' data-wx-style="' + u + '" data-wx-size="' + le + '"></canvas></span>';
    let De = "";
    if (Q && ne - Q.t0 < mr && (hr() || Dn())) {
      const Qe = wl(Q.fromKey);
      De = '<span class="wxLayer wxOut ' + Qe.k + (Qe.night ? " night" : "") + '" style="animation-delay:' + Math.round(Q.t0 - ne) + 'ms"><svg viewBox="0 0 ' + le + " " + le + '">' + vl(Qe.k, Qe.night, r, "wxg" + ++Ds) + "</svg></span>";
    }
    return '<span class="wxIcon ' + N + (j ? " night" : "") + (r ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + le + " " + le + '">' + vl(N, j, r, "wxg" + ++Ds) + "</svg>" + De + "</span>";
  }
  function gr() {
    const t = o("app"), r = getComputedStyle(t), s = (j) => r.getPropertyValue(j).trim(), u = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([j, le]) => {
      s(le) && (u[j] = s(le));
    });
    const g = s("--color-text-primary") || "#f1f1f1", T = s("--color-bg-card") || "#222222", N = t.classList.contains("light");
    return { colors: u, ink: N ? g : T, paper: N ? T : g };
  }
  function Ha(t, r = performance.now()) {
    const s = t.querySelectorAll("canvas[data-wx]");
    if (!s.length) return;
    const u = gr(), g = hr(), T = Dn();
    s.forEach((N) => {
      var Q;
      const j = N.dataset.wx, le = N.dataset.wxSlot ? fr.get(N.dataset.wxSlot) : null;
      let pe = Bd(j, u.colors);
      if (le && le.key === j) {
        const De = (r - le.t0) / mr;
        De < 1 && (g || T) && (pe = Fu(le.from || Bd(le.fromKey, u.colors), pe, Math.max(0, De), u.colors, T)), le.last = pe;
      }
      const ne = Qc(pe, { size: Number(N.dataset.wxSize) || 54, px: 2, oneBit: N.dataset.wxStyle === "onebit", colors: u.colors, ink: u.ink, paper: u.paper, clock: r, idle: g });
      N.width !== ne.w && (N.width = ne.w), N.height !== ne.h && (N.height = ne.h), (Q = N.getContext("2d")) == null || Q.putImageData(new ImageData(ne.data, ne.w, ne.h), 0, 0);
    });
  }
  let bi = null, wi = -1;
  function yl(t) {
    if (bi = null, !v) return;
    const r = hr(), s = Math.floor(t / 100), u = [...fr.values()].some((le) => t - le.t0 < mr), g = [...vr.values()].some((le) => t - le.t0 < le.dur), T = Ie.home.classList.contains("active"), N = x.classList.contains("open"), j = r && $n === "smooth" && (N || T && bl === "strip");
    !document.hidden && (u || g || j || r && s !== wi) && (wi = s, T && (Ha(o("weatherCard"), t), p(o("weatherCard"), t)), N && (Ha(x, t), p(x, t))), (r || u || g) && (bi = requestAnimationFrame(yl));
  }
  function Po() {
    o("app").classList.toggle("wxMotion", hr()), !bi && v && (bi = requestAnimationFrame(yl));
  }
  let Ps = [];
  const nn = 36e5, Is = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function ha() {
    const t = /* @__PURE__ */ new Date(), r = (T, N) => new Date(t.getFullYear(), t.getMonth(), t.getDate() + T, N), s = [], u = [], g = [...Array(6)].map((T, N) => {
      const j = r(N, 6), le = r(N, 18), pe = r(N + 1, 6), ne = Ps.find((De) => Pt(new Date(De.datetime)) === Pt(j)), Q = (De, Qe, qe) => {
        const _e = s.filter((bt) => bt.t >= +De && bt.t < +Qe);
        if (_e.length) {
          const bt = {};
          return _e.forEach((ze) => {
            bt[ze.c] = (bt[ze.c] || 0) + (Is.has(ze.c) ? 2 : 1);
          }), Object.entries(bt).sort((ze, wt) => wt[1] - ze[1])[0][0];
        }
        const Me = u.find((bt) => {
          const ze = +new Date(bt.datetime);
          return ze >= +De - 3 * nn && ze < +Qe && (bt.is_daytime == null || !!bt.is_daytime == !qe);
        });
        if (Me) return Me.condition;
        const gt = (ne == null ? void 0 : ne.condition) || "cloudy";
        return qe && gt === "sunny" ? "clear-night" : gt;
      };
      return { start: +j, end: +pe, day: Q(j, le, !1), night: Q(le, pe, !0), hi: Number(ne == null ? void 0 : ne.temperature), lo: Number(ne == null ? void 0 : ne.templow) };
    });
    return { days: g, hours: s, start: g[0].start, end: g[5].end };
  }
  const yi = (t, r) => {
    const s = t.days.findIndex((g) => r < g.end);
    if (s < 0) return 1;
    const u = t.days[s];
    return Math.max(0, (s + (r - u.start) / (u.end - u.start)) / 6);
  }, xl = (t, r) => {
    const s = Math.max(0, Math.min(0.99999, r)) * 6, u = Math.floor(s), g = t.days[u];
    return g.start + (s - u) * (g.end - g.start);
  };
  function $r(t, r) {
    const s = Math.max(0, t.days.findIndex((le) => r < le.end)), u = t.days[s], g = (r - u.start) / (u.end - u.start) >= 0.5;
    let T = g ? u.night : u.day, N = NaN;
    const j = t.hours;
    if (j.length && r >= j[0].t - nn && r <= j[j.length - 1].t + nn) {
      let le = j.findIndex((Q) => Q.t > r);
      le < 0 && (le = j.length);
      const pe = j[Math.max(0, le - 1)], ne = j[Math.min(j.length - 1, le)];
      T = pe.c || T, N = ne.t > pe.t ? pe.temp + (ne.temp - pe.temp) * Math.max(0, Math.min(1, (r - pe.t) / (ne.t - pe.t))) : pe.temp;
    }
    if (!Number.isFinite(N)) {
      const le = [];
      if (t.days.forEach((pe) => {
        Number.isFinite(pe.lo) && le.push([pe.start - nn, pe.lo]), Number.isFinite(pe.hi) && le.push([pe.start + 9 * nn, pe.hi]);
      }), le.length) {
        N = r <= le[0][0] ? le[0][1] : le[le.length - 1][1];
        for (let pe = 1; pe < le.length; pe++) if (r <= le[pe][0] && r > le[pe - 1][0]) {
          const [ne, Q] = le[pe - 1], [De, Qe] = le[pe];
          N = Q + (Qe - Q) * (1 - Math.cos(Math.PI * (r - ne) / (De - ne))) / 2;
          break;
        }
      }
    }
    return { cond: g && T === "sunny" ? "clear-night" : T, temp: N, night: g, day: u };
  }
  const Hs = (t) => Pt(new Date(t)) === Pt(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(t)), vr = /* @__PURE__ */ new Map(), e = 900, n = 700;
  let i = null;
  const d = typeof ResizeObserver == "function" ? new ResizeObserver((t) => t.forEach((r) => {
    p(r.target.parentElement), r.target.closest("#wxDialog") && Oe();
  })) : null;
  function p(t, r = performance.now()) {
    const s = t.querySelectorAll("canvas[data-wx-strip]");
    if (!s.length) return;
    const u = ha(), g = u.days.flatMap((Q) => [{ cond: Q.day, night: !1 }, { cond: Q.night, night: !0 }]), T = g.map((Q) => Q.cond).join(), N = gr(), j = hr(), le = Dn(), pe = Number(Pt(new Date(u.start)).replace(/\D/g, "")) % 9973;
    let ne = !1;
    s.forEach((Q) => {
      var bt;
      const De = Q.clientWidth, Qe = Q.clientHeight;
      if (!De || !Qe) return;
      const qe = Q.dataset.wxStrip;
      let _e = vr.get(qe);
      _e ? _e.sig !== T && (_e.prev = _e.segs, _e.sig = T, _e.segs = g, _e.t0 = r, _e.dur = n) : vr.set(qe, _e = { sig: T, segs: g, prev: null, t0: r, dur: e });
      const Me = j || le ? Math.min(1, Math.max(0, (r - _e.t0) / _e.dur)) : 1;
      Me < 1 && (ne = !0);
      const gt = { width: De, height: Qe, colors: N.colors, clock: r, ambient: j, seed: pe, reveal: le ? Me : 1 - Math.pow(1 - Me, 3), prev: Me < 1 ? _e.prev : null, reduce: le };
      if ($n === "smooth") {
        const ze = Math.min(2, window.devicePixelRatio || 1), wt = Math.round(De * ze), Et = Math.round(Qe * ze);
        Q.width !== wt && (Q.width = wt), Q.height !== Et && (Q.height = Et);
        const st = Q.getContext("2d");
        if (!st) return;
        st.setTransform(ze, 0, 0, ze, 0, 0), Qu(st, g, gt);
      } else {
        const ze = Ju(g, { ...gt, px: 2, oneBit: $n === "onebit", ink: N.ink, paper: N.paper });
        Q.width !== ze.w && (Q.width = ze.w), Q.height !== ze.h && (Q.height = ze.h), (bt = Q.getContext("2d")) == null || bt.putImageData(new ImageData(ze.data, ze.w, ze.h), 0, 0);
      }
    }), ne && Po();
  }
  function m() {
    const t = o("weatherCard");
    if (!t || t.hidden) return;
    const r = Fn.weather, s = r && (un == null ? void 0 : un[r]);
    if (!s) {
      t.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + Kr("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (r ? "Not available" : "Set up in Settings") + "</div></div></div></div>", Ha(t);
      return;
    }
    const u = s.attributes || {}, g = u.temperature_unit || "°", T = (st) => Number.isFinite(Number(st)) ? Math.round(Number(st)) + "°" : "—", N = (u.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", j = gi[s.state] || (s.state ? s.state.charAt(0).toUpperCase() + s.state.slice(1) : "—"), le = Pt(/* @__PURE__ */ new Date()), pe = Ps.slice(0, 7), ne = pe.find((st) => Pt(new Date(st.datetime)) === le) || null, Q = pe.filter((st) => Pt(new Date(st.datetime)) >= le).slice(0, 6), De = /* @__PURE__ */ new Date(), Qe = Pt(new Date(De.getFullYear(), De.getMonth(), De.getDate() + 1)), qe = ne ? "H " + T(ne.temperature) + "&ensp; L " + T(ne.templow) : "", _e = (st) => {
      const ot = Pt(new Date(st.datetime));
      return ot === le ? "Today" : ot === Qe ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(st.datetime));
    }, Me = Number.isFinite(Number(u.temperature)) ? Math.round(Number(u.temperature)) : "—", gt = (st) => {
      const ot = new Date(st.datetime);
      return Math.round((new Date(ot.getFullYear(), ot.getMonth(), ot.getDate()) - new Date(De.getFullYear(), De.getMonth(), De.getDate())) / 864e5);
    }, bt = (st) => (gi[st] || st || "").toLowerCase(), ze = (st, ot) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + gt(st) + '" aria-label="' + We(_e(st) + ": " + bt(st.condition) + ", " + T(st.temperature) + " / " + T(st.templow) + ". Open the forecast") + '">' + Kr(st.condition, !1, !1, $n, "day" + ot) + '<div><div class="activityRowName">' + We(_e(st)) + '</div><div class="activityRowMeta">' + T(st.temperature) + " / " + T(st.templow) + "</div></div></div>", wt = () => '<div class="wxStrip"><div class="wxStripDays">' + ha().days.map((ot, pn) => {
      const Ut = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(ot.start)) + ": " + bt(ot.day) + (bt(ot.day) === bt(ot.night) ? " all day and night" : ", then " + bt(ot.night) + " overnight") + (Number.isFinite(ot.hi) ? ". High " + T(ot.hi) : "") + (Number.isFinite(ot.lo) ? ", low " + T(ot.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + pn + '" aria-label="' + We(Ut) + '"><span class="wxDayName">' + We(Hs(ot.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + T(ot.hi) + '</span><span class="wxLow">' + T(ot.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    t.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + We("Now in " + N + ": " + Me + "°, " + bt(s.state) + ". Open the forecast") + '"><div class="wxCurrent">' + Kr(s.state, !0, !0, $n, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + We(String(Me)) + '</span><span class="wxUnit">' + We(g) + '</span></div><div class="wxPlace">' + We(N) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + We(j) + "</div>" + (qe ? '<div class="wxRange">' + qe + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (Q.length ? bl === "strip" ? wt() : '<div class="activityRows wxDays">' + Q.map(ze).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", Ha(t);
    const Et = t.querySelector("canvas[data-wx-strip]");
    i && i !== Et && (d == null || d.unobserve(i)), i = Et, Et && (d == null || d.observe(Et), p(t)), Po(), V();
  }
  const h = o("weatherCard"), b = (t) => {
    const r = t.closest("[data-wx-day]");
    if (r) {
      const u = /* @__PURE__ */ new Date();
      te(+new Date(u.getFullYear(), u.getMonth(), u.getDate() + Number(r.dataset.wxDay), 12), r);
      return;
    }
    const s = t.closest("[data-wx-open]");
    s && te(Date.now(), s);
  };
  h.addEventListener("click", (t) => b(t.target)), h.addEventListener("keydown", (t) => {
    (t.key === "Enter" || t.key === " ") && t.target.matches("[data-wx-day],[data-wx-open]") && (t.preventDefault(), b(t.target));
  });
  const x = o("wxDialog"), D = o("wxGraph"), H = o("wxGraphWrap");
  let F = Date.now(), ie = null, ke = !1, Ee = null;
  function te(t, r) {
    const s = ha();
    ie = r || null, F = Math.max(s.start, Math.min(s.end - nn, t)), vr.delete("dialog"), fr.delete("scrub"), x.classList.add("open"), x.setAttribute("aria-hidden", "false"), V(), d == null || d.observe(x.querySelector("canvas[data-wx-strip]")), D.focus({ preventScroll: !0 }), Po();
  }
  function we() {
    var t;
    x.classList.remove("open"), x.setAttribute("aria-hidden", "true"), d == null || d.unobserve(x.querySelector("canvas[data-wx-strip]")), (t = ie == null ? void 0 : ie.focus) == null || t.call(ie, { preventScroll: !0 }), ie = null;
  }
  function V() {
    if (!x.classList.contains("open")) return;
    const t = ha();
    o("wxGraphDays").innerHTML = t.days.map((r) => "<span>" + We(Hs(r.start)) + "</span>").join(""), Oe(t), ve(t), p(x);
  }
  function ve(t = ha()) {
    const r = $r(t, F), s = un == null ? void 0 : un[Fn.weather], u = (s == null ? void 0 : s.attributes) || {}, g = u.temperature_unit || "°", T = Math.abs(F - Date.now()) < nn / 2, N = T && s ? s.state : r.cond, j = T && Number.isFinite(Number(u.temperature)) ? Math.round(Number(u.temperature)) : Number.isFinite(r.temp) ? Math.round(r.temp) : "—", le = gi[N] || (N ? N.charAt(0).toUpperCase() + N.slice(1) : "—"), pe = T ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(F / nn) * nn)), ne = r.day, Q = (Number.isFinite(ne.hi) ? "H " + Math.round(ne.hi) + "°" : "") + (Number.isFinite(ne.lo) ? "&ensp; L " + Math.round(ne.lo) + "°" : "");
    o("wxDialogNow").innerHTML = '<div class="wxCurrent">' + Kr(N, !0, T, $n, "scrub", T ? void 0 : r.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + We(String(j)) + '</span><span class="wxUnit">' + We(g) + '</span></div><div class="wxPlace">' + We(pe) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + We(le) + "</div>" + (Q ? '<div class="wxRange">' + Q + "</div>" : "") + "</div>", Ha(o("wxDialogNow")), D.setAttribute("aria-valuenow", String(Math.round((F - t.start) / nn))), D.setAttribute("aria-valuetext", pe + ", " + le.toLowerCase() + ", " + j + "°"), ft(t), Po();
  }
  function Oe(t = ha()) {
    const r = o("wxGraphLine"), s = H.clientWidth, u = H.clientHeight;
    if (!s || !u) return;
    const g = [];
    for (let Me = t.start; Me <= t.end; Me += nn) {
      const gt = $r(t, Me).temp;
      Number.isFinite(gt) && g.push([yi(t, Me) * s, gt]);
    }
    if (r.setAttribute("viewBox", "0 0 " + s + " " + u), g.length < 2) {
      r.innerHTML = '<g id="wxCursorMark"></g>', Ee = null, ft(t);
      return;
    }
    const T = g.map((Me) => Me[1]), N = Math.min(...T), j = Math.max(...T), le = Math.max(4, j - N), pe = $n !== "smooth", ne = (Me) => pe ? Math.round(Me / 2) * 2 : Math.round(Me * 10) / 10;
    Ee = (Me) => u * 0.84 - (Me - N) / le * u * 0.62;
    const Q = gr(), De = $n === "onebit" ? Q.paper : "#ffffff", Qe = $n === "onebit" ? Q.ink : "rgba(0,0,0,.28)", qe = "M" + g.map((Me) => ne(Me[0]) + " " + ne(Ee(Me[1]))).join(" L"), _e = (Me, gt) => {
      const bt = g.find((ze) => ze[1] === Me);
      return '<text class="wxLineLabel" x="' + ne(Math.min(s - 14, Math.max(14, bt[0]))) + '" y="' + ne(Ee(Me) + (gt ? 18 : -10)) + '" fill="' + De + '" stroke="' + Qe + '">' + Math.round(Me) + "°</text>";
    };
    r.setAttribute("shape-rendering", pe ? "crispEdges" : "auto"), r.innerHTML = '<path d="' + qe + '" fill="none" stroke="' + Qe + '" stroke-width="' + (pe ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + qe + '" fill="none" stroke="' + De + '" stroke-width="2" stroke-linejoin="round"/>' + _e(j, !1) + _e(N, !0) + '<g id="wxCursorMark"></g>', ft(t);
  }
  function ft(t = ha()) {
    const r = o("wxGraphLine").querySelector("#wxCursorMark");
    if (!r) return;
    const s = H.clientWidth, u = H.clientHeight, g = $n !== "smooth", T = (De) => g ? Math.round(De / 2) * 2 : De, N = T(yi(t, F) * s), j = $r(t, F).temp, le = gr(), pe = $n === "onebit" ? le.paper : "#ffffff", ne = $n === "onebit" ? le.ink : "rgba(0,0,0,.28)", Q = Ee && Number.isFinite(j) ? T(Ee(j)) : null;
    r.innerHTML = '<rect x="' + (N - 2) + '" y="0" width="4" height="' + u + '" fill="' + ne + '"/><rect x="' + (N - 1) + '" y="0" width="2" height="' + u + '" fill="' + pe + '"/>' + (Q == null ? "" : g ? '<rect x="' + (N - 5) + '" y="' + (Q - 5) + '" width="10" height="10" fill="' + pe + '" stroke="' + ne + '" stroke-width="2"/>' : '<circle cx="' + N + '" cy="' + Q + '" r="6" fill="' + pe + '" stroke="' + ne + '" stroke-width="2"/>');
  }
  const Se = (t) => {
    const r = H.getBoundingClientRect();
    r.width && (F = xl(ha(), (t - r.left) / r.width), ve());
  };
  D.addEventListener("pointerdown", (t) => {
    if (t.button === 0) {
      ke = !0;
      try {
        D.setPointerCapture(t.pointerId);
      } catch {
      }
      Se(t.clientX);
    }
  }), D.addEventListener("pointermove", (t) => {
    ke && Se(t.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((t) => D.addEventListener(t, () => {
    ke = !1;
  })), D.addEventListener("keydown", (t) => {
    const r = ha(), s = { ArrowLeft: -nn, ArrowRight: nn, ArrowDown: -nn, ArrowUp: nn, PageUp: -24 * nn, PageDown: 24 * nn }[t.key];
    s ? (t.preventDefault(), F = Math.max(r.start, Math.min(r.end - nn, Math.round(F / nn) * nn + s)), ve(r)) : (t.key === "Home" || t.key === "End") && (t.preventDefault(), F = t.key === "Home" ? r.start : r.end - nn, ve(r));
  }), o("wxDialogClose").addEventListener("click", we), x.addEventListener("click", (t) => {
    t.target === x && we();
  }), x.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.preventDefault(), we());
  }), m(), (Qd = (Xd = window.matchMedia) == null ? void 0 : (Jd = Xd.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || Qd.call(Jd, "change", () => {
    Po(), Ha(a);
  }), Po();
  const at = o("tvNav");
  l.fullscreenSupported || (at.hidden = !0), at.addEventListener("click", () => l.toggleFullscreen()), a.addEventListener("keydown", (t) => {
    !Ie.workout.classList.contains("active") || ai.classList.contains("active") || t.target.closest("input,select,textarea,.holdEnd") || (t.key === "MediaPlayPause" || t.key === " " && !t.target.closest("button") ? (t.preventDefault(), uo.click()) : t.key === "MediaTrackNext" ? (t.preventDefault(), o("skipExercise").click()) : t.key === "MediaTrackPrevious" && (t.preventDefault(), o("restartSegment").click()));
  }), a.querySelectorAll("[data-rounds-step]").forEach((t) => t.addEventListener("click", () => {
    const r = Math.max(1, Math.min(10, (Number(lt.value) || 1) + Number(t.dataset.roundsStep)));
    String(r) !== lt.value && (lt.value = r, lt.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [_, C, P, lt].forEach((t) => t.addEventListener("input", () => {
    const r = Ke[yt];
    r && (r.total = Number(_.value), r.work = Number(C.value), r.rest = Number(P.value)), kt();
  })), z.addEventListener("click", po), je.addEventListener("click", () => M("settings")), o("settingsBack").addEventListener("click", po), uo.addEventListener("click", () => eo(!jn)), Ot(yt), Jo(), Qo(), Ta(), o("healthHelpOpen").addEventListener("click", () => a.querySelector(".tab[data-pane=helpPane]").click()), dr(o("resetStats"), o("resetStatsFill"), 1500, () => {
    dt.history = [], dt.checkins = [], Wi = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    Cn(), Ro(), Qo(), Jo(), Ta(), Ma(), jt("Stats reset");
  });
  const Ln = o("morningTime"), Ze = o("eveningTime"), Zt = o("checkinAutoOpen");
  Ln.value = Ya().morning, Ze.value = Ya().evening, Zt.classList.toggle("on", ht().checkinAutoOpen !== !1), [["morningTime", Ln], ["eveningTime", Ze]].forEach(([t, r]) => r.addEventListener("change", () => {
    r.value && (pa(t, r.value), Ma());
  })), Zt.addEventListener("click", () => {
    const t = ht().checkinAutoOpen === !1;
    Zt.classList.toggle("on", t), pa("checkinAutoOpen", t);
  }), setTimeout(qi, 800);
  const kl = o("checkinNotify"), Ml = o("checkinNotifyTarget"), Gd = o("checkinNotifyStatus"), Au = Gd.textContent;
  function Ud() {
    const t = l.notifyServices(), r = t.filter((g) => g.startsWith("mobile_app_")), s = r.length ? r : t, u = (g) => g.replace(/^mobile_app_/, "").replace(/_/g, " ");
    Ml.innerHTML = s.map((g) => '<option value="' + We(g) + '">' + We(u(g)) + "</option>").join(""), !ht().notifyTarget && s[0] && (ht().notifyTarget = s[0]), Ml.value = ht().notifyTarget || "";
  }
  function Sl() {
    const t = !!ht().notifyOn;
    kl.classList.toggle("on", t), o("checkinNotifyTargetRow").hidden = !t;
    const r = Ya();
    Gd.textContent = t ? "Sends at " + r.morning + " and " + r.evening : Au;
  }
  async function dd() {
    const t = !!ht().notifyOn;
    try {
      return await l.setReminderAutomation(t ? { target: ht().notifyTarget, times: Ya() } : null), !0;
    } catch {
      return jt("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  kl.addEventListener("click", async () => {
    const t = !ht().notifyOn;
    if (t && (Ud(), !ht().notifyTarget)) {
      jt("Install the Companion app on your phone first");
      return;
    }
    ht().notifyOn = t, Sl(), await dd() ? (Cn(), jt(t ? "Check-in notifications on" : "Check-in notifications off")) : (ht().notifyOn = !t, Sl());
  }), Ml.addEventListener("change", () => {
    pa("notifyTarget", Ml.value), ht().notifyOn && dd();
  }), [Ln, Ze].forEach((t) => t.addEventListener("change", () => {
    Sl(), ht().notifyOn && dd();
  })), Ud(), Sl();
  let cd = null;
  function _u() {
    cd || (cd = setTimeout(() => {
      cd = null, Ta();
    }, 3e4));
  }
  return {
    updateStates(t) {
      var s, u;
      const r = !un || un[Fn.weather] !== t[Fn.weather] || ((s = un["sun.sun"]) == null ? void 0 : s.state) !== ((u = t["sun.sun"]) == null ? void 0 : u.state);
      un = t, ct(t), Yr(t), r && m(), Date.now() - to > 60 * 60 * 1e3 && Ls(), _u();
    },
    applyRemoteData(t) {
      if (t && (Array.isArray(t.history) && (dt.history = t.history, Ro()), Array.isArray(t.history) && Ta(), Array.isArray(t.checkins) && (dt.checkins = t.checkins.map(Li), Ma(), Jo(), Qo(), Ro(), Ta()), t.profiles && !Bn.classList.contains("open") && !sn)) {
        const r = bo(t);
        Object.keys(Ke).forEach((s) => delete Ke[s]), Object.assign(Ke, r.profiles), dt.order = r.order, Ke[yt] || (yt = dt.order[0]), Ai(), Ot(yt);
      }
    },
    suspend() {
      v = !1;
    },
    resume() {
      v || (v = !0, ri || (ri = requestAnimationFrame(si)), Sa || (Sa = requestAnimationFrame(Xi)), Po(), fi(a.querySelector(".tab.active"), !1));
    }
  };
}
const np = /* @__PURE__ */ new Set(["roaming", "test_area"]), ap = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window" },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62 }
}, Os = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, bn = "made_up_", br = (a) => {
  var l;
  return (l = String(a).split(".")[1]) == null ? void 0 : l.startsWith(bn);
}, Al = (a) => a.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function jd(a) {
  const l = a.getHours() + a.getMinutes() / 60, o = Math.max(0, Math.sin((l - 7) / 13 * Math.PI));
  return 2.4 * o * o;
}
function op(a) {
  const l = new Date(a.getFullYear(), a.getMonth(), a.getDate());
  let o = 0;
  for (let c = +l; c < +a; c += 10 * 60 * 1e3) o += jd(new Date(c)) / 6;
  return o;
}
function oc(a = /* @__PURE__ */ new Date()) {
  const l = [];
  for (let o = 0; o <= 96; o++) {
    const c = +a - (96 - o) * 15 * 60 * 1e3;
    l.push([c, jd(new Date(c))]);
  }
  return l;
}
function ip({ onChange: a }) {
  const l = {}, o = {}, c = (G, W, ce, J) => {
    l[G] = { entity_id: G, state: ce, attributes: J, last_changed: new Date(Date.now() - 18e6).toISOString() }, o[G] = W;
  }, f = (G, W, ce) => {
    const J = l[G], ue = W ?? J.state;
    l[G] = { ...J, state: ue, attributes: { ...J.attributes, ...ce }, last_changed: ue === J.state ? J.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, v = (G, W, ce, J) => c("binary_sensor." + bn + (G ? G + "_" : "") + Al(W), G, J ? "on" : "off", { friendly_name: W, device_class: ce });
  Object.entries(ap).forEach(([G, W]) => {
    if (W.temperature != null && c("sensor." + bn + G + "_temperature", G, String(W.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), W.humidity != null && c("sensor." + bn + G + "_humidity", G, String(W.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), W.vacuum && c("vacuum." + bn + "robot", G, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), W.climate && c("climate." + bn + G, G, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: W.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), W.cover) {
      const [ce, J, ue, $] = W.cover;
      c("cover." + bn + G + "_" + Al(ce), G, ue ? "open" : "closed", { friendly_name: ce, device_class: J, current_position: ue, ...$ != null ? { current_tilt_position: $ } : {} });
    }
    if (W.humidifier && c("humidifier." + bn + G, G, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: W.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), W.solar && (c("sensor." + bn + G + "_solar_power", G, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), c("sensor." + bn + G + "_solar_today", G, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), W.valve && c("valve." + bn + G + "_" + Al(W.valve), G, "closed", { friendly_name: W.valve, device_class: "water" }), W.door && v(G, W.door, "door", W.doorOpen), W.window && v(G, W.window, "window", !1), W.motion && v(G, W.motion, "motion", !1), W.plant) {
      const [ce, J, ue, $, E] = W.plant, B = bn + Al(ce), oe = (I, Ie, z, je, M) => c("sensor." + B + "_" + I, G, String(z), { friendly_name: Ie, device_class: M, state_class: "measurement", unit_of_measurement: je, plant_low: z < Os[I][0], plant_high: z > Os[I][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[I] });
      oe("moisture", "Moisture", J, "%", "moisture"), oe("light", "Light", ue, "lx", "illuminance"), oe("temperature", "Temperature", $, "°C", "temperature"), oe("fertility", "Fertility", E, "µS/cm", "conductivity");
      const Ae = Object.entries({ moisture: J, light: ue, temperature: $, fertility: E }).filter(([I, Ie]) => Ie < Os[I][0] || Ie > Os[I][1]).map(([I, Ie]) => I + (Ie < Os[I][0] ? " low" : " high"));
      c("plant." + B, G, Ae.length ? "problem" : "ok", { friendly_name: ce, moisture: J, brightness: ue, temperature: $, conductivity: E, problem: Ae.join(", ") || "none" });
    }
  }), c("alarm_control_panel." + bn + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), v(null, "Front door", "door", !1), v(null, "Smoke alarm", "smoke", !1), c("sensor." + bn + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const w = {}, A = {};
  let k = null;
  function R() {
    const G = /* @__PURE__ */ new Date();
    Object.keys(l).forEach((W) => {
      W.endsWith("_solar_power") && (l[W] = { ...l[W], state: jd(G).toFixed(2) }), W.endsWith("_solar_today") && (l[W] = { ...l[W], state: op(G).toFixed(1) });
    });
  }
  R();
  let me = 0;
  function ae() {
    let G = !1;
    const W = ++me % 10 === 0, ce = ($, E, B) => {
      f($, E, B), G = !0;
    };
    Object.entries(w).forEach(([$, E]) => {
      const B = l[$].attributes.current_position, oe = B < E ? Math.min(E, B + 10) : Math.max(E, B - 10);
      oe === E && delete w[$], ce($, oe === E ? oe === 0 ? "closed" : "open" : E > B ? "opening" : "closing", { current_position: oe });
    }), Object.entries(A).forEach(([$, E]) => {
      const B = l[$].attributes.current_tilt_position, oe = B < E ? Math.min(E, B + 25) : Math.max(E, B - 25);
      oe === E && delete A[$], ce($, null, { current_tilt_position: oe });
    }), Object.keys(l).filter(($) => $.startsWith("climate.")).forEach(($) => {
      const E = l[$], B = E.attributes, oe = B.current_temperature, Ae = (E.state === "heat" || E.state === "auto") && oe < B.temperature - 0.05, I = (E.state === "cool" || E.state === "auto") && oe > B.temperature + 0.05, Ie = E.state === "off" ? "off" : Ae ? "heating" : I ? "cooling" : "idle", z = W ? Math.round((oe + (Ae ? 0.1 : I ? -0.1 : 0)) * 10) / 10 : oe;
      (z !== oe || Ie !== B.hvac_action) && ce($, null, { current_temperature: z, hvac_action: Ie });
    }), Object.keys(l).filter(($) => $.startsWith("humidifier.")).forEach(($) => {
      const E = l[$], B = E.attributes, oe = B.current_humidity, Ae = E.state === "on" && oe < B.humidity, I = Ae && W ? oe + 1 : oe, Ie = E.state !== "on" ? "off" : Ae ? "humidifying" : "idle";
      if (I !== oe || Ie !== B.action) {
        ce($, null, { current_humidity: I, action: Ie });
        const z = "sensor." + bn + o[$] + "_humidity";
        l[z] && ce(z, String(I));
      }
    });
    const J = l["vacuum." + bn + "robot"], ue = J.attributes;
    J.state === "cleaning" && W && ce(J.entity_id, null, { battery_level: Math.max(5, ue.battery_level - 1) }), J.state === "returning" && ce(J.entity_id, "docked", {}), J.state === "docked" && ue.battery_level < 100 && ce(J.entity_id, null, { battery_level: Math.min(100, ue.battery_level + 2) }), k && Date.now() - k.at > 5e3 && (ce("alarm_control_panel." + bn + "house", "armed_" + k.mode, {}), k = null), G && a();
  }
  const U = setInterval(ae, 1e3), K = setInterval(() => {
    R(), a();
  }, 60 * 1e3);
  function ee(G, W, ce) {
    const J = ce == null ? void 0 : ce.entity_id;
    if (!l[J]) return !1;
    const ue = l[J], $ = ue.attributes, E = (B, oe) => f(J, B, oe);
    if (G === "climate" && (W === "set_temperature" && E(null, { temperature: Math.max($.min_temp, Math.min($.max_temp, ce.temperature)) }), W === "set_hvac_mode" && E(ce.hvac_mode, ce.hvac_mode === "off" ? { hvac_action: "off" } : {}), W === "toggle" && E(ue.state === "off" ? "heat" : "off", ue.state === "off" ? {} : { hvac_action: "off" })), G === "cover") {
      const B = W === "open_cover" ? 100 : W === "close_cover" ? 0 : W === "set_cover_position" ? ce.position : W === "toggle" ? $.current_position > 0 ? 0 : 100 : null;
      W === "stop_cover" && (delete w[J], delete A[J], E($.current_position === 0 ? "closed" : "open")), B != null && B !== $.current_position && (w[J] = B, E(B > $.current_position ? "opening" : "closing"));
      const oe = W === "open_cover_tilt" ? 100 : W === "close_cover_tilt" ? 0 : W === "set_cover_tilt_position" ? ce.tilt_position : null;
      W === "stop_cover_tilt" && delete A[J], oe != null && $.current_tilt_position != null && oe !== $.current_tilt_position && (A[J] = oe);
    }
    if (G === "humidifier" && (W === "set_humidity" && E(null, { humidity: Math.max($.min_humidity, Math.min($.max_humidity, ce.humidity)) }), W === "set_mode" && E(null, { mode: ce.mode }), W === "turn_on" || W === "turn_off" || W === "toggle")) {
      const B = W === "turn_on" || W === "toggle" && ue.state !== "on";
      E(B ? "on" : "off", { action: B ? "idle" : "off" });
    }
    if (G === "vacuum" && (W === "start" && E("cleaning", { rooms: ce.rooms || $.rooms }), W === "pause" && E("paused"), W === "return_to_base" && E("returning", { rooms: [] }), W === "locate" && E(null, { located: Date.now() }), W === "set_rooms" && E(null, { rooms: ce.rooms })), G === "valve") {
      const B = W === "open_valve" || W === "toggle" && ue.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(W) && E(B ? "open" : "closed");
    }
    if (G === "alarm_control_panel") {
      W === "alarm_disarm" && (k = null, E("disarmed", { changed_by: "Matt" }));
      const B = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[W];
      B && (k = { mode: B, at: Date.now() }, E("arming", { changed_by: "Matt" }));
    }
    return a(), !0;
  }
  function Y(G) {
    const W = (G == null ? void 0 : G.states) || {}, ce = (G == null ? void 0 : G.entities) || {}, J = (G == null ? void 0 : G.devices) || {}, ue = (C) => {
      var he;
      const P = ce[C];
      return P && (P.area_id || P.device_id && ((he = J[P.device_id]) == null ? void 0 : he.area_id)) || null;
    }, $ = (C) => {
      const P = ce[C];
      return W[C] && W[C].state !== "unavailable" && !(P != null && P.hidden) && !(P != null && P.entity_category);
    }, E = {};
    Object.keys(W).forEach((C) => {
      const P = ue(C);
      P && $(C) && (E[P] || (E[P] = [])).push(C);
    });
    const B = { ...W, ...l }, oe = (C) => {
      var P, he;
      return (he = (P = B[C]) == null ? void 0 : P.attributes) == null ? void 0 : he.device_class;
    }, Ae = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], I = Object.keys(W).filter((C) => C.startsWith("vacuum.") && $(C)), Ie = Object.values((G == null ? void 0 : G.areas) || {}).filter((C) => !np.has(C.area_id)).map((C) => {
      const P = C.area_id, he = E[P] || [], q = (Xe) => he.filter((Tt) => Tt.startsWith(Xe + ".")), se = (Xe) => q("sensor").filter((Tt) => oe(Tt) === Xe), fe = (Xe) => Object.keys(l).filter((Tt) => o[Tt] === P && Xe(Tt)), ye = (Xe, Tt) => Xe.length ? Xe : fe(Tt), $e = ye(se("temperature"), (Xe) => Xe.endsWith(P + "_temperature")), lt = ye(se("humidity"), (Xe) => Xe.endsWith(P + "_humidity")), At = se("power").filter((Xe) => /^(W|kW)$/.test(B[Xe].attributes.unit_of_measurement || "")), Sn = q("binary_sensor").filter((Xe) => oe(Xe) === "moisture"), Wn = ye(q("plant"), (Xe) => Xe.startsWith("plant.")).map((Xe) => ({ id: Xe, readings: fe((Tt) => Tt.startsWith("sensor." + Xe.split(".")[1] + "_")) })), vt = [...q("binary_sensor").filter((Xe) => Ae.includes(oe(Xe))), ...fe((Xe) => Xe.startsWith("binary_sensor."))];
      return {
        id: P,
        name: C.name,
        icon: C.icon,
        readings: [...$e.slice(0, 1), ...lt.slice(0, 1), ...Sn],
        power: At.length ? At.reduce((Xe, Tt) => Xe + Number(B[Tt].state) * (B[Tt].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: q("switch"),
        lights: q("light"),
        actions: [...q("light"), ...ye(q("climate"), (Xe) => Xe.startsWith("climate.")), ...ye(q("cover"), (Xe) => Xe.startsWith("cover.")), ...ye(q("humidifier"), (Xe) => Xe.startsWith("humidifier.")), ...ye(q("valve"), (Xe) => Xe.startsWith("valve.")), ...q("media_player"), ...q("vacuum"), ...I.length ? [] : fe((Xe) => Xe.startsWith("vacuum."))],
        solar: fe((Xe) => Xe.includes("_solar_")),
        plants: Wn,
        openings: vt,
        alerts: [...Sn, ...vt].filter((Xe) => {
          var Tt;
          return ((Tt = B[Xe]) == null ? void 0 : Tt.state) === "on";
        })
      };
    }).filter((C) => C.readings.length || C.plugs.length || C.actions.length || C.solar.length || C.plants.length), z = Object.keys(W).find((C) => /^sensor\..*(p1_meter_power|grid_power)$/.test(C) && W[C].state !== "unavailable") || null, je = (C) => Object.keys(W).filter((P) => P.startsWith(C + ".") && $(P)), M = je("alarm_control_panel"), _ = I.length ? I : ["vacuum." + bn + "robot"];
    return {
      states: B,
      rooms: Ie,
      grid: z,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (C) => l[C] ? o[C] : ue(C),
      vacuums: _,
      homeVacuums: _.filter((C) => !Ie.some((P) => P.actions.includes(C))),
      security: {
        alarms: M.length ? M : ["alarm_control_panel." + bn + "house"],
        locks: je("lock"),
        openings: [...Object.keys(l).filter((C) => C.startsWith("binary_sensor.")), "sensor." + bn + "doorbell"]
      }
    };
  }
  return { model: Y, call: ee, stop() {
    clearInterval(U), clearInterval(K);
  } };
}
const Wo = (a) => a < 0 ? 0 : a > 1 ? 1 : a, Pd = (a) => {
  const l = String(a || "#000000").trim().replace("#", ""), o = l.length === 3 ? l.split("").map((c) => c + c).join("") : l;
  return [0, 2, 4].map((c) => parseInt(o.slice(c, c + 2), 16) || 0);
}, rp = (a) => "#" + a.map((l) => Math.round(Math.max(0, Math.min(255, l))).toString(16).padStart(2, "0")).join(""), ic = {}, Oa = (a, l, o) => {
  const c = a + l + o;
  return ic[c] || (ic[c] = rp(Pd(a).map((f, v) => f + (Pd(l)[v] - f) * o)));
}, rc = {}, Fl = (a) => rc[a] || (rc[a] = Pd(a));
function sp(a) {
  const l = { clear: [a.skyClearDay, a.skyClearNight], cloudy: [a.skyCloudyDay, a.skyCloudyNight], rain: [a.skyRainDay, a.skyRainNight], snow: [a.skySnowDay, a.skySnowNight], fog: [a.skyFogDay, a.skyFogNight] };
  return l.partly = [Oa(l.clear[0], l.cloudy[0], 0.12), Oa(l.clear[1], l.cloudy[1], 0.12)], l.storm = [Oa(l.rain[0], "#000000", 0.22), Oa(l.rain[1], "#000000", 0.22)], l;
}
const lp = [
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
], Oo = (a, l) => (lp[(l & 7) * 8 + (a & 7)] + 0.5) / 64, au = 1, ou = 2, iu = 3, ru = 4, ts = 5, ql = 6, Id = 7, su = 8, sc = (a, l) => l <= 0.6665 && ((a - 0.5) * (a - 0.5) + (l - 0.2877) * (l - 0.2877) <= 0.0824 || (a - 0.25) * (a - 0.25) + (l - 0.416) * (l - 0.416) <= 0.0625 || (a - 0.791) * (a - 0.791) + (l - 0.458) * (l - 0.458) <= 0.0437 || a >= 0.25 && a <= 0.791 && l >= 0.416), dp = (a, l, o) => {
  let c = !1;
  for (let f = 0, v = a.length - 1; f < a.length; v = f++) {
    const w = a[f], A = a[v];
    w[1] > o != A[1] > o && l < (A[0] - w[0]) * (o - w[1]) / (A[1] - w[1]) + w[0] && (c = !c);
  }
  return c;
};
function cp(a, l, o, c, { oneBit: f, ink: v, paper: w, snowInk: A }) {
  const k = new Uint8ClampedArray(o * c * 4), R = Fl(v), me = Fl(w);
  for (let ae = 0; ae < c; ae++) for (let U = 0; U < o; U++) {
    const K = ae * o + U, ee = l[K];
    if (a[K] == null) continue;
    let Y = Fl(a[K]);
    if (f) {
      let G;
      ee === ru || ee === su ? G = !0 : ee === ts ? G = A : ee === Id || ee === ql ? G = !1 : G = Math.round((0.2126 * Y[0] + 0.7152 * Y[1] + 0.0722 * Y[2]) / 255 * 4) / 4 <= Oo(U, ae), (ee === au || ee === ou || ee === iu || ee === ql) && (U > 0 && l[K - 1] !== ee || U < o - 1 && l[K + 1] !== ee || ae > 0 && l[K - o] !== ee || ae < c - 1 && l[K + o] !== ee) && (G = !0), Y = G ? R : me;
    }
    k[K * 4] = Y[0], k[K * 4 + 1] = Y[1], k[K * 4 + 2] = Y[2], k[K * 4 + 3] = 255;
  }
  return { w: o, h: c, data: k };
}
const up = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, pp = (a) => Gl(a, !1).split("/")[0], hd = (a) => () => {
  a |= 0, a = a + 1831565813 | 0;
  let l = Math.imul(a ^ a >>> 15, 1 | a);
  return l = l + Math.imul(l ^ l >>> 7, 61 | l) ^ l, ((l ^ l >>> 14) >>> 0) / 4294967296;
}, hp = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", fp = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", mp = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", gp = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", vp = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], bp = [".##", "##.", ".#.", "#.."];
function lu(a, { width: l, height: o, colors: c, wave: f = 0.38, soft: v = 6, glow: w = 0.6, columns: A = 6 }) {
  const k = { ...sa, dawn: "#e5a77e", ...c }, R = sp(k), me = l, ae = o, U = me / A, K = U / 2, ee = Math.PI * 2, Y = a.length ? a : [{ cond: "cloudy", night: !1 }], G = [...Array(A * 2)].map((ue, $) => {
    const E = Y[Math.min($, Y.length - 1)], B = pp(E.cond), oe = $ % 2 === 1;
    return { cond: E.cond, k: B, night: oe, sky: R[B][oe ? 1 : 0], cover: up[B] };
  }), W = (ue) => ae * (0.5 - f * Math.cos(ee * (ue / U - 0.25)));
  return { C: k, S: G, W: me, H: ae, cw: U, sw: K, TAU: ee, yb: W, side: (ue, $, E) => {
    const B = (ue ? W($) - E : E - W($)) / Math.max(3, v * 1.4) + 0.5;
    return B <= 0 ? 0 : B >= 1 ? 1 : B;
  }, glowAt: (ue) => {
    const $ = ((ue / U - 0.25) % 1 + 1) % 1, E = Math.max(0, Math.min(A - 1, Math.round(ue / U - 0.25))), B = Math.max(0, Math.min(A - 1, Math.round(ue / U - 0.75))), oe = 1 - (G[2 * E].cover + G[2 * B + 1].cover) / 2, Ae = Math.sin(Math.PI * Math.min(1, Math.max(0, W(ue) / ae)));
    return { c: $ < 0.5 ? k.dusk : k.dawn, a: w * (0.2 + 0.8 * oe) * Ae * Ae };
  }, soft: v, tw: U * 0.3, sy: ae / 90 };
}
function du(a, { clock: l = 0, ambient: o = !1, seed: c = 1 }) {
  const { S: f, sw: v, side: w, C: A, TAU: k, sy: R, H: me } = a, ae = l, U = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  f.forEach((Y, G) => {
    const W = hd(c * 977 + G * 131 + 7), ce = (G + 0.5) * v, J = Y.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[Y.k] : 0;
    for (let ue = 0; ue < J; ue++) {
      const $ = ce + (W() - 0.5) * v * 1.6, E = (6 + W() * 76) * R, B = W() < 0.35, oe = 1.8 + W() * 1.6, Ae = w(!0, $, E) * (B ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(k * ae / 2600 + ue * 1.7 + G) : 1);
      Ae >= 0.03 && U.stars.push({ x: $, y: E, big: B, size: oe, o: Ae });
    }
    if (!Y.night && (Y.k === "clear" || Y.k === "partly")) {
      const ue = ce + (W() - 0.5) * v * 0.3, $ = Math.min(15, v * 0.29);
      U.suns.push({ x: ue, y: 32 * R, rad: $, halo: $ * 2.8 * (o ? 1 + 0.07 * Math.sin(k * ae / 3600 + G) : 1) });
    }
    if (Y.night && (Y.k === "clear" || Y.k === "partly")) {
      const ue = Math.min(0.78, v * 0.55 / 34), $ = ce - 23 * ue + (W() - 0.5) * v * 0.2;
      U.moons.push({ x: $ + 23 * ue, y: (4 + (o ? 0.8 * Math.sin(k * ae / 5200 + G) : 0)) * R + 23 * ue, d: 46 * ue });
    }
  });
  const K = Math.max(56, Math.min(100, me * 0.45)), ee = Math.max(1, v / (K * 2.4));
  return f.forEach((Y, G) => {
    const W = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[Y.k];
    if (!W) return;
    const ce = Y.k === "partly" ? 1 : Math.round(W * ee), J = hd(c * 577 + G * 71 + 3), ue = (G + 0.5) * v, $ = Y.k === "rain" || Y.k === "storm" || Y.night ? A.cloudNight : A.cloudDay, E = Y.night ? 0.82 : Y.k === "storm" ? 0.75 : 1;
    for (let B = 0; B < ce; B++) {
      const oe = K / 46 * (Y.k === "partly" ? 1 : 0.8 + J() * 0.4), Ae = ue + (Y.k === "partly" ? v * 0.12 : ((B + 0.5) / ce - 0.5) * v * 0.95 + (J() - 0.5) * v * 0.5 / ce), I = (Y.k === "partly" ? 40 : 6 + J() * 26) * R, Ie = o ? 2.5 * Math.sin(k * ae / 9e3 + G * 1.3 + B * 2.1) : 0, z = o ? 0.9 * Math.sin(k * ae / 6100 + G + B) : 0;
      U.clouds.push({ x: Ae - 23 * oe + Ie, y: I - 15.33 * oe + z, w: 46 * oe, h: 30.66 * oe, fill: $, o: E * (ce > 1 && B === 0 ? 0.85 : 1) });
    }
  }), f.forEach((Y, G) => {
    const W = hd(c * 313 + G * 29 + 11), ce = (G + 0.5) * v, J = Y.cond === "pouring" ? 16 : Y.cond === "rainy" || Y.cond === "hail" ? 9 : Y.cond === "lightning-rainy" ? 12 : Y.cond === "snowy-rainy" ? 5 : 0;
    for (let $ = 0; $ < J; $++) {
      let E = ce + (W() - 0.5) * v * 1.05, B = 44 + W() * 36, oe = 1;
      if (o) {
        const I = ((B - 44 + ae * 0.04) % 36 + 36) % 36;
        E -= 0.21 * (I - (B - 44)), B = 44 + I, oe = Math.min(1, I / 6, (36 - I) / 6);
      }
      B *= R;
      const Ae = w(Y.night, E, B) * oe;
      Ae >= 0.05 && U.drops.push({ x: E, y: B, o: Ae });
    }
    const ue = Y.cond === "snowy" ? 11 : Y.cond === "snowy-rainy" ? 6 : 0;
    for (let $ = 0; $ < ue; $++) {
      let E = ce + (W() - 0.5) * v * 1.05, B = 40 + W() * 44, oe = 1;
      if (o) {
        const I = ((B - 40 + ae * 9e-3) % 44 + 44) % 44;
        B = 40 + I, E += 1.6 * Math.sin(k * ae / 2800 + $ * 1.9 + G), oe = Math.min(1, I / 6, (44 - I) / 6);
      }
      B *= R;
      const Ae = w(Y.night, E, B) * oe;
      Ae >= 0.05 && U.flakes.push({ x: E, y: B, o: Ae });
    }
    if (Y.k === "fog") {
      const $ = Y.night ? "#c8ccd6" : "#ffffff", E = Y.night ? 0.28 : 0.62, B = o ? 4 * Math.sin(k * ae / 8e3 + G) : 0;
      for (let oe = 0; oe < 4; oe++) U.fogs.push({ x: ce - v * 0.75 + oe % 2 * v * 0.18 + (oe % 2 ? B : -B), y: (30 + oe * 13) * R, w: v * 1.3, c: $, a: E });
    }
    if (Y.k === "storm") {
      const $ = (ae / 3400 + G * 0.37) % 1;
      U.bolts.push({ x: ce + (W() - 0.5) * v * 0.3 - 5, y: 36 * R, o: o && !($ < 0.05 || $ > 0.09 && $ < 0.12) ? 0.8 : 1 });
    }
  }), U;
}
function wp(a, l, o, c, f, v, w, A) {
  const { S: k, C: R, cw: me, yb: ae, glowAt: U, soft: K, tw: ee, sy: Y } = a, G = new Array(o * c), W = new Uint8Array(o * c), ce = new Uint8Array(o * c), J = (M, _, C, P, he) => {
    C == null || M < 0 || _ < 0 || M >= o || _ >= c || (P >= 1 || P > Oo(M + 5, _ + 3)) && (G[_ * o + M] = C, W[_ * o + M] = he);
  }, ue = (M, _, C, P) => {
    for (let he = Math.max(0, Math.floor(_ - C) - 1); he <= Math.min(c - 1, _ + C + 1); he++) for (let q = Math.max(0, Math.floor(M - C) - 1); q <= Math.min(o - 1, M + C + 1); q++) P(q, he, q + 0.5 - M, he + 0.5 - _);
  }, $ = (M, _, C) => {
    for (let he = 0; he < M.length - 1; he++) {
      const q = (he + _) * me;
      if (C < q - ee / 2) return [M[he], M[he], 0];
      if (C <= q + ee / 2) return [M[he], M[he + 1], (C - q + ee / 2) / ee];
    }
    const P = M[M.length - 1];
    return [P, P, 0];
  }, E = k.filter((M) => !M.night).map((M) => M.sky), B = k.filter((M) => M.night).map((M) => M.sky), oe = K / v, Ae = 16 * Y / v;
  for (let M = 0; M < o; M++) {
    const _ = (M + 0.5) * f, C = ae(_) / v, P = $(E, 0.75, _), he = $(B, 1.25, _), q = U(_);
    for (let se = 0; se < c; se++) {
      const fe = Oo(M, se), ye = se + 0.5 - C, $e = (oe > 0.01 ? Wo(0.5 + ye / oe) : ye > 0 ? 1 : 0) > fe;
      let lt = $e ? P[2] > fe ? P[1] : P[0] : he[2] > fe ? he[1] : he[0];
      ($e ? Wo(((se + 0.5) / c - 0.45) / 0.55) * 0.7 : Wo(1 - (se + 0.5) / (c * 0.55)) * 0.7) > Oo(M + 2, se + 5) && (lt = $e ? Oa(lt, "#ffffff", 0.18) : Oa(lt, "#000000", 0.25)), $e && ye >= 0 && ye < Ae && q.a * 1.3 * (1 - ye / Ae) > Oo(M + 6, se + 1) && (lt = q.c), G[se * o + M] = lt, ce[se * o + M] = $e ? 0 : 1;
    }
  }
  const I = Oa(R.sun, "#ffffff", 0.55), Ie = Oa(R.moon, "#ffffff", 0.6);
  l.stars.forEach((M) => {
    const _ = Math.floor(M.x / f), C = Math.floor(M.y / v);
    if (_ < 0 || C < 0 || _ >= o || C >= c || !ce[C * o + _] || M.o < 0.15) return;
    const P = M.o > 0.45 ? R.star : Oa(R.star, G[C * o + _], 0.5), he = M.big && M.o > 0.6 ? Math.floor(M.size / f) : 0;
    J(_, C, P, 1, Id);
    for (let q = 1; q <= he; q++) [[_ - q, C], [_ + q, C], [_, C - q], [_, C + q]].forEach((se) => {
      se[0] >= 0 && se[1] >= 0 && se[0] < o && se[1] < c && ce[se[1] * o + se[0]] && J(se[0], se[1], P, 1, Id);
    });
  }), l.suns.forEach((M) => {
    const _ = Math.max(1.5, M.rad / f), C = M.x / f, P = M.y / v, he = M.halo / f * 0.85;
    if (ue(C, P, he, (q, se, fe, ye) => {
      const $e = Math.sqrt(fe * fe + ye * ye);
      $e > _ && $e < he && !ce[se * o + q] && J(q, se, I, 0.3 * (1 - ($e - _) / (he - _)), 0);
    }), A) {
      const q = Math.floor(w / 500) % 2, se = Math.max(1, _ * 0.3);
      for (let fe = 0; fe < 8; fe++) if (fe % 2 === q) for (let ye = _ + 1.2; ye < _ + 1.2 + se; ye += 0.7) J(Math.floor(C + Math.cos(fe * Math.PI / 4) * ye), Math.floor(P + Math.sin(fe * Math.PI / 4) * ye), R.sun, 1, su);
    }
    ue(C, P, _, (q, se, fe, ye) => {
      fe * fe + ye * ye <= _ * _ && J(q, se, Wo(((ye / _ + 1) / 2 - 0.6) / 0.4) > Oo(q, se) ? R.sunEdge : R.sun, 1, au);
    });
  }), l.moons.forEach((M) => {
    const _ = Math.max(1.5, M.d * 0.37 / f), C = M.x / f, P = M.y / v, he = C + 0.547 * _, q = P - 0.503 * _, se = 0.82 * _;
    ue(C, P, _, (fe, ye, $e, lt) => {
      if ($e * $e + lt * lt > _ * _) return;
      const At = fe + 0.5 - he, Sn = ye + 0.5 - q;
      At * At + Sn * Sn > se * se && J(fe, ye, Wo((lt + _) / (2 * _) * 1.1 - 0.1) > Oo(fe, ye) ? R.moon : Ie, 1, ou);
    });
  }), l.clouds.forEach((M) => {
    const _ = Math.max(3, M.w / f), C = _ * 0.6665, P = M.x / f, he = M.y / v, q = Oa(M.fill, "#000000", 0.16);
    for (let se = Math.max(0, Math.floor(he) - 1); se <= Math.min(c - 1, he + C + 1); se++) for (let fe = Math.max(0, Math.floor(P) - 1); fe <= Math.min(o - 1, P + _ + 1); fe++) {
      const ye = (fe + 0.5 - P) / _, $e = (se + 0.5 - he) / _;
      sc(ye, $e) && J(fe, se, !sc(ye, $e + 1 / _) || Wo(($e - 0.42) / 0.25) * 0.8 > Oo(fe, se) ? q : M.fill, M.o, iu);
    }
  }), l.fogs.forEach((M) => {
    const _ = Math.floor(M.y / v), C = Math.max(_, Math.floor((M.y + 6 * Y) / v) - 1), P = Math.floor(M.x / f), he = Math.floor((M.x + M.w) / f);
    for (let q = _; q <= C; q++) for (let se = P; se <= he; se++) {
      const fe = (se - P) / Math.max(1, he - P);
      J(se, q, M.c, M.a * (fe < 0.25 ? fe / 0.25 : fe > 0.75 ? (1 - fe) / 0.25 : 1), 0);
    }
  });
  const z = Math.max(2, Math.round(9 / v));
  l.drops.forEach((M) => {
    const _ = M.x / f, C = Math.floor(M.y / v);
    for (let P = 0; P < z; P++) J(Math.floor(_ - 0.208 * P * v / f), C + P, R.rain, M.o, ru);
  });
  const je = Math.max(0, Math.round(4.4 / f / 2.6));
  return l.flakes.forEach((M) => {
    const _ = Math.floor(M.x / f), C = Math.floor(M.y / v);
    J(_, C, R.snow, M.o, ts);
    for (let P = 1; P <= je; P++)
      J(_ - P, C, R.snow, M.o, ts), J(_ + P, C, R.snow, M.o, ts), J(_, C - P, R.snow, M.o, ts), J(_, C + P, R.snow, M.o, ts);
  }), l.bolts.forEach((M) => {
    if (f <= 3.5)
      for (let _ = Math.floor(M.y / v); _ <= (M.y + 24) / v; _++) for (let C = Math.floor(M.x / f); C <= (M.x + 11) / f; C++)
        dp(vp, (C + 0.5) * f - M.x, (_ + 0.5) * v - M.y) && J(C, _, R.sun, 1, ql);
    else {
      const _ = Math.round(M.x / f), C = Math.round(M.y / v);
      bp.forEach((P, he) => P.split("").forEach((q, se) => {
        q === "#" && J(_ + se, C + he, R.sun, 1, ql);
      }));
    }
  }), { col: G, ids: W };
}
function yp(a, l) {
  const o = l.px, c = Math.max(6, Math.round(l.width / o)), f = Math.max(6, Math.round(l.height / o)), v = l.width / c, w = l.height / f, A = l.ambient ? Math.floor((l.clock || 0) / 100) * 100 : 0, k = (K) => {
    const ee = lu(K, l);
    return wp(ee, du(ee, { clock: A, ambient: l.ambient, seed: l.seed }), c, f, v, w, A, l.ambient);
  }, R = k(a), me = l.reveal == null ? 1 : Wo(l.reveal);
  let ae = R.col, U = R.ids;
  if (me < 1) {
    const K = l.prev ? k(l.prev) : null, ee = me * (c + 12);
    ae = new Array(c * f), U = new Uint8Array(c * f);
    for (let Y = 0; Y < c * f; Y++) {
      const G = Y % c, W = Y / c | 0;
      (l.reduce ? me : Wo((ee - G) / 12)) > Oo(G, W) ? (ae[Y] = R.col[Y], U[Y] = R.ids[Y]) : K ? (ae[Y] = K.col[Y], U[Y] = K.ids[Y]) : (ae[Y] = null, U[Y] = 255);
    }
  }
  return cp(ae, U, c, f, { oneBit: l.oneBit, ink: l.ink || "#26221e", paper: l.paper || "#fbf9f6", snowInk: !1 });
}
function xp(a, l, o) {
  const c = o.width, f = o.height, v = o.reveal == null ? 1 : Wo(o.reveal), w = (U, K) => {
    const ee = lu(K, o);
    kp(U, ee, du(ee, o));
  };
  if (a.clearRect(0, 0, c, f), v >= 1) {
    w(a, l);
    return;
  }
  if (o.prev && w(a, o.prev), o.reduce) {
    a.save(), a.globalAlpha = v, w(a, l), a.restore();
    return;
  }
  const A = a.canvas, k = A.__wxOff || (A.__wxOff = document.createElement("canvas"));
  (k.width !== A.width || k.height !== A.height) && (k.width = A.width, k.height = A.height);
  const R = k.getContext("2d");
  R.setTransform(a.getTransform()), R.clearRect(0, 0, c, f), w(R, l);
  const me = v * (c + 64) - 64, ae = R.createLinearGradient(me, 0, me + 64, 0);
  ae.addColorStop(0, "rgba(0,0,0,1)"), ae.addColorStop(1, "rgba(0,0,0,0)"), R.globalCompositeOperation = "destination-in", R.fillStyle = ae, R.fillRect(0, 0, c, f), R.globalCompositeOperation = "source-over", a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.drawImage(k, 0, 0), a.restore();
}
function kp(a, l, o) {
  const { W: c, H: f, S: v, C: w, cw: A, yb: k, glowAt: R, soft: me, tw: ae, sy: U } = l, K = a.getTransform().a || 1, ee = (z) => {
    a.shadowColor = z ? "rgba(28,18,8,.22)" : "transparent", a.shadowBlur = z ? 4 * K : 0, a.shadowOffsetY = z ? 1.5 * K : 0;
  }, Y = (z, je) => {
    const M = Fl(z);
    return "rgba(" + M[0] + "," + M[1] + "," + M[2] + "," + Math.max(0, Math.min(1, je)).toFixed(3) + ")";
  }, G = (z, je) => {
    const M = a.createLinearGradient(0, 0, c, 0);
    M.addColorStop(0, z[0]);
    for (let _ = 0; _ < z.length - 1; _++) {
      const C = (_ + je) * A, P = (C - ae / 2) / c, he = (C + ae / 2) / c;
      P > 0 && P < 1 && M.addColorStop(P, z[_]), he > 0 && he < 1 && M.addColorStop(he, z[_ + 1]);
    }
    return M.addColorStop(1, z[z.length - 1]), M;
  }, W = Math.max(24, Math.ceil(c / 4)), ce = (z, je) => {
    a.beginPath();
    for (let M = 0; M <= W; M++) {
      const _ = c * M / W, C = z == null ? 0 : k(_) + z;
      M ? a.lineTo(_, C) : a.moveTo(_, C);
    }
    for (let M = W; M >= 0; M--) {
      const _ = c * M / W;
      a.lineTo(_, k(_) + je);
    }
    a.closePath(), a.fill();
  };
  a.save(), a.fillStyle = G(v.filter((z) => !z.night).map((z) => z.sky), 0.75), a.fillRect(0, 0, c, f);
  const J = a.createLinearGradient(0, 0, c, 0);
  for (let z = 0; z <= 64; z++) {
    const je = R(c * z / 64);
    J.addColorStop(z / 64, Y(je.c, Math.min(1, je.a)));
  }
  a.fillStyle = J;
  for (let z = 0; z < 8; z++)
    a.globalAlpha = 1 - z / 8, ce(z * 2 * U, (z + 1) * 2 * U);
  a.fillStyle = G(v.filter((z) => z.night).map((z) => z.sky), 1.25);
  const ue = Math.max(0.5, me), $ = 6;
  a.globalAlpha = 1, ce(null, -ue);
  for (let z = 0; z < $; z++)
    a.globalAlpha = 1 - (z + 0.5) / $, ce(-ue + 2 * ue * z / $, -ue + 2 * ue * (z + 1) / $);
  a.globalAlpha = 1;
  const E = new Path2D(mp), B = new Path2D(fp), oe = new Path2D(hp), Ae = new Path2D(gp);
  a.fillStyle = w.star, o.stars.forEach((z) => {
    a.globalAlpha = z.o, z.big ? (a.save(), a.translate(z.x, z.y), a.scale(z.size, z.size), a.fill(E), a.restore()) : (a.beginPath(), a.arc(z.x, z.y, 0.8, 0, Math.PI * 2), a.fill());
  }), a.globalAlpha = 1;
  const I = Oa(w.sun, "#ffffff", 0.55);
  o.suns.forEach((z) => {
    const je = a.createRadialGradient(z.x, z.y, 0, z.x, z.y, z.halo);
    je.addColorStop(0, Y(I, 0.42)), je.addColorStop(0.7, Y(I, 0)), a.fillStyle = je, a.beginPath(), a.arc(z.x, z.y, z.halo, 0, Math.PI * 2), a.fill();
    const M = a.createLinearGradient(0, z.y - z.rad, 0, z.y + z.rad);
    M.addColorStop(0.6, w.sun), M.addColorStop(1, w.sunEdge), a.fillStyle = M, ee(!0), a.beginPath(), a.arc(z.x, z.y, z.rad, 0, Math.PI * 2), a.fill(), ee(!1);
  });
  const Ie = Oa(w.moon, "#ffffff", 0.6);
  o.moons.forEach((z) => {
    a.save(), a.translate(z.x - z.d / 2, z.y - z.d / 2), a.scale(z.d / 46, z.d / 46);
    const je = a.createLinearGradient(0, 6, 0, 40);
    je.addColorStop(0, Ie), je.addColorStop(1, w.moon), a.fillStyle = je, ee(!0), a.fill(B), ee(!1), a.restore();
  }), o.clouds.forEach((z) => {
    a.save(), a.globalAlpha = z.o, a.translate(z.x, z.y), a.scale(z.w / 46, z.h / 30.66), a.translate(-4, -9.67), a.fillStyle = z.fill, ee(!0), a.fill(oe), ee(!1), a.restore();
  }), o.fogs.forEach((z) => {
    const je = a.createLinearGradient(z.x, 0, z.x + z.w, 0);
    je.addColorStop(0, Y(z.c, 0)), je.addColorStop(0.25, Y(z.c, z.a)), je.addColorStop(0.75, Y(z.c, z.a)), je.addColorStop(1, Y(z.c, 0)), a.fillStyle = je, a.fillRect(z.x, z.y, z.w, 6 * U);
  }), a.fillStyle = w.rain, o.drops.forEach((z) => {
    a.save(), a.globalAlpha = z.o, a.translate(z.x, z.y), a.rotate(12 * Math.PI / 180), a.fillRect(-1.5, 0, 3, 9), a.restore();
  }), a.fillStyle = w.snow, o.flakes.forEach((z) => {
    a.globalAlpha = z.o, a.beginPath(), a.arc(z.x, z.y, 2.2, 0, Math.PI * 2), a.fill();
  }), a.fillStyle = w.sun, o.bolts.forEach((z) => {
    a.save(), a.globalAlpha = z.o, a.translate(z.x, z.y), a.fill(Ae), a.restore();
  }), a.restore();
}
const Mp = (a) => a === "sunny" ? "clear" : a === "clear-night" ? "night" : a === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(a) ? "rain" : ["snowy", "snowy-rainy"].includes(a) ? "snow" : "cloudy", Qr = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, _l = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, fd = (a, l) => '<path class="' + l + '" d="' + a + '"/>', Sp = (a, l) => ' style="animation-delay:-' + Math.round(a * 137 % l) + 'ms"', Fa = (a, l, o, c) => {
  const f = o * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (c < 1 ? ' opacity="' + c + '"' : "") + Sp(a, 2400) + ' d="M' + a + " " + (l - o) + "L" + (a + f) + " " + (l - f) + "L" + (a + o) + " " + l + "L" + (a + f) + " " + (l + f) + "L" + a + " " + (l + o) + "L" + (a - f) + " " + (l + f) + "L" + (a - o) + " " + l + "L" + (a - f) + " " + (l - f) + 'Z"/>';
}, lc = ([a, l, o], c) => '<path class="wbMoonPath" d="' + a + '" fill="url(#' + c + ')"/><defs><linearGradient id="' + c + '" x1="0" y1="' + l + '" x2="0" y2="' + o + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Cp = (a, l) => l ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + a + ')"/><defs><linearGradient id="' + a + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Tp = (a) => (a ? ["29.35", "43.04", "56.74"].map((l, o) => '<g class="wbDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wbAccent" x="' + l + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + l + ' 60.65)"/></g>') : [19, 26, 33].map((l, o) => '<g class="wbDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + l + ' 38)"/></g>')).join(""), Lp = (a) => (a ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([l, o], c) => '<circle class="wbFlake" style="animation-delay:-' + c * 640 + 'ms" cx="' + l + '" cy="' + o + '" r="' + (a ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function Ap(a, l, o, c) {
  const f = (v) => '<g filter="url(#' + c + '-sh)">' + v + "</g>";
  return a === "clear" ? l ? f(lc(o ? _l.l : _l.s, c)) + (o ? Fa(70, 20, 5.83, 1) + Fa(78.33, 41.67, 3.75, 0.8) + Fa(60, 71.67, 3.33, 0.6) : Fa(42, 12, 3.5, 1) + Fa(47, 25, 2.25, 0.8) + Fa(36, 43, 2, 0.6)) : f(Cp(c, o)) : a === "partly" ? f(l ? lc(o ? _l.lp : _l.sp, c) : o ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + f(fd(o ? Qr.lp : Qr.sp, l ? "wbCloudLight" : "wbBright")) + (l ? o ? Fa(73.33, 16.67, 4.17, 0.9) : Fa(44, 10, 2.5, 0.9) : "") : a === "cloudy" ? f(fd(o ? Qr.lc : Qr.s, l ? "wbCloudLight" : "wbBright")) + (l ? o ? Fa(15, 15, 3.75, 0.8) + Fa(76.67, 13.33, 2.92, 0.6) : Fa(9, 9, 2.25, 0.8) + Fa(46, 8, 1.75, 0.6) : "") : f(fd(o ? Qr.lr : Qr.s, "wbCloudLight")) + (a === "rain" ? Tp(o) : Lp(o));
}
const _p = (a, l) => '<defs><filter id="' + a + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (l ? 1.6 : 1) + '" stdDeviation="' + (l ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function Ep(a, l, o, c) {
  let f = Mp(a);
  const v = f === "night" || !!o;
  f === "night" && (f = "clear");
  const w = l ? 90 : 54;
  return { k: f, night: v, svg: '<svg viewBox="0 0 ' + w + " " + w + '">' + _p(c, l) + Ap(f, v, l, c) + "</svg>" };
}
const Dp = [
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
], El = (a, l) => (Dp[l % 8 * 8 + a % 8] + 0.5) / 64, ao = (a) => [parseInt(a.slice(1, 3), 16), parseInt(a.slice(3, 5), 16), parseInt(a.slice(5, 7), 16)], Xn = (a, l, o) => [Math.round(a[0] + (l[0] - a[0]) * o), Math.round(a[1] + (l[1] - a[1]) * o), Math.round(a[2] + (l[2] - a[2]) * o)], Ws = (a) => a < 0 ? 0 : a > 1 ? 1 : a, dc = (a, l) => {
  let o = a * 374761393 + l * 668265263 ^ 1540483477;
  return o = Math.imul(o ^ o >>> 13, 1274126177), ((o ^ o >>> 16) >>> 0) / 4294967296;
}, xr = [255, 255, 255], aa = ao("#26221e"), cc = ao("#0288d1"), Rp = ao("#01579b"), md = ao(sa.cloudDay), gd = ao(sa.cloudNight), Dl = ao(sa.dusk), vd = ao(sa.sunEdge), Np = ao(sa.sun), Bp = 10, uc = 0.3, qo = 56, cu = 21;
function Pp(a) {
  const l = Array.from({ length: cu }, () => new Array(qo).fill(void 0)), o = (w, A, k) => {
    l[A][w] = k;
  }, c = Xn(Dl, aa, 0.35), f = Xn(aa, xr, 0.22);
  for (let w = 0; w <= 6; w++) {
    const A = w < 2 ? qo - 2 : qo - 1;
    for (let k = 6 - w; k <= A; k++) o(k, w, w < 2 ? c : w === 6 ? f : aa);
  }
  const v = [Dl, vd, gd, ao(sa.skyRainDay), Xn(Dl, aa, 0.2), Xn(a, aa, 0.35)];
  [2, 3, 2, 3, 3].forEach((w, A) => {
    const k = 9 + A * 6;
    for (let R = 0; R < w; R++) {
      const me = v[(A * 2 + R * 3) % v.length];
      for (let ae = k; ae < k + 5; ae++)
        o(ae, 7 + R * 2, Xn(me, aa, 0.12)), o(ae, 8 + R * 2, R === w - 1 ? Xn(me, xr, 0.3) : me);
      o(k + 5, 7 + R * 2, aa), o(k + 5, 8 + R * 2, aa);
    }
  });
  for (let w = 7; w <= 12; w++) o(5, w, aa);
  o(5, 13, vd);
  for (let w = 7; w <= 14; w++) for (let A = 42; A <= 51; A++) o(A, w, A === 51 ? gd : md);
  for (let w = 43; w <= 50; w += 2)
    o(w, 12, aa), o(w, 9, Xn(aa, md, 0.4));
  for (let w = 40; w <= 53; w++) o(w, 14, w === 40 || w === 53 ? gd : md);
  for (let w = 15; w <= 18; w++) for (let A = 46; A <= 49; A++) o(A, w, w === 18 ? aa : w === 16 ? vd : Dl);
  for (let w = 15; w <= 19; w++) o(44, w, aa);
  return o(44, 20, Np), l;
}
function Ip(a, l, o, c) {
  const f = Math.max(1, Math.round(a)), v = Math.max(1, Math.round(l)), w = new Uint8ClampedArray(f * v * 4), A = ao(c.skyClearDay), k = ao(c.skyFogDay), R = Pp(A), me = Math.round(v * 0.55), ae = Ws(1 - Math.log(o / uc) / Math.log(Bp / uc)), U = Xn(A, k, ae), K = (W) => Ws((W - 0.1) / 0.9), ee = Ws((1 - Math.exp(-2 / o) - 0.2) / 0.8), Y = Math.round(f / 2 - qo / 2), G = me + 3;
  for (let W = 0; W < v; W++) {
    const ce = G - 1 - W, J = W - G;
    for (let ue = 0; ue < f; ue++) {
      const $ = ue - Y;
      let E, B;
      const oe = ce >= 0 && ce < cu && $ >= 0 && $ < qo ? R[ce][$] : void 0;
      if (oe)
        E = oe, B = ee;
      else if (ce >= 0 && ce <= 1 && $ >= 4 - ce && $ <= 5 - ce)
        E = Xn(xr, cc, 0.15), B = ee;
      else if (W < me) {
        const Ie = Ws(((W + 0.5) / me - 0.15) / 0.85) * 3, z = Math.min(3, Math.floor(Ie + El(ue + 2, W + 5)));
        E = Xn(U, xr, z * 0.1), B = ae * 0.95;
      } else {
        const Ie = (W - me + 0.5) / (v - me), z = Math.min(1.5, 6e-3 / (Ie * Ie)), je = Ws(Ie * 1.4) * 3, M = Math.min(3, Math.floor(je + El(ue + 1, W + 6)));
        E = Xn(cc, Rp, M / 3);
        const _ = 1 + Math.round(Ie * 7), C = Math.floor(ue / (_ * 3)), P = 0.06 + 0.16 * Ie, he = ue % (_ * 3) < _;
        he && dc(C, W) < P ? E = Xn(E, xr, 0.18 + 0.1 * (1 - Ie)) : he && Ie > 0.5 && dc(C, W - 1) < P && (E = Xn(E, aa, 0.12)), B = K(1 - Math.exp(-z / o)), J === 0 && $ >= 3 && $ <= 8 ? (E = Xn(E, xr, $ < 6 ? 0.8 : 0.45), B = ee) : J >= 0 && J <= 2 && $ >= qo && $ < qo + 40 ? ((1 - ($ - qo) / 40) * (J === 1 ? 0.9 : 0.5) > El(ue, W + 3) && (E = Xn(E, xr, 0.5)), B = ee) : J === 0 && $ >= 6 && $ < qo && (E = Xn(E, aa, $ % 2 === 0 ? 0.35 : 0.2), B = ee);
      }
      const Ae = B > El(ue, W) ? k : E, I = (W * f + ue) * 4;
      w[I] = Ae[0], w[I + 1] = Ae[1], w[I + 2] = Ae[2], w[I + 3] = 255;
    }
  }
  return { data: w, w: f, h: v };
}
const Hp = {
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
}, Fp = 1.6;
function Op(a, l) {
  const o = a ? Hp[String(a).toUpperCase()] : void 0;
  if (!o || !(l > 0)) return;
  const c = (v) => Math.abs(Math.log(v[2] / l)), f = o.reduce((v, w) => c(w) < c(v) ? w : v);
  return c(f) <= Math.log(Fp) ? { from: f[0], to: f[1], km: f[2] } : void 0;
}
const Wp = (a, l) => l === "mi" ? a * 1.609344 : l === "m" ? a / 1e3 : l === "ft" ? a * 3048e-7 : l === "yd" ? a * 9144e-7 : a, qp = (a) => a < 1 ? "very_poor" : a < 4 ? "poor" : a < 10 ? "moderate" : a < 20 ? "good" : a < 40 ? "very_good" : "excellent", no = 6e4, Ft = 36e5, go = 864e5, zs = 1440, jp = 6, zp = 10 * no, pc = 3, Vp = 3, hc = { day: [6, 22], waking: [7, 23], all: [0, 24] }, Gp = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], Up = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", fc = (a, l, o, c) => '<circle cx="' + a + '" cy="' + l + '" r="' + o + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((f) => {
  const v = Math.cos(f * Math.PI / 180), w = Math.sin(f * Math.PI / 180), A = o + 2, k = o + 2 + c;
  return "M" + (a + v * A).toFixed(2) + " " + (l + w * A).toFixed(2) + "L" + (a + v * k).toFixed(2) + " " + (l + w * k).toFixed(2);
}).join("") + '"/>', Io = (a) => '<path d="' + Up + '"' + (a ? ' transform="' + a + '"' : "") + "/>", Ho = (a) => '<path d="' + a + '"/>', mc = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function Yp(a, l) {
  const o = "translate(0,-3)";
  switch (a) {
    case "sunny":
      return l ? mc : fc(12, 12, 4, 2.5);
    case "clear-night":
      return mc;
    case "partlycloudy":
      return (l ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : fc(7.5, 7.5, 2.6, 1.4)) + Io("translate(3.6,3) scale(.85)");
    case "cloudy":
      return Io();
    case "fog":
      return Ho("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return Io(o) + Ho("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return Io(o) + Ho("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return Io(o) + Ho("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return Io(o) + Ho("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return Io(o) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return Io(o) + Ho("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return Io(o) + Ho("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return Ho("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + Ho("M12 8v5M12 16h.01");
  }
}
const bd = (a, l) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + Yp(a, l) + "</svg>", Zp = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), Kp = 30 * no, $p = 7, Xp = 3, gc = 1, Jp = no, Qp = 15 * no, eh = 5, wn = {
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
  radar: "M19.07,4.93L17.66,6.34C19.1,7.79 20,9.79 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12C4,7.92 7.05,4.56 11,4.07V6.09C8.16,6.57 6,9.03 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12C18,10.34 17.33,8.84 16.24,7.76L14.83,9.17C15.55,9.9 16,10.9 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12C8,10.14 9.28,8.59 11,8.14V10.28C10.4,10.63 10,11.26 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12C14,11.26 13.6,10.62 13,10.28V2H12A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,9.24 20.88,6.74 19.07,4.93Z",
  airFilter: "M19,18.31V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V16.3C4.54,16.12 3.95,16 3,16A1,1 0 0,1 2,15A1,1 0 0,1 3,14C3.82,14 4.47,14.08 5,14.21V12.3C4.54,12.12 3.95,12 3,12A1,1 0 0,1 2,11A1,1 0 0,1 3,10C3.82,10 4.47,10.08 5,10.21V8.3C4.54,8.12 3.95,8 3,8A1,1 0 0,1 2,7A1,1 0 0,1 3,6C3.82,6 4.47,6.08 5,6.21V4A2,2 0 0,1 7,2H17A2,2 0 0,1 19,4V6.16C20.78,6.47 21.54,7.13 21.71,7.29C22.1,7.68 22.1,8.32 21.71,8.71C21.32,9.1 20.8,9.09 20.29,8.71V8.71C20.29,8.71 19.25,8 17,8C15.74,8 14.91,8.41 13.95,8.9C12.91,9.41 11.74,10 10,10C9.64,10 9.31,10 9,9.96V7.95C9.3,8 9.63,8 10,8C11.26,8 12.09,7.59 13.05,7.11C14.09,6.59 15.27,6 17,6V4H7V20H17V18C18.5,18 18.97,18.29 19,18.31M17,10C15.27,10 14.09,10.59 13.05,11.11C12.09,11.59 11.26,12 10,12C9.63,12 9.3,12 9,11.95V13.96C9.31,14 9.64,14 10,14C11.74,14 12.91,13.41 13.95,12.9C14.91,12.42 15.74,12 17,12C19.25,12 20.29,12.71 20.29,12.71V12.71C20.8,13.1 21.32,13.1 21.71,12.71C22.1,12.32 22.1,11.69 21.71,11.29C21.5,11.08 20.25,10 17,10M17,14C15.27,14 14.09,14.59 13.05,15.11C12.09,15.59 11.26,16 10,16C9.63,16 9.3,16 9,15.95V17.96C9.31,18 9.64,18 10,18C11.74,18 12.91,17.41 13.95,16.9C14.91,16.42 15.74,16 17,16C19.25,16 20.29,16.71 20.29,16.71V16.71C20.8,17.1 21.32,17.1 21.71,16.71C22.1,16.32 22.1,15.69 21.71,15.29C21.5,15.08 20.25,14 17,14Z",
  eyeOutline: "M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z",
  flower: "M3,13A9,9 0 0,0 12,22C12,17 7.97,13 3,13M12,5.5A2.5,2.5 0 0,1 14.5,8A2.5,2.5 0 0,1 12,10.5A2.5,2.5 0 0,1 9.5,8A2.5,2.5 0 0,1 12,5.5M5.6,10.25A2.5,2.5 0 0,0 8.1,12.75C8.63,12.75 9.12,12.58 9.5,12.31C9.5,12.37 9.5,12.43 9.5,12.5A2.5,2.5 0 0,0 12,15A2.5,2.5 0 0,0 14.5,12.5C14.5,12.43 14.5,12.37 14.5,12.31C14.88,12.58 15.37,12.75 15.9,12.75C17.28,12.75 18.4,11.63 18.4,10.25C18.4,9.25 17.81,8.4 16.97,8C17.81,7.6 18.4,6.74 18.4,5.75C18.4,4.37 17.28,3.25 15.9,3.25C15.37,3.25 14.88,3.41 14.5,3.69C14.5,3.63 14.5,3.56 14.5,3.5A2.5,2.5 0 0,0 12,1A2.5,2.5 0 0,0 9.5,3.5C9.5,3.56 9.5,3.63 9.5,3.69C9.12,3.41 8.63,3.25 8.1,3.25A2.5,2.5 0 0,0 5.6,5.75C5.6,6.74 6.19,7.6 7.03,8C6.19,8.4 5.6,9.25 5.6,10.25M12,22A9,9 0 0,0 21,13C16,13 12,17 12,22Z"
}, Ye = {
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
  pollen: "Pollen",
  rainRadar: "Rain radar",
  noAir: "No air quality sensor yet",
  noPollen: "No pollen sensor yet",
  rainFrom: "Rain from {time}",
  noRain12: "No rain in the next 12 hours",
  fineParticles: "fine particles",
  aqLevel: { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }
}, th = {
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
}, nh = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], ah = Object.keys(Ye.phases), Rl = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)" }, oh = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, uu = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], Nl = 100, vc = "µg/m³", ih = "weather_alerts.air_quality_pollen", jl = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], rh = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, sh = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], lh = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, dh = { daily: 1, hourly: 2 }, Ve = (a) => String(a ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), On = (a, l) => a.replace(/\{(\w+)\}/g, (o, c) => l[c] ?? ""), ns = (a) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + a + '"/></svg>', bc = /* @__PURE__ */ new Map();
function ch(a) {
  let l = bc.get(a);
  if (l === void 0) {
    const o = "http://www.w3.org/2000/svg", c = document.createElementNS(o, "svg"), f = document.createElementNS(o, "path");
    c.setAttribute("viewBox", "0 0 24 24"), c.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", f.setAttribute("d", a), c.append(f), document.body.append(c);
    const v = f.getBBox();
    c.remove();
    const w = Math.max(v.width, v.height), A = w ? 26 * 24 / w : 0, k = A / 24;
    l = w ? "width:" + A.toFixed(2) + "px;height:" + A.toFixed(2) + "px;translate:" + ((12 - v.x - v.width / 2) * k).toFixed(2) + "px " + ((12 - v.y - v.height / 2) * k).toFixed(2) + "px" : "", bc.set(a, l);
  }
  return l ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + l + '"><path d="' + a + '"/></svg>' : ns(a);
}
const uh = () => {
  var a;
  return !!((a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches);
}, Xt = (a) => a != null && a !== "" && Number.isFinite(Number(a)), wc = /* @__PURE__ */ new Map(), yc = /* @__PURE__ */ new Map(), wd = /* @__PURE__ */ new WeakMap(), ph = (a) => {
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
function fn(a, l, o) {
  const c = Number(a);
  if (Number.isNaN(c)) return String(a);
  const f = (l == null ? void 0 : l.number_format) === "none", v = { maximumFractionDigits: 2, ...o, ...f ? { useGrouping: !1 } : {} }, w = f ? "en-US" : ph(l), A = JSON.stringify([w, v]);
  let k = wc.get(A);
  if (!k) {
    try {
      k = new Intl.NumberFormat(w, v);
    } catch {
      k = new Intl.NumberFormat(void 0, v);
    }
    wc.set(A, k);
  }
  return k.format(c);
}
const zd = (a) => {
  var l;
  return ((l = a == null ? void 0 : a.locale) == null ? void 0 : l.language) || (a == null ? void 0 : a.language) || void 0;
};
function hh(a) {
  if (!a) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (wd.has(a)) return wd.get(a);
  const l = a.time_format, o = l === "language" || l === "system" || !l ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(l === "language" ? a.language : void 0).includes("10") : l === "12";
  return wd.set(a, o), o;
}
const pu = (a) => {
  var l, o;
  return ((l = a == null ? void 0 : a.locale) == null ? void 0 : l.time_zone) === "server" && ((o = a == null ? void 0 : a.config) != null && o.time_zone) ? a.config.time_zone : void 0;
};
function hu(a, l) {
  const o = JSON.stringify([a, l]);
  let c = yc.get(o);
  if (!c) {
    try {
      c = new Intl.DateTimeFormat(a, l);
    } catch {
      c = new Intl.DateTimeFormat(void 0, { ...l, timeZone: void 0 });
    }
    yc.set(o, c);
  }
  return c;
}
const Fo = (a, l) => hu(zd(l), { hour: "numeric", minute: "2-digit", hourCycle: hh(l == null ? void 0 : l.locale) ? "h12" : "h23", timeZone: pu(l) }).format(a), xc = (a, l) => hu(zd(l), { weekday: "short", timeZone: pu(l) }).format(a), fh = (a, l) => a.toLocaleDateString(zd(l), { weekday: "narrow" }), hn = (a, l) => Xt(l) ? fn(Math.round(Number(l)), a.locale) + "°" : "–", as = (a) => {
  const l = new Date(a);
  return l.setHours(0, 0, 0, 0), l;
}, es = (a, l) => a.getFullYear() === l.getFullYear() && a.getMonth() === l.getMonth() && a.getDate() === l.getDate(), ga = Math.PI / 180, mh = 2440588, gh = 2451545, zl = ga * 23.4397, vh = 149598e3, bh = -0.833 * ga, wh = 0.133 * ga, kc = 5 * no, fu = (a) => a.getTime() / go - 0.5 + mh - gh, mu = (a, l) => Math.atan2(Math.sin(a) * Math.cos(zl) - Math.tan(l) * Math.sin(zl), Math.cos(a)), gu = (a, l) => Math.asin(Math.sin(l) * Math.cos(zl) + Math.cos(l) * Math.sin(zl) * Math.sin(a)), yh = (a, l) => ga * (280.16 + 360.9856235 * a) - l, xh = (a, l, o) => Math.asin(Math.sin(l) * Math.sin(o) + Math.cos(l) * Math.cos(o) * Math.cos(a));
function vu(a) {
  const l = ga * (357.5291 + 0.98560028 * a), o = ga * (1.9148 * Math.sin(l) + 0.02 * Math.sin(2 * l) + 3e-4 * Math.sin(3 * l)), c = l + o + ga * 102.9372 + Math.PI;
  return { ra: mu(c, 0), dec: gu(c, 0), dist: vh };
}
function bu(a) {
  const l = ga * (218.316 + 13.176396 * a), o = ga * (134.963 + 13.064993 * a), c = ga * (93.272 + 13.22935 * a), f = l + ga * 6.289 * Math.sin(o), v = ga * 5.128 * Math.sin(c);
  return { ra: mu(f, v), dec: gu(f, v), dist: 385001 - 20905 * Math.cos(o) };
}
const wu = (a, l, o, c) => {
  const f = fu(l), v = a(f);
  return xh(yh(f, ga * -c) - v.ra, ga * o, v.dec);
}, Vd = (a, l, o) => wu(vu, a, l, o), kh = (a, l, o) => wu(bu, a, l, o);
function yu(a, l, o, c) {
  const f = {};
  let v = o.getTime(), w = a(o) - l;
  for (let A = v + kc; A <= c.getTime(); A += kc) {
    const k = a(new Date(A)) - l;
    if (w < 0 != k < 0) {
      const R = new Date(v + (A - v) * w / (w - k));
      k > 0 ? f.rise ?? (f.rise = R) : f.set ?? (f.set = R);
    }
    v = A, w = k;
  }
  return f;
}
const xu = (a) => {
  const l = as(a);
  return [l, new Date(l.getTime() + go)];
}, Mh = (a, l, o) => yu((c) => Vd(c, l, o), bh, ...xu(a)), Sh = (a, l, o) => yu((c) => kh(c, l, o), wh, ...xu(a));
function Ch(a) {
  const l = fu(a), o = vu(l), c = bu(l), f = Math.acos(Math.sin(o.dec) * Math.sin(c.dec) + Math.cos(o.dec) * Math.cos(c.dec) * Math.cos(o.ra - c.ra)), v = Math.atan2(o.dist * Math.sin(f), c.dist - o.dist * Math.cos(f)), w = Math.atan2(Math.cos(o.dec) * Math.sin(o.ra - c.ra), Math.sin(o.dec) * Math.cos(c.dec) - Math.cos(o.dec) * Math.sin(c.dec) * Math.cos(o.ra - c.ra));
  return { fraction: (1 + Math.cos(v)) / 2, phase: 0.5 + 0.5 * v * (w < 0 ? -1 : 1) / Math.PI };
}
const Th = (a) => {
  const l = a * 28;
  return l < 0.5 || l > 27.5 ? "new_moon" : l < 6.5 ? "waxing_crescent" : l < 7.5 ? "first_quarter" : l < 13.5 ? "waxing_gibbous" : l < 14.5 ? "full_moon" : l < 20.5 ? "waning_gibbous" : l < 21.5 ? "last_quarter" : "waning_crescent";
}, Vl = (a) => {
  const l = a == null ? void 0 : a.config;
  return l && Xt(l.latitude) && Xt(l.longitude) ? { lat: Number(l.latitude), lon: Number(l.longitude) } : null;
};
function yd(a, l) {
  var R, me, ae;
  const o = Vl(a), c = o ? Mh(l, o.lat, o.lon) : {}, f = (R = a == null ? void 0 : a.states) == null ? void 0 : R["sun.sun"], v = as(l).getTime(), w = (U) => {
    const K = U ? new Date(U) : null;
    return K && Number.isFinite(K.getTime()) && as(K).getTime() === v ? K : null;
  }, A = w((me = f == null ? void 0 : f.attributes) == null ? void 0 : me.next_rising), k = w((ae = f == null ? void 0 : f.attributes) == null ? void 0 : ae.next_setting);
  return A && (c.rise = A), k && (c.set = k), c;
}
function Lh(a) {
  var c;
  const l = (c = a == null ? void 0 : a.states) == null ? void 0 : c["sun.sun"];
  if ((l == null ? void 0 : l.state) === "below_horizon" || (l == null ? void 0 : l.state) === "above_horizon") return l.state === "below_horizon";
  const o = Vl(a);
  return o ? Vd(/* @__PURE__ */ new Date(), o.lat, o.lon) < 0 : !1;
}
const kr = (a) => !!a && a.state !== "unavailable" && a.state !== "unknown", os = (a, l) => {
  var c;
  const o = (c = a.entities) == null ? void 0 : c[l];
  return !o || !o.hidden && !o.entity_category;
}, fa = (a, l, o) => {
  var c, f;
  for (const v of l) {
    const w = (c = a.states) == null ? void 0 : c[v];
    if (!kr(w)) continue;
    const A = (f = w.attributes) == null ? void 0 : f[o];
    if (A != null && A !== "") return { stateObj: w, value: A };
  }
}, Ah = (a, l) => l.map((o) => {
  var c;
  return (c = a.states) == null ? void 0 : c[o];
}).find(kr), _h = (a, l, o) => l.map((c) => {
  var f;
  return (f = a.states) == null ? void 0 : f[c];
}).find((c) => {
  var f;
  return kr(c) && (((f = c.attributes) == null ? void 0 : f.supported_features) == null || Number(c.attributes.supported_features) & dh[o]);
});
function yr(a, l, o) {
  var v, w, A, k;
  const c = ((w = (v = a.config) == null ? void 0 : v.unit_system) == null ? void 0 : w.length) || "", f = (l == null ? void 0 : l.attributes) || {};
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
      return f.temperature_unit || ((k = (A = a.config) == null ? void 0 : A.unit_system) == null ? void 0 : k.temperature) || "";
  }
}
function Ol(a, l, o, c) {
  try {
    if (typeof a.formatEntityAttributeValueToParts == "function") {
      const [f, ...v] = a.formatEntityAttributeValueToParts(l, o, c).map((w) => w.value);
      return { number: f, unit: v.join("").trim() };
    }
  } catch {
  }
  return { number: fn(c, a.locale), unit: yr(a, l, o) };
}
function Eh(a, l, o, c) {
  try {
    if (typeof a.formatEntityAttributeValue == "function") return a.formatEntityAttributeValue(l, o, c);
  } catch {
  }
  const f = Ol(a, l, o, c);
  return (f.number + " " + f.unit).trim();
}
function wr(a, l) {
  var c;
  try {
    if (typeof a.formatEntityState == "function") return a.formatEntityState(l);
  } catch {
  }
  const o = (c = l.attributes) == null ? void 0 : c.unit_of_measurement;
  return th[l.state] || (o && Xt(l.state) ? fn(l.state, a.locale) + " " + o : l.state);
}
function qs(a, l) {
  var o;
  try {
    if (typeof a.formatEntityName == "function") return a.formatEntityName(l, { type: "entity" });
  } catch {
  }
  return ((o = l.attributes) == null ? void 0 : o.friendly_name) || l.entity_id;
}
const Dh = (a) => a < 3 ? "low" : a < 6 ? "moderate" : a < 8 ? "high" : a < 11 ? "very_high" : "extreme", Mc = (a) => uu.find(([, l]) => a <= l)[0];
function Rh(a, l) {
  if (l === "Beaufort") return Math.round(a);
  const o = l ? rh[l] : void 0;
  if (o === void 0) return;
  const c = sh.findIndex((f) => a * o < f);
  return c === -1 ? 12 : c;
}
const Sc = (a, l) => {
  const o = l ? lh[l] : void 0;
  return o === void 0 ? void 0 : a * o;
}, Cc = (a) => Object.keys(a.states || {}).find((l) => {
  var o, c;
  return l.startsWith("sensor.") && ((c = (o = a.entities) == null ? void 0 : o[l]) == null ? void 0 : c.platform) === "moon";
}), xd = (a) => Object.values(a.states || {}).filter((l) => {
  var o, c;
  return l.entity_id.startsWith("sensor.") && ((o = l.attributes) == null ? void 0 : o.device_class) === "precipitation" && ["total", "total_increasing"].includes(((c = l.attributes) == null ? void 0 : c.state_class) ?? "") && os(a, l.entity_id);
}).map((l) => l.entity_id).sort()[0];
function Nh(a) {
  var o;
  const l = {};
  for (const [c, f] of Object.entries(((o = a == null ? void 0 : a.core) == null ? void 0 : o.integration) ?? {})) {
    if (f && "integration_type" in f) {
      l[c] = f.categories;
      continue;
    }
    for (const [v, w] of Object.entries((f == null ? void 0 : f.integrations) ?? {})) l[v] = w == null ? void 0 : w.categories;
  }
  return l;
}
const ku = (a, l, o) => {
  var f, v, w;
  const c = (v = (f = a.entities) == null ? void 0 : f[o]) == null ? void 0 : v.platform;
  return !!c && !!((w = l[c]) != null && w.includes(ih));
};
function Bh(a, l) {
  const o = /* @__PURE__ */ new Map();
  return Object.values(a.states || {}).filter((c) => {
    var f;
    return c.entity_id.startsWith("sensor.") && jl.includes(((f = c.attributes) == null ? void 0 : f.device_class) ?? "") && os(a, c.entity_id) && ku(a, l, c.entity_id);
  }).sort((c, f) => c.entity_id.localeCompare(f.entity_id)).forEach((c) => {
    o.has(c.attributes.device_class) || o.set(c.attributes.device_class, c.entity_id);
  }), jl.map((c) => o.get(c)).filter(Boolean);
}
const Ph = (a, l) => Object.values(a.states || {}).filter((o) => {
  var c, f;
  return o.entity_id.startsWith("sensor.") && os(a, o.entity_id) && ku(a, l, o.entity_id) && (((f = (c = a.entities) == null ? void 0 : c[o.entity_id]) == null ? void 0 : f.translation_key) ?? o.entity_id).toLowerCase().includes("pollen");
}).map((o) => o.entity_id).sort();
function Tc(a, l, o) {
  const c = Math.max(l - a, 1e-6), f = o[o.length - 1], v = o.find((R) => c / R <= 4) ?? f * Math.ceil(c / (4 * f)), w = Math.floor(a / v) * v;
  let A = Math.ceil(l / v) * v;
  A === w && (A = w + v);
  const k = [];
  for (let R = w; R <= A + v / 1e3; R += v) k.push(R);
  return { min: w, max: A, ticks: k };
}
const js = (a, l, o) => {
  const c = (w) => [1, 3, 5].map((A) => parseInt(w.slice(A, A + 2), 16)), f = c(a), v = c(l);
  return "rgb(" + f.map((w, A) => Math.round(w + (v[A] - w) * o)).join(", ") + ")";
}, Ih = (a, l, o, c) => {
  const f = o * Math.abs(1 - 2 * c), v = c < 0.5 ? 0 : 1;
  return "M " + a + " " + (l - o) + " A " + o + " " + o + " 0 0 0 " + a + " " + (l + o) + " A " + f + " " + o + " 0 0 " + v + " " + a + " " + (l - o) + " Z";
}, ma = ({ icon: a, name: l, sub: o, visual: c, double: f, backdrop: v, cls: w }) => '<div class="wbCard wbSquare' + (f ? " wbDouble" : "") + (v ? " wbHasBackdrop" : "") + (w ? " " + w : "") + '">' + (v ? '<div class="wbBackdrop" aria-hidden="true">' + v + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + ch(a) + '</div><div class="wbText"><span class="wbName">' + Ve(l) + "</span>" + (o ? '<span class="wbSub">' + Ve(o) + "</span>" : "") + '</div></div><div class="wbVisual">' + c + "</div></div>", Mi = (a, l) => '<div class="wbValue"><span class="wbNum">' + Ve(a) + "</span>" + (l ? '<span class="wbUnitV">' + Ve(l) + "</span>" : "") + "</div>";
function Hh(a) {
  const l = a.max - a.min || 1, o = (A) => 100 - (Math.min(a.max, Math.max(a.min, A)) - a.min) / l * 100, c = (A) => A / zs * 100 + "%", f = (A) => A.map((k) => k.t + "," + o(k.v)).join(" "), v = a.kind === "line" ? a.points : [];
  let w = '<div class="wbDayChart"><div class="wbDcSun">' + a.sun.map((A) => '<span class="wbDcSunMark" style="left:' + c(A.t) + '">' + ns(A.rise ? wn.sunsetUp : wn.sunsetDown) + Ve(A.label) + "</span>").join("") + "</div>";
  return w += '<div class="wbDcY">' + a.ticks.map((A) => '<span style="top:' + o(A) + '%">' + Ve(a.format(A)) + "</span>").join("") + "</div>", w += '<div class="wbDcPlot"><svg viewBox="0 0 ' + zs + ' 100" preserveAspectRatio="none">' + a.night.map(([A, k]) => '<rect class="wbDcNight" x="' + A + '" y="0" width="' + (k - A) + '" height="100"></rect>').join("") + a.ticks.map((A) => '<line class="wbDcGrid" x1="0" x2="' + zs + '" y1="' + o(A) + '" y2="' + o(A) + '" vector-effect="non-scaling-stroke"></line>').join("") + a.sun.map((A) => '<line class="wbDcSunLine" x1="' + A.t + '" x2="' + A.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (a.past && a.past.length > 1 ? '<polyline class="wbDcPast" points="' + f(a.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (v.length > 1 ? '<polygon class="wbDcArea" points="' + v[0].t + ",100 " + f(v) + " " + v[v.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + f(v) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (a.now ? '<line class="wbDcNow" x1="' + a.now.t + '" x2="' + a.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (a.kind === "bars" ? a.points.filter((A) => A.v > 0).map((A) => '<i class="wbDcBar" style="left:' + c(A.t + 12) + ";width:" + c(36) + ";height:" + (100 - o(A.v)) + '%"></i>').join("") : "") + (a.now && a.kind === "line" ? '<i class="wbDcDot" style="left:' + c(a.now.t) + ";top:" + o(a.now.v) + '%"></i>' : "") + (a.peak ? '<span class="wbDcPeak" style="left:' + c(a.peak.t) + ";top:" + o(a.peak.v) + '%">' + Ve(a.peak.label) + "</span>" : "") + (a.note ? '<span class="wbDcNote">' + Ve(a.note) + "</span>" : "") + "</div>", w += '<div class="wbDcX">' + a.hours.map((A) => '<span class="' + (A.minor ? "wbMinor" : "") + '" style="left:' + c(A.t) + '">' + Ve(A.label) + "</span>").join("") + "</div></div>", w;
}
function Fh(a, l) {
  const w = a.map((G) => G.value), A = Math.min(...w), k = Math.max(...w), R = k - A || 1, me = (G) => G / (a.length - 1) * 300, ae = (G) => 18 + (1 - (G - A) / R) * 84, U = a.map((G, W) => me(W) + "," + ae(G.value)).join(" "), K = w.indexOf(k), ee = w.indexOf(A), Y = (G) => G === 0 ? "start" : G === a.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true"><polygon class="wbArea" points="0,102 ' + U + ' 300,102"></polygon><polyline class="wbLine" points="' + U + '" vector-effect="non-scaling-stroke"></polyline><text x="' + me(K) + '" y="' + (ae(k) - 6) + '" text-anchor="' + Y(K) + '">' + Ve(l(k)) + '</text><text x="' + me(ee) + '" y="' + (ae(A) + 14) + '" text-anchor="' + Y(ee) + '">' + Ve(l(A)) + '</text><text x="0" y="120" text-anchor="start">' + Ve(a[0].label) + '</text><text x="300" y="120" text-anchor="end">' + Ve(a[a.length - 1].label) + "</text></svg>";
}
function Oh(a, l) {
  const v = a.map((ae) => ae.value).concat([]), w = Math.min(...v) - 2, A = Math.max(...v) + 1, k = A - w || 1, R = 300 / a.length, me = (ae) => (1 - (ae - w) / k) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + a.map((ae, U) => '<rect class="wbBar' + (ae.now ? " wbNowBar" : "") + '" x="' + (U * R + R * 0.2) + '" y="' + me(ae.value) + '" width="' + R * 0.6 + '" height="' + (104 - me(ae.value)) + '" rx="6"></rect><text x="' + (U * R + R / 2) + '" y="120" text-anchor="middle">' + Ve(ae.label) + "</text>").join("") + "</svg>";
}
const Wh = [
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
], qh = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], Lc = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], jh = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let zh = 0;
function Ac(a, { getHass: l, entityId: o, style: c = "bitmap", motion: f = !0, cards: v, onOpen: w, hoursWindow: A } = {}) {
  var Zo, ba;
  const k = "wb" + ++zh + "-", R = document.createElement("div");
  R.className = "wb", R.dataset.style = c;
  const me = document.createElement("div");
  me.className = "wbBento", R.appendChild(me), a.replaceChildren(R);
  const ae = ["aq_tile", "pollen_tile", "radar_tile"], U = ["current", "hourly", "sun", "moon", "wind", "uv_index", "compared_to_average", "humidity", "pressure", "precipitation", "visibility", "air_quality", ...ae].filter((y) => !v || v.includes(y)), K = { current: "wide", hourly: "wide", compared_to_average: "double" }, ee = {};
  U.forEach((y) => {
    const S = document.createElement("div");
    S.className = "wbItem", S.dataset.card = y, S.dataset.size = K[y] || "tile", S.hidden = !0, me.appendChild(S), ee[y] = { el: S, html: null };
  });
  let Y = !1, G = null, W = 0, ce = -1, J = !1, ue = null;
  const $ = "homecore-next-view", B = { openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: (() => {
    try {
      return localStorage.getItem($);
    } catch {
      return null;
    }
  })() === "bars" ? "bars" : "strip", aq: void 0 }, oe = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let Ae = /* @__PURE__ */ new Date(), I = /* @__PURE__ */ new Date();
  const Ie = {}, z = {}, je = {}, M = (y) => {
    var S;
    return ((S = je[y]) == null ? void 0 : S.forecast) ?? [];
  }, _ = (y, S) => {
    var L;
    return je[S] ? (L = y.states) == null ? void 0 : L[je[S].entityId] : void 0;
  };
  function C(y) {
    const S = z[y];
    S && (S.unsub.then((L) => {
      typeof L == "function" && L();
    }).catch(() => {
    }), delete z[y]), je[y] && delete je[y];
  }
  function P(y, S, L) {
    var Z;
    if (typeof ((Z = y.connection) == null ? void 0 : Z.subscribeMessage) != "function") return;
    const O = { entityId: L };
    try {
      O.unsub = Promise.resolve(y.connection.subscribeMessage((X) => {
        Y || z[S] !== O || (X != null && X.forecast ? je[S] = { entityId: L, forecast: X.forecast } : delete je[S], Vn());
      }, { type: "weather/subscribe_forecast", forecast_type: S, entity_id: L }));
    } catch (X) {
      O.unsub = Promise.reject(X);
    }
    O.unsub.catch(() => {
      z[S] === O && delete z[S];
    }), z[S] = O;
  }
  function he(y, S) {
    var L;
    for (const O of ["daily", "hourly"]) {
      const Z = _h(y, S, O);
      ((L = z[O]) == null ? void 0 : L.entityId) !== (Z == null ? void 0 : Z.entity_id) && (C(O), Z && P(y, O, Z.entity_id));
    }
  }
  const q = (y, S, L, O = !1) => y.callWS({
    type: "history/history_during_period",
    start_time: L.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [S],
    minimal_response: O,
    no_attributes: O,
    significant_changes_only: !1
  });
  async function se(y, S) {
    var de, be, ge;
    const L = fa(y, S, "pressure");
    if (!L) return;
    const O = L.stateObj.entity_id, Z = await q(y, O, new Date(Date.now() - 3 * Ft)), X = (ge = (be = (de = Z == null ? void 0 : Z[O]) == null ? void 0 : de.find((He) => {
      var Ce;
      return typeof ((Ce = He.a) == null ? void 0 : Ce.pressure) == "number";
    })) == null ? void 0 : be.a) == null ? void 0 : ge.pressure;
    oe.pressureHistory = typeof X == "number" ? { entityId: O, value: X } : void 0;
  }
  async function fe(y, S) {
    var be;
    const L = fa(y, S, "temperature");
    if (!L) return;
    const O = L.stateObj.entity_id, Z = as(/* @__PURE__ */ new Date()), X = await q(y, O, new Date(Z.getTime() - $p * go)), de = /* @__PURE__ */ new Map();
    for (const ge of (X == null ? void 0 : X[O]) ?? []) {
      const He = (be = ge.a) == null ? void 0 : be.temperature, Ce = new Date((ge.lc ?? ge.lu) * 1e3);
      if (typeof He != "number" || Ce >= Z) continue;
      const Re = Ce.toDateString();
      de.set(Re, Math.max(de.get(Re) ?? -1 / 0, He));
    }
    oe.temperatureHistory = { entityId: O, dailyHighs: [...de.values()], days: [...de.entries()].map(([ge, He]) => ({ date: new Date(ge), high: He })) };
  }
  async function ye(y) {
    const S = xd(y);
    if (!S) return;
    const L = await y.callWS({ type: "recorder/statistic_during_period", statistic_id: S, rolling_window: { duration: { hours: 24 } } });
    oe.rain = { entityId: S, change: (L == null ? void 0 : L.change) ?? void 0 };
  }
  function $e() {
    const y = l == null ? void 0 : l();
    if (!y || Y || typeof y.callWS != "function") return;
    const S = Wn(y);
    oe.lastFetch = Date.now(), [se(y, S), fe(y, S), ye(y)].forEach((L) => L.then(() => Vn(), () => {
    }));
  }
  async function lt() {
    const y = l == null ? void 0 : l();
    if (!y) return;
    const S = fa(y, Wn(y), "temperature");
    if (!S) return;
    const L = S.stateObj.entity_id, O = as(/* @__PURE__ */ new Date());
    try {
      const Z = await q(y, L, O), X = (de) => ((Z == null ? void 0 : Z[L]) ?? []).map((be) => {
        var ge;
        return { time: be.lu * 1e3, value: (ge = be.a) == null ? void 0 : ge[de] };
      }).filter((be) => typeof be.value == "number");
      oe.todayHistory = { day: O.toDateString(), fetched: Date.now(), temperature: X("temperature"), humidity: X("humidity") }, Vn();
    } catch {
    }
  }
  async function At(y) {
    const S = l == null ? void 0 : l();
    if (S)
      try {
        const L = await q(S, y, new Date(Date.now() - 24 * Ft), !0), O = ((L == null ? void 0 : L[y]) ?? []).filter((X) => Xt(X.s)), Z = Math.max(1, Math.ceil(O.length / 48));
        oe.aqHistory = { entityId: y, points: O.filter((X, de) => de % Z === 0).map((X) => ({ label: Fo(new Date(X.lu * 1e3), S), value: Number(X.s) })) }, Vn();
      } catch {
      }
  }
  function Sn(y) {
    oe.categories === void 0 && (oe.categories = null, Promise.resolve().then(() => y.callWS({ type: "integration/descriptions" })).then((S) => {
      oe.categories = Nh(S);
    }, () => {
      oe.categories = {};
    }).then(() => Vn()));
  }
  function Wn(y) {
    var L;
    const S = Object.keys(y.states || {}).filter((O) => O.startsWith("weather.") && os(y, O)).sort();
    return o && ((L = y.states) != null && L[o]) ? [o, ...S.filter((O) => O !== o)] : S;
  }
  const vt = (y) => oe.categories ? { air: Bh(y, oe.categories), pollen: Ph(y, oe.categories) } : { air: [], pollen: [] };
  function Xe(y, S, L, O) {
    if (c === "line") return '<span class="wbWx wbS' + S + ' wbLineIcon" aria-hidden="true">' + bd(y, L || y === "clear-night") + "</span>";
    if (c === "smooth") {
      const Z = Ep(y, S === 90, L, k + "g-" + O);
      return '<span class="wbWx wbS' + S + " wb" + Z.k[0].toUpperCase() + Z.k.slice(1) + (Z.night ? " wbNight" : "") + '" aria-hidden="true">' + Z.svg + "</span>";
    }
    return '<span class="wbWx wbS' + S + '" aria-hidden="true"><canvas data-wb-wx="' + Ve(Gl(y, L)) + '" data-size="' + S + '"></canvas></span>';
  }
  const Tt = () => M("daily").filter((y) => y.templow != null).slice(0, jp);
  function Je(y, S) {
    const L = new Date(S.datetime), O = /* @__PURE__ */ new Date();
    return es(L, O) ? Ye.today : es(L, new Date(O.getTime() + go)) ? Ye.tomorrow : xc(L, y);
  }
  const yn = (y, S, L) => L === 0 ? Je(y, S) : xc(new Date(S.datetime), y);
  function _n(y, S) {
    var Ce, Re, Ne, Fe;
    const L = Ah(y, S);
    if (!L) return "";
    const O = Tt(), Z = B.openDay !== void 0 ? O[B.openDay] : void 0, X = fa(y, S, "temperature"), de = O[0], be = de && es(new Date(de.datetime), /* @__PURE__ */ new Date()), ge = ((Re = (Ce = y.config) == null ? void 0 : Ce.unit_system) == null ? void 0 : Re.temperature) || ((Ne = L.attributes) == null ? void 0 : Ne.temperature_unit) || "";
    let He = '<div class="wbCard wbWeather' + (Z ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (Z ? " inert" : "") + '><div class="wbNow">' + (w ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + Ve(Ye.openPage) + '">' : '<div class="wbCurrent">') + Xe(L.state, 90, Lh(y), "now") + '<div class="wbTempBlock">' + (X && Xt(X.value) ? '<div class="wbTemp"><span class="wbDeg">' + Ve(fn(Math.round(Number(X.value)), y.locale)) + '</span><span class="wbUnit">' + Ve(ge) + "</span></div>" : "") + '<div class="wbPlace">' + Ve(((Fe = y.config) == null ? void 0 : Fe.location_name) ?? "") + "</div></div>" + (w ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + Ve(wr(y, L)) + "</div>" + (be && de.templow != null ? '<div class="wbRange">' + Ve(On(Ye.range, { high: hn(y, de.temperature), low: hn(y, de.templow) })) + "</div>" : "") + "</div></div>";
    return He += yt(y), O.length && (He += '<div class="wbColumns" role="list">' + O.map((Te, Ge) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + Ge + '" data-wb-focus="col-' + Ge + '"><span class="wbDay">' + Ve(yn(y, Te, Ge)) + "</span>" + Xe(Te.condition ?? "cloudy", 60, !1, "col" + Ge) + '<span class="wbTemps"><span class="wbHi">' + Ve(hn(y, Te.temperature)) + '</span><span class="wbLo">' + Ve(hn(y, Te.templow)) + "</span></span></button>").join("") + "</div>", He += '<div class="wbHalves" role="list">' + O.map((Te, Ge) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + Ge + '" data-wb-focus="half-' + Ge + '">' + Xe(Te.condition ?? "cloudy", 40, !1, "half" + Ge) + '<span class="wbText"><span class="wbName">' + Ve(Je(y, Te)) + '</span><span class="wbSub">' + Ve(On(Ye.highLow, { high: hn(y, Te.temperature), low: hn(y, Te.templow) })) + "</span></span></button>").join("") + "</div>"), He + "</div>" + (Z ? Li(y, S, Z) : "") + "</div>";
  }
  const Mr = {
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
  }, dt = {
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
  function Ke(y) {
    const S = Date.now(), L = M("hourly").filter((Re) => new Date(Re.datetime).getTime() > S - Ft).slice(0, 13);
    if (L.length < 2) return "";
    const O = (Re) => Fo(new Date(Re.datetime), y), Z = (Re) => Mr[Re.condition] || "", X = (Re) => dt[Re.condition] || Re.condition;
    let de = Z(L[0]);
    if (!de) return "";
    let be = L[0], ge = 0;
    for (const Re of L.slice(1))
      ge === 2 || X(Re) === X(be) || !Z(Re) || (de += (ge ? " and " : ", ") + Z(Re) + " from " + O(Re), be = Re, ge++);
    const He = Number(L[0].temperature), Ce = L.filter((Re) => Xt(Re.temperature));
    if (Xt(He) && Ce.length) {
      const Re = Ce.reduce((Fe, Te) => Number(Te.temperature) < Number(Fe.temperature) ? Te : Fe), Ne = Ce.reduce((Fe, Te) => Number(Te.temperature) > Number(Fe.temperature) ? Te : Fe);
      He - Number(Re.temperature) >= 3 ? de += ", down to " + hn(y, Re.temperature) + " by " + O(Re) : Number(Ne.temperature) - He >= 3 && (de += ", up to " + hn(y, Ne.temperature) + " by " + O(Ne));
    }
    return de[0].toUpperCase() + de.slice(1) + ".";
  }
  const yt = (y) => {
    const S = Ke(y);
    return S ? '<div class="wbSummary"><p class="wbSummaryText">' + Ve(S) + "</p></div>" : "";
  };
  function bo(y) {
    const S = y.getTime(), L = Date.now() - Ft;
    return M("hourly").filter((O) => {
      const Z = new Date(O.datetime).getTime();
      return Z >= S && Z < S + go && Z > L;
    });
  }
  function Sr(y) {
    if (!y.length) return ["temperature"];
    const S = ["temperature"];
    return y.some((L) => L.precipitation != null || L.precipitation_probability != null) && S.push("precipitation"), y.some((L) => L.humidity != null) && S.push("humidity"), S;
  }
  function Li(y, S, L) {
    const O = as(new Date(L.datetime)), Z = bo(O), X = Sr(Z), de = X.includes(B.dayMode) ? B.dayMode : "temperature", be = (ge) => ge === "humidity" ? Ye.humidity : Ye.modes[ge];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + Xe(L.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + Ve(Je(y, L)) + '</span><span class="wbSub">' + Ve(On(Ye.highLow, { high: hn(y, L.temperature), low: hn(y, L.templow) })) + '</span></div><button class="wbBack" title="' + Ve(Ye.back) + '" data-wb="close-day" data-wb-focus="back-day">' + ns(wn.back) + "</button></div>" + (X.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + X.map((ge) => '<button aria-pressed="' + (ge === de) + '" data-wb="day-mode" data-mode="' + ge + '" data-wb-focus="day-mode-' + ge + '">' + Ve(be(ge)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Hh(Cn(y, S, O, Z, de)) + "</div></div>";
  }
  function Cn(y, S, L, O, Z) {
    var Tr;
    const X = L.getTime(), de = Date.now(), be = es(L, /* @__PURE__ */ new Date()), ge = (mt) => (mt - X) / no, He = (mt) => Fo(new Date(mt), y), Ce = (mt) => new Date(mt.datetime).getTime(), Re = [0, 3, 6, 9, 12, 15, 18, 21].map((mt) => ({ t: mt * 60, label: He(X + mt * Ft), minor: mt % 6 !== 0 })), { rise: Ne, set: Fe } = yd(y, L), Te = [], Ge = [];
    Ne && (Te.push({ t: ge(Ne.getTime()), label: He(Ne.getTime()), rise: !0 }), Ge.push([0, ge(Ne.getTime())])), Fe && (Te.push({ t: ge(Fe.getTime()), label: He(Fe.getTime()), rise: !1 }), Ge.push([ge(Fe.getTime()), zs]));
    const tt = Vl(y);
    !Ne && !Fe && tt && Vd(new Date(X + go / 2), tt.lat, tt.lon) < 0 && Ge.push([0, zs]);
    const Be = be ? ge(de) : void 0, et = { hours: Re, sun: Te, night: Ge };
    if (!O.length && !be) return { ...et, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Ye.noHourly };
    if (Z === "precipitation") {
      const mt = O.some((xn) => xn.precipitation_probability != null), cn = O.map((xn) => ({ t: ge(Ce(xn)), v: Number((mt ? xn.precipitation_probability : xn.precipitation) ?? 0) })), Qn = yr(y, _(y, "hourly"), "precipitation"), Ua = Math.max(0, ...cn.map((xn) => xn.v)), _a = mt ? 100 : Tc(0, Math.max(Ua, 1), [0.5, 1, 2, 5, 10]).max, Pi = (xn) => mt ? fn(xn, y.locale) + "%" : fn(xn, y.locale, { maximumFractionDigits: 1 }) + " " + Qn, Ko = cn.find((xn) => xn.v === Ua);
      return {
        ...et,
        kind: "bars",
        points: cn,
        min: 0,
        max: _a,
        ticks: [0, _a / 2, _a],
        format: Pi,
        now: Be !== void 0 ? { t: Be, v: 0 } : void 0,
        peak: Ko && Ua > 0 ? { t: Ko.t + 30, v: Ko.v, label: Pi(Ko.v) } : void 0,
        note: Ua > 0 ? void 0 : Ye.noRain
      };
    }
    const nt = Z === "humidity" ? "humidity" : "temperature", Yt = O.filter((mt) => mt[nt] != null && (!be || Ce(mt) >= de)).map((mt) => ({ t: ge(Ce(mt)), v: Number(mt[nt]) }));
    let Pe, Bt = [];
    if (Be !== void 0) {
      const mt = fa(y, S, nt);
      mt && Xt(mt.value) && (Pe = { t: Be, v: Number(mt.value) }, Yt.unshift(Pe)), Bt = (((Tr = oe.todayHistory) == null ? void 0 : Tr.day) === L.toDateString() ? oe.todayHistory[nt] : []).filter((Qn) => Qn.time <= de).map((Qn) => ({ t: Math.max(0, ge(Qn.time)), v: Qn.value })), Pe && Bt.length && Bt.push(Pe);
    }
    const qt = [...Bt, ...Yt];
    if (!qt.length) return { ...et, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Ye.noHourly };
    const ca = qt.map((mt) => mt.v), wa = Tc(Math.min(...ca), Math.max(...ca), nt === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    nt === "humidity" && (wa.min = Math.max(0, wa.min), wa.max = Math.min(100, wa.max), wa.ticks = wa.ticks.filter((mt) => mt >= 0 && mt <= 100));
    const Bi = nt === "humidity" ? (mt) => fn(mt, y.locale) + "%" : (mt) => hn(y, mt), ya = nt === "temperature" ? qt.reduce((mt, cn) => cn.v > mt.v ? cn : mt) : void 0;
    return { ...et, kind: "line", points: Yt, past: Bt, ...wa, format: Bi, now: Pe, peak: ya ? { ...ya, label: Bi(ya.v) } : void 0 };
  }
  function ht(y) {
    const S = ["temperature"];
    return y.some((L) => L.precipitation_probability != null || L.precipitation != null) && S.push("precipitation"), y.some((L) => L.wind_speed != null) && S.push("wind"), S;
  }
  function Ot(y, S, L = pc) {
    var X, de;
    const O = M("daily"), Z = [];
    for (let be = 0; be < L; be++) for (const ge of [!1, !0]) {
      const He = y.getTime() + (be * 24 + (ge ? 12 : 0)) * Ft, Ce = He + 12 * Ft, Re = {};
      S.forEach((Fe) => {
        const Te = new Date(Fe.datetime).getTime();
        Fe.condition && Te >= He && Te < Ce && (Re[Fe.condition] = (Re[Fe.condition] ?? 0) + (Zp.has(Fe.condition) ? 2 : 1));
      });
      let Ne = (X = Object.entries(Re).sort((Fe, Te) => Te[1] - Fe[1])[0]) == null ? void 0 : X[0];
      if (!Ne) {
        const Fe = new Date(He).toDateString();
        Ne = ((de = O.find((Te) => new Date(Te.datetime).toDateString() === Fe)) == null ? void 0 : de.condition) ?? "cloudy";
      }
      Z.push({ cond: ge && Ne === "sunny" ? "clear-night" : Ne, night: ge });
    }
    return Z;
  }
  function Cr(y, S, L) {
    const O = _(y, "hourly"), Z = S.precipitation_probability != null ? fn(S.precipitation_probability, y.locale) + "%" : "", X = S.precipitation ? fn(S.precipitation, y.locale) + " " + yr(y, O, "precipitation") : "";
    switch (L) {
      case "precipitation":
        return Z ? [Z, X] : [X || "–", ""];
      case "wind":
        return S.wind_speed != null ? [fn(Math.round(S.wind_speed), y.locale), yr(y, O, "wind_speed")] : ["–", ""];
      default:
        return [hn(y, S.temperature), (S.precipitation_probability ?? 0) >= 20 ? Z : ""];
    }
  }
  function zo(y, S, L) {
    const [O, Z] = hc[A == null ? void 0 : A()] || hc.day, X = [];
    for (let de = 0; de < 4 && X.length < 3; de++) {
      const be = /* @__PURE__ */ new Date();
      be.setHours(0, 0, 0, 0), be.setDate(be.getDate() + de);
      const ge = new Date(be);
      ge.setHours(Z, 0, 0, 0), be.setHours(O, 0, 0, 0), !(ge.getTime() <= L || !S.some((He) => {
        const Ce = new Date(He.datetime).getTime();
        return Ce >= be.getTime() && Ce <= ge.getTime();
      })) && X.push({ a: be.getTime(), b: ge.getTime(), label: Je(y, { datetime: be.toISOString() }) });
    }
    return X;
  }
  function xt(y, S, L, O, Z, X) {
    const de = (L.b - S.a) / Ft, be = (Be) => ((Be - S.a) / Ft).toFixed(3), ge = 80, He = 32, Ce = [];
    for (const Be = new Date(S.a - go); Be.getTime() < L.b + go; Be.setDate(Be.getDate() + 1)) {
      const { rise: et, set: nt } = yd(y, new Date(Be));
      et && nt && Ce.push({ rise: et.getTime(), set: nt.getTime() });
    }
    const Re = (Be, et) => ge - (ge - He) * Math.sin(Math.PI * (et - Be.rise) / (Be.set - Be.rise)), Ne = (Be) => !Ce.some((et) => Be >= et.rise && Be <= et.set);
    let Fe = "", Te = "", Ge = "";
    Ce.forEach((Be, et) => {
      const nt = [];
      for (let Pe = Be.rise; Pe <= Be.set; Pe += 15 * no) nt.push(be(Pe) + "," + Re(Be, Pe).toFixed(2));
      nt.push(be(Be.set) + "," + ge), Fe += '<polyline class="wbLineArc" points="' + nt.join(" ") + '"/>';
      const Yt = Ce[et + 1];
      Yt && (Fe += '<rect class="wbLineNight" x="' + be(Be.set) + '" y="0" width="' + ((Yt.rise - Be.set) / Ft).toFixed(3) + '" height="100"/>'), [[Be.rise, "↑"], [Be.set, "↓"]].forEach(([Pe, Bt]) => {
        Pe < S.a || Pe > L.b || (Te += '<line class="wbLineEdge" x1="' + be(Pe) + '" x2="' + be(Pe) + '" y1="0" y2="100"/>', Ge += '<span class="wbLineTime" style="left:' + X(Pe) + '">' + Bt + " " + Ve(Fo(new Date(Pe), y)) + "</span>");
      });
    });
    const tt = Ce.find((Be) => Z >= Be.rise && Z <= Be.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + de + ' 100" preserveAspectRatio="none" aria-hidden="true">' + Fe + Te + '<line class="wbLineHorizon" x1="0" x2="' + de + '" y1="' + ge + '" y2="' + ge + '"/></svg>' + Ge + (tt ? '<span class="wbLineNow" style="left:' + X(Z) + ";top:" + Re(tt, Z) + '%">' + bd("sunny", !1) + "</span>" : "") + O.filter((Be) => Be.entry && !Be.now).map((Be) => '<span class="wbLineGlyph' + Be.edge + '" style="left:' + X(Be.t) + '">' + bd(Be.entry.condition ?? "cloudy", Ne(Be.t)) + "</span>").join("");
  }
  function xe(y, S) {
    delete Ie.hourly;
    const L = B.hourlyView === "bars" ? "bars" : "strip", O = '<div class="wbHeader"><h2 class="wbTitle">' + Ve(L === "bars" ? Ye.nextDays : Ye.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + Ve(Ye.showAs) + '">' + ["strip", "bars"].map((Pe) => '<button aria-pressed="' + (Pe === L) + '" data-wb="hourly-view" data-view="' + Pe + '" data-wb-focus="hourly-view-' + Pe + '">' + Ve(Ye.views[Pe]) + "</button>").join("") + "</div></div>";
    if (L === "bars") return We(y, S, O);
    const Z = M("hourly"), X = Math.floor(Date.now() / no) * no, de = Z.filter((Pe) => new Date(Pe.datetime).getTime() > X - Ft);
    if (!de.length) return "";
    const be = ht(de), ge = be.includes(B.hourlyMode) ? B.hourlyMode : "temperature", He = zo(y, Z, X);
    if (!He.length) return "";
    const Ce = He[0], Re = He[He.length - 1], Ne = (Ce.b - Ce.a) / Ft, Fe = (Pe) => "calc(var(--wb-u) * " + ((Pe - Ce.a) / Ft).toFixed(3) + ")", Te = new Date(Ce.a);
    Te.setHours(6, 0, 0, 0), Te.getTime() > Ce.a && Te.setDate(Te.getDate() - 1);
    const Ge = Math.ceil((Re.b - Te.getTime()) / go);
    c !== "line" && (Ie.hourly = { segs: Ot(Te, Z, Ge), seed: Te.getDate(), columns: Ge });
    const tt = (Pe) => Pe === Ce.a ? " wbFirst" : Pe === Re.b ? " wbLast" : "", Be = [];
    for (let Pe = Ce.a; Pe < Re.b; ) {
      const Bt = new Date(Pe);
      Bt.setHours(24, 0, 0, 0);
      const qt = Math.min(Bt.getTime(), Re.b);
      Be.push({ a: Pe, b: qt, label: Je(y, { datetime: new Date(Pe).toISOString() }), page: He.find((ca) => ca.a >= Pe && ca.a < qt) || He.find((ca) => ca.a < qt && ca.b > Pe) }), Pe = qt;
    }
    const et = X > Ce.a && X < Re.b ? Math.floor((X - Ce.a) / (2 * Ft)) * 2 : 0, nt = [];
    for (let Pe = Ce.a; Pe <= Re.b; Pe += Ft) {
      const Bt = new Date(Pe), qt = tt(Pe);
      !qt && Bt.getHours() % Vp || !qt && (Math.abs(Ce.a - Pe) < 2 * Ft || Math.abs(Re.b - Pe) < 2 * Ft) || X >= Ce.a && Math.abs(Pe - X) < 1.5 * Ft && !qt || nt.push({ t: Pe, edge: qt, label: Fo(Bt, y), entry: Pe >= X - Ft ? Z.find((ca) => new Date(ca.datetime).getTime() === Pe) : void 0 });
    }
    X > Ce.a && X < Ce.b && nt.push({ t: X, edge: X - Ce.a < Ft ? " wbFirst" : Ce.b - X < Ft ? " wbLast" : "", label: Ye.now, entry: de[0], now: !0 });
    const Yt = (Pe, Bt) => '<span class="wbMark' + Pe.edge + (Pe.now ? " wbNowMark" : "") + '" style="left:' + Fe(Pe.t) + '">' + Bt + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + O + (be.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + be.map((Pe) => '<button aria-pressed="' + (Pe === ge) + '" data-wb="hourly-mode" data-mode="' + Pe + '" data-wb-focus="hourly-mode-' + Pe + '">' + Ve(Ye.modes[Pe]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + Ve(Ye.nextHours) + '" data-span="' + Ne + '" data-start="' + et + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Ne + ");width:calc(var(--wb-u) * " + (Re.b - Ce.a) / Ft + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((Re.b - Ce.a) / (2 * Ft)) + 1)].map((Pe, Bt) => '<i class="wbSnap" style="left:' + Fe(Ce.a + Bt * 2 * Ft) + '"></i>').join("") + '<div class="wbDays">' + Be.map((Pe, Bt) => {
      var qt;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((Pe.b - Pe.a) / Ft).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (Bt === 0 ? et : ((((qt = Pe.page) == null ? void 0 : qt.a) ?? Pe.a) - Ce.a) / Ft) + '" data-wb-focus="hours-day-' + Bt + '">' + Ve(Pe.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + nt.map((Pe) => Yt(Pe, Ve(Pe.label))).join("") + "</div>" + (c === "line" ? '<div class="wbSky wbLineSky">' + xt(y, Ce, Re, nt, X, Fe) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + Fe(Te.getTime()) + ";width:calc(var(--wb-u) * " + Ge * 24 + ')"><canvas data-wb-strip="hourly"' + (c === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (X > Ce.a ? '<i class="wbPast" style="width:' + Fe(Math.min(X, Re.b)) + '"></i><i class="wbNowLine" style="left:' + Fe(X) + '"></i>' : "") + Be.slice(1).map((Pe) => '<i class="wbMidnight" style="left:' + Fe(Pe.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + nt.map((Pe) => {
      if (!Pe.entry) return "";
      const [Bt, qt] = Cr(y, Pe.entry, ge);
      return Yt(Pe, '<span class="wbPrimaryV">' + Ve(Bt) + '</span><span class="wbSecondary">' + Ve(qt) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function Wt(y) {
    const S = Gp, L = S.findIndex(([ge]) => ge >= y);
    if (L <= 0) return "rgb(" + S[L < 0 ? S.length - 1 : 0][1].join(",") + ")";
    const [O, Z] = S[L - 1], [X, de] = S[L], be = (y - O) / (X - O);
    return "rgb(" + Z.map((ge, He) => Math.round(ge + (de[He] - ge) * be)).join(",") + ")";
  }
  function We(y, S, L) {
    var Fe;
    const O = M("daily").filter((Te) => Xt(Te.templow) && Xt(Te.temperature)).slice(0, 7);
    if (!O.length) return "";
    const Z = Math.min(...O.map((Te) => Number(Te.templow))), X = Math.max(...O.map((Te) => Number(Te.temperature))), de = Math.max(1, X - Z), be = (Te) => Math.max(0, Math.min(100, (Te - Z) / de * 100)).toFixed(2), ge = /F/.test(yr(y, _(y, "daily"), "temperature")), He = (Te) => ge ? (Te - 32) / 1.8 : Te, Ce = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((Te) => Wt(He(Z + Te * de)) + " " + Te * 100 + "%").join(",") + ")", Re = (Fe = fa(y, S, "temperature")) == null ? void 0 : Fe.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (ht(M("hourly").filter((Te) => new Date(Te.datetime).getTime() > Date.now() - Ft)).length > 1 ? " wbTabbed" : "") + '">' + L + '<div class="wbDayBars" role="list">' + O.map((Te, Ge) => {
      const tt = Je(y, Te), Be = es(new Date(Te.datetime), /* @__PURE__ */ new Date()), et = Number(Te.templow), nt = Number(Te.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + Ve(On(Ye.rangeRow, { day: tt, low: hn(y, et), high: hn(y, nt) })) + '"><span class="wbRangeDay">' + Ve(tt) + "</span>" + Xe(Te.condition, 40, !1, "r" + Ge) + '<span class="wbRangeLo">' + Ve(hn(y, et)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + Ce + ";clip-path:inset(0 " + (100 - be(nt)) + "% 0 " + be(et) + '% round 4px)"></i>' + (Be && Xt(Re) ? '<i class="wbRangeNow" style="left:' + be(Number(Re)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + Ve(hn(y, nt)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  function qn(y) {
    const S = Ae, { rise: L, set: O } = yd(y, S), Z = L && O ? Math.round((O.getTime() - L.getTime()) / no) : 0, X = Math.floor(Z / 60), de = Z % 60, be = L && O ? (S.getTime() - L.getTime()) / (O.getTime() - L.getTime()) : -1, ge = be >= 0 && be <= 1, He = Math.PI * (1 - Math.min(1, Math.max(0, be))), Ce = 100 + 74 * Math.cos(He), Re = 100 - 74 * Math.sin(He), Ne = ge ? Math.sin(Math.PI * be) : 0, Fe = ge ? js("#2e0a0d", "#43180a", Ne) : "#0e0507", Te = ge ? js("#7a1d12", "#8f400f", Ne) : "#1c0709", Ge = js("#f60c08", "#ff8f00", Ne), tt = js("#fd9b07", "#ffd84a", Ne), Be = ge ? js("#fd9b07", "#ffd84a", Ne) : "#6b3a2a", et = (Yt) => Yt ? Fo(Yt, y) : "–", nt = L && O ? new Date((L.getTime() + O.getTime()) / 2) : null;
    return ma({
      icon: wn.sunny,
      name: Ye.sun,
      sub: Z ? On(Ye.daylightShort, { hours: X, minutes: de }) : void 0,
      visual: '<div class="wbSunSky" style="background:linear-gradient(180deg, ' + Fe + ", " + Te + ");--wb-sun-line:" + Be + '"><svg viewBox="0 0 200 124" aria-hidden="true"><defs><radialGradient id="' + k + 'sun-glow"><stop offset="0" stop-color="' + Ge + '"></stop><stop offset="0.45" stop-color="' + Ge + '"></stop><stop offset="1" stop-color="' + tt + '"></stop></radialGradient><clipPath id="' + k + 'above-horizon"><rect x="0" y="0" width="200" height="100"></rect></clipPath></defs><path class="wbSunPath" d="M 26 100 A 74 74 0 0 1 174 100"></path><line class="wbHorizon" x1="0" x2="200" y1="100" y2="100"></line>' + (ge ? '<circle cx="' + Ce + '" cy="' + Re + '" r="14" fill="url(#' + k + 'sun-glow)" clip-path="url(#' + k + 'above-horizon)"></circle>' : "") + (nt ? '<text class="wbSunTime wbNoon" x="100" y="1">' + Ve(et(nt)) + "</text>" : "") + '<text class="wbSunTime" x="26" y="117">' + Ve(et(L)) + '</text><text class="wbSunTime" x="174" y="117">' + Ve(et(O)) + "</text></svg></div>"
    });
  }
  function Wa(y, S, L) {
    const O = (de) => k + "moon-" + de, Z = y > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + O("terminator") + ')" d="' + Ih(61, 61, 57.9, y) + '"' + (S ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", X = (de, be, ge, He, Ce, Re) => '<filter id="' + O(de) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + be + '" numOctaves="' + ge + '" seed="' + He + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Ne) => "<feFunc" + Ne + ' type="linear" slope="' + Ce + '" intercept="' + Re + '"></feFunc' + Ne + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + O("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + O("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + O("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + O("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + O("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + X("mottle", "0.045", 4, 3, 1.8, -0.4) + X("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + O("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + O("fill") + ')"></circle><g' + (L ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + O("soften") + ')">' + Wh.map(([de, be, ge, He, Ce, Re]) => '<ellipse cx="' + de + '" cy="' + be + '" rx="' + ge + '" ry="' + He + '" fill-opacity="' + Re + '" transform="rotate(' + Ce + " " + de + " " + be + ')"></ellipse>').join("") + "</g>" + qh.map(([de, be, ge]) => '<circle class="wbCrater" cx="' + de + '" cy="' + be + '" r="' + ge + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + O("glow") + ')">' + jh.map(([de, be]) => '<line x1="54.4" y1="95" x2="' + de + '" y2="' + be + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + O("glow") + ')">' + Lc.map(([de, be, ge]) => '<circle cx="' + de + '" cy="' + be + '" r="' + ge * 2 + '"></circle>').join("") + "</g>" + Lc.map(([de, be, ge]) => '<circle class="wbBrightCenter" cx="' + de + '" cy="' + be + '" r="' + ge + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + O("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + O("grain") + ')"></rect>' + Z + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function Ai(y) {
    const S = I, L = Vl(y), O = (L == null ? void 0 : L.lat) ?? 0, Z = Ch(S), X = Cc(y), de = X ? y.states[X] : void 0, be = kr(de) && ah.includes(de.state) ? de.state : Th(Z.phase), { rise: ge, set: He } = L ? Sh(S, L.lat, L.lon) : {}, Ce = Z.phase > 0.5 != O < 0, Re = fn(Math.round(Z.fraction * 100), y.locale) + "%", Ne = ge ?? He, Fe = Ne ? Fo(Ne, y) : void 0;
    return ma({
      icon: wn.night,
      name: Ye.moon,
      sub: Ye.phases[be],
      visual: '<div class="wbMoonBox">' + Wa(Z.fraction, Ce, O < 0) + '</div><div class="wbScaleNote wbMoonCaption"><span>' + (Fe ? Ve(On(ge ? Ye.moonriseAt : Ye.moonsetAt, { time: Fe })) : "") + "</span><span>" + Ve(On(Ye.lit, { illumination: Re })) + "</span></div>"
    });
  }
  function Ue(y, S) {
    var Te;
    const L = fa(y, S, "wind_speed");
    if (!L || !Xt(L.value)) return "";
    const O = fa(y, S, "wind_gust_speed"), Z = fa(y, S, "wind_bearing"), X = Z && Xt(Z.value) ? Number(Z.value) : void 0, de = Rh(Number(L.value), (Te = L.stateObj.attributes) == null ? void 0 : Te.wind_speed_unit), be = Ol(y, L.stateObj, "wind_speed", L.value), ge = X !== void 0 ? Ye.cardinal[nh[((X + 11.25) / 22.5 | 0) % 16]] : void 0, He = O ? Eh(y, O.stateObj, "wind_gust_speed", O.value) : void 0, Ce = [ge ? On(Ye.windFrom, { direction: ge }) : void 0, de !== void 0 ? de + " " + Ye.beaufort : void 0].filter(Boolean).join(" · ") || He, Re = (Ge, tt) => {
      const Be = (Ge - 90) * Math.PI / 180;
      return [100 + tt * Math.cos(Be), 100 + tt * Math.sin(Be)];
    }, Ne = Array.from({ length: 36 }, (Ge, tt) => tt * 10).map((Ge) => {
      const tt = Ge % 90 === 0, [Be, et] = Re(Ge, 97), [nt, Yt] = Re(Ge, tt ? 83 : 89);
      return '<line class="wbTick' + (tt ? " wbMajor" : "") + '" x1="' + Be + '" y1="' + et + '" x2="' + nt + '" y2="' + Yt + '"></line>';
    }).join(""), Fe = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([Ge, tt]) => {
      const [Be, et] = Re(tt, 64);
      return '<text class="wbLetter' + (Ge === "n" ? " wbNorth" : "") + '" x="' + Be + '" y="' + et + '">' + Ve(Ye.cardinal[Ge]) + "</text>";
    }).join("");
    return ma({ icon: wn.windy, name: Ye.wind, sub: Ce, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Ne + Fe + (X !== void 0 ? '<path class="wbMarker" transform="rotate(' + X + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + Ve(be.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + Ve(be.unit) + "</text></svg>" });
  }
  function it(y, S) {
    const L = fa(y, S, "uv_index");
    if (!L || !Xt(L.value)) return "";
    const O = Number(L.value), Z = Ye.uvLevel[Dh(O)], X = /* @__PURE__ */ new Date();
    X.setHours(23, 59, 59, 999);
    const de = M("hourly").filter((Ge) => Ge.uv_index != null && new Date(Ge.datetime) > /* @__PURE__ */ new Date() && new Date(Ge.datetime) <= X).reduce((Ge, tt) => !Ge || tt.uv_index > Ge.uv ? { uv: tt.uv_index, time: new Date(tt.datetime) } : Ge, void 0), be = 48, ge = 100, He = 130, Ce = (Ge) => -be + Math.min(Ge, 11) / 11 * 2 * be, Re = (Ge, tt) => {
      const Be = Ge * Math.PI / 180;
      return [ge + tt * Math.sin(Be), He - tt * Math.cos(Be)];
    }, Ne = (Ge, tt, Be) => {
      const [et, nt] = Re(Ce(Ge), Be), [Yt, Pe] = Re(Ce(tt), Be);
      return "M " + et + " " + nt + " A " + Be + " " + Be + " 0 0 1 " + Yt + " " + Pe;
    }, Te = '<svg class="wbVu" viewBox="0 0 200 134" preserveAspectRatio="xMidYMax meet" aria-hidden="true">' + [[0, 3, Rl.low], [3, 6, Rl.moderate], [6, 8, Rl.high], [8, 11, Rl.very_high]].map(([Ge, tt, Be]) => '<path class="wbVuZone" d="' + Ne(Ge, tt, 96) + '" style="stroke:' + Be + '"></path>').join("") + Array.from({ length: 21 }, (Ge, tt) => ({ angle: -be + tt * (2 * be / 20), major: tt % 2 === 0 })).map(({ angle: Ge, major: tt }) => {
      const [Be, et] = Re(Ge, 102), [nt, Yt] = Re(Ge, tt ? 114 : 108);
      return '<line class="wbVuTick' + (tt ? " wbMajor" : "") + '" x1="' + Be + '" y1="' + et + '" x2="' + nt + '" y2="' + Yt + '"></line>';
    }).join("") + '<text class="wbVuLabel" x="100" y="70.1">UV</text><g class="wbVuNeedle" style="--wb-angle:' + Ce(O) + 'deg"><line x1="' + ge + '" y1="' + He + '" x2="' + ge + '" y2="' + (He - 116) + '"></line></g><path class="wbVuHousing" d="M 64 134 L 64 128 A 36 36 0 0 1 136 128 L 136 134 Z"></path><text class="wbVuValue" x="100" y="114.9">' + Ve(fn(Math.round(O), y.locale)) + "</text></svg>";
    return ma({
      icon: wn.sunnyAlert,
      name: Ye.metrics.uv_index,
      sub: de && de.uv > O ? On(Ye.uvPeak, { level: Z, uv_index: fn(Math.round(de.uv), y.locale), time: Fo(de.time, y) }) : Z,
      visual: Te
    });
  }
  function en(y) {
    const S = M("daily")[0], L = oe.temperatureHistory;
    if (!S || new Date(S.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !Xt(S.temperature) || !L || L.dailyHighs.length < Xp) return "";
    const O = Number(S.temperature), Z = L.dailyHighs.reduce((nt, Yt) => nt + Yt, 0) / L.dailyHighs.length, X = Math.round(O - Z) || 0, de = X > 0 ? "above" : X < 0 ? "below" : "same", be = [...L.days, { date: /* @__PURE__ */ new Date(), high: O, today: !0 }], ge = 220, He = 158, Ce = 22, Re = 20, Ne = be.map((nt) => nt.high).concat(Z), Fe = Math.min(...Ne) - 3, Te = Math.max(...Ne) + 1, Ge = (nt) => Ce + (1 - (nt - Fe) / (Te - Fe)) * (He - Ce - Re), tt = ge / be.length, Be = Math.min(18, tt * 0.6), et = '<svg class="wbCompareBars" viewBox="0 0 ' + ge + " " + He + '" aria-hidden="true"><line class="wbAvgLine" x1="0" x2="' + ge + '" y1="' + Ge(Z) + '" y2="' + Ge(Z) + '"></line>' + be.map((nt, Yt) => {
      const Pe = Yt * tt + tt / 2, Bt = Ge(nt.high), qt = nt.today ? " wbToday" : "";
      return '<rect class="wbAvgBar' + qt + '" x="' + (Pe - Be / 2) + '" y="' + Bt + '" width="' + Be + '" height="' + (He - Re - Bt) + '" rx="5"></rect><text class="wbAvgValue' + qt + '" x="' + Pe + '" y="' + (Bt - 6) + '">' + Ve(hn(y, nt.high)) + '</text><text class="wbAvgDay' + qt + '" x="' + Pe + '" y="' + (He - 4) + '">' + Ve(fh(nt.date, y)) + "</text>";
    }).join("") + "</svg>";
    return ma({
      icon: wn.chartLine,
      name: Ye.metrics.compared_to_average,
      double: !0,
      sub: On(Ye.highsLastDays, { days: L.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (X > 0 ? "+" : "") + Ve(hn(y, X)) + '</div><div class="wbCompareWords">' + Ve(Ye.average[de]) + '</div><div class="wbCompareTemps">' + Ve(On(Ye.todayVsAverage, { today: hn(y, O), average: hn(y, Z) })) + "</div></div>" + et + "</div>"
    });
  }
  function wo(y, S) {
    const L = fa(y, S, "humidity");
    if (!L || !Xt(L.value)) return "";
    const O = fa(y, S, "dew_point"), Z = Math.max(0, Math.min(100, Number(L.value)));
    return ma({
      icon: wn.waterPercent,
      name: Ye.metrics.humidity,
      sub: O && Xt(O.value) ? On(Ye.dewPoint, { dew_point: hn(y, O.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + Z + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + Mi(fn(Math.round(Number(L.value)), y.locale), "%") + "</div>"
    });
  }
  function jn(y, S) {
    var He, Ce;
    const L = fa(y, S, "pressure");
    if (!L || !Xt(L.value)) return "";
    const O = Number(L.value), Z = (He = L.stateObj.attributes) == null ? void 0 : He.pressure_unit, X = Sc(O, Z), de = ((Ce = oe.pressureHistory) == null ? void 0 : Ce.entityId) === L.stateObj.entity_id ? Sc(oe.pressureHistory.value, Z) : void 0;
    let be;
    if (X !== void 0 && de !== void 0) {
      const Re = X - de;
      be = Re >= gc ? "rising" : Re <= -gc ? "falling" : "steady";
    }
    const ge = Ol(y, L.stateObj, "pressure", Math.round(O));
    return ma({
      icon: wn.gauge,
      name: Ye.metrics.pressure,
      sub: be ? Ye.pressure[be] : void 0,
      visual: '<div class="wbTapeRow"><div class="wbTapeValue">' + Mi(ge.number) + '<span class="wbTapeUnit">' + Ve(ge.unit) + "</span></div>" + (X !== void 0 ? tn(y, X) : "") + "</div>"
    });
  }
  function tn(y, S) {
    const Z = Math.floor(S) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (X, de) => Z + de).map((X) => {
      const de = 100 - (X - S) * 9;
      if (de < 22 || de > 178) return "";
      const be = X % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(de - 100) / 100) + '"><line class="wbTapeTick" x1="' + (be ? 2 : 8) + '" x2="26" y1="' + de + '" y2="' + de + '"></line>' + (be ? '<text class="wbTapeLabel" x="33" y="' + de + '">' + Ve(fn(X, y.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + Ve(Ye.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + Ve(Ye.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function Vo(y) {
    var ge, He;
    const S = xd(y), L = S ? y.states[S] : void 0;
    if (!L || ((ge = oe.rain) == null ? void 0 : ge.entityId) !== S || !Xt(oe.rain.change)) return "";
    const O = ((He = L.attributes) == null ? void 0 : He.unit_of_measurement) ?? "", Z = _(y, "hourly"), X = Date.now() + go, de = M("hourly").filter((Ce) => Ce.precipitation != null && new Date(Ce.datetime).getTime() <= X), be = de.reduce((Ce, Re) => Ce + Number(Re.precipitation), 0);
    return ma({
      icon: wn.rainy,
      name: Ye.metrics.precipitation,
      sub: Z && de.length ? On(Ye.rainExpected, { amount: fn(be, y.locale, { maximumFractionDigits: 1 }) + " " + yr(y, Z, "precipitation") }) : Ye.rainLast24h,
      visual: Mi(fn(oe.rain.change, y.locale, { maximumFractionDigits: 1 }), O) + (de.length > 1 ? Oh(de.map((Ce) => ({ label: "", value: Number(Ce.precipitation) }))) : "")
    });
  }
  function dn(y, S) {
    const L = fa(y, S, "visibility");
    if (!L || !Xt(L.value)) return "";
    const O = Ol(y, L.stateObj, "visibility", L.value), Z = Wp(Number(L.value), yr(y, L.stateObj, "visibility"));
    return ma({
      icon: wn.eyeOutline,
      name: Ye.metrics.visibility,
      sub: Ye.visibilityLevel[qp(Z)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + Z + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + Ve(qa(y, Z)) + '</div><div class="wbSeaValue">' + Mi(O.number, O.unit) + "</div></div>"
    });
  }
  function qa(y, S) {
    var X;
    const L = Op((X = y.config) == null ? void 0 : X.country, S);
    if (L) return On(Ye.visibilityLandmarks, { from: L.from, to: L.to });
    const O = S / eh * 60;
    if (O < 60) {
      const de = O < 5 ? Math.max(1, Math.round(O)) : 5 * Math.round(O / 5);
      if (de < 60) return On(Ye.walkMinutes, { minutes: fn(de, y.locale) });
    }
    const Z = Math.max(1, Math.round(O / 30) / 2);
    return Z < 8 ? On(Ye.walkHours, { hours: fn(Z, y.locale) }) : Ye.walkDay;
  }
  function ja(y) {
    oe.categories === void 0 && Sn(y);
    const S = vt(y), L = (ge) => ge.map((He) => y.states[He]).filter(kr), O = L(S.air), Z = L(S.pollen);
    if (!O.length && !Z.length) return "";
    const X = [...O, ...Z], de = (ge) => Z.includes(ge) ? wn.flower : wn.airFilter, be = X.find((ge) => ge.entity_id === B.aq);
    return be ? yo(y, be, de(be)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + Ve(Ye.airQuality) + '</h2></div><div class="wbAqTiles">' + X.map((ge) => '<button class="wbTile" data-wb="aq-open" data-entity="' + Ve(ge.entity_id) + '"><span class="wbChip">' + ns(de(ge)) + '</span><span class="wbText"><span class="wbName">' + Ve(qs(y, ge)) + '</span><span class="wbSub">' + Ve(wr(y, ge)) + "</span></span></button>").join("") + "</div></div>";
  }
  function yo(y, S, L) {
    var Ce, Re, Ne;
    const O = ((Ce = S.attributes) == null ? void 0 : Ce.unit_of_measurement) ?? "", Z = ((Re = S.attributes) == null ? void 0 : Re.device_class) === "pm25" && O === vc && Xt(S.state), X = Number(S.state), de = Z ? Mc(X) : void 0, be = ((Ne = oe.aqHistory) == null ? void 0 : Ne.entityId) === S.entity_id ? oe.aqHistory.points : void 0, ge = (Fe) => Math.min(100, Math.max(0, Fe / Nl * 100));
    let He;
    if (be && be.length > 1) He = Fh(be, (Fe) => (fn(Fe, y.locale, { maximumFractionDigits: 1 }) + " " + O).trim());
    else if (de) {
      let Fe = 0;
      const Te = uu.map(([Ge, tt]) => {
        const Be = ge(Math.min(tt, Nl)), et = oh[Ge] + " " + Fe + "% " + Be + "%";
        return Fe = Be, et;
      });
      He = '<div class="wbScale" role="meter" aria-label="' + Ve(Ye.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + Nl + '" aria-valuenow="' + X + '" style="background:linear-gradient(to right, ' + Te.join(", ") + ')"><i style="left:' + ge(X) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + Nl + " " + vc + "</span></div>";
    } else He = '<span class="wbGraphNote"><span>' + Ve(wr(y, S)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + ns(L) + '</span><span class="wbText"><span class="wbName">' + Ve(qs(y, S)) + '</span><span class="wbSub">' + Ve(wr(y, S)) + (de ? " · " + Ve(Ye.aqLevel[de]) : "") + '</span></span><button class="wbBack" title="' + Ve(Ye.back) + '" data-wb="aq-close">' + ns(wn.back) + '</button></div><div class="wbGraph">' + He + "</div></div></div>";
  }
  const zt = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, za = (y) => y <= 50 ? "Good" : y <= 100 ? "Moderate" : y <= 150 ? "Unhealthy for some" : y <= 200 ? "Unhealthy" : y <= 300 ? "Very unhealthy" : "Hazardous";
  function zn(y) {
    const S = /* @__PURE__ */ new Map();
    return Object.values(y.states || {}).filter((L) => {
      var O;
      return L.entity_id.startsWith("sensor.") && jl.includes(((O = L.attributes) == null ? void 0 : O.device_class) ?? "") && kr(L) && os(y, L.entity_id);
    }).sort((L, O) => L.entity_id.localeCompare(O.entity_id)).forEach((L) => {
      S.has(L.attributes.device_class) || S.set(L.attributes.device_class, L);
    }), jl.map((L) => S.get(L)).filter(Boolean);
  }
  const Va = (y) => Object.values(y.states || {}).filter((S) => {
    var L, O;
    return S.entity_id.startsWith("sensor.") && kr(S) && os(y, S.entity_id) && (((O = (L = y.entities) == null ? void 0 : L[S.entity_id]) == null ? void 0 : O.translation_key) ?? S.entity_id).toLowerCase().includes("pollen");
  }), oo = ["none", "very_low", "low", "moderate", "high", "very_high"], an = (y) => Xt(y.state) ? Number(y.state) : oo.indexOf(String(y.state).toLowerCase().replace(/ /g, "_")), Ga = (y) => {
    const S = String(y).replace(/_/g, " ");
    return S[0].toUpperCase() + S.slice(1);
  }, la = (y) => y.length ? '<div class="wbBaseRows">' + y.map(([S, L]) => '<span class="wbBaseRow"><span>' + Ve(S) + "</span><span>" + Ve(L) + "</span></span>").join("") + "</div>" : "";
  function Go(y) {
    const S = zn(y), L = S[0];
    if (!L) return ma({ icon: wn.airFilter, name: Ye.airQuality, sub: Ye.noAir, visual: Mi("–", ""), cls: "wbBase" });
    const O = L.attributes.device_class, Z = Number(L.state), X = Xt(L.state), de = O === "aqi" && X ? za(Z) : O === "pm25" && X ? zt[Mc(Z)] : wr(y, L);
    return ma({
      icon: wn.airFilter,
      name: Ye.airQuality,
      sub: de,
      cls: "wbBase",
      visual: Mi(X ? fn(Math.round(Z), y.locale) : String(L.state), O === "aqi" ? "AQI" : L.attributes.unit_of_measurement || "") + la(S.slice(1, 3).map((be) => [qs(y, be), wr(y, be)]))
    });
  }
  function _i(y) {
    const S = Va(y).sort((Z, X) => an(X) - an(Z));
    if (!S.length) return ma({ icon: wn.flower, name: Ye.pollen, sub: Ye.noPollen, visual: Mi("–", ""), cls: "wbBase" });
    const L = S[0], O = (Z) => Xt(Z.state) ? wr(y, Z) : Ga(Z.state);
    return ma({
      icon: wn.flower,
      name: Ye.pollen,
      sub: qs(y, L) + " · " + O(L),
      cls: "wbBase",
      visual: Mi(O(L), "") + la(S.slice(1, 3).map((Z) => [qs(y, Z), O(Z)]))
    });
  }
  function Ei(y) {
    const S = Date.now(), L = M("hourly").filter((X) => {
      const de = new Date(X.datetime).getTime();
      return de > S - Ft && de < S + 12 * Ft;
    }), O = L.find((X) => (X.precipitation_probability ?? 0) >= 50 || (X.precipitation ?? 0) >= 0.2), Z = O ? On(Ye.rainFrom, { time: Fo(new Date(Math.max(S, new Date(O.datetime).getTime())), y) }) : L.length ? Ye.noRain12 : void 0;
    return ma({ icon: wn.radar, name: Ye.rainRadar, sub: Z, cls: "wbBase", visual: '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i></div>' });
  }
  const rs = {
    current: _n,
    hourly: xe,
    sun: qn,
    moon: Ai,
    wind: Ue,
    uv_index: it,
    compared_to_average: en,
    humidity: wo,
    pressure: jn,
    precipitation: Vo,
    visibility: dn,
    air_quality: ja,
    aq_tile: Go,
    pollen_tile: _i,
    radar_tile: Ei
  };
  function kt(y) {
    var He, Ce, Re;
    const S = l == null ? void 0 : l();
    if (!S || Y) return;
    const L = Wn(S);
    he(S, L), oe.lastFetch || $e();
    const O = vt(S), Z = Cc(S), X = xd(S), de = [
      ...L.map((Ne) => S.states[Ne]),
      S.states["sun.sun"],
      Z && S.states[Z],
      X && S.states[X],
      ...O.air.map((Ne) => S.states[Ne]),
      ...O.pollen.map((Ne) => S.states[Ne]),
      ...U.some((Ne) => ae.includes(Ne)) ? [...zn(S), ...Va(S)] : [],
      S.locale,
      S.config,
      S.entities,
      Math.floor(Date.now() / no)
    ];
    if (!y && G && de.length === G.length && de.every((Ne, Fe) => Ne === G[Fe])) return;
    G = de;
    const be = R.getRootNode(), ge = be.activeElement || document.activeElement;
    for (const Ne of U) {
      const Fe = ee[Ne];
      let Te = "";
      try {
        Te = rs[Ne](S, L) || "";
      } catch {
        Te = "";
      }
      if (Te === Fe.html) continue;
      const Ge = ge && Fe.el.contains(ge) ? (He = ge.dataset) == null ? void 0 : He.wbFocus : void 0, tt = Fe.el.querySelector(".wbStripScroll"), Be = tt ? tt.scrollLeft : null;
      Fe.html = Te, Fe.el.hidden = !Te, Fe.el.innerHTML = Te;
      const et = Fe.el.querySelector(".wbStripScroll");
      et && Be != null ? et.scrollTo({ left: Be }) : et != null && et.dataset.start && et.scrollTo({ left: Number(et.dataset.start) * et.clientWidth / Number(et.dataset.span) }), Ge && !ue && ((Ce = Fe.el.querySelector('[data-wb-focus="' + Ge + '"]')) == null || Ce.focus());
    }
    ue && ((Re = R.querySelector('[data-wb-focus="' + ue + '"]')) == null || Re.focus(), ue = null), St(performance.now());
  }
  function Vn() {
    J || Y || (J = !0, queueMicrotask(() => {
      J = !1, kt(!0);
    }));
  }
  function Di() {
    const y = getComputedStyle(R), S = (de) => y.getPropertyValue(de).trim(), L = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([de, be]) => {
      S(be) && (L[de] = S(be));
    });
    const O = S("--color-text-primary") || "#f1f1f1", Z = S("--color-bg-card") || "#222222", X = !!R.closest(".light");
    return { colors: { ...sa, ...L }, ink: X ? O : Z, paper: X ? Z : O };
  }
  const Ri = (y, S) => {
    var L;
    y.width !== S.w && (y.width = S.w), y.height !== S.h && (y.height = S.h), (L = y.getContext("2d")) == null || L.putImageData(new ImageData(S.data, S.w, S.h), 0, 0);
  }, En = () => f && !uh();
  function Rt(y, S) {
    R.querySelectorAll("canvas[data-wb-strip]").forEach((L) => on(L, Ie[L.dataset.wbStrip], y, S));
  }
  function on(y, S, L, O) {
    if (!S || !y.getClientRects().length) return;
    const Z = y.clientWidth, X = y.clientHeight;
    if (!Z || !X) return;
    const de = { width: Z, height: X, columns: S.columns || pc, colors: O.colors, clock: L, ambient: En(), seed: S.seed, soft: 1.5 };
    if (c === "smooth") {
      const be = Math.min(2, window.devicePixelRatio || 1), ge = Math.round(Z * be), He = Math.round(X * be);
      y.width !== ge && (y.width = ge), y.height !== He && (y.height = He);
      const Ce = y.getContext("2d");
      if (!Ce) return;
      Ce.setTransform(be, 0, 0, be, 0, 0), xp(Ce, S.segs, de);
    } else Ri(y, yp(S.segs, { ...de, px: 2, oneBit: c === "onebit", ink: O.ink, paper: O.paper }));
  }
  function St(y) {
    if (Y) return;
    const S = Di();
    if (c !== "smooth") {
      const L = En();
      R.querySelectorAll("canvas[data-wb-wx]").forEach((O) => {
        O.getClientRects().length && Ri(O, Qc(Bd(O.dataset.wbWx, S.colors), { size: Number(O.dataset.size) || 40, px: 2, oneBit: c === "onebit", colors: S.colors, ink: S.ink, paper: S.paper, clock: y, idle: L }));
      });
    }
    R.querySelectorAll("canvas[data-wb-sea]").forEach((L) => {
      const O = L.clientWidth, Z = L.clientHeight, X = Number(L.dataset.wbSea), de = O + "x" + Z + ":" + X + ":" + S.colors.skyClearDay;
      !O || !Z || !(X > 0) || L.dataset.painted === de || (L.dataset.painted = de, Ri(L, Ip(O, Z, X, S.colors)));
    }), Rt(y, S);
  }
  function io(y) {
    if (W = 0, !(Y || !En())) {
      if (!document.hidden)
        if (c === "smooth") Rt(y, Di());
        else {
          const S = Math.floor(y / 100);
          S !== ce && (ce = S, St(y));
        }
      W = requestAnimationFrame(io);
    }
  }
  function Aa() {
    R.classList.toggle("wbMotion", En()), !W && !Y && En() && (W = requestAnimationFrame(io));
  }
  function xo(y) {
    var L, O;
    const S = (O = (L = y.target).closest) == null ? void 0 : O.call(L, "[data-wb]");
    if (!(!S || !R.contains(S))) {
      switch (S.dataset.wb) {
        case "day": {
          B.openDay = Number(S.dataset.index), B.opener = S.dataset.wbFocus, ue = "back-day";
          const Z = Tt()[B.openDay], X = !oe.todayHistory || oe.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - oe.todayHistory.fetched > zp;
          Z && es(new Date(Z.datetime), /* @__PURE__ */ new Date()) && X && lt();
          break;
        }
        case "close-day":
          B.openDay = void 0, ue = B.opener, B.opener = void 0;
          break;
        case "open-page":
          w == null || w();
          return;
        case "day-mode":
          B.dayMode = S.dataset.mode;
          break;
        case "hourly-mode":
          B.hourlyMode = S.dataset.mode;
          break;
        case "hourly-view":
          B.hourlyView = S.dataset.view;
          try {
            localStorage.setItem($, B.hourlyView);
          } catch {
          }
          break;
        case "hours-day": {
          const Z = R.querySelector(".wbStripScroll");
          Z && Z.scrollTo({ left: Number(S.dataset.hours) * Z.clientWidth / Number(Z.dataset.span), behavior: "smooth" });
          return;
        }
        case "aq-open":
          B.aq = S.dataset.entity, At(B.aq);
          break;
        case "aq-close":
          B.aq = void 0;
          break;
        default:
          return;
      }
      kt(!0);
    }
  }
  function Dn(y) {
    var S, L;
    y.key === "Escape" && B.openDay !== void 0 && ((L = (S = y.target).closest) != null && L.call(S, '[data-wb-open="day"]')) && (B.openDay = void 0, ue = B.opener, B.opener = void 0, kt(!0));
  }
  let Rn = null;
  function Uo(y) {
    var L, O;
    const S = (O = (L = y.target).closest) == null ? void 0 : O.call(L, ".wbStripScroll");
    !S || y.button !== 0 || (Rn = { startX: y.pageX, left: S.scrollLeft, moved: !1 }, S.classList.add("wbHeld"), window.addEventListener("mousemove", Yo), window.addEventListener("mouseup", va, { once: !0 }));
  }
  function Yo(y) {
    const S = R.querySelector(".wbStripScroll");
    if (!Rn || !S) return;
    const L = y.pageX - Rn.startX;
    !Rn.moved && Math.abs(L) > 1 && (Rn.moved = !0, S.classList.add("wbDragging")), S.scrollLeft = Rn.left - L;
  }
  function va() {
    Rn = null, window.removeEventListener("mousemove", Yo);
    const y = R.querySelector(".wbStripScroll");
    if (!y) return;
    y.classList.remove("wbDragging", "wbHeld");
    const S = [...y.querySelectorAll(".wbSnap")];
    if (S.length) {
      const L = S.reduce((O, Z) => Math.abs(Z.offsetLeft - y.scrollLeft) < Math.abs(O.offsetLeft - y.scrollLeft) ? Z : O);
      y.scrollTo({ left: L.offsetLeft, behavior: "smooth" });
    }
  }
  R.addEventListener("click", xo), R.addEventListener("keydown", Dn), R.addEventListener("mousedown", Uo);
  const da = typeof ResizeObserver == "function" ? new ResizeObserver(() => St(performance.now())) : null;
  da == null || da.observe(R);
  const Jn = (Zo = window.matchMedia) == null ? void 0 : Zo.call(window, "(prefers-reduced-motion: reduce)"), Ni = () => {
    Aa(), St(performance.now());
  };
  (ba = Jn == null ? void 0 : Jn.addEventListener) == null || ba.call(Jn, "change", Ni);
  const ko = [
    setInterval(() => {
      Ae = /* @__PURE__ */ new Date(), kt(!0);
    }, Jp),
    setInterval(() => {
      I = /* @__PURE__ */ new Date(), kt(!0);
    }, Qp),
    setInterval($e, Kp)
  ];
  return kt(!0), Aa(), {
    update() {
      kt(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      kt(!0);
    },
    setStyle(y) {
      !y || y === c || (c = y, R.dataset.style = c, kt(!0), Aa());
    },
    destroy() {
      var y;
      Y = !0, ko.forEach(clearInterval), W && cancelAnimationFrame(W), W = 0, da == null || da.disconnect(), (y = Jn == null ? void 0 : Jn.removeEventListener) == null || y.call(Jn, "change", Ni), va(), R.removeEventListener("click", xo), R.removeEventListener("keydown", Dn), R.removeEventListener("mousedown", Uo), ["daily", "hourly"].forEach(C), R.remove();
    }
  };
}
const Vs = "#E1E1E1", _c = "#F7F4F0", kd = "#03a9f4", Ct = 14, Dt = 172;
let Vh = 0;
const Jt = (a) => Math.round(a * 100) / 100, vo = (a, l, o) => Math.max(l, Math.min(o, a)), jo = (a, l, o, c, f, v) => '<rect x="' + Jt(a) + '" y="' + Jt(l) + '" width="' + Jt(o) + '" height="' + Jt(c) + '" fill="' + f + '"' + (v != null ? ' opacity="' + v + '"' : "") + "/>", Md = (a) => a.map((l, o) => (o ? "L" : "M") + Jt(l[0]) + " " + Jt(l[1])).join("");
function Sd(a) {
  const l = (a == null ? void 0 : a.attributes) || {};
  return l.device_class === "curtain" ? "curtain" : l.device_class === "blind" || l.current_tilt_position != null ? "venetian" : "blind";
}
const Si = [
  [2, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]],
  [6.5, ["#0B0F1C", "#2E7FD6", "#F2743B", "#F1B6C8", 0.95]],
  [9.5, ["#8FC4EC", "#4DA3E8", "#F4FAFF", "#2F7FCF", 0.7]],
  [13, ["#9ED3F6", "#3F97E6", "#FFFFFF", "#2B86D9", 0.65]],
  [17, ["#9FC2E4", "#4A8ED4", "#FFD9B8", "#5E8FD6", 0.75]],
  [19, ["#4B5E86", "#3B86E0", "#FF6A3D", "#B07CE8", 0.95]],
  [21.5, ["#1A2140", "#1F3F7A", "#B4506E", "#3E59A6", 0.8]],
  [26, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]]
];
function Gh(a) {
  const l = a < 2 ? a + 24 : a;
  let o = Si[0], c = Si[Si.length - 1];
  for (let A = 0; A < Si.length - 1; A++) if (l >= Si[A][0] && l <= Si[A + 1][0]) {
    o = Si[A], c = Si[A + 1];
    break;
  }
  const f = (l - o[0]) / (c[0] - o[0]), v = f * f * (3 - 2 * f), w = (A, k) => {
    const R = parseInt(A.slice(1), 16), me = parseInt(k.slice(1), 16);
    return "#" + [16, 8, 0].map((ae) => Math.round((R >> ae & 255) + ((me >> ae & 255) - (R >> ae & 255)) * v).toString(16).padStart(2, "0")).join("");
  };
  return { top: w(o[1][0], c[1][0]), bot: w(o[1][1], c[1][1]), warm: w(o[1][2], c[1][2]), cool: w(o[1][3], c[1][3]), op: o[1][4] + (c[1][4] - o[1][4]) * v, t: l };
}
function Uh(a) {
  const l = parseInt(a.slice(1), 16), o = (l >> 16 & 255) / 255, c = (l >> 8 & 255) / 255, f = (l & 255) / 255, v = Math.max(o, c, f), w = Math.min(o, c, f);
  let A = 0, k = 0;
  const R = (v + w) / 2;
  if (v !== w) {
    const me = v - w;
    k = R > 0.5 ? me / (2 - v - w) : me / (v + w), A = (v === o ? (c - f) / me + (c < f ? 6 : 0) : v === c ? (f - o) / me + 2 : (o - c) / me + 4) / 6;
  }
  return [A * 360, k * 100, R * 100];
}
function Mu(a, l, o) {
  l = vo(l, 0, 100) / 100, o = vo(o, 0, 100) / 100;
  const c = (w) => (w + a / 30) % 12, f = l * Math.min(o, 1 - o), v = (w) => o - f * Math.max(-1, Math.min(c(w) - 3, Math.min(9 - c(w), 1)));
  return "#" + [v(0), v(8), v(4)].map((w) => Math.round(w * 255).toString(16).padStart(2, "0")).join("");
}
const [Su, Cu, Tu] = Uh(Vs), Ec = Mu(Su, Cu, Math.max(6, Tu - 14)), Yh = Mu(Su, Cu, Math.min(96, Tu + 16));
function Zh(a, l, o, c, f) {
  const v = Dt / 2, w = Dt * 0.12, A = v - (v - w) * a, k = (ee) => ee ** 1.3, R = vo(o, -1.5, 1.5), me = (ee) => -(Math.abs(R) * 4.6 * ee ** 1.5) * Math.sign(R), ae = a * 1.4, U = (ee, Y) => {
    const G = Math.min(4.8, Math.abs(o) * 2.6) * (Y ? 1 : -1) * Math.sign(o || 1), W = Y ? ee + A : ee, ce = Y ? ee : ee + A, J = (Ae) => W + me(Ae) + G * Math.sin(Ae * Math.PI * 1.2 + c) * k(Ae) * 1.4 + ae * Math.sin(Ae * Math.PI * 2 + c * 0.6) * k(Ae) * (Y ? 1 : -1), ue = [[ce, Ct]];
    for (let Ae = 0; Ae <= 12; Ae++) ue.push([J(Ae / 12), Ct + Dt * Ae / 12]);
    ue.push([ce, Ct + Dt]);
    let $ = '<path d="' + Md(ue) + 'Z" fill="' + Vs + '"/>';
    if (f) return $;
    const E = 1.35 + ((Y ? o > 0 : o < 0) ? 0.35 : 0), B = (Ae) => {
      const I = Ae / 7, Ie = Y ? 1 - I : I, z = (1 - Ie) ** 1.3, je = ee + A * I;
      return Array.from({ length: 13 }, (M, _) => {
        const C = _ / 12;
        return [je + me(C) * z + G * E * Math.sin(C * Math.PI * 1.2 + c - Ie * 3.2) * k(C) * 1.4 * z + ae * 1.6 * Math.sin(C * Math.PI * 2 + c * 0.6 - Ie * 2.5) * k(C) * a * (0.4 + 0.6 * z), Ct + Dt * C];
      });
    }, oe = [1, 2, 3, 4, 5, 6].map(B);
    for (let Ae = 0; Ae < 6; Ae += 2) $ += '<path d="' + Md(oe[Ae]) + Md(oe[Ae + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return $;
  }, K = v - (v - w) * l;
  return { body: U(Ct, !0) + U(Ct + Dt - A, !1), rails: [{ x: Ct + K - 4, y: Ct, w: 4, h: Dt }, { x: Ct + Dt - K, y: Ct, w: 4, h: Dt }], head: 6.4 };
}
function Kh(a, l, o) {
  const c = Dt * (1 - a);
  let f = "";
  if (c > 1 && (f += jo(Ct, Ct, Dt, c, Vs), !o))
    for (let v = 1; v < 7; v += 2) f += jo(Ct + Dt * v / 7, Ct, Dt / 7, c, "#fff");
  return { body: f, rails: [{ x: Ct, y: Ct + Dt * (1 - l) - 7, w: Dt, h: 11 }], head: 10.4 };
}
function $h(a, l, o, c) {
  const f = 9 - 7 * (o / 100), v = Ct + Dt * (1 - a), w = Math.ceil(Dt / 10) + 1, A = Ct + f / 2, k = (Ct + Dt - f / 2 - A) / (w - 1), R = 0.8, me = 0.6, ae = Array.from({ length: w }, (ee, Y) => Math.max(A + Y * me, Math.min(A + Y * k, v - f / 2 - (w - 1 - Y) * me))), U = ae.slice(0, -1).map((ee, Y) => vo((ae[Y + 1] - ee - me) / (k - me), 0, 1));
  U.push(U[w - 2]);
  let K = "";
  return ae.forEach((ee, Y) => {
    const G = R + (f - R) * U[Y], W = Math.max(0.5, G / 2), ce = Math.max(0.4, G * 0.114);
    K += jo(Ct, ee - W, Dt, Math.max(1, G), Vs), !c && G > 2.2 && (K += jo(Ct, ee + W - ce, Dt, ce, Ec) + jo(Ct, ee - W, Dt, ce * 0.55, Yh, 0.75));
  }), c || [0.22, 0.78].forEach((ee) => {
    K += jo(Ct + Dt * ee - 0.7, Ct, 1.4, Math.max(0, ae[w - 1] + 1 - Ct), Ec, 0.85);
  }), { body: K, rails: [{ x: Ct, y: Ct + Dt * (1 - l) - 8, w: Dt, h: 8 }], head: 8.8 };
}
const Dc = (a, l, o, c, f, v, w) => a === "curtain" ? Zh(l, o, f, v, w) : a === "venetian" ? $h(l, o, c, w) : Kh(l, o, w);
function Xh(a, l) {
  let o = "", c = "";
  return l.forEach((f) => {
    const v = f.w > f.h, w = vo(v ? Ct + Dt / 2 : f.x + f.w / 2, 17, 183), A = vo(v ? f.y + f.h / 2 : Ct + Dt / 2, 17, 183);
    o += v ? jo(Ct, vo(f.y + f.h / 2, Ct, Ct + Dt) - 1, Dt, 2, kd) : jo(vo(f.x + f.w / 2, Ct, Ct + Dt) - 1, Ct, 2, Dt, kd);
    const k = v ? "M" + Jt(w - 4) + " " + Jt(A - 3) + "l4 -3l4 3M" + Jt(w - 4) + " " + Jt(A + 3) + "l4 3l4 -3" : "M" + Jt(w - 3) + " " + Jt(A - 4) + "l-3 4l3 4M" + Jt(w + 3) + " " + Jt(A - 4) + "l3 4l-3 4";
    c += '<circle cx="' + Jt(w) + '" cy="' + Jt(A) + '" r="11" fill="' + kd + '" filter="url(#' + a + 's)"/><path d="' + k + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: o, knobs: c };
}
function Jh(a, l) {
  const o = /* @__PURE__ */ new Date(), c = Gh(o.getHours() + o.getMinutes() / 60), f = 42 + 18 * Math.sin(c.t * 0.5), v = c.t >= 5 && c.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (c.t - 5) / 15) : 80, w = Dc(l.kind, l.pos / 100, l.bar / 100, l.tilt, l.vel, l.ph, !1), A = l.ghostAlpha > 4e-3 && l.ghost != null ? Dc(l.kind, l.ghost / 100, l.ghost / 100, l.tilt, 0, 0, !0).body : "", k = l.grip > 4e-3 ? Xh(a, w.rails) : null, R = (me) => jo(Ct, Ct, Dt, Dt, me);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + a + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + a + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + c.top + '"/><stop offset="1" stop-color="' + c.bot + '"/></linearGradient><radialGradient id="' + a + 'w" cx="' + Jt(f) + '%" cy="' + Jt(v) + '%" r="58%"><stop offset="0" stop-color="' + c.warm + '" stop-opacity="' + Jt(c.op * 0.8) + '"/><stop offset="1" stop-color="' + c.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + a + 'k" cx="' + Jt(100 - f * 0.8) + '%" cy="' + Jt(100 - v * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + c.cool + '" stop-opacity="' + Jt(c.op * 0.64) + '"/><stop offset="1" stop-color="' + c.cool + '" stop-opacity="0"/></radialGradient><filter id="' + a + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + _c + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + a + 'c)">' + R("url(#" + a + "l)") + R("url(#" + a + "w)") + R("url(#" + a + "k)") + (A ? '<g opacity="' + Jt(l.ghostAlpha) + '">' + A + "</g>" : "") + w.body + '<rect x="14" y="14" width="172" height="' + w.head + '" fill="' + Vs + '" filter="url(#' + a + 's)"/></g>' + (k ? '<g clip-path="url(#' + a + 'c)" opacity="' + Jt(l.grip) + '">' + k.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + _c + '" stroke-width="3"/>' + (k ? '<g opacity="' + Jt(l.grip) + '">' + k.knobs + "</g>" : "") + "</svg>";
}
function Qh({ onMove: a, onSet: l }) {
  var $;
  const o = "cv" + ++Vh, c = document.createElement("div");
  c.className = "tfCoverArt";
  const f = ($ = window.matchMedia) == null ? void 0 : $.call(window, "(pointer: coarse)").matches;
  let v = null;
  const w = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let A = 0, k = !1, R = !1, me = null, ae = 0, U = 0;
  const K = () => (v == null ? void 0 : v.kind) === "curtain" ? "x" : "y", ee = () => me || k || R || v.moving || v.target != null ? 1 : f ? performance.now() < U ? 1 : 0.4 : 0, Y = () => {
    c.innerHTML = Jh(o, { kind: v.kind, pos: w.pos, bar: v.target ?? w.pos, tilt: w.tilt, vel: w.vel, ph: w.ph, ghost: w.gpos, ghostAlpha: w.ghost, grip: w.grip });
  };
  function G(E) {
    A = 0;
    const B = w.last ? Math.min(0.064, (E - w.last) / 1e3) : 1 / 60, oe = B * 60;
    w.last = E;
    const Ae = v.pos - w.pos, I = w.pos;
    w.pos += Math.sign(Ae) * Math.min(Math.abs(Ae), Math.max(10.5, Math.abs(Ae) * 1.4) * B), Math.abs(v.pos - w.pos) < 0.03 && (w.pos = v.pos), w.vel = w.vel * 0.86 + (w.pos - I) / oe * 0.14, Math.abs(w.vel) < 0.015 && w.pos === v.pos && (w.vel = 0), (w.pos !== I || w.vel) && (w.ph += (0.06 + Math.abs(w.vel) * 0.03) * oe);
    const Ie = v.tilt - w.tilt;
    w.tilt += Math.sign(Ie) * Math.min(Math.abs(Ie), Math.max(60, Math.abs(Ie) * 4) * B);
    const z = ee();
    w.grip += (z - w.grip) * Math.min(1, B * (z > w.grip ? 11 : 3.5)), Math.abs(z - w.grip) < 0.01 && (w.grip = z);
    const je = v.target != null && Math.abs(v.target - w.pos) > 0.5 ? 0.22 : 0;
    v.target != null && (w.gpos = v.target), w.ghost += (je - w.ghost) * Math.min(1, B * (je > w.ghost ? 16 : 3)), Math.abs(je - w.ghost) < 4e-3 && (w.ghost = je), Y(), w.pos !== v.pos || w.vel || w.tilt !== v.tilt || w.grip !== z || w.ghost !== je ? A = requestAnimationFrame(G) : w.last = 0;
  }
  const W = () => {
    v && !A && (A = requestAnimationFrame(G));
  }, ce = setInterval(() => {
    v && !A && Y();
  }, 60 * 1e3), J = (E) => {
    const B = c.getBoundingClientRect();
    return K() === "x" ? (E.clientX - B.left) / B.width : (E.clientY - B.top) / B.height;
  };
  c.addEventListener("pointerdown", (E) => {
    var Ae;
    if (!(v != null && v.canSet) || E.button > 0) return;
    E.preventDefault(), (Ae = c.setPointerCapture) == null || Ae.call(c, E.pointerId);
    const B = v.target ?? v.pos, oe = c.getBoundingClientRect();
    me = { p0: J(E), from: B, x0: E.clientX, value: null, side: null }, v.kind === "curtain" && B > 0 && (me.side = (E.clientX - oe.left) / oe.width < 0.5 ? "L" : "R"), W();
  }), c.addEventListener("pointermove", (E) => {
    if (!me) return;
    let B;
    if (v.kind === "curtain") {
      if (!me.side) {
        const Ae = E.clientX - me.x0;
        if (Math.abs(Ae) < 4) return;
        me.side = Ae < 0 ? "L" : "R";
      }
      const oe = (Dt / 2 - Dt * 0.12) / 200;
      B = me.from + (me.side === "L" ? -1 : 1) * ((J(E) - me.p0) / oe) * 100;
    } else B = me.from - (J(E) - me.p0) / (Dt / 200) * 100;
    me.value = vo(B, 0, 100), a(me.value);
  });
  const ue = () => {
    if (!me) return;
    const E = me.value;
    me = null, E != null && l(Math.round(E)), W();
  };
  return c.addEventListener("pointerup", ue), c.addEventListener("pointercancel", ue), c.addEventListener("lostpointercapture", ue), c.addEventListener("pointerenter", () => {
    k = !0, W();
  }), c.addEventListener("pointerleave", () => {
    k = !1, W();
  }), c.addEventListener("focus", () => {
    R = c.matches(":focus-visible"), W();
  }), c.addEventListener("blur", () => {
    R = !1, W();
  }), c.addEventListener("keydown", (E) => {
    if (!(v != null && v.canSet)) return;
    const B = Math.round(v.target ?? v.pos), oe = E.shiftKey ? 10 : 1, Ae = { ArrowUp: B + oe, ArrowRight: B + oe, ArrowDown: B - oe, ArrowLeft: B - oe, PageUp: B + 25, PageDown: B - 25, Home: 0, End: 100 }[E.key];
    if (Ae == null) return;
    E.preventDefault();
    const I = vo(Ae, 0, 100);
    a(I), clearTimeout(ae), ae = setTimeout(() => l(I), 500);
  }), {
    el: c,
    update(E) {
      const B = !v;
      v = E, B && (w.pos = v.pos, w.tilt = v.tilt, U = performance.now() + 1500, f && setTimeout(W, 1600)), c.classList.toggle("x", K() === "x"), c.classList.toggle("y", K() === "y"), v.canSet ? (c.tabIndex = 0, c.setAttribute("role", "slider"), c.setAttribute("aria-valuemin", "0"), c.setAttribute("aria-valuemax", "100"), c.setAttribute("aria-valuenow", String(Math.round(v.target ?? v.pos))), c.setAttribute("aria-orientation", K() === "x" ? "horizontal" : "vertical")) : c.setAttribute("role", "img"), c.setAttribute("aria-label", v.name + (v.canSet ? " position" : "")), c.setAttribute("aria-valuetext", v.text), W();
    },
    destroy() {
      cancelAnimationFrame(A), A = 0, clearInterval(ce), clearTimeout(ae), c.remove();
    }
  };
}
const Rc = "move-assistant-density", Ci = {
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
}, re = (a) => String(a ?? "").replace(/[&<>"']/g, (l) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[l]), Cd = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', Nc = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', ef = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', Bl = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, Bc = {
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14v2H5z"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>'
}, Pc = 1, tf = 4, Ic = 16, Hc = 32, nf = 128, af = 256, Fc = 16384, of = 1, rf = 2, Oc = 4, sf = 8, lf = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, Wc = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, df = { curtain: "curtains", blind: "blind", venetian: "blinds" }, Td = {
  light: { name: "Lights", icon: "mdi:lightbulb", colour: "#ffc107" },
  climate: { name: "Climate", icon: "mdi:home-thermometer", colour: "#ff5722" },
  security: { name: "Security", icon: "mdi:security", colour: "#607d8b" },
  media_players: { name: "Media players", icon: "mdi:multimedia", colour: "#2196f3" },
  maintenance: { name: "Maintenance", icon: "mdi:wrench", colour: "#9e9e9e" },
  energy: { name: "Energy", icon: "mdi:lightning-bolt", colour: "#ffc107" }
}, qc = "move_assistant_house", jc = "move-assistant-house-used", cf = ["switch", "fan", "input_boolean", "automation"], zc = "move-assistant-house-look", uf = [["popup", "Popup"], ["sheet", "Sheet"]], pf = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], hf = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], ff = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], Ld = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', mf = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', gf = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', Vc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', Gc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', Uc = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', Lu = (a) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + a.map((l) => '<path d="' + l + '"/>').join("") + "</svg>", Yc = Lu(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), vf = Lu(["M20 6L9 17L4 12"]), mo = (a, l = "") => '<span class="tfAreaGlyph" data-icon-for="' + re(a || "") + '"' + (l ? ' data-icon-name="' + re(l) + '"' : "") + "></span>", bf = (a) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (a ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', wf = 1, yf = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], Zc = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, Ad = ["hs", "xy", "rgb", "rgbw", "rgbww"], Pl = ["door", "window", "garage_door", "opening"], Kc = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, Il = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], xf = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], kf = 10, Mf = 20, Sf = 5, Cf = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, Tf = ["living room", "bedroom", "office"];
function Lf(a, { config: l, getHass: o }) {
  var $r, Hs, vr;
  const c = (e) => a.getElementById(e), f = c("app"), w = String((l || {}).layout || "").toLowerCase().replace("_", "-") === "test-focus";
  let A = Ci.get(Rc) === "1", k = {};
  const R = (e) => {
    var n;
    return (n = o()) == null ? void 0 : n.callWS(e);
  }, me = (e, n, i) => R({ type: "call_service", domain: e, service: n, service_data: i }), ae = a.querySelector("#appearancePane .toggleList");
  ae && !c("densityToggle") && (ae.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), c("densityToggle").addEventListener("click", () => {
    A = !A, Ci.set(Rc, A ? "1" : "0"), $();
  }));
  const U = [
    ["weather", "Weather", "The forecast under Home.", (e) => e.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (e) => e.startsWith("sensor.") && xt(e).device_class === "power" && /^(W|kW)$/.test(xt(e).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (e) => e.startsWith("alarm_control_panel.")]
  ], K = (e, n, i, d) => '<div class="themeChoice" id="' + e + '" role="group" aria-label="' + n + '">' + d.map(([p, m]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + i + '="' + p + '">' + m + "</button>").join("") + "</div>", ee = (e, n, i, d) => '<div class="toggleRow"' + (d ? ' id="' + d + '"' : "") + "><div><strong>" + e + "</strong>" + (n ? '<div class="status">' + n + "</div>" : "") + "</div>" + i + "</div>";
  function Y() {
    var x, D, H, F, ie, ke;
    if (!w || c("housePane")) return;
    const e = c("settingsView");
    e.querySelector(".settingsTitle").textContent = "HomeCore";
    const n = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], i = (Ee, te) => '<div class="houseTab' + (Ee === "look" ? " active" : "") + '" data-house-pane="' + Ee + '"><section class="card">' + te + "</section></div>";
    e.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + n.map(([Ee, te]) => '<button class="tab segBtn' + (Ee === "look" ? " active" : "") + '" type="button" data-house-tab="' + Ee + '">' + te + "</button>").join("") + "</div>" + i("look", '<div class="toggleList" id="houseLook"></div>') + i("lights", '<p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div>') + i("sources", '<div class="toggleList">' + U.map(([Ee, te, we]) => ee(te, we, '<select class="settingsSelect" data-source="' + Ee + '" aria-label="' + te + '"></select>')).join("") + "</div>") + i("sums", '<div class="toggleList">' + Object.entries(Td).map(([Ee, te]) => ee(te.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + Ee + '" aria-label="' + te.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const d = c("houseLook");
    [(x = e.querySelector(".themeBtn")) == null ? void 0 : x.closest(".toggleRow"), (D = c("densityToggle")) == null ? void 0 : D.closest(".toggleRow"), (H = c("moreInfoChoice")) == null ? void 0 : H.closest(".toggleRow"), (F = c("namesChoice")) == null ? void 0 : F.closest(".toggleRow"), (ie = c("hoursChoice")) == null ? void 0 : ie.closest(".toggleRow"), (ke = c("wxStyleChoice")) == null ? void 0 : ke.closest(".toggleRow")].forEach((Ee) => Ee && d.appendChild(Ee)), d.insertAdjacentHTML("beforeend", ee("Lights", "How lights show on the house page.", K("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + ee("Pad", "What the Dual Axis Controller’s pad sets on its tile.", K("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow"));
    const p = c("housePane"), m = p.querySelector(".houseTabs"), h = m.querySelector(".rubberIndicator"), b = (Ee) => {
      const te = m.querySelector(".tab.active");
      h.style.transition = Ee ? "" : "none", h.style.left = te.offsetLeft + "px", h.style.width = te.offsetWidth + "px", Ee && (h.style.transform = "scaleX(1.08)", setTimeout(() => h.style.transform = "", 180));
    };
    new ResizeObserver(() => b(!1)).observe(m), p.addEventListener("click", (Ee) => {
      const te = Ee.target.closest("[data-house-tab]");
      if (te) {
        m.querySelectorAll(".tab").forEach((ve) => ve.classList.toggle("active", ve === te)), p.querySelectorAll(".houseTab").forEach((ve) => ve.classList.toggle("active", ve.dataset.housePane === te.dataset.houseTab)), te.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), b(!0);
        return;
      }
      const we = Ee.target.closest("[data-light-fav]");
      if (we) {
        $s(we.dataset.lightFav);
        return;
      }
      const V = Ee.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!V || V.disabled)) {
        if (V.dataset.lights && (vt.lights = V.dataset.lights), V.dataset.dacPad && (vt.dacPad = V.dataset.dacPad), (V.dataset.lights || V.dataset.dacPad) && (Xe(), Be.clear()), V.dataset.sumToggle) {
          const ve = V.dataset.sumToggle, Oe = new Set(q.hiddenSums || []);
          Oe.has(ve) ? Oe.delete(ve) : Oe.add(ve), q = { ...q, hiddenSums: [...Oe] }, Wn();
        }
        Ia();
      }
    }), p.addEventListener("change", (Ee) => {
      const te = Ee.target;
      te.dataset.source && (q = { ...q, sources: { ...q.sources || {}, [te.dataset.source]: te.value || void 0 } }, Wn());
      const we = te.dataset.lightStyle || te.dataset.lightPad;
      if (we) {
        const V = te.dataset.lightStyle ? "lightStyles" : "lightPads", ve = { ...vt[V] };
        te.value ? ve[we] = te.value : delete ve[we], vt[V] = ve, Xe(), [...Be.keys()].filter((Oe) => Oe.endsWith(":" + we)).forEach((Oe) => Be.delete(Oe));
      }
      Ia();
    });
  }
  function G() {
    var b, x;
    nt() && tt();
    const e = c("housePane");
    if (!e) return;
    const n = !!customElements.get(Fe);
    e.querySelectorAll("[data-lights]").forEach((D) => D.setAttribute("aria-pressed", String(D.dataset.lights === vt.lights))), c("lightsRow").querySelector(".status").textContent = n || !nt() ? "How lights show on the house page." : Ge === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", e.querySelectorAll("[data-dac-pad]").forEach((D) => D.setAttribute("aria-pressed", String(D.dataset.dacPad === vt.dacPad))), c("dacPadRow").hidden = !nt();
    for (const D of e.querySelectorAll("[data-source]")) {
      if (D === a.activeElement) continue;
      const [H] = U.find(([ie]) => ie === D.dataset.source), F = Object.keys(k).filter(U.find(([ie]) => ie === H)[3]).sort((ie, ke) => xe(ie).localeCompare(xe(ke)));
      D.dataset.sig !== F.join(",") && (D.innerHTML = '<option value="">Automatic</option>' + F.map((ie) => '<option value="' + re(ie) + '">' + re(xe(ie)) + "</option>").join(""), D.dataset.sig = F.join(",")), D.value = F.includes((b = q.sources) == null ? void 0 : b[H]) ? q.sources[H] : "";
    }
    e.querySelectorAll("[data-sum-toggle]").forEach((D) => {
      const H = !(q.hiddenSums || []).includes(D.dataset.sumToggle);
      D.classList.toggle("on", H), D.setAttribute("aria-checked", String(H));
    });
    const i = c("lightRows"), d = i != null && i.contains(a.activeElement) ? a.activeElement : null;
    if (!i || d != null && d.matches("select")) return;
    const p = new Set(Nn()), m = (D, H, F, ie) => '<option value="' + D + '"' + (D === F ? " selected" : "") + ">" + H + "</option>", h = Object.keys(k).filter((D) => D.startsWith("light.")).sort((D, H) => !At.get(D) - !At.get(H) || (At.get(D) || "").localeCompare(At.get(H) || "") || xe(D).localeCompare(xe(H))).map((D) => {
      const H = vt.lightStyles[D] || "", F = vt.lightPads[D] || "", ie = p.has(D), ke = re(xe(D));
      return "<tr><td><strong>" + ke + "</strong></td><td>" + re(At.get(D) || "—") + "</td><td>" + re(an(D)) + '</td><td class="metaSwitchCol"><button class="switch' + (ie ? " on" : "") + '" type="button" role="switch" aria-checked="' + ie + '" data-light-fav="' + re(D) + '" aria-label="' + ke + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + re(D) + '" aria-label="' + ke + ' tile">' + m("", "Default", H) + m("tile", "HomeCore tile", H) + m("dac", "Dual Axis Controller", H) + '</select></td><td><select class="settingsSelect" data-light-pad="' + re(D) + '" aria-label="' + ke + ' pad"' + (et(D) ? "" : " disabled") + ">" + m("", "Default", F) + m("temperature", "Temperature", F) + m("colour", "Colour", F) + "</select></td></tr>";
    }).join("");
    i.dataset.html !== h && (i.innerHTML = h, i.dataset.html = h, d != null && d.dataset.lightFav && ((x = i.querySelector('[data-light-fav="' + CSS.escape(d.dataset.lightFav) + '"]')) == null || x.focus({ preventScroll: !0 })));
  }
  const W = document.createElement("div");
  W.className = "densityBadge", W.setAttribute("aria-live", "polite"), W.hidden = !0, f.appendChild(W);
  let ce = 0;
  function J() {
    if (!A) return;
    const e = c("homeView"), n = (m) => m.offsetParent !== null && !m.closest("[hidden]");
    e.querySelectorAll(":scope .card, :scope .tfAction").forEach((m) => {
      n(m) && (m.dataset.h = Math.round(m.getBoundingClientRect().height) + " px");
    });
    const i = [...e.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(n), d = window.innerHeight, p = i.filter((m) => {
      const h = m.getBoundingClientRect();
      return h.height > 0 && h.top >= 0 && h.bottom <= d + 0.5;
    }).length;
    W.hidden = !e.classList.contains("active"), W.innerHTML = "<b>" + p + "</b><small>of " + i.length + " readings on screen</small>";
  }
  const ue = () => {
    A && requestAnimationFrame(J);
  };
  function $() {
    var e;
    f.classList.toggle("showDensity", A), (e = c("densityToggle")) == null || e.classList.toggle("on", A), W.hidden = !A, clearInterval(ce), A && (ce = setInterval(J, 1e3), J());
  }
  window.addEventListener("scroll", ue, { capture: !0, passive: !0 }), window.addEventListener("resize", ue, { passive: !0 });
  const E = a.querySelector("#homeView .grid");
  let B = null, oe = null, Ae = null, I = null;
  const Ie = /* @__PURE__ */ new Map(), z = /* @__PURE__ */ new Map(), je = /* @__PURE__ */ new Map(), M = 6;
  let _ = null;
  const C = /* @__PURE__ */ new Map(), P = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map();
  let q = { favourites: null }, se = {}, fe = {}, ye = [], $e = null;
  const lt = (() => {
    try {
      return JSON.parse(Ci.get(jc)) || {};
    } catch {
      return {};
    }
  })();
  let At = /* @__PURE__ */ new Map(), Sn = 0;
  function Wn() {
    clearTimeout(Sn), Sn = setTimeout(() => Promise.resolve(R({ type: "frontend/set_user_data", key: qc, value: q })).catch(() => {
    }), 400);
  }
  const vt = (() => {
    let e = {};
    try {
      e = JSON.parse(Ci.get(zc)) || {};
    } catch {
    }
    const n = (i, d) => Object.fromEntries(Object.entries(i || {}).filter(([, p]) => d.includes(p)));
    return {
      more: e.more === "sheet" ? "sheet" : "popup",
      names: e.namesPicked && ["auto", "cut", "wrap", "scroll"].includes(e.names) ? e.names : "scroll",
      namesPicked: !!e.namesPicked,
      hoursWindow: ["day", "waking", "all"].includes(e.hoursWindow) ? e.hoursWindow : "day",
      wxStyle: ["bitmap", "onebit", "smooth", "line"].includes(e.wxStyle) ? e.wxStyle : "bitmap",
      lights: e.lights === "dac" ? "dac" : "tile",
      dacPad: e.dacPad === "colour" ? "colour" : "temperature",
      lightStyles: n(e.lightStyles, ["tile", "dac"]),
      lightPads: n(e.lightPads, ["temperature", "colour"])
    };
  })(), Xe = () => Ci.set(zc, JSON.stringify(vt)), Tt = () => {
    f.dataset.more = vt.more, f.dataset.names = vt.names, Yr();
  };
  w && ae && !c("moreInfoChoice") && (c("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + uf.map(([e, n]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (vt.more === e) + '" data-more-style="' + e + '">' + n + "</button>").join("") + "</div></div>"
  ), c("moreInfoChoice").addEventListener("click", (e) => {
    const n = e.target.closest("[data-more-style]");
    n && (vt.more = n.dataset.moreStyle, Xe(), Tt(), c("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((i) => i.setAttribute("aria-pressed", String(i === n))));
  }), c("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + pf.map(([e, n]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (vt.names === e) + '" data-names-style="' + e + '">' + n + "</button>").join("") + "</div></div>"
  ), c("namesChoice").addEventListener("click", (e) => {
    const n = e.target.closest("[data-names-style]");
    n && (vt.names = n.dataset.namesStyle, vt.namesPicked = !0, Xe(), Tt(), c("namesChoice").querySelectorAll("[data-names-style]").forEach((i) => i.setAttribute("aria-pressed", String(i === n))));
  }), c("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + hf.map(([e, n]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (vt.hoursWindow === e) + '" data-hours-window="' + e + '">' + n + "</button>").join("") + "</div></div>"
  ), c("hoursChoice").addEventListener("click", (e) => {
    const n = e.target.closest("[data-hours-window]");
    n && (vt.hoursWindow = n.dataset.hoursWindow, Xe(), Ke == null || Ke.refresh(), c("hoursChoice").querySelectorAll("[data-hours-window]").forEach((i) => i.setAttribute("aria-pressed", String(i === n))));
  }), c("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + ff.map(([e, n]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (vt.wxStyle === e) + '" data-wx-style="' + e + '">' + n + "</button>").join("") + "</div></div>"
  ), c("wxStyleChoice").addEventListener("click", (e) => {
    const n = e.target.closest("[data-wx-style]");
    n && (vt.wxStyle = n.dataset.wxStyle, Xe(), Ke == null || Ke.setStyle(vt.wxStyle), Ot == null || Ot.forEach((i) => i.setStyle(vt.wxStyle)), c("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((i) => i.setAttribute("aria-pressed", String(i === n))));
  })), Y();
  let Je = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const yn = /* @__PURE__ */ new Map();
  let _n = "";
  const Mr = w ? ip({ onChange: () => Tn() }) : null;
  w && f.classList.add("house");
  const dt = Object.assign(document.createElement("div"), { className: "tfBento" });
  let Ke = null, yt = null, bo = !1;
  function Sr(e) {
    const n = ka();
    if (f.classList.toggle("houseBento", !!n), Ke && (yt !== n || e == null) && (Ke.destroy(), Ke = null), !n || e == null) {
      dt.remove();
      return;
    }
    dt.isConnected || E.append(dt), dt.style.order = e, !Ke && !bo && (Ke = Ac(dt, { getHass: o, entityId: n, style: vt.wxStyle, hoursWindow: () => vt.hoursWindow }), yt = n);
  }
  const Li = [["wx", ["current"]], ["avg", ["compared_to_average"]], ["aq", ["aq_tile"]], ["pollen", ["pollen_tile"]], ["radar", ["radar_tile"]]], Cn = ["aq", "pollen", "radar"], ht = Object.fromEntries(Li.map(([e]) => [e, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + e })]));
  let Ot = null, Cr = null;
  function zo(e) {
    const n = ka();
    Ot && Cr !== n && (Ot.forEach((i) => i.destroy()), Ot = null), Object.values(ht).forEach((i) => n ? !i.isConnected && E.append(i) : i.remove()), n && !Ot && !bo && (Ot = Li.map(([i, d]) => Ac(ht[i], { getHass: o, entityId: n, style: vt.wxStyle, cards: d, onOpen: i === "wx" ? () => Do("weather") : void 0 })), Cr = n);
  }
  const xt = (e) => {
    var n;
    return ((n = k[e]) == null ? void 0 : n.attributes) || {};
  }, xe = (e) => xt(e).friendly_name || e, Wt = (e, n) => br(e) || (Number(xt(e).supported_features) & n) === n, We = (e) => {
    const n = String(e ?? "").replace(/_/g, " ");
    return n.charAt(0).toUpperCase() + n.slice(1);
  }, qn = (e, n = 1) => Number(e).toLocaleString(void 0, { minimumFractionDigits: n, maximumFractionDigits: n }), Wa = (e) => (e == null ? void 0 : e.state) === "on" ? e.attributes.brightness != null ? Math.max(1, Math.round(e.attributes.brightness / 2.55)) : 100 : 0, Ai = (e) => xt(e).supported_color_modes || [], Ue = (e) => {
    const n = e / 100;
    return [n <= 66 ? 255 : 329.7 * Math.pow(n - 60, -0.1332), n <= 66 ? 99.47 * Math.log(n) - 161.12 : 288.12 * Math.pow(n - 60, -0.0755), n >= 66 ? 255 : n <= 19 ? 0 : 138.52 * Math.log(n - 10) - 305.04];
  }, it = (e, n) => [5, 3, 1].map((i) => {
    const d = (i + e / 60) % 6;
    return 255 * (1 - n / 100 * Math.max(0, Math.min(d, 4 - d, 1)));
  }), en = (e) => (e /= 255, e <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4)), wo = (e) => {
    const n = 0.2126 * en(e[0]) + 0.7152 * en(e[1]) + 0.0722 * en(e[2]);
    return (n + 0.05) / 0.0664 > 1.05 / (n + 0.05);
  }, jn = (e) => 0.2126 * en(e[0]) + 0.7152 * en(e[1]) + 0.0722 * en(e[2]), tn = (e, n) => {
    const i = jn(e), d = jn(n);
    return (Math.max(i, d) + 0.05) / (Math.min(i, d) + 0.05);
  }, Vo = (e, n) => {
    const i = wo(e);
    for (let d = 0.1; d < 1; d += 0.02) {
      const p = e.map((m) => Math.round(i ? m * (1 - d) : m + (255 - m) * d));
      if (tn(p, e) >= n) return "rgb(" + p.join(",") + ")";
    }
    return i ? "#26221e" : "#ffffff";
  };
  function dn(e) {
    const n = xt(e), i = (n.rgb_color || (n.hs_color && n.color_mode !== "color_temp" ? it(...n.hs_color) : n.color_temp_kelvin ? Ue(n.color_temp_kelvin) : [255, 170, 0])).map((d) => Math.round(Math.max(0, Math.min(255, d))));
    return "--light:rgb(" + i.join(",") + ");--light-ink:" + Vo(i, 3.5);
  }
  const qa = (e) => {
    var n;
    return e.startsWith("light.") && ((n = k[e]) == null ? void 0 : n.state) === "on" ? ' data-light style="' + dn(e) + '"' : "";
  }, ja = (e) => {
    const n = Ai(e);
    return n.length ? n.some((i) => i !== "onoff") : xt(e).brightness != null;
  }, yo = (e) => [xt(e).min_color_temp_kelvin || 2e3, xt(e).max_color_temp_kelvin || 6500], zt = (e) => new Date(e).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function za(e) {
    const n = Math.max(1, Math.round((Date.now() - e) / 1e3));
    if (n < 10) return "Just now";
    if (n < 60) return n + " seconds ago";
    const i = Math.round(n / 60);
    if (i < 60) return i + (i === 1 ? " minute ago" : " minutes ago");
    const d = Math.round(i / 60);
    if (d < 24) return d + (d === 1 ? " hour ago" : " hours ago");
    const p = Math.round(d / 24);
    return p + (p === 1 ? " day ago" : " days ago");
  }
  const zn = (e) => {
    var n;
    return xt(e).current_position ?? (((n = k[e]) == null ? void 0 : n.state) === "closed" ? 0 : 100);
  }, Va = (e) => {
    var n;
    return mt("pos", e, ((n = C.get(e)) == null ? void 0 : n.pos) ?? zn(e));
  }, oo = (e) => {
    var n;
    return mt("tilt", e, ((n = C.get(e)) == null ? void 0 : n.tilt) ?? xt(e).current_tilt_position);
  };
  function an(e) {
    var h;
    const n = k[e];
    if (!n) return "Not found";
    if (n.state === "unavailable") return "Unavailable";
    const i = n.attributes, d = e.split(".")[0];
    if (d === "light") {
      if (n.state !== "on") return "Off";
      const b = i.color_temp_kelvin;
      return (ja(e) ? Wa(n) + "%" : "On") + (i.color_mode === "color_temp" && b ? " · " + Number(b).toLocaleString() + "k" : Ad.includes(i.color_mode) ? " · Colour" : "");
    }
    if (d === "climate") return (n.state === "off" ? "Off" : We(i.hvac_action || n.state)) + " · " + qn(i.current_temperature) + " °C now";
    if (d === "cover") {
      const b = zn(e), x = i.current_tilt_position;
      return n.state === "opening" || n.state === "closing" ? We(n.state) + " - " + b + "%" : (b <= 0 ? "Closed" : b >= 100 ? "Open" : "Partially open") + (x > 0 && x < 100 ? " · tilted" : "");
    }
    if (d === "humidifier") return n.state !== "on" ? "Off" : We(i.action || "on") + " · " + i.current_humidity + "% now";
    if (d === "vacuum") return We(n.state) + (n.state === "cleaning" && ((h = i.rooms) != null && h.length) ? " · " + i.rooms.join(", ") : "") + (i.battery_level != null ? " · " + i.battery_level + "%" : "");
    if (d === "media_player") return n.state === "playing" || n.state === "paused" ? (n.state === "paused" ? "Paused · " : "") + (i.media_title || "Playing") : We(n.state);
    if (d === "alarm_control_panel") return Zc[n.state] || We(n.state);
    if (d === "lock" || d === "valve") return We(n.state);
    if (d === "switch") return n.state === "on" ? "On" : "Off";
    if (d === "plant") return n.state === "ok" ? "Healthy" : We(i.problem);
    if (d === "binary_sensor")
      return i.device_class === "battery" ? n.state === "on" ? "Low" : "Normal" : i.device_class === "problem" ? n.state === "on" ? "Problem" : "OK" : i.device_class === "moisture" ? n.state === "on" ? "Wet" : "Dry" : Pl.includes(i.device_class) ? n.state === "on" ? "Open" : "Closed" : n.state === "on" ? "Detected" : "Clear";
    if (i.rang) return "Rang at " + zt(i.rang);
    const p = o();
    if (p != null && p.formatEntityState && !br(e))
      try {
        return p.formatEntityState(n);
      } catch {
      }
    const m = Number(n.state);
    if (n.state !== "" && Number.isFinite(m)) {
      const b = Math.abs(m) >= 100 ? 0 : Math.abs(m) >= 10 ? 1 : 2, x = i.unit_of_measurement ? i.unit_of_measurement === "%" ? "%" : " " + i.unit_of_measurement : "";
      return m.toLocaleString(void 0, { maximumFractionDigits: b }) + x + (i.plant_low ? " · Low" : i.plant_high ? " · High" : "");
    }
    return We(n.state);
  }
  const Ga = (e) => e >= 1e3 ? qn(e / 1e3, 2) + " kW" : Math.round(e).toLocaleString() + " W";
  function la(e) {
    var i, d;
    const n = o();
    e.querySelectorAll("[data-icon-for]").forEach((p) => {
      var b;
      const m = k[p.dataset.iconFor], h = p.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && m && !h) {
        let x = p.firstElementChild;
        (!x || x.localName !== "ha-state-icon") && (p.textContent = "", x = document.createElement("ha-state-icon"), p.appendChild(x)), x.hass = n, x.stateObj = m;
      } else if (customElements.get("ha-icon")) {
        let x = p.firstElementChild;
        (!x || x.localName !== "ha-icon") && (p.textContent = "", x = document.createElement("ha-icon"), p.appendChild(x)), x.icon = h || ((b = m == null ? void 0 : m.attributes) == null ? void 0 : b.icon) || "mdi:circle-medium";
      } else p.textContent || (p.textContent = (p.dataset.letter || xe(p.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (i = e.querySelectorAll) == null || i.call(e, ".tfIcon").forEach(_i), (d = e.classList) != null && d.contains("tfIcon") && _i(e), Ri();
  }
  const Go = /* @__PURE__ */ new Map();
  function _i(e) {
    var m, h, b;
    const n = (((m = e.closest("[data-k]")) == null ? void 0 : m.dataset.k) || "") + "|" + (e.dataset.iconFor || ((h = e.querySelector("[data-icon-for]")) == null ? void 0 : h.dataset.iconFor) || e.getAttribute("aria-label") || ""), i = getComputedStyle(e), d = { backgroundColor: i.backgroundColor, color: i.color }, p = Go.get(n);
    Go.set(n, d), !(!p || p.backgroundColor === d.backgroundColor && p.color === d.color || (b = window.matchMedia) != null && b.call(window, "(prefers-reduced-motion: reduce)").matches) && e.animate([p, d], { duration: 180, easing: "ease" });
  }
  const Ei = "[data-icon-for]>:is(ha-state-icon,ha-icon),.tfIcon>svg", rs = (e) => {
    const n = [e];
    for (; n.length; ) {
      const i = n.shift();
      if (i.localName === "svg") return i;
      i.shadowRoot && n.push(...i.shadowRoot.children), n.push(...i.children);
    }
    return null;
  };
  function kt(e) {
    var ke, Ee, te;
    const n = e.localName === "svg" ? e : rs(e), i = n ? [...n.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")] : [];
    if (!i.length) return !n;
    const d = (ke = e.closest(".tfIcon")) == null ? void 0 : ke.offsetWidth;
    if (d === void 0) return !0;
    if (!d) return !1;
    const p = d + "|" + i.map((we) => we.getAttribute("d") || we.localName).join("|");
    if (e.dataset.fitted === p) return !0;
    let m = 1 / 0, h = 1 / 0, b = -1 / 0, x = -1 / 0;
    for (const we of i) {
      const V = we.getBBox(), ve = getComputedStyle(we), Oe = ve.stroke !== "none" ? (parseFloat(ve.strokeWidth) || 0) / 2 : 0;
      !V.width && !V.height || (m = Math.min(m, V.x - Oe), h = Math.min(h, V.y - Oe), b = Math.max(b, V.x + V.width + Oe), x = Math.max(x, V.y + V.height + Oe));
    }
    if (!(b > m)) return !1;
    const D = (te = (Ee = n.viewBox) == null ? void 0 : Ee.baseVal) != null && te.width ? n.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, H = d - 14, F = H * D.width / Math.max(b - m, x - h), ie = F / D.width;
    return e.localName === "svg" ? (e.style.width = F + "px", e.style.height = F + "px") : e.style.setProperty("--mdc-icon-size", F + "px"), n.style.translate = ((D.x + D.width / 2 - (m + b) / 2) * ie).toFixed(2) + "px " + ((D.y + D.height / 2 - (h + x) / 2) * ie).toFixed(2) + "px", e.dataset.fitted = p, !0;
  }
  let Vn = 0;
  function Di(e = 0) {
    clearTimeout(Vn), [...a.querySelectorAll(Ei)].filter((i) => !kt(i)).length && e < 5 && (Vn = setTimeout(() => Di(e + 1), 300));
  }
  function Ri() {
    clearTimeout(Vn), Vn = setTimeout(() => Di(), 60);
  }
  const En = (e) => {
    var n, i, d;
    return e.startsWith("light.") && k[e] && !xt(e).icon && !((d = (i = (n = o()) == null ? void 0 : n.entities) == null ? void 0 : i[e]) != null && d.icon) ? "mdi:lightbulb" : "";
  }, Rt = (e, n, i) => (n = n || En(e), ' data-icon-for="' + re(e) + '"' + (n ? ' data-icon-name="' + re(n) + '"' : "") + (i ? ' data-letter="' + re(i) + '"' : "")), on = (e) => e.endsWith("_solar_power") ? "mdi:solar-power-variant" : xt(e).rang ? "mdi:doorbell" : "", St = (e, n, i, d) => re([e, n, i, d ? JSON.stringify(d) : ""].join("|")), io = (e) => re(JSON.stringify(e));
  function Aa(e, n) {
    var p, m;
    const i = re(xe(n) + ", " + an(n));
    return '<div class="activityRow' + (Number.isFinite(Number((p = k[n]) == null ? void 0 : p.state)) && ((m = k[n]) == null ? void 0 : m.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + re(e + "|" + n) + '" aria-label="' + i + '. Show the last 24 hours"' : '" aria-label="' + i + '"') + '><div class="tfIcon" aria-hidden="true"' + Rt(n, on(n)) + '></div><div><div class="activityRowName">' + re(xe(n)) + '</div><div class="activityRowMeta">' + re(an(n)) + "</div></div></div>";
  }
  const xo = (e, n, i) => '<div class="activityRow" aria-label="' + re(e + ", " + n) + '"><div class="tfIcon" aria-hidden="true"' + Rt("", i, e) + '></div><div><div class="activityRowName">' + re(e) + '</div><div class="activityRowMeta">' + re(n) + "</div></div></div>";
  function Dn(e) {
    var i;
    const n = ((i = k[e]) == null ? void 0 : i.state) === "on";
    return '<div class="activityRow tfPlug' + (n ? " on" : "") + '"><button class="tfIcon" type="button" data-act="' + St("switch", "toggle", e) + '" aria-label="Turn ' + re(xe(e)) + (n ? " off" : " on") + '"' + Rt(e) + '></button><button class="tfName" type="button" data-more="' + re(e) + '" aria-label="' + re(xe(e) + ", " + an(e) + ". More info") + '"><span class="activityRowName">' + re(xe(e)) + '</span><span class="activityRowMeta">' + re(an(e)) + "</span></button></div>";
  }
  const Rn = (e) => {
    var n;
    return ((n = z.get(e)) == null ? void 0 : n.name) ?? xe(e);
  }, Uo = (e) => {
    var n;
    return ((n = z.get(e)) == null ? void 0 : n.text) ?? an(e);
  };
  function Yo(e) {
    var i;
    const n = (i = z.get(e)) == null ? void 0 : i.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (n ? Rt("", n, Rn(e)) : Rt(e, on(e))) + '></div><div><div class="activityRowName">' + re(Rn(e)) + '</div><div class="activityRowMeta">' + re(Uo(e)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + re(Rn(e)) + '’s last 24 hours">' + Cd + '</button></div><svg class="tfGraph" data-graph="' + re(e) + '" role="img" aria-label="' + re(Rn(e)) + ', last 24 hours"></svg></div>';
  }
  function va(e, n, i, d, p = "", m = null, h = "") {
    const b = B && B.key === e;
    return '<section class="card tfCard' + (h ? " " + h : "") + (b ? " open" : "") + '" data-tf data-k="' + re(e) + '" style="order:' + n + (b && B.h ? ";min-height:" + B.h + "px" : "") + '" aria-label="' + re(i) + '"><div class="activityHeader">' + (m ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + re(m) + '" aria-label="' + re(i + (k[m] ? ", " + an(m) : "") + ". More info") + '">' + re(i) + "</button>" : '<div class="activityTitle">' + re(i) + "</div>") + "</div>" + (b ? Yo(B.id) : '<div class="activityRows">' + d.join("") + "</div>" + p) + "</section>";
  }
  function da(e, n) {
    const i = "readings:" + e.id, d = e.readings.map((p) => Aa(i, p));
    return e.power != null && d.push(xo("Power now", Ga(e.power), "mdi:flash")), va(i, n, "Readings", d.concat(e.plugs.map(Dn)));
  }
  function Jn(e, n) {
    var b;
    const i = "energy:" + e.id, [d, p] = [e.solar.find((x) => x.endsWith("_power")), e.solar.find((x) => x.endsWith("_today"))], m = [d, p].filter(Boolean).map((x) => Aa(i, x)), h = Number(((b = k[d]) == null ? void 0 : b.state) || 0) * 1e3;
    return Je.grid && (m.push(Aa(i, Je.grid)), m.push(xo("House use", Ga(h + Number(k[Je.grid].state)), "mdi:home-lightning-bolt"))), va(i, n, "Energy", m, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const Ni = (e, n) => va("plant:" + e.id, n, xe(e.id), e.readings.map((i) => Aa("plant:" + e.id, i)), "", e.id);
  function ko(e, n, i, d, p, m, h = null) {
    const b = i == null ? null : Math.max(0, Math.min(1, i)), x = b == null ? 0 : Math.round(b * 100);
    return '<div class="tfBar ' + e + '" role="slider" tabindex="0" aria-label="' + re(d) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + x + '"' + (p ? ' aria-valuetext="' + re(p) + '"' : "") + ' data-drag="' + re(e + "|" + n) + '">' + (h != null ? '<span class="was" aria-hidden="true" style="left:' + h + '%"></span>' : "") + (m ? b == null ? "" : '<b style="left:' + x + '%"></b>' : '<i style="width:' + x + '%"></i>') + "</div>";
  }
  const Zo = "move-assistant-house-last-bright", ba = (() => {
    try {
      return JSON.parse(Ci.get(Zo)) || {};
    } catch {
      return {};
    }
  })();
  let y = 0;
  const S = (e, n) => {
    !n || ba[e] === n || (ba[e] = n, clearTimeout(y), y = setTimeout(() => Ci.set(Zo, JSON.stringify(ba)), 500));
  }, L = (e, n, i, d) => '<div class="tfStep" role="group" aria-label="' + re(e) + '"><button type="button" data-act="' + i + '" aria-label="Lower ' + re(e.toLowerCase()) + '">' + Bc.down + "</button><output>" + re(n) + '</output><button type="button" data-act="' + d + '" aria-label="Raise ' + re(e.toLowerCase()) + '">' + Bc.up + "</button></div>", O = (e, n, i) => '<div class="' + e + '" role="group" aria-label="' + re(n) + '">' + i.filter(Boolean).map((d) => '<button type="button" data-act="' + d.act + '"' + (d.pressed != null ? ' aria-pressed="' + d.pressed + '"' : "") + (d.disabled ? " disabled" : "") + (d.aria ? ' aria-label="' + re(d.aria) + '"' : "") + ">" + (d.html || re(d.label)) + "</button>").join("") + "</div>", Z = (e, n) => "width:" + Math.round(Math.max(0, Math.min(1, (e - n * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * n / 3).toFixed(2), X = (e) => "left:calc(4px + " + e / 100 + " * (100% - 8px))", de = (e, n) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + re(xe(e)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(n) + '" aria-valuetext="' + Math.round(n) + '% open" data-blocks="' + re(e) + '">' + [0, 1, 2, 3].map((i) => '<span><i style="' + Z(n, i) + '"></i><b' + (n >= (i + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (i + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + X(n) + '">' + Math.round(n) + "%</output></div>";
  function be(e, n) {
    e.querySelectorAll(":scope>span").forEach((d, p) => {
      d.firstElementChild.setAttribute("style", Z(n, p)), d.lastElementChild.classList.toggle("lit", n >= (p + 1) * 25 - 12);
    });
    const i = e.querySelector(".tfTip");
    i.setAttribute("style", X(n)), i.textContent = Math.round(n) + "%", e.setAttribute("aria-valuenow", String(Math.round(n))), e.setAttribute("aria-valuetext", Math.round(n) + "% open");
  }
  const ge = (e, n) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + re(xe(e)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(n) + '" aria-valuetext="' + Math.round(n) + '% open" data-drag="tilt|' + re(e) + '"><i style="width:calc((100% - 8px) * ' + n / 100 + ')"></i><span' + (n > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (n > 92 ? ' class="lit"' : "") + ">Open</span></div>", He = (e, n, i) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + re(xe(e)) + '">' + [
    Wt(e, of) && ["open", "Open", "open_cover", n >= 100 && !i],
    Wt(e, sf) && ["stop", "Stop", "stop_cover", !1],
    Wt(e, rf) && ["close", "Close", "close_cover", n <= 0 && !i]
  ].filter(Boolean).map(([d, p, m, h]) => '<button type="button" data-act="' + St("cover", m, e) + '" aria-label="' + p + '"' + (h ? " disabled" : "") + ">" + lf[d] + "</button>").join("") + "</div>", Ce = (e, n) => '<button class="tfIcon' + (n.art ? " art" : "") + '" type="button" data-act="' + n.button.act + '" aria-label="' + re(n.button.label) + '"' + (n.art ? ' style="background-image:url(&quot;' + re(n.art) + '&quot;)"' : Rt(e, n.icon)) + "></button>", Re = (e) => '<button class="tfName" type="button" data-more="' + re(e) + '" aria-label="' + re(xe(e) + ", " + an(e) + ". More info") + '"><span class="activityRowName">' + re(xe(e)) + '</span><span class="activityRowMeta">' + re(an(e)) + "</span></button>";
  function Ne(e, n = !1, i = null) {
    const d = cn(e), p = e.startsWith("light.") && Yt(e), m = i || (n && e.startsWith("light.") ? ["bright"] : null), h = p ? ['<div class="tfDacPad" data-dac="' + (n ? "more:" : i ? "dash:" : "tile:") + re(e) + '"></div>'] : d.sections.map((b, x) => b && (!m || m.includes((d.parts || [])[x])) ? b : "").filter(Boolean);
    return '<div class="tfAction' + (p ? " tfDac" : "") + (d.on ? " on" : "") + '" data-k="' + re(e) + '"' + (d.tone ? ' data-tone="' + d.tone + '"' : "") + qa(e) + '><div class="tfActionHead">' + Ce(e, d) + Re(e) + "</div>" + h.join("") + "</div>";
  }
  const Fe = "dual-controller-v3", Te = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let Ge = null;
  async function tt() {
    if (Ge || customElements.get(Fe)) return;
    Ge = "loading";
    const e = await Promise.resolve().then(() => R({ type: "lovelace/resources" })).catch(() => null), n = Array.isArray(e) && e.some((d) => /dual-axis-controller/i.test(d.url || ""));
    if (await Promise.race([customElements.whenDefined(Fe), new Promise((d) => setTimeout(d, n ? 8e3 : 0))]), customElements.get(Fe)) return;
    const i = Object.assign(document.createElement("script"), { src: Te });
    i.onerror = () => {
      Ge = "failed", G();
    }, document.head.appendChild(i);
  }
  const Be = /* @__PURE__ */ new Map(), et = (e) => (vt.lightStyles[e] || vt.lights) === "dac", nt = () => vt.lights === "dac" || Object.values(vt.lightStyles).includes("dac");
  function Yt(e) {
    return et(e) && !!customElements.get(Fe);
  }
  const Pe = (e) => vt.lightPads[e] || vt.dacPad, Bt = () => {
    const e = o();
    return e && {
      ...e,
      themes: { ...e.themes || {}, darkMode: !f.classList.contains("light") },
      callService: (n, i, d, ...p) => e.callService(n, ...gr(n, i, d), ...p)
    };
  }, qt = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", ca = (e) => {
    !e.shadowRoot || e.shadowRoot.querySelector("style[data-tf]") || (e.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: qt })).dataset.tf = "");
  }, wa = /* @__PURE__ */ new Map(), Bi = new ResizeObserver((e) => e.forEach(({ target: n }) => {
    const i = n.parentElement;
    !i || !n.offsetHeight || (i.style.removeProperty("min-height"), wa.set(i.dataset.dac, i.offsetHeight));
  }));
  function ya(e) {
    e.querySelectorAll("[data-dac]").forEach((n) => {
      const i = n.dataset.dac;
      let d = Be.get(i);
      if (!d) {
        const p = i.slice(i.indexOf(":") + 1);
        d = document.createElement(Fe), d.setConfig({ type: "custom:" + Fe, entity: p, pad: Pe(p), tap_action: { action: "none" } }), Be.set(i, d);
      }
      d.hass = Bt(), d.parentNode !== n && n.replaceChildren(d), !d.offsetHeight && wa.has(i) && (n.style.minHeight = wa.get(i) + "px"), Bi.observe(d), ca(d);
    });
  }
  function Tr() {
    const e = Bt();
    Be.forEach((n, i) => {
      n.isConnected ? n.hass = e : Be.delete(i);
    });
  }
  customElements.whenDefined(Fe).then(() => {
    w && (E != null && E.querySelector("[data-tf]")) && Ur(Ia);
  });
  const mt = (e, n, i) => je.has(e + "|" + n) ? je.get(e + "|" + n) : i;
  function cn(e) {
    var m;
    const n = k[e], i = n.attributes, d = e.split(".")[0], p = (h, b) => ({ act: St(h, "toggle", e), label: b });
    if (d === "light") {
      const h = n.state === "on", b = Ai(e), [x, D] = yo(e), H = mt("bright", e, Wa(n));
      h && S(e, Wa(n));
      const F = mt("ct", e, h && i.color_mode === "color_temp" ? i.color_temp_kelvin : null), ie = mt("hue", e, h && Ad.includes(i.color_mode) && i.hs_color ? i.hs_color[0] : null);
      return { on: h, button: p("light", "Turn " + xe(e) + (h ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        ja(e) && ko("bright", e, H / 100, xe(e) + " brightness", H + "%", !1, h ? null : ba[e] ?? null),
        b.includes("color_temp") && ko("ct", e, F == null ? null : (F - x) / (D - x), xe(e) + " warm to cool", F == null ? "" : Math.round(F) + " kelvin", !0),
        b.some((ke) => Ad.includes(ke)) && ko("hue", e, ie == null ? null : ie / 360, xe(e) + " colour", "", !0)
      ] };
    }
    if (d === "climate") {
      const h = i.target_temp_step || 0.5, b = Number(i.temperature);
      return { on: n.state !== "off", tone: n.state === "cool" || i.hvac_action === "cooling" ? "cool" : "heat", button: p("climate", "Turn " + xe(e) + (n.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(b) && L("Target temperature", qn(b) + " °C", St("climate", "set_temperature", e, { temperature: b - h }), St("climate", "set_temperature", e, { temperature: b + h })),
        O("tfSeg", "Mode", (i.hvac_modes || []).map((x) => ({ label: We(x), act: St("climate", "set_hvac_mode", e, { hvac_mode: x }), pressed: n.state === x })))
      ] };
    }
    if (d === "cover") {
      const h = n.state === "opening" || n.state === "closing", b = n.state === "closed", x = Va(e), D = oo(e);
      return { on: !b, tone: "blue", icon: Wc[Sd(n)][b ? 1 : 0], button: p("cover", (b ? "Open " : "Close ") + xe(e)), parts: ["blocks", "tilt", "buttons"], sections: [
        Wt(e, Oc) && de(e, x),
        D != null && ge(e, D),
        He(e, x, h)
      ] };
    }
    if (d === "humidifier") {
      const h = Number(i.humidity);
      return { on: n.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: p("humidifier", "Turn " + xe(e) + (n.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(h) && L("Target humidity", h + "%", St("humidifier", "set_humidity", e, { humidity: h - 1 }), St("humidifier", "set_humidity", e, { humidity: h + 1 })),
        ((m = i.available_modes) == null ? void 0 : m.length) && O("tfSeg", "Mode", i.available_modes.map((b) => ({ label: We(b), act: St("humidifier", "set_mode", e, { mode: b }), pressed: i.mode === b })))
      ] };
    }
    if (d === "media_player") {
      const h = n.state === "playing", b = n.state === "off" || n.state === "standby", x = mt("vol", e, i.volume_level), D = b ? { act: St("media_player", Wt(e, nf) ? "turn_on" : "toggle", e), label: "Turn " + xe(e) + " on" } : n.state === "playing" || n.state === "paused" ? { act: St("media_player", "media_play_pause", e), label: (h ? "Pause " : "Play ") + xe(e) } : { act: St("media_player", Wt(e, af) ? "turn_off" : "toggle", e), label: "Turn " + xe(e) + " off" };
      return { on: !b, tone: "blue", art: !b && i.entity_picture ? i.entity_picture : null, button: D, parts: ["playback", "volume"], sections: b ? [] : [
        (Wt(e, Ic) || Wt(e, Hc) || Wt(e, Pc) || Wt(e, Fc)) && O("tfSeg", "Playback", [
          { html: Bl.prev, aria: "Previous", act: St("media_player", "media_previous_track", e), disabled: !Wt(e, Ic) },
          { html: h ? Bl.pause : Bl.play, aria: h ? "Pause" : "Play", act: St("media_player", "media_play_pause", e), disabled: !(Wt(e, Pc) || Wt(e, Fc)) },
          { html: Bl.next, aria: "Next", act: St("media_player", "media_next_track", e), disabled: !Wt(e, Hc) }
        ]),
        Wt(e, tf) && x != null && ko("vol", e, x, xe(e) + " volume", Math.round(x * 100) + "%")
      ] };
    }
    if (d === "vacuum") {
      const h = n.state === "cleaning", b = i.rooms || [], x = (H) => b.includes(H) ? b.filter((F) => F !== H) : b.concat(H), D = St("vacuum", h ? "pause" : "start", e, br(e) ? { rooms: b } : null);
      return { on: h || n.state === "returning", tone: "blue", button: { act: D, label: (h ? "Pause " : "Start ") + xe(e) }, parts: ["controls", "rooms"], sections: [
        O("tfSeg", xe(e), [
          { label: h ? "Pause" : "Start", act: D },
          { label: "Dock", act: St("vacuum", "return_to_base", e), disabled: n.state === "docked" },
          { label: "Locate", act: St("vacuum", "locate", e) }
        ]),
        br(e) && O("tfChips", "Rooms to clean", Je.rooms.filter((H) => H.id !== "balcony").map((H) => ({ label: H.name, act: St("vacuum", "set_rooms", e, { rooms: x(H.name) }), pressed: b.includes(H.name) })))
      ] };
    }
    if (d === "lock") {
      const h = n.state === "locked";
      return { on: !h, tone: "heat", button: { act: St("lock", h ? "unlock" : "lock", e), label: (h ? "Unlock " : "Lock ") + xe(e) }, parts: ["controls"], sections: [
        O("tfSeg", xe(e), [
          { label: "Lock", act: St("lock", "lock", e), pressed: h },
          { label: "Unlock", act: St("lock", "unlock", e), pressed: n.state === "unlocked" },
          Wt(e, wf) && { label: "Open", act: St("lock", "open", e), pressed: n.state === "open" }
        ])
      ] };
    }
    if (d === "alarm_control_panel") {
      const h = n.state === "disarmed";
      return { on: !h, tone: n.state === "triggered" ? "alarm" : "blue", button: { act: St("alarm_control_panel", h ? "alarm_arm_away" : "alarm_disarm", e), label: h ? "Arm " + xe(e) + ", away" : "Disarm " + xe(e) }, parts: ["controls"], sections: [
        O("tfSeg", xe(e), yf.filter(([, , , b]) => !b || Wt(e, b)).map(([b, x, D]) => ({ label: x, act: St("alarm_control_panel", D, e), pressed: n.state === b })))
      ] };
    }
    if (d === "valve") {
      const h = n.state === "open";
      return { on: h, tone: "blue", icon: "mdi:sprinkler-variant", button: p("valve", (h ? "Close " : "Open ") + xe(e)), parts: ["controls"], sections: [
        O("tfSeg", xe(e), [
          { label: "Open", act: St("valve", "open_valve", e), pressed: h },
          { label: "Close", act: St("valve", "close_valve", e), pressed: !h }
        ])
      ] };
    }
    return { on: !1, button: { act: "", label: xe(e) }, sections: [] };
  }
  const Qn = (e) => (Number.isInteger(Number(e)) ? String(Number(e)) : qn(e)) + "°";
  function Ua(e) {
    var we;
    const n = (V) => e.readings.find((ve) => xt(ve).device_class === V), i = n("temperature"), d = n("humidity"), p = (V) => {
      var ve;
      return Number((ve = k[V]) == null ? void 0 : ve.state);
    }, m = (V) => e.actions.filter((ve) => V.test(ve)), h = e.lights.filter((V) => {
      var ve;
      return ((ve = k[V]) == null ? void 0 : ve.state) === "on";
    }), b = m(/^cover\./), x = b.filter((V) => {
      var ve;
      return ((ve = k[V]) == null ? void 0 : ve.state) !== "closed";
    }), D = [...new Set(b.map((V) => Sd(k[V])))], H = m(/^climate\./)[0], F = m(/^humidifier\./)[0], ie = m(/^media_player\./), ke = ie.find((V) => {
      var ve;
      return ((ve = k[V]) == null ? void 0 : ve.state) === "playing";
    }) || ie.find((V) => {
      var ve;
      return ((ve = k[V]) == null ? void 0 : ve.state) === "paused";
    }), Ee = e.plugs.filter((V) => {
      var ve;
      return ((ve = k[V]) == null ? void 0 : ve.state) === "on";
    }), te = [];
    if (i && Number.isFinite(p(i)) && te.push({ key: "temp", id: i, kind: "reading", icon: mo(i), label: "Temperature", value: qn(p(i)) + "°" }), d && Number.isFinite(p(d)) && te.push({ key: "hum", id: d, kind: "reading", icon: mo(d), label: "Humidity", value: Math.round(p(d)) + "%" }), e.lights.length && te.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: mo("", "mdi:lightbulb"),
      label: "Lights",
      value: h.length ? h.length + " of " + e.lights.length + " on" : "All off",
      short: h.length ? h.length + " on" : "Off",
      on: h.length > 0,
      light: h.length ? dn(h[0]) : "",
      acts: e.lights.map((V) => ["light", h.length ? "turn_off" : "turn_on", V]),
      aria: (h.length ? "Turn off" : "Turn on") + " the lights in " + e.name
    }), b.length) {
      const V = D.length === 1 ? df[D[0]] : "covers", ve = Math.round(b.reduce((Oe, ft) => Oe + zn(ft), 0) / b.length);
      te.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        icon: mo("", ((we = Wc[D[0]]) == null ? void 0 : we[x.length ? 0 : 1]) || "mdi:window-shutter"),
        label: We(V),
        value: ve <= 0 ? "Closed" : ve >= 100 ? "Open" : ve + "% open",
        short: ve <= 0 ? "Closed" : ve + "%",
        on: x.length > 0,
        acts: b.map((Oe) => ["cover", x.length ? "close_cover" : "open_cover", Oe]),
        aria: (x.length ? "Close the " : "Open the ") + V + " in " + e.name
      });
    }
    if (H) {
      const V = xt(H), ve = k[H].state === "off";
      te.push({
        key: "climate",
        kind: "control",
        tone: V.hvac_action === "cooling" ? "cool" : "heat",
        icon: mo(H),
        label: xe(H),
        value: ve ? "Off" : We(V.hvac_action || k[H].state) + " · " + Qn(V.temperature),
        short: ve ? "Off" : Qn(V.temperature),
        on: !ve,
        acts: [["climate", "toggle", H]],
        aria: "Turn " + xe(H) + (ve ? " on" : " off")
      });
    }
    if (F) {
      const V = k[F].state === "on";
      te.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        icon: mo("", "mdi:air-humidifier"),
        label: xe(F),
        value: V ? "On · " + xt(F).humidity + "%" : "Off",
        short: V ? xt(F).humidity + "%" : "Off",
        on: V,
        acts: [["humidifier", "toggle", F]],
        aria: "Turn " + xe(F) + (V ? " off" : " on")
      });
    }
    if (ie.length) {
      const V = ke || ie[0], ve = k[V], Oe = ve.state === "playing";
      te.push({
        key: "media",
        kind: "control",
        tone: "blue",
        icon: mo(V),
        label: xe(V),
        value: an(V),
        short: Oe ? "Playing" : ve.state === "paused" ? "Paused" : We(ve.state),
        on: Oe,
        acts: [["media_player", ve.state === "playing" || ve.state === "paused" ? "media_play_pause" : "toggle", V]],
        aria: (Oe ? "Pause " : "Play ") + xe(V)
      });
    }
    return e.plugs.length && te.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      icon: mo("", "mdi:power-plug"),
      label: "Plugs",
      value: Ee.length ? Ee.length + " of " + e.plugs.length + " on" : "All off",
      short: Ee.length ? Ee.length + " on" : "Off",
      on: Ee.length > 0,
      acts: e.plugs.map((V) => ["switch", Ee.length ? "turn_off" : "turn_on", V]),
      aria: (Ee.length ? "Turn off" : "Turn on") + " the plugs in " + e.name
    }), e.alerts.forEach((V) => te.push(xt(V).device_class === "moisture" ? { key: "alert:" + V, kind: "alert", icon: mo(V), label: "Water leak" } : { key: "note:" + V, kind: "note", icon: mo(V), label: xe(V) + " " + an(V).toLowerCase() })), te;
  }
  const _a = (e, n) => {
    const i = (d) => e.actions.filter((p) => d.test(p));
    return {
      lights: e.lights,
      covers: i(/^cover\./),
      climate: i(/^climate\./).slice(0, 1),
      humidifier: i(/^humidifier\./).slice(0, 1),
      plugs: e.plugs,
      media: (() => {
        const d = i(/^media_player\./);
        return [d.find((p) => {
          var m;
          return ((m = k[p]) == null ? void 0 : m.state) === "playing";
        }) || d.find((p) => {
          var m;
          return ((m = k[p]) == null ? void 0 : m.state) === "paused";
        }) || d[0]].filter(Boolean);
      })()
    }[n] || [];
  }, Pi = (e, n, i) => '<button class="' + n + (e.on ? " on" : "") + '" type="button" data-tone="' + e.tone + '" data-acts="' + io(e.acts) + '" aria-label="' + re(e.aria) + '" aria-pressed="' + e.on + '">' + i + "</button>", Ko = (e) => '<button class="tfAName" type="button" data-go="' + re(e.id) + '" aria-label="Open ' + re(e.name) + '">' + re(e.name) + "</button>";
  function xn(e, n, i = !1) {
    const d = n.find((b) => b.key === "lights"), p = !!(d != null && d.on), m = "", h = '<span class="tfAreaGlyph"' + Rt("area:" + e.id, e.icon || "mdi:texture-box", e.name) + "></span>";
    return i || !d ? '<span class="tfIcon tfAreaIcon' + (p ? " on" : "") + '"' + m + ' aria-hidden="true">' + h + "</span>" : '<button class="tfIcon tfAreaIcon' + (p ? " on" : "") + '" type="button"' + m + ' data-acts="' + io(d.acts) + '" aria-label="' + re(d.aria) + '" aria-pressed="' + p + '">' + h + "</button>";
  }
  const ss = (e) => e.filter((n) => n.kind === "alert" || n.kind === "note").map((n) => '<span class="sourceTag">' + re(n.label) + "</span>").join(" "), jt = (e) => e.readings.find((n) => xt(n).device_class === "temperature") || [...e.readings, ...e.solar, ...e.openings, ...e.actions, ...e.plugs].find((n) => k[n]) || null, Gs = (e, n) => {
    const i = xe(n);
    return i.toLowerCase().startsWith(e.name.toLowerCase() + " ") ? We(i.slice(e.name.length + 1)) : i;
  };
  function Us(e) {
    const n = k[e], i = xt(e), d = e.split(".")[0], p = Number(n.state);
    if (n.state === "unavailable") return { text: "Unavailable" };
    if (d === "sensor" && Number.isFinite(p)) {
      if (i.device_class === "temperature") return { text: Qn(p) };
      const m = i.unit_of_measurement || "";
      return m === "%" ? { text: Math.round(p) + "%" } : { text: qn(p, Number.isInteger(p) ? 0 : 1), unit: m };
    }
    if (d === "climate" && (i.current_temperature ?? i.temperature) != null) return { text: Qn(i.current_temperature ?? i.temperature) };
    if (d === "light") return { text: n.state !== "on" ? "Off" : ja(e) ? Wa(n) + "%" : "On" };
    if (d === "cover") {
      const m = zn(e);
      return { text: m <= 0 ? "Closed" : m >= 100 ? "Open" : m + "%" };
    }
    return d === "humidifier" ? { text: n.state === "on" ? i.humidity + "%" : "Off" } : d === "media_player" ? { text: n.state === "playing" ? "Playing" : n.state === "paused" ? "Paused" : We(n.state) } : { text: an(e) };
  }
  const Ys = (e, n, i) => {
    const d = i.find((b) => b.key === "temp"), p = i.find((b) => b.key === "hum"), m = xt(n), h = k[n].state === "off";
    return n.startsWith("climate.") ? [Gs(e, n), h ? "Off" : We(m.hvac_action || k[n].state) + (m.temperature != null ? " · " + Qn(m.temperature) : ""), p && p.value + " humidity"].filter(Boolean).join(" · ") : [!(d && d.id === n) && Gs(e, n), d && d.id !== n && d.value, p && p.id !== n && p.value + " humidity"].filter(Boolean).join(" · ");
  };
  function $o(e, n, i) {
    const d = i && Us(i), p = i ? Ys(e, i, n) : "", m = (b) => {
      const x = _a(e, b.key);
      return x.length === 1 ? x[0] : "group:" + e.id + ":" + b.key;
    }, h = n.filter((b) => b.kind === "control").slice(0, 4).map((b) => '<div class="tfATile' + (b.on ? " on" : "") + '" data-tone="' + b.tone + '"' + (b.light ? ' data-light style="' + b.light + '"' : "") + ">" + Pi(b, "tfIcon", b.icon) + '<button class="tfName" type="button" data-more="' + re(m(b)) + '" aria-label="' + re(e.name + " " + b.label.toLowerCase() + ", " + b.value + ". Open") + '"><span class="activityRowName">' + re(b.label) + '</span><span class="activityRowMeta">' + re(b.value) + "</span></button></div>");
    return '<div class="workoutPanelTop">' + xn(e, n) + '<div class="tfATitle">' + Ko(e) + ss(n) + "</div></div>" + (i ? '<button class="tfABig" type="button" data-more="' + re(i) + '" aria-label="' + re(xe(i) + ", " + an(i) + ". More info") + '"><span class="tfABigMain' + (d.text.length > 7 ? " long" : "") + '">' + re(d.text) + (d.unit ? '<span class="tfABigUnit">' + re(d.unit) + "</span>" : "") + "</span>" + (p ? '<span class="tfABigSub">' + re(p) + "</span>" : "") + "</button>" : "") + (h.length ? '<div class="tfATiles">' + h.join("") + "</div>" : "");
  }
  function Ul(e) {
    const n = e.id === oe, i = Ua(e), d = jt(e), p = d && Us(d), m = [...i.filter((h) => h.kind === "control"), ...i.filter((h) => h.kind !== "control" && h.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (n ? " active" : "") + '" data-area="' + re(e.id) + '" tabindex="0" aria-expanded="' + n + '" aria-label="' + re(e.name) + '"><div class="panelExpanded"' + (n ? "" : " inert") + ">" + $o(e, i, d) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + xn(e, i, !0) + '<span class="tfACName">' + re(e.name) + '</span></div><span class="tfACMain">' + (p ? re(p.text + (p.unit ? " " + p.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + m.map((h) => '<span class="tfACTile"><span class="tfIcon' + (h.kind === "alert" ? " alert" : "") + '"' + (h.on && h.light ? ' data-light style="' + h.light + '"' : "") + ">" + h.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let Pt = [];
  const Ya = (e) => '<div class="tfAreas" data-tf data-k="areas" style="order:' + e + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + Pt.map(Ul).join("") + "</section></div>", Xo = () => [
    { key: "home", name: "Home", ids: Je.homeVacuums },
    ...Je.rooms.map((e) => ({ key: "room:" + e.id, name: e.name, room: e, ids: e.actions }))
  ], Ii = (e, n, i) => e + " " + (e === 1 ? n : i), Nn = () => (q.favourites ?? se.favorite_entities ?? []).filter((e) => k[e]);
  function Lr() {
    if (!$e) {
      const n = Object.entries(lt).sort((d, p) => p[1] - d[1]).map(([d]) => d), i = Je.rooms.flatMap((d) => d.actions);
      $e = [.../* @__PURE__ */ new Set([...ye, ...n, ...i.filter((d) => cn(d).on), ...i])];
    }
    const e = Nn();
    return $e.filter((n) => k[n] && k[n].state !== "unavailable" && !e.includes(n));
  }
  let Hi = !1;
  function Za() {
    if (!Hi || q.favSeeded || !Je.rooms.length) return;
    const e = (i) => Object.keys(k).find((d) => br(d) && i(d)), n = [e((i) => i.startsWith("climate.")), e((i) => i.startsWith("cover.") && /curtain/.test(i)), e((i) => i.startsWith("valve.")), Je.security.locks[0]];
    q = { ...q, favourites: [.../* @__PURE__ */ new Set([...q.favourites ?? se.favorite_entities ?? [], ...n.filter(Boolean)])], favSeeded: !0 }, Wn();
  }
  const xa = () => q.suggest ?? !se.hide_suggested_entities;
  function Yl() {
    const e = new Set(q.favHidden || []), n = Nn().filter((d) => !e.has(d)), i = xa() ? Lr().filter((d) => !e.has(d) && hs(d)) : [];
    return [...n, ...i].slice(0, kf);
  }
  const ro = (e) => {
    const n = Nn().includes(e);
    return '<button class="tfStar" type="button" data-star="' + re(e) + '" aria-pressed="' + n + '" aria-label="Favourite: ' + re(xe(e)) + '">' + bf(n) + "</button>";
  };
  function Ar(e, { area: n = !1, star: i = !1, plain: d = !1, say: p = null, alert: m = !1 } = {}) {
    var Ee, te, we, V, ve, Oe;
    const h = d && ((ve = (Ee = o()) == null ? void 0 : Ee.devices) == null ? void 0 : ve[(V = (we = (te = o()) == null ? void 0 : te.entities) == null ? void 0 : we[e]) == null ? void 0 : V.device_id]), b = h && (h.name_by_user || h.name) || xe(e), x = e.split(".")[0], D = !d && Il.includes(x) ? cn(e) : null, H = D ? D.on : ["on", "open", "playing"].includes((Oe = k[e]) == null ? void 0 : Oe.state), F = d ? null : D ? D.button : cf.includes(x) ? { act: St(x, "toggle", e), label: "Turn " + xe(e) + (H ? " off" : " on") } : x === "scene" || x === "script" ? { act: St(x, "turn_on", e), label: "Run " + xe(e) } : null, ie = (p ?? an(e)) + (n && At.get(e) ? " · " + At.get(e) : ""), ke = (D == null ? void 0 : D.icon) || on(e);
    return '<div class="activityRow' + (F ? " tfPlug" : "") + (H ? " on" : "") + (i ? " tfPick" : "") + (m ? " alert" : "") + '" data-k="' + re((n ? "fav:" : "row:") + e) + '" data-tone="' + (x === "light" ? "light" : (D == null ? void 0 : D.tone) || "blue") + '"' + qa(e) + ">" + (F && !i ? '<button class="tfIcon" type="button" data-act="' + F.act + '" aria-label="' + re(F.label) + '"' + Rt(e, ke) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + Rt(e, ke) + "></div>") + '<button class="tfName" type="button" data-more="' + re(e) + '" aria-label="' + re(b + ", " + ie + ". More info") + '"><span class="activityRowName">' + re(b) + '</span><span class="activityRowMeta">' + re(ie) + "</span></button>" + (i ? ro(e) : "") + "</div>";
  }
  const ka = () => {
    var e;
    return k[(e = q.sources) == null ? void 0 : e.weather] ? q.sources.weather : k["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(k).find((n) => n.startsWith("weather."));
  };
  function Zs() {
    var i;
    const e = (d) => Object.keys(k).filter((p) => p.startsWith("binary_sensor.") && d.includes(xt(p).device_class));
    return ((i = fe.alert_entities) != null && i.length ? fe.alert_entities : [...e(["moisture", "smoke", "gas"]).map((d) => ({ entity: d, severity: "alert" })), ...e(Pl).map((d) => ({ entity: d, severity: "warning" }))]).filter((d) => k[d.entity]).map((d) => ({ ...d, on: ["on", "open", "unlocked", "triggered", "problem"].includes(k[d.entity].state) }));
  }
  function Zl() {
    const e = Object.keys(Td), n = /* @__PURE__ */ new Set(), i = [];
    return (se.shortcuts || []).forEach((d) => {
      if (d.type === "summary") {
        if (!e.includes(d.key) || n.has(d.key)) return;
        n.add(d.key);
      }
      i.push(d);
    }), e.forEach((d) => {
      n.has(d) || i.push({ type: "summary", key: d });
    }), i;
  }
  function ls() {
    var we;
    const e = ((we = o()) == null ? void 0 : we.entities) || {}, n = (V) => xt(V).device_class, i = Object.keys(k).filter((V) => V.startsWith("sensor.") && n(V) === "battery" || V.startsWith("binary_sensor.") && ["battery", "problem"].includes(n(V))), d = Je.rooms.flatMap((V) => V.plants.map((ve) => ve.id));
    if (!i.length && !d.length) return null;
    const p = (V) => {
      var Oe;
      const ve = (Oe = e[V]) == null ? void 0 : Oe.device_id;
      return !!ve && Object.keys(k).some((ft) => {
        var Se;
        return ft.startsWith("binary_sensor.") && ((Se = e[ft]) == null ? void 0 : Se.device_id) === ve && n(ft) === "battery_charging" && k[ft].state === "on";
      });
    }, m = (V) => V.startsWith("vacuum.") ? xt(V).battery_level <= 20 && k[V].state !== "docked" : V.startsWith("binary_sensor.") ? n(V) === "battery" && k[V].state === "on" : parseFloat(k[V].state) <= 20 && !p(V), h = [...i, ...Je.vacuums].filter((V) => k[V] && m(V)), b = [...i.filter((V) => n(V) === "problem" && k[V].state === "on"), ...d.filter((V) => {
      var ve;
      return ((ve = k[V]) == null ? void 0 : ve.state) === "problem";
    })], x = i.filter((V) => k[V].state === "unavailable"), D = [.../* @__PURE__ */ new Set([...h, ...b, ...x])], H = (V) => {
      const ve = parseFloat(k[V].state);
      return n(V) === "battery" && Number.isFinite(ve) ? ve : 101;
    }, F = [...d, ...Je.vacuums, ...[...i].sort((V, ve) => H(V) - H(ve))].filter((V) => k[V] && !D.includes(V)), ie = /* @__PURE__ */ new Map();
    F.forEach((V) => {
      var Oe;
      const ve = ((Oe = Je.areaOf) == null ? void 0 : Oe.call(Je, V)) || "";
      ie.set(ve, [...ie.get(ve) || [], V]);
    });
    const ke = (V) => {
      const ve = Je.rooms.findIndex((Oe) => Oe.id === V);
      return V === "" ? 1 / 0 : ve < 0 ? Je.rooms.length : ve;
    }, Ee = [...ie.keys()].sort((V, ve) => ke(V) - ke(ve)), te = (V) => {
      var ve, Oe, ft, Se;
      return ((ve = Je.rooms.find((at) => at.id === V)) == null ? void 0 : ve.name) || ((Se = (ft = (Oe = o()) == null ? void 0 : Oe.areas) == null ? void 0 : ft[V]) == null ? void 0 : Se.name) || V;
    };
    return {
      value: [h.length && Ii(h.length, "low battery", "low batteries"), b.length && Ii(b.length, "problem", "problems"), x.length && Ii(x.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: D, alert: !0 }, ...Ee.map((V) => ({ name: V ? te(V) : Ee.length > 1 ? "Other devices" : "Devices", ids: ie.get(V) }))].filter((V) => V.ids.length)
    };
  }
  function Fi() {
    var Ln;
    const e = Je.rooms, n = Je.security, i = (Ze, Zt) => Ze.actions.filter((kl) => Zt.test(kl)), d = (Ze) => e.map((Zt) => ({ name: Zt.name, ids: Ze(Zt) })).filter((Zt) => Zt.ids.length), p = e.flatMap((Ze) => Ze.lights), m = p.filter((Ze) => {
      var Zt;
      return ((Zt = k[Ze]) == null ? void 0 : Zt.state) === "on";
    }).length, h = e.map((Ze) => Ze.readings.find((Zt) => xt(Zt).device_class === "temperature")).filter(Boolean).map((Ze) => Number(k[Ze].state)).filter(Number.isFinite), [b, x] = [qn(Math.min(...h)), qn(Math.max(...h))], D = e.flatMap((Ze) => i(Ze, /^media_player\./)), H = D.filter((Ze) => {
      var Zt;
      return ((Zt = k[Ze]) == null ? void 0 : Zt.state) === "playing";
    }).length, F = Zs(), ie = F.filter((Ze) => Ze.severity === "warning" && Ze.on).length, ke = n.locks.filter((Ze) => {
      var Zt;
      return ["unlocked", "jammed", "open"].includes((Zt = k[Ze]) == null ? void 0 : Zt.state);
    }).length, Ee = n.alarms.filter((Ze) => {
      var Zt;
      return ((Zt = k[Ze]) == null ? void 0 : Zt.state) === "disarmed";
    }).length, te = ie ? Ii(ie, "warning", "warnings") : null, we = ke ? ke + " unlocked" : Ee ? Ee + " disarmed" : te ? null : "All secure", V = ls(), ve = e.flatMap((Ze) => Ze.solar), Oe = ve.find((Ze) => Ze.endsWith("_power")), ft = {
      light: p.length && { value: m ? m + " on" : "All off", groups: d((Ze) => Ze.lights) },
      climate: h.length && { value: b === x ? b + "°" : b + " - " + x + "°", groups: d((Ze) => [...Ze.readings.filter((Zt) => ["temperature", "humidity"].includes(xt(Zt).device_class)), ...i(Ze, /^(climate|humidifier)\./)]) },
      security: (n.alarms.length || n.locks.length) && { value: [te, we].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...n.alarms, ...n.locks] }, { name: "Doors and windows", ids: n.openings }].filter((Ze) => Ze.ids.length) },
      media_players: D.length && { value: H ? H + " playing" : "No media playing", groups: d((Ze) => i(Ze, /^media_player\./)) },
      maintenance: V,
      energy: Je.grid && { value: Ga(Number(((Ln = k[Oe]) == null ? void 0 : Ln.state) || 0) * 1e3 + Number(k[Je.grid].state)) + " now", groups: [{ name: "Energy", ids: [...ve, Je.grid] }] }
    }, Se = [], at = F.filter((Ze) => Ze.severity !== "warning" && Ze.on);
    return at.length && Se.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: Ii(at.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: at.map((Ze) => Ze.entity) }] }), Zl().forEach((Ze) => {
      Ze.type !== "summary" ? Se.push({ key: "path:" + Ze.path, name: Ze.label || Ze.path, icon: Ze.icon || "mdi:link-variant", colour: "", value: "" }) : !Ze.hidden && ft[Ze.key] && !(q.hiddenSums || []).includes(Ze.key) && Se.push({ key: Ze.key, ...Td[Ze.key], ...ft[Ze.key] });
    }), Se;
  }
  const Ks = (e) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + re(e.key) + '" data-k="sum:' + re(e.key) + '" aria-label="' + re(e.name + (e.value ? ", " + e.value : "")) + '"' + (e.key === "alerts" ? ' style="--sum:' + e.colour + ';--sum-ink:#ffffff"' : "") + '><div class="tfIcon" aria-hidden="true"' + Rt(e.id || "", e.icon, e.name) + '></div><div><div class="activityRowName">' + re(e.name) + "</div>" + (e.value ? '<div class="activityRowMeta">' + re(e.value) + "</div>" : "") + "</div></div>";
  function $s(e) {
    const n = Nn();
    q = { ...q, favourites: n.includes(e) ? n.filter((i) => i !== e) : [...n, e], favHidden: (q.favHidden || []).filter((i) => i !== e) }, Wn(), Tn();
  }
  function _r(e) {
    document.querySelector("home-assistant") && (Ie.pushState(null, "", e), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function ds(e, n) {
    if (e.startsWith("path:")) {
      _r(e.slice(5));
      return;
    }
    Rs("summary:" + e, n);
  }
  async function Oi() {
    const e = (h) => Promise.resolve().then(() => R(h)).catch(() => null), [n, i, d, p] = await Promise.all([
      e({ type: "frontend/get_user_data", key: qc }),
      e({ type: "frontend/get_system_data", key: "home" }),
      e({ type: "frontend/get_system_data", key: "security" }),
      e({ type: "usage_prediction/common_control" })
    ]), m = (n == null ? void 0 : n.value) || {};
    q = { favourites: m.favourites ?? null, sources: m.sources, hiddenSums: m.hiddenSums, dash: m.dash, named: m.named, favHidden: m.favHidden, suggest: m.suggest, favSeeded: m.favSeeded }, se = (i == null ? void 0 : i.value) || {}, fe = (d == null ? void 0 : d.value) || {}, ye = Array.isArray(p == null ? void 0 : p.entities) ? p.entities : [], $e = null, Object.keys(k).length && Tn(), Wi(), Hi = !0, Za();
  }
  const Xs = "HomeCore";
  async function Wi() {
    var d, p, m;
    const e = location.pathname.split("/")[1], n = q.named || [];
    if (!((p = (d = o()) == null ? void 0 : d.user) != null && p.is_admin) || !e || n.includes(e)) return;
    const i = () => {
      q = { ...q, named: [...n, e] }, Wn();
    };
    try {
      const h = (m = await R({ type: "lovelace/dashboards/list" })) == null ? void 0 : m.find((D) => D.url_path === e);
      if (!h || h.mode === "yaml") return;
      if (h.title === Xs) {
        i();
        return;
      }
      const b = await R({ type: "lovelace/config", url_path: e }), x = ((b == null ? void 0 : b.views) || []).flatMap((D) => [...D.cards || [], ...(D.sections || []).flatMap((H) => H.cards || [])]);
      if (!x.length || !x.every((D) => (D == null ? void 0 : D.type) === "custom:move-assistant-card" && D.layout === "test-focus")) return;
      await R({ type: "lovelace/dashboards/update", dashboard_id: h.id, title: Xs }), i();
    } catch {
    }
  }
  let Ma = null, qi = 0, Jo = !1;
  const Qo = (e) => {
    const n = e.split(".")[0], i = xt(e).device_class;
    return xf.includes(n) && (n !== "binary_sensor" || Pl.includes(i) || !!Kc[i]);
  }, ei = (e) => e.startsWith("binary_sensor.") ? Kc[xt(e).device_class] : null;
  async function ji() {
    var e;
    if (!(Jo || Date.now() - qi < 30 * 1e3)) {
      Jo = !0, qi = Date.now();
      try {
        const n = Object.keys(((e = o()) == null ? void 0 : e.states) || {}).filter(Qo), i = n.length ? await R({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: n }) : null;
        Ma = Array.isArray(i) ? i.filter((d) => d.entity_id && d.state != null && d.when) : null;
      } catch {
        Ma = null;
      }
      Jo = !1, Tn();
    }
  }
  function cs() {
    const e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), i = (p) => {
      if (!k[p.entity_id] || !Qo(p.entity_id) || !hs(p.entity_id) || ["unavailable", "unknown"].includes(p.state)) return;
      if (ei(p.entity_id)) {
        const h = n.get(p.entity_id);
        p.state === "on" ? (!h || p.when > h.when + 1) && n.set(p.entity_id, { ...p, alarm: !0, cleared: null }) : h && !h.cleared && p.when > h.when && (h.cleared = p.when);
        return;
      }
      const m = e.get(p.entity_id);
      (!m || p.when > m.when + 1) && e.set(p.entity_id, p);
    };
    [...Ma || []].sort((p, m) => p.when - m.when).forEach(i);
    const d = Ma ? qi / 1e3 - 5 : 0;
    return Object.keys(k).forEach((p) => {
      var b;
      const m = k[p], h = m.last_changed ? Date.parse(m.last_changed) / 1e3 : 0;
      h > d && i({ entity_id: p, state: m.state, when: h, context_user_id: (b = m.context) == null ? void 0 : b.user_id });
    }), [...e.values(), ...n.values()].sort((p, m) => m.when - p.when).slice(0, Mf);
  }
  function Ea(e) {
    var d;
    const n = e.context_user_id && Object.keys(k).find((p) => p.startsWith("person.") && xt(p).user_id === e.context_user_id);
    if (n) return xe(n);
    const i = (d = o()) == null ? void 0 : d.user;
    return i && e.context_user_id === i.id ? i.name : ["automation", "script"].includes(e.context_domain) || e.context_event_type === "automation_triggered" ? e.context_name || "Home Assistant" : "";
  }
  function ti(e) {
    const n = e.entity_id.split(".")[0], i = String(e.state);
    return n === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[i] || We(i).toLowerCase() : n === "cover" || n === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[i] || We(i).toLowerCase() : n === "binary_sensor" ? i === "on" ? "opened" : "closed" : n === "climate" ? i === "off" ? "turned off" : "set to " + We(i).toLowerCase() : n === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[i] || We(i).toLowerCase() : n === "alarm_control_panel" ? (Zc[i] || We(i)).toLowerCase() : n === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[i] || We(i).toLowerCase() : i === "on" ? "turned on" : i === "off" ? "turned off" : We(i).toLowerCase();
  }
  function Kl(e) {
    const n = e.entity_id, i = e.alarm && ei(n), d = xe(n) + " " + (i ? i[0] : ti(e)), p = i ? zt(e.when * 1e3) + (e.cleared ? " · " + i[1] + " since " + zt(e.cleared * 1e3) : "") : [Ea(e), zt(e.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (i ? " alert" : "") + '"><div class="tfIcon' + (i ? " alert" : "") + '" aria-hidden="true"' + Rt(n, on(n)) + '></div><button class="tfName" type="button" data-more="' + re(n) + '" data-at="' + Math.round(e.when * 1e3) + '" aria-label="' + re(d + ", " + p + ". More info") + '"><span class="activityRowName">' + re(d) + '</span><span class="activityRowMeta">' + re(p) + "</span></button></div>";
  }
  let zi = null, Mo = 0;
  const Vi = [["electricity", "Electricity", 4.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function Er() {
    var n;
    if (Date.now() - Mo < 5 * 60 * 1e3) return;
    Mo = Date.now();
    const e = [];
    try {
      const i = ((n = await R({ type: "energy/get_prefs" })) == null ? void 0 : n.energy_sources) || [], d = (p) => i.filter((m) => m.type === p).flatMap((m) => p === "grid" ? (m.flow_from || []).map((h) => h.stat_energy_from) : [m.stat_energy_from]).filter(Boolean);
      for (const [p, m, h] of [["electricity", "Electricity", d("grid")], ["solar", "Solar", d("solar")], ["gas", "Gas", d("gas")], ["water", "Water", d("water")]]) {
        if (!h.length) continue;
        const b = await Promise.all(h.map((x) => Promise.resolve(R({ type: "recorder/statistic_during_period", statistic_id: x, calendar: { period: "day" }, types: ["change"] })).then((D) => Number(D == null ? void 0 : D.change) || 0, () => 0)));
        e.push({ key: p, name: m, id: h[0], ids: h, value: b.reduce((x, D) => x + D, 0), unit: xt(h[0]).unit_of_measurement || (p === "gas" || p === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    zi = e, Tn();
  }
  let so = null, Js = [];
  function Dr() {
    var m;
    const e = Js = zi != null && zi.length ? zi : Vi.map(([h, b, x, D]) => {
      const H = "sensor.made_up_energy_" + h;
      return k[H] = { entity_id: H, state: String(x), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: b + " today", unit_of_measurement: D, state_class: "total_increasing" } }, { key: h, name: b, id: H, value: x, unit: D };
    });
    z.clear(), e.some((h) => h.id === so) || (so = e[0].id);
    const n = e.map((h) => {
      const b = Number(h.value).toLocaleString(void 0, { maximumFractionDigits: h.value < 10 ? 2 : 1 }) + " " + h.unit, x = Cf[h.key], D = h.id === so;
      return z.set(h.id, { name: h.name, text: b, icon: x }), '<div class="activityRow tap' + (D ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + re(h.id) + '" aria-pressed="' + D + '" aria-label="' + re(h.name + ", " + b) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + Rt("", x, h.name) + '></div><div><div class="activityRowName">' + re(h.name) + '</div><div class="activityRowMeta">' + re(b) + "</div></div></div>";
    }), i = e.find((h) => h.id === so), d = (((m = Gt().opts.energy) == null ? void 0 : m.graph) || "above") === "below", p = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + re(i.id) + '" role="img" aria-label="' + re(i.name) + ', last 24 hours"></svg></div>';
    return va("dash:energy", 0, "Energy today", n, p, Fi().some((h) => h.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (d ? "" : " graphAbove"));
  }
  function Rr(e) {
    const n = E.querySelector(".tfDash-energy"), i = n == null ? void 0 : n.querySelector(".tfDashGraph svg");
    !i || e === so || (so = e, n.querySelectorAll("[data-energy-pick]").forEach((d) => {
      const p = d.dataset.energyPick === e;
      d.classList.toggle("picked", p), d.setAttribute("aria-pressed", String(p));
    }), i.dataset.graph = e, i.dataset.drawn = "", yn.set("dash:energy", Dr()), ul(!0));
  }
  const Gi = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, us = /* @__PURE__ */ new Map();
  async function $l(e) {
    const n = /* @__PURE__ */ new Date(), i = new Date(n).setHours(0, 0, 0, 0), d = n.getHours(), p = n.getMinutes() / 60, m = Array.from({ length: 24 }, (b, x) => x <= d ? 0 : null);
    if (!e.ids) {
      const b = Gi[e.key] || Gi.electricity, x = b.map((H, F) => F < d ? H : F === d ? H * p : 0), D = x.reduce((H, F) => H + F, 0) || 1;
      return m.map((H, F) => H == null ? null : e.value * x[F] / D);
    }
    const h = us.get(e.id);
    if (h && h.day === i && Date.now() - h.at < 5 * 60 * 1e3) return h.hours;
    try {
      const b = await R({ type: "recorder/statistics_during_period", start_time: new Date(i).toISOString(), end_time: n.toISOString(), statistic_ids: e.ids, period: "hour", types: ["change"] });
      e.ids.forEach((H) => ((b == null ? void 0 : b[H]) || []).forEach((F) => {
        const ie = typeof F.start == "number" ? F.start : Date.parse(F.start), ke = new Date(ie).getHours();
        ie >= i && ke < d && (m[ke] += Number(F.change) || 0);
      }));
      const x = new Date(n).setMinutes(0, 0, 0), D = await Promise.all(e.ids.map((H) => Promise.resolve(R({ type: "recorder/statistic_during_period", statistic_id: H, fixed_period: { start_time: new Date(x).toISOString(), end_time: n.toISOString() }, types: ["change"] })).then((F) => Number(F == null ? void 0 : F.change) || 0, () => 0)));
      m[d] = D.reduce((H, F) => H + F, 0);
    } catch {
    }
    return us.set(e.id, { at: Date.now(), day: i, hours: m }), m;
  }
  async function Bn(e, n) {
    const i = await $l(n);
    if (!e.isConnected) return;
    const d = Math.max(120, e.clientWidth || 260), p = Math.max(60, e.clientHeight || 130), m = 18, h = p - 18, b = d / 24, x = b * 0.72, D = (/* @__PURE__ */ new Date()).getHours(), H = i.map((we) => we ?? 0), F = Math.max(0, ...H), ie = (we) => h - (F > 0 ? we / F * (h - m) : 0), ke = (we) => we.toLocaleString(void 0, { maximumFractionDigits: we < 10 ? 2 : 1 }) + " " + n.unit, Ee = (we) => String(we).padStart(2, "0") + ":00", te = F > 0 ? H.indexOf(F) : -1;
    e.setAttribute("viewBox", "0 0 " + d + " " + p), e.setAttribute("aria-label", n.name + " today by the hour: " + ke(n.value) + (te >= 0 ? ", most " + ke(F) + " at " + Ee(te) : "")), e.innerHTML = [m, (m + h) / 2, h].map((we) => '<line x1="0" x2="' + d + '" y1="' + we + '" y2="' + we + '" stroke="var(--line)" stroke-width="1"/>').join("") + i.map((we, V) => we > 0 ? '<rect x="' + (V * b + (b - x) / 2).toFixed(1) + '" y="' + ie(we).toFixed(1) + '" width="' + x.toFixed(1) + '" height="' + (h - ie(we)).toFixed(1) + '" rx="2" fill="' + (V === D ? "var(--primary)" : "var(--text)") + '"' + (V === D ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((we) => '<text x="' + (we * b).toFixed(1) + '" y="' + (p - 3) + '">' + String(we).padStart(2, "0") + "</text>").join("") + (te >= 0 ? '<text x="0" y="11">Most: ' + re(ke(F)) + " at " + Ee(te) + "</text>" : "");
  }
  function Ui(e) {
    var n;
    (n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches || e.querySelectorAll("rect").forEach((i, d) => i.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: d * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function ni(e) {
    var p;
    if ((p = window.matchMedia) != null && p.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [n, i] = e.querySelectorAll("path");
    if (!(i != null && i.getTotalLength)) return;
    const d = i.getTotalLength();
    i.animate([{ strokeDasharray: d, strokeDashoffset: d }, { strokeDasharray: d, strokeDashoffset: 0 }], { duration: 700, easing: "cubic-bezier(.2,.7,.3,1)" }), n == null || n.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, delay: 200, easing: "ease-out", fill: "backwards" });
  }
  let Nr = null, ps = 0;
  const hs = (e) => !e.startsWith("light.") || Tf.includes((At.get(e) || "").toLowerCase()), fs = () => Math.max(2, Co((E == null ? void 0 : E.clientWidth) || 0).n), Br = (e) => {
    const n = cn(e), i = n.sections.findIndex(Boolean);
    return i < 0 ? [] : [n.parts[i]];
  };
  function Qs(e) {
    const n = Gt().tiles;
    if (n) return n.filter((d) => k[d]);
    if (!Nr) {
      const d = (p) => {
        var m;
        return (((m = k[p]) == null ? void 0 : m.state) === "on" ? 1e6 : 0) + (lt[p] || 0);
      };
      Nr = {
        lights: Je.rooms.flatMap((p) => p.lights).filter((p) => {
          var m;
          return hs(p) && ((m = k[p]) == null ? void 0 : m.state) !== "unavailable";
        }).sort((p, m) => d(m) - d(p) || xe(p).localeCompare(xe(m))),
        climates: Je.rooms.flatMap((p) => p.actions.filter((m) => m.startsWith("climate.")))
      };
    }
    const i = Nr.climates.filter((d) => k[d]).slice(0, e > 3 ? 2 : 1);
    return [...Nr.lights.filter((d) => k[d]).slice(0, Math.max(0, e - i.length)), ...i];
  }
  const ai = (e, n, i, d) => (p) => '<section class="card tfCard tfDashCard ' + e + '" data-tf data-k="' + n + '" aria-label="' + i + '">' + (d ? '<div class="activityHeader">' + (n === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + i + "</button>" : '<div class="activityTitle">' + i + "</div>") + "</div>" : "") + '<div class="activityRows">' + p + "</div></section>";
  function ms(e, n) {
    var m, h;
    e.dash = !0, e.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + re(((h = (m = o()) == null ? void 0 : m.config) == null ? void 0 : h.location_name) || "Home") + "</h1>" }), n.length && e.push({ key: "sums", wrap: (b) => '<div class="tfDashBarRow" data-tf data-k="sums">' + ai("tfDash-bar", "sums-bar", "Summaries", !1)(b).replace(" data-tf", "") + "</div>", tiles: n.map((b) => ({ key: "sum:" + b.key, html: Ks(b) })) }), Pt.length && e.push({ key: "areas", html: Ya(0) });
    const i = Yl();
    i.length && e.push({ key: "favs", wrap: ai("tfDash-favs", "favs", "Favourites", !0), tiles: i.map((b) => ({ key: "fav:" + b, html: Ar(b, { area: !0 }) })) });
    const d = cs();
    e.push({ key: "dash:act", html: va("dash:act", 0, "Activity", d.length ? d.map(Kl) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), e.push({ key: "dash:energy", html: Dr() });
    const p = fs();
    return ps = p, Qs(p >= 3 ? p : p * 2).forEach((b) => e.push({
      key: "dash:tile:" + b,
      wrap: (x) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + re(b) + '">' + x + "</div>",
      tiles: [{ key: b, html: Ne(b, !1, Br(b)) }]
    })), ji(), Er(), e;
  }
  const ua = 252, Vt = 16, gs = 200, Xl = Math.round(ua * 1.25), oi = 60, lo = oi + Vt, el = 3, So = { title: "The name", sums: "Summaries", wx: "Weather", areas: "Areas", favs: "Favourites", act: "Activity", energy: "Energy today", avg: "Compared to average", aq: "Air quality", pollen: "Pollen", radar: "Rain radar" }, Jl = ["wx", "favs", "act", "energy", "avg"], tl = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4 }, Pr = 4, Yi = 5, ii = 2, Ka = 90, co = (e) => {
    var n;
    return !!((n = Gt().opts[e]) != null && n.tall);
  }, Pn = (e) => So[e] || xe(e), Zi = 409, ri = 128;
  let rn = !1, Lt = null, Da = null, si = !1, Gn = /* @__PURE__ */ new Map(), $a = 0, Un = 0;
  const Sa = ["title", "sums"], Co = (e) => {
    const n = Math.max(1, Math.floor((e + Vt) / (gs + Vt)));
    return { n, w: Math.max(1, Math.min(Xl, Math.floor((e - (n - 1) * Vt) / n))) };
  }, Gt = () => {
    const e = { cells: {}, spans: {}, hidden: [], opts: {}, ...q.dash || {} }, n = Cn.filter((i) => !(e.known || []).includes(i) && !e.hidden.includes(i));
    return n.length ? { ...e, hidden: [...e.hidden, ...n] } : e;
  };
  function Ki(e) {
    q = { ...q, dash: { ...e, known: Cn } }, Wn();
  }
  function $i() {
    const e = (n) => E.querySelector(n);
    return [
      ["title", e(".tfDashTitle"), "full"],
      ["sums", e(".tfDashBarRow"), "full"],
      ["wx", ht.wx, 2],
      ["areas", e(".tfAreas"), "areas"],
      ["favs", e(".tfDash-favs"), 2],
      ["act", e(".tfDash-act"), 2],
      ["energy", e(".tfDash-energy"), 2],
      ["avg", ht.avg, 2],
      ...Cn.map((n) => [n, ht[n], 1]),
      ...[...E.querySelectorAll(".tfDashTiles > [data-k]")].map((n) => [n.dataset.k, n, 1, !0])
    ].filter(([, n]) => n == null ? void 0 : n.isConnected).map(([n, i, d, p = !1]) => ({ key: n, el: i, span: d, tile: p }));
  }
  const Xi = (e, n, i) => e.span === "full" ? n : e.span === "areas" ? Math.min(n, Math.ceil((Zi + Math.max(0, Pt.length - 1) * (ri + Vt) + Vt) / (i + Vt))) : Math.min(n, Gt().spans[e.key] ?? e.span), li = (e) => tl[e.key] ?? (e.el.classList.contains("tfDac") ? co(e.key) ? Yi : Pr : null);
  function Ra(e, n, i = null) {
    const d = Gt().cells, p = e.every((b) => !d[b.key] || d[b.key].col + b.cols <= n), m = (b) => d[b.key] || { row: 1e9, col: 0 };
    return (() => {
      const b = /* @__PURE__ */ new Set(), x = /* @__PURE__ */ new Map(), D = (te, we, V, ve) => {
        for (let Oe = we; Oe < we + ve; Oe++) for (let ft = te; ft < te + V; ft++) if (b.has(ft + "," + Oe)) return !1;
        return !0;
      }, H = (te, we, V) => {
        for (let ve = V; ve < V + te.rows; ve++) for (let Oe = we; Oe < we + te.cols; Oe++) b.add(Oe + "," + ve);
        x.set(te.key, { col: we, row: V, cols: te.cols, rows: te.rows });
      }, F = (te, we, V) => {
        for (we = Math.max(0, Math.min(n - te.cols, we)), V = Math.max(0, V); !D(we, V, te.cols, te.rows); ) V++;
        H(te, we, V);
      }, ie = (te) => {
        for (let we = 0; ; we++) for (let V = 0; V <= n - te.cols; V++) if (D(V, we, te.cols, te.rows)) {
          H(te, V, we);
          return;
        }
      };
      i && F(i, Lt.col, Lt.row);
      const ke = e.filter((te) => te !== i), Ee = (te, we) => m(te).row - m(we).row || m(te).col - m(we).col;
      return p ? (ke.filter((te) => d[te.key]).sort(Ee).forEach((te) => F(te, d[te.key].col, d[te.key].row)), ke.filter((te) => !d[te.key]).forEach(ie), x) : ([...ke].sort(Ee).forEach(ie), x);
    })();
  }
  function vs(e, n) {
    const i = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map(), p = (m, h, b) => {
      for (let x = h; x < h + b.rows; x++) for (let D = m; D < m + b.cols; D++) if (i.has(D + "," + x)) return !1;
      return !0;
    };
    return e.forEach((m) => {
      for (let h = 0; ; h++) {
        let b = 0;
        for (; b <= n - m.cols && !p(b, h, m); ) b++;
        if (!(b > n - m.cols)) {
          for (let x = h; x < h + m.rows; x++) for (let D = b; D < b + m.cols; D++) i.add(D + "," + x);
          d.set(m.key, { col: b, row: h, cols: m.cols, rows: m.rows });
          return;
        }
      }
    }), d;
  }
  function Ji() {
    const e = Gt(), n = new Set(e.hidden), i = $i().filter((h) => !Sa.includes(h.key));
    let d = Gn;
    if (!d.size) {
      const h = e.pegs || 4, b = i.filter((x) => !n.has(x.key));
      b.forEach((x) => {
        x.cols = Xi(x, h, ua), x.rows = li(x) ?? ii;
      }), d = Ra(b, h);
    }
    const p = (h) => !n.has(h.key) && d.get(h.key) || { row: 1e9, col: 0 };
    i.sort((h, b) => p(h).row - p(b).row || p(h).col - p(b).col);
    const m = (e.phone || []).map((h) => i.find((b) => b.key === h && !n.has(h))).filter(Boolean);
    return [...m, ...i.filter((h) => !m.includes(h))];
  }
  const nl = () => {
    const e = Ji();
    e.forEach((n, i) => n.el.style.setProperty("--o", String(3 + i))), To([...$i().filter((n) => Sa.includes(n.key)), ...e].map((n) => n.el));
  };
  function To(e) {
    if (Lt) return;
    const n = a.activeElement;
    let i = null;
    for (const d of new Set(e.map((p) => {
      for (; p && p.parentElement !== E; ) p = p.parentElement;
      return p;
    }).filter(Boolean))) {
      const p = i ? i.nextSibling : E.querySelector(":scope > [data-tf]");
      if (d !== p)
        try {
          E.moveBefore ? E.moveBefore(d, p) : E.insertBefore(d, p);
        } catch {
          E.insertBefore(d, p);
        }
      i = d;
    }
    n && n !== a.activeElement && n.isConnected && n.focus({ preventScroll: !0 });
  }
  const uo = (e, n) => Ki({ ...e, cells: n, pegs: Co(E.clientWidth).n });
  function Yn() {
    var ft;
    if (!w || !E) return;
    const e = E.clientWidth, n = e < 2 * ua + Vt, i = f.classList.contains("tfDash"), { n: d, w: p } = n ? { n: 2, w: Math.floor((e - Vt) / 2) } : Co(e);
    dt.classList.add("tfPegs"), dt.style.setProperty("--peg-n", d), dt.style.setProperty("--peg-w", p + "px");
    const m = new Set(Gt().hidden);
    Cn.forEach((Se) => {
      var at;
      return (at = ht[Se]) == null ? void 0 : at.classList.toggle("tfNotAdded", m.has(Se) && !(Lt != null && Lt.fromTray && Lt.key === Se));
    }), f.classList.toggle("tfBoard", i), f.classList.toggle("tfEditing", i && rn && !n);
    const h = c("dashEditNav");
    h && (h.hidden = !i || n, h.classList.toggle("active", rn), h.setAttribute("aria-pressed", String(rn)), h.setAttribute("aria-label", rn ? "Done editing" : "Edit the dashboard"), h.title = rn ? "Done" : "Edit", h.innerHTML = rn ? vf : Yc);
    const b = i ? $i() : [];
    if (!i) {
      E.style.height = "", E.querySelectorAll(".tfBoardItem").forEach((Se) => {
        Se.classList.remove("tfBoardItem", "tfBoardHidden"), Se.style.left = Se.style.top = Se.style.width = Se.style.height = "";
      }), (ft = E.querySelector(".tfDash-act > .activityRows")) == null || ft.style.removeProperty("max-height"), Qi(!1), f.classList.contains("tfDash") && nl(), Mn();
      return;
    }
    E.style.setProperty("--peg-w", p + "px");
    const x = new Set(Gt().hidden), D = p + Vt;
    Lt != null && Lt.fromTray && x.delete(Lt.key), b.forEach((Se) => Se.el.classList.toggle("tfBoardHidden", x.has(Se.key)));
    const H = b.filter((Se) => !x.has(Se.key) && getComputedStyle(Se.el).display !== "none");
    let F = 0;
    H.filter((Se) => Sa.includes(Se.key)).forEach((Se) => {
      Se.el.classList.add("tfBoardItem"), Object.assign(Se.el.style, { width: e + "px", height: "", left: "0px", top: F + "px" });
      const at = Se.key === "sums" && Se.el.querySelector(".tfDash-bar"), Ln = at ? at.querySelectorAll(".activityRow").length : 0;
      at && (at.style.maxWidth = "none");
      for (let Ze = 1; at && Ze <= Ln && (at.style.setProperty("--bar-cols", String(Math.ceil(Ln / Ze))), !(at.offsetWidth <= e)); Ze++)
        ;
      at && (at.style.maxWidth = ""), F += Se.el.offsetHeight + Vt;
    }), Un = F;
    const ie = H.filter((Se) => !Sa.includes(Se.key));
    ie.forEach((Se) => {
      Se.cols = Xi(Se, d, p), Se.el.classList.add("tfBoardItem"), Se.el.style.width = (Se.cols === d ? e : Se.cols * p + (Se.cols - 1) * Vt) + "px", Se.el.style.height = "", Se.rows = li(Se) ?? Math.max(1, Math.ceil((Se.el.offsetHeight + Vt - 6) / lo));
    });
    const ke = Lt && ie.find((Se) => Se.key === Lt.key), Ee = n && Ji().map((Se) => Se.key), te = (Se) => Ee.includes(Se.key) ? Ee.indexOf(Se.key) : -1, we = n ? vs([...ie].sort((Se, at) => te(Se) - te(at)), d) : Ra(ie, d, ke);
    we.forEach((Se) => Object.assign(Se, { x: Se.cols === d ? 0 : Se.col * D, y: Un + Se.row * lo, w: Se.cols === d ? e : Se.cols * p + (Se.cols - 1) * Vt, h: Se.rows * lo - Vt })), ie.forEach((Se) => {
      const at = we.get(Se.key);
      Se.el.style.height = at.h + "px", Se.el.classList.contains("tfDac") && Se.el.style.setProperty("--tf-dac-pad", at.h - Ka + "px"), !(Se === ke && !Lt.fromTray) && (Se.el.style.left = at.x + "px", Se.el.style.top = at.y + "px");
    }), n || (Gn = we), To([...H.filter((Se) => Sa.includes(Se.key)), ...ie.slice().sort((Se, at) => we.get(Se.key).row - we.get(at.key).row || we.get(Se.key).col - we.get(at.key).col)].map((Se) => Se.el));
    const V = we.get("act"), ve = V && E.querySelector(".tfDash-act > .activityRows");
    ve && (ve.style.maxHeight = Math.max(oi, Math.min(Sf, Math.floor((V.h - ve.offsetTop - 10) / oi)) * oi) + "px"), $a = Math.max(0, ...[...we.values()].map((Se) => Se.row + Se.rows));
    let Oe = Un + $a * lo - Vt;
    Oe = Qi(rn && !n, ie, we, Oe, d, p), E.style.height = Oe + "px", requestAnimationFrame(() => f.classList.add("tfBoardReady")), b.forEach((Se) => al.observe(Se.el)), ul(), Mn();
  }
  const Ir = () => {
    si || (si = !0, requestAnimationFrame(() => {
      si = !1, Yn();
    }));
  }, al = new ResizeObserver(() => {
    Lt || Ir();
  });
  function Qi(e, n = [], i = /* @__PURE__ */ new Map(), d = 0, p = 1, m = ua) {
    E.querySelectorAll(".tfEditChips").forEach((H) => {
      (!e || !H.closest(".tfBoardItem")) && H.remove();
    }), E.querySelectorAll(".tfFavHides").forEach((H) => H.remove()), E.querySelectorAll(".tfBoardItem").forEach((H) => [...H.children].forEach((F) => {
      F.classList.contains("tfEditChips") || F.toggleAttribute("inert", e);
    }));
    let h = E.querySelector(".tfBoardCells"), b = E.querySelector(".tfBoardLand");
    if (!e)
      return h == null || h.remove(), b == null || b.remove(), Xa(), d;
    const x = $a + el;
    if (h || (h = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), h.setAttribute("aria-hidden", "true"), E.prepend(h)), h.style.top = Un + "px", h.dataset.size !== p + "x" + x + "x" + m && (h.dataset.size = p + "x" + x + "x" + m, h.style.gridTemplateColumns = "repeat(" + p + "," + m + "px)", h.innerHTML = "<i></i>".repeat(p * x)), d = Math.max(d, Un + x * lo - Vt), n.forEach((H) => {
      const F = H.el;
      !F || F.querySelector(":scope > .tfEditChips") || F.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + Ld + '</span><button class="tfEditChip" type="button" data-board-more="' + re(H.key) + '" aria-label="' + re(Pn(H.key)) + ' options" aria-haspopup="menu">' + mf + "</button></div>");
    }), Lt && i.has(Lt.key)) {
      b || (b = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), E.appendChild(b));
      const H = i.get(Lt.key);
      Object.assign(b.style, { left: H.x + "px", top: H.y + "px", width: H.w + "px", height: H.h + "px" });
    } else b == null || b.remove();
    const D = E.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (D) {
      const H = D.getBoundingClientRect();
      D.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...D.querySelectorAll('[data-k^="fav:"]')].map((F) => {
        const ie = F.getBoundingClientRect(), ke = F.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + re(ke) + '" aria-label="Hide ' + re(xe(ke)) + ' from the dashboard" style="left:' + Math.round(ie.right - H.left - 42) + "px;top:" + Math.round(ie.top - H.top + (ie.height - 32) / 2) + 'px">' + Vc + "</button>";
      }).join("") + "</div>");
    }
    return d;
  }
  let In = "";
  function Hn(e) {
    rn = e, e || (Lt = null, Ca = $t = !1, Xa()), Yn(), e ? In = JSON.stringify(q) : In && JSON.stringify(q) !== In && sn("Changes saved");
  }
  function Ql(e, n) {
    var ie, ke;
    Xa();
    const i = Gn.get(e), { n: d } = Co(E.clientWidth), p = Gt(), m = p.spans[e] ?? 2;
    if (!i) return;
    const h = i.cols >= d, b = (Ee, te, we) => '<button type="button" role="menuitem" data-board-act="' + Ee + '"' + (we ? " disabled" : "") + ">" + te + "</button>", x = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    x.setAttribute("role", "menu"), x.setAttribute("aria-label", Pn(e) + " options");
    const D = E.querySelector('.tfDashTiles > [data-k="' + CSS.escape(e) + '"]'), H = D == null ? void 0 : D.classList.contains("tfDac");
    x.innerHTML = (Jl.includes(e) ? b("size", m === 1 ? "Card size" : "Tile size") : "") + (H ? b("tall", co(e) ? "Make shorter" : "Make taller") : "") + (e === "energy" ? b("graph", (((ie = p.opts.energy) == null ? void 0 : ie.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + b("left", "Move left", h || i.col === 0) + b("right", "Move right", h || i.col + i.cols >= d) + b("up", "Move up", i.row <= 0) + b("down", "Move down") + (D ? b("remove", "Remove") : b("hide", "Hide")), E.appendChild(x);
    const F = Math.min(i.x + i.w - x.offsetWidth, E.clientWidth - x.offsetWidth);
    Object.assign(x.style, { left: Math.max(0, F) + "px", top: i.y + 28 + "px" }), Da = { key: e, menu: x, opener: n }, (ke = x.querySelector("button:not([disabled])")) == null || ke.focus();
  }
  function Xa(e) {
    if (!Da) return;
    const { menu: n, opener: i } = Da;
    Da = null, n.remove(), e && (i == null || i.focus());
  }
  const Ja = () => Object.fromEntries([...Gn].map(([e, n]) => [e, { col: n.col, row: n.row }]));
  function bs(e, n) {
    var h, b;
    if (n === "remove") {
      Xa(), il(e);
      return;
    }
    const i = q, d = Gt(), p = Ja(), m = p[e] || { col: 0, row: 0 };
    n === "size" && (d.spans = { ...d.spans, [e]: (d.spans[e] ?? 2) === 1 ? 2 : 1 }), n === "tall" && (d.opts = { ...d.opts, [e]: { ...d.opts[e] || {}, tall: !co(e) } }), n === "graph" && (d.opts = { ...d.opts, energy: { ...d.opts.energy || {}, graph: (((h = d.opts.energy) == null ? void 0 : h.graph) || "above") === "above" ? "below" : "above" } }), n === "left" && (p[e] = { ...m, col: m.col - 1 }), n === "right" && (p[e] = { ...m, col: m.col + 1 }), n === "up" && (p[e] = { ...m, row: m.row - 1 }), n === "down" && (p[e] = { ...m, row: m.row + 1 }), n === "hide" && (d.hidden = [.../* @__PURE__ */ new Set([...d.hidden, e])]), ["left", "right", "up", "down"].includes(n) && (Lt = { key: e, col: p[e].col, row: p[e].row }), uo(d, p), Lt && (Yn(), Lt = null, uo(Gt(), Ja())), Xa(), n === "graph" && (yn.delete("dash:energy"), Tn()), Yn(), n !== "hide" ? (b = E.querySelector('[data-board-more="' + CSS.escape(e) + '"]')) == null || b.focus() : sn(Pn(e) + " hidden", rr(i));
  }
  const er = (e) => {
    var n;
    return Cn.includes(e) && !(((n = q.dash) == null ? void 0 : n.cells) || {})[e] ? " added" : " put back";
  };
  function Hr(e) {
    const n = Gt(), i = Pn(e) + er(e);
    Ki({ ...n, hidden: n.hidden.filter((d) => d !== e) }), Yn(), sn(i);
  }
  const Fr = () => Gt().tiles || [...E.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => e.dataset.k).filter((e) => !Gt().hidden.includes(e));
  function ol(e, n) {
    const i = Gt();
    uo({ ...i, tiles: e, hidden: i.hidden.filter((d) => !d.includes(".")) }, n), Tn(), Mn();
  }
  const ed = (e) => {
    ol([...Fr().filter((n) => n !== e), e], Ja()), sn(xe(e) + " added"), di(e);
  }, il = (e) => {
    const n = q, i = Ja();
    delete i[e], ol(Fr().filter((d) => d !== e), i), sn(xe(e) + " removed", rr(n));
  };
  let Qa = 0;
  function sn(e, n = null) {
    var h;
    const i = c("toast");
    if (!i) return;
    if (i.replaceChildren(Object.assign(document.createElement("span"), { textContent: e })), n) {
      const b = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      b.addEventListener("click", () => {
        clearTimeout(Qa), i.classList.remove("show", "withAction"), n();
      }), i.appendChild(b);
    }
    const d = f.getBoundingClientRect(), p = (h = a.querySelector(".bottomNav")) == null ? void 0 : h.getBoundingClientRect(), m = _t.classList.contains("open") && !ea ? Math.min(d.right, _t.getBoundingClientRect().left) : d.right;
    i.style.left = (d.left + m) / 2 + "px", i.style.bottom = (p != null && p.height ? window.innerHeight - p.top + 12 : 26) + "px", i.classList.add("tfToast", "show"), i.classList.toggle("withAction", !!n), clearTimeout(Qa), Qa = setTimeout(() => i.classList.remove("show", "withAction"), n ? 5e3 : 2200);
  }
  const ws = 700, tr = 1e3, Zn = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  Zn.setAttribute("role", "tooltip"), Zn.setAttribute("aria-hidden", "true"), f.appendChild(Zn);
  let nr = null, ar = 0, po = 0, rl = -1 / 0;
  const or = (e) => {
    if (e.nodeType !== 1) return !1;
    const n = getComputedStyle(e);
    return n.textOverflow === "ellipsis" && e.scrollWidth > e.clientWidth + 1 || n.webkitLineClamp !== "none" && e.scrollHeight > e.clientHeight + 1;
  }, eo = (e) => {
    for (let n = e; n && n !== f; n = n.parentElement) if (or(n)) return n;
    return null;
  };
  function sl(e, n) {
    clearTimeout(ar), clearTimeout(po);
    const i = () => {
      if (!e.isConnected) return;
      nr = e, Zn.textContent = n, Zn.hidden = !1;
      const d = e.getBoundingClientRect(), p = Zn.getBoundingClientRect(), m = d.top - p.height - 8 >= 8 ? d.top - p.height - 8 : d.bottom + 8;
      Zn.style.left = Math.max(8, Math.min(window.innerWidth - p.width - 8, d.left + d.width / 2 - p.width / 2)) + "px", Zn.style.top = m + "px";
    };
    !Zn.hidden || performance.now() - rl < tr ? i() : ar = setTimeout(i, ws);
  }
  function Or() {
    clearTimeout(ar), clearTimeout(po), Zn.hidden || (rl = performance.now()), Zn.hidden = !0, nr = null;
  }
  a.addEventListener("pointerover", (e) => {
    if (e.pointerType === "touch") return;
    if (Zn.contains(e.target)) {
      clearTimeout(po);
      return;
    }
    const n = eo(e.target);
    if (n && vt.names === "scroll" && n.matches(ir)) {
      ys(n);
      return;
    }
    if (n) {
      n !== nr ? sl(n, n.textContent.trim()) : clearTimeout(po);
      return;
    }
    clearTimeout(ar), clearTimeout(po), po = setTimeout(Or, 120);
  }), a.addEventListener("focusin", (e) => {
    var d;
    const n = e.target;
    if (!((d = n.matches) != null && d.call(n, ":focus-visible"))) return;
    let i = [n, ...n.querySelectorAll("*")].filter(or);
    vt.names === "scroll" && (i.filter((p) => p.matches(ir)).forEach(ys), i = i.filter((p) => !p.matches(ir))), i.length && sl(n, i.map((p) => p.textContent.trim()).join(" · "));
  }), a.addEventListener("focusout", (e) => {
    e.target === nr && Or();
  }), a.addEventListener("keydown", (e) => {
    e.key === "Escape" && !Zn.hidden && (e.stopPropagation(), Or());
  }, !0), window.addEventListener("scroll", () => {
    (!Zn.hidden || ar) && Or();
  }, { capture: !0, passive: !0 });
  const ir = ".activityRowName,.activityRowMeta", ho = /* @__PURE__ */ new WeakSet();
  function ys(e) {
    var m;
    if (vt.names !== "scroll" || ho.has(e) || (m = window.matchMedia) != null && m.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const n = e.scrollWidth - e.clientWidth;
    if (n < 2) return;
    const i = n / 30 * 1e3, d = 600 + i + 1e3 + i;
    ho.add(e), e.style.textOverflow = "clip";
    const p = e.animate([
      { textIndent: "0px", offset: 0 },
      { textIndent: "0px", offset: 600 / d, easing: "ease-in-out" },
      { textIndent: -n + "px", offset: (600 + i) / d },
      { textIndent: -n + "px", offset: (1600 + i) / d, easing: "ease-in-out" },
      { textIndent: "0px", offset: 1 }
    ], { duration: d });
    p.onfinish = p.oncancel = () => {
      e.style.textOverflow = "", ho.delete(e);
    };
  }
  const Lo = new IntersectionObserver((e) => e.forEach((n) => {
    n.isIntersecting && (Lo.unobserve(n.target), ys(n.target));
  }), { threshold: 1 });
  let xs = !1;
  new MutationObserver(() => {
    xs || vt.names !== "scroll" || (xs = !0, setTimeout(() => {
      xs = !1, a.querySelectorAll(ir).forEach((e) => {
        !e.dataset.glided && or(e) && (e.dataset.glided = "1", Lo.observe(e));
      });
    }, 300));
  }).observe(a, { childList: !0, subtree: !0 });
  const rr = (e) => () => {
    q = e, Wn(), Tn(), Yn(), Mn();
  };
  function di(e) {
    const n = () => E.querySelector('.tfDashTiles > [data-k="' + CSS.escape(e) + '"]');
    setTimeout(() => {
      var h;
      const i = n();
      if (!i) return;
      const d = (h = window.matchMedia) == null ? void 0 : h.call(window, "(prefers-reduced-motion: reduce)").matches, p = i.getBoundingClientRect();
      (p.top < 0 || p.bottom > window.innerHeight) && i.scrollIntoView({ behavior: d ? "auto" : "smooth", block: "center" });
      const m = (b) => "0 0 0 4px color-mix(in srgb,var(--primary) " + b + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + b + "%,transparent)";
      i.animate([{ boxShadow: m(55) }, { boxShadow: m(0) }], { duration: 1500, easing: d ? "steps(1, end)" : "ease-out" });
    }, ci(e) ? 260 : 0);
  }
  function ci(e) {
    const n = Gn.get(e);
    if (!n || !_t.classList.contains("open") || ea) return !1;
    const { n: i, w: d } = Co(E.clientWidth), p = _t.getBoundingClientRect().left - E.getBoundingClientRect().left, m = (x) => x * (d + Vt) + n.cols * d + (n.cols - 1) * Vt <= p;
    if (m(n.col)) return !1;
    const h = /* @__PURE__ */ new Set();
    Gn.forEach((x, D) => {
      if (D !== e) for (let H = x.row; H < x.row + x.rows; H++) for (let F = x.col; F < x.col + x.cols; F++) h.add(F + "," + H);
    });
    const b = (x, D) => {
      for (let H = D; H < D + n.rows; H++) for (let F = x; F < x + n.cols; F++) if (h.has(F + "," + H)) return !1;
      return !0;
    };
    for (let x = 0; x <= $a; x++) for (let D = 0; D + n.cols <= i && m(D); D++)
      if (b(D, x))
        return uo(Gt(), { ...Ja(), [e]: { col: D, row: x } }), Yn(), !0;
    return !1;
  }
  const It = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, _t = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  _t.setAttribute("aria-label", "Edit the dashboard"), _t.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd" type="button" data-tile-add aria-expanded="false">Add tile</button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd" type="button" data-fav-add aria-expanded="false">Add favourite</button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', f.appendChild(_t);
  let ea = !1, Ca = !1, $t = !1, kn = null, Na = !1;
  const Wr = {}, Ao = (e, n) => {
    if (Wr[e] === n) return;
    Wr[e] = n;
    const i = _t.querySelector('[data-tray="' + e + '"]');
    i.innerHTML = n, la(i);
  }, ll = (e, n) => '<span class="tfTrayName"><span class="activityRowName">' + re(xe(e)) + '</span><span class="activityRowMeta">' + re(n) + "</span></span>", td = (e, n, i) => '<li class="tfTrayFav' + (n ? " off" : "") + '" data-tray-fav="' + re(e) + '"><span class="tfTrayGrip" aria-hidden="true">' + Ld + '</span><span class="tfIcon"' + Rt(e, on(e)) + "></span>" + ll(e, n ? "Hidden" + (At.get(e) ? " · " + At.get(e) : "") : At.get(e) || an(e)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + re(e) + '" aria-pressed="' + !n + '" aria-label="' + (n ? "Show " : "Hide ") + re(xe(e)) + ' on the dashboard">' + (n ? Vc : gf) + "</button>" + (i ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + re(e) + '" aria-label="Remove ' + re(xe(e)) + ' from favourites">' + Gc + "</button>" : "<span></span>") + "</li>";
  function dl(e, n, i, d) {
    const p = e.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(k).filter((h) => n(h) && !i.has(h) && k[h].state !== "unavailable").filter((h) => {
      const b = (xe(h) + " " + (At.get(h) || "") + " " + h).toLowerCase();
      return p.every((x) => b.includes(x));
    }).sort((h, b) => (At.get(h) || "~").localeCompare(At.get(b) || "~") || xe(h).localeCompare(xe(b))).slice(0, 40).map((h) => '<li><button class="tfTrayPickItem" type="button" ' + d + '="' + re(h) + '"><span class="tfIcon"' + Rt(h, on(h)) + "></span>" + ll(h, At.get(h) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  function Mn() {
    const e = rn && f.classList.contains("tfBoard");
    if (_t.classList.toggle("open", e), _t.classList.toggle("tucked", e && ea), _t.toggleAttribute("inert", !e), e || (Na = !1), Ss(), !e) return;
    const n = _t.querySelector("[data-tray-tuck]");
    n.innerHTML = ea ? Nc : Uc, n.setAttribute("aria-expanded", String(!ea)), n.setAttribute("aria-label", ea ? "Show the edit tray" : "Tuck the edit tray away");
    const i = Gt().hidden.filter((h) => $i().some((b) => b.key === h));
    Ao("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (i.length ? '<div class="tfTrayCards">' + i.map((h) => '<button class="tfTrayCard" type="button" data-tray-card="' + re(h) + '" aria-label="' + re(Pn(h)) + ': drag it onto the board, or press to put it back"><span class="tfTrayGrip" aria-hidden="true">' + Ld + "</span>" + re(Pn(h)) + "</button>").join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), Ao("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (Gt().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + Na + '">' + (Na ? "Hide the phone" : "Show the phone") + "</button>");
    const d = new Set(q.favHidden || []), p = Nn(), m = [...p, ...[...d].filter((h) => !p.includes(h) && k[h])];
    Ao("favs", m.map((h) => td(h, d.has(h), p.includes(h))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), _t.querySelector('[data-pick="tiles"]').hidden = !$t, _t.querySelector("[data-tile-add]").setAttribute("aria-expanded", String($t)), $t && Ao("tilepick", dl(_t.querySelector("[data-tile-search]").value, (h) => Il.includes(h.split(".")[0]), new Set(Fr()), "data-tile-pick")), _t.querySelector('[data-pick="favs"]').hidden = !Ca, _t.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(Ca)), Ca && Ao("pick", dl(_t.querySelector("[data-fav-search]").value, (h) => It.test(h), new Set(Nn()), "data-fav-pick")), Ao("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (xa() ? " on" : "") + '" type="button" role="switch" aria-checked="' + xa() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const _o = (e) => {
    q = { ...q, ...e }, Wn(), Tn(), Mn();
  };
  function sr(e, n) {
    const i = q, d = new Set(q.favHidden || []);
    n ? d.delete(e) : d.add(e), _o({ favHidden: [...d] }), n ? sn(xe(e) + " put back") : sn(xe(e) + " hidden", rr(i));
  }
  const lr = (e) => {
    const n = q;
    _o({ favourites: Nn().filter((i) => i !== e), favHidden: (q.favHidden || []).filter((i) => i !== e) }), sn(xe(e) + " removed from favourites", rr(n));
  }, nd = (e) => {
    _o({ favourites: [...Nn().filter((n) => n !== e), e], favHidden: (q.favHidden || []).filter((n) => n !== e) }), sn(xe(e) + " added to favourites");
  };
  _t.addEventListener("click", (e) => {
    var i;
    const n = e.target.closest("button");
    n && (n.hasAttribute("data-tray-done") ? Hn(!1) : n.hasAttribute("data-tray-tuck") ? (ea = !ea, Mn()) : n.hasAttribute("data-phone-toggle") ? (Na = !Na, Mn(), Na && ((i = ln.querySelector("[data-phone-key]")) == null || i.focus({ preventScroll: !0 }))) : n.dataset.trayCard ? e.detail === 0 && (Hr(n.dataset.trayCard), Mn()) : n.dataset.favEye ? sr(n.dataset.favEye, n.getAttribute("aria-pressed") !== "true") : n.dataset.favRemove ? lr(n.dataset.favRemove) : n.hasAttribute("data-fav-add") ? (Ca = !Ca, Mn(), Ca && _t.querySelector("[data-fav-search]").focus({ preventScroll: !0 })) : n.dataset.favPick ? nd(n.dataset.favPick) : n.hasAttribute("data-tile-add") ? ($t = !$t, Mn(), $t && _t.querySelector("[data-tile-search]").focus({ preventScroll: !0 })) : n.dataset.tilePick ? ed(n.dataset.tilePick) : n.hasAttribute("data-fav-suggest") && _o({ suggest: !xa() }));
  }), _t.addEventListener("input", (e) => {
    e.target.matches("[data-fav-search],[data-tile-search]") && Mn();
  }), _t.addEventListener("keydown", (e) => {
    var i, d;
    const n = !!((d = (i = e.target).closest) != null && d.call(i, '[data-pick="tiles"],[data-tile-add]'));
    e.key !== "Escape" || !(n ? $t : Ca) || (e.stopPropagation(), n ? $t = !1 : Ca = !1, Mn(), _t.querySelector(n ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function ks(e, n, i, d) {
    e.preventDefault();
    const p = e.clientX, m = e.clientY;
    let h = null, b = 0;
    const x = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), D = (F) => {
      if (!h) {
        if (Math.hypot(F.clientX - p, F.clientY - m) < 4) return;
        h = n.cloneNode(!0), h.classList.add("tfTrayGhost"), h.style.width = n.offsetWidth + "px", f.appendChild(h);
      }
      h.style.transform = "translate(" + (F.clientX - 24) + "px," + (F.clientY - 24) + "px)";
      const ie = !ea && F.clientX >= _t.getBoundingClientRect().left;
      if (i === "card") {
        const te = E.getBoundingClientRect(), { w: we } = Co(E.clientWidth);
        Lt = !ie && F.clientX >= te.left && F.clientX <= te.right && F.clientY >= te.top + Un ? { key: d, col: Math.max(0, Math.floor((F.clientX - te.left) / (we + Vt))), row: Math.max(0, Math.floor((F.clientY - te.top - Un) / lo)), fromTray: !0 } : null, b || (b = requestAnimationFrame(() => {
          b = 0, Yn();
        }));
        return;
      }
      const ke = E.querySelector(".tfDash-favs"), Ee = ke == null ? void 0 : ke.getBoundingClientRect();
      if (kn = null, Ee && !ie && F.clientX >= Ee.left && F.clientX <= Ee.right && F.clientY >= Ee.top && F.clientY <= Ee.bottom) {
        let te = 1 / 0;
        ke.querySelectorAll('[data-k^="fav:"]').forEach((we, V) => {
          const ve = we.getBoundingClientRect(), Oe = Math.hypot(F.clientX - (ve.left + ve.width / 2), F.clientY - (ve.top + ve.height / 2));
          Oe < te && (te = Oe, kn = { i: V, r: ve, after: F.clientX > ve.left + ve.width / 2 });
        }), kn || (kn = { i: 0, r: null, after: !1 });
      }
      kn != null && kn.r ? (x.isConnected || f.appendChild(x), Object.assign(x.style, { left: (kn.after ? kn.r.right : kn.r.left) - 2 + "px", top: kn.r.top + 8 + "px", height: kn.r.height - 16 + "px" })) : x.remove();
    }, H = () => {
      if (window.removeEventListener("pointermove", D), window.removeEventListener("pointerup", H), window.removeEventListener("pointercancel", H), cancelAnimationFrame(b), h == null || h.remove(), x.remove(), i === "card") {
        if (!h) Hr(d);
        else if (Lt != null && Lt.fromTray) {
          Yn();
          const te = Pn(d) + er(d), we = Gt(), V = Ja();
          Lt = null, uo({ ...we, hidden: we.hidden.filter((ve) => ve !== d) }, V), sn(te);
        }
        Lt = null, Yn(), Tn(), Mn();
        return;
      }
      if (!kn) return;
      const F = new Set(q.favHidden || []);
      F.delete(d);
      const ie = Nn().filter((te) => te !== d), ke = ie.filter((te) => !F.has(te)), Ee = ke[Math.min(kn.i + (kn.after ? 1 : 0), ke.length)];
      ie.splice(Ee ? ie.indexOf(Ee) : ie.length, 0, d), kn = null, _o({ favourites: ie, favHidden: [...F] }), sn(xe(d) + " put back");
    };
    window.addEventListener("pointermove", D), window.addEventListener("pointerup", H), window.addEventListener("pointercancel", H);
  }
  const Ms = { sums: 201, wx: 364, favs: 364, areas: 364, act: 364, energy: 288, avg: 288, aq: 288, pollen: 288, radar: 288 }, cl = 136, ad = 288, od = 0.8, ui = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, ln = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  ln.setAttribute("aria-label", "Phone order"), ln.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + Gc + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', f.appendChild(ln);
  let Ba = "";
  function Ss() {
    var b;
    const e = Na && rn && f.classList.contains("tfBoard") && !ea;
    if (ln.classList.toggle("open", e), ln.toggleAttribute("inert", !e), !e) return;
    const n = Ji().filter((x) => !Gt().hidden.includes(x.key)), i = n.length, d = (x) => Math.round(x * od * 10) / 10 + "px", p = (x, D) => {
      const H = x.el.classList.contains("tfDac"), F = x.tile ? H ? ad : cl : Ms[x.key] || cl;
      return '<button class="tfPhoneBlock' + (x.tile ? " tile" : "") + '" type="button" data-phone-key="' + re(x.key) + '" style="min-height:' + d(F) + '" aria-label="' + re(Pn(x.key) + ", " + (D + 1) + " of " + i + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (x.tile ? Rt(x.key, on(x.key)) : Rt(x.key, ui[x.key])) + '></span><span class="tfPhoneName">' + re(Pn(x.key)) + "</span></button>";
    }, m = '<div class="tfPhoneTitle">' + re(((b = E.querySelector(".tfDashTitle")) == null ? void 0 : b.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + d(Ms.sums) + '"><span class="tfPhoneName">' + re(Pn("sums")) + "</span></div>" + n.map(p).join("");
    if (ln.querySelector('[data-phone="note"]').innerHTML = Gt().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", m === Ba) return;
    Ba = m;
    const h = ln.querySelector('[data-phone="list"]');
    h.innerHTML = m, la(h);
  }
  function Eo(e, n) {
    var i;
    Ki({ ...Gt(), phone: e }), Mn(), n && ((i = ln.querySelector('[data-phone-key="' + CSS.escape(n) + '"]')) == null || i.focus({ preventScroll: !0 }));
  }
  const Cs = () => [...ln.querySelectorAll("[data-phone-key]")].map((e) => e.dataset.phoneKey);
  function dr(e, n) {
    e.preventDefault();
    const i = n.parentElement, d = ln.querySelector(".tfPhoneScreen"), p = Cs().join();
    n.classList.add("moving");
    const m = (b) => {
      const x = d.getBoundingClientRect();
      b.clientY > x.bottom - 40 ? d.scrollTop += 12 : b.clientY < x.top + 40 && (d.scrollTop -= 12);
      const D = [...i.querySelectorAll("[data-phone-key]")].find((ie) => {
        const ke = ie.getBoundingClientRect();
        return ie !== n && b.clientX >= ke.left && b.clientX <= ke.right && b.clientY >= ke.top && b.clientY <= ke.bottom;
      });
      if (!D) return;
      const H = D.getBoundingClientRect(), F = D.classList.contains("tile") ? b.clientX < H.left + H.width / 2 : b.clientY < H.top + H.height / 2;
      i.insertBefore(n, F ? D : D.nextSibling);
    }, h = () => {
      window.removeEventListener("pointermove", m), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h), n.classList.remove("moving");
      const b = Cs();
      Ba = "", b.join() !== p ? Eo(b) : Ss();
    };
    window.addEventListener("pointermove", m), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h);
  }
  ln.addEventListener("pointerdown", (e) => {
    const n = e.target.closest("[data-phone-key]");
    n && e.button <= 0 && dr(e, n);
  }), ln.addEventListener("click", (e) => {
    var i;
    const n = e.target.closest("button");
    if (n != null && n.hasAttribute("data-phone-close"))
      Na = !1, Mn(), (i = _t.querySelector("[data-phone-toggle]")) == null || i.focus({ preventScroll: !0 });
    else if (n != null && n.hasAttribute("data-phone-reset")) {
      const { phone: d, ...p } = Gt();
      Ki(p), Mn();
    }
  }), ln.addEventListener("keydown", (e) => {
    var h, b, x, D;
    if (e.key === "Escape") {
      e.stopPropagation(), Na = !1, Mn(), (h = _t.querySelector("[data-phone-toggle]")) == null || h.focus({ preventScroll: !0 });
      return;
    }
    const n = (D = (x = (b = e.target).closest) == null ? void 0 : x.call(b, "[data-phone-key]")) == null ? void 0 : D.dataset.phoneKey, i = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[e.key];
    if (!n || !i) return;
    e.preventDefault();
    const d = Cs(), p = d.indexOf(n), m = p + i;
    m < 0 || m >= d.length || ([d[p], d[m]] = [d[m], d[p]], Eo(d, n));
  });
  function id(e, n) {
    e.preventDefault();
    const i = n.parentElement;
    n.classList.add("moving");
    const d = (m) => {
      const h = [...i.children].find((b) => {
        const x = b.getBoundingClientRect();
        return b !== n && m.clientY >= x.top && m.clientY <= x.bottom;
      });
      if (h) {
        const b = h.getBoundingClientRect();
        i.insertBefore(n, m.clientY < b.top + b.height / 2 ? h : h.nextSibling);
      }
    }, p = () => {
      window.removeEventListener("pointermove", d), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p), n.classList.remove("moving");
      const m = new Set(Nn());
      Wr.favs = null, _o({ favourites: [...i.children].map((h) => h.dataset.trayFav).filter((h) => m.has(h)) });
    };
    window.addEventListener("pointermove", d), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  }
  _t.addEventListener("pointerdown", (e) => {
    if (e.button > 0) return;
    const n = e.target.closest("[data-tray-card]"), i = e.target.closest(".tfTrayFav");
    n ? ks(e, n, "card", n.dataset.trayCard) : i && e.target.closest(".tfTrayGrip") ? id(e, i) : i != null && i.classList.contains("off") && !e.target.closest("button") && ks(e, i, "fav", i.dataset.trayFav);
  });
  function pi(e) {
    if (!rn || e.button !== 0 || e.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const n = e.target.closest(".tfBoardItem"), i = n && $i().find((F) => F.el === n);
    if (!i || Sa.includes(i.key)) return;
    const d = Gn.get(i.key), { w: p } = Co(E.clientWidth);
    if (!d) return;
    e.preventDefault(), Xa();
    const m = e.clientX, h = e.clientY;
    let b = !1, x = 0;
    const D = (F) => {
      const ie = F.clientX - m, ke = F.clientY - h;
      if (!b) {
        if (Math.hypot(ie, ke) < 4) return;
        b = !0, Lt = { key: i.key, col: d.col, row: d.row }, n.classList.add("tfDragging");
      }
      n.style.transform = "translate(" + ie + "px," + ke + "px)", Lt.col = Math.round((d.x + ie) / (p + Vt)), Lt.row = Math.round((d.y + ke - Un) / lo), x || (x = requestAnimationFrame(() => {
        x = 0, Yn();
      }));
    }, H = () => {
      window.removeEventListener("pointermove", D), window.removeEventListener("pointerup", H), window.removeEventListener("pointercancel", H), b && (cancelAnimationFrame(x), Yn(), n.classList.remove("tfDragging"), n.style.transform = "", Lt = null, uo(Gt(), Ja()), Yn(), Tn());
    };
    window.addEventListener("pointermove", D), window.addEventListener("pointerup", H), window.addEventListener("pointercancel", H);
  }
  function ul(e = !1) {
    const n = E == null ? void 0 : E.querySelector(".tfDashGraph svg[data-graph]");
    if (!(n != null && n.clientWidth)) return;
    const i = n.dataset.graph + "@" + n.clientWidth + "x" + n.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (n.dataset.drawn === i) return;
    const d = !n.dataset.drawn;
    n.dataset.drawn = i;
    const p = Js.find((m) => m.id === n.dataset.graph);
    p ? Bn(n, p).then(() => {
      (e || d) && Ui(n);
    }) : mr(n.dataset.graph, n).then(() => {
      e && ni(n);
    });
  }
  function qr() {
    var b, x, D;
    Je = Mr.model(o()), Za(), k = Je.states, k[(b = q.sources) == null ? void 0 : b.grid] && (Je.grid = q.sources.grid), k[(x = q.sources) == null ? void 0 : x.alarm] && (Je.security.alarms = [q.sources.alarm]), C.forEach((H, F) => {
      const ie = k[F], ke = (ie == null ? void 0 : ie.attributes) || {};
      if (!ie || Date.now() - H.at > 2 * 60 * 1e3) {
        C.delete(F);
        return;
      }
      H.pos != null && ie.state !== "opening" && ie.state !== "closing" && Math.abs(zn(F) - H.pos) < 1 && delete H.pos, H.tilt != null && Math.abs((ke.current_tilt_position ?? -1) - H.tilt) < 1 && delete H.tilt, H.pos == null && H.tilt == null && C.delete(F);
    });
    const e = [];
    let n = 0;
    const i = Xo();
    Pt = i.filter((H) => H.room).map((H) => H.room), Pt.some((H) => H.id === oe) || (oe = ((D = Pt[0]) == null ? void 0 : D.id) || null);
    const d = Ae === "weather" ? { key: "weather", name: "Weather" } : Ae && i.find((H) => H.key === Ae);
    if (d || (Ae = null), f.classList.toggle("tfAreaOpen", !!d), f.classList.toggle("tfWeatherOpen", (d == null ? void 0 : d.key) === "weather"), f.classList.toggle("tfDash", !d), At = /* @__PURE__ */ new Map(), Je.rooms.forEach((H) => [...H.actions, ...H.plugs, ...H.readings, ...H.openings, ...H.solar, ...H.plants.flatMap((F) => [F.id, ...F.readings])].forEach((F) => At.set(F, H.name))), !d) return ms(e, Fi());
    if (e.push({ key: "areahead", html: hi(d, ++n) }), d.key === "weather")
      return e.weather = ++n, e;
    const p = d.ids, m = d.room ? d.room.id : d.key, h = d.room;
    return h != null && h.solar.length && e.push({ key: "energy:" + h.id, html: Jn(h, ++n) }), h && (h.readings.length || h.plugs.length || h.power != null) && e.push({ key: "readings:" + h.id, html: da(h, ++n) }), h == null || h.plants.forEach((H) => e.push({ key: "plant:" + H.id, html: Ni(H, ++n) })), p.length && e.push({ key: "block:" + m, order: ++n, tiles: p.map((H) => ({ key: H, html: Ne(H) })) }), e;
  }
  const hi = (e, n) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + n + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + Nc + '</button><div class="settingsTitle">' + re(e.name) + "</div></div>";
  let fi = 0, jr = null;
  const zr = (e) => e === "weather" ? ht.wx : E.querySelector(".tfAreas");
  function Do(e) {
    var n, i;
    Ae || (fi = cr().scrollTop, jr = ((n = zr(e)) == null ? void 0 : n.getBoundingClientRect().top) ?? null), Ae = e, e.startsWith("room:") && (oe = e.slice(5)), Ia(), cr().scrollTop = 0, (i = E.querySelector("[data-area-back]")) == null || i.focus({ preventScroll: !0 });
  }
  let Pa = null;
  function pa(e, n) {
    if (Pa == null || Pa(), n == null) return;
    const i = cr(), d = performance.now() + 1500, p = ["wheel", "touchstart", "pointerdown", "keydown"];
    let m = 0;
    const h = () => {
      cancelAnimationFrame(m), p.forEach((x) => window.removeEventListener(x, h, !0)), Pa = null;
    }, b = () => {
      const x = e();
      if (x != null && x.isConnected) {
        const D = x.getBoundingClientRect().top - n;
        Math.abs(D) > 0.5 && (i.scrollTop += D);
      }
      performance.now() < d ? m = requestAnimationFrame(b) : h();
    };
    p.forEach((x) => window.addEventListener(x, h, { capture: !0, passive: !0 })), Pa = h, b();
  }
  function Vr() {
    var i;
    const e = Ae;
    Ae = null, Ia(), cr().scrollTop = fi, pa(() => zr(e), jr);
    const n = e.startsWith("room:") ? E.querySelector('.tfAreaPanel[data-area="' + CSS.escape(e.slice(5)) + '"]') : e === "weather" ? ht.wx.querySelector(".wbOpenPage") : E.querySelector('[data-k="sum:' + CSS.escape(e) + '"]');
    (i = (n == null ? void 0 : n.querySelector("[data-go]")) || n) == null || i.focus({ preventScroll: !0 });
  }
  const pl = (e) => e.wrap ? e.wrap(e.tiles.map((n) => n.html).join(""), e) : '<div class="tfBlock" data-tf data-k="' + re(e.key) + '" style="order:' + e.order + '"><div class="tfActions">' + e.tiles.map((n) => n.html).join("") + "</div></div>", Gr = (e) => e.map((n) => n.key + (n.tiles ? "(" + n.tiles.map((i) => i.key).join(",") + ")" : "")).join(";");
  function cr() {
    for (let e = f.parentElement || f.getRootNode().host; e; e = e.parentElement || e.getRootNode().host) {
      const n = getComputedStyle(e).overflowY;
      if ((n === "auto" || n === "scroll") && e.scrollHeight > e.clientHeight) return e;
    }
    return document.scrollingElement;
  }
  function Ur(e) {
    const n = cr(), i = (b) => {
      const x = b.getBoundingClientRect();
      return x.height && x.bottom > 0 && x.top < window.innerHeight;
    }, d = [...E.children, ...E.querySelectorAll(".tfDashTiles > *")].find((b) => !b.matches(".tfDashTiles") && i(b)), p = d == null ? void 0 : d.dataset.k, m = d == null ? void 0 : d.getBoundingClientRect().top;
    e();
    const h = d != null && d.isConnected ? d : p && E.querySelector('[data-k="' + CSS.escape(p) + '"]');
    h != null && h.isConnected && m != null && (n.scrollTop += h.getBoundingClientRect().top - m);
  }
  function Ia() {
    if (!w || !E) return;
    const e = qr();
    E.querySelectorAll("[data-tf]").forEach((i) => i.remove()), yn.clear();
    const n = document.createElement("div");
    n.innerHTML = e.map((i) => i.tiles ? pl(i) : i.html).join(""), e.forEach((i) => i.tiles ? i.tiles.forEach((d) => yn.set(d.key, d.html)) : yn.set(i.key, i.html)), _n = Gr(e), E.append(...n.children), Sr(e.weather), zo(), al.disconnect(), Yn(), la(E), Es(E), ya(E), G(), B && mr(B.id), wl(), Bo(), Ds(), requestAnimationFrame(J);
  }
  const ur = (e) => {
    var i;
    const n = a.activeElement && e.contains(a.activeElement) ? a.activeElement : null;
    return n && { label: n.getAttribute("aria-label"), act: (i = n.dataset) == null ? void 0 : i.act };
  }, pr = (e, n) => {
    var i;
    n && ((i = n.label && e.querySelector('[aria-label="' + CSS.escape(n.label) + '"]') || n.act && e.querySelector('[data-act="' + CSS.escape(n.act) + '"]')) == null || i.focus({ preventScroll: !0 }));
  };
  function fo(e, n) {
    if (!e.querySelector(".tfDacPad"))
      return e.replaceWith(n), n;
    const i = e.matches(".tfDac") && e.querySelector(":scope > .tfDacPad"), d = n.querySelector(":scope > .tfDacPad");
    if (i)
      return (d == null ? void 0 : d.dataset.dac) !== i.dataset.dac ? (e.replaceWith(n), n) : (e.querySelector(":scope > .tfActionHead").replaceWith(n.querySelector(":scope > .tfActionHead")), e.classList.toggle("on", n.classList.contains("on")), ["data-light", "data-tone"].forEach((m) => n.hasAttribute(m) ? e.setAttribute(m, n.getAttribute(m)) : e.removeAttribute(m)), [...e.style].filter((m) => m.startsWith("--") && !m.startsWith("--tf-")).forEach((m) => e.style.removeProperty(m)), [...n.style].forEach((m) => e.style.setProperty(m, n.style.getPropertyValue(m))), e);
    if (e.tagName !== n.tagName || e.children.length !== n.children.length)
      return e.replaceWith(n), n;
    [...e.attributes].forEach((m) => {
      n.hasAttribute(m.name) || e.removeAttribute(m.name);
    }), [...n.attributes].forEach((m) => e.setAttribute(m.name, m.value));
    const p = [...n.children];
    return [...e.children].forEach((m, h) => fo(m, p[h])), e;
  }
  function hl(e, n) {
    const i = document.createElement("div");
    i.innerHTML = n;
    const d = ur(e), p = fo(e, i.firstElementChild);
    la(p), Es(p), ya(p), pr(p, d);
  }
  function Tn() {
    !w || !E || Lt || Ur(fl);
  }
  function fl() {
    if (!E.querySelector("[data-tf]")) {
      Ia();
      return;
    }
    const e = qr();
    if (Gr(e) !== _n) {
      Ia();
      return;
    }
    const n = (i) => [...je.keys()].some((d) => {
      const p = d.slice(d.indexOf("|") + 1);
      return i === p || i.endsWith(":" + p);
    });
    e.forEach((i) => (i.tiles || [i]).forEach((d) => {
      if (yn.get(d.key) === d.html || n(d.key)) return;
      const p = E.querySelector('[data-k="' + CSS.escape(d.key) + '"]');
      if (p) {
        if (yn.set(d.key, d.html), B && B.key === d.key && p.querySelector(".tfOpen")) {
          p.querySelector(".tfOpen .activityRowMeta").textContent = Uo(B.id);
          return;
        }
        hl(p, d.html), B && B.key === d.key && mr(B.id), d.key.startsWith("energy:") && wl();
      }
    })), Bo(), Ds(), Tr(), G(), Ke == null || Ke.update(), Ot == null || Ot.forEach((i) => i.update()), f.classList.contains("tfDash") && Ir(), requestAnimationFrame(J);
  }
  const Fn = {
    light: (e) => [["Brightness", e.brightness != null ? Math.round(e.brightness / 2.55) + "%" : null], ["Colour temperature", e.color_temp_kelvin ? Number(e.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", e.color_mode && We(e.color_mode)]],
    climate: (e) => [["Current temperature", qn(e.current_temperature) + " °C"], ["Target", qn(e.temperature) + " °C"], ["Action", We(e.hvac_action)]],
    cover: (e) => [["Position", e.current_position != null ? e.current_position + "% open" : null], ["Tilt", e.current_tilt_position != null ? e.current_tilt_position + "% open" : null]],
    humidifier: (e) => [["Current humidity", e.current_humidity + "%"], ["Target", e.humidity + "%"], ["Mode", We(e.mode)]],
    media_player: (e) => [["Title", e.media_title], ["Artist", e.media_artist], ["Volume", e.volume_level != null ? Math.round(e.volume_level * 100) + "%" : null], ["Source", e.source]],
    vacuum: (e) => [["Battery", e.battery_level + "%"], ["Fan speed", We(e.fan_speed)], ["Rooms", (e.rooms || []).join(", ") || null]],
    lock: (e) => [["Changed by", e.changed_by]],
    alarm_control_panel: (e) => [["Changed by", e.changed_by]],
    valve: () => [],
    plant: (e) => [["Moisture", e.moisture + "%"], ["Light", Number(e.brightness).toLocaleString() + " lx"], ["Temperature", qn(e.temperature) + " °C"], ["Fertility", e.conductivity + " µS/cm"], ["Problems", e.problem === "none" ? "None" : We(e.problem)]],
    weather: (e) => [["Temperature", e.temperature != null ? e.temperature + " " + (e.temperature_unit || "°C") : null], ["Humidity", e.humidity != null ? e.humidity + "%" : null], ["Wind", e.wind_speed != null ? e.wind_speed + " " + (e.wind_speed_unit || "km/h") : null], ["Pressure", e.pressure != null ? e.pressure + " " + (e.pressure_unit || "hPa") : null]]
  }, un = (e) => {
    var i;
    const n = (((i = Fn[e.split(".")[0]]) == null ? void 0 : i.call(Fn, xt(e))) || []).filter(([, d]) => d != null && d !== "");
    return n.length ? '<div class="tfMoreRows">' + n.map(([d, p]) => '<div class="tfMoreRow"><span>' + re(d) + "</span><span>" + re(p) + "</span></div>").join("") + "</div>" : "";
  }, Ts = (e) => br(e) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function rd(e, n = {}, i = !1) {
    return '<div class="tfMoreList">' + e.map((d) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + re(d.name) + '</div><div class="tfMoreTiles' + (i ? " single" : "") + '">' + d.ids.map((p) => Ar(p, n)).join("") + "</div></div>").join("") + "</div>";
  }
  const ct = document.createElement("div");
  ct.className = "tfMoreBackdrop", ct.hidden = !0, f.appendChild(ct);
  const ml = (e, n) => {
    for (let i = e; i && i !== ct; i = i.parentElement) {
      const d = getComputedStyle(i).overflowY;
      if ((d === "auto" || d === "scroll") && i.scrollHeight > i.clientHeight + 1 && (n < 0 ? i.scrollTop > 0 : i.scrollTop + i.clientHeight < i.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let mi = null;
  ct.addEventListener("touchstart", (e) => {
    mi = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  }, { passive: !0 }), ct.addEventListener("touchmove", (e) => {
    var p, m;
    if (!mi || e.touches.length > 1 || (m = (p = e.target).closest) != null && m.call(p, "input,textarea,select")) return;
    const n = e.touches[0], i = mi.x - n.clientX, d = mi.y - n.clientY;
    mi = { x: n.clientX, y: n.clientY }, Math.abs(d) >= Math.abs(i) && !ml(e.target, d) && e.preventDefault();
  }, { passive: !1 }), ct.addEventListener("wheel", (e) => {
    ml(e.target, e.deltaY) || e.preventDefault();
  }, { passive: !1 });
  function Yr() {
    const e = ct.querySelector(".tfMorePair"), n = ct.querySelector(".tfMore");
    e == null || e.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - n.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", Yr, { passive: !0 }), w && Tt();
  let to = [];
  const Ls = (e) => e === "favourites" || e.startsWith("summary:") || e.startsWith("group:");
  function Ro(e) {
    const n = (x, D = "") => '<div class="tfMoreHead">' + (I != null && I.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + Cd + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + re(x) + "</div>" + D + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + ef + "</button></div>", i = (x, D) => '<div class="tfMoreNow"><div class="tfMoreState">' + re(x) + "</div>" + (D ? '<div class="tfMoreSub">' + re(D) + "</div>" : "") + "</div>", d = rd;
    if (e === "favourites") {
      const x = Nn(), D = new Set(x), H = [{ name: "Starred", ids: x }, { name: "Home", ids: Je.homeVacuums }, { name: "Security", ids: [...Je.security.alarms, ...Je.security.locks] }, ...Je.rooms.map((F) => ({ name: F.name, ids: [...F.actions, ...F.plugs] }))].map((F, ie) => ie ? { ...F, ids: F.ids.filter((ke) => !D.has(ke)) } : F).filter((F) => F.ids.length);
      return [n("Favourites"), i(x.length ? x.length + " starred" : "None starred"), d(H, { star: !0 }, !0)];
    }
    const p = (x, { name: D = "", alert: H = !1, plain: F = !1 } = {}) => {
      const ie = F ? [] : x.filter((te) => Il.includes(te.split(".")[0])), ke = x.filter((te) => !ie.includes(te)), Ee = (te) => te.startsWith("vacuum.") && xt(te).battery_level != null ? xt(te).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (D ? '<div class="tfMoreGroupName">' + re(D) + "</div>" : "") + '<div class="tfMoreActions">' + ie.map((te) => Ne(te, !0)).join("") + ke.map((te) => Ar(te, { plain: F, alert: H, say: F ? Ee(te) : null })).join("") + "</div></div>";
    };
    if (e.startsWith("summary:")) {
      const x = Fi().find((ie) => ie.key === e.slice(8));
      if (!x) return null;
      const D = x.key === "light" ? (x.groups || []).flatMap((ie) => ie.ids) : [], H = D.some((ie) => {
        var ke;
        return ((ke = k[ie]) == null ? void 0 : ke.state) === "on";
      }), F = D.length ? '<button class="primary" type="button" data-acts="' + io(D.map((ie) => ["light", H ? "turn_off" : "turn_on", ie])) + '">' + (H ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [n(x.name), '<div class="tfMoreNowRow">' + i(x.value) + F + "</div>", ...(x.groups || []).map((ie) => p(ie.ids, { name: ie.name === x.name ? "" : ie.name, alert: ie.alert, plain: x.plain }))];
    }
    if (e.startsWith("group:")) {
      const [, x, D] = e.split(":"), H = Je.rooms.find((ke) => ke.id === x), F = H && Ua(H).find((ke) => ke.key === D);
      if (!F) return null;
      const ie = F.acts ? '<button class="primary" type="button" data-acts="' + io(F.acts) + '">' + (F.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [n(H.name + " " + F.label.toLowerCase()), '<div class="tfMoreNowRow">' + i(F.value) + ie + "</div>", p(_a(H, D))];
    }
    const m = e.split(".")[0], h = k[e], b = Il.includes(m) ? cn(e) : { sections: [] };
    return [
      n(xe(e)),
      i(an(e), h.last_changed && za(Date.parse(h.last_changed))),
      (I == null ? void 0 : I.at) && '<svg class="tfGraph tfDay" data-day="' + re(e) + '" role="img" aria-label="' + re(xe(e)) + ', last 24 hours"></svg>',
      m === "cover" && '<div data-cover-art="' + re(e) + '"></div>',
      ...b.sections.filter(Boolean),
      As(e) && '<button class="tfDetailsBtn" type="button" data-details aria-expanded="' + !!(I != null && I.details) + '" aria-controls="tfMoreSide"><span>Details</span>' + Uc + "</button>"
    ].filter(Boolean);
  }
  const As = (e) => Ls(e) ? "" : un(e) + Ts(e);
  let _s = "";
  function Ta(e) {
    var n;
    I && (I.details = e, Bo(), (n = ct.querySelector(e ? "[data-details-close]" : "[data-details]")) == null || n.focus({ preventScroll: !0 }));
  }
  const gi = (e) => {
    const n = k[e], i = zn(e), d = Va(e);
    return { kind: Sd(n), name: xe(e), text: an(e), pos: i, target: Math.abs(d - i) > 0.5 ? d : null, moving: n.state === "opening" || n.state === "closing", tilt: oo(e) ?? 100, canSet: Wt(e, Oc) };
  };
  function Es(e) {
    e.querySelectorAll("[data-cover-art]").forEach((n) => {
      const i = n.dataset.coverArt, d = n.dataset.artKey || "more:" + i;
      let p = P.get(d);
      p || (p = Qh({ onMove: (m) => wi(i, m), onSet: (m) => {
        wi(i, m), yi("pos", i);
      } }), p.coverId = i, P.set(d, p)), n.replaceWith(p.el), p.update(gi(i));
    });
  }
  const No = (e) => [...P.values()].filter((n) => n.coverId === e), vi = () => P.forEach((e) => {
    k[e.coverId] && e.update(gi(e.coverId));
  }), Ds = () => {
    P.forEach((e, n) => {
      e.el.isConnected || (e.destroy(), P.delete(n));
    }), vi();
  };
  function Bo() {
    var m, h;
    if (!I || !(Ls(I.id) || k[I.id])) {
      ct.hidden = !0;
      return;
    }
    if ([...je.keys()].some((b) => b.endsWith("|" + I.id))) {
      vi();
      return;
    }
    const e = Ro(I.id), n = ct.querySelector(".tfMore");
    if (!e) {
      Zr();
      return;
    }
    const i = ur(ct), d = As(I.id), p = I.frame ? I.frame.wide : I.id.startsWith("summary:") || I.id.startsWith("group:");
    if (ct.hidden || !n || e.length !== to.length || n.classList.contains("wide") !== p) {
      const b = Kn ? I.scroll || 0 : !ct.hidden && n ? n.scrollTop : 0;
      ct.innerHTML = '<div class="tfMorePair' + (ct.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (p ? " wide" : "") + '"' + (I.frame ? ' style="height:' + I.frame.h + 'px"' : "") + ">" + e.join("") + "</section>" + (d ? '<aside class="tfMoreSide" id="tfMoreSide" aria-label="Details"><div class="tfMoreSideInner"><div class="tfMoreHead"><button class="tfBack" type="button" data-details-close aria-label="Back">' + Cd + '</button><div class="activityTitle">Details</div></div><div class="tfMoreSideBody">' + d + "</div></div></aside>" : "") + "</div>", _s = d, ct.classList.toggle("wide", p), ct.hidden = !1, Yr(), Es(ct), ya(ct), la(ct), ct.querySelectorAll("[data-day]").forEach((x) => hr(x.dataset.day, x, I.at)), b && (ct.querySelector(".tfMore").scrollTop = b), pr(ct, i), ct.contains(a.activeElement) || (m = ct.querySelector("[data-more-close]")) == null || m.focus({ preventScroll: !0 });
    } else {
      if (e.forEach((b, x) => {
        var F, ie;
        if (b === to[x] || b.includes("data-cover-art") || n.children[x].contains((ie = (F = a.activeElement) == null ? void 0 : F.matches) != null && ie.call(F, "input,select") ? a.activeElement : null) || [...je.keys()].some((ke) => n.children[x].querySelector('[data-drag="' + CSS.escape(ke) + '"]'))) return;
        const D = document.createElement("div");
        D.innerHTML = b;
        const H = fo(n.children[x], D.firstElementChild);
        la(H), ya(H);
      }), d !== _s) {
        const b = ct.querySelector(".tfMoreSideBody");
        b && (b.innerHTML = d), _s = d;
      }
      ct.contains(a.activeElement) || pr(ct, i);
    }
    (h = ct.querySelector(".tfMorePair")) == null || h.classList.toggle("details", !!(I.details && d)), to = e, vi();
  }
  setInterval(() => {
    I && Bo();
  }, 15 * 1e3);
  function Rs(e, n) {
    var p;
    const i = !!(I && n && ct.contains(n)), d = i && ct.querySelector(".tfMore");
    i && (I.scroll = d.scrollTop), I = { id: e, opener: i ? I.opener : n, back: i ? I : null, frame: i ? I.frame || { wide: d.classList.contains("wide"), h: d.offsetHeight } : null, at: Number((p = n == null ? void 0 : n.dataset) == null ? void 0 : p.at) || null }, Ns();
  }
  let Kn = !1;
  function Ns() {
    to = [], Kn = !ct.hidden, P.forEach((e, n) => {
      n !== I.id && ct.contains(e.el) && (e.destroy(), P.delete(n));
    }), Bo(), Kn = !1;
  }
  function Zr() {
    var i, d, p, m, h, b;
    const e = I == null ? void 0 : I.opener;
    I = null, P.forEach((x, D) => {
      ct.contains(x.el) && (x.destroy(), P.delete(D));
    }), Be.forEach((x, D) => {
      D.startsWith("more:") && Be.delete(D);
    }), ct.hidden = !0, ct.innerHTML = "";
    const n = { preventScroll: !0 };
    e != null && e.isConnected ? e.focus(n) : (i = e == null ? void 0 : e.dataset) != null && i.more ? (d = E.querySelector('[data-more="' + CSS.escape(e.dataset.more) + '"]')) == null || d.focus(n) : (p = e == null ? void 0 : e.dataset) != null && p.summary ? (m = E.querySelector('[data-summary="' + CSS.escape(e.dataset.summary) + '"]')) == null || m.focus(n) : (h = e == null ? void 0 : e.hasAttribute) != null && h.call(e, "data-favs-edit") && ((b = E.querySelector("[data-favs-edit]")) == null || b.focus(n));
  }
  function Bs(e, n, i, d = {}) {
    const p = n.map((we) => we[1]), m = d.zero ? 0 : Math.min(...p), h = Math.max(...p), b = Math.max(120, e.clientWidth || 260), x = Math.max(60, e.clientHeight || 130), D = 8, H = x - 20, F = Date.now() - 24 * 3600 * 1e3, ie = 24 * 3600 * 1e3, ke = (we) => Math.max(0, Math.min(b, (we - F) / ie * b)), Ee = (we) => h === m ? (D + H) / 2 : H - (we - m) / (h - m) * (H - D);
    let te = "M" + ke(n[0][0]).toFixed(1) + " " + Ee(n[0][1]).toFixed(1);
    for (let we = 1; we < n.length; we++) te += d.smooth ? "L" + ke(n[we][0]).toFixed(1) + " " + Ee(n[we][1]).toFixed(1) : "H" + ke(n[we][0]).toFixed(1) + "V" + Ee(n[we][1]).toFixed(1);
    e.setAttribute("viewBox", "0 0 " + b + " " + x), e.setAttribute("aria-label", i), e.innerHTML = '<path d="' + te + "V" + H + "H" + ke(n[0][0]).toFixed(1) + 'Z" fill="' + (d.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + te + '" fill="none" stroke="' + (d.colour || "var(--primary)") + '" stroke-width="2" stroke-linejoin="round"/><text x="0" y="' + (x - 4) + '">24 h ago</text><text x="' + b + '" y="' + (x - 4) + '" text-anchor="end">Now</text>';
  }
  const gl = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, vl = (e, n) => {
    const i = e.split(".")[0];
    return gl[i] ? gl[i].includes(n) : i === "alarm_control_panel" || i === "climate" || i === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(n) : n === "on";
  }, sd = (e) => {
    const n = e.split(".")[0], i = xt(e).device_class;
    return n === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[i] || (Pl.includes(i) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[n] || "On";
  }, $n = /* @__PURE__ */ new Map();
  let bl = 0;
  async function ld(e) {
    let n = $n.get(e);
    if (!n || Date.now() - n.at > 60 * 1e3) {
      let p = [];
      try {
        const m = await R({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        p = ((m == null ? void 0 : m[e]) || []).map((h) => [h.lu != null ? h.lu * 1e3 : Date.parse(h.last_updated || h.last_changed), String(h.s ?? h.state)]).filter(([h]) => Number.isFinite(h));
      } catch {
      }
      p.length || (p = (Ma || []).filter((m) => m.entity_id === e).map((m) => [m.when * 1e3, String(m.state)])), n = { at: Date.now(), pts: p }, $n.set(e, n);
    }
    const i = k[e], d = n.pts.slice().sort((p, m) => p[0] - m[0]);
    return i && (!d.length || d[d.length - 1][1] !== i.state) && d.push([Date.parse(i.last_changed) || Date.now(), i.state]), d;
  }
  async function hr(e, n, i) {
    const d = await ld(e);
    if (!n.isConnected) return;
    const p = d.map(([Oe, ft]) => [Oe, Number(ft)]);
    if (d.length > 1 && p.every(([, Oe]) => Number.isFinite(Oe))) {
      Bs(n, p, xe(e) + ", last 24 hours");
      return;
    }
    const m = Date.now(), h = m - 864e5, b = Math.max(200, n.clientWidth || 360), x = 62, D = (Oe) => Math.max(0, Math.min(b, (Oe - h) / 864e5 * b)), H = [];
    let F = null;
    d.forEach(([Oe, ft]) => {
      const Se = vl(e, ft);
      Se && F == null ? F = Math.max(Oe, h) : !Se && F != null && (H.push([F, Math.max(Oe, h)]), F = null);
    }), F != null && H.push([F, m]);
    const ie = ei(e) ? "var(--danger)" : e.startsWith("light.") ? "#ffaa00" : "var(--primary)", ke = sd(e), Ee = "tfDayClip" + ++bl, te = H.map(([Oe, ft]) => ke + (ft >= m - 1e3 && Oe <= h + 1e3 ? " all day" : ft >= m - 1e3 ? " since " + zt(Oe) : Oe <= h + 1e3 ? " until " + zt(ft) : " " + zt(Oe) + "–" + zt(ft)));
    let we = "", V = -1 / 0;
    H.forEach(([Oe], ft) => {
      const Se = te[ft].length * 5.4, at = Math.min(D(Oe), b - Se);
      at < V + 8 || (we += '<text x="' + at.toFixed(1) + '" y="10">' + re(te[ft]) + "</text>", V = at + Se);
    });
    let ve = '<text x="' + b + '" y="' + (x - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((Oe) => {
      let ft = new Date(m).setHours(Oe, 0, 0, 0);
      ft > m && (ft -= 864e5), D(ft) > 8 && D(ft) < b - 34 && (ve += '<text x="' + D(ft).toFixed(1) + '" y="' + (x - 2) + '" text-anchor="middle">' + String(Oe).padStart(2, "0") + "</text>");
    }), n.setAttribute("viewBox", "0 0 " + b + " " + x), n.setAttribute("aria-label", xe(e) + ", last 24 hours: " + (te.length ? te.join(", ") : "no changes")), n.innerHTML = '<clipPath id="' + Ee + '"><rect x="0" y="18" width="' + b + '" height="26" rx="8"/></clipPath>' + we + '<rect x="0" y="18" width="' + b + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + Ee + ')">' + H.map(([Oe, ft]) => '<rect x="' + D(Oe).toFixed(1) + '" y="18" width="' + Math.max(2, D(ft) - D(Oe)).toFixed(1) + '" height="26" fill="' + ie + '"/>').join("") + "</g>" + (i && i >= h ? '<line x1="' + D(i).toFixed(1) + '" x2="' + D(i).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + ve;
  }
  function fr(e) {
    var d;
    const n = Number((d = k[e]) == null ? void 0 : d.state), i = Date.now();
    if (xt(e).state_class === "total_increasing") {
      const p = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), m = Math.max(1, i - p);
      return [...Array(49)].map((h, b) => p + m * b / 48).map((h) => [h, Math.round(n * Math.pow((h - p) / m, 1.3) * 100) / 100]);
    }
    return [...Array(48)].map((p, m) => [i - (48 - m) * 30 * 60 * 1e3, Math.round(n * (0.96 + 0.04 * Math.sin(m / 6)) * 10) / 10]);
  }
  async function mr(e, n) {
    var ke, Ee;
    let i = Ie.get(e);
    if (e.endsWith("_solar_power")) i = { at: Date.now(), points: oc() };
    else if (br(e)) i = { at: Date.now(), points: fr(e) };
    else if (!i || Date.now() - i.at > 5 * 60 * 1e3) {
      try {
        const te = new Date(Date.now() - 864e5).toISOString(), we = await R({ type: "history/history_during_period", start_time: te, entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), V = ((we == null ? void 0 : we[e]) || []).map((ve) => [ve.lu != null ? ve.lu * 1e3 : Date.parse(ve.last_updated || ve.last_changed), Number(ve.s ?? ve.state)]).filter(([ve, Oe]) => Number.isFinite(ve) && Number.isFinite(Oe));
        i = { at: Date.now(), points: V };
      } catch {
        i = { at: Date.now(), points: [] };
      }
      Ie.set(e, i);
    }
    const d = n || E.querySelector('[data-graph="' + CSS.escape(e) + '"]');
    if (!d) return;
    const p = k[e], m = ((ke = p == null ? void 0 : p.attributes) == null ? void 0 : ke.unit_of_measurement) || "", h = i.points.slice(), b = Number(p == null ? void 0 : p.state);
    if (Number.isFinite(b) && !e.endsWith("_solar_power") && h.push([Date.now(), b]), h.length < 2) {
      d.setAttribute("aria-label", xe(e) + ": no history for the last 24 hours"), d.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const x = h.map((te) => te[1]), D = Math.min(...x), H = Math.max(...x), F = (te) => te.toLocaleString(void 0, { maximumFractionDigits: Math.abs(te) >= 100 ? 0 : 1 }), ie = ((Ee = p == null ? void 0 : p.attributes) == null ? void 0 : Ee.state_class) === "total_increasing";
    Bs(d, h, xe(e) + ", last 24 hours: " + (ie ? "+" + F(x[x.length - 1] - x[0]) : D === H ? F(D) : F(D) + " to " + F(H)) + (m ? " " + m : ""), { smooth: e.endsWith("_solar_power"), zero: e.endsWith("_solar_power") });
  }
  function wl() {
    const e = E == null ? void 0 : E.querySelector("[data-solar]");
    if (!e) return;
    const n = oc();
    Bs(e, n, "Solar, last 24 hours: up to " + qn(Math.max(...n.map((i) => i[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function Kr(e, n) {
    const i = n.entity_id, d = C.get(i) || {}, p = { open_cover: 100, close_cover: 0, set_cover_position: n.position, toggle: zn(i) > 0 ? 0 : 100 }[e], m = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: n.tilt_position }[e];
    p != null && (d.pos = p), m != null && (d.tilt = m), e === "stop_cover" && (delete d.pos, delete d.tilt), e === "stop_cover_tilt" && delete d.tilt, d.at = Date.now(), C.set(i, d);
  }
  function gr(e, n, i) {
    var p;
    const d = i == null ? void 0 : i.entity_id;
    return e !== "light" || typeof d != "string" || !ba[d] || !ja(d) || i.brightness_pct != null || i.brightness != null ? [n, i] : n !== "turn_on" && !(n === "toggle" && ((p = k[d]) == null ? void 0 : p.state) !== "on") ? [n, i] : ["turn_on", { ...i, brightness_pct: ba[d] }];
  }
  function Ha(e, n, i, d) {
    let p = { entity_id: i, ...d || {} };
    return [n, p] = gr(e, n, p), e === "cover" && Kr(n, p), lt[i] = (lt[i] || 0) + 1, Ci.set(jc, JSON.stringify(lt)), Mr.call(e, n, p) ? Promise.resolve() : Promise.resolve(me(e, n, p));
  }
  function bi(e) {
    const [n, i, d, p] = e.split("|");
    Ha(n, i, d, p ? JSON.parse(p) : null).catch(() => {
    });
  }
  function wi(e, n) {
    je.set("pos|" + e, n), yn.delete(e), to = to.map(() => ""), [E, ct].forEach((d) => d.querySelectorAll('[data-blocks="' + CSS.escape(e) + '"]').forEach((p) => be(p, n)));
    const i = E.querySelector('.tfAction[data-k="' + CSS.escape(e) + '"] .tfName .activityRowMeta');
    if (i && (i.textContent = Math.round(n) + "%"), (I == null ? void 0 : I.id) === e) {
      const d = ct.querySelector(".tfMoreState"), p = ct.querySelector(".tfMoreSub");
      d && (d.textContent = Math.round(n) + "%", d.classList.add("live")), p && (p.textContent = "Currently " + zn(e) + "%");
    }
    No(e).forEach((d) => d.update(gi(e)));
  }
  const yl = (e, n) => {
    const i = e.shiftKey ? 10 : 1, d = { ArrowUp: n + i, ArrowRight: n + i, ArrowDown: n - i, ArrowLeft: n - i, PageUp: n + 25, PageDown: n - 25, Home: 0, End: 100 }[e.key];
    return d == null ? null : Math.max(0, Math.min(100, Math.round(d)));
  };
  function Po(e, n) {
    var te;
    const i = e.dataset.blocks;
    (te = e.setPointerCapture) == null || te.call(e, n.pointerId);
    const d = (we) => {
      const V = e.getBoundingClientRect();
      return Math.max(0, Math.min(100, (we.clientX - V.left) / V.width * 100));
    }, p = d(n), m = n.clientX;
    let h = !1, b = Va(i), x = p, D = 0;
    const H = () => {
      b = Math.abs(x - b) < 0.2 ? x : b + (x - b) * 0.14, wi(i, b), D = requestAnimationFrame(H);
    }, F = () => {
      h || (h = !0, e.classList.add("fine"), D = requestAnimationFrame(H));
    }, ie = setTimeout(F, 350), ke = (we) => {
      x = d(we), Math.abs(we.clientX - m) > 6 && (clearTimeout(ie), F());
    }, Ee = () => {
      clearTimeout(ie), cancelAnimationFrame(D), e.removeEventListener("pointermove", ke), e.removeEventListener("pointerup", Ee), e.removeEventListener("pointercancel", Ee), e.classList.remove("fine"), wi(i, h ? Math.round(b) : (Math.min(3, Math.floor(p / 25)) + 1) * 25), yi("pos", i);
    };
    e.addEventListener("pointermove", ke), e.addEventListener("pointerup", Ee), e.addEventListener("pointercancel", Ee);
  }
  function Ps(e) {
    var p;
    const [n, i] = e.dataset.open.split("|"), d = e.closest(".tfCard");
    B = { key: n, id: i, h: d ? Math.round(d.getBoundingClientRect().height) : 0 }, yn.delete(n), Tn(), (p = E.querySelector(".tfOpen [data-close]")) == null || p.focus({ preventScroll: !0 });
  }
  function nn(e) {
    var n;
    oe = e.dataset.area, E.querySelectorAll(".tfAreaPanel").forEach((i) => {
      var p;
      const d = i === e;
      i.classList.toggle("active", d), i.setAttribute("aria-expanded", String(d)), (p = i.querySelector(".panelExpanded")) == null || p.toggleAttribute("inert", !d);
    }), yn.set("areas", Ya(((n = E.querySelector('[data-k="areas"]')) == null ? void 0 : n.style.order) || 1));
  }
  const Is = {
    bright: { value: (e, n) => Math.round(n * 100), text: (e, n) => n ? n + "%" : "Off", send: (e, n) => n > 0 ? ["light", "turn_on", { brightness_pct: n }] : ["light", "turn_off", {}] },
    ct: { value: (e, n) => {
      const [i, d] = yo(e);
      return Math.round(i + n * (d - i));
    }, text: (e, n) => n.toLocaleString() + "k", send: (e, n) => ["light", "turn_on", { color_temp_kelvin: n }] },
    hue: { value: (e, n) => Math.round(n * 360), text: () => "Colour", send: (e, n) => {
      var i;
      return ["light", "turn_on", { hs_color: [n, Math.max(60, ((i = xt(e).hs_color) == null ? void 0 : i[1]) || 100)] }];
    } },
    pos: { value: (e, n) => Math.round(n * 100), text: (e, n) => Math.round(n) + "%", send: (e, n) => ["cover", "set_cover_position", { position: Math.round(n) }] },
    tilt: { value: (e, n) => Math.round(n * 100), text: (e, n) => "Tilt " + n + "%", send: (e, n) => ["cover", "set_cover_tilt_position", { tilt_position: n }] },
    vol: { value: (e, n) => Math.round(n * 100) / 100, text: (e, n) => Math.round(n * 100) + "%", send: (e, n) => ["media_player", "volume_set", { volume_level: n }] }
  };
  function ha(e, n, i, d) {
    var x;
    const p = Is[n].value(i, d);
    je.set(n + "|" + i, p);
    const m = Math.round(d * 100) + "%", h = e.querySelector("i");
    if (n === "tilt") {
      h.style.width = "calc((100% - 8px) * " + d + ")";
      const [D, H] = e.querySelectorAll("span");
      D.classList.toggle("lit", d > 0.08), H.classList.toggle("lit", d > 0.92), yn.delete(i), to = to.map(() => ""), No(i).forEach((F) => F.update(gi(i)));
    } else if (h) h.style.width = m;
    else {
      let D = e.querySelector("b");
      D || (D = document.createElement("b"), e.appendChild(D)), D.style.left = m;
    }
    e.setAttribute("aria-valuenow", String(Math.round(d * 100)));
    const b = (x = e.closest(".tfAction") || e.closest(".tfMore")) == null ? void 0 : x.querySelector(".tfName .activityRowMeta, .tfMoreState");
    b && (b.textContent = Is[n].text(i, p));
  }
  function yi(e, n) {
    const i = je.get(e + "|" + n), [d, p, m] = Is[e].send(n, i), h = () => setTimeout(() => {
      je.delete(e + "|" + n), Tn();
    }, 1500);
    Ha(d, p, n, m).then(h, h);
  }
  function xl(e) {
    e.addEventListener("click", (n) => {
      var d, p;
      const i = n.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],.tfAreaPanel");
      if (Da && !n.target.closest(".tfBoardMenu,[data-board-more]") && Xa(), !(!i || !e.contains(i) || i.disabled))
        if (i.dataset.boardMore)
          (Da == null ? void 0 : Da.key) === i.dataset.boardMore ? Xa(!0) : Ql(i.dataset.boardMore, i);
        else if (i.dataset.boardAct) bs(Da.key, i.dataset.boardAct);
        else if (i.dataset.boardShow) Hr(i.dataset.boardShow);
        else if (i.dataset.favHide) sr(i.dataset.favHide, !1);
        else if (i.dataset.energyPick) Rr(i.dataset.energyPick);
        else if (i.dataset.act) bi(i.dataset.act);
        else if (i.hasAttribute("data-details")) Ta(!(I != null && I.details));
        else if (i.hasAttribute("data-details-close")) Ta(!1);
        else if (i.dataset.summary) ds(i.dataset.summary, i);
        else if (i.dataset.star) $s(i.dataset.star);
        else if (i.hasAttribute("data-more-back")) {
          const m = I.id;
          I = I.back, Ns(), (d = ct.querySelector('.tfMore [data-more="' + CSS.escape(m) + '"]')) == null || d.focus({ preventScroll: !0 });
        } else if (i.hasAttribute("data-favs-edit")) Rs("favourites", i);
        else if (i.dataset.acts) JSON.parse(i.dataset.acts).forEach(([m, h, b, x]) => Ha(m, h, b, x).catch(() => {
        }));
        else if (i.dataset.more) Rs(i.dataset.more, i);
        else if (i.hasAttribute("data-more-close")) Zr();
        else if (i.dataset.go) Do("room:" + i.dataset.go);
        else if (i.hasAttribute("data-area-back")) Vr();
        else if (i.dataset.open) Ps(i);
        else if (i.hasAttribute("data-close")) {
          const m = B;
          B = null, yn.delete(m.key), Tn(), (p = E.querySelector('[data-open="' + CSS.escape(m.key + "|" + m.id) + '"]')) == null || p.focus({ preventScroll: !0 });
        } else i.classList.contains("tfAreaPanel") && !i.classList.contains("active") && nn(i);
    }), e.addEventListener("keydown", (n) => {
      var d, p, m, h, b, x, D;
      const i = n.target;
      if ((d = i.dataset) != null && d.open && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), Ps(i)), (p = i.dataset) != null && p.energyPick && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), Rr(i.dataset.energyPick)), (m = i.classList) != null && m.contains("tfAreaPanel") && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), nn(i)), (h = i.dataset) != null && h.summary && (n.key === "Enter" || n.key === " ") && (n.preventDefault(), ds(i.dataset.summary, i)), n.key === "Escape" && Da && e === E) {
        n.preventDefault(), Xa(!0);
        return;
      }
      if (n.key === "Escape" && rn && e === E) {
        n.preventDefault(), Hn(!1), (b = c("dashEditNav")) == null || b.focus();
        return;
      }
      if (n.key === "Escape" && Ae && e === E && (n.preventDefault(), Vr()), (x = i.dataset) != null && x.blocks) {
        const H = i.dataset.blocks, F = yl(n, Math.round(Va(H)));
        if (F == null) return;
        n.preventDefault(), wi(H, F), clearTimeout(he.get(H)), he.set(H, setTimeout(() => yi("pos", H), 500));
        return;
      }
      if ((D = i.dataset) != null && D.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(n.key)) {
        n.preventDefault();
        const [H, F] = i.dataset.drag.split("|"), ie = Number(i.getAttribute("aria-valuenow")) / 100, ke = n.key === "Home" ? 0 : n.key === "End" ? 1 : Math.max(0, Math.min(1, ie + (n.key === "ArrowLeft" || n.key === "ArrowDown" ? -0.05 : 0.05)));
        ha(i, H, F, ke), yi(H, F);
      }
    }), e.addEventListener("pointerdown", (n) => {
      var Se;
      const i = n.target.closest("[data-blocks]");
      if (i && n.button === 0) {
        n.preventDefault(), Po(i, n);
        return;
      }
      const d = n.target.closest("[data-drag]");
      if (!d || n.button > 0) return;
      const [p, m] = d.dataset.drag.split("|"), h = p === "bright" && !ja(m), b = n.pointerType !== "mouse";
      if (h && !b) {
        bi(St("light", "toggle", m));
        return;
      }
      const x = p === "bright" && ((Se = k[m]) == null ? void 0 : Se.state) !== "on", D = p === "tilt" ? 4 : 0, H = () => d.getBoundingClientRect().width - D * 2, F = (at) => {
        const Ln = d.getBoundingClientRect();
        return Math.max(0, Math.min(1, (at.clientX - Ln.left - D) / H()));
      };
      let ie = b ? "waiting" : x ? "pressed" : "dragging", ke = 0;
      const Ee = n.clientX, te = n.clientY, we = (at, Ln) => Math.hypot(at.clientX - Ee, at.clientY - te) > Ln, V = () => {
        try {
          d.setPointerCapture(n.pointerId);
        } catch {
        }
      };
      b || (n.preventDefault(), V()), ie === "dragging" && ha(d, p, m, F(n));
      const ve = () => {
        var at, Ln;
        ie = "sliding", _ = d, d.classList.add("held"), V(), (at = navigator.userActivation) != null && at.hasBeenActive && ((Ln = navigator.vibrate) == null || Ln.call(navigator, 8)), ke = x ? (ba[m] ?? 100) / 100 : Number(d.getAttribute("aria-valuenow")) / 100;
      }, Oe = (at) => {
        ie === "waiting" && we(at, M) ? !h && Math.abs(at.clientX - Ee) > Math.abs(at.clientY - te) ? ve() : ie = "gone" : ie === "pressed" && we(at, 4) && (ie = "dragging"), ie === "sliding" ? ha(d, p, m, Math.max(0, Math.min(1, ke + (at.clientX - Ee) / H()))) : ie === "dragging" && ha(d, p, m, F(at));
      }, ft = (at) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((Ln, Ze) => d.removeEventListener(Ln, Ze ? ft : Oe)), d.classList.remove("held"), _ === d && (_ = null), ie === "sliding" || ie === "dragging" ? yi(p, m) : at.type === "pointerup" && h ? bi(St("light", "toggle", m)) : at.type === "pointerup" && x && (ie === "waiting" || ie === "pressed") && Ha("light", "turn_on", m).catch(() => {
        });
      };
      d.addEventListener("pointermove", Oe), d.addEventListener("pointerup", ft), d.addEventListener("pointercancel", ft);
    }), e.addEventListener("touchmove", (n) => {
      _ && n.cancelable && n.preventDefault();
    }, { passive: !1 });
  }
  return E && w && (Oi(), xl(E), xl(ct), ct.addEventListener("click", (e) => {
    e.target === ct && Zr();
  }), ($r = a.getElementById("homeNav")) == null || $r.addEventListener("click", () => {
    Ae && Vr();
  }), (Hs = a.querySelector(".bottomNav")) == null || Hs.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + Yc + "</button>"), (vr = c("dashEditNav")) == null || vr.addEventListener("click", () => Hn(!rn)), E.addEventListener("pointerdown", pi), new ResizeObserver(() => {
    f.classList.contains("tfDash") && fs() !== ps ? Tn() : Ir();
  }).observe(E), window.addEventListener("resize", Ir, { passive: !0 }), ct.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.stopPropagation(), I != null && I.details ? Ta(!1) : Zr());
  })), $(), {
    update(e) {
      if (!w) return;
      const n = !Object.keys(k).length;
      k = e || {};
      for (const i in k) i.startsWith("light.") && k[i].state === "on" && ja(i) && S(i, Wa(k[i]));
      n ? Ia() : Tn();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      bo = !0, Ke == null || Ke.destroy(), Ke = null, Ot == null || Ot.forEach((e) => e.destroy()), Ot = null;
    },
    resume() {
      bo = !1, !(!w || !(E != null && E.querySelector("[data-tf]"))) && (dt.isConnected && Sr(dt.style.order), zo());
    }
  };
}
const Af = "0.60.1", _d = "move_assistant", _f = "move_assistant", $c = "move_assistant_checkin_reminder";
function Ef() {
  if (document.getElementById("move-assistant-inter")) return;
  const a = document.createElement("link");
  a.id = "move-assistant-inter", a.rel = "stylesheet", a.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(a);
}
class Df extends HTMLElement {
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
    Ef();
    const l = this.shadowRoot || this.attachShadow({ mode: "open" });
    l.innerHTML = `<style>${Ru}${Nu}${Bu}</style>${Pu}`;
    const o = l.getElementById("app");
    o.style.opacity = "0";
    let c = null;
    try {
      const f = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: _d
      });
      c = (f == null ? void 0 : f.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(c), this._app = tp(l, {
      data: c,
      save: (f) => this._save(f),
      fire: (f, v) => this._fire(f, v),
      ws: (f) => this._hass.callWS(f),
      subscribe: (f, v) => {
        var w, A;
        return (A = (w = this._hass) == null ? void 0 : w.connection) != null && A.subscribeMessage ? this._hass.connection.subscribeMessage(v, f) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var f, v;
        return Object.keys(((v = (f = this._hass) == null ? void 0 : f.services) == null ? void 0 : v.notify) || {}).sort();
      },
      setReminderAutomation: (f) => this._setReminderAutomation(f),
      setLight: (f) => this.classList.toggle("lightBody", f),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this._test = Lf(l, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), this.isConnected || (this._app.suspend(), this._test.suspend()), o.style.transition = "opacity .2s ease", o.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var o;
    const l = (o = this._hass) == null ? void 0 : o.connection;
    l != null && l.subscribeMessage && l.subscribeMessage(
      (c) => {
        var v;
        const f = JSON.stringify((c == null ? void 0 : c.value) ?? null);
        f === this._lastSaved || f === this._pendingJson || (this._lastSaved = f, (v = this._app) == null || v.applyRemoteData(c.value));
      },
      { type: "frontend/subscribe_user_data", key: _d }
    ).catch(() => {
    });
  }
  _save(l) {
    this._pendingJson = JSON.stringify(l), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const o = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: _d,
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
      event_type: _f,
      event_data: { action: l, ...o }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(l) {
    const o = `config/automation/config/${$c}`;
    if (!l) {
      try {
        await this._hass.callApi("DELETE", o);
      } catch (v) {
        if ((v == null ? void 0 : v.status_code) !== 404 && (v == null ? void 0 : v.status) !== 404) throw v;
      }
      return;
    }
    const c = (v) => `${v}:00`, f = window.location.pathname;
    await this._hass.callApi("POST", o, {
      id: $c,
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
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", Df), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${Af} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
