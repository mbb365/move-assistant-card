const jp = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.resting .shell{background:var(--color-bg-resting)}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}:host(.lightBody){background:#eeebe8;color-scheme:light}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.eyebrow{text-transform:uppercase;color:var(--muted)}.sub{color:var(--muted);margin-top:6.4px}.pill,.primary,.navBtn,.tab,.back,.hideBtn,.addBtn{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.activityCard,.weekly{grid-column:span 6}.activityCard,.weekly{min-height:288px}.sourceTag{display:inline-flex;margin-top:11.2px;padding:4px;border-radius:799.2px;background:var(--chip);color:var(--soft)}.workoutFooter{display:flex;justify-content:space-between;align-items:end;gap:22.4px;flex-wrap:wrap;margin-top:22.4px;width:100%;box-sizing:border-box}.workoutGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.workoutPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.workoutPanel.active{flex:7 1 0;min-width:0;cursor:default}.workoutPanel.addPanel{flex:0 0 73.6px;min-width:73.6px;display:flex;align-items:center;justify-content:center;padding:14.4px}.workoutPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.workoutPanel:before,.workoutPanel:after,.workoutPanel>.edgeLight{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.workoutPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.workoutPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}.workoutPanel>.edgeLight{top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;z-index:3;opacity:clamp(0,calc(.62 * (var(--edge-proximity) - var(--edge-sensitivity)) / (100 - var(--edge-sensitivity))),.62);mix-blend-mode:plus-lighter;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}.workoutPanel>.edgeLight:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;box-shadow:inset 0 0 0 .8px var(--glow-color-60),inset 0 0 2.4px 0 var(--glow-color-40),inset 0 0 6.4px 0 var(--glow-color-30),inset 0 0 12.8px 0 var(--glow-color-20),0 0 2.4px 0 var(--glow-color-40),0 0 6.4px 0 var(--glow-color-30),0 0 12.8px 0 var(--glow-color-20),0 0 22.4px 1.6px var(--glow-color-10)}.workoutPanel:not(.borderGlowActive):before,.workoutPanel:not(.borderGlowActive):after,.workoutPanel:not(.borderGlowActive)>.edgeLight{opacity:0;transition:opacity .35s ease-out}#app.light .workoutPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:0;filter:blur(8px);pointer-events:none}.workoutPanel:not(.active):not(.addPanel) .panelCollapsed{opacity:1;filter:blur(0)}.workoutPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.workoutPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.panelCollapsedText{writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}.workoutPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}.workoutPanelActions{display:flex;gap:22.4px;flex-wrap:wrap;align-items:center;justify-content:flex-end;margin-left:auto}.startWorkoutBtn{background:var(--primary)!important;color:var(--color-text-on-accent)!important}.startWorkoutBtn:hover{filter:brightness(1.04)}.addPanelPlus{position:relative;z-index:4;font-size:27.2px;line-height:1}.addPanelLabel{position:absolute;z-index:4;bottom:16px;writing-mode:vertical-rl;transform:rotate(180deg);color:var(--muted)}@media (max-height:820px) and (min-width:621px){.modalStatic{padding:17.6px 22.4px}.timeTile{min-height:124.8px}}@media (max-width:900px){.weekCopy{white-space:normal}.workoutGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.workoutPanel,.workoutPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.workoutPanel.addPanel{flex-basis:80px;min-width:80px}.panelCollapsed{display:none}}.moveActions{display:flex;gap:22.4px;flex-wrap:wrap}@keyframes feelingWarp{0%{transform:scale(1.03) skew(-2deg) translate(-1.5%);filter:saturate(1.02) blur(.8px)}50%{transform:scale(1.12) skew(1deg) translate(1%);filter:saturate(1.22) blur(1.5px)}to{transform:scale(1.06) skew(3deg) translate(-.5%);filter:saturate(1.1) blur(.6px)}}@keyframes feelingScan{0%{background-position:0 0,-80% 0}to{background-position:0 8px,180% 0}}.tempoExperiment{margin-top:14.4px;padding-top:16px;border-top:.32px solid var(--line)}.tempoEstimate{white-space:nowrap}.tempoQuad{position:relative;width:min(288px,100%);aspect-ratio:1/1;border-radius:28.8px;background:#ffffff06;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;touch-action:none;cursor:crosshair}.tempoCross{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;background:linear-gradient(to right,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(255,255,255,.12) 50%,transparent calc(50% + .4px))}.tempoDot{position:absolute;left:50%;top:50%;width:17.6px;height:17.6px;border-radius:50%;background:var(--text);transform:translate(-50%,-50%);pointer-events:none;box-shadow:0 0 0 4.8px #ffffff12}.tempoPole{position:absolute;pointer-events:none;color:var(--muted)}.tempoFast{top:9.6px;left:50%;transform:translate(-50%)}.tempoSlow{bottom:9.6px;left:50%;transform:translate(-50%)}.tempoHard{right:9.6px;top:50%;transform:translateY(-50%)}.tempoLow{left:9.6px;top:50%;transform:translateY(-50%)}.tempoReadout{margin-top:9.6px;color:var(--muted)}.tempoRevealRow{margin-top:11.2px}.tempoRevealBtn{color:var(--muted);text-decoration-color:var(--muted)}.editTempoExperiment{margin-top:11.2px}.editTempoExperiment[hidden]{display:none}.testingZone{position:relative;overflow:hidden;border-radius:22.4px;background:#202226;border:.8px solid #4a4f58;box-shadow:none;--text:#d6d9df;--soft:#c7ccd5;--muted:#9ea5b0;--line:#4a4f58;--lineb:#4a4f58;--field-line:#4a4f58;color:var(--text)}.testingZoneInner{position:relative;padding:19.2px;background:linear-gradient(rgba(176,186,199,.045) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.045) .8px,transparent .8px),#202226;background-size:16px 16px}.testingZoneTitleBlock{max-width:608px;margin-bottom:19.2px}.testingZoneTitleRow{display:flex;justify-content:space-between;align-items:center;gap:16px}.testingZoneTitleRow strong{color:#d6d9df}.testingZone .tempoEstimate{color:#aeb4bf}.testingZoneExplanation{margin:8px 0 0;color:#9ea5b0;text-align:left}.testingZoneLayout{display:grid;grid-template-columns:minmax(224px,288px) minmax(0,1fr);grid-template-areas:"controller feedback";gap:25.6px;align-items:start}.testingFeedbackForm{grid-area:feedback;display:grid;gap:14.4px;min-width:0;padding:16px;border:.32px solid var(--line);border-radius:16px;background:#252525}.testingFeedbackHeading{color:#d6d9df}.testingFeedbackField{display:grid;gap:6.4px;color:#9ea5b0}.testingFeedbackField select,.testingFeedbackField textarea{width:100%;border:.32px solid var(--line);background:#171717;color:#d6d9df;border-radius:11.2px;padding:8px 9.6px;font:inherit}.testingFeedbackField textarea{resize:vertical;min-height:65.6px}.testingRating{display:grid;grid-template-columns:repeat(5,1fr);gap:4.8px}.testingRating button{min-height:30.4px;border-radius:9.6px;border:.32px solid var(--line);background:#171717;color:#c7ccd5;cursor:pointer}.testingRating button.selected{border-color:#c7ccd5;background:#343434}.testingFeedbackSubmit{justify-self:start;min-height:33.6px;padding:0 12.8px;border-radius:11.2px;border:0;background:#ffffffe0;color:#111;cursor:pointer}.testingZoneControllerWrap{grid-area:controller;display:flex;flex-direction:column;align-items:center;justify-content:flex-start}.tempoQuadFrame{width:min(256px,100%);aspect-ratio:1/1;padding:0;background:linear-gradient(rgba(176,186,199,.075) .8px,transparent .8px),linear-gradient(90deg,rgba(176,186,199,.075) .8px,transparent .8px),#202226;background-size:16px 16px,16px 16px,auto;border-radius:16px}.testingZone .tempoQuad{width:100%;height:100%;border-radius:16px;background:#202226;border:.8px solid #5a606a;box-shadow:none}.testingZone .tempoCross{background:linear-gradient(to right,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px)),linear-gradient(to bottom,transparent calc(50% - .4px),rgba(176,186,199,.2) 50%,transparent calc(50% + .4px))}.testingZone .tempoDot{width:14.4px;height:14.4px;background:transparent;border:.8px solid #c4cad4;box-shadow:0 0 0 3.2px #c4cad40d}.testingZone .tempoPole{color:#8e96a2}.testingZone .tempoReadout{width:min(256px,100%);color:#9ea5b0;text-align:center;margin-top:9.6px}.testingZone button,.testingZone input,.testingZone select,.testingZone textarea{transition:opacity .14s ease,border-color .14s ease,color .14s ease,background .14s ease}.testingZone button:hover,.testingZone button:focus-visible{filter:none;opacity:.88}@media (max-width:900px){.testingZoneLayout{grid-template-columns:1fr;grid-template-areas:"controller" "feedback"}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.activityIcon{display:grid;place-items:center}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.addPanelPlus .icon,.addFab .icon{width:24px;height:24px}.checkinTabIcon .icon{width:18px;height:18px}.weekTick .icon{width:1em;height:1em}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowIcon{width:43.2px;height:43.2px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.weekCopy{color:var(--muted);margin-top:9.6px;max-width:none;white-space:nowrap}.weekChip{background:var(--tile-2);border-radius:12.8px;min-height:60.8px;padding:9.6px 11.2px;display:flex;flex-direction:column;justify-content:space-between;gap:6.4px}.weekChipTop{display:flex;justify-content:space-between;align-items:center;gap:6.4px}.weekTick{font-size:11.2px;font-weight:800;line-height:1}.weekChip.total{background:var(--card2)}.workoutSurface{position:relative;overflow:hidden;isolation:isolate}.workoutContent{position:relative;z-index:2}.pixelTrailCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}#app.light .pixelTrailCanvas{opacity:.46}.sessionHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.sessionActions{display:flex;gap:22.4px;align-items:center;flex-wrap:wrap;justify-content:flex-end}.holdEnd{position:relative;overflow:hidden;min-width:110.4px;min-height:41.6px;padding:0 16px;border-radius:799.2px;border:.32px solid var(--line);background:var(--control);text-decoration:none;user-select:none;-webkit-user-select:none;touch-action:none}.holdEndFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--bright);pointer-events:none}.holdEndLabel{position:relative;z-index:1;mix-blend-mode:difference;color:#fff}.holdEnd.holding{border-color:var(--muted)}.exerciseTitle{margin-top:4.8px;color:var(--accent-text)}.meta{color:var(--muted);margin-top:4.8px}.progress{height:46.4px;padding:0;background:transparent;border-radius:17.6px;display:flex;gap:3.2px;margin-top:19.2px;overflow:hidden}.progressSegment{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;padding:0;display:block;flex:1;min-width:0;background:var(--segment);border-radius:17.6px;position:relative;overflow:hidden;cursor:default}.progressSegment:after{content:"";position:absolute;inset:0 auto 0 0;width:0;background:var(--segment-fill);transition:width .2s linear}.progressSegment.done{background:transparent;opacity:0;pointer-events:none}.progressSegment.done:after{display:none}.progressSegment.active:after{width:var(--segment-progress,0%)}#app.resting .progressSegment:not(.done):not(.active),#app.paused .progressSegment:not(.done):not(.active){background:#fff}.progressSegment.rewindable{cursor:pointer}.progressSegment.rewindable:hover{filter:brightness(1.08)}.progressSegment:focus-visible{outline:1.6px solid var(--primary);outline-offset:-2.4px}.workGrid{display:grid;grid-template-columns:minmax(0,2fr) minmax(240px,1fr);gap:16px;margin-top:16px}.timerCard,.movementCard,.nextCard{position:relative;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.timerCard{min-height:344px;background:var(--timer);overflow:hidden}.fill{position:absolute;inset:0 auto 0 0;width:100%;background:var(--timer-fill);transition:width .2s linear}.digits{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;font-size:clamp(152px,22.4vw,312px);font-weight:850;letter-spacing:-.11em;color:#fff;mix-blend-mode:difference;font-variant-numeric:tabular-nums}.movementCard{background:var(--stage);min-height:344px;display:grid;place-items:center;padding:22.4px}.movementCard{overflow:hidden}.movementRippleCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;z-index:0}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:116.8px}.nextIcon{width:52.8px;height:52.8px;border-radius:19.2px;background:var(--icon-bg);display:grid;place-items:center;font-size:20.8px;flex:0 0 auto}.sectionLabel{margin:0 0 8px 22.4px}.moveSection{grid-column:span 12}.moveSection .workoutGallery{width:100%}.nextWrap{margin-top:16px}.nextLabel{margin:0 0 8px 22.4px}.nextCard{background:var(--card);padding:22.4px;display:flex;justify-content:space-between;align-items:center;gap:22.4px;min-height:86.4px;border-radius:28.8px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.nextMain{display:flex;align-items:center;gap:14.4px;min-width:0}.nextIcon{width:43.2px;height:43.2px;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px;flex:0 0 auto}.sessionControlRow{display:flex;justify-content:flex-end;gap:22.4px;align-items:center;margin-top:16px}.skipBtn{min-width:120px;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text);text-decoration:none}.pause{min-width:120px;min-height:41.6px;padding:0 16px}.upcomingList{display:grid;gap:9.6px;margin-top:9.6px}.upcomingCard{--future-opacity:1;display:flex;align-items:center;justify-content:space-between;gap:22.4px;min-height:86.4px;padding:22.4px;border-radius:28.8px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);opacity:var(--future-opacity);transition:opacity .22s ease}.upcomingCard:nth-child(-n+3){--future-opacity:1}.upcomingCard:nth-child(4){--future-opacity:.72}.upcomingCard:nth-child(5){--future-opacity:.48}.upcomingCard:nth-child(6){--future-opacity:.3}.upcomingCard:nth-child(n+7){--future-opacity:.16}.upcomingCard.sessionHidden{--future-opacity:.24!important;filter:saturate(.15)}.upcomingCard.sessionHidden .upcomingName{text-decoration:line-through}.upcomingCard.sessionHidden .upcomingIcon{opacity:.45}.upcomingCard.sessionHidden .upcomingMeta{opacity:.55}.upcomingInfo{display:flex;align-items:center;gap:14.4px;min-width:0}.upcomingIcon{width:43.2px;height:43.2px;flex:0 0 auto;border-radius:12.8px;background:var(--icon-bg);display:grid;place-items:center;font-size:16px}.upcomingMeta{color:var(--muted);margin-top:4px}.skipSessionBtn{flex:0 0 auto;min-height:41.6px;padding:0 14.4px;border:.8px solid var(--line);background:transparent;color:var(--text)}@media (max-width:900px){.weekCopy{white-space:normal}.nextCard{align-items:flex-start;flex-direction:column}.sessionControlRow{width:100%}.skipBtn,.pause{flex:1;min-width:0}.upcomingCard{align-items:flex-start;flex-direction:column}.skipSessionBtn{width:100%}}.countdown{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;background:var(--page);z-index:300;align-items:center;justify-content:center;flex-direction:column;text-align:center;overflow:hidden}.countdown.active{display:flex}.pixelCanvas{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block;z-index:1}.countdown:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:radial-gradient(circle at center,color-mix(in srgb,var(--primary) 16%,transparent),transparent 58%);pointer-events:none}.countNum{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:3}.countNum{font-size:clamp(144px,25.6vw,344px);font-weight:850;line-height:.75;letter-spacing:-.1em}.modalBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100vw;height:100dvh;z-index:145;background:var(--scrim);padding:28px;box-sizing:border-box;align-items:center;justify-content:center}.modalBackdrop.open{display:flex}.modal{width:min(1184px,100%);height:100%;max-width:1184px;max-height:none;overflow:hidden;background:var(--modal);border-radius:28.8px;padding:0;display:flex;flex-direction:column;box-sizing:border-box;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.modalStatic{flex:0 0 auto;padding:22.4px;background:var(--modal);border-bottom:.32px solid var(--divider)}.modalHead{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:12.8px}.modalHeaderActions{display:flex;gap:22.4px;align-items:center;flex:0 0 auto}.modalHead h2{margin:2.4px 0 0}.editNameRow{display:grid;gap:6.4px;margin-bottom:11.2px}.editNameLabel{color:var(--muted)}.editNameInput{min-height:42px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 16px}.timeTiles{display:grid;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr);gap:11.2px;margin-bottom:11.2px}.timeTile{background:var(--tile);min-height:148.8px;padding:16px;display:flex;flex-direction:column;justify-content:space-between}.timeHeader{display:flex;align-items:center;gap:14.4px}.timeIcon{width:46.4px;height:46.4px;border-radius:16px;background:var(--icon-bg);display:grid;place-items:center;flex:0 0 auto;font-size:17.6px;font-weight:760}.timeCopy{min-width:0}.rangeTrack{height:46.4px;border-radius:17.6px;background:var(--track);overflow:hidden;position:relative;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.rangeFill{position:absolute;inset:0 auto 0 0;background:var(--slider-fill);border-radius:17.6px 0 0 17.6px}.rangeInput{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.exerciseScroller{min-height:0;overflow-y:auto;padding:3.2px 16px 17.6px 22.4px;border-top:.16px solid var(--divider);scrollbar-gutter:stable}.exerciseScroller::-webkit-scrollbar{width:6.4px}.exerciseScroller::-webkit-scrollbar-track{background:transparent}.exerciseScroller::-webkit-scrollbar-thumb{background:var(--scroll-thumb);border-radius:799.2px}.sectionTitle{text-transform:uppercase;color:var(--muted);margin:14.4px 0 8px}.moveList{display:grid;gap:8px}.moveRow{display:flex;justify-content:space-between;align-items:center;gap:22.4px;background:var(--row);border-radius:20.8px;padding:22.4px}.moveRow.hidden{opacity:.46}.moveRow.hidden .moveItemName{text-decoration:line-through}.moveMeta{color:var(--muted);margin-top:4px}.hideBtn{border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.removeBtn{position:relative;overflow:hidden;border-radius:799.2px;min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.removeFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none;transition:width 0s linear}.addInput{min-height:41.6px;border-radius:799.2px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);padding:0 14.4px}.addBtn{border-radius:799.2px;min-height:42px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.routineSummary{margin-top:14.4px;background:var(--sunken);border-radius:20.8px;padding:12.8px 14.4px;color:var(--soft)}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.integrationList,.toggleList{display:grid;gap:9.6px}.integration,.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.motionControlRow{align-items:center}.motionRangeWrap{display:flex;align-items:center;justify-content:flex-end;gap:9.6px;min-width:184px}.motionRangeWrap input{width:128px}.motionRangeWrap span{color:var(--muted);min-width:51.2px;text-align:right}.dangerText{color:var(--danger)}.confirmBackdrop{display:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:80;padding:22.4px;background:var(--scrim);align-items:center;justify-content:center}.confirmBackdrop.open{display:flex}.confirmCard{width:min(448px,100%);background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.confirmActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px;margin-top:22.4px}.holdDelete{position:relative;overflow:hidden;min-width:88px;min-height:41.6px;padding:0 17.6px;border:.8px solid var(--danger-line);border-radius:12.8px;background:var(--danger-bg);color:var(--text);cursor:pointer}.holdDeleteFill{position:absolute;inset:0 auto 0 0;width:0;background:var(--danger-fill);pointer-events:none}.holdDeleteLabel{position:relative;z-index:1;color:var(--text)}.holdDelete.holding .holdDeleteLabel,.removeBtn.holding .removeLabel{color:#fff}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.weekCopy{white-space:normal}.grid{grid-template-columns:1fr}.moveSection,.activityCard,.weekly{grid-column:auto}.workGrid{grid-template-columns:1fr}.timerCard,.movementCard{min-height:256px}.timeTiles{grid-auto-flow:row;grid-template-columns:1fr}}@media (max-width:620px){.modal{width:100%;height:100%;max-height:100%}#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}.timerCard{min-height:224px}.digits{font-size:144px}.modalBackdrop{padding:9.6px}.modal{height:100%}.modalStatic{padding:14.4px}.exerciseScroller{padding:3.2px 9.6px 14.4px 14.4px}}:is(button,.primary,.tab,.back,.navBtn,.themeBtn,.energyBtn,.hideBtn,.addBtn,.removeBtn,.skipBtn,.holdEnd,.editNameInput,.addInput,.rangeTrack,.progress,.progressSegment):not(.segBtn,.stepBtn,.checkinTab,.switch,.dragHandle,.navBtn,.createPresetBtn,.sheetChoice,.setupSummary,.wxStyleBtn,.tfSeg>button){border-radius:var(--r-inner)!important}.card,.panel,.tile,.timerCard,.movementCard,.nextCard,.modal{border-radius:var(--r-card)}.movementCreatorLaunch{display:flex;gap:9.6px;align-items:center;margin:3.2px 0 14.4px}.movementCreatorOpen,.restAddBtn{min-height:35.2px;padding:0 12.8px;border-radius:12.8px;cursor:pointer}.movementCreatorOpen{border:0;background:var(--bright);color:var(--on-bright)}.restAddBtn{border:.32px solid var(--field-line);background:var(--control-2);color:var(--text)}.movementCreator{position:relative;margin:0 0 14.4px;padding:19.2px 22.4px;border-radius:22.4px;background:var(--card);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.movementCreator[hidden]{display:none}.movementCreatorHead{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:17.6px}.movementCreatorHead h3{margin:0}.movementCreatorClose{position:static}.movementCreatorFields{display:grid;grid-template-columns:minmax(0,1.45fr) minmax(0,.85fr);gap:16px 19.2px}.movementCreatorFields[hidden]{display:none!important}.movementCreatorFields>label{display:grid;gap:6.4px;min-width:0;color:var(--text)}.movementTimingRow{grid-column:1/-1;display:grid;grid-template-columns:minmax(240px,352px) minmax(208px,1fr) auto;gap:17.6px;align-items:end}.durationStack{display:grid;gap:6.4px;color:var(--text)}.creatorDurationRow{display:grid;grid-template-columns:minmax(96px,1fr) minmax(104px,1fr);gap:12.8px;align-items:center}.creatorNumber{width:100%;min-width:0}.creatorUnitSelect{min-height:41.6px;width:100%;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}.globalTimingToggle{display:flex!important;align-items:center;gap:8px!important;min-height:41.6px;cursor:pointer;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{position:absolute;opacity:0;pointer-events:none}.toggleTrack{position:relative;width:38.4px;height:22.4px;border-radius:799.2px;background:var(--switch-off);border:.32px solid var(--field-line);flex:0 0 auto;transition:background .16s ease}.toggleThumb{position:absolute;width:17.6px;height:17.6px;top:1.6px;left:1.6px;border-radius:50%;background:var(--knob-off);transition:left .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--bright)}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:17.6px;background:var(--on-bright)}.toggleLabel{color:var(--soft)}.creatorAddButton{min-width:97.6px;min-height:41.6px;align-self:end}@media (max-width:900px){.movementCreatorFields{grid-template-columns:1fr}.movementTimingRow{grid-column:auto;grid-template-columns:1fr;align-items:stretch}.globalTimingToggle{min-height:35.2px}.creatorAddButton{width:100%}}.moveRow.restItem{background:var(--row-rest)}.moveKindBadge{display:inline-flex;margin-left:6.4px;padding:2.4px 5.6px;border:.8px solid var(--field-line);border-radius:799.2px;color:var(--muted);vertical-align:middle}@media (max-width:900px){.movementCreatorFields,.movementCreatorFields.restFields{grid-template-columns:1fr;padding-right:0}.movementCreatorClose{position:static;margin-left:auto;display:block;margin-bottom:12.8px}}.createMoveOptions{margin:0 0 14.4px;padding:14.4px;border-radius:19.2px;background:var(--card2);border:.32px solid var(--line)}.createMoveOptions[hidden]{display:none}.createOptionLabel{text-transform:uppercase;color:var(--muted);margin-bottom:8px}.createPresetChoice{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}.createPresetBtn{min-height:60.8px;padding:11.2px 12.8px;border-radius:14.4px;border:.8px solid var(--field-line);background:transparent;color:var(--text);text-align:left;cursor:pointer}.createPresetBtn strong{display:block}.createPresetBtn span{display:block;color:var(--muted);margin-top:3.2px}.createPresetBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.createPresetBtn.active span{color:var(--on-bright);opacity:.68}.createExtras{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:9.6px}.createExtraToggle{display:flex;align-items:flex-start;gap:8px;padding:9.6px 11.2px;border:.8px solid var(--field-line);border-radius:14.4px;cursor:pointer}.createExtraToggle input{margin-top:2.4px}.createExtraToggle span{display:grid;gap:2.4px}.createExtraToggle small{color:var(--muted)}.creatorUnitSelect{min-height:41.6px;padding:0 9.6px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--input);color:var(--text);font:inherit}@media (max-width:900px){.createPresetChoice,.createExtras{grid-template-columns:1fr}}.globalTimingToggle{display:inline-flex!important;grid-template-columns:none!important;align-items:center;gap:5.6px!important;color:var(--text)!important;white-space:nowrap}.globalTimingToggle input{margin:0}.globalTimingValue{min-height:41.6px;display:flex;align-items:center;padding:0 11.2px;border-radius:12.8px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--muted)}.createFlow{display:grid;gap:9.6px;padding:3.2px 0 8px}.createFlow[hidden]{display:none}.createStep{border-radius:22.4px;background:var(--tile);border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden}.createStepHeader{width:100%;min-height:57.6px;padding:14.4px 17.6px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:19.2px;text-align:left;cursor:pointer}.createStepHeader:disabled{cursor:not-allowed;opacity:.42}.createStepIdentity{display:flex;align-items:center;gap:9.6px}.createStepNumber{width:22.4px;height:22.4px;border-radius:799.2px;display:grid;place-items:center;border:.32px solid var(--line);color:var(--muted)}.createStepSummary{min-width:0;color:var(--muted);text-align:right}.createStepBody{display:none;padding:0 14.4px 14.4px}.createStep.active .createStepBody{display:block}.createStep.active .createStepHeader{border-bottom:.32px solid var(--divider)}.createStepSlot{display:grid;gap:11.2px}.createStepFooter{display:flex;justify-content:flex-end;margin-top:14.4px}.createStepFooter .primary:disabled{opacity:.35;cursor:not-allowed}.modal.createMode .movementTimingRow{display:none}.modal.createMode .movementCreator{margin-bottom:8px}.modal.createMode .movementCreatorFields{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr)}.modal.createMode .movementCreatorFields.restFields{grid-template-columns:1fr}.modal.createMode .movementCreatorLaunch{margin-top:0}.modal.createMode .sectionTitle{margin-top:9.6px}.modal.createMode .modalStatic{padding-bottom:14.4px}.modal:not(.createMode) .createFlow{display:none!important}#app.resting .movementCard{background:#ffffff0e}#app.resting .movementRippleCanvas{opacity:1}#app.light.resting .movementCard{background:#fbf9f638}.nextCard .skipSessionBtn{margin-left:auto}.modal:not(.createMode) .movementCreatorLaunch{margin-top:25.6px}.testingFeedbackThanks{grid-area:feedback;min-height:176px;padding:19.2px;border:.32px solid var(--line);border-radius:16px;background:#252525;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:6.4px}.testingFeedbackThanks[hidden]{display:none}.testingFeedbackThanks strong{color:#f0f0f0}.testingFeedbackThanks p{margin:0;color:#9ea5b0}.testingFeedbackThanks a{color:#d6d9df;text-underline-offset:2.4px}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}.entitySelect{max-width:min(256px,36.8vw);text-overflow:ellipsis;field-sizing:content}.integration .status code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.integration .pill[disabled]{cursor:default;opacity:.7}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .workoutPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.shell:has(.countdown.active) .bottomNav{visibility:hidden}@media (max-width:900px){.workoutPanel:not(.active):not(.addPanel) .panelExpanded{opacity:1;filter:none;pointer-events:auto}}.grid>*{min-width:0}.insightCard{display:grid;gap:22.4px}.day{display:grid;gap:6.4px;justify-items:center}.checkinBackdrop{z-index:160}.checkinCard{width:min(576px,100%)}.checkinCard .sub{margin-top:8px}.checkinSliders{display:grid;gap:11.2px;margin-top:19.2px}.checkinTile{min-height:0;gap:var(--inset);border:0}.scaleEnds{display:flex;justify-content:space-between;margin-top:6.4px;color:var(--muted)}.rangeTrack:focus-within{outline:2.4px solid var(--primary);outline-offset:2.4px}.checkinTab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:120;display:flex;flex-direction:column;align-items:center;gap:4px;padding:16px 4px;border:.32px solid var(--line);border-right:0;border-radius:var(--r-fine) 0 0 var(--r-fine)!important;background:var(--control);color:var(--text);cursor:pointer;transition:padding .18s ease,background .18s ease}.checkinTab:hover{padding-right:12.8px}.checkinTabIcon{font-size:16px;line-height:1}.checkinTabLabel{writing-mode:vertical-rl;transform:rotate(180deg)}.checkinBadge{position:absolute;top:8px;left:8px;width:8px;height:8px;border-radius:50%;background:var(--secondary);box-shadow:0 0 0 2.4px var(--control),0 0 9.6px color-mix(in srgb,var(--secondary) 70%,transparent);animation:checkinPulse 1.8s ease-in-out infinite}@keyframes checkinPulse{50%{box-shadow:0 0 0 3px var(--control),0 0 2px color-mix(in srgb,var(--secondary) 20%,transparent)}}@media (prefers-reduced-motion: reduce){.checkinBadge{animation:none}}.shell:has(#workoutView.active) .checkinTab,.shell:has(.countdown.active) .checkinTab{display:none}#app.light .checkinBadge{box-shadow:0 0 0 2.4px var(--color-bg-ground),0 0 9.6px color-mix(in srgb,var(--primary) 50%,transparent)}.feelSection{grid-column:span 12;margin-top:16px}.feelCard{display:grid;gap:19.2px}.feelTop{display:grid;grid-template-columns:minmax(0,1fr) minmax(208px,336px);gap:22.4px;align-items:end}.feelDays{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:8px}.feelDay{min-height:0;gap:9.6px}.feelDay.future{opacity:.4}.feelDay.today{box-shadow:inset 0 0 0 .8px var(--today-ring)}.feelDots{font-size:6.4px;letter-spacing:1.6px;color:var(--muted)}.feelMeter{display:grid;gap:4.8px}.feelMeterTop{display:flex;justify-content:space-between;gap:6.4px;color:var(--muted)}.feelMeterTop span:last-child{color:var(--text)}.feelTrack{height:6.4px;border-radius:799.2px;background:var(--wash-2);overflow:hidden}.feelTrack span{display:block;height:100%;border-radius:799.2px}@media (max-width:900px){.feelSection{grid-column:auto}.feelTop{grid-template-columns:1fr}.feelDays{grid-template-columns:repeat(4,minmax(0,1fr))}}@media (max-width:620px){.feelDays{grid-template-columns:repeat(2,minmax(0,1fr))}}.checkinTile .timeHeader{align-items:center}.checkinTab:not(.due){opacity:.6}.checkinTab:not(.due):hover{opacity:1}.activityCard{grid-column:span 3}.weekly{grid-column:span 9;cursor:pointer;transition:border-color .18s ease,background .18s ease}.weekly:hover{border-color:var(--border-hover)}@media (max-width:1200px){.activityCard{grid-column:span 4}.weekly{grid-column:span 8}}@media (max-width:900px){.activityCard,.weekly{grid-column:auto}}.insightCard{grid-column:span 9;align-content:start}@media (max-width:1200px){.insightCard{grid-column:span 8}}@media (max-width:900px){.insightCard{grid-column:auto}}.helpCard .helpSteps,.helpCard .helpNote{max-width:688px}.helpCard .note{margin:0}.helpSteps{margin:19.2px 0 0;padding:0;list-style:none;counter-reset:help;display:grid;gap:9.6px}.helpSteps li{counter-increment:help;display:grid;gap:4.8px;position:relative;padding:14.4px 16px 14.4px 52.8px;border-radius:20.8px;background:var(--tile);color:var(--muted)}.helpSteps li:before{content:counter(help);position:absolute;left:14.4px;top:12.8px;width:25.6px;height:25.6px;border-radius:9.6px;display:grid;place-items:center;background:var(--icon-bg);color:var(--text)}.helpSteps strong,.helpSteps b,.helpNote b{color:var(--text)}.helpCard code{padding:.8px 4.8px;border-radius:4.8px;background:var(--wash-2)}.helpNote{display:grid;gap:3.2px;margin-top:9.6px;padding:12.8px 16px;border-radius:17.6px;border:.32px solid var(--field-line);color:var(--muted)}.helpNote strong{color:var(--text)}.rowLabel{grid-column:1/-1;margin-top:16px;margin-bottom:-8px}.checkinTab{flex-direction:row;align-items:center;gap:0}.checkinTabMain{display:flex;flex-direction:column;align-items:center;gap:4px}.checkinPeek{display:grid;gap:3.2px;justify-items:start;white-space:nowrap;overflow:hidden;max-width:0;opacity:0;margin-right:0;transition:max-width .32s cubic-bezier(.2,1.2,.4,1),opacity .2s ease,margin-right .32s ease}.checkinTab.peek{padding-left:17.6px;opacity:1}.checkinTab.peek .checkinPeek{max-width:176px;opacity:1;margin-right:14.4px}.peekCountdown{font-size:24px;font-weight:800;letter-spacing:-.04em;line-height:1;font-variant-numeric:tabular-nums}.peekAt{color:var(--muted)}@media (prefers-reduced-motion: reduce){.checkinPeek{transition:none}}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}.feelTop{grid-template-columns:1fr}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.title,.workoutName,.exerciseTitle,.feelHeadline,.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.confirmTitle,.sheetTitle,.modalHead h2,.paneTitle,.movementCreatorHead h3,.testingFeedbackThanks strong{font-size:var(--t-title);font-weight:var(--w-medium);font-style:italic;line-height:var(--lh-title);letter-spacing:-.03em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.paneTitle{margin:0 0 10px}.activityRowMeta,.nextName,.upcomingName,.editNameInput,.videoClock{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel,.nextLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel,.moveItemName,.setupSummaryText strong,.sheetChoice strong,.createPresetBtn strong,.createExtraToggle strong{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.moveMeta,.setupSummaryText small,.sheetChoice small,.createPresetBtn span,.createExtraToggle small{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.integration strong,.toggleRow strong,.setupName,.weekChipTop strong,.panelCollapsedText,.activityCount,.metaType,.kindChip,.helpSteps strong,.addGhost strong,.helpNote strong,.createStepIdentity strong,.testingZoneTitleRow strong,.testingFeedbackHeading,.tempoEstimate,.primary,.tab,.skipBtn,.skipSessionBtn,.hideBtn,.removeBtn,.addBtn,.themeBtn,.wxLayoutBtn,.holdEnd,.holdDelete,.movementCreatorOpen,.restAddBtn,.creatorAddButton,.testingFeedbackSubmit,.testingRating button,.toast,.checkinTabLabel{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.setupValue,.sub,.meta,.note,.weekCopy,.addInput,.settingsSelect,.pill,.routineSummary,.helpSteps li,.helpNote,.createStepSummary{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.setupCaption,.moveEditForm label>span,.addGhostText small,.setupSummaryAction,.metaTable th,.metaSub,.eyebrow,#stepLabel,.sourceTag,.addPanelLabel,.motionRangeWrap span,.sectionTitle,.editNameLabel,.scaleEnds,.peekAt,.upcomingMeta,.tempoPole,.tempoReadout,.tempoRevealBtn,.testingFeedbackField,.testingZoneExplanation,.testingFeedbackThanks p,.movementCreatorClose,.movementCreatorFields>label,.durationStack,.globalTimingToggle,.toggleLabel,.moveKindBadge,.createOptionLabel,.fieldError,.globalTimingValue,.createStepNumber,.feelMeterTop,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.eyebrow,#stepLabel,.sectionTitle,.setupCaption{letter-spacing:.1em}.globalTimingToggle{font-size:var(--t-caption)!important}.workoutGallery,.workoutPanel{height:340px}@media (max-width:900px){.workoutPanel,.workoutPanel.active{height:320px}}@media (max-width:900px){.workoutGallery{height:auto}.workoutPanel,.workoutPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader,.sessionHead,.sessionControlRow{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel,.rowLabel{margin-left:16px}.grid{gap:8px}.rowLabel,.feelSection{margin-top:16px}.rowLabel{margin-bottom:-4px}.sectionLabel{margin-bottom:8px}.workoutGallery{gap:8px}.workoutPanel,.workoutPanel.active{flex:0 0 100%;min-width:100%}.workoutPanel.addPanel{flex:0 0 100%;min-width:100%;min-height:120px}.card,.workoutPanel,.timerCard,.movementCard,.nextCard,.upcomingCard,.confirmCard{padding:16px}.activityRows,.insightCard,.feelCard{gap:8px}.activityRow,.weekChip{padding:10px 12px}.feelDays{gap:8px}.workGrid{gap:8px;margin-top:8px}.nextWrap,.sessionControlRow{margin-top:8px}.upcomingList{gap:8px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.insightCard{display:flex;flex-direction:column;gap:0}@media (max-width:1200px) and (min-width:901px){.timeTiles{grid-auto-flow:row;grid-template-columns:repeat(2,1fr)}}#stepLabel{margin-top:9.6px}#exerciseMeta{margin-top:4px}.moveRow{justify-content:flex-start;gap:12.8px}.moveText{flex:1;min-width:0}.moveActions{display:flex;gap:6.4px;flex:0 0 auto}.dragHandle{flex:0 0 auto;display:grid;place-items:center;width:32px;height:40px;margin:-8px 0 -8px -9.6px;padding:0;border:0;border-radius:12px;background:transparent;color:var(--muted);cursor:grab;touch-action:none}.dragHandle:hover{background:var(--hover);color:var(--text)}.moveRow.dragging{box-shadow:0 10px 30px var(--lift),inset 0 0 0 1.5px var(--primary);position:relative;z-index:2}.moveRow.dragging .dragHandle{cursor:grabbing;color:var(--text)}.removeBtn:hover,.hideBtn:hover{border-color:var(--muted)}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.modalTop{flex:0 0 auto;padding:22px 22px 0}.modalTop .modalHead{margin-bottom:0;padding-bottom:16px}@media (min-width:901px){.modal:not(.createMode){display:grid;grid-template-columns:minmax(340px,420px) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}.modal:not(.createMode) .modalTop{grid-column:1/-1;border-bottom:.32px solid var(--divider)}.modal:not(.createMode) .modalStatic{grid-column:1;grid-row:2;overflow-y:auto;border-bottom:0;border-right:.32px solid var(--divider)}.modal:not(.createMode) .exerciseScroller{grid-column:2;grid-row:2;border-top:0;padding-top:12px}.modal:not(.createMode) .timeTiles{grid-auto-flow:row;grid-template-columns:minmax(0,1fr)}}.timeTiles{align-items:start}.removeLabel{position:relative;z-index:1}.removeBtn.holding{border-color:var(--danger-fill)}#deleteMoveConfirm{z-index:200}.moveRow{will-change:transform}.moveRow.dragging{box-shadow:0 18px 40px var(--lift),inset 0 0 0 1.5px var(--primary);z-index:3;transform-origin:center}.moveRow.editing{display:block;padding:16px;box-shadow:inset 0 0 0 1.5px var(--primary)}.moveEditForm{display:grid;gap:14.4px}.moveEditFields{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:12.8px}.moveEditForm label:not(.globalTimingToggle){display:grid;gap:6.4px;min-width:0}.moveEditForm .addInput{width:100%;min-width:0}.moveEditTiming{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:12.8px}.moveEditTiming .creatorDurationRow{display:grid;grid-template-columns:96px 128px;gap:9.6px}.creatorDurationRow.isDisabled{opacity:.38}.moveEditActions{display:flex;justify-content:flex-end;align-items:center;gap:22.4px}@media (max-width:620px){.moveEditFields{grid-template-columns:1fr}}.integration .status code{color:var(--soft)}#app.resting :is(.sessionHead,.nextLabel,.sessionControlRow){--muted:#f4f4f4;color:var(--text)}#app.paused :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#090909;--muted:rgba(9,9,9,.8);--accent-text:#090909;--line:rgba(9,9,9,.3);color:var(--text)}#app.light:is(.resting,.paused) :is(.sessionHead,.nextLabel,.sessionControlRow){--text:#26221e;--muted:rgba(38,34,30,.85);--accent-text:#26221e;--line:rgba(38,34,30,.25);color:var(--text)}.moveList{display:flex;flex-direction:column}.movementCreatorOpen,.restAddBtn{display:inline-flex;align-items:center;gap:6px;touch-action:none;user-select:none;-webkit-user-select:none;cursor:grab;transition:transform .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.movementCreatorOpen svg,.restAddBtn svg{width:14px;height:14px;margin-left:-3px;opacity:.55;flex:0 0 auto}.movementCreatorOpen.lifting,.restAddBtn.lifting{transform:scale(.92);opacity:.4;cursor:grabbing;transition:transform .16s ease,opacity .16s ease}.addGhost{position:fixed;left:0;top:0;z-index:20;pointer-events:none;box-sizing:border-box;display:flex;align-items:center;gap:8px;padding:0 12.8px;overflow:hidden;white-space:nowrap;border-radius:12px;background:var(--bright);color:var(--on-bright);box-shadow:0 12px 30px var(--lift);will-change:transform;transition:width .4s cubic-bezier(.34,1.46,.64,1),height .4s cubic-bezier(.34,1.46,.64,1),border-radius .3s ease,padding .3s ease,background .2s ease,color .2s ease,box-shadow .25s ease,opacity .18s ease}.addGhost.rest{background:var(--control-2);color:var(--text);box-shadow:inset 0 0 0 .5px var(--field-line),0 12px 30px var(--lift)}.addGhostGrip{display:grid;place-items:center;flex:0 0 auto;opacity:.55}.addGhostGrip svg{width:14px;height:14px;transition:width .3s ease,height .3s ease}.addGhostText{display:grid;min-width:0}.addGhostText small{color:var(--muted);max-height:0;opacity:0;transition:max-height .3s ease,opacity .2s ease}.addGhost.overList{border-radius:20.8px;gap:12.8px;padding:0 22.4px 0 12.8px;background:var(--row);color:var(--text);box-shadow:inset 0 0 0 1.5px var(--primary),0 16px 36px var(--lift)}.addGhost.overList .addGhostGrip svg{width:18px;height:18px}.addGhost.overList .addGhostText small{max-height:20px;opacity:1;margin-top:4px}.addGhost.leaving{opacity:0}.dropSlot{flex:0 0 auto;height:0;margin-top:-8px;border-radius:20.8px;background:color-mix(in srgb,var(--primary) 9%,transparent);box-shadow:inset 0 0 0 1.5px color-mix(in srgb,var(--primary) 40%,transparent);transition:height .42s cubic-bezier(.34,1.46,.64,1),margin-top .42s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.dropSlot.leaving{opacity:0;transition:height .26s cubic-bezier(.4,0,.2,1),margin-top .26s cubic-bezier(.4,0,.2,1),opacity .16s ease}@media (prefers-reduced-motion: reduce){.addGhost,.dropSlot,.movementCreatorOpen,.restAddBtn{transition:none}}.exerciseScroller,.modalStatic,.createFlow{overflow-anchor:none}.videoStage{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;display:grid;place-items:center;background:#000;opacity:0;pointer-events:none;transition:opacity .3s ease}#app.videoStep .videoStage{opacity:1;pointer-events:auto}.videoStage{container-type:size}.videoFrame{width:min(100cqw,calc(100cqh * 16 / 9));aspect-ratio:16/9}.videoFrame>*{display:block;width:100%;height:100%;border:0}.videoSound{position:absolute;left:50%;bottom:16px;transform:translate(-50%);z-index:2}.videoProbe{position:fixed;left:-10000px;top:0;width:320px;height:180px;opacity:0;pointer-events:none}.digits.long{font-size:clamp(96px,12.8vw,200px)}.moveEditFields.videoFields{grid-template-columns:minmax(0,1fr)}.fieldError{margin:0;color:var(--danger)}.addInput.invalid{border-color:var(--danger)}@media (prefers-reduced-motion: reduce){.videoStage{transition:none}}.workGrid{transition:grid-template-columns .55s cubic-bezier(.2,.8,.2,1),gap .55s cubic-bezier(.2,.8,.2,1)}.timerCard{transition:opacity .25s ease}#app.videoStep .timerCard{opacity:0;min-width:0;pointer-events:none}.workGrid{container-type:inline-size}#app.videoStep .movementCard{height:min(56.25cqw,var(--theater-h,60vh));min-height:240px;padding:0}#app.videoStep .exerciseTitle{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}@media (min-width:901px){#app.videoStep .workGrid{grid-template-columns:minmax(0,0fr) minmax(240px,1fr);gap:0}}@media (max-width:900px){#app.videoStep .timerCard{display:none}#app.videoStep .movementCard{min-height:0}}.videoClock{display:none;margin-right:auto;font-variant-numeric:tabular-nums}#app.videoStep .videoClock{display:block}@media (prefers-reduced-motion: reduce){.workGrid,.timerCard{transition:none}}.metaCard{margin-top:16px}.metaFilters{display:flex;flex-wrap:wrap;gap:9.6px;align-items:center;margin:14.4px 0 11.2px}.metaSearch{flex:1 1 200px;min-width:0}.metaKinds{display:flex;flex-wrap:wrap;gap:6.4px}.kindChip{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);border-radius:12px;background:var(--control-2);color:var(--text);cursor:pointer}.kindChip.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.metaType{color:var(--text)}.metaTable tr.off .metaType{color:var(--muted)}.metaSub{display:none;margin-top:2px;color:var(--muted)}.metaEmpty td{text-align:center;color:var(--muted)}.metaBulk{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-top:11.2px}.metaBulkActions{display:flex;gap:22.4px}@media (max-width:620px){.metaKindCol,.metaUsedCol{display:none}.metaSub{display:block}}@media (max-width:620px){.moveRow.noMeta .moveMeta,.upcomingCard.noMeta .upcomingMeta,.nextCard.noMeta #nextMeta{display:none}}.setupSummary,.addFab{display:none}.modal{position:relative}.setupSummary{align-items:center;justify-content:space-between;gap:12px;width:100%;margin:6.4px 0 4px;padding:12px 14px;border:0;border-radius:20.8px;background:var(--tile);color:var(--text);text-align:left;cursor:pointer}.setupSummaryText{display:grid;gap:2px;min-width:0}.setupSummaryText small{color:var(--muted)}.setupSummaryAction{flex:0 0 auto;color:var(--muted)}.rowChevron{flex:0 0 auto;color:var(--muted);font-size:22px;line-height:1}.addFab{position:absolute;right:16px;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:12;place-items:center;width:56px;height:56px;padding:0;border:0;background:var(--bright);color:var(--on-bright);font-size:30px;font-weight:300;line-height:1;box-shadow:0 10px 24px var(--lift);cursor:pointer}.sheetScrim{position:absolute;top:0;right:0;bottom:0;left:0;z-index:30;background:var(--scrim);opacity:0;pointer-events:none;transition:opacity .25s ease}.sheetScrim.open{opacity:1;pointer-events:auto}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}.sheetGrab{justify-self:center;width:38px;height:5px;border-radius:99px;background:var(--field-line)}.sheetTitle{margin:0}.sheet .moveRow.editing{display:block;padding:0;background:none;box-shadow:none;border-radius:0}.sheetActions{justify-content:space-between;flex-wrap:wrap;gap:12.8px}.sheetSecondary,.sheetPrimary{display:flex;align-items:center;gap:6.4px}.sheetPrimary{gap:22.4px;margin-left:auto}.sheetChoices{display:grid;gap:8px}.sheetChoice{display:flex;align-items:center;gap:14px;width:100%;padding:12px;border:0;border-radius:20.8px;background:var(--row);color:var(--text);text-align:left;cursor:pointer}.sheetChoice small{display:block;margin-top:2px;color:var(--muted)}.sheetSetup .modalStatic{padding:0;background:none;border:0;overflow:visible}.sheetDone{width:100%;margin-top:14.4px}.addGhostActions{display:none;align-items:center;gap:6.4px;margin-left:auto;flex:0 0 auto}.addGhost.hovering{pointer-events:auto;cursor:grab;touch-action:none;animation:ghostWait 1.8s ease-in-out infinite}.addGhost.held{pointer-events:auto;cursor:grabbing;touch-action:none}.addGhost.hovering .addGhostActions{display:flex}.addGhost.rising{transition:transform .6s cubic-bezier(.34,1.46,.64,1),opacity .2s ease}.ghostDiscard{padding:0 10px}@keyframes ghostWait{50%{box-shadow:inset 0 0 0 1.5px var(--primary),0 22px 44px var(--lift),0 0 0 5px color-mix(in srgb,var(--primary) 22%,transparent)}}@media (max-width:620px){.modal:not(.createMode)>.modalStatic{display:none}.modal:not(.createMode) .setupSummary{display:flex}.addFab{display:grid}.movementCreatorLaunch{display:none}.exerciseScroller{padding-bottom:104px}.moveRow.phoneRow{gap:8px;min-height:60px;padding:12px 12px 12px 14px;cursor:pointer}}@media (prefers-reduced-motion: reduce){.sheet,.sheetScrim{transition:none}.addGhost.hovering{animation:none}}.modal{overflow:clip}.moveList.reordering>.moveRow:not(.dragging){transition:transform .44s cubic-bezier(.34,1.46,.64,1)}.moveRow.dragging.willReturn{opacity:.62;box-shadow:0 10px 24px var(--lift),inset 0 0 0 1.5px var(--field-line)}@media (prefers-reduced-motion: reduce){.moveList.reordering>.moveRow{transition:none}}.card,.panel,.confirmCard,.nextCard,.workoutPanel.active{padding:var(--inset)}.confirmCard,.nextCard,.upcomingCard{border-radius:var(--r-card)}.upcomingCard{padding:var(--inset)}.workoutPanel{border-radius:var(--r-tile);padding:var(--inset)}.workoutPanel.active{border-radius:var(--r-tile)}.workoutPanel.addPanel{padding:var(--inset)}.activityRow,.moveRow,.timeTile,.createPresetBtn,.createExtraToggle,.sheetChoice,.setupSummary{border-radius:var(--r-tile)}.activityRow,.moveRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.timeTile{padding:var(--inset);gap:var(--inset)}.timeHeader{gap:var(--inset)}.createPresetBtn,.createExtraToggle{padding:var(--inset)}.moveMeta,.activityRowMeta,.setupSummaryText small,.sheetChoice small,.createExtraToggle small{color:var(--text)}.createPresetBtn.active span{color:var(--on-bright)}.moveMeta,.activityRowMeta{margin-top:0}.activityRowIcon,.activityIcon,.timeIcon,.nextIcon,.upcomingIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);font-size:20px}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.moveRow.editing{padding:var(--inset)}.moveRow.phoneRow{min-height:0;padding:var(--inset);gap:var(--inset)}.dragHandle{width:var(--chip-size);height:var(--chip-size);margin:0;border-radius:var(--r-inner);background:var(--icon-bg);color:var(--muted)}.dragHandle svg{width:var(--glyph-size);height:var(--glyph-size)}.moveRow.restItem .dragHandle{background:transparent}.dragHandle:hover{background:color-mix(in srgb,var(--icon-bg) 80%,var(--text))}.moveRow.restItem .dragHandle:hover{background:var(--hover)}.addGhost.overList,.dropSlot{border-radius:var(--r-tile)}.seg{display:flex;align-items:center;gap:4px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.moveActions.seg{gap:4px}.moveActions .segBtn{min-width:100px}.moveActions .editBtn{background:var(--seg-on)}.moveActions .editBtn:hover{background:color-mix(in srgb,var(--seg-on) 88%,var(--text))}.moveActions .removeBtn{display:grid;place-items:center;width:40px;min-width:40px;padding:0;border:0;background:var(--danger-fill);color:var(--on-danger-fill)}.moveActions .removeBtn:hover{background:color-mix(in srgb,var(--danger-fill) 88%,white);border:0}.moveActions .removeBtn svg{display:block;width:24px;height:24px}.moveActions .removeFill{background:color-mix(in srgb,var(--on-danger-fill) 45%,transparent)}.moveActions .removeBtn.holding{color:#fff}@media (max-width:1100px){.moveActions .segBtn:not(.removeBtn){min-width:0;padding:0 14px}}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}.toggleTrack{width:50px;height:28px;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;transition:background .16s ease,opacity .16s ease}.toggleThumb{width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .16s ease,border-radius .16s ease,background .16s ease}.globalTimingToggle input:checked+.toggleTrack{background:var(--color-accent-primary);opacity:1}.globalTimingToggle input:checked+.toggleTrack .toggleThumb{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}@media (max-width:900px){.workoutPanel:not(.addPanel){border-radius:var(--r-tile);padding:var(--inset)}}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}@media (max-width:620px){.modalBackdrop{padding:0}.modal,.modal:not(.createMode){width:100%;height:100%;max-height:none;border-radius:0;border:0}.modalTop{padding-top:calc(16px + env(safe-area-inset-top,0px))}.modal:not(.createMode) .exerciseScroller{padding-bottom:calc(104px + env(safe-area-inset-bottom,0px))}}#app{--group-bg:var(--card)}.modal,.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}.setupCaption{display:block;padding:0 4px 8px;color:var(--muted);text-transform:uppercase}.setupGroup,#settingsView .integrationList,#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}.setupRow,#settingsView .integration,#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}:is(.setupRow,#settingsView .integration,#settingsView .toggleRow):not([hidden])~:is(.setupRow,.integration,.toggleRow):before{content:"";position:absolute;top:0;left:16px;right:0;border-top:.5px solid var(--divider)}.setupRow.withSlider{display:grid;grid-template-columns:minmax(0,1fr);gap:10px;align-items:stretch}.setupRowTop{display:flex;justify-content:space-between;align-items:center;gap:16px}.setupText{display:grid;gap:2px;min-width:0}.setupValue,#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}.setupRow .rangeTrack[hidden]{display:none}.rangeTrack.setupSlider{height:28px;margin:0 2px;border:0;border-radius:0!important;background:transparent;overflow:visible}.rangeTrack.setupSlider:before{content:"";position:absolute;left:0;right:0;top:50%;height:6px;border-radius:99px;background:var(--track);transform:translateY(-50%)}.setupSlider .rangeFill{top:50%;bottom:auto;height:6px;border-radius:99px;transform:translateY(-50%)}.setupSlider .rangeFill:after{content:"";position:absolute;right:-11px;top:50%;width:22px;height:22px;border-radius:50%;background:var(--slider-fill);box-shadow:0 1px 4px var(--lift);transform:translateY(-50%)}.setupSlider:focus-within{outline:0}.setupSlider:focus-within .rangeFill:after{box-shadow:0 0 0 3px color-mix(in srgb,var(--primary) 45%,transparent)}.stepper{display:flex;align-items:center;gap:2px;padding:4px;border-radius:var(--r-inner);background:var(--seg-bg);flex:0 0 auto}.stepBtn{width:36px;height:32px;padding:0;border:0;border-radius:var(--r-fine)!important;background:transparent;color:var(--text);font:600 18px/1 var(--font);cursor:pointer}.stepBtn:hover:not(:disabled){background:var(--hover)}.stepBtn:disabled{opacity:.35;cursor:default}.stepCount{min-width:24px;text-align:center;font:600 var(--t-strong)/1 var(--font);font-variant-numeric:tabular-nums}.timeTiles.setupBlock,.modal:not(.createMode) .timeTiles.setupBlock{display:block;margin-bottom:12px}.editNameLabel{padding:0 4px}.routineSummary{margin:0 0 4px;padding:0 4px;background:none;border-radius:0;color:var(--muted)}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .paneTitle{margin:0 4px}#settingsView .note{margin:0 4px 4px}#settingsView .integration>div:first-child,#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}#settingsView .helpSteps{gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .helpSteps li{border-radius:0;background:transparent}#settingsView .helpSteps li+li:after{content:"";position:absolute;top:0;left:52.8px;right:0;border-top:.5px solid var(--divider)}.activityCard,.insightCard{grid-column:span 3}.weatherCard,.grid.noWeather .activityCard,.grid.noWeather .insightCard,.grid.noActivity .insightCard{grid-column:span 6}.grid.noActivity.noWeather .insightCard{grid-column:span 12}@media (max-width:1199px) and (min-width:901px){.activityCard,.insightCard{grid-column:span 6}.weatherCard,.grid.noActivity .insightCard{grid-column:span 12}}@media (max-width:900px){.activityCard,.insightCard,.weatherCard,.grid .insightCard{grid-column:auto}}.jointRows{gap:0;padding:4px 0;border-radius:var(--r-tile);background:var(--tile)}.jointRows>.activityRow{background:transparent}.insightCard .jointRows{flex:1;align-content:space-evenly}.weatherCard{display:flex;flex-direction:column}.wxWide{flex:1;display:flex;flex-direction:column;gap:var(--inset)}.wxNow{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}.wxCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wxTempBlock{display:grid;gap:4px;min-width:0}.wxTemp{display:flex;align-items:flex-start;gap:2px}.wxPlace{color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wxCondition{display:grid;gap:2px;padding:var(--inset);border-radius:var(--r-tile);background:var(--tile);flex:0 0 auto}.wxNoDays{flex:1;display:grid;place-items:center;padding:16px;border-radius:var(--r-tile);background:var(--tile);color:var(--muted)}.wxIcon{position:relative;display:block;flex:0 0 auto;width:54px;height:54px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wxIcon>svg,.wxLayer>svg{display:block;width:100%;height:100%}:is(.wxIcon,.wxLayer).clear,:is(.wxIcon,.wxLayer).partly{background:var(--wx-clear)}:is(.wxIcon,.wxLayer).cloudy{background:var(--wx-cloudy)}:is(.wxIcon,.wxLayer).rain,:is(.wxIcon,.wxLayer).snow{background:var(--color-text-muted)}:is(.wxIcon,.wxLayer).night{background:var(--wx-night)}.wxIcon .wxBright{fill:var(--wx-cloud-bright)}.wxIcon .wxCloudLight{fill:var(--wx-cloudy)}.wxIcon .wxAccent{fill:var(--color-accent-primary)}.wxIcon.large{width:90px;height:90px;border-radius:var(--r-tile)}.wxIcon>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxIcon :is(.wxSunDisc,.wxMoonPath,.wxBright,.wxCloudLight,.wxDrop,.wxFlake,.wxTwinkle){transform-box:fill-box;transform-origin:center}#app.wxMotion .wxIcon .wxSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}#app.wxMotion .wxIcon .wxMoonPath{animation:wxBob 5.2s ease-in-out infinite}#app.wxMotion .wxIcon :is(.wxBright,.wxCloudLight){animation:wxDrift 6.4s ease-in-out infinite}#app.wxMotion .wxIcon .wxDrop{animation:wxFall .95s linear infinite}#app.wxMotion .wxIcon .wxFlake{animation:wxSnow 3.2s linear infinite}#app.wxMotion .wxIcon .wxTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.wxLayer{position:absolute;top:0;right:0;bottom:0;left:0;display:block}.wxLayer.wxOut{animation:wxFadeOut .7s cubic-bezier(.3,0,1,1) forwards}@keyframes wxFadeOut{to{opacity:0}}.wxDeg{font-family:var(--font-tile);font-size:var(--t-wx-temp);font-weight:var(--w-medium);line-height:1;letter-spacing:-.02em}.wxUnit,.wxRange{font-family:var(--font-tile);font-size:var(--t-wx-range);font-weight:300;line-height:1.25;letter-spacing:0}.wxPlace,.wxCondName{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.wxNoDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxNow[role=button],.wxDayTile{cursor:pointer;border-radius:var(--r-tile)}:is(.wxNow,.wxDayTile,.wxStripDay):focus-visible{outline:2px solid var(--color-border-focus);outline-offset:2px}.wxStrip{position:relative;flex:1;display:flex}.wxStripDays{flex:1;display:grid;grid-template-columns:repeat(6,minmax(0,1fr))}.wxStripDay{display:flex;flex-direction:column;align-items:center;justify-content:space-between;gap:var(--inset);min-width:0;padding:var(--inset) 0;border-radius:var(--r-tile);cursor:pointer}@media (hover:hover){.wxStripDay:hover{background:var(--color-state-hover)}}.wxStripGap{align-self:stretch;height:90px}.wxStripDay .wxTemps{display:grid;justify-items:center;gap:8px}.wxStripSky{position:absolute;left:0;top:calc(var(--inset) * 2 + var(--lh-tile-detail));width:100%;height:90px;border-radius:var(--r-inner);pointer-events:none;image-rendering:pixelated}.wxStripDay .wxDayName,.wxStripDay .wxHigh,.wxGraphDays{font-family:var(--font-tile);font-size:var(--t-tile-detail);font-weight:var(--w-regular);line-height:var(--lh-tile-detail);letter-spacing:0}.wxStripDay .wxLow{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);color:var(--muted)}.wxBackdrop{z-index:170}.wxDialogCard{width:min(860px,100%);display:grid;gap:var(--inset)}.wxDialogHead{display:flex;align-items:center;justify-content:space-between;gap:var(--inset);padding-left:var(--inset)}.wxDialogHead .activityTitle{margin:0}.wxDialogClose{background:transparent}.wxGraph{display:grid;gap:8px;touch-action:pan-y;cursor:ew-resize;border-radius:var(--r-tile);user-select:none;-webkit-user-select:none}.wxGraph:focus{outline:none}.wxGraph:focus-visible{outline:2px solid var(--color-border-focus);outline-offset:4px}.wxGraphDays{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));text-align:center;color:var(--muted)}.wxGraphSky{position:relative;height:200px;border-radius:var(--r-tile);overflow:hidden;background:var(--tile)}.wxGraphSky>canvas{display:block;width:100%;height:100%;image-rendering:pixelated}.wxGraphLine{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible;pointer-events:none}.wxLineLabel{font-family:var(--font-tile);font-size:14px;font-weight:var(--w-semibold);text-anchor:middle;paint-order:stroke;stroke-width:3px;stroke-linejoin:round}@media (max-width:620px){.wxGraphSky{height:160px}.wxDialogNow{flex-wrap:wrap}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}.moveActions.seg{background:transparent;transition:background .18s ease}.moveActions.seg:focus-within{background:var(--seg-bg)}@media (hover:hover){.moveActions.seg:hover{background:var(--seg-bg)}}.moveActions .editBtn,.moveActions .editBtn:hover{background:transparent}.moveActions .removeBtn,.moveActions .removeBtn:hover{background:transparent;color:var(--text)}@media (hover:hover){.moveActions .editBtn:hover{background:var(--color-state-hover)}.moveActions .removeBtn:hover{background:var(--danger-fill);color:var(--color-text-on-danger)}}.moveActions .removeBtn:active{background:linear-gradient(var(--color-state-pressed-on-bright),var(--color-state-pressed-on-bright)),var(--danger-fill);color:var(--color-text-on-danger)}.moveActions .removeBtn.holding{background:var(--danger-bg);color:var(--color-text-on-danger)}.moveActions .removeFill{background:var(--danger-fill)}.activityIcon{color:var(--muted)}.activityRowIcon,.timeIcon,.nextIcon,.upcomingIcon{color:var(--text)}.wxTempBlock{padding-top:6px}.motionRangeWrap input[type=range]{accent-color:var(--bright);background:transparent}', zp = '#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityCard{min-height:0}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent)}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)){transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .weatherCard{padding:20px}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}#homeView .weatherCard .activityRow .wxIcon{width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner)}@media (max-width:620px){#homeView .weatherCard{padding:var(--inset)}#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--muted)}#app.house.light{--hc-icon:#e6e6e6}#app.house #homeView .activityRowIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}:is(.tfCard .activityRow,.tfOpenHead) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}#homeView section.tfCard.open:has(>.activityHeader){padding:var(--inset)}.tfCard.open>.activityHeader{display:none}.tfOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.tfOpenHead{display:flex;align-items:center;gap:12px}.tfOpenHead>div:nth-child(2){flex:1;min-width:0}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house .moveSection{display:none}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .settingsSelect{flex:none;width:220px}@media (max-width:620px){#housePane .settingsSelect{width:150px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}#app.house #homeView .grid>:is(#movementLabel,.activityCard,.insightCard,.feelSection){display:none}#app.house .checkinTab,#app.houseBento #weatherCard{display:none}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}#housePane .themeChoice,.tfBoardMenu .tfHeightTabs,.wb .wbSegments{gap:4px;padding:4px;border:0;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}#housePane .themeChoice{display:inline-flex;flex-wrap:nowrap;max-width:100%}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button){height:38px;min-width:0;min-height:0;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile)!important;white-space:nowrap;cursor:pointer}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button):hover:not(:disabled):not([aria-pressed=true]):not([aria-checked=true]):not(.active){background:transparent;color:var(--text)}:is(#housePane .themeChoice :is(.wxLayoutBtn[aria-pressed=true],.themeBtn.active),.tfBoardMenu .tfHeightTabs button[aria-checked=true],.wb .wbSegments button[aria-pressed=true]){background:var(--bright);color:var(--on-bright)}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .workoutPanelTop>div{min-width:0}.tfAreaPanel .sourceTag{margin-right:4px}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:620px){.tfMoreBackdrop{place-items:end stretch;padding:0}.tfMorePair{width:100%;max-height:85vh}.tfMore{width:100%;border-radius:var(--r-card) var(--r-card) 0 0}}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard){container-type:inline-size}#homeView .card:is(.activityCard,.insightCard,.tfCard,.weatherCard) .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}@media (min-width:1200px){#homeView .grid>.card:is(.activityCard,.insightCard){grid-column:span 6}#homeView .grid>.weatherCard{grid-column:span 6}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .workoutPanel.tfAreaPanel{padding:18px 18px 10px}.tfAreaPanel .workoutPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{max-width:100%;overflow:hidden;color:var(--muted);font:400 16px/1.2 var(--font);white-space:nowrap;text-overflow:ellipsis}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));min-height:calc(2 * var(--tile-min));align-content:end}.tfABig{max-width:100%}.panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 16px)}#app.tfBoard .tfAreas[data-rows="5"] .tfACMain{position:absolute;left:10px;right:10px;bottom:170.3px;max-width:none;text-align:center}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .workoutGallery,#app.tfBoard .tfAreas .workoutPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;display:grid;grid-auto-rows:60px;gap:16px;pointer-events:none}.tfBoardCells i{border-radius:var(--r-inner);background:color-mix(in srgb,var(--text) 7%,transparent)}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}.tfBoardMenu .tfHeightTabs button{justify-content:center}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}.tfWidth{padding-top:0}.tfWidth .tfHeightTabs{grid-template-columns:repeat(3,auto)}.tfBoardMenu .tfWidth .tfHeightTabs button{white-space:nowrap}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:var(--fill-row,60px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:var(--fill-row,60px);box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"]{padding:10px;border-radius:24px}.tfRoomTile{cursor:pointer}.tfRoomTile .tfRoomIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomInline,.tfRoomSub{display:none}.tfRoomReading{display:flex;flex-direction:column;gap:4px;min-width:0}.tfRoomBig{overflow:hidden;color:var(--text);font:500 46px/46px var(--font-tile);letter-spacing:-.92px;white-space:nowrap;text-overflow:ellipsis}.tfRoomSub{overflow:hidden;color:var(--muted);font:400 16px/19px var(--font);white-space:nowrap;text-overflow:ellipsis}.tfRoomDevices{display:flex;gap:12px}.tfRoomDevices .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDevices .tfIcon.on[data-light]{background:var(--light);color:var(--light-ink)}#app.tfBoard .tfRoomTile[data-rows="1"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-rows="1"] :is(.tfRoomReading,.tfRoomDevices),#app.tfBoard .tfRoomTile[data-rows="2"] .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfActionHead .activityRowMeta{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfRoomSub{display:block}#app.tfBoard .tfRoomTile[data-rows="4"] .tfRoomBig{font-size:52px;line-height:52px;letter-spacing:-1.92px}#app.tfBoard .tfRoomTile[data-rows="5"] .tfRoomBig{font-size:64px;line-height:64px;letter-spacing:-1.92px}.tfRoomHeads{display:none;gap:12px 16px}.tfRoomDev{display:flex;align-items:center;gap:12px;min-width:0;padding:0;border:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfRoomDev .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomDev .tfIcon.on[data-light]{background:var(--light);color:var(--light-ink)}.tfRoomDevName{display:flex;flex-direction:column;min-width:0}.tfRoomDevName>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]){flex-direction:row;align-items:center;gap:12px}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"])>.tfActionHead{flex:1;margin-bottom:0}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]) .tfRoomDevices{display:flex}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-cols="2"]):not([data-rows="1"]) .tfRoomHeads{grid-template-columns:repeat(4,minmax(0,1fr))}#app.tfBoard .tfRoomTile[data-cols="2"][data-rows="2"] .tfRoomDev:nth-child(n+3){display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]) .tfRoomReading{display:none}#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbWx.wbS90{width:100px;height:100px;border-radius:31px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbDeg{font-size:80px;line-height:80px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbUnit{font-size:30px;line-height:38px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbWeather{flex-direction:row;align-items:center;gap:16px}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNow{flex:none}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNextHours{display:flex;flex:1 1 0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbWeather{justify-content:center;padding-top:0;padding-bottom:0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) :is(.wbNow,.wbSummary){display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbColumns{display:flex;flex:none;height:185px}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsDay{display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsNow{display:inline}#app.tfBoard .tfDash-wx[data-narrow] .wbCard.wbWeather{gap:12px;padding:18px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbWx.wbS90{width:64px;height:64px;border-radius:20px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbDeg{font-size:46px;line-height:46px;letter-spacing:-.92px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbUnit{font-size:20px;line-height:26px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-narrow] .wbHalves{display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="3"] .wbNextHours{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow] .wbHour:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;flex:none;height:auto;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumn:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:0}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn{justify-content:flex-start;gap:8px;padding:12px 0 16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn .wbWx{width:40px;height:40px;border-radius:16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbTemps{gap:4px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .workoutPanel.tfAreaPanel{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded{display:grid;grid-template-columns:40px minmax(0,1fr);gap:0 12px;align-content:center}#app.tfBoard .tfAreas[data-rows="1"] :is(.panelExpanded>.workoutPanelTop,.tfACTop){display:contents}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] .tfATitle .tfAName{font-size:14px;line-height:20px;height:auto}#app.tfBoard .tfAreas[data-rows="1"] .tfABig{margin:0;flex-direction:row}#app.tfBoard .tfAreas[data-rows="1"] .tfABigMain{font-size:14px;line-height:18px;letter-spacing:0}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigUnit){font-size:14px}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigSub,.tfATiles,.tfACTiles,.sourceTag){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"]) .tfABig{display:none}#app.tfBoard .tfAreas[data-rows="4"] .tfABig{flex:none;margin-top:auto;margin-bottom:auto}#app.tfBoard .tfAreas[data-rows="4"] .tfATiles{margin-top:0}#app.tfBoard .tfAreas[data-rows="4"] .tfABigMain{font-size:52px}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded{row-gap:12px}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"],[data-rows="4"]) .tfATiles{margin-top:auto}#app.tfBoard .tfAreas[data-rows="2"] .tfATile:nth-child(n+3),#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfATile:nth-child(n+5){display:none}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:360px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-40px;display:grid;place-items:center;width:40px;height:56px;min-height:0;padding:0;border:0;border-radius:16px 0 0 16px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(360px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.light .tfBar i{box-shadow:inset -2px 0 0 var(--text)}#app.house :is(.settingsSelect,.addInput){border:1px solid var(--muted)}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}', Vp = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);opacity:.14}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:20px minmax(0,1fr) 18px;grid-template-areas:". sun" "y plot" ". x";column-gap:6px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:8px 14px 6px 8px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbAsNow{display:none}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbNextHours{display:none;justify-content:space-between;align-items:center;gap:8px;min-width:0}.wbHour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}.wbHourTime{color:var(--muted);font:400 14px/20px var(--font);white-space:nowrap}.wbHourTemp{font:400 18px/20px var(--font-tile);white-space:nowrap}.wbHour .wbWx.wbS40{width:40px;height:40px;border-radius:16px}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbSummary{display:none}.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumns{display:none}.wbHalves{display:grid}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbCompareBars{display:block;width:100%;height:100%;min-height:0}.wbAvgValue{fill:var(--muted);font-size:10px;text-anchor:middle}.wbAvgValue.wbToday{fill:var(--text);font-size:12px;font-weight:600}.wbAvgBar{fill:var(--muted);opacity:.45}.wbAvgBar.wbToday{fill:var(--primary);opacity:1}.wbAvgDay{fill:var(--muted);font-size:11px;text-anchor:middle}.wbAvgDay.wbToday{fill:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}`, Gp = `<main id="app"><div class="shell">
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
`, rn = {
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
}, on = (n) => n < 0 ? 0 : n > 1 ? 1 : n, pc = (n, d, o) => n + (d - n) * o, Wd = (n) => {
  const d = String(n || "#000000").trim().replace("#", ""), o = d.length === 3 ? d.split("").map((c) => c + c).join("") : d;
  return [0, 2, 4].map((c) => parseInt(o.slice(c, c + 2), 16) || 0);
}, Up = (n) => "#" + n.map((d) => Math.round(Math.max(0, Math.min(255, d))).toString(16).padStart(2, "0")).join(""), uc = {}, ta = (n, d, o) => {
  const c = n + d + o;
  return uc[c] || (uc[c] = Up(Wd(n).map((m, b) => m + (Wd(d)[b] - m) * o)));
}, fc = {}, Fl = (n) => fc[n] || (fc[n] = Wd(n)), yd = (n, d, o, c) => (m) => {
  if (m <= 0) return 0;
  if (m >= 1) return 1;
  let b = 0, w = 1, L = m;
  for (let y = 0; y < 18; y++)
    L = (b + w) / 2, 3 * (1 - L) * (1 - L) * L * n + 3 * (1 - L) * L * L * o + L * L * L < m ? b = L : w = L;
  return 3 * (1 - L) * (1 - L) * L * d + 3 * (1 - L) * L * L * c + L * L * L;
}, Yp = { std: yd(0.2, 0, 0, 1), acc: yd(0.3, 0, 1, 1), dec: yd(0, 0, 0, 1) };
function Ul(n, d) {
  const o = String(n || "");
  return (o === "sunny" || o === "clear-night" ? "clear" : o === "partlycloudy" ? "partly" : o === "fog" ? "fog" : o === "lightning" || o === "lightning-rainy" ? "storm" : o === "snowy" || o === "snowy-rainy" ? "snow" : o === "rainy" || o === "pouring" || o === "hail" ? "rain" : "cloudy") + "/" + (o === "clear-night" || d ? "night" : "day");
}
function sp(n) {
  const d = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return d.partly = [ta(d.clear[0], d.cloudy[0], 0.12), ta(d.clear[1], d.cloudy[1], 0.12)], d.storm = [ta(d.rain[0], "#000000", 0.22), ta(d.rain[1], "#000000", 0.22)], d;
}
const qd = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], jd = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], zd = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function Vd(n, d = rn) {
  const o = { ...rn, ...d }, c = sp(o), m = String(n).split("/"), b = c[m[0]] ? m[0] : "clear", w = m[1] === "night", L = c[b][w ? 1 : 0], y = {
    night: w,
    clearness: b === "clear" ? 1 : b === "partly" ? 0.7 : 0.25,
    sky: L,
    skyStops: [L],
    skyT: 0,
    sun: { x: 45, y: w ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: w ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: w ? 1 : 0 },
    stars: qd.map(() => ({ o: 0 })),
    rain: jd.map(() => ({ o: 0, dy: -16 })),
    snow: zd.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, R = (vt) => qd.map(() => ({ o: vt }));
  return b === "clear" ? w ? (y.moon.o = 1, y.stars = R(1)) : y.sun.o = 1 : b === "partly" ? (y.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: w ? 1 : 0 }, w ? (y.moon = { x: 34, y: 33, d: 48, o: 1 }, y.stars = R(0.7)) : y.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : b === "cloudy" || b === "fog" ? (y.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: w ? 1 : 0 }, w ? y.moon = { x: 40, y: 36, d: 40, o: 0 } : y.sun = { x: 40, y: 36, r: 20, o: 0 }) : (y.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, w ? y.moon = { x: 38, y: 28, d: 36, o: 0 } : y.sun = { x: 38, y: 28, r: 18, o: 0 }, b === "snow" ? y.snow = zd.map(() => ({ o: 1, dy: 0 })) : y.rain = jd.map((vt, st) => ({ o: b === "storm" && st === 1 ? 0 : 1, dy: 0 })), b === "storm" && (y.bolt = { o: 1, dy: 0 })), y;
}
const hc = {
  cloud: { enter: [0, 0.55, "dec"], leave: [0.25, 0.8, "acc"], stay: [0.1, 0.75, "std"] },
  body: { enter: [0.35, 0.9, "dec"], leave: [0.15, 0.65, "acc"], stay: [0.1, 0.75, "std"] },
  fx: { enter: [0.55, 1, "dec"], leave: [0, 0.35, "acc"], stay: [0.1, 0.75, "std"] },
  sky: [0.1, 0.8, "std"]
};
function Zp(n, d, o, c = rn, m = !1) {
  const b = { ...rn, ...c }, w = (Y, X) => Y > 0.01 && X > 0.01 ? "stay" : Y > 0.01 ? "leave" : X > 0.01 ? "enter" : "none", L = (Y, X, ot, K) => {
    const U = Y[0] + X * K, W = Y[1] - (ot - 1 - X) * K;
    return Yp[Y[2]](on((o - U) / Math.max(1e-3, W - U)));
  }, y = (Y, X, ot, K = 0, U = 1, W = 0) => {
    const ut = w(Y.o, X.o);
    if (ut === "none") return { ...X, o: 0 };
    const et = L(hc[ot][ut], K, U, W), ft = {};
    for (const tt in X) ft[tt] = m && ut !== "stay" && tt !== "o" ? ut === "leave" ? Y[tt] : X[tt] : pc(Y[tt], X[tt], et);
    return ft;
  }, R = L(hc.sky, 0, 1, 0);
  let vt, st;
  if (n.night !== d.night) {
    const Y = Math.min(n.clearness, d.clearness), X = ta(ta(n.sky, d.sky, 0.5), b.dusk, 0.6 * Y);
    vt = R < 0.5 ? ta(n.sky, X, R * 2) : ta(X, d.sky, R * 2 - 1), st = Y > 0.5 ? [n.sky, b.dusk, d.sky] : [n.sky, d.sky];
  } else
    vt = ta(n.sky, d.sky, R), st = [n.sky, d.sky];
  return {
    night: o < 0.5 ? n.night : d.night,
    clearness: pc(n.clearness, d.clearness, o),
    sky: vt,
    skyStops: st,
    skyT: R,
    sun: y(n.sun, d.sun, "body"),
    moon: y(n.moon, d.moon, "body"),
    cloud: y(n.cloud, d.cloud, "cloud"),
    stars: d.stars.map((Y, X) => y(n.stars[X], Y, "fx", X, d.stars.length, 0.05)),
    rain: d.rain.map((Y, X) => y(n.rain[X], Y, "fx", X, d.rain.length, 0.05)),
    snow: d.snow.map((Y, X) => y(n.snow[X], Y, "fx", X, d.snow.length, 0.05)),
    bolt: y(n.bolt, d.bolt, "fx")
  };
}
const Kp = [
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
], nn = (n, d) => (Kp[(d & 7) * 8 + (n & 7)] + 0.5) / 64, $p = 0, Yd = 1, Zd = 2, Kd = 3, $d = 4, an = 5, hs = 6, Gi = 7, Xd = 8, ql = (n, d) => d <= 0.6665 && ((n - 0.5) * (n - 0.5) + (d - 0.2877) * (d - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (d - 0.416) * (d - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (d - 0.458) * (d - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && d >= 0.416), Xp = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], Jp = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((n) => [n[0] * 13 / 11, n[1] * 28 / 24]), lp = (n, d, o) => {
  let c = !1;
  for (let m = 0, b = n.length - 1; m < n.length; b = m++) {
    const w = n[m], L = n[b];
    w[1] > o != L[1] > o && d < (L[0] - w[0]) * (o - w[1]) / (L[1] - w[1]) + w[0] && (c = !c);
  }
  return c;
};
function dp(n, { size: d = 90, px: o = 2, oneBit: c = !1, colors: m = rn, ink: b = "#26221e", paper: w = "#fbf9f6", clock: L = 0, idle: y = !1 } = {}) {
  const R = { ...rn, ...m }, vt = Math.sin, st = Math.PI * 2, Y = Math.max(6, Math.round(d / o)), X = Y / 90, ot = y ? Math.floor(L / 100) * 100 : 0, K = y ? vt(st * ot / 3600) : 0, U = y ? 1.8 * vt(st * ot / 6400) : 0, W = y ? 0.9 * vt(st * ot / 4100) : 0, ut = y ? 0.8 * vt(st * ot / 5200) : 0, et = ot / 3400 % 1, ft = y && n.bolt.o > 0.5 && (et < 0.04 || et > 0.08 && et < 0.11), tt = new Array(Y * Y), _ = new Uint8Array(Y * Y), P = (M, E, A, I, mt) => {
    A == null || M < 0 || E < 0 || M >= Y || E >= Y || (I >= 1 || I > nn(M + 5, E + 3)) && (tt[E * Y + M] = A, _[E * Y + M] = mt);
  }, lt = (M, E, A, I) => {
    for (let mt = Math.max(0, Math.floor(E - A) - 1); mt <= Math.min(Y - 1, E + A + 1); mt++) for (let j = Math.max(0, Math.floor(M - A) - 1); j <= Math.min(Y - 1, M + A + 1); j++) I(j, mt, j + 0.5 - M, mt + 0.5 - E);
  }, _t = n.skyStops || [n.sky], H = n.skyT || 0;
  for (let M = 0; M < Y; M++) {
    const E = n.night ? on(1 - (M + 0.5) / (Y * 0.7)) * 0.85 : on(((M + 0.5) / Y - 0.35) / 0.65) * 0.85;
    for (let A = 0; A < Y; A++) {
      let I = _t[0];
      if (_t.length > 1) {
        const mt = H * (_t.length - 1), j = Math.min(_t.length - 2, Math.floor(mt));
        I = mt - j > nn(A, M) ? _t[j + 1] : _t[j];
      }
      E > nn(A + 2, M + 5) && (I = n.night ? ta(I, "#000000", 0.28) : ta(I, "#ffffff", 0.2)), tt[M * Y + A] = ft ? ta(I, "#ffffff", 0.25) : I;
    }
  }
  if (n.sun.o > 0.01) {
    const M = n.sun.x * X, E = n.sun.y * X, A = Math.max(1, n.sun.r * X);
    if (y) {
      const I = A * (1.45 + 0.06 * K), mt = ta(R.sun, "#ffffff", 0.55);
      if (lt(M, E, I, (j, ct, gt, yt) => {
        const $t = Math.sqrt(gt * gt + yt * yt);
        $t > A && $t < I && P(j, ct, mt, 0.26 * (1 - ($t - A) / (I - A)) * n.sun.o, $p);
      }), n.sun.o > 0.5) {
        const j = Math.floor(ot / 500) % 2, ct = Math.max(1, A * 0.22);
        for (let gt = 0; gt < 8; gt++) if (gt % 2 === j) for (let yt = A + 1.5; yt < A + 1.5 + ct; yt += 0.7) P(Math.floor(M + Math.cos(gt * Math.PI / 4) * yt), Math.floor(E + Math.sin(gt * Math.PI / 4) * yt), R.sun, n.sun.o, Xd);
      }
    }
    lt(M, E, A, (I, mt, j, ct) => {
      if (j * j + ct * ct > A * A) return;
      const gt = ((j * 0.643 + ct * 0.766) / A + 1) / 2;
      P(I, mt, on((gt - 0.62) / 0.38) > nn(I, mt) ? R.sunEdge : R.sun, n.sun.o, Yd);
    });
  }
  if (qd.forEach((M, E) => {
    const A = n.stars[E].o;
    if (A < 0.01) return;
    const I = Math.floor(M[0] * X), mt = Math.floor(M[1] * X), j = y ? (Math.floor(ot / 300) + E * 3) % 6 : 0;
    if (j === 5) return;
    const ct = Math.round(M[2] * X * (j === 4 ? 0.3 : j < 2 ? 1 : 0.6));
    P(I, mt, R.star, A, Gi);
    for (let gt = 1; gt <= ct; gt++) {
      const yt = gt === ct && ct > 1 ? ta(R.star, n.sky, 0.5) : R.star;
      P(I - gt, mt, yt, A, Gi), P(I + gt, mt, yt, A, Gi), P(I, mt - gt, yt, A, Gi), P(I, mt + gt, yt, A, Gi);
    }
  }), n.moon.o > 0.01) {
    const M = Math.max(1.5, n.moon.d * X * 0.37), E = n.moon.x * X, A = n.moon.y * X + (y && ut > 0.4 ? -1 : 0), I = E + 0.547 * M, mt = A - 0.503 * M, j = 0.82 * M, ct = ta(R.moon, "#ffffff", 0.6);
    lt(E, A, M, (gt, yt, $t, le) => {
      if ($t * $t + le * le > M * M) return;
      const Ae = gt + 0.5 - I, Ca = yt + 0.5 - mt;
      Ae * Ae + Ca * Ca <= j * j || P(gt, yt, on((le + M) / (2 * M) * 1.1 - 0.1) > nn(gt, yt) ? R.moon : ct, n.moon.o, Zd);
    });
  }
  const It = Math.max(2, Math.round(15.65 * X)), G = Math.max(1, Math.round(5.87 * X * 0.5));
  jd.forEach((M, E) => {
    const A = n.rain[E];
    let I = A.dy, mt = A.o;
    if (mt < 0.01) return;
    if (y) {
      const gt = (ot / 950 + E / 3) % 1;
      I += -5 + gt * 14, mt *= gt < 0.18 ? gt / 0.18 : gt > 0.72 ? (1 - gt) / 0.28 : 1;
    }
    const j = (M[0] + 3 + U) * X, ct = (M[1] + I) * X;
    for (let gt = 0; gt < It; gt++) for (let yt = 0; yt < G; yt++) P(Math.floor(j - 0.208 * gt) + yt, Math.floor(ct) + gt, R.rain, mt, $d);
  });
  const Wt = Math.max(0, Math.round(7.34 * X / 2.6));
  if (zd.forEach((M, E) => {
    const A = n.snow[E];
    let I = A.dy, mt = 0, j = A.o;
    if (j < 0.01) return;
    if (y) {
      const yt = (ot / 3200 + E / 5) % 1;
      I += -6 + yt * 14, mt = 1.5 * vt(st * (yt * 1.5 + E / 5)), j *= yt < 0.2 ? yt / 0.2 : yt > 0.75 ? (1 - yt) / 0.25 : 1;
    }
    const ct = Math.floor((M[0] + 3.67 + mt + U) * X), gt = Math.floor((M[1] + 3.67 + I) * X);
    P(ct, gt, R.snow, j, an);
    for (let yt = 1; yt <= Wt; yt++)
      P(ct - yt, gt, R.snow, j, an), P(ct + yt, gt, R.snow, j, an), P(ct, gt - yt, R.snow, j, an), P(ct, gt + yt, R.snow, j, an), Wt > 1 && yt < Wt && (P(ct - yt, gt - yt, R.snow, j, an), P(ct + yt, gt - yt, R.snow, j, an), P(ct - yt, gt + yt, R.snow, j, an), P(ct + yt, gt + yt, R.snow, j, an));
  }), n.bolt.o > 0.01)
    if (Y >= 30) {
      const M = 39 + U, E = 50 + n.bolt.dy;
      for (let A = Math.floor(E * X); A <= (E + 28) * X; A++) for (let I = Math.floor(M * X); I <= (M + 13) * X; I++)
        lp(Jp, (I + 0.5) / X - M, (A + 0.5) / X - E) && P(I, A, R.sun, n.bolt.o, hs);
    } else {
      const M = Y / 18, E = 7, A = 10 + Math.round(n.bolt.dy * 0.2);
      Xp.forEach((I, mt) => I.split("").forEach((j, ct) => {
        if (j !== "#") return;
        const gt = Math.floor((E + ct) * M), yt = Math.floor((A + mt) * M);
        for (let $t = yt; $t < Math.max(yt + 1, Math.floor((A + mt + 1) * M)); $t++) for (let le = gt; le < Math.max(gt + 1, Math.floor((E + ct + 1) * M)); le++) P(le, $t, R.sun, n.bolt.o, hs);
      }));
    }
  if (n.cloud.o > 0.01) {
    const M = Math.max(3, n.cloud.w * X), E = M * 0.6665, A = (n.cloud.x + U) * X - M / 2, I = (n.cloud.y + W) * X - E / 2, mt = ta(R.cloudDay, R.cloudNight, Math.round(n.cloud.f * 4) / 4), j = ta(mt, "#000000", 0.16);
    for (let ct = Math.max(0, Math.floor(I) - 1); ct <= Math.min(Y - 1, I + E + 1); ct++) for (let gt = Math.max(0, Math.floor(A) - 1); gt <= Math.min(Y - 1, A + M + 1); gt++) {
      const yt = (gt + 0.5 - A) / M, $t = (ct + 0.5 - I) / M;
      ql(yt, $t) && P(gt, ct, !ql(yt, $t + 1 / M) || on(($t - 0.42) / 0.25) * 0.8 > nn(gt, ct) ? j : mt, n.cloud.o, Kd);
    }
  }
  return cp(tt, _, Y, Y, { oneBit: c, ink: b, paper: w, snowInk: !n.night });
}
function cp(n, d, o, c, { oneBit: m, ink: b, paper: w, snowInk: L }) {
  const y = new Uint8ClampedArray(o * c * 4), R = Fl(b), vt = Fl(w);
  for (let st = 0; st < c; st++) for (let Y = 0; Y < o; Y++) {
    const X = st * o + Y, ot = d[X];
    if (n[X] == null) continue;
    let K = Fl(n[X]);
    if (m) {
      let U;
      ot === $d || ot === Xd ? U = !0 : ot === an ? U = L : ot === Gi || ot === hs ? U = !1 : U = Math.round((0.2126 * K[0] + 0.7152 * K[1] + 0.0722 * K[2]) / 255 * 4) / 4 <= nn(Y, st), (ot === Yd || ot === Zd || ot === Kd || ot === hs) && (Y > 0 && d[X - 1] !== ot || Y < o - 1 && d[X + 1] !== ot || st > 0 && d[X - o] !== ot || st < c - 1 && d[X + o] !== ot) && (U = !0), K = U ? R : vt;
    }
    y[X * 4] = K[0], y[X * 4 + 1] = K[1], y[X * 4 + 2] = K[2], y[X * 4 + 3] = 255;
  }
  return { w: o, h: c, data: y };
}
const Qp = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, tu = (n) => Ul(n, !1).split("/")[0], kd = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let d = Math.imul(n ^ n >>> 15, 1 | n);
  return d = d + Math.imul(d ^ d >>> 7, 61 | d) ^ d, ((d ^ d >>> 14) >>> 0) / 4294967296;
}, eu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", au = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", nu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", ou = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", iu = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], ru = [".##", "##.", ".#.", "#.."];
function pp(n, { width: d, height: o, colors: c, wave: m = 0.38, soft: b = 6, glow: w = 0.6 }) {
  const L = { ...rn, dawn: "#e5a77e", ...c }, y = sp(L), R = d, vt = o, st = R / 6, Y = st / 2, X = Math.PI * 2, ot = n.length ? n : [{ cond: "cloudy", night: !1 }], K = [...Array(12)].map((et, ft) => {
    const tt = ot[Math.min(ft, ot.length - 1)], _ = tu(tt.cond), P = ft % 2 === 1;
    return { cond: tt.cond, k: _, night: P, sky: y[_][P ? 1 : 0], cover: Qp[_] };
  }), U = (et) => vt * (0.5 - m * Math.cos(X * (et / st - 0.25)));
  return { C: L, S: K, W: R, H: vt, cw: st, sw: Y, TAU: X, yb: U, side: (et, ft, tt) => {
    const _ = (et ? U(ft) - tt : tt - U(ft)) / Math.max(3, b * 1.4) + 0.5;
    return _ <= 0 ? 0 : _ >= 1 ? 1 : _;
  }, glowAt: (et) => {
    const ft = ((et / st - 0.25) % 1 + 1) % 1, tt = Math.max(0, Math.min(5, Math.round(et / st - 0.25))), _ = Math.max(0, Math.min(5, Math.round(et / st - 0.75))), P = 1 - (K[2 * tt].cover + K[2 * _ + 1].cover) / 2, lt = Math.sin(Math.PI * Math.min(1, Math.max(0, U(et) / vt)));
    return { c: ft < 0.5 ? L.dusk : L.dawn, a: w * (0.2 + 0.8 * P) * lt * lt };
  }, soft: b, tw: st * 0.3, sy: vt / 90 };
}
function up(n, { clock: d = 0, ambient: o = !1, seed: c = 1 }) {
  const { S: m, sw: b, side: w, C: L, TAU: y, sy: R } = n, vt = d, st = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  return m.forEach((Y, X) => {
    const ot = kd(c * 977 + X * 131 + 7), K = (X + 0.5) * b, U = Y.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[Y.k] : 0;
    for (let W = 0; W < U; W++) {
      const ut = K + (ot() - 0.5) * b * 1.6, et = (6 + ot() * 76) * R, ft = ot() < 0.35, tt = 1.8 + ot() * 1.6, _ = w(!0, ut, et) * (ft ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(y * vt / 2600 + W * 1.7 + X) : 1);
      _ >= 0.03 && st.stars.push({ x: ut, y: et, big: ft, size: tt, o: _ });
    }
    if (!Y.night && (Y.k === "clear" || Y.k === "partly")) {
      const W = K + (ot() - 0.5) * b * 0.3, ut = Math.min(15, b * 0.29);
      st.suns.push({ x: W, y: 32 * R, rad: ut, halo: ut * 2.8 * (o ? 1 + 0.07 * Math.sin(y * vt / 3600 + X) : 1) });
    }
    if (Y.night && (Y.k === "clear" || Y.k === "partly")) {
      const W = Math.min(0.78, b * 0.55 / 34), ut = K - 23 * W + (ot() - 0.5) * b * 0.2;
      st.moons.push({ x: ut + 23 * W, y: (4 + (o ? 0.8 * Math.sin(y * vt / 5200 + X) : 0)) * R + 23 * W, d: 46 * W });
    }
  }), m.forEach((Y, X) => {
    const ot = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[Y.k];
    if (!ot) return;
    const K = kd(c * 577 + X * 71 + 3), U = (X + 0.5) * b, W = Y.k === "rain" || Y.k === "storm" || Y.night ? L.cloudNight : L.cloudDay, ut = Y.night ? 0.82 : Y.k === "storm" ? 0.75 : 1;
    for (let et = 0; et < ot; et++) {
      const ft = b / 46 * (Y.k === "partly" ? 0.85 : 0.75 + K() * 0.55), tt = U + (Y.k === "partly" ? b * 0.12 : (K() - 0.5) * b * 1.05), _ = (Y.k === "partly" ? 40 : 6 + K() * 26) * R, P = o ? 2.5 * Math.sin(y * vt / 9e3 + X * 1.3 + et * 2.1) : 0, lt = o ? 0.9 * Math.sin(y * vt / 6100 + X + et) : 0;
      st.clouds.push({ x: tt - 23 * ft + P, y: _ - 15.33 * ft + lt, w: 46 * ft, h: 30.66 * ft, fill: W, o: ut * (ot > 1 && et === 0 ? 0.85 : 1) });
    }
  }), m.forEach((Y, X) => {
    const ot = kd(c * 313 + X * 29 + 11), K = (X + 0.5) * b, U = Y.cond === "pouring" ? 16 : Y.cond === "rainy" || Y.cond === "hail" ? 9 : Y.cond === "lightning-rainy" ? 12 : Y.cond === "snowy-rainy" ? 5 : 0;
    for (let ut = 0; ut < U; ut++) {
      let et = K + (ot() - 0.5) * b * 1.05, ft = 44 + ot() * 36, tt = 1;
      if (o) {
        const P = ((ft - 44 + vt * 0.04) % 36 + 36) % 36;
        et -= 0.21 * (P - (ft - 44)), ft = 44 + P, tt = Math.min(1, P / 6, (36 - P) / 6);
      }
      ft *= R;
      const _ = w(Y.night, et, ft) * tt;
      _ >= 0.05 && st.drops.push({ x: et, y: ft, o: _ });
    }
    const W = Y.cond === "snowy" ? 11 : Y.cond === "snowy-rainy" ? 6 : 0;
    for (let ut = 0; ut < W; ut++) {
      let et = K + (ot() - 0.5) * b * 1.05, ft = 40 + ot() * 44, tt = 1;
      if (o) {
        const P = ((ft - 40 + vt * 9e-3) % 44 + 44) % 44;
        ft = 40 + P, et += 1.6 * Math.sin(y * vt / 2800 + ut * 1.9 + X), tt = Math.min(1, P / 6, (44 - P) / 6);
      }
      ft *= R;
      const _ = w(Y.night, et, ft) * tt;
      _ >= 0.05 && st.flakes.push({ x: et, y: ft, o: _ });
    }
    if (Y.k === "fog") {
      const ut = Y.night ? "#c8ccd6" : "#ffffff", et = Y.night ? 0.28 : 0.62, ft = o ? 4 * Math.sin(y * vt / 8e3 + X) : 0;
      for (let tt = 0; tt < 4; tt++) st.fogs.push({ x: K - b * 0.75 + tt % 2 * b * 0.18 + (tt % 2 ? ft : -ft), y: (30 + tt * 13) * R, w: b * 1.3, c: ut, a: et });
    }
    if (Y.k === "storm") {
      const ut = (vt / 3400 + X * 0.37) % 1;
      st.bolts.push({ x: K + (ot() - 0.5) * b * 0.3 - 5, y: 36 * R, o: o && !(ut < 0.05 || ut > 0.09 && ut < 0.12) ? 0.8 : 1 });
    }
  }), st;
}
function su(n, d, o, c, m, b, w, L) {
  const { S: y, C: R, cw: vt, yb: st, glowAt: Y, soft: X, tw: ot, sy: K } = n, U = new Array(o * c), W = new Uint8Array(o * c), ut = new Uint8Array(o * c), et = (M, E, A, I, mt) => {
    A == null || M < 0 || E < 0 || M >= o || E >= c || (I >= 1 || I > nn(M + 5, E + 3)) && (U[E * o + M] = A, W[E * o + M] = mt);
  }, ft = (M, E, A, I) => {
    for (let mt = Math.max(0, Math.floor(E - A) - 1); mt <= Math.min(c - 1, E + A + 1); mt++) for (let j = Math.max(0, Math.floor(M - A) - 1); j <= Math.min(o - 1, M + A + 1); j++) I(j, mt, j + 0.5 - M, mt + 0.5 - E);
  }, tt = (M, E, A) => {
    for (let mt = 0; mt < M.length - 1; mt++) {
      const j = (mt + E) * vt;
      if (A < j - ot / 2) return [M[mt], M[mt], 0];
      if (A <= j + ot / 2) return [M[mt], M[mt + 1], (A - j + ot / 2) / ot];
    }
    const I = M[M.length - 1];
    return [I, I, 0];
  }, _ = y.filter((M) => !M.night).map((M) => M.sky), P = y.filter((M) => M.night).map((M) => M.sky), lt = X / b, _t = 16 * K / b;
  for (let M = 0; M < o; M++) {
    const E = (M + 0.5) * m, A = st(E) / b, I = tt(_, 0.75, E), mt = tt(P, 1.25, E), j = Y(E);
    for (let ct = 0; ct < c; ct++) {
      const gt = nn(M, ct), yt = ct + 0.5 - A, $t = (lt > 0.01 ? on(0.5 + yt / lt) : yt > 0 ? 1 : 0) > gt;
      let le = $t ? I[2] > gt ? I[1] : I[0] : mt[2] > gt ? mt[1] : mt[0];
      ($t ? on(((ct + 0.5) / c - 0.45) / 0.55) * 0.7 : on(1 - (ct + 0.5) / (c * 0.55)) * 0.7) > nn(M + 2, ct + 5) && (le = $t ? ta(le, "#ffffff", 0.18) : ta(le, "#000000", 0.25)), $t && yt >= 0 && yt < _t && j.a * 1.3 * (1 - yt / _t) > nn(M + 6, ct + 1) && (le = j.c), U[ct * o + M] = le, ut[ct * o + M] = $t ? 0 : 1;
    }
  }
  const H = ta(R.sun, "#ffffff", 0.55), It = ta(R.moon, "#ffffff", 0.6);
  d.stars.forEach((M) => {
    const E = Math.floor(M.x / m), A = Math.floor(M.y / b);
    if (E < 0 || A < 0 || E >= o || A >= c || !ut[A * o + E] || M.o < 0.15) return;
    const I = M.o > 0.45 ? R.star : ta(R.star, U[A * o + E], 0.5), mt = M.big && M.o > 0.6 ? Math.floor(M.size / m) : 0;
    et(E, A, I, 1, Gi);
    for (let j = 1; j <= mt; j++) [[E - j, A], [E + j, A], [E, A - j], [E, A + j]].forEach((ct) => {
      ct[0] >= 0 && ct[1] >= 0 && ct[0] < o && ct[1] < c && ut[ct[1] * o + ct[0]] && et(ct[0], ct[1], I, 1, Gi);
    });
  }), d.suns.forEach((M) => {
    const E = Math.max(1.5, M.rad / m), A = M.x / m, I = M.y / b, mt = M.halo / m * 0.85;
    if (ft(A, I, mt, (j, ct, gt, yt) => {
      const $t = Math.sqrt(gt * gt + yt * yt);
      $t > E && $t < mt && !ut[ct * o + j] && et(j, ct, H, 0.3 * (1 - ($t - E) / (mt - E)), 0);
    }), L) {
      const j = Math.floor(w / 500) % 2, ct = Math.max(1, E * 0.3);
      for (let gt = 0; gt < 8; gt++) if (gt % 2 === j) for (let yt = E + 1.2; yt < E + 1.2 + ct; yt += 0.7) et(Math.floor(A + Math.cos(gt * Math.PI / 4) * yt), Math.floor(I + Math.sin(gt * Math.PI / 4) * yt), R.sun, 1, Xd);
    }
    ft(A, I, E, (j, ct, gt, yt) => {
      gt * gt + yt * yt <= E * E && et(j, ct, on(((yt / E + 1) / 2 - 0.6) / 0.4) > nn(j, ct) ? R.sunEdge : R.sun, 1, Yd);
    });
  }), d.moons.forEach((M) => {
    const E = Math.max(1.5, M.d * 0.37 / m), A = M.x / m, I = M.y / b, mt = A + 0.547 * E, j = I - 0.503 * E, ct = 0.82 * E;
    ft(A, I, E, (gt, yt, $t, le) => {
      if ($t * $t + le * le > E * E) return;
      const Ae = gt + 0.5 - mt, Ca = yt + 0.5 - j;
      Ae * Ae + Ca * Ca > ct * ct && et(gt, yt, on((le + E) / (2 * E) * 1.1 - 0.1) > nn(gt, yt) ? R.moon : It, 1, Zd);
    });
  }), d.clouds.forEach((M) => {
    const E = Math.max(3, M.w / m), A = E * 0.6665, I = M.x / m, mt = M.y / b, j = ta(M.fill, "#000000", 0.16);
    for (let ct = Math.max(0, Math.floor(mt) - 1); ct <= Math.min(c - 1, mt + A + 1); ct++) for (let gt = Math.max(0, Math.floor(I) - 1); gt <= Math.min(o - 1, I + E + 1); gt++) {
      const yt = (gt + 0.5 - I) / E, $t = (ct + 0.5 - mt) / E;
      ql(yt, $t) && et(gt, ct, !ql(yt, $t + 1 / E) || on(($t - 0.42) / 0.25) * 0.8 > nn(gt, ct) ? j : M.fill, M.o, Kd);
    }
  }), d.fogs.forEach((M) => {
    const E = Math.floor(M.y / b), A = Math.max(E, Math.floor((M.y + 6 * K) / b) - 1), I = Math.floor(M.x / m), mt = Math.floor((M.x + M.w) / m);
    for (let j = E; j <= A; j++) for (let ct = I; ct <= mt; ct++) {
      const gt = (ct - I) / Math.max(1, mt - I);
      et(ct, j, M.c, M.a * (gt < 0.25 ? gt / 0.25 : gt > 0.75 ? (1 - gt) / 0.25 : 1), 0);
    }
  });
  const G = Math.max(2, Math.round(9 / b));
  d.drops.forEach((M) => {
    const E = M.x / m, A = Math.floor(M.y / b);
    for (let I = 0; I < G; I++) et(Math.floor(E - 0.208 * I * b / m), A + I, R.rain, M.o, $d);
  });
  const Wt = Math.max(0, Math.round(4.4 / m / 2.6));
  return d.flakes.forEach((M) => {
    const E = Math.floor(M.x / m), A = Math.floor(M.y / b);
    et(E, A, R.snow, M.o, an);
    for (let I = 1; I <= Wt; I++)
      et(E - I, A, R.snow, M.o, an), et(E + I, A, R.snow, M.o, an), et(E, A - I, R.snow, M.o, an), et(E, A + I, R.snow, M.o, an);
  }), d.bolts.forEach((M) => {
    if (m <= 3.5)
      for (let E = Math.floor(M.y / b); E <= (M.y + 24) / b; E++) for (let A = Math.floor(M.x / m); A <= (M.x + 11) / m; A++)
        lp(iu, (A + 0.5) * m - M.x, (E + 0.5) * b - M.y) && et(A, E, R.sun, 1, hs);
    else {
      const E = Math.round(M.x / m), A = Math.round(M.y / b);
      ru.forEach((I, mt) => I.split("").forEach((j, ct) => {
        j === "#" && et(E + ct, A + mt, R.sun, 1, hs);
      }));
    }
  }), { col: U, ids: W };
}
function lu(n, d) {
  const o = d.px, c = Math.max(6, Math.round(d.width / o)), m = Math.max(6, Math.round(d.height / o)), b = d.width / c, w = d.height / m, L = d.ambient ? Math.floor((d.clock || 0) / 100) * 100 : 0, y = (X) => {
    const ot = pp(X, d);
    return su(ot, up(ot, { clock: L, ambient: d.ambient, seed: d.seed }), c, m, b, w, L, d.ambient);
  }, R = y(n), vt = d.reveal == null ? 1 : on(d.reveal);
  let st = R.col, Y = R.ids;
  if (vt < 1) {
    const X = d.prev ? y(d.prev) : null, ot = vt * (c + 12);
    st = new Array(c * m), Y = new Uint8Array(c * m);
    for (let K = 0; K < c * m; K++) {
      const U = K % c, W = K / c | 0;
      (d.reduce ? vt : on((ot - U) / 12)) > nn(U, W) ? (st[K] = R.col[K], Y[K] = R.ids[K]) : X ? (st[K] = X.col[K], Y[K] = X.ids[K]) : (st[K] = null, Y[K] = 255);
    }
  }
  return cp(st, Y, c, m, { oneBit: d.oneBit, ink: d.ink, paper: d.paper, snowInk: !1 });
}
function du(n, d, o) {
  const c = o.width, m = o.height, b = o.reveal == null ? 1 : on(o.reveal), w = (Y, X) => {
    const ot = pp(X, o);
    cu(Y, ot, up(ot, o));
  };
  if (n.clearRect(0, 0, c, m), b >= 1) {
    w(n, d);
    return;
  }
  if (o.prev && w(n, o.prev), o.reduce) {
    n.save(), n.globalAlpha = b, w(n, d), n.restore();
    return;
  }
  const L = n.canvas, y = L.__wxOff || (L.__wxOff = document.createElement("canvas"));
  (y.width !== L.width || y.height !== L.height) && (y.width = L.width, y.height = L.height);
  const R = y.getContext("2d");
  R.setTransform(n.getTransform()), R.clearRect(0, 0, c, m), w(R, d);
  const vt = b * (c + 64) - 64, st = R.createLinearGradient(vt, 0, vt + 64, 0);
  st.addColorStop(0, "rgba(0,0,0,1)"), st.addColorStop(1, "rgba(0,0,0,0)"), R.globalCompositeOperation = "destination-in", R.fillStyle = st, R.fillRect(0, 0, c, m), R.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(y, 0, 0), n.restore();
}
function cu(n, d, o) {
  const { W: c, H: m, S: b, C: w, cw: L, yb: y, glowAt: R, soft: vt, tw: st, sy: Y } = d, X = (H, It) => {
    const G = Fl(H);
    return "rgba(" + G[0] + "," + G[1] + "," + G[2] + "," + Math.max(0, Math.min(1, It)).toFixed(3) + ")";
  }, ot = (H, It) => {
    const G = n.createLinearGradient(0, 0, c, 0);
    G.addColorStop(0, H[0]);
    for (let Wt = 0; Wt < H.length - 1; Wt++) {
      const M = (Wt + It) * L, E = (M - st / 2) / c, A = (M + st / 2) / c;
      E > 0 && E < 1 && G.addColorStop(E, H[Wt]), A > 0 && A < 1 && G.addColorStop(A, H[Wt + 1]);
    }
    return G.addColorStop(1, H[H.length - 1]), G;
  }, K = Math.max(24, Math.ceil(c / 4)), U = (H, It) => {
    n.beginPath();
    for (let G = 0; G <= K; G++) {
      const Wt = c * G / K, M = H == null ? 0 : y(Wt) + H;
      G ? n.lineTo(Wt, M) : n.moveTo(Wt, M);
    }
    for (let G = K; G >= 0; G--) {
      const Wt = c * G / K;
      n.lineTo(Wt, y(Wt) + It);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = ot(b.filter((H) => !H.night).map((H) => H.sky), 0.75), n.fillRect(0, 0, c, m);
  const W = n.createLinearGradient(0, 0, c, 0);
  for (let H = 0; H <= 64; H++) {
    const It = R(c * H / 64);
    W.addColorStop(H / 64, X(It.c, Math.min(1, It.a)));
  }
  n.fillStyle = W;
  for (let H = 0; H < 8; H++)
    n.globalAlpha = 1 - H / 8, U(H * 2 * Y, (H + 1) * 2 * Y);
  n.fillStyle = ot(b.filter((H) => H.night).map((H) => H.sky), 1.25);
  const ut = Math.max(0.5, vt), et = 6;
  n.globalAlpha = 1, U(null, -ut);
  for (let H = 0; H < et; H++)
    n.globalAlpha = 1 - (H + 0.5) / et, U(-ut + 2 * ut * H / et, -ut + 2 * ut * (H + 1) / et);
  n.globalAlpha = 1;
  const ft = new Path2D(nu), tt = new Path2D(au), _ = new Path2D(eu), P = new Path2D(ou);
  n.fillStyle = w.star, o.stars.forEach((H) => {
    n.globalAlpha = H.o, H.big ? (n.save(), n.translate(H.x, H.y), n.scale(H.size, H.size), n.fill(ft), n.restore()) : (n.beginPath(), n.arc(H.x, H.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const lt = ta(w.sun, "#ffffff", 0.55);
  o.suns.forEach((H) => {
    const It = n.createRadialGradient(H.x, H.y, 0, H.x, H.y, H.halo);
    It.addColorStop(0, X(lt, 0.42)), It.addColorStop(0.7, X(lt, 0)), n.fillStyle = It, n.beginPath(), n.arc(H.x, H.y, H.halo, 0, Math.PI * 2), n.fill();
    const G = n.createLinearGradient(0, H.y - H.rad, 0, H.y + H.rad);
    G.addColorStop(0.6, w.sun), G.addColorStop(1, w.sunEdge), n.fillStyle = G, n.beginPath(), n.arc(H.x, H.y, H.rad, 0, Math.PI * 2), n.fill();
  });
  const _t = ta(w.moon, "#ffffff", 0.6);
  o.moons.forEach((H) => {
    n.save(), n.translate(H.x - H.d / 2, H.y - H.d / 2), n.scale(H.d / 46, H.d / 46);
    const It = n.createLinearGradient(0, 6, 0, 40);
    It.addColorStop(0, _t), It.addColorStop(1, w.moon), n.fillStyle = It, n.fill(tt), n.restore();
  }), o.clouds.forEach((H) => {
    n.save(), n.globalAlpha = H.o, n.translate(H.x, H.y), n.scale(H.w / 46, H.h / 30.66), n.translate(-4, -9.67), n.fillStyle = H.fill, n.fill(_), n.restore();
  }), o.fogs.forEach((H) => {
    const It = n.createLinearGradient(H.x, 0, H.x + H.w, 0);
    It.addColorStop(0, X(H.c, 0)), It.addColorStop(0.25, X(H.c, H.a)), It.addColorStop(0.75, X(H.c, H.a)), It.addColorStop(1, X(H.c, 0)), n.fillStyle = It, n.fillRect(H.x, H.y, H.w, 6 * Y);
  }), n.fillStyle = w.rain, o.drops.forEach((H) => {
    n.save(), n.globalAlpha = H.o, n.translate(H.x, H.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = w.snow, o.flakes.forEach((H) => {
    n.globalAlpha = H.o, n.beginPath(), n.arc(H.x, H.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = w.sun, o.bolts.forEach((H) => {
    n.save(), n.globalAlpha = H.o, n.translate(H.x, H.y), n.fill(P), n.restore();
  }), n.restore();
}
function pu(n, d) {
  var oc, ic, rc, sc, lc, dc, cc;
  const o = (e) => n.getElementById(e), c = o("workoutView"), m = o("workoutNameInput");
  let b = !0;
  const w = o("homeClock");
  function L() {
    w && (w.textContent = new Intl.DateTimeFormat(void 0, { hour: "2-digit", minute: "2-digit" }).format(/* @__PURE__ */ new Date()));
  }
  L(), setInterval(L, 15e3);
  const y = o("createFlow"), R = o("createMovementsSlot"), vt = o("createTimingSlot"), st = o("createFinishSlot"), Y = o("movementStepSummary"), X = o("timingStepSummary"), ot = o("finishStepSummary"), K = o("continueToTiming"), U = o("continueToFinish"), W = o("finishMoveButton");
  let ut = !1, et = [];
  function ft(e) {
    !e || et.some((r) => r.node === e) || et.push({ node: e, parent: e.parentNode, next: e.nextSibling });
  }
  function tt(e, r) {
    e && (ft(e), r.appendChild(e));
  }
  function _() {
    [...et].reverse().forEach(({ node: e, parent: r, next: s }) => {
      r && (s && s.parentNode === r ? r.insertBefore(e, s) : r.appendChild(e));
    }), et = [];
  }
  function P(e) {
    n.querySelectorAll(".createStep").forEach((r) => {
      r.classList.toggle("active", r.dataset.createStep === e);
    }), e === "timing" && (ut = !0), lt();
  }
  function lt() {
    var it, ht;
    if (!St) return;
    Kt[we];
    const e = Qt.filter((rt) => !rt.hidden), r = e.filter((rt) => rt.kind !== "rest").length, s = e.filter((rt) => rt.kind === "rest").length;
    Y.textContent = r ? r + " movement" + (r === 1 ? "" : "s") + (s ? " · " + s + " rest" + (s === 1 ? "" : "s") : "") : "No movements yet";
    const p = r > 0, g = n.querySelector('[data-open-step="timing"]'), T = n.querySelector('[data-open-step="finish"]');
    g.disabled = !p, K.disabled = !p, X.textContent = p ? Gn(E.value) + " · " + Ye(A.value) + " movement · " + Ye(I.value) + " rest" : "Add a movement first", T.disabled = !(p && ut);
    const B = ((m == null ? void 0 : m.value) || "").trim(), q = [];
    (it = o("includeWarmupPreset")) != null && it.checked && q.push("warm-up"), (ht = o("includeCooldownPreset")) != null && ht.checked && q.push("cooldown"), ot.textContent = B ? B + (q.length ? " · " + q.join(" + ") : "") : q.length ? q.join(" + ") : "Name and optional extras";
  }
  function _t() {
    var Bt, te, Ot;
    y.hidden = !1, ut = !1;
    const e = n.querySelector(".editNameRow"), r = o("createMoveOptions"), s = n.querySelector(".timeTiles"), p = o("routineSummaryModal"), g = n.querySelector(".tempoRevealRow"), T = o("tempoExperiment"), B = (Bt = o("warmupList")) == null ? void 0 : Bt.closest("section"), q = o("movementCreatorLaunch"), it = o("movementCreator"), ht = (te = o("strengthList")) == null ? void 0 : te.closest("section"), rt = (Ot = o("cooldownList")) == null ? void 0 : Ot.closest("section");
    [r == null ? void 0 : r.querySelector(".createExtras"), B, q, it, ht, rt].forEach((Et) => Et && tt(Et, R)), [r, s, p, g, T].forEach((Et) => tt(Et, vt)), tt(e, st), P("movements"), lt();
  }
  function H() {
    _(), y.hidden = !0, n.querySelectorAll(".createStep").forEach((e) => e.classList.remove("active"));
  }
  n.querySelectorAll("[data-open-step]").forEach((e) => e.addEventListener("click", () => {
    e.disabled || P(e.dataset.openStep);
  })), K.addEventListener("click", () => {
    K.disabled || P("timing");
  }), U.addEventListener("click", () => P("finish")), W.addEventListener("click", () => o("saveWorkoutEdit").click());
  const It = { home: o("homeView"), workout: o("workoutView"), settings: o("settingsView") }, G = o("homeNav"), Wt = o("settingsNav");
  function M(e) {
    Object.entries(It).forEach(([r, s]) => s.classList.toggle("active", r === e)), G.classList.toggle("active", e === "home"), Wt.classList.toggle("active", e === "settings"), e === "home" && setTimeout(Lr, 400), e === "settings" && (requestAnimationFrame(() => Bi(n.querySelector(".tab.active"), !1)), Ni());
  }
  const E = o("totalTime"), A = o("workTime"), I = o("restTime"), mt = o("totalOut"), j = o("workOut"), ct = o("restOut"), gt = o("totalFill"), yt = o("workFill"), $t = o("restFill"), le = o("roundsInput"), Ae = o("roundsFill"), Ca = o("roundsOut"), Pa = o("totalLabel"), me = o("routineSummaryModal"), Xt = [
    { id: "standing-reach", name: "Standing reach", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "arm-circles", name: "Arm circles", group: "Warm-up", kind: "warmup", hidden: !1 },
    { id: "hip-hinge", name: "Hip hinge drill", group: "Warm-up", kind: "warmup", hidden: !1 }
  ];
  let Te = Xt.map((e) => ({ ...e })), Qt = [
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
  const Ma = [
    { id: "hip-flexor", name: "Hip flexor stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "chest-opener", name: "Chest opener", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "hamstring", name: "Hamstring stretch", group: "Cooldown", kind: "cooldown", hidden: !1 },
    { id: "slow-breathing", name: "Slow breathing", group: "Cooldown", kind: "cooldown", hidden: !1 }
  ];
  let Ea = Ma.map((e) => ({ ...e }));
  const xr = {
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
  }, de = Bo(d.data), Kt = de.profiles;
  let we = Kt[de.selected] ? de.selected : de.order.find((e) => Kt[e]) || "kettlebell";
  function Bo(e) {
    const r = e && typeof e == "object" ? JSON.parse(JSON.stringify(e)) : {}, s = r.profiles && Object.keys(r.profiles).length ? r.profiles : JSON.parse(JSON.stringify(xr)), p = (Array.isArray(r.order) ? r.order : Object.keys(s)).filter((g) => s[g]);
    return Object.keys(s).forEach((g) => {
      p.includes(g) || p.push(g);
    }), {
      v: 1,
      profiles: s,
      order: p,
      selected: r.selected || p[0],
      history: Array.isArray(r.history) ? r.history : [],
      checkins: (Array.isArray(r.checkins) ? r.checkins : yr(r.energy)).map(Ui),
      settings: { ...r.settings || {} }
    };
  }
  function yr(e) {
    if (!Array.isArray(e)) return [];
    const r = ["Drained", "Low", "Okay", "Good", "Energised", "Great"], s = [];
    return e.forEach((p) => {
      const g = new Date(p.at);
      if (isNaN(g)) return;
      const T = g.getFullYear() + "-" + String(g.getMonth() + 1).padStart(2, "0") + "-" + String(g.getDate()).padStart(2, "0"), B = g.getHours() < 14 ? "morning" : "evening";
      if (s.some((it) => it.date === T && it.slot === B)) return;
      const q = r.indexOf(p.value) + 1;
      q > 0 && s.push({ date: T, slot: B, mood: null, energy: q, at: p.at });
    }), s;
  }
  function Ui(e) {
    if (e.scale === 100) return e;
    const r = (s) => s == null ? null : Math.round((Number(s) - 1) / 5 * 100);
    return { ...e, mood: r(e.mood), energy: r(e.energy), scale: 100 };
  }
  function Ta() {
    St || (de.selected = we, de.order = de.order.filter((e) => Kt[e] && e !== ze), d.save(de));
  }
  function fe() {
    return de.settings;
  }
  function Oe(e) {
    const r = Kt[e];
    if (!r) return;
    we = e;
    const s = o("workoutNameInput");
    if (s && (s.value = r.name), E.value = r.total, A.value = r.work, I.value = r.rest, le.value = r.rounds || 1, r.customSequence) {
      const p = (r.sequence || []).map((T) => ({ ...T })), g = (T) => p.filter((B) => B.presetRole === T).map(({ presetRole: B, ...q }) => q);
      Te = (r.warmup || g("warmup")).map((T) => ({ ...T })), Ea = (r.cooldown || g("cooldown")).map((T) => ({ ...T })), Qt = p.filter((T) => !T.presetRole), Po(r.preset || "movement", !1);
    } else
      E.min = 3, E.max = 40, E.step = 1, A.min = 20, A.max = 60, A.step = 5, I.min = 5, I.max = 30, I.step = 5, Te = (r.warmup || Xt).map((p) => ({ ...p })), Ea = (r.cooldown || Ma).map((p) => ({ ...p })), Qt = r.strength.map((p) => Array.isArray(p) ? (([g, T, B, q = !1]) => ({ id: g, name: T, group: B, kind: "work", hidden: !!q }))(p) : { ...p });
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((p) => p.classList.toggle("active", p.dataset.workout === e)), Re();
  }
  function kr(e, r, s) {
    const p = e.getBoundingClientRect(), g = p.width / 2, T = p.height / 2, B = r - g, q = s - T;
    let it = 1 / 0, ht = 1 / 0;
    B !== 0 && (it = g / Math.abs(B)), q !== 0 && (ht = T / Math.abs(q));
    const rt = Math.min(Math.max(1 / Math.min(it, ht), 0), 1);
    let at = Math.atan2(q, B) * (180 / Math.PI) + 90;
    return at < 0 && (at += 360), { edge: rt, angle: at };
  }
  function li(e, r, s = !1) {
    const p = e.getBoundingClientRect(), g = r.clientX - p.left, T = r.clientY - p.top, { edge: B, angle: q } = kr(e, g, T), it = s ? 100 : B * 100;
    e.style.setProperty("--edge-proximity", it.toFixed(3)), e.style.setProperty("--cursor-angle", q.toFixed(3) + "deg"), e.classList.toggle("borderGlowActive", s || it >= 30);
  }
  function xe(e) {
    e.addEventListener("pointermove", (s) => li(e, s, !1)), e.addEventListener("pointerenter", (s) => li(e, s, !1)), e.addEventListener("pointerdown", (s) => li(e, s, !0));
    const r = () => {
      e.classList.remove("borderGlowActive"), e.style.setProperty("--edge-proximity", "0");
    };
    e.addEventListener("pointerleave", r), e.addEventListener("pointerup", r), e.addEventListener("pointercancel", r);
  }
  xe(o("addWorkoutPanel"));
  let St = !1, ze = null;
  function Ht(e) {
    return String(e ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]);
  }
  function Ia(e) {
    return e.summary ? e.summary : e.customSequence ? Gn(e.total) + " · custom move" : Gn(e.total) + " · " + Ye(e.work) + " / " + Ye(e.rest) + " · warm-up + cooldown";
  }
  function jn(e, r) {
    var T;
    const s = document.createElement("article");
    s.className = "workoutPanel", s.dataset.workout = e, s.tabIndex = 0;
    const p = r.activityCount ?? (((T = r.sequence) == null ? void 0 : T.length) || 0);
    s.innerHTML = '<span class="edgeLight" aria-hidden="true"></span><div class="panelExpanded"><div><div class="workoutPanelTop"><div><div class="workoutName">' + Ht(r.name) + '</div><div class="sub">' + Ht(Ia(r)) + '</div><span class="sourceTag">' + Ht(r.source || "Custom move") + '</span></div><button class="pill seeWorkoutBtn" type="button">Edit</button></div></div><div class="workoutFooter"><div><strong class="activityCount">' + (p ? p + " activities" + ((r.rounds || 1) > 1 ? " × " + r.rounds : "") : "—") + '</strong></div><div class="workoutPanelActions"><button class="primary startWorkoutBtn" type="button">Start move</button></div></div></div><div class="panelCollapsed"><div class="panelCollapsedText">' + Ht(r.name) + "</div></div>";
    const g = o("addWorkoutPanel");
    return o("workoutGallery").insertBefore(s, g), xe(s), s.addEventListener("click", (B) => {
      B.target.closest("button") || Oe(e);
    }), s.addEventListener("keydown", (B) => {
      (B.key === "Enter" || B.key === " ") && !B.target.closest("button") && (B.preventDefault(), Oe(e));
    }), s.querySelector(".seeWorkoutBtn").addEventListener("click", (B) => {
      B.stopPropagation(), Oe(e), el(!1);
    }), s.querySelector(".startWorkoutBtn").addEventListener("click", (B) => {
      B.stopPropagation(), Oe(e), sl();
    }), s;
  }
  function Yi() {
    n.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.remove()), de.order.forEach((e) => {
      Kt[e] && jn(e, Kt[e]);
    }), n.querySelectorAll(".workoutPanel[data-workout]").forEach((e) => e.classList.toggle("active", e.dataset.workout === we));
  }
  Yi(), o("addWorkoutPanel").addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && (e.preventDefault(), o("addWorkoutPanel").click());
  }), o("addWorkoutPanel").addEventListener("click", () => {
    St = !0, ze = "custom-" + Date.now(), Kt[ze] = {
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
    }, Oe(ze), el(!0);
  });
  let Ut = [], ne = 0, Ve = 0, Ro = 1, Ha = !1, ea = null, di = null, ra = !1, zn = de.settings.upcomingCount ?? "all", Vn = "movement";
  function No(e, r, s) {
    return (Number(e) - r) / (s - r) * 100;
  }
  function Ye(e) {
    const r = Math.max(0, Number(e) || 0);
    return r >= 3600 && r % 3600 === 0 ? r / 3600 + " hr" : r >= 60 && r % 60 === 0 ? r / 60 + " min" : r >= 60 ? Math.round(r / 60) + " min" : Math.round(r) + " sec";
  }
  function Gn(e) {
    const r = Math.max(0, Number(e) || 0);
    return r >= 60 && r % 60 === 0 ? r / 60 + " hr" : r >= 60 ? Math.floor(r / 60) + " hr " + r % 60 + " min" : r + " min";
  }
  function Ga() {
    gt.style.width = No(E.value, Number(E.min), Number(E.max)) + "%", yt.style.width = No(A.value, Number(A.min), Number(A.max)) + "%", $t.style.width = No(I.value, Number(I.min), Number(I.max)) + "%", j.textContent = Ye(A.value), ct.textContent = Ye(I.value);
    const e = Number(le.value) || 1;
    Ae.style.width = No(e, 1, 10) + "%", Pa.textContent = e > 1 ? "Time per round" : "Total time";
  }
  function Un(e) {
    return e.filter((r) => !r.hidden);
  }
  function Yn(e) {
    const r = Math.max(0, Math.round(Number(e) || 0)), s = Math.floor(r / 3600), p = Math.floor(r % 3600 / 60), g = r % 60;
    return (s ? s + ":" + String(p).padStart(2, "0") : p) + ":" + String(g).padStart(2, "0");
  }
  function sa(e) {
    let r;
    try {
      r = new URL(String(e || "").trim());
    } catch {
      return null;
    }
    const s = r.hostname.replace(/^(www|m|music)\./, "");
    let p = null;
    if (s === "youtu.be") p = r.pathname.slice(1).split("/")[0];
    else if (/^youtube(-nocookie)?\.com$/.test(s))
      if (r.pathname === "/watch") p = r.searchParams.get("v");
      else {
        const q = r.pathname.match(/^\/(embed|shorts|live|v)\/([^/?#]+)/);
        q && (p = q[2]);
      }
    if (!p || !/^[\w-]{11}$/.test(p)) return null;
    const g = (q) => {
      if (!q) return 0;
      if (/^\d+$/.test(q)) return Number(q);
      const it = q.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
      return it ? (Number(it[1]) || 0) * 3600 + (Number(it[2]) || 0) * 60 + (Number(it[3]) || 0) : 0;
    }, T = g(r.searchParams.get("t") || r.searchParams.get("start")), B = g(r.searchParams.get("end"));
    return { id: p, start: T, end: B > T ? B : null };
  }
  function Ln(e, r) {
    if (e.useVideoLength === !1) return Math.max(5, Number(e.duration) || r || 300);
    const s = Number(e.start) || 0, p = Number(e.end) || Number(e.videoDuration) || 0;
    return p > s ? Math.round(p - s) : Number(e.duration) || 300;
  }
  function bn(e, r) {
    const s = Math.max(0, Number(e) || 0);
    return Math.round(r === "hour" ? s * 3600 : r === "min" ? s * 60 : s);
  }
  function Po(e, r = !0) {
    Vn = e, n.querySelectorAll(".createPresetBtn").forEach((p) => p.classList.toggle("active", p.dataset.movePreset === e));
    const s = Kt[we];
    s && (s.preset = e), e === "work" ? (E.min = 30, E.max = 480, E.step = 30, A.min = 300, A.max = 7200, A.step = 300, I.min = 60, I.max = 1800, I.step = 60, r && (E.value = 60, A.value = 1500, I.value = 300), o("addMovementUnit").value = "min", o("addMovementDuration").value = 25, o("addRestUnit").value = "min", o("addRestDuration").value = 5) : (E.min = 3, E.max = 40, E.step = 1, A.min = 20, A.max = 60, A.step = 5, I.min = 5, I.max = 30, I.step = 5, r && (E.value = 20, A.value = 45, I.value = 15), o("addMovementUnit").value = "sec", o("addMovementDuration").value = 45, o("addRestUnit").value = "sec", o("addRestDuration").value = 30), Ga();
  }
  function Zi(e, r) {
    const s = Vn === "work";
    return e.map((p, g) => ({ ...p, id: r + "-" + g + "-" + Date.now().toString(36), useGlobalTiming: !s, duration: s ? 60 : Number(A.value) }));
  }
  function Ki() {
    const e = Kt[we];
    e != null && e.customSequence && (e.includeWarmup = o("includeWarmupPreset").checked, e.includeCooldown = o("includeCooldownPreset").checked, e.includeWarmup && !Te.length && (Te = Zi(Xt, "warm")), e.includeCooldown && !Ea.length && (Ea = Zi(Ma, "cool")), Re());
  }
  function ms() {
    const e = o("upcomingCountSetting");
    if (!e) return;
    const r = Math.max(1, Ut.length - 1), s = zn;
    e.innerHTML = "";
    for (let T = 1; T <= r; T++) {
      const B = document.createElement("option");
      B.value = String(T), B.textContent = String(T), e.appendChild(B);
    }
    const p = document.createElement("option");
    p.value = "all", p.textContent = "All", e.appendChild(p);
    const g = s === "all" ? "all" : String(Math.min(Number(s) || 1, r));
    e.value = g, zn = g === "all" ? "all" : Number(g);
  }
  function Re() {
    Number(E.value) * 60;
    const e = Number(A.value), r = Number(I.value), s = Kt[we], p = !!(s != null && s.customSequence), g = (p ? !s.includeWarmup : s != null && s.warmupOff) ? [] : Un(Te), T = Un(Qt), B = p && !s.includeCooldown ? [] : Un(Ea);
    if (s && (s.total = Number(E.value), s.work = e, s.rest = r, s.rounds = Number(le.value) || 1, s.customSequence ? (s.sequence = Qt.map((At) => ({ ...At })), s.warmup = Te.map((At) => ({ ...At })), s.cooldown = Ea.map((At) => ({ ...At }))) : (s.strength = Qt.map((At) => ({ ...At })), s.warmup = Te.map((At) => ({ ...At })), s.cooldown = Ea.map((At) => ({ ...At })))), s != null && s.customSequence) {
      const At = [...g.map((pe) => ({ ...pe, section: "warmup" })), ...T, ...B.map((pe) => ({ ...pe, section: "cooldown" }))].map((pe) => {
        if (pe.kind === "video") return { ...pe, duration: Ln(pe, e), rest: 0 };
        if (pe.kind === "rest") {
          const wa = pe.useGlobalTiming === !0 ? r : Number(pe.duration) || r;
          return { ...pe, duration: wa, rest: 0 };
        }
        const ba = pe.useGlobalTiming === !1 && Number(pe.duration) || e;
        return { ...pe, duration: ba, rest: 0 };
      });
      s.autoRest && Number(s.autoRestDuration) > 0 ? (Ut = [], At.forEach((pe, ba) => {
        Ut.push(pe);
        const wa = At[ba + 1];
        pe.kind !== "rest" && wa && wa.kind !== "rest" && Ut.push({
          id: "auto-rest-" + ba,
          name: "Rest",
          group: "Rest",
          kind: "rest",
          hidden: !1,
          duration: Number(s.autoRestDuration),
          rest: 0,
          autoGenerated: !0
        });
      })) : Ut = At;
    } else
      Ut = [...g.map((At) => ({ ...At, section: "warmup" })), ...T, ...B.map((At) => ({ ...At, section: "cooldown" }))].map((At) => At.kind === "video" ? { ...At, duration: Ln(At, e), rest: 0 } : At.kind === "rest" ? { ...At, duration: At.useGlobalTiming === !0 ? r : Number(At.duration) || r, rest: 0 } : { ...At, duration: At.useGlobalTiming === !1 && Number(At.duration) || e, rest: r }), Ut.forEach((At, pe) => {
        var ba;
        ((ba = Ut[pe + 1]) == null ? void 0 : ba.kind) === "rest" && (At.rest = 0);
      }), Ut.length && (Ut[Ut.length - 1].rest = 0);
    const q = Math.max(1, Math.min(10, Number(le.value) || 1)), it = Ut, ht = (At) => q <= 1 ? null : At.section === "warmup" || At.presetRole === "warmup" ? "first" : At.section === "cooldown" || At.presetRole === "cooldown" ? "last" : At.kind === "video" && (At.videoRounds === "first" || At.videoRounds === "last") ? At.videoRounds : null, rt = (At) => !!ht(At), at = it.filter((At) => !rt(At)), Bt = it.filter(rt), te = at.length, Ot = at.reduce((At, pe) => At + pe.duration + pe.rest, 0), Et = Bt.reduce((At, pe) => At + pe.duration + pe.rest, 0), Ct = [
      Bt.some((At) => At.section === "warmup" || At.presetRole === "warmup") && "warm-up",
      Bt.some((At) => At.section === "cooldown" || At.presetRole === "cooldown") && "cooldown",
      Bt.some((At) => At.kind === "video" && !At.section && !At.presetRole) && "video"
    ].filter(Boolean), he = Ct.length > 1 ? Ct.slice(0, -1).join(", ") + " & " + Ct[Ct.length - 1] : Ct[0] || "";
    Ut = [];
    const ve = (At, pe) => {
      const ba = ht(At);
      return !ba || (ba === "first" ? pe === 1 : pe === q);
    };
    for (let At = 1; At <= q; At++)
      if (it.filter((pe) => ve(pe, At)).forEach((pe, ba) => Ut.push({ ...pe, id: pe.id + (q > 1 ? "-r" + At : ""), round: At, roundIndex: ba })), At < q && te)
        if (s != null && s.customSequence)
          Ut.push({ id: "round-break-" + At, name: "Rest", group: "Round " + (At + 1) + " next", kind: "rest", hidden: !1, duration: r, rest: 0, round: At, roundIndex: te, roundBreak: !0 });
        else {
          const pe = Ut[Ut.length - 1];
          pe.rest = r, pe.roundBreakAfter = !0;
        }
    Ga();
    const zt = Ut.reduce((At, pe) => At + pe.duration + pe.rest, 0), be = Math.round(Ot / 60), Ee = Math.round(zt / 60), se = q > 1 ? Gn(be) + " × " + q + " rounds" + (Et ? " + " + Ye(Et) + " " + he : "") + " (" + Gn(Ee) + ")" : Gn(Ee), ae = [g.length ? "warm-up" : "", B.length ? "cooldown" : ""].filter(Boolean), ua = s != null && s.customSequence ? se + " · " + te + " items" + (ae.length && !(q > 1 && Et) ? " · " + ae.join(" + ") : "") : se + " · " + Ye(e) + " / " + Ye(r) + (ae.length && !(q > 1 && Et) ? " · " + ae.join(" + ") : "");
    mt.textContent = Ye(Ot);
    const _a = Ut.filter((At) => !At.roundBreak).length, Ze = q > 1 ? _a + " activities · " + q + " rounds" : te + " activities";
    Ca.textContent = q > 1 ? q + " rounds · " + Gn(Ee) + " total" : "1 round", o("roundsCount").textContent = q, n.querySelectorAll("[data-rounds-step]").forEach((At) => {
      At.disabled = Number(At.dataset.roundsStep) < 0 ? q <= 1 : q >= 10;
    }), s && (s.summary = ua, s.activityCount = te);
    const Oi = n.querySelector(".workoutPanel.active .sub");
    Oi && (Oi.textContent = ua), me.textContent = ua, Ge(), n.querySelectorAll(".workoutPanel.active .activityCount").forEach((At) => At.textContent = Ze), Ga(), ci(), sn(), ln(), ms(), St && lt(), It.workout.classList.contains("active") && !ea && zr();
  }
  const ha = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></g></svg>', uo = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"/></svg>', Mr = {
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
  }, Ua = (e) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (Mr[e] || "") + "</svg>";
  n.querySelectorAll("[data-icon]").forEach((e) => {
    e.innerHTML = Ua(e.dataset.icon);
  });
  let ye = null, na = null;
  function Le(e) {
    return e = Math.max(1, Number(e) || 0), e >= 3600 && e % 3600 === 0 ? { value: e / 3600, unit: "hour" } : e >= 60 && e % 60 === 0 ? { value: e / 60, unit: "min" } : { value: e, unit: "sec" };
  }
  function _n(e = !1) {
    const r = n.querySelector(".moveEditForm input[data-f=url],.moveEditForm input[data-f=name]");
    r && (r.focus({ preventScroll: !0 }), e && r.select());
  }
  function Zn(e, r, s = {}) {
    const p = e.kind === "rest", g = e.kind === "video", T = g ? e.useVideoLength !== !1 : p ? e.useGlobalTiming === !0 : e.useGlobalTiming !== !1, B = Number(p ? I.value : A.value), q = Le(g ? e.useVideoLength === !1 ? e.duration : Ln({ ...e, useVideoLength: !0 }) : T ? B : e.duration || B), it = g && (Number(e.videoDuration) > 0 || Number(e.end) > 0), ht = g ? '<label class="moveEditWide"><span>YouTube link</span><input class="addInput" data-f="url" type="url" inputmode="url" autocomplete="off" value="' + Ht(e.url || "") + '" placeholder="Paste a YouTube link"></label><label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Ht(e.autoName ? "" : e.name) + '" placeholder="Uses the video’s title"></label><label><span>Plays in</span><select class="creatorUnitSelect" data-f="rounds">' + [["every", "Every round"], ["first", "The first round only"], ["last", "The last round only"]].map(([zt, be]) => '<option value="' + zt + '"' + ((e.videoRounds || "every") === zt ? " selected" : "") + ">" + be + "</option>").join("") + '</select></label><p class="fieldError" data-f="urlError" hidden>That isn’t a YouTube link. Copy it from the Share button on YouTube.</p>' : '<label><span>Name</span><input class="addInput" data-f="name" type="text" value="' + Ht(e.name) + '" placeholder="' + (p ? "Rest" : "Name this movement") + '"></label><label><span>Type / group</span><input class="addInput" data-f="group" type="text" value="' + Ht(e.group) + '" placeholder="' + (p ? "Rest" : "e.g. Glutes + legs") + '"></label>', rt = g ? "Play the whole " + (Number(e.start) > 0 || Number(e.end) > 0 ? "clip" : "video") + (it ? " · " + Yn(Ln({ ...e, useVideoLength: !0 })) : "") : "Use global timing · " + Ye(B), at = document.createElement("div");
    at.className = "moveRow editing" + (s.sheet ? " inSheet" : ""), at.dataset.index = r, at.dataset.id = e.id;
    const Bt = s.isNew ?? (na == null ? void 0 : na.item) === e, te = s.sheet ? '<div class="moveEditActions sheetActions">' + (Bt ? "" : '<div class="sheetSecondary"><button class="hideBtn" type="button" data-a="hide">' + (e.hidden ? "Show" : "Hide") + '</button><button class="removeBtn" type="button" data-a="remove" aria-label="Hold to remove ' + Ht(e.name) + '"><span class="removeFill"></span><span class="removeLabel">Remove</span></button></div>') + '<div class="sheetPrimary"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">' + (Bt ? "Add" : "Save") + "</button></div></div>" : '<div class="moveEditActions"><button class="pill" type="button" data-a="cancel">Cancel</button><button class="primary" type="button" data-a="save">Save</button></div>';
    at.innerHTML = '<div class="moveEditForm"><div class="moveEditFields' + (g ? " videoFields" : "") + '">' + ht + '</div><div class="moveEditTiming"><label class="globalTimingToggle"><input type="checkbox" data-f="global"' + (T ? " checked" : "") + '><span class="toggleTrack" aria-hidden="true"><span class="toggleThumb"></span></span><span class="toggleLabel">' + Ht(rt) + '</span></label><div class="creatorDurationRow"><input class="addInput creatorNumber" data-f="dur" type="number" min="1" max="3600" step="1" value="' + q.value + '" aria-label="Duration"><select class="creatorUnitSelect" data-f="unit" aria-label="Duration unit">' + ["sec", "min", "hour"].map((zt) => '<option value="' + zt + '"' + (zt === q.unit ? " selected" : "") + ">" + { sec: "seconds", min: "minutes", hour: "hours" }[zt] + "</option>").join("") + "</select></div></div>" + te + "</div>";
    const Ot = (zt) => at.querySelector("[data-f=" + zt + "]"), Et = () => {
      const zt = Ot("global").checked;
      Ot("dur").disabled = zt, Ot("unit").disabled = zt, at.querySelector(".creatorDurationRow").classList.toggle("isDisabled", zt);
    };
    Ot("global").addEventListener("change", Et), Et();
    const Ct = () => {
      var zt;
      if (s.sheet) {
        (zt = s.onCancel) == null || zt.call(s);
        return;
      }
      Bt && xn(), ye = null, Re();
    }, he = () => {
      var Ee;
      if (g) {
        ve();
        return;
      }
      const zt = Ot("name").value.trim();
      if (!zt) {
        Ot("name").focus();
        return;
      }
      e.name = zt, e.group = Ot("group").value.trim() || (p ? "Rest" : "Movement");
      const be = Ot("global").checked;
      if (e.useGlobalTiming = be, be || (e.duration = Math.max(p ? 5 : 1, bn(Ot("dur").value, Ot("unit").value))), s.sheet) {
        (Ee = s.onSaved) == null || Ee.call(s);
        return;
      }
      Bt && (na = null), ye = null, Re(), We(Bt ? p ? "Rest added" : "Movement added" : "Movement updated");
    }, ve = () => {
      var ae;
      const zt = Ot("url").value.trim(), be = sa(zt);
      if (!be) {
        Ot("urlError").hidden = !1, Ot("url").classList.add("invalid"), Ot("url").focus();
        return;
      }
      const Ee = be.id !== e.videoId;
      e.url = zt, e.videoId = be.id, e.start = be.start, e.end = be.end, Ee && (e.videoDuration = null, e.videoError = null);
      const se = Ot("name").value.trim();
      e.autoName = !se, e.name = se || (Ee ? "" : e.name) || e.videoTitle || "YouTube video", e.group = "Video", e.videoRounds = Ot("rounds").value, e.useVideoLength = Ot("global").checked, e.useVideoLength || (e.duration = Math.max(5, bn(Ot("dur").value, Ot("unit").value))), s.sheet ? (ae = s.onSaved) == null || ae.call(s) : (Bt && (na = null), ye = null, Re(), We(Bt ? "Video added" : "Video updated")), (Ee || !e.videoDuration || e.autoName && !e.videoTitle) && cd(e);
    };
    if (g && Ot("url").addEventListener("input", () => {
      Ot("urlError").hidden = !0, Ot("url").classList.remove("invalid");
    }), at.querySelector("[data-a=cancel]").addEventListener("click", Ct), at.querySelector("[data-a=save]").addEventListener("click", he), s.sheet && !Bt) {
      at.querySelector("[data-a=hide]").addEventListener("click", () => {
        var be;
        return (be = s.onHide) == null ? void 0 : be.call(s);
      });
      const zt = at.querySelector("[data-a=remove]");
      pr(zt, zt.querySelector(".removeFill"), 1200, () => {
        var be;
        return (be = s.onRemove) == null ? void 0 : be.call(s);
      });
    }
    return at.addEventListener("keydown", (zt) => {
      zt.key === "Escape" && (zt.preventDefault(), zt.stopPropagation(), Ct()), zt.key === "Enter" && zt.target.matches("input") && (zt.preventDefault(), he());
    }), at;
  }
  function fo(e, r) {
    const s = o(r);
    s.innerHTML = "", e.forEach((p, g) => {
      if (p === ye && !bt()) {
        s.appendChild(Zn(p, g));
        return;
      }
      const T = document.createElement("div");
      T.className = "moveRow" + (p.hidden ? " hidden" : "") + (p.kind === "rest" ? " restItem" : "") + (p.kind === "video" ? " videoItem" : "") + (Xo(p) ? " noMeta" : ""), T.dataset.index = g, T.dataset.id = p.id;
      const B = p.kind === "rest" ? p.useGlobalTiming === !0 ? "Global timing" : Ye(p.duration) : p.useGlobalTiming === !1 ? Ye(p.duration) : "Global timing", q = p.kind === "video" ? '<span class="moveKindBadge">Video</span>' : "", it = p.kind === "video" ? p.videoError ? "YouTube · can’t play outside YouTube" : "YouTube · " + (p.useVideoLength === !1 ? "stops after " + Ye(p.duration) : Number(p.videoDuration) > 0 || Number(p.end) > 0 ? Yn(Ln(p)) : "plays to the end") + (p.videoRounds === "first" ? " · first round only" : p.videoRounds === "last" ? " · last round only" : "") : p.group + " · " + B, ht = '<button class="dragHandle" type="button" title="Drag to reorder" aria-label="Reorder ' + Ht(p.name) + '. Drag, or use the up and down arrow keys">' + ha + "</button>", rt = '<div class="moveText"><div class="moveItemName">' + Ht(p.name) + q + '</div><div class="moveMeta">' + Ht(it) + "</div></div>", at = (Ot) => Ot.addEventListener("keydown", (Et) => {
        var ve, zt;
        if (Et.key !== "ArrowUp" && Et.key !== "ArrowDown") return;
        Et.preventDefault();
        const Ct = e.indexOf(p), he = Ct + (Et.key === "ArrowUp" ? -1 : 1);
        he < 0 || he >= e.length || (e.splice(Ct, 1), e.splice(he, 0, p), Re(), (zt = (ve = o(r).children[he]) == null ? void 0 : ve.querySelector(".dragHandle")) == null || zt.focus());
      });
      if (bt()) {
        T.classList.add("phoneRow"), T.tabIndex = 0, T.setAttribute("role", "button"), T.setAttribute("aria-label", "Edit " + (p.name || "step")), T.innerHTML = ht + rt + '<span class="rowChevron" aria-hidden="true">›</span>';
        const Ot = T.querySelector(".dragHandle");
        Ot.addEventListener("pointerdown", (Et) => wn(Et, T, s, e)), at(Ot), T.addEventListener("click", (Et) => {
          Et.target.closest(".dragHandle") || Ft(p, e);
        }), T.addEventListener("keydown", (Et) => {
          Et.key === "Enter" && Et.target === T && (Et.preventDefault(), Ft(p, e));
        }), s.appendChild(T);
        return;
      }
      T.innerHTML = ht + rt + '<div class="moveActions seg"><button class="hideBtn editBtn segBtn" type="button" aria-label="Edit ' + Ht(p.name) + '">Edit</button><button class="hideBtn segBtn" type="button">' + (p.hidden ? "Show" : "Hide") + '</button><button class="removeBtn segBtn" type="button" title="Hold to remove" aria-label="Hold to remove ' + Ht(p.name) + '"><span class="removeFill"></span><span class="removeLabel">' + uo + "</span></button></div>", T.querySelector(".editBtn").addEventListener("click", () => {
        xn(), ye = p, Re(), _n();
      }), T.querySelector(".hideBtn:not(.editBtn)").addEventListener("click", () => {
        p.hidden = !p.hidden, Re();
      });
      const Bt = T.querySelector(".removeBtn");
      pr(Bt, Bt.querySelector(".removeFill"), 1200, () => {
        const Ot = e.indexOf(p);
        Ot < 0 || (e.splice(Ot, 1), Re(), We("Removed " + p.name, { label: "Undo", run: () => {
          e.splice(Math.min(Ot, e.length), 0, p), Re();
        } }));
      });
      const te = T.querySelector(".dragHandle");
      te.addEventListener("pointerdown", (Ot) => wn(Ot, T, s, e)), at(te), s.appendChild(T);
    });
  }
  const Da = () => {
    var e;
    return (e = window.matchMedia) == null ? void 0 : e.call(window, "(prefers-reduced-motion: reduce)").matches;
  }, En = (e) => {
    var r;
    try {
      (r = navigator.vibrate) == null || r.call(navigator, e);
    } catch {
    }
  };
  function wn(e, r, s, p) {
    if (e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const g = e.currentTarget, T = e.pointerId, B = !Da();
    try {
      g.setPointerCapture(T);
    } catch {
    }
    const q = r.closest(".exerciseScroller") || Io(r), it = s.style.position;
    s.style.position = "relative";
    const ht = [...s.children].filter((ue) => ue.classList.contains("moveRow")), rt = ht.indexOf(r), at = parseFloat(getComputedStyle(s).rowGap) || 8, Bt = r.offsetHeight, te = Bt + at, Ot = ht.map((ue) => ue.offsetTop), Et = ht.map((ue) => ue.offsetHeight), Ct = () => s.getBoundingClientRect().top, he = s.getBoundingClientRect().width, ve = e.clientY - (Ct() + Ot[rt]), zt = e.clientX;
    let be = e.clientY, Ee = e.clientX, se = Ct() + Ot[rt], ae = 0, ua = 0, _a = 0, Ze = 1, Oi = 0, At = rt, pe = !1, ba = 0, wa = !1, Cl = !1, rs = Ot[rt];
    s.classList.add("reordering"), r.classList.add("dragging"), r.style.transition = "none", En(8);
    const Tl = () => {
      const ue = be - ve + Bt / 2 - Ct();
      let ke = 0;
      return ht.forEach((je, tn) => {
        tn !== rt && ue > Ot[tn] + Et[tn] / 2 && ke++;
      }), ke;
    }, Al = () => {
      ht.forEach((ue, ke) => {
        if (ke === rt) return;
        const je = rt < At && ke > rt && ke <= At ? -te : rt > At && ke >= At && ke < rt ? te : 0;
        ue.style.transform = je ? "translateY(" + je + "px)" : "";
      });
    }, qs = () => {
      const ue = s.getBoundingClientRect(), ke = Math.abs(Ee - zt) > Math.max(80, he * 0.3) || Ee < ue.left - 24 || Ee > ue.right + 24;
      ke !== pe && (pe = ke, r.classList.toggle("willReturn", ke), En(ke ? 10 : 4));
      const je = pe ? rt : Tl();
      je !== At && (At = je, Al(), pe || En(4));
    }, Wi = () => {
      if (At === rt) return Ot[rt];
      const ue = ht.filter((je, tn) => tn !== rt);
      let ke = Ot[0];
      for (let je = 0; je < At; je++) ke += ue[je].offsetHeight + at;
      return ke;
    }, ss = () => {
      const ue = B ? Math.min(Math.abs(ae) / 40, 1) : 0, ke = B && !wa ? Math.max(-3, Math.min(3, _a * 0.6)) : 0;
      r.style.transform = "translate(" + ua.toFixed(2) + "px," + (se - (Ct() + Ot[rt])).toFixed(2) + "px) rotate(" + ke.toFixed(2) + "deg) scale(" + (Ze * (1 - 0.04 * ue)).toFixed(4) + "," + (Ze * (1 + 0.06 * ue)).toFixed(4) + ")";
    }, oe = () => {
      ba = requestAnimationFrame(oe);
      const ue = Ee - zt, ke = wa ? Ct() + rs : be - ve, je = wa ? 0 : pe ? ue * 0.9 : Math.max(-22, Math.min(22, ue * 0.22)), tn = wa ? 1 : pe ? 0.97 : 1.035;
      if (!B) {
        se = ke, ua = wa ? 0 : je, Ze = 1, ss(), wa && Je();
        return;
      }
      const Wp = wa ? 0.24 : 0.2, qp = wa ? 0.62 : 0.68;
      ae = (ae + (ke - se) * Wp) * qp, se += ae, _a = (_a + (je - ua) * 0.16) * 0.7, ua += _a, Oi = (Oi + (tn - Ze) * 0.22) * 0.6, Ze += Oi, ss(), wa && Math.abs(ae) < 0.15 && Math.abs(ke - se) < 0.5 && Math.abs(ua) < 0.5 && Math.abs(Ze - 1) < 3e-3 && Je();
    }, Ne = setInterval(() => {
      if (!q || wa) return;
      const ue = q.getBoundingClientRect(), ke = 56, je = be < ue.top + ke ? -10 : be > ue.bottom - ke ? 10 : 0;
      je && (q.scrollTop += je, qs());
    }, 30);
    function Je() {
      if (Cl) return;
      Cl = !0, cancelAnimationFrame(ba);
      const ue = At !== rt, ke = r.dataset.id;
      if (s.classList.remove("reordering"), ht.forEach((tn) => {
        tn.style.transition = "none", tn.style.transform = "";
      }), r.classList.remove("dragging", "willReturn"), s.style.position = it, ue) {
        const [tn] = p.splice(rt, 1);
        p.splice(At, 0, tn);
      }
      Re();
      const je = ke && s.querySelector('.moveRow[data-id="' + ke + '"]');
      je && B && je.animate([{ transform: "scale(1.02,.95)" }, { transform: "scale(.995,1.012)" }, { transform: "none" }], { duration: 340, easing: "ease-out" }), ue && We("Order saved");
    }
    const xa = (ue) => {
      if (ue.pointerId === T) {
        if (ue.pointerType === "mouse" && ue.buttons === 0) {
          An();
          return;
        }
        be = ue.clientY, Ee = ue.clientX, qs();
      }
    }, Qa = (ue) => {
      ue.pointerId === T && An();
    };
    function An() {
      wa || (window.removeEventListener("pointermove", xa, !0), window.removeEventListener("pointerup", Qa, !0), window.removeEventListener("pointercancel", Qa, !0), g.removeEventListener("lostpointercapture", An), clearInterval(Ne), pe && At !== rt && (At = rt, Al()), rs = Wi(), wa = !0, En(6), setTimeout(Je, 800));
    }
    window.addEventListener("pointermove", xa, !0), window.addEventListener("pointerup", Qa, !0), window.addEventListener("pointercancel", Qa, !0), g.addEventListener("lostpointercapture", An), ba = requestAnimationFrame(oe), ss();
  }
  function ci() {
    var g, T, B, q;
    const e = Kt[we], r = (g = o("warmupList")) == null ? void 0 : g.closest("section"), s = (T = o("cooldownList")) == null ? void 0 : T.closest("section"), p = (q = (B = o("strengthList")) == null ? void 0 : B.closest("section")) == null ? void 0 : q.querySelector(".sectionTitle");
    e != null && e.customSequence ? (r && (r.hidden = !e.includeWarmup), s && (s.hidden = !e.includeCooldown), p && (p.textContent = "Move sequence")) : (r && (r.hidden = !!(e != null && e.warmupOff)), s && (s.hidden = !1), p && (p.textContent = "Kettlebell work")), fo(Te, "warmupList"), fo(Qt, "strengthList"), fo(Ea, "cooldownList");
  }
  function xn() {
    if (!na) return;
    const { item: e, arr: r } = na;
    na = null;
    const s = r.indexOf(e);
    s >= 0 && r.splice(s, 1), ye === e && (ye = null);
  }
  function ho(e) {
    return e.id === "warmupList" ? { arr: Te, kind: "warmup", group: "Warm-up" } : e.id === "cooldownList" ? { arr: Ea, kind: "cooldown", group: "Cooldown" } : { arr: Qt, kind: "work", group: "" };
  }
  function Kn(e, r) {
    const s = ho(r), p = Date.now().toString(36);
    return e === "video" ? { id: "video-" + p, name: "", group: "Video", kind: "video", hidden: !1, url: "", videoId: "", start: 0, end: null, videoDuration: null, useVideoLength: !0, autoName: !0, duration: 300 } : e === "rest" ? { id: "rest-" + p, name: "Rest", group: "Rest", kind: "rest", hidden: !1, useGlobalTiming: !0, duration: Number(I.value) } : { id: "movement-" + p, name: "", group: s.group, kind: s.kind, hidden: !1, useGlobalTiming: !0, duration: Number(A.value) };
  }
  const Ya = "cubic-bezier(.34,1.46,.64,1)";
  function mo(e, r) {
    if (Da() || !e) {
      r();
      return;
    }
    const s = (T) => {
      var B;
      return ((B = T.dataset) == null ? void 0 : B.id) || T;
    }, p = () => [...e.querySelectorAll(".moveRow,.sectionTitle,.movementCreatorLaunch")], g = new Map(p().map((T) => [s(T), T.getBoundingClientRect().top]));
    r(), p().forEach((T) => {
      const B = g.get(s(T));
      if (B === void 0) return;
      const q = B - T.getBoundingClientRect().top;
      Math.abs(q) < 0.5 || T.animate([{ transform: "translateY(" + q + "px)" }, { transform: "none" }], { duration: 440, easing: Ya });
    });
  }
  function $i(e, r) {
    if (!e || Da()) return;
    const s = e.offsetHeight, p = Math.max(0, s - (r || 0));
    e.animate([{ clipPath: "inset(0 0 " + p + "px 0 round 20.8px)" }, { clipPath: "inset(0 0 0 0 round 20.8px)" }], { duration: 460, easing: Ya });
  }
  function yn(e, r, s, p) {
    const { arr: g } = ho(r), T = Kn(e, r);
    g.splice(Math.max(0, Math.min(s, g.length)), 0, T), na = { item: T, arr: g }, ye = T, mo(r.closest(".exerciseScroller,.createStepSlot") || r, () => Re());
    const B = r.querySelector(".moveRow.editing");
    return $i(B, p), _n(e === "rest"), B;
  }
  function Io(e) {
    for (let r = e; r && r.nodeType === 1; r = r.parentElement) {
      const s = getComputedStyle(r).overflowY;
      if (/(auto|scroll)/.test(s) && r.scrollHeight > r.clientHeight) return r;
    }
    return null;
  }
  const x = { movement: ["New movement", "Drop to add, then name it"], rest: ["Rest", "Rest · Global timing"], video: ["New video", "Drop to add, then paste a YouTube link"] };
  function S(e, r) {
    const s = document.createElement("div");
    return s.className = "addGhost" + (e === "movement" ? "" : " rest"), s.innerHTML = '<span class="addGhostGrip">' + ha + '</span><span class="addGhostText"><strong>' + Ht(r[0]) + "</strong><small>" + Ht(r[1]) + "</small></span>", o("workoutModal").appendChild(s), s;
  }
  function C(e) {
    e.classList.add("leaving"), setTimeout(() => e.remove(), 180);
  }
  function O(e, r, s, p) {
    (ye || na) && (xn(), ye = null, Re());
    const g = e.getBoundingClientRect(), T = S(r, x[r]);
    T.setAttribute("aria-hidden", "true"), T.style.width = g.width + "px", T.style.height = g.height + "px", T.style.transform = "translate(" + g.left + "px," + g.top + "px)", e.classList.add("lifting");
    const B = Io(e);
    return Z({
      ghost: T,
      origin: g,
      sx: s,
      sy: p,
      scroller: B,
      column: e.closest(".exerciseScroller,.createFlow") || B,
      home: () => e.getBoundingClientRect(),
      onDrop: (q, it, ht) => {
        C(T), e.classList.remove("lifting"), yn(r, q, it, ht);
      },
      onReturn: () => {
        C(T), e.classList.remove("lifting");
      }
    });
  }
  function Z({ ghost: e, origin: r, sx: s, sy: p, scroller: g, column: T, home: B, onDrop: q, onReturn: it, rowLook: ht = !1 }) {
    var ss;
    const rt = !Da(), at = ((ss = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : ss.offsetHeight) || 80, Bt = s - r.left, te = p - r.top, Ot = 44;
    let Et = s, Ct = p, he = r.left, ve = r.top, zt = 0, be = 0, Ee = !rt, se = null, ae = null, ua = -1, _a = 0, Ze = null;
    const Oi = () => ["warmupList", "strengthList", "cooldownList"].map((oe) => o(oe)).filter((oe) => oe && oe.getClientRects().length && !oe.closest("[hidden]")), At = (oe) => {
      if (oe === se) return;
      se = oe, e.classList.toggle("overList", !!oe || ht);
      const Ne = oe ? oe.getBoundingClientRect().width : r.width;
      e.style.width = Ne + "px", e.style.height = (oe ? at : r.height) + "px";
    }, pe = (oe) => {
      oe.classList.add("leaving"), oe.style.height = "0px", oe.style.marginTop = "-8px", setTimeout(() => oe.remove(), rt ? 320 : 0);
    }, ba = (oe, Ne, Je) => {
      if (ae && ae.parentNode === oe && ua === Je || (ae && (pe(ae), ae = null, ua = -1), !oe)) return;
      const xa = document.createElement("div");
      xa.className = "dropSlot", oe.insertBefore(xa, Ne), ae = xa, ua = Je, xa.getBoundingClientRect(), xa.style.height = at + "px", xa.style.marginTop = "0px";
    }, wa = () => {
      let oe = null, Ne = 1 / 0;
      for (const An of Oi()) {
        const ue = An.getBoundingClientRect();
        if (Et < ue.left - 48 || Et > ue.right + 48) continue;
        const ke = ue.top - 28, je = ue.bottom + 28, tn = Ct < ke ? ke - Ct : Ct > je ? Ct - je : 0;
        tn < Ne && (Ne = tn, oe = An);
      }
      const Je = T == null ? void 0 : T.getBoundingClientRect(), Qa = Je && Et >= Je.left && Et <= Je.right && Ct >= Je.top && Ct <= Je.bottom || Ne === 0 ? oe : null;
      if (Qa) {
        const An = [...Qa.children].filter((ke) => ke.classList.contains("moveRow"));
        let ue = An.findIndex((ke) => {
          const je = ke.getBoundingClientRect();
          return Ct < je.top + je.height / 2;
        });
        ue < 0 && (ue = An.length), ba(Qa, An[ue] || null, ue);
      } else ba(null);
      At(Qa);
    }, Cl = () => {
      if (Ze) return Ze.aim();
      if (se) {
        const oe = se.getBoundingClientRect();
        let Ne = Ct - at / 2;
        return ae && (Ne = Ne * 0.6 + ae.getBoundingClientRect().top * 0.4), { x: oe.left, y: Ne };
      }
      return { x: Et - Bt, y: Ct - te };
    }, rs = (oe, Ne, Je, xa) => {
      e.style.transform = "translate(" + he + "px," + ve + "px) rotate(" + oe + "deg) rotate(" + Ne + "rad) scale(" + Je + "," + xa + ") rotate(" + -Ne + "rad)";
    }, Tl = () => {
      if (_a = requestAnimationFrame(Tl), !Ee) {
        const ue = Et - s, ke = Ct - p, je = Math.min(Math.hypot(ue, ke) / Ot, 1);
        he = r.left + ue * 0.35, ve = r.top + ke * 0.35, rs(0, Math.atan2(ke, ue), 1 + 0.155 * je, 1 - 0.1 * je);
        return;
      }
      const oe = Cl();
      if (!rt) {
        he = oe.x, ve = oe.y, rs(0, 0, 1, 1), Ze && (cancelAnimationFrame(_a), Ze.done());
        return;
      }
      const Ne = Ze ? Ze.k : 0.17, Je = Ze ? Ze.d : 0.7;
      zt = (zt + (oe.x - he) * Ne) * Je, be = (be + (oe.y - ve) * Ne) * Je, he += zt, ve += be;
      const xa = Math.hypot(zt, be), Qa = Math.min(xa / 48, 1), An = se || Ze ? 0 : Math.max(-5, Math.min(5, zt * 0.32));
      rs(An, Math.atan2(be, zt), 1 + 0.1 * Qa, 1 - 0.063 * Qa), Ze && xa < 0.15 && Math.hypot(oe.x - he, oe.y - ve) < 0.6 && (cancelAnimationFrame(_a), Ze.done());
    }, Al = setInterval(() => {
      if (!g || Ze) return;
      const oe = g.getBoundingClientRect(), Ne = 64, Je = Ct < oe.top + Ne ? -(oe.top + Ne - Ct) / 4 : Ct > oe.bottom - Ne ? (Ct - (oe.bottom - Ne)) / 4 : 0;
      Je && (g.scrollTop += Math.max(-18, Math.min(18, Je)), wa());
    }, 30);
    _a = requestAnimationFrame(Tl);
    let qs = !1;
    const Wi = (oe, Ne) => {
      if (qs) return;
      qs = !0, cancelAnimationFrame(_a);
      const Je = ae ? ae.offsetHeight : at;
      !oe && ae && (ae.remove(), ae = null), oe ? q(oe, Ne, Je) : it();
    };
    return {
      move(oe, Ne) {
        Et = oe, Ct = Ne, !Ee && Math.hypot(Et - s, Ct - p) > Ot && (Ee = !0, zt = (Et - s) * 0.085, be = (Ct - p) * 0.085), Ee && wa();
      },
      drop(oe) {
        clearInterval(Al);
        const Ne = se, Je = ua;
        if (!oe && Ne && ae) {
          const xa = ae;
          Ze = { k: 0.24, d: 0.62, aim: () => {
            const Qa = xa.getBoundingClientRect();
            return { x: Qa.left, y: Qa.top };
          }, done: () => Wi(Ne, Je) }, setTimeout(() => Wi(Ne, Je), 650), rt || (cancelAnimationFrame(_a), Wi(Ne, Je));
          return;
        }
        ba(null), At(null), Ze = { k: 0.2, d: 0.66, aim: () => {
          const xa = B();
          return { x: xa.left, y: xa.top };
        }, done: () => Wi(null) }, setTimeout(() => Wi(null), 650), rt || (cancelAnimationFrame(_a), Wi(null));
      }
    };
  }
  function J(e, r) {
    let s = !1;
    e.addEventListener("click", (p) => {
      if (s) {
        s = !1, p.preventDefault();
        return;
      }
      if (bt()) {
        Vt(r);
        return;
      }
      const g = o("strengthList"), T = yn(r, g, ho(g).arr.length, 0);
      T == null || T.scrollIntoView({ block: "nearest", behavior: Da() ? "auto" : "smooth" });
    }), e.addEventListener("pointerdown", (p) => {
      if (p.button !== void 0 && p.button !== 0) return;
      const g = p.pointerId, T = p.clientX, B = p.clientY;
      let q = null, it = !1;
      try {
        e.setPointerCapture(g);
      } catch {
      }
      const ht = (Ct) => {
        if (Ct.pointerId === g) {
          if (Ct.pointerType === "mouse" && Ct.buttons === 0) {
            Et(!1);
            return;
          }
          if (!q) {
            if (Math.hypot(Ct.clientX - T, Ct.clientY - B) < 6) return;
            q = O(e, r, T, B);
          }
          q.move(Ct.clientX, Ct.clientY);
        }
      }, rt = (Ct) => {
        Ct.pointerId === g && Et(!1);
      }, at = (Ct) => {
        Ct.pointerId === g && Et(!0);
      }, Bt = () => Et(!1), te = () => Et(!0), Ot = (Ct) => {
        Ct.key === "Escape" && q && (Ct.preventDefault(), Ct.stopPropagation(), Et(!0));
      };
      function Et(Ct) {
        if (!it && (it = !0, window.removeEventListener("pointermove", ht, !0), window.removeEventListener("pointerup", rt, !0), window.removeEventListener("pointercancel", at, !0), window.removeEventListener("keydown", Ot, !0), window.removeEventListener("blur", te), e.removeEventListener("lostpointercapture", Bt), q)) {
          const he = q;
          q = null, s = !0, setTimeout(() => {
            s = !1;
          }, 0), he.drop(Ct);
        }
      }
      window.addEventListener("pointermove", ht, !0), window.addEventListener("pointerup", rt, !0), window.addEventListener("pointercancel", at, !0), window.addEventListener("keydown", Ot, !0), window.addEventListener("blur", te), e.addEventListener("lostpointercapture", Bt);
    });
  }
  const dt = (oc = window.matchMedia) == null ? void 0 : oc.call(window, "(max-width: 620px)");
  function bt() {
    var e;
    return !!((e = window.matchMedia) != null && e.call(window, "(max-width: 620px)").matches);
  }
  const wt = (e) => e.charAt(0).toUpperCase() + e.slice(1), Pt = (e) => e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "movement";
  let Lt = null, kt = null;
  function Gt(e, r, s, p) {
    Rt(), o("sheetTitle").textContent = e;
    const g = o("sheetBody");
    g.innerHTML = "", g.appendChild(r), Lt = s || null, o("sheet").setAttribute("aria-hidden", "false"), o("sheetScrim").classList.add("open"), o("sheet").classList.add("open"), setTimeout(() => {
      if (!o("sheet").classList.contains("open") || !g.contains(r)) return;
      const T = p ? g.querySelector("input[data-f=url],input[data-f=name]") : g.querySelector("button,input,select");
      T == null || T.focus({ preventScroll: !0 });
    }, Da() ? 0 : 360);
  }
  function Rt() {
    const e = o("sheet");
    if (!e.classList.contains("open")) return;
    e.classList.remove("open"), o("sheetScrim").classList.remove("open"), e.setAttribute("aria-hidden", "true"), e.contains(n.activeElement) && n.activeElement.blur();
    const r = Lt;
    Lt = null, r == null || r(), setTimeout(ce, 0);
  }
  o("sheetScrim").addEventListener("click", Rt), o("sheet").addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), Rt());
  });
  function Ft(e, r) {
    const s = Zn(e, r.indexOf(e), {
      sheet: !0,
      isNew: !1,
      onSaved() {
        Rt(), Re(), We(wt(Pt(e)) + " updated");
      },
      onCancel: Rt,
      onHide() {
        e.hidden = !e.hidden, Rt(), Re(), We((e.hidden ? "Hidden: " : "Showing: ") + e.name);
      },
      onRemove() {
        Rt();
        const p = r.indexOf(e);
        p < 0 || (r.splice(p, 1), Re(), We("Removed " + e.name, { label: "Undo", run: () => {
          r.splice(Math.min(p, r.length), 0, e), Re();
        } }));
      }
    });
    Gt("Edit " + Pt(e), s, null, !1);
  }
  function Zt() {
    const e = document.createElement("div");
    e.className = "sheetChoices", [["movement", "activity", "Movement", "Name it, then drag it into place"], ["rest", "pause", "Rest", "A pause between movements"], ["video", "play", "Video", "Paste a YouTube link"]].forEach(([r, s, p, g]) => {
      const T = document.createElement("button");
      T.type = "button", T.className = "sheetChoice", T.innerHTML = '<span class="timeIcon" aria-hidden="true">' + Ua(s) + "</span><span><strong>" + p + "</strong><small>" + g + "</small></span>", T.addEventListener("click", () => Vt(r)), e.appendChild(T);
    }), Gt("Add to the move", e, null, !1);
  }
  function Vt(e) {
    kt && Bn();
    const r = Kn(e, o("strengthList")), s = Zn(r, -1, {
      sheet: !0,
      isNew: !0,
      onSaved() {
        Rt(), $e(r, e);
      },
      onCancel: Rt
    });
    Gt("New " + Pt(r), s, null, !0);
  }
  const Tt = o("workoutModal").querySelector(".modalStatic"), ee = { parent: Tt.parentNode, next: Tt.nextSibling };
  function ie() {
    const e = document.createElement("div");
    e.className = "sheetSetup", e.appendChild(Tt);
    const r = document.createElement("button");
    r.type = "button", r.className = "primary sheetDone", r.textContent = "Done", r.addEventListener("click", Rt), e.appendChild(r), Gt("Setup", e, () => {
      ee.parent.insertBefore(Tt, ee.next), Ge();
    }, !1);
  }
  function Ge() {
    var r, s;
    const e = o("setupSummaryName");
    e && (e.textContent = (((r = o("workoutNameInput")) == null ? void 0 : r.value) || "").trim() || ((s = Kt[we]) == null ? void 0 : s.name) || "Move", o("setupSummaryMeta").textContent = me.textContent);
  }
  o("setupSummary").addEventListener("click", ie), o("addFab").addEventListener("click", Zt);
  function Nt() {
    const e = o("strengthList");
    return Io(e) || e.closest(".exerciseScroller");
  }
  function Pe() {
    const e = o("strengthList").getBoundingClientRect(), r = (Nt() || o("strengthList")).getBoundingClientRect(), s = (kt == null ? void 0 : kt.ghost.offsetHeight) || 64;
    return { left: e.left, top: Math.max(r.top + 12, Math.min(r.bottom - s - 96, r.top + r.height * 0.55 - s / 2)), width: e.width, height: s };
  }
  function $e(e, r) {
    var q;
    const s = S(r, [e.name || x[r][0], "Drag into place"]);
    s.classList.add("overList", "hovering"), s.setAttribute("aria-label", (e.name || "New step") + ". Drag it into place in the list, or add it at the end.");
    const p = document.createElement("span");
    p.className = "addGhostActions", p.innerHTML = '<button class="hideBtn" type="button" data-a="end">Add at end</button><button class="hideBtn ghostDiscard" type="button" data-a="discard" aria-label="Discard ' + Ht(e.name) + '">✕</button>', s.appendChild(p), kt = { item: e, type: r, ghost: s };
    const g = ((q = n.querySelector(".moveList .moveRow:not(.editing)")) == null ? void 0 : q.offsetHeight) || 64;
    s.style.width = o("strengthList").getBoundingClientRect().width + "px", s.style.height = g + "px";
    const T = Pe(), B = La.querySelector(".modal").getBoundingClientRect().bottom;
    s.style.transform = "translate(" + T.left + "px," + B + "px)", s.getBoundingClientRect(), Da() || (s.classList.add("rising"), setTimeout(() => s.classList.remove("rising"), 650)), s.style.transform = "translate(" + T.left + "px," + T.top + "px)", p.querySelector("[data-a=end]").addEventListener("click", Bn), p.querySelector("[data-a=discard]").addEventListener("click", Xi), s.addEventListener("pointerdown", Fa);
  }
  function Fa(e) {
    if (!kt || e.target.closest("button") || e.button !== void 0 && e.button !== 0) return;
    e.preventDefault();
    const { item: r, ghost: s } = kt, p = e.pointerId;
    try {
      s.setPointerCapture(p);
    } catch {
    }
    s.classList.remove("hovering", "rising"), s.classList.add("held");
    const g = s.getBoundingClientRect(), T = Nt(), B = Z({
      ghost: s,
      origin: { left: g.left, top: g.top, width: g.width, height: g.height },
      sx: e.clientX,
      sy: e.clientY,
      scroller: T,
      column: o("strengthList").closest(".exerciseScroller,.createFlow") || T,
      rowLook: !0,
      home: Pe,
      onDrop: (Et, Ct, he) => {
        kt = null, C(s), Dn(r, Et, Ct, he);
      },
      onReturn: () => {
        s.classList.remove("held"), s.classList.add("hovering");
      }
    });
    let q = !1;
    const it = (Et) => {
      if (Et.pointerId === p) {
        if (Et.pointerType === "mouse" && Et.buttons === 0) {
          Ot(!1);
          return;
        }
        B.move(Et.clientX, Et.clientY);
      }
    }, ht = (Et) => {
      Et.pointerId === p && Ot(!1);
    }, rt = (Et) => {
      Et.pointerId === p && Ot(!0);
    }, at = () => Ot(!1), Bt = () => Ot(!0), te = (Et) => {
      Et.key === "Escape" && (Et.preventDefault(), Ot(!0));
    };
    function Ot(Et) {
      q || (q = !0, window.removeEventListener("pointermove", it, !0), window.removeEventListener("pointerup", ht, !0), window.removeEventListener("pointercancel", rt, !0), window.removeEventListener("keydown", te, !0), window.removeEventListener("blur", Bt), s.removeEventListener("lostpointercapture", at), B.drop(Et));
    }
    window.addEventListener("pointermove", it, !0), window.addEventListener("pointerup", ht, !0), window.addEventListener("pointercancel", rt, !0), window.addEventListener("keydown", te, !0), window.addEventListener("blur", Bt), s.addEventListener("lostpointercapture", at);
  }
  function Dn(e, r, s, p) {
    const g = ho(r);
    e.kind !== "rest" && e.kind !== "video" && (e.kind = g.kind, g.group && (!e.group || e.group === "Movement") && (e.group = g.group)), g.arr.splice(Math.max(0, Math.min(s, g.arr.length)), 0, e), mo(r.closest(".exerciseScroller,.createStepSlot") || r, () => Re()), $i(r.querySelector('.moveRow[data-id="' + e.id + '"]'), p), We(wt(Pt(e)) + " added");
  }
  function Bn() {
    var p;
    if (!kt) return;
    const { item: e, ghost: r } = kt;
    kt = null, C(r);
    const s = o("strengthList");
    Dn(e, s, ho(s).arr.length, 0), (p = s.querySelector('.moveRow[data-id="' + e.id + '"]')) == null || p.scrollIntoView({ block: "nearest", behavior: Da() ? "auto" : "smooth" });
  }
  function Xi() {
    if (!kt) return;
    const e = kt.ghost;
    kt = null, C(e), We("Discarded");
  }
  function Rn() {
    kt && (kt.ghost.remove(), kt = null);
  }
  window.addEventListener("resize", () => {
    if (kt != null && kt.ghost.classList.contains("hovering")) {
      const e = Pe();
      kt.ghost.style.width = e.width + "px", kt.ghost.style.transform = "translate(" + e.left + "px," + e.top + "px)";
    }
  }), (ic = dt == null ? void 0 : dt.addEventListener) == null || ic.call(dt, "change", () => {
    Rt(), kt && !bt() && Bn(), ci();
  });
  {
    const e = o("workoutModal").querySelector(".modal");
    e.addEventListener("scroll", () => {
      (e.scrollTop || e.scrollLeft) && (e.scrollTop = 0, e.scrollLeft = 0);
    });
  }
  function ce() {
    const e = o("workoutModal"), r = window.visualViewport;
    if (!e.classList.contains("open") || !bt()) {
      Oa();
      return;
    }
    const s = r ? r.offsetTop : 0, p = r ? r.offsetLeft : 0, g = r ? r.width : window.innerWidth, T = r ? r.height : window.innerHeight;
    Object.assign(e.style, { right: "auto", bottom: "auto", width: g + "px", height: T + "px", top: s + "px", left: p + "px" });
    const B = e.getBoundingClientRect();
    Math.abs(B.top - s) > 0.5 && (e.style.top = 2 * s - B.top + "px"), Math.abs(B.left - p) > 0.5 && (e.style.left = 2 * p - B.left + "px");
  }
  function Oa() {
    ["top", "left", "right", "bottom", "width", "height"].forEach((e) => o("workoutModal").style.removeProperty(e));
  }
  (rc = window.visualViewport) == null || rc.addEventListener("resize", ce), (sc = window.visualViewport) == null || sc.addEventListener("scroll", ce), window.addEventListener("resize", ce), window.addEventListener("scroll", ce, { passive: !0 }), window.addEventListener("orientationchange", () => setTimeout(ce, 250));
  function sn() {
    Qt.length > 0;
    const e = o("addMovementBtn"), r = o("addRestBtn");
    e && (e.innerHTML = ha + "<span>Add movement</span>"), r && (r.innerHTML = ha + "<span>Add rest</span>");
    const s = o("addVideoBtn");
    s && (s.innerHTML = ha + "<span>Add video</span>");
  }
  function ln() {
    const e = o("useGlobalTiming").checked, r = o("addMovementDuration"), s = o("addMovementUnit");
    r.disabled = e, s.disabled = e, r.parentElement.style.opacity = e ? ".38" : "1", o("globalTimingValue").textContent = "Use global timing · " + Ye(A.value);
    const p = o("useGlobalRestTiming").checked, g = o("addRestDuration"), T = o("addRestUnit");
    g.disabled = p, T.disabled = p, g.parentElement.style.opacity = p ? ".38" : "1", o("globalRestTimingValue").textContent = "Use global timing · " + Ye(I.value);
  }
  let pi = "movement";
  function Sr(e) {
    pi = e;
    const r = o("movementFields"), s = o("restFields");
    r.hidden = e !== "movement", s.hidden = e !== "rest", o("movementCreatorHeading").textContent = "Add movement", o("movementCreator").setAttribute("aria-label", "Create movement"), ln();
  }
  function $n() {
    Kt[we];
    const e = St ? !0 : o("useGlobalTiming").checked, r = e ? Number(A.value) : bn(
      o("addMovementDuration").value,
      o("addMovementUnit").value
    ), s = St ? !0 : o("useGlobalRestTiming").checked, p = s ? Number(I.value) : bn(
      o("addRestDuration").value,
      o("addRestUnit").value
    );
    if (pi === "rest") {
      const g = o("addRestTitle").value.trim() || "Rest", T = o("addRestGroup").value.trim() || "Rest";
      Qt.push({
        id: "rest-" + Date.now(),
        name: g,
        group: T,
        kind: "rest",
        hidden: !1,
        useGlobalTiming: s,
        duration: Math.max(5, p || Number(I.value))
      }), Re(), o("movementCreator").hidden = !0, o("addRestTitle").value = "Rest", o("addRestGroup").value = "Rest", We("Rest added"), St && (P("movements"), lt());
    } else {
      const g = o("addMovementInput").value.trim();
      if (!g) return;
      const T = o("addMovementGroup").value.trim() || "Movement";
      Qt.push({
        id: "movement-" + Date.now(),
        name: g,
        group: T,
        kind: "work",
        hidden: !1,
        useGlobalTiming: e,
        duration: Math.max(5, r || Number(A.value))
      }), o("addMovementInput").value = "", o("addMovementGroup").value = "", Re(), o("movementCreator").hidden = !0, We("Movement added"), St && (P("movements"), lt());
    }
    sn();
  }
  let Aa = null;
  function We(e, r) {
    const s = o("toast");
    s.innerHTML = "";
    const p = document.createElement("span");
    if (p.textContent = e, s.appendChild(p), r) {
      const g = document.createElement("button");
      g.type = "button", g.className = "toastAction", g.textContent = r.label, g.addEventListener("click", () => {
        r.run(), s.classList.remove("show", "withAction"), clearTimeout(Aa);
      }), s.appendChild(g);
    }
    s.classList.toggle("withAction", !!r), s.classList.add("show"), clearTimeout(Aa), Aa = setTimeout(() => s.classList.remove("show", "withAction"), r ? 5e3 : 2200);
  }
  const Zs = ["Terrible", "Poor", "Meh", "Okay", "Good", "Great"], gs = ["#6E63A8", "#5878A8", "#6F8B8A", "#5F9B72", "#D5A53E", "#D56B54"];
  function vs(e) {
    return Math.max(0, Math.min(5, Math.floor(Number(e) / 100 * 6)));
  }
  function ui(e, r) {
    return Zs[vs(r)];
  }
  function Yl(e) {
    return gs[vs(e)];
  }
  function Be(e) {
    return e.getFullYear() + "-" + String(e.getMonth() + 1).padStart(2, "0") + "-" + String(e.getDate()).padStart(2, "0");
  }
  function Xn() {
    return { morning: fe().morningTime || "08:00", evening: fe().eveningTime || "19:00" };
  }
  function go(e) {
    const [r, s] = String(e).split(":").map(Number);
    return (r || 0) * 60 + (s || 0);
  }
  function Ks(e) {
    const r = Xn();
    return e.getHours() * 60 + e.getMinutes() >= go(r.evening) ? "evening" : "morning";
  }
  function Cr(e, r) {
    return de.checkins.find((s) => s.date === e && s.slot === r);
  }
  function Tr(e) {
    return !!(e && e.mood != null && e.energy != null);
  }
  function vo() {
    const e = /* @__PURE__ */ new Date(), r = Be(e), s = Ks(e), p = Xn(), g = e.getHours() * 60 + e.getMinutes();
    return s === "morning" && g < go(p.morning) || Tr(Cr(r, s)) ? null : s;
  }
  const la = o("checkinModal"), bo = o("checkinTab"), $s = o("checkinBadge"), Jn = { mood: { input: o("moodInput"), fill: o("moodFill") }, energy: { input: o("energyLevelInput"), fill: o("energyLevelFill") } };
  function Ji(e) {
    const { input: r, fill: s } = Jn[e];
    s.style.width = r.value + "%", r.setAttribute("aria-valuetext", ui(e, r.value));
  }
  Object.keys(Jn).forEach((e) => Jn[e].input.addEventListener("input", () => Ji(e)));
  let Nn = null;
  function Xs() {
    const e = Xn(), r = /* @__PURE__ */ new Date(), s = r.getHours() * 60 + r.getMinutes();
    return s < go(e.morning) ? "Next check-in at " + e.morning : s < go(e.evening) ? "Next check-in at " + e.evening : "Next check-in tomorrow at " + e.morning;
  }
  function bs() {
    const e = Xn(), r = /* @__PURE__ */ new Date(), s = r.getHours() * 60 + r.getMinutes(), p = (g, T) => {
      const [B, q] = g.split(":").map(Number);
      return new Date(r.getFullYear(), r.getMonth(), r.getDate() + (T ? 1 : 0), B, q);
    };
    return s < go(e.morning) ? { date: p(e.morning), time: e.morning } : s < go(e.evening) ? { date: p(e.evening), time: e.evening } : { date: p(e.morning, !0), time: e.morning };
  }
  let Ar = null, ws = null;
  function Js() {
    if (vo()) {
      fi(), Ho();
      return;
    }
    const e = bs(), r = Math.max(0, Math.round((e.date - Date.now()) / 1e3)), s = Math.floor(r / 3600), p = Math.floor(r % 3600 / 60), g = r % 60;
    o("peekCountdown").textContent = s + ":" + String(p).padStart(2, "0") + ":" + String(g).padStart(2, "0"), o("peekAt").textContent = "Available at " + e.time;
  }
  function Zl() {
    Js(), bo.classList.add("peek"), clearInterval(ws), ws = setInterval(Js, 1e3), clearTimeout(Ar), Ar = setTimeout(fi, 6e3);
  }
  function fi() {
    bo.classList.remove("peek"), clearInterval(ws), clearTimeout(Ar);
  }
  function Qs() {
    const e = vo();
    if (!e) {
      bo.classList.contains("peek") ? fi() : Zl();
      return;
    }
    Nn = { date: Be(/* @__PURE__ */ new Date()), slot: e };
    const s = Cr(Nn.date, e), p = de.checkins.find((g) => Tr(g));
    Object.keys(Jn).forEach((g) => {
      Jn[g].input.value = (s == null ? void 0 : s[g]) ?? (p == null ? void 0 : p[g]) ?? 50, Ji(g);
    }), o("checkinTitle").textContent = e === "morning" ? "Morning check-in" : "Evening check-in", la.classList.add("open"), la.setAttribute("aria-hidden", "false"), requestAnimationFrame(() => Jn.mood.input.focus());
  }
  function hi() {
    la.classList.remove("open"), la.setAttribute("aria-hidden", "true"), Nn && (mi = Nn.date + "-" + Nn.slot);
    try {
      localStorage.setItem("move-assistant-dismissed", mi);
    } catch {
    }
    Nn = null, Ho();
  }
  function Kl() {
    if (!Nn) return;
    if (Tr(Cr(Nn.date, Nn.slot))) {
      hi();
      return;
    }
    const { date: e, slot: r } = Nn;
    let s = Cr(e, r);
    s || (s = { date: e, slot: r }, de.checkins.unshift(s), de.checkins = de.checkins.slice(0, 2e3)), s.mood = Number(Jn.mood.input.value), s.energy = Number(Jn.energy.input.value), s.scale = 100, s.at = (/* @__PURE__ */ new Date()).toISOString(), Ta(), d.fire("checkin", { slot: r, mood: s.mood, energy: s.energy, mood_label: ui("mood", s.mood), energy_label: ui("energy", s.energy) }), We((r === "morning" ? "Morning" : "Evening") + " check-in saved"), hi(), _r(), Qn(), lo(), Cn();
  }
  let mi = "";
  try {
    mi = localStorage.getItem("move-assistant-dismissed") || "";
  } catch {
  }
  function Ho() {
    const e = vo();
    $s.hidden = !e, bo.hidden = !e, e || fi(), bo.classList.toggle("due", !!e), bo.setAttribute("aria-label", e ? (e === "morning" ? "Morning" : "Evening") + " check-in is due" : Xs()), bo.title = e ? "Check in now" : Xs();
  }
  function Lr() {
    Ho();
    const e = vo();
    !e || la.classList.contains("open") || fe().checkinAutoOpen !== !1 && (o("app").classList.contains("house") || !It.home.classList.contains("active") || La.classList.contains("open") || mi !== Be(/* @__PURE__ */ new Date()) + "-" + e && Qs());
  }
  bo.addEventListener("click", Qs), o("checkinLater").addEventListener("click", hi), o("checkinSave").addEventListener("click", Kl), la.addEventListener("click", (e) => {
    e.target === la && hi();
  }), la.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), hi());
  }), setInterval(Lr, 3e4);
  function _r() {
    const e = Be(/* @__PURE__ */ new Date()), r = (s) => de.checkins.find((p) => p.date === e && p[s] != null);
    [["mood", "moodMeta"], ["energy", "energyLevelMeta"]].forEach(([s, p]) => {
      const g = r(s);
      o(p).textContent = g ? ui(s, g[s]) : "—";
    });
  }
  function Qn() {
    const e = o("feelCard");
    if (!e) return;
    const r = /* @__PURE__ */ new Date(), s = new Date(r.getFullYear(), r.getMonth(), r.getDate() - (r.getDay() + 6) % 7), p = [...Array(7)].map((ht, rt) => {
      const at = new Date(s.getFullYear(), s.getMonth(), s.getDate() + rt), Bt = Be(at), te = de.checkins.filter((Et) => Et.date === Bt), Ot = (Et) => {
        const Ct = te.map((he) => he[Et]).filter((he) => he != null);
        return Ct.length ? Ct.reduce((he, ve) => he + ve, 0) / Ct.length : null;
      };
      return { d: at, key: Bt, mood: Ot("mood"), energy: Ot("energy"), count: te.filter(Tr).length, future: at > r && Bt !== Be(r) };
    }), g = (ht) => {
      const rt = p.map((at) => at[ht]).filter((at) => at != null);
      return rt.length ? rt.reduce((at, Bt) => at + Bt, 0) / rt.length : null;
    }, T = g("mood"), B = g("energy"), q = (ht, rt) => '<div class="feelMeter"><div class="feelMeterTop"><span>' + ht + "</span><span>" + (rt == null ? "—" : Ht(ui("", rt))) + '</span></div><div class="feelTrack"><span style="width:' + (rt == null ? 0 : Math.max(4, rt)) + "%;background:" + (rt == null ? "transparent" : Yl(rt)) + '"></span></div></div>', it = p.filter((ht) => ht.mood != null && ht.energy != null).sort((ht, rt) => rt.mood + rt.energy - (ht.mood + ht.energy))[0];
    e.innerHTML = '<div class="feelTop"><div class="feelSummary"><div class="feelHeadline">' + (T == null ? "No check-ins yet" : Ht(ui("", (T + B) / 2))) + '</div><div class="weekCopy">' + (T == null ? "Your first check-in will appear here." : "on average this week" + (it ? " · best day " + Ht(new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(it.d)) : "")) + '</div></div></div><div class="feelDays">' + p.map(
      (ht) => '<div class="weekChip feelDay' + (ht.future ? " future" : "") + (ht.key === Be(r) ? " today" : "") + '"><div class="weekChipTop"><strong>' + Ht(new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(ht.d)) + "</strong>" + (ht.count >= 2 ? '<span class="weekTick">' + Ua("check") + "</span>" : '<span class="feelDots">' + "●".repeat(ht.count) + "</span>") + "</div>" + q("Mood", ht.mood) + q("Energy", ht.energy) + "</div>"
    ).join("") + "</div>";
  }
  const gi = o("upcomingCountSetting");
  gi.addEventListener("change", () => {
    zn = gi.value === "all" ? "all" : Number(gi.value), ko();
  });
  const Fo = o("tempoRevealBtn"), Er = o("tempoExperiment"), dn = o("tempoQuad"), vi = o("tempoDot"), $l = o("tempoEstimate"), Xl = o("tempoReadout");
  let bi = { x: 0.5, y: 0.5 }, Qi = !1, wo = { total: 20, work: 45, rest: 15 };
  function Dr(e, r, s, p) {
    const g = Math.max(r, Math.min(s, e));
    return Math.round((g - r) / p) * p + r;
  }
  function Jl(e, r) {
    const s = (e - 0.5) * 2, p = (r - 0.5) * 2, g = Dr(
      wo.total + s * 5 + p * 8,
      Number(E.min),
      Number(E.max),
      Number(E.step)
    ), T = Dr(
      wo.work + s * 10 + p * 8,
      Number(A.min),
      Number(A.max),
      Number(A.step)
    ), B = Dr(
      wo.rest + s * 6 + p * 6,
      Number(I.min),
      Number(I.max),
      Number(I.step)
    );
    return E.value = g, A.value = T, I.value = B, j.textContent = T + " sec", ct.textContent = B + " sec", Ga(), { total: g, work: T, rest: B };
  }
  function xs(e, r) {
    const s = e < 0.34 ? "Low" : e > 0.66 ? "Hard" : "Medium", p = r < 0.34 ? "Fast" : r > 0.66 ? "Slow" : "Balanced", g = Jl(e, r);
    Xl.textContent = s + " + " + p, $l.textContent = g.total + " min", dn.setAttribute("aria-valuetext", s + " and " + p + ", estimated " + g.total + " minutes");
  }
  function xo(e) {
    const r = dn.getBoundingClientRect(), s = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)), p = Math.max(0, Math.min(1, (e.clientY - r.top) / r.height));
    bi = { x: s, y: p }, vi.style.left = s * 100 + "%", vi.style.top = p * 100 + "%", xs(s, p);
  }
  Fo.addEventListener("click", () => {
    const e = Er.hidden;
    Er.hidden = !e, Fo.setAttribute("aria-expanded", e ? "true" : "false"), Fo.textContent = e ? "Now close this" : "Don’t try this!", e && (wo = {
      total: Number(E.value),
      work: Number(A.value),
      rest: Number(I.value)
    }, bi = { x: 0.5, y: 0.5 }, vi.style.left = "50%", vi.style.top = "50%", xs(bi.x, bi.y));
  }), n.querySelectorAll("[data-feedback-rating]").forEach((e) => e.addEventListener("click", () => {
    Number(e.dataset.feedbackRating), n.querySelectorAll("[data-feedback-rating]").forEach((r) => r.classList.toggle("selected", r === e));
  }));
  const tr = o("testingFeedbackForm"), ys = o("testingFeedbackThanks"), tl = o("testingFeedbackAgain");
  tr.addEventListener("submit", (e) => {
    e.preventDefault(), tr.hidden = !0, ys.hidden = !1, We("Feedback captured for prototype");
  }), tl.addEventListener("click", (e) => {
    e.preventDefault(), tr.reset(), n.querySelectorAll("[data-feedback-rating]").forEach((r) => r.classList.remove("selected")), ys.hidden = !0, tr.hidden = !1;
  }), dn.addEventListener("pointerdown", (e) => {
    var r;
    Qi = !0, xo(e);
    try {
      (r = dn.setPointerCapture) == null || r.call(dn, e.pointerId);
    } catch {
    }
  }), dn.addEventListener("pointermove", (e) => {
    Qi && xo(e);
  }), dn.addEventListener("pointerup", (e) => {
    Qi && (Qi = !1, xo(e), Re());
  }), dn.addEventListener("pointercancel", () => Qi = !1), dn.addEventListener("keydown", (e) => {
    let { x: r, y: s } = bi, p = !0;
    e.key === "ArrowLeft" ? r -= 0.05 : e.key === "ArrowRight" ? r += 0.05 : e.key === "ArrowUp" ? s -= 0.05 : e.key === "ArrowDown" ? s += 0.05 : p = !1, p && (e.preventDefault(), r = Math.max(0, Math.min(1, r)), s = Math.max(0, Math.min(1, s)), bi = { x: r, y: s }, vi.style.left = r * 100 + "%", vi.style.top = s * 100 + "%", xs(r, s), Re());
  });
  const La = o("workoutModal");
  let wi = null;
  function xi(e) {
    return e.map((r) => ({ ...r }));
  }
  function Ql() {
    const e = Kt[we];
    return {
      key: we,
      profile: e ? JSON.parse(JSON.stringify(e)) : null,
      warmup: xi(Te),
      strength: xi(Qt),
      cooldown: xi(Ea),
      total: Number(E.value),
      work: Number(A.value),
      rest: Number(I.value),
      rounds: Number(le.value) || 1
    };
  }
  function el(e = !1) {
    St = !!e, ye = null, na = null, Rt(), Rn(), wi = Ql(), o("moveEditorTitle").textContent = St ? "Create new move" : "Edit move", o("moveEditorSubtitle").textContent = "Build the sequence first, then set timing, then finish the move.", o("moveEditorSubtitle").hidden = !St, o("warmupRow").hidden = St, o("deleteMoveOpen").hidden = St;
    const r = o("createMoveOptions");
    r.hidden = !St;
    {
      const s = Kt[we];
      o("includeWarmupPreset").checked = !!(s != null && s.includeWarmup), o("includeCooldownPreset").checked = !!(s != null && s.includeCooldown);
    }
    if (er(), St) {
      o("useGlobalTiming").checked = !0, o("useGlobalRestTiming").checked = !0;
      const s = Kt[we];
      Po((s == null ? void 0 : s.preset) || "movement", !1);
    }
    o("movementCreator").hidden = !0, Sr("movement"), sn(), ln(), Er.hidden = !0, Fo.setAttribute("aria-expanded", "false"), Fo.textContent = "Don’t try this!", La.classList.toggle("createMode", St), La.querySelector(".modal").classList.toggle("createMode", St), La.classList.add("open"), La.setAttribute("aria-hidden", "false"), ce(), St && _t();
  }
  function td() {
    const e = Kt[we];
    return e != null && e.customSequence ? !!e.includeWarmup : !(e != null && e.warmupOff);
  }
  function er() {
    const e = td(), r = o("warmupSwitch");
    r.classList.toggle("on", e), r.setAttribute("aria-checked", String(e));
  }
  o("warmupSwitch").addEventListener("click", () => {
    const e = Kt[we];
    e && (e.customSequence ? (o("includeWarmupPreset").checked = !e.includeWarmup, Ki()) : (e.warmupOff = !e.warmupOff, Re()), er());
  });
  function ar() {
    Rt(), Rn(), Oa(), na = null, ye = null, La.classList.contains("createMode") && H(), La.classList.remove("createMode"), La.querySelector(".modal").classList.remove("createMode"), La.classList.remove("open"), La.setAttribute("aria-hidden", "true");
  }
  function Br() {
    if (!wi) return;
    const e = wi;
    e.profile && (Kt[e.key] = JSON.parse(JSON.stringify(e.profile))), we = e.key, Te = xi(e.warmup), Qt = xi(e.strength), Ea = xi(e.cooldown), E.value = e.total, A.value = e.work, I.value = e.rest, le.value = e.rounds || 1;
    const r = Kt[we];
    if (r) {
      n.querySelectorAll(".workoutPanel[data-workout]").forEach((p) => p.classList.toggle("active", p.dataset.workout === we));
      const s = n.querySelector(".workoutPanel.active");
      if (s) {
        const p = s.querySelector(".workoutName");
        p && (p.textContent = r.name);
        const g = s.querySelector(".panelCollapsedText");
        g && (g.textContent = r.name);
        const T = s.querySelector(".sourceTag");
        T && (T.textContent = r.source);
      }
      m.value = r.name;
    }
    Re();
  }
  o("cancelWorkoutEdit").addEventListener("click", () => {
    if (St) {
      const e = we;
      delete Kt[e], St = !1, ze = null, Oe(de.order.find((r) => Kt[r]) || Object.keys(Kt)[0]);
    } else
      Br();
    ar();
  }), o("saveWorkoutEdit").addEventListener("click", () => {
    Rt(), kt && Bn();
    const e = Kt[we], r = m.value.trim() || "New move";
    if (e && (e.name = r), xn(), ye = null, Re(), St && e)
      jn(we, e), n.querySelectorAll(".workoutPanel[data-workout]").forEach((s) => s.classList.toggle("active", s.dataset.workout === we)), St = !1, ze = null, de.order.includes(we) || de.order.push(we), We("Move created");
    else {
      const s = n.querySelector(".workoutPanel.active");
      if (s) {
        const p = s.querySelector(".workoutName");
        p && (p.textContent = r);
        const g = s.querySelector(".panelCollapsedText");
        g && (g.textContent = r);
      }
      We("Move saved");
    }
    wi = null, ar(), Ta();
  }), La.addEventListener("click", (e) => {
    if (e.target === La) {
      if (St) {
        const r = we;
        delete Kt[r], St = !1, ze = null, Oe(de.order.find((s) => Kt[s]) || Object.keys(Kt)[0]);
      } else
        Br();
      ar();
    }
  }), J(o("addMovementBtn"), "movement"), J(o("addRestBtn"), "rest"), J(o("addVideoBtn"), "video"), o("closeMovementCreator").addEventListener("click", () => {
    o("movementCreator").hidden = !0;
  }), o("useGlobalTiming").addEventListener("change", ln), o("useGlobalRestTiming").addEventListener("change", ln), n.querySelectorAll(".createPresetBtn").forEach((e) => e.addEventListener("click", () => {
    Po(e.dataset.movePreset, !0), Re();
  })), o("includeWarmupPreset").addEventListener("change", Ki), o("includeCooldownPreset").addEventListener("change", Ki), o("includeWarmupPreset").addEventListener("change", lt), o("includeCooldownPreset").addEventListener("change", lt), m.addEventListener("input", lt), m.addEventListener("input", Ge), o("confirmAddMovement").addEventListener("click", $n), o("confirmAddRest").addEventListener("click", $n), o("addMovementInput").addEventListener("keydown", (e) => {
    e.key === "Enter" && $n();
  });
  const yi = o("countdown"), Rr = o("countNum"), to = o("countdownPixelCanvas");
  let nr = null, Nr = "appear";
  class ed {
    constructor(r, s, p, g, T, B, q) {
      this.width = r.width, this.height = r.height, this.ctx = s, this.x = p, this.y = g, this.color = T, this.speed = (Math.random() * 0.8 + 0.1) * B, this.size = 0, this.sizeStep = Math.random() * 0.4, this.minSize = 0.5, this.maxSizeInteger = 2, this.maxSize = Math.random() * (this.maxSizeInteger - this.minSize) + this.minSize, this.delay = q, this.counter = 0, this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01, this.isIdle = !1, this.isReverse = !1, this.isShimmer = !1;
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
  let ki = [], aa = 1, al = 1;
  function Oo() {
    const e = parseFloat(getComputedStyle(o("app")).zoom);
    return Number.isFinite(e) && e > 0 ? e : 1;
  }
  function ad() {
    var ht;
    if (!to) return;
    const e = Oo(), r = Math.max(1, window.innerWidth / e), s = Math.max(1, window.innerHeight / e);
    aa = r, al = s;
    const p = Math.min(window.devicePixelRatio || 1, 2);
    to.width = Math.floor(r * p), to.height = Math.floor(s * p), to.style.width = r + "px", to.style.height = s + "px";
    const g = to.getContext("2d");
    g.setTransform(p, 0, 0, p, 0, 0);
    const T = ["#f2fbff", "#d4effc", "#a9e0fa", "#6cc8f6"], B = 12, q = (ht = window.matchMedia) == null ? void 0 : ht.call(window, "(prefers-reduced-motion: reduce)").matches, it = q ? 0 : 0.055;
    ki = [];
    for (let rt = 0; rt < r; rt += B)
      for (let at = 0; at < s; at += B) {
        const Bt = rt - r / 2, te = at - s / 2, Ot = Math.sqrt(Bt * Bt + te * te), Et = q ? 0 : Math.random() * 75 + Ot * 0.05, Ct = new ed({ width: r, height: s }, g, rt, at, T[Math.floor(Math.random() * T.length)], it, Et);
        Ct.maxSizeInteger = 4, Ct.maxSize = Math.random() * 3.2 + 0.8, Ct.sizeStep = 0.35 + Math.random() * 0.45, ki.push(Ct);
      }
  }
  function yo(e) {
    cancelAnimationFrame(nr), Nr = e;
    const r = to == null ? void 0 : to.getContext("2d");
    if (!r) return;
    function s() {
      r.clearRect(0, 0, aa, al);
      let p = !0;
      ki.forEach((g) => {
        g[Nr](), g.isIdle || (p = !1);
      }), Nr === "disappear" && p || (nr = requestAnimationFrame(s));
    }
    nr = requestAnimationFrame(s);
  }
  function Pr() {
    cancelAnimationFrame(nr), ad(), yo("appear"), setTimeout(() => yo("disappear"), 560);
  }
  window.addEventListener("resize", () => {
    yi.classList.contains("active") && Pr();
  });
  const or = o("pixelTrailCanvas"), Mi = or.getContext("2d");
  let Pn = !0, Wo = 0.7, Si = 600, ir = [], qo = null, cn = { x: 0, y: 0, ready: !1 };
  function ks() {
    const e = c.getBoundingClientRect(), r = Oo(), s = Math.min(window.devicePixelRatio || 1, 2), p = Math.max(1, e.width / r), g = Math.max(1, e.height / r);
    or.width = Math.max(1, Math.floor(p * s)), or.height = Math.max(1, Math.floor(g * s)), or.style.width = p + "px", or.style.height = g + "px", Mi.setTransform(s, 0, 0, s, 0, 0);
  }
  function nd(e, r) {
    if (!Pn) return;
    const s = performance.now();
    cn.ready || (cn = { x: e, y: r, ready: !0 });
    const p = 7;
    for (let g = 1; g <= p; g++) {
      const T = g / p;
      ir.push({
        x: cn.x + (e - cn.x) * T,
        y: cn.y + (r - cn.y) * T,
        born: s - (p - g) * 10
      });
    }
    cn = { x: e, y: r, ready: !0 };
  }
  function Ir(e) {
    if (qo = null, !b) return;
    if (!It.workout.classList.contains("active")) {
      qo = requestAnimationFrame(Ir);
      return;
    }
    const r = c.getBoundingClientRect(), s = Oo();
    Mi.clearRect(0, 0, r.width / s, r.height / s), Pn && (ir = ir.filter((g) => e - g.born < Si), Mi.fillStyle = o("app").classList.contains("light") ? "#03A9F4" : "#f4f4f4", ir.forEach((g) => {
      const T = (e - g.born) / Si, B = (1 - T) * Wo, q = Math.round(g.x / 14) * 14, it = Math.round(g.y / 14) * 14;
      Mi.globalAlpha = Math.max(0, B);
      const ht = 2 + 5 * (1 - T) * Wo;
      Mi.fillRect(q - ht / 2, it - ht / 2, ht, ht);
    }), Mi.globalAlpha = 1), qo = requestAnimationFrame(Ir);
  }
  c.addEventListener("pointermove", (e) => {
    const r = c.getBoundingClientRect(), s = Oo();
    nd((e.clientX - r.left) / s, (e.clientY - r.top) / s);
  }), c.addEventListener("pointerleave", () => cn.ready = !1), new ResizeObserver(ks).observe(c), ks(), qo = requestAnimationFrame(Ir);
  const da = o("movementRippleCanvas"), Ci = da.getContext("2d");
  let jo = !0, ma = null, _e = performance.now();
  function kn() {
    const e = da.parentElement.getBoundingClientRect(), r = Oo(), s = Math.max(1, e.width / r), p = Math.max(1, e.height / r), g = Math.min(window.devicePixelRatio || 1, 2);
    da.width = Math.max(1, Math.floor(s * g)), da.height = Math.max(1, Math.floor(p * g)), da.style.width = s + "px", da.style.height = p + "px", Ci.setTransform(g, 0, 0, g, 0, 0);
  }
  function Hr() {
    var e;
    return ra || ((e = Ut[ne]) == null ? void 0 : e.kind) === "rest";
  }
  function zo() {
    const e = Ut[ne];
    return Hr() ? 2200 : e ? e.kind === "warmup" || e.kind === "cooldown" ? 2400 : 1350 : 1600;
  }
  function Vo(e) {
    if (ma = null, !b) return;
    if (!It.workout.classList.contains("active")) {
      ma = requestAnimationFrame(Vo);
      return;
    }
    const r = da.parentElement.getBoundingClientRect(), s = Oo(), p = Math.max(1, r.width / s), g = Math.max(1, r.height / s);
    if (Ci.clearRect(0, 0, p, g), jo) {
      const T = zo(), B = (e - _e) % T / T, q = 15, it = Math.max(8, Math.round(q * g / Math.max(1, p))), ht = p / (q + 1), rt = g / (it + 1), at = p * 0.5, Bt = g * 0.52, te = Math.hypot(at, Bt), Et = o("app").classList.contains("light") ? "34,34,34" : "244,244,244";
      for (let Ct = 1; Ct <= it; Ct++)
        for (let he = 1; he <= q; he++) {
          const ve = he * ht, zt = Ct * rt, be = Math.hypot(ve - at, zt - Bt) / te, Ee = Hr(), se = Ee ? Math.exp(-Math.pow((be - (B * 0.82 + 0.08) % 1 * 1.18) * 5.5, 2)) : 0, ae = Math.exp(-Math.pow((be - B * 1.25) * 7, 2)), ua = Ee ? se : ae, _a = Ee ? 0.5 + 0.5 * Math.sin(B * Math.PI * 2 - be * 3) ** 2 : 0.35 + 0.65 * Math.sin(B * Math.PI * 2 - be * 5) ** 2, Ze = Ee ? 1.4 + ua * 4.2 * _a : 1.2 + ua * 5 * _a;
          Ci.beginPath(), Ci.arc(ve, zt, Ze, 0, Math.PI * 2), Ci.fillStyle = `rgba(${Et},${Ee ? 0.08 + ua * 0.48 : 0.05 + ua * 0.55})`, Ci.fill();
        }
    }
    ma = requestAnimationFrame(Vo);
  }
  new ResizeObserver(kn).observe(da.parentElement), kn(), ma = requestAnimationFrame(Vo);
  const pn = o("exerciseTitle"), Wa = o("exerciseMeta"), eo = o("stepLabel"), qe = o("digits"), rr = o("fill"), In = o("progress"), Fr = o("pause"), nl = o("nextName"), ol = o("nextMeta"), od = o("nextIcon"), Ti = o("skipNextSession");
  let Za = null;
  function qa(e) {
    for (let r = Math.max(0, e); r < Ut.length; r++)
      if (!Ut[r].sessionHidden) return r;
    return -1;
  }
  function Ai() {
    const e = Ut[ne];
    if (!e) return { name: "Complete", meta: "Move finished", icon: "check" };
    if (ra) {
      const p = qa(ne + 1), g = p >= 0 ? Ut[p] : null;
      return g ? { name: g.name, meta: Or(g), icon: Li(g) } : { name: "Complete", meta: "Move finished", icon: "check" };
    }
    if (e.rest > 0) return { name: "Rest", meta: e.rest + " sec · " + (e.roundBreakAfter ? "round " + (e.round + 1) + " next" : "recovery"), icon: "pause" };
    const r = qa(ne + 1), s = r >= 0 ? Ut[r] : null;
    return s ? { name: s.name, meta: Or(s), icon: Li(s) } : { name: "Complete", meta: "Move finished", icon: "check" };
  }
  function ja() {
    if (!Ut[ne]) return Ut.length;
    const r = qa(ne + 1);
    return r < 0 ? Ut.length : r + 1;
  }
  function Li(e) {
    return e.kind === "video" ? "play" : "clock";
  }
  function Or(e) {
    return e.kind === "video" ? "YouTube · " + Yn(e.duration) : e.group + " · " + e.duration + " sec";
  }
  function sr() {
    return Ut.length && Ut[Ut.length - 1].round || 1;
  }
  function Wr(e) {
    const r = Ut[e];
    if (!r) return "";
    const s = sr();
    if (s <= 1) return "Step " + (e + 1) + " of " + Ut.length;
    if (r.roundBreak) return "Round " + r.round + " of " + s + " · Rest";
    const p = Ut.filter((g) => g.round === r.round && !g.roundBreak).length;
    return "Round " + r.round + " of " + s + " · Step " + (r.roundIndex + 1) + " of " + p;
  }
  function qr() {
    return In.querySelector('[data-step="' + ne + '"]');
  }
  function id() {
    Ut[ne] && Number(In.dataset.round) !== (Ut[ne].round || 1) && zr(), [...In.children].forEach((e) => {
      const r = Number(e.dataset.step);
      e.classList.toggle("done", r < ne), e.classList.toggle("active", r === ne), e.classList.toggle("rewindable", r <= ne), e.disabled = r > ne, r === ne && e.style.setProperty("--segment-progress", "0%");
    }), Ut[ne] && (eo.textContent = Wr(ne), io());
  }
  function ao(e) {
    const r = Ut.indexOf(e);
    r < 0 || r <= ne || (e.sessionHidden = !e.sessionHidden, Go(), We((e.sessionHidden ? "Hidden " : "Included ") + e.name + " for this session"));
  }
  function ko() {
    const e = o("upcomingList");
    if (!e) return;
    e.innerHTML = "";
    const r = ja(), s = Ut.slice(r);
    (zn === "all" ? s : s.slice(0, Math.max(1, Number(zn) || 1))).forEach((g) => {
      const T = document.createElement("section");
      T.className = "upcomingCard" + (g.sessionHidden ? " sessionHidden" : "") + (Xo(g) ? " noMeta" : ""), T.innerHTML = '<div class="upcomingInfo"><div class="upcomingIcon" aria-hidden="true">' + Ua(Li(g)) + '</div><div><div class="upcomingName">' + Ht(g.name) + '</div><div class="upcomingMeta">' + Ht(Or(g)) + (sr() > 1 ? " · round " + g.round : "") + '</div></div></div><button class="skipSessionBtn" type="button">' + (g.sessionHidden ? "Include this session" : "Skip this session") + "</button>", T.querySelector(".skipSessionBtn").addEventListener("click", () => ao(g)), e.appendChild(T);
    });
  }
  function Go() {
    var r;
    const e = Ai();
    nl.textContent = e.name, ol.textContent = e.meta, od.innerHTML = Ua(e.icon);
    {
      const s = ra ? Ut[qa(ne + 1)] : ((r = Ut[ne]) == null ? void 0 : r.rest) > 0 ? { kind: "rest" } : Ut[qa(ne + 1)];
      n.querySelector(".nextCard").classList.toggle("noMeta", !!(s && Xo(s)));
    }
    if (Za = null, ra) {
      const s = qa(ne + 1);
      s >= 0 && (Za = Ut[s]);
    } else {
      const s = Ut[ne];
      if (s && s.rest > 0)
        Za = null;
      else {
        const p = qa(ne + 1);
        p >= 0 && (Za = Ut[p]);
      }
    }
    Ti && (Ti.hidden = !Za, Ti.textContent = Za != null && Za.sessionHidden ? "Include this session" : "Skip this session"), ko();
  }
  Ti.addEventListener("click", () => {
    Za && (Za.sessionHidden = !Za.sessionHidden, We((Za.sessionHidden ? "Hidden " : "Included ") + Za.name + " for this session"), Go());
  });
  let Mn = null, lr = null;
  function Mo(e, r = {}) {
    const s = Kt[we];
    d.fire(e, { move: (s == null ? void 0 : s.name) || "", move_id: we, ...r });
  }
  function il() {
    const e = Kt[we];
    Mn = { key: we, name: (e == null ? void 0 : e.name) || "Move", startedAt: Date.now(), active: 0 }, clearInterval(lr), lr = setInterval(() => {
      Mn && !Ha && Mn.active++;
    }, 1e3), Mo("started", { steps: Ut.length });
  }
  function Ms(e) {
    if (clearInterval(lr), !Mn) return;
    const r = Mn;
    Mn = null, Mo(e ? "completed" : "ended", { seconds: r.active }), !(r.active < 30) && (de.history.unshift({ id: "h-" + r.startedAt, move_id: r.key, name: r.name, start: new Date(r.startedAt).toISOString(), seconds: r.active, completed: e }), de.history = de.history.slice(0, 1e3), Ta(), lo(), Cn());
  }
  let un = null, Uo = null, Ka = !1;
  function _i() {
    return fe().sounds !== !1;
  }
  function rl() {
    if (_i())
      try {
        navigator.audioSession && (navigator.audioSession.type = "playback"), un = un || new (window.AudioContext || window.webkitAudioContext)(), un.state === "suspended" && un.resume();
      } catch {
        un = null;
      }
  }
  function ia(e, r, s, { to: p = e, vol: g = 0.25, type: T = "sine" } = {}) {
    const B = un.currentTime + r, q = un.createOscillator(), it = un.createGain();
    q.type = T, q.frequency.setValueAtTime(e, B), p !== e && q.frequency.exponentialRampToValueAtTime(p, B + s), it.gain.setValueAtTime(1e-4, B), it.gain.exponentialRampToValueAtTime(g, B + 0.01), it.gain.exponentialRampToValueAtTime(1e-4, B + s), q.connect(it).connect(un.destination), q.start(B), q.stop(B + s + 0.02);
  }
  const jr = {
    tick: () => ia(880, 0, 0.07, { vol: 0.18 }),
    move: () => {
      ia(660, 0, 0.12, { type: "triangle", vol: 0.3 }), ia(990, 0.13, 0.16, { type: "triangle", vol: 0.3 });
    },
    rest: () => ia(660, 0, 0.4, { to: 440, vol: 0.22 }),
    done: () => {
      ia(523, 0, 0.16, { type: "triangle" }), ia(659, 0.16, 0.16, { type: "triangle" }), ia(784, 0.32, 0.4, { type: "triangle" });
    }
  };
  function $a(e) {
    if (!(!_i() || !un))
      try {
        un.state === "suspended" && un.resume(), jr[e]();
      } catch {
      }
  }
  function no() {
    Ve >= 1 && Ve <= 3 && Ve !== Uo && (Uo = Ve, $a("tick"));
  }
  function sl() {
    rl(), M("workout"), rd();
    const e = qa(0);
    e >= 0 && Ut[e].kind === "video" && Cs(Ut[e]);
  }
  function dr() {
    Zr(), Ms(!1), clearInterval(ea), clearInterval(di), ra = !1, fn(!1), o("app").classList.remove("resting"), yi.classList.remove("active"), M("home");
  }
  function rd() {
    yi.classList.add("active");
    let e = 5;
    Rr.textContent = e, $a("tick"), requestAnimationFrame(Pr), clearInterval(di), di = setInterval(() => {
      e--, e > 0 ? (Rr.textContent = e, $a("tick"), Pr()) : (clearInterval(di), Rr.textContent = "GO", $a("move"), Ka = !0, Pr(), setTimeout(() => {
        yi.classList.remove("active"), cancelAnimationFrame(nr), Gr();
      }, 650));
    }, 1e3);
  }
  function zr() {
    var r;
    In.innerHTML = "";
    const e = ((r = Ut[Math.max(0, ne)] || Ut[0]) == null ? void 0 : r.round) || 1;
    In.dataset.round = e, Ut.forEach((s, p) => {
      if ((s.round || 1) !== e) return;
      const g = document.createElement("button");
      g.dataset.step = p, g.type = "button", g.className = "progressSegment", g.setAttribute("aria-label", "Go to " + s.name), g.addEventListener("click", () => {
        p <= ne && Vr(p);
      }), In.appendChild(g);
    });
  }
  function fn(e) {
    e = !!e;
    const r = Ha !== e;
    if (Ha = e, Fr.textContent = e ? "Resume" : "Pause", o("app").classList.toggle("paused", e), Ie && Me)
      try {
        e ? Me.pauseVideo() : Me.playVideo();
      } catch {
      }
    r && Mn && Mo(e ? "paused" : "resumed");
  }
  function Vr(e) {
    e < 0 || e >= Ut.length || e > ne || (clearInterval(ea), ra = !1, o("app").classList.remove("resting"), ne = e, fn(!1), ca(), ea = setInterval(ro, 1e3));
  }
  function Gr() {
    if (ne = qa(0), fn(!1), zr(), ne < 0) {
      pn.textContent = "No activities", Wa.textContent = "Open Edit and enable or add a movement", Wa.hidden = !1;
      return;
    }
    il(), ca(), clearInterval(ea), ea = setInterval(ro, 1e3);
  }
  const Ur = o("videoStage"), Yo = o("videoSound"), Ss = 0, oo = 1, sd = 2;
  let ll = 0, Ei = null, Se = null, Me = null, za = null, hn = 0, Zo = !1, Ie = null, Sn = null;
  function Yr() {
    var e;
    return (e = window.YT) != null && e.Player ? Promise.resolve(window.YT) : Ei || (Ei = new Promise((r, s) => {
      const p = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        try {
          p == null || p();
        } catch {
        }
      };
      const g = setInterval(() => {
        var B;
        (B = window.YT) != null && B.Player && (clearInterval(g), clearTimeout(T), r(window.YT));
      }, 100), T = setTimeout(() => {
        clearInterval(g), Ei = null, s(new Error("YouTube did not load"));
      }, 15e3);
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const B = document.createElement("script");
        B.src = "https://www.youtube.com/iframe_api", B.async = !0, B.onerror = () => {
          clearInterval(g), clearTimeout(T), Ei = null, s(new Error("YouTube did not load"));
        }, document.head.appendChild(B);
      }
    }), Ei);
  }
  function So() {
    return Se || (Se = Yr().then((e) => new Promise((r) => {
      const s = document.createElement("div");
      o("videoFrame").appendChild(s), Me = new e.Player(s, {
        width: "100%",
        height: "100%",
        playerVars: { playsinline: 1, rel: 0, iv_load_policy: 3, modestbranding: 1 },
        events: { onReady: () => r(Me), onStateChange: (p) => dl(p.data), onError: (p) => ga(p.data) }
      });
    })), Se.catch(() => {
      Se = null;
    }), Se);
  }
  function Cs(e) {
    !(e != null && e.videoId) || e.videoError || So().then((r) => {
      Ie || za === e.videoId || (za = e.videoId, hn = Number(e.start) || 0, Zo = !1, r.mute(), r.loadVideoById({ videoId: e.videoId, startSeconds: hn }));
    }).catch(() => {
    });
  }
  function ld() {
    const e = qa(ne + 1);
    e >= 0 && Ut[e].kind === "video" && Cs(Ut[e]);
  }
  function dl(e) {
    if (!Ie) {
      e === oo && !Zo && (Zo = !0, Me.pauseVideo(), Me.seekTo(hn, !0));
      return;
    }
    Ur.classList.toggle("playing", e === oo), Ut[ne] === Ie && performance.now() > ll && (e === oo && Ha ? fn(!1) : e === sd && !Ha && fn(!0)), e === oo && Ls(Ie.videoId, Me.getDuration()) && Ta(), e === Ss && cr();
  }
  function ga(e) {
    const r = Ie;
    if (!r) {
      za = null;
      return;
    }
    e === 101 || e === 150 ? (dd(r.videoId), We("That video can’t play outside YouTube, so it was skipped")) : We("The video couldn’t play, so it was skipped"), cr();
  }
  function Di(e) {
    if (o("app").classList.add("videoStep"), Yo.hidden = !0, Ie = e, clearTimeout(Sn), !e.videoId) {
      We("This video step has no link yet, so it was skipped"), setTimeout(() => cr(), 0);
      return;
    }
    So().then((r) => {
      if (Ie !== e) return;
      ll = performance.now() + 1500;
      const s = Number(e.start) || 0;
      za !== e.videoId ? (za = e.videoId, hn = s, r.loadVideoById({ videoId: e.videoId, startSeconds: s })) : (r.seekTo(s, !0), r.playVideo()), r.unMute(), Ha && r.pauseVideo(), Sn = setTimeout(() => {
        Ie !== e || Ha || (r.getPlayerState() !== oo ? (r.mute(), r.playVideo(), Yo.hidden = !1) : r.isMuted() && (Yo.hidden = !1));
      }, 1600);
    }).catch(() => {
      Ie === e && (We("YouTube didn’t load, so the video was skipped"), cr());
    });
  }
  function Ts() {
    if (!o("app").classList.contains("videoStep")) return;
    const e = n.querySelector(".workGrid"), r = n.querySelector(".sessionControlRow"), s = e.getBoundingClientRect().top, p = (r == null ? void 0 : r.offsetHeight) || 42, g = window.innerHeight - s - 16 - p - 84;
    e.style.setProperty("--theater-h", Math.max(240, Math.round(g)) + "px");
  }
  window.addEventListener("resize", Ts);
  function Zr() {
    clearTimeout(Sn);
    const e = Ie;
    if (Ie = null, o("app").classList.remove("videoStep"), Ur.classList.remove("playing"), Yo.hidden = !0, e && Me) {
      try {
        Me.pauseVideo();
      } catch {
      }
      za = null;
    }
  }
  function cr() {
    const e = Ie;
    !e || Ut[ne] !== e || (Zr(), clearInterval(ea), Co(), ea = setInterval(ro, 1e3));
  }
  Yo.addEventListener("click", () => {
    Me && (Me.unMute(), Me.playVideo()), Yo.hidden = !0;
  });
  function cl(e) {
    var p;
    const r = Number(e.start) || 0;
    if (e.useVideoLength === !1) return r + (Number(e.duration) || 300);
    const s = Me && Ie === e && Number((p = Me.getDuration) == null ? void 0 : p.call(Me)) || 0;
    return Number(e.end) || s || Number(e.videoDuration) || r + (Number(e.duration) || 300);
  }
  function As(e, r) {
    const s = Kt[we];
    [Te, Qt, Ea, s == null ? void 0 : s.warmup, s == null ? void 0 : s.strength, s == null ? void 0 : s.cooldown, s == null ? void 0 : s.sequence].forEach((p) => (Array.isArray(p) ? p : []).forEach((g) => {
      g && g.kind === "video" && g.videoId === e && r(g);
    }));
  }
  function Ls(e, r) {
    r = Math.round(Number(r) || 0);
    let s = !1;
    return e && r > 0 && As(e, (p) => {
      p.videoDuration !== r && (p.videoDuration = r, s = !0);
    }), s;
  }
  function dd(e) {
    As(e, (r) => {
      r.videoError = "embed";
    }), Ta();
  }
  function cd(e) {
    const r = e.videoId;
    if (!r) return;
    const s = () => {
      La.classList.contains("open") ? ye || Re() : (Re(), Ta());
    };
    fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + r)).then((p) => p.ok ? p.json() : Promise.reject(p.status)).then((p) => {
      e.videoId === r && (e.videoTitle = p.title || "", e.autoName && p.title && (e.name = p.title), s());
    }).catch((p) => {
      e.videoId === r && p === 401 && (e.videoError = "embed", s());
    }), pd(r).then((p) => {
      Ls(r, p) && s();
    }).catch((p) => {
      p === "embed" && e.videoId === r && (e.videoError = "embed", s());
    });
  }
  function pd(e) {
    return Yr().then((r) => new Promise((s, p) => {
      const g = document.createElement("div");
      g.className = "videoProbe", g.setAttribute("aria-hidden", "true");
      const T = document.createElement("div");
      g.appendChild(T), o("app").appendChild(g);
      let B = null, q = !1;
      const it = (at, Bt) => {
        q || (q = !0, clearTimeout(ht), setTimeout(() => {
          try {
            B == null || B.destroy();
          } catch {
          }
          g.remove();
        }, 0), Bt ? p(Bt) : s(at));
      }, ht = setTimeout(() => it(0), 2e4), rt = () => {
        var Bt;
        const at = Number((Bt = B == null ? void 0 : B.getDuration) == null ? void 0 : Bt.call(B)) || 0;
        return at > 0 && it(at), at > 0;
      };
      B = new r.Player(T, {
        width: 320,
        height: 180,
        videoId: e,
        playerVars: { playsinline: 1, mute: 1, controls: 0 },
        events: {
          onReady: () => {
            rt() || (B.mute(), B.playVideo());
          },
          onStateChange: () => rt(),
          onError: (at) => it(0, at.data === 101 || at.data === 150 ? "embed" : "error")
        }
      });
    }));
  }
  function ca() {
    ra = !1;
    const e = Ut[ne];
    o("app").classList.toggle("resting", e.kind === "rest"), e.kind === "video" ? Di(e) : Zr(), Ve = e.duration, Ro = e.duration, Uo = null, Ka ? Ka = !1 : $a(e.kind === "rest" ? "rest" : "move"), pn.textContent = e.name, Wa.textContent = e.group, Wa.hidden = !0, eo.textContent = Wr(ne), Mn && Mo("step", { name: e.name, group: e.group, kind: e.kind, step: ne + 1, of: Ut.length, round: e.round || 1, rounds: sr(), duration: e.duration }), Go(), id(), ld(), e.kind === "video" && setTimeout(Ts, 0);
  }
  function io() {
    var g;
    const e = ((g = Ut[ne]) == null ? void 0 : g.kind) === "video" && !ra, r = e && Ve >= 60;
    qe.textContent = r ? Yn(Ve) : Ve, qe.classList.toggle("long", r), e && (o("videoClock").textContent = Yn(Ve) + " left");
    const s = Ve / Ro * 100;
    rr.style.width = s + "%";
    const p = qr();
    if (p && !ra) {
      const T = 100 - s;
      p.style.setProperty("--segment-progress", T + "%");
    }
  }
  function ro() {
    var r, s;
    if (Ha) return;
    const e = Ut[ne];
    if ((e == null ? void 0 : e.kind) === "video" && !ra && Ie === e) {
      const p = Number((r = Me == null ? void 0 : Me.getCurrentTime) == null ? void 0 : r.call(Me)) || 0, g = Number(e.start) || 0, T = cl(e);
      Ro = Math.max(1, T - g), (p > g || ((s = Me == null ? void 0 : Me.getPlayerState) == null ? void 0 : s.call(Me)) === oo) && (Ve = Math.max(0, Math.ceil(T - p))), io(), no(), p > g && p >= T - 0.25 && cr();
      return;
    }
    Ve--, io(), no(), Ve <= 0 && (e.rest > 0 ? _s(e.rest) : Co());
  }
  function _s(e) {
    var s;
    ra = !0, o("app").classList.add("resting");
    const r = qr();
    r && r.style.setProperty("--segment-progress", "100%"), clearInterval(ea), Ve = e, Ro = e, Uo = null, $a("rest"), Mn && Mo("rest", { duration: e }), pn.textContent = "Rest", Wa.textContent = (s = Ut[ne]) != null && s.roundBreakAfter ? "Round " + (Ut[ne].round + 1) + " next" : "Recovery", Go(), io(), ea = setInterval(() => {
      Ha || (Ve--, io(), no(), Ve <= 0 && (clearInterval(ea), Co(), ea = setInterval(ro, 1e3)));
    }, 1e3);
  }
  function Co() {
    ra = !1;
    const e = qa(ne + 1);
    if (e >= 0)
      ne = e, ca();
    else {
      clearInterval(ea), Zr(), fn(!1), o("app").classList.remove("resting"), pn.textContent = "Complete", Wa.textContent = "Move finished", Wa.hidden = !1, qe.textContent = "✓";
      {
        const r = sr();
        eo.textContent = r > 1 ? r + " rounds done" : Ut.filter((s) => !s.roundBreak).length + " steps done";
      }
      Ms(!0), $a("done");
      {
        const r = Jr(7).reduce((s, p) => s + p.minutes, 0);
        Wa.textContent = "Move finished · " + r + " min in the last 7 days";
      }
      rr.style.width = "100%", Go();
    }
  }
  o("skipExercise").addEventListener("click", () => {
    ud(), fn(!1);
  });
  function ud() {
    clearInterval(ea);
    const e = Ut[ne];
    if (ra) {
      ra = !1, o("app").classList.remove("resting");
      const s = qa(ne + 1);
      s >= 0 ? (ne = s, ca(), ea = setInterval(ro, 1e3)) : Co();
      return;
    }
    if (e && e.rest > 0) {
      _s(e.rest);
      return;
    }
    const r = qa(ne + 1);
    r >= 0 ? (ne = r, ca(), ea = setInterval(ro, 1e3)) : Co();
  }
  o("restartSegment").addEventListener("click", () => {
    if (clearInterval(ea), fn(!1), ra) {
      const e = Ut[ne];
      Ve = e.rest, Ro = e.rest, Uo = null, $a("rest"), pn.textContent = "Rest", Wa.textContent = "Recovery", o("app").classList.add("resting"), Go(), io();
    } else
      ca();
    ea = setInterval(ra ? () => {
      Ha || (Ve--, io(), no(), Ve <= 0 && (clearInterval(ea), Co(), ea = setInterval(ro, 1e3)));
    } : ro, 1e3);
  });
  function pr(e, r, s, p) {
    let g = 0, T = null, B = !1;
    function q() {
      T && cancelAnimationFrame(T), T = null, g = 0, B = !1, r.style.width = "0%", e.classList.remove("holding");
    }
    function it(at) {
      if (!B) return;
      g || (g = at);
      const Bt = Math.min(1, (at - g) / s);
      if (r.style.width = Bt * 100 + "%", Bt >= 1) {
        B = !1, T && cancelAnimationFrame(T), T = null, r.style.width = "100%", setTimeout(() => r.style.width = "0%", 90), p();
        return;
      }
      T = requestAnimationFrame(it);
    }
    function ht(at) {
      var Bt;
      if (!(at && at.button !== void 0 && at.button !== 0)) {
        at == null || at.preventDefault(), q(), B = !0, e.classList.add("holding");
        try {
          (Bt = e.setPointerCapture) == null || Bt.call(e, at.pointerId);
        } catch {
        }
        T = requestAnimationFrame(it);
      }
    }
    function rt() {
      B && q();
    }
    e.addEventListener("pointerdown", ht), e.addEventListener("pointerup", rt), e.addEventListener("pointercancel", rt), e.addEventListener("lostpointercapture", rt), e.addEventListener("keydown", (at) => {
      (at.key === " " || at.key === "Enter") && !at.repeat && ht(at);
    }), e.addEventListener("keyup", (at) => {
      (at.key === " " || at.key === "Enter") && rt();
    });
  }
  const fd = o("endWorkout");
  pr(fd, o("holdEndFill"), 1500, dr);
  const Ko = o("deleteMoveConfirm");
  o("deleteMoveOpen").addEventListener("click", () => {
    Ko.classList.add("open"), Ko.setAttribute("aria-hidden", "false");
  }), o("deleteMoveCancel").addEventListener("click", () => {
    Ko.classList.remove("open"), Ko.setAttribute("aria-hidden", "true");
  });
  function pl() {
    const e = we, r = n.querySelector('.workoutPanel[data-workout="' + e + '"]');
    r && r.remove(), delete Kt[e], de.order = de.order.filter((p) => p !== e);
    let s = n.querySelector(".workoutPanel[data-workout]");
    if (!s) {
      const p = "custom-" + Date.now();
      Kt[p] = { name: "New move", source: "Custom routine", total: 20, work: 45, rest: 15, customSequence: !0, preset: "movement", sequence: [], strength: [] }, de.order.push(p), s = jn(p, Kt[p]);
    }
    Ko.classList.remove("open"), Ko.setAttribute("aria-hidden", "true"), wi = null, ar(), Oe(s.dataset.workout), Ta(), We("Move deleted");
  }
  pr(o("deleteMoveYes"), o("deleteMoveFill"), 1500, pl);
  const Es = n.querySelector(".rubberTabs"), $o = o("rubberIndicator");
  function Bi(e, r = !0) {
    if (!e || !Es || !$o) return;
    const s = Es.getBoundingClientRect(), p = e.getBoundingClientRect();
    $o.style.transition = r ? "left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease" : "none";
    const g = Oo();
    $o.style.left = (p.left - s.left) / g + Es.scrollLeft + "px", $o.style.width = p.width / g + "px", r && ($o.style.transform = "scaleX(1.08)", setTimeout(() => $o.style.transform = "scaleX(1)", 180));
  }
  n.querySelectorAll(".tab").forEach((e) => e.addEventListener("click", () => {
    e.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), n.querySelectorAll(".tab").forEach((r) => r.classList.remove("active")), n.querySelectorAll(".settingsPane").forEach((r) => r.classList.remove("active")), e.classList.add("active"), o(e.dataset.pane).classList.add("active"), Bi(e, !0);
  })), requestAnimationFrame(() => Bi(n.querySelector(".tab.active"), !1)), window.addEventListener("resize", () => Bi(n.querySelector(".tab.active"), !1));
  const Kr = o("pixelTrailToggle"), $r = o("rippleToggle"), Hn = o("trailStrength"), Ri = o("trailLife");
  function Ba(e, r) {
    fe()[e] = r, Ta();
  }
  const ul = ["Warm-up", "Movement", "Cooldown", "Rest", "Video"];
  function Ds(e) {
    return e.kind === "rest" ? "rest" : e.kind === "video" ? "video" : "g:" + String(e.group || "").trim().toLowerCase();
  }
  function Xo(e) {
    var r;
    return !!((r = fe().hideMeta) != null && r[Ds(e)]);
  }
  function fl() {
    const e = /* @__PURE__ */ new Map(), r = (s, p, g) => {
      if (!s) return;
      Array.isArray(s) && (s = { name: s[1], group: s[2], kind: "work" });
      const T = Ds(s);
      let B = e.get(T);
      B || (B = { key: T, label: T === "rest" ? "Rest" : T === "video" ? "Video" : String(s.group || "").trim() || "No type", kinds: /* @__PURE__ */ new Set(), moves: /* @__PURE__ */ new Set(), count: 0 }, e.set(T, B)), B.kinds.add(T === "rest" ? "Rest" : T === "video" ? "Video" : p), B.moves.add(g), B.count++;
    };
    return Object.values(Kt).forEach((s) => {
      const p = s.name || "Move";
      (s.warmup || (s.customSequence ? [] : Xt)).forEach((g) => r(g, "Warm-up", p)), (s.customSequence ? s.sequence || [] : s.strength || []).forEach((g) => r(g, g.presetRole === "warmup" ? "Warm-up" : g.presetRole === "cooldown" ? "Cooldown" : "Movement", p)), (s.cooldown || (s.customSequence ? [] : Ma)).forEach((g) => r(g, "Cooldown", p));
    }), [["rest", "Rest"], ["video", "Video"]].forEach(([s, p]) => {
      e.has(s) || e.set(s, { key: s, label: p, kinds: /* @__PURE__ */ new Set([p]), moves: /* @__PURE__ */ new Set(), count: 0 });
    }), [...e.values()].map((s) => ({ ...s, kind: s.kinds.has("Movement") ? "Movement" : [...s.kinds][0], moves: [...s.moves] })).sort((s, p) => ul.indexOf(s.kind) - ul.indexOf(p.kind) || s.label.localeCompare(p.label));
  }
  let Fn = "all";
  function Xr() {
    const e = o("metaSearch").value.trim().toLowerCase();
    return fl().filter((r) => (Fn === "all" || r.kind === Fn) && (!e || r.label.toLowerCase().includes(e) || r.moves.some((s) => s.toLowerCase().includes(e))));
  }
  function Ni() {
    const e = o("metaTableBody");
    if (!e) return;
    const r = fe().hideMeta || {}, s = Xr();
    e.innerHTML = s.length ? "" : '<tr class="metaEmpty"><td colspan="4">No types match</td></tr>', s.forEach((g) => {
      const T = !r[g.key], B = g.count ? (g.moves.length > 2 ? g.moves.slice(0, 2).join(", ") + " + " + (g.moves.length - 2) + " more" : g.moves.join(", ")) + " · " + g.count + " step" + (g.count === 1 ? "" : "s") : "Not used yet", q = document.createElement("tr");
      q.className = T ? "" : "off", q.innerHTML = '<td><div class="metaType">' + Ht(g.label) + '</div><div class="metaSub">' + Ht(g.kind + " · " + B) + '</div></td><td class="metaKindCol">' + Ht(g.kind) + '</td><td class="metaUsedCol">' + Ht(B) + '</td><td class="metaSwitchCol"><button class="switch' + (T ? " on" : "") + '" type="button" role="switch" aria-checked="' + T + '" aria-label="Second line for ' + Ht(g.label) + ' on phones"></button></td>', q.querySelector(".switch").addEventListener("click", () => ur([g.key], T)), e.appendChild(q);
    });
    const p = s.filter((g) => r[g.key]).length;
    o("metaCount").textContent = s.length ? s.length + " type" + (s.length === 1 ? "" : "s") + (p ? " · " + p + " hidden on phones" : "") : "";
  }
  function ur(e, r) {
    const s = { ...fe().hideMeta || {} };
    e.forEach((p) => {
      r ? s[p] = !0 : delete s[p];
    }), Ba("hideMeta", s), Ni(), ci(), Go();
  }
  o("metaSearch").addEventListener("input", Ni), o("metaKinds").querySelectorAll(".kindChip").forEach((e) => e.addEventListener("click", () => {
    Fn = e.dataset.kind, o("metaKinds").querySelectorAll(".kindChip").forEach((r) => r.classList.toggle("active", r === e)), Ni();
  })), o("metaHideAll").addEventListener("click", () => ur(Xr().map((e) => e.key), !0)), o("metaShowAll").addEventListener("click", () => ur(Xr().map((e) => e.key), !1));
  const Pi = { feel: !0, steps: !0, mood: !0, energyLevel: !0, weather: !0, ...fe().toggles || {} };
  function va() {
    n.querySelectorAll("[data-toggle]").forEach((s) => s.classList.toggle("on", Pi[s.dataset.toggle] !== !1)), n.querySelector(".feelSection").hidden = !0, [["steps", "stepsRow"], ["mood", "moodRow"], ["energyLevel", "energyLevelRow"]].forEach(([s, p]) => {
      o(p).hidden = Pi[s] === !1;
    });
    const e = ["steps", "mood", "energyLevel"].some((s) => Pi[s] !== !1);
    n.querySelector(".activityCard").hidden = !e, o("weatherCard").hidden = !0;
    const r = n.querySelector("#homeView .grid");
    r.classList.toggle("noActivity", !e), r.classList.toggle("noWeather", !0);
  }
  n.querySelectorAll("[data-toggle]").forEach((e) => e.addEventListener("click", () => {
    Pi[e.dataset.toggle] = Pi[e.dataset.toggle] === !1, va(), Ba("toggles", { ...Pi });
  })), va();
  function hd() {
    Kr.classList.toggle("on", Pn), $r.classList.toggle("on", jo), Hn.value = Math.round(Wo * 100), o("trailStrengthValue").textContent = Hn.value + "%", Ri.value = Si, o("trailLifeValue").textContent = Ri.value + " ms";
  }
  fe().trailEnabled !== void 0 && (Pn = fe().trailEnabled), fe().rippleEnabled !== void 0 && (jo = fe().rippleEnabled), fe().trailStrength !== void 0 && (Wo = fe().trailStrength), fe().trailMaxAge !== void 0 && (Si = fe().trailMaxAge), hd();
  const fr = o("soundsToggle");
  fr.classList.toggle("on", _i()), fr.addEventListener("click", () => {
    Ba("sounds", !_i()), fr.classList.toggle("on", _i()), _i() && (rl(), $a("move"));
  }), Kr.addEventListener("click", () => {
    Pn = !Pn, Kr.classList.toggle("on", Pn), Pn || (ir = []), Ba("trailEnabled", Pn);
  }), $r.addEventListener("click", () => {
    jo = !jo, $r.classList.toggle("on", jo), Ba("rippleEnabled", jo);
  }), Hn.addEventListener("input", () => {
    Wo = Number(Hn.value) / 100, o("trailStrengthValue").textContent = Hn.value + "%";
  }), Hn.addEventListener("change", () => Ba("trailStrength", Wo)), Ri.addEventListener("input", () => {
    Si = Number(Ri.value), o("trailLifeValue").textContent = Ri.value + " ms";
  }), Ri.addEventListener("change", () => Ba("trailMaxAge", Si)), gi.addEventListener("change", () => Ba("upcomingCount", zn));
  function hl(e) {
    n.querySelectorAll(".themeBtn").forEach((s) => s.classList.toggle("active", s.dataset.theme === e));
    const r = e === "light";
    o("app").classList.toggle("light", r), d.setLight(r), Tn(n);
  }
  hl(fe().theme || "dark"), n.querySelectorAll(".themeBtn").forEach((e) => e.addEventListener("click", () => {
    hl(e.dataset.theme), Ba("theme", e.dataset.theme);
  }));
  const Xa = { steps: null, weather: null, ...fe().entities || {} };
  let pa = null, re = {};
  function ml(e) {
    const r = Object.values(e).filter((q) => q.entity_id.startsWith("sensor.") || q.entity_id.startsWith("input_number.")), s = (q) => q.attributes.friendly_name || q.entity_id, p = r.filter((q) => /step/i.test(q.entity_id) || /step/i.test(s(q)) || ["steps", "step"].includes(String(q.attributes.unit_of_measurement || "").toLowerCase())), g = r.filter((q) => !p.includes(q)), T = (q, it) => s(q).localeCompare(s(it)), B = (q, it) => /health_steps/.test(it.entity_id) - /health_steps/.test(q.entity_id) || T(q, it);
    return { suggested: p.sort(B), rest: g.sort(T), label: s };
  }
  function Ii(e) {
    const r = o("stepsEntity");
    if (!r || r.matches(":focus")) return;
    const { suggested: s, rest: p, label: g } = ml(e), T = (it) => '<option value="' + Ht(it.entity_id) + '">' + Ht(g(it)) + "</option>";
    r.innerHTML = '<option value="">Not connected</option>' + (s.length ? '<optgroup label="Suggested">' + s.map(T).join("") + "</optgroup>" : "") + (p.length ? '<optgroup label="All sensors">' + p.map(T).join("") + "</optgroup>" : ""), r.value = Xa.steps || "";
    const B = o("stepsStatus"), q = Xa.steps && e[Xa.steps];
    B.textContent = q ? "Connected · " + g(q) : B.dataset.empty;
  }
  o("stepsEntity").addEventListener("change", () => {
    Xa.steps = o("stepsEntity").value || null, Ba("entities", { ...Xa }), re = {}, Ns(), pa && (Ii(pa), Rs(pa));
  });
  function Bs(e, r = 0) {
    return new Intl.NumberFormat(void 0, { maximumFractionDigits: r }).format(e);
  }
  function so() {
    const e = Xa.steps && (pa == null ? void 0 : pa[Xa.steps]), r = Number(e == null ? void 0 : e.state);
    return Number.isFinite(r) ? r : null;
  }
  function Rs(e) {
    var p;
    const r = Xa.steps, s = r ? Number((p = e[r]) == null ? void 0 : p.state) : NaN;
    o("stepsMeta").textContent = r ? Number.isFinite(s) ? Bs(s) : "—" : "Set up in Settings";
  }
  let gl = 0;
  async function Ns() {
    const e = Xa.steps;
    if (!e || !d.ws) return;
    gl = Date.now();
    const r = /* @__PURE__ */ new Date(), s = new Date(r.getFullYear(), r.getMonth(), r.getDate() - 30);
    try {
      const p = await d.ws({ type: "recorder/statistics_during_period", start_time: s.toISOString(), end_time: r.toISOString(), statistic_ids: [e], period: "day", types: ["max"] }), g = (p == null ? void 0 : p[e]) || [], T = {};
      if (g.forEach((B) => {
        Number.isFinite(B.max) && (T[Be(new Date(B.start))] = B.max);
      }), !Object.keys(T).length) {
        const B = await d.ws({ type: "history/history_during_period", start_time: s.toISOString(), end_time: r.toISOString(), entity_ids: [e], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        ((B == null ? void 0 : B[e]) || []).forEach((q) => {
          const it = Number(q.s ?? q.state), ht = q.lu ? q.lu * 1e3 : Date.parse(q.last_updated || q.last_changed);
          if (!Number.isFinite(it) || !ht) return;
          const rt = Be(new Date(ht));
          T[rt] = Math.max(T[rt] || 0, it);
        });
      }
      re = T, Cn();
    } catch {
    }
  }
  function lo() {
    Cn();
  }
  lo(), setInterval(() => {
    lo(), Qn(), Ho();
  }, 10 * 60 * 1e3);
  function Jr(e) {
    const r = {}, s = {};
    de.history.forEach((B) => {
      const q = Be(new Date(B.start));
      r[q] = (r[q] || 0) + (B.seconds || 0) / 60, s[q] = (s[q] || 0) + 1;
    });
    const p = /* @__PURE__ */ new Date(), g = Be(p), T = [];
    for (let B = e - 1; B >= 0; B--) {
      const q = new Date(p.getFullYear(), p.getMonth(), p.getDate() - B), it = Be(q), ht = de.checkins.filter((at) => at.date === it), rt = (at) => {
        const Bt = ht.map((te) => te[at]).filter(Boolean);
        return Bt.length ? Bt.reduce((te, Ot) => te + Ot, 0) / Bt.length : null;
      };
      T.push({
        key: it,
        date: q,
        minutes: Math.round(r[it] || 0),
        moves: s[it] || 0,
        steps: it === g && so() != null ? so() : re[it] ?? null,
        mood: rt("mood"),
        energy: rt("energy")
      });
    }
    return T;
  }
  function Qr(e) {
    let r = e.length - 1;
    e[r] && !e[r].minutes && r--;
    let s = 0;
    for (; r >= 0 && e[r].minutes > 0; )
      s++, r--;
    return s;
  }
  function Cn() {
    const e = o("insightCard");
    if (!e) return;
    const r = Jr(30), s = Qr(r), p = r.reduce((ht, rt) => ht + rt.minutes, 0), g = /* @__PURE__ */ new Date(), T = Be(g), B = Be(new Date(g.getFullYear(), g.getMonth(), g.getDate() - (g.getDay() + 6) % 7)), q = r.filter((ht) => ht.key >= B && ht.key <= T).reduce((ht, rt) => ht + rt.minutes, 0), it = (ht, rt, at) => '<div class="activityRow"><div class="activityRowIcon" aria-hidden="true">' + ht + '</div><div><div class="activityRowName">' + Ht(rt) + '</div><div class="activityRowMeta">' + Ht(at) + "</div></div></div>";
    e.innerHTML = '<div class="activityHeader"><div class="activityIcon" aria-hidden="true">' + Ua("move") + '</div><div class="activityTitle">Movement</div></div><div class="activityRows jointRows">' + it(Ua("clock"), "This week", q + " min") + it(Ua("streak"), "Streak", s + " day" + (s === 1 ? "" : "s")) + it(Ua("calendar"), "30 days", p + " min") + "</div>";
  }
  const ts = {
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
  }, Ps = (e) => e === "sunny" ? "clear" : e === "clear-night" ? "night" : e === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(e) ? "rain" : ["snowy", "snowy-rainy"].includes(e) ? "snow" : "cloudy", Jo = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, To = {
    s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
    l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
    sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
    lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
  };
  let es = 0;
  const hr = (e, r) => '<path class="' + r + '" d="' + e + '"/>', vl = (e, r) => ' style="animation-delay:-' + Math.round(e * 137 % r) + 'ms"', Ra = (e, r, s, p) => {
    const g = s * 0.2687;
    return '<path class="wxTwinkle" fill="#fff"' + (p < 1 ? ' opacity="' + p + '"' : "") + vl(e, 2400) + ' d="M' + e + " " + (r - s) + "L" + (e + g) + " " + (r - g) + "L" + (e + s) + " " + r + "L" + (e + g) + " " + (r + g) + "L" + e + " " + (r + s) + "L" + (e - g) + " " + (r + g) + "L" + (e - s) + " " + r + "L" + (e - g) + " " + (r - g) + 'Z"/>';
  }, as = ([e, r, s], p) => '<path class="wxMoonPath" d="' + e + '" fill="url(#' + p + ')"/><defs><linearGradient id="' + p + '" x1="0" y1="' + r + '" x2="0" y2="' + s + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', bl = (e, r) => r ? '<circle class="wxSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wxSunDisc" cx="23" cy="23" r="17" fill="url(#' + e + ')"/><defs><linearGradient id="' + e + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', md = (e) => (e ? ["29.35", "43.04", "56.74"].map((r, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" x="' + r + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + r + ' 60.65)"/></g>') : [19, 26, 33].map((r, s) => '<g class="wxDrop" style="animation-delay:-' + s * 317 + 'ms"><rect class="wxAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + r + ' 38)"/></g>')).join(""), gd = (e) => (e ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([r, s], p) => '<circle class="wxFlake" style="animation-delay:-' + p * 640 + 'ms" cx="' + r + '" cy="' + s + '" r="' + (e ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
  function Is(e, r, s, p) {
    return e === "clear" ? r ? as(s ? To.l : To.s, p) + (s ? Ra(70, 20, 5.83, 1) + Ra(78.33, 41.67, 3.75, 0.8) + Ra(60, 71.67, 3.33, 0.6) : Ra(42, 12, 3.5, 1) + Ra(47, 25, 2.25, 0.8) + Ra(36, 43, 2, 0.6)) : bl(p, s) : e === "partly" ? (r ? as(s ? To.lp : To.sp, p) : s ? '<circle class="wxSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wxSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + hr(s ? Jo.lp : Jo.sp, r ? "wxCloudLight" : "wxBright") + (r ? s ? Ra(73.33, 16.67, 4.17, 0.9) : Ra(44, 10, 2.5, 0.9) : "") : e === "cloudy" ? hr(s ? Jo.lc : Jo.s, r ? "wxCloudLight" : "wxBright") + (r ? s ? Ra(15, 15, 3.75, 0.8) + Ra(76.67, 13.33, 2.92, 0.6) : Ra(9, 9, 2.25, 0.8) + Ra(46, 8, 1.75, 0.6) : "") : hr(s ? Jo.lr : Jo.s, "wxCloudLight") + (e === "rain" ? md(s) : gd(s));
  }
  const vd = () => {
    var e;
    return ((e = pa == null ? void 0 : pa["sun.sun"]) == null ? void 0 : e.state) === "below_horizon";
  };
  let Ja = fe().weatherStyle || "bitmap", wl = fe().weatherLayout === "strip" ? "strip" : "tiles", bd = fe().weatherMotion !== !1;
  const Qo = () => bd && !Da(), Hi = /* @__PURE__ */ new Map(), Hs = 700, xl = (e) => {
    const [r, s] = e.split("/");
    return { k: r === "fog" ? "cloudy" : r === "storm" ? "rain" : r, night: s === "night" };
  };
  function ti(e, r, s, p = Ja, g, T) {
    let B = Ps(e);
    const q = B === "night" || (T != null ? !!T : !!s && vd());
    B === "night" && (B = "clear");
    const it = r ? 90 : 54, ht = Ul(e, q), rt = performance.now();
    let at = g ? Hi.get(g) : null;
    if (g && !at ? Hi.set(g, at = { key: ht, t0: -1e9 }) : at && at.key !== ht && (at.fromKey = at.key, at.from = at.last || null, at.key = ht, at.t0 = rt), p !== "smooth") return '<span class="wxIcon pixels' + (r ? " large" : "") + '" aria-hidden="true"><canvas data-wx="' + ht + '"' + (g ? ' data-wx-slot="' + g + '"' : "") + ' data-wx-style="' + p + '" data-wx-size="' + it + '"></canvas></span>';
    let Bt = "";
    if (at && rt - at.t0 < Hs && (Qo() || Da())) {
      const te = xl(at.fromKey);
      Bt = '<span class="wxLayer wxOut ' + te.k + (te.night ? " night" : "") + '" style="animation-delay:' + Math.round(at.t0 - rt) + 'ms"><svg viewBox="0 0 ' + it + " " + it + '">' + Is(te.k, te.night, r, "wxg" + ++es) + "</svg></span>";
    }
    return '<span class="wxIcon ' + B + (q ? " night" : "") + (r ? " large" : "") + '" aria-hidden="true"><svg viewBox="0 0 ' + it + " " + it + '">' + Is(B, q, r, "wxg" + ++es) + "</svg>" + Bt + "</span>";
  }
  function Fi() {
    const e = o("app"), r = getComputedStyle(e), s = (q) => r.getPropertyValue(q).trim(), p = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--color-accent-primary"]].forEach(([q, it]) => {
      s(it) && (p[q] = s(it));
    });
    const g = s("--color-text-primary") || "#f1f1f1", T = s("--color-bg-card") || "#222222", B = e.classList.contains("light");
    return { colors: p, ink: B ? g : T, paper: B ? T : g };
  }
  function Tn(e, r = performance.now()) {
    const s = e.querySelectorAll("canvas[data-wx]");
    if (!s.length) return;
    const p = Fi(), g = Qo(), T = Da();
    s.forEach((B) => {
      var at;
      const q = B.dataset.wx, it = B.dataset.wxSlot ? Hi.get(B.dataset.wxSlot) : null;
      let ht = Vd(q, p.colors);
      if (it && it.key === q) {
        const Bt = (r - it.t0) / Hs;
        Bt < 1 && (g || T) && (ht = Zp(it.from || Vd(it.fromKey, p.colors), ht, Math.max(0, Bt), p.colors, T)), it.last = ht;
      }
      const rt = dp(ht, { size: Number(B.dataset.wxSize) || 54, px: 2, oneBit: B.dataset.wxStyle === "onebit", colors: p.colors, ink: p.ink, paper: p.paper, clock: r, idle: g });
      B.width !== rt.w && (B.width = rt.w), B.height !== rt.h && (B.height = rt.h), (at = B.getContext("2d")) == null || at.putImageData(new ImageData(rt.data, rt.w, rt.h), 0, 0);
    });
  }
  let ns = null, yl = -1;
  function Fs(e) {
    if (ns = null, !b) return;
    const r = Qo(), s = Math.floor(e / 100), p = [...Hi.values()].some((it) => e - it.t0 < Hs), g = [...a.values()].some((it) => e - it.t0 < it.dur), T = It.home.classList.contains("active"), B = N.classList.contains("open"), q = r && Ja === "smooth" && (B || T && wl === "strip");
    !document.hidden && (p || g || q || r && s !== yl) && (yl = s, T && (Tn(o("weatherCard"), e), f(o("weatherCard"), e)), B && (Tn(N, e), f(N, e))), (r || p || g) && (ns = requestAnimationFrame(Fs));
  }
  function Ao() {
    o("app").classList.toggle("wxMotion", Qo()), !ns && b && (ns = requestAnimationFrame(Fs));
  }
  let os = [];
  const Xe = 36e5, mr = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]);
  function On() {
    const e = /* @__PURE__ */ new Date(), r = (T, B) => new Date(e.getFullYear(), e.getMonth(), e.getDate() + T, B), s = [], p = [], g = [...Array(6)].map((T, B) => {
      const q = r(B, 6), it = r(B, 18), ht = r(B + 1, 6), rt = os.find((Bt) => Be(new Date(Bt.datetime)) === Be(q)), at = (Bt, te, Ot) => {
        const Et = s.filter((ve) => ve.t >= +Bt && ve.t < +te);
        if (Et.length) {
          const ve = {};
          return Et.forEach((zt) => {
            ve[zt.c] = (ve[zt.c] || 0) + (mr.has(zt.c) ? 2 : 1);
          }), Object.entries(ve).sort((zt, be) => be[1] - zt[1])[0][0];
        }
        const Ct = p.find((ve) => {
          const zt = +new Date(ve.datetime);
          return zt >= +Bt - 3 * Xe && zt < +te && (ve.is_daytime == null || !!ve.is_daytime == !Ot);
        });
        if (Ct) return Ct.condition;
        const he = (rt == null ? void 0 : rt.condition) || "cloudy";
        return Ot && he === "sunny" ? "clear-night" : he;
      };
      return { start: +q, end: +ht, day: at(q, it, !1), night: at(it, ht, !0), hi: Number(rt == null ? void 0 : rt.temperature), lo: Number(rt == null ? void 0 : rt.templow) };
    });
    return { days: g, hours: s, start: g[0].start, end: g[5].end };
  }
  const Os = (e, r) => {
    const s = e.days.findIndex((g) => r < g.end);
    if (s < 0) return 1;
    const p = e.days[s];
    return Math.max(0, (s + (r - p.start) / (p.end - p.start)) / 6);
  }, kl = (e, r) => {
    const s = Math.max(0, Math.min(0.99999, r)) * 6, p = Math.floor(s), g = e.days[p];
    return g.start + (s - p) * (g.end - g.start);
  };
  function is(e, r) {
    const s = Math.max(0, e.days.findIndex((it) => r < it.end)), p = e.days[s], g = (r - p.start) / (p.end - p.start) >= 0.5;
    let T = g ? p.night : p.day, B = NaN;
    const q = e.hours;
    if (q.length && r >= q[0].t - Xe && r <= q[q.length - 1].t + Xe) {
      let it = q.findIndex((at) => at.t > r);
      it < 0 && (it = q.length);
      const ht = q[Math.max(0, it - 1)], rt = q[Math.min(q.length - 1, it)];
      T = ht.c || T, B = rt.t > ht.t ? ht.temp + (rt.temp - ht.temp) * Math.max(0, Math.min(1, (r - ht.t) / (rt.t - ht.t))) : ht.temp;
    }
    if (!Number.isFinite(B)) {
      const it = [];
      if (e.days.forEach((ht) => {
        Number.isFinite(ht.lo) && it.push([ht.start - Xe, ht.lo]), Number.isFinite(ht.hi) && it.push([ht.start + 9 * Xe, ht.hi]);
      }), it.length) {
        B = r <= it[0][0] ? it[0][1] : it[it.length - 1][1];
        for (let ht = 1; ht < it.length; ht++) if (r <= it[ht][0] && r > it[ht - 1][0]) {
          const [rt, at] = it[ht - 1], [Bt, te] = it[ht];
          B = at + (te - at) * (1 - Math.cos(Math.PI * (r - rt) / (Bt - rt))) / 2;
          break;
        }
      }
    }
    return { cond: g && T === "sunny" ? "clear-night" : T, temp: B, night: g, day: p };
  }
  const t = (e) => Be(new Date(e)) === Be(/* @__PURE__ */ new Date()) ? "Today" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(e)), a = /* @__PURE__ */ new Map(), i = 900, l = 700;
  let u = null;
  const h = typeof ResizeObserver == "function" ? new ResizeObserver((e) => e.forEach((r) => {
    f(r.target.parentElement), r.target.closest("#wxDialog") && He();
  })) : null;
  function f(e, r = performance.now()) {
    const s = e.querySelectorAll("canvas[data-wx-strip]");
    if (!s.length) return;
    const p = On(), g = p.days.flatMap((at) => [{ cond: at.day, night: !1 }, { cond: at.night, night: !0 }]), T = g.map((at) => at.cond).join(), B = Fi(), q = Qo(), it = Da(), ht = Number(Be(new Date(p.start)).replace(/\D/g, "")) % 9973;
    let rt = !1;
    s.forEach((at) => {
      var ve;
      const Bt = at.clientWidth, te = at.clientHeight;
      if (!Bt || !te) return;
      const Ot = at.dataset.wxStrip;
      let Et = a.get(Ot);
      Et ? Et.sig !== T && (Et.prev = Et.segs, Et.sig = T, Et.segs = g, Et.t0 = r, Et.dur = l) : a.set(Ot, Et = { sig: T, segs: g, prev: null, t0: r, dur: i });
      const Ct = q || it ? Math.min(1, Math.max(0, (r - Et.t0) / Et.dur)) : 1;
      Ct < 1 && (rt = !0);
      const he = { width: Bt, height: te, colors: B.colors, clock: r, ambient: q, seed: ht, reveal: it ? Ct : 1 - Math.pow(1 - Ct, 3), prev: Ct < 1 ? Et.prev : null, reduce: it };
      if (Ja === "smooth") {
        const zt = Math.min(2, window.devicePixelRatio || 1), be = Math.round(Bt * zt), Ee = Math.round(te * zt);
        at.width !== be && (at.width = be), at.height !== Ee && (at.height = Ee);
        const se = at.getContext("2d");
        if (!se) return;
        se.setTransform(zt, 0, 0, zt, 0, 0), du(se, g, he);
      } else {
        const zt = lu(g, { ...he, px: 2, oneBit: Ja === "onebit", ink: B.ink, paper: B.paper });
        at.width !== zt.w && (at.width = zt.w), at.height !== zt.h && (at.height = zt.h), (ve = at.getContext("2d")) == null || ve.putImageData(new ImageData(zt.data, zt.w, zt.h), 0, 0);
      }
    }), rt && Ao();
  }
  function v() {
    const e = o("weatherCard");
    if (!e || e.hidden) return;
    const r = Xa.weather, s = r && (pa == null ? void 0 : pa[r]);
    if (!s) {
      e.innerHTML = '<div class="activityHeader"><div class="activityTitle">Weather</div></div><div class="activityRows"><div class="activityRow">' + ti("cloudy") + '<div><div class="activityRowName">Forecast</div><div class="activityRowMeta">' + (r ? "Not available" : "Set up in Settings") + "</div></div></div></div>", Tn(e);
      return;
    }
    const p = s.attributes || {}, g = p.temperature_unit || "°", T = (se) => Number.isFinite(Number(se)) ? Math.round(Number(se)) + "°" : "—", B = (p.friendly_name || "").replace(/^forecast\s+/i, "") || "Weather", q = ts[s.state] || (s.state ? s.state.charAt(0).toUpperCase() + s.state.slice(1) : "—"), it = Be(/* @__PURE__ */ new Date()), ht = os.slice(0, 7), rt = ht.find((se) => Be(new Date(se.datetime)) === it) || null, at = ht.filter((se) => Be(new Date(se.datetime)) >= it).slice(0, 6), Bt = /* @__PURE__ */ new Date(), te = Be(new Date(Bt.getFullYear(), Bt.getMonth(), Bt.getDate() + 1)), Ot = rt ? "H " + T(rt.temperature) + "&ensp; L " + T(rt.templow) : "", Et = (se) => {
      const ae = Be(new Date(se.datetime));
      return ae === it ? "Today" : ae === te ? "Tomorrow" : new Intl.DateTimeFormat(void 0, { weekday: "short" }).format(new Date(se.datetime));
    }, Ct = Number.isFinite(Number(p.temperature)) ? Math.round(Number(p.temperature)) : "—", he = (se) => {
      const ae = new Date(se.datetime);
      return Math.round((new Date(ae.getFullYear(), ae.getMonth(), ae.getDate()) - new Date(Bt.getFullYear(), Bt.getMonth(), Bt.getDate())) / 864e5);
    }, ve = (se) => (ts[se] || se || "").toLowerCase(), zt = (se, ae) => '<div class="activityRow wxDayTile" role="button" tabindex="0" data-wx-day="' + he(se) + '" aria-label="' + Ht(Et(se) + ": " + ve(se.condition) + ", " + T(se.temperature) + " / " + T(se.templow) + ". Open the forecast") + '">' + ti(se.condition, !1, !1, Ja, "day" + ae) + '<div><div class="activityRowName">' + Ht(Et(se)) + '</div><div class="activityRowMeta">' + T(se.temperature) + " / " + T(se.templow) + "</div></div></div>", be = () => '<div class="wxStrip"><div class="wxStripDays">' + On().days.map((ae, ua) => {
      const Ze = new Intl.DateTimeFormat(void 0, { weekday: "long" }).format(new Date(ae.start)) + ": " + ve(ae.day) + (ve(ae.day) === ve(ae.night) ? " all day and night" : ", then " + ve(ae.night) + " overnight") + (Number.isFinite(ae.hi) ? ". High " + T(ae.hi) : "") + (Number.isFinite(ae.lo) ? ", low " + T(ae.lo) : "") + ". Open the forecast";
      return '<div class="wxStripDay" role="button" tabindex="0" data-wx-day="' + ua + '" aria-label="' + Ht(Ze) + '"><span class="wxDayName">' + Ht(t(ae.start)) + '</span><span class="wxStripGap" aria-hidden="true"></span><span class="wxTemps" aria-hidden="true"><span class="wxHigh">' + T(ae.hi) + '</span><span class="wxLow">' + T(ae.lo) + "</span></span></div>";
    }).join("") + '</div><canvas class="wxStripSky" data-wx-strip="inline" aria-hidden="true"></canvas></div>';
    e.innerHTML = '<div class="wxWide"><div class="wxNow" role="button" tabindex="0" data-wx-open="now" aria-label="' + Ht("Now in " + B + ": " + Ct + "°, " + ve(s.state) + ". Open the forecast") + '"><div class="wxCurrent">' + ti(s.state, !0, !0, Ja, "now") + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Ht(String(Ct)) + '</span><span class="wxUnit">' + Ht(g) + '</span></div><div class="wxPlace">' + Ht(B) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Ht(q) + "</div>" + (Ot ? '<div class="wxRange">' + Ot + "</div>" : "") + "</div></div>" + // the days are tiles under Now, like every card of readings (Figma "Weather in halves · proposal"), or the sky strip
    (at.length ? wl === "strip" ? be() : '<div class="activityRows wxDays">' + at.map(zt).join("") + "</div>" : '<div class="wxNoDays">Loading the forecast…</div>') + "</div>", Tn(e);
    const Ee = e.querySelector("canvas[data-wx-strip]");
    u && u !== Ee && (h == null || h.unobserve(u)), u = Ee, Ee && (h == null || h.observe(Ee), f(e)), Ao(), z();
  }
  const k = o("weatherCard"), D = (e) => {
    const r = e.closest("[data-wx-day]");
    if (r) {
      const p = /* @__PURE__ */ new Date();
      V(+new Date(p.getFullYear(), p.getMonth(), p.getDate() + Number(r.dataset.wxDay), 12), r);
      return;
    }
    const s = e.closest("[data-wx-open]");
    s && V(Date.now(), s);
  };
  k.addEventListener("click", (e) => D(e.target)), k.addEventListener("keydown", (e) => {
    (e.key === "Enter" || e.key === " ") && e.target.matches("[data-wx-day],[data-wx-open]") && (e.preventDefault(), D(e.target));
  });
  const N = o("wxDialog"), F = o("wxGraph"), $ = o("wxGraphWrap");
  let Mt = Date.now(), Dt = null, nt = !1, xt = null;
  function V(e, r) {
    const s = On();
    Dt = r || null, Mt = Math.max(s.start, Math.min(s.end - Xe, e)), a.delete("dialog"), Hi.delete("scrub"), N.classList.add("open"), N.setAttribute("aria-hidden", "false"), z(), h == null || h.observe(N.querySelector("canvas[data-wx-strip]")), F.focus({ preventScroll: !0 }), Ao();
  }
  function pt() {
    var e;
    N.classList.remove("open"), N.setAttribute("aria-hidden", "true"), h == null || h.unobserve(N.querySelector("canvas[data-wx-strip]")), (e = Dt == null ? void 0 : Dt.focus) == null || e.call(Dt, { preventScroll: !0 }), Dt = null;
  }
  function z() {
    if (!N.classList.contains("open")) return;
    const e = On();
    o("wxGraphDays").innerHTML = e.days.map((r) => "<span>" + Ht(t(r.start)) + "</span>").join(""), He(e), jt(e), f(N);
  }
  function jt(e = On()) {
    const r = is(e, Mt), s = pa == null ? void 0 : pa[Xa.weather], p = (s == null ? void 0 : s.attributes) || {}, g = p.temperature_unit || "°", T = Math.abs(Mt - Date.now()) < Xe / 2, B = T && s ? s.state : r.cond, q = T && Number.isFinite(Number(p.temperature)) ? Math.round(Number(p.temperature)) : Number.isFinite(r.temp) ? Math.round(r.temp) : "—", it = ts[B] || (B ? B.charAt(0).toUpperCase() + B.slice(1) : "—"), ht = T ? "Now" : new Intl.DateTimeFormat(void 0, { weekday: "short", hour: "2-digit", minute: "2-digit" }).format(new Date(Math.round(Mt / Xe) * Xe)), rt = r.day, at = (Number.isFinite(rt.hi) ? "H " + Math.round(rt.hi) + "°" : "") + (Number.isFinite(rt.lo) ? "&ensp; L " + Math.round(rt.lo) + "°" : "");
    o("wxDialogNow").innerHTML = '<div class="wxCurrent">' + ti(B, !0, T, Ja, "scrub", T ? void 0 : r.night) + '<div class="wxTempBlock"><div class="wxTemp"><span class="wxDeg">' + Ht(String(q)) + '</span><span class="wxUnit">' + Ht(g) + '</span></div><div class="wxPlace">' + Ht(ht) + '</div></div></div><div class="wxCondition"><div class="wxCondName">' + Ht(it) + "</div>" + (at ? '<div class="wxRange">' + at + "</div>" : "") + "</div>", Tn(o("wxDialogNow")), F.setAttribute("aria-valuenow", String(Math.round((Mt - e.start) / Xe))), F.setAttribute("aria-valuetext", ht + ", " + it.toLowerCase() + ", " + q + "°"), ge(e), Ao();
  }
  function He(e = On()) {
    const r = o("wxGraphLine"), s = $.clientWidth, p = $.clientHeight;
    if (!s || !p) return;
    const g = [];
    for (let Ct = e.start; Ct <= e.end; Ct += Xe) {
      const he = is(e, Ct).temp;
      Number.isFinite(he) && g.push([Os(e, Ct) * s, he]);
    }
    if (r.setAttribute("viewBox", "0 0 " + s + " " + p), g.length < 2) {
      r.innerHTML = '<g id="wxCursorMark"></g>', xt = null, ge(e);
      return;
    }
    const T = g.map((Ct) => Ct[1]), B = Math.min(...T), q = Math.max(...T), it = Math.max(4, q - B), ht = Ja !== "smooth", rt = (Ct) => ht ? Math.round(Ct / 2) * 2 : Math.round(Ct * 10) / 10;
    xt = (Ct) => p * 0.84 - (Ct - B) / it * p * 0.62;
    const at = Fi(), Bt = Ja === "onebit" ? at.paper : "#ffffff", te = Ja === "onebit" ? at.ink : "rgba(0,0,0,.28)", Ot = "M" + g.map((Ct) => rt(Ct[0]) + " " + rt(xt(Ct[1]))).join(" L"), Et = (Ct, he) => {
      const ve = g.find((zt) => zt[1] === Ct);
      return '<text class="wxLineLabel" x="' + rt(Math.min(s - 14, Math.max(14, ve[0]))) + '" y="' + rt(xt(Ct) + (he ? 18 : -10)) + '" fill="' + Bt + '" stroke="' + te + '">' + Math.round(Ct) + "°</text>";
    };
    r.setAttribute("shape-rendering", ht ? "crispEdges" : "auto"), r.innerHTML = '<path d="' + Ot + '" fill="none" stroke="' + te + '" stroke-width="' + (ht ? 4 : 5) + '" stroke-linejoin="round"/><path d="' + Ot + '" fill="none" stroke="' + Bt + '" stroke-width="2" stroke-linejoin="round"/>' + Et(q, !1) + Et(B, !0) + '<g id="wxCursorMark"></g>', ge(e);
  }
  function ge(e = On()) {
    const r = o("wxGraphLine").querySelector("#wxCursorMark");
    if (!r) return;
    const s = $.clientWidth, p = $.clientHeight, g = Ja !== "smooth", T = (Bt) => g ? Math.round(Bt / 2) * 2 : Bt, B = T(Os(e, Mt) * s), q = is(e, Mt).temp, it = Fi(), ht = Ja === "onebit" ? it.paper : "#ffffff", rt = Ja === "onebit" ? it.ink : "rgba(0,0,0,.28)", at = xt && Number.isFinite(q) ? T(xt(q)) : null;
    r.innerHTML = '<rect x="' + (B - 2) + '" y="0" width="4" height="' + p + '" fill="' + rt + '"/><rect x="' + (B - 1) + '" y="0" width="2" height="' + p + '" fill="' + ht + '"/>' + (at == null ? "" : g ? '<rect x="' + (B - 5) + '" y="' + (at - 5) + '" width="10" height="10" fill="' + ht + '" stroke="' + rt + '" stroke-width="2"/>' : '<circle cx="' + B + '" cy="' + at + '" r="6" fill="' + ht + '" stroke="' + rt + '" stroke-width="2"/>');
  }
  const Sa = (e) => {
    const r = $.getBoundingClientRect();
    r.width && (Mt = kl(On(), (e - r.left) / r.width), jt());
  };
  F.addEventListener("pointerdown", (e) => {
    if (e.button === 0) {
      nt = !0;
      try {
        F.setPointerCapture(e.pointerId);
      } catch {
      }
      Sa(e.clientX);
    }
  }), F.addEventListener("pointermove", (e) => {
    nt && Sa(e.clientX);
  }), ["pointerup", "pointercancel", "lostpointercapture"].forEach((e) => F.addEventListener(e, () => {
    nt = !1;
  })), F.addEventListener("keydown", (e) => {
    const r = On(), s = { ArrowLeft: -Xe, ArrowRight: Xe, ArrowDown: -Xe, ArrowUp: Xe, PageUp: -24 * Xe, PageDown: 24 * Xe }[e.key];
    s ? (e.preventDefault(), Mt = Math.max(r.start, Math.min(r.end - Xe, Math.round(Mt / Xe) * Xe + s)), jt(r)) : (e.key === "Home" || e.key === "End") && (e.preventDefault(), Mt = e.key === "Home" ? r.start : r.end - Xe, jt(r));
  }), o("wxDialogClose").addEventListener("click", pt), N.addEventListener("click", (e) => {
    e.target === N && pt();
  }), N.addEventListener("keydown", (e) => {
    e.key === "Escape" && (e.preventDefault(), pt());
  }), v(), (cc = (lc = window.matchMedia) == null ? void 0 : (dc = lc.call(window, "(prefers-reduced-motion: reduce)")).addEventListener) == null || cc.call(dc, "change", () => {
    Ao(), Tn(n);
  }), Ao();
  const Jt = o("tvNav");
  d.fullscreenSupported || (Jt.hidden = !0), Jt.addEventListener("click", () => d.toggleFullscreen()), n.addEventListener("keydown", (e) => {
    !It.workout.classList.contains("active") || yi.classList.contains("active") || e.target.closest("input,select,textarea,.holdEnd") || (e.key === "MediaPlayPause" || e.key === " " && !e.target.closest("button") ? (e.preventDefault(), Fr.click()) : e.key === "MediaTrackNext" ? (e.preventDefault(), o("skipExercise").click()) : e.key === "MediaTrackPrevious" && (e.preventDefault(), o("restartSegment").click()));
  }), n.querySelectorAll("[data-rounds-step]").forEach((e) => e.addEventListener("click", () => {
    const r = Math.max(1, Math.min(10, (Number(le.value) || 1) + Number(e.dataset.roundsStep)));
    String(r) !== le.value && (le.value = r, le.dispatchEvent(new Event("input", { bubbles: !0 })));
  })), [E, A, I, le].forEach((e) => e.addEventListener("input", () => {
    const r = Kt[we];
    r && (r.total = Number(E.value), r.work = Number(A.value), r.rest = Number(I.value)), Re();
  })), G.addEventListener("click", dr), Wt.addEventListener("click", () => M("settings")), o("settingsBack").addEventListener("click", dr), Fr.addEventListener("click", () => fn(!Ha)), Oe(we), _r(), Qn(), Cn(), o("healthHelpOpen").addEventListener("click", () => n.querySelector(".tab[data-pane=helpPane]").click()), pr(o("resetStats"), o("resetStatsFill"), 1500, () => {
    de.history = [], de.checkins = [], mi = "";
    try {
      localStorage.removeItem("move-assistant-dismissed");
    } catch {
    }
    Ta(), lo(), Qn(), _r(), Cn(), Ho(), We("Stats reset");
  });
  const Ue = o("morningTime"), ei = o("eveningTime"), Ws = o("checkinAutoOpen");
  Ue.value = Xn().morning, ei.value = Xn().evening, Ws.classList.toggle("on", fe().checkinAutoOpen !== !1), [["morningTime", Ue], ["eveningTime", ei]].forEach(([e, r]) => r.addEventListener("change", () => {
    r.value && (Ba(e, r.value), Ho());
  })), Ws.addEventListener("click", () => {
    const e = fe().checkinAutoOpen === !1;
    Ws.classList.toggle("on", e), Ba("checkinAutoOpen", e);
  }), setTimeout(Lr, 800);
  const ec = o("checkinNotify"), Ml = o("checkinNotifyTarget"), ac = o("checkinNotifyStatus"), Fp = ac.textContent;
  function nc() {
    const e = d.notifyServices(), r = e.filter((g) => g.startsWith("mobile_app_")), s = r.length ? r : e, p = (g) => g.replace(/^mobile_app_/, "").replace(/_/g, " ");
    Ml.innerHTML = s.map((g) => '<option value="' + Ht(g) + '">' + Ht(p(g)) + "</option>").join(""), !fe().notifyTarget && s[0] && (fe().notifyTarget = s[0]), Ml.value = fe().notifyTarget || "";
  }
  function Sl() {
    const e = !!fe().notifyOn;
    ec.classList.toggle("on", e), o("checkinNotifyTargetRow").hidden = !e;
    const r = Xn();
    ac.textContent = e ? "Sends at " + r.morning + " and " + r.evening : Fp;
  }
  async function wd() {
    const e = !!fe().notifyOn;
    try {
      return await d.setReminderAutomation(e ? { target: fe().notifyTarget, times: Xn() } : null), !0;
    } catch {
      return We("Couldn't update the reminder in Home Assistant"), !1;
    }
  }
  ec.addEventListener("click", async () => {
    const e = !fe().notifyOn;
    if (e && (nc(), !fe().notifyTarget)) {
      We("Install the Companion app on your phone first");
      return;
    }
    fe().notifyOn = e, Sl(), await wd() ? (Ta(), We(e ? "Check-in notifications on" : "Check-in notifications off")) : (fe().notifyOn = !e, Sl());
  }), Ml.addEventListener("change", () => {
    Ba("notifyTarget", Ml.value), fe().notifyOn && wd();
  }), [Ue, ei].forEach((e) => e.addEventListener("change", () => {
    Sl(), fe().notifyOn && wd();
  })), nc(), Sl();
  let xd = null;
  function Op() {
    xd || (xd = setTimeout(() => {
      xd = null, Cn();
    }, 3e4));
  }
  return {
    updateStates(e) {
      var s, p;
      const r = !pa || pa[Xa.weather] !== e[Xa.weather] || ((s = pa["sun.sun"]) == null ? void 0 : s.state) !== ((p = e["sun.sun"]) == null ? void 0 : p.state);
      pa = e, Ii(e), Rs(e), r && v(), Date.now() - gl > 60 * 60 * 1e3 && Ns(), Op();
    },
    applyRemoteData(e) {
      if (e && (Array.isArray(e.history) && (de.history = e.history, lo()), Array.isArray(e.history) && Cn(), Array.isArray(e.checkins) && (de.checkins = e.checkins.map(Ui), Ho(), _r(), Qn(), lo(), Cn()), e.profiles && !La.classList.contains("open") && !Mn)) {
        const r = Bo(e);
        Object.keys(Kt).forEach((s) => delete Kt[s]), Object.assign(Kt, r.profiles), de.order = r.order, Kt[we] || (we = de.order[0]), Yi(), Oe(we);
      }
    },
    suspend() {
      b = !1;
    },
    resume() {
      b || (b = !0, qo || (qo = requestAnimationFrame(Ir)), ma || (ma = requestAnimationFrame(Vo)), Ao(), Bi(n.querySelector(".tab.active"), !1));
    }
  };
}
const uu = /* @__PURE__ */ new Set(["roaming", "test_area"]), fu = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window" },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62 }
}, js = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, ya = "made_up_", qi = (n) => {
  var d;
  return (d = String(n).split(".")[1]) == null ? void 0 : d.startsWith(ya);
}, Ll = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function Jd(n) {
  const d = n.getHours() + n.getMinutes() / 60, o = Math.max(0, Math.sin((d - 7) / 13 * Math.PI));
  return 2.4 * o * o;
}
function hu(n) {
  const d = new Date(n.getFullYear(), n.getMonth(), n.getDate());
  let o = 0;
  for (let c = +d; c < +n; c += 10 * 60 * 1e3) o += Jd(new Date(c)) / 6;
  return o;
}
function mc(n = /* @__PURE__ */ new Date()) {
  const d = [];
  for (let o = 0; o <= 96; o++) {
    const c = +n - (96 - o) * 15 * 60 * 1e3;
    d.push([c, Jd(new Date(c))]);
  }
  return d;
}
function mu({ onChange: n }) {
  const d = {}, o = {}, c = (U, W, ut, et) => {
    d[U] = { entity_id: U, state: ut, attributes: et, last_changed: new Date(Date.now() - 18e6).toISOString() }, o[U] = W;
  }, m = (U, W, ut) => {
    const et = d[U], ft = W ?? et.state;
    d[U] = { ...et, state: ft, attributes: { ...et.attributes, ...ut }, last_changed: ft === et.state ? et.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, b = (U, W, ut, et) => c("binary_sensor." + ya + (U ? U + "_" : "") + Ll(W), U, et ? "on" : "off", { friendly_name: W, device_class: ut });
  Object.entries(fu).forEach(([U, W]) => {
    if (W.temperature != null && c("sensor." + ya + U + "_temperature", U, String(W.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), W.humidity != null && c("sensor." + ya + U + "_humidity", U, String(W.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), W.vacuum && c("vacuum." + ya + "robot", U, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), W.climate && c("climate." + ya + U, U, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: W.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), W.cover) {
      const [ut, et, ft, tt] = W.cover;
      c("cover." + ya + U + "_" + Ll(ut), U, ft ? "open" : "closed", { friendly_name: ut, device_class: et, current_position: ft, ...tt != null ? { current_tilt_position: tt } : {} });
    }
    if (W.humidifier && c("humidifier." + ya + U, U, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: W.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), W.solar && (c("sensor." + ya + U + "_solar_power", U, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), c("sensor." + ya + U + "_solar_today", U, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), W.valve && c("valve." + ya + U + "_" + Ll(W.valve), U, "closed", { friendly_name: W.valve, device_class: "water" }), W.door && b(U, W.door, "door", W.doorOpen), W.window && b(U, W.window, "window", !1), W.motion && b(U, W.motion, "motion", !1), W.plant) {
      const [ut, et, ft, tt, _] = W.plant, P = ya + Ll(ut), lt = (H, It, G, Wt, M) => c("sensor." + P + "_" + H, U, String(G), { friendly_name: It, device_class: M, state_class: "measurement", unit_of_measurement: Wt, plant_low: G < js[H][0], plant_high: G > js[H][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[H] });
      lt("moisture", "Moisture", et, "%", "moisture"), lt("light", "Light", ft, "lx", "illuminance"), lt("temperature", "Temperature", tt, "°C", "temperature"), lt("fertility", "Fertility", _, "µS/cm", "conductivity");
      const _t = Object.entries({ moisture: et, light: ft, temperature: tt, fertility: _ }).filter(([H, It]) => It < js[H][0] || It > js[H][1]).map(([H, It]) => H + (It < js[H][0] ? " low" : " high"));
      c("plant." + P, U, _t.length ? "problem" : "ok", { friendly_name: ut, moisture: et, brightness: ft, temperature: tt, conductivity: _, problem: _t.join(", ") || "none" });
    }
  }), c("alarm_control_panel." + ya + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), b(null, "Front door", "door", !1), b(null, "Smoke alarm", "smoke", !1), c("sensor." + ya + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const w = {}, L = {};
  let y = null;
  function R() {
    const U = /* @__PURE__ */ new Date();
    Object.keys(d).forEach((W) => {
      W.endsWith("_solar_power") && (d[W] = { ...d[W], state: Jd(U).toFixed(2) }), W.endsWith("_solar_today") && (d[W] = { ...d[W], state: hu(U).toFixed(1) });
    });
  }
  R();
  let vt = 0;
  function st() {
    let U = !1;
    const W = ++vt % 10 === 0, ut = (tt, _, P) => {
      m(tt, _, P), U = !0;
    };
    Object.entries(w).forEach(([tt, _]) => {
      const P = d[tt].attributes.current_position, lt = P < _ ? Math.min(_, P + 10) : Math.max(_, P - 10);
      lt === _ && delete w[tt], ut(tt, lt === _ ? lt === 0 ? "closed" : "open" : _ > P ? "opening" : "closing", { current_position: lt });
    }), Object.entries(L).forEach(([tt, _]) => {
      const P = d[tt].attributes.current_tilt_position, lt = P < _ ? Math.min(_, P + 25) : Math.max(_, P - 25);
      lt === _ && delete L[tt], ut(tt, null, { current_tilt_position: lt });
    }), Object.keys(d).filter((tt) => tt.startsWith("climate.")).forEach((tt) => {
      const _ = d[tt], P = _.attributes, lt = P.current_temperature, _t = (_.state === "heat" || _.state === "auto") && lt < P.temperature - 0.05, H = (_.state === "cool" || _.state === "auto") && lt > P.temperature + 0.05, It = _.state === "off" ? "off" : _t ? "heating" : H ? "cooling" : "idle", G = W ? Math.round((lt + (_t ? 0.1 : H ? -0.1 : 0)) * 10) / 10 : lt;
      (G !== lt || It !== P.hvac_action) && ut(tt, null, { current_temperature: G, hvac_action: It });
    }), Object.keys(d).filter((tt) => tt.startsWith("humidifier.")).forEach((tt) => {
      const _ = d[tt], P = _.attributes, lt = P.current_humidity, _t = _.state === "on" && lt < P.humidity, H = _t && W ? lt + 1 : lt, It = _.state !== "on" ? "off" : _t ? "humidifying" : "idle";
      if (H !== lt || It !== P.action) {
        ut(tt, null, { current_humidity: H, action: It });
        const G = "sensor." + ya + o[tt] + "_humidity";
        d[G] && ut(G, String(H));
      }
    });
    const et = d["vacuum." + ya + "robot"], ft = et.attributes;
    et.state === "cleaning" && W && ut(et.entity_id, null, { battery_level: Math.max(5, ft.battery_level - 1) }), et.state === "returning" && ut(et.entity_id, "docked", {}), et.state === "docked" && ft.battery_level < 100 && ut(et.entity_id, null, { battery_level: Math.min(100, ft.battery_level + 2) }), y && Date.now() - y.at > 5e3 && (ut("alarm_control_panel." + ya + "house", "armed_" + y.mode, {}), y = null), U && n();
  }
  const Y = setInterval(st, 1e3), X = setInterval(() => {
    R(), n();
  }, 60 * 1e3);
  function ot(U, W, ut) {
    const et = ut == null ? void 0 : ut.entity_id;
    if (!d[et]) return !1;
    const ft = d[et], tt = ft.attributes, _ = (P, lt) => m(et, P, lt);
    if (U === "climate" && (W === "set_temperature" && _(null, { temperature: Math.max(tt.min_temp, Math.min(tt.max_temp, ut.temperature)) }), W === "set_hvac_mode" && _(ut.hvac_mode, ut.hvac_mode === "off" ? { hvac_action: "off" } : {}), W === "toggle" && _(ft.state === "off" ? "heat" : "off", ft.state === "off" ? {} : { hvac_action: "off" })), U === "cover") {
      const P = W === "open_cover" ? 100 : W === "close_cover" ? 0 : W === "set_cover_position" ? ut.position : W === "toggle" ? tt.current_position > 0 ? 0 : 100 : null;
      W === "stop_cover" && (delete w[et], delete L[et], _(tt.current_position === 0 ? "closed" : "open")), P != null && P !== tt.current_position && (w[et] = P, _(P > tt.current_position ? "opening" : "closing"));
      const lt = W === "open_cover_tilt" ? 100 : W === "close_cover_tilt" ? 0 : W === "set_cover_tilt_position" ? ut.tilt_position : null;
      W === "stop_cover_tilt" && delete L[et], lt != null && tt.current_tilt_position != null && lt !== tt.current_tilt_position && (L[et] = lt);
    }
    if (U === "humidifier" && (W === "set_humidity" && _(null, { humidity: Math.max(tt.min_humidity, Math.min(tt.max_humidity, ut.humidity)) }), W === "set_mode" && _(null, { mode: ut.mode }), W === "turn_on" || W === "turn_off" || W === "toggle")) {
      const P = W === "turn_on" || W === "toggle" && ft.state !== "on";
      _(P ? "on" : "off", { action: P ? "idle" : "off" });
    }
    if (U === "vacuum" && (W === "start" && _("cleaning", { rooms: ut.rooms || tt.rooms }), W === "pause" && _("paused"), W === "return_to_base" && _("returning", { rooms: [] }), W === "locate" && _(null, { located: Date.now() }), W === "set_rooms" && _(null, { rooms: ut.rooms })), U === "valve") {
      const P = W === "open_valve" || W === "toggle" && ft.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(W) && _(P ? "open" : "closed");
    }
    if (U === "alarm_control_panel") {
      W === "alarm_disarm" && (y = null, _("disarmed", { changed_by: "Matt" }));
      const P = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[W];
      P && (y = { mode: P, at: Date.now() }, _("arming", { changed_by: "Matt" }));
    }
    return n(), !0;
  }
  function K(U) {
    const W = (U == null ? void 0 : U.states) || {}, ut = (U == null ? void 0 : U.entities) || {}, et = (U == null ? void 0 : U.devices) || {}, ft = (A) => {
      var mt;
      const I = ut[A];
      return I && (I.area_id || I.device_id && ((mt = et[I.device_id]) == null ? void 0 : mt.area_id)) || null;
    }, tt = (A) => {
      const I = ut[A];
      return W[A] && W[A].state !== "unavailable" && !(I != null && I.hidden) && !(I != null && I.entity_category);
    }, _ = {};
    Object.keys(W).forEach((A) => {
      const I = ft(A);
      I && tt(A) && (_[I] || (_[I] = [])).push(A);
    });
    const P = { ...W, ...d }, lt = (A) => {
      var I, mt;
      return (mt = (I = P[A]) == null ? void 0 : I.attributes) == null ? void 0 : mt.device_class;
    }, _t = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], H = Object.keys(W).filter((A) => A.startsWith("vacuum.") && tt(A)), It = Object.values((U == null ? void 0 : U.areas) || {}).filter((A) => !uu.has(A.area_id)).map((A) => {
      const I = A.area_id, mt = _[I] || [], j = (Xt) => mt.filter((Te) => Te.startsWith(Xt + ".")), ct = (Xt) => j("sensor").filter((Te) => lt(Te) === Xt), gt = (Xt) => Object.keys(d).filter((Te) => o[Te] === I && Xt(Te)), yt = (Xt, Te) => Xt.length ? Xt : gt(Te), $t = yt(ct("temperature"), (Xt) => Xt.endsWith(I + "_temperature")), le = yt(ct("humidity"), (Xt) => Xt.endsWith(I + "_humidity")), Ae = ct("power").filter((Xt) => /^(W|kW)$/.test(P[Xt].attributes.unit_of_measurement || "")), Ca = j("binary_sensor").filter((Xt) => lt(Xt) === "moisture"), Pa = yt(j("plant"), (Xt) => Xt.startsWith("plant.")).map((Xt) => ({ id: Xt, readings: gt((Te) => Te.startsWith("sensor." + Xt.split(".")[1] + "_")) })), me = [...j("binary_sensor").filter((Xt) => _t.includes(lt(Xt))), ...gt((Xt) => Xt.startsWith("binary_sensor."))];
      return {
        id: I,
        name: A.name,
        icon: A.icon,
        readings: [...$t.slice(0, 1), ...le.slice(0, 1), ...Ca],
        power: Ae.length ? Ae.reduce((Xt, Te) => Xt + Number(P[Te].state) * (P[Te].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: j("switch"),
        lights: j("light"),
        actions: [...j("light"), ...yt(j("climate"), (Xt) => Xt.startsWith("climate.")), ...yt(j("cover"), (Xt) => Xt.startsWith("cover.")), ...yt(j("humidifier"), (Xt) => Xt.startsWith("humidifier.")), ...yt(j("valve"), (Xt) => Xt.startsWith("valve.")), ...j("media_player"), ...j("vacuum"), ...H.length ? [] : gt((Xt) => Xt.startsWith("vacuum."))],
        solar: gt((Xt) => Xt.includes("_solar_")),
        plants: Pa,
        openings: me,
        alerts: [...Ca, ...me].filter((Xt) => {
          var Te;
          return ((Te = P[Xt]) == null ? void 0 : Te.state) === "on";
        })
      };
    }).filter((A) => A.readings.length || A.plugs.length || A.actions.length || A.solar.length || A.plants.length), G = Object.keys(W).find((A) => /^sensor\..*(p1_meter_power|grid_power)$/.test(A) && W[A].state !== "unavailable") || null, Wt = (A) => Object.keys(W).filter((I) => I.startsWith(A + ".") && tt(I)), M = Wt("alarm_control_panel"), E = H.length ? H : ["vacuum." + ya + "robot"];
    return {
      states: P,
      rooms: It,
      grid: G,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (A) => d[A] ? o[A] : ft(A),
      vacuums: E,
      homeVacuums: E.filter((A) => !It.some((I) => I.actions.includes(A))),
      security: {
        alarms: M.length ? M : ["alarm_control_panel." + ya + "house"],
        locks: Wt("lock"),
        openings: [...Object.keys(d).filter((A) => A.startsWith("binary_sensor.")), "sensor." + ya + "doorbell"]
      }
    };
  }
  return { model: K, call: ot, stop() {
    clearInterval(Y), clearInterval(X);
  } };
}
const ii = (n) => n < 0 ? 0 : n > 1 ? 1 : n, Gd = (n) => {
  const d = String(n || "#000000").trim().replace("#", ""), o = d.length === 3 ? d.split("").map((c) => c + c).join("") : d;
  return [0, 2, 4].map((c) => parseInt(o.slice(c, c + 2), 16) || 0);
}, gu = (n) => "#" + n.map((d) => Math.round(Math.max(0, Math.min(255, d))).toString(16).padStart(2, "0")).join(""), gc = {}, qn = (n, d, o) => {
  const c = n + d + o;
  return gc[c] || (gc[c] = gu(Gd(n).map((m, b) => m + (Gd(d)[b] - m) * o)));
}, vc = {}, Ol = (n) => vc[n] || (vc[n] = Gd(n));
function vu(n) {
  const d = { clear: [n.skyClearDay, n.skyClearNight], cloudy: [n.skyCloudyDay, n.skyCloudyNight], rain: [n.skyRainDay, n.skyRainNight], snow: [n.skySnowDay, n.skySnowNight], fog: [n.skyFogDay, n.skyFogNight] };
  return d.partly = [qn(d.clear[0], d.cloudy[0], 0.12), qn(d.clear[1], d.cloudy[1], 0.12)], d.storm = [qn(d.rain[0], "#000000", 0.22), qn(d.rain[1], "#000000", 0.22)], d;
}
const bu = [
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
], oi = (n, d) => (bu[(d & 7) * 8 + (n & 7)] + 0.5) / 64, fp = 1, hp = 2, mp = 3, gp = 4, cs = 5, jl = 6, Ud = 7, vp = 8, bc = (n, d) => d <= 0.6665 && ((n - 0.5) * (n - 0.5) + (d - 0.2877) * (d - 0.2877) <= 0.0824 || (n - 0.25) * (n - 0.25) + (d - 0.416) * (d - 0.416) <= 0.0625 || (n - 0.791) * (n - 0.791) + (d - 0.458) * (d - 0.458) <= 0.0437 || n >= 0.25 && n <= 0.791 && d >= 0.416), wu = (n, d, o) => {
  let c = !1;
  for (let m = 0, b = n.length - 1; m < n.length; b = m++) {
    const w = n[m], L = n[b];
    w[1] > o != L[1] > o && d < (L[0] - w[0]) * (o - w[1]) / (L[1] - w[1]) + w[0] && (c = !c);
  }
  return c;
};
function xu(n, d, o, c, { oneBit: m, ink: b, paper: w, snowInk: L }) {
  const y = new Uint8ClampedArray(o * c * 4), R = Ol(b), vt = Ol(w);
  for (let st = 0; st < c; st++) for (let Y = 0; Y < o; Y++) {
    const X = st * o + Y, ot = d[X];
    if (n[X] == null) continue;
    let K = Ol(n[X]);
    if (m) {
      let U;
      ot === gp || ot === vp ? U = !0 : ot === cs ? U = L : ot === Ud || ot === jl ? U = !1 : U = Math.round((0.2126 * K[0] + 0.7152 * K[1] + 0.0722 * K[2]) / 255 * 4) / 4 <= oi(Y, st), (ot === fp || ot === hp || ot === mp || ot === jl) && (Y > 0 && d[X - 1] !== ot || Y < o - 1 && d[X + 1] !== ot || st > 0 && d[X - o] !== ot || st < c - 1 && d[X + o] !== ot) && (U = !0), K = U ? R : vt;
    }
    y[X * 4] = K[0], y[X * 4 + 1] = K[1], y[X * 4 + 2] = K[2], y[X * 4 + 3] = 255;
  }
  return { w: o, h: c, data: y };
}
const yu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, ku = (n) => Ul(n, !1).split("/")[0], Md = (n) => () => {
  n |= 0, n = n + 1831565813 | 0;
  let d = Math.imul(n ^ n >>> 15, 1 | n);
  return d = d + Math.imul(d ^ d >>> 7, 61 | d) ^ d, ((d ^ d >>> 14) >>> 0) / 4294967296;
}, Mu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Su = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Cu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", Tu = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Au = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Lu = [".##", "##.", ".#.", "#.."];
function bp(n, { width: d, height: o, colors: c, wave: m = 0.38, soft: b = 6, glow: w = 0.6, columns: L = 6 }) {
  const y = { ...rn, dawn: "#e5a77e", ...c }, R = vu(y), vt = d, st = o, Y = vt / L, X = Y / 2, ot = Math.PI * 2, K = n.length ? n : [{ cond: "cloudy", night: !1 }], U = [...Array(L * 2)].map((ft, tt) => {
    const _ = K[Math.min(tt, K.length - 1)], P = ku(_.cond), lt = tt % 2 === 1;
    return { cond: _.cond, k: P, night: lt, sky: R[P][lt ? 1 : 0], cover: yu[P] };
  }), W = (ft) => st * (0.5 - m * Math.cos(ot * (ft / Y - 0.25)));
  return { C: y, S: U, W: vt, H: st, cw: Y, sw: X, TAU: ot, yb: W, side: (ft, tt, _) => {
    const P = (ft ? W(tt) - _ : _ - W(tt)) / Math.max(3, b * 1.4) + 0.5;
    return P <= 0 ? 0 : P >= 1 ? 1 : P;
  }, glowAt: (ft) => {
    const tt = ((ft / Y - 0.25) % 1 + 1) % 1, _ = Math.max(0, Math.min(L - 1, Math.round(ft / Y - 0.25))), P = Math.max(0, Math.min(L - 1, Math.round(ft / Y - 0.75))), lt = 1 - (U[2 * _].cover + U[2 * P + 1].cover) / 2, _t = Math.sin(Math.PI * Math.min(1, Math.max(0, W(ft) / st)));
    return { c: tt < 0.5 ? y.dusk : y.dawn, a: w * (0.2 + 0.8 * lt) * _t * _t };
  }, soft: b, tw: Y * 0.3, sy: st / 90 };
}
function wp(n, { clock: d = 0, ambient: o = !1, seed: c = 1 }) {
  const { S: m, sw: b, side: w, C: L, TAU: y, sy: R, H: vt } = n, st = d, Y = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  m.forEach((K, U) => {
    const W = Md(c * 977 + U * 131 + 7), ut = (U + 0.5) * b, et = K.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[K.k] : 0;
    for (let ft = 0; ft < et; ft++) {
      const tt = ut + (W() - 0.5) * b * 1.6, _ = (6 + W() * 76) * R, P = W() < 0.35, lt = 1.8 + W() * 1.6, _t = w(!0, tt, _) * (P ? 0.95 : 0.7) * (o ? 0.6 + 0.4 * Math.sin(y * st / 2600 + ft * 1.7 + U) : 1);
      _t >= 0.03 && Y.stars.push({ x: tt, y: _, big: P, size: lt, o: _t });
    }
    if (!K.night && (K.k === "clear" || K.k === "partly")) {
      const ft = ut + (W() - 0.5) * b * 0.3, tt = Math.min(15, b * 0.29);
      Y.suns.push({ x: ft, y: 32 * R, rad: tt, halo: tt * 2.8 * (o ? 1 + 0.07 * Math.sin(y * st / 3600 + U) : 1) });
    }
    if (K.night && (K.k === "clear" || K.k === "partly")) {
      const ft = Math.min(0.78, b * 0.55 / 34), tt = ut - 23 * ft + (W() - 0.5) * b * 0.2;
      Y.moons.push({ x: tt + 23 * ft, y: (4 + (o ? 0.8 * Math.sin(y * st / 5200 + U) : 0)) * R + 23 * ft, d: 46 * ft });
    }
  });
  const X = Math.max(56, Math.min(100, vt * 0.45)), ot = Math.max(1, b / (X * 2.4));
  return m.forEach((K, U) => {
    const W = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[K.k];
    if (!W) return;
    const ut = K.k === "partly" ? 1 : Math.round(W * ot), et = Md(c * 577 + U * 71 + 3), ft = (U + 0.5) * b, tt = K.k === "rain" || K.k === "storm" || K.night ? L.cloudNight : L.cloudDay, _ = K.night ? 0.82 : K.k === "storm" ? 0.75 : 1;
    for (let P = 0; P < ut; P++) {
      const lt = X / 46 * (K.k === "partly" ? 1 : 0.8 + et() * 0.4), _t = ft + (K.k === "partly" ? b * 0.12 : ((P + 0.5) / ut - 0.5) * b * 0.95 + (et() - 0.5) * b * 0.5 / ut), H = (K.k === "partly" ? 40 : 6 + et() * 26) * R, It = o ? 2.5 * Math.sin(y * st / 9e3 + U * 1.3 + P * 2.1) : 0, G = o ? 0.9 * Math.sin(y * st / 6100 + U + P) : 0;
      Y.clouds.push({ x: _t - 23 * lt + It, y: H - 15.33 * lt + G, w: 46 * lt, h: 30.66 * lt, fill: tt, o: _ * (ut > 1 && P === 0 ? 0.85 : 1) });
    }
  }), m.forEach((K, U) => {
    const W = Md(c * 313 + U * 29 + 11), ut = (U + 0.5) * b, et = K.cond === "pouring" ? 16 : K.cond === "rainy" || K.cond === "hail" ? 9 : K.cond === "lightning-rainy" ? 12 : K.cond === "snowy-rainy" ? 5 : 0;
    for (let tt = 0; tt < et; tt++) {
      let _ = ut + (W() - 0.5) * b * 1.05, P = 44 + W() * 36, lt = 1;
      if (o) {
        const H = ((P - 44 + st * 0.04) % 36 + 36) % 36;
        _ -= 0.21 * (H - (P - 44)), P = 44 + H, lt = Math.min(1, H / 6, (36 - H) / 6);
      }
      P *= R;
      const _t = w(K.night, _, P) * lt;
      _t >= 0.05 && Y.drops.push({ x: _, y: P, o: _t });
    }
    const ft = K.cond === "snowy" ? 11 : K.cond === "snowy-rainy" ? 6 : 0;
    for (let tt = 0; tt < ft; tt++) {
      let _ = ut + (W() - 0.5) * b * 1.05, P = 40 + W() * 44, lt = 1;
      if (o) {
        const H = ((P - 40 + st * 9e-3) % 44 + 44) % 44;
        P = 40 + H, _ += 1.6 * Math.sin(y * st / 2800 + tt * 1.9 + U), lt = Math.min(1, H / 6, (44 - H) / 6);
      }
      P *= R;
      const _t = w(K.night, _, P) * lt;
      _t >= 0.05 && Y.flakes.push({ x: _, y: P, o: _t });
    }
    if (K.k === "fog") {
      const tt = K.night ? "#c8ccd6" : "#ffffff", _ = K.night ? 0.28 : 0.62, P = o ? 4 * Math.sin(y * st / 8e3 + U) : 0;
      for (let lt = 0; lt < 4; lt++) Y.fogs.push({ x: ut - b * 0.75 + lt % 2 * b * 0.18 + (lt % 2 ? P : -P), y: (30 + lt * 13) * R, w: b * 1.3, c: tt, a: _ });
    }
    if (K.k === "storm") {
      const tt = (st / 3400 + U * 0.37) % 1;
      Y.bolts.push({ x: ut + (W() - 0.5) * b * 0.3 - 5, y: 36 * R, o: o && !(tt < 0.05 || tt > 0.09 && tt < 0.12) ? 0.8 : 1 });
    }
  }), Y;
}
function _u(n, d, o, c, m, b, w, L) {
  const { S: y, C: R, cw: vt, yb: st, glowAt: Y, soft: X, tw: ot, sy: K } = n, U = new Array(o * c), W = new Uint8Array(o * c), ut = new Uint8Array(o * c), et = (M, E, A, I, mt) => {
    A == null || M < 0 || E < 0 || M >= o || E >= c || (I >= 1 || I > oi(M + 5, E + 3)) && (U[E * o + M] = A, W[E * o + M] = mt);
  }, ft = (M, E, A, I) => {
    for (let mt = Math.max(0, Math.floor(E - A) - 1); mt <= Math.min(c - 1, E + A + 1); mt++) for (let j = Math.max(0, Math.floor(M - A) - 1); j <= Math.min(o - 1, M + A + 1); j++) I(j, mt, j + 0.5 - M, mt + 0.5 - E);
  }, tt = (M, E, A) => {
    for (let mt = 0; mt < M.length - 1; mt++) {
      const j = (mt + E) * vt;
      if (A < j - ot / 2) return [M[mt], M[mt], 0];
      if (A <= j + ot / 2) return [M[mt], M[mt + 1], (A - j + ot / 2) / ot];
    }
    const I = M[M.length - 1];
    return [I, I, 0];
  }, _ = y.filter((M) => !M.night).map((M) => M.sky), P = y.filter((M) => M.night).map((M) => M.sky), lt = X / b, _t = 16 * K / b;
  for (let M = 0; M < o; M++) {
    const E = (M + 0.5) * m, A = st(E) / b, I = tt(_, 0.75, E), mt = tt(P, 1.25, E), j = Y(E);
    for (let ct = 0; ct < c; ct++) {
      const gt = oi(M, ct), yt = ct + 0.5 - A, $t = (lt > 0.01 ? ii(0.5 + yt / lt) : yt > 0 ? 1 : 0) > gt;
      let le = $t ? I[2] > gt ? I[1] : I[0] : mt[2] > gt ? mt[1] : mt[0];
      ($t ? ii(((ct + 0.5) / c - 0.45) / 0.55) * 0.7 : ii(1 - (ct + 0.5) / (c * 0.55)) * 0.7) > oi(M + 2, ct + 5) && (le = $t ? qn(le, "#ffffff", 0.18) : qn(le, "#000000", 0.25)), $t && yt >= 0 && yt < _t && j.a * 1.3 * (1 - yt / _t) > oi(M + 6, ct + 1) && (le = j.c), U[ct * o + M] = le, ut[ct * o + M] = $t ? 0 : 1;
    }
  }
  const H = qn(R.sun, "#ffffff", 0.55), It = qn(R.moon, "#ffffff", 0.6);
  d.stars.forEach((M) => {
    const E = Math.floor(M.x / m), A = Math.floor(M.y / b);
    if (E < 0 || A < 0 || E >= o || A >= c || !ut[A * o + E] || M.o < 0.15) return;
    const I = M.o > 0.45 ? R.star : qn(R.star, U[A * o + E], 0.5), mt = M.big && M.o > 0.6 ? Math.floor(M.size / m) : 0;
    et(E, A, I, 1, Ud);
    for (let j = 1; j <= mt; j++) [[E - j, A], [E + j, A], [E, A - j], [E, A + j]].forEach((ct) => {
      ct[0] >= 0 && ct[1] >= 0 && ct[0] < o && ct[1] < c && ut[ct[1] * o + ct[0]] && et(ct[0], ct[1], I, 1, Ud);
    });
  }), d.suns.forEach((M) => {
    const E = Math.max(1.5, M.rad / m), A = M.x / m, I = M.y / b, mt = M.halo / m * 0.85;
    if (ft(A, I, mt, (j, ct, gt, yt) => {
      const $t = Math.sqrt(gt * gt + yt * yt);
      $t > E && $t < mt && !ut[ct * o + j] && et(j, ct, H, 0.3 * (1 - ($t - E) / (mt - E)), 0);
    }), L) {
      const j = Math.floor(w / 500) % 2, ct = Math.max(1, E * 0.3);
      for (let gt = 0; gt < 8; gt++) if (gt % 2 === j) for (let yt = E + 1.2; yt < E + 1.2 + ct; yt += 0.7) et(Math.floor(A + Math.cos(gt * Math.PI / 4) * yt), Math.floor(I + Math.sin(gt * Math.PI / 4) * yt), R.sun, 1, vp);
    }
    ft(A, I, E, (j, ct, gt, yt) => {
      gt * gt + yt * yt <= E * E && et(j, ct, ii(((yt / E + 1) / 2 - 0.6) / 0.4) > oi(j, ct) ? R.sunEdge : R.sun, 1, fp);
    });
  }), d.moons.forEach((M) => {
    const E = Math.max(1.5, M.d * 0.37 / m), A = M.x / m, I = M.y / b, mt = A + 0.547 * E, j = I - 0.503 * E, ct = 0.82 * E;
    ft(A, I, E, (gt, yt, $t, le) => {
      if ($t * $t + le * le > E * E) return;
      const Ae = gt + 0.5 - mt, Ca = yt + 0.5 - j;
      Ae * Ae + Ca * Ca > ct * ct && et(gt, yt, ii((le + E) / (2 * E) * 1.1 - 0.1) > oi(gt, yt) ? R.moon : It, 1, hp);
    });
  }), d.clouds.forEach((M) => {
    const E = Math.max(3, M.w / m), A = E * 0.6665, I = M.x / m, mt = M.y / b, j = qn(M.fill, "#000000", 0.16);
    for (let ct = Math.max(0, Math.floor(mt) - 1); ct <= Math.min(c - 1, mt + A + 1); ct++) for (let gt = Math.max(0, Math.floor(I) - 1); gt <= Math.min(o - 1, I + E + 1); gt++) {
      const yt = (gt + 0.5 - I) / E, $t = (ct + 0.5 - mt) / E;
      bc(yt, $t) && et(gt, ct, !bc(yt, $t + 1 / E) || ii(($t - 0.42) / 0.25) * 0.8 > oi(gt, ct) ? j : M.fill, M.o, mp);
    }
  }), d.fogs.forEach((M) => {
    const E = Math.floor(M.y / b), A = Math.max(E, Math.floor((M.y + 6 * K) / b) - 1), I = Math.floor(M.x / m), mt = Math.floor((M.x + M.w) / m);
    for (let j = E; j <= A; j++) for (let ct = I; ct <= mt; ct++) {
      const gt = (ct - I) / Math.max(1, mt - I);
      et(ct, j, M.c, M.a * (gt < 0.25 ? gt / 0.25 : gt > 0.75 ? (1 - gt) / 0.25 : 1), 0);
    }
  });
  const G = Math.max(2, Math.round(9 / b));
  d.drops.forEach((M) => {
    const E = M.x / m, A = Math.floor(M.y / b);
    for (let I = 0; I < G; I++) et(Math.floor(E - 0.208 * I * b / m), A + I, R.rain, M.o, gp);
  });
  const Wt = Math.max(0, Math.round(4.4 / m / 2.6));
  return d.flakes.forEach((M) => {
    const E = Math.floor(M.x / m), A = Math.floor(M.y / b);
    et(E, A, R.snow, M.o, cs);
    for (let I = 1; I <= Wt; I++)
      et(E - I, A, R.snow, M.o, cs), et(E + I, A, R.snow, M.o, cs), et(E, A - I, R.snow, M.o, cs), et(E, A + I, R.snow, M.o, cs);
  }), d.bolts.forEach((M) => {
    if (m <= 3.5)
      for (let E = Math.floor(M.y / b); E <= (M.y + 24) / b; E++) for (let A = Math.floor(M.x / m); A <= (M.x + 11) / m; A++)
        wu(Au, (A + 0.5) * m - M.x, (E + 0.5) * b - M.y) && et(A, E, R.sun, 1, jl);
    else {
      const E = Math.round(M.x / m), A = Math.round(M.y / b);
      Lu.forEach((I, mt) => I.split("").forEach((j, ct) => {
        j === "#" && et(E + ct, A + mt, R.sun, 1, jl);
      }));
    }
  }), { col: U, ids: W };
}
function Eu(n, d) {
  const o = d.px, c = Math.max(6, Math.round(d.width / o)), m = Math.max(6, Math.round(d.height / o)), b = d.width / c, w = d.height / m, L = d.ambient ? Math.floor((d.clock || 0) / 100) * 100 : 0, y = (X) => {
    const ot = bp(X, d);
    return _u(ot, wp(ot, { clock: L, ambient: d.ambient, seed: d.seed }), c, m, b, w, L, d.ambient);
  }, R = y(n), vt = d.reveal == null ? 1 : ii(d.reveal);
  let st = R.col, Y = R.ids;
  if (vt < 1) {
    const X = d.prev ? y(d.prev) : null, ot = vt * (c + 12);
    st = new Array(c * m), Y = new Uint8Array(c * m);
    for (let K = 0; K < c * m; K++) {
      const U = K % c, W = K / c | 0;
      (d.reduce ? vt : ii((ot - U) / 12)) > oi(U, W) ? (st[K] = R.col[K], Y[K] = R.ids[K]) : X ? (st[K] = X.col[K], Y[K] = X.ids[K]) : (st[K] = null, Y[K] = 255);
    }
  }
  return xu(st, Y, c, m, { oneBit: d.oneBit, ink: d.ink || "#26221e", paper: d.paper || "#fbf9f6", snowInk: !1 });
}
function Du(n, d, o) {
  const c = o.width, m = o.height, b = o.reveal == null ? 1 : ii(o.reveal), w = (Y, X) => {
    const ot = bp(X, o);
    Bu(Y, ot, wp(ot, o));
  };
  if (n.clearRect(0, 0, c, m), b >= 1) {
    w(n, d);
    return;
  }
  if (o.prev && w(n, o.prev), o.reduce) {
    n.save(), n.globalAlpha = b, w(n, d), n.restore();
    return;
  }
  const L = n.canvas, y = L.__wxOff || (L.__wxOff = document.createElement("canvas"));
  (y.width !== L.width || y.height !== L.height) && (y.width = L.width, y.height = L.height);
  const R = y.getContext("2d");
  R.setTransform(n.getTransform()), R.clearRect(0, 0, c, m), w(R, d);
  const vt = b * (c + 64) - 64, st = R.createLinearGradient(vt, 0, vt + 64, 0);
  st.addColorStop(0, "rgba(0,0,0,1)"), st.addColorStop(1, "rgba(0,0,0,0)"), R.globalCompositeOperation = "destination-in", R.fillStyle = st, R.fillRect(0, 0, c, m), R.globalCompositeOperation = "source-over", n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.drawImage(y, 0, 0), n.restore();
}
function Bu(n, d, o) {
  const { W: c, H: m, S: b, C: w, cw: L, yb: y, glowAt: R, soft: vt, tw: st, sy: Y } = d, X = n.getTransform().a || 1, ot = (G) => {
    n.shadowColor = G ? "rgba(28,18,8,.22)" : "transparent", n.shadowBlur = G ? 4 * X : 0, n.shadowOffsetY = G ? 1.5 * X : 0;
  }, K = (G, Wt) => {
    const M = Ol(G);
    return "rgba(" + M[0] + "," + M[1] + "," + M[2] + "," + Math.max(0, Math.min(1, Wt)).toFixed(3) + ")";
  }, U = (G, Wt) => {
    const M = n.createLinearGradient(0, 0, c, 0);
    M.addColorStop(0, G[0]);
    for (let E = 0; E < G.length - 1; E++) {
      const A = (E + Wt) * L, I = (A - st / 2) / c, mt = (A + st / 2) / c;
      I > 0 && I < 1 && M.addColorStop(I, G[E]), mt > 0 && mt < 1 && M.addColorStop(mt, G[E + 1]);
    }
    return M.addColorStop(1, G[G.length - 1]), M;
  }, W = Math.max(24, Math.ceil(c / 4)), ut = (G, Wt) => {
    n.beginPath();
    for (let M = 0; M <= W; M++) {
      const E = c * M / W, A = G == null ? 0 : y(E) + G;
      M ? n.lineTo(E, A) : n.moveTo(E, A);
    }
    for (let M = W; M >= 0; M--) {
      const E = c * M / W;
      n.lineTo(E, y(E) + Wt);
    }
    n.closePath(), n.fill();
  };
  n.save(), n.fillStyle = U(b.filter((G) => !G.night).map((G) => G.sky), 0.75), n.fillRect(0, 0, c, m);
  const et = n.createLinearGradient(0, 0, c, 0);
  for (let G = 0; G <= 64; G++) {
    const Wt = R(c * G / 64);
    et.addColorStop(G / 64, K(Wt.c, Math.min(1, Wt.a)));
  }
  n.fillStyle = et;
  for (let G = 0; G < 8; G++)
    n.globalAlpha = 1 - G / 8, ut(G * 2 * Y, (G + 1) * 2 * Y);
  n.fillStyle = U(b.filter((G) => G.night).map((G) => G.sky), 1.25);
  const ft = Math.max(0.5, vt), tt = 6;
  n.globalAlpha = 1, ut(null, -ft);
  for (let G = 0; G < tt; G++)
    n.globalAlpha = 1 - (G + 0.5) / tt, ut(-ft + 2 * ft * G / tt, -ft + 2 * ft * (G + 1) / tt);
  n.globalAlpha = 1;
  const _ = new Path2D(Cu), P = new Path2D(Su), lt = new Path2D(Mu), _t = new Path2D(Tu);
  n.fillStyle = w.star, o.stars.forEach((G) => {
    n.globalAlpha = G.o, G.big ? (n.save(), n.translate(G.x, G.y), n.scale(G.size, G.size), n.fill(_), n.restore()) : (n.beginPath(), n.arc(G.x, G.y, 0.8, 0, Math.PI * 2), n.fill());
  }), n.globalAlpha = 1;
  const H = qn(w.sun, "#ffffff", 0.55);
  o.suns.forEach((G) => {
    const Wt = n.createRadialGradient(G.x, G.y, 0, G.x, G.y, G.halo);
    Wt.addColorStop(0, K(H, 0.42)), Wt.addColorStop(0.7, K(H, 0)), n.fillStyle = Wt, n.beginPath(), n.arc(G.x, G.y, G.halo, 0, Math.PI * 2), n.fill();
    const M = n.createLinearGradient(0, G.y - G.rad, 0, G.y + G.rad);
    M.addColorStop(0.6, w.sun), M.addColorStop(1, w.sunEdge), n.fillStyle = M, ot(!0), n.beginPath(), n.arc(G.x, G.y, G.rad, 0, Math.PI * 2), n.fill(), ot(!1);
  });
  const It = qn(w.moon, "#ffffff", 0.6);
  o.moons.forEach((G) => {
    n.save(), n.translate(G.x - G.d / 2, G.y - G.d / 2), n.scale(G.d / 46, G.d / 46);
    const Wt = n.createLinearGradient(0, 6, 0, 40);
    Wt.addColorStop(0, It), Wt.addColorStop(1, w.moon), n.fillStyle = Wt, ot(!0), n.fill(P), ot(!1), n.restore();
  }), o.clouds.forEach((G) => {
    n.save(), n.globalAlpha = G.o, n.translate(G.x, G.y), n.scale(G.w / 46, G.h / 30.66), n.translate(-4, -9.67), n.fillStyle = G.fill, ot(!0), n.fill(lt), ot(!1), n.restore();
  }), o.fogs.forEach((G) => {
    const Wt = n.createLinearGradient(G.x, 0, G.x + G.w, 0);
    Wt.addColorStop(0, K(G.c, 0)), Wt.addColorStop(0.25, K(G.c, G.a)), Wt.addColorStop(0.75, K(G.c, G.a)), Wt.addColorStop(1, K(G.c, 0)), n.fillStyle = Wt, n.fillRect(G.x, G.y, G.w, 6 * Y);
  }), n.fillStyle = w.rain, o.drops.forEach((G) => {
    n.save(), n.globalAlpha = G.o, n.translate(G.x, G.y), n.rotate(12 * Math.PI / 180), n.fillRect(-1.5, 0, 3, 9), n.restore();
  }), n.fillStyle = w.snow, o.flakes.forEach((G) => {
    n.globalAlpha = G.o, n.beginPath(), n.arc(G.x, G.y, 2.2, 0, Math.PI * 2), n.fill();
  }), n.fillStyle = w.sun, o.bolts.forEach((G) => {
    n.save(), n.globalAlpha = G.o, n.translate(G.x, G.y), n.fill(_t), n.restore();
  }), n.restore();
}
const Ru = (n) => n === "sunny" ? "clear" : n === "clear-night" ? "night" : n === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(n) ? "rain" : ["snowy", "snowy-rainy"].includes(n) ? "snow" : "cloudy", ls = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, _l = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, Sd = (n, d) => '<path class="' + d + '" d="' + n + '"/>', Nu = (n, d) => ' style="animation-delay:-' + Math.round(n * 137 % d) + 'ms"', Wn = (n, d, o, c) => {
  const m = o * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (c < 1 ? ' opacity="' + c + '"' : "") + Nu(n, 2400) + ' d="M' + n + " " + (d - o) + "L" + (n + m) + " " + (d - m) + "L" + (n + o) + " " + d + "L" + (n + m) + " " + (d + m) + "L" + n + " " + (d + o) + "L" + (n - m) + " " + (d + m) + "L" + (n - o) + " " + d + "L" + (n - m) + " " + (d - m) + 'Z"/>';
}, wc = ([n, d, o], c) => '<path class="wbMoonPath" d="' + n + '" fill="url(#' + c + ')"/><defs><linearGradient id="' + c + '" x1="0" y1="' + d + '" x2="0" y2="' + o + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', Pu = (n, d) => d ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + n + ')"/><defs><linearGradient id="' + n + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', Iu = (n) => (n ? ["29.35", "43.04", "56.74"].map((d, o) => '<g class="wbDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wbAccent" x="' + d + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + d + ' 60.65)"/></g>') : [19, 26, 33].map((d, o) => '<g class="wbDrop" style="animation-delay:-' + o * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + d + ' 38)"/></g>')).join(""), Hu = (n) => (n ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([d, o], c) => '<circle class="wbFlake" style="animation-delay:-' + c * 640 + 'ms" cx="' + d + '" cy="' + o + '" r="' + (n ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function Fu(n, d, o, c) {
  const m = (b) => '<g filter="url(#' + c + '-sh)">' + b + "</g>";
  return n === "clear" ? d ? m(wc(o ? _l.l : _l.s, c)) + (o ? Wn(70, 20, 5.83, 1) + Wn(78.33, 41.67, 3.75, 0.8) + Wn(60, 71.67, 3.33, 0.6) : Wn(42, 12, 3.5, 1) + Wn(47, 25, 2.25, 0.8) + Wn(36, 43, 2, 0.6)) : m(Pu(c, o)) : n === "partly" ? m(d ? wc(o ? _l.lp : _l.sp, c) : o ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + m(Sd(o ? ls.lp : ls.sp, d ? "wbCloudLight" : "wbBright")) + (d ? o ? Wn(73.33, 16.67, 4.17, 0.9) : Wn(44, 10, 2.5, 0.9) : "") : n === "cloudy" ? m(Sd(o ? ls.lc : ls.s, d ? "wbCloudLight" : "wbBright")) + (d ? o ? Wn(15, 15, 3.75, 0.8) + Wn(76.67, 13.33, 2.92, 0.6) : Wn(9, 9, 2.25, 0.8) + Wn(46, 8, 1.75, 0.6) : "") : m(Sd(o ? ls.lr : ls.s, "wbCloudLight")) + (n === "rain" ? Iu(o) : Hu(o));
}
const Ou = (n, d) => '<defs><filter id="' + n + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (d ? 1.6 : 1) + '" stdDeviation="' + (d ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function Wu(n, d, o, c) {
  let m = Ru(n);
  const b = m === "night" || !!o;
  m === "night" && (m = "clear");
  const w = d ? 90 : 54;
  return { k: m, night: b, svg: '<svg viewBox="0 0 ' + w + " " + w + '">' + Ou(c, d) + Fu(m, b, d, c) + "</svg>" };
}
const qu = [
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
], El = (n, d) => (qu[d % 8 * 8 + n % 8] + 0.5) / 64, po = (n) => [parseInt(n.slice(1, 3), 16), parseInt(n.slice(3, 5), 16), parseInt(n.slice(5, 7), 16)], Va = (n, d, o) => [Math.round(n[0] + (d[0] - n[0]) * o), Math.round(n[1] + (d[1] - n[1]) * o), Math.round(n[2] + (d[2] - n[2]) * o)], zs = (n) => n < 0 ? 0 : n > 1 ? 1 : n, xc = (n, d) => {
  let o = n * 374761393 + d * 668265263 ^ 1540483477;
  return o = Math.imul(o ^ o >>> 13, 1274126177), ((o ^ o >>> 16) >>> 0) / 4294967296;
}, br = [255, 255, 255], en = po("#26221e"), yc = po("#0288d1"), ju = po("#01579b"), Cd = po(rn.cloudDay), Td = po(rn.cloudNight), Dl = po(rn.dusk), Ad = po(rn.sunEdge), zu = po(rn.sun), Vu = 10, kc = 0.3, ri = 56, xp = 21;
function Gu(n) {
  const d = Array.from({ length: xp }, () => new Array(ri).fill(void 0)), o = (w, L, y) => {
    d[L][w] = y;
  }, c = Va(Dl, en, 0.35), m = Va(en, br, 0.22);
  for (let w = 0; w <= 6; w++) {
    const L = w < 2 ? ri - 2 : ri - 1;
    for (let y = 6 - w; y <= L; y++) o(y, w, w < 2 ? c : w === 6 ? m : en);
  }
  const b = [Dl, Ad, Td, po(rn.skyRainDay), Va(Dl, en, 0.2), Va(n, en, 0.35)];
  [2, 3, 2, 3, 3].forEach((w, L) => {
    const y = 9 + L * 6;
    for (let R = 0; R < w; R++) {
      const vt = b[(L * 2 + R * 3) % b.length];
      for (let st = y; st < y + 5; st++)
        o(st, 7 + R * 2, Va(vt, en, 0.12)), o(st, 8 + R * 2, R === w - 1 ? Va(vt, br, 0.3) : vt);
      o(y + 5, 7 + R * 2, en), o(y + 5, 8 + R * 2, en);
    }
  });
  for (let w = 7; w <= 12; w++) o(5, w, en);
  o(5, 13, Ad);
  for (let w = 7; w <= 14; w++) for (let L = 42; L <= 51; L++) o(L, w, L === 51 ? Td : Cd);
  for (let w = 43; w <= 50; w += 2)
    o(w, 12, en), o(w, 9, Va(en, Cd, 0.4));
  for (let w = 40; w <= 53; w++) o(w, 14, w === 40 || w === 53 ? Td : Cd);
  for (let w = 15; w <= 18; w++) for (let L = 46; L <= 49; L++) o(L, w, w === 18 ? en : w === 16 ? Ad : Dl);
  for (let w = 15; w <= 19; w++) o(44, w, en);
  return o(44, 20, zu), d;
}
function Uu(n, d, o, c) {
  const m = Math.max(1, Math.round(n)), b = Math.max(1, Math.round(d)), w = new Uint8ClampedArray(m * b * 4), L = po(c.skyClearDay), y = po(c.skyFogDay), R = Gu(L), vt = Math.round(b * 0.55), st = zs(1 - Math.log(o / kc) / Math.log(Vu / kc)), Y = Va(L, y, st), X = (W) => zs((W - 0.1) / 0.9), ot = zs((1 - Math.exp(-2 / o) - 0.2) / 0.8), K = Math.round(m / 2 - ri / 2), U = vt + 3;
  for (let W = 0; W < b; W++) {
    const ut = U - 1 - W, et = W - U;
    for (let ft = 0; ft < m; ft++) {
      const tt = ft - K;
      let _, P;
      const lt = ut >= 0 && ut < xp && tt >= 0 && tt < ri ? R[ut][tt] : void 0;
      if (lt)
        _ = lt, P = ot;
      else if (ut >= 0 && ut <= 1 && tt >= 4 - ut && tt <= 5 - ut)
        _ = Va(br, yc, 0.15), P = ot;
      else if (W < vt) {
        const It = zs(((W + 0.5) / vt - 0.15) / 0.85) * 3, G = Math.min(3, Math.floor(It + El(ft + 2, W + 5)));
        _ = Va(Y, br, G * 0.1), P = st * 0.95;
      } else {
        const It = (W - vt + 0.5) / (b - vt), G = Math.min(1.5, 6e-3 / (It * It)), Wt = zs(It * 1.4) * 3, M = Math.min(3, Math.floor(Wt + El(ft + 1, W + 6)));
        _ = Va(yc, ju, M / 3);
        const E = 1 + Math.round(It * 7), A = Math.floor(ft / (E * 3)), I = 0.06 + 0.16 * It, mt = ft % (E * 3) < E;
        mt && xc(A, W) < I ? _ = Va(_, br, 0.18 + 0.1 * (1 - It)) : mt && It > 0.5 && xc(A, W - 1) < I && (_ = Va(_, en, 0.12)), P = X(1 - Math.exp(-G / o)), et === 0 && tt >= 3 && tt <= 8 ? (_ = Va(_, br, tt < 6 ? 0.8 : 0.45), P = ot) : et >= 0 && et <= 2 && tt >= ri && tt < ri + 40 ? ((1 - (tt - ri) / 40) * (et === 1 ? 0.9 : 0.5) > El(ft, W + 3) && (_ = Va(_, br, 0.5)), P = ot) : et === 0 && tt >= 6 && tt < ri && (_ = Va(_, en, tt % 2 === 0 ? 0.35 : 0.2), P = ot);
      }
      const _t = P > El(ft, W) ? y : _, H = (W * m + ft) * 4;
      w[H] = _t[0], w[H + 1] = _t[1], w[H + 2] = _t[2], w[H + 3] = 255;
    }
  }
  return { data: w, w: m, h: b };
}
const Yu = {
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
}, Zu = 1.6;
function Ku(n, d) {
  const o = n ? Yu[String(n).toUpperCase()] : void 0;
  if (!o || !(d > 0)) return;
  const c = (b) => Math.abs(Math.log(b[2] / d)), m = o.reduce((b, w) => c(w) < c(b) ? w : b);
  return c(m) <= Math.log(Zu) ? { from: m[0], to: m[1], km: m[2] } : void 0;
}
const $u = (n, d) => d === "mi" ? n * 1.609344 : d === "m" ? n / 1e3 : d === "ft" ? n * 3048e-7 : d === "yd" ? n * 9144e-7 : n, Xu = (n) => n < 1 ? "very_poor" : n < 4 ? "poor" : n < 10 ? "moderate" : n < 20 ? "good" : n < 40 ? "very_good" : "excellent", co = 6e4, Fe = 36e5, Eo = 864e5, Us = 1440, Ju = 6, Qu = 10 * co, Mc = 3, tf = 3, Bl = { day: [6, 22], waking: [7, 23], all: [0, 24] }, ef = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], af = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", Sc = (n, d, o, c) => '<circle cx="' + n + '" cy="' + d + '" r="' + o + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((m) => {
  const b = Math.cos(m * Math.PI / 180), w = Math.sin(m * Math.PI / 180), L = o + 2, y = o + 2 + c;
  return "M" + (n + b * L).toFixed(2) + " " + (d + w * L).toFixed(2) + "L" + (n + b * y).toFixed(2) + " " + (d + w * y).toFixed(2);
}).join("") + '"/>', ai = (n) => '<path d="' + af + '"' + (n ? ' transform="' + n + '"' : "") + "/>", ni = (n) => '<path d="' + n + '"/>', Cc = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function nf(n, d) {
  const o = "translate(0,-3)";
  switch (n) {
    case "sunny":
      return d ? Cc : Sc(12, 12, 4, 2.5);
    case "clear-night":
      return Cc;
    case "partlycloudy":
      return (d ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : Sc(7.5, 7.5, 2.6, 1.4)) + ai("translate(3.6,3) scale(.85)");
    case "cloudy":
      return ai();
    case "fog":
      return ni("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return ai(o) + ni("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return ai(o) + ni("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return ai(o) + ni("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return ai(o) + ni("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return ai(o) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return ai(o) + ni("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return ai(o) + ni("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return ni("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + ni("M12 8v5M12 16h.01");
  }
}
const Ld = (n, d) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + nf(n, d) + "</svg>", of = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), rf = 30 * co, sf = 7, lf = 3, Tc = 1, df = co, cf = 15 * co, pf = 5, ka = {
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
}, Yt = {
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
}, uf = {
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
}, ff = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], hf = Object.keys(Yt.phases), Rl = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)" }, mf = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, yp = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], Nl = 100, Ac = "µg/m³", gf = "weather_alerts.air_quality_pollen", zl = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], vf = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, bf = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], wf = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, xf = { daily: 1, hourly: 2 }, qt = (n) => String(n ?? "").replace(/[&<>"']/g, (d) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[d]), Na = (n, d) => n.replace(/\{(\w+)\}/g, (o, c) => d[c] ?? ""), ps = (n) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + n + '"/></svg>', Lc = /* @__PURE__ */ new Map();
function yf(n) {
  let d = Lc.get(n);
  if (d === void 0) {
    const o = "http://www.w3.org/2000/svg", c = document.createElementNS(o, "svg"), m = document.createElementNS(o, "path");
    c.setAttribute("viewBox", "0 0 24 24"), c.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", m.setAttribute("d", n), c.append(m), document.body.append(c);
    const b = m.getBBox();
    c.remove();
    const w = Math.max(b.width, b.height), L = w ? 26 * 24 / w : 0, y = L / 24;
    d = w ? "width:" + L.toFixed(2) + "px;height:" + L.toFixed(2) + "px;translate:" + ((12 - b.x - b.width / 2) * y).toFixed(2) + "px " + ((12 - b.y - b.height / 2) * y).toFixed(2) + "px" : "", Lc.set(n, d);
  }
  return d ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + d + '"><path d="' + n + '"/></svg>' : ps(n);
}
const kf = () => {
  var n;
  return !!((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches);
}, Ke = (n) => n != null && n !== "" && Number.isFinite(Number(n)), _c = /* @__PURE__ */ new Map(), Ec = /* @__PURE__ */ new Map(), _d = /* @__PURE__ */ new WeakMap(), Mf = (n) => {
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
function fa(n, d, o) {
  const c = Number(n);
  if (Number.isNaN(c)) return String(n);
  const m = (d == null ? void 0 : d.number_format) === "none", b = { maximumFractionDigits: 2, ...o, ...m ? { useGrouping: !1 } : {} }, w = m ? "en-US" : Mf(d), L = JSON.stringify([w, b]);
  let y = _c.get(L);
  if (!y) {
    try {
      y = new Intl.NumberFormat(w, b);
    } catch {
      y = new Intl.NumberFormat(void 0, b);
    }
    _c.set(L, y);
  }
  return y.format(c);
}
const Qd = (n) => {
  var d;
  return ((d = n == null ? void 0 : n.locale) == null ? void 0 : d.language) || (n == null ? void 0 : n.language) || void 0;
};
function Sf(n) {
  if (!n) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (_d.has(n)) return _d.get(n);
  const d = n.time_format, o = d === "language" || d === "system" || !d ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(d === "language" ? n.language : void 0).includes("10") : d === "12";
  return _d.set(n, o), o;
}
const kp = (n) => {
  var d, o;
  return ((d = n == null ? void 0 : n.locale) == null ? void 0 : d.time_zone) === "server" && ((o = n == null ? void 0 : n.config) != null && o.time_zone) ? n.config.time_zone : void 0;
};
function Mp(n, d) {
  const o = JSON.stringify([n, d]);
  let c = Ec.get(o);
  if (!c) {
    try {
      c = new Intl.DateTimeFormat(n, d);
    } catch {
      c = new Intl.DateTimeFormat(void 0, { ...d, timeZone: void 0 });
    }
    Ec.set(o, c);
  }
  return c;
}
const Lo = (n, d) => Mp(Qd(d), { hour: "numeric", minute: "2-digit", hourCycle: Sf(d == null ? void 0 : d.locale) ? "h12" : "h23", timeZone: kp(d) }).format(n), Dc = (n, d) => Mp(Qd(d), { weekday: "short", timeZone: kp(d) }).format(n), Cf = (n, d) => n.toLocaleDateString(Qd(d), { weekday: "narrow" }), oa = (n, d) => Ke(d) ? fa(Math.round(Number(d)), n.locale) + "°" : "–", us = (n) => {
  const d = new Date(n);
  return d.setHours(0, 0, 0, 0), d;
}, ds = (n, d) => n.getFullYear() === d.getFullYear() && n.getMonth() === d.getMonth() && n.getDate() === d.getDate(), vn = Math.PI / 180, Tf = 2440588, Af = 2451545, Vl = vn * 23.4397, Lf = 149598e3, _f = -0.833 * vn, Ef = 0.133 * vn, Bc = 5 * co, Sp = (n) => n.getTime() / Eo - 0.5 + Tf - Af, Cp = (n, d) => Math.atan2(Math.sin(n) * Math.cos(Vl) - Math.tan(d) * Math.sin(Vl), Math.cos(n)), Tp = (n, d) => Math.asin(Math.sin(d) * Math.cos(Vl) + Math.cos(d) * Math.sin(Vl) * Math.sin(n)), Df = (n, d) => vn * (280.16 + 360.9856235 * n) - d, Bf = (n, d, o) => Math.asin(Math.sin(d) * Math.sin(o) + Math.cos(d) * Math.cos(o) * Math.cos(n));
function Ap(n) {
  const d = vn * (357.5291 + 0.98560028 * n), o = vn * (1.9148 * Math.sin(d) + 0.02 * Math.sin(2 * d) + 3e-4 * Math.sin(3 * d)), c = d + o + vn * 102.9372 + Math.PI;
  return { ra: Cp(c, 0), dec: Tp(c, 0), dist: Lf };
}
function Lp(n) {
  const d = vn * (218.316 + 13.176396 * n), o = vn * (134.963 + 13.064993 * n), c = vn * (93.272 + 13.22935 * n), m = d + vn * 6.289 * Math.sin(o), b = vn * 5.128 * Math.sin(c);
  return { ra: Cp(m, b), dec: Tp(m, b), dist: 385001 - 20905 * Math.cos(o) };
}
const _p = (n, d, o, c) => {
  const m = Sp(d), b = n(m);
  return Bf(Df(m, vn * -c) - b.ra, vn * o, b.dec);
}, tc = (n, d, o) => _p(Ap, n, d, o), Rf = (n, d, o) => _p(Lp, n, d, o);
function Ep(n, d, o, c) {
  const m = {};
  let b = o.getTime(), w = n(o) - d;
  for (let L = b + Bc; L <= c.getTime(); L += Bc) {
    const y = n(new Date(L)) - d;
    if (w < 0 != y < 0) {
      const R = new Date(b + (L - b) * w / (w - y));
      y > 0 ? m.rise ?? (m.rise = R) : m.set ?? (m.set = R);
    }
    b = L, w = y;
  }
  return m;
}
const Dp = (n) => {
  const d = us(n);
  return [d, new Date(d.getTime() + Eo)];
}, Nf = (n, d, o) => Ep((c) => tc(c, d, o), _f, ...Dp(n)), Pf = (n, d, o) => Ep((c) => Rf(c, d, o), Ef, ...Dp(n));
function If(n) {
  const d = Sp(n), o = Ap(d), c = Lp(d), m = Math.acos(Math.sin(o.dec) * Math.sin(c.dec) + Math.cos(o.dec) * Math.cos(c.dec) * Math.cos(o.ra - c.ra)), b = Math.atan2(o.dist * Math.sin(m), c.dist - o.dist * Math.cos(m)), w = Math.atan2(Math.cos(o.dec) * Math.sin(o.ra - c.ra), Math.sin(o.dec) * Math.cos(c.dec) - Math.cos(o.dec) * Math.sin(c.dec) * Math.cos(o.ra - c.ra));
  return { fraction: (1 + Math.cos(b)) / 2, phase: 0.5 + 0.5 * b * (w < 0 ? -1 : 1) / Math.PI };
}
const Hf = (n) => {
  const d = n * 28;
  return d < 0.5 || d > 27.5 ? "new_moon" : d < 6.5 ? "waxing_crescent" : d < 7.5 ? "first_quarter" : d < 13.5 ? "waxing_gibbous" : d < 14.5 ? "full_moon" : d < 20.5 ? "waning_gibbous" : d < 21.5 ? "last_quarter" : "waning_crescent";
}, Gl = (n) => {
  const d = n == null ? void 0 : n.config;
  return d && Ke(d.latitude) && Ke(d.longitude) ? { lat: Number(d.latitude), lon: Number(d.longitude) } : null;
};
function Ed(n, d) {
  var R, vt, st;
  const o = Gl(n), c = o ? Nf(d, o.lat, o.lon) : {}, m = (R = n == null ? void 0 : n.states) == null ? void 0 : R["sun.sun"], b = us(d).getTime(), w = (Y) => {
    const X = Y ? new Date(Y) : null;
    return X && Number.isFinite(X.getTime()) && us(X).getTime() === b ? X : null;
  }, L = w((vt = m == null ? void 0 : m.attributes) == null ? void 0 : vt.next_rising), y = w((st = m == null ? void 0 : m.attributes) == null ? void 0 : st.next_setting);
  return L && (c.rise = L), y && (c.set = y), c;
}
function Ff(n) {
  var c;
  const d = (c = n == null ? void 0 : n.states) == null ? void 0 : c["sun.sun"];
  if ((d == null ? void 0 : d.state) === "below_horizon" || (d == null ? void 0 : d.state) === "above_horizon") return d.state === "below_horizon";
  const o = Gl(n);
  return o ? tc(/* @__PURE__ */ new Date(), o.lat, o.lon) < 0 : !1;
}
const wr = (n) => !!n && n.state !== "unavailable" && n.state !== "unknown", fs = (n, d) => {
  var c;
  const o = (c = n.entities) == null ? void 0 : c[d];
  return !o || !o.hidden && !o.entity_category;
}, mn = (n, d, o) => {
  var c, m;
  for (const b of d) {
    const w = (c = n.states) == null ? void 0 : c[b];
    if (!wr(w)) continue;
    const L = (m = w.attributes) == null ? void 0 : m[o];
    if (L != null && L !== "") return { stateObj: w, value: L };
  }
}, Of = (n, d) => d.map((o) => {
  var c;
  return (c = n.states) == null ? void 0 : c[o];
}).find(wr), Wf = (n, d, o) => d.map((c) => {
  var m;
  return (m = n.states) == null ? void 0 : m[c];
}).find((c) => {
  var m;
  return wr(c) && (((m = c.attributes) == null ? void 0 : m.supported_features) == null || Number(c.attributes.supported_features) & xf[o]);
});
function vr(n, d, o) {
  var b, w, L, y;
  const c = ((w = (b = n.config) == null ? void 0 : b.unit_system) == null ? void 0 : w.length) || "", m = (d == null ? void 0 : d.attributes) || {};
  switch (o) {
    case "precipitation":
      return m.precipitation_unit || (c === "km" ? "mm" : "in");
    case "pressure":
      return m.pressure_unit || (c === "km" ? "hPa" : "inHg");
    case "wind_speed":
    case "wind_gust_speed":
      return m.wind_speed_unit || c + "/h";
    case "visibility":
      return m.visibility_unit || c;
    default:
      return m.temperature_unit || ((y = (L = n.config) == null ? void 0 : L.unit_system) == null ? void 0 : y.temperature) || "";
  }
}
function Wl(n, d, o, c) {
  try {
    if (typeof n.formatEntityAttributeValueToParts == "function") {
      const [m, ...b] = n.formatEntityAttributeValueToParts(d, o, c).map((w) => w.value);
      return { number: m, unit: b.join("").trim() };
    }
  } catch {
  }
  return { number: fa(c, n.locale), unit: vr(n, d, o) };
}
function qf(n, d, o, c) {
  try {
    if (typeof n.formatEntityAttributeValue == "function") return n.formatEntityAttributeValue(d, o, c);
  } catch {
  }
  const m = Wl(n, d, o, c);
  return (m.number + " " + m.unit).trim();
}
function gr(n, d) {
  var c;
  try {
    if (typeof n.formatEntityState == "function") return n.formatEntityState(d);
  } catch {
  }
  const o = (c = d.attributes) == null ? void 0 : c.unit_of_measurement;
  return uf[d.state] || (o && Ke(d.state) ? fa(d.state, n.locale) + " " + o : d.state);
}
function Vs(n, d) {
  var o;
  try {
    if (typeof n.formatEntityName == "function") return n.formatEntityName(d, { type: "entity" });
  } catch {
  }
  return ((o = d.attributes) == null ? void 0 : o.friendly_name) || d.entity_id;
}
const jf = (n) => n < 3 ? "low" : n < 6 ? "moderate" : n < 8 ? "high" : n < 11 ? "very_high" : "extreme", Rc = (n) => yp.find(([, d]) => n <= d)[0];
function zf(n, d) {
  if (d === "Beaufort") return Math.round(n);
  const o = d ? vf[d] : void 0;
  if (o === void 0) return;
  const c = bf.findIndex((m) => n * o < m);
  return c === -1 ? 12 : c;
}
const Nc = (n, d) => {
  const o = d ? wf[d] : void 0;
  return o === void 0 ? void 0 : n * o;
}, Pc = (n) => Object.keys(n.states || {}).find((d) => {
  var o, c;
  return d.startsWith("sensor.") && ((c = (o = n.entities) == null ? void 0 : o[d]) == null ? void 0 : c.platform) === "moon";
}), Dd = (n) => Object.values(n.states || {}).filter((d) => {
  var o, c;
  return d.entity_id.startsWith("sensor.") && ((o = d.attributes) == null ? void 0 : o.device_class) === "precipitation" && ["total", "total_increasing"].includes(((c = d.attributes) == null ? void 0 : c.state_class) ?? "") && fs(n, d.entity_id);
}).map((d) => d.entity_id).sort()[0];
function Vf(n) {
  var o;
  const d = {};
  for (const [c, m] of Object.entries(((o = n == null ? void 0 : n.core) == null ? void 0 : o.integration) ?? {})) {
    if (m && "integration_type" in m) {
      d[c] = m.categories;
      continue;
    }
    for (const [b, w] of Object.entries((m == null ? void 0 : m.integrations) ?? {})) d[b] = w == null ? void 0 : w.categories;
  }
  return d;
}
const Bp = (n, d, o) => {
  var m, b, w;
  const c = (b = (m = n.entities) == null ? void 0 : m[o]) == null ? void 0 : b.platform;
  return !!c && !!((w = d[c]) != null && w.includes(gf));
};
function Gf(n, d) {
  const o = /* @__PURE__ */ new Map();
  return Object.values(n.states || {}).filter((c) => {
    var m;
    return c.entity_id.startsWith("sensor.") && zl.includes(((m = c.attributes) == null ? void 0 : m.device_class) ?? "") && fs(n, c.entity_id) && Bp(n, d, c.entity_id);
  }).sort((c, m) => c.entity_id.localeCompare(m.entity_id)).forEach((c) => {
    o.has(c.attributes.device_class) || o.set(c.attributes.device_class, c.entity_id);
  }), zl.map((c) => o.get(c)).filter(Boolean);
}
const Uf = (n, d) => Object.values(n.states || {}).filter((o) => {
  var c, m;
  return o.entity_id.startsWith("sensor.") && fs(n, o.entity_id) && Bp(n, d, o.entity_id) && (((m = (c = n.entities) == null ? void 0 : c[o.entity_id]) == null ? void 0 : m.translation_key) ?? o.entity_id).toLowerCase().includes("pollen");
}).map((o) => o.entity_id).sort();
function Ic(n, d, o) {
  const c = Math.max(d - n, 1e-6), m = o[o.length - 1], b = o.find((R) => c / R <= 4) ?? m * Math.ceil(c / (4 * m)), w = Math.floor(n / b) * b;
  let L = Math.ceil(d / b) * b;
  L === w && (L = w + b);
  const y = [];
  for (let R = w; R <= L + b / 1e3; R += b) y.push(R);
  return { min: w, max: L, ticks: y };
}
const Gs = (n, d, o) => {
  const c = (w) => [1, 3, 5].map((L) => parseInt(w.slice(L, L + 2), 16)), m = c(n), b = c(d);
  return "rgb(" + m.map((w, L) => Math.round(w + (b[L] - w) * o)).join(", ") + ")";
}, Yf = (n, d, o, c) => {
  const m = o * Math.abs(1 - 2 * c), b = c < 0.5 ? 0 : 1;
  return "M " + n + " " + (d - o) + " A " + o + " " + o + " 0 0 0 " + n + " " + (d + o) + " A " + m + " " + o + " 0 0 " + b + " " + n + " " + (d - o) + " Z";
}, gn = ({ icon: n, name: d, sub: o, visual: c, double: m, backdrop: b, cls: w }) => '<div class="wbCard wbSquare' + (m ? " wbDouble" : "") + (b ? " wbHasBackdrop" : "") + (w ? " " + w : "") + '">' + (b ? '<div class="wbBackdrop" aria-hidden="true">' + b + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + yf(n) + '</div><div class="wbText"><span class="wbName">' + qt(d) + "</span>" + (o ? '<span class="wbSub">' + qt(o) + "</span>" : "") + '</div></div><div class="wbVisual">' + c + "</div></div>", ji = (n, d) => '<div class="wbValue"><span class="wbNum">' + qt(n) + "</span>" + (d ? '<span class="wbUnitV">' + qt(d) + "</span>" : "") + "</div>";
function Zf(n) {
  const d = n.max - n.min || 1, o = (L) => 100 - (Math.min(n.max, Math.max(n.min, L)) - n.min) / d * 100, c = (L) => L / Us * 100 + "%", m = (L) => L.map((y) => y.t + "," + o(y.v)).join(" "), b = n.kind === "line" ? n.points : [];
  let w = '<div class="wbDayChart"><div class="wbDcSun">' + n.sun.map((L) => '<span class="wbDcSunMark" style="left:' + c(L.t) + '">' + ps(L.rise ? ka.sunsetUp : ka.sunsetDown) + qt(L.label) + "</span>").join("") + "</div>";
  return w += '<div class="wbDcY">' + n.ticks.map((L) => '<span style="top:' + o(L) + '%">' + qt(n.format(L)) + "</span>").join("") + "</div>", w += '<div class="wbDcPlot"><svg viewBox="0 0 ' + Us + ' 100" preserveAspectRatio="none">' + n.night.map(([L, y]) => '<rect class="wbDcNight" x="' + L + '" y="0" width="' + (y - L) + '" height="100"></rect>').join("") + n.ticks.map((L) => '<line class="wbDcGrid" x1="0" x2="' + Us + '" y1="' + o(L) + '" y2="' + o(L) + '" vector-effect="non-scaling-stroke"></line>').join("") + n.sun.map((L) => '<line class="wbDcSunLine" x1="' + L.t + '" x2="' + L.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (n.past && n.past.length > 1 ? '<polyline class="wbDcPast" points="' + m(n.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (b.length > 1 ? '<polygon class="wbDcArea" points="' + b[0].t + ",100 " + m(b) + " " + b[b.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + m(b) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (n.now ? '<line class="wbDcNow" x1="' + n.now.t + '" x2="' + n.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (n.kind === "bars" ? n.points.filter((L) => L.v > 0).map((L) => '<i class="wbDcBar" style="left:' + c(L.t + 12) + ";width:" + c(36) + ";height:" + (100 - o(L.v)) + '%"></i>').join("") : "") + (n.now && n.kind === "line" ? '<i class="wbDcDot" style="left:' + c(n.now.t) + ";top:" + o(n.now.v) + '%"></i>' : "") + (n.peak ? '<span class="wbDcPeak" style="left:' + c(n.peak.t) + ";top:" + o(n.peak.v) + '%">' + qt(n.peak.label) + "</span>" : "") + (n.note ? '<span class="wbDcNote">' + qt(n.note) + "</span>" : "") + "</div>", w += '<div class="wbDcX">' + n.hours.map((L) => '<span class="' + (L.minor ? "wbMinor" : "") + '" style="left:' + c(L.t) + '">' + qt(L.label) + "</span>").join("") + "</div></div>", w;
}
function Kf(n, d) {
  const w = n.map((U) => U.value), L = Math.min(...w), y = Math.max(...w), R = y - L || 1, vt = (U) => U / (n.length - 1) * 300, st = (U) => 18 + (1 - (U - L) / R) * 84, Y = n.map((U, W) => vt(W) + "," + st(U.value)).join(" "), X = w.indexOf(y), ot = w.indexOf(L), K = (U) => U === 0 ? "start" : U === n.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true"><polygon class="wbArea" points="0,102 ' + Y + ' 300,102"></polygon><polyline class="wbLine" points="' + Y + '" vector-effect="non-scaling-stroke"></polyline><text x="' + vt(X) + '" y="' + (st(y) - 6) + '" text-anchor="' + K(X) + '">' + qt(d(y)) + '</text><text x="' + vt(ot) + '" y="' + (st(L) + 14) + '" text-anchor="' + K(ot) + '">' + qt(d(L)) + '</text><text x="0" y="120" text-anchor="start">' + qt(n[0].label) + '</text><text x="300" y="120" text-anchor="end">' + qt(n[n.length - 1].label) + "</text></svg>";
}
function $f(n, d) {
  const b = n.map((st) => st.value).concat([]), w = Math.min(...b) - 2, L = Math.max(...b) + 1, y = L - w || 1, R = 300 / n.length, vt = (st) => (1 - (st - w) / y) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + n.map((st, Y) => '<rect class="wbBar' + (st.now ? " wbNowBar" : "") + '" x="' + (Y * R + R * 0.2) + '" y="' + vt(st.value) + '" width="' + R * 0.6 + '" height="' + (104 - vt(st.value)) + '" rx="6"></rect><text x="' + (Y * R + R / 2) + '" y="120" text-anchor="middle">' + qt(st.label) + "</text>").join("") + "</svg>";
}
const Xf = [
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
], Jf = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], Hc = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], Qf = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let th = 0;
function Fc(n, { getHass: d, entityId: o, style: c = "bitmap", motion: m = !0, cards: b, onOpen: w, hoursWindow: L } = {}) {
  var yn, Io;
  const y = "wb" + ++th + "-", R = document.createElement("div");
  R.className = "wb", R.dataset.style = c;
  const vt = document.createElement("div");
  vt.className = "wbBento", R.appendChild(vt), n.replaceChildren(R);
  const st = ["aq_tile", "pollen_tile", "radar_tile"], Y = ["current", "hourly", "sun", "moon", "wind", "uv_index", "compared_to_average", "humidity", "pressure", "precipitation", "visibility", "air_quality", ...st].filter((x) => !b || b.includes(x)), X = { current: "wide", hourly: "wide", compared_to_average: "double" }, ot = {};
  Y.forEach((x) => {
    const S = document.createElement("div");
    S.className = "wbItem", S.dataset.card = x, S.dataset.size = X[x] || "tile", S.hidden = !0, vt.appendChild(S), ot[x] = { el: S, html: null };
  });
  let K = !1, U = null, W = 0, ut = -1, et = !1, ft = null;
  const tt = "homecore-next-view", P = { openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: (() => {
    try {
      return localStorage.getItem(tt);
    } catch {
      return null;
    }
  })() === "bars" ? "bars" : "strip", aq: void 0 }, lt = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let _t = /* @__PURE__ */ new Date(), H = /* @__PURE__ */ new Date();
  const It = {}, G = {}, Wt = {}, M = (x) => {
    var S;
    return ((S = Wt[x]) == null ? void 0 : S.forecast) ?? [];
  }, E = (x, S) => {
    var C;
    return Wt[S] ? (C = x.states) == null ? void 0 : C[Wt[S].entityId] : void 0;
  };
  function A(x) {
    const S = G[x];
    S && (S.unsub.then((C) => {
      typeof C == "function" && C();
    }).catch(() => {
    }), delete G[x]), Wt[x] && delete Wt[x];
  }
  function I(x, S, C) {
    var Z;
    if (typeof ((Z = x.connection) == null ? void 0 : Z.subscribeMessage) != "function") return;
    const O = { entityId: C };
    try {
      O.unsub = Promise.resolve(x.connection.subscribeMessage((J) => {
        K || G[S] !== O || (J != null && J.forecast ? Wt[S] = { entityId: C, forecast: J.forecast } : delete Wt[S], uo());
      }, { type: "weather/subscribe_forecast", forecast_type: S, entity_id: C }));
    } catch (J) {
      O.unsub = Promise.reject(J);
    }
    O.unsub.catch(() => {
      G[S] === O && delete G[S];
    }), G[S] = O;
  }
  function mt(x, S) {
    var C;
    for (const O of ["daily", "hourly"]) {
      const Z = Wf(x, S, O);
      ((C = G[O]) == null ? void 0 : C.entityId) !== (Z == null ? void 0 : Z.entity_id) && (A(O), Z && I(x, O, Z.entity_id));
    }
  }
  const j = (x, S, C, O = !1) => x.callWS({
    type: "history/history_during_period",
    start_time: C.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [S],
    minimal_response: O,
    no_attributes: O,
    significant_changes_only: !1
  });
  async function ct(x, S) {
    var dt, bt, wt;
    const C = mn(x, S, "pressure");
    if (!C) return;
    const O = C.stateObj.entity_id, Z = await j(x, O, new Date(Date.now() - 3 * Fe)), J = (wt = (bt = (dt = Z == null ? void 0 : Z[O]) == null ? void 0 : dt.find((Pt) => {
      var Lt;
      return typeof ((Lt = Pt.a) == null ? void 0 : Lt.pressure) == "number";
    })) == null ? void 0 : bt.a) == null ? void 0 : wt.pressure;
    lt.pressureHistory = typeof J == "number" ? { entityId: O, value: J } : void 0;
  }
  async function gt(x, S) {
    var bt;
    const C = mn(x, S, "temperature");
    if (!C) return;
    const O = C.stateObj.entity_id, Z = us(/* @__PURE__ */ new Date()), J = await j(x, O, new Date(Z.getTime() - sf * Eo)), dt = /* @__PURE__ */ new Map();
    for (const wt of (J == null ? void 0 : J[O]) ?? []) {
      const Pt = (bt = wt.a) == null ? void 0 : bt.temperature, Lt = new Date((wt.lc ?? wt.lu) * 1e3);
      if (typeof Pt != "number" || Lt >= Z) continue;
      const kt = Lt.toDateString();
      dt.set(kt, Math.max(dt.get(kt) ?? -1 / 0, Pt));
    }
    lt.temperatureHistory = { entityId: O, dailyHighs: [...dt.values()], days: [...dt.entries()].map(([wt, Pt]) => ({ date: new Date(wt), high: Pt })) };
  }
  async function yt(x) {
    const S = Dd(x);
    if (!S) return;
    const C = await x.callWS({ type: "recorder/statistic_during_period", statistic_id: S, rolling_window: { duration: { hours: 24 } } });
    lt.rain = { entityId: S, change: (C == null ? void 0 : C.change) ?? void 0 };
  }
  function $t() {
    const x = d == null ? void 0 : d();
    if (!x || K || typeof x.callWS != "function") return;
    const S = Pa(x);
    lt.lastFetch = Date.now(), [ct(x, S), gt(x, S), yt(x)].forEach((C) => C.then(() => uo(), () => {
    }));
  }
  async function le() {
    const x = d == null ? void 0 : d();
    if (!x) return;
    const S = mn(x, Pa(x), "temperature");
    if (!S) return;
    const C = S.stateObj.entity_id, O = us(/* @__PURE__ */ new Date());
    try {
      const Z = await j(x, C, O), J = (dt) => ((Z == null ? void 0 : Z[C]) ?? []).map((bt) => {
        var wt;
        return { time: bt.lu * 1e3, value: (wt = bt.a) == null ? void 0 : wt[dt] };
      }).filter((bt) => typeof bt.value == "number");
      lt.todayHistory = { day: O.toDateString(), fetched: Date.now(), temperature: J("temperature"), humidity: J("humidity") }, uo();
    } catch {
    }
  }
  async function Ae(x) {
    const S = d == null ? void 0 : d();
    if (S)
      try {
        const C = await j(S, x, new Date(Date.now() - 24 * Fe), !0), O = ((C == null ? void 0 : C[x]) ?? []).filter((J) => Ke(J.s)), Z = Math.max(1, Math.ceil(O.length / 48));
        lt.aqHistory = { entityId: x, points: O.filter((J, dt) => dt % Z === 0).map((J) => ({ label: Lo(new Date(J.lu * 1e3), S), value: Number(J.s) })) }, uo();
      } catch {
      }
  }
  function Ca(x) {
    lt.categories === void 0 && (lt.categories = null, Promise.resolve().then(() => x.callWS({ type: "integration/descriptions" })).then((S) => {
      lt.categories = Vf(S);
    }, () => {
      lt.categories = {};
    }).then(() => uo()));
  }
  function Pa(x) {
    var C;
    const S = Object.keys(x.states || {}).filter((O) => O.startsWith("weather.") && fs(x, O)).sort();
    return o && ((C = x.states) != null && C[o]) ? [o, ...S.filter((O) => O !== o)] : S;
  }
  const me = (x) => lt.categories ? { air: Gf(x, lt.categories), pollen: Uf(x, lt.categories) } : { air: [], pollen: [] };
  function Xt(x, S, C, O) {
    if (c === "line") return '<span class="wbWx wbS' + S + ' wbLineIcon" aria-hidden="true">' + Ld(x, C || x === "clear-night") + "</span>";
    if (c === "smooth") {
      const Z = Wu(x, S === 90, C, y + "g-" + O);
      return '<span class="wbWx wbS' + S + " wb" + Z.k[0].toUpperCase() + Z.k.slice(1) + (Z.night ? " wbNight" : "") + '" aria-hidden="true">' + Z.svg + "</span>";
    }
    return '<span class="wbWx wbS' + S + '" aria-hidden="true"><canvas data-wb-wx="' + qt(Ul(x, C)) + '" data-size="' + S + '"></canvas></span>';
  }
  const Te = () => M("daily").filter((x) => x.templow != null).slice(0, Ju);
  function Qt(x, S) {
    const C = new Date(S.datetime), O = /* @__PURE__ */ new Date();
    return ds(C, O) ? Yt.today : ds(C, new Date(O.getTime() + Eo)) ? Yt.tomorrow : Dc(C, x);
  }
  const Ma = (x, S, C) => C === 0 ? Qt(x, S) : Dc(new Date(S.datetime), x);
  function Ea(x, S) {
    var Lt, kt, Gt, Rt;
    const C = Of(x, S);
    if (!C) return "";
    const O = Te(), Z = P.openDay !== void 0 ? O[P.openDay] : void 0, J = mn(x, S, "temperature"), dt = O[0], bt = dt && ds(new Date(dt.datetime), /* @__PURE__ */ new Date()), wt = ((kt = (Lt = x.config) == null ? void 0 : Lt.unit_system) == null ? void 0 : kt.temperature) || ((Gt = C.attributes) == null ? void 0 : Gt.temperature_unit) || "";
    let Pt = '<div class="wbCard wbWeather' + (Z ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (Z ? " inert" : "") + '><div class="wbNow">' + (w ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + qt(Yt.openPage) + '">' : '<div class="wbCurrent">') + Xt(C.state, 90, Ff(x), "now") + '<div class="wbTempBlock">' + (J && Ke(J.value) ? '<div class="wbTemp"><span class="wbDeg">' + qt(fa(Math.round(Number(J.value)), x.locale)) + '</span><span class="wbUnit">' + qt(wt) + "</span></div>" : "") + '<div class="wbPlace">' + qt(((Rt = x.config) == null ? void 0 : Rt.location_name) ?? "") + "</div></div>" + (w ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + qt(gr(x, C)) + "</div>" + (bt && dt.templow != null ? '<div class="wbRange">' + qt(Na(Yt.range, { high: oa(x, dt.temperature), low: oa(x, dt.templow) })) + "</div>" : "") + "</div></div>";
    if (Pt += we(x) + Bo(x), O.length) {
      const Ft = bt && J && Ke(J.value) ? oa(x, J.value) : "", Zt = (Vt, Tt, ee) => Vt === 0 && Ft ? '<span class="wbAsDay">' + qt(Tt) + '</span><span class="wbAsNow">' + qt(ee) + "</span>" : qt(Tt);
      Pt += '<div class="wbColumns" role="list">' + O.map((Vt, Tt) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + Tt + '" data-wb-focus="col-' + Tt + '"><span class="wbDay">' + Zt(Tt, Ma(x, Vt, Tt), Yt.now) + "</span>" + Xt(Vt.condition ?? "cloudy", 60, !1, "col" + Tt) + '<span class="wbTemps"><span class="wbHi">' + Zt(Tt, oa(x, Vt.temperature), Ft) + '</span><span class="wbLo">' + qt(oa(x, Vt.templow)) + "</span></span></button>").join("") + "</div>", Pt += '<div class="wbHalves" role="list">' + O.map((Vt, Tt) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + Tt + '" data-wb-focus="half-' + Tt + '">' + Xt(Vt.condition ?? "cloudy", 40, !1, "half" + Tt) + '<span class="wbText"><span class="wbName">' + qt(Qt(x, Vt)) + '</span><span class="wbSub">' + qt(Na(Yt.highLow, { high: oa(x, Vt.temperature), low: oa(x, Vt.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return Pt + "</div>" + (Z ? Ta(x, S, Z) : "") + "</div>";
  }
  const xr = {
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
  }, de = {
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
  function Kt(x) {
    const S = Date.now(), C = M("hourly").filter((kt) => new Date(kt.datetime).getTime() > S - Fe).slice(0, 13);
    if (C.length < 2) return "";
    const O = (kt) => Lo(new Date(kt.datetime), x), Z = (kt) => xr[kt.condition] || "", J = (kt) => de[kt.condition] || kt.condition;
    let dt = Z(C[0]);
    if (!dt) return "";
    let bt = C[0], wt = 0;
    for (const kt of C.slice(1))
      wt === 2 || J(kt) === J(bt) || !Z(kt) || (dt += (wt ? " and " : ", ") + Z(kt) + " from " + O(kt), bt = kt, wt++);
    const Pt = Number(C[0].temperature), Lt = C.filter((kt) => Ke(kt.temperature));
    if (Ke(Pt) && Lt.length) {
      const kt = Lt.reduce((Rt, Ft) => Number(Ft.temperature) < Number(Rt.temperature) ? Ft : Rt), Gt = Lt.reduce((Rt, Ft) => Number(Ft.temperature) > Number(Rt.temperature) ? Ft : Rt);
      Pt - Number(kt.temperature) >= 3 ? dt += ", down to " + oa(x, kt.temperature) + " by " + O(kt) : Number(Gt.temperature) - Pt >= 3 && (dt += ", up to " + oa(x, Gt.temperature) + " by " + O(Gt));
    }
    return dt[0].toUpperCase() + dt.slice(1) + ".";
  }
  const we = (x) => {
    const S = Kt(x);
    return S ? '<div class="wbSummary"><p class="wbSummaryText">' + qt(S) + "</p></div>" : "";
  };
  function Bo(x) {
    const [S, C] = Bl[L == null ? void 0 : L()] || Bl.day, O = Date.now(), Z = M("hourly").filter((J) => {
      const dt = new Date(J.datetime), bt = dt.getHours();
      return dt.getTime() > O - Fe / 2 && bt >= S && bt < C && Ke(J.temperature);
    }).slice(0, 4);
    return Z.length ? '<div class="wbNextHours" role="list">' + Z.map((J, dt) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + qt(Lo(new Date(J.datetime), x)) + "</span>" + Xt(J.condition ?? "cloudy", 40, J.is_daytime === !1, "hr" + dt) + '<span class="wbHourTemp">' + qt(oa(x, J.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function yr(x) {
    const S = x.getTime(), C = Date.now() - Fe;
    return M("hourly").filter((O) => {
      const Z = new Date(O.datetime).getTime();
      return Z >= S && Z < S + Eo && Z > C;
    });
  }
  function Ui(x) {
    if (!x.length) return ["temperature"];
    const S = ["temperature"];
    return x.some((C) => C.precipitation != null || C.precipitation_probability != null) && S.push("precipitation"), x.some((C) => C.humidity != null) && S.push("humidity"), S;
  }
  function Ta(x, S, C) {
    const O = us(new Date(C.datetime)), Z = yr(O), J = Ui(Z), dt = J.includes(P.dayMode) ? P.dayMode : "temperature", bt = (wt) => wt === "humidity" ? Yt.humidity : Yt.modes[wt];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + Xt(C.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + qt(Qt(x, C)) + '</span><span class="wbSub">' + qt(Na(Yt.highLow, { high: oa(x, C.temperature), low: oa(x, C.templow) })) + '</span></div><button class="wbBack" title="' + qt(Yt.back) + '" data-wb="close-day" data-wb-focus="back-day">' + ps(ka.back) + "</button></div>" + (J.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + J.map((wt) => '<button aria-pressed="' + (wt === dt) + '" data-wb="day-mode" data-mode="' + wt + '" data-wb-focus="day-mode-' + wt + '">' + qt(bt(wt)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Zf(fe(x, S, O, Z, dt)) + "</div></div>";
  }
  function fe(x, S, C, O, Z) {
    var Rn;
    const J = C.getTime(), dt = Date.now(), bt = ds(C, /* @__PURE__ */ new Date()), wt = (ce) => (ce - J) / co, Pt = (ce) => Lo(new Date(ce), x), Lt = (ce) => new Date(ce.datetime).getTime(), kt = [0, 3, 6, 9, 12, 15, 18, 21].map((ce) => ({ t: ce * 60, label: Pt(J + ce * Fe), minor: ce % 6 !== 0 })), { rise: Gt, set: Rt } = Ed(x, C), Ft = [], Zt = [];
    Gt && (Ft.push({ t: wt(Gt.getTime()), label: Pt(Gt.getTime()), rise: !0 }), Zt.push([0, wt(Gt.getTime())])), Rt && (Ft.push({ t: wt(Rt.getTime()), label: Pt(Rt.getTime()), rise: !1 }), Zt.push([wt(Rt.getTime()), Us]));
    const Vt = Gl(x);
    !Gt && !Rt && Vt && tc(new Date(J + Eo / 2), Vt.lat, Vt.lon) < 0 && Zt.push([0, Us]);
    const Tt = bt ? wt(dt) : void 0, ee = { hours: kt, sun: Ft, night: Zt };
    if (!O.length && !bt) return { ...ee, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Yt.noHourly };
    if (Z === "precipitation") {
      const ce = O.some((Aa) => Aa.precipitation_probability != null), Oa = O.map((Aa) => ({ t: wt(Lt(Aa)), v: Number((ce ? Aa.precipitation_probability : Aa.precipitation) ?? 0) })), sn = vr(x, E(x, "hourly"), "precipitation"), ln = Math.max(0, ...Oa.map((Aa) => Aa.v)), pi = ce ? 100 : Ic(0, Math.max(ln, 1), [0.5, 1, 2, 5, 10]).max, Sr = (Aa) => ce ? fa(Aa, x.locale) + "%" : fa(Aa, x.locale, { maximumFractionDigits: 1 }) + " " + sn, $n = Oa.find((Aa) => Aa.v === ln);
      return {
        ...ee,
        kind: "bars",
        points: Oa,
        min: 0,
        max: pi,
        ticks: [0, pi / 2, pi],
        format: Sr,
        now: Tt !== void 0 ? { t: Tt, v: 0 } : void 0,
        peak: $n && ln > 0 ? { t: $n.t + 30, v: $n.v, label: Sr($n.v) } : void 0,
        note: ln > 0 ? void 0 : Yt.noRain
      };
    }
    const ie = Z === "humidity" ? "humidity" : "temperature", Ge = O.filter((ce) => ce[ie] != null && (!bt || Lt(ce) >= dt)).map((ce) => ({ t: wt(Lt(ce)), v: Number(ce[ie]) }));
    let Nt, Pe = [];
    if (Tt !== void 0) {
      const ce = mn(x, S, ie);
      ce && Ke(ce.value) && (Nt = { t: Tt, v: Number(ce.value) }, Ge.unshift(Nt)), Pe = (((Rn = lt.todayHistory) == null ? void 0 : Rn.day) === C.toDateString() ? lt.todayHistory[ie] : []).filter((sn) => sn.time <= dt).map((sn) => ({ t: Math.max(0, wt(sn.time)), v: sn.value })), Nt && Pe.length && Pe.push(Nt);
    }
    const $e = [...Pe, ...Ge];
    if (!$e.length) return { ...ee, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: Yt.noHourly };
    const Fa = $e.map((ce) => ce.v), Dn = Ic(Math.min(...Fa), Math.max(...Fa), ie === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    ie === "humidity" && (Dn.min = Math.max(0, Dn.min), Dn.max = Math.min(100, Dn.max), Dn.ticks = Dn.ticks.filter((ce) => ce >= 0 && ce <= 100));
    const Bn = ie === "humidity" ? (ce) => fa(ce, x.locale) + "%" : (ce) => oa(x, ce), Xi = ie === "temperature" ? $e.reduce((ce, Oa) => Oa.v > ce.v ? Oa : ce) : void 0;
    return { ...ee, kind: "line", points: Ge, past: Pe, ...Dn, format: Bn, now: Nt, peak: Xi ? { ...Xi, label: Bn(Xi.v) } : void 0 };
  }
  function Oe(x) {
    const S = ["temperature"];
    return x.some((C) => C.precipitation_probability != null || C.precipitation != null) && S.push("precipitation"), x.some((C) => C.wind_speed != null) && S.push("wind"), S;
  }
  function kr(x, S, C = Mc) {
    var J, dt;
    const O = M("daily"), Z = [];
    for (let bt = 0; bt < C; bt++) for (const wt of [!1, !0]) {
      const Pt = x.getTime() + (bt * 24 + (wt ? 12 : 0)) * Fe, Lt = Pt + 12 * Fe, kt = {};
      S.forEach((Rt) => {
        const Ft = new Date(Rt.datetime).getTime();
        Rt.condition && Ft >= Pt && Ft < Lt && (kt[Rt.condition] = (kt[Rt.condition] ?? 0) + (of.has(Rt.condition) ? 2 : 1));
      });
      let Gt = (J = Object.entries(kt).sort((Rt, Ft) => Ft[1] - Rt[1])[0]) == null ? void 0 : J[0];
      if (!Gt) {
        const Rt = new Date(Pt).toDateString();
        Gt = ((dt = O.find((Ft) => new Date(Ft.datetime).toDateString() === Rt)) == null ? void 0 : dt.condition) ?? "cloudy";
      }
      Z.push({ cond: wt && Gt === "sunny" ? "clear-night" : Gt, night: wt });
    }
    return Z;
  }
  function li(x, S, C) {
    const O = E(x, "hourly"), Z = S.precipitation_probability != null ? fa(S.precipitation_probability, x.locale) + "%" : "", J = S.precipitation ? fa(S.precipitation, x.locale) + " " + vr(x, O, "precipitation") : "";
    switch (C) {
      case "precipitation":
        return Z ? [Z, J] : [J || "–", ""];
      case "wind":
        return S.wind_speed != null ? [fa(Math.round(S.wind_speed), x.locale), vr(x, O, "wind_speed")] : ["–", ""];
      default:
        return [oa(x, S.temperature), (S.precipitation_probability ?? 0) >= 20 ? Z : ""];
    }
  }
  function xe(x, S, C) {
    const [O, Z] = Bl[L == null ? void 0 : L()] || Bl.day, J = [];
    for (let dt = 0; dt < 4 && J.length < 3; dt++) {
      const bt = /* @__PURE__ */ new Date();
      bt.setHours(0, 0, 0, 0), bt.setDate(bt.getDate() + dt);
      const wt = new Date(bt);
      wt.setHours(Z, 0, 0, 0), bt.setHours(O, 0, 0, 0), !(wt.getTime() <= C || !S.some((Pt) => {
        const Lt = new Date(Pt.datetime).getTime();
        return Lt >= bt.getTime() && Lt <= wt.getTime();
      })) && J.push({ a: bt.getTime(), b: wt.getTime(), label: Qt(x, { datetime: bt.toISOString() }) });
    }
    return J;
  }
  function St(x, S, C, O, Z, J) {
    const dt = (C.b - S.a) / Fe, bt = (Tt) => ((Tt - S.a) / Fe).toFixed(3), wt = 80, Pt = 32, Lt = [];
    for (const Tt = new Date(S.a - Eo); Tt.getTime() < C.b + Eo; Tt.setDate(Tt.getDate() + 1)) {
      const { rise: ee, set: ie } = Ed(x, new Date(Tt));
      ee && ie && Lt.push({ rise: ee.getTime(), set: ie.getTime() });
    }
    const kt = (Tt, ee) => wt - (wt - Pt) * Math.sin(Math.PI * (ee - Tt.rise) / (Tt.set - Tt.rise)), Gt = (Tt) => !Lt.some((ee) => Tt >= ee.rise && Tt <= ee.set);
    let Rt = "", Ft = "", Zt = "";
    Lt.forEach((Tt, ee) => {
      const ie = [];
      for (let Nt = Tt.rise; Nt <= Tt.set; Nt += 15 * co) ie.push(bt(Nt) + "," + kt(Tt, Nt).toFixed(2));
      ie.push(bt(Tt.set) + "," + wt), Rt += '<polyline class="wbLineArc" points="' + ie.join(" ") + '"/>';
      const Ge = Lt[ee + 1];
      Ge && (Rt += '<rect class="wbLineNight" x="' + bt(Tt.set) + '" y="0" width="' + ((Ge.rise - Tt.set) / Fe).toFixed(3) + '" height="100"/>'), [[Tt.rise, "↑"], [Tt.set, "↓"]].forEach(([Nt, Pe]) => {
        Nt < S.a || Nt > C.b || (Ft += '<line class="wbLineEdge" x1="' + bt(Nt) + '" x2="' + bt(Nt) + '" y1="0" y2="100"/>', Zt += '<span class="wbLineTime" style="left:' + J(Nt) + '">' + Pe + " " + qt(Lo(new Date(Nt), x)) + "</span>");
      });
    });
    const Vt = Lt.find((Tt) => Z >= Tt.rise && Z <= Tt.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + dt + ' 100" preserveAspectRatio="none" aria-hidden="true">' + Rt + Ft + '<line class="wbLineHorizon" x1="0" x2="' + dt + '" y1="' + wt + '" y2="' + wt + '"/></svg>' + Zt + (Vt ? '<span class="wbLineNow" style="left:' + J(Z) + ";top:" + kt(Vt, Z) + '%">' + Ld("sunny", !1) + "</span>" : "") + O.filter((Tt) => Tt.entry && !Tt.now).map((Tt) => '<span class="wbLineGlyph' + Tt.edge + '" style="left:' + J(Tt.t) + '">' + Ld(Tt.entry.condition ?? "cloudy", Gt(Tt.t)) + "</span>").join("");
  }
  function ze(x, S) {
    delete It.hourly;
    const C = P.hourlyView === "bars" ? "bars" : "strip", O = '<div class="wbHeader"><h2 class="wbTitle">' + qt(C === "bars" ? Yt.nextDays : Yt.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + qt(Yt.showAs) + '">' + ["strip", "bars"].map((Nt) => '<button aria-pressed="' + (Nt === C) + '" data-wb="hourly-view" data-view="' + Nt + '" data-wb-focus="hourly-view-' + Nt + '">' + qt(Yt.views[Nt]) + "</button>").join("") + "</div></div>";
    if (C === "bars") return Ia(x, S, O);
    const Z = M("hourly"), J = Math.floor(Date.now() / co) * co, dt = Z.filter((Nt) => new Date(Nt.datetime).getTime() > J - Fe);
    if (!dt.length) return "";
    const bt = Oe(dt), wt = bt.includes(P.hourlyMode) ? P.hourlyMode : "temperature", Pt = xe(x, Z, J);
    if (!Pt.length) return "";
    const Lt = Pt[0], kt = Pt[Pt.length - 1], Gt = (Lt.b - Lt.a) / Fe, Rt = (Nt) => "calc(var(--wb-u) * " + ((Nt - Lt.a) / Fe).toFixed(3) + ")", Ft = new Date(Lt.a);
    Ft.setHours(6, 0, 0, 0), Ft.getTime() > Lt.a && Ft.setDate(Ft.getDate() - 1);
    const Zt = Math.ceil((kt.b - Ft.getTime()) / Eo);
    c !== "line" && (It.hourly = { segs: kr(Ft, Z, Zt), seed: Ft.getDate(), columns: Zt });
    const Vt = (Nt) => Nt === Lt.a ? " wbFirst" : Nt === kt.b ? " wbLast" : "", Tt = [];
    for (let Nt = Lt.a; Nt < kt.b; ) {
      const Pe = new Date(Nt);
      Pe.setHours(24, 0, 0, 0);
      const $e = Math.min(Pe.getTime(), kt.b);
      Tt.push({ a: Nt, b: $e, label: Qt(x, { datetime: new Date(Nt).toISOString() }), page: Pt.find((Fa) => Fa.a >= Nt && Fa.a < $e) || Pt.find((Fa) => Fa.a < $e && Fa.b > Nt) }), Nt = $e;
    }
    const ee = J > Lt.a && J < kt.b ? Math.floor((J - Lt.a) / (2 * Fe)) * 2 : 0, ie = [];
    for (let Nt = Lt.a; Nt <= kt.b; Nt += Fe) {
      const Pe = new Date(Nt), $e = Vt(Nt);
      !$e && Pe.getHours() % tf || !$e && (Math.abs(Lt.a - Nt) < 2 * Fe || Math.abs(kt.b - Nt) < 2 * Fe) || J >= Lt.a && Math.abs(Nt - J) < 1.5 * Fe && !$e || ie.push({ t: Nt, edge: $e, label: Lo(Pe, x), entry: Nt >= J - Fe ? Z.find((Fa) => new Date(Fa.datetime).getTime() === Nt) : void 0 });
    }
    J > Lt.a && J < Lt.b && ie.push({ t: J, edge: J - Lt.a < Fe ? " wbFirst" : Lt.b - J < Fe ? " wbLast" : "", label: Yt.now, entry: dt[0], now: !0 });
    const Ge = (Nt, Pe) => '<span class="wbMark' + Nt.edge + (Nt.now ? " wbNowMark" : "") + '" style="left:' + Rt(Nt.t) + '">' + Pe + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + O + (bt.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + bt.map((Nt) => '<button aria-pressed="' + (Nt === wt) + '" data-wb="hourly-mode" data-mode="' + Nt + '" data-wb-focus="hourly-mode-' + Nt + '">' + qt(Yt.modes[Nt]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + qt(Yt.nextHours) + '" data-span="' + Gt + '" data-start="' + ee + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Gt + ");width:calc(var(--wb-u) * " + (kt.b - Lt.a) / Fe + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((kt.b - Lt.a) / (2 * Fe)) + 1)].map((Nt, Pe) => '<i class="wbSnap" style="left:' + Rt(Lt.a + Pe * 2 * Fe) + '"></i>').join("") + '<div class="wbDays">' + Tt.map((Nt, Pe) => {
      var $e;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((Nt.b - Nt.a) / Fe).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (Pe === 0 ? ee : (((($e = Nt.page) == null ? void 0 : $e.a) ?? Nt.a) - Lt.a) / Fe) + '" data-wb-focus="hours-day-' + Pe + '">' + qt(Nt.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + ie.map((Nt) => Ge(Nt, qt(Nt.label))).join("") + "</div>" + (c === "line" ? '<div class="wbSky wbLineSky">' + St(x, Lt, kt, ie, J, Rt) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + Rt(Ft.getTime()) + ";width:calc(var(--wb-u) * " + Zt * 24 + ')"><canvas data-wb-strip="hourly"' + (c === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (J > Lt.a ? '<i class="wbPast" style="width:' + Rt(Math.min(J, kt.b)) + '"></i><i class="wbNowLine" style="left:' + Rt(J) + '"></i>' : "") + Tt.slice(1).map((Nt) => '<i class="wbMidnight" style="left:' + Rt(Nt.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + ie.map((Nt) => {
      if (!Nt.entry) return "";
      const [Pe, $e] = li(x, Nt.entry, wt);
      return Ge(Nt, '<span class="wbPrimaryV">' + qt(Pe) + '</span><span class="wbSecondary">' + qt($e) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function Ht(x) {
    const S = ef, C = S.findIndex(([wt]) => wt >= x);
    if (C <= 0) return "rgb(" + S[C < 0 ? S.length - 1 : 0][1].join(",") + ")";
    const [O, Z] = S[C - 1], [J, dt] = S[C], bt = (x - O) / (J - O);
    return "rgb(" + Z.map((wt, Pt) => Math.round(wt + (dt[Pt] - wt) * bt)).join(",") + ")";
  }
  function Ia(x, S, C) {
    var Rt;
    const O = M("daily").filter((Ft) => Ke(Ft.templow) && Ke(Ft.temperature)).slice(0, 7);
    if (!O.length) return "";
    const Z = Math.min(...O.map((Ft) => Number(Ft.templow))), J = Math.max(...O.map((Ft) => Number(Ft.temperature))), dt = Math.max(1, J - Z), bt = (Ft) => Math.max(0, Math.min(100, (Ft - Z) / dt * 100)).toFixed(2), wt = /F/.test(vr(x, E(x, "daily"), "temperature")), Pt = (Ft) => wt ? (Ft - 32) / 1.8 : Ft, Lt = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((Ft) => Ht(Pt(Z + Ft * dt)) + " " + Ft * 100 + "%").join(",") + ")", kt = (Rt = mn(x, S, "temperature")) == null ? void 0 : Rt.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (Oe(M("hourly").filter((Ft) => new Date(Ft.datetime).getTime() > Date.now() - Fe)).length > 1 ? " wbTabbed" : "") + '">' + C + '<div class="wbDayBars" role="list">' + O.map((Ft, Zt) => {
      const Vt = Qt(x, Ft), Tt = ds(new Date(Ft.datetime), /* @__PURE__ */ new Date()), ee = Number(Ft.templow), ie = Number(Ft.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + qt(Na(Yt.rangeRow, { day: Vt, low: oa(x, ee), high: oa(x, ie) })) + '"><span class="wbRangeDay">' + qt(Vt) + "</span>" + Xt(Ft.condition, 40, !1, "r" + Zt) + '<span class="wbRangeLo">' + qt(oa(x, ee)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + Lt + ";clip-path:inset(0 " + (100 - bt(ie)) + "% 0 " + bt(ee) + '% round 4px)"></i>' + (Tt && Ke(kt) ? '<i class="wbRangeNow" style="left:' + bt(Number(kt)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + qt(oa(x, ie)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  function jn(x) {
    const S = _t, { rise: C, set: O } = Ed(x, S), Z = C && O ? Math.round((O.getTime() - C.getTime()) / co) : 0, J = Math.floor(Z / 60), dt = Z % 60, bt = C && O ? (S.getTime() - C.getTime()) / (O.getTime() - C.getTime()) : -1, wt = bt >= 0 && bt <= 1, Pt = Math.PI * (1 - Math.min(1, Math.max(0, bt))), Lt = 100 + 74 * Math.cos(Pt), kt = 100 - 74 * Math.sin(Pt), Gt = wt ? Math.sin(Math.PI * bt) : 0, Rt = wt ? Gs("#2e0a0d", "#43180a", Gt) : "#0e0507", Ft = wt ? Gs("#7a1d12", "#8f400f", Gt) : "#1c0709", Zt = Gs("#f60c08", "#ff8f00", Gt), Vt = Gs("#fd9b07", "#ffd84a", Gt), Tt = wt ? Gs("#fd9b07", "#ffd84a", Gt) : "#6b3a2a", ee = (Ge) => Ge ? Lo(Ge, x) : "–", ie = C && O ? new Date((C.getTime() + O.getTime()) / 2) : null;
    return gn({
      icon: ka.sunny,
      name: Yt.sun,
      sub: Z ? Na(Yt.daylightShort, { hours: J, minutes: dt }) : void 0,
      visual: '<div class="wbSunSky" style="background:linear-gradient(180deg, ' + Rt + ", " + Ft + ");--wb-sun-line:" + Tt + '"><svg viewBox="0 0 200 124" aria-hidden="true"><defs><radialGradient id="' + y + 'sun-glow"><stop offset="0" stop-color="' + Zt + '"></stop><stop offset="0.45" stop-color="' + Zt + '"></stop><stop offset="1" stop-color="' + Vt + '"></stop></radialGradient><clipPath id="' + y + 'above-horizon"><rect x="0" y="0" width="200" height="100"></rect></clipPath></defs><path class="wbSunPath" d="M 26 100 A 74 74 0 0 1 174 100"></path><line class="wbHorizon" x1="0" x2="200" y1="100" y2="100"></line>' + (wt ? '<circle cx="' + Lt + '" cy="' + kt + '" r="14" fill="url(#' + y + 'sun-glow)" clip-path="url(#' + y + 'above-horizon)"></circle>' : "") + (ie ? '<text class="wbSunTime wbNoon" x="100" y="1">' + qt(ee(ie)) + "</text>" : "") + '<text class="wbSunTime" x="26" y="117">' + qt(ee(C)) + '</text><text class="wbSunTime" x="174" y="117">' + qt(ee(O)) + "</text></svg></div>"
    });
  }
  function Yi(x, S, C) {
    const O = (dt) => y + "moon-" + dt, Z = x > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + O("terminator") + ')" d="' + Yf(61, 61, 57.9, x) + '"' + (S ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", J = (dt, bt, wt, Pt, Lt, kt) => '<filter id="' + O(dt) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + bt + '" numOctaves="' + wt + '" seed="' + Pt + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Gt) => "<feFunc" + Gt + ' type="linear" slope="' + Lt + '" intercept="' + kt + '"></feFunc' + Gt + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + O("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + O("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + O("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + O("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + O("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + J("mottle", "0.045", 4, 3, 1.8, -0.4) + J("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + O("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + O("fill") + ')"></circle><g' + (C ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + O("soften") + ')">' + Xf.map(([dt, bt, wt, Pt, Lt, kt]) => '<ellipse cx="' + dt + '" cy="' + bt + '" rx="' + wt + '" ry="' + Pt + '" fill-opacity="' + kt + '" transform="rotate(' + Lt + " " + dt + " " + bt + ')"></ellipse>').join("") + "</g>" + Jf.map(([dt, bt, wt]) => '<circle class="wbCrater" cx="' + dt + '" cy="' + bt + '" r="' + wt + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + O("glow") + ')">' + Qf.map(([dt, bt]) => '<line x1="54.4" y1="95" x2="' + dt + '" y2="' + bt + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + O("glow") + ')">' + Hc.map(([dt, bt, wt]) => '<circle cx="' + dt + '" cy="' + bt + '" r="' + wt * 2 + '"></circle>').join("") + "</g>" + Hc.map(([dt, bt, wt]) => '<circle class="wbBrightCenter" cx="' + dt + '" cy="' + bt + '" r="' + wt + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + O("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + O("grain") + ')"></rect>' + Z + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function Ut(x) {
    const S = H, C = Gl(x), O = (C == null ? void 0 : C.lat) ?? 0, Z = If(S), J = Pc(x), dt = J ? x.states[J] : void 0, bt = wr(dt) && hf.includes(dt.state) ? dt.state : Hf(Z.phase), { rise: wt, set: Pt } = C ? Pf(S, C.lat, C.lon) : {}, Lt = Z.phase > 0.5 != O < 0, kt = fa(Math.round(Z.fraction * 100), x.locale) + "%", Gt = wt ?? Pt, Rt = Gt ? Lo(Gt, x) : void 0;
    return gn({
      icon: ka.night,
      name: Yt.moon,
      sub: Yt.phases[bt],
      visual: '<div class="wbMoonBox">' + Yi(Z.fraction, Lt, O < 0) + '</div><div class="wbScaleNote wbMoonCaption"><span>' + (Rt ? qt(Na(wt ? Yt.moonriseAt : Yt.moonsetAt, { time: Rt })) : "") + "</span><span>" + qt(Na(Yt.lit, { illumination: kt })) + "</span></div>"
    });
  }
  function ne(x, S) {
    var Ft;
    const C = mn(x, S, "wind_speed");
    if (!C || !Ke(C.value)) return "";
    const O = mn(x, S, "wind_gust_speed"), Z = mn(x, S, "wind_bearing"), J = Z && Ke(Z.value) ? Number(Z.value) : void 0, dt = zf(Number(C.value), (Ft = C.stateObj.attributes) == null ? void 0 : Ft.wind_speed_unit), bt = Wl(x, C.stateObj, "wind_speed", C.value), wt = J !== void 0 ? Yt.cardinal[ff[((J + 11.25) / 22.5 | 0) % 16]] : void 0, Pt = O ? qf(x, O.stateObj, "wind_gust_speed", O.value) : void 0, Lt = [wt ? Na(Yt.windFrom, { direction: wt }) : void 0, dt !== void 0 ? dt + " " + Yt.beaufort : void 0].filter(Boolean).join(" · ") || Pt, kt = (Zt, Vt) => {
      const Tt = (Zt - 90) * Math.PI / 180;
      return [100 + Vt * Math.cos(Tt), 100 + Vt * Math.sin(Tt)];
    }, Gt = Array.from({ length: 36 }, (Zt, Vt) => Vt * 10).map((Zt) => {
      const Vt = Zt % 90 === 0, [Tt, ee] = kt(Zt, 97), [ie, Ge] = kt(Zt, Vt ? 83 : 89);
      return '<line class="wbTick' + (Vt ? " wbMajor" : "") + '" x1="' + Tt + '" y1="' + ee + '" x2="' + ie + '" y2="' + Ge + '"></line>';
    }).join(""), Rt = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([Zt, Vt]) => {
      const [Tt, ee] = kt(Vt, 64);
      return '<text class="wbLetter' + (Zt === "n" ? " wbNorth" : "") + '" x="' + Tt + '" y="' + ee + '">' + qt(Yt.cardinal[Zt]) + "</text>";
    }).join("");
    return gn({ icon: ka.windy, name: Yt.wind, sub: Lt, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Gt + Rt + (J !== void 0 ? '<path class="wbMarker" transform="rotate(' + J + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + qt(bt.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + qt(bt.unit) + "</text></svg>" });
  }
  function Ve(x, S) {
    const C = mn(x, S, "uv_index");
    if (!C || !Ke(C.value)) return "";
    const O = Number(C.value), Z = Yt.uvLevel[jf(O)], J = /* @__PURE__ */ new Date();
    J.setHours(23, 59, 59, 999);
    const dt = M("hourly").filter((Zt) => Zt.uv_index != null && new Date(Zt.datetime) > /* @__PURE__ */ new Date() && new Date(Zt.datetime) <= J).reduce((Zt, Vt) => !Zt || Vt.uv_index > Zt.uv ? { uv: Vt.uv_index, time: new Date(Vt.datetime) } : Zt, void 0), bt = 48, wt = 100, Pt = 130, Lt = (Zt) => -bt + Math.min(Zt, 11) / 11 * 2 * bt, kt = (Zt, Vt) => {
      const Tt = Zt * Math.PI / 180;
      return [wt + Vt * Math.sin(Tt), Pt - Vt * Math.cos(Tt)];
    }, Gt = (Zt, Vt, Tt) => {
      const [ee, ie] = kt(Lt(Zt), Tt), [Ge, Nt] = kt(Lt(Vt), Tt);
      return "M " + ee + " " + ie + " A " + Tt + " " + Tt + " 0 0 1 " + Ge + " " + Nt;
    }, Ft = '<svg class="wbVu" viewBox="0 0 200 134" preserveAspectRatio="xMidYMax meet" aria-hidden="true">' + [[0, 3, Rl.low], [3, 6, Rl.moderate], [6, 8, Rl.high], [8, 11, Rl.very_high]].map(([Zt, Vt, Tt]) => '<path class="wbVuZone" d="' + Gt(Zt, Vt, 96) + '" style="stroke:' + Tt + '"></path>').join("") + Array.from({ length: 21 }, (Zt, Vt) => ({ angle: -bt + Vt * (2 * bt / 20), major: Vt % 2 === 0 })).map(({ angle: Zt, major: Vt }) => {
      const [Tt, ee] = kt(Zt, 102), [ie, Ge] = kt(Zt, Vt ? 114 : 108);
      return '<line class="wbVuTick' + (Vt ? " wbMajor" : "") + '" x1="' + Tt + '" y1="' + ee + '" x2="' + ie + '" y2="' + Ge + '"></line>';
    }).join("") + '<text class="wbVuLabel" x="100" y="70.1">UV</text><g class="wbVuNeedle" style="--wb-angle:' + Lt(O) + 'deg"><line x1="' + wt + '" y1="' + Pt + '" x2="' + wt + '" y2="' + (Pt - 116) + '"></line></g><path class="wbVuHousing" d="M 64 134 L 64 128 A 36 36 0 0 1 136 128 L 136 134 Z"></path><text class="wbVuValue" x="100" y="114.9">' + qt(fa(Math.round(O), x.locale)) + "</text></svg>";
    return gn({
      icon: ka.sunnyAlert,
      name: Yt.metrics.uv_index,
      sub: dt && dt.uv > O ? Na(Yt.uvPeak, { level: Z, uv_index: fa(Math.round(dt.uv), x.locale), time: Lo(dt.time, x) }) : Z,
      visual: Ft
    });
  }
  function Ro(x) {
    const S = M("daily")[0], C = lt.temperatureHistory;
    if (!S || new Date(S.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !Ke(S.temperature) || !C || C.dailyHighs.length < lf) return "";
    const O = Number(S.temperature), Z = C.dailyHighs.reduce((ie, Ge) => ie + Ge, 0) / C.dailyHighs.length, J = Math.round(O - Z) || 0, dt = J > 0 ? "above" : J < 0 ? "below" : "same", bt = [...C.days, { date: /* @__PURE__ */ new Date(), high: O, today: !0 }], wt = 220, Pt = 158, Lt = 22, kt = 20, Gt = bt.map((ie) => ie.high).concat(Z), Rt = Math.min(...Gt) - 3, Ft = Math.max(...Gt) + 1, Zt = (ie) => Lt + (1 - (ie - Rt) / (Ft - Rt)) * (Pt - Lt - kt), Vt = wt / bt.length, Tt = Math.min(18, Vt * 0.6), ee = '<svg class="wbCompareBars" viewBox="0 0 ' + wt + " " + Pt + '" aria-hidden="true"><line class="wbAvgLine" x1="0" x2="' + wt + '" y1="' + Zt(Z) + '" y2="' + Zt(Z) + '"></line>' + bt.map((ie, Ge) => {
      const Nt = Ge * Vt + Vt / 2, Pe = Zt(ie.high), $e = ie.today ? " wbToday" : "";
      return '<rect class="wbAvgBar' + $e + '" x="' + (Nt - Tt / 2) + '" y="' + Pe + '" width="' + Tt + '" height="' + (Pt - kt - Pe) + '" rx="5"></rect><text class="wbAvgValue' + $e + '" x="' + Nt + '" y="' + (Pe - 6) + '">' + qt(oa(x, ie.high)) + '</text><text class="wbAvgDay' + $e + '" x="' + Nt + '" y="' + (Pt - 4) + '">' + qt(Cf(ie.date, x)) + "</text>";
    }).join("") + "</svg>";
    return gn({
      icon: ka.chartLine,
      name: Yt.metrics.compared_to_average,
      double: !0,
      sub: Na(Yt.highsLastDays, { days: C.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (J > 0 ? "+" : "") + qt(oa(x, J)) + '</div><div class="wbCompareWords">' + qt(Yt.average[dt]) + '</div><div class="wbCompareTemps">' + qt(Na(Yt.todayVsAverage, { today: oa(x, O), average: oa(x, Z) })) + "</div></div>" + ee + "</div>"
    });
  }
  function Ha(x, S) {
    const C = mn(x, S, "humidity");
    if (!C || !Ke(C.value)) return "";
    const O = mn(x, S, "dew_point"), Z = Math.max(0, Math.min(100, Number(C.value)));
    return gn({
      icon: ka.waterPercent,
      name: Yt.metrics.humidity,
      sub: O && Ke(O.value) ? Na(Yt.dewPoint, { dew_point: oa(x, O.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + Z + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + ji(fa(Math.round(Number(C.value)), x.locale), "%") + "</div>"
    });
  }
  function ea(x, S) {
    var Pt, Lt;
    const C = mn(x, S, "pressure");
    if (!C || !Ke(C.value)) return "";
    const O = Number(C.value), Z = (Pt = C.stateObj.attributes) == null ? void 0 : Pt.pressure_unit, J = Nc(O, Z), dt = ((Lt = lt.pressureHistory) == null ? void 0 : Lt.entityId) === C.stateObj.entity_id ? Nc(lt.pressureHistory.value, Z) : void 0;
    let bt;
    if (J !== void 0 && dt !== void 0) {
      const kt = J - dt;
      bt = kt >= Tc ? "rising" : kt <= -Tc ? "falling" : "steady";
    }
    const wt = Wl(x, C.stateObj, "pressure", Math.round(O));
    return gn({
      icon: ka.gauge,
      name: Yt.metrics.pressure,
      sub: bt ? Yt.pressure[bt] : void 0,
      visual: '<div class="wbTapeRow"><div class="wbTapeValue">' + ji(wt.number) + '<span class="wbTapeUnit">' + qt(wt.unit) + "</span></div>" + (J !== void 0 ? di(x, J) : "") + "</div>"
    });
  }
  function di(x, S) {
    const Z = Math.floor(S) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (J, dt) => Z + dt).map((J) => {
      const dt = 100 - (J - S) * 9;
      if (dt < 22 || dt > 178) return "";
      const bt = J % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(dt - 100) / 100) + '"><line class="wbTapeTick" x1="' + (bt ? 2 : 8) + '" x2="26" y1="' + dt + '" y2="' + dt + '"></line>' + (bt ? '<text class="wbTapeLabel" x="33" y="' + dt + '">' + qt(fa(J, x.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + qt(Yt.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + qt(Yt.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function ra(x) {
    var wt, Pt;
    const S = Dd(x), C = S ? x.states[S] : void 0;
    if (!C || ((wt = lt.rain) == null ? void 0 : wt.entityId) !== S || !Ke(lt.rain.change)) return "";
    const O = ((Pt = C.attributes) == null ? void 0 : Pt.unit_of_measurement) ?? "", Z = E(x, "hourly"), J = Date.now() + Eo, dt = M("hourly").filter((Lt) => Lt.precipitation != null && new Date(Lt.datetime).getTime() <= J), bt = dt.reduce((Lt, kt) => Lt + Number(kt.precipitation), 0);
    return gn({
      icon: ka.rainy,
      name: Yt.metrics.precipitation,
      sub: Z && dt.length ? Na(Yt.rainExpected, { amount: fa(bt, x.locale, { maximumFractionDigits: 1 }) + " " + vr(x, Z, "precipitation") }) : Yt.rainLast24h,
      visual: ji(fa(lt.rain.change, x.locale, { maximumFractionDigits: 1 }), O) + (dt.length > 1 ? $f(dt.map((Lt) => ({ label: "", value: Number(Lt.precipitation) }))) : "")
    });
  }
  function zn(x, S) {
    const C = mn(x, S, "visibility");
    if (!C || !Ke(C.value)) return "";
    const O = Wl(x, C.stateObj, "visibility", C.value), Z = $u(Number(C.value), vr(x, C.stateObj, "visibility"));
    return gn({
      icon: ka.eyeOutline,
      name: Yt.metrics.visibility,
      sub: Yt.visibilityLevel[Xu(Z)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + Z + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + qt(Vn(x, Z)) + '</div><div class="wbSeaValue">' + ji(O.number, O.unit) + "</div></div>"
    });
  }
  function Vn(x, S) {
    var J;
    const C = Ku((J = x.config) == null ? void 0 : J.country, S);
    if (C) return Na(Yt.visibilityLandmarks, { from: C.from, to: C.to });
    const O = S / pf * 60;
    if (O < 60) {
      const dt = O < 5 ? Math.max(1, Math.round(O)) : 5 * Math.round(O / 5);
      if (dt < 60) return Na(Yt.walkMinutes, { minutes: fa(dt, x.locale) });
    }
    const Z = Math.max(1, Math.round(O / 30) / 2);
    return Z < 8 ? Na(Yt.walkHours, { hours: fa(Z, x.locale) }) : Yt.walkDay;
  }
  function No(x) {
    lt.categories === void 0 && Ca(x);
    const S = me(x), C = (wt) => wt.map((Pt) => x.states[Pt]).filter(wr), O = C(S.air), Z = C(S.pollen);
    if (!O.length && !Z.length) return "";
    const J = [...O, ...Z], dt = (wt) => Z.includes(wt) ? ka.flower : ka.airFilter, bt = J.find((wt) => wt.entity_id === P.aq);
    return bt ? Ye(x, bt, dt(bt)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + qt(Yt.airQuality) + '</h2></div><div class="wbAqTiles">' + J.map((wt) => '<button class="wbTile" data-wb="aq-open" data-entity="' + qt(wt.entity_id) + '"><span class="wbChip">' + ps(dt(wt)) + '</span><span class="wbText"><span class="wbName">' + qt(Vs(x, wt)) + '</span><span class="wbSub">' + qt(gr(x, wt)) + "</span></span></button>").join("") + "</div></div>";
  }
  function Ye(x, S, C) {
    var Lt, kt, Gt;
    const O = ((Lt = S.attributes) == null ? void 0 : Lt.unit_of_measurement) ?? "", Z = ((kt = S.attributes) == null ? void 0 : kt.device_class) === "pm25" && O === Ac && Ke(S.state), J = Number(S.state), dt = Z ? Rc(J) : void 0, bt = ((Gt = lt.aqHistory) == null ? void 0 : Gt.entityId) === S.entity_id ? lt.aqHistory.points : void 0, wt = (Rt) => Math.min(100, Math.max(0, Rt / Nl * 100));
    let Pt;
    if (bt && bt.length > 1) Pt = Kf(bt, (Rt) => (fa(Rt, x.locale, { maximumFractionDigits: 1 }) + " " + O).trim());
    else if (dt) {
      let Rt = 0;
      const Ft = yp.map(([Zt, Vt]) => {
        const Tt = wt(Math.min(Vt, Nl)), ee = mf[Zt] + " " + Rt + "% " + Tt + "%";
        return Rt = Tt, ee;
      });
      Pt = '<div class="wbScale" role="meter" aria-label="' + qt(Yt.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + Nl + '" aria-valuenow="' + J + '" style="background:linear-gradient(to right, ' + Ft.join(", ") + ')"><i style="left:' + wt(J) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + Nl + " " + Ac + "</span></div>";
    } else Pt = '<span class="wbGraphNote"><span>' + qt(gr(x, S)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + ps(C) + '</span><span class="wbText"><span class="wbName">' + qt(Vs(x, S)) + '</span><span class="wbSub">' + qt(gr(x, S)) + (dt ? " · " + qt(Yt.aqLevel[dt]) : "") + '</span></span><button class="wbBack" title="' + qt(Yt.back) + '" data-wb="aq-close">' + ps(ka.back) + '</button></div><div class="wbGraph">' + Pt + "</div></div></div>";
  }
  const Gn = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, Ga = (x) => x <= 50 ? "Good" : x <= 100 ? "Moderate" : x <= 150 ? "Unhealthy for some" : x <= 200 ? "Unhealthy" : x <= 300 ? "Very unhealthy" : "Hazardous";
  function Un(x) {
    const S = /* @__PURE__ */ new Map();
    return Object.values(x.states || {}).filter((C) => {
      var O;
      return C.entity_id.startsWith("sensor.") && zl.includes(((O = C.attributes) == null ? void 0 : O.device_class) ?? "") && wr(C) && fs(x, C.entity_id);
    }).sort((C, O) => C.entity_id.localeCompare(O.entity_id)).forEach((C) => {
      S.has(C.attributes.device_class) || S.set(C.attributes.device_class, C);
    }), zl.map((C) => S.get(C)).filter(Boolean);
  }
  const Yn = (x) => Object.values(x.states || {}).filter((S) => {
    var C, O;
    return S.entity_id.startsWith("sensor.") && wr(S) && fs(x, S.entity_id) && (((O = (C = x.entities) == null ? void 0 : C[S.entity_id]) == null ? void 0 : O.translation_key) ?? S.entity_id).toLowerCase().includes("pollen");
  }), sa = ["none", "very_low", "low", "moderate", "high", "very_high"], Ln = (x) => Ke(x.state) ? Number(x.state) : sa.indexOf(String(x.state).toLowerCase().replace(/ /g, "_")), bn = (x) => {
    const S = String(x).replace(/_/g, " ");
    return S[0].toUpperCase() + S.slice(1);
  }, Po = (x) => x.length ? '<div class="wbBaseRows">' + x.map(([S, C]) => '<span class="wbBaseRow"><span>' + qt(S) + "</span><span>" + qt(C) + "</span></span>").join("") + "</div>" : "";
  function Zi(x) {
    const S = Un(x), C = S[0];
    if (!C) return gn({ icon: ka.airFilter, name: Yt.airQuality, sub: Yt.noAir, visual: ji("–", ""), cls: "wbBase" });
    const O = C.attributes.device_class, Z = Number(C.state), J = Ke(C.state), dt = O === "aqi" && J ? Ga(Z) : O === "pm25" && J ? Gn[Rc(Z)] : gr(x, C);
    return gn({
      icon: ka.airFilter,
      name: Yt.airQuality,
      sub: dt,
      cls: "wbBase",
      visual: ji(J ? fa(Math.round(Z), x.locale) : String(C.state), O === "aqi" ? "AQI" : C.attributes.unit_of_measurement || "") + Po(S.slice(1, 3).map((bt) => [Vs(x, bt), gr(x, bt)]))
    });
  }
  function Ki(x) {
    const S = Yn(x).sort((Z, J) => Ln(J) - Ln(Z));
    if (!S.length) return gn({ icon: ka.flower, name: Yt.pollen, sub: Yt.noPollen, visual: ji("–", ""), cls: "wbBase" });
    const C = S[0], O = (Z) => Ke(Z.state) ? gr(x, Z) : bn(Z.state);
    return gn({
      icon: ka.flower,
      name: Yt.pollen,
      sub: Vs(x, C) + " · " + O(C),
      cls: "wbBase",
      visual: ji(O(C), "") + Po(S.slice(1, 3).map((Z) => [Vs(x, Z), O(Z)]))
    });
  }
  function ms(x) {
    const S = Date.now(), C = M("hourly").filter((J) => {
      const dt = new Date(J.datetime).getTime();
      return dt > S - Fe && dt < S + 12 * Fe;
    }), O = C.find((J) => (J.precipitation_probability ?? 0) >= 50 || (J.precipitation ?? 0) >= 0.2), Z = O ? Na(Yt.rainFrom, { time: Lo(new Date(Math.max(S, new Date(O.datetime).getTime())), x) }) : C.length ? Yt.noRain12 : void 0;
    return gn({ icon: ka.radar, name: Yt.rainRadar, sub: Z, cls: "wbBase", visual: '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i></div>' });
  }
  const Re = {
    current: Ea,
    hourly: ze,
    sun: jn,
    moon: Ut,
    wind: ne,
    uv_index: Ve,
    compared_to_average: Ro,
    humidity: Ha,
    pressure: ea,
    precipitation: ra,
    visibility: zn,
    air_quality: No,
    aq_tile: Zi,
    pollen_tile: Ki,
    radar_tile: ms
  };
  function ha(x) {
    var Pt, Lt, kt;
    const S = d == null ? void 0 : d();
    if (!S || K) return;
    const C = Pa(S);
    mt(S, C), lt.lastFetch || $t();
    const O = me(S), Z = Pc(S), J = Dd(S), dt = [
      ...C.map((Gt) => S.states[Gt]),
      S.states["sun.sun"],
      Z && S.states[Z],
      J && S.states[J],
      ...O.air.map((Gt) => S.states[Gt]),
      ...O.pollen.map((Gt) => S.states[Gt]),
      ...Y.some((Gt) => st.includes(Gt)) ? [...Un(S), ...Yn(S)] : [],
      S.locale,
      S.config,
      S.entities,
      Math.floor(Date.now() / co)
    ];
    if (!x && U && dt.length === U.length && dt.every((Gt, Rt) => Gt === U[Rt])) return;
    U = dt;
    const bt = R.getRootNode(), wt = bt.activeElement || document.activeElement;
    for (const Gt of Y) {
      const Rt = ot[Gt];
      let Ft = "";
      try {
        Ft = Re[Gt](S, C) || "";
      } catch {
        Ft = "";
      }
      if (Ft === Rt.html) continue;
      const Zt = wt && Rt.el.contains(wt) ? (Pt = wt.dataset) == null ? void 0 : Pt.wbFocus : void 0, Vt = Rt.el.querySelector(".wbStripScroll"), Tt = Vt ? Vt.scrollLeft : null;
      Rt.html = Ft, Rt.el.hidden = !Ft, Rt.el.innerHTML = Ft;
      const ee = Rt.el.querySelector(".wbStripScroll");
      ee && Tt != null ? ee.scrollTo({ left: Tt }) : ee != null && ee.dataset.start && ee.scrollTo({ left: Number(ee.dataset.start) * ee.clientWidth / Number(ee.dataset.span) }), Zt && !ft && ((Lt = Rt.el.querySelector('[data-wb-focus="' + Zt + '"]')) == null || Lt.focus());
    }
    ft && ((kt = R.querySelector('[data-wb-focus="' + ft + '"]')) == null || kt.focus(), ft = null), _n(performance.now());
  }
  function uo() {
    et || K || (et = !0, queueMicrotask(() => {
      et = !1, ha(!0);
    }));
  }
  function Mr() {
    const x = getComputedStyle(R), S = (dt) => x.getPropertyValue(dt).trim(), C = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([dt, bt]) => {
      S(bt) && (C[dt] = S(bt));
    });
    const O = S("--color-text-primary") || "#f1f1f1", Z = S("--color-bg-card") || "#222222", J = !!R.closest(".light");
    return { colors: { ...rn, ...C }, ink: J ? O : Z, paper: J ? Z : O };
  }
  const Ua = (x, S) => {
    var C;
    x.width !== S.w && (x.width = S.w), x.height !== S.h && (x.height = S.h), (C = x.getContext("2d")) == null || C.putImageData(new ImageData(S.data, S.w, S.h), 0, 0);
  }, ye = () => m && !kf();
  function na(x, S) {
    R.querySelectorAll("canvas[data-wb-strip]").forEach((C) => Le(C, It[C.dataset.wbStrip], x, S));
  }
  function Le(x, S, C, O) {
    if (!S || !x.getClientRects().length) return;
    const Z = x.clientWidth, J = x.clientHeight;
    if (!Z || !J) return;
    const dt = { width: Z, height: J, columns: S.columns || Mc, colors: O.colors, clock: C, ambient: ye(), seed: S.seed, soft: 1.5 };
    if (c === "smooth") {
      const bt = Math.min(2, window.devicePixelRatio || 1), wt = Math.round(Z * bt), Pt = Math.round(J * bt);
      x.width !== wt && (x.width = wt), x.height !== Pt && (x.height = Pt);
      const Lt = x.getContext("2d");
      if (!Lt) return;
      Lt.setTransform(bt, 0, 0, bt, 0, 0), Du(Lt, S.segs, dt);
    } else Ua(x, Eu(S.segs, { ...dt, px: 2, oneBit: c === "onebit", ink: O.ink, paper: O.paper }));
  }
  function _n(x) {
    if (K) return;
    const S = Mr();
    if (c !== "smooth") {
      const C = ye();
      R.querySelectorAll("canvas[data-wb-wx]").forEach((O) => {
        O.getClientRects().length && Ua(O, dp(Vd(O.dataset.wbWx, S.colors), { size: Number(O.dataset.size) || 40, px: 2, oneBit: c === "onebit", colors: S.colors, ink: S.ink, paper: S.paper, clock: x, idle: C }));
      });
    }
    R.querySelectorAll("canvas[data-wb-sea]").forEach((C) => {
      const O = C.clientWidth, Z = C.clientHeight, J = Number(C.dataset.wbSea), dt = O + "x" + Z + ":" + J + ":" + S.colors.skyClearDay;
      !O || !Z || !(J > 0) || C.dataset.painted === dt || (C.dataset.painted = dt, Ua(C, Uu(O, Z, J, S.colors)));
    }), na(x, S);
  }
  function Zn(x) {
    if (W = 0, !(K || !ye())) {
      if (!document.hidden)
        if (c === "smooth") na(x, Mr());
        else {
          const S = Math.floor(x / 100);
          S !== ut && (ut = S, _n(x));
        }
      W = requestAnimationFrame(Zn);
    }
  }
  function fo() {
    R.classList.toggle("wbMotion", ye()), !W && !K && ye() && (W = requestAnimationFrame(Zn));
  }
  function Da(x) {
    var C, O;
    const S = (O = (C = x.target).closest) == null ? void 0 : O.call(C, "[data-wb]");
    if (!(!S || !R.contains(S))) {
      switch (S.dataset.wb) {
        case "day": {
          P.openDay = Number(S.dataset.index), P.opener = S.dataset.wbFocus, ft = "back-day";
          const Z = Te()[P.openDay], J = !lt.todayHistory || lt.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - lt.todayHistory.fetched > Qu;
          Z && ds(new Date(Z.datetime), /* @__PURE__ */ new Date()) && J && le();
          break;
        }
        case "close-day":
          P.openDay = void 0, ft = P.opener, P.opener = void 0;
          break;
        case "open-page":
          w == null || w();
          return;
        case "day-mode":
          P.dayMode = S.dataset.mode;
          break;
        case "hourly-mode":
          P.hourlyMode = S.dataset.mode;
          break;
        case "hourly-view":
          P.hourlyView = S.dataset.view;
          try {
            localStorage.setItem(tt, P.hourlyView);
          } catch {
          }
          break;
        case "hours-day": {
          const Z = R.querySelector(".wbStripScroll");
          Z && Z.scrollTo({ left: Number(S.dataset.hours) * Z.clientWidth / Number(Z.dataset.span), behavior: "smooth" });
          return;
        }
        case "aq-open":
          P.aq = S.dataset.entity, Ae(P.aq);
          break;
        case "aq-close":
          P.aq = void 0;
          break;
        default:
          return;
      }
      ha(!0);
    }
  }
  function En(x) {
    var S, C;
    x.key === "Escape" && P.openDay !== void 0 && ((C = (S = x.target).closest) != null && C.call(S, '[data-wb-open="day"]')) && (P.openDay = void 0, ft = P.opener, P.opener = void 0, ha(!0));
  }
  let wn = null;
  function ci(x) {
    var C, O;
    const S = (O = (C = x.target).closest) == null ? void 0 : O.call(C, ".wbStripScroll");
    !S || x.button !== 0 || (wn = { startX: x.pageX, left: S.scrollLeft, moved: !1 }, S.classList.add("wbHeld"), window.addEventListener("mousemove", xn), window.addEventListener("mouseup", ho, { once: !0 }));
  }
  function xn(x) {
    const S = R.querySelector(".wbStripScroll");
    if (!wn || !S) return;
    const C = x.pageX - wn.startX;
    !wn.moved && Math.abs(C) > 1 && (wn.moved = !0, S.classList.add("wbDragging")), S.scrollLeft = wn.left - C;
  }
  function ho() {
    wn = null, window.removeEventListener("mousemove", xn);
    const x = R.querySelector(".wbStripScroll");
    if (!x) return;
    x.classList.remove("wbDragging", "wbHeld");
    const S = [...x.querySelectorAll(".wbSnap")];
    if (S.length) {
      const C = S.reduce((O, Z) => Math.abs(Z.offsetLeft - x.scrollLeft) < Math.abs(O.offsetLeft - x.scrollLeft) ? Z : O);
      x.scrollTo({ left: C.offsetLeft, behavior: "smooth" });
    }
  }
  R.addEventListener("click", Da), R.addEventListener("keydown", En), R.addEventListener("mousedown", ci);
  const Kn = typeof ResizeObserver == "function" ? new ResizeObserver(() => _n(performance.now())) : null;
  Kn == null || Kn.observe(R);
  const Ya = (yn = window.matchMedia) == null ? void 0 : yn.call(window, "(prefers-reduced-motion: reduce)"), mo = () => {
    fo(), _n(performance.now());
  };
  (Io = Ya == null ? void 0 : Ya.addEventListener) == null || Io.call(Ya, "change", mo);
  const $i = [
    setInterval(() => {
      _t = /* @__PURE__ */ new Date(), ha(!0);
    }, df),
    setInterval(() => {
      H = /* @__PURE__ */ new Date(), ha(!0);
    }, cf),
    setInterval($t, rf)
  ];
  return ha(!0), fo(), {
    update() {
      ha(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      ha(!0);
    },
    setStyle(x) {
      !x || x === c || (c = x, R.dataset.style = c, ha(!0), fo());
    },
    destroy() {
      var x;
      K = !0, $i.forEach(clearInterval), W && cancelAnimationFrame(W), W = 0, Kn == null || Kn.disconnect(), (x = Ya == null ? void 0 : Ya.removeEventListener) == null || x.call(Ya, "change", mo), ho(), R.removeEventListener("click", Da), R.removeEventListener("keydown", En), R.removeEventListener("mousedown", ci), ["daily", "hourly"].forEach(A), R.remove();
    }
  };
}
const Ys = "#E1E1E1", Oc = "#F7F4F0", Bd = "#03a9f4", Ce = 14, De = 172;
let eh = 0;
const Qe = (n) => Math.round(n * 100) / 100, Do = (n, d, o) => Math.max(d, Math.min(o, n)), si = (n, d, o, c, m, b) => '<rect x="' + Qe(n) + '" y="' + Qe(d) + '" width="' + Qe(o) + '" height="' + Qe(c) + '" fill="' + m + '"' + (b != null ? ' opacity="' + b + '"' : "") + "/>", Rd = (n) => n.map((d, o) => (o ? "L" : "M") + Qe(d[0]) + " " + Qe(d[1])).join("");
function Nd(n) {
  const d = (n == null ? void 0 : n.attributes) || {};
  return d.device_class === "curtain" ? "curtain" : d.device_class === "blind" || d.current_tilt_position != null ? "venetian" : "blind";
}
const zi = [
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
  const d = n < 2 ? n + 24 : n;
  let o = zi[0], c = zi[zi.length - 1];
  for (let L = 0; L < zi.length - 1; L++) if (d >= zi[L][0] && d <= zi[L + 1][0]) {
    o = zi[L], c = zi[L + 1];
    break;
  }
  const m = (d - o[0]) / (c[0] - o[0]), b = m * m * (3 - 2 * m), w = (L, y) => {
    const R = parseInt(L.slice(1), 16), vt = parseInt(y.slice(1), 16);
    return "#" + [16, 8, 0].map((st) => Math.round((R >> st & 255) + ((vt >> st & 255) - (R >> st & 255)) * b).toString(16).padStart(2, "0")).join("");
  };
  return { top: w(o[1][0], c[1][0]), bot: w(o[1][1], c[1][1]), warm: w(o[1][2], c[1][2]), cool: w(o[1][3], c[1][3]), op: o[1][4] + (c[1][4] - o[1][4]) * b, t: d };
}
function nh(n) {
  const d = parseInt(n.slice(1), 16), o = (d >> 16 & 255) / 255, c = (d >> 8 & 255) / 255, m = (d & 255) / 255, b = Math.max(o, c, m), w = Math.min(o, c, m);
  let L = 0, y = 0;
  const R = (b + w) / 2;
  if (b !== w) {
    const vt = b - w;
    y = R > 0.5 ? vt / (2 - b - w) : vt / (b + w), L = (b === o ? (c - m) / vt + (c < m ? 6 : 0) : b === c ? (m - o) / vt + 2 : (o - c) / vt + 4) / 6;
  }
  return [L * 360, y * 100, R * 100];
}
function Rp(n, d, o) {
  d = Do(d, 0, 100) / 100, o = Do(o, 0, 100) / 100;
  const c = (w) => (w + n / 30) % 12, m = d * Math.min(o, 1 - o), b = (w) => o - m * Math.max(-1, Math.min(c(w) - 3, Math.min(9 - c(w), 1)));
  return "#" + [b(0), b(8), b(4)].map((w) => Math.round(w * 255).toString(16).padStart(2, "0")).join("");
}
const [Np, Pp, Ip] = nh(Ys), Wc = Rp(Np, Pp, Math.max(6, Ip - 14)), oh = Rp(Np, Pp, Math.min(96, Ip + 16));
function ih(n, d, o, c, m) {
  const b = De / 2, w = De * 0.12, L = b - (b - w) * n, y = (ot) => ot ** 1.3, R = Do(o, -1.5, 1.5), vt = (ot) => -(Math.abs(R) * 4.6 * ot ** 1.5) * Math.sign(R), st = n * 1.4, Y = (ot, K) => {
    const U = Math.min(4.8, Math.abs(o) * 2.6) * (K ? 1 : -1) * Math.sign(o || 1), W = K ? ot + L : ot, ut = K ? ot : ot + L, et = (_t) => W + vt(_t) + U * Math.sin(_t * Math.PI * 1.2 + c) * y(_t) * 1.4 + st * Math.sin(_t * Math.PI * 2 + c * 0.6) * y(_t) * (K ? 1 : -1), ft = [[ut, Ce]];
    for (let _t = 0; _t <= 12; _t++) ft.push([et(_t / 12), Ce + De * _t / 12]);
    ft.push([ut, Ce + De]);
    let tt = '<path d="' + Rd(ft) + 'Z" fill="' + Ys + '"/>';
    if (m) return tt;
    const _ = 1.35 + ((K ? o > 0 : o < 0) ? 0.35 : 0), P = (_t) => {
      const H = _t / 7, It = K ? 1 - H : H, G = (1 - It) ** 1.3, Wt = ot + L * H;
      return Array.from({ length: 13 }, (M, E) => {
        const A = E / 12;
        return [Wt + vt(A) * G + U * _ * Math.sin(A * Math.PI * 1.2 + c - It * 3.2) * y(A) * 1.4 * G + st * 1.6 * Math.sin(A * Math.PI * 2 + c * 0.6 - It * 2.5) * y(A) * n * (0.4 + 0.6 * G), Ce + De * A];
      });
    }, lt = [1, 2, 3, 4, 5, 6].map(P);
    for (let _t = 0; _t < 6; _t += 2) tt += '<path d="' + Rd(lt[_t]) + Rd(lt[_t + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return tt;
  }, X = b - (b - w) * d;
  return { body: Y(Ce, !0) + Y(Ce + De - L, !1), rails: [{ x: Ce + X - 4, y: Ce, w: 4, h: De }, { x: Ce + De - X, y: Ce, w: 4, h: De }], head: 6.4 };
}
function rh(n, d, o) {
  const c = De * (1 - n);
  let m = "";
  if (c > 1 && (m += si(Ce, Ce, De, c, Ys), !o))
    for (let b = 1; b < 7; b += 2) m += si(Ce + De * b / 7, Ce, De / 7, c, "#fff");
  return { body: m, rails: [{ x: Ce, y: Ce + De * (1 - d) - 7, w: De, h: 11 }], head: 10.4 };
}
function sh(n, d, o, c) {
  const m = 9 - 7 * (o / 100), b = Ce + De * (1 - n), w = Math.ceil(De / 10) + 1, L = Ce + m / 2, y = (Ce + De - m / 2 - L) / (w - 1), R = 0.8, vt = 0.6, st = Array.from({ length: w }, (ot, K) => Math.max(L + K * vt, Math.min(L + K * y, b - m / 2 - (w - 1 - K) * vt))), Y = st.slice(0, -1).map((ot, K) => Do((st[K + 1] - ot - vt) / (y - vt), 0, 1));
  Y.push(Y[w - 2]);
  let X = "";
  return st.forEach((ot, K) => {
    const U = R + (m - R) * Y[K], W = Math.max(0.5, U / 2), ut = Math.max(0.4, U * 0.114);
    X += si(Ce, ot - W, De, Math.max(1, U), Ys), !c && U > 2.2 && (X += si(Ce, ot + W - ut, De, ut, Wc) + si(Ce, ot - W, De, ut * 0.55, oh, 0.75));
  }), c || [0.22, 0.78].forEach((ot) => {
    X += si(Ce + De * ot - 0.7, Ce, 1.4, Math.max(0, st[w - 1] + 1 - Ce), Wc, 0.85);
  }), { body: X, rails: [{ x: Ce, y: Ce + De * (1 - d) - 8, w: De, h: 8 }], head: 8.8 };
}
const qc = (n, d, o, c, m, b, w) => n === "curtain" ? ih(d, o, m, b, w) : n === "venetian" ? sh(d, o, c, w) : rh(d, o, w);
function lh(n, d) {
  let o = "", c = "";
  return d.forEach((m) => {
    const b = m.w > m.h, w = Do(b ? Ce + De / 2 : m.x + m.w / 2, 17, 183), L = Do(b ? m.y + m.h / 2 : Ce + De / 2, 17, 183);
    o += b ? si(Ce, Do(m.y + m.h / 2, Ce, Ce + De) - 1, De, 2, Bd) : si(Do(m.x + m.w / 2, Ce, Ce + De) - 1, Ce, 2, De, Bd);
    const y = b ? "M" + Qe(w - 4) + " " + Qe(L - 3) + "l4 -3l4 3M" + Qe(w - 4) + " " + Qe(L + 3) + "l4 3l4 -3" : "M" + Qe(w - 3) + " " + Qe(L - 4) + "l-3 4l3 4M" + Qe(w + 3) + " " + Qe(L - 4) + "l3 4l-3 4";
    c += '<circle cx="' + Qe(w) + '" cy="' + Qe(L) + '" r="11" fill="' + Bd + '" filter="url(#' + n + 's)"/><path d="' + y + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: o, knobs: c };
}
function dh(n, d) {
  const o = /* @__PURE__ */ new Date(), c = ah(o.getHours() + o.getMinutes() / 60), m = 42 + 18 * Math.sin(c.t * 0.5), b = c.t >= 5 && c.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (c.t - 5) / 15) : 80, w = qc(d.kind, d.pos / 100, d.bar / 100, d.tilt, d.vel, d.ph, !1), L = d.ghostAlpha > 4e-3 && d.ghost != null ? qc(d.kind, d.ghost / 100, d.ghost / 100, d.tilt, 0, 0, !0).body : "", y = d.grip > 4e-3 ? lh(n, w.rails) : null, R = (vt) => si(Ce, Ce, De, De, vt);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + n + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + n + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + c.top + '"/><stop offset="1" stop-color="' + c.bot + '"/></linearGradient><radialGradient id="' + n + 'w" cx="' + Qe(m) + '%" cy="' + Qe(b) + '%" r="58%"><stop offset="0" stop-color="' + c.warm + '" stop-opacity="' + Qe(c.op * 0.8) + '"/><stop offset="1" stop-color="' + c.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + n + 'k" cx="' + Qe(100 - m * 0.8) + '%" cy="' + Qe(100 - b * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + c.cool + '" stop-opacity="' + Qe(c.op * 0.64) + '"/><stop offset="1" stop-color="' + c.cool + '" stop-opacity="0"/></radialGradient><filter id="' + n + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + Oc + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + n + 'c)">' + R("url(#" + n + "l)") + R("url(#" + n + "w)") + R("url(#" + n + "k)") + (L ? '<g opacity="' + Qe(d.ghostAlpha) + '">' + L + "</g>" : "") + w.body + '<rect x="14" y="14" width="172" height="' + w.head + '" fill="' + Ys + '" filter="url(#' + n + 's)"/></g>' + (y ? '<g clip-path="url(#' + n + 'c)" opacity="' + Qe(d.grip) + '">' + y.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + Oc + '" stroke-width="3"/>' + (y ? '<g opacity="' + Qe(d.grip) + '">' + y.knobs + "</g>" : "") + "</svg>";
}
function ch({ onMove: n, onSet: d }) {
  var tt;
  const o = "cv" + ++eh, c = document.createElement("div");
  c.className = "tfCoverArt";
  const m = (tt = window.matchMedia) == null ? void 0 : tt.call(window, "(pointer: coarse)").matches;
  let b = null;
  const w = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let L = 0, y = !1, R = !1, vt = null, st = 0, Y = 0;
  const X = () => (b == null ? void 0 : b.kind) === "curtain" ? "x" : "y", ot = () => vt || y || R || b.moving || b.target != null ? 1 : m ? performance.now() < Y ? 1 : 0.4 : 0, K = () => {
    c.innerHTML = dh(o, { kind: b.kind, pos: w.pos, bar: b.target ?? w.pos, tilt: w.tilt, vel: w.vel, ph: w.ph, ghost: w.gpos, ghostAlpha: w.ghost, grip: w.grip });
  };
  function U(_) {
    L = 0;
    const P = w.last ? Math.min(0.064, (_ - w.last) / 1e3) : 1 / 60, lt = P * 60;
    w.last = _;
    const _t = b.pos - w.pos, H = w.pos;
    w.pos += Math.sign(_t) * Math.min(Math.abs(_t), Math.max(10.5, Math.abs(_t) * 1.4) * P), Math.abs(b.pos - w.pos) < 0.03 && (w.pos = b.pos), w.vel = w.vel * 0.86 + (w.pos - H) / lt * 0.14, Math.abs(w.vel) < 0.015 && w.pos === b.pos && (w.vel = 0), (w.pos !== H || w.vel) && (w.ph += (0.06 + Math.abs(w.vel) * 0.03) * lt);
    const It = b.tilt - w.tilt;
    w.tilt += Math.sign(It) * Math.min(Math.abs(It), Math.max(60, Math.abs(It) * 4) * P);
    const G = ot();
    w.grip += (G - w.grip) * Math.min(1, P * (G > w.grip ? 11 : 3.5)), Math.abs(G - w.grip) < 0.01 && (w.grip = G);
    const Wt = b.target != null && Math.abs(b.target - w.pos) > 0.5 ? 0.22 : 0;
    b.target != null && (w.gpos = b.target), w.ghost += (Wt - w.ghost) * Math.min(1, P * (Wt > w.ghost ? 16 : 3)), Math.abs(Wt - w.ghost) < 4e-3 && (w.ghost = Wt), K(), w.pos !== b.pos || w.vel || w.tilt !== b.tilt || w.grip !== G || w.ghost !== Wt ? L = requestAnimationFrame(U) : w.last = 0;
  }
  const W = () => {
    b && !L && (L = requestAnimationFrame(U));
  }, ut = setInterval(() => {
    b && !L && K();
  }, 60 * 1e3), et = (_) => {
    const P = c.getBoundingClientRect();
    return X() === "x" ? (_.clientX - P.left) / P.width : (_.clientY - P.top) / P.height;
  };
  c.addEventListener("pointerdown", (_) => {
    var _t;
    if (!(b != null && b.canSet) || _.button > 0) return;
    _.preventDefault(), (_t = c.setPointerCapture) == null || _t.call(c, _.pointerId);
    const P = b.target ?? b.pos, lt = c.getBoundingClientRect();
    vt = { p0: et(_), from: P, x0: _.clientX, value: null, side: null }, b.kind === "curtain" && P > 0 && (vt.side = (_.clientX - lt.left) / lt.width < 0.5 ? "L" : "R"), W();
  }), c.addEventListener("pointermove", (_) => {
    if (!vt) return;
    let P;
    if (b.kind === "curtain") {
      if (!vt.side) {
        const _t = _.clientX - vt.x0;
        if (Math.abs(_t) < 4) return;
        vt.side = _t < 0 ? "L" : "R";
      }
      const lt = (De / 2 - De * 0.12) / 200;
      P = vt.from + (vt.side === "L" ? -1 : 1) * ((et(_) - vt.p0) / lt) * 100;
    } else P = vt.from - (et(_) - vt.p0) / (De / 200) * 100;
    vt.value = Do(P, 0, 100), n(vt.value);
  });
  const ft = () => {
    if (!vt) return;
    const _ = vt.value;
    vt = null, _ != null && d(Math.round(_)), W();
  };
  return c.addEventListener("pointerup", ft), c.addEventListener("pointercancel", ft), c.addEventListener("lostpointercapture", ft), c.addEventListener("pointerenter", () => {
    y = !0, W();
  }), c.addEventListener("pointerleave", () => {
    y = !1, W();
  }), c.addEventListener("focus", () => {
    R = c.matches(":focus-visible"), W();
  }), c.addEventListener("blur", () => {
    R = !1, W();
  }), c.addEventListener("keydown", (_) => {
    if (!(b != null && b.canSet)) return;
    const P = Math.round(b.target ?? b.pos), lt = _.shiftKey ? 10 : 1, _t = { ArrowUp: P + lt, ArrowRight: P + lt, ArrowDown: P - lt, ArrowLeft: P - lt, PageUp: P + 25, PageDown: P - 25, Home: 0, End: 100 }[_.key];
    if (_t == null) return;
    _.preventDefault();
    const H = Do(_t, 0, 100);
    n(H), clearTimeout(st), st = setTimeout(() => d(H), 500);
  }), {
    el: c,
    update(_) {
      const P = !b;
      b = _, P && (w.pos = b.pos, w.tilt = b.tilt, Y = performance.now() + 1500, m && setTimeout(W, 1600)), c.classList.toggle("x", X() === "x"), c.classList.toggle("y", X() === "y"), b.canSet ? (c.tabIndex = 0, c.setAttribute("role", "slider"), c.setAttribute("aria-valuemin", "0"), c.setAttribute("aria-valuemax", "100"), c.setAttribute("aria-valuenow", String(Math.round(b.target ?? b.pos))), c.setAttribute("aria-orientation", X() === "x" ? "horizontal" : "vertical")) : c.setAttribute("role", "img"), c.setAttribute("aria-label", b.name + (b.canSet ? " position" : "")), c.setAttribute("aria-valuetext", b.text), W();
    },
    destroy() {
      cancelAnimationFrame(L), L = 0, clearInterval(ut), clearTimeout(st), c.remove();
    }
  };
}
const jc = "move-assistant-density", Vi = {
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
}, Q = (n) => String(n ?? "").replace(/[&<>"']/g, (d) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[d]), Pd = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', zc = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', ph = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', Pl = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, Vc = {
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14v2H5z"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>'
}, Gc = 1, uh = 4, Uc = 16, Yc = 32, fh = 128, hh = 256, Zc = 16384, mh = 1, gh = 2, Kc = 4, vh = 8, bh = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, $c = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, wh = { curtain: "curtains", blind: "blind", venetian: "blinds" }, Id = {
  light: { name: "Lights", icon: "mdi:lightbulb", colour: "#ffc107" },
  climate: { name: "Climate", icon: "mdi:home-thermometer", colour: "#ff5722" },
  security: { name: "Security", icon: "mdi:security", colour: "#607d8b" },
  media_players: { name: "Media players", icon: "mdi:multimedia", colour: "#2196f3" },
  maintenance: { name: "Maintenance", icon: "mdi:wrench", colour: "#9e9e9e" },
  energy: { name: "Energy", icon: "mdi:lightning-bolt", colour: "#ffc107" }
}, Xc = "move_assistant_house", Jc = "move-assistant-house-used", xh = ["switch", "fan", "input_boolean", "automation"], Qc = "move-assistant-house-look", yh = [["popup", "Popup"], ["sheet", "Sheet"]], kh = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], Mh = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], Sh = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], Hd = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', Ch = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', Th = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', tp = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', ep = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', ap = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', Hp = (n) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + n.map((d) => '<path d="' + d + '"/>').join("") + "</svg>", np = Hp(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), Ah = Hp(["M20 6L9 17L4 12"]), _o = (n, d = "") => '<span class="tfAreaGlyph" data-icon-for="' + Q(n || "") + '"' + (d ? ' data-icon-name="' + Q(d) + '"' : "") + "></span>", Lh = (n) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (n ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', _h = 1, Eh = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], op = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, Fd = ["hs", "xy", "rgb", "rgbw", "rgbww"], Il = ["door", "window", "garage_door", "opening"], ip = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, Hl = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], Dh = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], Bh = 10, Rh = 20, Nh = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, Ph = ["living room", "bedroom", "office"];
function Ih(n, { config: d, getHass: o }) {
  var Os, kl, is;
  const c = (t) => n.getElementById(t), m = c("app"), w = String((d || {}).layout || "").toLowerCase().replace("_", "-") === "test-focus";
  let L = Vi.get(jc) === "1", y = {};
  const R = (t) => {
    var a;
    return (a = o()) == null ? void 0 : a.callWS(t);
  }, vt = (t, a, i) => R({ type: "call_service", domain: t, service: a, service_data: i }), st = n.querySelector("#appearancePane .toggleList");
  st && !c("densityToggle") && (st.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), c("densityToggle").addEventListener("click", () => {
    L = !L, Vi.set(jc, L ? "1" : "0"), tt();
  }));
  const Y = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && xe(t).device_class === "power" && /^(W|kW)$/.test(xe(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (t) => t.startsWith("alarm_control_panel.")]
  ], X = (t, a, i, l) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + a + '">' + l.map(([u, h]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + i + '="' + u + '">' + h + "</button>").join("") + "</div>", ot = (t, a, i, l) => '<div class="toggleRow"' + (l ? ' id="' + l + '"' : "") + "><div><strong>" + t + "</strong>" + (a ? '<div class="status">' + a + "</div>" : "") + "</div>" + i + "</div>";
  function K() {
    var k, D, N, F, $, Mt;
    if (!w || c("housePane")) return;
    const t = c("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore";
    const a = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], i = (Dt, nt) => '<div class="houseTab' + (Dt === "look" ? " active" : "") + '" data-house-pane="' + Dt + '"><section class="card">' + nt + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + a.map(([Dt, nt]) => '<button class="tab segBtn' + (Dt === "look" ? " active" : "") + '" type="button" data-house-tab="' + Dt + '">' + nt + "</button>").join("") + "</div>" + i("look", '<div class="toggleList" id="houseLook"></div>') + i("lights", '<p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div>') + i("sources", '<div class="toggleList">' + Y.map(([Dt, nt, xt]) => ot(nt, xt, '<select class="settingsSelect" data-source="' + Dt + '" aria-label="' + nt + '"></select>')).join("") + "</div>") + i("sums", '<div class="toggleList">' + Object.entries(Id).map(([Dt, nt]) => ot(nt.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + Dt + '" aria-label="' + nt.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const l = c("houseLook");
    [(k = t.querySelector(".themeBtn")) == null ? void 0 : k.closest(".toggleRow"), (D = c("densityToggle")) == null ? void 0 : D.closest(".toggleRow"), (N = c("moreInfoChoice")) == null ? void 0 : N.closest(".toggleRow"), (F = c("namesChoice")) == null ? void 0 : F.closest(".toggleRow"), ($ = c("hoursChoice")) == null ? void 0 : $.closest(".toggleRow"), (Mt = c("wxStyleChoice")) == null ? void 0 : Mt.closest(".toggleRow")].forEach((Dt) => Dt && l.appendChild(Dt)), l.insertAdjacentHTML("beforeend", ot("Lights", "How lights show on the house page.", X("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + ot("Pad", "What the Dual Axis Controller’s pad sets on its tile.", X("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow"));
    const u = c("housePane"), h = u.querySelector(".houseTabs"), f = h.querySelector(".rubberIndicator"), v = (Dt) => {
      const nt = h.querySelector(".tab.active");
      f.style.transition = Dt ? "" : "none", f.style.left = nt.offsetLeft + "px", f.style.width = nt.offsetWidth + "px", Dt && (f.style.transform = "scaleX(1.08)", setTimeout(() => f.style.transform = "", 180));
    };
    new ResizeObserver(() => v(!1)).observe(h), u.addEventListener("click", (Dt) => {
      const nt = Dt.target.closest("[data-house-tab]");
      if (nt) {
        h.querySelectorAll(".tab").forEach((pt) => pt.classList.toggle("active", pt === nt)), u.querySelectorAll(".houseTab").forEach((pt) => pt.classList.toggle("active", pt.dataset.housePane === nt.dataset.houseTab)), nt.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), v(!0);
        return;
      }
      const xt = Dt.target.closest("[data-light-fav]");
      if (xt) {
        hi(xt.dataset.lightFav);
        return;
      }
      const V = Dt.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!V || V.disabled)) {
        if (V.dataset.lights && (me.lights = V.dataset.lights), V.dataset.dacPad && (me.dacPad = V.dataset.dacPad), (V.dataset.lights || V.dataset.dacPad) && (Xt(), Vt.clear()), V.dataset.sumToggle) {
          const pt = V.dataset.sumToggle, z = new Set(j.hiddenSums || []);
          z.has(pt) ? z.delete(pt) : z.add(pt), j = { ...j, hiddenSums: [...z] }, Pa();
        }
        Fn();
      }
    }), u.addEventListener("change", (Dt) => {
      const nt = Dt.target;
      nt.dataset.source && (j = { ...j, sources: { ...j.sources || {}, [nt.dataset.source]: nt.value || void 0 } }, Pa());
      const xt = nt.dataset.lightStyle || nt.dataset.lightPad;
      if (xt) {
        const V = nt.dataset.lightStyle ? "lightStyles" : "lightPads", pt = { ...me[V] };
        nt.value ? pt[xt] = nt.value : delete pt[xt], me[V] = pt, Xt(), [...Vt.keys()].filter((z) => z.endsWith(":" + xt)).forEach((z) => Vt.delete(z));
      }
      Fn();
    });
  }
  function U() {
    var v, k;
    ee() && Zt();
    const t = c("housePane");
    if (!t) return;
    const a = !!customElements.get(Gt);
    t.querySelectorAll("[data-lights]").forEach((D) => D.setAttribute("aria-pressed", String(D.dataset.lights === me.lights))), c("lightsRow").querySelector(".status").textContent = a || !ee() ? "How lights show on the house page." : Ft === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((D) => D.setAttribute("aria-pressed", String(D.dataset.dacPad === me.dacPad))), c("dacPadRow").hidden = !ee();
    for (const D of t.querySelectorAll("[data-source]")) {
      if (D === n.activeElement) continue;
      const [N] = Y.find(([$]) => $ === D.dataset.source), F = Object.keys(y).filter(Y.find(([$]) => $ === N)[3]).sort(($, Mt) => St($).localeCompare(St(Mt)));
      D.dataset.sig !== F.join(",") && (D.innerHTML = '<option value="">Automatic</option>' + F.map(($) => '<option value="' + Q($) + '">' + Q(St($)) + "</option>").join(""), D.dataset.sig = F.join(",")), D.value = F.includes((v = j.sources) == null ? void 0 : v[N]) ? j.sources[N] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((D) => {
      const N = !(j.hiddenSums || []).includes(D.dataset.sumToggle);
      D.classList.toggle("on", N), D.setAttribute("aria-checked", String(N));
    });
    const i = c("lightRows"), l = i != null && i.contains(n.activeElement) ? n.activeElement : null;
    if (!i || l != null && l.matches("select")) return;
    const u = new Set(la()), h = (D, N, F, $) => '<option value="' + D + '"' + (D === F ? " selected" : "") + ">" + N + "</option>", f = Object.keys(y).filter((D) => D.startsWith("light.")).sort((D, N) => !Ae.get(D) - !Ae.get(N) || (Ae.get(D) || "").localeCompare(Ae.get(N) || "") || St(D).localeCompare(St(N))).map((D) => {
      const N = me.lightStyles[D] || "", F = me.lightPads[D] || "", $ = u.has(D), Mt = Q(St(D));
      return "<tr><td><strong>" + Mt + "</strong></td><td>" + Q(Ae.get(D) || "—") + "</td><td>" + Q(sa(D)) + '</td><td class="metaSwitchCol"><button class="switch' + ($ ? " on" : "") + '" type="button" role="switch" aria-checked="' + $ + '" data-light-fav="' + Q(D) + '" aria-label="' + Mt + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + Q(D) + '" aria-label="' + Mt + ' tile">' + h("", "Default", N) + h("tile", "HomeCore tile", N) + h("dac", "Dual Axis Controller", N) + '</select></td><td><select class="settingsSelect" data-light-pad="' + Q(D) + '" aria-label="' + Mt + ' pad"' + (Tt(D) ? "" : " disabled") + ">" + h("", "Default", F) + h("temperature", "Temperature", F) + h("colour", "Colour", F) + "</select></td></tr>";
    }).join("");
    i.dataset.html !== f && (i.innerHTML = f, i.dataset.html = f, l != null && l.dataset.lightFav && ((k = i.querySelector('[data-light-fav="' + CSS.escape(l.dataset.lightFav) + '"]')) == null || k.focus({ preventScroll: !0 })));
  }
  const W = document.createElement("div");
  W.className = "densityBadge", W.setAttribute("aria-live", "polite"), W.hidden = !0, m.appendChild(W);
  let ut = 0;
  function et() {
    if (!L) return;
    const t = c("homeView"), a = (h) => h.offsetParent !== null && !h.closest("[hidden]");
    t.querySelectorAll(":scope .card, :scope .tfAction").forEach((h) => {
      a(h) && (h.dataset.h = Math.round(h.getBoundingClientRect().height) + " px");
    });
    const i = [...t.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(a), l = window.innerHeight, u = i.filter((h) => {
      const f = h.getBoundingClientRect();
      return f.height > 0 && f.top >= 0 && f.bottom <= l + 0.5;
    }).length;
    W.hidden = !t.classList.contains("active"), W.innerHTML = "<b>" + u + "</b><small>of " + i.length + " readings on screen</small>";
  }
  const ft = () => {
    L && requestAnimationFrame(et);
  };
  function tt() {
    var t;
    m.classList.toggle("showDensity", L), (t = c("densityToggle")) == null || t.classList.toggle("on", L), W.hidden = !L, clearInterval(ut), L && (ut = setInterval(et, 1e3), et());
  }
  window.addEventListener("scroll", ft, { capture: !0, passive: !0 }), window.addEventListener("resize", ft, { passive: !0 });
  const _ = n.querySelector("#homeView .grid");
  let P = null, lt = null, _t = null, H = null;
  const It = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), Wt = /* @__PURE__ */ new Map(), M = 6;
  let E = null;
  const A = /* @__PURE__ */ new Map(), I = /* @__PURE__ */ new Map(), mt = /* @__PURE__ */ new Map();
  let j = { favourites: null }, ct = {}, gt = {}, yt = [], $t = null;
  const le = (() => {
    try {
      return JSON.parse(Vi.get(Jc)) || {};
    } catch {
      return {};
    }
  })();
  let Ae = /* @__PURE__ */ new Map(), Ca = 0;
  function Pa() {
    clearTimeout(Ca), Ca = setTimeout(() => Promise.resolve(R({ type: "frontend/set_user_data", key: Xc, value: j })).catch(() => {
    }), 400);
  }
  const me = (() => {
    let t = {};
    try {
      t = JSON.parse(Vi.get(Qc)) || {};
    } catch {
    }
    const a = (i, l) => Object.fromEntries(Object.entries(i || {}).filter(([, u]) => l.includes(u)));
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
  })(), Xt = () => Vi.set(Qc, JSON.stringify(me)), Te = () => {
    m.dataset.more = me.more, m.dataset.names = me.names, Bs();
  };
  w && st && !c("moreInfoChoice") && (c("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + yh.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (me.more === t) + '" data-more-style="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), c("moreInfoChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-more-style]");
    a && (me.more = a.dataset.moreStyle, Xt(), Te(), c("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((i) => i.setAttribute("aria-pressed", String(i === a))));
  }), c("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + kh.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (me.names === t) + '" data-names-style="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), c("namesChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-names-style]");
    a && (me.names = a.dataset.namesStyle, me.namesPicked = !0, Xt(), Te(), c("namesChoice").querySelectorAll("[data-names-style]").forEach((i) => i.setAttribute("aria-pressed", String(i === a))));
  }), c("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + Mh.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (me.hoursWindow === t) + '" data-hours-window="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), c("hoursChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-hours-window]");
    a && (me.hoursWindow = a.dataset.hoursWindow, Xt(), Kt == null || Kt.refresh(), c("hoursChoice").querySelectorAll("[data-hours-window]").forEach((i) => i.setAttribute("aria-pressed", String(i === a))));
  }), c("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + Sh.map(([t, a]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (me.wxStyle === t) + '" data-wx-style="' + t + '">' + a + "</button>").join("") + "</div></div>"
  ), c("wxStyleChoice").addEventListener("click", (t) => {
    const a = t.target.closest("[data-wx-style]");
    a && (me.wxStyle = a.dataset.wxStyle, Xt(), Kt == null || Kt.setStyle(me.wxStyle), Oe == null || Oe.forEach((i) => i.setStyle(me.wxStyle)), c("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((i) => i.setAttribute("aria-pressed", String(i === a))));
  })), K();
  let Qt = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const Ma = /* @__PURE__ */ new Map();
  let Ea = "";
  const xr = w ? mu({ onChange: () => va() }) : null;
  w && m.classList.add("house");
  const de = Object.assign(document.createElement("div"), { className: "tfBento" });
  let Kt = null, we = null, Bo = !1;
  function yr(t) {
    const a = Ar();
    if (m.classList.toggle("houseBento", !!a), Kt && (we !== a || t == null) && (Kt.destroy(), Kt = null), !a || t == null) {
      de.remove();
      return;
    }
    de.isConnected || _.append(de), de.style.order = t, !Kt && !Bo && (Kt = Fc(de, { getHass: o, entityId: a, style: me.wxStyle, hoursWindow: () => me.hoursWindow }), we = a);
  }
  const Ui = [["wx", ["current"]], ["avg", ["compared_to_average"]], ["aq", ["aq_tile"]], ["pollen", ["pollen_tile"]], ["radar", ["radar_tile"]]], Ta = ["aq", "pollen", "radar"], fe = Object.fromEntries(Ui.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let Oe = null, kr = null;
  function li(t) {
    const a = Ar();
    Oe && kr !== a && (Oe.forEach((i) => i.destroy()), Oe = null), Object.values(fe).forEach((i) => a ? !i.isConnected && _.append(i) : i.remove()), a && !Oe && !Bo && (Oe = Ui.map(([i, l]) => Fc(fe[i], { getHass: o, entityId: a, style: me.wxStyle, cards: l, onOpen: i === "wx" ? () => $r("weather") : void 0 })), kr = a);
  }
  const xe = (t) => {
    var a;
    return ((a = y[t]) == null ? void 0 : a.attributes) || {};
  }, St = (t) => xe(t).friendly_name || t, ze = (t, a) => qi(t) || (Number(xe(t).supported_features) & a) === a, Ht = (t) => {
    const a = String(t ?? "").replace(/_/g, " ");
    return a.charAt(0).toUpperCase() + a.slice(1);
  }, Ia = (t, a = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: a, maximumFractionDigits: a }), jn = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, Yi = (t) => xe(t).supported_color_modes || [], Ut = (t) => {
    const a = t / 100;
    return [a <= 66 ? 255 : 329.7 * Math.pow(a - 60, -0.1332), a <= 66 ? 99.47 * Math.log(a) - 161.12 : 288.12 * Math.pow(a - 60, -0.0755), a >= 66 ? 255 : a <= 19 ? 0 : 138.52 * Math.log(a - 10) - 305.04];
  }, ne = (t, a) => [5, 3, 1].map((i) => {
    const l = (i + t / 60) % 6;
    return 255 * (1 - a / 100 * Math.max(0, Math.min(l, 4 - l, 1)));
  }), Ve = (t) => (t /= 255, t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)), Ro = (t) => {
    const a = 0.2126 * Ve(t[0]) + 0.7152 * Ve(t[1]) + 0.0722 * Ve(t[2]);
    return (a + 0.05) / 0.0664 > 1.05 / (a + 0.05);
  }, Ha = (t) => 0.2126 * Ve(t[0]) + 0.7152 * Ve(t[1]) + 0.0722 * Ve(t[2]), ea = (t, a) => {
    const i = Ha(t), l = Ha(a);
    return (Math.max(i, l) + 0.05) / (Math.min(i, l) + 0.05);
  }, di = (t, a) => {
    const i = Ro(t);
    for (let l = 0.1; l < 1; l += 0.02) {
      const u = t.map((h) => Math.round(i ? h * (1 - l) : h + (255 - h) * l));
      if (ea(u, t) >= a) return "rgb(" + u.join(",") + ")";
    }
    return i ? "#26221e" : "#ffffff";
  };
  function ra(t) {
    const a = xe(t), i = (a.rgb_color || (a.hs_color && a.color_mode !== "color_temp" ? ne(...a.hs_color) : a.color_temp_kelvin ? Ut(a.color_temp_kelvin) : [255, 170, 0])).map((l) => Math.round(Math.max(0, Math.min(255, l))));
    return "--light:rgb(" + i.join(",") + ");--light-ink:" + di(i, 3.5);
  }
  const zn = (t) => {
    var a;
    return t.startsWith("light.") && ((a = y[t]) == null ? void 0 : a.state) === "on" ? ' data-light style="' + ra(t) + '"' : "";
  }, Vn = (t) => {
    const a = Yi(t);
    return a.length ? a.some((i) => i !== "onoff") : xe(t).brightness != null;
  }, No = (t) => [xe(t).min_color_temp_kelvin || 2e3, xe(t).max_color_temp_kelvin || 6500], Ye = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function Gn(t) {
    const a = Math.max(1, Math.round((Date.now() - t) / 1e3));
    if (a < 10) return "Just now";
    if (a < 60) return a + " seconds ago";
    const i = Math.round(a / 60);
    if (i < 60) return i + (i === 1 ? " minute ago" : " minutes ago");
    const l = Math.round(i / 60);
    if (l < 24) return l + (l === 1 ? " hour ago" : " hours ago");
    const u = Math.round(l / 24);
    return u + (u === 1 ? " day ago" : " days ago");
  }
  const Ga = (t) => {
    var a;
    return xe(t).current_position ?? (((a = y[t]) == null ? void 0 : a.state) === "closed" ? 0 : 100);
  }, Un = (t) => {
    var a;
    return Rn("pos", t, ((a = A.get(t)) == null ? void 0 : a.pos) ?? Ga(t));
  }, Yn = (t) => {
    var a;
    return Rn("tilt", t, ((a = A.get(t)) == null ? void 0 : a.tilt) ?? xe(t).current_tilt_position);
  };
  function sa(t) {
    var f;
    const a = y[t];
    if (!a) return "Not found";
    if (a.state === "unavailable") return "Unavailable";
    const i = a.attributes, l = t.split(".")[0];
    if (l === "light") {
      if (a.state !== "on") return "Off";
      const v = i.color_temp_kelvin;
      return (Vn(t) ? jn(a) + "%" : "On") + (i.color_mode === "color_temp" && v ? " · " + Number(v).toLocaleString() + "k" : Fd.includes(i.color_mode) ? " · Colour" : "");
    }
    if (l === "climate") return (a.state === "off" ? "Off" : Ht(i.hvac_action || a.state)) + " · " + Ia(i.current_temperature) + " °C now";
    if (l === "cover") {
      const v = Ga(t), k = i.current_tilt_position;
      return a.state === "opening" || a.state === "closing" ? Ht(a.state) + " - " + v + "%" : (v <= 0 ? "Closed" : v >= 100 ? "Open" : "Partially open") + (k > 0 && k < 100 ? " · tilted" : "");
    }
    if (l === "humidifier") return a.state !== "on" ? "Off" : Ht(i.action || "on") + " · " + i.current_humidity + "% now";
    if (l === "vacuum") return Ht(a.state) + (a.state === "cleaning" && ((f = i.rooms) != null && f.length) ? " · " + i.rooms.join(", ") : "") + (i.battery_level != null ? " · " + i.battery_level + "%" : "");
    if (l === "media_player") return a.state === "playing" || a.state === "paused" ? (a.state === "paused" ? "Paused · " : "") + (i.media_title || "Playing") : Ht(a.state);
    if (l === "alarm_control_panel") return op[a.state] || Ht(a.state);
    if (l === "lock" || l === "valve") return Ht(a.state);
    if (l === "switch") return a.state === "on" ? "On" : "Off";
    if (l === "plant") return a.state === "ok" ? "Healthy" : Ht(i.problem);
    if (l === "binary_sensor")
      return i.device_class === "battery" ? a.state === "on" ? "Low" : "Normal" : i.device_class === "problem" ? a.state === "on" ? "Problem" : "OK" : i.device_class === "moisture" ? a.state === "on" ? "Wet" : "Dry" : Il.includes(i.device_class) ? a.state === "on" ? "Open" : "Closed" : a.state === "on" ? "Detected" : "Clear";
    if (i.rang) return "Rang at " + Ye(i.rang);
    const u = o();
    if (u != null && u.formatEntityState && !qi(t))
      try {
        return u.formatEntityState(a);
      } catch {
      }
    const h = Number(a.state);
    if (a.state !== "" && Number.isFinite(h)) {
      const v = Math.abs(h) >= 100 ? 0 : Math.abs(h) >= 10 ? 1 : 2, k = i.unit_of_measurement ? i.unit_of_measurement === "%" ? "%" : " " + i.unit_of_measurement : "";
      return h.toLocaleString(void 0, { maximumFractionDigits: v }) + k + (i.plant_low ? " · Low" : i.plant_high ? " · High" : "");
    }
    return Ht(a.state);
  }
  const Ln = (t) => t >= 1e3 ? Ia(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W";
  function bn(t) {
    var i, l;
    const a = o();
    t.querySelectorAll("[data-icon-for]").forEach((u) => {
      var v;
      const h = y[u.dataset.iconFor], f = u.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && h && !f) {
        let k = u.firstElementChild;
        (!k || k.localName !== "ha-state-icon") && (u.textContent = "", k = document.createElement("ha-state-icon"), u.appendChild(k)), k.hass = a, k.stateObj = h;
      } else if (customElements.get("ha-icon")) {
        let k = u.firstElementChild;
        (!k || k.localName !== "ha-icon") && (u.textContent = "", k = document.createElement("ha-icon"), u.appendChild(k)), k.icon = f || ((v = h == null ? void 0 : h.attributes) == null ? void 0 : v.icon) || "mdi:circle-medium";
      } else u.textContent || (u.textContent = (u.dataset.letter || St(u.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (i = t.querySelectorAll) == null || i.call(t, ".tfIcon").forEach(Zi), (l = t.classList) != null && l.contains("tfIcon") && Zi(t), Mr();
  }
  const Po = /* @__PURE__ */ new Map();
  function Zi(t) {
    var h, f, v;
    const a = (((h = t.closest("[data-k]")) == null ? void 0 : h.dataset.k) || "") + "|" + (t.dataset.iconFor || ((f = t.querySelector("[data-icon-for]")) == null ? void 0 : f.dataset.iconFor) || t.getAttribute("aria-label") || ""), i = getComputedStyle(t), l = { backgroundColor: i.backgroundColor, color: i.color }, u = Po.get(a);
    Po.set(a, l), !(!u || u.backgroundColor === l.backgroundColor && u.color === l.color || (v = window.matchMedia) != null && v.call(window, "(prefers-reduced-motion: reduce)").matches) && t.animate([u, l], { duration: 180, easing: "ease" });
  }
  const Ki = "[data-icon-for]>:is(ha-state-icon,ha-icon),.tfIcon>svg", ms = (t) => {
    const a = [t];
    for (; a.length; ) {
      const i = a.shift();
      if (i.localName === "svg") return i;
      i.shadowRoot && a.push(...i.shadowRoot.children), a.push(...i.children);
    }
    return null;
  };
  function Re(t) {
    var Mt, Dt, nt;
    const a = t.localName === "svg" ? t : ms(t), i = a ? [...a.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")] : [];
    if (!i.length) return !a;
    const l = (Mt = t.closest(".tfIcon")) == null ? void 0 : Mt.offsetWidth;
    if (l === void 0) return !0;
    if (!l) return !1;
    const u = l + "|" + i.map((xt) => xt.getAttribute("d") || xt.localName).join("|");
    if (t.dataset.fitted === u) return !0;
    let h = 1 / 0, f = 1 / 0, v = -1 / 0, k = -1 / 0;
    for (const xt of i) {
      const V = xt.getBBox(), pt = getComputedStyle(xt), z = pt.stroke !== "none" ? (parseFloat(pt.strokeWidth) || 0) / 2 : 0;
      !V.width && !V.height || (h = Math.min(h, V.x - z), f = Math.min(f, V.y - z), v = Math.max(v, V.x + V.width + z), k = Math.max(k, V.y + V.height + z));
    }
    if (!(v > h)) return !1;
    const D = (nt = (Dt = a.viewBox) == null ? void 0 : Dt.baseVal) != null && nt.width ? a.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, N = l - 14, F = N * D.width / Math.max(v - h, k - f), $ = F / D.width;
    return t.localName === "svg" ? (t.style.width = F + "px", t.style.height = F + "px") : t.style.setProperty("--mdc-icon-size", F + "px"), a.style.translate = ((D.x + D.width / 2 - (h + v) / 2) * $).toFixed(2) + "px " + ((D.y + D.height / 2 - (f + k) / 2) * $).toFixed(2) + "px", t.dataset.fitted = u, !0;
  }
  let ha = 0;
  function uo(t = 0) {
    clearTimeout(ha), [...n.querySelectorAll(Ki)].filter((i) => !Re(i)).length && t < 5 && (ha = setTimeout(() => uo(t + 1), 300));
  }
  function Mr() {
    clearTimeout(ha), ha = setTimeout(() => uo(), 60);
  }
  const Ua = (t) => {
    var a, i, l;
    return t.startsWith("light.") && y[t] && !xe(t).icon && !((l = (i = (a = o()) == null ? void 0 : a.entities) == null ? void 0 : i[t]) != null && l.icon) ? "mdi:lightbulb" : "";
  }, ye = (t, a, i) => (a = a || Ua(t), ' data-icon-for="' + Q(t) + '"' + (a ? ' data-icon-name="' + Q(a) + '"' : "") + (i ? ' data-letter="' + Q(i) + '"' : "")), na = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : xe(t).rang ? "mdi:doorbell" : "", Le = (t, a, i, l) => Q([t, a, i, l ? JSON.stringify(l) : ""].join("|")), _n = (t) => Q(JSON.stringify(t));
  function Zn(t, a) {
    var u, h;
    const i = Q(St(a) + ", " + sa(a));
    return '<div class="activityRow' + (Number.isFinite(Number((u = y[a]) == null ? void 0 : u.state)) && ((h = y[a]) == null ? void 0 : h.state) !== "" ? ' tap" role="button" tabindex="0" data-open="' + Q(t + "|" + a) + '" aria-label="' + i + '. Show the last 24 hours"' : '" aria-label="' + i + '"') + '><div class="tfIcon" aria-hidden="true"' + ye(a, na(a)) + '></div><div><div class="activityRowName">' + Q(St(a)) + '</div><div class="activityRowMeta">' + Q(sa(a)) + "</div></div></div>";
  }
  const fo = (t, a, i) => '<div class="activityRow" aria-label="' + Q(t + ", " + a) + '"><div class="tfIcon" aria-hidden="true"' + ye("", i, t) + '></div><div><div class="activityRowName">' + Q(t) + '</div><div class="activityRowMeta">' + Q(a) + "</div></div></div>";
  function Da(t) {
    var i;
    const a = ((i = y[t]) == null ? void 0 : i.state) === "on";
    return '<div class="activityRow tfPlug' + (a ? " on" : "") + '"><button class="tfIcon" type="button" data-act="' + Le("switch", "toggle", t) + '" aria-label="Turn ' + Q(St(t)) + (a ? " off" : " on") + '"' + ye(t) + '></button><button class="tfName" type="button" data-more="' + Q(t) + '" aria-label="' + Q(St(t) + ", " + sa(t) + ". More info") + '"><span class="activityRowName">' + Q(St(t)) + '</span><span class="activityRowMeta">' + Q(sa(t)) + "</span></button></div>";
  }
  const En = (t) => {
    var a;
    return ((a = G.get(t)) == null ? void 0 : a.name) ?? St(t);
  }, wn = (t) => {
    var a;
    return ((a = G.get(t)) == null ? void 0 : a.text) ?? sa(t);
  };
  function ci(t) {
    var i;
    const a = (i = G.get(t)) == null ? void 0 : i.icon;
    return '<div class="tfOpen"><div class="tfOpenHead"><div class="tfIcon" aria-hidden="true"' + (a ? ye("", a, En(t)) : ye(t, na(t))) + '></div><div><div class="activityRowName">' + Q(En(t)) + '</div><div class="activityRowMeta">' + Q(wn(t)) + '</div></div><button class="tfBack" type="button" data-close aria-label="Close ' + Q(En(t)) + '’s last 24 hours">' + Pd + '</button></div><svg class="tfGraph" data-graph="' + Q(t) + '" role="img" aria-label="' + Q(En(t)) + ', last 24 hours"></svg></div>';
  }
  function xn(t, a, i, l, u = "", h = null, f = "") {
    const v = P && P.key === t;
    return '<section class="card tfCard' + (f ? " " + f : "") + (v ? " open" : "") + '" data-tf data-k="' + Q(t) + '" style="order:' + a + (v && P.h ? ";min-height:" + P.h + "px" : "") + '" aria-label="' + Q(i) + '"><div class="activityHeader">' + (h ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + Q(h) + '" aria-label="' + Q(i + (y[h] ? ", " + sa(h) : "") + ". More info") + '">' + Q(i) + "</button>" : '<div class="activityTitle">' + Q(i) + "</div>") + "</div>" + (v ? ci(P.id) : '<div class="activityRows">' + l.join("") + "</div>" + u) + "</section>";
  }
  function ho(t, a) {
    const i = "readings:" + t.id, l = t.readings.map((u) => Zn(i, u));
    return t.power != null && l.push(fo("Power now", Ln(t.power), "mdi:flash")), xn(i, a, "Readings", l.concat(t.plugs.map(Da)));
  }
  function Kn(t, a) {
    var v;
    const i = "energy:" + t.id, [l, u] = [t.solar.find((k) => k.endsWith("_power")), t.solar.find((k) => k.endsWith("_today"))], h = [l, u].filter(Boolean).map((k) => Zn(i, k)), f = Number(((v = y[l]) == null ? void 0 : v.state) || 0) * 1e3;
    return Qt.grid && (h.push(Zn(i, Qt.grid)), h.push(fo("House use", Ln(f + Number(y[Qt.grid].state)), "mdi:home-lightning-bolt"))), xn(i, a, "Energy", h, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const Ya = (t, a) => xn("plant:" + t.id, a, St(t.id), t.readings.map((i) => Zn("plant:" + t.id, i)), "", t.id);
  function mo(t, a, i, l, u, h, f = null) {
    const v = i == null ? null : Math.max(0, Math.min(1, i)), k = v == null ? 0 : Math.round(v * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + Q(l) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + k + '"' + (u ? ' aria-valuetext="' + Q(u) + '"' : "") + ' data-drag="' + Q(t + "|" + a) + '">' + (f != null ? '<span class="was" aria-hidden="true" style="left:' + f + '%"></span>' : "") + (h ? v == null ? "" : '<b style="left:' + k + '%"></b>' : '<i style="width:' + k + '%"></i>') + "</div>";
  }
  const $i = "move-assistant-house-last-bright", yn = (() => {
    try {
      return JSON.parse(Vi.get($i)) || {};
    } catch {
      return {};
    }
  })();
  let Io = 0;
  const x = (t, a) => {
    !a || yn[t] === a || (yn[t] = a, clearTimeout(Io), Io = setTimeout(() => Vi.set($i, JSON.stringify(yn)), 500));
  }, S = (t, a, i, l) => '<div class="tfStep" role="group" aria-label="' + Q(t) + '"><button type="button" data-act="' + i + '" aria-label="Lower ' + Q(t.toLowerCase()) + '">' + Vc.down + "</button><output>" + Q(a) + '</output><button type="button" data-act="' + l + '" aria-label="Raise ' + Q(t.toLowerCase()) + '">' + Vc.up + "</button></div>", C = (t, a, i) => '<div class="' + t + '" role="group" aria-label="' + Q(a) + '">' + i.filter(Boolean).map((l) => '<button type="button" data-act="' + l.act + '"' + (l.pressed != null ? ' aria-pressed="' + l.pressed + '"' : "") + (l.disabled ? " disabled" : "") + (l.aria ? ' aria-label="' + Q(l.aria) + '"' : "") + ">" + (l.html || Q(l.label)) + "</button>").join("") + "</div>", O = (t, a) => "width:" + Math.round(Math.max(0, Math.min(1, (t - a * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * a / 3).toFixed(2), Z = (t) => "left:calc(4px + " + t / 100 + " * (100% - 8px))", J = (t, a) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + Q(St(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + Math.round(a) + '% open" data-blocks="' + Q(t) + '">' + [0, 1, 2, 3].map((i) => '<span><i style="' + O(a, i) + '"></i><b' + (a >= (i + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (i + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + Z(a) + '">' + Math.round(a) + "%</output></div>";
  function dt(t, a) {
    t.querySelectorAll(":scope>span").forEach((l, u) => {
      l.firstElementChild.setAttribute("style", O(a, u)), l.lastElementChild.classList.toggle("lit", a >= (u + 1) * 25 - 12);
    });
    const i = t.querySelector(".tfTip");
    i.setAttribute("style", Z(a)), i.textContent = Math.round(a) + "%", t.setAttribute("aria-valuenow", String(Math.round(a))), t.setAttribute("aria-valuetext", Math.round(a) + "% open");
  }
  const bt = (t, a) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + Q(St(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(a) + '" aria-valuetext="' + Math.round(a) + '% open" data-drag="tilt|' + Q(t) + '"><i style="width:calc((100% - 8px) * ' + a / 100 + ')"></i><span' + (a > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (a > 92 ? ' class="lit"' : "") + ">Open</span></div>", wt = (t, a, i) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + Q(St(t)) + '">' + [
    ze(t, mh) && ["open", "Open", "open_cover", a >= 100 && !i],
    ze(t, vh) && ["stop", "Stop", "stop_cover", !1],
    ze(t, gh) && ["close", "Close", "close_cover", a <= 0 && !i]
  ].filter(Boolean).map(([l, u, h, f]) => '<button type="button" data-act="' + Le("cover", h, t) + '" aria-label="' + u + '"' + (f ? " disabled" : "") + ">" + bh[l] + "</button>").join("") + "</div>", Pt = (t, a) => '<button class="tfIcon' + (a.art ? " art" : "") + '" type="button" data-act="' + a.button.act + '" aria-label="' + Q(a.button.label) + '"' + (a.art ? ' style="background-image:url(&quot;' + Q(a.art) + '&quot;)"' : ye(t, a.icon)) + "></button>", Lt = (t) => '<button class="tfName" type="button" data-more="' + Q(t) + '" aria-label="' + Q(St(t) + ", " + sa(t) + ". More info") + '"><span class="activityRowName">' + Q(St(t)) + '</span><span class="activityRowMeta">' + Q(sa(t)) + "</span></button>";
  function kt(t, a = !1, i = null) {
    const l = ce(t), u = t.startsWith("light.") && ie(t) && !(i && cn(t) < 3), h = i || (a && t.startsWith("light.") ? ["bright"] : null), f = u ? ['<div class="tfDacPad" data-dac="' + (a ? "more:" : i ? "dash:" : "tile:") + Q(t) + '"></div>'] : l.sections.map((v, k) => v && (!h || h.includes((l.parts || [])[k])) ? v : "").filter(Boolean);
    return '<div class="tfAction' + (u ? " tfDac" : "") + (l.on ? " on" : "") + '" data-k="' + Q(t) + '"' + (l.tone ? ' data-tone="' + l.tone + '"' : "") + zn(t) + '><div class="tfActionHead">' + Pt(t, l) + Lt(t) + "</div>" + f.join("") + "</div>";
  }
  const Gt = "dual-controller-v3", Rt = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let Ft = null;
  async function Zt() {
    if (Ft || customElements.get(Gt)) return;
    Ft = "loading";
    const t = await Promise.resolve().then(() => R({ type: "lovelace/resources" })).catch(() => null), a = Array.isArray(t) && t.some((l) => /dual-axis-controller/i.test(l.url || ""));
    if (await Promise.race([customElements.whenDefined(Gt), new Promise((l) => setTimeout(l, a ? 8e3 : 0))]), customElements.get(Gt)) return;
    const i = Object.assign(document.createElement("script"), { src: Rt });
    i.onerror = () => {
      Ft = "failed", U();
    }, document.head.appendChild(i);
  }
  const Vt = /* @__PURE__ */ new Map(), Tt = (t) => (me.lightStyles[t] || me.lights) === "dac", ee = () => me.lights === "dac" || Object.values(me.lightStyles).includes("dac");
  function ie(t) {
    return Tt(t) && !!customElements.get(Gt);
  }
  const Ge = (t) => me.lightPads[t] || me.dacPad, Nt = () => {
    const t = o();
    return t && {
      ...t,
      themes: { ...t.themes || {}, darkMode: !m.classList.contains("light") },
      callService: (a, i, l, ...u) => t.callService(a, ...xl(a, i, l), ...u)
    };
  }, Pe = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", $e = (t) => {
    !t.shadowRoot || t.shadowRoot.querySelector("style[data-tf]") || (t.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: Pe })).dataset.tf = "");
  }, Fa = /* @__PURE__ */ new Map(), Dn = new ResizeObserver((t) => t.forEach(({ target: a }) => {
    const i = a.parentElement;
    !i || !a.offsetHeight || (i.style.removeProperty("min-height"), Fa.set(i.dataset.dac, i.offsetHeight));
  }));
  function Bn(t) {
    t.querySelectorAll("[data-dac]").forEach((a) => {
      const i = a.dataset.dac;
      let l = Vt.get(i);
      if (!l) {
        const u = i.slice(i.indexOf(":") + 1);
        l = document.createElement(Gt), l.setConfig({ type: "custom:" + Gt, entity: u, pad: Ge(u), tap_action: { action: "none" } }), Vt.set(i, l);
      }
      l.hass = Nt(), l.parentNode !== a && a.replaceChildren(l), !l.offsetHeight && Fa.has(i) && (a.style.minHeight = Fa.get(i) + "px"), Dn.observe(l), $e(l);
    });
  }
  function Xi() {
    const t = Nt();
    Vt.forEach((a, i) => {
      a.isConnected ? a.hass = t : Vt.delete(i);
    });
  }
  customElements.whenDefined(Gt).then(() => {
    w && (_ != null && _.querySelector("[data-tf]")) && fl(Fn);
  });
  const Rn = (t, a, i) => Wt.has(t + "|" + a) ? Wt.get(t + "|" + a) : i;
  function ce(t) {
    var h;
    const a = y[t], i = a.attributes, l = t.split(".")[0], u = (f, v) => ({ act: Le(f, "toggle", t), label: v });
    if (l === "light") {
      const f = a.state === "on", v = Yi(t), [k, D] = No(t), N = Rn("bright", t, jn(a));
      f && x(t, jn(a));
      const F = Rn("ct", t, f && i.color_mode === "color_temp" ? i.color_temp_kelvin : null), $ = Rn("hue", t, f && Fd.includes(i.color_mode) && i.hs_color ? i.hs_color[0] : null);
      return { on: f, button: u("light", "Turn " + St(t) + (f ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        Vn(t) && mo("bright", t, N / 100, St(t) + " brightness", N + "%", !1, f ? null : yn[t] ?? null),
        v.includes("color_temp") && mo("ct", t, F == null ? null : (F - k) / (D - k), St(t) + " warm to cool", F == null ? "" : Math.round(F) + " kelvin", !0),
        v.some((Mt) => Fd.includes(Mt)) && mo("hue", t, $ == null ? null : $ / 360, St(t) + " colour", "", !0)
      ] };
    }
    if (l === "climate") {
      const f = i.target_temp_step || 0.5, v = Number(i.temperature);
      return { on: a.state !== "off", tone: a.state === "cool" || i.hvac_action === "cooling" ? "cool" : "heat", button: u("climate", "Turn " + St(t) + (a.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(v) && S("Target temperature", Ia(v) + " °C", Le("climate", "set_temperature", t, { temperature: v - f }), Le("climate", "set_temperature", t, { temperature: v + f })),
        C("tfSeg", "Mode", (i.hvac_modes || []).map((k) => ({ label: Ht(k), act: Le("climate", "set_hvac_mode", t, { hvac_mode: k }), pressed: a.state === k })))
      ] };
    }
    if (l === "cover") {
      const f = a.state === "opening" || a.state === "closing", v = a.state === "closed", k = Un(t), D = Yn(t);
      return { on: !v, tone: "blue", icon: $c[Nd(a)][v ? 1 : 0], button: u("cover", (v ? "Open " : "Close ") + St(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        ze(t, Kc) && J(t, k),
        D != null && bt(t, D),
        wt(t, k, f)
      ] };
    }
    if (l === "humidifier") {
      const f = Number(i.humidity);
      return { on: a.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: u("humidifier", "Turn " + St(t) + (a.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(f) && S("Target humidity", f + "%", Le("humidifier", "set_humidity", t, { humidity: f - 1 }), Le("humidifier", "set_humidity", t, { humidity: f + 1 })),
        ((h = i.available_modes) == null ? void 0 : h.length) && C("tfSeg", "Mode", i.available_modes.map((v) => ({ label: Ht(v), act: Le("humidifier", "set_mode", t, { mode: v }), pressed: i.mode === v })))
      ] };
    }
    if (l === "media_player") {
      const f = a.state === "playing", v = a.state === "off" || a.state === "standby", k = Rn("vol", t, i.volume_level), D = v ? { act: Le("media_player", ze(t, fh) ? "turn_on" : "toggle", t), label: "Turn " + St(t) + " on" } : a.state === "playing" || a.state === "paused" ? { act: Le("media_player", "media_play_pause", t), label: (f ? "Pause " : "Play ") + St(t) } : { act: Le("media_player", ze(t, hh) ? "turn_off" : "toggle", t), label: "Turn " + St(t) + " off" };
      return { on: !v, tone: "blue", art: !v && i.entity_picture ? i.entity_picture : null, button: D, parts: ["playback", "volume"], sections: v ? [] : [
        (ze(t, Uc) || ze(t, Yc) || ze(t, Gc) || ze(t, Zc)) && C("tfSeg", "Playback", [
          { html: Pl.prev, aria: "Previous", act: Le("media_player", "media_previous_track", t), disabled: !ze(t, Uc) },
          { html: f ? Pl.pause : Pl.play, aria: f ? "Pause" : "Play", act: Le("media_player", "media_play_pause", t), disabled: !(ze(t, Gc) || ze(t, Zc)) },
          { html: Pl.next, aria: "Next", act: Le("media_player", "media_next_track", t), disabled: !ze(t, Yc) }
        ]),
        ze(t, uh) && k != null && mo("vol", t, k, St(t) + " volume", Math.round(k * 100) + "%")
      ] };
    }
    if (l === "vacuum") {
      const f = a.state === "cleaning", v = i.rooms || [], k = (N) => v.includes(N) ? v.filter((F) => F !== N) : v.concat(N), D = Le("vacuum", f ? "pause" : "start", t, qi(t) ? { rooms: v } : null);
      return { on: f || a.state === "returning", tone: "blue", button: { act: D, label: (f ? "Pause " : "Start ") + St(t) }, parts: ["controls", "rooms"], sections: [
        C("tfSeg", St(t), [
          { label: f ? "Pause" : "Start", act: D },
          { label: "Dock", act: Le("vacuum", "return_to_base", t), disabled: a.state === "docked" },
          { label: "Locate", act: Le("vacuum", "locate", t) }
        ]),
        qi(t) && C("tfChips", "Rooms to clean", Qt.rooms.filter((N) => N.id !== "balcony").map((N) => ({ label: N.name, act: Le("vacuum", "set_rooms", t, { rooms: k(N.name) }), pressed: v.includes(N.name) })))
      ] };
    }
    if (l === "lock") {
      const f = a.state === "locked";
      return { on: !f, tone: "heat", button: { act: Le("lock", f ? "unlock" : "lock", t), label: (f ? "Unlock " : "Lock ") + St(t) }, parts: ["controls"], sections: [
        C("tfSeg", St(t), [
          { label: "Lock", act: Le("lock", "lock", t), pressed: f },
          { label: "Unlock", act: Le("lock", "unlock", t), pressed: a.state === "unlocked" },
          ze(t, _h) && { label: "Open", act: Le("lock", "open", t), pressed: a.state === "open" }
        ])
      ] };
    }
    if (l === "alarm_control_panel") {
      const f = a.state === "disarmed";
      return { on: !f, tone: a.state === "triggered" ? "alarm" : "blue", button: { act: Le("alarm_control_panel", f ? "alarm_arm_away" : "alarm_disarm", t), label: f ? "Arm " + St(t) + ", away" : "Disarm " + St(t) }, parts: ["controls"], sections: [
        C("tfSeg", St(t), Eh.filter(([, , , v]) => !v || ze(t, v)).map(([v, k, D]) => ({ label: k, act: Le("alarm_control_panel", D, t), pressed: a.state === v })))
      ] };
    }
    if (l === "valve") {
      const f = a.state === "open";
      return { on: f, tone: "blue", icon: "mdi:sprinkler-variant", button: u("valve", (f ? "Close " : "Open ") + St(t)), parts: ["controls"], sections: [
        C("tfSeg", St(t), [
          { label: "Open", act: Le("valve", "open_valve", t), pressed: f },
          { label: "Close", act: Le("valve", "close_valve", t), pressed: !f }
        ])
      ] };
    }
    return { on: !1, button: { act: "", label: St(t) }, sections: [] };
  }
  const Oa = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : Ia(t)) + "°";
  function sn(t) {
    var xt;
    const a = (V) => t.readings.find((pt) => xe(pt).device_class === V), i = a("temperature"), l = a("humidity"), u = (V) => {
      var pt;
      return Number((pt = y[V]) == null ? void 0 : pt.state);
    }, h = (V) => t.actions.filter((pt) => V.test(pt)), f = t.lights.filter((V) => {
      var pt;
      return ((pt = y[V]) == null ? void 0 : pt.state) === "on";
    }), v = h(/^cover\./), k = v.filter((V) => {
      var pt;
      return ((pt = y[V]) == null ? void 0 : pt.state) !== "closed";
    }), D = [...new Set(v.map((V) => Nd(y[V])))], N = h(/^climate\./)[0], F = h(/^humidifier\./)[0], $ = h(/^media_player\./), Mt = $.find((V) => {
      var pt;
      return ((pt = y[V]) == null ? void 0 : pt.state) === "playing";
    }) || $.find((V) => {
      var pt;
      return ((pt = y[V]) == null ? void 0 : pt.state) === "paused";
    }), Dt = t.plugs.filter((V) => {
      var pt;
      return ((pt = y[V]) == null ? void 0 : pt.state) === "on";
    }), nt = [];
    if (i && Number.isFinite(u(i)) && nt.push({ key: "temp", id: i, kind: "reading", icon: _o(i), label: "Temperature", value: Ia(u(i)) + "°" }), l && Number.isFinite(u(l)) && nt.push({ key: "hum", id: l, kind: "reading", icon: _o(l), label: "Humidity", value: Math.round(u(l)) + "%" }), t.lights.length && nt.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: _o("", "mdi:lightbulb"),
      label: "Lights",
      value: f.length ? f.length + " of " + t.lights.length + " on" : "All off",
      short: f.length ? f.length + " on" : "Off",
      on: f.length > 0,
      light: f.length ? ra(f[0]) : "",
      acts: t.lights.map((V) => ["light", f.length ? "turn_off" : "turn_on", V]),
      aria: (f.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), v.length) {
      const V = D.length === 1 ? wh[D[0]] : "covers", pt = Math.round(v.reduce((z, jt) => z + Ga(jt), 0) / v.length);
      nt.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        icon: _o("", ((xt = $c[D[0]]) == null ? void 0 : xt[k.length ? 0 : 1]) || "mdi:window-shutter"),
        label: Ht(V),
        value: pt <= 0 ? "Closed" : pt >= 100 ? "Open" : pt + "% open",
        short: pt <= 0 ? "Closed" : pt + "%",
        on: k.length > 0,
        acts: v.map((z) => ["cover", k.length ? "close_cover" : "open_cover", z]),
        aria: (k.length ? "Close the " : "Open the ") + V + " in " + t.name
      });
    }
    if (N) {
      const V = xe(N), pt = y[N].state === "off";
      nt.push({
        key: "climate",
        kind: "control",
        tone: V.hvac_action === "cooling" ? "cool" : "heat",
        icon: _o(N),
        label: St(N),
        value: pt ? "Off" : Ht(V.hvac_action || y[N].state) + " · " + Oa(V.temperature),
        short: pt ? "Off" : Oa(V.temperature),
        on: !pt,
        acts: [["climate", "toggle", N]],
        aria: "Turn " + St(N) + (pt ? " on" : " off")
      });
    }
    if (F) {
      const V = y[F].state === "on";
      nt.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        icon: _o("", "mdi:air-humidifier"),
        label: St(F),
        value: V ? "On · " + xe(F).humidity + "%" : "Off",
        short: V ? xe(F).humidity + "%" : "Off",
        on: V,
        acts: [["humidifier", "toggle", F]],
        aria: "Turn " + St(F) + (V ? " off" : " on")
      });
    }
    if ($.length) {
      const V = Mt || $[0], pt = y[V], z = pt.state === "playing";
      nt.push({
        key: "media",
        kind: "control",
        tone: "blue",
        icon: _o(V),
        label: St(V),
        value: sa(V),
        short: z ? "Playing" : pt.state === "paused" ? "Paused" : Ht(pt.state),
        on: z,
        acts: [["media_player", pt.state === "playing" || pt.state === "paused" ? "media_play_pause" : "toggle", V]],
        aria: (z ? "Pause " : "Play ") + St(V)
      });
    }
    return t.plugs.length && nt.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      icon: _o("", "mdi:power-plug"),
      label: "Plugs",
      value: Dt.length ? Dt.length + " of " + t.plugs.length + " on" : "All off",
      short: Dt.length ? Dt.length + " on" : "Off",
      on: Dt.length > 0,
      acts: t.plugs.map((V) => ["switch", Dt.length ? "turn_off" : "turn_on", V]),
      aria: (Dt.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((V) => nt.push(xe(V).device_class === "moisture" ? { key: "alert:" + V, kind: "alert", icon: _o(V), label: "Water leak" } : { key: "note:" + V, kind: "note", icon: _o(V), label: St(V) + " " + sa(V).toLowerCase() })), nt;
  }
  const ln = (t, a) => {
    const i = (l) => t.actions.filter((u) => l.test(u));
    return {
      lights: t.lights,
      covers: i(/^cover\./),
      climate: i(/^climate\./).slice(0, 1),
      humidifier: i(/^humidifier\./).slice(0, 1),
      plugs: t.plugs,
      media: (() => {
        const l = i(/^media_player\./);
        return [l.find((u) => {
          var h;
          return ((h = y[u]) == null ? void 0 : h.state) === "playing";
        }) || l.find((u) => {
          var h;
          return ((h = y[u]) == null ? void 0 : h.state) === "paused";
        }) || l[0]].filter(Boolean);
      })()
    }[a] || [];
  }, pi = (t, a, i) => '<button class="' + a + (t.on ? " on" : "") + '" type="button" data-tone="' + t.tone + '" data-acts="' + _n(t.acts) + '" aria-label="' + Q(t.aria) + '" aria-pressed="' + t.on + '">' + i + "</button>", Sr = (t) => '<button class="tfAName" type="button" data-go="' + Q(t.id) + '" aria-label="Open ' + Q(t.name) + '">' + Q(t.name) + "</button>";
  function $n(t, a, i = !1) {
    const l = a.find((v) => v.key === "lights"), u = !!(l != null && l.on), h = "", f = '<span class="tfAreaGlyph"' + ye("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>";
    return i || !l ? '<span class="tfIcon tfAreaIcon' + (u ? " on" : "") + '"' + h + ' aria-hidden="true">' + f + "</span>" : '<button class="tfIcon tfAreaIcon' + (u ? " on" : "") + '" type="button"' + h + ' data-acts="' + _n(l.acts) + '" aria-label="' + Q(l.aria) + '" aria-pressed="' + u + '">' + f + "</button>";
  }
  const Aa = (t) => t.filter((a) => a.kind === "alert" || a.kind === "note").map((a) => '<span class="sourceTag">' + Q(a.label) + "</span>").join(" "), We = (t) => t.readings.find((a) => xe(a).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((a) => y[a]) || null, Zs = (t, a) => {
    const i = St(a);
    return i.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? Ht(i.slice(t.name.length + 1)) : i;
  };
  function gs(t) {
    const a = y[t], i = xe(t), l = t.split(".")[0], u = Number(a.state);
    if (a.state === "unavailable") return { text: "Unavailable" };
    if (l === "sensor" && Number.isFinite(u)) {
      if (i.device_class === "temperature") return { text: Oa(u) };
      const h = i.unit_of_measurement || "";
      return h === "%" ? { text: Math.round(u) + "%" } : { text: Ia(u, Number.isInteger(u) ? 0 : 1), unit: h };
    }
    if (l === "climate" && (i.current_temperature ?? i.temperature) != null) return { text: Oa(i.current_temperature ?? i.temperature) };
    if (l === "light") return { text: a.state !== "on" ? "Off" : Vn(t) ? jn(a) + "%" : "On" };
    if (l === "cover") {
      const h = Ga(t);
      return { text: h <= 0 ? "Closed" : h >= 100 ? "Open" : h + "%" };
    }
    return l === "humidifier" ? { text: a.state === "on" ? i.humidity + "%" : "Off" } : l === "media_player" ? { text: a.state === "playing" ? "Playing" : a.state === "paused" ? "Paused" : Ht(a.state) } : { text: sa(t) };
  }
  const vs = (t, a, i) => {
    const l = i.find((v) => v.key === "temp"), u = i.find((v) => v.key === "hum"), h = xe(a), f = y[a].state === "off";
    return a.startsWith("climate.") ? [Zs(t, a), f ? "Off" : Ht(h.hvac_action || y[a].state) + (h.temperature != null ? " · " + Oa(h.temperature) : ""), u && u.value + " humidity"].filter(Boolean).join(" · ") : [!(l && l.id === a) && Zs(t, a), l && l.id !== a && l.value, u && u.id !== a && u.value + " humidity"].filter(Boolean).join(" · ");
  };
  function ui(t, a, i) {
    const l = i && gs(i), u = i ? vs(t, i, a) : "", h = (v) => {
      const k = ln(t, v.key);
      return k.length === 1 ? k[0] : "group:" + t.id + ":" + v.key;
    }, f = a.filter((v) => v.kind === "control").slice(0, 4).map((v) => '<div class="tfATile' + (v.on ? " on" : "") + '" data-tone="' + v.tone + '"' + (v.light ? ' data-light style="' + v.light + '"' : "") + ">" + pi(v, "tfIcon", v.icon) + '<button class="tfName" type="button" data-more="' + Q(h(v)) + '" aria-label="' + Q(t.name + " " + v.label.toLowerCase() + ", " + v.value + ". Open") + '"><span class="activityRowName">' + Q(v.label) + '</span><span class="activityRowMeta">' + Q(v.value) + "</span></button></div>");
    return '<div class="workoutPanelTop">' + $n(t, a) + '<div class="tfATitle">' + Sr(t) + Aa(a) + "</div></div>" + (i ? '<button class="tfABig" type="button" data-more="' + Q(i) + '" aria-label="' + Q(St(i) + ", " + sa(i) + ". More info") + '"><span class="tfABigMain' + (l.text.length > 7 ? " long" : "") + '">' + Q(l.text) + (l.unit ? '<span class="tfABigUnit">' + Q(l.unit) + "</span>" : "") + "</span>" + (u ? '<span class="tfABigSub">' + Q(u) + "</span>" : "") + "</button>" : "") + (f.length ? '<div class="tfATiles">' + f.join("") + "</div>" : "");
  }
  function Yl(t) {
    const a = t.id === lt, i = sn(t), l = We(t), u = l && gs(l), h = [...i.filter((f) => f.kind === "control"), ...i.filter((f) => f.kind !== "control" && f.kind !== "reading")].slice(0, 4);
    return '<article class="workoutPanel tfAreaPanel' + (a ? " active" : "") + '" data-area="' + Q(t.id) + '" tabindex="0" aria-expanded="' + a + '" aria-label="' + Q(t.name) + '"><div class="panelExpanded"' + (a ? "" : " inert") + ">" + ui(t, i, l) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + $n(t, i, !0) + '<span class="tfACName">' + Q(t.name) + '</span></div><span class="tfACMain">' + (u ? Q(u.text + (u.unit ? " " + u.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + h.map((f) => '<span class="tfACTile"><span class="tfIcon' + (f.kind === "alert" ? " alert" : "") + '"' + (f.on && f.light ? ' data-light style="' + f.light + '"' : "") + ">" + f.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let Be = [];
  const Xn = (t) => '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="workoutGallery tfAreaGallery" aria-label="Areas">' + Be.map(Yl).join("") + "</section></div>", go = (t) => t.startsWith("room:"), Ks = (t) => Be.find((a) => "room:" + a.id === t);
  function Cr(t, a) {
    const i = sn(t), l = We(t), u = l && gs(l), h = l ? vs(t, l, i) : "", f = u ? u.text + (u.unit ? " " + u.unit : "") : "", v = ($) => {
      const Mt = ln(t, $.key);
      return Mt.length === 1 ? Mt[0] : "group:" + t.id + ":" + $.key;
    }, k = i.filter(($) => $.kind === "control").slice(0, 4), D = ($) => $.on && $.light ? ' data-light style="' + $.light + '"' : "", N = k.map(($) => '<button class="tfIcon' + ($.on ? " on" : "") + '" type="button" data-tone="' + $.tone + '"' + D($) + ' data-more="' + Q(v($)) + '" aria-label="' + Q($.label + ", " + $.value + ". Open its controls") + '">' + $.icon + "</button>"), F = k.map(($) => '<button class="tfRoomDev" type="button" data-more="' + Q(v($)) + '" aria-label="' + Q($.label + ", " + $.value + ". Open its controls") + '"><span class="tfIcon' + ($.on ? " on" : "") + '" data-tone="' + $.tone + '"' + D($) + ">" + $.icon + '</span><span class="tfRoomDevName"><span class="activityRowName">' + Q($.label) + '</span><span class="activityRowMeta">' + Q($.value) + "</span></span></button>");
    return '<div class="tfAction tfRoomTile" data-k="' + Q(a) + '" data-go="' + Q(t.id) + '"><div class="tfActionHead"><span class="tfIcon tfRoomIcon" aria-hidden="true"><span class="tfAreaGlyph"' + ye("area:" + t.id, t.icon || "mdi:texture-box", t.name) + '></span></span><button class="tfName" type="button" data-go="' + Q(t.id) + '" aria-label="Open ' + Q(t.name) + '"><span class="activityRowName">' + Q(t.name) + "</span>" + (f || h ? '<span class="activityRowMeta">' + (f ? '<span class="tfRoomInline">' + Q(f) + (h ? " · " : "") + "</span>" : "") + Q(h) + "</span>" : "") + "</button></div>" + (f ? '<div class="tfRoomReading" aria-hidden="true"><span class="tfRoomBig">' + Q(f) + "</span>" + (h ? '<span class="tfRoomSub">' + Q(h) + "</span>" : "") + "</div>" : "") + (N.length ? '<div class="tfRoomDevices">' + N.join("") + '</div><div class="tfRoomHeads">' + F.join("") + "</div>" : "") + "</div>";
  }
  const Tr = () => [
    { key: "home", name: "Home", ids: Qt.homeVacuums },
    ...Qt.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], vo = (t, a, i) => t + " " + (t === 1 ? a : i), la = () => (j.favourites ?? ct.favorite_entities ?? []).filter((t) => y[t]);
  function bo() {
    if (!$t) {
      const a = Object.entries(le).sort((l, u) => u[1] - l[1]).map(([l]) => l), i = Qt.rooms.flatMap((l) => l.actions);
      $t = [.../* @__PURE__ */ new Set([...yt, ...a, ...i.filter((l) => ce(l).on), ...i])];
    }
    const t = la();
    return $t.filter((a) => y[a] && y[a].state !== "unavailable" && !t.includes(a));
  }
  let $s = !1;
  function Jn() {
    if (!$s || j.favSeeded || !Qt.rooms.length) return;
    const t = (i) => Object.keys(y).find((l) => qi(l) && i(l)), a = [t((i) => i.startsWith("climate.")), t((i) => i.startsWith("cover.") && /curtain/.test(i)), t((i) => i.startsWith("valve.")), Qt.security.locks[0]];
    j = { ...j, favourites: [.../* @__PURE__ */ new Set([...j.favourites ?? ct.favorite_entities ?? [], ...a.filter(Boolean)])], favSeeded: !0 }, Pa();
  }
  const Ji = () => j.suggest ?? !ct.hide_suggested_entities;
  function Nn() {
    const t = new Set(j.favHidden || []), a = la().filter((l) => !t.has(l)), i = Ji() ? bo().filter((l) => !t.has(l) && Br(l)) : [];
    return [...a, ...i].slice(0, Bh);
  }
  const Xs = (t) => {
    const a = la().includes(t);
    return '<button class="tfStar" type="button" data-star="' + Q(t) + '" aria-pressed="' + a + '" aria-label="Favourite: ' + Q(St(t)) + '">' + Lh(a) + "</button>";
  };
  function bs(t, { area: a = !1, star: i = !1, plain: l = !1, say: u = null, alert: h = !1 } = {}) {
    var Dt, nt, xt, V, pt, z;
    const f = l && ((pt = (Dt = o()) == null ? void 0 : Dt.devices) == null ? void 0 : pt[(V = (xt = (nt = o()) == null ? void 0 : nt.entities) == null ? void 0 : xt[t]) == null ? void 0 : V.device_id]), v = f && (f.name_by_user || f.name) || St(t), k = t.split(".")[0], D = !l && Hl.includes(k) ? ce(t) : null, N = D ? D.on : ["on", "open", "playing"].includes((z = y[t]) == null ? void 0 : z.state), F = l ? null : D ? D.button : xh.includes(k) ? { act: Le(k, "toggle", t), label: "Turn " + St(t) + (N ? " off" : " on") } : k === "scene" || k === "script" ? { act: Le(k, "turn_on", t), label: "Run " + St(t) } : null, $ = (u ?? sa(t)) + (a && Ae.get(t) ? " · " + Ae.get(t) : ""), Mt = (D == null ? void 0 : D.icon) || na(t);
    return '<div class="activityRow' + (F ? " tfPlug" : "") + (N ? " on" : "") + (i ? " tfPick" : "") + (h ? " alert" : "") + '" data-k="' + Q((a ? "fav:" : "row:") + t) + '" data-tone="' + (k === "light" ? "light" : (D == null ? void 0 : D.tone) || "blue") + '"' + zn(t) + ">" + (F && !i ? '<button class="tfIcon" type="button" data-act="' + F.act + '" aria-label="' + Q(F.label) + '"' + ye(t, Mt) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + ye(t, Mt) + "></div>") + '<button class="tfName" type="button" data-more="' + Q(t) + '" aria-label="' + Q(v + ", " + $ + ". More info") + '"><span class="activityRowName">' + Q(v) + '</span><span class="activityRowMeta">' + Q($) + "</span></button>" + (i ? Xs(t) : "") + "</div>";
  }
  const Ar = () => {
    var t;
    return y[(t = j.sources) == null ? void 0 : t.weather] ? j.sources.weather : y["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(y).find((a) => a.startsWith("weather."));
  };
  function ws() {
    var i;
    const t = (l) => Object.keys(y).filter((u) => u.startsWith("binary_sensor.") && l.includes(xe(u).device_class));
    return ((i = gt.alert_entities) != null && i.length ? gt.alert_entities : [...t(["moisture", "smoke", "gas"]).map((l) => ({ entity: l, severity: "alert" })), ...t(Il).map((l) => ({ entity: l, severity: "warning" }))]).filter((l) => y[l.entity]).map((l) => ({ ...l, on: ["on", "open", "unlocked", "triggered", "problem"].includes(y[l.entity].state) }));
  }
  function Js() {
    const t = Object.keys(Id), a = /* @__PURE__ */ new Set(), i = [];
    return (ct.shortcuts || []).forEach((l) => {
      if (l.type === "summary") {
        if (!t.includes(l.key) || a.has(l.key)) return;
        a.add(l.key);
      }
      i.push(l);
    }), t.forEach((l) => {
      a.has(l) || i.push({ type: "summary", key: l });
    }), i;
  }
  function Zl() {
    var xt;
    const t = ((xt = o()) == null ? void 0 : xt.entities) || {}, a = (V) => xe(V).device_class, i = Object.keys(y).filter((V) => V.startsWith("sensor.") && a(V) === "battery" || V.startsWith("binary_sensor.") && ["battery", "problem"].includes(a(V))), l = Qt.rooms.flatMap((V) => V.plants.map((pt) => pt.id));
    if (!i.length && !l.length) return null;
    const u = (V) => {
      var z;
      const pt = (z = t[V]) == null ? void 0 : z.device_id;
      return !!pt && Object.keys(y).some((jt) => {
        var He;
        return jt.startsWith("binary_sensor.") && ((He = t[jt]) == null ? void 0 : He.device_id) === pt && a(jt) === "battery_charging" && y[jt].state === "on";
      });
    }, h = (V) => V.startsWith("vacuum.") ? xe(V).battery_level <= 20 && y[V].state !== "docked" : V.startsWith("binary_sensor.") ? a(V) === "battery" && y[V].state === "on" : parseFloat(y[V].state) <= 20 && !u(V), f = [...i, ...Qt.vacuums].filter((V) => y[V] && h(V)), v = [...i.filter((V) => a(V) === "problem" && y[V].state === "on"), ...l.filter((V) => {
      var pt;
      return ((pt = y[V]) == null ? void 0 : pt.state) === "problem";
    })], k = i.filter((V) => y[V].state === "unavailable"), D = [.../* @__PURE__ */ new Set([...f, ...v, ...k])], N = (V) => {
      const pt = parseFloat(y[V].state);
      return a(V) === "battery" && Number.isFinite(pt) ? pt : 101;
    }, F = [...l, ...Qt.vacuums, ...[...i].sort((V, pt) => N(V) - N(pt))].filter((V) => y[V] && !D.includes(V)), $ = /* @__PURE__ */ new Map();
    F.forEach((V) => {
      var z;
      const pt = ((z = Qt.areaOf) == null ? void 0 : z.call(Qt, V)) || "";
      $.set(pt, [...$.get(pt) || [], V]);
    });
    const Mt = (V) => {
      const pt = Qt.rooms.findIndex((z) => z.id === V);
      return V === "" ? 1 / 0 : pt < 0 ? Qt.rooms.length : pt;
    }, Dt = [...$.keys()].sort((V, pt) => Mt(V) - Mt(pt)), nt = (V) => {
      var pt, z, jt, He;
      return ((pt = Qt.rooms.find((ge) => ge.id === V)) == null ? void 0 : pt.name) || ((He = (jt = (z = o()) == null ? void 0 : z.areas) == null ? void 0 : jt[V]) == null ? void 0 : He.name) || V;
    };
    return {
      value: [f.length && vo(f.length, "low battery", "low batteries"), v.length && vo(v.length, "problem", "problems"), k.length && vo(k.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: D, alert: !0 }, ...Dt.map((V) => ({ name: V ? nt(V) : Dt.length > 1 ? "Other devices" : "Devices", ids: $.get(V) }))].filter((V) => V.ids.length)
    };
  }
  function fi() {
    var Sa;
    const t = Qt.rooms, a = Qt.security, i = (Jt, Ue) => Jt.actions.filter((ei) => Ue.test(ei)), l = (Jt) => t.map((Ue) => ({ name: Ue.name, ids: Jt(Ue) })).filter((Ue) => Ue.ids.length), u = t.flatMap((Jt) => Jt.lights), h = u.filter((Jt) => {
      var Ue;
      return ((Ue = y[Jt]) == null ? void 0 : Ue.state) === "on";
    }).length, f = t.map((Jt) => Jt.readings.find((Ue) => xe(Ue).device_class === "temperature")).filter(Boolean).map((Jt) => Number(y[Jt].state)).filter(Number.isFinite), [v, k] = [Ia(Math.min(...f)), Ia(Math.max(...f))], D = t.flatMap((Jt) => i(Jt, /^media_player\./)), N = D.filter((Jt) => {
      var Ue;
      return ((Ue = y[Jt]) == null ? void 0 : Ue.state) === "playing";
    }).length, F = ws(), $ = F.filter((Jt) => Jt.severity === "warning" && Jt.on).length, Mt = a.locks.filter((Jt) => {
      var Ue;
      return ["unlocked", "jammed", "open"].includes((Ue = y[Jt]) == null ? void 0 : Ue.state);
    }).length, Dt = a.alarms.filter((Jt) => {
      var Ue;
      return ((Ue = y[Jt]) == null ? void 0 : Ue.state) === "disarmed";
    }).length, nt = $ ? vo($, "warning", "warnings") : null, xt = Mt ? Mt + " unlocked" : Dt ? Dt + " disarmed" : nt ? null : "All secure", V = Zl(), pt = t.flatMap((Jt) => Jt.solar), z = pt.find((Jt) => Jt.endsWith("_power")), jt = {
      light: u.length && { value: h ? h + " on" : "All off", groups: l((Jt) => Jt.lights) },
      climate: f.length && { value: v === k ? v + "°" : v + " - " + k + "°", groups: l((Jt) => [...Jt.readings.filter((Ue) => ["temperature", "humidity"].includes(xe(Ue).device_class)), ...i(Jt, /^(climate|humidifier)\./)]) },
      security: (a.alarms.length || a.locks.length) && { value: [nt, xt].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...a.alarms, ...a.locks] }, { name: "Doors and windows", ids: a.openings }].filter((Jt) => Jt.ids.length) },
      media_players: D.length && { value: N ? N + " playing" : "No media playing", groups: l((Jt) => i(Jt, /^media_player\./)) },
      maintenance: V,
      energy: Qt.grid && { value: Ln(Number(((Sa = y[z]) == null ? void 0 : Sa.state) || 0) * 1e3 + Number(y[Qt.grid].state)) + " now", groups: [{ name: "Energy", ids: [...pt, Qt.grid] }] }
    }, He = [], ge = F.filter((Jt) => Jt.severity !== "warning" && Jt.on);
    return ge.length && He.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: vo(ge.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: ge.map((Jt) => Jt.entity) }] }), Js().forEach((Jt) => {
      Jt.type !== "summary" ? He.push({ key: "path:" + Jt.path, name: Jt.label || Jt.path, icon: Jt.icon || "mdi:link-variant", colour: "", value: "" }) : !Jt.hidden && jt[Jt.key] && !(j.hiddenSums || []).includes(Jt.key) && He.push({ key: Jt.key, ...Id[Jt.key], ...jt[Jt.key] });
    }), He;
  }
  const Qs = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + Q(t.key) + '" data-k="sum:' + Q(t.key) + '" aria-label="' + Q(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : "") + '><div class="tfIcon" aria-hidden="true"' + ye(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + Q(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + Q(t.value) + "</div>" : "") + "</div></div>";
  function hi(t) {
    const a = la();
    j = { ...j, favourites: a.includes(t) ? a.filter((i) => i !== t) : [...a, t], favHidden: (j.favHidden || []).filter((i) => i !== t) }, Pa(), va();
  }
  function Kl(t) {
    document.querySelector("home-assistant") && (It.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function mi(t, a) {
    if (t.startsWith("path:")) {
      Kl(t.slice(5));
      return;
    }
    es("summary:" + t, a);
  }
  async function Ho() {
    const t = (f) => Promise.resolve().then(() => R(f)).catch(() => null), [a, i, l, u] = await Promise.all([
      t({ type: "frontend/get_user_data", key: Xc }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), h = (a == null ? void 0 : a.value) || {};
    j = { favourites: h.favourites ?? null, sources: h.sources, hiddenSums: h.hiddenSums, dash: h.dash, named: h.named, favHidden: h.favHidden, suggest: h.suggest, favSeeded: h.favSeeded }, ct = (i == null ? void 0 : i.value) || {}, gt = (l == null ? void 0 : l.value) || {}, yt = Array.isArray(u == null ? void 0 : u.entities) ? u.entities : [], $t = null, Object.keys(y).length && va(), _r(), $s = !0, Jn();
  }
  const Lr = "HomeCore";
  async function _r() {
    var l, u, h;
    const t = location.pathname.split("/")[1], a = j.named || [];
    if (!((u = (l = o()) == null ? void 0 : l.user) != null && u.is_admin) || !t || a.includes(t)) return;
    const i = () => {
      j = { ...j, named: [...a, t] }, Pa();
    };
    try {
      const f = (h = await R({ type: "lovelace/dashboards/list" })) == null ? void 0 : h.find((D) => D.url_path === t);
      if (!f || f.mode === "yaml") return;
      if (f.title === Lr) {
        i();
        return;
      }
      const v = await R({ type: "lovelace/config", url_path: t }), k = ((v == null ? void 0 : v.views) || []).flatMap((D) => [...D.cards || [], ...(D.sections || []).flatMap((N) => N.cards || [])]);
      if (!k.length || !k.every((D) => (D == null ? void 0 : D.type) === "custom:move-assistant-card" && D.layout === "test-focus")) return;
      await R({ type: "lovelace/dashboards/update", dashboard_id: f.id, title: Lr }), i();
    } catch {
    }
  }
  let Qn = null, gi = 0, Fo = !1;
  const Er = (t) => {
    const a = t.split(".")[0], i = xe(t).device_class;
    return Dh.includes(a) && (a !== "binary_sensor" || Il.includes(i) || !!ip[i]);
  }, dn = (t) => t.startsWith("binary_sensor.") ? ip[xe(t).device_class] : null;
  async function vi() {
    var t;
    if (!(Fo || Date.now() - gi < 30 * 1e3)) {
      Fo = !0, gi = Date.now();
      try {
        const a = Object.keys(((t = o()) == null ? void 0 : t.states) || {}).filter(Er), i = a.length ? await R({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: a }) : null;
        Qn = Array.isArray(i) ? i.filter((l) => l.entity_id && l.state != null && l.when) : null;
      } catch {
        Qn = null;
      }
      Fo = !1, va();
    }
  }
  function $l() {
    const t = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), i = (u) => {
      if (!y[u.entity_id] || !Er(u.entity_id) || !Br(u.entity_id) || ["unavailable", "unknown"].includes(u.state)) return;
      if (dn(u.entity_id)) {
        const f = a.get(u.entity_id);
        u.state === "on" ? (!f || u.when > f.when + 1) && a.set(u.entity_id, { ...u, alarm: !0, cleared: null }) : f && !f.cleared && u.when > f.when && (f.cleared = u.when);
        return;
      }
      const h = t.get(u.entity_id);
      (!h || u.when > h.when + 1) && t.set(u.entity_id, u);
    };
    [...Qn || []].sort((u, h) => u.when - h.when).forEach(i);
    const l = Qn ? gi / 1e3 - 5 : 0;
    return Object.keys(y).forEach((u) => {
      var v;
      const h = y[u], f = h.last_changed ? Date.parse(h.last_changed) / 1e3 : 0;
      f > l && i({ entity_id: u, state: h.state, when: f, context_user_id: (v = h.context) == null ? void 0 : v.user_id });
    }), [...t.values(), ...a.values()].sort((u, h) => h.when - u.when).slice(0, Rh);
  }
  function Xl(t) {
    var l;
    const a = t.context_user_id && Object.keys(y).find((u) => u.startsWith("person.") && xe(u).user_id === t.context_user_id);
    if (a) return St(a);
    const i = (l = o()) == null ? void 0 : l.user;
    return i && t.context_user_id === i.id ? i.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function bi(t) {
    const a = t.entity_id.split(".")[0], i = String(t.state);
    return a === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[i] || Ht(i).toLowerCase() : a === "cover" || a === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[i] || Ht(i).toLowerCase() : a === "binary_sensor" ? i === "on" ? "opened" : "closed" : a === "climate" ? i === "off" ? "turned off" : "set to " + Ht(i).toLowerCase() : a === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[i] || Ht(i).toLowerCase() : a === "alarm_control_panel" ? (op[i] || Ht(i)).toLowerCase() : a === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[i] || Ht(i).toLowerCase() : i === "on" ? "turned on" : i === "off" ? "turned off" : Ht(i).toLowerCase();
  }
  function Qi(t) {
    const a = t.entity_id, i = t.alarm && dn(a), l = St(a) + " " + (i ? i[0] : bi(t)), u = i ? Ye(t.when * 1e3) + (t.cleared ? " · " + i[1] + " since " + Ye(t.cleared * 1e3) : "") : [Xl(t), Ye(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (i ? " alert" : "") + '"><div class="tfIcon' + (i ? " alert" : "") + '" aria-hidden="true"' + ye(a, na(a)) + '></div><button class="tfName" type="button" data-more="' + Q(a) + '" data-at="' + Math.round(t.when * 1e3) + '" aria-label="' + Q(l + ", " + u + ". More info") + '"><span class="activityRowName">' + Q(l) + '</span><span class="activityRowMeta">' + Q(u) + "</span></button></div>";
  }
  let wo = null, Dr = 0;
  const Jl = [["electricity", "Electricity", 4.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function xs() {
    var a;
    if (Date.now() - Dr < 5 * 60 * 1e3) return;
    Dr = Date.now();
    const t = [];
    try {
      const i = ((a = await R({ type: "energy/get_prefs" })) == null ? void 0 : a.energy_sources) || [], l = (u) => i.filter((h) => h.type === u).flatMap((h) => u === "grid" ? (h.flow_from || []).map((f) => f.stat_energy_from) : [h.stat_energy_from]).filter(Boolean);
      for (const [u, h, f] of [["electricity", "Electricity", l("grid")], ["solar", "Solar", l("solar")], ["gas", "Gas", l("gas")], ["water", "Water", l("water")]]) {
        if (!f.length) continue;
        const v = await Promise.all(f.map((k) => Promise.resolve(R({ type: "recorder/statistic_during_period", statistic_id: k, calendar: { period: "day" }, types: ["change"] })).then((D) => Number(D == null ? void 0 : D.change) || 0, () => 0)));
        t.push({ key: u, name: h, id: f[0], ids: f, value: v.reduce((k, D) => k + D, 0), unit: xe(f[0]).unit_of_measurement || (u === "gas" || u === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    wo = t, va();
  }
  let xo = null, tr = [];
  function ys() {
    var h;
    const t = tr = wo != null && wo.length ? wo : Jl.map(([f, v, k, D]) => {
      const N = "sensor.made_up_energy_" + f;
      return y[N] = { entity_id: N, state: String(k), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: v + " today", unit_of_measurement: D, state_class: "total_increasing" } }, { key: f, name: v, id: N, value: k, unit: D };
    });
    G.clear(), t.some((f) => f.id === xo) || (xo = t[0].id);
    const a = t.map((f) => {
      const v = Number(f.value).toLocaleString(void 0, { maximumFractionDigits: f.value < 10 ? 2 : 1 }) + " " + f.unit, k = Nh[f.key], D = f.id === xo;
      return G.set(f.id, { name: f.name, text: v, icon: k }), '<div class="activityRow tap' + (D ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + Q(f.id) + '" aria-pressed="' + D + '" aria-label="' + Q(f.name + ", " + v) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + ye("", k, f.name) + '></div><div><div class="activityRowName">' + Q(f.name) + '</div><div class="activityRowMeta">' + Q(v) + "</div></div></div>";
    }), i = t.find((f) => f.id === xo), l = (((h = qe().opts.energy) == null ? void 0 : h.graph) || "above") === "below", u = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + Q(i.id) + '" role="img" aria-label="' + Q(i.name) + ', last 24 hours"></svg></div>';
    return xn("dash:energy", 0, "Energy today", a, u, fi().some((f) => f.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (l ? "" : " graphAbove"));
  }
  function tl(t) {
    const a = _.querySelector(".tfDash-energy"), i = a == null ? void 0 : a.querySelector(".tfDashGraph svg");
    !i || t === xo || (xo = t, a.querySelectorAll("[data-energy-pick]").forEach((l) => {
      const u = l.dataset.energyPick === t;
      l.classList.toggle("picked", u), l.setAttribute("aria-pressed", String(u));
    }), i.dataset.graph = t, i.dataset.drawn = "", Ma.set("dash:energy", ys()), Ko(!0));
  }
  const La = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, wi = /* @__PURE__ */ new Map();
  async function xi(t) {
    const a = /* @__PURE__ */ new Date(), i = new Date(a).setHours(0, 0, 0, 0), l = a.getHours(), u = a.getMinutes() / 60, h = Array.from({ length: 24 }, (v, k) => k <= l ? 0 : null);
    if (!t.ids) {
      const v = La[t.key] || La.electricity, k = v.map((N, F) => F < l ? N : F === l ? N * u : 0), D = k.reduce((N, F) => N + F, 0) || 1;
      return h.map((N, F) => N == null ? null : t.value * k[F] / D);
    }
    const f = wi.get(t.id);
    if (f && f.day === i && Date.now() - f.at < 5 * 60 * 1e3) return f.hours;
    try {
      const v = await R({ type: "recorder/statistics_during_period", start_time: new Date(i).toISOString(), end_time: a.toISOString(), statistic_ids: t.ids, period: "hour", types: ["change"] });
      t.ids.forEach((N) => ((v == null ? void 0 : v[N]) || []).forEach((F) => {
        const $ = typeof F.start == "number" ? F.start : Date.parse(F.start), Mt = new Date($).getHours();
        $ >= i && Mt < l && (h[Mt] += Number(F.change) || 0);
      }));
      const k = new Date(a).setMinutes(0, 0, 0), D = await Promise.all(t.ids.map((N) => Promise.resolve(R({ type: "recorder/statistic_during_period", statistic_id: N, fixed_period: { start_time: new Date(k).toISOString(), end_time: a.toISOString() }, types: ["change"] })).then((F) => Number(F == null ? void 0 : F.change) || 0, () => 0)));
      h[l] = D.reduce((N, F) => N + F, 0);
    } catch {
    }
    return wi.set(t.id, { at: Date.now(), day: i, hours: h }), h;
  }
  async function Ql(t, a) {
    const i = await xi(a);
    if (!t.isConnected) return;
    const l = Math.max(120, t.clientWidth || 260), u = Math.max(60, t.clientHeight || 130), h = 18, f = u - 18, v = l / 24, k = v * 0.72, D = (/* @__PURE__ */ new Date()).getHours(), N = i.map((xt) => xt ?? 0), F = Math.max(0, ...N), $ = (xt) => f - (F > 0 ? xt / F * (f - h) : 0), Mt = (xt) => xt.toLocaleString(void 0, { maximumFractionDigits: xt < 10 ? 2 : 1 }) + " " + a.unit, Dt = (xt) => String(xt).padStart(2, "0") + ":00", nt = F > 0 ? N.indexOf(F) : -1;
    t.setAttribute("viewBox", "0 0 " + l + " " + u), t.setAttribute("aria-label", a.name + " today by the hour: " + Mt(a.value) + (nt >= 0 ? ", most " + Mt(F) + " at " + Dt(nt) : "")), t.innerHTML = [h, (h + f) / 2, f].map((xt) => '<line x1="0" x2="' + l + '" y1="' + xt + '" y2="' + xt + '" stroke="var(--line)" stroke-width="1"/>').join("") + i.map((xt, V) => xt > 0 ? '<rect x="' + (V * v + (v - k) / 2).toFixed(1) + '" y="' + $(xt).toFixed(1) + '" width="' + k.toFixed(1) + '" height="' + (f - $(xt)).toFixed(1) + '" rx="2" fill="' + (V === D ? "var(--primary)" : "var(--text)") + '"' + (V === D ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((xt) => '<text x="' + (xt * v).toFixed(1) + '" y="' + (u - 3) + '">' + String(xt).padStart(2, "0") + "</text>").join("") + (nt >= 0 ? '<text x="0" y="11">Most: ' + Q(Mt(F)) + " at " + Dt(nt) + "</text>" : "");
  }
  function el(t) {
    var a;
    (a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches || t.querySelectorAll("rect").forEach((i, l) => i.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: l * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function td(t) {
    var u;
    if ((u = window.matchMedia) != null && u.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [a, i] = t.querySelectorAll("path");
    if (!(i != null && i.getTotalLength)) return;
    const l = i.getTotalLength();
    i.animate([{ strokeDasharray: l, strokeDashoffset: l }, { strokeDasharray: l, strokeDashoffset: 0 }], { duration: 700, easing: "cubic-bezier(.2,.7,.3,1)" }), a == null || a.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500, delay: 200, easing: "ease-out", fill: "backwards" });
  }
  let er = null, ar = 0;
  const Br = (t) => !t.startsWith("light.") || Ph.includes((Ae.get(t) || "").toLowerCase()), yi = () => Math.max(2, eo((_ == null ? void 0 : _.clientWidth) || 0).n), Rr = (t) => {
    const a = ce(t);
    return a.sections.map((i, l) => i && (a.parts || [])[l]).filter(Boolean);
  }, to = (t) => Rr(t).slice(0, cn(t) - 1);
  function nr(t) {
    const a = qe().tiles;
    if (a) return a.filter((l) => y[l] || Ks(l));
    if (!er) {
      const l = (u) => {
        var h;
        return (((h = y[u]) == null ? void 0 : h.state) === "on" ? 1e6 : 0) + (le[u] || 0);
      };
      er = {
        lights: Qt.rooms.flatMap((u) => u.lights).filter((u) => {
          var h;
          return Br(u) && ((h = y[u]) == null ? void 0 : h.state) !== "unavailable";
        }).sort((u, h) => l(h) - l(u) || St(u).localeCompare(St(h))),
        climates: Qt.rooms.flatMap((u) => u.actions.filter((h) => h.startsWith("climate.")))
      };
    }
    const i = er.climates.filter((l) => y[l]).slice(0, t > 3 ? 2 : 1);
    return [...er.lights.filter((l) => y[l]).slice(0, Math.max(0, t - i.length)), ...i];
  }
  const Nr = (t, a, i, l) => (u) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + a + '" aria-label="' + i + '">' + (l ? '<div class="activityHeader">' + (a === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + i + "</button>" : '<div class="activityTitle">' + i + "</div>") + "</div>" : "") + '<div class="activityRows">' + u + "</div></section>";
  function ed(t, a) {
    var h, f;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + Q(((f = (h = o()) == null ? void 0 : h.config) == null ? void 0 : f.location_name) || "Home") + "</h1>" }), a.length && t.push({ key: "sums", wrap: (v) => '<div class="tfDashBarRow" data-tf data-k="sums">' + Nr("tfDash-bar", "sums-bar", "Summaries", !1)(v).replace(" data-tf", "") + "</div>", tiles: a.map((v) => ({ key: "sum:" + v.key, html: Qs(v) })) }), Be.length && t.push({ key: "areas", html: Xn(0) });
    const i = Nn();
    i.length && t.push({ key: "favs", wrap: Nr("tfDash-favs", "favs", "Favourites", !0), tiles: i.map((v) => ({ key: "fav:" + v, html: bs(v, { area: !0 }) })) });
    const l = $l();
    t.push({ key: "dash:act", html: xn("dash:act", 0, "Activity", l.length ? l.map(Qi) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: ys() });
    const u = yi();
    return ar = u, nr(u >= 3 ? u : u * 2).forEach((v) => t.push({
      key: "dash:tile:" + v,
      wrap: (k) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + Q(v) + '">' + k + "</div>",
      tiles: [{ key: v, html: go(v) ? Cr(Ks(v), v) : kt(v, !1, to(v)) }]
    })), vi(), xs(), t;
  }
  const ki = 252, aa = 16, al = 200, Oo = Math.round(ki * 1.25), ad = 60, yo = ad + aa, Pr = 3, or = { title: "The name", sums: "Summaries", wx: "Weather", areas: "Areas", favs: "Favourites", act: "Activity", energy: "Energy today", avg: "Compared to average", aq: "Air quality", pollen: "Pollen", radar: "Rain radar" }, Mi = ["wx", "favs", "act", "energy", "avg"], Pn = ["XS", "S", "M", "L", "XL"], Wo = Pn.length, Si = ["Narrow", "Wide", "Really wide"], ir = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4 }, qo = (t) => !t.includes(".") || !y[t] || t.startsWith("light.") && Tt(t) ? Wo : Math.min(Wo, Rr(t).length + 1), cn = (t) => {
    const a = qe().opts[t] || {}, i = qo(t), l = Number(a.h) || (a.tall ? 5 : ir[t] || ks);
    return Math.max(1, Math.min(i, l));
  }, ks = 2, nd = 90, Ir = 56, da = (t) => {
    var a;
    return or[t] || (t.startsWith("room:") ? ((a = Be.find((i) => "room:" + i.id === t)) == null ? void 0 : a.name) || "Area" : St(t));
  }, Ci = 409, jo = 128;
  let ma = !1, _e = null, kn = null, Hr = !1, zo = /* @__PURE__ */ new Map(), Vo = 0, pn = 0;
  const Wa = ["title", "sums"], eo = (t) => {
    const a = Math.max(1, Math.floor((t + aa) / (al + aa)));
    return { n: a, w: Math.max(1, Math.min(Oo, Math.floor((t - (a - 1) * aa) / a))) };
  }, qe = () => {
    const t = { cells: {}, spans: {}, hidden: [], opts: {}, ...j.dash || {} }, a = Ta.filter((i) => !(t.known || []).includes(i) && !t.hidden.includes(i));
    return a.length ? { ...t, hidden: [...t.hidden, ...a] } : t;
  };
  function rr(t) {
    j = { ...j, dash: { ...t, known: Ta } }, Pa();
  }
  function In() {
    const t = (a) => _.querySelector(a);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", fe.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", fe.avg, 2],
      ...Ta.map((a) => [a, fe[a], 1]),
      ...[..._.querySelectorAll(".tfDashTiles > [data-k]")].map((a) => [a.dataset.k, a, 1, !0])
    ].filter(([, a]) => a == null ? void 0 : a.isConnected).map(([a, i, l, u = !1]) => ({ key: a, el: i, span: l, tile: u }));
  }
  const Fr = (t, a, i) => {
    if (t.span === "full") return a;
    const l = t.span === "areas" && qe().spans.areas;
    return l ? l === "full" ? a : Math.min(a, Math.max(2, l)) : t.span === "areas" ? Math.min(a, Math.ceil((Ci + Math.max(0, Be.length - 1) * (jo + aa) + aa) / (i + aa))) : Math.min(a, qe().spans[t.key] ?? t.span);
  }, nl = (t) => cn(t.key);
  function ol(t, a, i = null) {
    const l = qe().cells, u = t.every((v) => !l[v.key] || l[v.key].col + v.cols <= a), h = (v) => l[v.key] || { row: 1e9, col: 0 };
    return (() => {
      const v = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Map(), D = (nt, xt, V, pt) => {
        for (let z = xt; z < xt + pt; z++) for (let jt = nt; jt < nt + V; jt++) if (v.has(jt + "," + z)) return !1;
        return !0;
      }, N = (nt, xt, V) => {
        for (let pt = V; pt < V + nt.rows; pt++) for (let z = xt; z < xt + nt.cols; z++) v.add(z + "," + pt);
        k.set(nt.key, { col: xt, row: V, cols: nt.cols, rows: nt.rows });
      }, F = (nt, xt, V) => {
        for (xt = Math.max(0, Math.min(a - nt.cols, xt)), V = Math.max(0, V); !D(xt, V, nt.cols, nt.rows); ) V++;
        N(nt, xt, V);
      }, $ = (nt) => {
        for (let xt = 0; ; xt++) for (let V = 0; V <= a - nt.cols; V++) if (D(V, xt, nt.cols, nt.rows)) {
          N(nt, V, xt);
          return;
        }
      };
      i && F(i, _e.col, _e.row);
      const Mt = t.filter((nt) => nt !== i), Dt = (nt, xt) => h(nt).row - h(xt).row || h(nt).col - h(xt).col;
      return u ? (Mt.filter((nt) => l[nt.key]).sort(Dt).forEach((nt) => F(nt, l[nt.key].col, l[nt.key].row)), Mt.filter((nt) => !l[nt.key]).forEach($), k) : ([...Mt].sort(Dt).forEach($), k);
    })();
  }
  function od(t, a) {
    const i = /* @__PURE__ */ new Set(), l = /* @__PURE__ */ new Map(), u = (h, f, v) => {
      for (let k = f; k < f + v.rows; k++) for (let D = h; D < h + v.cols; D++) if (i.has(D + "," + k)) return !1;
      return !0;
    };
    return t.forEach((h) => {
      for (let f = 0; ; f++) {
        let v = 0;
        for (; v <= a - h.cols && !u(v, f, h); ) v++;
        if (!(v > a - h.cols)) {
          for (let k = f; k < f + h.rows; k++) for (let D = v; D < v + h.cols; D++) i.add(D + "," + k);
          l.set(h.key, { col: v, row: f, cols: h.cols, rows: h.rows });
          return;
        }
      }
    }), l;
  }
  function Ti() {
    const t = qe(), a = new Set(t.hidden), i = In().filter((f) => !Wa.includes(f.key));
    let l = zo;
    if (!l.size) {
      const f = t.pegs || 4, v = i.filter((k) => !a.has(k.key));
      v.forEach((k) => {
        k.cols = Fr(k, f, ki), k.rows = nl(k) ?? ks;
      }), l = ol(v, f);
    }
    const u = (f) => !a.has(f.key) && l.get(f.key) || { row: 1e9, col: 0 };
    i.sort((f, v) => u(f).row - u(v).row || u(f).col - u(v).col);
    const h = (t.phone || []).map((f) => i.find((v) => v.key === f && !a.has(f))).filter(Boolean);
    return [...h, ...i.filter((f) => !h.includes(f))];
  }
  const Za = () => {
    const t = Ti();
    t.forEach((a, i) => a.el.style.setProperty("--o", String(3 + i))), qa([...In().filter((a) => Wa.includes(a.key)), ...t].map((a) => a.el));
  };
  function qa(t) {
    if (_e) return;
    const a = n.activeElement;
    let i = null;
    for (const l of new Set(t.map((u) => {
      for (; u && u.parentElement !== _; ) u = u.parentElement;
      return u;
    }).filter(Boolean))) {
      const u = i ? i.nextSibling : _.querySelector(":scope > [data-tf]");
      if (l !== u)
        try {
          _.moveBefore ? _.moveBefore(l, u) : _.insertBefore(l, u);
        } catch {
          _.insertBefore(l, u);
        }
      i = l;
    }
    a && a !== n.activeElement && a.isConnected && a.focus({ preventScroll: !0 });
  }
  const Ai = (t, a) => rr({ ...t, cells: a, pegs: eo(_.clientWidth).n });
  function ja() {
    var pt;
    if (!w || !_) return;
    const t = _.clientWidth, a = t < 2 * ki + aa, i = m.classList.contains("tfDash"), { n: l, w: u } = a ? { n: 2, w: Math.floor((t - aa) / 2) } : eo(t);
    de.classList.add("tfPegs"), de.style.setProperty("--peg-n", l), de.style.setProperty("--peg-w", u + "px");
    const h = new Set(qe().hidden);
    Ta.forEach((z) => {
      var jt;
      return (jt = fe[z]) == null ? void 0 : jt.classList.toggle("tfNotAdded", h.has(z) && !(_e != null && _e.fromTray && _e.key === z));
    }), m.classList.toggle("tfBoard", i), m.classList.toggle("tfEditing", i && ma && !a);
    const f = c("dashEditNav");
    f && (f.hidden = !i || a, f.classList.toggle("active", ma), f.setAttribute("aria-pressed", String(ma)), f.setAttribute("aria-label", ma ? "Done editing" : "Edit the dashboard"), f.title = ma ? "Done" : "Edit", f.innerHTML = ma ? Ah : np);
    const v = i ? In() : [];
    if (!i) {
      _.style.height = "", _.querySelectorAll(".tfBoardItem").forEach((z) => {
        z.classList.remove("tfBoardItem", "tfBoardHidden"), z.style.left = z.style.top = z.style.width = z.style.height = "";
      }), (pt = _.querySelector(".tfDash-act > .activityRows")) == null || pt.style.removeProperty("max-height"), sr(!1), m.classList.contains("tfDash") && Za(), ga();
      return;
    }
    _.style.setProperty("--peg-w", u + "px");
    const k = new Set(qe().hidden), D = u + aa;
    _e != null && _e.fromTray && k.delete(_e.key), v.forEach((z) => z.el.classList.toggle("tfBoardHidden", k.has(z.key)));
    const N = v.filter((z) => !k.has(z.key) && getComputedStyle(z.el).display !== "none");
    let F = 0;
    N.filter((z) => Wa.includes(z.key)).forEach((z) => {
      z.el.classList.add("tfBoardItem"), Object.assign(z.el.style, { width: t + "px", height: "", left: "0px", top: F + "px" });
      const jt = z.key === "sums" && z.el.querySelector(".tfDash-bar"), He = jt ? jt.querySelectorAll(".activityRow").length : 0;
      jt && (jt.style.maxWidth = "none");
      for (let ge = 1; jt && ge <= He && (jt.style.setProperty("--bar-cols", String(Math.ceil(He / ge))), !(jt.offsetWidth <= t)); ge++)
        ;
      jt && (jt.style.maxWidth = ""), F += z.el.offsetHeight + aa;
    }), pn = F;
    const $ = N.filter((z) => !Wa.includes(z.key));
    $.forEach((z) => {
      z.cols = Fr(z, l, u), z.el.classList.add("tfBoardItem"), z.el.style.width = (z.cols === l ? t : z.cols * u + (z.cols - 1) * aa) + "px", z.el.style.height = "", z.rows = nl(z) ?? Math.max(1, Math.ceil((z.el.offsetHeight + aa - 6) / yo));
    });
    const Mt = _e && $.find((z) => z.key === _e.key), Dt = a && Ti().map((z) => z.key), nt = (z) => Dt.includes(z.key) ? Dt.indexOf(z.key) : -1, xt = a ? od([...$].sort((z, jt) => nt(z) - nt(jt)), l) : ol($, l, Mt);
    xt.forEach((z) => Object.assign(z, { x: z.cols === l ? 0 : z.col * D, y: pn + z.row * yo, w: z.cols === l ? t : z.cols * u + (z.cols - 1) * aa, h: z.rows * yo - aa })), $.forEach((z) => {
      const jt = xt.get(z.key);
      z.el.style.height = jt.h + "px", z.el.dataset.rows = cn(z.key), z.el.toggleAttribute("data-narrow", !a && jt.cols === 1 && l > 1), z.el.dataset.cols = jt.cols, z.el.classList.contains("tfDac") && z.el.style.setProperty("--tf-dac-pad", jt.h - nd + "px"), !(z === Mt && !_e.fromTray) && (z.el.style.left = jt.x + "px", z.el.style.top = jt.y + "px");
    }), a || (zo = xt), qa([...N.filter((z) => Wa.includes(z.key)), ...$.slice().sort((z, jt) => xt.get(z.key).row - xt.get(jt.key).row || xt.get(z.key).col - xt.get(jt.key).col)].map((z) => z.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([z, jt]) => {
      const He = xt.get(z), ge = He && _.querySelector(jt), Sa = ge == null ? void 0 : ge.querySelector(":scope > .activityRows"), Jt = ge == null ? void 0 : ge.querySelector(":scope > .activityHeader");
      if (!Sa || !Jt) return;
      const Ue = Sa.getBoundingClientRect().top - ge.getBoundingClientRect().top, ei = He.rows === 1 ? He.h : Math.floor(He.h - Ue - parseFloat(getComputedStyle(ge).paddingBottom)), Ws = Math.max(1, Math.floor(ei / Ir));
      Sa.style.setProperty("--fill-row", (ei / Ws).toFixed(2) + "px"), Sa.style.maxHeight = ei + "px";
    }), Vo = Math.max(0, ...[...xt.values()].map((z) => z.row + z.rows));
    let V = pn + Vo * yo - aa;
    V = sr(ma && !a, $, xt, V, l, u), _.style.height = V + "px", requestAnimationFrame(() => m.classList.add("tfBoardReady")), v.forEach((z) => Or.observe(z.el)), Ko(), ga();
  }
  const Li = () => {
    Hr || (Hr = !0, requestAnimationFrame(() => {
      Hr = !1, ja();
    }));
  }, Or = new ResizeObserver(() => {
    _e || Li();
  });
  function sr(t, a = [], i = /* @__PURE__ */ new Map(), l = 0, u = 1, h = ki) {
    _.querySelectorAll(".tfEditChips").forEach((N) => {
      (!t || !N.closest(".tfBoardItem")) && N.remove();
    }), _.querySelectorAll(".tfFavHides").forEach((N) => N.remove()), _.querySelectorAll(".tfBoardItem").forEach((N) => [...N.children].forEach((F) => {
      F.classList.contains("tfEditChips") || F.toggleAttribute("inert", t);
    }));
    let f = _.querySelector(".tfBoardCells"), v = _.querySelector(".tfBoardLand");
    if (!t)
      return f == null || f.remove(), v == null || v.remove(), ao(), l;
    const k = Vo + Pr;
    if (f || (f = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), f.setAttribute("aria-hidden", "true"), _.prepend(f)), f.style.top = pn + "px", f.dataset.size !== u + "x" + k + "x" + h && (f.dataset.size = u + "x" + k + "x" + h, f.style.gridTemplateColumns = "repeat(" + u + "," + h + "px)", f.innerHTML = "<i></i>".repeat(u * k)), l = Math.max(l, pn + k * yo - aa), a.forEach((N) => {
      const F = N.el;
      !F || F.querySelector(":scope > .tfEditChips") || F.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + Hd + '</span><button class="tfEditChip" type="button" data-board-more="' + Q(N.key) + '" aria-label="' + Q(da(N.key)) + ' options" aria-haspopup="menu">' + Ch + "</button></div>");
    }), _e && i.has(_e.key)) {
      v || (v = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), _.appendChild(v));
      const N = i.get(_e.key);
      Object.assign(v.style, { left: N.x + "px", top: N.y + "px", width: N.w + "px", height: N.h + "px" });
    } else v == null || v.remove();
    const D = _.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (D) {
      const N = D.getBoundingClientRect();
      D.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...D.querySelectorAll('[data-k^="fav:"]')].map((F) => {
        const $ = F.getBoundingClientRect(), Mt = F.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + Q(Mt) + '" aria-label="Hide ' + Q(St(Mt)) + ' from the dashboard" style="left:' + Math.round($.right - N.left - 42) + "px;top:" + Math.round($.top - N.top + ($.height - 32) / 2) + 'px">' + tp + "</button>";
      }).join("") + "</div>");
    }
    return l;
  }
  let Wr = "";
  function qr(t) {
    ma = t, t || (_e = null, za = hn = !1, ao()), ja(), t ? Wr = JSON.stringify(j) : Wr && JSON.stringify(j) !== Wr && Ka("Changes saved");
  }
  function id(t, a) {
    var xt, V;
    ao();
    const i = zo.get(t), { n: l } = eo(_.clientWidth), u = qe(), h = u.spans[t] ?? (go(t) ? 1 : 2);
    if (!i) return;
    const f = i.cols >= l, v = (pt, z, jt) => '<button type="button" role="menuitem" data-board-act="' + pt + '"' + (jt ? " disabled" : "") + ">" + z + "</button>", k = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    k.setAttribute("role", "menu"), k.setAttribute("aria-label", da(t) + " options");
    const D = _.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]'), N = qo(t), F = cn(t), $ = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + Pn.map((pt, z) => '<button type="button" role="menuitemradio" aria-checked="' + (z + 1 === F) + '" aria-label="' + pt + ", " + (z + 1) + (z ? " rows" : " row") + '" data-board-act="h:' + (z + 1) + '"' + (z < N ? "" : " disabled") + ">" + pt + "</button>").join("") + "</div></div>", Mt = [["Wide", 2, l >= 2], ["Really wide", 3, l >= 3], ["Full width", "full", l >= 4]], Dt = t === "areas" ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + Mt.map(([pt, z, jt]) => '<button type="button" role="menuitemradio" aria-checked="' + (jt && (z === "full" ? i.cols === l : i.cols === z && !(z === l && u.spans.areas === "full"))) + '" aria-label="' + pt + (z === "full" ? "" : ", " + z + " columns") + '" data-board-act="w:' + z + '"' + (jt ? "" : " disabled") + ">" + pt + "</button>").join("") + "</div></div>" : Mi.includes(t) || go(t) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + Si.map((pt, z) => '<button type="button" role="menuitemradio" aria-checked="' + (z + 1 === Math.min(h, l)) + '" aria-label="' + pt + ", " + (z + 1) + (z ? " columns" : " column") + '" data-board-act="w:' + (z + 1) + '"' + (z < l ? "" : " disabled") + ">" + pt + "</button>").join("") + "</div></div>" : "";
    k.innerHTML = $ + Dt + (t === "energy" ? v("graph", (((xt = u.opts.energy) == null ? void 0 : xt.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + v("left", "Move left", f || i.col === 0) + v("right", "Move right", f || i.col + i.cols >= l) + v("up", "Move up", i.row <= 0) + v("down", "Move down") + (D ? v("remove", "Remove") : v("hide", "Hide")), _.appendChild(k);
    const nt = Math.min(i.x + i.w - k.offsetWidth, _.clientWidth - k.offsetWidth);
    Object.assign(k.style, { left: Math.max(0, nt) + "px", top: i.y + 28 + "px" }), kn = { key: t, menu: k, opener: a }, (V = k.querySelector("button:not([disabled])")) == null || V.focus();
  }
  function ao(t) {
    if (!kn) return;
    const { menu: a, opener: i } = kn;
    kn = null, a.remove(), t && (i == null || i.focus());
  }
  const ko = () => Object.fromEntries([...zo].map(([t, a]) => [t, { col: a.col, row: a.row }]));
  function Go(t, a) {
    var f, v;
    if (a === "remove") {
      ao(), un(t);
      return;
    }
    const i = j, l = qe(), u = ko(), h = u[t] || { col: 0, row: 0 };
    a.startsWith("w:") && (l.spans = { ...l.spans, [t]: a === "w:full" ? "full" : Number(a.slice(2)) }), a.startsWith("h:") && (l.opts = { ...l.opts, [t]: { ...l.opts[t] || {}, h: Number(a.slice(2)), tall: void 0 } }), a === "graph" && (l.opts = { ...l.opts, energy: { ...l.opts.energy || {}, graph: (((f = l.opts.energy) == null ? void 0 : f.graph) || "above") === "above" ? "below" : "above" } }), a === "left" && (u[t] = { ...h, col: h.col - 1 }), a === "right" && (u[t] = { ...h, col: h.col + 1 }), a === "up" && (u[t] = { ...h, row: h.row - 1 }), a === "down" && (u[t] = { ...h, row: h.row + 1 }), a === "hide" && (l.hidden = [.../* @__PURE__ */ new Set([...l.hidden, t])]), ["left", "right", "up", "down"].includes(a) && (_e = { key: t, col: u[t].col, row: u[t].row }), Ai(l, u), _e && (ja(), _e = null, Ai(qe(), ko())), ao(), a === "graph" && (Ma.delete("dash:energy"), va()), a.startsWith("h:") && t.includes(".") && va(), ja(), a !== "hide" ? (v = _.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || v.focus() : Ka(da(t) + " hidden", oo(i));
  }
  const Mn = (t) => {
    var a;
    return Ta.includes(t) && !(((a = j.dash) == null ? void 0 : a.cells) || {})[t] ? " added" : " put back";
  };
  function lr(t) {
    const a = qe(), i = da(t) + Mn(t);
    rr({ ...a, hidden: a.hidden.filter((l) => l !== t) }), ja(), Ka(i);
  }
  const Mo = () => qe().tiles || [..._.querySelectorAll(".tfDashTiles > [data-k]")].map((t) => t.dataset.k).filter((t) => !qe().hidden.includes(t));
  function il(t, a) {
    const i = qe();
    Ai({ ...i, tiles: t, hidden: i.hidden.filter((l) => !l.includes(".")) }, a), va(), ga();
  }
  const Ms = (t) => {
    il([...Mo().filter((a) => a !== t), t], ko()), Ka(da(t) + " added"), sd(t);
  }, un = (t) => {
    const a = j, i = ko();
    delete i[t], il(Mo().filter((l) => l !== t), i), Ka(da(t) + " removed", oo(a));
  };
  let Uo = 0;
  function Ka(t, a = null) {
    var f;
    const i = c("toast");
    if (!i) return;
    if (i.replaceChildren(Object.assign(document.createElement("span"), { textContent: t })), a) {
      const v = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      v.addEventListener("click", () => {
        clearTimeout(Uo), i.classList.remove("show", "withAction"), a();
      }), i.appendChild(v);
    }
    const l = m.getBoundingClientRect(), u = (f = n.querySelector(".bottomNav")) == null ? void 0 : f.getBoundingClientRect(), h = Se.classList.contains("open") && !Me ? Math.min(l.right, Se.getBoundingClientRect().left) : l.right;
    i.style.left = (l.left + h) / 2 + "px", i.style.bottom = (u != null && u.height ? window.innerHeight - u.top + 12 : 26) + "px", i.classList.add("tfToast", "show"), i.classList.toggle("withAction", !!a), clearTimeout(Uo), Uo = setTimeout(() => i.classList.remove("show", "withAction"), a ? 5e3 : 2200);
  }
  const _i = 700, rl = 1e3, ia = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  ia.setAttribute("role", "tooltip"), ia.setAttribute("aria-hidden", "true"), m.appendChild(ia);
  let jr = null, $a = 0, no = 0, sl = -1 / 0;
  const dr = (t) => {
    if (t.nodeType !== 1) return !1;
    const a = getComputedStyle(t);
    return a.textOverflow === "ellipsis" && t.scrollWidth > t.clientWidth + 1 || a.webkitLineClamp !== "none" && t.scrollHeight > t.clientHeight + 1;
  }, rd = (t) => {
    for (let a = t; a && a !== m; a = a.parentElement) if (dr(a)) return a;
    return null;
  };
  function zr(t, a) {
    clearTimeout($a), clearTimeout(no);
    const i = () => {
      if (!t.isConnected) return;
      jr = t, ia.textContent = a, ia.hidden = !1;
      const l = t.getBoundingClientRect(), u = ia.getBoundingClientRect(), h = l.top - u.height - 8 >= 8 ? l.top - u.height - 8 : l.bottom + 8;
      ia.style.left = Math.max(8, Math.min(window.innerWidth - u.width - 8, l.left + l.width / 2 - u.width / 2)) + "px", ia.style.top = h + "px";
    };
    !ia.hidden || performance.now() - sl < rl ? i() : $a = setTimeout(i, _i);
  }
  function fn() {
    clearTimeout($a), clearTimeout(no), ia.hidden || (sl = performance.now()), ia.hidden = !0, jr = null;
  }
  n.addEventListener("pointerover", (t) => {
    if (t.pointerType === "touch") return;
    if (ia.contains(t.target)) {
      clearTimeout(no);
      return;
    }
    const a = rd(t.target);
    if (a && me.names === "scroll" && a.matches(Vr)) {
      Ur(a);
      return;
    }
    if (a) {
      a !== jr ? zr(a, a.textContent.trim()) : clearTimeout(no);
      return;
    }
    clearTimeout($a), clearTimeout(no), no = setTimeout(fn, 120);
  }), n.addEventListener("focusin", (t) => {
    var l;
    const a = t.target;
    if (!((l = a.matches) != null && l.call(a, ":focus-visible"))) return;
    let i = [a, ...a.querySelectorAll("*")].filter(dr);
    me.names === "scroll" && (i.filter((u) => u.matches(Vr)).forEach(Ur), i = i.filter((u) => !u.matches(Vr))), i.length && zr(a, i.map((u) => u.textContent.trim()).join(" · "));
  }), n.addEventListener("focusout", (t) => {
    t.target === jr && fn();
  }), n.addEventListener("keydown", (t) => {
    t.key === "Escape" && !ia.hidden && (t.stopPropagation(), fn());
  }, !0), window.addEventListener("scroll", () => {
    (!ia.hidden || $a) && fn();
  }, { capture: !0, passive: !0 });
  const Vr = ".activityRowName,.activityRowMeta", Gr = /* @__PURE__ */ new WeakSet();
  function Ur(t) {
    var i;
    if (me.names !== "scroll" || Gr.has(t) || t.closest("[inert]") || (i = window.matchMedia) != null && i.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    Gr.add(t);
    const a = () => Promise.all([t.closest(".workoutPanel"), t.closest(".panelExpanded")].filter(Boolean).flatMap((l) => l.getAnimations()).map((l) => l.finished.catch(() => {
    })));
    setTimeout(async () => {
      await a();
      const l = t.isConnected && !t.closest("[inert]") ? t.scrollWidth - t.clientWidth : 0;
      if (l < 2) {
        Gr.delete(t);
        return;
      }
      const u = l / 30 * 1e3, h = u + 1e3 + u;
      t.style.textOverflow = "clip";
      const f = t.animate([
        { textIndent: "0px", offset: 0, easing: "ease-in-out" },
        { textIndent: -l + "px", offset: u / h },
        { textIndent: -l + "px", offset: (1e3 + u) / h, easing: "ease-in-out" },
        { textIndent: "0px", offset: 1 }
      ], { duration: h });
      f.onfinish = f.oncancel = () => {
        t.style.textOverflow = "", Gr.delete(t);
      };
    }, 600);
  }
  const Yo = new IntersectionObserver((t) => t.forEach((a) => {
    a.isIntersecting && !a.target.closest("[inert]") && (Yo.unobserve(a.target), Ur(a.target));
  }), { threshold: 1 });
  let Ss = !1;
  new MutationObserver(() => {
    Ss || me.names !== "scroll" || (Ss = !0, setTimeout(() => {
      Ss = !1, n.querySelectorAll(Vr).forEach((t) => {
        !t.dataset.glided && dr(t) && (t.dataset.glided = "1", Yo.observe(t));
      });
    }, 300));
  }).observe(n, { childList: !0, subtree: !0 });
  const oo = (t) => () => {
    j = t, Pa(), va(), ja(), ga();
  };
  function sd(t) {
    const a = () => _.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]');
    setTimeout(() => {
      var f;
      const i = a();
      if (!i) return;
      const l = (f = window.matchMedia) == null ? void 0 : f.call(window, "(prefers-reduced-motion: reduce)").matches, u = i.getBoundingClientRect();
      (u.top < 0 || u.bottom > window.innerHeight) && i.scrollIntoView({ behavior: l ? "auto" : "smooth", block: "center" });
      const h = (v) => "0 0 0 4px color-mix(in srgb,var(--primary) " + v + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + v + "%,transparent)";
      i.animate([{ boxShadow: h(55) }, { boxShadow: h(0) }], { duration: 1500, easing: l ? "steps(1, end)" : "ease-out" });
    }, ll(t) ? 260 : 0);
  }
  function ll(t) {
    const a = zo.get(t);
    if (!a || !Se.classList.contains("open") || Me) return !1;
    const { n: i, w: l } = eo(_.clientWidth), u = Se.getBoundingClientRect().left - _.getBoundingClientRect().left, h = (k) => k * (l + aa) + a.cols * l + (a.cols - 1) * aa <= u;
    if (h(a.col)) return !1;
    const f = /* @__PURE__ */ new Set();
    zo.forEach((k, D) => {
      if (D !== t) for (let N = k.row; N < k.row + k.rows; N++) for (let F = k.col; F < k.col + k.cols; F++) f.add(F + "," + N);
    });
    const v = (k, D) => {
      for (let N = D; N < D + a.rows; N++) for (let F = k; F < k + a.cols; F++) if (f.has(F + "," + N)) return !1;
      return !0;
    };
    for (let k = 0; k <= Vo; k++) for (let D = 0; D + a.cols <= i && h(D); D++)
      if (v(D, k))
        return Ai(qe(), { ...ko(), [t]: { col: D, row: k } }), ja(), !0;
    return !1;
  }
  const Ei = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, Se = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Se.setAttribute("aria-label", "Edit the dashboard"), Se.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd" type="button" data-tile-add aria-expanded="false">Add tile</button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection"><div class="sectionLabel">Areas</div><p class="tfTrayNote">One area on its own, instead of all of them in the Areas card.</p><button class="pill tfTrayAdd" type="button" data-room-add aria-expanded="false">Add area</button><ul class="tfTrayList" data-tray="roompick" hidden></ul></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd" type="button" data-fav-add aria-expanded="false">Add favourite</button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', m.appendChild(Se);
  let Me = !1, za = !1, hn = !1, Zo = !1, Ie = null, Sn = !1;
  const Yr = {}, So = (t, a) => {
    if (Yr[t] === a) return;
    Yr[t] = a;
    const i = Se.querySelector('[data-tray="' + t + '"]');
    i.innerHTML = a, bn(i);
  }, Cs = (t, a) => '<span class="tfTrayName"><span class="activityRowName">' + Q(St(t)) + '</span><span class="activityRowMeta">' + Q(a) + "</span></span>", ld = (t, a, i) => '<li class="tfTrayFav' + (a ? " off" : "") + '" data-tray-fav="' + Q(t) + '"><span class="tfTrayGrip" aria-hidden="true">' + Hd + '</span><span class="tfIcon"' + ye(t, na(t)) + "></span>" + Cs(t, a ? "Hidden" + (Ae.get(t) ? " · " + Ae.get(t) : "") : Ae.get(t) || sa(t)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + Q(t) + '" aria-pressed="' + !a + '" aria-label="' + (a ? "Show " : "Hide ") + Q(St(t)) + ' on the dashboard">' + (a ? tp : Th) + "</button>" + (i ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + Q(t) + '" aria-label="Remove ' + Q(St(t)) + ' from favourites">' + ep + "</button>" : "<span></span>") + "</li>";
  function dl(t, a, i, l) {
    const u = t.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(y).filter((f) => a(f) && !i.has(f) && y[f].state !== "unavailable").filter((f) => {
      const v = (St(f) + " " + (Ae.get(f) || "") + " " + f).toLowerCase();
      return u.every((k) => v.includes(k));
    }).sort((f, v) => (Ae.get(f) || "~").localeCompare(Ae.get(v) || "~") || St(f).localeCompare(St(v))).slice(0, 40).map((f) => '<li><button class="tfTrayPickItem" type="button" ' + l + '="' + Q(f) + '"><span class="tfIcon"' + ye(f, na(f)) + "></span>" + Cs(f, Ae.get(f) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  function ga() {
    const t = ma && m.classList.contains("tfBoard");
    if (Se.classList.toggle("open", t), Se.classList.toggle("tucked", t && Me), Se.toggleAttribute("inert", !t), t || (Sn = !1), ro(), !t) return;
    const a = Se.querySelector("[data-tray-tuck]");
    a.innerHTML = Me ? zc : ap, a.setAttribute("aria-expanded", String(!Me)), a.setAttribute("aria-label", Me ? "Show the edit tray" : "Tuck the edit tray away");
    const i = qe().hidden.filter((f) => In().some((v) => v.key === f));
    So("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (i.length ? '<div class="tfTrayCards">' + i.map((f) => '<button class="tfTrayCard" type="button" data-tray-card="' + Q(f) + '" aria-label="' + Q(da(f)) + ': drag it onto the board, or press to put it back"><span class="tfTrayGrip" aria-hidden="true">' + Hd + "</span>" + Q(da(f)) + "</button>").join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), So("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (qe().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + Sn + '">' + (Sn ? "Hide the phone" : "Show the phone") + "</button>");
    const l = new Set(j.favHidden || []), u = la(), h = [...u, ...[...l].filter((f) => !u.includes(f) && y[f])];
    if (So("favs", h.map((f) => ld(f, l.has(f), u.includes(f))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Se.querySelector('[data-pick="tiles"]').hidden = !hn, Se.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(hn)), hn && So("tilepick", dl(Se.querySelector("[data-tile-search]").value, (f) => Hl.includes(f.split(".")[0]), new Set(Mo()), "data-tile-pick")), Se.querySelector('[data-tray="roompick"]').hidden = !Zo, Se.querySelector("[data-room-add]").setAttribute("aria-expanded", String(Zo)), Zo) {
      const f = new Set(Mo());
      So("roompick", Be.filter((v) => !f.has("room:" + v.id)).map((v) => '<li><button class="tfTrayPickItem" type="button" data-room-pick="' + Q(v.id) + '"><span class="tfIcon"><span class="tfAreaGlyph"' + ye("area:" + v.id, v.icon || "mdi:texture-box", v.name) + '></span></span><span class="tfTrayName"><span class="activityRowName">' + Q(v.name) + "</span></span></button></li>").join("") || '<li class="tfTrayNote">Every area is on the board.</li>');
    }
    Se.querySelector('[data-pick="favs"]').hidden = !za, Se.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(za)), za && So("pick", dl(Se.querySelector("[data-fav-search]").value, (f) => Ei.test(f), new Set(la()), "data-fav-pick")), So("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (Ji() ? " on" : "") + '" type="button" role="switch" aria-checked="' + Ji() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const Di = (t) => {
    j = { ...j, ...t }, Pa(), va(), ga();
  };
  function Ts(t, a) {
    const i = j, l = new Set(j.favHidden || []);
    a ? l.delete(t) : l.add(t), Di({ favHidden: [...l] }), a ? Ka(St(t) + " put back") : Ka(St(t) + " hidden", oo(i));
  }
  const Zr = (t) => {
    const a = j;
    Di({ favourites: la().filter((i) => i !== t), favHidden: (j.favHidden || []).filter((i) => i !== t) }), Ka(St(t) + " removed from favourites", oo(a));
  }, cr = (t) => {
    Di({ favourites: [...la().filter((a) => a !== t), t], favHidden: (j.favHidden || []).filter((a) => a !== t) }), Ka(St(t) + " added to favourites");
  };
  Se.addEventListener("click", (t) => {
    var i;
    const a = t.target.closest("button");
    a && (a.hasAttribute("data-tray-done") ? qr(!1) : a.hasAttribute("data-tray-tuck") ? (Me = !Me, ga()) : a.hasAttribute("data-phone-toggle") ? (Sn = !Sn, ga(), Sn && ((i = ca.querySelector("[data-phone-key]")) == null || i.focus({ preventScroll: !0 }))) : a.dataset.trayCard ? t.detail === 0 && (lr(a.dataset.trayCard), ga()) : a.dataset.favEye ? Ts(a.dataset.favEye, a.getAttribute("aria-pressed") !== "true") : a.dataset.favRemove ? Zr(a.dataset.favRemove) : a.hasAttribute("data-fav-add") ? (za = !za, ga(), za && Se.querySelector("[data-fav-search]").focus({ preventScroll: !0 })) : a.dataset.favPick ? cr(a.dataset.favPick) : a.hasAttribute("data-tile-add") ? (hn = !hn, ga(), hn && Se.querySelector("[data-tile-search]").focus({ preventScroll: !0 })) : a.dataset.tilePick ? Ms(a.dataset.tilePick) : a.hasAttribute("data-room-add") ? (Zo = !Zo, ga()) : a.dataset.roomPick ? Ms("room:" + a.dataset.roomPick) : a.hasAttribute("data-fav-suggest") && Di({ suggest: !Ji() }));
  }), Se.addEventListener("input", (t) => {
    t.target.matches("[data-fav-search],[data-tile-search]") && ga();
  }), Se.addEventListener("keydown", (t) => {
    var i, l;
    const a = !!((l = (i = t.target).closest) != null && l.call(i, '[data-pick="tiles"],[data-tile-add]'));
    t.key !== "Escape" || !(a ? hn : za) || (t.stopPropagation(), a ? hn = !1 : za = !1, ga(), Se.querySelector(a ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function cl(t, a, i, l) {
    t.preventDefault();
    const u = t.clientX, h = t.clientY;
    let f = null, v = 0;
    const k = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), D = (F) => {
      if (!f) {
        if (Math.hypot(F.clientX - u, F.clientY - h) < 4) return;
        f = a.cloneNode(!0), f.classList.add("tfTrayGhost"), f.style.width = a.offsetWidth + "px", m.appendChild(f);
      }
      f.style.transform = "translate(" + (F.clientX - 24) + "px," + (F.clientY - 24) + "px)";
      const $ = !Me && F.clientX >= Se.getBoundingClientRect().left;
      if (i === "card") {
        const nt = _.getBoundingClientRect(), { w: xt } = eo(_.clientWidth);
        _e = !$ && F.clientX >= nt.left && F.clientX <= nt.right && F.clientY >= nt.top + pn ? { key: l, col: Math.max(0, Math.floor((F.clientX - nt.left) / (xt + aa))), row: Math.max(0, Math.floor((F.clientY - nt.top - pn) / yo)), fromTray: !0 } : null, v || (v = requestAnimationFrame(() => {
          v = 0, ja();
        }));
        return;
      }
      const Mt = _.querySelector(".tfDash-favs"), Dt = Mt == null ? void 0 : Mt.getBoundingClientRect();
      if (Ie = null, Dt && !$ && F.clientX >= Dt.left && F.clientX <= Dt.right && F.clientY >= Dt.top && F.clientY <= Dt.bottom) {
        let nt = 1 / 0;
        Mt.querySelectorAll('[data-k^="fav:"]').forEach((xt, V) => {
          const pt = xt.getBoundingClientRect(), z = Math.hypot(F.clientX - (pt.left + pt.width / 2), F.clientY - (pt.top + pt.height / 2));
          z < nt && (nt = z, Ie = { i: V, r: pt, after: F.clientX > pt.left + pt.width / 2 });
        }), Ie || (Ie = { i: 0, r: null, after: !1 });
      }
      Ie != null && Ie.r ? (k.isConnected || m.appendChild(k), Object.assign(k.style, { left: (Ie.after ? Ie.r.right : Ie.r.left) - 2 + "px", top: Ie.r.top + 8 + "px", height: Ie.r.height - 16 + "px" })) : k.remove();
    }, N = () => {
      if (window.removeEventListener("pointermove", D), window.removeEventListener("pointerup", N), window.removeEventListener("pointercancel", N), cancelAnimationFrame(v), f == null || f.remove(), k.remove(), i === "card") {
        if (!f) lr(l);
        else if (_e != null && _e.fromTray) {
          ja();
          const nt = da(l) + Mn(l), xt = qe(), V = ko();
          _e = null, Ai({ ...xt, hidden: xt.hidden.filter((pt) => pt !== l) }, V), Ka(nt);
        }
        _e = null, ja(), va(), ga();
        return;
      }
      if (!Ie) return;
      const F = new Set(j.favHidden || []);
      F.delete(l);
      const $ = la().filter((nt) => nt !== l), Mt = $.filter((nt) => !F.has(nt)), Dt = Mt[Math.min(Ie.i + (Ie.after ? 1 : 0), Mt.length)];
      $.splice(Dt ? $.indexOf(Dt) : $.length, 0, l), Ie = null, Di({ favourites: $, favHidden: [...F] }), Ka(St(l) + " put back");
    };
    window.addEventListener("pointermove", D), window.addEventListener("pointerup", N), window.addEventListener("pointercancel", N);
  }
  const As = { sums: 201, wx: 364, favs: 364, areas: 364, act: 364, energy: 288, avg: 288, aq: 288, pollen: 288, radar: 288 }, Ls = 136, dd = 288, cd = 0.8, pd = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, ca = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  ca.setAttribute("aria-label", "Phone order"), ca.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + ep + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', m.appendChild(ca);
  let io = "";
  function ro() {
    var v;
    const t = Sn && ma && m.classList.contains("tfBoard") && !Me;
    if (ca.classList.toggle("open", t), ca.toggleAttribute("inert", !t), !t) return;
    const a = Ti().filter((k) => !qe().hidden.includes(k.key)), i = a.length, l = (k) => Math.round(k * cd * 10) / 10 + "px", u = (k, D) => {
      const N = k.el.classList.contains("tfDac"), F = k.tile ? N ? dd : Ls : As[k.key] || Ls;
      return '<button class="tfPhoneBlock' + (k.tile ? " tile" : "") + '" type="button" data-phone-key="' + Q(k.key) + '" style="min-height:' + l(F) + '" aria-label="' + Q(da(k.key) + ", " + (D + 1) + " of " + i + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (k.tile ? ye(k.key, na(k.key)) : ye(k.key, pd[k.key])) + '></span><span class="tfPhoneName">' + Q(da(k.key)) + "</span></button>";
    }, h = '<div class="tfPhoneTitle">' + Q(((v = _.querySelector(".tfDashTitle")) == null ? void 0 : v.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + l(As.sums) + '"><span class="tfPhoneName">' + Q(da("sums")) + "</span></div>" + a.map(u).join("");
    if (ca.querySelector('[data-phone="note"]').innerHTML = qe().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", h === io) return;
    io = h;
    const f = ca.querySelector('[data-phone="list"]');
    f.innerHTML = h, bn(f);
  }
  function _s(t, a) {
    var i;
    rr({ ...qe(), phone: t }), ga(), a && ((i = ca.querySelector('[data-phone-key="' + CSS.escape(a) + '"]')) == null || i.focus({ preventScroll: !0 }));
  }
  const Co = () => [...ca.querySelectorAll("[data-phone-key]")].map((t) => t.dataset.phoneKey);
  function ud(t, a) {
    t.preventDefault();
    const i = a.parentElement, l = ca.querySelector(".tfPhoneScreen"), u = Co().join();
    a.classList.add("moving");
    const h = (v) => {
      const k = l.getBoundingClientRect();
      v.clientY > k.bottom - 40 ? l.scrollTop += 12 : v.clientY < k.top + 40 && (l.scrollTop -= 12);
      const D = [...i.querySelectorAll("[data-phone-key]")].find(($) => {
        const Mt = $.getBoundingClientRect();
        return $ !== a && v.clientX >= Mt.left && v.clientX <= Mt.right && v.clientY >= Mt.top && v.clientY <= Mt.bottom;
      });
      if (!D) return;
      const N = D.getBoundingClientRect(), F = D.classList.contains("tile") ? v.clientX < N.left + N.width / 2 : v.clientY < N.top + N.height / 2;
      i.insertBefore(a, F ? D : D.nextSibling);
    }, f = () => {
      window.removeEventListener("pointermove", h), window.removeEventListener("pointerup", f), window.removeEventListener("pointercancel", f), a.classList.remove("moving");
      const v = Co();
      io = "", v.join() !== u ? _s(v) : ro();
    };
    window.addEventListener("pointermove", h), window.addEventListener("pointerup", f), window.addEventListener("pointercancel", f);
  }
  ca.addEventListener("pointerdown", (t) => {
    const a = t.target.closest("[data-phone-key]");
    a && t.button <= 0 && ud(t, a);
  }), ca.addEventListener("click", (t) => {
    var i;
    const a = t.target.closest("button");
    if (a != null && a.hasAttribute("data-phone-close"))
      Sn = !1, ga(), (i = Se.querySelector("[data-phone-toggle]")) == null || i.focus({ preventScroll: !0 });
    else if (a != null && a.hasAttribute("data-phone-reset")) {
      const { phone: l, ...u } = qe();
      rr(u), ga();
    }
  }), ca.addEventListener("keydown", (t) => {
    var f, v, k, D;
    if (t.key === "Escape") {
      t.stopPropagation(), Sn = !1, ga(), (f = Se.querySelector("[data-phone-toggle]")) == null || f.focus({ preventScroll: !0 });
      return;
    }
    const a = (D = (k = (v = t.target).closest) == null ? void 0 : k.call(v, "[data-phone-key]")) == null ? void 0 : D.dataset.phoneKey, i = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[t.key];
    if (!a || !i) return;
    t.preventDefault();
    const l = Co(), u = l.indexOf(a), h = u + i;
    h < 0 || h >= l.length || ([l[u], l[h]] = [l[h], l[u]], _s(l, a));
  });
  function pr(t, a) {
    t.preventDefault();
    const i = a.parentElement;
    a.classList.add("moving");
    const l = (h) => {
      const f = [...i.children].find((v) => {
        const k = v.getBoundingClientRect();
        return v !== a && h.clientY >= k.top && h.clientY <= k.bottom;
      });
      if (f) {
        const v = f.getBoundingClientRect();
        i.insertBefore(a, h.clientY < v.top + v.height / 2 ? f : f.nextSibling);
      }
    }, u = () => {
      window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", u), window.removeEventListener("pointercancel", u), a.classList.remove("moving");
      const h = new Set(la());
      Yr.favs = null, Di({ favourites: [...i.children].map((f) => f.dataset.trayFav).filter((f) => h.has(f)) });
    };
    window.addEventListener("pointermove", l), window.addEventListener("pointerup", u), window.addEventListener("pointercancel", u);
  }
  Se.addEventListener("pointerdown", (t) => {
    if (t.button > 0) return;
    const a = t.target.closest("[data-tray-card]"), i = t.target.closest(".tfTrayFav");
    a ? cl(t, a, "card", a.dataset.trayCard) : i && t.target.closest(".tfTrayGrip") ? pr(t, i) : i != null && i.classList.contains("off") && !t.target.closest("button") && cl(t, i, "fav", i.dataset.trayFav);
  });
  function fd(t) {
    if (!ma || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const a = t.target.closest(".tfBoardItem"), i = a && In().find((F) => F.el === a);
    if (!i || Wa.includes(i.key)) return;
    const l = zo.get(i.key), { w: u } = eo(_.clientWidth);
    if (!l) return;
    t.preventDefault(), ao();
    const h = t.clientX, f = t.clientY;
    let v = !1, k = 0;
    const D = (F) => {
      const $ = F.clientX - h, Mt = F.clientY - f;
      if (!v) {
        if (Math.hypot($, Mt) < 4) return;
        v = !0, _e = { key: i.key, col: l.col, row: l.row }, a.classList.add("tfDragging");
      }
      a.style.transform = "translate(" + $ + "px," + Mt + "px)", _e.col = Math.round((l.x + $) / (u + aa)), _e.row = Math.round((l.y + Mt - pn) / yo), k || (k = requestAnimationFrame(() => {
        k = 0, ja();
      }));
    }, N = () => {
      window.removeEventListener("pointermove", D), window.removeEventListener("pointerup", N), window.removeEventListener("pointercancel", N), v && (cancelAnimationFrame(k), ja(), a.classList.remove("tfDragging"), a.style.transform = "", _e = null, Ai(qe(), ko()), ja(), va());
    };
    window.addEventListener("pointermove", D), window.addEventListener("pointerup", N), window.addEventListener("pointercancel", N);
  }
  function Ko(t = !1) {
    const a = _ == null ? void 0 : _.querySelector(".tfDashGraph svg[data-graph]");
    if (!(a != null && a.clientWidth)) return;
    const i = a.dataset.graph + "@" + a.clientWidth + "x" + a.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (a.dataset.drawn === i) return;
    const l = !a.dataset.drawn;
    a.dataset.drawn = i;
    const u = tr.find((h) => h.id === a.dataset.graph);
    u ? Ql(a, u).then(() => {
      (t || l) && el(a);
    }) : Qo(a.dataset.graph, a).then(() => {
      t && td(a);
    });
  }
  function pl() {
    var v, k, D;
    Qt = xr.model(o()), Jn(), y = Qt.states, y[(v = j.sources) == null ? void 0 : v.grid] && (Qt.grid = j.sources.grid), y[(k = j.sources) == null ? void 0 : k.alarm] && (Qt.security.alarms = [j.sources.alarm]), A.forEach((N, F) => {
      const $ = y[F], Mt = ($ == null ? void 0 : $.attributes) || {};
      if (!$ || Date.now() - N.at > 2 * 60 * 1e3) {
        A.delete(F);
        return;
      }
      N.pos != null && $.state !== "opening" && $.state !== "closing" && Math.abs(Ga(F) - N.pos) < 1 && delete N.pos, N.tilt != null && Math.abs((Mt.current_tilt_position ?? -1) - N.tilt) < 1 && delete N.tilt, N.pos == null && N.tilt == null && A.delete(F);
    });
    const t = [];
    let a = 0;
    const i = Tr();
    Be = i.filter((N) => N.room).map((N) => N.room), Be.some((N) => N.id === lt) || (lt = ((D = Be[0]) == null ? void 0 : D.id) || null);
    const l = _t === "weather" ? { key: "weather", name: "Weather" } : _t && i.find((N) => N.key === _t);
    if (l || (_t = null), m.classList.toggle("tfAreaOpen", !!l), m.classList.toggle("tfWeatherOpen", (l == null ? void 0 : l.key) === "weather"), m.classList.toggle("tfDash", !l), Ae = /* @__PURE__ */ new Map(), Qt.rooms.forEach((N) => [...N.actions, ...N.plugs, ...N.readings, ...N.openings, ...N.solar, ...N.plants.flatMap((F) => [F.id, ...F.readings])].forEach((F) => Ae.set(F, N.name))), !l) return ed(t, fi());
    if (t.push({ key: "areahead", html: Es(l, ++a) }), l.key === "weather")
      return t.weather = ++a, t;
    const u = l.ids, h = l.room ? l.room.id : l.key, f = l.room;
    return f != null && f.solar.length && t.push({ key: "energy:" + f.id, html: Kn(f, ++a) }), f && (f.readings.length || f.plugs.length || f.power != null) && t.push({ key: "readings:" + f.id, html: ho(f, ++a) }), f == null || f.plants.forEach((N) => t.push({ key: "plant:" + N.id, html: Ya(N, ++a) })), u.length && t.push({ key: "block:" + h, order: ++a, tiles: u.map((N) => ({ key: N, html: kt(N) })) }), t;
  }
  const Es = (t, a) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + a + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + zc + '</button><div class="settingsTitle">' + Q(t.name) + "</div></div>";
  let $o = 0, Bi = null;
  const Kr = (t) => t === "weather" ? fe.wx : t.startsWith("room:") && _.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || _.querySelector(".tfAreas");
  function $r(t) {
    var a, i;
    _t || ($o = Xo().scrollTop, Bi = ((a = Kr(t)) == null ? void 0 : a.getBoundingClientRect().top) ?? null), _t = t, t.startsWith("room:") && (lt = t.slice(5)), Fn(), Xo().scrollTop = 0, (i = _.querySelector("[data-area-back]")) == null || i.focus({ preventScroll: !0 });
  }
  let Hn = null;
  function Ri(t, a) {
    if (Hn == null || Hn(), a == null) return;
    const i = Xo(), l = performance.now() + 1500, u = ["wheel", "touchstart", "pointerdown", "keydown"];
    let h = 0;
    const f = () => {
      cancelAnimationFrame(h), u.forEach((k) => window.removeEventListener(k, f, !0)), Hn = null;
    }, v = () => {
      const k = t();
      if (k != null && k.isConnected) {
        const D = k.getBoundingClientRect().top - a;
        Math.abs(D) > 0.5 && (i.scrollTop += D);
      }
      performance.now() < l ? h = requestAnimationFrame(v) : f();
    };
    u.forEach((k) => window.addEventListener(k, f, { capture: !0, passive: !0 })), Hn = f, v();
  }
  function Ba() {
    var i;
    const t = _t;
    _t = null, Fn(), Xo().scrollTop = $o, Ri(() => Kr(t), Bi);
    const a = t.startsWith("room:") ? _.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || _.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? fe.wx.querySelector(".wbOpenPage") : _.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (i = (a == null ? void 0 : a.querySelector("[data-go]")) || a) == null || i.focus({ preventScroll: !0 });
  }
  const ul = (t) => t.wrap ? t.wrap(t.tiles.map((a) => a.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + Q(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((a) => a.html).join("") + "</div></div>", Ds = (t) => t.map((a) => a.key + (a.tiles ? "(" + a.tiles.map((i) => i.key).join(",") + ")" : "")).join(";");
  function Xo() {
    for (let t = m.parentElement || m.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const a = getComputedStyle(t).overflowY;
      if ((a === "auto" || a === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function fl(t) {
    const a = Xo(), i = (v) => {
      const k = v.getBoundingClientRect();
      return k.height && k.bottom > 0 && k.top < window.innerHeight;
    }, l = [..._.children, ..._.querySelectorAll(".tfDashTiles > *")].find((v) => !v.matches(".tfDashTiles") && i(v)), u = l == null ? void 0 : l.dataset.k, h = l == null ? void 0 : l.getBoundingClientRect().top;
    t();
    const f = l != null && l.isConnected ? l : u && _.querySelector('[data-k="' + CSS.escape(u) + '"]');
    f != null && f.isConnected && h != null && (a.scrollTop += f.getBoundingClientRect().top - h);
  }
  function Fn() {
    if (!w || !_) return;
    const t = pl();
    _.querySelectorAll("[data-tf]").forEach((i) => i.remove()), Ma.clear();
    const a = document.createElement("div");
    a.innerHTML = t.map((i) => i.tiles ? ul(i) : i.html).join(""), t.forEach((i) => i.tiles ? i.tiles.forEach((l) => Ma.set(l.key, l.html)) : Ma.set(i.key, i.html)), Ea = Ds(t), _.append(...a.children), yr(t.weather), li(), Or.disconnect(), ja(), bn(_), Cn(_), Bn(_), U(), P && Qo(P.id), Hi(), To(), Jo(), requestAnimationFrame(et);
  }
  const Xr = (t) => {
    var i;
    const a = n.activeElement && t.contains(n.activeElement) ? n.activeElement : null;
    return a && { label: a.getAttribute("aria-label"), act: (i = a.dataset) == null ? void 0 : i.act };
  }, Ni = (t, a) => {
    var i;
    a && ((i = a.label && t.querySelector('[aria-label="' + CSS.escape(a.label) + '"]') || a.act && t.querySelector('[data-act="' + CSS.escape(a.act) + '"]')) == null || i.focus({ preventScroll: !0 }));
  };
  function ur(t, a) {
    if (!t.querySelector(".tfDacPad"))
      return t.replaceWith(a), a;
    const i = t.matches(".tfDac") && t.querySelector(":scope > .tfDacPad"), l = a.querySelector(":scope > .tfDacPad");
    if (i)
      return (l == null ? void 0 : l.dataset.dac) !== i.dataset.dac ? (t.replaceWith(a), a) : (t.querySelector(":scope > .tfActionHead").replaceWith(a.querySelector(":scope > .tfActionHead")), t.classList.toggle("on", a.classList.contains("on")), ["data-light", "data-tone"].forEach((h) => a.hasAttribute(h) ? t.setAttribute(h, a.getAttribute(h)) : t.removeAttribute(h)), [...t.style].filter((h) => h.startsWith("--") && !h.startsWith("--tf-")).forEach((h) => t.style.removeProperty(h)), [...a.style].forEach((h) => t.style.setProperty(h, a.style.getPropertyValue(h))), t);
    if (t.tagName !== a.tagName || t.children.length !== a.children.length)
      return t.replaceWith(a), a;
    [...t.attributes].forEach((h) => {
      a.hasAttribute(h.name) || t.removeAttribute(h.name);
    }), [...a.attributes].forEach((h) => t.setAttribute(h.name, h.value));
    const u = [...a.children];
    return [...t.children].forEach((h, f) => ur(h, u[f])), t;
  }
  function Pi(t, a) {
    const i = document.createElement("div");
    i.innerHTML = a;
    const l = Xr(t), u = ur(t, i.firstElementChild);
    bn(u), Cn(u), Bn(u), Ni(u, l);
  }
  function va() {
    !w || !_ || _e || fl(hd);
  }
  function hd() {
    if (!_.querySelector("[data-tf]")) {
      Fn();
      return;
    }
    const t = pl();
    if (Ds(t) !== Ea) {
      Fn();
      return;
    }
    const a = (i) => [...Wt.keys()].some((l) => {
      const u = l.slice(l.indexOf("|") + 1);
      return i === u || i.endsWith(":" + u);
    });
    t.forEach((i) => (i.tiles || [i]).forEach((l) => {
      if (Ma.get(l.key) === l.html || a(l.key)) return;
      const u = _.querySelector('[data-k="' + CSS.escape(l.key) + '"]');
      if (u) {
        if (Ma.set(l.key, l.html), P && P.key === l.key && u.querySelector(".tfOpen")) {
          u.querySelector(".tfOpen .activityRowMeta").textContent = wn(P.id);
          return;
        }
        Pi(u, l.html), P && P.key === l.key && Qo(P.id), l.key.startsWith("energy:") && Hi();
      }
    })), To(), Jo(), Xi(), U(), Kt == null || Kt.update(), Oe == null || Oe.forEach((i) => i.update()), m.classList.contains("tfDash") && Li(), requestAnimationFrame(et);
  }
  const fr = {
    light: (t) => [["Brightness", t.brightness != null ? Math.round(t.brightness / 2.55) + "%" : null], ["Colour temperature", t.color_temp_kelvin ? Number(t.color_temp_kelvin).toLocaleString() + " K" : null], ["Colour mode", t.color_mode && Ht(t.color_mode)]],
    climate: (t) => [["Current temperature", Ia(t.current_temperature) + " °C"], ["Target", Ia(t.temperature) + " °C"], ["Action", Ht(t.hvac_action)]],
    cover: (t) => [["Position", t.current_position != null ? t.current_position + "% open" : null], ["Tilt", t.current_tilt_position != null ? t.current_tilt_position + "% open" : null]],
    humidifier: (t) => [["Current humidity", t.current_humidity + "%"], ["Target", t.humidity + "%"], ["Mode", Ht(t.mode)]],
    media_player: (t) => [["Title", t.media_title], ["Artist", t.media_artist], ["Volume", t.volume_level != null ? Math.round(t.volume_level * 100) + "%" : null], ["Source", t.source]],
    vacuum: (t) => [["Battery", t.battery_level + "%"], ["Fan speed", Ht(t.fan_speed)], ["Rooms", (t.rooms || []).join(", ") || null]],
    lock: (t) => [["Changed by", t.changed_by]],
    alarm_control_panel: (t) => [["Changed by", t.changed_by]],
    valve: () => [],
    plant: (t) => [["Moisture", t.moisture + "%"], ["Light", Number(t.brightness).toLocaleString() + " lx"], ["Temperature", Ia(t.temperature) + " °C"], ["Fertility", t.conductivity + " µS/cm"], ["Problems", t.problem === "none" ? "None" : Ht(t.problem)]],
    weather: (t) => [["Temperature", t.temperature != null ? t.temperature + " " + (t.temperature_unit || "°C") : null], ["Humidity", t.humidity != null ? t.humidity + "%" : null], ["Wind", t.wind_speed != null ? t.wind_speed + " " + (t.wind_speed_unit || "km/h") : null], ["Pressure", t.pressure != null ? t.pressure + " " + (t.pressure_unit || "hPa") : null]]
  }, hl = (t) => {
    var i;
    const a = (((i = fr[t.split(".")[0]]) == null ? void 0 : i.call(fr, xe(t))) || []).filter(([, l]) => l != null && l !== "");
    return a.length ? '<div class="tfMoreRows">' + a.map(([l, u]) => '<div class="tfMoreRow"><span>' + Q(l) + "</span><span>" + Q(u) + "</span></div>").join("") + "</div>" : "";
  }, Xa = (t) => qi(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function pa(t, a = {}, i = !1) {
    return '<div class="tfMoreList">' + t.map((l) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + Q(l.name) + '</div><div class="tfMoreTiles' + (i ? " single" : "") + '">' + l.ids.map((u) => bs(u, a)).join("") + "</div></div>").join("") + "</div>";
  }
  const re = document.createElement("div");
  re.className = "tfMoreBackdrop", re.hidden = !0, m.appendChild(re);
  const ml = (t, a) => {
    for (let i = t; i && i !== re; i = i.parentElement) {
      const l = getComputedStyle(i).overflowY;
      if ((l === "auto" || l === "scroll") && i.scrollHeight > i.clientHeight + 1 && (a < 0 ? i.scrollTop > 0 : i.scrollTop + i.clientHeight < i.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let Ii = null;
  re.addEventListener("touchstart", (t) => {
    Ii = { x: t.touches[0].clientX, y: t.touches[0].clientY };
  }, { passive: !0 }), re.addEventListener("touchmove", (t) => {
    var u, h;
    if (!Ii || t.touches.length > 1 || (h = (u = t.target).closest) != null && h.call(u, "input,textarea,select")) return;
    const a = t.touches[0], i = Ii.x - a.clientX, l = Ii.y - a.clientY;
    Ii = { x: a.clientX, y: a.clientY }, Math.abs(l) >= Math.abs(i) && !ml(t.target, l) && t.preventDefault();
  }, { passive: !1 }), re.addEventListener("wheel", (t) => {
    ml(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  function Bs() {
    const t = re.querySelector(".tfMorePair"), a = re.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - a.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", Bs, { passive: !0 }), w && Te();
  let so = [];
  const Rs = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function gl(t) {
    const a = (k, D = "") => '<div class="tfMoreHead">' + (H != null && H.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + Pd + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + Q(k) + "</div>" + D + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + ph + "</button></div>", i = (k, D) => '<div class="tfMoreNow"><div class="tfMoreState">' + Q(k) + "</div>" + (D ? '<div class="tfMoreSub">' + Q(D) + "</div>" : "") + "</div>", l = pa;
    if (t === "favourites") {
      const k = la(), D = new Set(k), N = [{ name: "Starred", ids: k }, { name: "Home", ids: Qt.homeVacuums }, { name: "Security", ids: [...Qt.security.alarms, ...Qt.security.locks] }, ...Qt.rooms.map((F) => ({ name: F.name, ids: [...F.actions, ...F.plugs] }))].map((F, $) => $ ? { ...F, ids: F.ids.filter((Mt) => !D.has(Mt)) } : F).filter((F) => F.ids.length);
      return [a("Favourites"), i(k.length ? k.length + " starred" : "None starred"), l(N, { star: !0 }, !0)];
    }
    const u = (k, { name: D = "", alert: N = !1, plain: F = !1 } = {}) => {
      const $ = F ? [] : k.filter((nt) => Hl.includes(nt.split(".")[0])), Mt = k.filter((nt) => !$.includes(nt)), Dt = (nt) => nt.startsWith("vacuum.") && xe(nt).battery_level != null ? xe(nt).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (D ? '<div class="tfMoreGroupName">' + Q(D) + "</div>" : "") + '<div class="tfMoreActions">' + $.map((nt) => kt(nt, !0)).join("") + Mt.map((nt) => bs(nt, { plain: F, alert: N, say: F ? Dt(nt) : null })).join("") + "</div></div>";
    };
    if (t.startsWith("summary:")) {
      const k = fi().find(($) => $.key === t.slice(8));
      if (!k) return null;
      const D = k.key === "light" ? (k.groups || []).flatMap(($) => $.ids) : [], N = D.some(($) => {
        var Mt;
        return ((Mt = y[$]) == null ? void 0 : Mt.state) === "on";
      }), F = D.length ? '<button class="primary" type="button" data-acts="' + _n(D.map(($) => ["light", N ? "turn_off" : "turn_on", $])) + '">' + (N ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [a(k.name), '<div class="tfMoreNowRow">' + i(k.value) + F + "</div>", ...(k.groups || []).map(($) => u($.ids, { name: $.name === k.name ? "" : $.name, alert: $.alert, plain: k.plain }))];
    }
    if (t.startsWith("group:")) {
      const [, k, D] = t.split(":"), N = Qt.rooms.find((Mt) => Mt.id === k), F = N && sn(N).find((Mt) => Mt.key === D);
      if (!F) return null;
      const $ = F.acts ? '<button class="primary" type="button" data-acts="' + _n(F.acts) + '">' + (F.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [a(N.name + " " + F.label.toLowerCase()), '<div class="tfMoreNowRow">' + i(F.value) + $ + "</div>", u(ln(N, D))];
    }
    const h = t.split(".")[0], f = y[t], v = Hl.includes(h) ? ce(t) : { sections: [] };
    return [
      a(St(t)),
      i(sa(t), f.last_changed && Gn(Date.parse(f.last_changed))),
      (H == null ? void 0 : H.at) && '<svg class="tfGraph tfDay" data-day="' + Q(t) + '" role="img" aria-label="' + Q(St(t)) + ', last 24 hours"></svg>',
      h === "cover" && '<div data-cover-art="' + Q(t) + '"></div>',
      ...v.sections.filter(Boolean),
      Ns(t) && '<button class="tfDetailsBtn" type="button" data-details aria-expanded="' + !!(H != null && H.details) + '" aria-controls="tfMoreSide"><span>Details</span>' + ap + "</button>"
    ].filter(Boolean);
  }
  const Ns = (t) => Rs(t) ? "" : hl(t) + Xa(t);
  let lo = "";
  function Jr(t) {
    var a;
    H && (H.details = t, To(), (a = re.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || a.focus({ preventScroll: !0 }));
  }
  const Qr = (t) => {
    const a = y[t], i = Ga(t), l = Un(t);
    return { kind: Nd(a), name: St(t), text: sa(t), pos: i, target: Math.abs(l - i) > 0.5 ? l : null, moving: a.state === "opening" || a.state === "closing", tilt: Yn(t) ?? 100, canSet: ze(t, Kc) };
  };
  function Cn(t) {
    t.querySelectorAll("[data-cover-art]").forEach((a) => {
      const i = a.dataset.coverArt, l = a.dataset.artKey || "more:" + i;
      let u = I.get(l);
      u || (u = ch({ onMove: (h) => Tn(i, h), onSet: (h) => {
        Tn(i, h), mr("pos", i);
      } }), u.coverId = i, I.set(l, u)), a.replaceWith(u.el), u.update(Qr(i));
    });
  }
  const ts = (t) => [...I.values()].filter((a) => a.coverId === t), Ps = () => I.forEach((t) => {
    y[t.coverId] && t.update(Qr(t.coverId));
  }), Jo = () => {
    I.forEach((t, a) => {
      t.el.isConnected || (t.destroy(), I.delete(a));
    }), Ps();
  };
  function To() {
    var h, f;
    if (!H || !(Rs(H.id) || y[H.id])) {
      re.hidden = !0;
      return;
    }
    if ([...Wt.keys()].some((v) => v.endsWith("|" + H.id))) {
      Ps();
      return;
    }
    const t = gl(H.id), a = re.querySelector(".tfMore");
    if (!t) {
      Ra();
      return;
    }
    const i = Xr(re), l = Ns(H.id), u = H.frame ? H.frame.wide : H.id.startsWith("summary:") || H.id.startsWith("group:");
    if (re.hidden || !a || t.length !== so.length || a.classList.contains("wide") !== u) {
      const v = hr ? H.scroll || 0 : !re.hidden && a ? a.scrollTop : 0;
      re.innerHTML = '<div class="tfMorePair' + (re.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (u ? " wide" : "") + '"' + (H.frame ? ' style="height:' + H.frame.h + 'px"' : "") + ">" + t.join("") + "</section>" + (l ? '<aside class="tfMoreSide" id="tfMoreSide" aria-label="Details"><div class="tfMoreSideInner"><div class="tfMoreHead"><button class="tfBack" type="button" data-details-close aria-label="Back">' + Pd + '</button><div class="activityTitle">Details</div></div><div class="tfMoreSideBody">' + l + "</div></div></aside>" : "") + "</div>", lo = l, re.classList.toggle("wide", u), re.hidden = !1, Bs(), Cn(re), Bn(re), bn(re), re.querySelectorAll("[data-day]").forEach((k) => wl(k.dataset.day, k, H.at)), v && (re.querySelector(".tfMore").scrollTop = v), Ni(re, i), re.contains(n.activeElement) || (h = re.querySelector("[data-more-close]")) == null || h.focus({ preventScroll: !0 });
    } else {
      if (t.forEach((v, k) => {
        var F, $;
        if (v === so[k] || v.includes("data-cover-art") || a.children[k].contains(($ = (F = n.activeElement) == null ? void 0 : F.matches) != null && $.call(F, "input,select") ? n.activeElement : null) || [...Wt.keys()].some((Mt) => a.children[k].querySelector('[data-drag="' + CSS.escape(Mt) + '"]'))) return;
        const D = document.createElement("div");
        D.innerHTML = v;
        const N = ur(a.children[k], D.firstElementChild);
        bn(N), Bn(N);
      }), l !== lo) {
        const v = re.querySelector(".tfMoreSideBody");
        v && (v.innerHTML = l), lo = l;
      }
      re.contains(n.activeElement) || Ni(re, i);
    }
    (f = re.querySelector(".tfMorePair")) == null || f.classList.toggle("details", !!(H.details && l)), so = t, Ps();
  }
  setInterval(() => {
    H && To();
  }, 15 * 1e3);
  function es(t, a) {
    var u;
    const i = !!(H && a && re.contains(a)), l = i && re.querySelector(".tfMore");
    i && (H.scroll = l.scrollTop), H = { id: t, opener: i ? H.opener : a, back: i ? H : null, frame: i ? H.frame || { wide: l.classList.contains("wide"), h: l.offsetHeight } : null, at: Number((u = a == null ? void 0 : a.dataset) == null ? void 0 : u.at) || null }, vl();
  }
  let hr = !1;
  function vl() {
    so = [], hr = !re.hidden, I.forEach((t, a) => {
      a !== H.id && re.contains(t.el) && (t.destroy(), I.delete(a));
    }), To(), hr = !1;
  }
  function Ra() {
    var i, l, u, h, f, v;
    const t = H == null ? void 0 : H.opener;
    H = null, I.forEach((k, D) => {
      re.contains(k.el) && (k.destroy(), I.delete(D));
    }), Vt.forEach((k, D) => {
      D.startsWith("more:") && Vt.delete(D);
    }), re.hidden = !0, re.innerHTML = "";
    const a = { preventScroll: !0 };
    t != null && t.isConnected ? t.focus(a) : (i = t == null ? void 0 : t.dataset) != null && i.more ? (l = _.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || l.focus(a) : (u = t == null ? void 0 : t.dataset) != null && u.summary ? (h = _.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || h.focus(a) : (f = t == null ? void 0 : t.hasAttribute) != null && f.call(t, "data-favs-edit") && ((v = _.querySelector("[data-favs-edit]")) == null || v.focus(a));
  }
  function as(t, a, i, l = {}) {
    const u = a.map((xt) => xt[1]), h = l.zero ? 0 : Math.min(...u), f = Math.max(...u), v = Math.max(120, t.clientWidth || 260), k = Math.max(60, t.clientHeight || 130), D = 8, N = k - 20, F = Date.now() - 24 * 3600 * 1e3, $ = 24 * 3600 * 1e3, Mt = (xt) => Math.max(0, Math.min(v, (xt - F) / $ * v)), Dt = (xt) => f === h ? (D + N) / 2 : N - (xt - h) / (f - h) * (N - D);
    let nt = "M" + Mt(a[0][0]).toFixed(1) + " " + Dt(a[0][1]).toFixed(1);
    for (let xt = 1; xt < a.length; xt++) nt += l.smooth ? "L" + Mt(a[xt][0]).toFixed(1) + " " + Dt(a[xt][1]).toFixed(1) : "H" + Mt(a[xt][0]).toFixed(1) + "V" + Dt(a[xt][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + v + " " + k), t.setAttribute("aria-label", i), t.innerHTML = '<path d="' + nt + "V" + N + "H" + Mt(a[0][0]).toFixed(1) + 'Z" fill="' + (l.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + nt + '" fill="none" stroke="' + (l.colour || "var(--primary)") + '" stroke-width="2" stroke-linejoin="round"/><text x="0" y="' + (k - 4) + '">24 h ago</text><text x="' + v + '" y="' + (k - 4) + '" text-anchor="end">Now</text>';
  }
  const bl = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, md = (t, a) => {
    const i = t.split(".")[0];
    return bl[i] ? bl[i].includes(a) : i === "alarm_control_panel" || i === "climate" || i === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(a) : a === "on";
  }, gd = (t) => {
    const a = t.split(".")[0], i = xe(t).device_class;
    return a === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[i] || (Il.includes(i) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[a] || "On";
  }, Is = /* @__PURE__ */ new Map();
  let vd = 0;
  async function Ja(t) {
    let a = Is.get(t);
    if (!a || Date.now() - a.at > 60 * 1e3) {
      let u = [];
      try {
        const h = await R({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        u = ((h == null ? void 0 : h[t]) || []).map((f) => [f.lu != null ? f.lu * 1e3 : Date.parse(f.last_updated || f.last_changed), String(f.s ?? f.state)]).filter(([f]) => Number.isFinite(f));
      } catch {
      }
      u.length || (u = (Qn || []).filter((h) => h.entity_id === t).map((h) => [h.when * 1e3, String(h.state)])), a = { at: Date.now(), pts: u }, Is.set(t, a);
    }
    const i = y[t], l = a.pts.slice().sort((u, h) => u[0] - h[0]);
    return i && (!l.length || l[l.length - 1][1] !== i.state) && l.push([Date.parse(i.last_changed) || Date.now(), i.state]), l;
  }
  async function wl(t, a, i) {
    const l = await Ja(t);
    if (!a.isConnected) return;
    const u = l.map(([z, jt]) => [z, Number(jt)]);
    if (l.length > 1 && u.every(([, z]) => Number.isFinite(z))) {
      as(a, u, St(t) + ", last 24 hours");
      return;
    }
    const h = Date.now(), f = h - 864e5, v = Math.max(200, a.clientWidth || 360), k = 62, D = (z) => Math.max(0, Math.min(v, (z - f) / 864e5 * v)), N = [];
    let F = null;
    l.forEach(([z, jt]) => {
      const He = md(t, jt);
      He && F == null ? F = Math.max(z, f) : !He && F != null && (N.push([F, Math.max(z, f)]), F = null);
    }), F != null && N.push([F, h]);
    const $ = dn(t) ? "var(--danger)" : t.startsWith("light.") ? "#ffaa00" : "var(--primary)", Mt = gd(t), Dt = "tfDayClip" + ++vd, nt = N.map(([z, jt]) => Mt + (jt >= h - 1e3 && z <= f + 1e3 ? " all day" : jt >= h - 1e3 ? " since " + Ye(z) : z <= f + 1e3 ? " until " + Ye(jt) : " " + Ye(z) + "–" + Ye(jt)));
    let xt = "", V = -1 / 0;
    N.forEach(([z], jt) => {
      const He = nt[jt].length * 5.4, ge = Math.min(D(z), v - He);
      ge < V + 8 || (xt += '<text x="' + ge.toFixed(1) + '" y="10">' + Q(nt[jt]) + "</text>", V = ge + He);
    });
    let pt = '<text x="' + v + '" y="' + (k - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((z) => {
      let jt = new Date(h).setHours(z, 0, 0, 0);
      jt > h && (jt -= 864e5), D(jt) > 8 && D(jt) < v - 34 && (pt += '<text x="' + D(jt).toFixed(1) + '" y="' + (k - 2) + '" text-anchor="middle">' + String(z).padStart(2, "0") + "</text>");
    }), a.setAttribute("viewBox", "0 0 " + v + " " + k), a.setAttribute("aria-label", St(t) + ", last 24 hours: " + (nt.length ? nt.join(", ") : "no changes")), a.innerHTML = '<clipPath id="' + Dt + '"><rect x="0" y="18" width="' + v + '" height="26" rx="8"/></clipPath>' + xt + '<rect x="0" y="18" width="' + v + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + Dt + ')">' + N.map(([z, jt]) => '<rect x="' + D(z).toFixed(1) + '" y="18" width="' + Math.max(2, D(jt) - D(z)).toFixed(1) + '" height="26" fill="' + $ + '"/>').join("") + "</g>" + (i && i >= f ? '<line x1="' + D(i).toFixed(1) + '" x2="' + D(i).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + pt;
  }
  function bd(t) {
    var l;
    const a = Number((l = y[t]) == null ? void 0 : l.state), i = Date.now();
    if (xe(t).state_class === "total_increasing") {
      const u = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), h = Math.max(1, i - u);
      return [...Array(49)].map((f, v) => u + h * v / 48).map((f) => [f, Math.round(a * Math.pow((f - u) / h, 1.3) * 100) / 100]);
    }
    return [...Array(48)].map((u, h) => [i - (48 - h) * 30 * 60 * 1e3, Math.round(a * (0.96 + 0.04 * Math.sin(h / 6)) * 10) / 10]);
  }
  async function Qo(t, a) {
    var Mt, Dt;
    let i = It.get(t);
    if (t.endsWith("_solar_power")) i = { at: Date.now(), points: mc() };
    else if (qi(t)) i = { at: Date.now(), points: bd(t) };
    else if (!i || Date.now() - i.at > 5 * 60 * 1e3) {
      try {
        const nt = new Date(Date.now() - 864e5).toISOString(), xt = await R({ type: "history/history_during_period", start_time: nt, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), V = ((xt == null ? void 0 : xt[t]) || []).map((pt) => [pt.lu != null ? pt.lu * 1e3 : Date.parse(pt.last_updated || pt.last_changed), Number(pt.s ?? pt.state)]).filter(([pt, z]) => Number.isFinite(pt) && Number.isFinite(z));
        i = { at: Date.now(), points: V };
      } catch {
        i = { at: Date.now(), points: [] };
      }
      It.set(t, i);
    }
    const l = a || _.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!l) return;
    const u = y[t], h = ((Mt = u == null ? void 0 : u.attributes) == null ? void 0 : Mt.unit_of_measurement) || "", f = i.points.slice(), v = Number(u == null ? void 0 : u.state);
    if (Number.isFinite(v) && !t.endsWith("_solar_power") && f.push([Date.now(), v]), f.length < 2) {
      l.setAttribute("aria-label", St(t) + ": no history for the last 24 hours"), l.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const k = f.map((nt) => nt[1]), D = Math.min(...k), N = Math.max(...k), F = (nt) => nt.toLocaleString(void 0, { maximumFractionDigits: Math.abs(nt) >= 100 ? 0 : 1 }), $ = ((Dt = u == null ? void 0 : u.attributes) == null ? void 0 : Dt.state_class) === "total_increasing";
    as(l, f, St(t) + ", last 24 hours: " + ($ ? "+" + F(k[k.length - 1] - k[0]) : D === N ? F(D) : F(D) + " to " + F(N)) + (h ? " " + h : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power") });
  }
  function Hi() {
    const t = _ == null ? void 0 : _.querySelector("[data-solar]");
    if (!t) return;
    const a = mc();
    as(t, a, "Solar, last 24 hours: up to " + Ia(Math.max(...a.map((i) => i[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function Hs(t, a) {
    const i = a.entity_id, l = A.get(i) || {}, u = { open_cover: 100, close_cover: 0, set_cover_position: a.position, toggle: Ga(i) > 0 ? 0 : 100 }[t], h = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: a.tilt_position }[t];
    u != null && (l.pos = u), h != null && (l.tilt = h), t === "stop_cover" && (delete l.pos, delete l.tilt), t === "stop_cover_tilt" && delete l.tilt, l.at = Date.now(), A.set(i, l);
  }
  function xl(t, a, i) {
    var u;
    const l = i == null ? void 0 : i.entity_id;
    return t !== "light" || typeof l != "string" || !yn[l] || !Vn(l) || i.brightness_pct != null || i.brightness != null ? [a, i] : a !== "turn_on" && !(a === "toggle" && ((u = y[l]) == null ? void 0 : u.state) !== "on") ? [a, i] : ["turn_on", { ...i, brightness_pct: yn[l] }];
  }
  function ti(t, a, i, l) {
    let u = { entity_id: i, ...l || {} };
    return [a, u] = xl(t, a, u), t === "cover" && Hs(a, u), le[i] = (le[i] || 0) + 1, Vi.set(Jc, JSON.stringify(le)), xr.call(t, a, u) ? Promise.resolve() : Promise.resolve(vt(t, a, u));
  }
  function Fi(t) {
    const [a, i, l, u] = t.split("|");
    ti(a, i, l, u ? JSON.parse(u) : null).catch(() => {
    });
  }
  function Tn(t, a) {
    Wt.set("pos|" + t, a), Ma.delete(t), so = so.map(() => ""), [_, re].forEach((l) => l.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((u) => dt(u, a)));
    const i = _.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (i && (i.textContent = Math.round(a) + "%"), (H == null ? void 0 : H.id) === t) {
      const l = re.querySelector(".tfMoreState"), u = re.querySelector(".tfMoreSub");
      l && (l.textContent = Math.round(a) + "%", l.classList.add("live")), u && (u.textContent = "Currently " + Ga(t) + "%");
    }
    ts(t).forEach((l) => l.update(Qr(t)));
  }
  const ns = (t, a) => {
    const i = t.shiftKey ? 10 : 1, l = { ArrowUp: a + i, ArrowRight: a + i, ArrowDown: a - i, ArrowLeft: a - i, PageUp: a + 25, PageDown: a - 25, Home: 0, End: 100 }[t.key];
    return l == null ? null : Math.max(0, Math.min(100, Math.round(l)));
  };
  function yl(t, a) {
    var nt;
    const i = t.dataset.blocks;
    (nt = t.setPointerCapture) == null || nt.call(t, a.pointerId);
    const l = (xt) => {
      const V = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (xt.clientX - V.left) / V.width * 100));
    }, u = l(a), h = a.clientX;
    let f = !1, v = Un(i), k = u, D = 0;
    const N = () => {
      v = Math.abs(k - v) < 0.2 ? k : v + (k - v) * 0.14, Tn(i, v), D = requestAnimationFrame(N);
    }, F = () => {
      f || (f = !0, t.classList.add("fine"), D = requestAnimationFrame(N));
    }, $ = setTimeout(F, 350), Mt = (xt) => {
      k = l(xt), Math.abs(xt.clientX - h) > 6 && (clearTimeout($), F());
    }, Dt = () => {
      clearTimeout($), cancelAnimationFrame(D), t.removeEventListener("pointermove", Mt), t.removeEventListener("pointerup", Dt), t.removeEventListener("pointercancel", Dt), t.classList.remove("fine"), Tn(i, f ? Math.round(v) : (Math.min(3, Math.floor(u / 25)) + 1) * 25), mr("pos", i);
    };
    t.addEventListener("pointermove", Mt), t.addEventListener("pointerup", Dt), t.addEventListener("pointercancel", Dt);
  }
  function Fs(t) {
    var u;
    const [a, i] = t.dataset.open.split("|"), l = t.closest(".tfCard");
    P = { key: a, id: i, h: l ? Math.round(l.getBoundingClientRect().height) : 0 }, Ma.delete(a), va(), (u = _.querySelector(".tfOpen [data-close]")) == null || u.focus({ preventScroll: !0 });
  }
  function Ao(t) {
    var a;
    lt = t.dataset.area, _.querySelectorAll(".tfAreaPanel").forEach((i) => {
      var u;
      const l = i === t;
      i.classList.toggle("active", l), i.setAttribute("aria-expanded", String(l)), (u = i.querySelector(".panelExpanded")) == null || u.toggleAttribute("inert", !l);
    }), Ma.set("areas", Xn(((a = _.querySelector('[data-k="areas"]')) == null ? void 0 : a.style.order) || 1));
  }
  const os = {
    bright: { value: (t, a) => Math.round(a * 100), text: (t, a) => a ? a + "%" : "Off", send: (t, a) => a > 0 ? ["light", "turn_on", { brightness_pct: a }] : ["light", "turn_off", {}] },
    ct: { value: (t, a) => {
      const [i, l] = No(t);
      return Math.round(i + a * (l - i));
    }, text: (t, a) => a.toLocaleString() + "k", send: (t, a) => ["light", "turn_on", { color_temp_kelvin: a }] },
    hue: { value: (t, a) => Math.round(a * 360), text: () => "Colour", send: (t, a) => {
      var i;
      return ["light", "turn_on", { hs_color: [a, Math.max(60, ((i = xe(t).hs_color) == null ? void 0 : i[1]) || 100)] }];
    } },
    pos: { value: (t, a) => Math.round(a * 100), text: (t, a) => Math.round(a) + "%", send: (t, a) => ["cover", "set_cover_position", { position: Math.round(a) }] },
    tilt: { value: (t, a) => Math.round(a * 100), text: (t, a) => "Tilt " + a + "%", send: (t, a) => ["cover", "set_cover_tilt_position", { tilt_position: a }] },
    vol: { value: (t, a) => Math.round(a * 100) / 100, text: (t, a) => Math.round(a * 100) + "%", send: (t, a) => ["media_player", "volume_set", { volume_level: a }] }
  };
  function Xe(t, a, i, l) {
    var k;
    const u = os[a].value(i, l);
    Wt.set(a + "|" + i, u);
    const h = Math.round(l * 100) + "%", f = t.querySelector("i");
    if (a === "tilt") {
      f.style.width = "calc((100% - 8px) * " + l + ")";
      const [D, N] = t.querySelectorAll("span");
      D.classList.toggle("lit", l > 0.08), N.classList.toggle("lit", l > 0.92), Ma.delete(i), so = so.map(() => ""), ts(i).forEach((F) => F.update(Qr(i)));
    } else if (f) f.style.width = h;
    else {
      let D = t.querySelector("b");
      D || (D = document.createElement("b"), t.appendChild(D)), D.style.left = h;
    }
    t.setAttribute("aria-valuenow", String(Math.round(l * 100)));
    const v = (k = t.closest(".tfAction") || t.closest(".tfMore")) == null ? void 0 : k.querySelector(".tfName .activityRowMeta, .tfMoreState");
    v && (v.textContent = os[a].text(i, u));
  }
  function mr(t, a) {
    const i = Wt.get(t + "|" + a), [l, u, h] = os[t].send(a, i), f = () => setTimeout(() => {
      Wt.delete(t + "|" + a), va();
    }, 1500);
    ti(l, u, a, h).then(f, f);
  }
  function On(t) {
    t.addEventListener("click", (a) => {
      var l, u;
      const i = a.target.closest("[data-open],[data-close],[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],.tfAreaPanel");
      if (kn && !a.target.closest(".tfBoardMenu,[data-board-more]") && ao(), !(!i || !t.contains(i) || i.disabled))
        if (i.dataset.boardMore)
          (kn == null ? void 0 : kn.key) === i.dataset.boardMore ? ao(!0) : id(i.dataset.boardMore, i);
        else if (i.dataset.boardAct) Go(kn.key, i.dataset.boardAct);
        else if (i.dataset.boardShow) lr(i.dataset.boardShow);
        else if (i.dataset.favHide) Ts(i.dataset.favHide, !1);
        else if (i.dataset.energyPick) tl(i.dataset.energyPick);
        else if (i.dataset.act) Fi(i.dataset.act);
        else if (i.hasAttribute("data-details")) Jr(!(H != null && H.details));
        else if (i.hasAttribute("data-details-close")) Jr(!1);
        else if (i.dataset.summary) mi(i.dataset.summary, i);
        else if (i.dataset.star) hi(i.dataset.star);
        else if (i.hasAttribute("data-more-back")) {
          const h = H.id;
          H = H.back, vl(), (l = re.querySelector('.tfMore [data-more="' + CSS.escape(h) + '"]')) == null || l.focus({ preventScroll: !0 });
        } else if (i.hasAttribute("data-favs-edit")) es("favourites", i);
        else if (i.dataset.acts) JSON.parse(i.dataset.acts).forEach(([h, f, v, k]) => ti(h, f, v, k).catch(() => {
        }));
        else if (i.dataset.more) es(i.dataset.more, i);
        else if (i.hasAttribute("data-more-close")) Ra();
        else if (i.dataset.go) $r("room:" + i.dataset.go);
        else if (i.hasAttribute("data-area-back")) Ba();
        else if (i.dataset.open) Fs(i);
        else if (i.hasAttribute("data-close")) {
          const h = P;
          P = null, Ma.delete(h.key), va(), (u = _.querySelector('[data-open="' + CSS.escape(h.key + "|" + h.id) + '"]')) == null || u.focus({ preventScroll: !0 });
        } else i.classList.contains("tfAreaPanel") && !i.classList.contains("active") && Ao(i);
    }), t.addEventListener("keydown", (a) => {
      var l, u, h, f, v, k, D;
      const i = a.target;
      if ((l = i.dataset) != null && l.open && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), Fs(i)), (u = i.dataset) != null && u.energyPick && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), tl(i.dataset.energyPick)), (h = i.classList) != null && h.contains("tfAreaPanel") && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), Ao(i)), (f = i.dataset) != null && f.summary && (a.key === "Enter" || a.key === " ") && (a.preventDefault(), mi(i.dataset.summary, i)), a.key === "Escape" && kn && t === _) {
        a.preventDefault(), ao(!0);
        return;
      }
      if (a.key === "Escape" && ma && t === _) {
        a.preventDefault(), qr(!1), (v = c("dashEditNav")) == null || v.focus();
        return;
      }
      if (a.key === "Escape" && _t && t === _ && (a.preventDefault(), Ba()), (k = i.dataset) != null && k.blocks) {
        const N = i.dataset.blocks, F = ns(a, Math.round(Un(N)));
        if (F == null) return;
        a.preventDefault(), Tn(N, F), clearTimeout(mt.get(N)), mt.set(N, setTimeout(() => mr("pos", N), 500));
        return;
      }
      if ((D = i.dataset) != null && D.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(a.key)) {
        a.preventDefault();
        const [N, F] = i.dataset.drag.split("|"), $ = Number(i.getAttribute("aria-valuenow")) / 100, Mt = a.key === "Home" ? 0 : a.key === "End" ? 1 : Math.max(0, Math.min(1, $ + (a.key === "ArrowLeft" || a.key === "ArrowDown" ? -0.05 : 0.05)));
        Xe(i, N, F, Mt), mr(N, F);
      }
    }), t.addEventListener("pointerdown", (a) => {
      var He;
      const i = a.target.closest("[data-blocks]");
      if (i && a.button === 0) {
        a.preventDefault(), yl(i, a);
        return;
      }
      const l = a.target.closest("[data-drag]");
      if (!l || a.button > 0) return;
      const [u, h] = l.dataset.drag.split("|"), f = u === "bright" && !Vn(h), v = a.pointerType !== "mouse";
      if (f && !v) {
        Fi(Le("light", "toggle", h));
        return;
      }
      const k = u === "bright" && ((He = y[h]) == null ? void 0 : He.state) !== "on", D = u === "tilt" ? 4 : 0, N = () => l.getBoundingClientRect().width - D * 2, F = (ge) => {
        const Sa = l.getBoundingClientRect();
        return Math.max(0, Math.min(1, (ge.clientX - Sa.left - D) / N()));
      };
      let $ = v ? "waiting" : k ? "pressed" : "dragging", Mt = 0;
      const Dt = a.clientX, nt = a.clientY, xt = (ge, Sa) => Math.hypot(ge.clientX - Dt, ge.clientY - nt) > Sa, V = () => {
        try {
          l.setPointerCapture(a.pointerId);
        } catch {
        }
      };
      v || (a.preventDefault(), V()), $ === "dragging" && Xe(l, u, h, F(a));
      const pt = () => {
        var ge, Sa;
        $ = "sliding", E = l, l.classList.add("held"), V(), (ge = navigator.userActivation) != null && ge.hasBeenActive && ((Sa = navigator.vibrate) == null || Sa.call(navigator, 8)), Mt = k ? (yn[h] ?? 100) / 100 : Number(l.getAttribute("aria-valuenow")) / 100;
      }, z = (ge) => {
        $ === "waiting" && xt(ge, M) ? !f && Math.abs(ge.clientX - Dt) > Math.abs(ge.clientY - nt) ? pt() : $ = "gone" : $ === "pressed" && xt(ge, 4) && ($ = "dragging"), $ === "sliding" ? Xe(l, u, h, Math.max(0, Math.min(1, Mt + (ge.clientX - Dt) / N()))) : $ === "dragging" && Xe(l, u, h, F(ge));
      }, jt = (ge) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((Sa, Jt) => l.removeEventListener(Sa, Jt ? jt : z)), l.classList.remove("held"), E === l && (E = null), $ === "sliding" || $ === "dragging" ? mr(u, h) : ge.type === "pointerup" && f ? Fi(Le("light", "toggle", h)) : ge.type === "pointerup" && k && ($ === "waiting" || $ === "pressed") && ti("light", "turn_on", h).catch(() => {
        });
      };
      l.addEventListener("pointermove", z), l.addEventListener("pointerup", jt), l.addEventListener("pointercancel", jt);
    }), t.addEventListener("touchmove", (a) => {
      E && a.cancelable && a.preventDefault();
    }, { passive: !1 });
  }
  return _ && w && (Ho(), On(_), On(re), re.addEventListener("click", (t) => {
    t.target === re && Ra();
  }), (Os = n.getElementById("homeNav")) == null || Os.addEventListener("click", () => {
    _t && Ba();
  }), (kl = n.querySelector(".bottomNav")) == null || kl.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + np + "</button>"), (is = c("dashEditNav")) == null || is.addEventListener("click", () => qr(!ma)), _.addEventListener("pointerdown", fd), new ResizeObserver(() => {
    m.classList.contains("tfDash") && yi() !== ar ? va() : Li();
  }).observe(_), window.addEventListener("resize", Li, { passive: !0 }), re.addEventListener("keydown", (t) => {
    t.key === "Escape" && (t.stopPropagation(), H != null && H.details ? Jr(!1) : Ra());
  })), tt(), {
    update(t) {
      if (!w) return;
      const a = !Object.keys(y).length;
      y = { ...Object.fromEntries(Object.entries(y).filter(([l]) => qi(l))), ...t || {} };
      for (const l in y) l.startsWith("light.") && y[l].state === "on" && Vn(l) && x(l, jn(y[l]));
      a ? Fn() : va();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      Bo = !0, Kt == null || Kt.destroy(), Kt = null, Oe == null || Oe.forEach((t) => t.destroy()), Oe = null;
    },
    resume() {
      Bo = !1, !(!w || !(_ != null && _.querySelector("[data-tf]"))) && (de.isConnected && yr(de.style.order), li());
    }
  };
}
const Hh = "0.66.1", Od = "move_assistant", Fh = "move_assistant", rp = "move_assistant_checkin_reminder";
function Oh() {
  if (document.getElementById("move-assistant-inter")) return;
  const n = document.createElement("link");
  n.id = "move-assistant-inter", n.rel = "stylesheet", n.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(n);
}
class Wh extends HTMLElement {
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
    var c;
    const o = !this._hass;
    if (this._hass = d, o) {
      this._init();
      return;
    }
    this._app && d.states !== this._lastStates && (this._lastStates = d.states, this._app.updateStates(d.states), (c = this._test) == null || c.update(d.states));
  }
  connectedCallback() {
    var d, o;
    (d = this._app) == null || d.resume(), (o = this._test) == null || o.resume();
  }
  disconnectedCallback() {
    var d, o;
    (d = this._app) == null || d.suspend(), (o = this._test) == null || o.suspend();
  }
  async _init() {
    Oh();
    const d = this.shadowRoot || this.attachShadow({ mode: "open" });
    d.innerHTML = `<style>${jp}${zp}${Vp}</style>${Gp}`;
    const o = d.getElementById("app");
    o.style.opacity = "0";
    let c = null;
    try {
      const m = await this._hass.callWS({
        type: "frontend/get_user_data",
        key: Od
      });
      c = (m == null ? void 0 : m.value) ?? null;
    } catch {
    }
    this._lastSaved = JSON.stringify(c), this._app = pu(d, {
      data: c,
      save: (m) => this._save(m),
      fire: (m, b) => this._fire(m, b),
      ws: (m) => this._hass.callWS(m),
      subscribe: (m, b) => {
        var w, L;
        return (L = (w = this._hass) == null ? void 0 : w.connection) != null && L.subscribeMessage ? this._hass.connection.subscribeMessage(b, m) : Promise.reject(new Error("no connection"));
      },
      notifyServices: () => {
        var m, b;
        return Object.keys(((b = (m = this._hass) == null ? void 0 : m.services) == null ? void 0 : b.notify) || {}).sort();
      },
      setReminderAutomation: (m) => this._setReminderAutomation(m),
      setLight: (m) => this.classList.toggle("lightBody", m),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._app.updateStates(this._hass.states), this._test = Ih(d, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), this.isConnected || (this._app.suspend(), this._test.suspend()), o.style.transition = "opacity .2s ease", o.style.opacity = "", this._subscribe();
  }
  _subscribe() {
    var o;
    const d = (o = this._hass) == null ? void 0 : o.connection;
    d != null && d.subscribeMessage && d.subscribeMessage(
      (c) => {
        var b;
        const m = JSON.stringify((c == null ? void 0 : c.value) ?? null);
        m === this._lastSaved || m === this._pendingJson || (this._lastSaved = m, (b = this._app) == null || b.applyRemoteData(c.value));
      },
      { type: "frontend/subscribe_user_data", key: Od }
    ).catch(() => {
    });
  }
  _save(d) {
    this._pendingJson = JSON.stringify(d), clearTimeout(this._saveTimer), this._saveTimer = setTimeout(async () => {
      const o = this._pendingJson;
      try {
        await this._hass.callWS({
          type: "frontend/set_user_data",
          key: Od,
          value: JSON.parse(o)
        }), this._lastSaved = o;
      } catch {
        this._toast("Couldn't save to Home Assistant");
      }
    }, 400);
  }
  _fire(d, o = {}) {
    var c, m;
    ((c = this._config) == null ? void 0 : c.events) !== !1 && ((m = this._hass) == null || m.callWS({
      type: "fire_event",
      event_type: Fh,
      event_data: { action: d, ...o }
    }).catch(() => {
    }));
  }
  // Keeps one Home Assistant automation in sync with the check-in times.
  // Passing null removes it.
  async _setReminderAutomation(d) {
    const o = `config/automation/config/${rp}`;
    if (!d) {
      try {
        await this._hass.callApi("DELETE", o);
      } catch (b) {
        if ((b == null ? void 0 : b.status_code) !== 404 && (b == null ? void 0 : b.status) !== 404) throw b;
      }
      return;
    }
    const c = (b) => `${b}:00`, m = window.location.pathname;
    await this._hass.callApi("POST", o, {
      id: rp,
      alias: "Move Assistant check-in reminder",
      description: "Created by Move Assistant. Change it in Move Assistant → Settings → Check-in.",
      mode: "single",
      triggers: [
        { trigger: "time", at: c(d.times.morning), id: "morning" },
        { trigger: "time", at: c(d.times.evening), id: "evening" }
      ],
      conditions: [],
      actions: [
        {
          action: `notify.${d.target}`,
          data: {
            title: "Move Assistant",
            message: "{{ 'Morning' if trigger.id == 'morning' else 'Evening' }} check-in is ready",
            data: { url: m, clickAction: m }
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
    const o = this.requestFullscreen || this.webkitRequestFullscreen;
    Promise.resolve(o.call(this)).catch(
      () => this._toast("Full screen isn't available here")
    );
  }
  _toast(d) {
    var c;
    const o = (c = this.shadowRoot) == null ? void 0 : c.getElementById("toast");
    o && (o.textContent = d, o.classList.add("show"), setTimeout(() => o.classList.remove("show"), 2600));
  }
}
customElements.get("move-assistant-card") || (customElements.define("move-assistant-card", Wh), window.customCards = window.customCards || [], window.customCards.push({
  type: "move-assistant-card",
  name: "Move Assistant",
  description: "Guided movement timer with your Home Assistant activity data.",
  preview: !1
}), console.info(`%c MOVE ASSISTANT %c ${Hh} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
